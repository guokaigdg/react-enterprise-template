"use strict";(self.webpackChunkreact_template=self.webpackChunkreact_template||[]).push([[489],{79703:function(e,t,n){var a=n(67294);t.Z=function(e){var t=e.svgName,n=e.color,c=e.svgClass;return a.createElement("i",{"aria-hidden":"true"},a.createElement("svg",{className:"svg-class ".concat(c)},a.createElement("use",{xlinkHref:"#icon-"+t,fill:n})))}},6715:function(e,t,n){n.d(t,{zx:function(){return m},Zb:function(){return s}});var a=n(73126),c=n(44845),l=n(41266),r=n(67294),o=n(94184),u=n.n(o),i=["onClick","children","className","active","type"],m=function(e){var t,n=e.onClick,o=e.children,m=e.className,s=e.active,d=e.type,f=void 0===d?"default":d,v=(0,l.Z)(e,i),b=u()("cp-btn",(t={},(0,c.Z)(t,"cp-".concat(f),f),(0,c.Z)(t,"cp-btn-active",s),t),m);return r.createElement("button",(0,a.Z)({className:b,onClick:function(e){null==n||n(e)}},v),o)},s=function(e){var t=e.children;return r.createElement("div",{className:"cp-card"},t)};n(79703)},40492:function(e,t,n){n.r(t);n(68309);var a=n(67294),c=n(50242),l=n(78897),r=n(6715);t.default=(0,c.Pi)((function(){var e=(0,l.mZ)(),t=e.globalStore,n=e.aboutStore,c=t.count,o=t.name,u=t.addCount,i=t.setName,m=n.count,s=n.aboutAddCount;return a.createElement("div",{className:"home-mobx-root"},a.createElement("p",null,o),a.createElement("p",null," globalStore: ",c),a.createElement("p",null," aboutStore: ",m),a.createElement("div",null,a.createElement(r.zx,{onClick:function(){u(),s()}},"Mobx数据更新-addCount"),a.createElement("span",{className:"mobx-block"}),a.createElement(r.zx,{onClick:function(){i("Hello".concat(10*Math.random()))}},"Mobx数据更新-setName")))}))}}]);