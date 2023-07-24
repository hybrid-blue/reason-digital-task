import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useNavigationStore = defineStore('navigation', () => {
  const links = ref(
    {
      primary: [
        {
          name: 'Home',
          link: '/'
        },
        {
          name: 'What we do',
          link: '/what-we-do'
        },
        {
          name: 'The digital divide',
          link: '/the-digital-divide'
        }
      ],
      footer: [
        {
          name: 'Learn My Way',
          link: '#'
        },
        {
          name: 'Get Online Week',
          link: '#'
        },
        {
          name: 'Online Centres Network',
          link: '#'
        },
        {
          name: 'Good Things Foundation Australia',
          link: '#'
        },
        {
          name: 'Be Connected Australia',
          link: '#'
        },
        {
          name: 'Data Poverty Lab',
          link: '#'
        },
      ],
      legal: [
        {
          name: 'Accessibility',
          link: '#'
        },
        {
          name: 'Privacy policy',
          link: '#'
        },
        {
          name: 'Terms and conditions',
          link: '#'
        },
        {
          name: 'Policies and accreditations',
          link: '#'
        },
        {
          name: 'Equity, diversity and inclusion',
          link: '#'
        },
      ],
      quickLinks: [
        {
          name: 'Contact us',
          link: '#'
        },
        {
          name: 'Who we are',
          link: '#'
        },
        {
          name: 'Join our team',
          link: '#'
        },
        {
          name: 'News, thoughts & stories',
          link: '#'
        }
      ],
      socials: [
        {
          name: 'Follow us on Twitter',
          link: 'https://twitter.com'
        },
        {
          name: 'Find us on Facebook',
          link: 'https://facebook.com'
        },
        {
          name: 'Discover us on Instagram',
          link: 'https://instagram.com'
        },
        {
          name: 'Connect with us on LinkedIn',
          link: 'https://linkedin.com'
        }
      ]
    }
  );

  function getPrimary() {
    return links.value.primary
  };

  function getFooter() { 
    return links.value.footer
  };

  function getLegal(){ 
    return links.value.legal;
  };

  function getQuickLinks(){ 
    return links.value.quickLinks;
  };

  function getSocials(){ 
    return links.value.socials;
  };

  return { links, getPrimary, getFooter, getLegal, getQuickLinks, getSocials }
})
