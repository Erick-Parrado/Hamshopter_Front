import express from 'express'
import { collection,addDoc,getDocs, query,where, limit, orderBy} from "firebase/firestore";
import { Cliente } from '../entities/clientes.js';

const router = express.Router()

router.get('/items',async (req,res)=>{
    let body = req.body
    try {
        const snapshotItems = getDocs(collection(req.db,"inventario"))
        const items = (await snapshotItems).docs.map((doc)=>{
            console.log(doc.data())
            return doc.data()
        })
        res.status(200).send(items)
    }catch (e) {
        console.error("Error adding document: ", e);
    }
})

export {router as InventarioRouter}