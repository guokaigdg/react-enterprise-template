"use strict";(self.webpackChunkreact_template=self.webpackChunkreact_template||[]).push([[96],{12217:function(n,e,t){t.r(e),t.d(e,{default:function(){return b}});t(68309);var o=t(97606),A=t.n(o),r=t(67294),a=t(79379),i=t(22871),s=t(50242),l=t(93379),c=t.n(l),m=t(7795),p=t.n(m),d=t(90569),h=t.n(d),x=t(3565),C=t.n(x),f=t(19216),E=t.n(f),u=t(44589),B=t.n(u),g=t(88662),w={};w.styleTagTransform=B(),w.setAttributes=C(),w.insert=h().bind(null,"head"),w.domAPI=p(),w.insertStyleElement=E();c()(g.Z,w),g.Z&&g.Z.locals&&g.Z.locals;var b=(0,s.Pi)((function(){var n=(0,a.mZ)().globalStore,e=n.loading,t=n.data,o=n.getFetchGetTest;return(0,r.useEffect)((function(){o({limit:500})}),[]),r.createElement("div",{className:"home-two-root"},r.createElement("div",{className:"search-wrap"},r.createElement("input",{className:"input",type:"search",placeholder:"输入宝可梦名称"}),r.createElement(i.zx,{className:"search-btn",onClick:function(){o({limit:500})}},"查询")),!e&&r.createElement("div",{className:"list-root"},A()(t).call(t,(function(n){return r.createElement("div",{key:n.name,className:"pokemon-item"},r.createElement("img",{alt:"",className:"img",src:"https://img.pokemondb.net/artwork/large/".concat(n.name,".jpg")}),r.createElement("span",null,n.name))}))))}))},88662:function(n,e,t){var o=t(87537),A=t.n(o),r=t(23645),a=t.n(r)()(A());a.push([n.id,".home-two-root {\n  display: flex;\n  flex: 1 1;\n  flex-direction: column;\n  box-sizing: border-box;\n  height: 100%;\n  background: #313338;\n  border-radius: 10px;\n}\n.home-two-root .search-wrap {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: auto;\n  height: 120px;\n}\n.home-two-root .search-wrap .input {\n  width: 250px;\n  height: 40px;\n  padding: 0 5px;\n  text-align: center;\n  border-radius: 6px;\n}\n.home-two-root .search-wrap .search-btn {\n  margin-left: 20px;\n}\n.home-two-root .list-root {\n  display: flex;\n  flex: 1 1;\n  flex-wrap: wrap;\n  justify-content: center;\n  padding: 5px;\n  overflow: scroll;\n}\n.home-two-root .list-root .pokemon-item {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  box-sizing: border-box;\n  width: 300px;\n  height: 200px;\n  margin: 8px;\n  color: #383a3a;\n  font-size: 24px;\n  background-color: #ffffff;\n  border-radius: 10px;\n}\n.home-two-root .list-root .pokemon-item:hover {\n  transform: scale(1.06);\n  cursor: pointer;\n  opacity: 0.9;\n  transition: 0.2s;\n}\n.home-two-root .list-root .pokemon-item .img {\n  width: 100px;\n  height: 100px;\n  margin: 10px;\n}\n","",{version:3,sources:["webpack://./src/view/Home/HomeTwo/index.less"],names:[],mappings:"AAAA;EACE,aAAa;EACb,SAAO;EACP,sBAAsB;EACtB,sBAAsB;EACtB,YAAY;EACZ,mBAAmB;EACnB,mBAAmB;AACrB;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,WAAW;EACX,aAAa;AACf;AACA;EACE,YAAY;EACZ,YAAY;EACZ,cAAc;EACd,kBAAkB;EAClB,kBAAkB;AACpB;AACA;EACE,iBAAiB;AACnB;AACA;EACE,aAAa;EACb,SAAO;EACP,eAAe;EACf,uBAAuB;EACvB,YAAY;EACZ,gBAAgB;AAClB;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,sBAAsB;EACtB,YAAY;EACZ,aAAa;EACb,WAAW;EACX,cAAc;EACd,eAAe;EACf,yBAAyB;EACzB,mBAAmB;AACrB;AACA;EACE,sBAAsB;EACtB,eAAe;EACf,YAAY;EACZ,gBAAgB;AAClB;AACA;EACE,YAAY;EACZ,aAAa;EACb,YAAY;AACd",sourcesContent:[".home-two-root {\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  box-sizing: border-box;\n  height: 100%;\n  background: #313338;\n  border-radius: 10px;\n}\n.home-two-root .search-wrap {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: auto;\n  height: 120px;\n}\n.home-two-root .search-wrap .input {\n  width: 250px;\n  height: 40px;\n  padding: 0 5px;\n  text-align: center;\n  border-radius: 6px;\n}\n.home-two-root .search-wrap .search-btn {\n  margin-left: 20px;\n}\n.home-two-root .list-root {\n  display: flex;\n  flex: 1;\n  flex-wrap: wrap;\n  justify-content: center;\n  padding: 5px;\n  overflow: scroll;\n}\n.home-two-root .list-root .pokemon-item {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  box-sizing: border-box;\n  width: 300px;\n  height: 200px;\n  margin: 8px;\n  color: #383a3a;\n  font-size: 24px;\n  background-color: #ffffff;\n  border-radius: 10px;\n}\n.home-two-root .list-root .pokemon-item:hover {\n  transform: scale(1.06);\n  cursor: pointer;\n  opacity: 0.9;\n  transition: 0.2s;\n}\n.home-two-root .list-root .pokemon-item .img {\n  width: 100px;\n  height: 100px;\n  margin: 10px;\n}\n"],sourceRoot:""}]),e.Z=a}}]);