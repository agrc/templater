//>>built
define("dojox/embed/Object",["dojo/_base/kernel","dojo/_base/declare","dojo/dom-geometry","dijit/_Widget","./Flash","./Quicktime"],function(e,t,a,i,r,n){return e.experimental("dojox.embed.Object"),t("dojox.embed.Object",i,{width:0,height:0,src:"",movie:null,params:null,reFlash:/\.swf|\.flv/gi,reQtMovie:/\.3gp|\.avi|\.m4v|\.mov|\.mp4|\.mpg|\.mpeg|\.qt/gi,reQtAudio:/\.aiff|\.aif|\.m4a|\.m4b|\.m4p|\.midi|\.mid|\.mp3|\.mpa|\.wav/gi,postCreate:function(){if(!this.width||!this.height){var e=a.getMarginBox(this.domNode);this.width=e.w,this.height=e.h}var t=r;if((this.src.match(this.reQtMovie)||this.src.match(this.reQtAudio))&&(t=n),!this.params&&(this.params={},this.domNode.hasAttributes()))for(var i={dojoType:"",width:"",height:"",class:"",style:"",id:"",src:""},o=this.domNode.attributes,s=0,l=o.length;s<l;s++)i[o[s].name]||(this.params[o[s].name]=o[s].value);var d={path:this.src,width:this.width,height:this.height,params:this.params};this.movie=new t(d,this.domNode)}})});//# sourceMappingURL=Object.js.map