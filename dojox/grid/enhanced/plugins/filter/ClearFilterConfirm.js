//>>built
require({cache:{"url:dojox/grid/enhanced/templates/ClearFilterConfirmPane.html":'<div class="dojoxGridClearFilterConfirm">\n	<div class="dojoxGridClearFilterMsg">\n		${_clearFilterMsg}\n	</div>\n	<div class="dojoxGridClearFilterBtns" dojoAttachPoint="btnsNode">\n		<span dojoType="dijit.form.Button" label="${_cancelBtnLabel}" dojoAttachPoint="cancelBtn" dojoAttachEvent="onClick:_onCancel"></span>\n		<span dojoType="dijit.form.Button" label="${_clearBtnLabel}" dojoAttachPoint="clearBtn" dojoAttachEvent="onClick:_onClear"></span>\n	</div>\n</div>\n'}}),define("dojox/grid/enhanced/plugins/filter/ClearFilterConfirm",["dojo/_base/declare","dijit/_Widget","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dojo/text!../../templates/ClearFilterConfirmPane.html"],function(e,t,i,a,r){return e("dojox.grid.enhanced.plugins.filter.ClearFilterConfirm",[t,i,a],{templateString:r,widgetsInTemplate:!0,plugin:null,postMixInProperties:function(){var e=this.plugin.nls;this._clearBtnLabel=e.clearButton,this._cancelBtnLabel=e.cancelButton,this._clearFilterMsg=e.clearFilterMsg},postCreate:function(){this.inherited(arguments),this.cancelBtn.domNode.setAttribute("aria-label",this.plugin.nls.waiCancelButton),this.clearBtn.domNode.setAttribute("aria-label",this.plugin.nls.waiClearButton)},uninitialize:function(){this.plugin=null},_onCancel:function(){this.plugin.clearFilterDialog.hide()},_onClear:function(){this.plugin.clearFilterDialog.hide(),this.plugin.filterDefDialog.clearFilter(this.plugin.filterDefDialog._clearWithoutRefresh)}})});//# sourceMappingURL=ClearFilterConfirm.js.map