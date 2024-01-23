import logo from './logo.svg';
import './App.css';
import {useState} from "react"
import axios from 'axios';
import * as XLSX from "xlsx"

function App() {
  
  const [msg, setmsg] = useState("")
  const [status,setstatus]=useState(false)
  const [emailList,setemailList]=useState([])
  function getmsg(e){
    setmsg(e.target.value)
  }
  
  function send(){
    setstatus(true)
    axios.post("http://localhost:3001/mailer",{msg:msg,emailList:emailList}).then(function(data){
      if(data.data === true){
        alert("Mail Sent Successfully")
        setstatus(false)
      }else{
        alert("Mail Not Sent..")
      }
    }
    )}

  function handlefile(e){
    const file=e.target.files[0]
    const reader=new FileReader();

    reader.onload=function(evt){
      const data=evt.target.result;
      const workbook=XLSX.read(data,{type:'binary'})
      const sheetname=workbook.SheetNames[0]
      const worksheet=workbook.Sheets[sheetname]
      const emailList=XLSX.utils.sheet_to_json(worksheet,{header:'A'})
      const totalMail=emailList.map(function(item){return item.A})
      setemailList(totalMail)

    }


    reader.readAsBinaryString(file);
  }
   

  return (
    <>
      <div class="text-center text-white">
        <div class="bg-blue-950 p-2">
          <h1 class="text-2xl">BulkMail</h1>
        </div>

        <div class="bg-blue-900 p-2">
          <p>We can help your buiseness with sending multiple emails at once</p>
        </div>

        <div class="bg-blue-800 p-2">
          <p>Drag and Drop</p>
        </div>

        <div class="bg-blue-500 p-2">
          <textarea class="w-96 h-20 mt-2 rounded-md p-1 text-black" placeholder="Enter the Mail text" onChange={getmsg} value={msg}></textarea>
          <div class="text-black" >
            <input class="p-2 border border-dashed" onChange={handlefile} type="file" />
            <p>Total Emails in the file:{emailList.length}</p>
          </div>
          <button class="bg-blue-950 p-1 rounded-md" onClick={send}>{status? "Sending...":"Send"}</button>
        </div>
        <div class="bg-blue-200 text-white text-center p-8"></div>
      </div>
      
    </>
  );
}

export default App;
