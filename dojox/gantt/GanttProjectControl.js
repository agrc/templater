//>>built
define("dojox/gantt/GanttProjectControl",["./GanttTaskItem","./GanttTaskControl","dijit/focus","dojo/_base/declare","dojo/_base/array","dojo/_base/lang","dojo/date/locale","dojo/request","dojo/on","dojo/dom","dojo/dom-class","dojo/dom-construct","dojo/dom-style","dojo/dom-attr","dojo/dom-geometry","dojo/keys","dojo/domReady!"],function(e,t,a,i,r,o,n,d,s,l,m,c,u,h,f,y){return i("dojox.gantt.GanttProjectControl",[],{constructor:function(e,t){this.project=t,this.ganttChart=e,this.descrProject=null,this.projectItem=null,this.projectNameItem=null,this.posY=0,this.posX=0,this.nextProject=null,this.previousProject=null,this.arrTasks=[],this.percentage=0,this.duration=0},checkWidthProjectNameItem:function(){if(this.projectNameItem.offsetWidth+this.projectNameItem.offsetLeft>this.ganttChart.maxWidthTaskNames){var e=this.projectNameItem.offsetWidth+this.projectNameItem.offsetLeft-this.ganttChart.maxWidthTaskNames,t=Math.round(e/(this.projectNameItem.offsetWidth/this.projectNameItem.firstChild.length)),a=this.project.name.substring(0,this.projectNameItem.firstChild.length-t-3);a+="...",this.projectNameItem.innerHTML=a}},refreshProjectItem:function(e){this.percentage=this.getPercentCompleted(),u.set(e,{left:this.posX+"px",width:this.duration*this.ganttChart.pixelsPerWorkHour+"px"});var t=e.firstChild,a=this.duration*this.ganttChart.pixelsPerWorkHour;t.width=(0==a?1:a)+"px",t.style.width=(0==a?1:a)+"px";var i=t.rows[0];if(-1!=this.percentage){if(0!=this.percentage){var r=i.firstChild;r.width=this.percentage+"%";var o=r.firstChild;u.set(o,{width:(this.duration?this.percentage*this.duration*this.ganttChart.pixelsPerWorkHour/100:1)+"px",height:this.ganttChart.heightTaskItem+"px"})}if(100!=this.percentage){var r=i.lastChild;r.width=100-this.percentage+"%";var o=r.firstChild;u.set(o,{width:(this.duration?(100-this.percentage)*this.duration*this.ganttChart.pixelsPerWorkHour/100:1)+"px",height:this.ganttChart.heightTaskItem+"px"})}}else{var r=i.firstChild;r.width="1px";var o=r.firstChild;u.set(o,{width:"1px",height:this.ganttChart.heightTaskItem+"px"})}var n=e.lastChild,d=n.firstChild;u.set(d,{height:this.ganttChart.heightTaskItem+"px",width:(this.duration?this.duration*this.ganttChart.pixelsPerWorkHour:1)+"px"});var s=d.rows[0],l=s.firstChild;return l.height=this.ganttChart.heightTaskItem+"px",0==this.project.parentTasks.length&&(e.style.display="none"),e},refreshDescrProject:function(e){var t=this.posX+this.duration*this.ganttChart.pixelsPerWorkHour+10;return u.set(e,{left:t+"px"}),0==this.project.parentTasks.length&&(this.descrProject.style.visibility="hidden"),e},postLoadData:function(){},refresh:function(){return this.posX=(this.project.startDate-this.ganttChart.startDate)/36e5*this.ganttChart.pixelsPerHour,this.refreshProjectItem(this.projectItem[0]),this.refreshDescrProject(this.projectItem[0].nextSibling),this},create:function(){var e=this.ganttChart.contentData.firstChild;if(this.posX=(this.project.startDate-this.ganttChart.startDate)/36e5*this.ganttChart.pixelsPerHour,this.previousProject)if(this.previousProject.arrTasks.length>0){var t=this.ganttChart.getLastChildTask(this.previousProject.arrTasks[this.previousProject.arrTasks.length-1]);this.posY=parseInt(t.cTaskItem[0].style.top)+this.ganttChart.heightTaskItem+this.ganttChart.heightTaskItemExtra}else this.posY=parseInt(this.previousProject.projectItem[0].style.top)+this.ganttChart.heightTaskItem+this.ganttChart.heightTaskItemExtra;else this.posY=6;var a=this.ganttChart.panelNames.firstChild;this.projectNameItem=this.createProjectNameItem(),a.appendChild(this.projectNameItem),this.checkWidthProjectNameItem(),this.projectItem=[this.createProjectItem(),[]],e.appendChild(this.projectItem[0]),e.appendChild(this.createDescrProject()),this.adjustPanelTime()},getTaskById:function(e){for(var t=0;t<this.arrTasks.length;t++){var a=this.arrTasks[t],i=this.searchTaskInTree(a,e);if(i)return i}return null},searchTaskInTree:function(e,t){if(e.taskItem.id==t)return e;for(var a=0;a<e.childTask.length;a++){var i=e.childTask[a];if(i.taskItem.id==t)return i;if(i.childTask.length>0){var i=this.searchTaskInTree(i,t);if(i)return i}}return null},shiftProjectItem:function(){for(var e=null,t=null,a=parseInt(this.projectItem[0].style.left),i=0;i<this.arrTasks.length;i++){var r=this.arrTasks[i],o=parseInt(r.cTaskItem[0].style.left),n=parseInt(r.cTaskItem[0].style.left)+parseInt(r.cTaskItem[0].firstChild.firstChild.width);e||(e=o),t||(t=n),e>o&&(e=o),n>t&&(t=n)}e!=a&&(this.project.startDate=new Date(this.ganttChart.startDate),this.project.startDate.setHours(this.project.startDate.getHours()+e/this.ganttChart.pixelsPerHour)),this.projectItem[0].style.left=e+"px",this.resizeProjectItem(t-e),this.duration=Math.round(parseInt(this.projectItem[0].firstChild.width)/this.ganttChart.pixelsPerWorkHour),this.shiftDescrProject(),this.adjustPanelTime()},adjustPanelTime:function(){var e=this.projectItem[0],t=parseInt(e.style.left)+parseInt(e.firstChild.style.width)+this.ganttChart.panelTimeExpandDelta;t+=this.descrProject.offsetWidth,this.ganttChart.adjustPanelTime(t)},resizeProjectItem:function(e){var t=this.percentage,a=this.projectItem[0];if(t>0&&100>t){a.firstChild.style.width=e+"px",a.firstChild.width=e+"px",a.style.width=e+"px";var i=a.firstChild.rows[0];i.cells[0].firstChild.style.width=Math.round(e*t/100)+"px",i.cells[0].firstChild.style.height=this.ganttChart.heightTaskItem+"px",i.cells[1].firstChild.style.width=Math.round(e*(100-t)/100)+"px",i.cells[1].firstChild.style.height=this.ganttChart.heightTaskItem+"px",a.lastChild.firstChild.width=e+"px"}else if(0==t||100==t){a.firstChild.style.width=e+"px",a.firstChild.width=e+"px",a.style.width=e+"px";var i=a.firstChild.rows[0];i.cells[0].firstChild.style.width=e+"px",i.cells[0].firstChild.style.height=this.ganttChart.heightTaskItem+"px",a.lastChild.firstChild.width=e+"px"}},shiftDescrProject:function(){var e=parseInt(this.projectItem[0].style.left)+this.duration*this.ganttChart.pixelsPerWorkHour+10;this.descrProject.style.left=e+"px",this.descrProject.innerHTML=this.getDescStr()},showDescrProject:function(){var e=parseInt(this.projectItem[0].style.left)+this.duration*this.ganttChart.pixelsPerWorkHour+10;this.descrProject.style.left=e+"px",this.descrProject.style.visibility="visible",this.descrProject.innerHTML=this.getDescStr()},hideDescrProject:function(){this.descrProject.style.visibility="hidden"},getDescStr:function(){return this.duration/this.ganttChart.hsPerDay+" days,  "+this.duration+" hours"},createDescrProject:function(){var e=this.posX+this.duration*this.ganttChart.pixelsPerWorkHour+10,t=c.create("div",{innerHTML:this.getDescStr(),className:"ganttDescProject"});return u.set(t,{left:e+"px",top:this.posY+"px"}),this.descrProject=t,0==this.project.parentTasks.length&&(this.descrProject.style.visibility="hidden"),t},createProjectItem:function(){this.percentage=this.getPercentCompleted(),this.duration=this.getDuration();var e=c.create("div",{id:this.project.id,className:"ganttProjectItem"});u.set(e,{left:this.posX+"px",top:this.posY+"px",width:this.duration*this.ganttChart.pixelsPerWorkHour+"px"});var t=c.create("table",{cellPadding:"0",cellSpacing:"0",className:"ganttTblProjectItem"},e),a=this.duration*this.ganttChart.pixelsPerWorkHour;t.width=(0==a?1:a)+"px",t.style.width=(0==a?1:a)+"px";var i=t.insertRow(t.rows.length);if(-1!=this.percentage){if(0!=this.percentage){var r=c.create("td",{width:this.percentage+"%"},i);r.style.lineHeight="1px";var o=c.create("div",{className:"ganttImageProgressFilled"},r);u.set(o,{width:this.percentage*this.duration*this.ganttChart.pixelsPerWorkHour/100+"px",height:this.ganttChart.heightTaskItem+"px"})}if(100!=this.percentage){var r=c.create("td",{width:100-this.percentage+"%"},i);r.style.lineHeight="1px";var o=c.create("div",{className:"ganttImageProgressBg"},r);u.set(o,{width:(100-this.percentage)*this.duration*this.ganttChart.pixelsPerWorkHour/100+"px",height:this.ganttChart.heightTaskItem+"px"})}}else{var r=c.create("td",{width:"1px"},i);r.style.lineHeight="1px";var o=c.create("div",{className:"ganttImageProgressBg"},r);u.set(o,{width:"1px",height:this.ganttChart.heightTaskItem+"px"})}var n=c.create("div",{className:"ganttDivTaskInfo"}),d=c.create("table",{cellPadding:"0",cellSpacing:"0",height:this.ganttChart.heightTaskItem+"px",width:(this.duration*this.ganttChart.pixelsPerWorkHour==0?1:this.duration*this.ganttChart.pixelsPerWorkHour)+"px"},n),s=d.insertRow(0);return c.create("td",{align:"center",vAlign:"top",height:this.ganttChart.heightTaskItem+"px",className:"ganttMoveInfo"},s),e.appendChild(n),0==this.project.parentTasks.length&&(e.style.display="none"),e},createProjectNameItem:function(){var e=c.create("div",{className:"ganttProjectNameItem",innerHTML:this.project.name,title:this.project.name});return u.set(e,{left:"5px",top:this.posY+"px"}),h.set(e,"tabIndex",0),this.ganttChart.isShowConMenu&&(this.ganttChart._events.push(s(e,"mouseover",o.hitch(this,function(t){m.add(e,"ganttProjectNameItemHover"),clearTimeout(this.ganttChart.menuTimer),this.ganttChart.tabMenu.clear(),this.ganttChart.tabMenu.show(t.target,this)}))),this.ganttChart._events.push(s(e,"keydown",o.hitch(this,function(e){e.keyCode==y.ENTER&&(this.ganttChart.tabMenu.clear(),this.ganttChart.tabMenu.show(e.target,this)),!this.ganttChart.tabMenu.isShow||e.keyCode!=y.LEFT_ARROW&&e.keyCode!=y.RIGHT_ARROW||a(this.ganttChart.tabMenu.menuPanel.firstChild.rows[0].cells[0]),this.ganttChart.tabMenu.isShow&&e.keyCode==y.ESCAPE&&this.ganttChart.tabMenu.hide()}))),this.ganttChart._events.push(s(e,"mouseout",o.hitch(this,function(){m.remove(e,"ganttProjectNameItemHover"),clearTimeout(this.ganttChart.menuTimer),this.ganttChart.menuTimer=setTimeout(o.hitch(this,function(){this.ganttChart.tabMenu.hide()}),200)}))),this.ganttChart._events.push(s(this.ganttChart.tabMenu.menuPanel,"mouseover",o.hitch(this,function(){clearTimeout(this.ganttChart.menuTimer)}))),this.ganttChart._events.push(s(this.ganttChart.tabMenu.menuPanel,"keydown",o.hitch(this,function(){this.ganttChart.tabMenu.isShow&&event.keyCode==y.ESCAPE&&this.ganttChart.tabMenu.hide()}))),this.ganttChart._events.push(s(this.ganttChart.tabMenu.menuPanel,"mouseout",o.hitch(this,function(){clearTimeout(this.ganttChart.menuTimer),this.ganttChart.menuTimer=setTimeout(o.hitch(this,function(){this.ganttChart.tabMenu.hide()}),200)})))),e},getPercentCompleted:function(){var e=0;return r.forEach(this.project.parentTasks,function(t){e+=parseInt(t.percentage)},this),0!=this.project.parentTasks.length?Math.round(e/this.project.parentTasks.length):-1},getDuration:function(){var e=0,t=0;return this.project.parentTasks.length>0?(r.forEach(this.project.parentTasks,function(a){t=24*a.duration/this.ganttChart.hsPerDay+(a.startTime-this.ganttChart.startDate)/36e5,t>e&&(e=t)},this),(e-this.posX)/24*this.ganttChart.hsPerDay):0},deleteTask:function(e){var t=this.getTaskById(e);t&&(this.deleteChildTask(t),this.ganttChart.checkPosition())},setName:function(e){e&&(this.project.name=e,this.projectNameItem.innerHTML=e,this.projectNameItem.title=e,this.checkWidthProjectNameItem(),this.descrProject.innerHTML=this.getDescStr(),this.adjustPanelTime())},setPercentCompleted:function(e){if(e=parseInt(e),isNaN(e)||e>100||0>e)return!1;var t=this.projectItem[0].firstChild.rows[0],a=t.cells[0],i=t.cells[1];if(e>0&&100>e&&this.percentage>0&&this.percentage<100)a.width=parseInt(e)+"%",a.firstChild.style.width=e*this.duration*this.ganttChart.pixelsPerWorkHour/100+"px",i.width=100-parseInt(e)+"%",i.firstChild.style.width=(100-e)*this.duration*this.ganttChart.pixelsPerWorkHour/100+"px";else if((0==e||100==e)&&this.percentage>0&&this.percentage<100)0==e?(a.parentNode.removeChild(a),i.width="100%",i.firstChild.style.width=this.duration*this.ganttChart.pixelsPerWorkHour+"px"):100==e&&(i.parentNode.removeChild(i),a.width="100%",a.firstChild.style.width=this.duration*this.ganttChart.pixelsPerWorkHour+"px");else if(0!=e&&100!=e||0!=this.percentage&&100!=this.percentage)if(!(e>0||100>e)||0!=this.percentage&&100!=this.percentage){if(-1==this.percentage)if(100==e)m.remove(a.firstChild,"ganttImageProgressBg"),m.add(a.firstChild,"ganttImageProgressFilled");else if(100>e&&e>0){a.parentNode.removeChild(a);var r=c.create("td",{width:e+"%"},t);r.style.lineHeight="1px",o=c.create("div",{className:"ganttImageProgressFilled"},r),u.set(o,{width:e*this.duration*this.ganttChart.pixelsPerWorkHour/100+"px",height:this.ganttChart.heightTaskItem+"px"}),r=c.create("td",{width:100-e+"%"},t),r.style.lineHeight="1px",o=c.create("div",{className:"ganttImageProgressBg"},r),u.set(o,{width:(100-e)*this.duration*this.ganttChart.pixelsPerWorkHour/100+"px",height:this.ganttChart.heightTaskItem+"px"})}}else{a.parentNode.removeChild(a);var r=c.create("td",{width:e+"%"},t);r.style.lineHeight="1px";var o=c.create("div",{className:"ganttImageProgressFilled"},r);u.set(o,{width:e*this.duration*this.ganttChart.pixelsPerWorkHour/100+"px",height:this.ganttChart.heightTaskItem+"px"}),r=c.create("td",{width:100-e+"%"},t),r.style.lineHeight="1px",o=c.create("div",{className:"ganttImageProgressBg"},r),u.set(o,{width:(100-e)*this.duration*this.ganttChart.pixelsPerWorkHour/100+"px",height:this.ganttChart.heightTaskItem+"px"})}else 0==e&&100==this.percentage?(m.remove(a.firstChild,"ganttImageProgressFilled"),m.add(a.firstChild,"ganttImageProgressBg")):100==e&&0==this.percentage&&(m.remove(a.firstChild,"ganttImageProgressBg"),m.add(a.firstChild,"ganttImageProgressFilled"));return this.percentage=e,this.descrProject.innerHTML=this.getDescStr(),!0},deleteChildTask:function(e){if(e){var t=e.cTaskItem[0],a=e.cTaskNameItem[0],i=e.cTaskItem[1],r=e.cTaskNameItem[1],o=e.cTaskNameItem[2];if("none"==t.style.display&&this.ganttChart.openTree(e.parentTask),e.childPredTask.length>0)for(var n=0;n<e.childPredTask.length;n++){for(var d=e.childPredTask[n],s=0;s<d.cTaskItem[1].length;s++)d.cTaskItem[1][s].parentNode.removeChild(d.cTaskItem[1][s]);d.cTaskItem[1]=[],d.predTask=null}if(e.childTask.length>0)for(;e.childTask.length>0;)this.deleteChildTask(e.childTask[0]);var l=this.ganttChart.heightTaskItem+this.ganttChart.heightTaskItemExtra;if("none"!=t.style.display&&e.shiftCurrentTasks(e,-l),this.project.deleteTask(e.taskItem.id),t&&t.parentNode.removeChild(t),e.descrTask.parentNode.removeChild(e.descrTask),i.length>0)for(var m=0;m<i.length;m++)i[m].parentNode.removeChild(i[m]);if(a&&a.parentNode.removeChild(a),e.cTaskNameItem[1])for(var m=0;m<r.length;m++)r[m].parentNode.removeChild(r[m]);if(o&&o.parentNode&&o.parentNode.removeChild(o),e.taskIdentifier&&(e.taskIdentifier.parentNode.removeChild(e.taskIdentifier),e.taskIdentifier=null),e.parentTask){e.previousChildTask&&(e.nextChildTask?e.previousChildTask.nextChildTask=e.nextChildTask:e.previousChildTask.nextChildTask=null);for(var c=e.parentTask,n=0;n<c.childTask.length;n++)if(c.childTask[n].taskItem.id==e.taskItem.id){c.childTask[n]=null,c.childTask.splice(n,1);break}0==c.childTask.length&&c.cTaskNameItem[2]&&(c.cTaskNameItem[2].parentNode.removeChild(c.cTaskNameItem[2]),c.cTaskNameItem[2]=null)}else{e.previousParentTask&&(e.nextParentTask?e.previousParentTask.nextParentTask=e.nextParentTask:e.previousParentTask.nextParentTask=null);for(var u=e.project,n=0;n<u.arrTasks.length;n++)u.arrTasks[n].taskItem.id==e.taskItem.id&&u.arrTasks.splice(n,1)}if(e.predTask)for(var h=e.predTask,n=0;n<h.childPredTask.length;n++)h.childPredTask[n].taskItem.id==e.taskItem.id&&(h.childPredTask[n]=null,h.childPredTask.splice(n,1));0!=e.project.arrTasks.length?e.project.shiftProjectItem():(e.project.projectItem[0].style.display="none",this.hideDescrProject()),this.ganttChart.contentDataHeight-=this.ganttChart.heightTaskItemExtra+this.ganttChart.heightTaskItem}},insertTask:function(a,i,r,o,n,d,s,l){var m=null,c=null;if(this.project.getTaskById(a))return!1;if((!o||o<this.ganttChart.minWorkLength)&&(o=this.ganttChart.minWorkLength),i&&""!=i||(i=a),n&&""!=n){if(n=parseInt(n),0>n||n>100)return!1}else n=0;var u=!1;if(l&&""!=l){var h=this.project.getTaskById(l);if(!h)return!1;if(r=r||h.startTime,r<h.startTime)return!1;if(m=new e({id:a,name:i,startTime:r,duration:o,percentage:n,previousTaskId:d,taskOwner:s}),!this.ganttChart.checkPosParentTask(h,m))return!1;m.parentTask=h;var f=this.getTaskById(h.id),y=!1;if("none"==f.cTaskItem[0].style.display?y=!0:f.cTaskNameItem[2]&&(f.isExpanded||(y=!0)),y&&(0==f.childTask.length?this.ganttChart.openTree(f.parentTask):this.ganttChart.openTree(f)),""!=d){var p=this.project.getTaskById(d);if(!p)return!1;if(!p.parentTask)return!1;if(p.parentTask.id!=m.parentTask.id)return!1;this.ganttChart.checkPosPreviousTask(p,m)||this.ganttChart.correctPosPreviousTask(p,m),m.previousTask=p}var g=!1;if(u)for(var v=0;v<h.cldTasks.length;v++)if(m.startTime<h.cldTasks[v].startTime){h.cldTasks.splice(v,0,m),v>0&&(h.cldTasks[v-1].nextChildTask=h.cldTasks[v],h.cldTasks[v].previousChildTask=h.cldTasks[v-1]),h.cldTasks[v+1]&&(h.cldTasks[v+1].previousChildTask=h.cldTasks[v],h.cldTasks[v].nextChildTask=h.cldTasks[v+1]),g=!0;break}g||(h.cldTasks.length>0&&(h.cldTasks[h.cldTasks.length-1].nextChildTask=m,m.previousChildTask=h.cldTasks[h.cldTasks.length-1]),h.cldTasks.push(m)),1==h.cldTasks.length&&(f.cTaskNameItem[2]=f.createTreeImg()),c=new t(m,this,this.ganttChart),c.create(),m.nextChildTask&&(c.nextChildTask=c.project.getTaskById(m.nextChildTask.id)),c.adjustPanelTime();var b=this.ganttChart.heightTaskItem+this.ganttChart.heightTaskItemExtra;c.shiftCurrentTasks(c,b)}else{if(r=r||this.project.startDate,m=new e({id:a,name:i,startTime:r,duration:o,percentage:n,previousTaskId:d,taskOwner:s}),m.startTime<=this.ganttChart.startDate)return!1;if(""!=d){var p=this.project.getTaskById(d);if(!p)return!1;if(this.ganttChart.checkPosPreviousTask(p,m)||this.ganttChart.correctPosPreviousTask(p,m),p.parentTask)return!1;m.previousTask=p}var g=!1;if(u)for(var v=0;v<this.project.parentTasks.length;v++){var M=this.project.parentTasks[v];if(r<M.startTime){this.project.parentTasks.splice(v,0,m),v>0&&(this.project.parentTasks[v-1].nextParentTask=m,m.previousParentTask=this.project.parentTasks[v-1]),this.project.parentTasks[v+1]&&(this.project.parentTasks[v+1].previousParentTask=m,m.nextParentTask=this.project.parentTasks[v+1]),g=!0;break}}g||(this.project.parentTasks.length>0&&(this.project.parentTasks[this.project.parentTasks.length-1].nextParentTask=m,m.previousParentTask=this.project.parentTasks[this.project.parentTasks.length-1]),this.project.parentTasks.push(m)),c=new t(m,this,this.ganttChart),c.create(),m.nextParentTask&&(c.nextParentTask=c.project.getTaskById(m.nextParentTask.id)),c.adjustPanelTime(),this.arrTasks.push(c);var b=this.ganttChart.heightTaskItem+this.ganttChart.heightTaskItemExtra;c.shiftCurrentTasks(c,b),this.projectItem[0].style.display="inline",this.setPercentCompleted(this.getPercentCompleted()),this.shiftProjectItem(),this.showDescrProject()}return this.ganttChart.checkHeighPanelTasks(),this.ganttChart.checkPosition(),c},shiftNextProject:function(e,t){e.nextProject&&(e.nextProject.shiftProject(t),this.shiftNextProject(e.nextProject,t))},shiftProject:function(e){this.posY=this.posY+e,this.projectItem[0].style.top=parseInt(this.projectItem[0].style.top)+e+"px",this.descrProject.style.top=parseInt(this.descrProject.style.top)+e+"px",this.projectNameItem.style.top=parseInt(this.projectNameItem.style.top)+e+"px",this.arrTasks.length>0&&this.shiftNextParentTask(this.arrTasks[0],e)},shiftTask:function(e,t){e.posY=e.posY+t;var a=e.cTaskNameItem[0],i=e.cTaskNameItem[1],r=e.cTaskNameItem[2],o=e.cTaskItem[1];a.style.top=parseInt(a.style.top)+t+"px",r&&(r.style.top=parseInt(r.style.top)+t+"px"),e.parentTask&&(i[0].style.top=parseInt(i[0].style.top)+t+"px",i[1].style.top=parseInt(i[1].style.top)+t+"px"),e.cTaskItem[0].style.top=parseInt(e.cTaskItem[0].style.top)+t+"px",e.descrTask.style.top=parseInt(e.descrTask.style.top)+t+"px",o[0]&&(o[0].style.top=parseInt(o[0].style.top)+t+"px",o[1].style.top=parseInt(o[1].style.top)+t+"px",o[2].style.top=parseInt(o[2].style.top)+t+"px")},shiftNextParentTask:function(e,t){this.shiftTask(e,t),this.shiftChildTasks(e,t),e.nextParentTask&&this.shiftNextParentTask(e.nextParentTask,t)},shiftChildTasks:function(e,t){r.forEach(e.childTask,function(e){this.shiftTask(e,t),e.childTask.length>0&&this.shiftChildTasks(e,t)},this)}})});//# sourceMappingURL=GanttProjectControl.js.map