//>>built
define("dojox/socket/Reconnect",["dojox/socket","dojo/aspect"],function(e,t){return e.Reconnect=function(i,a){a=a||{};var r,o,n=a.reconnectTime||1e4,s=a.backoffRate||2,l=n;return t.after(i,"onclose",function(t){clearTimeout(r),t.wasClean||i.disconnected(function(){e.replace(i,o=i.reconnect())})},!0),i.disconnected||(i.disconnected=function(e){setTimeout(function(){e(),r=setTimeout(function(){o.readyState<2&&(l=n)},n)},l),l*=s}),i.reconnect||(i.reconnect=function(){return i.args?e.LongPoll(i.args):e.WebSocket({url:i.URL||i.url})}),i},e.Reconnect});//# sourceMappingURL=Reconnect.js.map