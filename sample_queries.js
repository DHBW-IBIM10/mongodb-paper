/** create */
//create a document in a sample collection
db.random.insert({
	date: ISODate(),
	rand_str: Math.random().toString(36).substring(7)
	})
//create a shitload of documents using a js loop
for (var i = 1; i <= 25000; i++){
	db.random.insert( { x : i, date:ISODate(), rand_str:  Math.random().toString(36).substring(7)} )
}

//bulk insert using an array of documents
var arr = [{x: 50000, date:ISODate(), rand_str:"abcdef"},
           {date:ISODate(), rand_str:"not so random"}]
db.random.insert(arr)

/** read */
// read the first document of the sample collection
db.random.findOne()
// get all documents to show the iterator
db.random.find()
// find all documents that have an x > 10000
db.random.find({x : {$gt: 10000})
//try to sort the documents by rand_str
db.random.find().sort({rand_str:1}).explain()
//create an index and try again
db.ensureIndex()
db.random.find().sort({rand_str:1}).explain()
// enron: number of replies among all emails
var nAll = db.messages.count()
var nReply = db.messages.find({"headers.Subject": /Re:.*/}).count()
var perc = nReply / nAll * 100

/** update */
// create a new field for all documents in the sample collection
db.random.update(
	{x: {$exists: true}},
	{$set: {even:true}},
	{multi: true}
)
	
// set even to false for all odd x
db.random.update(
	{
		even: {$exists: true},
		x: {$mod: [2, 0]},
	},
	{$set: {even:false}},
	{multi: true}
)

/** delete */
// delete document with x = 22
db.random.remove({x:22})
// delete all documents where the rand_str starts with s
db.random.remove({rand_str: /^s/})
// delete the whole collection
db.random.remove()
}
