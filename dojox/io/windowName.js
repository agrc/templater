//>>built
define("dojox/io/windowName",["dojo/_base/kernel","dojo/_base/window","dojo/_base/xhr","dojo/_base/sniff","dojo/_base/url","dojo/domReady!"],function(e){return e.getObject("io.windowName",!0,dojox),dojox.io.windowName={send:function(t,i){i.url+=(i.url.match(/\?/)?"&":"?")+"windowname="+(!i.authElement||"auth");var r=i.authElement,a=function(t){try{var i=n.ioArgs.frame.contentWindow.document;i.write(" "),i.close()}catch(e){}return(r||e.body()).removeChild(n.ioArgs.outerFrame),t},n=e._ioSetArgs(i,a,a,a);return i.timeout&&setTimeout(function(){-1==n.fired&&n.callback(new Error("Timeout"))},i.timeout),dojox.io.windowName._send(n,t,r,i.onAuthLoad),n},_send:function(t,i,r,a){function n(e){e.style.width="100%",e.style.height="100%",e.style.border="0px"}function o(){var e=g.contentWindow.name;"string"==typeof e&&e!=u&&(v=2,t.ioArgs.hash=g.contentWindow.location.hash,t.callback(e))}var s=t.ioArgs,l=dojox.io.windowName._frameNum++,d=(e.config.dojoBlankHtmlUrl||e.config.dojoCallbackUrl||e.moduleUrl("dojo","resources/blank.html"))+"#"+l,u=new e._Url(window.location,d),c=e.doc,h=r||e.body();if(e.isMoz&&![].reduce){var f=c.createElement("iframe");n(f),r||(f.style.display="none"),h.appendChild(f);var m=f.contentWindow;c=m.document,c.write("<html><body margin='0px'><iframe style='width:100%;height:100%;border:0px' name='protectedFrame'></iframe></body></html>"),c.close();var p=m[0];m.__defineGetter__(0,function(){}),m.__defineGetter__("protectedFrame",function(){}),c=p.document,c.write("<html><body margin='0px'></body></html>"),c.close(),h=c.body}var g;if(e.isIE){var y=c.createElement("div");y.innerHTML='<iframe name="'+u+'" onload="dojox.io.windowName['+l+']()">',g=y.firstChild}else g=c.createElement("iframe");s.frame=g,n(g),s.outerFrame=f=f||g,r||(f.style.display="none");var v=0;if(dojox.io.windowName[l]=g.onload=function(){try{if(!e.isMoz&&"about:blank"==g.contentWindow.location)return}catch(e){}v||(v=1,r?a&&a():g.contentWindow.location=d);try{v<2&&o()}catch(e){}},g.name=u,i.match(/GET/i))e._ioAddQueryToUrl(s),g.src=s.url,h.appendChild(g),g.contentWindow&&g.contentWindow.location.replace(s.url);else{if(!i.match(/POST/i))throw new Error("Method "+i+" not supported with the windowName transport");h.appendChild(g);var b=e.doc.createElement("form");e.body().appendChild(b);var w=e.queryToObject(s.query);for(var _ in w){var M=w[_];M=M instanceof Array?M:[M];for(var x=0;x<M.length;x++){var k=c.createElement("input");k.type="hidden",k.name=_,k.value=M[x],b.appendChild(k)}}b.method="POST",b.action=s.url,b.target=u,b.submit(),b.parentNode.removeChild(b)}g.contentWindow&&(g.contentWindow.name=u)},_frameNum:0},dojox.io.windowName});//# sourceMappingURL=windowName.js.map