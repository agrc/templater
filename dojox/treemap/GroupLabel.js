//>>built
define("dojox/treemap/GroupLabel",["dojo/_base/declare","dojo/dom-construct","dojo/dom-style"],function(e,t,i){return e("dojox.treemap.GroupLabel",null,{createRenderer:function(e,a,o){var r=this.inherited(arguments);if("content"==o||"leaf"==o){var n=t.create("div");i.set(n,{zIndex:30,position:"relative",height:"100%",textAlign:"center",top:"50%",marginTop:"-.5em"}),t.place(n,r)}return r},styleRenderer:function(e,t,a,o){switch(o){case"leaf":i.set(e,"background",this.getColorForItem(t).toHex());case"content":0==a?e.firstChild.innerHTML=this.getLabelForItem(t):e.firstChild.innerHTML=null;break;case"header":i.set(e,"display","none")}}})});//# sourceMappingURL=GroupLabel.js.map