//>>built
define("lodash/_mergeData",["./_composeArgs","./_composeArgsRight","./_copyArray","./_replaceHolders"],function(e,t,i,a){function n(n,m){var f=n[1],p=m[1],g=f|p,y=(o|s|u)>g,v=p==u&&f==d||p==u&&f==c&&n[7].length<=m[8]||p==(u|c)&&m[7].length<=m[8]&&f==d;if(!y&&!v)return n;p&o&&(n[2]=m[2],g|=f&o?0:l);var b=m[3];if(b){var k=n[3];n[3]=k?e(k,b,m[4]):i(b),n[4]=k?a(n[3],r):i(m[4])}return b=m[5],b&&(k=n[5],n[5]=k?t(k,b,m[6]):i(b),n[6]=k?a(n[5],r):i(m[6])),b=m[7],b&&(n[7]=i(b)),p&u&&(n[8]=null==n[8]?m[8]:h(n[8],m[8])),null==n[9]&&(n[9]=m[9]),n[0]=m[0],n[1]=g,n}var r="__lodash_placeholder__",o=1,s=2,l=4,d=8,u=128,c=256,h=Math.min;return n});//# sourceMappingURL=_mergeData.js.map