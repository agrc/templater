//>>built
define("dojox/drawing/ui/Toolbar",["dojo","../library/icons","../util/common","../Drawing","../manager/_registry"],function(e,t,a,i,r){return e.declare("dojox.drawing.ui.Toolbar",[],{constructor:function(t,a){if(t.drawing)this.toolDrawing=t.drawing,this.drawing=this.toolDrawing,this.width=this.toolDrawing.width,this.height=this.toolDrawing.height,this.strSelected=t.selected,this.strTools=t.tools,this.strPlugs=t.plugs,this._mixprops(["padding","margin","size","radius"],t),this.addBack(),this.orient=t.orient?t.orient:!1;else{var o=e.marginBox(a);this.width=o.w,this.height=o.h,this.strSelected=e.attr(a,"selected"),this.strTools=e.attr(a,"tools"),this.strPlugs=e.attr(a,"plugs"),this._mixprops(["padding","margin","size","radius"],a),this.toolDrawing=new i({mode:"ui"},a),this.orient=e.attr(a,"orient")}if(this.horizontal=this.orient?"H"==this.orient:this.width>this.height,this.toolDrawing.ready)this.makeButtons(),!this.strSelected&&this.drawing.defaults.clickMode&&this.drawing.mouse.setCursor("default");else{e.connect(this.toolDrawing,"onSurfaceReady",this,function(){if(e.disconnect(t),this.drawing=r.getRegistered("drawing",e.attr(a,"drawingId")),this.makeButtons(),!this.strSelected&&this.drawing.defaults.clickMode)var t=e.connect(this.drawing,"onSurfaceReady",this,function(){e.disconnect(t),this.drawing.mouse.setCursor("default")})})}},padding:10,margin:5,size:30,radius:3,toolPlugGap:20,strSelected:"",strTools:"",strPlugs:"",makeButtons:function(){this.buttons=[],this.plugins=[];var i=this.padding,o=this.padding,n=this.size,d=this.size,s=this.radius,l=this.margin,m=t,u={place:"BR",size:2,mult:4};if(this.strTools){var h=[],f=r.getRegistered("tool"),c={};for(var y in f){var v=a.abbr(y);if(c[v]=f[y],"all"==this.strTools){h.push(v);var p=r.getRegistered("tool",y);p.secondary&&h.push(p.secondary.name)}}if("all"!=this.strTools){var g=this.strTools.split(",");e.forEach(g,function(t){t=e.trim(t),h.push(t);var a=r.getRegistered("tool",c[t].name);a.secondary&&h.push(a.secondary.name)},this)}e.forEach(h,function(t){t=e.trim(t);var a=!1;if(t.indexOf("Secondary")>-1){var h=t.substring(0,t.indexOf("Secondary")),f=r.getRegistered("tool",c[h].name).secondary,y=f.label;this[t]=f.funct,f.setup&&e.hitch(this,f.setup)();var v=this.toolDrawing.addUI("button",{data:{x:i,y:o,width:n,height:d/2,r:s},toolType:t,secondary:!0,text:y,shadow:u,scope:this,callback:this[t]});f.postSetup&&e.hitch(this,f.postSetup,v)(),a=!0}else var v=this.toolDrawing.addUI("button",{data:{x:i,y:o,width:n,height:d,r:s},toolType:t,icon:m[t],shadow:u,scope:this,callback:"onToolClick"});if(r.register(v,"button"),this.buttons.push(v),this.strSelected==t&&(v.select(),this.selected=v,this.drawing.setTool(v.toolType)),this.horizontal)i+=d+l;else{var p=a?d/2+l:d+l;o+=p}},this)}if(this.horizontal?i+=this.toolPlugGap:o+=this.toolPlugGap,this.strPlugs){var M=[],b=r.getRegistered("plugin"),k={};for(var y in b){var w=a.abbr(y);k[w]=b[y],"all"==this.strPlugs&&M.push(w)}"all"!=this.strPlugs&&(M=this.strPlugs.split(","),e.map(M,function(t){return e.trim(t)})),e.forEach(M,function(t){var a=e.trim(t);if(0!=k[t].button){var h=this.toolDrawing.addUI("button",{data:{x:i,y:o,width:n,height:d,r:s},toolType:a,icon:m[a],shadow:u,scope:this,callback:"onPlugClick"});r.register(h,"button"),this.plugins.push(h),this.horizontal?i+=d+l:o+=d+l}var f={};f=0==k[t].button?{name:this.drawing.stencilTypeMap[t]}:{name:this.drawing.stencilTypeMap[t],options:{button:h}},this.drawing.addPlugin(f)},this)}e.connect(this.drawing,"onRenderStencil",this,"onRenderStencil")},onRenderStencil:function(e){this.drawing.defaults.clickMode&&(this.drawing.mouse.setCursor("default"),this.selected&&this.selected.deselect(),this.selected=null)},addTool:function(){},addPlugin:function(){},addBack:function(){this.toolDrawing.addUI("rect",{data:{x:0,y:0,width:this.width,height:this.size+2*this.padding,fill:"#ffffff",borderWidth:0}})},onToolClick:function(t){this.drawing.defaults.clickMode&&this.drawing.mouse.setCursor("crosshair"),e.forEach(this.buttons,function(e){e.id==t.id?(e.select(),this.selected=e,this.drawing.setTool(t.toolType)):e.secondary||e.deselect()},this)},onPlugClick:function(e){},_mixprops:function(t,a){e.forEach(t,function(t){this[t]=a.tagName?null===e.attr(a,t)?this[t]:e.attr(a,t):void 0===a[t]?this[t]:a[t]},this)}})});//# sourceMappingURL=Toolbar.js.map