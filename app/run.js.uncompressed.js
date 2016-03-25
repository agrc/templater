define("app/run", ["dojo","dijit","dojox"], function(dojo,dijit,dojox){
(function () {
    require({baseUrl: './'}, ['dojo/parser', 'dojo/domReady!'], function (parser) {
        parser.parse();
    });
}());
});
