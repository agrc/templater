//>>built
define("lodash/_lazyValue",["./_baseWrapperValue","./_getView","./isArray"],function(e,t,i){function a(){var a=this.__wrapped__.value(),s=this.__dir__,l=i(a),d=s<0,c=l?a.length:0,u=t(0,c,this.__views__),h=u.start,m=u.end,f=m-h,p=d?m:h-1,g=this.__iteratees__,v=g.length,y=0,b=r(f,this.__takeCount__);if(!l||!d&&c==f&&b==f)return e(a,this.__actions__);var k=[];e:for(;f--&&y<b;){p+=s;for(var _=-1,x=a[p];++_<v;){var j=g[_],w=j.iteratee,M=j.type,C=w(x);if(M==n)x=C;else if(!C){if(M==o)continue e;break e}}k[y++]=x}return k}var o=1,n=2,r=Math.min;return a});//# sourceMappingURL=_lazyValue.js.map