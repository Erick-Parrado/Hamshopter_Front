import express from 'express'
import cors from 'cors'
import db from './firestore.js';
import { ComprasRouter } from './routes/compra.js';
import { InventarioRouter } from './routes/inventario.js';

const app = express()
const port = 3000

//Dependencias
app.use(express.json());
app.use(cors())

const requestTime = function (req, res, next) {
  req.requestTime = Date.now()
  next()
}

//Dependencias
app.use(requestTime)

const database = function(req,res,next){
  req.db = db
  next()
}

app.use(database)


//Iniciador de aplicación
app.listen(port, () => {
  console.log(`Hamshopter app listening on port ${port}`)
})

//Rutas
app.use(ComprasRouter)  
app.use(InventarioRouter)  
