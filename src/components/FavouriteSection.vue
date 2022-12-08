<template>
  <div class="favourite-wrap">
    <SectionTitle :title="getFavouriteTitle" styleText="capitalize"/>
    <div class="card-wrapper d-flex justify-content-between">
      <FavouriteItem :collection="item" v-for="(item, index) in getFavouriteCollection " :key="index"/>

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
  ...mapGetters(['getFavouriteTitle','getFavouriteCollection']),
}


}
</script>

<style scoped>
.favourite-wrap {
  margin-top: 190px;
}
</style>