/**
 * Created by jay on 2016-10-13.
 */
var express = require('express');
var router = express.Router();
var loginService = require('../service/login');

//登录界面
router.get('/', function (req, res, next) {
    res.render('login/login', {title: 'Express'});
});

//登录
router.post('/', function (req, res, next) {
    let param = req.body;
    if (param.name == null || param.password == null) {
        res.json({
            success: false,
            message: "参数错误！"
        });
        return;
    }
    if (loginService.login(param.name, param.password)) {
        res.json({
            success: true,
            message: "登录成功！"
        });
        return;
    } else {
        res.json({
            success: false,
            message: "登录失败！"
        });
        return;
    }
});

module.exports = router;