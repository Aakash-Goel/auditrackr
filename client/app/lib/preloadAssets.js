import { Fragment } from 'react';

const preloadAssets = (assetPaths, as) => {
  // required to prevent loading the font twice - https://stackoverflow.com/a/36508361
  const rest = as === 'font' ? 'font/woff2' : '';

  return assetPaths.map((path, index) => (
    <Fragment key={`fragment-${as}-${index + 1}`}>
      <link rel="preload" href={path} as={as} type={rest} />
    </Fragment>
  ));
};

export default preloadAssets;
