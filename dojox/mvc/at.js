//>>built
define("dojox/mvc/at",["dojo/_base/kernel","dojo/_base/lang","./sync","./_atBindingExtension"],function(e,t,i){e.experimental("dojox.mvc");var a=function(e,t){return{atsignature:"dojox.mvc.at",target:e,targetProp:t,bindDirection:i.both,direction:function(e){return this.bindDirection=e,this},transform:function(e){return this.converter=e,this},equals:function(e){return this.equalsCallback=e,this}}};return a.from=i.from,a.to=i.to,a.both=i.both,t.setObject("dojox.mvc.at",a)});//# sourceMappingURL=at.js.map