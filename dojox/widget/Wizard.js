//>>built
require({cache:{"url:dojox/widget/Wizard/Wizard.html":'<div class="dojoxWizard" dojoAttachPoint="wizardNode">\n    <div class="dojoxWizardContainer" dojoAttachPoint="containerNode"></div>\n    <div class="dojoxWizardButtons" dojoAttachPoint="wizardNav">\n        <button dojoType="dijit.form.Button" type="button" dojoAttachPoint="previousButton">${previousButtonLabel}</button>\n        <button dojoType="dijit.form.Button" type="button" dojoAttachPoint="nextButton">${nextButtonLabel}</button>\n        <button dojoType="dijit.form.Button" type="button" dojoAttachPoint="doneButton" style="display:none">${doneButtonLabel}</button>\n        <button dojoType="dijit.form.Button" type="button" dojoAttachPoint="cancelButton">${cancelButtonLabel}</button>\n    </div>\n</div>\n'}}),define("dojox/widget/Wizard",["dojo/_base/lang","dojo/_base/declare","dojo/_base/connect","dijit/layout/StackContainer","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dojo/i18n","dojo/text!./Wizard/Wizard.html","dojo/i18n!dijit/nls/common","dojo/i18n!./nls/Wizard","dijit/form/Button"],function(e,t,i,a,o,r,n,s){var l=t("dojox.widget.Wizard",[a,o,r],{templateString:s,nextButtonLabel:"",previousButtonLabel:"",cancelButtonLabel:"",doneButtonLabel:"",cancelFunction:null,hideDisabled:!1,postMixInProperties:function(){this.inherited(arguments);var t,i=e.mixin({cancel:n.getLocalization("dijit","common",this.lang).buttonCancel},n.getLocalization("dojox.widget","Wizard",this.lang));for(t in i)this[t+"ButtonLabel"]||(this[t+"ButtonLabel"]=i[t])},startup:function(){this._started||(this.inherited(arguments),this.connect(this.nextButton,"onClick","_forward"),this.connect(this.previousButton,"onClick","back"),this.cancelFunction?(e.isString(this.cancelFunction)&&(this.cancelFunction=e.getObject(this.cancelFunction)),this.connect(this.cancelButton,"onClick",this.cancelFunction)):this.cancelButton.domNode.style.display="none",this.connect(this.doneButton,"onClick","done"),this._subscription=i.subscribe(this.id+"-selectChild",e.hitch(this,"_checkButtons")),this._started=!0)},resize:function(){this.inherited(arguments),this._checkButtons()},_checkButtons:function(){var e=this.selectedChildWidget,t=e.isLastChild||this.nextButton.get("disabled");this.nextButton.set("disabled",t),this._setButtonClass(this.nextButton),e.doneFunction?(this.doneButton.domNode.style.display="",t&&(this.nextButton.domNode.style.display="none")):this.doneButton.domNode.style.display="none",this.previousButton.set("disabled",!this.selectedChildWidget.canGoBack),this._setButtonClass(this.previousButton)},_setButtonClass:function(e){e.domNode.style.display=this.hideDisabled&&e.disabled?"none":""},_forward:function(){this.selectedChildWidget._checkPass()&&this.forward()},done:function(){this.selectedChildWidget.done()},destroy:function(){i.unsubscribe(this._subscription),this.inherited(arguments)}});return l});//# sourceMappingURL=Wizard.js.map