<template>
  <div class="shopping-wrapper">
    <h2 class="title">JOIN SHOPPING COMMUNITY TO<br> GET MONTHLY PROMO</h2>
    <h5 class="subtitle">Type your email down below and be young wild generation</h5>
    <InputSection/>
  </div>
</template>

<script>
import InputSection from '@/components/InputSection';
export default {
  name: 'ShoppingPromo',
  components: {
    InputSection,
  }
}
</script>

<style scoped>
.shopping-wrapper {
  margin-top: 220px;
  padding-top: 141px;
  background-color: #E5C643;
  min-height: 625px;
  text-align: center;
}
.title {
  font-weight: 900;
  font-size: 55px;
  line-height: 70px;
  color: #FFFFFF;
}
.subtitle {
  font-weight: 400;
  font-size: 32px;
  line-height: 35px;
  color: #FFFCF8;
  margin-top: 37px;
  margin-bottom: 49px;
}
</style>