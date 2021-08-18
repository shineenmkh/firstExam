const path = require("path");

{
    const path = require("path");

    module.exports = {

        entry:"./app/assets/scripts/app.js",
        output:
        {
            filename:"bundled.js",
            path:path.resolve(__dirname, "./docs")
        },
        mode:"development",
        watch:true,
        module:{
            rules:[
                {
                    test:/\.css$/i,
                    use:[
                        'style-loader',
                        'css-loader'
                    ]
                }
            ]
        }
    }
}