//>>built
define("dojox/string/Builder",["dojo/_base/lang"],function(e){return e.getObject("string",!0,dojox).Builder=function(e){var t="";this.length=0,this.append=function(e){if(arguments.length>1){var i="";switch(arguments.length){case 9:i=""+arguments[8]+i;case 8:i=""+arguments[7]+i;case 7:i=""+arguments[6]+i;case 6:i=""+arguments[5]+i;case 5:i=""+arguments[4]+i;case 4:i=""+arguments[3]+i;case 3:i=""+arguments[2]+i;case 2:t+=""+arguments[0]+arguments[1]+i;break;default:for(var a=0;a<arguments.length;)i+=arguments[a++];t+=i}}else t+=e;return this.length=t.length,this},this.concat=function(e){return this.append.apply(this,arguments)},this.appendArray=function(e){return this.append.apply(this,e)},this.clear=function(){return t="",this.length=0,this},this.replace=function(e,i){return t=t.replace(e,i),this.length=t.length,this},this.remove=function(e,i){return void 0===i&&(i=t.length),0==i?this:(t=t.substr(0,e)+t.substr(e+i),this.length=t.length,this)},this.insert=function(e,i){return t=0==e?i+t:t.slice(0,e)+i+t.slice(e),this.length=t.length,this},this.toString=function(){return t},e&&this.append(e)}});//# sourceMappingURL=Builder.js.map