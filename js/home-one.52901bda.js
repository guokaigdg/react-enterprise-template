"use strict";(self.webpackChunkreact_template=self.webpackChunkreact_template||[]).push([[374],{80478:function(e,n,t){t.r(n),t.d(n,{default:function(){return h}});var o=t(96540),A=t(93443),l=t(6523),a=t(85072),r=t.n(a),c=t(97825),s=t.n(c),i=t(77659),m=t.n(i),u=t(55056),d=t.n(u),B=t(10540),p=t.n(B),b=t(41113),x=t.n(b),E=t(48166),g={};g.styleTagTransform=x(),g.setAttributes=d(),g.insert=m().bind(null,"head"),g.domAPI=s(),g.insertStyleElement=p();r()(E.A,g),E.A&&E.A.locals&&E.A.locals;var h=(0,A.PA)((function(){var e=(0,A.iz)((function(){return{count:0,increment:function(){this.count++},decrement:function(){this.count--}}}));return o.createElement("div",{className:"home-one-root"},o.createElement("h2",null,"使用 useLocalObservable 在 React 函数组件中创建局部的 observable 对象"),o.createElement("div",{className:"one-des"},o.createElement("h2",null," 关于 useLocalObservable"),o.createElement("h3",null,"1. useLocalObservable 是 mobx-react-lite 提供的一个钩子函数，用于在 React 函数组件中创建局部的 observable 对象。"),o.createElement("h3",null," 2. 可以使局部的状态更加清晰"),o.createElement("h3",null," 3. 代码更加简洁，避免在顶层创建全局的 observable 对象，提高了组件的可维护性和可重用性。")),o.createElement("div",{className:"one-card"},o.createElement(l.Zp,null,o.createElement("h2",null,"Count: ",e.count)),o.createElement(l.Zp,null,o.createElement(l.$n,{onClick:e.increment}," +1 "),o.createElement("span",{className:"block"}),o.createElement(l.$n,{onClick:e.decrement}," -1 "))))}))},48166:function(e,n,t){var o=t(71354),A=t.n(o),l=t(76314),a=t.n(l),r=t(4417),c=t.n(r),s=new URL(t(22816),t.b),i=a()(A()),m=c()(s);i.push([e.id,".home-one-root {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex: 1 1;\n      flex: 1 1;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  -ms-flex-align: center;\n      align-items: center;\n  box-sizing: border-box;\n  width: 100%;\n  padding: 180px 20px;\n  color: #989b9d;\n  text-align: left;\n  background: #313338;\n  background-image: url("+m+");\n  border-radius: 10px;\n}\n.home-one-root .one-des {\n  margin-top: 25px;\n}\n.home-one-root .one-card {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  -ms-flex-pack: justify;\n      justify-content: space-between;\n  width: 30%;\n  height: 180px;\n  margin-top: 25px;\n}\n.home-one-root .one-card .block {\n  margin-right: 20px;\n}\n","",{version:3,sources:["webpack://./src/view/Home/HomeOne/index.less"],names:[],mappings:"AAAA;EACE,oBAAa;EAAb,aAAa;EACb,aAAO;MAAP,SAAO;EACP,0BAAsB;MAAtB,sBAAsB;EACtB,sBAAmB;MAAnB,mBAAmB;EACnB,sBAAsB;EACtB,WAAW;EACX,mBAAmB;EACnB,cAAc;EACd,gBAAgB;EAChB,mBAAmB;EACnB,yDAAgD;EAChD,mBAAmB;AACrB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,oBAAa;EAAb,aAAa;EACb,0BAAsB;MAAtB,sBAAsB;EACtB,sBAA8B;MAA9B,8BAA8B;EAC9B,UAAU;EACV,aAAa;EACb,gBAAgB;AAClB;AACA;EACE,kBAAkB;AACpB",sourcesContent:[".home-one-root {\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  align-items: center;\n  box-sizing: border-box;\n  width: 100%;\n  padding: 180px 20px;\n  color: #989b9d;\n  text-align: left;\n  background: #313338;\n  background-image: url('@/assets/images/bgp.png');\n  border-radius: 10px;\n}\n.home-one-root .one-des {\n  margin-top: 25px;\n}\n.home-one-root .one-card {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  width: 30%;\n  height: 180px;\n  margin-top: 25px;\n}\n.home-one-root .one-card .block {\n  margin-right: 20px;\n}\n"],sourceRoot:""}]),n.A=i},4417:function(e){e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}}}]);