//>>built
define("dojox/validate/check",["dojo/_base/kernel","dojo/_base/lang","./_base"],function(e,t,i){return e.experimental("dojox.validate.check"),i.check=function(e,a){var o=[],r=[],n={isSuccessful:function(){return!this.hasInvalid()&&!this.hasMissing()},hasMissing:function(){return o.length>0},getMissing:function(){return o},isMissing:function(e){for(var t=0;t<o.length;t++)if(e==o[t])return!0;return!1},hasInvalid:function(){return r.length>0},getInvalid:function(){return r},isInvalid:function(e){for(var t=0;t<r.length;t++)if(e==r[t])return!0;return!1}},s=function(e,t){return"undefined"==typeof t[e]};if(a.trim instanceof Array)for(var l=0;l<a.trim.length;l++){var d=e[a.trim[l]];s("type",d)||"text"!=d.type&&"textarea"!=d.type&&"password"!=d.type||(d.value=d.value.replace(/(^\s*|\s*$)/g,""))}if(a.uppercase instanceof Array)for(var l=0;l<a.uppercase.length;l++){var d=e[a.uppercase[l]];s("type",d)||"text"!=d.type&&"textarea"!=d.type&&"password"!=d.type||(d.value=d.value.toUpperCase())}if(a.lowercase instanceof Array)for(var l=0;l<a.lowercase.length;l++){var d=e[a.lowercase[l]];s("type",d)||"text"!=d.type&&"textarea"!=d.type&&"password"!=d.type||(d.value=d.value.toLowerCase())}if(a.ucfirst instanceof Array)for(var l=0;l<a.ucfirst.length;l++){var d=e[a.ucfirst[l]];s("type",d)||"text"!=d.type&&"textarea"!=d.type&&"password"!=d.type||(d.value=d.value.replace(/\b\w+\b/g,function(e){return e.substring(0,1).toUpperCase()+e.substring(1).toLowerCase()}))}if(a.digit instanceof Array)for(var l=0;l<a.digit.length;l++){var d=e[a.digit[l]];s("type",d)||"text"!=d.type&&"textarea"!=d.type&&"password"!=d.type||(d.value=d.value.replace(/\D/g,""))}if(a.required instanceof Array)for(var l=0;l<a.required.length;l++)if(t.isString(a.required[l])){var d=e[a.required[l]];if(s("type",d)||"text"!=d.type&&"textarea"!=d.type&&"password"!=d.type&&"file"!=d.type||!/^\s*$/.test(d.value))if(s("type",d)||"select-one"!=d.type&&"select-multiple"!=d.type||-1!=d.selectedIndex&&!/^\s*$/.test(d.options[d.selectedIndex].value)){if(d instanceof Array){for(var h=!1,c=0;c<d.length;c++)d[c].checked&&(h=!0);h||(o[o.length]=d[0].name)}}else o[o.length]=d.name;else o[o.length]=d.name}if(a.required instanceof Array)for(var l=0;l<a.required.length;l++)if(t.isObject(a.required[l])){var d,u;for(var m in a.required[l])d=e[m],u=a.required[l][m];if(d instanceof Array){for(var h=0,c=0;c<d.length;c++)d[c].checked&&h++;u>h&&(o[o.length]=d[0].name)}else if(!s("type",d)&&"select-multiple"==d.type){for(var f=0,c=0;c<d.options.length;c++)d.options[c].selected&&!/^\s*$/.test(d.options[c].value)&&f++;u>f&&(o[o.length]=d.name)}}if(t.isObject(a.dependencies))for(m in a.dependencies){var d=e[m];if(!s("type",d)&&!("text"!=d.type&&"textarea"!=d.type&&"password"!=d.type||/\S+/.test(d.value)||n.isMissing(d.name))){var p=e[a.dependencies[m]];"text"!=p.type&&"textarea"!=p.type&&"password"!=p.type||/^\s*$/.test(p.value)||(o[o.length]=d.name)}}if(t.isObject(a.constraints))for(m in a.constraints){var d=e[m];if(d&&(s("tagName",d)||!(d.tagName.toLowerCase().indexOf("input")>=0||d.tagName.toLowerCase().indexOf("textarea")>=0)||!/^\s*$/.test(d.value))){var g;if(t.isFunction(a.constraints[m]))g=a.constraints[m](d.value);else if(t.isFunction(t.getObject(m,!1,a.constraints)))g=t.getObject(m,!1,a.constraints)(d.value);else if(t.isArray(a.constraints[m]))if(t.isArray(a.constraints[m][0]))for(var l=0;l<a.constraints[m].length&&(g=i.evaluateConstraint(a,a.constraints[m][l],m,d),g.isValid);l++);else g=t.isFunction(t.getObject(m,!1,a.constraints))?i.evaluateConstraint(a,a.constraints[a.constraints[m]],m,d):i.evaluateConstraint(a,a.constraints[m],m,d);g?g.isValid||(r[r.length]={field:d.name,message:g.message}):r[r.length]=d.name}}if(t.isObject(a.confirm))for(m in a.confirm){var d=e[m],p=e[a.confirm[m]];s("type",d)||s("type",p)||"text"!=d.type&&"textarea"!=d.type&&"password"!=d.type||p.type!=d.type||p.value==d.value||n.isInvalid(d.name)||/^\s*$/.test(p.value)||(r[r.length]=d.name)}return n},i.evaluateConstraint=function(e,i,a,o){var r=i[0],n=i.slice(1);return n.unshift(o.value),"undefined"!=typeof r&&"string"!=typeof r?r.apply(null,n):"undefined"!=typeof r&&"string"==typeof r&&t.isFunction(t.getObject(r))?t.getObject(r).apply(null,n):!1},i.check});//# sourceMappingURL=check.js.map