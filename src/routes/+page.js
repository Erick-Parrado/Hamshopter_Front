import axios from "axios"

export const load = ()=>{
    try{
        axios.get('http://localhost:3000/items')
        .then((res)=>{
            console.log(res)
        })
    }
}