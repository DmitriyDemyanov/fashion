export default {
  namespaced: true,
  state: {
    partners: [
      {
        img: 'partner-1',
        link: 'http://google.com'
      },
      {
        img: 'partner-2',
        link: 'http://bing.com'
      },
      {
        img: 'partner-3',
        link: 'http://apple.com'
      },
      {
        img: 'partner-4',
        link: 'http://google.com'
      },

      {
        img: 'partner-5',
        link: 'http://google.com'
      },
      {
        img: 'partner-6',
        link: 'http://google.com'
      },
    ],
  },

  getters: {
    getPartners({ partners }) {
      return partners;
    },
  },
};
