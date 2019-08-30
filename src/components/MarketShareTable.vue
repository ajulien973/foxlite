<template>
  <table>
    <thead>
      <td>Month</td>
      <td>Value</td>
    </thead>
    <tbody>
      <tr v-for="item in this.merchantTotalRevenue(currentMerchant)">
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
  props: ['currentMerchant'],
  computed: {
    ...mapGetters('totalRevenue', {
      merchantTotalRevenue: 'merchantTotalRevenue',
    }),
  },
};
</script>
