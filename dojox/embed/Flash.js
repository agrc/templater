//>>built
define("dojox/embed/Flash",["dojo/_base/lang","dojo/_base/unload","dojo/_base/array","dojo/query","dojo/has","dojo/dom","dojo/on","dojo/window","dojo/string"],function(lang,unload,array,query,has,dom,on,win,stringUtil){function prep(e){return e=lang.delegate(_baseKwArgs,e),"path"in e?("id"in e||(e.id=keyBase+keyCount++),e):null}var fMarkup,fVersion,minimumVersion=9,keyBase="dojox-embed-flash-",keyCount=0,_baseKwArgs={expressInstall:!1,width:320,height:240,swLiveConnect:"true",allowScriptAccess:"sameDomain",allowNetworking:"all",style:null,redirect:null};has("ie")?(fMarkup=function(e){if(e=prep(e),!e)return null;var t,i=e.path;if(e.vars){var a=[];for(t in e.vars)a.push(encodeURIComponent(t)+"="+encodeURIComponent(e.vars[t]));e.params.FlashVars=a.join("&"),delete e.vars}var r='<object id="'+stringUtil.escape(String(e.id))+'" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="'+stringUtil.escape(String(e.width))+'" height="'+stringUtil.escape(String(e.height))+'"'+(e.style?' style="'+stringUtil.escape(String(e.style))+'"':"")+'><param name="movie" value="'+stringUtil.escape(String(i))+'" />';if(e.params)for(t in e.params)r+='<param name="'+stringUtil.escape(t)+'" value="'+stringUtil.escape(String(e.params[t]))+'" />';return r+="</object>",{id:e.id,markup:r}},fVersion=function(){for(var e=10,t=null;!t&&e>7;)try{t=new ActiveXObject("ShockwaveFlash.ShockwaveFlash."+e--)}catch(i){}if(t){var a=t.GetVariable("$version").split(" ")[1].split(",");return{major:null!=a[0]?parseInt(a[0]):0,minor:null!=a[1]?parseInt(a[1]):0,rev:null!=a[2]?parseInt(a[2]):0}}return{major:0,minor:0,rev:0}}(),unload.addOnWindowUnload(function(){var e=function(){};query("object").reverse().style("display","none").forEach(function(t){for(var i in t)if("FlashVars"!=i&&"function"==typeof t[i])try{t[i]=e}catch(a){}})})):(fMarkup=function(e){if(e=prep(e),!e)return null;var t,i=e.path;if(e.vars){var a=[];for(t in e.vars)a.push(encodeURIComponent(t)+"="+encodeURIComponent(e.vars[t]));e.params.flashVars=a.join("&"),delete e.vars}var r='<embed type="application/x-shockwave-flash" src="'+stringUtil.escape(String(i))+'" id="'+stringUtil.escape(String(e.id))+'" width="'+stringUtil.escape(String(e.width))+'" height="'+stringUtil.escape(String(e.height))+'"'+(e.style?' style="'+stringUtil.escape(String(e.style))+'" ':"")+'pluginspage="'+window.location.protocol+'//www.adobe.com/go/getflashplayer" ';if(e.params)for(t in e.params)r+=" "+stringUtil.escape(t)+'="'+stringUtil.escape(String(e.params[t]))+'"';return r+=" />",{id:e.id,markup:r}},fVersion=function(){var e=navigator.plugins["Shockwave Flash"];if(e&&e.description){var t=e.description.replace(/([a-zA-Z]|\s)+/,"").replace(/(\s+r|\s+b[0-9]+)/,".").split(".");return{major:null!=t[0]?parseInt(t[0]):0,minor:null!=t[1]?parseInt(t[1]):0,rev:null!=t[2]?parseInt(t[2]):0}}return{major:0,minor:0,rev:0}}());var Flash=function(e,t){if(location.href.toLowerCase().indexOf("file://")>-1)throw new Error("dojox.embed.Flash can't be run directly from a file. To instatiate the required SWF correctly it must be run from a server, like localHost.");this.available=fVersion.major,this.minimumVersion=e.minimumVersion||minimumVersion,this.id=null,this.movie=null,this.domNode=null,t&&(t=dom.byId(t)),setTimeout(lang.hitch(this,function(){e.expressInstall||this.available&&this.available>=this.minimumVersion?e&&t?this.init(e,t):this.onError("embed.Flash was not provided with the proper arguments."):this.available?this.onError("Flash version detected: "+this.available+" is out of date. Minimum required: "+this.minimumVersion):this.onError("Flash is not installed.")}),100)};return lang.extend(Flash,{onReady:function(e){},onLoad:function(e){},onError:function(e){},_onload:function(){clearInterval(this._poller),delete this._poller,delete this._pollCount,delete this._pollMax,this.onLoad(this.movie)},init:function(e,t){if(this.destroy(),t=dom.byId(t||this.domNode),!t)throw new Error("dojox.embed.Flash: no domNode reference has been passed.");var i=0;this._poller=null,this._pollCount=0,this._pollMax=15,this.pollTime=100,Flash.initialized&&(this.id=Flash.place(e,t),this.domNode=t,setTimeout(lang.hitch(this,function(){this.movie=this.byId(this.id,e.doc),this.onReady(this.movie),this._poller=setInterval(lang.hitch(this,function(){try{i=this.movie.PercentLoaded()}catch(e){}if(100==i)this._onload();else if(0==i&&this._pollCount++>this._pollMax)throw clearInterval(this._poller),new Error("Building SWF failed.")}),this.pollTime)}),1))},_destroy:function(){try{this.domNode.removeChild(this.movie)}catch(e){}this.id=this.movie=this.domNode=null},destroy:function(){if(this.movie){var e=lang.delegate({id:!0,movie:!0,domNode:!0,onReady:!0,onLoad:!0});for(var t in this)e[t]||delete this[t];this._poller?on(this,"Load",this,"_destroy"):this._destroy()}},byId:function(e,t){return t=t||document,t.embeds[e]?t.embeds[e]:t[e]?t[e]:window[e]?window[e]:document[e]?document[e]:null}}),lang.mixin(Flash,{minSupported:8,available:fVersion.major,supported:fVersion.major>=fVersion.required,minimumRequired:fVersion.required,version:fVersion,initialized:!1,onInitialize:function(){Flash.initialized=!0},__ie_markup__:function(e){return fMarkup(e)},proxy:function(obj,methods){array.forEach(methods instanceof Array?methods:[methods],function(item){this[item]=lang.hitch(this,function(){return function(){return eval(this.movie.CallFunction('<invoke name="'+item+'" returntype="javascript"><arguments>'+array.map(arguments,function(e){return __flash__toXML(e)}).join("")+"</arguments></invoke>"))}.apply(this,arguments||[])})},obj)}}),Flash.place=function(e,t){var i=fMarkup(e);return t=dom.byId(t),t||(t=win.doc.createElement("div"),t.id=i.id+"-container",win.body().appendChild(t)),i?(t.innerHTML=i.markup,i.id):null},Flash.onInitialize(),lang.setObject("dojox.embed.Flash",Flash),Flash});//# sourceMappingURL=Flash.js.map