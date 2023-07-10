process.env.ESLINT_TSCONFIG = 'tsconfig.json'

module.exports = {
  extends: '@antfu',
  exclude: ['vite.config.ts', 'unocss.config.ts']
}
