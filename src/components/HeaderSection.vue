<template>
  <div class="header-wraper d-flex ">
    <img src="@/assets/logo.svg" alt="logo">
    <div>
      <span>catalogue</span>
      <span>fashion</span>
      <span>favorite</span>
      <span>lifestyle</span>
      <ButtonMain :text="textButton" :buttonStyles="buttonStyles"/>
    </div>

  </div>
</template>

<script>
import ButtonMain from '@/components/ButtonMain';
export default {
  name: 'HeaderSection',
  components: {
    ButtonMain,
  },
  data() {
    return {
      textButton: 'sign up',
      buttonStyles: {
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
