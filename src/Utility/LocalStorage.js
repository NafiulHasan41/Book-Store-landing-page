const getReadBook = () =>{

    const storeReadBook = localStorage.getItem('bookReadList');
    if(storeReadBook){
        return JSON.parse(storeReadBook);
    }
    return [];
}


const saveReadBook = id =>{
    const storeReadBook = getReadBook();
    const exists = storeReadBook.find(bookId => bookId === id);
    if(!exists){
        storeReadBook.push(id);
        localStorage.setItem('bookReadList', JSON.stringify(storeReadBook))
    }
}
const getWishBook = () =>{

    const storeWishBook = localStorage.getItem('bookWishList');
    if(storeWishBook){
        return JSON.parse(storeWishBook);
    }
    return [];
}


const saveWishBook = id =>{
    const storeWishBook = getWishBook();
    const exists = storeWishBook.find(bookId => bookId === id);
    if(!exists){
        storeWishBook.push(id);
        localStorage.setItem('bookWishList', JSON.stringify(storeWishBook))
    }
}

export { getReadBook, saveReadBook , getWishBook , saveWishBook}