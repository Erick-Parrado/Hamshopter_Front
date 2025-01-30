import axios from "axios"

export const load = async ()=>{
    try{
        let items = await axios.get('http://localhost:3000/items')
        .then((res)=>{
            return res.data
        })
        return {items}
        
    }
    catch(e){
        console.log(e)
    }
}