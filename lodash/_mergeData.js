//>>built
define("lodash/_mergeData",["./_composeArgs","./_composeArgsRight","./_replaceHolders"],function(e,t,i){function a(a,u){var m=a[1],f=u[1],p=m|f,g=p<(o|n|d),y=f==d&&m==l||f==d&&m==h&&a[7].length<=u[8]||f==(d|h)&&u[7].length<=u[8]&&m==l;if(!g&&!y)return a;f&o&&(a[2]=u[2],p|=m&o?0:s);var v=u[3];if(v){var b=a[3];a[3]=b?e(b,v,u[4]):v,a[4]=b?i(a[3],r):u[4]}return v=u[5],v&&(b=a[5],a[5]=b?t(b,v,u[6]):v,a[6]=b?i(a[5],r):u[6]),v=u[7],v&&(a[7]=v),f&d&&(a[8]=null==a[8]?u[8]:c(a[8],u[8])),null==a[9]&&(a[9]=u[9]),a[0]=u[0],a[1]=p,a}var r="__lodash_placeholder__",o=1,n=2,s=4,l=8,d=128,h=256,c=Math.min;return a});//# sourceMappingURL=_mergeData.js.map