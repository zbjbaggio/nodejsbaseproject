/**
 * Created by jay on 2016-10-14.
 */

var userDao = require('../dao/user/userDao');
var $util = require('../util/util');

module.exports = {
    login: function (name, password) {
        let user = userDao.queryByName(name);
        if ($util.MD5(password) == user.password ) {
            return true;
        } else {
            return false;
        }
    }
};