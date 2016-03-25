//>>built
define("dojo/cookie",["./_base/kernel","./regexp"],function(e,t){return e.cookie=function(e,i,n){var o,r=document.cookie;if(1==arguments.length){var s=r.match(new RegExp("(?:^|; )"+t.escapeString(e)+"=([^;]*)"));o=s?decodeURIComponent(s[1]):void 0}else{n=n||{};var a=n.expires;if("number"==typeof a){var d=new Date;d.setTime(d.getTime()+24*a*60*60*1e3),a=n.expires=d}a&&a.toUTCString&&(n.expires=a.toUTCString()),i=encodeURIComponent(i);var l,c=e+"="+i;for(l in n){c+="; "+l;var u=n[l];u!==!0&&(c+="="+u)}document.cookie=c}return o},e.cookie.isSupported=function(){return"cookieEnabled"in navigator||(this("__djCookieTest__","CookiesAllowed"),navigator.cookieEnabled="CookiesAllowed"==this("__djCookieTest__"),navigator.cookieEnabled&&this("__djCookieTest__","",{expires:-1})),navigator.cookieEnabled},e.cookie});//# sourceMappingURL=cookie.js.map