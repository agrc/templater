//>>built
define("dojox/widget/DynamicTooltip",["dojo","dijit","dojox","dojo/i18n!dijit/nls/loading","dojo/require!dijit/Tooltip"],function(e,t,i){e.provide("dojox.widget.DynamicTooltip"),e.experimental("dojox.widget.DynamicTooltip"),e.require("dijit.Tooltip"),e.requireLocalization("dijit","loading"),e.declare("dojox.widget.DynamicTooltip",t.Tooltip,{hasLoaded:!1,href:"",label:"",preventCache:!1,postMixInProperties:function(){this.inherited(arguments),this._setLoadingLabel()},_setLoadingLabel:function(){this.href&&(this.label=e.i18n.getLocalization("dijit","loading",this.lang).loadingState)},_setHrefAttr:function(e){this.href=e,this.hasLoaded=!1},loadContent:function(t){!this.hasLoaded&&this.href&&(this._setLoadingLabel(),this.hasLoaded=!0,e.xhrGet({url:this.href,handleAs:"text",tooltipWidget:this,load:function(e,i){this.tooltipWidget.label=e,this.tooltipWidget.close(),this.tooltipWidget.open(t)},preventCache:this.preventCache}))},refresh:function(){this.hasLoaded=!1},open:function(e){e=e||this._connectNodes&&this._connectNodes[0],e&&(this.loadContent(e),this.inherited(arguments))}})});//# sourceMappingURL=DynamicTooltip.js.map