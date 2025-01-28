import express from 'express'
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import crearCompra from './actions/compra.js';
import cors from 'cors'

const firebaseConfig = {
  apiKey: "AIzaSyAbuVRtDT8ewKGl_Bbc5q9SeibfMHmsub4",
  authDomain: "hamshopter.firebaseapp.com",
  projectId: "hamshopter",
  storageBucket: "hamshopter.firebasestorage.app",
  messagingSenderId: "482589018973",
  appId: "1:482589018973:web:fc74118d14a49ababe36b4"
};

const app = express()
const port = 3000

const firebase_app = initializeApp(firebaseConfig);

const db = getFirestore(firebase_app);

app.use(express.json());
app.use(cors())

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.get('/amigos/:id',(req,res)=>{

})

app.get('/amigos',(req,res)=>{
  res.send("Friend")
})

app.get('/compra/:id',(req,res)=>{

})

app.post('/compra',(req,res)=>{
  console.log(req.body)
  crearCompra(db,req.body,res)
})
