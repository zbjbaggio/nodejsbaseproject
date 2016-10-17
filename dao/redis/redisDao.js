/**
 * Created by jay on 2016-10-17.
 */

var $util = require('../../util/util');
var $db = require('../../conf/db');
var redis   = require('redis');

var client  = redis.createClient($util.extend({}, $db.redis).port, $util.extend({}, $db.redis).host);

//登录session
const LOGIN = 'login_';
const LOGINCYCLE = 60;

module.exports = {
    saveLoginSession: function (user) {
        let key = LOGIN + user.id;
        client.hmset(key, user, function(err) {
            if (err) {
                console.log(err);
                return;
            }
            //过期时间,单位秒
            client.expire(key, LOGINCYCLE);
        });
    }
};