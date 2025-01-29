import { collection,addDoc,getDocs, query,where, limit, orderBy} from "firebase/firestore";


const realizarCompra = async(db,body,res) =>{
    crearTransaccion(db,body);
    try {
        const consultaClienteExistente = query(collection(db,"clientes"), where("num_id","==",body.num_id))
        const clienteExiste = (await getDocs(consultaClienteExistente)).empty;
        if(!clienteExiste){
            crearCliente(db,body);
        }
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

const crearCliente = async(db,body)=>{
    const docRef = await addDoc(collection(db, "clientes"), {
        tipo_id:body.tipo_id,
        num_id:body.num_id,
        nombre:body.nombre
    });
    console.log("Document written with ID: ", docRef.id);
}

const crearTransaccion = async(db,body)=>{
    const queryUltimaTransaccion = query(collection(db,"transacciones"),orderBy('num_transaccion','desc'))
    const snapshotUltimaTransaccion  = await getDocs(queryUltimaTransaccion)
    let numTransaccion = snapshotUltimaTransaccion.size + 1
    console.log(snapshotUltimaTransaccion)
    const docRef = await addDoc(collection(db, "transacciones"), {
        titular: body.titular,
        titular_id: body.titular_id,
        titular_tipo_id: body.titular_tipo_id,
        num_tarjeta: body.num_tarjeta,
        num_transaccion:numTransaccion,
        monto:30000,
        fecha:4555,
        entidad:body.num_tarjeta
    });
    console.log(`Transaccion #${numTransaccion} creada.(${docRef.id})`);
}


export default realizarCompra  