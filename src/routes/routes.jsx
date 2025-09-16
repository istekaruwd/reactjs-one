import { lazy } from 'react';

import Layout from '../components/layout/Layout';
import LayoutTwo from '../components/layout/LayoutTwo';
import LayoutOnePage from '../components/layout/LayoutOnePage';
import LayoutOnePageTwo from '../components/layout/LayoutOnePageTwo';

const HomeOne = lazy(() => import('../pages/HomeOne'));
const HomeTwo = lazy(() => import('../pages/HomeTwo'));
const HomeThree = lazy(() => import('../pages/HomeThree'));
const HomeOnePage = lazy(() => import('../pages/HomeOnePage'));
const HomeOnePageTwo = lazy(() => import('../pages/HomeOnePageTwo'));
const AboutPage = lazy(() => import('../pages/AboutPage'));
const ServicePage = lazy(() => import('../pages/ServicePage'));
const SingleServicePage = lazy(() => import('../pages/SingleServicePage'));
const BlogPage = lazy(() => import('../pages/BlogPage'));
const BlogPageTwo = lazy(() => import('../pages/BlogPageTwo'));
const SingleBlogPage = lazy(() => import('../pages/SingleBlogPage'));
const GalleryPage = lazy(() => import('../pages/GalleryPage'));
const SingleGalleryPage = lazy(() => import('../pages/SingleGalleryPage'));
const TeamPage = lazy(() => import('../pages/TeamPage'));
const ContactPage = lazy(() => import('../pages/ContactPage'));
const NotFound = lazy(() => import('../pages/NotFound'));

const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomeOne />,
        meta: {
          title: 'Home - Elizah',
          description: 'Business And Corporate React JS Responsive Website.',
        },
      },
      {
        path: 'home-three',
        element: <HomeThree />,
        meta: {
          title: 'Home V3 - Elizah',
          description: 'Business And Corporate React JS Responsive Website.',
        },
      },
      {
        path: 'about',
        element: <AboutPage />,
        meta: {
          title: 'About - Elizah',
          description: 'Business And Corporate React JS Responsive Website.',
        },
      },
      {
        path: 'service',
        element: <ServicePage />,
        meta: {
          title: 'Service - Elizah',
          description: 'Business And Corporate React JS Responsive Website.',
        },
      },
      {
        path: 'service/:id',
        element: <SingleServicePage />,
        meta: {
          title: 'Single Service - Elizah',
          description: 'Business And Corporate React JS Responsive Website.',
        },
      },
      {
        path: 'blog',
        element: <BlogPage />,
        meta: {
          title: 'Blog - Elizah',
          description: 'Business And Corporate React JS Responsive Website.',
        },
      },
      {
        path: 'blog-two',
        element: <BlogPageTwo />,
        meta: {
          title: 'Blog V2 - Elizah',
          description: 'Business And Corporate React JS Responsive Website.',
        },
      },
      {
        path: 'blog/:id',
        element: <SingleBlogPage />,
        meta: {
          title: 'Single Blog - Elizah',
          description: 'Business And Corporate React JS Responsive Website.',
        },
      },
      {
        path: 'gallery',
        element: <GalleryPage />,
        meta: {
          title: 'Gallery - Elizah',
          description: 'Business And Corporate React JS Responsive Website.',
        },
      },
      {
        path: 'gallery/:id',
        element: <SingleGalleryPage />,
        meta: {
          title: 'Single Gallery - Elizah',
          description: 'Business And Corporate React JS Responsive Website.',
        },
      },
      {
        path: 'team',
        element: <TeamPage />,
        meta: {
          title: 'Team - Elizah',
          description: 'Business And Corporate React JS Responsive Website.',
        },
      },
      {
        path: 'contact',
        element: <ContactPage />,
        meta: {
          title: 'Contact - Elizah',
          description: 'Business And Corporate React JS Responsive Website.',
        },
      },
      {
        path: '*',
        element: <NotFound />,
        meta: {
          title: '404 - Page Not Found | Elizah',
          description: 'The page you are looking for does not exist.',
        },
      },
    ],
  },
  {
    path: '/',
    element: <LayoutTwo />,
    children: [
      {
        path: 'home-two',
        element: <HomeTwo />,
        meta: {
          title: 'Home V2 - Elizah',
          description: 'Business And Corporate React JS Responsive Website.',
        },
      },
    ],
  },
  {
    path: '/',
    element: <LayoutOnePage />,
    children: [
      {
        path: 'landingpage-one',
        element: <HomeOnePage />,
        meta: {
          title: 'Home OnePage - Elizah',
          description: 'Business And Corporate React JS Responsive Website.',
        },
      },
    ],
  },
  {
    path: '/',
    element: <LayoutOnePageTwo />,
    children: [
      {
        path: 'landingpage-two',
        element: <HomeOnePageTwo />,
        meta: {
          title: 'Home OnePage V2 - Elizah',
          description: 'Business And Corporate React JS Responsive Website.',
        },
      },
    ],
  },
];

export default routes;
