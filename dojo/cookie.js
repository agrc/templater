//>>built
define("dojo/cookie",["./_base/kernel","./regexp"],function(e,t){return e.cookie=function(e,i,o){var n,r=document.cookie;if(1==arguments.length){var s=r.match(new RegExp("(?:^|; )"+t.escapeString(e)+"=([^;]*)"));n=s?decodeURIComponent(s[1]):void 0}else{o=o||{};var a=o.expires;if("number"==typeof a){var d=new Date;d.setTime(d.getTime()+24*a*60*60*1e3),a=o.expires=d}a&&a.toUTCString&&(o.expires=a.toUTCString()),i=encodeURIComponent(i);var l,c=e+"="+i;for(l in o){c+="; "+l;var u=o[l];!0!==u&&(c+="="+u)}document.cookie=c}return n},e.cookie.isSupported=function(){return"cookieEnabled"in navigator||(this("__djCookieTest__","CookiesAllowed"),navigator.cookieEnabled="CookiesAllowed"==this("__djCookieTest__"),navigator.cookieEnabled&&this("__djCookieTest__","",{expires:-1})),navigator.cookieEnabled},e.cookie});//# sourceMappingURL=cookie.js.map