//>>built
define("dojox/gantt/GanttChart",["./GanttProjectItem","./GanttResourceItem","./GanttProjectControl","./GanttTaskControl","./GanttTaskItem","./TabMenu","dijit/Tooltip","dojo/_base/declare","dojo/_base/array","dojo/_base/lang","dojo/date/locale","dojo/request","dojo/request/util","dojo/on","dojo/dom","dojo/dom-class","dojo/dom-construct","dojo/dom-style","dojo/dom-attr","dojo/dom-geometry","dojo/keys","dojo/has","dojo/_base/window","dojo/json","dojo/domReady!"],function(e,t,a,i,r,o,n,s,l,d,h,u,c,m,f,p,g,y,v,b,M,k,w,x){return s("dojox.gantt.GanttChart",[],{constructor:function(e,t){this.resourceChartHeight=void 0!==e.resourceChartHeight?e.resourceChartHeight:!1,this.withResource=void 0!==e.withResource?e.withResource:!0,this.correctError=void 0!==e.autoCorrectError?e.autoCorrectError:!1,this.isShowConMenu=this.isContentEditable=!e.readOnly,this.withTaskId=void 0!==e.withTaskId?e.withTaskId:!e.readOnly,this.animation=void 0!==e.animation?e.animation:!0,this.saveProgramPath=e.saveProgramPath||"saveGanttData.php",this.dataFilePath=e.dataFilePath||"gantt_default.json",this.contentHeight=e.height||400,this.contentWidth=e.width||600,this.content=f.byId(t),this.scrollBarWidth=18,this.panelTimeHeight=102,this.maxWidthPanelNames=150,this.maxWidthTaskNames=150,this.minWorkLength=8,this.heightTaskItem=12,this.heightTaskItemExtra=11,this.pixelsPerDay=24,this.hsPerDay=8,this.pixelsPerWorkHour=this.pixelsPerDay/this.hsPerDay,this.pixelsPerHour=this.pixelsPerDay/24,this.countDays=0,this.totalDays=0,this.startDate=null,this.initialPos=0,this.contentDataHeight=0,this.panelTimeExpandDelta=20,this.divTimeInfo=null,this.panelNames=null,this.panelTime=null,this.contentData=null,this.tabMenu=null,this.project=[],this.arrProjects=[],this.xmlLoader=null,this.isMoving=!1,this.isResizing=!1,this.animationNodes=[],this.scale=1,this.tempDayInPixels=0,this.resource=null,this.months=h.getNames("months","wide"),this._events=[]},getProject:function(e){return l.filter(this.arrProjects,function(t){return t.project.id==e},this)[0]},checkPosPreviousTask:function(e,t){var a=this.getWidthOnDuration(e.duration),i=this.getPosOnDate(e.startTime),r=this.getPosOnDate(t.startTime);return r>=a+i},correctPosPreviousTask:function(e,t,a){var i=new Date(e.startTime);if(i.setHours(i.getHours()+e.duration/this.hsPerDay*24),i.getHours()>0&&(i.setHours(0),i.setDate(i.getDate()+1)),a?a.setStartTime(i,!0):t.startTime=i,t.parentTask&&!this.checkPosParentTask(t.parentTask,t)){var r=new Date(t.parentTask.startTime);r.setHours(r.getHours()+t.parentTask.duration/this.hsPerDay*24),t.duration=parseInt(parseInt((r-t.startTime)/36e5)*this.hsPerDay/24)}},correctPosParentTask:function(e,t){t.previousTask?this.correctPosPreviousTask(t.previousTask,t):(e.startTime>t.startTime&&(t.startTime=new Date(e.startTime)),this.checkPosParentTask(e,t)||(t.duration=e.duration))},checkPosParentTaskInTree:function(e){for(var t=!1,a=0;a<e.cldTasks.length;a++){var i=e.cldTasks[a];if(!this.checkPosParentTask(e,i)){if(!this.correctError)return!0;this.correctPosParentTask(e,i)}if(e.startTime>i.startTime){if(!this.correctError)return!0;this.correctPosParentTask(e,i)}i.cldTasks.length>0&&(t=this.checkPosParentTaskInTree(i))}return t},setPreviousTask:function(e){for(var t=!1,a=0;a<e.parentTasks.length;a++){var i=e.parentTasks[a];if(i.previousTaskId){if(i.previousTask=e.getTaskById(i.previousTaskId),!i.previousTask&&!this.correctError)return!0;i.previousTask.cldPreTasks.push(i)}if(i.previousTask&&!this.checkPosPreviousTask(i.previousTask,i)){if(!this.correctError)return!0;this.correctPosPreviousTask(i.previousTask,i)}t=this.setPreviousTaskInTree(i)}return t},setPreviousTaskInTree:function(e){for(var t=!1,a=0;a<e.cldTasks.length;a++){var i=e.cldTasks[a];if(i.previousTaskId){if(i.previousTask=e.project.getTaskById(i.previousTaskId),!i.previousTask&&!this.correctError)return!0;if(!this.checkPosPreviousTask(i.previousTask,i)){if(!this.correctError)return!0;this.correctPosPreviousTask(i.previousTask,i)}i.previousTask.cldPreTasks.push(i)}i.cldTasks.length>0&&(t=this.setPreviousTaskInTree(i))}return t},checkPosParentTask:function(e,t){var a=this.getWidthOnDuration(e.duration),i=this.getPosOnDate(e.startTime),r=this.getPosOnDate(t.startTime),o=this.getWidthOnDuration(t.duration);return a+i>=r+o},addProject:function(e){this.project.push(e)},deleteProject:function(t){var i=this.getProject(t);if(i){if(i.arrTasks.length>0)for(;i.arrTasks.length>0;)i.deleteChildTask(i.arrTasks[0]);var r=this.heightTaskItemExtra+this.heightTaskItem;if(i.nextProject&&i.shiftNextProject(i,-r),this.project=l.filter(this.project,function(e){return e.id!=i.project.id},this),i.previousProject&&i.nextProject){var o=i.previousProject;o.nextProject=i.nextProject}if(i.previousProject&&!i.nextProject){var o=i.previousProject;o.nextProject=null}if(!i.previousProject&&i.nextProject){var n=i.nextProject;n.previousProject=null}for(var s=0;s<this.arrProjects.length;s++)this.arrProjects[s].project.id==t&&this.arrProjects.splice(s,1);if(i.projectItem[0].parentNode.removeChild(i.projectItem[0]),i.descrProject.parentNode.removeChild(i.descrProject),i.projectNameItem.parentNode.removeChild(i.projectNameItem),this.contentDataHeight-=this.heightTaskItemExtra+this.heightTaskItem,0==this.project.length){var d=new Date(this.startDate),h=new Date(d.setDate(d.getDate()+1)),u=new e({id:1,name:"New Project",startDate:h});this.project.push(u);var i=new a(this,u);i.create(),this.arrProjects.push(i),this.contentDataHeight+=this.heightTaskItemExtra+this.heightTaskItem}this.checkPosition()}},insertProject:function(t,i,r){if(this.startDate>=r)return!1;if(this.getProject(t))return!1;this.checkHeighPanelTasks();var o=new e({id:t,name:i,startDate:r});this.project.push(o);for(var n=new a(this,o),s=0;s<this.arrProjects.length;s++){var l=this.arrProjects[s],d=this.arrProjects[s-1],h=this.arrProjects[s+1];if(r<l.project.startDate){if(this.arrProjects.splice(s,0,n),s>0&&(n.previousProject=d,d.nextProject=n),s+1<=this.arrProjects.length){n.nextProject=h,h.previousProject=n;var u=this.heightTaskItem+this.heightTaskItemExtra;n.shiftNextProject(n,u)}return n.create(),n.hideDescrProject(),this.checkPosition(),n}}return this.arrProjects.length>0&&(this.arrProjects[this.arrProjects.length-1].nextProject=n,n.previousProject=this.arrProjects[this.arrProjects.length-1]),this.arrProjects.push(n),n.create(),n.hideDescrProject(),this.checkPosition(),n},openTree:function(e){var t=this.getLastCloseParent(e);this.openNode(t),e.taskItem.id!=t.taskItem.id&&this.openTree(e)},openNode:function(e){e.isExpanded||(p.remove(e.cTaskNameItem[2],"ganttImageTreeExpand"),p.add(e.cTaskNameItem[2],"ganttImageTreeCollapse"),e.isExpanded=!0,e.shiftCurrentTasks(e,e.hideTasksHeight),e.showChildTasks(e,e.isExpanded),e.hideTasksHeight=0)},getLastCloseParent:function(e){return e.parentTask?e.parentTask.isExpanded&&"none"!=e.parentTask.cTaskNameItem[2].style.display?e:this.getLastCloseParent(e.parentTask):e},getProjectItemById:function(e){return l.filter(this.project,function(t){return t.id==e},this)[0]},clearAll:function(){this.contentDataHeight=0,this.startDate=null,this.clearData(),this.clearItems(),this.clearEvents()},clearEvents:function(){l.forEach(this._events,function(e){e.remove()}),this._events=[]},clearData:function(){this.project=[],this.arrProjects=[]},clearItems:function(){this.contentData.removeChild(this.contentData.firstChild),this.contentData.appendChild(this.createPanelTasks()),this.panelNames.removeChild(this.panelNames.firstChild),this.panelNames.appendChild(this.createPanelNamesTasks()),this.panelTime.removeChild(this.panelTime.firstChild)},buildUIContent:function(){this.project.sort(this.sortProjStartDate),this.startDate=this.getStartDate(),this.panelTime.appendChild(this.createPanelTime());for(var e=0;e<this.project.length;e++){for(var t=this.project[e],i=0;i<t.parentTasks.length;i++){var r=t.parentTasks[i];if(!r.startTime)return;if(this.setStartTimeChild(r),this.setPreviousTask(t))return}for(var i=0;i<t.parentTasks.length;i++){var r=t.parentTasks[i];if(r.startTime<t.startDate)return;if(this.checkPosParentTaskInTree(r))return}this.sortTasksByStartTime(t)}for(var e=0;e<this.project.length;e++){var t=this.project[e],o=new a(this,t);if(this.arrProjects.length>0){var n=this.arrProjects[this.arrProjects.length-1];o.previousProject=n,n.nextProject=o}o.create(),this.checkHeighPanelTasks(),this.arrProjects.push(o),this.createTasks(o)}this.resource&&this.resource.reConstruct(),this.postLoadData(),this.postBindEvents()},loadJSONData:function(e){var t=this;t.dataFilePath=e||t.dataFilePath,u.get(t.dataFilePath,{sync:!0}).then(function(e){t.loadJSONString(e.text),t.buildUIContent()},function(){})},loadJSONString:function(t){if(t){this.clearAll();var a=x.parse(t),i=a.items;l.forEach(i,function(t){var a=t.startdate.split("-"),i=new e({id:t.id,name:t.name,startDate:new Date(a[0],parseInt(a[1])-1,a[2])}),o=t.tasks;l.forEach(o,function(e){var t=e.id,a=e.name,o=e.starttime.split("-"),n=e.duration,s=e.percentage,l=e.previousTaskId,d=e.taskOwner,h=new r({id:t,name:a,startTime:new Date(o[0],parseInt(o[1])-1,o[2]),duration:n,percentage:s,previousTaskId:l,taskOwner:d}),u=e.children;0!=u.length&&this.buildChildTasksData(h,u),i.addTask(h)},this),this.addProject(i)},this)}},buildChildTasksData:function(e,t){t&&l.forEach(t,function(t){var a=t.id,i=t.name,o=t.starttime.split("-"),n=t.duration,s=t.percentage,l=t.previousTaskId,d=t.taskOwner,h=new r({id:a,name:i,startTime:new Date(o[0],parseInt(o[1])-1,o[2]),duration:n,percentage:s,previousTaskId:l,taskOwner:d});h.parentTask=e,e.addChildTask(h);var u=t.children;0!=u.length&&this.buildChildTasksData(h,u)},this)},getJSONData:function(){var e={identifier:"id",items:[]};return l.forEach(this.project,function(t){var a={id:t.id,name:t.name,startdate:t.startDate.getFullYear()+"-"+(t.startDate.getMonth()+1)+"-"+t.startDate.getDate(),tasks:[]};e.items.push(a),l.forEach(t.parentTasks,function(e){var t={id:e.id,name:e.name,starttime:e.startTime.getFullYear()+"-"+(e.startTime.getMonth()+1)+"-"+e.startTime.getDate(),duration:e.duration,percentage:e.percentage,previousTaskId:e.previousTaskId||"",taskOwner:e.taskOwner||"",children:this.getChildTasksData(e.cldTasks)};a.tasks.push(t)},this)},this),e},getChildTasksData:function(e){var t=[];return e&&e.length>0&&l.forEach(e,function(e){var a={id:e.id,name:e.name,starttime:e.startTime.getFullYear()+"-"+(e.startTime.getMonth()+1)+"-"+e.startTime.getDate(),duration:e.duration,percentage:e.percentage,previousTaskId:e.previousTaskId||"",taskOwner:e.taskOwner||"",children:this.getChildTasksData(e.cldTasks)};t.push(a)},this),t},saveJSONData:function(e){var t=this;t.dataFilePath=e&&d.trim(e).length>0?e:this.dataFilePath;try{u.post(t.saveProgramPath,{query:{filename:t.dataFilePath,data:x.stringify(t.getJSONData())}}).response.then(function(e){c.checkStatus(e.options.status)||405==e.options.status})}catch(a){}},sortTaskStartTime:function(e,t){return e.startTime<t.startTime?-1:e.startTime>t.startTime?1:0},sortProjStartDate:function(e,t){return e.startDate<t.startDate?-1:e.startDate>t.startDate?1:0},setStartTimeChild:function(e){l.forEach(e.cldTasks,function(t){t.startTime||(t.startTime=e.startTime),0!=t.cldTasks.length&&this.setStartTimeChild(t)},this)},createPanelTasks:function(){var e=g.create("div",{className:"ganttTaskPanel"});return y.set(e,{height:this.contentHeight-this.panelTimeHeight-this.scrollBarWidth+"px"}),e},refreshParams:function(e){this.pixelsPerDay=e,this.pixelsPerWorkHour=this.pixelsPerDay/this.hsPerDay,this.pixelsPerHour=this.pixelsPerDay/24},createPanelNamesTasksHeader:function(){var e=g.create("div",{className:"ganttPanelHeader"}),t=g.create("table",{cellPadding:"0px",border:"0px",cellSpacing:"0px",bgColor:"#FFFFFF",className:"ganttToolbar"},e),a=t.insertRow(t.rows.length),i=t.insertRow(t.rows.length),r=t.insertRow(t.rows.length),o=(t.insertRow(t.rows.length),g.create("td",{align:"center",vAlign:"middle",className:"ganttToolbarZoomIn"},a)),n=d.hitch(this,function(){2*this.scale>5||(this.scale=2*this.scale,this.switchTeleMicroView(this.pixelsPerDay*this.scale))});this.zoomInClickEvent&&this.zoomInClickEvent.remove(),this.zoomInClickEvent=m(o,"click",d.hitch(this,n)),this.zoomInKeyEvent&&this.zoomInKeyEvent.remove(),this.zoomInKeyEvent=m(o,"keydown",d.hitch(this,function(e){e.keyCode==M.ENTER&&n()})),v.set(o,"tabIndex",0);var s=g.create("td",{align:"center",vAlign:"middle",className:"ganttToolbarZoomOut"},a),h=d.hitch(this,function(){.5*this.scale<.2||(this.scale=.5*this.scale,this.switchTeleMicroView(this.pixelsPerDay*this.scale))});this.zoomOutClickEvent&&this.zoomOutClickEvent.remove(),this.zoomOutClickEvent=m(s,"click",d.hitch(this,h)),this.zoomOutKeyEvent&&this.zoomOutKeyEvent.remove(),this.zoomOutKeyEvent=m(s,"keydown",d.hitch(this,function(e){e.keyCode==M.ENTER&&h()})),v.set(s,"tabIndex",0);var u=g.create("td",{align:"center",vAlign:"middle",className:"ganttToolbarMicro"},i);this.microClickEvent&&this.microClickEvent.remove(),this.microClickEvent=m(u,"click",d.hitch(this,this.refresh,this.animation?15:1,0,2)),this.microKeyEvent&&this.microKeyEvent.remove(),this.microKeyEvent=m(u,"keydown",d.hitch(this,function(e){e.keyCode==M.ENTER&&(u.blur(),this.refresh(this.animation?15:1,0,2))})),v.set(u,"tabIndex",0);var c=g.create("td",{align:"center",vAlign:"middle",className:"ganttToolbarTele"},i);this.teleClickEvent&&this.teleClickEvent.remove(),this.teleClickEvent=m(c,"click",d.hitch(this,this.refresh,this.animation?15:1,0,.5)),this.teleKeyEvent&&this.teleKeyEvent.remove(),this.teleKeyEvent=m(c,"keydown",d.hitch(this,function(e){e.keyCode==M.ENTER&&(c.blur(),this.refresh(this.animation?15:1,0,.5))})),v.set(c,"tabIndex",0);var f=g.create("td",{align:"center",vAlign:"middle",className:"ganttToolbarSave"},r);this.saveClickEvent&&this.saveClickEvent.remove(),this.saveClickEvent=m(f,"click",d.hitch(this,this.saveJSONData,"")),this.saveKeyEvent&&this.saveKeyEvent.remove(),this.saveKeyEvent=m(f,"keydown",d.hitch(this,function(e){e.keyCode==M.ENTER&&this.saveJSONData("")})),v.set(f,"tabIndex",0);var y=g.create("td",{align:"center",vAlign:"middle",className:"ganttToolbarLoad"},r);this.loadClickEvent&&this.loadClickEvent.remove(),this.loadClickEvent=m(y,"click",d.hitch(this,this.loadJSONData,"")),this.loadKeyEvent&&this.loadKeyEvent.remove(),this.loadKeyEvent=m(y,"keydown",d.hitch(this,function(e){e.keyCode==M.ENTER&&this.loadJSONData("")})),v.set(y,"tabIndex",0);var b=[o,s,u,c,f,y],k=["Enlarge timeline","Shrink timeline","Zoom in time zone(microscope view)","Zoom out time zone(telescope view)","Save gantt data to json file","Load gantt data from json file"];return l.forEach(b,function(e,t){var a=k[t],i=function(){p.add(e,"ganttToolbarActionHover"),dijit.showTooltip(a,e,["above","below"])};e.onmouseover=i,e.onfocus=i;var r=function(){p.remove(e,"ganttToolbarActionHover"),e&&dijit.hideTooltip(e)};e.onmouseout=r,e.onblur=r},this),e},createPanelNamesTasks:function(){var e=g.create("div",{innerHTML:"&nbsp;",className:"ganttPanelNames"});return y.set(e,{height:this.contentHeight-this.panelTimeHeight-this.scrollBarWidth+"px",width:this.maxWidthPanelNames+"px"}),e},createPanelTime:function(){var e=g.create("div",{className:"ganttPanelTime"}),t=g.create("table",{cellPadding:"0px",border:"0px",cellSpacing:"0px",bgColor:"#FFFFFF",className:"ganttTblTime"},e);this.totalDays=this.countDays;var a,i,r=t.insertRow(t.rows.length),o=0;i=a=new Date(this.startDate).getFullYear();for(var n=0;n<this.countDays;n++,o++){var s=new Date(this.startDate);s.setDate(s.getDate()+n),i=s.getFullYear(),i!=a&&(this.addYearInPanelTime(r,o,a),o=0,a=i)}this.addYearInPanelTime(r,o,i),y.set(r,"display","none");var l,d,u=t.insertRow(t.rows.length),c=0,m=1970;d=l=new Date(this.startDate).getMonth();for(var n=0;n<this.countDays;n++,c++){var s=new Date(this.startDate);s.setDate(s.getDate()+n),d=s.getMonth(),m=s.getFullYear(),d!=l&&(this.addMonthInPanelTime(u,c,l,11!==l?m:m-1),c=0,l=d)}this.addMonthInPanelTime(u,c,d,m);var f,p,v=t.insertRow(t.rows.length),c=0;p=f=h._getWeekOfYear(new Date(this.startDate));for(var n=0;n<this.countDays;n++,c++){var s=new Date(this.startDate);s.setDate(s.getDate()+n),p=h._getWeekOfYear(s),p!=f&&(this.addWeekInPanelTime(v,c,f),c=0,f=p)}this.addWeekInPanelTime(v,c,p);for(var b=t.insertRow(t.rows.length),n=0;n<this.countDays;n++)this.addDayInPanelTime(b);for(var M=t.insertRow(t.rows.length),n=0;n<this.countDays;n++)this.addHourInPanelTime(M);return y.set(M,"display","none"),e},adjustPanelTime:function(){var e=l.map(this.arrProjects,function(e){return parseInt(e.projectItem[0].style.left)+parseInt(e.projectItem[0].firstChild.style.width)+e.descrProject.offsetWidth+this.panelTimeExpandDelta},this).sort(function(e,t){return t-e})[0];if(this.maxTaskEndPos!=e){for(var t=this.panelTime.firstChild.firstChild.rows,a=0;4>=a;a++)this.removeCell(t[a]);var i=Math.round((e+this.panelTimeExpandDelta)/this.pixelsPerDay);this.totalDays=i;var r,o,n=0;o=r=new Date(this.startDate).getFullYear();for(var a=0;i>a;a++,n++){var s=new Date(this.startDate);s.setDate(s.getDate()+a),o=s.getFullYear(),o!=r&&(this.addYearInPanelTime(t[0],n,r),n=0,r=o)}this.addYearInPanelTime(t[0],n,o);var d,u,c=0,m=1970;u=d=new Date(this.startDate).getMonth();for(var a=0;i>a;a++,c++){var s=new Date(this.startDate);s.setDate(s.getDate()+a),u=s.getMonth(),m=s.getFullYear(),u!=d&&(this.addMonthInPanelTime(t[1],c,d,11!==d?m:m-1),c=0,d=u)}this.addMonthInPanelTime(t[1],c,u,m);var f,p,c=0;p=f=h._getWeekOfYear(new Date(this.startDate));for(var a=0;i>a;a++,c++){var s=new Date(this.startDate);s.setDate(s.getDate()+a),p=h._getWeekOfYear(s),p!=f&&(this.addWeekInPanelTime(t[2],c,f),c=0,f=p)}this.addWeekInPanelTime(t[2],c,p);for(var a=0;i>a;a++)this.addDayInPanelTime(t[3]);for(var a=0;i>a;a++)this.addHourInPanelTime(t[4]);this.panelTime.firstChild.firstChild.style.width=this.pixelsPerDay*t[3].cells.length+"px",this.contentData.firstChild.style.width=this.pixelsPerDay*t[3].cells.length+"px",this.maxTaskEndPos=e}},addYearInPanelTime:function(e,t,a){var i="Year   "+a,r=g.create("td",{colSpan:t,align:"center",vAlign:"middle",className:"ganttYearNumber",innerHTML:this.pixelsPerDay*t>20?i:"",innerHTMLData:i},e);y.set(r,"width",this.pixelsPerDay*t+"px")},addMonthInPanelTime:function(e,t,a,i){var r=this.months[a]+(i?" of "+i:""),o=g.create("td",{colSpan:t,align:"center",vAlign:"middle",className:"ganttMonthNumber",innerHTML:this.pixelsPerDay*t>30?r:"",innerHTMLData:r},e);y.set(o,"width",this.pixelsPerDay*t+"px")},addWeekInPanelTime:function(e,t,a){var i="Week   "+a,r=g.create("td",{colSpan:t,align:"center",vAlign:"middle",className:"ganttWeekNumber",innerHTML:this.pixelsPerDay*t>20?i:"",innerHTMLData:i},e);y.set(r,"width",this.pixelsPerDay*t+"px")},addDayInPanelTime:function(e){var t=new Date(this.startDate);t.setDate(t.getDate()+parseInt(e.cells.length));var a=g.create("td",{align:"center",vAlign:"middle",className:"ganttDayNumber",innerHTML:this.pixelsPerDay>20?t.getDate():"",innerHTMLData:String(t.getDate()),data:e.cells.length},e);y.set(a,"width",this.pixelsPerDay+"px"),t.getDay()>=5&&p.add(a,"ganttDayNumberWeekend"),this._events.push(m(a,"mouseover",d.hitch(this,function(e){var t=e.target||e.srcElement,i=new Date(this.startDate.getTime());i.setDate(i.getDate()+parseInt(v.get(t,"data"))),dijit.showTooltip(i.getFullYear()+"."+(i.getMonth()+1)+"."+i.getDate(),a,["above","below"])}))),this._events.push(m(a,"mouseout",d.hitch(this,function(e){var t=e.target||e.srcElement;t&&dijit.hideTooltip(t)})))},addHourInPanelTime:function(e){var t=g.create("td",{align:"center",vAlign:"middle",className:"ganttHourNumber",data:e.cells.length},e);y.set(t,"width",this.pixelsPerDay+"px");for(var a=g.create("table",{cellPadding:"0",cellSpacing:"0"},t),i=a.insertRow(a.rows.length),r=0;r<this.hsPerDay;r++){var o=g.create("td",{className:"ganttHourClass"},i);y.set(o,"width",this.pixelsPerDay/this.hsPerDay+"px"),v.set(o,"innerHTMLData",String(9+r)),this.pixelsPerDay/this.hsPerDay>5&&v.set(o,"innerHTML",String(9+r)),p.add(o,3>=r?"ganttHourNumberAM":"ganttHourNumberPM")}},incHeightPanelTasks:function(e){var t=this.contentData.firstChild;t.style.height=parseInt(t.style.height)+e+"px"},incHeightPanelNames:function(e){var t=this.panelNames.firstChild;t.style.height=parseInt(t.style.height)+e+"px"},checkPosition:function(){l.forEach(this.arrProjects,function(e){l.forEach(e.arrTasks,function(e){e.checkPosition()},this)},this)},checkHeighPanelTasks:function(){this.contentDataHeight+=this.heightTaskItemExtra+this.heightTaskItem,parseInt(this.contentData.firstChild.style.height)<=this.contentDataHeight&&(this.incHeightPanelTasks(this.heightTaskItem+this.heightTaskItemExtra),this.incHeightPanelNames(this.heightTaskItem+this.heightTaskItemExtra))},sortTasksByStartTime:function(e){e.parentTasks.sort(this.sortTaskStartTime);for(var t=0;t<e.parentTasks.length;t++)e.parentTasks[t]=this.sortChildTasks(e.parentTasks[t])},sortChildTasks:function(e){e.cldTasks.sort(this.sortTaskStartTime);for(var t=0;t<e.cldTasks.length;t++)e.cldTasks[t].cldTasks.length>0&&this.sortChildTasks(e.cldTasks[t]);return e},refresh:function(e,t,a){if(!(this.arrProjects.length<=0||this.arrProjects[0].arrTasks.length<=0)){if(!e||t>e)return this.refreshController(),this.resource&&this.resource.refresh(),this.tempDayInPixels=0,void(this.panelNameHeadersCover&&y.set(this.panelNameHeadersCover,"display","none"));0==this.tempDayInPixels&&(this.tempDayInPixels=this.pixelsPerDay),this.panelNameHeadersCover&&y.set(this.panelNameHeadersCover,"display","");var i=this.tempDayInPixels+this.tempDayInPixels*(a-1)*Math.pow(t/e,2);this.refreshParams(i),l.forEach(this.arrProjects,function(e){l.forEach(e.arrTasks,function(e){e.refresh()},this),e.refresh()},this),setTimeout(d.hitch(this,function(){this.refresh(e,++t,a)}),15)}},switchTeleMicroView:function(e){for(var t=this.panelTime.firstChild.firstChild,a=0;5>a;a++)e>40?y.set(t.rows[a],"display",0==a||1==a?"none":""):20>e?y.set(t.rows[a],"display",2==a||4==a?"none":""):y.set(t.rows[a],"display",0==a||4==a?"none":"")},refreshController:function(){this.contentData.firstChild.style.width=Math.max(1200,this.pixelsPerDay*this.totalDays)+"px",this.panelTime.firstChild.style.width=this.pixelsPerDay*this.totalDays+"px",this.panelTime.firstChild.firstChild.style.width=this.pixelsPerDay*this.totalDays+"px",this.switchTeleMicroView(this.pixelsPerDay),l.forEach(this.panelTime.firstChild.firstChild.rows,function(e){l.forEach(e.childNodes,function(e){var t=parseInt(v.get(e,"colSpan")||1),a=d.trim(v.get(e,"innerHTMLData")||"");a.length>0?v.set(e,"innerHTML",this.pixelsPerDay*t<20?"":a):l.forEach(e.firstChild.rows[0].childNodes,function(e){var t=d.trim(v.get(e,"innerHTMLData")||"");v.set(e,"innerHTML",this.pixelsPerDay/this.hsPerDay>10?t:"")},this),1==t&&(y.set(e,"width",this.pixelsPerDay*t+"px"),a.length<=0&&l.forEach(e.firstChild.rows[0].childNodes,function(e){y.set(e,"width",this.pixelsPerDay*t/this.hsPerDay+"px")},this))},this)},this)},init:function(){this.startDate=this.getStartDate(),y.set(this.content,{width:this.contentWidth+"px",height:this.contentHeight+"px"}),this.tableControl=g.create("table",{cellPadding:"0",cellSpacing:"0",className:"ganttTabelControl"});var e=this.tableControl.insertRow(this.tableControl.rows.length);this.content.appendChild(this.tableControl),this.countDays=this.getCountDays(),this.panelTime=g.create("div",{className:"ganttPanelTimeContainer"}),y.set(this.panelTime,"height",this.panelTimeHeight+"px"),this.panelTime.appendChild(this.createPanelTime()),this.contentData=g.create("div",{className:"ganttContentDataContainer"}),y.set(this.contentData,"height",this.contentHeight-this.panelTimeHeight+"px"),this.contentData.appendChild(this.createPanelTasks());var i=g.create("td",{vAlign:"top"});this.panelNameHeaders=g.create("div",{className:"ganttPanelNameHeaders"},i),y.set(this.panelNameHeaders,{height:this.panelTimeHeight+"px",width:this.maxWidthPanelNames+"px"}),this.panelNameHeaders.appendChild(this.createPanelNamesTasksHeader()),this.panelNames=g.create("div",{className:"ganttPanelNamesContainer"},i),this.panelNames.appendChild(this.createPanelNamesTasks()),e.appendChild(i),i=g.create("td",{vAlign:"top"});var r=g.create("div",{className:"ganttDivCell"});r.appendChild(this.panelTime),r.appendChild(this.contentData),i.appendChild(r),e.appendChild(i),y.set(this.panelNames,"height",this.contentHeight-this.panelTimeHeight-this.scrollBarWidth+"px"),y.set(this.panelNames,"width",this.maxWidthPanelNames+"px"),y.set(this.contentData,"width",this.contentWidth-this.maxWidthPanelNames+"px"),y.set(this.contentData.firstChild,"width",this.pixelsPerDay*this.countDays+"px"),y.set(this.panelTime,"width",this.contentWidth-this.maxWidthPanelNames-this.scrollBarWidth+"px"),y.set(this.panelTime.firstChild,"width",this.pixelsPerDay*this.countDays+"px"),this.isShowConMenu&&(this.tabMenu=new o(this));var n=this;this.contentData.onscroll=function(){n.panelTime.scrollLeft=this.scrollLeft,n.panelNames&&(n.panelNames.scrollTop=this.scrollTop,n.isShowConMenu&&n.tabMenu.hide()),n.resource&&(n.resource.contentData.scrollLeft=this.scrollLeft)},this.project.sort(this.sortProjStartDate);for(var s=0;s<this.project.length;s++){for(var l=this.project[s],d=0;d<l.parentTasks.length;d++){var h=l.parentTasks[d];if(h.startTime||(h.startTime=l.startDate),this.setStartTimeChild(h),this.setPreviousTask(l))return}for(var d=0;d<l.parentTasks.length;d++){var h=l.parentTasks[d];if(h.startTime<l.startDate){if(!this.correctError)return;h.startTime=l.startDate}if(this.checkPosParentTaskInTree(h))return}this.sortTasksByStartTime(l)}for(var s=0;s<this.project.length;s++){var l=this.project[s],u=new a(this,l);if(this.arrProjects.length>0){var c=this.arrProjects[this.arrProjects.length-1];u.previousProject=c,c.nextProject=u}u.create(),this.checkHeighPanelTasks(),this.arrProjects.push(u),this.createTasks(u)}return this.withResource&&(this.resource=new t(this),this.resource.create()),this.postLoadData(),this.postBindEvents(),this},postLoadData:function(){l.forEach(this.arrProjects,function(e){l.forEach(e.arrTasks,function(e){e.postLoadData()},this),e.postLoadData()},this);var e=b.getMarginBox(this.panelNameHeaders);this.panelNameHeadersCover||(this.panelNameHeadersCover=g.create("div",{className:"ganttHeaderCover"},this.panelNameHeaders.parentNode),y.set(this.panelNameHeadersCover,{left:e.l+"px",top:e.t+"px",height:e.h+"px",width:e.w+"px",display:"none"}))},postBindEvents:function(){var e=b.position(this.tableControl,!0);k("dom-addeventlistener")&&this._events.push(m(this.tableControl,"mousemove",d.hitch(this,function(t){var a=t.srcElement||t.target;if(a==this.panelNames.firstChild||a==this.contentData.firstChild){var i=this.heightTaskItem+this.heightTaskItemExtra,r=parseInt(t.layerY/i)*i+this.panelTimeHeight-this.contentData.scrollTop;r!=this.oldHLTop&&r<e.h-50&&(this.highLightDiv?y.set(this.highLightDiv,"top",e.y+r+"px"):(this.highLightDiv=g.create("div",{className:"ganttRowHighlight"},w.body()),y.set(this.highLightDiv,{top:e.y+r+"px",left:e.x+"px",width:e.w-20+"px",height:i+"px"}))),this.oldHLTop=r}})))},getStartDate:function(){return l.forEach(this.project,function(e){this.startDate?e.startDate<this.startDate&&(this.startDate=new Date(e.startDate)):this.startDate=new Date(e.startDate)},this),this.initialPos=24*this.pixelsPerHour,this.startDate?new Date(this.startDate.setHours(this.startDate.getHours()-24)):new Date},getCountDays:function(){return parseInt((this.contentWidth-this.maxWidthPanelNames)/(24*this.pixelsPerHour))},createTasks:function(e){l.forEach(e.project.parentTasks,function(t,a){a>0&&(e.project.parentTasks[a-1].nextParentTask=t,t.previousParentTask=e.project.parentTasks[a-1]);var r=new i(t,e,this);e.arrTasks.push(r),r.create(),this.checkHeighPanelTasks(),t.cldTasks.length>0&&this.createChildItemControls(t.cldTasks,e)},this)},createChildItemControls:function(e,t){e&&l.forEach(e,function(a,r){r>0&&(a.previousChildTask=e[r-1],e[r-1].nextChildTask=a);var o=new i(a,t,this);o.create(),this.checkHeighPanelTasks(),a.cldTasks.length>0&&this.createChildItemControls(a.cldTasks,t)},this)},getPosOnDate:function(e){return(e-this.startDate)/36e5*this.pixelsPerHour},getWidthOnDuration:function(e){return Math.round(this.pixelsPerWorkHour*e)},getLastChildTask:function(e){return e.childTask.length>0?this.getLastChildTask(e.childTask[e.childTask.length-1]):e},removeCell:function(e){for(;e.cells[0];)e.deleteCell(e.cells[0])}})});//# sourceMappingURL=GanttChart.js.map