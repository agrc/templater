//>>built
require({cache:{"url:app/templates/App.html":'<div>\n    <div class="container-fluid">\n        <h1>Generate New Post\n            <a href=\'Changelog.html\' class=\'version\'>${version}</a>\n        </h1>\n        <div class="row">\n            <div class="col-md-4 input">\n                <div class="form-group">\n                    <label>Title</label>\n                    <input type="text" class=\'form-control required\' data-dojo-attach-point=\'title\'>\n                </div>\n                <div class="form-group">\n                    <label>Type</label>\n                    <select class="form-control" data-dojo-attach-point=\'type\'>\n                        <option value="post">Post</option>\n                        <option value="page">Page</option>\n                    </select>\n                </div>\n                <div class="panel panel-default">\n                    <div class=\'panel-heading\'>Author</div>\n                    <div class="panel-body">\n                        <div class="form-group">\n                            <label>Display Name</label>\n                            <input type="text" class=\'form-control required\' data-dojo-attach-point=\'display_name\'>\n                        </div>\n                        <div class="form-group">\n                            <label>Email</label>\n                            <input type="email" class=\'form-control required\' data-dojo-attach-point=\'email\'>\n                        </div>\n                    </div>\n                </div>\n                <button class="btn btn-primary btn-lg btn-block" disabled\n                    data-dojo-attach-point=\'submitBtn\'\n                    data-dojo-attach-event=\'click: generate\'>Generate</button>\n            </div>\n            <div class="col-md-8 hidden"\n                data-dojo-attach-point=\'outputContainer\'>\n                <div class="form-group">\n                    <label>File Path</label>\n                    <input type="text" class="form-control"\n                        data-dojo-attach-point=\'fileName\'>\n                </div>\n                <div class="form-group">\n                    <label>Contents</label>\n                    <textarea id="" rows="20" class=\'form-control\'\n                        data-dojo-attach-point=\'output\'\n                    ></textarea>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n',"url:app/templates/_post.md":"---\nlayout: post\nstatus: publish\npublished: true\ntitle: '{title}'\nauthor:\n  display_name: {display_name}\n  email: {email}\ndate: {date}\ncategories:\n\ntags:\n\n---\n\n[post body goes here]\n"}}),define("app/App",["dijit/_TemplatedMixin","dijit/_WidgetBase","dojo/dom-class","dojo/query","dojo/text!app/templates/App.html","dojo/text!app/templates/_post.md","dojo/_base/declare","dojo/_base/lang","lodash/kebabCase"],function(t,e,a,n,i,l,o,s,d){var r="templater_token",p=["display_name","email"];return o([e,t],{templateString:i,version:"1.1.0",requiredFields:null,postCreate:function(){var t=window.localStorage[r];t&&this.deserialize(JSON.parse(t)),this.requiredFields=n(".required",this.domNode),this.requiredFields.on("change, keyup",s.hitch(this,"validate"))},validate:function(){this.submitBtn.disabled=!this.requiredFields.every(function(t){return t.value.trim().length>0})},generate:function(){var t=this.serialize();this.output.value=s.replace(l,t),this.fileName.value=this.getFileNameString(new Date,this.title.value,this.type.value),window.localStorage[r]=JSON.stringify(t),a.remove(this.outputContainer,"hidden")},serialize:function(){return{title:this.title.value,display_name:this.display_name.value,email:this.email.value,date:this.getDateString(new Date)}},getDateString:function(t){var e=t.toISOString().split("T");return e[0]+" "+e[1].split(".")[0]},deserialize:function(t){Object.keys(t).forEach(function(e){p.indexOf(e)>-1&&(this[e].value=t[e])},this)},getFileNameString:function(t,e,a){if("post"===a){var n=t.toISOString().split("T")[0];return n+"-"+d(e)+".md"}return d(e)+"/index.md"}})});//# sourceMappingURL=App.js.map