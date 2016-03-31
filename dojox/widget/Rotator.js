//>>built
define("dojox/widget/Rotator",["dojo/aspect","dojo/_base/declare","dojo/_base/Deferred","dojo/_base/lang","dojo/_base/array","dojo/_base/fx","dojo/dom","dojo/dom-attr","dojo/dom-construct","dojo/dom-geometry","dojo/dom-style","dojo/topic","dojo/on","dojo/parser","dojo/query","dojo/fx/easing","dojo/NodeList-dom"],function(aspect,declare,Deferred,lang,array,fx,dom,domAttr,domConstruct,domGeometry,domStyle,topic,on,parser,query){var _defaultTransition="dojox.widget.rotator.swap",_defaultTransitionDuration=500,_displayStr="display",_noneStr="none",_zIndex="zIndex",Rotator=declare("dojox.widget.Rotator",null,{transition:_defaultTransition,transitionParams:"duration:"+_defaultTransitionDuration,panes:null,constructor:function(params,node){lang.mixin(this,params);var _t=this,t=_t.transition,tt=_t._transitions={},idm=_t._idMap={},tp=_t.transitionParams=eval("({ "+_t.transitionParams+" })"),node=_t._domNode=dom.byId(node),cb=_t._domNodeContentBox=domGeometry.getContentBox(node),p={left:0,top:0},warn=function(e,t){};_t.id=node.id||(new Date).getTime(),"static"==domStyle.get(node,"position")&&domStyle.set(node,"position","relative"),tt[t]=lang.getObject(t),tt[t]||(warn(t,_defaultTransition),tt[_t.transition=_defaultTransition]=lang.getObject(_defaultTransition)),tp.duration||(tp.duration=_defaultTransitionDuration),array.forEach(_t.panes,function(e){domConstruct.create("div",e,node)});var pp=_t.panes=[];query("> *",node).forEach(function(n,i){var q={node:n,idx:i,params:lang.mixin({},tp,eval("({ "+(domAttr.get(n,"transitionParams")||"")+" })"))},r=q.trans=domAttr.get(n,"transition")||_t.transition;array.forEach(["id","title","duration","waitForEvent"],function(e){q[e]=domAttr.get(n,e)}),q.id&&(idm[q.id]=i),tt[r]||(tt[r]=lang.getObject(r))||warn(r,q.trans=_t.transition),p.position="absolute",p.display=_noneStr,(null==_t.idx||domAttr.get(n,"selected"))&&(null!=_t.idx&&domStyle.set(pp[_t.idx].node,_displayStr,_noneStr),_t.idx=i,p.display=""),domStyle.set(n,p),query("> script[type^='dojo/method']",n).orphan().forEach(function(e){var t=domAttr.get(e,"event");t&&(q[t]=parser._functionFromScript(e))}),pp.push(q)}),_t._controlSub=topic.subscribe(_t.id+"/rotator/control",lang.hitch(_t,this.control))},destroy:function(){array.forEach([this._controlSub,this.wfe],function(e){e.remove()}),domConstruct.destroy(this._domNode)},next:function(){return this.go(this.idx+1)},prev:function(){return this.go(this.idx-1)},go:function(e){var t=this,i=t.idx,a=t.panes,o=a.length,n=t._idMap[e];if(t._resetWaitForEvent(),e=null!=n?n:e||0,e=o>e?0>e?o-1:e:0,e==i||t.anim)return null;var r=a[i],s=a[e];domStyle.set(r.node,_zIndex,2),domStyle.set(s.node,_zIndex,1);var d={current:r,next:s,rotator:t},l=t.anim=t._transitions[s.trans](lang.mixin({rotatorBox:t._domNodeContentBox},d,s.params));if(l){var h=new Deferred,u=s.waitForEvent,c=aspect.after(l,"onEnd",function(){domStyle.set(r.node,{display:_noneStr,left:0,opacity:1,top:0,zIndex:0}),c.remove(),t.anim=null,t.idx=e,r.onAfterOut&&r.onAfterOut(d),s.onAfterIn&&s.onAfterIn(d),t.onUpdate("onAfterTransition"),u||(t._resetWaitForEvent(),h.callback())},!0);return t.wfe=u?topic.subscribe(u,function(){t._resetWaitForEvent(),h.callback(!0)}):null,t.onUpdate("onBeforeTransition"),r.onBeforeOut&&r.onBeforeOut(d),s.onBeforeIn&&s.onBeforeIn(d),l.play(),h}},onUpdate:function(e,t){topic.publish(this.id+"/rotator/update",e,this,t||{})},_resetWaitForEvent:function(){this.wfe&&(this.wfe.remove(),delete this.wfe)},control:function(e){var t=lang._toArray(arguments),i=this;if(t.shift(),i._resetWaitForEvent(),i[e]){var a=i[e].apply(i,t);a&&a.addCallback(function(){i.onUpdate(e)}),i.onManualChange(e)}},resize:function(e,t){var i=this._domNodeContentBox={w:e,h:t};domGeometry.setContentSize(this._domNode,i),array.forEach(this.panes,function(e){domGeometry.setContentSize(e.node,i)})},onManualChange:function(){}});return lang.setObject(_defaultTransition,function(e){return new fx.Animation({play:function(){domStyle.set(e.current.node,_displayStr,_noneStr),domStyle.set(e.next.node,_displayStr,""),this._fire("onEnd")}})}),Rotator});//# sourceMappingURL=Rotator.js.map