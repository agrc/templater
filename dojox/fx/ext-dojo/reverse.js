//>>built
define("dojox/fx/ext-dojo/reverse",["dojo/_base/fx","dojo/fx","dojo/_base/lang","dojo/fx/easing","dojox/fx"],function(e,t,a,i,r){var o={_reversed:!1,reverse:function(e,t){var a="playing"==this.status();this.pause(),this._reversed=!this._reversed;var r,o=this.duration,n=o*this._percent,s=o-n,l=(new Date).valueOf(),d=this.curve._properties,u=this.properties;this._endTime=l+n,this._startTime=l-s,a&&this.gotoPercent(s/o);for(r in u){var m=u[r].start;u[r].start=d[r].start=u[r].end,u[r].end=d[r].end=m}if(this._reversed){if(!this.rEase)if(this.fEase=this.easing,t)this.rEase=t;else{var h,c,f=i;for(r in f)if(this.easing==f[r]){h=r;break}h?(/InOut/.test(r)||!/In|Out/i.test(r)?this.rEase=this.easing:c=/In/.test(r)?r.replace("In","Out"):r.replace("Out","In"),c&&(this.rEase=i[c])):this.rEase=this.easing}this.easing=this.rEase}else this.easing=this.fEase;return e||"playing"==this.status()||this.play(),this}};return a.extend(e.Animation,o),e.Animation});//# sourceMappingURL=reverse.js.map