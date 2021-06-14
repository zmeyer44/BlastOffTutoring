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
import Avatar4 from './assets/avatars/srijan.jpg';
import Avatar42x from './assets/avatars/srijan.jpg';
import Avatar5 from './assets/avatars/emily.jpg';
import Avatar52x from './assets/avatars/emily.jpg';
import Avatar6 from './assets/avatars/lucas.jpg';
import Avatar62x from './assets/avatars/lucas.jpg';
import Avatar7 from './assets/avatars/james.jpg';
import Avatar72x from './assets/avatars/james.jpg';

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
        to: 'features',
        label: 'Features',
      },
      {
        to: 'team',
        label: 'Team',
      },
      {
        to: 'about',
        label: 'About',
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
      'We connect high school students looking for community service hours with students in need of a tutor.',
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
      {
        avatar: {
          src: Avatar4,
          srcSet: `${Avatar4} 1x, ${Avatar42x} 2x`,
        },
        name: 'Srijan Sai',
        position: 'Blog Writing Intern',
        social: {
          linkedin: '#',
          twitter: '#',
          instagram: '#',
        },
      },
      {
        avatar: {
          src: Avatar5,
          srcSet: `${Avatar5} 1x, ${Avatar52x} 2x`,
        },
        name: 'Emily Chiong',
        position: 'Social Media Intern',
        social: {
          linkedin: 'https://www.linkedin.com/in/emily-chiong-778416210/',
          twitter: '#',
          instagram: '#',
        },
      },
      {
        avatar: {
          src: Avatar6,
          srcSet: `${Avatar6} 1x, ${Avatar62x} 2x`,
        },
        name: 'Lucas Diaz',
        position: 'Marketing Intern',
        social: {
          linkedin: '#',
          twitter: '#',
          instagram: '#',
        },
      },
      {
        avatar: {
          src: Avatar7,
          srcSet: `${Avatar7} 1x, ${Avatar72x} 2x`,
        },
        name: 'James Protonentis',
        position: 'Blog Writing Intern',
        social: {
          linkedin: '#',
          twitter: '#',
          instagram: '#',
        },
      },
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
        label: 'Terms & conditions',
        as: Link,
        to: '/terms',
      },
    ],
  },
  copyright: `© ${new Date().getFullYear()} Blast Off Tutoring`,
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
  terms: {
    title: 'Terms and Conditions',
    text:
      'We are committed to student safety and do everything in our power to keep Blast Off Tutoring safe and secure.',
    content: [
      {
        heading: 'Privacy Policy',
        text: [
          'Blast Off Tutoring (“us”, “we”, or “our”) operates the www.blastofftutoring.com website which matches students with tutors for tutoring services (hereinafter referred to as the “Service”). Blast Off Tutoring obtains data from Users (including Tutors and Students who utilize the site) of the Service in order to effectively assist the Student find a Tutor suited to their needs.',
          'Blast Off Tutoring is sensitive to the security concerns that inherently arise from the use of the website and created this policy to address those concerns and identify the manner in which personal data is collected, stored and disclosed.',
          'Any data provided is used to effectuate the aim of the Service and to ensure the needs of users are being met as well as to improve the Service. By using the Service, users agree to the collection and use of information in accordance with this policy.',
        ],
        list: false,
      },
      {
        heading: 'Definitions',
        text: [
          'Cookies: small files stored on the User’s device (computer or mobile device) for the purpose of identifying a device as it connects to the site.',
          'User: Any individual, regardless of whether they are a Tutor or a Student, who is using the Service and provides Personal Data.',
          'Personal Data: Unique data about a User which can be used to identify that User (whether such data is provided directly by the User or from other information either in our possession or likely to come into our possession).',
          'Record: Refers to the form completed by the tutor at the conclusion of a tutoring session and verified by the student to confirm that the tutoring session occurred. The Record can be utilized by the tutor to obtain community service credits from their school/school district and/or local honor society.',
          'Service: Service means the www.blastofftutoring.com website operated by Blast Off Tutoring which results in the pairing of tutors and students',
          'Usage Data: Usage Data itself (such as the duration of a page visit) is collected automatically and is either generated by the use of the Service or from the Service infrastructure.',
          'User: Refers to all Users of the site, including Tutors and Students.',
        ],
        list: true,
      },
      {
        heading: 'Information Collection and Use',
        text: [
          'We collect several different types of information for various purposes to provide and improve our Service.',
        ],
        list: false,
      },
      {
        heading: 'Types of Data Collected',
        text: [
          'Personal Data',
          'If the User is a teacher or a professor, we collect the User’s email address, first name and last name, and the name of the User’s school. We use the email address to create an administrative account for the User. It is expected that teachers/professors use of the site is in an administrative capacity for the purpose of verifying Tutor’s information and “certifying” the tutor for the subjects for which he/she has requested to provide tutoring services. We will never send emails to teachers unless requested upon by the teachers themselves.',
          'If the User is a student of a district using our service who is seeking tutoring services, we collect an email address, first name, last name and the school the student attends. This information is used to create a unique account for the student to log in to. Students may receive emails if a Record has not been confirmed by them.',
          'If the User is a (student) Tutor, in addition to providing name and contact information, the student will also be asked to fill out a form explaining their strengths and the academic areas for which they are able to provide tutoring. The form will ask for a title, academic strength, grades they can tutor, subjects they can tutor, a cover letter, and space for them to introduce themselves to potential students. Their title, cover letter, academic strength, and introduction can be viewed by any potential student. Tutors may receive emails if a student is awaiting a Record to be issued. Other than emails pertaining to Records, students will not receive any emails, unless requested by the student. STUDENT INFORMATION IS NEVER SHARED WITH ANYONE OTHER THAN USERS OF THE SERVICE.',
          'Usage Data',
          'We may also collect information that your browser sends whenever you visit our Service or when you access the Service by or through a mobile device (“Usage Data”).',
          'This Usage Data may include information such as your computer’s Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other diagnostic data.',
          'When you access the Service with a mobile device, this Usage Data may include information such as the type of mobile device you use, your mobile device unique ID, the IP address of your mobile device, your mobile operating system, the type of mobile Internet browser you use, unique device identifiers and other diagnostic data.',
        ],
        list: false,
      },
      {
        heading: 'Tracking & Cookies Data',
        text: [
          'We use cookies and similar tracking technologies to track the activity on our Service and we hold certain information identified below in this section.',
          'Cookies are files with a small amount of data which may include an anonymous unique identifier. Cookies are sent to your browser from a website and stored on your device. Other tracking technologies are also used such as beacons, tags and scripts to collect and track information and to improve and analyse our Service.',
          'You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.',
        ],
        list: false,
      },
      {
        heading: 'Examples of Cookies we use:',
        text: [
          'Session Cookies. We use Session Cookies to operate our Service.',
          'Preference Cookies. We use Preference Cookies to remember your preferences and various settings.',
          'Security Cookies. We use Security Cookies for security purposes.',
        ],
        list: true,
      },
      {
        heading: 'Use of Data',
        text: ['Blast Off Tutoring uses the collected data for various purposes:'],
        list: false,
      },
      {
        heading: '',
        text: [
          'To provide and maintain our Service',
          'To notify you about changes to our Service',
          'To allow you to connect with other students in order to tutor or get tutored when you choose to do so',
          'To create a record for a receipt of the tutoring session',
          'To notify you to approve a record if you chose to do so',
          'To provide customer support',
          'To gather analysis or valuable information so that we can improve our Service',
          'To monitor the usage of our Service',
          'To detect, prevent and address technical issues',
        ],
        list: true,
      },
      {
        heading: '',
        text: [
          'WE NEVER USE COLLECTED DATA FOR ADVERTISING PURPOSES. WE WILL NEVER SELL YOUR DATA TO A THIRD PARTY.',
        ],
        list: false,
      },
      {
        heading: 'Retention of Data',
        text: [
          'Blast Off Tutoring will retain your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy and in no event longer than seven (7) years. We will retain and use your Personal Data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes and enforce our legal agreements and policies.',
          'Blast Off Tutoring will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a shorter period of time, except when this data is used to strengthen the security or to improve the functionality of our Service, or we are legally obligated to retain this data for longer periods.',
        ],
        list: false,
      },
      {
        heading: 'Transfer of Data',
        text: [
          'Your information, including Personal Data, may be transferred to — and maintained on — computers located outside of your state, province, country or other governmental jurisdiction where the data protection laws may differ from those of your jurisdiction.',
          'Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer.',
          'Blast Off Tutoring will take all the steps reasonably necessary to ensure that your data is treated securely and in accordance with this Privacy Policy and no transfer of your Personal Data will take place to an organization unless there are adequate controls in place including the security of your data and other personal information.',
        ],
        list: false,
      },
      {
        heading: 'Disclosure of Data',
        text: [
          'Business Transaction',
          'If Blast Off Tutoring is involved in a merger, acquisition or asset sale, your Personal Data may be transferred. We will provide notice before your Personal Data is transferred and becomes subject to a different Privacy Policy.',
          'Disclosure for Law Enforcement',
          'Under certain circumstances, Blast Off Tutoring may be required to disclose your Personal Data if required to do so by law or in response to valid requests by public authorities (e.g. a court or a government agency)',
          'Legal Requirements',
          'Blast Off Tutoring may disclose your Personal Data in the good faith belief that such action is necessary',
        ],
        list: false,
      },
      {
        heading: '',
        text: [
          'To comply with a legal obligation',
          'To protect and defend the rights or property of Blast Off Tutoring',
          'To prevent or investigate possible wrongdoing in connection with the Service',
          'To protect the personal safety of users of the Service or the public',
          'To protect against legal liability',
        ],
        list: true,
      },
      {
        heading: 'Security of Data',
        text: [
          'The security of your data is important to us but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.',
        ],
        list: false,
      },
      {
        heading:
          'Our Policy on “Do Not Track” Signals under the California Online Protection Act (CalOPPA)',
        text: [
          'We do not support Do Not Track (“DNT”). Do Not Track is a preference you can set in your web browser to inform websites that you do not want to be tracked.',
          'You can enable or disable Do Not Track by visiting the Preferences or Settings page of your web browser.',
        ],
        list: false,
      },
      {
        heading: 'Service Providers',
        text: [
          'We may employ third party companies and individuals to facilitate our Service (“Service Providers”), provide the Service on our behalf, perform Service-related services or assist us in analysing how our Service is used.',
          'These third parties will have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.',
        ],
        list: false,
      },
      {
        heading: 'Analytics',
        text: [
          'We may use third-party Service Providers to monitor and analyse the use of our Service.',
          'Google Analytics: Google Analytics is a web analytics service offered by Google that tracks and reports website traffic. Google uses the data collected to track and monitor the use of our Service. This data is shared with other Google services. Google may use the collected data to contextualise and personalise the ads of its own advertising network.For more information on the privacy practices of Google, please visit the Google Privacy & Terms web page: https://policies.google.com/privacy?hl=en/',
        ],
        list: false,
      },
      {
        heading: 'Children’s Privacy',
        text: [
          'Our service is geared towards students older than the age of 12. Some of these students may be legally classified as children. Our service will only receive the information that is entered by the student. This can be as minimal as a first name, last name, grade, and email. No other information (age, geographical information, etc.) is collected or requested. We will also have access to any activity that is performed on the site (records and messages). The information we do collect is not shared with anyone for any purpose. If there are any concerns about children using our service, please send us an email: support@blastofftutoring.com.',
        ],
        list: false,
      },
      {
        heading: 'Changes to This Privacy Policy',
        text: [
          'We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.',
          'We will let you know via email and/or a prominent notice on our Service, prior to the change becoming effective and update the “effective date” at the top of this Privacy Policy.',
          'You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.',
        ],
        list: false,
      },
      {
        heading: 'Contact Us',
        text: [
          'If you have any questions about this Privacy Policy, please contact us: By email: support@blastofftutoring.com',
        ],
        list: false,
      },
      {
        heading:
          'Appendix 1: Compliance with New York Education Law §2-D (Unauthorized release of personally identifiable information)Appendix 1: Compliance with New York Education Law §2-D (Unauthorized release of personally identifiable information)',
        text: [
          'Under New York State Education Law § 2-D Blast Off Tutoring is a “third party contractor”. The websites operated by Blast Off Tutoring (www.blastofftutoring.com) are compliant with New York Education Law § 2-D. Specifically,',
        ],
        list: false,
      },
      {
        heading: '',
        text: [
          'To use our student connection technology both the students and teachers provide enough information to be able to log into their account. Student tutors will also fill out a form explaining a little bit about themselves (ex. Title, grades they can tutor, subjects they can tutor, a cover letter, and a description about themselves) to show students about themselves and give them the option to message the tutor.',
          'We will never sell or release a student’s personally identifiable information for any commercial purpose.',
          'We will never sell or use student data for marketing purposes.',
          'We will never sell or disclose personally identifiable information to any other party.',
          'We “maintain reasonable administrative, technical and physical safeguards to protect the security, confidentiality and integrity of personally identifiable student information in [our] custody.”',
          'We use the latest industry standard encryption technologies to protect data in motion.',
        ],
        list: true,
      },
      {
        heading: ' ',
        text: [],
        list: false,
      },
    ],
    cta: {
      label: 'Return Home',
      as: Link,
      to: '/',
    },
  },
};
