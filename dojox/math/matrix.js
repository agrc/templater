//>>built
define("dojox/math/matrix",["dojo","dojox"],function(e,t){return e.getObject("math.matrix",!0,t),e.mixin(t.math.matrix,{iDF:0,ALMOST_ZERO:1e-10,multiply:function(e,t){var i=e.length,a=e[0].length,r=t.length,o=t[0].length;if(a!=r)return[[0]];for(var n=[],s=0;s<i;s++){n[s]=[];for(var l=0;l<o;l++){n[s][l]=0;for(var d=0;d<a;d++)n[s][l]+=e[s][d]*t[d][l]}}return n},product:function(){if(0==arguments.length)return 1;for(var e=arguments[0],t=1;t<arguments.length;t++)e=this.multiply(e,arguments[t]);return e},sum:function(){if(0==arguments.length)return 0;var e=this.copy(arguments[0]),t=e.length;if(0==t)return 0;var i=e[0].length;if(0==i)return 0;for(var a=1;a<arguments.length;++a){var r=arguments[a];if(r.length!=t||r[0].length!=i)return 0;for(var o=0;o<t;o++)for(var n=0;n<i;n++)e[o][n]+=r[o][n]}return e},inverse:function(e){if(1==e.length&&1==e[0].length)return[[1/e[0][0]]];var t=e.length,i=this.create(t,t),a=this.adjoint(e),r=this.determinant(e),o=0;if(0==r)return[[0]];o=1/r;for(var n=0;n<t;n++)for(var s=0;s<t;s++)i[n][s]=o*a[n][s];return i},determinant:function(e){if(e.length!=e[0].length)return 0;for(var t=e.length,i=1,a=this.upperTriangle(e),r=0;r<t;r++){var o=a[r][r];if(Math.abs(o)<this.ALMOST_ZERO)return 0;i*=o}return i*=this.iDF},upperTriangle:function(e){e=this.copy(e);var t=0,i=0,a=e.length,r=1;this.iDF=1;for(var o=0;o<a-1;o++){e[o][o],r=1;for(var n=0;0==e[o][o]&&!n;)if(o+r>=a)this.iDF=0,n=1;else{for(var s=0;s<a;s++)i=e[o][s],e[o][s]=e[o+r][s],e[o+r][s]=i;r++,this.iDF*=-1}for(var l=o+1;l<a;l++)if(e[l][o],e[o][l],0!=e[o][o])for(var t=-1*e[l][o]/e[o][o],d=o;d<a;d++)e[l][d]=t*e[o][d]+e[l][d]}return e},create:function(e,t,i){i=i||0;for(var a=[],r=0;r<t;r++){a[r]=[];for(var o=0;o<e;o++)a[r][o]=i}return a},ones:function(e,t){return this.create(e,t,1)},zeros:function(e,t){return this.create(e,t)},identity:function(e,t){t=t||1;for(var i=[],a=0;a<e;a++){i[a]=[];for(var r=0;r<e;r++)i[a][r]=a==r?t:0}return i},adjoint:function(e){var t=e.length;if(t<=1)return[[0]];if(e.length!=e[0].length)return[[0]];for(var i=this.create(t,t),a=this.create(t-1,t-1),r=0,o=0,n=0,s=0,l=0,d=0;d<t;d++)for(var u=0;u<t;u++){for(n=0,r=0;r<t;r++)if(r!=d){for(s=0,o=0;o<t;o++)o!=u&&(a[n][s]=e[r][o],s++);n++}l=this.determinant(a),i[d][u]=Math.pow(-1,d+u)*l}return this.transpose(i)},transpose:function(e){for(var t=this.create(e.length,e[0].length),i=0;i<e.length;i++)for(var a=0;a<e[i].length;a++)t[a][i]=e[i][a];return t},format:function(e,t){function i(e,t){var i=Math.pow(10,t),a=Math.round(e*i)/i,r=a.toString();for("-"!=r.charAt(0)&&(r=" "+r),r.indexOf(".")>-1&&(r+=".");r.length<t+3;)r+="0";return r}t=t||5;for(var a=e.length,r=a>0?e[0].length:0,o="",n=0;n<a;n++){o+="| ";for(var s=0;s<r;s++)o+=i(e[n][s],t)+" ";o+="|\n"}return o},copy:function(e){for(var t=e.length,i=e[0].length,a=this.create(i,t),r=0;r<t;r++)for(var o=0;o<i;o++)a[r][o]=e[r][o];return a},scale:function(e,t){e=this.copy(e);for(var i=e.length,a=e[0].length,r=0;r<i;r++)for(var o=0;o<a;o++)e[r][o]*=t;return e}}),t.math.matrix});//# sourceMappingURL=matrix.js.map