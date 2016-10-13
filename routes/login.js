/**
 * Created by jay on 2016-10-13.
 */
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('login/login', { title: 'Express' });
});

module.exports = router;