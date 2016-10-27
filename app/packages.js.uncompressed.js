define("app/packages", ["dojo","dijit","dojox"], function(dojo,dijit,dojox){
require({
    packages: [
        'app',
        'dijit',
        'dojo',
        'dojox',
        'handlebars',
        {
            name: 'lodash',
            location: '../node_modules/lodash-amd'
        }
    ]
});
});
