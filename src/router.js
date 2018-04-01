import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import First from './components/First';
import Second from './components/Second';

export default new VueRouter({
    routes: [
        {path: '/first', component: First},
        {path: '/second', component: Second}
    ]
})
