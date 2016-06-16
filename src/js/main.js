require("./base/base.js");
var indexVue = require("../template/main.vue");
var router = require("../router/router.js")();

router.start(indexVue, '#app');