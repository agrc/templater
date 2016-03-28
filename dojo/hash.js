//>>built
define("dojo/hash",["./_base/kernel","require","./_base/config","./aspect","./_base/lang","./topic","./domReady","./sniff"],function(e,t,i,o,n,r,s,a){function l(e,t){var i=e.indexOf(t);return i>=0?e.substring(i+1):""}function d(){return l(location.href,"#")}function h(){r.publish("/dojo/hashchange",d())}function c(){d()!==p&&(p=d(),h())}function u(e){if(g){if(g.isTransitioning())return void setTimeout(n.hitch(null,u,e),_);var t=g.iframe.location.href,i=t.indexOf("?");return void g.iframe.location.replace(t.substring(0,i)+"?"+e)}location.replace("#"+e),!m&&c()}function f(){function o(){p=d(),c=m?p:l(v.href,"?"),u=!1,f=null}var r=document.createElement("iframe"),s="dojo-hash-iframe",a=i.dojoBlankHtmlUrl||t.toUrl("./resources/blank.html");i.useXDomain&&!i.dojoBlankHtmlUrl,r.id=s,r.src=a+"?"+d(),r.style.display="none",document.body.appendChild(r),this.iframe=e.global[s];var c,u,f,g,m,v=this.iframe.location;this.isTransitioning=function(){return u},this.pollLocation=function(){if(!m)try{var e=l(v.href,"?");document.title!=g&&(g=this.iframe.document.title=document.title)}catch(t){m=!0}var i=d();if(u&&p===i){if(!m&&e!==f)return void setTimeout(n.hitch(this,this.pollLocation),0);o(),h()}else if(p!==i||!m&&c!==e){if(p!==i)return p=i,u=!0,f=i,r.src=a+"?"+f,m=!1,void setTimeout(n.hitch(this,this.pollLocation),0);m||(location.href="#"+v.search.substring(1),o(),h())}else;setTimeout(n.hitch(this,this.pollLocation),_)},o(),setTimeout(n.hitch(this,this.pollLocation),_)}e.hash=function(e,t){return arguments.length?("#"==e.charAt(0)&&(e=e.substring(1)),t?u(e):location.href="#"+e,e):d()};var p,g,m,_=i.hashPollFrequency||100;return s(function(){"onhashchange"in e.global&&(!a("ie")||a("ie")>=8&&"BackCompat"!=document.compatMode)?m=o.after(e.global,"onhashchange",h,!0):document.addEventListener?(p=d(),setInterval(c,_)):document.attachEvent&&(g=new f)}),e.hash});//# sourceMappingURL=hash.js.map