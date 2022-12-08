<template>
  <div class="favourite-wrap">
    <SectionTitle :title="titleText" :styleText="textTransform"/>
    <div class="card-wrapper d-flex justify-content-between">
      <FavouriteItem/>
      <FavouriteItem/>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import SectionTitle from '@/components/SectionTitle'
import FavouriteItem from '@/components/FavouriteItem'


export default {
  name: 'FavouriteSection',
  components: {
    SectionTitle,
    FavouriteItem,

  },

computed: {
  ...mapGetters(['titleText','textTransform']),
}


}
</script>

<style scoped>
.favourite-wrap {
  margin-top: 190px;
}
</style>