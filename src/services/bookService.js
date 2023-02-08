const Book = require('../models/Book');

exports.getAllbooks = () => Book.find();

exports.findBookById = (id) => Book.findById(id);

exports.createBookReview = (data) => Book.create(data);

exports.deleteById = (id) => Book.findByIdAndDelete(id);

exports.editBookById = (id, data) => Book.findByIdAndUpdate(id, data, {runValidators: true})

exports.findBooksForProfile = (id) => Book.find({wishingList : {$all: [id]}})