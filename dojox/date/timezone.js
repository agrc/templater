//>>built
define("dojox/date/timezone",["dojo/_base/array","dojo/_base/config","dojo/_base/declare","dojo/_base/kernel","dojo/_base/lang","dojo/date","dojo/date/locale","dojo/request","dojo/request/handlers"],function(e,t,a,i,r,o,n,d,l){function s(e){e=e||{},x=r.mixin(x,e.zones||{}),S=r.mixin(S,e.rules||{})}function m(e){F[e]=!0,d.get(require.toUrl((t.timezoneFileBasePath||"dojox/date/zoneinfo")+"/"+e),{handleAs:"olson_zoneinfo",sync:!0}).then(s,function(e){throw e})}function u(e){throw new Error('Timezone "'+e+'" is either incorrect, or not loaded in the timezone registry.')}function h(e){var t=z[e];if(!t){var a=e.split("/")[0];if(!(t=T[a])){var i=x[e];if("string"==typeof i)return h(i);if(!F.backward)return m("backward"),h(e);u(e)}}return t}function f(e){var t=/(\d+)(?::0*(\d*))?(?::0*(\d*))?([su])?$/,a=e.match(t);return a?(a[1]=parseInt(a[1],10),a[2]=a[2]?parseInt(a[2],10):0,a[3]=a[3]?parseInt(a[3],10):0,a):null}function c(e,t,a,i,r,o,n){return Date.UTC(e,t,a,i,r,o)+60*(n||0)*1e3}function y(e){return C[e.substr(0,3).toLowerCase()]}function v(e){var t=f(e);return null===t?0:-(t=(0===e.indexOf("-")?-1:1)*(1e3*(60*(60*t[1]+t[2])+t[3])))/60/1e3}function p(e,t,a){var i=y(e[3]),r=e[4],n=f(e[5]);"u"==n[4]&&(a=0);var d,l,s;if(!isNaN(r))return d=new Date(c(t,i,parseInt(r,10),n[1],n[2],n[3],a));if("last"==r.substr(0,4))return r=D[r.substr(4,3).toLowerCase()],d=new Date(c(t,i+1,1,n[1]-24,n[2],n[3],a)),l=o.add(d,"minute",-a).getUTCDay(),s=r>l?r-l-7:r-l,0!==s&&(d=o.add(d,"hour",24*s)),d;if("undefined"!=(r=D[r.substr(0,3).toLowerCase()])){if(">="==e[4].substr(3,2))return d=new Date(c(t,i,parseInt(e[4].substr(5),10),n[1],n[2],n[3],a)),l=o.add(d,"minute",-a).getUTCDay(),s=r<l?r-l+7:r-l,0!==s&&(d=o.add(d,"hour",24*s)),d;if("<="==r.substr(3,2))return d=new Date(c(t,i,parseInt(e[4].substr(5),10),n[1],n[2],n[3],a)),l=o.add(d,"minute",-a).getUTCDay(),s=r>l?r-l-7:r-l,0!==s&&(d=o.add(d,"hour",24*s)),d}return null}function g(t,a){var i=[];return e.forEach(S[t[1]]||[],function(e){for(var r=0;r<2;r++)switch(e[r]){case"min":e[r]=j;break;case"max":e[r]=I;break;case"only":break;default:if(e[r]=parseInt(e[r],10),isNaN(e[r]))throw new Error("Invalid year found on rule")}"string"==typeof e[6]&&(e[6]=v(e[6])),(e[0]<=a&&e[1]>=a||e[0]==a&&"only"==e[1])&&i.push({r:e,d:p(e,a,t[0])})}),i}function M(t,a){for(var i=E[t]=[],r=0;r<a.length;r++){var n=a[r],d=i[r]=[],l=null,s=null,m=[];"string"==typeof n[0]&&(n[0]=v(n[0])),0===r?d[0]=Date.UTC(j,0,1,0,0,0,0):(d[0]=i[r-1][1],l=a[r-1],s=i[r-1],m=s[2]);var u,h=new Date(d[0]).getUTCFullYear(),M=n[3]?parseInt(n[3],10):I,b=[];for(u=h;u<=M;u++)b=b.concat(g(n,u));b.sort(function(e,t){return o.compare(e.d,t.d)});var w;for(u=0,w;w=b[u];u++){var k=u>0?b[u-1]:null;w.r[5].indexOf("u")<0&&w.r[5].indexOf("s")<0&&(0===u&&r>0?m.length?w.d=o.add(w.d,"minute",m[m.length-1].r[6]):0===o.compare(new Date(s[1]),w.d,"date")?w.d=new Date(s[1]):w.d=o.add(w.d,"minute",v(l[1])):u>0&&(w.d=o.add(w.d,"minute",k.r[6])))}if(d[2]=b,n[3]){var _=parseInt(n[3],10),F=y(n[4]||"Jan"),x=parseInt(n[5]||"1",10),S=f(n[6]||"0"),A=d[1]=c(_,F,x,S[1],S[2],S[3],"u"==S[4]?0:n[0]);isNaN(A)&&(A=d[1]=p([0,0,0,n[4],n[5],n[6]||"0"],_,"u"==S[4]?0:n[0]).getTime());var G=e.filter(b,function(e,t){var a=t>0?60*b[t-1].r[6]*1e3:0;return e.d.getTime()<A+a});"u"!=S[4]&&"s"!=S[4]&&(G.length?d[1]+=60*G[G.length-1].r[6]*1e3:d[1]+=60*v(n[1])*1e3)}else d[1]=Date.UTC(I,11,31,23,59,59,999)}}function b(e,t){for(var a=t,i=x[a];"string"==typeof i;)a=i,i=x[a];if(!i){if(!F.backward){m("backward",!0);return b(e,t)}u(a)}E[t]||M(t,i);for(var r,o=E[t],n=e.getTime(),d=0;r=o[d];d++)if(n>=r[0]&&n<r[1])return{zone:i[d],range:o[d],idx:d};throw new Error('No Zone found for "'+t+'" on '+e)}function w(e,t){for(var a,i=-1,r=t.range[2]||[],o=e.getTime(),n=(t.range,0);a=r[n];n++)o>=a.d.getTime()&&(i=n);return i>=0?r[i].r:null}function k(e,t,a){var i,r=t.zone,o=r[2];if(o.indexOf("%s")>-1){var n;if(a)"-"==(n=a[7])&&(n="");else if(r[1]in N)n=N[r[1]];else if(t.idx>0){var d=x[e][t.idx-1],l=d[2];n=l.indexOf("%s")<0&&o.replace("%s","S")==l?"S":""}else n="";i=o.replace("%s",n)}else if(o.indexOf("/")>-1){var s=o.split("/");i=a?s[0===a[6]?0:1]:s[0]}else i=o;return i}i.experimental("dojox.date.timezone");var _=["africa","antarctica","asia","australasia","backward","etcetera","europe","northamerica","pacificnew","southamerica"],j=1835,I=2038,F={},x={},E={},S={},A=t.timezoneLoadingScheme||"preloadAll",G=t.defaultZoneFile||("preloadAll"==A?_:"northamerica");l.register("olson_zoneinfo",function(e){for(var t=e.text,a=t.split("\n"),i=[],r=null,o=null,n={zones:{},rules:{}},d=0;d<a.length;d++){var l=a[d];if(l.match(/^\s/)&&(l="Zone "+r+l),l=l.split("#")[0],l.length>3)switch(i=l.split(/\s+/),i.shift()){case"Zone":r=i.shift(),i[0]&&(n.zones[r]||(n.zones[r]=[]),n.zones[r].push(i));break;case"Rule":o=i.shift(),n.rules[o]||(n.rules[o]=[]),n.rules[o].push(i);break;case"Link":if(n.zones[i[1]])throw new Error("Error with Link "+i[1]);n.zones[i[1]]=i[0]}}return n});var C={jan:0,feb:1,mar:2,apr:3,may:4,jun:5,jul:6,aug:7,sep:8,oct:9,nov:10,dec:11},D={sun:0,mon:1,tue:2,wed:3,thu:4,fri:5,sat:6},T={EST:"northamerica",MST:"northamerica",HST:"northamerica",EST5EDT:"northamerica",CST6CDT:"northamerica",MST7MDT:"northamerica",PST8PDT:"northamerica",America:"northamerica",Pacific:"australasia",Atlantic:"europe",Africa:"africa",Indian:"africa",Antarctica:"antarctica",Asia:"asia",Australia:"australasia",Europe:"europe",WET:"europe",CET:"europe",MET:"europe",EET:"europe"},z={"Pacific/Honolulu":"northamerica","Atlantic/Bermuda":"northamerica","Atlantic/Cape_Verde":"africa","Atlantic/St_Helena":"africa","Indian/Kerguelen":"antarctica","Indian/Chagos":"asia","Indian/Maldives":"asia","Indian/Christmas":"australasia","Indian/Cocos":"australasia","America/Danmarkshavn":"europe","America/Scoresbysund":"europe","America/Godthab":"europe","America/Thule":"europe","Asia/Yekaterinburg":"europe","Asia/Omsk":"europe","Asia/Novosibirsk":"europe","Asia/Krasnoyarsk":"europe","Asia/Irkutsk":"europe","Asia/Yakutsk":"europe","Asia/Vladivostok":"europe","Asia/Sakhalin":"europe","Asia/Magadan":"europe","Asia/Kamchatka":"europe","Asia/Anadyr":"europe","Africa/Ceuta":"europe","America/Argentina/Buenos_Aires":"southamerica","America/Argentina/Cordoba":"southamerica","America/Argentina/Tucuman":"southamerica","America/Argentina/La_Rioja":"southamerica","America/Argentina/San_Juan":"southamerica","America/Argentina/Jujuy":"southamerica","America/Argentina/Catamarca":"southamerica","America/Argentina/Mendoza":"southamerica","America/Argentina/Rio_Gallegos":"southamerica","America/Argentina/Ushuaia":"southamerica","America/Aruba":"southamerica","America/La_Paz":"southamerica","America/Noronha":"southamerica","America/Belem":"southamerica","America/Fortaleza":"southamerica","America/Recife":"southamerica","America/Araguaina":"southamerica","America/Maceio":"southamerica","America/Bahia":"southamerica","America/Sao_Paulo":"southamerica","America/Campo_Grande":"southamerica","America/Cuiaba":"southamerica","America/Porto_Velho":"southamerica","America/Boa_Vista":"southamerica","America/Manaus":"southamerica","America/Eirunepe":"southamerica","America/Rio_Branco":"southamerica","America/Santiago":"southamerica","Pacific/Easter":"southamerica","America/Bogota":"southamerica","America/Curacao":"southamerica","America/Guayaquil":"southamerica","Pacific/Galapagos":"southamerica","Atlantic/Stanley":"southamerica","America/Cayenne":"southamerica","America/Guyana":"southamerica","America/Asuncion":"southamerica","America/Lima":"southamerica","Atlantic/South_Georgia":"southamerica","America/Paramaribo":"southamerica","America/Port_of_Spain":"southamerica","America/Montevideo":"southamerica","America/Caracas":"southamerica"},N={US:"S",Chatham:"S",NZ:"S",NT_YK:"S",Edm:"S",Salv:"S",Canada:"S",StJohns:"S",TC:"S",Guat:"S",Mexico:"S",Haiti:"S",Barb:"S",Belize:"S",CR:"S",Moncton:"S",Swift:"S",Hond:"S",Thule:"S",NZAQ:"S",Zion:"S",ROK:"S",PRC:"S",Taiwan:"S",Ghana:"GMT",SL:"WAT",Chicago:"S",Detroit:"S",Vanc:"S",Denver:"S",Halifax:"S",Cuba:"S",Indianapolis:"S",Starke:"S",Marengo:"S",Pike:"S",Perry:"S",Vincennes:"S",Pulaski:"S",Louisville:"S",CA:"S",Nic:"S",Menominee:"S",Mont:"S",Bahamas:"S",NYC:"S",Regina:"S",Resolute:"ES",DR:"S",Toronto:"S",Winn:"S"};r.setObject("dojox.date.timezone",{getTzInfo:function(e,t){if("lazyLoad"==A){var a=h(t);if(!a)throw new Error("Not a valid timezone ID.");F[a]||m(a)}var i=b(e,t),r=i.zone[0],o=w(e,i);return o?r+=o[6]:S[i.zone[1]]&&i.idx>0?r+=v(x[t][i.idx-1][1]):r+=v(i.zone[1]),{tzOffset:r,tzAbbr:k(t,i,o)}},loadZoneData:function(e){s(e)},getAllZones:function(){var e=[];for(var t in x)e.push(t);return e.sort(),e}}),"string"==typeof G&&G&&(G=[G]),G instanceof Array&&e.forEach(G,m);var P=n.format,H=n._getZone;return n.format=function(e,t){if(t=t||{},t.timezone&&!t._tzInfo&&(t._tzInfo=dojox.date.timezone.getTzInfo(e,t.timezone)),t._tzInfo){var a=e.getTimezoneOffset()-t._tzInfo.tzOffset;e=new Date(e.getTime()+60*a*1e3)}return P.call(this,e,t)},n._getZone=function(e,t,a){return a._tzInfo?t?a._tzInfo.tzAbbr:a._tzInfo.tzOffset:H.call(this,e,t,a)},dojox.date.timezone});//# sourceMappingURL=timezone.js.map