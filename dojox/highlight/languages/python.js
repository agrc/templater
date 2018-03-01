//>>built
define("dojox/highlight/languages/python",["../_base"],function(e){var t=e.constants;return e.languages.python={defaultMode:{lexems:[t.UNDERSCORE_IDENT_RE],illegal:"(</|->)",contains:["comment","string","function","class","number","decorator"],keywords:{and:1,elif:1,is:1,global:1,as:1,in:1,if:1,from:1,raise:1,for:1,except:1,finally:1,print:1,import:1,pass:1,None:1,return:1,exec:1,else:1,break:1,not:1,with:1,class:1,assert:1,yield:1,try:1,while:1,continue:1,del:1,or:1,def:1,lambda:1}},modes:[{className:"function",lexems:[t.UNDERSCORE_IDENT_RE],begin:"\\bdef ",end:":",illegal:"$",keywords:{def:1},contains:["title","params"],relevance:10},{className:"class",lexems:[t.UNDERSCORE_IDENT_RE],begin:"\\bclass ",end:":",illegal:"[${]",keywords:{class:1},contains:["title","params"],relevance:10},{className:"title",begin:t.UNDERSCORE_IDENT_RE,end:"^"},{className:"params",begin:"\\(",end:"\\)",contains:["string"]},t.HASH_COMMENT_MODE,t.C_NUMBER_MODE,{className:"string",begin:"'''",end:"'''",relevance:10},{className:"string",begin:"r'''",end:"'''",relevance:10},{className:"string",begin:"u'''",end:"(^|[^\\\\])'''",relevance:10},{className:"string",begin:"ur'''",end:"'''",relevance:10},{className:"string",begin:'"""',end:'"""',relevance:10},{className:"string",begin:'r"""',end:'"""',relevance:10},{className:"string",begin:'u"""',end:'(^|[^\\\\])"""',relevance:10},{className:"string",begin:'ur"""',end:'"""',relevance:10},t.APOS_STRING_MODE,t.QUOTE_STRING_MODE,t.BACKSLASH_ESCAPE,{className:"string",begin:"r'",end:"'",relevance:10},{className:"string",begin:'r"',end:'"',relevance:10},{className:"string",begin:"u'",end:"(^|[^\\\\])'",relevance:10},{className:"string",begin:'u"',end:'(^|[^\\\\])"',relevance:10},{className:"string",begin:"ur'",end:"'",relevance:10},{className:"string",begin:'ur"',end:'"',relevance:10},{className:"decorator",begin:"@",end:"$"}]},e.languages.python});//# sourceMappingURL=python.js.map