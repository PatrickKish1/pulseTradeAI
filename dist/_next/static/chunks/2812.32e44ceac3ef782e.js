"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2812],{12812:function(n,e,t){t.r(e),t.d(e,{default:function(){return r}});var c=t(29297),o=t(11045),a=t(16159),l=t(2265),r=n=>{var e,t,r;let{t:i}=(0,c.va)(),{visible:u,state:s}=n,{showSelectSecurityAccount:d,userInfo:p}=(0,c.pa)(),m=(0,c.sa)(),{authCoreModal:v}=(0,c.qa)(),b=(n,e)=>{s?m("/account/verify",{state:{account:n,...s}}):m("/account/set-password",{state:{account:n}}),d(!1)};return l.createElement(l.Fragment,null,l.createElement("style",null,".select-account-drawer .ant-drawer-body {\n  padding: 18px !important;\n}\n.select-account {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 15px;\n}\n.select-account .close-icon {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n}\n.select-account .account-btn {\n  width: 100%;\n  height: 47px;\n  border: none;\n  border-radius: var(--primary-btn-border-radius);\n  outline: none;\n  font-size: var(--primary-btn-font-size);\n  line-height: 22px;\n  color: var(--primary-btn-color);\n  background: var(--primary-btn-background-color);\n}\n.select-account .account-btn:hover {\n  opacity: var(--hover-opacity);\n}\n.select-account .select-account-title {\n  padding-top: 24px;\n  padding-bottom: 24px;\n  font-weight: 500;\n  font-size: 20px;\n  line-height: 1;\n  color: var(--text-color);\n}\n"),l.createElement(c.na,{title:null!=(e=i("account.modal_select_verification"))?e:"",placement:"bottom",closable:!1,className:"select-account-drawer",visible:u,maskClosable:!0,forceRender:!0,height:220,onClose:()=>d(!1),getContainer:()=>v.rootBody},l.createElement("div",{className:"select-account"},l.createElement(a.Z,{className:"account-btn",onClick:()=>{var n;return b(null==(n=null==p?void 0:p.security_account)?void 0:n.email,o.Gr.email)}},"".concat(i("account.email")," - ").concat((0,c.P)((null==(t=null==p?void 0:p.security_account)?void 0:t.email)||""))),l.createElement(a.Z,{className:"account-btn",onClick:()=>{var n;return b(null==(n=null==p?void 0:p.security_account)?void 0:n.phone,o.Gr.phone)}},"".concat(i("account.mobile")," - ").concat((0,c.Q)((null==(r=null==p?void 0:p.security_account)?void 0:r.phone)||""))))))}}}]);