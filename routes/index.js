var express = require('express');
var router = express.Router();

var fs = require('fs');

/* GET home page. */
router.get('/', function (req, res, next) {
    const testFolder = 'public/music';

    fs.readdir(testFolder, function (err, files) {
        console.log(files);
        res.render('index', {title: 'Fly Me', files: files});
    });

});

module.exports = router;
