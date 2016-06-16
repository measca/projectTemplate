export function install(Vue) {
    var titles = [];
    var title = {
        created() {
            var title = this.$options.title;
            if(title) {
                titles.push(title);
                $("head title").html(title);
            }
        },
        detached() {
            var title = this.$options.title;
            if(title) {
                titles.splice(titles.length - 1);
                $("head title").html(titles[ titles.length - 1]);
            }
        }
    }
    Vue.options = Vue.util.mergeOptions(Vue.options, title)
}