<template>
  <table>
    <thead>
      <td>Month</td>
      <td>Value</td>
    </thead>
    <tbody>
      <tr v-for="item in getMerchantValuesFromStore('zalando')">
        <td>{{item.monthLabel}}</td>
        <td>{{item.value}}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'MarketShareTable',
  methods: {
    getMerchantValuesFromStore(merchantName) {
      return this.values(merchantName);
    },
  },
  computed: {
    ...mapGetters('totalRevenue', {
      values: 'merchantTotalRevenue',
    }),
  },
};
</script>
