const express = require('express');

const router = express.Router();


router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});
router.get('/movies', function (req,res) {
    res.send(['gadar','hero','hindustani'])
});
router.get('/movies/:index', function (req,res) {
    const array = ['dilwale','karanarjun','ddlj','baggi','radhr'];
    let value = req.params.index;
    const result = value>(array.length-1)? "please use a valid index": array[value];
    res.send(result)
});
router.get('/films', function (req,res) {
    res.send([{'id': 1,'name': 'the shining'},{'id': 2,'name': 'incendies'},{'id': 3,'name' : 'rang de vasanti'},{'id': 4,'name':'hero'}])
});
const movieName2 = [{'id': 2,'name': 'the shining'},{'id': 4,'name': 'incendies'},{'id': 6,'name' : 'rang de vasanti'},{'id': 8,'name':'hero'}];
router.get('/films/:filmId', function (req,res) {
    const result = movieName2.filter(x => {
        return x.id == req.params.filmId
    }
    )
    console.log(result)
    
    res.send(result)
});

module.exports = router;
//3. Write another api called GET /films. Instead of an array of strings define an array of movie objects this time. Each movie object should have values - id, name. An example of movies array is 
//[ {
   // “id”: 1,
  //  “name”: “The Shining”
   //}, {
   // “id”: 2,
   // “name”: “Incendies”
   //}, {
    //“id”: 3,
    //“name”: “Rang de Basanti”
   //}, {
   // “id”: 4,
  //  “name”: “Finding Demo”
  // }]
  // Return the entire array in this api’s response
   //4. Write api GET /films/:filmId where filmId is the value received in request path params. Use this value to return a movie object with this id. In case there is no such movie present return a suitable message in the response body. Example for a request GET /movies2/3 should return the movie object 
   //{
   // “id”: 3,