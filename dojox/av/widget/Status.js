//>>built
define("dojox/av/widget/Status",["dojo","dijit","dijit/_Widget","dijit/_TemplatedMixin"],function(e,t,a,i){return e.declare("dojox.av.widget.Status",[a,i],{templateString:e.cache("dojox.av.widget","resources/Status.html"),setMedia:function(t){this.media=t,e.connect(this.media,"onMetaData",this,function(e){this.duration=e.duration,this.durNode.innerHTML=this.toSeconds(this.duration)}),e.connect(this.media,"onPosition",this,function(e){this.timeNode.innerHTML=this.toSeconds(e)});var a=["onMetaData","onPosition","onStart","onBuffer","onPlay","onPaused","onStop","onEnd","onError","onLoad"];e.forEach(a,function(t){e.connect(this.media,t,this,t)},this)},onMetaData:function(e){if(this.duration=e.duration,this.durNode.innerHTML=this.toSeconds(this.duration),this.media.title)this.title=this.media.title;else{var t=this.media.mediaUrl.split("/"),a=t[t.length-1].split(".")[0];this.title=a}},onBuffer:function(e){this.isBuffering=e,this.isBuffering?this.setStatus("buffering..."):this.setStatus("Playing")},onPosition:function(e){},onStart:function(){this.setStatus("Starting")},onPlay:function(){this.setStatus("Playing")},onPaused:function(){this.setStatus("Paused")},onStop:function(){this.setStatus("Stopped")},onEnd:function(){this.setStatus("Stopped")},onError:function(e){var t=e.info.code;"NetStream.Play.StreamNotFound"==t&&(t="Stream Not Found"),this.setStatus("ERROR: "+t,!0)},onLoad:function(){this.setStatus("Loading...")},setStatus:function(t,a){a?e.addClass(this.titleNode,"statusError"):(e.removeClass(this.titleNode,"statusError"),this.isBuffering&&(t="buffering...")),this.titleNode.innerHTML='<span class="statusTitle">'+this.title+'</span> <span class="statusInfo">'+t+"</span>"},toSeconds:function(e){var t=e.toString();return t.indexOf(".")<0?t+=".00":t.length-t.indexOf(".")==2?t+="0":t.length-t.indexOf(".")>2&&(t=t.substring(0,t.indexOf(".")+3)),t}})});//# sourceMappingURL=Status.js.map