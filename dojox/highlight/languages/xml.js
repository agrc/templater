//>>built
define("dojox/highlight/languages/xml",["../_base"],function(e){var t={className:"comment",begin:"<!--",end:"-->"},i={className:"attribute",begin:" [a-zA-Z-]+\\s*=\\s*",end:"^",contains:["value"]},a={className:"value",begin:'"',end:'"'};e.constants;return e.languages.xml={defaultMode:{contains:["pi","comment","cdata","tag"]},case_insensitive:!0,modes:[{className:"pi",begin:"<\\?",end:"\\?>",relevance:10},t,{className:"cdata",begin:"<\\!\\[CDATA\\[",end:"\\]\\]>"},{className:"tag",begin:"</?",end:">",contains:["title","tag_internal"],relevance:1.5},{className:"title",begin:"[A-Za-z:_][A-Za-z0-9\\._:-]+",end:"^",relevance:0},{className:"tag_internal",begin:"^",endsWithParent:!0,contains:["attribute"],relevance:0,illegal:"[\\+\\.]"},i,a],XML_COMMENT:t,XML_ATTR:i,XML_VALUE:a},e.languages.xml});//# sourceMappingURL=xml.js.map