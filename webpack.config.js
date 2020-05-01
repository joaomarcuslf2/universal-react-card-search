const createExpoWebpackConfigAsync = require('@expo/webpack-config');
const { merge } = require('lodash');

module.exports = async function (env, argv) {
  return merge(
    await createExpoWebpackConfigAsync(env, argv),
    {
    },
  );
};
