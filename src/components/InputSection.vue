<template>
  <div>
    <div class="input-wrapper">
        <b-form-input class="promo-input"  placeholder="Add your email here" />

        <!-- <b-button class="position absolute input-button" size="sm" text="Button" variant="success">Button</b-button> -->
        <ButtonMain :text="buttonText" :buttonStyles="buttonStyles" />
    </div>
  </div>
</template>

<script>
import ButtonMain from '@/components/ButtonMain';
export default {
  name: 'InputSection',
  components: {
    ButtonMain,
  },
  data() {
    return {
      buttonText: 'send',
      buttonStyles: {
        color: '#fff',
        fontSize: '30px',
        padding: '8px 34px',
        background: '#000',
        borderRadius: '10px',
        position: 'absolute',
        top: '0',
        right: '0',
        margin: '10px',
        zIndex: '10',
  }

}
  }
}
</script>

<style scoped>
input.promo-input {
  height: 87px;
  border-radius: 10px;
  padding: 27px 200px 27px 27px;
  font-size: 30px;
  position: relative;
}

input.promo-input:focus {
  box-shadow: none;
}

.input-wrapper {
  width: 25%;
  margin: 0 auto;
  position: relative;
}


</style>