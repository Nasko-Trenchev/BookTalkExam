const Book = require('../models/Book');

exports.getAllbooks = () => Book.find();

exports.findBookById = (id) => Book.findById(id);

exports.createBookReview = (data) => Book.create(data);
