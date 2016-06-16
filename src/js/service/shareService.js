var url = require("url");
var ajax = require("ajax")();
module.exports = {
    /**
     * 发送验证码
     * @param {string} userName 根据指定的用户名发送验证码
     */
    sendCode: function (userName) {
        ajax.get(url.share.sendCode, {
            userName: userName
        }).send();
    },
    /**
     * 根据用户标识获取用户所拥有的菜单
     * @param {string} userId 用户标识
     */
    getUserMenu: function (userId, successCallback, errorCallback) {
        ajax.get(url.share.userMenu, {
            userId: userId
        }, "json").success(function (data) {
            if (typeof successCallback === "function") {
                successCallback(data);
            }
        }).error(function () {
            if (typeof errorCallback === "function") {
                errorCallback("获取失败");
            }
        }).send();
    }
}