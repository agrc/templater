//>>built
define("dojox/charting/bidi/_bidiutils",{reverseMatrix:function(e,t,a,i){var r=a.l-a.r,d=i?-1:1,o=0,n=0,l=1,s=i?t.width+r:0,m=0;e.matrix&&(d*=Math.abs(e.matrix.xx),l=e.matrix.yy,o=e.matrix.xy,n=e.matrix.yx,m=e.matrix.xy),e.setTransform({xx:d,xy:o,yx:n,yy:l,dx:s,dy:m})}});//# sourceMappingURL=_bidiutils.js.map