//>>built
define("dojox/grid/enhanced/plugins/Printer",["dojo/_base/declare","dojo/_base/html","dojo/_base/Deferred","dojo/_base/lang","dojo/_base/sniff","dojo/_base/xhr","dojo/_base/array","dojo/query","dojo/DeferredList","../_Plugin","../../EnhancedGrid","./exporter/TableWriter"],function(e,t,i,a,r,o,n,s,l,d,h,u){var c=e("dojox.grid.enhanced.plugins.Printer",d,{name:"printer",constructor:function(e){this.grid=e,this._mixinGrid(e),e.setExportFormatter(function(e,t,i,a){return t.format(i,a)})},_mixinGrid:function(){var e=this.grid;e.printGrid=a.hitch(this,this.printGrid),e.printSelected=a.hitch(this,this.printSelected),e.exportToHTML=a.hitch(this,this.exportToHTML),e.exportSelectedToHTML=a.hitch(this,this.exportSelectedToHTML),e.normalizePrintedGrid=a.hitch(this,this.normalizeRowHeight)},printGrid:function(e){this.exportToHTML(e,a.hitch(this,this._print))},printSelected:function(e){this.exportSelectedToHTML(e,a.hitch(this,this._print))},exportToHTML:function(e,t){e=this._formalizeArgs(e);var i=this;this.grid.exportGrid("table",e,function(a){i._wrapHTML(e.title,e.cssFiles,e.titleInBody+a).then(t)})},exportSelectedToHTML:function(e,t){e=this._formalizeArgs(e);var i=this;this.grid.exportSelected("table",e.writerArgs,function(a){i._wrapHTML(e.title,e.cssFiles,e.titleInBody+a).then(t)})},_loadCSSFiles:function(e){var t=n.map(e,function(e){if(e=a.trim(e),".css"===e.substring(e.length-4).toLowerCase())return o.get({url:e});var t=new i;return t.callback(e),t});return l.prototype.gatherResults(t)},_print:function(e){var i,a=this,o=function(t){var i=t.document;i.open(),i.write(e),i.close(),a.normalizeRowHeight(i)};if(window.print)if(r("chrome")||r("opera"))i=window.open("javascript: ''","","status=0,menubar=0,location=0,toolbar=0,width=1,height=1,resizable=0,scrollbars=0"),o(i),i.print(),i.close();else{var n=this._printFrame,s=this.grid.domNode;if(!n){var l=s.id+"_print_frame";(n=t.byId(l))||(n=t.create("iframe"),n.id=l,n.frameBorder=0,t.style(n,{width:"1px",height:"1px",position:"absolute",right:0,bottom:0,border:"none",overflow:"hidden"}),r("ie")||t.style(n,"visibility","hidden"),s.appendChild(n)),this._printFrame=n}i=n.contentWindow,o(i),i.focus(),i.print()}},_wrapHTML:function(e,i,a){return this._loadCSSFiles(i).then(function(i){var r,o=['<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">',"<html ",t._isBodyLtr()?"":'dir="rtl"',"><head><title>",e,'</title><meta http-equiv="Content-Type" content="text/html; charset=utf-8"></meta>'];for(r=0;r<i.length;++r)o.push('<style type="text/css">',i[r],"</style>");return o.push("</head>"),a.search(/^\s*<body/i)<0&&(a="<body>"+a+"</body>"),o.push(a,"</html>"),o.join("")})},normalizeRowHeight:function(e){var i,a,r,o=s(".grid_view",e.body),l=n.map(o,function(e){return s(".grid_header",e)[0]}),d=n.map(o,function(e){return s(".grid_row",e)}),h=d[0].length,u=0;for(a=o.length-1;a>=0;--a)(r=t.contentBox(l[a]).h)>u&&(u=r);for(a=o.length-1;a>=0;--a)t.style(l[a],"height",u+"px");for(i=0;i<h;++i){for(u=0,a=o.length-1;a>=0;--a)(r=t.contentBox(d[a][i]).h)>u&&(u=r);for(a=o.length-1;a>=0;--a)t.style(d[a][i],"height",u+"px")}var c=0,m=t._isBodyLtr();for(a=0;a<o.length;++a)t.style(o[a],m?"left":"right",c+"px"),c+=t.marginBox(o[a]).w},_formalizeArgs:function(e){return e=e&&a.isObject(e)?e:{},e.title=String(e.title)||"",a.isArray(e.cssFiles)||(e.cssFiles=[e.cssFiles]),e.titleInBody=e.title?["<h1>",e.title,"</h1>"].join(""):"",e}});return h.registerPlugin(c,{dependency:["exporter"]}),c});//# sourceMappingURL=Printer.js.map