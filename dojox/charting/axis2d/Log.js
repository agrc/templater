//>>built
define("dojox/charting/axis2d/Log",["dojo/_base/lang","dojo/_base/array","dojo/_base/sniff","dojo/_base/declare","dojo/_base/connect","dojo/dom-geometry","./Invisible","../scaler/common","../scaler/linear","../scaler/log","./common","dojox/gfx","dojox/lang/utils","dojox/lang/functional"],function(e,t,a,i,r,n,d,o,l,s,m,u,h,f){var c=45;return i("dojox.charting.axis2d.Log",d,{defaultParams:{vertical:!1,fixUpper:"none",fixLower:"none",natural:!1,leftBottom:!0,includeZero:!1,fixed:!0,majorLabels:!0,minorTicks:!0,minorLabels:!0,microTicks:!1,rotation:0,htmlLabels:!0,enableCache:!1,dropLabels:!0,labelSizeChange:!1,log:10},optionalParams:{min:0,max:1,from:0,to:1,majorTickStep:4,minorTickStep:2,microTickStep:1,labels:[],labelFunc:null,maxLabelSize:0,maxLabelCharCount:0,trailingSymbol:null,stroke:{},majorTick:{},minorTick:{},microTick:{},tick:{},font:"",fontColor:"",title:"",titleGap:0,titleFont:"",titleFontColor:"",titleOrientation:""},constructor:function(t,a){this.opt=e.clone(this.defaultParams),h.updateWithObject(this.opt,a),h.updateWithPattern(this.opt,a,this.optionalParams),this.opt.enableCache&&(this._textFreePool=[],this._lineFreePool=[],this._textUsePool=[],this._lineUsePool=[]),this._invalidMaxLabelSize=!0,this.opt.log>1?(this.scalerType=s,this.scalerType.setBase(this.opt.log)):this.scalerType=l},setWindow:function(e,t){return e!=this.scale&&(this._invalidMaxLabelSize=!0),this.inherited(arguments)},_groupLabelWidth:function(t,a,i){if(!t.length)return 0;t.length>50&&(t.length=50),e.isObject(t[0])&&(t=f.map(t,function(e){return e.text})),i&&(t=f.map(t,function(t){return 0==e.trim(t).length?"":t.substring(0,i)+this.trailingSymbol},this));var r=t.join("<br>");return u._base._getTextBox(r,{font:a}).w||0},_getMaxLabelSize:function(a,i,r,n,d,o){if(null==this._maxLabelSize&&6==arguments.length){var l=this.opt;this.scaler.minMinorStep=this._prevMinMinorStep=0;var s=e.clone(l);delete s.to,delete s.from;var m=this.scalerType.buildScaler(a,i,r,s,l.to-l.from);m.minMinorStep=0,this._majorStart=m.major.start;var u=this.scalerType.buildTicks(m,l);if(o&&u){var h=0,f=0,c=function(e){e.label&&this.push(e.label)},y=[];this.opt.majorLabels&&(t.forEach(u.major,c,y),h=this._groupLabelWidth(y,d,s.maxLabelCharCount),s.maxLabelSize&&(h=Math.min(s.maxLabelSize,h))),y=[],this.opt.dropLabels&&this.opt.minorLabels&&(t.forEach(u.minor,c,y),f=this._groupLabelWidth(y,d,s.maxLabelCharCount),s.maxLabelSize&&(f=Math.min(s.maxLabelSize,f))),this._maxLabelSize={majLabelW:h,minLabelW:f,majLabelH:o,minLabelH:o}}else this._maxLabelSize=null}return this._maxLabelSize},calculate:function(e,t,a){if(this.inherited(arguments,[e,t,a,this.scalerType]),this.scaler.minMinorStep=this._prevMinMinorStep,(this._invalidMaxLabelSize||a!=this._oldSpan)&&e!=1/0&&t!=-1/0){this._invalidMaxLabelSize=!1,this.opt.labelSizeChange&&(this._maxLabelSize=null),this._oldSpan=a;var i=this.opt,r=this.chart.theme.axis,n=i.rotation%360,d=this.chart.theme.axis.tick.labelGap,o=i.font||r.majorTick&&r.majorTick.font||r.tick&&r.tick.font,l=o?u.normalizedLength(u.splitFontString(o).size):0,s=this._getMaxLabelSize(e,t,a,n,o,l);if("number"!=typeof d&&(d=4),s&&i.dropLabels){var m,h,f=Math.abs(Math.cos(n*Math.PI/180)),c=Math.abs(Math.sin(n*Math.PI/180));switch(n<0&&(n+=360),n){case 0:case 180:this.vertical?m=h=l:(m=s.majLabelW,h=s.minLabelW);break;case 90:case 270:this.vertical?(m=s.majLabelW,h=s.minLabelW):m=h=l;break;default:m=this.vertical?Math.min(s.majLabelW,l/f):Math.min(s.majLabelW,l/c);var y=Math.sqrt(s.minLabelW*s.minLabelW+l*l),v=this.vertical?l*f+s.minLabelW*c:s.minLabelW*f+l*c;h=Math.min(y,v)}this.scaler.minMinorStep=this._prevMinMinorStep=Math.max(m,h)+d;var M=this.scaler.minMinorStep<=this.scaler.minor.tick*this.scaler.bounds.scale;this._skipInterval=M?0:Math.floor((m+d)/(this.scaler.major.tick*this.scaler.bounds.scale))}else this._skipInterval=0}return this.ticks=this.scalerType.buildTicks(this.scaler,this.opt),this},getOffsets:function(){var e=this.scaler,t={l:0,r:0,t:0,b:0};if(!e)return t;var a=this.opt,i=(o.getNumericLabel,e.major,e.minor,this.chart.theme.axis),r=this.chart.theme.axis.tick.labelGap,n=a.titleFont||i.title&&i.title.font,d=0==a.titleGap?0:a.titleGap||i.title&&i.title.gap,l=this.chart.theme.getTick("major",a),s=this.chart.theme.getTick("minor",a),m=n?u.normalizedLength(u.splitFontString(n).size):0,h=a.rotation%360,f=a.leftBottom,y=Math.abs(Math.cos(h*Math.PI/180)),v=Math.abs(Math.sin(h*Math.PI/180));this.trailingSymbol=void 0===a.trailingSymbol||null===a.trailingSymbol?this.trailingSymbol:a.trailingSymbol,"number"!=typeof r&&(r=4),h<0&&(h+=360);var M=this._getMaxLabelSize();if(M){var p,g=Math.ceil(Math.max(M.majLabelW,M.minLabelW))+1,b=Math.ceil(Math.max(M.majLabelH,M.minLabelH))+1;if(this.vertical){switch(p=f?"l":"r",h){case 0:case 180:t[p]=g,t.t=t.b=b/2;break;case 90:case 270:t[p]=b,t.t=t.b=g/2;break;default:h<=c||180<h&&h<=180+c?(t[p]=b*v/2+g*y,t[f?"t":"b"]=b*y/2+g*v,t[f?"b":"t"]=b*y/2):h>360-c||180>h&&h>180-c?(t[p]=b*v/2+g*y,t[f?"b":"t"]=b*y/2+g*v,t[f?"t":"b"]=b*y/2):h<90||180<h&&h<270?(t[p]=b*v+g*y,t[f?"t":"b"]=b*y+g*v):(t[p]=b*v+g*y,t[f?"b":"t"]=b*y+g*v)}t[p]+=r+Math.max(l.length,s.length)+(a.title?m+d:0)}else{switch(p=f?"b":"t",h){case 0:case 180:t[p]=b,t.l=t.r=g/2;break;case 90:case 270:t[p]=g,t.l=t.r=b/2;break;default:90-c<=h&&h<=90||270-c<=h&&h<=270?(t[p]=b*y/2+g*v,t[f?"r":"l"]=b*v/2+g*y,t[f?"l":"r"]=b*v/2):90<=h&&h<=90+c||270<=h&&h<=270+c?(t[p]=b*y/2+g*v,t[f?"l":"r"]=b*v/2+g*y,t[f?"r":"l"]=b*v/2):h<c||180<h&&h<180+c?(t[p]=b*y+g*v,t[f?"r":"l"]=b*v+g*y):(t[p]=b*y+g*v,t[f?"l":"r"]=b*v+g*y)}t[p]+=r+Math.max(l.length,s.length)+(a.title?m+d:0)}}return t},cleanGroup:function(e){this.opt.enableCache&&this.group&&(this._lineFreePool=this._lineFreePool.concat(this._lineUsePool),this._lineUsePool=[],this._textFreePool=this._textFreePool.concat(this._textUsePool),this._textUsePool=[]),this.inherited(arguments)},createText:function(e,t,a,i,r,n,d,o,l){if(!this.opt.enableCache||"html"==e)return m.createText[e](this.chart,t,a,i,r,n,d,o,l);var s;return this._textFreePool.length>0?(s=this._textFreePool.pop(),s.setShape({x:a,y:i,text:n,align:r}),t.add(s)):s=m.createText[e](this.chart,t,a,i,r,n,d,o),this._textUsePool.push(s),s},createLine:function(e,t){var a;return this.opt.enableCache&&this._lineFreePool.length>0?(a=this._lineFreePool.pop(),a.setShape(t),e.add(a)):a=e.createLine(t),this.opt.enableCache&&this._lineUsePool.push(a),a},render:function(e,i){if(!this.dirty||!this.scaler)return this;var r,n,d,o,l,s,h,f,y,v=this.opt,M=this.chart.theme.axis,p=v.leftBottom,g=v.rotation%360,b=0,k=this.chart.theme.axis.tick.labelGap,w=v.font||M.majorTick&&M.majorTick.font||M.tick&&M.tick.font,F=v.titleFont||M.title&&M.title.font,E=v.fontColor||M.majorTick&&M.majorTick.fontColor||M.tick&&M.tick.fontColor||"black",j=v.titleFontColor||M.title&&M.title.fontColor||"black",I=0==v.titleGap?0:v.titleGap||M.title&&M.title.gap||15,x=v.titleOrientation||M.title&&M.title.orientation||"axis",T=this.chart.theme.getTick("major",v),_=this.chart.theme.getTick("minor",v),S=this.chart.theme.getTick("micro",v),C=(Math.max(T.length,_.length,S.length),"stroke"in v?v.stroke:M.stroke),A=w?u.normalizedLength(u.splitFontString(w).size):0,G=Math.abs(Math.cos(g*Math.PI/180)),z=Math.abs(Math.sin(g*Math.PI/180)),N=F?u.normalizedLength(u.splitFontString(F).size):0;"number"!=typeof k&&(k=4),g<0&&(g+=360);var H=this._getMaxLabelSize();if(H=H&&H.majLabelW,this.vertical){switch(r={y:e.height-i.b},n={y:i.t},d={y:(e.height-i.b+i.t)/2},o=A*z+(H||0)*G+k+Math.max(T.length,_.length)+N+I,l={x:0,y:-1},f={x:0,y:0},s={x:1,y:0},h={x:k,y:0},g){case 0:y="end",f.y=.4*A;break;case 90:y="middle",f.x=-A;break;case 180:y="start",f.y=.4*-A;break;case 270:y="middle";break;default:g<c?(y="end",f.y=.4*A):g<90?(y="end",f.y=.4*A):g<180-c?y="start":g<180+c?(y="start",f.y=.4*-A):g<270?(y="start",f.x=p?0:.4*A):g<360-c?(y="end",f.x=p?0:.4*A):(y="end",f.y=.4*A)}if(p)r.x=n.x=i.l,b=x&&"away"==x?90:270,d.x=i.l-o+(270==b?N:0),s.x=-1,h.x=-h.x;else switch(r.x=n.x=e.width-i.r,b=x&&"axis"==x?90:270,d.x=e.width-i.r+o-(270==b?0:N),y){case"start":y="end";break;case"end":y="start";break;case"middle":f.x+=A}}else{switch(r={x:i.l},n={x:e.width-i.r},d={x:(e.width-i.r+i.l)/2},o=A*G+(H||0)*z+k+Math.max(T.length,_.length)+N+I,l={x:1,y:0},f={x:0,y:0},s={x:0,y:1},h={x:0,y:k},g){case 0:y="middle",f.y=A;break;case 90:y="start",f.x=.4*-A;break;case 180:y="middle";break;case 270:y="end",f.x=.4*A;break;default:g<90-c?(y="start",f.y=p?A:0):g<90+c?(y="start",f.x=.4*-A):g<180?(y="start",f.y=p?0:-A):g<270-c?(y="end",f.y=p?0:-A):g<270+c?(y="end",f.y=p?.4*A:0):(y="end",f.y=p?A:0)}if(p)r.y=n.y=e.height-i.b,b=x&&"axis"==x?180:0,d.y=e.height-i.b+o-(b?N:0);else switch(r.y=n.y=i.t,b=x&&"away"==x?180:0,d.y=i.t-o+(b?0:N),s.y=-1,h.y=-h.y,y){case"start":y="end";break;case"end":y="start";break;case"middle":f.y-=A}}this.cleanGroup();var L=this.group,P=this.scaler,Q=this.ticks,B=this.scalerType.getTransformerFromModel(this.scaler),D=v.title&&b||g||!this.opt.htmlLabels||a("ie")||a("opera")?"gfx":"html",q=s.x*T.length,K=s.y*T.length,R=this._skipInterval;if(L.createLine({x1:r.x,y1:r.y,x2:n.x,y2:n.y}).setStroke(C),v.title){var O=m.createText[D](this.chart,L,d.x,d.y,"middle",v.title,F,j);"html"==D?this.htmlElements.push(O):O.setTransform(u.matrix.rotategAt(b,d.x,d.y))}if(null==Q)return this.dirty=!1,this;var W=this.opt.majorLabels;if(t.forEach(Q.major,function(e,t){var a,i=B(e.value),n=r.x+l.x*i,d=r.y+l.y*i;if(this.createLine(L,{x1:n,y1:d,x2:n+q,y2:d+K}).setStroke(T),e.label&&(!R||(t-(1+R))%(1+R)==0)){var o=v.maxLabelCharCount?this.getTextWithLimitCharCount(e.label,w,v.maxLabelCharCount):{text:e.label,truncated:!1};o=v.maxLabelSize?this.getTextWithLimitLength(o.text,w,v.maxLabelSize,o.truncated):o,a=this.createText(D,L,n+q+h.x+(g?0:f.x),d+K+h.y+(g?0:f.y),y,o.text,w,E),this.chart.truncateBidi&&o.truncated&&this.chart.truncateBidi(a,e.label,D),o.truncated&&this.labelTooltip(a,this.chart,e.label,o.text,w,D),"html"==D?this.htmlElements.push(a):g&&a.setTransform([{dx:f.x,dy:f.y},u.matrix.rotategAt(g,n+q+h.x,d+K+h.y)])}},this),q=s.x*_.length,K=s.y*_.length,W=this.opt.minorLabels&&!R&&10===this.opt.log&&Q.minor.length){var U=1,V=Math.log(10);t.forEach(Q.minor,function(e,t){var a=Math.log(e.value)/V,i=Math.floor(a),r=Math.ceil(a);U=Math.min(U,a-i,r-a),t&&(U=Math.min(U,a-Math.log(Q.minor[t-1].value)/V))}),W=P.minMinorStep<=U*P.bounds.scale}return t.forEach(Q.minor,function(e){var t,a=B(e.value),i=r.x+l.x*a,n=r.y+l.y*a;if(this.createLine(L,{x1:i,y1:n,x2:i+q,y2:n+K}).setStroke(_),W&&e.label){var d=v.maxLabelCharCount?this.getTextWithLimitCharCount(e.label,w,v.maxLabelCharCount):{text:e.label,truncated:!1};d=v.maxLabelSize?this.getTextWithLimitLength(d.text,w,v.maxLabelSize,d.truncated):d,t=this.createText(D,L,i+q+h.x+(g?0:f.x),n+K+h.y+(g?0:f.y),y,d.text,w,E),this.chart.getTextDir&&d.truncated&&this.chart.truncateBidi(t,e.label,D),d.truncated&&this.labelTooltip(t,this.chart,e.label,d.text,w,D),"html"==D?this.htmlElements.push(t):g&&t.setTransform([{dx:f.x,dy:f.y},u.matrix.rotategAt(g,i+q+h.x,n+K+h.y)])}},this),q=s.x*S.length,K=s.y*S.length,t.forEach(Q.micro,function(e){var t=B(e.value),a=r.x+l.x*t,i=r.y+l.y*t;this.createLine(L,{x1:a,y1:i,x2:a+q,y2:i+K}).setStroke(S)},this),this.dirty=!1,this},labelTooltip:function(t,a,i,d,o,l){var s=["dijit/Tooltip"],m={type:"rect"},h=["above","below"],f=u._base._getTextBox(d,{font:o}).w||0,c=o?u.normalizedLength(u.splitFontString(o).size):0;if("html"==l)e.mixin(m,n.position(t.firstChild,!0)),m.width=Math.ceil(f),m.height=Math.ceil(c),this._events.push({shape:dojo,handle:r.connect(t.firstChild,"onmouseover",this,function(e){require(s,function(e){e.show(i,m,h)})})}),this._events.push({shape:dojo,handle:r.connect(t.firstChild,"onmouseout",this,function(e){require(s,function(e){e.hide(m)})})});else{var y=t.getShape(),v=a.getCoords();m=e.mixin(m,{x:y.x-f/2,y:y.y}),m.x+=v.x,m.y+=v.y,m.x=Math.round(m.x),m.y=Math.round(m.y),m.width=Math.ceil(f),m.height=Math.ceil(c),this._events.push({shape:t,handle:t.connect("onmouseenter",this,function(e){require(s,function(e){e.show(i,m,h)})})}),this._events.push({shape:t,handle:t.connect("onmouseleave",this,function(e){require(s,function(e){e.hide(m)})})})}},isNullValue:function(e){return e<=0},naturalBaseline:1})});//# sourceMappingURL=Log.js.map