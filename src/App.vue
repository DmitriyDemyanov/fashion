<template>
  <section>

    <div class="mb-3 mt-3">
      <!-- <router-link class="p-2" to="/">Главная</router-link> -->
      <MainPage/>

    </div>
    <router-view class="main-view"></router-view>
  </section>
</template>

<script>
import MainPage from '@/pages/MainPage';

export default {
  name: 'App',
  components: {
    MainPage,
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;700;900&display=swap');
body {
  --bs-body-font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
