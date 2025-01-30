import {collection, QuerySnapshot} from "firebase/firestore"

class Cliente{
    constructor(num_id,tipo_id,nombre){
        this.num_id = num_id
        this.tipo_id = tipo_id
        this.nombre = nombre
    }
}

const clienteConverter = {
    toFirestore:(cliente)=>{
        return{
            id:cliente.num_id,
            tipo_id:cliente.tipo_id,
            nombre:cliente.nombre
        }
    },
    fromFirestore:(snapshot,options)=>{
        const data = snapshot.docs.map((doc)=>{
            let data = doc.data()
            return new Cliente(
                data.num_id,
                data.tipo_id,
                data.nombre
            );
        });
    }
}


export {Cliente,clienteConverter}