const bookService = require('../services/bookService');
const {isOwner, hasWished} = require('../utils/bookUtils')

exports.getCatalog = async (req, res) =>{
 
    const books = await bookService.getAllbooks().lean();
    res.render('catalog', {books});
}

exports.getDetailPage = async (req, res) =>{

    const user = req.user;
    const book = await bookService.findBookById(req.params.id).lean();

    if(user){
        const owner = isOwner(req.user, book)
        const wished = hasWished(req.user, book);
        return res.render('details', {book, owner, wished});
    }
    res.render('details', {book});
}

exports.getCreatePage = (req, res) =>{

    res.render('create');
}

exports.postCreatePage = async (req, res) =>{

    const {title, author, genre, stars, image, review} = req.body;

    const owner = req.user._id;

    try {
    
        bookService.createBookReview({title, author, genre, stars, image, review, owner});
        
    }
    catch(err){
        const errors = Object.keys(err.errors).map(key=> err.errors[key].message)
        return res.render('create', {error: errors[0]});
    }
    res.redirect('/catalog')
}

exports.getWishToRead = async (req, res) =>{

    const book = await bookService.findBookById(req.params.id);
    book.wishingList.push(req.user._id);
    await book.save();

    res.redirect(`/details/${req.params.id}`)
}

exports.getDelete = async (req, res) =>{

    await bookService.deleteById(req.params.id)
    res.redirect('/catalog')
}

exports.getEditPage = async (req, res) =>{

    const book = await bookService.findBookById(req.params.id).lean();
    res.render('edit', {book});
}

exports.postEditPage = async (req, res) =>{

    const {title, author, genre, stars, image, review} = req.body;
    const book = await bookService.findBookById(req.params.id).lean();


    try{
       await bookService.editBookById(req.params.id, {title, author, genre, stars, image, review})
    }
    catch(err){

        const errors = Object.keys(err.errors).map(key => err.errors[key].message);
        return res.render(`edit`, {book, error: errors[0]})
    }
    res.redirect(`/details/${req.params.id}`)
}

exports.getProfile = async (req, res) =>{

    const books = await bookService.findBooksForProfile(req.user._id).lean()
    res.render('profile', {books});
}