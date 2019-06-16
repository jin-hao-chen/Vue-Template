/* Import vue */
import Vue from 'vue';

/* Import vue-router */
import VueRouter from 'vue-router';
Vue.use(VueRouter);

/* Import mint-ui */
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';

/* Import my css */
import './static/css/index.css';
/* Import my router */
import router from './router/index';

/* Import my app component */
import App from './App.vue';

/* Create vue instance */
var app = new Vue({
    el: "#app",
    data: {

    },
    methods: {

    },
    render: (createElements) => createElements(App),
    router: router
});