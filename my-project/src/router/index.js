import Vue from "vue";
import Router from "vue-router";
// import HelloWorld from "@/components/HelloWorld";
import Test from "@/components/homePage/index";
// 安装插件使用  Vue.use
Vue.use(Router);

// export default es6提供 导出模块中某些api
export default new Router({
    mode: "history",
    routes: [
        {
            // 代表根目录下
            path: "/",
            redirect: "/home"
        },
        {
            path: "/home",
            name: "HelloWorld",
            component: Test
        }
    ]
});
