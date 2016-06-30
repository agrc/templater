//>>built
define("dojox/validate/check",["dojo/_base/kernel","dojo/_base/lang","./_base"],function(e,t,i){return e.experimental("dojox.validate.check"),i.check=function(e,a){var n=[],o=[],r={isSuccessful:function(){return!this.hasInvalid()&&!this.hasMissing()},hasMissing:function(){return n.length>0},getMissing:function(){return n},isMissing:function(e){for(var t=0;t<n.length;t++)if(e==n[t])return!0;return!1},hasInvalid:function(){return o.length>0},getInvalid:function(){return o},isInvalid:function(e){for(var t=0;t<o.length;t++)if(e==o[t])return!0;return!1}},s=function(e,t){return"undefined"==typeof t[e]};if(a.trim instanceof Array)for(var l=0;l<a.trim.length;l++){var d=e[a.trim[l]];s("type",d)||"text"!=d.type&&"textarea"!=d.type&&"password"!=d.type||(d.value=d.value.replace(/(^\s*|\s*$)/g,""))}if(a.uppercase instanceof Array)for(var l=0;l<a.uppercase.length;l++){var d=e[a.uppercase[l]];s("type",d)||"text"!=d.type&&"textarea"!=d.type&&"password"!=d.type||(d.value=d.value.toUpperCase())}if(a.lowercase instanceof Array)for(var l=0;l<a.lowercase.length;l++){var d=e[a.lowercase[l]];s("type",d)||"text"!=d.type&&"textarea"!=d.type&&"password"!=d.type||(d.value=d.value.toLowerCase())}if(a.ucfirst instanceof Array)for(var l=0;l<a.ucfirst.length;l++){var d=e[a.ucfirst[l]];s("type",d)||"text"!=d.type&&"textarea"!=d.type&&"password"!=d.type||(d.value=d.value.replace(/\b\w+\b/g,function(e){return e.substring(0,1).toUpperCase()+e.substring(1).toLowerCase()}))}if(a.digit instanceof Array)for(var l=0;l<a.digit.length;l++){var d=e[a.digit[l]];s("type",d)||"text"!=d.type&&"textarea"!=d.type&&"password"!=d.type||(d.value=d.value.replace(/\D/g,""))}if(a.required instanceof Array)for(var l=0;l<a.required.length;l++)if(t.isString(a.required[l])){var d=e[a.required[l]];if(s("type",d)||"text"!=d.type&&"textarea"!=d.type&&"password"!=d.type&&"file"!=d.type||!/^\s*$/.test(d.value))if(s("type",d)||"select-one"!=d.type&&"select-multiple"!=d.type||-1!=d.selectedIndex&&!/^\s*$/.test(d.options[d.selectedIndex].value)){if(d instanceof Array){for(var h=!1,c=0;c<d.length;c++)d[c].checked&&(h=!0);h||(n[n.length]=d[0].name)}}else n[n.length]=d.name;else n[n.length]=d.name}if(a.required instanceof Array)for(var l=0;l<a.required.length;l++)if(t.isObject(a.required[l])){var d,u;for(var m in a.required[l])d=e[m],u=a.required[l][m];if(d instanceof Array){for(var h=0,c=0;c<d.length;c++)d[c].checked&&h++;u>h&&(n[n.length]=d[0].name)}else if(!s("type",d)&&"select-multiple"==d.type){for(var f=0,c=0;c<d.options.length;c++)d.options[c].selected&&!/^\s*$/.test(d.options[c].value)&&f++;u>f&&(n[n.length]=d.name)}}if(t.isObject(a.dependencies))for(m in a.dependencies){var d=e[m];if(!s("type",d)&&!("text"!=d.type&&"textarea"!=d.type&&"password"!=d.type||/\S+/.test(d.value)||r.isMissing(d.name))){var g=e[a.dependencies[m]];"text"!=g.type&&"textarea"!=g.type&&"password"!=g.type||/^\s*$/.test(g.value)||(n[n.length]=d.name)}}if(t.isObject(a.constraints))for(m in a.constraints){var d=e[m];if(d&&(s("tagName",d)||!(d.tagName.toLowerCase().indexOf("input")>=0||d.tagName.toLowerCase().indexOf("textarea")>=0)||!/^\s*$/.test(d.value))){var p;if(t.isFunction(a.constraints[m]))p=a.constraints[m](d.value);else if(t.isFunction(t.getObject(m,!1,a.constraints)))p=t.getObject(m,!1,a.constraints)(d.value);else if(t.isArray(a.constraints[m]))if(t.isArray(a.constraints[m][0]))for(var l=0;l<a.constraints[m].length&&(p=i.evaluateConstraint(a,a.constraints[m][l],m,d),p.isValid);l++);else p=t.isFunction(t.getObject(m,!1,a.constraints))?i.evaluateConstraint(a,a.constraints[a.constraints[m]],m,d):i.evaluateConstraint(a,a.constraints[m],m,d);p?p.isValid||(o[o.length]={field:d.name,message:p.message}):o[o.length]=d.name}}if(t.isObject(a.confirm))for(m in a.confirm){var d=e[m],g=e[a.confirm[m]];s("type",d)||s("type",g)||"text"!=d.type&&"textarea"!=d.type&&"password"!=d.type||g.type!=d.type||g.value==d.value||r.isInvalid(d.name)||/^\s*$/.test(g.value)||(o[o.length]=d.name)}return r},i.evaluateConstraint=function(e,i,a,n){var o=i[0],r=i.slice(1);return r.unshift(n.value),"undefined"!=typeof o&&"string"!=typeof o?o.apply(null,r):"undefined"!=typeof o&&"string"==typeof o&&t.isFunction(t.getObject(o))?t.getObject(o).apply(null,r):!1},i.check});//# sourceMappingURL=check.js.map