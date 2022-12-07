const express = require("express");
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(cors())
app.use(express.json());
const PORT =5000;

mongoose.connect("mongodb+srv://CloudComputing2022:v2AAY7MGjKdvkubi@cluster0.45xwvwf.mongodb.net/?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true,useCreateIndex:true }).then(()=>{
    console.info("Connected")
    app.listen(PORT,()=>{console.log(`Server is running ar port ${PORT}`)});
}).catch((err)=>{
    console.error(err)
})


const booksRouter = require('./routes/books.routes');
app.use('/api/books',booksRouter);



