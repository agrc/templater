//>>built
define("dijit/layout/TabContainer",["dojo/_base/lang","dojo/_base/declare","./_TabContainerBase","./TabController","./ScrollingTabController"],function(t,e,i,o,n){return e("dijit.layout.TabContainer",i,{useMenu:!0,useSlider:!0,controllerWidget:"",_makeController:function(e){var i=this.baseClass+"-tabs"+(this.doLayout?"":" dijitTabNoLayout");return new("string"==typeof this.controllerWidget?t.getObject(this.controllerWidget):this.controllerWidget)({id:this.id+"_tablist",ownerDocument:this.ownerDocument,dir:this.dir,lang:this.lang,textDir:this.textDir,tabPosition:this.tabPosition,doLayout:this.doLayout,containerId:this.id,class:i,nested:this.nested,useMenu:this.useMenu,useSlider:this.useSlider,tabStripClass:this.tabStrip?this.baseClass+(this.tabStrip?"":"No")+"Strip":null},e)},postMixInProperties:function(){this.inherited(arguments),this.controllerWidget||(this.controllerWidget="top"!=this.tabPosition&&"bottom"!=this.tabPosition||this.nested?o:n)}})});//# sourceMappingURL=TabContainer.js.map