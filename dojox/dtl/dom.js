//>>built
define("dojox/dtl/dom",["dojo/_base/lang","./_base","dojox/string/tokenize","./Context","dojo/dom","dojo/dom-construct","dojo/_base/html","dojo/_base/array","dojo/_base/connect","dojo/_base/sniff"],function(e,t,a,i,r,o,n,d,s,l){t.BOOLS={checked:1,disabled:1,readonly:1},t.TOKEN_CHANGE=-11,t.TOKEN_ATTR=-12,t.TOKEN_CUSTOM=-13,t.TOKEN_NODE=1;var m=t.text,u=t.dom={_attributes:{},_uppers:{},_re4:/^function anonymous\(\)\s*{\s*(.*)\s*}$/,_reTrim:/(?:^[\n\s]*(\{%)?\s*|\s*(%\})?[\n\s]*$)/g,_reSplit:/\s*%\}[\n\s]*\{%\s*/g,getTemplate:function(t){if("undefined"==typeof this._commentable){this._commentable=!1;var i=document.createElement("div"),r="Test comment handling, and long comments, using comments whenever possible.";i.innerHTML="<!--"+r+"-->",i.childNodes.length&&8==i.firstChild.nodeType&&i.firstChild.data==r&&(this._commentable=!0)}this._commentable||(t=t.replace(/<!--({({|%).*?(%|})})-->/g,"$1")),l("ie")&&(t=t.replace(/\b(checked|disabled|readonly|style)="/g,'t$1="')),t=t.replace(/\bstyle="/g,'tstyle="');for(var o,n,d=l("webkit"),s=[[!0,"select","option"],[d,"tr","td|th"],[d,"thead","tr","th"],[d,"tbody","tr","td"],[d,"table","tbody|thead|tr","tr","td"]],m=[],u=0;n=s[u];u++)if(n[0]&&-1!=t.indexOf("<"+n[1]))for(var h=new RegExp("<"+n[1]+"(?:.|\n)*?>((?:.|\n)+?)</"+n[1]+">","ig");o=h.exec(t);){for(var c,f=n[2].split("|"),y=[],v=0;c=f[v];v++)y.push("<"+c+"(?:.|\n)*?>(?:.|\n)*?</"+c+">");var p=[],g=a(o[1],new RegExp("("+y.join("|")+")","ig"),function(e){var t=/<(\w+)/.exec(e)[1];return p[t]||(p[t]=!0,p.push(t)),{data:e}});if(p.length){for(var M=1==p.length?p[0]:n[2].split("|")[0],b=[],v=0,w=g.length;w>v;v++){var _=g[v];if(e.isObject(_))b.push(_.data);else{var j=_.replace(this._reTrim,"");if(!j)continue;_=j.split(this._reSplit);for(var I=0,k=_.length;k>I;I++){for(var F="",x=2,E=n.length;E>x;x++)if(2==x)F+="<"+M+' dtlinstruction="{% '+_[I].replace('"','\\"')+' %}">';else{if(M==n[x])continue;F+="<"+n[x]+">"}F+="DTL";for(var x=n.length-1;x>1;x--)if(2==x)F+="</"+M+">";else{if(M==n[x])continue;F+="</"+n[x]+">"}b.push("ÿ"+m.length),m.push(F)}}}t=t.replace(o[1],b.join(""))}}for(var u=m.length;u--;)t=t.replace("ÿ"+u,m[u]);for(var T=/\b([a-zA-Z_:][a-zA-Z0-9_\-\.:]*)=['"]/g;o=T.exec(t);){var A=o[1].toLowerCase();"dtlinstruction"!=A&&(A!=o[1]&&(this._uppers[A]=o[1]),this._attributes[A]=!0)}var i=document.createElement("div");i.innerHTML=t;for(var C={nodes:[]};i.childNodes.length;)C.nodes.push(i.removeChild(i.childNodes[0]));return C},tokenize:function(e){for(var t,a=[],i=0;t=e[i++];)1!=t.nodeType?this.__tokenize(t,a):this._tokenize(t,a);return a},_swallowed:[],_tokenize:function(a,i){var r,o,n,d=!1,s=this._swallowed;if(!i.first){d=i.first=!0;var m=t.register.getAttributeTags();for(r=0;o=m[r];r++)try{o[2]({swallowNode:function(){throw 1}},new t.Token(t.TOKEN_ATTR,""))}catch(u){s.push(o)}}for(r=0;o=s[r];r++){var h=a.getAttribute(o[0]);if(h){var s=!1,c=o[2]({swallowNode:function(){return s=!0,a}},new t.Token(t.TOKEN_ATTR,o[0]+" "+h));if(s)return a.parentNode&&a.parentNode.removeChild&&a.parentNode.removeChild(a),void i.push([t.TOKEN_CUSTOM,c])}}var f=[];if(l("ie")&&"SCRIPT"==a.tagName)f.push({nodeType:3,data:a.text}),a.text="";else for(r=0;n=a.childNodes[r];r++)f.push(n);i.push([t.TOKEN_NODE,a]);var y=!1;f.length&&(i.push([t.TOKEN_CHANGE,a]),y=!0);for(var v in this._attributes){var p=!1,g="";if("class"==v)g=a.className||g;else if("for"==v)g=a.htmlFor||g;else{if("value"==v&&a.value==a.innerHTML)continue;if(a.getAttribute)if(g=a.getAttribute(v,2)||g,"href"==v||"src"==v){if(l("ie")){var M=location.href.lastIndexOf(location.hash),b=location.href.substring(0,M).split("/");b.pop(),b=b.join("/")+"/",0==g.indexOf(b)&&(g=g.replace(b,"")),g=decodeURIComponent(g)}}else"tstyle"==v?(p=v,v="style"):t.BOOLS[v.slice(1)]&&e.trim(g)?v=v.slice(1):this._uppers[v]&&e.trim(g)&&(p=this._uppers[v])}p&&(a.setAttribute(p,""),a.removeAttribute(p)),"function"==typeof g&&(g=g.toString().replace(this._re4,"$1")),y||(i.push([t.TOKEN_CHANGE,a]),y=!0),i.push([t.TOKEN_ATTR,a,v,g])}for(r=0,n;n=f[r];r++){if(1==n.nodeType){var w=n.getAttribute("dtlinstruction");w&&(n.parentNode.removeChild(n),n={nodeType:8,data:w})}this.__tokenize(n,i)}!d&&a.parentNode&&a.parentNode.tagName?(y&&i.push([t.TOKEN_CHANGE,a,!0]),i.push([t.TOKEN_CHANGE,a.parentNode]),a.parentNode.removeChild(a)):i.push([t.TOKEN_CHANGE,a,!0,!0])},__tokenize:function(a,i){var r=a.data;switch(a.nodeType){case 1:return void this._tokenize(a,i);case 3:if(!r.match(/[^\s\n]/)||-1==r.indexOf("{{")&&-1==r.indexOf("{%"))i.push([a.nodeType,a]);else for(var o,n=m.tokenize(r),d=0;o=n[d];d++)"string"==typeof o?i.push([t.TOKEN_TEXT,o]):i.push(o);return void(a.parentNode&&a.parentNode.removeChild(a));case 8:if(0==r.indexOf("{%")){var o=e.trim(r.slice(2,-2));if("load "==o.substr(0,5))for(var s,l=e.trim(o).split(/\s+/g),u=1;s=l[u];u++)/\./.test(s)&&(s=s.replace(/\./g,"/")),require([s]);i.push([t.TOKEN_BLOCK,o])}return 0==r.indexOf("{{")&&i.push([t.TOKEN_VAR,e.trim(r.slice(2,-2))]),void(a.parentNode&&a.parentNode.removeChild(a))}}};return t.DomTemplate=e.extend(function(e){if(!e.nodes){var a=r.byId(e);a&&1==a.nodeType?(d.forEach(["class","src","href","name","value"],function(e){u._attributes[e]=!0}),e={nodes:[a]}):("object"==typeof e&&(e=m.getTemplateString(e)),e=u.getTemplate(e))}var i=u.tokenize(e.nodes);t.tests&&(this.tokens=i.slice(0));var o=new t._DomParser(i);this.nodelist=o.parse()},{_count:0,_re:/\bdojo:([a-zA-Z0-9_]+)\b/g,setClass:function(e){this.getRootNode().className=e},getRootNode:function(){return this.buffer.rootNode},getBuffer:function(){return new t.DomBuffer},render:function(e,a){a=this.buffer=a||this.getBuffer(),this.rootNode=null;for(var i,r=this.nodelist.render(e||new t.Context({}),a),o=0;i=a._cache[o];o++)i._cache&&(i._cache.length=0);return r},unrender:function(e,t){return this.nodelist.unrender(e,t)}}),t.DomBuffer=e.extend(function(e){this._parent=e,this._cache=[]},{concat:function(t){var a=this._parent;if(a&&t.parentNode&&t.parentNode===a&&!a._dirty)return this;if(1==t.nodeType&&!this.rootNode)return this.rootNode=t||!0,this;if(!a){if(3==t.nodeType&&e.trim(t.data))throw new Error("Text should not exist outside of the root node in template");return this}if(this._closed){if(3!=t.nodeType||e.trim(t.data))throw new Error("Content should not exist outside of the root node in template");return this}if(a._dirty){if(t._drawn&&t.parentNode==a){var i=a._cache;if(i){for(var r,o=0;r=i[o];o++)this.onAddNode&&this.onAddNode(r),a.insertBefore(r,t),this.onAddNodeComplete&&this.onAddNodeComplete(r);i.length=0}}a._dirty=!1}return a._cache||(a._cache=[],this._cache.push(a)),a._dirty=!0,a._cache.push(t),this},remove:function(e){if("string"==typeof e)this._parent&&this._parent.removeAttribute(e);else{if(1==e.nodeType&&!this.getRootNode()&&!this._removed)return this._removed=!0,this;e.parentNode&&(this.onRemoveNode&&this.onRemoveNode(e),e.parentNode&&e.parentNode.removeChild(e))}return this},setAttribute:function(e,t){var a=n.attr(this._parent,e);return this.onChangeAttribute&&a!=t&&this.onChangeAttribute(this._parent,e,a,t),"style"==e?this._parent.style.cssText=t:(n.attr(this._parent,e,t),"value"==e&&this._parent.setAttribute(e,t)),this},addEvent:function(t,a,i,r){if(!t.getThis())throw new Error("You must use Context.setObject(instance)");this.onAddEvent&&this.onAddEvent(this.getParent(),a,i);var o=i;return e.isArray(r)&&(o=function(e){this[i].apply(this,[e].concat(r))}),s.connect(this.getParent(),a,t.getThis(),o)},setParent:function(e,t,a){if(this._parent||(this._parent=this._first=e),t&&a&&e===this._first&&(this._closed=!0),t){var i=this._parent,r="",o=l("ie")&&"SCRIPT"==i.tagName;if(o&&(i.text=""),i._dirty){for(var n,d=i._cache,s="SELECT"==i.tagName&&!i.options.length,m=0;n=d[m];m++)n!==i&&(this.onAddNode&&this.onAddNode(n),o?r+=n.data:(i.appendChild(n),s&&n.defaultSelected&&m&&(s=m)),this.onAddNodeComplete&&this.onAddNodeComplete(n));s&&(i.options.selectedIndex="number"==typeof s?s:0),d.length=0,i._dirty=!1}o&&(i.text=r)}return this._parent=e,this.onSetParent&&this.onSetParent(e,t,a),this},getParent:function(){return this._parent},getRootNode:function(){return this.rootNode}}),t._DomNode=e.extend(function(e){this.contents=e},{render:function(e,t){return this._rendered=!0,t.concat(this.contents)},unrender:function(e,t){return this._rendered?(this._rendered=!1,t.remove(this.contents)):t},clone:function(e){return new this.constructor(this.contents)}}),t._DomNodeList=e.extend(function(e){this.contents=e||[]},{push:function(e){this.contents.push(e)},unshift:function(e){this.contents.unshift(e)},render:function(e,a,i){if(a=a||t.DomTemplate.prototype.getBuffer(),i)var r=a.getParent();for(var o=0;o<this.contents.length;o++)if(a=this.contents[o].render(e,a),!a)throw new Error("Template node render functions must return their buffer");return r&&a.setParent(r),a},dummyRender:function(e,a,i){var r=document.createElement("div"),n=a.getParent(),d=n._clone;n._clone=r;var s=this.clone(a,r);if(d?n._clone=d:n._clone=null,a=t.DomTemplate.prototype.getBuffer(),s.unshift(new t.ChangeNode(r)),s.unshift(new t._DomNode(r)),s.push(new t.ChangeNode(r,!0)),s.render(e,a),i)return a.getRootNode();var m=r.innerHTML;return l("ie")?o.replace(/\s*_(dirty|clone)="[^"]*"/g,""):m},unrender:function(e,t,a){if(a)var i=t.getParent();for(var r=0;r<this.contents.length;r++)if(t=this.contents[r].unrender(e,t),!t)throw new Error("Template node render functions must return their buffer");return i&&t.setParent(i),t},clone:function(e){for(var a=e.getParent(),i=this.contents,r=new t._DomNodeList,o=[],n=0;n<i.length;n++){var d=i[n].clone(e);if(d instanceof t.ChangeNode||d instanceof t._DomNode){var s=d.contents._clone;if(s)d.contents=s;else if(a!=d.contents&&d instanceof t._DomNode){var l=d.contents;d.contents=d.contents.cloneNode(!1),e.onClone&&e.onClone(l,d.contents),o.push(l),l._clone=d.contents}}r.push(d)}for(var d,n=0;d=o[n];n++)d._clone=null;return r},rtrim:function(){for(;;){var e=this.contents.length-1;if(!(this.contents[e]instanceof t._DomTextNode&&this.contents[e].isEmpty()))break;this.contents.pop()}return this}}),t._DomVarNode=e.extend(function(e){this.contents=new t._Filter(e)},{render:function(e,a){var i=this.contents.resolve(e),r="text";switch(i&&(i.render&&i.getRootNode?r="injection":i.safe&&(i.nodeType?r="node":i.toString&&(i=i.toString(),r="html"))),this._type&&r!=this._type&&this.unrender(e,a),this._type=r,r){case"text":if(this._rendered=!0,this._txt=this._txt||document.createTextNode(i),this._txt.data!=i){var o=this._txt.data;this._txt.data=i,a.onChangeData&&a.onChangeData(this._txt,o,this._txt.data)}return a.concat(this._txt);case"injection":var n=i.getRootNode();this._rendered&&n!=this._root&&(a=this.unrender(e,a)),this._root=n;var d=this._injected=new t._DomNodeList;return d.push(new t.ChangeNode(a.getParent())),d.push(new t._DomNode(n)),d.push(i),d.push(new t.ChangeNode(a.getParent())),this._rendered=!0,d.render(e,a);case"node":return this._rendered=!0,this._node&&this._node!=i&&this._node.parentNode&&this._node.parentNode===a.getParent()&&this._node.parentNode.removeChild(this._node),this._node=i,a.concat(i);case"html":if(this._rendered&&this._src!=i&&(a=this.unrender(e,a)),this._src=i,!this._rendered){this._rendered=!0,this._html=this._html||[];var s=this._div=this._div||document.createElement("div");s.innerHTML=i;for(var l=s.childNodes;l.length;){var m=s.removeChild(l[0]);this._html.push(m),a=a.concat(m)}}return a;default:return a}},unrender:function(e,t){if(!this._rendered)return t;switch(this._rendered=!1,this._type){case"text":return t.remove(this._txt);case"injection":return this._injection.unrender(e,t);case"node":return this._node.parentNode===t.getParent()?t.remove(this._node):t;case"html":for(var a=0,i=this._html.length;i>a;a++)t=t.remove(this._html[a]);return t;default:return t}},clone:function(){return new this.constructor(this.contents.getExpression())}}),t.ChangeNode=e.extend(function(e,t,a){this.contents=e,this.up=t,this.root=a},{render:function(e,t){return t.setParent(this.contents,this.up,this.root)},unrender:function(e,t){return t.getParent()?t.setParent(this.contents):t},clone:function(){return new this.constructor(this.contents,this.up,this.root)}}),t.AttributeNode=e.extend(function(e,a){this.key=e,this.value=a,this.contents=a,this._pool[a]?this.nodelist=this._pool[a]:((this.nodelist=t.quickFilter(a))||(this.nodelist=new t.Template(a,!0).nodelist),this._pool[a]=this.nodelist),this.contents=""},{_pool:{},render:function(e,a){var i=this.key,r=this.nodelist.dummyRender(e);return t.BOOLS[i]&&(r=!("false"==r||"undefined"==r||!r)),r!==this.contents?(this.contents=r,a.setAttribute(i,r)):a},unrender:function(e,t){return this.contents="",t.remove(this.key)},clone:function(e){return new this.constructor(this.key,this.value)}}),t._DomTextNode=e.extend(function(e){this.contents=document.createTextNode(e),this.upcoming=e},{set:function(e){return this.upcoming=e,this},render:function(e,t){if(this.contents.data!=this.upcoming){var a=this.contents.data;this.contents.data=this.upcoming,t.onChangeData&&t.onChangeData(this.contents,a,this.upcoming)}return t.concat(this.contents)},unrender:function(e,t){return t.remove(this.contents)},isEmpty:function(){return!e.trim(this.contents.data)},clone:function(){return new this.constructor(this.contents.data)}}),t._DomParser=e.extend(function(e){this.contents=e},{i:0,parse:function(a){var i={},r=this.contents;a||(a=[]);for(var o=0;o<a.length;o++)i[a[o]]=!0;for(var d=new t._DomNodeList;this.i<r.length;){var s=r[this.i++],l=s[0],u=s[1];if(l==t.TOKEN_CUSTOM)d.push(u);else if(l==t.TOKEN_CHANGE){var h=new t.ChangeNode(u,s[2],s[3]);u[h.attr]=h,d.push(h)}else if(l==t.TOKEN_ATTR){var c=m.getTag("attr:"+s[2],!0);if(c&&s[3])-1==s[3].indexOf("{%")&&-1==s[3].indexOf("{{")||u.setAttribute(s[2],""),d.push(c(null,new t.Token(l,s[2]+" "+s[3])));else if(e.isString(s[3]))if("style"==s[2]||-1!=s[3].indexOf("{%")||-1!=s[3].indexOf("{{"))d.push(new t.AttributeNode(s[2],s[3]));else if(e.trim(s[3]))try{n.attr(u,s[2],s[3])}catch(f){}}else if(l==t.TOKEN_NODE){var c=m.getTag("node:"+u.tagName.toLowerCase(),!0);c&&d.push(c(null,new t.Token(l,u),u.tagName.toLowerCase())),d.push(new t._DomNode(u))}else if(l==t.TOKEN_VAR)d.push(new t._DomVarNode(u));else if(l==t.TOKEN_TEXT)d.push(new t._DomTextNode(u.data||u));else if(l==t.TOKEN_BLOCK){if(i[u])return--this.i,d;var y=u.split(/\s+/g);if(y.length){y=y[0];var c=m.getTag(y);if("function"!=typeof c)throw new Error("Function not found for "+y);var v=c(this,new t.Token(l,u));v&&d.push(v)}}}if(a.length)throw new Error("Could not find closing tag(s): "+a.toString());return d},next_token:function(){var e=this.contents[this.i++];return new t.Token(e[0],e[1])},delete_first_token:function(){this.i++},skip_past:function(e){return t._Parser.prototype.skip_past.call(this,e)},create_variable_node:function(e){return new t._DomVarNode(e)},create_text_node:function(e){return new t._DomTextNode(e||"")},getTemplate:function(e){return new t.DomTemplate(u.getTemplate(e))}}),u});//# sourceMappingURL=dom.js.map