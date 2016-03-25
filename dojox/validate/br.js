//>>built
define("dojox/validate/br",["dojo/_base/lang","./_base"],function(e,t){var a=e.getObject("br",!0,t);a.isValidCnpj=function(i){if(!e.isString(i)){if(!i)return!1;for(i+="";i.length<14;)i="0"+i}var a={format:["##.###.###/####-##","########/####-##","############-##","##############"]};if(t.isNumberFormat(i,a)){i=i.replace("/","").replace(/\./g,"").replace("-","");var n,r,s,d=[],l=[];for(n=0;10>n;n++){for(s="",r=0;r<i.length;r++)s+=""+n;if(i===s)return!1}for(n=0;12>n;n++)d.push(parseInt(i.charAt(n),10));for(n=12;14>n;n++)l.push(parseInt(i.charAt(n),10));var h=[9,8,7,6,5,4,3,2,9,8,7,6].reverse(),u=0;for(n=0;n<d.length;n++)u+=d[n]*h[n];var c=o(u);if(c==l[0]){for(u=0,h=[9,8,7,6,5,4,3,2,9,8,7,6,5].reverse(),d.push(c),n=0;n<d.length;n++)u+=d[n]*h[n];var m=o(u);if(m===l[1])return!0}}return!1},a.computeCnpjDv=function(i){if(!e.isString(i)){if(!i)return"";for(i+="";i.length<12;)i="0"+i}var a={format:["##.###.###/####","########/####","############"]};if(t.isNumberFormat(i,a)){i=i.replace("/","").replace(/\./g,"");var n,r,s,d=[];for(n=0;10>n;n++){for(s="",r=0;r<i.length;r++)s+=""+n;if(i===s)return""}for(n=0;n<i.length;n++)d.push(parseInt(i.charAt(n),10));var l=[9,8,7,6,5,4,3,2,9,8,7,6].reverse(),h=0;for(n=0;n<d.length;n++)h+=d[n]*l[n];var u=o(h);for(h=0,l=[9,8,7,6,5,4,3,2,9,8,7,6,5].reverse(),d.push(u),n=0;n<d.length;n++)h+=d[n]*l[n];var c=o(h);return""+u+c}return""},a.isValidCpf=function(i){if(!e.isString(i)){if(!i)return!1;for(i+="";i.length<11;)i="0"+i}var a={format:["###.###.###-##","#########-##","###########"]};if(t.isNumberFormat(i,a)){i=i.replace("-","").replace(/\./g,"");var n,r,s,d=[],l=[];for(n=0;10>n;n++){for(s="",r=0;r<i.length;r++)s+=""+n;if(i===s)return!1}for(n=0;9>n;n++)d.push(parseInt(i.charAt(n),10));for(n=9;12>n;n++)l.push(parseInt(i.charAt(n),10));var h=[9,8,7,6,5,4,3,2,1].reverse(),u=0;for(n=0;n<d.length;n++)u+=d[n]*h[n];var c=o(u);if(c==l[0]){for(u=0,h=[9,8,7,6,5,4,3,2,1,0].reverse(),d.push(c),n=0;n<d.length;n++)u+=d[n]*h[n];var m=o(u);if(m===l[1])return!0}}return!1},a.computeCpfDv=function(a){if(!e.isString(a)){if(!a)return"";for(a+="";a.length<9;)a="0"+a}var n={format:["###.###.###","#########"]};if(t.isNumberFormat(a,n)){a=a.replace(/\./g,"");var r=[];for(i=0;i<10;i++){for(tmp="",j=0;j<a.length;j++)tmp+=""+i;if(a===tmp)return""}for(i=0;i<a.length;i++)r.push(parseInt(a.charAt(i),10));var s=[9,8,7,6,5,4,3,2,1].reverse(),d=0;for(i=0;i<r.length;i++)d+=r[i]*s[i];var l=o(d);for(d=0,s=[9,8,7,6,5,4,3,2,1,0].reverse(),r.push(l),i=0;i<r.length;i++)d+=r[i]*s[i];var h=o(d);return""+l+h}return""};var o=function(e){var t=e%11;return 10===t&&(t=0),t};return a});//# sourceMappingURL=br.js.map