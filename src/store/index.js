import Vue from 'vue';
import Vuex from 'vuex';
import partners from '@/store/modules/partners';
import collections from '@/store/modules/collections';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    sectionTitles: {
      collection: 'new arrivals ',
      favourite: 'young’s favourite',
      capitalize: 'capitalize',
    },
    
  },
  getters: {
    getCollectionTitle: ({ sectionTitles }) => sectionTitles.collection,
    titleText: ({ sectionTitles }) => sectionTitles.favourite,
    textTransform: ({ sectionTitles }) => sectionTitles.capitalize,

  },
  mutations: {},
  actions: {},
  modules: {
    partners,
    collections,
  },
});
