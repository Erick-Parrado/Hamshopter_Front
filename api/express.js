import express from 'express'
import cors from 'cors'
import { ComprasRouter } from './routes/compra.js';
import db from './firestore.js';

const app = express()
const port = 3000

//Dependencias
app.use(express.json());
app.use(cors())

const requestTime = function (req, res, next) {
  req.requestTime = Date.now()
  next()
}

app.use(requestTime)

const database = function(req,res,next){
  req.db = db
  next()
}

app.use(database)


app.listen(port, () => {
  console.log(`Hamshopter app listening on port ${port}`)
})

//Routes
app.use(ComprasRouter)  
