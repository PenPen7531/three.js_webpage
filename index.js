
import express from "express";
const app = express();
const port = process.env.PORT || 3000;
import path from "path";
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);

let __dirname = path.dirname(__filename);
app.get("/", (req,res)=>{

    res.sendFile(__dirname+"/index.html");
});

app.listen(process.env.PORT || port, ()=> console.log(`Listening port ${port}`));
