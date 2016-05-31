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
