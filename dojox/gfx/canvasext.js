//>>built
define("dojox/gfx/canvasext",["./_base","./canvas"],function(e,t){var i=e.canvasext={};return t.Surface.extend({getImageData:function(e){return"pendingRender"in this&&this._render(!0),this.rawNode.getContext("2d").getImageData(e.x,e.y,e.width,e.height)},getContext:function(){return this.rawNode.getContext("2d")}}),i});//# sourceMappingURL=canvasext.js.map