//>>built
define("dojox/dtl/tag/loader",["dojo/_base/lang","../_base","dojo/_base/array","dojo/_base/connect"],function(e,t,i,r){var a=e.getObject("tag.loader",!0,t);return a.BlockNode=e.extend(function(e,t){this.name=e,this.nodelist=t},{"super":function(){if(this.parent){var e=this.parent.nodelist.dummyRender(this.context,null,!0);return"string"==typeof e&&(e=new String(e)),e.safe=!0,e}return""},render:function(e,t){var i,a=this.name,n=this.nodelist;if(t.blocks){var o=t.blocks[a];o&&(i=o.parent,n=o.nodelist,o.used=!0)}if(this.rendered=n,e=e.push(),this.context=e,this.parent=null,n!=this.nodelist&&(this.parent=this),e.block=this,t.getParent)var s=t.getParent(),d=r.connect(t,"onSetParent",function(e,i,r){i&&r&&t.setParent(s)});return t=n.render(e,t,this),d&&r.disconnect(d),e=e.pop(),t},unrender:function(e,t){return this.rendered.unrender(e,t)},clone:function(e){return new this.constructor(this.name,this.nodelist.clone(e))},toString:function(){return"dojox.dtl.tag.loader.BlockNode"}}),a.ExtendsNode=e.extend(function(e,t,i,r,a){this.getTemplate=e,this.nodelist=t,this.shared=i,this.parent=r,this.key=a},{parents:{},getParent:function(e){var t=this.parent;if(!t){var i;if(t=this.parent=e.get(this.key,!1),!t)throw new Error("extends tag used a variable that did not resolve");if("object"==typeof t){var r=t.url||t.templatePath;t.shared&&(this.shared=!0),r?t=this.parent=r.toString():t.templateString?(i=t.templateString,t=this.parent=" "):t=this.parent=this.parent.toString()}t&&0===t.indexOf("shared:")&&(this.shared=!0,t=this.parent=t.substring(7,t.length))}if(!t)throw new Error("Invalid template name in 'extends' tag.");return t.render?t:this.parents[t]?this.parents[t]:(this.parent=this.getTemplate(i||dojox.dtl.text.getTemplateString(t)),this.shared&&(this.parents[t]=this.parent),this.parent)},render:function(e,t){var i=this.getParent(e);i.blocks=i.blocks||{},t.blocks=t.blocks||{};for(var r,a=0;r=this.nodelist.contents[a];a++)if(r instanceof dojox.dtl.tag.loader.BlockNode){var n=i.blocks[r.name];n&&n.nodelist!=r.nodelist&&(t=n.nodelist.unrender(e,t)),i.blocks[r.name]=t.blocks[r.name]={shared:this.shared,nodelist:r.nodelist,used:!1}}return this.rendered=i,i.nodelist.render(e,t,this)},unrender:function(e,t){return this.rendered.unrender(e,t,this)},toString:function(){return"dojox.dtl.block.ExtendsNode"}}),a.IncludeNode=e.extend(function(e,i,r,a,n){this._path=e,this.constant=i,this.path=i?e:new t._Filter(e),this.getTemplate=r,this.text=a,this.parsed=5==arguments.length?n:!0},{_cache:[{},{}],render:function(e,i){var r=(this.constant?this.path:this.path.resolve(e)).toString(),a=Number(this.parsed),n=!1;r!=this.last&&(n=!0,this.last&&(i=this.unrender(e,i)),this.last=r);var o=this._cache[a];if(a){if(o[r]||(o[r]=t.text._resolveTemplateArg(r,!0)),n){var s=this.getTemplate(o[r]);this.rendered=s.nodelist}return this.rendered.render(e,i,this)}if(this.text instanceof t._TextNode)return n&&(this.rendered=this.text,this.rendered.set(t.text._resolveTemplateArg(r,!0))),this.rendered.render(e,i);if(!o[r]){var d=[],l=document.createElement("div");l.innerHTML=t.text._resolveTemplateArg(r,!0);for(var u=l.childNodes;u.length;){var c=l.removeChild(u[0]);d.push(c)}o[r]=d}if(n){this.nodelist=[];for(var h,f=0;h=o[r][f];f++)this.nodelist.push(h.cloneNode(!0))}for(var m,f=0;m=this.nodelist[f];f++)i=i.concat(m);return i},unrender:function(e,t){if(this.rendered&&(t=this.rendered.unrender(e,t)),this.nodelist)for(var i,r=0;i=this.nodelist[r];r++)t=t.remove(i);return t},clone:function(e){return new this.constructor(this._path,this.constant,this.getTemplate,this.text.clone(e),this.parsed)}}),e.mixin(a,{block:function(e,t){var i=t.contents.split(),r=i[1];e._blocks=e._blocks||{},e._blocks[r]=e._blocks[r]||[],e._blocks[r].push(r);var a=e.parse(["endblock","endblock "+r]).rtrim();return e.next_token(),new dojox.dtl.tag.loader.BlockNode(r,a)},extends_:function(e,t){var i=t.contents.split(),r=!1,a=null,n=null;'"'==i[1].charAt(0)||"'"==i[1].charAt(0)?a=i[1].substring(1,i[1].length-1):n=i[1],a&&0==a.indexOf("shared:")&&(r=!0,a=a.substring(7,a.length));var o=e.parse();return new dojox.dtl.tag.loader.ExtendsNode(e.getTemplate,o,r,a,n)},include:function(e,t){var i=t.contents.split();if(2!=i.length)throw new Error(i[0]+" tag takes one argument: the name of the template to be included");var r=i[1],n=!1;return'"'!=r.charAt(0)&&"'"!=r.slice(-1)||r.charAt(0)!=r.slice(-1)||(r=r.slice(1,-1),n=!0),new a.IncludeNode(r,n,e.getTemplate,e.create_text_node())},ssi:function(e,i){var r=i.contents.split(),n=!1;if(3==r.length&&(n="parsed"==r.pop(),!n))throw new Error("Second (optional) argument to ssi tag must be 'parsed'");var o=a.include(e,new t.Token(i.token_type,r.join(" ")));return o.parsed=n,o}}),a});//# sourceMappingURL=loader.js.map