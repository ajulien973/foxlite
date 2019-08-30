<template>
  <div class="container-fluid mt-4">
    <h1 class="h1">Total Revenue</h1>
    {{totalRevenue}}
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'TotalRevenueManager',
  computed: {
    ...mapGetters('totalRevenue', {
      totalRevenue: 'allTotalRevenueByMerchant',
    }),
  },
  created() {
    this.$store.dispatch('totalRevenue/getTotalRevenueByMerchant');
  },
};
</script>
