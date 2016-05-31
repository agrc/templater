//>>built
define("dojox/gantt/GanttTaskControl",["dijit/focus","dojo/_base/declare","dojo/_base/array","dojo/_base/lang","dojo/date/locale","dojo/request","dojo/on","dojo/dom","dojo/dom-class","dojo/dom-construct","dojo/dom-style","dojo/dom-attr","dojo/dom-geometry","dojo/keys","dojo/domReady!"],function(e,t,a,i,r,o,n,s,d,l,h,m,u,c){return t("dojox.gantt.GanttTaskControl",[],{constructor:function(e,t,a){this.ganttChart=a,this.project=t,this.taskItem=e,this.checkMove=!1,this.checkResize=!1,this.moveChild=!1,this.maxPosXMove=-1,this.minPosXMove=-1,this.maxWidthResize=-1,this.minWidthResize=-1,this.posX=0,this.posY=0,this.mouseX=0,this.taskItemWidth=0,this.isHide=!1,this.hideTasksHeight=0,this.isExpanded=!0,this.descrTask=null,this.cTaskItem=null,this.cTaskNameItem=null,this.parentTask=null,this.predTask=null,this.childTask=[],this.childPredTask=[],this.nextChildTask=null,this.previousChildTask=null,this.nextParentTask=null,this.previousParentTask=null},createConnectingLinesPN:function(){var e=[],t=l.create("div",{innerHTML:"&nbsp;",className:"ganttTaskLineVerticalLeft"},this.ganttChart.panelNames.firstChild),a=this.cTaskNameItem[0],i=this.parentTask.cTaskNameItem[0];h.set(t,{height:a.offsetTop-i.offsetTop+"px",top:i.offsetTop+5+"px",left:i.offsetLeft-9+"px"});var r=l.create("div",{noShade:!0,color:"#000000",className:"ganttTaskLineHorizontalLeft"},this.ganttChart.panelNames.firstChild);return h.set(r,{left:i.offsetLeft-9+"px",top:a.offsetTop+5+"px",height:"1px",width:a.offsetLeft-i.offsetLeft+4+"px"}),e.push(t),e.push(r),e},createConnectingLinesDS:function(){var e=this.ganttChart.contentData.firstChild,t=[],a=l.create("div",{className:"ganttImageArrow"}),i=document.createElement("div"),r=document.createElement("div"),o=h.get(this.predTask.cTaskItem[0],"left"),n=h.get(this.predTask.cTaskItem[0],"top"),s=h.get(this.cTaskItem[0],"left"),m=this.posY+2,u=parseInt(this.predTask.cTaskItem[0].firstChild.firstChild.width);return m>n?(d.add(i,"ganttTaskLineVerticalRight"),h.set(i,{height:m-this.ganttChart.heightTaskItem/2-n-3+"px",width:"1px",left:o+u-20+"px",top:n+this.ganttChart.heightTaskItem+"px"}),d.add(r,"ganttTaskLineHorizontal"),h.set(r,{width:15+(s-(u+o))+"px",left:o+u-20+"px",top:m+2+"px"}),d.add(a,"ganttTaskArrowImg"),h.set(a,{left:s-7+"px",top:m-1+"px"})):(d.add(i,"ganttTaskLineVerticalRightPlus"),h.set(i,{height:n+2-m+"px",width:"1px",left:o+u-20+"px",top:m+2+"px"}),d.add(r,"ganttTaskLineHorizontalPlus"),h.set(r,{width:15+(s-(u+o))+"px",left:o+u-20+"px",top:m+2+"px"}),d.add(a,"ganttTaskArrowImgPlus"),h.set(a,{left:s-7+"px",top:m-1+"px"})),e.appendChild(i),e.appendChild(r),e.appendChild(a),t.push(i),t.push(a),t.push(r),t},showChildTasks:function(e,t){if(t)for(var a=0;a<e.childTask.length;a++){var i=e.childTask[a],r=i.cTaskItem[0],o=i.cTaskNameItem[0],n=i.cTaskItem[1],s=i.cTaskNameItem[1],d=i.cTaskNameItem[2];if("none"==r.style.display){r.style.display="inline",o.style.display="inline",i.showDescTask(),e.isHide=!1,d&&(d.style.display="inline",t=i.isExpanded);for(var l=0;l<n.length;l++)n[l].style.display="inline";for(var l=0;l<s.length;l++)s[l].style.display="inline";i.taskIdentifier&&(i.taskIdentifier.style.display="inline"),this.hideTasksHeight+=this.ganttChart.heightTaskItem+this.ganttChart.heightTaskItemExtra,i.childTask.length>0&&this.showChildTasks(i,t)}}},hideChildTasks:function(e){for(var t=0;t<e.childTask.length;t++){var a=e.childTask[t],i=a.cTaskItem[0],r=a.cTaskNameItem[0],o=a.cTaskItem[1],n=a.cTaskNameItem[1],s=a.cTaskNameItem[2];if("none"!=i.style.display){i.style.display="none",r.style.display="none",a.hideDescTask(),e.isHide=!0,s&&(s.style.display="none");for(var d=0;d<o.length;d++)o[d].style.display="none";for(var d=0;d<n.length;d++)n[d].style.display="none";a.taskIdentifier&&(a.taskIdentifier.style.display="none"),this.hideTasksHeight+=this.ganttChart.heightTaskItem+this.ganttChart.heightTaskItemExtra,a.childTask.length>0&&this.hideChildTasks(a)}}},shiftCurrentTasks:function(e,t){this.shiftNextTask(this,t),e.project.shiftNextProject(e.project,t)},shiftTask:function(e,t){e.posY=e.posY+t;var a=e.cTaskItem[0],i=e.cTaskNameItem[0],r=e.cTaskItem[1],o=e.cTaskNameItem[1],n=e.cTaskNameItem[2];i.style.top=parseInt(i.style.top)+t+"px",n&&(n.style.top=parseInt(n.style.top)+t+"px"),e.parentTask&&(parseInt(this.cTaskNameItem[0].style.top)>parseInt(e.parentTask.cTaskNameItem[0].style.top)&&"none"!=o[0].style.display?o[0].style.height=parseInt(o[0].style.height)+t+"px":o[0].style.top=parseInt(o[0].style.top)+t+"px",o[1].style.top=parseInt(o[1].style.top)+t+"px"),a.style.top=parseInt(a.style.top)+t+"px",e.descrTask.style.top=parseInt(e.descrTask.style.top)+t+"px",e.predTask&&((parseInt(this.cTaskItem[0].style.top)>parseInt(e.predTask.cTaskItem[0].style.top)||this.cTaskItem[0].id==e.predTask.taskItem.id)&&"none"!=r[0].style.display?r[0].style.height=parseInt(r[0].style.height)+t+"px":r[0].style.top=parseInt(r[0].style.top)+t+"px",r[1].style.top=parseInt(r[1].style.top)+t+"px",r[2].style.top=parseInt(r[2].style.top)+t+"px")},shiftNextTask:function(e,t){e.nextChildTask?(this.shiftTask(e.nextChildTask,t),this.shiftChildTask(e.nextChildTask,t),this.shiftNextTask(e.nextChildTask,t)):e.parentTask?this.shiftNextTask(e.parentTask,t):e.nextParentTask&&(this.shiftTask(e.nextParentTask,t),this.shiftChildTask(e.nextParentTask,t),this.shiftNextTask(e.nextParentTask,t))},shiftChildTask:function(e,t){a.forEach(e.childTask,function(e){this.shiftTask(e,t),e.childTask.length>0&&this.shiftChildTask(e,t)},this)},endMove:function(){var e=this.cTaskItem[0],t=h.get(e,"left")-this.posX,a=this.getDateOnPosition(h.get(e,"left"));a=this.checkPos(a),this.checkMove&&(t=this.ganttChart.getPosOnDate(a)-this.posX,this.moveCurrentTaskItem(t,this.moveChild),this.project.shiftProjectItem()),this.checkMove=!1,this.posX=0,this.maxPosXMove=-1,this.minPosXMove=-1,e.childNodes[1].firstChild.rows[0].cells[0].innerHTML="",this.adjustPanelTime(),this.ganttChart.resource&&this.ganttChart.resource.refresh()},checkPos:function(e){var t=this.cTaskItem[0],a=e.getHours();return a>=12?(e.setDate(e.getDate()+1),e.setHours(0),parseInt(t.firstChild.firstChild.width)+this.ganttChart.getPosOnDate(e)>this.maxPosXMove&&-1!=this.maxPosXMove&&(e.setDate(e.getDate()-1),e.setHours(0))):12>a&&0!=a&&(e.setHours(0),this.ganttChart.getPosOnDate(e)<this.minPosXMove&&e.setDate(e.getDate()+1)),t.style.left=this.ganttChart.getPosOnDate(e)+"px",e},getMaxPosPredChildTaskItem:function(){for(var e=0,t=0,a=0;a<this.childPredTask.length;a++)t=this.getMaxPosPredChildTaskItemInTree(this.childPredTask[a]),t>e&&(e=t);return e},getMaxPosPredChildTaskItemInTree:function(e){var t=e.cTaskItem[0],i=parseInt(t.firstChild.firstChild.width)+h.get(t,"left"),r=0,o=0;return a.forEach(e.childPredTask,function(e){o=this.getMaxPosPredChildTaskItemInTree(e),o>r&&(r=o)},this),r>i?r:i},moveCurrentTaskItem:function(e,t){var i=this.cTaskItem[0];this.taskItem.startTime=new Date(this.ganttChart.startDate),this.taskItem.startTime.setHours(this.taskItem.startTime.getHours()+parseInt(i.style.left)/this.ganttChart.pixelsPerHour),this.showDescTask();var r=this.cTaskItem[1];r.length>0&&(r[2].style.width=parseInt(r[2].style.width)+e+"px",r[1].style.left=parseInt(r[1].style.left)+e+"px"),a.forEach(this.childTask,function(a){a.predTask||this.moveChildTaskItems(a,e,t)},this),a.forEach(this.childPredTask,function(a){this.moveChildTaskItems(a,e,t)},this)},moveChildTaskItems:function(e,t,i){var r=e.cTaskItem[0];if(i){r.style.left=parseInt(r.style.left)+t+"px",e.adjustPanelTime(),e.taskItem.startTime=new Date(this.ganttChart.startDate),e.taskItem.startTime.setHours(e.taskItem.startTime.getHours()+parseInt(r.style.left)/this.ganttChart.pixelsPerHour);var o=e.cTaskItem[1];a.forEach(o,function(e){e.style.left=parseInt(e.style.left)+t+"px"},this),a.forEach(e.childTask,function(e){e.predTask||this.moveChildTaskItems(e,t,i)},this),a.forEach(e.childPredTask,function(e){this.moveChildTaskItems(e,t,i)},this)}else{var o=e.cTaskItem[1];if(o.length>0){var n=o[0],s=o[2];s.style.left=parseInt(s.style.left)+t+"px",s.style.width=parseInt(s.style.width)-t+"px",n.style.left=parseInt(n.style.left)+t+"px"}}e.moveDescTask()},adjustPanelTime:function(){var e=this.cTaskItem[0],t=parseInt(e.style.left)+parseInt(e.firstChild.firstChild.width)+this.ganttChart.panelTimeExpandDelta;t+=this.descrTask.offsetWidth,this.ganttChart.adjustPanelTime(t)},getDateOnPosition:function(e){var t=new Date(this.ganttChart.startDate);return t.setHours(t.getHours()+e/this.ganttChart.pixelsPerHour),t},moveItem:function(e){var t=e.screenX,a=this.posX+(t-this.mouseX),i=parseInt(this.cTaskItem[0].childNodes[0].firstChild.width),r=a+i;this.checkMove&&this.minPosXMove<=a&&(r<=this.maxPosXMove||-1==this.maxPosXMove)&&this.moveTaskItem(a)},moveTaskItem:function(e){var t=this.cTaskItem[0];t.style.left=e+"px",t.childNodes[1].firstChild.rows[0].cells[0].innerHTML=this.getDateOnPosition(e).getDate()+"."+(this.getDateOnPosition(e).getMonth()+1)+"."+this.getDateOnPosition(e).getUTCFullYear()},resizeItem:function(e){if(this.checkResize){var t=e.screenX,a=this.taskItemWidth+(t-this.mouseX);a>=this.taskItemWidth?a<=this.maxWidthResize||-1==this.maxWidthResize?this.resizeTaskItem(a):-1!=this.maxWidthResize&&a>this.maxWidthResize&&this.resizeTaskItem(this.maxWidthResize):a<=this.taskItemWidth&&(a>=this.minWidthResize?this.resizeTaskItem(a):a<this.minWidthResize&&this.resizeTaskItem(this.minWidthResize))}},resizeTaskItem:function(e){var t=this.cTaskItem[0],a=Math.round(e/this.ganttChart.pixelsPerWorkHour),i=t.childNodes[0].firstChild.rows[0],r=i.cells[0],o=i.cells[1];r&&(r.firstChild.style.width=parseInt(r.width)*e/100+"px"),o&&(o.firstChild.style.width=parseInt(o.width)*e/100+"px"),t.childNodes[0].firstChild.width=e+"px",t.childNodes[1].firstChild.width=e+"px",this.cTaskItem[0].childNodes[1].firstChild.rows[0].cells[0].innerHTML=a;var n=t.childNodes[2];n.childNodes[0].style.width=e+"px",n.childNodes[1].style.left=e-10+"px"},endResizeItem:function(){var e=this.cTaskItem[0];if(this.taskItemWidth!=parseInt(e.childNodes[0].firstChild.width)){var t=e.offsetLeft,a=e.offsetLeft+parseInt(e.childNodes[0].firstChild.width);if(this.taskItem.duration=Math.round((a-t)/this.ganttChart.pixelsPerWorkHour),this.childPredTask.length>0)for(var i=0;i<this.childPredTask.length;i++){var r=this.childPredTask[i].cTaskItem[1],o=r[0],n=r[2],s=e.childNodes[0];n.style.width=parseInt(n.style.width)-(parseInt(s.firstChild.width)-this.taskItemWidth)+"px",n.style.left=parseInt(n.style.left)+(parseInt(s.firstChild.width)-this.taskItemWidth)+"px",o.style.left=parseInt(o.style.left)+(parseInt(s.firstChild.width)-this.taskItemWidth)+"px"}}this.cTaskItem[0].childNodes[1].firstChild.rows[0].cells[0].innerHTML="",this.checkResize=!1,this.taskItemWidth=0,this.mouseX=0,this.showDescTask(),this.project.shiftProjectItem(),this.adjustPanelTime(),this.ganttChart.resource&&this.ganttChart.resource.refresh()},startMove:function(e){this.moveChild=e.ctrlKey,this.mouseX=e.screenX,this.getMoveInfo(),this.checkMove=!0,this.hideDescTask()},showDescTask:function(){var e=parseInt(this.cTaskItem[0].style.left)+this.taskItem.duration*this.ganttChart.pixelsPerWorkHour+10;this.descrTask.style.left=e+"px",this.descrTask.innerHTML=this.objKeyToStr(this.getTaskOwner()),this.descrTask.style.visibility="visible"},hideDescTask:function(){h.set(this.descrTask,"visibility","hidden")},buildResourceInfo:function(e){if(this.childTask&&this.childTask.length>0)for(var t=0;t<this.childTask.length;t++){var a=this.childTask[t];a.buildResourceInfo(e)}if(i.trim(this.taskItem.taskOwner).length>0)for(var r=this.taskItem.taskOwner.split(";"),t=0;t<r.length;t++){var o=r[t];i.trim(o).length<=0||(e[o]?e[o].push(this):e[o]=[this])}},objKeyToStr:function(e,t){var a="";if(t=t||" ",e)for(var i in e)a+=t+i;return a},getTaskOwner:function(){var e={};if(i.trim(this.taskItem.taskOwner).length>0)for(var t=this.taskItem.taskOwner.split(";"),r=0;r<t.length;r++){var o=t[r];e[o]=1}return a.forEach(this.childTask,function(t){i.mixin(e,t.getTaskOwner())},this),e},moveDescTask:function(){var e=parseInt(this.cTaskItem[0].style.left)+this.taskItem.duration*this.ganttChart.pixelsPerWorkHour+10;this.descrTask.style.left=e+"px"},getMoveInfo:function(){this.posX=parseInt(this.cTaskItem[0].style.left);var e=parseInt(this.cTaskItem[0].childNodes[0].firstChild.width),t=this.parentTask?parseInt(this.parentTask.cTaskItem[0].style.left):0,i=this.predTask?parseInt(this.predTask.cTaskItem[0].style.left)+parseInt(this.predTask.cTaskItem[0].childNodes[0].firstChild.width):0,r=this.parentTask?parseInt(this.parentTask.cTaskItem[0].childNodes[0].firstChild.width):0,o=0,n=0,s=0;if(this.childPredTask.length>0){var d=null;a.forEach(this.childPredTask,function(e){(!d||d&&d>parseInt(e.cTaskItem[0].style.left))&&(d=parseInt(e.cTaskItem[0].style.left))},this),o=d}if(this.childTask.length>0){var l=null;a.forEach(this.childTask,function(e){(!l||l&&l>parseInt(e.cTaskItem[0].style.left))&&(l=parseInt(e.cTaskItem[0].style.left))},this),s=l;var d=null;a.forEach(this.childTask,function(e){(!d||d&&d<parseInt(e.cTaskItem[0].style.left)+parseInt(e.cTaskItem[0].firstChild.firstChild.width))&&(d=parseInt(e.cTaskItem[0].style.left)+parseInt(e.cTaskItem[0].firstChild.firstChild.width))},this),n=d}if(this.moveChild){if(t>0&&0==i?(this.minPosXMove=t,this.maxPosXMove=t+r):0==t&&0==i?(this.minPosXMove=this.ganttChart.initialPos,this.maxPosXMove=-1):t>0&&i>0?(this.minPosXMove=i,this.maxPosXMove=t+r):0==t&&i>0&&(this.minPosXMove=i,this.maxPosXMove=-1),this.parentTask&&this.childPredTask.length>0){var d=this.getMaxPosPredChildTaskItem(this),t=parseInt(this.parentTask.cTaskItem[0].style.left)+parseInt(this.parentTask.cTaskItem[0].firstChild.firstChild.width);this.maxPosXMove=this.posX+e+t-d}}else this.childPredTask.length>0&&this.maxPosXMove<o&&(this.maxPosXMove=o),this.childTask.length>0&&(this.childPredTask.length>0&&this.maxPosXMove-e>s&&(this.maxPosXMove=this.maxPosXMove-(this.maxPosXMove-e-s)),this.childPredTask.length>0||(this.maxPosXMove=s+e),this.minPosXMove=n-e),t>0&&(!(this.childPredTask.length>0)&&this.childTask.length>0&&this.maxPosXMove>t+r&&(this.maxPosXMove=t+r),this.minPosXMove<=t&&(this.minPosXMove=t),this.childTask.length>0||this.childPredTask.length>0?!(this.childTask.length>0)&&this.childPredTask.length>0&&t+r>i&&(this.maxPosXMove=o):this.maxPosXMove=t+r),i>0&&this.minPosXMove<=i&&(this.minPosXMove=i),0==i&&0==t&&this.minPosXMove<=this.ganttChart.initialPos&&(this.minPosXMove=this.ganttChart.initialPos)},startResize:function(e){this.mouseX=e.screenX,this.getResizeInfo(),this.hideDescTask(),this.checkResize=!0,this.taskItemWidth=parseInt(this.cTaskItem[0].firstChild.firstChild.width)},getResizeInfo:function(){var e=this.cTaskItem[0],t=this.parentTask?parseInt(this.parentTask.cTaskItem[0].style.left):0,i=this.parentTask?parseInt(this.parentTask.cTaskItem[0].childNodes[0].firstChild.width):0,r=parseInt(e.style.left),o=0,n=0;if(this.childPredTask.length>0){var s=null;a.forEach(this.childPredTask,function(e){(!s||s&&s>parseInt(e.cTaskItem[0].style.left))&&(s=parseInt(e.cTaskItem[0].style.left))},this),o=s}if(this.childTask.length>0){var s=null;a.forEach(this.childTask,function(e){(!s||s&&s<parseInt(e.cTaskItem[0].style.left)+parseInt(e.cTaskItem[0].firstChild.firstChild.width))&&(s=parseInt(e.cTaskItem[0].style.left)+parseInt(e.cTaskItem[0].firstChild.firstChild.width))},this),n=s}if(this.minWidthResize=this.ganttChart.pixelsPerDay,this.childTask.length>0&&(this.minWidthResize=n-r),this.childPredTask.length>0&&!this.parentTask)this.maxWidthResize=o-r;else if(this.childPredTask.length>0&&this.parentTask){var d=t+i-r,l=o-r;this.maxWidthResize=Math.min(d,l)}else 0==this.childPredTask.length&&this.parentTask&&(this.maxWidthResize=t+i-r)},createTaskItem:function(){this.posX=this.ganttChart.getPosOnDate(this.taskItem.startTime);var e=l.create("div",{id:this.taskItem.id,className:"ganttTaskItemControl"});h.set(e,{left:this.posX+"px",top:this.posY+"px"});var t=l.create("div",{className:"ganttTaskDivTaskItem"},e),a=l.create("table",{cellPadding:"0",cellSpacing:"0",width:this.taskItem.duration*this.ganttChart.pixelsPerWorkHour+"px",className:"ganttTaskTblTaskItem"},t),r=a.insertRow(a.rows.length);if(0!=this.taskItem.percentage){var o=l.create("td",{height:this.ganttChart.heightTaskItem+"px",width:this.taskItem.percentage+"%"},r);o.style.lineHeight="1px";var s=l.create("div",{className:"ganttImageTaskProgressFilled"},o);h.set(s,{width:this.taskItem.percentage*this.taskItem.duration*this.ganttChart.pixelsPerWorkHour/100+"px",height:this.ganttChart.heightTaskItem+"px"})}if(100!=this.taskItem.percentage){var o=l.create("td",{height:this.ganttChart.heightTaskItem+"px",width:100-this.taskItem.percentage+"%"},r);o.style.lineHeight="1px";var d=l.create("div",{className:"ganttImageTaskProgressBg"},o);h.set(d,{width:(100-this.taskItem.percentage)*this.taskItem.duration*this.ganttChart.pixelsPerWorkHour/100+"px",height:this.ganttChart.heightTaskItem+"px"})}if(this.ganttChart.isContentEditable){var m=l.create("div",{className:"ganttTaskDivTaskInfo"},e),u=l.create("table",{cellPadding:"0",cellSpacing:"0",height:this.ganttChart.heightTaskItem+"px",width:this.taskItem.duration*this.ganttChart.pixelsPerWorkHour+"px"},m),c=u.insertRow(0),f=(l.create("td",{align:"center",vAlign:"top",height:this.ganttChart.heightTaskItem+"px",className:"ganttMoveInfo"},c),l.create("div",{className:"ganttTaskDivTaskName"},e)),y=l.create("div",{},f);l.create("input",{className:"ganttTaskDivMoveInput",type:"text"},y),h.set(y,{background:"#000000",opacity:0}),h.set(y,{height:this.ganttChart.heightTaskItem+"px",width:this.taskItem.duration*this.ganttChart.pixelsPerWorkHour+"px"});var p=l.create("div",{className:"ganttTaskDivResize"},f);l.create("input",{className:"ganttTaskDivResizeInput",type:"text"},p),h.set(p,{left:this.taskItem.duration*this.ganttChart.pixelsPerWorkHour-10+"px",height:this.ganttChart.heightTaskItem+"px",width:"10px"}),this.ganttChart._events.push(n(y,"mousedown",i.hitch(this,function(e){this.moveMoveConn=n(document,"mousemove",i.hitch(this,function(e){this.checkMove&&this.moveItem(e)})),this.moveUpConn=n(document,"mouseup",i.hitch(this,function(){this.checkMove&&(this.endMove(),this.ganttChart.isMoving=!1,document.body.releaseCapture&&document.body.releaseCapture(),this.moveMoveConn.remove(),this.moveUpConn.remove())})),this.startMove(e),this.ganttChart.isMoving=!0,document.body.setCapture&&document.body.setCapture(!1)}))),this.ganttChart._events.push(n(y,"mouseover",i.hitch(this,function(e){e.target&&(e.target.style.cursor="move")}))),this.ganttChart._events.push(n(y,"mouseout",i.hitch(this,function(e){e.target.style.cursor=""}))),this.ganttChart._events.push(n(p,"mousedown",i.hitch(this,function(e){this.resizeMoveConn=n(document,"mousemove",i.hitch(this,function(e){this.checkResize&&this.resizeItem(e)})),this.resizeUpConn=n(document,"mouseup",i.hitch(this,function(){this.checkResize&&(this.endResizeItem(),this.ganttChart.isResizing=!1,document.body.releaseCapture&&document.body.releaseCapture(),this.resizeMoveConn.remove(),this.resizeUpConn.remove())})),this.startResize(e),this.ganttChart.isResizing=!0,document.body.setCapture&&document.body.setCapture(!1)}))),this.ganttChart._events.push(n(p,"mouseover",i.hitch(this,function(e){!this.ganttChart.isMoving&&!this.ganttChart.isResizing&&e.target&&(e.target.style.cursor="e-resize")}))),this.ganttChart._events.push(n(p,"mouseout",i.hitch(this,function(e){!this.checkResize&&e.target&&(e.target.style.cursor="")})))}return e},createTaskNameItem:function(){var t=l.create("div",{id:this.taskItem.id,className:"ganttTaskTaskNameItem",title:this.taskItem.name+", id: "+this.taskItem.id+" ",innerHTML:this.taskItem.name});return h.set(t,"top",this.posY+"px"),m.set(t,"tabIndex",0),this.ganttChart.isShowConMenu&&(this.ganttChart._events.push(n(t,"mouseover",i.hitch(this,function(e){d.add(t,"ganttTaskTaskNameItemHover"),clearTimeout(this.ganttChart.menuTimer),this.ganttChart.tabMenu.clear(),this.ganttChart.tabMenu.show(e.target,this)}))),this.ganttChart._events.push(n(t,"keydown",i.hitch(this,function(t){t.keyCode==c.ENTER&&(this.ganttChart.tabMenu.clear(),this.ganttChart.tabMenu.show(t.target,this)),!this.ganttChart.tabMenu.isShow||t.keyCode!=c.LEFT_ARROW&&t.keyCode!=c.RIGHT_ARROW||e(this.ganttChart.tabMenu.menuPanel.firstChild.rows[0].cells[0]),this.ganttChart.tabMenu.isShow&&t.keyCode==c.ESCAPE&&this.ganttChart.tabMenu.hide()}))),this.ganttChart._events.push(n(t,"mouseout",i.hitch(this,function(){d.remove(t,"ganttTaskTaskNameItemHover"),clearTimeout(this.ganttChart.menuTimer),this.ganttChart.menuTimer=setTimeout(i.hitch(this,function(){this.ganttChart.tabMenu.hide()}),200)}))),this.ganttChart._events.push(n(this.ganttChart.tabMenu.menuPanel,"mouseover",i.hitch(this,function(){clearTimeout(this.ganttChart.menuTimer)}))),this.ganttChart._events.push(n(this.ganttChart.tabMenu.menuPanel,"keydown",i.hitch(this,function(e){this.ganttChart.tabMenu.isShow&&e.keyCode==c.ESCAPE&&this.ganttChart.tabMenu.hide()}))),this.ganttChart._events.push(n(this.ganttChart.tabMenu.menuPanel,"mouseout",i.hitch(this,function(){clearTimeout(this.ganttChart.menuTimer),this.ganttChart.menuTimer=setTimeout(i.hitch(this,function(){this.ganttChart.tabMenu.hide()}),200)})))),t},createTaskDescItem:function(){var e=this.posX+this.taskItem.duration*this.ganttChart.pixelsPerWorkHour+10,t=l.create("div",{innerHTML:this.objKeyToStr(this.getTaskOwner()),className:"ganttTaskDescTask"});return h.set(t,{left:e+"px",top:this.posY+"px"}),this.descrTask=t},checkWidthTaskNameItem:function(){if(this.cTaskNameItem[0].offsetWidth+this.cTaskNameItem[0].offsetLeft>this.ganttChart.maxWidthTaskNames){var e=this.cTaskNameItem[0].offsetWidth+this.cTaskNameItem[0].offsetLeft-this.ganttChart.maxWidthTaskNames,t=Math.round(e/(this.cTaskNameItem[0].offsetWidth/this.cTaskNameItem[0].firstChild.length)),a=this.taskItem.name.substring(0,this.cTaskNameItem[0].firstChild.length-t-3);a+="...",this.cTaskNameItem[0].innerHTML=a}},refreshTaskItem:function(e){this.posX=this.ganttChart.getPosOnDate(this.taskItem.startTime),h.set(e,{left:this.posX+"px"});var t=e.childNodes[0],a=t.firstChild;a.width=(this.taskItem.duration?this.taskItem.duration*this.ganttChart.pixelsPerWorkHour:1)+"px";var i=a.rows[0];if(0!=this.taskItem.percentage){var r=i.firstChild;r.height=this.ganttChart.heightTaskItem+"px",r.width=this.taskItem.percentage+"%",r.style.lineHeight="1px";var o=r.firstChild;h.set(o,{width:(this.taskItem.duration?this.taskItem.percentage*this.taskItem.duration*this.ganttChart.pixelsPerWorkHour/100:1)+"px",height:this.ganttChart.heightTaskItem+"px"})}if(100!=this.taskItem.percentage){var r=i.lastChild;r.height=this.ganttChart.heightTaskItem+"px",r.width=100-this.taskItem.percentage+"%",r.style.lineHeight="1px";var n=r.firstChild;h.set(n,{width:(this.taskItem.duration?(100-this.taskItem.percentage)*this.taskItem.duration*this.ganttChart.pixelsPerWorkHour/100:1)+"px",height:this.ganttChart.heightTaskItem+"px"})}if(this.ganttChart.isContentEditable){var s=e.childNodes[1],d=s.firstChild;d.height=this.ganttChart.heightTaskItem+"px",d.width=(this.taskItem.duration?this.taskItem.duration*this.ganttChart.pixelsPerWorkHour:1)+"px";var l=d.rows[0],m=l.firstChild;m.height=this.ganttChart.heightTaskItem+"px";var u=e.childNodes[2],c=u.firstChild;c.style.height=this.ganttChart.heightTaskItem+"px",c.style.width=(this.taskItem.duration?this.taskItem.duration*this.ganttChart.pixelsPerWorkHour:1)+"px";var f=u.lastChild;h.set(f,{left:this.taskItem.duration*this.ganttChart.pixelsPerWorkHour-10+"px"}),f.style.height=this.ganttChart.heightTaskItem+"px",f.style.width="10px"}return e},refreshTaskDesc:function(e){var t=this.posX+this.taskItem.duration*this.ganttChart.pixelsPerWorkHour+10;return h.set(e,{left:t+"px"}),e},refreshConnectingLinesDS:function(e){var t=e[1],a=e[0],i=e[2],r=h.get(this.predTask.cTaskItem[0],"left"),o=h.get(this.predTask.cTaskItem[0],"top"),n=h.get(this.cTaskItem[0],"left"),s=this.posY+2,d=parseInt(this.predTask.cTaskItem[0].firstChild.firstChild.width);return s>o?(h.set(a,{height:s-this.ganttChart.heightTaskItem/2-o-3+"px",left:r+d-20+"px"}),h.set(i,{width:15+(n-(d+r))+"px",left:r+d-20+"px"}),h.set(t,{left:n-7+"px"})):(h.set(a,{height:o+2-s+"px",left:r+d-20+"px"}),h.set(i,{width:15+(n-(d+r))+"px",left:r+d-20+"px"}),h.set(t,{left:n-7+"px"})),e},postLoadData:function(){},refresh:function(){return this.childTask&&this.childTask.length>0&&a.forEach(this.childTask,function(e){e.refresh()},this),this.refreshTaskItem(this.cTaskItem[0]),this.refreshTaskDesc(this.cTaskItem[0].nextSibling),this.taskItem.previousTask&&this.predTask&&this.refreshConnectingLinesDS(this.cTaskItem[1]),this},create:function(){var e=this.ganttChart.contentData.firstChild,t=this.taskItem.previousTask,a=this.taskItem.parentTask,i=this.taskItem.cldTasks.length>0;if(this.cTaskItem=[],this.cTaskNameItem=[],!a)if(this.taskItem.previousParentTask){this.previousParentTask=this.project.getTaskById(this.taskItem.previousParentTask.id);var r=this.ganttChart.getLastChildTask(this.previousParentTask);this.posY=parseInt(r.cTaskItem[0].style.top)+this.ganttChart.heightTaskItem+this.ganttChart.heightTaskItemExtra,this.previousParentTask.nextParentTask=this}else this.posY=parseInt(this.project.projectItem[0].style.top)+this.ganttChart.heightTaskItem+this.ganttChart.heightTaskItemExtra;if(a){var o=this.project.getTaskById(this.taskItem.parentTask.id);if(this.parentTask=o,this.taskItem.previousChildTask){this.previousChildTask=this.project.getTaskById(this.taskItem.previousChildTask.id);var r=this.ganttChart.getLastChildTask(this.previousChildTask);this.posY=h.get(r.cTaskItem[0],"top")+this.ganttChart.heightTaskItem+this.ganttChart.heightTaskItemExtra,this.previousChildTask.nextChildTask=this}else this.posY=h.get(o.cTaskItem[0],"top")+this.ganttChart.heightTaskItem+this.ganttChart.heightTaskItemExtra;o.childTask.push(this)}if(t){var o=this.project.getTaskById(t.id);this.predTask=o,o.childPredTask.push(this)}this.cTaskItem.push(this.createTaskItem()),e.appendChild(this.cTaskItem[0]),this.ganttChart.panelNames&&(this.cTaskNameItem.push(this.createTaskNameItem()),this.ganttChart.panelNames.firstChild.appendChild(this.cTaskNameItem[0])),e.appendChild(this.createTaskDescItem());var n=[];if(t&&(n=this.createConnectingLinesDS()),this.cTaskItem.push(n),this.ganttChart.panelNames){var s=[];a&&(this.cTaskNameItem[0].style.left=h.get(this.parentTask.cTaskNameItem[0],"left")+15+"px",s=this.createConnectingLinesPN()),this.checkWidthTaskNameItem(),this.checkPosition();var d=null;i&&(d=this.createTreeImg()),this.cTaskNameItem.push(s),this.cTaskNameItem.push(d)}return this.adjustPanelTime(),this},checkPosition:function(){if(this.ganttChart.withTaskId){var e=u.getMarginBox(this.cTaskNameItem[0],!0);this.taskIdentifier?(this.childTask&&this.childTask.length>0&&a.forEach(this.childTask,function(e){e.checkPosition()},this),h.set(this.taskIdentifier,{left:e.l+e.w+4+"px",top:e.t-1+"px"})):(this.taskIdentifier=l.create("div",{id:"TaskId_"+this.taskItem.id,className:"ganttTaskIdentifier",title:this.taskItem.id,innerHTML:this.taskItem.id},this.cTaskNameItem[0].parentNode),h.set(this.taskIdentifier,{left:e.l+e.w+4+"px",top:e.t-1+"px"}))}},createTreeImg:function(){var e=l.create("div",{id:this.taskItem.id,className:"ganttImageTreeCollapse"});return m.set(e,"tabIndex",0),a.forEach(["click","keydown"],function(t){this.ganttChart._events.push(n(e,t,i.hitch(this,function(a){"keydown"==t&&a.keyCode!=c.ENTER||(this.isExpanded?(d.remove(e,"ganttImageTreeCollapse"),d.add(e,"ganttImageTreeExpand"),this.isExpanded=!1,this.hideChildTasks(this),this.shiftCurrentTasks(this,-this.hideTasksHeight),this.ganttChart.checkPosition()):(d.remove(e,"ganttImageTreeExpand"),d.add(e,"ganttImageTreeCollapse"),this.isExpanded=!0,this.shiftCurrentTasks(this,this.hideTasksHeight),this.showChildTasks(this,!0),this.hideTasksHeight=0,this.ganttChart.checkPosition()))})))},this),this.ganttChart.panelNames.firstChild.appendChild(e),d.add(e,"ganttTaskTreeImage"),h.set(e,{left:h.get(this.cTaskNameItem[0],"left")-12+"px",top:h.get(this.cTaskNameItem[0],"top")+3+"px"}),e},setPreviousTask:function(e){if(""==e)this.clearPredTask();else{var t=this.taskItem;if(t.id==e)return!1;var a=this.project.getTaskById(e);if(!a)return!1;var i=a.taskItem,r=null==i.parentTask,o=null==t.parentTask;if(r&&!o||!r&&o||!r&&!o&&i.parentTask.id!=t.parentTask.id)return!1;var n=t.startTime.getTime(),s=i.startTime.getTime(),d=24*i.duration*60*60*1e3/a.ganttChart.hsPerDay;if(s+d>n)return!1;this.clearPredTask(),this.ganttChart.checkPosPreviousTask(i,t)||this.ganttChart.correctPosPreviousTask(i,t,this),t.previousTaskId=e,t.previousTask=i,this.predTask=a,a.childPredTask.push(this),this.cTaskItem[1]=this.createConnectingLinesDS()}return!0},clearPredTask:function(){if(this.predTask){for(var e=this.predTask.childPredTask,t=0;t<e.length;t++)if(e[t]==this){e.splice(t,1);break}for(var t=0;t<this.cTaskItem[1].length;t++)this.cTaskItem[1][t].parentNode.removeChild(this.cTaskItem[1][t]);this.cTaskItem[1]=[],this.taskItem.previousTaskId=null,this.taskItem.previousTask=null,this.predTask=null}},setStartTime:function(e,t){this.moveChild=t,this.getMoveInfo();var a=this.ganttChart.getPosOnDate(e);if(parseInt(this.cTaskItem[0].firstChild.firstChild.width)+a>this.maxPosXMove&&-1!=this.maxPosXMove)return this.maxPosXMove=-1,this.minPosXMove=-1,!1;if(a<this.minPosXMove)return this.maxPosXMove=-1,this.minPosXMove=-1,!1;this.cTaskItem[0].style.left=a;var i=a-this.posX;return this.moveCurrentTaskItem(i,t),this.project.shiftProjectItem(),this.descrTask.innerHTML=this.objKeyToStr(this.getTaskOwner()),this.adjustPanelTime(),this.posX=0,this.maxPosXMove=-1,this.minPosXMove=-1,!0},setDuration:function(e){this.getResizeInfo();var t=this.ganttChart.getWidthOnDuration(e);return t>this.maxWidthResize&&-1!=this.maxWidthResize?!1:t<this.minWidthResize?!1:(this.taskItemWidth=parseInt(this.cTaskItem[0].firstChild.firstChild.width),this.resizeTaskItem(t),this.endResizeItem(),this.descrTask.innerHTML=this.objKeyToStr(this.getTaskOwner()),!0)},setTaskOwner:function(e){return e=null==e||void 0==e?"":e,this.taskItem.taskOwner=e,this.descrTask.innerHTML=this.objKeyToStr(this.getTaskOwner()),!0},setPercentCompleted:function(e){if(e=parseInt(e),isNaN(e)||e>100||0>e)return!1;var t=this.cTaskItem[0].childNodes[0].firstChild.rows[0],a=t.cells[0],i=t.cells[1];if(0!=e&&100!=e){if(0!=this.taskItem.percentage&&100!=this.taskItem.percentage)a.width=e+"%",i.width=100-e+"%";else if(0==this.taskItem.percentage||100==this.taskItem.percentage){a.parentNode.removeChild(a);var r=l.create("td",{height:this.ganttChart.heightTaskItem+"px",width:e+"%"},t);r.style.lineHeight="1px";var o=l.create("div",{className:"ganttImageTaskProgressFilled"},r);h.set(o,{width:e*this.taskItem.duration*this.ganttChart.pixelsPerWorkHour/100+"px",height:this.ganttChart.heightTaskItem+"px"}),r=l.create("td",{height:this.ganttChart.heightTaskItem+"px",width:100-e+"%"},t),r.style.lineHeight="1px",o=l.create("div",{className:"ganttImageTaskProgressBg"},r),h.set(o,{width:(100-e)*this.taskItem.duration*this.ganttChart.pixelsPerWorkHour/100+"px",height:this.ganttChart.heightTaskItem+"px"})}}else 0==e?0!=this.taskItem.percentage&&100!=this.taskItem.percentage?(a.parentNode.removeChild(a),i.width="100%"):(d.remove(a.firstChild,"ganttImageTaskProgressFilled"),d.add(a.firstChild,"ganttImageTaskProgressBg")):100==e&&(0!=this.taskItem.percentage&&100!=this.taskItem.percentage?(i.parentNode.removeChild(i),a.width="100%"):(d.remove(a.firstChild,"ganttImageTaskProgressBg"),d.add(a.firstChild,"ganttImageTaskProgressFilled")));return this.taskItem.percentage=e,this.taskItemWidth=parseInt(this.cTaskItem[0].firstChild.firstChild.width),this.resizeTaskItem(this.taskItemWidth),this.endResizeItem(),this.descrTask.innerHTML=this.objKeyToStr(this.getTaskOwner()),!0},setName:function(e){e&&(this.taskItem.name=e,this.cTaskNameItem[0].innerHTML=e,this.cTaskNameItem[0].title=e,this.checkWidthTaskNameItem(),this.checkPosition(),
this.descrTask.innerHTML=this.objKeyToStr(this.getTaskOwner()),this.adjustPanelTime())}})});//# sourceMappingURL=GanttTaskControl.js.map