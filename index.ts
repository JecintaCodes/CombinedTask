import express, { Application } from "express";
import cors from "cors"


const port: number = 2005
const app: Application = express()

app.use(express.json())
app.use(cors())

let server = app.listen(port,()=>{
        console.log(`server is up and running on${port}`)
})

process.on("uncaughtException", (err: any)=>{
    console.log("server is shutting down due to uncaughtException")
    console.log("uncaughtException", err)
    process.exit(1);
})


process.on("unhandledRejection", (reason: any)=>{
    console.log("server is shutting down due to unhandledRejection")
    console.log("unhandledRejection", reason)
     server.close(()=>{
        process.exit(1);
     }) 
})
