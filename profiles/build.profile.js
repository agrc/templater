/*eslint-disable no-unused-vars*/
var profile = {
    basePath: '../src',
    action: 'release',
    cssOptimize: 'comments',
    mini: true,
    optimize: 'uglify',
    layerOptimize: 'uglify',
    stripConsole: 'all',
    selectorEngine: 'acme',
    layers: {
        'dojo/dojo': {
            include: [
                'dojo/i18n',
                'dojo/domReady',
                'app/packages',
                'app/run',
                'app/App'
            ],
            includeLocales: ['en-us'],
            customBase: true,
            boot: true
        }
    },
    staticHasFeatures: {
        'dojo-trace-api': 0,
        'dojo-log-api': 0,
        'dojo-publish-privates': 0,
        'dojo-sync-loader': 0,
        'dojo-xhr-factory': 0,
        'dojo-test-sniff': 0
    },
    packages: [
        'bootstrap-css-only',
        {
            name: 'lodash',
            location: '../node_modules/lodash-amd',
            resourceTags: {
                amd: function (filename) {
                    return /\/*.js$/.test(filename);
                }
            }
        }
    ],
    files: ['.nojekyll'],
    userConfig: {
        packages: ['app', 'dojo', 'dijit', 'dojox', 'lodash']
    }
};
