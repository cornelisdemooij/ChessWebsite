module.exports = {
    parser: "@babel/eslint-parser",
    parserOptions: {
      requireConfigFile: false,
      babelOptions: {
        plugins: [
          '@babel/plugin-proposal-class-properties'
        ]
      }
    },
};