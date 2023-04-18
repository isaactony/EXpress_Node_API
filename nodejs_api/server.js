const express = require('express');
const mongoose = require('mongoose');
require("dotenv").config();
mongoose.set('strictQuery', true);

mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection

db.on('error', err => console.log(err))
db.once("open", () => console.log('Connected to Mongo database'));

const app = express();

app.use(express.json());
const subScribersRouter = require('./routes/subscribers')
app.use('/subscribers', subScribersRouter)


app.listen(3000, () => {console.log('listening on port 3000')});
