<template>
  <div class="item-wrap">
    <img :src="require(`@/assets/youngGirl-1.png`)" alt="photo">
    <div class="title">Trending on instagram</div>
    <div class="descr">Explore Now!</div>
  </div>
</template>

<script>
export default {
  name: 'FavouriteItem',
}
</script>

<style scoped>
.item-wrap {
  width: calc(50% - 24px);
}
.item-wrap img {
  width: 100%;
}
.title {
  font-weight: 500;
  font-size: 32px;
  line-height: 50px;
  color: #000000;
  margin-top: 28px;
}
.descr {
  font-weight: 500;
  font-size: 24px;
  line-height: 50px;
  color: #7F7F7F;
  margin-top: 8px;
}
</style>