
function isOwner(user, book) {

    return user._id == book.owner;
}

function hasWished(user, book){

    return book.wishingList.includes(user._id)
}

module.exports = {
    isOwner,
    hasWished
};