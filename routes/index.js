var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/updateUser', function(req, res, next) {
  res.render('updateUser', { title: 'Express' });
});

module.exports = router;
