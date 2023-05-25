import express from 'express'
import {pool} from './db.js'
import usuariosRoutes from './routes/usuarios.routes.js'
import indexRoutes from './routes/index.routes.js'
//import './config.js'
import cors from 'cors'

const app=express()
//const port=3002
app.use(express.json())
app.use(cors())
app.use('/api',usuariosRoutes)
app.use(indexRoutes)
app.use((req,res)=>{
    res.status(404).json({
        message:'Ruta no encontrada'
    })
})

export default app;