const PrerenderSPAPlugin = require('prerender-spa-plugin')
const PuppeteerRenderer = PrerenderSPAPlugin.PuppeteerRenderer;

module.exports = {
    module: {
      rules: [
        // ... other rules omitted
        // this will apply to both plain `.scss` files
        // AND `<style lang="scss">` blocks in `.vue` files
        {
          test: /\.scss$/,
          use: [
            'vue-style-loader',
            'css-loader',
            'sass-loader'
          ]
        }
      ]
    },
    plugins: [
      new PrerenderSPAPlugin({
        staticDir: path.join(__dirname, '/dist'), // The path to the folder where index.html is.
        routes: ['/'], // List of routes to prerender.
        renderer: new PuppeteerRenderer()
      })
    ]
  }