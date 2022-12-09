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
    ],
    social: [
      {
        img: 'facebook',
        href: 'https://www.facebook.com/'
      },
      {
        img: 'instagram',
        href: 'https://www.instagram.com/'
      },
      {
        img: 'twiter',
        href: 'https://twitter.com/'
      },
      {
        img: 'in',
        href: 'https://www.linkedin.com/'
      },
    ],
    siteMenus: [
      {
        title: 'Company',
        links: [
          {
            text: 'About',
            href: '/about/'
          },
          {
            text: 'contact us',
            href: '/contact-us/'
          },
          {
            text: 'support',
            href: '/support/'
          },
          {
            text: 'careers',
            href: '/careers/'
          },
        ]
      },
      {
        title: 'Quick Link',
        links: [
          {
            text: 'share location',
            href: '/share-location/'
          },
          {
            text: 'orders tracking',
            href: '/orders-tracking/'
          },
          {
            text: 'size guide',
            href: '/size-guide/'
          },
          {
            text: 'FAQs',
            href: '/faq/'
          },
        ]
      },
      {
        title: 'Legal',
        links: [
          {
            text: 'terms & conditions',
            href: '/terms/'
          },
          {
            text: 'privacy policy',
            href: '/privacy/'
          }
        ]
      }
    ]
  },
  getters: {
    getPartnersLink: ({ partnerslink }) => partnerslink,
    getSocialLink: ({ social }) => social,
    getSiteMenu: ({ siteMenus }) => siteMenus,
  },
  actions: {},
  mutations: {},
  modules: {},
};
