import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Article from '@/views/Article.vue'
import File from '@/views/File.vue'
import Message from '@/views/Message.vue'
import About from '@/views/About.vue'
Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/article",
        name: "Article",
        component: Article
    },
    {
        path: "/file",
        name: "File",
        component: File
    },
    {
        path: "/message",
        name: "Message",
        component: Message
    },
    {
        path: "/about",
        name: "About",
        component: About
    }
];

const router = new VueRouter({
    routes
});

export default router;