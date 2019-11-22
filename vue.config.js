module.exports = {
  pluginOptions: {
    prerenderSpa: {
      registry: undefined,
      renderRoutes: [
        '/',
        '/1',
        '/2',
        '/3',
        '/4',
        '/5',
        '/6',
        '/7',
        '/8',
      ],
      useRenderEvent: false,
      headless: true,
      onlyProduction: true,
      // renderAfterTime: 30000,
      renderAfterElementExists: '[data-vue-meta]'
    }
  }
}
