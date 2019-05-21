import Vue from 'vue';

Vue.component('hellow-vue', require('./assets/components/Hellow.vue').default);

Vue.config.productionTip = false;

new Vue({ el: "#app" });
