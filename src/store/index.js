import Vue from 'vue';
import Vuex from 'vuex';
import totalRevenue from './modules/totalRevenue';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    totalRevenue,
  },
});
