//>>built
define("dojox/math/curves",["dojo","dojox"],function(e,t){return e.getObject("math.curves",!0,t),e.mixin(t.math.curves,{Line:function(e,t){this.start=e,this.end=t,this.dimensions=e.length;for(var i=0;i<e.length;i++)e[i]=Number(e[i]);for(var i=0;i<t.length;i++)t[i]=Number(t[i]);return this.getValue=function(e){for(var t=new Array(this.dimensions),i=0;i<this.dimensions;i++)t[i]=(this.end[i]-this.start[i])*e+this.start[i];return t},this},Bezier:function(e){return this.getValue=function(e){if(e>=1)return this.p[this.p.length-1];if(e<=0)return this.p[0];for(var i=new Array(this.p[0].length),a=0;r<this.p[0].length;a++)i[a]=0;for(var r=0;r<this.p[0].length;r++){for(var n=0,o=0,s=0;s<this.p.length;s++)n+=this.p[s][r]*this.p[this.p.length-1][0]*t.math.bernstein(e,this.p.length,s);for(var l=0;l<this.p.length;l++)o+=this.p[this.p.length-1][0]*t.math.bernstein(e,this.p.length,l);i[r]=n/o}return i},this.p=e,this},CatmullRom:function(e,t){return this.getValue=function(e){var t=e*(this.p.length-1),i=Math.floor(t),a=t-i,r=i-1;r<0&&(r=0);var n=i,o=i+1;o>=this.p.length&&(o=this.p.length-1);var s=i+2;s>=this.p.length&&(s=this.p.length-1);for(var l=a,d=a*a,u=a*a*a,h=new Array(this.p[0].length),c=0;c<this.p[0].length;c++){var m=-this.c*this.p[r][c]+(2-this.c)*this.p[n][c]+(this.c-2)*this.p[o][c]+this.c*this.p[s][c],f=2*this.c*this.p[r][c]+(this.c-3)*this.p[n][c]+(3-2*this.c)*this.p[o][c]+-this.c*this.p[s][c],g=-this.c*this.p[r][c]+this.c*this.p[o][c],p=this.p[n][c];h[c]=m*u+f*d+g*l+p}return h},this.c=t||.7,this.p=e,this},Arc:function(e,i,a){function r(e,t){for(var i=new Array(e.length),a=0;a<e.length;a++)i[a]=e[a]+t[a];return i}function n(e){for(var t=new Array(e.length),i=0;i<e.length;i++)t[i]=-e[i];return t}var o=t.math.midpoint(e,i),s=r(n(o),e),l=Math.sqrt(Math.pow(s[0],2)+Math.pow(s[1],2)),d=t.math.radiansToDegrees(Math.atan(s[1]/s[0]));s[0]<0?d-=90:d+=90,t.math.curves.CenteredArc.call(this,o,l,d,d+(a?-180:180))},CenteredArc:function(e,i,a,r){return this.center=e,this.radius=i,this.start=a||0,this.end=r,this.getValue=function(e){var i=new Array(2),a=t.math.degreesToRadians(this.start+(this.end-this.start)*e);return i[0]=this.center[0]+this.radius*Math.sin(a),i[1]=this.center[1]-this.radius*Math.cos(a),i},this},Circle:function(e,i){return t.math.curves.CenteredArc.call(this,e,i,0,360),this},Path:function(){function e(){for(var e=0,t=0;t<a.length;t++){var i=e+a[t]/n,o=i-e;r[t]=[e,i,o],e=i}}var i=[],a=[],r=[],n=0;return this.add=function(t,r){i.push(t),a.push(r),n+=r,e()},this.remove=function(t){for(var r=0;r<i.length;r++)if(i[r]==t){i.splice(r,1),n-=a.splice(r,1)[0];break}e()},this.removeAll=function(){i=[],a=[],n=0},this.getValue=function(e){for(var a=!1,n=0,o=0;o<r.length;o++){var s=r[o];if(e>=s[0]&&e<s[1]){var l=(e-s[0])/s[2];n=i[o].getValue(l),a=!0;break}}a||(n=i[i.length-1].getValue(1));for(var d=0;d<o;d++)n=t.math.points.translate(n,i[d].getValue(1));return n},this}}),t.math.curves});//# sourceMappingURL=curves.js.map