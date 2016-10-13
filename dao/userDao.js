/**
 * Created by jay on 2016-9-28.
 */

var mysql = require('mysql');
var $db = require('../conf/db');
var $util = require('../util/util');
var user = require('./userSqlMapping');

var pool = mysql.createPool($util.extend({}, $db.mysql));

var jsonWrite = function (res, ret) {
    if (typeof  ret === 'undefined') {
        res.json({
            code: '1',
            msg: '操作失败'
        });
    } else {
        res.json(ret);
    }
};

module.exports = {
    add: function (req, res, next) {
        pool.getConnection(function (err, connection) {
            // 获取前台页面传过来的参数
            var param = req.query || req.params;
            // 建立连接，向表中插入值
            // 'INSERT INTO user(id, name, age) VALUES(0,?,?)',
            console.log(param.name);
            connection.query(user.insert, [param.name, param.age], function (err, result) {
                if (result) {
                    result = {
                        code: 200,
                        msg: '增加成功'
                    };
                }
                // 以json形式，把操作结果返回给前台页面
                jsonWrite(res, result);
                // 释放连接
                connection.release();
            });
        });
    },
    update: function (req, res, next) {
        // update by id
        // 为了简单，要求同时传name和age两个参数
        var param = req.body;
        if (param.name == null || param.age == null || param.id == null) {
            jsonWrite(res, undefined);
            return;
        }
        pool.getConnection(function (err, connection) {
            console.log(param.id);
            connection.query(user.update, [param.name, param.age, param.id], function (err, result) {
                // 使用页面进行跳转提示
                if (result.affectedRows > 0) {
                    res.render('suc', {
                        result: result
                    }); // 第二个参数可以直接在jade中使用
                } else {
                    res.render('fail', {
                        result: result
                    });
                }
                connection.release();
            });
        });
    },
    query: function (req, res, next) {
        // update by id
        // 为了简单，要求同时传name和age两个参数
        var param = req.query || req.params;
        if (param.id == null) {
            jsonWrite(res, undefined);
            return;
        }
        pool.getConnection(function (err, connection) {
            console.log(param.id);
            connection.query(user.queryById, [param.id], function (err, result) {
                res.render('userView', {
                    title: '用户资料',
                    result: result
                }); // 第二个参数可以
                connection.release();
            });
        });
    }
};