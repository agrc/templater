//>>built
define("dojox/editor/plugins/_SpellCheckParser",["dojo","dojox","dojo/_base/connect","dojo/_base/declare"],function(e,t){var i=e.declare("dojox.editor.plugins._SpellCheckParser",null,{lang:"english",parseIntoWords:function(e){function t(e){var t=e.charCodeAt(0);return 48<=t&&t<=57||65<=t&&t<=90||97<=t&&t<=122}for(var i=this.words=[],r=this.indices=[],a=0,n=e&&e.length,o=0;a<n;){for(var s;a<n&&!t(s=e.charAt(a))&&"&"!=s;)a++;if("&"==s)for(;++a<n&&";"!=(s=e.charAt(a))&&t(s););else{for(o=a;++a<n&&t(e.charAt(a)););o<n&&(i.push(e.substring(o,a)),r.push(o))}}return i},getIndices:function(){return this.indices}});return e.subscribe(dijit._scopeName+".Editor.plugin.SpellCheck.getParser",null,function(e){e.parser||(e.parser=new i)}),i});//# sourceMappingURL=_SpellCheckParser.js.map