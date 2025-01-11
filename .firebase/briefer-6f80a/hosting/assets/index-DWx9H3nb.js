import{a as F,o as v,k as P,w as E,f as h,n as k,q as O,b as M,g as m,c as Q,p as ot,e as V,t as N,bT as T,F as le,h as ue,r as it,aQ as at,H as ct}from"./index-QemWohX6.js";import"./RouterBack.vue_vue_type_style_index_0_scoped_12cd277c_lang-A0t1sNpT.js";import{_ as H}from"./_plugin-vue_export-helper-DlAUqK2U.js";import lt from"./BackArrowIcon-CX3Zwo_o.js";import{A as Pe}from"./AppBtn--Da3oO6-.js";import{F as ut,S as ht,T as dt,a as ft}from"./FourthBrieferScreen-C2Mbtsyh.js";import pt from"./DownloadIcon-EfrAZsGD.js";const _t=F({__name:"BrieferGradientTitle",props:{fontSize:{default:"300px"}},setup(t){const e=t;return(n,s)=>{const r=M("a-flex");return v(),P(r,{gap:"large",justify:"space-between",align:"center",class:"gradient-title"},{default:E(()=>[h("p",{class:k("blue-gradient"),style:O({fontSize:e.fontSize})},"B",4),h("p",{class:k("purple-gradient"),style:O({fontSize:e.fontSize})},"R",4),h("p",{class:k("pink-gradient"),style:O({fontSize:e.fontSize})},"I",4),h("p",{class:k("bright-pink-gradient"),style:O({fontSize:e.fontSize})},"E",4),h("p",{class:k("orange-gradient"),style:O({fontSize:e.fontSize})},"F",4),h("p",{class:k("bright-pink-gradient"),style:O({fontSize:e.fontSize})},"E",4),h("p",{class:k("purple-gradient"),style:O({fontSize:e.fontSize})},"R",4)]),_:1})}}}),gt=H(_t,[["__scopeId","data-v-e4dc5490"]]),mt=F({__name:"RouterBack",setup(t){const e=ot();function n(){e.back()}return(s,r)=>{const o=M("a-flex");return v(),P(o,{class:"router-back-button",align:"center"},{default:E(()=>[m(Q(Pe),{onClick:n},{default:E(()=>[m(lt,{class:"router-back-button__arrow"}),r[0]||(r[0]=h("p",{class:"router-back-button__text"},"Назад",-1))]),_:1})]),_:1})}}}),bt=H(mt,[["__scopeId","data-v-12cd277c"]]),yt={class:"product_details"},Et={class:"product_details__description"},wt=["src"],It=["src"],vt={class:"product_details__description"},Dt=F({__name:"DescriptionSection",props:{text:String,image:String,reverse:{type:Boolean,default:!1}},setup(t){const e=t;return(n,s)=>{const r=M("a-flex");return v(),V("div",yt,[e.reverse?(v(),P(r,{key:1,justify:"space-between",align:"center"},{default:E(()=>[h("img",{class:"product_details__screenshot",src:e.image},null,8,It),s[1]||(s[1]=h("div",{class:"divider"},null,-1)),h("p",vt,N(e.text),1)]),_:1})):(v(),P(r,{key:0,justify:"space-between",align:"center"},{default:E(()=>[h("p",Et,N(e.text),1),s[0]||(s[0]=h("div",{class:"divider"},null,-1)),h("img",{class:"product_details__screenshot",src:e.image},null,8,wt)]),_:1}))])}}}),Rt=H(Dt,[["__scopeId","data-v-369946d2"]]),Tt="/assets/VueLogo-BC1nR2xn.svg",St="/assets/Python-BylGC6hP.svg",At="/assets/PostgreSQL-BNb5c6SH.svg",Ct={class:"technology-stack"},kt={class:"title"},Ot={class:"language"},Bt=["src"],Nt={class:"language__title"},xt=F({__name:"TechnologyStackComponent",setup(t){const e=[{category:T.companyInfo.technology.frontend,technologies:[{name:T.companyInfo.technology.vue,logo:Tt}]},{category:T.companyInfo.technology.backend,technologies:[{name:T.companyInfo.technology.python,logo:St}]},{category:T.companyInfo.technology.dataBade,technologies:[{name:T.companyInfo.technology.postgreSQL,logo:At}]}];return(n,s)=>{const r=M("a-flex");return v(),V("div",Ct,[h("h1",kt,N(n.$t.companyInfo.technology.title),1),m(r,{vertical:""},{default:E(()=>[(v(),V(le,null,ue(e,(o,i)=>h("div",{key:i},[m(r,{horizontal:"",justify:"space-between",align:"center"},{default:E(()=>[h("div",Ot,N(o.category),1),(v(!0),V(le,null,ue(o.technologies,(a,c)=>(v(),P(r,{key:c,align:"center"},{default:E(()=>[h("img",{src:a.logo,class:"language__logo"},null,8,Bt),h("div",Nt,N(a.name),1)]),_:2},1024))),128))]),_:2},1024),s[0]||(s[0]=h("div",{class:"info-line"},null,-1))])),64))]),_:1})])}}}),Pt=H(xt,[["__scopeId","data-v-9c482a14"]]);var we={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Le=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},Lt=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const o=t[n++];e[s++]=String.fromCharCode((r&31)<<6|o&63)}else if(r>239&&r<365){const o=t[n++],i=t[n++],a=t[n++],c=((r&7)<<18|(o&63)<<12|(i&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const o=t[n++],i=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(o&63)<<6|i&63)}}return e.join("")},$e={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const o=t[r],i=r+1<t.length,a=i?t[r+1]:0,c=r+2<t.length,l=c?t[r+2]:0,b=o>>2,p=(o&3)<<4|a>>4;let _=(a&15)<<2|l>>6,w=l&63;c||(w=64,i||(_=64)),s.push(n[b],n[p],n[_],n[w])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Le(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Lt(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const o=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const l=r<t.length?n[t.charAt(r)]:64;++r;const p=r<t.length?n[t.charAt(r)]:64;if(++r,o==null||a==null||l==null||p==null)throw new $t;const _=o<<2|a>>4;if(s.push(_),l!==64){const w=a<<4&240|l>>2;if(s.push(w),p!==64){const R=l<<6&192|p;s.push(R)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class $t extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ut=function(t){const e=Le(t);return $e.encodeByteArray(e,!0)},Z=function(t){return Ut(t).replace(/\./g,"")},Mt=function(t){try{return $e.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ft(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ht=()=>Ft().__FIREBASE_DEFAULTS__,jt=()=>{if(typeof process>"u"||typeof we>"u")return;const t=we.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},zt=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Mt(t[1]);return e&&JSON.parse(e)},Ue=()=>{try{return Ht()||jt()||zt()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Vt=t=>{var e,n;return(n=(e=Ue())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Wt=t=>{const e=Vt(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Me=()=>{var t;return(t=Ue())===null||t===void 0?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kt(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",r=t.iat||0,o=t.sub||t.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const i=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Z(JSON.stringify(n)),Z(JSON.stringify(i)),""].join(".")}function qt(){try{return typeof indexedDB=="object"}catch{return!1}}function Xt(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var o;e(((o=r.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jt="FirebaseError";class j extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Jt,Object.setPrototypeOf(this,j.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Fe.prototype.create)}}class Fe{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,o=this.errors[e],i=o?Yt(o,s):"Error",a=`${this.serviceName}: ${i} (${r}).`;return new j(r,a,s)}}function Yt(t,e){return t.replace(Qt,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const Qt=/\{\$([^}]+)}/g;function he(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const o=t[r],i=e[r];if(Ie(o)&&Ie(i)){if(!he(o,i))return!1}else if(o!==i)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function Ie(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function be(t){return t&&t._delegate?t._delegate:t}class W{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Gt;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(o){if(r)return null;throw o}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(tn(e))try{this.getOrInitializeService({instanceIdentifier:B})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:r});s.resolve(o)}catch{}}}}clearInstance(e=B){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=B){return this.instances.has(e)}getOptions(e=B){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[o,i]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(o);s===a&&i.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),o=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;o.add(e),this.onInitCallbacks.set(r,o);const i=this.instances.get(r);return i&&e(i,r),()=>{o.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:en(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=B){return this.component?this.component.multipleInstances?e:B:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function en(t){return t===B?void 0:t}function tn(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Zt(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var u;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(u||(u={}));const rn={debug:u.DEBUG,verbose:u.VERBOSE,info:u.INFO,warn:u.WARN,error:u.ERROR,silent:u.SILENT},sn=u.INFO,on={[u.DEBUG]:"log",[u.VERBOSE]:"log",[u.INFO]:"info",[u.WARN]:"warn",[u.ERROR]:"error"},an=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=on[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class cn{constructor(e){this.name=e,this._logLevel=sn,this._logHandler=an,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in u))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?rn[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,u.DEBUG,...e),this._logHandler(this,u.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,u.VERBOSE,...e),this._logHandler(this,u.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,u.INFO,...e),this._logHandler(this,u.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,u.WARN,...e),this._logHandler(this,u.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,u.ERROR,...e),this._logHandler(this,u.ERROR,...e)}}const ln=(t,e)=>e.some(n=>t instanceof n);let ve,De;function un(){return ve||(ve=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function hn(){return De||(De=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const He=new WeakMap,de=new WeakMap,je=new WeakMap,se=new WeakMap,ye=new WeakMap;function dn(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",o),t.removeEventListener("error",i)},o=()=>{n(A(t.result)),r()},i=()=>{s(t.error),r()};t.addEventListener("success",o),t.addEventListener("error",i)});return e.then(n=>{n instanceof IDBCursor&&He.set(n,t)}).catch(()=>{}),ye.set(e,t),e}function fn(t){if(de.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",i),t.removeEventListener("abort",i)},o=()=>{n(),r()},i=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",o),t.addEventListener("error",i),t.addEventListener("abort",i)});de.set(t,e)}let fe={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return de.get(t);if(e==="objectStoreNames")return t.objectStoreNames||je.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return A(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function pn(t){fe=t(fe)}function _n(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(oe(this),e,...n);return je.set(s,e.sort?e.sort():[e]),A(s)}:hn().includes(t)?function(...e){return t.apply(oe(this),e),A(He.get(this))}:function(...e){return A(t.apply(oe(this),e))}}function gn(t){return typeof t=="function"?_n(t):(t instanceof IDBTransaction&&fn(t),ln(t,un())?new Proxy(t,fe):t)}function A(t){if(t instanceof IDBRequest)return dn(t);if(se.has(t))return se.get(t);const e=gn(t);return e!==t&&(se.set(t,e),ye.set(e,t)),e}const oe=t=>ye.get(t);function mn(t,e,{blocked:n,upgrade:s,blocking:r,terminated:o}={}){const i=indexedDB.open(t,e),a=A(i);return s&&i.addEventListener("upgradeneeded",c=>{s(A(i.result),c.oldVersion,c.newVersion,A(i.transaction),c)}),n&&i.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{o&&c.addEventListener("close",()=>o()),r&&c.addEventListener("versionchange",l=>r(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const bn=["get","getKey","getAll","getAllKeys","count"],yn=["put","add","delete","clear"],ie=new Map;function Re(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ie.get(e))return ie.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=yn.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||bn.includes(n)))return;const o=async function(i,...a){const c=this.transaction(i,r?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),r&&c.done]))[0]};return ie.set(e,o),o}pn(t=>({...t,get:(e,n,s)=>Re(e,n)||t.get(e,n,s),has:(e,n)=>!!Re(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(wn(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function wn(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const pe="@firebase/app",Te="0.10.15";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S=new cn("@firebase/app"),In="@firebase/app-compat",vn="@firebase/analytics-compat",Dn="@firebase/analytics",Rn="@firebase/app-check-compat",Tn="@firebase/app-check",Sn="@firebase/auth",An="@firebase/auth-compat",Cn="@firebase/database",kn="@firebase/data-connect",On="@firebase/database-compat",Bn="@firebase/functions",Nn="@firebase/functions-compat",xn="@firebase/installations",Pn="@firebase/installations-compat",Ln="@firebase/messaging",$n="@firebase/messaging-compat",Un="@firebase/performance",Mn="@firebase/performance-compat",Fn="@firebase/remote-config",Hn="@firebase/remote-config-compat",jn="@firebase/storage",zn="@firebase/storage-compat",Vn="@firebase/firestore",Wn="@firebase/vertexai",Gn="@firebase/firestore-compat",Kn="firebase",qn="11.0.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _e="[DEFAULT]",Xn={[pe]:"fire-core",[In]:"fire-core-compat",[Dn]:"fire-analytics",[vn]:"fire-analytics-compat",[Tn]:"fire-app-check",[Rn]:"fire-app-check-compat",[Sn]:"fire-auth",[An]:"fire-auth-compat",[Cn]:"fire-rtdb",[kn]:"fire-data-connect",[On]:"fire-rtdb-compat",[Bn]:"fire-fn",[Nn]:"fire-fn-compat",[xn]:"fire-iid",[Pn]:"fire-iid-compat",[Ln]:"fire-fcm",[$n]:"fire-fcm-compat",[Un]:"fire-perf",[Mn]:"fire-perf-compat",[Fn]:"fire-rc",[Hn]:"fire-rc-compat",[jn]:"fire-gcs",[zn]:"fire-gcs-compat",[Vn]:"fire-fst",[Gn]:"fire-fst-compat",[Wn]:"fire-vertex","fire-js":"fire-js",[Kn]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ee=new Map,Jn=new Map,ge=new Map;function Se(t,e){try{t.container.addComponent(e)}catch(n){S.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function te(t){const e=t.name;if(ge.has(e))return S.debug(`There were multiple attempts to register component ${e}.`),!1;ge.set(e,t);for(const n of ee.values())Se(n,t);for(const n of Jn.values())Se(n,t);return!0}function Yn(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qn={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},C=new Fe("app","Firebase",Qn);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new W("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw C.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const er=qn;function ze(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:_e,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw C.create("bad-app-name",{appName:String(r)});if(n||(n=Me()),!n)throw C.create("no-options");const o=ee.get(r);if(o){if(he(n,o.options)&&he(s,o.config))return o;throw C.create("duplicate-app",{appName:r})}const i=new nn(r);for(const c of ge.values())i.addComponent(c);const a=new Zn(n,s,i);return ee.set(r,a),a}function tr(t=_e){const e=ee.get(t);if(!e&&t===_e&&Me())return ze();if(!e)throw C.create("no-app",{appName:t});return e}function U(t,e,n){var s;let r=(s=Xn[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const o=r.match(/\s|\//),i=e.match(/\s|\//);if(o||i){const a=[`Unable to register library "${r}" with version "${e}":`];o&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),o&&i&&a.push("and"),i&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),S.warn(a.join(" "));return}te(new W(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nr="firebase-heartbeat-database",rr=1,G="firebase-heartbeat-store";let ae=null;function Ve(){return ae||(ae=mn(nr,rr,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(G)}catch(n){console.warn(n)}}}}).catch(t=>{throw C.create("idb-open",{originalErrorMessage:t.message})})),ae}async function sr(t){try{const n=(await Ve()).transaction(G),s=await n.objectStore(G).get(We(t));return await n.done,s}catch(e){if(e instanceof j)S.warn(e.message);else{const n=C.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});S.warn(n.message)}}}async function Ae(t,e){try{const s=(await Ve()).transaction(G,"readwrite");await s.objectStore(G).put(e,We(t)),await s.done}catch(n){if(n instanceof j)S.warn(n.message);else{const s=C.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});S.warn(s.message)}}}function We(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const or=1024,ir=30*24*60*60*1e3;class ar{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new lr(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Ce();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(i=>i.date===o)?void 0:(this._heartbeatsCache.heartbeats.push({date:o,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const a=new Date(i.date).valueOf();return Date.now()-a<=ir}),this._storage.overwrite(this._heartbeatsCache))}catch(s){S.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Ce(),{heartbeatsToSend:s,unsentEntries:r}=cr(this._heartbeatsCache.heartbeats),o=Z(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(n){return S.warn(n),""}}}function Ce(){return new Date().toISOString().substring(0,10)}function cr(t,e=or){const n=[];let s=t.slice();for(const r of t){const o=n.find(i=>i.agent===r.agent);if(o){if(o.dates.push(r.date),ke(n)>e){o.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),ke(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class lr{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return qt()?Xt().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await sr(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Ae(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Ae(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function ke(t){return Z(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ur(t){te(new W("platform-logger",e=>new En(e),"PRIVATE")),te(new W("heartbeat",e=>new ar(e),"PRIVATE")),U(pe,Te,t),U(pe,Te,"esm2017"),U("fire-js","")}ur("");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ge="firebasestorage.googleapis.com",Ke="storageBucket",hr=2*60*1e3,dr=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f extends j{constructor(e,n,s=0){super(ce(e),`Firebase Storage: ${n} (${ce(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,f.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return ce(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var d;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(d||(d={}));function ce(t){return"storage/"+t}function qe(){const t="An unknown error occurred, please check the error payload for server response.";return new f(d.UNKNOWN,t)}function fr(t){return new f(d.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function pr(t){return new f(d.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function _r(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new f(d.UNAUTHENTICATED,t)}function gr(){return new f(d.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function mr(t){return new f(d.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function br(){return new f(d.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function yr(){return new f(d.CANCELED,"User canceled the upload/download.")}function Er(t){return new f(d.INVALID_URL,"Invalid URL '"+t+"'.")}function wr(t){return new f(d.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Ir(){return new f(d.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Ke+"' property when initializing the app?")}function vr(){return new f(d.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function me(t){return new f(d.INVALID_ARGUMENT,t)}function Xe(){return new f(d.APP_DELETED,"The Firebase app was deleted.")}function Dr(t){return new f(d.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function z(t){throw new f(d.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=y.makeFromUrl(e,n)}catch{return new y(e,"")}if(s.path==="")return s;throw wr(e)}static makeFromUrl(e,n){let s=null;const r="([A-Za-z0-9.\\-_]+)";function o(D){D.path.charAt(D.path.length-1)==="/"&&(D.path_=D.path_.slice(0,-1))}const i="(/(.*))?$",a=new RegExp("^gs://"+r+i,"i"),c={bucket:1,path:3};function l(D){D.path_=decodeURIComponent(D.path)}const b="v[A-Za-z0-9_]+",p=n.replace(/[.]/g,"\\."),_="(/([^?#]*).*)?$",w=new RegExp(`^https?://${p}/${b}/b/${r}/o${_}`,"i"),R={bucket:1,path:3},K=n===Ge?"(?:storage.googleapis.com|storage.cloud.google.com)":n,I="([^?#]*)",q=new RegExp(`^https?://${K}/${r}/${I}`,"i"),$=[{regex:a,indices:c,postModify:o},{regex:w,indices:R,postModify:l},{regex:q,indices:{bucket:1,path:2},postModify:l}];for(let D=0;D<$.length;D++){const X=$[D],ne=X.regex.exec(e);if(ne){const st=ne[X.indices.bucket];let re=ne[X.indices.path];re||(re=""),s=new y(st,re),X.postModify(s);break}}if(s==null)throw Er(e);return s}}class Rr{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tr(t,e,n){let s=1,r=null,o=null,i=!1,a=0;function c(){return a===2}let l=!1;function b(...I){l||(l=!0,e.apply(null,I))}function p(I){r=setTimeout(()=>{r=null,t(w,c())},I)}function _(){o&&clearTimeout(o)}function w(I,...q){if(l){_();return}if(I){_(),b.call(null,I,...q);return}if(c()||i){_(),b.call(null,I,...q);return}s<64&&(s*=2);let $;a===1?(a=2,$=0):$=(s+Math.random())*1e3,p($)}let R=!1;function K(I){R||(R=!0,_(),!l&&(r!==null?(I||(a=2),clearTimeout(r),p(0)):I||(a=1)))}return p(0),o=setTimeout(()=>{i=!0,K(!0)},n),K}function Sr(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ar(t){return t!==void 0}function Cr(t){return typeof t=="object"&&!Array.isArray(t)}function Je(t){return typeof t=="string"||t instanceof String}function Oe(t,e,n,s){if(s<e)throw me(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw me(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ye(t,e,n){let s=e;return n==null&&(s=`https://${e}`),`${n}://${s}/v0${t}`}function Qe(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const r=e(s)+"="+e(t[s]);n=n+r+"&"}return n=n.slice(0,-1),n}var x;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(x||(x={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kr(t,e){const n=t>=500&&t<600,r=[408,429].indexOf(t)!==-1,o=e.indexOf(t)!==-1;return n||r||o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or{constructor(e,n,s,r,o,i,a,c,l,b,p,_=!0){this.url_=e,this.method_=n,this.headers_=s,this.body_=r,this.successCodes_=o,this.additionalRetryCodes_=i,this.callback_=a,this.errorCallback_=c,this.timeout_=l,this.progressCallback_=b,this.connectionFactory_=p,this.retry=_,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((w,R)=>{this.resolve_=w,this.reject_=R,this.start_()})}start_(){const e=(s,r)=>{if(r){s(!1,new J(!1,null,!0));return}const o=this.connectionFactory_();this.pendingConnection_=o;const i=a=>{const c=a.loaded,l=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,l)};this.progressCallback_!==null&&o.addUploadProgressListener(i),o.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&o.removeUploadProgressListener(i),this.pendingConnection_=null;const a=o.getErrorCode()===x.NO_ERROR,c=o.getStatus();if(!a||kr(c,this.additionalRetryCodes_)&&this.retry){const b=o.getErrorCode()===x.ABORT;s(!1,new J(!1,null,b));return}const l=this.successCodes_.indexOf(c)!==-1;s(!0,new J(l,o))})},n=(s,r)=>{const o=this.resolve_,i=this.reject_,a=r.connection;if(r.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());Ar(c)?o(c):o()}catch(c){i(c)}else if(a!==null){const c=qe();c.serverResponse=a.getErrorText(),this.errorCallback_?i(this.errorCallback_(a,c)):i(c)}else if(r.canceled){const c=this.appDelete_?Xe():yr();i(c)}else{const c=br();i(c)}};this.canceled_?n(!1,new J(!1,null,!0)):this.backoffId_=Tr(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Sr(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class J{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function Br(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function Nr(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function xr(t,e){e&&(t["X-Firebase-GMPID"]=e)}function Pr(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function Lr(t,e,n,s,r,o,i=!0){const a=Qe(t.urlParams),c=t.url+a,l=Object.assign({},t.headers);return xr(l,e),Br(l,n),Nr(l,o),Pr(l,s),new Or(c,t.method,l,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ze(t){let e;try{e=JSON.parse(t)}catch{return null}return Cr(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $r(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function Ur(t,e){const n=e.split("/").filter(s=>s.length>0).join("/");return t.length===0?n:t+"/"+n}function et(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mr(t,e){return e}class g{constructor(e,n,s,r){this.server=e,this.local=n||e,this.writable=!!s,this.xform=r||Mr}}let Y=null;function Fr(t){return!Je(t)||t.length<2?t:et(t)}function Hr(){if(Y)return Y;const t=[];t.push(new g("bucket")),t.push(new g("generation")),t.push(new g("metageneration")),t.push(new g("name","fullPath",!0));function e(o,i){return Fr(i)}const n=new g("name");n.xform=e,t.push(n);function s(o,i){return i!==void 0?Number(i):i}const r=new g("size");return r.xform=s,t.push(r),t.push(new g("timeCreated")),t.push(new g("updated")),t.push(new g("md5Hash",null,!0)),t.push(new g("cacheControl",null,!0)),t.push(new g("contentDisposition",null,!0)),t.push(new g("contentEncoding",null,!0)),t.push(new g("contentLanguage",null,!0)),t.push(new g("contentType",null,!0)),t.push(new g("metadata","customMetadata",!0)),Y=t,Y}function jr(t,e){function n(){const s=t.bucket,r=t.fullPath,o=new y(s,r);return e._makeStorageReference(o)}Object.defineProperty(t,"ref",{get:n})}function zr(t,e,n){const s={};s.type="file";const r=n.length;for(let o=0;o<r;o++){const i=n[o];s[i.local]=i.xform(s,e[i.server])}return jr(s,t),s}function Vr(t,e,n){const s=Ze(e);return s===null?null:zr(t,s,n)}function Wr(t,e,n,s){const r=Ze(e);if(r===null||!Je(r.downloadTokens))return null;const o=r.downloadTokens;if(o.length===0)return null;const i=encodeURIComponent;return o.split(",").map(l=>{const b=t.bucket,p=t.fullPath,_="/b/"+i(b)+"/o/"+i(p),w=Ye(_,n,s),R=Qe({alt:"media",token:l});return w+R})[0]}class Gr{constructor(e,n,s,r){this.url=e,this.method=n,this.handler=s,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kr(t){if(!t)throw qe()}function qr(t,e){function n(s,r){const o=Vr(t,r,e);return Kr(o!==null),Wr(o,r,t.host,t._protocol)}return n}function Xr(t){function e(n,s){let r;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?r=gr():r=_r():n.getStatus()===402?r=pr(t.bucket):n.getStatus()===403?r=mr(t.path):r=s,r.status=n.getStatus(),r.serverResponse=s.serverResponse,r}return e}function Jr(t){const e=Xr(t);function n(s,r){let o=e(s,r);return s.getStatus()===404&&(o=fr(t.path)),o.serverResponse=r.serverResponse,o}return n}function Yr(t,e,n){const s=e.fullServerUrl(),r=Ye(s,t.host,t._protocol),o="GET",i=t.maxOperationRetryTime,a=new Gr(r,o,qr(t,n),i);return a.errorHandler=Jr(e),a}class Qr{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=x.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=x.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=x.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,s,r){if(this.sent_)throw z("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),r!==void 0)for(const o in r)r.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,r[o].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw z("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw z("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw z("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw z("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class Zr extends Qr{initXhr(){this.xhr_.responseType="text"}}function es(){return new Zr}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(e,n){this._service=e,n instanceof y?this._location=n:this._location=y.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new L(e,n)}get root(){const e=new y(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return et(this._location.path)}get storage(){return this._service}get parent(){const e=$r(this._location.path);if(e===null)return null;const n=new y(this._location.bucket,e);return new L(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw Dr(e)}}function ts(t){t._throwIfRoot("getDownloadURL");const e=Yr(t.storage,t._location,Hr());return t.storage.makeRequestWithTokens(e,es).then(n=>{if(n===null)throw vr();return n})}function ns(t,e){const n=Ur(t._location.path,e),s=new y(t._location.bucket,n);return new L(t.storage,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rs(t){return/^[A-Za-z]+:\/\//.test(t)}function ss(t,e){return new L(t,e)}function tt(t,e){if(t instanceof Ee){const n=t;if(n._bucket==null)throw Ir();const s=new L(n,n._bucket);return tt(s,e)}else return ns(t,e)}function os(t,e){if(rs(e)){if(t instanceof Ee)return ss(t,e);throw me("To use ref(service, url), the first argument must be a Storage instance.")}else return tt(t,e)}function Be(t,e){const n=e==null?void 0:e[Ke];return n==null?null:y.makeFromBucketSpec(n,t)}function is(t,e,n,s={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:r}=s;r&&(t._overrideAuthToken=typeof r=="string"?r:Kt(r,t.app.options.projectId))}class Ee{constructor(e,n,s,r,o){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=r,this._firebaseVersion=o,this._bucket=null,this._host=Ge,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=hr,this._maxUploadRetryTime=dr,this._requests=new Set,r!=null?this._bucket=y.makeFromBucketSpec(r,this._host):this._bucket=Be(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=y.makeFromBucketSpec(this._url,e):this._bucket=Be(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Oe("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Oe("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new L(this,e)}_makeRequest(e,n,s,r,o=!0){if(this._deleted)return new Rr(Xe());{const i=Lr(e,this._appId,s,r,n,this._firebaseVersion,o);return this._requests.add(i),i.getPromise().then(()=>this._requests.delete(i),()=>this._requests.delete(i)),i}}async makeRequestWithTokens(e,n){const[s,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,r).getPromise()}}const Ne="@firebase/storage",xe="0.13.3";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nt="storage";function as(t){return t=be(t),ts(t)}function cs(t,e){return t=be(t),os(t,e)}function ls(t=tr(),e){t=be(t);const s=Yn(t,nt).getImmediate({identifier:e}),r=Wt("storage");return r&&us(s,...r),s}function us(t,e,n,s={}){is(t,e,n,s)}function hs(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),r=t.getProvider("app-check-internal");return new Ee(n,s,r,e,er)}function ds(){te(new W(nt,hs,"PUBLIC").setMultipleInstances(!0)),U(Ne,xe,""),U(Ne,xe,"esm2017")}ds();var fs="firebase",ps="11.0.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */U(fs,ps,"app");const _s={apiKey:"AIzaSyABTH2WxhuvOyzTqAIMIDQ05fK7sCaAmDg",authDomain:"briefer-6f80a.firebaseapp.com",projectId:"briefer-6f80a",storageBucket:"briefer-6f80a.appspot.com",messagingSenderId:"265558504246",appId:"1:265558504246:web:05218a3a284643f5fff997"},gs=ze(_s),ms=ls(gs),bs={class:"download-button__text title"},ys=F({__name:"DownloadButton",setup(t){const e=it(""),n=async()=>{const r=cs(ms,"Presentation/BrieferPresentation.pptx");try{e.value=await as(r)}catch(o){console.error("Ошибка при получении ссылки на файл:",o)}},s=()=>{if(e.value){const r=document.createElement("a");r.href=e.value,r.download="Presentation/BrieferPresentation.pptx",r.click()}};return at(n),(r,o)=>(v(),P(ct,{name:"fade",mode:"out-in"},{default:E(()=>[m(Q(Pe),{onClick:s,class:"download-button"},{default:E(()=>[m(pt,{class:"icon"}),h("span",bs,N(r.$t.companyInfo.brieferPage.presentation),1)]),_:1})]),_:1}))}}),Es=H(ys,[["__scopeId","data-v-d9876168"]]),ws={class:"briefer-page__main"},Is={class:"briefer-page__title"},vs=F({__name:"BrieferPage",setup(t){const e=[{text:T.companyInfo.brieferPage.firstDetail,image:ut,reverse:!1},{text:T.companyInfo.brieferPage.secondDetail,image:ht,reverse:!0},{text:T.companyInfo.brieferPage.thirdDetail,image:dt,reverse:!1},{text:T.companyInfo.brieferPage.fourthDetail,image:ft,reverse:!0}];return(n,s)=>{const r=M("a-divider"),o=M("a-flex");return v(),P(o,{justify:"center",align:"center",vertical:""},{default:E(()=>[m(Q(bt)),h("div",ws,[m(o,{justify:"center",align:"center",vertical:""},{default:E(()=>[m(Q(gt),{"font-size":"8vw"}),h("p",Is,N(n.$t.companyInfo.brieferPage.title),1),m(r),(v(),V(le,null,ue(e,(i,a)=>m(o,{key:a,vertical:"",align:"center"},{default:E(()=>[m(Rt,{text:i.text,image:i.image,reverse:i.reverse},null,8,["text","image","reverse"]),m(r)]),_:2},1024)),64)),m(Pt),m(Es,{class:"briefer-page__download-button"})]),_:1})])]),_:1})}}}),Os=H(vs,[["__scopeId","data-v-a35584a5"]]);export{Os as default};
