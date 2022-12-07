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
    newColection: [
      {
        img: 'newGirl-1',
        title: 'hoodies & sweetshirt',
      },
      {
        img: 'newGirl-2',
        title: 'coats & parkas',
      },
      {
        img: 'newGirl-3',
        title: 'tees & t-shirt',
      }
    ]
  },

  getters: {
    getPartners({ partners }) {
      return partners;
    },
  },
};
