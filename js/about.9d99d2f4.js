"use strict";(self.webpackChunkreact_template=self.webpackChunkreact_template||[]).push([[443],{92002:function(e,n,t){t.r(n),t.d(n,{default:function(){return x}});var o=t(33938),r=t(45567),a=t(30222),c=t.n(a),i=t(67294),s=t(50242),l=t(68949),u=t(72961),A=t(16376),f=t(93379),m=t.n(f),p=t(7795),d=t.n(p),E=t(90569),h=t.n(E),g=t(3565),v=t.n(g),C=t(19216),k=t.n(C),B=t(44589),b=t.n(B),R=t(79548),w={};w.styleTagTransform=b(),w.setAttributes=v(),w.insert=h().bind(null,"head"),w.domAPI=d(),w.insertStyleElement=k();m()(R.Z,w),R.Z&&R.Z.locals&&R.Z.locals;var x=(0,s.Pi)((function(){var e=(0,i.useState)("LOADING"),n=(0,r.Z)(e,2),t=n[0],a=n[1],f=(0,s.fv)((function(){return{pokemon:"",getFetchPokemo:function(){var e=this;return(0,o.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,A.k)({limit:500});case 3:t=n.sent,t.results?(a("SUCCESS"),(0,l.z)((function(){e.pokemon="Pokemon"}))):(a("ERROR"),(0,l.z)((function(){e.pokemon="ERROR"}))),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),a("ERROR");case 12:case"end":return n.stop()}}),n,null,[[0,9]])})))()}}})),m=f.getFetchPokemo,p=f.pokemon;return(0,i.useEffect)((function(){m()}),[]),i.createElement("div",{className:"about-root"},i.createElement("a",{href:"https://github.com/guokaigdg/react-enterprise-template"},i.createElement(u.Z,{size:68,color:"#f9f4da"})),i.createElement("p",null,"Hello About"),"LOADING"===t&&i.createElement("div",null,"LOADING"),"SUCCESS"===t&&i.createElement("div",null,"SUCCESS ",p),"ERROR"===t&&i.createElement("div",null,"ERROR ",p))}))},79548:function(e,n,t){var o=t(87537),r=t.n(o),a=t(23645),c=t.n(a)()(r());c.push([e.id,".about-root {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 100vw;\n  height: 100vh;\n  padding-top: 70px;\n  color: #f9f4da;\n  font-weight: 900;\n  font-size: 50px;\n  background: #222;\n}\n","",{version:3,sources:["webpack://./src/view/About/index.less"],names:[],mappings:"AAAA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,YAAY;EACZ,aAAa;EACb,iBAAiB;EACjB,cAAc;EACd,gBAAgB;EAChB,eAAe;EACf,gBAAgB;AAClB",sourcesContent:[".about-root {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 100vw;\n  height: 100vh;\n  padding-top: 70px;\n  color: #f9f4da;\n  font-weight: 900;\n  font-size: 50px;\n  background: #222;\n}\n"],sourceRoot:""}]),n.Z=c}}]);