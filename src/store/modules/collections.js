export default {
  namespaced: true,
  state: {
    collectionList: [
      {
        img: 'newGirl-1',
        title: 'hoodies & sweetshirt'
      },
      {
        img: 'newGirl-2',
        title: 'coats & parkas'
      },
      {
        img: 'newGirl-3',
        title: 'tees & t-shirt'
      },
    ]
  },
  getters: {
    getCollection: ({ collectionList }) => collectionList,


  },
  actions: {},
  mutations: {},
}