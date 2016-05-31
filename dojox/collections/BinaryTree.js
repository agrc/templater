//>>built
define("dojox/collections/BinaryTree",["dojo/_base/kernel","dojo/_base/array","./_base"],function(e,t,i){return i.BinaryTree=function(e){function t(e,i,r){this.value=e||null,this.right=i||null,this.left=r||null,this.clone=function(){var e=new t;return this.value.value?e.value=this.value.clone():e.value=this.value,null!=this.left&&(e.left=this.left.clone()),null!=this.right&&(e.right=this.right.clone()),e},this.compare=function(e){return this.value>e.value?1:this.value<e.value?-1:0},this.compareData=function(e){return this.value>e?1:this.value<e?-1:0}}function r(e,t){e&&(r(e.left,t),t.push(e.value),r(e.right,t))}function a(e,t){var i="";return e&&(i=e.value.toString()+t,i+=a(e.left,t),i+=a(e.right,t)),i}function n(e,t){var i="";return e&&(i=n(e.left,t),i+=e.value.toString()+t,i+=n(e.right,t)),i}function o(e,t){var i="";return e&&(i=o(e.left,t),i+=o(e.right,t),i+=e.value.toString()+t),i}function d(e,t){if(!e)return null;var i=e.compareData(t);return 0==i?e:i>0?d(e.left,t):d(e.right,t)}this.add=function(e){for(var i,r=new t(e),a=s,n=null;a;){if(i=a.compare(r),0==i)return;n=a,a=i>0?a.left:a.right}this.count++,n?(i=n.compare(r),i>0?n.left=r:n.right=r):s=r},this.clear=function(){s=null,this.count=0},this.clone=function(){for(var e=new i.BinaryTree,t=this.getIterator();!t.atEnd();)e.add(t.get());return e},this.contains=function(e){return null!=this.search(e)},this.deleteData=function(e){for(var t=s,i=null,r=t.compareData(e);0!=r&&null!=t;)r>0?(i=t,t=t.left):0>r&&(i=t,t=t.right),r=t.compareData(e);if(t)if(this.count--,t.right)if(t.right.left){for(var a=t.right.left,n=t.right;null!=a.left;)n=a,a=a.left;n.left=a.right,a.left=t.left,a.right=t.right,i?(r=i.compare(t),r>0?i.left=a:0>r&&(i.right=a)):s=a}else i?(r=i.compare(t),r>0?i.left=t.right:0>r&&(i.right=t.right)):s=t.right;else i?(r=i.compare(t),r>0?i.left=t.left:0>r&&(i.right=t.left)):s=t.left},this.getIterator=function(){var e=[];return r(s,e),new i.Iterator(e)},this.search=function(e){return d(s,e)},this.toString=function(e,t){e||(e=i.BinaryTree.TraversalMethods.Inorder),t||(t=",");var r="";switch(e){case i.BinaryTree.TraversalMethods.Preorder:r=a(s,t);break;case i.BinaryTree.TraversalMethods.Inorder:r=n(s,t);break;case i.BinaryTree.TraversalMethods.Postorder:r=o(s,t)}return 0==r.length?"":r.substring(0,r.length-t.length)},this.count=0;var s=this.root=null;e&&this.add(e)},i.BinaryTree.TraversalMethods={Preorder:1,Inorder:2,Postorder:3},i.BinaryTree});//# sourceMappingURL=BinaryTree.js.map