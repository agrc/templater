//>>built
define("dojo/_base/url",["./kernel"],function(t){var e=new RegExp("^(([^:/?#]+):)?(//([^/?#]*))?([^?#]*)(\\?([^#]*))?(#(.*))?$"),i=new RegExp("^((([^\\[:]+):)?([^@]+)@)?(\\[([^\\]]+)\\]|([^\\[:]*))(:([0-9]+))?$"),n=function(){for(var t=null,o=arguments,a=[o[0]],s=1;s<o.length;s++)if(o[s]){var r=new n(o[s]+""),d=new n(a[0]+"");if(""!=r.path||r.scheme||r.authority||r.query){if(!r.scheme&&(r.scheme=d.scheme,!r.authority&&(r.authority=d.authority,"/"!=r.path.charAt(0)))){for(var l=d.path.substring(0,d.path.lastIndexOf("/")+1)+r.path,h=l.split("/"),u=0;u<h.length;u++)"."==h[u]?u==h.length-1?h[u]="":(h.splice(u,1),u--):u>0&&(1!=u||""!=h[0])&&".."==h[u]&&".."!=h[u-1]&&(u==h.length-1?(h.splice(u,1),h[u-1]=""):(h.splice(u-1,2),u-=2));r.path=h.join("/")}}else r.fragment!=t&&(d.fragment=r.fragment),r=d;a=[],r.scheme&&a.push(r.scheme,":"),r.authority&&a.push("//",r.authority),a.push(r.path),r.query&&a.push("?",r.query),r.fragment&&a.push("#",r.fragment)}this.uri=a.join("");var c=this.uri.match(e);this.scheme=c[2]||(c[1]?"":t),this.authority=c[4]||(c[3]?"":t),this.path=c[5],this.query=c[7]||(c[6]?"":t),this.fragment=c[9]||(c[8]?"":t),this.authority!=t&&(c=this.authority.match(i),this.user=c[3]||t,this.password=c[4]||t,this.host=c[6]||c[7],this.port=c[9]||t)};return n.prototype.toString=function(){return this.uri},t._Url=n});//# sourceMappingURL=url.js.map