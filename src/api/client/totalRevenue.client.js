const request = require('request-promise');

const getTotalRevenueByMerchant = () => request({
  uri: 'https://gist.githubusercontent.com/fox-albert/802a439ba49a2a4a92d88974bd62b61b/raw/4fb36b02c8f5f0625d5575fceb425b82eca4e274/totalRevenueByMerchantByMonth.json',
  headers: { 'User-Agent': 'Request-Promise' },
  json: true,
});

module.exports = {
  getTotalRevenueByMerchant,
};
