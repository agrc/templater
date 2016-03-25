//>>built
define("dojox/drawing/tools/Ellipse",["dojo/_base/lang","../util/oo","../manager/_registry","../stencil/Ellipse"],function(e,t,a,i){var r=t.declare(i,function(){},{draws:!0,onDrag:function(e){var t=e.start,a=e,i=t.x<a.x?t.x:a.x,r=t.y<a.y?t.y:a.y,o=t.x<a.x?a.x-t.x:t.x-a.x,n=t.y<a.y?a.y-t.y:t.y-a.y;this.keys.shift&&(o=n=Math.max(o,n)),this.keys.alt?(0>r-n&&(n=r),0>i-o&&(o=i)):(i+=o/2,r+=n/2,o/=2,n/=2),this.points=[{x:i-o,y:r-n},{x:i+o,y:r-n},{x:i+o,y:r+n},{x:i-o,y:r+n}],this.render()},onUp:function(e){if(!this.created&&this._downOnCanvas){if(this._downOnCanvas=!1,this.shape){var t=this.pointsToData();if(2*t.rx<this.minimumSize&&2*t.ry<this.minimumSize)return void this.remove(this.shape,this.hit)}else{var a=e.start,i=2*this.minimumSize;this.data={cx:a.x+i,cy:a.y+i,rx:i,ry:i},this.dataToPoints(),this.render()}this.onRender(this)}}});return e.setObject("dojox.drawing.tools.Ellipse",r),r.setup={name:"dojox.drawing.tools.Ellipse",tooltip:"Ellipse Tool",iconClass:"iconEllipse"},a.register(r.setup,"tool"),r});//# sourceMappingURL=Ellipse.js.map