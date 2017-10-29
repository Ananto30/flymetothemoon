var express = require('express');
var router = express.Router();

var fs = require('fs');


/* GET home page. */
router.get('/', function (req, res, next) {

    const testFolder = 'public/music';

    fs.readdir(testFolder, function (err, files) {
        res.render('index', {title: 'Fly My Ass', files: files});
    });

});

module.exports = router;
