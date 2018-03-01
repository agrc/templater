//>>built
require({cache:{"url:dojox/grid/enhanced/templates/FilterDefPane.html":'<div class="dojoxGridFDPane">\n\t<div class="dojoxGridFDPaneRelation">${_relMsgFront}\n\t<span class="dojoxGridFDPaneModes" dojoAttachPoint="criteriaModeNode">\n\t\t<select dojoAttachPoint="_relSelect" dojoType="dijit.form.Select" dojoAttachEvent="onChange: _onRelSelectChange">\n\t\t\t<option value="0">${_relAll}</option>\n\t\t\t<option value="1">${_relAny}</option>\n\t\t</select>\n\t</span>\n\t${_relMsgTail}\n\t</div>\n\t<div dojoAttachPoint="criteriaPane" class="dojoxGridFDPaneRulePane"></div>\n\t<div dojoAttachPoint="_addCBoxBtn" dojoType="dijit.form.Button" \n\t\tclass="dojoxGridFDPaneAddCBoxBtn" iconClass="dojoxGridFDPaneAddCBoxBtnIcon"\n\t\tdojoAttachEvent="onClick:_onAddCBox" label="${_addRuleBtnLabel}" showLabel="false">\n\t</div>\n\t<div class="dojoxGridFDPaneBtns" dojoAttachPoint="buttonsPane">\n\t\t<span dojoAttachPoint="_cancelBtn" dojoType="dijit.form.Button" \n\t\t\tdojoAttachEvent="onClick:_onCancel" label="${_cancelBtnLabel}">\n\t\t</span>\n\t\t<span dojoAttachPoint="_clearFilterBtn" dojoType="dijit.form.Button" \n\t\t\tdojoAttachEvent="onClick:_onClearFilter" label="${_clearBtnLabel}" disabled="true">\n\t\t</span>\n\t\t<span dojoAttachPoint="_filterBtn" dojoType="dijit.form.Button" \n\t\t\tdojoAttachEvent="onClick:_onFilter" label="${_filterBtnLabel}" disabled="true">\n\t\t</span>\n\t</div>\n</div>\n',"url:dojox/grid/enhanced/templates/CriteriaBox.html":'<div class="dojoxGridFCBox">\n\t<div class="dojoxGridFCBoxSelCol" dojoAttachPoint="selColNode">\n\t\t<span class="dojoxGridFCBoxField">${_colSelectLabel}</span>\n\t\t<select dojoAttachPoint="_colSelect" dojoType="dijit.form.Select" \n\t\t\tclass="dojoxGridFCBoxColSelect"\n\t\t\tdojoAttachEvent="onChange:_onChangeColumn">\n\t\t</select>\n\t</div>\n\t<div class="dojoxGridFCBoxCondition" dojoAttachPoint="condNode">\n\t\t<span class="dojoxGridFCBoxField">${_condSelectLabel}</span>\n\t\t<select dojoAttachPoint="_condSelect" dojoType="dijit.form.Select" \n\t\t\tclass="dojoxGridFCBoxCondSelect"\n\t\t\tdojoAttachEvent="onChange:_onChangeCondition">\n\t\t</select>\n\t\t<div class="dojoxGridFCBoxCondSelectAlt" dojoAttachPoint="_condSelectAlt" style="display:none;"></div>\n\t</div>\n\t<div class="dojoxGridFCBoxValue" dojoAttachPoint="valueNode">\n\t\t<span class="dojoxGridFCBoxField">${_valueBoxLabel}</span>\n\t</div>\n</div>\n',"url:dojox/grid/enhanced/templates/FilterBoolValueBox.html":'<div class="dojoxGridBoolValueBox">\n\t<div class="dojoxGridTrueBox">\n\t\t<input dojoType="dijit.form.RadioButton" type=\'radio\' name=\'a1\' id=\'${_baseId}_rbTrue\' checked="true" \n\t\t\tdojoAttachPoint="rbTrue" dojoAttachEvent="onChange: onChange"/>\n\t\t<div class="dojoxGridTrueLabel" for=\'${_baseId}_rbTrue\'>${_lblTrue}</div>\n\t</div>\n\t<div class="dojoxGridFalseBox">\n\t\t<input dojoType="dijit.form.RadioButton" dojoAttachPoint="rbFalse" type=\'radio\' name=\'a1\' id=\'${_baseId}_rbFalse\'/>\n\t\t<div class="dojoxGridTrueLabel" for=\'${_baseId}_rbFalse\'>${_lblFalse}</div>\n\t</div>\n</div>\n'}}),define("dojox/grid/enhanced/plugins/filter/FilterDefDialog",["dojo/_base/declare","dojo/_base/array","dojo/_base/connect","dojo/_base/lang","dojo/_base/event","dojo/_base/html","dojo/_base/sniff","dojo/keys","dojo/on","dojo/string","dojo/window","dojo/date/locale","./FilterBuilder","../Dialog","dijit/form/ComboBox","dijit/form/TextBox","dijit/form/NumberTextBox","dijit/form/DateTextBox","dijit/form/TimeTextBox","dijit/form/Button","dijit/layout/AccordionContainer","dijit/layout/ContentPane","dijit/_Widget","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dijit/focus","dojox/html/metrics","dijit/a11y","dojo/text!../../templates/FilterDefPane.html","dojo/text!../../templates/CriteriaBox.html","dojo/text!../../templates/FilterBoolValueBox.html","dijit/Tooltip","dijit/form/Select","dijit/form/RadioButton","dojox/html/ellipsis","../../../cells/dijit"],function(e,t,i,a,r,o,n,d,s,l,u,c,h,m,f,g,p,y,v,b,M,_,w,x,j,k,I,F,C,T,S){var E={relSelect:60,accordionTitle:70,removeCBoxBtn:-1,colSelect:90,condSelect:95,valueBox:10,addCBoxBtn:20,filterBtn:30,clearBtn:40,cancelBtn:50},A=e("dojox.grid.enhanced.plugins.filter.AccordionContainer",M,{nls:null,addChild:function(e,t){var i=arguments[0]=e._pane=new _({content:e});this.inherited(arguments),this._modifyChild(i)},removeChild:function(e){var t=e,i=!1;if(e._pane&&(i=!0,t=arguments[0]=e._pane),this.inherited(arguments),i){this._hackHeight(!1,this._titleHeight);var a=this.getChildren();1===a.length&&o.style(a[0]._removeCBoxBtn.domNode,"display","none")}t.destroyRecursive()},selectChild:function(e){e._pane&&(arguments[0]=e._pane),this.inherited(arguments)},resize:function(){this.inherited(arguments),t.forEach(this.getChildren(),this._setupTitleDom)},startup:function(){this._started||(this.inherited(arguments),7==parseInt(n("ie"),10)&&t.some(this._connects,function(e){if("onresize"==(e[0]||{})[1])return this.disconnect(e),!0},this),t.forEach(this.getChildren(),function(e){this._modifyChild(e,!0)},this))},_onKeyPress:function(e,t){if(!this.disabled&&!e.altKey&&(t||e.ctrlKey)){var i=d,a=e.charOrCode,s=o._isBodyLtr(),l=null;if(t&&a==i.UP_ARROW||e.ctrlKey&&a==i.PAGE_UP)l=!1;else if(t&&a==i.DOWN_ARROW||e.ctrlKey&&(a==i.PAGE_DOWN||a==i.TAB))l=!0;else if(a==(s?i.LEFT_ARROW:i.RIGHT_ARROW))l=!!this._focusOnRemoveBtn&&null,this._focusOnRemoveBtn=!this._focusOnRemoveBtn;else{if(a!=(s?i.RIGHT_ARROW:i.LEFT_ARROW))return;l=!!this._focusOnRemoveBtn||null,this._focusOnRemoveBtn=!this._focusOnRemoveBtn}null!==l&&this._adjacent(l)._buttonWidget._onTitleClick(),r.stop(e),u.scrollIntoView(this.selectedChildWidget._buttonWidget.domNode.parentNode),n("ie")&&this.selectedChildWidget._removeCBoxBtn.focusNode.setAttribute("tabIndex",this._focusOnRemoveBtn?E.accordionTitle:-1),k.focus(this.selectedChildWidget[this._focusOnRemoveBtn?"_removeCBoxBtn":"_buttonWidget"].focusNode)}},_modifyChild:function(e,t){if(e&&this._started){o.style(e.domNode,"overflow","hidden"),e._buttonWidget.connect(e._buttonWidget,"_setSelectedAttr",function(){this.focusNode.setAttribute("tabIndex",this.selected?E.accordionTitle:"-1")});var i=this;e._buttonWidget.connect(e._buttonWidget.domNode,"onclick",function(){i._focusOnRemoveBtn=!1}),(e._removeCBoxBtn=new b({label:this.nls.removeRuleButton,showLabel:!1,iconClass:"dojoxGridFCBoxRemoveCBoxBtnIcon",tabIndex:E.removeCBoxBtn,onClick:a.hitch(e.content,"onRemove"),onKeyPress:function(t){i._onKeyPress(t,e._buttonWidget.contentWidget)}})).placeAt(e._buttonWidget.domNode);var r,n=this.getChildren();if(1===n.length)e._buttonWidget.set("selected",!0),o.style(e._removeCBoxBtn.domNode,"display","none");else for(r=0;r<n.length;++r)n[r]._removeCBoxBtn&&o.style(n[r]._removeCBoxBtn.domNode,"display","");if(this._setupTitleDom(e),!this._titleHeight)for(r=0;r<n.length;++r)if(n[r]!=this.selectedChildWidget){this._titleHeight=o.marginBox(n[r]._buttonWidget.domNode.parentNode).h;break}t||this._hackHeight(!0,this._titleHeight)}},_hackHeight:function(e,t){var i=this.getChildren(),a=this.domNode,r=o.style(a,"height");if(e){if(!(i.length>1))return;a.style.height=r+t+"px"}else a.style.height=r-t+"px";this.resize()},_setupTitleDom:function(e){var t=o.contentBox(e._buttonWidget.titleNode).w;n("ie")<8&&(t-=8),o.style(e._buttonWidget.titleTextNode,"width",t+"px")}}),G=e("dojox.grid.enhanced.plugins.filter.FilterDefPane",[w,x,j],{templateString:C,widgetsInTemplate:!0,dlg:null,postMixInProperties:function(){this.plugin=this.dlg.plugin;var e=this.plugin.nls;this._addRuleBtnLabel=e.addRuleButton,this._cancelBtnLabel=e.cancelButton,this._clearBtnLabel=e.clearButton,this._filterBtnLabel=e.filterButton,this._relAll=e.relationAll,this._relAny=e.relationAny,this._relMsgFront=e.relationMsgFront,this._relMsgTail=e.relationMsgTail},postCreate:function(){this.inherited(arguments),s(this.domNode,"keydown",a.hitch(this,"_onKey")),(this.cboxContainer=new A({nls:this.plugin.nls})).placeAt(this.criteriaPane),this._relSelect.set("tabIndex",E.relSelect),this._addCBoxBtn.set("tabIndex",E.addCBoxBtn),this._cancelBtn.set("tabIndex",E.cancelBtn),this._clearFilterBtn.set("tabIndex",E.clearBtn),this._filterBtn.set("tabIndex",E.filterBtn);var e=this.plugin.nls;this._relSelect.domNode.setAttribute("aria-label",e.waiRelAll),this._addCBoxBtn.domNode.setAttribute("aria-label",e.waiAddRuleButton),this._cancelBtn.domNode.setAttribute("aria-label",e.waiCancelButton),this._clearFilterBtn.domNode.setAttribute("aria-label",e.waiClearButton),this._filterBtn.domNode.setAttribute("aria-label",e.waiFilterButton),this._relSelect.set("value","logicall"===this.dlg._relOpCls?"0":"1")},uninitialize:function(){this.cboxContainer.destroyRecursive(),this.plugin=null,this.dlg=null},_onRelSelectChange:function(e){this.dlg._relOpCls="0"==e?"logicall":"logicany",this._relSelect.domNode.setAttribute("aria-label",this.plugin.nls["0"==e?"waiRelAll":"waiRelAny"])},_onAddCBox:function(){this.dlg.addCriteriaBoxes(1)},_onCancel:function(){this.dlg.onCancel()},_onClearFilter:function(){this.dlg.onClearFilter()},_onFilter:function(){this.dlg.onFilter()},_onKey:function(e){e.keyCode==d.ENTER&&this.dlg.onFilter()}}),N=e("dojox.grid.enhanced.plugins.filter.CriteriaBox",[w,x,j],{templateString:T,widgetsInTemplate:!0,dlg:null,postMixInProperties:function(){this.plugin=this.dlg.plugin,this._curValueBox=null;var e=this.plugin.nls;this._colSelectLabel=e.columnSelectLabel,this._condSelectLabel=e.conditionSelectLabel,this._valueBoxLabel=e.valueBoxLabel,this._anyColumnOption=e.anyColumnOption},postCreate:function(){var e=this.dlg,t=this.plugin.grid;this._colSelect.set("tabIndex",E.colSelect),this._colOptions=this._getColumnOptions(),this._colSelect.addOption([{label:this.plugin.nls.anyColumnOption,value:"anycolumn",selected:e.curColIdx<0},{value:""}].concat(this._colOptions)),this._condSelect.set("tabIndex",E.condSelect),this._condSelect.addOption(this._getUsableConditions(e.getColumnType(e.curColIdx))),this._showSelectOrLabel(this._condSelect,this._condSelectAlt),this.connect(t.layout,"moveColumn","onMoveColumn");var i=this;setTimeout(function(){var t=e.getColumnType(e.curColIdx);i._setValueBoxByType(t)},0)},_getColumnOptions:function(){var e=this.dlg.curColIdx>=0?String(this.dlg.curColIdx):"anycolumn";return t.map(t.filter(this.plugin.grid.layout.cells,function(e){return!(!1===e.filterable||e.hidden)}),function(t){return{label:t.name||t.field,value:String(t.index),selected:e==String(t.index)}})},onMoveColumn:function(){var e=this._onChangeColumn;this._onChangeColumn=function(){};var t=this._colSelect.get("selectedOptions");this._colSelect.removeOption(this._colOptions),this._colOptions=this._getColumnOptions(),this._colSelect.addOption(this._colOptions);for(var i=0;i<this._colOptions.length&&this._colOptions[i].label!=t.label;++i);i<this._colOptions.length&&this._colSelect.set("value",this._colOptions[i].value);var a=this;setTimeout(function(){a._onChangeColumn=e},0)},onRemove:function(){this.dlg.removeCriteriaBoxes(this)},uninitialize:function(){this._curValueBox&&(this._curValueBox.destroyRecursive(),this._curValueBox=null),this.plugin=null,this.dlg=null},_showSelectOrLabel:function(e,t){var i=e.getOptions();1==i.length?(t.innerHTML=i[0].label,o.style(e.domNode,"display","none"),o.style(t,"display","")):(o.style(e.domNode,"display",""),o.style(t,"display","none"))},_onChangeColumn:function(e){this._checkValidCriteria();var t=this.dlg.getColumnType(e);this._setConditionsByType(t),this._setValueBoxByType(t),this._updateValueBox()},_onChangeCondition:function(e){this._checkValidCriteria();var t="range"==e;t^this._isRange&&(this._isRange=t,this._setValueBoxByType(this.dlg.getColumnType(this._colSelect.get("value")))),this._updateValueBox()},_updateValueBox:function(e){this._curValueBox.set("disabled","isempty"==this._condSelect.get("value"))},_checkValidCriteria:function(){setTimeout(a.hitch(this,function(){this.updateRuleTitle(),this.dlg._updatePane()}),0)},_createValueBox:function(e,t){var i=a.hitch(t.cbox,"_checkValidCriteria");return new e(a.mixin(t,{tabIndex:E.valueBox,onKeyPress:i,onChange:i,class:"dojoxGridFCBoxValueBox"}))},_createRangeBox:function(e,t){var i=a.hitch(t.cbox,"_checkValidCriteria");a.mixin(t,{tabIndex:E.valueBox,onKeyPress:i,onChange:i});var r=o.create("div",{class:"dojoxGridFCBoxValueBox"}),n=new e(t),d=o.create("span",{class:"dojoxGridFCBoxRangeValueTxt",innerHTML:this.plugin.nls.rangeTo}),s=new e(t);return o.addClass(n.domNode,"dojoxGridFCBoxStartValue"),o.addClass(s.domNode,"dojoxGridFCBoxEndValue"),r.appendChild(n.domNode),r.appendChild(d),r.appendChild(s.domNode),r.domNode=r,r.set=function(e,t){a.isObject(t)&&(n.set("value",t.start),s.set("value",t.end))},r.get=function(){var e=n.get("value"),t=s.get("value");return e&&t?{start:e,end:t}:""},r},changeCurrentColumn:function(e){var t=this.dlg.curColIdx;this._colSelect.removeOption(this._colOptions),this._colOptions=this._getColumnOptions(),this._colSelect.addOption(this._colOptions),this._colSelect.set("value",t>=0?String(t):"anycolumn"),this.updateRuleTitle(!0)},curColumn:function(){return this._colSelect.getOptions(this._colSelect.get("value")).label},curCondition:function(){return this._condSelect.getOptions(this._condSelect.get("value")).label},curValue:function(){return"isempty"==this._condSelect.get("value")?"":this._curValueBox?this._curValueBox.get("value"):""},save:function(){if(this.isEmpty())return null;var e=this._colSelect.get("value"),t=this.dlg.getColumnType(e),i=this.curValue(),a=this._condSelect.get("value");return{column:e,condition:a,value:i,formattedVal:this.formatValue(t,a,i),type:t,colTxt:this.curColumn(),condTxt:this.curCondition()}},load:function(e){var t=[this._onChangeColumn,this._onChangeCondition];this._onChangeColumn=this._onChangeCondition=function(){},e.column&&this._colSelect.set("value",e.column),e.type?(this._setConditionsByType(e.type),this._setValueBoxByType(e.type)):e.type=this.dlg.getColumnType(this._colSelect.get("value")),e.condition&&this._condSelect.set("value",e.condition);var i=e.value||"";(i||"date"!=e.type&&"time"!=e.type)&&this._curValueBox.set("value",i),this._updateValueBox(),setTimeout(a.hitch(this,function(){this._onChangeColumn=t[0],this._onChangeCondition=t[1]}),0)},getExpr:function(){if(this.isEmpty())return null;var e=this._colSelect.get("value");return this.dlg.getExprForCriteria({type:this.dlg.getColumnType(e),column:e,condition:this._condSelect.get("value"),value:this.curValue()})},isEmpty:function(){if("isempty"==this._condSelect.get("value"))return!1;var e=this.curValue();return""===e||null===e||void 0===e||"number"==typeof e&&isNaN(e)},updateRuleTitle:function(e){var t=this._pane._buttonWidget.titleTextNode,i=["<div class='dojoxEllipsis'>"];if(e||this.isEmpty())t.title=l.substitute(this.plugin.nls.ruleTitleTemplate,[this._ruleIndex||1]),i.push(t.title);else{var a=this.dlg.getColumnType(this._colSelect.get("value")),r=this.curColumn(),d=this.curCondition(),s=this.formatValue(a,this._condSelect.get("value"),this.curValue());i.push(r,"&nbsp;<span class='dojoxGridRuleTitleCondition'>",d,"</span>&nbsp;",s),t.title=[r," ",d," ",s].join("")}if(t.innerHTML=i.join(""),n("mozilla")){o.create("div",{style:"width: 100%; height: 100%; position: absolute; top: 0; left: 0; z-index: 9999;"},t).title=t.title}},updateRuleIndex:function(e){this._ruleIndex!=e&&(this._ruleIndex=e,this.isEmpty()&&this.updateRuleTitle())},setAriaInfo:function(e){var t=l.substitute,i=this.plugin.nls;this._colSelect.domNode.setAttribute("aria-label",t(i.waiColumnSelectTemplate,[e])),this._condSelect.domNode.setAttribute("aria-label",t(i.waiConditionSelectTemplate,[e])),this._pane._removeCBoxBtn.domNode.setAttribute("aria-label",t(i.waiRemoveRuleButtonTemplate,[e])),this._index=e},_getUsableConditions:function(e){var i=a.clone(this.dlg._dataTypeMap[e].conditions),r=(this.plugin.args.disabledConditions||{})[e],o=parseInt(this._colSelect.get("value"),10),n=isNaN(o)?(this.plugin.args.disabledConditions||{}).anycolumn:this.plugin.grid.layout.cells[o].disabledConditions;a.isArray(r)||(r=[]),a.isArray(n)||(n=[]);var d=r.concat(n);if(d.length){var s={};return t.forEach(d,function(e){a.isString(e)&&(s[e.toLowerCase()]=!0)}),t.filter(i,function(e){return!(e.value in s)})}return i},_setConditionsByType:function(e){var t=this._condSelect;t.removeOption(t.options),t.addOption(this._getUsableConditions(e)),this._showSelectOrLabel(this._condSelect,this._condSelectAlt)},_setValueBoxByType:function(e){if(this._curValueBox){this.valueNode.removeChild(this._curValueBox.domNode);try{this._curValueBox.destroyRecursive()}catch(e){}delete this._curValueBox}var t=this.dlg._dataTypeMap[e].valueBoxCls[this._getValueBoxClsInfo(this._colSelect.get("value"),e)],i=this._getValueBoxArgByType(e);this._curValueBox=this[this._isRange?"_createRangeBox":"_createValueBox"](t,i),this.valueNode.appendChild(this._curValueBox.domNode),this._curValueBox.focusNode.setAttribute("aria-label",l.substitute(this.plugin.nls.waiValueBoxTemplate,[this._index])),this.dlg.onRendered(this)},_getValueBoxArgByType:function(e){var t=this.plugin.grid,i=t.layout.cells[parseInt(this._colSelect.get("value"),10)],r={cbox:this};return"string"==e?i&&(i.suggestion||i.autoComplete)&&a.mixin(r,{store:t.store,searchAttr:i.field||i.name,query:t.query||{},fetchProperties:{sort:[{attribute:i.field||i.name}],queryOptions:a.mixin({ignoreCase:!0,deep:!0},t.queryOptions||{})}}):"boolean"==e&&a.mixin(r,this.dlg.builder.defaultArgs.boolean),i&&i.dataTypeArgs&&a.mixin(r,i.dataTypeArgs),r},formatValue:function(e,t,i){if("isempty"==t)return"";if("date"==e||"time"==e){var a={selector:e},r=c.format;return"range"==t?l.substitute(this.plugin.nls.rangeTemplate,[r(i.start,a),r(i.end,a)]):r(i,a)}return"boolean"==e?i?this._curValueBox._lblTrue:this._curValueBox._lblFalse:i},_getValueBoxClsInfo:function(e,t){var i=this.plugin.grid.layout.cells[parseInt(e,10)];return"string"==t&&i&&(i.suggestion||i.autoComplete)?"ac":"dft"}}),B=e("dojox.grid.enhanced.plugins.filter.UniqueComboBox",f,{_openResultList:function(e){var i={},a=this.store,r=this.searchAttr;arguments[0]=t.filter(e,function(e){var t=a.getValue(e,r),o=i[t];return i[t]=!0,!o}),this.inherited(arguments)},_onKey:function(e){e.charOrCode===d.ENTER&&this._opened&&r.stop(e),this.inherited(arguments)}}),P=e("dojox.grid.enhanced.plugins.filter.BooleanValueBox",[w,x,j],{templateString:S,widgetsInTemplate:!0,constructor:function(e){var t=e.cbox.plugin.nls;this._baseId=e.cbox.id,this._lblTrue=e.trueLabel||t.trueLabel||"true",this._lblFalse=e.falseLabel||t.falseLabel||"false",this.args=e},postCreate:function(){this.onChange()},onChange:function(){},get:function(e){return this.rbTrue.get("checked")},set:function(e,t){this.inherited(arguments),"value"==e&&(this.rbTrue.set("checked",!!t),this.rbFalse.set("checked",!t))}});return e("dojox.grid.enhanced.plugins.filter.FilterDefDialog",null,{curColIdx:-1,_relOpCls:"logicall",_savedCriterias:null,plugin:null,constructor:function(e){var t=this.plugin=e.plugin;this.builder=new h,this._setupData(),this._cboxes=[],this.defaultType=t.args.defaultType||"string",(this.filterDefPane=new G({dlg:this})).startup(),(this._defPane=new m({refNode:this.plugin.grid.domNode,title:t.nls.filterDefDialogTitle,class:"dojoxGridFDTitlePane",iconClass:"dojoxGridFDPaneIcon",content:this.filterDefPane})).startup(),this._defPane.connect(t.grid.layer("filter"),"filterDef",a.hitch(this,"_onSetFilter")),t.grid.setFilter=a.hitch(this,"setFilter"),t.grid.getFilter=a.hitch(this,"getFilter"),t.grid.getFilterRelation=a.hitch(this,function(){return this._relOpCls}),t.connect(t.grid.layout,"moveColumn",a.hitch(this,"onMoveColumn"))},onMoveColumn:function(e,i,a,r,o){if(this._savedCriterias&&a!=r){o&&--r;var n=a<r?a:r,d=a<r?r:a,s=r>n?1:-1;t.forEach(this._savedCriterias,function(e){var t=parseInt(e.column,10);!isNaN(t)&&t>=n&&t<=d&&(e.column=String(t==a?t+(d-n)*s:t-s))})}},destroy:function(){this._defPane.destroyRecursive(),this._defPane=null,this.filterDefPane=null,this.builder=null,this._dataTypeMap=null,this._cboxes=null;var e=this.plugin.grid;e.setFilter=null,e.getFilter=null,e.getFilterRelation=null,this.plugin=null},_setupData:function(){var e=this.plugin.nls;this._dataTypeMap={number:{valueBoxCls:{dft:p},conditions:[{label:e.conditionEqual,value:"equalto",selected:!0},{label:e.conditionNotEqual,value:"notequalto"},{label:e.conditionLess,value:"lessthan"},{label:e.conditionLessEqual,value:"lessthanorequalto"},{label:e.conditionLarger,value:"largerthan"},{label:e.conditionLargerEqual,value:"largerthanorequalto"},{label:e.conditionIsEmpty,value:"isempty"}]},string:{valueBoxCls:{dft:g,ac:B},conditions:[{label:e.conditionContains,value:"contains",selected:!0},{label:e.conditionIs,value:"equalto"},{label:e.conditionStartsWith,value:"startswith"},{label:e.conditionEndWith,value:"endswith"},{label:e.conditionNotContain,value:"notcontains"},{label:e.conditionIsNot,value:"notequalto"},{label:e.conditionNotStartWith,value:"notstartswith"},{label:e.conditionNotEndWith,value:"notendswith"},{label:e.conditionIsEmpty,value:"isempty"}]},date:{valueBoxCls:{dft:y},conditions:[{label:e.conditionIs,value:"equalto",selected:!0},{label:e.conditionBefore,value:"lessthan"},{label:e.conditionAfter,value:"largerthan"},{label:e.conditionRange,value:"range"},{label:e.conditionIsEmpty,value:"isempty"}]},time:{valueBoxCls:{dft:v},conditions:[{label:e.conditionIs,value:"equalto",selected:!0},{label:e.conditionBefore,value:"lessthan"},{label:e.conditionAfter,value:"largerthan"},{label:e.conditionRange,value:"range"},{label:e.conditionIsEmpty,value:"isempty"}]},boolean:{valueBoxCls:{dft:P},conditions:[{label:e.conditionIs,value:"equalto",selected:!0},{label:e.conditionIsEmpty,value:"isempty"}]}}},setFilter:function(e,r){e=e||[],a.isArray(e)||(e=[e]);var o=function(){if(e.length){this._savedCriterias=t.map(e,function(e){var t=e.type||this.defaultType;return{type:t,column:String(e.column),condition:e.condition,value:e.value,colTxt:this.getColumnLabelByValue(String(e.column)),condTxt:this.getConditionLabelByValue(t,e.condition),formattedVal:e.formattedVal||e.value}},this),this._criteriasChanged=!0,"logicall"!==r&&"logicany"!==r||(this._relOpCls=r);var i=t.map(e,this.getExprForCriteria,this);i=this.builder.buildExpression(1==i.length?i[0]:{op:this._relOpCls,data:i}),this.plugin.grid.layer("filter").filterDef(i),this.plugin.filterBar.toggleClearFilterBtn(!1)}this._closeDlgAndUpdateGrid()};if(this._savedCriterias){this._clearWithoutRefresh=!0;var n=i.connect(this,"clearFilter",this,function(){i.disconnect(n),this._clearWithoutRefresh=!1,o.apply(this)});this.onClearFilter()}else o.apply(this)},getFilter:function(){return a.clone(this._savedCriterias)||[]},getColumnLabelByValue:function(e){var t=this.plugin.nls;if("anycolumn"==e.toLowerCase())return t.anyColumnOption;var i=this.plugin.grid.layout.cells[parseInt(e,10)];return i?i.name||i.field:""},getConditionLabelByValue:function(e,t){for(var i=this._dataTypeMap[e].conditions,a=i.length-1;a>=0;--a){var r=i[a];if(r.value==t.toLowerCase())return r.label}return""},addCriteriaBoxes:function(e){if(!("number"!=typeof e||e<=0)){var t,i=this._cboxes,a=this.filterDefPane.cboxContainer,r=this.plugin.args.ruleCount,d=i.length;for(r>0&&d+e>r&&(e=r-d);e>0;--e)t=new N({dlg:this}),i.push(t),a.addChild(t);if(a.startup(),this._updatePane(),this._updateCBoxTitles(),a.selectChild(i[i.length-1]),this.filterDefPane.criteriaPane.scrollTop=1e6,4===i.length)if(n("ie")<=6&&!this.__alreadyResizedForIE6){var s=o.position(a.domNode);s.w-=I.getScrollbar().w,a.resize(s),this.__alreadyResizedForIE6=!0}else a.resize()}},removeCriteriaBoxes:function(e,i){var r,o=this._cboxes,n=this.filterDefPane.cboxContainer,d=o.length,s=d-e,l=d-1,u=t.indexOf(o,n.selectedChildWidget.content);if(a.isArray(e)){var c,h=e;for(h.sort(),e=h.length,c=d-1;c>=0&&t.indexOf(h,c)>=0;--c);if(c>=0)for(c!=u&&n.selectChild(o[c]),c=e-1;c>=0;--c)h[c]>=0&&h[c]<d&&(n.removeChild(o[h[c]]),o.splice(h[c],1));s=o.length}else{if(!0===i){if(!(e>=0&&e<d))return;s=l=e,e=1}else if(e instanceof N)r=e,e=1,s=l=t.indexOf(o,r);else{if("number"!=typeof e||e<=0)return;e>=d&&(e=l,s=1)}if(l<s)return;for(u>=s&&u<=l&&n.selectChild(o[s?s-1:l+1]);l>=s;--l)n.removeChild(o[l]);o.splice(s,e)}this._updatePane(),this._updateCBoxTitles(),3===o.length&&n.resize()},getCriteria:function(e){return"number"!=typeof e?this._savedCriterias?this._savedCriterias.length:0:this._savedCriterias&&this._savedCriterias[e]?a.mixin({relation:"logicall"==this._relOpCls?this.plugin.nls.and:this.plugin.nls.or},this._savedCriterias[e]):null},getExprForCriteria:function(e){if("anycolumn"==e.column){var i=t.filter(this.plugin.grid.layout.cells,function(e){return!(!1===e.filterable||e.hidden)});return{op:"logicany",data:t.map(i,function(t){return this.getExprForColumn(e.value,t.index,e.type,e.condition)},this)}}return this.getExprForColumn(e.value,e.column,e.type,e.condition)},getExprForColumn:function(e,t,i,r){t=parseInt(t,10);var o=this.plugin.grid.layout.cells[t],n=o.field||o.name,d={datatype:i||this.getColumnType(t),args:o.dataTypeArgs,isColumn:!0},s=[a.mixin({data:this.plugin.args.isServerSide?n:o},d)];return d.isColumn=!1,"range"==r?s.push(a.mixin({data:e.start},d),a.mixin({data:e.end},d)):"isempty"!=r&&s.push(a.mixin({data:e},d)),{op:r,data:s}},getColumnType:function(e){var t=this.plugin.grid.layout.cells[parseInt(e,10)];if(!t||!t.datatype)return this.defaultType;var i=String(t.datatype).toLowerCase();return this._dataTypeMap[i]?i:this.defaultType},clearFilter:function(e){if(this._savedCriterias){this._savedCriterias=null,this.plugin.grid.layer("filter").filterDef(null);try{this.plugin.filterBar.toggleClearFilterBtn(!0),this.filterDefPane._clearFilterBtn.set("disabled",!0),this.removeCriteriaBoxes(this._cboxes.length-1),this._cboxes[0].load({})}catch(e){}e?this.closeDialog():this._closeDlgAndUpdateGrid()}},showDialog:function(e){this._defPane.show(),this.plugin.filterStatusTip.closeDialog(),this._prepareDialog(e)},closeDialog:function(){this._defPane.open&&this._defPane.hide()},onFilter:function(e){this.canFilter()&&(this._defineFilter(),this._closeDlgAndUpdateGrid(),this.plugin.filterBar.toggleClearFilterBtn(!1))},onClearFilter:function(e){this._savedCriterias&&(this._savedCriterias.length>=this.plugin.ruleCountToConfirmClearFilter?this.plugin.clearFilterDialog.show():this.clearFilter(this._clearWithoutRefresh))},onCancel:function(e){var i=this._savedCriterias,a=this._cboxes;i?(this.addCriteriaBoxes(i.length-a.length),this.removeCriteriaBoxes(a.length-i.length),t.forEach(i,function(e,t){a[t].load(e)})):(this.removeCriteriaBoxes(a.length-1),a[0].load({})),this.closeDialog()},onRendered:function(e){if(n("ff")){var t=this._defPane;t._getFocusItems(t.domNode),k.focus(t._firstFocusItem)}else{var i=F._getTabNavigable(o.byId(e.domNode));k.focus(i.lowest||i.first)}},_onSetFilter:function(e){null===e&&this._savedCriterias&&this.clearFilter()},_prepareDialog:function(e){var a,r,o=this._savedCriterias,n=this._cboxes;if(this.curColIdx=e,o){if(this._criteriasChanged){this.filterDefPane._relSelect.set("value","logicall"===this._relOpCls?"0":"1"),this._criteriasChanged=!1;var d=o.length>n.length?o.length-n.length:0;for(this.addCriteriaBoxes(d),this.removeCriteriaBoxes(n.length-o.length),this.filterDefPane._clearFilterBtn.set("disabled",!1),a=0;a<n.length-d;++a)n[a].load(o[a]);if(d>0)var s=[],l=i.connect(this,"onRendered",function(e){var a=t.indexOf(n,e);s[a]||(s[a]=!0,0==--d&&i.disconnect(l),e.load(o[a]))})}}else if(0===n.length)this.addCriteriaBoxes(1);else for(a=0;r=n[a];++a)r.changeCurrentColumn();this.filterDefPane.cboxContainer.resize()},_defineFilter:function(){var e=this._cboxes,i=function(i){return t.filter(t.map(e,function(e){return e[i]()}),function(e){return!!e})},a=i("getExpr");this._savedCriterias=i("save"),a=1==a.length?a[0]:{op:this._relOpCls,data:a},a=this.builder.buildExpression(a),this.plugin.grid.layer("filter").filterDef(a),this.filterDefPane._clearFilterBtn.set("disabled",!1)},_updateCBoxTitles:function(){for(var e=this._cboxes,t=e.length;t>0;--t)e[t-1].updateRuleIndex(t),e[t-1].setAriaInfo(t)},_updatePane:function(){var e=this._cboxes,t=this.filterDefPane;t._addCBoxBtn.set("disabled",e.length==this.plugin.args.ruleCount),t._filterBtn.set("disabled",!this.canFilter())},canFilter:function(){return t.filter(this._cboxes,function(e){return!e.isEmpty()}).length>0},_closeDlgAndUpdateGrid:function(){this.closeDialog();var e=this.plugin.grid;e.showMessage(e.loadingMessage),setTimeout(a.hitch(e,e._refresh),this._defPane.duration+10)}})});//# sourceMappingURL=FilterDefDialog.js.map