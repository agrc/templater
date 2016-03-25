//>>built
define("dojox/mobile/app/StageController",["dojo","dijit","dojox","dojo/require!dojox/mobile/app/SceneController"],function(e,t,i){e.provide("dojox.mobile.app.StageController"),e.experimental("dojox.mobile.app.StageController"),e.require("dojox.mobile.app.SceneController"),e.declare("dojox.mobile.app.StageController",null,{scenes:null,effect:"fade",constructor:function(t){this.domNode=t,this.scenes=[],e.config.mobileAnim&&(this.effect=e.config.mobileAnim)},getActiveSceneController:function(){return this.scenes[this.scenes.length-1]},pushScene:function(t,a){if(!this._opInProgress){this._opInProgress=!0;var r=e.create("div",{"class":"scene-wrapper",style:{visibility:"hidden"}},this.domNode),o=new i.mobile.app.SceneController({},r);this.scenes.length>0&&this.scenes[this.scenes.length-1].assistant.deactivate(),this.scenes.push(o);var n=this;e.forEach(this.scenes,this.setZIndex),o.stageController=this,o.init(t,a).addCallback(function(){1==n.scenes.length?(o.domNode.style.visibility="visible",n.scenes[n.scenes.length-1].assistant.activate(a),n._opInProgress=!1):n.scenes[n.scenes.length-2].performTransition(n.scenes[n.scenes.length-1].domNode,1,n.effect,null,function(){n.scenes[n.scenes.length-1].assistant.activate(a),n._opInProgress=!1})})}},setZIndex:function(t,i){e.style(t.domNode,"zIndex",i+1)},popScene:function(e){if(!this._opInProgress){var t=this;this.scenes.length>1&&(this._opInProgress=!0,this.scenes[t.scenes.length-2].assistant.activate(e),this.scenes[t.scenes.length-1].performTransition(t.scenes[this.scenes.length-2].domNode,-1,this.effect,null,function(){t._destroyScene(t.scenes[t.scenes.length-1]),t.scenes.splice(t.scenes.length-1,1),t._opInProgress=!1}))}},popScenesTo:function(e,t){if(!this._opInProgress){for(;this.scenes.length>2&&this.scenes[this.scenes.length-2].sceneName!=e;)this._destroyScene(this.scenes[this.scenes.length-2]),this.scenes.splice(this.scenes.length-2,1);this.popScene(t)}},_destroyScene:function(e){e.assistant.deactivate(),e.assistant.destroy(),e.destroyRecursive()}})});//# sourceMappingURL=StageController.js.map