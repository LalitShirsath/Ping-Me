// new syntax as per ES6
import express  from "express";
import cors from 'cors';
import bodyParser from 'body-parser';

// at server side writing extension is compulsory so add .js ahead of database/db 
import Connection from "./database/db.js";
import Route from "./routes/route.js";

const app = express();

app.use(cors());
app.use(bodyParser.json({express:true}));
app.use(bodyParser.urlencoded({extended:true})); // when we search with some space then browser add random chars e.g. what is bodyParser => what%90is%90bodyParser
app.use('/', Route); 

Connection();

const PORT = 8000;

app.listen(PORT, () => console.log(`server is running on ${PORT}`))
 