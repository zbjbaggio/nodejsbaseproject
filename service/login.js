/**
 * Created by jay on 2016-10-14.
 */

var userDao = require('../dao/user/userDao');
var redisDao = require('../dao/redis/redisDao');
var $util = require('../util/util');

module.exports = {
    login: function (name, password) {
        let user = userDao.queryByName(name);
        if ($util.MD5(password) == user.password ) {
            redisDao.saveLoginSession(user);
            return true;
        } else {
            return false;
        }
    }
};