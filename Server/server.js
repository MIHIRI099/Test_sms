import express from 'express' 
import mysql from 'mysql'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import bycrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const app = express();
app.use(cors());
app.use(cookieParser());
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
})

db.connect(function(err)  {
    if (err) {
        console.log(err);
    } else {
        console.log("Connected to MySQL");       
    }
})

app.listen(3001, () => {
    console.log("Server running on port 3001");
})