import express from "express";
const app = express();
const port= process.env.port || 8000;
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);

// 👇️ "/home/john/Desktop/javascript"
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, 'public')));
app.use("/css", express.static(__dirname+"/css"));

app.get("/", (req, res)=>{
    res.sendFile(__dirname+"/index.html");
})

app.listen(port);