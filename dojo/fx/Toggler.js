//>>built
define("dojo/fx/Toggler",["../_base/lang","../_base/declare","../_base/fx","../aspect"],function(e,t,a,i){return t("dojo.fx.Toggler",null,{node:null,showFunc:a.fadeIn,hideFunc:a.fadeOut,showDuration:200,hideDuration:200,constructor:function(t){var a=this;e.mixin(a,t),a.node=t.node,a._showArgs=e.mixin({},t),a._showArgs.node=a.node,a._showArgs.duration=a.showDuration,a.showAnim=a.showFunc(a._showArgs),a._hideArgs=e.mixin({},t),a._hideArgs.node=a.node,a._hideArgs.duration=a.hideDuration,a.hideAnim=a.hideFunc(a._hideArgs),i.after(a.showAnim,"beforeBegin",e.hitch(a.hideAnim,"stop",!0),!0),i.after(a.hideAnim,"beforeBegin",e.hitch(a.showAnim,"stop",!0),!0)},show:function(e){return this.showAnim.play(e||0)},hide:function(e){return this.hideAnim.play(e||0)}})});//# sourceMappingURL=Toggler.js.map