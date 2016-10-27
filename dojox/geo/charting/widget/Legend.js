//>>built
define("dojox/geo/charting/widget/Legend",["dojo/_base/kernel","dojo/_base/lang","dojo/_base/array","dojo/_base/declare","dojo/_base/html","dojo/dom","dojo/dom-construct","dojo/dom-class","dojo/_base/window","dijit/_Widget"],function(e,t,a,i,r,o,n,s,l,d){return i("dojox.geo.charting.widget.Legend",d,{horizontal:!0,legendBody:null,swatchSize:18,map:null,postCreate:function(){this.map&&(this.series=this.map.series,this.domNode.parentNode||o.byId(this.map.container).appendChild(this.domNode),this.refresh())},buildRendering:function(){this.domNode=n.create("table",{role:"group","class":"dojoxLegendNode"}),this.legendBody=n.create("tbody",null,this.domNode),this.inherited(arguments)},refresh:function(){for(;this.legendBody.lastChild;)n.destroy(this.legendBody.lastChild);this.horizontal&&(s.add(this.domNode,"dojoxLegendHorizontal"),this._tr=l.doc.createElement("tr"),this.legendBody.appendChild(this._tr));var e=this.series;0!=e.length&&a.forEach(e,function(e){this._addLabel(e.color,e.name)},this)},_addLabel:function(e,t){var a=l.doc.createElement("td"),i=l.doc.createElement("td"),r=l.doc.createElement("div");if(s.add(a,"dojoxLegendIcon"),s.add(i,"dojoxLegendText"),r.style.width=this.swatchSize+"px",r.style.height=this.swatchSize+"px",a.appendChild(r),this.horizontal)this._tr.appendChild(a),this._tr.appendChild(i);else{var o=l.doc.createElement("tr");this.legendBody.appendChild(o),o.appendChild(a),o.appendChild(i)}r.style.background=e,i.innerHTML=String(t)}})});//# sourceMappingURL=Legend.js.map