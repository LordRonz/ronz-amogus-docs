import Head from '@docusaurus/Head';
import React from 'react';

const defaultMeta = {
  title: 'ronz-AMOGUS',
  siteName: 'ronz-amogus.vercel.app',
  description: 'when the impostor is sus 😳',
  url: 'https://ronz-amogus.vercel.app',
  image: '/img/amogusnhentai192.png',
  type: 'website',
  robots: 'follow, index',
  googlebot: 'follow, index',
  path: '/',
};

type SeoProps = {
  date?: string;
  templateTitle?: string;
} & Partial<typeof defaultMeta>;

const Seo = (props: SeoProps) => {
  const meta = {
    ...defaultMeta,
    ...props,
  };

  meta['title'] = props.templateTitle ? `${props.templateTitle} | ${meta.siteName}` : meta.title;

  return (
    <Head>
      <title>{meta.title}</title>
      <meta name='robots' content={meta.robots} />
      <meta content={meta.description} name='description' />
      <meta property='og:url' content={`${meta.url}${meta.path}`} />
      <link rel='canonical' href={`${meta.url}${meta.path}`} />
      {/* Open Graph */}
      <meta property='og:type' content={meta.type} />
      <meta property='og:site_name' content={meta.siteName} />
      <meta property='og:description' content={meta.description} />
      <meta property='og:title' content={meta.title} />
      <meta name='image' property='og:image' content={meta.image} />
      {/* Twitter */}
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:site' content='@lordronz' />
      <meta name='twitter:title' content={meta.title} />
      <meta name='twitter:description' content={meta.description} />
      <meta name='twitter:image' content={meta.image} />
      {/* Favicons */}
      {favicons.map((linkProps) => (
        <link key={linkProps.href} {...linkProps} />
      ))}
      <meta name='msapplication-TileColor' content='#000000' />
      <meta name='msapplication-TileImage' content='/favicon/mstile-150x150.png' />
      <meta name='theme-color' content='#000000' />
    </Head>
  );
};

type Favicons = {
  rel: string;
  href: string;
  sizes?: string;
  type?: string;
};

const favicons: Array<Favicons> = [
  {
    rel: 'icon',
    type: 'image/x-icon',
    href: '/favicon.ico',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '192x192',
    href: '/img/amogusnhentai192.png',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '120x120',
    href: '/img/amogusnhentai120.png',
  },
];

export default Seo;
