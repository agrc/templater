//>>built
define("dojox/fx/Shadow",["dojo/_base/kernel","dojo/_base/query","dojo/_base/lang","dojo/_base/declare","dojo/_base/sniff","dojo/dom-construct","dojo/dom-class","dojo/dom-geometry","dojo/_base/fx","dojo/fx","dijit/_Widget","dojo/NodeList-fx"],function(kernel,query,lang,declare,has,domConstruct,domClass,domGeom,baseFx,coreFx,Widget,NodeListFx){return kernel.experimental("dojox.fx.Shadow"),declare("dojox.fx.Shadow",Widget,{shadowPng:kernel.moduleUrl("dojox.fx","resources/shadow"),shadowThickness:7,shadowOffset:3,opacity:.75,animate:!1,node:null,startup:function(){this.inherited(arguments),this.node.style.position="relative",this.pieces={};var e=-1*this.shadowThickness,t=this.shadowOffset,a=this.shadowOffset+this.shadowThickness;this._makePiece("tl","top",t,"left",e),this._makePiece("l","top",a,"left",e,"scale"),this._makePiece("tr","top",t,"left",0),this._makePiece("r","top",a,"left",0,"scale"),this._makePiece("bl","top",0,"left",e),this._makePiece("b","top",0,"left",0,"crop"),this._makePiece("br","top",0,"left",0),this.nodeList=query(".shadowPiece",this.node),this.setOpacity(this.opacity),this.resize()},_makePiece:function(e,t,a,i,r,o){var n,l=this.shadowPng+e.toUpperCase()+".png";has("ie")<7?(n=domConstruct.create("div"),n.style.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+l+"'"+(o?", sizingMethod='"+o+"'":"")+")"):n=domConstruct.create("img",{src:l}),n.style.position="absolute",n.style[t]=a+"px",n.style[i]=r+"px",n.style.width=this.shadowThickness+"px",n.style.height=this.shadowThickness+"px",domClass.add(n,"shadowPiece"),this.pieces[e]=n,this.node.appendChild(n)},setOpacity:function(e,t){if(!has("ie"))if(t||(t={}),this.animate){var a=[];this.nodeList.forEach(function(i){a.push(baseFx._fade(lang.mixin(t,{node:i,end:e})))}),coreFx.combine(a).play()}else this.nodeList.style("opacity",e)},setDisabled:function(e){if(e){if(this.disabled)return;this.animate?this.nodeList.fadeOut().play():this.nodeList.style("visibility","hidden"),this.disabled=!0}else{if(!this.disabled)return;this.animate?this.nodeList.fadeIn().play():this.nodeList.style("visibility","visible"),this.disabled=!1}},resize:function(args){var x,y;if(args)x=args.x,y=args.y;else{var co=domGeom.position(this.node);x=co.w,y=co.h}var sideHeight=y-(this.shadowOffset+this.shadowThickness);with(sideHeight<0&&(sideHeight=0),y<1&&(y=1),x<1&&(x=1),this.pieces)l.style.height=sideHeight+"px",r.style.height=sideHeight+"px",b.style.width=x+"px",bl.style.top=y+"px",b.style.top=y+"px",br.style.top=y+"px",tr.style.left=x+"px",r.style.left=x+"px",br.style.left=x+"px"}})});//# sourceMappingURL=Shadow.js.map