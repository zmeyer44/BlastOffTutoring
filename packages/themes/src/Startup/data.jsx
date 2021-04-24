import React from 'react';
import { smoothLinkProps } from '@pagerland/common/src/utils';
import { Link } from 'gatsby';

import textToMultiline from '@pagerland/common/src/utils/textToMultiline';
import Img from '@pagerland/common/src/components/Img';

import MapMarker from '@pagerland/icons/src/monochrome/MapMarker';
import MobilePhone from '@pagerland/icons/src/monochrome/MobilePhone';
import PaperAirplane from '@pagerland/icons/src/monochrome/PaperAirplane';
import Award from '@pagerland/icons/src/line/Award';
import Brain from '@pagerland/icons/src/line/Brain';
import Dna from '@pagerland/icons/src/line/Dna';
import Heart from '@pagerland/icons/src/line/Heart';
import Globe from '@pagerland/icons/src/line/Globe';

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
      // {
      //   to: 'pricing',
      //   label: 'Pricing',
      // },
      // {
      //   to: 'blog',
      //   label: 'News',
      // },
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
          'Once you found the right tutor for you, start chatting and set up a time to meet though our online video chat.',
      },
    ],
    cta: {
      label: 'Learn More',
      to: 'features',
    },
  },
  about: {
    img: {
      src: AboutUs,
      srcSet: `${AboutUs} 1x, ${AboutUs2x} 2x`,
    },
    title: 'About us',
    text:
      "We were founded by brothers Zachary and Mitchell Meyer when Mitchell couldn't find a way to fulfill his community service requirements for National Honors Society. While struggling to find students to tutor, he thought that there must be a better way. After approaching Zach with his idea, they got to work building what is now Blast Off Tutoring. We strive to provide students free tutoring sessions from their peers while giving community service opportunities for those looking to bolster their résumé.",

    cta: {
      label: 'Learn more about us',
      href: 'https://blastofftutoring.com/about',
    },
  },
  team: {
    title: 'Meet our team',
    text:
      'We may be small, but we are powerful! Our team is dedicated to providing users with the best possible experience while using our services. We are also looking for summer interns to help out growing our company. Click the link below to apply now.',
    cta: {
      label: 'Join the Team',
      as: Link,
      to: '/apply',
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
      'Using our platform is simple. First browse our library of tutors to find who is right for you, start messaging them to schedule a time to meet, and then use our virtual lesson space to get the most from your lesson.',
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
              as: Link,
              to: '/purchase',
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
              as: Link,
              to: '/purchase',
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
              as: Link,
              to: '/purchase',
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
          'The Corona Virus has changed the way that we look at education. Hybrid learning environments will force students to overcome some new challenges that they face. Technology is also continuing to play a larger role in education aswell... ',
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
        text: textToMultiline`Based in Long Island, Ny`,
      },
      {
        icon: MobilePhone,
        text: '(516) 477-3745',
      },
      {
        icon: PaperAirplane,
        text: 'Support@Blastofftutoring.com',
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
        as: Link,
        to: '/',
        label: 'Return home',
      },
    ],
  },
  apply: {
    title: 'Apply for a position',
    sections: [
      {
        icon: Award,
        text: textToMultiline`We are looking for talented, motivated\nindividuals to join our team\nand start revolutionizing education!`,
      },
      {
        icon: Brain,
        text: textToMultiline`Let us know what you could offer`,
      },
      {
        icon: Dna,
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
  purchase: {
    title: 'Interested in our program?',
    sections: [
      {
        icon: Heart,
        text: textToMultiline`Our platform will help your students thrive\nwe are commited to finding the best\nplan to suit your needs`,
      },
      {
        icon: Brain,
        text: textToMultiline`Let us know if you have any questions or concerns`,
      },
      {
        icon: Globe,
        text: "We are here to help, so don't hesitate to reach out",
      },
    ],

    mailer: {
      title: 'Interest Form',
      cta: 'Send message',
      validationSchema: Yup.object({
        name: Yup.string().max(20, 'Must be 20 characters or less').required('Required'),
        school: Yup.string().required('Required'),
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
            'form-name': 'purchase',
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
          label: 'School Name',
          placeholder: 'ie. North Central School',
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
          placeholder:
            'Which plan are you interested in and are there any accomodations your school may need?',
          multiline: true,
          initialValue: '',
        },
      ],
    },
  },
};
