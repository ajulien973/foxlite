<template>
  <div class="container-fluid mt-4">
    <h1 class="h1">Total Revenue</h1>
    <ul id="merchants">
      <li v-for="merchant in merchants">
        <a href="#" @click="selectMerchant(merchant)">{{ merchant }}</a>
      </li>
    </ul>
    <MarketShareTable :currentMerchant=this.currentMerchant />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import MarketShareTable from './MarketShareTable.vue';

export default {
  name: 'MerchantList',
  components: { MarketShareTable },
  data: () => ({
    currentMerchant: '',
  }),
  computed: {
    ...mapGetters('totalRevenue', {
      merchants: 'allMerchants',
    }),
  },
  methods: {
    selectMerchant(merchant) {
      this.currentMerchant = merchant;
    },
  },
  created() {
    this.$store.dispatch('totalRevenue/getTotalRevenueByMerchant');
  },
};
</script>
