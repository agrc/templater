//>>built
define("dojox/gantt/TabMenu",["./contextMenuTab","./GanttTaskControl","./GanttProjectControl","dijit/Dialog","dijit/form/Button","dijit/form/Form","dijit/registry","dojo/_base/declare","dojo/_base/array","dojo/_base/lang","dojo/date/locale","dojo/request","dojo/on","dojo/dom","dojo/dom-class","dojo/dom-construct","dojo/dom-style","dojo/dom-attr","dojo/dom-geometry","dojo/keys","dojo/domReady!"],function(e,t,a,i,r,o,n,s,d,l,u,m,h,c,f,y,p,g,v,b){return s("dojox.gantt.TabMenu",[],{constructor:function(e){this.ganttChart=e,this.menuPanel=null,this.paneContentArea=null,this.paneActionBar=null,this.tabPanelDlg=null,this.tabPanelDlgId=null,this.arrTabs=[],this.isShow=!1,this.buildContent()},buildContent:function(){this.createMenuPanel(),this.createTabPanel();var e=this.createTab(11,"Add Successor Task","t",!0,this);e.addItem(1,"Id","id",!0),e.addItem(2,"Name","name"),e.addItem(3,"Start Time","startTime"),e.addItem(4,"Duration (hours)","duration"),e.addItem(5,"Percent Complete (%)","percentage"),e.addItem(6,"Task Assignee","taskOwner"),e.addAction("addSuccessorTaskAction");var t=this.createTab(10,"Add Child Task","t",!0,this);t.addItem(1,"Id","id",!0),t.addItem(2,"Name","name"),t.addItem(3,"Start Time","startTime"),t.addItem(4,"Duration (hours)","duration"),t.addItem(5,"Percent Complete (%)","percentage"),t.addItem(6,"Task Assignee","taskOwner"),t.addAction("addChildTaskAction");var a=this.createTab(4,"Set Duration(hours)","t",!0,this,!0);a.addItem(1,"Duration (hours)","duration",!0),a.addAction("durationUpdateAction");var i=this.createTab(5,"Set Complete Percentage (%)","t",!0,this,!0);i.addItem(1,"Percent Complete (%)","percentage",!0),i.addAction("cpUpdateAction");var r=this.createTab(20,"Set Owner","t",!0,this,!0);r.addItem(1,"Task Assignee","taskOwner",!0),r.addAction("ownerUpdateAction");var o=this.createTab(13,"Set Previous Task","t",!0,this);o.addItem(1,"Previous Task Id","previousTaskId",!0),o.addAction("ptUpdateAction");var n=this.createTab(1,"Rename Task","t",!0,this,!0);n.addItem(1,"New Name","name",!0),n.addAction("renameTaskAction");var s=this.createTab(2,"Delete Task","t",!0,this);s.addAction("deleteAction");var d=this.createTab(12,"Add New Project","p",!1,this);d.addItem(1,"Id","id",!0),d.addItem(2,"Name","name",!0),d.addItem(3,"Start Date","startDate",!0),d.addAction("addProjectAction");var l=this.createTab(8,"Set Complete Percentage (%)","p",!0,this,!0);l.addItem(1,"Percent Complete (%)","percentage",!0),l.addAction("cpProjectAction");var u=this.createTab(6,"Rename Project","p",!0,this,!0);u.addItem(1,"New Name","name",!0),u.addAction("renameProjectAction");var m=this.createTab(7,"Delete Project","p",!0,this);m.addAction("deleteProjectAction");var h=this.createTab(9,"Add New Task","p",!0,this);h.addItem(1,"Id","id",!0),h.addItem(2,"Name","name"),h.addItem(3,"Start Time","startTime"),h.addItem(4,"Duration (hours)","duration"),h.addItem(5,"Percent Complete (%)","percentage"),h.addItem(6,"Task Assignee","taskOwner"),h.addItem(7,"Parent Task Id","parentTaskId"),h.addItem(8,"Previous Task Id","previousTaskId"),h.addAction("addTaskAction")},createMenuPanel:function(){this.menuPanel=y.create("div",{innerHTML:"<table></table>",className:"ganttMenuPanel"},this.ganttChart.content),f.add(this.menuPanel.firstChild,"ganttContextMenu"),this.menuPanel.firstChild.cellPadding=0,this.menuPanel.firstChild.cellSpacing=0},createTabPanel:function(){this.tabPanelDlg=n.byId(this.tabPanelDlgId)||new i({title:"Settings"}),this.tabPanelDlgId=this.tabPanelDlg.id,this.tabPanelDlg.closeButtonNode.style.display="none";var e=this.tabPanelDlg.containerNode;this.paneContentArea=y.create("div",{className:"dijitDialogPaneContentArea"},e),this.paneActionBar=y.create("div",{className:"dijitDialogPaneActionBar"},e),this.paneContentArea.innerHTML="<table cellpadding=0 cellspacing=0><tr><th></th></tr><tr><td></td></tr></table>";var t=this.paneContentArea.firstChild.rows[0].cells[0];t.colSpan=2,t.innerHTML="Description: ",f.add(t,"ganttDialogContentHeader");var a=this.paneContentArea.firstChild.rows[1].cells[0];a.innerHTML="<table></table>",f.add(a.firstChild,"ganttDialogContentCell"),a.align="center",this.ok=new r({label:"OK"}),this.cancel=new r({label:"Cancel"}),this.paneActionBar.appendChild(this.ok.domNode),this.paneActionBar.appendChild(this.cancel.domNode)},addItemMenuPanel:function(e){var t=this.menuPanel.firstChild.insertRow(this.menuPanel.firstChild.rows.length),a=y.create("td",{className:"ganttContextMenuItem",innerHTML:e.Description});g.set(a,"tabIndex",0),this.ganttChart._events.push(h(a,"click",l.hitch(this,function(){try{this.hide(),e.show()}catch(t){}}))),this.ganttChart._events.push(h(a,"keydown",l.hitch(this,function(t){if(t.keyCode==b.ENTER)try{this.hide(),e.show()}catch(a){}}))),this.ganttChart._events.push(h(a,"mouseover",l.hitch(this,function(){f.add(a,"ganttContextMenuItemHover")}))),this.ganttChart._events.push(h(a,"mouseout",l.hitch(this,function(){f.remove(a,"ganttContextMenuItemHover")}))),t.appendChild(a)},show:function(e,i){i.constructor==t?d.forEach(this.arrTabs,function(e){"t"==e.type&&(e.object=i,this.addItemMenuPanel(e))},this):i.constructor==a&&d.forEach(this.arrTabs,function(e){"p"==e.type&&(e.object=i,this.addItemMenuPanel(e))},this),this.isShow=!0,p.set(this.menuPanel,{zIndex:15,visibility:"visible"});var r=v.position(this.menuPanel,!0),o=v.position(this.ganttChart.content,!0),n=v.position(e,!0);n.y+r.h>o.y+o.h+50?this.menuPanel.style.top=n.y-r.h+n.h+"px":this.menuPanel.style.top=n.y+"px",v.isBodyLtr()?this.menuPanel.style.left=n.x+n.w+5+"px":this.menuPanel.style.left=n.x-r.w-5+"px"},hide:function(){this.isShow=!1,this.menuPanel.style.visibility="hidden"},clear:function(){this.menuPanel.removeChild(this.menuPanel.firstChild),this.menuPanel.innerHTML="<table></table>",f.add(this.menuPanel.firstChild,"ganttContextMenu"),this.menuPanel.firstChild.cellPadding=0,this.menuPanel.firstChild.cellSpacing=0},createTab:function(t,a,i,r,o,n){var s=new e(t,a,i,r,o,n);return this.arrTabs.push(s),s}})});//# sourceMappingURL=TabMenu.js.map