//>>built
define("dojox/editor/plugins/NormalizeStyle",["dojo","dijit","dojox","dijit/_editor/_Plugin","dijit/_editor/html","dojo/_base/connect","dojo/_base/declare"],function(e,t,a,i,r){var o=e.declare("dojox.editor.plugins.NormalizeStyle",i,{mode:"semantic",condenseSpans:!0,setEditor:function(t){this.editor=t,t.customUndo=!0,"semantic"===this.mode?this.editor.contentDomPostFilters.push(e.hitch(this,this._convertToSemantic)):"css"===this.mode&&this.editor.contentDomPostFilters.push(e.hitch(this,this._convertToCss)),e.isIE?(this.editor.contentDomPreFilters.push(e.hitch(this,this._convertToSemantic)),this._browserFilter=this._convertToSemantic):e.isWebKit?(this.editor.contentDomPreFilters.push(e.hitch(this,this._convertToCss)),this._browserFilter=this._convertToCss):e.isMoz?(this.editor.contentDomPreFilters.push(e.hitch(this,this._convertToSemantic)),this._browserFilter=this._convertToSemantic):(this.editor.contentDomPreFilters.push(e.hitch(this,this._convertToSemantic)),this._browserFilter=this._convertToSemantic),this.editor._inserthtmlImpl&&(this.editor._oldInsertHtmlImpl=this.editor._inserthtmlImpl),this.editor._inserthtmlImpl=e.hitch(this,this._inserthtmlImpl)},_convertToSemantic:function(t){if(t){var a=this.editor.document,i=this,r=function(t){if(1==t.nodeType){if("dijitEditorBody"!==t.id){var o,n=t.style,d=t.tagName?t.tagName.toLowerCase():"";if(n&&"table"!=d&&"ul"!=d&&"ol"!=d){var s=n.fontWeight?n.fontWeight.toLowerCase():"",l=n.fontStyle?n.fontStyle.toLowerCase():"",m=n.textDecoration?n.textDecoration.toLowerCase():"",u=n.fontSize?n.fontSize.toLowerCase():"",h=n.backgroundColor?n.backgroundColor.toLowerCase():"",c=n.color?n.color.toLowerCase():"",f=function(t,a){if(t){for(;a.firstChild;)t.appendChild(a.firstChild);"span"!=d||a.style.cssText?a.appendChild(t):(e.place(t,a,"before"),a.parentNode.removeChild(a),a=t)}return a};switch(s){case"bold":case"bolder":case"700":case"800":case"900":o=a.createElement("b"),t.style.fontWeight=""}if(t=f(o,t),o=null,"italic"==l&&(o=a.createElement("i"),t.style.fontStyle=""),t=f(o,t),o=null,m){var y=m.split(" "),v=0;e.forEach(y,function(e){switch(e){case"underline":o=a.createElement("u");break;case"line-through":o=a.createElement("strike")}v++,v==y.length&&(t.style.textDecoration=""),t=f(o,t),o=null})}if(u){var p={"xx-small":1,"x-small":2,small:3,medium:4,large:5,"x-large":6,"xx-large":7,"-webkit-xxx-large":7};u.indexOf("pt")>0?(u=u.substring(0,u.indexOf("pt")),u=parseInt(u),5>u?u="xx-small":10>u?u="x-small":15>u?u="small":20>u?u="medium":25>u?u="large":30>u?u="x-large":u>30&&(u="xx-large")):u.indexOf("px")>0&&(u=u.substring(0,u.indexOf("px")),u=parseInt(u),5>u?u="xx-small":10>u?u="x-small":15>u?u="small":20>u?u="medium":25>u?u="large":30>u?u="x-large":u>30&&(u="xx-large"));var g=p[u];g||(g=3),o=a.createElement("font"),o.setAttribute("size",g),t.style.fontSize=""}t=f(o,t),o=null,h&&"font"!==d&&i._isInline(d)&&(h=new e.Color(h).toHex(),o=a.createElement("font"),o.style.backgroundColor=h,t.style.backgroundColor=""),c&&"font"!==d&&(c=new e.Color(c).toHex(),o=a.createElement("font"),o.setAttribute("color",c),t.style.color=""),t=f(o,t),o=null}}if(t.childNodes){var M=[];e.forEach(t.childNodes,function(e){M.push(e)}),e.forEach(M,r)}}return t};return this._normalizeTags(r(t))}return t},_normalizeTags:function(t){var a=(this.editor.window,this.editor.document);return e.query("em,s,strong",t).forEach(function(t){var i,r=t.tagName?t.tagName.toLowerCase():"";switch(r){case"s":i="strike";break;case"em":i="i";break;case"strong":i="b"}if(i){var o=a.createElement(i);for(e.place("<"+i+">",t,"before");t.firstChild;)o.appendChild(t.firstChild);t.parentNode.removeChild(t)}}),t},_convertToCss:function(t){if(t){var a=this.editor.document,i=function(t){if(1==t.nodeType){if("dijitEditorBody"!==t.id){var r=t.tagName?t.tagName.toLowerCase():"";if(r){var o;switch(r){case"b":case"strong":o=a.createElement("span"),o.style.fontWeight="bold";break;case"i":case"em":o=a.createElement("span"),o.style.fontStyle="italic";break;case"u":o=a.createElement("span"),o.style.textDecoration="underline";break;case"strike":case"s":o=a.createElement("span"),o.style.textDecoration="line-through";break;case"font":var n={};e.attr(t,"color")&&(n.color=e.attr(t,"color")),e.attr(t,"face")&&(n.fontFace=e.attr(t,"face")),t.style&&t.style.backgroundColor&&(n.backgroundColor=t.style.backgroundColor),t.style&&t.style.color&&(n.color=t.style.color);var d={1:"xx-small",2:"x-small",3:"small",4:"medium",5:"large",6:"x-large",7:"xx-large"};e.attr(t,"size")&&(n.fontSize=d[e.attr(t,"size")]),o=a.createElement("span"),e.style(o,n)}if(o){for(;t.firstChild;)o.appendChild(t.firstChild);e.place(o,t,"before"),t.parentNode.removeChild(t),t=o}}}if(t.childNodes){var s=[];e.forEach(t.childNodes,function(e){s.push(e)}),e.forEach(s,i)}}return t};t=i(t),this.condenseSpans&&this._condenseSpans(t)}return t},_condenseSpans:function(t){var a=function(t){var i=function(t){var a;if(t){a={};var i=t.toLowerCase().split(";");e.forEach(i,function(t){if(t){var i=t.split(":"),r=i[0]?e.trim(i[0]):"",o=i[1]?e.trim(i[1]):"";if(r&&o){var n,d="";for(n=0;n<r.length;n++){var s=r.charAt(n);"-"==s?(n++,s=r.charAt(n),d+=s.toUpperCase()):d+=s}a[d]=o}}})}return a};if(t&&1==t.nodeType){var r=t.tagName?t.tagName.toLowerCase():"";if("span"===r&&t.childNodes&&1===t.childNodes.length)for(var o=t.firstChild;o&&1==o.nodeType&&o.tagName&&"span"==o.tagName.toLowerCase();)if(e.attr(o,"class")||e.attr(o,"id")||!o.style)o=o.nextSibling;else{var n=i(t.style.cssText),d=i(o.style.cssText);if(n&&d){var s,l={};for(s in n){if(n[s]&&d[s]&&n[s]!=d[s]){if(n[s]!=d[s]){"textDecoration"==s?(l[s]=n[s]+" "+d[s],delete d[s]):l=null;break}l=null;break}l[s]=n[s],delete d[s]}if(l){for(s in d)l[s]=d[s];for(e.style(t,l);o.firstChild;)t.appendChild(o.firstChild);var m=o.nextSibling;o.parentNode.removeChild(o),o=m}else o=o.nextSibling}else o=o.nextSibling}}t.childNodes&&t.childNodes.length&&e.forEach(t.childNodes,a)};a(t)},_isInline:function(e){switch(e){case"a":case"b":case"strong":case"s":case"strike":case"i":case"u":case"em":case"sup":case"sub":case"span":case"font":case"big":case"cite":case"q":case"img":case"small":return!0;default:return!1}},_inserthtmlImpl:function(e){if(e){var t=this.editor.document,a=t.createElement("div");return a.innerHTML=e,a=this._browserFilter(a),e=r.getChildrenHtml(a),a.innerHTML="",this.editor._oldInsertHtmlImpl?this.editor._oldInsertHtmlImpl(e):this.editor.execCommand("inserthtml",e)}return!1}});return e.subscribe(t._scopeName+".Editor.getPlugin",null,function(e){if(!e.plugin){var t=e.args.name.toLowerCase();"normalizestyle"===t&&(e.plugin=new o({mode:"mode"in e.args?e.args.mode:"semantic",condenseSpans:"condenseSpans"in e.args?e.args.condenseSpans:!0}))}}),o});//# sourceMappingURL=NormalizeStyle.js.map