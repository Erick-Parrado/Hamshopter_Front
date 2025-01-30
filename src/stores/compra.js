import { writable } from "svelte/store";

export const compra = writable({
    cliente:"",
    transaccion:"",
    fecha:"",
    items:{},
    subtotal:"",
    recargo:"",
    total:"",
    direccion:"",
    estado:""
})