const express = require('express');
const router = express.Router();
const bookController=require("../controllers/bookcontroller");
const authorController = require("../controllers/authorcontroller");

router.post('/authors', authorController.createAuthor)

router.post('/books', bookController.createBook)

router.get('/books',bookController.getBooks)
router.post('/addPublisher',bookController.addPublisher)
module.exports = router;