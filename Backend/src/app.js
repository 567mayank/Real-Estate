import express, { urlencoded } from "express"
import cors from "cors"
import cookieParser from "cookie-parser";

const app = express()

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true 
  })
);

app.use(express.json())
app.use(urlencoded({extended:true}))
app.use(express.static("public"))
app.use(cookieParser())

app.get("/",(req,res)=>{
  console.log("hi")
  res.send("hello man ")
})

import router from "./Routes/user.route.js"
import propertyRouter from "./Routes/property.route.js"

app.use("/user",router)
app.use("/property",propertyRouter)



export default app