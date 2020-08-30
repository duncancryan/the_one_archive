const GoogleFontsPlugin = require("google-fonts-webpack-plugin");

module.exports = {
    chainWebpack: config => {
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