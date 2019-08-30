import api from '../../repository/api';

const state = {
  totalRevenueByMerchant: {},
};

const getters = {
  allTotalRevenueByMerchant: (state) => state.totalRevenueByMerchant,
};

const actions = {
  getTotalRevenueByMerchant: ({ commit }) => {
    api.getTotalRevenueByMerchant()
      .then((data) => {
        commit('fetchTotalRevenueByMerchant', data);
      });
  },
};

const mutations = {
  fetchTotalRevenueByMerchant: (state, data) => {
    state.totalRevenueByMerchant = data;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
