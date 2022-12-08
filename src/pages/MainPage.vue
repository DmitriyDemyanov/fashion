<template>
  <div>
    <BContainer>
      <HeaderSection />
      <UniqueClothes />
    </BContainer>
    <div class="d-flex justify-content-around partners align-items-center">
      <OurPartners :partner="item" v-for="(item,index) in getPartners " :key="index" />
    </div>
    <BContainer>
      <NewCollection />
    </BContainer>
    <SaleSection />
    <BContainer>
      <FavouriteSection />
      <DownloadAppSection/>
    </BContainer>

  </div>
</template>

<script>
import HeaderSection from '@/components/HeaderSection';
import UniqueClothes from '@/components/UniqueClothes';
import OurPartners from '@/components/OurPartners';
import NewCollection from '@/components/NewCollection';
import SaleSection from '@/components/SaleSection';
import FavouriteSection from '@/components/FavouriteSection';
import DownloadAppSection from '@/components/DownloadAppSection';
import { mapGetters } from 'vuex';

export default {
  name: 'MainPage',
  components: {
    HeaderSection,
    UniqueClothes,
    OurPartners,
    NewCollection,
    SaleSection,
    FavouriteSection,
    DownloadAppSection,
  },
  computed: {
    ...mapGetters('partners', ['getPartners']),
  }
}
</script>

<style scoped>
.partners {
  margin-top: 63px;
  margin-bottom: 69px;
  height: 186px;
  background-color: #EBD96B;
}
</style>