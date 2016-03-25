//>>built
define("dojox/gantt/GanttChart",["./GanttProjectItem","./GanttResourceItem","./GanttProjectControl","./GanttTaskControl","./GanttTaskItem","./TabMenu","dijit/Tooltip","dojo/_base/declare","dojo/_base/array","dojo/_base/lang","dojo/date/locale","dojo/request","dojo/request/util","dojo/on","dojo/dom","dojo/dom-class","dojo/dom-construct","dojo/dom-style","dojo/dom-attr","dojo/dom-geometry","dojo/keys","dojo/has","dojo/_base/window","dojo/json","dojo/domReady!"],function(e,t,a,i,n,r,o,s,l,d,m,c,u,h,f,p,g,v,y,k,b,M,w,_){return s("dojox.gantt.GanttChart",[],{constructor:function(e,t){this.resourceChartHeight=void 0!==e.resourceChartHeight?e.resourceChartHeight:!1,this.withResource=void 0!==e.withResource?e.withResource:!0,this.correctError=void 0!==e.autoCorrectError?e.autoCorrectError:!1,this.isShowConMenu=this.isContentEditable=!e.readOnly,this.withTaskId=void 0!==e.withTaskId?e.withTaskId:!e.readOnly,this.animation=void 0!==e.animation?e.animation:!0,this.saveProgramPath=e.saveProgramPath||"saveGanttData.php",this.dataFilePath=e.dataFilePath||"gantt_default.json",this.contentHeight=e.height||400,this.contentWidth=e.width||600,this.content=f.byId(t),this.scrollBarWidth=18,this.panelTimeHeight=102,this.maxWidthPanelNames=150,this.maxWidthTaskNames=150,this.minWorkLength=8,this.heightTaskItem=12,this.heightTaskItemExtra=11,this.pixelsPerDay=24,this.hsPerDay=8,this.pixelsPerWorkHour=this.pixelsPerDay/this.hsPerDay,this.pixelsPerHour=this.pixelsPerDay/24,this.countDays=0,this.totalDays=0,this.startDate=null,this.initialPos=0,this.contentDataHeight=0,this.panelTimeExpandDelta=20,this.divTimeInfo=null,this.panelNames=null,this.panelTime=null,this.contentData=null,this.tabMenu=null,this.project=[],this.arrProjects=[],this.xmlLoader=null,this.isMoving=!1,this.isResizing=!1,this.animationNodes=[],this.scale=1,this.tempDayInPixels=0,this.resource=null,this.months=m.getNames("months","wide"),this._events=[]},getProject:function(e){return l.filter(this.arrProjects,function(t){return t.project.id==e},this)[0]},checkPosPreviousTask:function(e,t){var a=this.getWidthOnDuration(e.duration),i=this.getPosOnDate(e.startTime),n=this.getPosOnDate(t.startTime);return n>=a+i},correctPosPreviousTask:function(e,t,a){var i=new Date(e.startTime);if(i.setHours(i.getHours()+e.duration/this.hsPerDay*24),i.getHours()>0&&(i.setHours(0),i.setDate(i.getDate()+1)),a?a.setStartTime(i,!0):t.startTime=i,t.parentTask&&!this.checkPosParentTask(t.parentTask,t)){var n=new Date(t.parentTask.startTime);n.setHours(n.getHours()+t.parentTask.duration/this.hsPerDay*24),t.duration=parseInt(parseInt((n-t.startTime)/36e5)*this.hsPerDay/24)}},correctPosParentTask:function(e,t){t.previousTask?this.correctPosPreviousTask(t.previousTask,t):(e.startTime>t.startTime&&(t.startTime=new Date(e.startTime)),this.checkPosParentTask(e,t)||(t.duration=e.duration))},checkPosParentTaskInTree:function(e){for(var t=!1,a=0;a<e.cldTasks.length;a++){var i=e.cldTasks[a];if(!this.checkPosParentTask(e,i)){if(!this.correctError)return!0;this.correctPosParentTask(e,i)}if(e.startTime>i.startTime){if(!this.correctError)return!0;this.correctPosParentTask(e,i)}i.cldTasks.length>0&&(t=this.checkPosParentTaskInTree(i))}return t},setPreviousTask:function(e){for(var t=!1,a=0;a<e.parentTasks.length;a++){var i=e.parentTasks[a];if(i.previousTaskId){if(i.previousTask=e.getTaskById(i.previousTaskId),!i.previousTask&&!this.correctError)return!0;i.previousTask.cldPreTasks.push(i)}if(i.previousTask&&!this.checkPosPreviousTask(i.previousTask,i)){if(!this.correctError)return!0;this.correctPosPreviousTask(i.previousTask,i)}t=this.setPreviousTaskInTree(i)}return t},setPreviousTaskInTree:function(e){for(var t=!1,a=0;a<e.cldTasks.length;a++){var i=e.cldTasks[a];if(i.previousTaskId){if(i.previousTask=e.project.getTaskById(i.previousTaskId),!i.previousTask&&!this.correctError)return!0;if(!this.checkPosPreviousTask(i.previousTask,i)){if(!this.correctError)return!0;this.correctPosPreviousTask(i.previousTask,i)}i.previousTask.cldPreTasks.push(i)}i.cldTasks.length>0&&(t=this.setPreviousTaskInTree(i))}return t},checkPosParentTask:function(e,t){var a=this.getWidthOnDuration(e.duration),i=this.getPosOnDate(e.startTime),n=this.getPosOnDate(t.startTime),r=this.getWidthOnDuration(t.duration);return a+i>=n+r},addProject:function(e){this.project.push(e)},deleteProject:function(t){var i=this.getProject(t);if(i){if(i.arrTasks.length>0)for(;i.arrTasks.length>0;)i.deleteChildTask(i.arrTasks[0]);var n=this.heightTaskItemExtra+this.heightTaskItem;if(i.nextProject&&i.shiftNextProject(i,-n),this.project=l.filter(this.project,function(e){return e.id!=i.project.id},this),i.previousProject&&i.nextProject){var r=i.previousProject;r.nextProject=i.nextProject}if(i.previousProject&&!i.nextProject){var r=i.previousProject;r.nextProject=null}if(!i.previousProject&&i.nextProject){var o=i.nextProject;o.previousProject=null}for(var s=0;s<this.arrProjects.length;s++)this.arrProjects[s].project.id==t&&this.arrProjects.splice(s,1);if(i.projectItem[0].parentNode.removeChild(i.projectItem[0]),i.descrProject.parentNode.removeChild(i.descrProject),i.projectNameItem.parentNode.removeChild(i.projectNameItem),this.contentDataHeight-=this.heightTaskItemExtra+this.heightTaskItem,0==this.project.length){var d=new Date(this.startDate),m=new Date(d.setDate(d.getDate()+1)),c=new e({id:1,name:"New Project",startDate:m});this.project.push(c);var i=new a(this,c);i.create(),this.arrProjects.push(i),this.contentDataHeight+=this.heightTaskItemExtra+this.heightTaskItem}this.checkPosition()}},insertProject:function(t,i,n){if(this.startDate>=n)return!1;if(this.getProject(t))return!1;this.checkHeighPanelTasks();var r=new e({id:t,name:i,startDate:n});this.project.push(r);for(var o=new a(this,r),s=0;s<this.arrProjects.length;s++){var l=this.arrProjects[s],d=this.arrProjects[s-1],m=this.arrProjects[s+1];if(n<l.project.startDate){if(this.arrProjects.splice(s,0,o),s>0&&(o.previousProject=d,d.nextProject=o),s+1<=this.arrProjects.length){o.nextProject=m,m.previousProject=o;var c=this.heightTaskItem+this.heightTaskItemExtra;o.shiftNextProject(o,c)}return o.create(),o.hideDescrProject(),this.checkPosition(),o}}return this.arrProjects.length>0&&(this.arrProjects[this.arrProjects.length-1].nextProject=o,o.previousProject=this.arrProjects[this.arrProjects.length-1]),this.arrProjects.push(o),o.create(),o.hideDescrProject(),this.checkPosition(),o},openTree:function(e){var t=this.getLastCloseParent(e);this.openNode(t),e.taskItem.id!=t.taskItem.id&&this.openTree(e)},openNode:function(e){e.isExpanded||(p.remove(e.cTaskNameItem[2],"ganttImageTreeExpand"),p.add(e.cTaskNameItem[2],"ganttImageTreeCollapse"),e.isExpanded=!0,e.shiftCurrentTasks(e,e.hideTasksHeight),e.showChildTasks(e,e.isExpanded),e.hideTasksHeight=0)},getLastCloseParent:function(e){return e.parentTask?e.parentTask.isExpanded&&"none"!=e.parentTask.cTaskNameItem[2].style.display?e:this.getLastCloseParent(e.parentTask):e},getProjectItemById:function(e){return l.filter(this.project,function(t){return t.id==e},this)[0]},clearAll:function(){this.contentDataHeight=0,this.startDate=null,this.clearData(),this.clearItems(),this.clearEvents()},clearEvents:function(){l.forEach(this._events,function(e){e.remove()}),this._events=[]},clearData:function(){this.project=[],this.arrProjects=[]},clearItems:function(){this.contentData.removeChild(this.contentData.firstChild),this.contentData.appendChild(this.createPanelTasks()),this.panelNames.removeChild(this.panelNames.firstChild),this.panelNames.appendChild(this.createPanelNamesTasks()),this.panelTime.removeChild(this.panelTime.firstChild)},buildUIContent:function(){this.project.sort(this.sortProjStartDate),this.startDate=this.getStartDate(),this.panelTime.appendChild(this.createPanelTime());for(var e=0;e<this.project.length;e++){for(var t=this.project[e],i=0;i<t.parentTasks.length;i++){var n=t.parentTasks[i];if(!n.startTime)return;if(this.setStartTimeChild(n),this.setPreviousTask(t))return}for(var i=0;i<t.parentTasks.length;i++){var n=t.parentTasks[i];if(n.startTime<t.startDate)return;if(this.checkPosParentTaskInTree(n))return}this.sortTasksByStartTime(t)}for(var e=0;e<this.project.length;e++){var t=this.project[e],r=new a(this,t);if(this.arrProjects.length>0){var o=this.arrProjects[this.arrProjects.length-1];r.previousProject=o,o.nextProject=r}r.create(),this.checkHeighPanelTasks(),this.arrProjects.push(r),this.createTasks(r)}this.resource&&this.resource.reConstruct(),this.postLoadData(),this.postBindEvents()},loadJSONData:function(e){var t=this;t.dataFilePath=e||t.dataFilePath,c.get(t.dataFilePath,{sync:!0}).then(function(e){t.loadJSONString(e.text),t.buildUIContent()},function(){})},loadJSONString:function(t){if(t){this.clearAll();var a=_.parse(t),i=a.items;l.forEach(i,function(t){var a=t.startdate.split("-"),i=new e({id:t.id,name:t.name,startDate:new Date(a[0],parseInt(a[1])-1,a[2])}),r=t.tasks;l.forEach(r,function(e){var t=e.id,a=e.name,r=e.starttime.split("-"),o=e.duration,s=e.percentage,l=e.previousTaskId,d=e.taskOwner,m=new n({id:t,name:a,startTime:new Date(r[0],parseInt(r[1])-1,r[2]),duration:o,percentage:s,previousTaskId:l,taskOwner:d}),c=e.children;0!=c.length&&this.buildChildTasksData(m,c),i.addTask(m)},this),this.addProject(i)},this)}},buildChildTasksData:function(e,t){t&&l.forEach(t,function(t){var a=t.id,i=t.name,r=t.starttime.split("-"),o=t.duration,s=t.percentage,l=t.previousTaskId,d=t.taskOwner,m=new n({id:a,name:i,startTime:new Date(r[0],parseInt(r[1])-1,r[2]),duration:o,percentage:s,previousTaskId:l,taskOwner:d});m.parentTask=e,e.addChildTask(m);var c=t.children;0!=c.length&&this.buildChildTasksData(m,c)},this)},getJSONData:function(){var e={identifier:"id",items:[]};return l.forEach(this.project,function(t){var a={id:t.id,name:t.name,startdate:t.startDate.getFullYear()+"-"+(t.startDate.getMonth()+1)+"-"+t.startDate.getDate(),tasks:[]};e.items.push(a),l.forEach(t.parentTasks,function(e){var t={id:e.id,name:e.name,starttime:e.startTime.getFullYear()+"-"+(e.startTime.getMonth()+1)+"-"+e.startTime.getDate(),duration:e.duration,percentage:e.percentage,previousTaskId:e.previousTaskId||"",taskOwner:e.taskOwner||"",children:this.getChildTasksData(e.cldTasks)};a.tasks.push(t)},this)},this),e},getChildTasksData:function(e){var t=[];return e&&e.length>0&&l.forEach(e,function(e){var a={id:e.id,name:e.name,starttime:e.startTime.getFullYear()+"-"+(e.startTime.getMonth()+1)+"-"+e.startTime.getDate(),duration:e.duration,percentage:e.percentage,previousTaskId:e.previousTaskId||"",taskOwner:e.taskOwner||"",children:this.getChildTasksData(e.cldTasks)};t.push(a)},this),t},saveJSONData:function(e){var t=this;t.dataFilePath=e&&d.trim(e).length>0?e:this.dataFilePath;try{c.post(t.saveProgramPath,{query:{filename:t.dataFilePath,data:_.stringify(t.getJSONData())}}).response.then(function(e){u.checkStatus(e.options.status)||405==e.options.status})}catch(a){}},sortTaskStartTime:function(e,t){return e.startTime<t.startTime?-1:e.startTime>t.startTime?1:0},sortProjStartDate:function(e,t){return e.startDate<t.startDate?-1:e.startDate>t.startDate?1:0},setStartTimeChild:function(e){l.forEach(e.cldTasks,function(t){t.startTime||(t.startTime=e.startTime),0!=t.cldTasks.length&&this.setStartTimeChild(t)},this)},createPanelTasks:function(){var e=g.create("div",{className:"ganttTaskPanel"});return v.set(e,{height:this.contentHeight-this.panelTimeHeight-this.scrollBarWidth+"px"}),e},refreshParams:function(e){this.pixelsPerDay=e,this.pixelsPerWorkHour=this.pixelsPerDay/this.hsPerDay,this.pixelsPerHour=this.pixelsPerDay/24},createPanelNamesTasksHeader:function(){var e=g.create("div",{className:"ganttPanelHeader"}),t=g.create("table",{cellPadding:"0px",border:"0px",cellSpacing:"0px",bgColor:"#FFFFFF",className:"ganttToolbar"},e),a=t.insertRow(t.rows.length),i=t.insertRow(t.rows.length),n=t.insertRow(t.rows.length),r=(t.insertRow(t.rows.length),g.create("td",{align:"center",vAlign:"middle",className:"ganttToolbarZoomIn"},a)),o=d.hitch(this,function(){2*this.scale>5||(this.scale=2*this.scale,this.switchTeleMicroView(this.pixelsPerDay*this.scale))});this.zoomInClickEvent&&this.zoomInClickEvent.remove(),this.zoomInClickEvent=h(r,"click",d.hitch(this,o)),this.zoomInKeyEvent&&this.zoomInKeyEvent.remove(),this.zoomInKeyEvent=h(r,"keydown",d.hitch(this,function(e){e.keyCode==b.ENTER&&o()})),y.set(r,"tabIndex",0);var s=g.create("td",{align:"center",vAlign:"middle",className:"ganttToolbarZoomOut"},a),m=d.hitch(this,function(){.5*this.scale<.2||(this.scale=.5*this.scale,this.switchTeleMicroView(this.pixelsPerDay*this.scale))});this.zoomOutClickEvent&&this.zoomOutClickEvent.remove(),this.zoomOutClickEvent=h(s,"click",d.hitch(this,m)),this.zoomOutKeyEvent&&this.zoomOutKeyEvent.remove(),this.zoomOutKeyEvent=h(s,"keydown",d.hitch(this,function(e){e.keyCode==b.ENTER&&m()})),y.set(s,"tabIndex",0);var c=g.create("td",{align:"center",vAlign:"middle",className:"ganttToolbarMicro"},i);this.microClickEvent&&this.microClickEvent.remove(),this.microClickEvent=h(c,"click",d.hitch(this,this.refresh,this.animation?15:1,0,2)),this.microKeyEvent&&this.microKeyEvent.remove(),this.microKeyEvent=h(c,"keydown",d.hitch(this,function(e){e.keyCode==b.ENTER&&(c.blur(),this.refresh(this.animation?15:1,0,2))})),y.set(c,"tabIndex",0);var u=g.create("td",{align:"center",vAlign:"middle",className:"ganttToolbarTele"},i);this.teleClickEvent&&this.teleClickEvent.remove(),this.teleClickEvent=h(u,"click",d.hitch(this,this.refresh,this.animation?15:1,0,.5)),this.teleKeyEvent&&this.teleKeyEvent.remove(),this.teleKeyEvent=h(u,"keydown",d.hitch(this,function(e){e.keyCode==b.ENTER&&(u.blur(),this.refresh(this.animation?15:1,0,.5))})),y.set(u,"tabIndex",0);var f=g.create("td",{align:"center",vAlign:"middle",className:"ganttToolbarSave"},n);this.saveClickEvent&&this.saveClickEvent.remove(),this.saveClickEvent=h(f,"click",d.hitch(this,this.saveJSONData,"")),this.saveKeyEvent&&this.saveKeyEvent.remove(),this.saveKeyEvent=h(f,"keydown",d.hitch(this,function(e){e.keyCode==b.ENTER&&this.saveJSONData("")})),y.set(f,"tabIndex",0);var v=g.create("td",{align:"center",vAlign:"middle",className:"ganttToolbarLoad"},n);this.loadClickEvent&&this.loadClickEvent.remove(),this.loadClickEvent=h(v,"click",d.hitch(this,this.loadJSONData,"")),this.loadKeyEvent&&this.loadKeyEvent.remove(),this.loadKeyEvent=h(v,"keydown",d.hitch(this,function(e){e.keyCode==b.ENTER&&this.loadJSONData("")})),y.set(v,"tabIndex",0);var k=[r,s,c,u,f,v],M=["Enlarge timeline","Shrink timeline","Zoom in time zone(microscope view)","Zoom out time zone(telescope view)","Save gantt data to json file","Load gantt data from json file"];return l.forEach(k,function(e,t){var a=M[t],i=function(){p.add(e,"ganttToolbarActionHover"),dijit.showTooltip(a,e,["above","below"])};e.onmouseover=i,e.onfocus=i;var n=function(){p.remove(e,"ganttToolbarActionHover"),e&&dijit.hideTooltip(e)};e.onmouseout=n,e.onblur=n},this),e},createPanelNamesTasks:function(){var e=g.create("div",{innerHTML:"&nbsp;",className:"ganttPanelNames"});return v.set(e,{height:this.contentHeight-this.panelTimeHeight-this.scrollBarWidth+"px",width:this.maxWidthPanelNames+"px"}),e},createPanelTime:function(){var e=g.create("div",{className:"ganttPanelTime"}),t=g.create("table",{cellPadding:"0px",border:"0px",cellSpacing:"0px",bgColor:"#FFFFFF",className:"ganttTblTime"},e);this.totalDays=this.countDays;var a,i,n=t.insertRow(t.rows.length),r=0;i=a=new Date(this.startDate).getFullYear();for(var o=0;o<this.countDays;o++,r++){var s=new Date(this.startDate);s.setDate(s.getDate()+o),i=s.getFullYear(),i!=a&&(this.addYearInPanelTime(n,r,a),r=0,a=i)}this.addYearInPanelTime(n,r,i),v.set(n,"display","none");var l,d,c=t.insertRow(t.rows.length),u=0,h=1970;d=l=new Date(this.startDate).getMonth();for(var o=0;o<this.countDays;o++,u++){var s=new Date(this.startDate);s.setDate(s.getDate()+o),d=s.getMonth(),h=s.getFullYear(),d!=l&&(this.addMonthInPanelTime(c,u,l,11!==l?h:h-1),u=0,l=d)}this.addMonthInPanelTime(c,u,d,h);var f,p,y=t.insertRow(t.rows.length),u=0;p=f=m._getWeekOfYear(new Date(this.startDate));for(var o=0;o<this.countDays;o++,u++){var s=new Date(this.startDate);s.setDate(s.getDate()+o),p=m._getWeekOfYear(s),p!=f&&(this.addWeekInPanelTime(y,u,f),u=0,f=p)}this.addWeekInPanelTime(y,u,p);for(var k=t.insertRow(t.rows.length),o=0;o<this.countDays;o++)this.addDayInPanelTime(k);for(var b=t.insertRow(t.rows.length),o=0;o<this.countDays;o++)this.addHourInPanelTime(b);return v.set(b,"display","none"),e},adjustPanelTime:function(){var e=l.map(this.arrProjects,function(e){return parseInt(e.projectItem[0].style.left)+parseInt(e.projectItem[0].firstChild.style.width)+e.descrProject.offsetWidth+this.panelTimeExpandDelta},this).sort(function(e,t){return t-e})[0];if(this.maxTaskEndPos!=e){for(var t=this.panelTime.firstChild.firstChild.rows,a=0;4>=a;a++)this.removeCell(t[a]);var i=Math.round((e+this.panelTimeExpandDelta)/this.pixelsPerDay);this.totalDays=i;var n,r,o=0;r=n=new Date(this.startDate).getFullYear();for(var a=0;i>a;a++,o++){var s=new Date(this.startDate);s.setDate(s.getDate()+a),r=s.getFullYear(),r!=n&&(this.addYearInPanelTime(t[0],o,n),o=0,n=r)}this.addYearInPanelTime(t[0],o,r);var d,c,u=0,h=1970;c=d=new Date(this.startDate).getMonth();for(var a=0;i>a;a++,u++){var s=new Date(this.startDate);s.setDate(s.getDate()+a),c=s.getMonth(),h=s.getFullYear(),c!=d&&(this.addMonthInPanelTime(t[1],u,d,11!==d?h:h-1),u=0,d=c)}this.addMonthInPanelTime(t[1],u,c,h);var f,p,u=0;p=f=m._getWeekOfYear(new Date(this.startDate));for(var a=0;i>a;a++,u++){var s=new Date(this.startDate);s.setDate(s.getDate()+a),p=m._getWeekOfYear(s),p!=f&&(this.addWeekInPanelTime(t[2],u,f),u=0,f=p)}this.addWeekInPanelTime(t[2],u,p);for(var a=0;i>a;a++)this.addDayInPanelTime(t[3]);for(var a=0;i>a;a++)this.addHourInPanelTime(t[4]);this.panelTime.firstChild.firstChild.style.width=this.pixelsPerDay*t[3].cells.length+"px",this.contentData.firstChild.style.width=this.pixelsPerDay*t[3].cells.length+"px",this.maxTaskEndPos=e}},addYearInPanelTime:function(e,t,a){var i="Year   "+a,n=g.create("td",{colSpan:t,align:"center",vAlign:"middle",className:"ganttYearNumber",innerHTML:this.pixelsPerDay*t>20?i:"",innerHTMLData:i},e);v.set(n,"width",this.pixelsPerDay*t+"px")},addMonthInPanelTime:function(e,t,a,i){var n=this.months[a]+(i?" of "+i:""),r=g.create("td",{colSpan:t,align:"center",vAlign:"middle",className:"ganttMonthNumber",innerHTML:this.pixelsPerDay*t>30?n:"",innerHTMLData:n},e);v.set(r,"width",this.pixelsPerDay*t+"px")},addWeekInPanelTime:function(e,t,a){var i="Week   "+a,n=g.create("td",{colSpan:t,align:"center",vAlign:"middle",className:"ganttWeekNumber",innerHTML:this.pixelsPerDay*t>20?i:"",innerHTMLData:i},e);v.set(n,"width",this.pixelsPerDay*t+"px")},addDayInPanelTime:function(e){var t=new Date(this.startDate);t.setDate(t.getDate()+parseInt(e.cells.length));var a=g.create("td",{align:"center",vAlign:"middle",className:"ganttDayNumber",innerHTML:this.pixelsPerDay>20?t.getDate():"",innerHTMLData:String(t.getDate()),data:e.cells.length},e);v.set(a,"width",this.pixelsPerDay+"px"),t.getDay()>=5&&p.add(a,"ganttDayNumberWeekend"),this._events.push(h(a,"mouseover",d.hitch(this,function(e){var t=e.target||e.srcElement,i=new Date(this.startDate.getTime());i.setDate(i.getDate()+parseInt(y.get(t,"data"))),dijit.showTooltip(i.getFullYear()+"."+(i.getMonth()+1)+"."+i.getDate(),a,["above","below"])}))),this._events.push(h(a,"mouseout",d.hitch(this,function(e){var t=e.target||e.srcElement;t&&dijit.hideTooltip(t)})))},addHourInPanelTime:function(e){var t=g.create("td",{align:"center",vAlign:"middle",className:"ganttHourNumber",data:e.cells.length},e);v.set(t,"width",this.pixelsPerDay+"px");for(var a=g.create("table",{cellPadding:"0",cellSpacing:"0"},t),i=a.insertRow(a.rows.length),n=0;n<this.hsPerDay;n++){var r=g.create("td",{className:"ganttHourClass"},i);v.set(r,"width",this.pixelsPerDay/this.hsPerDay+"px"),y.set(r,"innerHTMLData",String(9+n)),this.pixelsPerDay/this.hsPerDay>5&&y.set(r,"innerHTML",String(9+n)),p.add(r,3>=n?"ganttHourNumberAM":"ganttHourNumberPM")}},incHeightPanelTasks:function(e){var t=this.contentData.firstChild;t.style.height=parseInt(t.style.height)+e+"px"},incHeightPanelNames:function(e){var t=this.panelNames.firstChild;t.style.height=parseInt(t.style.height)+e+"px"},checkPosition:function(){l.forEach(this.arrProjects,function(e){l.forEach(e.arrTasks,function(e){e.checkPosition()},this)},this)},checkHeighPanelTasks:function(){this.contentDataHeight+=this.heightTaskItemExtra+this.heightTaskItem,parseInt(this.contentData.firstChild.style.height)<=this.contentDataHeight&&(this.incHeightPanelTasks(this.heightTaskItem+this.heightTaskItemExtra),this.incHeightPanelNames(this.heightTaskItem+this.heightTaskItemExtra))},sortTasksByStartTime:function(e){e.parentTasks.sort(this.sortTaskStartTime);for(var t=0;t<e.parentTasks.length;t++)e.parentTasks[t]=this.sortChildTasks(e.parentTasks[t])},sortChildTasks:function(e){e.cldTasks.sort(this.sortTaskStartTime);for(var t=0;t<e.cldTasks.length;t++)e.cldTasks[t].cldTasks.length>0&&this.sortChildTasks(e.cldTasks[t]);return e},refresh:function(e,t,a){if(!(this.arrProjects.length<=0||this.arrProjects[0].arrTasks.length<=0)){if(!e||t>e)return this.refreshController(),this.resource&&this.resource.refresh(),this.tempDayInPixels=0,void(this.panelNameHeadersCover&&v.set(this.panelNameHeadersCover,"display","none"));0==this.tempDayInPixels&&(this.tempDayInPixels=this.pixelsPerDay),this.panelNameHeadersCover&&v.set(this.panelNameHeadersCover,"display","");var i=this.tempDayInPixels+this.tempDayInPixels*(a-1)*Math.pow(t/e,2);this.refreshParams(i),l.forEach(this.arrProjects,function(e){l.forEach(e.arrTasks,function(e){e.refresh()},this),e.refresh()},this),setTimeout(d.hitch(this,function(){this.refresh(e,++t,a)}),15)}},switchTeleMicroView:function(e){for(var t=this.panelTime.firstChild.firstChild,a=0;5>a;a++)e>40?v.set(t.rows[a],"display",0==a||1==a?"none":""):20>e?v.set(t.rows[a],"display",2==a||4==a?"none":""):v.set(t.rows[a],"display",0==a||4==a?"none":"")},refreshController:function(){this.contentData.firstChild.style.width=Math.max(1200,this.pixelsPerDay*this.totalDays)+"px",this.panelTime.firstChild.style.width=this.pixelsPerDay*this.totalDays+"px",this.panelTime.firstChild.firstChild.style.width=this.pixelsPerDay*this.totalDays+"px",this.switchTeleMicroView(this.pixelsPerDay),l.forEach(this.panelTime.firstChild.firstChild.rows,function(e){l.forEach(e.childNodes,function(e){var t=parseInt(y.get(e,"colSpan")||1),a=d.trim(y.get(e,"innerHTMLData")||"");a.length>0?y.set(e,"innerHTML",this.pixelsPerDay*t<20?"":a):l.forEach(e.firstChild.rows[0].childNodes,function(e){var t=d.trim(y.get(e,"innerHTMLData")||"");y.set(e,"innerHTML",this.pixelsPerDay/this.hsPerDay>10?t:"")},this),1==t&&(v.set(e,"width",this.pixelsPerDay*t+"px"),a.length<=0&&l.forEach(e.firstChild.rows[0].childNodes,function(e){v.set(e,"width",this.pixelsPerDay*t/this.hsPerDay+"px")},this))},this)},this)},init:function(){this.startDate=this.getStartDate(),v.set(this.content,{width:this.contentWidth+"px",height:this.contentHeight+"px"}),this.tableControl=g.create("table",{cellPadding:"0",cellSpacing:"0",className:"ganttTabelControl"});var e=this.tableControl.insertRow(this.tableControl.rows.length);this.content.appendChild(this.tableControl),this.countDays=this.getCountDays(),this.panelTime=g.create("div",{className:"ganttPanelTimeContainer"}),v.set(this.panelTime,"height",this.panelTimeHeight+"px"),this.panelTime.appendChild(this.createPanelTime()),this.contentData=g.create("div",{className:"ganttContentDataContainer"}),v.set(this.contentData,"height",this.contentHeight-this.panelTimeHeight+"px"),this.contentData.appendChild(this.createPanelTasks());var i=g.create("td",{vAlign:"top"});this.panelNameHeaders=g.create("div",{className:"ganttPanelNameHeaders"},i),v.set(this.panelNameHeaders,{height:this.panelTimeHeight+"px",width:this.maxWidthPanelNames+"px"}),this.panelNameHeaders.appendChild(this.createPanelNamesTasksHeader()),this.panelNames=g.create("div",{className:"ganttPanelNamesContainer"},i),this.panelNames.appendChild(this.createPanelNamesTasks()),e.appendChild(i),i=g.create("td",{vAlign:"top"});var n=g.create("div",{className:"ganttDivCell"});n.appendChild(this.panelTime),n.appendChild(this.contentData),i.appendChild(n),e.appendChild(i),v.set(this.panelNames,"height",this.contentHeight-this.panelTimeHeight-this.scrollBarWidth+"px"),v.set(this.panelNames,"width",this.maxWidthPanelNames+"px"),v.set(this.contentData,"width",this.contentWidth-this.maxWidthPanelNames+"px"),v.set(this.contentData.firstChild,"width",this.pixelsPerDay*this.countDays+"px"),v.set(this.panelTime,"width",this.contentWidth-this.maxWidthPanelNames-this.scrollBarWidth+"px"),v.set(this.panelTime.firstChild,"width",this.pixelsPerDay*this.countDays+"px"),this.isShowConMenu&&(this.tabMenu=new r(this));var o=this;this.contentData.onscroll=function(){o.panelTime.scrollLeft=this.scrollLeft,o.panelNames&&(o.panelNames.scrollTop=this.scrollTop,o.isShowConMenu&&o.tabMenu.hide()),o.resource&&(o.resource.contentData.scrollLeft=this.scrollLeft)},this.project.sort(this.sortProjStartDate);for(var s=0;s<this.project.length;s++){for(var l=this.project[s],d=0;d<l.parentTasks.length;d++){var m=l.parentTasks[d];if(m.startTime||(m.startTime=l.startDate),this.setStartTimeChild(m),this.setPreviousTask(l))return}for(var d=0;d<l.parentTasks.length;d++){var m=l.parentTasks[d];if(m.startTime<l.startDate){if(!this.correctError)return;m.startTime=l.startDate}if(this.checkPosParentTaskInTree(m))return}this.sortTasksByStartTime(l)}for(var s=0;s<this.project.length;s++){var l=this.project[s],c=new a(this,l);if(this.arrProjects.length>0){var u=this.arrProjects[this.arrProjects.length-1];c.previousProject=u,u.nextProject=c}c.create(),this.checkHeighPanelTasks(),this.arrProjects.push(c),this.createTasks(c)}return this.withResource&&(this.resource=new t(this),this.resource.create()),this.postLoadData(),this.postBindEvents(),this},postLoadData:function(){l.forEach(this.arrProjects,function(e){l.forEach(e.arrTasks,function(e){e.postLoadData()},this),e.postLoadData()},this);var e=k.getMarginBox(this.panelNameHeaders);this.panelNameHeadersCover||(this.panelNameHeadersCover=g.create("div",{className:"ganttHeaderCover"},this.panelNameHeaders.parentNode),v.set(this.panelNameHeadersCover,{left:e.l+"px",top:e.t+"px",height:e.h+"px",width:e.w+"px",display:"none"}))},postBindEvents:function(){var e=k.position(this.tableControl,!0);M("dom-addeventlistener")&&this._events.push(h(this.tableControl,"mousemove",d.hitch(this,function(t){var a=t.srcElement||t.target;if(a==this.panelNames.firstChild||a==this.contentData.firstChild){var i=this.heightTaskItem+this.heightTaskItemExtra,n=parseInt(t.layerY/i)*i+this.panelTimeHeight-this.contentData.scrollTop;n!=this.oldHLTop&&n<e.h-50&&(this.highLightDiv?v.set(this.highLightDiv,"top",e.y+n+"px"):(this.highLightDiv=g.create("div",{className:"ganttRowHighlight"},w.body()),v.set(this.highLightDiv,{top:e.y+n+"px",left:e.x+"px",width:e.w-20+"px",height:i+"px"}))),this.oldHLTop=n}})))},getStartDate:function(){return l.forEach(this.project,function(e){this.startDate?e.startDate<this.startDate&&(this.startDate=new Date(e.startDate)):this.startDate=new Date(e.startDate)},this),this.initialPos=24*this.pixelsPerHour,this.startDate?new Date(this.startDate.setHours(this.startDate.getHours()-24)):new Date},getCountDays:function(){return parseInt((this.contentWidth-this.maxWidthPanelNames)/(24*this.pixelsPerHour))},createTasks:function(e){l.forEach(e.project.parentTasks,function(t,a){a>0&&(e.project.parentTasks[a-1].nextParentTask=t,t.previousParentTask=e.project.parentTasks[a-1]);var n=new i(t,e,this);e.arrTasks.push(n),n.create(),this.checkHeighPanelTasks(),t.cldTasks.length>0&&this.createChildItemControls(t.cldTasks,e)},this)},createChildItemControls:function(e,t){e&&l.forEach(e,function(a,n){n>0&&(a.previousChildTask=e[n-1],e[n-1].nextChildTask=a);var r=new i(a,t,this);r.create(),this.checkHeighPanelTasks(),a.cldTasks.length>0&&this.createChildItemControls(a.cldTasks,t)},this)},getPosOnDate:function(e){return(e-this.startDate)/36e5*this.pixelsPerHour},getWidthOnDuration:function(e){return Math.round(this.pixelsPerWorkHour*e)},getLastChildTask:function(e){return e.childTask.length>0?this.getLastChildTask(e.childTask[e.childTask.length-1]):e},removeCell:function(e){for(;e.cells[0];)e.deleteCell(e.cells[0])}})});//# sourceMappingURL=GanttChart.js.map