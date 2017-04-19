var express = require("express");
var router = express.Router();
var sha1 = require("sha1");

var checkNotLogin = require("../middlewares/check").checkNotLogin;
var UserModel = require("../models/users");

// GET /signin 登录页
router.get("/", checkNotLogin, function(req, res, nex
) {
    res.render("signin");
});

// POST /signin 用户登录
router.post("/", checkNotLogin, function(req, res, next) {
    var name = req.fields.name;
    var password = req.fields.password;
    console.log("用户登录");

    UserModel.getUserByName(name)
        .then(function(user) {
            if(!user) {
                req.flash("error", "用户不存在");
                return res.redirect("back");
            }
            if(sha1(password) !== user.password) {
                req.flash("error", "用户名或密码错误");
                return res.redirect("back");
            }
            req.flash("success", "登录成功");
            // 用户信息写入session
            delete user.password;
            req.session.user = user;
            res.redirect("/posts");
        })
        .catch(next);
});

module.exports = router;