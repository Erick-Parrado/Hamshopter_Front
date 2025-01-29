import express from 'express'
import { collection,addDoc,getDocs, query,where, limit, orderBy} from "firebase/firestore";
import { Cliente } from '../colections/clientes.js';

const router = express.Router()

router.get('/pago',async (req,res)=>{
    let body = req.body
    
    try {
        const consultaClienteExistente = query(collection(req.db,"clientes"), where("num_id","==",body.num_id))
        
    }catch (e) {
        console.error("Error adding document: ", e);
    }
    res.send('-_-')
})

export {router as ComprasRouter}


