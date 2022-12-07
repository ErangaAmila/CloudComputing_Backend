const router = require('express').Router();
const Book =require('../models/book.model');

router.route('/').get((req,res)=>{
    Book.find()
    .then(books=>res.json(books))
    .catch(err=>res.status(400))
})

router.route('/:id').get((req,res)=>{
    Book.findById(req.params.id)
    .then(book=>res.json(book))
    .catch(err=>res.status(400))
})

router.route('/').post((req,res)=>{
    const books=req.body;

        var newBook = new Book({
            bookID:books.bookID,
            title:books.title,
            authors:books.authors,
            average_rating:books.average_rating,
            isbn:books.isbn,
            language_code:books.language_code,
            ratings_count:books.ratings_count,
            price:books.price
        });
        newBook.save()
        .then(books=>res.json("Added"))
        .catch(err=>res.status(400));
    
}) 

router.route('/:id').delete((req,res)=>{
    Book.findByIdAndDelete(req.params.id)
    .then(books=>res.json("Deleted"))
    .catch(err=>res.status(404))
})

module.exports=router;