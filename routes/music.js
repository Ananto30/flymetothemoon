var express = require('express');
var router = express.Router();

var fs = require('fs');

/* play song */
router.get('/:songName', function (req, res, next) {

    var file = __dirname + '/music/' + req.params.songName;
    fs.exists(file, function (exists) {
        if (exists) {
            var rstream = fs.createReadStream(file);
            res.writeHead(200, { 'Content-Length': 512, 'Content-Type': 'audio/mpeg' });
            rstream.pipe(res);
        }
        else {
            res.send(404);
            res.end();
        }

    });
});

module.exports = router;
