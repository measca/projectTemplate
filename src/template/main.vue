<style>
    .main{
        margin: 100px;
    }
</style>
<template>
    <div class="main">
        <tree></tree>
    </div>
</template>
<script>
    export default {
        data() {
            return {
            };
        },
        components: {
            // upFile: require("../components/upFile/up-file.vue"),
            tree: require("../components/tree/tree2.vue")
        },
        ready() {
        }
    }
</script>