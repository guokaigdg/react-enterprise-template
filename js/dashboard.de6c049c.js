"use strict";(self.webpackChunkreact_template=self.webpackChunkreact_template||[]).push([[966],{14266:function(e,r,t){t.r(r);var n=t(67294),o=t(50242),a=t(92383),l=t(18863),i=t(64961),u=t(24217),c=t(46283),f=t(35914),s=t(85195);r.default=(0,o.Pi)((function(){return n.createElement("div",{className:"dashboard-root"},n.createElement("span",null,"hello world Dashboard "),n.createElement(a.P.Provider,{value:{color:"#f9f4da",size:48,weight:"duotone",mirrored:!1}},n.createElement("div",null,n.createElement(l.Z,null)," ",n.createElement(i.Z,null)," ",n.createElement(u.Z,null)," ",n.createElement(c.Z,null),n.createElement(f.Z,null),n.createElement(s.Z,null))),n.createElement("span",null,"hello world Dashboard "),n.createElement("span",null,"hello world Dashboard "),n.createElement("span",null,"hello world Dashboard "),n.createElement("span",null,"hello world Dashboard "),n.createElement("span",null,"hello world Dashboard "),n.createElement("span",null,"hello world Dashboard "),n.createElement("span",null,"hello world Dashboard "),n.createElement("span",null,"hello world Dashboard "),n.createElement("span",null,"hello world Dashboard "),n.createElement("span",null,"hello world Dashboard "))}))},50242:function(e,r,t){t.d(r,{Qj:function(){return D},Pi:function(){return g},fv:function(){return O}});var n=t(68949),o=t(67294);if(!o.useState)throw new Error("mobx-react-lite requires React with Hooks support");if(!n.rC)throw new Error("mobx-react-lite@3 requires mobx at least version 6 to be available");var a=t(73935);function l(e){e()}function i(e){return(0,n.Gf)(e)}var u=function(){function e(e){var r=this;Object.defineProperty(this,"finalize",{enumerable:!0,configurable:!0,writable:!0,value:e}),Object.defineProperty(this,"registrations",{enumerable:!0,configurable:!0,writable:!0,value:new Map}),Object.defineProperty(this,"sweepTimeout",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"sweep",{enumerable:!0,configurable:!0,writable:!0,value:function(e){void 0===e&&(e=1e4),clearTimeout(r.sweepTimeout),r.sweepTimeout=void 0;var t=Date.now();r.registrations.forEach((function(n,o){t-n.registeredAt>=e&&(r.finalize(n.value),r.registrations.delete(o))})),r.registrations.size>0&&r.scheduleSweep()}}),Object.defineProperty(this,"finalizeAllImmediately",{enumerable:!0,configurable:!0,writable:!0,value:function(){r.sweep(0)}})}return Object.defineProperty(e.prototype,"register",{enumerable:!1,configurable:!0,writable:!0,value:function(e,r,t){this.registrations.set(t,{value:r,registeredAt:Date.now()}),this.scheduleSweep()}}),Object.defineProperty(e.prototype,"unregister",{enumerable:!1,configurable:!0,writable:!0,value:function(e){this.registrations.delete(e)}}),Object.defineProperty(e.prototype,"scheduleSweep",{enumerable:!1,configurable:!0,writable:!0,value:function(){void 0===this.sweepTimeout&&(this.sweepTimeout=setTimeout(this.sweep,1e4))}}),e}(),c=new("undefined"!=typeof FinalizationRegistry?FinalizationRegistry:u)((function(e){var r;null===(r=e.reaction)||void 0===r||r.dispose(),e.reaction=null})),f=!1;function s(){return f}var d=function(e,r){var t="function"==typeof Symbol&&e[Symbol.iterator];if(!t)return e;var n,o,a=t.call(e),l=[];try{for(;(void 0===r||r-- >0)&&!(n=a.next()).done;)l.push(n.value)}catch(e){o={error:e}}finally{try{n&&!n.done&&(t=a.return)&&t.call(a)}finally{if(o)throw o.error}}return l};function p(e){return"observer".concat(e)}var m=function(){};function b(){return new m}function h(e,r){if(void 0===r&&(r="observed"),s())return e();var t=d(o.useState(b),1)[0],a=d(o.useState(),2)[1],l=function(){return a([])},u=o.useRef(null);u.current||(u.current={reaction:null,mounted:!1,changedBeforeMount:!1});var f,m,h=u.current;if(h.reaction||(h.reaction=new n.le(p(r),(function(){h.mounted?l():h.changedBeforeMount=!0})),c.register(t,h,h)),o.useDebugValue(h.reaction,i),o.useEffect((function(){return c.unregister(h),h.mounted=!0,h.reaction?h.changedBeforeMount&&(h.changedBeforeMount=!1,l()):(h.reaction=new n.le(p(r),(function(){l()})),l()),function(){h.reaction.dispose(),h.reaction=null,h.mounted=!1,h.changedBeforeMount=!1}}),[]),h.reaction.track((function(){try{f=e()}catch(e){m=e}})),m)throw m;return f}var w="function"==typeof Symbol&&Symbol.for,v=w?Symbol.for("react.forward_ref"):"function"==typeof o.forwardRef&&(0,o.forwardRef)((function(e){return null})).$$typeof,y=w?Symbol.for("react.memo"):"function"==typeof o.memo&&(0,o.memo)((function(e){return null})).$$typeof;function g(e,r){var t;if(y&&e.$$typeof===y)throw new Error("[mobx-react-lite] You are trying to use `observer` on a function component wrapped in either another `observer` or `React.memo`. The observer already applies 'React.memo' for you.");if(s())return e;var n=null!==(t=null==r?void 0:r.forwardRef)&&void 0!==t&&t,a=e,l=e.displayName||e.name;if(v&&e.$$typeof===v&&(n=!0,"function"!=typeof(a=e.render)))throw new Error("[mobx-react-lite] `render` property of ForwardRef was not a function");var i,u,c=function(e,r){return h((function(){return a(e,r)}),l)};return""!==l&&(c.displayName=l),e.contextTypes&&(c.contextTypes=e.contextTypes),n&&(c=(0,o.forwardRef)(c)),c=(0,o.memo)(c),i=e,u=c,Object.keys(i).forEach((function(e){E[e]||Object.defineProperty(u,e,Object.getOwnPropertyDescriptor(i,e))})),c}var E={$$typeof:!0,render:!0,compare:!0,type:!0,displayName:!0};function D(e){var r=e.children,t=e.render,n=r||t;return"function"!=typeof n?null:h(n)}function O(e,r){return(0,o.useState)((function(){return(0,n.LO)(e(),r,{autoBind:!0})}))[0]}D.displayName="Observer";var P,S;(S=a.unstable_batchedUpdates)||(S=l),(0,n.jQ)({reactionScheduler:S});P=c.finalizeAllImmediately}}]);