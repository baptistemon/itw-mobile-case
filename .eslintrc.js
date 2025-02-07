// @ts-check

const { defineConfig } = require('eslint-define-config');

module.exports = defineConfig({
  extends: [
    // see source: https://github.com/bamlab/react-native-project-config/blob/main/packages/eslint-plugin/lib/configs/recommended.js
    'plugin:@bam.tech/recommended',
  ],
  rules: {
    'react/self-closing-comp': 'error',
  },
  ignorePatterns: ['expo-env.d.ts'],
});
