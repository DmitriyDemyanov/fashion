<template>
  <div class="header-wraper d-flex ">
    <img src="@/assets/logo.svg" alt="logo">
    <div>
      <span>catalogue</span>
      <span>fashion</span>
      <span>favorite</span>
      <span>lifestyle</span>
      <ButtonBlack :text="textButton" :buttonStyles="styles"/>
    </div>

  </div>
</template>

<script>
import ButtonBlack from '@/components/ButtonBlack';
export default {
  name: 'HeaderSection',
  components: {
    ButtonBlack,
  },
  data() {
    return {
      textButton: 'sign up',
      styles: {
        color: '#fff',
        fontSize: '24px',
        padding: '15px 22px',
        background: '#000',
        borderRadius: '10px',
        textTransform: 'uppercase',
      }
    }
  }
}
</script>

<style scoped>
.header-wraper {
  margin-top: 48px;
  align-items: center;
  justify-content: space-between;
}
button{
  margin-left: 54px;
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
  color: #FEFEFE;
  background-color: #000;
  border-radius: 7px;
  text-transform: uppercase;
}
span {
  margin-left: 65px;
  font-weight: 500;
  font-size: 22px;
  line-height: 33px;
  text-transform: uppercase;
}

</style>
