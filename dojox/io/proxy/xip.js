//>>built
define("dojox/io/proxy/xip",["dojo/main","dojo/io/iframe","dojox/data/dom","dojo/_base/xhr","dojo/_base/url"],function(e,t,i){return e.getObject("io.proxy.xip",!0,dojox),dojox.io.proxy.xip={xipClientUrl:(e.config||djConfig).xipClientUrl||e.moduleUrl("dojox.io.proxy","xip_client.html").toString(),urlLimit:4e3,_callbackName:(dojox._scopeName||"dojox")+".io.proxy.xip.fragmentReceived",_state:{},_stateIdCounter:0,_isWebKit:-1!=navigator.userAgent.indexOf("WebKit"),send:function(t){var i=this.xipClientUrl;if(i.split(":")[0].match(/javascript/i)||t._ifpServerUrl.split(":")[0].match(/javascript/i))return null;var a=i.indexOf(":"),n=i.indexOf("/");if(-1==a||a>n){var r=window.location.href;i=0==n?r.substring(0,r.indexOf("/",9))+i:r.substring(0,r.lastIndexOf("/")+1)+i}return this.fullXipClientUrl=i,"undefined"!=typeof document.postMessage&&document.addEventListener("message",e.hitch(this,this.fragmentReceivedEvent),!1),this.send=this._realSend,this._realSend(t)},_realSend:function(e){var i="XhrIframeProxy"+this._stateIdCounter++;e._stateId=i;var a=e._ifpServerUrl+"#0:init:id="+i+"&client="+encodeURIComponent(this.fullXipClientUrl)+"&callback="+encodeURIComponent(this._callbackName);return this._state[i]={facade:e,stateId:i,clientFrame:t.create(i,"",a),isSending:!1,serverUrl:e._ifpServerUrl,requestData:null,responseMessage:"",requestParts:[],idCounter:1,partIndex:0,serverWindow:null},i},receive:function(e,t){for(var a={},n=t.split("&"),r=0;r<n.length;r++)if(n[r]){var o=n[r].split("=");a[decodeURIComponent(o[0])]=decodeURIComponent(o[1])}var s=this._state[e],l=s.facade;if(l._setResponseHeaders(a.responseHeaders),(0==a.status||a.status)&&(l.status=parseInt(a.status,10)),a.statusText&&(l.statusText=a.statusText),a.responseText){l.responseText=a.responseText;var d=l.getResponseHeader("Content-Type");if(d){var h=d.split(";")[0];0!=h.indexOf("application/xml")&&0!=h.indexOf("text/xml")||(l.responseXML=i.createDocument(a.responseText,d))}}l.readyState=4,this.destroyState(e)},frameLoaded:function(t){var i=this._state[t],a=i.facade,n=[];for(var r in a._requestHeaders)n.push(r+": "+a._requestHeaders[r]);var o={uri:a._uri};n.length>0&&(o.requestHeaders=n.join("\r\n")),a._method&&(o.method=a._method),a._bodyData&&(o.data=a._bodyData),this.sendRequest(t,e.objectToQuery(o))},destroyState:function(e){var t=this._state[e];if(t){delete this._state[e];var i=t.clientFrame.parentNode;i.removeChild(t.clientFrame),t.clientFrame=null,t=null}},createFacade:function(){return arguments&&arguments[0]&&arguments[0].iframeProxyUrl?new dojox.io.proxy.xip.XhrIframeFacade(arguments[0].iframeProxyUrl):dojox.io.proxy.xip._xhrObjOld.apply(e,arguments)},sendRequest:function(e,t){var i=this._state[e];i.isSending||(i.isSending=!0,i.requestData=t||"",i.serverWindow=frames[i.stateId],i.serverWindow||(i.serverWindow=document.getElementById(i.stateId).contentWindow),"undefined"==typeof document.postMessage&&i.serverWindow.contentWindow&&(i.serverWindow=i.serverWindow.contentWindow),this.sendRequestStart(e))},sendRequestStart:function(e){var t=this._state[e];t.requestParts=[];for(var i=t.requestData,a=t.serverUrl.length,n=this.urlLimit-a,r=0;i.length-r+a>this.urlLimit;){var o=i.substring(r,r+n),s=o.lastIndexOf("%");s!=o.length-1&&s!=o.length-2||(o=o.substring(0,s)),t.requestParts.push(o),r+=o.length}t.requestParts.push(i.substring(r,i.length)),t.partIndex=0,this.sendRequestPart(e)},sendRequestPart:function(e){var t=this._state[e];if(t.partIndex<t.requestParts.length){var i=t.requestParts[t.partIndex],a="part";t.partIndex+1==t.requestParts.length?a="end":0==t.partIndex&&(a="start"),this.setServerUrl(e,a,i),t.partIndex++}},setServerUrl:function(e,t,i){var a=this.makeServerUrl(e,t,i),n=this._state[e];this._isWebKit?n.serverWindow.location=a:n.serverWindow.location.replace(a)},makeServerUrl:function(e,t,i){var a=this._state[e],n=a.serverUrl+"#"+a.idCounter++ +":"+t;return i&&(n+=":"+i),n},fragmentReceivedEvent:function(e){e.uri.split("#")[0]==this.fullXipClientUrl&&this.fragmentReceived(e.data)},fragmentReceived:function(e){var t=e.indexOf("#"),i=e.substring(0,t),a=e.substring(t+1,e.length),n=this.unpackMessage(a),r=this._state[i];switch(n.command){case"loaded":this.frameLoaded(i);break;case"ok":this.sendRequestPart(i);break;case"start":r.responseMessage=""+n.message,this.setServerUrl(i,"ok");break;case"part":r.responseMessage+=n.message,this.setServerUrl(i,"ok");break;case"end":this.setServerUrl(i,"ok"),r.responseMessage+=n.message,this.receive(i,r.responseMessage)}},unpackMessage:function(e){var t=e.split(":"),i=t[1];e=t[2]||"";var a=null;if("init"==i){var n=e.split("&");a={};for(var r=0;r<n.length;r++){var o=n[r].split("=");a[decodeURIComponent(o[0])]=decodeURIComponent(o[1])}}return{command:i,message:e,config:a}}},dojox.io.proxy.xip._xhrObjOld=e._xhrObj,e._xhrObj=dojox.io.proxy.xip.createFacade,dojox.io.proxy.xip.XhrIframeFacade=function(e){this._requestHeaders={},this._allResponseHeaders=null,this._responseHeaders={},this._method=null,this._uri=null,this._bodyData=null,this.responseText=null,this.responseXML=null,this.status=null,this.statusText=null,this.readyState=0,this._ifpServerUrl=e,this._stateId=null},e.extend(dojox.io.proxy.xip.XhrIframeFacade,{open:function(e,t){this._method=e,this._uri=t,this.readyState=1},setRequestHeader:function(e,t){this._requestHeaders[e]=t},send:function(e){this._bodyData=e,this._stateId=dojox.io.proxy.xip.send(this),this.readyState=2},abort:function(){dojox.io.proxy.xip.destroyState(this._stateId)},getAllResponseHeaders:function(){return this._allResponseHeaders},getResponseHeader:function(e){return this._responseHeaders[e]},_setResponseHeaders:function(e){if(e){this._allResponseHeaders=e,e=e.replace(/\r/g,"");for(var t=e.split("\n"),i=0;i<t.length;i++)if(t[i]){var a=t[i].split(": ");this._responseHeaders[a[0]]=a[1]}}}}),dojox.io.proxy.xip});//# sourceMappingURL=xip.js.map