var url = require("url");
var ajax = require("ajax")();
module.exports = {
    /**
     * 登录接口
     * @param {obj} data 登录数据
     * @param {function} successCallback 成功后的回调
     * @param {function} errorCallback 失败的回调
     */
    login: function (data, successCallback, errorCallback) {
        //对data转换成服务器模型
        var sendData = {
            user: data.username,
            pass: data.password
        };
        //发送数据数据
        ajax.get(url.user.login, sendData, "json").success(function (data) {
            if (data.username != sendData.user) {
                errorCallback("用户名不存在");
            } else if (sendData.pass != data.password) {
                errorCallback("密码错误");
            } else {
                successCallback("登录成功");
            }
        }).error(function (stateError) {
            if ($.isFunction(errorCallback)) {
                errorCallback("登录失败");
            }
        }).send();
    },
    /**
     * 忘记密码的操作
     * @param {obj} data 修改的数据
     * @param {function} successCallback 成功后的回调
     * @param {function} errorCallback 失败的回调
     */
    forget: function (data, successCallback, errorCallback) {
        //对data转换成服务器模型
        var sendData = {
            user: data.username,
            pass: data.password,
            code: data.code
        };
        //发送数据数据
        ajax.get(url.user.forget).success(function () {
            if ($.isFunction(successCallback)) {
                successCallback("更改成功");
            }
        }).error(function (stateError) {
            if ($.isFunction(errorCallback)) {
                errorCallback("更改失败");
            }
        }).send();
    },
    /**
     * 注册账号
     * @param {obj} data 注册账号的数据
     * @param {function} successCallback 成功后的回调
     * @param {function} errorCallback 失败的回调
     */
    register: function (data, successCallback, errorCallback) {
        //对data转换成服务器模型
        var sendData = {
            user: data.userName,
            pass: data.password
        };
        //发送数据数据
        ajax.get(url.user.register).success(function () {
            if ($.isFunction(successCallback)) {
                successCallback("注册成功");
            }
        }).error(function (stateError) {
            if ($.isFunction(errorCallback)) {
                errorCallback("注册失败");
            }
        }).send();
    },
    /**
     * 获取用户信息
     * @param {string} userId 用户标识编号
     * @param {function} successCallback 成功后的回调
     * @param {function} errorCallback 失败的回调
     */
    getUserInfo: function (userId, successCallback, errorCallback) {
        var sendData = {
            userId: userId
        };
        ajax.get(url.user.userInfo, null, "json").success(function(data){
            if(typeof successCallback === "function"){
                successCallback(data);
            }
        }).error(function () {
            if(typeof errorCallback === "function") {
                errorCallback("获取用户信息失败");
            }
        }).send();
    }
};