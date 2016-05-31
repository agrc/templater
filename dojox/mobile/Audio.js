//>>built
define("dojox/mobile/Audio",["dojo/_base/declare","dojo/dom-construct","dojo/sniff","dijit/_Contained","dijit/_WidgetBase"],function(e,t,i,a,r){return e("dojox.mobile.Audio",[r,a],{source:null,width:"200px",height:"15px",_playable:!1,_tag:"audio",constructor:function(){this.source=[]},buildRendering:function(){this.domNode=this.srcNodeRef||t.create(this._tag)},_getEmbedRegExp:function(){return i("ff")?/audio\/mpeg/i:i("ie")?/audio\/wav/i:null},startup:function(){if(!this._started){this.inherited(arguments);var e,a,r;if(this.domNode.canPlayType)if(this.source.length>0)for(e=0,a=this.source.length;a>e;e++)t.create("source",{src:this.source[e].src,type:this.source[e].type},this.domNode),this._playable=this._playable||!!this.domNode.canPlayType(this.source[e].type);else for(e=0,a=this.domNode.childNodes.length;a>e;e++){var n=this.domNode.childNodes[e];1===n.nodeType&&"SOURCE"===n.nodeName&&(this.source.push({src:n.src,type:n.type}),this._playable=this._playable||!!this.domNode.canPlayType(n.type))}if(i.add("mobile-embed-audio-video-support",!0),i("mobile-embed-audio-video-support")&&!this._playable)for(e=0,a=this.source.length,r=this._getEmbedRegExp();a>e;e++)if(this.source[e].type.match(r)){var o=t.create("embed",{src:this.source[0].src,type:this.source[0].type,width:this.width,height:this.height});this.domNode.parentNode.replaceChild(o,this.domNode),this.domNode=o,this._playable=!0;break}}}})});//# sourceMappingURL=Audio.js.map