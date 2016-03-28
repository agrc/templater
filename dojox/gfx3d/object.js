//>>built
define("dojox/gfx3d/object",["dojo/_base/array","dojo/_base/declare","dojo/_base/lang","dojox/gfx","dojox/gfx/matrix","./_base","./scheduler","./gradient","./vector","./matrix","./lighting"],function(e,t,i,r,a,o,n,s,d,l,u){var c=n.scheduler;return t("dojox.gfx3d.Object",null,{constructor:function(){this.object=null,this.matrix=null,this.cache=null,this.renderer=null,this.parent=null,this.strokeStyle=null,this.fillStyle=null,this.shape=null},setObject:function(e){return this.object=r.makeParameters(this.object,e),this},setTransform:function(e){return this.matrix=l.clone(e?l.normalize(e):o.identity,!0),this},applyRightTransform:function(e){return e?this.setTransform([this.matrix,e]):this},applyLeftTransform:function(e){return e?this.setTransform([e,this.matrix]):this},applyTransform:function(e){return e?this.setTransform([this.matrix,e]):this},setFill:function(e){return this.fillStyle=e,this},setStroke:function(e){return this.strokeStyle=e,this},toStdFill:function(e,t){return this.fillStyle&&"undefined"!=typeof this.fillStyle.type?e[this.fillStyle.type](t,this.fillStyle.finish,this.fillStyle.color):this.fillStyle},invalidate:function(){this.renderer.addTodo(this)},destroy:function(){if(this.shape){var e=this.shape.getParent();e&&e.remove(this.shape),this.shape=null}},render:function(e){throw"Pure virtual function, not implemented"},draw:function(e){throw"Pure virtual function, not implemented"},getZOrder:function(){return 0},getOutline:function(){return null}}),t("dojox.gfx3d.Scene",o.Object,{constructor:function(){this.objects=[],this.todos=[],this.schedule=c.zOrder,this._draw=o.drawer.conservative},setFill:function(t){return this.fillStyle=t,e.forEach(this.objects,function(e){e.setFill(t)}),this},setStroke:function(t){return this.strokeStyle=t,e.forEach(this.objects,function(e){e.setStroke(t)}),this},render:function(t,i){var r=l.multiply(t,this.matrix);i&&(this.todos=this.objects),e.forEach(this.todos,function(e){e.render(r,i)})},draw:function(e){this.objects=this.schedule(this.objects),this._draw(this.todos,this.objects,this.renderer)},addTodo:function(t){e.every(this.todos,function(e){return e!=t})&&(this.todos.push(t),this.invalidate())},invalidate:function(){this.parent.addTodo(this)},getZOrder:function(){var t=0;return e.forEach(this.objects,function(e){t+=e.getZOrder()}),this.objects.length>1?t/this.objects.length:0}}),t("dojox.gfx3d.Edges",o.Object,{constructor:function(){this.object=i.clone(o.defaultEdges)},setObject:function(e,t){return this.object=r.makeParameters(this.object,e instanceof Array?{points:e,style:t}:e),this},getZOrder:function(){var t=0;return e.forEach(this.cache,function(e){t+=e.z}),this.cache.length>1?t/this.cache.length:0},render:function(t){var i=l.multiply(t,this.matrix);this.cache=e.map(this.object.points,function(e){return l.multiplyPoint(i,e)})},draw:function(){var t=this.cache;this.shape?this.shape.setShape(""):this.shape=this.renderer.createPath();var i=this.shape.setAbsoluteMode("absolute");if("strip"==this.object.style||"loop"==this.object.style)i.moveTo(t[0].x,t[0].y),e.forEach(t.slice(1),function(e){i.lineTo(e.x,e.y)}),"loop"==this.object.style&&i.closePath();else for(var r=0;r<this.cache.length;)i.moveTo(t[r].x,t[r].y),r++,i.lineTo(t[r].x,t[r].y),r++;i.setStroke(this.strokeStyle)}}),t("dojox.gfx3d.Orbit",o.Object,{constructor:function(){this.object=i.clone(o.defaultOrbit)},render:function(t){var i=l.multiply(t,this.matrix),r=[0,Math.PI/4,Math.PI/3],o=l.multiplyPoint(i,this.object.center),n=e.map(r,function(e){return{x:this.center.x+this.radius*Math.cos(e),y:this.center.y+this.radius*Math.sin(e),z:this.center.z}},this.object);n=e.map(n,function(e){return l.multiplyPoint(i,e)});var s=d.normalize(n);n=e.map(n,function(e){return d.substract(e,o)});var u={xx:n[0].x*n[0].y,xy:n[0].y*n[0].y,xz:1,yx:n[1].x*n[1].y,yy:n[1].y*n[1].y,yz:1,zx:n[2].x*n[2].y,zy:n[2].y*n[2].y,zz:1,dx:0,dy:0,dz:0},c=e.map(n,function(e){return-Math.pow(e.x,2)}),h=l.multiplyPoint(l.invert(u),c[0],c[1],c[2]),f=Math.atan2(h.x,1-h.y)/2,m=e.map(n,function(e){return a.multiplyPoint(a.rotate(-f),e.x,e.y)}),p=Math.pow(m[0].x,2),y=Math.pow(m[0].y,2),g=Math.pow(m[1].x,2),v=Math.pow(m[1].y,2),b=Math.sqrt((p*v-y*g)/(v-y)),M=Math.sqrt((p*v-y*g)/(p-g));this.cache={cx:o.x,cy:o.y,rx:b,ry:M,theta:f,normal:s}},draw:function(e){this.shape?this.shape.setShape(this.cache):this.shape=this.renderer.createEllipse(this.cache),this.shape.applyTransform(a.rotateAt(this.cache.theta,this.cache.cx,this.cache.cy)).setStroke(this.strokeStyle).setFill(this.toStdFill(e,this.cache.normal))}}),t("dojox.gfx3d.Path3d",o.Object,{constructor:function(){this.object=i.clone(o.defaultPath3d),this.segments=[],this.absolute=!0,this.last={},this.path=""},_collectArgs:function(e,t){for(var i=0;i<t.length;++i){var r=t[i];"boolean"==typeof r?e.push(r?1:0):"number"==typeof r?e.push(r):r instanceof Array?this._collectArgs(e,r):"x"in r&&"y"in r&&(e.push(r.x),e.push(r.y))}},_validSegments:{m:3,l:3,z:0},_pushSegment:function(e,t){var i,r=this._validSegments[e.toLowerCase()];"number"==typeof r&&(r?t.length>=r&&(i={action:e,args:t.slice(0,t.length-t.length%r)},this.segments.push(i)):(i={action:e,args:[]},this.segments.push(i)))},moveTo:function(){var e=[];return this._collectArgs(e,arguments),this._pushSegment(this.absolute?"M":"m",e),this},lineTo:function(){var e=[];return this._collectArgs(e,arguments),this._pushSegment(this.absolute?"L":"l",e),this},closePath:function(){return this._pushSegment("Z",[]),this},render:function(t){var i=l.multiply(t,this.matrix),r="",a=this._validSegments;e.forEach(this.segments,function(e){r+=e.action;for(var t=0;t<e.args.length;t+=a[e.action.toLowerCase()]){var o=l.multiplyPoint(i,e.args[t],e.args[t+1],e.args[t+2]);r+=" "+o.x+" "+o.y}}),this.cache=r},_draw:function(){return this.parent.createPath(this.cache)}}),t("dojox.gfx3d.Triangles",o.Object,{constructor:function(){this.object=i.clone(o.defaultTriangles)},setObject:function(e,t){return e instanceof Array?this.object=r.makeParameters(this.object,{points:e,style:t}):this.object=r.makeParameters(this.object,e),this},render:function(t){var i=l.multiply(t,this.matrix),r=e.map(this.object.points,function(e){return l.multiplyPoint(i,e)});this.cache=[];var a=r.slice(0,2),o=r[0];if("strip"==this.object.style)e.forEach(r.slice(2),function(e){a.push(e),a.push(a[0]),this.cache.push(a),a=a.slice(1,3)},this);else if("fan"==this.object.style)e.forEach(r.slice(2),function(e){a.push(e),a.push(o),this.cache.push(a),a=[o,e]},this);else for(var n=0;n<r.length;)this.cache.push([r[n],r[n+1],r[n+2],r[n]]),n+=3},draw:function(t){this.cache=c.bsp(this.cache,function(e){return e}),this.shape?this.shape.clear():this.shape=this.renderer.createGroup(),e.forEach(this.cache,function(e){this.shape.createPolyline(e).setStroke(this.strokeStyle).setFill(this.toStdFill(t,d.normalize(e)))},this)},getZOrder:function(){var t=0;return e.forEach(this.cache,function(e){t+=(e[0].z+e[1].z+e[2].z)/3}),this.cache.length>1?t/this.cache.length:0}}),t("dojox.gfx3d.Quads",o.Object,{constructor:function(){this.object=i.clone(o.defaultQuads)},setObject:function(e,t){return this.object=r.makeParameters(this.object,e instanceof Array?{points:e,style:t}:e),this},render:function(t){var i,r=l.multiply(t,this.matrix),a=e.map(this.object.points,function(e){return l.multiplyPoint(r,e)});if(this.cache=[],"strip"==this.object.style){var o=a.slice(0,2);for(i=2;i<a.length;)o=o.concat([a[i],a[i+1],o[0]]),this.cache.push(o),o=o.slice(2,4),i+=2}else for(i=0;i<a.length;)this.cache.push([a[i],a[i+1],a[i+2],a[i+3],a[i]]),i+=4},draw:function(e){this.cache=o.scheduler.bsp(this.cache,function(e){return e}),this.shape?this.shape.clear():this.shape=this.renderer.createGroup();for(var t=0;t<this.cache.length;t++)this.shape.createPolyline(this.cache[t]).setStroke(this.strokeStyle).setFill(this.toStdFill(e,d.normalize(this.cache[t])))},getZOrder:function(){for(var e=0,t=0;t<this.cache.length;t++){var i=this.cache[t];e+=(i[0].z+i[1].z+i[2].z+i[3].z)/4}return this.cache.length>1?e/this.cache.length:0}}),t("dojox.gfx3d.Polygon",o.Object,{constructor:function(){this.object=i.clone(o.defaultPolygon)},setObject:function(e){return this.object=r.makeParameters(this.object,e instanceof Array?{path:e}:e),this},render:function(t){var i=l.multiply(t,this.matrix);this.cache=e.map(this.object.path,function(e){return l.multiplyPoint(i,e)}),this.cache.push(this.cache[0])},draw:function(e){this.shape?this.shape.setShape({points:this.cache}):this.shape=this.renderer.createPolyline({points:this.cache}),this.shape.setStroke(this.strokeStyle).setFill(this.toStdFill(e,l.normalize(this.cache)))},getZOrder:function(){for(var e=0,t=0;t<this.cache.length;t++)e+=this.cache[t].z;return this.cache.length>1?e/this.cache.length:0},getOutline:function(){return this.cache.slice(0,3)}}),t("dojox.gfx3d.Cube",o.Object,{constructor:function(){this.object=i.clone(o.defaultCube),this.polygons=[]},setObject:function(e){this.object=r.makeParameters(this.object,e)},render:function(t){var i=this.object.top,r=this.object.bottom,a={x:r.x,y:i.y,z:i.z},o={x:r.x,y:r.y,z:i.z},n={x:i.x,y:r.y,z:i.z},s={x:i.x,y:i.y,z:r.z},d={x:r.x,y:i.y,z:r.z},u={x:i.x,y:r.y,z:r.z},c=[i,a,o,n,s,d,r,u],h=l.multiply(t,this.matrix),f=e.map(c,function(e){return l.multiplyPoint(h,e)});i=f[0],a=f[1],o=f[2],n=f[3],s=f[4],d=f[5],r=f[6],u=f[7],this.cache=[[i,a,o,n,i],[s,d,r,u,s],[i,n,u,s,i],[n,o,r,u,n],[o,a,d,r,o],[a,i,s,d,a]]},draw:function(e){this.cache=o.scheduler.bsp(this.cache,function(e){return e});var t=this.cache.slice(3);this.shape?this.shape.clear():this.shape=this.renderer.createGroup();for(var i=0;i<t.length;i++)this.shape.createPolyline(t[i]).setStroke(this.strokeStyle).setFill(this.toStdFill(e,d.normalize(t[i])))},getZOrder:function(){var e=this.cache[0][0],t=this.cache[1][2];return(e.z+t.z)/2}}),t("dojox.gfx3d.Cylinder",o.Object,{constructor:function(){this.object=i.clone(o.defaultCylinder)},render:function(t){var i=l.multiply(t,this.matrix),r=[0,Math.PI/4,Math.PI/3],o=l.multiplyPoint(i,this.object.center),n=e.map(r,function(e){return{x:this.center.x+this.radius*Math.cos(e),y:this.center.y+this.radius*Math.sin(e),z:this.center.z}},this.object);n=e.map(n,function(e){return d.substract(l.multiplyPoint(i,e),o)});var u={xx:n[0].x*n[0].y,xy:n[0].y*n[0].y,xz:1,yx:n[1].x*n[1].y,yy:n[1].y*n[1].y,yz:1,zx:n[2].x*n[2].y,zy:n[2].y*n[2].y,zz:1,dx:0,dy:0,dz:0},c=e.map(n,function(e){return-Math.pow(e.x,2)}),h=l.multiplyPoint(l.invert(u),c[0],c[1],c[2]),f=Math.atan2(h.x,1-h.y)/2,m=e.map(n,function(e){return a.multiplyPoint(a.rotate(-f),e.x,e.y)}),p=Math.pow(m[0].x,2),y=Math.pow(m[0].y,2),g=Math.pow(m[1].x,2),v=Math.pow(m[1].y,2),b=Math.sqrt((p*v-y*g)/(v-y)),M=Math.sqrt((p*v-y*g)/(p-g));if(M>b){var x=b;b=M,M=x,f-=Math.PI/2}var _=l.multiplyPoint(i,d.sum(this.object.center,{x:0,y:0,z:this.object.height})),j="constant"==this.fillStyle.type?this.fillStyle.color:s(this.renderer.lighting,this.fillStyle,this.object.center,this.object.radius,Math.PI,2*Math.PI,i);(isNaN(b)||isNaN(M)||isNaN(f))&&(b=this.object.radius,M=0,f=0),this.cache={center:o,top:_,rx:b,ry:M,theta:f,gradient:j}},draw:function(){var e=this.cache,t=d,i=a,r=[e.center,e.top],o=t.substract(e.top,e.center);t.dotProduct(o,this.renderer.lighting.incident)>0&&(r=[e.top,e.center],o=t.substract(e.center,e.top));var n=this.renderer.lighting[this.fillStyle.type](o,this.fillStyle.finish,this.fillStyle.color),s=Math.sqrt(Math.pow(e.center.x-e.top.x,2)+Math.pow(e.center.y-e.top.y,2));this.shape?this.shape.clear():this.shape=this.renderer.createGroup(),this.shape.createPath("").moveTo(0,-e.rx).lineTo(s,-e.rx).lineTo(s,e.rx).lineTo(0,e.rx).arcTo(e.ry,e.rx,0,!0,!0,0,-e.rx).setFill(e.gradient).setStroke(this.strokeStyle).setTransform([i.translate(r[0]),i.rotate(Math.atan2(r[1].y-r[0].y,r[1].x-r[0].x))]),e.rx>0&&e.ry>0&&this.shape.createEllipse({cx:r[1].x,cy:r[1].y,rx:e.rx,ry:e.ry}).setFill(n).setStroke(this.strokeStyle).applyTransform(i.rotateAt(e.theta,r[1]))}}),t("dojox.gfx3d.Viewport",r.Group,{constructor:function(){this.dimension=null,this.objects=[],this.todos=[],this.renderer=this,this.schedule=o.scheduler.zOrder,this.draw=o.drawer.conservative,this.deep=!1,this.lights=[],this.lighting=null},setCameraTransform:function(e){return this.camera=l.clone(e?l.normalize(e):o.identity,!0),this.invalidate(),this},applyCameraRightTransform:function(e){return e?this.setCameraTransform([this.camera,e]):this},applyCameraLeftTransform:function(e){return e?this.setCameraTransform([e,this.camera]):this},applyCameraTransform:function(e){return this.applyCameraRightTransform(e)},setLights:function(e,t,i){this.lights=e instanceof Array?{sources:e,ambient:t,specular:i}:e;var r={x:0,y:0,z:1};return this.lighting=new u.Model(r,this.lights.sources,this.lights.ambient,this.lights.specular),this.invalidate(),this},addLights:function(e){return this.setLights(this.lights.sources.concat(e))},addTodo:function(t){e.every(this.todos,function(e){return e!=t})&&this.todos.push(t)},invalidate:function(){this.deep=!0,this.todos=this.objects},setDimensions:function(e){if(e){var t=i.isString(e.width)?parseInt(e.width):e.width,r=i.isString(e.height)?parseInt(e.height):e.height;if(this.rawNode){var a=this.rawNode.style;a?(a.height=r,a.width=t):(this.rawNode.width=t,this.rawNode.height=r)}this.dimension={width:t,height:r}}else this.dimension=null},render:function(){if(this.todos.length){for(var e=l,t=0;t<this.todos.length;t++)this.todos[t].render(l.normalize([e.cameraRotateXg(180),e.cameraTranslate(0,this.dimension.height,0),this.camera]),this.deep);this.objects=this.schedule(this.objects),this.draw(this.todos,this.objects,this),this.todos=[],this.deep=!1}}}),o.Viewport.nodeType=r.Group.nodeType,o._creators={createEdges:function(e,t){return this.create3DObject(o.Edges,e,t)},createTriangles:function(e,t){return this.create3DObject(o.Triangles,e,t)},createQuads:function(e,t){return this.create3DObject(o.Quads,e,t)},createPolygon:function(e){return this.create3DObject(o.Polygon,e)},createOrbit:function(e){return this.create3DObject(o.Orbit,e)},createCube:function(e){return this.create3DObject(o.Cube,e)},createCylinder:function(e){return this.create3DObject(o.Cylinder,e)},createPath3d:function(e){return this.create3DObject(o.Path3d,e)},createScene:function(){return this.create3DObject(o.Scene)},create3DObject:function(e,t,i){var r=new e;return this.adopt(r),t&&r.setObject(t,i),r},adopt:function(e){return e.renderer=this.renderer,e.parent=this,this.objects.push(e),this.addTodo(e),this},abandon:function(e,t){for(var i=0;i<this.objects.length;++i)this.objects[i]==e&&this.objects.splice(i,1);return e.parent=null,this},setScheduler:function(e){this.schedule=e},setDrawer:function(e){this.draw=e}},i.extend(o.Viewport,o._creators),i.extend(o.Scene,o._creators),delete o._creators,i.extend(r.Surface,{createViewport:function(){var e=this.createObject(o.Viewport,null,!0);return e.setDimensions(this.getDimensions()),e}}),o.Object});//# sourceMappingURL=object.js.map