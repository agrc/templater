//>>built
define("dojox/charting/widget/Sparkline",["dojo/_base/array","dojo/_base/declare","dojo/query","./Chart","../themes/GreySkies","../plot2d/Lines","dojo/dom-prop"],function(e,t,a,i,r,o,d){t("dojox.charting.widget.Sparkline",i,{theme:r,margins:{l:0,r:0,t:0,b:0},type:"Lines",valueFn:"Number(x)",store:"",field:"",query:"",queryOptions:"",start:"0",count:"Infinity",sort:"",data:"",name:"default",buildRendering:function(){var t=this.srcNodeRef;if(!t.childNodes.length||!a("> .axis, > .plot, > .action, > .series",t).length){var i=document.createElement("div");d.set(i,{"class":"plot",name:"default",type:this.type}),t.appendChild(i);var r=document.createElement("div");d.set(r,{"class":"series",plot:"default",name:this.name,start:this.start,count:this.count,valueFn:this.valueFn}),e.forEach(["store","field","query","queryOptions","sort","data"],function(e){this[e].length&&d.set(r,e,this[e])},this),t.appendChild(r)}this.inherited(arguments)}})});//# sourceMappingURL=Sparkline.js.map