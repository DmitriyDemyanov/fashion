import Vue from 'vue';
import Vuex from 'vuex';
import partners from '@/store/modules/partners';
import collections from '@/store/modules/collections';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    sectionTitles: {
      collection: 'new arrivals ',
      favourite: 'my favourite'
    }
  },
  getters: {
    getCollectionTitle: ({ sectionTitles }) => sectionTitles.collection
  },
  mutations: {},
  actions: {},
  modules: {
    partners,
    collections,
  },
});
