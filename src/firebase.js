/* eslint-disable no-undef */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// firebase configuration
const app = initializeApp({
  apiKey: process.env.REACT_APP_API_KEY ,
  authDomain: process.env.REACT_APP_Auth_Domain ,
  projectId: process.env.REACT_APP_Project_Id ,
  storageBucket: process.env.REACT_APP_Storage_Bucket ,
  messagingSenderId: process.env.REACT_APP_Messaging_Sender_Id ,
  appId: process.env.REACT_APP_App_Id ,
});

export default app;
