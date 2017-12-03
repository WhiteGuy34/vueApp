import Vue from 'vue';
import App from './App';

Vue.config.productionTip = false
new Vue({
    el: '#app',
    template: '<App/>',
    data:{
        text: "Hello World"
    },
    components : {App}
});
console.log("I'm webpacked")