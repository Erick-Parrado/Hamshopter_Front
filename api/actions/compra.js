import { collection,addDoc } from "firebase/firestore";


const crearCompra = async(db,body,res) =>{
    try {
        const docRef = await addDoc(collection(db, "clientes"), {
            tipo_id:body.tipo_id,
            num_id:body.num_id,
            nombre:body.nombre
        });
        console.log("Document written with ID: ", docRef.id);
        res.send("Hecho")
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

export default crearCompra