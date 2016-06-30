//>>built
define("dojox/charting/widget/SelectableLegend",["dojo/_base/array","dojo/_base/declare","dojo/query","dojo/_base/connect","dojo/_base/Color","./Legend","dijit/form/CheckBox","../action2d/Highlight","dojox/lang/functional","dojox/gfx/fx","dojo/keys","dojo/dom-construct","dojo/dom-prop","dijit/registry"],function(e,t,i,a,r,o,n,d,l,s,h,m,u,f){function c(e){return"mouseenter"==e?"onmouseover":"mouseleave"==e?"onmouseout":"on"+e}var y=t(null,{constructor:function(t){this.legend=t,this.index=0,this.horizontalLength=this._getHrizontalLength(),e.forEach(t.legends,function(e,t){t>0&&i("input",e).attr("tabindex",-1)}),this.firstLabel=i("input",t.legends[0])[0],a.connect(this.firstLabel,"focus",this,function(){this.legend.active=!0}),a.connect(this.legend.domNode,"keydown",this,"_onKeyEvent")},_getHrizontalLength:function(){var e=this.legend.horizontal;return"number"==typeof e?Math.min(e,this.legend.legends.length):e?this.legend.legends.length:1},_onKeyEvent:function(e){if(this.legend.active){if(e.keyCode==h.TAB)return void(this.legend.active=!1);var t=this.legend.legends.length;switch(e.keyCode){case h.LEFT_ARROW:this.index--,this.index<0&&(this.index+=t);break;case h.RIGHT_ARROW:this.index++,this.index>=t&&(this.index-=t);break;case h.UP_ARROW:this.index-this.horizontalLength>=0&&(this.index-=this.horizontalLength);break;case h.DOWN_ARROW:this.index+this.horizontalLength<t&&(this.index+=this.horizontalLength);break;default:return}this._moveToFocus(),Event.stop(e)}},_moveToFocus:function(){i("input",this.legend.legends[this.index])[0].focus()}}),p=t(d,{connect:function(){}}),v=t("dojox.charting.widget.SelectableLegend",o,{outline:!1,transitionFill:null,transitionStroke:null,autoScale:!1,postCreate:function(){this.legends=[],this.legendAnim={},this._cbs=[],this.inherited(arguments)},refresh:function(){this.legends=[],this._clearLabels(),this.inherited(arguments),this._applyEvents(),new y(this)},_clearLabels:function(){for(var e=this._cbs;e.length;)e.pop().destroyRecursive()},_addLabel:function(e,t){this.inherited(arguments);var a=i("td",this.legendBody),r=a[a.length-1];this.legends.push(r);var o=new n({checked:!0});this._cbs.push(o),m.place(o.domNode,r,"first");var d=i("label",r)[0];u.set(d,"for",o.id)},_applyEvents:function(){this.chart.dirty||e.forEach(this.legends,function(t,r){var o,n,d;this._isPie()?(o=this.chart.stack[0],n=o.name,d=this.chart.series[0].name):(o=this.chart.series[r],n=o.plot,d=o.name);var l=f.byNode(i(".dijitCheckBox",t)[0]);l.set("checked",!this._isHidden(n,r)),a.connect(l,"onClick",this,function(e){this.toogle(n,r,!l.get("checked")),e.stopPropagation()});var s=i(".dojoxLegendIcon",t)[0],h=this._getFilledShape(this._surfaces[r].children);e.forEach(["onmouseenter","onmouseleave"],function(e){a.connect(s,e,this,function(e){this._highlight(e,h,r,!l.get("checked"),d,n)})},this)},this)},_isHidden:function(t,i){return this._isPie()?-1!=e.indexOf(this.chart.getPlot(t).runFilter,i):this.chart.series[i].hidden},toogle:function(t,i,a){var r=this.chart.getPlot(t);this._isPie()?-1!=e.indexOf(r.runFilter,i)?a||(r.runFilter=e.filter(r.runFilter,function(e){return e!=i})):a&&r.runFilter.push(i):this.chart.series[i].hidden=a,this.autoScale?this.chart.dirty=!0:r.dirty=!0,this.chart.render()},_highlight:function(t,i,a,r,o,n){if(!r){var d=this._getAnim(n),l=this._isPie(),s=c(t.type),h={shape:i,index:l?"legend"+a:"legend",run:{name:o},type:s};d.process(h),e.forEach(this._getShapes(a,n),function(e,t){var i={shape:e,index:l?a:t,run:{name:o},type:s};d.duration=100,d.process(i)})}},_getShapes:function(t,i){var a=[];if(this._isPie()){var r=0;e.forEach(this.chart.getPlot(i).runFilter,function(e){t>e&&r++}),a.push(this.chart.stack[0].group.children[t-r])}else this._isCandleStick(i)?e.forEach(this.chart.series[t].group.children,function(t){e.forEach(t.children,function(t){e.forEach(t.children,function(e){"line"!=e.shape.type&&a.push(e)})})}):a=this.chart.series[t].group.children;return a},_getAnim:function(e){return this.legendAnim[e]||(this.legendAnim[e]=new p(this.chart,e)),this.legendAnim[e]},_getTransitionFill:function(e){return-1!=this.chart.stack[this.chart.plots[e]].declaredClass.indexOf("dojox.charting.plot2d.Stacked")?this.chart.theme.plotarea.fill:null},_getFilledShape:function(e){for(var t=0;e[t];){if(e[t].getFill())return e[t];t++}return null},_isPie:function(){return"dojox.charting.plot2d.Pie"==this.chart.stack[0].declaredClass},_isCandleStick:function(e){return"dojox.charting.plot2d.Candlesticks"==this.chart.stack[this.chart.plots[e]].declaredClass},destroy:function(){this._clearLabels(),this.inherited(arguments)}});return v});//# sourceMappingURL=SelectableLegend.js.map