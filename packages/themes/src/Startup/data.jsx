import React from 'react';
import { smoothLinkProps } from '@pagerland/common/src/utils';
import { Link } from 'react-scroll';

import textToMultiline from '@pagerland/common/src/utils/textToMultiline';
import Img from '@pagerland/common/src/components/Img';

// import Award from '@pagerland/icons/src/line/Award';
// import Brain from '@pagerland/icons/src/line/Brain';
// import DNA from '@pagerland/icons/src/line/DNA';
import MapMarker from '@pagerland/icons/src/monochrome/MapMarker';
import MobilePhone from '@pagerland/icons/src/monochrome/MobilePhone';
import PaperAirplane from '@pagerland/icons/src/monochrome/PaperAirplane';

import FacebookF from '@pagerland/icons/src/monochrome/FacebookF';
import Instagram from '@pagerland/icons/src/monochrome/Instagram';
import Twitter from '@pagerland/icons/src/monochrome/Twitter';
import Linkedin from '@pagerland/icons/src/monochrome/Linkedin';

import * as Yup from 'yup';
import Welcome from './assets/hero.png';
import Welcome2x from './assets/hero.png';
import AboutUs from './assets/merch.png';
import AboutUs2x from './assets/merch@2x.png';

import Avatar1 from './assets/avatars/zach.jpg';
import Avatar12x from './assets/avatars/zach@2x.jpg';
import Avatar2 from './assets/avatars/mitchell.jpg';
import Avatar22x from './assets/avatars/mitchell@2x.jpg';
import Avatar3 from './assets/avatars/danielle.jpg';
import Avatar32x from './assets/avatars/danielle@2x.jpg';
import Avatar4 from './assets/avatars/avatar-4.jpg';
import Avatar42x from './assets/avatars/avatar-4@2x.jpg';
import Avatar5 from './assets/avatars/avatar-5.jpg';
import Avatar52x from './assets/avatars/avatar-5@2x.jpg';
import Avatar6 from './assets/avatars/avatar-6.jpg';
import Avatar62x from './assets/avatars/avatar-6@2x.jpg';
import Avatar7 from './assets/avatars/avatar-7.jpg';
import Avatar72x from './assets/avatars/avatar-7@2x.jpg';
import Avatar8 from './assets/avatars/avatar-8.jpg';
import Avatar82x from './assets/avatars/avatar-8@2x.jpg';

import features1 from './assets/feature1.png';
import features2 from './assets/feature2.png';
import features3 from './assets/feature3.png';

import SignIn from './assets/signin.svg';
import Search from './assets/search.svg';
import VideoChat from './assets/videochat.svg';

import PricingBasic from './assets/pricing/basic.svg';
import PricingAdvanced from './assets/pricing/advanced.svg';
import PricingExpert from './assets/pricing/expert.svg';

import Article1 from './assets/articles/article-1.jpg';
import Article12x from './assets/articles/article-1@2x.jpg';
import Article2 from './assets/articles/article-2.jpg';
import Article22x from './assets/articles/article-2@2x.jpg';
import Article3 from './assets/articles/article-3.jpg';
import Article32x from './assets/articles/article-3@2x.jpg';
import Article4 from './assets/articles/article-4.jpg';
import Article42x from './assets/articles/article-4@2x.jpg';
import Article5 from './assets/articles/article-5.jpg';
import Article52x from './assets/articles/article-5@2x.jpg';

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export default {
  title: 'Blast Off Tutoring',
  navbar: {
    links: [
      {
        to: '',
        label: 'Home',
      },
      {
        to: 'services',
        label: 'Services',
      },
      {
        to: 'about',
        label: 'About',
      },
      {
        to: 'team',
        label: 'Team',
      },
      {
        to: 'features',
        label: 'Features',
      },
      {
        to: 'pricing',
        label: 'Pricing',
      },
      {
        to: 'blog',
        label: 'News',
      },
      {
        to: 'contact',
        label: 'Contact',
      },
    ],
    actions: [
      {
        href: 'https://blast-off-tutoring.web.app/',
        label: 'Sign In',
      },
    ],
  },
  welcome: {
    title: 'Free Peer To Peer Tutoring',
    text:
      'We connect highschool students looking for community service hours with students in need of a tutor.',
    actions: [
      {
        label: 'Get Started',
        to: '#',
        href: 'https://blast-off-tutoring.web.app/',
        target: '_blank',
        as: 'a',
        ...smoothLinkProps,
        variant: 'white',
      },
    ],
    img: {
      src: Welcome,
      srcSet: `${Welcome} 1x, ${Welcome2x} 2x`,
    },
  },
  services: {
    title: 'Our services',
    services: [
      {
        icon: SignIn,
        title: 'Sign Up',
        text:
          'Create an account with the school code provided by your district to start exploring the platform.',
      },
      {
        icon: Search,
        title: 'Find a Tutor',
        text:
          'View our library of highschool tutors loooking to help out in exchange for community service credit.',
      },
      {
        icon: VideoChat,
        title: 'Schedule a Meeting',
        text:
          'Once you faound the right tutor for you, start chatting and set up a time to meet though our online video chat.',
      },
    ],
    cta: {
      label: 'Learn More',
      href: 'https://blastofftutoring.netlify.app/',
    },
  },
  about: {
    img: {
      src: AboutUs,
      srcSet: `${AboutUs} 1x, ${AboutUs2x} 2x`,
    },
    title: 'About us',
    text:
      'Nunc nec ultricies quam. Integer iaculis erat id leo consequat ultricies. Pellentesque mattis ultricies rhoncus. Maecenas vehicula efficitur sagittis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam laoreet at erat sit amet efficitur. Nam interdum tellus molestie, elementum felis in, consectetur ipsum. Aenean justo dolor, pretium nec dui eget, vulputate ullamcorper dolor.',
    cta: {
      label: 'Learn more about us',
      href: 'https://blastofftutoring.com/about',
    },
  },
  team: {
    title: 'Meet our team',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu magna pharetra sem ullamcorper bibendum quis et mauris. Phasellus tincidunt iaculis porttitor. Sed ut mi varius, gravida nulla eget, bibendum est. Ut auctor nec erat vitae placerat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    cta: {
      label: 'Join the Team',
      url: '/apply',
    },
    people: [
      {
        avatar: {
          src: Avatar1,
          srcSet: `${Avatar1} 1x, ${Avatar12x} 2x`,
        },
        name: 'Zach Meyer',
        position: 'Co-Founder, President',
        social: {
          linkedin: 'https://www.linkedin.com/in/zach-meyer-68a558168/',
          twitter: '#',
          instagram: 'https://www.instagram.com/zachmeyer44/',
        },
      },
      {
        avatar: {
          src: Avatar2,
          srcSet: `${Avatar2} 1x, ${Avatar22x} 2x`,
        },
        name: 'Mitchell Meyer',
        position: 'Co-Founder, CEO',
        social: {
          linkedin: 'https://www.linkedin.com/in/mitchell-meyer-887150207/',
          twitter: '#',
          instagram: 'https://www.instagram.com/_mitchmeyer/',
        },
      },
      {
        avatar: {
          src: Avatar3,
          srcSet: `${Avatar3} 1x, ${Avatar32x} 2x`,
        },
        name: 'Danielle Brenner',
        position: 'Social Media Manager',
        social: {
          linkedin: '#',
          twitter: '#',
          instagram: 'https://www.instagram.com/daniellebrennerr/',
        },
      },
      // {
      //   avatar: {
      //     src: Avatar4,
      //     srcSet: `${Avatar4} 1x, ${Avatar42x} 2x`,
      //   },
      //   name: 'Judith Black',
      //   position: 'Co-Founder, CEO',
      //   social: {
      //     linkedin: '#',
      //     twitter: '#',
      //     skype: '#',
      //   },
      // },
      // {
      //   avatar: {
      //     src: Avatar5,
      //     srcSet: `${Avatar5} 1x, ${Avatar52x} 2x`,
      //   },
      //   name: 'Robert Edwards',
      //   position: 'Co-Founder, CEO',
      //   social: {
      //     linkedin: '#',
      //     twitter: '#',
      //     skype: '#',
      //   },
      // },
      // {
      //   avatar: {
      //     src: Avatar6,
      //     srcSet: `${Avatar6} 1x, ${Avatar62x} 2x`,
      //   },
      //   name: 'Dianne Robertson',
      //   position: 'Co-Founder, CEO',
      //   social: {
      //     linkedin: '#',
      //     twitter: '#',
      //     skype: '#',
      //   },
      // },
      // {
      //   avatar: {
      //     src: Avatar7,
      //     srcSet: `${Avatar7} 1x, ${Avatar72x} 2x`,
      //   },
      //   name: 'Shane Black',
      //   position: 'Co-Founder, CEO',
      //   social: {
      //     linkedin: '#',
      //     twitter: '#',
      //     skype: '#',
      //   },
      // },
      // {
      //   avatar: {
      //     src: Avatar8,
      //     srcSet: `${Avatar8} 1x, ${Avatar82x} 2x`,
      //   },
      //   name: 'Nathan Fox',
      //   position: 'Co-Founder, CEO',
      //   social: {
      //     linkedin: '#',
      //     twitter: '#',
      //     skype: '#',
      //   },
      // },
    ],
  },
  features: {
    title: 'Discover what makes Blast Off so great',
    text:
      'Donec turpis justo, egestas at nisl nec, ullamcorper rutrum justo. Morbi sed blandit justo, ac molestie diam. Sed sapien augue, vestibulum id nisl a, gravida consectetur lectus. Duis vehicula suscipit consectetur.',
    features: [
      {
        title: 'Find a Tutor',
        text: 'View our library of vetted tutors to find one that is perfect for you.',
        details: <Img src={features1} maxWidth="121.0526315789%" ml="-10.5%" mt="-10.9%" />,
      },
      {
        title: 'Send a message',
        text:
          'Once you found the right tutor, start chatting with them to schedule a time to meet.',
        details: <Img src={features2} maxWidth="121.0526315789%" ml="-10.5%" mt="-10.9%" />,
      },
      {
        title: 'Video Chat',
        text:
          'Use our live video chat app to meet with a tutor. We have a live whiteboard to work out problems.',
        details: <Img src={features3} maxWidth="121.0526315789%" ml="-10.5%" mt="-10.9%" />,
      },
    ],
  },
  pricing: {
    title: 'Pricing',
    prices: {
      currency: '$',
      sections: [
        {
          icon: PricingBasic,
          title: 'Basic',
          price: '39',
          period: 'month',
          features: [
            {
              text: 'students',
              prefix: '500',
            },
            {
              text: 'school',
              prefix: '1',
            },
            {
              text: 'administrator accounts',
              prefix: '2',
            },
            {
              text: 'promotional items',
              prefix: 'Free',
            },
          ],
          button: {
            text: 'Buy basic plan',
            ButtonProps: {
              as: 'a',
              href: 'https://mypags.app',
            },
          },
        },
        {
          icon: PricingAdvanced,
          title: 'Professional',
          price: '79',
          period: 'month',
          features: [
            {
              text: 'students',
              prefix: '2,000',
            },
            {
              text: 'schools',
              prefix: '3',
            },
            {
              text: 'administrator accounts',
              prefix: '5',
            },
            {
              text: 'accounts',
              prefix: 'Parent',
            },
          ],
          button: {
            text: 'Buy professional plan',
            ButtonProps: {
              as: 'a',
              href: 'https://mypags.app',
            },
          },
        },
        {
          icon: PricingExpert,
          title: 'Ultimate',
          price: '149',
          period: 'month',
          features: [
            {
              text: 'students',
              prefix: 'Unlimited',
            },
            {
              text: 'schools',
              prefix: '5',
            },
            {
              text: 'administrator accounts',
              prefix: '10',
            },
            {
              text: 'accounts',
              prefix: 'Parent',
            },
          ],
          button: {
            text: 'Buy ultimate plan',
            ButtonProps: {
              as: 'a',
              href: 'https://mypags.app',
            },
          },
        },
      ],
    },
  },
  blog: {
    title: 'Latest news',
    articles: [
      {
        url: '#',
        src: Article1,
        srcSet: `${Article1} 1x, ${Article12x} 2x`,
        date: 'Today',
        title: "Online learning is here to stay, so it's time for you to adjust",
        text:
          'Nullam sed tellus nec arcu mollis iaculis. Aliquam eget velit a libero suscipit tempor eget at leo. Vestibulum commodo tempor gravida. Donec dictum nunc at lorem euismod, et faucibus ante consectetur. Nullam porttitor eros in ligula posuere dignissim.',
      },
      {
        url: '#',
        src: Article2,
        srcSet: `${Article2} 1x, ${Article22x} 2x`,
        date: 'Yesterday',
        title: 'What computers are changing the game for students at home',
      },
      {
        url: '#',
        src: Article3,
        srcSet: `${Article3} 1x, ${Article32x} 2x`,
        date: 'Last week',
        title: 'Drones used to enhance virtual learning experience',
      },
      {
        url: '#',
        src: Article4,
        srcSet: `${Article4} 1x, ${Article42x} 2x`,
        date: '2 weeks ago',
        title: 'Learn computer science for free at home',
      },
      {
        url: '#',
        src: Article5,
        srcSet: `${Article5} 1x, ${Article52x} 2x`,
        date: 'Last month',
        title: 'Best ways to collaborate virtually',
      },
    ],
    cta: {
      label: 'Read all news on Medium',
      href: 'https://blastofftutoring.netlify.app/',
    },
  },
  contact: {
    title: 'Contact us',
    sections: [
      {
        icon: MapMarker,
        text: textToMultiline`71 Roundtree Drive Plainview,\nNew York 11803\nUnited States`,
      },
      {
        icon: MobilePhone,
        text: '(516) 555-0114',
      },
      {
        icon: PaperAirplane,
        text: 'support@Blastofftutoring.com',
      },
    ],
    socialLinks: [
      {
        icon: FacebookF,
        href: 'https://facebook.com',
        title: 'Facebook',
      },
      {
        icon: Instagram,
        href: 'https://www.instagram.com/blastofftutoring/',
        title: 'Instagram',
      },
      {
        icon: Twitter,
        href: 'https://twitter.com',
        title: 'Twitter',
      },
      {
        icon: Linkedin,
        href: 'https://linkedin.com',
        title: 'Linkedin',
      },
    ],
    mailer: {
      title: 'Contact us',
      cta: 'Send message',
      validationSchema: Yup.object({
        name: Yup.string().max(20, 'Must be 20 characters or less').required('Required'),
        school: Yup.string().required('Required'),
        email: Yup.string().email('Must be an email').required('Required'),
        comment: Yup.string().required('Required'),
      }),
      // eslint-disable-next-line no-undef
      onSubmit: (values, { setSubmitting, resetForm }) => {
        fetch('/?no-cache=1', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: encode({
            'form-name': 'contact',
            ...values,
          }),
        })
          .then(() => {
            alert('Success!');
            setSubmitting(false);
            resetForm({});
          })
          .catch(error => {
            alert('Error: Please Try Again!');
            setSubmitting(false);
          });
      },
      fields: [
        {
          name: 'name',
          label: 'Full name',
          placeholder: 'ie. John Doe',
          initialValue: '',
        },
        {
          name: 'school',
          label: 'School',
          placeholder: 'i.e. North Central School',
          initialValue: '',
        },
        {
          name: 'email',
          label: 'E-mail',
          placeholder: 'i.e. john.doe@email.com',
          type: 'email',
          initialValue: '',
        },
        {
          name: 'comment',
          label: 'Comment',
          placeholder: 'I was wondering about...',
          type: 'text',
          initialValue: '',
        },
      ],
    },
  },
  footer: {
    links: [
      {
        label: 'Disclaimer',
        href: 'https://blastofftutoring.com',
      },
      {
        label: 'Terms & conditions',
        href: 'https://blastofftutoring.com',
      },
    ],
  },
  copyright: '© 2021 Blast Off Tutoring',
  navbaralt: {
    actions: [
      {
        url: '/',
        label: 'Return home',
      },
    ],
  },
  apply: {
    title: 'Apply for a position',
    sections: [
      {
        icon: MapMarker,
        text: textToMultiline`We are looking for talented, motivated\nindividuals to join our team\nand start revolutionizing education!`,
      },
      {
        icon: MapMarker,
        text: textToMultiline`Let us know what you could offer`,
      },
      {
        icon: MapMarker,
        text: 'Writers, coders, business people are all welcome',
      },
    ],
    socialLinks: [
      {
        icon: FacebookF,
        href: 'https://facebook.com',
        title: 'Facebook',
      },
      {
        icon: Instagram,
        href: 'https://www.instagram.com/blastofftutoring/',
        title: 'Instagram',
      },
      {
        icon: Twitter,
        href: 'https://twitter.com',
        title: 'Twitter',
      },
      {
        icon: Linkedin,
        href: 'https://linkedin.com',
        title: 'Linkedin',
      },
    ],
    mailer: {
      title: 'Application',
      cta: 'Apply now',
      validationSchema: Yup.object({
        name: Yup.string().max(20, 'Must be 20 characters or less').required('Required'),
        email: Yup.string().email('Must be an email').required('Required'),
        phone: Yup.string().matches(phoneRegExp, 'Phone number is not valid').required('Required'),
        information: Yup.string().required('Required'),
      }),
      // eslint-disable-next-line no-undef
      onSubmit: (values, { setSubmitting, resetForm }) => {
        fetch('/?no-cache=1', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: encode({
            'form-name': 'application',
            ...values,
          }),
        })
          .then(() => {
            alert('Success!');
            setSubmitting(false);
            resetForm({});
          })
          .catch(error => {
            alert('Error: Please Try Again!');
            setSubmitting(false);
          });
      },
      fields: [
        {
          name: 'name',
          label: 'Full name',
          placeholder: 'ie. John Doe',
          initialValue: '',
        },
        {
          name: 'email',
          label: 'E-mail',
          placeholder: 'i.e. john.doe@email.com',
          type: 'email',
          initialValue: '',
        },
        {
          name: 'phone',
          label: 'Phone Number',
          type: 'tel',
          placeholder: 'ie. 555-678-123',
          initialValue: '',
        },
        {
          name: 'information',
          label: 'Information',
          placeholder: 'Tell us a bit about yourself...',
          multiline: true,
          initialValue: '',
        },
      ],
    },
  },
};
