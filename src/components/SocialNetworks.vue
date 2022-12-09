<template>
  <a class="social-wrapper d-flex" :href="network.href">
    <img :src="require(`@/assets/${network.img}.svg`)" alt="icon" />
  </a>
</template>

<script>
export default {
  name: 'SocialNetworks',
  props: {
    network: {
      type: Object,
      required: true,
    }
  }
}
</script>

<style scoped>
.social-wrapper {
  width: 52px;
  height: 52px;
  background: #EBD96B;
  border-radius: 15px;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
}

.social-wrapper:hover {
  background: yellowgreen;
}
</style>
