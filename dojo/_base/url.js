//>>built
define("dojo/_base/url",["./kernel"],function(e){var t=new RegExp("^(([^:/?#]+):)?(//([^/?#]*))?([^?#]*)(\\?([^#]*))?(#(.*))?$"),i=new RegExp("^((([^\\[:]+):)?([^@]+)@)?(\\[([^\\]]+)\\]|([^\\[:]*))(:([0-9]+))?$"),o=function(){for(var e=null,n=arguments,r=[n[0]],a=1;a<n.length;a++)if(n[a]){var s=new o(n[a]+""),l=new o(r[0]+"");if(""!=s.path||s.scheme||s.authority||s.query){if(!s.scheme&&(s.scheme=l.scheme,!s.authority&&(s.authority=l.authority,"/"!=s.path.charAt(0)))){for(var d=l.path.substring(0,l.path.lastIndexOf("/")+1)+s.path,h=d.split("/"),u=0;u<h.length;u++)"."==h[u]?u==h.length-1?h[u]="":(h.splice(u,1),u--):u>0&&(1!=u||""!=h[0])&&".."==h[u]&&".."!=h[u-1]&&(u==h.length-1?(h.splice(u,1),h[u-1]=""):(h.splice(u-1,2),u-=2));s.path=h.join("/")}}else s.fragment!=e&&(l.fragment=s.fragment),s=l;r=[],s.scheme&&r.push(s.scheme,":"),s.authority&&r.push("//",s.authority),r.push(s.path),s.query&&r.push("?",s.query),s.fragment&&r.push("#",s.fragment)}this.uri=r.join("");var c=this.uri.match(t);this.scheme=c[2]||(c[1]?"":e),this.authority=c[4]||(c[3]?"":e),this.path=c[5],this.query=c[7]||(c[6]?"":e),this.fragment=c[9]||(c[8]?"":e),this.authority!=e&&(c=this.authority.match(i),this.user=c[3]||e,this.password=c[4]||e,this.host=c[6]||c[7],this.port=c[9]||e)};return o.prototype.toString=function(){return this.uri},e._Url=o});//# sourceMappingURL=url.js.map