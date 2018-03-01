//>>built
define("dojox/math/BigInteger-ext",["dojo","dojox","dojox/math/BigInteger"],function(e,t){function i(){var e=ue();return this._copyTo(e),e}function a(){if(this.s<0){if(1==this.t)return this[0]-this._DV;if(0==this.t)return-1}else{if(1==this.t)return this[0];if(0==this.t)return 0}return(this[1]&(1<<32-this._DB)-1)<<this._DB|this[0]}function r(){return 0==this.t?this.s:this[0]<<24>>24}function o(){return 0==this.t?this.s:this[0]<<16>>16}function n(e){return Math.floor(Math.LN2*this._DB/Math.log(e))}function s(){return this.s<0?-1:this.t<=0||1==this.t&&this[0]<=0?0:1}function l(e){if(null==e&&(e=10),0==this.signum()||e<2||e>36)return"0";var t=this._chunkSize(e),i=Math.pow(e,t),a=ce(i),r=ue(),o=ue(),n="";for(this._divRemTo(a,r,o);r.signum()>0;)n=(i+o.intValue()).toString(e).substr(1)+n,r._divRemTo(a,r,o);return o.intValue().toString(e)+n}function d(e,t){this._fromInt(0),null==t&&(t=10);for(var i=this._chunkSize(t),a=Math.pow(t,i),r=!1,o=0,n=0,s=0;s<e.length;++s){var l=intAt(e,s);l<0?"-"==e.charAt(s)&&0==this.signum()&&(r=!0):(n=t*n+l,++o>=i&&(this._dMultiply(a),this._dAddOffset(n,0),o=0,n=0))}o>0&&(this._dMultiply(Math.pow(t,o)),this._dAddOffset(n,0)),r&&he.ZERO._subTo(this,this)}function h(e,t,i){if("number"==typeof t)if(e<2)this._fromInt(1);else for(this._fromNumber(e,i),this.testBit(e-1)||this._bitwiseTo(he.ONE.shiftLeft(e-1),v,this),this._isEven()&&this._dAddOffset(1,0);!this.isProbablePrime(t);)this._dAddOffset(2,0),this.bitLength()>e&&this._subTo(he.ONE.shiftLeft(e-1),this);else{var a=[],r=7&e;a.length=1+(e>>3),t.nextBytes(a),r>0?a[0]&=(1<<r)-1:a[0]=0,this._fromString(a,256)}}function u(){var e=this.t,t=[];t[0]=this.s;var i,a=this._DB-e*this._DB%8,r=0;if(e-- >0)for(a<this._DB&&(i=this[e]>>a)!=(this.s&this._DM)>>a&&(t[r++]=i|this.s<<this._DB-a);e>=0;)a<8?(i=(this[e]&(1<<a)-1)<<8-a,i|=this[--e]>>(a+=this._DB-8)):(i=this[e]>>(a-=8)&255,a<=0&&(a+=this._DB,--e)),0!=(128&i)&&(i|=-256),0==r&&(128&this.s)!=(128&i)&&++r,(r>0||i!=this.s)&&(t[r++]=i);return t}function c(e){return 0==this.compareTo(e)}function m(e){return this.compareTo(e)<0?this:e}function f(e){return this.compareTo(e)>0?this:e}function p(e,t,i){var a,r,o=Math.min(e.t,this.t);for(a=0;a<o;++a)i[a]=t(this[a],e[a]);if(e.t<this.t){for(r=e.s&this._DM,a=o;a<this.t;++a)i[a]=t(this[a],r);i.t=this.t}else{for(r=this.s&this._DM,a=o;a<e.t;++a)i[a]=t(r,e[a]);i.t=e.t}i.s=t(this.s,e.s),i._clamp()}function g(e,t){return e&t}function y(e){var t=ue();return this._bitwiseTo(e,g,t),t}function v(e,t){return e|t}function b(e){var t=ue();return this._bitwiseTo(e,v,t),t}function k(e,t){return e^t}function M(e){var t=ue();return this._bitwiseTo(e,k,t),t}function _(e,t){return e&~t}function w(e){var t=ue();return this._bitwiseTo(e,_,t),t}function x(){for(var e=ue(),t=0;t<this.t;++t)e[t]=this._DM&~this[t];return e.t=this.t,e.s=~this.s,e}function T(e){var t=ue();return e<0?this._rShiftTo(-e,t):this._lShiftTo(e,t),t}function j(e){var t=ue();return e<0?this._lShiftTo(-e,t):this._rShiftTo(e,t),t}function C(e){if(0==e)return-1;var t=0;return 0==(65535&e)&&(e>>=16,t+=16),0==(255&e)&&(e>>=8,t+=8),0==(15&e)&&(e>>=4,t+=4),0==(3&e)&&(e>>=2,t+=2),0==(1&e)&&++t,t}function I(){for(var e=0;e<this.t;++e)if(0!=this[e])return e*this._DB+C(this[e]);return this.s<0?this.t*this._DB:-1}function F(e){for(var t=0;0!=e;)e&=e-1,++t;return t}function S(){for(var e=0,t=this.s&this._DM,i=0;i<this.t;++i)e+=F(this[i]^t);return e}function E(e){var t=Math.floor(e/this._DB);return t>=this.t?0!=this.s:0!=(this[t]&1<<e%this._DB)}function z(e,t){var i=he.ONE.shiftLeft(e);return this._bitwiseTo(i,t,i),i}function A(e){return this._changeBit(e,v)}function P(e){return this._changeBit(e,_)}function D(e){return this._changeBit(e,k)}function N(e,t){for(var i=0,a=0,r=Math.min(e.t,this.t);i<r;)a+=this[i]+e[i],t[i++]=a&this._DM,a>>=this._DB;if(e.t<this.t){for(a+=e.s;i<this.t;)a+=this[i],t[i++]=a&this._DM,a>>=this._DB;a+=this.s}else{for(a+=this.s;i<e.t;)a+=e[i],t[i++]=a&this._DM,a>>=this._DB;a+=e.s}t.s=a<0?-1:0,a>0?t[i++]=a:a<-1&&(t[i++]=this._DV+a),t.t=i,t._clamp()}function G(e){var t=ue();return this._addTo(e,t),t}function B(e){var t=ue();return this._subTo(e,t),t}function L(e){var t=ue();return this._multiplyTo(e,t),t}function R(e){var t=ue();return this._divRemTo(e,t,null),t}function H(e){var t=ue();return this._divRemTo(e,null,t),t}function O(e){var t=ue(),i=ue();return this._divRemTo(e,t,i),[t,i]}function q(e){this[this.t]=this.am(0,e-1,this,0,0,this.t),++this.t,this._clamp()}function Q(e,t){for(;this.t<=t;)this[this.t++]=0;for(this[t]+=e;this[t]>=this._DV;)this[t]-=this._DV,++t>=this.t&&(this[this.t++]=0),++this[t]}function W(){}function U(e){return e}function V(e,t,i){e._multiplyTo(t,i)}function K(e,t){e._squareTo(t)}function $(e){return this._exp(e,new W)}function Y(e,t,i){var a=Math.min(this.t+e.t,t);for(i.s=0,i.t=a;a>0;)i[--a]=0;var r;for(r=i.t-this.t;a<r;++a)i[a+this.t]=this.am(0,e[a],i,a,0,this.t);for(r=Math.min(e.t,t);a<r;++a)this.am(0,e[a],i,a,0,t-a);i._clamp()}function X(e,t,i){--t;var a=i.t=this.t+e.t-t;for(i.s=0;--a>=0;)i[a]=0;for(a=Math.max(t-this.t,0);a<e.t;++a)i[this.t+a-t]=this.am(t-a,e[a],i,0,0,this.t+a-t);i._clamp(),i._drShiftTo(1,i)}function J(e){this.r2=ue(),this.q3=ue(),he.ONE._dlShiftTo(2*e.t,this.r2),this.mu=this.r2.divide(e),this.m=e}function Z(e){if(e.s<0||e.t>2*this.m.t)return e.mod(this.m);if(e.compareTo(this.m)<0)return e;var t=ue();return e._copyTo(t),this.reduce(t),t}function ee(e){return e}function te(e){for(e._drShiftTo(this.m.t-1,this.r2),e.t>this.m.t+1&&(e.t=this.m.t+1,e._clamp()),this.mu._multiplyUpperTo(this.r2,this.m.t+1,this.q3),this.m._multiplyLowerTo(this.q3,this.m.t+1,this.r2);e.compareTo(this.r2)<0;)e._dAddOffset(1,this.m.t+1);for(e._subTo(this.r2,e);e.compareTo(this.m)>=0;)e._subTo(this.m,e)}function ie(e,t){e._squareTo(t),this.reduce(t)}function ae(e,t,i){e._multiplyTo(t,i),this.reduce(i)}function re(e,t){var i,a,r=e.bitLength(),o=ce(1);if(r<=0)return o;i=r<18?1:r<48?3:r<144?4:r<768?5:6,a=r<8?new Classic(t):t._isEven()?new J(t):new fe(t);var n=[],s=3,l=i-1,d=(1<<i)-1;if(n[1]=a.convert(this),i>1){var h=ue();for(a.sqrTo(n[1],h);s<=d;)n[s]=ue(),a.mulTo(h,n[s-2],n[s]),s+=2}var u,c,m=e.t-1,f=!0,p=ue();for(r=me(e[m])-1;m>=0;){for(r>=l?u=e[m]>>r-l&d:(u=(e[m]&(1<<r+1)-1)<<l-r,m>0&&(u|=e[m-1]>>this._DB+r-l)),s=i;0==(1&u);)u>>=1,--s;if((r-=s)<0&&(r+=this._DB,--m),f)n[u]._copyTo(o),f=!1;else{for(;s>1;)a.sqrTo(o,p),a.sqrTo(p,o),s-=2;s>0?a.sqrTo(o,p):(c=o,o=p,p=c),a.mulTo(p,n[u],o)}for(;m>=0&&0==(e[m]&1<<r);)a.sqrTo(o,p),c=o,o=p,p=c,--r<0&&(r=this._DB-1,--m)}return a.revert(o)}function oe(e){var t=this.s<0?this.negate():this.clone(),i=e.s<0?e.negate():e.clone();if(t.compareTo(i)<0){var a=t;t=i,i=a}var r=t.getLowestSetBit(),o=i.getLowestSetBit();if(o<0)return t;for(r<o&&(o=r),o>0&&(t._rShiftTo(o,t),i._rShiftTo(o,i));t.signum()>0;)(r=t.getLowestSetBit())>0&&t._rShiftTo(r,t),(r=i.getLowestSetBit())>0&&i._rShiftTo(r,i),t.compareTo(i)>=0?(t._subTo(i,t),t._rShiftTo(1,t)):(i._subTo(t,i),i._rShiftTo(1,i));return o>0&&i._lShiftTo(o,i),i}function ne(e){if(e<=0)return 0;var t=this._DV%e,i=this.s<0?e-1:0;if(this.t>0)if(0==t)i=this[0]%e;else for(var a=this.t-1;a>=0;--a)i=(t*i+this[a])%e;return i}function se(e){var t=e._isEven();if(this._isEven()&&t||0==e.signum())return he.ZERO;for(var i=e.clone(),a=this.clone(),r=ce(1),o=ce(0),n=ce(0),s=ce(1);0!=i.signum();){for(;i._isEven();)i._rShiftTo(1,i),t?(r._isEven()&&o._isEven()||(r._addTo(this,r),o._subTo(e,o)),r._rShiftTo(1,r)):o._isEven()||o._subTo(e,o),o._rShiftTo(1,o);for(;a._isEven();)a._rShiftTo(1,a),t?(n._isEven()&&s._isEven()||(n._addTo(this,n),s._subTo(e,s)),n._rShiftTo(1,n)):s._isEven()||s._subTo(e,s),s._rShiftTo(1,s);i.compareTo(a)>=0?(i._subTo(a,i),t&&r._subTo(n,r),o._subTo(s,o)):(a._subTo(i,a),t&&n._subTo(r,n),s._subTo(o,s))}return 0!=a.compareTo(he.ONE)?he.ZERO:s.compareTo(e)>=0?s.subtract(e):s.signum()<0?(s._addTo(e,s),s.signum()<0?s.add(e):s):s}function le(e){var t,i=this.abs();if(1==i.t&&i[0]<=pe[pe.length-1]){for(t=0;t<pe.length;++t)if(i[0]==pe[t])return!0;return!1}if(i._isEven())return!1;for(t=1;t<pe.length;){for(var a=pe[t],r=t+1;r<pe.length&&a<ge;)a*=pe[r++];for(a=i._modInt(a);t<r;)if(a%pe[t++]==0)return!1}return i._millerRabin(e)}function de(e){var t=this.subtract(he.ONE),i=t.getLowestSetBit();if(i<=0)return!1;var a=t.shiftRight(i);(e=e+1>>1)>pe.length&&(e=pe.length);for(var r=ue(),o=0;o<e;++o){r._fromInt(pe[o]);var n=r.modPow(a,this);if(0!=n.compareTo(he.ONE)&&0!=n.compareTo(t)){for(var s=1;s++<i&&0!=n.compareTo(t);)if(n=n.modPowInt(2,this),0==n.compareTo(he.ONE))return!1;if(0!=n.compareTo(t))return!1}}return!0}e.experimental("dojox.math.BigInteger-ext");var he=t.math.BigInteger,ue=he._nbi,ce=he._nbv,me=he._nbits,fe=he._Montgomery;W.prototype.convert=U,W.prototype.revert=U,W.prototype.mulTo=V,W.prototype.sqrTo=K,J.prototype.convert=Z,J.prototype.revert=ee,J.prototype.reduce=te,J.prototype.mulTo=ae,J.prototype.sqrTo=ie;var pe=[2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101,103,107,109,113,127,131,137,139,149,151,157,163,167,173,179,181,191,193,197,199,211,223,227,229,233,239,241,251,257,263,269,271,277,281,283,293,307,311,313,317,331,337,347,349,353,359,367,373,379,383,389,397,401,409,419,421,431,433,439,443,449,457,461,463,467,479,487,491,499,503,509],ge=(1<<26)/pe[pe.length-1];return e.extend(he,{_chunkSize:n,_toRadix:l,_fromRadix:d,_fromNumber:h,_bitwiseTo:p,_changeBit:z,_addTo:N,_dMultiply:q,_dAddOffset:Q,_multiplyLowerTo:Y,_multiplyUpperTo:X,_modInt:ne,_millerRabin:de,clone:i,intValue:a,byteValue:r,shortValue:o,signum:s,toByteArray:u,equals:c,min:m,max:f,and:y,or:b,xor:M,andNot:w,not:x,shiftLeft:T,shiftRight:j,getLowestSetBit:I,bitCount:S,testBit:E,setBit:A,clearBit:P,flipBit:D,add:G,subtract:B,multiply:L,divide:R,remainder:H,divideAndRemainder:O,modPow:re,modInverse:se,pow:$,gcd:oe,isProbablePrime:le}),t.math.BigInteger});//# sourceMappingURL=BigInteger-ext.js.map