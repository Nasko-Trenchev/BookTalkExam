const bookService = require('../services/bookService');

exports.getCatalog = async (req, res) =>{
 
    const books = await bookService.getAllbooks().lean();
    res.render('catalog', {books});
}

exports.getDetailPage = async (req, res) =>{

    const book = await bookService.findBookById(req.params.id).lean();
    res.render('details', {book});
}

exports.getCreatePage = (req, res) =>{

    res.render('create');
}

exports.postCreatePage = async (req, res) =>{

    const {title, author, genre, stars, image, review} = req.body;

    const book = await bookService.createBookReview({title, author, genre, stars, image, review});

    res.redirect('/catalog')
}