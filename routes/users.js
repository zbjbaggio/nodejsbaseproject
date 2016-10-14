var express = require('express');
var userDao = require('../dao/user/userDao');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/addUser', function (req, res, next) {
  userDao.add(req, res, next);
});

router.get('/queryByUserId', function (req, res, next) {
    userDao.query(req, res, next);
});

router.post('/updateUser', function (req, res, next) {
  userDao.update(req, res, next);
});

module.exports = router;
