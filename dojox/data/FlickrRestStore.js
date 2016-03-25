//>>built
define("dojox/data/FlickrRestStore",["dojo/_base/lang","dojo/_base/declare","dojo/_base/array","dojo/io/script","dojox/data/FlickrStore","dojo/_base/connect"],function(e,t,a,i,r,o){var n=t("dojox.data.FlickrRestStore",r,{constructor:function(e){e&&(e.label&&(this.label=e.label),e.apikey&&(this._apikey=e.apikey)),this._cache=[],this._prevRequests={},this._handlers={},this._prevRequestRanges=[],this._maxPhotosPerUser={},this._id=n.prototype._id++},_id:0,_requestCount:0,_flickrRestUrl:"https://www.flickr.com/services/rest/",_apikey:null,_storeRef:"_S",_cache:null,_prevRequests:null,_handlers:null,_sortAttributes:{"date-posted":!0,"date-taken":!0,interestingness:!0},_fetchItems:function(t,r,n){var d={};t.query?e.mixin(d,t.query):t.query=d={};var l=[],s=[],m={format:"json",method:"flickr.photos.search",api_key:this._apikey,extras:"owner_name,date_upload,date_taken"},u=!1;if(d.userid&&(u=!0,m.user_id=t.query.userid,l.push("userid"+t.query.userid)),d.groupid&&(u=!0,m.group_id=d.groupid,l.push("groupid"+d.groupid)),d.apikey)u=!0,m.api_key=t.query.apikey,s.push("api"+t.query.apikey);else{if(!m.api_key)throw Error("dojox.data.FlickrRestStore: An API key must be specified.");u=!0,t.query.apikey=m.api_key,s.push("api"+m.api_key)}if(t._curCount=t.count,d.page)m.page=t.query.page,s.push("page"+m.page);else if("start"in t&&null!==t.start){t.count||(t.count=20);var c=t.start%t.count,h=t.start,f=t.count;if(0!==c){if(f/2>h)f=h+f,h=0;else{for(var y=20,p=2,v=y;v>0;v--)if(h%v===0&&h/v>=f){p=v;break}f=h/p}t._realStart=t.start,t._realCount=t.count,t._curStart=h,t._curCount=f}else t._realStart=t._realCount=null,t._curStart=t.start,t._curCount=t.count;m.page=h/f+1,s.push("page"+m.page)}t._curCount&&(m.per_page=t._curCount,s.push("count"+t._curCount)),d.lang&&(m.lang=t.query.lang,l.push("lang"+t.lang)),d.setid&&(m.method="flickr.photosets.getPhotos",m.photoset_id=t.query.setid,l.push("set"+t.query.setid)),d.tags&&(d.tags instanceof Array?m.tags=d.tags.join(","):m.tags=d.tags,l.push("tags"+m.tags),!d.tag_mode||"any"!==d.tag_mode.toLowerCase()&&"all"!==d.tag_mode.toLowerCase()||(m.tag_mode=d.tag_mode)),d.text&&(m.text=d.text,l.push("text:"+d.text)),d.sort&&d.sort.length>0?(d.sort[0].attribute||(d.sort[0].attribute="date-posted"),this._sortAttributes[d.sort[0].attribute]&&(d.sort[0].descending?m.sort=d.sort[0].attribute+"-desc":m.sort=d.sort[0].attribute+"-asc")):m.sort="date-posted-asc",l.push("sort:"+m.sort),l=l.join("."),s=s.length>0?"."+s.join("."):"";var g=l+s;t={query:d,count:t._curCount,start:t._curStart,_realCount:t._realCount,_realStart:t._realStart,onBegin:t.onBegin,onComplete:t.onComplete,onItem:t.onItem};var M={request:t,fetchHandler:r,errorHandler:n};if(this._handlers[g])return void this._handlers[g].push(M);this._handlers[g]=[M];var b=null,w={url:this._flickrRestUrl,preventCache:this.urlPreventCache,content:m,callbackParamName:"jsoncallback"},k=e.hitch(this,function(e,t,a){var i=a.request.onBegin;a.request.onBegin=null;var r,o=a.request;if("_realStart"in o&&null!=o._realStart&&(o.start=o._realStart,o.count=o._realCount,o._realStart=o._realCount=null),i){var n=null;t&&(n=t.photoset?t.photoset:t.photos),n&&"perpage"in n&&"pages"in n?(r=n.perpage*n.pages<=a.request.start+a.request.count?a.request.start+n.photo.length:n.perpage*n.pages,this._maxPhotosPerUser[l]=r,i(r,a.request)):this._maxPhotosPerUser[l]&&i(this._maxPhotosPerUser[l],a.request)}a.fetchHandler(e,a.request),i&&(a.request.onBegin=i)}),j=e.hitch(this,function(e){if("ok"!=e.stat)n(null,t);else{var i=this._handlers[g];if(!i)return;this._handlers[g]=null,this._prevRequests[g]=e;var r=this._processFlickrData(e,t,l);this._prevRequestRanges[l]||(this._prevRequestRanges[l]=[]),this._prevRequestRanges[l].push({start:t.start,end:t.start+(e.photoset?e.photoset.photo.length:e.photos.photo.length)}),a.forEach(i,function(t){k(r,e,t)})}}),_=this._prevRequests[g];if(_)return this._handlers[g]=null,void k(this._cache[l],_,M);if(this._checkPrevRanges(l,t.start,t.count))return this._handlers[g]=null,void k(this._cache[l],null,M);var F=i.get(w);F.addCallback(j),F.addErrback(function(e){o.disconnect(b),n(e,t)})},getAttributes:function(e){return["title","author","imageUrl","imageUrlSmall","imageUrlMedium","imageUrlThumb","imageUrlLarge","imageUrlOriginal","link","dateTaken","datePublished"]},getValues:function(e,t){switch(this._assertIsItem(e),this._assertIsAttribute(t),t){case"title":return[this._unescapeHtml(e.title)];case"author":return[e.ownername];case"imageUrlSmall":return[e.media.s];case"imageUrl":return[e.media.l];case"imageUrlOriginal":return[e.media.o];case"imageUrlLarge":return[e.media.l];case"imageUrlMedium":return[e.media.m];case"imageUrlThumb":return[e.media.t];case"link":return["https://www.flickr.com/photos/"+e.owner+"/"+e.id];case"dateTaken":return[e.datetaken];case"datePublished":return[e.datepublished];default:return}},_processFlickrData:function(e,t,i){if(e.items)return r.prototype._processFlickrData.apply(this,arguments);var o=["http://farm",null,".static.flickr.com/",null,"/",null,"_",null],n=[],d=e.photoset?e.photoset:e.photos;if("ok"==e.stat&&d&&d.photo){n=d.photo;for(var l=0;l<n.length;l++){var s=n[l];s[this._storeRef]=this,o[1]=s.farm,o[3]=s.server,o[5]=s.id,o[7]=s.secret;var m=o.join("");s.media={s:m+"_s.jpg",m:m+"_m.jpg",l:m+".jpg",t:m+"_t.jpg",o:m+"_o.jpg"},!s.owner&&e.photoset&&(s.owner=e.photoset.owner)}}var u=t.start?t.start:0,c=this._cache[i];return c||(this._cache[i]=c=[]),a.forEach(n,function(e,t){c[t+u]=e}),c},_checkPrevRanges:function(e,t,i){var r=t+i,o=this._prevRequestRanges[e];return!!o&&a.some(o,function(e){return t>=e.start&&r<=e.end})}});return n});//# sourceMappingURL=FlickrRestStore.js.map