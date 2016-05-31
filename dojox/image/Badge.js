//>>built
define("dojox/image/Badge",["dojo","dijit","dojox/main","dijit/_Widget","dijit/_TemplatedMixin","dojo/fx/easing"],function(e,t,i,r,a){return e.experimental("dojox.image.Badge"),e.getObject("image",!0,i),e.declare("dojox.image.Badge",[r,a],{baseClass:"dojoxBadge",templateString:'<div class="dojoxBadge" dojoAttachPoint="containerNode"></div>',children:"div.dojoxBadgeImage",rows:4,cols:5,cellSize:50,cellMargin:1,delay:2e3,threads:1,easing:"dojo.fx.easing.backOut",startup:function(){this._started||(e.isString(this.easing)&&(this.easing=e.getObject(this.easing)),this.inherited(arguments),this._init())},_init:function(){var t=0,i=this.cellSize;e.style(this.domNode,{width:i*this.cols+"px",height:i*this.rows+"px"}),this._nl=e.query(this.children,this.containerNode).forEach(function(r,a){var o=a%this.cols,n=t*i,s=o*i,l=2*this.cellMargin;e.style(r,{top:n+"px",left:s+"px",width:i-l+"px",height:i-l+"px"}),o==this.cols-1&&t++,e.addClass(r,this.baseClass+"Image")},this);for(var r=this._nl.length;this.threads--;){var a=Math.floor(Math.random()*r);setTimeout(e.hitch(this,"_enbiggen",{target:this._nl[a]}),this.delay*this.threads)}},_getCell:function(e){var t=this._nl.indexOf(e);if(t>=0){var i=t%this.cols,r=Math.floor(t/this.cols);return{x:i,y:r,n:this._nl[t],io:t}}},_getImage:function(){return"url('')"},_enbiggen:function(t){var i=this._getCell(t.target||t);if(i){var r=this.cellMargin,a=2*this.cellSize-2*r,o={height:a,width:a},n=function(){return Math.round(Math.random())};(i.x==this.cols-1||i.x>0&&n())&&(o.left=this.cellSize*(i.x-r)),(i.y==this.rows-1||i.y>0&&n())&&(o.top=this.cellSize*(i.y-r));var s=this.baseClass;e.addClass(i.n,s+"Top"),e.addClass(i.n,s+"Seen"),e.animateProperty({node:i.n,properties:o,onEnd:e.hitch(this,"_loadUnder",i,o),easing:this.easing}).play()}},_loadUnder:function(t,i){var r=t.io,a=i.left>=0,o=i.top>=0,n=this.cols,s=r+(a?-1:1),l=r+(o?-n:n),d=o?a?s-n:l+1:a?l-1:s+n,u=this.baseClass;e.forEach([s,l,d],function(t){var i=this._nl[t];i&&e.hasClass(i,u+"Seen")&&e.removeClass(i,u+"Seen")},this),setTimeout(e.hitch(this,"_disenbiggen",t,i),1.25*this.delay)},_disenbiggen:function(t,i){i.top>=0&&(i.top+=this.cellSize),i.left>=0&&(i.left+=this.cellSize);var r=this.cellSize-2*this.cellMargin;e.animateProperty({node:t.n,properties:e.mixin(i,{width:r,height:r}),onEnd:e.hitch(this,"_cycle",t,i)}).play(5)},_cycle:function(t,i){var r=this.baseClass;e.removeClass(t.n,r+"Top");var a=this._nl.filter(function(t){return!e.hasClass(t,r+"Seen")}),o=a[Math.floor(Math.random()*a.length)];setTimeout(e.hitch(this,"_enbiggen",{target:o}),this.delay/2)}})});//# sourceMappingURL=Badge.js.map