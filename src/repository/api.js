import axios from 'axios';

const client = axios.create({
  baseURL: 'http://localhost:3001/',
  json: true,
})

export default {
  async execute(method, resource, data) {
    return client({
      method,
      url: resource,
      data,
    }).then(req => req.data);
  },
  getTotalRevenueByMerchant() {
    return this.execute('get', '/');
  },
}
