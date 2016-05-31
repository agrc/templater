//>>built
define("dojox/store/db/SQL",["dojo/_base/declare","dojo/Deferred","dojo/when","dojo/store/util/QueryResults","dojo/_base/lang","dojo/promise/all"],function(e,t,i,a,n,r){function o(e){return e&&n.mixin(e,JSON.parse(e.__extra))}var s=/(.*)\*$/;return e([],{constructor:function(e){var t=e.dbConfig;this.database=openDatabase(e.dbName||"dojo-db","1.0","dojo-db",4194304);var i=this.indexPrefix=e.indexPrefix||"idx_",a=e.table||e.storeName;this.table=(e.table||e.storeName).replace(/[^\w]/g,"_");var n=[];this.indices=t.stores[a],this.repeatingIndices={};for(var o in this.indices)this.indices[o].multiEntry&&(this.repeatingIndices[o]=!0);if(!t.available){for(var a in t.stores){var s=t.stores[a],l=a.replace(/[^\w]/g,"_"),d=s[this.idProperty],u=["__extra",this.idProperty+" "+(d&&d.autoIncrement?"INTEGER PRIMARY KEY AUTOINCREMENT":"PRIMARY KEY")],c=[this.idProperty];for(var o in s)o!=this.idProperty&&u.push(o);n.push(this.executeSql("CREATE TABLE IF NOT EXISTS "+l+" ("+u.join(",")+")"));for(var o in s)if(o!=this.idProperty)if(s[o].multiEntry){c.push(o);var h=l+"_repeating_"+o;n.push(this.executeSql("CREATE TABLE IF NOT EXISTS "+h+" (id,value)")),n.push(this.executeSql("CREATE INDEX IF NOT EXISTS idx_"+h+"_id ON "+h+"(id)")),n.push(this.executeSql("CREATE INDEX IF NOT EXISTS idx_"+h+"_value ON "+h+"(value)"))}else n.push(this.executeSql("ALTER TABLE "+l+" ADD "+o).then(null,function(){})),s[o].indexed!==!1&&n.push(this.executeSql("CREATE INDEX IF NOT EXISTS "+i+l+"_"+o+" ON "+l+"("+o+")"))}t.available=r(n)}this.available=t.available},idProperty:"id",selectColumns:["*"],get:function(e){return i(this.executeSql("SELECT "+this.selectColumns.join(",")+" FROM "+this.table+" WHERE "+this.idProperty+"=?",[e]),function(e){return e.rows.length>0?o(e.rows.item(0)):void 0})},getIdentity:function(e){return e[this.idProperty]},remove:function(e){return this.executeSql("DELETE FROM "+this.table+" WHERE "+this.idProperty+"=?",[e])},identifyGeneratedKey:!0,add:function(e,t){var a=[],n=[],o=[],s={},l=[],d=this;for(var u in e)e.hasOwnProperty(u)&&(u in this.indices||u==this.idProperty?this.repeatingIndices[u]?l.push(function(t){var i=e[u];return r(i.map(function(e){return d.executeSql("INSERT INTO "+d.table+"_repeating_"+u+" (value, id) VALUES (?, ?)",[e,t])}))}):(o.push(u),n.push("?"),a.push(e[u])):s[u]=e[u]);o.push("__extra"),n.push("?"),a.push(JSON.stringify(s));var c=this.idProperty;this.identifyGeneratedKey&&(a.idColumn=c);var h="INSERT INTO "+this.table+" ("+o.join(",")+") VALUES ("+n.join(",")+")";return i(this.executeSql(h,a),function(t){var i=t.insertId;return e[c]=i,r(l.map(function(e){return e(i)})).then(function(){return i})})},put:function(e,t){t=t||{};var a=t.id||e[this.idProperty],n=t.overwrite;if(void 0===n){var r=this;return this.get(a).then(function(i){return(t.overwrite=!!i)?(t.overwrite=!0,r.put(e,t)):r.add(e,t)})}if(!n)return r.add(e,t);var o="UPDATE "+this.table+" SET ",s=[],l=[],d={};for(var u in e)if(e.hasOwnProperty(u))if(u in this.indices||u==this.idProperty)if(this.repeatingIndices[u]){this.executeSql("DELETE FROM "+this.table+"_repeating_"+u+" WHERE id=?",[a]);for(var c=e[u],h=0;h<c.length;h++)this.executeSql("INSERT INTO "+this.table+"_repeating_"+u+" (value, id) VALUES (?, ?)",[c[h],a])}else l.push(u+"=?"),s.push(e[u]);else d[u]=e[u];return l.push("__extra=?"),s.push(JSON.stringify(d)),o+=l.join(",")+" WHERE "+this.idProperty+"=?",s.push(e[this.idProperty]),i(this.executeSql(o,s),function(e){return a})},query:function(e,t){function i(e){function t(e){var t=e&&e.match&&e.match(s);return t?(c.push(t[1]+"%")," LIKE ?"):(c.push(e),"=?")}var i=[];for(var a in e){var n=e[a];if(n){if(n.contains){var r=d.table+"_repeating_"+a;i.push(n.contains.map(function(e){return d.idProperty+" IN (SELECT id FROM "+r+" WHERE value"+t(e)+")"}).join(" AND "));continue}if("object"==typeof n&&("from"in n||"to"in n)){var o=n.excludeFrom?">":">=",l=n.excludeTo?"<":"<=";"from"in n?(c.push(n.from),"to"in n?(c.push(n.to),i.push("("+u+"."+a+o+"? AND "+u+"."+a+l+"?)")):i.push(u+"."+a+o+"?")):(c.push(n.to),i.push(u+"."+a+l+"?"));continue}}i.push(u+"."+a+t(n))}return i.join(" AND ")}t=t||{};var r,l="FROM "+this.table,d=this,u=this.table,c=[];e.forEach?(r=e.map(i).join(") OR ("),r&&(r="("+r+")")):r=i(e),r&&(r=" WHERE "+r),t.sort&&(r+=" ORDER BY "+t.sort.map(function(e){return u+"."+e.attribute+" "+(e.descending?"desc":"asc")}));var h=r;t.count&&(h+=" LIMIT "+t.count),t.start&&(h+=" OFFSET "+t.start);var m=n.delegate(this.executeSql("SELECT * "+l+h,c).then(function(e){for(var t=[],i=0;i<e.rows.length;i++)t.push(o(e.rows.item(i)));return t})),d=this;return m.total={then:function(e,t){return d.executeSql("SELECT COUNT(*) "+l+r,c).then(function(e){return e.rows.item(0)["COUNT(*)"]}).then(e,t)}},new a(m)},executeSql:function(e,i){var a,n,r=new t;if(this.database.transaction(function(t){t.executeSql(e,i,function(e,t){r.resolve(a=t)},function(e,t){r.reject(n=t)})}),a)return a;if(n)throw n;return r.promise}})});//# sourceMappingURL=SQL.js.map