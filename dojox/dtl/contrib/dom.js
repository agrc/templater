//>>built
define("dojox/dtl/contrib/dom",["dojo/_base/kernel","dojo/_base/lang","dojo/_base/connect","dojo/dom-style","dojo/dom-construct","../_base","../dom"],function(e,t,i,r,a,n,o){var s=t.getObject("contrib.dom",!0,n),d={render:function(){return this.contents}};return s.StyleNode=t.extend(function(e){this.contents={},this._current={},this._styles=e;for(var i in e){if(-1!=e[i].indexOf("{{"))var r=new n.Template(e[i]);else{var r=t.delegate(d);r.contents=e[i]}this.contents[i]=r}},{render:function(e,t){for(var i in this.contents){var a=this.contents[i].render(e);this._current[i]!=a&&r.set(t.getParent(),i,this._current[i]=a)}return t},unrender:function(e,t){return this._current={},t},clone:function(e){return new this.constructor(this._styles)}}),s.BufferNode=t.extend(function(e,t){this.nodelist=e,this.options=t},{_swap:function(e,t){if(!this.swapped&&this.parent.parentNode){if("node"==e){if(3==t.nodeType&&!this.options.text||1==t.nodeType&&!this.options.node)return}else if("class"==e&&"class"!=e)return;this.onAddNode&&i.disconnect(this.onAddNode),this.onRemoveNode&&i.disconnect(this.onRemoveNode),this.onChangeAttribute&&i.disconnect(this.onChangeAttribute),this.onChangeData&&i.disconnect(this.onChangeData),this.swapped=this.parent.cloneNode(!0),this.parent.parentNode.replaceChild(this.swapped,this.parent)}},render:function(e,r){return this.parent=r.getParent(),this.options.node&&(this.onAddNode=i.connect(r,"onAddNode",t.hitch(this,"_swap","node")),this.onRemoveNode=i.connect(r,"onRemoveNode",t.hitch(this,"_swap","node"))),this.options.text&&(this.onChangeData=i.connect(r,"onChangeData",t.hitch(this,"_swap","node"))),this.options.class&&(this.onChangeAttribute=i.connect(r,"onChangeAttribute",t.hitch(this,"_swap","class"))),r=this.nodelist.render(e,r),this.swapped?(this.swapped.parentNode.replaceChild(this.parent,this.swapped),a.destroy(this.swapped)):(this.onAddNode&&i.disconnect(this.onAddNode),this.onRemoveNode&&i.disconnect(this.onRemoveNode),this.onChangeAttribute&&i.disconnect(this.onChangeAttribute),this.onChangeData&&i.disconnect(this.onChangeData)),delete this.parent,delete this.swapped,r},unrender:function(e,t){return this.nodelist.unrender(e,t)},clone:function(e){return new this.constructor(this.nodelist.clone(e),this.options)}}),t.mixin(s,{buffer:function(e,t){for(var i=t.contents.split().slice(1),r={},a=!1,n=i.length;n--;)a=!0,r[i[n]]=!0;a||(r.node=!0);var o=e.parse(["endbuffer"]);return e.next_token(),new s.BufferNode(o,r)},html:function(t,i){return e.deprecated("{% html someVariable %}","Use {{ someVariable|safe }} instead"),t.create_variable_node(i.contents.slice(5)+"|safe")},style_:function(e,i){var r={};i=i.contents.replace(/^style\s+/,"");for(var a,n=i.split(/\s*;\s*/g),o=0;a=n[o];o++){var d=a.split(/\s*:\s*/g),l=d[0],u=t.trim(d[1]);u&&(r[l]=u)}return new s.StyleNode(r)}}),n.register.tags("dojox.dtl.contrib",{dom:["html","attr:style","buffer"]}),s});//# sourceMappingURL=dom.js.map