const rollup = require("rollup"),
    babel = require("rollup-plugin-babel"),
    path = require("path"),
    fs = require("fs");

rollup
    .rollup({
        input: "src/index.js",
        external: ["cx/*", "react-google-maps/*", "cx/ui", "cx/widgets", "cx/util"],
        plugins: [
            babel({
                presets: [
                    ["env", {
                        modules: false,
                        loose: true
                    }]
                ],
                plugins: [
                    "external-helpers",
                    ["transform-cx-jsx"],
                    ["transform-react-jsx", { pragma: "VDOM.createElement" }]
                ]
            })
        ]
    })
    .then((bundle) => {
        return bundle
            .generate({
                format: "es"
            })
            .then(result => {
                let distPath = path.join(__dirname, "../dist");
                if (!fs.existsSync(distPath))
                    fs.mkdirSync(distPath);
                fs.writeFileSync(path.join(distPath, "index.es.js"), result.code);
                //console.log(result.code);
            });
    })
    .catch(err => {
        console.error(err);
    });