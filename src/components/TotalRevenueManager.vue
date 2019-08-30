<template>
  <div class="container-fluid mt-4">
    <h1 class="h1">Total Revenue</h1>
    {{totalRevenueByMerchant}}
  </div>
</template>

<script>
import api from '../repository/api';

export default {
  data() {
    return {
      loading: false,
      totalRevenueByMerchant: {},
    };
  },
  async created() {
    this.refreshEntries();
  },
  methods: {
    async refreshEntries() {
      this.loading = true;
      this.totalRevenueByMerchant = await api.getTotalRevenueByMerchant();
      this.loading = false;
    },
  },
};
</script>
