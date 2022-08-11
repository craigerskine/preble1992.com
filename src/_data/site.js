module.exports = function() {
  return {
    meta: {
      title: 'Preble Class of 1992: 30th Reunion',
      description: 'Preble High School class of 1992 reunion information',
      author: 'Craig Erskine',
      author_url: 'craigerskine.com',
      footer: 'Logo + Website + Maintenance',
    },
    nav: {
      action: 'School spirit',
    },
    reunion: [
      {
        anniversary: '30',
        ordinal: 'th',
        date: '11/05/2022',
        dateYear: '2022',
        dateMonth: 'November',
        dateDay: '5th',
        dateFull: '2022-11-05', // for accessibility
        time: '7',
        location: 'Green Bay, WI',
        venue: 'The Woods Golf Course',
        attending: '24+',
      }
    ],
    newsletter: {
      heading: 'Stay up to date',
      lead: 'Get updates on all of our events and be the first to get notified when things start to pop off... like when Elliot learns a new chord.',
      placeholder: 'Email (coming soon)',
      action: 'Sign up',
    },
    social: [
      {
        title: 'Facebook',
        url: 'https://www.facebook.com/preblehigh92',
        ico: 'facebook',
      },
      // {
      //   title: 'Donate via PayPal',
      //   url: '#',
      //   ico: 'paypal',
      // },
    ],
  }
}