//>>built
define("dojox/mobile/app/_base",["dojo","dijit","dojox","dojo/require!dijit/_base,dijit/_WidgetBase,dojox/mobile,dojox/mobile/parser,dojox/mobile/Button,dojox/mobile/app/_event,dojox/mobile/app/_Widget,dojox/mobile/app/StageController,dojox/mobile/app/SceneController,dojox/mobile/app/SceneAssistant,dojox/mobile/app/AlertDialog,dojox/mobile/app/List,dojox/mobile/app/ListSelector,dojox/mobile/app/TextBox,dojox/mobile/app/ImageView,dojox/mobile/app/ImageThumbView"],function(e,t,i){e.provide("dojox.mobile.app._base"),e.experimental("dojox.mobile.app._base"),e.require("dijit._base"),e.require("dijit._WidgetBase"),e.require("dojox.mobile"),e.require("dojox.mobile.parser"),e.require("dojox.mobile.Button"),e.require("dojox.mobile.app._event"),e.require("dojox.mobile.app._Widget"),e.require("dojox.mobile.app.StageController"),e.require("dojox.mobile.app.SceneController"),e.require("dojox.mobile.app.SceneAssistant"),e.require("dojox.mobile.app.AlertDialog"),e.require("dojox.mobile.app.List"),e.require("dojox.mobile.app.ListSelector"),e.require("dojox.mobile.app.TextBox"),e.require("dojox.mobile.app.ImageView"),e.require("dojox.mobile.app.ImageThumbView"),function(){function t(i,a){var o,n;do{if(o=i.pop(),o.source)n=o.source;else{if(!o.module)return;n=e.moduleUrl(o.module)+".js"}}while(i.length>0&&r[n]);if(i.length<1&&r[n])return void a();e.xhrGet({url:n,sync:!1}).addCallbacks(function(o){e.eval(o),r[n]=!0,i.length>0?t(i,a):a()},function(){})}var a,o,n,r={},s=[],l=function(){a=new i.mobile.app.StageController(n);var t={id:"com.test.app",version:"1.0.0",initialScene:"main"};if(e.global.appInfo&&e.mixin(t,e.global.appInfo),o=i.mobile.app.info=t,o.title){e.query("head title")[0]||e.create("title",{},e.query("head")[0]);document.title=o.title}a.pushScene(o.initialScene)},d=function(){var t=!1;e.global.BackButton?(BackButton.override(),e.connect(document,"backKeyDown",function(t){e.publish("/dojox/mobile/app/goback")}),t=!0):e.global.Mojo,t&&e.addClass(e.body(),"mblNativeBack")};e.mixin(i.mobile.app,{init:function(o){n=o||e.body(),i.mobile.app.STAGE_CONTROLLER_ACTIVE=!0,e.subscribe("/dojox/mobile/app/goback",function(){a.popScene()}),e.subscribe("/dojox/mobile/app/alert",function(e){i.mobile.app.getActiveSceneController().showAlertDialog(e)}),e.subscribe("/dojox/mobile/app/pushScene",function(e,t){a.pushScene(e,t||{})}),e.xhrGet({url:"view-resources.json",load:function(i){var a=[];if(i){s=i=e.fromJson(i);for(var o=0;o<i.length;o++)i[o].scene||a.push(i[o])}a.length>0?t(a,l):l()},error:l}),d()},getActiveSceneController:function(){return a.getActiveSceneController()},getStageController:function(){return a},loadResources:function(e,i){t(e,i)},loadResourcesForScene:function(e,i){for(var a=[],o=0;o<s.length;o++)s[o].scene==e&&a.push(s[o]);a.length>0?t(a,i):i()},resolveTemplate:function(e){return"app/views/"+e+"/"+e+"-scene.html"},resolveAssistant:function(e){return"app/assistants/"+e+"-assistant.js"}})}()});//# sourceMappingURL=_base.js.map