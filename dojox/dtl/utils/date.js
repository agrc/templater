//>>built
define("dojox/dtl/utils/date",["dojo/_base/lang","dojox/date/php","../_base"],function(e,t,a){var i=e.getObject("utils.date",!0,a);return i.DateFormat=t.DateFormat,e.extend(i.DateFormat,t.DateFormat.prototype,{f:function(){return this.date.getMinutes()?this.g()+":"+this.i():this.g()},N:function(){return i._months_ap[this.date.getMonth()]},P:function(){return this.date.getMinutes()||this.date.getHours()?this.date.getMinutes()||12!=this.date.getHours()?this.f()+" "+this.a():"noon":"midnight"}}),e.mixin(dojox.dtl.utils.date,{format:function(e,t){var a=new dojox.dtl.utils.date.DateFormat(t);return a.format(e)},timesince:function(e,t){e instanceof Date||(e=new Date(e.year,e.month,e.day)),t||(t=new Date);for(var a,i=Math.abs(t.getTime()-e.getTime()),r=0;a=dojox.dtl.utils.date._chunks[r];r++){var o=Math.floor(i/a[0]);if(o)break}return o+" "+a[1](o)},_chunks:[[31536e6,function(e){return 1==e?"year":"years"}],[2592e6,function(e){return 1==e?"month":"months"}],[6048e5,function(e){return 1==e?"week":"weeks"}],[864e5,function(e){return 1==e?"day":"days"}],[36e5,function(e){return 1==e?"hour":"hours"}],[6e4,function(e){return 1==e?"minute":"minutes"}]],_months_ap:["Jan.","Feb.","March","April","May","June","July","Aug.","Sept.","Oct.","Nov.","Dec."]}),i});//# sourceMappingURL=date.js.map