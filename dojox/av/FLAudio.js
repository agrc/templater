//>>built
define("dojox/av/FLAudio",["dojo","dojox/embed/Flash","dojox/timing/doLater"],function(e,t){return e.experimental("dojox.av.FLVideo"),e.declare("dojox.av.FLAudio",null,{id:"",initialVolume:.7,initialPan:0,isDebug:!1,statusInterval:200,_swfPath:e.moduleUrl("dojox.av","resources/audio.swf"),allowScriptAccess:"always",allowNetworking:"all",constructor:function(t){e.global.swfIsInHTML=function(){return!0},e.mixin(this,t||{}),this.id||(this.id="flaudio_"+(new Date).getTime()),this.domNode=e.doc.createElement("div"),e.style(this.domNode,{position:"relative",width:"1px",height:"1px",top:"1px",left:"1px"}),e.body().appendChild(this.domNode),this.init()},init:function(){this._subs=[],this.initialVolume=this._normalizeVolume(this.initialVolume);var t={path:this._swfPath,width:"1px",height:"1px",minimumVersion:9,expressInstall:!0,params:{wmode:"transparent",allowScriptAccess:this.allowScriptAccess,allowNetworking:this.allowNetworking},vars:{id:this.id,autoPlay:this.autoPlay,initialVolume:this.initialVolume,initialPan:this.initialPan,statusInterval:this.statusInterval,isDebug:this.isDebug}};this._sub("mediaError","onError"),this._sub("filesProgress","onLoadStatus"),this._sub("filesAllLoaded","onAllLoaded"),this._sub("mediaPosition","onPlayStatus"),this._sub("mediaEnd","onComplete"),this._sub("mediaMeta","onID3"),this._flashObject=new dojox.embed.Flash(t,this.domNode),this._flashObject.onError=e.hitch(this,this.onError),this._flashObject.onLoad=e.hitch(this,function(e){this.flashMedia=e,this.isPlaying=this.autoPlay,this.isStopped=!this.autoPlay,this.onLoad(this.flashMedia)})},load:function(e){if(dojox.timing.doLater(this.flashMedia,this))return!1;if(!e.url)throw new Error("An url is required for loading media");return e.url=this._normalizeUrl(e.url),this.flashMedia.load(e),e.url},doPlay:function(e){this.flashMedia.doPlay(e)},pause:function(e){this.flashMedia.pause(e)},stop:function(e){this.flashMedia.doStop(e)},setVolume:function(e){this.flashMedia.setVolume(e)},setPan:function(e){this.flashMedia.setPan(e)},getVolume:function(e){return this.flashMedia.getVolume(e)},getPan:function(e){return this.flashMedia.getPan(e)},getPosition:function(e){return this.flashMedia.getPosition(e)},onError:function(e){},onLoadStatus:function(e){},onAllLoaded:function(){},onPlayStatus:function(e){},onComplete:function(e){},onLoad:function(){},onID3:function(e){},destroy:function(){if(!this.flashMedia)return void this._cons.push(e.connect(this,"onLoad",this,"destroy"));e.forEach(this._subs,function(t){e.unsubscribe(t)}),e.forEach(this._cons,function(t){e.disconnect(t)}),this._flashObject.destroy()},_sub:function(t,a){e.subscribe(this.id+"/"+t,this,a)},_normalizeVolume:function(e){if(e>1)for(;e>1;)e*=.1;return e},_normalizeUrl:function(e){if(e&&e.toLowerCase().indexOf("http")<0){var t=window.location.href.split("/");t.pop(),t=t.join("/")+"/",e=t+e}return e}})});//# sourceMappingURL=FLAudio.js.map