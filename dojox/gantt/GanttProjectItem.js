//>>built
define("dojox/gantt/GanttProjectItem",["./GanttTaskItem","dojo/_base/declare","./GanttProjectControl","dojo/domReady!"],function(e,t){return t("dojox.gantt.GanttProjectItem",[e],{constructor:function(e){this.id=e.id,this.name=e.name||this.id,this.startDate=e.startDate||new Date,this.parentTasks=[]},getTaskById:function(e){for(var t=0;t<this.parentTasks.length;t++){var i=this.parentTasks[t],r=this.getTaskByIdInTree(i,e);if(r)return r}return null},getTaskByIdInTree:function(e,t){if(e.id==t)return e;for(var i=0;i<e.cldTasks.length;i++){var r=e.cldTasks[i];if(r.id==t)return r;if(r.cldTasks.length>0&&r.cldTasks.length>0){var a=this.getTaskByIdInTree(r,t);if(a)return a}}return null},addTask:function(e){this.parentTasks.push(e),e.setProject(this)},deleteTask:function(e){var t=this.getTaskById(e);if(t)if(t.parentTask)for(var i=t.parentTask,r=0;r<i.cldTasks.length;r++){var a=i.cldTasks[r];if(a.id==e){a.nextChildTask?a.previousChildTask?(a.previousChildTask.nextChildTask=a.nextChildTask,a.nextChildTask.previousChildTask=a.previousChildTask):a.nextChildTask.previousChildTask=null:a.previousChildTask&&(a.previousChildTask.nextChildTask=null),a=null,i.cldTasks.splice(r,1);break}}else for(var r=0;r<this.parentTasks.length;r++){var n=this.parentTasks[r];if(n.id==e){n.nextParentTask?n.previousParentTask?(n.previousParentTask.nextParentTask=n.nextParentTask,n.nextParentTask.previousParentTask=n.previousParentTask):n.nextParentTask.previousParentTask=null:n.previousParentTask&&(n.previousParentTask.nextParentTask=null),n=null,this.parentTasks.splice(r,1);break}}}})});//# sourceMappingURL=GanttProjectItem.js.map