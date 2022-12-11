<template>
  <div class="partner">
    <a :href="partner.link">
    <img :src="require(`@/assets/${partner.img}.svg`)" alt="logo">
  </a>
  </div>
</template>

<script>
export default {
 name: 'OurPartners',
 props: {
  partner: {
    type: Object,
    reqired: true,
  }
 }
}
</script>

<style scoped>

.partner {
  background-color:#EBD96B;

}
</style>