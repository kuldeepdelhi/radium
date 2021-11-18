const authorModel = require("../models/authorModel");
const bookModel = require("../models/bookmodel");
const publisher = require("../models/publisherModel");

const createBook = async function (req,res) {
  let data = req.body;
  let authorId = req.body.author
  let authorFromRequest = await authorModel.findById(authorId)
  let pubId = req.body.publisher
  let pubRequest = await publisher.findById(pubId)

  if(authorFromRequest && pubRequest) {
    let bookCreated = await bookModel.create(data)
    res.send({data: bookCreated})
  } else{
    res.send("The author Id provided is not valid")
  }
};

const getBooks = async function(req,res) {
  let allBooks = await bookModel.find().populate({path:'author',select:{'author_name':1,age: 1}})
  res.send(allBooks)
}

const addPublisher = async function (req,res) {
  let data = req.body
  let publisherSaved = await publisher.create(data)
  res.send(publisherSaved)
}
module.exports.createBook = createBook;
module.exports.getBooks = getBooks;
module.exports.addPublisher = addPublisher