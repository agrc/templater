//>>built
require({cache:{"url:dojox/form/resources/FileInput.html":'<div class="dijitFileInput">\n	<input id="${id}" class="dijitFileInputReal" type="file" dojoAttachPoint="fileInput" name="${name}" />\n	<div class="dijitFakeInput">\n		<input class="dijitFileInputVisible" type="text" dojoAttachPoint="focusNode, inputNode" />\n		<div class="dijitInline dijitFileInputText" dojoAttachPoint="titleNode">${label}</div>\n		<div class="dijitInline dijitFileInputButton" dojoAttachPoint="cancelNode" \n			dojoAttachEvent="onclick:reset">${cancelText}</div>\n	</div>\n</div>\n'}}),define("dojox/form/FileInput",["dojo/_base/declare","dojo/_base/kernel","dojo/_base/fx","dojo/dom-attr","dojo/dom-class","dojo/text!./resources/FileInput.html","dijit/form/_FormWidget","dijit/_Templated"],function(e,t,i,a,r,n,o,s){return t.experimental("dojox.form.FileInput"),e("dojox.form.FileInput",o,{label:"Browse ...",cancelText:"Cancel",name:"uploadFile",templateString:n,startup:function(){this._listener=this.connect(this.fileInput,"onchange","_matchValue"),this._keyListener=this.connect(this.fileInput,"onkeyup","_matchValue")},postCreate:function(){},_matchValue:function(){this.inputNode.value=this.fileInput.value,this.inputNode.value&&(this.cancelNode.style.visibility="visible",i.fadeIn({node:this.cancelNode,duration:275}).play())},setLabel:function(e,t){this.titleNode.innerHTML=e},reset:function(e){this.disconnect(this._listener),this.disconnect(this._keyListener),this.fileInput&&this.domNode.removeChild(this.fileInput),i.fadeOut({node:this.cancelNode,duration:275}).play(),this.fileInput=document.createElement("input"),this.fileInput.setAttribute("type","file"),this.fileInput.setAttribute("id",this.id),this.fileInput.setAttribute("name",this.name),r.add(this.fileInput,"dijitFileInputReal"),this.domNode.appendChild(this.fileInput),this._keyListener=this.connect(this.fileInput,"onkeyup","_matchValue"),this._listener=this.connect(this.fileInput,"onchange","_matchValue"),this.inputNode.value=""}})});//# sourceMappingURL=FileInput.js.map