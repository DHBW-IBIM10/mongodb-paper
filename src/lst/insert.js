// switch to the store db
use store

// an object to save to the 'books' collection
var book = {
  _id : 1,
  title : "MongoDB: The Definitive Guide",
  author : "Kristina Chodorow",
  publisher : "O'Reilly Media"
};

// an array of books to add to the collection
var bookArr = new Array();

bookArr.push({
  _id : 2,
  title : "MongoDB in Action",
  author : "Kyle Banker",
  publisher : "Manning Publications"
});

bookArr.push({
  _id : 3,
  title : "MongoDB with Python and Ming",
  author : "Rick Copeland",
  publisher : "Amazon Digital Services"
});

// continue adding objects to the array

// insert one object:
db.books.insert(book);

// bulk insert:
db.books.insert(bookArr);