"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7336],{65332:function(t,e,r){r.d(e,{D1:function(){return g},Kd:function(){return p},Mx:function(){return c}});var n=r(53554),i=r(91678);/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */let o=BigInt(0),s=BigInt(1);function u(t,e){let r=e.negate();return t?r:e}function f(t,e){if(!Number.isSafeInteger(t)||t<=0||t>e)throw Error("invalid window size, expected [1.."+e+"], got W="+t)}function l(t,e){return f(t,e),{windows:Math.ceil(e/t)+1,windowSize:2**(t-1)}}let a=new WeakMap,h=new WeakMap;function d(t){return h.get(t)||1}function c(t,e){return{constTimeNegate:u,hasPrecomputes:t=>1!==d(t),unsafeLadder(e,r,n=t.ZERO){let i=e;for(;r>o;)r&s&&(n=n.add(i)),i=i.double(),r>>=s;return n},precomputeWindow(t,r){let{windows:n,windowSize:i}=l(r,e),o=[],s=t,u=s;for(let t=0;t<n;t++){u=s,o.push(u);for(let t=1;t<i;t++)u=u.add(s),o.push(u);s=u.double()}return o},wNAF(r,n,i){let{windows:o,windowSize:f}=l(r,e),a=t.ZERO,h=t.BASE,d=BigInt(2**r-1),c=2**r,g=BigInt(r);for(let t=0;t<o;t++){let e=t*f,r=Number(i&d);i>>=g,r>f&&(r-=c,i+=s);let o=e+Math.abs(r)-1,l=t%2!=0,p=r<0;0===r?h=h.add(u(l,n[e])):a=a.add(u(p,n[o]))}return{p:a,f:h}},wNAFUnsafe(r,n,i,u=t.ZERO){let{windows:f,windowSize:a}=l(r,e),h=BigInt(2**r-1),d=2**r,c=BigInt(r);for(let t=0;t<f;t++){let e=t*a;if(i===o)break;let r=Number(i&h);if(i>>=c,r>a&&(r-=d,i+=s),0===r)continue;let f=n[e+Math.abs(r)-1];r<0&&(f=f.negate()),u=u.add(f)}return u},getPrecomputes(t,e,r){let n=a.get(e);return n||(n=this.precomputeWindow(e,t),1!==t&&a.set(e,r(n))),n},wNAFCached(t,e,r){let n=d(t);return this.wNAF(n,this.getPrecomputes(n,t,r),e)},wNAFCachedUnsafe(t,e,r,n){let i=d(t);return 1===i?this.unsafeLadder(t,e,n):this.wNAFUnsafe(i,this.getPrecomputes(i,t,r),e,n)},setWindowSize(t,r){f(r,e),h.set(t,r),a.delete(t)}}}function g(t,e,r,n){if(!function(t,e){if(!Array.isArray(t))throw Error("array expected");t.forEach((t,r)=>{if(!(t instanceof e))throw Error("invalid point at index "+r)})}(r,t),!function(t,e){if(!Array.isArray(t))throw Error("array of scalars expected");t.forEach((t,r)=>{if(!e.isValid(t))throw Error("invalid scalar at index "+r)})}(n,e),r.length!==n.length)throw Error("arrays of points and scalars must have equal length");let o=t.ZERO,s=(0,i.Dd)(BigInt(r.length)),u=s>12?s-3:s>4?s-2:s?2:1,f=(1<<u)-1,l=Array(f+1).fill(o),a=Math.floor((e.BITS-1)/u)*u,h=o;for(let t=a;t>=0;t-=u){l.fill(o);for(let e=0;e<n.length;e++){let i=Number(n[e]>>BigInt(t)&BigInt(f));l[i]=l[i].add(r[e])}let e=o;for(let t=l.length-1,r=o;t>0;t--)r=r.add(l[t]),e=e.add(r);if(h=h.add(e),0!==t)for(let t=0;t<u;t++)h=h.double()}return h}function p(t){return(0,n.OP)(t.Fp),(0,i.FF)(t,{n:"bigint",h:"bigint",Gx:"field",Gy:"field"},{nBitLength:"isSafeInteger",nByteLength:"isSafeInteger"}),Object.freeze({...(0,n.kK)(t.n,t.nBitLength),...t,p:t.Fp.ORDER})}},53554:function(t,e,r){r.d(e,{OP:function(){return y},PS:function(){return E},Tu:function(){return g},U_:function(){return c},Us:function(){return B},gN:function(){return m},kK:function(){return w},oA:function(){return d},wQ:function(){return h}});var n=r(91678);/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */let i=BigInt(0),o=BigInt(1),s=BigInt(2),u=BigInt(3),f=BigInt(4),l=BigInt(5),a=BigInt(8);function h(t,e){let r=t%e;return r>=i?r:e+r}function d(t,e,r){let n=t;for(;e-- >i;)n*=n,n%=r;return n}function c(t,e){if(t===i)throw Error("invert: expected non-zero number");if(e<=i)throw Error("invert: expected positive modulus, got "+e);let r=h(t,e),n=e,s=i,u=o,f=o,l=i;for(;r!==i;){let t=n/r,e=n%r,i=s-f*t,o=u-l*t;n=r,r=e,s=f,u=l,f=i,l=o}if(n!==o)throw Error("invert: does not exist");return h(s,e)}let g=(t,e)=>(h(t,e)&o)===o,p=["create","isValid","is0","neg","inv","sqrt","sqr","eql","add","sub","mul","pow","div","addN","subN","mulN","sqrN"];function y(t){let e=p.reduce((t,e)=>(t[e]="function",t),{ORDER:"bigint",MASK:"bigint",BYTES:"isSafeInteger",BITS:"isSafeInteger"});return(0,n.FF)(t,e)}function w(t,e){let r=void 0!==e?e:t.toString(2).length;return{nBitLength:r,nByteLength:Math.ceil(r/8)}}function m(t,e,r=!1,d={}){let g;if(t<=i)throw Error("invalid field: expected ORDER > 0, got "+t);let{nBitLength:p,nByteLength:y}=w(t,e);if(y>2048)throw Error("invalid field: expected ORDER of <= 2048 bytes");let m=Object.freeze({ORDER:t,BITS:p,BYTES:y,MASK:(0,n.dQ)(p),ZERO:i,ONE:o,create:e=>h(e,t),isValid:e=>{if("bigint"!=typeof e)throw Error("invalid field element: expected bigint, got "+typeof e);return i<=e&&e<t},is0:t=>t===i,isOdd:t=>(t&o)===o,neg:e=>h(-e,t),eql:(t,e)=>t===e,sqr:e=>h(e*e,t),add:(e,r)=>h(e+r,t),sub:(e,r)=>h(e-r,t),mul:(e,r)=>h(e*r,t),pow:(t,e)=>(function(t,e,r){if(r<i)throw Error("invalid exponent, negatives unsupported");if(r===i)return t.ONE;if(r===o)return e;let n=t.ONE,s=e;for(;r>i;)r&o&&(n=t.mul(n,s)),s=t.sqr(s),r>>=o;return n})(m,t,e),div:(e,r)=>h(e*c(r,t),t),sqrN:t=>t*t,addN:(t,e)=>t+e,subN:(t,e)=>t-e,mulN:(t,e)=>t*e,inv:e=>c(e,t),sqrt:d.sqrt||(e=>(g||(g=function(t){if(t%f===u){let e=(t+o)/f;return function(t,r){let n=t.pow(r,e);if(!t.eql(t.sqr(n),r))throw Error("Cannot find square root");return n}}if(t%a===l){let e=(t-l)/a;return function(t,r){let n=t.mul(r,s),i=t.pow(n,e),o=t.mul(r,i),u=t.mul(t.mul(o,s),i),f=t.mul(o,t.sub(u,t.ONE));if(!t.eql(t.sqr(f),r))throw Error("Cannot find square root");return f}}return function(t){let e,r,n;let u=(t-o)/s;for(e=t-o,r=0;e%s===i;e/=s,r++);for(n=s;n<t&&function(t,e,r){if(e<i)throw Error("invalid exponent, negatives unsupported");if(r<=i)throw Error("invalid modulus");if(r===o)return i;let n=o;for(;e>i;)e&o&&(n=n*t%r),t=t*t%r,e>>=o;return n}(n,u,t)!==t-o;n++)if(n>1e3)throw Error("Cannot find square root: likely non-prime P");if(1===r){let e=(t+o)/f;return function(t,r){let n=t.pow(r,e);if(!t.eql(t.sqr(n),r))throw Error("Cannot find square root");return n}}let l=(e+o)/s;return function(t,i){if(t.pow(i,u)===t.neg(t.ONE))throw Error("Cannot find square root");let s=r,f=t.pow(t.mul(t.ONE,n),e),a=t.pow(i,l),h=t.pow(i,e);for(;!t.eql(h,t.ONE);){if(t.eql(h,t.ZERO))return t.ZERO;let e=1;for(let r=t.sqr(h);e<s&&!t.eql(r,t.ONE);e++)r=t.sqr(r);let r=t.pow(f,o<<BigInt(s-e-1));f=t.sqr(r),a=t.mul(a,r),h=t.mul(h,f),s=e}return a}}(t)}(t)),g(m,e))),invertBatch:t=>(function(t,e){let r=Array(e.length),n=e.reduce((e,n,i)=>t.is0(n)?e:(r[i]=e,t.mul(e,n)),t.ONE),i=t.inv(n);return e.reduceRight((e,n,i)=>t.is0(n)?e:(r[i]=t.mul(e,r[i]),t.mul(e,n)),i),r})(m,t),cmov:(t,e,r)=>r?e:t,toBytes:t=>r?(0,n.S5)(t,y):(0,n.tL)(t,y),fromBytes:t=>{if(t.length!==y)throw Error("Field.fromBytes: expected "+y+" bytes, got "+t.length);return r?(0,n.ty)(t):(0,n.bytesToNumberBE)(t)}});return Object.freeze(m)}function b(t){if("bigint"!=typeof t)throw Error("field order must be bigint");return Math.ceil(t.toString(2).length/8)}function E(t){let e=b(t);return e+Math.ceil(e/2)}function B(t,e,r=!1){let i=t.length,s=b(e),u=E(e);if(i<16||i<u||i>1024)throw Error("expected "+u+"-1024 bytes of input, got "+i);let f=h(r?(0,n.bytesToNumberBE)(t):(0,n.ty)(t),e-o)+o;return r?(0,n.S5)(f,s):(0,n.tL)(f,s)}},91678:function(t,e,r){r.d(e,{Dd:function(){return S},FF:function(){return R},Fy:function(){return A},H9:function(){return U},S5:function(){return b},Z2:function(){return x},_t:function(){return s},bytesToNumberBE:function(){return y},ci:function(){return a},dQ:function(){return I},eV:function(){return B},gk:function(){return u},hexToBytes:function(){return p},n$:function(){return N},ql:function(){return E},tL:function(){return m},ty:function(){return w},uw:function(){return f},uz:function(){return h}});/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */let n=BigInt(0),i=BigInt(1),o=BigInt(2);function s(t){return t instanceof Uint8Array||ArrayBuffer.isView(t)&&"Uint8Array"===t.constructor.name}function u(t){if(!s(t))throw Error("Uint8Array expected")}function f(t,e){if("boolean"!=typeof e)throw Error(t+" boolean expected, got "+e)}let l=Array.from({length:256},(t,e)=>e.toString(16).padStart(2,"0"));function a(t){u(t);let e="";for(let r=0;r<t.length;r++)e+=l[t[r]];return e}function h(t){let e=t.toString(16);return 1&e.length?"0"+e:e}function d(t){if("string"!=typeof t)throw Error("hex string expected, got "+typeof t);return""===t?n:BigInt("0x"+t)}let c={_0:48,_9:57,A:65,F:70,a:97,f:102};function g(t){return t>=c._0&&t<=c._9?t-c._0:t>=c.A&&t<=c.F?t-(c.A-10):t>=c.a&&t<=c.f?t-(c.a-10):void 0}function p(t){if("string"!=typeof t)throw Error("hex string expected, got "+typeof t);let e=t.length,r=e/2;if(e%2)throw Error("hex string expected, got unpadded hex of length "+e);let n=new Uint8Array(r);for(let e=0,i=0;e<r;e++,i+=2){let r=g(t.charCodeAt(i)),o=g(t.charCodeAt(i+1));if(void 0===r||void 0===o)throw Error('hex string expected, got non-hex character "'+(t[i]+t[i+1])+'" at index '+i);n[e]=16*r+o}return n}function y(t){return d(a(t))}function w(t){return u(t),d(a(Uint8Array.from(t).reverse()))}function m(t,e){return p(t.toString(16).padStart(2*e,"0"))}function b(t,e){return m(t,e).reverse()}function E(t,e,r){let n;if("string"==typeof e)try{n=p(e)}catch(e){throw Error(t+" must be hex string or Uint8Array, cause: "+e)}else if(s(e))n=Uint8Array.from(e);else throw Error(t+" must be hex string or Uint8Array");let i=n.length;if("number"==typeof r&&i!==r)throw Error(t+" of length "+r+" expected, got "+i);return n}function B(...t){let e=0;for(let r=0;r<t.length;r++){let n=t[r];u(n),e+=n.length}let r=new Uint8Array(e);for(let e=0,n=0;e<t.length;e++){let i=t[e];r.set(i,n),n+=i.length}return r}let v=t=>"bigint"==typeof t&&n<=t;function x(t,e,r){return v(t)&&v(e)&&v(r)&&e<=t&&t<r}function A(t,e,r,n){if(!x(e,r,n))throw Error("expected valid "+t+": "+r+" <= n < "+n+", got "+e)}function S(t){let e;for(e=0;t>n;t>>=i,e+=1);return e}let I=t=>(o<<BigInt(t-1))-i,O=t=>new Uint8Array(t),q=t=>Uint8Array.from(t);function N(t,e,r){if("number"!=typeof t||t<2)throw Error("hashLen must be a number");if("number"!=typeof e||e<2)throw Error("qByteLen must be a number");if("function"!=typeof r)throw Error("hmacFn must be a function");let n=O(t),i=O(t),o=0,s=()=>{n.fill(1),i.fill(0),o=0},u=(...t)=>r(i,n,...t),f=(t=O())=>{i=u(q([0]),t),n=u(),0!==t.length&&(i=u(q([1]),t),n=u())},l=()=>{if(o++>=1e3)throw Error("drbg: tried 1000 values");let t=0,r=[];for(;t<e;){let e=(n=u()).slice();r.push(e),t+=n.length}return B(...r)};return(t,e)=>{let r;for(s(),f(t);!(r=e(l()));)f();return s(),r}}let L={bigint:t=>"bigint"==typeof t,function:t=>"function"==typeof t,boolean:t=>"boolean"==typeof t,string:t=>"string"==typeof t,stringOrUint8Array:t=>"string"==typeof t||s(t),isSafeInteger:t=>Number.isSafeInteger(t),array:t=>Array.isArray(t),field:(t,e)=>e.Fp.isValid(t),hash:t=>"function"==typeof t&&Number.isSafeInteger(t.outputLen)};function R(t,e,r={}){let n=(e,r,n)=>{let i=L[r];if("function"!=typeof i)throw Error("invalid validator function");let o=t[e];if((!n||void 0!==o)&&!i(o,t))throw Error("param "+String(e)+" is invalid. Expected "+r+", got "+o)};for(let[t,r]of Object.entries(e))n(t,r,!1);for(let[t,e]of Object.entries(r))n(t,e,!0);return t}function U(t){let e=new WeakMap;return(r,...n)=>{let i=e.get(r);if(void 0!==i)return i;let o=t(r,...n);return e.set(r,o),o}}},67336:function(t,e,r){r.d(e,{secp256k1:function(){return N}});var n=r(47189),i=r(21007);let o=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),s=new Uint32Array([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]),u=new Uint32Array(64);class f extends n.VR{constructor(){super(64,32,8,!1),this.A=0|s[0],this.B=0|s[1],this.C=0|s[2],this.D=0|s[3],this.E=0|s[4],this.F=0|s[5],this.G=0|s[6],this.H=0|s[7]}get(){let{A:t,B:e,C:r,D:n,E:i,F:o,G:s,H:u}=this;return[t,e,r,n,i,o,s,u]}set(t,e,r,n,i,o,s,u){this.A=0|t,this.B=0|e,this.C=0|r,this.D=0|n,this.E=0|i,this.F=0|o,this.G=0|s,this.H=0|u}process(t,e){for(let r=0;r<16;r++,e+=4)u[r]=t.getUint32(e,!1);for(let t=16;t<64;t++){let e=u[t-15],r=u[t-2],n=(0,i.np)(e,7)^(0,i.np)(e,18)^e>>>3,o=(0,i.np)(r,17)^(0,i.np)(r,19)^r>>>10;u[t]=o+u[t-7]+n+u[t-16]|0}let{A:r,B:s,C:f,D:l,E:a,F:h,G:d,H:c}=this;for(let t=0;t<64;t++){let e=c+((0,i.np)(a,6)^(0,i.np)(a,11)^(0,i.np)(a,25))+(0,n.bc)(a,h,d)+o[t]+u[t]|0,g=((0,i.np)(r,2)^(0,i.np)(r,13)^(0,i.np)(r,22))+(0,n.l3)(r,s,f)|0;c=d,d=h,h=a,a=l+e|0,l=f,f=s,s=r,r=e+g|0}r=r+this.A|0,s=s+this.B|0,f=f+this.C|0,l=l+this.D|0,a=a+this.E|0,h=h+this.F|0,d=d+this.G|0,c=c+this.H|0,this.set(r,s,f,l,a,h,d,c)}roundClean(){u.fill(0)}destroy(){this.set(0,0,0,0,0,0,0,0),this.buffer.fill(0)}}let l=(0,i.hE)(()=>new f);var a=r(13671);class h extends i.kb{constructor(t,e){super(),this.finished=!1,this.destroyed=!1,(0,a.z3)(t);let r=(0,i.O0)(e);if(this.iHash=t.create(),"function"!=typeof this.iHash.update)throw Error("Expected instance of class which extends utils.Hash");this.blockLen=this.iHash.blockLen,this.outputLen=this.iHash.outputLen;let n=this.blockLen,o=new Uint8Array(n);o.set(r.length>n?t.create().update(r).digest():r);for(let t=0;t<o.length;t++)o[t]^=54;this.iHash.update(o),this.oHash=t.create();for(let t=0;t<o.length;t++)o[t]^=106;this.oHash.update(o),o.fill(0)}update(t){return(0,a.$h)(this),this.iHash.update(t),this}digestInto(t){(0,a.$h)(this),(0,a.gk)(t,this.outputLen),this.finished=!0,this.iHash.digestInto(t),this.oHash.update(t),this.oHash.digestInto(t),this.destroy()}digest(){let t=new Uint8Array(this.oHash.outputLen);return this.digestInto(t),t}_cloneInto(t){t||(t=Object.create(Object.getPrototypeOf(this),{}));let{oHash:e,iHash:r,finished:n,destroyed:i,blockLen:o,outputLen:s}=this;return t.finished=n,t.destroyed=i,t.blockLen=o,t.outputLen=s,t.oHash=e._cloneInto(t.oHash),t.iHash=r._cloneInto(t.iHash),t}destroy(){this.destroyed=!0,this.oHash.destroy(),this.iHash.destroy()}}let d=(t,e,r)=>new h(t,e).update(r).digest();d.create=(t,e)=>new h(t,e);var c=r(65332),g=r(53554),p=r(91678);/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */function y(t){void 0!==t.lowS&&(0,p.uw)("lowS",t.lowS),void 0!==t.prehash&&(0,p.uw)("prehash",t.prehash)}let{bytesToNumberBE:w,hexToBytes:m}=p,b={Err:class extends Error{constructor(t=""){super(t)}},_tlv:{encode:(t,e)=>{let{Err:r}=b;if(t<0||t>256)throw new r("tlv.encode: wrong tag");if(1&e.length)throw new r("tlv.encode: unpadded data");let n=e.length/2,i=p.uz(n);if(i.length/2&128)throw new r("tlv.encode: long form length too big");let o=n>127?p.uz(i.length/2|128):"";return p.uz(t)+o+i+e},decode(t,e){let{Err:r}=b,n=0;if(t<0||t>256)throw new r("tlv.encode: wrong tag");if(e.length<2||e[n++]!==t)throw new r("tlv.decode: wrong tlv");let i=e[n++],o=0;if(128&i){let t=127&i;if(!t)throw new r("tlv.decode(long): indefinite length not supported");if(t>4)throw new r("tlv.decode(long): byte length is too big");let s=e.subarray(n,n+t);if(s.length!==t)throw new r("tlv.decode: length bytes not complete");if(0===s[0])throw new r("tlv.decode(long): zero leftmost byte");for(let t of s)o=o<<8|t;if(n+=t,o<128)throw new r("tlv.decode(long): not minimal encoding")}else o=i;let s=e.subarray(n,n+o);if(s.length!==o)throw new r("tlv.decode: wrong value length");return{v:s,l:e.subarray(n+o)}}},_int:{encode(t){let{Err:e}=b;if(t<E)throw new e("integer: negative integers are not allowed");let r=p.uz(t);if(8&Number.parseInt(r[0],16)&&(r="00"+r),1&r.length)throw new e("unexpected DER parsing assertion: unpadded hex");return r},decode(t){let{Err:e}=b;if(128&t[0])throw new e("invalid signature integer: negative");if(0===t[0]&&!(128&t[1]))throw new e("invalid signature integer: unnecessary leading zero");return w(t)}},toSig(t){let{Err:e,_int:r,_tlv:n}=b,i="string"==typeof t?m(t):t;p.gk(i);let{v:o,l:s}=n.decode(48,i);if(s.length)throw new e("invalid signature: left bytes after parsing");let{v:u,l:f}=n.decode(2,o),{v:l,l:a}=n.decode(2,f);if(a.length)throw new e("invalid signature: left bytes after parsing");return{r:r.decode(u),s:r.decode(l)}},hexFromSig(t){let{_tlv:e,_int:r}=b,n=e.encode(2,r.encode(t.r)),i=e.encode(2,r.encode(t.s));return e.encode(48,n+i)}},E=BigInt(0),B=BigInt(1),v=(BigInt(2),BigInt(3));BigInt(4);/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */let x=BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"),A=BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"),S=BigInt(1),I=BigInt(2),O=(t,e)=>(t+e/I)/e,q=(0,g.gN)(x,void 0,void 0,{sqrt:function(t){let e=BigInt(3),r=BigInt(6),n=BigInt(11),i=BigInt(22),o=BigInt(23),s=BigInt(44),u=BigInt(88),f=t*t*t%x,l=f*f*t%x,a=(0,g.oA)(l,e,x)*l%x,h=(0,g.oA)(a,e,x)*l%x,d=(0,g.oA)(h,I,x)*f%x,c=(0,g.oA)(d,n,x)*d%x,p=(0,g.oA)(c,i,x)*c%x,y=(0,g.oA)(p,s,x)*p%x,w=(0,g.oA)(y,u,x)*y%x,m=(0,g.oA)(w,s,x)*p%x,b=(0,g.oA)(m,e,x)*l%x,E=(0,g.oA)(b,o,x)*c%x,B=(0,g.oA)(E,r,x)*f%x,v=(0,g.oA)(B,I,x);if(!q.eql(q.sqr(v),t))throw Error("Cannot find square root");return v}}),N=function(t,e){let r=e=>(function(t){let e=function(t){let e=(0,c.Kd)(t);return p.FF(e,{hash:"hash",hmac:"function",randomBytes:"function"},{bits2int:"function",bits2int_modN:"function",lowS:"boolean"}),Object.freeze({lowS:!0,...e})}(t),{Fp:r,n:n}=e,i=r.BYTES+1,o=2*r.BYTES+1;function s(t){return g.wQ(t,n)}function u(t){return g.U_(t,n)}let{ProjectivePoint:f,normPrivateKeyToScalar:l,weierstrassEquation:a,isWithinCurveOrder:h}=function(t){let e=function(t){let e=(0,c.Kd)(t);p.FF(e,{a:"field",b:"field"},{allowedPrivateKeyLengths:"array",wrapPrivateKey:"boolean",isTorsionFree:"function",clearCofactor:"function",allowInfinityPoint:"boolean",fromBytes:"function",toBytes:"function"});let{endo:r,Fp:n,a:i}=e;if(r){if(!n.eql(i,n.ZERO))throw Error("invalid endomorphism, can only be defined for Koblitz curves that have a=0");if("object"!=typeof r||"bigint"!=typeof r.beta||"function"!=typeof r.splitScalar)throw Error("invalid endomorphism, expected beta: bigint and splitScalar: function")}return Object.freeze({...e})}(t),{Fp:r}=e,n=g.gN(e.n,e.nBitLength),i=e.toBytes||((t,e,n)=>{let i=e.toAffine();return p.eV(Uint8Array.from([4]),r.toBytes(i.x),r.toBytes(i.y))}),o=e.fromBytes||(t=>{let e=t.subarray(1);return{x:r.fromBytes(e.subarray(0,r.BYTES)),y:r.fromBytes(e.subarray(r.BYTES,2*r.BYTES))}});function s(t){let{a:n,b:i}=e,o=r.sqr(t),s=r.mul(o,t);return r.add(r.add(s,r.mul(t,n)),i)}if(!r.eql(r.sqr(e.Gy),s(e.Gx)))throw Error("bad generator point: equation left != right");function u(t){let r;let{allowedPrivateKeyLengths:n,nByteLength:i,wrapPrivateKey:o,n:s}=e;if(n&&"bigint"!=typeof t){if(p._t(t)&&(t=p.ci(t)),"string"!=typeof t||!n.includes(t.length))throw Error("invalid private key");t=t.padStart(2*i,"0")}try{r="bigint"==typeof t?t:p.bytesToNumberBE((0,p.ql)("private key",t,i))}catch(e){throw Error("invalid private key, expected hex or "+i+" bytes, got "+typeof t)}return o&&(r=g.wQ(r,s)),p.Fy("private key",r,B,s),r}function f(t){if(!(t instanceof h))throw Error("ProjectivePoint expected")}let l=(0,p.H9)((t,e)=>{let{px:n,py:i,pz:o}=t;if(r.eql(o,r.ONE))return{x:n,y:i};let s=t.is0();null==e&&(e=s?r.ONE:r.inv(o));let u=r.mul(n,e),f=r.mul(i,e),l=r.mul(o,e);if(s)return{x:r.ZERO,y:r.ZERO};if(!r.eql(l,r.ONE))throw Error("invZ was invalid");return{x:u,y:f}}),a=(0,p.H9)(t=>{if(t.is0()){if(e.allowInfinityPoint&&!r.is0(t.py))return;throw Error("bad point: ZERO")}let{x:n,y:i}=t.toAffine();if(!r.isValid(n)||!r.isValid(i))throw Error("bad point: x or y not FE");let o=r.sqr(i),u=s(n);if(!r.eql(o,u))throw Error("bad point: equation left != right");if(!t.isTorsionFree())throw Error("bad point: not in prime-order subgroup");return!0});class h{constructor(t,e,n){if(this.px=t,this.py=e,this.pz=n,null==t||!r.isValid(t))throw Error("x required");if(null==e||!r.isValid(e))throw Error("y required");if(null==n||!r.isValid(n))throw Error("z required");Object.freeze(this)}static fromAffine(t){let{x:e,y:n}=t||{};if(!t||!r.isValid(e)||!r.isValid(n))throw Error("invalid affine point");if(t instanceof h)throw Error("projective point not allowed");let i=t=>r.eql(t,r.ZERO);return i(e)&&i(n)?h.ZERO:new h(e,n,r.ONE)}get x(){return this.toAffine().x}get y(){return this.toAffine().y}static normalizeZ(t){let e=r.invertBatch(t.map(t=>t.pz));return t.map((t,r)=>t.toAffine(e[r])).map(h.fromAffine)}static fromHex(t){let e=h.fromAffine(o((0,p.ql)("pointHex",t)));return e.assertValidity(),e}static fromPrivateKey(t){return h.BASE.multiply(u(t))}static msm(t,e){return(0,c.D1)(h,n,t,e)}_setWindowSize(t){y.setWindowSize(this,t)}assertValidity(){a(this)}hasEvenY(){let{y:t}=this.toAffine();if(r.isOdd)return!r.isOdd(t);throw Error("Field doesn't support isOdd")}equals(t){f(t);let{px:e,py:n,pz:i}=this,{px:o,py:s,pz:u}=t,l=r.eql(r.mul(e,u),r.mul(o,i)),a=r.eql(r.mul(n,u),r.mul(s,i));return l&&a}negate(){return new h(this.px,r.neg(this.py),this.pz)}double(){let{a:t,b:n}=e,i=r.mul(n,v),{px:o,py:s,pz:u}=this,f=r.ZERO,l=r.ZERO,a=r.ZERO,d=r.mul(o,o),c=r.mul(s,s),g=r.mul(u,u),p=r.mul(o,s);return p=r.add(p,p),a=r.mul(o,u),a=r.add(a,a),f=r.mul(t,a),l=r.mul(i,g),l=r.add(f,l),f=r.sub(c,l),l=r.add(c,l),l=r.mul(f,l),f=r.mul(p,f),a=r.mul(i,a),g=r.mul(t,g),p=r.sub(d,g),p=r.mul(t,p),p=r.add(p,a),a=r.add(d,d),d=r.add(a,d),d=r.add(d,g),d=r.mul(d,p),l=r.add(l,d),g=r.mul(s,u),g=r.add(g,g),d=r.mul(g,p),f=r.sub(f,d),a=r.mul(g,c),a=r.add(a,a),new h(f,l,a=r.add(a,a))}add(t){f(t);let{px:n,py:i,pz:o}=this,{px:s,py:u,pz:l}=t,a=r.ZERO,d=r.ZERO,c=r.ZERO,g=e.a,p=r.mul(e.b,v),y=r.mul(n,s),w=r.mul(i,u),m=r.mul(o,l),b=r.add(n,i),E=r.add(s,u);b=r.mul(b,E),E=r.add(y,w),b=r.sub(b,E),E=r.add(n,o);let B=r.add(s,l);return E=r.mul(E,B),B=r.add(y,m),E=r.sub(E,B),B=r.add(i,o),a=r.add(u,l),B=r.mul(B,a),a=r.add(w,m),B=r.sub(B,a),c=r.mul(g,E),a=r.mul(p,m),c=r.add(a,c),a=r.sub(w,c),c=r.add(w,c),d=r.mul(a,c),w=r.add(y,y),w=r.add(w,y),m=r.mul(g,m),E=r.mul(p,E),w=r.add(w,m),m=r.sub(y,m),m=r.mul(g,m),E=r.add(E,m),y=r.mul(w,E),d=r.add(d,y),y=r.mul(B,E),a=r.mul(b,a),a=r.sub(a,y),y=r.mul(b,w),c=r.mul(B,c),new h(a,d,c=r.add(c,y))}subtract(t){return this.add(t.negate())}is0(){return this.equals(h.ZERO)}wNAF(t){return y.wNAFCached(this,t,h.normalizeZ)}multiplyUnsafe(t){let{endo:n,n:i}=e;p.Fy("scalar",t,E,i);let o=h.ZERO;if(t===E)return o;if(this.is0()||t===B)return this;if(!n||y.hasPrecomputes(this))return y.wNAFCachedUnsafe(this,t,h.normalizeZ);let{k1neg:s,k1:u,k2neg:f,k2:l}=n.splitScalar(t),a=o,d=o,c=this;for(;u>E||l>E;)u&B&&(a=a.add(c)),l&B&&(d=d.add(c)),c=c.double(),u>>=B,l>>=B;return s&&(a=a.negate()),f&&(d=d.negate()),d=new h(r.mul(d.px,n.beta),d.py,d.pz),a.add(d)}multiply(t){let n,i;let{endo:o,n:s}=e;if(p.Fy("scalar",t,B,s),o){let{k1neg:e,k1:s,k2neg:u,k2:f}=o.splitScalar(t),{p:l,f:a}=this.wNAF(s),{p:d,f:c}=this.wNAF(f);l=y.constTimeNegate(e,l),d=y.constTimeNegate(u,d),d=new h(r.mul(d.px,o.beta),d.py,d.pz),n=l.add(d),i=a.add(c)}else{let{p:e,f:r}=this.wNAF(t);n=e,i=r}return h.normalizeZ([n,i])[0]}multiplyAndAddUnsafe(t,e,r){let n=h.BASE,i=(t,e)=>e!==E&&e!==B&&t.equals(n)?t.multiply(e):t.multiplyUnsafe(e),o=i(this,e).add(i(t,r));return o.is0()?void 0:o}toAffine(t){return l(this,t)}isTorsionFree(){let{h:t,isTorsionFree:r}=e;if(t===B)return!0;if(r)return r(h,this);throw Error("isTorsionFree() has not been declared for the elliptic curve")}clearCofactor(){let{h:t,clearCofactor:r}=e;return t===B?this:r?r(h,this):this.multiplyUnsafe(e.h)}toRawBytes(t=!0){return(0,p.uw)("isCompressed",t),this.assertValidity(),i(h,this,t)}toHex(t=!0){return(0,p.uw)("isCompressed",t),p.ci(this.toRawBytes(t))}}h.BASE=new h(e.Gx,e.Gy,r.ONE),h.ZERO=new h(r.ZERO,r.ONE,r.ZERO);let d=e.nBitLength,y=(0,c.Mx)(h,e.endo?Math.ceil(d/2):d);return{CURVE:e,ProjectivePoint:h,normPrivateKeyToScalar:u,weierstrassEquation:s,isWithinCurveOrder:function(t){return p.Z2(t,B,e.n)}}}({...e,toBytes(t,e,n){let i=e.toAffine(),o=r.toBytes(i.x),s=p.eV;return((0,p.uw)("isCompressed",n),n)?s(Uint8Array.from([e.hasEvenY()?2:3]),o):s(Uint8Array.from([4]),o,r.toBytes(i.y))},fromBytes(t){let e=t.length,n=t[0],s=t.subarray(1);if(e===i&&(2===n||3===n)){let t;let e=p.bytesToNumberBE(s);if(!p.Z2(e,B,r.ORDER))throw Error("Point is not on curve");let i=a(e);try{t=r.sqrt(i)}catch(t){throw Error("Point is not on curve"+(t instanceof Error?": "+t.message:""))}return(1&n)==1!=((t&B)===B)&&(t=r.neg(t)),{x:e,y:t}}if(e===o&&4===n)return{x:r.fromBytes(s.subarray(0,r.BYTES)),y:r.fromBytes(s.subarray(r.BYTES,2*r.BYTES))};throw Error("invalid Point, expected length of "+i+", or uncompressed "+o+", got "+e)}}),d=t=>p.ci(p.tL(t,e.nByteLength)),w=(t,e,r)=>p.bytesToNumberBE(t.slice(e,r));class m{constructor(t,e,r){this.r=t,this.s=e,this.recovery=r,this.assertValidity()}static fromCompact(t){let r=e.nByteLength;return new m(w(t=(0,p.ql)("compactSignature",t,2*r),0,r),w(t,r,2*r))}static fromDER(t){let{r:e,s:r}=b.toSig((0,p.ql)("DER",t));return new m(e,r)}assertValidity(){p.Fy("r",this.r,B,n),p.Fy("s",this.s,B,n)}addRecoveryBit(t){return new m(this.r,this.s,t)}recoverPublicKey(t){let{r:n,s:i,recovery:o}=this,l=S((0,p.ql)("msgHash",t));if(null==o||![0,1,2,3].includes(o))throw Error("recovery id invalid");let a=2===o||3===o?n+e.n:n;if(a>=r.ORDER)throw Error("recovery id 2 or 3 invalid");let h=(1&o)==0?"02":"03",c=f.fromHex(h+d(a)),g=u(a),y=s(-l*g),w=s(i*g),m=f.BASE.multiplyAndAddUnsafe(c,y,w);if(!m)throw Error("point at infinify");return m.assertValidity(),m}hasHighS(){return this.s>n>>B}normalizeS(){return this.hasHighS()?new m(this.r,s(-this.s),this.recovery):this}toDERRawBytes(){return p.hexToBytes(this.toDERHex())}toDERHex(){return b.hexFromSig({r:this.r,s:this.s})}toCompactRawBytes(){return p.hexToBytes(this.toCompactHex())}toCompactHex(){return d(this.r)+d(this.s)}}function x(t){let e=p._t(t),r="string"==typeof t,n=(e||r)&&t.length;return e?n===i||n===o:r?n===2*i||n===2*o:t instanceof f}let A=e.bits2int||function(t){if(t.length>8192)throw Error("input is too large");let r=p.bytesToNumberBE(t),n=8*t.length-e.nBitLength;return n>0?r>>BigInt(n):r},S=e.bits2int_modN||function(t){return s(A(t))},I=p.dQ(e.nBitLength);function O(t){return p.Fy("num < 2^"+e.nBitLength,t,E,I),p.tL(t,e.nByteLength)}let q={lowS:e.lowS,prehash:!1},N={lowS:e.lowS,prehash:!1};return f.BASE._setWindowSize(8),{CURVE:e,getPublicKey:function(t,e=!0){return f.fromPrivateKey(t).toRawBytes(e)},getSharedSecret:function(t,e,r=!0){if(x(t))throw Error("first arg must be private key");if(!x(e))throw Error("second arg must be public key");return f.fromHex(e).multiply(l(t)).toRawBytes(r)},sign:function(t,i,o=q){let{seed:a,k2sig:d}=function(t,i,o=q){if(["recovered","canonical"].some(t=>t in o))throw Error("sign() legacy options not supported");let{hash:a,randomBytes:d}=e,{lowS:c,prehash:g,extraEntropy:w}=o;null==c&&(c=!0),t=(0,p.ql)("msgHash",t),y(o),g&&(t=(0,p.ql)("prehashed msgHash",a(t)));let b=S(t),v=l(i),x=[O(v),O(b)];if(null!=w&&!1!==w){let t=!0===w?d(r.BYTES):w;x.push((0,p.ql)("extraEntropy",t))}return{seed:p.eV(...x),k2sig:function(t){let e=A(t);if(!h(e))return;let r=u(e),i=f.BASE.multiply(e).toAffine(),o=s(i.x);if(o===E)return;let l=s(r*s(b+o*v));if(l===E)return;let a=(i.x===o?0:2)|Number(i.y&B),d=l;if(c&&l>n>>B)d=l>n>>B?s(-l):l,a^=1;return new m(o,d,a)}}}(t,i,o);return p.n$(e.hash.outputLen,e.nByteLength,e.hmac)(a,d)},verify:function(t,r,n,i=N){let o,l;r=(0,p.ql)("msgHash",r),n=(0,p.ql)("publicKey",n);let{lowS:a,prehash:h,format:d}=i;if(y(i),"strict"in i)throw Error("options.strict was renamed to lowS");if(void 0!==d&&"compact"!==d&&"der"!==d)throw Error("format must be compact or der");let c="string"==typeof t||p._t(t),g=!c&&!d&&"object"==typeof t&&null!==t&&"bigint"==typeof t.r&&"bigint"==typeof t.s;if(!c&&!g)throw Error("invalid signature, expected Uint8Array, hex string or Signature instance");try{if(g&&(l=new m(t.r,t.s)),c){try{"compact"!==d&&(l=m.fromDER(t))}catch(t){if(!(t instanceof b.Err))throw t}l||"der"===d||(l=m.fromCompact(t))}o=f.fromHex(n)}catch(t){return!1}if(!l||a&&l.hasHighS())return!1;h&&(r=e.hash(r));let{r:w,s:E}=l,B=S(r),v=u(E),x=s(B*v),A=s(w*v),I=f.BASE.multiplyAndAddUnsafe(o,x,A)?.toAffine();return!!I&&s(I.x)===w},ProjectivePoint:f,Signature:m,utils:{isValidPrivateKey(t){try{return l(t),!0}catch(t){return!1}},normPrivateKeyToScalar:l,randomPrivateKey:()=>{let t=g.PS(e.n);return g.Us(e.randomBytes(t),e.n)},precompute:(t=8,e=f.BASE)=>(e._setWindowSize(t),e.multiply(BigInt(3)),e)}}})({...t,hash:e,hmac:(t,...r)=>d(e,t,(0,i.eV)(...r)),randomBytes:i.O6});return Object.freeze({...r(e),create:r})}({a:BigInt(0),b:BigInt(7),Fp:q,n:A,Gx:BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"),Gy:BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"),h:BigInt(1),lowS:!0,endo:{beta:BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),splitScalar:t=>{let e=BigInt("0x3086d221a7d46bcde86c90e49284eb15"),r=-S*BigInt("0xe4437ed6010e88286f547fa90abfe4c3"),n=BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"),i=BigInt("0x100000000000000000000000000000000"),o=O(e*t,A),s=O(-r*t,A),u=(0,g.wQ)(t-o*e-s*n,A),f=(0,g.wQ)(-o*r-s*e,A),l=u>i,a=f>i;if(l&&(u=A-u),a&&(f=A-f),u>i||f>i)throw Error("splitScalar: Endomorphism failed, k="+t);return{k1neg:l,k1:u,k2neg:a,k2:f}}}},l);BigInt(0),N.ProjectivePoint},13671:function(t,e,r){function n(t){if(!Number.isSafeInteger(t)||t<0)throw Error("positive integer expected, got "+t)}function i(t,...e){if(!(t instanceof Uint8Array||ArrayBuffer.isView(t)&&"Uint8Array"===t.constructor.name))throw Error("Uint8Array expected");if(e.length>0&&!e.includes(t.length))throw Error("Uint8Array expected of length "+e+", got length="+t.length)}function o(t){if("function"!=typeof t||"function"!=typeof t.create)throw Error("Hash should be wrapped by utils.wrapConstructor");n(t.outputLen),n(t.blockLen)}function s(t,e=!0){if(t.destroyed)throw Error("Hash instance has been destroyed");if(e&&t.finished)throw Error("Hash#digest() has already been called")}function u(t,e){i(t);let r=e.outputLen;if(t.length<r)throw Error("digestInto() expects output buffer of length at least "+r)}r.d(e,{$h:function(){return s},eB:function(){return u},gk:function(){return i},z3:function(){return o}})},47189:function(t,e,r){r.d(e,{VR:function(){return u},bc:function(){return o},l3:function(){return s}});var n=r(13671),i=r(21007);let o=(t,e,r)=>t&e^~t&r,s=(t,e,r)=>t&e^t&r^e&r;class u extends i.kb{constructor(t,e,r,n){super(),this.blockLen=t,this.outputLen=e,this.padOffset=r,this.isLE=n,this.finished=!1,this.length=0,this.pos=0,this.destroyed=!1,this.buffer=new Uint8Array(t),this.view=(0,i.GL)(this.buffer)}update(t){(0,n.$h)(this);let{view:e,buffer:r,blockLen:o}=this,s=(t=(0,i.O0)(t)).length;for(let n=0;n<s;){let u=Math.min(o-this.pos,s-n);if(u===o){let e=(0,i.GL)(t);for(;o<=s-n;n+=o)this.process(e,n);continue}r.set(t.subarray(n,n+u),this.pos),this.pos+=u,n+=u,this.pos===o&&(this.process(e,0),this.pos=0)}return this.length+=t.length,this.roundClean(),this}digestInto(t){(0,n.$h)(this),(0,n.eB)(t,this),this.finished=!0;let{buffer:e,view:r,blockLen:o,isLE:s}=this,{pos:u}=this;e[u++]=128,this.buffer.subarray(u).fill(0),this.padOffset>o-u&&(this.process(r,0),u=0);for(let t=u;t<o;t++)e[t]=0;!function(t,e,r,n){if("function"==typeof t.setBigUint64)return t.setBigUint64(e,r,n);let i=BigInt(32),o=BigInt(4294967295),s=Number(r>>i&o),u=Number(r&o),f=n?4:0,l=n?0:4;t.setUint32(e+f,s,n),t.setUint32(e+l,u,n)}(r,o-8,BigInt(8*this.length),s),this.process(r,0);let f=(0,i.GL)(t),l=this.outputLen;if(l%4)throw Error("_sha2: outputLen should be aligned to 32bit");let a=l/4,h=this.get();if(a>h.length)throw Error("_sha2: outputLen bigger than state");for(let t=0;t<a;t++)f.setUint32(4*t,h[t],s)}digest(){let{buffer:t,outputLen:e}=this;this.digestInto(t);let r=t.slice(0,e);return this.destroy(),r}_cloneInto(t){t||(t=new this.constructor),t.set(...this.get());let{blockLen:e,buffer:r,length:n,finished:i,destroyed:o,pos:s}=this;return t.length=n,t.pos=s,t.finished=i,t.destroyed=o,n%e&&t.buffer.set(r),t}}},21007:function(t,e,r){r.d(e,{kb:function(){return l},eV:function(){return f},GL:function(){return o},O6:function(){return h},np:function(){return s},O0:function(){return u},hE:function(){return a}});let n="object"==typeof globalThis&&"crypto"in globalThis?globalThis.crypto:void 0;var i=r(13671);let o=t=>new DataView(t.buffer,t.byteOffset,t.byteLength),s=(t,e)=>t<<32-e|t>>>e;function u(t){return"string"==typeof t&&(t=function(t){if("string"!=typeof t)throw Error("utf8ToBytes expected string, got "+typeof t);return new Uint8Array(new TextEncoder().encode(t))}(t)),(0,i.gk)(t),t}function f(...t){let e=0;for(let r=0;r<t.length;r++){let n=t[r];(0,i.gk)(n),e+=n.length}let r=new Uint8Array(e);for(let e=0,n=0;e<t.length;e++){let i=t[e];r.set(i,n),n+=i.length}return r}class l{clone(){return this._cloneInto()}}function a(t){let e=e=>t().update(u(e)).digest(),r=t();return e.outputLen=r.outputLen,e.blockLen=r.blockLen,e.create=()=>t(),e}function h(t=32){if(n&&"function"==typeof n.getRandomValues)return n.getRandomValues(new Uint8Array(t));if(n&&"function"==typeof n.randomBytes)return n.randomBytes(t);throw Error("crypto.getRandomValues must be defined")}}}]);