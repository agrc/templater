//>>built
define("dojox/geo/charting/widget/Map",["dojo/_base/kernel","dojo/_base/lang","dojo/_base/declare","dojo/_base/html","dojo/dom-geometry","dijit/_Widget","../Map"],function(e,t,i,a,r,o,n){return i("dojox.geo.charting.widget.Map",o,{shapeData:"",dataStore:null,dataBindingAttribute:"",dataBindingValueFunction:null,markerData:"",series:"",adjustMapCenterOnResize:null,adjustMapScaleOnResize:null,animateOnResize:null,onFeatureClick:null,onFeatureOver:null,enableMouseSupport:null,enableTouchSupport:null,enableMouseZoom:null,enableMousePan:null,enableKeyboardSupport:!1,showTooltips:!1,enableFeatureZoom:null,colorAnimationDuration:0,mouseClickThreshold:2,_mouseInteractionSupport:null,_touchInteractionSupport:null,_keyboardInteractionSupport:null,constructor:function(e,t){this.map=null},startup:function(){this.inherited(arguments),this.map&&this.map.fitToMapContents()},postMixInProperties:function(){this.inherited(arguments)},create:function(e,t){this.inherited(arguments)},getInnerMap:function(){return this.map},buildRendering:function(){if(this.inherited(arguments),this.shapeData){if(this.map=new n(this.domNode,this.shapeData),this.markerData&&this.markerData.length>0&&this.map.setMarkerData(this.markerData),this.dataStore&&(this.dataBindingValueFunction&&this.map.setDataBindingValueFunction(this.dataBindingValueFunction),this.map.setDataStore(this.dataStore,this.dataBindingAttribute)),this.series&&this.series.length>0&&this.map.addSeries(this.series),this.onFeatureClick&&(this.map.onFeatureClick=this.onFeatureClick),this.onFeatureOver&&(this.map.onFeatureOver=this.onFeatureOver),this.enableMouseSupport){if(!dojox.geo.charting.MouseInteractionSupport)throw Error("Can't find dojox.geo.charting.MouseInteractionSupport. Didn't you forget to dojo.require() it?");var e={};e.enablePan=this.enableMousePan,e.enableZoom=this.enableMouseZoom,e.mouseClickThreshold=this.mouseClickThreshold,this._mouseInteractionSupport=new dojox.geo.charting.MouseInteractionSupport(this.map,e),this._mouseInteractionSupport.connect()}if(this.enableTouchSupport){if(!dojox.geo.charting.TouchInteractionSupport)throw Error("Can't find dojox.geo.charting.TouchInteractionSupport. Didn't you forget to dojo.require() it?");this._touchInteractionSupport=new dojox.geo.charting.TouchInteractionSupport(this.map,{}),this._touchInteractionSupport.connect()}if(this.enableKeyboardSupport){if(!dojox.geo.charting.KeyboardInteractionSupport)throw Error("Can't find dojox.geo.charting.KeyboardInteractionSupport. Didn't you forget to dojo.require() it?");this._keyboardInteractionSupport=new dojox.geo.charting.KeyboardInteractionSupport(this.map,{}),this._keyboardInteractionSupport.connect()}this.map.showTooltips=this.showTooltips,this.map.enableFeatureZoom=this.enableFeatureZoom,this.map.colorAnimationDuration=this.colorAnimationDuration}},resize:function(e,i){var a;switch(arguments.length){case 0:break;case 1:a=t.mixin({},e),r.setMarginBox(this.domNode,a);break;case 2:a={w:arguments[0],h:arguments[1]},r.setMarginBox(this.domNode,a)}this.map&&this.map.resize(this.adjustMapCenterOnResize,this.adjustMapScaleOnResize,this.animateOnResize)}})});//# sourceMappingURL=Map.js.map