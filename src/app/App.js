define([
    'dijit/_TemplatedMixin',
    'dijit/_WidgetBase',

    'dojo/text!app/templates/App.html',
    'dojo/_base/declare'
], function (
    _TemplatedMixin,
    _WidgetBase,

    template,
    declare
) {
    return declare([_WidgetBase, _TemplatedMixin], {
        templateString: template
    });
});
