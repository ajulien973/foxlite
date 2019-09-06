import api from '../../repository/api';

const state = {
  totalRevenueByMonth: {},
  totalRevenueByMerchant: {},
};

const getters = {
  totalRevenueByMonth: state => state.totalRevenueByMonth,
  allTotalRevenueByMerchant: state => state.totalRevenueByMerchant,
  allMerchants: state => Object.keys(state.totalRevenueByMerchant).filter((key => key !== 'null' && key !== 'merchant not identified')),
  merchantTotalRevenue: state => merchant => state.totalRevenueByMerchant[merchant],
};

const actions = {
  getTotalRevenueByMerchant: ({ commit }) => {
    api.getTotalRevenueByMerchant()
      .then((data) => {
        commit('fetchTotalRevenueByMerchant', data);
      });
  },
};

const computeTotalMonthShares = companies => companies.reduce(
  (acc, company) => (acc + company.value),
  0,
);

const formatMerchantShare = (merchantShare, totalMonthShares) => {
  const merchantPercentShare = (merchantShare / totalMonthShares) * 100;
  return `${Number(merchantPercentShare.toFixed(2))}%`;
};

const groupByMerchant = (dataByMonth) => {
  const dataByMerchant = {};
  dataByMonth.forEach((month) => {
    const {
      label: monthLabel,
      values: companies,
    } = month;
    const totalMonthShares = computeTotalMonthShares(companies);

    companies.forEach((company) => {
      const {
        label: companyLabel,
        value: merchantShares,
      } = company;

      if (!dataByMerchant[companyLabel]) {
        dataByMerchant[companyLabel] = [];
      }

      const merchantShare = formatMerchantShare(merchantShares, totalMonthShares);
      dataByMerchant[companyLabel].push({ monthLabel, value: merchantShare });
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
