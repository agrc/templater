//>>built
define("dojox/testing/DocTest",["dojo/string"],function(){return dojo.declare("dojox.testing.DocTest",null,{errors:[],getTests:function(e){var t=dojo.moduleUrl(e).path,i=t.substring(0,t.length-1)+".js",a=(dojo.xhrGet({url:i,handleAs:"text"}),dojo._getText(i));return this._getTestsFromString(a,!0)},getTestsFromString:function(e){return this._getTestsFromString(e,!1)},_getTestsFromString:function(e,t){for(var i=dojo.hitch(dojo.string,"trim"),a=e.split("\n"),r=a.length,n=[],o={commands:[],expectedResult:[],line:null},s=0;r+1>s;s++){var l=i(a[s]||"");t&&l.match(/^\/\/\s+>>>\s.*/)||l.match(/^\s*>>>\s.*/)?(o.line||(o.line=s+1),o.expectedResult.length>0&&(n.push({commands:o.commands,expectedResult:o.expectedResult.join("\n"),line:o.line}),o={commands:[],expectedResult:[],line:s+1}),l=t?i(l).substring(2,l.length):l,l=i(l).substring(3,l.length),o.commands.push(i(l))):t&&!l.match(/^\/\/\s+.*/)||!o.commands.length||0!=o.expectedResult.length?o.commands.length>0&&o.expectedResult.length&&(t&&!l.match(/^\/\/\s*$/)||n.push({commands:o.commands,expectedResult:o.expectedResult.join("\n"),line:o.line}),t&&!l.match(/^\/\//)&&n.push({commands:o.commands,expectedResult:o.expectedResult.join("\n"),line:o.line}),o={commands:[],expectedResult:[],line:0}):(l=t?i(l).substring(3,l.length):l,o.expectedResult.push(i(l)))}return n},run:function(e){this.errors=[];var t=this.getTests(e);t&&this._run(t)},_run:function(e){var t=e.length;this.tests=t;for(var i=0,a=0;t>a;a++){var r=e[a],n=this.runTest(r.commands,r.expectedResult),o=r.commands.join(" ");o=o.length>50?o.substr(0,50)+"...":o,n.success?i+=1:this.errors.push({commands:r.commands,actual:n.actualResult,expected:r.expectedResult})}},runTest:function(commands,expected){var ret={success:!1,actualResult:null},cmds=commands.join("\n");return ret.actualResult=eval(cmds),(String(ret.actualResult)==expected||dojo.toJson(ret.actualResult)==expected||'"'==expected.charAt(0)&&'"'==expected.charAt(expected.length-1)&&String(ret.actualResult)==expected.substring(1,expected.length-1))&&(ret.success=!0),ret}})});//# sourceMappingURL=DocTest.js.map