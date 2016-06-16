require("./dist/sweetalert.css");
var sweetalert = require("./dist/sweetalert.min.js");

module.exports = {
    error: function (msg, title) {
        swal({
            title: title || "",
            text: msg,
            type: "error",
            confirmButtonText: "确定"
        });
    },
    info: function (msg, title) {
        swal({
            title: title || "",
            text: msg,
            type: "info",
            confirmButtonText: "确定"
        })
    },
    normal: function (msg, title) {
        swal({
            title: title || "",
            text: msg,
            confirmButtonText: "确定"
        });
    },
    success: function (msg, title) {
        swal({
            title: title || "",
            text: msg,
            type: "success",
            confirmButtonText: "确定"
        });
    },
    warning: function (msg, title) {
        swal({
            title: title || "",
            text: msg,
            type: "warning",
            confirmButtonText: "确定"
        });
    },
    confirm: function (msg, title, yesCallback, noCallback, type) {
        if(typeof title === "function"){
            type = noCallback;
            noCallback = yesCallback;
            yesCallback = title;
            title = "";
        }
        swal({
            title: title || "",
            text: msg,
            type: type || "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "确定",
            cancelButtonText: "取消",
            closeOnConfirm: true,
            closeOnCancel: true
        }, function (isConfirm) {
            var yes = function () {};
            var no = function () {};
            if(typeof yesCallback === "function") {
                yes = yesCallback;
            }
            if(typeof noCallback === "function") {
                no = noCallback;
            }
            if(isConfirm) {
                yes();
            } else {
                no();
            }
        });
    },
    timer: function (msg, title, time, type) {
        if(!isNaN(title)){
            type = time;
            time = title;
            title = "";
        }
        swal({
            title: title || "",
            text: msg,
            timer: time || 2000,
            type: type || "",
            showConfirmButton: false
        });
    },
    ajax: function (msg, title, callback, type) {
        if(typeof title === "function"){
            type = callback;
            callback = title;
            title = "";
        }
        swal({
            title: title || "",
            text: msg,
            type: type || "info",
            confirmButtonText: "确定",
            cancelButtonText: "取消",
            showCancelButton: true,
            closeOnConfirm: false,
            showLoaderOnConfirm: true
        }, function(){
            callback();
        });
    }
}