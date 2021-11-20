const express = require('express');

const router = express.Router();

const authorModel= require("../models/authorModel")
const authorcontroller= require("../controllers/authorcontroller")


router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});


router.post('/createAuthor', authorcontroller.createAuthor  );
router.get('/getname', authorcontroller.getname  );
router.get('/getnameandage', authorcontroller.getnameandage );



module.exports = router;
