//>>built
define("dojox/atom/io/model",["dojo/_base/kernel","dojo/_base/declare","dojo/_base/lang","dojo/date/stamp","dojox/xml/parser"],function(e,t,a,i,r){var o={};return e.setObject("dojox.atom.io.model",o),o._Constants={ATOM_URI:"http://www.w3.org/2005/Atom",ATOM_NS:"http://www.w3.org/2005/Atom",PURL_NS:"http://purl.org/atom/app#",APP_NS:"http://www.w3.org/2007/app"},o._actions={link:function(e,t){null===e.links&&(e.links=[]);var a=new o.Link;a.buildFromDom(t),e.links.push(a)},author:function(e,t){null===e.authors&&(e.authors=[]);var a=new o.Person("author");a.buildFromDom(t),e.authors.push(a)},contributor:function(e,t){null===e.contributors&&(e.contributors=[]);var a=new o.Person("contributor");a.buildFromDom(t),e.contributors.push(a)},category:function(e,t){null===e.categories&&(e.categories=[]);var a=new o.Category;a.buildFromDom(t),e.categories.push(a)},icon:function(e,t){e.icon=r.textContent(t)},id:function(e,t){e.id=r.textContent(t)},rights:function(e,t){e.rights=r.textContent(t)},subtitle:function(e,t){var a=new o.Content("subtitle");a.buildFromDom(t),e.subtitle=a},title:function(e,t){var a=new o.Content("title");a.buildFromDom(t),e.title=a},updated:function(e,t){e.updated=o.util.createDate(t)},issued:function(e,t){e.issued=o.util.createDate(t)},modified:function(e,t){e.modified=o.util.createDate(t)},published:function(e,t){e.published=o.util.createDate(t)},entry:function(e,t){null===e.entries&&(e.entries=[]);var a=e.createEntry?e.createEntry():new o.Entry;a.buildFromDom(t),e.entries.push(a)},content:function(e,t){var a=new o.Content("content");a.buildFromDom(t),e.content=a},summary:function(e,t){var a=new o.Content("summary");a.buildFromDom(t),e.summary=a},name:function(e,t){e.name=r.textContent(t)},email:function(e,t){e.email=r.textContent(t)},uri:function(e,t){e.uri=r.textContent(t)},generator:function(e,t){e.generator=new o.Generator,e.generator.buildFromDom(t)}},o.util={createDate:function(e){var t=r.textContent(e);return t?i.fromISOString(a.trim(t)):null},escapeHtml:function(e){return e.replace(/&/gm,"&amp;").replace(/</gm,"&lt;").replace(/>/gm,"&gt;").replace(/"/gm,"&quot;").replace(/'/gm,"&#39;")},unEscapeHtml:function(e){return e.replace(/&lt;/gm,"<").replace(/&gt;/gm,">").replace(/&quot;/gm,'"').replace(/&#39;/gm,"'").replace(/&amp;/gm,"&")},getNodename:function(e){var t=null;if(null!==e&&null!==(t=e.localName?e.localName:e.nodeName)){var a=t.indexOf(":");-1!==a&&(t=t.substring(a+1,t.length))}return t}},o.Node=t(null,{constructor:function(e,t,a,i,r){this.name_space=e,this.name=t,this.attributes=[],a&&(this.attributes=a),this.content=[],this.rawNodes=[],this.textContent=null,i&&this.content.push(i),this.shortNs=r,this._objName="Node",this.nodeType="Node"},buildFromDom:function(e){this._saveAttributes(e),this.name_space=e.namespaceURI,this.shortNs=e.prefix,this.name=o.util.getNodename(e);for(var t=0;t<e.childNodes.length;t++){var a=e.childNodes[t];if("#text"!=o.util.getNodename(a)){this.rawNodes.push(a);var i=new o.Node;i.buildFromDom(a,!0),this.content.push(i)}else this.content.push(a.nodeValue)}this.textContent=r.textContent(e)},_saveAttributes:function(e){if(this.attributes||(this.attributes=[]),function(e){var t=e.attributes;return null!==t&&0!==t.length}(e)&&this._getAttributeNames){var t=this._getAttributeNames(e);if(t&&t.length>0)for(var a in t){var i=e.getAttribute(t[a]);i&&(this.attributes[t[a]]=i)}}},addAttribute:function(e,t){this.attributes[e]=t},getAttribute:function(e){return this.attributes[e]},_getAttributeNames:function(e){for(var t=[],a=0;a<e.attributes.length;a++)t.push(e.attributes[a].nodeName);return t},toString:function(){var e,t=[],a=(this.shortNs?this.shortNs+":":"")+this.name;if("#cdata-section"==this.name)t.push("<![CDATA["),t.push(this.textContent),t.push("]]>");else{if(t.push("<"),t.push(a),this.name_space&&t.push(" xmlns='"+this.name_space+"'"),this.attributes)for(e in this.attributes)t.push(" "+e+"='"+this.attributes[e]+"'");if(this.content){t.push(">");for(e in this.content)t.push(this.content[e]);t.push("</"+a+">\n")}else t.push("/>\n")}return t.join("")},addContent:function(e){this.content.push(e)}}),o.AtomItem=t(o.Node,{constructor:function(e){this.ATOM_URI=o._Constants.ATOM_URI,this.links=null,this.authors=null,this.categories=null,this.contributors=null,this.icon=this.id=this.logo=this.xmlBase=this.rights=null,this.subtitle=this.title=null,this.updated=this.published=null,this.issued=this.modified=null,this.content=null,this.extensions=null,this.entries=null,this.name_spaces={},this._objName="AtomItem",this.nodeType="AtomItem"},_getAttributeNames:function(){return null},_accepts:{},accept:function(e){return Boolean(this._accepts[e])},_postBuild:function(){},buildFromDom:function(e){var t,a,i;for(t=0;t<e.attributes.length;t++)a=e.attributes.item(t),i=o.util.getNodename(a),"xmlns"==a.prefix&&a.prefix!=i&&this.addNamespace(a.nodeValue,i);for(a=e.childNodes,t=0;t<a.length;t++)if(1==a[t].nodeType){var r=o.util.getNodename(a[t]);if(!r)continue;if(a[t].namespaceURI!=o._Constants.ATOM_NS&&"#text"!=r){this.extensions||(this.extensions=[]);var n=new o.Node;n.buildFromDom(a[t]),this.extensions.push(n)}if(!this.accept(r.toLowerCase()))continue;var d=o._actions[r];d&&d(this,a[t])}this._saveAttributes(e),this._postBuild&&this._postBuild()},addNamespace:function(e,t){e&&t&&(this.name_spaces[t]=e)},addAuthor:function(e,t,a){this.authors||(this.authors=[]),this.authors.push(new o.Person("author",e,t,a))},addContributor:function(e,t,a){this.contributors||(this.contributors=[]),this.contributors.push(new o.Person("contributor",e,t,a))},addLink:function(e,t,a,i,r){this.links||(this.links=[]),this.links.push(new o.Link(e,t,a,i,r))},removeLink:function(e,t){if(this.links&&a.isArray(this.links)){for(var i=0,r=0;r<this.links.length;r++)e&&this.links[r].href!==e||t&&this.links[r].rel!==t||(this.links.splice(r,1),i++);return i}},removeBasicLinks:function(){if(this.links){for(var e=0,t=0;t<this.links.length;t++)this.links[t].rel||(this.links.splice(t,1),e++,t--);return e}},addCategory:function(e,t,a){this.categories||(this.categories=[]),this.categories.push(new o.Category(e,t,a))},getCategories:function(e){if(!e)return this.categories;var t=[];for(var a in this.categories)this.categories[a].scheme===e&&t.push(this.categories[a]);return t},removeCategories:function(e,t){if(this.categories){for(var a=0,i=0;i<this.categories.length;i++)e&&this.categories[i].scheme!==e||t&&this.categories[i].term!==t||(this.categories.splice(i,1),a++,i--);return a}},setTitle:function(e,t){e&&(this.title=new o.Content("title"),this.title.value=e,t&&(this.title.type=t))},addExtension:function(e,t,a,i,r){this.extensions||(this.extensions=[]),this.extensions.push(new o.Node(e,t,a,i,r||"ns"+this.extensions.length))},getExtensions:function(e,t){var a=[];if(!this.extensions)return a;for(var i in this.extensions)this.extensions[i].name_space!==e&&this.extensions[i].shortNs!==e||t&&this.extensions[i].name!==t||a.push(this.extensions[i]);return a},removeExtensions:function(e,t){if(this.extensions)for(var a=0;a<this.extensions.length;a++)this.extensions[a].name_space!=e&&this.extensions[a].shortNs!==e||this.extensions[a].name!==t||(this.extensions.splice(a,1),a--)},destroy:function(){this.links=null,this.authors=null,this.categories=null,this.contributors=null,this.icon=this.id=this.logo=this.xmlBase=this.rights=null,this.subtitle=this.title=null,this.updated=this.published=null,this.issued=this.modified=null,this.content=null,this.extensions=null,this.entries=null}}),o.Category=t(o.Node,{constructor:function(e,t,a){this.scheme=e,this.term=t,this.label=a,this._objName="Category",this.nodeType="Category"},_postBuild:function(){},_getAttributeNames:function(){return["label","scheme","term"]},toString:function(){var e=[];return e.push("<category "),this.label&&e.push(' label="'+this.label+'" '),this.scheme&&e.push(' scheme="'+this.scheme+'" '),this.term&&e.push(' term="'+this.term+'" '),e.push("/>\n"),e.join("")},buildFromDom:function(e){this._saveAttributes(e),this.label=this.attributes.label,this.scheme=this.attributes.scheme,this.term=this.attributes.term,this._postBuild&&this._postBuild()}}),o.Content=t(o.Node,{constructor:function(e,t,a,i,r){this.tagName=e,this.value=t,this.src=a,this.type=i,this.xmlLang=r,this.HTML="html",this.TEXT="text",this.XHTML="xhtml",this.XML="xml",this._useTextContent="true",this.nodeType="Content"},_getAttributeNames:function(){return["type","src"]},_postBuild:function(){},buildFromDom:function(e){var t=e.getAttribute("type");if(t?(t=t.toLowerCase(),t=this.XML):t="text",t===this.XML){if(e.firstChild){var a;for(this.value="",a=0;a<e.childNodes.length;a++){var i=e.childNodes[a];i&&(this.value+=r.innerXML(i))}}}else e.innerHTML?this.value=e.innerHTML:this.value=r.textContent(e);this._saveAttributes(e),this.attributes&&(this.type=this.attributes.type,this.scheme=this.attributes.scheme,this.term=this.attributes.term),this.type||(this.type="text");var n=this.type.toLowerCase();"html"!==n&&"text/html"!==n&&"xhtml"!==n&&"text/xhtml"!==n||(this.value=this.value?o.util.unEscapeHtml(this.value):""),this._postBuild&&this._postBuild()},toString:function(){var e=[];return e.push("<"+this.tagName+" "),this.type||(this.type="text"),this.type&&e.push(' type="'+this.type+'" '),this.xmlLang&&e.push(' xml:lang="'+this.xmlLang+'" '),this.xmlBase&&e.push(' xml:base="'+this.xmlBase+'" '),this.type.toLowerCase()==this.HTML?e.push(">"+o.util.escapeHtml(this.value)+"</"+this.tagName+">\n"):e.push(">"+this.value+"</"+this.tagName+">\n"),e.join("")}}),o.Link=t(o.Node,{constructor:function(e,t,a,i,r){this.href=e,this.hrefLang=a,this.rel=t,this.title=i,this.type=r,this.nodeType="Link"},_getAttributeNames:function(){return["href","jrefLang","rel","title","type"]},_postBuild:function(){},buildFromDom:function(e){this._saveAttributes(e),this.href=this.attributes.href,this.hrefLang=this.attributes.hreflang,this.rel=this.attributes.rel,this.title=this.attributes.title,this.type=this.attributes.type,this._postBuild&&this._postBuild()},toString:function(){var e=[];return e.push("<link "),this.href&&e.push(' href="'+this.href+'" '),this.hrefLang&&e.push(' hrefLang="'+this.hrefLang+'" '),this.rel&&e.push(' rel="'+this.rel+'" '),this.title&&e.push(' title="'+this.title+'" '),this.type&&e.push(' type = "'+this.type+'" '),e.push("/>\n"),e.join("")}}),o.Person=t(o.Node,{constructor:function(e,t,a,i){this.author="author",this.contributor="contributor",e||(e=this.author),this.personType=e,this.name=t||"",this.email=a||"",this.uri=i||"",this._objName="Person",this.nodeType="Person"},_getAttributeNames:function(){return null},_postBuild:function(){},accept:function(e){return Boolean(this._accepts[e])},buildFromDom:function(e){for(var t=e.childNodes,a=0;a<t.length;a++){var i=o.util.getNodename(t[a]);if(i){if(t[a].namespaceURI!=o._Constants.ATOM_NS&&"#text"!=i){this.extensions||(this.extensions=[]);var r=new o.Node;r.buildFromDom(t[a]),this.extensions.push(r)}if(this.accept(i.toLowerCase())){var n=o._actions[i];n&&n(this,t[a])}}}this._saveAttributes(e),this._postBuild&&this._postBuild()},_accepts:{name:!0,uri:!0,email:!0},toString:function(){var e=[];return e.push("<"+this.personType+">\n"),this.name&&e.push("\t<name>"+this.name+"</name>\n"),this.email&&e.push("\t<email>"+this.email+"</email>\n"),this.uri&&e.push("\t<uri>"+this.uri+"</uri>\n"),e.push("</"+this.personType+">\n"),e.join("")}}),o.Generator=t(o.Node,{constructor:function(e,t,a){this.uri=e,this.version=t,this.value=a},_postBuild:function(){},buildFromDom:function(e){this.value=r.textContent(e),this._saveAttributes(e),this.uri=this.attributes.uri,this.version=this.attributes.version,this._postBuild&&this._postBuild()},toString:function(){var e=[];return e.push("<generator "),this.uri&&e.push(' uri="'+this.uri+'" '),this.version&&e.push(' version="'+this.version+'" '),e.push(">"+this.value+"</generator>\n"),e.join("")}}),o.Entry=t(o.AtomItem,{constructor:function(e){this.id=e,this._objName="Entry",this.feedUrl=null},_getAttributeNames:function(){return null},_accepts:{author:!0,content:!0,category:!0,contributor:!0,created:!0,id:!0,link:!0,published:!0,rights:!0,summary:!0,title:!0,updated:!0,xmlbase:!0,issued:!0,modified:!0},toString:function(e){var t,a=[];e?(a.push("<?xml version='1.0' encoding='UTF-8'?>"),a.push("<entry xmlns='"+o._Constants.ATOM_URI+"'")):a.push("<entry"),this.xmlBase&&a.push(' xml:base="'+this.xmlBase+'" ');for(t in this.name_spaces)a.push(" xmlns:"+t+'="'+this.name_spaces[t]+'"');a.push(">\n"),a.push("<id>"+(this.id?this.id:"")+"</id>\n"),this.issued&&!this.published&&(this.published=this.issued),this.published&&a.push("<published>"+i.toISOString(this.published)+"</published>\n"),this.created&&a.push("<created>"+i.toISOString(this.created)+"</created>\n"),this.issued&&a.push("<issued>"+i.toISOString(this.issued)+"</issued>\n"),this.modified&&a.push("<modified>"+i.toISOString(this.modified)+"</modified>\n"),this.modified&&!this.updated&&(this.updated=this.modified),this.updated&&a.push("<updated>"+i.toISOString(this.updated)+"</updated>\n"),this.rights&&a.push("<rights>"+this.rights+"</rights>\n"),this.title&&a.push(this.title.toString()),this.summary&&a.push(this.summary.toString());var r=[this.authors,this.categories,this.links,this.contributors,this.extensions];for(var n in r)if(r[n])for(var d in r[n])a.push(r[n][d]);return this.content&&a.push(this.content.toString()),a.push("</entry>\n"),a.join("")},getEditHref:function(){if(null===this.links||0===this.links.length)return null;for(var e in this.links)if(this.links[e].rel&&"edit"==this.links[e].rel)return this.links[e].href;return null},setEditHref:function(e){null===this.links&&(this.links=[]);for(var t in this.links)if(this.links[t].rel&&"edit"==this.links[t].rel)return void(this.links[t].href=e);this.addLink(e,"edit")}}),o.Feed=t(o.AtomItem,{_accepts:{author:!0,content:!0,category:!0,contributor:!0,created:!0,id:!0,link:!0,published:!0,rights:!0,summary:!0,title:!0,updated:!0,xmlbase:!0,entry:!0,logo:!0,issued:!0,modified:!0,icon:!0,subtitle:!0},addEntry:function(e){if(!e.id)throw new Error("The entry object must be assigned an ID attribute.");this.entries||(this.entries=[]),e.feedUrl=this.getSelfHref(),this.entries.push(e)},getFirstEntry:function(){return this.entries&&0!==this.entries.length?this.entries[0]:null},getEntry:function(e){if(!this.entries)return null;for(var t in this.entries)if(this.entries[t].id==e)return this.entries[t];return null},removeEntry:function(e){if(this.entries){for(var t=0,a=0;a<this.entries.length;a++)this.entries[a]===e&&(this.entries.splice(a,1),t++);return t}},setEntries:function(e){for(var t in e)this.addEntry(e[t])},toString:function(){var e,t=[];t.push('<?xml version="1.0" encoding="utf-8"?>\n'),t.push('<feed xmlns="'+o._Constants.ATOM_URI+'"'),this.xmlBase&&t.push(' xml:base="'+this.xmlBase+'"');for(e in this.name_spaces)t.push(" xmlns:"+e+'="'+this.name_spaces[e]+'"');t.push(">\n"),t.push("<id>"+(this.id?this.id:"")+"</id>\n"),this.title&&t.push(this.title),this.copyright&&!this.rights&&(this.rights=this.copyright),this.rights&&t.push("<rights>"+this.rights+"</rights>\n"),this.issued&&t.push("<issued>"+i.toISOString(this.issued)+"</issued>\n"),this.modified&&t.push("<modified>"+i.toISOString(this.modified)+"</modified>\n"),this.modified&&!this.updated&&(this.updated=this.modified),this.updated&&t.push("<updated>"+i.toISOString(this.updated)+"</updated>\n"),this.published&&t.push("<published>"+i.toISOString(this.published)+"</published>\n"),this.icon&&t.push("<icon>"+this.icon+"</icon>\n"),this.language&&t.push("<language>"+this.language+"</language>\n"),this.logo&&t.push("<logo>"+this.logo+"</logo>\n"),this.subtitle&&t.push(this.subtitle.toString()),this.tagline&&t.push(this.tagline.toString());var a=[this.alternateLinks,this.authors,this.categories,this.contributors,this.otherLinks,this.extensions,this.entries];for(e in a)if(a[e])for(var r in a[e])t.push(a[e][r]);return t.push("</feed>"),t.join("")},createEntry:function(){var e=new o.Entry;return e.feedUrl=this.getSelfHref(),e},getSelfHref:function(){if(null===this.links||0===this.links.length)return null;for(var e in this.links)if(this.links[e].rel&&"self"==this.links[e].rel)return this.links[e].href;return null}}),o.Service=t(o.AtomItem,{constructor:function(e){this.href=e},buildFromDom:function(e){var t;if(this.workspaces=[],"service"==e.tagName&&(e.namespaceURI==o._Constants.PURL_NS||e.namespaceURI==o._Constants.APP_NS)){var a=e.namespaceURI;this.name_space=e.namespaceURI;var i;if(void 0!==e.getElementsByTagNameNS)i=e.getElementsByTagNameNS(a,"workspace");else{i=[];var r=e.getElementsByTagName("workspace");for(t=0;t<r.length;t++)r[t].namespaceURI==a&&i.push(r[t])}if(i&&i.length>0){var n,d=0;for(t=0;t<i.length;t++){n=void 0===i.item?i[t]:i.item(t);var s=new o.Workspace;s.buildFromDom(n),this.workspaces[d++]=s}}}},getCollection:function(e){for(var t=0;t<this.workspaces.length;t++)for(var a=this.workspaces[t].collections,i=0;i<a.length;i++)if(a[i].href==e)return a;return null}}),o.Workspace=t(o.AtomItem,{constructor:function(e){this.title=e,this.collections=[]},buildFromDom:function(e){var t=o.util.getNodename(e);if("workspace"==t)for(var a=e.childNodes,i=0,n=0;n<a.length;n++){var d=a[n];if(1===d.nodeType)if(t=o.util.getNodename(d),d.namespaceURI==o._Constants.PURL_NS||d.namespaceURI==o._Constants.APP_NS){if("collection"===t){var s=new o.Collection;s.buildFromDom(d),this.collections[i++]=s}}else d.namespaceURI===o._Constants.ATOM_NS&&"title"===t&&(this.title=r.textContent(d))}}}),o.Collection=t(o.AtomItem,{constructor:function(e,t){this.href=e,this.title=t,this.attributes=[],this.features=[],this.children=[],this.memberType=null,this.id=null},buildFromDom:function(e){this.href=e.getAttribute("href");for(var t=e.childNodes,a=0;a<t.length;a++){var i=t[a];if(1===i.nodeType){var n=o.util.getNodename(i);if(i.namespaceURI==o._Constants.PURL_NS||i.namespaceURI==o._Constants.APP_NS)if("member-type"===n)this.memberType=r.textContent(i);else if("feature"==n)i.getAttribute("id")&&this.features.push(i.getAttribute("id"));else{var d=new o.Node;d.buildFromDom(i),this.children.push(d)}else i.namespaceURI===o._Constants.ATOM_NS&&("id"===n?this.id=r.textContent(i):"title"===n&&(this.title=r.textContent(i)))}}}}),o});//# sourceMappingURL=model.js.map