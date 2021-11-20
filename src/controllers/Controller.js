const bookModel = require("../models/bookModel.js")
const authorModel = require("../models/authorModel.js")

// this is first book create api
const createBookUser= async function (req, res) {
    var data= req.body
    let savedData = await bookModel.create(data)
    res.send({msg: savedData})    
}
// this is second author create api
const createauthorUser= async function (req, res) {
    var data= req.body
    let savedData = await authorModel.create(data)
    res.send({msg: savedData})    
}

// this is my 3rd api to get chetan bhagat daya
const getChetanData = async function (req, res) {
    const bhagatBooks = await authorModel.find({author_name:"chetan bagat"})
    const authorId = bhagatBooks[0].author_id
    const bookName = await bookModel.find({"author_id":authorId})
    res.send(bookName)
}

// this  is my 4th api to get update value and author name
const updateTwoStatesPrice= async function (req, res) {
   let allBooks = await bookModel.findOneAndUpdate({"16_nov_collection_one.name":"two states"},{$set:{price:100},new:true});
   let authorId=allBooks.author_id;
   let name= await authorModel.find({author_id:authorId}).select({author_name:1,_id:0});
   let price = allBooks.price;
   res.send({author_name:name,price:price});

}
const getAuthorName= async function (req, res) {
    let book = await bookModel.find({price:{$in:[50,100]}});
    let len= book.length
    let array=[]
    let array1=[]
    for(let element of book){
        let a = element.author_id
        let b = element.name;
        array.push(a)
        array1.push(b)
    }
let arrayOfNames=[]
for(let element of array){
    let name= await authorModel.find({author_id:element})
    arrayOfNames.push(name[0].author_name)
}
    
    res.send({"books":array1,"authors":arrayOfNames})
}




module.exports.createBookUser= createBookUser
module.exports.createauthorUser= createauthorUser
module.exports.getChetanData= getChetanData
module.exports.updateTwoStatesPrice= updateTwoStatesPrice
module.exports.getAuthorName= getAuthorName