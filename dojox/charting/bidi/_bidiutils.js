//>>built
define("dojox/charting/bidi/_bidiutils",{reverseMatrix:function(e,t,a,i){var r=a.l-a.r,o=i?-1:1,d=0,n=0,s=1,l=i?t.width+r:0,m=0;e.matrix&&(o*=Math.abs(e.matrix.xx),s=e.matrix.yy,d=e.matrix.xy,n=e.matrix.yx,m=e.matrix.xy),e.setTransform({xx:o,xy:d,yx:n,yy:s,dx:l,dy:m})}});//# sourceMappingURL=_bidiutils.js.map