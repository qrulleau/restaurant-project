import Vue from 'vue';
// @ts-ignore
import App from './App.vue';
import VueRouter from 'vue-router';
// @ts-ignore

import VueCarousel from 'vue-carousel';
// @ts-ignore
import Home from './vue/Home.vue';
// @ts-ignore
import Contact from './vue/Contact.vue';
// @ts-ignore
import Shop from './vue/Shop.vue';
// @ts-ignore
import Forum from './vue/Forum.vue';
// @ts-ignore
import About from './vue/About.vue';

Vue.use(VueRouter);
Vue.use(VueCarousel);

const router = new VueRouter({
	mode: 'history',
	routes: [
		{ path: '/', name: 'home', component: Home },
		{ path: '/contact', name: 'contact', component: Contact },
		{ path: '/shop', name: 'shop', component: Shop },
		{ path: '/forum', name: 'forum', component: Forum },
		{ path: '/about', name: 'about', component: About },
	],
});
new Vue({
	router,
	render: (h) => h(App),
}).$mount('#app');
