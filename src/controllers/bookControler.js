const bookService = require('../services/bookService');

exports.getCreatePage = (req, res) =>{

    res.render('create');
}

exports.getCatalog = async (req, res) =>{

    const bookCount = await bookService.bookCount();
    
    if(bookCount == 0){
        return res.render('catalog', {bookCount});
    }
    
    const books = await bookService.getAllbooks();

    res.render('catalog', {books});
}

exports.postCatalog = async (req, res) =>{

    
}