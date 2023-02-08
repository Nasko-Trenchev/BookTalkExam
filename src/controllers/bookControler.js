const bookService = require('../services/bookService');
const {isOwner, hasWished} = require('../utils/bookUtils')

exports.getCatalog = async (req, res) =>{
 
    const books = await bookService.getAllbooks().lean();
    res.render('catalog', {books});
}

exports.getDetailPage = async (req, res) =>{

    const book = await bookService.findBookById(req.params.id).lean();
    const owner = isOwner(req.user, book)
    const wished = hasWished(req.user, book);
    res.render('details', {book, owner, wished});
}

exports.getCreatePage = (req, res) =>{

    res.render('create');
}

exports.postCreatePage = async (req, res) =>{

    const {title, author, genre, stars, image, review} = req.body;

    const owner = req.user._id;

    const book = await bookService.createBookReview({title, author, genre, stars, image, review, owner});

    res.redirect('/catalog')
}