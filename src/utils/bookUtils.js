


function isOwner(user, book) {

    return user._id == book.owner;
}

module.exports = isOwner;