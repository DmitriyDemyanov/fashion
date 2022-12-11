<template>
  <div class="my-container" >
    <BContainer>
      <HeaderSection />
      <UniqueClothes />
    </BContainer>
    <div class="d-flex justify-content-between partners align-items-center">
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
    <ShoppingPromo/>
    <FooterSection/>
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
import ShoppingPromo from '@/components/ShoppingPromo';
import FooterSection from '@/components/FooterSection';
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
    ShoppingPromo,
    FooterSection,
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
  padding: 0 171px;

}
.my-container {
    width: 1920px;
    margin: 0 auto;
  }
</style>