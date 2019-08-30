module.exports = {
    cacheDirectory: true,
    cacheIdentifier: 'v33',
    presets: [
        [
            'cx-env',
            {
                targets: {
                    chrome: 50,
                    ie: 11,
                    firefox: 30,
                    edge: 12,
                    safari: 9,
                },
                modules: false,
                loose: true,
                useBuiltIns: 'entry',
                corejs: 2,
                cx: {
                    imports: {
                        useSrc: true,
                    },
                },
            },
        ],
    ],
    plugins: [],
};
