import Vue from 'vue';
import Vuex from 'vuex';
import partners from '@/store/modules/partners';
import collections from '@/store/modules/collections';
import link from '@/store/modules/link';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    sectionTitles: {
      collection: 'new arrivals ',
      favourite: 'young’s favourite',
    },
    sectionFavourite: [
      {
        img: 'youngGirl-1',
        title: 'Trending on instagram',
      },
      {
        img: 'youngGirl-2',
        title: 'All Under $40',
      },
    ]



  },
  getters: {
    getCollectionTitle: ({ sectionTitles }) => sectionTitles.collection,
    getFavouriteTitle: ({ sectionTitles }) => sectionTitles.favourite,
    getFavouriteCollection: ({ sectionFavourite }) => sectionFavourite,

  },
  mutations: {},
  actions: {},
  modules: {
    partners,
    collections,
    link,
  },
});
