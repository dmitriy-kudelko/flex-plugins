import * as esbuild from 'esbuild';
import { globSync } from 'glob';
import { dtsPlugin } from 'esbuild-plugin-d.ts';

import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const packageJson = require('./package.json');

const entryPoints = globSync([
  'src/index.ts',
]);

const getExternalPeers = ({ peerDependencies }) => {
  const externals = Object.keys(peerDependencies);
  const wildcards = externals.map((packageName) => `${packageName}/*`);

  return [
    ...externals,
    ...wildcards,
  ];
};

await esbuild.build({
  outbase: 'src',
  entryPoints,
  bundle: true,
  format: 'cjs',
  outdir: 'dist',
  color: true,
  logLevel: 'info',
  sourcemap: 'linked',
  minify: false,
  plugins: [
    dtsPlugin(),
  ],
  external: getExternalPeers(packageJson),
});
