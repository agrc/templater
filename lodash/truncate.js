//>>built
define("lodash/truncate",["./_baseToString","./_castSlice","./_hasUnicode","./isObject","./isRegExp","./_stringSize","./_stringToArray","./toInteger","./toString"],function(e,t,i,a,r,n,o,s,l){function d(d,m){var p=u,g=c;if(a(m)){var v="separator"in m?m.separator:v;p="length"in m?s(m.length):p,g="omission"in m?e(m.omission):g}d=l(d);var y=d.length;if(i(d)){var b=o(d);y=b.length}if(p>=y)return d;var _=p-n(g);if(_<1)return g;var w=b?t(b,0,_).join(""):d.slice(0,_);if(v===h)return w+g;if(b&&(_+=w.length-_),r(v)){if(d.slice(_).search(v)){var x,M=w;for(v.global||(v=RegExp(v.source,l(f.exec(v))+"g")),v.lastIndex=0;x=v.exec(M);)var k=x.index;w=w.slice(0,k===h?_:k)}}else if(d.indexOf(e(v),_)!=_){var j=w.lastIndexOf(v);j>-1&&(w=w.slice(0,j))}return w+g}var h,u=30,c="...",f=/\w*$/;return d});//# sourceMappingURL=truncate.js.map