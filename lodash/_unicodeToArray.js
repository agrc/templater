//>>built
define("lodash/_unicodeToArray",[],function(){function e(e){return e.match(M)||[]}var t="\\ud800-\\udfff",i="\\u0300-\\u036f",a="\\ufe20-\\ufe2f",o="\\u20d0-\\u20ff",n=i+a+o,r="\\ufe0e\\ufe0f",s="["+t+"]",d="["+n+"]",l="\\ud83c[\\udffb-\\udfff]",h="(?:"+d+"|"+l+")",u="[^"+t+"]",c="(?:\\ud83c[\\udde6-\\uddff]){2}",m="[\\ud800-\\udbff][\\udc00-\\udfff]",f="\\u200d",p=h+"?",g="["+r+"]?",y="(?:"+f+"(?:"+[u,c,m].join("|")+")"+g+p+")*",v=g+p+y,b="(?:"+[u+d+"?",d,c,m,s].join("|")+")",M=RegExp(l+"(?="+l+")|"+b+v,"g");return e});//# sourceMappingURL=_unicodeToArray.js.map