// new syntax as per ES6
import express  from "express";

// at server side writing extension is compulsory so add .js ahead of database/db 
import Connection from "./database/db.js";

const app = express();

Connection();

const PORT = 8000;

app.listen(PORT, () => console.log(`server is running on ${PORT}`))
 