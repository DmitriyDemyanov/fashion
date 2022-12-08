export default {
  namespaced: true,
  state: {
    partnerslink: [
      {
        img: 'apple',
        link: 'http://apple.com',
      },
      {
        img: 'googlePlay',
        link: 'http://play.google.com',
      },
    ]
  },
  getters: {
    getPartnersLink: ({ partnerslink }) => partnerslink,
  },
  actions: {},
  mutations: {},
  modules: {},
};