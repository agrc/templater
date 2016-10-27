//>>built
define("dojox/sketch/UndoStack",["dojo/_base/kernel","dojo/_base/lang","dojo/_base/declare","../xml/DomParser"],function(e){e.getObject("sketch",!0,dojox);var t=dojox.sketch;return t.CommandTypes={Create:"Create",Move:"Move",Modify:"Modify",Delete:"Delete",Convert:"Convert"},e.declare("dojox.sketch.UndoStack",null,{constructor:function(e){this.figure=e,this._steps=[],this._undoedSteps=[]},apply:function(e,t,i){if(!t&&!i&&e.fullText)return void this.figure.setValue(e.fullText);var o=t.shapeText,r=i.shapeText;if(0!=o.length||0!=r.length){if(0==o.length){var n=dojox.xml.DomParser.parse(r).documentElement,a=this.figure._loadAnnotation(n);return void(a&&this.figure._add(a))}if(0==r.length){var s=this.figure.getAnnotator(t.shapeId);return void this.figure._delete([s],!0)}var l=this.figure.getAnnotator(i.shapeId),d=dojox.xml.DomParser.parse(r).documentElement;l.draw(d),this.figure.select(l)}},add:function(e,i,o){var r=i?i.id:"",n=i?i.serialize():"";e==t.CommandTypes.Delete&&(n="");var a={cmdname:e,before:{shapeId:r,shapeText:o||""},after:{shapeId:r,shapeText:n}};this._steps.push(a),this._undoedSteps=[]},destroy:function(){},undo:function(){var e=this._steps.pop();e&&(this._undoedSteps.push(e),this.apply(e,e.after,e.before))},redo:function(){var e=this._undoedSteps.pop();e&&(this._steps.push(e),this.apply(e,e.before,e.after))}}),dojox.sketch.UndoStack});//# sourceMappingURL=UndoStack.js.map