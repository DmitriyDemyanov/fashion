<template>
  <div class="link-wrap">
    <a :href="downloadLink.link">
      <img :src="require(`@/assets/${downloadLink.img}.svg`)" alt="img">
    </a>
  </div>
</template>

<script>
export default {
  name: 'DownloadLink',
  props: {
    downloadLink: {
      type: Object,
      required: true,
    }
  }
}
</script>

<style scoped>
.link-wrap {
  margin-right: 19px;
}
</style>