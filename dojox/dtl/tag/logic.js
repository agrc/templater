//>>built
define("dojox/dtl/tag/logic",["dojo/_base/lang","../_base"],function(e,t){var a=e.getObject("tag.logic",!0,t);t.text;return a.IfNode=e.extend(function(e,t,a,i){this.bools=e,this.trues=t,this.falses=a,this.type=i},{render:function(e,t){var a,i,r,o,n;if("or"==this.type){for(a=0;i=this.bools[a];a++)if(r=i[0],o=i[1],n=o.resolve(e),n&&!r||r&&!n)return this.falses&&(t=this.falses.unrender(e,t)),this.trues?this.trues.render(e,t,this):t;return this.trues&&(t=this.trues.unrender(e,t)),this.falses?this.falses.render(e,t,this):t}for(a=0;i=this.bools[a];a++)if(r=i[0],o=i[1],n=o.resolve(e),n==r)return this.trues&&(t=this.trues.unrender(e,t)),this.falses?this.falses.render(e,t,this):t;return this.falses&&(t=this.falses.unrender(e,t)),this.trues?this.trues.render(e,t,this):t},unrender:function(e,t){return t=this.trues?this.trues.unrender(e,t):t,t=this.falses?this.falses.unrender(e,t):t},clone:function(e){var t=this.trues?this.trues.clone(e):null,a=this.falses?this.falses.clone(e):null;return new this.constructor(this.bools,t,a,this.type)}}),a.IfEqualNode=e.extend(function(e,a,i,r,o){this.var1=new t._Filter(e),this.var2=new t._Filter(a),this.trues=i,this.falses=r,this.negate=o},{render:function(e,t){var a=this.var1.resolve(e),i=this.var2.resolve(e);return a="undefined"!=typeof a?a:"",i="undefined"!=typeof a?i:"",this.negate&&a!=i||!this.negate&&a==i?(this.falses&&(t=this.falses.unrender(e,t,this)),this.trues?this.trues.render(e,t,this):t):(this.trues&&(t=this.trues.unrender(e,t,this)),this.falses?this.falses.render(e,t,this):t)},unrender:function(e,t){return a.IfNode.prototype.unrender.call(this,e,t)},clone:function(e){var t=this.trues?this.trues.clone(e):null,a=this.falses?this.falses.clone(e):null;return new this.constructor(this.var1.getExpression(),this.var2.getExpression(),t,a,this.negate)}}),a.ForNode=e.extend(function(e,a,i,r){this.assign=e,this.loop=new t._Filter(a),this.reversed=i,this.nodelist=r,this.pool=[]},{render:function(t,a){var i,r,o,n=!1,d=this.assign;for(o=0;o<d.length;o++)if("undefined"!=typeof t[d[o]]){n=!0,t=t.push();break}!n&&t.forloop&&(n=!0,t=t.push());var s=this.loop.resolve(t)||[],l=e.isObject(s)&&!e.isArrayLike(s),m=[];if(l)for(var u in s)m.push(s[u]);else m=s;for(i=m.length;i<this.pool.length;i++)this.pool[i].unrender(t,a,this);this.reversed&&(m=m.slice(0).reverse());var h=t.forloop={parentloop:t.get("forloop",{})},r=0;for(i=0;i<m.length;i++){var f=m[i];if(h.counter0=r,h.counter=r+1,h.revcounter0=m.length-r-1,h.revcounter=m.length-r,h.first=!r,h.last=r==m.length-1,d.length>1&&e.isArrayLike(f)){n||(n=!0,t=t.push());var c={};for(o=0;o<f.length&&o<d.length;o++)c[d[o]]=f[o];e.mixin(t,c)}else t[d[0]]=f;r+1>this.pool.length&&this.pool.push(this.nodelist.clone(a)),a=this.pool[r++].render(t,a,this)}if(delete t.forloop,n)t=t.pop();else for(o=0;o<d.length;o++)delete t[d[o]];return a},unrender:function(e,t){for(var a,i=0;a=this.pool[i];i++)t=a.unrender(e,t);return t},clone:function(e){return new this.constructor(this.assign,this.loop.getExpression(),this.reversed,this.nodelist.clone(e))}}),e.mixin(a,{if_:function(e,i){var r,o,n,d=[],s=i.contents.split();if(s.shift(),i=s.join(" "),s=i.split(" and "),1==s.length)n="or",s=i.split(" or ");else for(n="and",r=0;r<s.length;r++)if(-1!=s[r].indexOf(" or "))throw new Error("'if' tags can't mix 'and' and 'or'");for(r=0;o=s[r];r++){var l=!1;0==o.indexOf("not ")&&(o=o.slice(4),l=!0),d.push([l,new t._Filter(o)])}var m=e.parse(["else","endif"]),u=!1,i=e.next_token();return"else"==i.contents&&(u=e.parse(["endif"]),e.next_token()),new a.IfNode(d,m,u,n)},_ifequal:function(e,t,i){var r=t.split_contents();if(3!=r.length)throw new Error(r[0]+" takes two arguments");var o="end"+r[0],n=e.parse(["else",o]),d=!1,t=e.next_token();return"else"==t.contents&&(d=e.parse([o]),e.next_token()),new a.IfEqualNode(r[1],r[2],n,d,i)},ifequal:function(e,t){return a._ifequal(e,t)},ifnotequal:function(e,t){return a._ifequal(e,t,!0)},for_:function(e,t){var i=t.contents.split();if(i.length<4)throw new Error("'for' statements should have at least four words: "+t.contents);var r="reversed"==i[i.length-1],o=r?-3:-2;if("in"!=i[i.length+o])throw new Error("'for' tag received an invalid argument: "+t.contents);for(var n=i.slice(1,o).join(" ").split(/ *, */),d=0;d<n.length;d++)if(!n[d]||-1!=n[d].indexOf(" "))throw new Error("'for' tag received an invalid argument: "+t.contents);var s=e.parse(["endfor"]);return e.next_token(),new a.ForNode(n,i[i.length+o+1],r,s)}}),a});//# sourceMappingURL=logic.js.map