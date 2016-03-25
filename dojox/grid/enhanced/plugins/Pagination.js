//>>built
require({cache:{"url:dojox/grid/enhanced/templates/Pagination.html":'<div dojoAttachPoint="paginatorBar"\n	><table cellpadding="0" cellspacing="0"  class="dojoxGridPaginator"\n		><tr\n			><td dojoAttachPoint="descriptionTd" class="dojoxGridDescriptionTd"\n				><div dojoAttachPoint="descriptionDiv" class="dojoxGridDescription"></div\n			></div></td\n			><td dojoAttachPoint="sizeSwitchTd"></td\n			><td dojoAttachPoint="pageStepperTd" class="dojoxGridPaginatorFastStep"\n				><div dojoAttachPoint="pageStepperDiv" class="dojoxGridPaginatorStep"></div\n			></td\n			><td dojoAttachPoint="gotoPageTd" class="dojoxGridPaginatorGotoTd"\n				><div dojoAttachPoint="gotoPageDiv" class="dojoxGridPaginatorGotoDiv" dojoAttachEvent="onclick:_openGotopageDialog, onkeydown:_openGotopageDialog"\n					><span class="dojoxGridWardButtonInner">&#8869;</span\n				></div\n			></td\n		></tr\n	></table\n></div>\n'}}),define("dojox/grid/enhanced/plugins/Pagination",["dojo/_base/kernel","dojo/_base/declare","dojo/_base/array","dojo/_base/connect","dojo/_base/lang","dojo/_base/html","dojo/_base/event","dojo/query","dojo/string","dojo/keys","dojo/text!../templates/Pagination.html","./Dialog","./_StoreLayer","../_Plugin","../../EnhancedGrid","dijit/form/Button","dijit/form/NumberTextBox","dijit/focus","dijit/_Widget","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dojox/html/metrics","dojo/i18n!../nls/Pagination"],function(e,t,i,a,o,n,r,s,l,d,h,u,c,m,f,p,g,y,v,b,x,w,M){var _=t("dojox.grid.enhanced.plugins.pagination._GotoPagePane",[v,b,x],{templateString:"<div><div class='dojoxGridDialogMargin' dojoAttachPoint='_mainMsgNode'></div><div class='dojoxGridDialogMargin'><input dojoType='dijit.form.NumberTextBox' style='width: 50px;' dojoAttachPoint='_pageInputBox' dojoAttachEvent='onKeyUp: _onKey'></input><label dojoAttachPoint='_pageLabelNode'></label></div><div class='dojoxGridDialogButton'><button dojoType='dijit.form.Button' dojoAttachPoint='_confirmBtn' dojoAttachEvent='onClick: _onConfirm'></button><button dojoType='dijit.form.Button' dojoAttachPoint='_cancelBtn' dojoAttachEvent='onClick: _onCancel'></button></div></div>",widgetsInTemplate:!0,dlg:null,postMixInProperties:function(){this.plugin=this.dlg.plugin},postCreate:function(){this.inherited(arguments),this._mainMsgNode.innerHTML=this.plugin._nls[12],this._confirmBtn.set("label",this.plugin._nls[14]),this._confirmBtn.set("disabled",!0),this._cancelBtn.set("label",this.plugin._nls[15])},_onConfirm:function(e){this._pageInputBox.isValid()&&""!==this._pageInputBox.getDisplayedValue()&&(this.plugin.currentPage(this._pageInputBox.parse(this._pageInputBox.getDisplayedValue())),this.dlg._gotoPageDialog.hide(),this._pageInputBox.reset()),j(e)},_onCancel:function(e){this._pageInputBox.reset(),this.dlg._gotoPageDialog.hide(),j(e)},_onKey:function(e){this._confirmBtn.set("disabled",!this._pageInputBox.isValid()||""==this._pageInputBox.getDisplayedValue()),e.altKey||e.metaKey||e.keyCode!==d.ENTER||this._onConfirm(e)}}),k=t("dojox.grid.enhanced.plugins.pagination._GotoPageDialog",null,{pageCount:0,dlgPane:null,constructor:function(e){this.plugin=e,this.dlgPane=new _({dlg:this}),this.dlgPane.startup(),this._gotoPageDialog=new u({refNode:e.grid.domNode,title:this.plugin._nls[11],content:this.dlgPane}),this._gotoPageDialog.startup()},_updatePageCount:function(){this.pageCount=this.plugin.getTotalPageNum(),this.dlgPane._pageInputBox.constraints={fractional:!1,min:1,max:this.pageCount},this.dlgPane._pageLabelNode.innerHTML=l.substitute(this.plugin._nls[13],[this.pageCount])},showDialog:function(){this._updatePageCount(),this._gotoPageDialog.show()},destroy:function(){this._gotoPageDialog.destroy()}}),T=t("dojox.grid.enhanced.plugins._ForcedPageStoreLayer",c._StoreLayer,{tags:["presentation"],constructor:function(e){this._plugin=e},_fetch:function(t){var i=this,a=i._plugin,n=a.grid,r=t.scope||e.global,s=t.onBegin;t.start=(a._currentPage-1)*a._currentPageSize+t.start,i.startIdx=t.start,i.endIdx=t.start+a._currentPageSize-1;var l=a._paginator;return a._showAll||(a._showAll=!l.sizeSwitch&&!l.pageStepper&&!l.gotoButton),s&&a._showAll?t.onBegin=function(e,t){a._maxSize=a._currentPageSize=e,i.startIdx=0,i.endIdx=e-1,a._paginator._update(),t.onBegin=s,t.onBegin.call(r,e,t)}:s&&(t.onBegin=function(e,t){t.start=0,t.count=a._currentPageSize,a._maxSize=e,i.endIdx=i.endIdx>=e?e-1:i.endIdx,i.startIdx>e&&0!==e&&(n._pending_requests[t.start]=!1,a.firstPage()),a._paginator._update(),t.onBegin=s,t.onBegin.call(r,Math.min(a._currentPageSize,e-i.startIdx),t)}),o.hitch(this._store,this._originFetch)(t)}}),j=function(e){try{e&&r.stop(e)}catch(t){}},C=t("dojox.grid.enhanced.plugins.pagination._Focus",null,{_focusedNode:null,_isFocused:!1,constructor:function(e){this._pager=e;e.plugin.grid.focus;e.plugin.connect(e,"onSwitchPageSize",o.hitch(this,"_onActive")),e.plugin.connect(e,"onPageStep",o.hitch(this,"_onActive")),e.plugin.connect(e,"onShowGotoPageDialog",o.hitch(this,"_onActive")),e.plugin.connect(e,"_update",o.hitch(this,"_moveFocus"))},_onFocus:function(e,t){var i;if(this._isFocused){if(t&&this._focusedNode)for(var a=t>0?-1:1,o=parseInt(this._focusedNode.getAttribute("tabindex"),10)+a;o>=-3&&0>o&&!(i=s("[tabindex="+o+"]",this._pager.domNode)[0]);)o+=a}else i=this._focusedNode||s("[tabindex]",this._pager.domNode)[0];return this._focus(i,e)},_onBlur:function(e,t){if(!t||!this._focusedNode)return this._isFocused=!1,this._focusedNode&&n.hasClass(this._focusedNode,"dojoxGridButtonFocus")&&n.removeClass(this._focusedNode,"dojoxGridButtonFocus"),!0;for(var i,a=t>0?-1:1,o=parseInt(this._focusedNode.getAttribute("tabindex"),10)+a;o>=-3&&0>o&&!(i=s("[tabindex="+o+"]",this._pager.domNode)[0]);)o+=a;return i||(this._isFocused=!1,n.hasClass(this._focusedNode,"dojoxGridButtonFocus")&&n.removeClass(this._focusedNode,"dojoxGridButtonFocus")),!i},_onMove:function(e,t,i){if(this._focusedNode)for(var a=this._focusedNode.getAttribute("tabindex"),o=1==t?"nextSibling":"previousSibling",n=this._focusedNode[o];n;){if(n.getAttribute("tabindex")==a){this._focus(n);break}n=n[o]}},_focus:function(t,i){return t?(this._isFocused=!0,e.isIE&&this._focusedNode&&n.removeClass(this._focusedNode,"dojoxGridButtonFocus"),this._focusedNode=t,t.focus(),e.isIE&&n.addClass(t,"dojoxGridButtonFocus"),j(i),!0):!1},_onActive:function(e){this._focusedNode=e.target,this._isFocused||this._pager.plugin.grid.focus.focusArea("pagination"+this._pager.position)},_moveFocus:function(){if(this._focusedNode&&!this._focusedNode.getAttribute("tabindex")){for(var t=this._focusedNode.nextSibling;t;){if(t.getAttribute("tabindex"))return void this._focus(t);t=t.nextSibling}for(var i=this._focusedNode.previousSibling;i;){if(i.getAttribute("tabindex"))return void this._focus(i);i=i.previousSibling}this._focusedNode=null,this._onBlur()}else e.isIE&&this._focusedNode&&n.addClass(this._focusedNode,"dojoxGridButtonFocus")}}),S=t("dojox.grid.enhanced.plugins._Paginator",[v,b],{templateString:h,constructor:function(e){o.mixin(this,e),this.grid=this.plugin.grid},postCreate:function(){this.inherited(arguments);var e=this,t=this.grid;this.plugin.connect(t,"_resize",o.hitch(this,"_resetGridHeight")),this._originalResize=t.resize,t.resize=function(i,a){e._changeSize=i,e._resultSize=a,e._originalResize.apply(t,arguments)},this.focus=C(this),this._placeSelf()},destroy:function(){this.inherited(arguments),this.grid.focus.removeArea("pagination"+this.position),this._gotoPageDialog&&this._gotoPageDialog.destroy(),this.grid.resize=this._originalResize},onSwitchPageSize:function(e){},onPageStep:function(e){},onShowGotoPageDialog:function(e){},_update:function(){this._updateDescription(),this._updatePageStepper(),this._updateSizeSwitch(),this._updateGotoButton()},_registerFocus:function(e){var t=this.grid.focus,i="pagination"+this.position;this.focus;t.addArea({name:i,onFocus:o.hitch(this.focus,"_onFocus"),onBlur:o.hitch(this.focus,"_onBlur"),onMove:o.hitch(this.focus,"_onMove")}),t.placeArea(i,e?"before":"after",e?"header":"content")},_placeSelf:function(){var e=this.grid,t="top"==this.position;this.placeAt(t?e.viewsHeaderNode:e.viewsNode,t?"before":"after"),this._registerFocus(t)},_resetGridHeight:function(e,t){var a=this.grid;if(e=e||this._changeSize,t=t||this._resultSize,delete this._changeSize,delete this._resultSize,!a._autoHeight){var o=a._getPadBorder().h;this.plugin.gh||(this.plugin.gh=(a.domNode.clientHeight||n.style(a.domNode,"height"))+2*o),t&&(e=t),e&&(this.plugin.gh=n.contentBox(a.domNode).h+2*o);var r=this.plugin.gh,s=a._getHeaderHeight(),l=n.marginBox(this.domNode).h;if("number"==typeof a.autoHeight){var d=r+l-o;n.style(a.domNode,"height",d+"px"),n.style(a.viewsNode,"height",d-l-s+"px"),this._styleMsgNode(s,n.marginBox(a.viewsNode).w,d-l-s)}else{var h=r-l-s-o;n.style(a.viewsNode,"height",h+"px");var u=i.some(a.views.views,function(e){return e.hasHScrollbar()});i.forEach(a.viewsNode.childNodes,function(e){n.style(e,"height",h+"px")}),i.forEach(a.views.views,function(e){e.scrollboxNode&&(!e.hasHScrollbar()&&u?n.style(e.scrollboxNode,"height",h-w.getScrollbar().h+"px"):n.style(e.scrollboxNode,"height",h+"px"))}),this._styleMsgNode(s,n.marginBox(a.viewsNode).w,h)}}},_styleMsgNode:function(e,t,i){var a=this.grid.messagesNode;n.style(a,{position:"absolute",top:e+"px",width:t+"px",height:i+"px","z-Index":"100"})},_updateDescription:function(){var e=this.plugin.forcePageStoreLayer,t=this.plugin._maxSize,i=this.plugin._nls,a=function(){return 0>=t||1==t?i[5]:i[4]};this.description&&this.descriptionDiv&&(this.descriptionDiv.innerHTML=t>0?l.substitute(i[0],[a(),t,e.startIdx+1,e.endIdx+1]):"0 "+a())},_updateSizeSwitch:function(){n.style(this.sizeSwitchTd,"display",this.sizeSwitch?"":"none"),this.sizeSwitch&&(this.sizeSwitchTd.childNodes.length<1&&this._createSizeSwitchNodes(),this._updateSwitchNodesStyle())},_createSizeSwitchNodes:function(){var e=null,t=this.plugin._nls,a=o.hitch(this.plugin,"connect");i.forEach(this.pageSizes,function(i){var r=isFinite(i)?l.substitute(t[2],[i]):t[1],s=isFinite(i)?i:t[16];e=n.create("span",{innerHTML:s,title:r,value:i,tabindex:"-1"},this.sizeSwitchTd,"last"),e.setAttribute("aria-label",r),a(e,"onclick",o.hitch(this,"_onSwitchPageSize")),a(e,"onkeydown",o.hitch(this,"_onSwitchPageSize")),a(e,"onmouseover",function(e){n.addClass(e.target,"dojoxGridPageTextHover")}),a(e,"onmouseout",function(e){n.removeClass(e.target,"dojoxGridPageTextHover")}),e=n.create("span",{innerHTML:"|"},this.sizeSwitchTd,"last"),n.addClass(e,"dojoxGridSeparator")},this),n.destroy(e)},_updateSwitchNodesStyle:function(){var e=null,t=function(e,t){t?(n.addClass(e,"dojoxGridActivedSwitch"),n.removeAttr(e,"tabindex")):(n.addClass(e,"dojoxGridInactiveSwitch"),e.setAttribute("tabindex","-1"))};i.forEach(this.sizeSwitchTd.childNodes,function(i){i.value&&(n.removeClass(i),e=i.value,this.plugin._showAll?t(i,isNaN(parseInt(e,10))):t(i,this.plugin._currentPageSize==e))},this)},_updatePageStepper:function(){n.style(this.pageStepperTd,"display",this.pageStepper?"":"none"),this.pageStepper&&(this.pageStepperDiv.childNodes.length<1?(this._createPageStepNodes(),this._createWardBtns()):this._resetPageStepNodes(),this._updatePageStepNodesStyle())},_createPageStepNodes:function(){for(var e=this._getStartPage(),t=this._getStepPageSize(),i="",a=null,r=e,s=o.hitch(this.plugin,"connect");r<e+this.maxPageStep+1;r++)i=l.substitute(this.plugin._nls[3],[r]),a=n.create("div",{innerHTML:r,value:r,title:i},this.pageStepperDiv,"last"),a.setAttribute("aria-label",i),s(a,"onclick",o.hitch(this,"_onPageStep")),s(a,"onkeydown",o.hitch(this,"_onPageStep")),s(a,"onmouseover",function(e){n.addClass(e.target,"dojoxGridPageTextHover")}),s(a,"onmouseout",function(e){n.removeClass(e.target,"dojoxGridPageTextHover")}),n.style(a,"display",e+t>r?"":"none")},_createWardBtns:function(){var e=this,t=this.plugin._nls,i={prevPage:"&#60;",firstPage:"&#171;",nextPage:"&#62;",lastPage:"&#187;"},a=function(t,a,r){var s=n.create("div",{value:t,title:a,tabindex:"-2"},e.pageStepperDiv,r);e.plugin.connect(s,"onclick",o.hitch(e,"_onPageStep")),e.plugin.connect(s,"onkeydown",o.hitch(e,"_onPageStep")),s.setAttribute("aria-label",a);var l=n.create("span",{value:t,title:a,innerHTML:i[t]},s,r);n.addClass(l,"dojoxGridWardButtonInner")};a("prevPage",t[6],"first"),a("firstPage",t[7],"first"),a("nextPage",t[8],"last"),a("lastPage",t[9],"last")},_resetPageStepNodes:function(){for(var e,t=this._getStartPage(),i=this._getStepPageSize(),a=this.pageStepperDiv.childNodes,o=null,r=t,s=2;s<a.length-2;s++,r++)o=a[s],t+i>r?(e=l.substitute(this.plugin._nls[3],[r]),n.attr(o,{innerHTML:r,title:e,value:r}),n.style(o,"display",""),o.setAttribute("aria-label",e)):n.style(o,"display","none")},_updatePageStepNodesStyle:function(){var e=null,t=this.plugin.currentPage(),a=this.plugin.getTotalPageNum(),o=function(e,t,i){var a=e.value,o=t?"dojoxGrid"+a+"Btn":"dojoxGridInactived",r=t?"dojoxGrid"+a+"BtnDisable":"dojoxGridActived";i?(n.addClass(e,r),n.removeAttr(e,"tabindex")):(n.addClass(e,o),e.setAttribute("tabindex","-2"))};i.forEach(this.pageStepperDiv.childNodes,function(i){if(n.removeClass(i),isNaN(parseInt(i.value,10))){n.addClass(i,"dojoxGridWardButton");var r="prevPage"==i.value||"firstPage"==i.value?1:a;o(i,!0,t===r)}else e=parseInt(i.value,10),o(i,!1,e===t||"none"===n.style(i,"display"))},this)},_showGotoButton:function(e){this.gotoButton=e,this._updateGotoButton()},_updateGotoButton:function(){return this.gotoButton?("none"==n.style(this.gotoPageTd,"display")&&n.style(this.gotoPageTd,"display",""),this.gotoPageDiv.setAttribute("title",this.plugin._nls[10]),n.toggleClass(this.gotoPageDiv,"dojoxGridPaginatorGotoDivDisabled",this.plugin.getTotalPageNum()<=1),void(this.plugin.getTotalPageNum()<=1?n.removeAttr(this.gotoPageDiv,"tabindex"):this.gotoPageDiv.setAttribute("tabindex","-3"))):(this._gotoPageDialog&&this._gotoPageDialog.destroy(),n.removeAttr(this.gotoPageDiv,"tabindex"),void n.style(this.gotoPageTd,"display","none"))},_openGotopageDialog:function(e){this.plugin.getTotalPageNum()<=1||"keydown"===e.type&&e.keyCode!==d.ENTER&&e.keyCode!==d.SPACE||(this._gotoPageDialog||(this._gotoPageDialog=new k(this.plugin)),this._gotoPageDialog.showDialog(),this.onShowGotoPageDialog(e))},_onSwitchPageSize:function(e){"keydown"===e.type&&e.keyCode!==d.ENTER&&e.keyCode!==d.SPACE||(this.onSwitchPageSize(e),this.plugin.currentPageSize(e.target.value))},_onPageStep:function(e){if("keydown"!==e.type||e.keyCode===d.ENTER||e.keyCode===d.SPACE){var t=this.plugin,i=e.target.value;this.onPageStep(e),isNaN(parseInt(i,10))?t[i]():t.currentPage(parseInt(i,10))}},_getStartPage:function(){var e=this.plugin.currentPage(),t=this.maxPageStep,i=parseInt(t/2,10),a=this.plugin.getTotalPageNum();return i>e||1>e-i||t>=a?1:i>a-e&&e-t>=0?a-t+1:e-i},_getStepPageSize:function(){var e=this._getStartPage(),t=this.plugin.getTotalPageNum(),i=this.maxPageStep;return e+i>t?t-e+1:i}}),F=t("dojox.grid.enhanced.plugins.Pagination",m,{name:"pagination",defaultPageSize:25,defaultPage:1,description:!0,sizeSwitch:!0,pageStepper:!0,gotoButton:!1,pageSizes:[10,25,50,100,1/0],maxPageStep:7,position:"bottom",init:function(){var e=this.grid;e.usingPagination=!0,this._initOptions(),this._currentPage=this.defaultPage,this._currentPageSize=this.grid.rowsPerPage=this.defaultPageSize,this._store=e.store,this.forcePageStoreLayer=new T(this),c.wrap(e,"_storeLayerFetch",this.forcePageStoreLayer),this._paginator=new S("top"!=this.option.position?o.mixin(this.option,{position:"bottom",plugin:this}):o.mixin(this.option,{position:"top",plugin:this})),this._regApis()},destroy:function(){this.inherited(arguments),this._paginator.destroy();var e=this.grid;e.unwrap(this.forcePageStoreLayer.name()),e.scrollToRow=this._gridOriginalfuncs[0],e._onNew=this._gridOriginalfuncs[1],e.removeSelectedRows=this._gridOriginalfuncs[2],this._paginator=null,this._nls=null},currentPage:function(e){return e<=this.getTotalPageNum()&&e>0&&this._currentPage!==e&&(this._currentPage=e,this.grid._refresh(!0),this.grid.resize()),this._currentPage},nextPage:function(){this.currentPage(this._currentPage+1)},prevPage:function(){this.currentPage(this._currentPage-1)},firstPage:function(){this.currentPage(1)},lastPage:function(){this.currentPage(this.getTotalPageNum())},currentPageSize:function(e){if(!isNaN(e)){var t,i=this.grid,a=this._currentPageSize*(this._currentPage-1);if(this._showAll=!isFinite(e),this.grid.usingPagination=!this._showAll,this._currentPageSize=this._showAll?this._maxSize:e,i.rowsPerPage=this._showAll?this._defaultRowsPerPage:e,t=a+Math.min(this._currentPageSize,this._maxSize),t>this._maxSize)this.lastPage();else{var o=Math.ceil(a/this._currentPageSize)+1;o!==this._currentPage?this.currentPage(o):this.grid._refresh(!0)}this.grid.resize()}return this._currentPageSize},getTotalPageNum:function(){return Math.ceil(this._maxSize/this._currentPageSize)},getTotalRowCount:function(){return this._maxSize},scrollToRow:function(e){var t=parseInt(e/this._currentPageSize,10)+1;if(!(t>this.getTotalPageNum())){this.currentPage(t);var i=e%this._currentPageSize;return this._gridOriginalfuncs[0](i)}},removeSelectedRows:function(){this._multiRemoving=!0,this._gridOriginalfuncs[2].apply(),this._multiRemoving=!1,this.grid.store.save&&this.grid.store.save(),this.grid.resize(),this.grid._refresh()},showGotoPageButton:function(e){this._paginator.gotoButton=e,this._paginator._updateGotoButton()},gotoPage:function(t){e.deprecated("dojox.grid.enhanced.EnhancedGrid.gotoPage(page)","use dojox.grid.enhanced.EnhancedGrid.currentPage(page) instead","1.8"),this.currentPage(t)},gotoFirstPage:function(){e.deprecated("dojox.grid.enhanced.EnhancedGrid.gotoFirstPage()","use dojox.grid.enhanced.EnhancedGrid.firstPage() instead","1.8"),this.firstPage()},gotoLastPage:function(){e.deprecated("dojox.grid.enhanced.EnhancedGrid.gotoLastPage()","use dojox.grid.enhanced.EnhancedGrid.lastPage() instead","1.8"),this.lastPage()},changePageSize:function(t){e.deprecated("dojox.grid.enhanced.EnhancedGrid.changePageSize(size)","use dojox.grid.enhanced.EnhancedGrid.currentPageSize(size) instead","1.8"),this.currentPageSize(t)},_nls:null,_showAll:!1,_maxSize:0,_defaultRowsPerPage:25,_currentPage:1,_currentPageSize:25,_initOptions:function(){if(this._defaultRowsPerPage=this.grid.rowsPerPage||25,this.defaultPage=this.option.defaultPage>=1?parseInt(this.option.defaultPage,10):1,this.option.description=void 0!==this.option.description?!!this.option.description:this.description,this.option.sizeSwitch=void 0!==this.option.sizeSwitch?!!this.option.sizeSwitch:this.sizeSwitch,this.option.pageStepper=void 0!==this.option.pageStepper?!!this.option.pageStepper:this.pageStepper,this.option.gotoButton=void 0!==this.option.gotoButton?!!this.option.gotoButton:this.gotoButton,o.isArray(this.option.pageSizes)){var e=[];i.forEach(this.option.pageSizes,function(t){t="number"==typeof t?t:parseInt(t,10),!isNaN(t)&&t>0?e.push(t):i.indexOf(e,1/0)<0&&e.push(1/0)},this),this.option.pageSizes=e.sort(function(e,t){return e-t})}else this.option.pageSizes=this.pageSizes;this.defaultPageSize=this.option.defaultPageSize>=1?parseInt(this.option.defaultPageSize,10):this.pageSizes[0],this.option.maxPageStep=this.option.maxPageStep>0?this.option.maxPageStep:this.maxPageStep,this.option.position=o.isString(this.option.position)?this.option.position.toLowerCase():this.position,this._nls=[M.descTemplate,M.allItemsLabelTemplate,M.pageSizeLabelTemplate,M.pageStepLabelTemplate,M.itemTitle,M.singularItemTitle,M.prevTip,M.firstTip,M.nextTip,M.lastTip,M.gotoButtonTitle,M.dialogTitle,M.dialogIndication,M.pageCountIndication,M.dialogConfirm,M.dialogCancel,M.all]},_regApis:function(){var e=this.grid;e.currentPage=o.hitch(this,this.currentPage),e.nextPage=o.hitch(this,this.nextPage),e.prevPage=o.hitch(this,this.prevPage),e.firstPage=o.hitch(this,this.firstPage),e.lastPage=o.hitch(this,this.lastPage),e.currentPageSize=o.hitch(this,this.currentPageSize),e.showGotoPageButton=o.hitch(this,this.showGotoPageButton),e.getTotalRowCount=o.hitch(this,this.getTotalRowCount),e.getTotalPageNum=o.hitch(this,this.getTotalPageNum),e.gotoPage=o.hitch(this,this.gotoPage),e.gotoFirstPage=o.hitch(this,this.gotoFirstPage),e.gotoLastPage=o.hitch(this,this.gotoLastPage),e.changePageSize=o.hitch(this,this.changePageSize),this._gridOriginalfuncs=[o.hitch(e,e.scrollToRow),o.hitch(e,e._onNew),o.hitch(e,e.removeSelectedRows)],e.scrollToRow=o.hitch(this,this.scrollToRow),e.removeSelectedRows=o.hitch(this,this.removeSelectedRows),e._onNew=o.hitch(this,this._onNew),this.connect(e,"_onDelete",o.hitch(this,this._onDelete))},_onNew:function(e,t){var i=this.getTotalPageNum();((this._currentPage===i||0===i)&&this.grid.get("rowCount")<this._currentPageSize||this._showAll)&&(o.hitch(this.grid,this._gridOriginalfuncs[1])(e,t),this.forcePageStoreLayer.endIdx++),this._maxSize++,this._showAll&&this._currentPageSize++,this._showAll&&this.grid.autoHeight?this.grid._refresh():this._paginator._update()},_onDelete:function(){this._multiRemoving||(this.grid.resize(),this._showAll&&this.grid._refresh()),0===this.grid.get("rowCount")&&this.prevPage()}});return f.registerPlugin(F),F});//# sourceMappingURL=Pagination.js.map