<template>
  <div class=" position-relative d-flex header-title">
    <h2 class="title" :style="`text-transform: ${styleText}`">{{title}}</h2>
    <div class="leaf">
      <img src="@/assets/leafTitle.svg" alt="img">
    </div>
  </div>
</template>

<script>
export default {
  name: 'SectionTitle',
  props: {
    title: {
      type: String,
      required: true,
    },
    styleText: {
      type: String,
      default: '',
    }
  }
}
</script>

<style scoped>
.title {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 900;
  font-size: 48px;
  line-height: 50px;
  text-transform: uppercase;
  }
.leaf {
  position: absolute;
  top: 26px;
  left:191px;
  z-index: -1;
}
.header-title {
  margin-bottom: 103px;
}
</style>