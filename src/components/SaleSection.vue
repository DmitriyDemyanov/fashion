<template>
  <section class="sale-section">

    <BContainer class="sale-section__wrapper d-flex justify-content-end">
      <div class="description">
        <div class="sale-title marker">PAYDAY</div>
        <div class="sale-title">sale NOW</div>

        <div class="sale-subtitle">Spend minimal $100 get 30% off<br> voucher code for your next purchase</div>
        <div class="sale-date">1 June - 10 June 2021</div>
        <div class="sale-notify">*Terms & Conditions apply</div>
        <ButtonMain :buttonStyles="buttonStyles" :text="buttonText"/>
      </div>
    </BContainer>

  </section>
</template>

<script>
import ButtonMain from '@/components/ButtonMain';

export default {
  name: 'SaleSection',
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
  components: {
    ButtonMain
  }
}
</script>

<style scoped>
.sale-section {
  height: 968px;
  background-image: url("@/assets/sale-banner.png");
  background-repeat: no-repeat;
  background-size: cover;
  margin-top: 190px;
}

.sale-section__wrapper {
  width: 100%;
  height: 100%;
  padding-right: 20px;
  padding: 140px 0;

}
.description {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.sale-title {
  font-weight: 900;
  font-size: 112px;
  text-transform: uppercase;
  line-height: 1.1;
  position: relative;
  z-index: 2;
}
.marker:after {
  content: '';
  width: calc(100% + 40px);
  height: calc(100% + 20px);
  background-color: #fff;
  position: absolute;
  top: -10px;
  left: -20px;
  z-index: -1;
  transform: matrix(1, -0.03, 0.03, 1, 0, 0);

}
.sale-subtitle {
  font-weight: 500;
  font-size: 36px;
  line-height: 52px;
  color: #231300;
  margin-top: 33px;
}
.sale-date {
  font-weight: 700;
  font-size: 36px;
  line-height: 52px;
  color: #000000;
  margin-top: 40px;
}
.sale-notify {
  font-weight: 400;
  font-size: 36px;
  line-height: 52px;
  color: #000000;
  margin-top: 10px;
  margin-bottom: 51px;
}

</style>