import api from '../../repository/api';

const state = {
  totalRevenueByMonth: {},
  totalRevenueByMerchant: {},
};

const getters = {
  totalRevenueByMonth: (state) => state.totalRevenueByMonth,
  allTotalRevenueByMerchant: (state) => state.totalRevenueByMerchant,
  allMerchants: (state) => Object.keys(state.totalRevenueByMerchant).filter((key => key !== 'null' && key !== 'merchant not identified')),
  merchantTotalRevenue: (state) => merchant => state.totalRevenueByMerchant[merchant],
};

const actions = {
  getTotalRevenueByMerchant: ({ commit }) => {
    api.getTotalRevenueByMerchant()
      .then((data) => {
        commit('fetchTotalRevenueByMerchant', data);
      });
  },
};

const groupByMerchant = (dataByMonth) => {
  const dataByMerchant = {};

  dataByMonth.forEach((month) => {
    const { label: monthLabel, values } = month;
    values.forEach((company) => {
      const { label: companyLabel, value } = company;
      if (!dataByMerchant[companyLabel]) {
        dataByMerchant[companyLabel] = [];
      }
      dataByMerchant[companyLabel].push({ monthLabel, value });
    });
  });
  return dataByMerchant;
};

const mutations = {
  fetchTotalRevenueByMerchant: (state, data) => {
    state.totalRevenueByMonth = data;
    state.totalRevenueByMerchant = groupByMerchant(data);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
