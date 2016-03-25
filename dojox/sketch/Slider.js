//>>built
define("dojox/sketch/Slider",["dojo/_base/kernel","dojo/_base/lang","dojo/_base/declare","dijit/form/HorizontalSlider","./_Plugin"],function(e){return e.getObject("sketch",!0,dojox),e.declare("dojox.sketch.Slider",dojox.sketch._Plugin,{_initButton:function(){this.slider=new dijit.form.HorizontalSlider({minimum:5,maximum:100,style:"width:100px;",baseClass:"dijitInline dijitSlider"}),this.slider._movable.node.title='Double Click to "Zoom to Fit"',this.connect(this.slider,"onChange","_setZoom"),this.connect(this.slider.sliderHandle,"ondblclick","_zoomToFit")},_zoomToFit:function(){var e=this.figure.getFit();this.slider.attr("value",this.slider.maximum<e?this.slider.maximum:this.slider.minimum>e?this.slider.minimum:e)},_setZoom:function(e){e&&this.figure&&this.figure.zoom(e)},reset:function(){this.slider.attr("value",this.slider.maximum),this._zoomToFit()},setToolbar:function(e){this._initButton(),e.addChild(this.slider),e._reset2Zoom||(e._reset2Zoom=!0,this.connect(e,"reset","reset"))}}),dojox.sketch.registerTool("Slider",dojox.sketch.Slider),dojox.sketch.Slider});//# sourceMappingURL=Slider.js.map