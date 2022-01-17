import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import React from 'react';

import HomepageFeatures from '../components/HomepageFeatures';
import Seo from '../components/Seo';
import styles from './index.module.css';

const HomepageHeader = (): JSX.Element => {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className='container'>
        <img
          width='192'
          height='192'
          src={'/img/amogusnhentai192.png'}
          style={{
            display: 'block',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            margin: 'auto',
            marginTop: '3rem',
          }}
          alt='Amogus x Nhentai'
        />
        <h1 className='hero__title'>{siteConfig.title}</h1>
        <p className='hero__subtitle'>{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className='button button--primary button--lg' to='/docs/'>
            Documentation
          </Link>
          <Link className='button button--primary button--lg' to='/invite/'>
            Invite
          </Link>
        </div>
      </div>
    </header>
  );
};

const Home = (): JSX.Element => {
  return (
    <Layout title={`Home`} description='when the impostor is sus 😳'>
      <Seo templateTitle='Home' path='/' />
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
};

export default Home;
