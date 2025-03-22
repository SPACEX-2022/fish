"use strict";var ES=Object.defineProperty;var wS=(r,e,t)=>e in r?ES(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var Ei=(r,e,t)=>wS(r,typeof e!="symbol"?e+"":e,t);const OS=Object.freeze(Object.defineProperty({__proto__:null,get game(){return Z6},get prelude(){return rH}},Symbol.toStringTag,{value:"Module"}));function tt(r){for(var e=arguments.length,t=new Array(e>1?e-1:0),n=1;n<e;n++)t[n-1]=arguments[n];throw new Error(typeof r=="number"?"[MobX] minified error nr: "+r+(t.length?" "+t.map(String).join(","):"")+". Find the full error at: https://github.com/mobxjs/mobx/blob/main/packages/mobx/src/errors.ts":"[MobX] "+r)}var PS={};function Pg(){return typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:PS}var Ag=Object.assign,bs=Object.getOwnPropertyDescriptor,$e=Object.defineProperty,Js=Object.prototype,Zf=[];Object.freeze(Zf);var Cg={};Object.freeze(Cg);var AS=typeof Proxy<"u",CS=Object.toString();function Rg(){AS||tt("Proxy not available")}function Ig(r){var e=!1;return function(){if(!e)return e=!0,r.apply(this,arguments)}}var Gn=function(){};function Ae(r){return typeof r=="function"}function en(r){var e=typeof r;switch(e){case"string":case"symbol":case"number":return!0}return!1}function Qs(r){return r!==null&&typeof r=="object"}function Er(r){if(!Qs(r))return!1;var e=Object.getPrototypeOf(r);if(e==null)return!0;var t=Object.hasOwnProperty.call(e,"constructor")&&e.constructor;return typeof t=="function"&&t.toString()===CS}function Mg(r){var e=r==null?void 0:r.constructor;return e?e.name==="GeneratorFunction"||e.displayName==="GeneratorFunction":!1}function Sd(r,e,t){$e(r,e,{enumerable:!1,writable:!0,configurable:!0,value:t})}function Dg(r,e,t){$e(r,e,{enumerable:!1,writable:!1,configurable:!0,value:t})}function ln(r,e){var t="isMobX"+r;return e.prototype[t]=!0,function(n){return Qs(n)&&n[t]===!0}}function ci(r){return r instanceof Map}function wo(r){return r instanceof Set}var Fg=typeof Object.getOwnPropertySymbols<"u";function RS(r){var e=Object.keys(r);if(!Fg)return e;var t=Object.getOwnPropertySymbols(r);return t.length?[].concat(e,t.filter(function(n){return Js.propertyIsEnumerable.call(r,n)})):e}var Ed=typeof Reflect<"u"&&Reflect.ownKeys?Reflect.ownKeys:Fg?function(r){return Object.getOwnPropertyNames(r).concat(Object.getOwnPropertySymbols(r))}:Object.getOwnPropertyNames;function Ng(r){return r===null?null:typeof r=="object"?""+r:r}function xr(r,e){return Js.hasOwnProperty.call(r,e)}var IS=Object.getOwnPropertyDescriptors||function(e){var t={};return Ed(e).forEach(function(n){t[n]=bs(e,n)}),t};function MS(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,NS(n.key),n)}}function wd(r,e,t){return e&&MS(r.prototype,e),Object.defineProperty(r,"prototype",{writable:!1}),r}function Zn(){return Zn=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=t[n])}return r},Zn.apply(this,arguments)}function Lg(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,Jf(r,e)}function Jf(r,e){return Jf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,i){return n.__proto__=i,n},Jf(r,e)}function Vu(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function DS(r,e){if(r){if(typeof r=="string")return av(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);if(t==="Object"&&r.constructor&&(t=r.constructor.name),t==="Map"||t==="Set")return Array.from(r);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return av(r,e)}}function av(r,e){(e==null||e>r.length)&&(e=r.length);for(var t=0,n=new Array(e);t<e;t++)n[t]=r[t];return n}function jn(r,e){var t=typeof Symbol<"u"&&r[Symbol.iterator]||r["@@iterator"];if(t)return(t=t.call(r)).next.bind(t);if(Array.isArray(r)||(t=DS(r))||e){t&&(r=t);var n=0;return function(){return n>=r.length?{done:!0}:{done:!1,value:r[n++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function FS(r,e){if(typeof r!="object"||r===null)return r;var t=r[Symbol.toPrimitive];if(t!==void 0){var n=t.call(r,e);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(r)}function NS(r){var e=FS(r,"string");return typeof e=="symbol"?e:String(e)}var kn=Symbol("mobx-stored-annotations");function ze(r){function e(t,n){if(Oo(n))return r.decorate_20223_(t,n);di(t,n,r)}return Object.assign(e,r)}function di(r,e,t){xr(r,kn)||Sd(r,kn,Zn({},r[kn])),kS(t)||(r[kn][e]=t)}function Oo(r){return typeof r=="object"&&typeof r.kind=="string"}var j=Symbol("mobx administration"),Po=function(){function r(t){t===void 0&&(t="Atom"),this.name_=void 0,this.isPendingUnobservation_=!1,this.isBeingObserved_=!1,this.observers_=new Set,this.diffValue_=0,this.lastAccessedBy_=0,this.lowestObserverState_=Q.NOT_TRACKING_,this.onBOL=void 0,this.onBUOL=void 0,this.name_=t}var e=r.prototype;return e.onBO=function(){this.onBOL&&this.onBOL.forEach(function(n){return n()})},e.onBUO=function(){this.onBUOL&&this.onBUOL.forEach(function(n){return n()})},e.reportObserved=function(){return t0(this)},e.reportChanged=function(){fe(),e0(this),he()},e.toString=function(){return this.name_},r}(),Od=ln("Atom",Po);function Bg(r,e,t){e===void 0&&(e=Gn),t===void 0&&(t=Gn);var n=new Po(r);return e!==Gn&&zE(n,e),t!==Gn&&s0(n,t),n}function LS(r,e){return T0(r,e)}function BS(r,e){return Object.is?Object.is(r,e):r===e?r!==0||1/r===1/e:r!==r&&e!==e}var xs={structural:LS,default:BS};function rn(r,e,t){return f0(r)?r:Array.isArray(r)?Lt.array(r,{name:t}):Er(r)?Lt.object(r,void 0,{name:t}):ci(r)?Lt.map(r,{name:t}):wo(r)?Lt.set(r,{name:t}):typeof r=="function"&&!iu(r)&&!io(r)?Mg(r)?Qn(r):no(t,r):r}function US(r,e,t){if(r==null||au(r)||ou(r)||hn(r)||pi(r))return r;if(Array.isArray(r))return Lt.array(r,{name:t,deep:!1});if(Er(r))return Lt.object(r,void 0,{name:t,deep:!1});if(ci(r))return Lt.map(r,{name:t,deep:!1});if(wo(r))return Lt.set(r,{name:t,deep:!1})}function tu(r){return r}function GS(r,e){return T0(r,e)?e:r}var jS="override";function kS(r){return r.annotationType_===jS}function Ao(r,e){return{annotationType_:r,options_:e,make_:$S,extend_:zS,decorate_20223_:HS}}function $S(r,e,t,n){var i;if((i=this.options_)!=null&&i.bound)return this.extend_(r,e,t,!1)===null?0:1;if(n===r.target_)return this.extend_(r,e,t,!1)===null?0:2;if(iu(t.value))return 1;var o=Ug(r,this,e,t,!1);return $e(n,e,o),2}function zS(r,e,t,n){var i=Ug(r,this,e,t);return r.defineProperty_(e,i,n)}function HS(r,e){var t=e.kind,n=e.name,i=e.addInitializer,o=this,a=function(l){var f,c,h,d;return nn((f=(c=o.options_)==null?void 0:c.name)!=null?f:n.toString(),l,(h=(d=o.options_)==null?void 0:d.autoAction)!=null?h:!1)};if(t=="field"){i(function(){di(this,n,o)});return}if(t=="method"){var s;return iu(r)||(r=a(r)),(s=this.options_)!=null&&s.bound&&i(function(){var u=this,l=u[n].bind(u);l.isMobxAction=!0,u[n]=l}),r}tt("Cannot apply '"+o.annotationType_+"' to '"+String(n)+"' (kind: "+t+"):"+(`
'`+o.annotationType_+"' can only be used on properties with a function value."))}function XS(r,e,t,n){e.annotationType_,n.value}function Ug(r,e,t,n,i){var o,a,s,u,l,f,c;i===void 0&&(i=F.safeDescriptors),XS(r,e,t,n);var h=n.value;if((o=e.options_)!=null&&o.bound){var d;h=h.bind((d=r.proxy_)!=null?d:r.target_)}return{value:nn((a=(s=e.options_)==null?void 0:s.name)!=null?a:t.toString(),h,(u=(l=e.options_)==null?void 0:l.autoAction)!=null?u:!1,(f=e.options_)!=null&&f.bound?(c=r.proxy_)!=null?c:r.target_:void 0),configurable:i?r.isPlainObject_:!0,enumerable:!1,writable:!i}}function Gg(r,e){return{annotationType_:r,options_:e,make_:VS,extend_:WS,decorate_20223_:YS}}function VS(r,e,t,n){var i;if(n===r.target_)return this.extend_(r,e,t,!1)===null?0:2;if((i=this.options_)!=null&&i.bound&&(!xr(r.target_,e)||!io(r.target_[e]))&&this.extend_(r,e,t,!1)===null)return 0;if(io(t.value))return 1;var o=jg(r,this,e,t,!1,!1);return $e(n,e,o),2}function WS(r,e,t,n){var i,o=jg(r,this,e,t,(i=this.options_)==null?void 0:i.bound);return r.defineProperty_(e,o,n)}function YS(r,e){var t,n=e.name,i=e.addInitializer;return io(r)||(r=Qn(r)),(t=this.options_)!=null&&t.bound&&i(function(){var o=this,a=o[n].bind(o);a.isMobXFlow=!0,o[n]=a}),r}function qS(r,e,t,n){e.annotationType_,n.value}function jg(r,e,t,n,i,o){o===void 0&&(o=F.safeDescriptors),qS(r,e,t,n);var a=n.value;if(io(a)||(a=Qn(a)),i){var s;a=a.bind((s=r.proxy_)!=null?s:r.target_),a.isMobXFlow=!0}return{value:a,configurable:o?r.isPlainObject_:!0,enumerable:!1,writable:!o}}function Pd(r,e){return{annotationType_:r,options_:e,make_:KS,extend_:ZS,decorate_20223_:JS}}function KS(r,e,t){return this.extend_(r,e,t,!1)===null?0:1}function ZS(r,e,t,n){return QS(r,this,e,t),r.defineComputedProperty_(e,Zn({},this.options_,{get:t.get,set:t.set}),n)}function JS(r,e){var t=this,n=e.name,i=e.addInitializer;return i(function(){var o=Io(this)[j],a=Zn({},t.options_,{get:r,context:this});a.name||(a.name="ObservableObject."+n.toString()),o.values_.set(n,new Jn(a))}),function(){return this[j].getObservablePropValue_(n)}}function QS(r,e,t,n){e.annotationType_,n.get}function eu(r,e){return{annotationType_:r,options_:e,make_:tE,extend_:eE,decorate_20223_:rE}}function tE(r,e,t){return this.extend_(r,e,t,!1)===null?0:1}function eE(r,e,t,n){var i,o;return nE(r,this),r.defineObservableProperty_(e,t.value,(i=(o=this.options_)==null?void 0:o.enhancer)!=null?i:rn,n)}function rE(r,e){var t=this,n=e.kind,i=e.name,o=new WeakSet;function a(s,u){var l,f,c=Io(s)[j],h=new qr(u,(l=(f=t.options_)==null?void 0:f.enhancer)!=null?l:rn,"ObservableObject."+i.toString(),!1);c.values_.set(i,h),o.add(s)}if(n=="accessor")return{get:function(){return o.has(this)||a(this,r.get.call(this)),this[j].getObservablePropValue_(i)},set:function(u){return o.has(this)||a(this,u),this[j].setObservablePropValue_(i,u)},init:function(u){return o.has(this)||a(this,u),u}}}function nE(r,e,t,n){e.annotationType_}var iE="true",oE=kg();function kg(r){return{annotationType_:iE,options_:r,make_:aE,extend_:sE,decorate_20223_:uE}}function aE(r,e,t,n){var i,o;if(t.get)return ru.make_(r,e,t,n);if(t.set){var a=nn(e.toString(),t.set);return n===r.target_?r.defineProperty_(e,{configurable:F.safeDescriptors?r.isPlainObject_:!0,set:a})===null?0:2:($e(n,e,{configurable:!0,set:a}),2)}if(n!==r.target_&&typeof t.value=="function"){var s;if(Mg(t.value)){var u,l=(u=this.options_)!=null&&u.autoBind?Qn.bound:Qn;return l.make_(r,e,t,n)}var f=(s=this.options_)!=null&&s.autoBind?no.bound:no;return f.make_(r,e,t,n)}var c=((i=this.options_)==null?void 0:i.deep)===!1?Lt.ref:Lt;if(typeof t.value=="function"&&(o=this.options_)!=null&&o.autoBind){var h;t.value=t.value.bind((h=r.proxy_)!=null?h:r.target_)}return c.make_(r,e,t,n)}function sE(r,e,t,n){var i,o;if(t.get)return ru.extend_(r,e,t,n);if(t.set)return r.defineProperty_(e,{configurable:F.safeDescriptors?r.isPlainObject_:!0,set:nn(e.toString(),t.set)},n);if(typeof t.value=="function"&&(i=this.options_)!=null&&i.autoBind){var a;t.value=t.value.bind((a=r.proxy_)!=null?a:r.target_)}var s=((o=this.options_)==null?void 0:o.deep)===!1?Lt.ref:Lt;return s.extend_(r,e,t,n)}function uE(r,e){tt("'"+this.annotationType_+"' cannot be used as a decorator")}var lE="observable",fE="observable.ref",hE="observable.shallow",cE="observable.struct",$g={deep:!0,name:void 0,defaultDecorator:void 0,proxy:!0};Object.freeze($g);function Jo(r){return r||$g}var Qf=eu(lE),dE=eu(fE,{enhancer:tu}),pE=eu(hE,{enhancer:US}),vE=eu(cE,{enhancer:GS}),zg=ze(Qf);function Qo(r){return r.deep===!0?rn:r.deep===!1?tu:mE(r.defaultDecorator)}function yE(r){var e;return r?(e=r.defaultDecorator)!=null?e:kg(r):void 0}function mE(r){var e,t;return r&&(e=(t=r.options_)==null?void 0:t.enhancer)!=null?e:rn}function Hg(r,e,t){if(Oo(e))return Qf.decorate_20223_(r,e);if(en(e)){di(r,e,Qf);return}return f0(r)?r:Er(r)?Lt.object(r,e,t):Array.isArray(r)?Lt.array(r,e):ci(r)?Lt.map(r,e):wo(r)?Lt.set(r,e):typeof r=="object"&&r!==null?r:Lt.box(r,e)}Ag(Hg,zg);var _E={box:function(e,t){var n=Jo(t);return new qr(e,Qo(n),n.name,!0,n.equals)},array:function(e,t){var n=Jo(t);return(F.useProxies===!1||n.proxy===!1?uw:JE)(e,Qo(n),n.name)},map:function(e,t){var n=Jo(t);return new p0(e,Qo(n),n.name)},set:function(e,t){var n=Jo(t);return new m0(e,Qo(n),n.name)},object:function(e,t,n){return vi(function(){return HE(F.useProxies===!1||(n==null?void 0:n.proxy)===!1?Io({},n):qE({},n),e,t)})},ref:ze(dE),shallow:ze(pE),deep:zg,struct:ze(vE)},Lt=Ag(Hg,_E),Xg="computed",gE="computed.struct",th=Pd(Xg),bE=Pd(gE,{equals:xs.structural}),ru=function(e,t){if(Oo(t))return th.decorate_20223_(e,t);if(en(t))return di(e,t,th);if(Er(e))return ze(Pd(Xg,e));var n=Er(t)?t:{};return n.get=e,n.name||(n.name=e.name||""),new Jn(n)};Object.assign(ru,th);ru.struct=ze(bE);var sv,uv,Ts=0,xE=1,TE=(sv=(uv=bs(function(){},"name"))==null?void 0:uv.configurable)!=null?sv:!1,lv={value:"action",configurable:!0,writable:!1,enumerable:!1};function nn(r,e,t,n){t===void 0&&(t=!1);function i(){return Vg(r,t,e,n||this,arguments)}return i.isMobxAction=!0,i.toString=function(){return e.toString()},TE&&(lv.value=r,$e(i,"name",lv)),i}function Vg(r,e,t,n,i){var o=SE(r,e);try{return t.apply(n,i)}catch(a){throw o.error_=a,a}finally{EE(o)}}function SE(r,e,t,n){var i=!1,o=0,a=F.trackingDerivation,s=!e||!a;fe();var u=F.allowStateChanges;s&&(fn(),u=Ad(!0));var l=Rd(!0),f={runAsAction_:s,prevDerivation_:a,prevAllowStateChanges_:u,prevAllowStateReads_:l,notifySpy_:i,startTime_:o,actionId_:xE++,parentActionId_:Ts};return Ts=f.actionId_,f}function EE(r){Ts!==r.actionId_&&tt(30),Ts=r.parentActionId_,r.error_!==void 0&&(F.suppressReactionErrors=!0),Cd(r.prevAllowStateChanges_),zi(r.prevAllowStateReads_),he(),r.runAsAction_&&sr(r.prevDerivation_),F.suppressReactionErrors=!1}function Ad(r){var e=F.allowStateChanges;return F.allowStateChanges=r,e}function Cd(r){F.allowStateChanges=r}var Wg;Wg=Symbol.toPrimitive;var qr=function(r){Lg(e,r);function e(n,i,o,a,s){var u;return o===void 0&&(o="ObservableValue"),s===void 0&&(s=xs.default),u=r.call(this,o)||this,u.enhancer=void 0,u.name_=void 0,u.equals=void 0,u.hasUnreportedChange_=!1,u.interceptors_=void 0,u.changeListeners_=void 0,u.value_=void 0,u.dehancer=void 0,u.enhancer=i,u.name_=o,u.equals=s,u.value_=i(n,void 0,o),u}var t=e.prototype;return t.dehanceValue=function(i){return this.dehancer!==void 0?this.dehancer(i):i},t.set=function(i){this.value_,i=this.prepareNewValue_(i),i!==F.UNCHANGED&&this.setNewValue_(i)},t.prepareNewValue_=function(i){if(ue(this)){var o=le(this,{object:this,type:He,newValue:i});if(!o)return F.UNCHANGED;i=o.newValue}return i=this.enhancer(i,this.value_,this.name_),this.equals(this.value_,i)?F.UNCHANGED:i},t.setNewValue_=function(i){var o=this.value_;this.value_=i,this.reportChanged(),Se(this)&&Ee(this,{type:He,object:this,newValue:i,oldValue:o})},t.get=function(){return this.reportObserved(),this.dehanceValue(this.value_)},t.intercept_=function(i){return Co(this,i)},t.observe_=function(i,o){return o&&i({observableKind:"value",debugObjectName:this.name_,object:this,type:He,newValue:this.value_,oldValue:void 0}),Ro(this,i)},t.raw=function(){return this.value_},t.toJSON=function(){return this.get()},t.toString=function(){return this.name_+"["+this.value_+"]"},t.valueOf=function(){return Ng(this.get())},t[Wg]=function(){return this.valueOf()},e}(Po),Yg;Yg=Symbol.toPrimitive;var Jn=function(){function r(t){this.dependenciesState_=Q.NOT_TRACKING_,this.observing_=[],this.newObserving_=null,this.isBeingObserved_=!1,this.isPendingUnobservation_=!1,this.observers_=new Set,this.diffValue_=0,this.runId_=0,this.lastAccessedBy_=0,this.lowestObserverState_=Q.UP_TO_DATE_,this.unboundDepsCount_=0,this.value_=new Es(null),this.name_=void 0,this.triggeredBy_=void 0,this.isComputing_=!1,this.isRunningSetter_=!1,this.derivation=void 0,this.setter_=void 0,this.isTracing_=Ss.NONE,this.scope_=void 0,this.equals_=void 0,this.requiresReaction_=void 0,this.keepAlive_=void 0,this.onBOL=void 0,this.onBUOL=void 0,t.get||tt(31),this.derivation=t.get,this.name_=t.name||"ComputedValue",t.set&&(this.setter_=nn("ComputedValue-setter",t.set)),this.equals_=t.equals||(t.compareStructural||t.struct?xs.structural:xs.default),this.scope_=t.context,this.requiresReaction_=t.requiresReaction,this.keepAlive_=!!t.keepAlive}var e=r.prototype;return e.onBecomeStale_=function(){AE(this)},e.onBO=function(){this.onBOL&&this.onBOL.forEach(function(n){return n()})},e.onBUO=function(){this.onBUOL&&this.onBUOL.forEach(function(n){return n()})},e.get=function(){if(this.isComputing_&&tt(32,this.name_,this.derivation),F.inBatch===0&&this.observers_.size===0&&!this.keepAlive_)eh(this)&&(this.warnAboutUntrackedRead_(),fe(),this.value_=this.computeValue_(!1),he());else if(t0(this),eh(this)){var n=F.trackingContext;this.keepAlive_&&!n&&(F.trackingContext=this),this.trackAndCompute()&&PE(this),F.trackingContext=n}var i=this.value_;if(ts(i))throw i.cause;return i},e.set=function(n){if(this.setter_){this.isRunningSetter_&&tt(33,this.name_),this.isRunningSetter_=!0;try{this.setter_.call(this.scope_,n)}finally{this.isRunningSetter_=!1}}else tt(34,this.name_)},e.trackAndCompute=function(){var n=this.value_,i=this.dependenciesState_===Q.NOT_TRACKING_,o=this.computeValue_(!0),a=i||ts(n)||ts(o)||!this.equals_(n,o);return a&&(this.value_=o),a},e.computeValue_=function(n){this.isComputing_=!0;var i=Ad(!1),o;if(n)o=qg(this,this.derivation,this.scope_);else if(F.disableErrorBoundaries===!0)o=this.derivation.call(this.scope_);else try{o=this.derivation.call(this.scope_)}catch(a){o=new Es(a)}return Cd(i),this.isComputing_=!1,o},e.suspend_=function(){this.keepAlive_||(rh(this),this.value_=void 0)},e.observe_=function(n,i){var o=this,a=!0,s=void 0;return UE(function(){var u=o.get();if(!a||i){var l=fn();n({observableKind:"computed",debugObjectName:o.name_,type:He,object:o,newValue:u,oldValue:s}),sr(l)}a=!1,s=u})},e.warnAboutUntrackedRead_=function(){},e.toString=function(){return this.name_+"["+this.derivation.toString()+"]"},e.valueOf=function(){return Ng(this.get())},e[Yg]=function(){return this.valueOf()},r}(),nu=ln("ComputedValue",Jn),Q;(function(r){r[r.NOT_TRACKING_=-1]="NOT_TRACKING_",r[r.UP_TO_DATE_=0]="UP_TO_DATE_",r[r.POSSIBLY_STALE_=1]="POSSIBLY_STALE_",r[r.STALE_=2]="STALE_"})(Q||(Q={}));var Ss;(function(r){r[r.NONE=0]="NONE",r[r.LOG=1]="LOG",r[r.BREAK=2]="BREAK"})(Ss||(Ss={}));var Es=function(e){this.cause=void 0,this.cause=e};function ts(r){return r instanceof Es}function eh(r){switch(r.dependenciesState_){case Q.UP_TO_DATE_:return!1;case Q.NOT_TRACKING_:case Q.STALE_:return!0;case Q.POSSIBLY_STALE_:{for(var e=Rd(!0),t=fn(),n=r.observing_,i=n.length,o=0;o<i;o++){var a=n[o];if(nu(a)){if(F.disableErrorBoundaries)a.get();else try{a.get()}catch{return sr(t),zi(e),!0}if(r.dependenciesState_===Q.STALE_)return sr(t),zi(e),!0}}return Zg(r),sr(t),zi(e),!1}}}function qg(r,e,t){var n=Rd(!0);Zg(r),r.newObserving_=new Array(r.runId_===0?100:r.observing_.length),r.unboundDepsCount_=0,r.runId_=++F.runId;var i=F.trackingDerivation;F.trackingDerivation=r,F.inBatch++;var o;if(F.disableErrorBoundaries===!0)o=e.call(t);else try{o=e.call(t)}catch(a){o=new Es(a)}return F.inBatch--,F.trackingDerivation=i,wE(r),zi(n),o}function wE(r){for(var e=r.observing_,t=r.observing_=r.newObserving_,n=Q.UP_TO_DATE_,i=0,o=r.unboundDepsCount_,a=0;a<o;a++){var s=t[a];s.diffValue_===0&&(s.diffValue_=1,i!==a&&(t[i]=s),i++),s.dependenciesState_>n&&(n=s.dependenciesState_)}for(t.length=i,r.newObserving_=null,o=e.length;o--;){var u=e[o];u.diffValue_===0&&Jg(u,r),u.diffValue_=0}for(;i--;){var l=t[i];l.diffValue_===1&&(l.diffValue_=0,OE(l,r))}n!==Q.UP_TO_DATE_&&(r.dependenciesState_=n,r.onBecomeStale_())}function rh(r){var e=r.observing_;r.observing_=[];for(var t=e.length;t--;)Jg(e[t],r);r.dependenciesState_=Q.NOT_TRACKING_}function Kg(r){var e=fn();try{return r()}finally{sr(e)}}function fn(){var r=F.trackingDerivation;return F.trackingDerivation=null,r}function sr(r){F.trackingDerivation=r}function Rd(r){var e=F.allowStateReads;return F.allowStateReads=r,e}function zi(r){F.allowStateReads=r}function Zg(r){if(r.dependenciesState_!==Q.UP_TO_DATE_){r.dependenciesState_=Q.UP_TO_DATE_;for(var e=r.observing_,t=e.length;t--;)e[t].lowestObserverState_=Q.UP_TO_DATE_}}var Wu=function(){this.version=6,this.UNCHANGED={},this.trackingDerivation=null,this.trackingContext=null,this.runId=0,this.mobxGuid=0,this.inBatch=0,this.pendingUnobservations=[],this.pendingReactions=[],this.isRunningReactions=!1,this.allowStateChanges=!1,this.allowStateReads=!0,this.enforceActions=!0,this.spyListeners=[],this.globalReactionErrorHandlers=[],this.computedRequiresReaction=!1,this.reactionRequiresObservable=!1,this.observableRequiresReaction=!1,this.disableErrorBoundaries=!1,this.suppressReactionErrors=!1,this.useProxies=!0,this.verifyProxies=!1,this.safeDescriptors=!0},Yu=!0,F=function(){var r=Pg();return r.__mobxInstanceCount>0&&!r.__mobxGlobals&&(Yu=!1),r.__mobxGlobals&&r.__mobxGlobals.version!==new Wu().version&&(Yu=!1),Yu?r.__mobxGlobals?(r.__mobxInstanceCount+=1,r.__mobxGlobals.UNCHANGED||(r.__mobxGlobals.UNCHANGED={}),r.__mobxGlobals):(r.__mobxInstanceCount=1,r.__mobxGlobals=new Wu):(setTimeout(function(){tt(35)},1),new Wu)}();function OE(r,e){r.observers_.add(e),r.lowestObserverState_>e.dependenciesState_&&(r.lowestObserverState_=e.dependenciesState_)}function Jg(r,e){r.observers_.delete(e),r.observers_.size===0&&Qg(r)}function Qg(r){r.isPendingUnobservation_===!1&&(r.isPendingUnobservation_=!0,F.pendingUnobservations.push(r))}function fe(){F.inBatch++}function he(){if(--F.inBatch===0){r0();for(var r=F.pendingUnobservations,e=0;e<r.length;e++){var t=r[e];t.isPendingUnobservation_=!1,t.observers_.size===0&&(t.isBeingObserved_&&(t.isBeingObserved_=!1,t.onBUO()),t instanceof Jn&&t.suspend_())}F.pendingUnobservations=[]}}function t0(r){var e=F.trackingDerivation;return e!==null?(e.runId_!==r.lastAccessedBy_&&(r.lastAccessedBy_=e.runId_,e.newObserving_[e.unboundDepsCount_++]=r,!r.isBeingObserved_&&F.trackingContext&&(r.isBeingObserved_=!0,r.onBO())),r.isBeingObserved_):(r.observers_.size===0&&F.inBatch>0&&Qg(r),!1)}function e0(r){r.lowestObserverState_!==Q.STALE_&&(r.lowestObserverState_=Q.STALE_,r.observers_.forEach(function(e){e.dependenciesState_===Q.UP_TO_DATE_&&e.onBecomeStale_(),e.dependenciesState_=Q.STALE_}))}function PE(r){r.lowestObserverState_!==Q.STALE_&&(r.lowestObserverState_=Q.STALE_,r.observers_.forEach(function(e){e.dependenciesState_===Q.POSSIBLY_STALE_?e.dependenciesState_=Q.STALE_:e.dependenciesState_===Q.UP_TO_DATE_&&(r.lowestObserverState_=Q.UP_TO_DATE_)}))}function AE(r){r.lowestObserverState_===Q.UP_TO_DATE_&&(r.lowestObserverState_=Q.POSSIBLY_STALE_,r.observers_.forEach(function(e){e.dependenciesState_===Q.UP_TO_DATE_&&(e.dependenciesState_=Q.POSSIBLY_STALE_,e.onBecomeStale_())}))}var nh=function(){function r(t,n,i,o){t===void 0&&(t="Reaction"),this.name_=void 0,this.onInvalidate_=void 0,this.errorHandler_=void 0,this.requiresObservable_=void 0,this.observing_=[],this.newObserving_=[],this.dependenciesState_=Q.NOT_TRACKING_,this.diffValue_=0,this.runId_=0,this.unboundDepsCount_=0,this.isDisposed_=!1,this.isScheduled_=!1,this.isTrackPending_=!1,this.isRunning_=!1,this.isTracing_=Ss.NONE,this.name_=t,this.onInvalidate_=n,this.errorHandler_=i,this.requiresObservable_=o}var e=r.prototype;return e.onBecomeStale_=function(){this.schedule_()},e.schedule_=function(){this.isScheduled_||(this.isScheduled_=!0,F.pendingReactions.push(this),r0())},e.isScheduled=function(){return this.isScheduled_},e.runReaction_=function(){if(!this.isDisposed_){fe(),this.isScheduled_=!1;var n=F.trackingContext;if(F.trackingContext=this,eh(this)){this.isTrackPending_=!0;try{this.onInvalidate_()}catch(i){this.reportExceptionInDerivation_(i)}}F.trackingContext=n,he()}},e.track=function(n){if(!this.isDisposed_){fe(),this.isRunning_=!0;var i=F.trackingContext;F.trackingContext=this;var o=qg(this,n,void 0);F.trackingContext=i,this.isRunning_=!1,this.isTrackPending_=!1,this.isDisposed_&&rh(this),ts(o)&&this.reportExceptionInDerivation_(o.cause),he()}},e.reportExceptionInDerivation_=function(n){var i=this;if(this.errorHandler_){this.errorHandler_(n,this);return}if(F.disableErrorBoundaries)throw n;var o="[mobx] uncaught error in '"+this+"'";F.suppressReactionErrors||console.error(o,n),F.globalReactionErrorHandlers.forEach(function(a){return a(n,i)})},e.dispose=function(){this.isDisposed_||(this.isDisposed_=!0,this.isRunning_||(fe(),rh(this),he()))},e.getDisposer_=function(n){var i=this,o=function a(){i.dispose(),n==null||n.removeEventListener==null||n.removeEventListener("abort",a)};return n==null||n.addEventListener==null||n.addEventListener("abort",o),o[j]=this,o},e.toString=function(){return"Reaction["+this.name_+"]"},e.trace=function(n){},r}(),CE=100,RE=function(e){return e()};function r0(){F.inBatch>0||F.isRunningReactions||RE(IE)}function IE(){F.isRunningReactions=!0;for(var r=F.pendingReactions,e=0;r.length>0;){++e===CE&&(console.error("[mobx] cycle in reaction: "+r[0]),r.splice(0));for(var t=r.splice(0),n=0,i=t.length;n<i;n++)t[n].runReaction_()}F.isRunningReactions=!1}var ws=ln("Reaction",nh);function Hi(){return!1}function ME(r){return console.warn("[mobx.spy] Is a no-op in production builds"),function(){}}var n0="action",DE="action.bound",i0="autoAction",FE="autoAction.bound",o0="<unnamed action>",ih=Ao(n0),NE=Ao(DE,{bound:!0}),oh=Ao(i0,{autoAction:!0}),LE=Ao(FE,{autoAction:!0,bound:!0});function a0(r){var e=function(n,i){if(Ae(n))return nn(n.name||o0,n,r);if(Ae(i))return nn(n,i,r);if(Oo(i))return(r?oh:ih).decorate_20223_(n,i);if(en(i))return di(n,i,r?oh:ih);if(en(n))return ze(Ao(r?i0:n0,{name:n,autoAction:r}))};return e}var yr=a0(!1);Object.assign(yr,ih);var no=a0(!0);Object.assign(no,oh);yr.bound=ze(NE);no.bound=ze(LE);function BE(r){return Vg(r.name||o0,!1,r,this,void 0)}function iu(r){return Ae(r)&&r.isMobxAction===!0}function UE(r,e){var t,n,i,o,a;e===void 0&&(e=Cg);var s=(t=(n=e)==null?void 0:n.name)!=null?t:"Autorun",u=!e.scheduler&&!e.delay,l;if(u)l=new nh(s,function(){this.track(h)},e.onError,e.requiresObservable);else{var f=jE(e),c=!1;l=new nh(s,function(){c||(c=!0,f(function(){c=!1,l.isDisposed_||l.track(h)}))},e.onError,e.requiresObservable)}function h(){r(l)}return(i=e)!=null&&(o=i.signal)!=null&&o.aborted||l.schedule_(),l.getDisposer_((a=e)==null?void 0:a.signal)}var GE=function(e){return e()};function jE(r){return r.scheduler?r.scheduler:r.delay?function(e){return setTimeout(e,r.delay)}:GE}var kE="onBO",$E="onBUO";function zE(r,e,t){return u0(kE,r,e,t)}function s0(r,e,t){return u0($E,r,e,t)}function u0(r,e,t,n){var i=ah(e),o=Ae(n)?n:t,a=r+"L";return i[a]?i[a].add(o):i[a]=new Set([o]),function(){var s=i[a];s&&(s.delete(o),s.size===0&&delete i[a])}}function HE(r,e,t,n){var i=IS(e);return vi(function(){var o=Io(r,n)[j];Ed(i).forEach(function(a){o.extend_(a,i[a],t&&a in t?t[a]:!0)})}),r}var XE=0;function l0(){this.message="FLOW_CANCELLED"}l0.prototype=Object.create(Error.prototype);var qu=Gg("flow"),VE=Gg("flow.bound",{bound:!0}),Qn=Object.assign(function(e,t){if(Oo(t))return qu.decorate_20223_(e,t);if(en(t))return di(e,t,qu);var n=e,i=n.name||"<unnamed flow>",o=function(){var s=this,u=arguments,l=++XE,f=yr(i+" - runid: "+l+" - init",n).apply(s,u),c,h=void 0,d=new Promise(function(p,v){var y=0;c=v;function m(x){h=void 0;var b;try{b=yr(i+" - runid: "+l+" - yield "+y++,f.next).call(f,x)}catch(T){return v(T)}_(b)}function g(x){h=void 0;var b;try{b=yr(i+" - runid: "+l+" - yield "+y++,f.throw).call(f,x)}catch(T){return v(T)}_(b)}function _(x){if(Ae(x==null?void 0:x.then)){x.then(_,v);return}return x.done?p(x.value):(h=Promise.resolve(x.value),h.then(m,g))}m(void 0)});return d.cancel=yr(i+" - runid: "+l+" - cancel",function(){try{h&&fv(h);var p=f.return(void 0),v=Promise.resolve(p.value);v.then(Gn,Gn),fv(v),c(new l0)}catch(y){c(y)}}),d};return o.isMobXFlow=!0,o},qu);Qn.bound=ze(VE);function fv(r){Ae(r.cancel)&&r.cancel()}function io(r){return(r==null?void 0:r.isMobXFlow)===!0}function WE(r,e){return r?au(r)||!!r[j]||Od(r)||ws(r)||nu(r):!1}function f0(r){return WE(r)}function ir(r,e){e===void 0&&(e=void 0),fe();try{return r.apply(e)}finally{he()}}function Sn(r){return r[j]}var YE={has:function(e,t){return Sn(e).has_(t)},get:function(e,t){return Sn(e).get_(t)},set:function(e,t,n){var i;return en(t)?(i=Sn(e).set_(t,n,!0))!=null?i:!0:!1},deleteProperty:function(e,t){var n;return en(t)?(n=Sn(e).delete_(t,!0))!=null?n:!0:!1},defineProperty:function(e,t,n){var i;return(i=Sn(e).defineProperty_(t,n))!=null?i:!0},ownKeys:function(e){return Sn(e).ownKeys_()},preventExtensions:function(e){tt(13)}};function qE(r,e){var t,n;return Rg(),r=Io(r,e),(n=(t=r[j]).proxy_)!=null?n:t.proxy_=new Proxy(r,YE)}function ue(r){return r.interceptors_!==void 0&&r.interceptors_.length>0}function Co(r,e){var t=r.interceptors_||(r.interceptors_=[]);return t.push(e),Ig(function(){var n=t.indexOf(e);n!==-1&&t.splice(n,1)})}function le(r,e){var t=fn();try{for(var n=[].concat(r.interceptors_||[]),i=0,o=n.length;i<o&&(e=n[i](e),e&&!e.type&&tt(14),!!e);i++);return e}finally{sr(t)}}function Se(r){return r.changeListeners_!==void 0&&r.changeListeners_.length>0}function Ro(r,e){var t=r.changeListeners_||(r.changeListeners_=[]);return t.push(e),Ig(function(){var n=t.indexOf(e);n!==-1&&t.splice(n,1)})}function Ee(r,e){var t=fn(),n=r.changeListeners_;if(n){n=n.slice();for(var i=0,o=n.length;i<o;i++)n[i](e);sr(t)}}var hv="splice",He="update",KE=1e4,ZE={get:function(e,t){var n=e[j];return t===j?n:t==="length"?n.getArrayLength_():typeof t=="string"&&!isNaN(t)?n.get_(parseInt(t)):xr(Os,t)?Os[t]:e[t]},set:function(e,t,n){var i=e[j];return t==="length"&&i.setArrayLength_(n),typeof t=="symbol"||isNaN(t)?e[t]=n:i.set_(parseInt(t),n),!0},preventExtensions:function(){tt(15)}},Id=function(){function r(t,n,i,o){t===void 0&&(t="ObservableArray"),this.owned_=void 0,this.legacyMode_=void 0,this.atom_=void 0,this.values_=[],this.interceptors_=void 0,this.changeListeners_=void 0,this.enhancer_=void 0,this.dehancer=void 0,this.proxy_=void 0,this.lastKnownLength_=0,this.owned_=i,this.legacyMode_=o,this.atom_=new Po(t),this.enhancer_=function(a,s){return n(a,s,"ObservableArray[..]")}}var e=r.prototype;return e.dehanceValue_=function(n){return this.dehancer!==void 0?this.dehancer(n):n},e.dehanceValues_=function(n){return this.dehancer!==void 0&&n.length>0?n.map(this.dehancer):n},e.intercept_=function(n){return Co(this,n)},e.observe_=function(n,i){return i===void 0&&(i=!1),i&&n({observableKind:"array",object:this.proxy_,debugObjectName:this.atom_.name_,type:"splice",index:0,added:this.values_.slice(),addedCount:this.values_.length,removed:[],removedCount:0}),Ro(this,n)},e.getArrayLength_=function(){return this.atom_.reportObserved(),this.values_.length},e.setArrayLength_=function(n){(typeof n!="number"||isNaN(n)||n<0)&&tt("Out of range: "+n);var i=this.values_.length;if(n!==i)if(n>i){for(var o=new Array(n-i),a=0;a<n-i;a++)o[a]=void 0;this.spliceWithArray_(i,0,o)}else this.spliceWithArray_(n,i-n)},e.updateArrayLength_=function(n,i){n!==this.lastKnownLength_&&tt(16),this.lastKnownLength_+=i,this.legacyMode_&&i>0&&x0(n+i+1)},e.spliceWithArray_=function(n,i,o){var a=this;this.atom_;var s=this.values_.length;if(n===void 0?n=0:n>s?n=s:n<0&&(n=Math.max(0,s+n)),arguments.length===1?i=s-n:i==null?i=0:i=Math.max(0,Math.min(i,s-n)),o===void 0&&(o=Zf),ue(this)){var u=le(this,{object:this.proxy_,type:hv,index:n,removedCount:i,added:o});if(!u)return Zf;i=u.removedCount,o=u.added}if(o=o.length===0?o:o.map(function(c){return a.enhancer_(c,void 0)}),this.legacyMode_){var l=o.length-i;this.updateArrayLength_(s,l)}var f=this.spliceItemsIntoValues_(n,i,o);return(i!==0||o.length!==0)&&this.notifyArraySplice_(n,o,f),this.dehanceValues_(f)},e.spliceItemsIntoValues_=function(n,i,o){if(o.length<KE){var a;return(a=this.values_).splice.apply(a,[n,i].concat(o))}else{var s=this.values_.slice(n,n+i),u=this.values_.slice(n+i);this.values_.length+=o.length-i;for(var l=0;l<o.length;l++)this.values_[n+l]=o[l];for(var f=0;f<u.length;f++)this.values_[n+o.length+f]=u[f];return s}},e.notifyArrayChildUpdate_=function(n,i,o){var a=!this.owned_&&Hi(),s=Se(this),u=s||a?{observableKind:"array",object:this.proxy_,type:He,debugObjectName:this.atom_.name_,index:n,newValue:i,oldValue:o}:null;this.atom_.reportChanged(),s&&Ee(this,u)},e.notifyArraySplice_=function(n,i,o){var a=!this.owned_&&Hi(),s=Se(this),u=s||a?{observableKind:"array",object:this.proxy_,debugObjectName:this.atom_.name_,type:hv,index:n,removed:o,added:i,removedCount:o.length,addedCount:i.length}:null;this.atom_.reportChanged(),s&&Ee(this,u)},e.get_=function(n){if(this.legacyMode_&&n>=this.values_.length){console.warn("[mobx] Out of bounds read: "+n);return}return this.atom_.reportObserved(),this.dehanceValue_(this.values_[n])},e.set_=function(n,i){var o=this.values_;if(this.legacyMode_&&n>o.length&&tt(17,n,o.length),n<o.length){this.atom_;var a=o[n];if(ue(this)){var s=le(this,{type:He,object:this.proxy_,index:n,newValue:i});if(!s)return;i=s.newValue}i=this.enhancer_(i,a);var u=i!==a;u&&(o[n]=i,this.notifyArrayChildUpdate_(n,i,a))}else{for(var l=new Array(n+1-o.length),f=0;f<l.length-1;f++)l[f]=void 0;l[l.length-1]=i,this.spliceWithArray_(o.length,0,l)}},r}();function JE(r,e,t,n){return t===void 0&&(t="ObservableArray"),n===void 0&&(n=!1),Rg(),vi(function(){var i=new Id(t,e,n,!1);Dg(i.values_,j,i);var o=new Proxy(i.values_,ZE);return i.proxy_=o,r&&r.length&&i.spliceWithArray_(0,0,r),o})}var Os={clear:function(){return this.splice(0)},replace:function(e){var t=this[j];return t.spliceWithArray_(0,t.values_.length,e)},toJSON:function(){return this.slice()},splice:function(e,t){for(var n=arguments.length,i=new Array(n>2?n-2:0),o=2;o<n;o++)i[o-2]=arguments[o];var a=this[j];switch(arguments.length){case 0:return[];case 1:return a.spliceWithArray_(e);case 2:return a.spliceWithArray_(e,t)}return a.spliceWithArray_(e,t,i)},spliceWithArray:function(e,t,n){return this[j].spliceWithArray_(e,t,n)},push:function(){for(var e=this[j],t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];return e.spliceWithArray_(e.values_.length,0,n),e.values_.length},pop:function(){return this.splice(Math.max(this[j].values_.length-1,0),1)[0]},shift:function(){return this.splice(0,1)[0]},unshift:function(){for(var e=this[j],t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];return e.spliceWithArray_(0,0,n),e.values_.length},reverse:function(){return F.trackingDerivation&&tt(37,"reverse"),this.replace(this.slice().reverse()),this},sort:function(){F.trackingDerivation&&tt(37,"sort");var e=this.slice();return e.sort.apply(e,arguments),this.replace(e),this},remove:function(e){var t=this[j],n=t.dehanceValues_(t.values_).indexOf(e);return n>-1?(this.splice(n,1),!0):!1}};at("at",oe);at("concat",oe);at("flat",oe);at("includes",oe);at("indexOf",oe);at("join",oe);at("lastIndexOf",oe);at("slice",oe);at("toString",oe);at("toLocaleString",oe);at("toSorted",oe);at("toSpliced",oe);at("with",oe);at("every",Re);at("filter",Re);at("find",Re);at("findIndex",Re);at("findLast",Re);at("findLastIndex",Re);at("flatMap",Re);at("forEach",Re);at("map",Re);at("some",Re);at("toReversed",Re);at("reduce",h0);at("reduceRight",h0);function at(r,e){typeof Array.prototype[r]=="function"&&(Os[r]=e(r))}function oe(r){return function(){var e=this[j];e.atom_.reportObserved();var t=e.dehanceValues_(e.values_);return t[r].apply(t,arguments)}}function Re(r){return function(e,t){var n=this,i=this[j];i.atom_.reportObserved();var o=i.dehanceValues_(i.values_);return o[r](function(a,s){return e.call(t,a,s,n)})}}function h0(r){return function(){var e=this,t=this[j];t.atom_.reportObserved();var n=t.dehanceValues_(t.values_),i=arguments[0];return arguments[0]=function(o,a,s){return i(o,a,s,e)},n[r].apply(n,arguments)}}var QE=ln("ObservableArrayAdministration",Id);function ou(r){return Qs(r)&&QE(r[j])}var c0,d0,tw={},mr="add",Ps="delete";c0=Symbol.iterator;d0=Symbol.toStringTag;var p0=function(){function r(t,n,i){var o=this;n===void 0&&(n=rn),i===void 0&&(i="ObservableMap"),this.enhancer_=void 0,this.name_=void 0,this[j]=tw,this.data_=void 0,this.hasMap_=void 0,this.keysAtom_=void 0,this.interceptors_=void 0,this.changeListeners_=void 0,this.dehancer=void 0,this.enhancer_=n,this.name_=i,Ae(Map)||tt(18),vi(function(){o.keysAtom_=Bg("ObservableMap.keys()"),o.data_=new Map,o.hasMap_=new Map,t&&o.merge(t)})}var e=r.prototype;return e.has_=function(n){return this.data_.has(n)},e.has=function(n){var i=this;if(!F.trackingDerivation)return this.has_(n);var o=this.hasMap_.get(n);if(!o){var a=o=new qr(this.has_(n),tu,"ObservableMap.key?",!1);this.hasMap_.set(n,a),s0(a,function(){return i.hasMap_.delete(n)})}return o.get()},e.set=function(n,i){var o=this.has_(n);if(ue(this)){var a=le(this,{type:o?He:mr,object:this,newValue:i,name:n});if(!a)return this;i=a.newValue}return o?this.updateValue_(n,i):this.addValue_(n,i),this},e.delete=function(n){var i=this;if(this.keysAtom_,ue(this)){var o=le(this,{type:Ps,object:this,name:n});if(!o)return!1}if(this.has_(n)){var a=Hi(),s=Se(this),u=s||a?{observableKind:"map",debugObjectName:this.name_,type:Ps,object:this,oldValue:this.data_.get(n).value_,name:n}:null;return ir(function(){var l;i.keysAtom_.reportChanged(),(l=i.hasMap_.get(n))==null||l.setNewValue_(!1);var f=i.data_.get(n);f.setNewValue_(void 0),i.data_.delete(n)}),s&&Ee(this,u),!0}return!1},e.updateValue_=function(n,i){var o=this.data_.get(n);if(i=o.prepareNewValue_(i),i!==F.UNCHANGED){var a=Hi(),s=Se(this),u=s||a?{observableKind:"map",debugObjectName:this.name_,type:He,object:this,oldValue:o.value_,name:n,newValue:i}:null;o.setNewValue_(i),s&&Ee(this,u)}},e.addValue_=function(n,i){var o=this;this.keysAtom_,ir(function(){var l,f=new qr(i,o.enhancer_,"ObservableMap.key",!1);o.data_.set(n,f),i=f.value_,(l=o.hasMap_.get(n))==null||l.setNewValue_(!0),o.keysAtom_.reportChanged()});var a=Hi(),s=Se(this),u=s||a?{observableKind:"map",debugObjectName:this.name_,type:mr,object:this,name:n,newValue:i}:null;s&&Ee(this,u)},e.get=function(n){return this.has(n)?this.dehanceValue_(this.data_.get(n).get()):this.dehanceValue_(void 0)},e.dehanceValue_=function(n){return this.dehancer!==void 0?this.dehancer(n):n},e.keys=function(){return this.keysAtom_.reportObserved(),this.data_.keys()},e.values=function(){var n=this,i=this.keys();return oo({next:function(){var a=i.next(),s=a.done,u=a.value;return{done:s,value:s?void 0:n.get(u)}}})},e.entries=function(){var n=this,i=this.keys();return oo({next:function(){var a=i.next(),s=a.done,u=a.value;return{done:s,value:s?void 0:[u,n.get(u)]}}})},e[c0]=function(){return this.entries()},e.forEach=function(n,i){for(var o=jn(this),a;!(a=o()).done;){var s=a.value,u=s[0],l=s[1];n.call(i,l,u,this)}},e.merge=function(n){var i=this;return hn(n)&&(n=new Map(n)),ir(function(){Er(n)?RS(n).forEach(function(o){return i.set(o,n[o])}):Array.isArray(n)?n.forEach(function(o){var a=o[0],s=o[1];return i.set(a,s)}):ci(n)?(n.constructor!==Map&&tt(19,n),n.forEach(function(o,a){return i.set(a,o)})):n!=null&&tt(20,n)}),this},e.clear=function(){var n=this;ir(function(){Kg(function(){for(var i=jn(n.keys()),o;!(o=i()).done;){var a=o.value;n.delete(a)}})})},e.replace=function(n){var i=this;return ir(function(){for(var o=ew(n),a=new Map,s=!1,u=jn(i.data_.keys()),l;!(l=u()).done;){var f=l.value;if(!o.has(f)){var c=i.delete(f);if(c)s=!0;else{var h=i.data_.get(f);a.set(f,h)}}}for(var d=jn(o.entries()),p;!(p=d()).done;){var v=p.value,y=v[0],m=v[1],g=i.data_.has(y);if(i.set(y,m),i.data_.has(y)){var _=i.data_.get(y);a.set(y,_),g||(s=!0)}}if(!s)if(i.data_.size!==a.size)i.keysAtom_.reportChanged();else for(var x=i.data_.keys(),b=a.keys(),T=x.next(),S=b.next();!T.done;){if(T.value!==S.value){i.keysAtom_.reportChanged();break}T=x.next(),S=b.next()}i.data_=a}),this},e.toString=function(){return"[object ObservableMap]"},e.toJSON=function(){return Array.from(this)},e.observe_=function(n,i){return Ro(this,n)},e.intercept_=function(n){return Co(this,n)},wd(r,[{key:"size",get:function(){return this.keysAtom_.reportObserved(),this.data_.size}},{key:d0,get:function(){return"Map"}}]),r}(),hn=ln("ObservableMap",p0);function ew(r){if(ci(r)||hn(r))return r;if(Array.isArray(r))return new Map(r);if(Er(r)){var e=new Map;for(var t in r)e.set(t,r[t]);return e}else return tt(21,r)}var v0,y0,rw={};v0=Symbol.iterator;y0=Symbol.toStringTag;var m0=function(){function r(t,n,i){var o=this;n===void 0&&(n=rn),i===void 0&&(i="ObservableSet"),this.name_=void 0,this[j]=rw,this.data_=new Set,this.atom_=void 0,this.changeListeners_=void 0,this.interceptors_=void 0,this.dehancer=void 0,this.enhancer_=void 0,this.name_=i,Ae(Set)||tt(22),this.enhancer_=function(a,s){return n(a,s,i)},vi(function(){o.atom_=Bg(o.name_),t&&o.replace(t)})}var e=r.prototype;return e.dehanceValue_=function(n){return this.dehancer!==void 0?this.dehancer(n):n},e.clear=function(){var n=this;ir(function(){Kg(function(){for(var i=jn(n.data_.values()),o;!(o=i()).done;){var a=o.value;n.delete(a)}})})},e.forEach=function(n,i){for(var o=jn(this),a;!(a=o()).done;){var s=a.value;n.call(i,s,s,this)}},e.add=function(n){var i=this;if(this.atom_,ue(this)){var o=le(this,{type:mr,object:this,newValue:n});if(!o)return this}if(!this.has(n)){ir(function(){i.data_.add(i.enhancer_(n,void 0)),i.atom_.reportChanged()});var a=!1,s=Se(this),u=s||a?{observableKind:"set",debugObjectName:this.name_,type:mr,object:this,newValue:n}:null;s&&Ee(this,u)}return this},e.delete=function(n){var i=this;if(ue(this)){var o=le(this,{type:Ps,object:this,oldValue:n});if(!o)return!1}if(this.has(n)){var a=!1,s=Se(this),u=s||a?{observableKind:"set",debugObjectName:this.name_,type:Ps,object:this,oldValue:n}:null;return ir(function(){i.atom_.reportChanged(),i.data_.delete(n)}),s&&Ee(this,u),!0}return!1},e.has=function(n){return this.atom_.reportObserved(),this.data_.has(this.dehanceValue_(n))},e.entries=function(){var n=0,i=Array.from(this.keys()),o=Array.from(this.values());return oo({next:function(){var s=n;return n+=1,s<o.length?{value:[i[s],o[s]],done:!1}:{done:!0}}})},e.keys=function(){return this.values()},e.values=function(){this.atom_.reportObserved();var n=this,i=0,o=Array.from(this.data_.values());return oo({next:function(){return i<o.length?{value:n.dehanceValue_(o[i++]),done:!1}:{done:!0}}})},e.replace=function(n){var i=this;return pi(n)&&(n=new Set(n)),ir(function(){Array.isArray(n)?(i.clear(),n.forEach(function(o){return i.add(o)})):wo(n)?(i.clear(),n.forEach(function(o){return i.add(o)})):n!=null&&tt("Cannot initialize set from "+n)}),this},e.observe_=function(n,i){return Ro(this,n)},e.intercept_=function(n){return Co(this,n)},e.toJSON=function(){return Array.from(this)},e.toString=function(){return"[object ObservableSet]"},e[v0]=function(){return this.values()},wd(r,[{key:"size",get:function(){return this.atom_.reportObserved(),this.data_.size}},{key:y0,get:function(){return"Set"}}]),r}(),pi=ln("ObservableSet",m0),cv=Object.create(null),dv="remove",_0=function(){function r(t,n,i,o){n===void 0&&(n=new Map),o===void 0&&(o=oE),this.target_=void 0,this.values_=void 0,this.name_=void 0,this.defaultAnnotation_=void 0,this.keysAtom_=void 0,this.changeListeners_=void 0,this.interceptors_=void 0,this.proxy_=void 0,this.isPlainObject_=void 0,this.appliedAnnotations_=void 0,this.pendingKeys_=void 0,this.target_=t,this.values_=n,this.name_=i,this.defaultAnnotation_=o,this.keysAtom_=new Po("ObservableObject.keys"),this.isPlainObject_=Er(this.target_)}var e=r.prototype;return e.getObservablePropValue_=function(n){return this.values_.get(n).get()},e.setObservablePropValue_=function(n,i){var o=this.values_.get(n);if(o instanceof Jn)return o.set(i),!0;if(ue(this)){var a=le(this,{type:He,object:this.proxy_||this.target_,name:n,newValue:i});if(!a)return null;i=a.newValue}if(i=o.prepareNewValue_(i),i!==F.UNCHANGED){var s=Se(this),u=!1,l=s||u?{type:He,observableKind:"object",debugObjectName:this.name_,object:this.proxy_||this.target_,oldValue:o.value_,name:n,newValue:i}:null;o.setNewValue_(i),s&&Ee(this,l)}return!0},e.get_=function(n){return F.trackingDerivation&&!xr(this.target_,n)&&this.has_(n),this.target_[n]},e.set_=function(n,i,o){return o===void 0&&(o=!1),xr(this.target_,n)?this.values_.has(n)?this.setObservablePropValue_(n,i):o?Reflect.set(this.target_,n,i):(this.target_[n]=i,!0):this.extend_(n,{value:i,enumerable:!0,writable:!0,configurable:!0},this.defaultAnnotation_,o)},e.has_=function(n){if(!F.trackingDerivation)return n in this.target_;this.pendingKeys_||(this.pendingKeys_=new Map);var i=this.pendingKeys_.get(n);return i||(i=new qr(n in this.target_,tu,"ObservableObject.key?",!1),this.pendingKeys_.set(n,i)),i.get()},e.make_=function(n,i){if(i===!0&&(i=this.defaultAnnotation_),i!==!1){if(!(n in this.target_)){var o;if((o=this.target_[kn])!=null&&o[n])return;tt(1,i.annotationType_,this.name_+"."+n.toString())}for(var a=this.target_;a&&a!==Js;){var s=bs(a,n);if(s){var u=i.make_(this,n,s,a);if(u===0)return;if(u===1)break}a=Object.getPrototypeOf(a)}vv(this,i,n)}},e.extend_=function(n,i,o,a){if(a===void 0&&(a=!1),o===!0&&(o=this.defaultAnnotation_),o===!1)return this.defineProperty_(n,i,a);var s=o.extend_(this,n,i,a);return s&&vv(this,o,n),s},e.defineProperty_=function(n,i,o){o===void 0&&(o=!1),this.keysAtom_;try{fe();var a=this.delete_(n);if(!a)return a;if(ue(this)){var s=le(this,{object:this.proxy_||this.target_,name:n,type:mr,newValue:i.value});if(!s)return null;var u=s.newValue;i.value!==u&&(i=Zn({},i,{value:u}))}if(o){if(!Reflect.defineProperty(this.target_,n,i))return!1}else $e(this.target_,n,i);this.notifyPropertyAddition_(n,i.value)}finally{he()}return!0},e.defineObservableProperty_=function(n,i,o,a){a===void 0&&(a=!1),this.keysAtom_;try{fe();var s=this.delete_(n);if(!s)return s;if(ue(this)){var u=le(this,{object:this.proxy_||this.target_,name:n,type:mr,newValue:i});if(!u)return null;i=u.newValue}var l=pv(n),f={configurable:F.safeDescriptors?this.isPlainObject_:!0,enumerable:!0,get:l.get,set:l.set};if(a){if(!Reflect.defineProperty(this.target_,n,f))return!1}else $e(this.target_,n,f);var c=new qr(i,o,"ObservableObject.key",!1);this.values_.set(n,c),this.notifyPropertyAddition_(n,c.value_)}finally{he()}return!0},e.defineComputedProperty_=function(n,i,o){o===void 0&&(o=!1),this.keysAtom_;try{fe();var a=this.delete_(n);if(!a)return a;if(ue(this)){var s=le(this,{object:this.proxy_||this.target_,name:n,type:mr,newValue:void 0});if(!s)return null}i.name||(i.name="ObservableObject.key"),i.context=this.proxy_||this.target_;var u=pv(n),l={configurable:F.safeDescriptors?this.isPlainObject_:!0,enumerable:!1,get:u.get,set:u.set};if(o){if(!Reflect.defineProperty(this.target_,n,l))return!1}else $e(this.target_,n,l);this.values_.set(n,new Jn(i)),this.notifyPropertyAddition_(n,void 0)}finally{he()}return!0},e.delete_=function(n,i){if(i===void 0&&(i=!1),this.keysAtom_,!xr(this.target_,n))return!0;if(ue(this)){var o=le(this,{object:this.proxy_||this.target_,name:n,type:dv});if(!o)return null}try{var a,s;fe();var u=Se(this),l=!1,f=this.values_.get(n),c=void 0;if(!f&&(u||l)){var h;c=(h=bs(this.target_,n))==null?void 0:h.value}if(i){if(!Reflect.deleteProperty(this.target_,n))return!1}else delete this.target_[n];if(f&&(this.values_.delete(n),f instanceof qr&&(c=f.value_),e0(f)),this.keysAtom_.reportChanged(),(a=this.pendingKeys_)==null||(s=a.get(n))==null||s.set(n in this.target_),u||l){var d={type:dv,observableKind:"object",object:this.proxy_||this.target_,debugObjectName:this.name_,oldValue:c,name:n};u&&Ee(this,d)}}finally{he()}return!0},e.observe_=function(n,i){return Ro(this,n)},e.intercept_=function(n){return Co(this,n)},e.notifyPropertyAddition_=function(n,i){var o,a,s=Se(this),u=!1;if(s||u){var l=s||u?{type:mr,observableKind:"object",debugObjectName:this.name_,object:this.proxy_||this.target_,name:n,newValue:i}:null;s&&Ee(this,l)}(o=this.pendingKeys_)==null||(a=o.get(n))==null||a.set(!0),this.keysAtom_.reportChanged()},e.ownKeys_=function(){return this.keysAtom_.reportObserved(),Ed(this.target_)},e.keys_=function(){return this.keysAtom_.reportObserved(),Object.keys(this.target_)},r}();function Io(r,e){var t;if(xr(r,j))return r;var n=(t=e==null?void 0:e.name)!=null?t:"ObservableObject",i=new _0(r,new Map,String(n),yE(e));return Sd(r,j,i),r}var nw=ln("ObservableObjectAdministration",_0);function pv(r){return cv[r]||(cv[r]={get:function(){return this[j].getObservablePropValue_(r)},set:function(t){return this[j].setObservablePropValue_(r,t)}})}function au(r){return Qs(r)?nw(r[j]):!1}function vv(r,e,t){var n;(n=r.target_[kn])==null||delete n[t]}var iw=b0(0),ow=function(){var r=!1,e={};return Object.defineProperty(e,"0",{set:function(){r=!0}}),Object.create(e)[0]=1,r===!1}(),Ku=0,g0=function(){};function aw(r,e){Object.setPrototypeOf?Object.setPrototypeOf(r.prototype,e):r.prototype.__proto__!==void 0?r.prototype.__proto__=e:r.prototype=e}aw(g0,Array.prototype);var Md=function(r,e,t){Lg(n,r);function n(o,a,s,u){var l;return s===void 0&&(s="ObservableArray"),u===void 0&&(u=!1),l=r.call(this)||this,vi(function(){var f=new Id(s,a,u,!0);f.proxy_=Vu(l),Dg(Vu(l),j,f),o&&o.length&&l.spliceWithArray(0,0,o),ow&&Object.defineProperty(Vu(l),"0",iw)}),l}var i=n.prototype;return i.concat=function(){this[j].atom_.reportObserved();for(var a=arguments.length,s=new Array(a),u=0;u<a;u++)s[u]=arguments[u];return Array.prototype.concat.apply(this.slice(),s.map(function(l){return ou(l)?l.slice():l}))},i[t]=function(){var o=this,a=0;return oo({next:function(){return a<o.length?{value:o[a++],done:!1}:{done:!0,value:void 0}}})},wd(n,[{key:"length",get:function(){return this[j].getArrayLength_()},set:function(a){this[j].setArrayLength_(a)}},{key:e,get:function(){return"Array"}}]),n}(g0,Symbol.toStringTag,Symbol.iterator);Object.entries(Os).forEach(function(r){var e=r[0],t=r[1];e!=="concat"&&Sd(Md.prototype,e,t)});function b0(r){return{enumerable:!1,configurable:!0,get:function(){return this[j].get_(r)},set:function(t){this[j].set_(r,t)}}}function sw(r){$e(Md.prototype,""+r,b0(r))}function x0(r){if(r>Ku){for(var e=Ku;e<r+100;e++)sw(e);Ku=r}}x0(1e3);function uw(r,e,t){return new Md(r,e,t)}function ah(r,e){if(typeof r=="object"&&r!==null){if(ou(r))return e!==void 0&&tt(23),r[j].atom_;if(pi(r))return r.atom_;if(hn(r)){if(e===void 0)return r.keysAtom_;var t=r.data_.get(e)||r.hasMap_.get(e);return t||tt(25,e,sh(r)),t}if(au(r)){if(!e)return tt(26);var n=r[j].values_.get(e);return n||tt(27,e,sh(r)),n}if(Od(r)||nu(r)||ws(r))return r}else if(Ae(r)&&ws(r[j]))return r[j];tt(28)}function lw(r,e){if(r||tt(29),Od(r)||nu(r)||ws(r)||hn(r)||pi(r))return r;if(r[j])return r[j];tt(24,r)}function sh(r,e){var t;if(e!==void 0)t=ah(r,e);else{if(iu(r))return r.name;au(r)||hn(r)||pi(r)?t=lw(r):t=ah(r)}return t.name_}function vi(r){var e=fn(),t=Ad(!0);fe();try{return r()}finally{he(),Cd(t),sr(e)}}var yv=Js.toString;function T0(r,e,t){return t===void 0&&(t=-1),uh(r,e,t)}function uh(r,e,t,n,i){if(r===e)return r!==0||1/r===1/e;if(r==null||e==null)return!1;if(r!==r)return e!==e;var o=typeof r;if(o!=="function"&&o!=="object"&&typeof e!="object")return!1;var a=yv.call(r);if(a!==yv.call(e))return!1;switch(a){case"[object RegExp]":case"[object String]":return""+r==""+e;case"[object Number]":return+r!=+r?+e!=+e:+r==0?1/+r===1/e:+r==+e;case"[object Date]":case"[object Boolean]":return+r==+e;case"[object Symbol]":return typeof Symbol<"u"&&Symbol.valueOf.call(r)===Symbol.valueOf.call(e);case"[object Map]":case"[object Set]":t>=0&&t++;break}r=mv(r),e=mv(e);var s=a==="[object Array]";if(!s){if(typeof r!="object"||typeof e!="object")return!1;var u=r.constructor,l=e.constructor;if(u!==l&&!(Ae(u)&&u instanceof u&&Ae(l)&&l instanceof l)&&"constructor"in r&&"constructor"in e)return!1}if(t===0)return!1;t<0&&(t=-1),n=n||[],i=i||[];for(var f=n.length;f--;)if(n[f]===r)return i[f]===e;if(n.push(r),i.push(e),s){if(f=r.length,f!==e.length)return!1;for(;f--;)if(!uh(r[f],e[f],t-1,n,i))return!1}else{var c=Object.keys(r),h;if(f=c.length,Object.keys(e).length!==f)return!1;for(;f--;)if(h=c[f],!(xr(e,h)&&uh(r[h],e[h],t-1,n,i)))return!1}return n.pop(),i.pop(),!0}function mv(r){return ou(r)?r.slice():ci(r)||hn(r)||wo(r)||pi(r)?Array.from(r.entries()):r}function oo(r){return r[Symbol.iterator]=fw,r}function fw(){return this}["Symbol","Map","Set"].forEach(function(r){var e=Pg();typeof e[r]>"u"&&tt("MobX requires global '"+r+"' to be available or polyfilled")});typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__=="object"&&__MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({spy:ME,extras:{getDebugName:sh},$mobx:j});function hw(r){var e=this.constructor;return this.then(function(t){return e.resolve(r()).then(function(){return t})},function(t){return e.resolve(r()).then(function(){return e.reject(t)})})}function cw(r){var e=this;return new e(function(t,n){if(!(r&&typeof r.length<"u"))return n(new TypeError(typeof r+" "+r+" is not iterable(cannot read property Symbol(Symbol.iterator))"));var i=Array.prototype.slice.call(r);if(i.length===0)return t([]);var o=i.length;function a(u,l){if(l&&(typeof l=="object"||typeof l=="function")){var f=l.then;if(typeof f=="function"){f.call(l,function(c){a(u,c)},function(c){i[u]={status:"rejected",reason:c},--o===0&&t(i)});return}}i[u]={status:"fulfilled",value:l},--o===0&&t(i)}for(var s=0;s<i.length;s++)a(s,i[s])})}function S0(r,e){this.name="AggregateError",this.errors=r,this.message=e||""}S0.prototype=Error.prototype;function dw(r){var e=this;return new e(function(t,n){if(!(r&&typeof r.length<"u"))return n(new TypeError("Promise.any accepts an array"));var i=Array.prototype.slice.call(r);if(i.length===0)return n();for(var o=[],a=0;a<i.length;a++)try{e.resolve(i[a]).then(t).catch(function(s){o.push(s),o.length===i.length&&n(new S0(o,"All promises were rejected"))})}catch(s){n(s)}})}var pw=setTimeout;function E0(r){return!!(r&&typeof r.length<"u")}function vw(){}function yw(r,e){return function(){r.apply(e,arguments)}}function mt(r){if(!(this instanceof mt))throw new TypeError("Promises must be constructed via new");if(typeof r!="function")throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],O0(r,this)}function w0(r,e){for(;r._state===3;)r=r._value;if(r._state===0){r._deferreds.push(e);return}r._handled=!0,mt._immediateFn(function(){var t=r._state===1?e.onFulfilled:e.onRejected;if(t===null){(r._state===1?lh:ao)(e.promise,r._value);return}var n;try{n=t(r._value)}catch(i){ao(e.promise,i);return}lh(e.promise,n)})}function lh(r,e){try{if(e===r)throw new TypeError("A promise cannot be resolved with itself.");if(e&&(typeof e=="object"||typeof e=="function")){var t=e.then;if(e instanceof mt){r._state=3,r._value=e,fh(r);return}else if(typeof t=="function"){O0(yw(t,e),r);return}}r._state=1,r._value=e,fh(r)}catch(n){ao(r,n)}}function ao(r,e){r._state=2,r._value=e,fh(r)}function fh(r){r._state===2&&r._deferreds.length===0&&mt._immediateFn(function(){r._handled||mt._unhandledRejectionFn(r._value)});for(var e=0,t=r._deferreds.length;e<t;e++)w0(r,r._deferreds[e]);r._deferreds=null}function mw(r,e,t){this.onFulfilled=typeof r=="function"?r:null,this.onRejected=typeof e=="function"?e:null,this.promise=t}function O0(r,e){var t=!1;try{r(function(n){t||(t=!0,lh(e,n))},function(n){t||(t=!0,ao(e,n))})}catch(n){if(t)return;t=!0,ao(e,n)}}mt.prototype.catch=function(r){return this.then(null,r)};mt.prototype.then=function(r,e){var t=new this.constructor(vw);return w0(this,new mw(r,e,t)),t};mt.prototype.finally=hw;mt.all=function(r){return new mt(function(e,t){if(!E0(r))return t(new TypeError("Promise.all accepts an array"));var n=Array.prototype.slice.call(r);if(n.length===0)return e([]);var i=n.length;function o(s,u){try{if(u&&(typeof u=="object"||typeof u=="function")){var l=u.then;if(typeof l=="function"){l.call(u,function(f){o(s,f)},t);return}}n[s]=u,--i===0&&e(n)}catch(f){t(f)}}for(var a=0;a<n.length;a++)o(a,n[a])})};mt.any=dw;mt.allSettled=cw;mt.resolve=function(r){return r&&typeof r=="object"&&r.constructor===mt?r:new mt(function(e){e(r)})};mt.reject=function(r){return new mt(function(e,t){t(r)})};mt.race=function(r){return new mt(function(e,t){if(!E0(r))return t(new TypeError("Promise.race accepts an array"));for(var n=0,i=r.length;n<i;n++)mt.resolve(r[n]).then(e,t)})};mt._immediateFn=typeof setImmediate=="function"&&function(r){setImmediate(r)}||function(r){pw(r,0)};mt._unhandledRejectionFn=function(e){typeof console<"u"&&console&&console.warn("Possible Unhandled Promise Rejection:",e)};var Vn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Dd(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}function _w(r){if(r.__esModule)return r;var e=r.default;if(typeof e=="function"){var t=function n(){return this instanceof n?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(r).forEach(function(n){var i=Object.getOwnPropertyDescriptor(r,n);Object.defineProperty(t,n,i.get?i:{enumerable:!0,get:function(){return r[n]}})}),t}/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var _v=Object.getOwnPropertySymbols,gw=Object.prototype.hasOwnProperty,bw=Object.prototype.propertyIsEnumerable;function xw(r){if(r==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(r)}function Tw(){try{if(!Object.assign)return!1;var r=new String("abc");if(r[5]="de",Object.getOwnPropertyNames(r)[0]==="5")return!1;for(var e={},t=0;t<10;t++)e["_"+String.fromCharCode(t)]=t;var n=Object.getOwnPropertyNames(e).map(function(o){return e[o]});if(n.join("")!=="0123456789")return!1;var i={};return"abcdefghijklmnopqrst".split("").forEach(function(o){i[o]=o}),Object.keys(Object.assign({},i)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}var Sw=Tw()?Object.assign:function(r,e){for(var t,n=xw(r),i,o=1;o<arguments.length;o++){t=Object(arguments[o]);for(var a in t)gw.call(t,a)&&(n[a]=t[a]);if(_v){i=_v(t);for(var s=0;s<i.length;s++)bw.call(t,i[s])&&(n[i[s]]=t[i[s]])}}return n};const Ew=Dd(Sw);/*!
 * @pixi/polyfill - v6.5.10
 * Compiled Thu, 06 Jul 2023 15:25:11 UTC
 *
 * @pixi/polyfill is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */typeof globalThis>"u"&&(typeof self<"u"?self.globalThis=self:typeof global<"u"&&(global.globalThis=global));globalThis.Promise||(globalThis.Promise=mt);Object.assign||(Object.assign=Ew);var ww=16;Date.now&&Date.prototype.getTime||(Date.now=function(){return new Date().getTime()});if(!(globalThis.performance&&globalThis.performance.now)){var Ow=Date.now();globalThis.performance||(globalThis.performance={}),globalThis.performance.now=function(){return Date.now()-Ow}}var Zu=Date.now(),gv=["ms","moz","webkit","o"];for(var Ju=0;Ju<gv.length&&!globalThis.requestAnimationFrame;++Ju){var Qu=gv[Ju];globalThis.requestAnimationFrame=globalThis[Qu+"RequestAnimationFrame"],globalThis.cancelAnimationFrame=globalThis[Qu+"CancelAnimationFrame"]||globalThis[Qu+"CancelRequestAnimationFrame"]}globalThis.requestAnimationFrame||(globalThis.requestAnimationFrame=function(r){if(typeof r!="function")throw new TypeError(r+"is not a function");var e=Date.now(),t=ww+Zu-e;return t<0&&(t=0),Zu=e,globalThis.self.setTimeout(function(){Zu=Date.now(),r(performance.now())},t)});globalThis.cancelAnimationFrame||(globalThis.cancelAnimationFrame=function(r){return clearTimeout(r)});Math.sign||(Math.sign=function(e){return e=Number(e),e===0||isNaN(e)?e:e>0?1:-1});Number.isInteger||(Number.isInteger=function(e){return typeof e=="number"&&isFinite(e)&&Math.floor(e)===e});globalThis.ArrayBuffer||(globalThis.ArrayBuffer=Array);globalThis.Float32Array||(globalThis.Float32Array=Array);globalThis.Uint32Array||(globalThis.Uint32Array=Array);globalThis.Uint16Array||(globalThis.Uint16Array=Array);globalThis.Uint8Array||(globalThis.Uint8Array=Array);globalThis.Int32Array||(globalThis.Int32Array=Array);/*!
 * @pixi/constants - v6.5.10
 * Compiled Thu, 06 Jul 2023 15:25:11 UTC
 *
 * @pixi/constants is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */var Ce;(function(r){r[r.WEBGL_LEGACY=0]="WEBGL_LEGACY",r[r.WEBGL=1]="WEBGL",r[r.WEBGL2=2]="WEBGL2"})(Ce||(Ce={}));var ti;(function(r){r[r.UNKNOWN=0]="UNKNOWN",r[r.WEBGL=1]="WEBGL",r[r.CANVAS=2]="CANVAS"})(ti||(ti={}));var so;(function(r){r[r.COLOR=16384]="COLOR",r[r.DEPTH=256]="DEPTH",r[r.STENCIL=1024]="STENCIL"})(so||(so={}));var B;(function(r){r[r.NORMAL=0]="NORMAL",r[r.ADD=1]="ADD",r[r.MULTIPLY=2]="MULTIPLY",r[r.SCREEN=3]="SCREEN",r[r.OVERLAY=4]="OVERLAY",r[r.DARKEN=5]="DARKEN",r[r.LIGHTEN=6]="LIGHTEN",r[r.COLOR_DODGE=7]="COLOR_DODGE",r[r.COLOR_BURN=8]="COLOR_BURN",r[r.HARD_LIGHT=9]="HARD_LIGHT",r[r.SOFT_LIGHT=10]="SOFT_LIGHT",r[r.DIFFERENCE=11]="DIFFERENCE",r[r.EXCLUSION=12]="EXCLUSION",r[r.HUE=13]="HUE",r[r.SATURATION=14]="SATURATION",r[r.COLOR=15]="COLOR",r[r.LUMINOSITY=16]="LUMINOSITY",r[r.NORMAL_NPM=17]="NORMAL_NPM",r[r.ADD_NPM=18]="ADD_NPM",r[r.SCREEN_NPM=19]="SCREEN_NPM",r[r.NONE=20]="NONE",r[r.SRC_OVER=0]="SRC_OVER",r[r.SRC_IN=21]="SRC_IN",r[r.SRC_OUT=22]="SRC_OUT",r[r.SRC_ATOP=23]="SRC_ATOP",r[r.DST_OVER=24]="DST_OVER",r[r.DST_IN=25]="DST_IN",r[r.DST_OUT=26]="DST_OUT",r[r.DST_ATOP=27]="DST_ATOP",r[r.ERASE=26]="ERASE",r[r.SUBTRACT=28]="SUBTRACT",r[r.XOR=29]="XOR"})(B||(B={}));var ce;(function(r){r[r.POINTS=0]="POINTS",r[r.LINES=1]="LINES",r[r.LINE_LOOP=2]="LINE_LOOP",r[r.LINE_STRIP=3]="LINE_STRIP",r[r.TRIANGLES=4]="TRIANGLES",r[r.TRIANGLE_STRIP=5]="TRIANGLE_STRIP",r[r.TRIANGLE_FAN=6]="TRIANGLE_FAN"})(ce||(ce={}));var P;(function(r){r[r.RGBA=6408]="RGBA",r[r.RGB=6407]="RGB",r[r.RG=33319]="RG",r[r.RED=6403]="RED",r[r.RGBA_INTEGER=36249]="RGBA_INTEGER",r[r.RGB_INTEGER=36248]="RGB_INTEGER",r[r.RG_INTEGER=33320]="RG_INTEGER",r[r.RED_INTEGER=36244]="RED_INTEGER",r[r.ALPHA=6406]="ALPHA",r[r.LUMINANCE=6409]="LUMINANCE",r[r.LUMINANCE_ALPHA=6410]="LUMINANCE_ALPHA",r[r.DEPTH_COMPONENT=6402]="DEPTH_COMPONENT",r[r.DEPTH_STENCIL=34041]="DEPTH_STENCIL"})(P||(P={}));var Tr;(function(r){r[r.TEXTURE_2D=3553]="TEXTURE_2D",r[r.TEXTURE_CUBE_MAP=34067]="TEXTURE_CUBE_MAP",r[r.TEXTURE_2D_ARRAY=35866]="TEXTURE_2D_ARRAY",r[r.TEXTURE_CUBE_MAP_POSITIVE_X=34069]="TEXTURE_CUBE_MAP_POSITIVE_X",r[r.TEXTURE_CUBE_MAP_NEGATIVE_X=34070]="TEXTURE_CUBE_MAP_NEGATIVE_X",r[r.TEXTURE_CUBE_MAP_POSITIVE_Y=34071]="TEXTURE_CUBE_MAP_POSITIVE_Y",r[r.TEXTURE_CUBE_MAP_NEGATIVE_Y=34072]="TEXTURE_CUBE_MAP_NEGATIVE_Y",r[r.TEXTURE_CUBE_MAP_POSITIVE_Z=34073]="TEXTURE_CUBE_MAP_POSITIVE_Z",r[r.TEXTURE_CUBE_MAP_NEGATIVE_Z=34074]="TEXTURE_CUBE_MAP_NEGATIVE_Z"})(Tr||(Tr={}));var U;(function(r){r[r.UNSIGNED_BYTE=5121]="UNSIGNED_BYTE",r[r.UNSIGNED_SHORT=5123]="UNSIGNED_SHORT",r[r.UNSIGNED_SHORT_5_6_5=33635]="UNSIGNED_SHORT_5_6_5",r[r.UNSIGNED_SHORT_4_4_4_4=32819]="UNSIGNED_SHORT_4_4_4_4",r[r.UNSIGNED_SHORT_5_5_5_1=32820]="UNSIGNED_SHORT_5_5_5_1",r[r.UNSIGNED_INT=5125]="UNSIGNED_INT",r[r.UNSIGNED_INT_10F_11F_11F_REV=35899]="UNSIGNED_INT_10F_11F_11F_REV",r[r.UNSIGNED_INT_2_10_10_10_REV=33640]="UNSIGNED_INT_2_10_10_10_REV",r[r.UNSIGNED_INT_24_8=34042]="UNSIGNED_INT_24_8",r[r.UNSIGNED_INT_5_9_9_9_REV=35902]="UNSIGNED_INT_5_9_9_9_REV",r[r.BYTE=5120]="BYTE",r[r.SHORT=5122]="SHORT",r[r.INT=5124]="INT",r[r.FLOAT=5126]="FLOAT",r[r.FLOAT_32_UNSIGNED_INT_24_8_REV=36269]="FLOAT_32_UNSIGNED_INT_24_8_REV",r[r.HALF_FLOAT=36193]="HALF_FLOAT"})(U||(U={}));var uo;(function(r){r[r.FLOAT=0]="FLOAT",r[r.INT=1]="INT",r[r.UINT=2]="UINT"})(uo||(uo={}));var Ht;(function(r){r[r.NEAREST=0]="NEAREST",r[r.LINEAR=1]="LINEAR"})(Ht||(Ht={}));var we;(function(r){r[r.CLAMP=33071]="CLAMP",r[r.REPEAT=10497]="REPEAT",r[r.MIRRORED_REPEAT=33648]="MIRRORED_REPEAT"})(we||(we={}));var te;(function(r){r[r.OFF=0]="OFF",r[r.POW2=1]="POW2",r[r.ON=2]="ON",r[r.ON_MANUAL=3]="ON_MANUAL"})(te||(te={}));var pe;(function(r){r[r.NPM=0]="NPM",r[r.UNPACK=1]="UNPACK",r[r.PMA=2]="PMA",r[r.NO_PREMULTIPLIED_ALPHA=0]="NO_PREMULTIPLIED_ALPHA",r[r.PREMULTIPLY_ON_UPLOAD=1]="PREMULTIPLY_ON_UPLOAD",r[r.PREMULTIPLY_ALPHA=2]="PREMULTIPLY_ALPHA",r[r.PREMULTIPLIED_ALPHA=2]="PREMULTIPLIED_ALPHA"})(pe||(pe={}));var se;(function(r){r[r.NO=0]="NO",r[r.YES=1]="YES",r[r.AUTO=2]="AUTO",r[r.BLEND=0]="BLEND",r[r.CLEAR=1]="CLEAR",r[r.BLIT=2]="BLIT"})(se||(se={}));var lo;(function(r){r[r.AUTO=0]="AUTO",r[r.MANUAL=1]="MANUAL"})(lo||(lo={}));var Xt;(function(r){r.LOW="lowp",r.MEDIUM="mediump",r.HIGH="highp"})(Xt||(Xt={}));var St;(function(r){r[r.NONE=0]="NONE",r[r.SCISSOR=1]="SCISSOR",r[r.STENCIL=2]="STENCIL",r[r.SPRITE=3]="SPRITE",r[r.COLOR=4]="COLOR"})(St||(St={}));var hh;(function(r){r[r.RED=1]="RED",r[r.GREEN=2]="GREEN",r[r.BLUE=4]="BLUE",r[r.ALPHA=8]="ALPHA"})(hh||(hh={}));var lt;(function(r){r[r.NONE=0]="NONE",r[r.LOW=2]="LOW",r[r.MEDIUM=4]="MEDIUM",r[r.HIGH=8]="HIGH"})(lt||(lt={}));var Oe;(function(r){r[r.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER",r[r.ARRAY_BUFFER=34962]="ARRAY_BUFFER",r[r.UNIFORM_BUFFER=35345]="UNIFORM_BUFFER"})(Oe||(Oe={}));/*!
 * @pixi/settings - v6.5.10
 * Compiled Thu, 06 Jul 2023 15:25:11 UTC
 *
 * @pixi/settings is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */var P0={createCanvas:function(r,e){var t=document.createElement("canvas");return t.width=r,t.height=e,t},getWebGLRenderingContext:function(){return WebGLRenderingContext},getNavigator:function(){return navigator},getBaseUrl:function(){var r;return(r=document.baseURI)!==null&&r!==void 0?r:window.location.href},fetch:function(r,e){return fetch(r,e)}},tl=/iPhone/i,bv=/iPod/i,xv=/iPad/i,Tv=/\biOS-universal(?:.+)Mac\b/i,el=/\bAndroid(?:.+)Mobile\b/i,Sv=/Android/i,En=/(?:SD4930UR|\bSilk(?:.+)Mobile\b)/i,ta=/Silk/i,Je=/Windows Phone/i,Ev=/\bWindows(?:.+)ARM\b/i,wv=/BlackBerry/i,Ov=/BB10/i,Pv=/Opera Mini/i,Av=/\b(CriOS|Chrome)(?:.+)Mobile/i,Cv=/Mobile(?:.+)Firefox\b/i,Rv=function(r){return typeof r<"u"&&r.platform==="MacIntel"&&typeof r.maxTouchPoints=="number"&&r.maxTouchPoints>1&&typeof MSStream>"u"};function Pw(r){return function(e){return e.test(r)}}function Aw(r){var e={userAgent:"",platform:"",maxTouchPoints:0};!r&&typeof navigator<"u"?e={userAgent:navigator.userAgent,platform:navigator.platform,maxTouchPoints:navigator.maxTouchPoints||0}:typeof r=="string"?e.userAgent=r:r&&r.userAgent&&(e={userAgent:r.userAgent,platform:r.platform,maxTouchPoints:r.maxTouchPoints||0});var t=e.userAgent,n=t.split("[FBAN");typeof n[1]<"u"&&(t=n[0]),n=t.split("Twitter"),typeof n[1]<"u"&&(t=n[0]);var i=Pw(t),o={apple:{phone:i(tl)&&!i(Je),ipod:i(bv),tablet:!i(tl)&&(i(xv)||Rv(e))&&!i(Je),universal:i(Tv),device:(i(tl)||i(bv)||i(xv)||i(Tv)||Rv(e))&&!i(Je)},amazon:{phone:i(En),tablet:!i(En)&&i(ta),device:i(En)||i(ta)},android:{phone:!i(Je)&&i(En)||!i(Je)&&i(el),tablet:!i(Je)&&!i(En)&&!i(el)&&(i(ta)||i(Sv)),device:!i(Je)&&(i(En)||i(ta)||i(el)||i(Sv))||i(/\bokhttp\b/i)},windows:{phone:i(Je),tablet:i(Ev),device:i(Je)||i(Ev)},other:{blackberry:i(wv),blackberry10:i(Ov),opera:i(Pv),firefox:i(Cv),chrome:i(Av),device:i(wv)||i(Ov)||i(Pv)||i(Cv)||i(Av)},any:!1,phone:!1,tablet:!1};return o.any=o.apple.device||o.android.device||o.windows.device||o.other.device,o.phone=o.apple.phone||o.android.phone||o.windows.phone,o.tablet=o.apple.tablet||o.android.tablet||o.windows.tablet,o}var de=Aw(globalThis.navigator);function Cw(){return!de.apple.device}function Rw(r){var e=!0;if(de.tablet||de.phone){if(de.apple.device){var t=navigator.userAgent.match(/OS (\d+)_(\d+)?/);if(t){var n=parseInt(t[1],10);n<11&&(e=!1)}}if(de.android.device){var t=navigator.userAgent.match(/Android\s([0-9.]*)/);if(t){var n=parseInt(t[1],10);n<7&&(e=!1)}}}return e?r:4}var C={ADAPTER:P0,MIPMAP_TEXTURES:te.POW2,ANISOTROPIC_LEVEL:0,RESOLUTION:1,FILTER_RESOLUTION:1,FILTER_MULTISAMPLE:lt.NONE,SPRITE_MAX_TEXTURES:Rw(32),SPRITE_BATCH_SIZE:4096,RENDER_OPTIONS:{view:null,width:800,height:600,autoDensity:!1,backgroundColor:0,backgroundAlpha:1,useContextAlpha:!0,clearBeforeRender:!0,antialias:!1,preserveDrawingBuffer:!1},GC_MODE:lo.AUTO,GC_MAX_IDLE:60*60,GC_MAX_CHECK_COUNT:60*10,WRAP_MODE:we.CLAMP,SCALE_MODE:Ht.LINEAR,PRECISION_VERTEX:Xt.HIGH,PRECISION_FRAGMENT:de.apple.device?Xt.HIGH:Xt.MEDIUM,CAN_UPLOAD_SAME_BUFFER:Cw(),CREATE_IMAGE_BITMAP:!1,ROUND_PIXELS:!1},A0={exports:{}};(function(r){var e=Object.prototype.hasOwnProperty,t="~";function n(){}Object.create&&(n.prototype=Object.create(null),new n().__proto__||(t=!1));function i(u,l,f){this.fn=u,this.context=l,this.once=f||!1}function o(u,l,f,c,h){if(typeof f!="function")throw new TypeError("The listener must be a function");var d=new i(f,c||u,h),p=t?t+l:l;return u._events[p]?u._events[p].fn?u._events[p]=[u._events[p],d]:u._events[p].push(d):(u._events[p]=d,u._eventsCount++),u}function a(u,l){--u._eventsCount===0?u._events=new n:delete u._events[l]}function s(){this._events=new n,this._eventsCount=0}s.prototype.eventNames=function(){var l=[],f,c;if(this._eventsCount===0)return l;for(c in f=this._events)e.call(f,c)&&l.push(t?c.slice(1):c);return Object.getOwnPropertySymbols?l.concat(Object.getOwnPropertySymbols(f)):l},s.prototype.listeners=function(l){var f=t?t+l:l,c=this._events[f];if(!c)return[];if(c.fn)return[c.fn];for(var h=0,d=c.length,p=new Array(d);h<d;h++)p[h]=c[h].fn;return p},s.prototype.listenerCount=function(l){var f=t?t+l:l,c=this._events[f];return c?c.fn?1:c.length:0},s.prototype.emit=function(l,f,c,h,d,p){var v=t?t+l:l;if(!this._events[v])return!1;var y=this._events[v],m=arguments.length,g,_;if(y.fn){switch(y.once&&this.removeListener(l,y.fn,void 0,!0),m){case 1:return y.fn.call(y.context),!0;case 2:return y.fn.call(y.context,f),!0;case 3:return y.fn.call(y.context,f,c),!0;case 4:return y.fn.call(y.context,f,c,h),!0;case 5:return y.fn.call(y.context,f,c,h,d),!0;case 6:return y.fn.call(y.context,f,c,h,d,p),!0}for(_=1,g=new Array(m-1);_<m;_++)g[_-1]=arguments[_];y.fn.apply(y.context,g)}else{var x=y.length,b;for(_=0;_<x;_++)switch(y[_].once&&this.removeListener(l,y[_].fn,void 0,!0),m){case 1:y[_].fn.call(y[_].context);break;case 2:y[_].fn.call(y[_].context,f);break;case 3:y[_].fn.call(y[_].context,f,c);break;case 4:y[_].fn.call(y[_].context,f,c,h);break;default:if(!g)for(b=1,g=new Array(m-1);b<m;b++)g[b-1]=arguments[b];y[_].fn.apply(y[_].context,g)}}return!0},s.prototype.on=function(l,f,c){return o(this,l,f,c,!1)},s.prototype.once=function(l,f,c){return o(this,l,f,c,!0)},s.prototype.removeListener=function(l,f,c,h){var d=t?t+l:l;if(!this._events[d])return this;if(!f)return a(this,d),this;var p=this._events[d];if(p.fn)p.fn===f&&(!h||p.once)&&(!c||p.context===c)&&a(this,d);else{for(var v=0,y=[],m=p.length;v<m;v++)(p[v].fn!==f||h&&!p[v].once||c&&p[v].context!==c)&&y.push(p[v]);y.length?this._events[d]=y.length===1?y[0]:y:a(this,d)}return this},s.prototype.removeAllListeners=function(l){var f;return l?(f=t?t+l:l,this._events[f]&&a(this,f)):(this._events=new n,this._eventsCount=0),this},s.prototype.off=s.prototype.removeListener,s.prototype.addListener=s.prototype.on,s.prefixed=t,s.EventEmitter=s,r.exports=s})(A0);var Iw=A0.exports;const cn=Dd(Iw);var Fd={exports:{}};Fd.exports=su;Fd.exports.default=su;function su(r,e,t){t=t||2;var n=e&&e.length,i=n?e[0]*t:r.length,o=C0(r,0,i,t,!0),a=[];if(!o||o.next===o.prev)return a;var s,u,l,f,c,h,d;if(n&&(o=Lw(r,e,o,t)),r.length>80*t){s=l=r[0],u=f=r[1];for(var p=t;p<i;p+=t)c=r[p],h=r[p+1],c<s&&(s=c),h<u&&(u=h),c>l&&(l=c),h>f&&(f=h);d=Math.max(l-s,f-u),d=d!==0?32767/d:0}return fo(o,a,t,s,u,d,0),a}function C0(r,e,t,n,i){var o,a;if(i===ph(r,e,t,n)>0)for(o=e;o<t;o+=n)a=Iv(o,r[o],r[o+1],a);else for(o=t-n;o>=e;o-=n)a=Iv(o,r[o],r[o+1],a);return a&&uu(a,a.next)&&(co(a),a=a.next),a}function on(r,e){if(!r)return r;e||(e=r);var t=r,n;do if(n=!1,!t.steiner&&(uu(t,t.next)||vt(t.prev,t,t.next)===0)){if(co(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function fo(r,e,t,n,i,o,a){if(r){!a&&o&&kw(r,n,i,o);for(var s=r,u,l;r.prev!==r.next;){if(u=r.prev,l=r.next,o?Dw(r,n,i,o):Mw(r)){e.push(u.i/t|0),e.push(r.i/t|0),e.push(l.i/t|0),co(r),r=l.next,s=l.next;continue}if(r=l,r===s){a?a===1?(r=Fw(on(r),e,t),fo(r,e,t,n,i,o,2)):a===2&&Nw(r,e,t,n,i,o):fo(on(r),e,t,n,i,o,1);break}}}}function Mw(r){var e=r.prev,t=r,n=r.next;if(vt(e,t,n)>=0)return!1;for(var i=e.x,o=t.x,a=n.x,s=e.y,u=t.y,l=n.y,f=i<o?i<a?i:a:o<a?o:a,c=s<u?s<l?s:l:u<l?u:l,h=i>o?i>a?i:a:o>a?o:a,d=s>u?s>l?s:l:u>l?u:l,p=n.next;p!==e;){if(p.x>=f&&p.x<=h&&p.y>=c&&p.y<=d&&$n(i,s,o,u,a,l,p.x,p.y)&&vt(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function Dw(r,e,t,n){var i=r.prev,o=r,a=r.next;if(vt(i,o,a)>=0)return!1;for(var s=i.x,u=o.x,l=a.x,f=i.y,c=o.y,h=a.y,d=s<u?s<l?s:l:u<l?u:l,p=f<c?f<h?f:h:c<h?c:h,v=s>u?s>l?s:l:u>l?u:l,y=f>c?f>h?f:h:c>h?c:h,m=ch(d,p,e,t,n),g=ch(v,y,e,t,n),_=r.prevZ,x=r.nextZ;_&&_.z>=m&&x&&x.z<=g;){if(_.x>=d&&_.x<=v&&_.y>=p&&_.y<=y&&_!==i&&_!==a&&$n(s,f,u,c,l,h,_.x,_.y)&&vt(_.prev,_,_.next)>=0||(_=_.prevZ,x.x>=d&&x.x<=v&&x.y>=p&&x.y<=y&&x!==i&&x!==a&&$n(s,f,u,c,l,h,x.x,x.y)&&vt(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;_&&_.z>=m;){if(_.x>=d&&_.x<=v&&_.y>=p&&_.y<=y&&_!==i&&_!==a&&$n(s,f,u,c,l,h,_.x,_.y)&&vt(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;x&&x.z<=g;){if(x.x>=d&&x.x<=v&&x.y>=p&&x.y<=y&&x!==i&&x!==a&&$n(s,f,u,c,l,h,x.x,x.y)&&vt(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function Fw(r,e,t){var n=r;do{var i=n.prev,o=n.next.next;!uu(i,o)&&R0(i,n,n.next,o)&&ho(i,o)&&ho(o,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(o.i/t|0),co(n),co(n.next),n=r=o),n=n.next}while(n!==r);return on(n)}function Nw(r,e,t,n,i,o){var a=r;do{for(var s=a.next.next;s!==a.prev;){if(a.i!==s.i&&Hw(a,s)){var u=I0(a,s);a=on(a,a.next),u=on(u,u.next),fo(a,e,t,n,i,o,0),fo(u,e,t,n,i,o,0);return}s=s.next}a=a.next}while(a!==r)}function Lw(r,e,t,n){var i=[],o,a,s,u,l;for(o=0,a=e.length;o<a;o++)s=e[o]*n,u=o<a-1?e[o+1]*n:r.length,l=C0(r,s,u,n,!1),l===l.next&&(l.steiner=!0),i.push(zw(l));for(i.sort(Bw),o=0;o<i.length;o++)t=Uw(i[o],t);return t}function Bw(r,e){return r.x-e.x}function Uw(r,e){var t=Gw(r,e);if(!t)return e;var n=I0(t,r);return on(n,n.next),on(t,t.next)}function Gw(r,e){var t=e,n=r.x,i=r.y,o=-1/0,a;do{if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){var s=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(s<=n&&s>o&&(o=s,a=t.x<t.next.x?t:t.next,s===n))return a}t=t.next}while(t!==e);if(!a)return null;var u=a,l=a.x,f=a.y,c=1/0,h;t=a;do n>=t.x&&t.x>=l&&n!==t.x&&$n(i<f?n:o,i,l,f,i<f?o:n,i,t.x,t.y)&&(h=Math.abs(i-t.y)/(n-t.x),ho(t,r)&&(h<c||h===c&&(t.x>a.x||t.x===a.x&&jw(a,t)))&&(a=t,c=h)),t=t.next;while(t!==u);return a}function jw(r,e){return vt(r.prev,r,e.prev)<0&&vt(e.next,r,r.next)<0}function kw(r,e,t,n){var i=r;do i.z===0&&(i.z=ch(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,$w(i)}function $w(r){var e,t,n,i,o,a,s,u,l=1;do{for(t=r,r=null,o=null,a=0;t;){for(a++,n=t,s=0,e=0;e<l&&(s++,n=n.nextZ,!!n);e++);for(u=l;s>0||u>0&&n;)s!==0&&(u===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,s--):(i=n,n=n.nextZ,u--),o?o.nextZ=i:r=i,i.prevZ=o,o=i;t=n}o.nextZ=null,l*=2}while(a>1);return r}function ch(r,e,t,n,i){return r=(r-t)*i|0,e=(e-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,r|e<<1}function zw(r){var e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function $n(r,e,t,n,i,o,a,s){return(i-a)*(e-s)>=(r-a)*(o-s)&&(r-a)*(n-s)>=(t-a)*(e-s)&&(t-a)*(o-s)>=(i-a)*(n-s)}function Hw(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!Xw(r,e)&&(ho(r,e)&&ho(e,r)&&Vw(r,e)&&(vt(r.prev,r,e.prev)||vt(r,e.prev,e))||uu(r,e)&&vt(r.prev,r,r.next)>0&&vt(e.prev,e,e.next)>0)}function vt(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function uu(r,e){return r.x===e.x&&r.y===e.y}function R0(r,e,t,n){var i=ra(vt(r,e,t)),o=ra(vt(r,e,n)),a=ra(vt(t,n,r)),s=ra(vt(t,n,e));return!!(i!==o&&a!==s||i===0&&ea(r,t,e)||o===0&&ea(r,n,e)||a===0&&ea(t,r,n)||s===0&&ea(t,e,n))}function ea(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function ra(r){return r>0?1:r<0?-1:0}function Xw(r,e){var t=r;do{if(t.i!==r.i&&t.next.i!==r.i&&t.i!==e.i&&t.next.i!==e.i&&R0(t,t.next,r,e))return!0;t=t.next}while(t!==r);return!1}function ho(r,e){return vt(r.prev,r,r.next)<0?vt(r,e,r.next)>=0&&vt(r,r.prev,e)>=0:vt(r,e,r.prev)<0||vt(r,r.next,e)<0}function Vw(r,e){var t=r,n=!1,i=(r.x+e.x)/2,o=(r.y+e.y)/2;do t.y>o!=t.next.y>o&&t.next.y!==t.y&&i<(t.next.x-t.x)*(o-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==r);return n}function I0(r,e){var t=new dh(r.i,r.x,r.y),n=new dh(e.i,e.x,e.y),i=r.next,o=e.prev;return r.next=e,e.prev=r,t.next=i,i.prev=t,n.next=t,t.prev=n,o.next=n,n.prev=o,n}function Iv(r,e,t,n){var i=new dh(r,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function co(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function dh(r,e,t){this.i=r,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}su.deviation=function(r,e,t,n){var i=e&&e.length,o=i?e[0]*t:r.length,a=Math.abs(ph(r,0,o,t));if(i)for(var s=0,u=e.length;s<u;s++){var l=e[s]*t,f=s<u-1?e[s+1]*t:r.length;a-=Math.abs(ph(r,l,f,t))}var c=0;for(s=0;s<n.length;s+=3){var h=n[s]*t,d=n[s+1]*t,p=n[s+2]*t;c+=Math.abs((r[h]-r[p])*(r[d+1]-r[h+1])-(r[h]-r[d])*(r[p+1]-r[h+1]))}return a===0&&c===0?0:Math.abs((c-a)/a)};function ph(r,e,t,n){for(var i=0,o=e,a=t-n;o<t;o+=n)i+=(r[a]-r[o])*(r[o+1]+r[a+1]),a=o;return i}su.flatten=function(r){for(var e=r[0][0].length,t={vertices:[],holes:[],dimensions:e},n=0,i=0;i<r.length;i++){for(var o=0;o<r[i].length;o++)for(var a=0;a<e;a++)t.vertices.push(r[i][o][a]);i>0&&(n+=r[i-1].length,t.holes.push(n))}return t};var Ww=Fd.exports;const Nd=Dd(Ww);var As={exports:{}};/*! https://mths.be/punycode v1.4.1 by @mathias */As.exports;(function(r,e){(function(t){var n=e&&!e.nodeType&&e,i=r&&!r.nodeType&&r,o=typeof Vn=="object"&&Vn;(o.global===o||o.window===o||o.self===o)&&(t=o);var a,s=2147483647,u=36,l=1,f=26,c=38,h=700,d=72,p=128,v="-",y=/^xn--/,m=/[^\x20-\x7E]/,g=/[\x2E\u3002\uFF0E\uFF61]/g,_={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},x=u-l,b=Math.floor,T=String.fromCharCode,S;function A(R){throw new RangeError(_[R])}function E(R,O){for(var V=R.length,J=[];V--;)J[V]=O(R[V]);return J}function w(R,O){var V=R.split("@"),J="";V.length>1&&(J=V[0]+"@",R=V[1]),R=R.replace(g,".");var et=R.split("."),bt=E(et,O).join(".");return J+bt}function D(R){for(var O=[],V=0,J=R.length,et,bt;V<J;)et=R.charCodeAt(V++),et>=55296&&et<=56319&&V<J?(bt=R.charCodeAt(V++),(bt&64512)==56320?O.push(((et&1023)<<10)+(bt&1023)+65536):(O.push(et),V--)):O.push(et);return O}function N(R){return E(R,function(O){var V="";return O>65535&&(O-=65536,V+=T(O>>>10&1023|55296),O=56320|O&1023),V+=T(O),V}).join("")}function L(R){return R-48<10?R-22:R-65<26?R-65:R-97<26?R-97:u}function H(R,O){return R+22+75*(R<26)-((O!=0)<<5)}function I(R,O,V){var J=0;for(R=V?b(R/h):R>>1,R+=b(R/O);R>x*f>>1;J+=u)R=b(R/x);return b(J+(x+1)*R/(R+c))}function M(R){var O=[],V=R.length,J,et=0,bt=p,ft=d,ht,Dt,Gt,xt,ot,ut,ct,Z,zt;for(ht=R.lastIndexOf(v),ht<0&&(ht=0),Dt=0;Dt<ht;++Dt)R.charCodeAt(Dt)>=128&&A("not-basic"),O.push(R.charCodeAt(Dt));for(Gt=ht>0?ht+1:0;Gt<V;){for(xt=et,ot=1,ut=u;Gt>=V&&A("invalid-input"),ct=L(R.charCodeAt(Gt++)),(ct>=u||ct>b((s-et)/ot))&&A("overflow"),et+=ct*ot,Z=ut<=ft?l:ut>=ft+f?f:ut-ft,!(ct<Z);ut+=u)zt=u-Z,ot>b(s/zt)&&A("overflow"),ot*=zt;J=O.length+1,ft=I(et-xt,J,xt==0),b(et/J)>s-bt&&A("overflow"),bt+=b(et/J),et%=J,O.splice(et++,0,bt)}return N(O)}function $(R){var O,V,J,et,bt,ft,ht,Dt,Gt,xt,ot,ut=[],ct,Z,zt,Yt;for(R=D(R),ct=R.length,O=p,V=0,bt=d,ft=0;ft<ct;++ft)ot=R[ft],ot<128&&ut.push(T(ot));for(J=et=ut.length,et&&ut.push(v);J<ct;){for(ht=s,ft=0;ft<ct;++ft)ot=R[ft],ot>=O&&ot<ht&&(ht=ot);for(Z=J+1,ht-O>b((s-V)/Z)&&A("overflow"),V+=(ht-O)*Z,O=ht,ft=0;ft<ct;++ft)if(ot=R[ft],ot<O&&++V>s&&A("overflow"),ot==O){for(Dt=V,Gt=u;xt=Gt<=bt?l:Gt>=bt+f?f:Gt-bt,!(Dt<xt);Gt+=u)Yt=Dt-xt,zt=u-xt,ut.push(T(H(xt+Yt%zt,0))),Dt=b(Yt/zt);ut.push(T(H(Dt,0))),bt=I(V,Z,J==et),V=0,++J}++V,++O}return ut.join("")}function wt(R){return w(R,function(O){return y.test(O)?M(O.slice(4).toLowerCase()):O})}function Y(R){return w(R,function(O){return m.test(O)?"xn--"+$(O):O})}if(a={version:"1.4.1",ucs2:{decode:D,encode:N},decode:M,encode:$,toASCII:Y,toUnicode:wt},n&&i)if(r.exports==n)i.exports=a;else for(S in a)a.hasOwnProperty(S)&&(n[S]=a[S]);else t.punycode=a})(Vn)})(As,As.exports);var Yw=As.exports,M0=Object,qw=Error,Kw=EvalError,Zw=RangeError,Jw=ReferenceError,D0=SyntaxError,yi=TypeError,Qw=URIError,tO=Math.abs,eO=Math.floor,rO=Math.max,nO=Math.min,iO=Math.pow,oO=Math.round,aO=Number.isNaN||function(e){return e!==e},sO=aO,uO=function(e){return sO(e)||e===0?e:e<0?-1:1},lO=Object.getOwnPropertyDescriptor,es=lO;if(es)try{es([],"length")}catch{es=null}var lu=es,rs=Object.defineProperty||!1;if(rs)try{rs({},"a",{value:1})}catch{rs=!1}var fu=rs,rl,Mv;function fO(){return Mv||(Mv=1,rl=function(){if(typeof Symbol!="function"||typeof Object.getOwnPropertySymbols!="function")return!1;if(typeof Symbol.iterator=="symbol")return!0;var e={},t=Symbol("test"),n=Object(t);if(typeof t=="string"||Object.prototype.toString.call(t)!=="[object Symbol]"||Object.prototype.toString.call(n)!=="[object Symbol]")return!1;var i=42;e[t]=i;for(var o in e)return!1;if(typeof Object.keys=="function"&&Object.keys(e).length!==0||typeof Object.getOwnPropertyNames=="function"&&Object.getOwnPropertyNames(e).length!==0)return!1;var a=Object.getOwnPropertySymbols(e);if(a.length!==1||a[0]!==t||!Object.prototype.propertyIsEnumerable.call(e,t))return!1;if(typeof Object.getOwnPropertyDescriptor=="function"){var s=Object.getOwnPropertyDescriptor(e,t);if(s.value!==i||s.enumerable!==!0)return!1}return!0}),rl}var nl,Dv;function hO(){if(Dv)return nl;Dv=1;var r=typeof Symbol<"u"&&Symbol,e=fO();return nl=function(){return typeof r!="function"||typeof Symbol!="function"||typeof r("foo")!="symbol"||typeof Symbol("bar")!="symbol"?!1:e()},nl}var il,Fv;function F0(){return Fv||(Fv=1,il=typeof Reflect<"u"&&Reflect.getPrototypeOf||null),il}var ol,Nv;function N0(){if(Nv)return ol;Nv=1;var r=M0;return ol=r.getPrototypeOf||null,ol}var cO="Function.prototype.bind called on incompatible ",dO=Object.prototype.toString,pO=Math.max,vO="[object Function]",Lv=function(e,t){for(var n=[],i=0;i<e.length;i+=1)n[i]=e[i];for(var o=0;o<t.length;o+=1)n[o+e.length]=t[o];return n},yO=function(e,t){for(var n=[],i=t,o=0;i<e.length;i+=1,o+=1)n[o]=e[i];return n},mO=function(r,e){for(var t="",n=0;n<r.length;n+=1)t+=r[n],n+1<r.length&&(t+=e);return t},_O=function(e){var t=this;if(typeof t!="function"||dO.apply(t)!==vO)throw new TypeError(cO+t);for(var n=yO(arguments,1),i,o=function(){if(this instanceof i){var f=t.apply(this,Lv(n,arguments));return Object(f)===f?f:this}return t.apply(e,Lv(n,arguments))},a=pO(0,t.length-n.length),s=[],u=0;u<a;u++)s[u]="$"+u;if(i=Function("binder","return function ("+mO(s,",")+"){ return binder.apply(this,arguments); }")(o),t.prototype){var l=function(){};l.prototype=t.prototype,i.prototype=new l,l.prototype=null}return i},gO=_O,Mo=Function.prototype.bind||gO,al,Bv;function Ld(){return Bv||(Bv=1,al=Function.prototype.call),al}var sl,Uv;function L0(){return Uv||(Uv=1,sl=Function.prototype.apply),sl}var ul,Gv;function bO(){return Gv||(Gv=1,ul=typeof Reflect<"u"&&Reflect&&Reflect.apply),ul}var ll,jv;function xO(){if(jv)return ll;jv=1;var r=Mo,e=L0(),t=Ld(),n=bO();return ll=n||r.call(t,e),ll}var fl,kv;function TO(){if(kv)return fl;kv=1;var r=Mo,e=yi,t=Ld(),n=xO();return fl=function(o){if(o.length<1||typeof o[0]!="function")throw new e("a function is required");return n(r,t,o)},fl}var hl,$v;function SO(){if($v)return hl;$v=1;var r=TO(),e=lu,t;try{t=[].__proto__===Array.prototype}catch(a){if(!a||typeof a!="object"||!("code"in a)||a.code!=="ERR_PROTO_ACCESS")throw a}var n=!!t&&e&&e(Object.prototype,"__proto__"),i=Object,o=i.getPrototypeOf;return hl=n&&typeof n.get=="function"?r([n.get]):typeof o=="function"?function(s){return o(s==null?s:i(s))}:!1,hl}var cl,zv;function EO(){if(zv)return cl;zv=1;var r=F0(),e=N0(),t=SO();return cl=r?function(i){return r(i)}:e?function(i){if(!i||typeof i!="object"&&typeof i!="function")throw new TypeError("getProto: not an object");return e(i)}:t?function(i){return t(i)}:null,cl}var dl,Hv;function wO(){if(Hv)return dl;Hv=1;var r=Function.prototype.call,e=Object.prototype.hasOwnProperty,t=Mo;return dl=t.call(r,e),dl}var W,OO=M0,PO=qw,AO=Kw,CO=Zw,RO=Jw,ei=D0,Wn=yi,IO=Qw,MO=tO,DO=eO,FO=rO,NO=nO,LO=iO,BO=oO,UO=uO,B0=Function,pl=function(r){try{return B0('"use strict"; return ('+r+").constructor;")()}catch{}},po=lu,GO=fu,vl=function(){throw new Wn},jO=po?function(){try{return arguments.callee,vl}catch{try{return po(arguments,"callee").get}catch{return vl}}}():vl,wn=hO()(),Ft=EO(),kO=N0(),$O=F0(),U0=L0(),Do=Ld(),Ln={},zO=typeof Uint8Array>"u"||!Ft?W:Ft(Uint8Array),Kr={__proto__:null,"%AggregateError%":typeof AggregateError>"u"?W:AggregateError,"%Array%":Array,"%ArrayBuffer%":typeof ArrayBuffer>"u"?W:ArrayBuffer,"%ArrayIteratorPrototype%":wn&&Ft?Ft([][Symbol.iterator]()):W,"%AsyncFromSyncIteratorPrototype%":W,"%AsyncFunction%":Ln,"%AsyncGenerator%":Ln,"%AsyncGeneratorFunction%":Ln,"%AsyncIteratorPrototype%":Ln,"%Atomics%":typeof Atomics>"u"?W:Atomics,"%BigInt%":typeof BigInt>"u"?W:BigInt,"%BigInt64Array%":typeof BigInt64Array>"u"?W:BigInt64Array,"%BigUint64Array%":typeof BigUint64Array>"u"?W:BigUint64Array,"%Boolean%":Boolean,"%DataView%":typeof DataView>"u"?W:DataView,"%Date%":Date,"%decodeURI%":decodeURI,"%decodeURIComponent%":decodeURIComponent,"%encodeURI%":encodeURI,"%encodeURIComponent%":encodeURIComponent,"%Error%":PO,"%eval%":eval,"%EvalError%":AO,"%Float16Array%":typeof Float16Array>"u"?W:Float16Array,"%Float32Array%":typeof Float32Array>"u"?W:Float32Array,"%Float64Array%":typeof Float64Array>"u"?W:Float64Array,"%FinalizationRegistry%":typeof FinalizationRegistry>"u"?W:FinalizationRegistry,"%Function%":B0,"%GeneratorFunction%":Ln,"%Int8Array%":typeof Int8Array>"u"?W:Int8Array,"%Int16Array%":typeof Int16Array>"u"?W:Int16Array,"%Int32Array%":typeof Int32Array>"u"?W:Int32Array,"%isFinite%":isFinite,"%isNaN%":isNaN,"%IteratorPrototype%":wn&&Ft?Ft(Ft([][Symbol.iterator]())):W,"%JSON%":typeof JSON=="object"?JSON:W,"%Map%":typeof Map>"u"?W:Map,"%MapIteratorPrototype%":typeof Map>"u"||!wn||!Ft?W:Ft(new Map()[Symbol.iterator]()),"%Math%":Math,"%Number%":Number,"%Object%":OO,"%Object.getOwnPropertyDescriptor%":po,"%parseFloat%":parseFloat,"%parseInt%":parseInt,"%Promise%":typeof Promise>"u"?W:Promise,"%Proxy%":typeof Proxy>"u"?W:Proxy,"%RangeError%":CO,"%ReferenceError%":RO,"%Reflect%":typeof Reflect>"u"?W:Reflect,"%RegExp%":RegExp,"%Set%":typeof Set>"u"?W:Set,"%SetIteratorPrototype%":typeof Set>"u"||!wn||!Ft?W:Ft(new Set()[Symbol.iterator]()),"%SharedArrayBuffer%":typeof SharedArrayBuffer>"u"?W:SharedArrayBuffer,"%String%":String,"%StringIteratorPrototype%":wn&&Ft?Ft(""[Symbol.iterator]()):W,"%Symbol%":wn?Symbol:W,"%SyntaxError%":ei,"%ThrowTypeError%":jO,"%TypedArray%":zO,"%TypeError%":Wn,"%Uint8Array%":typeof Uint8Array>"u"?W:Uint8Array,"%Uint8ClampedArray%":typeof Uint8ClampedArray>"u"?W:Uint8ClampedArray,"%Uint16Array%":typeof Uint16Array>"u"?W:Uint16Array,"%Uint32Array%":typeof Uint32Array>"u"?W:Uint32Array,"%URIError%":IO,"%WeakMap%":typeof WeakMap>"u"?W:WeakMap,"%WeakRef%":typeof WeakRef>"u"?W:WeakRef,"%WeakSet%":typeof WeakSet>"u"?W:WeakSet,"%Function.prototype.call%":Do,"%Function.prototype.apply%":U0,"%Object.defineProperty%":GO,"%Object.getPrototypeOf%":kO,"%Math.abs%":MO,"%Math.floor%":DO,"%Math.max%":FO,"%Math.min%":NO,"%Math.pow%":LO,"%Math.round%":BO,"%Math.sign%":UO,"%Reflect.getPrototypeOf%":$O};if(Ft)try{null.error}catch(r){var HO=Ft(Ft(r));Kr["%Error.prototype%"]=HO}var XO=function r(e){var t;if(e==="%AsyncFunction%")t=pl("async function () {}");else if(e==="%GeneratorFunction%")t=pl("function* () {}");else if(e==="%AsyncGeneratorFunction%")t=pl("async function* () {}");else if(e==="%AsyncGenerator%"){var n=r("%AsyncGeneratorFunction%");n&&(t=n.prototype)}else if(e==="%AsyncIteratorPrototype%"){var i=r("%AsyncGenerator%");i&&Ft&&(t=Ft(i.prototype))}return Kr[e]=t,t},Xv={__proto__:null,"%ArrayBufferPrototype%":["ArrayBuffer","prototype"],"%ArrayPrototype%":["Array","prototype"],"%ArrayProto_entries%":["Array","prototype","entries"],"%ArrayProto_forEach%":["Array","prototype","forEach"],"%ArrayProto_keys%":["Array","prototype","keys"],"%ArrayProto_values%":["Array","prototype","values"],"%AsyncFunctionPrototype%":["AsyncFunction","prototype"],"%AsyncGenerator%":["AsyncGeneratorFunction","prototype"],"%AsyncGeneratorPrototype%":["AsyncGeneratorFunction","prototype","prototype"],"%BooleanPrototype%":["Boolean","prototype"],"%DataViewPrototype%":["DataView","prototype"],"%DatePrototype%":["Date","prototype"],"%ErrorPrototype%":["Error","prototype"],"%EvalErrorPrototype%":["EvalError","prototype"],"%Float32ArrayPrototype%":["Float32Array","prototype"],"%Float64ArrayPrototype%":["Float64Array","prototype"],"%FunctionPrototype%":["Function","prototype"],"%Generator%":["GeneratorFunction","prototype"],"%GeneratorPrototype%":["GeneratorFunction","prototype","prototype"],"%Int8ArrayPrototype%":["Int8Array","prototype"],"%Int16ArrayPrototype%":["Int16Array","prototype"],"%Int32ArrayPrototype%":["Int32Array","prototype"],"%JSONParse%":["JSON","parse"],"%JSONStringify%":["JSON","stringify"],"%MapPrototype%":["Map","prototype"],"%NumberPrototype%":["Number","prototype"],"%ObjectPrototype%":["Object","prototype"],"%ObjProto_toString%":["Object","prototype","toString"],"%ObjProto_valueOf%":["Object","prototype","valueOf"],"%PromisePrototype%":["Promise","prototype"],"%PromiseProto_then%":["Promise","prototype","then"],"%Promise_all%":["Promise","all"],"%Promise_reject%":["Promise","reject"],"%Promise_resolve%":["Promise","resolve"],"%RangeErrorPrototype%":["RangeError","prototype"],"%ReferenceErrorPrototype%":["ReferenceError","prototype"],"%RegExpPrototype%":["RegExp","prototype"],"%SetPrototype%":["Set","prototype"],"%SharedArrayBufferPrototype%":["SharedArrayBuffer","prototype"],"%StringPrototype%":["String","prototype"],"%SymbolPrototype%":["Symbol","prototype"],"%SyntaxErrorPrototype%":["SyntaxError","prototype"],"%TypedArrayPrototype%":["TypedArray","prototype"],"%TypeErrorPrototype%":["TypeError","prototype"],"%Uint8ArrayPrototype%":["Uint8Array","prototype"],"%Uint8ClampedArrayPrototype%":["Uint8ClampedArray","prototype"],"%Uint16ArrayPrototype%":["Uint16Array","prototype"],"%Uint32ArrayPrototype%":["Uint32Array","prototype"],"%URIErrorPrototype%":["URIError","prototype"],"%WeakMapPrototype%":["WeakMap","prototype"],"%WeakSetPrototype%":["WeakSet","prototype"]},Fo=Mo,Cs=wO(),VO=Fo.call(Do,Array.prototype.concat),WO=Fo.call(U0,Array.prototype.splice),Vv=Fo.call(Do,String.prototype.replace),Rs=Fo.call(Do,String.prototype.slice),YO=Fo.call(Do,RegExp.prototype.exec),qO=/[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,KO=/\\(\\)?/g,ZO=function(e){var t=Rs(e,0,1),n=Rs(e,-1);if(t==="%"&&n!=="%")throw new ei("invalid intrinsic syntax, expected closing `%`");if(n==="%"&&t!=="%")throw new ei("invalid intrinsic syntax, expected opening `%`");var i=[];return Vv(e,qO,function(o,a,s,u){i[i.length]=s?Vv(u,KO,"$1"):a||o}),i},JO=function(e,t){var n=e,i;if(Cs(Xv,n)&&(i=Xv[n],n="%"+i[0]+"%"),Cs(Kr,n)){var o=Kr[n];if(o===Ln&&(o=XO(n)),typeof o>"u"&&!t)throw new Wn("intrinsic "+e+" exists, but is not available. Please file an issue!");return{alias:i,name:n,value:o}}throw new ei("intrinsic "+e+" does not exist!")},hu=function(e,t){if(typeof e!="string"||e.length===0)throw new Wn("intrinsic name must be a non-empty string");if(arguments.length>1&&typeof t!="boolean")throw new Wn('"allowMissing" argument must be a boolean');if(YO(/^%?[^%]*%?$/,e)===null)throw new ei("`%` may not be present anywhere but at the beginning and end of the intrinsic name");var n=ZO(e),i=n.length>0?n[0]:"",o=JO("%"+i+"%",t),a=o.name,s=o.value,u=!1,l=o.alias;l&&(i=l[0],WO(n,VO([0,1],l)));for(var f=1,c=!0;f<n.length;f+=1){var h=n[f],d=Rs(h,0,1),p=Rs(h,-1);if((d==='"'||d==="'"||d==="`"||p==='"'||p==="'"||p==="`")&&d!==p)throw new ei("property names with quotes must have matching quotes");if((h==="constructor"||!c)&&(u=!0),i+="."+h,a="%"+i+"%",Cs(Kr,a))s=Kr[a];else if(s!=null){if(!(h in s)){if(!t)throw new Wn("base intrinsic for "+e+" exists, but the property is not available.");return}if(po&&f+1>=n.length){var v=po(s,h);c=!!v,c&&"get"in v&&!("originalValue"in v.get)?s=v.get:s=s[h]}else c=Cs(s,h),s=s[h];c&&!u&&(Kr[a]=s)}}return s},G0={exports:{}},Wv=fu,QO=D0,On=yi,Yv=lu,tP=function(e,t,n){if(!e||typeof e!="object"&&typeof e!="function")throw new On("`obj` must be an object or a function`");if(typeof t!="string"&&typeof t!="symbol")throw new On("`property` must be a string or a symbol`");if(arguments.length>3&&typeof arguments[3]!="boolean"&&arguments[3]!==null)throw new On("`nonEnumerable`, if provided, must be a boolean or null");if(arguments.length>4&&typeof arguments[4]!="boolean"&&arguments[4]!==null)throw new On("`nonWritable`, if provided, must be a boolean or null");if(arguments.length>5&&typeof arguments[5]!="boolean"&&arguments[5]!==null)throw new On("`nonConfigurable`, if provided, must be a boolean or null");if(arguments.length>6&&typeof arguments[6]!="boolean")throw new On("`loose`, if provided, must be a boolean");var i=arguments.length>3?arguments[3]:null,o=arguments.length>4?arguments[4]:null,a=arguments.length>5?arguments[5]:null,s=arguments.length>6?arguments[6]:!1,u=!!Yv&&Yv(e,t);if(Wv)Wv(e,t,{configurable:a===null&&u?u.configurable:!a,enumerable:i===null&&u?u.enumerable:!i,value:n,writable:o===null&&u?u.writable:!o});else if(s||!i&&!o&&!a)e[t]=n;else throw new QO("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.")},vh=fu,j0=function(){return!!vh};j0.hasArrayLengthDefineBug=function(){if(!vh)return null;try{return vh([],"length",{value:1}).length!==1}catch{return!0}};var eP=j0,rP=hu,qv=tP,nP=eP(),Kv=lu,Zv=yi,iP=rP("%Math.floor%"),oP=function(e,t){if(typeof e!="function")throw new Zv("`fn` is not a function");if(typeof t!="number"||t<0||t>4294967295||iP(t)!==t)throw new Zv("`length` must be a positive 32-bit integer");var n=arguments.length>2&&!!arguments[2],i=!0,o=!0;if("length"in e&&Kv){var a=Kv(e,"length");a&&!a.configurable&&(i=!1),a&&!a.writable&&(o=!1)}return(i||o||!n)&&(nP?qv(e,"length",t,!0,!0):qv(e,"length",t)),e};(function(r){var e=Mo,t=hu,n=oP,i=yi,o=t("%Function.prototype.apply%"),a=t("%Function.prototype.call%"),s=t("%Reflect.apply%",!0)||e.call(a,o),u=fu,l=t("%Math.max%");r.exports=function(h){if(typeof h!="function")throw new i("a function is required");var d=s(e,a,arguments);return n(d,1+l(0,h.length-(arguments.length-1)),!0)};var f=function(){return s(e,o,arguments)};u?u(r.exports,"apply",{value:f}):r.exports.apply=f})(G0);var aP=G0.exports,k0=hu,$0=aP,sP=$0(k0("String.prototype.indexOf")),uP=function(e,t){var n=k0(e,!!t);return typeof n=="function"&&sP(e,".prototype.")>-1?$0(n):n};const lP=new Proxy({},{get(r,e){throw new Error(`Module "" has been externalized for browser compatibility. Cannot access ".${e}" in client code.  See https://vite.dev/guide/troubleshooting.html#module-externalized-for-browser-compatibility for more details.`)}}),fP=Object.freeze(Object.defineProperty({__proto__:null,default:lP},Symbol.toStringTag,{value:"Module"})),hP=_w(fP);var Bd=typeof Map=="function"&&Map.prototype,yl=Object.getOwnPropertyDescriptor&&Bd?Object.getOwnPropertyDescriptor(Map.prototype,"size"):null,Is=Bd&&yl&&typeof yl.get=="function"?yl.get:null,Jv=Bd&&Map.prototype.forEach,Ud=typeof Set=="function"&&Set.prototype,ml=Object.getOwnPropertyDescriptor&&Ud?Object.getOwnPropertyDescriptor(Set.prototype,"size"):null,Ms=Ud&&ml&&typeof ml.get=="function"?ml.get:null,Qv=Ud&&Set.prototype.forEach,cP=typeof WeakMap=="function"&&WeakMap.prototype,Xi=cP?WeakMap.prototype.has:null,dP=typeof WeakSet=="function"&&WeakSet.prototype,Vi=dP?WeakSet.prototype.has:null,pP=typeof WeakRef=="function"&&WeakRef.prototype,ty=pP?WeakRef.prototype.deref:null,vP=Boolean.prototype.valueOf,yP=Object.prototype.toString,mP=Function.prototype.toString,_P=String.prototype.match,Gd=String.prototype.slice,_r=String.prototype.replace,gP=String.prototype.toUpperCase,ey=String.prototype.toLowerCase,z0=RegExp.prototype.test,ry=Array.prototype.concat,Be=Array.prototype.join,bP=Array.prototype.slice,ny=Math.floor,yh=typeof BigInt=="function"?BigInt.prototype.valueOf:null,_l=Object.getOwnPropertySymbols,mh=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Symbol.prototype.toString:null,ri=typeof Symbol=="function"&&typeof Symbol.iterator=="object",kt=typeof Symbol=="function"&&Symbol.toStringTag&&(typeof Symbol.toStringTag===ri||!0)?Symbol.toStringTag:null,H0=Object.prototype.propertyIsEnumerable,iy=(typeof Reflect=="function"?Reflect.getPrototypeOf:Object.getPrototypeOf)||([].__proto__===Array.prototype?function(r){return r.__proto__}:null);function oy(r,e){if(r===1/0||r===-1/0||r!==r||r&&r>-1e3&&r<1e3||z0.call(/e/,e))return e;var t=/[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;if(typeof r=="number"){var n=r<0?-ny(-r):ny(r);if(n!==r){var i=String(n),o=Gd.call(e,i.length+1);return _r.call(i,t,"$&_")+"."+_r.call(_r.call(o,/([0-9]{3})/g,"$&_"),/_$/,"")}}return _r.call(e,t,"$&_")}var _h=hP,ay=_h.custom,sy=V0(ay)?ay:null,xP=function r(e,t,n,i){var o=t||{};if(vr(o,"quoteStyle")&&o.quoteStyle!=="single"&&o.quoteStyle!=="double")throw new TypeError('option "quoteStyle" must be "single" or "double"');if(vr(o,"maxStringLength")&&(typeof o.maxStringLength=="number"?o.maxStringLength<0&&o.maxStringLength!==1/0:o.maxStringLength!==null))throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');var a=vr(o,"customInspect")?o.customInspect:!0;if(typeof a!="boolean"&&a!=="symbol")throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");if(vr(o,"indent")&&o.indent!==null&&o.indent!=="	"&&!(parseInt(o.indent,10)===o.indent&&o.indent>0))throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');if(vr(o,"numericSeparator")&&typeof o.numericSeparator!="boolean")throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');var s=o.numericSeparator;if(typeof e>"u")return"undefined";if(e===null)return"null";if(typeof e=="boolean")return e?"true":"false";if(typeof e=="string")return Y0(e,o);if(typeof e=="number"){if(e===0)return 1/0/e>0?"0":"-0";var u=String(e);return s?oy(e,u):u}if(typeof e=="bigint"){var l=String(e)+"n";return s?oy(e,l):l}var f=typeof o.depth>"u"?5:o.depth;if(typeof n>"u"&&(n=0),n>=f&&f>0&&typeof e=="object")return gh(e)?"[Array]":"[Object]";var c=GP(o,n);if(typeof i>"u")i=[];else if(W0(i,e)>=0)return"[Circular]";function h(L,H,I){if(H&&(i=bP.call(i),i.push(H)),I){var M={depth:o.depth};return vr(o,"quoteStyle")&&(M.quoteStyle=o.quoteStyle),r(L,M,n+1,i)}return r(L,o,n+1,i)}if(typeof e=="function"&&!uy(e)){var d=RP(e),p=na(e,h);return"[Function"+(d?": "+d:" (anonymous)")+"]"+(p.length>0?" { "+Be.call(p,", ")+" }":"")}if(V0(e)){var v=ri?_r.call(String(e),/^(Symbol\(.*\))_[^)]*$/,"$1"):mh.call(e);return typeof e=="object"&&!ri?wi(v):v}if(LP(e)){for(var y="<"+ey.call(String(e.nodeName)),m=e.attributes||[],g=0;g<m.length;g++)y+=" "+m[g].name+"="+X0(TP(m[g].value),"double",o);return y+=">",e.childNodes&&e.childNodes.length&&(y+="..."),y+="</"+ey.call(String(e.nodeName))+">",y}if(gh(e)){if(e.length===0)return"[]";var _=na(e,h);return c&&!UP(_)?"["+bh(_,c)+"]":"[ "+Be.call(_,", ")+" ]"}if(EP(e)){var x=na(e,h);return!("cause"in Error.prototype)&&"cause"in e&&!H0.call(e,"cause")?"{ ["+String(e)+"] "+Be.call(ry.call("[cause]: "+h(e.cause),x),", ")+" }":x.length===0?"["+String(e)+"]":"{ ["+String(e)+"] "+Be.call(x,", ")+" }"}if(typeof e=="object"&&a){if(sy&&typeof e[sy]=="function"&&_h)return _h(e,{depth:f-n});if(a!=="symbol"&&typeof e.inspect=="function")return e.inspect()}if(IP(e)){var b=[];return Jv&&Jv.call(e,function(L,H){b.push(h(H,e,!0)+" => "+h(L,e))}),ly("Map",Is.call(e),b,c)}if(FP(e)){var T=[];return Qv&&Qv.call(e,function(L){T.push(h(L,e))}),ly("Set",Ms.call(e),T,c)}if(MP(e))return gl("WeakMap");if(NP(e))return gl("WeakSet");if(DP(e))return gl("WeakRef");if(OP(e))return wi(h(Number(e)));if(AP(e))return wi(h(yh.call(e)));if(PP(e))return wi(vP.call(e));if(wP(e))return wi(h(String(e)));if(typeof window<"u"&&e===window)return"{ [object Window] }";if(e===Vn)return"{ [object globalThis] }";if(!SP(e)&&!uy(e)){var S=na(e,h),A=iy?iy(e)===Object.prototype:e instanceof Object||e.constructor===Object,E=e instanceof Object?"":"null prototype",w=!A&&kt&&Object(e)===e&&kt in e?Gd.call(Rr(e),8,-1):E?"Object":"",D=A||typeof e.constructor!="function"?"":e.constructor.name?e.constructor.name+" ":"",N=D+(w||E?"["+Be.call(ry.call([],w||[],E||[]),": ")+"] ":"");return S.length===0?N+"{}":c?N+"{"+bh(S,c)+"}":N+"{ "+Be.call(S,", ")+" }"}return String(e)};function X0(r,e,t){var n=(t.quoteStyle||e)==="double"?'"':"'";return n+r+n}function TP(r){return _r.call(String(r),/"/g,"&quot;")}function gh(r){return Rr(r)==="[object Array]"&&(!kt||!(typeof r=="object"&&kt in r))}function SP(r){return Rr(r)==="[object Date]"&&(!kt||!(typeof r=="object"&&kt in r))}function uy(r){return Rr(r)==="[object RegExp]"&&(!kt||!(typeof r=="object"&&kt in r))}function EP(r){return Rr(r)==="[object Error]"&&(!kt||!(typeof r=="object"&&kt in r))}function wP(r){return Rr(r)==="[object String]"&&(!kt||!(typeof r=="object"&&kt in r))}function OP(r){return Rr(r)==="[object Number]"&&(!kt||!(typeof r=="object"&&kt in r))}function PP(r){return Rr(r)==="[object Boolean]"&&(!kt||!(typeof r=="object"&&kt in r))}function V0(r){if(ri)return r&&typeof r=="object"&&r instanceof Symbol;if(typeof r=="symbol")return!0;if(!r||typeof r!="object"||!mh)return!1;try{return mh.call(r),!0}catch{}return!1}function AP(r){if(!r||typeof r!="object"||!yh)return!1;try{return yh.call(r),!0}catch{}return!1}var CP=Object.prototype.hasOwnProperty||function(r){return r in this};function vr(r,e){return CP.call(r,e)}function Rr(r){return yP.call(r)}function RP(r){if(r.name)return r.name;var e=_P.call(mP.call(r),/^function\s*([\w$]+)/);return e?e[1]:null}function W0(r,e){if(r.indexOf)return r.indexOf(e);for(var t=0,n=r.length;t<n;t++)if(r[t]===e)return t;return-1}function IP(r){if(!Is||!r||typeof r!="object")return!1;try{Is.call(r);try{Ms.call(r)}catch{return!0}return r instanceof Map}catch{}return!1}function MP(r){if(!Xi||!r||typeof r!="object")return!1;try{Xi.call(r,Xi);try{Vi.call(r,Vi)}catch{return!0}return r instanceof WeakMap}catch{}return!1}function DP(r){if(!ty||!r||typeof r!="object")return!1;try{return ty.call(r),!0}catch{}return!1}function FP(r){if(!Ms||!r||typeof r!="object")return!1;try{Ms.call(r);try{Is.call(r)}catch{return!0}return r instanceof Set}catch{}return!1}function NP(r){if(!Vi||!r||typeof r!="object")return!1;try{Vi.call(r,Vi);try{Xi.call(r,Xi)}catch{return!0}return r instanceof WeakSet}catch{}return!1}function LP(r){return!r||typeof r!="object"?!1:typeof HTMLElement<"u"&&r instanceof HTMLElement?!0:typeof r.nodeName=="string"&&typeof r.getAttribute=="function"}function Y0(r,e){if(r.length>e.maxStringLength){var t=r.length-e.maxStringLength,n="... "+t+" more character"+(t>1?"s":"");return Y0(Gd.call(r,0,e.maxStringLength),e)+n}var i=_r.call(_r.call(r,/(['\\])/g,"\\$1"),/[\x00-\x1f]/g,BP);return X0(i,"single",e)}function BP(r){var e=r.charCodeAt(0),t={8:"b",9:"t",10:"n",12:"f",13:"r"}[e];return t?"\\"+t:"\\x"+(e<16?"0":"")+gP.call(e.toString(16))}function wi(r){return"Object("+r+")"}function gl(r){return r+" { ? }"}function ly(r,e,t,n){var i=n?bh(t,n):Be.call(t,", ");return r+" ("+e+") {"+i+"}"}function UP(r){for(var e=0;e<r.length;e++)if(W0(r[e],`
`)>=0)return!1;return!0}function GP(r,e){var t;if(r.indent==="	")t="	";else if(typeof r.indent=="number"&&r.indent>0)t=Be.call(Array(r.indent+1)," ");else return null;return{base:t,prev:Be.call(Array(e+1),t)}}function bh(r,e){if(r.length===0)return"";var t=`
`+e.prev+e.base;return t+Be.call(r,","+t)+`
`+e.prev}function na(r,e){var t=gh(r),n=[];if(t){n.length=r.length;for(var i=0;i<r.length;i++)n[i]=vr(r,i)?e(r[i],r):""}var o=typeof _l=="function"?_l(r):[],a;if(ri){a={};for(var s=0;s<o.length;s++)a["$"+o[s]]=o[s]}for(var u in r)vr(r,u)&&(t&&String(Number(u))===u&&u<r.length||ri&&a["$"+u]instanceof Symbol||(z0.call(/[^\w$]/,u)?n.push(e(u,r)+": "+e(r[u],r)):n.push(u+": "+e(r[u],r))));if(typeof _l=="function")for(var l=0;l<o.length;l++)H0.call(r,o[l])&&n.push("["+e(o[l])+"]: "+e(r[o[l]],r));return n}var q0=hu,mi=uP,jP=xP,kP=yi,ia=q0("%WeakMap%",!0),oa=q0("%Map%",!0),$P=mi("WeakMap.prototype.get",!0),zP=mi("WeakMap.prototype.set",!0),HP=mi("WeakMap.prototype.has",!0),XP=mi("Map.prototype.get",!0),VP=mi("Map.prototype.set",!0),WP=mi("Map.prototype.has",!0),jd=function(r,e){for(var t=r,n;(n=t.next)!==null;t=n)if(n.key===e)return t.next=n.next,n.next=r.next,r.next=n,n},YP=function(r,e){var t=jd(r,e);return t&&t.value},qP=function(r,e,t){var n=jd(r,e);n?n.value=t:r.next={key:e,next:r.next,value:t}},KP=function(r,e){return!!jd(r,e)},ZP=function(){var e,t,n,i={assert:function(o){if(!i.has(o))throw new kP("Side channel does not contain "+jP(o))},get:function(o){if(ia&&o&&(typeof o=="object"||typeof o=="function")){if(e)return $P(e,o)}else if(oa){if(t)return XP(t,o)}else if(n)return YP(n,o)},has:function(o){if(ia&&o&&(typeof o=="object"||typeof o=="function")){if(e)return HP(e,o)}else if(oa){if(t)return WP(t,o)}else if(n)return KP(n,o);return!1},set:function(o,a){ia&&o&&(typeof o=="object"||typeof o=="function")?(e||(e=new ia),zP(e,o,a)):oa?(t||(t=new oa),VP(t,o,a)):(n||(n={key:{},next:null}),qP(n,o,a))}};return i},JP=String.prototype.replace,QP=/%20/g,bl={RFC1738:"RFC1738",RFC3986:"RFC3986"},kd={default:bl.RFC3986,formatters:{RFC1738:function(r){return JP.call(r,QP,"+")},RFC3986:function(r){return String(r)}},RFC1738:bl.RFC1738,RFC3986:bl.RFC3986},tA=kd,xl=Object.prototype.hasOwnProperty,Hr=Array.isArray,De=function(){for(var r=[],e=0;e<256;++e)r.push("%"+((e<16?"0":"")+e.toString(16)).toUpperCase());return r}(),eA=function(e){for(;e.length>1;){var t=e.pop(),n=t.obj[t.prop];if(Hr(n)){for(var i=[],o=0;o<n.length;++o)typeof n[o]<"u"&&i.push(n[o]);t.obj[t.prop]=i}}},K0=function(e,t){for(var n=t&&t.plainObjects?Object.create(null):{},i=0;i<e.length;++i)typeof e[i]<"u"&&(n[i]=e[i]);return n},rA=function r(e,t,n){if(!t)return e;if(typeof t!="object"){if(Hr(e))e.push(t);else if(e&&typeof e=="object")(n&&(n.plainObjects||n.allowPrototypes)||!xl.call(Object.prototype,t))&&(e[t]=!0);else return[e,t];return e}if(!e||typeof e!="object")return[e].concat(t);var i=e;return Hr(e)&&!Hr(t)&&(i=K0(e,n)),Hr(e)&&Hr(t)?(t.forEach(function(o,a){if(xl.call(e,a)){var s=e[a];s&&typeof s=="object"&&o&&typeof o=="object"?e[a]=r(s,o,n):e.push(o)}else e[a]=o}),e):Object.keys(t).reduce(function(o,a){var s=t[a];return xl.call(o,a)?o[a]=r(o[a],s,n):o[a]=s,o},i)},nA=function(e,t){return Object.keys(t).reduce(function(n,i){return n[i]=t[i],n},e)},iA=function(r,e,t){var n=r.replace(/\+/g," ");if(t==="iso-8859-1")return n.replace(/%[0-9a-f]{2}/gi,unescape);try{return decodeURIComponent(n)}catch{return n}},Tl=1024,oA=function(e,t,n,i,o){if(e.length===0)return e;var a=e;if(typeof e=="symbol"?a=Symbol.prototype.toString.call(e):typeof e!="string"&&(a=String(e)),n==="iso-8859-1")return escape(a).replace(/%u[0-9a-f]{4}/gi,function(d){return"%26%23"+parseInt(d.slice(2),16)+"%3B"});for(var s="",u=0;u<a.length;u+=Tl){for(var l=a.length>=Tl?a.slice(u,u+Tl):a,f=[],c=0;c<l.length;++c){var h=l.charCodeAt(c);if(h===45||h===46||h===95||h===126||h>=48&&h<=57||h>=65&&h<=90||h>=97&&h<=122||o===tA.RFC1738&&(h===40||h===41)){f[f.length]=l.charAt(c);continue}if(h<128){f[f.length]=De[h];continue}if(h<2048){f[f.length]=De[192|h>>6]+De[128|h&63];continue}if(h<55296||h>=57344){f[f.length]=De[224|h>>12]+De[128|h>>6&63]+De[128|h&63];continue}c+=1,h=65536+((h&1023)<<10|l.charCodeAt(c)&1023),f[f.length]=De[240|h>>18]+De[128|h>>12&63]+De[128|h>>6&63]+De[128|h&63]}s+=f.join("")}return s},aA=function(e){for(var t=[{obj:{o:e},prop:"o"}],n=[],i=0;i<t.length;++i)for(var o=t[i],a=o.obj[o.prop],s=Object.keys(a),u=0;u<s.length;++u){var l=s[u],f=a[l];typeof f=="object"&&f!==null&&n.indexOf(f)===-1&&(t.push({obj:a,prop:l}),n.push(f))}return eA(t),e},sA=function(e){return Object.prototype.toString.call(e)==="[object RegExp]"},uA=function(e){return!e||typeof e!="object"?!1:!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))},lA=function(e,t){return[].concat(e,t)},fA=function(e,t){if(Hr(e)){for(var n=[],i=0;i<e.length;i+=1)n.push(t(e[i]));return n}return t(e)},Z0={arrayToObject:K0,assign:nA,combine:lA,compact:aA,decode:iA,encode:oA,isBuffer:uA,isRegExp:sA,maybeMap:fA,merge:rA},J0=ZP,ns=Z0,Wi=kd,hA=Object.prototype.hasOwnProperty,Q0={brackets:function(e){return e+"[]"},comma:"comma",indices:function(e,t){return e+"["+t+"]"},repeat:function(e){return e}},Ne=Array.isArray,cA=Array.prototype.push,tb=function(r,e){cA.apply(r,Ne(e)?e:[e])},dA=Date.prototype.toISOString,fy=Wi.default,At={addQueryPrefix:!1,allowDots:!1,allowEmptyArrays:!1,arrayFormat:"indices",charset:"utf-8",charsetSentinel:!1,delimiter:"&",encode:!0,encodeDotInKeys:!1,encoder:ns.encode,encodeValuesOnly:!1,format:fy,formatter:Wi.formatters[fy],indices:!1,serializeDate:function(e){return dA.call(e)},skipNulls:!1,strictNullHandling:!1},pA=function(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"||typeof e=="symbol"||typeof e=="bigint"},Sl={},vA=function r(e,t,n,i,o,a,s,u,l,f,c,h,d,p,v,y,m,g){for(var _=e,x=g,b=0,T=!1;(x=x.get(Sl))!==void 0&&!T;){var S=x.get(e);if(b+=1,typeof S<"u"){if(S===b)throw new RangeError("Cyclic object value");T=!0}typeof x.get(Sl)>"u"&&(b=0)}if(typeof f=="function"?_=f(t,_):_ instanceof Date?_=d(_):n==="comma"&&Ne(_)&&(_=ns.maybeMap(_,function(R){return R instanceof Date?d(R):R})),_===null){if(a)return l&&!y?l(t,At.encoder,m,"key",p):t;_=""}if(pA(_)||ns.isBuffer(_)){if(l){var A=y?t:l(t,At.encoder,m,"key",p);return[v(A)+"="+v(l(_,At.encoder,m,"value",p))]}return[v(t)+"="+v(String(_))]}var E=[];if(typeof _>"u")return E;var w;if(n==="comma"&&Ne(_))y&&l&&(_=ns.maybeMap(_,l)),w=[{value:_.length>0?_.join(",")||null:void 0}];else if(Ne(f))w=f;else{var D=Object.keys(_);w=c?D.sort(c):D}var N=u?t.replace(/\./g,"%2E"):t,L=i&&Ne(_)&&_.length===1?N+"[]":N;if(o&&Ne(_)&&_.length===0)return L+"[]";for(var H=0;H<w.length;++H){var I=w[H],M=typeof I=="object"&&typeof I.value<"u"?I.value:_[I];if(!(s&&M===null)){var $=h&&u?I.replace(/\./g,"%2E"):I,wt=Ne(_)?typeof n=="function"?n(L,$):L:L+(h?"."+$:"["+$+"]");g.set(e,b);var Y=J0();Y.set(Sl,g),tb(E,r(M,wt,n,i,o,a,s,u,n==="comma"&&y&&Ne(_)?null:l,f,c,h,d,p,v,y,m,Y))}}return E},yA=function(e){if(!e)return At;if(typeof e.allowEmptyArrays<"u"&&typeof e.allowEmptyArrays!="boolean")throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");if(typeof e.encodeDotInKeys<"u"&&typeof e.encodeDotInKeys!="boolean")throw new TypeError("`encodeDotInKeys` option can only be `true` or `false`, when provided");if(e.encoder!==null&&typeof e.encoder<"u"&&typeof e.encoder!="function")throw new TypeError("Encoder has to be a function.");var t=e.charset||At.charset;if(typeof e.charset<"u"&&e.charset!=="utf-8"&&e.charset!=="iso-8859-1")throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var n=Wi.default;if(typeof e.format<"u"){if(!hA.call(Wi.formatters,e.format))throw new TypeError("Unknown format option provided.");n=e.format}var i=Wi.formatters[n],o=At.filter;(typeof e.filter=="function"||Ne(e.filter))&&(o=e.filter);var a;if(e.arrayFormat in Q0?a=e.arrayFormat:"indices"in e?a=e.indices?"indices":"repeat":a=At.arrayFormat,"commaRoundTrip"in e&&typeof e.commaRoundTrip!="boolean")throw new TypeError("`commaRoundTrip` must be a boolean, or absent");var s=typeof e.allowDots>"u"?e.encodeDotInKeys===!0?!0:At.allowDots:!!e.allowDots;return{addQueryPrefix:typeof e.addQueryPrefix=="boolean"?e.addQueryPrefix:At.addQueryPrefix,allowDots:s,allowEmptyArrays:typeof e.allowEmptyArrays=="boolean"?!!e.allowEmptyArrays:At.allowEmptyArrays,arrayFormat:a,charset:t,charsetSentinel:typeof e.charsetSentinel=="boolean"?e.charsetSentinel:At.charsetSentinel,commaRoundTrip:e.commaRoundTrip,delimiter:typeof e.delimiter>"u"?At.delimiter:e.delimiter,encode:typeof e.encode=="boolean"?e.encode:At.encode,encodeDotInKeys:typeof e.encodeDotInKeys=="boolean"?e.encodeDotInKeys:At.encodeDotInKeys,encoder:typeof e.encoder=="function"?e.encoder:At.encoder,encodeValuesOnly:typeof e.encodeValuesOnly=="boolean"?e.encodeValuesOnly:At.encodeValuesOnly,filter:o,format:n,formatter:i,serializeDate:typeof e.serializeDate=="function"?e.serializeDate:At.serializeDate,skipNulls:typeof e.skipNulls=="boolean"?e.skipNulls:At.skipNulls,sort:typeof e.sort=="function"?e.sort:null,strictNullHandling:typeof e.strictNullHandling=="boolean"?e.strictNullHandling:At.strictNullHandling}},mA=function(r,e){var t=r,n=yA(e),i,o;typeof n.filter=="function"?(o=n.filter,t=o("",t)):Ne(n.filter)&&(o=n.filter,i=o);var a=[];if(typeof t!="object"||t===null)return"";var s=Q0[n.arrayFormat],u=s==="comma"&&n.commaRoundTrip;i||(i=Object.keys(t)),n.sort&&i.sort(n.sort);for(var l=J0(),f=0;f<i.length;++f){var c=i[f];n.skipNulls&&t[c]===null||tb(a,vA(t[c],c,s,u,n.allowEmptyArrays,n.strictNullHandling,n.skipNulls,n.encodeDotInKeys,n.encode?n.encoder:null,n.filter,n.sort,n.allowDots,n.serializeDate,n.format,n.formatter,n.encodeValuesOnly,n.charset,l))}var h=a.join(n.delimiter),d=n.addQueryPrefix===!0?"?":"";return n.charsetSentinel&&(n.charset==="iso-8859-1"?d+="utf8=%26%2310003%3B&":d+="utf8=%E2%9C%93&"),h.length>0?d+h:""},ni=Z0,xh=Object.prototype.hasOwnProperty,_A=Array.isArray,Tt={allowDots:!1,allowEmptyArrays:!1,allowPrototypes:!1,allowSparse:!1,arrayLimit:20,charset:"utf-8",charsetSentinel:!1,comma:!1,decodeDotInKeys:!1,decoder:ni.decode,delimiter:"&",depth:5,duplicates:"combine",ignoreQueryPrefix:!1,interpretNumericEntities:!1,parameterLimit:1e3,parseArrays:!0,plainObjects:!1,strictNullHandling:!1},gA=function(r){return r.replace(/&#(\d+);/g,function(e,t){return String.fromCharCode(parseInt(t,10))})},eb=function(r,e){return r&&typeof r=="string"&&e.comma&&r.indexOf(",")>-1?r.split(","):r},bA="utf8=%26%2310003%3B",xA="utf8=%E2%9C%93",TA=function(e,t){var n={__proto__:null},i=t.ignoreQueryPrefix?e.replace(/^\?/,""):e,o=t.parameterLimit===1/0?void 0:t.parameterLimit,a=i.split(t.delimiter,o),s=-1,u,l=t.charset;if(t.charsetSentinel)for(u=0;u<a.length;++u)a[u].indexOf("utf8=")===0&&(a[u]===xA?l="utf-8":a[u]===bA&&(l="iso-8859-1"),s=u,u=a.length);for(u=0;u<a.length;++u)if(u!==s){var f=a[u],c=f.indexOf("]="),h=c===-1?f.indexOf("="):c+1,d,p;h===-1?(d=t.decoder(f,Tt.decoder,l,"key"),p=t.strictNullHandling?null:""):(d=t.decoder(f.slice(0,h),Tt.decoder,l,"key"),p=ni.maybeMap(eb(f.slice(h+1),t),function(y){return t.decoder(y,Tt.decoder,l,"value")})),p&&t.interpretNumericEntities&&l==="iso-8859-1"&&(p=gA(p)),f.indexOf("[]=")>-1&&(p=_A(p)?[p]:p);var v=xh.call(n,d);v&&t.duplicates==="combine"?n[d]=ni.combine(n[d],p):(!v||t.duplicates==="last")&&(n[d]=p)}return n},SA=function(r,e,t,n){for(var i=n?e:eb(e,t),o=r.length-1;o>=0;--o){var a,s=r[o];if(s==="[]"&&t.parseArrays)a=t.allowEmptyArrays&&i===""?[]:[].concat(i);else{a=t.plainObjects?Object.create(null):{};var u=s.charAt(0)==="["&&s.charAt(s.length-1)==="]"?s.slice(1,-1):s,l=t.decodeDotInKeys?u.replace(/%2E/g,"."):u,f=parseInt(l,10);!t.parseArrays&&l===""?a={0:i}:!isNaN(f)&&s!==l&&String(f)===l&&f>=0&&t.parseArrays&&f<=t.arrayLimit?(a=[],a[f]=i):l!=="__proto__"&&(a[l]=i)}i=a}return i},EA=function(e,t,n,i){if(e){var o=n.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,a=/(\[[^[\]]*])/,s=/(\[[^[\]]*])/g,u=n.depth>0&&a.exec(o),l=u?o.slice(0,u.index):o,f=[];if(l){if(!n.plainObjects&&xh.call(Object.prototype,l)&&!n.allowPrototypes)return;f.push(l)}for(var c=0;n.depth>0&&(u=s.exec(o))!==null&&c<n.depth;){if(c+=1,!n.plainObjects&&xh.call(Object.prototype,u[1].slice(1,-1))&&!n.allowPrototypes)return;f.push(u[1])}return u&&f.push("["+o.slice(u.index)+"]"),SA(f,t,n,i)}},wA=function(e){if(!e)return Tt;if(typeof e.allowEmptyArrays<"u"&&typeof e.allowEmptyArrays!="boolean")throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");if(typeof e.decodeDotInKeys<"u"&&typeof e.decodeDotInKeys!="boolean")throw new TypeError("`decodeDotInKeys` option can only be `true` or `false`, when provided");if(e.decoder!==null&&typeof e.decoder<"u"&&typeof e.decoder!="function")throw new TypeError("Decoder has to be a function.");if(typeof e.charset<"u"&&e.charset!=="utf-8"&&e.charset!=="iso-8859-1")throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var t=typeof e.charset>"u"?Tt.charset:e.charset,n=typeof e.duplicates>"u"?Tt.duplicates:e.duplicates;if(n!=="combine"&&n!=="first"&&n!=="last")throw new TypeError("The duplicates option must be either combine, first, or last");var i=typeof e.allowDots>"u"?e.decodeDotInKeys===!0?!0:Tt.allowDots:!!e.allowDots;return{allowDots:i,allowEmptyArrays:typeof e.allowEmptyArrays=="boolean"?!!e.allowEmptyArrays:Tt.allowEmptyArrays,allowPrototypes:typeof e.allowPrototypes=="boolean"?e.allowPrototypes:Tt.allowPrototypes,allowSparse:typeof e.allowSparse=="boolean"?e.allowSparse:Tt.allowSparse,arrayLimit:typeof e.arrayLimit=="number"?e.arrayLimit:Tt.arrayLimit,charset:t,charsetSentinel:typeof e.charsetSentinel=="boolean"?e.charsetSentinel:Tt.charsetSentinel,comma:typeof e.comma=="boolean"?e.comma:Tt.comma,decodeDotInKeys:typeof e.decodeDotInKeys=="boolean"?e.decodeDotInKeys:Tt.decodeDotInKeys,decoder:typeof e.decoder=="function"?e.decoder:Tt.decoder,delimiter:typeof e.delimiter=="string"||ni.isRegExp(e.delimiter)?e.delimiter:Tt.delimiter,depth:typeof e.depth=="number"||e.depth===!1?+e.depth:Tt.depth,duplicates:n,ignoreQueryPrefix:e.ignoreQueryPrefix===!0,interpretNumericEntities:typeof e.interpretNumericEntities=="boolean"?e.interpretNumericEntities:Tt.interpretNumericEntities,parameterLimit:typeof e.parameterLimit=="number"?e.parameterLimit:Tt.parameterLimit,parseArrays:e.parseArrays!==!1,plainObjects:typeof e.plainObjects=="boolean"?e.plainObjects:Tt.plainObjects,strictNullHandling:typeof e.strictNullHandling=="boolean"?e.strictNullHandling:Tt.strictNullHandling}},OA=function(r,e){var t=wA(e);if(r===""||r===null||typeof r>"u")return t.plainObjects?Object.create(null):{};for(var n=typeof r=="string"?TA(r,t):r,i=t.plainObjects?Object.create(null):{},o=Object.keys(n),a=0;a<o.length;++a){var s=o[a],u=EA(s,n[s],t,typeof r=="string");i=ni.merge(i,u,t)}return t.allowSparse===!0?i:ni.compact(i)},PA=mA,AA=OA,CA=kd,RA={formats:CA,parse:AA,stringify:PA},IA=Yw;function Pe(){this.protocol=null,this.slashes=null,this.auth=null,this.host=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.query=null,this.pathname=null,this.path=null,this.href=null}var MA=/^([a-z0-9.+-]+:)/i,DA=/:[0-9]*$/,FA=/^(\/\/?(?!\/)[^?\s]*)(\?[^\s]*)?$/,NA=["<",">",'"',"`"," ","\r",`
`,"	"],LA=["{","}","|","\\","^","`"].concat(NA),Th=["'"].concat(LA),hy=["%","/","?",";","#"].concat(Th),cy=["/","?","#"],BA=255,dy=/^[+a-z0-9A-Z_-]{0,63}$/,UA=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,GA={javascript:!0,"javascript:":!0},Sh={javascript:!0,"javascript:":!0},Yn={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0},Eh=RA;function cu(r,e,t){if(r&&typeof r=="object"&&r instanceof Pe)return r;var n=new Pe;return n.parse(r,e,t),n}Pe.prototype.parse=function(r,e,t){if(typeof r!="string")throw new TypeError("Parameter 'url' must be a string, not "+typeof r);var n=r.indexOf("?"),i=n!==-1&&n<r.indexOf("#")?"?":"#",o=r.split(i),a=/\\/g;o[0]=o[0].replace(a,"/"),r=o.join(i);var s=r;if(s=s.trim(),!t&&r.split("#").length===1){var u=FA.exec(s);if(u)return this.path=s,this.href=s,this.pathname=u[1],u[2]?(this.search=u[2],e?this.query=Eh.parse(this.search.substr(1)):this.query=this.search.substr(1)):e&&(this.search="",this.query={}),this}var l=MA.exec(s);if(l){l=l[0];var f=l.toLowerCase();this.protocol=f,s=s.substr(l.length)}if(t||l||s.match(/^\/\/[^@/]+@[^@/]+/)){var c=s.substr(0,2)==="//";c&&!(l&&Sh[l])&&(s=s.substr(2),this.slashes=!0)}if(!Sh[l]&&(c||l&&!Yn[l])){for(var h=-1,d=0;d<cy.length;d++){var p=s.indexOf(cy[d]);p!==-1&&(h===-1||p<h)&&(h=p)}var v,y;h===-1?y=s.lastIndexOf("@"):y=s.lastIndexOf("@",h),y!==-1&&(v=s.slice(0,y),s=s.slice(y+1),this.auth=decodeURIComponent(v)),h=-1;for(var d=0;d<hy.length;d++){var p=s.indexOf(hy[d]);p!==-1&&(h===-1||p<h)&&(h=p)}h===-1&&(h=s.length),this.host=s.slice(0,h),s=s.slice(h),this.parseHost(),this.hostname=this.hostname||"";var m=this.hostname[0]==="["&&this.hostname[this.hostname.length-1]==="]";if(!m)for(var g=this.hostname.split(/\./),d=0,_=g.length;d<_;d++){var x=g[d];if(x&&!x.match(dy)){for(var b="",T=0,S=x.length;T<S;T++)x.charCodeAt(T)>127?b+="x":b+=x[T];if(!b.match(dy)){var A=g.slice(0,d),E=g.slice(d+1),w=x.match(UA);w&&(A.push(w[1]),E.unshift(w[2])),E.length&&(s="/"+E.join(".")+s),this.hostname=A.join(".");break}}}this.hostname.length>BA?this.hostname="":this.hostname=this.hostname.toLowerCase(),m||(this.hostname=IA.toASCII(this.hostname));var D=this.port?":"+this.port:"",N=this.hostname||"";this.host=N+D,this.href+=this.host,m&&(this.hostname=this.hostname.substr(1,this.hostname.length-2),s[0]!=="/"&&(s="/"+s))}if(!GA[f])for(var d=0,_=Th.length;d<_;d++){var L=Th[d];if(s.indexOf(L)!==-1){var H=encodeURIComponent(L);H===L&&(H=escape(L)),s=s.split(L).join(H)}}var I=s.indexOf("#");I!==-1&&(this.hash=s.substr(I),s=s.slice(0,I));var M=s.indexOf("?");if(M!==-1?(this.search=s.substr(M),this.query=s.substr(M+1),e&&(this.query=Eh.parse(this.query)),s=s.slice(0,M)):e&&(this.search="",this.query={}),s&&(this.pathname=s),Yn[f]&&this.hostname&&!this.pathname&&(this.pathname="/"),this.pathname||this.search){var D=this.pathname||"",$=this.search||"";this.path=D+$}return this.href=this.format(),this};function jA(r){return typeof r=="string"&&(r=cu(r)),r instanceof Pe?r.format():Pe.prototype.format.call(r)}Pe.prototype.format=function(){var r=this.auth||"";r&&(r=encodeURIComponent(r),r=r.replace(/%3A/i,":"),r+="@");var e=this.protocol||"",t=this.pathname||"",n=this.hash||"",i=!1,o="";this.host?i=r+this.host:this.hostname&&(i=r+(this.hostname.indexOf(":")===-1?this.hostname:"["+this.hostname+"]"),this.port&&(i+=":"+this.port)),this.query&&typeof this.query=="object"&&Object.keys(this.query).length&&(o=Eh.stringify(this.query,{arrayFormat:"repeat",addQueryPrefix:!1}));var a=this.search||o&&"?"+o||"";return e&&e.substr(-1)!==":"&&(e+=":"),this.slashes||(!e||Yn[e])&&i!==!1?(i="//"+(i||""),t&&t.charAt(0)!=="/"&&(t="/"+t)):i||(i=""),n&&n.charAt(0)!=="#"&&(n="#"+n),a&&a.charAt(0)!=="?"&&(a="?"+a),t=t.replace(/[?#]/g,function(s){return encodeURIComponent(s)}),a=a.replace("#","%23"),e+i+t+a+n};function kA(r,e){return cu(r,!1,!0).resolve(e)}Pe.prototype.resolve=function(r){return this.resolveObject(cu(r,!1,!0)).format()};Pe.prototype.resolveObject=function(r){if(typeof r=="string"){var e=new Pe;e.parse(r,!1,!0),r=e}for(var t=new Pe,n=Object.keys(this),i=0;i<n.length;i++){var o=n[i];t[o]=this[o]}if(t.hash=r.hash,r.href==="")return t.href=t.format(),t;if(r.slashes&&!r.protocol){for(var a=Object.keys(r),s=0;s<a.length;s++){var u=a[s];u!=="protocol"&&(t[u]=r[u])}return Yn[t.protocol]&&t.hostname&&!t.pathname&&(t.pathname="/",t.path=t.pathname),t.href=t.format(),t}if(r.protocol&&r.protocol!==t.protocol){if(!Yn[r.protocol]){for(var l=Object.keys(r),f=0;f<l.length;f++){var c=l[f];t[c]=r[c]}return t.href=t.format(),t}if(t.protocol=r.protocol,!r.host&&!Sh[r.protocol]){for(var _=(r.pathname||"").split("/");_.length&&!(r.host=_.shift()););r.host||(r.host=""),r.hostname||(r.hostname=""),_[0]!==""&&_.unshift(""),_.length<2&&_.unshift(""),t.pathname=_.join("/")}else t.pathname=r.pathname;if(t.search=r.search,t.query=r.query,t.host=r.host||"",t.auth=r.auth,t.hostname=r.hostname||r.host,t.port=r.port,t.pathname||t.search){var h=t.pathname||"",d=t.search||"";t.path=h+d}return t.slashes=t.slashes||r.slashes,t.href=t.format(),t}var p=t.pathname&&t.pathname.charAt(0)==="/",v=r.host||r.pathname&&r.pathname.charAt(0)==="/",y=v||p||t.host&&r.pathname,m=y,g=t.pathname&&t.pathname.split("/")||[],_=r.pathname&&r.pathname.split("/")||[],x=t.protocol&&!Yn[t.protocol];if(x&&(t.hostname="",t.port=null,t.host&&(g[0]===""?g[0]=t.host:g.unshift(t.host)),t.host="",r.protocol&&(r.hostname=null,r.port=null,r.host&&(_[0]===""?_[0]=r.host:_.unshift(r.host)),r.host=null),y=y&&(_[0]===""||g[0]==="")),v)t.host=r.host||r.host===""?r.host:t.host,t.hostname=r.hostname||r.hostname===""?r.hostname:t.hostname,t.search=r.search,t.query=r.query,g=_;else if(_.length)g||(g=[]),g.pop(),g=g.concat(_),t.search=r.search,t.query=r.query;else if(r.search!=null){if(x){t.host=g.shift(),t.hostname=t.host;var b=t.host&&t.host.indexOf("@")>0?t.host.split("@"):!1;b&&(t.auth=b.shift(),t.hostname=b.shift(),t.host=t.hostname)}return t.search=r.search,t.query=r.query,(t.pathname!==null||t.search!==null)&&(t.path=(t.pathname?t.pathname:"")+(t.search?t.search:"")),t.href=t.format(),t}if(!g.length)return t.pathname=null,t.search?t.path="/"+t.search:t.path=null,t.href=t.format(),t;for(var T=g.slice(-1)[0],S=(t.host||r.host||g.length>1)&&(T==="."||T==="..")||T==="",A=0,E=g.length;E>=0;E--)T=g[E],T==="."?g.splice(E,1):T===".."?(g.splice(E,1),A++):A&&(g.splice(E,1),A--);if(!y&&!m)for(;A--;A)g.unshift("..");y&&g[0]!==""&&(!g[0]||g[0].charAt(0)!=="/")&&g.unshift(""),S&&g.join("/").substr(-1)!=="/"&&g.push("");var w=g[0]===""||g[0]&&g[0].charAt(0)==="/";if(x){t.hostname=w?"":g.length?g.shift():"",t.host=t.hostname;var b=t.host&&t.host.indexOf("@")>0?t.host.split("@"):!1;b&&(t.auth=b.shift(),t.hostname=b.shift(),t.host=t.hostname)}return y=y||t.host&&g.length,y&&!w&&g.unshift(""),g.length>0?t.pathname=g.join("/"):(t.pathname=null,t.path=null),(t.pathname!==null||t.search!==null)&&(t.path=(t.pathname?t.pathname:"")+(t.search?t.search:"")),t.auth=r.auth||t.auth,t.slashes=t.slashes||r.slashes,t.href=t.format(),t};Pe.prototype.parseHost=function(){var r=this.host,e=DA.exec(r);e&&(e=e[0],e!==":"&&(this.port=e.substr(1)),r=r.substr(0,r.length-e.length)),r&&(this.hostname=r)};var $A=cu,zA=kA,HA=jA;/*!
 * @pixi/utils - v6.5.10
 * Compiled Thu, 06 Jul 2023 15:25:11 UTC
 *
 * @pixi/utils is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */var Vr={parse:$A,format:HA,resolve:zA};function _e(r){if(typeof r!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(r))}function py(r){var e=r.split("?")[0];return e.split("#")[0]}function XA(r){return r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function VA(r,e,t){return r.replace(new RegExp(XA(e),"g"),t)}function WA(r,e){for(var t="",n=0,i=-1,o=0,a,s=0;s<=r.length;++s){if(s<r.length)a=r.charCodeAt(s);else{if(a===47)break;a=47}if(a===47){if(!(i===s-1||o===1))if(i!==s-1&&o===2){if(t.length<2||n!==2||t.charCodeAt(t.length-1)!==46||t.charCodeAt(t.length-2)!==46){if(t.length>2){var u=t.lastIndexOf("/");if(u!==t.length-1){u===-1?(t="",n=0):(t=t.slice(0,u),n=t.length-1-t.lastIndexOf("/")),i=s,o=0;continue}}else if(t.length===2||t.length===1){t="",n=0,i=s,o=0;continue}}}else t.length>0?t+="/"+r.slice(i+1,s):t=r.slice(i+1,s),n=s-i-1;i=s,o=0}else a===46&&o!==-1?++o:o=-1}return t}var rb={toPosix:function(r){return VA(r,"\\","/")},isUrl:function(r){return/^https?:/.test(this.toPosix(r))},isDataUrl:function(r){return/^data:([a-z]+\/[a-z0-9-+.]+(;[a-z0-9-.!#$%*+.{}|~`]+=[a-z0-9-.!#$%*+.{}()_|~`]+)*)?(;base64)?,([a-z0-9!$&',()*+;=\-._~:@\/?%\s<>]*?)$/i.test(r)},hasProtocol:function(r){return/^[^/:]+:\//.test(this.toPosix(r))},getProtocol:function(r){_e(r),r=this.toPosix(r);var e="",t=/^file:\/\/\//.exec(r),n=/^[^/:]+:\/\//.exec(r),i=/^[^/:]+:\//.exec(r);if(t||n||i){var o=(t==null?void 0:t[0])||(n==null?void 0:n[0])||(i==null?void 0:i[0]);e=o,r=r.slice(o.length)}return e},toAbsolute:function(r,e,t){if(this.isDataUrl(r))return r;var n=py(this.toPosix(e??C.ADAPTER.getBaseUrl())),i=py(this.toPosix(t??this.rootname(n)));if(_e(r),r=this.toPosix(r),r.startsWith("/"))return rb.join(i,r.slice(1));var o=this.isAbsolute(r)?r:this.join(n,r);return o},normalize:function(r){if(r=this.toPosix(r),_e(r),r.length===0)return".";var e="",t=r.startsWith("/");this.hasProtocol(r)&&(e=this.rootname(r),r=r.slice(e.length));var n=r.endsWith("/");return r=WA(r),r.length>0&&n&&(r+="/"),t?"/"+r:e+r},isAbsolute:function(r){return _e(r),r=this.toPosix(r),this.hasProtocol(r)?!0:r.startsWith("/")},join:function(){for(var r=arguments,e,t=[],n=0;n<arguments.length;n++)t[n]=r[n];if(t.length===0)return".";for(var i,o=0;o<t.length;++o){var a=t[o];if(_e(a),a.length>0)if(i===void 0)i=a;else{var s=(e=t[o-1])!==null&&e!==void 0?e:"";this.extname(s)?i+="/../"+a:i+="/"+a}}return i===void 0?".":this.normalize(i)},dirname:function(r){if(_e(r),r.length===0)return".";r=this.toPosix(r);var e=r.charCodeAt(0),t=e===47,n=-1,i=!0,o=this.getProtocol(r),a=r;r=r.slice(o.length);for(var s=r.length-1;s>=1;--s)if(e=r.charCodeAt(s),e===47){if(!i){n=s;break}}else i=!1;return n===-1?t?"/":this.isUrl(a)?o+r:o:t&&n===1?"//":o+r.slice(0,n)},rootname:function(r){_e(r),r=this.toPosix(r);var e="";if(r.startsWith("/")?e="/":e=this.getProtocol(r),this.isUrl(r)){var t=r.indexOf("/",e.length);t!==-1?e=r.slice(0,t):e=r,e.endsWith("/")||(e+="/")}return e},basename:function(r,e){_e(r),e&&_e(e),r=this.toPosix(r);var t=0,n=-1,i=!0,o;if(e!==void 0&&e.length>0&&e.length<=r.length){if(e.length===r.length&&e===r)return"";var a=e.length-1,s=-1;for(o=r.length-1;o>=0;--o){var u=r.charCodeAt(o);if(u===47){if(!i){t=o+1;break}}else s===-1&&(i=!1,s=o+1),a>=0&&(u===e.charCodeAt(a)?--a===-1&&(n=o):(a=-1,n=s))}return t===n?n=s:n===-1&&(n=r.length),r.slice(t,n)}for(o=r.length-1;o>=0;--o)if(r.charCodeAt(o)===47){if(!i){t=o+1;break}}else n===-1&&(i=!1,n=o+1);return n===-1?"":r.slice(t,n)},extname:function(r){_e(r),r=this.toPosix(r);for(var e=-1,t=0,n=-1,i=!0,o=0,a=r.length-1;a>=0;--a){var s=r.charCodeAt(a);if(s===47){if(!i){t=a+1;break}continue}n===-1&&(i=!1,n=a+1),s===46?e===-1?e=a:o!==1&&(o=1):e!==-1&&(o=-1)}return e===-1||n===-1||o===0||o===1&&e===n-1&&e===t+1?"":r.slice(e,n)},parse:function(r){_e(r);var e={root:"",dir:"",base:"",ext:"",name:""};if(r.length===0)return e;r=this.toPosix(r);var t=r.charCodeAt(0),n=this.isAbsolute(r),i;e.root=this.rootname(r),n||this.hasProtocol(r)?i=1:i=0;for(var o=-1,a=0,s=-1,u=!0,l=r.length-1,f=0;l>=i;--l){if(t=r.charCodeAt(l),t===47){if(!u){a=l+1;break}continue}s===-1&&(u=!1,s=l+1),t===46?o===-1?o=l:f!==1&&(f=1):o!==-1&&(f=-1)}return o===-1||s===-1||f===0||f===1&&o===s-1&&o===a+1?s!==-1&&(a===0&&n?e.base=e.name=r.slice(1,s):e.base=e.name=r.slice(a,s)):(a===0&&n?(e.name=r.slice(1,o),e.base=r.slice(1,s)):(e.name=r.slice(a,o),e.base=r.slice(a,s)),e.ext=r.slice(o,s)),e.dir=this.dirname(r),e},sep:"/",delimiter:":"};C.RETINA_PREFIX=/@([0-9\.]+)x/;C.FAIL_IF_MAJOR_PERFORMANCE_CAVEAT=!1;var wh=!1,vy="6.5.10";function YA(){wh=!0}function nb(r){var e;if(!wh){if(C.ADAPTER.getNavigator().userAgent.toLowerCase().indexOf("chrome")>-1){var t=[`
 %c %c %c PixiJS `+vy+" - ✰ "+r+` ✰  %c  %c  http://www.pixijs.com/  %c %c ♥%c♥%c♥ 

`,"background: #ff66a5; padding:5px 0;","background: #ff66a5; padding:5px 0;","color: #ff66a5; background: #030307; padding:5px 0;","background: #ff66a5; padding:5px 0;","background: #ffc3dc; padding:5px 0;","background: #ff66a5; padding:5px 0;","color: #ff2424; background: #fff; padding:5px 0;","color: #ff2424; background: #fff; padding:5px 0;","color: #ff2424; background: #fff; padding:5px 0;"];(e=globalThis.console).log.apply(e,t)}else globalThis.console&&globalThis.console.log("PixiJS "+vy+" - "+r+" - http://www.pixijs.com/");wh=!0}}var El;function ib(){return typeof El>"u"&&(El=function(){var e={stencil:!0,failIfMajorPerformanceCaveat:C.FAIL_IF_MAJOR_PERFORMANCE_CAVEAT};try{if(!C.ADAPTER.getWebGLRenderingContext())return!1;var t=C.ADAPTER.createCanvas(),n=t.getContext("webgl",e)||t.getContext("experimental-webgl",e),i=!!(n&&n.getContextAttributes().stencil);if(n){var o=n.getExtension("WEBGL_lose_context");o&&o.loseContext()}return n=null,i}catch{return!1}}()),El}var qA="#f0f8ff",KA="#faebd7",ZA="#00ffff",JA="#7fffd4",QA="#f0ffff",tC="#f5f5dc",eC="#ffe4c4",rC="#000000",nC="#ffebcd",iC="#0000ff",oC="#8a2be2",aC="#a52a2a",sC="#deb887",uC="#5f9ea0",lC="#7fff00",fC="#d2691e",hC="#ff7f50",cC="#6495ed",dC="#fff8dc",pC="#dc143c",vC="#00ffff",yC="#00008b",mC="#008b8b",_C="#b8860b",gC="#a9a9a9",bC="#006400",xC="#a9a9a9",TC="#bdb76b",SC="#8b008b",EC="#556b2f",wC="#ff8c00",OC="#9932cc",PC="#8b0000",AC="#e9967a",CC="#8fbc8f",RC="#483d8b",IC="#2f4f4f",MC="#2f4f4f",DC="#00ced1",FC="#9400d3",NC="#ff1493",LC="#00bfff",BC="#696969",UC="#696969",GC="#1e90ff",jC="#b22222",kC="#fffaf0",$C="#228b22",zC="#ff00ff",HC="#dcdcdc",XC="#f8f8ff",VC="#daa520",WC="#ffd700",YC="#808080",qC="#008000",KC="#adff2f",ZC="#808080",JC="#f0fff0",QC="#ff69b4",t2="#cd5c5c",e2="#4b0082",r2="#fffff0",n2="#f0e68c",i2="#fff0f5",o2="#e6e6fa",a2="#7cfc00",s2="#fffacd",u2="#add8e6",l2="#f08080",f2="#e0ffff",h2="#fafad2",c2="#d3d3d3",d2="#90ee90",p2="#d3d3d3",v2="#ffb6c1",y2="#ffa07a",m2="#20b2aa",_2="#87cefa",g2="#778899",b2="#778899",x2="#b0c4de",T2="#ffffe0",S2="#00ff00",E2="#32cd32",w2="#faf0e6",O2="#ff00ff",P2="#800000",A2="#66cdaa",C2="#0000cd",R2="#ba55d3",I2="#9370db",M2="#3cb371",D2="#7b68ee",F2="#00fa9a",N2="#48d1cc",L2="#c71585",B2="#191970",U2="#f5fffa",G2="#ffe4e1",j2="#ffe4b5",k2="#ffdead",$2="#000080",z2="#fdf5e6",H2="#808000",X2="#6b8e23",V2="#ffa500",W2="#ff4500",Y2="#da70d6",q2="#eee8aa",K2="#98fb98",Z2="#afeeee",J2="#db7093",Q2="#ffefd5",tR="#ffdab9",eR="#cd853f",rR="#ffc0cb",nR="#dda0dd",iR="#b0e0e6",oR="#800080",aR="#663399",sR="#ff0000",uR="#bc8f8f",lR="#4169e1",fR="#8b4513",hR="#fa8072",cR="#f4a460",dR="#2e8b57",pR="#fff5ee",vR="#a0522d",yR="#c0c0c0",mR="#87ceeb",_R="#6a5acd",gR="#708090",bR="#708090",xR="#fffafa",TR="#00ff7f",SR="#4682b4",ER="#d2b48c",wR="#008080",OR="#d8bfd8",PR="#ff6347",AR="#40e0d0",CR="#ee82ee",RR="#f5deb3",IR="#ffffff",MR="#f5f5f5",DR="#ffff00",FR="#9acd32",NR={aliceblue:qA,antiquewhite:KA,aqua:ZA,aquamarine:JA,azure:QA,beige:tC,bisque:eC,black:rC,blanchedalmond:nC,blue:iC,blueviolet:oC,brown:aC,burlywood:sC,cadetblue:uC,chartreuse:lC,chocolate:fC,coral:hC,cornflowerblue:cC,cornsilk:dC,crimson:pC,cyan:vC,darkblue:yC,darkcyan:mC,darkgoldenrod:_C,darkgray:gC,darkgreen:bC,darkgrey:xC,darkkhaki:TC,darkmagenta:SC,darkolivegreen:EC,darkorange:wC,darkorchid:OC,darkred:PC,darksalmon:AC,darkseagreen:CC,darkslateblue:RC,darkslategray:IC,darkslategrey:MC,darkturquoise:DC,darkviolet:FC,deeppink:NC,deepskyblue:LC,dimgray:BC,dimgrey:UC,dodgerblue:GC,firebrick:jC,floralwhite:kC,forestgreen:$C,fuchsia:zC,gainsboro:HC,ghostwhite:XC,goldenrod:VC,gold:WC,gray:YC,green:qC,greenyellow:KC,grey:ZC,honeydew:JC,hotpink:QC,indianred:t2,indigo:e2,ivory:r2,khaki:n2,lavenderblush:i2,lavender:o2,lawngreen:a2,lemonchiffon:s2,lightblue:u2,lightcoral:l2,lightcyan:f2,lightgoldenrodyellow:h2,lightgray:c2,lightgreen:d2,lightgrey:p2,lightpink:v2,lightsalmon:y2,lightseagreen:m2,lightskyblue:_2,lightslategray:g2,lightslategrey:b2,lightsteelblue:x2,lightyellow:T2,lime:S2,limegreen:E2,linen:w2,magenta:O2,maroon:P2,mediumaquamarine:A2,mediumblue:C2,mediumorchid:R2,mediumpurple:I2,mediumseagreen:M2,mediumslateblue:D2,mediumspringgreen:F2,mediumturquoise:N2,mediumvioletred:L2,midnightblue:B2,mintcream:U2,mistyrose:G2,moccasin:j2,navajowhite:k2,navy:$2,oldlace:z2,olive:H2,olivedrab:X2,orange:V2,orangered:W2,orchid:Y2,palegoldenrod:q2,palegreen:K2,paleturquoise:Z2,palevioletred:J2,papayawhip:Q2,peachpuff:tR,peru:eR,pink:rR,plum:nR,powderblue:iR,purple:oR,rebeccapurple:aR,red:sR,rosybrown:uR,royalblue:lR,saddlebrown:fR,salmon:hR,sandybrown:cR,seagreen:dR,seashell:pR,sienna:vR,silver:yR,skyblue:mR,slateblue:_R,slategray:gR,slategrey:bR,snow:xR,springgreen:TR,steelblue:SR,tan:ER,teal:wR,thistle:OR,tomato:PR,turquoise:AR,violet:CR,wheat:RR,white:IR,whitesmoke:MR,yellow:DR,yellowgreen:FR};function Bt(r,e){return e===void 0&&(e=[]),e[0]=(r>>16&255)/255,e[1]=(r>>8&255)/255,e[2]=(r&255)/255,e}function $d(r){var e=r.toString(16);return e="000000".substring(0,6-e.length)+e,"#"+e}function zd(r){return typeof r=="string"&&(r=NR[r.toLowerCase()]||r,r[0]==="#"&&(r=r.slice(1))),parseInt(r,16)}function ve(r){return(r[0]*255<<16)+(r[1]*255<<8)+(r[2]*255|0)}function LR(){for(var r=[],e=[],t=0;t<32;t++)r[t]=t,e[t]=t;r[B.NORMAL_NPM]=B.NORMAL,r[B.ADD_NPM]=B.ADD,r[B.SCREEN_NPM]=B.SCREEN,e[B.NORMAL]=B.NORMAL_NPM,e[B.ADD]=B.ADD_NPM,e[B.SCREEN]=B.SCREEN_NPM;var n=[];return n.push(e),n.push(r),n}var Hd=LR();function Xd(r,e){return Hd[e?1:0][r]}function ob(r,e,t,n){return t=t||new Float32Array(4),n||n===void 0?(t[0]=r[0]*e,t[1]=r[1]*e,t[2]=r[2]*e):(t[0]=r[0],t[1]=r[1],t[2]=r[2]),t[3]=e,t}function du(r,e){if(e===1)return(e*255<<24)+r;if(e===0)return 0;var t=r>>16&255,n=r>>8&255,i=r&255;return t=t*e+.5|0,n=n*e+.5|0,i=i*e+.5|0,(e*255<<24)+(t<<16)+(n<<8)+i}function Vd(r,e,t,n){return t=t||new Float32Array(4),t[0]=(r>>16&255)/255,t[1]=(r>>8&255)/255,t[2]=(r&255)/255,(n||n===void 0)&&(t[0]*=e,t[1]*=e,t[2]*=e),t[3]=e,t}function ab(r,e){e===void 0&&(e=null);var t=r*6;if(e=e||new Uint16Array(t),e.length!==t)throw new Error("Out buffer length is incorrect, got "+e.length+" and expected "+t);for(var n=0,i=0;n<t;n+=6,i+=4)e[n+0]=i+0,e[n+1]=i+1,e[n+2]=i+2,e[n+3]=i+0,e[n+4]=i+2,e[n+5]=i+3;return e}function pu(r){if(r.BYTES_PER_ELEMENT===4)return r instanceof Float32Array?"Float32Array":r instanceof Uint32Array?"Uint32Array":"Int32Array";if(r.BYTES_PER_ELEMENT===2){if(r instanceof Uint16Array)return"Uint16Array"}else if(r.BYTES_PER_ELEMENT===1&&r instanceof Uint8Array)return"Uint8Array";return null}var BR={Float32Array,Uint32Array,Int32Array,Uint8Array};function UR(r,e){for(var t=0,n=0,i={},o=0;o<r.length;o++)n+=e[o],t+=r[o].length;for(var a=new ArrayBuffer(t*4),s=null,u=0,o=0;o<r.length;o++){var l=e[o],f=r[o],c=pu(f);i[c]||(i[c]=new BR[c](a)),s=i[c];for(var h=0;h<f.length;h++){var d=(h/l|0)*n+u,p=h%l;s[d+p]=f[h]}u+=l}return new Float32Array(a)}function vo(r){return r+=r===0?1:0,--r,r|=r>>>1,r|=r>>>2,r|=r>>>4,r|=r>>>8,r|=r>>>16,r+1}function Oh(r){return!(r&r-1)&&!!r}function Ph(r){var e=(r>65535?1:0)<<4;r>>>=e;var t=(r>255?1:0)<<3;return r>>>=t,e|=t,t=(r>15?1:0)<<2,r>>>=t,e|=t,t=(r>3?1:0)<<1,r>>>=t,e|=t,e|r>>1}function Zr(r,e,t){var n=r.length,i;if(!(e>=n||t===0)){t=e+t>n?n-e:t;var o=n-t;for(i=e;i<o;++i)r[i]=r[i+t];r.length=o}}function Wr(r){return r===0?0:r<0?-1:1}var GR=0;function wr(){return++GR}var yy={};function Vt(r,e,t){if(t===void 0&&(t=3),!yy[e]){var n=new Error().stack;typeof n>"u"?console.warn("PixiJS Deprecation Warning: ",e+`
Deprecated since v`+r):(n=n.split(`
`).splice(t).join(`
`),console.groupCollapsed?(console.groupCollapsed("%cPixiJS Deprecation Warning: %c%s","color:#614108;background:#fffbe6","font-weight:normal;color:#614108;background:#fffbe6",e+`
Deprecated since v`+r),console.warn(n),console.groupEnd()):(console.warn("PixiJS Deprecation Warning: ",e+`
Deprecated since v`+r),console.warn(n))),yy[e]=!0}}var Ah={},Zt=Object.create(null),ae=Object.create(null);function jR(){var r;for(r in Zt)Zt[r].destroy();for(r in ae)ae[r].destroy()}function kR(){var r;for(r in Zt)delete Zt[r];for(r in ae)delete ae[r]}var Ch=function(){function r(e,t,n){this.canvas=C.ADAPTER.createCanvas(),this.context=this.canvas.getContext("2d"),this.resolution=n||C.RESOLUTION,this.resize(e,t)}return r.prototype.clear=function(){this.context.setTransform(1,0,0,1,0,0),this.context.clearRect(0,0,this.canvas.width,this.canvas.height)},r.prototype.resize=function(e,t){this.canvas.width=Math.round(e*this.resolution),this.canvas.height=Math.round(t*this.resolution)},r.prototype.destroy=function(){this.context=null,this.canvas=null},Object.defineProperty(r.prototype,"width",{get:function(){return this.canvas.width},set:function(e){this.canvas.width=Math.round(e)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"height",{get:function(){return this.canvas.height},set:function(e){this.canvas.height=Math.round(e)},enumerable:!1,configurable:!0}),r}();function sb(r){var e=r.width,t=r.height,n=r.getContext("2d",{willReadFrequently:!0}),i=n.getImageData(0,0,e,t),o=i.data,a=o.length,s={top:null,left:null,right:null,bottom:null},u=null,l,f,c;for(l=0;l<a;l+=4)o[l+3]!==0&&(f=l/4%e,c=~~(l/4/e),s.top===null&&(s.top=c),(s.left===null||f<s.left)&&(s.left=f),(s.right===null||s.right<f)&&(s.right=f+1),(s.bottom===null||s.bottom<c)&&(s.bottom=c));return s.top!==null&&(e=s.right-s.left,t=s.bottom-s.top+1,u=n.getImageData(s.left,s.top,e,t)),{height:t,width:e,data:u}}var ub=/^\s*data:(?:([\w-]+)\/([\w+.-]+))?(?:;charset=([\w-]+))?(?:;(base64))?,(.*)/i;function $R(r){var e=ub.exec(r);if(e)return{mediaType:e[1]?e[1].toLowerCase():void 0,subType:e[2]?e[2].toLowerCase():void 0,charset:e[3]?e[3].toLowerCase():void 0,encoding:e[4]?e[4].toLowerCase():void 0,data:e[5]}}var aa;function lb(r,e){if(e===void 0&&(e=globalThis.location),r.indexOf("data:")===0)return"";e=e||globalThis.location,aa||(aa=document.createElement("a")),aa.href=r;var t=Vr.parse(aa.href),n=!t.port&&e.port===""||t.port===e.port;return t.hostname!==e.hostname||!n||t.protocol!==e.protocol?"anonymous":""}function yo(r,e){var t=C.RETINA_PREFIX.exec(r);return t?parseFloat(t[1]):e!==void 0?e:1}const zR=Object.freeze(Object.defineProperty({__proto__:null,BaseTextureCache:ae,CanvasRenderTarget:Ch,DATA_URI:ub,EventEmitter:cn,ProgramCache:Ah,TextureCache:Zt,clearTextureCache:kR,correctBlendMode:Xd,createIndicesForQuads:ab,decomposeDataUri:$R,deprecation:Vt,destroyTextureCache:jR,determineCrossOrigin:lb,earcut:Nd,getBufferType:pu,getResolutionOfUrl:yo,hex2rgb:Bt,hex2string:$d,interleaveTypedArrays:UR,isMobile:de,isPow2:Oh,isWebGLSupported:ib,log2:Ph,nextPow2:vo,path:rb,premultiplyBlendMode:Hd,premultiplyRgba:ob,premultiplyTint:du,premultiplyTintToRgba:Vd,removeItems:Zr,rgb2hex:ve,sayHello:nb,sign:Wr,skipHello:YA,string2hex:zd,trimCanvas:sb,uid:wr,url:Vr},Symbol.toStringTag,{value:"Module"}));/*!
 * @pixi/math - v6.5.10
 * Compiled Thu, 06 Jul 2023 15:25:11 UTC
 *
 * @pixi/math is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */var Kt=Math.PI*2,fb=180/Math.PI,Or=Math.PI/180,Rt;(function(r){r[r.POLY=0]="POLY",r[r.RECT=1]="RECT",r[r.CIRC=2]="CIRC",r[r.ELIP=3]="ELIP",r[r.RREC=4]="RREC"})(Rt||(Rt={}));var X=function(){function r(e,t){e===void 0&&(e=0),t===void 0&&(t=0),this.x=0,this.y=0,this.x=e,this.y=t}return r.prototype.clone=function(){return new r(this.x,this.y)},r.prototype.copyFrom=function(e){return this.set(e.x,e.y),this},r.prototype.copyTo=function(e){return e.set(this.x,this.y),e},r.prototype.equals=function(e){return e.x===this.x&&e.y===this.y},r.prototype.set=function(e,t){return e===void 0&&(e=0),t===void 0&&(t=e),this.x=e,this.y=t,this},r.prototype.toString=function(){return"[@pixi/math:Point x="+this.x+" y="+this.y+"]"},r}(),sa=[new X,new X,new X,new X],K=function(){function r(e,t,n,i){e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0),i===void 0&&(i=0),this.x=Number(e),this.y=Number(t),this.width=Number(n),this.height=Number(i),this.type=Rt.RECT}return Object.defineProperty(r.prototype,"left",{get:function(){return this.x},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"right",{get:function(){return this.x+this.width},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"top",{get:function(){return this.y},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"bottom",{get:function(){return this.y+this.height},enumerable:!1,configurable:!0}),Object.defineProperty(r,"EMPTY",{get:function(){return new r(0,0,0,0)},enumerable:!1,configurable:!0}),r.prototype.clone=function(){return new r(this.x,this.y,this.width,this.height)},r.prototype.copyFrom=function(e){return this.x=e.x,this.y=e.y,this.width=e.width,this.height=e.height,this},r.prototype.copyTo=function(e){return e.x=this.x,e.y=this.y,e.width=this.width,e.height=this.height,e},r.prototype.contains=function(e,t){return this.width<=0||this.height<=0?!1:e>=this.x&&e<this.x+this.width&&t>=this.y&&t<this.y+this.height},r.prototype.intersects=function(e,t){if(!t){var n=this.x<e.x?e.x:this.x,i=this.right>e.right?e.right:this.right;if(i<=n)return!1;var o=this.y<e.y?e.y:this.y,a=this.bottom>e.bottom?e.bottom:this.bottom;return a>o}var s=this.left,u=this.right,l=this.top,f=this.bottom;if(u<=s||f<=l)return!1;var c=sa[0].set(e.left,e.top),h=sa[1].set(e.left,e.bottom),d=sa[2].set(e.right,e.top),p=sa[3].set(e.right,e.bottom);if(d.x<=c.x||h.y<=c.y)return!1;var v=Math.sign(t.a*t.d-t.b*t.c);if(v===0||(t.apply(c,c),t.apply(h,h),t.apply(d,d),t.apply(p,p),Math.max(c.x,h.x,d.x,p.x)<=s||Math.min(c.x,h.x,d.x,p.x)>=u||Math.max(c.y,h.y,d.y,p.y)<=l||Math.min(c.y,h.y,d.y,p.y)>=f))return!1;var y=v*(h.y-c.y),m=v*(c.x-h.x),g=y*s+m*l,_=y*u+m*l,x=y*s+m*f,b=y*u+m*f;if(Math.max(g,_,x,b)<=y*c.x+m*c.y||Math.min(g,_,x,b)>=y*p.x+m*p.y)return!1;var T=v*(c.y-d.y),S=v*(d.x-c.x),A=T*s+S*l,E=T*u+S*l,w=T*s+S*f,D=T*u+S*f;return!(Math.max(A,E,w,D)<=T*c.x+S*c.y||Math.min(A,E,w,D)>=T*p.x+S*p.y)},r.prototype.pad=function(e,t){return e===void 0&&(e=0),t===void 0&&(t=e),this.x-=e,this.y-=t,this.width+=e*2,this.height+=t*2,this},r.prototype.fit=function(e){var t=Math.max(this.x,e.x),n=Math.min(this.x+this.width,e.x+e.width),i=Math.max(this.y,e.y),o=Math.min(this.y+this.height,e.y+e.height);return this.x=t,this.width=Math.max(n-t,0),this.y=i,this.height=Math.max(o-i,0),this},r.prototype.ceil=function(e,t){e===void 0&&(e=1),t===void 0&&(t=.001);var n=Math.ceil((this.x+this.width-t)*e)/e,i=Math.ceil((this.y+this.height-t)*e)/e;return this.x=Math.floor((this.x+t)*e)/e,this.y=Math.floor((this.y+t)*e)/e,this.width=n-this.x,this.height=i-this.y,this},r.prototype.enlarge=function(e){var t=Math.min(this.x,e.x),n=Math.max(this.x+this.width,e.x+e.width),i=Math.min(this.y,e.y),o=Math.max(this.y+this.height,e.y+e.height);return this.x=t,this.width=n-t,this.y=i,this.height=o-i,this},r.prototype.toString=function(){return"[@pixi/math:Rectangle x="+this.x+" y="+this.y+" width="+this.width+" height="+this.height+"]"},r}(),hb=function(){function r(e,t,n){e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0),this.x=e,this.y=t,this.radius=n,this.type=Rt.CIRC}return r.prototype.clone=function(){return new r(this.x,this.y,this.radius)},r.prototype.contains=function(e,t){if(this.radius<=0)return!1;var n=this.radius*this.radius,i=this.x-e,o=this.y-t;return i*=i,o*=o,i+o<=n},r.prototype.getBounds=function(){return new K(this.x-this.radius,this.y-this.radius,this.radius*2,this.radius*2)},r.prototype.toString=function(){return"[@pixi/math:Circle x="+this.x+" y="+this.y+" radius="+this.radius+"]"},r}(),cb=function(){function r(e,t,n,i){e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0),i===void 0&&(i=0),this.x=e,this.y=t,this.width=n,this.height=i,this.type=Rt.ELIP}return r.prototype.clone=function(){return new r(this.x,this.y,this.width,this.height)},r.prototype.contains=function(e,t){if(this.width<=0||this.height<=0)return!1;var n=(e-this.x)/this.width,i=(t-this.y)/this.height;return n*=n,i*=i,n+i<=1},r.prototype.getBounds=function(){return new K(this.x-this.width,this.y-this.height,this.width,this.height)},r.prototype.toString=function(){return"[@pixi/math:Ellipse x="+this.x+" y="+this.y+" width="+this.width+" height="+this.height+"]"},r}(),Yi=function(){function r(){for(var e=arguments,t=[],n=0;n<arguments.length;n++)t[n]=e[n];var i=Array.isArray(t[0])?t[0]:t;if(typeof i[0]!="number"){for(var o=[],a=0,s=i.length;a<s;a++)o.push(i[a].x,i[a].y);i=o}this.points=i,this.type=Rt.POLY,this.closeStroke=!0}return r.prototype.clone=function(){var e=this.points.slice(),t=new r(e);return t.closeStroke=this.closeStroke,t},r.prototype.contains=function(e,t){for(var n=!1,i=this.points.length/2,o=0,a=i-1;o<i;a=o++){var s=this.points[o*2],u=this.points[o*2+1],l=this.points[a*2],f=this.points[a*2+1],c=u>t!=f>t&&e<(l-s)*((t-u)/(f-u))+s;c&&(n=!n)}return n},r.prototype.toString=function(){return"[@pixi/math:Polygon"+("closeStroke="+this.closeStroke)+("points="+this.points.reduce(function(e,t){return e+", "+t},"")+"]")},r}(),db=function(){function r(e,t,n,i,o){e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0),i===void 0&&(i=0),o===void 0&&(o=20),this.x=e,this.y=t,this.width=n,this.height=i,this.radius=o,this.type=Rt.RREC}return r.prototype.clone=function(){return new r(this.x,this.y,this.width,this.height,this.radius)},r.prototype.contains=function(e,t){if(this.width<=0||this.height<=0)return!1;if(e>=this.x&&e<=this.x+this.width&&t>=this.y&&t<=this.y+this.height){var n=Math.max(0,Math.min(this.radius,Math.min(this.width,this.height)/2));if(t>=this.y+n&&t<=this.y+this.height-n||e>=this.x+n&&e<=this.x+this.width-n)return!0;var i=e-(this.x+n),o=t-(this.y+n),a=n*n;if(i*i+o*o<=a||(i=e-(this.x+this.width-n),i*i+o*o<=a)||(o=t-(this.y+this.height-n),i*i+o*o<=a)||(i=e-(this.x+n),i*i+o*o<=a))return!0}return!1},r.prototype.toString=function(){return"[@pixi/math:RoundedRectangle x="+this.x+" y="+this.y+("width="+this.width+" height="+this.height+" radius="+this.radius+"]")},r}(),gr=function(){function r(e,t,n,i){n===void 0&&(n=0),i===void 0&&(i=0),this._x=n,this._y=i,this.cb=e,this.scope=t}return r.prototype.clone=function(e,t){return e===void 0&&(e=this.cb),t===void 0&&(t=this.scope),new r(e,t,this._x,this._y)},r.prototype.set=function(e,t){return e===void 0&&(e=0),t===void 0&&(t=e),(this._x!==e||this._y!==t)&&(this._x=e,this._y=t,this.cb.call(this.scope)),this},r.prototype.copyFrom=function(e){return(this._x!==e.x||this._y!==e.y)&&(this._x=e.x,this._y=e.y,this.cb.call(this.scope)),this},r.prototype.copyTo=function(e){return e.set(this._x,this._y),e},r.prototype.equals=function(e){return e.x===this._x&&e.y===this._y},r.prototype.toString=function(){return"[@pixi/math:ObservablePoint x=0 y=0 scope="+this.scope+"]"},Object.defineProperty(r.prototype,"x",{get:function(){return this._x},set:function(e){this._x!==e&&(this._x=e,this.cb.call(this.scope))},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"y",{get:function(){return this._y},set:function(e){this._y!==e&&(this._y=e,this.cb.call(this.scope))},enumerable:!1,configurable:!0}),r}(),Pt=function(){function r(e,t,n,i,o,a){e===void 0&&(e=1),t===void 0&&(t=0),n===void 0&&(n=0),i===void 0&&(i=1),o===void 0&&(o=0),a===void 0&&(a=0),this.array=null,this.a=e,this.b=t,this.c=n,this.d=i,this.tx=o,this.ty=a}return r.prototype.fromArray=function(e){this.a=e[0],this.b=e[1],this.c=e[3],this.d=e[4],this.tx=e[2],this.ty=e[5]},r.prototype.set=function(e,t,n,i,o,a){return this.a=e,this.b=t,this.c=n,this.d=i,this.tx=o,this.ty=a,this},r.prototype.toArray=function(e,t){this.array||(this.array=new Float32Array(9));var n=t||this.array;return e?(n[0]=this.a,n[1]=this.b,n[2]=0,n[3]=this.c,n[4]=this.d,n[5]=0,n[6]=this.tx,n[7]=this.ty,n[8]=1):(n[0]=this.a,n[1]=this.c,n[2]=this.tx,n[3]=this.b,n[4]=this.d,n[5]=this.ty,n[6]=0,n[7]=0,n[8]=1),n},r.prototype.apply=function(e,t){t=t||new X;var n=e.x,i=e.y;return t.x=this.a*n+this.c*i+this.tx,t.y=this.b*n+this.d*i+this.ty,t},r.prototype.applyInverse=function(e,t){t=t||new X;var n=1/(this.a*this.d+this.c*-this.b),i=e.x,o=e.y;return t.x=this.d*n*i+-this.c*n*o+(this.ty*this.c-this.tx*this.d)*n,t.y=this.a*n*o+-this.b*n*i+(-this.ty*this.a+this.tx*this.b)*n,t},r.prototype.translate=function(e,t){return this.tx+=e,this.ty+=t,this},r.prototype.scale=function(e,t){return this.a*=e,this.d*=t,this.c*=e,this.b*=t,this.tx*=e,this.ty*=t,this},r.prototype.rotate=function(e){var t=Math.cos(e),n=Math.sin(e),i=this.a,o=this.c,a=this.tx;return this.a=i*t-this.b*n,this.b=i*n+this.b*t,this.c=o*t-this.d*n,this.d=o*n+this.d*t,this.tx=a*t-this.ty*n,this.ty=a*n+this.ty*t,this},r.prototype.append=function(e){var t=this.a,n=this.b,i=this.c,o=this.d;return this.a=e.a*t+e.b*i,this.b=e.a*n+e.b*o,this.c=e.c*t+e.d*i,this.d=e.c*n+e.d*o,this.tx=e.tx*t+e.ty*i+this.tx,this.ty=e.tx*n+e.ty*o+this.ty,this},r.prototype.setTransform=function(e,t,n,i,o,a,s,u,l){return this.a=Math.cos(s+l)*o,this.b=Math.sin(s+l)*o,this.c=-Math.sin(s-u)*a,this.d=Math.cos(s-u)*a,this.tx=e-(n*this.a+i*this.c),this.ty=t-(n*this.b+i*this.d),this},r.prototype.prepend=function(e){var t=this.tx;if(e.a!==1||e.b!==0||e.c!==0||e.d!==1){var n=this.a,i=this.c;this.a=n*e.a+this.b*e.c,this.b=n*e.b+this.b*e.d,this.c=i*e.a+this.d*e.c,this.d=i*e.b+this.d*e.d}return this.tx=t*e.a+this.ty*e.c+e.tx,this.ty=t*e.b+this.ty*e.d+e.ty,this},r.prototype.decompose=function(e){var t=this.a,n=this.b,i=this.c,o=this.d,a=e.pivot,s=-Math.atan2(-i,o),u=Math.atan2(n,t),l=Math.abs(s+u);return l<1e-5||Math.abs(Kt-l)<1e-5?(e.rotation=u,e.skew.x=e.skew.y=0):(e.rotation=0,e.skew.x=s,e.skew.y=u),e.scale.x=Math.sqrt(t*t+n*n),e.scale.y=Math.sqrt(i*i+o*o),e.position.x=this.tx+(a.x*t+a.y*i),e.position.y=this.ty+(a.x*n+a.y*o),e},r.prototype.invert=function(){var e=this.a,t=this.b,n=this.c,i=this.d,o=this.tx,a=e*i-t*n;return this.a=i/a,this.b=-t/a,this.c=-n/a,this.d=e/a,this.tx=(n*this.ty-i*o)/a,this.ty=-(e*this.ty-t*o)/a,this},r.prototype.identity=function(){return this.a=1,this.b=0,this.c=0,this.d=1,this.tx=0,this.ty=0,this},r.prototype.clone=function(){var e=new r;return e.a=this.a,e.b=this.b,e.c=this.c,e.d=this.d,e.tx=this.tx,e.ty=this.ty,e},r.prototype.copyTo=function(e){return e.a=this.a,e.b=this.b,e.c=this.c,e.d=this.d,e.tx=this.tx,e.ty=this.ty,e},r.prototype.copyFrom=function(e){return this.a=e.a,this.b=e.b,this.c=e.c,this.d=e.d,this.tx=e.tx,this.ty=e.ty,this},r.prototype.toString=function(){return"[@pixi/math:Matrix a="+this.a+" b="+this.b+" c="+this.c+" d="+this.d+" tx="+this.tx+" ty="+this.ty+"]"},Object.defineProperty(r,"IDENTITY",{get:function(){return new r},enumerable:!1,configurable:!0}),Object.defineProperty(r,"TEMP_MATRIX",{get:function(){return new r},enumerable:!1,configurable:!0}),r}(),jr=[1,1,0,-1,-1,-1,0,1,1,1,0,-1,-1,-1,0,1],kr=[0,1,1,1,0,-1,-1,-1,0,1,1,1,0,-1,-1,-1],$r=[0,-1,-1,-1,0,1,1,1,0,1,1,1,0,-1,-1,-1],zr=[1,1,0,-1,-1,-1,0,1,-1,-1,0,1,1,1,0,-1],Rh=[],pb=[],ua=Math.sign;function HR(){for(var r=0;r<16;r++){var e=[];Rh.push(e);for(var t=0;t<16;t++)for(var n=ua(jr[r]*jr[t]+$r[r]*kr[t]),i=ua(kr[r]*jr[t]+zr[r]*kr[t]),o=ua(jr[r]*$r[t]+$r[r]*zr[t]),a=ua(kr[r]*$r[t]+zr[r]*zr[t]),s=0;s<16;s++)if(jr[s]===n&&kr[s]===i&&$r[s]===o&&zr[s]===a){e.push(s);break}}for(var r=0;r<16;r++){var u=new Pt;u.set(jr[r],kr[r],$r[r],zr[r],0,0),pb.push(u)}}HR();var dt={E:0,SE:1,S:2,SW:3,W:4,NW:5,N:6,NE:7,MIRROR_VERTICAL:8,MAIN_DIAGONAL:10,MIRROR_HORIZONTAL:12,REVERSE_DIAGONAL:14,uX:function(r){return jr[r]},uY:function(r){return kr[r]},vX:function(r){return $r[r]},vY:function(r){return zr[r]},inv:function(r){return r&8?r&15:-r&7},add:function(r,e){return Rh[r][e]},sub:function(r,e){return Rh[r][dt.inv(e)]},rotate180:function(r){return r^4},isVertical:function(r){return(r&3)===2},byDirection:function(r,e){return Math.abs(r)*2<=Math.abs(e)?e>=0?dt.S:dt.N:Math.abs(e)*2<=Math.abs(r)?r>0?dt.E:dt.W:e>0?r>0?dt.SE:dt.SW:r>0?dt.NE:dt.NW},matrixAppendRotationInv:function(r,e,t,n){t===void 0&&(t=0),n===void 0&&(n=0);var i=pb[dt.inv(e)];i.tx=t,i.ty=n,r.append(i)}},Wd=function(){function r(){this.worldTransform=new Pt,this.localTransform=new Pt,this.position=new gr(this.onChange,this,0,0),this.scale=new gr(this.onChange,this,1,1),this.pivot=new gr(this.onChange,this,0,0),this.skew=new gr(this.updateSkew,this,0,0),this._rotation=0,this._cx=1,this._sx=0,this._cy=0,this._sy=1,this._localID=0,this._currentLocalID=0,this._worldID=0,this._parentID=0}return r.prototype.onChange=function(){this._localID++},r.prototype.updateSkew=function(){this._cx=Math.cos(this._rotation+this.skew.y),this._sx=Math.sin(this._rotation+this.skew.y),this._cy=-Math.sin(this._rotation-this.skew.x),this._sy=Math.cos(this._rotation-this.skew.x),this._localID++},r.prototype.toString=function(){return"[@pixi/math:Transform "+("position=("+this.position.x+", "+this.position.y+") ")+("rotation="+this.rotation+" ")+("scale=("+this.scale.x+", "+this.scale.y+") ")+("skew=("+this.skew.x+", "+this.skew.y+") ")+"]"},r.prototype.updateLocalTransform=function(){var e=this.localTransform;this._localID!==this._currentLocalID&&(e.a=this._cx*this.scale.x,e.b=this._sx*this.scale.x,e.c=this._cy*this.scale.y,e.d=this._sy*this.scale.y,e.tx=this.position.x-(this.pivot.x*e.a+this.pivot.y*e.c),e.ty=this.position.y-(this.pivot.x*e.b+this.pivot.y*e.d),this._currentLocalID=this._localID,this._parentID=-1)},r.prototype.updateTransform=function(e){var t=this.localTransform;if(this._localID!==this._currentLocalID&&(t.a=this._cx*this.scale.x,t.b=this._sx*this.scale.x,t.c=this._cy*this.scale.y,t.d=this._sy*this.scale.y,t.tx=this.position.x-(this.pivot.x*t.a+this.pivot.y*t.c),t.ty=this.position.y-(this.pivot.x*t.b+this.pivot.y*t.d),this._currentLocalID=this._localID,this._parentID=-1),this._parentID!==e._worldID){var n=e.worldTransform,i=this.worldTransform;i.a=t.a*n.a+t.b*n.c,i.b=t.a*n.b+t.b*n.d,i.c=t.c*n.a+t.d*n.c,i.d=t.c*n.b+t.d*n.d,i.tx=t.tx*n.a+t.ty*n.c+n.tx,i.ty=t.tx*n.b+t.ty*n.d+n.ty,this._parentID=e._worldID,this._worldID++}},r.prototype.setFromMatrix=function(e){e.decompose(this),this._localID++},Object.defineProperty(r.prototype,"rotation",{get:function(){return this._rotation},set:function(e){this._rotation!==e&&(this._rotation=e,this.updateSkew())},enumerable:!1,configurable:!0}),r.IDENTITY=new r,r}();/*!
 * @pixi/display - v6.5.10
 * Compiled Thu, 06 Jul 2023 15:25:11 UTC
 *
 * @pixi/display is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */C.SORTABLE_CHILDREN=!1;var mo=function(){function r(){this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0,this.rect=null,this.updateID=-1}return r.prototype.isEmpty=function(){return this.minX>this.maxX||this.minY>this.maxY},r.prototype.clear=function(){this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0},r.prototype.getRectangle=function(e){return this.minX>this.maxX||this.minY>this.maxY?K.EMPTY:(e=e||new K(0,0,1,1),e.x=this.minX,e.y=this.minY,e.width=this.maxX-this.minX,e.height=this.maxY-this.minY,e)},r.prototype.addPoint=function(e){this.minX=Math.min(this.minX,e.x),this.maxX=Math.max(this.maxX,e.x),this.minY=Math.min(this.minY,e.y),this.maxY=Math.max(this.maxY,e.y)},r.prototype.addPointMatrix=function(e,t){var n=e.a,i=e.b,o=e.c,a=e.d,s=e.tx,u=e.ty,l=n*t.x+o*t.y+s,f=i*t.x+a*t.y+u;this.minX=Math.min(this.minX,l),this.maxX=Math.max(this.maxX,l),this.minY=Math.min(this.minY,f),this.maxY=Math.max(this.maxY,f)},r.prototype.addQuad=function(e){var t=this.minX,n=this.minY,i=this.maxX,o=this.maxY,a=e[0],s=e[1];t=a<t?a:t,n=s<n?s:n,i=a>i?a:i,o=s>o?s:o,a=e[2],s=e[3],t=a<t?a:t,n=s<n?s:n,i=a>i?a:i,o=s>o?s:o,a=e[4],s=e[5],t=a<t?a:t,n=s<n?s:n,i=a>i?a:i,o=s>o?s:o,a=e[6],s=e[7],t=a<t?a:t,n=s<n?s:n,i=a>i?a:i,o=s>o?s:o,this.minX=t,this.minY=n,this.maxX=i,this.maxY=o},r.prototype.addFrame=function(e,t,n,i,o){this.addFrameMatrix(e.worldTransform,t,n,i,o)},r.prototype.addFrameMatrix=function(e,t,n,i,o){var a=e.a,s=e.b,u=e.c,l=e.d,f=e.tx,c=e.ty,h=this.minX,d=this.minY,p=this.maxX,v=this.maxY,y=a*t+u*n+f,m=s*t+l*n+c;h=y<h?y:h,d=m<d?m:d,p=y>p?y:p,v=m>v?m:v,y=a*i+u*n+f,m=s*i+l*n+c,h=y<h?y:h,d=m<d?m:d,p=y>p?y:p,v=m>v?m:v,y=a*t+u*o+f,m=s*t+l*o+c,h=y<h?y:h,d=m<d?m:d,p=y>p?y:p,v=m>v?m:v,y=a*i+u*o+f,m=s*i+l*o+c,h=y<h?y:h,d=m<d?m:d,p=y>p?y:p,v=m>v?m:v,this.minX=h,this.minY=d,this.maxX=p,this.maxY=v},r.prototype.addVertexData=function(e,t,n){for(var i=this.minX,o=this.minY,a=this.maxX,s=this.maxY,u=t;u<n;u+=2){var l=e[u],f=e[u+1];i=l<i?l:i,o=f<o?f:o,a=l>a?l:a,s=f>s?f:s}this.minX=i,this.minY=o,this.maxX=a,this.maxY=s},r.prototype.addVertices=function(e,t,n,i){this.addVerticesMatrix(e.worldTransform,t,n,i)},r.prototype.addVerticesMatrix=function(e,t,n,i,o,a){o===void 0&&(o=0),a===void 0&&(a=o);for(var s=e.a,u=e.b,l=e.c,f=e.d,c=e.tx,h=e.ty,d=this.minX,p=this.minY,v=this.maxX,y=this.maxY,m=n;m<i;m+=2){var g=t[m],_=t[m+1],x=s*g+l*_+c,b=f*_+u*g+h;d=Math.min(d,x-o),v=Math.max(v,x+o),p=Math.min(p,b-a),y=Math.max(y,b+a)}this.minX=d,this.minY=p,this.maxX=v,this.maxY=y},r.prototype.addBounds=function(e){var t=this.minX,n=this.minY,i=this.maxX,o=this.maxY;this.minX=e.minX<t?e.minX:t,this.minY=e.minY<n?e.minY:n,this.maxX=e.maxX>i?e.maxX:i,this.maxY=e.maxY>o?e.maxY:o},r.prototype.addBoundsMask=function(e,t){var n=e.minX>t.minX?e.minX:t.minX,i=e.minY>t.minY?e.minY:t.minY,o=e.maxX<t.maxX?e.maxX:t.maxX,a=e.maxY<t.maxY?e.maxY:t.maxY;if(n<=o&&i<=a){var s=this.minX,u=this.minY,l=this.maxX,f=this.maxY;this.minX=n<s?n:s,this.minY=i<u?i:u,this.maxX=o>l?o:l,this.maxY=a>f?a:f}},r.prototype.addBoundsMatrix=function(e,t){this.addFrameMatrix(t,e.minX,e.minY,e.maxX,e.maxY)},r.prototype.addBoundsArea=function(e,t){var n=e.minX>t.x?e.minX:t.x,i=e.minY>t.y?e.minY:t.y,o=e.maxX<t.x+t.width?e.maxX:t.x+t.width,a=e.maxY<t.y+t.height?e.maxY:t.y+t.height;if(n<=o&&i<=a){var s=this.minX,u=this.minY,l=this.maxX,f=this.maxY;this.minX=n<s?n:s,this.minY=i<u?i:u,this.maxX=o>l?o:l,this.maxY=a>f?a:f}},r.prototype.pad=function(e,t){e===void 0&&(e=0),t===void 0&&(t=e),this.isEmpty()||(this.minX-=e,this.maxX+=e,this.minY-=t,this.maxY+=t)},r.prototype.addFramePad=function(e,t,n,i,o,a){e-=o,t-=a,n+=o,i+=a,this.minX=this.minX<e?this.minX:e,this.maxX=this.maxX>n?this.maxX:n,this.minY=this.minY<t?this.minY:t,this.maxY=this.maxY>i?this.maxY:i},r}();/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Ih=function(r,e){return Ih=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)n.hasOwnProperty(i)&&(t[i]=n[i])},Ih(r,e)};function Yd(r,e){Ih(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var _t=function(r){Yd(e,r);function e(){var t=r.call(this)||this;return t.tempDisplayObjectParent=null,t.transform=new Wd,t.alpha=1,t.visible=!0,t.renderable=!0,t.cullable=!1,t.cullArea=null,t.parent=null,t.worldAlpha=1,t._lastSortedIndex=0,t._zIndex=0,t.filterArea=null,t.filters=null,t._enabledFilters=null,t._bounds=new mo,t._localBounds=null,t._boundsID=0,t._boundsRect=null,t._localBoundsRect=null,t._mask=null,t._maskRefCount=0,t._destroyed=!1,t.isSprite=!1,t.isMask=!1,t}return e.mixin=function(t){for(var n=Object.keys(t),i=0;i<n.length;++i){var o=n[i];Object.defineProperty(e.prototype,o,Object.getOwnPropertyDescriptor(t,o))}},Object.defineProperty(e.prototype,"destroyed",{get:function(){return this._destroyed},enumerable:!1,configurable:!0}),e.prototype._recursivePostUpdateTransform=function(){this.parent?(this.parent._recursivePostUpdateTransform(),this.transform.updateTransform(this.parent.transform)):this.transform.updateTransform(this._tempDisplayObjectParent.transform)},e.prototype.updateTransform=function(){this._boundsID++,this.transform.updateTransform(this.parent.transform),this.worldAlpha=this.alpha*this.parent.worldAlpha},e.prototype.getBounds=function(t,n){return t||(this.parent?(this._recursivePostUpdateTransform(),this.updateTransform()):(this.parent=this._tempDisplayObjectParent,this.updateTransform(),this.parent=null)),this._bounds.updateID!==this._boundsID&&(this.calculateBounds(),this._bounds.updateID=this._boundsID),n||(this._boundsRect||(this._boundsRect=new K),n=this._boundsRect),this._bounds.getRectangle(n)},e.prototype.getLocalBounds=function(t){t||(this._localBoundsRect||(this._localBoundsRect=new K),t=this._localBoundsRect),this._localBounds||(this._localBounds=new mo);var n=this.transform,i=this.parent;this.parent=null,this.transform=this._tempDisplayObjectParent.transform;var o=this._bounds,a=this._boundsID;this._bounds=this._localBounds;var s=this.getBounds(!1,t);return this.parent=i,this.transform=n,this._bounds=o,this._bounds.updateID+=this._boundsID-a,s},e.prototype.toGlobal=function(t,n,i){return i===void 0&&(i=!1),i||(this._recursivePostUpdateTransform(),this.parent?this.displayObjectUpdateTransform():(this.parent=this._tempDisplayObjectParent,this.displayObjectUpdateTransform(),this.parent=null)),this.worldTransform.apply(t,n)},e.prototype.toLocal=function(t,n,i,o){return n&&(t=n.toGlobal(t,i,o)),o||(this._recursivePostUpdateTransform(),this.parent?this.displayObjectUpdateTransform():(this.parent=this._tempDisplayObjectParent,this.displayObjectUpdateTransform(),this.parent=null)),this.worldTransform.applyInverse(t,i)},e.prototype.setParent=function(t){if(!t||!t.addChild)throw new Error("setParent: Argument must be a Container");return t.addChild(this),t},e.prototype.setTransform=function(t,n,i,o,a,s,u,l,f){return t===void 0&&(t=0),n===void 0&&(n=0),i===void 0&&(i=1),o===void 0&&(o=1),a===void 0&&(a=0),s===void 0&&(s=0),u===void 0&&(u=0),l===void 0&&(l=0),f===void 0&&(f=0),this.position.x=t,this.position.y=n,this.scale.x=i||1,this.scale.y=o||1,this.rotation=a,this.skew.x=s,this.skew.y=u,this.pivot.x=l,this.pivot.y=f,this},e.prototype.destroy=function(t){this.parent&&this.parent.removeChild(this),this._destroyed=!0,this.transform=null,this.parent=null,this._bounds=null,this.mask=null,this.cullArea=null,this.filters=null,this.filterArea=null,this.hitArea=null,this.interactive=!1,this.interactiveChildren=!1,this.emit("destroyed"),this.removeAllListeners()},Object.defineProperty(e.prototype,"_tempDisplayObjectParent",{get:function(){return this.tempDisplayObjectParent===null&&(this.tempDisplayObjectParent=new qd),this.tempDisplayObjectParent},enumerable:!1,configurable:!0}),e.prototype.enableTempParent=function(){var t=this.parent;return this.parent=this._tempDisplayObjectParent,t},e.prototype.disableTempParent=function(t){this.parent=t},Object.defineProperty(e.prototype,"x",{get:function(){return this.position.x},set:function(t){this.transform.position.x=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"y",{get:function(){return this.position.y},set:function(t){this.transform.position.y=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"worldTransform",{get:function(){return this.transform.worldTransform},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"localTransform",{get:function(){return this.transform.localTransform},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"position",{get:function(){return this.transform.position},set:function(t){this.transform.position.copyFrom(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"scale",{get:function(){return this.transform.scale},set:function(t){this.transform.scale.copyFrom(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"pivot",{get:function(){return this.transform.pivot},set:function(t){this.transform.pivot.copyFrom(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"skew",{get:function(){return this.transform.skew},set:function(t){this.transform.skew.copyFrom(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"rotation",{get:function(){return this.transform.rotation},set:function(t){this.transform.rotation=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"angle",{get:function(){return this.transform.rotation*fb},set:function(t){this.transform.rotation=t*Or},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"zIndex",{get:function(){return this._zIndex},set:function(t){this._zIndex=t,this.parent&&(this.parent.sortDirty=!0)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"worldVisible",{get:function(){var t=this;do{if(!t.visible)return!1;t=t.parent}while(t);return!0},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"mask",{get:function(){return this._mask},set:function(t){if(this._mask!==t){if(this._mask){var n=this._mask.isMaskData?this._mask.maskObject:this._mask;n&&(n._maskRefCount--,n._maskRefCount===0&&(n.renderable=!0,n.isMask=!1))}if(this._mask=t,this._mask){var n=this._mask.isMaskData?this._mask.maskObject:this._mask;n&&(n._maskRefCount===0&&(n.renderable=!1,n.isMask=!0),n._maskRefCount++)}}},enumerable:!1,configurable:!0}),e}(cn),qd=function(r){Yd(e,r);function e(){var t=r!==null&&r.apply(this,arguments)||this;return t.sortDirty=null,t}return e}(_t);_t.prototype.displayObjectUpdateTransform=_t.prototype.updateTransform;function XR(r,e){return r.zIndex===e.zIndex?r._lastSortedIndex-e._lastSortedIndex:r.zIndex-e.zIndex}var $t=function(r){Yd(e,r);function e(){var t=r.call(this)||this;return t.children=[],t.sortableChildren=C.SORTABLE_CHILDREN,t.sortDirty=!1,t}return e.prototype.onChildrenChange=function(t){},e.prototype.addChild=function(){for(var t=arguments,n=[],i=0;i<arguments.length;i++)n[i]=t[i];if(n.length>1)for(var o=0;o<n.length;o++)this.addChild(n[o]);else{var a=n[0];a.parent&&a.parent.removeChild(a),a.parent=this,this.sortDirty=!0,a.transform._parentID=-1,this.children.push(a),this._boundsID++,this.onChildrenChange(this.children.length-1),this.emit("childAdded",a,this,this.children.length-1),a.emit("added",this)}return n[0]},e.prototype.addChildAt=function(t,n){if(n<0||n>this.children.length)throw new Error(t+"addChildAt: The index "+n+" supplied is out of bounds "+this.children.length);return t.parent&&t.parent.removeChild(t),t.parent=this,this.sortDirty=!0,t.transform._parentID=-1,this.children.splice(n,0,t),this._boundsID++,this.onChildrenChange(n),t.emit("added",this),this.emit("childAdded",t,this,n),t},e.prototype.swapChildren=function(t,n){if(t!==n){var i=this.getChildIndex(t),o=this.getChildIndex(n);this.children[i]=n,this.children[o]=t,this.onChildrenChange(i<o?i:o)}},e.prototype.getChildIndex=function(t){var n=this.children.indexOf(t);if(n===-1)throw new Error("The supplied DisplayObject must be a child of the caller");return n},e.prototype.setChildIndex=function(t,n){if(n<0||n>=this.children.length)throw new Error("The index "+n+" supplied is out of bounds "+this.children.length);var i=this.getChildIndex(t);Zr(this.children,i,1),this.children.splice(n,0,t),this.onChildrenChange(n)},e.prototype.getChildAt=function(t){if(t<0||t>=this.children.length)throw new Error("getChildAt: Index ("+t+") does not exist.");return this.children[t]},e.prototype.removeChild=function(){for(var t=arguments,n=[],i=0;i<arguments.length;i++)n[i]=t[i];if(n.length>1)for(var o=0;o<n.length;o++)this.removeChild(n[o]);else{var a=n[0],s=this.children.indexOf(a);if(s===-1)return null;a.parent=null,a.transform._parentID=-1,Zr(this.children,s,1),this._boundsID++,this.onChildrenChange(s),a.emit("removed",this),this.emit("childRemoved",a,this,s)}return n[0]},e.prototype.removeChildAt=function(t){var n=this.getChildAt(t);return n.parent=null,n.transform._parentID=-1,Zr(this.children,t,1),this._boundsID++,this.onChildrenChange(t),n.emit("removed",this),this.emit("childRemoved",n,this,t),n},e.prototype.removeChildren=function(t,n){t===void 0&&(t=0),n===void 0&&(n=this.children.length);var i=t,o=n,a=o-i,s;if(a>0&&a<=o){s=this.children.splice(i,a);for(var u=0;u<s.length;++u)s[u].parent=null,s[u].transform&&(s[u].transform._parentID=-1);this._boundsID++,this.onChildrenChange(t);for(var u=0;u<s.length;++u)s[u].emit("removed",this),this.emit("childRemoved",s[u],this,u);return s}else if(a===0&&this.children.length===0)return[];throw new RangeError("removeChildren: numeric values are outside the acceptable range.")},e.prototype.sortChildren=function(){for(var t=!1,n=0,i=this.children.length;n<i;++n){var o=this.children[n];o._lastSortedIndex=n,!t&&o.zIndex!==0&&(t=!0)}t&&this.children.length>1&&this.children.sort(XR),this.sortDirty=!1},e.prototype.updateTransform=function(){this.sortableChildren&&this.sortDirty&&this.sortChildren(),this._boundsID++,this.transform.updateTransform(this.parent.transform),this.worldAlpha=this.alpha*this.parent.worldAlpha;for(var t=0,n=this.children.length;t<n;++t){var i=this.children[t];i.visible&&i.updateTransform()}},e.prototype.calculateBounds=function(){this._bounds.clear(),this._calculateBounds();for(var t=0;t<this.children.length;t++){var n=this.children[t];if(!(!n.visible||!n.renderable))if(n.calculateBounds(),n._mask){var i=n._mask.isMaskData?n._mask.maskObject:n._mask;i?(i.calculateBounds(),this._bounds.addBoundsMask(n._bounds,i._bounds)):this._bounds.addBounds(n._bounds)}else n.filterArea?this._bounds.addBoundsArea(n._bounds,n.filterArea):this._bounds.addBounds(n._bounds)}this._bounds.updateID=this._boundsID},e.prototype.getLocalBounds=function(t,n){n===void 0&&(n=!1);var i=r.prototype.getLocalBounds.call(this,t);if(!n)for(var o=0,a=this.children.length;o<a;++o){var s=this.children[o];s.visible&&s.updateTransform()}return i},e.prototype._calculateBounds=function(){},e.prototype._renderWithCulling=function(t){var n=t.renderTexture.sourceFrame;if(n.width>0&&n.height>0){var i,o;if(this.cullArea?(i=this.cullArea,o=this.worldTransform):this._render!==e.prototype._render&&(i=this.getBounds(!0)),i&&n.intersects(i,o))this._render(t);else if(this.cullArea)return;for(var a=0,s=this.children.length;a<s;++a){var u=this.children[a],l=u.cullable;u.cullable=l||!this.cullArea,u.render(t),u.cullable=l}}},e.prototype.render=function(t){if(!(!this.visible||this.worldAlpha<=0||!this.renderable))if(this._mask||this.filters&&this.filters.length)this.renderAdvanced(t);else if(this.cullable)this._renderWithCulling(t);else{this._render(t);for(var n=0,i=this.children.length;n<i;++n)this.children[n].render(t)}},e.prototype.renderAdvanced=function(t){var n=this.filters,i=this._mask;if(n){this._enabledFilters||(this._enabledFilters=[]),this._enabledFilters.length=0;for(var o=0;o<n.length;o++)n[o].enabled&&this._enabledFilters.push(n[o])}var a=n&&this._enabledFilters&&this._enabledFilters.length||i&&(!i.isMaskData||i.enabled&&(i.autoDetect||i.type!==St.NONE));if(a&&t.batch.flush(),n&&this._enabledFilters&&this._enabledFilters.length&&t.filter.push(this,this._enabledFilters),i&&t.mask.push(this,this._mask),this.cullable)this._renderWithCulling(t);else{this._render(t);for(var o=0,s=this.children.length;o<s;++o)this.children[o].render(t)}a&&t.batch.flush(),i&&t.mask.pop(this),n&&this._enabledFilters&&this._enabledFilters.length&&t.filter.pop()},e.prototype._render=function(t){},e.prototype.destroy=function(t){r.prototype.destroy.call(this),this.sortDirty=!1;var n=typeof t=="boolean"?t:t&&t.children,i=this.removeChildren(0,this.children.length);if(n)for(var o=0;o<i.length;++o)i[o].destroy(t)},Object.defineProperty(e.prototype,"width",{get:function(){return this.scale.x*this.getLocalBounds().width},set:function(t){var n=this.getLocalBounds().width;n!==0?this.scale.x=t/n:this.scale.x=1,this._width=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"height",{get:function(){return this.scale.y*this.getLocalBounds().height},set:function(t){var n=this.getLocalBounds().height;n!==0?this.scale.y=t/n:this.scale.y=1,this._height=t},enumerable:!1,configurable:!0}),e}(_t);$t.prototype.containerUpdateTransform=$t.prototype.updateTransform;/*!
 * @pixi/extensions - v6.5.10
 * Compiled Thu, 06 Jul 2023 15:25:11 UTC
 *
 * @pixi/extensions is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var qi=function(){return qi=Object.assign||function(e){for(var t=arguments,n,i=1,o=arguments.length;i<o;i++){n=t[i];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},qi.apply(this,arguments)},rt;(function(r){r.Application="application",r.RendererPlugin="renderer-webgl-plugin",r.CanvasRendererPlugin="renderer-canvas-plugin",r.Loader="loader",r.LoadParser="load-parser",r.ResolveParser="resolve-parser",r.CacheParser="cache-parser",r.DetectionParser="detection-parser"})(rt||(rt={}));var my=function(r){if(typeof r=="function"||typeof r=="object"&&r.extension){if(!r.extension)throw new Error("Extension class must have an extension object");var e=typeof r.extension!="object"?{type:r.extension}:r.extension;r=qi(qi({},e),{ref:r})}if(typeof r=="object")r=qi({},r);else throw new Error("Invalid extension type");return typeof r.type=="string"&&(r.type=[r.type]),r},Qt={_addHandlers:null,_removeHandlers:null,_queue:{},remove:function(){for(var r=arguments,e=this,t=[],n=0;n<arguments.length;n++)t[n]=r[n];return t.map(my).forEach(function(i){i.type.forEach(function(o){var a,s;return(s=(a=e._removeHandlers)[o])===null||s===void 0?void 0:s.call(a,i)})}),this},add:function(){for(var r=arguments,e=this,t=[],n=0;n<arguments.length;n++)t[n]=r[n];return t.map(my).forEach(function(i){i.type.forEach(function(o){var a=e._addHandlers,s=e._queue;a[o]?a[o](i):(s[o]=s[o]||[],s[o].push(i))})}),this},handle:function(r,e,t){var n=this._addHandlers=this._addHandlers||{},i=this._removeHandlers=this._removeHandlers||{};if(n[r]||i[r])throw new Error("Extension type "+r+" already has a handler");n[r]=e,i[r]=t;var o=this._queue;return o[r]&&(o[r].forEach(function(a){return e(a)}),delete o[r]),this},handleByMap:function(r,e){return this.handle(r,function(t){e[t.name]=t.ref},function(t){delete e[t.name]})},handleByList:function(r,e){return this.handle(r,function(t){var n,i;e.includes(t.ref)||(e.push(t.ref),r===rt.Loader&&((i=(n=t.ref).add)===null||i===void 0||i.call(n)))},function(t){var n=e.indexOf(t.ref);n!==-1&&e.splice(n,1)})}};/*!
 * @pixi/runner - v6.5.10
 * Compiled Thu, 06 Jul 2023 15:25:11 UTC
 *
 * @pixi/runner is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */var Nt=function(){function r(e){this.items=[],this._name=e,this._aliasCount=0}return r.prototype.emit=function(e,t,n,i,o,a,s,u){if(arguments.length>8)throw new Error("max arguments reached");var l=this,f=l.name,c=l.items;this._aliasCount++;for(var h=0,d=c.length;h<d;h++)c[h][f](e,t,n,i,o,a,s,u);return c===this.items&&this._aliasCount--,this},r.prototype.ensureNonAliasedItems=function(){this._aliasCount>0&&this.items.length>1&&(this._aliasCount=0,this.items=this.items.slice(0))},r.prototype.add=function(e){return e[this._name]&&(this.ensureNonAliasedItems(),this.remove(e),this.items.push(e)),this},r.prototype.remove=function(e){var t=this.items.indexOf(e);return t!==-1&&(this.ensureNonAliasedItems(),this.items.splice(t,1)),this},r.prototype.contains=function(e){return this.items.indexOf(e)!==-1},r.prototype.removeAll=function(){return this.ensureNonAliasedItems(),this.items.length=0,this},r.prototype.destroy=function(){this.removeAll(),this.items=null,this._name=null},Object.defineProperty(r.prototype,"empty",{get:function(){return this.items.length===0},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"name",{get:function(){return this._name},enumerable:!1,configurable:!0}),r}();Object.defineProperties(Nt.prototype,{dispatch:{value:Nt.prototype.emit},run:{value:Nt.prototype.emit}});/*!
 * @pixi/ticker - v6.5.10
 * Compiled Thu, 06 Jul 2023 15:25:11 UTC
 *
 * @pixi/ticker is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */C.TARGET_FPMS=.06;var Ve;(function(r){r[r.INTERACTION=50]="INTERACTION",r[r.HIGH=25]="HIGH",r[r.NORMAL=0]="NORMAL",r[r.LOW=-25]="LOW",r[r.UTILITY=-50]="UTILITY"})(Ve||(Ve={}));var wl=function(){function r(e,t,n,i){t===void 0&&(t=null),n===void 0&&(n=0),i===void 0&&(i=!1),this.next=null,this.previous=null,this._destroyed=!1,this.fn=e,this.context=t,this.priority=n,this.once=i}return r.prototype.match=function(e,t){return t===void 0&&(t=null),this.fn===e&&this.context===t},r.prototype.emit=function(e){this.fn&&(this.context?this.fn.call(this.context,e):this.fn(e));var t=this.next;return this.once&&this.destroy(!0),this._destroyed&&(this.next=null),t},r.prototype.connect=function(e){this.previous=e,e.next&&(e.next.previous=this),this.next=e.next,e.next=this},r.prototype.destroy=function(e){e===void 0&&(e=!1),this._destroyed=!0,this.fn=null,this.context=null,this.previous&&(this.previous.next=this.next),this.next&&(this.next.previous=this.previous);var t=this.next;return this.next=e?null:t,this.previous=null,t},r}(),Ct=function(){function r(){var e=this;this.autoStart=!1,this.deltaTime=1,this.lastTime=-1,this.speed=1,this.started=!1,this._requestId=null,this._maxElapsedMS=100,this._minElapsedMS=0,this._protected=!1,this._lastFrame=-1,this._head=new wl(null,null,1/0),this.deltaMS=1/C.TARGET_FPMS,this.elapsedMS=1/C.TARGET_FPMS,this._tick=function(t){e._requestId=null,e.started&&(e.update(t),e.started&&e._requestId===null&&e._head.next&&(e._requestId=requestAnimationFrame(e._tick)))}}return r.prototype._requestIfNeeded=function(){this._requestId===null&&this._head.next&&(this.lastTime=performance.now(),this._lastFrame=this.lastTime,this._requestId=requestAnimationFrame(this._tick))},r.prototype._cancelIfNeeded=function(){this._requestId!==null&&(cancelAnimationFrame(this._requestId),this._requestId=null)},r.prototype._startIfPossible=function(){this.started?this._requestIfNeeded():this.autoStart&&this.start()},r.prototype.add=function(e,t,n){return n===void 0&&(n=Ve.NORMAL),this._addListener(new wl(e,t,n))},r.prototype.addOnce=function(e,t,n){return n===void 0&&(n=Ve.NORMAL),this._addListener(new wl(e,t,n,!0))},r.prototype._addListener=function(e){var t=this._head.next,n=this._head;if(!t)e.connect(n);else{for(;t;){if(e.priority>t.priority){e.connect(n);break}n=t,t=t.next}e.previous||e.connect(n)}return this._startIfPossible(),this},r.prototype.remove=function(e,t){for(var n=this._head.next;n;)n.match(e,t)?n=n.destroy():n=n.next;return this._head.next||this._cancelIfNeeded(),this},Object.defineProperty(r.prototype,"count",{get:function(){if(!this._head)return 0;for(var e=0,t=this._head;t=t.next;)e++;return e},enumerable:!1,configurable:!0}),r.prototype.start=function(){this.started||(this.started=!0,this._requestIfNeeded())},r.prototype.stop=function(){this.started&&(this.started=!1,this._cancelIfNeeded())},r.prototype.destroy=function(){if(!this._protected){this.stop();for(var e=this._head.next;e;)e=e.destroy(!0);this._head.destroy(),this._head=null}},r.prototype.update=function(e){e===void 0&&(e=performance.now());var t;if(e>this.lastTime){if(t=this.elapsedMS=e-this.lastTime,t>this._maxElapsedMS&&(t=this._maxElapsedMS),t*=this.speed,this._minElapsedMS){var n=e-this._lastFrame|0;if(n<this._minElapsedMS)return;this._lastFrame=e-n%this._minElapsedMS}this.deltaMS=t,this.deltaTime=this.deltaMS*C.TARGET_FPMS;for(var i=this._head,o=i.next;o;)o=o.emit(this.deltaTime);i.next||this._cancelIfNeeded()}else this.deltaTime=this.deltaMS=this.elapsedMS=0;this.lastTime=e},Object.defineProperty(r.prototype,"FPS",{get:function(){return 1e3/this.elapsedMS},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"minFPS",{get:function(){return 1e3/this._maxElapsedMS},set:function(e){var t=Math.min(this.maxFPS,e),n=Math.min(Math.max(0,t)/1e3,C.TARGET_FPMS);this._maxElapsedMS=1/n},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"maxFPS",{get:function(){return this._minElapsedMS?Math.round(1e3/this._minElapsedMS):0},set:function(e){if(e===0)this._minElapsedMS=0;else{var t=Math.max(this.minFPS,e);this._minElapsedMS=1/(t/1e3)}},enumerable:!1,configurable:!0}),Object.defineProperty(r,"shared",{get:function(){if(!r._shared){var e=r._shared=new r;e.autoStart=!0,e._protected=!0}return r._shared},enumerable:!1,configurable:!0}),Object.defineProperty(r,"system",{get:function(){if(!r._system){var e=r._system=new r;e.autoStart=!0,e._protected=!0}return r._system},enumerable:!1,configurable:!0}),r}(),vb=function(){function r(){}return r.init=function(e){var t=this;e=Object.assign({autoStart:!0,sharedTicker:!1},e),Object.defineProperty(this,"ticker",{set:function(n){this._ticker&&this._ticker.remove(this.render,this),this._ticker=n,n&&n.add(this.render,this,Ve.LOW)},get:function(){return this._ticker}}),this.stop=function(){t._ticker.stop()},this.start=function(){t._ticker.start()},this._ticker=null,this.ticker=e.sharedTicker?Ct.shared:new Ct,e.autoStart&&this.start()},r.destroy=function(){if(this._ticker){var e=this._ticker;this.ticker=null,e.destroy()}},r.extension=rt.Application,r}();/*!
 * @pixi/core - v6.5.10
 * Compiled Thu, 06 Jul 2023 15:25:11 UTC
 *
 * @pixi/core is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */C.PREFER_ENV=de.any?Ce.WEBGL:Ce.WEBGL2;C.STRICT_TEXTURE_CACHE=!1;var _o=[];function vu(r,e){if(!r)return null;var t="";if(typeof r=="string"){var n=/\.(\w{3,4})(?:$|\?|#)/i.exec(r);n&&(t=n[1].toLowerCase())}for(var i=_o.length-1;i>=0;--i){var o=_o[i];if(o.test&&o.test(r,t))return new o(r,e)}throw new Error("Unrecognized source type to auto-detect Resource")}/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Mh=function(r,e){return Mh=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)n.hasOwnProperty(i)&&(t[i]=n[i])},Mh(r,e)};function st(r,e){Mh(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var Dh=function(){return Dh=Object.assign||function(e){for(var t=arguments,n,i=1,o=arguments.length;i<o;i++){n=t[i];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},Dh.apply(this,arguments)};function VR(r,e){var t={};for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&e.indexOf(n)<0&&(t[n]=r[n]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(r);i<n.length;i++)e.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(r,n[i])&&(t[n[i]]=r[n[i]]);return t}var an=function(){function r(e,t){e===void 0&&(e=0),t===void 0&&(t=0),this._width=e,this._height=t,this.destroyed=!1,this.internal=!1,this.onResize=new Nt("setRealSize"),this.onUpdate=new Nt("update"),this.onError=new Nt("onError")}return r.prototype.bind=function(e){this.onResize.add(e),this.onUpdate.add(e),this.onError.add(e),(this._width||this._height)&&this.onResize.emit(this._width,this._height)},r.prototype.unbind=function(e){this.onResize.remove(e),this.onUpdate.remove(e),this.onError.remove(e)},r.prototype.resize=function(e,t){(e!==this._width||t!==this._height)&&(this._width=e,this._height=t,this.onResize.emit(e,t))},Object.defineProperty(r.prototype,"valid",{get:function(){return!!this._width&&!!this._height},enumerable:!1,configurable:!0}),r.prototype.update=function(){this.destroyed||this.onUpdate.emit()},r.prototype.load=function(){return Promise.resolve(this)},Object.defineProperty(r.prototype,"width",{get:function(){return this._width},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"height",{get:function(){return this._height},enumerable:!1,configurable:!0}),r.prototype.style=function(e,t,n){return!1},r.prototype.dispose=function(){},r.prototype.destroy=function(){this.destroyed||(this.destroyed=!0,this.dispose(),this.onError.removeAll(),this.onError=null,this.onResize.removeAll(),this.onResize=null,this.onUpdate.removeAll(),this.onUpdate=null)},r.test=function(e,t){return!1},r}(),dn=function(r){st(e,r);function e(t,n){var i=this,o=n||{},a=o.width,s=o.height;if(!a||!s)throw new Error("BufferResource width or height invalid");return i=r.call(this,a,s)||this,i.data=t,i}return e.prototype.upload=function(t,n,i){var o=t.gl;o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,n.alphaMode===pe.UNPACK);var a=n.realWidth,s=n.realHeight;return i.width===a&&i.height===s?o.texSubImage2D(n.target,0,0,0,a,s,n.format,i.type,this.data):(i.width=a,i.height=s,o.texImage2D(n.target,0,i.internalFormat,a,s,0,n.format,i.type,this.data)),!0},e.prototype.dispose=function(){this.data=null},e.test=function(t){return t instanceof Float32Array||t instanceof Uint8Array||t instanceof Uint32Array},e}(an),WR={scaleMode:Ht.NEAREST,format:P.RGBA,alphaMode:pe.NPM},q=function(r){st(e,r);function e(t,n){t===void 0&&(t=null),n===void 0&&(n=null);var i=r.call(this)||this;n=n||{};var o=n.alphaMode,a=n.mipmap,s=n.anisotropicLevel,u=n.scaleMode,l=n.width,f=n.height,c=n.wrapMode,h=n.format,d=n.type,p=n.target,v=n.resolution,y=n.resourceOptions;return t&&!(t instanceof an)&&(t=vu(t,y),t.internal=!0),i.resolution=v||C.RESOLUTION,i.width=Math.round((l||0)*i.resolution)/i.resolution,i.height=Math.round((f||0)*i.resolution)/i.resolution,i._mipmap=a!==void 0?a:C.MIPMAP_TEXTURES,i.anisotropicLevel=s!==void 0?s:C.ANISOTROPIC_LEVEL,i._wrapMode=c||C.WRAP_MODE,i._scaleMode=u!==void 0?u:C.SCALE_MODE,i.format=h||P.RGBA,i.type=d||U.UNSIGNED_BYTE,i.target=p||Tr.TEXTURE_2D,i.alphaMode=o!==void 0?o:pe.UNPACK,i.uid=wr(),i.touched=0,i.isPowerOfTwo=!1,i._refreshPOT(),i._glTextures={},i.dirtyId=0,i.dirtyStyleId=0,i.cacheId=null,i.valid=l>0&&f>0,i.textureCacheIds=[],i.destroyed=!1,i.resource=null,i._batchEnabled=0,i._batchLocation=0,i.parentTextureArray=null,i.setResource(t),i}return Object.defineProperty(e.prototype,"realWidth",{get:function(){return Math.round(this.width*this.resolution)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"realHeight",{get:function(){return Math.round(this.height*this.resolution)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"mipmap",{get:function(){return this._mipmap},set:function(t){this._mipmap!==t&&(this._mipmap=t,this.dirtyStyleId++)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"scaleMode",{get:function(){return this._scaleMode},set:function(t){this._scaleMode!==t&&(this._scaleMode=t,this.dirtyStyleId++)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"wrapMode",{get:function(){return this._wrapMode},set:function(t){this._wrapMode!==t&&(this._wrapMode=t,this.dirtyStyleId++)},enumerable:!1,configurable:!0}),e.prototype.setStyle=function(t,n){var i;return t!==void 0&&t!==this.scaleMode&&(this.scaleMode=t,i=!0),n!==void 0&&n!==this.mipmap&&(this.mipmap=n,i=!0),i&&this.dirtyStyleId++,this},e.prototype.setSize=function(t,n,i){return i=i||this.resolution,this.setRealSize(t*i,n*i,i)},e.prototype.setRealSize=function(t,n,i){return this.resolution=i||this.resolution,this.width=Math.round(t)/this.resolution,this.height=Math.round(n)/this.resolution,this._refreshPOT(),this.update(),this},e.prototype._refreshPOT=function(){this.isPowerOfTwo=Oh(this.realWidth)&&Oh(this.realHeight)},e.prototype.setResolution=function(t){var n=this.resolution;return n===t?this:(this.resolution=t,this.valid&&(this.width=Math.round(this.width*n)/t,this.height=Math.round(this.height*n)/t,this.emit("update",this)),this._refreshPOT(),this)},e.prototype.setResource=function(t){if(this.resource===t)return this;if(this.resource)throw new Error("Resource can be set only once");return t.bind(this),this.resource=t,this},e.prototype.update=function(){this.valid?(this.dirtyId++,this.dirtyStyleId++,this.emit("update",this)):this.width>0&&this.height>0&&(this.valid=!0,this.emit("loaded",this),this.emit("update",this))},e.prototype.onError=function(t){this.emit("error",this,t)},e.prototype.destroy=function(){this.resource&&(this.resource.unbind(this),this.resource.internal&&this.resource.destroy(),this.resource=null),this.cacheId&&(delete ae[this.cacheId],delete Zt[this.cacheId],this.cacheId=null),this.dispose(),e.removeFromCache(this),this.textureCacheIds=null,this.destroyed=!0},e.prototype.dispose=function(){this.emit("dispose",this)},e.prototype.castToBaseTexture=function(){return this},e.from=function(t,n,i){i===void 0&&(i=C.STRICT_TEXTURE_CACHE);var o=typeof t=="string",a=null;if(o)a=t;else{if(!t._pixiId){var s=n&&n.pixiIdPrefix||"pixiid";t._pixiId=s+"_"+wr()}a=t._pixiId}var u=ae[a];if(o&&i&&!u)throw new Error('The cacheId "'+a+'" does not exist in BaseTextureCache.');return u||(u=new e(t,n),u.cacheId=a,e.addToCache(u,a)),u},e.fromBuffer=function(t,n,i,o){t=t||new Float32Array(n*i*4);var a=new dn(t,{width:n,height:i}),s=t instanceof Float32Array?U.FLOAT:U.UNSIGNED_BYTE;return new e(a,Object.assign({},WR,o||{width:n,height:i,type:s}))},e.addToCache=function(t,n){n&&(t.textureCacheIds.indexOf(n)===-1&&t.textureCacheIds.push(n),ae[n]&&console.warn("BaseTexture added to the cache with an id ["+n+"] that already had an entry"),ae[n]=t)},e.removeFromCache=function(t){if(typeof t=="string"){var n=ae[t];if(n){var i=n.textureCacheIds.indexOf(t);return i>-1&&n.textureCacheIds.splice(i,1),delete ae[t],n}}else if(t&&t.textureCacheIds){for(var o=0;o<t.textureCacheIds.length;++o)delete ae[t.textureCacheIds[o]];return t.textureCacheIds.length=0,t}return null},e._globalBatch=0,e}(cn),yu=function(r){st(e,r);function e(t,n){var i=this,o=n||{},a=o.width,s=o.height;i=r.call(this,a,s)||this,i.items=[],i.itemDirtyIds=[];for(var u=0;u<t;u++){var l=new q;i.items.push(l),i.itemDirtyIds.push(-2)}return i.length=t,i._load=null,i.baseTexture=null,i}return e.prototype.initFromArray=function(t,n){for(var i=0;i<this.length;i++)t[i]&&(t[i].castToBaseTexture?this.addBaseTextureAt(t[i].castToBaseTexture(),i):t[i]instanceof an?this.addResourceAt(t[i],i):this.addResourceAt(vu(t[i],n),i))},e.prototype.dispose=function(){for(var t=0,n=this.length;t<n;t++)this.items[t].destroy();this.items=null,this.itemDirtyIds=null,this._load=null},e.prototype.addResourceAt=function(t,n){if(!this.items[n])throw new Error("Index "+n+" is out of bounds");return t.valid&&!this.valid&&this.resize(t.width,t.height),this.items[n].setResource(t),this},e.prototype.bind=function(t){if(this.baseTexture!==null)throw new Error("Only one base texture per TextureArray is allowed");r.prototype.bind.call(this,t);for(var n=0;n<this.length;n++)this.items[n].parentTextureArray=t,this.items[n].on("update",t.update,t)},e.prototype.unbind=function(t){r.prototype.unbind.call(this,t);for(var n=0;n<this.length;n++)this.items[n].parentTextureArray=null,this.items[n].off("update",t.update,t)},e.prototype.load=function(){var t=this;if(this._load)return this._load;var n=this.items.map(function(o){return o.resource}).filter(function(o){return o}),i=n.map(function(o){return o.load()});return this._load=Promise.all(i).then(function(){var o=t.items[0],a=o.realWidth,s=o.realHeight;return t.resize(a,s),Promise.resolve(t)}),this._load},e}(an),Kd=function(r){st(e,r);function e(t,n){var i=this,o=n||{},a=o.width,s=o.height,u,l;return Array.isArray(t)?(u=t,l=t.length):l=t,i=r.call(this,l,{width:a,height:s})||this,u&&i.initFromArray(u,n),i}return e.prototype.addBaseTextureAt=function(t,n){if(t.resource)this.addResourceAt(t.resource,n);else throw new Error("ArrayResource does not support RenderTexture");return this},e.prototype.bind=function(t){r.prototype.bind.call(this,t),t.target=Tr.TEXTURE_2D_ARRAY},e.prototype.upload=function(t,n,i){var o=this,a=o.length,s=o.itemDirtyIds,u=o.items,l=t.gl;i.dirtyId<0&&l.texImage3D(l.TEXTURE_2D_ARRAY,0,i.internalFormat,this._width,this._height,a,0,n.format,i.type,null);for(var f=0;f<a;f++){var c=u[f];s[f]<c.dirtyId&&(s[f]=c.dirtyId,c.valid&&l.texSubImage3D(l.TEXTURE_2D_ARRAY,0,0,0,f,c.resource.width,c.resource.height,1,n.format,i.type,c.resource.source))}return!0},e}(yu),We=function(r){st(e,r);function e(t){var n=this,i=t,o=i.naturalWidth||i.videoWidth||i.width,a=i.naturalHeight||i.videoHeight||i.height;return n=r.call(this,o,a)||this,n.source=t,n.noSubImage=!1,n}return e.crossOrigin=function(t,n,i){i===void 0&&n.indexOf("data:")!==0?t.crossOrigin=lb(n):i!==!1&&(t.crossOrigin=typeof i=="string"?i:"anonymous")},e.prototype.upload=function(t,n,i,o){var a=t.gl,s=n.realWidth,u=n.realHeight;if(o=o||this.source,o instanceof HTMLImageElement){if(!o.complete||o.naturalWidth===0)return!1}else if(o instanceof HTMLVideoElement&&o.readyState<=1)return!1;return a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,n.alphaMode===pe.UNPACK),!this.noSubImage&&n.target===a.TEXTURE_2D&&i.width===s&&i.height===u?a.texSubImage2D(a.TEXTURE_2D,0,0,0,n.format,i.type,o):(i.width=s,i.height=u,a.texImage2D(n.target,0,i.internalFormat,n.format,i.type,o)),!0},e.prototype.update=function(){if(!this.destroyed){var t=this.source,n=t.naturalWidth||t.videoWidth||t.width,i=t.naturalHeight||t.videoHeight||t.height;this.resize(n,i),r.prototype.update.call(this)}},e.prototype.dispose=function(){this.source=null},e}(an),Zd=function(r){st(e,r);function e(t){return r.call(this,t)||this}return e.test=function(t){var n=globalThis.OffscreenCanvas;return n&&t instanceof n?!0:globalThis.HTMLCanvasElement&&t instanceof HTMLCanvasElement},e}(We),Jd=function(r){st(e,r);function e(t,n){var i=this,o=n||{},a=o.width,s=o.height,u=o.autoLoad,l=o.linkBaseTexture;if(t&&t.length!==e.SIDES)throw new Error("Invalid length. Got "+t.length+", expected 6");i=r.call(this,6,{width:a,height:s})||this;for(var f=0;f<e.SIDES;f++)i.items[f].target=Tr.TEXTURE_CUBE_MAP_POSITIVE_X+f;return i.linkBaseTexture=l!==!1,t&&i.initFromArray(t,n),u!==!1&&i.load(),i}return e.prototype.bind=function(t){r.prototype.bind.call(this,t),t.target=Tr.TEXTURE_CUBE_MAP},e.prototype.addBaseTextureAt=function(t,n,i){if(!this.items[n])throw new Error("Index "+n+" is out of bounds");if(!this.linkBaseTexture||t.parentTextureArray||Object.keys(t._glTextures).length>0)if(t.resource)this.addResourceAt(t.resource,n);else throw new Error("CubeResource does not support copying of renderTexture.");else t.target=Tr.TEXTURE_CUBE_MAP_POSITIVE_X+n,t.parentTextureArray=this.baseTexture,this.items[n]=t;return t.valid&&!this.valid&&this.resize(t.realWidth,t.realHeight),this.items[n]=t,this},e.prototype.upload=function(t,n,i){for(var o=this.itemDirtyIds,a=0;a<e.SIDES;a++){var s=this.items[a];(o[a]<s.dirtyId||i.dirtyId<n.dirtyId)&&(s.valid&&s.resource?(s.resource.upload(t,s,i),o[a]=s.dirtyId):o[a]<-1&&(t.gl.texImage2D(s.target,0,i.internalFormat,n.realWidth,n.realHeight,0,n.format,i.type,null),o[a]=-1))}return!0},e.test=function(t){return Array.isArray(t)&&t.length===e.SIDES},e.SIDES=6,e}(yu),mu=function(r){st(e,r);function e(t,n){var i=this;if(n=n||{},!(t instanceof HTMLImageElement)){var o=new Image;We.crossOrigin(o,t,n.crossorigin),o.src=t,t=o}return i=r.call(this,t)||this,!t.complete&&i._width&&i._height&&(i._width=0,i._height=0),i.url=t.src,i._process=null,i.preserveBitmap=!1,i.createBitmap=(n.createBitmap!==void 0?n.createBitmap:C.CREATE_IMAGE_BITMAP)&&!!globalThis.createImageBitmap,i.alphaMode=typeof n.alphaMode=="number"?n.alphaMode:null,i.bitmap=null,i._load=null,n.autoLoad!==!1&&i.load(),i}return e.prototype.load=function(t){var n=this;return this._load?this._load:(t!==void 0&&(this.createBitmap=t),this._load=new Promise(function(i,o){var a=n.source;n.url=a.src;var s=function(){n.destroyed||(a.onload=null,a.onerror=null,n.resize(a.width,a.height),n._load=null,n.createBitmap?i(n.process()):i(n))};a.complete&&a.src?s():(a.onload=s,a.onerror=function(u){o(u),n.onError.emit(u)})}),this._load)},e.prototype.process=function(){var t=this,n=this.source;if(this._process!==null)return this._process;if(this.bitmap!==null||!globalThis.createImageBitmap)return Promise.resolve(this);var i=globalThis.createImageBitmap,o=!n.crossOrigin||n.crossOrigin==="anonymous";return this._process=fetch(n.src,{mode:o?"cors":"no-cors"}).then(function(a){return a.blob()}).then(function(a){return i(a,0,0,n.width,n.height,{premultiplyAlpha:t.alphaMode===null||t.alphaMode===pe.UNPACK?"premultiply":"none"})}).then(function(a){return t.destroyed?Promise.reject():(t.bitmap=a,t.update(),t._process=null,Promise.resolve(t))}),this._process},e.prototype.upload=function(t,n,i){if(typeof this.alphaMode=="number"&&(n.alphaMode=this.alphaMode),!this.createBitmap)return r.prototype.upload.call(this,t,n,i);if(!this.bitmap&&(this.process(),!this.bitmap))return!1;if(r.prototype.upload.call(this,t,n,i,this.bitmap),!this.preserveBitmap){var o=!0,a=n._glTextures;for(var s in a){var u=a[s];if(u!==i&&u.dirtyId!==n.dirtyId){o=!1;break}}o&&(this.bitmap.close&&this.bitmap.close(),this.bitmap=null)}return!0},e.prototype.dispose=function(){this.source.onload=null,this.source.onerror=null,r.prototype.dispose.call(this),this.bitmap&&(this.bitmap.close(),this.bitmap=null),this._process=null,this._load=null},e.test=function(t){return typeof t=="string"||t instanceof HTMLImageElement},e}(We),Qd=function(r){st(e,r);function e(t,n){var i=this;return n=n||{},i=r.call(this,C.ADAPTER.createCanvas())||this,i._width=0,i._height=0,i.svg=t,i.scale=n.scale||1,i._overrideWidth=n.width,i._overrideHeight=n.height,i._resolve=null,i._crossorigin=n.crossorigin,i._load=null,n.autoLoad!==!1&&i.load(),i}return e.prototype.load=function(){var t=this;return this._load?this._load:(this._load=new Promise(function(n){if(t._resolve=function(){t.resize(t.source.width,t.source.height),n(t)},e.SVG_XML.test(t.svg.trim())){if(!btoa)throw new Error("Your browser doesn't support base64 conversions.");t.svg="data:image/svg+xml;base64,"+btoa(unescape(encodeURIComponent(t.svg)))}t._loadSvg()}),this._load)},e.prototype._loadSvg=function(){var t=this,n=new Image;We.crossOrigin(n,this.svg,this._crossorigin),n.src=this.svg,n.onerror=function(i){t._resolve&&(n.onerror=null,t.onError.emit(i))},n.onload=function(){if(t._resolve){var i=n.width,o=n.height;if(!i||!o)throw new Error("The SVG image must have width and height defined (in pixels), canvas API needs them.");var a=i*t.scale,s=o*t.scale;(t._overrideWidth||t._overrideHeight)&&(a=t._overrideWidth||t._overrideHeight/o*i,s=t._overrideHeight||t._overrideWidth/i*o),a=Math.round(a),s=Math.round(s);var u=t.source;u.width=a,u.height=s,u._pixiId="canvas_"+wr(),u.getContext("2d").drawImage(n,0,0,i,o,0,0,a,s),t._resolve(),t._resolve=null}}},e.getSize=function(t){var n=e.SVG_SIZE.exec(t),i={};return n&&(i[n[1]]=Math.round(parseFloat(n[3])),i[n[5]]=Math.round(parseFloat(n[7]))),i},e.prototype.dispose=function(){r.prototype.dispose.call(this),this._resolve=null,this._crossorigin=null},e.test=function(t,n){return n==="svg"||typeof t=="string"&&t.startsWith("data:image/svg+xml")||typeof t=="string"&&e.SVG_XML.test(t)},e.SVG_XML=/^(<\?xml[^?]+\?>)?\s*(<!--[^(-->)]*-->)?\s*\<svg/m,e.SVG_SIZE=/<svg[^>]*(?:\s(width|height)=('|")(\d*(?:\.\d+)?)(?:px)?('|"))[^>]*(?:\s(width|height)=('|")(\d*(?:\.\d+)?)(?:px)?('|"))[^>]*>/i,e}(We),tp=function(r){st(e,r);function e(t,n){var i=this;if(n=n||{},!(t instanceof HTMLVideoElement)){var o=document.createElement("video");o.setAttribute("preload","auto"),o.setAttribute("webkit-playsinline",""),o.setAttribute("playsinline",""),typeof t=="string"&&(t=[t]);var a=t[0].src||t[0];We.crossOrigin(o,a,n.crossorigin);for(var s=0;s<t.length;++s){var u=document.createElement("source"),l=t[s],f=l.src,c=l.mime;f=f||t[s];var h=f.split("?").shift().toLowerCase(),d=h.slice(h.lastIndexOf(".")+1);c=c||e.MIME_TYPES[d]||"video/"+d,u.src=f,u.type=c,o.appendChild(u)}t=o}return i=r.call(this,t)||this,i.noSubImage=!0,i._autoUpdate=!0,i._isConnectedToTicker=!1,i._updateFPS=n.updateFPS||0,i._msToNextUpdate=0,i.autoPlay=n.autoPlay!==!1,i._load=null,i._resolve=null,i._onCanPlay=i._onCanPlay.bind(i),i._onError=i._onError.bind(i),n.autoLoad!==!1&&i.load(),i}return e.prototype.update=function(t){if(!this.destroyed){var n=Ct.shared.elapsedMS*this.source.playbackRate;this._msToNextUpdate=Math.floor(this._msToNextUpdate-n),(!this._updateFPS||this._msToNextUpdate<=0)&&(r.prototype.update.call(this),this._msToNextUpdate=this._updateFPS?Math.floor(1e3/this._updateFPS):0)}},e.prototype.load=function(){var t=this;if(this._load)return this._load;var n=this.source;return(n.readyState===n.HAVE_ENOUGH_DATA||n.readyState===n.HAVE_FUTURE_DATA)&&n.width&&n.height&&(n.complete=!0),n.addEventListener("play",this._onPlayStart.bind(this)),n.addEventListener("pause",this._onPlayStop.bind(this)),this._isSourceReady()?this._onCanPlay():(n.addEventListener("canplay",this._onCanPlay),n.addEventListener("canplaythrough",this._onCanPlay),n.addEventListener("error",this._onError,!0)),this._load=new Promise(function(i){t.valid?i(t):(t._resolve=i,n.load())}),this._load},e.prototype._onError=function(t){this.source.removeEventListener("error",this._onError,!0),this.onError.emit(t)},e.prototype._isSourcePlaying=function(){var t=this.source;return!t.paused&&!t.ended&&this._isSourceReady()},e.prototype._isSourceReady=function(){var t=this.source;return t.readyState>2},e.prototype._onPlayStart=function(){this.valid||this._onCanPlay(),this.autoUpdate&&!this._isConnectedToTicker&&(Ct.shared.add(this.update,this),this._isConnectedToTicker=!0)},e.prototype._onPlayStop=function(){this._isConnectedToTicker&&(Ct.shared.remove(this.update,this),this._isConnectedToTicker=!1)},e.prototype._onCanPlay=function(){var t=this.source;t.removeEventListener("canplay",this._onCanPlay),t.removeEventListener("canplaythrough",this._onCanPlay);var n=this.valid;this.resize(t.videoWidth,t.videoHeight),!n&&this._resolve&&(this._resolve(this),this._resolve=null),this._isSourcePlaying()?this._onPlayStart():this.autoPlay&&t.play()},e.prototype.dispose=function(){this._isConnectedToTicker&&(Ct.shared.remove(this.update,this),this._isConnectedToTicker=!1);var t=this.source;t&&(t.removeEventListener("error",this._onError,!0),t.pause(),t.src="",t.load()),r.prototype.dispose.call(this)},Object.defineProperty(e.prototype,"autoUpdate",{get:function(){return this._autoUpdate},set:function(t){t!==this._autoUpdate&&(this._autoUpdate=t,!this._autoUpdate&&this._isConnectedToTicker?(Ct.shared.remove(this.update,this),this._isConnectedToTicker=!1):this._autoUpdate&&!this._isConnectedToTicker&&this._isSourcePlaying()&&(Ct.shared.add(this.update,this),this._isConnectedToTicker=!0))},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"updateFPS",{get:function(){return this._updateFPS},set:function(t){t!==this._updateFPS&&(this._updateFPS=t)},enumerable:!1,configurable:!0}),e.test=function(t,n){return globalThis.HTMLVideoElement&&t instanceof HTMLVideoElement||e.TYPES.indexOf(n)>-1},e.TYPES=["mp4","m4v","webm","ogg","ogv","h264","avi","mov"],e.MIME_TYPES={ogv:"video/ogg",mov:"video/quicktime",m4v:"video/mp4"},e}(We),ep=function(r){st(e,r);function e(t){return r.call(this,t)||this}return e.test=function(t){return!!globalThis.createImageBitmap&&typeof ImageBitmap<"u"&&t instanceof ImageBitmap},e}(We);_o.push(mu,ep,Zd,tp,Qd,dn,Jd,Kd);var yb={__proto__:null,Resource:an,BaseImageResource:We,INSTALLED:_o,autoDetectResource:vu,AbstractMultiResource:yu,ArrayResource:Kd,BufferResource:dn,CanvasResource:Zd,CubeResource:Jd,ImageResource:mu,SVGResource:Qd,VideoResource:tp,ImageBitmapResource:ep},YR=function(r){st(e,r);function e(){return r!==null&&r.apply(this,arguments)||this}return e.prototype.upload=function(t,n,i){var o=t.gl;o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,n.alphaMode===pe.UNPACK);var a=n.realWidth,s=n.realHeight;return i.width===a&&i.height===s?o.texSubImage2D(n.target,0,0,0,a,s,n.format,i.type,this.data):(i.width=a,i.height=s,o.texImage2D(n.target,0,i.internalFormat,a,s,0,n.format,i.type,this.data)),!0},e}(dn),Ds=function(){function r(e,t){this.width=Math.round(e||100),this.height=Math.round(t||100),this.stencil=!1,this.depth=!1,this.dirtyId=0,this.dirtyFormat=0,this.dirtySize=0,this.depthTexture=null,this.colorTextures=[],this.glFramebuffers={},this.disposeRunner=new Nt("disposeFramebuffer"),this.multisample=lt.NONE}return Object.defineProperty(r.prototype,"colorTexture",{get:function(){return this.colorTextures[0]},enumerable:!1,configurable:!0}),r.prototype.addColorTexture=function(e,t){return e===void 0&&(e=0),this.colorTextures[e]=t||new q(null,{scaleMode:Ht.NEAREST,resolution:1,mipmap:te.OFF,width:this.width,height:this.height}),this.dirtyId++,this.dirtyFormat++,this},r.prototype.addDepthTexture=function(e){return this.depthTexture=e||new q(new YR(null,{width:this.width,height:this.height}),{scaleMode:Ht.NEAREST,resolution:1,width:this.width,height:this.height,mipmap:te.OFF,format:P.DEPTH_COMPONENT,type:U.UNSIGNED_SHORT}),this.dirtyId++,this.dirtyFormat++,this},r.prototype.enableDepth=function(){return this.depth=!0,this.dirtyId++,this.dirtyFormat++,this},r.prototype.enableStencil=function(){return this.stencil=!0,this.dirtyId++,this.dirtyFormat++,this},r.prototype.resize=function(e,t){if(e=Math.round(e),t=Math.round(t),!(e===this.width&&t===this.height)){this.width=e,this.height=t,this.dirtyId++,this.dirtySize++;for(var n=0;n<this.colorTextures.length;n++){var i=this.colorTextures[n],o=i.resolution;i.setSize(e/o,t/o)}if(this.depthTexture){var o=this.depthTexture.resolution;this.depthTexture.setSize(e/o,t/o)}}},r.prototype.dispose=function(){this.disposeRunner.emit(this,!1)},r.prototype.destroyDepthTexture=function(){this.depthTexture&&(this.depthTexture.destroy(),this.depthTexture=null,++this.dirtyId,++this.dirtyFormat)},r}(),rp=function(r){st(e,r);function e(t){t===void 0&&(t={});var n=this;if(typeof t=="number"){var i=arguments[0],o=arguments[1],a=arguments[2],s=arguments[3];t={width:i,height:o,scaleMode:a,resolution:s}}return t.width=t.width||100,t.height=t.height||100,t.multisample=t.multisample!==void 0?t.multisample:lt.NONE,n=r.call(this,null,t)||this,n.mipmap=te.OFF,n.valid=!0,n.clearColor=[0,0,0,0],n.framebuffer=new Ds(n.realWidth,n.realHeight).addColorTexture(0,n),n.framebuffer.multisample=t.multisample,n.maskStack=[],n.filterStack=[{}],n}return e.prototype.resize=function(t,n){this.framebuffer.resize(t*this.resolution,n*this.resolution),this.setRealSize(this.framebuffer.width,this.framebuffer.height)},e.prototype.dispose=function(){this.framebuffer.dispose(),r.prototype.dispose.call(this)},e.prototype.destroy=function(){r.prototype.destroy.call(this),this.framebuffer.destroyDepthTexture(),this.framebuffer=null},e}(q),np=function(){function r(){this.x0=0,this.y0=0,this.x1=1,this.y1=0,this.x2=1,this.y2=1,this.x3=0,this.y3=1,this.uvsFloat32=new Float32Array(8)}return r.prototype.set=function(e,t,n){var i=t.width,o=t.height;if(n){var a=e.width/2/i,s=e.height/2/o,u=e.x/i+a,l=e.y/o+s;n=dt.add(n,dt.NW),this.x0=u+a*dt.uX(n),this.y0=l+s*dt.uY(n),n=dt.add(n,2),this.x1=u+a*dt.uX(n),this.y1=l+s*dt.uY(n),n=dt.add(n,2),this.x2=u+a*dt.uX(n),this.y2=l+s*dt.uY(n),n=dt.add(n,2),this.x3=u+a*dt.uX(n),this.y3=l+s*dt.uY(n)}else this.x0=e.x/i,this.y0=e.y/o,this.x1=(e.x+e.width)/i,this.y1=e.y/o,this.x2=(e.x+e.width)/i,this.y2=(e.y+e.height)/o,this.x3=e.x/i,this.y3=(e.y+e.height)/o;this.uvsFloat32[0]=this.x0,this.uvsFloat32[1]=this.y0,this.uvsFloat32[2]=this.x1,this.uvsFloat32[3]=this.y1,this.uvsFloat32[4]=this.x2,this.uvsFloat32[5]=this.y2,this.uvsFloat32[6]=this.x3,this.uvsFloat32[7]=this.y3},r.prototype.toString=function(){return"[@pixi/core:TextureUvs "+("x0="+this.x0+" y0="+this.y0+" ")+("x1="+this.x1+" y1="+this.y1+" x2="+this.x2+" ")+("y2="+this.y2+" x3="+this.x3+" y3="+this.y3)+"]"},r}(),_y=new np;function la(r){r.destroy=function(){},r.on=function(){},r.once=function(){},r.emit=function(){}}var G=function(r){st(e,r);function e(t,n,i,o,a,s){var u=r.call(this)||this;if(u.noFrame=!1,n||(u.noFrame=!0,n=new K(0,0,1,1)),t instanceof e&&(t=t.baseTexture),u.baseTexture=t,u._frame=n,u.trim=o,u.valid=!1,u._uvs=_y,u.uvMatrix=null,u.orig=i||n,u._rotate=Number(a||0),a===!0)u._rotate=2;else if(u._rotate%2!==0)throw new Error("attempt to use diamond-shaped UVs. If you are sure, set rotation manually");return u.defaultAnchor=s?new X(s.x,s.y):new X(0,0),u._updateID=0,u.textureCacheIds=[],t.valid?u.noFrame?t.valid&&u.onBaseTextureUpdated(t):u.frame=n:t.once("loaded",u.onBaseTextureUpdated,u),u.noFrame&&t.on("update",u.onBaseTextureUpdated,u),u}return e.prototype.update=function(){this.baseTexture.resource&&this.baseTexture.resource.update()},e.prototype.onBaseTextureUpdated=function(t){if(this.noFrame){if(!this.baseTexture.valid)return;this._frame.width=t.width,this._frame.height=t.height,this.valid=!0,this.updateUvs()}else this.frame=this._frame;this.emit("update",this)},e.prototype.destroy=function(t){if(this.baseTexture){if(t){var n=this.baseTexture.resource;n&&n.url&&Zt[n.url]&&e.removeFromCache(n.url),this.baseTexture.destroy()}this.baseTexture.off("loaded",this.onBaseTextureUpdated,this),this.baseTexture.off("update",this.onBaseTextureUpdated,this),this.baseTexture=null}this._frame=null,this._uvs=null,this.trim=null,this.orig=null,this.valid=!1,e.removeFromCache(this),this.textureCacheIds=null},e.prototype.clone=function(){var t=this._frame.clone(),n=this._frame===this.orig?t:this.orig.clone(),i=new e(this.baseTexture,!this.noFrame&&t,n,this.trim&&this.trim.clone(),this.rotate,this.defaultAnchor);return this.noFrame&&(i._frame=t),i},e.prototype.updateUvs=function(){this._uvs===_y&&(this._uvs=new np),this._uvs.set(this._frame,this.baseTexture,this.rotate),this._updateID++},e.from=function(t,n,i){n===void 0&&(n={}),i===void 0&&(i=C.STRICT_TEXTURE_CACHE);var o=typeof t=="string",a=null;if(o)a=t;else if(t instanceof q){if(!t.cacheId){var s=n&&n.pixiIdPrefix||"pixiid";t.cacheId=s+"-"+wr(),q.addToCache(t,t.cacheId)}a=t.cacheId}else{if(!t._pixiId){var s=n&&n.pixiIdPrefix||"pixiid";t._pixiId=s+"_"+wr()}a=t._pixiId}var u=Zt[a];if(o&&i&&!u)throw new Error('The cacheId "'+a+'" does not exist in TextureCache.');return!u&&!(t instanceof q)?(n.resolution||(n.resolution=yo(t)),u=new e(new q(t,n)),u.baseTexture.cacheId=a,q.addToCache(u.baseTexture,a),e.addToCache(u,a)):!u&&t instanceof q&&(u=new e(t),e.addToCache(u,a)),u},e.fromURL=function(t,n){var i=Object.assign({autoLoad:!1},n==null?void 0:n.resourceOptions),o=e.from(t,Object.assign({resourceOptions:i},n),!1),a=o.baseTexture.resource;return o.baseTexture.valid?Promise.resolve(o):a.load().then(function(){return Promise.resolve(o)})},e.fromBuffer=function(t,n,i,o){return new e(q.fromBuffer(t,n,i,o))},e.fromLoader=function(t,n,i,o){var a=new q(t,Object.assign({scaleMode:C.SCALE_MODE,resolution:yo(n)},o)),s=a.resource;s instanceof mu&&(s.url=n);var u=new e(a);return i||(i=n),q.addToCache(u.baseTexture,i),e.addToCache(u,i),i!==n&&(q.addToCache(u.baseTexture,n),e.addToCache(u,n)),u.baseTexture.valid?Promise.resolve(u):new Promise(function(l){u.baseTexture.once("loaded",function(){return l(u)})})},e.addToCache=function(t,n){n&&(t.textureCacheIds.indexOf(n)===-1&&t.textureCacheIds.push(n),Zt[n]&&console.warn("Texture added to the cache with an id ["+n+"] that already had an entry"),Zt[n]=t)},e.removeFromCache=function(t){if(typeof t=="string"){var n=Zt[t];if(n){var i=n.textureCacheIds.indexOf(t);return i>-1&&n.textureCacheIds.splice(i,1),delete Zt[t],n}}else if(t&&t.textureCacheIds){for(var o=0;o<t.textureCacheIds.length;++o)Zt[t.textureCacheIds[o]]===t&&delete Zt[t.textureCacheIds[o]];return t.textureCacheIds.length=0,t}return null},Object.defineProperty(e.prototype,"resolution",{get:function(){return this.baseTexture.resolution},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"frame",{get:function(){return this._frame},set:function(t){this._frame=t,this.noFrame=!1;var n=t.x,i=t.y,o=t.width,a=t.height,s=n+o>this.baseTexture.width,u=i+a>this.baseTexture.height;if(s||u){var l=s&&u?"and":"or",f="X: "+n+" + "+o+" = "+(n+o)+" > "+this.baseTexture.width,c="Y: "+i+" + "+a+" = "+(i+a)+" > "+this.baseTexture.height;throw new Error("Texture Error: frame does not fit inside the base Texture dimensions: "+(f+" "+l+" "+c))}this.valid=o&&a&&this.baseTexture.valid,!this.trim&&!this.rotate&&(this.orig=t),this.valid&&this.updateUvs()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"rotate",{get:function(){return this._rotate},set:function(t){this._rotate=t,this.valid&&this.updateUvs()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"width",{get:function(){return this.orig.width},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"height",{get:function(){return this.orig.height},enumerable:!1,configurable:!0}),e.prototype.castToBaseTexture=function(){return this.baseTexture},Object.defineProperty(e,"EMPTY",{get:function(){return e._EMPTY||(e._EMPTY=new e(new q),la(e._EMPTY),la(e._EMPTY.baseTexture)),e._EMPTY},enumerable:!1,configurable:!0}),Object.defineProperty(e,"WHITE",{get:function(){if(!e._WHITE){var t=C.ADAPTER.createCanvas(16,16),n=t.getContext("2d");t.width=16,t.height=16,n.fillStyle="white",n.fillRect(0,0,16,16),e._WHITE=new e(q.from(t)),la(e._WHITE),la(e._WHITE.baseTexture)}return e._WHITE},enumerable:!1,configurable:!0}),e}(cn),Pr=function(r){st(e,r);function e(t,n){var i=r.call(this,t,n)||this;return i.valid=!0,i.filterFrame=null,i.filterPoolKey=null,i.updateUvs(),i}return Object.defineProperty(e.prototype,"framebuffer",{get:function(){return this.baseTexture.framebuffer},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"multisample",{get:function(){return this.framebuffer.multisample},set:function(t){this.framebuffer.multisample=t},enumerable:!1,configurable:!0}),e.prototype.resize=function(t,n,i){i===void 0&&(i=!0);var o=this.baseTexture.resolution,a=Math.round(t*o)/o,s=Math.round(n*o)/o;this.valid=a>0&&s>0,this._frame.width=this.orig.width=a,this._frame.height=this.orig.height=s,i&&this.baseTexture.resize(a,s),this.updateUvs()},e.prototype.setResolution=function(t){var n=this.baseTexture;n.resolution!==t&&(n.setResolution(t),this.resize(n.width,n.height,!1))},e.create=function(t){for(var n=arguments,i=[],o=1;o<arguments.length;o++)i[o-1]=n[o];return typeof t=="number"&&(Vt("6.0.0","Arguments (width, height, scaleMode, resolution) have been deprecated."),t={width:t,height:i[0],scaleMode:i[1],resolution:i[2]}),new e(new rp(t))},e}(G),mb=function(){function r(e){this.texturePool={},this.textureOptions=e||{},this.enableFullScreen=!1,this._pixelsWidth=0,this._pixelsHeight=0}return r.prototype.createTexture=function(e,t,n){n===void 0&&(n=lt.NONE);var i=new rp(Object.assign({width:e,height:t,resolution:1,multisample:n},this.textureOptions));return new Pr(i)},r.prototype.getOptimalTexture=function(e,t,n,i){n===void 0&&(n=1),i===void 0&&(i=lt.NONE);var o;e=Math.ceil(e*n-1e-6),t=Math.ceil(t*n-1e-6),!this.enableFullScreen||e!==this._pixelsWidth||t!==this._pixelsHeight?(e=vo(e),t=vo(t),o=((e&65535)<<16|t&65535)>>>0,i>1&&(o+=i*4294967296)):o=i>1?-i:-1,this.texturePool[o]||(this.texturePool[o]=[]);var a=this.texturePool[o].pop();return a||(a=this.createTexture(e,t,i)),a.filterPoolKey=o,a.setResolution(n),a},r.prototype.getFilterTexture=function(e,t,n){var i=this.getOptimalTexture(e.width,e.height,t||e.resolution,n||lt.NONE);return i.filterFrame=e.filterFrame,i},r.prototype.returnTexture=function(e){var t=e.filterPoolKey;e.filterFrame=null,this.texturePool[t].push(e)},r.prototype.returnFilterTexture=function(e){this.returnTexture(e)},r.prototype.clear=function(e){if(e=e!==!1,e)for(var t in this.texturePool){var n=this.texturePool[t];if(n)for(var i=0;i<n.length;i++)n[i].destroy(!0)}this.texturePool={}},r.prototype.setScreenSize=function(e){if(!(e.width===this._pixelsWidth&&e.height===this._pixelsHeight)){this.enableFullScreen=e.width>0&&e.height>0;for(var t in this.texturePool)if(Number(t)<0){var n=this.texturePool[t];if(n)for(var i=0;i<n.length;i++)n[i].destroy(!0);this.texturePool[t]=[]}this._pixelsWidth=e.width,this._pixelsHeight=e.height}},r.SCREEN_KEY=-1,r}(),Fh=function(){function r(e,t,n,i,o,a,s){t===void 0&&(t=0),n===void 0&&(n=!1),i===void 0&&(i=U.FLOAT),this.buffer=e,this.size=t,this.normalized=n,this.type=i,this.stride=o,this.start=a,this.instance=s}return r.prototype.destroy=function(){this.buffer=null},r.from=function(e,t,n,i,o){return new r(e,t,n,i,o)},r}(),qR=0,Ot=function(){function r(e,t,n){t===void 0&&(t=!0),n===void 0&&(n=!1),this.data=e||new Float32Array(1),this._glBuffers={},this._updateID=0,this.index=n,this.static=t,this.id=qR++,this.disposeRunner=new Nt("disposeBuffer")}return r.prototype.update=function(e){e instanceof Array&&(e=new Float32Array(e)),this.data=e||this.data,this._updateID++},r.prototype.dispose=function(){this.disposeRunner.emit(this,!1)},r.prototype.destroy=function(){this.dispose(),this.data=null},Object.defineProperty(r.prototype,"index",{get:function(){return this.type===Oe.ELEMENT_ARRAY_BUFFER},set:function(e){this.type=e?Oe.ELEMENT_ARRAY_BUFFER:Oe.ARRAY_BUFFER},enumerable:!1,configurable:!0}),r.from=function(e){return e instanceof Array&&(e=new Float32Array(e)),new r(e)},r}(),KR={Float32Array,Uint32Array,Int32Array,Uint8Array};function ZR(r,e){for(var t=0,n=0,i={},o=0;o<r.length;o++)n+=e[o],t+=r[o].length;for(var a=new ArrayBuffer(t*4),s=null,u=0,o=0;o<r.length;o++){var l=e[o],f=r[o],c=pu(f);i[c]||(i[c]=new KR[c](a)),s=i[c];for(var h=0;h<f.length;h++){var d=(h/l|0)*n+u,p=h%l;s[d+p]=f[h]}u+=l}return new Float32Array(a)}var gy={5126:4,5123:2,5121:1},JR=0,QR={Float32Array,Uint32Array,Int32Array,Uint8Array,Uint16Array},_i=function(){function r(e,t){e===void 0&&(e=[]),t===void 0&&(t={}),this.buffers=e,this.indexBuffer=null,this.attributes=t,this.glVertexArrayObjects={},this.id=JR++,this.instanced=!1,this.instanceCount=1,this.disposeRunner=new Nt("disposeGeometry"),this.refCount=0}return r.prototype.addAttribute=function(e,t,n,i,o,a,s,u){if(n===void 0&&(n=0),i===void 0&&(i=!1),u===void 0&&(u=!1),!t)throw new Error("You must pass a buffer when creating an attribute");t instanceof Ot||(t instanceof Array&&(t=new Float32Array(t)),t=new Ot(t));var l=e.split("|");if(l.length>1){for(var f=0;f<l.length;f++)this.addAttribute(l[f],t,n,i,o);return this}var c=this.buffers.indexOf(t);return c===-1&&(this.buffers.push(t),c=this.buffers.length-1),this.attributes[e]=new Fh(c,n,i,o,a,s,u),this.instanced=this.instanced||u,this},r.prototype.getAttribute=function(e){return this.attributes[e]},r.prototype.getBuffer=function(e){return this.buffers[this.getAttribute(e).buffer]},r.prototype.addIndex=function(e){return e instanceof Ot||(e instanceof Array&&(e=new Uint16Array(e)),e=new Ot(e)),e.type=Oe.ELEMENT_ARRAY_BUFFER,this.indexBuffer=e,this.buffers.indexOf(e)===-1&&this.buffers.push(e),this},r.prototype.getIndex=function(){return this.indexBuffer},r.prototype.interleave=function(){if(this.buffers.length===1||this.buffers.length===2&&this.indexBuffer)return this;var e=[],t=[],n=new Ot,i;for(i in this.attributes){var o=this.attributes[i],a=this.buffers[o.buffer];e.push(a.data),t.push(o.size*gy[o.type]/4),o.buffer=0}for(n.data=ZR(e,t),i=0;i<this.buffers.length;i++)this.buffers[i]!==this.indexBuffer&&this.buffers[i].destroy();return this.buffers=[n],this.indexBuffer&&this.buffers.push(this.indexBuffer),this},r.prototype.getSize=function(){for(var e in this.attributes){var t=this.attributes[e],n=this.buffers[t.buffer];return n.data.length/(t.stride/4||t.size)}return 0},r.prototype.dispose=function(){this.disposeRunner.emit(this,!1)},r.prototype.destroy=function(){this.dispose(),this.buffers=null,this.indexBuffer=null,this.attributes=null},r.prototype.clone=function(){for(var e=new r,t=0;t<this.buffers.length;t++)e.buffers[t]=new Ot(this.buffers[t].data.slice(0));for(var t in this.attributes){var n=this.attributes[t];e.attributes[t]=new Fh(n.buffer,n.size,n.normalized,n.type,n.stride,n.start,n.instance)}return this.indexBuffer&&(e.indexBuffer=e.buffers[this.buffers.indexOf(this.indexBuffer)],e.indexBuffer.type=Oe.ELEMENT_ARRAY_BUFFER),e},r.merge=function(e){for(var t=new r,n=[],i=[],o=[],a,s=0;s<e.length;s++){a=e[s];for(var u=0;u<a.buffers.length;u++)i[u]=i[u]||0,i[u]+=a.buffers[u].data.length,o[u]=0}for(var s=0;s<a.buffers.length;s++)n[s]=new QR[pu(a.buffers[s].data)](i[s]),t.buffers[s]=new Ot(n[s]);for(var s=0;s<e.length;s++){a=e[s];for(var u=0;u<a.buffers.length;u++)n[u].set(a.buffers[u].data,o[u]),o[u]+=a.buffers[u].data.length}if(t.attributes=a.attributes,a.indexBuffer){t.indexBuffer=t.buffers[a.buffers.indexOf(a.indexBuffer)],t.indexBuffer.type=Oe.ELEMENT_ARRAY_BUFFER;for(var l=0,f=0,c=0,h=0,s=0;s<a.buffers.length;s++)if(a.buffers[s]!==a.indexBuffer){h=s;break}for(var s in a.attributes){var d=a.attributes[s];(d.buffer|0)===h&&(f+=d.size*gy[d.type]/4)}for(var s=0;s<e.length;s++){for(var p=e[s].indexBuffer.data,u=0;u<p.length;u++)t.indexBuffer.data[u+c]+=l;l+=e[s].buffers[h].data.length/f,c+=p.length}}return t},r}(),_b=function(r){st(e,r);function e(){var t=r.call(this)||this;return t.addAttribute("aVertexPosition",new Float32Array([0,0,1,0,1,1,0,1])).addIndex([0,1,3,2]),t}return e}(_i),ip=function(r){st(e,r);function e(){var t=r.call(this)||this;return t.vertices=new Float32Array([-1,-1,1,-1,1,1,-1,1]),t.uvs=new Float32Array([0,0,1,0,1,1,0,1]),t.vertexBuffer=new Ot(t.vertices),t.uvBuffer=new Ot(t.uvs),t.addAttribute("aVertexPosition",t.vertexBuffer).addAttribute("aTextureCoord",t.uvBuffer).addIndex([0,1,2,0,2,3]),t}return e.prototype.map=function(t,n){var i=0,o=0;return this.uvs[0]=i,this.uvs[1]=o,this.uvs[2]=i+n.width/t.width,this.uvs[3]=o,this.uvs[4]=i+n.width/t.width,this.uvs[5]=o+n.height/t.height,this.uvs[6]=i,this.uvs[7]=o+n.height/t.height,i=n.x,o=n.y,this.vertices[0]=i,this.vertices[1]=o,this.vertices[2]=i+n.width,this.vertices[3]=o,this.vertices[4]=i+n.width,this.vertices[5]=o+n.height,this.vertices[6]=i,this.vertices[7]=o+n.height,this.invalidate(),this},e.prototype.invalidate=function(){return this.vertexBuffer._updateID++,this.uvBuffer._updateID++,this},e}(_i),tI=0,Sr=function(){function r(e,t,n){this.group=!0,this.syncUniforms={},this.dirtyId=0,this.id=tI++,this.static=!!t,this.ubo=!!n,e instanceof Ot?(this.buffer=e,this.buffer.type=Oe.UNIFORM_BUFFER,this.autoManage=!1,this.ubo=!0):(this.uniforms=e,this.ubo&&(this.buffer=new Ot(new Float32Array(1)),this.buffer.type=Oe.UNIFORM_BUFFER,this.autoManage=!0))}return r.prototype.update=function(){this.dirtyId++,!this.autoManage&&this.buffer&&this.buffer.update()},r.prototype.add=function(e,t,n){if(!this.ubo)this.uniforms[e]=new r(t,n);else throw new Error("[UniformGroup] uniform groups in ubo mode cannot be modified, or have uniform groups nested in them")},r.from=function(e,t,n){return new r(e,t,n)},r.uboFrom=function(e,t){return new r(e,t??!0,!0)},r}(),gb=function(){function r(){this.renderTexture=null,this.target=null,this.legacy=!1,this.resolution=1,this.multisample=lt.NONE,this.sourceFrame=new K,this.destinationFrame=new K,this.bindingSourceFrame=new K,this.bindingDestinationFrame=new K,this.filters=[],this.transform=null}return r.prototype.clear=function(){this.target=null,this.filters=null,this.renderTexture=null},r}(),fa=[new X,new X,new X,new X],Ol=new Pt,op=function(){function r(e){this.renderer=e,this.defaultFilterStack=[{}],this.texturePool=new mb,this.texturePool.setScreenSize(e.view),this.statePool=[],this.quad=new _b,this.quadUv=new ip,this.tempRect=new K,this.activeState={},this.globalUniforms=new Sr({outputFrame:new K,inputSize:new Float32Array(4),inputPixel:new Float32Array(4),inputClamp:new Float32Array(4),resolution:1,filterArea:new Float32Array(4),filterClamp:new Float32Array(4)},!0),this.forceClear=!1,this.useMaxPadding=!1}return r.prototype.push=function(e,t){for(var n,i,o=this.renderer,a=this.defaultFilterStack,s=this.statePool.pop()||new gb,u=this.renderer.renderTexture,l=t[0].resolution,f=t[0].multisample,c=t[0].padding,h=t[0].autoFit,d=(n=t[0].legacy)!==null&&n!==void 0?n:!0,p=1;p<t.length;p++){var v=t[p];l=Math.min(l,v.resolution),f=Math.min(f,v.multisample),c=this.useMaxPadding?Math.max(c,v.padding):c+v.padding,h=h&&v.autoFit,d=d||((i=v.legacy)!==null&&i!==void 0?i:!0)}a.length===1&&(this.defaultFilterStack[0].renderTexture=u.current),a.push(s),s.resolution=l,s.multisample=f,s.legacy=d,s.target=e,s.sourceFrame.copyFrom(e.filterArea||e.getBounds(!0)),s.sourceFrame.pad(c);var y=this.tempRect.copyFrom(u.sourceFrame);o.projection.transform&&this.transformAABB(Ol.copyFrom(o.projection.transform).invert(),y),h?(s.sourceFrame.fit(y),(s.sourceFrame.width<=0||s.sourceFrame.height<=0)&&(s.sourceFrame.width=0,s.sourceFrame.height=0)):s.sourceFrame.intersects(y)||(s.sourceFrame.width=0,s.sourceFrame.height=0),this.roundFrame(s.sourceFrame,u.current?u.current.resolution:o.resolution,u.sourceFrame,u.destinationFrame,o.projection.transform),s.renderTexture=this.getOptimalFilterTexture(s.sourceFrame.width,s.sourceFrame.height,l,f),s.filters=t,s.destinationFrame.width=s.renderTexture.width,s.destinationFrame.height=s.renderTexture.height;var m=this.tempRect;m.x=0,m.y=0,m.width=s.sourceFrame.width,m.height=s.sourceFrame.height,s.renderTexture.filterFrame=s.sourceFrame,s.bindingSourceFrame.copyFrom(u.sourceFrame),s.bindingDestinationFrame.copyFrom(u.destinationFrame),s.transform=o.projection.transform,o.projection.transform=null,u.bind(s.renderTexture,s.sourceFrame,m),o.framebuffer.clear(0,0,0,0)},r.prototype.pop=function(){var e=this.defaultFilterStack,t=e.pop(),n=t.filters;this.activeState=t;var i=this.globalUniforms.uniforms;i.outputFrame=t.sourceFrame,i.resolution=t.resolution;var o=i.inputSize,a=i.inputPixel,s=i.inputClamp;if(o[0]=t.destinationFrame.width,o[1]=t.destinationFrame.height,o[2]=1/o[0],o[3]=1/o[1],a[0]=Math.round(o[0]*t.resolution),a[1]=Math.round(o[1]*t.resolution),a[2]=1/a[0],a[3]=1/a[1],s[0]=.5*a[2],s[1]=.5*a[3],s[2]=t.sourceFrame.width*o[2]-.5*a[2],s[3]=t.sourceFrame.height*o[3]-.5*a[3],t.legacy){var u=i.filterArea;u[0]=t.destinationFrame.width,u[1]=t.destinationFrame.height,u[2]=t.sourceFrame.x,u[3]=t.sourceFrame.y,i.filterClamp=i.inputClamp}this.globalUniforms.update();var l=e[e.length-1];if(this.renderer.framebuffer.blit(),n.length===1)n[0].apply(this,t.renderTexture,l.renderTexture,se.BLEND,t),this.returnFilterTexture(t.renderTexture);else{var f=t.renderTexture,c=this.getOptimalFilterTexture(f.width,f.height,t.resolution);c.filterFrame=f.filterFrame;var h=0;for(h=0;h<n.length-1;++h){h===1&&t.multisample>1&&(c=this.getOptimalFilterTexture(f.width,f.height,t.resolution),c.filterFrame=f.filterFrame),n[h].apply(this,f,c,se.CLEAR,t);var d=f;f=c,c=d}n[h].apply(this,f,l.renderTexture,se.BLEND,t),h>1&&t.multisample>1&&this.returnFilterTexture(t.renderTexture),this.returnFilterTexture(f),this.returnFilterTexture(c)}t.clear(),this.statePool.push(t)},r.prototype.bindAndClear=function(e,t){t===void 0&&(t=se.CLEAR);var n=this.renderer,i=n.renderTexture,o=n.state;if(e===this.defaultFilterStack[this.defaultFilterStack.length-1].renderTexture?this.renderer.projection.transform=this.activeState.transform:this.renderer.projection.transform=null,e&&e.filterFrame){var a=this.tempRect;a.x=0,a.y=0,a.width=e.filterFrame.width,a.height=e.filterFrame.height,i.bind(e,e.filterFrame,a)}else e!==this.defaultFilterStack[this.defaultFilterStack.length-1].renderTexture?i.bind(e):this.renderer.renderTexture.bind(e,this.activeState.bindingSourceFrame,this.activeState.bindingDestinationFrame);var s=o.stateId&1||this.forceClear;(t===se.CLEAR||t===se.BLIT&&s)&&this.renderer.framebuffer.clear(0,0,0,0)},r.prototype.applyFilter=function(e,t,n,i){var o=this.renderer;o.state.set(e.state),this.bindAndClear(n,i),e.uniforms.uSampler=t,e.uniforms.filterGlobals=this.globalUniforms,o.shader.bind(e),e.legacy=!!e.program.attributeData.aTextureCoord,e.legacy?(this.quadUv.map(t._frame,t.filterFrame),o.geometry.bind(this.quadUv),o.geometry.draw(ce.TRIANGLES)):(o.geometry.bind(this.quad),o.geometry.draw(ce.TRIANGLE_STRIP))},r.prototype.calculateSpriteMatrix=function(e,t){var n=this.activeState,i=n.sourceFrame,o=n.destinationFrame,a=t._texture.orig,s=e.set(o.width,0,0,o.height,i.x,i.y),u=t.worldTransform.copyTo(Pt.TEMP_MATRIX);return u.invert(),s.prepend(u),s.scale(1/a.width,1/a.height),s.translate(t.anchor.x,t.anchor.y),s},r.prototype.destroy=function(){this.renderer=null,this.texturePool.clear(!1)},r.prototype.getOptimalFilterTexture=function(e,t,n,i){return n===void 0&&(n=1),i===void 0&&(i=lt.NONE),this.texturePool.getOptimalTexture(e,t,n,i)},r.prototype.getFilterTexture=function(e,t,n){if(typeof e=="number"){var i=e;e=t,t=i}e=e||this.activeState.renderTexture;var o=this.texturePool.getOptimalTexture(e.width,e.height,t||e.resolution,n||lt.NONE);return o.filterFrame=e.filterFrame,o},r.prototype.returnFilterTexture=function(e){this.texturePool.returnTexture(e)},r.prototype.emptyPool=function(){this.texturePool.clear(!0)},r.prototype.resize=function(){this.texturePool.setScreenSize(this.renderer.view)},r.prototype.transformAABB=function(e,t){var n=fa[0],i=fa[1],o=fa[2],a=fa[3];n.set(t.left,t.top),i.set(t.left,t.bottom),o.set(t.right,t.top),a.set(t.right,t.bottom),e.apply(n,n),e.apply(i,i),e.apply(o,o),e.apply(a,a);var s=Math.min(n.x,i.x,o.x,a.x),u=Math.min(n.y,i.y,o.y,a.y),l=Math.max(n.x,i.x,o.x,a.x),f=Math.max(n.y,i.y,o.y,a.y);t.x=s,t.y=u,t.width=l-s,t.height=f-u},r.prototype.roundFrame=function(e,t,n,i,o){if(!(e.width<=0||e.height<=0||n.width<=0||n.height<=0)){if(o){var a=o.a,s=o.b,u=o.c,l=o.d;if((Math.abs(s)>1e-4||Math.abs(u)>1e-4)&&(Math.abs(a)>1e-4||Math.abs(l)>1e-4))return}o=o?Ol.copyFrom(o):Ol.identity(),o.translate(-n.x,-n.y).scale(i.width/n.width,i.height/n.height).translate(i.x,i.y),this.transformAABB(o,e),e.ceil(t),this.transformAABB(o.invert(),e)}},r}(),No=function(){function r(e){this.renderer=e}return r.prototype.flush=function(){},r.prototype.destroy=function(){this.renderer=null},r.prototype.start=function(){},r.prototype.stop=function(){this.flush()},r.prototype.render=function(e){},r}(),ap=function(){function r(e){this.renderer=e,this.emptyRenderer=new No(e),this.currentRenderer=this.emptyRenderer}return r.prototype.setObjectRenderer=function(e){this.currentRenderer!==e&&(this.currentRenderer.stop(),this.currentRenderer=e,this.currentRenderer.start())},r.prototype.flush=function(){this.setObjectRenderer(this.emptyRenderer)},r.prototype.reset=function(){this.setObjectRenderer(this.emptyRenderer)},r.prototype.copyBoundTextures=function(e,t){for(var n=this.renderer.texture.boundTextures,i=t-1;i>=0;--i)e[i]=n[i]||null,e[i]&&(e[i]._batchLocation=i)},r.prototype.boundArray=function(e,t,n,i){for(var o=e.elements,a=e.ids,s=e.count,u=0,l=0;l<s;l++){var f=o[l],c=f._batchLocation;if(c>=0&&c<i&&t[c]===f){a[l]=c;continue}for(;u<i;){var h=t[u];if(h&&h._batchEnabled===n&&h._batchLocation===u){u++;continue}a[l]=u,f._batchLocation=u,t[u]=f;break}}},r.prototype.destroy=function(){this.renderer=null},r}(),by=0,sp=function(){function r(e){this.renderer=e,this.webGLVersion=1,this.extensions={},this.supports={uint32Indices:!1},this.handleContextLost=this.handleContextLost.bind(this),this.handleContextRestored=this.handleContextRestored.bind(this),e.view.addEventListener("webglcontextlost",this.handleContextLost,!1),e.view.addEventListener("webglcontextrestored",this.handleContextRestored,!1)}return Object.defineProperty(r.prototype,"isLost",{get:function(){return!this.gl||this.gl.isContextLost()},enumerable:!1,configurable:!0}),r.prototype.contextChange=function(e){this.gl=e,this.renderer.gl=e,this.renderer.CONTEXT_UID=by++},r.prototype.initFromContext=function(e){this.gl=e,this.validateContext(e),this.renderer.gl=e,this.renderer.CONTEXT_UID=by++,this.renderer.runners.contextChange.emit(e)},r.prototype.initFromOptions=function(e){var t=this.createContext(this.renderer.view,e);this.initFromContext(t)},r.prototype.createContext=function(e,t){var n;if(C.PREFER_ENV>=Ce.WEBGL2&&(n=e.getContext("webgl2",t)),n)this.webGLVersion=2;else if(this.webGLVersion=1,n=e.getContext("webgl",t)||e.getContext("experimental-webgl",t),!n)throw new Error("This browser does not support WebGL. Try using the canvas renderer");return this.gl=n,this.getExtensions(),this.gl},r.prototype.getExtensions=function(){var e=this.gl,t={loseContext:e.getExtension("WEBGL_lose_context"),anisotropicFiltering:e.getExtension("EXT_texture_filter_anisotropic"),floatTextureLinear:e.getExtension("OES_texture_float_linear"),s3tc:e.getExtension("WEBGL_compressed_texture_s3tc"),s3tc_sRGB:e.getExtension("WEBGL_compressed_texture_s3tc_srgb"),etc:e.getExtension("WEBGL_compressed_texture_etc"),etc1:e.getExtension("WEBGL_compressed_texture_etc1"),pvrtc:e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"),atc:e.getExtension("WEBGL_compressed_texture_atc"),astc:e.getExtension("WEBGL_compressed_texture_astc")};this.webGLVersion===1?Object.assign(this.extensions,t,{drawBuffers:e.getExtension("WEBGL_draw_buffers"),depthTexture:e.getExtension("WEBGL_depth_texture"),vertexArrayObject:e.getExtension("OES_vertex_array_object")||e.getExtension("MOZ_OES_vertex_array_object")||e.getExtension("WEBKIT_OES_vertex_array_object"),uint32ElementIndex:e.getExtension("OES_element_index_uint"),floatTexture:e.getExtension("OES_texture_float"),floatTextureLinear:e.getExtension("OES_texture_float_linear"),textureHalfFloat:e.getExtension("OES_texture_half_float"),textureHalfFloatLinear:e.getExtension("OES_texture_half_float_linear")}):this.webGLVersion===2&&Object.assign(this.extensions,t,{colorBufferFloat:e.getExtension("EXT_color_buffer_float")})},r.prototype.handleContextLost=function(e){var t=this;e.preventDefault(),setTimeout(function(){t.gl.isContextLost()&&t.extensions.loseContext&&t.extensions.loseContext.restoreContext()},0)},r.prototype.handleContextRestored=function(){this.renderer.runners.contextChange.emit(this.gl)},r.prototype.destroy=function(){var e=this.renderer.view;this.renderer=null,e.removeEventListener("webglcontextlost",this.handleContextLost),e.removeEventListener("webglcontextrestored",this.handleContextRestored),this.gl.useProgram(null),this.extensions.loseContext&&this.extensions.loseContext.loseContext()},r.prototype.postrender=function(){this.renderer.renderingToScreen&&this.gl.flush()},r.prototype.validateContext=function(e){var t=e.getContextAttributes(),n="WebGL2RenderingContext"in globalThis&&e instanceof globalThis.WebGL2RenderingContext;n&&(this.webGLVersion=2),t&&!t.stencil&&console.warn("Provided WebGL context does not have a stencil buffer, masks may not render correctly");var i=n||!!e.getExtension("OES_element_index_uint");this.supports.uint32Indices=i,i||console.warn("Provided WebGL context does not support 32 index buffer, complex graphics may not render correctly")},r}(),bb=function(){function r(e){this.framebuffer=e,this.stencil=null,this.dirtyId=-1,this.dirtyFormat=-1,this.dirtySize=-1,this.multisample=lt.NONE,this.msaaBuffer=null,this.blitFramebuffer=null,this.mipLevel=0}return r}(),eI=new K,up=function(){function r(e){this.renderer=e,this.managedFramebuffers=[],this.unknownFramebuffer=new Ds(10,10),this.msaaSamples=null}return r.prototype.contextChange=function(){this.disposeAll(!0);var e=this.gl=this.renderer.gl;if(this.CONTEXT_UID=this.renderer.CONTEXT_UID,this.current=this.unknownFramebuffer,this.viewport=new K,this.hasMRT=!0,this.writeDepthTexture=!0,this.renderer.context.webGLVersion===1){var t=this.renderer.context.extensions.drawBuffers,n=this.renderer.context.extensions.depthTexture;C.PREFER_ENV===Ce.WEBGL_LEGACY&&(t=null,n=null),t?e.drawBuffers=function(i){return t.drawBuffersWEBGL(i)}:(this.hasMRT=!1,e.drawBuffers=function(){}),n||(this.writeDepthTexture=!1)}else this.msaaSamples=e.getInternalformatParameter(e.RENDERBUFFER,e.RGBA8,e.SAMPLES)},r.prototype.bind=function(e,t,n){n===void 0&&(n=0);var i=this.gl;if(e){var o=e.glFramebuffers[this.CONTEXT_UID]||this.initFramebuffer(e);this.current!==e&&(this.current=e,i.bindFramebuffer(i.FRAMEBUFFER,o.framebuffer)),o.mipLevel!==n&&(e.dirtyId++,e.dirtyFormat++,o.mipLevel=n),o.dirtyId!==e.dirtyId&&(o.dirtyId=e.dirtyId,o.dirtyFormat!==e.dirtyFormat?(o.dirtyFormat=e.dirtyFormat,o.dirtySize=e.dirtySize,this.updateFramebuffer(e,n)):o.dirtySize!==e.dirtySize&&(o.dirtySize=e.dirtySize,this.resizeFramebuffer(e)));for(var a=0;a<e.colorTextures.length;a++){var s=e.colorTextures[a];this.renderer.texture.unbind(s.parentTextureArray||s)}if(e.depthTexture&&this.renderer.texture.unbind(e.depthTexture),t){var u=t.width>>n,l=t.height>>n,f=u/t.width;this.setViewport(t.x*f,t.y*f,u,l)}else{var u=e.width>>n,l=e.height>>n;this.setViewport(0,0,u,l)}}else this.current&&(this.current=null,i.bindFramebuffer(i.FRAMEBUFFER,null)),t?this.setViewport(t.x,t.y,t.width,t.height):this.setViewport(0,0,this.renderer.width,this.renderer.height)},r.prototype.setViewport=function(e,t,n,i){var o=this.viewport;e=Math.round(e),t=Math.round(t),n=Math.round(n),i=Math.round(i),(o.width!==n||o.height!==i||o.x!==e||o.y!==t)&&(o.x=e,o.y=t,o.width=n,o.height=i,this.gl.viewport(e,t,n,i))},Object.defineProperty(r.prototype,"size",{get:function(){return this.current?{x:0,y:0,width:this.current.width,height:this.current.height}:{x:0,y:0,width:this.renderer.width,height:this.renderer.height}},enumerable:!1,configurable:!0}),r.prototype.clear=function(e,t,n,i,o){o===void 0&&(o=so.COLOR|so.DEPTH);var a=this.gl;a.clearColor(e,t,n,i),a.clear(o)},r.prototype.initFramebuffer=function(e){var t=this.gl,n=new bb(t.createFramebuffer());return n.multisample=this.detectSamples(e.multisample),e.glFramebuffers[this.CONTEXT_UID]=n,this.managedFramebuffers.push(e),e.disposeRunner.add(this),n},r.prototype.resizeFramebuffer=function(e){var t=this.gl,n=e.glFramebuffers[this.CONTEXT_UID];n.msaaBuffer&&(t.bindRenderbuffer(t.RENDERBUFFER,n.msaaBuffer),t.renderbufferStorageMultisample(t.RENDERBUFFER,n.multisample,t.RGBA8,e.width,e.height)),n.stencil&&(t.bindRenderbuffer(t.RENDERBUFFER,n.stencil),n.msaaBuffer?t.renderbufferStorageMultisample(t.RENDERBUFFER,n.multisample,t.DEPTH24_STENCIL8,e.width,e.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,e.width,e.height));var i=e.colorTextures,o=i.length;t.drawBuffers||(o=Math.min(o,1));for(var a=0;a<o;a++){var s=i[a],u=s.parentTextureArray||s;this.renderer.texture.bind(u,0)}e.depthTexture&&this.writeDepthTexture&&this.renderer.texture.bind(e.depthTexture,0)},r.prototype.updateFramebuffer=function(e,t){var n=this.gl,i=e.glFramebuffers[this.CONTEXT_UID],o=e.colorTextures,a=o.length;n.drawBuffers||(a=Math.min(a,1)),i.multisample>1&&this.canMultisampleFramebuffer(e)?(i.msaaBuffer=i.msaaBuffer||n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,i.msaaBuffer),n.renderbufferStorageMultisample(n.RENDERBUFFER,i.multisample,n.RGBA8,e.width,e.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,i.msaaBuffer)):i.msaaBuffer&&(n.deleteRenderbuffer(i.msaaBuffer),i.msaaBuffer=null,i.blitFramebuffer&&(i.blitFramebuffer.dispose(),i.blitFramebuffer=null));for(var s=[],u=0;u<a;u++){var l=o[u],f=l.parentTextureArray||l;this.renderer.texture.bind(f,0),!(u===0&&i.msaaBuffer)&&(n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+u,l.target,f._glTextures[this.CONTEXT_UID].texture,t),s.push(n.COLOR_ATTACHMENT0+u))}if(s.length>1&&n.drawBuffers(s),e.depthTexture){var c=this.writeDepthTexture;if(c){var h=e.depthTexture;this.renderer.texture.bind(h,0),n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,h._glTextures[this.CONTEXT_UID].texture,t)}}(e.stencil||e.depth)&&!(e.depthTexture&&this.writeDepthTexture)?(i.stencil=i.stencil||n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,i.stencil),i.msaaBuffer?n.renderbufferStorageMultisample(n.RENDERBUFFER,i.multisample,n.DEPTH24_STENCIL8,e.width,e.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,e.width,e.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,i.stencil)):i.stencil&&(n.deleteRenderbuffer(i.stencil),i.stencil=null)},r.prototype.canMultisampleFramebuffer=function(e){return this.renderer.context.webGLVersion!==1&&e.colorTextures.length<=1&&!e.depthTexture},r.prototype.detectSamples=function(e){var t=this.msaaSamples,n=lt.NONE;if(e<=1||t===null)return n;for(var i=0;i<t.length;i++)if(t[i]<=e){n=t[i];break}return n===1&&(n=lt.NONE),n},r.prototype.blit=function(e,t,n){var i=this,o=i.current,a=i.renderer,s=i.gl,u=i.CONTEXT_UID;if(a.context.webGLVersion===2&&o){var l=o.glFramebuffers[u];if(l){if(!e){if(!l.msaaBuffer)return;var f=o.colorTextures[0];if(!f)return;l.blitFramebuffer||(l.blitFramebuffer=new Ds(o.width,o.height),l.blitFramebuffer.addColorTexture(0,f)),e=l.blitFramebuffer,e.colorTextures[0]!==f&&(e.colorTextures[0]=f,e.dirtyId++,e.dirtyFormat++),(e.width!==o.width||e.height!==o.height)&&(e.width=o.width,e.height=o.height,e.dirtyId++,e.dirtySize++)}t||(t=eI,t.width=o.width,t.height=o.height),n||(n=t);var c=t.width===n.width&&t.height===n.height;this.bind(e),s.bindFramebuffer(s.READ_FRAMEBUFFER,l.framebuffer),s.blitFramebuffer(t.left,t.top,t.right,t.bottom,n.left,n.top,n.right,n.bottom,s.COLOR_BUFFER_BIT,c?s.NEAREST:s.LINEAR)}}},r.prototype.disposeFramebuffer=function(e,t){var n=e.glFramebuffers[this.CONTEXT_UID],i=this.gl;if(n){delete e.glFramebuffers[this.CONTEXT_UID];var o=this.managedFramebuffers.indexOf(e);o>=0&&this.managedFramebuffers.splice(o,1),e.disposeRunner.remove(this),t||(i.deleteFramebuffer(n.framebuffer),n.msaaBuffer&&i.deleteRenderbuffer(n.msaaBuffer),n.stencil&&i.deleteRenderbuffer(n.stencil)),n.blitFramebuffer&&n.blitFramebuffer.dispose()}},r.prototype.disposeAll=function(e){var t=this.managedFramebuffers;this.managedFramebuffers=[];for(var n=0;n<t.length;n++)this.disposeFramebuffer(t[n],e)},r.prototype.forceStencil=function(){var e=this.current;if(e){var t=e.glFramebuffers[this.CONTEXT_UID];if(!(!t||t.stencil)){e.stencil=!0;var n=e.width,i=e.height,o=this.gl,a=o.createRenderbuffer();o.bindRenderbuffer(o.RENDERBUFFER,a),t.msaaBuffer?o.renderbufferStorageMultisample(o.RENDERBUFFER,t.multisample,o.DEPTH24_STENCIL8,n,i):o.renderbufferStorage(o.RENDERBUFFER,o.DEPTH_STENCIL,n,i),t.stencil=a,o.framebufferRenderbuffer(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.RENDERBUFFER,a)}}},r.prototype.reset=function(){this.current=this.unknownFramebuffer,this.viewport=new K},r.prototype.destroy=function(){this.renderer=null},r}(),Pl={5126:4,5123:2,5121:1},lp=function(){function r(e){this.renderer=e,this._activeGeometry=null,this._activeVao=null,this.hasVao=!0,this.hasInstance=!0,this.canUseUInt32ElementIndex=!1,this.managedGeometries={}}return r.prototype.contextChange=function(){this.disposeAll(!0);var e=this.gl=this.renderer.gl,t=this.renderer.context;if(this.CONTEXT_UID=this.renderer.CONTEXT_UID,t.webGLVersion!==2){var n=this.renderer.context.extensions.vertexArrayObject;C.PREFER_ENV===Ce.WEBGL_LEGACY&&(n=null),n?(e.createVertexArray=function(){return n.createVertexArrayOES()},e.bindVertexArray=function(o){return n.bindVertexArrayOES(o)},e.deleteVertexArray=function(o){return n.deleteVertexArrayOES(o)}):(this.hasVao=!1,e.createVertexArray=function(){return null},e.bindVertexArray=function(){return null},e.deleteVertexArray=function(){return null})}if(t.webGLVersion!==2){var i=e.getExtension("ANGLE_instanced_arrays");i?(e.vertexAttribDivisor=function(o,a){return i.vertexAttribDivisorANGLE(o,a)},e.drawElementsInstanced=function(o,a,s,u,l){return i.drawElementsInstancedANGLE(o,a,s,u,l)},e.drawArraysInstanced=function(o,a,s,u){return i.drawArraysInstancedANGLE(o,a,s,u)}):this.hasInstance=!1}this.canUseUInt32ElementIndex=t.webGLVersion===2||!!t.extensions.uint32ElementIndex},r.prototype.bind=function(e,t){t=t||this.renderer.shader.shader;var n=this.gl,i=e.glVertexArrayObjects[this.CONTEXT_UID],o=!1;i||(this.managedGeometries[e.id]=e,e.disposeRunner.add(this),e.glVertexArrayObjects[this.CONTEXT_UID]=i={},o=!0);var a=i[t.program.id]||this.initGeometryVao(e,t,o);this._activeGeometry=e,this._activeVao!==a&&(this._activeVao=a,this.hasVao?n.bindVertexArray(a):this.activateVao(e,t.program)),this.updateBuffers()},r.prototype.reset=function(){this.unbind()},r.prototype.updateBuffers=function(){for(var e=this._activeGeometry,t=this.renderer.buffer,n=0;n<e.buffers.length;n++){var i=e.buffers[n];t.update(i)}},r.prototype.checkCompatibility=function(e,t){var n=e.attributes,i=t.attributeData;for(var o in i)if(!n[o])throw new Error('shader and geometry incompatible, geometry missing the "'+o+'" attribute')},r.prototype.getSignature=function(e,t){var n=e.attributes,i=t.attributeData,o=["g",e.id];for(var a in n)i[a]&&o.push(a,i[a].location);return o.join("-")},r.prototype.initGeometryVao=function(e,t,n){n===void 0&&(n=!0);var i=this.gl,o=this.CONTEXT_UID,a=this.renderer.buffer,s=t.program;s.glPrograms[o]||this.renderer.shader.generateProgram(t),this.checkCompatibility(e,s);var u=this.getSignature(e,s),l=e.glVertexArrayObjects[this.CONTEXT_UID],f=l[u];if(f)return l[s.id]=f,f;var c=e.buffers,h=e.attributes,d={},p={};for(var v in c)d[v]=0,p[v]=0;for(var v in h)!h[v].size&&s.attributeData[v]?h[v].size=s.attributeData[v].size:h[v].size||console.warn("PIXI Geometry attribute '"+v+"' size cannot be determined (likely the bound shader does not have the attribute)"),d[h[v].buffer]+=h[v].size*Pl[h[v].type];for(var v in h){var y=h[v],m=y.size;y.stride===void 0&&(d[y.buffer]===m*Pl[y.type]?y.stride=0:y.stride=d[y.buffer]),y.start===void 0&&(y.start=p[y.buffer],p[y.buffer]+=m*Pl[y.type])}f=i.createVertexArray(),i.bindVertexArray(f);for(var g=0;g<c.length;g++){var _=c[g];a.bind(_),n&&_._glBuffers[o].refCount++}return this.activateVao(e,s),this._activeVao=f,l[s.id]=f,l[u]=f,f},r.prototype.disposeGeometry=function(e,t){var n;if(this.managedGeometries[e.id]){delete this.managedGeometries[e.id];var i=e.glVertexArrayObjects[this.CONTEXT_UID],o=this.gl,a=e.buffers,s=(n=this.renderer)===null||n===void 0?void 0:n.buffer;if(e.disposeRunner.remove(this),!!i){if(s)for(var u=0;u<a.length;u++){var l=a[u]._glBuffers[this.CONTEXT_UID];l&&(l.refCount--,l.refCount===0&&!t&&s.dispose(a[u],t))}if(!t){for(var f in i)if(f[0]==="g"){var c=i[f];this._activeVao===c&&this.unbind(),o.deleteVertexArray(c)}}delete e.glVertexArrayObjects[this.CONTEXT_UID]}}},r.prototype.disposeAll=function(e){for(var t=Object.keys(this.managedGeometries),n=0;n<t.length;n++)this.disposeGeometry(this.managedGeometries[t[n]],e)},r.prototype.activateVao=function(e,t){var n=this.gl,i=this.CONTEXT_UID,o=this.renderer.buffer,a=e.buffers,s=e.attributes;e.indexBuffer&&o.bind(e.indexBuffer);var u=null;for(var l in s){var f=s[l],c=a[f.buffer],h=c._glBuffers[i];if(t.attributeData[l]){u!==h&&(o.bind(c),u=h);var d=t.attributeData[l].location;if(n.enableVertexAttribArray(d),n.vertexAttribPointer(d,f.size,f.type||n.FLOAT,f.normalized,f.stride,f.start),f.instance)if(this.hasInstance)n.vertexAttribDivisor(d,1);else throw new Error("geometry error, GPU Instancing is not supported on this device")}}},r.prototype.draw=function(e,t,n,i){var o=this.gl,a=this._activeGeometry;if(a.indexBuffer){var s=a.indexBuffer.data.BYTES_PER_ELEMENT,u=s===2?o.UNSIGNED_SHORT:o.UNSIGNED_INT;s===2||s===4&&this.canUseUInt32ElementIndex?a.instanced?o.drawElementsInstanced(e,t||a.indexBuffer.data.length,u,(n||0)*s,i||1):o.drawElements(e,t||a.indexBuffer.data.length,u,(n||0)*s):console.warn("unsupported index buffer type: uint32")}else a.instanced?o.drawArraysInstanced(e,n,t||a.getSize(),i||1):o.drawArrays(e,n,t||a.getSize());return this},r.prototype.unbind=function(){this.gl.bindVertexArray(null),this._activeVao=null,this._activeGeometry=null},r.prototype.destroy=function(){this.renderer=null},r}(),xb=function(){function r(e){e===void 0&&(e=null),this.type=St.NONE,this.autoDetect=!0,this.maskObject=e||null,this.pooled=!1,this.isMaskData=!0,this.resolution=null,this.multisample=C.FILTER_MULTISAMPLE,this.enabled=!0,this.colorMask=15,this._filters=null,this._stencilCounter=0,this._scissorCounter=0,this._scissorRect=null,this._scissorRectLocal=null,this._colorMask=15,this._target=null}return Object.defineProperty(r.prototype,"filter",{get:function(){return this._filters?this._filters[0]:null},set:function(e){e?this._filters?this._filters[0]=e:this._filters=[e]:this._filters=null},enumerable:!1,configurable:!0}),r.prototype.reset=function(){this.pooled&&(this.maskObject=null,this.type=St.NONE,this.autoDetect=!0),this._target=null,this._scissorRectLocal=null},r.prototype.copyCountersOrReset=function(e){e?(this._stencilCounter=e._stencilCounter,this._scissorCounter=e._scissorCounter,this._scissorRect=e._scissorRect):(this._stencilCounter=0,this._scissorCounter=0,this._scissorRect=null)},r}();function xy(r,e,t){var n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}function Ty(r,e){var t=r.getShaderSource(e).split(`
`).map(function(l,f){return f+": "+l}),n=r.getShaderInfoLog(e),i=n.split(`
`),o={},a=i.map(function(l){return parseFloat(l.replace(/^ERROR\: 0\:([\d]+)\:.*$/,"$1"))}).filter(function(l){return l&&!o[l]?(o[l]=!0,!0):!1}),s=[""];a.forEach(function(l){t[l-1]="%c"+t[l-1]+"%c",s.push("background: #FF0000; color:#FFFFFF; font-size: 10px","font-size: 10px")});var u=t.join(`
`);s[0]=u,console.error(n),console.groupCollapsed("click to view full shader code"),console.warn.apply(console,s),console.groupEnd()}function rI(r,e,t,n){r.getProgramParameter(e,r.LINK_STATUS)||(r.getShaderParameter(t,r.COMPILE_STATUS)||Ty(r,t),r.getShaderParameter(n,r.COMPILE_STATUS)||Ty(r,n),console.error("PixiJS Error: Could not initialize shader."),r.getProgramInfoLog(e)!==""&&console.warn("PixiJS Warning: gl.getProgramInfoLog()",r.getProgramInfoLog(e)))}function Al(r){for(var e=new Array(r),t=0;t<e.length;t++)e[t]=!1;return e}function Tb(r,e){switch(r){case"float":return 0;case"vec2":return new Float32Array(2*e);case"vec3":return new Float32Array(3*e);case"vec4":return new Float32Array(4*e);case"int":case"uint":case"sampler2D":case"sampler2DArray":return 0;case"ivec2":return new Int32Array(2*e);case"ivec3":return new Int32Array(3*e);case"ivec4":return new Int32Array(4*e);case"uvec2":return new Uint32Array(2*e);case"uvec3":return new Uint32Array(3*e);case"uvec4":return new Uint32Array(4*e);case"bool":return!1;case"bvec2":return Al(2*e);case"bvec3":return Al(3*e);case"bvec4":return Al(4*e);case"mat2":return new Float32Array([1,0,0,1]);case"mat3":return new Float32Array([1,0,0,0,1,0,0,0,1]);case"mat4":return new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])}return null}var Sb={},Oi=Sb;function Eb(){if(Oi===Sb||Oi&&Oi.isContextLost()){var r=C.ADAPTER.createCanvas(),e=void 0;C.PREFER_ENV>=Ce.WEBGL2&&(e=r.getContext("webgl2",{})),e||(e=r.getContext("webgl",{})||r.getContext("experimental-webgl",{}),e?e.getExtension("WEBGL_draw_buffers"):e=null),Oi=e}return Oi}var ha;function nI(){if(!ha){ha=Xt.MEDIUM;var r=Eb();if(r&&r.getShaderPrecisionFormat){var e=r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT);ha=e.precision?Xt.HIGH:Xt.MEDIUM}}return ha}function Sy(r,e,t){if(r.substring(0,9)!=="precision"){var n=e;return e===Xt.HIGH&&t!==Xt.HIGH&&(n=Xt.MEDIUM),"precision "+n+` float;
`+r}else if(t!==Xt.HIGH&&r.substring(0,15)==="precision highp")return r.replace("precision highp","precision mediump");return r}var iI={float:1,vec2:2,vec3:3,vec4:4,int:1,ivec2:2,ivec3:3,ivec4:4,uint:1,uvec2:2,uvec3:3,uvec4:4,bool:1,bvec2:2,bvec3:3,bvec4:4,mat2:4,mat3:9,mat4:16,sampler2D:1};function wb(r){return iI[r]}var ca=null,Ey={FLOAT:"float",FLOAT_VEC2:"vec2",FLOAT_VEC3:"vec3",FLOAT_VEC4:"vec4",INT:"int",INT_VEC2:"ivec2",INT_VEC3:"ivec3",INT_VEC4:"ivec4",UNSIGNED_INT:"uint",UNSIGNED_INT_VEC2:"uvec2",UNSIGNED_INT_VEC3:"uvec3",UNSIGNED_INT_VEC4:"uvec4",BOOL:"bool",BOOL_VEC2:"bvec2",BOOL_VEC3:"bvec3",BOOL_VEC4:"bvec4",FLOAT_MAT2:"mat2",FLOAT_MAT3:"mat3",FLOAT_MAT4:"mat4",SAMPLER_2D:"sampler2D",INT_SAMPLER_2D:"sampler2D",UNSIGNED_INT_SAMPLER_2D:"sampler2D",SAMPLER_CUBE:"samplerCube",INT_SAMPLER_CUBE:"samplerCube",UNSIGNED_INT_SAMPLER_CUBE:"samplerCube",SAMPLER_2D_ARRAY:"sampler2DArray",INT_SAMPLER_2D_ARRAY:"sampler2DArray",UNSIGNED_INT_SAMPLER_2D_ARRAY:"sampler2DArray"};function Ob(r,e){if(!ca){var t=Object.keys(Ey);ca={};for(var n=0;n<t.length;++n){var i=t[n];ca[r[i]]=Ey[i]}}return ca[e]}var Jr=[{test:function(r){return r.type==="float"&&r.size===1&&!r.isArray},code:function(r){return`
            if(uv["`+r+'"] !== ud["'+r+`"].value)
            {
                ud["`+r+'"].value = uv["'+r+`"]
                gl.uniform1f(ud["`+r+'"].location, uv["'+r+`"])
            }
            `}},{test:function(r,e){return(r.type==="sampler2D"||r.type==="samplerCube"||r.type==="sampler2DArray")&&r.size===1&&!r.isArray&&(e==null||e.castToBaseTexture!==void 0)},code:function(r){return`t = syncData.textureCount++;

            renderer.texture.bind(uv["`+r+`"], t);

            if(ud["`+r+`"].value !== t)
            {
                ud["`+r+`"].value = t;
                gl.uniform1i(ud["`+r+`"].location, t);
; // eslint-disable-line max-len
            }`}},{test:function(r,e){return r.type==="mat3"&&r.size===1&&!r.isArray&&e.a!==void 0},code:function(r){return`
            gl.uniformMatrix3fv(ud["`+r+'"].location, false, uv["'+r+`"].toArray(true));
            `},codeUbo:function(r){return`
                var `+r+"_matrix = uv."+r+`.toArray(true);

                data[offset] = `+r+`_matrix[0];
                data[offset+1] = `+r+`_matrix[1];
                data[offset+2] = `+r+`_matrix[2];
        
                data[offset + 4] = `+r+`_matrix[3];
                data[offset + 5] = `+r+`_matrix[4];
                data[offset + 6] = `+r+`_matrix[5];
        
                data[offset + 8] = `+r+`_matrix[6];
                data[offset + 9] = `+r+`_matrix[7];
                data[offset + 10] = `+r+`_matrix[8];
            `}},{test:function(r,e){return r.type==="vec2"&&r.size===1&&!r.isArray&&e.x!==void 0},code:function(r){return`
                cv = ud["`+r+`"].value;
                v = uv["`+r+`"];

                if(cv[0] !== v.x || cv[1] !== v.y)
                {
                    cv[0] = v.x;
                    cv[1] = v.y;
                    gl.uniform2f(ud["`+r+`"].location, v.x, v.y);
                }`},codeUbo:function(r){return`
                v = uv.`+r+`;

                data[offset] = v.x;
                data[offset+1] = v.y;
            `}},{test:function(r){return r.type==="vec2"&&r.size===1&&!r.isArray},code:function(r){return`
                cv = ud["`+r+`"].value;
                v = uv["`+r+`"];

                if(cv[0] !== v[0] || cv[1] !== v[1])
                {
                    cv[0] = v[0];
                    cv[1] = v[1];
                    gl.uniform2f(ud["`+r+`"].location, v[0], v[1]);
                }
            `}},{test:function(r,e){return r.type==="vec4"&&r.size===1&&!r.isArray&&e.width!==void 0},code:function(r){return`
                cv = ud["`+r+`"].value;
                v = uv["`+r+`"];

                if(cv[0] !== v.x || cv[1] !== v.y || cv[2] !== v.width || cv[3] !== v.height)
                {
                    cv[0] = v.x;
                    cv[1] = v.y;
                    cv[2] = v.width;
                    cv[3] = v.height;
                    gl.uniform4f(ud["`+r+`"].location, v.x, v.y, v.width, v.height)
                }`},codeUbo:function(r){return`
                    v = uv.`+r+`;

                    data[offset] = v.x;
                    data[offset+1] = v.y;
                    data[offset+2] = v.width;
                    data[offset+3] = v.height;
                `}},{test:function(r){return r.type==="vec4"&&r.size===1&&!r.isArray},code:function(r){return`
                cv = ud["`+r+`"].value;
                v = uv["`+r+`"];

                if(cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])
                {
                    cv[0] = v[0];
                    cv[1] = v[1];
                    cv[2] = v[2];
                    cv[3] = v[3];

                    gl.uniform4f(ud["`+r+`"].location, v[0], v[1], v[2], v[3])
                }`}}],oI={float:`
    if (cv !== v)
    {
        cu.value = v;
        gl.uniform1f(location, v);
    }`,vec2:`
    if (cv[0] !== v[0] || cv[1] !== v[1])
    {
        cv[0] = v[0];
        cv[1] = v[1];

        gl.uniform2f(location, v[0], v[1])
    }`,vec3:`
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];

        gl.uniform3f(location, v[0], v[1], v[2])
    }`,vec4:`
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];
        cv[3] = v[3];

        gl.uniform4f(location, v[0], v[1], v[2], v[3]);
    }`,int:`
    if (cv !== v)
    {
        cu.value = v;

        gl.uniform1i(location, v);
    }`,ivec2:`
    if (cv[0] !== v[0] || cv[1] !== v[1])
    {
        cv[0] = v[0];
        cv[1] = v[1];

        gl.uniform2i(location, v[0], v[1]);
    }`,ivec3:`
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];

        gl.uniform3i(location, v[0], v[1], v[2]);
    }`,ivec4:`
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];
        cv[3] = v[3];

        gl.uniform4i(location, v[0], v[1], v[2], v[3]);
    }`,uint:`
    if (cv !== v)
    {
        cu.value = v;

        gl.uniform1ui(location, v);
    }`,uvec2:`
    if (cv[0] !== v[0] || cv[1] !== v[1])
    {
        cv[0] = v[0];
        cv[1] = v[1];

        gl.uniform2ui(location, v[0], v[1]);
    }`,uvec3:`
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];

        gl.uniform3ui(location, v[0], v[1], v[2]);
    }`,uvec4:`
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];
        cv[3] = v[3];

        gl.uniform4ui(location, v[0], v[1], v[2], v[3]);
    }`,bool:`
    if (cv !== v)
    {
        cu.value = v;
        gl.uniform1i(location, v);
    }`,bvec2:`
    if (cv[0] != v[0] || cv[1] != v[1])
    {
        cv[0] = v[0];
        cv[1] = v[1];

        gl.uniform2i(location, v[0], v[1]);
    }`,bvec3:`
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];

        gl.uniform3i(location, v[0], v[1], v[2]);
    }`,bvec4:`
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];
        cv[3] = v[3];

        gl.uniform4i(location, v[0], v[1], v[2], v[3]);
    }`,mat2:"gl.uniformMatrix2fv(location, false, v)",mat3:"gl.uniformMatrix3fv(location, false, v)",mat4:"gl.uniformMatrix4fv(location, false, v)",sampler2D:`
    if (cv !== v)
    {
        cu.value = v;

        gl.uniform1i(location, v);
    }`,samplerCube:`
    if (cv !== v)
    {
        cu.value = v;

        gl.uniform1i(location, v);
    }`,sampler2DArray:`
    if (cv !== v)
    {
        cu.value = v;

        gl.uniform1i(location, v);
    }`},aI={float:"gl.uniform1fv(location, v)",vec2:"gl.uniform2fv(location, v)",vec3:"gl.uniform3fv(location, v)",vec4:"gl.uniform4fv(location, v)",mat4:"gl.uniformMatrix4fv(location, false, v)",mat3:"gl.uniformMatrix3fv(location, false, v)",mat2:"gl.uniformMatrix2fv(location, false, v)",int:"gl.uniform1iv(location, v)",ivec2:"gl.uniform2iv(location, v)",ivec3:"gl.uniform3iv(location, v)",ivec4:"gl.uniform4iv(location, v)",uint:"gl.uniform1uiv(location, v)",uvec2:"gl.uniform2uiv(location, v)",uvec3:"gl.uniform3uiv(location, v)",uvec4:"gl.uniform4uiv(location, v)",bool:"gl.uniform1iv(location, v)",bvec2:"gl.uniform2iv(location, v)",bvec3:"gl.uniform3iv(location, v)",bvec4:"gl.uniform4iv(location, v)",sampler2D:"gl.uniform1iv(location, v)",samplerCube:"gl.uniform1iv(location, v)",sampler2DArray:"gl.uniform1iv(location, v)"};function sI(r,e){var t,n=[`
        var v = null;
        var cv = null;
        var cu = null;
        var t = 0;
        var gl = renderer.gl;
    `];for(var i in r.uniforms){var o=e[i];if(!o){!((t=r.uniforms[i])===null||t===void 0)&&t.group&&(r.uniforms[i].ubo?n.push(`
                        renderer.shader.syncUniformBufferGroup(uv.`+i+", '"+i+`');
                    `):n.push(`
                        renderer.shader.syncUniformGroup(uv.`+i+`, syncData);
                    `));continue}for(var a=r.uniforms[i],s=!1,u=0;u<Jr.length;u++)if(Jr[u].test(o,a)){n.push(Jr[u].code(i,a)),s=!0;break}if(!s){var l=o.size===1&&!o.isArray?oI:aI,f=l[o.type].replace("location",'ud["'+i+'"].location');n.push(`
            cu = ud["`+i+`"];
            cv = cu.value;
            v = uv["`+i+`"];
            `+f+";")}}return new Function("ud","uv","renderer","syncData",n.join(`
`))}var uI=["precision mediump float;","void main(void){","float test = 0.1;","%forloop%","gl_FragColor = vec4(0.0);","}"].join(`
`);function lI(r){for(var e="",t=0;t<r;++t)t>0&&(e+=`
else `),t<r-1&&(e+="if(test == "+t+".0){}");return e}function Pb(r,e){if(r===0)throw new Error("Invalid value of `0` passed to `checkMaxIfStatementsInShader`");for(var t=e.createShader(e.FRAGMENT_SHADER);;){var n=uI.replace(/%forloop%/gi,lI(r));if(e.shaderSource(t,n),e.compileShader(t),!e.getShaderParameter(t,e.COMPILE_STATUS))r=r/2|0;else break}return r}var Pi;function fI(){if(typeof Pi=="boolean")return Pi;try{var r=new Function("param1","param2","param3","return param1[param2] === param3;");Pi=r({a:"b"},"a","b")===!0}catch{Pi=!1}return Pi}var hI=`varying vec2 vTextureCoord;

uniform sampler2D uSampler;

void main(void){
   gl_FragColor *= texture2D(uSampler, vTextureCoord);
}`,cI=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void){
   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
   vTextureCoord = aTextureCoord;
}
`,dI=0,da={},gi=function(){function r(e,t,n){n===void 0&&(n="pixi-shader"),this.id=dI++,this.vertexSrc=e||r.defaultVertexSrc,this.fragmentSrc=t||r.defaultFragmentSrc,this.vertexSrc=this.vertexSrc.trim(),this.fragmentSrc=this.fragmentSrc.trim(),this.vertexSrc.substring(0,8)!=="#version"&&(n=n.replace(/\s+/g,"-"),da[n]?(da[n]++,n+="-"+da[n]):da[n]=1,this.vertexSrc="#define SHADER_NAME "+n+`
`+this.vertexSrc,this.fragmentSrc="#define SHADER_NAME "+n+`
`+this.fragmentSrc,this.vertexSrc=Sy(this.vertexSrc,C.PRECISION_VERTEX,Xt.HIGH),this.fragmentSrc=Sy(this.fragmentSrc,C.PRECISION_FRAGMENT,nI())),this.glPrograms={},this.syncUniforms=null}return Object.defineProperty(r,"defaultVertexSrc",{get:function(){return cI},enumerable:!1,configurable:!0}),Object.defineProperty(r,"defaultFragmentSrc",{get:function(){return hI},enumerable:!1,configurable:!0}),r.from=function(e,t,n){var i=e+t,o=Ah[i];return o||(Ah[i]=o=new r(e,t,n)),o},r}(),Xe=function(){function r(e,t){this.uniformBindCount=0,this.program=e,t?t instanceof Sr?this.uniformGroup=t:this.uniformGroup=new Sr(t):this.uniformGroup=new Sr({}),this.disposeRunner=new Nt("disposeShader")}return r.prototype.checkUniformExists=function(e,t){if(t.uniforms[e])return!0;for(var n in t.uniforms){var i=t.uniforms[n];if(i.group&&this.checkUniformExists(e,i))return!0}return!1},r.prototype.destroy=function(){this.uniformGroup=null,this.disposeRunner.emit(this),this.disposeRunner.destroy()},Object.defineProperty(r.prototype,"uniforms",{get:function(){return this.uniformGroup.uniforms},enumerable:!1,configurable:!0}),r.from=function(e,t,n){var i=gi.from(e,t);return new r(i,n)},r}(),Cl=0,Rl=1,Il=2,Ml=3,Dl=4,Fl=5,Ir=function(){function r(){this.data=0,this.blendMode=B.NORMAL,this.polygonOffset=0,this.blend=!0,this.depthMask=!0}return Object.defineProperty(r.prototype,"blend",{get:function(){return!!(this.data&1<<Cl)},set:function(e){!!(this.data&1<<Cl)!==e&&(this.data^=1<<Cl)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"offsets",{get:function(){return!!(this.data&1<<Rl)},set:function(e){!!(this.data&1<<Rl)!==e&&(this.data^=1<<Rl)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"culling",{get:function(){return!!(this.data&1<<Il)},set:function(e){!!(this.data&1<<Il)!==e&&(this.data^=1<<Il)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"depthTest",{get:function(){return!!(this.data&1<<Ml)},set:function(e){!!(this.data&1<<Ml)!==e&&(this.data^=1<<Ml)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"depthMask",{get:function(){return!!(this.data&1<<Fl)},set:function(e){!!(this.data&1<<Fl)!==e&&(this.data^=1<<Fl)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"clockwiseFrontFace",{get:function(){return!!(this.data&1<<Dl)},set:function(e){!!(this.data&1<<Dl)!==e&&(this.data^=1<<Dl)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"blendMode",{get:function(){return this._blendMode},set:function(e){this.blend=e!==B.NONE,this._blendMode=e},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"polygonOffset",{get:function(){return this._polygonOffset},set:function(e){this.offsets=!!e,this._polygonOffset=e},enumerable:!1,configurable:!0}),r.prototype.toString=function(){return"[@pixi/core:State "+("blendMode="+this.blendMode+" ")+("clockwiseFrontFace="+this.clockwiseFrontFace+" ")+("culling="+this.culling+" ")+("depthMask="+this.depthMask+" ")+("polygonOffset="+this.polygonOffset)+"]"},r.for2d=function(){var e=new r;return e.depthTest=!1,e.blend=!0,e},r}(),pI=`varying vec2 vTextureCoord;

uniform sampler2D uSampler;

void main(void){
   gl_FragColor = texture2D(uSampler, vTextureCoord);
}
`,vI=`attribute vec2 aVertexPosition;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

uniform vec4 inputSize;
uniform vec4 outputFrame;

vec4 filterVertexPosition( void )
{
    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;

    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);
}

vec2 filterTextureCoord( void )
{
    return aVertexPosition * (outputFrame.zw * inputSize.zw);
}

void main(void)
{
    gl_Position = filterVertexPosition();
    vTextureCoord = filterTextureCoord();
}
`,k=function(r){st(e,r);function e(t,n,i){var o=this,a=gi.from(t||e.defaultVertexSrc,n||e.defaultFragmentSrc);return o=r.call(this,a,i)||this,o.padding=0,o.resolution=C.FILTER_RESOLUTION,o.multisample=C.FILTER_MULTISAMPLE,o.enabled=!0,o.autoFit=!0,o.state=new Ir,o}return e.prototype.apply=function(t,n,i,o,a){t.applyFilter(this,n,i,o)},Object.defineProperty(e.prototype,"blendMode",{get:function(){return this.state.blendMode},set:function(t){this.state.blendMode=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"resolution",{get:function(){return this._resolution},set:function(t){this._resolution=t},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultVertexSrc",{get:function(){return vI},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultFragmentSrc",{get:function(){return pI},enumerable:!1,configurable:!0}),e}(Xe),yI=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;
uniform mat3 otherMatrix;

varying vec2 vMaskCoord;
varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);

    vTextureCoord = aTextureCoord;
    vMaskCoord = ( otherMatrix * vec3( aTextureCoord, 1.0)  ).xy;
}
`,mI=`varying vec2 vMaskCoord;
varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform sampler2D mask;
uniform float alpha;
uniform float npmAlpha;
uniform vec4 maskClamp;

void main(void)
{
    float clip = step(3.5,
        step(maskClamp.x, vMaskCoord.x) +
        step(maskClamp.y, vMaskCoord.y) +
        step(vMaskCoord.x, maskClamp.z) +
        step(vMaskCoord.y, maskClamp.w));

    vec4 original = texture2D(uSampler, vTextureCoord);
    vec4 masky = texture2D(mask, vMaskCoord);
    float alphaMul = 1.0 - npmAlpha * (1.0 - masky.a);

    original *= (alphaMul * masky.r * alpha * clip);

    gl_FragColor = original;
}
`,wy=new Pt,_u=function(){function r(e,t){this._texture=e,this.mapCoord=new Pt,this.uClampFrame=new Float32Array(4),this.uClampOffset=new Float32Array(2),this._textureID=-1,this._updateID=0,this.clampOffset=0,this.clampMargin=typeof t>"u"?.5:t,this.isSimple=!1}return Object.defineProperty(r.prototype,"texture",{get:function(){return this._texture},set:function(e){this._texture=e,this._textureID=-1},enumerable:!1,configurable:!0}),r.prototype.multiplyUvs=function(e,t){t===void 0&&(t=e);for(var n=this.mapCoord,i=0;i<e.length;i+=2){var o=e[i],a=e[i+1];t[i]=o*n.a+a*n.c+n.tx,t[i+1]=o*n.b+a*n.d+n.ty}return t},r.prototype.update=function(e){var t=this._texture;if(!t||!t.valid||!e&&this._textureID===t._updateID)return!1;this._textureID=t._updateID,this._updateID++;var n=t._uvs;this.mapCoord.set(n.x1-n.x0,n.y1-n.y0,n.x3-n.x0,n.y3-n.y0,n.x0,n.y0);var i=t.orig,o=t.trim;o&&(wy.set(i.width/o.width,0,0,i.height/o.height,-o.x/o.width,-o.y/o.height),this.mapCoord.append(wy));var a=t.baseTexture,s=this.uClampFrame,u=this.clampMargin/a.resolution,l=this.clampOffset;return s[0]=(t._frame.x+u+l)/a.width,s[1]=(t._frame.y+u+l)/a.height,s[2]=(t._frame.x+t._frame.width-u+l)/a.width,s[3]=(t._frame.y+t._frame.height-u+l)/a.height,this.uClampOffset[0]=l/a.realWidth,this.uClampOffset[1]=l/a.realHeight,this.isSimple=t._frame.width===a.width&&t._frame.height===a.height&&t.rotate===0,!0},r}(),Ab=function(r){st(e,r);function e(t,n,i){var o=this,a=null;return typeof t!="string"&&n===void 0&&i===void 0&&(a=t,t=void 0,n=void 0,i=void 0),o=r.call(this,t||yI,n||mI,i)||this,o.maskSprite=a,o.maskMatrix=new Pt,o}return Object.defineProperty(e.prototype,"maskSprite",{get:function(){return this._maskSprite},set:function(t){this._maskSprite=t,this._maskSprite&&(this._maskSprite.renderable=!1)},enumerable:!1,configurable:!0}),e.prototype.apply=function(t,n,i,o){var a=this._maskSprite,s=a._texture;s.valid&&(s.uvMatrix||(s.uvMatrix=new _u(s,0)),s.uvMatrix.update(),this.uniforms.npmAlpha=s.baseTexture.alphaMode?0:1,this.uniforms.mask=s,this.uniforms.otherMatrix=t.calculateSpriteMatrix(this.maskMatrix,a).prepend(s.uvMatrix.mapCoord),this.uniforms.alpha=a.worldAlpha,this.uniforms.maskClamp=s.uvMatrix.uClampFrame,t.applyFilter(this,n,i,o))},e}(k),fp=function(){function r(e){this.renderer=e,this.enableScissor=!0,this.alphaMaskPool=[],this.maskDataPool=[],this.maskStack=[],this.alphaMaskIndex=0}return r.prototype.setMaskStack=function(e){this.maskStack=e,this.renderer.scissor.setMaskStack(e),this.renderer.stencil.setMaskStack(e)},r.prototype.push=function(e,t){var n=t;if(!n.isMaskData){var i=this.maskDataPool.pop()||new xb;i.pooled=!0,i.maskObject=t,n=i}var o=this.maskStack.length!==0?this.maskStack[this.maskStack.length-1]:null;if(n.copyCountersOrReset(o),n._colorMask=o?o._colorMask:15,n.autoDetect&&this.detect(n),n._target=e,n.type!==St.SPRITE&&this.maskStack.push(n),n.enabled)switch(n.type){case St.SCISSOR:this.renderer.scissor.push(n);break;case St.STENCIL:this.renderer.stencil.push(n);break;case St.SPRITE:n.copyCountersOrReset(null),this.pushSpriteMask(n);break;case St.COLOR:this.pushColorMask(n);break}n.type===St.SPRITE&&this.maskStack.push(n)},r.prototype.pop=function(e){var t=this.maskStack.pop();if(!(!t||t._target!==e)){if(t.enabled)switch(t.type){case St.SCISSOR:this.renderer.scissor.pop(t);break;case St.STENCIL:this.renderer.stencil.pop(t.maskObject);break;case St.SPRITE:this.popSpriteMask(t);break;case St.COLOR:this.popColorMask(t);break}if(t.reset(),t.pooled&&this.maskDataPool.push(t),this.maskStack.length!==0){var n=this.maskStack[this.maskStack.length-1];n.type===St.SPRITE&&n._filters&&(n._filters[0].maskSprite=n.maskObject)}}},r.prototype.detect=function(e){var t=e.maskObject;t?t.isSprite?e.type=St.SPRITE:this.enableScissor&&this.renderer.scissor.testScissor(e)?e.type=St.SCISSOR:e.type=St.STENCIL:e.type=St.COLOR},r.prototype.pushSpriteMask=function(e){var t,n,i=e.maskObject,o=e._target,a=e._filters;a||(a=this.alphaMaskPool[this.alphaMaskIndex],a||(a=this.alphaMaskPool[this.alphaMaskIndex]=[new Ab]));var s=this.renderer,u=s.renderTexture,l,f;if(u.current){var c=u.current;l=e.resolution||c.resolution,f=(t=e.multisample)!==null&&t!==void 0?t:c.multisample}else l=e.resolution||s.resolution,f=(n=e.multisample)!==null&&n!==void 0?n:s.multisample;a[0].resolution=l,a[0].multisample=f,a[0].maskSprite=i;var h=o.filterArea;o.filterArea=i.getBounds(!0),s.filter.push(o,a),o.filterArea=h,e._filters||this.alphaMaskIndex++},r.prototype.popSpriteMask=function(e){this.renderer.filter.pop(),e._filters?e._filters[0].maskSprite=null:(this.alphaMaskIndex--,this.alphaMaskPool[this.alphaMaskIndex][0].maskSprite=null)},r.prototype.pushColorMask=function(e){var t=e._colorMask,n=e._colorMask=t&e.colorMask;n!==t&&this.renderer.gl.colorMask((n&1)!==0,(n&2)!==0,(n&4)!==0,(n&8)!==0)},r.prototype.popColorMask=function(e){var t=e._colorMask,n=this.maskStack.length>0?this.maskStack[this.maskStack.length-1]._colorMask:15;n!==t&&this.renderer.gl.colorMask((n&1)!==0,(n&2)!==0,(n&4)!==0,(n&8)!==0)},r.prototype.destroy=function(){this.renderer=null},r}(),Cb=function(){function r(e){this.renderer=e,this.maskStack=[],this.glConst=0}return r.prototype.getStackLength=function(){return this.maskStack.length},r.prototype.setMaskStack=function(e){var t=this.renderer.gl,n=this.getStackLength();this.maskStack=e;var i=this.getStackLength();i!==n&&(i===0?t.disable(this.glConst):(t.enable(this.glConst),this._useCurrent()))},r.prototype._useCurrent=function(){},r.prototype.destroy=function(){this.renderer=null,this.maskStack=null},r}(),Oy=new Pt,Py=[],hp=function(r){st(e,r);function e(t){var n=r.call(this,t)||this;return n.glConst=C.ADAPTER.getWebGLRenderingContext().SCISSOR_TEST,n}return e.prototype.getStackLength=function(){var t=this.maskStack[this.maskStack.length-1];return t?t._scissorCounter:0},e.prototype.calcScissorRect=function(t){var n;if(!t._scissorRectLocal){var i=t._scissorRect,o=t.maskObject,a=this.renderer,s=a.renderTexture,u=o.getBounds(!0,(n=Py.pop())!==null&&n!==void 0?n:new K);this.roundFrameToPixels(u,s.current?s.current.resolution:a.resolution,s.sourceFrame,s.destinationFrame,a.projection.transform),i&&u.fit(i),t._scissorRectLocal=u}},e.isMatrixRotated=function(t){if(!t)return!1;var n=t.a,i=t.b,o=t.c,a=t.d;return(Math.abs(i)>1e-4||Math.abs(o)>1e-4)&&(Math.abs(n)>1e-4||Math.abs(a)>1e-4)},e.prototype.testScissor=function(t){var n=t.maskObject;if(!n.isFastRect||!n.isFastRect()||e.isMatrixRotated(n.worldTransform)||e.isMatrixRotated(this.renderer.projection.transform))return!1;this.calcScissorRect(t);var i=t._scissorRectLocal;return i.width>0&&i.height>0},e.prototype.roundFrameToPixels=function(t,n,i,o,a){e.isMatrixRotated(a)||(a=a?Oy.copyFrom(a):Oy.identity(),a.translate(-i.x,-i.y).scale(o.width/i.width,o.height/i.height).translate(o.x,o.y),this.renderer.filter.transformAABB(a,t),t.fit(o),t.x=Math.round(t.x*n),t.y=Math.round(t.y*n),t.width=Math.round(t.width*n),t.height=Math.round(t.height*n))},e.prototype.push=function(t){t._scissorRectLocal||this.calcScissorRect(t);var n=this.renderer.gl;t._scissorRect||n.enable(n.SCISSOR_TEST),t._scissorCounter++,t._scissorRect=t._scissorRectLocal,this._useCurrent()},e.prototype.pop=function(t){var n=this.renderer.gl;t&&Py.push(t._scissorRectLocal),this.getStackLength()>0?this._useCurrent():n.disable(n.SCISSOR_TEST)},e.prototype._useCurrent=function(){var t=this.maskStack[this.maskStack.length-1]._scissorRect,n;this.renderer.renderTexture.current?n=t.y:n=this.renderer.height-t.height-t.y,this.renderer.gl.scissor(t.x,n,t.width,t.height)},e}(Cb),cp=function(r){st(e,r);function e(t){var n=r.call(this,t)||this;return n.glConst=C.ADAPTER.getWebGLRenderingContext().STENCIL_TEST,n}return e.prototype.getStackLength=function(){var t=this.maskStack[this.maskStack.length-1];return t?t._stencilCounter:0},e.prototype.push=function(t){var n=t.maskObject,i=this.renderer.gl,o=t._stencilCounter;o===0&&(this.renderer.framebuffer.forceStencil(),i.clearStencil(0),i.clear(i.STENCIL_BUFFER_BIT),i.enable(i.STENCIL_TEST)),t._stencilCounter++;var a=t._colorMask;a!==0&&(t._colorMask=0,i.colorMask(!1,!1,!1,!1)),i.stencilFunc(i.EQUAL,o,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.INCR),n.renderable=!0,n.render(this.renderer),this.renderer.batch.flush(),n.renderable=!1,a!==0&&(t._colorMask=a,i.colorMask((a&1)!==0,(a&2)!==0,(a&4)!==0,(a&8)!==0)),this._useCurrent()},e.prototype.pop=function(t){var n=this.renderer.gl;if(this.getStackLength()===0)n.disable(n.STENCIL_TEST);else{var i=this.maskStack.length!==0?this.maskStack[this.maskStack.length-1]:null,o=i?i._colorMask:15;o!==0&&(i._colorMask=0,n.colorMask(!1,!1,!1,!1)),n.stencilOp(n.KEEP,n.KEEP,n.DECR),t.renderable=!0,t.render(this.renderer),this.renderer.batch.flush(),t.renderable=!1,o!==0&&(i._colorMask=o,n.colorMask((o&1)!==0,(o&2)!==0,(o&4)!==0,(o&8)!==0)),this._useCurrent()}},e.prototype._useCurrent=function(){var t=this.renderer.gl;t.stencilFunc(t.EQUAL,this.getStackLength(),4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP)},e}(Cb),dp=function(){function r(e){this.renderer=e,this.destinationFrame=null,this.sourceFrame=null,this.defaultFrame=null,this.projectionMatrix=new Pt,this.transform=null}return r.prototype.update=function(e,t,n,i){this.destinationFrame=e||this.destinationFrame||this.defaultFrame,this.sourceFrame=t||this.sourceFrame||e,this.calculateProjection(this.destinationFrame,this.sourceFrame,n,i),this.transform&&this.projectionMatrix.append(this.transform);var o=this.renderer;o.globalUniforms.uniforms.projectionMatrix=this.projectionMatrix,o.globalUniforms.update(),o.shader.shader&&o.shader.syncUniformGroup(o.shader.shader.uniforms.globals)},r.prototype.calculateProjection=function(e,t,n,i){var o=this.projectionMatrix,a=i?-1:1;o.identity(),o.a=1/t.width*2,o.d=a*(1/t.height*2),o.tx=-1-t.x*o.a,o.ty=-a-t.y*o.d},r.prototype.setTransform=function(e){},r.prototype.destroy=function(){this.renderer=null},r}(),Lr=new K,Ai=new K,pp=function(){function r(e){this.renderer=e,this.clearColor=e._backgroundColorRgba,this.defaultMaskStack=[],this.current=null,this.sourceFrame=new K,this.destinationFrame=new K,this.viewportFrame=new K}return r.prototype.bind=function(e,t,n){e===void 0&&(e=null);var i=this.renderer;this.current=e;var o,a,s;e?(o=e.baseTexture,s=o.resolution,t||(Lr.width=e.frame.width,Lr.height=e.frame.height,t=Lr),n||(Ai.x=e.frame.x,Ai.y=e.frame.y,Ai.width=t.width,Ai.height=t.height,n=Ai),a=o.framebuffer):(s=i.resolution,t||(Lr.width=i.screen.width,Lr.height=i.screen.height,t=Lr),n||(n=Lr,n.width=t.width,n.height=t.height));var u=this.viewportFrame;u.x=n.x*s,u.y=n.y*s,u.width=n.width*s,u.height=n.height*s,e||(u.y=i.view.height-(u.y+u.height)),u.ceil(),this.renderer.framebuffer.bind(a,u),this.renderer.projection.update(n,t,s,!a),e?this.renderer.mask.setMaskStack(o.maskStack):this.renderer.mask.setMaskStack(this.defaultMaskStack),this.sourceFrame.copyFrom(t),this.destinationFrame.copyFrom(n)},r.prototype.clear=function(e,t){this.current?e=e||this.current.baseTexture.clearColor:e=e||this.clearColor;var n=this.destinationFrame,i=this.current?this.current.baseTexture:this.renderer.screen,o=n.width!==i.width||n.height!==i.height;if(o){var a=this.viewportFrame,s=a.x,u=a.y,l=a.width,f=a.height;s=Math.round(s),u=Math.round(u),l=Math.round(l),f=Math.round(f),this.renderer.gl.enable(this.renderer.gl.SCISSOR_TEST),this.renderer.gl.scissor(s,u,l,f)}this.renderer.framebuffer.clear(e[0],e[1],e[2],e[3],t),o&&this.renderer.scissor.pop()},r.prototype.resize=function(){this.bind(null)},r.prototype.reset=function(){this.bind(null)},r.prototype.destroy=function(){this.renderer=null},r}();function _I(r,e,t,n,i){t.buffer.update(i)}var gI={float:`
        data[offset] = v;
    `,vec2:`
        data[offset] = v[0];
        data[offset+1] = v[1];
    `,vec3:`
        data[offset] = v[0];
        data[offset+1] = v[1];
        data[offset+2] = v[2];

    `,vec4:`
        data[offset] = v[0];
        data[offset+1] = v[1];
        data[offset+2] = v[2];
        data[offset+3] = v[3];
    `,mat2:`
        data[offset] = v[0];
        data[offset+1] = v[1];

        data[offset+4] = v[2];
        data[offset+5] = v[3];
    `,mat3:`
        data[offset] = v[0];
        data[offset+1] = v[1];
        data[offset+2] = v[2];

        data[offset + 4] = v[3];
        data[offset + 5] = v[4];
        data[offset + 6] = v[5];

        data[offset + 8] = v[6];
        data[offset + 9] = v[7];
        data[offset + 10] = v[8];
    `,mat4:`
        for(var i = 0; i < 16; i++)
        {
            data[offset + i] = v[i];
        }
    `},Rb={float:4,vec2:8,vec3:12,vec4:16,int:4,ivec2:8,ivec3:12,ivec4:16,uint:4,uvec2:8,uvec3:12,uvec4:16,bool:4,bvec2:8,bvec3:12,bvec4:16,mat2:16*2,mat3:16*3,mat4:16*4};function Ib(r){for(var e=r.map(function(u){return{data:u,offset:0,dataLen:0,dirty:0}}),t=0,n=0,i=0,o=0;o<e.length;o++){var a=e[o];if(t=Rb[a.data.type],a.data.size>1&&(t=Math.max(t,16)*a.data.size),a.dataLen=t,n%t!==0&&n<16){var s=n%t%16;n+=s,i+=s}n+t>16?(i=Math.ceil(i/16)*16,a.offset=i,i+=t,n=t):(a.offset=i,n+=t,i+=t)}return i=Math.ceil(i/16)*16,{uboElements:e,size:i}}function Mb(r,e){var t=[];for(var n in r)e[n]&&t.push(e[n]);return t.sort(function(i,o){return i.index-o.index}),t}function Db(r,e){if(!r.autoManage)return{size:0,syncFunc:_I};for(var t=Mb(r.uniforms,e),n=Ib(t),i=n.uboElements,o=n.size,a=[`
    var v = null;
    var v2 = null;
    var cv = null;
    var t = 0;
    var gl = renderer.gl
    var index = 0;
    var data = buffer.data;
    `],s=0;s<i.length;s++){for(var u=i[s],l=r.uniforms[u.data.name],f=u.data.name,c=!1,h=0;h<Jr.length;h++){var d=Jr[h];if(d.codeUbo&&d.test(u.data,l)){a.push("offset = "+u.offset/4+";",Jr[h].codeUbo(u.data.name,l)),c=!0;break}}if(!c)if(u.data.size>1){var p=wb(u.data.type),v=Math.max(Rb[u.data.type]/16,1),y=p/v,m=(4-y%4)%4;a.push(`
                cv = ud.`+f+`.value;
                v = uv.`+f+`;
                offset = `+u.offset/4+`;

                t = 0;

                for(var i=0; i < `+u.data.size*v+`; i++)
                {
                    for(var j = 0; j < `+y+`; j++)
                    {
                        data[offset++] = v[t++];
                    }
                    offset += `+m+`;
                }

                `)}else{var g=gI[u.data.type];a.push(`
                cv = ud.`+f+`.value;
                v = uv.`+f+`;
                offset = `+u.offset/4+`;
                `+g+`;
                `)}}return a.push(`
       renderer.buffer.update(buffer);
    `),{size:o,syncFunc:new Function("ud","uv","renderer","syncData","buffer",a.join(`
`))}}var bI=function(){function r(){}return r}(),Fb=function(){function r(e,t){this.program=e,this.uniformData=t,this.uniformGroups={},this.uniformDirtyGroups={},this.uniformBufferBindings={}}return r.prototype.destroy=function(){this.uniformData=null,this.uniformGroups=null,this.uniformDirtyGroups=null,this.uniformBufferBindings=null,this.program=null},r}();function xI(r,e){for(var t={},n=e.getProgramParameter(r,e.ACTIVE_ATTRIBUTES),i=0;i<n;i++){var o=e.getActiveAttrib(r,i);if(o.name.indexOf("gl_")!==0){var a=Ob(e,o.type),s={type:a,name:o.name,size:wb(a),location:e.getAttribLocation(r,o.name)};t[o.name]=s}}return t}function TI(r,e){for(var t={},n=e.getProgramParameter(r,e.ACTIVE_UNIFORMS),i=0;i<n;i++){var o=e.getActiveUniform(r,i),a=o.name.replace(/\[.*?\]$/,""),s=!!o.name.match(/\[.*?\]$/),u=Ob(e,o.type);t[a]={name:a,index:i,type:u,size:o.size,isArray:s,value:Tb(u,o.size)}}return t}function Nb(r,e){var t=xy(r,r.VERTEX_SHADER,e.vertexSrc),n=xy(r,r.FRAGMENT_SHADER,e.fragmentSrc),i=r.createProgram();if(r.attachShader(i,t),r.attachShader(i,n),r.linkProgram(i),r.getProgramParameter(i,r.LINK_STATUS)||rI(r,i,t,n),e.attributeData=xI(i,r),e.uniformData=TI(i,r),!/^[ \t]*#[ \t]*version[ \t]+300[ \t]+es[ \t]*$/m.test(e.vertexSrc)){var o=Object.keys(e.attributeData);o.sort(function(f,c){return f>c?1:-1});for(var a=0;a<o.length;a++)e.attributeData[o[a]].location=a,r.bindAttribLocation(i,a,o[a]);r.linkProgram(i)}r.deleteShader(t),r.deleteShader(n);var s={};for(var a in e.uniformData){var u=e.uniformData[a];s[a]={location:r.getUniformLocation(i,a),value:Tb(u.type,u.size)}}var l=new Fb(i,s);return l}var SI=0,pa={textureCount:0,uboCount:0},vp=function(){function r(e){this.destroyed=!1,this.renderer=e,this.systemCheck(),this.gl=null,this.shader=null,this.program=null,this.cache={},this._uboCache={},this.id=SI++}return r.prototype.systemCheck=function(){if(!fI())throw new Error("Current environment does not allow unsafe-eval, please use @pixi/unsafe-eval module to enable support.")},r.prototype.contextChange=function(e){this.gl=e,this.reset()},r.prototype.bind=function(e,t){e.disposeRunner.add(this),e.uniforms.globals=this.renderer.globalUniforms;var n=e.program,i=n.glPrograms[this.renderer.CONTEXT_UID]||this.generateProgram(e);return this.shader=e,this.program!==n&&(this.program=n,this.gl.useProgram(i.program)),t||(pa.textureCount=0,pa.uboCount=0,this.syncUniformGroup(e.uniformGroup,pa)),i},r.prototype.setUniforms=function(e){var t=this.shader.program,n=t.glPrograms[this.renderer.CONTEXT_UID];t.syncUniforms(n.uniformData,e,this.renderer)},r.prototype.syncUniformGroup=function(e,t){var n=this.getGlProgram();(!e.static||e.dirtyId!==n.uniformDirtyGroups[e.id])&&(n.uniformDirtyGroups[e.id]=e.dirtyId,this.syncUniforms(e,n,t))},r.prototype.syncUniforms=function(e,t,n){var i=e.syncUniforms[this.shader.program.id]||this.createSyncGroups(e);i(t.uniformData,e.uniforms,this.renderer,n)},r.prototype.createSyncGroups=function(e){var t=this.getSignature(e,this.shader.program.uniformData,"u");return this.cache[t]||(this.cache[t]=sI(e,this.shader.program.uniformData)),e.syncUniforms[this.shader.program.id]=this.cache[t],e.syncUniforms[this.shader.program.id]},r.prototype.syncUniformBufferGroup=function(e,t){var n=this.getGlProgram();if(!e.static||e.dirtyId!==0||!n.uniformGroups[e.id]){e.dirtyId=0;var i=n.uniformGroups[e.id]||this.createSyncBufferGroup(e,n,t);e.buffer.update(),i(n.uniformData,e.uniforms,this.renderer,pa,e.buffer)}this.renderer.buffer.bindBufferBase(e.buffer,n.uniformBufferBindings[t])},r.prototype.createSyncBufferGroup=function(e,t,n){var i=this.renderer.gl;this.renderer.buffer.bind(e.buffer);var o=this.gl.getUniformBlockIndex(t.program,n);t.uniformBufferBindings[n]=this.shader.uniformBindCount,i.uniformBlockBinding(t.program,o,this.shader.uniformBindCount),this.shader.uniformBindCount++;var a=this.getSignature(e,this.shader.program.uniformData,"ubo"),s=this._uboCache[a];if(s||(s=this._uboCache[a]=Db(e,this.shader.program.uniformData)),e.autoManage){var u=new Float32Array(s.size/4);e.buffer.update(u)}return t.uniformGroups[e.id]=s.syncFunc,t.uniformGroups[e.id]},r.prototype.getSignature=function(e,t,n){var i=e.uniforms,o=[n+"-"];for(var a in i)o.push(a),t[a]&&o.push(t[a].type);return o.join("-")},r.prototype.getGlProgram=function(){return this.shader?this.shader.program.glPrograms[this.renderer.CONTEXT_UID]:null},r.prototype.generateProgram=function(e){var t=this.gl,n=e.program,i=Nb(t,n);return n.glPrograms[this.renderer.CONTEXT_UID]=i,i},r.prototype.reset=function(){this.program=null,this.shader=null},r.prototype.disposeShader=function(e){this.shader===e&&(this.shader=null)},r.prototype.destroy=function(){this.renderer=null,this.destroyed=!0},r}();function EI(r,e){return e===void 0&&(e=[]),e[B.NORMAL]=[r.ONE,r.ONE_MINUS_SRC_ALPHA],e[B.ADD]=[r.ONE,r.ONE],e[B.MULTIPLY]=[r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA],e[B.SCREEN]=[r.ONE,r.ONE_MINUS_SRC_COLOR,r.ONE,r.ONE_MINUS_SRC_ALPHA],e[B.OVERLAY]=[r.ONE,r.ONE_MINUS_SRC_ALPHA],e[B.DARKEN]=[r.ONE,r.ONE_MINUS_SRC_ALPHA],e[B.LIGHTEN]=[r.ONE,r.ONE_MINUS_SRC_ALPHA],e[B.COLOR_DODGE]=[r.ONE,r.ONE_MINUS_SRC_ALPHA],e[B.COLOR_BURN]=[r.ONE,r.ONE_MINUS_SRC_ALPHA],e[B.HARD_LIGHT]=[r.ONE,r.ONE_MINUS_SRC_ALPHA],e[B.SOFT_LIGHT]=[r.ONE,r.ONE_MINUS_SRC_ALPHA],e[B.DIFFERENCE]=[r.ONE,r.ONE_MINUS_SRC_ALPHA],e[B.EXCLUSION]=[r.ONE,r.ONE_MINUS_SRC_ALPHA],e[B.HUE]=[r.ONE,r.ONE_MINUS_SRC_ALPHA],e[B.SATURATION]=[r.ONE,r.ONE_MINUS_SRC_ALPHA],e[B.COLOR]=[r.ONE,r.ONE_MINUS_SRC_ALPHA],e[B.LUMINOSITY]=[r.ONE,r.ONE_MINUS_SRC_ALPHA],e[B.NONE]=[0,0],e[B.NORMAL_NPM]=[r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA],e[B.ADD_NPM]=[r.SRC_ALPHA,r.ONE,r.ONE,r.ONE],e[B.SCREEN_NPM]=[r.SRC_ALPHA,r.ONE_MINUS_SRC_COLOR,r.ONE,r.ONE_MINUS_SRC_ALPHA],e[B.SRC_IN]=[r.DST_ALPHA,r.ZERO],e[B.SRC_OUT]=[r.ONE_MINUS_DST_ALPHA,r.ZERO],e[B.SRC_ATOP]=[r.DST_ALPHA,r.ONE_MINUS_SRC_ALPHA],e[B.DST_OVER]=[r.ONE_MINUS_DST_ALPHA,r.ONE],e[B.DST_IN]=[r.ZERO,r.SRC_ALPHA],e[B.DST_OUT]=[r.ZERO,r.ONE_MINUS_SRC_ALPHA],e[B.DST_ATOP]=[r.ONE_MINUS_DST_ALPHA,r.SRC_ALPHA],e[B.XOR]=[r.ONE_MINUS_DST_ALPHA,r.ONE_MINUS_SRC_ALPHA],e[B.SUBTRACT]=[r.ONE,r.ONE,r.ONE,r.ONE,r.FUNC_REVERSE_SUBTRACT,r.FUNC_ADD],e}var wI=0,OI=1,PI=2,AI=3,CI=4,RI=5,yp=function(){function r(){this.gl=null,this.stateId=0,this.polygonOffset=0,this.blendMode=B.NONE,this._blendEq=!1,this.map=[],this.map[wI]=this.setBlend,this.map[OI]=this.setOffset,this.map[PI]=this.setCullFace,this.map[AI]=this.setDepthTest,this.map[CI]=this.setFrontFace,this.map[RI]=this.setDepthMask,this.checks=[],this.defaultState=new Ir,this.defaultState.blend=!0}return r.prototype.contextChange=function(e){this.gl=e,this.blendModes=EI(e),this.set(this.defaultState),this.reset()},r.prototype.set=function(e){if(e=e||this.defaultState,this.stateId!==e.data){for(var t=this.stateId^e.data,n=0;t;)t&1&&this.map[n].call(this,!!(e.data&1<<n)),t=t>>1,n++;this.stateId=e.data}for(var n=0;n<this.checks.length;n++)this.checks[n](this,e)},r.prototype.forceState=function(e){e=e||this.defaultState;for(var t=0;t<this.map.length;t++)this.map[t].call(this,!!(e.data&1<<t));for(var t=0;t<this.checks.length;t++)this.checks[t](this,e);this.stateId=e.data},r.prototype.setBlend=function(e){this.updateCheck(r.checkBlendMode,e),this.gl[e?"enable":"disable"](this.gl.BLEND)},r.prototype.setOffset=function(e){this.updateCheck(r.checkPolygonOffset,e),this.gl[e?"enable":"disable"](this.gl.POLYGON_OFFSET_FILL)},r.prototype.setDepthTest=function(e){this.gl[e?"enable":"disable"](this.gl.DEPTH_TEST)},r.prototype.setDepthMask=function(e){this.gl.depthMask(e)},r.prototype.setCullFace=function(e){this.gl[e?"enable":"disable"](this.gl.CULL_FACE)},r.prototype.setFrontFace=function(e){this.gl.frontFace(this.gl[e?"CW":"CCW"])},r.prototype.setBlendMode=function(e){if(e!==this.blendMode){this.blendMode=e;var t=this.blendModes[e],n=this.gl;t.length===2?n.blendFunc(t[0],t[1]):n.blendFuncSeparate(t[0],t[1],t[2],t[3]),t.length===6?(this._blendEq=!0,n.blendEquationSeparate(t[4],t[5])):this._blendEq&&(this._blendEq=!1,n.blendEquationSeparate(n.FUNC_ADD,n.FUNC_ADD))}},r.prototype.setPolygonOffset=function(e,t){this.gl.polygonOffset(e,t)},r.prototype.reset=function(){this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL,!1),this.forceState(this.defaultState),this._blendEq=!0,this.blendMode=-1,this.setBlendMode(0)},r.prototype.updateCheck=function(e,t){var n=this.checks.indexOf(e);t&&n===-1?this.checks.push(e):!t&&n!==-1&&this.checks.splice(n,1)},r.checkBlendMode=function(e,t){e.setBlendMode(t.blendMode)},r.checkPolygonOffset=function(e,t){e.setPolygonOffset(1,t.polygonOffset)},r.prototype.destroy=function(){this.gl=null},r}(),mp=function(){function r(e){this.renderer=e,this.count=0,this.checkCount=0,this.maxIdle=C.GC_MAX_IDLE,this.checkCountMax=C.GC_MAX_CHECK_COUNT,this.mode=C.GC_MODE}return r.prototype.postrender=function(){this.renderer.renderingToScreen&&(this.count++,this.mode!==lo.MANUAL&&(this.checkCount++,this.checkCount>this.checkCountMax&&(this.checkCount=0,this.run())))},r.prototype.run=function(){for(var e=this.renderer.texture,t=e.managedTextures,n=!1,i=0;i<t.length;i++){var o=t[i];!o.framebuffer&&this.count-o.touched>this.maxIdle&&(e.destroyTexture(o,!0),t[i]=null,n=!0)}if(n){for(var a=0,i=0;i<t.length;i++)t[i]!==null&&(t[a++]=t[i]);t.length=a}},r.prototype.unload=function(e){var t=this.renderer.texture,n=e._texture;n&&!n.framebuffer&&t.destroyTexture(n);for(var i=e.children.length-1;i>=0;i--)this.unload(e.children[i])},r.prototype.destroy=function(){this.renderer=null},r}();function II(r){var e,t,n,i,o,a,s,u,l,f,c,h,d,p,v,y,m,g,_,x,b,T,S;return"WebGL2RenderingContext"in globalThis&&r instanceof globalThis.WebGL2RenderingContext?S=(e={},e[U.UNSIGNED_BYTE]=(t={},t[P.RGBA]=r.RGBA8,t[P.RGB]=r.RGB8,t[P.RG]=r.RG8,t[P.RED]=r.R8,t[P.RGBA_INTEGER]=r.RGBA8UI,t[P.RGB_INTEGER]=r.RGB8UI,t[P.RG_INTEGER]=r.RG8UI,t[P.RED_INTEGER]=r.R8UI,t[P.ALPHA]=r.ALPHA,t[P.LUMINANCE]=r.LUMINANCE,t[P.LUMINANCE_ALPHA]=r.LUMINANCE_ALPHA,t),e[U.BYTE]=(n={},n[P.RGBA]=r.RGBA8_SNORM,n[P.RGB]=r.RGB8_SNORM,n[P.RG]=r.RG8_SNORM,n[P.RED]=r.R8_SNORM,n[P.RGBA_INTEGER]=r.RGBA8I,n[P.RGB_INTEGER]=r.RGB8I,n[P.RG_INTEGER]=r.RG8I,n[P.RED_INTEGER]=r.R8I,n),e[U.UNSIGNED_SHORT]=(i={},i[P.RGBA_INTEGER]=r.RGBA16UI,i[P.RGB_INTEGER]=r.RGB16UI,i[P.RG_INTEGER]=r.RG16UI,i[P.RED_INTEGER]=r.R16UI,i[P.DEPTH_COMPONENT]=r.DEPTH_COMPONENT16,i),e[U.SHORT]=(o={},o[P.RGBA_INTEGER]=r.RGBA16I,o[P.RGB_INTEGER]=r.RGB16I,o[P.RG_INTEGER]=r.RG16I,o[P.RED_INTEGER]=r.R16I,o),e[U.UNSIGNED_INT]=(a={},a[P.RGBA_INTEGER]=r.RGBA32UI,a[P.RGB_INTEGER]=r.RGB32UI,a[P.RG_INTEGER]=r.RG32UI,a[P.RED_INTEGER]=r.R32UI,a[P.DEPTH_COMPONENT]=r.DEPTH_COMPONENT24,a),e[U.INT]=(s={},s[P.RGBA_INTEGER]=r.RGBA32I,s[P.RGB_INTEGER]=r.RGB32I,s[P.RG_INTEGER]=r.RG32I,s[P.RED_INTEGER]=r.R32I,s),e[U.FLOAT]=(u={},u[P.RGBA]=r.RGBA32F,u[P.RGB]=r.RGB32F,u[P.RG]=r.RG32F,u[P.RED]=r.R32F,u[P.DEPTH_COMPONENT]=r.DEPTH_COMPONENT32F,u),e[U.HALF_FLOAT]=(l={},l[P.RGBA]=r.RGBA16F,l[P.RGB]=r.RGB16F,l[P.RG]=r.RG16F,l[P.RED]=r.R16F,l),e[U.UNSIGNED_SHORT_5_6_5]=(f={},f[P.RGB]=r.RGB565,f),e[U.UNSIGNED_SHORT_4_4_4_4]=(c={},c[P.RGBA]=r.RGBA4,c),e[U.UNSIGNED_SHORT_5_5_5_1]=(h={},h[P.RGBA]=r.RGB5_A1,h),e[U.UNSIGNED_INT_2_10_10_10_REV]=(d={},d[P.RGBA]=r.RGB10_A2,d[P.RGBA_INTEGER]=r.RGB10_A2UI,d),e[U.UNSIGNED_INT_10F_11F_11F_REV]=(p={},p[P.RGB]=r.R11F_G11F_B10F,p),e[U.UNSIGNED_INT_5_9_9_9_REV]=(v={},v[P.RGB]=r.RGB9_E5,v),e[U.UNSIGNED_INT_24_8]=(y={},y[P.DEPTH_STENCIL]=r.DEPTH24_STENCIL8,y),e[U.FLOAT_32_UNSIGNED_INT_24_8_REV]=(m={},m[P.DEPTH_STENCIL]=r.DEPTH32F_STENCIL8,m),e):S=(g={},g[U.UNSIGNED_BYTE]=(_={},_[P.RGBA]=r.RGBA,_[P.RGB]=r.RGB,_[P.ALPHA]=r.ALPHA,_[P.LUMINANCE]=r.LUMINANCE,_[P.LUMINANCE_ALPHA]=r.LUMINANCE_ALPHA,_),g[U.UNSIGNED_SHORT_5_6_5]=(x={},x[P.RGB]=r.RGB,x),g[U.UNSIGNED_SHORT_4_4_4_4]=(b={},b[P.RGBA]=r.RGBA,b),g[U.UNSIGNED_SHORT_5_5_5_1]=(T={},T[P.RGBA]=r.RGBA,T),g),S}var is=function(){function r(e){this.texture=e,this.width=-1,this.height=-1,this.dirtyId=-1,this.dirtyStyleId=-1,this.mipmap=!1,this.wrapMode=33071,this.type=U.UNSIGNED_BYTE,this.internalFormat=P.RGBA,this.samplerType=0}return r}(),_p=function(){function r(e){this.renderer=e,this.boundTextures=[],this.currentLocation=-1,this.managedTextures=[],this._unknownBoundTextures=!1,this.unknownTexture=new q,this.hasIntegerTextures=!1}return r.prototype.contextChange=function(){var e=this.gl=this.renderer.gl;this.CONTEXT_UID=this.renderer.CONTEXT_UID,this.webGLVersion=this.renderer.context.webGLVersion,this.internalFormats=II(e);var t=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS);this.boundTextures.length=t;for(var n=0;n<t;n++)this.boundTextures[n]=null;this.emptyTextures={};var i=new is(e.createTexture());e.bindTexture(e.TEXTURE_2D,i.texture),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,new Uint8Array(4)),this.emptyTextures[e.TEXTURE_2D]=i,this.emptyTextures[e.TEXTURE_CUBE_MAP]=new is(e.createTexture()),e.bindTexture(e.TEXTURE_CUBE_MAP,this.emptyTextures[e.TEXTURE_CUBE_MAP].texture);for(var n=0;n<6;n++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,null);e.texParameteri(e.TEXTURE_CUBE_MAP,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_CUBE_MAP,e.TEXTURE_MIN_FILTER,e.LINEAR);for(var n=0;n<this.boundTextures.length;n++)this.bind(null,n)},r.prototype.bind=function(e,t){t===void 0&&(t=0);var n=this.gl;if(e=e==null?void 0:e.castToBaseTexture(),e&&e.valid&&!e.parentTextureArray){e.touched=this.renderer.textureGC.count;var i=e._glTextures[this.CONTEXT_UID]||this.initTexture(e);this.boundTextures[t]!==e&&(this.currentLocation!==t&&(this.currentLocation=t,n.activeTexture(n.TEXTURE0+t)),n.bindTexture(e.target,i.texture)),i.dirtyId!==e.dirtyId?(this.currentLocation!==t&&(this.currentLocation=t,n.activeTexture(n.TEXTURE0+t)),this.updateTexture(e)):i.dirtyStyleId!==e.dirtyStyleId&&this.updateTextureStyle(e),this.boundTextures[t]=e}else this.currentLocation!==t&&(this.currentLocation=t,n.activeTexture(n.TEXTURE0+t)),n.bindTexture(n.TEXTURE_2D,this.emptyTextures[n.TEXTURE_2D].texture),this.boundTextures[t]=null},r.prototype.reset=function(){this._unknownBoundTextures=!0,this.hasIntegerTextures=!1,this.currentLocation=-1;for(var e=0;e<this.boundTextures.length;e++)this.boundTextures[e]=this.unknownTexture},r.prototype.unbind=function(e){var t=this,n=t.gl,i=t.boundTextures;if(this._unknownBoundTextures){this._unknownBoundTextures=!1;for(var o=0;o<i.length;o++)i[o]===this.unknownTexture&&this.bind(null,o)}for(var o=0;o<i.length;o++)i[o]===e&&(this.currentLocation!==o&&(n.activeTexture(n.TEXTURE0+o),this.currentLocation=o),n.bindTexture(e.target,this.emptyTextures[e.target].texture),i[o]=null)},r.prototype.ensureSamplerType=function(e){var t=this,n=t.boundTextures,i=t.hasIntegerTextures,o=t.CONTEXT_UID;if(i)for(var a=e-1;a>=0;--a){var s=n[a];if(s){var u=s._glTextures[o];u.samplerType!==uo.FLOAT&&this.renderer.texture.unbind(s)}}},r.prototype.initTexture=function(e){var t=new is(this.gl.createTexture());return t.dirtyId=-1,e._glTextures[this.CONTEXT_UID]=t,this.managedTextures.push(e),e.on("dispose",this.destroyTexture,this),t},r.prototype.initTextureType=function(e,t){var n,i;t.internalFormat=(i=(n=this.internalFormats[e.type])===null||n===void 0?void 0:n[e.format])!==null&&i!==void 0?i:e.format,this.webGLVersion===2&&e.type===U.HALF_FLOAT?t.type=this.gl.HALF_FLOAT:t.type=e.type},r.prototype.updateTexture=function(e){var t=e._glTextures[this.CONTEXT_UID];if(t){var n=this.renderer;if(this.initTextureType(e,t),e.resource&&e.resource.upload(n,e,t))t.samplerType!==uo.FLOAT&&(this.hasIntegerTextures=!0);else{var i=e.realWidth,o=e.realHeight,a=n.gl;(t.width!==i||t.height!==o||t.dirtyId<0)&&(t.width=i,t.height=o,a.texImage2D(e.target,0,t.internalFormat,i,o,0,e.format,t.type,null))}e.dirtyStyleId!==t.dirtyStyleId&&this.updateTextureStyle(e),t.dirtyId=e.dirtyId}},r.prototype.destroyTexture=function(e,t){var n=this.gl;if(e=e.castToBaseTexture(),e._glTextures[this.CONTEXT_UID]&&(this.unbind(e),n.deleteTexture(e._glTextures[this.CONTEXT_UID].texture),e.off("dispose",this.destroyTexture,this),delete e._glTextures[this.CONTEXT_UID],!t)){var i=this.managedTextures.indexOf(e);i!==-1&&Zr(this.managedTextures,i,1)}},r.prototype.updateTextureStyle=function(e){var t=e._glTextures[this.CONTEXT_UID];t&&((e.mipmap===te.POW2||this.webGLVersion!==2)&&!e.isPowerOfTwo?t.mipmap=!1:t.mipmap=e.mipmap>=1,this.webGLVersion!==2&&!e.isPowerOfTwo?t.wrapMode=we.CLAMP:t.wrapMode=e.wrapMode,e.resource&&e.resource.style(this.renderer,e,t)||this.setStyle(e,t),t.dirtyStyleId=e.dirtyStyleId)},r.prototype.setStyle=function(e,t){var n=this.gl;if(t.mipmap&&e.mipmap!==te.ON_MANUAL&&n.generateMipmap(e.target),n.texParameteri(e.target,n.TEXTURE_WRAP_S,t.wrapMode),n.texParameteri(e.target,n.TEXTURE_WRAP_T,t.wrapMode),t.mipmap){n.texParameteri(e.target,n.TEXTURE_MIN_FILTER,e.scaleMode===Ht.LINEAR?n.LINEAR_MIPMAP_LINEAR:n.NEAREST_MIPMAP_NEAREST);var i=this.renderer.context.extensions.anisotropicFiltering;if(i&&e.anisotropicLevel>0&&e.scaleMode===Ht.LINEAR){var o=Math.min(e.anisotropicLevel,n.getParameter(i.MAX_TEXTURE_MAX_ANISOTROPY_EXT));n.texParameterf(e.target,i.TEXTURE_MAX_ANISOTROPY_EXT,o)}}else n.texParameteri(e.target,n.TEXTURE_MIN_FILTER,e.scaleMode===Ht.LINEAR?n.LINEAR:n.NEAREST);n.texParameteri(e.target,n.TEXTURE_MAG_FILTER,e.scaleMode===Ht.LINEAR?n.LINEAR:n.NEAREST)},r.prototype.destroy=function(){this.renderer=null},r}(),Lb={__proto__:null,FilterSystem:op,BatchSystem:ap,ContextSystem:sp,FramebufferSystem:up,GeometrySystem:lp,MaskSystem:fp,ScissorSystem:hp,StencilSystem:cp,ProjectionSystem:dp,RenderTextureSystem:pp,ShaderSystem:vp,StateSystem:yp,TextureGCSystem:mp,TextureSystem:_p},Nl=new Pt,Bb=function(r){st(e,r);function e(t,n){t===void 0&&(t=ti.UNKNOWN);var i=r.call(this)||this;return n=Object.assign({},C.RENDER_OPTIONS,n),i.options=n,i.type=t,i.screen=new K(0,0,n.width,n.height),i.view=n.view||C.ADAPTER.createCanvas(),i.resolution=n.resolution||C.RESOLUTION,i.useContextAlpha=n.useContextAlpha,i.autoDensity=!!n.autoDensity,i.preserveDrawingBuffer=n.preserveDrawingBuffer,i.clearBeforeRender=n.clearBeforeRender,i._backgroundColor=0,i._backgroundColorRgba=[0,0,0,1],i._backgroundColorString="#000000",i.backgroundColor=n.backgroundColor||i._backgroundColor,i.backgroundAlpha=n.backgroundAlpha,n.transparent!==void 0&&(Vt("6.0.0","Option transparent is deprecated, please use backgroundAlpha instead."),i.useContextAlpha=n.transparent,i.backgroundAlpha=n.transparent?0:1),i._lastObjectRendered=null,i.plugins={},i}return e.prototype.initPlugins=function(t){for(var n in t)this.plugins[n]=new t[n](this)},Object.defineProperty(e.prototype,"width",{get:function(){return this.view.width},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"height",{get:function(){return this.view.height},enumerable:!1,configurable:!0}),e.prototype.resize=function(t,n){this.view.width=Math.round(t*this.resolution),this.view.height=Math.round(n*this.resolution);var i=this.view.width/this.resolution,o=this.view.height/this.resolution;this.screen.width=i,this.screen.height=o,this.autoDensity&&(this.view.style.width=i+"px",this.view.style.height=o+"px"),this.emit("resize",i,o)},e.prototype.generateTexture=function(t,n,i,o){n===void 0&&(n={}),typeof n=="number"&&(Vt("6.1.0","generateTexture options (scaleMode, resolution, region) are now object options."),n={scaleMode:n,resolution:i,region:o});var a=n.region,s=VR(n,["region"]);o=a||t.getLocalBounds(null,!0),o.width===0&&(o.width=1),o.height===0&&(o.height=1);var u=Pr.create(Dh({width:o.width,height:o.height},s));return Nl.tx=-o.x,Nl.ty=-o.y,this.render(t,{renderTexture:u,clear:!1,transform:Nl,skipUpdateTransform:!!t.parent}),u},e.prototype.destroy=function(t){for(var n in this.plugins)this.plugins[n].destroy(),this.plugins[n]=null;t&&this.view.parentNode&&this.view.parentNode.removeChild(this.view);var i=this;i.plugins=null,i.type=ti.UNKNOWN,i.view=null,i.screen=null,i._tempDisplayObjectParent=null,i.options=null,this._backgroundColorRgba=null,this._backgroundColorString=null,this._lastObjectRendered=null},Object.defineProperty(e.prototype,"backgroundColor",{get:function(){return this._backgroundColor},set:function(t){this._backgroundColor=t,this._backgroundColorString=$d(t),Bt(t,this._backgroundColorRgba)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"backgroundAlpha",{get:function(){return this._backgroundColorRgba[3]},set:function(t){this._backgroundColorRgba[3]=t},enumerable:!1,configurable:!0}),e}(cn),MI=function(){function r(e){this.buffer=e||null,this.updateID=-1,this.byteLength=-1,this.refCount=0}return r}(),DI=function(){function r(e){this.renderer=e,this.managedBuffers={},this.boundBufferBases={}}return r.prototype.destroy=function(){this.renderer=null},r.prototype.contextChange=function(){this.disposeAll(!0),this.gl=this.renderer.gl,this.CONTEXT_UID=this.renderer.CONTEXT_UID},r.prototype.bind=function(e){var t=this,n=t.gl,i=t.CONTEXT_UID,o=e._glBuffers[i]||this.createGLBuffer(e);n.bindBuffer(e.type,o.buffer)},r.prototype.bindBufferBase=function(e,t){var n=this,i=n.gl,o=n.CONTEXT_UID;if(this.boundBufferBases[t]!==e){var a=e._glBuffers[o]||this.createGLBuffer(e);this.boundBufferBases[t]=e,i.bindBufferBase(i.UNIFORM_BUFFER,t,a.buffer)}},r.prototype.bindBufferRange=function(e,t,n){var i=this,o=i.gl,a=i.CONTEXT_UID;n=n||0;var s=e._glBuffers[a]||this.createGLBuffer(e);o.bindBufferRange(o.UNIFORM_BUFFER,t||0,s.buffer,n*256,256)},r.prototype.update=function(e){var t=this,n=t.gl,i=t.CONTEXT_UID,o=e._glBuffers[i];if(e._updateID!==o.updateID)if(o.updateID=e._updateID,n.bindBuffer(e.type,o.buffer),o.byteLength>=e.data.byteLength)n.bufferSubData(e.type,0,e.data);else{var a=e.static?n.STATIC_DRAW:n.DYNAMIC_DRAW;o.byteLength=e.data.byteLength,n.bufferData(e.type,e.data,a)}},r.prototype.dispose=function(e,t){if(this.managedBuffers[e.id]){delete this.managedBuffers[e.id];var n=e._glBuffers[this.CONTEXT_UID],i=this.gl;e.disposeRunner.remove(this),n&&(t||i.deleteBuffer(n.buffer),delete e._glBuffers[this.CONTEXT_UID])}},r.prototype.disposeAll=function(e){for(var t=Object.keys(this.managedBuffers),n=0;n<t.length;n++)this.dispose(this.managedBuffers[t[n]],e)},r.prototype.createGLBuffer=function(e){var t=this,n=t.CONTEXT_UID,i=t.gl;return e._glBuffers[n]=new MI(i.createBuffer()),this.managedBuffers[e.id]=e,e.disposeRunner.add(this),e._glBuffers[n]},r}(),gu=function(r){st(e,r);function e(t){var n=r.call(this,ti.WEBGL,t)||this;return t=n.options,n.gl=null,n.CONTEXT_UID=0,n.runners={destroy:new Nt("destroy"),contextChange:new Nt("contextChange"),reset:new Nt("reset"),update:new Nt("update"),postrender:new Nt("postrender"),prerender:new Nt("prerender"),resize:new Nt("resize")},n.runners.contextChange.add(n),n.globalUniforms=new Sr({projectionMatrix:new Pt},!0),n.addSystem(fp,"mask").addSystem(sp,"context").addSystem(yp,"state").addSystem(vp,"shader").addSystem(_p,"texture").addSystem(DI,"buffer").addSystem(lp,"geometry").addSystem(up,"framebuffer").addSystem(hp,"scissor").addSystem(cp,"stencil").addSystem(dp,"projection").addSystem(mp,"textureGC").addSystem(op,"filter").addSystem(pp,"renderTexture").addSystem(ap,"batch"),n.initPlugins(e.__plugins),n.multisample=void 0,t.context?n.context.initFromContext(t.context):n.context.initFromOptions({alpha:!!n.useContextAlpha,antialias:t.antialias,premultipliedAlpha:n.useContextAlpha&&n.useContextAlpha!=="notMultiplied",stencil:!0,preserveDrawingBuffer:t.preserveDrawingBuffer,powerPreference:n.options.powerPreference}),n.renderingToScreen=!0,nb(n.context.webGLVersion===2?"WebGL 2":"WebGL 1"),n.resize(n.options.width,n.options.height),n}return e.create=function(t){if(ib())return new e(t);throw new Error('WebGL unsupported in this browser, use "pixi.js-legacy" for fallback canvas2d support.')},e.prototype.contextChange=function(){var t=this.gl,n;if(this.context.webGLVersion===1){var i=t.getParameter(t.FRAMEBUFFER_BINDING);t.bindFramebuffer(t.FRAMEBUFFER,null),n=t.getParameter(t.SAMPLES),t.bindFramebuffer(t.FRAMEBUFFER,i)}else{var i=t.getParameter(t.DRAW_FRAMEBUFFER_BINDING);t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),n=t.getParameter(t.SAMPLES),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,i)}n>=lt.HIGH?this.multisample=lt.HIGH:n>=lt.MEDIUM?this.multisample=lt.MEDIUM:n>=lt.LOW?this.multisample=lt.LOW:this.multisample=lt.NONE},e.prototype.addSystem=function(t,n){var i=new t(this);if(this[n])throw new Error('Whoops! The name "'+n+'" is already in use');this[n]=i;for(var o in this.runners)this.runners[o].add(i);return this},e.prototype.render=function(t,n){var i,o,a,s;if(n&&(n instanceof Pr?(Vt("6.0.0","Renderer#render arguments changed, use options instead."),i=n,o=arguments[2],a=arguments[3],s=arguments[4]):(i=n.renderTexture,o=n.clear,a=n.transform,s=n.skipUpdateTransform)),this.renderingToScreen=!i,this.runners.prerender.emit(),this.emit("prerender"),this.projection.transform=a,!this.context.isLost){if(i||(this._lastObjectRendered=t),!s){var u=t.enableTempParent();t.updateTransform(),t.disableTempParent(u)}this.renderTexture.bind(i),this.batch.currentRenderer.start(),(o!==void 0?o:this.clearBeforeRender)&&this.renderTexture.clear(),t.render(this),this.batch.currentRenderer.flush(),i&&i.baseTexture.update(),this.runners.postrender.emit(),this.projection.transform=null,this.emit("postrender")}},e.prototype.generateTexture=function(t,n,i,o){n===void 0&&(n={});var a=r.prototype.generateTexture.call(this,t,n,i,o);return this.framebuffer.blit(),a},e.prototype.resize=function(t,n){r.prototype.resize.call(this,t,n),this.runners.resize.emit(this.screen.height,this.screen.width)},e.prototype.reset=function(){return this.runners.reset.emit(),this},e.prototype.clear=function(){this.renderTexture.bind(),this.renderTexture.clear()},e.prototype.destroy=function(t){this.runners.destroy.emit();for(var n in this.runners)this.runners[n].destroy();r.prototype.destroy.call(this,t),this.gl=null},Object.defineProperty(e.prototype,"extract",{get:function(){return Vt("6.0.0","Renderer#extract has been deprecated, please use Renderer#plugins.extract instead."),this.plugins.extract},enumerable:!1,configurable:!0}),e.registerPlugin=function(t,n){Vt("6.5.0","Renderer.registerPlugin() has been deprecated, please use extensions.add() instead."),Qt.add({name:t,type:rt.RendererPlugin,ref:n})},e.__plugins={},e}(Bb);Qt.handleByMap(rt.RendererPlugin,gu.__plugins);function Ub(r){return gu.create(r)}var FI=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,NI=`attribute vec2 aVertexPosition;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

uniform vec4 inputSize;
uniform vec4 outputFrame;

vec4 filterVertexPosition( void )
{
    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;

    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);
}

vec2 filterTextureCoord( void )
{
    return aVertexPosition * (outputFrame.zw * inputSize.zw);
}

void main(void)
{
    gl_Position = filterVertexPosition();
    vTextureCoord = filterTextureCoord();
}
`,Gb=FI,gp=NI,LI=function(){function r(e){Vt("6.1.0","System class is deprecated, implemement ISystem interface instead."),this.renderer=e}return r.prototype.destroy=function(){this.renderer=null},r}(),Fs=function(){function r(){this.texArray=null,this.blend=0,this.type=ce.TRIANGLES,this.start=0,this.size=0,this.data=null}return r}(),Ns=function(){function r(){this.elements=[],this.ids=[],this.count=0}return r.prototype.clear=function(){for(var e=0;e<this.count;e++)this.elements[e]=null;this.count=0},r}(),Ls=function(){function r(e){typeof e=="number"?this.rawBinaryData=new ArrayBuffer(e):e instanceof Uint8Array?this.rawBinaryData=e.buffer:this.rawBinaryData=e,this.uint32View=new Uint32Array(this.rawBinaryData),this.float32View=new Float32Array(this.rawBinaryData)}return Object.defineProperty(r.prototype,"int8View",{get:function(){return this._int8View||(this._int8View=new Int8Array(this.rawBinaryData)),this._int8View},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"uint8View",{get:function(){return this._uint8View||(this._uint8View=new Uint8Array(this.rawBinaryData)),this._uint8View},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"int16View",{get:function(){return this._int16View||(this._int16View=new Int16Array(this.rawBinaryData)),this._int16View},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"uint16View",{get:function(){return this._uint16View||(this._uint16View=new Uint16Array(this.rawBinaryData)),this._uint16View},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"int32View",{get:function(){return this._int32View||(this._int32View=new Int32Array(this.rawBinaryData)),this._int32View},enumerable:!1,configurable:!0}),r.prototype.view=function(e){return this[e+"View"]},r.prototype.destroy=function(){this.rawBinaryData=null,this._int8View=null,this._uint8View=null,this._int16View=null,this._uint16View=null,this._int32View=null,this.uint32View=null,this.float32View=null},r.sizeOf=function(e){switch(e){case"int8":case"uint8":return 1;case"int16":case"uint16":return 2;case"int32":case"uint32":case"float32":return 4;default:throw new Error(e+" isn't a valid view type")}},r}(),jb=function(r){st(e,r);function e(t){var n=r.call(this,t)||this;return n.shaderGenerator=null,n.geometryClass=null,n.vertexSize=null,n.state=Ir.for2d(),n.size=C.SPRITE_BATCH_SIZE*4,n._vertexCount=0,n._indexCount=0,n._bufferedElements=[],n._bufferedTextures=[],n._bufferSize=0,n._shader=null,n._packedGeometries=[],n._packedGeometryPoolSize=2,n._flushId=0,n._aBuffers={},n._iBuffers={},n.MAX_TEXTURES=1,n.renderer.on("prerender",n.onPrerender,n),t.runners.contextChange.add(n),n._dcIndex=0,n._aIndex=0,n._iIndex=0,n._attributeBuffer=null,n._indexBuffer=null,n._tempBoundTextures=[],n}return e.prototype.contextChange=function(){var t=this.renderer.gl;C.PREFER_ENV===Ce.WEBGL_LEGACY?this.MAX_TEXTURES=1:(this.MAX_TEXTURES=Math.min(t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),C.SPRITE_MAX_TEXTURES),this.MAX_TEXTURES=Pb(this.MAX_TEXTURES,t)),this._shader=this.shaderGenerator.generateShader(this.MAX_TEXTURES);for(var n=0;n<this._packedGeometryPoolSize;n++)this._packedGeometries[n]=new this.geometryClass;this.initFlushBuffers()},e.prototype.initFlushBuffers=function(){for(var t=e._drawCallPool,n=e._textureArrayPool,i=this.size/4,o=Math.floor(i/this.MAX_TEXTURES)+1;t.length<i;)t.push(new Fs);for(;n.length<o;)n.push(new Ns);for(var a=0;a<this.MAX_TEXTURES;a++)this._tempBoundTextures[a]=null},e.prototype.onPrerender=function(){this._flushId=0},e.prototype.render=function(t){t._texture.valid&&(this._vertexCount+t.vertexData.length/2>this.size&&this.flush(),this._vertexCount+=t.vertexData.length/2,this._indexCount+=t.indices.length,this._bufferedTextures[this._bufferSize]=t._texture.baseTexture,this._bufferedElements[this._bufferSize++]=t)},e.prototype.buildTexturesAndDrawCalls=function(){var t=this,n=t._bufferedTextures,i=t.MAX_TEXTURES,o=e._textureArrayPool,a=this.renderer.batch,s=this._tempBoundTextures,u=this.renderer.textureGC.count,l=++q._globalBatch,f=0,c=o[0],h=0;a.copyBoundTextures(s,i);for(var d=0;d<this._bufferSize;++d){var p=n[d];n[d]=null,p._batchEnabled!==l&&(c.count>=i&&(a.boundArray(c,s,l,i),this.buildDrawCalls(c,h,d),h=d,c=o[++f],++l),p._batchEnabled=l,p.touched=u,c.elements[c.count++]=p)}c.count>0&&(a.boundArray(c,s,l,i),this.buildDrawCalls(c,h,this._bufferSize),++f,++l);for(var d=0;d<s.length;d++)s[d]=null;q._globalBatch=l},e.prototype.buildDrawCalls=function(t,n,i){var o=this,a=o._bufferedElements,s=o._attributeBuffer,u=o._indexBuffer,l=o.vertexSize,f=e._drawCallPool,c=this._dcIndex,h=this._aIndex,d=this._iIndex,p=f[c];p.start=this._iIndex,p.texArray=t;for(var v=n;v<i;++v){var y=a[v],m=y._texture.baseTexture,g=Hd[m.alphaMode?1:0][y.blendMode];a[v]=null,n<v&&p.blend!==g&&(p.size=d-p.start,n=v,p=f[++c],p.texArray=t,p.start=d),this.packInterleavedGeometry(y,s,u,h,d),h+=y.vertexData.length/2*l,d+=y.indices.length,p.blend=g}n<i&&(p.size=d-p.start,++c),this._dcIndex=c,this._aIndex=h,this._iIndex=d},e.prototype.bindAndClearTexArray=function(t){for(var n=this.renderer.texture,i=0;i<t.count;i++)n.bind(t.elements[i],t.ids[i]),t.elements[i]=null;t.count=0},e.prototype.updateGeometry=function(){var t=this,n=t._packedGeometries,i=t._attributeBuffer,o=t._indexBuffer;C.CAN_UPLOAD_SAME_BUFFER?(n[this._flushId]._buffer.update(i.rawBinaryData),n[this._flushId]._indexBuffer.update(o),this.renderer.geometry.updateBuffers()):(this._packedGeometryPoolSize<=this._flushId&&(this._packedGeometryPoolSize++,n[this._flushId]=new this.geometryClass),n[this._flushId]._buffer.update(i.rawBinaryData),n[this._flushId]._indexBuffer.update(o),this.renderer.geometry.bind(n[this._flushId]),this.renderer.geometry.updateBuffers(),this._flushId++)},e.prototype.drawBatches=function(){for(var t=this._dcIndex,n=this.renderer,i=n.gl,o=n.state,a=e._drawCallPool,s=null,u=0;u<t;u++){var l=a[u],f=l.texArray,c=l.type,h=l.size,d=l.start,p=l.blend;s!==f&&(s=f,this.bindAndClearTexArray(f)),this.state.blendMode=p,o.set(this.state),i.drawElements(c,h,i.UNSIGNED_SHORT,d*2)}},e.prototype.flush=function(){this._vertexCount!==0&&(this._attributeBuffer=this.getAttributeBuffer(this._vertexCount),this._indexBuffer=this.getIndexBuffer(this._indexCount),this._aIndex=0,this._iIndex=0,this._dcIndex=0,this.buildTexturesAndDrawCalls(),this.updateGeometry(),this.drawBatches(),this._bufferSize=0,this._vertexCount=0,this._indexCount=0)},e.prototype.start=function(){this.renderer.state.set(this.state),this.renderer.texture.ensureSamplerType(this.MAX_TEXTURES),this.renderer.shader.bind(this._shader),C.CAN_UPLOAD_SAME_BUFFER&&this.renderer.geometry.bind(this._packedGeometries[this._flushId])},e.prototype.stop=function(){this.flush()},e.prototype.destroy=function(){for(var t=0;t<this._packedGeometryPoolSize;t++)this._packedGeometries[t]&&this._packedGeometries[t].destroy();this.renderer.off("prerender",this.onPrerender,this),this._aBuffers=null,this._iBuffers=null,this._packedGeometries=null,this._attributeBuffer=null,this._indexBuffer=null,this._shader&&(this._shader.destroy(),this._shader=null),r.prototype.destroy.call(this)},e.prototype.getAttributeBuffer=function(t){var n=vo(Math.ceil(t/8)),i=Ph(n),o=n*8;this._aBuffers.length<=i&&(this._iBuffers.length=i+1);var a=this._aBuffers[o];return a||(this._aBuffers[o]=a=new Ls(o*this.vertexSize*4)),a},e.prototype.getIndexBuffer=function(t){var n=vo(Math.ceil(t/12)),i=Ph(n),o=n*12;this._iBuffers.length<=i&&(this._iBuffers.length=i+1);var a=this._iBuffers[i];return a||(this._iBuffers[i]=a=new Uint16Array(o)),a},e.prototype.packInterleavedGeometry=function(t,n,i,o,a){for(var s=n.uint32View,u=n.float32View,l=o/this.vertexSize,f=t.uvs,c=t.indices,h=t.vertexData,d=t._texture.baseTexture._batchLocation,p=Math.min(t.worldAlpha,1),v=p<1&&t._texture.baseTexture.alphaMode?du(t._tintRGB,p):t._tintRGB+(p*255<<24),y=0;y<h.length;y+=2)u[o++]=h[y],u[o++]=h[y+1],u[o++]=f[y],u[o++]=f[y+1],s[o++]=v,u[o++]=d;for(var y=0;y<c.length;y++)i[a++]=l+c[y]},e._drawCallPool=[],e._textureArrayPool=[],e}(No),kb=function(){function r(e,t){if(this.vertexSrc=e,this.fragTemplate=t,this.programCache={},this.defaultGroupCache={},t.indexOf("%count%")<0)throw new Error('Fragment template must contain "%count%".');if(t.indexOf("%forloop%")<0)throw new Error('Fragment template must contain "%forloop%".')}return r.prototype.generateShader=function(e){if(!this.programCache[e]){for(var t=new Int32Array(e),n=0;n<e;n++)t[n]=n;this.defaultGroupCache[e]=Sr.from({uSamplers:t},!0);var i=this.fragTemplate;i=i.replace(/%count%/gi,""+e),i=i.replace(/%forloop%/gi,this.generateSampleSrc(e)),this.programCache[e]=new gi(this.vertexSrc,i)}var o={tint:new Float32Array([1,1,1,1]),translationMatrix:new Pt,default:this.defaultGroupCache[e]};return new Xe(this.programCache[e],o)},r.prototype.generateSampleSrc=function(e){var t="";t+=`
`,t+=`
`;for(var n=0;n<e;n++)n>0&&(t+=`
else `),n<e-1&&(t+="if(vTextureId < "+n+".5)"),t+=`
{`,t+=`
	color = texture2D(uSamplers[`+n+"], vTextureCoord);",t+=`
}`;return t+=`
`,t+=`
`,t},r}(),bp=function(r){st(e,r);function e(t){t===void 0&&(t=!1);var n=r.call(this)||this;return n._buffer=new Ot(null,t,!1),n._indexBuffer=new Ot(null,t,!0),n.addAttribute("aVertexPosition",n._buffer,2,!1,U.FLOAT).addAttribute("aTextureCoord",n._buffer,2,!1,U.FLOAT).addAttribute("aColor",n._buffer,4,!0,U.UNSIGNED_BYTE).addAttribute("aTextureId",n._buffer,1,!0,U.FLOAT).addIndex(n._indexBuffer),n}return e}(_i),Ay=`precision highp float;
attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;
attribute vec4 aColor;
attribute float aTextureId;

uniform mat3 projectionMatrix;
uniform mat3 translationMatrix;
uniform vec4 tint;

varying vec2 vTextureCoord;
varying vec4 vColor;
varying float vTextureId;

void main(void){
    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);

    vTextureCoord = aTextureCoord;
    vTextureId = aTextureId;
    vColor = aColor * tint;
}
`,Cy=`varying vec2 vTextureCoord;
varying vec4 vColor;
varying float vTextureId;
uniform sampler2D uSamplers[%count%];

void main(void){
    vec4 color;
    %forloop%
    gl_FragColor = color * vColor;
}
`,$b=function(){function r(){}return r.create=function(e){var t=Object.assign({vertex:Ay,fragment:Cy,geometryClass:bp,vertexSize:6},e),n=t.vertex,i=t.fragment,o=t.vertexSize,a=t.geometryClass;return function(s){st(u,s);function u(l){var f=s.call(this,l)||this;return f.shaderGenerator=new kb(n,i),f.geometryClass=a,f.vertexSize=o,f}return u}(jb)},Object.defineProperty(r,"defaultVertexSrc",{get:function(){return Ay},enumerable:!1,configurable:!0}),Object.defineProperty(r,"defaultFragmentTemplate",{get:function(){return Cy},enumerable:!1,configurable:!0}),r}(),xp=$b.create();Object.assign(xp,{extension:{name:"batch",type:rt.RendererPlugin}});var zb={},BI=function(r){Object.defineProperty(zb,r,{get:function(){return Vt("6.0.0","PIXI.systems."+r+" has moved to PIXI."+r),yb[r]}})};for(var Tp in yb)BI(Tp);var Hb={},UI=function(r){Object.defineProperty(Hb,r,{get:function(){return Vt("6.0.0","PIXI.resources."+r+" has moved to PIXI."+r),Lb[r]}})};for(var Tp in Lb)UI(Tp);var GI="6.5.10";/*!
 * @pixi/accessibility - v6.5.10
 * Compiled Thu, 06 Jul 2023 15:25:11 UTC
 *
 * @pixi/accessibility is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */var Xb={accessible:!1,accessibleTitle:null,accessibleHint:null,tabIndex:0,_accessibleActive:!1,_accessibleDiv:null,accessibleType:"button",accessiblePointerEvents:"auto",accessibleChildren:!0,renderId:-1};_t.mixin(Xb);var jI=9,va=100,kI=0,$I=0,Ry=2,Iy=1,zI=-1e3,HI=-1e3,XI=2,Vb=function(){function r(e){this.debug=!1,this._isActive=!1,this._isMobileAccessibility=!1,this.pool=[],this.renderId=0,this.children=[],this.androidUpdateCount=0,this.androidUpdateFrequency=500,this._hookDiv=null,(de.tablet||de.phone)&&this.createTouchHook();var t=document.createElement("div");t.style.width=va+"px",t.style.height=va+"px",t.style.position="absolute",t.style.top=kI+"px",t.style.left=$I+"px",t.style.zIndex=Ry.toString(),this.div=t,this.renderer=e,this._onKeyDown=this._onKeyDown.bind(this),this._onMouseMove=this._onMouseMove.bind(this),globalThis.addEventListener("keydown",this._onKeyDown,!1)}return Object.defineProperty(r.prototype,"isActive",{get:function(){return this._isActive},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"isMobileAccessibility",{get:function(){return this._isMobileAccessibility},enumerable:!1,configurable:!0}),r.prototype.createTouchHook=function(){var e=this,t=document.createElement("button");t.style.width=Iy+"px",t.style.height=Iy+"px",t.style.position="absolute",t.style.top=zI+"px",t.style.left=HI+"px",t.style.zIndex=XI.toString(),t.style.backgroundColor="#FF0000",t.title="select to enable accessibility for this content",t.addEventListener("focus",function(){e._isMobileAccessibility=!0,e.activate(),e.destroyTouchHook()}),document.body.appendChild(t),this._hookDiv=t},r.prototype.destroyTouchHook=function(){this._hookDiv&&(document.body.removeChild(this._hookDiv),this._hookDiv=null)},r.prototype.activate=function(){var e;this._isActive||(this._isActive=!0,globalThis.document.addEventListener("mousemove",this._onMouseMove,!0),globalThis.removeEventListener("keydown",this._onKeyDown,!1),this.renderer.on("postrender",this.update,this),(e=this.renderer.view.parentNode)===null||e===void 0||e.appendChild(this.div))},r.prototype.deactivate=function(){var e;!this._isActive||this._isMobileAccessibility||(this._isActive=!1,globalThis.document.removeEventListener("mousemove",this._onMouseMove,!0),globalThis.addEventListener("keydown",this._onKeyDown,!1),this.renderer.off("postrender",this.update),(e=this.div.parentNode)===null||e===void 0||e.removeChild(this.div))},r.prototype.updateAccessibleObjects=function(e){if(!(!e.visible||!e.accessibleChildren)){e.accessible&&e.interactive&&(e._accessibleActive||this.addChild(e),e.renderId=this.renderId);var t=e.children;if(t)for(var n=0;n<t.length;n++)this.updateAccessibleObjects(t[n])}},r.prototype.update=function(){var e=performance.now();if(!(de.android.device&&e<this.androidUpdateCount)&&(this.androidUpdateCount=e+this.androidUpdateFrequency,!!this.renderer.renderingToScreen)){this.renderer._lastObjectRendered&&this.updateAccessibleObjects(this.renderer._lastObjectRendered);var t=this.renderer.view.getBoundingClientRect(),n=t.left,i=t.top,o=t.width,a=t.height,s=this.renderer,u=s.width,l=s.height,f=s.resolution,c=o/u*f,h=a/l*f,d=this.div;d.style.left=n+"px",d.style.top=i+"px",d.style.width=u+"px",d.style.height=l+"px";for(var p=0;p<this.children.length;p++){var v=this.children[p];if(v.renderId!==this.renderId)v._accessibleActive=!1,Zr(this.children,p,1),this.div.removeChild(v._accessibleDiv),this.pool.push(v._accessibleDiv),v._accessibleDiv=null,p--;else{d=v._accessibleDiv;var y=v.hitArea,m=v.worldTransform;v.hitArea?(d.style.left=(m.tx+y.x*m.a)*c+"px",d.style.top=(m.ty+y.y*m.d)*h+"px",d.style.width=y.width*m.a*c+"px",d.style.height=y.height*m.d*h+"px"):(y=v.getBounds(),this.capHitArea(y),d.style.left=y.x*c+"px",d.style.top=y.y*h+"px",d.style.width=y.width*c+"px",d.style.height=y.height*h+"px",d.title!==v.accessibleTitle&&v.accessibleTitle!==null&&(d.title=v.accessibleTitle),d.getAttribute("aria-label")!==v.accessibleHint&&v.accessibleHint!==null&&d.setAttribute("aria-label",v.accessibleHint)),(v.accessibleTitle!==d.title||v.tabIndex!==d.tabIndex)&&(d.title=v.accessibleTitle,d.tabIndex=v.tabIndex,this.debug&&this.updateDebugHTML(d))}}this.renderId++}},r.prototype.updateDebugHTML=function(e){e.innerHTML="type: "+e.type+"</br> title : "+e.title+"</br> tabIndex: "+e.tabIndex},r.prototype.capHitArea=function(e){e.x<0&&(e.width+=e.x,e.x=0),e.y<0&&(e.height+=e.y,e.y=0);var t=this.renderer,n=t.width,i=t.height;e.x+e.width>n&&(e.width=n-e.x),e.y+e.height>i&&(e.height=i-e.y)},r.prototype.addChild=function(e){var t=this.pool.pop();t||(t=document.createElement("button"),t.style.width=va+"px",t.style.height=va+"px",t.style.backgroundColor=this.debug?"rgba(255,255,255,0.5)":"transparent",t.style.position="absolute",t.style.zIndex=Ry.toString(),t.style.borderStyle="none",navigator.userAgent.toLowerCase().indexOf("chrome")>-1?t.setAttribute("aria-live","off"):t.setAttribute("aria-live","polite"),navigator.userAgent.match(/rv:.*Gecko\//)?t.setAttribute("aria-relevant","additions"):t.setAttribute("aria-relevant","text"),t.addEventListener("click",this._onClick.bind(this)),t.addEventListener("focus",this._onFocus.bind(this)),t.addEventListener("focusout",this._onFocusOut.bind(this))),t.style.pointerEvents=e.accessiblePointerEvents,t.type=e.accessibleType,e.accessibleTitle&&e.accessibleTitle!==null?t.title=e.accessibleTitle:(!e.accessibleHint||e.accessibleHint===null)&&(t.title="displayObject "+e.tabIndex),e.accessibleHint&&e.accessibleHint!==null&&t.setAttribute("aria-label",e.accessibleHint),this.debug&&this.updateDebugHTML(t),e._accessibleActive=!0,e._accessibleDiv=t,t.displayObject=e,this.children.push(e),this.div.appendChild(e._accessibleDiv),e._accessibleDiv.tabIndex=e.tabIndex},r.prototype._onClick=function(e){var t=this.renderer.plugins.interaction,n=e.target.displayObject,i=t.eventData;t.dispatchEvent(n,"click",i),t.dispatchEvent(n,"pointertap",i),t.dispatchEvent(n,"tap",i)},r.prototype._onFocus=function(e){e.target.getAttribute("aria-live")||e.target.setAttribute("aria-live","assertive");var t=this.renderer.plugins.interaction,n=e.target.displayObject,i=t.eventData;t.dispatchEvent(n,"mouseover",i)},r.prototype._onFocusOut=function(e){e.target.getAttribute("aria-live")||e.target.setAttribute("aria-live","polite");var t=this.renderer.plugins.interaction,n=e.target.displayObject,i=t.eventData;t.dispatchEvent(n,"mouseout",i)},r.prototype._onKeyDown=function(e){e.keyCode===jI&&this.activate()},r.prototype._onMouseMove=function(e){e.movementX===0&&e.movementY===0||this.deactivate()},r.prototype.destroy=function(){this.destroyTouchHook(),this.div=null,globalThis.document.removeEventListener("mousemove",this._onMouseMove,!0),globalThis.removeEventListener("keydown",this._onKeyDown),this.pool=null,this.children=null,this.renderer=null},r.extension={name:"accessibility",type:[rt.RendererPlugin,rt.CanvasRendererPlugin]},r}();/*!
 * @pixi/interaction - v6.5.10
 * Compiled Thu, 06 Jul 2023 15:25:11 UTC
 *
 * @pixi/interaction is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */var Nh=function(){function r(){this.pressure=0,this.rotationAngle=0,this.twist=0,this.tangentialPressure=0,this.global=new X,this.target=null,this.originalEvent=null,this.identifier=null,this.isPrimary=!1,this.button=0,this.buttons=0,this.width=0,this.height=0,this.tiltX=0,this.tiltY=0,this.pointerType=null,this.pressure=0,this.rotationAngle=0,this.twist=0,this.tangentialPressure=0}return Object.defineProperty(r.prototype,"pointerId",{get:function(){return this.identifier},enumerable:!1,configurable:!0}),r.prototype.getLocalPosition=function(e,t,n){return e.worldTransform.applyInverse(n||this.global,t)},r.prototype.copyEvent=function(e){"isPrimary"in e&&e.isPrimary&&(this.isPrimary=!0),this.button="button"in e&&e.button;var t="buttons"in e&&e.buttons;this.buttons=Number.isInteger(t)?t:"which"in e&&e.which,this.width="width"in e&&e.width,this.height="height"in e&&e.height,this.tiltX="tiltX"in e&&e.tiltX,this.tiltY="tiltY"in e&&e.tiltY,this.pointerType="pointerType"in e&&e.pointerType,this.pressure="pressure"in e&&e.pressure,this.rotationAngle="rotationAngle"in e&&e.rotationAngle,this.twist="twist"in e&&e.twist||0,this.tangentialPressure="tangentialPressure"in e&&e.tangentialPressure||0},r.prototype.reset=function(){this.isPrimary=!1},r}();/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Lh=function(r,e){return Lh=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)n.hasOwnProperty(i)&&(t[i]=n[i])},Lh(r,e)};function VI(r,e){Lh(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var Wb=function(){function r(){this.stopped=!1,this.stopsPropagatingAt=null,this.stopPropagationHint=!1,this.target=null,this.currentTarget=null,this.type=null,this.data=null}return r.prototype.stopPropagation=function(){this.stopped=!0,this.stopPropagationHint=!0,this.stopsPropagatingAt=this.currentTarget},r.prototype.reset=function(){this.stopped=!1,this.stopsPropagatingAt=null,this.stopPropagationHint=!1,this.currentTarget=null,this.target=null},r}(),os=function(){function r(e){this._pointerId=e,this._flags=r.FLAGS.NONE}return r.prototype._doSet=function(e,t){t?this._flags=this._flags|e:this._flags=this._flags&~e},Object.defineProperty(r.prototype,"pointerId",{get:function(){return this._pointerId},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"flags",{get:function(){return this._flags},set:function(e){this._flags=e},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"none",{get:function(){return this._flags===r.FLAGS.NONE},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"over",{get:function(){return(this._flags&r.FLAGS.OVER)!==0},set:function(e){this._doSet(r.FLAGS.OVER,e)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"rightDown",{get:function(){return(this._flags&r.FLAGS.RIGHT_DOWN)!==0},set:function(e){this._doSet(r.FLAGS.RIGHT_DOWN,e)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"leftDown",{get:function(){return(this._flags&r.FLAGS.LEFT_DOWN)!==0},set:function(e){this._doSet(r.FLAGS.LEFT_DOWN,e)},enumerable:!1,configurable:!0}),r.FLAGS=Object.freeze({NONE:0,OVER:1,LEFT_DOWN:2,RIGHT_DOWN:4}),r}(),WI=function(){function r(){this._tempPoint=new X}return r.prototype.recursiveFindHit=function(e,t,n,i,o){var a;if(!t||!t.visible)return!1;var s=e.data.global;o=t.interactive||o;var u=!1,l=o,f=!0;if(t.hitArea)i&&(t.worldTransform.applyInverse(s,this._tempPoint),t.hitArea.contains(this._tempPoint.x,this._tempPoint.y)?u=!0:(i=!1,f=!1)),l=!1;else if(t._mask&&i){var c=t._mask.isMaskData?t._mask.maskObject:t._mask;c&&!(!((a=c.containsPoint)===null||a===void 0)&&a.call(c,s))&&(i=!1)}if(f&&t.interactiveChildren&&t.children)for(var h=t.children,d=h.length-1;d>=0;d--){var p=h[d],v=this.recursiveFindHit(e,p,n,i,l);if(v){if(!p.parent)continue;l=!1,v&&(e.target&&(i=!1),u=!0)}}return o&&(i&&!e.target&&!t.hitArea&&t.containsPoint&&t.containsPoint(s)&&(u=!0),t.interactive&&(u&&!e.target&&(e.target=t),n&&n(e,t,!!u))),u},r.prototype.findHit=function(e,t,n,i){this.recursiveFindHit(e,t,n,i,!1)},r}(),Yb={interactive:!1,interactiveChildren:!0,hitArea:null,get buttonMode(){return this.cursor==="pointer"},set buttonMode(r){r?this.cursor="pointer":this.cursor==="pointer"&&(this.cursor=null)},cursor:null,get trackedPointers(){return this._trackedPointers===void 0&&(this._trackedPointers={}),this._trackedPointers},_trackedPointers:void 0};_t.mixin(Yb);var ya=1,ma={target:null,data:{global:null}},qb=function(r){VI(e,r);function e(t,n){var i=r.call(this)||this;return n=n||{},i.renderer=t,i.autoPreventDefault=n.autoPreventDefault!==void 0?n.autoPreventDefault:!0,i.interactionFrequency=n.interactionFrequency||10,i.mouse=new Nh,i.mouse.identifier=ya,i.mouse.global.set(-999999),i.activeInteractionData={},i.activeInteractionData[ya]=i.mouse,i.interactionDataPool=[],i.eventData=new Wb,i.interactionDOMElement=null,i.moveWhenInside=!1,i.eventsAdded=!1,i.tickerAdded=!1,i.mouseOverRenderer=!("PointerEvent"in globalThis),i.supportsTouchEvents="ontouchstart"in globalThis,i.supportsPointerEvents=!!globalThis.PointerEvent,i.onPointerUp=i.onPointerUp.bind(i),i.processPointerUp=i.processPointerUp.bind(i),i.onPointerCancel=i.onPointerCancel.bind(i),i.processPointerCancel=i.processPointerCancel.bind(i),i.onPointerDown=i.onPointerDown.bind(i),i.processPointerDown=i.processPointerDown.bind(i),i.onPointerMove=i.onPointerMove.bind(i),i.processPointerMove=i.processPointerMove.bind(i),i.onPointerOut=i.onPointerOut.bind(i),i.processPointerOverOut=i.processPointerOverOut.bind(i),i.onPointerOver=i.onPointerOver.bind(i),i.cursorStyles={default:"inherit",pointer:"pointer"},i.currentCursorMode=null,i.cursor=null,i.resolution=1,i.delayedEvents=[],i.search=new WI,i._tempDisplayObject=new qd,i._eventListenerOptions={capture:!0,passive:!1},i._useSystemTicker=n.useSystemTicker!==void 0?n.useSystemTicker:!0,i.setTargetElement(i.renderer.view,i.renderer.resolution),i}return Object.defineProperty(e.prototype,"useSystemTicker",{get:function(){return this._useSystemTicker},set:function(t){this._useSystemTicker=t,t?this.addTickerListener():this.removeTickerListener()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"lastObjectRendered",{get:function(){return this.renderer._lastObjectRendered||this._tempDisplayObject},enumerable:!1,configurable:!0}),e.prototype.hitTest=function(t,n){return ma.target=null,ma.data.global=t,n||(n=this.lastObjectRendered),this.processInteractive(ma,n,null,!0),ma.target},e.prototype.setTargetElement=function(t,n){n===void 0&&(n=1),this.removeTickerListener(),this.removeEvents(),this.interactionDOMElement=t,this.resolution=n,this.addEvents(),this.addTickerListener()},e.prototype.addTickerListener=function(){this.tickerAdded||!this.interactionDOMElement||!this._useSystemTicker||(Ct.system.add(this.tickerUpdate,this,Ve.INTERACTION),this.tickerAdded=!0)},e.prototype.removeTickerListener=function(){this.tickerAdded&&(Ct.system.remove(this.tickerUpdate,this),this.tickerAdded=!1)},e.prototype.addEvents=function(){if(!(this.eventsAdded||!this.interactionDOMElement)){var t=this.interactionDOMElement.style;globalThis.navigator.msPointerEnabled?(t.msContentZooming="none",t.msTouchAction="none"):this.supportsPointerEvents&&(t.touchAction="none"),this.supportsPointerEvents?(globalThis.document.addEventListener("pointermove",this.onPointerMove,this._eventListenerOptions),this.interactionDOMElement.addEventListener("pointerdown",this.onPointerDown,this._eventListenerOptions),this.interactionDOMElement.addEventListener("pointerleave",this.onPointerOut,this._eventListenerOptions),this.interactionDOMElement.addEventListener("pointerover",this.onPointerOver,this._eventListenerOptions),globalThis.addEventListener("pointercancel",this.onPointerCancel,this._eventListenerOptions),globalThis.addEventListener("pointerup",this.onPointerUp,this._eventListenerOptions)):(globalThis.document.addEventListener("mousemove",this.onPointerMove,this._eventListenerOptions),this.interactionDOMElement.addEventListener("mousedown",this.onPointerDown,this._eventListenerOptions),this.interactionDOMElement.addEventListener("mouseout",this.onPointerOut,this._eventListenerOptions),this.interactionDOMElement.addEventListener("mouseover",this.onPointerOver,this._eventListenerOptions),globalThis.addEventListener("mouseup",this.onPointerUp,this._eventListenerOptions)),this.supportsTouchEvents&&(this.interactionDOMElement.addEventListener("touchstart",this.onPointerDown,this._eventListenerOptions),this.interactionDOMElement.addEventListener("touchcancel",this.onPointerCancel,this._eventListenerOptions),this.interactionDOMElement.addEventListener("touchend",this.onPointerUp,this._eventListenerOptions),this.interactionDOMElement.addEventListener("touchmove",this.onPointerMove,this._eventListenerOptions)),this.eventsAdded=!0}},e.prototype.removeEvents=function(){if(!(!this.eventsAdded||!this.interactionDOMElement)){var t=this.interactionDOMElement.style;globalThis.navigator.msPointerEnabled?(t.msContentZooming="",t.msTouchAction=""):this.supportsPointerEvents&&(t.touchAction=""),this.supportsPointerEvents?(globalThis.document.removeEventListener("pointermove",this.onPointerMove,this._eventListenerOptions),this.interactionDOMElement.removeEventListener("pointerdown",this.onPointerDown,this._eventListenerOptions),this.interactionDOMElement.removeEventListener("pointerleave",this.onPointerOut,this._eventListenerOptions),this.interactionDOMElement.removeEventListener("pointerover",this.onPointerOver,this._eventListenerOptions),globalThis.removeEventListener("pointercancel",this.onPointerCancel,this._eventListenerOptions),globalThis.removeEventListener("pointerup",this.onPointerUp,this._eventListenerOptions)):(globalThis.document.removeEventListener("mousemove",this.onPointerMove,this._eventListenerOptions),this.interactionDOMElement.removeEventListener("mousedown",this.onPointerDown,this._eventListenerOptions),this.interactionDOMElement.removeEventListener("mouseout",this.onPointerOut,this._eventListenerOptions),this.interactionDOMElement.removeEventListener("mouseover",this.onPointerOver,this._eventListenerOptions),globalThis.removeEventListener("mouseup",this.onPointerUp,this._eventListenerOptions)),this.supportsTouchEvents&&(this.interactionDOMElement.removeEventListener("touchstart",this.onPointerDown,this._eventListenerOptions),this.interactionDOMElement.removeEventListener("touchcancel",this.onPointerCancel,this._eventListenerOptions),this.interactionDOMElement.removeEventListener("touchend",this.onPointerUp,this._eventListenerOptions),this.interactionDOMElement.removeEventListener("touchmove",this.onPointerMove,this._eventListenerOptions)),this.interactionDOMElement=null,this.eventsAdded=!1}},e.prototype.tickerUpdate=function(t){this._deltaTime+=t,!(this._deltaTime<this.interactionFrequency)&&(this._deltaTime=0,this.update())},e.prototype.update=function(){if(this.interactionDOMElement){if(this._didMove){this._didMove=!1;return}this.cursor=null;for(var t in this.activeInteractionData)if(this.activeInteractionData.hasOwnProperty(t)){var n=this.activeInteractionData[t];if(n.originalEvent&&n.pointerType!=="touch"){var i=this.configureInteractionEventForDOMEvent(this.eventData,n.originalEvent,n);this.processInteractive(i,this.lastObjectRendered,this.processPointerOverOut,!0)}}this.setCursorMode(this.cursor)}},e.prototype.setCursorMode=function(t){t=t||"default";var n=!0;if(globalThis.OffscreenCanvas&&this.interactionDOMElement instanceof OffscreenCanvas&&(n=!1),this.currentCursorMode!==t){this.currentCursorMode=t;var i=this.cursorStyles[t];if(i)switch(typeof i){case"string":n&&(this.interactionDOMElement.style.cursor=i);break;case"function":i(t);break;case"object":n&&Object.assign(this.interactionDOMElement.style,i);break}else n&&typeof t=="string"&&!Object.prototype.hasOwnProperty.call(this.cursorStyles,t)&&(this.interactionDOMElement.style.cursor=t)}},e.prototype.dispatchEvent=function(t,n,i){(!i.stopPropagationHint||t===i.stopsPropagatingAt)&&(i.currentTarget=t,i.type=n,t.emit(n,i),t[n]&&t[n](i))},e.prototype.delayDispatchEvent=function(t,n,i){this.delayedEvents.push({displayObject:t,eventString:n,eventData:i})},e.prototype.mapPositionToPoint=function(t,n,i){var o;this.interactionDOMElement.parentElement?o=this.interactionDOMElement.getBoundingClientRect():o={x:0,y:0,width:this.interactionDOMElement.width,height:this.interactionDOMElement.height,left:0,top:0};var a=1/this.resolution;t.x=(n-o.left)*(this.interactionDOMElement.width/o.width)*a,t.y=(i-o.top)*(this.interactionDOMElement.height/o.height)*a},e.prototype.processInteractive=function(t,n,i,o){var a=this.search.findHit(t,n,i,o),s=this.delayedEvents;if(!s.length)return a;t.stopPropagationHint=!1;var u=s.length;this.delayedEvents=[];for(var l=0;l<u;l++){var f=s[l],c=f.displayObject,h=f.eventString,d=f.eventData;d.stopsPropagatingAt===c&&(d.stopPropagationHint=!0),this.dispatchEvent(c,h,d)}return a},e.prototype.onPointerDown=function(t){if(!(this.supportsTouchEvents&&t.pointerType==="touch")){var n=this.normalizeToPointerData(t);if(this.autoPreventDefault&&n[0].isNormalized){var i=t.cancelable||!("cancelable"in t);i&&t.preventDefault()}for(var o=n.length,a=0;a<o;a++){var s=n[a],u=this.getInteractionDataForPointerId(s),l=this.configureInteractionEventForDOMEvent(this.eventData,s,u);if(l.data.originalEvent=t,this.processInteractive(l,this.lastObjectRendered,this.processPointerDown,!0),this.emit("pointerdown",l),s.pointerType==="touch")this.emit("touchstart",l);else if(s.pointerType==="mouse"||s.pointerType==="pen"){var f=s.button===2;this.emit(f?"rightdown":"mousedown",this.eventData)}}}},e.prototype.processPointerDown=function(t,n,i){var o=t.data,a=t.data.identifier;if(i){if(n.trackedPointers[a]||(n.trackedPointers[a]=new os(a)),this.dispatchEvent(n,"pointerdown",t),o.pointerType==="touch")this.dispatchEvent(n,"touchstart",t);else if(o.pointerType==="mouse"||o.pointerType==="pen"){var s=o.button===2;s?n.trackedPointers[a].rightDown=!0:n.trackedPointers[a].leftDown=!0,this.dispatchEvent(n,s?"rightdown":"mousedown",t)}}},e.prototype.onPointerComplete=function(t,n,i){var o=this.normalizeToPointerData(t),a=o.length,s=t.target;t.composedPath&&t.composedPath().length>0&&(s=t.composedPath()[0]);for(var u=s!==this.interactionDOMElement?"outside":"",l=0;l<a;l++){var f=o[l],c=this.getInteractionDataForPointerId(f),h=this.configureInteractionEventForDOMEvent(this.eventData,f,c);if(h.data.originalEvent=t,this.processInteractive(h,this.lastObjectRendered,i,n||!u),this.emit(n?"pointercancel":"pointerup"+u,h),f.pointerType==="mouse"||f.pointerType==="pen"){var d=f.button===2;this.emit(d?"rightup"+u:"mouseup"+u,h)}else f.pointerType==="touch"&&(this.emit(n?"touchcancel":"touchend"+u,h),this.releaseInteractionDataForPointerId(f.pointerId))}},e.prototype.onPointerCancel=function(t){this.supportsTouchEvents&&t.pointerType==="touch"||this.onPointerComplete(t,!0,this.processPointerCancel)},e.prototype.processPointerCancel=function(t,n){var i=t.data,o=t.data.identifier;n.trackedPointers[o]!==void 0&&(delete n.trackedPointers[o],this.dispatchEvent(n,"pointercancel",t),i.pointerType==="touch"&&this.dispatchEvent(n,"touchcancel",t))},e.prototype.onPointerUp=function(t){this.supportsTouchEvents&&t.pointerType==="touch"||this.onPointerComplete(t,!1,this.processPointerUp)},e.prototype.processPointerUp=function(t,n,i){var o=t.data,a=t.data.identifier,s=n.trackedPointers[a],u=o.pointerType==="touch",l=o.pointerType==="mouse"||o.pointerType==="pen",f=!1;if(l){var c=o.button===2,h=os.FLAGS,d=c?h.RIGHT_DOWN:h.LEFT_DOWN,p=s!==void 0&&s.flags&d;i?(this.dispatchEvent(n,c?"rightup":"mouseup",t),p&&(this.dispatchEvent(n,c?"rightclick":"click",t),f=!0)):p&&this.dispatchEvent(n,c?"rightupoutside":"mouseupoutside",t),s&&(c?s.rightDown=!1:s.leftDown=!1)}i?(this.dispatchEvent(n,"pointerup",t),u&&this.dispatchEvent(n,"touchend",t),s&&((!l||f)&&this.dispatchEvent(n,"pointertap",t),u&&(this.dispatchEvent(n,"tap",t),s.over=!1))):s&&(this.dispatchEvent(n,"pointerupoutside",t),u&&this.dispatchEvent(n,"touchendoutside",t)),s&&s.none&&delete n.trackedPointers[a]},e.prototype.onPointerMove=function(t){if(!(this.supportsTouchEvents&&t.pointerType==="touch")){var n=this.normalizeToPointerData(t);(n[0].pointerType==="mouse"||n[0].pointerType==="pen")&&(this._didMove=!0,this.cursor=null);for(var i=n.length,o=0;o<i;o++){var a=n[o],s=this.getInteractionDataForPointerId(a),u=this.configureInteractionEventForDOMEvent(this.eventData,a,s);u.data.originalEvent=t,this.processInteractive(u,this.lastObjectRendered,this.processPointerMove,!0),this.emit("pointermove",u),a.pointerType==="touch"&&this.emit("touchmove",u),(a.pointerType==="mouse"||a.pointerType==="pen")&&this.emit("mousemove",u)}n[0].pointerType==="mouse"&&this.setCursorMode(this.cursor)}},e.prototype.processPointerMove=function(t,n,i){var o=t.data,a=o.pointerType==="touch",s=o.pointerType==="mouse"||o.pointerType==="pen";s&&this.processPointerOverOut(t,n,i),(!this.moveWhenInside||i)&&(this.dispatchEvent(n,"pointermove",t),a&&this.dispatchEvent(n,"touchmove",t),s&&this.dispatchEvent(n,"mousemove",t))},e.prototype.onPointerOut=function(t){if(!(this.supportsTouchEvents&&t.pointerType==="touch")){var n=this.normalizeToPointerData(t),i=n[0];i.pointerType==="mouse"&&(this.mouseOverRenderer=!1,this.setCursorMode(null));var o=this.getInteractionDataForPointerId(i),a=this.configureInteractionEventForDOMEvent(this.eventData,i,o);a.data.originalEvent=i,this.processInteractive(a,this.lastObjectRendered,this.processPointerOverOut,!1),this.emit("pointerout",a),i.pointerType==="mouse"||i.pointerType==="pen"?this.emit("mouseout",a):this.releaseInteractionDataForPointerId(o.identifier)}},e.prototype.processPointerOverOut=function(t,n,i){var o=t.data,a=t.data.identifier,s=o.pointerType==="mouse"||o.pointerType==="pen",u=n.trackedPointers[a];i&&!u&&(u=n.trackedPointers[a]=new os(a)),u!==void 0&&(i&&this.mouseOverRenderer?(u.over||(u.over=!0,this.delayDispatchEvent(n,"pointerover",t),s&&this.delayDispatchEvent(n,"mouseover",t)),s&&this.cursor===null&&(this.cursor=n.cursor)):u.over&&(u.over=!1,this.dispatchEvent(n,"pointerout",this.eventData),s&&this.dispatchEvent(n,"mouseout",t),u.none&&delete n.trackedPointers[a]))},e.prototype.onPointerOver=function(t){if(!(this.supportsTouchEvents&&t.pointerType==="touch")){var n=this.normalizeToPointerData(t),i=n[0],o=this.getInteractionDataForPointerId(i),a=this.configureInteractionEventForDOMEvent(this.eventData,i,o);a.data.originalEvent=i,i.pointerType==="mouse"&&(this.mouseOverRenderer=!0),this.emit("pointerover",a),(i.pointerType==="mouse"||i.pointerType==="pen")&&this.emit("mouseover",a)}},e.prototype.getInteractionDataForPointerId=function(t){var n=t.pointerId,i;return n===ya||t.pointerType==="mouse"?i=this.mouse:this.activeInteractionData[n]?i=this.activeInteractionData[n]:(i=this.interactionDataPool.pop()||new Nh,i.identifier=n,this.activeInteractionData[n]=i),i.copyEvent(t),i},e.prototype.releaseInteractionDataForPointerId=function(t){var n=this.activeInteractionData[t];n&&(delete this.activeInteractionData[t],n.reset(),this.interactionDataPool.push(n))},e.prototype.configureInteractionEventForDOMEvent=function(t,n,i){return t.data=i,this.mapPositionToPoint(i.global,n.clientX,n.clientY),n.pointerType==="touch"&&(n.globalX=i.global.x,n.globalY=i.global.y),i.originalEvent=n,t.reset(),t},e.prototype.normalizeToPointerData=function(t){var n=[];if(this.supportsTouchEvents&&t instanceof TouchEvent)for(var i=0,o=t.changedTouches.length;i<o;i++){var a=t.changedTouches[i];typeof a.button>"u"&&(a.button=t.touches.length?1:0),typeof a.buttons>"u"&&(a.buttons=t.touches.length?1:0),typeof a.isPrimary>"u"&&(a.isPrimary=t.touches.length===1&&t.type==="touchstart"),typeof a.width>"u"&&(a.width=a.radiusX||1),typeof a.height>"u"&&(a.height=a.radiusY||1),typeof a.tiltX>"u"&&(a.tiltX=0),typeof a.tiltY>"u"&&(a.tiltY=0),typeof a.pointerType>"u"&&(a.pointerType="touch"),typeof a.pointerId>"u"&&(a.pointerId=a.identifier||0),typeof a.pressure>"u"&&(a.pressure=a.force||.5),typeof a.twist>"u"&&(a.twist=0),typeof a.tangentialPressure>"u"&&(a.tangentialPressure=0),typeof a.layerX>"u"&&(a.layerX=a.offsetX=a.clientX),typeof a.layerY>"u"&&(a.layerY=a.offsetY=a.clientY),a.isNormalized=!0,n.push(a)}else if(!globalThis.MouseEvent||t instanceof MouseEvent&&(!this.supportsPointerEvents||!(t instanceof globalThis.PointerEvent))){var s=t;typeof s.isPrimary>"u"&&(s.isPrimary=!0),typeof s.width>"u"&&(s.width=1),typeof s.height>"u"&&(s.height=1),typeof s.tiltX>"u"&&(s.tiltX=0),typeof s.tiltY>"u"&&(s.tiltY=0),typeof s.pointerType>"u"&&(s.pointerType="mouse"),typeof s.pointerId>"u"&&(s.pointerId=ya),typeof s.pressure>"u"&&(s.pressure=.5),typeof s.twist>"u"&&(s.twist=0),typeof s.tangentialPressure>"u"&&(s.tangentialPressure=0),s.isNormalized=!0,n.push(s)}else n.push(t);return n},e.prototype.destroy=function(){this.removeEvents(),this.removeTickerListener(),this.removeAllListeners(),this.renderer=null,this.mouse=null,this.eventData=null,this.interactionDOMElement=null,this.onPointerDown=null,this.processPointerDown=null,this.onPointerUp=null,this.processPointerUp=null,this.onPointerCancel=null,this.processPointerCancel=null,this.onPointerMove=null,this.processPointerMove=null,this.onPointerOut=null,this.processPointerOverOut=null,this.onPointerOver=null,this.search=null},e.extension={name:"interaction",type:[rt.RendererPlugin,rt.CanvasRendererPlugin]},e}(cn);/*!
 * @pixi/extract - v6.5.10
 * Compiled Thu, 06 Jul 2023 15:25:11 UTC
 *
 * @pixi/extract is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */var YI=new K,qI=4,Kb=function(){function r(e){this.renderer=e}return r.prototype.image=function(e,t,n){var i=new Image;return i.src=this.base64(e,t,n),i},r.prototype.base64=function(e,t,n){return this.canvas(e).toDataURL(t,n)},r.prototype.canvas=function(e,t){var n=this._rawPixels(e,t),i=n.pixels,o=n.width,a=n.height,s=n.flipY,u=new Ch(o,a,1),l=u.context.getImageData(0,0,o,a);if(r.arrayPostDivide(i,l.data),u.context.putImageData(l,0,0),s){var f=new Ch(u.width,u.height,1);f.context.scale(1,-1),f.context.drawImage(u.canvas,0,-a),u.destroy(),u=f}return u.canvas},r.prototype.pixels=function(e,t){var n=this._rawPixels(e,t).pixels;return r.arrayPostDivide(n,n),n},r.prototype._rawPixels=function(e,t){var n=this.renderer,i,o=!1,a,s=!1;if(e)if(e instanceof Pr)a=e;else{var u=n.context.webGLVersion>=2?n.multisample:lt.NONE;if(a=this.renderer.generateTexture(e,{multisample:u}),u!==lt.NONE){var l=Pr.create({width:a.width,height:a.height});n.framebuffer.bind(a.framebuffer),n.framebuffer.blit(l.framebuffer),n.framebuffer.bind(null),a.destroy(!0),a=l}s=!0}a?(i=a.baseTexture.resolution,t=t??a.frame,o=!1,n.renderTexture.bind(a)):(i=n.resolution,t||(t=YI,t.width=n.width,t.height=n.height),o=!0,n.renderTexture.bind(null));var f=Math.round(t.width*i),c=Math.round(t.height*i),h=new Uint8Array(qI*f*c),d=n.gl;return d.readPixels(Math.round(t.x*i),Math.round(t.y*i),f,c,d.RGBA,d.UNSIGNED_BYTE,h),s&&a.destroy(!0),{pixels:h,width:f,height:c,flipY:o}},r.prototype.destroy=function(){this.renderer=null},r.arrayPostDivide=function(e,t){for(var n=0;n<e.length;n+=4){var i=t[n+3]=e[n+3];i!==0?(t[n]=Math.round(Math.min(e[n]*255/i,255)),t[n+1]=Math.round(Math.min(e[n+1]*255/i,255)),t[n+2]=Math.round(Math.min(e[n+2]*255/i,255))):(t[n]=e[n],t[n+1]=e[n+1],t[n+2]=e[n+2])}},r.extension={name:"extract",type:rt.RendererPlugin},r}();/*!
 * @pixi/loaders - v6.5.10
 * Compiled Thu, 06 Jul 2023 15:25:11 UTC
 *
 * @pixi/loaders is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */var _a=function(){function r(e,t,n){t===void 0&&(t=!1),this._fn=e,this._once=t,this._thisArg=n,this._next=this._prev=this._owner=null}return r.prototype.detach=function(){return this._owner===null?!1:(this._owner.detach(this),!0)},r}();function My(r,e){return r._head?(r._tail._next=e,e._prev=r._tail,r._tail=e):(r._head=e,r._tail=e),e._owner=r,e}var or=function(){function r(){this._head=this._tail=void 0}return r.prototype.handlers=function(e){e===void 0&&(e=!1);var t=this._head;if(e)return!!t;for(var n=[];t;)n.push(t),t=t._next;return n},r.prototype.has=function(e){if(!(e instanceof _a))throw new Error("MiniSignal#has(): First arg must be a SignalBinding object.");return e._owner===this},r.prototype.dispatch=function(){for(var e=arguments,t=[],n=0;n<arguments.length;n++)t[n]=e[n];var i=this._head;if(!i)return!1;for(;i;)i._once&&this.detach(i),i._fn.apply(i._thisArg,t),i=i._next;return!0},r.prototype.add=function(e,t){if(t===void 0&&(t=null),typeof e!="function")throw new Error("MiniSignal#add(): First arg must be a Function.");return My(this,new _a(e,!1,t))},r.prototype.once=function(e,t){if(t===void 0&&(t=null),typeof e!="function")throw new Error("MiniSignal#once(): First arg must be a Function.");return My(this,new _a(e,!0,t))},r.prototype.detach=function(e){if(!(e instanceof _a))throw new Error("MiniSignal#detach(): First arg must be a SignalBinding object.");return e._owner!==this?this:(e._prev&&(e._prev._next=e._next),e._next&&(e._next._prev=e._prev),e===this._head?(this._head=e._next,e._next===null&&(this._tail=null)):e===this._tail&&(this._tail=e._prev,this._tail._next=null),e._owner=null,this)},r.prototype.detachAll=function(){var e=this._head;if(!e)return this;for(this._head=this._tail=null;e;)e._owner=null,e=e._next;return this},r}();function Zb(r,e){e=e||{};for(var t={key:["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"],q:{name:"queryKey",parser:/(?:^|&)([^&=]*)=?([^&]*)/g},parser:{strict:/^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,loose:/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/}},n=t.parser[e.strictMode?"strict":"loose"].exec(r),i={},o=14;o--;)i[t.key[o]]=n[o]||"";return i[t.q.name]={},i[t.key[12]].replace(t.q.parser,function(a,s,u){s&&(i[t.q.name][s]=u)}),i}var Ll,ga=null,KI=0,Dy=200,ZI=204,JI=1223,QI=2;function Fy(){}function Ny(r,e,t){e&&e.indexOf(".")===0&&(e=e.substring(1)),e&&(r[e]=t)}function Bl(r){return r.toString().replace("object ","")}var yt=function(){function r(e,t,n){if(this._dequeue=Fy,this._onLoadBinding=null,this._elementTimer=0,this._boundComplete=null,this._boundOnError=null,this._boundOnProgress=null,this._boundOnTimeout=null,this._boundXhrOnError=null,this._boundXhrOnTimeout=null,this._boundXhrOnAbort=null,this._boundXhrOnLoad=null,typeof e!="string"||typeof t!="string")throw new Error("Both name and url are required for constructing a resource.");n=n||{},this._flags=0,this._setFlag(r.STATUS_FLAGS.DATA_URL,t.indexOf("data:")===0),this.name=e,this.url=t,this.extension=this._getExtension(),this.data=null,this.crossOrigin=n.crossOrigin===!0?"anonymous":n.crossOrigin,this.timeout=n.timeout||0,this.loadType=n.loadType||this._determineLoadType(),this.xhrType=n.xhrType,this.metadata=n.metadata||{},this.error=null,this.xhr=null,this.children=[],this.type=r.TYPE.UNKNOWN,this.progressChunk=0,this._dequeue=Fy,this._onLoadBinding=null,this._elementTimer=0,this._boundComplete=this.complete.bind(this),this._boundOnError=this._onError.bind(this),this._boundOnProgress=this._onProgress.bind(this),this._boundOnTimeout=this._onTimeout.bind(this),this._boundXhrOnError=this._xhrOnError.bind(this),this._boundXhrOnTimeout=this._xhrOnTimeout.bind(this),this._boundXhrOnAbort=this._xhrOnAbort.bind(this),this._boundXhrOnLoad=this._xhrOnLoad.bind(this),this.onStart=new or,this.onProgress=new or,this.onComplete=new or,this.onAfterMiddleware=new or}return r.setExtensionLoadType=function(e,t){Ny(r._loadTypeMap,e,t)},r.setExtensionXhrType=function(e,t){Ny(r._xhrTypeMap,e,t)},Object.defineProperty(r.prototype,"isDataUrl",{get:function(){return this._hasFlag(r.STATUS_FLAGS.DATA_URL)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"isComplete",{get:function(){return this._hasFlag(r.STATUS_FLAGS.COMPLETE)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"isLoading",{get:function(){return this._hasFlag(r.STATUS_FLAGS.LOADING)},enumerable:!1,configurable:!0}),r.prototype.complete=function(){this._clearEvents(),this._finish()},r.prototype.abort=function(e){if(!this.error){if(this.error=new Error(e),this._clearEvents(),this.xhr)this.xhr.abort();else if(this.xdr)this.xdr.abort();else if(this.data)if(this.data.src)this.data.src=r.EMPTY_GIF;else for(;this.data.firstChild;)this.data.removeChild(this.data.firstChild);this._finish()}},r.prototype.load=function(e){var t=this;if(!this.isLoading){if(this.isComplete){e&&setTimeout(function(){return e(t)},1);return}else e&&this.onComplete.once(e);switch(this._setFlag(r.STATUS_FLAGS.LOADING,!0),this.onStart.dispatch(this),(this.crossOrigin===!1||typeof this.crossOrigin!="string")&&(this.crossOrigin=this._determineCrossOrigin(this.url)),this.loadType){case r.LOAD_TYPE.IMAGE:this.type=r.TYPE.IMAGE,this._loadElement("image");break;case r.LOAD_TYPE.AUDIO:this.type=r.TYPE.AUDIO,this._loadSourceElement("audio");break;case r.LOAD_TYPE.VIDEO:this.type=r.TYPE.VIDEO,this._loadSourceElement("video");break;case r.LOAD_TYPE.XHR:default:typeof Ll>"u"&&(Ll=!!(globalThis.XDomainRequest&&!("withCredentials"in new XMLHttpRequest))),Ll&&this.crossOrigin?this._loadXdr():this._loadXhr();break}}},r.prototype._hasFlag=function(e){return(this._flags&e)!==0},r.prototype._setFlag=function(e,t){this._flags=t?this._flags|e:this._flags&~e},r.prototype._clearEvents=function(){clearTimeout(this._elementTimer),this.data&&this.data.removeEventListener&&(this.data.removeEventListener("error",this._boundOnError,!1),this.data.removeEventListener("load",this._boundComplete,!1),this.data.removeEventListener("progress",this._boundOnProgress,!1),this.data.removeEventListener("canplaythrough",this._boundComplete,!1)),this.xhr&&(this.xhr.removeEventListener?(this.xhr.removeEventListener("error",this._boundXhrOnError,!1),this.xhr.removeEventListener("timeout",this._boundXhrOnTimeout,!1),this.xhr.removeEventListener("abort",this._boundXhrOnAbort,!1),this.xhr.removeEventListener("progress",this._boundOnProgress,!1),this.xhr.removeEventListener("load",this._boundXhrOnLoad,!1)):(this.xhr.onerror=null,this.xhr.ontimeout=null,this.xhr.onprogress=null,this.xhr.onload=null))},r.prototype._finish=function(){if(this.isComplete)throw new Error("Complete called again for an already completed resource.");this._setFlag(r.STATUS_FLAGS.COMPLETE,!0),this._setFlag(r.STATUS_FLAGS.LOADING,!1),this.onComplete.dispatch(this)},r.prototype._loadElement=function(e){this.metadata.loadElement?this.data=this.metadata.loadElement:e==="image"&&typeof globalThis.Image<"u"?this.data=new Image:this.data=document.createElement(e),this.crossOrigin&&(this.data.crossOrigin=this.crossOrigin),this.metadata.skipSource||(this.data.src=this.url),this.data.addEventListener("error",this._boundOnError,!1),this.data.addEventListener("load",this._boundComplete,!1),this.data.addEventListener("progress",this._boundOnProgress,!1),this.timeout&&(this._elementTimer=setTimeout(this._boundOnTimeout,this.timeout))},r.prototype._loadSourceElement=function(e){if(this.metadata.loadElement?this.data=this.metadata.loadElement:e==="audio"&&typeof globalThis.Audio<"u"?this.data=new Audio:this.data=document.createElement(e),this.data===null){this.abort("Unsupported element: "+e);return}if(this.crossOrigin&&(this.data.crossOrigin=this.crossOrigin),!this.metadata.skipSource)if(navigator.isCocoonJS)this.data.src=Array.isArray(this.url)?this.url[0]:this.url;else if(Array.isArray(this.url))for(var t=this.metadata.mimeType,n=0;n<this.url.length;++n)this.data.appendChild(this._createSource(e,this.url[n],Array.isArray(t)?t[n]:t));else{var t=this.metadata.mimeType;this.data.appendChild(this._createSource(e,this.url,Array.isArray(t)?t[0]:t))}this.data.addEventListener("error",this._boundOnError,!1),this.data.addEventListener("load",this._boundComplete,!1),this.data.addEventListener("progress",this._boundOnProgress,!1),this.data.addEventListener("canplaythrough",this._boundComplete,!1),this.data.load(),this.timeout&&(this._elementTimer=setTimeout(this._boundOnTimeout,this.timeout))},r.prototype._loadXhr=function(){typeof this.xhrType!="string"&&(this.xhrType=this._determineXhrType());var e=this.xhr=new XMLHttpRequest;this.crossOrigin==="use-credentials"&&(e.withCredentials=!0),e.open("GET",this.url,!0),e.timeout=this.timeout,this.xhrType===r.XHR_RESPONSE_TYPE.JSON||this.xhrType===r.XHR_RESPONSE_TYPE.DOCUMENT?e.responseType=r.XHR_RESPONSE_TYPE.TEXT:e.responseType=this.xhrType,e.addEventListener("error",this._boundXhrOnError,!1),e.addEventListener("timeout",this._boundXhrOnTimeout,!1),e.addEventListener("abort",this._boundXhrOnAbort,!1),e.addEventListener("progress",this._boundOnProgress,!1),e.addEventListener("load",this._boundXhrOnLoad,!1),e.send()},r.prototype._loadXdr=function(){typeof this.xhrType!="string"&&(this.xhrType=this._determineXhrType());var e=this.xhr=new globalThis.XDomainRequest;e.timeout=this.timeout||5e3,e.onerror=this._boundXhrOnError,e.ontimeout=this._boundXhrOnTimeout,e.onprogress=this._boundOnProgress,e.onload=this._boundXhrOnLoad,e.open("GET",this.url,!0),setTimeout(function(){return e.send()},1)},r.prototype._createSource=function(e,t,n){n||(n=e+"/"+this._getExtension(t));var i=document.createElement("source");return i.src=t,i.type=n,i},r.prototype._onError=function(e){this.abort("Failed to load element using: "+e.target.nodeName)},r.prototype._onProgress=function(e){e&&e.lengthComputable&&this.onProgress.dispatch(this,e.loaded/e.total)},r.prototype._onTimeout=function(){this.abort("Load timed out.")},r.prototype._xhrOnError=function(){var e=this.xhr;this.abort(Bl(e)+" Request failed. Status: "+e.status+', text: "'+e.statusText+'"')},r.prototype._xhrOnTimeout=function(){var e=this.xhr;this.abort(Bl(e)+" Request timed out.")},r.prototype._xhrOnAbort=function(){var e=this.xhr;this.abort(Bl(e)+" Request was aborted by the user.")},r.prototype._xhrOnLoad=function(){var e=this.xhr,t="",n=typeof e.status>"u"?Dy:e.status;(e.responseType===""||e.responseType==="text"||typeof e.responseType>"u")&&(t=e.responseText),n===KI&&(t.length>0||e.responseType===r.XHR_RESPONSE_TYPE.BUFFER)?n=Dy:n===JI&&(n=ZI);var i=n/100|0;if(i===QI)if(this.xhrType===r.XHR_RESPONSE_TYPE.TEXT)this.data=t,this.type=r.TYPE.TEXT;else if(this.xhrType===r.XHR_RESPONSE_TYPE.JSON)try{this.data=JSON.parse(t),this.type=r.TYPE.JSON}catch(s){this.abort("Error trying to parse loaded json: "+s);return}else if(this.xhrType===r.XHR_RESPONSE_TYPE.DOCUMENT)try{if(globalThis.DOMParser){var o=new DOMParser;this.data=o.parseFromString(t,"text/xml")}else{var a=document.createElement("div");a.innerHTML=t,this.data=a}this.type=r.TYPE.XML}catch(s){this.abort("Error trying to parse loaded xml: "+s);return}else this.data=e.response||t;else{this.abort("["+e.status+"] "+e.statusText+": "+e.responseURL);return}this.complete()},r.prototype._determineCrossOrigin=function(e,t){if(e.indexOf("data:")===0)return"";if(globalThis.origin!==globalThis.location.origin)return"anonymous";t=t||globalThis.location,ga||(ga=document.createElement("a")),ga.href=e;var n=Zb(ga.href,{strictMode:!0}),i=!n.port&&t.port===""||n.port===t.port,o=n.protocol?n.protocol+":":"";return n.host!==t.hostname||!i||o!==t.protocol?"anonymous":""},r.prototype._determineXhrType=function(){return r._xhrTypeMap[this.extension]||r.XHR_RESPONSE_TYPE.TEXT},r.prototype._determineLoadType=function(){return r._loadTypeMap[this.extension]||r.LOAD_TYPE.XHR},r.prototype._getExtension=function(e){e===void 0&&(e=this.url);var t="";if(this.isDataUrl){var n=e.indexOf("/");t=e.substring(n+1,e.indexOf(";",n))}else{var i=e.indexOf("?"),o=e.indexOf("#"),a=Math.min(i>-1?i:e.length,o>-1?o:e.length);e=e.substring(0,a),t=e.substring(e.lastIndexOf(".")+1)}return t.toLowerCase()},r.prototype._getMimeFromXhrType=function(e){switch(e){case r.XHR_RESPONSE_TYPE.BUFFER:return"application/octet-binary";case r.XHR_RESPONSE_TYPE.BLOB:return"application/blob";case r.XHR_RESPONSE_TYPE.DOCUMENT:return"application/xml";case r.XHR_RESPONSE_TYPE.JSON:return"application/json";case r.XHR_RESPONSE_TYPE.DEFAULT:case r.XHR_RESPONSE_TYPE.TEXT:default:return"text/plain"}},r}();(function(r){(function(e){e[e.NONE=0]="NONE",e[e.DATA_URL=1]="DATA_URL",e[e.COMPLETE=2]="COMPLETE",e[e.LOADING=4]="LOADING"})(r.STATUS_FLAGS||(r.STATUS_FLAGS={})),function(e){e[e.UNKNOWN=0]="UNKNOWN",e[e.JSON=1]="JSON",e[e.XML=2]="XML",e[e.IMAGE=3]="IMAGE",e[e.AUDIO=4]="AUDIO",e[e.VIDEO=5]="VIDEO",e[e.TEXT=6]="TEXT"}(r.TYPE||(r.TYPE={})),function(e){e[e.XHR=1]="XHR",e[e.IMAGE=2]="IMAGE",e[e.AUDIO=3]="AUDIO",e[e.VIDEO=4]="VIDEO"}(r.LOAD_TYPE||(r.LOAD_TYPE={})),function(e){e.DEFAULT="text",e.BUFFER="arraybuffer",e.BLOB="blob",e.DOCUMENT="document",e.JSON="json",e.TEXT="text"}(r.XHR_RESPONSE_TYPE||(r.XHR_RESPONSE_TYPE={})),r._loadTypeMap={gif:r.LOAD_TYPE.IMAGE,png:r.LOAD_TYPE.IMAGE,bmp:r.LOAD_TYPE.IMAGE,jpg:r.LOAD_TYPE.IMAGE,jpeg:r.LOAD_TYPE.IMAGE,tif:r.LOAD_TYPE.IMAGE,tiff:r.LOAD_TYPE.IMAGE,webp:r.LOAD_TYPE.IMAGE,tga:r.LOAD_TYPE.IMAGE,avif:r.LOAD_TYPE.IMAGE,svg:r.LOAD_TYPE.IMAGE,"svg+xml":r.LOAD_TYPE.IMAGE,mp3:r.LOAD_TYPE.AUDIO,ogg:r.LOAD_TYPE.AUDIO,wav:r.LOAD_TYPE.AUDIO,mp4:r.LOAD_TYPE.VIDEO,webm:r.LOAD_TYPE.VIDEO},r._xhrTypeMap={xhtml:r.XHR_RESPONSE_TYPE.DOCUMENT,html:r.XHR_RESPONSE_TYPE.DOCUMENT,htm:r.XHR_RESPONSE_TYPE.DOCUMENT,xml:r.XHR_RESPONSE_TYPE.DOCUMENT,tmx:r.XHR_RESPONSE_TYPE.DOCUMENT,svg:r.XHR_RESPONSE_TYPE.DOCUMENT,tsx:r.XHR_RESPONSE_TYPE.DOCUMENT,gif:r.XHR_RESPONSE_TYPE.BLOB,png:r.XHR_RESPONSE_TYPE.BLOB,bmp:r.XHR_RESPONSE_TYPE.BLOB,jpg:r.XHR_RESPONSE_TYPE.BLOB,jpeg:r.XHR_RESPONSE_TYPE.BLOB,tif:r.XHR_RESPONSE_TYPE.BLOB,tiff:r.XHR_RESPONSE_TYPE.BLOB,webp:r.XHR_RESPONSE_TYPE.BLOB,tga:r.XHR_RESPONSE_TYPE.BLOB,avif:r.XHR_RESPONSE_TYPE.BLOB,json:r.XHR_RESPONSE_TYPE.JSON,text:r.XHR_RESPONSE_TYPE.TEXT,txt:r.XHR_RESPONSE_TYPE.TEXT,ttf:r.XHR_RESPONSE_TYPE.BUFFER,otf:r.XHR_RESPONSE_TYPE.BUFFER},r.EMPTY_GIF="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="})(yt||(yt={}));function Br(){}function tM(r){return function(){for(var t=arguments,n=[],i=0;i<arguments.length;i++)n[i]=t[i];if(r===null)throw new Error("Callback was already called.");var o=r;r=null,o.apply(this,n)}}var eM=function(){function r(e,t){this.data=e,this.callback=t}return r}(),Ul=function(){function r(e,t){var n=this;if(t===void 0&&(t=1),this.workers=0,this.saturated=Br,this.unsaturated=Br,this.empty=Br,this.drain=Br,this.error=Br,this.started=!1,this.paused=!1,this._tasks=[],this._insert=function(i,o,a){if(a&&typeof a!="function")throw new Error("task callback must be a function");if(n.started=!0,i==null&&n.idle()){setTimeout(function(){return n.drain()},1);return}var s=new eM(i,typeof a=="function"?a:Br);o?n._tasks.unshift(s):n._tasks.push(s),setTimeout(n.process,1)},this.process=function(){for(;!n.paused&&n.workers<n.concurrency&&n._tasks.length;){var i=n._tasks.shift();n._tasks.length===0&&n.empty(),n.workers+=1,n.workers===n.concurrency&&n.saturated(),n._worker(i.data,tM(n._next(i)))}},this._worker=e,t===0)throw new Error("Concurrency must not be zero");this.concurrency=t,this.buffer=t/4}return r.prototype._next=function(e){var t=this;return function(){for(var n=arguments,i=[],o=0;o<arguments.length;o++)i[o]=n[o];t.workers-=1,e.callback.apply(e,i),i[0]!=null&&t.error(i[0],e.data),t.workers<=t.concurrency-t.buffer&&t.unsaturated(),t.idle()&&t.drain(),t.process()}},r.prototype.push=function(e,t){this._insert(e,!1,t)},r.prototype.kill=function(){this.workers=0,this.drain=Br,this.started=!1,this._tasks=[]},r.prototype.unshift=function(e,t){this._insert(e,!0,t)},r.prototype.length=function(){return this._tasks.length},r.prototype.running=function(){return this.workers},r.prototype.idle=function(){return this._tasks.length+this.workers===0},r.prototype.pause=function(){this.paused!==!0&&(this.paused=!0)},r.prototype.resume=function(){if(this.paused!==!1){this.paused=!1;for(var e=1;e<=this.concurrency;e++)this.process()}},r.eachSeries=function(e,t,n,i){var o=0,a=e.length;function s(u){if(u||o===a){n&&n(u);return}i?setTimeout(function(){t(e[o++],s)},1):t(e[o++],s)}s()},r.queue=function(e,t){return new r(e,t)},r}(),Gl=100,rM=/(#[\w-]+)?$/,ii=function(){function r(e,t){var n=this;e===void 0&&(e=""),t===void 0&&(t=10),this.progress=0,this.loading=!1,this.defaultQueryString="",this._beforeMiddleware=[],this._afterMiddleware=[],this._resourcesParsing=[],this._boundLoadResource=function(u,l){return n._loadResource(u,l)},this.resources={},this.baseUrl=e,this._beforeMiddleware=[],this._afterMiddleware=[],this._resourcesParsing=[],this._boundLoadResource=function(u,l){return n._loadResource(u,l)},this._queue=Ul.queue(this._boundLoadResource,t),this._queue.pause(),this.resources={},this.onProgress=new or,this.onError=new or,this.onLoad=new or,this.onStart=new or,this.onComplete=new or;for(var i=0;i<r._plugins.length;++i){var o=r._plugins[i],a=o.pre,s=o.use;a&&this.pre(a),s&&this.use(s)}this._protected=!1}return r.prototype._add=function(e,t,n,i){if(this.loading&&(!n||!n.parentResource))throw new Error("Cannot add resources while the loader is running.");if(this.resources[e])throw new Error('Resource named "'+e+'" already exists.');if(t=this._prepareUrl(t),this.resources[e]=new yt(e,t,n),typeof i=="function"&&this.resources[e].onAfterMiddleware.once(i),this.loading){for(var o=n.parentResource,a=[],s=0;s<o.children.length;++s)o.children[s].isComplete||a.push(o.children[s]);var u=o.progressChunk*(a.length+1),l=u/(a.length+2);o.children.push(this.resources[e]),o.progressChunk=l;for(var s=0;s<a.length;++s)a[s].progressChunk=l;this.resources[e].progressChunk=l}return this._queue.push(this.resources[e]),this},r.prototype.pre=function(e){return this._beforeMiddleware.push(e),this},r.prototype.use=function(e){return this._afterMiddleware.push(e),this},r.prototype.reset=function(){this.progress=0,this.loading=!1,this._queue.kill(),this._queue.pause();for(var e in this.resources){var t=this.resources[e];t._onLoadBinding&&t._onLoadBinding.detach(),t.isLoading&&t.abort("loader reset")}return this.resources={},this},r.prototype.load=function(e){if(Vt("6.5.0","@pixi/loaders is being replaced with @pixi/assets in the next major release."),typeof e=="function"&&this.onComplete.once(e),this.loading)return this;if(this._queue.idle())this._onStart(),this._onComplete();else{for(var t=this._queue._tasks.length,n=Gl/t,i=0;i<this._queue._tasks.length;++i)this._queue._tasks[i].data.progressChunk=n;this._onStart(),this._queue.resume()}return this},Object.defineProperty(r.prototype,"concurrency",{get:function(){return this._queue.concurrency},set:function(e){this._queue.concurrency=e},enumerable:!1,configurable:!0}),r.prototype._prepareUrl=function(e){var t=Zb(e,{strictMode:!0}),n;if(t.protocol||!t.path||e.indexOf("//")===0?n=e:this.baseUrl.length&&this.baseUrl.lastIndexOf("/")!==this.baseUrl.length-1&&e.charAt(0)!=="/"?n=this.baseUrl+"/"+e:n=this.baseUrl+e,this.defaultQueryString){var i=rM.exec(n)[0];n=n.slice(0,n.length-i.length),n.indexOf("?")!==-1?n+="&"+this.defaultQueryString:n+="?"+this.defaultQueryString,n+=i}return n},r.prototype._loadResource=function(e,t){var n=this;e._dequeue=t,Ul.eachSeries(this._beforeMiddleware,function(i,o){i.call(n,e,function(){o(e.isComplete?{}:null)})},function(){e.isComplete?n._onLoad(e):(e._onLoadBinding=e.onComplete.once(n._onLoad,n),e.load())},!0)},r.prototype._onStart=function(){this.progress=0,this.loading=!0,this.onStart.dispatch(this)},r.prototype._onComplete=function(){this.progress=Gl,this.loading=!1,this.onComplete.dispatch(this,this.resources)},r.prototype._onLoad=function(e){var t=this;e._onLoadBinding=null,this._resourcesParsing.push(e),e._dequeue(),Ul.eachSeries(this._afterMiddleware,function(n,i){n.call(t,e,i)},function(){e.onAfterMiddleware.dispatch(e),t.progress=Math.min(Gl,t.progress+e.progressChunk),t.onProgress.dispatch(t,e),e.error?t.onError.dispatch(e.error,t,e):t.onLoad.dispatch(t,e),t._resourcesParsing.splice(t._resourcesParsing.indexOf(e),1),t._queue.idle()&&t._resourcesParsing.length===0&&t._onComplete()},!0)},r.prototype.destroy=function(){this._protected||this.reset()},Object.defineProperty(r,"shared",{get:function(){var e=r._shared;return e||(e=new r,e._protected=!0,r._shared=e),e},enumerable:!1,configurable:!0}),r.registerPlugin=function(e){return Vt("6.5.0","Loader.registerPlugin() is deprecated, use extensions.add() instead."),Qt.add({type:rt.Loader,ref:e}),r},r._plugins=[],r}();Qt.handleByList(rt.Loader,ii._plugins);ii.prototype.add=function(e,t,n,i){if(Array.isArray(e)){for(var o=0;o<e.length;++o)this.add(e[o]);return this}if(typeof e=="object"&&(n=e,i=t||n.callback||n.onComplete,t=n.url,e=n.name||n.key||n.url),typeof t!="string"&&(i=n,n=t,t=e),typeof t!="string")throw new Error("No url passed to add resource to loader.");return typeof n=="function"&&(i=n,n=null),this._add(e,t,n,i)};var Jb=function(){function r(){}return r.init=function(e){e=Object.assign({sharedLoader:!1},e),this.loader=e.sharedLoader?ii.shared:new ii},r.destroy=function(){this.loader&&(this.loader.destroy(),this.loader=null)},r.extension=rt.Application,r}(),Qb=function(){function r(){}return r.add=function(){yt.setExtensionLoadType("svg",yt.LOAD_TYPE.XHR),yt.setExtensionXhrType("svg",yt.XHR_RESPONSE_TYPE.TEXT)},r.use=function(e,t){if(e.data&&(e.type===yt.TYPE.IMAGE||e.extension==="svg")){var n=e.data,i=e.url,o=e.name,a=e.metadata;G.fromLoader(n,i,o,a).then(function(s){e.texture=s,t()}).catch(t)}else t()},r.extension=rt.Loader,r}(),nM="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";function iM(r){for(var e="",t=0;t<r.length;){for(var n=[0,0,0],i=[0,0,0,0],o=0;o<n.length;++o)t<r.length?n[o]=r.charCodeAt(t++)&255:n[o]=0;i[0]=n[0]>>2,i[1]=(n[0]&3)<<4|n[1]>>4,i[2]=(n[1]&15)<<2|n[2]>>6,i[3]=n[2]&63;var a=t-(r.length-1);switch(a){case 2:i[3]=64,i[2]=64;break;case 1:i[3]=64;break}for(var o=0;o<i.length;++o)e+=nM.charAt(i[o])}return e}function oM(r,e){if(!r.data){e();return}if(r.xhr&&r.xhrType===yt.XHR_RESPONSE_TYPE.BLOB){if(!self.Blob||typeof r.data=="string"){var t=r.xhr.getResponseHeader("content-type");if(t&&t.indexOf("image")===0){r.data=new Image,r.data.src="data:"+t+";base64,"+iM(r.xhr.responseText),r.type=yt.TYPE.IMAGE,r.data.onload=function(){r.data.onload=null,e()};return}}else if(r.data.type.indexOf("image")===0){var n=globalThis.URL||globalThis.webkitURL,i=n.createObjectURL(r.data);r.blob=r.data,r.data=new Image,r.data.src=i,r.type=yt.TYPE.IMAGE,r.data.onload=function(){n.revokeObjectURL(i),r.data.onload=null,e()};return}}e()}var aM=function(){function r(){}return r.extension=rt.Loader,r.use=oM,r}();Qt.add(Qb,aM);/*!
 * @pixi/compressed-textures - v6.5.10
 * Compiled Thu, 06 Jul 2023 15:25:11 UTC
 *
 * @pixi/compressed-textures is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */var it,z;(function(r){r[r.COMPRESSED_RGB_S3TC_DXT1_EXT=33776]="COMPRESSED_RGB_S3TC_DXT1_EXT",r[r.COMPRESSED_RGBA_S3TC_DXT1_EXT=33777]="COMPRESSED_RGBA_S3TC_DXT1_EXT",r[r.COMPRESSED_RGBA_S3TC_DXT3_EXT=33778]="COMPRESSED_RGBA_S3TC_DXT3_EXT",r[r.COMPRESSED_RGBA_S3TC_DXT5_EXT=33779]="COMPRESSED_RGBA_S3TC_DXT5_EXT",r[r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT=35917]="COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT",r[r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT=35918]="COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT",r[r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT=35919]="COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT",r[r.COMPRESSED_SRGB_S3TC_DXT1_EXT=35916]="COMPRESSED_SRGB_S3TC_DXT1_EXT",r[r.COMPRESSED_R11_EAC=37488]="COMPRESSED_R11_EAC",r[r.COMPRESSED_SIGNED_R11_EAC=37489]="COMPRESSED_SIGNED_R11_EAC",r[r.COMPRESSED_RG11_EAC=37490]="COMPRESSED_RG11_EAC",r[r.COMPRESSED_SIGNED_RG11_EAC=37491]="COMPRESSED_SIGNED_RG11_EAC",r[r.COMPRESSED_RGB8_ETC2=37492]="COMPRESSED_RGB8_ETC2",r[r.COMPRESSED_RGBA8_ETC2_EAC=37496]="COMPRESSED_RGBA8_ETC2_EAC",r[r.COMPRESSED_SRGB8_ETC2=37493]="COMPRESSED_SRGB8_ETC2",r[r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC=37497]="COMPRESSED_SRGB8_ALPHA8_ETC2_EAC",r[r.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2=37494]="COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2",r[r.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2=37495]="COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2",r[r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG=35840]="COMPRESSED_RGB_PVRTC_4BPPV1_IMG",r[r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG=35842]="COMPRESSED_RGBA_PVRTC_4BPPV1_IMG",r[r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG=35841]="COMPRESSED_RGB_PVRTC_2BPPV1_IMG",r[r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG=35843]="COMPRESSED_RGBA_PVRTC_2BPPV1_IMG",r[r.COMPRESSED_RGB_ETC1_WEBGL=36196]="COMPRESSED_RGB_ETC1_WEBGL",r[r.COMPRESSED_RGB_ATC_WEBGL=35986]="COMPRESSED_RGB_ATC_WEBGL",r[r.COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL=35986]="COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL",r[r.COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL=34798]="COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL",r[r.COMPRESSED_RGBA_ASTC_4x4_KHR=37808]="COMPRESSED_RGBA_ASTC_4x4_KHR"})(z||(z={}));var go=(it={},it[z.COMPRESSED_RGB_S3TC_DXT1_EXT]=.5,it[z.COMPRESSED_RGBA_S3TC_DXT1_EXT]=.5,it[z.COMPRESSED_RGBA_S3TC_DXT3_EXT]=1,it[z.COMPRESSED_RGBA_S3TC_DXT5_EXT]=1,it[z.COMPRESSED_SRGB_S3TC_DXT1_EXT]=.5,it[z.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT]=.5,it[z.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT]=1,it[z.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT]=1,it[z.COMPRESSED_R11_EAC]=.5,it[z.COMPRESSED_SIGNED_R11_EAC]=.5,it[z.COMPRESSED_RG11_EAC]=1,it[z.COMPRESSED_SIGNED_RG11_EAC]=1,it[z.COMPRESSED_RGB8_ETC2]=.5,it[z.COMPRESSED_RGBA8_ETC2_EAC]=1,it[z.COMPRESSED_SRGB8_ETC2]=.5,it[z.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC]=1,it[z.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2]=.5,it[z.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2]=.5,it[z.COMPRESSED_RGB_PVRTC_4BPPV1_IMG]=.5,it[z.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG]=.5,it[z.COMPRESSED_RGB_PVRTC_2BPPV1_IMG]=.25,it[z.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG]=.25,it[z.COMPRESSED_RGB_ETC1_WEBGL]=.5,it[z.COMPRESSED_RGB_ATC_WEBGL]=.5,it[z.COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL]=1,it[z.COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL]=1,it[z.COMPRESSED_RGBA_ASTC_4x4_KHR]=1,it);/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Bh=function(r,e){return Bh=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)n.hasOwnProperty(i)&&(t[i]=n[i])},Bh(r,e)};function tx(r,e){Bh(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}function sM(r,e,t,n){function i(o){return o instanceof t?o:new t(function(a){a(o)})}return new(t||(t=Promise))(function(o,a){function s(f){try{l(n.next(f))}catch(c){a(c)}}function u(f){try{l(n.throw(f))}catch(c){a(c)}}function l(f){f.done?o(f.value):i(f.value).then(s,u)}l((n=n.apply(r,[])).next())})}function uM(r,e){var t={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},n,i,o,a;return a={next:s(0),throw:s(1),return:s(2)},typeof Symbol=="function"&&(a[Symbol.iterator]=function(){return this}),a;function s(l){return function(f){return u([l,f])}}function u(l){if(n)throw new TypeError("Generator is already executing.");for(;t;)try{if(n=1,i&&(o=l[0]&2?i.return:l[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,l[1])).done)return o;switch(i=0,o&&(l=[l[0]&2,o.value]),l[0]){case 0:case 1:o=l;break;case 4:return t.label++,{value:l[1],done:!1};case 5:t.label++,i=l[1],l=[0];continue;case 7:l=t.ops.pop(),t.trys.pop();continue;default:if(o=t.trys,!(o=o.length>0&&o[o.length-1])&&(l[0]===6||l[0]===2)){t=0;continue}if(l[0]===3&&(!o||l[1]>o[0]&&l[1]<o[3])){t.label=l[1];break}if(l[0]===6&&t.label<o[1]){t.label=o[1],o=l;break}if(o&&t.label<o[2]){t.label=o[2],t.ops.push(l);break}o[2]&&t.ops.pop(),t.trys.pop();continue}l=e.call(r,t)}catch(f){l=[6,f],i=0}finally{n=o=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}}var ex=function(r){tx(e,r);function e(t,n){n===void 0&&(n={width:1,height:1,autoLoad:!0});var i=this,o,a;return typeof t=="string"?(o=t,a=new Uint8Array):(o=null,a=t),i=r.call(this,a,n)||this,i.origin=o,i.buffer=a?new Ls(a):null,i.origin&&n.autoLoad!==!1&&i.load(),a&&a.length&&(i.loaded=!0,i.onBlobLoaded(i.buffer.rawBinaryData)),i}return e.prototype.onBlobLoaded=function(t){},e.prototype.load=function(){return sM(this,void 0,Promise,function(){var t,n,i;return uM(this,function(o){switch(o.label){case 0:return[4,fetch(this.origin)];case 1:return t=o.sent(),[4,t.blob()];case 2:return n=o.sent(),[4,n.arrayBuffer()];case 3:return i=o.sent(),this.data=new Uint32Array(i),this.buffer=new Ls(i),this.loaded=!0,this.onBlobLoaded(i),this.update(),[2,this]}})})},e}(dn),Bs=function(r){tx(e,r);function e(t,n){var i=r.call(this,t,n)||this;return i.format=n.format,i.levels=n.levels||1,i._width=n.width,i._height=n.height,i._extension=e._formatToExtension(i.format),(n.levelBuffers||i.buffer)&&(i._levelBuffers=n.levelBuffers||e._createLevelBuffers(t instanceof Uint8Array?t:i.buffer.uint8View,i.format,i.levels,4,4,i.width,i.height)),i}return e.prototype.upload=function(t,n,i){var o=t.gl,a=t.context.extensions[this._extension];if(!a)throw new Error(this._extension+" textures are not supported on the current machine");if(!this._levelBuffers)return!1;for(var s=0,u=this.levels;s<u;s++){var l=this._levelBuffers[s],f=l.levelID,c=l.levelWidth,h=l.levelHeight,d=l.levelBuffer;o.compressedTexImage2D(o.TEXTURE_2D,f,this.format,c,h,0,d)}return!0},e.prototype.onBlobLoaded=function(){this._levelBuffers=e._createLevelBuffers(this.buffer.uint8View,this.format,this.levels,4,4,this.width,this.height)},e._formatToExtension=function(t){if(t>=33776&&t<=33779)return"s3tc";if(t>=37488&&t<=37497)return"etc";if(t>=35840&&t<=35843)return"pvrtc";if(t>=36196)return"etc1";if(t>=35986&&t<=34798)return"atc";throw new Error("Invalid (compressed) texture format given!")},e._createLevelBuffers=function(t,n,i,o,a,s,u){for(var l=new Array(i),f=t.byteOffset,c=s,h=u,d=c+o-1&~(o-1),p=h+a-1&~(a-1),v=d*p*go[n],y=0;y<i;y++)l[y]={levelID:y,levelWidth:i>1?c:d,levelHeight:i>1?h:p,levelBuffer:new Uint8Array(t.buffer,f,v)},f+=v,c=c>>1||1,h=h>>1||1,d=c+o-1&~(o-1),p=h+a-1&~(a-1),v=d*p*go[n];return l},e}(ex),rx=function(){function r(){}return r.use=function(e,t){var n=e.data,i=this;if(e.type===yt.TYPE.JSON&&n&&n.cacheID&&n.textures){for(var o=n.textures,a=void 0,s=void 0,u=0,l=o.length;u<l;u++){var f=o[u],c=f.src,h=f.format;if(h||(s=c),r.textureFormats[h]){a=c;break}}if(a=a||s,!a){t(new Error("Cannot load compressed-textures in "+e.url+", make sure you provide a fallback"));return}if(a===e.url){t(new Error("URL of compressed texture cannot be the same as the manifest's URL"));return}var d={crossOrigin:e.crossOrigin,metadata:e.metadata.imageMetadata,parentResource:e},p=Vr.resolve(e.url.replace(i.baseUrl,""),a),v=n.cacheID;i.add(v,p,d,function(y){if(y.error){t(y.error);return}var m=y.texture,g=m===void 0?null:m,_=y.textures,x=_===void 0?{}:_;Object.assign(e,{texture:g,textures:x}),t()})}else t()},Object.defineProperty(r,"textureExtensions",{get:function(){if(!r._textureExtensions){var e=C.ADAPTER.createCanvas(),t=e.getContext("webgl");if(!t)return console.warn("WebGL not available for compressed textures. Silently failing."),{};var n={s3tc:t.getExtension("WEBGL_compressed_texture_s3tc"),s3tc_sRGB:t.getExtension("WEBGL_compressed_texture_s3tc_srgb"),etc:t.getExtension("WEBGL_compressed_texture_etc"),etc1:t.getExtension("WEBGL_compressed_texture_etc1"),pvrtc:t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"),atc:t.getExtension("WEBGL_compressed_texture_atc"),astc:t.getExtension("WEBGL_compressed_texture_astc")};r._textureExtensions=n}return r._textureExtensions},enumerable:!1,configurable:!0}),Object.defineProperty(r,"textureFormats",{get:function(){if(!r._textureFormats){var e=r.textureExtensions;r._textureFormats={};for(var t in e){var n=e[t];n&&Object.assign(r._textureFormats,Object.getPrototypeOf(n))}}return r._textureFormats},enumerable:!1,configurable:!0}),r.extension=rt.Loader,r}();function nx(r,e,t){var n={textures:{},texture:null};if(!e)return n;var i=e.map(function(o){return new G(new q(o,Object.assign({mipmap:te.OFF,alphaMode:pe.NO_PREMULTIPLIED_ALPHA},t)))});return i.forEach(function(o,a){var s=o.baseTexture,u=r+"-"+(a+1);q.addToCache(s,u),G.addToCache(o,u),a===0&&(q.addToCache(s,r),G.addToCache(o,r),n.texture=o),n.textures[u]=o}),n}var Ci,ge,jl=4,ba=124,lM=32,Ly=20,fM=542327876,xa={HEIGHT:3,WIDTH:4,MIPMAP_COUNT:7,PIXEL_FORMAT:19},hM={FOURCC:2},Ta={DXGI_FORMAT:0,RESOURCE_DIMENSION:1,MISC_FLAG:2,ARRAY_SIZE:3},xe;(function(r){r[r.DXGI_FORMAT_UNKNOWN=0]="DXGI_FORMAT_UNKNOWN",r[r.DXGI_FORMAT_R32G32B32A32_TYPELESS=1]="DXGI_FORMAT_R32G32B32A32_TYPELESS",r[r.DXGI_FORMAT_R32G32B32A32_FLOAT=2]="DXGI_FORMAT_R32G32B32A32_FLOAT",r[r.DXGI_FORMAT_R32G32B32A32_UINT=3]="DXGI_FORMAT_R32G32B32A32_UINT",r[r.DXGI_FORMAT_R32G32B32A32_SINT=4]="DXGI_FORMAT_R32G32B32A32_SINT",r[r.DXGI_FORMAT_R32G32B32_TYPELESS=5]="DXGI_FORMAT_R32G32B32_TYPELESS",r[r.DXGI_FORMAT_R32G32B32_FLOAT=6]="DXGI_FORMAT_R32G32B32_FLOAT",r[r.DXGI_FORMAT_R32G32B32_UINT=7]="DXGI_FORMAT_R32G32B32_UINT",r[r.DXGI_FORMAT_R32G32B32_SINT=8]="DXGI_FORMAT_R32G32B32_SINT",r[r.DXGI_FORMAT_R16G16B16A16_TYPELESS=9]="DXGI_FORMAT_R16G16B16A16_TYPELESS",r[r.DXGI_FORMAT_R16G16B16A16_FLOAT=10]="DXGI_FORMAT_R16G16B16A16_FLOAT",r[r.DXGI_FORMAT_R16G16B16A16_UNORM=11]="DXGI_FORMAT_R16G16B16A16_UNORM",r[r.DXGI_FORMAT_R16G16B16A16_UINT=12]="DXGI_FORMAT_R16G16B16A16_UINT",r[r.DXGI_FORMAT_R16G16B16A16_SNORM=13]="DXGI_FORMAT_R16G16B16A16_SNORM",r[r.DXGI_FORMAT_R16G16B16A16_SINT=14]="DXGI_FORMAT_R16G16B16A16_SINT",r[r.DXGI_FORMAT_R32G32_TYPELESS=15]="DXGI_FORMAT_R32G32_TYPELESS",r[r.DXGI_FORMAT_R32G32_FLOAT=16]="DXGI_FORMAT_R32G32_FLOAT",r[r.DXGI_FORMAT_R32G32_UINT=17]="DXGI_FORMAT_R32G32_UINT",r[r.DXGI_FORMAT_R32G32_SINT=18]="DXGI_FORMAT_R32G32_SINT",r[r.DXGI_FORMAT_R32G8X24_TYPELESS=19]="DXGI_FORMAT_R32G8X24_TYPELESS",r[r.DXGI_FORMAT_D32_FLOAT_S8X24_UINT=20]="DXGI_FORMAT_D32_FLOAT_S8X24_UINT",r[r.DXGI_FORMAT_R32_FLOAT_X8X24_TYPELESS=21]="DXGI_FORMAT_R32_FLOAT_X8X24_TYPELESS",r[r.DXGI_FORMAT_X32_TYPELESS_G8X24_UINT=22]="DXGI_FORMAT_X32_TYPELESS_G8X24_UINT",r[r.DXGI_FORMAT_R10G10B10A2_TYPELESS=23]="DXGI_FORMAT_R10G10B10A2_TYPELESS",r[r.DXGI_FORMAT_R10G10B10A2_UNORM=24]="DXGI_FORMAT_R10G10B10A2_UNORM",r[r.DXGI_FORMAT_R10G10B10A2_UINT=25]="DXGI_FORMAT_R10G10B10A2_UINT",r[r.DXGI_FORMAT_R11G11B10_FLOAT=26]="DXGI_FORMAT_R11G11B10_FLOAT",r[r.DXGI_FORMAT_R8G8B8A8_TYPELESS=27]="DXGI_FORMAT_R8G8B8A8_TYPELESS",r[r.DXGI_FORMAT_R8G8B8A8_UNORM=28]="DXGI_FORMAT_R8G8B8A8_UNORM",r[r.DXGI_FORMAT_R8G8B8A8_UNORM_SRGB=29]="DXGI_FORMAT_R8G8B8A8_UNORM_SRGB",r[r.DXGI_FORMAT_R8G8B8A8_UINT=30]="DXGI_FORMAT_R8G8B8A8_UINT",r[r.DXGI_FORMAT_R8G8B8A8_SNORM=31]="DXGI_FORMAT_R8G8B8A8_SNORM",r[r.DXGI_FORMAT_R8G8B8A8_SINT=32]="DXGI_FORMAT_R8G8B8A8_SINT",r[r.DXGI_FORMAT_R16G16_TYPELESS=33]="DXGI_FORMAT_R16G16_TYPELESS",r[r.DXGI_FORMAT_R16G16_FLOAT=34]="DXGI_FORMAT_R16G16_FLOAT",r[r.DXGI_FORMAT_R16G16_UNORM=35]="DXGI_FORMAT_R16G16_UNORM",r[r.DXGI_FORMAT_R16G16_UINT=36]="DXGI_FORMAT_R16G16_UINT",r[r.DXGI_FORMAT_R16G16_SNORM=37]="DXGI_FORMAT_R16G16_SNORM",r[r.DXGI_FORMAT_R16G16_SINT=38]="DXGI_FORMAT_R16G16_SINT",r[r.DXGI_FORMAT_R32_TYPELESS=39]="DXGI_FORMAT_R32_TYPELESS",r[r.DXGI_FORMAT_D32_FLOAT=40]="DXGI_FORMAT_D32_FLOAT",r[r.DXGI_FORMAT_R32_FLOAT=41]="DXGI_FORMAT_R32_FLOAT",r[r.DXGI_FORMAT_R32_UINT=42]="DXGI_FORMAT_R32_UINT",r[r.DXGI_FORMAT_R32_SINT=43]="DXGI_FORMAT_R32_SINT",r[r.DXGI_FORMAT_R24G8_TYPELESS=44]="DXGI_FORMAT_R24G8_TYPELESS",r[r.DXGI_FORMAT_D24_UNORM_S8_UINT=45]="DXGI_FORMAT_D24_UNORM_S8_UINT",r[r.DXGI_FORMAT_R24_UNORM_X8_TYPELESS=46]="DXGI_FORMAT_R24_UNORM_X8_TYPELESS",r[r.DXGI_FORMAT_X24_TYPELESS_G8_UINT=47]="DXGI_FORMAT_X24_TYPELESS_G8_UINT",r[r.DXGI_FORMAT_R8G8_TYPELESS=48]="DXGI_FORMAT_R8G8_TYPELESS",r[r.DXGI_FORMAT_R8G8_UNORM=49]="DXGI_FORMAT_R8G8_UNORM",r[r.DXGI_FORMAT_R8G8_UINT=50]="DXGI_FORMAT_R8G8_UINT",r[r.DXGI_FORMAT_R8G8_SNORM=51]="DXGI_FORMAT_R8G8_SNORM",r[r.DXGI_FORMAT_R8G8_SINT=52]="DXGI_FORMAT_R8G8_SINT",r[r.DXGI_FORMAT_R16_TYPELESS=53]="DXGI_FORMAT_R16_TYPELESS",r[r.DXGI_FORMAT_R16_FLOAT=54]="DXGI_FORMAT_R16_FLOAT",r[r.DXGI_FORMAT_D16_UNORM=55]="DXGI_FORMAT_D16_UNORM",r[r.DXGI_FORMAT_R16_UNORM=56]="DXGI_FORMAT_R16_UNORM",r[r.DXGI_FORMAT_R16_UINT=57]="DXGI_FORMAT_R16_UINT",r[r.DXGI_FORMAT_R16_SNORM=58]="DXGI_FORMAT_R16_SNORM",r[r.DXGI_FORMAT_R16_SINT=59]="DXGI_FORMAT_R16_SINT",r[r.DXGI_FORMAT_R8_TYPELESS=60]="DXGI_FORMAT_R8_TYPELESS",r[r.DXGI_FORMAT_R8_UNORM=61]="DXGI_FORMAT_R8_UNORM",r[r.DXGI_FORMAT_R8_UINT=62]="DXGI_FORMAT_R8_UINT",r[r.DXGI_FORMAT_R8_SNORM=63]="DXGI_FORMAT_R8_SNORM",r[r.DXGI_FORMAT_R8_SINT=64]="DXGI_FORMAT_R8_SINT",r[r.DXGI_FORMAT_A8_UNORM=65]="DXGI_FORMAT_A8_UNORM",r[r.DXGI_FORMAT_R1_UNORM=66]="DXGI_FORMAT_R1_UNORM",r[r.DXGI_FORMAT_R9G9B9E5_SHAREDEXP=67]="DXGI_FORMAT_R9G9B9E5_SHAREDEXP",r[r.DXGI_FORMAT_R8G8_B8G8_UNORM=68]="DXGI_FORMAT_R8G8_B8G8_UNORM",r[r.DXGI_FORMAT_G8R8_G8B8_UNORM=69]="DXGI_FORMAT_G8R8_G8B8_UNORM",r[r.DXGI_FORMAT_BC1_TYPELESS=70]="DXGI_FORMAT_BC1_TYPELESS",r[r.DXGI_FORMAT_BC1_UNORM=71]="DXGI_FORMAT_BC1_UNORM",r[r.DXGI_FORMAT_BC1_UNORM_SRGB=72]="DXGI_FORMAT_BC1_UNORM_SRGB",r[r.DXGI_FORMAT_BC2_TYPELESS=73]="DXGI_FORMAT_BC2_TYPELESS",r[r.DXGI_FORMAT_BC2_UNORM=74]="DXGI_FORMAT_BC2_UNORM",r[r.DXGI_FORMAT_BC2_UNORM_SRGB=75]="DXGI_FORMAT_BC2_UNORM_SRGB",r[r.DXGI_FORMAT_BC3_TYPELESS=76]="DXGI_FORMAT_BC3_TYPELESS",r[r.DXGI_FORMAT_BC3_UNORM=77]="DXGI_FORMAT_BC3_UNORM",r[r.DXGI_FORMAT_BC3_UNORM_SRGB=78]="DXGI_FORMAT_BC3_UNORM_SRGB",r[r.DXGI_FORMAT_BC4_TYPELESS=79]="DXGI_FORMAT_BC4_TYPELESS",r[r.DXGI_FORMAT_BC4_UNORM=80]="DXGI_FORMAT_BC4_UNORM",r[r.DXGI_FORMAT_BC4_SNORM=81]="DXGI_FORMAT_BC4_SNORM",r[r.DXGI_FORMAT_BC5_TYPELESS=82]="DXGI_FORMAT_BC5_TYPELESS",r[r.DXGI_FORMAT_BC5_UNORM=83]="DXGI_FORMAT_BC5_UNORM",r[r.DXGI_FORMAT_BC5_SNORM=84]="DXGI_FORMAT_BC5_SNORM",r[r.DXGI_FORMAT_B5G6R5_UNORM=85]="DXGI_FORMAT_B5G6R5_UNORM",r[r.DXGI_FORMAT_B5G5R5A1_UNORM=86]="DXGI_FORMAT_B5G5R5A1_UNORM",r[r.DXGI_FORMAT_B8G8R8A8_UNORM=87]="DXGI_FORMAT_B8G8R8A8_UNORM",r[r.DXGI_FORMAT_B8G8R8X8_UNORM=88]="DXGI_FORMAT_B8G8R8X8_UNORM",r[r.DXGI_FORMAT_R10G10B10_XR_BIAS_A2_UNORM=89]="DXGI_FORMAT_R10G10B10_XR_BIAS_A2_UNORM",r[r.DXGI_FORMAT_B8G8R8A8_TYPELESS=90]="DXGI_FORMAT_B8G8R8A8_TYPELESS",r[r.DXGI_FORMAT_B8G8R8A8_UNORM_SRGB=91]="DXGI_FORMAT_B8G8R8A8_UNORM_SRGB",r[r.DXGI_FORMAT_B8G8R8X8_TYPELESS=92]="DXGI_FORMAT_B8G8R8X8_TYPELESS",r[r.DXGI_FORMAT_B8G8R8X8_UNORM_SRGB=93]="DXGI_FORMAT_B8G8R8X8_UNORM_SRGB",r[r.DXGI_FORMAT_BC6H_TYPELESS=94]="DXGI_FORMAT_BC6H_TYPELESS",r[r.DXGI_FORMAT_BC6H_UF16=95]="DXGI_FORMAT_BC6H_UF16",r[r.DXGI_FORMAT_BC6H_SF16=96]="DXGI_FORMAT_BC6H_SF16",r[r.DXGI_FORMAT_BC7_TYPELESS=97]="DXGI_FORMAT_BC7_TYPELESS",r[r.DXGI_FORMAT_BC7_UNORM=98]="DXGI_FORMAT_BC7_UNORM",r[r.DXGI_FORMAT_BC7_UNORM_SRGB=99]="DXGI_FORMAT_BC7_UNORM_SRGB",r[r.DXGI_FORMAT_AYUV=100]="DXGI_FORMAT_AYUV",r[r.DXGI_FORMAT_Y410=101]="DXGI_FORMAT_Y410",r[r.DXGI_FORMAT_Y416=102]="DXGI_FORMAT_Y416",r[r.DXGI_FORMAT_NV12=103]="DXGI_FORMAT_NV12",r[r.DXGI_FORMAT_P010=104]="DXGI_FORMAT_P010",r[r.DXGI_FORMAT_P016=105]="DXGI_FORMAT_P016",r[r.DXGI_FORMAT_420_OPAQUE=106]="DXGI_FORMAT_420_OPAQUE",r[r.DXGI_FORMAT_YUY2=107]="DXGI_FORMAT_YUY2",r[r.DXGI_FORMAT_Y210=108]="DXGI_FORMAT_Y210",r[r.DXGI_FORMAT_Y216=109]="DXGI_FORMAT_Y216",r[r.DXGI_FORMAT_NV11=110]="DXGI_FORMAT_NV11",r[r.DXGI_FORMAT_AI44=111]="DXGI_FORMAT_AI44",r[r.DXGI_FORMAT_IA44=112]="DXGI_FORMAT_IA44",r[r.DXGI_FORMAT_P8=113]="DXGI_FORMAT_P8",r[r.DXGI_FORMAT_A8P8=114]="DXGI_FORMAT_A8P8",r[r.DXGI_FORMAT_B4G4R4A4_UNORM=115]="DXGI_FORMAT_B4G4R4A4_UNORM",r[r.DXGI_FORMAT_P208=116]="DXGI_FORMAT_P208",r[r.DXGI_FORMAT_V208=117]="DXGI_FORMAT_V208",r[r.DXGI_FORMAT_V408=118]="DXGI_FORMAT_V408",r[r.DXGI_FORMAT_SAMPLER_FEEDBACK_MIN_MIP_OPAQUE=119]="DXGI_FORMAT_SAMPLER_FEEDBACK_MIN_MIP_OPAQUE",r[r.DXGI_FORMAT_SAMPLER_FEEDBACK_MIP_REGION_USED_OPAQUE=120]="DXGI_FORMAT_SAMPLER_FEEDBACK_MIP_REGION_USED_OPAQUE",r[r.DXGI_FORMAT_FORCE_UINT=121]="DXGI_FORMAT_FORCE_UINT"})(xe||(xe={}));var Uh;(function(r){r[r.DDS_DIMENSION_TEXTURE1D=2]="DDS_DIMENSION_TEXTURE1D",r[r.DDS_DIMENSION_TEXTURE2D=3]="DDS_DIMENSION_TEXTURE2D",r[r.DDS_DIMENSION_TEXTURE3D=6]="DDS_DIMENSION_TEXTURE3D"})(Uh||(Uh={}));var cM=1,dM=2,pM=4,vM=64,yM=512,mM=131072,_M=827611204,gM=861165636,bM=894720068,xM=808540228,TM=4,SM=(Ci={},Ci[_M]=z.COMPRESSED_RGBA_S3TC_DXT1_EXT,Ci[gM]=z.COMPRESSED_RGBA_S3TC_DXT3_EXT,Ci[bM]=z.COMPRESSED_RGBA_S3TC_DXT5_EXT,Ci),EM=(ge={},ge[xe.DXGI_FORMAT_BC1_TYPELESS]=z.COMPRESSED_RGBA_S3TC_DXT1_EXT,ge[xe.DXGI_FORMAT_BC1_UNORM]=z.COMPRESSED_RGBA_S3TC_DXT1_EXT,ge[xe.DXGI_FORMAT_BC2_TYPELESS]=z.COMPRESSED_RGBA_S3TC_DXT3_EXT,ge[xe.DXGI_FORMAT_BC2_UNORM]=z.COMPRESSED_RGBA_S3TC_DXT3_EXT,ge[xe.DXGI_FORMAT_BC3_TYPELESS]=z.COMPRESSED_RGBA_S3TC_DXT5_EXT,ge[xe.DXGI_FORMAT_BC3_UNORM]=z.COMPRESSED_RGBA_S3TC_DXT5_EXT,ge[xe.DXGI_FORMAT_BC1_UNORM_SRGB]=z.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT,ge[xe.DXGI_FORMAT_BC2_UNORM_SRGB]=z.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT,ge[xe.DXGI_FORMAT_BC3_UNORM_SRGB]=z.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT,ge);function ix(r){var e=new Uint32Array(r),t=e[0];if(t!==fM)throw new Error("Invalid DDS file magic word");var n=new Uint32Array(r,0,ba/Uint32Array.BYTES_PER_ELEMENT),i=n[xa.HEIGHT],o=n[xa.WIDTH],a=n[xa.MIPMAP_COUNT],s=new Uint32Array(r,xa.PIXEL_FORMAT*Uint32Array.BYTES_PER_ELEMENT,lM/Uint32Array.BYTES_PER_ELEMENT),u=s[cM];if(u&pM){var l=s[hM.FOURCC];if(l!==xM){var f=SM[l],c=jl+ba,h=new Uint8Array(r,c),d=new Bs(h,{format:f,width:o,height:i,levels:a});return[d]}var p=jl+ba,v=new Uint32Array(e.buffer,p,Ly/Uint32Array.BYTES_PER_ELEMENT),y=v[Ta.DXGI_FORMAT],m=v[Ta.RESOURCE_DIMENSION],g=v[Ta.MISC_FLAG],_=v[Ta.ARRAY_SIZE],x=EM[y];if(x===void 0)throw new Error("DDSParser cannot parse texture data with DXGI format "+y);if(g===TM)throw new Error("DDSParser does not support cubemap textures");if(m===Uh.DDS_DIMENSION_TEXTURE3D)throw new Error("DDSParser does not supported 3D texture data");var b=new Array,T=jl+ba+Ly;if(_===1)b.push(new Uint8Array(r,T));else{for(var S=go[x],A=0,E=o,w=i,D=0;D<a;D++){var N=Math.max(1,E+3&-4),L=Math.max(1,w+3&-4),H=N*L*S;A+=H,E=E>>>1,w=w>>>1}for(var I=T,D=0;D<_;D++)b.push(new Uint8Array(r,I,A)),I+=A}return b.map(function(M){return new Bs(M,{format:x,width:o,height:i,levels:a})})}throw u&vM?new Error("DDSParser does not support uncompressed texture data."):u&yM?new Error("DDSParser does not supported YUV uncompressed texture data."):u&mM?new Error("DDSParser does not support single-channel (lumninance) texture data!"):u&dM?new Error("DDSParser does not support single-channel (alpha) texture data!"):new Error("DDSParser failed to load a texture file due to an unknown reason!")}var hr,Qe,Ri,By=[171,75,84,88,32,49,49,187,13,10,26,10],wM=67305985,be={ENDIANNESS:12,GL_TYPE:16,GL_FORMAT:24,GL_INTERNAL_FORMAT:28,PIXEL_WIDTH:36,PIXEL_HEIGHT:40,PIXEL_DEPTH:44,NUMBER_OF_ARRAY_ELEMENTS:48,NUMBER_OF_FACES:52,NUMBER_OF_MIPMAP_LEVELS:56,BYTES_OF_KEY_VALUE_DATA:60},Gh=64,jh=(hr={},hr[U.UNSIGNED_BYTE]=1,hr[U.UNSIGNED_SHORT]=2,hr[U.INT]=4,hr[U.UNSIGNED_INT]=4,hr[U.FLOAT]=4,hr[U.HALF_FLOAT]=8,hr),ox=(Qe={},Qe[P.RGBA]=4,Qe[P.RGB]=3,Qe[P.RG]=2,Qe[P.RED]=1,Qe[P.LUMINANCE]=1,Qe[P.LUMINANCE_ALPHA]=2,Qe[P.ALPHA]=1,Qe),ax=(Ri={},Ri[U.UNSIGNED_SHORT_4_4_4_4]=2,Ri[U.UNSIGNED_SHORT_5_5_5_1]=2,Ri[U.UNSIGNED_SHORT_5_6_5]=2,Ri);function sx(r,e,t){t===void 0&&(t=!1);var n=new DataView(e);if(!OM(r,n))return null;var i=n.getUint32(be.ENDIANNESS,!0)===wM,o=n.getUint32(be.GL_TYPE,i),a=n.getUint32(be.GL_FORMAT,i),s=n.getUint32(be.GL_INTERNAL_FORMAT,i),u=n.getUint32(be.PIXEL_WIDTH,i),l=n.getUint32(be.PIXEL_HEIGHT,i)||1,f=n.getUint32(be.PIXEL_DEPTH,i)||1,c=n.getUint32(be.NUMBER_OF_ARRAY_ELEMENTS,i)||1,h=n.getUint32(be.NUMBER_OF_FACES,i),d=n.getUint32(be.NUMBER_OF_MIPMAP_LEVELS,i),p=n.getUint32(be.BYTES_OF_KEY_VALUE_DATA,i);if(l===0||f!==1)throw new Error("Only 2D textures are supported");if(h!==1)throw new Error("CubeTextures are not supported by KTXLoader yet!");if(c!==1)throw new Error("WebGL does not support array textures");var v=4,y=4,m=u+3&-4,g=l+3&-4,_=new Array(c),x=u*l;o===0&&(x=m*g);var b;if(o!==0?jh[o]?b=jh[o]*ox[a]:b=ax[o]:b=go[s],b===void 0)throw new Error("Unable to resolve the pixel format stored in the *.ktx file!");for(var T=t?AM(n,p,i):null,S=x*b,A=S,E=u,w=l,D=m,N=g,L=Gh+p,H=0;H<d;H++){for(var I=n.getUint32(L,i),M=L+4,$=0;$<c;$++){var wt=_[$];wt||(wt=_[$]=new Array(d)),wt[H]={levelID:H,levelWidth:d>1||o!==0?E:D,levelHeight:d>1||o!==0?w:N,levelBuffer:new Uint8Array(e,M,A)},M+=A}L+=I+4,L=L%4!==0?L+4-L%4:L,E=E>>1||1,w=w>>1||1,D=E+v-1&-4,N=w+y-1&-4,A=D*N*b}return o!==0?{uncompressed:_.map(function(Y){var R=Y[0].levelBuffer,O=!1;return o===U.FLOAT?R=new Float32Array(Y[0].levelBuffer.buffer,Y[0].levelBuffer.byteOffset,Y[0].levelBuffer.byteLength/4):o===U.UNSIGNED_INT?(O=!0,R=new Uint32Array(Y[0].levelBuffer.buffer,Y[0].levelBuffer.byteOffset,Y[0].levelBuffer.byteLength/4)):o===U.INT&&(O=!0,R=new Int32Array(Y[0].levelBuffer.buffer,Y[0].levelBuffer.byteOffset,Y[0].levelBuffer.byteLength/4)),{resource:new dn(R,{width:Y[0].levelWidth,height:Y[0].levelHeight}),type:o,format:O?PM(a):a}}),kvData:T}:{compressed:_.map(function(Y){return new Bs(null,{format:s,width:u,height:l,levels:d,levelBuffers:Y})}),kvData:T}}function OM(r,e){for(var t=0;t<By.length;t++)if(e.getUint8(t)!==By[t])return console.error(r+" is not a valid *.ktx file!"),!1;return!0}function PM(r){switch(r){case P.RGBA:return P.RGBA_INTEGER;case P.RGB:return P.RGB_INTEGER;case P.RG:return P.RG_INTEGER;case P.RED:return P.RED_INTEGER;default:return r}}function AM(r,e,t){for(var n=new Map,i=0;i<e;){var o=r.getUint32(Gh+i,t),a=Gh+i+4,s=3-(o+3)%4;if(o===0||o>e-i){console.error("KTXLoader: keyAndValueByteSize out of bounds");break}for(var u=0;u<o&&r.getUint8(a+u)!==0;u++);if(u===-1){console.error("KTXLoader: Failed to find null byte terminating kvData key");break}var l=new TextDecoder().decode(new Uint8Array(r.buffer,a,u)),f=new DataView(r.buffer,a+u+1,o-u-1);n.set(l,f),i+=4+o+s}return n}yt.setExtensionXhrType("dds",yt.XHR_RESPONSE_TYPE.BUFFER);var ux=function(){function r(){}return r.use=function(e,t){if(e.extension==="dds"&&e.data)try{Object.assign(e,nx(e.name||e.url,ix(e.data),e.metadata))}catch(n){t(n);return}t()},r.extension=rt.Loader,r}();yt.setExtensionXhrType("ktx",yt.XHR_RESPONSE_TYPE.BUFFER);var lx=function(){function r(){}return r.use=function(e,t){if(e.extension==="ktx"&&e.data)try{var n=e.name||e.url,i=sx(n,e.data,this.loadKeyValueData),o=i.compressed,a=i.uncompressed,s=i.kvData;if(o){var u=nx(n,o,e.metadata);if(s&&u.textures)for(var l in u.textures)u.textures[l].baseTexture.ktxKeyValueData=s;Object.assign(e,u)}else if(a){var f={};a.forEach(function(c,h){var d=new G(new q(c.resource,{mipmap:te.OFF,alphaMode:pe.NO_PREMULTIPLIED_ALPHA,type:c.type,format:c.format})),p=n+"-"+(h+1);s&&(d.baseTexture.ktxKeyValueData=s),q.addToCache(d.baseTexture,p),G.addToCache(d,p),h===0&&(f[n]=d,q.addToCache(d.baseTexture,n),G.addToCache(d,n)),f[p]=d}),Object.assign(e,{textures:f})}}catch(c){t(c);return}t()},r.extension=rt.Loader,r.loadKeyValueData=!1,r}();/*!
 * @pixi/particle-container - v6.5.10
 * Compiled Thu, 06 Jul 2023 15:25:11 UTC
 *
 * @pixi/particle-container is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var kh=function(r,e){return kh=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)n.hasOwnProperty(i)&&(t[i]=n[i])},kh(r,e)};function fx(r,e){kh(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var CM=function(r){fx(e,r);function e(t,n,i,o){t===void 0&&(t=1500),i===void 0&&(i=16384),o===void 0&&(o=!1);var a=r.call(this)||this,s=16384;return i>s&&(i=s),a._properties=[!1,!0,!1,!1,!1],a._maxSize=t,a._batchSize=i,a._buffers=null,a._bufferUpdateIDs=[],a._updateID=0,a.interactiveChildren=!1,a.blendMode=B.NORMAL,a.autoResize=o,a.roundPixels=!0,a.baseTexture=null,a.setProperties(n),a._tint=0,a.tintRgb=new Float32Array(4),a.tint=16777215,a}return e.prototype.setProperties=function(t){t&&(this._properties[0]="vertices"in t||"scale"in t?!!t.vertices||!!t.scale:this._properties[0],this._properties[1]="position"in t?!!t.position:this._properties[1],this._properties[2]="rotation"in t?!!t.rotation:this._properties[2],this._properties[3]="uvs"in t?!!t.uvs:this._properties[3],this._properties[4]="tint"in t||"alpha"in t?!!t.tint||!!t.alpha:this._properties[4])},e.prototype.updateTransform=function(){this.displayObjectUpdateTransform()},Object.defineProperty(e.prototype,"tint",{get:function(){return this._tint},set:function(t){this._tint=t,Bt(t,this.tintRgb)},enumerable:!1,configurable:!0}),e.prototype.render=function(t){var n=this;!this.visible||this.worldAlpha<=0||!this.children.length||!this.renderable||(this.baseTexture||(this.baseTexture=this.children[0]._texture.baseTexture,this.baseTexture.valid||this.baseTexture.once("update",function(){return n.onChildrenChange(0)})),t.batch.setObjectRenderer(t.plugins.particle),t.plugins.particle.render(this))},e.prototype.onChildrenChange=function(t){for(var n=Math.floor(t/this._batchSize);this._bufferUpdateIDs.length<n;)this._bufferUpdateIDs.push(0);this._bufferUpdateIDs[n]=++this._updateID},e.prototype.dispose=function(){if(this._buffers){for(var t=0;t<this._buffers.length;++t)this._buffers[t].destroy();this._buffers=null}},e.prototype.destroy=function(t){r.prototype.destroy.call(this,t),this.dispose(),this._properties=null,this._buffers=null,this._bufferUpdateIDs=null},e}($t),Uy=function(){function r(e,t,n){this.geometry=new _i,this.indexBuffer=null,this.size=n,this.dynamicProperties=[],this.staticProperties=[];for(var i=0;i<e.length;++i){var o=e[i];o={attributeName:o.attributeName,size:o.size,uploadFunction:o.uploadFunction,type:o.type||U.FLOAT,offset:o.offset},t[i]?this.dynamicProperties.push(o):this.staticProperties.push(o)}this.staticStride=0,this.staticBuffer=null,this.staticData=null,this.staticDataUint32=null,this.dynamicStride=0,this.dynamicBuffer=null,this.dynamicData=null,this.dynamicDataUint32=null,this._updateID=0,this.initBuffers()}return r.prototype.initBuffers=function(){var e=this.geometry,t=0;this.indexBuffer=new Ot(ab(this.size),!0,!0),e.addIndex(this.indexBuffer),this.dynamicStride=0;for(var n=0;n<this.dynamicProperties.length;++n){var i=this.dynamicProperties[n];i.offset=t,t+=i.size,this.dynamicStride+=i.size}var o=new ArrayBuffer(this.size*this.dynamicStride*4*4);this.dynamicData=new Float32Array(o),this.dynamicDataUint32=new Uint32Array(o),this.dynamicBuffer=new Ot(this.dynamicData,!1,!1);var a=0;this.staticStride=0;for(var n=0;n<this.staticProperties.length;++n){var i=this.staticProperties[n];i.offset=a,a+=i.size,this.staticStride+=i.size}var s=new ArrayBuffer(this.size*this.staticStride*4*4);this.staticData=new Float32Array(s),this.staticDataUint32=new Uint32Array(s),this.staticBuffer=new Ot(this.staticData,!0,!1);for(var n=0;n<this.dynamicProperties.length;++n){var i=this.dynamicProperties[n];e.addAttribute(i.attributeName,this.dynamicBuffer,0,i.type===U.UNSIGNED_BYTE,i.type,this.dynamicStride*4,i.offset*4)}for(var n=0;n<this.staticProperties.length;++n){var i=this.staticProperties[n];e.addAttribute(i.attributeName,this.staticBuffer,0,i.type===U.UNSIGNED_BYTE,i.type,this.staticStride*4,i.offset*4)}},r.prototype.uploadDynamic=function(e,t,n){for(var i=0;i<this.dynamicProperties.length;i++){var o=this.dynamicProperties[i];o.uploadFunction(e,t,n,o.type===U.UNSIGNED_BYTE?this.dynamicDataUint32:this.dynamicData,this.dynamicStride,o.offset)}this.dynamicBuffer._updateID++},r.prototype.uploadStatic=function(e,t,n){for(var i=0;i<this.staticProperties.length;i++){var o=this.staticProperties[i];o.uploadFunction(e,t,n,o.type===U.UNSIGNED_BYTE?this.staticDataUint32:this.staticData,this.staticStride,o.offset)}this.staticBuffer._updateID++},r.prototype.destroy=function(){this.indexBuffer=null,this.dynamicProperties=null,this.dynamicBuffer=null,this.dynamicData=null,this.dynamicDataUint32=null,this.staticProperties=null,this.staticBuffer=null,this.staticData=null,this.staticDataUint32=null,this.geometry.destroy()},r}(),RM=`varying vec2 vTextureCoord;
varying vec4 vColor;

uniform sampler2D uSampler;

void main(void){
    vec4 color = texture2D(uSampler, vTextureCoord) * vColor;
    gl_FragColor = color;
}`,IM=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;
attribute vec4 aColor;

attribute vec2 aPositionCoord;
attribute float aRotation;

uniform mat3 translationMatrix;
uniform vec4 uColor;

varying vec2 vTextureCoord;
varying vec4 vColor;

void main(void){
    float x = (aVertexPosition.x) * cos(aRotation) - (aVertexPosition.y) * sin(aRotation);
    float y = (aVertexPosition.x) * sin(aRotation) + (aVertexPosition.y) * cos(aRotation);

    vec2 v = vec2(x, y);
    v = v + aPositionCoord;

    gl_Position = vec4((translationMatrix * vec3(v, 1.0)).xy, 0.0, 1.0);

    vTextureCoord = aTextureCoord;
    vColor = aColor * uColor;
}
`,hx=function(r){fx(e,r);function e(t){var n=r.call(this,t)||this;return n.shader=null,n.properties=null,n.tempMatrix=new Pt,n.properties=[{attributeName:"aVertexPosition",size:2,uploadFunction:n.uploadVertices,offset:0},{attributeName:"aPositionCoord",size:2,uploadFunction:n.uploadPosition,offset:0},{attributeName:"aRotation",size:1,uploadFunction:n.uploadRotation,offset:0},{attributeName:"aTextureCoord",size:2,uploadFunction:n.uploadUvs,offset:0},{attributeName:"aColor",size:1,type:U.UNSIGNED_BYTE,uploadFunction:n.uploadTint,offset:0}],n.shader=Xe.from(IM,RM,{}),n.state=Ir.for2d(),n}return e.prototype.render=function(t){var n=t.children,i=t._maxSize,o=t._batchSize,a=this.renderer,s=n.length;if(s!==0){s>i&&!t.autoResize&&(s=i);var u=t._buffers;u||(u=t._buffers=this.generateBuffers(t));var l=n[0]._texture.baseTexture,f=l.alphaMode>0;this.state.blendMode=Xd(t.blendMode,f),a.state.set(this.state);var c=a.gl,h=t.worldTransform.copyTo(this.tempMatrix);h.prepend(a.globalUniforms.uniforms.projectionMatrix),this.shader.uniforms.translationMatrix=h.toArray(!0),this.shader.uniforms.uColor=ob(t.tintRgb,t.worldAlpha,this.shader.uniforms.uColor,f),this.shader.uniforms.uSampler=l,this.renderer.shader.bind(this.shader);for(var d=!1,p=0,v=0;p<s;p+=o,v+=1){var y=s-p;y>o&&(y=o),v>=u.length&&u.push(this._generateOneMoreBuffer(t));var m=u[v];m.uploadDynamic(n,p,y);var g=t._bufferUpdateIDs[v]||0;d=d||m._updateID<g,d&&(m._updateID=t._updateID,m.uploadStatic(n,p,y)),a.geometry.bind(m.geometry),c.drawElements(c.TRIANGLES,y*6,c.UNSIGNED_SHORT,0)}}},e.prototype.generateBuffers=function(t){for(var n=[],i=t._maxSize,o=t._batchSize,a=t._properties,s=0;s<i;s+=o)n.push(new Uy(this.properties,a,o));return n},e.prototype._generateOneMoreBuffer=function(t){var n=t._batchSize,i=t._properties;return new Uy(this.properties,i,n)},e.prototype.uploadVertices=function(t,n,i,o,a,s){for(var u=0,l=0,f=0,c=0,h=0;h<i;++h){var d=t[n+h],p=d._texture,v=d.scale.x,y=d.scale.y,m=p.trim,g=p.orig;m?(l=m.x-d.anchor.x*g.width,u=l+m.width,c=m.y-d.anchor.y*g.height,f=c+m.height):(u=g.width*(1-d.anchor.x),l=g.width*-d.anchor.x,f=g.height*(1-d.anchor.y),c=g.height*-d.anchor.y),o[s]=l*v,o[s+1]=c*y,o[s+a]=u*v,o[s+a+1]=c*y,o[s+a*2]=u*v,o[s+a*2+1]=f*y,o[s+a*3]=l*v,o[s+a*3+1]=f*y,s+=a*4}},e.prototype.uploadPosition=function(t,n,i,o,a,s){for(var u=0;u<i;u++){var l=t[n+u].position;o[s]=l.x,o[s+1]=l.y,o[s+a]=l.x,o[s+a+1]=l.y,o[s+a*2]=l.x,o[s+a*2+1]=l.y,o[s+a*3]=l.x,o[s+a*3+1]=l.y,s+=a*4}},e.prototype.uploadRotation=function(t,n,i,o,a,s){for(var u=0;u<i;u++){var l=t[n+u].rotation;o[s]=l,o[s+a]=l,o[s+a*2]=l,o[s+a*3]=l,s+=a*4}},e.prototype.uploadUvs=function(t,n,i,o,a,s){for(var u=0;u<i;++u){var l=t[n+u]._texture._uvs;l?(o[s]=l.x0,o[s+1]=l.y0,o[s+a]=l.x1,o[s+a+1]=l.y1,o[s+a*2]=l.x2,o[s+a*2+1]=l.y2,o[s+a*3]=l.x3,o[s+a*3+1]=l.y3,s+=a*4):(o[s]=0,o[s+1]=0,o[s+a]=0,o[s+a+1]=0,o[s+a*2]=0,o[s+a*2+1]=0,o[s+a*3]=0,o[s+a*3+1]=0,s+=a*4)}},e.prototype.uploadTint=function(t,n,i,o,a,s){for(var u=0;u<i;++u){var l=t[n+u],f=l._texture.baseTexture.alphaMode>0,c=l.alpha,h=c<1&&f?du(l._tintRGB,c):l._tintRGB+(c*255<<24);o[s]=h,o[s+a]=h,o[s+a*2]=h,o[s+a*3]=h,s+=a*4}},e.prototype.destroy=function(){r.prototype.destroy.call(this),this.shader&&(this.shader.destroy(),this.shader=null),this.tempMatrix=null},e.extension={name:"particle",type:rt.RendererPlugin},e}(No);/*!
 * @pixi/graphics - v6.5.10
 * Compiled Thu, 06 Jul 2023 15:25:11 UTC
 *
 * @pixi/graphics is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */var Ge;(function(r){r.MITER="miter",r.BEVEL="bevel",r.ROUND="round"})(Ge||(Ge={}));var ar;(function(r){r.BUTT="butt",r.ROUND="round",r.SQUARE="square"})(ar||(ar={}));var oi={adaptive:!0,maxLength:10,minSegments:8,maxSegments:2048,epsilon:1e-4,_segmentsCount:function(r,e){if(e===void 0&&(e=20),!this.adaptive||!r||isNaN(r))return e;var t=Math.ceil(r/this.maxLength);return t<this.minSegments?t=this.minSegments:t>this.maxSegments&&(t=this.maxSegments),t}},Sp=function(){function r(){this.color=16777215,this.alpha=1,this.texture=G.WHITE,this.matrix=null,this.visible=!1,this.reset()}return r.prototype.clone=function(){var e=new r;return e.color=this.color,e.alpha=this.alpha,e.texture=this.texture,e.matrix=this.matrix,e.visible=this.visible,e},r.prototype.reset=function(){this.color=16777215,this.alpha=1,this.texture=G.WHITE,this.matrix=null,this.visible=!1},r.prototype.destroy=function(){this.texture=null,this.matrix=null},r}();/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var $h=function(r,e){return $h=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)n.hasOwnProperty(i)&&(t[i]=n[i])},$h(r,e)};function Ep(r,e){$h(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}function Gy(r,e){var t,n;e===void 0&&(e=!1);var i=r.length;if(!(i<6)){for(var o=0,a=0,s=r[i-2],u=r[i-1];a<i;a+=2){var l=r[a],f=r[a+1];o+=(l-s)*(f+u),s=l,u=f}if(!e&&o>0||e&&o<=0)for(var c=i/2,a=c+c%2;a<i;a+=2){var h=i-a-2,d=i-a-1,p=a,v=a+1;t=[r[p],r[h]],r[h]=t[0],r[p]=t[1],n=[r[v],r[d]],r[d]=n[0],r[v]=n[1]}}}var wp={build:function(r){r.points=r.shape.points.slice()},triangulate:function(r,e){var t=r.points,n=r.holes,i=e.points,o=e.indices;if(t.length>=6){Gy(t,!1);for(var a=[],s=0;s<n.length;s++){var u=n[s];Gy(u.points,!0),a.push(t.length/2),t=t.concat(u.points)}var l=Nd(t,a,2);if(!l)return;for(var f=i.length/2,s=0;s<l.length;s+=3)o.push(l[s]+f),o.push(l[s+1]+f),o.push(l[s+2]+f);for(var s=0;s<t.length;s++)i.push(t[s])}}},bo={build:function(r){var e=r.points,t,n,i,o,a,s;if(r.type===Rt.CIRC){var u=r.shape;t=u.x,n=u.y,a=s=u.radius,i=o=0}else if(r.type===Rt.ELIP){var l=r.shape;t=l.x,n=l.y,a=l.width,s=l.height,i=o=0}else{var f=r.shape,c=f.width/2,h=f.height/2;t=f.x+c,n=f.y+h,a=s=Math.max(0,Math.min(f.radius,Math.min(c,h))),i=c-a,o=h-s}if(!(a>=0&&s>=0&&i>=0&&o>=0)){e.length=0;return}var d=Math.ceil(2.3*Math.sqrt(a+s)),p=d*8+(i?4:0)+(o?4:0);if(e.length=p,p!==0){if(d===0){e.length=8,e[0]=e[6]=t+i,e[1]=e[3]=n+o,e[2]=e[4]=t-i,e[5]=e[7]=n-o;return}var v=0,y=d*4+(i?2:0)+2,m=y,g=p;{var _=i+a,x=o,b=t+_,T=t-_,S=n+x;if(e[v++]=b,e[v++]=S,e[--y]=S,e[--y]=T,o){var A=n-x;e[m++]=T,e[m++]=A,e[--g]=A,e[--g]=b}}for(var E=1;E<d;E++){var w=Math.PI/2*(E/d),_=i+Math.cos(w)*a,x=o+Math.sin(w)*s,b=t+_,T=t-_,S=n+x,A=n-x;e[v++]=b,e[v++]=S,e[--y]=S,e[--y]=T,e[m++]=T,e[m++]=A,e[--g]=A,e[--g]=b}{var _=i,x=o+s,b=t+_,T=t-_,S=n+x,A=n-x;e[v++]=b,e[v++]=S,e[--g]=A,e[--g]=b,i&&(e[v++]=T,e[v++]=S,e[--g]=A,e[--g]=T)}}},triangulate:function(r,e){var t=r.points,n=e.points,i=e.indices;if(t.length!==0){var o=n.length/2,a=o,s,u;if(r.type!==Rt.RREC){var l=r.shape;s=l.x,u=l.y}else{var f=r.shape;s=f.x+f.width/2,u=f.y+f.height/2}var c=r.matrix;n.push(r.matrix?c.a*s+c.c*u+c.tx:s,r.matrix?c.b*s+c.d*u+c.ty:u),o++,n.push(t[0],t[1]);for(var h=2;h<t.length;h+=2)n.push(t[h],t[h+1]),i.push(o++,a,o);i.push(a+1,a,o)}}},cx={build:function(r){var e=r.shape,t=e.x,n=e.y,i=e.width,o=e.height,a=r.points;a.length=0,a.push(t,n,t+i,n,t+i,n+o,t,n+o)},triangulate:function(r,e){var t=r.points,n=e.points,i=n.length/2;n.push(t[0],t[1],t[2],t[3],t[6],t[7],t[4],t[5]),e.indices.push(i,i+1,i+2,i+1,i+2,i+3)}};function Pn(r,e,t){var n=e-r;return r+n*t}function Sa(r,e,t,n,i,o,a){a===void 0&&(a=[]);for(var s=20,u=a,l=0,f=0,c=0,h=0,d=0,p=0,v=0,y=0;v<=s;++v)y=v/s,l=Pn(r,t,y),f=Pn(e,n,y),c=Pn(t,i,y),h=Pn(n,o,y),d=Pn(l,c,y),p=Pn(f,h,y),!(v===0&&u[u.length-2]===d&&u[u.length-1]===p)&&u.push(d,p);return u}var dx={build:function(r){if(ai.nextRoundedRectBehavior){bo.build(r);return}var e=r.shape,t=r.points,n=e.x,i=e.y,o=e.width,a=e.height,s=Math.max(0,Math.min(e.radius,Math.min(o,a)/2));t.length=0,s?(Sa(n,i+s,n,i,n+s,i,t),Sa(n+o-s,i,n+o,i,n+o,i+s,t),Sa(n+o,i+a-s,n+o,i+a,n+o-s,i+a,t),Sa(n+s,i+a,n,i+a,n,i+a-s,t)):t.push(n,i,n+o,i,n+o,i+a,n,i+a)},triangulate:function(r,e){if(ai.nextRoundedRectBehavior){bo.triangulate(r,e);return}for(var t=r.points,n=e.points,i=e.indices,o=n.length/2,a=Nd(t,null,2),s=0,u=a.length;s<u;s+=3)i.push(a[s]+o),i.push(a[s+1]+o),i.push(a[s+2]+o);for(var s=0,u=t.length;s<u;s++)n.push(t[s],t[++s])}};function jy(r,e,t,n,i,o,a,s){var u=r-t*i,l=e-n*i,f=r+t*o,c=e+n*o,h,d;a?(h=n,d=-t):(h=-n,d=t);var p=u+h,v=l+d,y=f+h,m=c+d;return s.push(p,v),s.push(y,m),2}function Ur(r,e,t,n,i,o,a,s){var u=t-r,l=n-e,f=Math.atan2(u,l),c=Math.atan2(i-r,o-e);s&&f<c?f+=Math.PI*2:!s&&f>c&&(c+=Math.PI*2);var h=f,d=c-f,p=Math.abs(d),v=Math.sqrt(u*u+l*l),y=(15*p*Math.sqrt(v)/Math.PI>>0)+1,m=d/y;if(h+=m,s){a.push(r,e),a.push(t,n);for(var g=1,_=h;g<y;g++,_+=m)a.push(r,e),a.push(r+Math.sin(_)*v,e+Math.cos(_)*v);a.push(r,e),a.push(i,o)}else{a.push(t,n),a.push(r,e);for(var g=1,_=h;g<y;g++,_+=m)a.push(r+Math.sin(_)*v,e+Math.cos(_)*v),a.push(r,e);a.push(i,o),a.push(r,e)}return y*2}function MM(r,e){var t=r.shape,n=r.points||t.points.slice(),i=e.closePointEps;if(n.length!==0){var o=r.lineStyle,a=new X(n[0],n[1]),s=new X(n[n.length-2],n[n.length-1]),u=t.type!==Rt.POLY||t.closeStroke,l=Math.abs(a.x-s.x)<i&&Math.abs(a.y-s.y)<i;if(u){n=n.slice(),l&&(n.pop(),n.pop(),s.set(n[n.length-2],n[n.length-1]));var f=(a.x+s.x)*.5,c=(s.y+a.y)*.5;n.unshift(f,c),n.push(f,c)}var h=e.points,d=n.length/2,p=n.length,v=h.length/2,y=o.width/2,m=y*y,g=o.miterLimit*o.miterLimit,_=n[0],x=n[1],b=n[2],T=n[3],S=0,A=0,E=-(x-T),w=_-b,D=0,N=0,L=Math.sqrt(E*E+w*w);E/=L,w/=L,E*=y,w*=y;var H=o.alignment,I=(1-H)*2,M=H*2;u||(o.cap===ar.ROUND?p+=Ur(_-E*(I-M)*.5,x-w*(I-M)*.5,_-E*I,x-w*I,_+E*M,x+w*M,h,!0)+2:o.cap===ar.SQUARE&&(p+=jy(_,x,E,w,I,M,!0,h))),h.push(_-E*I,x-w*I),h.push(_+E*M,x+w*M);for(var $=1;$<d-1;++$){_=n[($-1)*2],x=n[($-1)*2+1],b=n[$*2],T=n[$*2+1],S=n[($+1)*2],A=n[($+1)*2+1],E=-(x-T),w=_-b,L=Math.sqrt(E*E+w*w),E/=L,w/=L,E*=y,w*=y,D=-(T-A),N=b-S,L=Math.sqrt(D*D+N*N),D/=L,N/=L,D*=y,N*=y;var wt=b-_,Y=x-T,R=b-S,O=A-T,V=wt*R+Y*O,J=Y*R-O*wt,et=J<0;if(Math.abs(J)<.001*Math.abs(V)){h.push(b-E*I,T-w*I),h.push(b+E*M,T+w*M),V>=0&&(o.join===Ge.ROUND?p+=Ur(b,T,b-E*I,T-w*I,b-D*I,T-N*I,h,!1)+4:p+=2,h.push(b-D*M,T-N*M),h.push(b+D*I,T+N*I));continue}var bt=(-E+_)*(-w+T)-(-E+b)*(-w+x),ft=(-D+S)*(-N+T)-(-D+b)*(-N+A),ht=(wt*ft-R*bt)/J,Dt=(O*bt-Y*ft)/J,Gt=(ht-b)*(ht-b)+(Dt-T)*(Dt-T),xt=b+(ht-b)*I,ot=T+(Dt-T)*I,ut=b-(ht-b)*M,ct=T-(Dt-T)*M,Z=Math.min(wt*wt+Y*Y,R*R+O*O),zt=et?I:M,Yt=Z+zt*zt*m,nt=Gt<=Yt;nt?o.join===Ge.BEVEL||Gt/m>g?(et?(h.push(xt,ot),h.push(b+E*M,T+w*M),h.push(xt,ot),h.push(b+D*M,T+N*M)):(h.push(b-E*I,T-w*I),h.push(ut,ct),h.push(b-D*I,T-N*I),h.push(ut,ct)),p+=2):o.join===Ge.ROUND?et?(h.push(xt,ot),h.push(b+E*M,T+w*M),p+=Ur(b,T,b+E*M,T+w*M,b+D*M,T+N*M,h,!0)+4,h.push(xt,ot),h.push(b+D*M,T+N*M)):(h.push(b-E*I,T-w*I),h.push(ut,ct),p+=Ur(b,T,b-E*I,T-w*I,b-D*I,T-N*I,h,!1)+4,h.push(b-D*I,T-N*I),h.push(ut,ct)):(h.push(xt,ot),h.push(ut,ct)):(h.push(b-E*I,T-w*I),h.push(b+E*M,T+w*M),o.join===Ge.ROUND?et?p+=Ur(b,T,b+E*M,T+w*M,b+D*M,T+N*M,h,!0)+2:p+=Ur(b,T,b-E*I,T-w*I,b-D*I,T-N*I,h,!1)+2:o.join===Ge.MITER&&Gt/m<=g&&(et?(h.push(ut,ct),h.push(ut,ct)):(h.push(xt,ot),h.push(xt,ot)),p+=2),h.push(b-D*I,T-N*I),h.push(b+D*M,T+N*M),p+=2)}_=n[(d-2)*2],x=n[(d-2)*2+1],b=n[(d-1)*2],T=n[(d-1)*2+1],E=-(x-T),w=_-b,L=Math.sqrt(E*E+w*w),E/=L,w/=L,E*=y,w*=y,h.push(b-E*I,T-w*I),h.push(b+E*M,T+w*M),u||(o.cap===ar.ROUND?p+=Ur(b-E*(I-M)*.5,T-w*(I-M)*.5,b-E*I,T-w*I,b+E*M,T+w*M,h,!1)+2:o.cap===ar.SQUARE&&(p+=jy(b,T,E,w,I,M,!1,h)));for(var Me=e.indices,Tn=oi.epsilon*oi.epsilon,$=v;$<p+v-2;++$)_=h[$*2],x=h[$*2+1],b=h[($+1)*2],T=h[($+1)*2+1],S=h[($+2)*2],A=h[($+2)*2+1],!(Math.abs(_*(T-A)+b*(A-x)+S*(x-T))<Tn)&&Me.push($,$+1,$+2)}}function DM(r,e){var t=0,n=r.shape,i=r.points||n.points,o=n.type!==Rt.POLY||n.closeStroke;if(i.length!==0){var a=e.points,s=e.indices,u=i.length/2,l=a.length/2,f=l;for(a.push(i[0],i[1]),t=1;t<u;t++)a.push(i[t*2],i[t*2+1]),s.push(f,f+1),f++;o&&s.push(f,l)}}function zh(r,e){r.lineStyle.native?DM(r,e):MM(r,e)}var Hh=function(){function r(){}return r.curveTo=function(e,t,n,i,o,a){var s=a[a.length-2],u=a[a.length-1],l=u-t,f=s-e,c=i-t,h=n-e,d=Math.abs(l*h-f*c);if(d<1e-8||o===0)return(a[a.length-2]!==e||a[a.length-1]!==t)&&a.push(e,t),null;var p=l*l+f*f,v=c*c+h*h,y=l*c+f*h,m=o*Math.sqrt(p)/d,g=o*Math.sqrt(v)/d,_=m*y/p,x=g*y/v,b=m*h+g*f,T=m*c+g*l,S=f*(g+_),A=l*(g+_),E=h*(m+x),w=c*(m+x),D=Math.atan2(A-T,S-b),N=Math.atan2(w-T,E-b);return{cx:b+e,cy:T+t,radius:o,startAngle:D,endAngle:N,anticlockwise:f*c>h*l}},r.arc=function(e,t,n,i,o,a,s,u,l){for(var f=s-a,c=oi._segmentsCount(Math.abs(f)*o,Math.ceil(Math.abs(f)/Kt)*40),h=f/(c*2),d=h*2,p=Math.cos(h),v=Math.sin(h),y=c-1,m=y%1/y,g=0;g<=y;++g){var _=g+m*g,x=h+a+d*_,b=Math.cos(x),T=-Math.sin(x);l.push((p*b+v*T)*o+n,(p*-T+v*b)*o+i)}},r}(),px=function(){function r(){}return r.curveLength=function(e,t,n,i,o,a,s,u){for(var l=10,f=0,c=0,h=0,d=0,p=0,v=0,y=0,m=0,g=0,_=0,x=0,b=e,T=t,S=1;S<=l;++S)c=S/l,h=c*c,d=h*c,p=1-c,v=p*p,y=v*p,m=y*e+3*v*c*n+3*p*h*o+d*s,g=y*t+3*v*c*i+3*p*h*a+d*u,_=b-m,x=T-g,b=m,T=g,f+=Math.sqrt(_*_+x*x);return f},r.curveTo=function(e,t,n,i,o,a,s){var u=s[s.length-2],l=s[s.length-1];s.length-=2;var f=oi._segmentsCount(r.curveLength(u,l,e,t,n,i,o,a)),c=0,h=0,d=0,p=0,v=0;s.push(u,l);for(var y=1,m=0;y<=f;++y)m=y/f,c=1-m,h=c*c,d=h*c,p=m*m,v=p*m,s.push(d*u+3*h*m*e+3*c*p*n+v*o,d*l+3*h*m*t+3*c*p*i+v*a)},r}(),vx=function(){function r(){}return r.curveLength=function(e,t,n,i,o,a){var s=e-2*n+o,u=t-2*i+a,l=2*n-2*e,f=2*i-2*t,c=4*(s*s+u*u),h=4*(s*l+u*f),d=l*l+f*f,p=2*Math.sqrt(c+h+d),v=Math.sqrt(c),y=2*c*v,m=2*Math.sqrt(d),g=h/v;return(y*p+v*h*(p-m)+(4*d*c-h*h)*Math.log((2*v+g+p)/(g+m)))/(4*y)},r.curveTo=function(e,t,n,i,o){for(var a=o[o.length-2],s=o[o.length-1],u=oi._segmentsCount(r.curveLength(a,s,e,t,n,i)),l=0,f=0,c=1;c<=u;++c){var h=c/u;l=a+(e-a)*h,f=s+(t-s)*h,o.push(l+(e+(n-e)*h-l)*h,f+(t+(i-t)*h-f)*h)}},r}(),yx=function(){function r(){this.reset()}return r.prototype.begin=function(e,t,n){this.reset(),this.style=e,this.start=t,this.attribStart=n},r.prototype.end=function(e,t){this.attribSize=t-this.attribStart,this.size=e-this.start},r.prototype.reset=function(){this.style=null,this.size=0,this.start=0,this.attribStart=0,this.attribSize=0},r}(),Gr,as=(Gr={},Gr[Rt.POLY]=wp,Gr[Rt.CIRC]=bo,Gr[Rt.ELIP]=bo,Gr[Rt.RECT]=cx,Gr[Rt.RREC]=dx,Gr),Xh=[],ji=[],Vh=function(){function r(e,t,n,i){t===void 0&&(t=null),n===void 0&&(n=null),i===void 0&&(i=null),this.points=[],this.holes=[],this.shape=e,this.lineStyle=n,this.fillStyle=t,this.matrix=i,this.type=e.type}return r.prototype.clone=function(){return new r(this.shape,this.fillStyle,this.lineStyle,this.matrix)},r.prototype.destroy=function(){this.shape=null,this.holes.length=0,this.holes=null,this.points.length=0,this.points=null,this.lineStyle=null,this.fillStyle=null},r}(),An=new X,mx=function(r){Ep(e,r);function e(){var t=r.call(this)||this;return t.closePointEps=1e-4,t.boundsPadding=0,t.uvsFloat32=null,t.indicesUint16=null,t.batchable=!1,t.points=[],t.colors=[],t.uvs=[],t.indices=[],t.textureIds=[],t.graphicsData=[],t.drawCalls=[],t.batchDirty=-1,t.batches=[],t.dirty=0,t.cacheDirty=-1,t.clearDirty=0,t.shapeIndex=0,t._bounds=new mo,t.boundsDirty=-1,t}return Object.defineProperty(e.prototype,"bounds",{get:function(){return this.updateBatches(),this.boundsDirty!==this.dirty&&(this.boundsDirty=this.dirty,this.calculateBounds()),this._bounds},enumerable:!1,configurable:!0}),e.prototype.invalidate=function(){this.boundsDirty=-1,this.dirty++,this.batchDirty++,this.shapeIndex=0,this.points.length=0,this.colors.length=0,this.uvs.length=0,this.indices.length=0,this.textureIds.length=0;for(var t=0;t<this.drawCalls.length;t++)this.drawCalls[t].texArray.clear(),ji.push(this.drawCalls[t]);this.drawCalls.length=0;for(var t=0;t<this.batches.length;t++){var n=this.batches[t];n.reset(),Xh.push(n)}this.batches.length=0},e.prototype.clear=function(){return this.graphicsData.length>0&&(this.invalidate(),this.clearDirty++,this.graphicsData.length=0),this},e.prototype.drawShape=function(t,n,i,o){n===void 0&&(n=null),i===void 0&&(i=null),o===void 0&&(o=null);var a=new Vh(t,n,i,o);return this.graphicsData.push(a),this.dirty++,this},e.prototype.drawHole=function(t,n){if(n===void 0&&(n=null),!this.graphicsData.length)return null;var i=new Vh(t,null,null,n),o=this.graphicsData[this.graphicsData.length-1];return i.lineStyle=o.lineStyle,o.holes.push(i),this.dirty++,this},e.prototype.destroy=function(){r.prototype.destroy.call(this);for(var t=0;t<this.graphicsData.length;++t)this.graphicsData[t].destroy();this.points.length=0,this.points=null,this.colors.length=0,this.colors=null,this.uvs.length=0,this.uvs=null,this.indices.length=0,this.indices=null,this.indexBuffer.destroy(),this.indexBuffer=null,this.graphicsData.length=0,this.graphicsData=null,this.drawCalls.length=0,this.drawCalls=null,this.batches.length=0,this.batches=null,this._bounds=null},e.prototype.containsPoint=function(t){for(var n=this.graphicsData,i=0;i<n.length;++i){var o=n[i];if(o.fillStyle.visible&&o.shape&&(o.matrix?o.matrix.applyInverse(t,An):An.copyFrom(t),o.shape.contains(An.x,An.y))){var a=!1;if(o.holes)for(var s=0;s<o.holes.length;s++){var u=o.holes[s];if(u.shape.contains(An.x,An.y)){a=!0;break}}if(!a)return!0}}return!1},e.prototype.updateBatches=function(){if(!this.graphicsData.length){this.batchable=!0;return}if(this.validateBatching()){this.cacheDirty=this.dirty;var t=this.uvs,n=this.graphicsData,i=null,o=null;this.batches.length>0&&(i=this.batches[this.batches.length-1],o=i.style);for(var a=this.shapeIndex;a<n.length;a++){this.shapeIndex++;var s=n[a],u=s.fillStyle,l=s.lineStyle,f=as[s.type];f.build(s),s.matrix&&this.transformPoints(s.points,s.matrix),(u.visible||l.visible)&&this.processHoles(s.holes);for(var c=0;c<2;c++){var h=c===0?u:l;if(h.visible){var d=h.texture.baseTexture,p=this.indices.length,v=this.points.length/2;d.wrapMode=we.REPEAT,c===0?this.processFill(s):this.processLine(s);var y=this.points.length/2-v;y!==0&&(i&&!this._compareStyles(o,h)&&(i.end(p,v),i=null),i||(i=Xh.pop()||new yx,i.begin(h,p,v),this.batches.push(i),o=h),this.addUvs(this.points,t,h.texture,v,y,h.matrix))}}}var m=this.indices.length,g=this.points.length/2;if(i&&i.end(m,g),this.batches.length===0){this.batchable=!0;return}var _=g>65535;this.indicesUint16&&this.indices.length===this.indicesUint16.length&&_===this.indicesUint16.BYTES_PER_ELEMENT>2?this.indicesUint16.set(this.indices):this.indicesUint16=_?new Uint32Array(this.indices):new Uint16Array(this.indices),this.batchable=this.isBatchable(),this.batchable?this.packBatches():this.buildDrawCalls()}},e.prototype._compareStyles=function(t,n){return!(!t||!n||t.texture.baseTexture!==n.texture.baseTexture||t.color+t.alpha!==n.color+n.alpha||!!t.native!=!!n.native)},e.prototype.validateBatching=function(){if(this.dirty===this.cacheDirty||!this.graphicsData.length)return!1;for(var t=0,n=this.graphicsData.length;t<n;t++){var i=this.graphicsData[t],o=i.fillStyle,a=i.lineStyle;if(o&&!o.texture.baseTexture.valid||a&&!a.texture.baseTexture.valid)return!1}return!0},e.prototype.packBatches=function(){this.batchDirty++,this.uvsFloat32=new Float32Array(this.uvs);for(var t=this.batches,n=0,i=t.length;n<i;n++)for(var o=t[n],a=0;a<o.size;a++){var s=o.start+a;this.indicesUint16[s]=this.indicesUint16[s]-o.attribStart}},e.prototype.isBatchable=function(){if(this.points.length>65535*2)return!1;for(var t=this.batches,n=0;n<t.length;n++)if(t[n].style.native)return!1;return this.points.length<e.BATCHABLE_SIZE*2},e.prototype.buildDrawCalls=function(){for(var t=++q._globalBatch,n=0;n<this.drawCalls.length;n++)this.drawCalls[n].texArray.clear(),ji.push(this.drawCalls[n]);this.drawCalls.length=0;var i=this.colors,o=this.textureIds,a=ji.pop();a||(a=new Fs,a.texArray=new Ns),a.texArray.count=0,a.start=0,a.size=0,a.type=ce.TRIANGLES;var s=0,u=null,l=0,f=!1,c=ce.TRIANGLES,h=0;this.drawCalls.push(a);for(var n=0;n<this.batches.length;n++){var d=this.batches[n],p=8,v=d.style,y=v.texture.baseTexture;f!==!!v.native&&(f=!!v.native,c=f?ce.LINES:ce.TRIANGLES,u=null,s=p,t++),u!==y&&(u=y,y._batchEnabled!==t&&(s===p&&(t++,s=0,a.size>0&&(a=ji.pop(),a||(a=new Fs,a.texArray=new Ns),this.drawCalls.push(a)),a.start=h,a.size=0,a.texArray.count=0,a.type=c),y.touched=1,y._batchEnabled=t,y._batchLocation=s,y.wrapMode=we.REPEAT,a.texArray.elements[a.texArray.count++]=y,s++)),a.size+=d.size,h+=d.size,l=y._batchLocation,this.addColors(i,v.color,v.alpha,d.attribSize,d.attribStart),this.addTextureIds(o,l,d.attribSize,d.attribStart)}q._globalBatch=t,this.packAttributes()},e.prototype.packAttributes=function(){for(var t=this.points,n=this.uvs,i=this.colors,o=this.textureIds,a=new ArrayBuffer(t.length*3*4),s=new Float32Array(a),u=new Uint32Array(a),l=0,f=0;f<t.length/2;f++)s[l++]=t[f*2],s[l++]=t[f*2+1],s[l++]=n[f*2],s[l++]=n[f*2+1],u[l++]=i[f],s[l++]=o[f];this._buffer.update(a),this._indexBuffer.update(this.indicesUint16)},e.prototype.processFill=function(t){if(t.holes.length)wp.triangulate(t,this);else{var n=as[t.type];n.triangulate(t,this)}},e.prototype.processLine=function(t){zh(t,this);for(var n=0;n<t.holes.length;n++)zh(t.holes[n],this)},e.prototype.processHoles=function(t){for(var n=0;n<t.length;n++){var i=t[n],o=as[i.type];o.build(i),i.matrix&&this.transformPoints(i.points,i.matrix)}},e.prototype.calculateBounds=function(){var t=this._bounds;t.clear(),t.addVertexData(this.points,0,this.points.length),t.pad(this.boundsPadding,this.boundsPadding)},e.prototype.transformPoints=function(t,n){for(var i=0;i<t.length/2;i++){var o=t[i*2],a=t[i*2+1];t[i*2]=n.a*o+n.c*a+n.tx,t[i*2+1]=n.b*o+n.d*a+n.ty}},e.prototype.addColors=function(t,n,i,o,a){a===void 0&&(a=0);var s=(n>>16)+(n&65280)+((n&255)<<16),u=du(s,i);t.length=Math.max(t.length,a+o);for(var l=0;l<o;l++)t[a+l]=u},e.prototype.addTextureIds=function(t,n,i,o){o===void 0&&(o=0),t.length=Math.max(t.length,o+i);for(var a=0;a<i;a++)t[o+a]=n},e.prototype.addUvs=function(t,n,i,o,a,s){s===void 0&&(s=null);for(var u=0,l=n.length,f=i.frame;u<a;){var c=t[(o+u)*2],h=t[(o+u)*2+1];if(s){var d=s.a*c+s.c*h+s.tx;h=s.b*c+s.d*h+s.ty,c=d}u++,n.push(c/f.width,h/f.height)}var p=i.baseTexture;(f.width<p.width||f.height<p.height)&&this.adjustUvs(n,i,l,a)},e.prototype.adjustUvs=function(t,n,i,o){for(var a=n.baseTexture,s=1e-6,u=i+o*2,l=n.frame,f=l.width/a.width,c=l.height/a.height,h=l.x/l.width,d=l.y/l.height,p=Math.floor(t[i]+s),v=Math.floor(t[i+1]+s),y=i+2;y<u;y+=2)p=Math.min(p,Math.floor(t[y]+s)),v=Math.min(v,Math.floor(t[y+1]+s));h-=p,d-=v;for(var y=i;y<u;y+=2)t[y]=(t[y]+h)*f,t[y+1]=(t[y+1]+d)*c},e.BATCHABLE_SIZE=100,e}(bp),_x=function(r){Ep(e,r);function e(){var t=r!==null&&r.apply(this,arguments)||this;return t.width=0,t.alignment=.5,t.native=!1,t.cap=ar.BUTT,t.join=Ge.MITER,t.miterLimit=10,t}return e.prototype.clone=function(){var t=new e;return t.color=this.color,t.alpha=this.alpha,t.texture=this.texture,t.matrix=this.matrix,t.visible=this.visible,t.width=this.width,t.alignment=this.alignment,t.native=this.native,t.cap=this.cap,t.join=this.join,t.miterLimit=this.miterLimit,t},e.prototype.reset=function(){r.prototype.reset.call(this),this.color=0,this.alignment=.5,this.width=0,this.native=!1},e}(Sp),FM=new Float32Array(3),kl={},ai=function(r){Ep(e,r);function e(t){t===void 0&&(t=null);var n=r.call(this)||this;return n.shader=null,n.pluginName="batch",n.currentPath=null,n.batches=[],n.batchTint=-1,n.batchDirty=-1,n.vertexData=null,n._fillStyle=new Sp,n._lineStyle=new _x,n._matrix=null,n._holeMode=!1,n.state=Ir.for2d(),n._geometry=t||new mx,n._geometry.refCount++,n._transformID=-1,n.tint=16777215,n.blendMode=B.NORMAL,n}return Object.defineProperty(e.prototype,"geometry",{get:function(){return this._geometry},enumerable:!1,configurable:!0}),e.prototype.clone=function(){return this.finishPoly(),new e(this._geometry)},Object.defineProperty(e.prototype,"blendMode",{get:function(){return this.state.blendMode},set:function(t){this.state.blendMode=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"tint",{get:function(){return this._tint},set:function(t){this._tint=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"fill",{get:function(){return this._fillStyle},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"line",{get:function(){return this._lineStyle},enumerable:!1,configurable:!0}),e.prototype.lineStyle=function(t,n,i,o,a){return t===void 0&&(t=null),n===void 0&&(n=0),i===void 0&&(i=1),o===void 0&&(o=.5),a===void 0&&(a=!1),typeof t=="number"&&(t={width:t,color:n,alpha:i,alignment:o,native:a}),this.lineTextureStyle(t)},e.prototype.lineTextureStyle=function(t){t=Object.assign({width:0,texture:G.WHITE,color:t&&t.texture?16777215:0,alpha:1,matrix:null,alignment:.5,native:!1,cap:ar.BUTT,join:Ge.MITER,miterLimit:10},t),this.currentPath&&this.startPoly();var n=t.width>0&&t.alpha>0;return n?(t.matrix&&(t.matrix=t.matrix.clone(),t.matrix.invert()),Object.assign(this._lineStyle,{visible:n},t)):this._lineStyle.reset(),this},e.prototype.startPoly=function(){if(this.currentPath){var t=this.currentPath.points,n=this.currentPath.points.length;n>2&&(this.drawShape(this.currentPath),this.currentPath=new Yi,this.currentPath.closeStroke=!1,this.currentPath.points.push(t[n-2],t[n-1]))}else this.currentPath=new Yi,this.currentPath.closeStroke=!1},e.prototype.finishPoly=function(){this.currentPath&&(this.currentPath.points.length>2?(this.drawShape(this.currentPath),this.currentPath=null):this.currentPath.points.length=0)},e.prototype.moveTo=function(t,n){return this.startPoly(),this.currentPath.points[0]=t,this.currentPath.points[1]=n,this},e.prototype.lineTo=function(t,n){this.currentPath||this.moveTo(0,0);var i=this.currentPath.points,o=i[i.length-2],a=i[i.length-1];return(o!==t||a!==n)&&i.push(t,n),this},e.prototype._initCurve=function(t,n){t===void 0&&(t=0),n===void 0&&(n=0),this.currentPath?this.currentPath.points.length===0&&(this.currentPath.points=[t,n]):this.moveTo(t,n)},e.prototype.quadraticCurveTo=function(t,n,i,o){this._initCurve();var a=this.currentPath.points;return a.length===0&&this.moveTo(0,0),vx.curveTo(t,n,i,o,a),this},e.prototype.bezierCurveTo=function(t,n,i,o,a,s){return this._initCurve(),px.curveTo(t,n,i,o,a,s,this.currentPath.points),this},e.prototype.arcTo=function(t,n,i,o,a){this._initCurve(t,n);var s=this.currentPath.points,u=Hh.curveTo(t,n,i,o,a,s);if(u){var l=u.cx,f=u.cy,c=u.radius,h=u.startAngle,d=u.endAngle,p=u.anticlockwise;this.arc(l,f,c,h,d,p)}return this},e.prototype.arc=function(t,n,i,o,a,s){if(s===void 0&&(s=!1),o===a)return this;!s&&a<=o?a+=Kt:s&&o<=a&&(o+=Kt);var u=a-o;if(u===0)return this;var l=t+Math.cos(o)*i,f=n+Math.sin(o)*i,c=this._geometry.closePointEps,h=this.currentPath?this.currentPath.points:null;if(h){var d=Math.abs(h[h.length-2]-l),p=Math.abs(h[h.length-1]-f);d<c&&p<c||h.push(l,f)}else this.moveTo(l,f),h=this.currentPath.points;return Hh.arc(l,f,t,n,i,o,a,s,h),this},e.prototype.beginFill=function(t,n){return t===void 0&&(t=0),n===void 0&&(n=1),this.beginTextureFill({texture:G.WHITE,color:t,alpha:n})},e.prototype.beginTextureFill=function(t){t=Object.assign({texture:G.WHITE,color:16777215,alpha:1,matrix:null},t),this.currentPath&&this.startPoly();var n=t.alpha>0;return n?(t.matrix&&(t.matrix=t.matrix.clone(),t.matrix.invert()),Object.assign(this._fillStyle,{visible:n},t)):this._fillStyle.reset(),this},e.prototype.endFill=function(){return this.finishPoly(),this._fillStyle.reset(),this},e.prototype.drawRect=function(t,n,i,o){return this.drawShape(new K(t,n,i,o))},e.prototype.drawRoundedRect=function(t,n,i,o,a){return this.drawShape(new db(t,n,i,o,a))},e.prototype.drawCircle=function(t,n,i){return this.drawShape(new hb(t,n,i))},e.prototype.drawEllipse=function(t,n,i,o){return this.drawShape(new cb(t,n,i,o))},e.prototype.drawPolygon=function(){for(var t=arguments,n=[],i=0;i<arguments.length;i++)n[i]=t[i];var o,a=!0,s=n[0];s.points?(a=s.closeStroke,o=s.points):Array.isArray(n[0])?o=n[0]:o=n;var u=new Yi(o);return u.closeStroke=a,this.drawShape(u),this},e.prototype.drawShape=function(t){return this._holeMode?this._geometry.drawHole(t,this._matrix):this._geometry.drawShape(t,this._fillStyle.clone(),this._lineStyle.clone(),this._matrix),this},e.prototype.clear=function(){return this._geometry.clear(),this._lineStyle.reset(),this._fillStyle.reset(),this._boundsID++,this._matrix=null,this._holeMode=!1,this.currentPath=null,this},e.prototype.isFastRect=function(){var t=this._geometry.graphicsData;return t.length===1&&t[0].shape.type===Rt.RECT&&!t[0].matrix&&!t[0].holes.length&&!(t[0].lineStyle.visible&&t[0].lineStyle.width)},e.prototype._render=function(t){this.finishPoly();var n=this._geometry;n.updateBatches(),n.batchable?(this.batchDirty!==n.batchDirty&&this._populateBatches(),this._renderBatched(t)):(t.batch.flush(),this._renderDirect(t))},e.prototype._populateBatches=function(){var t=this._geometry,n=this.blendMode,i=t.batches.length;this.batchTint=-1,this._transformID=-1,this.batchDirty=t.batchDirty,this.batches.length=i,this.vertexData=new Float32Array(t.points);for(var o=0;o<i;o++){var a=t.batches[o],s=a.style.color,u=new Float32Array(this.vertexData.buffer,a.attribStart*4*2,a.attribSize*2),l=new Float32Array(t.uvsFloat32.buffer,a.attribStart*4*2,a.attribSize*2),f=new Uint16Array(t.indicesUint16.buffer,a.start*2,a.size),c={vertexData:u,blendMode:n,indices:f,uvs:l,_batchRGB:Bt(s),_tintRGB:s,_texture:a.style.texture,alpha:a.style.alpha,worldAlpha:1};this.batches[o]=c}},e.prototype._renderBatched=function(t){if(this.batches.length){t.batch.setObjectRenderer(t.plugins[this.pluginName]),this.calculateVertices(),this.calculateTints();for(var n=0,i=this.batches.length;n<i;n++){var o=this.batches[n];o.worldAlpha=this.worldAlpha*o.alpha,t.plugins[this.pluginName].render(o)}}},e.prototype._renderDirect=function(t){var n=this._resolveDirectShader(t),i=this._geometry,o=this.tint,a=this.worldAlpha,s=n.uniforms,u=i.drawCalls;s.translationMatrix=this.transform.worldTransform,s.tint[0]=(o>>16&255)/255*a,s.tint[1]=(o>>8&255)/255*a,s.tint[2]=(o&255)/255*a,s.tint[3]=a,t.shader.bind(n),t.geometry.bind(i,n),t.state.set(this.state);for(var l=0,f=u.length;l<f;l++)this._renderDrawCallDirect(t,i.drawCalls[l])},e.prototype._renderDrawCallDirect=function(t,n){for(var i=n.texArray,o=n.type,a=n.size,s=n.start,u=i.count,l=0;l<u;l++)t.texture.bind(i.elements[l],l);t.geometry.draw(o,a,s)},e.prototype._resolveDirectShader=function(t){var n=this.shader,i=this.pluginName;if(!n){if(!kl[i]){for(var o=t.plugins[i].MAX_TEXTURES,a=new Int32Array(o),s=0;s<o;s++)a[s]=s;var u={tint:new Float32Array([1,1,1,1]),translationMatrix:new Pt,default:Sr.from({uSamplers:a},!0)},l=t.plugins[i]._shader.program;kl[i]=new Xe(l,u)}n=kl[i]}return n},e.prototype._calculateBounds=function(){this.finishPoly();var t=this._geometry;if(t.graphicsData.length){var n=t.bounds,i=n.minX,o=n.minY,a=n.maxX,s=n.maxY;this._bounds.addFrame(this.transform,i,o,a,s)}},e.prototype.containsPoint=function(t){return this.worldTransform.applyInverse(t,e._TEMP_POINT),this._geometry.containsPoint(e._TEMP_POINT)},e.prototype.calculateTints=function(){if(this.batchTint!==this.tint){this.batchTint=this.tint;for(var t=Bt(this.tint,FM),n=0;n<this.batches.length;n++){var i=this.batches[n],o=i._batchRGB,a=t[0]*o[0]*255,s=t[1]*o[1]*255,u=t[2]*o[2]*255,l=(a<<16)+(s<<8)+(u|0);i._tintRGB=(l>>16)+(l&65280)+((l&255)<<16)}}},e.prototype.calculateVertices=function(){var t=this.transform._worldID;if(this._transformID!==t){this._transformID=t;for(var n=this.transform.worldTransform,i=n.a,o=n.b,a=n.c,s=n.d,u=n.tx,l=n.ty,f=this._geometry.points,c=this.vertexData,h=0,d=0;d<f.length;d+=2){var p=f[d],v=f[d+1];c[h++]=i*p+a*v+u,c[h++]=s*v+o*p+l}}},e.prototype.closePath=function(){var t=this.currentPath;return t&&(t.closeStroke=!0,this.finishPoly()),this},e.prototype.setMatrix=function(t){return this._matrix=t,this},e.prototype.beginHole=function(){return this.finishPoly(),this._holeMode=!0,this},e.prototype.endHole=function(){return this.finishPoly(),this._holeMode=!1,this},e.prototype.destroy=function(t){this._geometry.refCount--,this._geometry.refCount===0&&this._geometry.dispose(),this._matrix=null,this.currentPath=null,this._lineStyle.destroy(),this._lineStyle=null,this._fillStyle.destroy(),this._fillStyle=null,this._geometry=null,this.shader=null,this.vertexData=null,this.batches.length=0,this.batches=null,r.prototype.destroy.call(this,t)},e.nextRoundedRectBehavior=!1,e._TEMP_POINT=new X,e}($t),NM={buildPoly:wp,buildCircle:bo,buildRectangle:cx,buildRoundedRectangle:dx,buildLine:zh,ArcUtils:Hh,BezierUtils:px,QuadraticUtils:vx,BatchPart:yx,FILL_COMMANDS:as,BATCH_POOL:Xh,DRAW_CALL_POOL:ji};/*!
 * @pixi/sprite - v6.5.10
 * Compiled Thu, 06 Jul 2023 15:25:11 UTC
 *
 * @pixi/sprite is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Wh=function(r,e){return Wh=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)n.hasOwnProperty(i)&&(t[i]=n[i])},Wh(r,e)};function LM(r,e){Wh(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var Ii=new X,BM=new Uint16Array([0,1,2,0,2,3]),Jt=function(r){LM(e,r);function e(t){var n=r.call(this)||this;return n._anchor=new gr(n._onAnchorUpdate,n,t?t.defaultAnchor.x:0,t?t.defaultAnchor.y:0),n._texture=null,n._width=0,n._height=0,n._tint=null,n._tintRGB=null,n.tint=16777215,n.blendMode=B.NORMAL,n._cachedTint=16777215,n.uvs=null,n.texture=t||G.EMPTY,n.vertexData=new Float32Array(8),n.vertexTrimmedData=null,n._transformID=-1,n._textureID=-1,n._transformTrimmedID=-1,n._textureTrimmedID=-1,n.indices=BM,n.pluginName="batch",n.isSprite=!0,n._roundPixels=C.ROUND_PIXELS,n}return e.prototype._onTextureUpdate=function(){this._textureID=-1,this._textureTrimmedID=-1,this._cachedTint=16777215,this._width&&(this.scale.x=Wr(this.scale.x)*this._width/this._texture.orig.width),this._height&&(this.scale.y=Wr(this.scale.y)*this._height/this._texture.orig.height)},e.prototype._onAnchorUpdate=function(){this._transformID=-1,this._transformTrimmedID=-1},e.prototype.calculateVertices=function(){var t=this._texture;if(!(this._transformID===this.transform._worldID&&this._textureID===t._updateID)){this._textureID!==t._updateID&&(this.uvs=this._texture._uvs.uvsFloat32),this._transformID=this.transform._worldID,this._textureID=t._updateID;var n=this.transform.worldTransform,i=n.a,o=n.b,a=n.c,s=n.d,u=n.tx,l=n.ty,f=this.vertexData,c=t.trim,h=t.orig,d=this._anchor,p=0,v=0,y=0,m=0;if(c?(v=c.x-d._x*h.width,p=v+c.width,m=c.y-d._y*h.height,y=m+c.height):(v=-d._x*h.width,p=v+h.width,m=-d._y*h.height,y=m+h.height),f[0]=i*v+a*m+u,f[1]=s*m+o*v+l,f[2]=i*p+a*m+u,f[3]=s*m+o*p+l,f[4]=i*p+a*y+u,f[5]=s*y+o*p+l,f[6]=i*v+a*y+u,f[7]=s*y+o*v+l,this._roundPixels)for(var g=C.RESOLUTION,_=0;_<f.length;++_)f[_]=Math.round((f[_]*g|0)/g)}},e.prototype.calculateTrimmedVertices=function(){if(!this.vertexTrimmedData)this.vertexTrimmedData=new Float32Array(8);else if(this._transformTrimmedID===this.transform._worldID&&this._textureTrimmedID===this._texture._updateID)return;this._transformTrimmedID=this.transform._worldID,this._textureTrimmedID=this._texture._updateID;var t=this._texture,n=this.vertexTrimmedData,i=t.orig,o=this._anchor,a=this.transform.worldTransform,s=a.a,u=a.b,l=a.c,f=a.d,c=a.tx,h=a.ty,d=-o._x*i.width,p=d+i.width,v=-o._y*i.height,y=v+i.height;n[0]=s*d+l*v+c,n[1]=f*v+u*d+h,n[2]=s*p+l*v+c,n[3]=f*v+u*p+h,n[4]=s*p+l*y+c,n[5]=f*y+u*p+h,n[6]=s*d+l*y+c,n[7]=f*y+u*d+h},e.prototype._render=function(t){this.calculateVertices(),t.batch.setObjectRenderer(t.plugins[this.pluginName]),t.plugins[this.pluginName].render(this)},e.prototype._calculateBounds=function(){var t=this._texture.trim,n=this._texture.orig;!t||t.width===n.width&&t.height===n.height?(this.calculateVertices(),this._bounds.addQuad(this.vertexData)):(this.calculateTrimmedVertices(),this._bounds.addQuad(this.vertexTrimmedData))},e.prototype.getLocalBounds=function(t){return this.children.length===0?(this._localBounds||(this._localBounds=new mo),this._localBounds.minX=this._texture.orig.width*-this._anchor._x,this._localBounds.minY=this._texture.orig.height*-this._anchor._y,this._localBounds.maxX=this._texture.orig.width*(1-this._anchor._x),this._localBounds.maxY=this._texture.orig.height*(1-this._anchor._y),t||(this._localBoundsRect||(this._localBoundsRect=new K),t=this._localBoundsRect),this._localBounds.getRectangle(t)):r.prototype.getLocalBounds.call(this,t)},e.prototype.containsPoint=function(t){this.worldTransform.applyInverse(t,Ii);var n=this._texture.orig.width,i=this._texture.orig.height,o=-n*this.anchor.x,a=0;return Ii.x>=o&&Ii.x<o+n&&(a=-i*this.anchor.y,Ii.y>=a&&Ii.y<a+i)},e.prototype.destroy=function(t){r.prototype.destroy.call(this,t),this._texture.off("update",this._onTextureUpdate,this),this._anchor=null;var n=typeof t=="boolean"?t:t&&t.texture;if(n){var i=typeof t=="boolean"?t:t&&t.baseTexture;this._texture.destroy(!!i)}this._texture=null},e.from=function(t,n){var i=t instanceof G?t:G.from(t,n);return new e(i)},Object.defineProperty(e.prototype,"roundPixels",{get:function(){return this._roundPixels},set:function(t){this._roundPixels!==t&&(this._transformID=-1),this._roundPixels=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"width",{get:function(){return Math.abs(this.scale.x)*this._texture.orig.width},set:function(t){var n=Wr(this.scale.x)||1;this.scale.x=n*t/this._texture.orig.width,this._width=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"height",{get:function(){return Math.abs(this.scale.y)*this._texture.orig.height},set:function(t){var n=Wr(this.scale.y)||1;this.scale.y=n*t/this._texture.orig.height,this._height=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"anchor",{get:function(){return this._anchor},set:function(t){this._anchor.copyFrom(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"tint",{get:function(){return this._tint},set:function(t){this._tint=t,this._tintRGB=(t>>16)+(t&65280)+((t&255)<<16)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"texture",{get:function(){return this._texture},set:function(t){this._texture!==t&&(this._texture&&this._texture.off("update",this._onTextureUpdate,this),this._texture=t||G.EMPTY,this._cachedTint=16777215,this._textureID=-1,this._textureTrimmedID=-1,t&&(t.baseTexture.valid?this._onTextureUpdate():t.once("update",this._onTextureUpdate,this)))},enumerable:!1,configurable:!0}),e}($t);/*!
 * @pixi/text - v6.5.10
 * Compiled Thu, 06 Jul 2023 15:25:11 UTC
 *
 * @pixi/text is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Yh=function(r,e){return Yh=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)n.hasOwnProperty(i)&&(t[i]=n[i])},Yh(r,e)};function UM(r,e){Yh(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var si;(function(r){r[r.LINEAR_VERTICAL=0]="LINEAR_VERTICAL",r[r.LINEAR_HORIZONTAL=1]="LINEAR_HORIZONTAL"})(si||(si={}));var $l={align:"left",breakWords:!1,dropShadow:!1,dropShadowAlpha:1,dropShadowAngle:Math.PI/6,dropShadowBlur:0,dropShadowColor:"black",dropShadowDistance:5,fill:"black",fillGradientType:si.LINEAR_VERTICAL,fillGradientStops:[],fontFamily:"Arial",fontSize:26,fontStyle:"normal",fontVariant:"normal",fontWeight:"normal",letterSpacing:0,lineHeight:0,lineJoin:"miter",miterLimit:10,padding:0,stroke:"black",strokeThickness:0,textBaseline:"alphabetic",trim:!1,whiteSpace:"pre",wordWrap:!1,wordWrapWidth:100,leading:0},GM=["serif","sans-serif","monospace","cursive","fantasy","system-ui"],Ar=function(){function r(e){this.styleID=0,this.reset(),Hl(this,e,e)}return r.prototype.clone=function(){var e={};return Hl(e,this,$l),new r(e)},r.prototype.reset=function(){Hl(this,$l,$l)},Object.defineProperty(r.prototype,"align",{get:function(){return this._align},set:function(e){this._align!==e&&(this._align=e,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"breakWords",{get:function(){return this._breakWords},set:function(e){this._breakWords!==e&&(this._breakWords=e,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"dropShadow",{get:function(){return this._dropShadow},set:function(e){this._dropShadow!==e&&(this._dropShadow=e,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"dropShadowAlpha",{get:function(){return this._dropShadowAlpha},set:function(e){this._dropShadowAlpha!==e&&(this._dropShadowAlpha=e,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"dropShadowAngle",{get:function(){return this._dropShadowAngle},set:function(e){this._dropShadowAngle!==e&&(this._dropShadowAngle=e,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"dropShadowBlur",{get:function(){return this._dropShadowBlur},set:function(e){this._dropShadowBlur!==e&&(this._dropShadowBlur=e,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"dropShadowColor",{get:function(){return this._dropShadowColor},set:function(e){var t=zl(e);this._dropShadowColor!==t&&(this._dropShadowColor=t,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"dropShadowDistance",{get:function(){return this._dropShadowDistance},set:function(e){this._dropShadowDistance!==e&&(this._dropShadowDistance=e,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"fill",{get:function(){return this._fill},set:function(e){var t=zl(e);this._fill!==t&&(this._fill=t,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"fillGradientType",{get:function(){return this._fillGradientType},set:function(e){this._fillGradientType!==e&&(this._fillGradientType=e,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"fillGradientStops",{get:function(){return this._fillGradientStops},set:function(e){jM(this._fillGradientStops,e)||(this._fillGradientStops=e,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"fontFamily",{get:function(){return this._fontFamily},set:function(e){this.fontFamily!==e&&(this._fontFamily=e,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"fontSize",{get:function(){return this._fontSize},set:function(e){this._fontSize!==e&&(this._fontSize=e,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"fontStyle",{get:function(){return this._fontStyle},set:function(e){this._fontStyle!==e&&(this._fontStyle=e,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"fontVariant",{get:function(){return this._fontVariant},set:function(e){this._fontVariant!==e&&(this._fontVariant=e,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"fontWeight",{get:function(){return this._fontWeight},set:function(e){this._fontWeight!==e&&(this._fontWeight=e,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"letterSpacing",{get:function(){return this._letterSpacing},set:function(e){this._letterSpacing!==e&&(this._letterSpacing=e,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"lineHeight",{get:function(){return this._lineHeight},set:function(e){this._lineHeight!==e&&(this._lineHeight=e,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"leading",{get:function(){return this._leading},set:function(e){this._leading!==e&&(this._leading=e,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"lineJoin",{get:function(){return this._lineJoin},set:function(e){this._lineJoin!==e&&(this._lineJoin=e,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"miterLimit",{get:function(){return this._miterLimit},set:function(e){this._miterLimit!==e&&(this._miterLimit=e,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"padding",{get:function(){return this._padding},set:function(e){this._padding!==e&&(this._padding=e,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"stroke",{get:function(){return this._stroke},set:function(e){var t=zl(e);this._stroke!==t&&(this._stroke=t,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"strokeThickness",{get:function(){return this._strokeThickness},set:function(e){this._strokeThickness!==e&&(this._strokeThickness=e,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"textBaseline",{get:function(){return this._textBaseline},set:function(e){this._textBaseline!==e&&(this._textBaseline=e,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"trim",{get:function(){return this._trim},set:function(e){this._trim!==e&&(this._trim=e,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"whiteSpace",{get:function(){return this._whiteSpace},set:function(e){this._whiteSpace!==e&&(this._whiteSpace=e,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"wordWrap",{get:function(){return this._wordWrap},set:function(e){this._wordWrap!==e&&(this._wordWrap=e,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"wordWrapWidth",{get:function(){return this._wordWrapWidth},set:function(e){this._wordWrapWidth!==e&&(this._wordWrapWidth=e,this.styleID++)},enumerable:!1,configurable:!0}),r.prototype.toFontString=function(){var e=typeof this.fontSize=="number"?this.fontSize+"px":this.fontSize,t=this.fontFamily;Array.isArray(this.fontFamily)||(t=this.fontFamily.split(","));for(var n=t.length-1;n>=0;n--){var i=t[n].trim();!/([\"\'])[^\'\"]+\1/.test(i)&&GM.indexOf(i)<0&&(i='"'+i+'"'),t[n]=i}return this.fontStyle+" "+this.fontVariant+" "+this.fontWeight+" "+e+" "+t.join(",")},r}();function ky(r){return typeof r=="number"?$d(r):(typeof r=="string"&&r.indexOf("0x")===0&&(r=r.replace("0x","#")),r)}function zl(r){if(Array.isArray(r)){for(var e=0;e<r.length;++e)r[e]=ky(r[e]);return r}else return ky(r)}function jM(r,e){if(!Array.isArray(r)||!Array.isArray(e)||r.length!==e.length)return!1;for(var t=0;t<r.length;++t)if(r[t]!==e[t])return!1;return!0}function Hl(r,e,t){for(var n in t)Array.isArray(e[n])?r[n]=e[n].slice():r[n]=e[n]}var Ea={willReadFrequently:!0},Ie=function(){function r(e,t,n,i,o,a,s,u,l){this.text=e,this.style=t,this.width=n,this.height=i,this.lines=o,this.lineWidths=a,this.lineHeight=s,this.maxLineWidth=u,this.fontProperties=l}return r.measureText=function(e,t,n,i){i===void 0&&(i=r._canvas),n=n??t.wordWrap;var o=t.toFontString(),a=r.measureFont(o);a.fontSize===0&&(a.fontSize=t.fontSize,a.ascent=t.fontSize);var s=i.getContext("2d",Ea);s.font=o;for(var u=n?r.wordWrap(e,t,i):e,l=u.split(/(?:\r\n|\r|\n)/),f=new Array(l.length),c=0,h=0;h<l.length;h++){var d=s.measureText(l[h]).width+(l[h].length-1)*t.letterSpacing;f[h]=d,c=Math.max(c,d)}var p=c+t.strokeThickness;t.dropShadow&&(p+=t.dropShadowDistance);var v=t.lineHeight||a.fontSize+t.strokeThickness,y=Math.max(v,a.fontSize+t.strokeThickness)+(l.length-1)*(v+t.leading);return t.dropShadow&&(y+=t.dropShadowDistance),new r(e,t,p,y,l,f,v+t.leading,c,a)},r.wordWrap=function(e,t,n){n===void 0&&(n=r._canvas);for(var i=n.getContext("2d",Ea),o=0,a="",s="",u=Object.create(null),l=t.letterSpacing,f=t.whiteSpace,c=r.collapseSpaces(f),h=r.collapseNewlines(f),d=!c,p=t.wordWrapWidth+l,v=r.tokenize(e),y=0;y<v.length;y++){var m=v[y];if(r.isNewline(m)){if(!h){s+=r.addLine(a),d=!c,a="",o=0;continue}m=" "}if(c){var g=r.isBreakingSpace(m),_=r.isBreakingSpace(a[a.length-1]);if(g&&_)continue}var x=r.getFromCache(m,l,u,i);if(x>p)if(a!==""&&(s+=r.addLine(a),a="",o=0),r.canBreakWords(m,t.breakWords))for(var b=r.wordWrapSplit(m),T=0;T<b.length;T++){for(var S=b[T],A=1;b[T+A];){var E=b[T+A],w=S[S.length-1];if(!r.canBreakChars(w,E,m,T,t.breakWords))S+=E;else break;A++}T+=S.length-1;var D=r.getFromCache(S,l,u,i);D+o>p&&(s+=r.addLine(a),d=!1,a="",o=0),a+=S,o+=D}else{a.length>0&&(s+=r.addLine(a),a="",o=0);var N=y===v.length-1;s+=r.addLine(m,!N),d=!1,a="",o=0}else x+o>p&&(d=!1,s+=r.addLine(a),a="",o=0),(a.length>0||!r.isBreakingSpace(m)||d)&&(a+=m,o+=x)}return s+=r.addLine(a,!1),s},r.addLine=function(e,t){return t===void 0&&(t=!0),e=r.trimRight(e),e=t?e+`
`:e,e},r.getFromCache=function(e,t,n,i){var o=n[e];if(typeof o!="number"){var a=e.length*t;o=i.measureText(e).width+a,n[e]=o}return o},r.collapseSpaces=function(e){return e==="normal"||e==="pre-line"},r.collapseNewlines=function(e){return e==="normal"},r.trimRight=function(e){if(typeof e!="string")return"";for(var t=e.length-1;t>=0;t--){var n=e[t];if(!r.isBreakingSpace(n))break;e=e.slice(0,-1)}return e},r.isNewline=function(e){return typeof e!="string"?!1:r._newlines.indexOf(e.charCodeAt(0))>=0},r.isBreakingSpace=function(e,t){return typeof e!="string"?!1:r._breakingSpaces.indexOf(e.charCodeAt(0))>=0},r.tokenize=function(e){var t=[],n="";if(typeof e!="string")return t;for(var i=0;i<e.length;i++){var o=e[i],a=e[i+1];if(r.isBreakingSpace(o,a)||r.isNewline(o)){n!==""&&(t.push(n),n=""),t.push(o);continue}n+=o}return n!==""&&t.push(n),t},r.canBreakWords=function(e,t){return t},r.canBreakChars=function(e,t,n,i,o){return!0},r.wordWrapSplit=function(e){return e.split("")},r.measureFont=function(e){if(r._fonts[e])return r._fonts[e];var t={ascent:0,descent:0,fontSize:0},n=r._canvas,i=r._context;i.font=e;var o=r.METRICS_STRING+r.BASELINE_SYMBOL,a=Math.ceil(i.measureText(o).width),s=Math.ceil(i.measureText(r.BASELINE_SYMBOL).width),u=Math.ceil(r.HEIGHT_MULTIPLIER*s);s=s*r.BASELINE_MULTIPLIER|0,n.width=a,n.height=u,i.fillStyle="#f00",i.fillRect(0,0,a,u),i.font=e,i.textBaseline="alphabetic",i.fillStyle="#000",i.fillText(o,0,s);var l=i.getImageData(0,0,a,u).data,f=l.length,c=a*4,h=0,d=0,p=!1;for(h=0;h<s;++h){for(var v=0;v<c;v+=4)if(l[d+v]!==255){p=!0;break}if(!p)d+=c;else break}for(t.ascent=s-h,d=f-c,p=!1,h=u;h>s;--h){for(var v=0;v<c;v+=4)if(l[d+v]!==255){p=!0;break}if(!p)d-=c;else break}return t.descent=h-s,t.fontSize=t.ascent+t.descent,r._fonts[e]=t,t},r.clearMetrics=function(e){e===void 0&&(e=""),e?delete r._fonts[e]:r._fonts={}},Object.defineProperty(r,"_canvas",{get:function(){if(!r.__canvas){var e=void 0;try{var t=new OffscreenCanvas(0,0),n=t.getContext("2d",Ea);if(n&&n.measureText)return r.__canvas=t,t;e=C.ADAPTER.createCanvas()}catch{e=C.ADAPTER.createCanvas()}e.width=e.height=10,r.__canvas=e}return r.__canvas},enumerable:!1,configurable:!0}),Object.defineProperty(r,"_context",{get:function(){return r.__context||(r.__context=r._canvas.getContext("2d",Ea)),r.__context},enumerable:!1,configurable:!0}),r}();Ie._fonts={};Ie.METRICS_STRING="|ÉqÅ";Ie.BASELINE_SYMBOL="M";Ie.BASELINE_MULTIPLIER=1.4;Ie.HEIGHT_MULTIPLIER=2;Ie._newlines=[10,13];Ie._breakingSpaces=[9,32,8192,8193,8194,8195,8196,8197,8198,8200,8201,8202,8287,12288];var kM={texture:!0,children:!1,baseTexture:!0},bu=function(r){UM(e,r);function e(t,n,i){var o=this,a=!1;i||(i=C.ADAPTER.createCanvas(),a=!0),i.width=3,i.height=3;var s=G.from(i);return s.orig=new K,s.trim=new K,o=r.call(this,s)||this,o._ownCanvas=a,o.canvas=i,o.context=i.getContext("2d",{willReadFrequently:!0}),o._resolution=C.RESOLUTION,o._autoResolution=!0,o._text=null,o._style=null,o._styleListener=null,o._font="",o.text=t,o.style=n,o.localStyleID=-1,o}return e.prototype.updateText=function(t){var n=this._style;if(this.localStyleID!==n.styleID&&(this.dirty=!0,this.localStyleID=n.styleID),!(!this.dirty&&t)){this._font=this._style.toFontString();var i=this.context,o=Ie.measureText(this._text||" ",this._style,this._style.wordWrap,this.canvas),a=o.width,s=o.height,u=o.lines,l=o.lineHeight,f=o.lineWidths,c=o.maxLineWidth,h=o.fontProperties;this.canvas.width=Math.ceil(Math.ceil(Math.max(1,a)+n.padding*2)*this._resolution),this.canvas.height=Math.ceil(Math.ceil(Math.max(1,s)+n.padding*2)*this._resolution),i.scale(this._resolution,this._resolution),i.clearRect(0,0,this.canvas.width,this.canvas.height),i.font=this._font,i.lineWidth=n.strokeThickness,i.textBaseline=n.textBaseline,i.lineJoin=n.lineJoin,i.miterLimit=n.miterLimit;for(var d,p,v=n.dropShadow?2:1,y=0;y<v;++y){var m=n.dropShadow&&y===0,g=m?Math.ceil(Math.max(1,s)+n.padding*2):0,_=g*this._resolution;if(m){i.fillStyle="black",i.strokeStyle="black";var x=n.dropShadowColor,b=Bt(typeof x=="number"?x:zd(x)),T=n.dropShadowBlur*this._resolution,S=n.dropShadowDistance*this._resolution;i.shadowColor="rgba("+b[0]*255+","+b[1]*255+","+b[2]*255+","+n.dropShadowAlpha+")",i.shadowBlur=T,i.shadowOffsetX=Math.cos(n.dropShadowAngle)*S,i.shadowOffsetY=Math.sin(n.dropShadowAngle)*S+_}else i.fillStyle=this._generateFillStyle(n,u,o),i.strokeStyle=n.stroke,i.shadowColor="black",i.shadowBlur=0,i.shadowOffsetX=0,i.shadowOffsetY=0;var A=(l-h.fontSize)/2;(!e.nextLineHeightBehavior||l-h.fontSize<0)&&(A=0);for(var E=0;E<u.length;E++)d=n.strokeThickness/2,p=n.strokeThickness/2+E*l+h.ascent+A,n.align==="right"?d+=c-f[E]:n.align==="center"&&(d+=(c-f[E])/2),n.stroke&&n.strokeThickness&&this.drawLetterSpacing(u[E],d+n.padding,p+n.padding-g,!0),n.fill&&this.drawLetterSpacing(u[E],d+n.padding,p+n.padding-g)}this.updateTexture()}},e.prototype.drawLetterSpacing=function(t,n,i,o){o===void 0&&(o=!1);var a=this._style,s=a.letterSpacing,u=e.experimentalLetterSpacing&&("letterSpacing"in CanvasRenderingContext2D.prototype||"textLetterSpacing"in CanvasRenderingContext2D.prototype);if(s===0||u){u&&(this.context.letterSpacing=s,this.context.textLetterSpacing=s),o?this.context.strokeText(t,n,i):this.context.fillText(t,n,i);return}for(var l=n,f=Array.from?Array.from(t):t.split(""),c=this.context.measureText(t).width,h=0,d=0;d<f.length;++d){var p=f[d];o?this.context.strokeText(p,l,i):this.context.fillText(p,l,i);for(var v="",y=d+1;y<f.length;++y)v+=f[y];h=this.context.measureText(v).width,l+=c-h+s,c=h}},e.prototype.updateTexture=function(){var t=this.canvas;if(this._style.trim){var n=sb(t);n.data&&(t.width=n.width,t.height=n.height,this.context.putImageData(n.data,0,0))}var i=this._texture,o=this._style,a=o.trim?0:o.padding,s=i.baseTexture;i.trim.width=i._frame.width=t.width/this._resolution,i.trim.height=i._frame.height=t.height/this._resolution,i.trim.x=-a,i.trim.y=-a,i.orig.width=i._frame.width-a*2,i.orig.height=i._frame.height-a*2,this._onTextureUpdate(),s.setRealSize(t.width,t.height,this._resolution),i.updateUvs(),this.dirty=!1},e.prototype._render=function(t){this._autoResolution&&this._resolution!==t.resolution&&(this._resolution=t.resolution,this.dirty=!0),this.updateText(!0),r.prototype._render.call(this,t)},e.prototype.updateTransform=function(){this.updateText(!0),r.prototype.updateTransform.call(this)},e.prototype.getBounds=function(t,n){return this.updateText(!0),this._textureID===-1&&(t=!1),r.prototype.getBounds.call(this,t,n)},e.prototype.getLocalBounds=function(t){return this.updateText(!0),r.prototype.getLocalBounds.call(this,t)},e.prototype._calculateBounds=function(){this.calculateVertices(),this._bounds.addQuad(this.vertexData)},e.prototype._generateFillStyle=function(t,n,i){var o=t.fill;if(Array.isArray(o)){if(o.length===1)return o[0]}else return o;var a,s=t.dropShadow?t.dropShadowDistance:0,u=t.padding||0,l=this.canvas.width/this._resolution-s-u*2,f=this.canvas.height/this._resolution-s-u*2,c=o.slice(),h=t.fillGradientStops.slice();if(!h.length)for(var d=c.length+1,p=1;p<d;++p)h.push(p/d);if(c.unshift(o[0]),h.unshift(0),c.push(o[o.length-1]),h.push(1),t.fillGradientType===si.LINEAR_VERTICAL){a=this.context.createLinearGradient(l/2,u,l/2,f+u);for(var v=i.fontProperties.fontSize+t.strokeThickness,p=0;p<n.length;p++){var y=i.lineHeight*(p-1)+v,m=i.lineHeight*p,g=m;p>0&&y>m&&(g=(m+y)/2);var _=m+v,x=i.lineHeight*(p+1),b=_;p+1<n.length&&x<_&&(b=(_+x)/2);for(var T=(b-g)/f,S=0;S<c.length;S++){var A=0;typeof h[S]=="number"?A=h[S]:A=S/c.length;var E=Math.min(1,Math.max(0,g/f+A*T));E=Number(E.toFixed(5)),a.addColorStop(E,c[S])}}}else{a=this.context.createLinearGradient(u,f/2,l+u,f/2);for(var w=c.length+1,D=1,p=0;p<c.length;p++){var N=void 0;typeof h[p]=="number"?N=h[p]:N=D/w,a.addColorStop(N,c[p]),D++}}return a},e.prototype.destroy=function(t){typeof t=="boolean"&&(t={children:t}),t=Object.assign({},kM,t),r.prototype.destroy.call(this,t),this._ownCanvas&&(this.canvas.height=this.canvas.width=0),this.context=null,this.canvas=null,this._style=null},Object.defineProperty(e.prototype,"width",{get:function(){return this.updateText(!0),Math.abs(this.scale.x)*this._texture.orig.width},set:function(t){this.updateText(!0);var n=Wr(this.scale.x)||1;this.scale.x=n*t/this._texture.orig.width,this._width=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"height",{get:function(){return this.updateText(!0),Math.abs(this.scale.y)*this._texture.orig.height},set:function(t){this.updateText(!0);var n=Wr(this.scale.y)||1;this.scale.y=n*t/this._texture.orig.height,this._height=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"style",{get:function(){return this._style},set:function(t){t=t||{},t instanceof Ar?this._style=t:this._style=new Ar(t),this.localStyleID=-1,this.dirty=!0},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"text",{get:function(){return this._text},set:function(t){t=String(t??""),this._text!==t&&(this._text=t,this.dirty=!0)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"resolution",{get:function(){return this._resolution},set:function(t){this._autoResolution=!1,this._resolution!==t&&(this._resolution=t,this.dirty=!0)},enumerable:!1,configurable:!0}),e.nextLineHeightBehavior=!1,e.experimentalLetterSpacing=!1,e}(Jt);/*!
 * @pixi/prepare - v6.5.10
 * Compiled Thu, 06 Jul 2023 15:25:11 UTC
 *
 * @pixi/prepare is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */C.UPLOADS_PER_FRAME=4;/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var qh=function(r,e){return qh=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)n.hasOwnProperty(i)&&(t[i]=n[i])},qh(r,e)};function $M(r,e){qh(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var gx=function(){function r(e){this.maxItemsPerFrame=e,this.itemsLeft=0}return r.prototype.beginFrame=function(){this.itemsLeft=this.maxItemsPerFrame},r.prototype.allowedToUpload=function(){return this.itemsLeft-- >0},r}();function zM(r,e){var t=!1;if(r&&r._textures&&r._textures.length){for(var n=0;n<r._textures.length;n++)if(r._textures[n]instanceof G){var i=r._textures[n].baseTexture;e.indexOf(i)===-1&&(e.push(i),t=!0)}}return t}function HM(r,e){if(r.baseTexture instanceof q){var t=r.baseTexture;return e.indexOf(t)===-1&&e.push(t),!0}return!1}function XM(r,e){if(r._texture&&r._texture instanceof G){var t=r._texture.baseTexture;return e.indexOf(t)===-1&&e.push(t),!0}return!1}function VM(r,e){return e instanceof bu?(e.updateText(!0),!0):!1}function WM(r,e){if(e instanceof Ar){var t=e.toFontString();return Ie.measureFont(t),!0}return!1}function YM(r,e){if(r instanceof bu){e.indexOf(r.style)===-1&&e.push(r.style),e.indexOf(r)===-1&&e.push(r);var t=r._texture.baseTexture;return e.indexOf(t)===-1&&e.push(t),!0}return!1}function qM(r,e){return r instanceof Ar?(e.indexOf(r)===-1&&e.push(r),!0):!1}var bx=function(){function r(e){var t=this;this.limiter=new gx(C.UPLOADS_PER_FRAME),this.renderer=e,this.uploadHookHelper=null,this.queue=[],this.addHooks=[],this.uploadHooks=[],this.completes=[],this.ticking=!1,this.delayedTick=function(){t.queue&&t.prepareItems()},this.registerFindHook(YM),this.registerFindHook(qM),this.registerFindHook(zM),this.registerFindHook(HM),this.registerFindHook(XM),this.registerUploadHook(VM),this.registerUploadHook(WM)}return r.prototype.upload=function(e,t){var n=this;return typeof e=="function"&&(t=e,e=null),t&&Vt("6.5.0","BasePrepare.upload callback is deprecated, use the return Promise instead."),new Promise(function(i){e&&n.add(e);var o=function(){t==null||t(),i()};n.queue.length?(n.completes.push(o),n.ticking||(n.ticking=!0,Ct.system.addOnce(n.tick,n,Ve.UTILITY))):o()})},r.prototype.tick=function(){setTimeout(this.delayedTick,0)},r.prototype.prepareItems=function(){for(this.limiter.beginFrame();this.queue.length&&this.limiter.allowedToUpload();){var e=this.queue[0],t=!1;if(e&&!e._destroyed){for(var n=0,i=this.uploadHooks.length;n<i;n++)if(this.uploadHooks[n](this.uploadHookHelper,e)){this.queue.shift(),t=!0;break}}t||this.queue.shift()}if(this.queue.length)Ct.system.addOnce(this.tick,this,Ve.UTILITY);else{this.ticking=!1;var o=this.completes.slice(0);this.completes.length=0;for(var n=0,i=o.length;n<i;n++)o[n]()}},r.prototype.registerFindHook=function(e){return e&&this.addHooks.push(e),this},r.prototype.registerUploadHook=function(e){return e&&this.uploadHooks.push(e),this},r.prototype.add=function(e){for(var t=0,n=this.addHooks.length;t<n&&!this.addHooks[t](e,this.queue);t++);if(e instanceof $t)for(var t=e.children.length-1;t>=0;t--)this.add(e.children[t]);return this},r.prototype.destroy=function(){this.ticking&&Ct.system.remove(this.tick,this),this.ticking=!1,this.addHooks=null,this.uploadHooks=null,this.renderer=null,this.completes=null,this.queue=null,this.limiter=null,this.uploadHookHelper=null},r}();function xx(r,e){return e instanceof q?(e._glTextures[r.CONTEXT_UID]||r.texture.bind(e),!0):!1}function KM(r,e){if(!(e instanceof ai))return!1;var t=e.geometry;e.finishPoly(),t.updateBatches();for(var n=t.batches,i=0;i<n.length;i++){var o=n[i].style.texture;o&&xx(r,o.baseTexture)}return t.batchable||r.geometry.bind(t,e._resolveDirectShader(r)),!0}function ZM(r,e){return r instanceof ai?(e.push(r),!0):!1}var Tx=function(r){$M(e,r);function e(t){var n=r.call(this,t)||this;return n.uploadHookHelper=n.renderer,n.registerFindHook(ZM),n.registerUploadHook(xx),n.registerUploadHook(KM),n}return e.extension={name:"prepare",type:rt.RendererPlugin},e}(bx),JM=function(){function r(e){this.maxMilliseconds=e,this.frameStart=0}return r.prototype.beginFrame=function(){this.frameStart=Date.now()},r.prototype.allowedToUpload=function(){return Date.now()-this.frameStart<this.maxMilliseconds},r}();/*!
 * @pixi/spritesheet - v6.5.10
 * Compiled Thu, 06 Jul 2023 15:25:11 UTC
 *
 * @pixi/spritesheet is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */var Sx=function(){function r(e,t,n){n===void 0&&(n=null),this.linkedSheets=[],this._texture=e instanceof G?e:null,this.baseTexture=e instanceof q?e:this._texture.baseTexture,this.textures={},this.animations={},this.data=t;var i=this.baseTexture.resource;this.resolution=this._updateResolution(n||(i?i.url:null)),this._frames=this.data.frames,this._frameKeys=Object.keys(this._frames),this._batchIndex=0,this._callback=null}return r.prototype._updateResolution=function(e){e===void 0&&(e=null);var t=this.data.meta.scale,n=yo(e,null);return n===null&&(n=t!==void 0?parseFloat(t):1),n!==1&&this.baseTexture.setResolution(n),n},r.prototype.parse=function(e){var t=this;return e&&Vt("6.5.0","Spritesheet.parse callback is deprecated, use the return Promise instead."),new Promise(function(n){t._callback=function(i){e==null||e(i),n(i)},t._batchIndex=0,t._frameKeys.length<=r.BATCH_SIZE?(t._processFrames(0),t._processAnimations(),t._parseComplete()):t._nextBatch()})},r.prototype._processFrames=function(e){for(var t=e,n=r.BATCH_SIZE;t-e<n&&t<this._frameKeys.length;){var i=this._frameKeys[t],o=this._frames[i],a=o.frame;if(a){var s=null,u=null,l=o.trimmed!==!1&&o.sourceSize?o.sourceSize:o.frame,f=new K(0,0,Math.floor(l.w)/this.resolution,Math.floor(l.h)/this.resolution);o.rotated?s=new K(Math.floor(a.x)/this.resolution,Math.floor(a.y)/this.resolution,Math.floor(a.h)/this.resolution,Math.floor(a.w)/this.resolution):s=new K(Math.floor(a.x)/this.resolution,Math.floor(a.y)/this.resolution,Math.floor(a.w)/this.resolution,Math.floor(a.h)/this.resolution),o.trimmed!==!1&&o.spriteSourceSize&&(u=new K(Math.floor(o.spriteSourceSize.x)/this.resolution,Math.floor(o.spriteSourceSize.y)/this.resolution,Math.floor(a.w)/this.resolution,Math.floor(a.h)/this.resolution)),this.textures[i]=new G(this.baseTexture,s,f,u,o.rotated?2:0,o.anchor),G.addToCache(this.textures[i],i)}t++}},r.prototype._processAnimations=function(){var e=this.data.animations||{};for(var t in e){this.animations[t]=[];for(var n=0;n<e[t].length;n++){var i=e[t][n];this.animations[t].push(this.textures[i])}}},r.prototype._parseComplete=function(){var e=this._callback;this._callback=null,this._batchIndex=0,e.call(this,this.textures)},r.prototype._nextBatch=function(){var e=this;this._processFrames(this._batchIndex*r.BATCH_SIZE),this._batchIndex++,setTimeout(function(){e._batchIndex*r.BATCH_SIZE<e._frameKeys.length?e._nextBatch():(e._processAnimations(),e._parseComplete())},0)},r.prototype.destroy=function(e){var t;e===void 0&&(e=!1);for(var n in this.textures)this.textures[n].destroy();this._frames=null,this._frameKeys=null,this.data=null,this.textures=null,e&&((t=this._texture)===null||t===void 0||t.destroy(),this.baseTexture.destroy()),this._texture=null,this.baseTexture=null,this.linkedSheets=[]},r.BATCH_SIZE=1e3,r}(),Ex=function(){function r(){}return r.use=function(e,t){var n,i,o=this,a=e.name+"_image";if(!e.data||e.type!==yt.TYPE.JSON||!e.data.frames||o.resources[a]){t();return}var s=(i=(n=e.data)===null||n===void 0?void 0:n.meta)===null||i===void 0?void 0:i.related_multi_packs;if(Array.isArray(s))for(var u=function(p){if(typeof p!="string")return"continue";var v=p.replace(".json",""),y=Vr.resolve(e.url.replace(o.baseUrl,""),p);if(o.resources[v]||Object.values(o.resources).some(function(g){return Vr.format(Vr.parse(g.url))===y}))return"continue";var m={crossOrigin:e.crossOrigin,loadType:yt.LOAD_TYPE.XHR,xhrType:yt.XHR_RESPONSE_TYPE.JSON,parentResource:e,metadata:e.metadata};o.add(v,y,m)},l=0,f=s;l<f.length;l++){var c=f[l];u(c)}var h={crossOrigin:e.crossOrigin,metadata:e.metadata.imageMetadata,parentResource:e},d=r.getResourcePath(e,o.baseUrl);o.add(a,d,h,function(v){if(v.error){t(v.error);return}var y=new Sx(v.texture,e.data,e.url);y.parse().then(function(){e.spritesheet=y,e.textures=y.textures,t()})})},r.getResourcePath=function(e,t){return e.isDataUrl?e.data.meta.image:Vr.resolve(e.url.replace(t,""),e.data.meta.image)},r.extension=rt.Loader,r}();/*!
 * @pixi/sprite-tiling - v6.5.10
 * Compiled Thu, 06 Jul 2023 15:25:11 UTC
 *
 * @pixi/sprite-tiling is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Kh=function(r,e){return Kh=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)n.hasOwnProperty(i)&&(t[i]=n[i])},Kh(r,e)};function Ox(r,e){Kh(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var Mi=new X,Px=function(r){Ox(e,r);function e(t,n,i){n===void 0&&(n=100),i===void 0&&(i=100);var o=r.call(this,t)||this;return o.tileTransform=new Wd,o._width=n,o._height=i,o.uvMatrix=o.texture.uvMatrix||new _u(t),o.pluginName="tilingSprite",o.uvRespectAnchor=!1,o}return Object.defineProperty(e.prototype,"clampMargin",{get:function(){return this.uvMatrix.clampMargin},set:function(t){this.uvMatrix.clampMargin=t,this.uvMatrix.update(!0)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"tileScale",{get:function(){return this.tileTransform.scale},set:function(t){this.tileTransform.scale.copyFrom(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"tilePosition",{get:function(){return this.tileTransform.position},set:function(t){this.tileTransform.position.copyFrom(t)},enumerable:!1,configurable:!0}),e.prototype._onTextureUpdate=function(){this.uvMatrix&&(this.uvMatrix.texture=this._texture),this._cachedTint=16777215},e.prototype._render=function(t){var n=this._texture;!n||!n.valid||(this.tileTransform.updateLocalTransform(),this.uvMatrix.update(),t.batch.setObjectRenderer(t.plugins[this.pluginName]),t.plugins[this.pluginName].render(this))},e.prototype._calculateBounds=function(){var t=this._width*-this._anchor._x,n=this._height*-this._anchor._y,i=this._width*(1-this._anchor._x),o=this._height*(1-this._anchor._y);this._bounds.addFrame(this.transform,t,n,i,o)},e.prototype.getLocalBounds=function(t){return this.children.length===0?(this._bounds.minX=this._width*-this._anchor._x,this._bounds.minY=this._height*-this._anchor._y,this._bounds.maxX=this._width*(1-this._anchor._x),this._bounds.maxY=this._height*(1-this._anchor._y),t||(this._localBoundsRect||(this._localBoundsRect=new K),t=this._localBoundsRect),this._bounds.getRectangle(t)):r.prototype.getLocalBounds.call(this,t)},e.prototype.containsPoint=function(t){this.worldTransform.applyInverse(t,Mi);var n=this._width,i=this._height,o=-n*this.anchor._x;if(Mi.x>=o&&Mi.x<o+n){var a=-i*this.anchor._y;if(Mi.y>=a&&Mi.y<a+i)return!0}return!1},e.prototype.destroy=function(t){r.prototype.destroy.call(this,t),this.tileTransform=null,this.uvMatrix=null},e.from=function(t,n){var i=t instanceof G?t:G.from(t,n);return new e(i,n.width,n.height)},Object.defineProperty(e.prototype,"width",{get:function(){return this._width},set:function(t){this._width=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"height",{get:function(){return this._height},set:function(t){this._height=t},enumerable:!1,configurable:!0}),e}(Jt),QM=`#version 100
#define SHADER_NAME Tiling-Sprite-Simple-100

precision lowp float;

varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform vec4 uColor;

void main(void)
{
    vec4 texSample = texture2D(uSampler, vTextureCoord);
    gl_FragColor = texSample * uColor;
}
`,$y=`#version 100
#define SHADER_NAME Tiling-Sprite-100

precision lowp float;

attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;
uniform mat3 translationMatrix;
uniform mat3 uTransform;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);

    vTextureCoord = (uTransform * vec3(aTextureCoord, 1.0)).xy;
}
`,tD=`#version 100
#ifdef GL_EXT_shader_texture_lod
    #extension GL_EXT_shader_texture_lod : enable
#endif
#define SHADER_NAME Tiling-Sprite-100

precision lowp float;

varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform vec4 uColor;
uniform mat3 uMapCoord;
uniform vec4 uClampFrame;
uniform vec2 uClampOffset;

void main(void)
{
    vec2 coord = vTextureCoord + ceil(uClampOffset - vTextureCoord);
    coord = (uMapCoord * vec3(coord, 1.0)).xy;
    vec2 unclamped = coord;
    coord = clamp(coord, uClampFrame.xy, uClampFrame.zw);

    #ifdef GL_EXT_shader_texture_lod
        vec4 texSample = unclamped == coord
            ? texture2D(uSampler, coord) 
            : texture2DLodEXT(uSampler, coord, 0);
    #else
        vec4 texSample = texture2D(uSampler, coord);
    #endif

    gl_FragColor = texSample * uColor;
}
`,eD=`#version 300 es
#define SHADER_NAME Tiling-Sprite-300

precision lowp float;

in vec2 aVertexPosition;
in vec2 aTextureCoord;

uniform mat3 projectionMatrix;
uniform mat3 translationMatrix;
uniform mat3 uTransform;

out vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);

    vTextureCoord = (uTransform * vec3(aTextureCoord, 1.0)).xy;
}
`,rD=`#version 300 es
#define SHADER_NAME Tiling-Sprite-100

precision lowp float;

in vec2 vTextureCoord;

out vec4 fragmentColor;

uniform sampler2D uSampler;
uniform vec4 uColor;
uniform mat3 uMapCoord;
uniform vec4 uClampFrame;
uniform vec2 uClampOffset;

void main(void)
{
    vec2 coord = vTextureCoord + ceil(uClampOffset - vTextureCoord);
    coord = (uMapCoord * vec3(coord, 1.0)).xy;
    vec2 unclamped = coord;
    coord = clamp(coord, uClampFrame.xy, uClampFrame.zw);

    vec4 texSample = texture(uSampler, coord, unclamped == coord ? 0.0f : -32.0f);// lod-bias very negative to force lod 0

    fragmentColor = texSample * uColor;
}
`,wa=new Pt,Ax=function(r){Ox(e,r);function e(t){var n=r.call(this,t)||this;return t.runners.contextChange.add(n),n.quad=new ip,n.state=Ir.for2d(),n}return e.prototype.contextChange=function(){var t=this.renderer,n={globals:t.globalUniforms};this.simpleShader=Xe.from($y,QM,n),this.shader=t.context.webGLVersion>1?Xe.from(eD,rD,n):Xe.from($y,tD,n)},e.prototype.render=function(t){var n=this.renderer,i=this.quad,o=i.vertices;o[0]=o[6]=t._width*-t.anchor.x,o[1]=o[3]=t._height*-t.anchor.y,o[2]=o[4]=t._width*(1-t.anchor.x),o[5]=o[7]=t._height*(1-t.anchor.y);var a=t.uvRespectAnchor?t.anchor.x:0,s=t.uvRespectAnchor?t.anchor.y:0;o=i.uvs,o[0]=o[6]=-a,o[1]=o[3]=-s,o[2]=o[4]=1-a,o[5]=o[7]=1-s,i.invalidate();var u=t._texture,l=u.baseTexture,f=l.alphaMode>0,c=t.tileTransform.localTransform,h=t.uvMatrix,d=l.isPowerOfTwo&&u.frame.width===l.width&&u.frame.height===l.height;d&&(l._glTextures[n.CONTEXT_UID]?d=l.wrapMode!==we.CLAMP:l.wrapMode===we.CLAMP&&(l.wrapMode=we.REPEAT));var p=d?this.simpleShader:this.shader,v=u.width,y=u.height,m=t._width,g=t._height;wa.set(c.a*v/m,c.b*v/g,c.c*y/m,c.d*y/g,c.tx/m,c.ty/g),wa.invert(),d?wa.prepend(h.mapCoord):(p.uniforms.uMapCoord=h.mapCoord.toArray(!0),p.uniforms.uClampFrame=h.uClampFrame,p.uniforms.uClampOffset=h.uClampOffset),p.uniforms.uTransform=wa.toArray(!0),p.uniforms.uColor=Vd(t.tint,t.worldAlpha,p.uniforms.uColor,f),p.uniforms.translationMatrix=t.transform.worldTransform.toArray(!0),p.uniforms.uSampler=u,n.shader.bind(p),n.geometry.bind(i),this.state.blendMode=Xd(t.blendMode,f),n.state.set(this.state),n.geometry.draw(this.renderer.gl.TRIANGLES,6,0)},e.extension={name:"tilingSprite",type:rt.RendererPlugin},e}(No);/*!
 * @pixi/mesh - v6.5.10
 * Compiled Thu, 06 Jul 2023 15:25:11 UTC
 *
 * @pixi/mesh is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Zh=function(r,e){return Zh=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)n.hasOwnProperty(i)&&(t[i]=n[i])},Zh(r,e)};function Op(r,e){Zh(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var Cx=function(){function r(e,t){this.uvBuffer=e,this.uvMatrix=t,this.data=null,this._bufferUpdateId=-1,this._textureUpdateId=-1,this._updateID=0}return r.prototype.update=function(e){if(!(!e&&this._bufferUpdateId===this.uvBuffer._updateID&&this._textureUpdateId===this.uvMatrix._updateID)){this._bufferUpdateId=this.uvBuffer._updateID,this._textureUpdateId=this.uvMatrix._updateID;var t=this.uvBuffer.data;(!this.data||this.data.length!==t.length)&&(this.data=new Float32Array(t.length)),this.uvMatrix.multiplyUvs(t,this.data),this._updateID++}},r}(),Xl=new X,zy=new Yi,ui=function(r){Op(e,r);function e(t,n,i,o){o===void 0&&(o=ce.TRIANGLES);var a=r.call(this)||this;return a.geometry=t,a.shader=n,a.state=i||Ir.for2d(),a.drawMode=o,a.start=0,a.size=0,a.uvs=null,a.indices=null,a.vertexData=new Float32Array(1),a.vertexDirty=-1,a._transformID=-1,a._roundPixels=C.ROUND_PIXELS,a.batchUvs=null,a}return Object.defineProperty(e.prototype,"geometry",{get:function(){return this._geometry},set:function(t){this._geometry!==t&&(this._geometry&&(this._geometry.refCount--,this._geometry.refCount===0&&this._geometry.dispose()),this._geometry=t,this._geometry&&this._geometry.refCount++,this.vertexDirty=-1)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"uvBuffer",{get:function(){return this.geometry.buffers[1]},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"verticesBuffer",{get:function(){return this.geometry.buffers[0]},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"material",{get:function(){return this.shader},set:function(t){this.shader=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"blendMode",{get:function(){return this.state.blendMode},set:function(t){this.state.blendMode=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"roundPixels",{get:function(){return this._roundPixels},set:function(t){this._roundPixels!==t&&(this._transformID=-1),this._roundPixels=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"tint",{get:function(){return"tint"in this.shader?this.shader.tint:null},set:function(t){this.shader.tint=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"texture",{get:function(){return"texture"in this.shader?this.shader.texture:null},set:function(t){this.shader.texture=t},enumerable:!1,configurable:!0}),e.prototype._render=function(t){var n=this.geometry.buffers[0].data,i=this.shader;i.batchable&&this.drawMode===ce.TRIANGLES&&n.length<e.BATCHABLE_SIZE*2?this._renderToBatch(t):this._renderDefault(t)},e.prototype._renderDefault=function(t){var n=this.shader;n.alpha=this.worldAlpha,n.update&&n.update(),t.batch.flush(),n.uniforms.translationMatrix=this.transform.worldTransform.toArray(!0),t.shader.bind(n),t.state.set(this.state),t.geometry.bind(this.geometry,n),t.geometry.draw(this.drawMode,this.size,this.start,this.geometry.instanceCount)},e.prototype._renderToBatch=function(t){var n=this.geometry,i=this.shader;i.uvMatrix&&(i.uvMatrix.update(),this.calculateUvs()),this.calculateVertices(),this.indices=n.indexBuffer.data,this._tintRGB=i._tintRGB,this._texture=i.texture;var o=this.material.pluginName;t.batch.setObjectRenderer(t.plugins[o]),t.plugins[o].render(this)},e.prototype.calculateVertices=function(){var t=this.geometry,n=t.buffers[0],i=n.data,o=n._updateID;if(!(o===this.vertexDirty&&this._transformID===this.transform._worldID)){this._transformID=this.transform._worldID,this.vertexData.length!==i.length&&(this.vertexData=new Float32Array(i.length));for(var a=this.transform.worldTransform,s=a.a,u=a.b,l=a.c,f=a.d,c=a.tx,h=a.ty,d=this.vertexData,p=0;p<d.length/2;p++){var v=i[p*2],y=i[p*2+1];d[p*2]=s*v+l*y+c,d[p*2+1]=u*v+f*y+h}if(this._roundPixels)for(var m=C.RESOLUTION,p=0;p<d.length;++p)d[p]=Math.round((d[p]*m|0)/m);this.vertexDirty=o}},e.prototype.calculateUvs=function(){var t=this.geometry.buffers[1],n=this.shader;n.uvMatrix.isSimple?this.uvs=t.data:(this.batchUvs||(this.batchUvs=new Cx(t,n.uvMatrix)),this.batchUvs.update(),this.uvs=this.batchUvs.data)},e.prototype._calculateBounds=function(){this.calculateVertices(),this._bounds.addVertexData(this.vertexData,0,this.vertexData.length)},e.prototype.containsPoint=function(t){if(!this.getBounds().contains(t.x,t.y))return!1;this.worldTransform.applyInverse(t,Xl);for(var n=this.geometry.getBuffer("aVertexPosition").data,i=zy.points,o=this.geometry.getIndex().data,a=o.length,s=this.drawMode===4?3:1,u=0;u+2<a;u+=s){var l=o[u]*2,f=o[u+1]*2,c=o[u+2]*2;if(i[0]=n[l],i[1]=n[l+1],i[2]=n[f],i[3]=n[f+1],i[4]=n[c],i[5]=n[c+1],zy.contains(Xl.x,Xl.y))return!0}return!1},e.prototype.destroy=function(t){r.prototype.destroy.call(this,t),this._cachedTexture&&(this._cachedTexture.destroy(),this._cachedTexture=null),this.geometry=null,this.shader=null,this.state=null,this.uvs=null,this.indices=null,this.vertexData=null},e.BATCHABLE_SIZE=100,e}($t),nD=`varying vec2 vTextureCoord;
uniform vec4 uColor;

uniform sampler2D uSampler;

void main(void)
{
    gl_FragColor = texture2D(uSampler, vTextureCoord) * uColor;
}
`,iD=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;
uniform mat3 translationMatrix;
uniform mat3 uTextureMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);

    vTextureCoord = (uTextureMatrix * vec3(aTextureCoord, 1.0)).xy;
}
`,li=function(r){Op(e,r);function e(t,n){var i=this,o={uSampler:t,alpha:1,uTextureMatrix:Pt.IDENTITY,uColor:new Float32Array([1,1,1,1])};return n=Object.assign({tint:16777215,alpha:1,pluginName:"batch"},n),n.uniforms&&Object.assign(o,n.uniforms),i=r.call(this,n.program||gi.from(iD,nD),o)||this,i._colorDirty=!1,i.uvMatrix=new _u(t),i.batchable=n.program===void 0,i.pluginName=n.pluginName,i.tint=n.tint,i.alpha=n.alpha,i}return Object.defineProperty(e.prototype,"texture",{get:function(){return this.uniforms.uSampler},set:function(t){this.uniforms.uSampler!==t&&(!this.uniforms.uSampler.baseTexture.alphaMode!=!t.baseTexture.alphaMode&&(this._colorDirty=!0),this.uniforms.uSampler=t,this.uvMatrix.texture=t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"alpha",{get:function(){return this._alpha},set:function(t){t!==this._alpha&&(this._alpha=t,this._colorDirty=!0)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"tint",{get:function(){return this._tint},set:function(t){t!==this._tint&&(this._tint=t,this._tintRGB=(t>>16)+(t&65280)+((t&255)<<16),this._colorDirty=!0)},enumerable:!1,configurable:!0}),e.prototype.update=function(){if(this._colorDirty){this._colorDirty=!1;var t=this.texture.baseTexture;Vd(this._tint,this._alpha,this.uniforms.uColor,t.alphaMode)}this.uvMatrix.update()&&(this.uniforms.uTextureMatrix=this.uvMatrix.mapCoord)},e}(Xe),Lo=function(r){Op(e,r);function e(t,n,i){var o=r.call(this)||this,a=new Ot(t),s=new Ot(n,!0),u=new Ot(i,!0,!0);return o.addAttribute("aVertexPosition",a,2,!1,U.FLOAT).addAttribute("aTextureCoord",s,2,!1,U.FLOAT).addIndex(u),o._updateId=-1,o}return Object.defineProperty(e.prototype,"vertexDirtyId",{get:function(){return this.buffers[0]._updateID},enumerable:!1,configurable:!0}),e}(_i);/*!
 * @pixi/text-bitmap - v6.5.10
 * Compiled Thu, 06 Jul 2023 15:25:11 UTC
 *
 * @pixi/text-bitmap is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Jh=function(r,e){return Jh=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)n.hasOwnProperty(i)&&(t[i]=n[i])},Jh(r,e)};function oD(r,e){Jh(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var xo=function(){function r(){this.info=[],this.common=[],this.page=[],this.char=[],this.kerning=[],this.distanceField=[]}return r}(),Rx=function(){function r(){}return r.test=function(e){return typeof e=="string"&&e.indexOf("info face=")===0},r.parse=function(e){var t=e.match(/^[a-z]+\s+.+$/gm),n={info:[],common:[],page:[],char:[],chars:[],kerning:[],kernings:[],distanceField:[]};for(var i in t){var o=t[i].match(/^[a-z]+/gm)[0],a=t[i].match(/[a-zA-Z]+=([^\s"']+|"([^"]*)")/gm),s={};for(var u in a){var l=a[u].split("="),f=l[0],c=l[1].replace(/"/gm,""),h=parseFloat(c),d=isNaN(h)?c:h;s[f]=d}n[o].push(s)}var p=new xo;return n.info.forEach(function(v){return p.info.push({face:v.face,size:parseInt(v.size,10)})}),n.common.forEach(function(v){return p.common.push({lineHeight:parseInt(v.lineHeight,10)})}),n.page.forEach(function(v){return p.page.push({id:parseInt(v.id,10),file:v.file})}),n.char.forEach(function(v){return p.char.push({id:parseInt(v.id,10),page:parseInt(v.page,10),x:parseInt(v.x,10),y:parseInt(v.y,10),width:parseInt(v.width,10),height:parseInt(v.height,10),xoffset:parseInt(v.xoffset,10),yoffset:parseInt(v.yoffset,10),xadvance:parseInt(v.xadvance,10)})}),n.kerning.forEach(function(v){return p.kerning.push({first:parseInt(v.first,10),second:parseInt(v.second,10),amount:parseInt(v.amount,10)})}),n.distanceField.forEach(function(v){return p.distanceField.push({distanceRange:parseInt(v.distanceRange,10),fieldType:v.fieldType})}),p},r}(),Us=function(){function r(){}return r.test=function(e){return e instanceof XMLDocument&&e.getElementsByTagName("page").length&&e.getElementsByTagName("info")[0].getAttribute("face")!==null},r.parse=function(e){for(var t=new xo,n=e.getElementsByTagName("info"),i=e.getElementsByTagName("common"),o=e.getElementsByTagName("page"),a=e.getElementsByTagName("char"),s=e.getElementsByTagName("kerning"),u=e.getElementsByTagName("distanceField"),l=0;l<n.length;l++)t.info.push({face:n[l].getAttribute("face"),size:parseInt(n[l].getAttribute("size"),10)});for(var l=0;l<i.length;l++)t.common.push({lineHeight:parseInt(i[l].getAttribute("lineHeight"),10)});for(var l=0;l<o.length;l++)t.page.push({id:parseInt(o[l].getAttribute("id"),10)||0,file:o[l].getAttribute("file")});for(var l=0;l<a.length;l++){var f=a[l];t.char.push({id:parseInt(f.getAttribute("id"),10),page:parseInt(f.getAttribute("page"),10)||0,x:parseInt(f.getAttribute("x"),10),y:parseInt(f.getAttribute("y"),10),width:parseInt(f.getAttribute("width"),10),height:parseInt(f.getAttribute("height"),10),xoffset:parseInt(f.getAttribute("xoffset"),10),yoffset:parseInt(f.getAttribute("yoffset"),10),xadvance:parseInt(f.getAttribute("xadvance"),10)})}for(var l=0;l<s.length;l++)t.kerning.push({first:parseInt(s[l].getAttribute("first"),10),second:parseInt(s[l].getAttribute("second"),10),amount:parseInt(s[l].getAttribute("amount"),10)});for(var l=0;l<u.length;l++)t.distanceField.push({fieldType:u[l].getAttribute("fieldType"),distanceRange:parseInt(u[l].getAttribute("distanceRange"),10)});return t},r}(),Ix=function(){function r(){}return r.test=function(e){if(typeof e=="string"&&e.indexOf("<font>")>-1){var t=new globalThis.DOMParser().parseFromString(e,"text/xml");return Us.test(t)}return!1},r.parse=function(e){var t=new globalThis.DOMParser().parseFromString(e,"text/xml");return Us.parse(t)},r}(),Vl=[Rx,Us,Ix];function Pp(r){for(var e=0;e<Vl.length;e++)if(Vl[e].test(r))return Vl[e];return null}function aD(r,e,t,n,i,o){var a=t.fill;if(Array.isArray(a)){if(a.length===1)return a[0]}else return a;var s,u=t.dropShadow?t.dropShadowDistance:0,l=t.padding||0,f=r.width/n-u-l*2,c=r.height/n-u-l*2,h=a.slice(),d=t.fillGradientStops.slice();if(!d.length)for(var p=h.length+1,v=1;v<p;++v)d.push(v/p);if(h.unshift(a[0]),d.unshift(0),h.push(a[a.length-1]),d.push(1),t.fillGradientType===si.LINEAR_VERTICAL){s=e.createLinearGradient(f/2,l,f/2,c+l);for(var y=0,m=o.fontProperties.fontSize+t.strokeThickness,g=m/c,v=0;v<i.length;v++)for(var _=o.lineHeight*v,x=0;x<h.length;x++){var b=0;typeof d[x]=="number"?b=d[x]:b=x/h.length;var T=_/c+b*g,S=Math.max(y,T);S=Math.min(S,1),s.addColorStop(S,h[x]),y=S}}else{s=e.createLinearGradient(l,c/2,f+l,c/2);for(var A=h.length+1,E=1,v=0;v<h.length;v++){var w=void 0;typeof d[v]=="number"?w=d[v]:w=E/A,s.addColorStop(w,h[v]),E++}}return s}function sD(r,e,t,n,i,o,a){var s=t.text,u=t.fontProperties;e.translate(n,i),e.scale(o,o);var l=a.strokeThickness/2,f=-(a.strokeThickness/2);if(e.font=a.toFontString(),e.lineWidth=a.strokeThickness,e.textBaseline=a.textBaseline,e.lineJoin=a.lineJoin,e.miterLimit=a.miterLimit,e.fillStyle=aD(r,e,a,o,[s],t),e.strokeStyle=a.stroke,a.dropShadow){var c=a.dropShadowColor,h=Bt(typeof c=="number"?c:zd(c)),d=a.dropShadowBlur*o,p=a.dropShadowDistance*o;e.shadowColor="rgba("+h[0]*255+","+h[1]*255+","+h[2]*255+","+a.dropShadowAlpha+")",e.shadowBlur=d,e.shadowOffsetX=Math.cos(a.dropShadowAngle)*p,e.shadowOffsetY=Math.sin(a.dropShadowAngle)*p}else e.shadowColor="black",e.shadowBlur=0,e.shadowOffsetX=0,e.shadowOffsetY=0;a.stroke&&a.strokeThickness&&e.strokeText(s,l,f+t.lineHeight-u.descent),a.fill&&e.fillText(s,l,f+t.lineHeight-u.descent),e.setTransform(1,0,0,1,0,0),e.fillStyle="rgba(0, 0, 0, 0)"}function Mx(r){return Array.from?Array.from(r):r.split("")}function uD(r){typeof r=="string"&&(r=[r]);for(var e=[],t=0,n=r.length;t<n;t++){var i=r[t];if(Array.isArray(i)){if(i.length!==2)throw new Error("[BitmapFont]: Invalid character range length, expecting 2 got "+i.length+".");var o=i[0].charCodeAt(0),a=i[1].charCodeAt(0);if(a<o)throw new Error("[BitmapFont]: Invalid character range.");for(var s=o,u=a;s<=u;s++)e.push(String.fromCharCode(s))}else e.push.apply(e,Mx(i))}if(e.length===0)throw new Error("[BitmapFont]: Empty set when resolving characters.");return e}function ss(r){return r.codePointAt?r.codePointAt(0):r.charCodeAt(0)}var rr=function(){function r(e,t,n){var i,o,a=e.info[0],s=e.common[0],u=e.page[0],l=e.distanceField[0],f=yo(u.file),c={};this._ownsTextures=n,this.font=a.face,this.size=a.size,this.lineHeight=s.lineHeight/f,this.chars={},this.pageTextures=c;for(var h=0;h<e.page.length;h++){var d=e.page[h],p=d.id,v=d.file;c[p]=t instanceof Array?t[h]:t[v],l!=null&&l.fieldType&&l.fieldType!=="none"&&(c[p].baseTexture.alphaMode=pe.NO_PREMULTIPLIED_ALPHA,c[p].baseTexture.mipmap=te.OFF)}for(var h=0;h<e.char.length;h++){var y=e.char[h],p=y.id,m=y.page,g=e.char[h],_=g.x,x=g.y,b=g.width,T=g.height,S=g.xoffset,A=g.yoffset,E=g.xadvance;_/=f,x/=f,b/=f,T/=f,S/=f,A/=f,E/=f;var w=new K(_+c[m].frame.x/f,x+c[m].frame.y/f,b,T);this.chars[p]={xOffset:S,yOffset:A,xAdvance:E,kerning:{},texture:new G(c[m].baseTexture,w),page:m}}for(var h=0;h<e.kerning.length;h++){var D=e.kerning[h],N=D.first,L=D.second,H=D.amount;N/=f,L/=f,H/=f,this.chars[L]&&(this.chars[L].kerning[N]=H)}this.distanceFieldRange=l==null?void 0:l.distanceRange,this.distanceFieldType=(o=(i=l==null?void 0:l.fieldType)===null||i===void 0?void 0:i.toLowerCase())!==null&&o!==void 0?o:"none"}return r.prototype.destroy=function(){for(var e in this.chars)this.chars[e].texture.destroy(),this.chars[e].texture=null;for(var e in this.pageTextures)this._ownsTextures&&this.pageTextures[e].destroy(!0),this.pageTextures[e]=null;this.chars=null,this.pageTextures=null},r.install=function(e,t,n){var i;if(e instanceof xo)i=e;else{var o=Pp(e);if(!o)throw new Error("Unrecognized data format for font.");i=o.parse(e)}t instanceof G&&(t=[t]);var a=new r(i,t,n);return r.available[a.font]=a,a},r.uninstall=function(e){var t=r.available[e];if(!t)throw new Error("No font found named '"+e+"'");t.destroy(),delete r.available[e]},r.from=function(e,t,n){if(!e)throw new Error("[BitmapFont] Property `name` is required.");var i=Object.assign({},r.defaultOptions,n),o=i.chars,a=i.padding,s=i.resolution,u=i.textureWidth,l=i.textureHeight,f=uD(o),c=t instanceof Ar?t:new Ar(t),h=u,d=new xo;d.info[0]={face:c.fontFamily,size:c.fontSize},d.common[0]={lineHeight:c.fontSize};for(var p=0,v=0,y,m,g,_=0,x=[],b=0;b<f.length;b++){y||(y=C.ADAPTER.createCanvas(),y.width=u,y.height=l,m=y.getContext("2d"),g=new q(y,{resolution:s}),x.push(new G(g)),d.page.push({id:x.length-1,file:""}));var T=f[b],S=Ie.measureText(T,c,!1,y),A=S.width,E=Math.ceil(S.height),w=Math.ceil((c.fontStyle==="italic"?2:1)*A);if(v>=l-E*s){if(v===0)throw new Error("[BitmapFont] textureHeight "+l+"px is too small "+("(fontFamily: '"+c.fontFamily+"', fontSize: "+c.fontSize+"px, char: '"+T+"')"));--b,y=null,m=null,g=null,v=0,p=0,_=0;continue}if(_=Math.max(E+S.fontProperties.descent,_),w*s+p>=h){if(p===0)throw new Error("[BitmapFont] textureWidth "+u+"px is too small "+("(fontFamily: '"+c.fontFamily+"', fontSize: "+c.fontSize+"px, char: '"+T+"')"));--b,v+=_*s,v=Math.ceil(v),p=0,_=0;continue}sD(y,m,S,p,v,s,c);var D=ss(S.text);d.char.push({id:D,page:x.length-1,x:p/s,y:v/s,width:w,height:E,xoffset:0,yoffset:0,xadvance:Math.ceil(A-(c.dropShadow?c.dropShadowDistance:0)-(c.stroke?c.strokeThickness:0))}),p+=(w+2*a)*s,p=Math.ceil(p)}if(!(n!=null&&n.skipKerning))for(var b=0,N=f.length;b<N;b++)for(var L=f[b],H=0;H<N;H++){var I=f[H],M=m.measureText(L).width,$=m.measureText(I).width,wt=m.measureText(L+I).width,Y=wt-(M+$);Y&&d.kerning.push({first:ss(L),second:ss(I),amount:Y})}var R=new r(d,x,!0);return r.available[e]!==void 0&&r.uninstall(e),r.available[e]=R,R},r.ALPHA=[["a","z"],["A","Z"]," "],r.NUMERIC=[["0","9"]],r.ALPHANUMERIC=[["a","z"],["A","Z"],["0","9"]," "],r.ASCII=[[" ","~"]],r.defaultOptions={resolution:1,textureWidth:512,textureHeight:512,padding:4,chars:r.ALPHANUMERIC},r.available={},r}(),lD=`// Pixi texture info\r
varying vec2 vTextureCoord;\r
uniform sampler2D uSampler;\r
\r
// Tint\r
uniform vec4 uColor;\r
\r
// on 2D applications fwidth is screenScale / glyphAtlasScale * distanceFieldRange\r
uniform float uFWidth;\r
\r
void main(void) {\r
\r
  // To stack MSDF and SDF we need a non-pre-multiplied-alpha texture.\r
  vec4 texColor = texture2D(uSampler, vTextureCoord);\r
\r
  // MSDF\r
  float median = texColor.r + texColor.g + texColor.b -\r
                  min(texColor.r, min(texColor.g, texColor.b)) -\r
                  max(texColor.r, max(texColor.g, texColor.b));\r
  // SDF\r
  median = min(median, texColor.a);\r
\r
  float screenPxDistance = uFWidth * (median - 0.5);\r
  float alpha = clamp(screenPxDistance + 0.5, 0.0, 1.0);\r
  if (median < 0.01) {\r
    alpha = 0.0;\r
  } else if (median > 0.99) {\r
    alpha = 1.0;\r
  }\r
\r
  // NPM Textures, NPM outputs\r
  gl_FragColor = vec4(uColor.rgb, uColor.a * alpha);\r
\r
}\r
`,fD=`// Mesh material default fragment\r
attribute vec2 aVertexPosition;\r
attribute vec2 aTextureCoord;\r
\r
uniform mat3 projectionMatrix;\r
uniform mat3 translationMatrix;\r
uniform mat3 uTextureMatrix;\r
\r
varying vec2 vTextureCoord;\r
\r
void main(void)\r
{\r
    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\r
\r
    vTextureCoord = (uTextureMatrix * vec3(aTextureCoord, 1.0)).xy;\r
}\r
`,Hy=[],Xy=[],Vy=[],hD=function(r){oD(e,r);function e(t,n){n===void 0&&(n={});var i=r.call(this)||this;i._tint=16777215;var o=Object.assign({},e.styleDefaults,n),a=o.align,s=o.tint,u=o.maxWidth,l=o.letterSpacing,f=o.fontName,c=o.fontSize;if(!rr.available[f])throw new Error('Missing BitmapFont "'+f+'"');return i._activePagesMeshData=[],i._textWidth=0,i._textHeight=0,i._align=a,i._tint=s,i._font=void 0,i._fontName=f,i._fontSize=c,i.text=t,i._maxWidth=u,i._maxLineHeight=0,i._letterSpacing=l,i._anchor=new gr(function(){i.dirty=!0},i,0,0),i._roundPixels=C.ROUND_PIXELS,i.dirty=!0,i._resolution=C.RESOLUTION,i._autoResolution=!0,i._textureCache={},i}return e.prototype.updateText=function(){for(var t,n=rr.available[this._fontName],i=this.fontSize,o=i/n.size,a=new X,s=[],u=[],l=[],f=this._text.replace(/(?:\r\n|\r)/g,`
`)||" ",c=Mx(f),h=this._maxWidth*n.size/i,d=n.distanceFieldType==="none"?Hy:Xy,p=null,v=0,y=0,m=0,g=-1,_=0,x=0,b=0,T=0,S=0;S<c.length;S++){var A=c[S],E=ss(A);if(/(?:\s)/.test(A)&&(g=S,_=v,T++),A==="\r"||A===`
`){u.push(v),l.push(-1),y=Math.max(y,v),++m,++x,a.x=0,a.y+=n.lineHeight,p=null,T=0;continue}var w=n.chars[E];if(w){p&&w.kerning[p]&&(a.x+=w.kerning[p]);var D=Vy.pop()||{texture:G.EMPTY,line:0,charCode:0,prevSpaces:0,position:new X};D.texture=w.texture,D.line=m,D.charCode=E,D.position.x=a.x+w.xOffset+this._letterSpacing/2,D.position.y=a.y+w.yOffset,D.prevSpaces=T,s.push(D),v=D.position.x+Math.max(w.xAdvance-w.xOffset,w.texture.orig.width),a.x+=w.xAdvance+this._letterSpacing,b=Math.max(b,w.yOffset+w.texture.height),p=E,g!==-1&&h>0&&a.x>h&&(++x,Zr(s,1+g-x,1+S-g),S=g,g=-1,u.push(_),l.push(s.length>0?s[s.length-1].prevSpaces:0),y=Math.max(y,_),m++,a.x=0,a.y+=n.lineHeight,p=null,T=0)}}var N=c[c.length-1];N!=="\r"&&N!==`
`&&(/(?:\s)/.test(N)&&(v=_),u.push(v),y=Math.max(y,v),l.push(-1));for(var L=[],S=0;S<=m;S++){var H=0;this._align==="right"?H=y-u[S]:this._align==="center"?H=(y-u[S])/2:this._align==="justify"&&(H=l[S]<0?0:(y-u[S])/l[S]),L.push(H)}var I=s.length,M={},$=[],wt=this._activePagesMeshData;d.push.apply(d,wt);for(var S=0;S<I;S++){var Y=s[S].texture,R=Y.baseTexture.uid;if(!M[R]){var O=d.pop();if(!O){var V=new Lo,J=void 0,et=void 0;n.distanceFieldType==="none"?(J=new li(G.EMPTY),et=B.NORMAL):(J=new li(G.EMPTY,{program:gi.from(fD,lD),uniforms:{uFWidth:0}}),et=B.NORMAL_NPM);var bt=new ui(V,J);bt.blendMode=et,O={index:0,indexCount:0,vertexCount:0,uvsCount:0,total:0,mesh:bt,vertices:null,uvs:null,indices:null}}O.index=0,O.indexCount=0,O.vertexCount=0,O.uvsCount=0,O.total=0;var ft=this._textureCache;ft[R]=ft[R]||new G(Y.baseTexture),O.mesh.texture=ft[R],O.mesh.tint=this._tint,$.push(O),M[R]=O}M[R].total++}for(var S=0;S<wt.length;S++)$.indexOf(wt[S])===-1&&this.removeChild(wt[S].mesh);for(var S=0;S<$.length;S++)$[S].mesh.parent!==this&&this.addChild($[S].mesh);this._activePagesMeshData=$;for(var S in M){var O=M[S],ht=O.total;if(!(((t=O.indices)===null||t===void 0?void 0:t.length)>6*ht)||O.vertices.length<ui.BATCHABLE_SIZE*2)O.vertices=new Float32Array(4*2*ht),O.uvs=new Float32Array(4*2*ht),O.indices=new Uint16Array(6*ht);else for(var Dt=O.total,Gt=O.vertices,xt=Dt*4*2;xt<Gt.length;xt++)Gt[xt]=0;O.mesh.size=6*ht}for(var S=0;S<I;S++){var A=s[S],ot=A.position.x+L[A.line]*(this._align==="justify"?A.prevSpaces:1);this._roundPixels&&(ot=Math.round(ot));var ut=ot*o,ct=A.position.y*o,Y=A.texture,Z=M[Y.baseTexture.uid],zt=Y.frame,Yt=Y._uvs,nt=Z.index++;Z.indices[nt*6+0]=0+nt*4,Z.indices[nt*6+1]=1+nt*4,Z.indices[nt*6+2]=2+nt*4,Z.indices[nt*6+3]=0+nt*4,Z.indices[nt*6+4]=2+nt*4,Z.indices[nt*6+5]=3+nt*4,Z.vertices[nt*8+0]=ut,Z.vertices[nt*8+1]=ct,Z.vertices[nt*8+2]=ut+zt.width*o,Z.vertices[nt*8+3]=ct,Z.vertices[nt*8+4]=ut+zt.width*o,Z.vertices[nt*8+5]=ct+zt.height*o,Z.vertices[nt*8+6]=ut,Z.vertices[nt*8+7]=ct+zt.height*o,Z.uvs[nt*8+0]=Yt.x0,Z.uvs[nt*8+1]=Yt.y0,Z.uvs[nt*8+2]=Yt.x1,Z.uvs[nt*8+3]=Yt.y1,Z.uvs[nt*8+4]=Yt.x2,Z.uvs[nt*8+5]=Yt.y2,Z.uvs[nt*8+6]=Yt.x3,Z.uvs[nt*8+7]=Yt.y3}this._textWidth=y*o,this._textHeight=(a.y+n.lineHeight)*o;for(var S in M){var O=M[S];if(this.anchor.x!==0||this.anchor.y!==0)for(var Me=0,Tn=this._textWidth*this.anchor.x,Zo=this._textHeight*this.anchor.y,rv=0;rv<O.total;rv++)O.vertices[Me++]-=Tn,O.vertices[Me++]-=Zo,O.vertices[Me++]-=Tn,O.vertices[Me++]-=Zo,O.vertices[Me++]-=Tn,O.vertices[Me++]-=Zo,O.vertices[Me++]-=Tn,O.vertices[Me++]-=Zo;this._maxLineHeight=b*o;var nv=O.mesh.geometry.getBuffer("aVertexPosition"),iv=O.mesh.geometry.getBuffer("aTextureCoord"),ov=O.mesh.geometry.getIndex();nv.data=O.vertices,iv.data=O.uvs,ov.data=O.indices,nv.update(),iv.update(),ov.update()}for(var S=0;S<s.length;S++)Vy.push(s[S]);this._font=n,this.dirty=!1},e.prototype.updateTransform=function(){this.validate(),this.containerUpdateTransform()},e.prototype._render=function(t){this._autoResolution&&this._resolution!==t.resolution&&(this._resolution=t.resolution,this.dirty=!0);var n=rr.available[this._fontName],i=n.distanceFieldRange,o=n.distanceFieldType,a=n.size;if(o!=="none")for(var s=this.worldTransform,u=s.a,l=s.b,f=s.c,c=s.d,h=Math.sqrt(u*u+l*l),d=Math.sqrt(f*f+c*c),p=(Math.abs(h)+Math.abs(d))/2,v=this.fontSize/a,y=0,m=this._activePagesMeshData;y<m.length;y++){var g=m[y];g.mesh.shader.uniforms.uFWidth=p*i*v*this._resolution}r.prototype._render.call(this,t)},e.prototype.getLocalBounds=function(){return this.validate(),r.prototype.getLocalBounds.call(this)},e.prototype.validate=function(){var t=rr.available[this._fontName];if(!t)throw new Error('Missing BitmapFont "'+this._fontName+'"');this._font!==t&&(this.dirty=!0),this.dirty&&this.updateText()},Object.defineProperty(e.prototype,"tint",{get:function(){return this._tint},set:function(t){if(this._tint!==t){this._tint=t;for(var n=0;n<this._activePagesMeshData.length;n++)this._activePagesMeshData[n].mesh.tint=t}},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"align",{get:function(){return this._align},set:function(t){this._align!==t&&(this._align=t,this.dirty=!0)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"fontName",{get:function(){return this._fontName},set:function(t){if(!rr.available[t])throw new Error('Missing BitmapFont "'+t+'"');this._fontName!==t&&(this._fontName=t,this.dirty=!0)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"fontSize",{get:function(){var t;return(t=this._fontSize)!==null&&t!==void 0?t:rr.available[this._fontName].size},set:function(t){this._fontSize!==t&&(this._fontSize=t,this.dirty=!0)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"anchor",{get:function(){return this._anchor},set:function(t){typeof t=="number"?this._anchor.set(t):this._anchor.copyFrom(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"text",{get:function(){return this._text},set:function(t){t=String(t??""),this._text!==t&&(this._text=t,this.dirty=!0)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"maxWidth",{get:function(){return this._maxWidth},set:function(t){this._maxWidth!==t&&(this._maxWidth=t,this.dirty=!0)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"maxLineHeight",{get:function(){return this.validate(),this._maxLineHeight},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"textWidth",{get:function(){return this.validate(),this._textWidth},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"letterSpacing",{get:function(){return this._letterSpacing},set:function(t){this._letterSpacing!==t&&(this._letterSpacing=t,this.dirty=!0)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"roundPixels",{get:function(){return this._roundPixels},set:function(t){t!==this._roundPixels&&(this._roundPixels=t,this.dirty=!0)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"textHeight",{get:function(){return this.validate(),this._textHeight},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"resolution",{get:function(){return this._resolution},set:function(t){this._autoResolution=!1,this._resolution!==t&&(this._resolution=t,this.dirty=!0)},enumerable:!1,configurable:!0}),e.prototype.destroy=function(t){var n=this._textureCache,i=rr.available[this._fontName],o=i.distanceFieldType==="none"?Hy:Xy;o.push.apply(o,this._activePagesMeshData);for(var a=0,s=this._activePagesMeshData;a<s.length;a++){var u=s[a];this.removeChild(u.mesh)}this._activePagesMeshData=[],o.filter(function(c){return n[c.mesh.texture.baseTexture.uid]}).forEach(function(c){c.mesh.texture=G.EMPTY});for(var l in n){var f=n[l];f.destroy(),delete n[l]}this._font=null,this._textureCache=null,r.prototype.destroy.call(this,t)},e.styleDefaults={align:"left",tint:16777215,maxWidth:0,letterSpacing:0},e}($t),Dx=function(){function r(){}return r.add=function(){yt.setExtensionXhrType("fnt",yt.XHR_RESPONSE_TYPE.TEXT)},r.use=function(e,t){var n=Pp(e.data);if(!n){t();return}for(var i=r.getBaseUrl(this,e),o=n.parse(e.data),a={},s=function(v){a[v.metadata.pageFile]=v.texture,Object.keys(a).length===o.page.length&&(e.bitmapFont=rr.install(o,a,!0),t())},u=0;u<o.page.length;++u){var l=o.page[u].file,f=i+l,c=!1;for(var h in this.resources){var d=this.resources[h];if(d.url===f){d.metadata.pageFile=l,d.texture?s(d):d.onAfterMiddleware.add(s),c=!0;break}}if(!c){var p={crossOrigin:e.crossOrigin,loadType:yt.LOAD_TYPE.IMAGE,metadata:Object.assign({pageFile:l},e.metadata.imageMetadata),parentResource:e};this.add(f,p,s)}}},r.getBaseUrl=function(e,t){var n=t.isDataUrl?"":r.dirname(t.url);return t.isDataUrl&&(n==="."&&(n=""),e.baseUrl&&n&&e.baseUrl.charAt(e.baseUrl.length-1)==="/"&&(n+="/")),n=n.replace(e.baseUrl,""),n&&n.charAt(n.length-1)!=="/"&&(n+="/"),n},r.dirname=function(e){var t=e.replace(/\\/g,"/").replace(/\/$/,"").replace(/\/[^\/]*$/,"");return t===e?".":t===""?"/":t},r.extension=rt.Loader,r}();/*!
 * @pixi/filter-alpha - v6.5.10
 * Compiled Thu, 06 Jul 2023 15:25:11 UTC
 *
 * @pixi/filter-alpha is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Qh=function(r,e){return Qh=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)n.hasOwnProperty(i)&&(t[i]=n[i])},Qh(r,e)};function cD(r,e){Qh(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var dD=`varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform float uAlpha;

void main(void)
{
   gl_FragColor = texture2D(uSampler, vTextureCoord) * uAlpha;
}
`,Fx=function(r){cD(e,r);function e(t){t===void 0&&(t=1);var n=r.call(this,Gb,dD,{uAlpha:1})||this;return n.alpha=t,n}return Object.defineProperty(e.prototype,"alpha",{get:function(){return this.uniforms.uAlpha},set:function(t){this.uniforms.uAlpha=t},enumerable:!1,configurable:!0}),e}(k);/*!
 * @pixi/filter-blur - v6.5.10
 * Compiled Thu, 06 Jul 2023 15:25:11 UTC
 *
 * @pixi/filter-blur is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var tc=function(r,e){return tc=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)n.hasOwnProperty(i)&&(t[i]=n[i])},tc(r,e)};function Nx(r,e){tc(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var pD=`
    attribute vec2 aVertexPosition;

    uniform mat3 projectionMatrix;

    uniform float strength;

    varying vec2 vBlurTexCoords[%size%];

    uniform vec4 inputSize;
    uniform vec4 outputFrame;

    vec4 filterVertexPosition( void )
    {
        vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;

        return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);
    }

    vec2 filterTextureCoord( void )
    {
        return aVertexPosition * (outputFrame.zw * inputSize.zw);
    }

    void main(void)
    {
        gl_Position = filterVertexPosition();

        vec2 textureCoord = filterTextureCoord();
        %blur%
    }`;function vD(r,e){var t=Math.ceil(r/2),n=pD,i="",o;e?o="vBlurTexCoords[%index%] =  textureCoord + vec2(%sampleIndex% * strength, 0.0);":o="vBlurTexCoords[%index%] =  textureCoord + vec2(0.0, %sampleIndex% * strength);";for(var a=0;a<r;a++){var s=o.replace("%index%",a.toString());s=s.replace("%sampleIndex%",a-(t-1)+".0"),i+=s,i+=`
`}return n=n.replace("%blur%",i),n=n.replace("%size%",r.toString()),n}var yD={5:[.153388,.221461,.250301],7:[.071303,.131514,.189879,.214607],9:[.028532,.067234,.124009,.179044,.20236],11:[.0093,.028002,.065984,.121703,.175713,.198596],13:[.002406,.009255,.027867,.065666,.121117,.174868,.197641],15:[489e-6,.002403,.009246,.02784,.065602,.120999,.174697,.197448]},mD=["varying vec2 vBlurTexCoords[%size%];","uniform sampler2D uSampler;","void main(void)","{","    gl_FragColor = vec4(0.0);","    %blur%","}"].join(`
`);function _D(r){for(var e=yD[r],t=e.length,n=mD,i="",o="gl_FragColor += texture2D(uSampler, vBlurTexCoords[%index%]) * %value%;",a,s=0;s<r;s++){var u=o.replace("%index%",s.toString());a=s,s>=t&&(a=r-s-1),u=u.replace("%value%",e[a].toString()),i+=u,i+=`
`}return n=n.replace("%blur%",i),n=n.replace("%size%",r.toString()),n}var To=function(r){Nx(e,r);function e(t,n,i,o,a){n===void 0&&(n=8),i===void 0&&(i=4),o===void 0&&(o=C.FILTER_RESOLUTION),a===void 0&&(a=5);var s=this,u=vD(a,t),l=_D(a);return s=r.call(this,u,l)||this,s.horizontal=t,s.resolution=o,s._quality=0,s.quality=i,s.blur=n,s}return e.prototype.apply=function(t,n,i,o){if(i?this.horizontal?this.uniforms.strength=1/i.width*(i.width/n.width):this.uniforms.strength=1/i.height*(i.height/n.height):this.horizontal?this.uniforms.strength=1/t.renderer.width*(t.renderer.width/n.width):this.uniforms.strength=1/t.renderer.height*(t.renderer.height/n.height),this.uniforms.strength*=this.strength,this.uniforms.strength/=this.passes,this.passes===1)t.applyFilter(this,n,i,o);else{var a=t.getFilterTexture(),s=t.renderer,u=n,l=a;this.state.blend=!1,t.applyFilter(this,u,l,se.CLEAR);for(var f=1;f<this.passes-1;f++){t.bindAndClear(u,se.BLIT),this.uniforms.uSampler=l;var c=l;l=u,u=c,s.shader.bind(this),s.geometry.draw(5)}this.state.blend=!0,t.applyFilter(this,l,i,o),t.returnFilterTexture(a)}},Object.defineProperty(e.prototype,"blur",{get:function(){return this.strength},set:function(t){this.padding=1+Math.abs(t)*2,this.strength=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"quality",{get:function(){return this._quality},set:function(t){this._quality=t,this.passes=t},enumerable:!1,configurable:!0}),e}(k),gD=function(r){Nx(e,r);function e(t,n,i,o){t===void 0&&(t=8),n===void 0&&(n=4),i===void 0&&(i=C.FILTER_RESOLUTION),o===void 0&&(o=5);var a=r.call(this)||this;return a.blurXFilter=new To(!0,t,n,i,o),a.blurYFilter=new To(!1,t,n,i,o),a.resolution=i,a.quality=n,a.blur=t,a.repeatEdgePixels=!1,a}return e.prototype.apply=function(t,n,i,o){var a=Math.abs(this.blurXFilter.strength),s=Math.abs(this.blurYFilter.strength);if(a&&s){var u=t.getFilterTexture();this.blurXFilter.apply(t,n,u,se.CLEAR),this.blurYFilter.apply(t,u,i,o),t.returnFilterTexture(u)}else s?this.blurYFilter.apply(t,n,i,o):this.blurXFilter.apply(t,n,i,o)},e.prototype.updatePadding=function(){this._repeatEdgePixels?this.padding=0:this.padding=Math.max(Math.abs(this.blurXFilter.strength),Math.abs(this.blurYFilter.strength))*2},Object.defineProperty(e.prototype,"blur",{get:function(){return this.blurXFilter.blur},set:function(t){this.blurXFilter.blur=this.blurYFilter.blur=t,this.updatePadding()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"quality",{get:function(){return this.blurXFilter.quality},set:function(t){this.blurXFilter.quality=this.blurYFilter.quality=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"blurX",{get:function(){return this.blurXFilter.blur},set:function(t){this.blurXFilter.blur=t,this.updatePadding()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"blurY",{get:function(){return this.blurYFilter.blur},set:function(t){this.blurYFilter.blur=t,this.updatePadding()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"blendMode",{get:function(){return this.blurYFilter.blendMode},set:function(t){this.blurYFilter.blendMode=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"repeatEdgePixels",{get:function(){return this._repeatEdgePixels},set:function(t){this._repeatEdgePixels=t,this.updatePadding()},enumerable:!1,configurable:!0}),e}(k);/*!
 * @pixi/filter-color-matrix - v6.5.10
 * Compiled Thu, 06 Jul 2023 15:25:11 UTC
 *
 * @pixi/filter-color-matrix is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var ec=function(r,e){return ec=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)n.hasOwnProperty(i)&&(t[i]=n[i])},ec(r,e)};function bD(r,e){ec(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var xD=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform float m[20];
uniform float uAlpha;

void main(void)
{
    vec4 c = texture2D(uSampler, vTextureCoord);

    if (uAlpha == 0.0) {
        gl_FragColor = c;
        return;
    }

    // Un-premultiply alpha before applying the color matrix. See issue #3539.
    if (c.a > 0.0) {
      c.rgb /= c.a;
    }

    vec4 result;

    result.r = (m[0] * c.r);
        result.r += (m[1] * c.g);
        result.r += (m[2] * c.b);
        result.r += (m[3] * c.a);
        result.r += m[4];

    result.g = (m[5] * c.r);
        result.g += (m[6] * c.g);
        result.g += (m[7] * c.b);
        result.g += (m[8] * c.a);
        result.g += m[9];

    result.b = (m[10] * c.r);
       result.b += (m[11] * c.g);
       result.b += (m[12] * c.b);
       result.b += (m[13] * c.a);
       result.b += m[14];

    result.a = (m[15] * c.r);
       result.a += (m[16] * c.g);
       result.a += (m[17] * c.b);
       result.a += (m[18] * c.a);
       result.a += m[19];

    vec3 rgb = mix(c.rgb, result.rgb, uAlpha);

    // Premultiply alpha again.
    rgb *= result.a;

    gl_FragColor = vec4(rgb, result.a);
}
`,rc=function(r){bD(e,r);function e(){var t=this,n={m:new Float32Array([1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0]),uAlpha:1};return t=r.call(this,gp,xD,n)||this,t.alpha=1,t}return e.prototype._loadMatrix=function(t,n){n===void 0&&(n=!1);var i=t;n&&(this._multiply(i,this.uniforms.m,t),i=this._colorMatrix(i)),this.uniforms.m=i},e.prototype._multiply=function(t,n,i){return t[0]=n[0]*i[0]+n[1]*i[5]+n[2]*i[10]+n[3]*i[15],t[1]=n[0]*i[1]+n[1]*i[6]+n[2]*i[11]+n[3]*i[16],t[2]=n[0]*i[2]+n[1]*i[7]+n[2]*i[12]+n[3]*i[17],t[3]=n[0]*i[3]+n[1]*i[8]+n[2]*i[13]+n[3]*i[18],t[4]=n[0]*i[4]+n[1]*i[9]+n[2]*i[14]+n[3]*i[19]+n[4],t[5]=n[5]*i[0]+n[6]*i[5]+n[7]*i[10]+n[8]*i[15],t[6]=n[5]*i[1]+n[6]*i[6]+n[7]*i[11]+n[8]*i[16],t[7]=n[5]*i[2]+n[6]*i[7]+n[7]*i[12]+n[8]*i[17],t[8]=n[5]*i[3]+n[6]*i[8]+n[7]*i[13]+n[8]*i[18],t[9]=n[5]*i[4]+n[6]*i[9]+n[7]*i[14]+n[8]*i[19]+n[9],t[10]=n[10]*i[0]+n[11]*i[5]+n[12]*i[10]+n[13]*i[15],t[11]=n[10]*i[1]+n[11]*i[6]+n[12]*i[11]+n[13]*i[16],t[12]=n[10]*i[2]+n[11]*i[7]+n[12]*i[12]+n[13]*i[17],t[13]=n[10]*i[3]+n[11]*i[8]+n[12]*i[13]+n[13]*i[18],t[14]=n[10]*i[4]+n[11]*i[9]+n[12]*i[14]+n[13]*i[19]+n[14],t[15]=n[15]*i[0]+n[16]*i[5]+n[17]*i[10]+n[18]*i[15],t[16]=n[15]*i[1]+n[16]*i[6]+n[17]*i[11]+n[18]*i[16],t[17]=n[15]*i[2]+n[16]*i[7]+n[17]*i[12]+n[18]*i[17],t[18]=n[15]*i[3]+n[16]*i[8]+n[17]*i[13]+n[18]*i[18],t[19]=n[15]*i[4]+n[16]*i[9]+n[17]*i[14]+n[18]*i[19]+n[19],t},e.prototype._colorMatrix=function(t){var n=new Float32Array(t);return n[4]/=255,n[9]/=255,n[14]/=255,n[19]/=255,n},e.prototype.brightness=function(t,n){var i=[t,0,0,0,0,0,t,0,0,0,0,0,t,0,0,0,0,0,1,0];this._loadMatrix(i,n)},e.prototype.tint=function(t,n){var i=t>>16&255,o=t>>8&255,a=t&255,s=[i/255,0,0,0,0,0,o/255,0,0,0,0,0,a/255,0,0,0,0,0,1,0];this._loadMatrix(s,n)},e.prototype.greyscale=function(t,n){var i=[t,t,t,0,0,t,t,t,0,0,t,t,t,0,0,0,0,0,1,0];this._loadMatrix(i,n)},e.prototype.blackAndWhite=function(t){var n=[.3,.6,.1,0,0,.3,.6,.1,0,0,.3,.6,.1,0,0,0,0,0,1,0];this._loadMatrix(n,t)},e.prototype.hue=function(t,n){t=(t||0)/180*Math.PI;var i=Math.cos(t),o=Math.sin(t),a=Math.sqrt,s=1/3,u=a(s),l=i+(1-i)*s,f=s*(1-i)-u*o,c=s*(1-i)+u*o,h=s*(1-i)+u*o,d=i+s*(1-i),p=s*(1-i)-u*o,v=s*(1-i)-u*o,y=s*(1-i)+u*o,m=i+s*(1-i),g=[l,f,c,0,0,h,d,p,0,0,v,y,m,0,0,0,0,0,1,0];this._loadMatrix(g,n)},e.prototype.contrast=function(t,n){var i=(t||0)+1,o=-.5*(i-1),a=[i,0,0,0,o,0,i,0,0,o,0,0,i,0,o,0,0,0,1,0];this._loadMatrix(a,n)},e.prototype.saturate=function(t,n){t===void 0&&(t=0);var i=t*2/3+1,o=(i-1)*-.5,a=[i,o,o,0,0,o,i,o,0,0,o,o,i,0,0,0,0,0,1,0];this._loadMatrix(a,n)},e.prototype.desaturate=function(){this.saturate(-1)},e.prototype.negative=function(t){var n=[-1,0,0,1,0,0,-1,0,1,0,0,0,-1,1,0,0,0,0,1,0];this._loadMatrix(n,t)},e.prototype.sepia=function(t){var n=[.393,.7689999,.18899999,0,0,.349,.6859999,.16799999,0,0,.272,.5339999,.13099999,0,0,0,0,0,1,0];this._loadMatrix(n,t)},e.prototype.technicolor=function(t){var n=[1.9125277891456083,-.8545344976951645,-.09155508482755585,0,11.793603434377337,-.3087833385928097,1.7658908555458428,-.10601743074722245,0,-70.35205161461398,-.231103377548616,-.7501899197440212,1.847597816108189,0,30.950940869491138,0,0,0,1,0];this._loadMatrix(n,t)},e.prototype.polaroid=function(t){var n=[1.438,-.062,-.062,0,0,-.122,1.378,-.122,0,0,-.016,-.016,1.483,0,0,0,0,0,1,0];this._loadMatrix(n,t)},e.prototype.toBGR=function(t){var n=[0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0];this._loadMatrix(n,t)},e.prototype.kodachrome=function(t){var n=[1.1285582396593525,-.3967382283601348,-.03992559172921793,0,63.72958762196502,-.16404339962244616,1.0835251566291304,-.05498805115633132,0,24.732407896706203,-.16786010706155763,-.5603416277695248,1.6014850761964943,0,35.62982807460946,0,0,0,1,0];this._loadMatrix(n,t)},e.prototype.browni=function(t){var n=[.5997023498159715,.34553243048391263,-.2708298674538042,0,47.43192855600873,-.037703249837783157,.8609577587992641,.15059552388459913,0,-36.96841498319127,.24113635128153335,-.07441037908422492,.44972182064877153,0,-7.562075277591283,0,0,0,1,0];this._loadMatrix(n,t)},e.prototype.vintage=function(t){var n=[.6279345635605994,.3202183420819367,-.03965408211312453,0,9.651285835294123,.02578397704808868,.6441188644374771,.03259127616149294,0,7.462829176470591,.0466055556782719,-.0851232987247891,.5241648018700465,0,5.159190588235296,0,0,0,1,0];this._loadMatrix(n,t)},e.prototype.colorTone=function(t,n,i,o,a){t=t||.2,n=n||.15,i=i||16770432,o=o||3375104;var s=(i>>16&255)/255,u=(i>>8&255)/255,l=(i&255)/255,f=(o>>16&255)/255,c=(o>>8&255)/255,h=(o&255)/255,d=[.3,.59,.11,0,0,s,u,l,t,0,f,c,h,n,0,s-f,u-c,l-h,0,0];this._loadMatrix(d,a)},e.prototype.night=function(t,n){t=t||.1;var i=[t*-2,-t,0,0,0,-t,0,t,0,0,0,t,t*2,0,0,0,0,0,1,0];this._loadMatrix(i,n)},e.prototype.predator=function(t,n){var i=[11.224130630493164*t,-4.794486999511719*t,-2.8746118545532227*t,0*t,.40342438220977783*t,-3.6330697536468506*t,9.193157196044922*t,-2.951810836791992*t,0*t,-1.316135048866272*t,-3.2184197902679443*t,-4.2375030517578125*t,7.476448059082031*t,0*t,.8044459223747253*t,0,0,0,1,0];this._loadMatrix(i,n)},e.prototype.lsd=function(t){var n=[2,-.4,.5,0,0,-.5,2,-.4,0,0,-.4,-.5,3,0,0,0,0,0,1,0];this._loadMatrix(n,t)},e.prototype.reset=function(){var t=[1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0];this._loadMatrix(t,!1)},Object.defineProperty(e.prototype,"matrix",{get:function(){return this.uniforms.m},set:function(t){this.uniforms.m=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"alpha",{get:function(){return this.uniforms.uAlpha},set:function(t){this.uniforms.uAlpha=t},enumerable:!1,configurable:!0}),e}(k);rc.prototype.grayscale=rc.prototype.greyscale;/*!
 * @pixi/filter-displacement - v6.5.10
 * Compiled Thu, 06 Jul 2023 15:25:11 UTC
 *
 * @pixi/filter-displacement is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var nc=function(r,e){return nc=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)n.hasOwnProperty(i)&&(t[i]=n[i])},nc(r,e)};function TD(r,e){nc(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var SD=`varying vec2 vFilterCoord;
varying vec2 vTextureCoord;

uniform vec2 scale;
uniform mat2 rotation;
uniform sampler2D uSampler;
uniform sampler2D mapSampler;

uniform highp vec4 inputSize;
uniform vec4 inputClamp;

void main(void)
{
  vec4 map =  texture2D(mapSampler, vFilterCoord);

  map -= 0.5;
  map.xy = scale * inputSize.zw * (rotation * map.xy);

  gl_FragColor = texture2D(uSampler, clamp(vec2(vTextureCoord.x + map.x, vTextureCoord.y + map.y), inputClamp.xy, inputClamp.zw));
}
`,ED=`attribute vec2 aVertexPosition;

uniform mat3 projectionMatrix;
uniform mat3 filterMatrix;

varying vec2 vTextureCoord;
varying vec2 vFilterCoord;

uniform vec4 inputSize;
uniform vec4 outputFrame;

vec4 filterVertexPosition( void )
{
    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;

    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);
}

vec2 filterTextureCoord( void )
{
    return aVertexPosition * (outputFrame.zw * inputSize.zw);
}

void main(void)
{
	gl_Position = filterVertexPosition();
	vTextureCoord = filterTextureCoord();
	vFilterCoord = ( filterMatrix * vec3( vTextureCoord, 1.0)  ).xy;
}
`,wD=function(r){TD(e,r);function e(t,n){var i=this,o=new Pt;return t.renderable=!1,i=r.call(this,ED,SD,{mapSampler:t._texture,filterMatrix:o,scale:{x:1,y:1},rotation:new Float32Array([1,0,0,1])})||this,i.maskSprite=t,i.maskMatrix=o,n==null&&(n=20),i.scale=new X(n,n),i}return e.prototype.apply=function(t,n,i,o){this.uniforms.filterMatrix=t.calculateSpriteMatrix(this.maskMatrix,this.maskSprite),this.uniforms.scale.x=this.scale.x,this.uniforms.scale.y=this.scale.y;var a=this.maskSprite.worldTransform,s=Math.sqrt(a.a*a.a+a.b*a.b),u=Math.sqrt(a.c*a.c+a.d*a.d);s!==0&&u!==0&&(this.uniforms.rotation[0]=a.a/s,this.uniforms.rotation[1]=a.b/s,this.uniforms.rotation[2]=a.c/u,this.uniforms.rotation[3]=a.d/u),t.applyFilter(this,n,i,o)},Object.defineProperty(e.prototype,"map",{get:function(){return this.uniforms.mapSampler},set:function(t){this.uniforms.mapSampler=t},enumerable:!1,configurable:!0}),e}(k);/*!
 * @pixi/filter-fxaa - v6.5.10
 * Compiled Thu, 06 Jul 2023 15:25:11 UTC
 *
 * @pixi/filter-fxaa is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var ic=function(r,e){return ic=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)n.hasOwnProperty(i)&&(t[i]=n[i])},ic(r,e)};function OD(r,e){ic(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var PD=`
attribute vec2 aVertexPosition;

uniform mat3 projectionMatrix;

varying vec2 v_rgbNW;
varying vec2 v_rgbNE;
varying vec2 v_rgbSW;
varying vec2 v_rgbSE;
varying vec2 v_rgbM;

varying vec2 vFragCoord;

uniform vec4 inputSize;
uniform vec4 outputFrame;

vec4 filterVertexPosition( void )
{
    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;

    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);
}

void texcoords(vec2 fragCoord, vec2 inverseVP,
               out vec2 v_rgbNW, out vec2 v_rgbNE,
               out vec2 v_rgbSW, out vec2 v_rgbSE,
               out vec2 v_rgbM) {
    v_rgbNW = (fragCoord + vec2(-1.0, -1.0)) * inverseVP;
    v_rgbNE = (fragCoord + vec2(1.0, -1.0)) * inverseVP;
    v_rgbSW = (fragCoord + vec2(-1.0, 1.0)) * inverseVP;
    v_rgbSE = (fragCoord + vec2(1.0, 1.0)) * inverseVP;
    v_rgbM = vec2(fragCoord * inverseVP);
}

void main(void) {

   gl_Position = filterVertexPosition();

   vFragCoord = aVertexPosition * outputFrame.zw;

   texcoords(vFragCoord, inputSize.zw, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);
}
`,AD=`varying vec2 v_rgbNW;
varying vec2 v_rgbNE;
varying vec2 v_rgbSW;
varying vec2 v_rgbSE;
varying vec2 v_rgbM;

varying vec2 vFragCoord;
uniform sampler2D uSampler;
uniform highp vec4 inputSize;


/**
 Basic FXAA implementation based on the code on geeks3d.com with the
 modification that the texture2DLod stuff was removed since it's
 unsupported by WebGL.

 --

 From:
 https://github.com/mitsuhiko/webgl-meincraft

 Copyright (c) 2011 by Armin Ronacher.

 Some rights reserved.

 Redistribution and use in source and binary forms, with or without
 modification, are permitted provided that the following conditions are
 met:

 * Redistributions of source code must retain the above copyright
 notice, this list of conditions and the following disclaimer.

 * Redistributions in binary form must reproduce the above
 copyright notice, this list of conditions and the following
 disclaimer in the documentation and/or other materials provided
 with the distribution.

 * The names of the contributors may not be used to endorse or
 promote products derived from this software without specific
 prior written permission.

 THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

#ifndef FXAA_REDUCE_MIN
#define FXAA_REDUCE_MIN   (1.0/ 128.0)
#endif
#ifndef FXAA_REDUCE_MUL
#define FXAA_REDUCE_MUL   (1.0 / 8.0)
#endif
#ifndef FXAA_SPAN_MAX
#define FXAA_SPAN_MAX     8.0
#endif

//optimized version for mobile, where dependent
//texture reads can be a bottleneck
vec4 fxaa(sampler2D tex, vec2 fragCoord, vec2 inverseVP,
          vec2 v_rgbNW, vec2 v_rgbNE,
          vec2 v_rgbSW, vec2 v_rgbSE,
          vec2 v_rgbM) {
    vec4 color;
    vec3 rgbNW = texture2D(tex, v_rgbNW).xyz;
    vec3 rgbNE = texture2D(tex, v_rgbNE).xyz;
    vec3 rgbSW = texture2D(tex, v_rgbSW).xyz;
    vec3 rgbSE = texture2D(tex, v_rgbSE).xyz;
    vec4 texColor = texture2D(tex, v_rgbM);
    vec3 rgbM  = texColor.xyz;
    vec3 luma = vec3(0.299, 0.587, 0.114);
    float lumaNW = dot(rgbNW, luma);
    float lumaNE = dot(rgbNE, luma);
    float lumaSW = dot(rgbSW, luma);
    float lumaSE = dot(rgbSE, luma);
    float lumaM  = dot(rgbM,  luma);
    float lumaMin = min(lumaM, min(min(lumaNW, lumaNE), min(lumaSW, lumaSE)));
    float lumaMax = max(lumaM, max(max(lumaNW, lumaNE), max(lumaSW, lumaSE)));

    mediump vec2 dir;
    dir.x = -((lumaNW + lumaNE) - (lumaSW + lumaSE));
    dir.y =  ((lumaNW + lumaSW) - (lumaNE + lumaSE));

    float dirReduce = max((lumaNW + lumaNE + lumaSW + lumaSE) *
                          (0.25 * FXAA_REDUCE_MUL), FXAA_REDUCE_MIN);

    float rcpDirMin = 1.0 / (min(abs(dir.x), abs(dir.y)) + dirReduce);
    dir = min(vec2(FXAA_SPAN_MAX, FXAA_SPAN_MAX),
              max(vec2(-FXAA_SPAN_MAX, -FXAA_SPAN_MAX),
                  dir * rcpDirMin)) * inverseVP;

    vec3 rgbA = 0.5 * (
                       texture2D(tex, fragCoord * inverseVP + dir * (1.0 / 3.0 - 0.5)).xyz +
                       texture2D(tex, fragCoord * inverseVP + dir * (2.0 / 3.0 - 0.5)).xyz);
    vec3 rgbB = rgbA * 0.5 + 0.25 * (
                                     texture2D(tex, fragCoord * inverseVP + dir * -0.5).xyz +
                                     texture2D(tex, fragCoord * inverseVP + dir * 0.5).xyz);

    float lumaB = dot(rgbB, luma);
    if ((lumaB < lumaMin) || (lumaB > lumaMax))
        color = vec4(rgbA, texColor.a);
    else
        color = vec4(rgbB, texColor.a);
    return color;
}

void main() {

      vec4 color;

      color = fxaa(uSampler, vFragCoord, inputSize.zw, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);

      gl_FragColor = color;
}
`,CD=function(r){OD(e,r);function e(){return r.call(this,PD,AD)||this}return e}(k);/*!
 * @pixi/filter-noise - v6.5.10
 * Compiled Thu, 06 Jul 2023 15:25:11 UTC
 *
 * @pixi/filter-noise is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var oc=function(r,e){return oc=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)n.hasOwnProperty(i)&&(t[i]=n[i])},oc(r,e)};function RD(r,e){oc(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var ID=`precision highp float;

varying vec2 vTextureCoord;
varying vec4 vColor;

uniform float uNoise;
uniform float uSeed;
uniform sampler2D uSampler;

float rand(vec2 co)
{
    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

void main()
{
    vec4 color = texture2D(uSampler, vTextureCoord);
    float randomValue = rand(gl_FragCoord.xy * uSeed);
    float diff = (randomValue - 0.5) * uNoise;

    // Un-premultiply alpha before applying the color matrix. See issue #3539.
    if (color.a > 0.0) {
        color.rgb /= color.a;
    }

    color.r += diff;
    color.g += diff;
    color.b += diff;

    // Premultiply alpha again.
    color.rgb *= color.a;

    gl_FragColor = color;
}
`,MD=function(r){RD(e,r);function e(t,n){t===void 0&&(t=.5),n===void 0&&(n=Math.random());var i=r.call(this,gp,ID,{uNoise:0,uSeed:0})||this;return i.noise=t,i.seed=n,i}return Object.defineProperty(e.prototype,"noise",{get:function(){return this.uniforms.uNoise},set:function(t){this.uniforms.uNoise=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"seed",{get:function(){return this.uniforms.uSeed},set:function(t){this.uniforms.uSeed=t},enumerable:!1,configurable:!0}),e}(k);/*!
 * @pixi/mixin-cache-as-bitmap - v6.5.10
 * Compiled Thu, 06 Jul 2023 15:25:11 UTC
 *
 * @pixi/mixin-cache-as-bitmap is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */var Lx=new Pt;_t.prototype._cacheAsBitmap=!1;_t.prototype._cacheData=null;_t.prototype._cacheAsBitmapResolution=null;_t.prototype._cacheAsBitmapMultisample=lt.NONE;var DD=function(){function r(){this.textureCacheId=null,this.originalRender=null,this.originalRenderCanvas=null,this.originalCalculateBounds=null,this.originalGetLocalBounds=null,this.originalUpdateTransform=null,this.originalDestroy=null,this.originalMask=null,this.originalFilterArea=null,this.originalContainsPoint=null,this.sprite=null}return r}();Object.defineProperties(_t.prototype,{cacheAsBitmapResolution:{get:function(){return this._cacheAsBitmapResolution},set:function(r){r!==this._cacheAsBitmapResolution&&(this._cacheAsBitmapResolution=r,this.cacheAsBitmap&&(this.cacheAsBitmap=!1,this.cacheAsBitmap=!0))}},cacheAsBitmapMultisample:{get:function(){return this._cacheAsBitmapMultisample},set:function(r){r!==this._cacheAsBitmapMultisample&&(this._cacheAsBitmapMultisample=r,this.cacheAsBitmap&&(this.cacheAsBitmap=!1,this.cacheAsBitmap=!0))}},cacheAsBitmap:{get:function(){return this._cacheAsBitmap},set:function(r){if(this._cacheAsBitmap!==r){this._cacheAsBitmap=r;var e;r?(this._cacheData||(this._cacheData=new DD),e=this._cacheData,e.originalRender=this.render,e.originalRenderCanvas=this.renderCanvas,e.originalUpdateTransform=this.updateTransform,e.originalCalculateBounds=this.calculateBounds,e.originalGetLocalBounds=this.getLocalBounds,e.originalDestroy=this.destroy,e.originalContainsPoint=this.containsPoint,e.originalMask=this._mask,e.originalFilterArea=this.filterArea,this.render=this._renderCached,this.renderCanvas=this._renderCachedCanvas,this.destroy=this._cacheAsBitmapDestroy):(e=this._cacheData,e.sprite&&this._destroyCachedDisplayObject(),this.render=e.originalRender,this.renderCanvas=e.originalRenderCanvas,this.calculateBounds=e.originalCalculateBounds,this.getLocalBounds=e.originalGetLocalBounds,this.destroy=e.originalDestroy,this.updateTransform=e.originalUpdateTransform,this.containsPoint=e.originalContainsPoint,this._mask=e.originalMask,this.filterArea=e.originalFilterArea)}}}});_t.prototype._renderCached=function(e){!this.visible||this.worldAlpha<=0||!this.renderable||(this._initCachedDisplayObject(e),this._cacheData.sprite.transform._worldID=this.transform._worldID,this._cacheData.sprite.worldAlpha=this.worldAlpha,this._cacheData.sprite._render(e))};_t.prototype._initCachedDisplayObject=function(e){var t;if(!(this._cacheData&&this._cacheData.sprite)){var n=this.alpha;this.alpha=1,e.batch.flush();var i=this.getLocalBounds(null,!0).clone();if(this.filters&&this.filters.length){var o=this.filters[0].padding;i.pad(o)}i.ceil(C.RESOLUTION);var a=e.renderTexture.current,s=e.renderTexture.sourceFrame.clone(),u=e.renderTexture.destinationFrame.clone(),l=e.projection.transform,f=Pr.create({width:i.width,height:i.height,resolution:this.cacheAsBitmapResolution||e.resolution,multisample:(t=this.cacheAsBitmapMultisample)!==null&&t!==void 0?t:e.multisample}),c="cacheAsBitmap_"+wr();this._cacheData.textureCacheId=c,q.addToCache(f.baseTexture,c),G.addToCache(f,c);var h=this.transform.localTransform.copyTo(Lx).invert().translate(-i.x,-i.y);this.render=this._cacheData.originalRender,e.render(this,{renderTexture:f,clear:!0,transform:h,skipUpdateTransform:!1}),e.framebuffer.blit(),e.projection.transform=l,e.renderTexture.bind(a,s,u),this.render=this._renderCached,this.updateTransform=this.displayObjectUpdateTransform,this.calculateBounds=this._calculateCachedBounds,this.getLocalBounds=this._getCachedLocalBounds,this._mask=null,this.filterArea=null,this.alpha=n;var d=new Jt(f);d.transform.worldTransform=this.transform.worldTransform,d.anchor.x=-(i.x/i.width),d.anchor.y=-(i.y/i.height),d.alpha=n,d._bounds=this._bounds,this._cacheData.sprite=d,this.transform._parentID=-1,this.parent?this.updateTransform():(this.enableTempParent(),this.updateTransform(),this.disableTempParent(null)),this.containsPoint=d.containsPoint.bind(d)}};_t.prototype._renderCachedCanvas=function(e){!this.visible||this.worldAlpha<=0||!this.renderable||(this._initCachedDisplayObjectCanvas(e),this._cacheData.sprite.worldAlpha=this.worldAlpha,this._cacheData.sprite._renderCanvas(e))};_t.prototype._initCachedDisplayObjectCanvas=function(e){if(!(this._cacheData&&this._cacheData.sprite)){var t=this.getLocalBounds(null,!0),n=this.alpha;this.alpha=1;var i=e.context,o=e._projTransform;t.ceil(C.RESOLUTION);var a=Pr.create({width:t.width,height:t.height}),s="cacheAsBitmap_"+wr();this._cacheData.textureCacheId=s,q.addToCache(a.baseTexture,s),G.addToCache(a,s);var u=Lx;this.transform.localTransform.copyTo(u),u.invert(),u.tx-=t.x,u.ty-=t.y,this.renderCanvas=this._cacheData.originalRenderCanvas,e.render(this,{renderTexture:a,clear:!0,transform:u,skipUpdateTransform:!1}),e.context=i,e._projTransform=o,this.renderCanvas=this._renderCachedCanvas,this.updateTransform=this.displayObjectUpdateTransform,this.calculateBounds=this._calculateCachedBounds,this.getLocalBounds=this._getCachedLocalBounds,this._mask=null,this.filterArea=null,this.alpha=n;var l=new Jt(a);l.transform.worldTransform=this.transform.worldTransform,l.anchor.x=-(t.x/t.width),l.anchor.y=-(t.y/t.height),l.alpha=n,l._bounds=this._bounds,this._cacheData.sprite=l,this.transform._parentID=-1,this.parent?this.updateTransform():(this.parent=e._tempDisplayObjectParent,this.updateTransform(),this.parent=null),this.containsPoint=l.containsPoint.bind(l)}};_t.prototype._calculateCachedBounds=function(){this._bounds.clear(),this._cacheData.sprite.transform._worldID=this.transform._worldID,this._cacheData.sprite._calculateBounds(),this._bounds.updateID=this._boundsID};_t.prototype._getCachedLocalBounds=function(){return this._cacheData.sprite.getLocalBounds(null)};_t.prototype._destroyCachedDisplayObject=function(){this._cacheData.sprite._texture.destroy(!0),this._cacheData.sprite=null,q.removeFromCache(this._cacheData.textureCacheId),G.removeFromCache(this._cacheData.textureCacheId),this._cacheData.textureCacheId=null};_t.prototype._cacheAsBitmapDestroy=function(e){this.cacheAsBitmap=!1,this.destroy(e)};/*!
 * @pixi/mixin-get-child-by-name - v6.5.10
 * Compiled Thu, 06 Jul 2023 15:25:11 UTC
 *
 * @pixi/mixin-get-child-by-name is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */_t.prototype.name=null;$t.prototype.getChildByName=function(e,t){for(var n=0,i=this.children.length;n<i;n++)if(this.children[n].name===e)return this.children[n];if(t)for(var n=0,i=this.children.length;n<i;n++){var o=this.children[n];if(o.getChildByName){var a=o.getChildByName(e,!0);if(a)return a}}return null};/*!
 * @pixi/mixin-get-global-position - v6.5.10
 * Compiled Thu, 06 Jul 2023 15:25:11 UTC
 *
 * @pixi/mixin-get-global-position is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */_t.prototype.getGlobalPosition=function(e,t){return e===void 0&&(e=new X),t===void 0&&(t=!1),this.parent?this.parent.toGlobal(this.position,e,t):(e.x=this.position.x,e.y=this.position.y),e};/*!
 * @pixi/app - v6.5.10
 * Compiled Thu, 06 Jul 2023 15:25:11 UTC
 *
 * @pixi/app is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */var Bx=function(){function r(){}return r.init=function(e){var t=this;Object.defineProperty(this,"resizeTo",{set:function(n){globalThis.removeEventListener("resize",this.queueResize),this._resizeTo=n,n&&(globalThis.addEventListener("resize",this.queueResize),this.resize())},get:function(){return this._resizeTo}}),this.queueResize=function(){t._resizeTo&&(t.cancelResize(),t._resizeId=requestAnimationFrame(function(){return t.resize()}))},this.cancelResize=function(){t._resizeId&&(cancelAnimationFrame(t._resizeId),t._resizeId=null)},this.resize=function(){if(t._resizeTo){t.cancelResize();var n,i;if(t._resizeTo===globalThis.window)n=globalThis.innerWidth,i=globalThis.innerHeight;else{var o=t._resizeTo,a=o.clientWidth,s=o.clientHeight;n=a,i=s}t.renderer.resize(n,i)}},this._resizeId=null,this._resizeTo=null,this.resizeTo=e.resizeTo||null},r.destroy=function(){globalThis.removeEventListener("resize",this.queueResize),this.cancelResize(),this.cancelResize=null,this.queueResize=null,this.resizeTo=null,this.resize=null},r.extension=rt.Application,r}(),Ux=function(){function r(e){var t=this;this.stage=new $t,e=Object.assign({forceCanvas:!1},e),this.renderer=Ub(e),r._plugins.forEach(function(n){n.init.call(t,e)})}return r.registerPlugin=function(e){Vt("6.5.0","Application.registerPlugin() is deprecated, use extensions.add()"),Qt.add({type:rt.Application,ref:e})},r.prototype.render=function(){this.renderer.render(this.stage)},Object.defineProperty(r.prototype,"view",{get:function(){return this.renderer.view},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"screen",{get:function(){return this.renderer.screen},enumerable:!1,configurable:!0}),r.prototype.destroy=function(e,t){var n=this,i=r._plugins.slice(0);i.reverse(),i.forEach(function(o){o.destroy.call(n)}),this.stage.destroy(t),this.stage=null,this.renderer.destroy(e),this.renderer=null},r._plugins=[],r}();Qt.handleByList(rt.Application,Ux._plugins);Qt.add(Bx);/*!
 * @pixi/mesh-extras - v6.5.10
 * Compiled Thu, 06 Jul 2023 15:25:11 UTC
 *
 * @pixi/mesh-extras is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var ac=function(r,e){return ac=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)n.hasOwnProperty(i)&&(t[i]=n[i])},ac(r,e)};function bi(r,e){ac(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var Gx=function(r){bi(e,r);function e(t,n,i,o){t===void 0&&(t=100),n===void 0&&(n=100),i===void 0&&(i=10),o===void 0&&(o=10);var a=r.call(this)||this;return a.segWidth=i,a.segHeight=o,a.width=t,a.height=n,a.build(),a}return e.prototype.build=function(){for(var t=this.segWidth*this.segHeight,n=[],i=[],o=[],a=this.segWidth-1,s=this.segHeight-1,u=this.width/a,l=this.height/s,f=0;f<t;f++){var c=f%this.segWidth,h=f/this.segWidth|0;n.push(c*u,h*l),i.push(c/a,h/s)}for(var d=a*s,f=0;f<d;f++){var p=f%a,v=f/a|0,y=v*this.segWidth+p,m=v*this.segWidth+p+1,g=(v+1)*this.segWidth+p,_=(v+1)*this.segWidth+p+1;o.push(y,m,g,m,_,g)}this.buffers[0].data=new Float32Array(n),this.buffers[1].data=new Float32Array(i),this.indexBuffer.data=new Uint16Array(o),this.buffers[0].update(),this.buffers[1].update(),this.indexBuffer.update()},e}(Lo),jx=function(r){bi(e,r);function e(t,n,i){t===void 0&&(t=200),i===void 0&&(i=0);var o=r.call(this,new Float32Array(n.length*4),new Float32Array(n.length*4),new Uint16Array((n.length-1)*6))||this;return o.points=n,o._width=t,o.textureScale=i,o.build(),o}return Object.defineProperty(e.prototype,"width",{get:function(){return this._width},enumerable:!1,configurable:!0}),e.prototype.build=function(){var t=this.points;if(t){var n=this.getBuffer("aVertexPosition"),i=this.getBuffer("aTextureCoord"),o=this.getIndex();if(!(t.length<1)){n.data.length/4!==t.length&&(n.data=new Float32Array(t.length*4),i.data=new Float32Array(t.length*4),o.data=new Uint16Array((t.length-1)*6));var a=i.data,s=o.data;a[0]=0,a[1]=0,a[2]=0,a[3]=1;for(var u=0,l=t[0],f=this._width*this.textureScale,c=t.length,h=0;h<c;h++){var d=h*4;if(this.textureScale>0){var p=l.x-t[h].x,v=l.y-t[h].y,y=Math.sqrt(p*p+v*v);l=t[h],u+=y/f}else u=h/(c-1);a[d]=u,a[d+1]=0,a[d+2]=u,a[d+3]=1}for(var m=0,h=0;h<c-1;h++){var d=h*2;s[m++]=d,s[m++]=d+1,s[m++]=d+2,s[m++]=d+2,s[m++]=d+1,s[m++]=d+3}i.update(),o.update(),this.updateVertices()}}},e.prototype.updateVertices=function(){var t=this.points;if(!(t.length<1)){for(var n=t[0],i,o=0,a=0,s=this.buffers[0].data,u=t.length,l=0;l<u;l++){var f=t[l],c=l*4;l<t.length-1?i=t[l+1]:i=f,a=-(i.x-n.x),o=i.y-n.y;var h=Math.sqrt(o*o+a*a),d=this.textureScale>0?this.textureScale*this._width/2:this._width/2;o/=h,a/=h,o*=d,a*=d,s[c]=f.x+o,s[c+1]=f.y+a,s[c+2]=f.x-o,s[c+3]=f.y-a,n=f}this.buffers[0].update()}},e.prototype.update=function(){this.textureScale>0?this.build():this.updateVertices()},e}(Lo),FD=function(r){bi(e,r);function e(t,n,i){i===void 0&&(i=0);var o=this,a=new jx(t.height,n,i),s=new li(t);return i>0&&(t.baseTexture.wrapMode=we.REPEAT),o=r.call(this,a,s)||this,o.autoUpdate=!0,o}return e.prototype._render=function(t){var n=this.geometry;(this.autoUpdate||n._width!==this.shader.texture.height)&&(n._width=this.shader.texture.height,n.update()),r.prototype._render.call(this,t)},e}(ui),kx=function(r){bi(e,r);function e(t,n,i){var o=this,a=new Gx(t.width,t.height,n,i),s=new li(G.WHITE);return o=r.call(this,a,s)||this,o.texture=t,o.autoResize=!0,o}return e.prototype.textureUpdated=function(){this._textureID=this.shader.texture._updateID;var t=this.geometry,n=this.shader.texture,i=n.width,o=n.height;this.autoResize&&(t.width!==i||t.height!==o)&&(t.width=this.shader.texture.width,t.height=this.shader.texture.height,t.build())},Object.defineProperty(e.prototype,"texture",{get:function(){return this.shader.texture},set:function(t){this.shader.texture!==t&&(this.shader.texture=t,this._textureID=-1,t.baseTexture.valid?this.textureUpdated():t.once("update",this.textureUpdated,this))},enumerable:!1,configurable:!0}),e.prototype._render=function(t){this._textureID!==this.shader.texture._updateID&&this.textureUpdated(),r.prototype._render.call(this,t)},e.prototype.destroy=function(t){this.shader.texture.off("update",this.textureUpdated,this),r.prototype.destroy.call(this,t)},e}(ui),ND=function(r){bi(e,r);function e(t,n,i,o,a){t===void 0&&(t=G.EMPTY);var s=this,u=new Lo(n,i,o);u.getBuffer("aVertexPosition").static=!1;var l=new li(t);return s=r.call(this,u,l,null,a)||this,s.autoUpdate=!0,s}return Object.defineProperty(e.prototype,"vertices",{get:function(){return this.geometry.getBuffer("aVertexPosition").data},set:function(t){this.geometry.getBuffer("aVertexPosition").data=t},enumerable:!1,configurable:!0}),e.prototype._render=function(t){this.autoUpdate&&this.geometry.getBuffer("aVertexPosition").update(),r.prototype._render.call(this,t)},e}(ui),Oa=10,LD=function(r){bi(e,r);function e(t,n,i,o,a){n===void 0&&(n=Oa),i===void 0&&(i=Oa),o===void 0&&(o=Oa),a===void 0&&(a=Oa);var s=r.call(this,G.WHITE,4,4)||this;return s._origWidth=t.orig.width,s._origHeight=t.orig.height,s._width=s._origWidth,s._height=s._origHeight,s._leftWidth=n,s._rightWidth=o,s._topHeight=i,s._bottomHeight=a,s.texture=t,s}return e.prototype.textureUpdated=function(){this._textureID=this.shader.texture._updateID,this._refresh()},Object.defineProperty(e.prototype,"vertices",{get:function(){return this.geometry.getBuffer("aVertexPosition").data},set:function(t){this.geometry.getBuffer("aVertexPosition").data=t},enumerable:!1,configurable:!0}),e.prototype.updateHorizontalVertices=function(){var t=this.vertices,n=this._getMinScale();t[9]=t[11]=t[13]=t[15]=this._topHeight*n,t[17]=t[19]=t[21]=t[23]=this._height-this._bottomHeight*n,t[25]=t[27]=t[29]=t[31]=this._height},e.prototype.updateVerticalVertices=function(){var t=this.vertices,n=this._getMinScale();t[2]=t[10]=t[18]=t[26]=this._leftWidth*n,t[4]=t[12]=t[20]=t[28]=this._width-this._rightWidth*n,t[6]=t[14]=t[22]=t[30]=this._width},e.prototype._getMinScale=function(){var t=this._leftWidth+this._rightWidth,n=this._width>t?1:this._width/t,i=this._topHeight+this._bottomHeight,o=this._height>i?1:this._height/i,a=Math.min(n,o);return a},Object.defineProperty(e.prototype,"width",{get:function(){return this._width},set:function(t){this._width=t,this._refresh()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"height",{get:function(){return this._height},set:function(t){this._height=t,this._refresh()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"leftWidth",{get:function(){return this._leftWidth},set:function(t){this._leftWidth=t,this._refresh()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"rightWidth",{get:function(){return this._rightWidth},set:function(t){this._rightWidth=t,this._refresh()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"topHeight",{get:function(){return this._topHeight},set:function(t){this._topHeight=t,this._refresh()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"bottomHeight",{get:function(){return this._bottomHeight},set:function(t){this._bottomHeight=t,this._refresh()},enumerable:!1,configurable:!0}),e.prototype._refresh=function(){var t=this.texture,n=this.geometry.buffers[1].data;this._origWidth=t.orig.width,this._origHeight=t.orig.height;var i=1/this._origWidth,o=1/this._origHeight;n[0]=n[8]=n[16]=n[24]=0,n[1]=n[3]=n[5]=n[7]=0,n[6]=n[14]=n[22]=n[30]=1,n[25]=n[27]=n[29]=n[31]=1,n[2]=n[10]=n[18]=n[26]=i*this._leftWidth,n[4]=n[12]=n[20]=n[28]=1-i*this._rightWidth,n[9]=n[11]=n[13]=n[15]=o*this._topHeight,n[17]=n[19]=n[21]=n[23]=1-o*this._bottomHeight,this.updateHorizontalVertices(),this.updateVerticalVertices(),this.geometry.buffers[0].update(),this.geometry.buffers[1].update()},e}(kx);/*!
 * @pixi/sprite-animated - v6.5.10
 * Compiled Thu, 06 Jul 2023 15:25:11 UTC
 *
 * @pixi/sprite-animated is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var sc=function(r,e){return sc=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)n.hasOwnProperty(i)&&(t[i]=n[i])},sc(r,e)};function BD(r,e){sc(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var UD=function(r){BD(e,r);function e(t,n){n===void 0&&(n=!0);var i=r.call(this,t[0]instanceof G?t[0]:t[0].texture)||this;return i._textures=null,i._durations=null,i._autoUpdate=n,i._isConnectedToTicker=!1,i.animationSpeed=1,i.loop=!0,i.updateAnchor=!1,i.onComplete=null,i.onFrameChange=null,i.onLoop=null,i._currentTime=0,i._playing=!1,i._previousFrame=null,i.textures=t,i}return e.prototype.stop=function(){this._playing&&(this._playing=!1,this._autoUpdate&&this._isConnectedToTicker&&(Ct.shared.remove(this.update,this),this._isConnectedToTicker=!1))},e.prototype.play=function(){this._playing||(this._playing=!0,this._autoUpdate&&!this._isConnectedToTicker&&(Ct.shared.add(this.update,this,Ve.HIGH),this._isConnectedToTicker=!0))},e.prototype.gotoAndStop=function(t){this.stop();var n=this.currentFrame;this._currentTime=t,n!==this.currentFrame&&this.updateTexture()},e.prototype.gotoAndPlay=function(t){var n=this.currentFrame;this._currentTime=t,n!==this.currentFrame&&this.updateTexture(),this.play()},e.prototype.update=function(t){if(this._playing){var n=this.animationSpeed*t,i=this.currentFrame;if(this._durations!==null){var o=this._currentTime%1*this._durations[this.currentFrame];for(o+=n/60*1e3;o<0;)this._currentTime--,o+=this._durations[this.currentFrame];var a=Math.sign(this.animationSpeed*t);for(this._currentTime=Math.floor(this._currentTime);o>=this._durations[this.currentFrame];)o-=this._durations[this.currentFrame]*a,this._currentTime+=a;this._currentTime+=o/this._durations[this.currentFrame]}else this._currentTime+=n;this._currentTime<0&&!this.loop?(this.gotoAndStop(0),this.onComplete&&this.onComplete()):this._currentTime>=this._textures.length&&!this.loop?(this.gotoAndStop(this._textures.length-1),this.onComplete&&this.onComplete()):i!==this.currentFrame&&(this.loop&&this.onLoop&&(this.animationSpeed>0&&this.currentFrame<i?this.onLoop():this.animationSpeed<0&&this.currentFrame>i&&this.onLoop()),this.updateTexture())}},e.prototype.updateTexture=function(){var t=this.currentFrame;this._previousFrame!==t&&(this._previousFrame=t,this._texture=this._textures[t],this._textureID=-1,this._textureTrimmedID=-1,this._cachedTint=16777215,this.uvs=this._texture._uvs.uvsFloat32,this.updateAnchor&&this._anchor.copyFrom(this._texture.defaultAnchor),this.onFrameChange&&this.onFrameChange(this.currentFrame))},e.prototype.destroy=function(t){this.stop(),r.prototype.destroy.call(this,t),this.onComplete=null,this.onFrameChange=null,this.onLoop=null},e.fromFrames=function(t){for(var n=[],i=0;i<t.length;++i)n.push(G.from(t[i]));return new e(n)},e.fromImages=function(t){for(var n=[],i=0;i<t.length;++i)n.push(G.from(t[i]));return new e(n)},Object.defineProperty(e.prototype,"totalFrames",{get:function(){return this._textures.length},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"textures",{get:function(){return this._textures},set:function(t){if(t[0]instanceof G)this._textures=t,this._durations=null;else{this._textures=[],this._durations=[];for(var n=0;n<t.length;n++)this._textures.push(t[n].texture),this._durations.push(t[n].time)}this._previousFrame=null,this.gotoAndStop(0),this.updateTexture()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"currentFrame",{get:function(){var t=Math.floor(this._currentTime)%this._textures.length;return t<0&&(t+=this._textures.length),t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"playing",{get:function(){return this._playing},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"autoUpdate",{get:function(){return this._autoUpdate},set:function(t){t!==this._autoUpdate&&(this._autoUpdate=t,!this._autoUpdate&&this._isConnectedToTicker?(Ct.shared.remove(this.update,this),this._isConnectedToTicker=!1):this._autoUpdate&&!this._isConnectedToTicker&&this._playing&&(Ct.shared.add(this.update,this),this._isConnectedToTicker=!0))},enumerable:!1,configurable:!0}),e}(Jt);/*!
 * pixi.js - v6.5.10
 * Compiled Thu, 06 Jul 2023 15:25:11 UTC
 *
 * pixi.js is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */Qt.add(Vb,Kb,qb,hx,Tx,xp,Ax,Dx,rx,ux,lx,Ex,vb,Jb);var GD={AlphaFilter:Fx,BlurFilter:gD,BlurFilterPass:To,ColorMatrixFilter:rc,DisplacementFilter:wD,FXAAFilter:CD,NoiseFilter:MD};const jD=Object.freeze(Object.defineProperty({__proto__:null,get ALPHA_MODES(){return pe},AbstractBatchRenderer:jb,AbstractMultiResource:yu,AbstractRenderer:Bb,AccessibilityManager:Vb,AnimatedSprite:UD,AppLoaderPlugin:Jb,Application:Ux,ArrayResource:Kd,Attribute:Fh,get BLEND_MODES(){return B},get BUFFER_BITS(){return so},get BUFFER_TYPE(){return Oe},BaseImageResource:We,BasePrepare:bx,BaseRenderTexture:rp,BaseTexture:q,BatchDrawCall:Fs,BatchGeometry:bp,BatchPluginFactory:$b,BatchRenderer:xp,BatchShaderGenerator:kb,BatchSystem:ap,BatchTextureArray:Ns,BitmapFont:rr,BitmapFontData:xo,BitmapFontLoader:Dx,BitmapText:hD,BlobResource:ex,Bounds:mo,BrowserAdapter:P0,Buffer:Ot,BufferResource:dn,get CLEAR_MODES(){return se},get COLOR_MASK_BITS(){return hh},CanvasResource:Zd,Circle:hb,CompressedTextureLoader:rx,CompressedTextureResource:Bs,Container:$t,ContextSystem:sp,CountLimiter:gx,CubeResource:Jd,DDSLoader:ux,DEG_TO_RAD:Or,get DRAW_MODES(){return ce},DisplayObject:_t,get ENV(){return Ce},Ellipse:cb,get ExtensionType(){return rt},Extract:Kb,get FORMATS(){return P},FORMATS_TO_COMPONENTS:ox,FillStyle:Sp,Filter:k,FilterState:gb,FilterSystem:op,Framebuffer:Ds,FramebufferSystem:up,get GC_MODES(){return lo},GLFramebuffer:bb,GLProgram:Fb,GLTexture:is,GRAPHICS_CURVES:oi,Geometry:_i,GeometrySystem:lp,Graphics:ai,GraphicsData:Vh,GraphicsGeometry:mx,IGLUniformData:bI,INSTALLED:_o,get INTERNAL_FORMATS(){return z},INTERNAL_FORMAT_TO_BYTES_PER_PIXEL:go,ImageBitmapResource:ep,ImageResource:mu,InteractionData:Nh,InteractionEvent:Wb,InteractionManager:qb,InteractionTrackingData:os,KTXLoader:lx,get LINE_CAP(){return ar},get LINE_JOIN(){return Ge},LineStyle:_x,Loader:ii,get LoaderResource(){return yt},get MASK_TYPES(){return St},get MIPMAP_MODES(){return te},get MSAA_QUALITY(){return lt},MaskData:xb,MaskSystem:fp,Matrix:Pt,Mesh:ui,MeshBatchUvs:Cx,MeshGeometry:Lo,MeshMaterial:li,NineSlicePlane:LD,ObjectRenderer:No,ObservablePoint:gr,PI_2:Kt,get PRECISION(){return Xt},ParticleContainer:CM,ParticleRenderer:hx,PlaneGeometry:Gx,Point:X,Polygon:Yi,Prepare:Tx,Program:gi,ProjectionSystem:dp,Quad:_b,QuadUv:ip,RAD_TO_DEG:fb,get RENDERER_TYPE(){return ti},Rectangle:K,RenderTexture:Pr,RenderTexturePool:mb,RenderTextureSystem:pp,Renderer:gu,ResizePlugin:Bx,Resource:an,RopeGeometry:jx,RoundedRectangle:db,Runner:Nt,get SAMPLER_TYPES(){return uo},get SCALE_MODES(){return Ht},get SHAPES(){return Rt},SVGResource:Qd,ScissorSystem:hp,Shader:Xe,ShaderSystem:vp,SimpleMesh:ND,SimplePlane:kx,SimpleRope:FD,Sprite:Jt,SpriteMaskFilter:Ab,Spritesheet:Sx,SpritesheetLoader:Ex,State:Ir,StateSystem:yp,StencilSystem:cp,System:LI,get TARGETS(){return Tr},get TEXT_GRADIENT(){return si},get TYPES(){return U},TYPES_TO_BYTES_PER_COMPONENT:jh,TYPES_TO_BYTES_PER_PIXEL:ax,TemporaryDisplayObject:qd,Text:bu,TextFormat:Rx,TextMetrics:Ie,TextStyle:Ar,Texture:G,TextureGCSystem:mp,TextureLoader:Qb,TextureMatrix:_u,TextureSystem:_p,TextureUvs:np,Ticker:Ct,TickerPlugin:vb,TilingSprite:Px,TilingSpriteRenderer:Ax,TimeLimiter:JM,Transform:Wd,get UPDATE_PRIORITY(){return Ve},UniformGroup:Sr,VERSION:GI,VideoResource:tp,ViewableBuffer:Ls,get WRAP_MODES(){return we},XMLFormat:Us,XMLStringFormat:Ix,accessibleTarget:Xb,autoDetectFormat:Pp,autoDetectRenderer:Ub,autoDetectResource:vu,checkMaxIfStatementsInShader:Pb,createUBOElements:Ib,defaultFilterVertex:gp,defaultVertex:Gb,extensions:Qt,filters:GD,generateProgram:Nb,generateUniformBufferSync:Db,getTestContext:Eb,getUBOData:Mb,graphicsUtils:NM,groupD8:dt,interactiveTarget:Yb,isMobile:de,parseDDS:ix,parseKTX:sx,resources:zb,settings:C,systems:Hb,uniformParsers:Jr,utils:zR},Symbol.toStringTag,{value:"Module"}));function $x(r,e){var t={};for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&e.indexOf(n)<0&&(t[n]=r[n]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(r);i<n.length;i++)e.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(r,n[i])&&(t[n[i]]=r[n[i]]);return t}var Wy=function(){};const uc=(r,e,t)=>Math.min(Math.max(t,r),e),Yy=.001,kD=.01,$D=10,zD=.05,HD=1;function XD({duration:r=800,bounce:e=.25,velocity:t=0,mass:n=1}){let i,o,a=1-e;a=uc(zD,HD,a),r=uc(kD,$D,r/1e3),a<1?(i=l=>{const f=l*a,c=f*r,h=f-t,d=lc(l,a),p=Math.exp(-c);return Yy-h/d*p},o=l=>{const c=l*a*r,h=c*t+t,d=Math.pow(a,2)*Math.pow(l,2)*r,p=Math.exp(-c),v=lc(Math.pow(l,2),a);return(-i(l)+Yy>0?-1:1)*((h-d)*p)/v}):(i=l=>{const f=Math.exp(-l*r),c=(l-t)*r+1;return-.001+f*c},o=l=>{const f=Math.exp(-l*r),c=(t-l)*(r*r);return f*c});const s=5/r,u=WD(i,o,s);if(r=r*1e3,isNaN(u))return{stiffness:100,damping:10,duration:r};{const l=Math.pow(u,2)*n;return{stiffness:l,damping:a*2*Math.sqrt(n*l),duration:r}}}const VD=12;function WD(r,e,t){let n=t;for(let i=1;i<VD;i++)n=n-r(n)/e(n);return n}function lc(r,e){return r*Math.sqrt(1-e*e)}const YD=["duration","bounce"],qD=["stiffness","damping","mass"];function qy(r,e){return e.some(t=>r[t]!==void 0)}function KD(r){let e=Object.assign({velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1},r);if(!qy(r,qD)&&qy(r,YD)){const t=XD(r);e=Object.assign(Object.assign(Object.assign({},e),t),{velocity:0,mass:1}),e.isResolvedFromDuration=!0}return e}function Ap(r){var{from:e=0,to:t=1,restSpeed:n=2,restDelta:i}=r,o=$x(r,["from","to","restSpeed","restDelta"]);const a={done:!1,value:e};let{stiffness:s,damping:u,mass:l,velocity:f,duration:c,isResolvedFromDuration:h}=KD(o),d=Ky,p=Ky;function v(){const y=f?-(f/1e3):0,m=t-e,g=u/(2*Math.sqrt(s*l)),_=Math.sqrt(s/l)/1e3;if(i===void 0&&(i=Math.min(Math.abs(t-e)/100,.4)),g<1){const x=lc(_,g);d=b=>{const T=Math.exp(-g*_*b);return t-T*((y+g*_*m)/x*Math.sin(x*b)+m*Math.cos(x*b))},p=b=>{const T=Math.exp(-g*_*b);return g*_*T*(Math.sin(x*b)*(y+g*_*m)/x+m*Math.cos(x*b))-T*(Math.cos(x*b)*(y+g*_*m)-x*m*Math.sin(x*b))}}else if(g===1)d=x=>t-Math.exp(-_*x)*(m+(y+_*m)*x);else{const x=_*Math.sqrt(g*g-1);d=b=>{const T=Math.exp(-g*_*b),S=Math.min(x*b,300);return t-T*((y+g*_*m)*Math.sinh(S)+x*m*Math.cosh(S))/x}}}return v(),{next:y=>{const m=d(y);if(h)a.done=y>=c;else{const g=p(y)*1e3,_=Math.abs(g)<=n,x=Math.abs(t-m)<=i;a.done=_&&x}return a.value=a.done?t:m,a},flipTarget:()=>{f=-f,[e,t]=[t,e],v()}}}Ap.needsInterpolation=(r,e)=>typeof r=="string"||typeof e=="string";const Ky=r=>0,zx=(r,e,t)=>{const n=e-r;return n===0?1:(t-r)/n},Cp=(r,e,t)=>-t*r+t*e+r,Hx=(r,e)=>t=>Math.max(Math.min(t,e),r),Ki=r=>r%1?Number(r.toFixed(5)):r,Gs=/(-)?([\d]*\.?[\d])+/g,fc=/(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,ZD=/^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function Bo(r){return typeof r=="string"}const xu={test:r=>typeof r=="number",parse:parseFloat,transform:r=>r},Xx=Object.assign(Object.assign({},xu),{transform:Hx(0,1)});Object.assign(Object.assign({},xu),{default:1});const JD=r=>({test:e=>Bo(e)&&e.endsWith(r)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${r}`}),Zi=JD("%");Object.assign(Object.assign({},Zi),{parse:r=>Zi.parse(r)/100,transform:r=>Zi.transform(r*100)});const Rp=(r,e)=>t=>!!(Bo(t)&&ZD.test(t)&&t.startsWith(r)||e&&Object.prototype.hasOwnProperty.call(t,e)),Vx=(r,e,t)=>n=>{if(!Bo(n))return n;const[i,o,a,s]=n.match(Gs);return{[r]:parseFloat(i),[e]:parseFloat(o),[t]:parseFloat(a),alpha:s!==void 0?parseFloat(s):1}},Yr={test:Rp("hsl","hue"),parse:Vx("hue","saturation","lightness"),transform:({hue:r,saturation:e,lightness:t,alpha:n=1})=>"hsla("+Math.round(r)+", "+Zi.transform(Ki(e))+", "+Zi.transform(Ki(t))+", "+Ki(Xx.transform(n))+")"},QD=Hx(0,255),Wl=Object.assign(Object.assign({},xu),{transform:r=>Math.round(QD(r))}),br={test:Rp("rgb","red"),parse:Vx("red","green","blue"),transform:({red:r,green:e,blue:t,alpha:n=1})=>"rgba("+Wl.transform(r)+", "+Wl.transform(e)+", "+Wl.transform(t)+", "+Ki(Xx.transform(n))+")"};function tF(r){let e="",t="",n="",i="";return r.length>5?(e=r.substr(1,2),t=r.substr(3,2),n=r.substr(5,2),i=r.substr(7,2)):(e=r.substr(1,1),t=r.substr(2,1),n=r.substr(3,1),i=r.substr(4,1),e+=e,t+=t,n+=n,i+=i),{red:parseInt(e,16),green:parseInt(t,16),blue:parseInt(n,16),alpha:i?parseInt(i,16)/255:1}}const hc={test:Rp("#"),parse:tF,transform:br.transform},Tu={test:r=>br.test(r)||hc.test(r)||Yr.test(r),parse:r=>br.test(r)?br.parse(r):Yr.test(r)?Yr.parse(r):hc.parse(r),transform:r=>Bo(r)?r:r.hasOwnProperty("red")?br.transform(r):Yr.transform(r)},Wx="${c}",Yx="${n}";function eF(r){var e,t,n,i;return isNaN(r)&&Bo(r)&&((t=(e=r.match(Gs))===null||e===void 0?void 0:e.length)!==null&&t!==void 0?t:0)+((i=(n=r.match(fc))===null||n===void 0?void 0:n.length)!==null&&i!==void 0?i:0)>0}function qx(r){typeof r=="number"&&(r=`${r}`);const e=[];let t=0;const n=r.match(fc);n&&(t=n.length,r=r.replace(fc,Wx),e.push(...n.map(Tu.parse)));const i=r.match(Gs);return i&&(r=r.replace(Gs,Yx),e.push(...i.map(xu.parse))),{values:e,numColors:t,tokenised:r}}function Kx(r){return qx(r).values}function Zx(r){const{values:e,numColors:t,tokenised:n}=qx(r),i=e.length;return o=>{let a=n;for(let s=0;s<i;s++)a=a.replace(s<t?Wx:Yx,s<t?Tu.transform(o[s]):Ki(o[s]));return a}}const rF=r=>typeof r=="number"?0:r;function nF(r){const e=Kx(r);return Zx(r)(e.map(rF))}const Jx={test:eF,parse:Kx,createTransformer:Zx,getAnimatableNone:nF};function Yl(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*(2/3-t)*6:r}function Zy({hue:r,saturation:e,lightness:t,alpha:n}){r/=360,e/=100,t/=100;let i=0,o=0,a=0;if(!e)i=o=a=t;else{const s=t<.5?t*(1+e):t+e-t*e,u=2*t-s;i=Yl(u,s,r+1/3),o=Yl(u,s,r),a=Yl(u,s,r-1/3)}return{red:Math.round(i*255),green:Math.round(o*255),blue:Math.round(a*255),alpha:n}}const iF=(r,e,t)=>{const n=r*r,i=e*e;return Math.sqrt(Math.max(0,t*(i-n)+n))},oF=[hc,br,Yr],Jy=r=>oF.find(e=>e.test(r)),Qx=(r,e)=>{let t=Jy(r),n=Jy(e),i=t.parse(r),o=n.parse(e);t===Yr&&(i=Zy(i),t=br),n===Yr&&(o=Zy(o),n=br);const a=Object.assign({},i);return s=>{for(const u in a)u!=="alpha"&&(a[u]=iF(i[u],o[u],s));return a.alpha=Cp(i.alpha,o.alpha,s),t.transform(a)}},aF=r=>typeof r=="number",sF=(r,e)=>t=>e(r(t)),t1=(...r)=>r.reduce(sF);function e1(r,e){return aF(r)?t=>Cp(r,e,t):Tu.test(r)?Qx(r,e):n1(r,e)}const r1=(r,e)=>{const t=[...r],n=t.length,i=r.map((o,a)=>e1(o,e[a]));return o=>{for(let a=0;a<n;a++)t[a]=i[a](o);return t}},uF=(r,e)=>{const t=Object.assign(Object.assign({},r),e),n={};for(const i in t)r[i]!==void 0&&e[i]!==void 0&&(n[i]=e1(r[i],e[i]));return i=>{for(const o in n)t[o]=n[o](i);return t}};function Qy(r){const e=Jx.parse(r),t=e.length;let n=0,i=0,o=0;for(let a=0;a<t;a++)n||typeof e[a]=="number"?n++:e[a].hue!==void 0?o++:i++;return{parsed:e,numNumbers:n,numRGB:i,numHSL:o}}const n1=(r,e)=>{const t=Jx.createTransformer(e),n=Qy(r),i=Qy(e);return n.numHSL===i.numHSL&&n.numRGB===i.numRGB&&n.numNumbers>=i.numNumbers?t1(r1(n.parsed,i.parsed),t):a=>`${a>0?e:r}`},lF=(r,e)=>t=>Cp(r,e,t);function fF(r){if(typeof r=="number")return lF;if(typeof r=="string")return Tu.test(r)?Qx:n1;if(Array.isArray(r))return r1;if(typeof r=="object")return uF}function hF(r,e,t){const n=[],i=t||fF(r[0]),o=r.length-1;for(let a=0;a<o;a++){let s=i(r[a],r[a+1]);if(e){const u=Array.isArray(e)?e[a]:e;s=t1(u,s)}n.push(s)}return n}function cF([r,e],[t]){return n=>t(zx(r,e,n))}function dF(r,e){const t=r.length,n=t-1;return i=>{let o=0,a=!1;if(i<=r[0]?a=!0:i>=r[n]&&(o=n-1,a=!0),!a){let u=1;for(;u<t&&!(r[u]>i||u===n);u++);o=u-1}const s=zx(r[o],r[o+1],i);return e[o](s)}}function i1(r,e,{clamp:t=!0,ease:n,mixer:i}={}){const o=r.length;Wy(o===e.length),Wy(!n||!Array.isArray(n)||n.length===o-1),r[0]>r[o-1]&&(r=[].concat(r),e=[].concat(e),r.reverse(),e.reverse());const a=hF(e,n,i),s=o===2?cF(r,a):dF(r,a);return t?u=>s(uc(r[0],r[o-1],u)):s}const pF=r=>e=>e<=.5?r(2*e)/2:(2-r(2*(1-e)))/2,vF=r=>e=>Math.pow(e,r),yF=vF(2),us=pF(yF);function mF(r,e){return r.map(()=>e||us).splice(0,r.length-1)}function _F(r){const e=r.length;return r.map((t,n)=>n!==0?n/(e-1):0)}function gF(r,e){return r.map(t=>t*e)}function ls({from:r=0,to:e=1,ease:t,offset:n,duration:i=300}){const o={done:!1,value:r},a=Array.isArray(e)?e:[r,e],s=gF(n&&n.length===a.length?n:_F(a),i);function u(){return i1(s,a,{ease:Array.isArray(t)?t:mF(a,t)})}let l=u();return{next:f=>(o.value=l(f),o.done=f>=i,o),flipTarget:()=>{a.reverse(),l=u()}}}function bF({velocity:r=0,from:e=0,power:t=.8,timeConstant:n=350,restDelta:i=.5,modifyTarget:o}){const a={done:!1,value:e};let s=t*r;const u=e+s,l=o===void 0?u:o(u);return l!==u&&(s=l-e),{next:f=>{const c=-s*Math.exp(-f/n);return a.done=!(c>i||c<-i),a.value=a.done?l:l+c,a},flipTarget:()=>{}}}const tm={keyframes:ls,spring:Ap,decay:bF};function xF(r){if(Array.isArray(r.to))return ls;if(tm[r.type])return tm[r.type];const e=new Set(Object.keys(r));return e.has("ease")||e.has("duration")&&!e.has("dampingRatio")?ls:e.has("dampingRatio")||e.has("stiffness")||e.has("mass")||e.has("damping")||e.has("restSpeed")||e.has("restDelta")?Ap:ls}const o1=1/60*1e3,TF=typeof performance<"u"?()=>performance.now():()=>Date.now(),a1=typeof window<"u"?r=>window.requestAnimationFrame(r):r=>setTimeout(()=>r(TF()),o1);function SF(r){let e=[],t=[],n=0,i=!1,o=!1;const a=new WeakSet,s={schedule:(u,l=!1,f=!1)=>{const c=f&&i,h=c?e:t;return l&&a.add(u),h.indexOf(u)===-1&&(h.push(u),c&&i&&(n=e.length)),u},cancel:u=>{const l=t.indexOf(u);l!==-1&&t.splice(l,1),a.delete(u)},process:u=>{if(i){o=!0;return}if(i=!0,[e,t]=[t,e],t.length=0,n=e.length,n)for(let l=0;l<n;l++){const f=e[l];f(u),a.has(f)&&(s.schedule(f),r())}i=!1,o&&(o=!1,s.process(u))}};return s}const EF=40;let cc=!0,So=!1,dc=!1;const Ji={delta:0,timestamp:0},Uo=["read","update","preRender","render","postRender"],Su=Uo.reduce((r,e)=>(r[e]=SF(()=>So=!0),r),{}),wF=Uo.reduce((r,e)=>{const t=Su[e];return r[e]=(n,i=!1,o=!1)=>(So||AF(),t.schedule(n,i,o)),r},{}),OF=Uo.reduce((r,e)=>(r[e]=Su[e].cancel,r),{});Uo.reduce((r,e)=>(r[e]=()=>Su[e].process(Ji),r),{});const PF=r=>Su[r].process(Ji),s1=r=>{So=!1,Ji.delta=cc?o1:Math.max(Math.min(r-Ji.timestamp,EF),1),Ji.timestamp=r,dc=!0,Uo.forEach(PF),dc=!1,So&&(cc=!1,a1(s1))},AF=()=>{So=!0,cc=!0,dc||a1(s1)};function u1(r,e,t=0){return r-e-t}function CF(r,e,t=0,n=!0){return n?u1(e+-r,e,t):e-(r-e)+t}function RF(r,e,t,n){return n?r>=e+t:r<=-t}const IF=r=>{const e=({delta:t})=>r(t);return{start:()=>wF.update(e,!0),stop:()=>OF.update(e)}};function fs(r){var e,t,{from:n,autoplay:i=!0,driver:o=IF,elapsed:a=0,repeat:s=0,repeatType:u="loop",repeatDelay:l=0,onPlay:f,onStop:c,onComplete:h,onRepeat:d,onUpdate:p}=r,v=$x(r,["from","autoplay","driver","elapsed","repeat","repeatType","repeatDelay","onPlay","onStop","onComplete","onRepeat","onUpdate"]);let{to:y}=v,m,g=0,_=v.duration,x,b=!1,T=!0,S;const A=xF(v);!((t=(e=A).needsInterpolation)===null||t===void 0)&&t.call(e,n,y)&&(S=i1([0,100],[n,y],{clamp:!1}),n=0,y=100);const E=A(Object.assign(Object.assign({},v),{from:n,to:y}));function w(){g++,u==="reverse"?(T=g%2===0,a=CF(a,_,l,T)):(a=u1(a,_,l),u==="mirror"&&E.flipTarget()),b=!1,d&&d()}function D(){m.stop(),h&&h()}function N(H){if(T||(H=-H),a+=H,!b){const I=E.next(Math.max(0,a));x=I.value,S&&(x=S(x)),b=T?I.done:a<=0}p==null||p(x),b&&(g===0&&(_??(_=a)),g<s?RF(a,_,l,T)&&w():D())}function L(){f==null||f(),m=o(N),m.start()}return i&&L(),{stop:()=>{c==null||c(),m.stop()}}}var Pa=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof Vn<"u"?Vn:typeof self<"u"?self:{};function pn(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var l1={exports:{}},Di=function(r){return r&&r.Math===Math&&r},Et=Di(typeof globalThis=="object"&&globalThis)||Di(typeof window=="object"&&window)||Di(typeof self=="object"&&self)||Di(typeof Pa=="object"&&Pa)||Di(typeof Pa=="object"&&Pa)||function(){return this}()||Function("return this")(),gt=function(r){try{return!!r()}catch{return!0}},Eu=!gt(function(){var r=(function(){}).bind();return typeof r!="function"||r.hasOwnProperty("prototype")}),MF=Eu,f1=Function.prototype,em=f1.apply,rm=f1.call,h1=typeof Reflect=="object"&&Reflect.apply||(MF?rm.bind(em):function(){return rm.apply(em,arguments)}),c1=Eu,d1=Function.prototype,pc=d1.call,DF=c1&&d1.bind.bind(pc,pc),It=c1?DF:function(r){return function(){return pc.apply(r,arguments)}},p1=It,FF=p1({}.toString),NF=p1("".slice),vn=function(r){return NF(FF(r),8,-1)},LF=vn,BF=It,js=function(r){if(LF(r)==="Function")return BF(r)},ql=typeof document=="object"&&document.all,Ut=ql===void 0&&ql!==void 0?function(r){return typeof r=="function"||r===ql}:function(r){return typeof r=="function"},wu={},ee=!gt(function(){return Object.defineProperty({},1,{get:function(){return 7}})[1]!==7}),UF=Eu,Aa=Function.prototype.call,ye=UF?Aa.bind(Aa):function(){return Aa.apply(Aa,arguments)},Ip={},v1={}.propertyIsEnumerable,y1=Object.getOwnPropertyDescriptor,GF=y1&&!v1.call({1:2},1);Ip.f=GF?function(r){var e=y1(this,r);return!!e&&e.enumerable}:v1;var cr,hs,xi=function(r,e){return{enumerable:!(1&r),configurable:!(2&r),writable:!(4&r),value:e}},jF=gt,kF=vn,Kl=Object,$F=It("".split),m1=jF(function(){return!Kl("z").propertyIsEnumerable(0)})?function(r){return kF(r)==="String"?$F(r,""):Kl(r)}:Kl,Ti=function(r){return r==null},zF=Ti,HF=TypeError,Ou=function(r){if(zF(r))throw new HF("Can't call method on "+r);return r},XF=m1,VF=Ou,Mr=function(r){return XF(VF(r))},WF=Ut,jt=function(r){return typeof r=="object"?r!==null:WF(r)},yn={},Zl=yn,Jl=Et,YF=Ut,nm=function(r){return YF(r)?r:void 0},Dr=function(r,e){return arguments.length<2?nm(Zl[r])||nm(Jl[r]):Zl[r]&&Zl[r][e]||Jl[r]&&Jl[r][e]},mn=It({}.isPrototypeOf),Pu=typeof navigator<"u"&&String(navigator.userAgent)||"",_1=Et,Ql=Pu,im=_1.process,om=_1.Deno,am=im&&im.versions||om&&om.version,sm=am&&am.v8;sm&&(hs=(cr=sm.split("."))[0]>0&&cr[0]<4?1:+(cr[0]+cr[1])),!hs&&Ql&&(!(cr=Ql.match(/Edge\/(\d+)/))||cr[1]>=74)&&(cr=Ql.match(/Chrome\/(\d+)/))&&(hs=+cr[1]);var Mp=hs,um=Mp,qF=gt,KF=Et.String,g1=!!Object.getOwnPropertySymbols&&!qF(function(){var r=Symbol("symbol detection");return!KF(r)||!(Object(r)instanceof Symbol)||!Symbol.sham&&um&&um<41}),b1=g1&&!Symbol.sham&&typeof Symbol.iterator=="symbol",ZF=Dr,JF=Ut,QF=mn,tN=Object,x1=b1?function(r){return typeof r=="symbol"}:function(r){var e=ZF("Symbol");return JF(e)&&QF(e.prototype,tN(r))},eN=String,Go=function(r){try{return eN(r)}catch{return"Object"}},rN=Ut,nN=Go,iN=TypeError,Ye=function(r){if(rN(r))return r;throw new iN(nN(r)+" is not a function")},oN=Ye,aN=Ti,Dp=function(r,e){var t=r[e];return aN(t)?void 0:oN(t)},lm=ye,fm=Ut,hm=jt,sN=TypeError,Au={exports:{}},cm=Et,uN=Object.defineProperty,lN=Et,fN=function(r,e){try{uN(cm,r,{value:e,configurable:!0,writable:!0})}catch{cm[r]=e}return e},dm="__core-js_shared__",pm=Au.exports=lN[dm]||fN(dm,{});(pm.versions||(pm.versions=[])).push({version:"3.36.1",mode:"pure",copyright:"© 2014-2024 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.36.1/LICENSE",source:"https://github.com/zloirock/core-js"});var vm=Au.exports,T1=function(r,e){return vm[r]||(vm[r]=e||{})},hN=Ou,cN=Object,Cu=function(r){return cN(hN(r))},dN=Cu,pN=It({}.hasOwnProperty),me=Object.hasOwn||function(r,e){return pN(dN(r),e)},vN=It,yN=0,mN=Math.random(),_N=vN(1 .toString),Fp=function(r){return"Symbol("+(r===void 0?"":r)+")_"+_N(++yN+mN,36)},gN=T1,ym=me,bN=Fp,xN=g1,TN=b1,zn=Et.Symbol,tf=gN("wks"),SN=TN?zn.for||zn:zn&&zn.withoutSetter||bN,Wt=function(r){return ym(tf,r)||(tf[r]=xN&&ym(zn,r)?zn[r]:SN("Symbol."+r)),tf[r]},EN=ye,mm=jt,_m=x1,wN=Dp,ON=function(r,e){var t,n;if(fm(t=r.toString)&&!hm(n=lm(t,r))||fm(t=r.valueOf)&&!hm(n=lm(t,r)))return n;throw new sN("Can't convert object to primitive value")},PN=TypeError,AN=Wt("toPrimitive"),CN=function(r,e){if(!mm(r)||_m(r))return r;var t,n=wN(r,AN);if(n){if(t=EN(n,r,e),!mm(t)||_m(t))return t;throw new PN("Can't convert object to primitive value")}return ON(r)},RN=x1,S1=function(r){var e=CN(r,"string");return RN(e)?e:e+""},gm=jt,vc=Et.document,IN=gm(vc)&&gm(vc.createElement),Np=function(r){return IN?vc.createElement(r):{}},MN=Np,E1=!ee&&!gt(function(){return Object.defineProperty(MN("div"),"a",{get:function(){return 7}}).a!==7}),DN=ee,FN=ye,NN=Ip,LN=xi,BN=Mr,UN=S1,GN=me,jN=E1,bm=Object.getOwnPropertyDescriptor;wu.f=DN?bm:function(r,e){if(r=BN(r),e=UN(e),jN)try{return bm(r,e)}catch{}if(GN(r,e))return LN(!FN(NN.f,r,e),r[e])};var kN=gt,$N=Ut,zN=/#|\.prototype\./,jo=function(r,e){var t=XN[HN(r)];return t===WN||t!==VN&&($N(e)?kN(e):!!e)},HN=jo.normalize=function(r){return String(r).replace(zN,".").toLowerCase()},XN=jo.data={},VN=jo.NATIVE="N",WN=jo.POLYFILL="P",w1=jo,YN=Ye,qN=Eu,KN=js(js.bind),ko=function(r,e){return YN(r),e===void 0?r:qN?KN(r,e):function(){return r.apply(e,arguments)}},qe={},O1=ee&&gt(function(){return Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype!==42}),ZN=jt,JN=String,QN=TypeError,Ke=function(r){if(ZN(r))return r;throw new QN(JN(r)+" is not an object")},t3=ee,e3=E1,r3=O1,Ca=Ke,xm=S1,n3=TypeError,ef=Object.defineProperty,i3=Object.getOwnPropertyDescriptor,rf="enumerable",nf="configurable",of="writable";qe.f=t3?r3?function(r,e,t){if(Ca(r),e=xm(e),Ca(t),typeof r=="function"&&e==="prototype"&&"value"in t&&of in t&&!t[of]){var n=i3(r,e);n&&n[of]&&(r[e]=t.value,t={configurable:nf in t?t[nf]:n[nf],enumerable:rf in t?t[rf]:n[rf],writable:!1})}return ef(r,e,t)}:ef:function(r,e,t){if(Ca(r),e=xm(e),Ca(t),e3)try{return ef(r,e,t)}catch{}if("get"in t||"set"in t)throw new n3("Accessors not supported");return"value"in t&&(r[e]=t.value),r};var o3=qe,a3=xi,Fr=ee?function(r,e,t){return o3.f(r,e,a3(1,t))}:function(r,e,t){return r[e]=t,r},Fi=Et,s3=h1,u3=js,l3=Ut,f3=wu.f,h3=w1,Cn=yn,c3=ko,Rn=Fr,Tm=me,d3=function(r){var e=function(t,n,i){if(this instanceof e){switch(arguments.length){case 0:return new r;case 1:return new r(t);case 2:return new r(t,n)}return new r(t,n,i)}return s3(r,this,arguments)};return e.prototype=r.prototype,e},Mt=function(r,e){var t,n,i,o,a,s,u,l,f,c=r.target,h=r.global,d=r.stat,p=r.proto,v=h?Fi:d?Fi[c]:Fi[c]&&Fi[c].prototype,y=h?Cn:Cn[c]||Rn(Cn,c,{})[c],m=y.prototype;for(o in e)n=!(t=h3(h?o:c+(d?".":"#")+o,r.forced))&&v&&Tm(v,o),s=y[o],n&&(u=r.dontCallGetSet?(f=f3(v,o))&&f.value:v[o]),a=n&&u?u:e[o],(t||p||typeof s!=typeof a)&&(l=r.bind&&n?c3(a,Fi):r.wrap&&n?d3(a):p&&l3(a)?u3(a):a,(r.sham||a&&a.sham||s&&s.sham)&&Rn(l,"sham",!0),Rn(y,o,l),p&&(Tm(Cn,i=c+"Prototype")||Rn(Cn,i,{}),Rn(Cn[i],o,a),r.real&&m&&(t||!m[o])&&Rn(m,o,a)))},p3=Mt,v3=gt,y3=Mr,Sm=wu.f,Em=ee;p3({target:"Object",stat:!0,forced:!Em||v3(function(){Sm(1)}),sham:!Em},{getOwnPropertyDescriptor:function(r,e){return Sm(y3(r),e)}});var P1=yn.Object,m3=l1.exports=function(r,e){return P1.getOwnPropertyDescriptor(r,e)};P1.getOwnPropertyDescriptor.sham&&(m3.sham=!0);var _3=l1.exports,g3=pn(_3);function je(){}function yc(){return wx.createImage()}var mc=wx.createImage();function A1(){var r=wx.createCanvas();return r.style={cursor:null},r}var qn=new A1,b3=Math.ceil,x3=Math.floor,T3=Math.trunc||function(r){var e=+r;return(e>0?x3:b3)(e)},Ru=function(r){var e=+r;return e!=e||e===0?0:T3(e)},S3=Ru,E3=Math.max,w3=Math.min,C1=function(r,e){var t=S3(r);return t<0?E3(t+e,0):w3(t,e)},O3=Ru,P3=Math.min,A3=function(r){var e=O3(r);return e>0?P3(e,9007199254740991):0},Iu=function(r){return A3(r.length)},C3=Mr,R3=C1,I3=Iu,M3=function(r){return function(e,t,n){var i=C3(e),o=I3(i);if(o===0)return!r&&-1;var a,s=R3(n,o);if(r&&t!=t){for(;o>s;)if((a=i[s++])!=a)return!0}else for(;o>s;s++)if((r||s in i)&&i[s]===t)return r||s||0;return!r&&-1}},R1={indexOf:M3(!1)},D3=gt,F3=Mt,N3=R1.indexOf,L3=function(r,e){var t=[][r];return!!t&&D3(function(){t.call(null,e||function(){return 1},1)})},_c=js([].indexOf),wm=!!_c&&1/_c([1],1,-0)<0;F3({target:"Array",proto:!0,forced:wm||!L3("indexOf")},{indexOf:function(r){var e=arguments.length>1?arguments[1]:void 0;return wm?_c(this,r,e)||0:N3(this,r,e)}});var B3=Et,U3=yn,Lp=function(r,e){var t=U3[r+"Prototype"],n=t&&t[e];if(n)return n;var i=B3[r],o=i&&i.prototype;return o&&o[e]},G3=Lp("Array","indexOf"),j3=mn,k3=G3,af=Array.prototype,$3=pn(function(r){var e=r.indexOf;return r===af||j3(af,r)&&e===af.indexOf?k3:e}),z3=vn,I1=Array.isArray||function(r){return z3(r)==="Array"},H3=ee,X3=I1,V3=TypeError,W3=Object.getOwnPropertyDescriptor,Y3=H3&&!function(){if(this!==void 0)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(r){return r instanceof TypeError}}()?function(r,e){if(X3(r)&&!W3(r,"length").writable)throw new V3("Cannot set read only .length");return r.length=e}:function(r,e){return r.length=e},q3=TypeError,M1={};M1[Wt("toStringTag")]="z";var Bp=String(M1)==="[object z]",K3=Bp,Z3=Ut,cs=vn,J3=Wt("toStringTag"),Q3=Object,tL=cs(function(){return arguments}())==="Arguments",Mu=K3?cs:function(r){var e,t,n;return r===void 0?"Undefined":r===null?"Null":typeof(t=function(i,o){try{return i[o]}catch{}}(e=Q3(r),J3))=="string"?t:tL?cs(e):(n=cs(e))==="Object"&&Z3(e.callee)?"Arguments":n},eL=It,rL=Ut,gc=Au.exports,nL=eL(Function.toString);rL(gc.inspectSource)||(gc.inspectSource=function(r){return nL(r)});var D1=gc.inspectSource,iL=It,oL=gt,F1=Ut,aL=Mu,sL=D1,N1=function(){},L1=Dr("Reflect","construct"),Up=/^\s*(?:class|function)\b/,uL=iL(Up.exec),lL=!Up.test(N1),Ni=function(r){if(!F1(r))return!1;try{return L1(N1,[],r),!0}catch{return!1}},B1=function(r){if(!F1(r))return!1;switch(aL(r)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return lL||!!uL(Up,sL(r))}catch{return!0}};B1.sham=!0;var U1=!L1||oL(function(){var r;return Ni(Ni.call)||!Ni(Object)||!Ni(function(){r=!0})||r})?B1:Ni,Om=I1,fL=U1,hL=jt,cL=Wt("species"),Pm=Array,dL=function(r){var e;return Om(r)&&(e=r.constructor,(fL(e)&&(e===Pm||Om(e.prototype))||hL(e)&&(e=e[cL])===null)&&(e=void 0)),e===void 0?Pm:e},G1=function(r,e){return new(dL(r))(e===0?0:e)},pL=ee,vL=qe,yL=xi,Am=Go,mL=TypeError,_L=gt,gL=Mp,bL=Wt("species"),j1=function(r){return gL>=51||!_L(function(){var e=[];return(e.constructor={})[bL]=function(){return{foo:1}},e[r](Boolean).foo!==1})},xL=Mt,TL=Cu,SL=C1,EL=Ru,wL=Iu,OL=Y3,PL=function(r){if(r>9007199254740991)throw q3("Maximum allowed index exceeded");return r},AL=G1,CL=function(r,e,t){pL?vL.f(r,e,yL(0,t)):r[e]=t},sf=function(r,e){if(!delete r[e])throw new mL("Cannot delete property "+Am(e)+" of "+Am(r))},RL=j1("splice"),IL=Math.max,ML=Math.min;xL({target:"Array",proto:!0,forced:!RL},{splice:function(r,e){var t,n,i,o,a,s,u=TL(this),l=wL(u),f=SL(r,l),c=arguments.length;for(c===0?t=n=0:c===1?(t=0,n=l-f):(t=c-2,n=ML(IL(EL(e),0),l-f)),PL(l+t-n),i=AL(u,n),o=0;o<n;o++)(a=f+o)in u&&CL(i,o,u[a]);if(i.length=n,t<n){for(o=f;o<l-n;o++)s=o+t,(a=o+n)in u?u[s]=u[a]:sf(u,s);for(o=l;o>l-n+t;o--)sf(u,o-1)}else if(t>n)for(o=l-n;o>f;o--)s=o+t-1,(a=o+n-1)in u?u[s]=u[a]:sf(u,s);for(o=0;o<t;o++)u[o+f]=arguments[o+2];return OL(u,l-n+t),i}});var DL=Lp("Array","splice"),FL=mn,NL=DL,uf=Array.prototype,LL=pn(function(r){var e=r.splice;return r===uf||FL(uf,r)&&e===uf.splice?NL:e});function k1(r,e,t){return e=ks(e),function(n,i){if(i&&(typeof i=="object"||typeof i=="function"))return i;if(i!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return function(o){if(o===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o}(n)}(r,$1()?Reflect.construct(e,t||[],ks(r).constructor):e.apply(r,t))}function $1(){try{var r=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return($1=function(){return!!r})()}function z1(r){var e=function(t,n){if(typeof t!="object"||!t)return t;var i=t[Symbol.toPrimitive];if(i!==void 0){var o=i.call(t,n);if(typeof o!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(t)}(r,"string");return typeof e=="symbol"?e:e+""}function _n(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function BL(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,z1(n.key),n)}}function gn(r,e,t){return e&&BL(r.prototype,e),Object.defineProperty(r,"prototype",{writable:!1}),r}function pt(r,e,t){return(e=z1(e))in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}function H1(r,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(e&&e.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),Object.defineProperty(r,"prototype",{writable:!1}),e&&bc(r,e)}function ks(r){return ks=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},ks(r)}function bc(r,e){return bc=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,n){return t.__proto__=n,t},bc(r,e)}var $s,Qi,zs,Hs=function(){return gn(function r(){_n(this,r),pt(this,"style",{cursor:null}),pt(this,"pathname","")},[{key:"appendChild",value:function(){}},{key:"removeChild",value:function(){}},{key:"addEventListener",value:function(){}},{key:"removeEventListener",value:function(){}},{key:"setAttribute",value:function(){}}])}(),Cm=qn.constructor,Rm=function(r){function e(){return _n(this,e),k1(this,e,arguments)}return H1(e,mc.constructor),gn(e)}(),Im=function(r){function e(){return _n(this,e),k1(this,e,arguments)}return H1(e,Hs),gn(e)}(),dr={},Bn={body:new Hs("body"),cookie:"",addEventListener:function(r,e){dr[r]=dr[r]||[],dr[r].push(e)},removeEventListener:function(r,e){if(dr[r]&&dr[r].length){var t,n,i=$3(t=dr[r]).call(t,e);i!==-1&&LL(n=dr[r]).call(n,i)}},dispatch:function(r){var e=dr[r.type];e&&e.forEach(function(t){return t(r)})},createElement:function(r){switch(r=r.toLowerCase()){case"canvas":return new A1;case"image":case"img":return new yc;default:return new Hs}}},Si={},UL=Ut,Mm=Et.WeakMap,X1=UL(Mm)&&/native code/.test(String(Mm)),GL=Fp,Dm=T1("keys"),Gp=function(r){return Dm[r]||(Dm[r]=GL(r))},Du={},jL=X1,V1=Et,kL=jt,$L=Fr,lf=me,ff=Au.exports,zL=Gp,HL=Du,Fm="Object already initialized",xc=V1.TypeError,XL=V1.WeakMap;if(jL||ff.state){var Fe=ff.state||(ff.state=new XL);Fe.get=Fe.get,Fe.has=Fe.has,Fe.set=Fe.set,$s=function(r,e){if(Fe.has(r))throw new xc(Fm);return e.facade=r,Fe.set(r,e),e},Qi=function(r){return Fe.get(r)||{}},zs=function(r){return Fe.has(r)}}else{var In=zL("state");HL[In]=!0,$s=function(r,e){if(lf(r,In))throw new xc(Fm);return e.facade=r,$L(r,In,e),e},Qi=function(r){return lf(r,In)?r[In]:{}},zs=function(r){return lf(r,In)}}var Nr={set:$s,get:Qi,has:zs,enforce:function(r){return zs(r)?Qi(r):$s(r,{})},getterFor:function(r){return function(e){var t;if(!kL(e)||(t=Qi(e)).type!==r)throw new xc("Incompatible receiver, "+r+" required");return t}}},Tc=ee,VL=me,W1=Function.prototype,WL=Tc&&Object.getOwnPropertyDescriptor,Nm=VL(W1,"name"),YL={PROPER:Nm&&(function(){}).name==="something",CONFIGURABLE:Nm&&(!Tc||Tc&&WL(W1,"name").configurable)},Y1={},hf=me,qL=Mr,KL=R1.indexOf,ZL=Du,Lm=It([].push),q1=function(r,e){var t,n=qL(r),i=0,o=[];for(t in n)!hf(ZL,t)&&hf(n,t)&&Lm(o,t);for(;e.length>i;)hf(n,t=e[i++])&&(~KL(o,t)||Lm(o,t));return o},jp=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],JL=q1,QL=jp,K1=Object.keys||function(r){return JL(r,QL)},tB=ee,eB=O1,rB=qe,nB=Ke,iB=Mr,oB=K1;Y1.f=tB&&!eB?Object.defineProperties:function(r,e){nB(r);for(var t,n=iB(e),i=oB(e),o=i.length,a=0;o>a;)rB.f(r,t=i[a++],n[t]);return r};var Ra,Z1=Dr("document","documentElement"),aB=Ke,sB=Y1,Bm=jp,uB=Du,lB=Z1,fB=Np,Sc="prototype",Ec="script",J1=Gp("IE_PROTO"),cf=function(){},Q1=function(r){return"<"+Ec+">"+r+"</"+Ec+">"},Um=function(r){r.write(Q1("")),r.close();var e=r.parentWindow.Object;return r=null,e},ds=function(){try{Ra=new ActiveXObject("htmlfile")}catch{}var r,e,t;ds=typeof document<"u"?document.domain&&Ra?Um(Ra):(e=fB("iframe"),t="java"+Ec+":",e.style.display="none",lB.appendChild(e),e.src=String(t),(r=e.contentWindow.document).open(),r.write(Q1("document.F=Object")),r.close(),r.F):Um(Ra);for(var n=Bm.length;n--;)delete ds[Sc][Bm[n]];return ds()};uB[J1]=!0;var Qr,Gm,jm,kp=Object.create||function(r,e){var t;return r!==null?(cf[Sc]=aB(r),t=new cf,cf[Sc]=null,t[J1]=r):t=ds(),e===void 0?t:sB.f(t,e)},hB=!gt(function(){function r(){}return r.prototype.constructor=null,Object.getPrototypeOf(new r)!==r.prototype}),cB=me,dB=Ut,pB=Cu,vB=hB,km=Gp("IE_PROTO"),wc=Object,yB=wc.prototype,Fu=vB?wc.getPrototypeOf:function(r){var e=pB(r);if(cB(e,km))return e[km];var t=e.constructor;return dB(t)&&e instanceof t?t.prototype:e instanceof wc?yB:null},mB=Fr,Nu=function(r,e,t,n){return n&&n.enumerable?r[e]=t:mB(r,e,t),r},_B=gt,gB=Ut,bB=jt,xB=kp,$m=Fu,TB=Nu,Oc=Wt("iterator"),tT=!1;[].keys&&("next"in(jm=[].keys())?(Gm=$m($m(jm)))!==Object.prototype&&(Qr=Gm):tT=!0);var SB=!bB(Qr)||_B(function(){var r={};return Qr[Oc].call(r)!==r});gB((Qr=SB?{}:xB(Qr))[Oc])||TB(Qr,Oc,function(){return this});var eT={IteratorPrototype:Qr,BUGGY_SAFARI_ITERATORS:tT},EB=Mu,wB=Bp?{}.toString:function(){return"[object "+EB(this)+"]"},OB=Bp,PB=qe.f,AB=Fr,CB=me,RB=wB,zm=Wt("toStringTag"),$o=function(r,e,t,n){var i=t?r:r&&r.prototype;i&&(CB(i,zm)||PB(i,zm,{configurable:!0,value:e}),n&&!OB&&AB(i,"toString",RB))},IB=eT.IteratorPrototype,MB=kp,DB=xi,FB=$o,NB=Si,LB=function(){return this},BB=It,UB=Ye,GB=jt,jB=function(r){return GB(r)||r===null},kB=String,$B=TypeError,zB=function(r,e,t){try{return BB(UB(Object.getOwnPropertyDescriptor(r,e)[t]))}catch{}},HB=jt,XB=Ou,VB=function(r){if(jB(r))return r;throw new $B("Can't set "+kB(r)+" as a prototype")},WB=Object.setPrototypeOf||("__proto__"in{}?function(){var r,e=!1,t={};try{(r=zB(Object.prototype,"__proto__","set"))(t,[]),e=t instanceof Array}catch{}return function(n,i){return XB(n),VB(i),HB(n)&&(e?r(n,i):n.__proto__=i),n}}():void 0),YB=Mt,qB=ye,KB=YL,ZB=function(r,e,t,n){var i=e+" Iterator";return r.prototype=MB(IB,{next:DB(1,t)}),FB(r,i,!1,!0),NB[i]=LB,r},JB=Fu,QB=$o,Hm=Nu,Xm=Si,tU=eT,eU=KB.PROPER,Ia=tU.BUGGY_SAFARI_ITERATORS,df=Wt("iterator"),Vm="keys",Ma="values",Wm="entries",rU=function(){return this},rT=function(r,e,t,n,i,o,a){ZB(t,e,n);var s,u,l,f=function(m){if(m===i&&v)return v;if(!Ia&&m&&m in d)return d[m];switch(m){case Vm:case Ma:case Wm:return function(){return new t(this,m)}}return function(){return new t(this)}},c=e+" Iterator",h=!1,d=r.prototype,p=d[df]||d["@@iterator"]||i&&d[i],v=!Ia&&p||f(i),y=e==="Array"&&d.entries||p;if(y&&(s=JB(y.call(new r)))!==Object.prototype&&s.next&&(QB(s,c,!0,!0),Xm[c]=rU),eU&&i===Ma&&p&&p.name!==Ma&&(h=!0,v=function(){return qB(p,this)}),i)if(u={values:f(Ma),keys:o?v:f(Vm),entries:f(Wm)},a)for(l in u)(Ia||h||!(l in d))&&Hm(d,l,u[l]);else YB({target:e,proto:!0,forced:Ia||h},u);return a&&d[df]!==v&&Hm(d,df,v,{}),Xm[e]=v,u},nT=function(r,e){return{value:r,done:e}},nU=Mr,Ym=Si,iT=Nr,iU=(qe.f,rT),Da=nT,oT="Array Iterator",oU=iT.set,aU=iT.getterFor(oT);iU(Array,"Array",function(r,e){oU(this,{type:oT,target:nU(r),index:0,kind:e})},function(){var r=aU(this),e=r.target,t=r.index++;if(!e||t>=e.length)return r.target=void 0,Da(void 0,!0);switch(r.kind){case"keys":return Da(t,!1);case"values":return Da(e[t],!1)}return Da([t,e[t]],!1)},"values");Ym.Arguments=Ym.Array;var aT=!gt(function(){return Object.isExtensible(Object.preventExtensions({}))}),sU=Nu,sT=function(r,e,t){for(var n in e)t&&t.unsafe&&r[n]?r[n]=e[n]:sU(r,n,e[n],t);return r},Lu={exports:{}},Bu={},uU=q1,lU=jp.concat("length","prototype");Bu.f=Object.getOwnPropertyNames||function(r){return uU(r,lU)};var uT={},lT=It([].slice),fU=vn,hU=Mr,qm=Bu.f,cU=lT,Km=typeof window=="object"&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];uT.f=function(r){return Km&&fU(r)==="Window"?function(e){try{return qm(e)}catch{return cU(Km)}}(r):qm(hU(r))};var dU=gt(function(){if(typeof ArrayBuffer=="function"){var r=new ArrayBuffer(8);Object.isExtensible(r)&&Object.defineProperty(r,"a",{value:8})}}),pU=gt,vU=jt,yU=vn,Zm=dU,Fa=Object.isExtensible,mU=pU(function(){Fa(1)})||Zm?function(r){return!!vU(r)&&(!Zm||yU(r)!=="ArrayBuffer")&&(!Fa||Fa(r))}:Fa,_U=Mt,gU=It,bU=Du,xU=jt,pf=me,TU=qe.f,Jm=Bu,SU=uT,vf=mU,EU=aT,Qm=!1,nr=Fp("meta"),wU=0,yf=function(r){TU(r,nr,{value:{objectID:"O"+wU++,weakData:{}}})},OU=Lu.exports={enable:function(){OU.enable=function(){},Qm=!0;var r=Jm.f,e=gU([].splice),t={};t[nr]=1,r(t).length&&(Jm.f=function(n){for(var i=r(n),o=0,a=i.length;o<a;o++)if(i[o]===nr){e(i,o,1);break}return i},_U({target:"Object",stat:!0,forced:!0},{getOwnPropertyNames:SU.f}))},fastKey:function(r,e){if(!xU(r))return typeof r=="symbol"?r:(typeof r=="string"?"S":"P")+r;if(!pf(r,nr)){if(!vf(r))return"F";if(!e)return"E";yf(r)}return r[nr].objectID},getWeakData:function(r,e){if(!pf(r,nr)){if(!vf(r))return!0;if(!e)return!1;yf(r)}return r[nr].weakData},onFreeze:function(r){return EU&&Qm&&vf(r)&&!pf(r,nr)&&yf(r),r}};bU[nr]=!0;var PU=Si,AU=Wt("iterator"),CU=Array.prototype,RU=Mu,t_=Dp,IU=Ti,MU=Si,DU=Wt("iterator"),fT=function(r){if(!IU(r))return t_(r,DU)||t_(r,"@@iterator")||MU[RU(r)]},FU=ye,NU=Ye,LU=Ke,BU=Go,UU=fT,GU=TypeError,jU=ye,e_=Ke,kU=Dp,$U=ko,zU=ye,HU=Ke,XU=Go,VU=function(r){return r!==void 0&&(PU.Array===r||CU[AU]===r)},WU=Iu,r_=mn,YU=function(r,e){var t=arguments.length<2?UU(r):e;if(NU(t))return LU(FU(t,r));throw new GU(BU(r)+" is not iterable")},qU=fT,n_=function(r,e,t){var n,i;e_(r);try{if(!(n=kU(r,"return"))){if(e==="throw")throw t;return t}n=jU(n,r)}catch(o){i=!0,n=o}if(e==="throw")throw t;if(i)throw n;return e_(n),t},KU=TypeError,ps=function(r,e){this.stopped=r,this.result=e},i_=ps.prototype,bn=function(r,e,t){var n,i,o,a,s,u,l,f=t&&t.that,c=!(!t||!t.AS_ENTRIES),h=!(!t||!t.IS_RECORD),d=!(!t||!t.IS_ITERATOR),p=!(!t||!t.INTERRUPTED),v=$U(e,f),y=function(g){return n&&n_(n,"normal",g),new ps(!0,g)},m=function(g){return c?(HU(g),p?v(g[0],g[1],y):v(g[0],g[1])):p?v(g,y):v(g)};if(h)n=r.iterator;else if(d)n=r;else{if(!(i=qU(r)))throw new KU(XU(r)+" is not iterable");if(VU(i)){for(o=0,a=WU(r);a>o;o++)if((s=m(r[o]))&&r_(i_,s))return s;return new ps(!1)}n=YU(r,i)}for(u=h?r.next:n.next;!(l=zU(u,n)).done;){try{s=m(l.value)}catch(g){n_(n,"throw",g)}if(typeof s=="object"&&s&&r_(i_,s))return s}return new ps(!1)},ZU=mn,JU=TypeError,$p=function(r,e){if(ZU(e,r))return r;throw new JU("Incorrect invocation")},QU=ko,tG=m1,eG=Cu,rG=Iu,nG=G1,o_=It([].push),Na=function(r){var e=r===1,t=r===2,n=r===3,i=r===4,o=r===6,a=r===7,s=r===5||o;return function(u,l,f,c){for(var h,d,p=eG(u),v=tG(p),y=rG(v),m=QU(l,f),g=0,_=c||nG,x=e?_(u,y):t||a?_(u,0):void 0;y>g;g++)if((s||g in v)&&(d=m(h=v[g],g,p),r))if(e)x[g]=d;else if(d)switch(r){case 3:return!0;case 5:return h;case 6:return g;case 2:o_(x,h)}else switch(r){case 4:return!1;case 7:o_(x,h)}return o?-1:n||i?i:x}},Uu={forEach:Na(0),map:Na(1),find:Na(5),findIndex:Na(6)},iG=Mt,oG=Et,aG=Lu.exports,sG=gt,uG=Fr,lG=bn,fG=$p,hG=Ut,cG=jt,dG=Ti,pG=$o,vG=qe.f,yG=Uu.forEach,mG=ee,_G=Nr.set,gG=Nr.getterFor,bG=It,a_=sT,La=Lu.exports.getWeakData,xG=$p,TG=Ke,SG=Ti,mf=jt,EG=bn,s_=me,wG=Nr.set,OG=Nr.getterFor,PG=Uu.find,AG=Uu.findIndex,CG=bG([].splice),RG=0,Ba=function(r){return r.frozen||(r.frozen=new hT)},hT=function(){this.entries=[]},_f=function(r,e){return PG(r.entries,function(t){return t[0]===e})};hT.prototype={get:function(r){var e=_f(this,r);if(e)return e[1]},has:function(r){return!!_f(this,r)},set:function(r,e){var t=_f(this,r);t?t[1]=e:this.entries.push([r,e])},delete:function(r){var e=AG(this.entries,function(t){return t[0]===r});return~e&&CG(this.entries,e,1),!!~e}};var Li,IG={getConstructor:function(r,e,t,n){var i=r(function(u,l){xG(u,o),wG(u,{type:e,id:RG++,frozen:void 0}),SG(l)||EG(l,u[n],{that:u,AS_ENTRIES:t})}),o=i.prototype,a=OG(e),s=function(u,l,f){var c=a(u),h=La(TG(l),!0);return h===!0?Ba(c).set(l,f):h[c.id]=f,u};return a_(o,{delete:function(u){var l=a(this);if(!mf(u))return!1;var f=La(u);return f===!0?Ba(l).delete(u):f&&s_(f,l.id)&&delete f[l.id]},has:function(u){var l=a(this);if(!mf(u))return!1;var f=La(u);return f===!0?Ba(l).has(u):f&&s_(f,l.id)}}),a_(o,t?{get:function(u){var l=a(this);if(mf(u)){var f=La(u);return f===!0?Ba(l).get(u):f?f[l.id]:void 0}},set:function(u,l){return s(this,u,l)}}:{add:function(u){return s(this,u,!0)}}),i}},MG=aT,u_=Et,vs=It,l_=sT,DG=Lu.exports,FG=function(r,e,t){var n,i=r.indexOf("Map")!==-1,o=r.indexOf("Weak")!==-1,a=i?"set":"add",s=oG[r],u=s&&s.prototype,l={};if(mG&&hG(s)&&(o||u.forEach&&!sG(function(){new s().entries().next()}))){var f=(n=e(function(h,d){_G(fG(h,f),{type:r,collection:new s}),dG(d)||lG(d,h[a],{that:h,AS_ENTRIES:i})})).prototype,c=gG(r);yG(["add","clear","delete","forEach","get","has","set","keys","values","entries"],function(h){var d=h==="add"||h==="set";!(h in u)||o&&h==="clear"||uG(f,h,function(p,v){var y=c(this).collection;if(!d&&o&&!cG(p))return h==="get"&&void 0;var m=y[h](p===0?0:p,v);return d?this:m})}),o||vG(f,"size",{configurable:!0,get:function(){return c(this).collection.size}})}else n=t.getConstructor(e,r,i,a),aG.enable();return pG(n,r,!1,!0),l[r]=n,iG({global:!0,forced:!0},l),o||t.setStrong(n,r,i),n},cT=IG,Ua=jt,Ga=Nr.enforce,NG=gt,LG=X1,zo=Object,BG=Array.isArray,ja=zo.isExtensible,f_=zo.isFrozen,UG=zo.isSealed,h_=zo.freeze,GG=zo.seal,jG=!u_.ActiveXObject&&"ActiveXObject"in u_,dT=function(r){return function(){return r(this,arguments.length?arguments[0]:void 0)}},pT=FG("WeakMap",dT,cT),Un=pT.prototype,ka=vs(Un.set);if(LG)if(jG){Li=cT.getConstructor(dT,"WeakMap",!0),DG.enable();var c_=vs(Un.delete),$a=vs(Un.has),d_=vs(Un.get);l_(Un,{delete:function(r){if(Ua(r)&&!ja(r)){var e=Ga(this);return e.frozen||(e.frozen=new Li),c_(this,r)||e.frozen.delete(r)}return c_(this,r)},has:function(r){if(Ua(r)&&!ja(r)){var e=Ga(this);return e.frozen||(e.frozen=new Li),$a(this,r)||e.frozen.has(r)}return $a(this,r)},get:function(r){if(Ua(r)&&!ja(r)){var e=Ga(this);return e.frozen||(e.frozen=new Li),$a(this,r)?d_(this,r):e.frozen.get(r)}return d_(this,r)},set:function(r,e){if(Ua(r)&&!ja(r)){var t=Ga(this);t.frozen||(t.frozen=new Li),$a(this,r)?ka(this,r,e):t.frozen.set(r,e)}else ka(this,r,e);return this}})}else MG&&NG(function(){var r=h_([]);return ka(new pT,r,1),!f_(r)})&&l_(Un,{set:function(r,e){var t;return BG(r)&&(f_(r)?t=h_:UG(r)&&(t=GG)),ka(this,r,e),t&&t(r),this}});var kG=yn.WeakMap,$G={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0},zG=Et,HG=$o,p_=Si;for(var gf in $G)HG(zG[gf],gf),p_[gf]=p_.Array;var bf=new(pn(kG)),Hn=function(){function r(e){var t=this,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];if(_n(this,r),this.binaryType="",this.bufferedAmount=0,this.extensions="",this.onclose=null,this.onerror=null,this.onmessage=null,this.onopen=null,this.protocol="",this.readyState=3,typeof e!="string"||!/(^ws:\/\/)|(^wss:\/\/)/.test(e))throw new TypeError("Failed to construct 'WebSocket': The URL '".concat(e,"' is invalid"));this.url=e,this.readyState=r.CONNECTING;var i=wx.connectSocket({url:e,protocols:Array.isArray(n)?n:[n]});return bf.set(this,i),i.onClose(function(o){t.readyState=r.CLOSED,typeof t.onclose=="function"&&t.onclose(o)}),i.onMessage(function(o){typeof t.onmessage=="function"&&t.onmessage(o)}),i.onOpen(function(){t.readyState=r.OPEN,typeof t.onopen=="function"&&t.onopen()}),i.onError(function(o){typeof t.onerror=="function"&&t.onerror(new Error(o.errMsg))}),this}return gn(r,[{key:"close",value:function(e,t){this.readyState=r.CLOSING,bf.get(this).close({code:e,reason:t})}},{key:"send",value:function(e){if(typeof e!="string"&&!(e instanceof ArrayBuffer))throw new TypeError("Failed to send message: The data ".concat(e," is invalid"));bf.get(this).send({data:e})}}])}();pt(Hn,"CONNECTING",0),pt(Hn,"OPEN",1),pt(Hn,"CLOSING",2),pt(Hn,"CLOSED",3);var Pc=gn(function r(e){_n(this,r),pt(this,"preventDefault",je),pt(this,"stopPropagation",je),pt(this,"target",qn),pt(this,"currentTarget",qn),this.type=e});function za(r){return function(e){var t=new Pc(r);t.touches=t.targetTouches=e.touches,t.changedTouches=e.changedTouches,t.timeStamp=e.timeStamp,Bn.dispatch(t)}}wx.onTouchStart(za("touchstart")),wx.onTouchMove(za("touchmove")),wx.onTouchEnd(za("touchend")),wx.onTouchCancel(za("touchcancel"));var v_=gn(function r(){_n(this,r)}),y_={getItem:function(r){return wx.getStorageSync(r)},setItem:function(r,e){return wx.setStorageSync(r,e)},clear:function(){wx.clearStorageSync()}},XG=Date.now(),VG=Object.freeze({__proto__:null,now:function(){return Date.now()-XG}}),WG=Uu.map;Mt({target:"Array",proto:!0,forced:!j1("map")},{map:function(r){return WG(this,r,arguments.length>1?arguments[1]:void 0)}});var YG=Lp("Array","map"),qG=mn,KG=YG,xf=Array.prototype,ZG=pn(function(r){var e=r.map;return r===xf||qG(xf,r)&&e===xf.map?KG:e}),vT=ee,JG=gt,yT=It,QG=Fu,tj=K1,ej=Mr,mT=yT(Ip.f),rj=yT([].push),nj=vT&&JG(function(){var r=Object.create(null);return r[2]=2,!mT(r,2)}),ij=function(r){return function(e){for(var t,n=ej(e),i=tj(n),o=nj&&QG(n)===null,a=i.length,s=0,u=[];a>s;)t=i[s++],vT&&!(o?t in n:mT(n,t))||rj(u,r?[t,n[t]]:n[t]);return u}},oj={entries:ij(!0)}.entries;Mt({target:"Object",stat:!0},{entries:function(r){return oj(r)}});var aj=yn.Object.entries,sj=pn(aj),_T={};_T.f=Object.getOwnPropertySymbols;var uj=Dr,lj=Bu,fj=_T,hj=Ke,cj=It([].concat),dj=uj("Reflect","ownKeys")||function(r){var e=lj.f(hj(r)),t=fj.f;return t?cj(e,t(r)):e},m_=me,pj=dj,vj=wu,yj=qe,mj=jt,_j=Fr,gT=Error,gj=It("".replace),bj=String(new gT("zxcasd").stack),bT=/\n\s*at [^:]*:[^\n]*/,xj=bT.test(bj),Tj=xi,Sj=!gt(function(){var r=new Error("a");return!("stack"in r)||(Object.defineProperty(r,"stack",Tj(1,7)),r.stack!==7)}),Ej=Fr,wj=function(r,e){if(xj&&typeof r=="string"&&!gT.prepareStackTrace)for(;e--;)r=gj(r,bT,"");return r},Oj=Sj,__=Error.captureStackTrace,Pj=Mu,Aj=String,zp=function(r){if(Pj(r)==="Symbol")throw new TypeError("Cannot convert a Symbol value to a string");return Aj(r)},Cj=zp,Rj=Mt,Ij=mn,Mj=Fu,Xs=WB,Dj=function(r,e,t){for(var n=pj(e),i=yj.f,o=vj.f,a=0;a<n.length;a++){var s=n[a];m_(r,s)||t&&m_(t,s)||i(r,s,o(e,s))}},xT=kp,Tf=Fr,Sf=xi,Fj=function(r,e){mj(e)&&"cause"in e&&_j(r,"cause",e.cause)},Nj=function(r,e,t,n){Oj&&(__?__(r,e):Ej(r,"stack",wj(t,n)))},Lj=bn,Bj=function(r,e){return r===void 0?arguments.length<2?"":e:Cj(r)},Uj=Wt("toStringTag"),Vs=Error,Gj=[].push,fi=function(r,e){var t,n=Ij(Ef,this);Xs?t=Xs(new Vs,n?Mj(this):Ef):(t=n?this:xT(Ef),Tf(t,Uj,"Error")),e!==void 0&&Tf(t,"message",Bj(e)),Nj(t,fi,t.stack,1),arguments.length>2&&Fj(t,arguments[2]);var i=[];return Lj(r,Gj,{that:i}),Tf(t,"errors",i),t};Xs?Xs(fi,Vs):Dj(fi,Vs,{name:!0});var Ef=fi.prototype=xT(Vs.prototype,{constructor:Sf(1,fi),message:Sf(1,""),name:Sf(1,"AggregateError")});Rj({global:!0},{AggregateError:fi});var Eo,Mn,g_,wf,Gu=vn(Et.process)==="process",jj=qe,kj=Dr,$j=function(r,e,t){return jj.f(r,e,t)},zj=ee,b_=Wt("species"),Hj=U1,Xj=Go,Vj=TypeError,x_=Ke,Wj=function(r){if(Hj(r))return r;throw new Vj(Xj(r)+" is not a constructor")},Yj=Ti,qj=Wt("species"),TT=function(r,e){var t,n=x_(r).constructor;return n===void 0||Yj(t=x_(n)[qj])?e:Wj(t)},Kj=TypeError,ST=/(?:ipad|iphone|ipod).*applewebkit/i.test(Pu),re=Et,Zj=h1,Jj=ko,T_=Ut,Qj=me,ET=gt,S_=Z1,t4=lT,E_=Np,e4=function(r,e){if(r<e)throw new Kj("Not enough arguments");return r},r4=ST,n4=Gu,Ac=re.setImmediate,w_=re.clearImmediate,i4=re.process,Of=re.Dispatch,o4=re.Function,O_=re.MessageChannel,a4=re.String,Pf=0,to={},P_="onreadystatechange";ET(function(){Eo=re.location});var Hp=function(r){if(Qj(to,r)){var e=to[r];delete to[r],e()}},Af=function(r){return function(){Hp(r)}},A_=function(r){Hp(r.data)},C_=function(r){re.postMessage(a4(r),Eo.protocol+"//"+Eo.host)};Ac&&w_||(Ac=function(r){e4(arguments.length,1);var e=T_(r)?r:o4(r),t=t4(arguments,1);return to[++Pf]=function(){Zj(e,void 0,t)},Mn(Pf),Pf},w_=function(r){delete to[r]},n4?Mn=function(r){i4.nextTick(Af(r))}:Of&&Of.now?Mn=function(r){Of.now(Af(r))}:O_&&!r4?(wf=(g_=new O_).port2,g_.port1.onmessage=A_,Mn=Jj(wf.postMessage,wf)):re.addEventListener&&T_(re.postMessage)&&!re.importScripts&&Eo&&Eo.protocol!=="file:"&&!ET(C_)?(Mn=C_,re.addEventListener("message",A_,!1)):Mn=P_ in E_("script")?function(r){S_.appendChild(E_("script"))[P_]=function(){S_.removeChild(this),Hp(r)}}:function(r){setTimeout(Af(r),0)});var wT={set:Ac},R_=Et,s4=ee,u4=Object.getOwnPropertyDescriptor,OT=function(){this.head=null,this.tail=null};OT.prototype={add:function(r){var e={item:r,next:null},t=this.tail;t?t.next=e:this.head=e,this.tail=e},get:function(){var r=this.head;if(r)return(this.head=r.next)===null&&(this.tail=null),r.item}};var Dn,Cf,Rf,If,I_,PT=OT,l4=/ipad|iphone|ipod/i.test(Pu)&&typeof Pebble<"u",f4=/web0s(?!.*chrome)/i.test(Pu),hi=Et,h4=function(r){if(!s4)return R_[r];var e=u4(R_,r);return e&&e.value},M_=ko,Mf=wT.set,c4=PT,d4=ST,p4=l4,v4=f4,Df=Gu,D_=hi.MutationObserver||hi.WebKitMutationObserver,F_=hi.document,N_=hi.process,Ha=hi.Promise,Cc=h4("queueMicrotask");if(!Cc){var Xa=new c4,Va=function(){var r,e;for(Df&&(r=N_.domain)&&r.exit();e=Xa.get();)try{e()}catch(t){throw Xa.head&&Dn(),t}r&&r.enter()};d4||Df||v4||!D_||!F_?!p4&&Ha&&Ha.resolve?((If=Ha.resolve(void 0)).constructor=Ha,I_=M_(If.then,If),Dn=function(){I_(Va)}):Df?Dn=function(){N_.nextTick(Va)}:(Mf=M_(Mf,hi),Dn=function(){Mf(Va)}):(Cf=!0,Rf=F_.createTextNode(""),new D_(Va).observe(Rf,{characterData:!0}),Dn=function(){Rf.data=Cf=!Cf}),Cc=function(r){Xa.head||Dn(),Xa.add(r)}}var y4=Cc,Ho=function(r){try{return{error:!1,value:r()}}catch(e){return{error:!0,value:e}}},sn=Et.Promise,AT=typeof Deno=="object"&&Deno&&typeof Deno.version=="object",m4=!AT&&!Gu&&typeof window=="object"&&typeof document=="object",_4=Et,eo=sn,g4=Ut,b4=w1,x4=D1,T4=Wt,S4=m4,E4=AT,Ff=Mp,L_=eo&&eo.prototype,w4=T4("species"),CT=g4(_4.PromiseRejectionEvent),O4=b4("Promise",function(){var r=x4(eo),e=r!==String(eo);if(!e&&Ff===66||!L_.catch||!L_.finally)return!0;if(!Ff||Ff<51||!/native code/.test(r)){var t=new eo(function(i){i(1)}),n=function(i){i(function(){},function(){})};if((t.constructor={})[w4]=n,!(t.then(function(){})instanceof n))return!0}return!e&&(S4||E4)&&!CT}),Xo={CONSTRUCTOR:O4,REJECTION_EVENT:CT},ur={},B_=Ye,P4=TypeError,A4=function(r){var e,t;this.promise=new r(function(n,i){if(e!==void 0||t!==void 0)throw new P4("Bad Promise constructor");e=n,t=i}),this.resolve=B_(e),this.reject=B_(t)};ur.f=function(r){return new A4(r)};var Nf,U_,C4=Mt,Ws=Gu,Cr=Et,Vo=ye,R4=Nu,I4=$o,M4=function(r){var e=kj(r);zj&&e&&!e[b_]&&$j(e,b_,{configurable:!0,get:function(){return this}})},D4=Ye,Rc=Ut,F4=jt,N4=$p,L4=TT,RT=wT.set,Xp=y4,B4=function(r,e){try{arguments.length===1?console.error(r):console.error(r,e)}catch{}},U4=Ho,G4=PT,IT=Nr,Ic=sn,MT=Xo,DT=ur,ys="Promise",G_=MT.CONSTRUCTOR,j4=MT.REJECTION_EVENT,Lf=IT.getterFor(ys),k4=IT.set,$4=Ic&&Ic.prototype,Bi=Ic,Bf=$4,FT=Cr.TypeError,Mc=Cr.document,Vp=Cr.process,Dc=DT.f,z4=Dc,H4=!!(Mc&&Mc.createEvent&&Cr.dispatchEvent),NT="unhandledrejection",LT=function(r){var e;return!(!F4(r)||!Rc(e=r.then))&&e},BT=function(r,e){var t,n,i,o=e.value,a=e.state===1,s=a?r.ok:r.fail,u=r.resolve,l=r.reject,f=r.domain;try{s?(a||(e.rejection===2&&V4(e),e.rejection=1),s===!0?t=o:(f&&f.enter(),t=s(o),f&&(f.exit(),i=!0)),t===r.promise?l(new FT("Promise-chain cycle")):(n=LT(t))?Vo(n,t,u,l):u(t)):l(o)}catch(c){f&&!i&&f.exit(),l(c)}},UT=function(r,e){r.notified||(r.notified=!0,Xp(function(){for(var t,n=r.reactions;t=n.get();)BT(t,r);r.notified=!1,e&&!r.rejection&&X4(r)}))},GT=function(r,e,t){var n,i;H4?((n=Mc.createEvent("Event")).promise=e,n.reason=t,n.initEvent(r,!1,!0),Cr.dispatchEvent(n)):n={promise:e,reason:t},!j4&&(i=Cr["on"+r])?i(n):r===NT&&B4("Unhandled promise rejection",t)},X4=function(r){Vo(RT,Cr,function(){var e,t=r.facade,n=r.value;if(j_(r)&&(e=U4(function(){Ws?Vp.emit("unhandledRejection",n,t):GT(NT,t,n)}),r.rejection=Ws||j_(r)?2:1,e.error))throw e.value})},j_=function(r){return r.rejection!==1&&!r.parent},V4=function(r){Vo(RT,Cr,function(){var e=r.facade;Ws?Vp.emit("rejectionHandled",e):GT("rejectionhandled",e,r.value)})},Xn=function(r,e,t){return function(n){r(e,n,t)}},Kn=function(r,e,t){r.done||(r.done=!0,t&&(r=t),r.value=e,r.state=2,UT(r,!0))},Fc=function(r,e,t){if(!r.done){r.done=!0,t&&(r=t);try{if(r.facade===e)throw new FT("Promise can't be resolved itself");var n=LT(e);n?Xp(function(){var i={done:!1};try{Vo(n,e,Xn(Fc,i,r),Xn(Kn,i,r))}catch(o){Kn(i,o,r)}}):(r.value=e,r.state=1,UT(r,!1))}catch(i){Kn({done:!1},i,r)}}};G_&&(Bf=(Bi=function(r){N4(this,Bf),D4(r),Vo(Nf,this);var e=Lf(this);try{r(Xn(Fc,e),Xn(Kn,e))}catch(t){Kn(e,t)}}).prototype,(Nf=function(r){k4(this,{type:ys,done:!1,notified:!1,parent:!1,reactions:new G4,rejection:!1,state:0,value:void 0})}).prototype=R4(Bf,"then",function(r,e){var t=Lf(this),n=Dc(L4(this,Bi));return t.parent=!0,n.ok=!Rc(r)||r,n.fail=Rc(e)&&e,n.domain=Ws?Vp.domain:void 0,t.state===0?t.reactions.add(n):Xp(function(){BT(n,t)}),n.promise}),U_=function(){var r=new Nf,e=Lf(r);this.promise=r,this.resolve=Xn(Fc,e),this.reject=Xn(Kn,e)},DT.f=Dc=function(r){return r===Bi||r===void 0?new U_(r):z4(r)}),C4({global:!0,wrap:!0,forced:G_},{Promise:Bi}),I4(Bi,ys,!1,!0),M4(ys);var jT=Wt("iterator"),kT=!1;try{var W4=0,k_={next:function(){return{done:!!W4++}},return:function(){kT=!0}};k_[jT]=function(){return this},Array.from(k_,function(){throw 2})}catch{}var Y4=sn,q4=function(r,e){try{if(!e&&!kT)return!1}catch{return!1}var t=!1;try{var n={};n[jT]=function(){return{next:function(){return{done:t=!0}}}},r(n)}catch{}return t},ju=Xo.CONSTRUCTOR||!q4(function(r){Y4.all(r).then(void 0,function(){})}),K4=ye,Z4=Ye,J4=ur,Q4=Ho,tk=bn;Mt({target:"Promise",stat:!0,forced:ju},{all:function(r){var e=this,t=J4.f(e),n=t.resolve,i=t.reject,o=Q4(function(){var a=Z4(e.resolve),s=[],u=0,l=1;tk(r,function(f){var c=u++,h=!1;l++,K4(a,e,f).then(function(d){h||(h=!0,s[c]=d,--l||n(s))},i)}),--l||n(s)});return o.error&&i(o.value),t.promise}});var ek=Mt,rk=Xo.CONSTRUCTOR;sn&&sn.prototype,ek({target:"Promise",proto:!0,forced:rk,real:!0},{catch:function(r){return this.then(void 0,r)}});var nk=ye,ik=Ye,ok=ur,ak=Ho,sk=bn;Mt({target:"Promise",stat:!0,forced:ju},{race:function(r){var e=this,t=ok.f(e),n=t.reject,i=ak(function(){var o=ik(e.resolve);sk(r,function(a){nk(o,e,a).then(t.resolve,n)})});return i.error&&n(i.value),t.promise}});var uk=ur;Mt({target:"Promise",stat:!0,forced:Xo.CONSTRUCTOR},{reject:function(r){var e=uk.f(this);return(0,e.reject)(r),e.promise}});var lk=Ke,fk=jt,hk=ur,$T=function(r,e){if(lk(r),fk(e)&&e.constructor===r)return e;var t=hk.f(r);return(0,t.resolve)(e),t.promise},ck=Mt,dk=sn,pk=Xo.CONSTRUCTOR,vk=$T,yk=Dr("Promise"),mk=!pk;ck({target:"Promise",stat:!0,forced:!0},{resolve:function(r){return vk(mk&&this===yk?dk:this,r)}});var _k=ye,gk=Ye,bk=ur,xk=Ho,Tk=bn;Mt({target:"Promise",stat:!0,forced:ju},{allSettled:function(r){var e=this,t=bk.f(e),n=t.resolve,i=t.reject,o=xk(function(){var a=gk(e.resolve),s=[],u=0,l=1;Tk(r,function(f){var c=u++,h=!1;l++,_k(a,e,f).then(function(d){h||(h=!0,s[c]={status:"fulfilled",value:d},--l||n(s))},function(d){h||(h=!0,s[c]={status:"rejected",reason:d},--l||n(s))})}),--l||n(s)});return o.error&&i(o.value),t.promise}});var Sk=ye,Ek=Ye,wk=Dr,Ok=ur,Pk=Ho,Ak=bn,$_="No one promise resolved";Mt({target:"Promise",stat:!0,forced:ju},{any:function(r){var e=this,t=wk("AggregateError"),n=Ok.f(e),i=n.resolve,o=n.reject,a=Pk(function(){var s=Ek(e.resolve),u=[],l=0,f=1,c=!1;Ak(r,function(h){var d=l++,p=!1;f++,Sk(s,e,h).then(function(v){p||c||(c=!0,i(v))},function(v){p||c||(p=!0,u[d]=v,--f||o(new t(u,$_)))})}),--f||o(new t(u,$_))});return a.error&&o(a.value),n.promise}});var Ck=ur;Mt({target:"Promise",stat:!0},{withResolvers:function(){var r=Ck.f(this);return{promise:r.promise,resolve:r.resolve,reject:r.reject}}});var Rk=Mt,Nc=sn,Ik=gt,Mk=Dr,Dk=Ut,Fk=TT,z_=$T,Nk=Nc&&Nc.prototype;Rk({target:"Promise",proto:!0,real:!0,forced:!!Nc&&Ik(function(){Nk.finally.call({then:function(){}},function(){})})},{finally:function(r){var e=Fk(this,Mk("Promise")),t=Dk(r);return this.then(t?function(n){return z_(e,r()).then(function(){return n})}:r,t?function(n){return z_(e,r()).then(function(){throw n})}:r)}});var Wp=It,Lk=Ru,Bk=zp,Uk=Ou,Gk=Wp("".charAt),H_=Wp("".charCodeAt),jk=Wp("".slice),kk=function(r){return function(e,t){var n,i,o=Bk(Uk(e)),a=Lk(t),s=o.length;return a<0||a>=s?r?"":void 0:(n=H_(o,a))<55296||n>56319||a+1===s||(i=H_(o,a+1))<56320||i>57343?r?Gk(o,a):n:r?jk(o,a,a+2):i-56320+(n-55296<<10)+65536}},$k={charAt:kk(!0)}.charAt,zk=zp,zT=Nr,Hk=rT,X_=nT,HT="String Iterator",Xk=zT.set,Vk=zT.getterFor(HT);Hk(String,"String",function(r){Xk(this,{type:HT,string:zk(r),index:0})},function(){var r,e=Vk(this),t=e.string,n=e.index;return n>=t.length?X_(void 0,!0):(r=$k(t,n),e.index+=r.length,X_(r,!1))});var Wk=pn(yn.Promise),Xr=function(){function r(){_n(this,r),pt(this,"method","GET"),pt(this,"dataType","text"),pt(this,"responseType","utf-8"),pt(this,"onreadystatechange",je),pt(this,"onloadend",je),pt(this,"onerror",je),pt(this,"event",{}),pt(this,"responseHeader",{}),pt(this,"header",{Accept:"*/*"})}return gn(r,[{key:"open",value:function(e,t){this.method=e,this.url=t,this.readyState=r.OPENED}},{key:"setRequestHeader",value:function(e,t){this.header[e]=t}},{key:"addEventListener",value:function(e,t){this.event[e]=this.event[e]||[],this.event[e].push(t)}},{key:"getResponseHeader",value:function(e){return this.responseHeader&&this.responseHeader[e]}},{key:"getAllResponseHeaders",value:function(){var e,t=this.responseHeader||{};return ZG(e=sj(t)).call(e,function(n){return n.join(": ")}).join(`\r
`)}},{key:"emit",value:function(e){var t=this,n=this.event[e],i={type:e,target:this,method:this.method,response:this.response,responseText:this.responseText,responseType:this.responseType};n&&n.forEach(function(o){return o.call(t,i)}),e==="load"&&this.onload&&this.onload(i),e==="error"&&this.onerror&&this.onerror(i)}},{key:"readFile",value:function(e,t){return new Wk(function(n,i){wx.getFileSystemManager().readFile({encoding:t,filePath:e,success:function(o){return n(o.data)},fail:i})})}},{key:"send",value:function(e){var t=this;this.readyState=r.LOADING,this.url.match(/^(http(s)?:\/\/)\w+[^\s]+(\.[^\s]+){1,}/)?wx.request({data:e,url:this.url,header:this.header,method:this.method,dataType:this.dataType,responseType:this.responseType==="text"||this.responseType==="arraybuffer"?this.responseType:"text",success:function(n){t.readyState=r.DONE,t.responseHeader=n.header,t.status=n.statusCode,t.response=t.responseText=n.data,t.emit("load"),t.emit("readystatechange"),t.onloadend(),t.onreadystatechange()},fail:function(n){console.log("error",n),t.readyState=r.DONE,t.status=n.statusCode,t.response=t.responseText=n,t.responseHeader=n.header,t.emit("error"),t.emit("readystatechange"),t.onerror(),t.onreadystatechange()}}):(this.readyState=r.DONE,this.status=200,this.readFile(this.url,this.responseType==="text"?"utf-8":this.responseType).then(function(n){t.response=t.responseText=n,t.emit("readystatechange"),t.emit("load")}).catch(function(n){t.response=t.responseText=n,t.emit("error")}))}}])}();pt(Xr,"UNSEND",0),pt(Xr,"OPENED",1),pt(Xr,"HEADERS_RECEIVED",2),pt(Xr,"LOADING",3),pt(Xr,"DONE",4);var Yk=wx.getSystemInfoSync().platform;if(GameGlobal.canvas=qn,qn.addEventListener=Bn.addEventListener,qn.removeEventListener=Bn.removeEventListener,Yk==="devtools")for(var Uf in Object.defineProperties(window,{Image:{value:yc},Element:{value:Hs},ontouchstart:{value:je},WebSocket:{value:Hn},addEventListener:{value:je},TouchEvent:{value:Pc},XMLDocument:{value:v_},localStorage:{value:y_},XMLHttpRequest:{value:Xr},HTMLVideoElement:{value:Im},HTMLImageElement:{value:Rm},HTMLCanvasElement:{value:Cm}}),Bn){var V_=g3(window.document,Uf);V_&&!V_.configurable||Object.defineProperty(window.document,Uf,{value:Bn[Uf]})}else GameGlobal.Image=yc,GameGlobal.self=GameGlobal,GameGlobal.window=GameGlobal,GameGlobal.ontouchstart=je,GameGlobal.document=Bn,GameGlobal.location={origin:"",href:""},GameGlobal.WebSocket=Hn,GameGlobal.navigator={language:"zh-cn",appVersion:"5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Safari/537.36",userAgent:"Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Safari/537.36",onLine:!0},GameGlobal.TouchEvent=Pc,GameGlobal.addEventListener=je,GameGlobal.performance=VG,GameGlobal.XMLDocument=v_,GameGlobal.removeEventListener=je,GameGlobal.localStorage=y_,GameGlobal.XMLHttpRequest=Xr,GameGlobal.HTMLImageElement=mc.constructor.name!=="Object"?mc.constructor:Rm,GameGlobal.HTMLVideoElement=Im,GameGlobal.HTMLCanvasElement=Cm,GameGlobal.WebGLRenderingContext=GameGlobal.WebGLRenderingContext||{};/*!
 * @pixi/unsafe-eval - v6.5.10
 * Compiled Thu, 06 Jul 2023 15:25:11 UTC
 *
 * @pixi/unsafe-eval is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */var qk={float:function(r,e,t,n){t!==n&&(t.v=n,r.uniform1f(e,n))},vec2:function(r,e,t,n){(t[0]!==n[0]||t[1]!==n[1])&&(t[0]=n[0],t[1]=n[1],r.uniform2f(e,n[0],n[1]))},vec3:function(r,e,t,n){(t[0]!==n[0]||t[1]!==n[1]||t[2]!==n[2])&&(t[0]=n[0],t[1]=n[1],t[2]=n[2],r.uniform3f(e,n[0],n[1],n[2]))},int:function(r,e,t,n){r.uniform1i(e,n)},ivec2:function(r,e,t,n){r.uniform2i(e,n[0],n[1])},ivec3:function(r,e,t,n){r.uniform3i(e,n[0],n[1],n[2])},ivec4:function(r,e,t,n){r.uniform4i(e,n[0],n[1],n[2],n[3])},uint:function(r,e,t,n){r.uniform1ui(e,n)},uvec2:function(r,e,t,n){r.uniform2ui(e,n[0],n[1])},uvec3:function(r,e,t,n){r.uniform3ui(e,n[0],n[1],n[2])},uvec4:function(r,e,t,n){r.uniform4ui(e,n[0],n[1],n[2],n[3])},bool:function(r,e,t,n){t!==n&&(t.v=n,r.uniform1i(e,Number(n)))},bvec2:function(r,e,t,n){r.uniform2i(e,n[0],n[1])},bvec3:function(r,e,t,n){r.uniform3i(e,n[0],n[1],n[2])},bvec4:function(r,e,t,n){r.uniform4i(e,n[0],n[1],n[2],n[3])},mat2:function(r,e,t,n){r.uniformMatrix2fv(e,!1,n)},mat3:function(r,e,t,n){r.uniformMatrix3fv(e,!1,n)},mat4:function(r,e,t,n){r.uniformMatrix4fv(e,!1,n)},sampler2D:function(r,e,t,n){r.uniform1i(e,n)},samplerCube:function(r,e,t,n){r.uniform1i(e,n)},sampler2DArray:function(r,e,t,n){r.uniform1i(e,n)}},Kk={float:function(r,e,t,n){r.uniform1fv(e,n)},vec2:function(r,e,t,n){r.uniform2fv(e,n)},vec3:function(r,e,t,n){r.uniform3fv(e,n)},vec4:function(r,e,t,n){r.uniform4fv(e,n)},int:function(r,e,t,n){r.uniform1iv(e,n)},ivec2:function(r,e,t,n){r.uniform2iv(e,n)},ivec3:function(r,e,t,n){r.uniform3iv(e,n)},ivec4:function(r,e,t,n){r.uniform4iv(e,n)},uint:function(r,e,t,n){r.uniform1uiv(e,n)},uvec2:function(r,e,t,n){r.uniform2uiv(e,n)},uvec3:function(r,e,t,n){r.uniform3uiv(e,n)},uvec4:function(r,e,t,n){r.uniform4uiv(e,n)},bool:function(r,e,t,n){r.uniform1iv(e,n)},bvec2:function(r,e,t,n){r.uniform2iv(e,n)},bvec3:function(r,e,t,n){r.uniform3iv(e,n)},bvec4:function(r,e,t,n){r.uniform4iv(e,n)},sampler2D:function(r,e,t,n){r.uniform1iv(e,n)},samplerCube:function(r,e,t,n){r.uniform1iv(e,n)},sampler2DArray:function(r,e,t,n){r.uniform1iv(e,n)}};function Zk(r,e,t,n,i){var o=0,a=null,s=null,u=i.gl;for(var l in r.uniforms){var f=e[l],c=n[l],h=t[l],d=r.uniforms[l];if(!f){d.group&&i.shader.syncUniformGroup(c);continue}if(f.type==="float"&&f.size===1)c!==h.value&&(h.value=c,u.uniform1f(h.location,c));else if((f.type==="sampler2D"||f.type==="samplerCube"||f.type==="sampler2DArray")&&f.size===1&&!f.isArray)i.texture.bind(c,o),h.value!==o&&(h.value=o,u.uniform1i(h.location,o)),o++;else if(f.type==="mat3"&&f.size===1)d.a!==void 0?u.uniformMatrix3fv(h.location,!1,c.toArray(!0)):u.uniformMatrix3fv(h.location,!1,c);else if(f.type==="vec2"&&f.size===1)d.x!==void 0?(s=h.value,a=c,(s[0]!==a.x||s[1]!==a.y)&&(s[0]=a.x,s[1]=a.y,u.uniform2f(h.location,a.x,a.y))):(s=h.value,a=c,(s[0]!==a[0]||s[1]!==a[1])&&(s[0]=a[0],s[1]=a[1],u.uniform2f(h.location,a[0],a[1])));else if(f.type==="vec4"&&f.size===1)d.width!==void 0?(s=h.value,a=c,(s[0]!==a.x||s[1]!==a.y||s[2]!==a.width||s[3]!==a.height)&&(s[0]=a.x,s[1]=a.y,s[2]=a.width,s[3]=a.height,u.uniform4f(h.location,a.x,a.y,a.width,a.height))):(s=h.value,a=c,(s[0]!==a[0]||s[1]!==a[1]||s[2]!==a[2]||s[3]!==a[3])&&(s[0]=a[0],s[1]=a[1],s[2]=a[2],s[3]=a[3],u.uniform4f(h.location,a[0],a[1],a[2],a[3])));else{var p=f.size===1?qk:Kk;p[f.type].call(null,u,h.location,h.value,c)}}}function Jk(r){var e=r.ShaderSystem;if(!e)throw new Error("Unable to patch ShaderSystem, class not found.");Object.assign(e.prototype,{systemCheck:function(){},syncUniforms:function(t,n){var i=this,o=i.shader,a=i.renderer;Zk(t,o.program.uniformData,n.uniformData,t.uniforms,a)}})}function W_(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);e&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(r,i).enumerable})),t.push.apply(t,n)}return t}function Wa(r){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?W_(Object(t),!0).forEach(function(n){tr(r,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):W_(Object(t)).forEach(function(n){Object.defineProperty(r,n,Object.getOwnPropertyDescriptor(t,n))})}return r}function Qk(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,XT(n.key),n)}}function tr(r,e,t){return(e=XT(e))in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}function Ys(r){return Ys=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},Ys(r)}function Lc(r,e){return Lc=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,n){return t.__proto__=n,t},Lc(r,e)}function er(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function t5(r,e){if(e&&(typeof e=="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return er(r)}function e5(r){var e=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}();return function(){var t,n=Ys(r);if(e){var i=Ys(this).constructor;t=Reflect.construct(n,arguments,i)}else t=n.apply(this,arguments);return t5(this,t)}}function Y_(r,e){(e==null||e>r.length)&&(e=r.length);for(var t=0,n=new Array(e);t<e;t++)n[t]=r[t];return n}function q_(r,e){var t=typeof Symbol<"u"&&r[Symbol.iterator]||r["@@iterator"];if(!t){if(Array.isArray(r)||(t=function(u,l){if(u){if(typeof u=="string")return Y_(u,l);var f=Object.prototype.toString.call(u).slice(8,-1);return f==="Object"&&u.constructor&&(f=u.constructor.name),f==="Map"||f==="Set"?Array.from(u):f==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(f)?Y_(u,l):void 0}}(r))||e){t&&(r=t);var n=0,i=function(){};return{s:i,n:function(){return n>=r.length?{done:!0}:{done:!1,value:r[n++]}},e:function(u){throw u},f:i}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var o,a=!0,s=!1;return{s:function(){t=t.call(r)},n:function(){var u=t.next();return a=u.done,u},e:function(u){s=!0,o=u},f:function(){try{a||t.return==null||t.return()}finally{if(s)throw o}}}}function XT(r){var e=function(t,n){if(typeof t!="object"||t===null)return t;var i=t[Symbol.toPrimitive];if(i!==void 0){var o=i.call(t,n);if(typeof o!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(t)}(r,"string");return typeof e=="symbol"?e:String(e)}var K_=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function r5(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Bc={},n5={get exports(){return Bc},set exports(r){Bc=r}},lr=function(r){try{return!!r()}catch{return!0}},ku=!lr(function(){var r=(function(){}).bind();return typeof r!="function"||r.hasOwnProperty("prototype")}),VT=ku,WT=Function.prototype,Uc=WT.call,i5=VT&&WT.bind.bind(Uc,Uc),fr=VT?i5:function(r){return function(){return Uc.apply(r,arguments)}},YT=fr({}.isPrototypeOf),Ya=function(r){return r&&r.Math==Math&&r},xn=Ya(typeof globalThis=="object"&&globalThis)||Ya(typeof window=="object"&&window)||Ya(typeof self=="object"&&self)||Ya(typeof K_=="object"&&K_)||function(){return this}()||Function("return this")(),o5=ku,qT=Function.prototype,Z_=qT.apply,J_=qT.call,a5=typeof Reflect=="object"&&Reflect.apply||(o5?J_.bind(Z_):function(){return J_.apply(Z_,arguments)}),KT=fr,s5=KT({}.toString),u5=KT("".slice),$u=function(r){return u5(s5(r),8,-1)},l5=$u,f5=fr,Gc=function(r){if(l5(r)==="Function")return f5(r)},Gf=typeof document=="object"&&document.all,zu={all:Gf,IS_HTMLDDA:Gf===void 0&&Gf!==void 0},h5=zu.all,Ze=zu.IS_HTMLDDA?function(r){return typeof r=="function"||r===h5}:function(r){return typeof r=="function"},ZT={},Wo=!lr(function(){return Object.defineProperty({},1,{get:function(){return 7}})[1]!=7}),c5=ku,qa=Function.prototype.call,Yp=c5?qa.bind(qa):function(){return qa.apply(qa,arguments)},JT={},QT={}.propertyIsEnumerable,tS=Object.getOwnPropertyDescriptor,d5=tS&&!QT.call({1:2},1);JT.f=d5?function(r){var e=tS(this,r);return!!e&&e.enumerable}:QT;var pr,ms,qp=function(r,e){return{enumerable:!(1&r),configurable:!(2&r),writable:!(4&r),value:e}},p5=lr,v5=$u,jf=Object,y5=fr("".split),m5=p5(function(){return!jf("z").propertyIsEnumerable(0)})?function(r){return v5(r)=="String"?y5(r,""):jf(r)}:jf,eS=function(r){return r==null},_5=eS,g5=TypeError,rS=function(r){if(_5(r))throw g5("Can't call method on "+r);return r},b5=m5,x5=rS,nS=function(r){return b5(x5(r))},Q_=Ze,T5=zu.all,Yo=zu.IS_HTMLDDA?function(r){return typeof r=="object"?r!==null:Q_(r)||r===T5}:function(r){return typeof r=="object"?r!==null:Q_(r)},Kp={},kf=Kp,$f=xn,S5=Ze,tg=function(r){return S5(r)?r:void 0},Zp=function(r,e){return arguments.length<2?tg(kf[r])||tg($f[r]):kf[r]&&kf[r][e]||$f[r]&&$f[r][e]},iS=xn,zf=Zp("navigator","userAgent")||"",eg=iS.process,rg=iS.Deno,ng=eg&&eg.versions||rg&&rg.version,ig=ng&&ng.v8;ig&&(ms=(pr=ig.split("."))[0]>0&&pr[0]<4?1:+(pr[0]+pr[1])),!ms&&zf&&(!(pr=zf.match(/Edge\/(\d+)/))||pr[1]>=74)&&(pr=zf.match(/Chrome\/(\d+)/))&&(ms=+pr[1]);var oS=ms,og=oS,E5=lr,aS=!!Object.getOwnPropertySymbols&&!E5(function(){var r=Symbol();return!String(r)||!(Object(r)instanceof Symbol)||!Symbol.sham&&og&&og<41}),sS=aS&&!Symbol.sham&&typeof Symbol.iterator=="symbol",w5=Zp,O5=Ze,P5=YT,A5=Object,uS=sS?function(r){return typeof r=="symbol"}:function(r){var e=w5("Symbol");return O5(e)&&P5(e.prototype,A5(r))},C5=String,R5=Ze,I5=function(r){try{return C5(r)}catch{return"Object"}},M5=TypeError,lS=function(r){if(R5(r))return r;throw M5(I5(r)+" is not a function")},D5=lS,F5=eS,ag=Yp,sg=Ze,ug=Yo,N5=TypeError,jc={},L5={get exports(){return jc},set exports(r){jc=r}},lg=xn,B5=Object.defineProperty,U5=function(r,e){try{B5(lg,r,{value:e,configurable:!0,writable:!0})}catch{lg[r]=e}return e},fg="__core-js_shared__",fS=xn[fg]||U5(fg,{}),hg=fS;(L5.exports=function(r,e){return hg[r]||(hg[r]=e!==void 0?e:{})})("versions",[]).push({version:"3.26.1",mode:"pure",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.26.1/LICENSE",source:"https://github.com/zloirock/core-js"});var G5=rS,j5=Object,k5=function(r){return j5(G5(r))},$5=fr({}.hasOwnProperty),Jp=Object.hasOwn||function(r,e){return $5(k5(r),e)},z5=fr,H5=0,X5=Math.random(),V5=z5(1 .toString),W5=xn,cg=Jp,Y5=function(r){return"Symbol("+(r===void 0?"":r)+")_"+V5(++H5+X5,36)},dg=aS,hS=sS,Ui=jc("wks"),tn=W5.Symbol,pg=tn&&tn.for,q5=hS?tn:tn&&tn.withoutSetter||Y5,qo=function(r){if(!cg(Ui,r)||!dg&&typeof Ui[r]!="string"){var e="Symbol."+r;dg&&cg(tn,r)?Ui[r]=tn[r]:Ui[r]=hS&&pg?pg(e):q5(e)}return Ui[r]},K5=Yp,vg=Yo,yg=uS,Z5=function(r,e){var t=r[e];return F5(t)?void 0:D5(t)},J5=function(r,e){var t,n;if(sg(t=r.toString)&&!ug(n=ag(t,r))||sg(t=r.valueOf)&&!ug(n=ag(t,r)))return n;throw N5("Can't convert object to primitive value")},Q5=TypeError,t$=qo("toPrimitive"),e$=function(r,e){if(!vg(r)||yg(r))return r;var t,n=Z5(r,t$);if(n){if(t=K5(n,r,e),!vg(t)||yg(t))return t;throw Q5("Can't convert object to primitive value")}return J5(r)},r$=uS,Qp=function(r){var e=e$(r,"string");return r$(e)?e:e+""},mg=Yo,kc=xn.document,n$=mg(kc)&&mg(kc.createElement),i$=function(r){return n$?kc.createElement(r):{}},cS=!Wo&&!lr(function(){return Object.defineProperty(i$("div"),"a",{get:function(){return 7}}).a!=7}),o$=Wo,a$=Yp,s$=JT,u$=qp,l$=nS,f$=Qp,h$=Jp,c$=cS,_g=Object.getOwnPropertyDescriptor;ZT.f=o$?_g:function(r,e){if(r=l$(r),e=f$(e),c$)try{return _g(r,e)}catch{}if(h$(r,e))return u$(!a$(s$.f,r,e),r[e])};var d$=lr,p$=Ze,v$=/#|\.prototype\./,Ko=function(r,e){var t=m$[y$(r)];return t==g$||t!=_$&&(p$(e)?d$(e):!!e)},y$=Ko.normalize=function(r){return String(r).replace(v$,".").toLowerCase()},m$=Ko.data={},_$=Ko.NATIVE="N",g$=Ko.POLYFILL="P",b$=Ko,x$=lS,T$=ku,S$=Gc(Gc.bind),tv={},E$=Wo&&lr(function(){return Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype!=42}),w$=Yo,O$=String,P$=TypeError,A$=Wo,C$=cS,R$=E$,Ka=function(r){if(w$(r))return r;throw P$(O$(r)+" is not an object")},gg=Qp,I$=TypeError,Hf=Object.defineProperty,M$=Object.getOwnPropertyDescriptor,Xf="enumerable",Vf="configurable",Wf="writable";tv.f=A$?R$?function(r,e,t){if(Ka(r),e=gg(e),Ka(t),typeof r=="function"&&e==="prototype"&&"value"in t&&Wf in t&&!t[Wf]){var n=M$(r,e);n&&n[Wf]&&(r[e]=t.value,t={configurable:Vf in t?t[Vf]:n[Vf],enumerable:Xf in t?t[Xf]:n[Xf],writable:!1})}return Hf(r,e,t)}:Hf:function(r,e,t){if(Ka(r),e=gg(e),Ka(t),C$)try{return Hf(r,e,t)}catch{}if("get"in t||"set"in t)throw I$("Accessors not supported");return"value"in t&&(r[e]=t.value),r};var D$=tv,F$=qp,N$=Wo?function(r,e,t){return D$.f(r,e,F$(1,t))}:function(r,e,t){return r[e]=t,r},Za=xn,L$=a5,B$=Gc,U$=Ze,G$=ZT.f,j$=b$,Fn=Kp,k$=function(r,e){return x$(r),e===void 0?r:T$?S$(r,e):function(){return r.apply(e,arguments)}},Nn=N$,bg=Jp,$$=function(r){var e=function(t,n,i){if(this instanceof e){switch(arguments.length){case 0:return new r;case 1:return new r(t);case 2:return new r(t,n)}return new r(t,n,i)}return L$(r,this,arguments)};return e.prototype=r.prototype,e},z$=$u,H$=Array.isArray||function(r){return z$(r)=="Array"},dS={};dS[qo("toStringTag")]="z";var X$=String(dS)==="[object z]",V$=Ze,_s=$u,W$=qo("toStringTag"),Y$=Object,q$=_s(function(){return arguments}())=="Arguments",K$=X$?_s:function(r){var e,t,n;return r===void 0?"Undefined":r===null?"Null":typeof(t=function(i,o){try{return i[o]}catch{}}(e=Y$(r),W$))=="string"?t:q$?_s(e):(n=_s(e))=="Object"&&V$(e.callee)?"Arguments":n},Z$=Ze,$c=fS,J$=fr(Function.toString);Z$($c.inspectSource)||($c.inspectSource=function(r){return J$(r)});var Q$=$c.inspectSource,t8=fr,e8=lr,pS=Ze,r8=K$,n8=Q$,vS=function(){},i8=[],yS=Zp("Reflect","construct"),ev=/^\s*(?:class|function)\b/,o8=t8(ev.exec),a8=!ev.exec(vS),Gi=function(r){if(!pS(r))return!1;try{return yS(vS,i8,r),!0}catch{return!1}},mS=function(r){if(!pS(r))return!1;switch(r8(r)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return a8||!!o8(ev,n8(r))}catch{return!0}};mS.sham=!0;var s8=!yS||e8(function(){var r;return Gi(Gi.call)||!Gi(Object)||!Gi(function(){r=!0})||r})?mS:Gi,u8=Math.ceil,l8=Math.floor,f8=Math.trunc||function(r){var e=+r;return(e>0?l8:u8)(e)},_S=function(r){var e=+r;return e!=e||e===0?0:f8(e)},h8=_S,c8=Math.max,d8=Math.min,p8=_S,v8=Math.min,y8=function(r){return r>0?v8(p8(r),9007199254740991):0},m8=Qp,_8=tv,g8=qp,b8=lr,x8=oS,T8=qo("species"),S8=fr([].slice),E8=function(r,e){var t,n,i,o,a,s,u,l,f=r.target,c=r.global,h=r.stat,d=c?Za:h?Za[f]:(Za[f]||{}).prototype,p=c?Fn:Fn[f]||Nn(Fn,f,{})[f],v=p.prototype;for(i in e)t=!j$(c?i:f+(h?".":"#")+i,r.forced)&&d&&bg(d,i),a=p[i],t&&(s=r.dontCallGetSet?(l=G$(d,i))&&l.value:d[i]),o=t&&s?s:e[i],t&&typeof a==typeof o||(u=r.bind&&t?k$(o,Za):r.wrap&&t?$$(o):U$(o)?B$(o):o,(r.sham||o&&o.sham||a&&a.sham)&&Nn(u,"sham",!0),Nn(p,i,u),bg(Fn,n=f+"Prototype")||Nn(Fn,n,{}),Nn(Fn[n],i,o),r.real&&v&&!v[i]&&Nn(v,i,o))},xg=H$,w8=s8,O8=Yo,Tg=function(r,e){var t=h8(r);return t<0?c8(t+e,0):d8(t,e)},P8=function(r){return y8(r.length)},A8=nS,C8=function(r,e,t){var n=m8(e);n in r?_8.f(r,n,g8(0,t)):r[n]=t},R8=qo,I8=S8,M8=function(r){return x8>=51||!b8(function(){var e=[];return(e.constructor={})[T8]=function(){return{foo:1}},e[r](Boolean).foo!==1})}("slice"),D8=R8("species"),Yf=Array,F8=Math.max;E8({target:"Array",forced:!M8},{slice:function(r,e){var t,n,i,o=A8(this),a=P8(o),s=Tg(r,a),u=Tg(e===void 0?a:e,a);if(xg(o)&&(t=o.constructor,(w8(t)&&(t===Yf||xg(t.prototype))||O8(t)&&(t=t[D8])===null)&&(t=void 0),t===Yf||t===void 0))return I8(o,s,u);for(n=new(t===void 0?Yf:t)(F8(u-s,0)),i=0;s<u;s++,i++)s in o&&C8(n,i,o[s]);return n.length=i,n}});var N8=Kp,L8=function(r){return N8[r+"Prototype"]}("Array").slice,B8=YT,U8=L8,qf=Array.prototype,G8=function(r){var e=r.slice;return r===qf||B8(qf,r)&&e===qf.slice?U8:e};n5.exports=G8;var j8=r5(Bc),k8="ontouchstart"in window,$8="onpointerdown"in window,z8=function(r){(function(o,a){if(typeof a!="function"&&a!==null)throw new TypeError("Super expression must either be null or a function");o.prototype=Object.create(a&&a.prototype,{constructor:{value:o,writable:!0,configurable:!0}}),Object.defineProperty(o,"prototype",{writable:!1}),a&&Lc(o,a)})(i,cn);var e,t,n=e5(i);function i(o,a){var s;return function(u,l){if(!(u instanceof l))throw new TypeError("Cannot call a class as a function")}(this,i),tr(er(s=n.call(this)),"_touch",{}),tr(er(s),"_event",{}),tr(er(s),"_view",null),tr(er(s),"_cursor",null),tr(er(s),"_resolution",1),tr(er(s),"_renderer",null),tr(er(s),"_point",new X),tr(er(s),"_local",new X),s._renderer=o,s._view=o.view,s._view.style.touchAction="none",s._resolution=o.resolution,s._cursor=o.view.style.cursor,s.addEvents(),s}return e=i,t=[{key:"mapPositionToPoint",value:function(o,a,s){var u=this._view,l=1/this._resolution,f=u.parentElement?u.getBoundingClientRect():{width:0,height:0};o.x=(a-f.left)*(u.width/f.width)*l,o.y=(s-f.top)*(u.height/f.height)*l}},{key:"copyEvent",value:function(o){var a=o.changedTouches,s=this._point,u=this._event,l=this._renderer._lastObjectRendered;if(a){var f,c=q_(a);try{for(c.s();!(f=c.n()).done;){var h=f.value;this.mapPositionToPoint(s,h.pageX,h.pageY),u.origin=o,u.stopped=o.cancelBubble,u.id=h.identifier,u.x=s.x,u.y=s.y,u.target=this.hitTest(s,l),this.handle(u,l)}}catch(d){c.e(d)}finally{c.f()}}else this.mapPositionToPoint(s,o.pageX,o.pageY),u.origin=o,u.stopped=o.cancelBubble,u.id=o.pointerId,u.x=s.x,u.y=s.y,u.target=this.hitTest(s,l),this.handle(u,l)}},{key:"onDown",value:function(o){var a=this._event;a.target=null,a.stopped=!1,a.currentTarget=null,a.type="pointerdown",this.copyEvent(o)}},{key:"onUp",value:function(o){var a=this._event;a.target=null,a.stopped=!1,a.currentTarget=null,a.type="pointerup",this.copyEvent(o)}},{key:"onMove",value:function(o){var a=this._event;a.target=null,a.stopped=!1,a.currentTarget=null,a.type="pointermove",this.copyEvent(o)}},{key:"onCancel",value:function(o){var a=this._event;a.target=null,a.stopped=!1,a.currentTarget=null,a.type="pointercancel",this.copyEvent(o)}},{key:"contains",value:function(o,a){var s=!1;if(a.hitArea){var u=this._local;a.worldTransform.applyInverse(o,u),s=a.hitArea.contains(u.x,u.y)}else a.containsPoint&&(s=a.containsPoint(o));return s&&a._mask&&a._mask.containsPoint&&(s=a._mask.containsPoint(o)),s}},{key:"hitTest",value:function(o,a){for(var s,u=[a||this._renderer._lastObjectRendered];u.length;){var l,f=u.pop();if(f&&f.visible&&!f.isMask){var c=f.interactiveChildren&&((l=f.children)===null||l===void 0?void 0:l.length)&&f.children;if(this.contains(o,f)){var h=f.pointerEvents!=="none";if(h&&(s=f),c){u=j8(c).call(c);continue}if(h)break}if(!f._mask&&c){var d,p=q_(c);try{for(p.s();!(d=p.n()).done;){var v=d.value;u.push(v)}}catch(y){p.e(y)}finally{p.f()}}}}for(;s;){if(s.interactive)return s;s=s.parent}}},{key:"handle",value:function(o,a){if(a&&a.visible){this.dispatch(o);var s=o.id,u=o.target,l=o.type,f=this._touch;f[s]=f[s]||{};var c=f[s][l];if(f[s][l]=u,l==="pointermove"&&c!==u&&(this._view.style.cursor=(u==null?void 0:u.cursor)||this._cursor),l==="pointermove"&&c!==u){var h=Wa({},o);if(h.type="pointerenter",this.dispatch(h),!c)return;(h=Wa({},o)).type="pointerout",h.target=c,this.dispatch(h)}if(l==="pointerup"){var d=f[s].pointerdown;if(delete f[s],d&&d!==u){var p=Wa({},o);p.type="pointerupoutside",p.target=d,this.dispatch(p)}else if(d===u){var v=Wa({},o);v.type="tap",v.target=u,this.dispatch(v)}}}}},{key:"dispatch",value:function(o){var a=o.target;for(o.x,o.y;a&&!o.stopped;)o.currentTarget=a,a.interactive&&a.emit(o.type,o),a=a.parent;o.currentTarget=null,this.emit(o.type,o)}},{key:"addEvents",value:function(){var o=this._view;$8?(o.addEventListener("pointerdown",this.onDown.bind(this)),o.addEventListener("pointerup",this.onUp.bind(this)),o.addEventListener("pointermove",this.onMove.bind(this)),o.addEventListener("pointercancel",this.onCancel.bind(this))):k8?(o.addEventListener("touchstart",this.onDown.bind(this)),o.addEventListener("touchend",this.onUp.bind(this)),o.addEventListener("touchmove",this.onMove.bind(this)),o.addEventListener("touchcancel",this.onCancel.bind(this))):(o.addEventListener("mousedown",this.onDown.bind(this)),o.addEventListener("mouseup",this.onUp.bind(this)),o.addEventListener("mousemove",this.onMove.bind(this)))}}],t&&Qk(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),i}();C.SORTABLE_CHILDREN=!0;C.PREFER_ENV=Ce.WEBGL;C.PRECISION_FRAGMENT=Xt.HIGH;C.SCALE_MODE=Ht.LINEAR;Jk(jD);for(const r in Qt._queue)for(const e of Qt._queue[r])e.name==="interaction"&&Qt.remove(e);Qt.add({name:"interaction",ref:z8,type:[rt.RendererPlugin,rt.CanvasRendererPlugin]});const H8=`
#version 100
#define SHADER_NAME Tiling-Sprite-100

precision lowp float;

attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;
uniform mat3 translationMatrix;
uniform mat3 uTransform;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);

    vTextureCoord = (uTransform * vec3(aTextureCoord, 1.0)).xy;
}
`,X8=`
#version 100
#ifdef GL_EXT_shader_texture_lod
    #extension GL_EXT_shader_texture_lod : enable
#endif
#define SHADER_NAME Tiling-Sprite-100

precision lowp float;

varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform vec4 uColor;
uniform mat3 uMapCoord;
uniform vec4 uClampFrame;
uniform vec2 uClampOffset;

void main(void)
{
    vec2 coord = vTextureCoord + ceil(uClampOffset - vTextureCoord);
    coord = (uMapCoord * vec3(coord, 1.0)).xy;
    vec2 unclamped = coord;
    coord = clamp(coord, uClampFrame.xy, uClampFrame.zw);

    #ifdef GL_EXT_shader_texture_lod
        vec4 texSample = unclamped == coord
            ? texture2D(uSampler, coord)
            : texture2DLodEXT(uSampler, coord, 0.0);
    #else
        vec4 texSample = texture2D(uSampler, coord);
    #endif

    gl_FragColor = texSample * uColor;
}
`,Le=Lt({menuBtn:{},screen:{w:0,h:0,rw:0,rh:0,dr:1,rdr:1},font:"",visible:!0,user:{level:0,token:"",name:"",avatar:"",diamond:5,settings:{music:!0,voice:!0}}}),{devicePixelRatio:V8,windowWidth:zc,windowHeight:Hc}=wx.getSystemInfoSync(),qs=Ct.shared,W8=ii.shared,Hu=new $t,Y8=V8,un=new gu({width:zc,height:Hc,view:canvas,antialias:!0,resolution:Y8,backgroundColor:1448483,powerPreference:"high-performance"});un.plugins.tilingSprite.shader=Xe.from(H8,X8,{globals:un.globalUniforms});BE(()=>{const{screen:{width:r,height:e}}=un;Le.screen.dr=Math.min(r/750,e/1334),Le.screen.w=r,Le.screen.h=e,Le.screen.rw=zc,Le.screen.rh=Hc,Le.screen.rdr=Math.min(zc/750,Hc/1334),Le.menuBtn=wx.getMenuButtonBoundingClientRect()});un.plugins.accessibility.destroy();un.plugins.interaction.mapPositionToPoint=(r,e,t)=>{r.set(e,t)};qs.add(()=>un.render(Hu));const ne=un.screen;class q8{constructor(e){this.app=e,this.bullets=[],this.position={x:ne.width/2,y:ne.height}}initBattery(e){if(!e){console.error("初始化炮台失败：容器不存在");return}this.batteryBase=Jt.from("assets/images/batteryBase.png"),this.batteryBase.anchor.set(.5,1),this.batteryBase.position.set(this.position.x,this.position.y),this.battery=Jt.from("assets/images/battery.png"),this.battery.anchor.set(.5,.8),this.battery.position.set(this.position.x,this.position.y),e.addChild(this.batteryBase),e.addChild(this.battery),console.log("炮台初始化完成，位置:",this.position.x,this.position.y)}rotateBattery(e,t){if(!this.battery)return;const n=e-this.battery.position.x,i=t-this.battery.position.y,o=Math.atan2(i,n);this.battery.rotation=o+Math.PI/2}shootBullet(e,t,n){if(!this.battery||!n)return console.error("发射子弹失败：炮台或容器不存在"),null;console.log("子弹已发射");try{this.rotateBattery(e,t);const i=this.battery.rotation-Math.PI/2,o=this.battery.height/.8,a=this.battery.position.x+Math.cos(i)*o,s=this.battery.position.y+Math.sin(i)*o,u=Jt.from("assets/images/bullet.png");return u.anchor.set(.5),u.position.set(a,s),u.rotation=this.battery.rotation,u.directionX=Math.cos(i),u.directionY=Math.sin(i),u.speed=10,n.addChild(u),this.bullets.push(u),u}catch(i){return console.error("发射子弹时出错:",i),null}}showExplosion(e,t,n){if(!n){console.error("显示爆炸特效失败：容器不存在");return}const i=Jt.from("assets/images/boomEffect.png");i.anchor.set(.5),i.position.set(e,t),n.addChild(i);let o=1,a=.5;const s=u=>{o-=.05,a+=.05,i.alpha=o,i.scale.set(a),o<=0&&(n.removeChild(i),qs.remove(s))};qs.add(s)}updateBullets(e,t){if(t)for(let n=this.bullets.length-1;n>=0;n--){const i=this.bullets[n];i.position.x+=i.directionX*i.speed,i.position.y+=i.directionY*i.speed,(i.position.x<-50||i.position.x>ne.width+50||i.position.y<-50||i.position.y>ne.height+50)&&(t.removeChild(i),this.bullets.splice(n,1))}}}/*!
 * @pixi/filter-adjustment - v4.2.0
 * Compiled Fri, 05 Aug 2022 19:53:35 UTC
 *
 * @pixi/filter-adjustment is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Xc=function(r,e){return Xc=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])},Xc(r,e)};function K8(r,e){Xc(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var Z8=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,J8=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;

uniform float gamma;
uniform float contrast;
uniform float saturation;
uniform float brightness;
uniform float red;
uniform float green;
uniform float blue;
uniform float alpha;

void main(void)
{
    vec4 c = texture2D(uSampler, vTextureCoord);

    if (c.a > 0.0) {
        c.rgb /= c.a;

        vec3 rgb = pow(c.rgb, vec3(1. / gamma));
        rgb = mix(vec3(.5), mix(vec3(dot(vec3(.2125, .7154, .0721), rgb)), rgb, saturation), contrast);
        rgb.r *= red;
        rgb.g *= green;
        rgb.b *= blue;
        c.rgb = rgb * brightness;

        c.rgb *= c.a;
    }

    gl_FragColor = c * alpha;
}
`;(function(r){K8(e,r);function e(t){var n=r.call(this,Z8,J8)||this;return n.gamma=1,n.saturation=1,n.contrast=1,n.brightness=1,n.red=1,n.green=1,n.blue=1,n.alpha=1,Object.assign(n,t),n}return e.prototype.apply=function(t,n,i,o){this.uniforms.gamma=Math.max(this.gamma,1e-4),this.uniforms.saturation=this.saturation,this.uniforms.contrast=this.contrast,this.uniforms.brightness=this.brightness,this.uniforms.red=this.red,this.uniforms.green=this.green,this.uniforms.blue=this.blue,this.uniforms.alpha=this.alpha,t.applyFilter(this,n,i,o)},e})(k);/*!
 * @pixi/filter-kawase-blur - v4.2.0
 * Compiled Fri, 05 Aug 2022 19:53:35 UTC
 *
 * @pixi/filter-kawase-blur is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Vc=function(r,e){return Vc=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])},Vc(r,e)};function Q8(r,e){Vc(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var tz=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,ez=`
varying vec2 vTextureCoord;
uniform sampler2D uSampler;

uniform vec2 uOffset;

void main(void)
{
    vec4 color = vec4(0.0);

    // Sample top left pixel
    color += texture2D(uSampler, vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y + uOffset.y));

    // Sample top right pixel
    color += texture2D(uSampler, vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y + uOffset.y));

    // Sample bottom right pixel
    color += texture2D(uSampler, vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y - uOffset.y));

    // Sample bottom left pixel
    color += texture2D(uSampler, vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y - uOffset.y));

    // Average
    color *= 0.25;

    gl_FragColor = color;
}`,rz=`
varying vec2 vTextureCoord;
uniform sampler2D uSampler;

uniform vec2 uOffset;
uniform vec4 filterClamp;

void main(void)
{
    vec4 color = vec4(0.0);

    // Sample top left pixel
    color += texture2D(uSampler, clamp(vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y + uOffset.y), filterClamp.xy, filterClamp.zw));

    // Sample top right pixel
    color += texture2D(uSampler, clamp(vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y + uOffset.y), filterClamp.xy, filterClamp.zw));

    // Sample bottom right pixel
    color += texture2D(uSampler, clamp(vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y - uOffset.y), filterClamp.xy, filterClamp.zw));

    // Sample bottom left pixel
    color += texture2D(uSampler, clamp(vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y - uOffset.y), filterClamp.xy, filterClamp.zw));

    // Average
    color *= 0.25;

    gl_FragColor = color;
}
`,Ks=function(r){Q8(e,r);function e(t,n,i){t===void 0&&(t=4),n===void 0&&(n=3),i===void 0&&(i=!1);var o=r.call(this,tz,i?rz:ez)||this;return o._kernels=[],o._blur=4,o._quality=3,o.uniforms.uOffset=new Float32Array(2),o._pixelSize=new X,o.pixelSize=1,o._clamp=i,Array.isArray(t)?o.kernels=t:(o._blur=t,o.quality=n),o}return e.prototype.apply=function(t,n,i,o){var a=this._pixelSize.x/n._frame.width,s=this._pixelSize.y/n._frame.height,u;if(this._quality===1||this._blur===0)u=this._kernels[0]+.5,this.uniforms.uOffset[0]=u*a,this.uniforms.uOffset[1]=u*s,t.applyFilter(this,n,i,o);else{for(var l=t.getFilterTexture(),f=n,c=l,h=void 0,d=this._quality-1,p=0;p<d;p++)u=this._kernels[p]+.5,this.uniforms.uOffset[0]=u*a,this.uniforms.uOffset[1]=u*s,t.applyFilter(this,f,c,1),h=f,f=c,c=h;u=this._kernels[d]+.5,this.uniforms.uOffset[0]=u*a,this.uniforms.uOffset[1]=u*s,t.applyFilter(this,f,i,o),t.returnFilterTexture(l)}},e.prototype._updatePadding=function(){this.padding=Math.ceil(this._kernels.reduce(function(t,n){return t+n+.5},0))},e.prototype._generateKernels=function(){var t=this._blur,n=this._quality,i=[t];if(t>0)for(var o=t,a=t/n,s=1;s<n;s++)o-=a,i.push(o);this._kernels=i,this._updatePadding()},Object.defineProperty(e.prototype,"kernels",{get:function(){return this._kernels},set:function(t){Array.isArray(t)&&t.length>0?(this._kernels=t,this._quality=t.length,this._blur=Math.max.apply(Math,t)):(this._kernels=[0],this._quality=1)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"clamp",{get:function(){return this._clamp},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"pixelSize",{get:function(){return this._pixelSize},set:function(t){typeof t=="number"?(this._pixelSize.x=t,this._pixelSize.y=t):Array.isArray(t)?(this._pixelSize.x=t[0],this._pixelSize.y=t[1]):t instanceof X?(this._pixelSize.x=t.x,this._pixelSize.y=t.y):(this._pixelSize.x=1,this._pixelSize.y=1)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"quality",{get:function(){return this._quality},set:function(t){this._quality=Math.max(1,Math.round(t)),this._generateKernels()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"blur",{get:function(){return this._blur},set:function(t){this._blur=t,this._generateKernels()},enumerable:!1,configurable:!0}),e}(k);/*!
 * @pixi/filter-advanced-bloom - v4.2.0
 * Compiled Fri, 05 Aug 2022 19:53:35 UTC
 *
 * @pixi/filter-advanced-bloom is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Wc=function(r,e){return Wc=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])},Wc(r,e)};function gS(r,e){Wc(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var bS=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,nz=`
uniform sampler2D uSampler;
varying vec2 vTextureCoord;

uniform float threshold;

void main() {
    vec4 color = texture2D(uSampler, vTextureCoord);

    // A simple & fast algorithm for getting brightness.
    // It's inaccuracy , but good enought for this feature.
    float _max = max(max(color.r, color.g), color.b);
    float _min = min(min(color.r, color.g), color.b);
    float brightness = (_max + _min) * 0.5;

    if(brightness > threshold) {
        gl_FragColor = color;
    } else {
        gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
    }
}
`,iz=function(r){gS(e,r);function e(t){t===void 0&&(t=.5);var n=r.call(this,bS,nz)||this;return n.threshold=t,n}return Object.defineProperty(e.prototype,"threshold",{get:function(){return this.uniforms.threshold},set:function(t){this.uniforms.threshold=t},enumerable:!1,configurable:!0}),e}(k),oz=`uniform sampler2D uSampler;
varying vec2 vTextureCoord;

uniform sampler2D bloomTexture;
uniform float bloomScale;
uniform float brightness;

void main() {
    vec4 color = texture2D(uSampler, vTextureCoord);
    color.rgb *= brightness;
    vec4 bloomColor = vec4(texture2D(bloomTexture, vTextureCoord).rgb, 0.0);
    bloomColor.rgb *= bloomScale;
    gl_FragColor = color + bloomColor;
}
`;(function(r){gS(e,r);function e(t){var n=r.call(this,bS,oz)||this;n.bloomScale=1,n.brightness=1,n._resolution=C.FILTER_RESOLUTION,typeof t=="number"&&(t={threshold:t});var i=Object.assign(e.defaults,t);n.bloomScale=i.bloomScale,n.brightness=i.brightness;var o=i.kernels,a=i.blur,s=i.quality,u=i.pixelSize,l=i.resolution;return n._extractFilter=new iz(i.threshold),n._extractFilter.resolution=l,n._blurFilter=o?new Ks(o):new Ks(a,s),n.pixelSize=u,n.resolution=l,n}return e.prototype.apply=function(t,n,i,o,a){var s=t.getFilterTexture();this._extractFilter.apply(t,n,s,1,a);var u=t.getFilterTexture();this._blurFilter.apply(t,s,u,1),this.uniforms.bloomScale=this.bloomScale,this.uniforms.brightness=this.brightness,this.uniforms.bloomTexture=u,t.applyFilter(this,n,i,o),t.returnFilterTexture(u),t.returnFilterTexture(s)},Object.defineProperty(e.prototype,"resolution",{get:function(){return this._resolution},set:function(t){this._resolution=t,this._extractFilter&&(this._extractFilter.resolution=t),this._blurFilter&&(this._blurFilter.resolution=t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"threshold",{get:function(){return this._extractFilter.threshold},set:function(t){this._extractFilter.threshold=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"kernels",{get:function(){return this._blurFilter.kernels},set:function(t){this._blurFilter.kernels=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"blur",{get:function(){return this._blurFilter.blur},set:function(t){this._blurFilter.blur=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"quality",{get:function(){return this._blurFilter.quality},set:function(t){this._blurFilter.quality=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"pixelSize",{get:function(){return this._blurFilter.pixelSize},set:function(t){this._blurFilter.pixelSize=t},enumerable:!1,configurable:!0}),e.defaults={threshold:.5,bloomScale:1,brightness:1,kernels:null,blur:8,quality:4,pixelSize:1,resolution:C.FILTER_RESOLUTION},e})(k);/*!
 * @pixi/filter-ascii - v4.2.0
 * Compiled Fri, 05 Aug 2022 19:53:35 UTC
 *
 * @pixi/filter-ascii is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Yc=function(r,e){return Yc=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])},Yc(r,e)};function az(r,e){Yc(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var sz=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,uz=`varying vec2 vTextureCoord;

uniform vec4 filterArea;
uniform float pixelSize;
uniform sampler2D uSampler;

vec2 mapCoord( vec2 coord )
{
    coord *= filterArea.xy;
    coord += filterArea.zw;

    return coord;
}

vec2 unmapCoord( vec2 coord )
{
    coord -= filterArea.zw;
    coord /= filterArea.xy;

    return coord;
}

vec2 pixelate(vec2 coord, vec2 size)
{
    return floor( coord / size ) * size;
}

vec2 getMod(vec2 coord, vec2 size)
{
    return mod( coord , size) / size;
}

float character(float n, vec2 p)
{
    p = floor(p*vec2(4.0, -4.0) + 2.5);

    if (clamp(p.x, 0.0, 4.0) == p.x)
    {
        if (clamp(p.y, 0.0, 4.0) == p.y)
        {
            if (int(mod(n/exp2(p.x + 5.0*p.y), 2.0)) == 1) return 1.0;
        }
    }
    return 0.0;
}

void main()
{
    vec2 coord = mapCoord(vTextureCoord);

    // get the rounded color..
    vec2 pixCoord = pixelate(coord, vec2(pixelSize));
    pixCoord = unmapCoord(pixCoord);

    vec4 color = texture2D(uSampler, pixCoord);

    // determine the character to use
    float gray = (color.r + color.g + color.b) / 3.0;

    float n =  65536.0;             // .
    if (gray > 0.2) n = 65600.0;    // :
    if (gray > 0.3) n = 332772.0;   // *
    if (gray > 0.4) n = 15255086.0; // o
    if (gray > 0.5) n = 23385164.0; // &
    if (gray > 0.6) n = 15252014.0; // 8
    if (gray > 0.7) n = 13199452.0; // @
    if (gray > 0.8) n = 11512810.0; // #

    // get the mod..
    vec2 modd = getMod(coord, vec2(pixelSize));

    gl_FragColor = color * character( n, vec2(-1.0) + modd * 2.0);

}
`;(function(r){az(e,r);function e(t){t===void 0&&(t=8);var n=r.call(this,sz,uz)||this;return n.size=t,n}return Object.defineProperty(e.prototype,"size",{get:function(){return this.uniforms.pixelSize},set:function(t){this.uniforms.pixelSize=t},enumerable:!1,configurable:!0}),e})(k);/*!
 * @pixi/filter-bevel - v4.2.0
 * Compiled Fri, 05 Aug 2022 19:53:35 UTC
 *
 * @pixi/filter-bevel is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var qc=function(r,e){return qc=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])},qc(r,e)};function lz(r,e){qc(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var fz=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,hz=`precision mediump float;

varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform vec4 filterArea;

uniform float transformX;
uniform float transformY;
uniform vec3 lightColor;
uniform float lightAlpha;
uniform vec3 shadowColor;
uniform float shadowAlpha;

void main(void) {
    vec2 transform = vec2(1.0 / filterArea) * vec2(transformX, transformY);
    vec4 color = texture2D(uSampler, vTextureCoord);
    float light = texture2D(uSampler, vTextureCoord - transform).a;
    float shadow = texture2D(uSampler, vTextureCoord + transform).a;

    color.rgb = mix(color.rgb, lightColor, clamp((color.a - light) * lightAlpha, 0.0, 1.0));
    color.rgb = mix(color.rgb, shadowColor, clamp((color.a - shadow) * shadowAlpha, 0.0, 1.0));
    gl_FragColor = vec4(color.rgb * color.a, color.a);
}
`;(function(r){lz(e,r);function e(t){var n=r.call(this,fz,hz)||this;return n._thickness=2,n._angle=0,n.uniforms.lightColor=new Float32Array(3),n.uniforms.shadowColor=new Float32Array(3),Object.assign(n,{rotation:45,thickness:2,lightColor:16777215,lightAlpha:.7,shadowColor:0,shadowAlpha:.7},t),n.padding=1,n}return e.prototype._updateTransform=function(){this.uniforms.transformX=this._thickness*Math.cos(this._angle),this.uniforms.transformY=this._thickness*Math.sin(this._angle)},Object.defineProperty(e.prototype,"rotation",{get:function(){return this._angle/Or},set:function(t){this._angle=t*Or,this._updateTransform()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"thickness",{get:function(){return this._thickness},set:function(t){this._thickness=t,this._updateTransform()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"lightColor",{get:function(){return ve(this.uniforms.lightColor)},set:function(t){Bt(t,this.uniforms.lightColor)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"lightAlpha",{get:function(){return this.uniforms.lightAlpha},set:function(t){this.uniforms.lightAlpha=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"shadowColor",{get:function(){return ve(this.uniforms.shadowColor)},set:function(t){Bt(t,this.uniforms.shadowColor)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"shadowAlpha",{get:function(){return this.uniforms.shadowAlpha},set:function(t){this.uniforms.shadowAlpha=t},enumerable:!1,configurable:!0}),e})(k);/*!
 * @pixi/filter-bloom - v4.2.0
 * Compiled Fri, 05 Aug 2022 19:53:35 UTC
 *
 * @pixi/filter-bloom is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Kc=function(r,e){return Kc=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])},Kc(r,e)};function cz(r,e){Kc(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}(function(r){cz(e,r);function e(t,n,i,o){t===void 0&&(t=2),n===void 0&&(n=4),i===void 0&&(i=C.FILTER_RESOLUTION),o===void 0&&(o=5);var a=r.call(this)||this,s,u;return typeof t=="number"?(s=t,u=t):t instanceof X?(s=t.x,u=t.y):Array.isArray(t)&&(s=t[0],u=t[1]),a.blurXFilter=new To(!0,s,n,i,o),a.blurYFilter=new To(!1,u,n,i,o),a.blurYFilter.blendMode=B.SCREEN,a.defaultFilter=new Fx,a}return e.prototype.apply=function(t,n,i,o){var a=t.getFilterTexture();this.defaultFilter.apply(t,n,i,o),this.blurXFilter.apply(t,n,a,1),this.blurYFilter.apply(t,a,i,0),t.returnFilterTexture(a)},Object.defineProperty(e.prototype,"blur",{get:function(){return this.blurXFilter.blur},set:function(t){this.blurXFilter.blur=this.blurYFilter.blur=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"blurX",{get:function(){return this.blurXFilter.blur},set:function(t){this.blurXFilter.blur=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"blurY",{get:function(){return this.blurYFilter.blur},set:function(t){this.blurYFilter.blur=t},enumerable:!1,configurable:!0}),e})(k);/*!
 * @pixi/filter-bulge-pinch - v4.2.0
 * Compiled Fri, 05 Aug 2022 19:53:35 UTC
 *
 * @pixi/filter-bulge-pinch is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Zc=function(r,e){return Zc=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])},Zc(r,e)};function dz(r,e){Zc(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var pz=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,vz=`uniform float radius;
uniform float strength;
uniform vec2 center;
uniform sampler2D uSampler;
varying vec2 vTextureCoord;

uniform vec4 filterArea;
uniform vec4 filterClamp;
uniform vec2 dimensions;

void main()
{
    vec2 coord = vTextureCoord * filterArea.xy;
    coord -= center * dimensions.xy;
    float distance = length(coord);
    if (distance < radius) {
        float percent = distance / radius;
        if (strength > 0.0) {
            coord *= mix(1.0, smoothstep(0.0, radius / distance, percent), strength * 0.75);
        } else {
            coord *= mix(1.0, pow(percent, 1.0 + strength * 0.75) * radius / distance, 1.0 - percent);
        }
    }
    coord += center * dimensions.xy;
    coord /= filterArea.xy;
    vec2 clampedCoord = clamp(coord, filterClamp.xy, filterClamp.zw);
    vec4 color = texture2D(uSampler, clampedCoord);
    if (coord != clampedCoord) {
        color *= max(0.0, 1.0 - length(coord - clampedCoord));
    }

    gl_FragColor = color;
}
`;(function(r){dz(e,r);function e(t){var n=r.call(this,pz,vz)||this;return n.uniforms.dimensions=new Float32Array(2),Object.assign(n,e.defaults,t),n}return e.prototype.apply=function(t,n,i,o){var a=n.filterFrame,s=a.width,u=a.height;this.uniforms.dimensions[0]=s,this.uniforms.dimensions[1]=u,t.applyFilter(this,n,i,o)},Object.defineProperty(e.prototype,"radius",{get:function(){return this.uniforms.radius},set:function(t){this.uniforms.radius=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"strength",{get:function(){return this.uniforms.strength},set:function(t){this.uniforms.strength=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"center",{get:function(){return this.uniforms.center},set:function(t){this.uniforms.center=t},enumerable:!1,configurable:!0}),e.defaults={center:[.5,.5],radius:100,strength:1},e})(k);/*!
 * @pixi/filter-color-map - v4.2.0
 * Compiled Fri, 05 Aug 2022 19:53:35 UTC
 *
 * @pixi/filter-color-map is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Jc=function(r,e){return Jc=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])},Jc(r,e)};function yz(r,e){Jc(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var mz=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,_z=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform sampler2D colorMap;
uniform float _mix;
uniform float _size;
uniform float _sliceSize;
uniform float _slicePixelSize;
uniform float _sliceInnerSize;
void main() {
    vec4 color = texture2D(uSampler, vTextureCoord.xy);

    vec4 adjusted;
    if (color.a > 0.0) {
        color.rgb /= color.a;
        float innerWidth = _size - 1.0;
        float zSlice0 = min(floor(color.b * innerWidth), innerWidth);
        float zSlice1 = min(zSlice0 + 1.0, innerWidth);
        float xOffset = _slicePixelSize * 0.5 + color.r * _sliceInnerSize;
        float s0 = xOffset + (zSlice0 * _sliceSize);
        float s1 = xOffset + (zSlice1 * _sliceSize);
        float yOffset = _sliceSize * 0.5 + color.g * (1.0 - _sliceSize);
        vec4 slice0Color = texture2D(colorMap, vec2(s0,yOffset));
        vec4 slice1Color = texture2D(colorMap, vec2(s1,yOffset));
        float zOffset = fract(color.b * innerWidth);
        adjusted = mix(slice0Color, slice1Color, zOffset);

        color.rgb *= color.a;
    }
    gl_FragColor = vec4(mix(color, adjusted, _mix).rgb, color.a);

}`;(function(r){yz(e,r);function e(t,n,i){n===void 0&&(n=!1),i===void 0&&(i=1);var o=r.call(this,mz,_z)||this;return o.mix=1,o._size=0,o._sliceSize=0,o._slicePixelSize=0,o._sliceInnerSize=0,o._nearest=!1,o._scaleMode=null,o._colorMap=null,o._scaleMode=null,o.nearest=n,o.mix=i,o.colorMap=t,o}return e.prototype.apply=function(t,n,i,o){this.uniforms._mix=this.mix,t.applyFilter(this,n,i,o)},Object.defineProperty(e.prototype,"colorSize",{get:function(){return this._size},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"colorMap",{get:function(){return this._colorMap},set:function(t){var n;t&&(t instanceof G||(t=G.from(t)),!((n=t)===null||n===void 0)&&n.baseTexture&&(t.baseTexture.scaleMode=this._scaleMode,t.baseTexture.mipmap=te.OFF,this._size=t.height,this._sliceSize=1/this._size,this._slicePixelSize=this._sliceSize/this._size,this._sliceInnerSize=this._slicePixelSize*(this._size-1),this.uniforms._size=this._size,this.uniforms._sliceSize=this._sliceSize,this.uniforms._slicePixelSize=this._slicePixelSize,this.uniforms._sliceInnerSize=this._sliceInnerSize,this.uniforms.colorMap=t),this._colorMap=t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"nearest",{get:function(){return this._nearest},set:function(t){this._nearest=t,this._scaleMode=t?Ht.NEAREST:Ht.LINEAR;var n=this._colorMap;n&&n.baseTexture&&(n.baseTexture._glTextures={},n.baseTexture.scaleMode=this._scaleMode,n.baseTexture.mipmap=te.OFF,n._updateID++,n.baseTexture.emit("update",n.baseTexture))},enumerable:!1,configurable:!0}),e.prototype.updateColorMap=function(){var t=this._colorMap;t&&t.baseTexture&&(t._updateID++,t.baseTexture.emit("update",t.baseTexture),this.colorMap=t)},e.prototype.destroy=function(t){t===void 0&&(t=!1),this._colorMap&&this._colorMap.destroy(t),r.prototype.destroy.call(this)},e})(k);/*!
 * @pixi/filter-color-overlay - v4.2.0
 * Compiled Fri, 05 Aug 2022 19:53:35 UTC
 *
 * @pixi/filter-color-overlay is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Qc=function(r,e){return Qc=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])},Qc(r,e)};function gz(r,e){Qc(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var bz=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,xz=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform vec3 color;
uniform float alpha;

void main(void) {
    vec4 currentColor = texture2D(uSampler, vTextureCoord);
    gl_FragColor = vec4(mix(currentColor.rgb, color.rgb, currentColor.a * alpha), currentColor.a);
}
`;(function(r){gz(e,r);function e(t,n){t===void 0&&(t=0),n===void 0&&(n=1);var i=r.call(this,bz,xz)||this;return i._color=0,i._alpha=1,i.uniforms.color=new Float32Array(3),i.color=t,i.alpha=n,i}return Object.defineProperty(e.prototype,"color",{get:function(){return this._color},set:function(t){var n=this.uniforms.color;typeof t=="number"?(Bt(t,n),this._color=t):(n[0]=t[0],n[1]=t[1],n[2]=t[2],this._color=ve(n))},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"alpha",{get:function(){return this._alpha},set:function(t){this.uniforms.alpha=t,this._alpha=t},enumerable:!1,configurable:!0}),e})(k);/*!
 * @pixi/filter-color-replace - v4.2.0
 * Compiled Fri, 05 Aug 2022 19:53:35 UTC
 *
 * @pixi/filter-color-replace is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var td=function(r,e){return td=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])},td(r,e)};function Tz(r,e){td(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var Sz=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,Ez=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform vec3 originalColor;
uniform vec3 newColor;
uniform float epsilon;
void main(void) {
    vec4 currentColor = texture2D(uSampler, vTextureCoord);
    vec3 colorDiff = originalColor - (currentColor.rgb / max(currentColor.a, 0.0000000001));
    float colorDistance = length(colorDiff);
    float doReplace = step(colorDistance, epsilon);
    gl_FragColor = vec4(mix(currentColor.rgb, (newColor + colorDiff) * currentColor.a, doReplace), currentColor.a);
}
`;(function(r){Tz(e,r);function e(t,n,i){t===void 0&&(t=16711680),n===void 0&&(n=0),i===void 0&&(i=.4);var o=r.call(this,Sz,Ez)||this;return o._originalColor=16711680,o._newColor=0,o.uniforms.originalColor=new Float32Array(3),o.uniforms.newColor=new Float32Array(3),o.originalColor=t,o.newColor=n,o.epsilon=i,o}return Object.defineProperty(e.prototype,"originalColor",{get:function(){return this._originalColor},set:function(t){var n=this.uniforms.originalColor;typeof t=="number"?(Bt(t,n),this._originalColor=t):(n[0]=t[0],n[1]=t[1],n[2]=t[2],this._originalColor=ve(n))},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"newColor",{get:function(){return this._newColor},set:function(t){var n=this.uniforms.newColor;typeof t=="number"?(Bt(t,n),this._newColor=t):(n[0]=t[0],n[1]=t[1],n[2]=t[2],this._newColor=ve(n))},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"epsilon",{get:function(){return this.uniforms.epsilon},set:function(t){this.uniforms.epsilon=t},enumerable:!1,configurable:!0}),e})(k);/*!
 * @pixi/filter-convolution - v4.2.0
 * Compiled Fri, 05 Aug 2022 19:53:35 UTC
 *
 * @pixi/filter-convolution is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var ed=function(r,e){return ed=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])},ed(r,e)};function wz(r,e){ed(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var Oz=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,Pz=`precision mediump float;

varying mediump vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform vec2 texelSize;
uniform float matrix[9];

void main(void)
{
   vec4 c11 = texture2D(uSampler, vTextureCoord - texelSize); // top left
   vec4 c12 = texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y - texelSize.y)); // top center
   vec4 c13 = texture2D(uSampler, vec2(vTextureCoord.x + texelSize.x, vTextureCoord.y - texelSize.y)); // top right

   vec4 c21 = texture2D(uSampler, vec2(vTextureCoord.x - texelSize.x, vTextureCoord.y)); // mid left
   vec4 c22 = texture2D(uSampler, vTextureCoord); // mid center
   vec4 c23 = texture2D(uSampler, vec2(vTextureCoord.x + texelSize.x, vTextureCoord.y)); // mid right

   vec4 c31 = texture2D(uSampler, vec2(vTextureCoord.x - texelSize.x, vTextureCoord.y + texelSize.y)); // bottom left
   vec4 c32 = texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y + texelSize.y)); // bottom center
   vec4 c33 = texture2D(uSampler, vTextureCoord + texelSize); // bottom right

   gl_FragColor =
       c11 * matrix[0] + c12 * matrix[1] + c13 * matrix[2] +
       c21 * matrix[3] + c22 * matrix[4] + c23 * matrix[5] +
       c31 * matrix[6] + c32 * matrix[7] + c33 * matrix[8];

   gl_FragColor.a = c22.a;
}
`;(function(r){wz(e,r);function e(t,n,i){n===void 0&&(n=200),i===void 0&&(i=200);var o=r.call(this,Oz,Pz)||this;return o.uniforms.texelSize=new Float32Array(2),o.uniforms.matrix=new Float32Array(9),t!==void 0&&(o.matrix=t),o.width=n,o.height=i,o}return Object.defineProperty(e.prototype,"matrix",{get:function(){return this.uniforms.matrix},set:function(t){var n=this;t.forEach(function(i,o){n.uniforms.matrix[o]=i})},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"width",{get:function(){return 1/this.uniforms.texelSize[0]},set:function(t){this.uniforms.texelSize[0]=1/t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"height",{get:function(){return 1/this.uniforms.texelSize[1]},set:function(t){this.uniforms.texelSize[1]=1/t},enumerable:!1,configurable:!0}),e})(k);/*!
 * @pixi/filter-cross-hatch - v4.2.0
 * Compiled Fri, 05 Aug 2022 19:53:35 UTC
 *
 * @pixi/filter-cross-hatch is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var rd=function(r,e){return rd=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])},rd(r,e)};function Az(r,e){rd(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var Cz=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,Rz=`precision mediump float;

varying vec2 vTextureCoord;

uniform sampler2D uSampler;

void main(void)
{
    float lum = length(texture2D(uSampler, vTextureCoord.xy).rgb);

    gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);

    if (lum < 1.00)
    {
        if (mod(gl_FragCoord.x + gl_FragCoord.y, 10.0) == 0.0)
        {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    }

    if (lum < 0.75)
    {
        if (mod(gl_FragCoord.x - gl_FragCoord.y, 10.0) == 0.0)
        {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    }

    if (lum < 0.50)
    {
        if (mod(gl_FragCoord.x + gl_FragCoord.y - 5.0, 10.0) == 0.0)
        {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    }

    if (lum < 0.3)
    {
        if (mod(gl_FragCoord.x - gl_FragCoord.y - 5.0, 10.0) == 0.0)
        {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    }
}
`;(function(r){Az(e,r);function e(){return r.call(this,Cz,Rz)||this}return e})(k);/*!
 * @pixi/filter-crt - v4.2.0
 * Compiled Fri, 05 Aug 2022 19:53:35 UTC
 *
 * @pixi/filter-crt is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var nd=function(r,e){return nd=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])},nd(r,e)};function Iz(r,e){nd(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var Mz=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,Dz=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;

uniform vec4 filterArea;
uniform vec2 dimensions;

const float SQRT_2 = 1.414213;

const float light = 1.0;

uniform float curvature;
uniform float lineWidth;
uniform float lineContrast;
uniform bool verticalLine;
uniform float noise;
uniform float noiseSize;

uniform float vignetting;
uniform float vignettingAlpha;
uniform float vignettingBlur;

uniform float seed;
uniform float time;

float rand(vec2 co) {
    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

void main(void)
{
    vec2 pixelCoord = vTextureCoord.xy * filterArea.xy;
    vec2 dir = vec2(vTextureCoord.xy * filterArea.xy / dimensions - vec2(0.5, 0.5));
    
    gl_FragColor = texture2D(uSampler, vTextureCoord);
    vec3 rgb = gl_FragColor.rgb;

    if (noise > 0.0 && noiseSize > 0.0)
    {
        pixelCoord.x = floor(pixelCoord.x / noiseSize);
        pixelCoord.y = floor(pixelCoord.y / noiseSize);
        float _noise = rand(pixelCoord * noiseSize * seed) - 0.5;
        rgb += _noise * noise;
    }

    if (lineWidth > 0.0)
    {
        float _c = curvature > 0. ? curvature : 1.;
        float k = curvature > 0. ?(length(dir * dir) * 0.25 * _c * _c + 0.935 * _c) : 1.;
        vec2 uv = dir * k;

        float v = (verticalLine ? uv.x * dimensions.x : uv.y * dimensions.y) * min(1.0, 2.0 / lineWidth ) / _c;
        float j = 1. + cos(v * 1.2 - time) * 0.5 * lineContrast;
        rgb *= j;
        float segment = verticalLine ? mod((dir.x + .5) * dimensions.x, 4.) : mod((dir.y + .5) * dimensions.y, 4.);
        rgb *= 0.99 + ceil(segment) * 0.015;
    }

    if (vignetting > 0.0)
    {
        float outter = SQRT_2 - vignetting * SQRT_2;
        float darker = clamp((outter - length(dir) * SQRT_2) / ( 0.00001 + vignettingBlur * SQRT_2), 0.0, 1.0);
        rgb *= darker + (1.0 - darker) * (1.0 - vignettingAlpha);
    }

    gl_FragColor.rgb = rgb;
}
`;(function(r){Iz(e,r);function e(t){var n=r.call(this,Mz,Dz)||this;return n.time=0,n.seed=0,n.uniforms.dimensions=new Float32Array(2),Object.assign(n,e.defaults,t),n}return e.prototype.apply=function(t,n,i,o){var a=n.filterFrame,s=a.width,u=a.height;this.uniforms.dimensions[0]=s,this.uniforms.dimensions[1]=u,this.uniforms.seed=this.seed,this.uniforms.time=this.time,t.applyFilter(this,n,i,o)},Object.defineProperty(e.prototype,"curvature",{get:function(){return this.uniforms.curvature},set:function(t){this.uniforms.curvature=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"lineWidth",{get:function(){return this.uniforms.lineWidth},set:function(t){this.uniforms.lineWidth=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"lineContrast",{get:function(){return this.uniforms.lineContrast},set:function(t){this.uniforms.lineContrast=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"verticalLine",{get:function(){return this.uniforms.verticalLine},set:function(t){this.uniforms.verticalLine=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"noise",{get:function(){return this.uniforms.noise},set:function(t){this.uniforms.noise=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"noiseSize",{get:function(){return this.uniforms.noiseSize},set:function(t){this.uniforms.noiseSize=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"vignetting",{get:function(){return this.uniforms.vignetting},set:function(t){this.uniforms.vignetting=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"vignettingAlpha",{get:function(){return this.uniforms.vignettingAlpha},set:function(t){this.uniforms.vignettingAlpha=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"vignettingBlur",{get:function(){return this.uniforms.vignettingBlur},set:function(t){this.uniforms.vignettingBlur=t},enumerable:!1,configurable:!0}),e.defaults={curvature:1,lineWidth:1,lineContrast:.25,verticalLine:!1,noise:0,noiseSize:1,seed:0,vignetting:.3,vignettingAlpha:1,vignettingBlur:.3,time:0},e})(k);/*!
 * @pixi/filter-dot - v4.2.0
 * Compiled Fri, 05 Aug 2022 19:53:35 UTC
 *
 * @pixi/filter-dot is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var id=function(r,e){return id=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])},id(r,e)};function Fz(r,e){id(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var Nz=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,Lz=`precision mediump float;

varying vec2 vTextureCoord;
varying vec4 vColor;

uniform vec4 filterArea;
uniform sampler2D uSampler;

uniform float angle;
uniform float scale;

float pattern()
{
   float s = sin(angle), c = cos(angle);
   vec2 tex = vTextureCoord * filterArea.xy;
   vec2 point = vec2(
       c * tex.x - s * tex.y,
       s * tex.x + c * tex.y
   ) * scale;
   return (sin(point.x) * sin(point.y)) * 4.0;
}

void main()
{
   vec4 color = texture2D(uSampler, vTextureCoord);
   float average = (color.r + color.g + color.b) / 3.0;
   gl_FragColor = vec4(vec3(average * 10.0 - 5.0 + pattern()), color.a);
}
`;(function(r){Fz(e,r);function e(t,n){t===void 0&&(t=1),n===void 0&&(n=5);var i=r.call(this,Nz,Lz)||this;return i.scale=t,i.angle=n,i}return Object.defineProperty(e.prototype,"scale",{get:function(){return this.uniforms.scale},set:function(t){this.uniforms.scale=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"angle",{get:function(){return this.uniforms.angle},set:function(t){this.uniforms.angle=t},enumerable:!1,configurable:!0}),e})(k);/*!
 * @pixi/filter-drop-shadow - v4.2.0
 * Compiled Fri, 05 Aug 2022 19:53:35 UTC
 *
 * @pixi/filter-drop-shadow is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var od=function(r,e){return od=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])},od(r,e)};function Bz(r,e){od(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var Zs=function(){return Zs=Object.assign||function(e){for(var t=arguments,n,i=1,o=arguments.length;i<o;i++){n=t[i];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},Zs.apply(this,arguments)},Uz=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,Gz=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform float alpha;
uniform vec3 color;

uniform vec2 shift;
uniform vec4 inputSize;

void main(void){
    vec4 sample = texture2D(uSampler, vTextureCoord - shift * inputSize.zw);

    // Premultiply alpha
    sample.rgb = color.rgb * sample.a;

    // alpha user alpha
    sample *= alpha;

    gl_FragColor = sample;
}`;(function(r){Bz(e,r);function e(t){var n=r.call(this)||this;n.angle=45,n._distance=5,n._resolution=C.FILTER_RESOLUTION;var i=t?Zs(Zs({},e.defaults),t):e.defaults,o=i.kernels,a=i.blur,s=i.quality,u=i.pixelSize,l=i.resolution;n._tintFilter=new k(Uz,Gz),n._tintFilter.uniforms.color=new Float32Array(4),n._tintFilter.uniforms.shift=new X,n._tintFilter.resolution=l,n._blurFilter=o?new Ks(o):new Ks(a,s),n.pixelSize=u,n.resolution=l;var f=i.shadowOnly,c=i.rotation,h=i.distance,d=i.alpha,p=i.color;return n.shadowOnly=f,n.rotation=c,n.distance=h,n.alpha=d,n.color=p,n._updatePadding(),n}return e.prototype.apply=function(t,n,i,o){var a=t.getFilterTexture();this._tintFilter.apply(t,n,a,1),this._blurFilter.apply(t,a,i,o),this.shadowOnly!==!0&&t.applyFilter(this,n,i,0),t.returnFilterTexture(a)},e.prototype._updatePadding=function(){this.padding=this.distance+this.blur*2},e.prototype._updateShift=function(){this._tintFilter.uniforms.shift.set(this.distance*Math.cos(this.angle),this.distance*Math.sin(this.angle))},Object.defineProperty(e.prototype,"resolution",{get:function(){return this._resolution},set:function(t){this._resolution=t,this._tintFilter&&(this._tintFilter.resolution=t),this._blurFilter&&(this._blurFilter.resolution=t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"distance",{get:function(){return this._distance},set:function(t){this._distance=t,this._updatePadding(),this._updateShift()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"rotation",{get:function(){return this.angle/Or},set:function(t){this.angle=t*Or,this._updateShift()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"alpha",{get:function(){return this._tintFilter.uniforms.alpha},set:function(t){this._tintFilter.uniforms.alpha=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"color",{get:function(){return ve(this._tintFilter.uniforms.color)},set:function(t){Bt(t,this._tintFilter.uniforms.color)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"kernels",{get:function(){return this._blurFilter.kernels},set:function(t){this._blurFilter.kernels=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"blur",{get:function(){return this._blurFilter.blur},set:function(t){this._blurFilter.blur=t,this._updatePadding()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"quality",{get:function(){return this._blurFilter.quality},set:function(t){this._blurFilter.quality=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"pixelSize",{get:function(){return this._blurFilter.pixelSize},set:function(t){this._blurFilter.pixelSize=t},enumerable:!1,configurable:!0}),e.defaults={rotation:45,distance:5,color:0,alpha:.5,shadowOnly:!1,kernels:null,blur:2,quality:3,pixelSize:1,resolution:C.FILTER_RESOLUTION},e})(k);/*!
 * @pixi/filter-emboss - v4.2.0
 * Compiled Fri, 05 Aug 2022 19:53:35 UTC
 *
 * @pixi/filter-emboss is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var ad=function(r,e){return ad=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])},ad(r,e)};function jz(r,e){ad(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var kz=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,$z=`precision mediump float;

varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform float strength;
uniform vec4 filterArea;


void main(void)
{
	vec2 onePixel = vec2(1.0 / filterArea);

	vec4 color;

	color.rgb = vec3(0.5);

	color -= texture2D(uSampler, vTextureCoord - onePixel) * strength;
	color += texture2D(uSampler, vTextureCoord + onePixel) * strength;

	color.rgb = vec3((color.r + color.g + color.b) / 3.0);

	float alpha = texture2D(uSampler, vTextureCoord).a;

	gl_FragColor = vec4(color.rgb * alpha, alpha);
}
`;(function(r){jz(e,r);function e(t){t===void 0&&(t=5);var n=r.call(this,kz,$z)||this;return n.strength=t,n}return Object.defineProperty(e.prototype,"strength",{get:function(){return this.uniforms.strength},set:function(t){this.uniforms.strength=t},enumerable:!1,configurable:!0}),e})(k);/*!
 * @pixi/filter-glitch - v4.2.0
 * Compiled Fri, 05 Aug 2022 19:53:35 UTC
 *
 * @pixi/filter-glitch is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var sd=function(r,e){return sd=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])},sd(r,e)};function zz(r,e){sd(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var Hz=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,Xz=`// precision highp float;

varying vec2 vTextureCoord;
uniform sampler2D uSampler;

uniform vec4 filterArea;
uniform vec4 filterClamp;
uniform vec2 dimensions;
uniform float aspect;

uniform sampler2D displacementMap;
uniform float offset;
uniform float sinDir;
uniform float cosDir;
uniform int fillMode;

uniform float seed;
uniform vec2 red;
uniform vec2 green;
uniform vec2 blue;

const int TRANSPARENT = 0;
const int ORIGINAL = 1;
const int LOOP = 2;
const int CLAMP = 3;
const int MIRROR = 4;

void main(void)
{
    vec2 coord = (vTextureCoord * filterArea.xy) / dimensions;

    if (coord.x > 1.0 || coord.y > 1.0) {
        return;
    }

    float cx = coord.x - 0.5;
    float cy = (coord.y - 0.5) * aspect;
    float ny = (-sinDir * cx + cosDir * cy) / aspect + 0.5;

    // displacementMap: repeat
    // ny = ny > 1.0 ? ny - 1.0 : (ny < 0.0 ? 1.0 + ny : ny);

    // displacementMap: mirror
    ny = ny > 1.0 ? 2.0 - ny : (ny < 0.0 ? -ny : ny);

    vec4 dc = texture2D(displacementMap, vec2(0.5, ny));

    float displacement = (dc.r - dc.g) * (offset / filterArea.x);

    coord = vTextureCoord + vec2(cosDir * displacement, sinDir * displacement * aspect);

    if (fillMode == CLAMP) {
        coord = clamp(coord, filterClamp.xy, filterClamp.zw);
    } else {
        if( coord.x > filterClamp.z ) {
            if (fillMode == TRANSPARENT) {
                discard;
            } else if (fillMode == LOOP) {
                coord.x -= filterClamp.z;
            } else if (fillMode == MIRROR) {
                coord.x = filterClamp.z * 2.0 - coord.x;
            }
        } else if( coord.x < filterClamp.x ) {
            if (fillMode == TRANSPARENT) {
                discard;
            } else if (fillMode == LOOP) {
                coord.x += filterClamp.z;
            } else if (fillMode == MIRROR) {
                coord.x *= -filterClamp.z;
            }
        }

        if( coord.y > filterClamp.w ) {
            if (fillMode == TRANSPARENT) {
                discard;
            } else if (fillMode == LOOP) {
                coord.y -= filterClamp.w;
            } else if (fillMode == MIRROR) {
                coord.y = filterClamp.w * 2.0 - coord.y;
            }
        } else if( coord.y < filterClamp.y ) {
            if (fillMode == TRANSPARENT) {
                discard;
            } else if (fillMode == LOOP) {
                coord.y += filterClamp.w;
            } else if (fillMode == MIRROR) {
                coord.y *= -filterClamp.w;
            }
        }
    }

    gl_FragColor.r = texture2D(uSampler, coord + red * (1.0 - seed * 0.4) / filterArea.xy).r;
    gl_FragColor.g = texture2D(uSampler, coord + green * (1.0 - seed * 0.3) / filterArea.xy).g;
    gl_FragColor.b = texture2D(uSampler, coord + blue * (1.0 - seed * 0.2) / filterArea.xy).b;
    gl_FragColor.a = texture2D(uSampler, coord).a;
}
`;(function(r){zz(e,r);function e(t){var n=r.call(this,Hz,Xz)||this;return n.offset=100,n.fillMode=e.TRANSPARENT,n.average=!1,n.seed=0,n.minSize=8,n.sampleSize=512,n._slices=0,n._offsets=new Float32Array(1),n._sizes=new Float32Array(1),n._direction=-1,n.uniforms.dimensions=new Float32Array(2),n._canvas=document.createElement("canvas"),n._canvas.width=4,n._canvas.height=n.sampleSize,n.texture=G.from(n._canvas,{scaleMode:Ht.NEAREST}),Object.assign(n,e.defaults,t),n}return e.prototype.apply=function(t,n,i,o){var a=n.filterFrame,s=a.width,u=a.height;this.uniforms.dimensions[0]=s,this.uniforms.dimensions[1]=u,this.uniforms.aspect=u/s,this.uniforms.seed=this.seed,this.uniforms.offset=this.offset,this.uniforms.fillMode=this.fillMode,t.applyFilter(this,n,i,o)},e.prototype._randomizeSizes=function(){var t=this._sizes,n=this._slices-1,i=this.sampleSize,o=Math.min(this.minSize/i,.9/this._slices);if(this.average){for(var a=this._slices,s=1,u=0;u<n;u++){var l=s/(a-u),f=Math.max(l*(1-Math.random()*.6),o);t[u]=f,s-=f}t[n]=s}else{for(var s=1,c=Math.sqrt(1/this._slices),u=0;u<n;u++){var f=Math.max(c*s*Math.random(),o);t[u]=f,s-=f}t[n]=s}this.shuffle()},e.prototype.shuffle=function(){for(var t=this._sizes,n=this._slices-1,i=n;i>0;i--){var o=Math.random()*i>>0,a=t[i];t[i]=t[o],t[o]=a}},e.prototype._randomizeOffsets=function(){for(var t=0;t<this._slices;t++)this._offsets[t]=Math.random()*(Math.random()<.5?-1:1)},e.prototype.refresh=function(){this._randomizeSizes(),this._randomizeOffsets(),this.redraw()},e.prototype.redraw=function(){var t=this.sampleSize,n=this.texture,i=this._canvas.getContext("2d");i.clearRect(0,0,8,t);for(var o,a=0,s=0;s<this._slices;s++){o=Math.floor(this._offsets[s]*256);var u=this._sizes[s]*t,l=o>0?o:0,f=o<0?-o:0;i.fillStyle="rgba("+l+", "+f+", 0, 1)",i.fillRect(0,a>>0,t,u+1>>0),a+=u}n.baseTexture.update(),this.uniforms.displacementMap=n},Object.defineProperty(e.prototype,"sizes",{get:function(){return this._sizes},set:function(t){for(var n=Math.min(this._slices,t.length),i=0;i<n;i++)this._sizes[i]=t[i]},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"offsets",{get:function(){return this._offsets},set:function(t){for(var n=Math.min(this._slices,t.length),i=0;i<n;i++)this._offsets[i]=t[i]},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"slices",{get:function(){return this._slices},set:function(t){this._slices!==t&&(this._slices=t,this.uniforms.slices=t,this._sizes=this.uniforms.slicesWidth=new Float32Array(t),this._offsets=this.uniforms.slicesOffset=new Float32Array(t),this.refresh())},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"direction",{get:function(){return this._direction},set:function(t){if(this._direction!==t){this._direction=t;var n=t*Or;this.uniforms.sinDir=Math.sin(n),this.uniforms.cosDir=Math.cos(n)}},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"red",{get:function(){return this.uniforms.red},set:function(t){this.uniforms.red=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"green",{get:function(){return this.uniforms.green},set:function(t){this.uniforms.green=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"blue",{get:function(){return this.uniforms.blue},set:function(t){this.uniforms.blue=t},enumerable:!1,configurable:!0}),e.prototype.destroy=function(){var t;(t=this.texture)===null||t===void 0||t.destroy(!0),this.texture=this._canvas=this.red=this.green=this.blue=this._sizes=this._offsets=null},e.defaults={slices:5,offset:100,direction:0,fillMode:0,average:!1,seed:0,red:[0,0],green:[0,0],blue:[0,0],minSize:8,sampleSize:512},e.TRANSPARENT=0,e.ORIGINAL=1,e.LOOP=2,e.CLAMP=3,e.MIRROR=4,e})(k);/*!
 * @pixi/filter-glow - v4.2.0
 * Compiled Fri, 05 Aug 2022 19:53:35 UTC
 *
 * @pixi/filter-glow is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var ud=function(r,e){return ud=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])},ud(r,e)};function Vz(r,e){ud(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var Wz=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,Yz=`varying vec2 vTextureCoord;
varying vec4 vColor;

uniform sampler2D uSampler;

uniform float outerStrength;
uniform float innerStrength;

uniform vec4 glowColor;

uniform vec4 filterArea;
uniform vec4 filterClamp;
uniform bool knockout;

const float PI = 3.14159265358979323846264;

const float DIST = __DIST__;
const float ANGLE_STEP_SIZE = min(__ANGLE_STEP_SIZE__, PI * 2.0);
const float ANGLE_STEP_NUM = ceil(PI * 2.0 / ANGLE_STEP_SIZE);

const float MAX_TOTAL_ALPHA = ANGLE_STEP_NUM * DIST * (DIST + 1.0) / 2.0;

void main(void) {
    vec2 px = vec2(1.0 / filterArea.x, 1.0 / filterArea.y);

    float totalAlpha = 0.0;

    vec2 direction;
    vec2 displaced;
    vec4 curColor;

    for (float angle = 0.0; angle < PI * 2.0; angle += ANGLE_STEP_SIZE) {
       direction = vec2(cos(angle), sin(angle)) * px;

       for (float curDistance = 0.0; curDistance < DIST; curDistance++) {
           displaced = clamp(vTextureCoord + direction * 
                   (curDistance + 1.0), filterClamp.xy, filterClamp.zw);

           curColor = texture2D(uSampler, displaced);

           totalAlpha += (DIST - curDistance) * curColor.a;
       }
    }
    
    curColor = texture2D(uSampler, vTextureCoord);

    float alphaRatio = (totalAlpha / MAX_TOTAL_ALPHA);

    float innerGlowAlpha = (1.0 - alphaRatio) * innerStrength * curColor.a;
    float innerGlowStrength = min(1.0, innerGlowAlpha);
    
    vec4 innerColor = mix(curColor, glowColor, innerGlowStrength);

    float outerGlowAlpha = alphaRatio * outerStrength * (1. - curColor.a);
    float outerGlowStrength = min(1.0 - innerColor.a, outerGlowAlpha);

    vec4 outerGlowColor = outerGlowStrength * glowColor.rgba;
    
    if (knockout) {
      float resultAlpha = outerGlowAlpha + innerGlowAlpha;
      gl_FragColor = vec4(glowColor.rgb * resultAlpha, resultAlpha);
    }
    else {
      gl_FragColor = innerColor + outerGlowColor;
    }
}
`;(function(r){Vz(e,r);function e(t){var n=this,i=Object.assign({},e.defaults,t),o=i.outerStrength,a=i.innerStrength,s=i.color,u=i.knockout,l=i.quality,f=Math.round(i.distance);return n=r.call(this,Wz,Yz.replace(/__ANGLE_STEP_SIZE__/gi,""+(1/l/f).toFixed(7)).replace(/__DIST__/gi,f.toFixed(0)+".0"))||this,n.uniforms.glowColor=new Float32Array([0,0,0,1]),Object.assign(n,{color:s,outerStrength:o,innerStrength:a,padding:f,knockout:u}),n}return Object.defineProperty(e.prototype,"color",{get:function(){return ve(this.uniforms.glowColor)},set:function(t){Bt(t,this.uniforms.glowColor)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"outerStrength",{get:function(){return this.uniforms.outerStrength},set:function(t){this.uniforms.outerStrength=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"innerStrength",{get:function(){return this.uniforms.innerStrength},set:function(t){this.uniforms.innerStrength=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"knockout",{get:function(){return this.uniforms.knockout},set:function(t){this.uniforms.knockout=t},enumerable:!1,configurable:!0}),e.defaults={distance:10,outerStrength:4,innerStrength:0,color:16777215,quality:.1,knockout:!1},e})(k);/*!
 * @pixi/filter-godray - v4.2.0
 * Compiled Fri, 05 Aug 2022 19:53:35 UTC
 *
 * @pixi/filter-godray is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var ld=function(r,e){return ld=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])},ld(r,e)};function qz(r,e){ld(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var Kz=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,Zz=`vec3 mod289(vec3 x)
{
    return x - floor(x * (1.0 / 289.0)) * 289.0;
}
vec4 mod289(vec4 x)
{
    return x - floor(x * (1.0 / 289.0)) * 289.0;
}
vec4 permute(vec4 x)
{
    return mod289(((x * 34.0) + 1.0) * x);
}
vec4 taylorInvSqrt(vec4 r)
{
    return 1.79284291400159 - 0.85373472095314 * r;
}
vec3 fade(vec3 t)
{
    return t * t * t * (t * (t * 6.0 - 15.0) + 10.0);
}
// Classic Perlin noise, periodic variant
float pnoise(vec3 P, vec3 rep)
{
    vec3 Pi0 = mod(floor(P), rep); // Integer part, modulo period
    vec3 Pi1 = mod(Pi0 + vec3(1.0), rep); // Integer part + 1, mod period
    Pi0 = mod289(Pi0);
    Pi1 = mod289(Pi1);
    vec3 Pf0 = fract(P); // Fractional part for interpolation
    vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0
    vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
    vec4 iy = vec4(Pi0.yy, Pi1.yy);
    vec4 iz0 = Pi0.zzzz;
    vec4 iz1 = Pi1.zzzz;
    vec4 ixy = permute(permute(ix) + iy);
    vec4 ixy0 = permute(ixy + iz0);
    vec4 ixy1 = permute(ixy + iz1);
    vec4 gx0 = ixy0 * (1.0 / 7.0);
    vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
    gx0 = fract(gx0);
    vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
    vec4 sz0 = step(gz0, vec4(0.0));
    gx0 -= sz0 * (step(0.0, gx0) - 0.5);
    gy0 -= sz0 * (step(0.0, gy0) - 0.5);
    vec4 gx1 = ixy1 * (1.0 / 7.0);
    vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
    gx1 = fract(gx1);
    vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
    vec4 sz1 = step(gz1, vec4(0.0));
    gx1 -= sz1 * (step(0.0, gx1) - 0.5);
    gy1 -= sz1 * (step(0.0, gy1) - 0.5);
    vec3 g000 = vec3(gx0.x, gy0.x, gz0.x);
    vec3 g100 = vec3(gx0.y, gy0.y, gz0.y);
    vec3 g010 = vec3(gx0.z, gy0.z, gz0.z);
    vec3 g110 = vec3(gx0.w, gy0.w, gz0.w);
    vec3 g001 = vec3(gx1.x, gy1.x, gz1.x);
    vec3 g101 = vec3(gx1.y, gy1.y, gz1.y);
    vec3 g011 = vec3(gx1.z, gy1.z, gz1.z);
    vec3 g111 = vec3(gx1.w, gy1.w, gz1.w);
    vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
    g000 *= norm0.x;
    g010 *= norm0.y;
    g100 *= norm0.z;
    g110 *= norm0.w;
    vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
    g001 *= norm1.x;
    g011 *= norm1.y;
    g101 *= norm1.z;
    g111 *= norm1.w;
    float n000 = dot(g000, Pf0);
    float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
    float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
    float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
    float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
    float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
    float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
    float n111 = dot(g111, Pf1);
    vec3 fade_xyz = fade(Pf0);
    vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
    vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
    float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);
    return 2.2 * n_xyz;
}
float turb(vec3 P, vec3 rep, float lacunarity, float gain)
{
    float sum = 0.0;
    float sc = 1.0;
    float totalgain = 1.0;
    for (float i = 0.0; i < 6.0; i++)
    {
        sum += totalgain * pnoise(P * sc, rep);
        sc *= lacunarity;
        totalgain *= gain;
    }
    return abs(sum);
}
`,Jz=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform vec4 filterArea;
uniform vec2 dimensions;

uniform vec2 light;
uniform bool parallel;
uniform float aspect;

uniform float gain;
uniform float lacunarity;
uniform float time;
uniform float alpha;

\${perlin}

void main(void) {
    vec2 coord = vTextureCoord * filterArea.xy / dimensions.xy;

    float d;

    if (parallel) {
        float _cos = light.x;
        float _sin = light.y;
        d = (_cos * coord.x) + (_sin * coord.y * aspect);
    } else {
        float dx = coord.x - light.x / dimensions.x;
        float dy = (coord.y - light.y / dimensions.y) * aspect;
        float dis = sqrt(dx * dx + dy * dy) + 0.00001;
        d = dy / dis;
    }

    vec3 dir = vec3(d, d, 0.0);

    float noise = turb(dir + vec3(time, 0.0, 62.1 + time) * 0.05, vec3(480.0, 320.0, 480.0), lacunarity, gain);
    noise = mix(noise, 0.0, 0.3);
    //fade vertically.
    vec4 mist = vec4(noise, noise, noise, 1.0) * (1.0 - coord.y);
    mist.a = 1.0;
    // apply user alpha
    mist *= alpha;

    gl_FragColor = texture2D(uSampler, vTextureCoord) + mist;

}
`;(function(r){qz(e,r);function e(t){var n=r.call(this,Kz,Jz.replace("${perlin}",Zz))||this;n.parallel=!0,n.time=0,n._angle=0,n.uniforms.dimensions=new Float32Array(2);var i=Object.assign(e.defaults,t);return n._angleLight=new X,n.angle=i.angle,n.gain=i.gain,n.lacunarity=i.lacunarity,n.alpha=i.alpha,n.parallel=i.parallel,n.center=i.center,n.time=i.time,n}return e.prototype.apply=function(t,n,i,o){var a=n.filterFrame,s=a.width,u=a.height;this.uniforms.light=this.parallel?this._angleLight:this.center,this.uniforms.parallel=this.parallel,this.uniforms.dimensions[0]=s,this.uniforms.dimensions[1]=u,this.uniforms.aspect=u/s,this.uniforms.time=this.time,this.uniforms.alpha=this.alpha,t.applyFilter(this,n,i,o)},Object.defineProperty(e.prototype,"angle",{get:function(){return this._angle},set:function(t){this._angle=t;var n=t*Or;this._angleLight.x=Math.cos(n),this._angleLight.y=Math.sin(n)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"gain",{get:function(){return this.uniforms.gain},set:function(t){this.uniforms.gain=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"lacunarity",{get:function(){return this.uniforms.lacunarity},set:function(t){this.uniforms.lacunarity=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"alpha",{get:function(){return this.uniforms.alpha},set:function(t){this.uniforms.alpha=t},enumerable:!1,configurable:!0}),e.defaults={angle:30,gain:.5,lacunarity:2.5,time:0,parallel:!0,center:[0,0],alpha:1},e})(k);/*!
 * @pixi/filter-motion-blur - v4.2.0
 * Compiled Fri, 05 Aug 2022 19:53:35 UTC
 *
 * @pixi/filter-motion-blur is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var fd=function(r,e){return fd=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])},fd(r,e)};function Qz(r,e){fd(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var t6=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,e6=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform vec4 filterArea;

uniform vec2 uVelocity;
uniform int uKernelSize;
uniform float uOffset;

const int MAX_KERNEL_SIZE = 2048;

// Notice:
// the perfect way:
//    int kernelSize = min(uKernelSize, MAX_KERNELSIZE);
// BUT in real use-case , uKernelSize < MAX_KERNELSIZE almost always.
// So use uKernelSize directly.

void main(void)
{
    vec4 color = texture2D(uSampler, vTextureCoord);

    if (uKernelSize == 0)
    {
        gl_FragColor = color;
        return;
    }

    vec2 velocity = uVelocity / filterArea.xy;
    float offset = -uOffset / length(uVelocity) - 0.5;
    int k = uKernelSize - 1;

    for(int i = 0; i < MAX_KERNEL_SIZE - 1; i++) {
        if (i == k) {
            break;
        }
        vec2 bias = velocity * (float(i) / float(k) + offset);
        color += texture2D(uSampler, vTextureCoord + bias);
    }
    gl_FragColor = color / float(uKernelSize);
}
`;(function(r){Qz(e,r);function e(t,n,i){t===void 0&&(t=[0,0]),n===void 0&&(n=5),i===void 0&&(i=0);var o=r.call(this,t6,e6)||this;return o.kernelSize=5,o.uniforms.uVelocity=new Float32Array(2),o._velocity=new gr(o.velocityChanged,o),o.setVelocity(t),o.kernelSize=n,o.offset=i,o}return e.prototype.apply=function(t,n,i,o){var a=this.velocity,s=a.x,u=a.y;this.uniforms.uKernelSize=s!==0||u!==0?this.kernelSize:0,t.applyFilter(this,n,i,o)},Object.defineProperty(e.prototype,"velocity",{get:function(){return this._velocity},set:function(t){this.setVelocity(t)},enumerable:!1,configurable:!0}),e.prototype.setVelocity=function(t){if(Array.isArray(t)){var n=t[0],i=t[1];this._velocity.set(n,i)}else this._velocity.copyFrom(t)},e.prototype.velocityChanged=function(){this.uniforms.uVelocity[0]=this._velocity.x,this.uniforms.uVelocity[1]=this._velocity.y,this.padding=(Math.max(Math.abs(this._velocity.x),Math.abs(this._velocity.y))>>0)+1},Object.defineProperty(e.prototype,"offset",{get:function(){return this.uniforms.uOffset},set:function(t){this.uniforms.uOffset=t},enumerable:!1,configurable:!0}),e})(k);/*!
 * @pixi/filter-multi-color-replace - v4.2.0
 * Compiled Fri, 05 Aug 2022 19:53:35 UTC
 *
 * @pixi/filter-multi-color-replace is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var hd=function(r,e){return hd=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])},hd(r,e)};function r6(r,e){hd(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var n6=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,i6=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;

uniform float epsilon;

const int MAX_COLORS = %maxColors%;

uniform vec3 originalColors[MAX_COLORS];
uniform vec3 targetColors[MAX_COLORS];

void main(void)
{
    gl_FragColor = texture2D(uSampler, vTextureCoord);

    float alpha = gl_FragColor.a;
    if (alpha < 0.0001)
    {
      return;
    }

    vec3 color = gl_FragColor.rgb / alpha;

    for(int i = 0; i < MAX_COLORS; i++)
    {
      vec3 origColor = originalColors[i];
      if (origColor.r < 0.0)
      {
        break;
      }
      vec3 colorDiff = origColor - color;
      if (length(colorDiff) < epsilon)
      {
        vec3 targetColor = targetColors[i];
        gl_FragColor = vec4((targetColor + colorDiff) * alpha, alpha);
        return;
      }
    }
}
`;(function(r){r6(e,r);function e(t,n,i){n===void 0&&(n=.05),i===void 0&&(i=t.length);var o=r.call(this,n6,i6.replace(/%maxColors%/g,i.toFixed(0)))||this;return o._replacements=[],o._maxColors=0,o.epsilon=n,o._maxColors=i,o.uniforms.originalColors=new Float32Array(i*3),o.uniforms.targetColors=new Float32Array(i*3),o.replacements=t,o}return Object.defineProperty(e.prototype,"replacements",{get:function(){return this._replacements},set:function(t){var n=this.uniforms.originalColors,i=this.uniforms.targetColors,o=t.length;if(o>this._maxColors)throw new Error("Length of replacements ("+o+") exceeds the maximum colors length ("+this._maxColors+")");n[o*3]=-1;for(var a=0;a<o;a++){var s=t[a],u=s[0];typeof u=="number"?u=Bt(u):s[0]=ve(u),n[a*3]=u[0],n[a*3+1]=u[1],n[a*3+2]=u[2];var l=s[1];typeof l=="number"?l=Bt(l):s[1]=ve(l),i[a*3]=l[0],i[a*3+1]=l[1],i[a*3+2]=l[2]}this._replacements=t},enumerable:!1,configurable:!0}),e.prototype.refresh=function(){this.replacements=this._replacements},Object.defineProperty(e.prototype,"maxColors",{get:function(){return this._maxColors},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"epsilon",{get:function(){return this.uniforms.epsilon},set:function(t){this.uniforms.epsilon=t},enumerable:!1,configurable:!0}),e})(k);/*!
 * @pixi/filter-old-film - v4.2.0
 * Compiled Fri, 05 Aug 2022 19:53:35 UTC
 *
 * @pixi/filter-old-film is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var cd=function(r,e){return cd=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])},cd(r,e)};function o6(r,e){cd(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var a6=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,s6=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform vec4 filterArea;
uniform vec2 dimensions;

uniform float sepia;
uniform float noise;
uniform float noiseSize;
uniform float scratch;
uniform float scratchDensity;
uniform float scratchWidth;
uniform float vignetting;
uniform float vignettingAlpha;
uniform float vignettingBlur;
uniform float seed;

const float SQRT_2 = 1.414213;
const vec3 SEPIA_RGB = vec3(112.0 / 255.0, 66.0 / 255.0, 20.0 / 255.0);

float rand(vec2 co) {
    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

vec3 Overlay(vec3 src, vec3 dst)
{
    // if (dst <= 0.5) then: 2 * src * dst
    // if (dst > 0.5) then: 1 - 2 * (1 - dst) * (1 - src)
    return vec3((dst.x <= 0.5) ? (2.0 * src.x * dst.x) : (1.0 - 2.0 * (1.0 - dst.x) * (1.0 - src.x)),
                (dst.y <= 0.5) ? (2.0 * src.y * dst.y) : (1.0 - 2.0 * (1.0 - dst.y) * (1.0 - src.y)),
                (dst.z <= 0.5) ? (2.0 * src.z * dst.z) : (1.0 - 2.0 * (1.0 - dst.z) * (1.0 - src.z)));
}


void main()
{
    gl_FragColor = texture2D(uSampler, vTextureCoord);
    vec3 color = gl_FragColor.rgb;

    if (sepia > 0.0)
    {
        float gray = (color.x + color.y + color.z) / 3.0;
        vec3 grayscale = vec3(gray);

        color = Overlay(SEPIA_RGB, grayscale);

        color = grayscale + sepia * (color - grayscale);
    }

    vec2 coord = vTextureCoord * filterArea.xy / dimensions.xy;

    if (vignetting > 0.0)
    {
        float outter = SQRT_2 - vignetting * SQRT_2;
        vec2 dir = vec2(vec2(0.5, 0.5) - coord);
        dir.y *= dimensions.y / dimensions.x;
        float darker = clamp((outter - length(dir) * SQRT_2) / ( 0.00001 + vignettingBlur * SQRT_2), 0.0, 1.0);
        color.rgb *= darker + (1.0 - darker) * (1.0 - vignettingAlpha);
    }

    if (scratchDensity > seed && scratch != 0.0)
    {
        float phase = seed * 256.0;
        float s = mod(floor(phase), 2.0);
        float dist = 1.0 / scratchDensity;
        float d = distance(coord, vec2(seed * dist, abs(s - seed * dist)));
        if (d < seed * 0.6 + 0.4)
        {
            highp float period = scratchDensity * 10.0;

            float xx = coord.x * period + phase;
            float aa = abs(mod(xx, 0.5) * 4.0);
            float bb = mod(floor(xx / 0.5), 2.0);
            float yy = (1.0 - bb) * aa + bb * (2.0 - aa);

            float kk = 2.0 * period;
            float dw = scratchWidth / dimensions.x * (0.75 + seed);
            float dh = dw * kk;

            float tine = (yy - (2.0 - dh));

            if (tine > 0.0) {
                float _sign = sign(scratch);

                tine = s * tine / period + scratch + 0.1;
                tine = clamp(tine + 1.0, 0.5 + _sign * 0.5, 1.5 + _sign * 0.5);

                color.rgb *= tine;
            }
        }
    }

    if (noise > 0.0 && noiseSize > 0.0)
    {
        vec2 pixelCoord = vTextureCoord.xy * filterArea.xy;
        pixelCoord.x = floor(pixelCoord.x / noiseSize);
        pixelCoord.y = floor(pixelCoord.y / noiseSize);
        // vec2 d = pixelCoord * noiseSize * vec2(1024.0 + seed * 512.0, 1024.0 - seed * 512.0);
        // float _noise = snoise(d) * 0.5;
        float _noise = rand(pixelCoord * noiseSize * seed) - 0.5;
        color += _noise * noise;
    }

    gl_FragColor.rgb = color;
}
`;(function(r){o6(e,r);function e(t,n){n===void 0&&(n=0);var i=r.call(this,a6,s6)||this;return i.seed=0,i.uniforms.dimensions=new Float32Array(2),typeof t=="number"?(i.seed=t,t=void 0):i.seed=n,Object.assign(i,e.defaults,t),i}return e.prototype.apply=function(t,n,i,o){var a,s;this.uniforms.dimensions[0]=(a=n.filterFrame)===null||a===void 0?void 0:a.width,this.uniforms.dimensions[1]=(s=n.filterFrame)===null||s===void 0?void 0:s.height,this.uniforms.seed=this.seed,t.applyFilter(this,n,i,o)},Object.defineProperty(e.prototype,"sepia",{get:function(){return this.uniforms.sepia},set:function(t){this.uniforms.sepia=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"noise",{get:function(){return this.uniforms.noise},set:function(t){this.uniforms.noise=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"noiseSize",{get:function(){return this.uniforms.noiseSize},set:function(t){this.uniforms.noiseSize=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"scratch",{get:function(){return this.uniforms.scratch},set:function(t){this.uniforms.scratch=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"scratchDensity",{get:function(){return this.uniforms.scratchDensity},set:function(t){this.uniforms.scratchDensity=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"scratchWidth",{get:function(){return this.uniforms.scratchWidth},set:function(t){this.uniforms.scratchWidth=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"vignetting",{get:function(){return this.uniforms.vignetting},set:function(t){this.uniforms.vignetting=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"vignettingAlpha",{get:function(){return this.uniforms.vignettingAlpha},set:function(t){this.uniforms.vignettingAlpha=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"vignettingBlur",{get:function(){return this.uniforms.vignettingBlur},set:function(t){this.uniforms.vignettingBlur=t},enumerable:!1,configurable:!0}),e.defaults={sepia:.3,noise:.3,noiseSize:1,scratch:.5,scratchDensity:.3,scratchWidth:1,vignetting:.3,vignettingAlpha:1,vignettingBlur:.3},e})(k);/*!
 * @pixi/filter-outline - v4.2.0
 * Compiled Fri, 05 Aug 2022 19:53:35 UTC
 *
 * @pixi/filter-outline is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var dd=function(r,e){return dd=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])},dd(r,e)};function u6(r,e){dd(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var l6=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,f6=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;

uniform vec2 thickness;
uniform vec4 outlineColor;
uniform vec4 filterClamp;

const float DOUBLE_PI = 3.14159265358979323846264 * 2.;

void main(void) {
    vec4 ownColor = texture2D(uSampler, vTextureCoord);
    vec4 curColor;
    float maxAlpha = 0.;
    vec2 displaced;
    for (float angle = 0.; angle <= DOUBLE_PI; angle += \${angleStep}) {
        displaced.x = vTextureCoord.x + thickness.x * cos(angle);
        displaced.y = vTextureCoord.y + thickness.y * sin(angle);
        curColor = texture2D(uSampler, clamp(displaced, filterClamp.xy, filterClamp.zw));
        maxAlpha = max(maxAlpha, curColor.a);
    }
    float resultAlpha = max(maxAlpha, ownColor.a);
    gl_FragColor = vec4((ownColor.rgb + outlineColor.rgb * (1. - ownColor.a)) * resultAlpha, resultAlpha);
}
`;(function(r){u6(e,r);function e(t,n,i){t===void 0&&(t=1),n===void 0&&(n=0),i===void 0&&(i=.1);var o=r.call(this,l6,f6.replace(/\$\{angleStep\}/,e.getAngleStep(i)))||this;return o._thickness=1,o.uniforms.thickness=new Float32Array([0,0]),o.uniforms.outlineColor=new Float32Array([0,0,0,1]),Object.assign(o,{thickness:t,color:n,quality:i}),o}return e.getAngleStep=function(t){var n=Math.max(t*e.MAX_SAMPLES,e.MIN_SAMPLES);return(Math.PI*2/n).toFixed(7)},e.prototype.apply=function(t,n,i,o){this.uniforms.thickness[0]=this._thickness/n._frame.width,this.uniforms.thickness[1]=this._thickness/n._frame.height,t.applyFilter(this,n,i,o)},Object.defineProperty(e.prototype,"color",{get:function(){return ve(this.uniforms.outlineColor)},set:function(t){Bt(t,this.uniforms.outlineColor)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"thickness",{get:function(){return this._thickness},set:function(t){this._thickness=t,this.padding=t},enumerable:!1,configurable:!0}),e.MIN_SAMPLES=1,e.MAX_SAMPLES=100,e})(k);/*!
 * @pixi/filter-pixelate - v4.2.0
 * Compiled Fri, 05 Aug 2022 19:53:35 UTC
 *
 * @pixi/filter-pixelate is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var pd=function(r,e){return pd=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])},pd(r,e)};function h6(r,e){pd(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var c6=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,d6=`precision mediump float;

varying vec2 vTextureCoord;

uniform vec2 size;
uniform sampler2D uSampler;

uniform vec4 filterArea;

vec2 mapCoord( vec2 coord )
{
    coord *= filterArea.xy;
    coord += filterArea.zw;

    return coord;
}

vec2 unmapCoord( vec2 coord )
{
    coord -= filterArea.zw;
    coord /= filterArea.xy;

    return coord;
}

vec2 pixelate(vec2 coord, vec2 size)
{
	return floor( coord / size ) * size;
}

void main(void)
{
    vec2 coord = mapCoord(vTextureCoord);

    coord = pixelate(coord, size);

    coord = unmapCoord(coord);

    gl_FragColor = texture2D(uSampler, coord);
}
`,p6=function(r){h6(e,r);function e(t){t===void 0&&(t=10);var n=r.call(this,c6,d6)||this;return n.size=t,n}return Object.defineProperty(e.prototype,"size",{get:function(){return this.uniforms.size},set:function(t){typeof t=="number"&&(t=[t,t]),this.uniforms.size=t},enumerable:!1,configurable:!0}),e}(k);/*!
 * @pixi/filter-radial-blur - v4.2.0
 * Compiled Fri, 05 Aug 2022 19:53:35 UTC
 *
 * @pixi/filter-radial-blur is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var vd=function(r,e){return vd=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])},vd(r,e)};function v6(r,e){vd(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var y6=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,m6=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform vec4 filterArea;

uniform float uRadian;
uniform vec2 uCenter;
uniform float uRadius;
uniform int uKernelSize;

const int MAX_KERNEL_SIZE = 2048;

void main(void)
{
    vec4 color = texture2D(uSampler, vTextureCoord);

    if (uKernelSize == 0)
    {
        gl_FragColor = color;
        return;
    }

    float aspect = filterArea.y / filterArea.x;
    vec2 center = uCenter.xy / filterArea.xy;
    float gradient = uRadius / filterArea.x * 0.3;
    float radius = uRadius / filterArea.x - gradient * 0.5;
    int k = uKernelSize - 1;

    vec2 coord = vTextureCoord;
    vec2 dir = vec2(center - coord);
    float dist = length(vec2(dir.x, dir.y * aspect));

    float radianStep = uRadian;
    if (radius >= 0.0 && dist > radius) {
        float delta = dist - radius;
        float gap = gradient;
        float scale = 1.0 - abs(delta / gap);
        if (scale <= 0.0) {
            gl_FragColor = color;
            return;
        }
        radianStep *= scale;
    }
    radianStep /= float(k);

    float s = sin(radianStep);
    float c = cos(radianStep);
    mat2 rotationMatrix = mat2(vec2(c, -s), vec2(s, c));

    for(int i = 0; i < MAX_KERNEL_SIZE - 1; i++) {
        if (i == k) {
            break;
        }

        coord -= center;
        coord.y *= aspect;
        coord = rotationMatrix * coord;
        coord.y /= aspect;
        coord += center;

        vec4 sample = texture2D(uSampler, coord);

        // switch to pre-multiplied alpha to correctly blur transparent images
        // sample.rgb *= sample.a;

        color += sample;
    }

    gl_FragColor = color / float(uKernelSize);
}
`;(function(r){v6(e,r);function e(t,n,i,o){t===void 0&&(t=0),n===void 0&&(n=[0,0]),i===void 0&&(i=5),o===void 0&&(o=-1);var a=r.call(this,y6,m6)||this;return a._angle=0,a.angle=t,a.center=n,a.kernelSize=i,a.radius=o,a}return e.prototype.apply=function(t,n,i,o){this.uniforms.uKernelSize=this._angle!==0?this.kernelSize:0,t.applyFilter(this,n,i,o)},Object.defineProperty(e.prototype,"angle",{get:function(){return this._angle},set:function(t){this._angle=t,this.uniforms.uRadian=t*Math.PI/180},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"center",{get:function(){return this.uniforms.uCenter},set:function(t){this.uniforms.uCenter=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"radius",{get:function(){return this.uniforms.uRadius},set:function(t){(t<0||t===1/0)&&(t=-1),this.uniforms.uRadius=t},enumerable:!1,configurable:!0}),e})(k);/*!
 * @pixi/filter-reflection - v4.2.0
 * Compiled Fri, 05 Aug 2022 19:53:35 UTC
 *
 * @pixi/filter-reflection is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var yd=function(r,e){return yd=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])},yd(r,e)};function _6(r,e){yd(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var g6=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,b6=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;

uniform vec4 filterArea;
uniform vec4 filterClamp;
uniform vec2 dimensions;

uniform bool mirror;
uniform float boundary;
uniform vec2 amplitude;
uniform vec2 waveLength;
uniform vec2 alpha;
uniform float time;

float rand(vec2 co) {
    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

void main(void)
{
    vec2 pixelCoord = vTextureCoord.xy * filterArea.xy;
    vec2 coord = pixelCoord / dimensions;

    if (coord.y < boundary) {
        gl_FragColor = texture2D(uSampler, vTextureCoord);
        return;
    }

    float k = (coord.y - boundary) / (1. - boundary + 0.0001);
    float areaY = boundary * dimensions.y / filterArea.y;
    float v = areaY + areaY - vTextureCoord.y;
    float y = mirror ? v : vTextureCoord.y;

    float _amplitude = ((amplitude.y - amplitude.x) * k + amplitude.x ) / filterArea.x;
    float _waveLength = ((waveLength.y - waveLength.x) * k + waveLength.x) / filterArea.y;
    float _alpha = (alpha.y - alpha.x) * k + alpha.x;

    float x = vTextureCoord.x + cos(v * 6.28 / _waveLength - time) * _amplitude;
    x = clamp(x, filterClamp.x, filterClamp.z);

    vec4 color = texture2D(uSampler, vec2(x, y));

    gl_FragColor = color * _alpha;
}
`;(function(r){_6(e,r);function e(t){var n=r.call(this,g6,b6)||this;return n.time=0,n.uniforms.amplitude=new Float32Array(2),n.uniforms.waveLength=new Float32Array(2),n.uniforms.alpha=new Float32Array(2),n.uniforms.dimensions=new Float32Array(2),Object.assign(n,e.defaults,t),n}return e.prototype.apply=function(t,n,i,o){var a,s;this.uniforms.dimensions[0]=(a=n.filterFrame)===null||a===void 0?void 0:a.width,this.uniforms.dimensions[1]=(s=n.filterFrame)===null||s===void 0?void 0:s.height,this.uniforms.time=this.time,t.applyFilter(this,n,i,o)},Object.defineProperty(e.prototype,"mirror",{get:function(){return this.uniforms.mirror},set:function(t){this.uniforms.mirror=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"boundary",{get:function(){return this.uniforms.boundary},set:function(t){this.uniforms.boundary=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"amplitude",{get:function(){return this.uniforms.amplitude},set:function(t){this.uniforms.amplitude[0]=t[0],this.uniforms.amplitude[1]=t[1]},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"waveLength",{get:function(){return this.uniforms.waveLength},set:function(t){this.uniforms.waveLength[0]=t[0],this.uniforms.waveLength[1]=t[1]},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"alpha",{get:function(){return this.uniforms.alpha},set:function(t){this.uniforms.alpha[0]=t[0],this.uniforms.alpha[1]=t[1]},enumerable:!1,configurable:!0}),e.defaults={mirror:!0,boundary:.5,amplitude:[0,20],waveLength:[30,100],alpha:[1,1],time:0},e})(k);/*!
 * @pixi/filter-rgb-split - v4.2.0
 * Compiled Fri, 05 Aug 2022 19:53:35 UTC
 *
 * @pixi/filter-rgb-split is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var md=function(r,e){return md=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])},md(r,e)};function x6(r,e){md(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var T6=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,S6=`precision mediump float;

varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform vec4 filterArea;
uniform vec2 red;
uniform vec2 green;
uniform vec2 blue;

void main(void)
{
   gl_FragColor.r = texture2D(uSampler, vTextureCoord + red/filterArea.xy).r;
   gl_FragColor.g = texture2D(uSampler, vTextureCoord + green/filterArea.xy).g;
   gl_FragColor.b = texture2D(uSampler, vTextureCoord + blue/filterArea.xy).b;
   gl_FragColor.a = texture2D(uSampler, vTextureCoord).a;
}
`;(function(r){x6(e,r);function e(t,n,i){t===void 0&&(t=[-10,0]),n===void 0&&(n=[0,10]),i===void 0&&(i=[0,0]);var o=r.call(this,T6,S6)||this;return o.red=t,o.green=n,o.blue=i,o}return Object.defineProperty(e.prototype,"red",{get:function(){return this.uniforms.red},set:function(t){this.uniforms.red=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"green",{get:function(){return this.uniforms.green},set:function(t){this.uniforms.green=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"blue",{get:function(){return this.uniforms.blue},set:function(t){this.uniforms.blue=t},enumerable:!1,configurable:!0}),e})(k);/*!
 * @pixi/filter-shockwave - v4.2.0
 * Compiled Fri, 05 Aug 2022 19:53:35 UTC
 *
 * @pixi/filter-shockwave is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var _d=function(r,e){return _d=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])},_d(r,e)};function E6(r,e){_d(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var w6=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,O6=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform vec4 filterArea;
uniform vec4 filterClamp;

uniform vec2 center;

uniform float amplitude;
uniform float wavelength;
// uniform float power;
uniform float brightness;
uniform float speed;
uniform float radius;

uniform float time;

const float PI = 3.14159;

void main()
{
    float halfWavelength = wavelength * 0.5 / filterArea.x;
    float maxRadius = radius / filterArea.x;
    float currentRadius = time * speed / filterArea.x;

    float fade = 1.0;

    if (maxRadius > 0.0) {
        if (currentRadius > maxRadius) {
            gl_FragColor = texture2D(uSampler, vTextureCoord);
            return;
        }
        fade = 1.0 - pow(currentRadius / maxRadius, 2.0);
    }

    vec2 dir = vec2(vTextureCoord - center / filterArea.xy);
    dir.y *= filterArea.y / filterArea.x;
    float dist = length(dir);

    if (dist <= 0.0 || dist < currentRadius - halfWavelength || dist > currentRadius + halfWavelength) {
        gl_FragColor = texture2D(uSampler, vTextureCoord);
        return;
    }

    vec2 diffUV = normalize(dir);

    float diff = (dist - currentRadius) / halfWavelength;

    float p = 1.0 - pow(abs(diff), 2.0);

    // float powDiff = diff * pow(p, 2.0) * ( amplitude * fade );
    float powDiff = 1.25 * sin(diff * PI) * p * ( amplitude * fade );

    vec2 offset = diffUV * powDiff / filterArea.xy;

    // Do clamp :
    vec2 coord = vTextureCoord + offset;
    vec2 clampedCoord = clamp(coord, filterClamp.xy, filterClamp.zw);
    vec4 color = texture2D(uSampler, clampedCoord);
    if (coord != clampedCoord) {
        color *= max(0.0, 1.0 - length(coord - clampedCoord));
    }

    // No clamp :
    // gl_FragColor = texture2D(uSampler, vTextureCoord + offset);

    color.rgb *= 1.0 + (brightness - 1.0) * p * fade;

    gl_FragColor = color;
}
`;(function(r){E6(e,r);function e(t,n,i){t===void 0&&(t=[0,0]),i===void 0&&(i=0);var o=r.call(this,w6,O6)||this;return o.center=t,Object.assign(o,e.defaults,n),o.time=i,o}return e.prototype.apply=function(t,n,i,o){this.uniforms.time=this.time,t.applyFilter(this,n,i,o)},Object.defineProperty(e.prototype,"center",{get:function(){return this.uniforms.center},set:function(t){this.uniforms.center=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"amplitude",{get:function(){return this.uniforms.amplitude},set:function(t){this.uniforms.amplitude=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"wavelength",{get:function(){return this.uniforms.wavelength},set:function(t){this.uniforms.wavelength=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"brightness",{get:function(){return this.uniforms.brightness},set:function(t){this.uniforms.brightness=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"speed",{get:function(){return this.uniforms.speed},set:function(t){this.uniforms.speed=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"radius",{get:function(){return this.uniforms.radius},set:function(t){this.uniforms.radius=t},enumerable:!1,configurable:!0}),e.defaults={amplitude:30,wavelength:160,brightness:1,speed:500,radius:-1},e})(k);/*!
 * @pixi/filter-simple-lightmap - v4.2.0
 * Compiled Fri, 05 Aug 2022 19:53:35 UTC
 *
 * @pixi/filter-simple-lightmap is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var gd=function(r,e){return gd=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])},gd(r,e)};function P6(r,e){gd(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var A6=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,C6=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform sampler2D uLightmap;
uniform vec4 filterArea;
uniform vec2 dimensions;
uniform vec4 ambientColor;
void main() {
    vec4 diffuseColor = texture2D(uSampler, vTextureCoord);
    vec2 lightCoord = (vTextureCoord * filterArea.xy) / dimensions;
    vec4 light = texture2D(uLightmap, lightCoord);
    vec3 ambient = ambientColor.rgb * ambientColor.a;
    vec3 intensity = ambient + light.rgb;
    vec3 finalColor = diffuseColor.rgb * intensity;
    gl_FragColor = vec4(finalColor, diffuseColor.a);
}
`;(function(r){P6(e,r);function e(t,n,i){n===void 0&&(n=0),i===void 0&&(i=1);var o=r.call(this,A6,C6)||this;return o._color=0,o.uniforms.dimensions=new Float32Array(2),o.uniforms.ambientColor=new Float32Array([0,0,0,i]),o.texture=t,o.color=n,o}return e.prototype.apply=function(t,n,i,o){var a,s;this.uniforms.dimensions[0]=(a=n.filterFrame)===null||a===void 0?void 0:a.width,this.uniforms.dimensions[1]=(s=n.filterFrame)===null||s===void 0?void 0:s.height,t.applyFilter(this,n,i,o)},Object.defineProperty(e.prototype,"texture",{get:function(){return this.uniforms.uLightmap},set:function(t){this.uniforms.uLightmap=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"color",{get:function(){return this._color},set:function(t){var n=this.uniforms.ambientColor;typeof t=="number"?(Bt(t,n),this._color=t):(n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[3],this._color=ve(n))},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"alpha",{get:function(){return this.uniforms.ambientColor[3]},set:function(t){this.uniforms.ambientColor[3]=t},enumerable:!1,configurable:!0}),e})(k);/*!
 * @pixi/filter-tilt-shift - v4.2.0
 * Compiled Fri, 05 Aug 2022 19:53:35 UTC
 *
 * @pixi/filter-tilt-shift is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var bd=function(r,e){return bd=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])},bd(r,e)};function Xu(r,e){bd(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var R6=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,I6=`varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform float blur;
uniform float gradientBlur;
uniform vec2 start;
uniform vec2 end;
uniform vec2 delta;
uniform vec2 texSize;

float random(vec3 scale, float seed)
{
    return fract(sin(dot(gl_FragCoord.xyz + seed, scale)) * 43758.5453 + seed);
}

void main(void)
{
    vec4 color = vec4(0.0);
    float total = 0.0;

    float offset = random(vec3(12.9898, 78.233, 151.7182), 0.0);
    vec2 normal = normalize(vec2(start.y - end.y, end.x - start.x));
    float radius = smoothstep(0.0, 1.0, abs(dot(vTextureCoord * texSize - start, normal)) / gradientBlur) * blur;

    for (float t = -30.0; t <= 30.0; t++)
    {
        float percent = (t + offset - 0.5) / 30.0;
        float weight = 1.0 - abs(percent);
        vec4 sample = texture2D(uSampler, vTextureCoord + delta / texSize * percent * radius);
        sample.rgb *= sample.a;
        color += sample * weight;
        total += weight;
    }

    color /= total;
    color.rgb /= color.a + 0.00001;

    gl_FragColor = color;
}
`,xS=function(r){Xu(e,r);function e(t,n,i,o){t===void 0&&(t=100),n===void 0&&(n=600);var a=r.call(this,R6,I6)||this;return a.uniforms.blur=t,a.uniforms.gradientBlur=n,a.uniforms.start=i||new X(0,window.innerHeight/2),a.uniforms.end=o||new X(600,window.innerHeight/2),a.uniforms.delta=new X(30,30),a.uniforms.texSize=new X(window.innerWidth,window.innerHeight),a.updateDelta(),a}return e.prototype.updateDelta=function(){this.uniforms.delta.x=0,this.uniforms.delta.y=0},Object.defineProperty(e.prototype,"blur",{get:function(){return this.uniforms.blur},set:function(t){this.uniforms.blur=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"gradientBlur",{get:function(){return this.uniforms.gradientBlur},set:function(t){this.uniforms.gradientBlur=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"start",{get:function(){return this.uniforms.start},set:function(t){this.uniforms.start=t,this.updateDelta()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"end",{get:function(){return this.uniforms.end},set:function(t){this.uniforms.end=t,this.updateDelta()},enumerable:!1,configurable:!0}),e}(k),M6=function(r){Xu(e,r);function e(){return r!==null&&r.apply(this,arguments)||this}return e.prototype.updateDelta=function(){var t=this.uniforms.end.x-this.uniforms.start.x,n=this.uniforms.end.y-this.uniforms.start.y,i=Math.sqrt(t*t+n*n);this.uniforms.delta.x=t/i,this.uniforms.delta.y=n/i},e}(xS),D6=function(r){Xu(e,r);function e(){return r!==null&&r.apply(this,arguments)||this}return e.prototype.updateDelta=function(){var t=this.uniforms.end.x-this.uniforms.start.x,n=this.uniforms.end.y-this.uniforms.start.y,i=Math.sqrt(t*t+n*n);this.uniforms.delta.x=-n/i,this.uniforms.delta.y=t/i},e}(xS);(function(r){Xu(e,r);function e(t,n,i,o){t===void 0&&(t=100),n===void 0&&(n=600);var a=r.call(this)||this;return a.tiltShiftXFilter=new M6(t,n,i,o),a.tiltShiftYFilter=new D6(t,n,i,o),a}return e.prototype.apply=function(t,n,i,o){var a=t.getFilterTexture();this.tiltShiftXFilter.apply(t,n,a,1),this.tiltShiftYFilter.apply(t,a,i,o),t.returnFilterTexture(a)},Object.defineProperty(e.prototype,"blur",{get:function(){return this.tiltShiftXFilter.blur},set:function(t){this.tiltShiftXFilter.blur=this.tiltShiftYFilter.blur=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"gradientBlur",{get:function(){return this.tiltShiftXFilter.gradientBlur},set:function(t){this.tiltShiftXFilter.gradientBlur=this.tiltShiftYFilter.gradientBlur=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"start",{get:function(){return this.tiltShiftXFilter.start},set:function(t){this.tiltShiftXFilter.start=this.tiltShiftYFilter.start=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"end",{get:function(){return this.tiltShiftXFilter.end},set:function(t){this.tiltShiftXFilter.end=this.tiltShiftYFilter.end=t},enumerable:!1,configurable:!0}),e})(k);/*!
 * @pixi/filter-twist - v4.2.0
 * Compiled Fri, 05 Aug 2022 19:53:35 UTC
 *
 * @pixi/filter-twist is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var xd=function(r,e){return xd=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])},xd(r,e)};function F6(r,e){xd(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var N6=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,L6=`varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform float radius;
uniform float angle;
uniform vec2 offset;
uniform vec4 filterArea;

vec2 mapCoord( vec2 coord )
{
    coord *= filterArea.xy;
    coord += filterArea.zw;

    return coord;
}

vec2 unmapCoord( vec2 coord )
{
    coord -= filterArea.zw;
    coord /= filterArea.xy;

    return coord;
}

vec2 twist(vec2 coord)
{
    coord -= offset;

    float dist = length(coord);

    if (dist < radius)
    {
        float ratioDist = (radius - dist) / radius;
        float angleMod = ratioDist * ratioDist * angle;
        float s = sin(angleMod);
        float c = cos(angleMod);
        coord = vec2(coord.x * c - coord.y * s, coord.x * s + coord.y * c);
    }

    coord += offset;

    return coord;
}

void main(void)
{

    vec2 coord = mapCoord(vTextureCoord);

    coord = twist(coord);

    coord = unmapCoord(coord);

    gl_FragColor = texture2D(uSampler, coord );

}
`;(function(r){F6(e,r);function e(t){var n=r.call(this,N6,L6)||this;return Object.assign(n,e.defaults,t),n}return Object.defineProperty(e.prototype,"offset",{get:function(){return this.uniforms.offset},set:function(t){this.uniforms.offset=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"radius",{get:function(){return this.uniforms.radius},set:function(t){this.uniforms.radius=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"angle",{get:function(){return this.uniforms.angle},set:function(t){this.uniforms.angle=t},enumerable:!1,configurable:!0}),e.defaults={radius:200,angle:4,padding:20,offset:new X},e})(k);/*!
 * @pixi/filter-zoom-blur - v4.2.0
 * Compiled Fri, 05 Aug 2022 19:53:35 UTC
 *
 * @pixi/filter-zoom-blur is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Td=function(r,e){return Td=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])},Td(r,e)};function B6(r,e){Td(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}function U6(r,e){var t={};for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&e.indexOf(n)<0&&(t[n]=r[n]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(r);i<n.length;i++)e.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(r,n[i])&&(t[n[i]]=r[n[i]]);return t}var G6=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,j6=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform vec4 filterArea;

uniform vec2 uCenter;
uniform float uStrength;
uniform float uInnerRadius;
uniform float uRadius;

const float MAX_KERNEL_SIZE = \${maxKernelSize};

// author: http://byteblacksmith.com/improvements-to-the-canonical-one-liner-glsl-rand-for-opengl-es-2-0/
highp float rand(vec2 co, float seed) {
    const highp float a = 12.9898, b = 78.233, c = 43758.5453;
    highp float dt = dot(co + seed, vec2(a, b)), sn = mod(dt, 3.14159);
    return fract(sin(sn) * c + seed);
}

void main() {

    float minGradient = uInnerRadius * 0.3;
    float innerRadius = (uInnerRadius + minGradient * 0.5) / filterArea.x;

    float gradient = uRadius * 0.3;
    float radius = (uRadius - gradient * 0.5) / filterArea.x;

    float countLimit = MAX_KERNEL_SIZE;

    vec2 dir = vec2(uCenter.xy / filterArea.xy - vTextureCoord);
    float dist = length(vec2(dir.x, dir.y * filterArea.y / filterArea.x));

    float strength = uStrength;

    float delta = 0.0;
    float gap;
    if (dist < innerRadius) {
        delta = innerRadius - dist;
        gap = minGradient;
    } else if (radius >= 0.0 && dist > radius) { // radius < 0 means it's infinity
        delta = dist - radius;
        gap = gradient;
    }

    if (delta > 0.0) {
        float normalCount = gap / filterArea.x;
        delta = (normalCount - delta) / normalCount;
        countLimit *= delta;
        strength *= delta;
        if (countLimit < 1.0)
        {
            gl_FragColor = texture2D(uSampler, vTextureCoord);
            return;
        }
    }

    // randomize the lookup values to hide the fixed number of samples
    float offset = rand(vTextureCoord, 0.0);

    float total = 0.0;
    vec4 color = vec4(0.0);

    dir *= strength;

    for (float t = 0.0; t < MAX_KERNEL_SIZE; t++) {
        float percent = (t + offset) / MAX_KERNEL_SIZE;
        float weight = 4.0 * (percent - percent * percent);
        vec2 p = vTextureCoord + dir * percent;
        vec4 sample = texture2D(uSampler, p);

        // switch to pre-multiplied alpha to correctly blur transparent images
        // sample.rgb *= sample.a;

        color += sample * weight;
        total += weight;

        if (t > countLimit){
            break;
        }
    }

    color /= total;
    // switch back from pre-multiplied alpha
    // color.rgb /= color.a + 0.00001;

    gl_FragColor = color;
}
`;(function(r){B6(e,r);function e(t){var n=this,i=Object.assign(e.defaults,t),o=i.maxKernelSize,a=U6(i,["maxKernelSize"]);return n=r.call(this,G6,j6.replace("${maxKernelSize}",o.toFixed(1)))||this,Object.assign(n,a),n}return Object.defineProperty(e.prototype,"center",{get:function(){return this.uniforms.uCenter},set:function(t){this.uniforms.uCenter=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"strength",{get:function(){return this.uniforms.uStrength},set:function(t){this.uniforms.uStrength=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"innerRadius",{get:function(){return this.uniforms.uInnerRadius},set:function(t){this.uniforms.uInnerRadius=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"radius",{get:function(){return this.uniforms.uRadius},set:function(t){(t<0||t===1/0)&&(t=-1),this.uniforms.uRadius=t},enumerable:!1,configurable:!0}),e.defaults={strength:.1,center:[0,0],innerRadius:0,radius:-1,maxKernelSize:32},e})(k);const{random:qt,PI:Kf,sin:Sg,cos:Eg,abs:k6}=Math,ke={NORMAL:"normal",ESCAPE:"escape",AGGRESSIVE:"aggressive",ERRATIC:"erratic"};class ki{constructor(e,t={}){this.sprite=Jt.from(`fish.${e}.png`),this.sprite.anchor.set(.5),this.type=e,this.size=t.size||.5,this.sprite.scale.set(this.size),this.maxHealth=t.health||1,this.health=this.maxHealth,this.baseSpeed=t.speed||(1+qt())*2,this.speed=this.baseSpeed,this.direction=t.direction||qt()*Kt,this.targetDirection=this.direction,this.turnSpeed=t.turnSpeed||qt()-.8,this.rotationSpeed=.01,this.forcedRotationSpeed=.08,this.behavior=t.behavior||ke.NORMAL,this.hit=!1,this.hitEffect=0,this.isDead=!1,this.isDeathAnimating=!1,this.deathAnimProgress=0,this.pixelateFilter=new p6,this.pixelateFilter.size=1;const n=t.x||qt()*ne.width,i=t.y||qt()*ne.height;this.sprite.position.set(n,i)}update(e,t){if(this.isDeathAnimating){this.updateDeathAnimation();return}this.isDead||(this.hit&&(this.hitEffect+=1,this.sprite.alpha=this.hitEffect%10<5?.5:1,this.handleHitBehavior(),this.hitEffect>30&&(this.hit=!1,this.hitEffect=0,this.sprite.alpha=1,this.behavior===ke.ESCAPE&&(this.speed=this.baseSpeed))),this.smoothRotation(),this.sprite.x-=Eg(this.direction)*this.speed,this.sprite.y-=Sg(this.direction)*this.speed,t&&(this.sprite.x<t.left?this.sprite.x=t.right:this.sprite.x>t.right&&(this.sprite.x=t.left),this.sprite.y<t.top?this.sprite.y=t.bottom:this.sprite.y>t.bottom&&(this.sprite.y=t.top)))}smoothRotation(){if(this.direction===this.targetDirection){this.direction+=this.turnSpeed*this.rotationSpeed,this.direction%=Kt,this.sprite.rotation=this.direction;return}let e=this.targetDirection-this.direction;e>Kf&&(e-=Kt),e<-Kf&&(e+=Kt);const t=e>0?Math.min(this.forcedRotationSpeed,e):Math.max(-this.forcedRotationSpeed,e);this.direction+=t,this.direction%=Kt,this.sprite.rotation=this.direction,k6(e)<this.forcedRotationSpeed&&(this.direction=this.targetDirection)}handleHitBehavior(){switch(this.behavior){case ke.ESCAPE:this.speed=this.baseSpeed*2;break;case ke.AGGRESSIVE:this.hitEffect===1&&(this.targetDirection=(this.direction+Kf)%Kt);break;case ke.ERRATIC:this.hitEffect===1&&(this.targetDirection=qt()*Kt,this.turnSpeed=(qt()-.5)*2);break}}takeDamage(e=1){return this.isDead?!0:(this.health-=e,this.hit=!0,this.hitEffect=0,this.health<=0?(this.isDead=!0,this.startDeathAnimation(),!0):!1)}startDeathAnimation(){this.isDeathAnimating=!0,this.deathAnimProgress=0,this.sprite.filters=[this.pixelateFilter],this.createDeathParticles()}createDeathParticles(){this.particles=[],this.particleContainer=new $t,this.particleContainer.position.set(this.sprite.x,this.sprite.y);const e=this.sprite.texture,t=Math.floor(20*this.size);for(let n=0;n<t;n++){const i=new Jt(e);i.anchor.set(.5),i.scale.set(this.size*.2);const o=qt()*Kt,a=qt()*this.sprite.width*.2;i.x=Eg(o)*a,i.y=Sg(o)*a,i.vx=(qt()-.5)*2,i.vy=(qt()-.5)*2,i.rotation=qt()*Kt,i.rotationSpeed=(qt()-.5)*.2,i.alpha=1,i.fadeSpeed=.01+qt()*.03,this.particles.push(i),this.particleContainer.addChild(i)}this.sprite.parent&&this.sprite.parent.addChild(this.particleContainer)}updateDeathAnimation(){if(this.deathAnimProgress+=.02,this.pixelateFilter.size=Math.pow(1+this.deathAnimProgress*5,2),this.sprite.alpha=Math.max(0,1-this.deathAnimProgress),this.particles)for(const e of this.particles)e.x+=e.vx,e.y+=e.vy,e.rotation+=e.rotationSpeed,e.alpha-=e.fadeSpeed,e.scale.x*=.97,e.scale.y*=.97;this.deathAnimProgress>=1&&(this.isDeathAnimating=!1,this.sprite.alpha=0,this.particleContainer&&this.particleContainer.parent&&this.particleContainer.parent.removeChild(this.particleContainer),this.onDeathAnimationComplete())}onDeathAnimationComplete(){}getBounds(){return this.sprite.getBounds()}getScore(){return Math.round(this.size*10*this.maxHealth)}}let ie,Te=[],Ue;const $6=ne.clone().pad(100),{max:z6,random:Ja}=Math;function H6(){ie=new $t;const r=Jt.from("bkg.jpg");r.zIndex=-1,r.scale.set(z6(ne.width/r.width,ne.height/r.height));const e=Px.from("overlay.png",{width:ne.width,height:ne.height});e.zIndex=1,X6();const t=Te.map(n=>n.sprite);ie.addChild(e,r,...t),Ue=new q8(null),Ue.initBattery(ie),Y6(),qs.add(n=>{Ue.updateBullets(n,ie),W6(),V6(n),e.tilePosition.x-=1,e.tilePosition.y-=1,e.tilePosition.x%=512,e.tilePosition.y%=512})}function X6(){Te=[];for(let r=0;r<8;r++){const e=(r%4+1).toString(),t=new ki(e,{size:.5,health:1,behavior:ke.NORMAL});$i(t),Te.push(t)}for(let r=0;r<4;r++){const e=(r%4+1).toString(),t=new ki(e,{size:.4,health:1,speed:3,behavior:ke.ESCAPE});$i(t),Te.push(t)}for(let r=0;r<2;r++){const e=(r%4+1).toString(),t=new ki(e,{size:.7,health:2,behavior:ke.AGGRESSIVE});$i(t),Te.push(t)}for(let r=0;r<2;r++){const e=(r%4+1).toString(),t=new ki(e,{size:.6,health:1,behavior:ke.ERRATIC});$i(t),Te.push(t)}}function $i(r){r.onDeathAnimationComplete=function(){const e=Te.indexOf(r);if(e!==-1){r.particleContainer&&r.particleContainer.parent&&r.particleContainer.parent.removeChild(r.particleContainer),r.sprite.parent&&r.sprite.parent.removeChild(r.sprite);const t=(Math.floor(Ja()*4)+1).toString(),n=Object.values(ke),i=n[Math.floor(Ja()*n.length)],o=new ki(t,{size:.4+Ja()*.3,health:Math.ceil(Ja()*2),behavior:i});$i(o),ie.addChild(o.sprite),Te[e]=o,console.log(`鱼被击杀并替换，新鱼类型: ${t}, 习性: ${i}`)}}}function V6(r){for(let e=Te.length-1;e>=0;e--)Te[e].update(r,$6)}function W6(){if(!(!Ue||!Ue.bullets))for(let r=Ue.bullets.length-1;r>=0;r--){const e=Ue.bullets[r];for(const t of Te){if(t.hit||t.isDeathAnimating||t.isDead)continue;const n=e.getBounds(),i=t.getBounds();if(n.x<i.x+i.width&&n.x+n.width>i.x&&n.y<i.y+i.height&&n.y+n.height>i.y){console.log("碰撞检测：子弹与鱼"),Ue.showExplosion(e.x,e.y,ie),t.takeDamage(1)&&console.log(`鱼被击杀，获得分数: ${t.getScore()}`),ie.removeChild(e),Ue.bullets.splice(r,1);break}}}}function Y6(){try{console.log("设置微信触摸事件"),wx.onTouchStart(r=>{const e=r.touches[0];console.log("触摸开始:",e.clientX,e.clientY),Ue.shootBullet(e.clientX,e.clientY,ie)})}catch(r){console.error("设置触摸/点击事件出错:",r)}}function q6(){ie||H6(),Hu.addChild(ie),ie.alpha=0,fs({from:0,to:1,duration:1e3,onUpdate:r=>ie.alpha=r})}function K6(){Hu.removeChild(ie)}const Z6=Object.freeze(Object.defineProperty({__proto__:null,hide:K6,show:q6},Symbol.toStringTag,{value:"Module"}));wx.getFileSystemManager();function J6(r=0,e){return new Promise(t=>{setTimeout(t,r*1e3)})}let Qa,wg;function Q6(r,e){r!==wg&&(Qa&&Qa.hide(),Qa=OS[r],wg=r,Qa.show(e))}class tH extends ai{constructor(t){super();Ei(this,"alignItem");Ei(this,"areas");Ei(this,"gap");Ei(this,"anchor");this.alignItem=t.alignItem??"center",this.areas=t.areas,this.gap=t.gap??0,this.anchor=t.anchor??{x:.5,y:.5};let n=0,i=0;const o=[];for(const a of t.areas){let s=0,u=0;for(const l of a)s+=l.w+this.gap,l.h>u&&(u=l.h);s-=this.gap,i+=u+this.gap,o.push({w:s,h:u}),s>n&&(n=s)}i-=this.gap;for(let a=0,s=0;a<t.areas.length;a++){const u=t.areas[a];let l=0;for(const f of u)f.x=l+(f.w-o[a].w+n)/2,f.y=s+o[a].h/2,l+=f.w+this.gap;s+=o[a].h+this.gap}if(this.beginFill(16763955,t.debug?.3:0),this.drawRect(0,0,n,i),this.endFill(),this.anchor){const{x:a,y:s}=this.anchor;this.pivot.set(n*a,i*s)}}addChild(...t){super.addChild(...t);let n=0;for(const i of this.areas)for(const o of i){const a=this.children[n++];a&&a.position.copyFrom(o)}return t[0]}}let gs,ro=[];async function eH(){gs=new $t;const r=new tH({alignItem:"center",areas:[[{w:735*.3,h:409*.3}]],anchor:{x:.5,y:.5}}),e=new $t,t=Jt.from("dl-logo.png");t.scale.set(2),t.anchor.set(.5,.5),e.addChild(t);const n="游戏工作室",i=new Ar({fontFamily:"YouYuan, Microsoft YaHei, PingFang SC, sans-serif",fontSize:70,fontWeight:"bold",fill:["#4FC3F7","#03A9F4","#0288D1"],fillGradientType:1,fillGradientStops:[0,.5,1],stroke:"#01579B",strokeThickness:4,dropShadow:!0,dropShadowColor:"#000033",dropShadowBlur:4,dropShadowAngle:Math.PI/6,dropShadowDistance:4,letterSpacing:4,lineJoin:"round"}),o=[];let a=t.width+230;for(let s=0;s<n.length;s++){const u=new bu(n[s],i);u.anchor.set(0,.5),u.position.x=a,u.alpha=0,a+=u.width+6,o.push(u),e.addChild(u)}e.pivot.x=a/2,r.addChild(e),r.scale.set(Le.screen.dr),r.position.set(ne.width/2,ne.height/2),gs.addChild(r),Hu.addChild(gs),ro.push(fs({from:1,to:.2,ease:us,duration:2e3,repeat:1/0,repeatType:"mirror",onUpdate:s=>t.alpha=s})),o.forEach((s,u)=>{setTimeout(()=>{ro.push(fs({from:{y:-20,alpha:0},to:{y:0,alpha:1},duration:400,ease:us,onUpdate:l=>{s.position.y=l.y,s.alpha=l.alpha},onComplete:()=>{ro.push(fs({from:0,to:1,duration:1800,ease:us,repeat:1/0,repeatType:"mirror",onUpdate:l=>{s.position.y=Math.sin(l*Math.PI)*5}}))}}))},250*u)}),await new Promise(s=>{W8.add("misc.json").load(s)}),await Promise.all([J6(3)])}async function TS(){await eH()}function SS(){ro.forEach(r=>r.stop()),ro=[],gs.destroy({children:!0})}const rH=Object.freeze(Object.defineProperty({__proto__:null,hide:SS,show:TS},Symbol.toStringTag,{value:"Module"}));wx.onShow(yr(({query:r})=>{Le.visible=!0}));wx.onHide(yr(()=>Le.visible=!1));TS().then(()=>{SS(),Q6("game")}).catch(r=>{console.log(r),wx.showModal({title:"出错啦",confirmText:"退出",showCancel:!1,success:()=>wx.exitMiniProgram()})});wx.showShareMenu({menus:["shareAppMessage","shareTimeline"]});const Og=wx.getUpdateManager();Og.onUpdateReady(function(){wx.showModal({title:"更新提示",content:"新版本已经准备好，是否重启应用？",success(r){r.confirm&&Og.applyUpdate()}})});
