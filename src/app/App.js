define([
    'dijit/_TemplatedMixin',
    'dijit/_WidgetBase',

    'dojo/dom-class',
    'dojo/query',
    'dojo/text!app/templates/App.html',
    'dojo/text!app/templates/_post.md',
    'dojo/_base/declare',
    'dojo/_base/lang',

    'lodash/kebabCase'
], function (
    _TemplatedMixin,
    _WidgetBase,

    domClass,
    query,
    template,
    postTemplate,
    declare,
    lang,

    kebabCase
) {
    var storageToken = 'templater_token';
    var persistData = ['display_name', 'email'];

    return declare([_WidgetBase, _TemplatedMixin], {
        templateString: template,

        version: '1.1.0',

        // requiredFields: domNode[]
        requiredFields: null,

        postCreate: function () {
            console.log('app.App:postCreate', arguments);

            var existingData = window.localStorage[storageToken];
            if (existingData) {
                this.deserialize(JSON.parse(existingData));
            }

            this.requiredFields = query('.required', this.domNode);
            this.requiredFields.on('change, keyup', lang.hitch(this, 'validate'));
        },
        validate: function () {
            // summary:
            //      checks for required fields and updates the disabled state of the
            //      generate button accordingly
            console.log('app.App:validate', arguments);

            this.submitBtn.disabled = !this.requiredFields.every(function (node) {
                return node.value.trim().length > 0;
            });
        },
        generate: function () {
            // summary:
            //      generate the template
            console.log('app.App:generate', arguments);

            var data = this.serialize();

            this.output.value = lang.replace(postTemplate, data);
            this.fileName.value = this.getFileNameString(
                new Date(),
                this.title.value,
                this.type.value
            );

            window.localStorage[storageToken] = JSON.stringify(data);
            domClass.remove(this.outputContainer, 'hidden');
        },
        serialize: function () {
            // summary:
            //      returns relavent data as an object for local storage
            console.log('app.App:serialize', arguments);

            return {
                title: this.title.value.replace(/'/g, '&#039;'),
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
        getFileNameString: function (date, title, type) {
            // summary:
            //      formats file name from date and title
            // date: Date
            // title: string
            // type: string (page || post)
            console.log('app.App:getFileNameString', arguments);

            if (type === 'post') {
                var dateString = date.toISOString().split('T')[0];
                return dateString + '-' + kebabCase(title) + '.md';
            } else {
                return kebabCase(title) + '/index.md';
            }
        }
    });
});
