const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")

const app = express()

app.use(cors())

app.use(express.json())

app.listen(3001, function () {
    console.log("Server Started...")
})

mongoose.connect("mongodb+srv://nanthakumar:chonuchonu@cluster0.hvgz1kg.mongodb.net/passkey?retryWrites=true&w=majority").then(function () {
    console.log("DB Connected Successfully")
}).catch(function () {
    console.log("Failed To Connect")
})

const creds = mongoose.model("creds", {}, "users")

const nodemailer = require("nodemailer");



app.post("/mailer", function (req, res) {

    var msg = req.body.msg
    var emailList = req.body.emailList
    creds.find().then(function (data) {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                // TODO: replace `user` and `pass` values from <https://forwardemail.net>
                user: data[0].toJSON().user,
                pass: data[0].toJSON().pass,
            },
        });
        new Promise(async function (resolve, reject) {
            try {
                for (var i = 0; i < emailList.length; i++) {
                    await transporter.sendMail(
                        {
                            from: "knanthakumar12@gmail.com",
                            to: emailList[i],
                            subject: "A Message from bulkmail app",
                            text: msg
                        }
                    )
                    console.log("Email Sent to:" + emailList[i])
                } resolve("Success")
            }
            catch (err) {
                reject("Failed")
            }
        }).then(function () {
            res.send(true)
        }).catch(function () {
            res.send(false)
        })
    }).catch(function (err) {
        console.log(err)
    })


})

