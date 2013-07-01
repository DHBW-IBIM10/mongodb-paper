// syntax for updating:
> db.collection.update( <query>, <update>, <options> )

// update a field
// -> SQL:	UPDATE books 
//		SET title="MongoDB: The Definitive Guide, 2nd Edition"
//		WHERE _id=1 
> db.books.update(
  {_id: 1 },
  {$set: {
	title :  "MongoDB: The Definitive Guide, 2nd Edition"
    },
  })

// add a new field to all documents
// -> SQL:	ALTER TABLE books
//		ADD price FLOAT
//		ADD currency VARCHAR(3)
> db.books.update(
   {},
   { $set: {
             price: 9.99,
             currency: 'USD'
           }
   }
)