const path = require('path') 
const PrerenderSPAPlugin = require('prerender-spa-plugin')
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer;
​
module.exports = (api, options) => {
    api.registerCommand('build:prerender', async (args) => {
      const PrerenderSPAPlugin = require('prerender-spa-plugin')
      api.chainWebpack(config => {
        config.plugin('prerender').use(PrerenderSPAPlugin, [{
            // Required - The path to the webpack-outputted app to prerender.
            staticDir: path.join(__dirname, 'dist'),
            // Required - Routes to render.
            routes: ['/'],            
            renderer: new Renderer({              
              renderAfterTime: 10000,
              timeout: 0,
              maxConcurrentRoutes: 10,
              navigationParams: {
                timeout: 0
              }
            }),            
        }])
      })      
      await api.service.run('build', args)
    })
  }
  
  module.exports.defaultModes = {
    'build:prerender': 'production'
  }