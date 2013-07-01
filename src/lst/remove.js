// remove all documents where the title contains 'MongoDB'
// -> SQL:	DELETE FROM books
//		WHERE title LIKE '%MongoDB%'
//		(LIMIT 1)
> db.books.remove({
  title : /MongoDB/i
})

// remove only one documents
> db.books.remove({
  title : /MongoDB/i,
  1 /* <justOne> = true*/
})

// clear a collection
// -> SQL:	DELETE * FROM books
> db.books.remove()

// drop the collection
// -> SQL: 	DROP TABLE books
> db.books.drop()