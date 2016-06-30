//>>built
define("dojox/data/FlickrRestStore",["dojo/_base/lang","dojo/_base/declare","dojo/_base/array","dojo/io/script","dojox/data/FlickrStore","dojo/_base/connect"],function(e,t,a,i,r,o){var d=t("dojox.data.FlickrRestStore",r,{constructor:function(e){e&&(e.label&&(this.label=e.label),e.apikey&&(this._apikey=e.apikey)),this._cache=[],this._prevRequests={},this._handlers={},this._prevRequestRanges=[],this._maxPhotosPerUser={},this._id=d.prototype._id++},_id:0,_requestCount:0,_flickrRestUrl:"https://www.flickr.com/services/rest/",_apikey:null,_storeRef:"_S",_cache:null,_prevRequests:null,_handlers:null,_sortAttributes:{"date-posted":!0,"date-taken":!0,interestingness:!0},_fetchItems:function(t,r,d){var n={};t.query?e.mixin(n,t.query):t.query=n={};var l=[],s=[],m={format:"json",method:"flickr.photos.search",api_key:this._apikey,extras:"owner_name,date_upload,date_taken"},u=!1;if(n.userid&&(u=!0,m.user_id=t.query.userid,l.push("userid"+t.query.userid)),n.groupid&&(u=!0,m.group_id=n.groupid,l.push("groupid"+n.groupid)),n.apikey)u=!0,m.api_key=t.query.apikey,s.push("api"+t.query.apikey);else{if(!m.api_key)throw Error("dojox.data.FlickrRestStore: An API key must be specified.");u=!0,t.query.apikey=m.api_key,s.push("api"+m.api_key)}if(t._curCount=t.count,n.page)m.page=t.query.page,s.push("page"+m.page);else if("start"in t&&null!==t.start){t.count||(t.count=20);var h=t.start%t.count,c=t.start,f=t.count;if(0!==h){if(f/2>c)f=c+f,c=0;else{for(var y=20,v=2,p=y;p>0;p--)if(c%p===0&&c/p>=f){v=p;break}f=c/v}t._realStart=t.start,t._realCount=t.count,t._curStart=c,t._curCount=f}else t._realStart=t._realCount=null,t._curStart=t.start,t._curCount=t.count;m.page=c/f+1,s.push("page"+m.page)}t._curCount&&(m.per_page=t._curCount,s.push("count"+t._curCount)),n.lang&&(m.lang=t.query.lang,l.push("lang"+t.lang)),n.setid&&(m.method="flickr.photosets.getPhotos",m.photoset_id=t.query.setid,l.push("set"+t.query.setid)),n.tags&&(n.tags instanceof Array?m.tags=n.tags.join(","):m.tags=n.tags,l.push("tags"+m.tags),!n.tag_mode||"any"!==n.tag_mode.toLowerCase()&&"all"!==n.tag_mode.toLowerCase()||(m.tag_mode=n.tag_mode)),n.text&&(m.text=n.text,l.push("text:"+n.text)),n.sort&&n.sort.length>0?(n.sort[0].attribute||(n.sort[0].attribute="date-posted"),this._sortAttributes[n.sort[0].attribute]&&(n.sort[0].descending?m.sort=n.sort[0].attribute+"-desc":m.sort=n.sort[0].attribute+"-asc")):m.sort="date-posted-asc",l.push("sort:"+m.sort),l=l.join("."),s=s.length>0?"."+s.join("."):"";var M=l+s;t={query:n,count:t._curCount,start:t._curStart,_realCount:t._realCount,_realStart:t._realStart,onBegin:t.onBegin,onComplete:t.onComplete,onItem:t.onItem};var g={request:t,fetchHandler:r,errorHandler:d};if(this._handlers[M])return void this._handlers[M].push(g);this._handlers[M]=[g];var b=null,w={url:this._flickrRestUrl,preventCache:this.urlPreventCache,content:m,callbackParamName:"jsoncallback"},k=e.hitch(this,function(e,t,a){var i=a.request.onBegin;a.request.onBegin=null;var r,o=a.request;if("_realStart"in o&&null!=o._realStart&&(o.start=o._realStart,o.count=o._realCount,o._realStart=o._realCount=null),i){var d=null;t&&(d=t.photoset?t.photoset:t.photos),d&&"perpage"in d&&"pages"in d?(r=d.perpage*d.pages<=a.request.start+a.request.count?a.request.start+d.photo.length:d.perpage*d.pages,this._maxPhotosPerUser[l]=r,i(r,a.request)):this._maxPhotosPerUser[l]&&i(this._maxPhotosPerUser[l],a.request)}a.fetchHandler(e,a.request),i&&(a.request.onBegin=i)}),j=e.hitch(this,function(e){if("ok"!=e.stat)d(null,t);else{var i=this._handlers[M];if(!i)return;this._handlers[M]=null,this._prevRequests[M]=e;var r=this._processFlickrData(e,t,l);this._prevRequestRanges[l]||(this._prevRequestRanges[l]=[]),this._prevRequestRanges[l].push({start:t.start,end:t.start+(e.photoset?e.photoset.photo.length:e.photos.photo.length)}),a.forEach(i,function(t){k(r,e,t)})}}),F=this._prevRequests[M];if(F)return this._handlers[M]=null,void k(this._cache[l],F,g);if(this._checkPrevRanges(l,t.start,t.count))return this._handlers[M]=null,void k(this._cache[l],null,g);var I=i.get(w);I.addCallback(j),I.addErrback(function(e){o.disconnect(b),d(e,t)})},getAttributes:function(e){return["title","author","imageUrl","imageUrlSmall","imageUrlMedium","imageUrlThumb","imageUrlLarge","imageUrlOriginal","link","dateTaken","datePublished"]},getValues:function(e,t){switch(this._assertIsItem(e),this._assertIsAttribute(t),t){case"title":return[this._unescapeHtml(e.title)];case"author":return[e.ownername];case"imageUrlSmall":return[e.media.s];case"imageUrl":return[e.media.l];case"imageUrlOriginal":return[e.media.o];case"imageUrlLarge":return[e.media.l];case"imageUrlMedium":return[e.media.m];case"imageUrlThumb":return[e.media.t];case"link":return["https://www.flickr.com/photos/"+e.owner+"/"+e.id];case"dateTaken":return[e.datetaken];case"datePublished":return[e.datepublished];default:return}},_processFlickrData:function(e,t,i){if(e.items)return r.prototype._processFlickrData.apply(this,arguments);var o=["http://farm",null,".static.flickr.com/",null,"/",null,"_",null],d=[],n=e.photoset?e.photoset:e.photos;if("ok"==e.stat&&n&&n.photo){d=n.photo;for(var l=0;l<d.length;l++){var s=d[l];s[this._storeRef]=this,o[1]=s.farm,o[3]=s.server,o[5]=s.id,o[7]=s.secret;var m=o.join("");s.media={s:m+"_s.jpg",m:m+"_m.jpg",l:m+".jpg",t:m+"_t.jpg",o:m+"_o.jpg"},!s.owner&&e.photoset&&(s.owner=e.photoset.owner)}}var u=t.start?t.start:0,h=this._cache[i];return h||(this._cache[i]=h=[]),a.forEach(d,function(e,t){h[t+u]=e}),h},_checkPrevRanges:function(e,t,i){var r=t+i,o=this._prevRequestRanges[e];return!!o&&a.some(o,function(e){return t>=e.start&&r<=e.end})}});return d});//# sourceMappingURL=FlickrRestStore.js.map