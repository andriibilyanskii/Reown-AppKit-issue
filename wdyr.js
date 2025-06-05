import React from 'react';

if (process.env.PROFILE === true && __DEV__) {
  const whyDidYouRender = require('@welldone-software/why-did-you-render');
  whyDidYouRender(React, {
    trackAllPureComponents: true,
  });

  console.log('whyDidYouRender enabled');
}
