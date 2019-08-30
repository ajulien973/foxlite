<template>
  <div class="container-fluid mt-4">
    <h1 class="h1">Total Revenue</h1>
    <ul id="merchants">
      <li v-for="merchant in merchants">
        {{ merchant }}
      </li>
    </ul>
    <MarketShareTable />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import MarketShareTable from './MarketShareTable.vue';

export default {
  name: 'MerchantList',
  components: { MarketShareTable },
  computed: {
    ...mapGetters('totalRevenue', {
      merchants: 'allMerchants',
    }),
  },
  created() {
    this.$store.dispatch('totalRevenue/getTotalRevenueByMerchant');
  },
};
</script>
