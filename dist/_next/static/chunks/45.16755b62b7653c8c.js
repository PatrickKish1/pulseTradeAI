"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[45],{99136:function(e,n,t){t.d(n,{Z:function(){return b}});var a=t(22988),o=t(39428),r=t(12475),l=t(83627),i=t(2265),c=t(56800),s=t.n(c),d=t(44661),p=t(34815),m=t(42897),u=t(48956),g=["icon","className","onClick","style","primaryColor","secondaryColor"],y={primaryColor:"#333",secondaryColor:"#E6E6E6",calculated:!1},h=function(e){var n=e.icon,t=e.className,a=e.onClick,o=e.style,r=e.primaryColor,c=e.secondaryColor,s=(0,l.Z)(e,g),d=i.useRef(),p=y;if(r&&(p={primaryColor:r,secondaryColor:c||(0,u.pw)(r)}),(0,u.C3)(d),(0,u.Kp)((0,u.r)(n),"icon should be icon definiton, but got ".concat(n)),!(0,u.r)(n))return null;var h=n;return h&&"function"==typeof h.icon&&(h=(0,m.Z)((0,m.Z)({},h),{},{icon:h.icon(p.primaryColor,p.secondaryColor)})),(0,u.R_)(h.icon,"svg-".concat(h.name),(0,m.Z)((0,m.Z)({className:t,onClick:a,style:o,"data-icon":h.name,width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"},s),{},{ref:d}))};function w(e){var n=(0,u.H9)(e),t=(0,o.Z)(n,2),a=t[0],r=t[1];return h.setTwoToneColors({primaryColor:a,secondaryColor:r})}h.displayName="IconReact",h.getTwoToneColors=function(){return(0,m.Z)({},y)},h.setTwoToneColors=function(e){var n=e.primaryColor,t=e.secondaryColor;y.primaryColor=n,y.secondaryColor=t||(0,u.pw)(n),y.calculated=!!t};var f=["className","icon","spin","rotate","tabIndex","onClick","twoToneColor"];w(d.iN.primary);var x=i.forwardRef(function(e,n){var t=e.className,c=e.icon,d=e.spin,m=e.rotate,g=e.tabIndex,y=e.onClick,w=e.twoToneColor,x=(0,l.Z)(e,f),b=i.useContext(p.Z),v=b.prefixCls,k=void 0===v?"anticon":v,C=b.rootClassName,E=s()(C,k,(0,r.Z)((0,r.Z)({},"".concat(k,"-").concat(c.name),!!c.name),"".concat(k,"-spin"),!!d||"loading"===c.name),t),N=g;void 0===N&&y&&(N=-1);var A=(0,u.H9)(w),Z=(0,o.Z)(A,2),T=Z[0],W=Z[1];return i.createElement("span",(0,a.Z)({role:"img","aria-label":c.name},x,{ref:n,tabIndex:N,onClick:y,className:E}),i.createElement(h,{icon:c,primaryColor:T,secondaryColor:W,style:m?{msTransform:"rotate(".concat(m,"deg)"),transform:"rotate(".concat(m,"deg)")}:void 0}))});x.displayName="AntdIcon",x.getTwoToneColor=function(){var e=h.getTwoToneColors();return e.calculated?[e.primaryColor,e.secondaryColor]:e.primaryColor},x.setTwoToneColor=w;var b=x},93994:function(e,n,t){var a=t(22988),o=t(2265),r=t(26352),l=t(99136),i=o.forwardRef(function(e,n){return o.createElement(l.Z,(0,a.Z)({},e,{ref:n,icon:r.Z}))});n.Z=i},45:function(e,n,t){t.r(n),t.d(n,{default:function(){return s}});var a=t(11987),o=t(74965),r=t(29297),l=t(44271),i=t(2265),c=t(11045),s=e=>{let n=(0,r.sa)(),{t:t}=(0,r.va)(),[s,d]=(0,i.useState)(""),{setWrongPassword:p}=(0,r.pa)(),{loading:m,run:u}=(0,l.Z)(c.H_,{manual:!0,onSuccess:(e,t)=>{n("/account/set-password",{state:{oldPassword:s},replace:!0})},onError:e=>{(d(""),(null==e?void 0:e.error_code)===c.MS.WrongPaymentPassword)?p({visible:!0}):(null==e?void 0:e.error_code)===c.MS.SecurityAccountFrozen&&p({visible:!0,accountFrozen:{seconds:e.extra.seconds||0}})}});return i.createElement(i.Fragment,null,i.createElement("style",null,".payment-password-container {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  box-sizing: border-box;\n  height: 100%;\n  overflow: hidden;\n  color: var(--text-color);\n}\n.payment-password-container > .wrapper {\n  padding: 0 30px;\n}\n.payment-password-container .display-none {\n  display: none;\n}\n.payment-password-container .page-title {\n  margin-top: 0px;\n  font-size: 22px;\n  color: var(--text-color);\n  text-align: center;\n}\n.payment-title {\n  margin-top: 60px;\n  font-size: 22px;\n  color: var(--text-color);\n}\n.patment-tips1 {\n  width: 80vw;\n  margin-top: 30px;\n  font-size: 14px;\n  text-align: center;\n  color: var(--text-color);\n}\n@media (min-width: 600px) {\n  .patment-tips1 {\n    width: calc(80 * var(--vw));\n  }\n}\n.payment-buttons {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  align-items: center;\n  width: 100%;\n  height: auto;\n  padding-bottom: 20px;\n}\n.success-icon {\n  width: 50px;\n  height: 50px;\n  margin-top: 60px;\n}\n.payment-desc-1 {\n  box-sizing: border-box;\n  margin: 15px 0 75px;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 16px;\n  text-align: center;\n  color: var(--text-color);\n}\n"),i.createElement("div",{className:"payment-password-container"},i.createElement(o.a,{displayBackBtn:!0}),i.createElement("div",{className:"wrapper"},i.createElement("div",{className:"page-title"},t("account.change_payment_password")),i.createElement("p",{className:"payment-desc-1"},t("account.change_enter_payment")),i.createElement(a.a,{onChange:e=>{d(e),6===e.length&&u(e)},value:s,keyboardInvisible:m}))))}},74965:function(e,n,t){t.d(n,{a:function(){return l}});var a=t(44719),o=t(29297),r=t(2265),l=e=>{var n,t;let{children:l,leftContent:i,rightContent:c,onBack:s}=e,{displayBackBtn:d=!1}=e,p=(0,o.sa)(),{customRouter:m}=(0,o.ra)();return s&&(d=!0),(i||(null!=(t=null==(n=null==m?void 0:m.history)?void 0:n.length)?t:0)<=1)&&(d=!1),r.createElement("div",{className:"width-100"},r.createElement("style",null,".p-auth-header {\n  position: sticky;\n  z-index: 99;\n  top: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  min-height: 60px;\n  font-weight: 500;\n  font-size: 18px;\n  text-align: center;\n  color: var(--text-color);\n  background-color: var(--theme-background-color);\n  opacity: 0.97;\n}\n.p-auth-header .left {\n  position: absolute;\n  left: 0;\n  min-width: 60px;\n  height: 100%;\n}\n.p-auth-header .left .header-back-btn {\n  position: absolute;\n  z-index: 100;\n  top: 16px;\n  left: 16px;\n  font-size: 28px;\n}\n.p-auth-header .middle .info-request {\n  position: initial;\n  width: auto;\n}\n.p-auth-header .middle .info-title {\n  padding-top: 0;\n  margin-top: 4px;\n}\n.p-auth-header .middle .info-address {\n  justify-content: center;\n  align-items: center;\n  width: 140px;\n  padding-top: 2px;\n  margin: auto;\n  margin-top: 10px;\n  text-align: center;\n}\n.p-auth-header .middle .info-address .copy-icon {\n  position: relative;\n  top: 1px;\n}\n.p-auth-header .right {\n  position: absolute;\n  right: 0;\n  min-width: 60px;\n  height: 100%;\n}\n@media (min-width: 600px) {\n  .p-auth-header {\n    width: calc(100 * var(--vw));\n  }\n}\n"),r.createElement("div",{className:"p-auth-header"},r.createElement("div",{className:"left"},r.createElement(r.Fragment,null,d&&r.createElement(a.b,{className:"header-back-btn",name:"circle_back",onClick:()=>{s?s():p(-1)}}),i)),r.createElement("div",{className:"middle"},l),r.createElement("div",{className:"right"},c)))}},11987:function(e,n,t){t.d(n,{a:function(){return u}});var a=t(44719),o=t(35278),r=t(29297),l=t(27108),i=t(93994),c=t(2265),s={};(0,l.b)(s,{default:()=>d});var d,p=(0,l.a)(()=>{d="data:image/png;base64,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"}),m=".particle-keywords-box {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 360px;\n  max-width: 96%;\n  margin: 0 auto;\n}\n.input-item {\n  display: flex;\n  justify-content: center;\n  width: 30px;\n  height: 30px;\n  padding-bottom: 30px;\n  margin: 0 10px;\n  border-bottom: 2px solid var(--text-color);\n  line-height: 30px;\n  text-align: center;\n  color: var(--text-color);\n  user-select: none;\n}\n.particle-keywords-map {\n  position: absolute;\n  z-index: 555;\n  bottom: 0;\n  left: 0;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-end;\n  align-items: center;\n  width: 100%;\n  height: 245px;\n  padding-bottom: 32px;\n  border-top: var(--keyword-border-width) solid var(--keyword-border-color);\n  background-color: var(--keyword-item-bg);\n}\n.particle-keywords-map .footer-box {\n  position: absolute;\n  bottom: 0;\n  display: flex;\n  align-items: center;\n  height: 32px;\n  margin: 0;\n  background-color: var(--keyword-all-bg);\n}\n.particle-keywords-map.loading {\n  flex-direction: column;\n  justify-content: flex-start;\n  width: calc(100 * var(--vw));\n  border-top: none;\n  font-size: 16px;\n  color: var(--secondary-text-color);\n  background: transparent;\n}\n.particle-keywords-map.loading img {\n  width: 38px;\n  height: 38px;\n  margin: 0 0 22px;\n  margin-top: 40px;\n}\n.particle-keywords-map.loading .loading-icon {\n  margin-top: 15px;\n  font-size: 20px;\n}\n.particle-keywords-map [data-value='0'],\n.particle-keywords-map [data-value='2'],\n.particle-keywords-map [data-value='5'],\n.particle-keywords-map [data-value='8'] {\n  border-right: var(--keyword-border-width) solid var(--keyword-border-color);\n  border-bottom: var(--keyword-border-width) solid var(--keyword-border-color);\n  border-left: var(--keyword-border-width) solid var(--keyword-border-color);\n}\n.particle-keywords-map [data-value='1'],\n.particle-keywords-map [data-value='3'],\n.particle-keywords-map [data-value='4'],\n.particle-keywords-map [data-value='6'],\n.particle-keywords-map [data-value='7'],\n.particle-keywords-map [data-value='9'] {\n  border-bottom: var(--keyword-border-width) solid var(--keyword-border-color);\n}\n.particle-keywords-map > .span {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 33.33%;\n  height: 53px;\n  margin-left: 0.001%;\n  font-weight: 500;\n  font-size: 22px;\n  line-height: 19px;\n  color: var(--text-color);\n  background-color: var(--keyword-item-bg);\n  cursor: pointer;\n  user-select: none;\n  touch-action: manipulation;\n}\n.particle-keywords-map > .span[data-value=''] {\n  background: var(--keyword-all-bg);\n}\n.particle-keywords-map > .span[data-value='']:active {\n  opacity: 1;\n}\n.particle-keywords-map > .span:active {\n  background: var(--keyword-item-active-bg);\n}\n.particle-keywords-map .del {\n  background: var(--keyword-all-bg);\n}\n.particle-keywords-map .del .img {\n  font-size: 20px;\n}\n",u=e=>{let{onChange:n,value:t,keyboardInvisible:d}=e,{t:u}=(0,r.va)(),[g,y]=(0,c.useState)(["","","","","",""]),[h,w]=(0,c.useState)(null!=t?t:""),[f,x]=(0,c.useState)([1,2,3,4,5,6,7,8,9,"",0]),b=e=>{h.length<6&&w(h+""+e)};return(0,c.useEffect)(()=>{null==n||n(h)},[h]),(0,c.useEffect)(()=>{w(null!=t?t:"")},[t]),d?c.createElement(c.Fragment,null,c.createElement("style",null,m),c.createElement("div",{className:"particle-keywords-map loading"},c.createElement("img",{src:(p(),(0,l.c)(s)).default,alt:""}),c.createElement("p",null,u("account.payment_checking")),c.createElement(i.Z,{className:"loading-icon"}))):c.createElement(c.Fragment,null,c.createElement("style",null,m),c.createElement("div",{className:"particle-keywords-box"},g.map((e,n)=>c.createElement("span",{key:e+n,className:"input-item ".concat(!e||"active")},h[n]?"●":""))),c.createElement("div",{className:"particle-keywords-map"},f.map(e=>c.createElement("span",{className:"span",key:e,"data-value":e,onClick:()=>{""!==e&&b(e+"")}},e)),c.createElement("span",{className:"span del",onClick:()=>{h.length>0&&w(h.slice(0,h.length-1))}},c.createElement(a.b,{className:"img",name:"backspace"})),c.createElement(o.a,null)))}}}]);