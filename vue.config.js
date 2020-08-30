const GoogleFontsPlugin = require("google-fonts-webpack-plugin");

module.exports = {
    configureWebpack: config => {
        plugins: [
            new GoogleFontsPlugin({
                fonts: [
                    {family: 'Cinzel Decorative', variants: ['700bold']},
                    {family: 'Marck Script'},
                    {family: 'Tangerine', variants: ['700bold']}
                ]
            })
        ]
    }
}