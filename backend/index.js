import express, { response } from "express";
import {PORT, mongoDBURL} from "./config.js"
import mongoose from "mongoose";
import { Book } from "./models/bookModels.js";
import booksRoute from './routes/booksRoute.js';
import cors from "cors";


const app = express()


// middleware for parsing request body
app.use(express.json())

// middleware for handling CORS POLİCY

app.use(cors())

//app.use(
//    cors({
//        origin: "http://localhost:3000",
//        methods: ['GET','POST','PUT','DELETE'],
//        allowedHeaders: ['Content-Type'],
//    })
//)


app.get('/' , (request, response) => {
        console.log(request)
        return response.status(234).send("Welcome to mern stack")
})


app.use('/books', booksRoute); // web adresimizin /books ile başlayan kısmı için tüm istekleri 
                               // booksRoute.js dosyasında tanımlanan işlemlere yönlendir.



mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log('App connected to database')
        app.listen(PORT, () => {
            console.log(`App is listening to port: ${PORT}`) // npm run dev
        })
    })
    .catch((error) => {
        console.log(error)
    })
