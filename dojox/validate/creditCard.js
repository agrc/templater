//>>built
define("dojox/validate/creditCard",["dojo/_base/lang","./_base"],function(e,t){return t._cardInfo={mc:"5[1-5][0-9]{14}",ec:"5[1-5][0-9]{14}",vi:"4(?:[0-9]{12}|[0-9]{15})",ax:"3[47][0-9]{13}",dc:"3(?:0[0-5][0-9]{11}|[68][0-9]{12})",bl:"3(?:0[0-5][0-9]{11}|[68][0-9]{12})",di:"6011[0-9]{12}",jcb:"(?:3[0-9]{15}|(2131|1800)[0-9]{11})",er:"2(?:014|149)[0-9]{11}"},t.isValidCreditCard=function(e,i){return("er"==i.toLowerCase()||t.isValidLuhn(e))&&t.isValidCreditCardNumber(e,i.toLowerCase())},t.isValidCreditCardNumber=function(e,i){e=String(e).replace(/[- ]/g,"");var o=t._cardInfo,r=[];if(i){var n="^"+o[i.toLowerCase()]+"$";return n?!!e.match(n):!1}for(var a in o)e.match("^"+o[a]+"$")&&r.push(a);return r.length?r.join("|"):!1},t.isValidCvv=function(i,o){e.isString(i)||(i=String(i));var r;switch(o.toLowerCase()){case"mc":case"ec":case"vi":case"di":r="###";break;case"ax":r="####"}return!!r&&i.length&&t.isNumberFormat(i,{format:r})},t});//# sourceMappingURL=creditCard.js.map