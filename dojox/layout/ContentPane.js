//>>built
define("dojox/layout/ContentPane",["dojo/_base/lang","dojo/_base/xhr","dijit/layout/ContentPane","dojox/html/_base","dojo/_base/declare"],function(e,t,i,a,o){return o("dojox.layout.ContentPane",i,{adjustPaths:!1,cleanContent:!1,renderStyles:!1,executeScripts:!0,scriptHasHooks:!1,ioMethod:t.get,ioArgs:{},onExecError:function(e){},_setContent:function(t){var i=this._contentSetter;return i&&i instanceof a._ContentSetter||(i=this._contentSetter=new a._ContentSetter({node:this.containerNode,_onError:e.hitch(this,this._onError),onContentError:e.hitch(this,function(e){var t=this.onContentError(e);try{this.containerNode.innerHTML=t}catch(e){}})})),this._contentSetterParams={adjustPaths:Boolean(this.adjustPaths&&(this.href||this.referencePath)),referencePath:this.href||this.referencePath,renderStyles:this.renderStyles,executeScripts:this.executeScripts,scriptHasHooks:this.scriptHasHooks,scriptHookReplacement:"dijit.byId('"+this.id+"')"},this.inherited("_setContent",arguments)},destroy:function(){var e=this._contentSetter;e&&e.tearDown(),this.inherited(arguments)}})});//# sourceMappingURL=ContentPane.js.map