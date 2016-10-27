//>>built
define("dojox/dtl/contrib/dom",["dojo/_base/kernel","dojo/_base/lang","dojo/_base/connect","dojo/dom-style","dojo/dom-construct","../_base","../dom"],function(e,t,i,a,r,o,n){var s=t.getObject("contrib.dom",!0,o),d={render:function(){return this.contents}};return s.StyleNode=t.extend(function(e){this.contents={},this._current={},this._styles=e;for(var i in e){if(-1!=e[i].indexOf("{{"))var a=new o.Template(e[i]);else{var a=t.delegate(d);a.contents=e[i]}this.contents[i]=a}},{render:function(e,t){for(var i in this.contents){var r=this.contents[i].render(e);this._current[i]!=r&&a.set(t.getParent(),i,this._current[i]=r)}return t},unrender:function(e,t){return this._current={},t},clone:function(e){return new this.constructor(this._styles)}}),s.BufferNode=t.extend(function(e,t){this.nodelist=e,this.options=t},{_swap:function(e,t){if(!this.swapped&&this.parent.parentNode){if("node"==e){if(3==t.nodeType&&!this.options.text||1==t.nodeType&&!this.options.node)return}else if("class"==e&&"class"!=e)return;this.onAddNode&&i.disconnect(this.onAddNode),this.onRemoveNode&&i.disconnect(this.onRemoveNode),this.onChangeAttribute&&i.disconnect(this.onChangeAttribute),this.onChangeData&&i.disconnect(this.onChangeData),this.swapped=this.parent.cloneNode(!0),this.parent.parentNode.replaceChild(this.swapped,this.parent)}},render:function(e,a){return this.parent=a.getParent(),this.options.node&&(this.onAddNode=i.connect(a,"onAddNode",t.hitch(this,"_swap","node")),this.onRemoveNode=i.connect(a,"onRemoveNode",t.hitch(this,"_swap","node"))),this.options.text&&(this.onChangeData=i.connect(a,"onChangeData",t.hitch(this,"_swap","node"))),this.options["class"]&&(this.onChangeAttribute=i.connect(a,"onChangeAttribute",t.hitch(this,"_swap","class"))),a=this.nodelist.render(e,a),this.swapped?(this.swapped.parentNode.replaceChild(this.parent,this.swapped),r.destroy(this.swapped)):(this.onAddNode&&i.disconnect(this.onAddNode),this.onRemoveNode&&i.disconnect(this.onRemoveNode),this.onChangeAttribute&&i.disconnect(this.onChangeAttribute),this.onChangeData&&i.disconnect(this.onChangeData)),delete this.parent,delete this.swapped,a},unrender:function(e,t){return this.nodelist.unrender(e,t)},clone:function(e){return new this.constructor(this.nodelist.clone(e),this.options)}}),t.mixin(s,{buffer:function(e,t){for(var i=t.contents.split().slice(1),a={},r=!1,o=i.length;o--;)r=!0,a[i[o]]=!0;r||(a.node=!0);var n=e.parse(["endbuffer"]);return e.next_token(),new s.BufferNode(n,a)},html:function(t,i){return e.deprecated("{% html someVariable %}","Use {{ someVariable|safe }} instead"),t.create_variable_node(i.contents.slice(5)+"|safe")},style_:function(e,i){var a={};i=i.contents.replace(/^style\s+/,"");for(var r,o=i.split(/\s*;\s*/g),n=0;r=o[n];n++){var d=r.split(/\s*:\s*/g),l=d[0],h=t.trim(d[1]);h&&(a[l]=h)}return new s.StyleNode(a)}}),o.register.tags("dojox.dtl.contrib",{dom:["html","attr:style","buffer"]}),s});//# sourceMappingURL=dom.js.map