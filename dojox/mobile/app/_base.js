//>>built
define("dojox/mobile/app/_base",["dojo","dijit","dojox","dojo/require!dijit/_base,dijit/_WidgetBase,dojox/mobile,dojox/mobile/parser,dojox/mobile/Button,dojox/mobile/app/_event,dojox/mobile/app/_Widget,dojox/mobile/app/StageController,dojox/mobile/app/SceneController,dojox/mobile/app/SceneAssistant,dojox/mobile/app/AlertDialog,dojox/mobile/app/List,dojox/mobile/app/ListSelector,dojox/mobile/app/TextBox,dojox/mobile/app/ImageView,dojox/mobile/app/ImageThumbView"],function(e,t,i){e.provide("dojox.mobile.app._base"),e.experimental("dojox.mobile.app._base"),e.require("dijit._base"),e.require("dijit._WidgetBase"),e.require("dojox.mobile"),e.require("dojox.mobile.parser"),e.require("dojox.mobile.Button"),e.require("dojox.mobile.app._event"),e.require("dojox.mobile.app._Widget"),e.require("dojox.mobile.app.StageController"),e.require("dojox.mobile.app.SceneController"),e.require("dojox.mobile.app.SceneAssistant"),e.require("dojox.mobile.app.AlertDialog"),e.require("dojox.mobile.app.List"),e.require("dojox.mobile.app.ListSelector"),e.require("dojox.mobile.app.TextBox"),e.require("dojox.mobile.app.ImageView"),e.require("dojox.mobile.app.ImageThumbView"),function(){function t(i,a){var n,o;do if(n=i.pop(),n.source)o=n.source;else{if(!n.module)return;o=e.moduleUrl(n.module)+".js"}while(i.length>0&&r[o]);return i.length<1&&r[o]?void a():void e.xhrGet({url:o,sync:!1}).addCallbacks(function(n){e.eval(n),r[o]=!0,i.length>0?t(i,a):a()},function(){})}var a,n,o,r={},s=[],l=function(){a=new i.mobile.app.StageController(o);var t={id:"com.test.app",version:"1.0.0",initialScene:"main"};if(e.global.appInfo&&e.mixin(t,e.global.appInfo),n=i.mobile.app.info=t,n.title){e.query("head title")[0]||e.create("title",{},e.query("head")[0]);document.title=n.title}a.pushScene(n.initialScene)},d=function(){var t=!1;e.global.BackButton?(BackButton.override(),e.connect(document,"backKeyDown",function(t){e.publish("/dojox/mobile/app/goback")}),t=!0):e.global.Mojo,t&&e.addClass(e.body(),"mblNativeBack")};e.mixin(i.mobile.app,{init:function(n){o=n||e.body(),i.mobile.app.STAGE_CONTROLLER_ACTIVE=!0,e.subscribe("/dojox/mobile/app/goback",function(){a.popScene()}),e.subscribe("/dojox/mobile/app/alert",function(e){i.mobile.app.getActiveSceneController().showAlertDialog(e)}),e.subscribe("/dojox/mobile/app/pushScene",function(e,t){a.pushScene(e,t||{})}),e.xhrGet({url:"view-resources.json",load:function(i){var a=[];if(i){s=i=e.fromJson(i);for(var n=0;n<i.length;n++)i[n].scene||a.push(i[n])}a.length>0?t(a,l):l()},error:l}),d()},getActiveSceneController:function(){return a.getActiveSceneController()},getStageController:function(){return a},loadResources:function(e,i){t(e,i)},loadResourcesForScene:function(e,i){for(var a=[],n=0;n<s.length;n++)s[n].scene==e&&a.push(s[n]);a.length>0?t(a,i):i()},resolveTemplate:function(e){return"app/views/"+e+"/"+e+"-scene.html"},resolveAssistant:function(e){return"app/assistants/"+e+"-assistant.js"}})}()});//# sourceMappingURL=_base.js.map