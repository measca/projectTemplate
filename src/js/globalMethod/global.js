export function install(Vue) {
    var globalVM = new Vue({
        data: {
            user: {
                name: "Bless"
            }
        },
        methods: {
            setUser(user){
                this.$set("user", user);
            },
            getUser(){
                return this.user;
            }
        }
    });
    Vue.global = globalVM;
    Vue.prototype.$global = globalVM;
}