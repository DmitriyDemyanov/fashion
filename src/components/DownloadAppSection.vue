<template>
  <div class="section-wrapper d-flex justify-content-between align-items-center">

    <div>
      <h2 class="title">DOWNLOAD APP &<br>
        GET THE VOUCHER!
      </h2>
      <h6 class="subtitle">Get 30% off for first transaction using<br>
        Rondovision mobile app for now.X
      </h6>

      <div class="download-wrapper d-flex">
        <DownloadLink :downloadLink="item" v-for="(item, index) in getPartnersLink" :key="index" />
      </div>
    </div>
    <div><img src="@/assets/promo-mobile.png" alt="phone"></div>

  </div>
</template>

<script>
import DownloadLink from '@/components/DownloadLink';
import { mapGetters } from 'vuex';
export default {

  name: 'DownloadAppSection',
  components: {
    DownloadLink,
  },
  computed: {
    ...mapGetters('link', ['getPartnersLink'])
  },
}
</script>



<style scoped>
.section-wrapper {
  margin-top: 210px;
  padding-left: 119px;
}

.title {
  font-weight: 900;
  font-size: 48px;
  line-height: 150%;
  color: #000000;
}

.subtitle {
  margin-top: 41px;
  margin-bottom: 65px;
  font-weight: 500;
  font-size: 24px;
  line-height: 35px;
  color: #7C7C7C;
}
</style>