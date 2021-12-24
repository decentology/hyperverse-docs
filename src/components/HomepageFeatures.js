import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Basics',
    // Svg: require('../../static/img/homepage/1.svg').default,
    description: (
      <>Start your journey by learning key concepts in Web3, blockchain, and—of course—the Hyperverse!</>
    ),
    link: (
      <a href="/basics/introduction">Get Started with the Hyperverse</a>
    ),
  },
  {
    title: 'Compose',
    // Svg: require('../../static/img/homepage/1.svg').default,
    description: (
      <>Build, audit, and monitize composable smart modules on the Hyperverse.</>
    ),
    link: (
      <a href="compose/overview">Compose the Hyperverse</a>
    ),
  },
  {
    title: 'Discover',
    // Svg: require('../../static/img/homepage/1.svg').default,
    description: (
      <>Search for code in the most comprehensive marketplace for smart contracts ever created.</>
    ),
    link: (
      <a href="/discover/overview">Discover the Hyperverse</a>
    ),
  },
  {
    title: 'Build',
    // Svg: require('../../static/img/homepage/1.svg').default,
    description: (
      <>Accelerate your blockchain development journey with customized, full-stack code.</>
    ),
    link: (
      <a href="build/overview">Build the Hyperverse</a>
    ),
  },
  {
    title: 'Learn',
    // Svg: require('../../static/img/homepage/1.svg').default,
    description: (
      <>Explore basic, intermediate, and advanced concepts in Web3, blockchain, and Hyperverse.</>
    ),
    link: (
      <a href="/learn/overview">Learn the Hyperverse</a>
    ),
  },
  {
    title: 'Contribute',
    // Svg: require('../../static/img/homepage/1.svg').default,
    description: (
      <>Use your skills to support the mission to onboard 10 million new developers to Web3.</>
    ),
    link: (
      <a href="/contribute/overview">Contribute to the Hyperverse</a>
    ),
  },
];

function Feature({title, description, link}) {
  return (
    <div className={clsx('col col--4')}>
      {/* <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div> */}
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
        <p>{link}</p>
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
