const mongoose = require('mongoose');

const booksShema = new mongoose.Schema({

    title:{
        type: String,
        required: true,
        minLength: 2
    },
    author:{
        type: String,
        required: true,
        minLength: 5
    },
    image:{
        type: String,
        required: true,
        match: /^https?:\/\//,
    },
    review:{
        type: String,
        required: true,
        minLength: 5
    },
    genre:{
        type: String,
        required: true,
        minLength: 3    
    },
    stars:{
        type: Number,
        required: true,
        min: 1,
        max: 5
    },
    wishingList:{
        type: [String],
        ref: 'User'
    },
    owner:{
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
})

const Book = mongoose.model('Book', booksShema);

module.exports = Book;