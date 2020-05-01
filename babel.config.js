const path = require('path');

const alias = {
  '@src': path.resolve(__dirname, 'src'),
  '@actions': path.resolve(__dirname, 'src/actions'),
  '@constants': path.resolve(__dirname, 'src/constants'),
  '@reducers': path.resolve(__dirname, 'src/reducers'),
  '@helpers': path.resolve(__dirname, 'src/helpers'),
  '@translations': path.resolve(__dirname, 'src/translations'),
  '@shared-components': path.resolve(__dirname, 'src/components/shared'),
  '@shared-containers': path.resolve(__dirname, 'src/containers/shared'),

  '@components': path.resolve(__dirname, `src/components/${process.env.APP_ENV || 'native'}`),
  '@containers': path.resolve(__dirname, `src/containers/${process.env.APP_ENV || 'native'}`),
  '@scenes': path.resolve(__dirname, `src/scenes/${process.env.APP_ENV || 'native'}`),
  '@router': path.resolve(__dirname, `src/router/${process.env.APP_ENV || 'native'}`),
};


module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          extensions: [
            '.js',
            '.jsx',
            '.android.js',
            '.ios.js',
            '.web.js',
          ],
          root: ['./src'],
          alias,
        },
      ],
    ],
  };
};

module.exports.paths = alias;
