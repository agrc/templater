//>>built
define("dojox/uuid/_base",["dojo/_base/kernel","dojo/_base/lang"],function(e){return e.getObject("uuid",!0,dojox),dojox.uuid.NIL_UUID="00000000-0000-0000-0000-000000000000",dojox.uuid.version={UNKNOWN:0,TIME_BASED:1,DCE_SECURITY:2,NAME_BASED_MD5:3,RANDOM:4,NAME_BASED_SHA1:5},dojox.uuid.variant={NCS:"0",DCE:"10",MICROSOFT:"110",UNKNOWN:"111"},dojox.uuid.assert=function(e,t){if(!e)throw t||(t="An assert statement failed.\nThe method dojox.uuid.assert() was called with a 'false' value.\n"),new Error(t)},dojox.uuid.generateNilUuid=function(){return dojox.uuid.NIL_UUID},dojox.uuid.isValid=function(t){t=t.toString();var i=e.isString(t)&&36==t.length&&t==t.toLowerCase();if(i){var o=t.split("-");i=5==o.length&&8==o[0].length&&4==o[1].length&&4==o[2].length&&4==o[3].length&&12==o[4].length;var r=16;for(var n in o){var a=o[n],s=parseInt(a,r);i=i&&isFinite(s)}}return i},dojox.uuid.getVariant=function(e){if(!dojox.uuid._ourVariantLookupTable){var t=dojox.uuid.variant,i=[];i[0]=t.NCS,i[1]=t.NCS,i[2]=t.NCS,i[3]=t.NCS,i[4]=t.NCS,i[5]=t.NCS,i[6]=t.NCS,i[7]=t.NCS,i[8]=t.DCE,i[9]=t.DCE,i[10]=t.DCE,i[11]=t.DCE,i[12]=t.MICROSOFT,i[13]=t.MICROSOFT,i[14]=t.UNKNOWN,i[15]=t.UNKNOWN,dojox.uuid._ourVariantLookupTable=i}e=e.toString();var o=e.charAt(19),r=16,n=parseInt(o,r);return dojox.uuid.assert(n>=0&&16>=n),dojox.uuid._ourVariantLookupTable[n]},dojox.uuid.getVersion=function(e){var t="dojox.uuid.getVersion() was not passed a DCE Variant UUID.";dojox.uuid.assert(dojox.uuid.getVariant(e)==dojox.uuid.variant.DCE,t),e=e.toString();var i=e.charAt(14),o=16,r=parseInt(i,o);return r},dojox.uuid.getNode=function(e){var t="dojox.uuid.getNode() was not passed a TIME_BASED UUID.";dojox.uuid.assert(dojox.uuid.getVersion(e)==dojox.uuid.version.TIME_BASED,t),e=e.toString();var i=e.split("-"),o=i[4];return o},dojox.uuid.getTimestamp=function(e,t){var i="dojox.uuid.getTimestamp() was not passed a TIME_BASED UUID.";switch(dojox.uuid.assert(dojox.uuid.getVersion(e)==dojox.uuid.version.TIME_BASED,i),e=e.toString(),t||(t=null),t){case"string":case String:return dojox.uuid.getTimestamp(e,Date).toUTCString();case"hex":var o=e.split("-"),r=o[0],n=o[1],a=o[2];a=a.slice(1);var s=a+n+r;return dojox.uuid.assert(15==s.length),s;case null:case"date":case Date:var d=3394248,l=16,c=e.split("-"),u=parseInt(c[0],l),h=parseInt(c[1],l),f=parseInt(c[2],l),m=4095&f;m<<=16,m+=h,m*=4294967296,m+=u;var p=m/1e4,g=3600,v=d,y=v*g,b=1e3*y,_=p-b,x=new Date(_);return x;default:dojox.uuid.assert(!1,"dojox.uuid.getTimestamp was not passed a valid returnType: "+t)}},dojox.uuid});//# sourceMappingURL=_base.js.map