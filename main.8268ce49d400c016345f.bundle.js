webpackJsonp([1],{151:function(e,t,n){"use strict";var o=n(47),a=n(529),r=n(0);n.d(t,"a",(function(){return i}));var i=(function(){function e(){this.nodes=[{name:"start",label:"Начало",className:draw2d.shape.node.Start},{name:"end",label:"Конец",className:draw2d.shape.node.End},{name:"operation",label:"Операция",className:draw2d.shape.node.Operation},{name:"condition",label:"Условие",className:draw2d.shape.node.Condition},{name:"sync",label:"Требование",className:draw2d.shape.node.Sync},{name:"product",label:"Продукт",className:draw2d.shape.node.Product},{name:"block",label:"Блок",className:draw2d.shape.node.Block},{name:"connection",label:"Соединение",className:draw2d.Connection,hidden:!0},{name:"label",label:"Метка",className:draw2d.shape.note.PostIt,hidden:!0}]}return e.prototype.getNodeTypes=function(){return this.nodes},e.prototype.getNodeType=function(e){if(!e)throw new Error("Не задан тип узла");var t=this.nodes.filter((function(t){return t.name===e}));if(0===t.length)throw new Error("Неизвестный тип узла: '"+e+"'");return t[0]},e.prototype.getNodeInstance=function(e){return new(this.getNodeType(e).className)},e.prototype.getTypeByInstance=function(e){var t=this.nodes.filter((function(t){return e instanceof t.className}));return 0===t.length?0:t[0]},e.prototype.nodeTypeLabelByInstance=function(e){var t=this.getTypeByInstance(e);return t?t.label:""},e.prototype.getDefaultUserData=function(e){var t=[];return t.push(new a.a({name:"name",label:"Имя",value:"Без имени"})),["operation","product","sync"].indexOf(e)!==-1&&t.push(new a.a({name:"cipher",label:"Шифр",value:""})),"operation"===e&&t.push(new a.a({name:"tools",label:"Инструменты",value:""})),t},e.prototype.getPropertyValue=function(e,t){var n=e.userData.parameters.filter((function(e){return e.name===t}));if(0===n.length)throw new Error("Property not found: "+t);return n[0].value},e})();i=o.a([n.i(r.p)()],i)},251:function(e,t,n){"use strict";var o=n(103),a=n(0);n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var r=[],i=function(e){return e};n.i(a.a)(),i=function(e){return n.i(o.a)(),e},r=r.slice();var s=i,d=r.slice()},337:function(e,t,n){"use strict";var o=n(526);n.d(t,"a",(function(){return o.a}))},389:function(e,t){function n(e){throw new Error("Cannot find module '"+e+"'.")}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id=389},391:function(e,t,n){"use strict";var o=n(522);n.d(t,"a",(function(){return o.a}))},521:function(e,t,n){"use strict";var o=n(47),a=n(0);n.d(t,"a",(function(){return r}));var r=(function(){function e(){}return e})();r=o.a([n.i(a._4)({selector:"app",encapsulation:a.O.None,styles:[n(702)],template:n(682)})],r)},522:function(e,t,n){"use strict";var o=n(47),a=n(103),r=n(483),i=n(489),s=n(0),d=n(252),l=(n.n(d),n(510)),c=n(251),u=n(524),p=n(521),f=n(523),h=n(525),b=n(337),v=n(527),y=n(679),g=(n.n(y),n(680)),w=(n.n(g),n(531)),m=n(530),C=n(151);n.d(t,"a",(function(){return S}));var x=f.a.concat([h.a]),S=(function(){function e(e,t){this.appRef=e,this.appState=t}return e.prototype.hmrOnInit=function(e){if(e&&e.state){if(console.log("HMR store",JSON.stringify(e,null,2)),this.appState._state=e.state,"restoreInputValues"in e){var t=e.restoreInputValues;setTimeout(t)}this.appRef.tick(),delete e.state,delete e.restoreInputValues}},e.prototype.hmrOnDestroy=function(e){var t=this.appRef.components.map((function(e){return e.location.nativeElement})),o=this.appState._state;e.state=o,e.disposeOldHosts=n.i(d.createNewHosts)(t),e.restoreInputValues=n.i(d.createInputTransfer)(),n.i(d.removeNgStyles)()},e.prototype.hmrAfterDestroy=function(e){e.disposeOldHosts(),delete e.disposeOldHosts},e})();S=o.a([n.i(s.i)({bootstrap:[p.a],declarations:[p.a,b.a,v.a,w.a,m.a],imports:[a.b,r.a,i.a,l.a.forRoot(u.a,{useHash:!0,preloadingStrategy:l.b})],providers:[c.b,x,C.a]}),o.b("design:paramtypes",[s.K,h.a])],S)},523:function(e,t,n){"use strict";var o=n(47),a=n(0),r=n(17),i=(n.n(r),n(689));n.n(i);n.d(t,"a",(function(){return d}));var s=(function(){function e(){}return e.prototype.resolve=function(e,t){return r.Observable.of({res:"I am data"})},e})();s=o.a([n.i(a.p)()],s);var d=[s]},524:function(e,t,n){"use strict";var o=n(337);n.d(t,"a",(function(){return a}));var a=[{path:"",component:o.a}]},525:function(e,t,n){"use strict";var o=n(47),a=n(0);n.d(t,"a",(function(){return r}));var r=(function(){function e(){this._state={}}return Object.defineProperty(e.prototype,"state",{get:function(){return this._state=this._clone(this._state)},set:function(e){throw new Error("do not mutate the `.state` directly")},enumerable:!0,configurable:!0}),e.prototype.get=function(e){var t=this.state;return t.hasOwnProperty(e)?t[e]:t},e.prototype.set=function(e,t){return this._state[e]=t},e.prototype._clone=function(e){return JSON.parse(JSON.stringify(e))},e})();r=o.a([n.i(a.p)()],r)},526:function(e,t,n){"use strict";var o=n(47),a=n(151),r=n(0),i=n(532);n.d(t,"a",(function(){return d}));var s=(n(678),n(681)),d=(function(){function e(e){this.nodesService=e,this.currentModelPart="main",this.portsVisible=!0,this.gridSnapEnabled=!1,this.SAVED_MODEL_KEY="model",this.GRID_STEP=30}return e.prototype.ngOnInit=function(){var e=this;this.canvas=new draw2d.Canvas("gfx_holder",2121,1500),this.canvas.uninstallEditPolicy("draw2d.policy.figure.RegionEditPolicy"),(function(e){e.style.position="relative",e.style.backgroundColor="#FFFFFF",e.style.border="1px solid darkolivegreen"})(document.querySelectorAll("svg")[0]),this.canvas.installEditPolicy(new draw2d.policy.connection.OrthogonalConnectionCreatePolicy),this.toggleGridSnap(),this.load(),this.canvas.on("select",(function(t,n){e.selectedNode=n.figure,null!=n.figure&&console.log(n.figure)})),this.canvas.on("connect",(function(e,t){if(t){var n=t.connection;n instanceof draw2d.Connection&&(n.setStroke(1),n.setColor("#000000"))}}))},e.prototype.toggleGridSnap=function(){if(this.gridSnapEnabled)this.canvas.uninstallEditPolicy("draw2d.policy.canvas.SnapToGridEditPolicy");else{var e=new draw2d.policy.canvas.SnapToGridEditPolicy(this.GRID_STEP);e.setGridColor(null),this.canvas.installEditPolicy(e)}this.gridSnapEnabled=!this.gridSnapEnabled},e.prototype.getPageFrame=function(){var e=new draw2d.shape.basic.Rectangle({x:90,y:25,bgColor:null,width:2e3,height:1450,radius:0});return e.setSelectable(!1),e.setDraggable(!1),e},e.prototype.setRadius=function(e,t){var n=this.canvas.getSelection().all.data.filter((function(e){return e instanceof draw2d.Connection}));if(0===n.length)throw new Error("No connections in selection to set radius");try{n.forEach((function(e){return e.setRadius(t)}))}catch(e){alert("Не удалось установить радиус:"+e.message)}},e.prototype.isConnection=function(e){return e instanceof draw2d.Connection},e.prototype.isBlock=function(e){return e instanceof draw2d.shape.node.Block},e.prototype.editBlock=function(e){this.save(),this.currentModelPart="block_"+e.id;try{this.load()}catch(e){this.canvas.clear()}},e.prototype.backToMainModel=function(){this.save(),this.currentModelPart="main",this.load()},e.prototype.hasArrow=function(e){if(null!=e.sourceDecorator)throw new Error("Connection must not have source decorator");return null!=e.targetDecorator},e.prototype.setArrows=function(e){if(!this.isConnection(e))throw new Error("Node is not a connection");var t=new draw2d.decoration.connection.connectionPikArrowDecorator;this.hasArrow(e)?(e.setSourceDecorator(null),e.setTargetDecorator(null)):(e.setSourceDecorator(null),e.setTargetDecorator(t))},e.prototype.swapArrow=function(e){if(!this.isConnection(e))throw new Error("Node is not a connection");var t=e.getTarget(),n=e.getSource(),o=new draw2d.Connection;o.setSource(t),o.setTarget(n),this.hasArrow(e)&&this.setArrows(o),this.canvas.add(o),this.canvas.remove(e)},e.prototype.save=function(){var e=this;(new draw2d.io.json.Writer).marshal(this.canvas,(function(t){e.saveModelPart(e.currentModelPart,t)}))},e.prototype.load=function(){var e=new draw2d.io.json.Reader,t=this.loadModelPart(this.currentModelPart);this.canvas.clear(),e.unmarshal(this.canvas,t);var n=new draw2d.policy.figure.AntSelectionFeedbackPolicy;this.canvas.getFigures().data.forEach((function(e){return e.installEditPolicy(n)}))},e.prototype.reset=function(){if(confirm("Сбросить модель?")){for(var e=0;e<localStorage.length;e++)localStorage.removeItem(localStorage.key(e));window.location.reload()}},e.prototype.exportPng=function(){(new draw2d.io.png.Writer).marshal(this.canvas,(function(e){window.open(e,"_blank")}))},e.prototype.exportSvg=function(){(new draw2d.io.svg.Writer).marshal(this.canvas,(function(e){var t=new Blob([e],{type:"image/svg+xml;charset=utf-8"});s.saveAs(t,"sheet.svg")}))},e.prototype.createSampleModel=function(){confirm("Текущая модель будет удалена. Продолжить?")&&(this.saveModelPart("main",i.a.sample()),window.location.reload())},e.prototype.addNode=function(e){if("frame"===e){var t=this.getPageFrame();this.canvas.add(t),t.toBack()}else{var n=this.nodesService.getNodeInstance(e);n.userData={parameters:this.nodesService.getDefaultUserData(e)},n.installEditPolicy(new draw2d.policy.figure.AntSelectionFeedbackPolicy);var o=this.canvas.fromDocumentToCanvasCoordinate(($(window).width()-300)/2+300,$(window).height()/2);this.canvas.add(n,o.x,o.y)}},e.prototype.toggleCipherLabel=function(e){if("object"==typeof e){var t=e.getChildren().data.filter((function(e){return e instanceof draw2d.shape.basic.CipherLabel}));if(t.length>0)t.forEach((function(t){return e.remove(t)}));else{var n=this.nodesService.getPropertyValue(e,"cipher");if(!n)return void alert("Заполните шифр");var o=new draw2d.shape.basic.CipherLabel;o.setText(n),e.add(o,new draw2d.layout.locator.TopLeftLocator)}}},e.prototype.hasCipherLabel=function(e){return!!e&&e.getChildren().data.filter((function(e){return e instanceof draw2d.shape.basic.CipherLabel})).length>0},e.prototype.canAddCipher=function(e){return e&&e instanceof draw2d.shape.node.Operation},e.prototype.togglePorts=function(){var e=this;this.portsVisible=!this.portsVisible,this.canvas.getAllPorts().data.forEach((function(t){return t.setVisible(e.portsVisible)}))},e.prototype.addLabel=function(e){var t=new draw2d.shape.note.PostIt({text:"Метка",x:20,y:20});t.installEditor(new draw2d.ui.LabelInplaceEditor),t.setFontColor(0),t.setColor(null),t.setBackgroundColor(null),e.add(t,new draw2d.layout.locator.DraggableLocator)},e.prototype.saveModelPart=function(e,t){localStorage.setItem(this.SAVED_MODEL_KEY+"."+e,JSON.stringify(t,null,2))},e.prototype.loadModelPart=function(e){var t=localStorage.getItem(this.SAVED_MODEL_KEY+"."+e);if(!t)return null;try{return JSON.parse(t)}catch(e){alert("Ошибка формата сохраненных даных: "+e.message)}},e})();d=o.a([n.i(r._4)({selector:"home",providers:[],styles:[n(703)],template:n(683)}),o.b("design:paramtypes",[a.a])],d)},527:function(e,t,n){"use strict";var o=n(528);n.d(t,"a",(function(){return o.a}))},528:function(e,t,n){"use strict";var o=n(47),a=n(0);n.d(t,"a",(function(){return r}));var r=(function(){function e(e,t){this.element=e,this.renderer=t,t.setElementStyle(e.nativeElement,"fontSize","x-large")}return e})();r=o.a([n.i(a.v)({selector:"[x-large]"}),o.b("design:paramtypes",[a.C,a.D])],r)},529:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var o=(function(){function e(e){Object.assign(this,e)}return e})()},530:function(e,t,n){"use strict";var o=n(47),a=n(0),r=n(151);n.d(t,"a",(function(){return i}));var i=(function(){function e(e){this.nodesService=e}return Object.defineProperty(e.prototype,"node",{get:function(){return this._node},set:function(e){this._node=e},enumerable:!0,configurable:!0}),e.prototype.typeLabel=function(e){return this.nodesService.nodeTypeLabelByInstance(e)},e})();o.a([n.i(a.w)(),o.b("design:type",Object),o.b("design:paramtypes",[Object])],i.prototype,"node",null),i=o.a([n.i(a._4)({selector:"node-info",providers:[],template:n(684)}),o.b("design:paramtypes",[r.a])],i)},531:function(e,t,n){"use strict";var o=n(47),a=n(151),r=n(0);n.d(t,"a",(function(){return i}));var i=(function(){function e(e){this.nodesService=e,this.addNode=new r.G,this.nodes=e.getNodeTypes()}return e.prototype.onAddNode=function(e){this.addNode.emit(e)},e.prototype.getNodeByType=function(e){var t=this.nodesService.getNodeType(e);if(!t)throw new Error("Неизвестный тип узла: '"+e+"'");return new t.className},e})();o.a([n.i(r._1)(),o.b("design:type",Object)],i.prototype,"addNode",void 0),i=o.a([n.i(r._4)({selector:"nodes",providers:[],template:n(685)}),o.b("design:paramtypes",[a.a])],i)},532:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var o=(function(){function e(){}return e.sample=function(){return a.data},e})(),a=(function(){function e(){}return e})();a.data=[{type:"draw2d.shape.node.Start",id:"e180e3bd-697f-cabc-eb2e-aa48ba3ef476",x:150,y:390,width:80.32799999999986,height:30,alpha:1,angle:0,userData:{parameters:[{name:"name",label:"Имя",value:"Без имени"}]},cssClass:"draw2d_shape_node_Start",bgColor:"none",color:"#1B1B1B",stroke:0,radius:0,dasharray:null,labels:[{type:"draw2d.shape.note.PostIt",id:"2844cce3-0377-7f84-55cc-5d86d066cd41",x:7,y:1,width:41,height:23,alpha:1,angle:0,userData:{},cssClass:"draw2d_shape_note_PostIt",ports:[],bgColor:"none",color:"none",stroke:1,radius:5,dasharray:null,text:"Начало",outlineStroke:0,outlineColor:"none",fontSize:14,fontColor:"#000000",fontFamily:null,editor:"draw2d.ui.LabelInplaceEditor",locator:"draw2d.layout.locator.DraggableLocator"}]},{type:"draw2d.shape.node.End",id:"42493e90-2d2f-d957-41f2-61606db56615",x:810,y:390,width:107.75383040000031,height:34.45259520000013,alpha:1,angle:0,userData:{parameters:[{name:"name",label:"Имя",value:"Без имени"}]},cssClass:"draw2d_shape_node_End",bgColor:"none",color:"#1B1B1B",stroke:0,radius:0,dasharray:null,labels:[{type:"draw2d.shape.note.PostIt",id:"85fcbb1f-65cf-1d7a-0d0f-2a1bf95d5618",x:13,y:3,width:41,height:23,alpha:1,angle:0,userData:{},cssClass:"draw2d_shape_note_PostIt",ports:[],bgColor:"none",color:"none",stroke:1,radius:5,dasharray:null,text:"к Б5",outlineStroke:0,outlineColor:"none",fontSize:14,fontColor:"#000000",fontFamily:null,editor:"draw2d.ui.LabelInplaceEditor",locator:"draw2d.layout.locator.DraggableLocator"}]},{type:"draw2d.shape.node.Operation",id:"bafbf9d6-c49c-db64-f424-d0bb2a9d456e",x:390,y:390,width:30,height:30,alpha:1,angle:0,userData:{parameters:[{name:"name",label:"Имя",value:"Без имени"},{name:"cipher",label:"Шифр",value:"A123"},{name:"tools",label:"Инструменты",value:""}]},cssClass:"draw2d_shape_node_Operation",bgColor:"none",color:"#1B1B1B",stroke:0,radius:0,dasharray:null,labels:[{type:"draw2d.shape.basic.CipherLabel",id:"7c00cb84-dbca-9b62-466c-59f52a6b6ea2",x:-58.796875,y:-45.392960000000926,width:78.796875,height:44.392960000000926,alpha:1,angle:0,userData:{},cssClass:"draw2d_shape_basic_CipherLabel",bgColor:"none",color:"#1B1B1B",stroke:0,radius:0,dasharray:null,labels:[],text:"A123",locator:"draw2d.layout.locator.TopLeftLocator"}]},{type:"draw2d.shape.node.Operation",id:"0c089f22-a571-603e-aa56-094d823bb560",x:600,y:390,width:30,height:30,alpha:1,angle:0,userData:{parameters:[{name:"name",label:"Имя",value:"Без имени"},{name:"cipher",label:"Шифр",value:"B456"},{name:"tools",label:"Инструменты",value:""}]},cssClass:"draw2d_shape_node_Operation",bgColor:"none",color:"#1B1B1B",stroke:0,radius:0,dasharray:null,labels:[{type:"draw2d.shape.basic.CipherLabel",id:"209e7799-fe30-a2f8-b6bd-a1927d8010b4",x:-58.796875,y:-45.392960000000926,width:78.796875,height:44.392960000000926,alpha:1,angle:0,userData:{},cssClass:"draw2d_shape_basic_CipherLabel",bgColor:"none",color:"#1B1B1B",stroke:0,radius:0,dasharray:null,labels:[],text:"B456",locator:"draw2d.layout.locator.TopLeftLocator"}]},{type:"draw2d.Connection",id:"8e364adc-7939-e16b-3c1c-1b675880d1dd",alpha:1,angle:0,userData:{},cssClass:"draw2d_Connection",stroke:1,color:"#000000",outlineStroke:0,outlineColor:"none",policy:"draw2d.policy.line.OrthogonalSelectionFeedbackPolicy",vertex:[{x:809.8720256,y:405.50366784000005},{x:720.0992943755265,y:405.50366784000005},{x:720.0992943755265,y:405},{x:630.3265631510529,y:405}],router:"draw2d.layout.connection.InteractiveManhattanConnectionRouter",radius:7,routingMetaData:{routedByUserInteraction:!1,fromDir:3,toDir:1},source:{node:"42493e90-2d2f-d957-41f2-61606db56615",port:"Port",decoration:"draw2d.decoration.connection.connectionPikArrowDecorator"},target:{node:"0c089f22-a571-603e-aa56-094d823bb560",port:"Output"}},{type:"draw2d.Connection",id:"e4f0db40-83d2-5797-31be-15d86dd2bf3a",alpha:1,angle:0,userData:{},cssClass:"draw2d_Connection",stroke:1,color:"#000000",outlineStroke:0,outlineColor:"none",policy:"draw2d.policy.line.OrthogonalSelectionFeedbackPolicy",vertex:[{x:599.7120362651648,y:405},{x:420.32656315105294,y:405}],router:"draw2d.layout.connection.InteractiveManhattanConnectionRouter",radius:7,routingMetaData:{routedByUserInteraction:!1,fromDir:3,toDir:1},source:{node:"0c089f22-a571-603e-aa56-094d823bb560",port:"Input",decoration:"draw2d.decoration.connection.connectionPikArrowDecorator"},target:{node:"bafbf9d6-c49c-db64-f424-d0bb2a9d456e",port:"Output"}},{type:"draw2d.Connection",id:"116c622b-96ee-0761-ddca-cc0ca12d08c5",alpha:1,angle:0,userData:{},cssClass:"draw2d_Connection",stroke:1,color:"#000000",outlineStroke:0,outlineColor:"none",policy:"draw2d.policy.line.OrthogonalSelectionFeedbackPolicy",vertex:[{x:389.7120362651648,y:405},{x:229.79200000000026,y:405}],router:"draw2d.layout.connection.InteractiveManhattanConnectionRouter",radius:7,routingMetaData:{routedByUserInteraction:!1,fromDir:3,toDir:1},source:{node:"bafbf9d6-c49c-db64-f424-d0bb2a9d456e",port:"Input",decoration:"draw2d.decoration.connection.connectionPikArrowDecorator"},target:{node:"e180e3bd-697f-cabc-eb2e-aa48ba3ef476",port:"Port"}}]},676:function(e,t,n){t=e.exports=n(373)(),t.push([e.i,"body,html{height:100%;font-family:Arial,Helvetica,sans-serif}a.active{background-color:gray}",""])},677:function(e,t,n){t=e.exports=n(373)(),t.push([e.i,"",""])},679:function(e,t){},680:function(e,t){},682:function(e,t){e.exports="<div>\n  <router-outlet></router-outlet>\n</div>\n"},683:function(e,t){e.exports='<style>\n  .layout {\n    width: 100vw;\n    height: 100vh;\n    margin: 0 auto;\n    position: relative;\n  }\n\n  .sidebar, .content {\n    position: absolute;\n  }\n\n  .sidebar {\n    background: #C6DD7D;\n    width: 300px;\n    height: 100vh;\n  }\n\n  .content {\n    background-color: #e6e6e6;\n    left: 300px;\n    height: 100vh;\n    position: fixed;\n    width: 77%;\n    overflow-x: scroll;\n    overflow-y: scroll;\n  }\n</style>\n<div class="layout">\n  <div class="sidebar">\n    <div class="panel panel-default">\n      <button class="btn btn-xs" (click)="save()">Сохранить</button>\n      <button class="btn btn-xs" (click)="load()">Загрузить</button>\n      <button class="btn btn-xs" (click)="reset()">Очистить</button>\n      <button class="btn btn-xs" (click)="createSampleModel()">Пример модели</button>\n      <button class="btn btn-xs" (click)="exportPng()">Экспорт PNG</button>\n      <button class="btn btn-xs" (click)="exportSvg()">Экспорт SVG</button>\n    </div>\n    <div class="panel panel-default">\n      <div class="panel-heading"><strong>Управление</strong></div>\n      <div class="panel-body">\n        <div class="form-group-sm" style="display: inline-block;">\n          <button class="btn btn-xs" (click)="setRadius(selectedNode, radius.value)"\n                  [disabled]="!isConnection(selectedNode)">Радиус\n          </button>\n          <input style="display: inline-block; width: 50px;" class="form-control" size="1" #radius type="number"\n                 value="0" min="0" step="1">\n        </div>\n        <button class="btn btn-xs" (click)="setArrows(selectedNode)" [disabled]="!isConnection(selectedNode)">Переключить\n          стрелку\n        </button>\n        <button class="btn btn-xs" (click)="swapArrow(selectedNode)" [disabled]="!isConnection(selectedNode)">Перевернуть\n          стрелку\n        </button>\n        <button class="btn btn-xs" (click)="addLabel(selectedNode)" [disabled]="!selectedNode">Добавить метку</button>\n        <button class="btn btn-xs" (click)="toggleCipherLabel(selectedNode)" [disabled]="!canAddCipher(selectedNode)"\n                [class.btn-success]="hasCipherLabel(selectedNode)" title="Создать или удалить выноску">Переключить выноску\n        </button>\n        <button class="btn btn-xs" (click)="editBlock(selectedNode)" [disabled]="!isBlock(selectedNode)">Редактировать\n          блок\n        </button>\n        <button class="btn btn-xs" (click)="backToMainModel()" [disabled]="currentModelPart === \'main\'">Вернуться к\n          модели\n        </button>\n        <button class="btn btn-xs" (click)="togglePorts()" [class.btn-success]="portsVisible"\n                title="Скрыть или показать порты">Переключить порты\n        </button>\n        <button class="btn btn-xs" (click)="toggleGridSnap()" [class.btn-success]="gridSnapEnabled"\n                title="Включить или оключить привязку к сетке">Переключить сетку\n        </button>\n      </div>\n    </div>\n    <nodes (addNode)="addNode($event)"></nodes>\n    <node-info [node]="selectedNode"></node-info>\n  </div>\n  <div class="content">\n    <!--<div style="width: 100%; height: 100%; overflow: scroll;">-->\n    <div onselectstart="javascript:/*IE8 hack*/return false" id="gfx_holder"\n         style="width: 100%; height: 100%; cursor: default; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);">\n\n    </div>\n    <!--</div>-->\n  </div>\n</div>\n'},684:function(e,t){e.exports='<div class="panel panel-default">\n  <div class="panel-heading"><strong>Свойства<span *ngIf="node">: {{typeLabel(node)}}</span></strong></div>\n  <div class="panel-body">\n    <div *ngIf="node && node.userData && node.userData.parameters">\n      <div class="form-group-sm" *ngFor="let parameter of node.userData.parameters">\n        <label>{{parameter.label}}</label>\n        <input class="form-control" type="text" [(ngModel)]="parameter.value">\n      </div>\n    </div>\n    <div *ngIf="node && (!node.userData || !node.userData.parameters)">\n      Узел не имеет свойств\n    </div>\n    <div *ngIf="!node">\n      Узел не выбран\n    </div>\n  </div>\n</div>\n'},685:function(e,t){e.exports='<style>\n    hr {\n        margin-top: 4px;\n        margin-bottom: 4px;\n    }\n</style>\n<div class="panel panel-default">\n    <div class="panel-heading"><strong>Добавить элементы</strong></div>\n    <div class="panel-body">\n        <div>\n            <span *ngFor="let node of nodes"> <button *ngIf="!node.hidden" (click)="onAddNode(node.name)"\n                                                      class="btn btn-xs">{{node.label}}</button></span>\n        </div>\n        <!--<hr>-->\n        <!--<div>-->\n            <!--<button (click)="onAddNode(\'frame\')"-->\n                    <!--class="btn btn-xs">Рамка листа</button>-->\n        <!--</div>-->\n    </div>\n</div>\n'},702:function(e,t,n){var o=n(676);e.exports="string"==typeof o?o:o.toString()},703:function(e,t,n){var o=n(677);e.exports="string"==typeof o?o:o.toString()},706:function(e,t,n){"use strict";function o(){return n.i(a.a)().bootstrapModule(s.a).then(r.a).catch((function(e){return console.error(e)}))}Object.defineProperty(t,"__esModule",{value:!0});var a=n(390),r=n(251),i=n(252),s=(n.n(i),n(391));t.main=o,n.i(i.bootloader)(o)}},[706]);