const {i18n} = require('./next-i18next.config');
const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')
const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')(['eth-hooks']);

module.exports = withPlugins([withTM], {
  i18n,
  reactStrictMode: true,
  webpack: config => {
    config.module.rules.push({
      test: /\.svg$/,
      use: 'raw-loader',
    });
    return config;
  },
});
// module.exports = withPWA(
//   {
//     i18n,
//     reactStrictMode: true,
//     pwa: {
//       dest: 'public',
//       runtimeCaching,
//     },
//     webpack: config => {
//       config.module.rules.push({
//         test: /\.svg$/,
//         use: 'raw-loader',
//       });
//       return config;
//     },
//   }
// );
