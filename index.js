import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';

import Connection from './database/db.js';
import route from './Routes/route.js';

const app = express();
dotenv.config();

app.use(bodyParser.json({extended : true}));
app.use(bodyParser.urlencoded({extended : true}));
app.use(cors);
app.use('/' , route);

const PORT = 8000;


const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

Connection(username , password);

app.listen(PORT , () => {
    console.log(`server is running successfully on PORT ${PORT}`);
})