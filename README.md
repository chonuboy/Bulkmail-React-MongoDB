# BulkMail

BulkMail is a MERN (MongoDB, Express.js, React, Node.js) application that allows users to send a message to multiple Email accounts by uploading Excel file that contains the Emails.

## Features

- It is a MERN app for sending messages to Multiple users
- it contains Two folders named Frontend and Backend
- Frontend Folder contains the client side files and the Backend folder contains server side files
- This app is connected to the MongoDB cloud that allows the app to run on every machine

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

Make sure you have the following software installed on your machine:

- Node.js: [Download and Install Node.js](https://nodejs.org/)
- MongoDB: [Download and Install MongoDB](https://www.mongodb.com/try/download/community)

### Installation

1. Clone the repository:

   git clone https://github.com/chonuboy/Bulkmail-React-MongoDB.git

2. Navigate to the Project Directory:
   cd Bulkmail

3. Install Dependencies for both Frontend and Backend:
   # Install backend dependencies
        cd backend
        You can find a Index.js file on backend Folder in Terminal type node Index.js to run the server on port 3001.
        install the dependencies on backend folder
        npm install express
        npm install mongoose
        npm install cors
        

   # Install frontend dependencies
        cd ../frontend
        npm install
        after the installation type npm start

### Folder Structure

bulkmail/
│
├── backend/          # Express.js server and API
│   ├── config/       # Configuration files
│   ├── controllers/  # Route controllers
│   ├── models/       # MongoDB models
│   ├── routes/       # API routes
│   └── index.js      # Main server file
│
└── frontend/          # React.js client-side application
    ├── public/       # Static assets
    └── src/          # React components and styles
