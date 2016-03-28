//>>built
require({cache:{"url:dojox/calc/templates/Standard.html":'<div class="dijitReset dijitInline dojoxCalc"\n><table class="dijitReset dijitInline dojoxCalcLayout" data-dojo-attach-point="calcTable" rules="none" cellspacing=0 cellpadding=0 border=0>\n	<tr\n		><td colspan="4" class="dojoxCalcInputContainer"\n			><input data-dojo-type="dijit.form.TextBox" data-dojo-attach-event="onBlur:onBlur,onKeyPress:onKeyPress" data-dojo-attach-point=\'textboxWidget\'\n		/></td\n	></tr>\n	<tr>\n		<td class="dojoxCalcButtonContainer">\n			<button data-dojo-type="dijit.form.Button" data-dojo-attach-point="seven" label="7" value=\'7\' data-dojo-attach-event=\'onClick:insertText\' />\n		</td>\n		<td class="dojoxCalcButtonContainer">\n			<button data-dojo-type="dijit.form.Button" data-dojo-attach-point="eight" label="8" value=\'8\' data-dojo-attach-event=\'onClick:insertText\' />\n		</td>\n		<td class="dojoxCalcButtonContainer">\n			<button data-dojo-type="dijit.form.Button" data-dojo-attach-point="nine" label="9" value=\'9\' data-dojo-attach-event=\'onClick:insertText\' />\n		</td>\n		<td class="dojoxCalcButtonContainer">\n			<button data-dojo-type="dijit.form.Button" data-dojo-attach-point="divide" label="/" value=\'/\' data-dojo-attach-event=\'onClick:insertOperator\' />\n		</td>\n	</tr>\n	<tr>\n		<td class="dojoxCalcButtonContainer">\n			<button data-dojo-type="dijit.form.Button" data-dojo-attach-point="four" label="4" value=\'4\' data-dojo-attach-event=\'onClick:insertText\' />\n		</td>\n		<td class="dojoxCalcButtonContainer">\n			<button data-dojo-type="dijit.form.Button" data-dojo-attach-point="five" label="5" value=\'5\' data-dojo-attach-event=\'onClick:insertText\' />\n		</td>\n		<td class="dojoxCalcButtonContainer">\n			<button data-dojo-type="dijit.form.Button" data-dojo-attach-point="six" label="6" value=\'6\' data-dojo-attach-event=\'onClick:insertText\' />\n		</td>\n		<td class="dojoxCalcButtonContainer">\n			<button data-dojo-type="dijit.form.Button" data-dojo-attach-point="multiply" label="*" value=\'*\' data-dojo-attach-event=\'onClick:insertOperator\' />\n		</td>\n	</tr>\n	<tr>\n		<td class="dojoxCalcButtonContainer">\n			<button data-dojo-type="dijit.form.Button" data-dojo-attach-point="one" label="1" value=\'1\' data-dojo-attach-event=\'onClick:insertText\' />\n		</td>\n		<td class="dojoxCalcButtonContainer">\n			<button data-dojo-type="dijit.form.Button" data-dojo-attach-point="two" label="2" value=\'2\' data-dojo-attach-event=\'onClick:insertText\' />\n		</td>\n		<td class="dojoxCalcButtonContainer">\n			<button data-dojo-type="dijit.form.Button" data-dojo-attach-point="three" label="3" value=\'3\' data-dojo-attach-event=\'onClick:insertText\' />\n		</td>\n		<td class="dojoxCalcButtonContainer">\n			<button data-dojo-type="dijit.form.Button" data-dojo-attach-point="add" label="+" value=\'+\' data-dojo-attach-event=\'onClick:insertOperator\' />\n		</td>\n	</tr>\n	<tr>\n		<td class="dojoxCalcButtonContainer">\n			<button data-dojo-type="dijit.form.Button" data-dojo-attach-point="decimal" label="." value=\'.\' data-dojo-attach-event=\'onClick:insertText\' />\n		</td>\n		<td class="dojoxCalcButtonContainer">\n			<button data-dojo-type="dijit.form.Button" data-dojo-attach-point="zero" label="0" value=\'0\' data-dojo-attach-event=\'onClick:insertText\' />\n		</td>\n		<td class="dojoxCalcButtonContainer">\n			<button data-dojo-type="dijit.form.Button" data-dojo-attach-point="equals" label="x=y" value=\'=\' data-dojo-attach-event=\'onClick:insertText\' />\n		</td>\n		<td class="dojoxCalcMinusButtonContainer">\n			<span data-dojo-type="dijit.form.ComboButton" data-dojo-attach-point="subtract" label=\'-\' value=\'-\' data-dojo-attach-event=\'onClick:insertOperator\'>\n\n				<div data-dojo-type="dijit.Menu" style="display:none;">\n					<div data-dojo-type="dijit.MenuItem" data-dojo-attach-event="onClick:insertMinus">\n						(-)\n					</div>\n				</div>\n			</span>\n		</td>\n	</tr>\n	<tr>\n		<td class="dojoxCalcButtonContainer">\n			<button data-dojo-type="dijit.form.Button" data-dojo-attach-point="clear" label="Clear" data-dojo-attach-event=\'onClick:clearText\' />\n		</td>\n		<td class="dojoxCalcButtonContainer">\n			<button data-dojo-type="dijit.form.Button" data-dojo-attach-point="sqrt" label="&#x221A;" value="&#x221A;" data-dojo-attach-event=\'onClick:insertText\' />\n		</td>\n		<td class="dojoxCalcButtonContainer">\n			<button data-dojo-type="dijit.form.Button" data-dojo-attach-point="power" label="^" value="^" data-dojo-attach-event=\'onClick:insertOperator\' />\n		</td>\n		<td class="dojoxCalcButtonContainer">\n			<button data-dojo-type="dijit.form.Button" data-dojo-attach-point="comma" label="," value=\',\' data-dojo-attach-event=\'onClick:insertText\' />\n		</td>\n	</tr>\n	<tr>\n		<td class="dojoxCalcButtonContainer">\n			<button data-dojo-type="dijit.form.Button" data-dojo-attach-point="AnsButton" label="Ans" value="Ans" data-dojo-attach-event=\'onClick:insertText\' />\n		</td>\n		<td class="dojoxCalcButtonContainer">\n			<button data-dojo-type="dijit.form.Button" data-dojo-attach-point="LeftParenButton" label="(" value="(" data-dojo-attach-event=\'onClick:insertText\' />\n		</td>\n		<td class="dojoxCalcButtonContainer">\n			<button data-dojo-type="dijit.form.Button" data-dojo-attach-point="RightParenButton" label=")" value=")" data-dojo-attach-event=\'onClick:insertText\' />\n		</td>\n		<td class="dojoxCalcButtonContainer">\n			<button data-dojo-type="dijit.form.Button" data-dojo-attach-point="enter" label="Enter" data-dojo-attach-event=\'onClick:parseTextbox\' />\n		</td>\n	</tr>\n</table>\n<span data-dojo-attach-point="executor" data-dojo-type="dojox.calc._Executor" data-dojo-attach-event="onLoad:executorLoaded"></span>\n</div>\n'}}),define("dojox/calc/Standard",["dojo/_base/declare","dojo/_base/lang","dojo/_base/sniff","dojo/_base/window","dojo/_base/event","dojo/dom-style","dojo/ready","dojo/keys","dijit/registry","dijit/typematic","dijit/_WidgetBase","dijit/_WidgetsInTemplateMixin","dijit/_TemplatedMixin","dijit/form/_TextBoxMixin","dojox/math/_base","dijit/TooltipDialog","dojo/text!./templates/Standard.html","dojox/calc/_Executor","dijit/Menu","dijit/MenuItem","dijit/form/ComboButton","dijit/form/Button","dijit/form/TextBox"],function(e,t,i,a,r,n,o,d,s,l,u,c,f,m,h,y,p,v){return e("dojox.calc.Standard",[u,f,c],{templateString:p,readStore:null,writeStore:null,functions:[],executorLoaded:function(){o(t.hitch(this,function(){this.loadStore(this.readStore,!0),this.loadStore(this.writeStore)}))},saveFunction:function(e,t,i){this.functions[e]=this.executor.normalizedFunction(e,t,i),this.functions[e].args=t,this.functions[e].body=i},loadStore:function(e,i){e&&e.query({}).forEach(t.hitch(this,function(e){t.hitch(this,i?this.executor.normalizedFunction:this.saveFunction)(e.name,e.args,e.body)}))},parseTextbox:function(){var e=this.textboxWidget.textbox.value;if(""==e&&this.commandList.length>0&&(this.setTextboxValue(this.textboxWidget,this.commandList[this.commandList.length-1]),e=this.textboxWidget.textbox.value),""!=e){var t=this.executor.eval(e);"number"==typeof t&&isNaN(t)?(0!=this.commandList.length&&this.commandList[this.commandList.length-1]==e||this.commandList.push(e),this.print(e,!1),this.print("Not a Number",!0)):("object"==typeof t&&"length"in t||"object"!=typeof t)&&"function"!=typeof t&&null!=t&&(this.executor.eval("Ans="+t),0!=this.commandList.length&&this.commandList[this.commandList.length-1]==e||this.commandList.push(e),this.print(e,!1),this.print(t,!0)),this.commandIndex=this.commandList.length-1,this.hasDisplay&&(this.displayBox.scrollTop=this.displayBox.scrollHeight),m.selectInputText(this.textboxWidget.textbox)}else this.textboxWidget.focus()},cycleCommands:function(e,t,i){if(-1!=e&&0!=this.commandList.length){var a=i.charOrCode;a==d.UP_ARROW?this.cycleCommandUp():a==d.DOWN_ARROW&&this.cycleCommandDown()}},cycleCommandUp:function(){this.commandIndex-1<0?this.commandIndex=0:this.commandIndex--,this.setTextboxValue(this.textboxWidget,this.commandList[this.commandIndex])},cycleCommandDown:function(){this.commandIndex+1>=this.commandList.length?(this.commandIndex=this.commandList.length,this.setTextboxValue(this.textboxWidget,"")):(this.commandIndex++,this.setTextboxValue(this.textboxWidget,this.commandList[this.commandIndex]))},onBlur:function(){if(i("ie")){var e=a.doc.selection.createRange().duplicate(),t=e.text||"",r=this.textboxWidget.textbox.createTextRange();e.move("character",0),r.move("character",0);try{r.setEndPoint("EndToEnd",e),this.textboxWidget.textbox.selectionEnd=(this.textboxWidget.textbox.selectionStart=String(r.text).replace(/\r/g,"").length)+t.length}catch(n){}}},onKeyPress:function(e){if(e.charOrCode==d.ENTER)this.parseTextbox(),r.stop(e);else if("!"==e.charOrCode||"^"==e.charOrCode||"*"==e.charOrCode||"/"==e.charOrCode||"-"==e.charOrCode||"+"==e.charOrCode){if(i("ie")){var t=a.doc.selection.createRange().duplicate(),n=t.text||"",o=this.textboxWidget.textbox.createTextRange();t.move("character",0),o.move("character",0);try{o.setEndPoint("EndToEnd",t),this.textboxWidget.textbox.selectionEnd=(this.textboxWidget.textbox.selectionStart=String(o.text).replace(/\r/g,"").length)+n.length}catch(e){}}""==this.textboxWidget.get("value")?this.setTextboxValue(this.textboxWidget,"Ans"):this.putInAnsIfTextboxIsHighlighted(this.textboxWidget.textbox,r.charOrCode)&&(this.setTextboxValue(this.textboxWidget,"Ans"),m.selectInputText(this.textboxWidget.textbox,this.textboxWidget.textbox.value.length,this.textboxWidget.textbox.value.length))}},insertMinus:function(){this.insertText("-")},print:function(e,t){var i="<span style='display:block;";i+=t?"text-align:right;'>":"text-align:left;'>",i+=e+"<br></span>",this.hasDisplay?this.displayBox.innerHTML+=i:this.setTextboxValue(this.textboxWidget,e)},setTextboxValue:function(e,t){e.set("value",t)},putInAnsIfTextboxIsHighlighted:function(e){if("number"==typeof e.selectionStart){if(0==e.selectionStart&&e.selectionEnd==e.value.length)return!0}else if(document.selection){var t=document.selection.createRange();if(e.value==t.text)return!0}return!1},clearText:function(){this.hasDisplay&&""==this.textboxWidget.get("value")?this.displayBox.innerHTML="":this.setTextboxValue(this.textboxWidget,""),this.textboxWidget.focus()},insertOperator:function(e){"object"==typeof e&&(e=e=s.getEnclosingWidget(e.target).value),(""==this.textboxWidget.get("value")||this.putInAnsIfTextboxIsHighlighted(this.textboxWidget.textbox))&&(e="Ans"+e),this.insertText(e)},insertText:function(e){setTimeout(t.hitch(this,function(){var t=this.textboxWidget.textbox;""==t.value&&(t.selectionStart=0,t.selectionEnd=0),"object"==typeof e&&(e=e=s.getEnclosingWidget(e.target).value);var a=t.value.replace(/\r/g,"");if("number"==typeof t.selectionStart){var r=t.selectionStart,n=0;i("opera")&&(n=(t.value.substring(0,r).match(/\r/g)||[]).length),t.value=a.substring(0,t.selectionStart-n)+e+a.substring(t.selectionEnd-n),t.focus(),r+=e.length,m.selectInputText(this.textboxWidget.textbox,r,r)}else document.selection&&(this.handle&&(clearTimeout(this.handle),this.handle=null),t.focus(),this.handle=setTimeout(function(){var t=document.selection.createRange();t.text=e,t.select(),this.handle=null},0))}),0)},hasDisplay:!1,postCreate:function(){this.handle=null,this.commandList=[],this.commandIndex=0,this.displayBox&&(this.hasDisplay=!0),this.toFracButton&&!v.toFrac&&n.set(this.toFracButton.domNode,{visibility:"hidden"}),this.functionMakerButton&&!v.FuncGen&&n.set(this.functionMakerButton.domNode,{visibility:"hidden"}),this.grapherMakerButton&&!v.Grapher&&n.set(this.grapherMakerButton.domNode,{visibility:"hidden"}),this._connects.push(l.addKeyListener(this.textboxWidget.textbox,{charOrCode:d.UP_ARROW,shiftKey:!1,metaKey:!1,ctrlKey:!1},this,this.cycleCommands,200,200)),this._connects.push(l.addKeyListener(this.textboxWidget.textbox,{charOrCode:d.DOWN_ARROW,shiftKey:!1,metaKey:!1,ctrlKey:!1},this,this.cycleCommands,200,200)),this.startup()}})});//# sourceMappingURL=Standard.js.map