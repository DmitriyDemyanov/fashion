<template>
  <div>
    <div class="clother-wraper d-flex justify-content-between">
      <div class="position-relative">
        <img class="main-text" src="@/assets/textClother.svg" alt="text">
        <div class="bg-white"></div>
        <div class="bg-orage"></div>
        <div class="descr">Live for Influential and Innovative fashion!</div>
        <div class="wrap-leaf">
          <img class="leaf" src="@/assets/leaf.svg" alt="icon">
          <ButtonMain :text="buttonText" :buttonStyles="buttonStyles" />
        </div>
      </div>
      <div> <img src="@/assets/pingGerl.png" alt="photo"></div>
    </div>
  </div>
</template>

<script>
import ButtonMain from '@/components/ButtonMain';
export default {
  name: 'UniqueClothes',
  components: {
    ButtonMain,
  },
  data() {
    return {
      buttonText: 'shop now',
      buttonStyles: {
        color: '#fff',
        fontSize: '30px',
        padding: '20px 40px',
        background: '#000',
        borderRadius: '10px',
        textTransform: 'capitalize',
      }
    }
  },
};
</script>

<style scoped>
.clother-wraper {
  background-color: #F4F6F5;
  border-radius: 59px;
  min-height: 850px;
  margin-top: 56px;
  padding-top: 77px;
  padding-left: 119px;
  padding: 77px 81px 0 119px;

}

.main-text {
  position: relative;
  z-index: 2;
}

.descr {
  margin-top: 40px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 48px;
  color: #191818;
}

.wrap-leaf {
  margin-top: 32px;
}

.bg-white {
  background-image: url(@/assets/bg-white.png);
  z-index: 1;
  width: 72%;
  height: 112px;
  transform: rotate(-2deg);
  position: absolute;
  top: -27px;
  left: -12px;
}
.bg-orage {
  background-color: #EBD96B;
  z-index: 1;
  width: 72%;
  height: 112px;
  transform: rotate(-2deg);
  position: absolute;
  top: 214px;
  left: -12px;
}
.leaf {
  margin-right: 34px;
}
</style>