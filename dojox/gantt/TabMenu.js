//>>built
define("dojox/gantt/TabMenu",["./contextMenuTab","./GanttTaskControl","./GanttProjectControl","dijit/Dialog","dijit/form/Button","dijit/form/Form","dijit/registry","dojo/_base/declare","dojo/_base/array","dojo/_base/lang","dojo/date/locale","dojo/request","dojo/on","dojo/dom","dojo/dom-class","dojo/dom-construct","dojo/dom-style","dojo/dom-attr","dojo/dom-geometry","dojo/keys","dojo/domReady!"],function(e,t,a,i,n,r,o,s,l,d,m,c,u,h,f,p,g,v,y,k){return s("dojox.gantt.TabMenu",[],{constructor:function(e){this.ganttChart=e,this.menuPanel=null,this.paneContentArea=null,this.paneActionBar=null,this.tabPanelDlg=null,this.tabPanelDlgId=null,this.arrTabs=[],this.isShow=!1,this.buildContent()},buildContent:function(){this.createMenuPanel(),this.createTabPanel();var e=this.createTab(11,"Add Successor Task","t",!0,this);e.addItem(1,"Id","id",!0),e.addItem(2,"Name","name"),e.addItem(3,"Start Time","startTime"),e.addItem(4,"Duration (hours)","duration"),e.addItem(5,"Percent Complete (%)","percentage"),e.addItem(6,"Task Assignee","taskOwner"),e.addAction("addSuccessorTaskAction");var t=this.createTab(10,"Add Child Task","t",!0,this);t.addItem(1,"Id","id",!0),t.addItem(2,"Name","name"),t.addItem(3,"Start Time","startTime"),t.addItem(4,"Duration (hours)","duration"),t.addItem(5,"Percent Complete (%)","percentage"),t.addItem(6,"Task Assignee","taskOwner"),t.addAction("addChildTaskAction");var a=this.createTab(4,"Set Duration(hours)","t",!0,this,!0);a.addItem(1,"Duration (hours)","duration",!0),a.addAction("durationUpdateAction");var i=this.createTab(5,"Set Complete Percentage (%)","t",!0,this,!0);i.addItem(1,"Percent Complete (%)","percentage",!0),i.addAction("cpUpdateAction");var n=this.createTab(20,"Set Owner","t",!0,this,!0);n.addItem(1,"Task Assignee","taskOwner",!0),n.addAction("ownerUpdateAction");var r=this.createTab(13,"Set Previous Task","t",!0,this);r.addItem(1,"Previous Task Id","previousTaskId",!0),r.addAction("ptUpdateAction");var o=this.createTab(1,"Rename Task","t",!0,this,!0);o.addItem(1,"New Name","name",!0),o.addAction("renameTaskAction");var s=this.createTab(2,"Delete Task","t",!0,this);s.addAction("deleteAction");var l=this.createTab(12,"Add New Project","p",!1,this);l.addItem(1,"Id","id",!0),l.addItem(2,"Name","name",!0),l.addItem(3,"Start Date","startDate",!0),l.addAction("addProjectAction");var d=this.createTab(8,"Set Complete Percentage (%)","p",!0,this,!0);d.addItem(1,"Percent Complete (%)","percentage",!0),d.addAction("cpProjectAction");var m=this.createTab(6,"Rename Project","p",!0,this,!0);m.addItem(1,"New Name","name",!0),m.addAction("renameProjectAction");var c=this.createTab(7,"Delete Project","p",!0,this);c.addAction("deleteProjectAction");var u=this.createTab(9,"Add New Task","p",!0,this);u.addItem(1,"Id","id",!0),u.addItem(2,"Name","name"),u.addItem(3,"Start Time","startTime"),u.addItem(4,"Duration (hours)","duration"),u.addItem(5,"Percent Complete (%)","percentage"),u.addItem(6,"Task Assignee","taskOwner"),u.addItem(7,"Parent Task Id","parentTaskId"),u.addItem(8,"Previous Task Id","previousTaskId"),u.addAction("addTaskAction")},createMenuPanel:function(){this.menuPanel=p.create("div",{innerHTML:"<table></table>",className:"ganttMenuPanel"},this.ganttChart.content),f.add(this.menuPanel.firstChild,"ganttContextMenu"),this.menuPanel.firstChild.cellPadding=0,this.menuPanel.firstChild.cellSpacing=0},createTabPanel:function(){this.tabPanelDlg=o.byId(this.tabPanelDlgId)||new i({title:"Settings"}),this.tabPanelDlgId=this.tabPanelDlg.id,this.tabPanelDlg.closeButtonNode.style.display="none";var e=this.tabPanelDlg.containerNode;this.paneContentArea=p.create("div",{className:"dijitDialogPaneContentArea"},e),this.paneActionBar=p.create("div",{className:"dijitDialogPaneActionBar"},e),this.paneContentArea.innerHTML="<table cellpadding=0 cellspacing=0><tr><th></th></tr><tr><td></td></tr></table>";var t=this.paneContentArea.firstChild.rows[0].cells[0];t.colSpan=2,t.innerHTML="Description: ",f.add(t,"ganttDialogContentHeader");var a=this.paneContentArea.firstChild.rows[1].cells[0];a.innerHTML="<table></table>",f.add(a.firstChild,"ganttDialogContentCell"),a.align="center",this.ok=new n({label:"OK"}),this.cancel=new n({label:"Cancel"}),this.paneActionBar.appendChild(this.ok.domNode),this.paneActionBar.appendChild(this.cancel.domNode)},addItemMenuPanel:function(e){var t=this.menuPanel.firstChild.insertRow(this.menuPanel.firstChild.rows.length),a=p.create("td",{className:"ganttContextMenuItem",innerHTML:e.Description});v.set(a,"tabIndex",0),this.ganttChart._events.push(u(a,"click",d.hitch(this,function(){try{this.hide(),e.show()}catch(t){}}))),this.ganttChart._events.push(u(a,"keydown",d.hitch(this,function(t){if(t.keyCode==k.ENTER)try{this.hide(),e.show()}catch(a){}}))),this.ganttChart._events.push(u(a,"mouseover",d.hitch(this,function(){f.add(a,"ganttContextMenuItemHover")}))),this.ganttChart._events.push(u(a,"mouseout",d.hitch(this,function(){f.remove(a,"ganttContextMenuItemHover")}))),t.appendChild(a)},show:function(e,i){i.constructor==t?l.forEach(this.arrTabs,function(e){"t"==e.type&&(e.object=i,this.addItemMenuPanel(e))},this):i.constructor==a&&l.forEach(this.arrTabs,function(e){"p"==e.type&&(e.object=i,this.addItemMenuPanel(e))},this),this.isShow=!0,g.set(this.menuPanel,{zIndex:15,visibility:"visible"});var n=y.position(this.menuPanel,!0),r=y.position(this.ganttChart.content,!0),o=y.position(e,!0);o.y+n.h>r.y+r.h+50?this.menuPanel.style.top=o.y-n.h+o.h+"px":this.menuPanel.style.top=o.y+"px",y.isBodyLtr()?this.menuPanel.style.left=o.x+o.w+5+"px":this.menuPanel.style.left=o.x-n.w-5+"px"},hide:function(){this.isShow=!1,this.menuPanel.style.visibility="hidden"},clear:function(){this.menuPanel.removeChild(this.menuPanel.firstChild),this.menuPanel.innerHTML="<table></table>",f.add(this.menuPanel.firstChild,"ganttContextMenu"),this.menuPanel.firstChild.cellPadding=0,this.menuPanel.firstChild.cellSpacing=0},createTab:function(t,a,i,n,r,o){var s=new e(t,a,i,n,r,o);return this.arrTabs.push(s),s}})});//# sourceMappingURL=TabMenu.js.map