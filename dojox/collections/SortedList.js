//>>built
define("dojox/collections/SortedList",["dojo/_base/kernel","dojo/_base/array","./_base"],function(e,t,a){return a.SortedList=function(t){var i=this,r={},o=[],d=function(e,t){return e.key>t.key?1:e.key<t.key?-1:0},n=function(){o=[];for(var e=i.getIterator();!e.atEnd();)o.push(e.get());o.sort(d)},l={};if(this.count=o.length,this.add=function(e,t){r[e]||(r[e]=new a.DictionaryEntry(e,t),this.count=o.push(r[e]),o.sort(d))},this.clear=function(){r={},o=[],this.count=o.length},this.clone=function(){return new a.SortedList(this)},this.contains=this.containsKey=function(e){return!l[e]&&null!=r[e]},this.containsValue=function(e){for(var t=this.getIterator();!t.atEnd();){if(t.get().value==e)return!0}return!1},this.copyTo=function(e,t){for(var a=this.getIterator(),i=t;!a.atEnd();)e.splice(i,0,a.get()),i++},this.entry=function(e){return r[e]},this.forEach=function(t,a){e.forEach(o,t,a)},this.getByIndex=function(e){return o[e].valueOf()},this.getIterator=function(){return new a.DictionaryIterator(r)},this.getKey=function(e){return o[e].key},this.getKeyList=function(){for(var e=[],t=this.getIterator();!t.atEnd();)e.push(t.get().key);return e},this.getValueList=function(){for(var e=[],t=this.getIterator();!t.atEnd();)e.push(t.get().value);return e},this.indexOfKey=function(e){for(var t=0;t<o.length;t++)if(o[t].key==e)return t;return-1},this.indexOfValue=function(e){for(var t=0;t<o.length;t++)if(o[t].value==e)return t;return-1},this.item=function(e){if(e in r&&!l[e])return r[e].valueOf()},this.remove=function(e){delete r[e],n(),this.count=o.length},this.removeAt=function(e){delete r[o[e].key],n(),this.count=o.length},this.replace=function(e,t){return r[e]?(r[e]=new a.DictionaryEntry(e,t),n(),!0):(this.add(e,t),!1)},this.setByIndex=function(e,t){r[o[e].key].value=t,n(),this.count=o.length},t){for(var s=t.getIterator();!s.atEnd();){var m=s.get();o[o.length]=r[m.key]=new a.DictionaryEntry(m.key,m.value)}o.sort(d)}},a.SortedList});//# sourceMappingURL=SortedList.js.map