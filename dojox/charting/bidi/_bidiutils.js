//>>built
define("dojox/charting/bidi/_bidiutils",{reverseMatrix:function(e,t,i,r){var a=i.l-i.r,n=r?-1:1,o=0,d=0,s=1,l=r?t.width+a:0,u=0;e.matrix&&(n*=Math.abs(e.matrix.xx),s=e.matrix.yy,o=e.matrix.xy,d=e.matrix.yx,u=e.matrix.xy),e.setTransform({xx:n,xy:o,yx:d,yy:s,dx:l,dy:u})}});//# sourceMappingURL=_bidiutils.js.map