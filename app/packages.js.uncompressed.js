define("app/packages", ["dojo","dijit","dojox"], function(dojo,dijit,dojox){
require({
    packages: [
        'app',
        'dijit',
        'dojo',
        'dojox',
        {
            name: 'lodash',
            location: '../node_modules/lodash-amd'
        }
    ]
});
});
