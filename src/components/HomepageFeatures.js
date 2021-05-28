import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'The Best Discord Bot EVER',
    Svg: require('../../static/img/amogushome192.svg').default,
    description: (
      <>
        Like srsly, it's fucking AMOGUS.
      </>
    ),
  },
  {
    title: 'The Best Meme Bot EVER',
    Svg: require('../../static/img/stonedsnoo192.svg').default,
    description: (
      <>
        Unleash your inner redditor! KEANU CHUNGUS WHOLESOME 100.
      </>
    ),
  },
  {
    title: 'Designed for Coomer',
    Svg: require('../../static/img/boobs.svg').default,
    description: (
      <>
        The coomer is rejoicing over the bot.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
