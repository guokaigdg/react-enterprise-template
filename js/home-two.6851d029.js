"use strict";(self.webpackChunkreact_template=self.webpackChunkreact_template||[]).push([[96],{12217:function(n,e,t){t.r(e),t.d(e,{default:function(){return Y}});var o=t(33938),r=t(95266),A=(t(68309),t(97606)),i=t.n(A),a=t(30222),s=t.n(a),l=t(67294),c=t(79379),m=t(22871),p=t(50242),f=t(93379),d=t.n(f),h=t(7795),u=t.n(h),C=t(90569),x=t.n(C),E=t(3565),B=t.n(E),g=t(19216),w=t.n(g),b=t(44589),k=t.n(b),y=t(88662),v={};v.styleTagTransform=k(),v.setAttributes=B(),v.insert=x().bind(null,"head"),v.domAPI=u(),v.insertStyleElement=w();d()(y.Z,v),y.Z&&y.Z.locals&&y.Z.locals;var Y=(0,p.Pi)((function(){var n=(0,c.mZ)().globalStore,e=n.loading,t=n.data,A=n.getFetchGetTest,a=(0,l.useState)(20),p=(0,r.Z)(a,2),f=p[0],d=p[1],h=function(){var n=(0,o.Z)(s().mark((function n(){return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,A({limit:20,offset:f});case 2:d(f+20);case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return(0,l.useEffect)((function(){A({limit:20,offset:0})}),[]),l.createElement("div",{className:"home-two-root"},l.createElement("div",{className:"search-wrap"},l.createElement("input",{className:"input",type:"search",placeholder:"输入宝可梦名称"}),l.createElement(m.zx,{className:"search-btn",onClick:function(){A({limit:500})}},"查询")),l.createElement("div",{className:"list-root"},i()(t).call(t,(function(n){return l.createElement("div",{key:n.name,className:"pokemon-item",onClick:h},l.createElement("img",{alt:"",className:"img",src:"https://img.pokemondb.net/artwork/large/".concat(n.name,".jpg")}),l.createElement("span",null,n.name))})),l.createElement("div",{className:"pokemon-item-bottom"},e?l.createElement(m.zx,null,"loading"):l.createElement(m.zx,{onClick:h},"查看更多"))))}))},88662:function(n,e,t){var o=t(87537),r=t.n(o),A=t(23645),i=t.n(A)()(r());i.push([n.id,".home-two-root {\n  display: flex;\n  flex: 1 1;\n  flex-direction: column;\n  box-sizing: border-box;\n  height: 100%;\n  background: #313338;\n  border-radius: 10px;\n}\n.home-two-root .search-wrap {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: auto;\n  height: 120px;\n}\n.home-two-root .search-wrap .input {\n  width: 250px;\n  height: 40px;\n  padding: 0 5px;\n  text-align: center;\n  border-radius: 6px;\n}\n.home-two-root .search-wrap .search-btn {\n  margin-left: 20px;\n}\n.home-two-root .list-root {\n  display: flex;\n  flex: 1 1;\n  flex-wrap: wrap;\n  justify-content: center;\n  padding: 5px;\n  overflow: scroll;\n}\n.home-two-root .list-root .pokemon-item {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  box-sizing: border-box;\n  width: 300px;\n  height: 200px;\n  margin: 8px;\n  color: #383a3a;\n  font-size: 24px;\n  background-color: #ffffff;\n  border-radius: 10px;\n}\n.home-two-root .list-root .pokemon-item:hover {\n  transform: scale(1.03);\n  cursor: pointer;\n  opacity: 0.9;\n  transition: 0.2s;\n}\n.home-two-root .list-root .pokemon-item .img {\n  width: 100px;\n  height: 100px;\n  margin: 10px;\n}\n.home-two-root .list-root .pokemon-item-bottom {\n  display: flex;\n  justify-content: center;\n  width: 100%;\n}\n","",{version:3,sources:["webpack://./src/view/Home/HomeTwo/index.less"],names:[],mappings:"AAAA;EACE,aAAa;EACb,SAAO;EACP,sBAAsB;EACtB,sBAAsB;EACtB,YAAY;EACZ,mBAAmB;EACnB,mBAAmB;AACrB;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,WAAW;EACX,aAAa;AACf;AACA;EACE,YAAY;EACZ,YAAY;EACZ,cAAc;EACd,kBAAkB;EAClB,kBAAkB;AACpB;AACA;EACE,iBAAiB;AACnB;AACA;EACE,aAAa;EACb,SAAO;EACP,eAAe;EACf,uBAAuB;EACvB,YAAY;EACZ,gBAAgB;AAClB;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,sBAAsB;EACtB,YAAY;EACZ,aAAa;EACb,WAAW;EACX,cAAc;EACd,eAAe;EACf,yBAAyB;EACzB,mBAAmB;AACrB;AACA;EACE,sBAAsB;EACtB,eAAe;EACf,YAAY;EACZ,gBAAgB;AAClB;AACA;EACE,YAAY;EACZ,aAAa;EACb,YAAY;AACd;AACA;EACE,aAAa;EACb,uBAAuB;EACvB,WAAW;AACb",sourcesContent:[".home-two-root {\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  box-sizing: border-box;\n  height: 100%;\n  background: #313338;\n  border-radius: 10px;\n}\n.home-two-root .search-wrap {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: auto;\n  height: 120px;\n}\n.home-two-root .search-wrap .input {\n  width: 250px;\n  height: 40px;\n  padding: 0 5px;\n  text-align: center;\n  border-radius: 6px;\n}\n.home-two-root .search-wrap .search-btn {\n  margin-left: 20px;\n}\n.home-two-root .list-root {\n  display: flex;\n  flex: 1;\n  flex-wrap: wrap;\n  justify-content: center;\n  padding: 5px;\n  overflow: scroll;\n}\n.home-two-root .list-root .pokemon-item {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  box-sizing: border-box;\n  width: 300px;\n  height: 200px;\n  margin: 8px;\n  color: #383a3a;\n  font-size: 24px;\n  background-color: #ffffff;\n  border-radius: 10px;\n}\n.home-two-root .list-root .pokemon-item:hover {\n  transform: scale(1.03);\n  cursor: pointer;\n  opacity: 0.9;\n  transition: 0.2s;\n}\n.home-two-root .list-root .pokemon-item .img {\n  width: 100px;\n  height: 100px;\n  margin: 10px;\n}\n.home-two-root .list-root .pokemon-item-bottom {\n  display: flex;\n  justify-content: center;\n  width: 100%;\n}\n"],sourceRoot:""}]),e.Z=i}}]);