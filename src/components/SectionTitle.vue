<template>
  <div class="position-relative d-flex header-title">
    <h2 class="title" :style="`text-transform: ${styleText}`">
      {{ title }}
      <span class="leaf">
        <img src="@/assets/leafTitle.svg" alt="img" />
      </span>
    </h2>
  </div>
</template>

<script>
export default {
  name: "SectionTitle",
  props: {
    title: {
      type: String,
      required: true,
    },
    styleText: {
      type: String,
      default: "uppercase",
    },
  },
};
</script>

<style scoped>
.title {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 900;
  font-size: 48px;
  line-height: 50px;
  position: relative;
}
.leaf {
  position: absolute;
  bottom:-16px;
  right: -7px;
  z-index: -1;
}
.header-title {
  margin-bottom: 103px;
}
</style>
