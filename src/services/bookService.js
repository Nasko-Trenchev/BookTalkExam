const Book = require('../models/Book');

exports.bookCount = () => Book.countDocuments({});

exports.getAllbooks = () => Book.find();
