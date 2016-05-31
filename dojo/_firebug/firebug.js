//>>built
define("dojo/_firebug/firebug",["../_base/kernel","require","../_base/html","../sniff","../_base/array","../_base/lang","../_base/event","../_base/unload"],function(dojo,require,html,has){function toggleConsole(e){frameVisible=e||!frameVisible,consoleFrame&&(consoleFrame.style.display=frameVisible?"block":"none")}function focusCommandLine(){toggleConsole(!0),commandLine&&commandLine.focus()}function openWin(e,t,n,o){var i=window.open("","_firebug","status=0,menubar=0,resizable=1,top="+t+",left="+e+",width="+n+",height="+o+",scrollbars=1,addressbar=0");if(!i){var r="Firebug Lite could not open a pop-up window, most likely because of a blocker.\nEither enable pop-ups for this domain, or change the djConfig to popup=false.";alert(r)}createResizeHandler(i);var s=i.document,a='<html style="height:100%;"><head><title>Firebug Lite</title></head>\n<body bgColor="#ccc" style="height:97%;" onresize="opener.onFirebugResize()">\n<div id="fb"></div></body></html>';return s.write(a),s.close(),i}function createResizeHandler(e){var t=new Date;t.setTime(t.getTime()+5184e6),t=t.toUTCString();var n,o=e.document;e.innerWidth?n=function(){return{w:e.innerWidth,h:e.innerHeight}}:o.documentElement&&o.documentElement.clientWidth?n=function(){return{w:o.documentElement.clientWidth,h:o.documentElement.clientHeight}}:o.body&&(n=function(){return{w:o.body.clientWidth,h:o.body.clientHeight}}),window.onFirebugResize=function(){layout(n().h),clearInterval(e._firebugWin_resize),e._firebugWin_resize=setTimeout(function(){var n=e.screenLeft,o=e.screenTop,i=e.outerWidth||e.document.body.offsetWidth,r=e.outerHeight||e.document.body.offsetHeight;document.cookie="_firebugPosition="+[n,o,i,r].join(",")+"; expires="+t+"; path=/"},5e3)}}function createFrame(){if(!consoleFrame){if(toggleConsole(!0),dojo.config.popup){var e="100%",t=document.cookie.match(/(?:^|; )_firebugPosition=([^;]*)/),n=t?t[1].split(","):[2,2,320,480];_firebugWin=openWin(n[0],n[1],n[2],n[3]),_firebugDoc=_firebugWin.document,dojo.config.debugContainerId="fb",_firebugWin.console=window.console,_firebugWin.dojo=window.dojo}else _firebugDoc=document,e=(dojo.config.debugHeight||300)+"px";var o=_firebugDoc.createElement("link");o.href=require.toUrl("./firebug.css"),o.rel="stylesheet",o.type="text/css";var i=_firebugDoc.getElementsByTagName("head");i&&(i=i[0]),i||(i=_firebugDoc.getElementsByTagName("html")[0]),has("ie")?window.setTimeout(function(){i.appendChild(o)},0):i.appendChild(o),dojo.config.debugContainerId&&(consoleFrame=_firebugDoc.getElementById(dojo.config.debugContainerId)),consoleFrame||(consoleFrame=_firebugDoc.createElement("div"),_firebugDoc.body.appendChild(consoleFrame)),consoleFrame.className+=" firebug",consoleFrame.id="firebug",consoleFrame.style.height=e,consoleFrame.style.display=frameVisible?"block":"none";var r=function(e,t,n,o){return'<li class="'+o+'"><a href="javascript:void(0);" onclick="console.'+n+'(); return false;" title="'+t+'">'+e+"</a></li>"};consoleFrame.innerHTML='<div id="firebugToolbar">  <ul id="fireBugTabs" class="tabs">'+r("Clear","Remove All Console Logs","clear","")+r("ReCSS","Refresh CSS without reloading page","recss","")+r("Console","Show Console Logs","openConsole","gap")+r("DOM","Show DOM Inspector","openDomInspector","")+r("Object","Show Object Inspector","openObjectInspector","")+(dojo.config.popup?"":r("Close","Close the console","close","gap"))+'	</ul></div><input type="text" id="firebugCommandLine" /><div id="firebugLog"></div><div id="objectLog" style="display:none;">Click on an object in the Log display</div><div id="domInspect" style="display:none;">Hover over HTML elements in the main page. Click to hold selection.</div>',consoleToolbar=_firebugDoc.getElementById("firebugToolbar"),commandLine=_firebugDoc.getElementById("firebugCommandLine"),addEvent(commandLine,"keydown",onCommandLineKeyDown),addEvent(_firebugDoc,has("ie")||has("safari")?"keydown":"keypress",onKeyDown),consoleBody=_firebugDoc.getElementById("firebugLog"),consoleObjectInspector=_firebugDoc.getElementById("objectLog"),consoleDomInspector=_firebugDoc.getElementById("domInspect"),fireBugTabs=_firebugDoc.getElementById("fireBugTabs"),layout(),flush()}}function clearFrame(){_firebugDoc=null,_firebugWin.console&&_firebugWin.console.clear(),_firebugWin=null,consoleFrame=null,consoleBody=null,consoleObjectInspector=null,consoleDomInspector=null,commandLine=null,messageQueue=[],groupStack=[],timeMap={}}function evalCommandLine(){var text=commandLine.value;commandLine.value="",logRow([">  ",text],"command");var value;try{value=eval(text)}catch(e){}}function layout(e){var t=25,n=e?e-(t+commandLine.offsetHeight+25+.01*e)+"px":consoleFrame.offsetHeight-t-commandLine.offsetHeight+"px";consoleBody.style.top=t+"px",consoleBody.style.height=n,consoleObjectInspector.style.height=n,consoleObjectInspector.style.top=t+"px",consoleDomInspector.style.height=n,consoleDomInspector.style.top=t+"px",commandLine.style.bottom=0,dojo.addOnWindowUnload(clearFrame)}function logRow(e,t,n){consoleBody?writeMessage(e,t,n):messageQueue.push([e,t,n])}function flush(){var e=messageQueue;messageQueue=[];for(var t=0;t<e.length;++t)writeMessage(e[t][0],e[t][1],e[t][2])}function writeMessage(e,t,n){var o=consoleBody.scrollTop+consoleBody.offsetHeight>=consoleBody.scrollHeight;n=n||writeRow,n(e,t),o&&(consoleBody.scrollTop=consoleBody.scrollHeight-consoleBody.offsetHeight)}function appendRow(e){var t=groupStack.length?groupStack[groupStack.length-1]:consoleBody;t.appendChild(e)}function writeRow(e,t){var n=consoleBody.ownerDocument.createElement("div");n.className="logRow"+(t?" logRow-"+t:""),n.innerHTML=e.join(""),appendRow(n)}function pushGroup(e,t){logFormatted(e,t);var n=consoleBody.ownerDocument.createElement("div");n.className="logGroupBox",appendRow(n),groupStack.push(n)}function popGroup(){groupStack.pop()}function logFormatted(e,t){var n=[],o=e[0],i=0;"string"!=typeof o&&(o="",i=-1);for(var r=parseFormat(o),s=0;s<r.length;++s){var a=r[s];a&&"object"==typeof a?a.appender(e[++i],n):appendText(a,n)}var d=[],c=[];for(s=i+1;s<e.length;++s){appendText(" ",n);var l=e[s];if(void 0===l||null===l)appendNull(l,n);else if("string"==typeof l)appendText(l,n);else if(l instanceof Date)appendText(l.toString(),n);else if(9==l.nodeType)appendText("[ XmlDoc ]",n);else{var u="_a"+__consoleAnchorId__++;d.push(u),c.push(l);var h='<a id="'+u+'" href="javascript:void(0);">'+getObjectAbbr(l)+"</a>";appendLink(h,n)}}for(logRow(n,t),s=0;s<d.length;s++){var f=_firebugDoc.getElementById(d[s]);f&&(f.obj=c[s],_firebugWin.console._connects.push(dojo.connect(f,"onclick",function(){console.openObjectInspector();try{printObject(this.obj)}catch(e){this.obj=e}consoleObjectInspector.innerHTML="<pre>"+printObject(this.obj)+"</pre>"})))}}function parseFormat(e){for(var t=[],n=/((^%|[^\\]%)(\d+)?(\.)([a-zA-Z]))|((^%|[^\\]%)([a-zA-Z]))/,o={s:appendText,d:appendInteger,i:appendInteger,f:appendFloat},i=n.exec(e);i;i=n.exec(e)){var r=i[8]?i[8]:i[5],s=r in o?o[r]:appendObject,a=i[3]?parseInt(i[3]):"."==i[4]?-1:0;t.push(e.substr(0,"%"==i[0][0]?i.index:i.index+1)),t.push({appender:s,precision:a}),e=e.substr(i.index+i[0].length)}return t.push(e),t}function escapeHTML(e){function t(e){switch(e){case"<":return"&lt;";case">":return"&gt;";case"&":return"&amp;";case"'":return"&#39;";case'"':return"&quot;"}return"?"}return String(e).replace(/[<>&"']/g,t)}function objectToString(e){try{return e+""}catch(t){return null}}function appendLink(e,t){t.push(objectToString(e))}function appendText(e,t){t.push(escapeHTML(objectToString(e)))}function appendNull(e,t){t.push('<span class="objectBox-null">',escapeHTML(objectToString(e)),"</span>")}function appendString(e,t){t.push('<span class="objectBox-string">&quot;',escapeHTML(objectToString(e)),"&quot;</span>")}function appendInteger(e,t){t.push('<span class="objectBox-number">',escapeHTML(objectToString(e)),"</span>")}function appendFloat(e,t){t.push('<span class="objectBox-number">',escapeHTML(objectToString(e)),"</span>")}function appendFunction(e,t){t.push('<span class="objectBox-function">',getObjectAbbr(e),"</span>")}function appendObject(e,t){try{void 0===e?appendNull("undefined",t):null===e?appendNull("null",t):"string"==typeof e?appendString(e,t):"number"==typeof e?appendInteger(e,t):"function"==typeof e?appendFunction(e,t):1==e.nodeType?appendSelector(e,t):"object"==typeof e?appendObjectFormatted(e,t):appendText(e,t)}catch(n){}}function appendObjectFormatted(e,t){var n=objectToString(e),o=/\[object (.*?)\]/,i=o.exec(n);t.push('<span class="objectBox-object">',i?i[1]:n,"</span>")}function appendSelector(e,t){t.push('<span class="objectBox-selector">'),t.push('<span class="selectorTag">',escapeHTML(e.nodeName.toLowerCase()),"</span>"),e.id&&t.push('<span class="selectorId">#',escapeHTML(e.id),"</span>"),e.className&&t.push('<span class="selectorClass">.',escapeHTML(e.className),"</span>"),t.push("</span>")}function appendNode(e,t){if(1==e.nodeType){t.push('<div class="objectBox-element">','&lt;<span class="nodeTag">',e.nodeName.toLowerCase(),"</span>");for(var n=0;n<e.attributes.length;++n){var o=e.attributes[n];o.specified&&t.push('&nbsp;<span class="nodeName">',o.nodeName.toLowerCase(),'</span>=&quot;<span class="nodeValue">',escapeHTML(o.nodeValue),"</span>&quot;")}if(e.firstChild){t.push('&gt;</div><div class="nodeChildren">');for(var i=e.firstChild;i;i=i.nextSibling)appendNode(i,t);t.push('</div><div class="objectBox-element">&lt;/<span class="nodeTag">',e.nodeName.toLowerCase(),"&gt;</span></div>")}else t.push("/&gt;</div>")}else 3==e.nodeType&&t.push('<div class="nodeText">',escapeHTML(e.nodeValue),"</div>")}function addEvent(e,t,n){document.all?e.attachEvent("on"+t,n):e.addEventListener(t,n,!1)}function removeEvent(e,t,n){document.all?e.detachEvent("on"+t,n):e.removeEventListener(t,n,!1)}function cancelEvent(e){document.all?e.cancelBubble=!0:e.stopPropagation()}function onError(e,t,n){var o=t.lastIndexOf("/"),i=-1==o?t:t.substr(o+1),r=['<span class="errorMessage">',e,"</span>",'<div class="objectBox-sourceLink">',i," (line ",n,")</div>"];logRow(r,"error")}function onKeyDown(e){var t=(new Date).getTime();if(t>onKeyDownTime+200){e=dojo.fixEvent(e);var n=dojo.keys,o=e.keyCode;if(onKeyDownTime=t,o==n.F12)toggleConsole();else{if(o!=n.NUMPAD_ENTER&&76!=o||!e.shiftKey||!e.metaKey&&!e.ctrlKey)return;focusCommandLine()}cancelEvent(e)}}function onCommandLineKeyDown(e){var t=dojo.keys;13==e.keyCode&&commandLine.value?(addToHistory(commandLine.value),evalCommandLine()):27==e.keyCode?commandLine.value="":e.keyCode==t.UP_ARROW||e.charCode==t.UP_ARROW?navigateHistory("older"):e.keyCode==t.DOWN_ARROW||e.charCode==t.DOWN_ARROW?navigateHistory("newer"):e.keyCode==t.HOME||e.charCode==t.HOME?(historyPosition=1,navigateHistory("older")):e.keyCode!=t.END&&e.charCode!=t.END||(historyPosition=999999,navigateHistory("newer"))}function addToHistory(e){var t=cookie("firebug_history");t=t?dojo.fromJson(t):[];var n=dojo.indexOf(t,e);for(-1!=n&&t.splice(n,1),t.push(e),cookie("firebug_history",dojo.toJson(t),30);t.length&&!cookie("firebug_history");)t.shift(),cookie("firebug_history",dojo.toJson(t),30);historyCommandLine=null,historyPosition=-1}function navigateHistory(e){var t=cookie("firebug_history");t=t?dojo.fromJson(t):[],t.length&&(null===historyCommandLine&&(historyCommandLine=commandLine.value),-1==historyPosition&&(historyPosition=t.length),"older"==e?(--historyPosition,0>historyPosition&&(historyPosition=0)):"newer"==e&&(++historyPosition,historyPosition>t.length&&(historyPosition=t.length)),historyPosition==t.length?(commandLine.value=historyCommandLine,historyCommandLine=null):commandLine.value=t[historyPosition])}function cookie(e,t){var n=document.cookie;if(1==arguments.length){var o=n.match(new RegExp("(?:^|; )"+e+"=([^;]*)"));return o?decodeURIComponent(o[1]):void 0}var i=new Date;i.setMonth(i.getMonth()+1),document.cookie=e+"="+encodeURIComponent(t)+(i.toUtcString?"; expires="+i.toUTCString():"")}function isArray(e){return e&&e instanceof Array||"array"==typeof e}function objectLength(e){var t=0;for(var n in e)t++;return t}function printObject(e,t,n,o){var i=" 	";n=n||"",t=t||i,o=o||[];var r;if(e&&1==e.nodeType){var s=[];return appendNode(e,s),s.join("")}var a=",\n",d=0,c=objectLength(e);if(e instanceof Date)return t+e.toString()+a;e:for(var l in e)if(d++,d==c&&(a="\n"),e[l]===window||e[l]===document);else if(null===e[l])n+=t+l+" : NULL"+a;else if(e[l]&&e[l].nodeType)1==e[l].nodeType||3==e[l].nodeType&&(n+=t+l+" : [ TextNode "+e[l].data+" ]"+a);else if("object"==typeof e[l]&&(e[l]instanceof String||e[l]instanceof Number||e[l]instanceof Boolean))n+=t+l+" : "+e[l]+","+a;else if(e[l]instanceof Date)n+=t+l+" : "+e[l].toString()+a;else if("object"==typeof e[l]&&e[l]){for(var u,h=0;u=o[h];h++)if(e[l]===u){n+=t+l+" : RECURSION"+a;continue e}o.push(e[l]),r=isArray(e[l])?["[","]"]:["{","}"],n+=t+l+" : "+r[0]+"\n",n+=printObject(e[l],t+i,"",o),n+=t+r[1]+a}else if("undefined"==typeof e[l])n+=t+l+" : undefined"+a;else if("toString"==l&&"function"==typeof e[l]){var f=e[l]();"string"==typeof f&&f.match(/function ?(.*?)\(/)&&(f=escapeHTML(getObjectAbbr(e[l]))),n+=t+l+" : "+f+a}else n+=t+l+" : "+escapeHTML(getObjectAbbr(e[l]))+a;return n}function getObjectAbbr(e){var t=e instanceof Error;if(1==e.nodeType)return escapeHTML("< "+e.tagName.toLowerCase()+' id="'+e.id+'" />');if(3==e.nodeType)return escapeHTML('[TextNode: "'+e.nodeValue+'"]');var n=e&&(e.id||e.name||e.ObjectID||e.widgetId);if(!t&&n)return"{"+n+"}";var o=2,i=4,r=0;if(t)n="[ Error: "+(e.message||e.description||e)+" ]";else if(isArray(e))n="["+e.slice(0,i).join(","),e.length>i&&(n+=" ... ("+e.length+" items)"),n+="]";else if("function"==typeof e){n=e+"";var s=/function\s*([^\(]*)(\([^\)]*\))[^\{]*\{/,a=s.exec(n);a?(a[1]||(a[1]="function"),n=a[1]+a[2]):n="function()"}else if("object"!=typeof e||"string"==typeof e)n=e+"";else{n="{";for(var d in e){if(r++,r>o)break;n+=d+":"+escapeHTML(e[d])+"  "}n+="}"}return n}var isNewIE=/Trident/.test(window.navigator.userAgent);if(isNewIE){for(var calls=["log","info","debug","warn","error"],i=0;i<calls.length;i++){var m=calls[i];if(console[m]&&!console[m]._fake){var n="_"+calls[i];console[n]=console[m],console[m]=function(){var e=n;return function(){console[e](Array.prototype.join.call(arguments," "))}}()}}try{console.clear()}catch(e){}}if(has("ie")<8){try{if(window!=window.parent)return void(window.parent.console&&(window.console=window.parent.console))}catch(e){}var _firebugDoc=document,_firebugWin=window,__consoleAnchorId__=0,consoleFrame=null,consoleBody=null,consoleObjectInspector=null,fireBugTabs=null,commandLine=null,consoleToolbar=null,frameVisible=!1,messageQueue=[],groupStack=[],timeMap={},countMap={},consoleDomInspector=null,_inspectionMoveConnection,_inspectionClickConnection,_inspectionEnabled=!1,_inspectionTimer=null,_inspectTempNode=document.createElement("div"),_inspectCurrentNode,_restoreBorderStyle;window.console={_connects:[],log:function(){logFormatted(arguments,"")},debug:function(){logFormatted(arguments,"debug")},info:function(){logFormatted(arguments,"info")},warn:function(){logFormatted(arguments,"warning")},error:function(){logFormatted(arguments,"error")},assert:function(e,t){if(!e){for(var n=[],o=1;o<arguments.length;++o)n.push(arguments[o]);throw logFormatted(n.length?n:["Assertion Failure"],"error"),t?t:"Assertion Failure"}},dir:function(e){var t=printObject(e);t=t.replace(/\n/g,"<br />"),t=t.replace(/\t/g,"&nbsp;&nbsp;&nbsp;&nbsp;"),logRow([t],"dir")},dirxml:function(e){var t=[];appendNode(e,t),logRow(t,"dirxml")},group:function(){logRow(arguments,"group",pushGroup)},groupEnd:function(){logRow(arguments,"",popGroup)},time:function(e){timeMap[e]=(new Date).getTime()},timeEnd:function(e){if(e in timeMap){var t=(new Date).getTime()-timeMap[e];logFormatted([e+":",t+"ms"]),delete timeMap[e]}},count:function(e){countMap[e]||(countMap[e]=0),countMap[e]++,logFormatted([e+": "+countMap[e]])},trace:function(e){for(var t=e||3,n=console.trace.caller,o=0;t>o;o++){for(var i=(n.toString(),[]),r=0;r<n.arguments.length;r++)i.push(n.arguments[r]);n.arguments.length,n=n.caller}},profile:function(){this.warn(["profile() not supported."])},profileEnd:function(){},clear:function(){if(consoleBody)for(;consoleBody.childNodes.length;)dojo.destroy(consoleBody.firstChild);dojo.forEach(this._connects,dojo.disconnect)},open:function(){toggleConsole(!0)},close:function(){frameVisible&&toggleConsole()},_restoreBorder:function(){_inspectCurrentNode&&(_inspectCurrentNode.style.border=_restoreBorderStyle)},openDomInspector:function(){_inspectionEnabled=!0,consoleBody.style.display="none",consoleDomInspector.style.display="block",consoleObjectInspector.style.display="none",document.body.style.cursor="pointer",_inspectionMoveConnection=dojo.connect(document,"mousemove",function(e){if(_inspectionEnabled&&!_inspectionTimer){_inspectionTimer=setTimeout(function(){_inspectionTimer=null},50);var t=e.target;if(t&&_inspectCurrentNode!==t){console._restoreBorder();var n=[];appendNode(t,n),consoleDomInspector.innerHTML=n.join(""),_inspectCurrentNode=t,_restoreBorderStyle=_inspectCurrentNode.style.border,_inspectCurrentNode.style.border="#0000FF 1px solid"}}}),setTimeout(function(){_inspectionClickConnection=dojo.connect(document,"click",function(e){document.body.style.cursor="",_inspectionEnabled=!_inspectionEnabled,dojo.disconnect(_inspectionClickConnection)})},30)},_closeDomInspector:function(){document.body.style.cursor="",dojo.disconnect(_inspectionMoveConnection),dojo.disconnect(_inspectionClickConnection),_inspectionEnabled=!1,console._restoreBorder()},openConsole:function(){consoleBody.style.display="block",consoleDomInspector.style.display="none",consoleObjectInspector.style.display="none",console._closeDomInspector()},openObjectInspector:function(){consoleBody.style.display="none",consoleDomInspector.style.display="none",consoleObjectInspector.style.display="block",console._closeDomInspector()},recss:function(){var e,t,n;for(t=document.getElementsByTagName("link"),e=0;e<t.length;e++)if(n=t[e],n.rel.toLowerCase().indexOf("stylesheet")>=0&&n.href){var o=n.href.replace(/(&|%5C?)forceReload=\d+/,"");n.href=o+(o.indexOf("?")>=0?"&":"?")+"forceReload="+(new Date).valueOf()}}},dojo.addOnLoad(createFrame);var onKeyDownTime=(new Date).getTime(),historyPosition=-1,historyCommandLine=null;addEvent(document,has("ie")||has("safari")?"keydown":"keypress",onKeyDown),("true"==document.documentElement.getAttribute("debug")||dojo.config.isDebug)&&toggleConsole(!0),dojo.addOnWindowUnload(function(){removeEvent(document,has("ie")||has("safari")?"keydown":"keypress",onKeyDown),window.onFirebugResize=null,window.console=null})}});//# sourceMappingURL=firebug.js.map