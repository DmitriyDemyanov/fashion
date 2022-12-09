<template>
  <div class="footer-wrapper d-flex">
    <article>
      <h2 class="article-title">fashion</h2>
      <h6 class="articte-description">Complete your style with awesome<br> clothes from us.</h6>
      <div class="d-flex">
        <SocialNetworks :network="item" v-for="(item, index) in getSocialLink" :key="index" />
      </div>
    </article>
    <div>
      <SiteMenus :menu="item" v-for="(item,index) in getSiteMenu" :key="index"/>
    </div>
  </div>
</template>

<script>
import SocialNetworks from '@/components/SocialNetworks';
import SiteMenus from '@/components/SiteMenus.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'FooterSection',
  components: {
    SocialNetworks,
    SiteMenus,
  },
  computed: {
    ...mapGetters('link', ['getSocialLink', 'getSiteMenu']),
  }
}
</script>








<style scoped>
.footer-wrapper {
  background-color: #000;
  min-height: 545px;
  padding: 119px 100px 0;
}

.article-title {
  font-weight: 900;
  font-size: 40px;
  line-height: 60px;
  text-transform: uppercase;
  color: #FFFFFF;
}

.articte-description {
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 24px;
  line-height: 40px;
  color: #8E8E8E;
  margin: 32px 0;
}
</style>