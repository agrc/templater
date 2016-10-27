require([
    'app/App',
    'dojo/dom-construct',
    'dojo/_base/window'
],
function (
    App,
    domConstruct,
    win
    ) {
    describe('app/App', function () {
        var testWidget;
        beforeEach(function () {
            testWidget = new App({}, domConstruct.create('div', {}, win.body()));
            testWidget.startup();
        });
        afterEach(function () {
            testWidget.destroy();
            testWidget = null;
        });

        it('creates a valid object', function () {
            expect(testWidget).toEqual(jasmine.any(App));
        });

        describe('serialize', function () {
            it('escapes single quotes in title', function () {
                testWidget.title.value = 'i have \'single quotes\'';

                expect(testWidget.serialize().title).toBe('i have &#039;single quotes&#039;');
            });
            it('returns data', function () {
                var title = 'title';
                var display_name = 'display_name';
                var email = 'email';
                var type = 'post';

                testWidget.title.value = title;
                testWidget.display_name.value = display_name;
                testWidget.email.value = email;
                testWidget.type.value = type;
                testWidget.featured.checked = true;
                testWidget.tags.value = 'one two, three';

                var data = testWidget.serialize();
                expect(data.title).toEqual(title);
                expect(data.display_name).toEqual(display_name);
                expect(data.email).toEqual(email);
                expect(data.type).toEqual(type);
                expect(data.featured).toEqual(true);
                expect(data.tags).toEqual(['one two', 'three']);
            });
            it('returns an empty string for empty tags box', function () {
                expect(testWidget.serialize().tags).toEqual([]);
            });
        });

        describe('getFileNameString', function () {
            it('posts', function () {
                var result = testWidget.getFileNameString(new Date(1464717929433), 'test title', 'post');

                expect(result).toBe('_posts/2016-05-31-test-title.md');
            });
            it('pages', function () {
                var result = testWidget.getFileNameString(new Date(1464717929433), 'test title', 'page');

                expect(result).toBe('test-title/index.md');
            });
        });
    });
});
