//>>built
define("dijit/Destroyable",["dojo/_base/array","dojo/aspect","dojo/_base/declare"],function(e,t,o){return o("dijit.Destroyable",null,{destroy:function(e){this._destroyed=!0},own:function(){var o=["destroyRecursive","destroy","remove"];return e.forEach(arguments,function(n){function a(){d.remove(),e.forEach(r,function(e){e.remove()})}var i,d=t.before(this,"destroy",function(e){n[i](e)}),r=[];n.then?(i="cancel",n.then(a,a)):e.forEach(o,function(e){"function"==typeof n[e]&&(i||(i=e),r.push(t.after(n,e,a,!0)))})},this),arguments}})});//# sourceMappingURL=Destroyable.js.map