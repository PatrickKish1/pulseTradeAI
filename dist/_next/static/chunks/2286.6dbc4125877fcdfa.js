"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2286],{22286:function(e,a,n){n.r(a),n.d(a,{default:function(){return p}});var t=n(98833),s=n(11534),l=n(35278),i=n(29297),r=n(12397),c=n(11045),o=n(57089),m=n(68598),d=n(16159),u=n(46124),g=n(2265),v=n(45789),E={async findAssociatedTokenAddress(e,a){let{PublicKey:t}=await Promise.resolve().then(n.bind(n,45429)),s=new t("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA");return t.findProgramAddressSync([new t(e).toBuffer(),s.toBuffer(),new t(a).toBuffer()],new t("ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"))[0]}},p=function(e){var a;let n,{method:p,param:f,chainId:h,loginAuthorizationSign:y}=e,{t:N}=(0,i.va)(),_=(0,i.sa)(),{setPaymentVerify:w,userInfo:S,setPaymentPassword:C}=(0,i.pa)(),{events:A}=(0,i.ua)(),{modalOptions:k}=(0,i.ta)(),{authCoreModal:T}=(0,i.qa)(),{errorHandle:I}=(0,s.a)(),[U,b]=(0,g.useState)(!1),R=(0,i.F)(),[P,O]=(0,g.useState)(),[M,q]=(0,g.useState)(),[B,G]=(0,g.useState)(),[K,L]=(0,g.useState)(""),[F,x]=(0,g.useState)(""),{hasSetPaymentPassword:z,showSetPaymentPasswordOrConfirm:D}=(0,t.b)(),H=(0,g.useMemo)(()=>({id:h||c.EU.solana.chainId,name:"Solana"}),[]),J=(0,g.useMemo)(()=>{let e=c.EU.solana.selectedAddress;return(0,i.O)(e)},[]);(0,g.useEffect)(()=>{(0,c.pq)().catch(e=>{}),(0,c.GD)()&&_("account/master-password/verify")},[_]);let Z=()=>{(0,c.pq)().then(()=>{X()}).catch(e=>{var a;b(!1),R.error(null!=(a=e.message)?a:"Sign Error")})},V=(e,a)=>{A.emit("signResponse",{result:e,error:a})};async function W(e,a){if(!a)return[];let n=await Promise.all(a.map(e));return a.filter((e,a)=>n[a])}let X=async()=>{var e,a;p&&((0,c.KH)({record_type:r.oX.PAGE_SIGN_CONFIRM_BUTTON_CLICK}),null!=(e=null==S?void 0:S.security_account)&&e.has_set_payment_password?w({visible:!0,onVerifyCompleted:Q}):p===c.RI.signAndSendTransaction||p===c.RI.signTransaction||p===c.RI.signAllTransactions||(null==(a=null==k?void 0:k.promptSettingConfig)?void 0:a.promptPaymentPasswordSettingWhenSign)===3?D(Q):Q())},Q=async()=>{var e;let a;if(p){b(!0);try{if(p===c.RI.signMessage){let{signature:e}=await c.EU.solana.signMessage(f);a=e}else if(p===c.RI.signAndSendTransaction){let{signature:e}=await c.EU.solana.signAndSendTransaction(f,H.id);a=e}else if(p===c.RI.signTransaction)a=await c.EU.solana.signTransaction(f,H.id);else if(p===c.RI.signAllTransactions)a=await c.EU.solana.signAllTransactions(f,H.id);else throw Error("Unknown method");(0,c.KH)({record_type:r.oX.PAGE_SIGN_CONFIRM_BUTTON_CLICK_SUCCESS})}catch(a){(0,c.KH)({record_type:r.oX.PAGE_SIGN_CONFIRM_BUTTON_CLICK_FAILURE}),(null==a?void 0:a.error_code)!==50103||null!=(e=null==S?void 0:S.security_account)&&e.has_set_payment_password?(null==a?void 0:a.message)==="Local Key not found"||(null==a?void 0:a.message)==="Master password decryption error"?_("account/master-password/verify"):I(a):Z()}finally{b(!1)}a&&(p===c.RI.signMessage&&y?A.emit("loginSuccess",{...S,authorization:{message:u.encode(f),signature:a}}):V(a))}};(0,g.useEffect)(()=>{if(p===c.RI.signMessage)L(N("sign.signature_message")),x(N("sign.signature_title"));else if(p===c.RI.signAndSendTransaction){L(N("sign.send_transaction")),x(N("sign.approve_and").format((0,i.J)(H)));let e=f.serialize({requireAllSignatures:!1,verifySignatures:!1});j([u.encode(e)])}else if(p===c.RI.signTransaction){L(N("sign.sign_transaction")),x(N("sign.sign_but"));let e=f.serialize({requireAllSignatures:!1,verifySignatures:!1});j([u.encode(e)])}else if(p===c.RI.signAllTransactions)L(N("sign.sign_transaction")),x(N("sign.sign_but")),j(f.map(e=>u.encode(e.serialize({requireAllSignatures:!1,verifySignatures:!1}))));else throw Error("Unknown method")},[f,N]),(0,g.useEffect)(()=>{c.EU.solana.connect()},[]);let j=e=>{c.EU.solana.request({chainId:H.id,method:c.SJ.enhancedDeserializeTransaction,params:e}).then(e=>{var a,n;O(e),W(async e=>{let a=await E.findAssociatedTokenAddress(c.EU.solana.selectedAddress,e.mint);return e.associatedTokenAddress===a.toBase58()},null==(a=null==e?void 0:e.estimatedChanges)?void 0:a.nfts).then(e=>{q(e)}),W(async e=>{let a=await E.findAssociatedTokenAddress(c.EU.solana.selectedAddress,e.mint);return e.associatedTokenAddress===a.toBase58()},null==(n=null==e?void 0:e.estimatedChanges)?void 0:n.tokens).then(e=>{G(e)})}).catch(a=>{var n;o.Z.error({title:null!=(n=a.message)?n:"Deserialize Transaction Error",okCancel:!0,cancelText:N("common.cancel"),okText:N("common.retry"),wrapClassName:"auth-core-modal-error",getContainer:()=>T.rootBody,onOk:()=>{j(e)}})})};return g.createElement("div",{className:"info-sign"},g.createElement("style",null,t.c),!z&&g.createElement("div",{className:"has-payment-password","data-telegram":(0,i.ma)()},g.createElement("div",{className:"has-payment-password-icon"}),g.createElement("div",{className:"has-payment-password-tip"},N("account.waring_tip1")),g.createElement("div",{className:"has-payment-password-set",onClick:C},N("account.set"))),g.createElement("div",{className:"scroll-part"+(z?"":" no-password-tip")},g.createElement(t.d,{userInfo:S,transactionInfo:P}),g.createElement("div",{className:"info-request"},K),g.createElement("div",{className:"info-title"},g.createElement("img",{src:(0,c.Sv)(H),alt:""}),(0,i.J)(H)),g.createElement(v,{text:c.EU.solana.selectedAddress,onCopy:()=>R.success(N("new.copied_to"))},g.createElement("div",{className:"info-address"},J,g.createElement("div",{className:"copy-icon"},g.createElement(t.a,null)))),g.createElement("div",{className:"info-des"},F),g.createElement("div",{className:"apart-line"}),p===c.RI.signMessage&&(n=new TextDecoder().decode(f),g.createElement("div",{className:"sign-message"},g.createElement("div",{className:"message"+(z?"":" no-password-tip")},g.createElement("div",{className:"pre-wrap personal-message"},n)))),p!==c.RI.signMessage&&g.createElement(m.default,{defaultActiveKey:"1",items:[{label:N("sign.details"),key:"1",children:g.createElement(g.Fragment,null,g.createElement("div",{className:"balance-change"},g.createElement("div",{className:"title"},N("sign.estimated_balance_change")),g.createElement("div",{className:"change-body"},null==(a=null==P?void 0:P.estimatedChanges)?void 0:a.sols.filter(e=>{var a,n;return e.address===(null==(n=null==(a=c.EU)?void 0:a.solana)?void 0:n.selectedAddress)}).map((e,a)=>g.createElement("div",{className:"change-title",key:"sol-change-".concat(a)},"SOL",g.createElement("div",{className:"change-val",style:e.lamportsChange<0?{color:"#ea4335"}:{}},e.lamportsChange<0?"":"+",(0,i.U)(e.lamportsChange,9)))),null==M?void 0:M.map((e,a)=>g.createElement("div",{className:"change-title",key:"nft-change-".concat(a)},e.name?e.name:"Unknown NFT",g.createElement("div",{className:"change-val",style:e.amountChange<0?{color:"#ea4335"}:{}},e.amountChange<0?"":"+",e.amountChange))),null==B?void 0:B.map((e,a)=>g.createElement("div",{className:"change-title",key:"token-change-".concat(a)},e.name?e.name:"Unknown Token",g.createElement("div",{className:"change-val",style:e.amountChange<0?{color:"#ea4335"}:{}},e.amountChange<0?"":"+",(0,i.U)(e.amountChange,e.decimals)))))),g.createElement("div",{className:"net-fee solana"},g.createElement("div",{className:"title"},N("sign.network_fee"),P&&g.createElement("div",{className:"fee-val"},(0,i.U)(P.estimatedLamportsFee,9)," SOL"))))},{label:N("sign.data"),key:"2",children:g.createElement("div",null,null==P?void 0:P.instructions.map((e,a)=>g.createElement("div",{className:"inner-instruction",key:"instruction-".concat(a)},g.createElement("div",{className:"inner-content"},g.createElement("div",{className:"content-item"},g.createElement("div",{className:"item"},g.createElement("div",{className:"item-0"},"#",a+1," - ",N("program.".concat(e.type))),g.createElement("div",{className:"item-1 mt10"},N("sign.program_id"),g.createElement("span",null,(0,i.O)(e.programId))),g.createElement("div",{className:"item-1 mt15"},N("sign.data"),g.createElement("span",null,(0,i.O)(e.data)))))))))}]})),g.createElement("div",{className:"btn-box"},g.createElement("div",null,g.createElement(d.Z,{className:"btn-cancel",onClick:()=>{U||(y?A.emit("loginSuccess",S):V(void 0,i.a.userRejectedRequest()))}},N("common.cancel")),g.createElement(d.Z,{className:"btn-approve",onClick:X,loading:U},N("common.confirm"))),g.createElement(l.a,null)))}}}]);