//>>built
require(["dojo/domReady!"],function(){describe("AMD Loader",function(){it("dependencies loaded successfully",function(e){var i=100,n=1,r=10,t=function(e){for(var i in e)if(e.hasOwnProperty(i))return!0;return!1},o=function(){t(require.waiting)?(n<r?window.setTimeout(o,i):(expect(require.waiting).toEqual({}),e()),n+=1):(expect(require.waiting).toEqual({}),e())};o()})})});//# sourceMappingURL=jasmineAMDErrorChecking.js.map