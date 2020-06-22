import { Config } from '@stencil/core';

export const config: Config = {
  globalStyle: 'src/scss/_colors.scss',
  namespace: 'sl-component-library',
  taskQueue: 'async',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'docs-readme'
    },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
  ]
};
