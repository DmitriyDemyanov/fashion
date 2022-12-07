<template>

  <div>
    <SectionTitle :title="getCollectionTitle" />

    <div class="wrapper-collection d-flex justify-content-between">

      <div class="card" v-for="(card, index) in getCollection" :key="index">
        <img :src="require(`@/assets/${card.img}.png`)" alt="photo">
        <div class="wrap-title d-flex align-items-center justify-content-between">
          <div>
            <div class="title">{{ card.title }}</div>
            <div class="descr">Explore Now!</div>
          </div>
          <div class="arrow">
            <img src="@/assets/arrow-1.svg" alt="arrow">
          </div>
        </div>
      </div>

    </div>



  </div>
</template>

<script>
import SectionTitle from '@/components/SectionTitle';
import { mapGetters } from 'vuex';

export default {
  name: 'NewCollection',
  computed: {
    ...mapGetters(['getCollectionTitle']),
    ...mapGetters('collections',['getCollection']),
  },
  components: {
    SectionTitle,
  }
}
</script>

<style scoped>

.card {
  width: calc(33.33% - 60px);
  border: none;
}
.wrap-title {
  margin-top: 38px;
}
.title {
  text-transform: capitalize;
  font-family: 'Poppins';
  font-weight: 500;
  font-size: 31px;
  line-height: 50px;
  color: #191919;
}
.descr {
  font-family: 'Poppins';
  font-style: normal;
  font-size: 24px;
  line-height: 50px;
  color: #7F7F7F;
}
</style>