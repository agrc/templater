//>>built
define("dojox/date/timezone",["dojo/_base/array","dojo/_base/config","dojo/_base/declare","dojo/_base/kernel","dojo/_base/lang","dojo/date","dojo/date/locale","dojo/request","dojo/request/handlers"],function(e,t,a,i,r,o,n,d,s){function l(e){e=e||{},x=r.mixin(x,e.zones||{}),A=r.mixin(A,e.rules||{})}function m(e){k[e]=!0,d.get(require.toUrl((t.timezoneFileBasePath||"dojox/date/zoneinfo")+"/"+e),{handleAs:"olson_zoneinfo",sync:!0}).then(l,function(e){throw e})}function u(e){throw new Error('Timezone "'+e+'" is either incorrect, or not loaded in the timezone registry.')}function h(e){var t=N[e];if(!t){var a=e.split("/")[0];if(t=G[a],!t){var i=x[e];if("string"==typeof i)return h(i);if(!k.backward)return m("backward"),h(e);u(e)}}return t}function c(e){var t=/(\d+)(?::0*(\d*))?(?::0*(\d*))?([su])?$/,a=e.match(t);return a?(a[1]=parseInt(a[1],10),a[2]=a[2]?parseInt(a[2],10):0,a[3]=a[3]?parseInt(a[3],10):0,a):null}function f(e,t,a,i,r,o,n){return Date.UTC(e,t,a,i,r,o)+60*(n||0)*1e3}function y(e){return S[e.substr(0,3).toLowerCase()]}function v(e){var t=c(e);if(null===t)return 0;var a=0===e.indexOf("-")?-1:1;return t=a*(1e3*(60*(60*t[1]+t[2])+t[3])),-t/60/1e3}function p(e,t,a){var i=y(e[3]),r=e[4],n=c(e[5]);"u"==n[4]&&(a=0);var d,s,l;if(!isNaN(r))return d=new Date(f(t,i,parseInt(r,10),n[1],n[2],n[3],a));if("last"==r.substr(0,4))return r=D[r.substr(4,3).toLowerCase()],d=new Date(f(t,i+1,1,n[1]-24,n[2],n[3],a)),s=o.add(d,"minute",-a).getUTCDay(),l=r>s?r-s-7:r-s,0!==l&&(d=o.add(d,"hour",24*l)),d;if(r=D[r.substr(0,3).toLowerCase()],"undefined"!=r){if(">="==e[4].substr(3,2))return d=new Date(f(t,i,parseInt(e[4].substr(5),10),n[1],n[2],n[3],a)),s=o.add(d,"minute",-a).getUTCDay(),l=s>r?r-s+7:r-s,0!==l&&(d=o.add(d,"hour",24*l)),d;if("<="==r.substr(3,2))return d=new Date(f(t,i,parseInt(e[4].substr(5),10),n[1],n[2],n[3],a)),s=o.add(d,"minute",-a).getUTCDay(),l=r>s?r-s-7:r-s,0!==l&&(d=o.add(d,"hour",24*l)),d}return null}function g(t,a){var i=[];return e.forEach(A[t[1]]||[],function(e){for(var r=0;2>r;r++)switch(e[r]){case"min":e[r]=I;break;case"max":e[r]=F;break;case"only":break;default:if(e[r]=parseInt(e[r],10),isNaN(e[r]))throw new Error("Invalid year found on rule")}"string"==typeof e[6]&&(e[6]=v(e[6])),(e[0]<=a&&e[1]>=a||e[0]==a&&"only"==e[1])&&i.push({r:e,d:p(e,a,t[0])})}),i}function M(t,a){for(var i=E[t]=[],r=0;r<a.length;r++){var n=a[r],d=i[r]=[],s=null,l=null,m=[];"string"==typeof n[0]&&(n[0]=v(n[0])),0===r?d[0]=Date.UTC(I,0,1,0,0,0,0):(d[0]=i[r-1][1],s=a[r-1],l=i[r-1],m=l[2]);var u,h=new Date(d[0]).getUTCFullYear(),M=n[3]?parseInt(n[3],10):F,b=[];for(u=h;M>=u;u++)b=b.concat(g(n,u));b.sort(function(e,t){return o.compare(e.d,t.d)});var w;for(u=0,w;w=b[u];u++){var _=u>0?b[u-1]:null;w.r[5].indexOf("u")<0&&w.r[5].indexOf("s")<0&&(0===u&&r>0?m.length?w.d=o.add(w.d,"minute",m[m.length-1].r[6]):0===o.compare(new Date(l[1]),w.d,"date")?w.d=new Date(l[1]):w.d=o.add(w.d,"minute",v(s[1])):u>0&&(w.d=o.add(w.d,"minute",_.r[6])))}if(d[2]=b,n[3]){var j=parseInt(n[3],10),k=y(n[4]||"Jan"),x=parseInt(n[5]||"1",10),A=c(n[6]||"0"),T=d[1]=f(j,k,x,A[1],A[2],A[3],"u"==A[4]?0:n[0]);isNaN(T)&&(T=d[1]=p([0,0,0,n[4],n[5],n[6]||"0"],j,"u"==A[4]?0:n[0]).getTime());var C=e.filter(b,function(e,t){var a=t>0?60*b[t-1].r[6]*1e3:0;return e.d.getTime()<T+a});"u"!=A[4]&&"s"!=A[4]&&(C.length?d[1]+=60*C[C.length-1].r[6]*1e3:d[1]+=60*v(n[1])*1e3)}else d[1]=Date.UTC(F,11,31,23,59,59,999)}}function b(e,t){for(var a=t,i=x[a];"string"==typeof i;)a=i,i=x[a];if(!i){if(!k.backward){m("backward",!0);return b(e,t)}u(a)}E[t]||M(t,i);for(var r,o=E[t],n=e.getTime(),d=0;r=o[d];d++)if(n>=r[0]&&n<r[1])return{zone:i[d],range:o[d],idx:d};throw new Error('No Zone found for "'+t+'" on '+e)}function w(e,t){for(var a,i=-1,r=t.range[2]||[],o=e.getTime(),n=(t.range,0);a=r[n];n++)o>=a.d.getTime()&&(i=n);return i>=0?r[i].r:null}function _(e,t,a){var i,r=t.zone,o=r[2];if(o.indexOf("%s")>-1){var n;if(a)n=a[7],"-"==n&&(n="");else if(r[1]in P)n=P[r[1]];else if(t.idx>0){var d=x[e][t.idx-1],s=d[2];n=s.indexOf("%s")<0&&o.replace("%s","S")==s?"S":""}else n="";i=o.replace("%s",n)}else if(o.indexOf("/")>-1){var l=o.split("/");i=a?l[0===a[6]?0:1]:l[0]}else i=o;return i}i.experimental("dojox.date.timezone");var j=["africa","antarctica","asia","australasia","backward","etcetera","europe","northamerica","pacificnew","southamerica"],I=1835,F=2038,k={},x={},E={},A={},T=t.timezoneLoadingScheme||"preloadAll",C=t.defaultZoneFile||("preloadAll"==T?j:"northamerica");s.register("olson_zoneinfo",function(e){for(var t=e.text,a=t.split("\n"),i=[],r="",o=null,n=null,d={zones:{},rules:{}},s=0;s<a.length;s++){var l=a[s];if(l.match(/^\s/)&&(l="Zone "+o+l),l=l.split("#")[0],l.length>3)switch(i=l.split(/\s+/),r=i.shift()){case"Zone":o=i.shift(),i[0]&&(d.zones[o]||(d.zones[o]=[]),d.zones[o].push(i));break;case"Rule":n=i.shift(),d.rules[n]||(d.rules[n]=[]),d.rules[n].push(i);break;case"Link":if(d.zones[i[1]])throw new Error("Error with Link "+i[1]);d.zones[i[1]]=i[0];break;case"Leap":}}return d});var S={jan:0,feb:1,mar:2,apr:3,may:4,jun:5,jul:6,aug:7,sep:8,oct:9,nov:10,dec:11},D={sun:0,mon:1,tue:2,wed:3,thu:4,fri:5,sat:6},G={EST:"northamerica",MST:"northamerica",HST:"northamerica",EST5EDT:"northamerica",CST6CDT:"northamerica",MST7MDT:"northamerica",PST8PDT:"northamerica",America:"northamerica",Pacific:"australasia",Atlantic:"europe",Africa:"africa",Indian:"africa",Antarctica:"antarctica",Asia:"asia",Australia:"australasia",Europe:"europe",WET:"europe",CET:"europe",MET:"europe",EET:"europe"},N={"Pacific/Honolulu":"northamerica","Atlantic/Bermuda":"northamerica","Atlantic/Cape_Verde":"africa","Atlantic/St_Helena":"africa","Indian/Kerguelen":"antarctica","Indian/Chagos":"asia","Indian/Maldives":"asia","Indian/Christmas":"australasia","Indian/Cocos":"australasia","America/Danmarkshavn":"europe","America/Scoresbysund":"europe","America/Godthab":"europe","America/Thule":"europe","Asia/Yekaterinburg":"europe","Asia/Omsk":"europe","Asia/Novosibirsk":"europe","Asia/Krasnoyarsk":"europe","Asia/Irkutsk":"europe","Asia/Yakutsk":"europe","Asia/Vladivostok":"europe","Asia/Sakhalin":"europe","Asia/Magadan":"europe","Asia/Kamchatka":"europe","Asia/Anadyr":"europe","Africa/Ceuta":"europe","America/Argentina/Buenos_Aires":"southamerica","America/Argentina/Cordoba":"southamerica","America/Argentina/Tucuman":"southamerica","America/Argentina/La_Rioja":"southamerica","America/Argentina/San_Juan":"southamerica","America/Argentina/Jujuy":"southamerica","America/Argentina/Catamarca":"southamerica","America/Argentina/Mendoza":"southamerica","America/Argentina/Rio_Gallegos":"southamerica","America/Argentina/Ushuaia":"southamerica","America/Aruba":"southamerica","America/La_Paz":"southamerica","America/Noronha":"southamerica","America/Belem":"southamerica","America/Fortaleza":"southamerica","America/Recife":"southamerica","America/Araguaina":"southamerica","America/Maceio":"southamerica","America/Bahia":"southamerica","America/Sao_Paulo":"southamerica","America/Campo_Grande":"southamerica","America/Cuiaba":"southamerica","America/Porto_Velho":"southamerica","America/Boa_Vista":"southamerica","America/Manaus":"southamerica","America/Eirunepe":"southamerica","America/Rio_Branco":"southamerica","America/Santiago":"southamerica","Pacific/Easter":"southamerica","America/Bogota":"southamerica","America/Curacao":"southamerica","America/Guayaquil":"southamerica","Pacific/Galapagos":"southamerica","Atlantic/Stanley":"southamerica","America/Cayenne":"southamerica","America/Guyana":"southamerica","America/Asuncion":"southamerica","America/Lima":"southamerica","Atlantic/South_Georgia":"southamerica","America/Paramaribo":"southamerica","America/Port_of_Spain":"southamerica","America/Montevideo":"southamerica","America/Caracas":"southamerica"},P={US:"S",Chatham:"S",NZ:"S",NT_YK:"S",Edm:"S",Salv:"S",Canada:"S",StJohns:"S",TC:"S",Guat:"S",Mexico:"S",Haiti:"S",Barb:"S",Belize:"S",CR:"S",Moncton:"S",Swift:"S",Hond:"S",Thule:"S",NZAQ:"S",Zion:"S",ROK:"S",PRC:"S",Taiwan:"S",Ghana:"GMT",SL:"WAT",Chicago:"S",Detroit:"S",Vanc:"S",Denver:"S",Halifax:"S",Cuba:"S",Indianapolis:"S",Starke:"S",Marengo:"S",Pike:"S",Perry:"S",Vincennes:"S",Pulaski:"S",Louisville:"S",CA:"S",Nic:"S",Menominee:"S",Mont:"S",Bahamas:"S",NYC:"S",Regina:"S",Resolute:"ES",DR:"S",Toronto:"S",Winn:"S"};r.setObject("dojox.date.timezone",{getTzInfo:function(e,t){if("lazyLoad"==T){var a=h(t);if(!a)throw new Error("Not a valid timezone ID.");k[a]||m(a)}var i=b(e,t),r=i.zone[0],o=w(e,i);r+=o?o[6]:v(A[i.zone[1]]&&i.idx>0?x[t][i.idx-1][1]:i.zone[1]);var n=_(t,i,o);return{tzOffset:r,tzAbbr:n}},loadZoneData:function(e){l(e)},getAllZones:function(){var e=[];for(var t in x)e.push(t);return e.sort(),e}}),"string"==typeof C&&C&&(C=[C]),C instanceof Array&&e.forEach(C,m);var z=n.format,L=n._getZone;return n.format=function(e,t){if(t=t||{},t.timezone&&!t._tzInfo&&(t._tzInfo=dojox.date.timezone.getTzInfo(e,t.timezone)),t._tzInfo){var a=e.getTimezoneOffset()-t._tzInfo.tzOffset;e=new Date(e.getTime()+60*a*1e3)}return z.call(this,e,t)},n._getZone=function(e,t,a){return a._tzInfo?t?a._tzInfo.tzAbbr:a._tzInfo.tzOffset:L.call(this,e,t,a)},dojox.date.timezone});//# sourceMappingURL=timezone.js.map