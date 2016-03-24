define([
    'dijit/_TemplatedMixin',
    'dijit/_WidgetBase',

    'dojo/text!app/templates/App.html',
    'dojo/text!app/templates/_post.md',
    'dojo/_base/declare',
    'dojo/_base/lang',

    'lodash/lodash'
], function (
    _TemplatedMixin,
    _WidgetBase,

    template,
    postTemplate,
    declare,
    lang,

    _
) {
    var storageToken = 'templater_token';
    var persistData = ['display_name', 'email'];

    return declare([_WidgetBase, _TemplatedMixin], {
        templateString: template,

        postCreate: function () {
            console.log('app.App:postCreate', arguments);

            var existingData = window.localStorage[storageToken];
            if (existingData) {
                this.deserialize(JSON.parse(existingData));
            }
        },
        generate: function () {
            // summary:
            //      generate the template
            console.log('app.App:generate', arguments);

            var data = this.serialize();

            this.output.value = lang.replace(postTemplate, data);
            this.fileName.value = this.getFileNameString(new Date(), this.title.value);

            window.localStorage[storageToken] = JSON.stringify(data);
        },
        serialize: function () {
            // summary:
            //      returns relavent data as an object for local storage
            console.log('app.App:serialize', arguments);

            return {
                title: this.title.value,
                display_name: this.display_name.value,
                email: this.email.value,
                date: this.getDateString(new Date())
            };
        },
        getDateString: function (date) {
            // summary:
            //      formats current date
            // date: Date
            console.log('app.App:getDateString', arguments);

            var parts = date.toISOString().split('T');
            return parts[0] + ' ' + parts[1].split('.')[0];
        },
        deserialize: function (obj) {
            // summary:
            //      applies previously saved data
            // obj: Object
            //      same as the one returned by serialized
            console.log('app.App:deserialize', arguments);

            Object.keys(obj).forEach(function (key) {
                if (persistData.indexOf(key) > -1) {
                    this[key].value = obj[key];
                }
            }, this);
        },
        getFileNameString: function (date, title) {
            // summary:
            //      formats file name from date and title
            // date: Date
            // title: string
            console.log('app.App:getFileNameString', arguments);

            var dateString = date.toISOString().split('T')[0];
            var txt = dateString + '-' + _.snakeCase(title, '-') + '.md';
            return txt.replace('_', '-');
        }
    });
});
