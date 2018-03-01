//>>built
define("dojox/gantt/GanttResourceItem",["dojo/_base/declare","dojo/_base/array","dojo/_base/lang","dojo/date/locale","dojo/request","dojo/on","dojo/dom","dojo/dom-class","dojo/dom-construct","dojo/dom-style","dojo/dom-attr","dojo/dom-geometry","dojo/keys","dojo/domReady!"],function(e,t,i,a,o,n,r,s,l,d,u,m,c){return e("dojox.gantt.GanttResourceItem",[],{constructor:function(e){this.ganttChart=e,this.ownerItem=[],this.ownerNameItem=[],this.ownerTaskNodeMapping={},this.ownerTaskNodeMapping_time={},this.resourceInfo={},this.ownerTimeConsume={}},clearAll:function(){this.clearData(),this.clearItems()},clearData:function(){this.ownerItem=[],this.ownerNameItem=[],this.ownerTaskNodeMapping={},this.ownerTaskNodeMapping_time={},this.resourceInfo={},this.ownerTimeConsume={}},clearItems:function(){this.content.firstChild&&l.destroy(this.content.firstChild)},buildResource:function(){var e={};return t.forEach(this.ganttChart.arrProjects,function(i){t.forEach(i.arrTasks,function(t){t.buildResourceInfo(e)},this)},this),e},buildOwnerTimeConsume:function(){var e={};for(var t in this.resourceInfo){for(var i=this.resourceInfo[t],a={},o=0;o<i.length;o++){var n=i[o],r=n.taskItem.startTime.getTime(),s=24*n.taskItem.duration*60*60*1e3/this.ganttChart.hsPerDay;a.min=a.min?Math.min(a.min,r):r,a.max=a.max?Math.max(a.max,r+s):r+s}a.dur=(a.max-a.min)*this.ganttChart.hsPerDay/864e5,a.min=new Date(a.min),a.max=new Date(a.max),e[t]=a}return e},refresh:function(){this.ownerTimeConsume=this.buildOwnerTimeConsume(),this.contentData.firstChild.style.width=Math.max(1200,this.ganttChart.pixelsPerDay*this.ganttChart.totalDays)+"px";for(var e in this.resourceInfo)this.refreshOwnerEntry(e)},reConstruct:function(){this.clearAll(),this.resourceInfo=this.buildResource(),this.ownerTimeConsume=this.buildOwnerTimeConsume(),this.tableControl=l.create("table",{cellPadding:"0",cellSpacing:"0",className:"ganttResourceTableControl"});var e=this.tableControl.insertRow(this.tableControl.rows.length);this.contentHeight=this.content.offsetHeight,this.contentWidth=this.content.offsetWidth,this.content.appendChild(this.tableControl),this.contentData=l.create("div",{className:"ganttResourceContentDataContainer"}),this.contentData.appendChild(this.createPanelOwners()),d.set(this.contentData,"height",this.contentHeight-this.ganttChart.panelTimeHeight+"px");var t=l.create("td",{vAlign:"top"});this.panelNames=l.create("div",{className:"ganttResourcePanelNames"}),this.panelNames.appendChild(this.createPanelNamesOwners()),t.appendChild(this.panelNames),e.appendChild(t),t=l.create("td",{vAlign:"top"});var i=l.create("div",{className:"ganttResourceDivCell"});i.appendChild(this.contentData),t.appendChild(i),e.appendChild(t),d.set(this.panelNames,{height:this.contentHeight-this.ganttChart.panelTimeHeight-this.ganttChart.scrollBarWidth+"px",width:this.ganttChart.maxWidthPanelNames+"px"}),this.contentData.style.width=this.contentWidth-this.ganttChart.maxWidthPanelNames+"px",this.contentData.firstChild.style.width=this.ganttChart.pixelsPerDay*this.ganttChart.panelTime.firstChild.firstChild.rows[3].cells.length+"px";var a=this;this.contentData.onscroll=function(){a.panelNames&&(a.panelNames.scrollTop=this.scrollTop)},this.contentData.scrollLeft=this.ganttChart.contentData.scrollLeft;for(var o in this.resourceInfo)this.createOwnerEntry(o);this.postAdjustment()},create:function(){var e=l.create("div",{innerHTML:"Resource Chart:",className:"ganttResourceHeader"},this.ganttChart.content,"after");d.set(e,"width",this.ganttChart.contentWidth+"px");var t=l.create("div",{className:"ganttResourceContent"},e,"after");d.set(t,{width:this.ganttChart.contentWidth+"px",height:(this.ganttChart.resourceChartHeight||.8*this.ganttChart.contentHeight)+"px"}),this.content=t||this.content,this.reConstruct()},postAdjustment:function(){this.contentData.firstChild.style.height=23*this.ownerItem.length+"px",this.panelNames.firstChild.style.height=23*this.ownerItem.length+"px"},refreshOwnerEntry:function(e){this.refreshOwnerItem(e),t.forEach(this.resourceInfo[e],function(t,i){var a=this.ownerTaskNodeMapping[e].tasks[i][0];this.refreshDetailedTaskEntry(e,a,t)},this)},createOwnerEntry:function(e){var i=this.contentData.firstChild,a=this.ownerItem[this.ownerItem.length-1];this.ownerTaskNodeMapping[e]={},this.ownerTaskNodeMapping[e][e]=[];var o=(a?parseInt(a.style.top):-17)+this.ganttChart.heightTaskItem+11,n=this.createOwnerItem(e,o);if(i.appendChild(n),this.ownerItem.push(n),this.ownerTaskNodeMapping[e][e].push(n),this.panelNames){var r=this.createOwnerNameItem(e,o);this.panelNames.firstChild.appendChild(r),this.ownerNameItem.push(r),this.ownerTaskNodeMapping[e][e].push(r)}var s=this.ownerNameItem[this.ownerNameItem.length-1];if(this.panelNames){this.checkWidthTaskNameItem(s);var l=this.createTreeImg(s);this.panelNames.firstChild.appendChild(l),this.ownerTaskNodeMapping[e][e].push(l)}return this.ownerTaskNodeMapping[e].taskCount=this.resourceInfo[e].length,this.ownerTaskNodeMapping[e].isOpen=!1,this.ownerTaskNodeMapping[e].tasks=[],t.forEach(this.resourceInfo[e],function(t){this.ownerTaskNodeMapping[e].tasks.push(this.createDetailedTaskEntry(e,s,t))},this),this},createOwnerNameItem:function(e,t){var i=l.create("div",{id:e,title:e,innerHTML:e,className:"ganttOwnerNameItem"});return d.set(i,"top",t+"px"),i},refreshOwnerItem:function(e){var i=this.ownerTaskNodeMapping[e][e][0],a=this.ownerTimeConsume[e].min,o=this.ownerTimeConsume[e].dur,n=this.ganttChart.getPosOnDate(a);i.style.left=n+"px",i.style.width=o*this.ganttChart.pixelsPerWorkHour+"px",t.forEach(this.resourceInfo[e],function(e,t){var a=this.ganttChart.getPosOnDate(e.taskItem.startTime);d.set(i.childNodes[t],{left:a-n+"px",width:e.taskItem.duration*this.ganttChart.pixelsPerWorkHour+"px"})},this)},createOwnerItem:function(e,i){var a=this.ownerTimeConsume[e].min,o=this.ownerTimeConsume[e].dur,n=this.ganttChart.getPosOnDate(a),r=l.create("div",{id:e,owner:!0,className:"ganttOwnerBar"});return d.set(r,{left:n+"px",top:i+"px",width:o*this.ganttChart.pixelsPerWorkHour+"px",height:this.ganttChart.heightTaskItem+"px"}),t.forEach(this.resourceInfo[e],function(t){var i=l.create("div",{id:e,className:"ganttOwnerTaskBar"},r),a=this.ganttChart.getPosOnDate(t.taskItem.startTime);d.set(i,{left:a-n+"px",width:t.taskItem.duration*this.ganttChart.pixelsPerWorkHour+"px",height:this.ganttChart.heightTaskItem+"px"})},this),r},refreshDetailedTaskEntry:function(e,t,i){this.refreshTaskItem(t,i)},createDetailedTaskEntry:function(e,i,a){var o=[],n=this.contentData.firstChild,r=parseInt(i.style.top),s=this.createTaskItem(a,r);if(s.style.display="none",n.appendChild(s),this.ownerItem.push(s),o.push(s),this.panelNames){var l=this.createTaskNameItem(a.taskItem.name,r);this.panelNames.firstChild.appendChild(l),l.style.display="none",this.ownerNameItem.push(l),o.push(l)}if(this.panelNames){this.ownerNameItem[this.ownerNameItem.length-1].style.left=d.get(i,"left")+15+"px";var u=this.createConnectingLinesPN(i,this.ownerNameItem[this.ownerNameItem.length-1]);t.forEach(u,function(e){e.style.display="none"},this),o.push({v:u[0],h:u[1]}),this.checkWidthTaskNameItem(this.ownerNameItem[this.ownerNameItem.length-1])}return o},createTaskNameItem:function(e,t){var i=l.create("div",{id:e,className:"ganttTaskNameItem",title:e,innerHTML:e});return d.set(i,"top",t+"px"),i},refreshTaskItem:function(e,t){var i=this.ganttChart.getPosOnDate(t.taskItem.startTime);d.set(e,{left:i+"px",width:t.taskItem.duration*this.ganttChart.pixelsPerWorkHour+"px"})},createTaskItem:function(e,t){var i=this.ganttChart.getPosOnDate(e.taskItem.startTime),a=l.create("div",{id:e.taskItem.name,className:"ganttTaskBar"});return d.set(a,{left:i+"px",top:t+"px",width:e.taskItem.duration*this.ganttChart.pixelsPerWorkHour+"px",height:this.ganttChart.heightTaskItem+"px"}),a},createConnectingLinesPN:function(e,t){var i=[],a=l.create("div",{innerHTML:"&nbsp;",className:"ganttResourceLineVerticalLeft"},this.panelNames.firstChild);a.cNode=t,a.pNode=e;var o=l.create("div",{noShade:!0,color:"#000",className:"ganttResourceLineHorizontalLeft"},this.panelNames.firstChild);return o.cNode=t,o.pNode=e,this.panelNames.firstChild.appendChild(o),i.push(a),i.push(o),i},createTreeImg:function(e){var a=l.create("div",{id:e.id,className:"ganttImageTreeExpand"});u.set(a,"tabIndex",0);var o=this.ownerTaskNodeMapping[e.id];return t.forEach(["click","keydown"],function(r){this.ganttChart._events.push(n(a,r,i.hitch(this,function(i){var n,l,u=!1;if("keydown"!=r||i.keyCode==c.ENTER)if(o.isOpen){s.remove(a,"ganttImageTreeCollapse"),s.add(a,"ganttImageTreeExpand"),o.isOpen=!1;for(n in this.ownerTaskNodeMapping)l=this.ownerTaskNodeMapping[n],u?(t.forEach(l[n],function(e){d.set(e,"top",d.get(e,"top")-23*o.taskCount+"px")}),t.forEach(l.tasks,function(e){t.forEach(e,function(e){var i=e.v||e.h?[e.v,e.h]:[e];t.forEach(i,function(e){d.set(e,"top",d.get(e,"top")-23*o.taskCount+"px")})})})):n==e.id&&(u=!0,t.forEach(l.tasks,function(e){t.forEach(e,function(e){this.styleOwnerItem(e,l[n][0],"none",0)},this)},this))}else{s.remove(a,"ganttImageTreeExpand"),s.add(a,"ganttImageTreeCollapse"),o.isOpen=!0;for(n in this.ownerTaskNodeMapping)l=this.ownerTaskNodeMapping[n],u?(t.forEach(l[n],function(e){d.set(e,"top",d.get(e,"top")+23*o.taskCount+"px")}),t.forEach(l.tasks,function(e){t.forEach(e,function(e){var i=e.v||e.h?[e.v,e.h]:[e];t.forEach(i,function(e){d.set(e,"top",d.get(e,"top")+23*o.taskCount+"px")})})})):n==e.id&&(u=!0,t.forEach(l.tasks,function(e,i){t.forEach(e,function(e){this.styleOwnerItem(e,l[n][0],"inline",23*(i+1))},this)},this))}})))},this),s.add(a,"ganttResourceTreeImage"),d.set(a,{left:d.get(e,"left")-12+"px",top:d.get(e,"top")+3+"px"}),a},styleOwnerItem:function(e,t,i,a){e.v||e.h?(d.set(e.v,{height:Math.max(1,e.v.cNode.offsetTop-e.v.pNode.offsetTop)+"px",top:e.v.pNode.offsetTop+5+"px",left:e.v.pNode.offsetLeft-9+"px",display:i}),d.set(e.h,{width:Math.max(1,e.h.cNode.offsetLeft-e.h.pNode.offsetLeft+4)+"px",top:e.h.cNode.offsetTop+5+"px",left:e.h.pNode.offsetLeft-9+"px",display:i})):d.set(e,{display:i,top:parseInt(t.style.top)+a+"px"})},checkWidthTaskNameItem:function(e){if(e&&e.offsetWidth+e.offsetLeft>this.ganttChart.maxWidthPanelNames){var t=e.offsetWidth+e.offsetLeft-this.ganttChart.maxWidthPanelNames,i=Math.round(t/(e.offsetWidth/e.firstChild.length)),a=e.id.substring(0,e.firstChild.length-i-3);e.innerHTML=a+"..."}},createPanelOwners:function(){var e=l.create("div",{className:"ganttOwnerPanel"});return d.set(e,{height:this.contentHeight-this.ganttChart.panelTimeHeight-this.ganttChart.scrollBarWidth+"px"}),e},createPanelNamesOwners:function(){var e=l.create("div",{innerHTML:"&nbsp;",className:"ganttResourcePanelNamesOwners"});return d.set(e,{height:this.contentHeight-this.ganttChart.panelTimeHeight-this.ganttChart.scrollBarWidth+"px",width:this.ganttChart.maxWidthPanelNames+"px"}),e}})});//# sourceMappingURL=GanttResourceItem.js.map