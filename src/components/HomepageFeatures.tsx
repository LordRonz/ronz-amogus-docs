import clsx from 'clsx';
import React from 'react';

import AmogusHomeSvg from '../../static/img/amogushome.min.svg';
import FlushedSvg from '../../static/img/flushed.min.svg';
import StonedSnooSvg from '../../static/img/stonedsnoo.min.svg';
import style from './HomepageFeatures.module.css';

const FeatureList = [
  {
    id: 1,
    title: 'The Best Discord Bot EVER',
    Svg: AmogusHomeSvg,
    description: <>Like srsly, it{"'"}s fucking AMOGUS.</>,
  },
  {
    id: 2,
    title: 'The Best Meme Bot EVER',
    Svg: StonedSnooSvg,
    description: <>Unleash your inner redditor! KEANU CHUNGUS WHOLESOME 100.</>,
  },
  {
    id: 3,
    title: 'Designed for Coomer',
    Svg: FlushedSvg,
    description: <>The coomer is rejoicing over the bot.</>,
  },
];

type FeatureProp = {
  id: number;
  Svg: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: JSX.Element;
};

const Feature = ({ Svg, title, description }: FeatureProp): JSX.Element => {
  return (
    <div className={clsx('col col--4')}>
      <div className='text--center'>
        <Svg className={style.featureSvg} role='img' aria-label={title} />
      </div>
      <div className='text--center padding-horiz--md'>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

const HomepageFeatures = (): JSX.Element => {
  return (
    <section
      style={{
        display: 'flex',
        alignItems: 'center',
        padding: '2rem 0',
        width: '100%',
      }}
    >
      <div className='container'>
        <div className='row'>
          {FeatureList.map((props: FeatureProp) => (
            <Feature key={props.id} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomepageFeatures;
