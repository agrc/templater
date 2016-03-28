//>>built
define("dojox/sketch/Figure",["dojo/_base/kernel","dojo/_base/lang","dojo/_base/connect","dojo/_base/html","../gfx","../xml/DomParser","./UndoStack"],function(e){e.experimental("dojox.sketch");var t=dojox.sketch;t.tools={},t.registerTool=function(e,i){t.tools[e]=i},t.Figure=function(i){var a=this;this.annCounter=1,this.shapes=[],this.image=null,this.imageSrc=null,this.size={w:0,h:0},this.surface=null,this.group=null,this.node=null,this.zoomFactor=1,this.tools=null,this.obj={},e.mixin(this,i),this.selected=[],this.hasSelections=function(){return this.selected.length>0},this.isSelected=function(e){for(var t=0;t<a.selected.length;t++)if(a.selected[t]==e)return!0;return!1},this.select=function(e){a.isSelected(e)||(a.clearSelections(),a.selected=[e]),e.setMode(t.Annotation.Modes.View),e.setMode(t.Annotation.Modes.Edit)},this.deselect=function(e){for(var i=-1,o=0;o<a.selected.length;o++)if(a.selected[o]==e){i=o;break}return i>-1&&(e.setMode(t.Annotation.Modes.View),a.selected.splice(i,1)),e},this.clearSelections=function(){for(var e=0;e<a.selected.length;e++)a.selected[e].setMode(t.Annotation.Modes.View);a.selected=[]},this.replaceSelection=function(e,t){if(!a.isSelected(t))return void a.select(e);for(var i=-1,o=0;o<a.selected.length;o++)if(a.selected[o]==t){i=o;break}i>-1&&a.selected.splice(i,1,e)},this._c=null,this._ctr=null,this._lp=null,this._action=null,this._prevState=null,this._startPoint=null,this._ctool=null,this._start=null,this._end=null,this._absEnd=null,this._cshape=null,this._dblclick=function(e){var t=a._fromEvt(e);t&&a.onDblClickShape(t,e)},this._keydown=function(t){var i=!1;t.ctrlKey&&(90===t.keyCode||122===t.keyCode?(a.undo(),i=!0):89!==t.keyCode&&121!==t.keyCode||(a.redo(),i=!0)),46!==t.keyCode&&8!==t.keyCode||(a._delete(a.selected),i=!0),i&&e.stopEvent(t)},this._md=function(t){"vml"==dojox.gfx.renderer&&a.node.focus();var i=a._fromEvt(t);a._startPoint={x:t.pageX,y:t.pageY},a._ctr=e.position(a.node);var o={x:a.node.scrollLeft,y:a.node.scrollTop};a._ctr={x:a._ctr.x-o.x,y:a._ctr.y-o.y};var n=t.clientX-a._ctr.x,r=t.clientY-a._ctr.y;a._lp={x:n,y:r},a._start={x:n,y:r},a._end={x:n,y:r},a._absEnd={x:n,y:r},i?(i.type&&"Anchor"!=i.type()&&(a.isSelected(i)?a._sameShapeSelected=!0:(a.select(i),a._sameShapeSelected=!1)),i.beginEdit(),a._c=i):(a.clearSelections(),a._ctool.onMouseDown(t))},this._mm=function(e){if(a._ctr){if(a._c&&!a._c.shape)return void a._clearMouse();var t=e.clientX-a._ctr.x,i=e.clientY-a._ctr.y,o=t-a._lp.x,n=i-a._lp.y;if(a._absEnd={x:t,y:i},a._c)a._c.setBinding({dx:o/a.zoomFactor,dy:n/a.zoomFactor}),a._lp={x:t,y:i};else{a._end={x:o,y:n};var r={x:Math.min(a._start.x,a._absEnd.x),y:Math.min(a._start.y,a._absEnd.y),width:Math.abs(a._start.x-a._absEnd.x),height:Math.abs(a._start.y-a._absEnd.y)};r.width&&r.height&&a._ctool.onMouseMove(e,r)}}},this._mu=function(e){a._c?a._c.shape&&a._c.endEdit():a._ctool.onMouseUp(e),a._clearMouse()},this._clearMouse=function(){a._c=a._ctr=a._lp=a._action=a._prevState=a._startPoint=null,a._cshape=a._start=a._end=a._absEnd=null},this.initUndoStack()};var i=t.Figure.prototype;return i.initUndoStack=function(){this.history=new t.UndoStack(this)},i.setTool=function(e){this._ctool=e},i.gridSize=0,i._calCol=function(e){return this.gridSize?Math.round(e/this.gridSize)*this.gridSize:e},i._delete=function(e,i){for(var a=0;a<e.length;a++)e[a].setMode(t.Annotation.Modes.View),e[a].destroy(i),this.remove(e[a]),this._remove(e[a]),i||e[a].onRemove();e.splice(0,e.length)},i.onDblClickShape=function(e,t){e.onDblClick&&e.onDblClick(t)},i.onCreateShape=function(e){},i.onBeforeCreateShape=function(e){},i.initialize=function(t){this.node=t,this.surface=dojox.gfx.createSurface(t,this.size.w,this.size.h),this.group=this.surface.createGroup(),this._cons=[];var i=this.surface.getEventSource();this._cons.push(e.connect(i,"ondraggesture",e.stopEvent),e.connect(i,"ondragenter",e.stopEvent),e.connect(i,"ondragover",e.stopEvent),e.connect(i,"ondragexit",e.stopEvent),e.connect(i,"ondragstart",e.stopEvent),e.connect(i,"onselectstart",e.stopEvent),e.connect(i,"onmousedown",this._md),e.connect(i,"onmousemove",this._mm),e.connect(i,"onmouseup",this._mu),e.connect(i,"onclick",this,"onClick"),e.connect(i,"ondblclick",this._dblclick),e.connect(t,"onkeydown",this._keydown)),this.image=this.group.createImage({width:this.imageSize.w,height:this.imageSize.h,src:this.imageSrc})},i.destroy=function(t){this.node&&(t||(this.history&&this.history.destroy(),this._subscribed&&(e.unsubscribe(this._subscribed),delete this._subscribed)),e.forEach(this._cons,e.disconnect),this._cons=[],e.empty(this.node),this.group=this.surface=null,this.obj={},this.shapes=[])},i.nextKey=function(){return"annotation-"+this.annCounter++},i.draw=function(){},i.zoom=function(e){this.zoomFactor=e/100;var t=this.size.w*this.zoomFactor,i=this.size.h*this.zoomFactor;this.surface.setDimensions(t,i),this.group.setTransform(dojox.gfx.matrix.scale(this.zoomFactor,this.zoomFactor));for(var a=0;a<this.shapes.length;a++)this.shapes[a].zoom(this.zoomFactor)},i.getFit=function(){var e=(this.node.parentNode.offsetWidth-5)/this.size.w,t=(this.node.parentNode.offsetHeight-5)/this.size.h;return 100*Math.min(e,t)},i.unzoom=function(){this.zoomFactor=1,this.surface.setDimensions(this.size.w,this.size.h),this.group.setTransform()},i._add=function(e){this.obj[e._key]=e},i._remove=function(e){this.obj[e._key]&&delete this.obj[e._key]},i._get=function(e){return e&&e.indexOf("bounding")>-1?e=e.replace("-boundingBox",""):e&&e.indexOf("-labelShape")>-1&&(e=e.replace("-labelShape","")),this.obj[e]},i._keyFromEvt=function(e){var t=e.target.id+"";if(0==t.length){for(var i=e.target.parentNode,a=this.surface.getEventSource();i&&0==i.id.length&&i!=a;)i=i.parentNode;t=i.id}return t},i._fromEvt=function(e){return this._get(this._keyFromEvt(e))},i.add=function(e){for(var t=0;t<this.shapes.length;t++)if(this.shapes[t]==e)return!0;return this.shapes.push(e),!0},i.remove=function(e){for(var t=-1,i=0;i<this.shapes.length;i++)if(this.shapes[i]==e){t=i;break}return t>-1&&this.shapes.splice(t,1),e},i.getAnnotator=function(e){for(var t=0;t<this.shapes.length;t++)if(this.shapes[t].id==e)return this.shapes[t];return null},i.convert=function(i,a){var o=a+"Annotation";if(t[o]){var n,r,s,l,d=i.type(),c=i.id,u=i.label,h=i.mode;i.tokenId;switch(d){case"Preexisting":case"Lead":l={dx:i.transform.dx,dy:i.transform.dy},n={x:i.start.x,y:i.start.y},r={x:i.end.x,y:i.end.y};var m=r.x-(r.x-n.x)/2,f=r.y-(r.y-n.y)/2;s={x:m,y:f};break;case"SingleArrow":case"DoubleArrow":l={dx:i.transform.dx,dy:i.transform.dy},n={x:i.start.x,y:i.start.y},r={x:i.end.x,y:i.end.y},s={x:i.control.x,y:i.control.y};break;case"Underline":l={dx:i.transform.dx,dy:i.transform.dy},n={x:i.start.x,y:i.start.y},s={x:n.x+50,y:n.y+50},r={x:n.x+100,y:n.y+100};break;case"Brace":}var p=new t[o](this,c);"Underline"==p.type()?p.transform={dx:l.dx+n.x,dy:l.dy+n.y}:(p.transform&&(p.transform=l),p.start&&(p.start=n)),p.end&&(p.end=r),p.control&&(p.control=s),p.label=u,p.token=e.lang.shallowCopy(i.token),p.initialize(),this.replaceSelection(p,i),this._remove(i),this.remove(i),i.destroy(),p.setMode(h)}},i.setValue=function(e){var t=dojox.xml.DomParser.parse(e),i=this.node;this.load(t,i)},i.load=function(e,t){this.surface&&this.destroy(!0);var i=e.documentElement;this.size={w:parseFloat(i.getAttribute("width"),10),h:parseFloat(i.getAttribute("height"),10)};var a=i.childrenByName("g")[0],o=a.childrenByName("image")[0];this.imageSize={w:parseFloat(o.getAttribute("width"),10),h:parseFloat(o.getAttribute("height"),10)},this.imageSrc=o.getAttribute("xlink:href"),this.initialize(t);for(var n=a.childrenByName("g"),r=0;r<n.length;r++)this._loadAnnotation(n[r]);this._loadDeferred&&(this._loadDeferred.callback(this),this._loadDeferred=null),this.onLoad()},i.onLoad=function(){},i.onClick=function(){},i._loadAnnotation=function(e){var i=e.getAttribute("dojoxsketch:type")+"Annotation";if(t[i]){var a=new t[i](this,e.id);return a.initialize(e),this.nextKey(),a.setMode(t.Annotation.Modes.View),this._add(a),a}return null},i.onUndo=function(){},i.onBeforeUndo=function(){},i.onRedo=function(){},i.onBeforeRedo=function(){},i.undo=function(){this.history&&(this.onBeforeUndo(),this.history.undo(),this.onUndo())},i.redo=function(){this.history&&(this.onBeforeRedo(),this.history.redo(),this.onRedo())},i.serialize=function(){for(var e='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:dojoxsketch="http://dojotoolkit.org/dojox/sketch" width="'+this.size.w+'" height="'+this.size.h+'"><g><image xlink:href="'+this.imageSrc+'" x="0" y="0" width="'+this.size.w+'" height="'+this.size.h+'" />',t=0;t<this.shapes.length;t++)e+=this.shapes[t].serialize();return e+="</g></svg>"},i.getValue=i.serialize,dojox.sketch.Figure});//# sourceMappingURL=Figure.js.map