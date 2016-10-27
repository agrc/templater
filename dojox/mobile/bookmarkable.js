//>>built
define("dojox/mobile/bookmarkable",["dojo/_base/array","dojo/_base/connect","dojo/_base/lang","dojo/_base/window","dojo/hash","dijit/registry","./TransitionEvent","./View","./viewRegistry"],function(e,t,i,a,r,o,n,s,l){var d={settingHash:!1,transitionInfo:[],getTransitionInfo:function(e,t){return this.transitionInfo[e.replace(/^#/,"")+":"+t.replace(/^#/,"")]},addTransitionInfo:function(e,t,i){this.transitionInfo[e.replace(/^#/,"")+":"+t.replace(/^#/,"")]=i},findTransitionViews:function(e){if(!e)return[];var t=o.byId(e.replace(/^#/,""));if(!t)return[];for(var i=t.getParent();i;i=i.getParent())i.isVisible&&!i.isVisible()&&(t=i);return[t.getShowingView(),t]},onHashChange:function(e){if(this.settingHash)return void(this.settingHash=!1);var t=this.handleFragIds(e);t.hashchange=!0,new n(a.body(),t).dispatch()},handleFragIds:function(t){var i,a;if(t)for(var r=t.replace(/^#/,"").split(/,/),n=0;n<r.length;n++){var s=o.byId(r[n]);if(!s.isVisible()){for(var d=!0,u=l.getParentView(s);u;u=l.getParentView(u))if(-1===e.indexOf(r,u.id)){d=!1;break}d?(i=this.findTransitionViews(r[n]),2===i.length&&(a=r[n])):e.forEach(s.getSiblingViews(),function(e){e.domNode.style.display=e===s?"":"none"})}}else a=l.initialView.id,i=this.findTransitionViews(a);var h=this.getTransitionInfo(i[0].id,i[1].id),c=1;return h||(h=this.getTransitionInfo(i[1].id,i[0].id),c=-1),{moveTo:"#"+a,transitionDir:h?h.transitionDir*c:1,transition:h?h.transition:"none"}},setFragIds:function(t){var i=e.filter(l.getViews(),function(e){return e.isVisible()});this.settingHash=!0,r(e.map(i,function(e){return e.id}).join(","))}};return t.subscribe("/dojo/hashchange",null,function(){d.onHashChange.apply(d,arguments)}),i.extend(s,{getTransitionInfo:function(){d.getTransitionInfo.apply(d,arguments)},addTransitionInfo:function(){d.addTransitionInfo.apply(d,arguments)},handleFragIds:function(){d.handleFragIds.apply(d,arguments)},setFragIds:function(){d.setFragIds.apply(d,arguments)}}),d});//# sourceMappingURL=bookmarkable.js.map