//>>built
define("dojox/drawing/tools/TextBlock",["dojo","dijit/registry","../util/oo","../manager/_registry","../stencil/Text"],function(e,t,i,a,r){var o;e.addOnLoad(function(){o=e.byId("conEdit"),o&&o.parentNode.removeChild(o)});var n=i.declare(r,function(t){if(t.data){var i=t.data,a=i.text?this.typesetter(i.text):i.text,r=i.width?"auto"==i.width?"auto":Math.max(i.width,this.style.text.minWidth):this.style.text.minWidth,o=this._lineHeight;if(a&&"auto"==r){var n=this.measureText(this.cleanText(a,!1),r);r=n.w,o=n.h}else this._text="";this.points=[{x:i.x,y:i.y},{x:i.x+r,y:i.y},{x:i.x+r,y:i.y+o},{x:i.x,y:i.y+o}],i.showEmpty||a?(this.editMode=!0,e.disconnect(this._postRenderCon),this._postRenderCon=null,this.connect(this,"render",this,"onRender",!0),i.showEmpty?(this._text=a||"",this.edit()):a&&i.editMode?(this._text="",this.edit()):a&&this.render(a),setTimeout(e.hitch(this,function(){this.editMode=!1}),100)):this.render()}else this.connectMouse(),this._postRenderCon=e.connect(this,"render",this,"_onPostRender")},{draws:!0,baseRender:!1,type:"dojox.drawing.tools.TextBlock",_caretStart:0,_caretEnd:0,_blockExec:!1,selectOnExec:!0,showEmpty:!1,onDrag:function(t){this.parentNode||this.showParent(t);var i=this._startdrag,a=t.page;this._box.left=i.x<a.x?i.x:a.x,this._box.top=i.y,this._box.width=(i.x<a.x?a.x-i.x:i.x-a.x)+this.style.text.pad,e.style(this.parentNode,this._box.toPx())},onUp:function(t){if(this._downOnCanvas){this._downOnCanvas=!1;var i=e.connect(this,"render",this,function(){e.disconnect(i),this.onRender(this)});this.editMode=!0,this.showParent(t),this.created=!0,this.createTextField(),this.connectTextField()}},showParent:function(t){if(!this.parentNode){var i=t.pageX||10,a=t.pageY||10;this.parentNode=e.doc.createElement("div"),this.parentNode.id=this.id;var r=this.style.textMode.create;this._box={left:i,top:a,width:t.width||1,height:t.height&&t.height>8?t.height:this._lineHeight,border:r.width+"px "+r.style+" "+r.color,position:"absolute",zIndex:500,toPx:function(){var e={};for(var t in this)e[t]="number"==typeof this[t]&&"zIndex"!=t?this[t]+"px":this[t];return e}},e.style(this.parentNode,this._box),document.body.appendChild(this.parentNode)}},createTextField:function(t){var i=this.style.textMode.edit;return this._box.border=i.width+"px "+i.style+" "+i.color,this._box.height="auto",this._box.width=Math.max(this._box.width,this.style.text.minWidth*this.mouse.zoom),e.style(this.parentNode,this._box.toPx()),this.parentNode.appendChild(o),e.style(o,{height:t?"auto":this._lineHeight+"px",fontSize:this.textSize/this.mouse.zoom+"px",fontFamily:this.style.text.family}),o.innerHTML=t||"",o},connectTextField:function(){if(!this._textConnected){var i=t.byId("greekPalette"),a=void 0!=i;a&&e.mixin(i,{_pushChangeTo:o,_textBlock:this}),this._textConnected=!0,this._dropMode=!1,this.mouse.setEventMode("TEXT"),this.keys.editMode(!0);var r,n,s,d,l=this,h=!1,m=function(){l._dropMode||(e.forEach([r,n,s,d],function(t){e.disconnect(t)}),l._textConnected=!1,l.keys.editMode(!1),l.mouse.setEventMode(),l.execText())};r=e.connect(o,"keyup",this,function(t){e.trim(o.innerHTML)&&!h?(e.style(o,"height","auto"),h=!0):e.trim(o.innerHTML).length<2&&h&&(e.style(o,"height",this._lineHeight+"px"),h=!1),this._blockExec?t.keyCode==e.keys.SPACE&&(e.stopEvent(t),a&&i.onCancel()):13!=t.keyCode&&27!=t.keyCode||(e.stopEvent(t),m())}),n=e.connect(o,"keydown",this,function(t){if(13!=t.keyCode&&27!=t.keyCode||e.stopEvent(t),220==t.keyCode){if(!a)return;e.stopEvent(t),this.getSelection(o),this.insertText(o,"\\"),this._dropMode=!0,this._blockExec=!0,i.show({around:this.parentNode,orient:{BL:"TL"}})}if(this._dropMode)switch(t.keyCode){case e.keys.UP_ARROW:case e.keys.DOWN_ARROW:case e.keys.LEFT_ARROW:case e.keys.RIGHT_ARROW:e.stopEvent(t),i._navigateByArrow(t);break;case e.keys.ENTER:e.stopEvent(t),i._onCellClick(t);break;case e.keys.BACKSPACE:case e.keys.DELETE:e.stopEvent(t),i.onCancel()}else this._blockExec=!1}),s=e.connect(document,"mouseup",this,function(t){this._onAnchor||"conEdit"==t.target.id?"conEdit"==t.target.id&&""==o.innerHTML&&(o.blur(),setTimeout(function(){o.focus()},200)):(e.stopEvent(t),m())}),this.createAnchors(),d=e.connect(this.mouse,"setZoom",this,function(e){m()}),o.focus(),this.onDown=function(){},this.onDrag=function(){},setTimeout(e.hitch(this,function(){o.focus(),this.onUp=function(){!l._onAnchor&&this.parentNode&&(l.disconnectMouse(),m(),l.onUp=function(){})}}),500)}},execText:function(){var t=e.marginBox(this.parentNode),i=Math.max(t.w,this.style.text.minWidth),a=this.cleanText(o.innerHTML,!0);o.innerHTML="",o.blur(),this.destroyAnchors(),a=this.typesetter(a);var r=this.measureText(a,i),n=this.mouse.scrollOffset(),s=this.mouse.origin,d=this._box.left+n.left-s.x,l=this._box.top+n.top-s.y;d*=this.mouse.zoom,l*=this.mouse.zoom,i*=this.mouse.zoom,r.h*=this.mouse.zoom,this.points=[{x:d,y:l},{x:d+i,y:l},{x:d+i,y:l+r.h},{x:d,y:l+r.h}],this.editMode=!1,r.text||(this._text="",this._textArray=[]),this.render(r.text),this.onChangeText(this.getText())},edit:function(){this.editMode=!0;var e=this.getText()||"";if(!this.parentNode&&this.points){var t=this.pointsToData(),i=this.mouse.scrollOffset(),a=this.mouse.origin,r={pageX:t.x/this.mouse.zoom-i.left+a.x,pageY:t.y/this.mouse.zoom-i.top+a.y,width:t.width/this.mouse.zoom,height:t.height/this.mouse.zoom};this.remove(this.shape,this.hit),this.showParent(r),this.createTextField(e.replace("/n"," ")),this.connectTextField(),e&&this.setSelection(o,"end")}},cleanText:function(t,i){var a=function(e){var t={"&lt;":"<","&gt;":">","&amp;":"&"};for(var i in t)e=e.replace(new RegExp(i,"gi"),t[i]);return e};return i&&e.forEach(["<br>","<br/>","<br />","\\n","\\r"],function(e){t=t.replace(new RegExp(e,"gi")," ")}),t=t.replace(/&nbsp;/g," "),t=a(t),t=e.trim(t),t=t.replace(/\s{2,}/g," ")},measureText:function(t,i){var a="(<br\\s*/*>)|(\\n)|(\\r)";this.showParent({width:i||"auto",height:"auto"}),this.createTextField(t);var r="",n=o;n.innerHTML="X";var s=e.marginBox(n).h;if(n.innerHTML=t,!i||new RegExp(a,"gi").test(t))r=t.replace(new RegExp(a,"gi"),"\n"),n.innerHTML=t.replace(new RegExp(a,"gi"),"<br/>");else if(e.marginBox(n).h==s)r=t;else{var d=t.split(" "),l=[[]],h=0;for(n.innerHTML="";d.length;){var m=d.shift();n.innerHTML+=m+" ",e.marginBox(n).h>s&&(h++,l[h]=[],n.innerHTML=m+" "),l[h].push(m)}e.forEach(l,function(e,t){l[t]=e.join(" ")}),r=l.join("\n"),n.innerHTML=r.replace("\n","<br/>")}var u=e.marginBox(n);return o.parentNode.removeChild(o),e.destroy(this.parentNode),this.parentNode=null,{h:u.h,w:u.w,text:r}},_downOnCanvas:!1,onDown:function(t){this._startdrag={x:t.pageX,y:t.pageY},e.disconnect(this._postRenderCon),this._postRenderCon=null,this._downOnCanvas=!0},createAnchors:function(){this._anchors={};var t=this,i=this.style.anchors,a=i.width,r=i.size-2*a,n=i.size-2*a,s=i.size/2*-1+"px",d={position:"absolute",width:r+"px",height:n+"px",backgroundColor:i.fill,border:a+"px "+i.style+" "+i.color};e.isIE&&(d.paddingLeft=r+"px",d.fontSize=r+"px");for(var l=[{top:s,left:s},{top:s,right:s},{bottom:s,right:s},{bottom:s,left:s}],h=0;4>h;h++){var m=0==h||3==h,u=this.util.uid(m?"left_anchor":"right_anchor"),f=e.create("div",{id:u},this.parentNode);e.style(f,e.mixin(e.clone(d),l[h]));var c,y,p,c=e.connect(f,"mousedown",this,function(i){m=i.target.id.indexOf("left")>-1,t._onAnchor=!0;var a=i.pageX,r=this._box.width;e.stopEvent(i),y=e.connect(document,"mousemove",this,function(t){var i=t.pageX;m?(this._box.left=i,this._box.width=r+a-i):this._box.width=i+r-a,e.style(this.parentNode,this._box.toPx())}),p=e.connect(document,"mouseup",this,function(i){a=this._box.left,r=this._box.width,e.disconnect(y),e.disconnect(p),t._onAnchor=!1,o.focus(),e.stopEvent(i)})});this._anchors[u]={a:f,cons:[c]}}},destroyAnchors:function(){for(var t in this._anchors)e.forEach(this._anchors[t].con,e.disconnect,e),e.destroy(this._anchors[t].a)},setSavedCaret:function(e){this._caretStart=this._caretEnd=e},getSavedCaret:function(){return{start:this._caretStart,end:this._caretEnd}},insertText:function(e,t){var i,a=e.innerHTML,r=this.getSavedCaret();a=a.replace(/&nbsp;/g," "),i=a.substr(0,r.start)+t+a.substr(r.end),i=this.cleanText(i,!0),this.setSavedCaret(Math.min(i.length,r.end+t.length)),e.innerHTML=i,this.setSelection(e,"stored")},getSelection:function(t){var i,a;if(e.doc.selection){var r=e.doc.selection.createRange(),o=e.body().createTextRange();o.moveToElementText(t);var n=o.duplicate();o.moveToBookmark(r.getBookmark()),n.setEndPoint("EndToStart",o),i=this._caretStart=n.text.length,a=this._caretEnd=n.text.length+r.text.length}else this._caretStart=e.global.getSelection().getRangeAt(t).startOffset,this._caretEnd=e.global.getSelection().getRangeAt(t).endOffset},setSelection:function(t,i){if(e.doc.selection){var a=e.body().createTextRange();switch(a.moveToElementText(t),i){case"end":a.collapse(!1);break;case"beg":a.collapse();break;case"all":a.collapse(),a.moveStart("character",0),a.moveEnd("character",t.text.length);break;case"stored":a.collapse();var r=this._caretStart-this._caretEnd;a.moveStart("character",this._caretStart),a.moveEnd("character",r)}a.select()}else{var o=function(e,t){t=t||[];for(var i=0;i<e.childNodes.length;i++){var a=e.childNodes[i];3==a.nodeType?t.push(a):a.tagName&&"img"==a.tagName.toLowerCase()&&t.push(a),a.childNodes&&a.childNodes.length&&o(a,t)}return t};t.focus();var n=e.global.getSelection();n.removeAllRanges();var s=e.doc.createRange(),d=o(t);switch(i){case"end":s.setStart(d[d.length-1],d[d.length-1].textContent.length),s.setEnd(d[d.length-1],d[d.length-1].textContent.length);break;case"beg":s.setStart(d[0],0),s.setEnd(d[0],0);break;case"all":s.setStart(d[0],0),s.setEnd(d[d.length-1],d[d.length-1].textContent.length);break;case"stored":s.setStart(d[0],this._caretStart),s.setEnd(d[0],this._caretEnd)}n.addRange(s)}}});return e.setObject("dojox.drawing.tools.TextBlock",n),n.setup={name:"dojox.drawing.tools.TextBlock",tooltip:"Text Tool",iconClass:"iconText"},a.register(n.setup,"tool"),n});//# sourceMappingURL=TextBlock.js.map