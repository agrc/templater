//>>built
require({cache:{"url:dijit/templates/MenuSeparator.html":'<tr class="dijitMenuSeparator" role="separator">\n\t<td class="dijitMenuSeparatorIconCell">\n\t\t<div class="dijitMenuSeparatorTop"></div>\n\t\t<div class="dijitMenuSeparatorBottom"></div>\n\t</td>\n\t<td colspan="3" class="dijitMenuSeparatorLabelCell">\n\t\t<div class="dijitMenuSeparatorTop dijitMenuSeparatorLabel"></div>\n\t\t<div class="dijitMenuSeparatorBottom"></div>\n\t</td>\n</tr>\n'}}),define("dijit/MenuSeparator",["dojo/_base/declare","dojo/dom","./_WidgetBase","./_TemplatedMixin","./_Contained","dojo/text!./templates/MenuSeparator.html"],function(e,t,i,n,o,a){return e("dijit.MenuSeparator",[i,n,o],{templateString:a,buildRendering:function(){this.inherited(arguments),t.setSelectable(this.domNode,!1)},isFocusable:function(){return!1}})});//# sourceMappingURL=MenuSeparator.js.map