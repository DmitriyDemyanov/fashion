<template>
  <div >
    <div class="download-wrapper d-flex">
    <DownloadLink :downloadLink="item" v-for="(item, index) in getPartnersLink" :key="index"/>
  </div>
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
    ...mapGetters('link',['getPartnersLink'])
  },
}
</script>



<style scoped></style>