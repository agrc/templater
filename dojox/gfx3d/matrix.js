//>>built
define("dojox/gfx3d/matrix",["dojo/_base/lang","./_base"],function(e,t){return t.matrix={_degToRad:function(e){return Math.PI*e/180},_radToDeg:function(e){return e/Math.PI*180}},t.matrix.Matrix3D=function(i){if(i)if("number"==typeof i)this.xx=this.yy=this.zz=i;else if(i instanceof Array){if(i.length>0){for(var a=t.matrix.normalize(i[0]),r=1;r<i.length;++r){var o=a,n=t.matrix.normalize(i[r]);a=new t.matrix.Matrix3D,a.xx=o.xx*n.xx+o.xy*n.yx+o.xz*n.zx,a.xy=o.xx*n.xy+o.xy*n.yy+o.xz*n.zy,a.xz=o.xx*n.xz+o.xy*n.yz+o.xz*n.zz,a.yx=o.yx*n.xx+o.yy*n.yx+o.yz*n.zx,a.yy=o.yx*n.xy+o.yy*n.yy+o.yz*n.zy,a.yz=o.yx*n.xz+o.yy*n.yz+o.yz*n.zz,a.zx=o.zx*n.xx+o.zy*n.yx+o.zz*n.zx,a.zy=o.zx*n.xy+o.zy*n.yy+o.zz*n.zy,a.zz=o.zx*n.xz+o.zy*n.yz+o.zz*n.zz,a.dx=o.xx*n.dx+o.xy*n.dy+o.xz*n.dz+o.dx,a.dy=o.yx*n.dx+o.yy*n.dy+o.yz*n.dz+o.dy,a.dz=o.zx*n.dx+o.zy*n.dy+o.zz*n.dz+o.dz}e.mixin(this,a)}}else e.mixin(this,i)},e.extend(t.matrix.Matrix3D,{xx:1,xy:0,xz:0,yx:0,yy:1,yz:0,zx:0,zy:0,zz:1,dx:0,dy:0,dz:0}),e.mixin(t.matrix,{identity:new t.matrix.Matrix3D,translate:function(e,i,a){return arguments.length>1?new t.matrix.Matrix3D({dx:e,dy:i,dz:a}):new t.matrix.Matrix3D({dx:e.x,dy:e.y,dz:e.z})},scale:function(e,i,a){return arguments.length>1?new t.matrix.Matrix3D({xx:e,yy:i,zz:a}):"number"==typeof e?new t.matrix.Matrix3D({xx:e,yy:e,zz:e}):new t.matrix.Matrix3D({xx:e.x,yy:e.y,zz:e.z})},rotateX:function(e){var i=Math.cos(e),a=Math.sin(e);return new t.matrix.Matrix3D({yy:i,yz:-a,zy:a,zz:i})},rotateXg:function(e){return t.matrix.rotateX(t.matrix._degToRad(e))},rotateY:function(e){var i=Math.cos(e),a=Math.sin(e);return new t.matrix.Matrix3D({xx:i,xz:a,zx:-a,zz:i})},rotateYg:function(e){return t.matrix.rotateY(t.matrix._degToRad(e))},rotateZ:function(e){var i=Math.cos(e),a=Math.sin(e);return new t.matrix.Matrix3D({xx:i,xy:-a,yx:a,yy:i})},rotateZg:function(e){return t.matrix.rotateZ(t.matrix._degToRad(e))},cameraTranslate:function(e,i,a){return arguments.length>1?new t.matrix.Matrix3D({dx:-e,dy:-i,dz:-a}):new t.matrix.Matrix3D({dx:-e.x,dy:-e.y,dz:-e.z})},cameraRotateX:function(e){var i=Math.cos(-e),a=Math.sin(-e);return new t.matrix.Matrix3D({yy:i,yz:-a,zy:a,zz:i})},cameraRotateXg:function(e){return t.matrix.rotateX(t.matrix._degToRad(e))},cameraRotateY:function(e){var i=Math.cos(-e),a=Math.sin(-e);return new t.matrix.Matrix3D({xx:i,xz:a,zx:-a,zz:i})},cameraRotateYg:function(e){return t.matrix.rotateY(dojox.gfx3d.matrix._degToRad(e))},cameraRotateZ:function(e){var i=Math.cos(-e),a=Math.sin(-e);return new t.matrix.Matrix3D({xx:i,xy:-a,yx:a,yy:i})},cameraRotateZg:function(e){return t.matrix.rotateZ(t.matrix._degToRad(e))},normalize:function(e){return e instanceof t.matrix.Matrix3D?e:new t.matrix.Matrix3D(e)},clone:function(e){var i=new t.matrix.Matrix3D;for(var a in e)"number"==typeof e[a]&&"number"==typeof i[a]&&i[a]!=e[a]&&(i[a]=e[a]);return i},invert:function(e){var i=t.matrix.normalize(e),a=i.xx*i.yy*i.zz+i.xy*i.yz*i.zx+i.xz*i.yx*i.zy-i.xx*i.yz*i.zy-i.xy*i.yx*i.zz-i.xz*i.yy*i.zx,r=new t.matrix.Matrix3D({xx:(i.yy*i.zz-i.yz*i.zy)/a,xy:(i.xz*i.zy-i.xy*i.zz)/a,xz:(i.xy*i.yz-i.xz*i.yy)/a,yx:(i.yz*i.zx-i.yx*i.zz)/a,yy:(i.xx*i.zz-i.xz*i.zx)/a,yz:(i.xz*i.yx-i.xx*i.yz)/a,zx:(i.yx*i.zy-i.yy*i.zx)/a,zy:(i.xy*i.zx-i.xx*i.zy)/a,zz:(i.xx*i.yy-i.xy*i.yx)/a,dx:-1*(i.xy*i.yz*i.dz+i.xz*i.dy*i.zy+i.dx*i.yy*i.zz-i.xy*i.dy*i.zz-i.xz*i.yy*i.dz-i.dx*i.yz*i.zy)/a,dy:(i.xx*i.yz*i.dz+i.xz*i.dy*i.zx+i.dx*i.yx*i.zz-i.xx*i.dy*i.zz-i.xz*i.yx*i.dz-i.dx*i.yz*i.zx)/a,dz:-1*(i.xx*i.yy*i.dz+i.xy*i.dy*i.zx+i.dx*i.yx*i.zy-i.xx*i.dy*i.zy-i.xy*i.yx*i.dz-i.dx*i.yy*i.zx)/a});return r},_multiplyPoint:function(e,t,i,a){return{x:e.xx*t+e.xy*i+e.xz*a+e.dx,y:e.yx*t+e.yy*i+e.yz*a+e.dy,z:e.zx*t+e.zy*i+e.zz*a+e.dz}},multiplyPoint:function(e,i,a,r){var o=t.matrix.normalize(e);return"number"==typeof i&&"number"==typeof a&&"number"==typeof r?t.matrix._multiplyPoint(o,i,a,r):t.matrix._multiplyPoint(o,i.x,i.y,i.z)},multiply:function(e){for(var i=t.matrix.normalize(e),a=1;a<arguments.length;++a){var r=i,o=t.matrix.normalize(arguments[a]);i=new t.matrix.Matrix3D,i.xx=r.xx*o.xx+r.xy*o.yx+r.xz*o.zx,i.xy=r.xx*o.xy+r.xy*o.yy+r.xz*o.zy,i.xz=r.xx*o.xz+r.xy*o.yz+r.xz*o.zz,i.yx=r.yx*o.xx+r.yy*o.yx+r.yz*o.zx,i.yy=r.yx*o.xy+r.yy*o.yy+r.yz*o.zy,i.yz=r.yx*o.xz+r.yy*o.yz+r.yz*o.zz,i.zx=r.zx*o.xx+r.zy*o.yx+r.zz*o.zx,i.zy=r.zx*o.xy+r.zy*o.yy+r.zz*o.zy,i.zz=r.zx*o.xz+r.zy*o.yz+r.zz*o.zz,i.dx=r.xx*o.dx+r.xy*o.dy+r.xz*o.dz+r.dx,i.dy=r.yx*o.dx+r.yy*o.dy+r.yz*o.dz+r.dy,i.dz=r.zx*o.dx+r.zy*o.dy+r.zz*o.dz+r.dz}return i},_project:function(e,t,i,a){return{x:e.xx*t+e.xy*i+e.xz*a+e.dx,y:e.yx*t+e.yy*i+e.yz*a+e.dy,z:e.zx*t+e.zy*i+e.zz*a+e.dz}},project:function(e,i,a,r){var o=t.matrix.normalize(e);return"number"==typeof i&&"number"==typeof a&&"number"==typeof r?t.matrix._project(o,i,a,r):t.matrix._project(o,i.x,i.y,i.z)}}),t.Matrix3D=t.matrix.Matrix3D,t.matrix});//# sourceMappingURL=matrix.js.map