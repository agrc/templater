//>>built
define("dojox/gantt/contextMenuTab",["./GanttTaskControl","dijit/Menu","dijit/Dialog","dijit/form/NumberSpinner","dijit/form/Button","dijit/form/CheckBox","dijit/form/DateTextBox","dijit/form/TimeTextBox","dijit/form/TextBox","dijit/form/Form","dijit/registry","dojo/_base/declare","dojo/_base/array","dojo/_base/lang","dojo/_base/html","dojo/date/locale","dojo/request","dojo/dom","dojo/dom-class","dojo/domReady!"],function(e,t,i,a,r,o,n,s,d,l,u,c,h,f,m,p,g,y,v){return c("dojox.gantt.contextMenuTab",[],{constructor:function(e,t,i,a,r,o){this.id=e,this.arrItems=[],this.TabItemContainer=null,this.Description=t,this.tabMenu=r,this.type=i,this.object=null,this.showObjectInfo=a,this.withDefaultValue=o},preValueValidation:function(e){for(var t=0;t<e.length;t++){var i=e[t];if(i.required&&!i.control.textbox.value)return!1}return!0},encodeDate:function(e){return e.getFullYear()+"."+(e.getMonth()+1)+"."+e.getDate()},decodeDate:function(e){var t=e.split(".");return t.length<3?"":new Date(t[0],parseInt(t[1])-1,t[2])},renameTaskAction:function(){var e=this.arrItems[0].control.textbox.value;f.trim(e).length<=0||this.preValueValidation(this.arrItems)&&(this.object.setName(e),this.hide())},deleteAction:function(){this.preValueValidation(this.arrItems)&&(this.object.project.deleteTask(this.object.taskItem.id),this.hide(),this.tabMenu.ganttChart.resource&&this.tabMenu.ganttChart.resource.reConstruct())},durationUpdateAction:function(){var e=this.arrItems[0].control.textbox.value;if(this.preValueValidation(this.arrItems)){if(!this.object.setDuration(e))return void alert("Duration out of Range");this.hide(),this.tabMenu.ganttChart.resource&&this.tabMenu.ganttChart.resource.refresh()}},cpUpdateAction:function(){var e=this.arrItems[0].control.textbox.value;this.preValueValidation(this.arrItems)&&(this.object.setPercentCompleted(e)?this.hide():alert("Complete Percentage out of Range"))},ownerUpdateAction:function(){var e=this.arrItems[0].control.textbox.value;if(this.preValueValidation(this.arrItems)){if(!this.object.setTaskOwner(e))return void alert("Task owner not Valid");this.hide(),this.tabMenu.ganttChart.resource&&this.tabMenu.ganttChart.resource.reConstruct()}},ptUpdateAction:function(){var e=this.arrItems[0].control.textbox.value;this.preValueValidation(this.arrItems)&&(this.object.setPreviousTask(e)?this.hide():alert("Please verify the Previous Task ("+e+")  and adjust its Time Range"))},renameProjectAction:function(){var e=this.arrItems[0].control.textbox.value;f.trim(e).length<=0||this.preValueValidation(this.arrItems)&&(this.object.setName(e),this.hide())},deleteProjectAction:function(){this.preValueValidation(this.arrItems)&&(this.object.ganttChart.deleteProject(this.object.project.id),this.hide(),this.tabMenu.ganttChart.resource&&this.tabMenu.ganttChart.resource.reConstruct())},cpProjectAction:function(){var e=this.arrItems[0].control.textbox.value;this.preValueValidation(this.arrItems)&&(this.object.setPercentCompleted(e)?this.hide():alert("Percentage not Acceptable"))},addTaskAction:function(){if(this.preValueValidation(this.arrItems)){var e=this.arrItems[0].control.textbox.value,t=this.arrItems[1].control.textbox.value,i=this.decodeDate(this.arrItems[2].control.textbox.value),a=this.arrItems[3].control.textbox.value,r=this.arrItems[4].control.textbox.value,o=this.arrItems[5].control.textbox.value,n=this.arrItems[6].control.textbox.value,s=this.arrItems[7].control.textbox.value;if(!(f.trim(e).length<=0)){if(!this.object.insertTask(e,t,i,a,r,s,o,n))return void alert("Please adjust your Customization");this.hide(),this.tabMenu.ganttChart.resource&&this.tabMenu.ganttChart.resource.reConstruct()}}},addSuccessorTaskAction:function(){if(this.preValueValidation(this.arrItems)){var e=this.object.project,t=this.arrItems[0].control.textbox.value,i=this.arrItems[1].control.textbox.value,a=this.decodeDate(this.arrItems[2].control.textbox.value),r=this.arrItems[3].control.textbox.value,o=this.arrItems[4].control.textbox.value,n=this.arrItems[5].control.textbox.value;if(!(f.trim(t).length<=0)){var s=this.object.parentTask?this.object.parentTask.taskItem.id:"",d=this.object.taskItem.id;if(!e.insertTask(t,i,a,r,o,d,n,s))return void alert("Please adjust your Customization");this.hide(),this.tabMenu.ganttChart.resource&&this.tabMenu.ganttChart.resource.reConstruct()}}},addChildTaskAction:function(){if(this.preValueValidation(this.arrItems)){var e=this.object.project,t=this.arrItems[0].control.textbox.value,i=this.arrItems[1].control.textbox.value,a=this.decodeDate(this.arrItems[2].control.textbox.value),r=this.arrItems[3].control.textbox.value,o=this.arrItems[4].control.textbox.value,n=this.arrItems[5].control.textbox.value,s=this.object.taskItem.id,d="";if(!(f.trim(t).length<=0)){if(!e.insertTask(t,i,a,r,o,d,n,s))return void alert("Please adjust your Customization");this.hide(),this.tabMenu.ganttChart.resource&&this.tabMenu.ganttChart.resource.reConstruct()}}},addProjectAction:function(){if(this.preValueValidation(this.arrItems)){var e=this.arrItems[0].control.textbox.value,t=this.arrItems[1].control.textbox.value,i=this.decodeDate(this.arrItems[2].control.textbox.value);if(!(f.trim(e).length<=0||f.trim(t).length<=0)){if(!this.tabMenu.ganttChart.insertProject(e,t,i))return void alert("Please adjust your Customization");this.hide(),this.tabMenu.ganttChart.resource&&this.tabMenu.ganttChart.resource.reConstruct()}}},addAction:function(e){this.actionFunc=this[e]},addItem:function(e,t,i,r){var o;o="startTime"==i||"startDate"==i?new n({type:"text",constraints:{datePattern:"yyyy.M.d",strict:!0}}):"percentage"==i?new a({constraints:{max:100,min:0}}):"duration"==i?new a({constraints:{min:0}}):new d,this.arrItems.push({id:e,name:t,control:o,tab:this,key:i,required:r})},show:function(){this.tabMenu.tabPanelDlg=this.tabMenu.tabPanelDlg||u.byId(this.tabMenu.tabPanelDlgId)||new i({title:"Settings"});try{this.tabMenu.tabPanelDlg.show()}catch(t){return}this.tabMenu.tabPanelDlg.titleNode.innerHTML=this.Description;var a,r,o=this.tabMenu.paneContentArea.firstChild.rows[1].cells[0].firstChild,n=null;this.showObjectInfo&&this.object&&(this.object.constructor==e?(this.insertData(o,"Id",this.object.taskItem.id),this.insertData(o,"Name",this.object.taskItem.name),this.insertData(o,"Start Time",this.encodeDate(this.object.taskItem.startTime)),this.insertData(o,"Duration (hours)",this.object.taskItem.duration+" hours"),this.insertData(o,"Percent Complete (%)",this.object.taskItem.percentage+"%"),this.insertData(o,"Task Assignee",this.object.taskItem.taskOwner),this.insertData(o,"Previous Task Id",this.object.taskItem.previousTaskId)):(this.insertData(o,"Id",this.object.project.id),this.insertData(o,"Name",this.object.project.name),this.insertData(o,"Start date",this.encodeDate(this.object.project.startDate)))),n=o.insertRow(o.rows.length),a=n.insertCell(n.cells.length),a.colSpan=2,a.innerHTML="<hr/>",n=o.insertRow(o.rows.length),a=n.insertCell(n.cells.length),a.colSpan=2,v.add(a,"ganttMenuDialogInputCellHeader"),a.innerHTML="Customization: "+this.Description,h.forEach(this.arrItems,function(t){n=o.insertRow(o.rows.length),a=n.insertCell(n.cells.length),v.add(a,"ganttMenuDialogInputCell"),r=n.insertCell(n.cells.length),v.add(r,"ganttMenuDialogInputCellValue"),a.innerHTML=t.name,r.appendChild(t.control.domNode),this.withDefaultValue&&this.object?this.object.constructor==e?"startTime"==t.key?t.control.textbox.value=this.encodeDate(this.object.taskItem.startTime):t.control.textbox.value=t.key?this.object.taskItem[t.key]:"":"startDate"==t.key?t.control.textbox.value=this.encodeDate(this.object.project.startDate):t.control.textbox.value=t.key?this.object.project[t.key]||this.object[t.key]||"":"":t.control.textbox.placeholder=t.required?"---required---":"---optional---"},this),this.tabMenu.ok.onClick=f.hitch(this,this.actionFunc),this.tabMenu.cancel.onClick=f.hitch(this,this.hide)},hide:function(){try{this.tabMenu.tabPanelDlg.hide()}catch(e){this.tabMenu.tabPanelDlg.destroy()}var t=this.tabMenu.paneContentArea.firstChild.rows[1].cells[0];t.firstChild.parentNode.removeChild(t.firstChild),t.innerHTML="<table></table>",v.add(t.firstChild,"ganttDialogContentCell")},insertData:function(e,t,i){var a,r=e.insertRow(e.rows.length),o=r.insertCell(r.cells.length);v.add(o,"ganttMenuDialogDescCell"),o.innerHTML=t,a=r.insertCell(r.cells.length),v.add(a,"ganttMenuDialogDescCellValue"),a.innerHTML=i}})});//# sourceMappingURL=contextMenuTab.js.map