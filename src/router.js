import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./views/Home";
import Survey from "./views/Survey";
import Loading from "./views/Loading";
import Result from "./views/Result";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/", component: Home },
    { path: '/survey', component: Survey },
    { path: '/loading', component: Loading },
    { path: '/result', component: Result },
  ],
});

export default router;
