//>>built
define("dojox/gfx/svgext",["dojo/dom","dojo/_base/array","dojo/_base/window","./_base","./svg"],function(e,t,i,a,o){function n(e,i){var a=i.ownerDocument.createElementNS(o.xmlns.svg,e.tag);i.appendChild(a);for(var r in e)r in s||a.setAttribute(r,e[r]);return e.children&&t.forEach(e.children,function(e){n(e,a)}),a}var r=a.svgext={},s={primitives:null,tag:null,children:null};return o.Shape.extend({addRenderingOption:function(e,t){return this.rawNode.setAttribute(e,t),this},setFilter:function(i){if(!i)return this.rawNode.removeAttribute("filter"),this.filter=null,this;this.filter=i,i.id=i.id||a._base._getUniqueId();var r=e.byId(i.id);if(!r){r=this.rawNode.ownerDocument.createElementNS(o.xmlns.svg,"filter"),r.setAttribute("filterUnits","userSpaceOnUse");for(var l in i)l in s||r.setAttribute(l,i[l]);t.forEach(i.primitives,function(e){n(e,r)});var d=this._getParentSurface();if(d){d.defNode.appendChild(r)}}return this.rawNode.setAttribute("filter","url(#"+i.id+")"),this},getFilter:function(){return this.filter}}),r});//# sourceMappingURL=svgext.js.map