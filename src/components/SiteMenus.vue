<template>
  <div class="link-wrapper ">
    <h3 class="title"> {{menu.title}}</h3>

    <a :href="item.href" v-for="(item, index) in menu.links" :key="index">{{item.text}}</a>

  </div>
</template>

<script>
export default {
  name: 'SiteMenus',
  props: {
    menu: {
      type: Object,
      required: true,
    }
  }
}
</script>






<style scoped>
.link-wrapper {
  display: flex;
  flex-direction: column;
  font-weight: 400;
  font-size: 24px;
  line-height: 40px;
}

.link-wrapper a {
  margin-top: 32px;
  color: #7A7A7A;
  text-decoration: none;
}
.title {
  color: #D9D9D9;
  }
</style>