"use strict";(self.webpackChunkreact_template=self.webpackChunkreact_template||[]).push([[265],{79524:function(e,n,t){t.r(n),t.d(n,{default:function(){return d}});var r=t(67294),l=t(33938),c=t(97606),o=t.n(c),u=(t(68309),t(30222)),a=t.n(u),i=t(50242),s=t(11702),m=t(16376),f=function(){var e=(0,i.fv)((function(){return{count:0,loading:!1,list:[],increment:function(){this.count++},decrement:function(){this.count--},onFetchPokemon:function(){var e=this;return(0,l.Z)(a().mark((function n(){var t,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.loading=!0,n.next=3,(0,m.k)({limit:100});case 3:t=n.sent,r=t.results,e.list=r,e.loading=!1;case 7:case"end":return n.stop()}}),n)})))()},onChange:function(e){e.name="我被修改了"}}})),n=function(n){var t=n.item;return r.createElement(i.Qj,null,(function(){return t.name,r.createElement("p",{onClick:function(){return e.onChange(t)}},t.name)}))};return r.createElement(i.Qj,null,(function(){var t;return e.loading?r.createElement("p",null,"loading..."):r.createElement("div",null,r.createElement("h3",null,"Observer 点击获取数据, 打开控制台, 点击某一项查看console.log(渲染情况)"),r.createElement(s.zx,{onClick:function(){return e.onFetchPokemon()}},"获取数据Observer"),r.createElement("div",null,null===(t=e.list)||void 0===t?void 0:o()(t).call(t,(function(e){return r.createElement(n,{key:e.url,item:e})}))))}))},v=(0,i.Pi)((function(){var e,n=(0,i.fv)((function(){return{count:0,loading:!1,list:[],increment:function(){this.count++},decrement:function(){this.count--},onFetchPokemon:function(){var e=this;return(0,l.Z)(a().mark((function n(){var t,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.loading=!0,n.next=3,(0,m.k)({limit:100});case 3:t=n.sent,r=t.results,e.list=r,e.loading=!1;case 7:case"end":return n.stop()}}),n)})))()},onChange:function(e){e.name="我被修改了"}}}));return n.loading?r.createElement("p",null,"loading..."):r.createElement("div",null,r.createElement("h3",null," observer( ) 点击获取数据, 打开控制台, 点击某一项查看console.log(渲染情况)"),r.createElement(s.zx,{onClick:function(){return n.onFetchPokemon()}},"获取数据observer"),r.createElement("div",null,null===(e=n.list)||void 0===e?void 0:o()(e).call(e,(function(e){return e.name,r.createElement("p",{key:e.url,onClick:function(){return n.onChange(e)}},e.name)}))))})),d=function(){return r.createElement("div",{className:"home-three-root"},r.createElement("div",{className:"home-three-base"},r.createElement(f,null)),r.createElement("div",{className:"home-three-base"},r.createElement(v,null)))}}}]);