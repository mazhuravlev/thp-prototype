webpackJsonp([1],{706:function(n,r,e){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var o=e(717);e.d(r,"BarrelModule",(function(){return o.a}))},711:function(n,r,e){"use strict";var o=e(26),t=e(0);e.d(r,"a",(function(){return a})),console.log("`Barrel` component loaded asynchronously");var a=(function(){function n(){}return n.prototype.ngOnInit=function(){console.log("hello `Barrel` component")},n})();a=o.a([e.i(t._2)({selector:"barrel",template:"\n    <h1>Hello from Barrel</h1>\n    <span>\n      <a [routerLink]=\" ['./child-barrel'] \">\n        Child Barrel\n      </a>\n    </span>\n    <router-outlet></router-outlet>\n  "})],a)},717:function(n,r,e){"use strict";var o=e(26),t=e(114),a=e(414),l=e(0),u=e(253),i=e(718),c=e(711);e.d(r,"a",(function(){return d})),console.log("`Barrel` bundle loaded asynchronously");var d=(function(){function n(){}return n})();d.routes=i.a,d=o.a([e.i(l.i)({declarations:[c.a],imports:[t.b,a.a,u.a.forChild(i.a)]})],d)},718:function(n,r,e){"use strict";var o=e(711);e.d(r,"a",(function(){return t}));var t=[{path:"",children:[{path:"",component:o.a},{path:"child-barrel",loadChildren:function(){return e.e(6).then(e.bind(null,716)).then((function(n){return n.ChildBarrelModule}))}}]}]}});