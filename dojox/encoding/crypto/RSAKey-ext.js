//>>built
define("dojox/encoding/crypto/RSAKey-ext",["dojo/_base/kernel","dojo/_base/lang","./RSAKey","../../math/BigInteger-ext"],function(e,t,a,i){function r(e,t){for(var a=e.toByteArray(),i=0,r=a.length;r>i&&!a[i];++i);if(a.length-i!==t-1||2!==a[i])return null;for(++i;a[i];)if(++i>=r)return null;for(var n="";++i<r;)n+=String.fromCharCode(a[i]);return n}return e.experimental("dojox.encoding.crypto.RSAKey-ext"),t.extend(a,{setPrivate:function(e,t,a){if(!(e&&t&&e.length&&t.length))throw new Error("Invalid RSA private key");this.n=new i(e,16),this.e=parseInt(t,16),this.d=new i(a,16)},setPrivateEx:function(e,t,a,r,n,o,d,s){if(!(e&&t&&e.length&&t.length))throw new Error("Invalid RSA private key");this.n=new i(e,16),this.e=parseInt(t,16),this.d=new i(a,16),this.p=new i(r,16),this.q=new i(n,16),this.dmp1=new i(o,16),this.dmq1=new i(d,16),this.coeff=new i(s,16)},generate:function(e,t){var a=this.rngf(),r=e>>1;this.e=parseInt(t,16);for(var n=new i(t,16);;){for(;this.p=new i(e-r,1,a),this.p.subtract(i.ONE).gcd(n).compareTo(i.ONE)||!this.p.isProbablePrime(10););for(;this.q=new i(r,1,a),this.q.subtract(i.ONE).gcd(n).compareTo(i.ONE)||!this.q.isProbablePrime(10););if(this.p.compareTo(this.q)<=0){var o=this.p;this.p=this.q,this.q=o}var d=this.p.subtract(i.ONE),s=this.q.subtract(i.ONE),l=d.multiply(s);if(!l.gcd(n).compareTo(i.ONE)){this.n=this.p.multiply(this.q),this.d=n.modInverse(l),this.dmp1=this.d.mod(d),this.dmq1=this.d.mod(s),this.coeff=this.q.modInverse(this.p);break}}a.destroy()},decrypt:function(e){var t,a=new i(e,16);if(this.p&&this.q){for(var n=a.mod(this.p).modPow(this.dmp1,this.p),o=a.mod(this.q).modPow(this.dmq1,this.q);n.compareTo(o)<0;)n=n.add(this.p);t=n.subtract(o).multiply(this.coeff).mod(this.p).multiply(this.q).add(o)}else t=a.modPow(this.d,this.n);return t?r(t,this.n.bitLength()+7>>3):null}}),a});//# sourceMappingURL=RSAKey-ext.js.map