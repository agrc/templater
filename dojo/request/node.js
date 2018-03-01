//>>built
define("dojo/request/node",["require","./util","./handlers","../errors/RequestTimeoutError","../node!http","../node!https","../node!url","../node!stream"],function(e,t,a,i,r,d,o,n){function l(e,n){var l=t.parseArgs(e,t.deepCreate(u,n),n&&n.data instanceof m);e=l.url,n=l.options;var s=t.deferred(l,function(e,t){t.clientRequest.abort()});e=o.parse(e);var f=l.requestOptions={hostname:e.hostname,port:e.port,socketPath:n.socketPath,method:n.method,headers:n.headers,agent:n.agent,pfx:n.pfx,key:n.key,passphrase:n.passphrase,cert:n.cert,ca:n.ca,ciphers:n.ciphers,rejectUnauthorized:!1!==n.rejectUnauthorized};e.path&&(f.path=e.path),(n.user||n.password)&&(f.auth=(n.user||"")+":"+(n.password||""));var h=l.clientRequest=("https:"===e.protocol?d:r).request(f);if(n.socketOptions&&("timeout"in n.socketOptions&&h.setTimeout(n.socketOptions.timeout),"noDelay"in n.socketOptions&&h.setNoDelay(n.socketOptions.noDelay),"keepAlive"in n.socketOptions)){var y=n.socketOptions.keepAlive;h.setKeepAlive(y>=0,y||0)}if(h.on("socket",function(){l.hasSocket=!0,s.progress(l)}),h.on("response",function(e){l.clientResponse=e,l.status=e.statusCode,l.getHeader=function(t){return e.headers[t.toLowerCase()]||null};var i=[];e.on("data",function(e){i.push(e)}),e.on("end",function(){c&&clearTimeout(c),l.text=i.join(""),t.checkStatus(l.status)||s.reject({message:"http response code "+l.status,response:l});try{a(l),s.resolve(l)}catch(e){s.reject(e)}})}),h.on("error",s.reject),n.data?"string"==typeof n.data?h.end(n.data):n.data.pipe(h):h.end(),n.timeout)var c=setTimeout(function(){s.cancel(new i(l))},n.timeout);return s.promise}var s,m=n.Stream,u={method:"GET",query:null,data:s,headers:{}};return t.addCommonMethods(l),l});//# sourceMappingURL=node.js.map