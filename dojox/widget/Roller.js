//>>built
define("dojox/widget/Roller",["dojo","dijit","dijit/_Widget"],function(e,t){var i=e.declare("dojox.widget.Roller",t._Widget,{delay:2e3,autoStart:!0,itemSelector:"> li",durationIn:400,durationOut:275,_idx:-1,postCreate:function(){this.items||(this.items=[]),e.addClass(this.domNode,"dojoxRoller"),e.query(this.itemSelector,this.domNode).forEach(function(t,i){this.items.push(t.innerHTML),0==i?(this._roller=t,this._idx=0):e.destroy(t)},this),this._roller||(this._roller=e.create("li",null,this.domNode)),this.makeAnims(),this.autoStart&&this.start()},makeAnims:function(){var t=this.domNode;e.mixin(this,{_anim:{"in":e.fadeIn({node:t,duration:this.durationIn}),out:e.fadeOut({node:t,duration:this.durationOut})}}),this._setupConnects()},_setupConnects:function(){var t=this._anim;this.connect(t.out,"onEnd",function(){this._setIndex(this._idx+1),t["in"].play(15)}),this.connect(t["in"],"onEnd",function(){this._timeout=setTimeout(e.hitch(this,"_run"),this.delay)})},start:function(){this.rolling||(this.rolling=!0,this._run())},_run:function(){this._anim.out.gotoPercent(0,!0)},stop:function(){this.rolling=!1;var e=this._anim,t=this._timeout;t&&clearTimeout(t),e["in"].stop(),e.out.stop()},_setIndex:function(e){var t=this.items.length-1;0>e&&(e=t),e>t&&(e=0),this._roller.innerHTML=this.items[e]||"error!",this._idx=e}});return i.RollerSlide=e.declare("dojox.widget.RollerSlide",dojox.widget.Roller,{durationOut:175,makeAnims:function(){var t=this.domNode,i="position",o={top:{end:0,start:25},opacity:1};e.style(t,i,"relative"),e.style(this._roller,i,"absolute"),e.mixin(this,{_anim:{"in":e.animateProperty({node:t,duration:this.durationIn,properties:o}),out:e.fadeOut({node:t,duration:this.durationOut})}}),this._setupConnects()}}),i._Hover=e.declare("dojox.widget._RollerHover",null,{postCreate:function(){this.inherited(arguments),this.connect(this.domNode,"onmouseenter","stop"),this.connect(this.domNode,"onmouseleave","start")}}),i});//# sourceMappingURL=Roller.js.map