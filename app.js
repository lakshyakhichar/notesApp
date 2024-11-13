//npm packages 
import express from "express";
import {dirname}  from "path";
import {fileURLToPath} from "url" ;

//constants 
const port = 3000;
const app = express();
const _dirname =  dirname(fileURLToPath(import.meta.url));

//middleware 
app.use(express.static("public"));


//home route
app.get("/",(req,res)=>{
     res.sendFile(_dirname + "index.html");
})

//listening to port
app.listen(port,()=>{

     console.log(`Server is running on port ${port}`)
})