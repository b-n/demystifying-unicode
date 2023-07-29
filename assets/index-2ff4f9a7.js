(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function Vn(e,t){const n=Object.create(null),s=e.split(",");for(let r=0;r<s.length;r++)n[s[r]]=!0;return t?r=>!!n[r.toLowerCase()]:r=>!!n[r]}const Le=Object.freeze({}),Us=Object.freeze([]),bt=()=>{},xd=()=>!1,Xh=/^on[^a-z]/,zo=e=>Xh.test(e),$r=e=>e.startsWith("onUpdate:"),qe=Object.assign,ta=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},em=Object.prototype.hasOwnProperty,Se=(e,t)=>em.call(e,t),ie=Array.isArray,ps=e=>Ko(e)==="[object Map]",wd=e=>Ko(e)==="[object Set]",tm=e=>Ko(e)==="[object RegExp]",de=e=>typeof e=="function",je=e=>typeof e=="string",na=e=>typeof e=="symbol",Be=e=>e!==null&&typeof e=="object",sa=e=>Be(e)&&de(e.then)&&de(e.catch),kd=Object.prototype.toString,Ko=e=>kd.call(e),oa=e=>Ko(e).slice(8,-1),Ad=e=>Ko(e)==="[object Object]",ra=e=>je(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,br=Vn(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),nm=Vn("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"),ti=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},sm=/-(\w)/g,rn=ti(e=>e.replace(sm,(t,n)=>n?n.toUpperCase():"")),om=/\B([A-Z])/g,xn=ti(e=>e.replace(om,"-$1").toLowerCase()),bs=ti(e=>e.charAt(0).toUpperCase()+e.slice(1)),es=ti(e=>e?`on${bs(e)}`:""),Fo=(e,t)=>!Object.is(e,t),ns=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Br=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},rm=e=>{const t=parseFloat(e);return isNaN(t)?e:t},im=e=>{const t=je(e)?Number(e):NaN;return isNaN(t)?e:t};let nc;const Dr=()=>nc||(nc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Xe(e){if(ie(e)){const t={};for(let n=0;n<e.length;n++){const s=e[n],r=je(s)?um(s):Xe(s);if(r)for(const i in r)t[i]=r[i]}return t}else{if(je(e))return e;if(Be(e))return e}}const lm=/;(?![^(]*\))/g,am=/:([^]+)/,cm=/\/\*[^]*?\*\//g;function um(e){const t={};return e.replace(cm,"").split(lm).forEach(n=>{if(n){const s=n.split(am);s.length>1&&(t[s[0].trim()]=s[1].trim())}}),t}function Re(e){let t="";if(je(e))t=e;else if(ie(e))for(let n=0;n<e.length;n++){const s=Re(e[n]);s&&(t+=s+" ")}else if(Be(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}function le(e){if(!e)return null;let{class:t,style:n}=e;return t&&!je(t)&&(e.class=Re(t)),n&&(e.style=Xe(n)),e}const dm="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",pm="svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view",Sd=Vn(dm),fm=Vn(pm),hm="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",mm=Vn(hm);function Cd(e){return!!e||e===""}const wn=e=>je(e)?e:e==null?"":ie(e)||Be(e)&&(e.toString===kd||!de(e.toString))?JSON.stringify(e,Ed,2):String(e),Ed=(e,t)=>t&&t.__v_isRef?Ed(e,t.value):ps(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[s,r])=>(n[`${s} =>`]=r,n),{})}:wd(t)?{[`Set(${t.size})`]:[...t.values()]}:Be(t)&&!ie(t)&&!Ad(t)?String(t):t;function Or(e,...t){console.warn(`[Vue warn] ${e}`,...t)}let St;class Td{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=St,!t&&St&&(this.index=(St.scopes||(St.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=St;try{return St=this,t()}finally{St=n}}else Or("cannot run an inactive effect scope.")}on(){St=this}off(){St=this.parent}stop(t){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function ym(e){return new Td(e)}function gm(e,t=St){t&&t.active&&t.effects.push(e)}function ia(){return St}function Fd(e){St?St.cleanups.push(e):Or("onScopeDispose() is called when there is no active effect scope to be associated with.")}const la=e=>{const t=new Set(e);return t.w=0,t.n=0,t},$d=e=>(e.w&jn)>0,Bd=e=>(e.n&jn)>0,vm=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=jn},_m=e=>{const{deps:t}=e;if(t.length){let n=0;for(let s=0;s<t.length;s++){const r=t[s];$d(r)&&!Bd(r)?r.delete(e):t[n++]=r,r.w&=~jn,r.n&=~jn}t.length=n}},Ir=new WeakMap;let co=0,jn=1;const el=30;let ht;const fs=Symbol("iterate"),tl=Symbol("Map key iterate");class aa{constructor(t,n=null,s){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,gm(this,s)}run(){if(!this.active)return this.fn();let t=ht,n=In;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=ht,ht=this,In=!0,jn=1<<++co,co<=el?vm(this):sc(this),this.fn()}finally{co<=el&&_m(this),jn=1<<--co,ht=this.parent,In=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){ht===this?this.deferStop=!0:this.active&&(sc(this),this.onStop&&this.onStop(),this.active=!1)}}function sc(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let In=!0;const Dd=[];function ks(){Dd.push(In),In=!1}function As(){const e=Dd.pop();In=e===void 0?!0:e}function ct(e,t,n){if(In&&ht){let s=Ir.get(e);s||Ir.set(e,s=new Map);let r=s.get(n);r||s.set(n,r=la()),Od(r,{effect:ht,target:e,type:t,key:n})}}function Od(e,t){let n=!1;co<=el?Bd(e)||(e.n|=jn,n=!$d(e)):n=!e.has(ht),n&&(e.add(ht),ht.deps.push(e),ht.onTrack&&ht.onTrack(qe({effect:ht},t)))}function ln(e,t,n,s,r,i){const l=Ir.get(e);if(!l)return;let a=[];if(t==="clear")a=[...l.values()];else if(n==="length"&&ie(e)){const u=Number(s);l.forEach((d,p)=>{(p==="length"||p>=u)&&a.push(d)})}else switch(n!==void 0&&a.push(l.get(n)),t){case"add":ie(e)?ra(n)&&a.push(l.get("length")):(a.push(l.get(fs)),ps(e)&&a.push(l.get(tl)));break;case"delete":ie(e)||(a.push(l.get(fs)),ps(e)&&a.push(l.get(tl)));break;case"set":ps(e)&&a.push(l.get(fs));break}const c={target:e,type:t,key:n,newValue:s,oldValue:r,oldTarget:i};if(a.length===1)a[0]&&nl(a[0],c);else{const u=[];for(const d of a)d&&u.push(...d);nl(la(u),c)}}function nl(e,t){const n=ie(e)?e:[...e];for(const s of n)s.computed&&oc(s,t);for(const s of n)s.computed||oc(s,t)}function oc(e,t){(e!==ht||e.allowRecurse)&&(e.onTrigger&&e.onTrigger(qe({effect:e},t)),e.scheduler?e.scheduler():e.run())}function bm(e,t){var n;return(n=Ir.get(e))==null?void 0:n.get(t)}const xm=Vn("__proto__,__v_isRef,__isVue"),Id=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(na)),wm=ni(),km=ni(!1,!0),Am=ni(!0),Sm=ni(!0,!0),rc=Cm();function Cm(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const s=he(this);for(let i=0,l=this.length;i<l;i++)ct(s,"get",i+"");const r=s[t](...n);return r===-1||r===!1?s[t](...n.map(he)):r}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){ks();const s=he(this)[t].apply(this,n);return As(),s}}),e}function Em(e){const t=he(this);return ct(t,"has",e),t.hasOwnProperty(e)}function ni(e=!1,t=!1){return function(s,r,i){if(r==="__v_isReactive")return!e;if(r==="__v_isReadonly")return e;if(r==="__v_isShallow")return t;if(r==="__v_raw"&&i===(e?t?jd:qd:t?Nd:Rd).get(s))return s;const l=ie(s);if(!e){if(l&&Se(rc,r))return Reflect.get(rc,r,i);if(r==="hasOwnProperty")return Em}const a=Reflect.get(s,r,i);return(na(r)?Id.has(r):xm(r))||(e||ct(s,"get",r),t)?a:$e(a)?l&&ra(r)?a:a.value:Be(a)?e?Vt(a):We(a):a}}const Tm=Pd(),Fm=Pd(!0);function Pd(e=!1){return function(n,s,r,i){let l=n[s];if(Wn(l)&&$e(l)&&!$e(r))return!1;if(!e&&(!Pr(r)&&!Wn(r)&&(l=he(l),r=he(r)),!ie(n)&&$e(l)&&!$e(r)))return l.value=r,!0;const a=ie(n)&&ra(s)?Number(s)<n.length:Se(n,s),c=Reflect.set(n,s,r,i);return n===he(i)&&(a?Fo(r,l)&&ln(n,"set",s,r,l):ln(n,"add",s,r)),c}}function $m(e,t){const n=Se(e,t),s=e[t],r=Reflect.deleteProperty(e,t);return r&&n&&ln(e,"delete",t,void 0,s),r}function Bm(e,t){const n=Reflect.has(e,t);return(!na(t)||!Id.has(t))&&ct(e,"has",t),n}function Dm(e){return ct(e,"iterate",ie(e)?"length":fs),Reflect.ownKeys(e)}const Ud={get:wm,set:Tm,deleteProperty:$m,has:Bm,ownKeys:Dm},Md={get:Am,set(e,t){return Or(`Set operation on key "${String(t)}" failed: target is readonly.`,e),!0},deleteProperty(e,t){return Or(`Delete operation on key "${String(t)}" failed: target is readonly.`,e),!0}},Om=qe({},Ud,{get:km,set:Fm}),Im=qe({},Md,{get:Sm}),ca=e=>e,si=e=>Reflect.getPrototypeOf(e);function nr(e,t,n=!1,s=!1){e=e.__v_raw;const r=he(e),i=he(t);n||(t!==i&&ct(r,"get",t),ct(r,"get",i));const{has:l}=si(r),a=s?ca:n?ua:$o;if(l.call(r,t))return a(e.get(t));if(l.call(r,i))return a(e.get(i));e!==r&&e.get(t)}function sr(e,t=!1){const n=this.__v_raw,s=he(n),r=he(e);return t||(e!==r&&ct(s,"has",e),ct(s,"has",r)),e===r?n.has(e):n.has(e)||n.has(r)}function or(e,t=!1){return e=e.__v_raw,!t&&ct(he(e),"iterate",fs),Reflect.get(e,"size",e)}function ic(e){e=he(e);const t=he(this);return si(t).has.call(t,e)||(t.add(e),ln(t,"add",e,e)),this}function lc(e,t){t=he(t);const n=he(this),{has:s,get:r}=si(n);let i=s.call(n,e);i?Ld(n,s,e):(e=he(e),i=s.call(n,e));const l=r.call(n,e);return n.set(e,t),i?Fo(t,l)&&ln(n,"set",e,t,l):ln(n,"add",e,t),this}function ac(e){const t=he(this),{has:n,get:s}=si(t);let r=n.call(t,e);r?Ld(t,n,e):(e=he(e),r=n.call(t,e));const i=s?s.call(t,e):void 0,l=t.delete(e);return r&&ln(t,"delete",e,void 0,i),l}function cc(){const e=he(this),t=e.size!==0,n=ps(e)?new Map(e):new Set(e),s=e.clear();return t&&ln(e,"clear",void 0,void 0,n),s}function rr(e,t){return function(s,r){const i=this,l=i.__v_raw,a=he(l),c=t?ca:e?ua:$o;return!e&&ct(a,"iterate",fs),l.forEach((u,d)=>s.call(r,c(u),c(d),i))}}function ir(e,t,n){return function(...s){const r=this.__v_raw,i=he(r),l=ps(i),a=e==="entries"||e===Symbol.iterator&&l,c=e==="keys"&&l,u=r[e](...s),d=n?ca:t?ua:$o;return!t&&ct(i,"iterate",c?tl:fs),{next(){const{value:p,done:f}=u.next();return f?{value:p,done:f}:{value:a?[d(p[0]),d(p[1])]:d(p),done:f}},[Symbol.iterator](){return this}}}}function Sn(e){return function(...t){{const n=t[0]?`on key "${t[0]}" `:"";console.warn(`${bs(e)} operation ${n}failed: target is readonly.`,he(this))}return e==="delete"?!1:this}}function Pm(){const e={get(i){return nr(this,i)},get size(){return or(this)},has:sr,add:ic,set:lc,delete:ac,clear:cc,forEach:rr(!1,!1)},t={get(i){return nr(this,i,!1,!0)},get size(){return or(this)},has:sr,add:ic,set:lc,delete:ac,clear:cc,forEach:rr(!1,!0)},n={get(i){return nr(this,i,!0)},get size(){return or(this,!0)},has(i){return sr.call(this,i,!0)},add:Sn("add"),set:Sn("set"),delete:Sn("delete"),clear:Sn("clear"),forEach:rr(!0,!1)},s={get(i){return nr(this,i,!0,!0)},get size(){return or(this,!0)},has(i){return sr.call(this,i,!0)},add:Sn("add"),set:Sn("set"),delete:Sn("delete"),clear:Sn("clear"),forEach:rr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=ir(i,!1,!1),n[i]=ir(i,!0,!1),t[i]=ir(i,!1,!0),s[i]=ir(i,!0,!0)}),[e,n,t,s]}const[Um,Mm,Lm,Rm]=Pm();function oi(e,t){const n=t?e?Rm:Lm:e?Mm:Um;return(s,r,i)=>r==="__v_isReactive"?!e:r==="__v_isReadonly"?e:r==="__v_raw"?s:Reflect.get(Se(n,r)&&r in s?n:s,r,i)}const Nm={get:oi(!1,!1)},qm={get:oi(!1,!0)},jm={get:oi(!0,!1)},Wm={get:oi(!0,!0)};function Ld(e,t,n){const s=he(n);if(s!==n&&t.call(e,s)){const r=oa(e);console.warn(`Reactive ${r} contains both the raw and reactive versions of the same object${r==="Map"?" as keys":""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`)}}const Rd=new WeakMap,Nd=new WeakMap,qd=new WeakMap,jd=new WeakMap;function Hm(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Vm(e){return e.__v_skip||!Object.isExtensible(e)?0:Hm(oa(e))}function We(e){return Wn(e)?e:ri(e,!1,Ud,Nm,Rd)}function zm(e){return ri(e,!1,Om,qm,Nd)}function Vt(e){return ri(e,!0,Md,jm,qd)}function uo(e){return ri(e,!0,Im,Wm,jd)}function ri(e,t,n,s,r){if(!Be(e))return console.warn(`value cannot be made reactive: ${String(e)}`),e;if(e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=r.get(e);if(i)return i;const l=Vm(e);if(l===0)return e;const a=new Proxy(e,l===2?s:n);return r.set(e,a),a}function hs(e){return Wn(e)?hs(e.__v_raw):!!(e&&e.__v_isReactive)}function Wn(e){return!!(e&&e.__v_isReadonly)}function Pr(e){return!!(e&&e.__v_isShallow)}function Ur(e){return hs(e)||Wn(e)}function he(e){const t=e&&e.__v_raw;return t?he(t):e}function ii(e){return Br(e,"__v_skip",!0),e}const $o=e=>Be(e)?We(e):e,ua=e=>Be(e)?Vt(e):e;function da(e){In&&ht&&(e=he(e),Od(e.dep||(e.dep=la()),{target:e,type:"get",key:"value"}))}function pa(e,t){e=he(e);const n=e.dep;n&&nl(n,{target:e,type:"set",key:"value",newValue:t})}function $e(e){return!!(e&&e.__v_isRef===!0)}function Y(e){return Wd(e,!1)}function an(e){return Wd(e,!0)}function Wd(e,t){return $e(e)?e:new Km(e,t)}class Km{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:he(t),this._value=n?t:$o(t)}get value(){return da(this),this._value}set value(t){const n=this.__v_isShallow||Pr(t)||Wn(t);t=n?t:he(t),Fo(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:$o(t),pa(this,t))}}function B(e){return $e(e)?e.value:e}const Gm={get:(e,t,n)=>B(Reflect.get(e,t,n)),set:(e,t,n,s)=>{const r=e[t];return $e(r)&&!$e(n)?(r.value=n,!0):Reflect.set(e,t,n,s)}};function Hd(e){return hs(e)?e:new Proxy(e,Gm)}class Ym{constructor(t){this.dep=void 0,this.__v_isRef=!0;const{get:n,set:s}=t(()=>da(this),()=>pa(this));this._get=n,this._set=s}get value(){return this._get()}set value(t){this._set(t)}}function fa(e){return new Ym(e)}function Qm(e){Ur(e)||console.warn("toRefs() expects a reactive object but received a plain one.");const t=ie(e)?new Array(e.length):{};for(const n in e)t[n]=Vd(e,n);return t}class Zm{constructor(t,n,s){this._object=t,this._key=n,this._defaultValue=s,this.__v_isRef=!0}get value(){const t=this._object[this._key];return t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}get dep(){return bm(he(this._object),this._key)}}class Jm{constructor(t){this._getter=t,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function Xm(e,t,n){return $e(e)?e:de(e)?new Jm(e):Be(e)&&arguments.length>1?Vd(e,t,n):Y(e)}function Vd(e,t,n){const s=e[t];return $e(s)?s:new Zm(e,t,n)}class e0{constructor(t,n,s,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new aa(t,()=>{this._dirty||(this._dirty=!0,pa(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const t=he(this);return da(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function t0(e,t,n=!1){let s,r;const i=de(e);i?(s=e,r=()=>{console.warn("Write operation failed: computed value is readonly")}):(s=e.get,r=e.set);const l=new e0(s,r,i||!r,n);return t&&!n&&(l.effect.onTrack=t.onTrack,l.effect.onTrigger=t.onTrigger),l}const ms=[];function xr(e){ms.push(e)}function wr(){ms.pop()}function R(e,...t){ks();const n=ms.length?ms[ms.length-1].component:null,s=n&&n.appContext.config.warnHandler,r=n0();if(s)_n(s,n,11,[e+t.join(""),n&&n.proxy,r.map(({vnode:i})=>`at <${yi(n,i.type)}>`).join(`
`),r]);else{const i=[`[Vue warn]: ${e}`,...t];r.length&&i.push(`
`,...s0(r)),console.warn(...i)}As()}function n0(){let e=ms[ms.length-1];if(!e)return[];const t=[];for(;e;){const n=t[0];n&&n.vnode===e?n.recurseCount++:t.push({vnode:e,recurseCount:0});const s=e.component&&e.component.parent;e=s&&s.vnode}return t}function s0(e){const t=[];return e.forEach((n,s)=>{t.push(...s===0?[]:[`
`],...o0(n))}),t}function o0({vnode:e,recurseCount:t}){const n=t>0?`... (${t} recursive calls)`:"",s=e.component?e.component.parent==null:!1,r=` at <${yi(e.component,e.type,s)}`,i=">"+n;return e.props?[r,...r0(e.props),i]:[r+i]}function r0(e){const t=[],n=Object.keys(e);return n.slice(0,3).forEach(s=>{t.push(...zd(s,e[s]))}),n.length>3&&t.push(" ..."),t}function zd(e,t,n){return je(t)?(t=JSON.stringify(t),n?t:[`${e}=${t}`]):typeof t=="number"||typeof t=="boolean"||t==null?n?t:[`${e}=${t}`]:$e(t)?(t=zd(e,he(t.value),!0),n?t:[`${e}=Ref<`,t,">"]):de(t)?[`${e}=fn${t.name?`<${t.name}>`:""}`]:(t=he(t),n?t:[`${e}=`,t])}function i0(e,t){e!==void 0&&(typeof e!="number"?R(`${t} is not a valid number - got ${JSON.stringify(e)}.`):isNaN(e)&&R(`${t} is NaN - the duration expression might be incorrect.`))}const ha={sp:"serverPrefetch hook",bc:"beforeCreate hook",c:"created hook",bm:"beforeMount hook",m:"mounted hook",bu:"beforeUpdate hook",u:"updated",bum:"beforeUnmount hook",um:"unmounted hook",a:"activated hook",da:"deactivated hook",ec:"errorCaptured hook",rtc:"renderTracked hook",rtg:"renderTriggered hook",[0]:"setup function",[1]:"render function",[2]:"watcher getter",[3]:"watcher callback",[4]:"watcher cleanup function",[5]:"native event handler",[6]:"component event handler",[7]:"vnode hook",[8]:"directive hook",[9]:"transition hook",[10]:"app errorHandler",[11]:"app warnHandler",[12]:"ref function",[13]:"async component loader",[14]:"scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core"};function _n(e,t,n,s){let r;try{r=s?e(...s):e()}catch(i){li(i,t,n)}return r}function Lt(e,t,n,s){if(de(e)){const i=_n(e,t,n,s);return i&&sa(i)&&i.catch(l=>{li(l,t,n)}),i}const r=[];for(let i=0;i<e.length;i++)r.push(Lt(e[i],t,n,s));return r}function li(e,t,n,s=!0){const r=t?t.vnode:null;if(t){let i=t.parent;const l=t.proxy,a=ha[n];for(;i;){const u=i.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](e,l,a)===!1)return}i=i.parent}const c=t.appContext.config.errorHandler;if(c){_n(c,null,10,[e,l,a]);return}}l0(e,n,r,s)}function l0(e,t,n,s=!0){{const r=ha[t];if(n&&xr(n),R(`Unhandled error${r?` during execution of ${r}`:""}`),n&&wr(),s)throw e;console.error(e)}}let Bo=!1,sl=!1;const ot=[];let en=0;const Ms=[];let Xt=null,Fn=0;const Kd=Promise.resolve();let ma=null;const a0=100;function rt(e){const t=ma||Kd;return e?t.then(this?e.bind(this):e):t}function c0(e){let t=en+1,n=ot.length;for(;t<n;){const s=t+n>>>1;Do(ot[s])<e?t=s+1:n=s}return t}function ai(e){(!ot.length||!ot.includes(e,Bo&&e.allowRecurse?en+1:en))&&(e.id==null?ot.push(e):ot.splice(c0(e.id),0,e),Gd())}function Gd(){!Bo&&!sl&&(sl=!0,ma=Kd.then(Zd))}function u0(e){const t=ot.indexOf(e);t>en&&ot.splice(t,1)}function Yd(e){ie(e)?Ms.push(...e):(!Xt||!Xt.includes(e,e.allowRecurse?Fn+1:Fn))&&Ms.push(e),Gd()}function uc(e,t=Bo?en+1:0){for(e=e||new Map;t<ot.length;t++){const n=ot[t];if(n&&n.pre){if(ya(e,n))continue;ot.splice(t,1),t--,n()}}}function Qd(e){if(Ms.length){const t=[...new Set(Ms)];if(Ms.length=0,Xt){Xt.push(...t);return}for(Xt=t,e=e||new Map,Xt.sort((n,s)=>Do(n)-Do(s)),Fn=0;Fn<Xt.length;Fn++)ya(e,Xt[Fn])||Xt[Fn]();Xt=null,Fn=0}}const Do=e=>e.id==null?1/0:e.id,d0=(e,t)=>{const n=Do(e)-Do(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function Zd(e){sl=!1,Bo=!0,e=e||new Map,ot.sort(d0);const t=n=>ya(e,n);try{for(en=0;en<ot.length;en++){const n=ot[en];if(n&&n.active!==!1){if(t(n))continue;_n(n,null,14)}}}finally{en=0,ot.length=0,Qd(e),Bo=!1,ma=null,(ot.length||Ms.length)&&Zd(e)}}function ya(e,t){if(!e.has(t))e.set(t,1);else{const n=e.get(t);if(n>a0){const s=t.ownerInstance,r=s&&Po(s.type);return R(`Maximum recursive updates exceeded${r?` in component <${r}>`:""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`),!0}else e.set(t,n+1)}}let Pn=!1;const Is=new Set;Dr().__VUE_HMR_RUNTIME__={createRecord:wi(Jd),rerender:wi(h0),reload:wi(m0)};const xs=new Map;function p0(e){const t=e.type.__hmrId;let n=xs.get(t);n||(Jd(t,e.type),n=xs.get(t)),n.instances.add(e)}function f0(e){xs.get(e.type.__hmrId).instances.delete(e)}function Jd(e,t){return xs.has(e)?!1:(xs.set(e,{initialDef:go(t),instances:new Set}),!0)}function go(e){return Dp(e)?e.__vccOpts:e}function h0(e,t){const n=xs.get(e);n&&(n.initialDef.render=t,[...n.instances].forEach(s=>{t&&(s.render=t,go(s.type).render=t),s.renderCache=[],Pn=!0,s.update(),Pn=!1}))}function m0(e,t){const n=xs.get(e);if(!n)return;t=go(t),dc(n.initialDef,t);const s=[...n.instances];for(const r of s){const i=go(r.type);Is.has(i)||(i!==n.initialDef&&dc(i,t),Is.add(i)),r.appContext.propsCache.delete(r.type),r.appContext.emitsCache.delete(r.type),r.appContext.optionsCache.delete(r.type),r.ceReload?(Is.add(i),r.ceReload(t.styles),Is.delete(i)):r.parent?ai(r.parent.update):r.appContext.reload?r.appContext.reload():typeof window<"u"?window.location.reload():console.warn("[HMR] Root or manually mounted instance modified. Full reload required.")}Yd(()=>{for(const r of s)Is.delete(go(r.type))})}function dc(e,t){qe(e,t);for(const n in e)n!=="__file"&&!(n in t)&&delete e[n]}function wi(e){return(t,n)=>{try{return e(t,n)}catch(s){console.error(s),console.warn("[HMR] Something went wrong during Vue component hot-reload. Full reload required.")}}}let tn,po=[],ol=!1;function Go(e,...t){tn?tn.emit(e,...t):ol||po.push({event:e,args:t})}function Xd(e,t){var n,s;tn=e,tn?(tn.enabled=!0,po.forEach(({event:r,args:i})=>tn.emit(r,...i)),po=[]):typeof window<"u"&&window.HTMLElement&&!((s=(n=window.navigator)==null?void 0:n.userAgent)!=null&&s.includes("jsdom"))?((t.__VUE_DEVTOOLS_HOOK_REPLAY__=t.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(i=>{Xd(i,t)}),setTimeout(()=>{tn||(t.__VUE_DEVTOOLS_HOOK_REPLAY__=null,ol=!0,po=[])},3e3)):(ol=!0,po=[])}function y0(e,t){Go("app:init",e,t,{Fragment:Te,Text:Qo,Comment:lt,Static:kr})}function g0(e){Go("app:unmount",e)}const rl=ga("component:added"),ep=ga("component:updated"),v0=ga("component:removed"),_0=e=>{tn&&typeof tn.cleanupBuffer=="function"&&!tn.cleanupBuffer(e)&&v0(e)};function ga(e){return t=>{Go(e,t.appContext.app,t.uid,t.parent?t.parent.uid:void 0,t)}}const b0=tp("perf:start"),x0=tp("perf:end");function tp(e){return(t,n,s)=>{Go(e,t.appContext.app,t.uid,t,n,s)}}function w0(e,t,n){Go("component:emit",e.appContext.app,e,t,n)}function k0(e,t,...n){if(e.isUnmounted)return;const s=e.vnode.props||Le;{const{emitsOptions:d,propsOptions:[p]}=e;if(d)if(!(t in d))(!p||!(es(t)in p))&&R(`Component emitted event "${t}" but it is neither declared in the emits option nor as an "${es(t)}" prop.`);else{const f=d[t];de(f)&&(f(...n)||R(`Invalid event arguments: event validation failed for event "${t}".`))}}let r=n;const i=t.startsWith("update:"),l=i&&t.slice(7);if(l&&l in s){const d=`${l==="modelValue"?"model":l}Modifiers`,{number:p,trim:f}=s[d]||Le;f&&(r=n.map(h=>je(h)?h.trim():h)),p&&(r=n.map(rm))}w0(e,t,r);{const d=t.toLowerCase();d!==t&&s[es(d)]&&R(`Event "${d}" is emitted in component ${yi(e,e.type)} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${xn(t)}" instead of "${t}".`)}let a,c=s[a=es(t)]||s[a=es(rn(t))];!c&&i&&(c=s[a=es(xn(t))]),c&&Lt(c,e,6,r);const u=s[a+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,Lt(u,e,6,r)}}function np(e,t,n=!1){const s=t.emitsCache,r=s.get(e);if(r!==void 0)return r;const i=e.emits;let l={},a=!1;if(!de(e)){const c=u=>{const d=np(u,t,!0);d&&(a=!0,qe(l,d))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!i&&!a?(Be(e)&&s.set(e,null),null):(ie(i)?i.forEach(c=>l[c]=null):qe(l,i),Be(e)&&s.set(e,l),l)}function ci(e,t){return!e||!zo(t)?!1:(t=t.slice(2).replace(/Once$/,""),Se(e,t[0].toLowerCase()+t.slice(1))||Se(e,xn(t))||Se(e,t))}let Ze=null,ui=null;function Mr(e){const t=Ze;return Ze=e,ui=e&&e.type.__scopeId||null,t}function sp(e){ui=e}function op(){ui=null}function M(e,t=Ze,n){if(!t||e._n)return e;const s=(...r)=>{s._d&&Sc(-1);const i=Mr(t);let l;try{l=e(...r)}finally{Mr(i),s._d&&Sc(1)}return ep(t),l};return s._n=!0,s._c=!0,s._d=!0,s}let il=!1;function Lr(){il=!0}function ki(e){const{type:t,vnode:n,proxy:s,withProxy:r,props:i,propsOptions:[l],slots:a,attrs:c,emit:u,render:d,renderCache:p,data:f,setupState:h,ctx:y,inheritAttrs:b}=e;let k,w;const A=Mr(e);il=!1;try{if(n.shapeFlag&4){const C=r||s;k=Ht(d.call(C,C,p,i,h,f,y)),w=c}else{const C=t;c===i&&Lr(),k=Ht(C.length>1?C(i,{get attrs(){return Lr(),c},slots:a,emit:u}):C(i,null)),w=t.props?c:S0(c)}}catch(C){vo.length=0,li(C,e,1),k=H(lt)}let x=k,S;if(k.patchFlag>0&&k.patchFlag&2048&&([x,S]=A0(k)),w&&b!==!1){const C=Object.keys(w),{shapeFlag:F}=x;if(C.length){if(F&7)l&&C.some($r)&&(w=C0(w,l)),x=un(x,w);else if(!il&&x.type!==lt){const U=Object.keys(c),O=[],q=[];for(let ne=0,ue=U.length;ne<ue;ne++){const Q=U[ne];zo(Q)?$r(Q)||O.push(Q[2].toLowerCase()+Q.slice(3)):q.push(Q)}q.length&&R(`Extraneous non-props attributes (${q.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`),O.length&&R(`Extraneous non-emits event listeners (${O.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`)}}}return n.dirs&&(pc(x)||R("Runtime directive used on component with non-element root node. The directives will not function as intended."),x=un(x),x.dirs=x.dirs?x.dirs.concat(n.dirs):n.dirs),n.transition&&(pc(x)||R("Component inside <Transition> renders non-element root node that cannot be animated."),x.transition=n.transition),S?S(x):k=x,Mr(A),k}const A0=e=>{const t=e.children,n=e.dynamicChildren,s=rp(t);if(!s)return[e,void 0];const r=t.indexOf(s),i=n?n.indexOf(s):-1,l=a=>{t[r]=a,n&&(i>-1?n[i]=a:a.patchFlag>0&&(e.dynamicChildren=[...n,a]))};return[Ht(s),l]};function rp(e){let t;for(let n=0;n<e.length;n++){const s=e[n];if(cn(s)){if(s.type!==lt||s.children==="v-if"){if(t)return;t=s}}else return}return t}const S0=e=>{let t;for(const n in e)(n==="class"||n==="style"||zo(n))&&((t||(t={}))[n]=e[n]);return t},C0=(e,t)=>{const n={};for(const s in e)(!$r(s)||!(s.slice(9)in t))&&(n[s]=e[s]);return n},pc=e=>e.shapeFlag&7||e.type===lt;function E0(e,t,n){const{props:s,children:r,component:i}=e,{props:l,children:a,patchFlag:c}=t,u=i.emitsOptions;if((r||a)&&Pn||t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?fc(s,l,u):!!l;if(c&8){const d=t.dynamicProps;for(let p=0;p<d.length;p++){const f=d[p];if(l[f]!==s[f]&&!ci(u,f))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===l?!1:s?l?fc(s,l,u):!0:!!l;return!1}function fc(e,t,n){const s=Object.keys(t);if(s.length!==Object.keys(e).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(t[i]!==e[i]&&!ci(n,i))return!0}return!1}function T0({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const ip=e=>e.__isSuspense;function F0(e,t){t&&t.pendingBranch?ie(e)?t.effects.push(...e):t.effects.push(e):Yd(e)}function Ss(e,t){return va(e,null,t)}const lr={};function ge(e,t,n){return de(t)||R("`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."),va(e,t,n)}function va(e,t,{immediate:n,deep:s,flush:r,onTrack:i,onTrigger:l}=Le){var a;t||(n!==void 0&&R('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'),s!==void 0&&R('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'));const c=C=>{R("Invalid watch source: ",C,"A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.")},u=ia()===((a=Qe)==null?void 0:a.scope)?Qe:null;let d,p=!1,f=!1;if($e(e)?(d=()=>e.value,p=Pr(e)):hs(e)?(d=()=>e,s=!0):ie(e)?(f=!0,p=e.some(C=>hs(C)||Pr(C)),d=()=>e.map(C=>{if($e(C))return C.value;if(hs(C))return cs(C);if(de(C))return _n(C,u,2);c(C)})):de(e)?t?d=()=>_n(e,u,2):d=()=>{if(!(u&&u.isUnmounted))return h&&h(),Lt(e,u,3,[y])}:(d=bt,c(e)),t&&s){const C=d;d=()=>cs(C())}let h,y=C=>{h=x.onStop=()=>{_n(C,u,4)}},b;if(Io)if(y=bt,t?n&&Lt(t,u,3,[d(),f?[]:void 0,y]):d(),r==="sync"){const C=My();b=C.__watcherHandles||(C.__watcherHandles=[])}else return bt;let k=f?new Array(e.length).fill(lr):lr;const w=()=>{if(x.active)if(t){const C=x.run();(s||p||(f?C.some((F,U)=>Fo(F,k[U])):Fo(C,k)))&&(h&&h(),Lt(t,u,3,[C,k===lr?void 0:f&&k[0]===lr?[]:k,y]),k=C)}else x.run()};w.allowRecurse=!!t;let A;r==="sync"?A=w:r==="post"?A=()=>nt(w,u&&u.suspense):(w.pre=!0,u&&(w.id=u.uid),A=()=>ai(w));const x=new aa(d,A);x.onTrack=i,x.onTrigger=l,t?n?w():k=x.run():r==="post"?nt(x.run.bind(x),u&&u.suspense):x.run();const S=()=>{x.stop(),u&&u.scope&&ta(u.scope.effects,x)};return b&&b.push(S),S}function $0(e,t,n){const s=this.proxy,r=je(e)?e.includes(".")?lp(s,e):()=>s[e]:e.bind(s,s);let i;de(t)?i=t:(i=t.handler,n=t);const l=Qe;js(this);const a=va(r,i.bind(s),n);return l?js(l):gs(),a}function lp(e,t){const n=t.split(".");return()=>{let s=e;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function cs(e,t){if(!Be(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),$e(e))cs(e.value,t);else if(ie(e))for(let n=0;n<e.length;n++)cs(e[n],t);else if(wd(e)||ps(e))e.forEach(n=>{cs(n,t)});else if(Ad(e))for(const n in e)cs(e[n],t);return e}function ap(e){nm(e)&&R("Do not use built-in directive ids as custom directive id: "+e)}function Tt(e,t){const n=Ze;if(n===null)return R("withDirectives can only be used inside render functions."),e;const s=mi(n)||n.proxy,r=e.dirs||(e.dirs=[]);for(let i=0;i<t.length;i++){let[l,a,c,u=Le]=t[i];l&&(de(l)&&(l={mounted:l,updated:l}),l.deep&&cs(a),r.push({dir:l,instance:s,value:a,oldValue:void 0,arg:c,modifiers:u}))}return e}function Yn(e,t,n,s){const r=e.dirs,i=t&&t.dirs;for(let l=0;l<r.length;l++){const a=r[l];i&&(a.oldValue=i[l].value);let c=a.dir[s];c&&(ks(),Lt(c,n,8,[e.el,a,e,t]),As())}}function B0(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return zn(()=>{e.isMounted=!0}),Yo(()=>{e.isUnmounting=!0}),e}const It=[Function,Array],D0={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:It,onEnter:It,onAfterEnter:It,onEnterCancelled:It,onBeforeLeave:It,onLeave:It,onAfterLeave:It,onLeaveCancelled:It,onBeforeAppear:It,onAppear:It,onAfterAppear:It,onAppearCancelled:It};function O0(e,t){const{leavingVNodes:n}=e;let s=n.get(t.type);return s||(s=Object.create(null),n.set(t.type,s)),s}function ll(e,t,n,s){const{appear:r,mode:i,persisted:l=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:u,onEnterCancelled:d,onBeforeLeave:p,onLeave:f,onAfterLeave:h,onLeaveCancelled:y,onBeforeAppear:b,onAppear:k,onAfterAppear:w,onAppearCancelled:A}=t,x=String(e.key),S=O0(n,e),C=(O,q)=>{O&&Lt(O,s,9,q)},F=(O,q)=>{const ne=q[1];C(O,q),ie(O)?O.every(ue=>ue.length<=1)&&ne():O.length<=1&&ne()},U={mode:i,persisted:l,beforeEnter(O){let q=a;if(!n.isMounted)if(r)q=b||a;else return;O._leaveCb&&O._leaveCb(!0);const ne=S[x];ne&&ss(e,ne)&&ne.el._leaveCb&&ne.el._leaveCb(),C(q,[O])},enter(O){let q=c,ne=u,ue=d;if(!n.isMounted)if(r)q=k||c,ne=w||u,ue=A||d;else return;let Q=!1;const me=O._enterCb=ve=>{Q||(Q=!0,ve?C(ue,[O]):C(ne,[O]),U.delayedLeave&&U.delayedLeave(),O._enterCb=void 0)};q?F(q,[O,me]):me()},leave(O,q){const ne=String(e.key);if(O._enterCb&&O._enterCb(!0),n.isUnmounting)return q();C(p,[O]);let ue=!1;const Q=O._leaveCb=me=>{ue||(ue=!0,q(),me?C(y,[O]):C(h,[O]),O._leaveCb=void 0,S[ne]===e&&delete S[ne])};S[ne]=e,f?F(f,[O,Q]):Q()},clone(O){return ll(O,t,n,s)}};return U}function Rr(e,t){e.shapeFlag&6&&e.component?Rr(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function cp(e,t=!1,n){let s=[],r=0;for(let i=0;i<e.length;i++){let l=e[i];const a=n==null?l.key:String(n)+String(l.key!=null?l.key:i);l.type===Te?(l.patchFlag&128&&r++,s=s.concat(cp(l.children,t,a))):(t||l.type!==lt)&&s.push(a!=null?un(l,{key:a}):l)}if(r>1)for(let i=0;i<s.length;i++)s[i].patchFlag=-2;return s}function ke(e,t){return de(e)?(()=>qe({name:e.name},t,{setup:e}))():e}const Ls=e=>!!e.type.__asyncLoader,_a=e=>e.type.__isKeepAlive,I0={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(e,{slots:t}){const n=Bt(),s=n.ctx;if(!s.renderer)return()=>{const A=t.default&&t.default();return A&&A.length===1?A[0]:A};const r=new Map,i=new Set;let l=null;n.__v_cache=r;const a=n.suspense,{renderer:{p:c,m:u,um:d,o:{createElement:p}}}=s,f=p("div");s.activate=(A,x,S,C,F)=>{const U=A.component;u(A,x,S,0,a),c(U.vnode,A,x,S,U,a,C,A.slotScopeIds,F),nt(()=>{U.isDeactivated=!1,U.a&&ns(U.a);const O=A.props&&A.props.onVnodeMounted;O&&Pt(O,U.parent,A)},a),rl(U)},s.deactivate=A=>{const x=A.component;u(A,f,null,1,a),nt(()=>{x.da&&ns(x.da);const S=A.props&&A.props.onVnodeUnmounted;S&&Pt(S,x.parent,A),x.isDeactivated=!0},a),rl(x)};function h(A){Ai(A),d(A,n,a,!0)}function y(A){r.forEach((x,S)=>{const C=Po(x.type);C&&(!A||!A(C))&&b(S)})}function b(A){const x=r.get(A);!l||!ss(x,l)?h(x):l&&Ai(l),r.delete(A),i.delete(A)}ge(()=>[e.include,e.exclude],([A,x])=>{A&&y(S=>fo(A,S)),x&&y(S=>!fo(x,S))},{flush:"post",deep:!0});let k=null;const w=()=>{k!=null&&r.set(k,Si(n.subTree))};return zn(w),pi(w),Yo(()=>{r.forEach(A=>{const{subTree:x,suspense:S}=n,C=Si(x);if(A.type===C.type&&A.key===C.key){Ai(C);const F=C.component.da;F&&nt(F,S);return}h(A)})}),()=>{if(k=null,!t.default)return null;const A=t.default(),x=A[0];if(A.length>1)return R("KeepAlive should contain exactly one component child."),l=null,A;if(!cn(x)||!(x.shapeFlag&4)&&!(x.shapeFlag&128))return l=null,x;let S=Si(x);const C=S.type,F=Po(Ls(S)?S.type.__asyncResolved||{}:C),{include:U,exclude:O,max:q}=e;if(U&&(!F||!fo(U,F))||O&&F&&fo(O,F))return l=S,x;const ne=S.key==null?C:S.key,ue=r.get(ne);return S.el&&(S=un(S),x.shapeFlag&128&&(x.ssContent=S)),k=ne,ue?(S.el=ue.el,S.component=ue.component,S.transition&&Rr(S,S.transition),S.shapeFlag|=512,i.delete(ne),i.add(ne)):(i.add(ne),q&&i.size>parseInt(q,10)&&b(i.values().next().value)),S.shapeFlag|=256,l=S,ip(x.type)?x:S}}},up=I0;function fo(e,t){return ie(e)?e.some(n=>fo(n,t)):je(e)?e.split(",").includes(t):tm(e)?e.test(t):!1}function dp(e,t){fp(e,"a",t)}function pp(e,t){fp(e,"da",t)}function fp(e,t,n=Qe){const s=e.__wdc||(e.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return e()});if(di(t,s,n),n){let r=n.parent;for(;r&&r.parent;)_a(r.parent.vnode)&&P0(s,t,n,r),r=r.parent}}function P0(e,t,n,s){const r=di(t,e,s,!0);fi(()=>{ta(s[t],r)},n)}function Ai(e){e.shapeFlag&=-257,e.shapeFlag&=-513}function Si(e){return e.shapeFlag&128?e.ssContent:e}function di(e,t,n=Qe,s=!1){if(n){const r=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...l)=>{if(n.isUnmounted)return;ks(),js(n);const a=Lt(t,n,e,l);return gs(),As(),a});return s?r.unshift(i):r.push(i),i}else{const r=es(ha[e].replace(/ hook$/,""));R(`${r} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`)}}const An=e=>(t,n=Qe)=>(!Io||e==="sp")&&di(e,(...s)=>t(...s),n),U0=An("bm"),zn=An("m"),M0=An("bu"),pi=An("u"),Yo=An("bum"),fi=An("um"),L0=An("sp"),R0=An("rtg"),N0=An("rtc");function q0(e,t=Qe){di("ec",e,t)}const al="components",j0="directives";function qs(e,t){return hp(al,e,!0,t)||e}const W0=Symbol.for("v-ndc");function ws(e){return hp(j0,e)}function hp(e,t,n=!0,s=!1){const r=Ze||Qe;if(r){const i=r.type;if(e===al){const a=Po(i,!1);if(a&&(a===t||a===rn(t)||a===bs(rn(t))))return i}const l=hc(r[e]||i[e],t)||hc(r.appContext[e],t);if(!l&&s)return i;if(n&&!l){const a=e===al?`
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.`:"";R(`Failed to resolve ${e.slice(0,-1)}: ${t}${a}`)}return l}else R(`resolve${bs(e.slice(0,-1))} can only be used in render() or setup().`)}function hc(e,t){return e&&(e[t]||e[rn(t)]||e[bs(rn(t))])}function Cs(e,t,n,s){let r;const i=n&&n[s];if(ie(e)||je(e)){r=new Array(e.length);for(let l=0,a=e.length;l<a;l++)r[l]=t(e[l],l,void 0,i&&i[l])}else if(typeof e=="number"){Number.isInteger(e)||R(`The v-for range expect an integer value but got ${e}.`),r=new Array(e);for(let l=0;l<e;l++)r[l]=t(l+1,l,void 0,i&&i[l])}else if(Be(e))if(e[Symbol.iterator])r=Array.from(e,(l,a)=>t(l,a,void 0,i&&i[a]));else{const l=Object.keys(e);r=new Array(l.length);for(let a=0,c=l.length;a<c;a++){const u=l[a];r[a]=t(e[u],u,a,i&&i[a])}}else r=[];return n&&(n[s]=r),r}function wt(e,t,n={},s,r){if(Ze.isCE||Ze.parent&&Ls(Ze.parent)&&Ze.parent.isCE)return t!=="default"&&(n.name=t),H("slot",n,s&&s());let i=e[t];i&&i.length>1&&(R("SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."),i=()=>[]),i&&i._c&&(i._d=!1),v();const l=i&&mp(i(n)),a=j(Te,{key:n.key||l&&l.key||`_${t}`},l||(s?s():[]),l&&e._===1?64:-2);return!r&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),i&&i._c&&(i._d=!0),a}function mp(e){return e.some(t=>cn(t)?!(t.type===lt||t.type===Te&&!mp(t.children)):!0)?e:null}const cl=e=>e?Fp(e)?mi(e)||e.proxy:cl(e.parent):null,ys=qe(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>uo(e.props),$attrs:e=>uo(e.attrs),$slots:e=>uo(e.slots),$refs:e=>uo(e.refs),$parent:e=>cl(e.parent),$root:e=>cl(e.root),$emit:e=>e.emit,$options:e=>xa(e),$forceUpdate:e=>e.f||(e.f=()=>ai(e.update)),$nextTick:e=>e.n||(e.n=rt.bind(e.proxy)),$watch:e=>$0.bind(e)}),ba=e=>e==="_"||e==="$",Ci=(e,t)=>e!==Le&&!e.__isScriptSetup&&Se(e,t),yp={get({_:e},t){const{ctx:n,setupState:s,data:r,props:i,accessCache:l,type:a,appContext:c}=e;if(t==="__isVue")return!0;let u;if(t[0]!=="$"){const h=l[t];if(h!==void 0)switch(h){case 1:return s[t];case 2:return r[t];case 4:return n[t];case 3:return i[t]}else{if(Ci(s,t))return l[t]=1,s[t];if(r!==Le&&Se(r,t))return l[t]=2,r[t];if((u=e.propsOptions[0])&&Se(u,t))return l[t]=3,i[t];if(n!==Le&&Se(n,t))return l[t]=4,n[t];ul&&(l[t]=0)}}const d=ys[t];let p,f;if(d)return t==="$attrs"?(ct(e,"get",t),Lr()):t==="$slots"&&ct(e,"get",t),d(e);if((p=a.__cssModules)&&(p=p[t]))return p;if(n!==Le&&Se(n,t))return l[t]=4,n[t];if(f=c.config.globalProperties,Se(f,t))return f[t];Ze&&(!je(t)||t.indexOf("__v")!==0)&&(r!==Le&&ba(t[0])&&Se(r,t)?R(`Property ${JSON.stringify(t)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`):e===Ze&&R(`Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`))},set({_:e},t,n){const{data:s,setupState:r,ctx:i}=e;return Ci(r,t)?(r[t]=n,!0):r.__isScriptSetup&&Se(r,t)?(R(`Cannot mutate <script setup> binding "${t}" from Options API.`),!1):s!==Le&&Se(s,t)?(s[t]=n,!0):Se(e.props,t)?(R(`Attempting to mutate prop "${t}". Props are readonly.`),!1):t[0]==="$"&&t.slice(1)in e?(R(`Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`),!1):(t in e.appContext.config.globalProperties?Object.defineProperty(i,t,{enumerable:!0,configurable:!0,value:n}):i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:s,appContext:r,propsOptions:i}},l){let a;return!!n[l]||e!==Le&&Se(e,l)||Ci(t,l)||(a=i[0])&&Se(a,l)||Se(s,l)||Se(ys,l)||Se(r.config.globalProperties,l)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:Se(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};yp.ownKeys=e=>(R("Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."),Reflect.ownKeys(e));function H0(e){const t={};return Object.defineProperty(t,"_",{configurable:!0,enumerable:!1,get:()=>e}),Object.keys(ys).forEach(n=>{Object.defineProperty(t,n,{configurable:!0,enumerable:!1,get:()=>ys[n](e),set:bt})}),t}function V0(e){const{ctx:t,propsOptions:[n]}=e;n&&Object.keys(n).forEach(s=>{Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>e.props[s],set:bt})})}function z0(e){const{ctx:t,setupState:n}=e;Object.keys(he(n)).forEach(s=>{if(!n.__isScriptSetup){if(ba(s[0])){R(`setup() return property ${JSON.stringify(s)} should not start with "$" or "_" which are reserved prefixes for Vue internals.`);return}Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>n[s],set:bt})}})}function K0(){return G0().slots}function G0(){const e=Bt();return e||R("useContext() called without active instance."),e.setupContext||(e.setupContext=Bp(e))}function mc(e){return ie(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}function Y0(){const e=Object.create(null);return(t,n)=>{e[n]?R(`${t} property "${n}" is already defined in ${e[n]}.`):e[n]=t}}let ul=!0;function Q0(e){const t=xa(e),n=e.proxy,s=e.ctx;ul=!1,t.beforeCreate&&yc(t.beforeCreate,e,"bc");const{data:r,computed:i,methods:l,watch:a,provide:c,inject:u,created:d,beforeMount:p,mounted:f,beforeUpdate:h,updated:y,activated:b,deactivated:k,beforeDestroy:w,beforeUnmount:A,destroyed:x,unmounted:S,render:C,renderTracked:F,renderTriggered:U,errorCaptured:O,serverPrefetch:q,expose:ne,inheritAttrs:ue,components:Q,directives:me,filters:ve}=t,be=Y0();{const[ee]=e.propsOptions;if(ee)for(const ae in ee)be("Props",ae)}if(u&&Z0(u,s,be),l)for(const ee in l){const ae=l[ee];de(ae)?(Object.defineProperty(s,ee,{value:ae.bind(n),configurable:!0,enumerable:!0,writable:!0}),be("Methods",ee)):R(`Method "${ee}" has type "${typeof ae}" in the component definition. Did you reference the function correctly?`)}if(r){de(r)||R("The data option must be a function. Plain object usage is no longer supported.");const ee=r.call(n,n);if(sa(ee)&&R("data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."),!Be(ee))R("data() should return an object.");else{e.data=We(ee);for(const ae in ee)be("Data",ae),ba(ae[0])||Object.defineProperty(s,ae,{configurable:!0,enumerable:!0,get:()=>ee[ae],set:bt})}}if(ul=!0,i)for(const ee in i){const ae=i[ee],Ae=de(ae)?ae.bind(n,n):de(ae.get)?ae.get.bind(n,n):bt;Ae===bt&&R(`Computed property "${ee}" has no getter.`);const Ie=!de(ae)&&de(ae.set)?ae.set.bind(n):()=>{R(`Write operation failed: computed property "${ee}" is readonly.`)},Dt=D({get:Ae,set:Ie});Object.defineProperty(s,ee,{enumerable:!0,configurable:!0,get:()=>Dt.value,set:st=>Dt.value=st}),be("Computed",ee)}if(a)for(const ee in a)gp(a[ee],s,n,ee);if(c){const ee=de(c)?c.call(n):c;Reflect.ownKeys(ee).forEach(ae=>{Ct(ae,ee[ae])})}d&&yc(d,e,"c");function Pe(ee,ae){ie(ae)?ae.forEach(Ae=>ee(Ae.bind(n))):ae&&ee(ae.bind(n))}if(Pe(U0,p),Pe(zn,f),Pe(M0,h),Pe(pi,y),Pe(dp,b),Pe(pp,k),Pe(q0,O),Pe(N0,F),Pe(R0,U),Pe(Yo,A),Pe(fi,S),Pe(L0,q),ie(ne))if(ne.length){const ee=e.exposed||(e.exposed={});ne.forEach(ae=>{Object.defineProperty(ee,ae,{get:()=>n[ae],set:Ae=>n[ae]=Ae})})}else e.exposed||(e.exposed={});C&&e.render===bt&&(e.render=C),ue!=null&&(e.inheritAttrs=ue),Q&&(e.components=Q),me&&(e.directives=me)}function Z0(e,t,n=bt){ie(e)&&(e=dl(e));for(const s in e){const r=e[s];let i;Be(r)?"default"in r?i=L(r.from||s,r.default,!0):i=L(r.from||s):i=L(r),$e(i)?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>i.value,set:l=>i.value=l}):t[s]=i,n("Inject",s)}}function yc(e,t,n){Lt(ie(e)?e.map(s=>s.bind(t.proxy)):e.bind(t.proxy),t,n)}function gp(e,t,n,s){const r=s.includes(".")?lp(n,s):()=>n[s];if(je(e)){const i=t[e];de(i)?ge(r,i):R(`Invalid watch handler specified by key "${e}"`,i)}else if(de(e))ge(r,e.bind(n));else if(Be(e))if(ie(e))e.forEach(i=>gp(i,t,n,s));else{const i=de(e.handler)?e.handler.bind(n):t[e.handler];de(i)?ge(r,i,e):R(`Invalid watch handler specified by key "${e.handler}"`,i)}else R(`Invalid watch option: "${s}"`,e)}function xa(e){const t=e.type,{mixins:n,extends:s}=t,{mixins:r,optionsCache:i,config:{optionMergeStrategies:l}}=e.appContext,a=i.get(t);let c;return a?c=a:!r.length&&!n&&!s?c=t:(c={},r.length&&r.forEach(u=>Nr(c,u,l,!0)),Nr(c,t,l)),Be(t)&&i.set(t,c),c}function Nr(e,t,n,s=!1){const{mixins:r,extends:i}=t;i&&Nr(e,i,n,!0),r&&r.forEach(l=>Nr(e,l,n,!0));for(const l in t)if(s&&l==="expose")R('"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.');else{const a=J0[l]||n&&n[l];e[l]=a?a(e[l],t[l]):t[l]}return e}const J0={data:gc,props:vc,emits:vc,methods:ho,computed:ho,beforeCreate:dt,created:dt,beforeMount:dt,mounted:dt,beforeUpdate:dt,updated:dt,beforeDestroy:dt,beforeUnmount:dt,destroyed:dt,unmounted:dt,activated:dt,deactivated:dt,errorCaptured:dt,serverPrefetch:dt,components:ho,directives:ho,watch:ey,provide:gc,inject:X0};function gc(e,t){return t?e?function(){return qe(de(e)?e.call(this,this):e,de(t)?t.call(this,this):t)}:t:e}function X0(e,t){return ho(dl(e),dl(t))}function dl(e){if(ie(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function dt(e,t){return e?[...new Set([].concat(e,t))]:t}function ho(e,t){return e?qe(Object.create(null),e,t):t}function vc(e,t){return e?ie(e)&&ie(t)?[...new Set([...e,...t])]:qe(Object.create(null),mc(e),mc(t??{})):t}function ey(e,t){if(!e)return t;if(!t)return e;const n=qe(Object.create(null),e);for(const s in t)n[s]=dt(e[s],t[s]);return n}function vp(){return{app:null,config:{isNativeTag:xd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ty=0;function ny(e,t){return function(s,r=null){de(s)||(s=qe({},s)),r!=null&&!Be(r)&&(R("root props passed to app.mount() must be an object."),r=null);const i=vp();Object.defineProperty(i.config,"unwrapInjectedRef",{get(){return!0},set(){R("app.config.unwrapInjectedRef has been deprecated. 3.3 now alawys unwraps injected refs in Options API.")}});const l=new Set;let a=!1;const c=i.app={_uid:ty++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:Hr,get config(){return i.config},set config(u){R("app.config cannot be replaced. Modify individual options instead.")},use(u,...d){return l.has(u)?R("Plugin has already been applied to target app."):u&&de(u.install)?(l.add(u),u.install(c,...d)):de(u)?(l.add(u),u(c,...d)):R('A plugin must either be a function or an object with an "install" function.'),c},mixin(u){return i.mixins.includes(u)?R("Mixin has already been applied to target app"+(u.name?`: ${u.name}`:"")):i.mixins.push(u),c},component(u,d){return yl(u,i.config),d?(i.components[u]&&R(`Component "${u}" has already been registered in target app.`),i.components[u]=d,c):i.components[u]},directive(u,d){return ap(u),d?(i.directives[u]&&R(`Directive "${u}" has already been registered in target app.`),i.directives[u]=d,c):i.directives[u]},mount(u,d,p){if(a)R("App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`");else{u.__vue_app__&&R("There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first.");const f=H(s,r);return f.appContext=i,i.reload=()=>{e(un(f),u,p)},d&&t?t(f,u):e(f,u,p),a=!0,c._container=u,u.__vue_app__=c,c._instance=f.component,y0(c,Hr),mi(f.component)||f.component.proxy}},unmount(){a?(e(null,c._container),c._instance=null,g0(c),delete c._container.__vue_app__):R("Cannot unmount an app that is not mounted.")},provide(u,d){return u in i.provides&&R(`App already provides property with key "${String(u)}". It will be overwritten with the new value.`),i.provides[u]=d,c},runWithContext(u){qr=c;try{return u()}finally{qr=null}}};return c}}let qr=null;function Ct(e,t){if(!Qe)R("provide() can only be used inside setup().");else{let n=Qe.provides;const s=Qe.parent&&Qe.parent.provides;s===n&&(n=Qe.provides=Object.create(s)),n[e]=t}}function L(e,t,n=!1){const s=Qe||Ze;if(s||qr){const r=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:qr._context.provides;if(r&&e in r)return r[e];if(arguments.length>1)return n&&de(t)?t.call(s&&s.proxy):t;R(`injection "${String(e)}" not found.`)}else R("inject() can only be used inside setup() or functional components.")}function sy(e,t,n,s=!1){const r={},i={};Br(i,hi,1),e.propsDefaults=Object.create(null),_p(e,t,r,i);for(const l in e.propsOptions[0])l in r||(r[l]=void 0);xp(t||{},r,e),n?e.props=s?r:zm(r):e.type.props?e.props=r:e.props=i,e.attrs=i}function oy(e){for(;e;){if(e.type.__hmrId)return!0;e=e.parent}}function ry(e,t,n,s){const{props:r,attrs:i,vnode:{patchFlag:l}}=e,a=he(r),[c]=e.propsOptions;let u=!1;if(!oy(e)&&(s||l>0)&&!(l&16)){if(l&8){const d=e.vnode.dynamicProps;for(let p=0;p<d.length;p++){let f=d[p];if(ci(e.emitsOptions,f))continue;const h=t[f];if(c)if(Se(i,f))h!==i[f]&&(i[f]=h,u=!0);else{const y=rn(f);r[y]=pl(c,a,y,h,e,!1)}else h!==i[f]&&(i[f]=h,u=!0)}}}else{_p(e,t,r,i)&&(u=!0);let d;for(const p in a)(!t||!Se(t,p)&&((d=xn(p))===p||!Se(t,d)))&&(c?n&&(n[p]!==void 0||n[d]!==void 0)&&(r[p]=pl(c,a,p,void 0,e,!0)):delete r[p]);if(i!==a)for(const p in i)(!t||!Se(t,p))&&(delete i[p],u=!0)}u&&ln(e,"set","$attrs"),xp(t||{},r,e)}function _p(e,t,n,s){const[r,i]=e.propsOptions;let l=!1,a;if(t)for(let c in t){if(br(c))continue;const u=t[c];let d;r&&Se(r,d=rn(c))?!i||!i.includes(d)?n[d]=u:(a||(a={}))[d]=u:ci(e.emitsOptions,c)||(!(c in s)||u!==s[c])&&(s[c]=u,l=!0)}if(i){const c=he(n),u=a||Le;for(let d=0;d<i.length;d++){const p=i[d];n[p]=pl(r,c,p,u[p],e,!Se(u,p))}}return l}function pl(e,t,n,s,r,i){const l=e[n];if(l!=null){const a=Se(l,"default");if(a&&s===void 0){const c=l.default;if(l.type!==Function&&!l.skipFactory&&de(c)){const{propsDefaults:u}=r;n in u?s=u[n]:(js(r),s=u[n]=c.call(null,t),gs())}else s=c}l[0]&&(i&&!a?s=!1:l[1]&&(s===""||s===xn(n))&&(s=!0))}return s}function bp(e,t,n=!1){const s=t.propsCache,r=s.get(e);if(r)return r;const i=e.props,l={},a=[];let c=!1;if(!de(e)){const d=p=>{c=!0;const[f,h]=bp(p,t,!0);qe(l,f),h&&a.push(...h)};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!i&&!c)return Be(e)&&s.set(e,Us),Us;if(ie(i))for(let d=0;d<i.length;d++){je(i[d])||R("props must be strings when using array syntax.",i[d]);const p=rn(i[d]);_c(p)&&(l[p]=Le)}else if(i){Be(i)||R("invalid props options",i);for(const d in i){const p=rn(d);if(_c(p)){const f=i[d],h=l[p]=ie(f)||de(f)?{type:f}:qe({},f);if(h){const y=xc(Boolean,h.type),b=xc(String,h.type);h[0]=y>-1,h[1]=b<0||y<b,(y>-1||Se(h,"default"))&&a.push(p)}}}}const u=[l,a];return Be(e)&&s.set(e,u),u}function _c(e){return e[0]!=="$"?!0:(R(`Invalid prop name: "${e}" is a reserved property.`),!1)}function fl(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function bc(e,t){return fl(e)===fl(t)}function xc(e,t){return ie(t)?t.findIndex(n=>bc(n,e)):de(t)&&bc(t,e)?0:-1}function xp(e,t,n){const s=he(t),r=n.propsOptions[0];for(const i in r){let l=r[i];l!=null&&iy(i,s[i],l,!Se(e,i)&&!Se(e,xn(i)))}}function iy(e,t,n,s){const{type:r,required:i,validator:l,skipCheck:a}=n;if(i&&s){R('Missing required prop: "'+e+'"');return}if(!(t==null&&!i)){if(r!=null&&r!==!0&&!a){let c=!1;const u=ie(r)?r:[r],d=[];for(let p=0;p<u.length&&!c;p++){const{valid:f,expectedType:h}=ay(t,u[p]);d.push(h||""),c=f}if(!c){R(cy(e,t,d));return}}l&&!l(t)&&R('Invalid prop: custom validator check failed for prop "'+e+'".')}}const ly=Vn("String,Number,Boolean,Function,Symbol,BigInt");function ay(e,t){let n;const s=fl(t);if(ly(s)){const r=typeof e;n=r===s.toLowerCase(),!n&&r==="object"&&(n=e instanceof t)}else s==="Object"?n=Be(e):s==="Array"?n=ie(e):s==="null"?n=e===null:n=e instanceof t;return{valid:n,expectedType:s}}function cy(e,t,n){let s=`Invalid prop: type check failed for prop "${e}". Expected ${n.map(bs).join(" | ")}`;const r=n[0],i=oa(t),l=wc(t,r),a=wc(t,i);return n.length===1&&kc(r)&&!uy(r,i)&&(s+=` with value ${l}`),s+=`, got ${i} `,kc(i)&&(s+=`with value ${a}.`),s}function wc(e,t){return t==="String"?`"${e}"`:t==="Number"?`${Number(e)}`:`${e}`}function kc(e){return["string","number","boolean"].some(n=>e.toLowerCase()===n)}function uy(...e){return e.some(t=>t.toLowerCase()==="boolean")}const wp=e=>e[0]==="_"||e==="$stable",wa=e=>ie(e)?e.map(Ht):[Ht(e)],dy=(e,t,n)=>{if(t._n)return t;const s=M((...r)=>(Qe&&R(`Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`),wa(t(...r))),n);return s._c=!1,s},kp=(e,t,n)=>{const s=e._ctx;for(const r in e){if(wp(r))continue;const i=e[r];if(de(i))t[r]=dy(r,i,s);else if(i!=null){R(`Non-function value encountered for slot "${r}". Prefer function slots for better performance.`);const l=wa(i);t[r]=()=>l}}},Ap=(e,t)=>{_a(e.vnode)||R("Non-function value encountered for default slot. Prefer function slots for better performance.");const n=wa(t);e.slots.default=()=>n},py=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=he(t),Br(t,"_",n)):kp(t,e.slots={})}else e.slots={},t&&Ap(e,t);Br(e.slots,hi,1)},fy=(e,t,n)=>{const{vnode:s,slots:r}=e;let i=!0,l=Le;if(s.shapeFlag&32){const a=t._;a?Pn?(qe(r,t),ln(e,"set","$slots")):n&&a===1?i=!1:(qe(r,t),!n&&a===1&&delete r._):(i=!t.$stable,kp(t,r)),l=t}else t&&(Ap(e,t),l={default:1});if(i)for(const a in r)!wp(a)&&!(a in l)&&delete r[a]};function hl(e,t,n,s,r=!1){if(ie(e)){e.forEach((f,h)=>hl(f,t&&(ie(t)?t[h]:t),n,s,r));return}if(Ls(s)&&!r)return;const i=s.shapeFlag&4?mi(s.component)||s.component.proxy:s.el,l=r?null:i,{i:a,r:c}=e;if(!a){R("Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function.");return}const u=t&&t.r,d=a.refs===Le?a.refs={}:a.refs,p=a.setupState;if(u!=null&&u!==c&&(je(u)?(d[u]=null,Se(p,u)&&(p[u]=null)):$e(u)&&(u.value=null)),de(c))_n(c,a,12,[l,d]);else{const f=je(c),h=$e(c);if(f||h){const y=()=>{if(e.f){const b=f?Se(p,c)?p[c]:d[c]:c.value;r?ie(b)&&ta(b,i):ie(b)?b.includes(i)||b.push(i):f?(d[c]=[i],Se(p,c)&&(p[c]=d[c])):(c.value=[i],e.k&&(d[e.k]=c.value))}else f?(d[c]=l,Se(p,c)&&(p[c]=l)):h?(c.value=l,e.k&&(d[e.k]=l)):R("Invalid template ref type:",c,`(${typeof c})`)};l?(y.id=-1,nt(y,n)):y()}else R("Invalid template ref type:",c,`(${typeof c})`)}}let Zs,Dn;function fn(e,t){e.appContext.config.performance&&jr()&&Dn.mark(`vue-${t}-${e.uid}`),b0(e,t,jr()?Dn.now():Date.now())}function hn(e,t){if(e.appContext.config.performance&&jr()){const n=`vue-${t}-${e.uid}`,s=n+":end";Dn.mark(s),Dn.measure(`<${yi(e,e.type)}> ${t}`,n,s),Dn.clearMarks(n),Dn.clearMarks(s)}x0(e,t,jr()?Dn.now():Date.now())}function jr(){return Zs!==void 0||(typeof window<"u"&&window.performance?(Zs=!0,Dn=window.performance):Zs=!1),Zs}function hy(){const e=[];if(e.length){const t=e.length>1;console.warn(`Feature flag${t?"s":""} ${e.join(", ")} ${t?"are":"is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`)}}const nt=F0;function my(e){return yy(e)}function yy(e,t){hy();const n=Dr();n.__VUE__=!0,Xd(n.__VUE_DEVTOOLS_GLOBAL_HOOK__,n);const{insert:s,remove:r,patchProp:i,createElement:l,createText:a,createComment:c,setText:u,setElementText:d,parentNode:p,nextSibling:f,setScopeId:h=bt,insertStaticContent:y}=e,b=(g,_,E,P=null,I=null,V=null,J=!1,W=null,G=Pn?!1:!!_.dynamicChildren)=>{if(g===_)return;g&&!ss(g,_)&&(P=Z(g),gt(g,I,V,!0),g=null),_.patchFlag===-2&&(G=!1,_.dynamicChildren=null);const{type:N,ref:oe,shapeFlag:se}=_;switch(N){case Qo:k(g,_,E,P);break;case lt:w(g,_,E,P);break;case kr:g==null?A(_,E,P,J):x(g,_,E,J);break;case Te:me(g,_,E,P,I,V,J,W,G);break;default:se&1?F(g,_,E,P,I,V,J,W,G):se&6?ve(g,_,E,P,I,V,J,W,G):se&64||se&128?N.process(g,_,E,P,I,V,J,W,G,te):R("Invalid VNode type:",N,`(${typeof N})`)}oe!=null&&I&&hl(oe,g&&g.ref,V,_||g,!_)},k=(g,_,E,P)=>{if(g==null)s(_.el=a(_.children),E,P);else{const I=_.el=g.el;_.children!==g.children&&u(I,_.children)}},w=(g,_,E,P)=>{g==null?s(_.el=c(_.children||""),E,P):_.el=g.el},A=(g,_,E,P)=>{[g.el,g.anchor]=y(g.children,_,E,P,g.el,g.anchor)},x=(g,_,E,P)=>{if(_.children!==g.children){const I=f(g.anchor);C(g),[_.el,_.anchor]=y(_.children,E,I,P)}else _.el=g.el,_.anchor=g.anchor},S=({el:g,anchor:_},E,P)=>{let I;for(;g&&g!==_;)I=f(g),s(g,E,P),g=I;s(_,E,P)},C=({el:g,anchor:_})=>{let E;for(;g&&g!==_;)E=f(g),r(g),g=E;r(_)},F=(g,_,E,P,I,V,J,W,G)=>{J=J||_.type==="svg",g==null?U(_,E,P,I,V,J,W,G):ne(g,_,I,V,J,W,G)},U=(g,_,E,P,I,V,J,W)=>{let G,N;const{type:oe,props:se,shapeFlag:ce,transition:fe,dirs:Ce}=g;if(G=g.el=l(g.type,V,se&&se.is,se),ce&8?d(G,g.children):ce&16&&q(g.children,G,null,P,I,V&&oe!=="foreignObject",J,W),Ce&&Yn(g,null,P,"created"),O(G,g,g.scopeId,J,P),se){for(const Me in se)Me!=="value"&&!br(Me)&&i(G,Me,null,se[Me],V,g.children,P,I,$);"value"in se&&i(G,"value",null,se.value),(N=se.onVnodeBeforeMount)&&Pt(N,P,g)}Object.defineProperty(G,"__vnode",{value:g,enumerable:!1}),Object.defineProperty(G,"__vueParentComponent",{value:P,enumerable:!1}),Ce&&Yn(g,null,P,"beforeMount");const Ne=(!I||I&&!I.pendingBranch)&&fe&&!fe.persisted;Ne&&fe.beforeEnter(G),s(G,_,E),((N=se&&se.onVnodeMounted)||Ne||Ce)&&nt(()=>{N&&Pt(N,P,g),Ne&&fe.enter(G),Ce&&Yn(g,null,P,"mounted")},I)},O=(g,_,E,P,I)=>{if(E&&h(g,E),P)for(let V=0;V<P.length;V++)h(g,P[V]);if(I){let V=I.subTree;if(V.patchFlag>0&&V.patchFlag&2048&&(V=rp(V.children)||V),_===V){const J=I.vnode;O(g,J,J.scopeId,J.slotScopeIds,I.parent)}}},q=(g,_,E,P,I,V,J,W,G=0)=>{for(let N=G;N<g.length;N++){const oe=g[N]=W?$n(g[N]):Ht(g[N]);b(null,oe,_,E,P,I,V,J,W)}},ne=(g,_,E,P,I,V,J)=>{const W=_.el=g.el;let{patchFlag:G,dynamicChildren:N,dirs:oe}=_;G|=g.patchFlag&16;const se=g.props||Le,ce=_.props||Le;let fe;E&&Qn(E,!1),(fe=ce.onVnodeBeforeUpdate)&&Pt(fe,E,_,g),oe&&Yn(_,g,E,"beforeUpdate"),E&&Qn(E,!0),Pn&&(G=0,J=!1,N=null);const Ce=I&&_.type!=="foreignObject";if(N?(ue(g.dynamicChildren,N,W,E,P,Ce,V),Wr(g,_)):J||Ae(g,_,W,null,E,P,Ce,V,!1),G>0){if(G&16)Q(W,_,se,ce,E,P,I);else if(G&2&&se.class!==ce.class&&i(W,"class",null,ce.class,I),G&4&&i(W,"style",se.style,ce.style,I),G&8){const Ne=_.dynamicProps;for(let Me=0;Me<Ne.length;Me++){const ze=Ne[Me],qt=se[ze],Fs=ce[ze];(Fs!==qt||ze==="value")&&i(W,ze,qt,Fs,I,g.children,E,P,$)}}G&1&&g.children!==_.children&&d(W,_.children)}else!J&&N==null&&Q(W,_,se,ce,E,P,I);((fe=ce.onVnodeUpdated)||oe)&&nt(()=>{fe&&Pt(fe,E,_,g),oe&&Yn(_,g,E,"updated")},P)},ue=(g,_,E,P,I,V,J)=>{for(let W=0;W<_.length;W++){const G=g[W],N=_[W],oe=G.el&&(G.type===Te||!ss(G,N)||G.shapeFlag&70)?p(G.el):E;b(G,N,oe,null,P,I,V,J,!0)}},Q=(g,_,E,P,I,V,J)=>{if(E!==P){if(E!==Le)for(const W in E)!br(W)&&!(W in P)&&i(g,W,E[W],null,J,_.children,I,V,$);for(const W in P){if(br(W))continue;const G=P[W],N=E[W];G!==N&&W!=="value"&&i(g,W,N,G,J,_.children,I,V,$)}"value"in P&&i(g,"value",E.value,P.value)}},me=(g,_,E,P,I,V,J,W,G)=>{const N=_.el=g?g.el:a(""),oe=_.anchor=g?g.anchor:a("");let{patchFlag:se,dynamicChildren:ce,slotScopeIds:fe}=_;(Pn||se&2048)&&(se=0,G=!1,ce=null),fe&&(W=W?W.concat(fe):fe),g==null?(s(N,E,P),s(oe,E,P),q(_.children,E,oe,I,V,J,W,G)):se>0&&se&64&&ce&&g.dynamicChildren?(ue(g.dynamicChildren,ce,E,I,V,J,W),Wr(g,_)):Ae(g,_,E,oe,I,V,J,W,G)},ve=(g,_,E,P,I,V,J,W,G)=>{_.slotScopeIds=W,g==null?_.shapeFlag&512?I.ctx.activate(_,E,P,J,G):be(_,E,P,I,V,J,G):Pe(g,_,G)},be=(g,_,E,P,I,V,J)=>{const W=g.component=Ey(g,P,I);if(W.type.__hmrId&&p0(W),xr(g),fn(W,"mount"),_a(g)&&(W.ctx.renderer=te),fn(W,"init"),Fy(W),hn(W,"init"),W.asyncDep){if(I&&I.registerDep(W,ee),!g.el){const G=W.subTree=H(lt);w(null,G,_,E)}return}ee(W,g,_,E,I,V,J),wr(),hn(W,"mount")},Pe=(g,_,E)=>{const P=_.component=g.component;if(E0(g,_,E))if(P.asyncDep&&!P.asyncResolved){xr(_),ae(P,_,E),wr();return}else P.next=_,u0(P.update),P.update();else _.el=g.el,P.vnode=_},ee=(g,_,E,P,I,V,J)=>{const W=()=>{if(g.isMounted){let{next:oe,bu:se,u:ce,parent:fe,vnode:Ce}=g,Ne=oe,Me;xr(oe||g.vnode),Qn(g,!1),oe?(oe.el=Ce.el,ae(g,oe,J)):oe=Ce,se&&ns(se),(Me=oe.props&&oe.props.onVnodeBeforeUpdate)&&Pt(Me,fe,oe,Ce),Qn(g,!0),fn(g,"render");const ze=ki(g);hn(g,"render");const qt=g.subTree;g.subTree=ze,fn(g,"patch"),b(qt,ze,p(qt.el),Z(qt),g,I,V),hn(g,"patch"),oe.el=ze.el,Ne===null&&T0(g,ze.el),ce&&nt(ce,I),(Me=oe.props&&oe.props.onVnodeUpdated)&&nt(()=>Pt(Me,fe,oe,Ce),I),ep(g),wr()}else{let oe;const{el:se,props:ce}=_,{bm:fe,m:Ce,parent:Ne}=g,Me=Ls(_);if(Qn(g,!1),fe&&ns(fe),!Me&&(oe=ce&&ce.onVnodeBeforeMount)&&Pt(oe,Ne,_),Qn(g,!0),se&&Ue){const ze=()=>{fn(g,"render"),g.subTree=ki(g),hn(g,"render"),fn(g,"hydrate"),Ue(se,g.subTree,g,I,null),hn(g,"hydrate")};Me?_.type.__asyncLoader().then(()=>!g.isUnmounted&&ze()):ze()}else{fn(g,"render");const ze=g.subTree=ki(g);hn(g,"render"),fn(g,"patch"),b(null,ze,E,P,g,I,V),hn(g,"patch"),_.el=ze.el}if(Ce&&nt(Ce,I),!Me&&(oe=ce&&ce.onVnodeMounted)){const ze=_;nt(()=>Pt(oe,Ne,ze),I)}(_.shapeFlag&256||Ne&&Ls(Ne.vnode)&&Ne.vnode.shapeFlag&256)&&g.a&&nt(g.a,I),g.isMounted=!0,rl(g),_=E=P=null}},G=g.effect=new aa(W,()=>ai(N),g.scope),N=g.update=()=>G.run();N.id=g.uid,Qn(g,!0),G.onTrack=g.rtc?oe=>ns(g.rtc,oe):void 0,G.onTrigger=g.rtg?oe=>ns(g.rtg,oe):void 0,N.ownerInstance=g,N()},ae=(g,_,E)=>{_.component=g;const P=g.vnode.props;g.vnode=_,g.next=null,ry(g,_.props,P,E),fy(g,_.children,E),ks(),uc(),As()},Ae=(g,_,E,P,I,V,J,W,G=!1)=>{const N=g&&g.children,oe=g?g.shapeFlag:0,se=_.children,{patchFlag:ce,shapeFlag:fe}=_;if(ce>0){if(ce&128){Dt(N,se,E,P,I,V,J,W,G);return}else if(ce&256){Ie(N,se,E,P,I,V,J,W,G);return}}fe&8?(oe&16&&$(N,I,V),se!==N&&d(E,se)):oe&16?fe&16?Dt(N,se,E,P,I,V,J,W,G):$(N,I,V,!0):(oe&8&&d(E,""),fe&16&&q(se,E,P,I,V,J,W,G))},Ie=(g,_,E,P,I,V,J,W,G)=>{g=g||Us,_=_||Us;const N=g.length,oe=_.length,se=Math.min(N,oe);let ce;for(ce=0;ce<se;ce++){const fe=_[ce]=G?$n(_[ce]):Ht(_[ce]);b(g[ce],fe,E,null,I,V,J,W,G)}N>oe?$(g,I,V,!0,!1,se):q(_,E,P,I,V,J,W,G,se)},Dt=(g,_,E,P,I,V,J,W,G)=>{let N=0;const oe=_.length;let se=g.length-1,ce=oe-1;for(;N<=se&&N<=ce;){const fe=g[N],Ce=_[N]=G?$n(_[N]):Ht(_[N]);if(ss(fe,Ce))b(fe,Ce,E,null,I,V,J,W,G);else break;N++}for(;N<=se&&N<=ce;){const fe=g[se],Ce=_[ce]=G?$n(_[ce]):Ht(_[ce]);if(ss(fe,Ce))b(fe,Ce,E,null,I,V,J,W,G);else break;se--,ce--}if(N>se){if(N<=ce){const fe=ce+1,Ce=fe<oe?_[fe].el:P;for(;N<=ce;)b(null,_[N]=G?$n(_[N]):Ht(_[N]),E,Ce,I,V,J,W,G),N++}}else if(N>ce)for(;N<=se;)gt(g[N],I,V,!0),N++;else{const fe=N,Ce=N,Ne=new Map;for(N=Ce;N<=ce;N++){const ut=_[N]=G?$n(_[N]):Ht(_[N]);ut.key!=null&&(Ne.has(ut.key)&&R("Duplicate keys found during update:",JSON.stringify(ut.key),"Make sure keys are unique."),Ne.set(ut.key,N))}let Me,ze=0;const qt=ce-Ce+1;let Fs=!1,Xa=0;const Qs=new Array(qt);for(N=0;N<qt;N++)Qs[N]=0;for(N=fe;N<=se;N++){const ut=g[N];if(ze>=qt){gt(ut,I,V,!0);continue}let Jt;if(ut.key!=null)Jt=Ne.get(ut.key);else for(Me=Ce;Me<=ce;Me++)if(Qs[Me-Ce]===0&&ss(ut,_[Me])){Jt=Me;break}Jt===void 0?gt(ut,I,V,!0):(Qs[Jt-Ce]=N+1,Jt>=Xa?Xa=Jt:Fs=!0,b(ut,_[Jt],E,null,I,V,J,W,G),ze++)}const ec=Fs?gy(Qs):Us;for(Me=ec.length-1,N=qt-1;N>=0;N--){const ut=Ce+N,Jt=_[ut],tc=ut+1<oe?_[ut+1].el:P;Qs[N]===0?b(null,Jt,E,tc,I,V,J,W,G):Fs&&(Me<0||N!==ec[Me]?st(Jt,E,tc,2):Me--)}}},st=(g,_,E,P,I=null)=>{const{el:V,type:J,transition:W,children:G,shapeFlag:N}=g;if(N&6){st(g.component.subTree,_,E,P);return}if(N&128){g.suspense.move(_,E,P);return}if(N&64){J.move(g,_,E,te);return}if(J===Te){s(V,_,E);for(let se=0;se<G.length;se++)st(G[se],_,E,P);s(g.anchor,_,E);return}if(J===kr){S(g,_,E);return}if(P!==2&&N&1&&W)if(P===0)W.beforeEnter(V),s(V,_,E),nt(()=>W.enter(V),I);else{const{leave:se,delayLeave:ce,afterLeave:fe}=W,Ce=()=>s(V,_,E),Ne=()=>{se(V,()=>{Ce(),fe&&fe()})};ce?ce(V,Ce,Ne):Ne()}else s(V,_,E)},gt=(g,_,E,P=!1,I=!1)=>{const{type:V,props:J,ref:W,children:G,dynamicChildren:N,shapeFlag:oe,patchFlag:se,dirs:ce}=g;if(W!=null&&hl(W,null,E,g,!0),oe&256){_.ctx.deactivate(g);return}const fe=oe&1&&ce,Ce=!Ls(g);let Ne;if(Ce&&(Ne=J&&J.onVnodeBeforeUnmount)&&Pt(Ne,_,g),oe&6)Ot(g.component,E,P);else{if(oe&128){g.suspense.unmount(E,P);return}fe&&Yn(g,null,_,"beforeUnmount"),oe&64?g.type.remove(g,_,E,I,te,P):N&&(V!==Te||se>0&&se&64)?$(N,_,E,!1,!0):(V===Te&&se&384||!I&&oe&16)&&$(G,_,E),P&&Zt(g)}(Ce&&(Ne=J&&J.onVnodeUnmounted)||fe)&&nt(()=>{Ne&&Pt(Ne,_,g),fe&&Yn(g,null,_,"unmounted")},E)},Zt=g=>{const{type:_,el:E,anchor:P,transition:I}=g;if(_===Te){g.patchFlag>0&&g.patchFlag&2048&&I&&!I.persisted?g.children.forEach(J=>{J.type===lt?r(J.el):Zt(J)}):Gn(E,P);return}if(_===kr){C(g);return}const V=()=>{r(E),I&&!I.persisted&&I.afterLeave&&I.afterLeave()};if(g.shapeFlag&1&&I&&!I.persisted){const{leave:J,delayLeave:W}=I,G=()=>J(E,V);W?W(g.el,V,G):G()}else V()},Gn=(g,_)=>{let E;for(;g!==_;)E=f(g),r(g),g=E;r(_)},Ot=(g,_,E)=>{g.type.__hmrId&&f0(g);const{bum:P,scope:I,update:V,subTree:J,um:W}=g;P&&ns(P),I.stop(),V&&(V.active=!1,gt(J,g,_,E)),W&&nt(W,_),nt(()=>{g.isUnmounted=!0},_),_&&_.pendingBranch&&!_.isUnmounted&&g.asyncDep&&!g.asyncResolved&&g.suspenseId===_.pendingId&&(_.deps--,_.deps===0&&_.resolve()),_0(g)},$=(g,_,E,P=!1,I=!1,V=0)=>{for(let J=V;J<g.length;J++)gt(g[J],_,E,P,I)},Z=g=>g.shapeFlag&6?Z(g.component.subTree):g.shapeFlag&128?g.suspense.next():f(g.anchor||g.el),X=(g,_,E)=>{g==null?_._vnode&&gt(_._vnode,null,null,!0):b(_._vnode||null,g,_,null,null,null,E),uc(),Qd(),_._vnode=g},te={p:b,um:gt,m:st,r:Zt,mt:be,mc:q,pc:Ae,pbc:ue,n:Z,o:e};let we,Ue;return t&&([we,Ue]=t(te)),{render:X,hydrate:we,createApp:ny(X,we)}}function Qn({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Wr(e,t,n=!1){const s=e.children,r=t.children;if(ie(s)&&ie(r))for(let i=0;i<s.length;i++){const l=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=$n(r[i]),a.el=l.el),n||Wr(l,a)),a.type===Qo&&(a.el=l.el),a.type===lt&&!a.el&&(a.el=l.el)}}function gy(e){const t=e.slice(),n=[0];let s,r,i,l,a;const c=e.length;for(s=0;s<c;s++){const u=e[s];if(u!==0){if(r=n[n.length-1],e[r]<u){t[s]=r,n.push(s);continue}for(i=0,l=n.length-1;i<l;)a=i+l>>1,e[n[a]]<u?i=a+1:l=a;u<e[n[i]]&&(i>0&&(t[s]=n[i-1]),n[i]=s)}}for(i=n.length,l=n[i-1];i-- >0;)n[i]=l,l=t[l];return n}const vy=e=>e.__isTeleport,Rs=e=>e&&(e.disabled||e.disabled===""),Ac=e=>typeof SVGElement<"u"&&e instanceof SVGElement,ml=(e,t)=>{const n=e&&e.to;if(je(n))if(t){const s=t(n);return s||R(`Failed to locate Teleport target with selector "${n}". Note the target element must exist before the component is mounted - i.e. the target cannot be rendered by the component itself, and ideally should be outside of the entire Vue component tree.`),s}else return R("Current renderer does not support string target for Teleports. (missing querySelector renderer option)"),null;else return!n&&!Rs(e)&&R(`Invalid Teleport target: ${n}`),n},_y={__isTeleport:!0,process(e,t,n,s,r,i,l,a,c,u){const{mc:d,pc:p,pbc:f,o:{insert:h,querySelector:y,createText:b,createComment:k}}=u,w=Rs(t.props);let{shapeFlag:A,children:x,dynamicChildren:S}=t;if(Pn&&(c=!1,S=null),e==null){const C=t.el=k("teleport start"),F=t.anchor=k("teleport end");h(C,n,s),h(F,n,s);const U=t.target=ml(t.props,y),O=t.targetAnchor=b("");U?(h(O,U),l=l||Ac(U)):w||R("Invalid Teleport target on mount:",U,`(${typeof U})`);const q=(ne,ue)=>{A&16&&d(x,ne,ue,r,i,l,a,c)};w?q(n,F):U&&q(U,O)}else{t.el=e.el;const C=t.anchor=e.anchor,F=t.target=e.target,U=t.targetAnchor=e.targetAnchor,O=Rs(e.props),q=O?n:F,ne=O?C:U;if(l=l||Ac(F),S?(f(e.dynamicChildren,S,q,r,i,l,a),Wr(e,t,!0)):c||p(e,t,q,ne,r,i,l,a,!1),w)O||ar(t,n,C,u,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const ue=t.target=ml(t.props,y);ue?ar(t,ue,null,u,0):R("Invalid Teleport target on update:",F,`(${typeof F})`)}else O&&ar(t,F,U,u,1)}Sp(t)},remove(e,t,n,s,{um:r,o:{remove:i}},l){const{shapeFlag:a,children:c,anchor:u,targetAnchor:d,target:p,props:f}=e;if(p&&i(d),(l||!Rs(f))&&(i(u),a&16))for(let h=0;h<c.length;h++){const y=c[h];r(y,t,n,!0,!!y.dynamicChildren)}},move:ar,hydrate:by};function ar(e,t,n,{o:{insert:s},m:r},i=2){i===0&&s(e.targetAnchor,t,n);const{el:l,anchor:a,shapeFlag:c,children:u,props:d}=e,p=i===2;if(p&&s(l,t,n),(!p||Rs(d))&&c&16)for(let f=0;f<u.length;f++)r(u[f],t,n,2);p&&s(a,t,n)}function by(e,t,n,s,r,i,{o:{nextSibling:l,parentNode:a,querySelector:c}},u){const d=t.target=ml(t.props,c);if(d){const p=d._lpa||d.firstChild;if(t.shapeFlag&16)if(Rs(t.props))t.anchor=u(l(e),t,a(e),n,s,r,i),t.targetAnchor=p;else{t.anchor=l(e);let f=p;for(;f;)if(f=l(f),f&&f.nodeType===8&&f.data==="teleport anchor"){t.targetAnchor=f,d._lpa=t.targetAnchor&&l(t.targetAnchor);break}u(p,t,d,n,s,r,i)}Sp(t)}return t.anchor&&l(t.anchor)}const xy=_y;function Sp(e){const t=e.ctx;if(t&&t.ut){let n=e.children[0].el;for(;n!==e.targetAnchor;)n.nodeType===1&&n.setAttribute("data-v-owner",t.uid),n=n.nextSibling;t.ut()}}const Te=Symbol.for("v-fgt"),Qo=Symbol.for("v-txt"),lt=Symbol.for("v-cmt"),kr=Symbol.for("v-stc"),vo=[];let zt=null;function v(e=!1){vo.push(zt=e?null:[])}function wy(){vo.pop(),zt=vo[vo.length-1]||null}let Oo=1;function Sc(e){Oo+=e}function Cp(e){return e.dynamicChildren=Oo>0?zt||Us:null,wy(),Oo>0&&zt&&zt.push(e),e}function T(e,t,n,s,r,i){return Cp(o(e,t,n,s,r,i,!0))}function j(e,t,n,s,r){return Cp(H(e,t,n,s,r,!0))}function cn(e){return e?e.__v_isVNode===!0:!1}function ss(e,t){return t.shapeFlag&6&&Is.has(t.type)?(e.shapeFlag&=-257,t.shapeFlag&=-513,!1):e.type===t.type&&e.key===t.key}const ky=(...e)=>Ay(...e),hi="__vInternal",Ep=({key:e})=>e??null,Ar=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?je(e)||$e(e)||de(e)?{i:Ze,r:e,k:t,f:!!n}:e:null);function o(e,t=null,n=null,s=0,r=null,i=e===Te?0:1,l=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Ep(t),ref:t&&Ar(t),scopeId:ui,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Ze};return a?(ka(c,n),i&128&&e.normalize(c)):n&&(c.shapeFlag|=je(n)?8:16),c.key!==c.key&&R("VNode created with invalid key (NaN). VNode type:",c.type),Oo>0&&!l&&zt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&zt.push(c),c}const H=ky;function Ay(e,t=null,n=null,s=0,r=null,i=!1){if((!e||e===W0)&&(e||R(`Invalid vnode type when creating vnode: ${e}.`),e=lt),cn(e)){const a=un(e,t,!0);return n&&ka(a,n),Oo>0&&!i&&zt&&(a.shapeFlag&6?zt[zt.indexOf(e)]=a:zt.push(a)),a.patchFlag|=-2,a}if(Dp(e)&&(e=e.__vccOpts),t){t=re(t);let{class:a,style:c}=t;a&&!je(a)&&(t.class=Re(a)),Be(c)&&(Ur(c)&&!ie(c)&&(c=qe({},c)),t.style=Xe(c))}const l=je(e)?1:ip(e)?128:vy(e)?64:Be(e)?4:de(e)?2:0;return l&4&&Ur(e)&&(e=he(e),R("Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",`
Component that was made reactive: `,e)),o(e,t,n,s,r,l,i,!0)}function re(e){return e?Ur(e)||hi in e?qe({},e):e:null}function un(e,t,n=!1){const{props:s,ref:r,patchFlag:i,children:l}=e,a=t?mt(s||{},t):s;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:a,key:a&&Ep(a),ref:t&&t.ref?n&&r?ie(r)?r.concat(Ar(t)):[r,Ar(t)]:Ar(t):r,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:i===-1&&ie(l)?l.map(Tp):l,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Te?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&un(e.ssContent),ssFallback:e.ssFallback&&un(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function Tp(e){const t=un(e);return ie(e.children)&&(t.children=e.children.map(Tp)),t}function m(e=" ",t=0){return H(Qo,null,e,t)}function ye(e="",t=!1){return t?(v(),j(lt,null,e)):H(lt,null,e)}function Ht(e){return e==null||typeof e=="boolean"?H(lt):ie(e)?H(Te,null,e.slice()):typeof e=="object"?$n(e):H(Qo,null,String(e))}function $n(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:un(e)}function ka(e,t){let n=0;const{shapeFlag:s}=e;if(t==null)t=null;else if(ie(t))n=16;else if(typeof t=="object")if(s&65){const r=t.default;r&&(r._c&&(r._d=!1),ka(e,r()),r._c&&(r._d=!0));return}else{n=32;const r=t._;!r&&!(hi in t)?t._ctx=Ze:r===3&&Ze&&(Ze.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else de(t)?(t={default:t,_ctx:Ze},n=32):(t=String(t),s&64?(n=16,t=[m(t)]):n=8);e.children=t,e.shapeFlag|=n}function mt(...e){const t={};for(let n=0;n<e.length;n++){const s=e[n];for(const r in s)if(r==="class")t.class!==s.class&&(t.class=Re([t.class,s.class]));else if(r==="style")t.style=Xe([t.style,s.style]);else if(zo(r)){const i=t[r],l=s[r];l&&i!==l&&!(ie(i)&&i.includes(l))&&(t[r]=i?[].concat(i,l):l)}else r!==""&&(t[r]=s[r])}return t}function Pt(e,t,n,s=null){Lt(e,t,7,[n,s])}const Sy=vp();let Cy=0;function Ey(e,t,n){const s=e.type,r=(t?t.appContext:e.appContext)||Sy,i={uid:Cy++,vnode:e,type:s,parent:t,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Td(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:bp(s,r),emitsOptions:np(s,r),emit:null,emitted:null,propsDefaults:Le,inheritAttrs:s.inheritAttrs,ctx:Le,data:Le,props:Le,attrs:Le,slots:Le,refs:Le,setupState:Le,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx=H0(i),i.root=t?t.root:i,i.emit=k0.bind(null,i),e.ce&&e.ce(i),i}let Qe=null;const Bt=()=>Qe||Ze;let Aa,$s,Cc="__VUE_INSTANCE_SETTERS__";($s=Dr()[Cc])||($s=Dr()[Cc]=[]),$s.push(e=>Qe=e),Aa=e=>{$s.length>1?$s.forEach(t=>t(e)):$s[0](e)};const js=e=>{Aa(e),e.scope.on()},gs=()=>{Qe&&Qe.scope.off(),Aa(null)},Ty=Vn("slot,component");function yl(e,t){const n=t.isNativeTag||xd;(Ty(e)||n(e))&&R("Do not use built-in or reserved HTML elements as component id: "+e)}function Fp(e){return e.vnode.shapeFlag&4}let Io=!1;function Fy(e,t=!1){Io=t;const{props:n,children:s}=e.vnode,r=Fp(e);sy(e,n,r,t),py(e,s);const i=r?$y(e,t):void 0;return Io=!1,i}function $y(e,t){var n;const s=e.type;{if(s.name&&yl(s.name,e.appContext.config),s.components){const i=Object.keys(s.components);for(let l=0;l<i.length;l++)yl(i[l],e.appContext.config)}if(s.directives){const i=Object.keys(s.directives);for(let l=0;l<i.length;l++)ap(i[l])}s.compilerOptions&&By()&&R('"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.')}e.accessCache=Object.create(null),e.proxy=ii(new Proxy(e.ctx,yp)),V0(e);const{setup:r}=s;if(r){const i=e.setupContext=r.length>1?Bp(e):null;js(e),ks();const l=_n(r,e,0,[uo(e.props),i]);if(As(),gs(),sa(l)){if(l.then(gs,gs),t)return l.then(a=>{Ec(e,a,t)}).catch(a=>{li(a,e,0)});if(e.asyncDep=l,!e.suspense){const a=(n=s.name)!=null?n:"Anonymous";R(`Component <${a}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`)}}else Ec(e,l,t)}else $p(e,t)}function Ec(e,t,n){de(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Be(t)?(cn(t)&&R("setup() should not return VNodes directly - return a render function instead."),e.devtoolsRawSetupState=t,e.setupState=Hd(t),z0(e)):t!==void 0&&R(`setup() should return an object. Received: ${t===null?"null":typeof t}`),$p(e,n)}let gl;const By=()=>!gl;function $p(e,t,n){const s=e.type;if(!e.render){if(!t&&gl&&!s.render){const r=s.template||xa(e).template;if(r){fn(e,"compile");const{isCustomElement:i,compilerOptions:l}=e.appContext.config,{delimiters:a,compilerOptions:c}=s,u=qe(qe({isCustomElement:i,delimiters:a},l),c);s.render=gl(r,u),hn(e,"compile")}}e.render=s.render||bt}js(e),ks(),Q0(e),As(),gs(),!s.render&&e.render===bt&&!t&&(s.template?R('Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'):R("Component is missing template or render function."))}function Dy(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,n){return Lr(),ct(e,"get","$attrs"),t[n]},set(){return R("setupContext.attrs is readonly."),!1},deleteProperty(){return R("setupContext.attrs is readonly."),!1}}))}function Oy(e){return e.slotsProxy||(e.slotsProxy=new Proxy(e.slots,{get(t,n){return ct(e,"get","$slots"),t[n]}}))}function Bp(e){return Object.freeze({get attrs(){return Dy(e)},get slots(){return Oy(e)},get emit(){return(n,...s)=>e.emit(n,...s)},expose:n=>{if(e.exposed&&R("expose() should be called only once per setup()."),n!=null){let s=typeof n;s==="object"&&(ie(n)?s="array":$e(n)&&(s="ref")),s!=="object"&&R(`expose() should be passed a plain object, received ${s}.`)}e.exposed=n||{}}})}function mi(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Hd(ii(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in ys)return ys[n](e)},has(t,n){return n in t||n in ys}}))}const Iy=/(?:^|[-_])(\w)/g,Py=e=>e.replace(Iy,t=>t.toUpperCase()).replace(/[-_]/g,"");function Po(e,t=!0){return de(e)?e.displayName||e.name:e.name||t&&e.__name}function yi(e,t,n=!1){let s=Po(t);if(!s&&t.__file){const r=t.__file.match(/([^/\\]+)\.\w+$/);r&&(s=r[1])}if(!s&&e&&e.parent){const r=i=>{for(const l in i)if(i[l]===t)return l};s=r(e.components||e.parent.type.components)||r(e.appContext.components)}return s?Py(s):n?"App":"Anonymous"}function Dp(e){return de(e)&&"__vccOpts"in e}const D=(e,t)=>t0(e,t,Io);function Je(e,t,n){const s=arguments.length;return s===2?Be(t)&&!ie(t)?cn(t)?H(e,null,[t]):H(e,t):H(e,null,t):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&cn(n)&&(n=[n]),H(e,t,n))}const Uy=Symbol.for("v-scx"),My=()=>{{const e=L(Uy);return e||R("Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."),e}};function Ei(e){return!!(e&&e.__v_isShallow)}function Ly(){if(typeof window>"u")return;const e={style:"color:#3ba776"},t={style:"color:#0b1bc9"},n={style:"color:#b62e24"},s={style:"color:#9d288c"},r={header(p){return Be(p)?p.__isVue?["div",e,"VueInstance"]:$e(p)?["div",{},["span",e,d(p)],"<",a(p.value),">"]:hs(p)?["div",{},["span",e,Ei(p)?"ShallowReactive":"Reactive"],"<",a(p),`>${Wn(p)?" (readonly)":""}`]:Wn(p)?["div",{},["span",e,Ei(p)?"ShallowReadonly":"Readonly"],"<",a(p),">"]:null:null},hasBody(p){return p&&p.__isVue},body(p){if(p&&p.__isVue)return["div",{},...i(p.$)]}};function i(p){const f=[];p.type.props&&p.props&&f.push(l("props",he(p.props))),p.setupState!==Le&&f.push(l("setup",p.setupState)),p.data!==Le&&f.push(l("data",he(p.data)));const h=c(p,"computed");h&&f.push(l("computed",h));const y=c(p,"inject");return y&&f.push(l("injected",y)),f.push(["div",{},["span",{style:s.style+";opacity:0.66"},"$ (internal): "],["object",{object:p}]]),f}function l(p,f){return f=qe({},f),Object.keys(f).length?["div",{style:"line-height:1.25em;margin-bottom:0.6em"},["div",{style:"color:#476582"},p],["div",{style:"padding-left:1.25em"},...Object.keys(f).map(h=>["div",{},["span",s,h+": "],a(f[h],!1)])]]:["span",{}]}function a(p,f=!0){return typeof p=="number"?["span",t,p]:typeof p=="string"?["span",n,JSON.stringify(p)]:typeof p=="boolean"?["span",s,p]:Be(p)?["object",{object:f?he(p):p}]:["span",n,String(p)]}function c(p,f){const h=p.type;if(de(h))return;const y={};for(const b in p.ctx)u(h,b,f)&&(y[b]=p.ctx[b]);return y}function u(p,f,h){const y=p[h];if(ie(y)&&y.includes(f)||Be(y)&&f in y||p.extends&&u(p.extends,f,h)||p.mixins&&p.mixins.some(b=>u(b,f,h)))return!0}function d(p){return Ei(p)?"ShallowRef":p.effect?"ComputedRef":"Ref"}window.devtoolsFormatters?window.devtoolsFormatters.push(r):window.devtoolsFormatters=[r]}const Hr="3.3.4",Ry="http://www.w3.org/2000/svg",os=typeof document<"u"?document:null,Tc=os&&os.createElement("template"),Ny={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,s)=>{const r=t?os.createElementNS(Ry,e):os.createElement(e,n?{is:n}:void 0);return e==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:e=>os.createTextNode(e),createComment:e=>os.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>os.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,s,r,i){const l=n?n.previousSibling:t.lastChild;if(r&&(r===i||r.nextSibling))for(;t.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{Tc.innerHTML=s?`<svg>${e}</svg>`:e;const a=Tc.content;if(s){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}t.insertBefore(a,n)}return[l?l.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function qy(e,t,n){const s=e._vtc;s&&(t=(t?[t,...s]:[...s]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function jy(e,t,n){const s=e.style,r=je(n);if(n&&!r){if(t&&!je(t))for(const i in t)n[i]==null&&vl(s,i,"");for(const i in n)vl(s,i,n[i])}else{const i=s.display;r?t!==n&&(s.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(s.display=i)}}const Wy=/[^\\];\s*$/,Fc=/\s*!important$/;function vl(e,t,n){if(ie(n))n.forEach(s=>vl(e,t,s));else if(n==null&&(n=""),Wy.test(n)&&R(`Unexpected semicolon at the end of '${t}' style value: '${n}'`),t.startsWith("--"))e.setProperty(t,n);else{const s=Hy(e,t);Fc.test(n)?e.setProperty(xn(s),n.replace(Fc,""),"important"):e[s]=n}}const $c=["Webkit","Moz","ms"],Ti={};function Hy(e,t){const n=Ti[t];if(n)return n;let s=rn(t);if(s!=="filter"&&s in e)return Ti[t]=s;s=bs(s);for(let r=0;r<$c.length;r++){const i=$c[r]+s;if(i in e)return Ti[t]=i}return t}const Bc="http://www.w3.org/1999/xlink";function Vy(e,t,n,s,r){if(s&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(Bc,t.slice(6,t.length)):e.setAttributeNS(Bc,t,n);else{const i=mm(t);n==null||i&&!Cd(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function zy(e,t,n,s,r,i,l){if(t==="innerHTML"||t==="textContent"){s&&l(s,r,i),e[t]=n??"";return}const a=e.tagName;if(t==="value"&&a!=="PROGRESS"&&!a.includes("-")){e._value=n;const u=a==="OPTION"?e.getAttribute("value"):e.value,d=n??"";u!==d&&(e.value=d),n==null&&e.removeAttribute(t);return}let c=!1;if(n===""||n==null){const u=typeof e[t];u==="boolean"?n=Cd(n):n==null&&u==="string"?(n="",c=!0):u==="number"&&(n=0,c=!0)}try{e[t]=n}catch(u){c||R(`Failed setting prop "${t}" on <${a.toLowerCase()}>: value ${n} is invalid.`,u)}c&&e.removeAttribute(t)}function Ky(e,t,n,s){e.addEventListener(t,n,s)}function Gy(e,t,n,s){e.removeEventListener(t,n,s)}function Yy(e,t,n,s,r=null){const i=e._vei||(e._vei={}),l=i[t];if(s&&l)l.value=s;else{const[a,c]=Qy(t);if(s){const u=i[t]=Xy(s,r);Ky(e,a,u,c)}else l&&(Gy(e,a,l,c),i[t]=void 0)}}const Dc=/(?:Once|Passive|Capture)$/;function Qy(e){let t;if(Dc.test(e)){t={};let s;for(;s=e.match(Dc);)e=e.slice(0,e.length-s[0].length),t[s[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):xn(e.slice(2)),t]}let Fi=0;const Zy=Promise.resolve(),Jy=()=>Fi||(Zy.then(()=>Fi=0),Fi=Date.now());function Xy(e,t){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Lt(eg(s,n.value),t,5,[s])};return n.value=e,n.attached=Jy(),n}function eg(e,t){if(ie(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(s=>r=>!r._stopped&&s&&s(r))}else return t}const Oc=/^on[a-z]/,tg=(e,t,n,s,r=!1,i,l,a,c)=>{t==="class"?qy(e,s,r):t==="style"?jy(e,n,s):zo(t)?$r(t)||Yy(e,t,n,s,l):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):ng(e,t,s,r))?zy(e,t,s,i,l,a,c):(t==="true-value"?e._trueValue=s:t==="false-value"&&(e._falseValue=s),Vy(e,t,s,r))};function ng(e,t,n,s){return s?!!(t==="innerHTML"||t==="textContent"||t in e&&Oc.test(t)&&de(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Oc.test(t)&&je(n)?!1:t in e}const Cn="transition",Js="animation",Op={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},sg=qe({},D0,Op),Zn=(e,t=[])=>{ie(e)?e.forEach(n=>n(...t)):e&&e(...t)},Ic=e=>e?ie(e)?e.some(t=>t.length>1):e.length>1:!1;function og(e){const t={};for(const Q in e)Q in Op||(t[Q]=e[Q]);if(e.css===!1)return t;const{name:n="v",type:s,duration:r,enterFromClass:i=`${n}-enter-from`,enterActiveClass:l=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:c=i,appearActiveClass:u=l,appearToClass:d=a,leaveFromClass:p=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:h=`${n}-leave-to`}=e,y=rg(r),b=y&&y[0],k=y&&y[1],{onBeforeEnter:w,onEnter:A,onEnterCancelled:x,onLeave:S,onLeaveCancelled:C,onBeforeAppear:F=w,onAppear:U=A,onAppearCancelled:O=x}=t,q=(Q,me,ve)=>{Tn(Q,me?d:a),Tn(Q,me?u:l),ve&&ve()},ne=(Q,me)=>{Q._isLeaving=!1,Tn(Q,p),Tn(Q,h),Tn(Q,f),me&&me()},ue=Q=>(me,ve)=>{const be=Q?U:A,Pe=()=>q(me,Q,ve);Zn(be,[me,Pe]),Pc(()=>{Tn(me,Q?c:i),mn(me,Q?d:a),Ic(be)||Uc(me,s,b,Pe)})};return qe(t,{onBeforeEnter(Q){Zn(w,[Q]),mn(Q,i),mn(Q,l)},onBeforeAppear(Q){Zn(F,[Q]),mn(Q,c),mn(Q,u)},onEnter:ue(!1),onAppear:ue(!0),onLeave(Q,me){Q._isLeaving=!0;const ve=()=>ne(Q,me);mn(Q,p),Pp(),mn(Q,f),Pc(()=>{Q._isLeaving&&(Tn(Q,p),mn(Q,h),Ic(S)||Uc(Q,s,k,ve))}),Zn(S,[Q,ve])},onEnterCancelled(Q){q(Q,!1),Zn(x,[Q])},onAppearCancelled(Q){q(Q,!0),Zn(O,[Q])},onLeaveCancelled(Q){ne(Q),Zn(C,[Q])}})}function rg(e){if(e==null)return null;if(Be(e))return[$i(e.enter),$i(e.leave)];{const t=$i(e);return[t,t]}}function $i(e){const t=im(e);return i0(t,"<transition> explicit duration"),t}function mn(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e._vtc||(e._vtc=new Set)).add(t)}function Tn(e,t){t.split(/\s+/).forEach(s=>s&&e.classList.remove(s));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function Pc(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let ig=0;function Uc(e,t,n,s){const r=e._endId=++ig,i=()=>{r===e._endId&&s()};if(n)return setTimeout(i,n);const{type:l,timeout:a,propCount:c}=Ip(e,t);if(!l)return s();const u=l+"end";let d=0;const p=()=>{e.removeEventListener(u,f),i()},f=h=>{h.target===e&&++d>=c&&p()};setTimeout(()=>{d<c&&p()},a+1),e.addEventListener(u,f)}function Ip(e,t){const n=window.getComputedStyle(e),s=y=>(n[y]||"").split(", "),r=s(`${Cn}Delay`),i=s(`${Cn}Duration`),l=Mc(r,i),a=s(`${Js}Delay`),c=s(`${Js}Duration`),u=Mc(a,c);let d=null,p=0,f=0;t===Cn?l>0&&(d=Cn,p=l,f=i.length):t===Js?u>0&&(d=Js,p=u,f=c.length):(p=Math.max(l,u),d=p>0?l>u?Cn:Js:null,f=d?d===Cn?i.length:c.length:0);const h=d===Cn&&/\b(transform|all)(,|$)/.test(s(`${Cn}Property`).toString());return{type:d,timeout:p,propCount:f,hasTransform:h}}function Mc(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,s)=>Lc(n)+Lc(e[s])))}function Lc(e){return Number(e.slice(0,-1).replace(",","."))*1e3}function Pp(){return document.body.offsetHeight}const Up=new WeakMap,Mp=new WeakMap,Lp={name:"TransitionGroup",props:qe({},sg,{tag:String,moveClass:String}),setup(e,{slots:t}){const n=Bt(),s=B0();let r,i;return pi(()=>{if(!r.length)return;const l=e.moveClass||`${e.name||"v"}-move`;if(!pg(r[0].el,n.vnode.el,l))return;r.forEach(cg),r.forEach(ug);const a=r.filter(dg);Pp(),a.forEach(c=>{const u=c.el,d=u.style;mn(u,l),d.transform=d.webkitTransform=d.transitionDuration="";const p=u._moveCb=f=>{f&&f.target!==u||(!f||/transform$/.test(f.propertyName))&&(u.removeEventListener("transitionend",p),u._moveCb=null,Tn(u,l))};u.addEventListener("transitionend",p)})}),()=>{const l=he(e),a=og(l);let c=l.tag||Te;r=i,i=t.default?cp(t.default()):[];for(let u=0;u<i.length;u++){const d=i[u];d.key!=null?Rr(d,ll(d,a,s,n)):R("<TransitionGroup> children must be keyed.")}if(r)for(let u=0;u<r.length;u++){const d=r[u];Rr(d,ll(d,a,s,n)),Up.set(d,d.el.getBoundingClientRect())}return H(c,null,i)}}},lg=e=>delete e.mode;Lp.props;const ag=Lp;function cg(e){const t=e.el;t._moveCb&&t._moveCb(),t._enterCb&&t._enterCb()}function ug(e){Mp.set(e,e.el.getBoundingClientRect())}function dg(e){const t=Up.get(e),n=Mp.get(e),s=t.left-n.left,r=t.top-n.top;if(s||r){const i=e.el.style;return i.transform=i.webkitTransform=`translate(${s}px,${r}px)`,i.transitionDuration="0s",e}}function pg(e,t,n){const s=e.cloneNode();e._vtc&&e._vtc.forEach(l=>{l.split(/\s+/).forEach(a=>a&&s.classList.remove(a))}),n.split(/\s+/).forEach(l=>l&&s.classList.add(l)),s.style.display="none";const r=t.nodeType===1?t:t.parentNode;r.appendChild(s);const{hasTransform:i}=Ip(s);return r.removeChild(s),i}const fg=["ctrl","shift","alt","meta"],hg={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>fg.some(n=>e[`${n}Key`]&&!t.includes(n))},mg=(e,t)=>(n,...s)=>{for(let r=0;r<t.length;r++){const i=hg[t[r]];if(i&&i(n,t))return}return e(n,...s)},yg={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},cr=(e,t)=>n=>{if(!("key"in n))return;const s=xn(n.key);if(t.some(r=>r===s||yg[r]===s))return e(n)},Rp={beforeMount(e,{value:t},{transition:n}){e._vod=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):Xs(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:s}){!t!=!n&&(s?t?(s.beforeEnter(e),Xs(e,!0),s.enter(e)):s.leave(e,()=>{Xs(e,!1)}):Xs(e,t))},beforeUnmount(e,{value:t}){Xs(e,t)}};function Xs(e,t){e.style.display=t?e._vod:"none"}const gg=qe({patchProp:tg},Ny);let Rc;function vg(){return Rc||(Rc=my(gg))}const _g=(...e)=>{const t=vg().createApp(...e);bg(t),xg(t);const{mount:n}=t;return t.mount=s=>{const r=wg(s);if(!r)return;const i=t._component;!de(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const l=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),l},t};function bg(e){Object.defineProperty(e.config,"isNativeTag",{value:t=>Sd(t)||fm(t),writable:!1})}function xg(e){{const t=e.config.isCustomElement;Object.defineProperty(e.config,"isCustomElement",{get(){return t},set(){R("The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead.")}});const n=e.config.compilerOptions,s='The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';Object.defineProperty(e.config,"compilerOptions",{get(){return R(s),n},set(){R(s)}})}}function wg(e){if(je(e)){const t=document.querySelector(e);return t||R(`Failed to mount app: mount target selector "${e}" returned null.`),t}return window.ShadowRoot&&e instanceof window.ShadowRoot&&e.mode==="closed"&&R('mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'),e}function kg(){Ly()}kg();function _l(e,t={},n){for(const s in e){const r=e[s],i=n?`${n}:${s}`:s;typeof r=="object"&&r!==null?_l(r,t,i):typeof r=="function"&&(t[i]=r)}return t}const Ag={run:e=>e()},Sg=()=>Ag,Np=typeof console.createTask<"u"?console.createTask:Sg;function Cg(e,t){const n=t.shift(),s=Np(n);return e.reduce((r,i)=>r.then(()=>s.run(()=>i(...t))),Promise.resolve())}function Eg(e,t){const n=t.shift(),s=Np(n);return Promise.all(e.map(r=>s.run(()=>r(...t))))}function Bi(e,t){for(const n of[...e])n(t)}class Tg{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(t,n,s={}){if(!t||typeof n!="function")return()=>{};const r=t;let i;for(;this._deprecatedHooks[t];)i=this._deprecatedHooks[t],t=i.to;if(i&&!s.allowDeprecated){let l=i.message;l||(l=`${r} hook has been deprecated`+(i.to?`, please use ${i.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(l)||(console.warn(l),this._deprecatedMessages.add(l))}if(!n.name)try{Object.defineProperty(n,"name",{get:()=>"_"+t.replace(/\W+/g,"_")+"_hook_cb",configurable:!0})}catch{}return this._hooks[t]=this._hooks[t]||[],this._hooks[t].push(n),()=>{n&&(this.removeHook(t,n),n=void 0)}}hookOnce(t,n){let s,r=(...i)=>(typeof s=="function"&&s(),s=void 0,r=void 0,n(...i));return s=this.hook(t,r),s}removeHook(t,n){if(this._hooks[t]){const s=this._hooks[t].indexOf(n);s!==-1&&this._hooks[t].splice(s,1),this._hooks[t].length===0&&delete this._hooks[t]}}deprecateHook(t,n){this._deprecatedHooks[t]=typeof n=="string"?{to:n}:n;const s=this._hooks[t]||[];delete this._hooks[t];for(const r of s)this.hook(t,r)}deprecateHooks(t){Object.assign(this._deprecatedHooks,t);for(const n in t)this.deprecateHook(n,t[n])}addHooks(t){const n=_l(t),s=Object.keys(n).map(r=>this.hook(r,n[r]));return()=>{for(const r of s.splice(0,s.length))r()}}removeHooks(t){const n=_l(t);for(const s in n)this.removeHook(s,n[s])}removeAllHooks(){for(const t in this._hooks)delete this._hooks[t]}callHook(t,...n){return n.unshift(t),this.callHookWith(Cg,t,...n)}callHookParallel(t,...n){return n.unshift(t),this.callHookWith(Eg,t,...n)}callHookWith(t,n,...s){const r=this._before||this._after?{name:n,args:s,context:{}}:void 0;this._before&&Bi(this._before,r);const i=t(n in this._hooks?[...this._hooks[n]]:[],s);return i instanceof Promise?i.finally(()=>{this._after&&r&&Bi(this._after,r)}):(this._after&&r&&Bi(this._after,r),i)}beforeEach(t){return this._before=this._before||[],this._before.push(t),()=>{if(this._before!==void 0){const n=this._before.indexOf(t);n!==-1&&this._before.splice(n,1)}}}afterEach(t){return this._after=this._after||[],this._after.push(t),()=>{if(this._after!==void 0){const n=this._after.indexOf(t);n!==-1&&this._after.splice(n,1)}}}}function Fg(){return new Tg}function $g(e){return Array.isArray(e)?e:[e]}const qp=["title","script","style","noscript"],jp=["base","meta","link","style","script","noscript"],Bg=["title","titleTemplate","templateParams","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"],Dg=["base","title","titleTemplate","bodyAttrs","htmlAttrs","templateParams"],Og=["tagPosition","tagPriority","tagDuplicateStrategy","innerHTML","textContent"];function Wp(e){let t=9;for(let n=0;n<e.length;)t=Math.imul(t^e.charCodeAt(n++),9**9);return((t^t>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function bl(e){return Wp(`${e.tag}:${e.textContent||e.innerHTML||""}:${Object.entries(e.props).map(([t,n])=>`${t}:${String(n)}`).join(",")}`)}function Ig(e){let t=9;for(const n of e)for(let s=0;s<n.length;)t=Math.imul(t^n.charCodeAt(s++),9**9);return((t^t>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function Hp(e,t){const{props:n,tag:s}=e;if(Dg.includes(s))return s;if(s==="link"&&n.rel==="canonical")return"canonical";if(n.charset)return"charset";const r=["id"];s==="meta"&&r.push("name","property","http-equiv");for(const i of r)if(typeof n[i]<"u"){const l=String(n[i]);return t&&!t(l)?!1:`${s}:${i}:${l}`}return!1}function Nc(e,t){return e==null?t||null:typeof e=="function"?e(t):e}function ur(e,t=!1,n){const{tag:s,$el:r}=e;r&&(Object.entries(s.props).forEach(([i,l])=>{l=String(l);const a=`attr:${i}`;if(i==="class"){if(!l)return;for(const c of l.split(" ")){const u=`${a}:${c}`;n&&n(e,u,()=>r.classList.remove(c)),r.classList.contains(c)||r.classList.add(c)}return}n&&!i.startsWith("data-h-")&&n(e,a,()=>r.removeAttribute(i)),(t||r.getAttribute(i)!==l)&&r.setAttribute(i,l)}),qp.includes(s.tag)&&(s.textContent&&s.textContent!==r.textContent?r.textContent=s.textContent:s.innerHTML&&s.innerHTML!==r.innerHTML&&(r.innerHTML=s.innerHTML)))}let eo=!1;async function Vp(e,t={}){var f,h;const n={shouldRender:!0};if(await e.hooks.callHook("dom:beforeRender",n),!n.shouldRender)return;const s=t.document||e.resolvedOptions.document||window.document,r=(await e.resolveTags()).map(a);if(e.resolvedOptions.experimentalHashHydration&&(eo=eo||e._hash||!1,eo)){const y=Ig(r.map(b=>b.tag._h));if(eo===y)return;eo=y}const i=e._popSideEffectQueue();e.headEntries().map(y=>y._sde).forEach(y=>{Object.entries(y).forEach(([b,k])=>{i[b]=k})});const l=(y,b,k)=>{b=`${y.renderId}:${b}`,y.entry&&(y.entry._sde[b]=k),delete i[b]};function a(y){const b=e.headEntries().find(w=>w._i===y._e),k={renderId:y._d||bl(y),$el:null,shouldRender:!0,tag:y,entry:b,markSideEffect:(w,A)=>l(k,w,A)};return k}const c=[],u={body:[],head:[]},d=y=>{e._elMap[y.renderId]=y.$el,c.push(y),l(y,"el",()=>{var b;(b=y.$el)==null||b.remove(),delete e._elMap[y.renderId]})};for(const y of r){if(await e.hooks.callHook("dom:beforeRenderTag",y),!y.shouldRender)continue;const{tag:b}=y;if(b.tag==="title"){s.title=b.textContent||"",c.push(y);continue}if(b.tag==="htmlAttrs"||b.tag==="bodyAttrs"){y.$el=s[b.tag==="htmlAttrs"?"documentElement":"body"],ur(y,!1,l),c.push(y);continue}if(y.$el=e._elMap[y.renderId],!y.$el&&b.key&&(y.$el=s.querySelector(`${(f=b.tagPosition)!=null&&f.startsWith("body")?"body":"head"} > ${b.tag}[data-h-${b._h}]`)),y.$el){y.tag._d&&ur(y),d(y);continue}u[(h=b.tagPosition)!=null&&h.startsWith("body")?"body":"head"].push(y)}const p={bodyClose:void 0,bodyOpen:void 0,head:void 0};Object.entries(u).forEach(([y,b])=>{var w;if(!b.length)return;const k=(w=s==null?void 0:s[y])==null?void 0:w.children;if(k){for(const A of[...k].reverse()){const x=A.tagName.toLowerCase();if(!jp.includes(x))continue;const S=A.getAttributeNames().reduce((O,q)=>({...O,[q]:A.getAttribute(q)}),{}),C={tag:x,props:S};A.innerHTML&&(C.innerHTML=A.innerHTML);const F=bl(C);let U=b.findIndex(O=>(O==null?void 0:O.renderId)===F);if(U===-1){const O=Hp(C);U=b.findIndex(q=>(q==null?void 0:q.tag._d)&&q.tag._d===O)}if(U!==-1){const O=b[U];O.$el=A,ur(O),d(O),delete b[U]}}b.forEach(A=>{const x=A.tag.tagPosition||"head";p[x]=p[x]||s.createDocumentFragment(),A.$el||(A.$el=s.createElement(A.tag.tag),ur(A,!0)),p[x].appendChild(A.$el),d(A)})}}),p.head&&s.head.appendChild(p.head),p.bodyOpen&&s.body.insertBefore(p.bodyOpen,s.body.firstChild),p.bodyClose&&s.body.appendChild(p.bodyClose);for(const y of c)await e.hooks.callHook("dom:renderTag",y);Object.values(i).forEach(y=>y())}let Di=null;async function zp(e,t={}){function n(){return Di=null,Vp(e,t)}const s=t.delayFn||(r=>setTimeout(r,10));return Di=Di||new Promise(r=>s(()=>r(n())))}function Pg(e){return{hooks:{"entries:updated":function(t){if(typeof(e==null?void 0:e.document)>"u"&&typeof window>"u")return;let n=e==null?void 0:e.delayFn;!n&&typeof requestAnimationFrame<"u"&&(n=requestAnimationFrame),zp(t,{document:(e==null?void 0:e.document)||window.document,delayFn:n})}}}}function Ug(e){var t;return((t=e==null?void 0:e.head.querySelector('meta[name="unhead:ssr"]'))==null?void 0:t.getAttribute("content"))||!1}const qc={critical:2,high:9,low:12,base:-1,title:1,meta:10};function jc(e){if(typeof e.tagPriority=="number")return e.tagPriority;if(e.tag==="meta"){if(e.props.charset)return-2;if(e.props["http-equiv"]==="content-security-policy")return 0}const t=e.tagPriority||e.tag;return t in qc?qc[t]:10}const Mg=[{prefix:"before:",offset:-1},{prefix:"after:",offset:1}];function Lg(){return{hooks:{"tags:resolve":e=>{const t=n=>{var s;return(s=e.tags.find(r=>r._d===n))==null?void 0:s._p};for(const{prefix:n,offset:s}of Mg)for(const r of e.tags.filter(i=>typeof i.tagPriority=="string"&&i.tagPriority.startsWith(n))){const i=t(r.tagPriority.replace(n,""));typeof i<"u"&&(r._p=i+s)}e.tags.sort((n,s)=>n._p-s._p).sort((n,s)=>jc(n)-jc(s))}}}}function Rg(){return{hooks:{"tags:resolve":e=>{const{tags:t}=e;let n=t.findIndex(r=>r.tag==="titleTemplate");const s=t.findIndex(r=>r.tag==="title");if(s!==-1&&n!==-1){const r=Nc(t[n].textContent,t[s].textContent);r!==null?t[s].textContent=r||t[s].textContent:delete t[s]}else if(n!==-1){const r=Nc(t[n].textContent);r!==null&&(t[n].textContent=r,t[n].tag="title",n=-1)}n!==-1&&delete t[n],e.tags=t.filter(Boolean)}}}}function Ng(){return{hooks:{"tag:normalise":function({tag:e}){typeof e.props.body<"u"&&(e.tagPosition="bodyClose",delete e.props.body)}}}}const qg=["link","style","script","noscript"];function jg(){return{hooks:{"tag:normalise":({tag:e,resolvedOptions:t})=>{t.experimentalHashHydration===!0&&(e._h=bl(e)),e.key&&qg.includes(e.tag)&&(e._h=Wp(e.key),e.props[`data-h-${e._h}`]="")}}}}const Wc=["script","link","bodyAttrs"];function Wg(){const e=(t,n)=>{const s={},r={};Object.entries(n.props).forEach(([l,a])=>{l.startsWith("on")&&typeof a=="function"?r[l]=a:s[l]=a});let i;return t==="dom"&&n.tag==="script"&&typeof s.src=="string"&&typeof r.onload<"u"&&(i=s.src,delete s.src),{props:s,eventHandlers:r,delayedSrc:i}};return{hooks:{"ssr:render":function(t){t.tags=t.tags.map(n=>(!Wc.includes(n.tag)||!Object.entries(n.props).find(([s,r])=>s.startsWith("on")&&typeof r=="function")||(n.props=e("ssr",n).props),n))},"dom:beforeRenderTag":function(t){if(!Wc.includes(t.tag.tag)||!Object.entries(t.tag.props).find(([i,l])=>i.startsWith("on")&&typeof l=="function"))return;const{props:n,eventHandlers:s,delayedSrc:r}=e("dom",t.tag);Object.keys(s).length&&(t.tag.props=n,t.tag._eventHandlers=s,t.tag._delayedSrc=r)},"dom:renderTag":function(t){const n=t.$el;if(!t.tag._eventHandlers||!n)return;const s=t.tag.tag==="bodyAttrs"&&typeof window<"u"?window:n;Object.entries(t.tag._eventHandlers).forEach(([r,i])=>{const l=`${t.tag._d||t.tag._p}:${r}`,a=r.slice(2).toLowerCase(),c=`data-h-${a}`;if(t.markSideEffect(l,()=>{}),n.hasAttribute(c))return;const u=i;n.setAttribute(c,""),s.addEventListener(a,u),t.entry&&(t.entry._sde[l]=()=>{s.removeEventListener(a,u),n.removeAttribute(c)})}),t.tag._delayedSrc&&n.setAttribute("src",t.tag._delayedSrc)}}}}const Hg=["templateParams","htmlAttrs","bodyAttrs"];function Vg(){return{hooks:{"tag:normalise":function({tag:e}){["hid","vmid","key"].forEach(s=>{e.props[s]&&(e.key=e.props[s],delete e.props[s])});const n=Hp(e)||(e.key?`${e.tag}:${e.key}`:!1);n&&(e._d=n)},"tags:resolve":function(e){const t={};e.tags.forEach(s=>{const r=(s.key?`${s.tag}:${s.key}`:s._d)||s._p,i=t[r];if(i){let a=s==null?void 0:s.tagDuplicateStrategy;if(!a&&Hg.includes(s.tag)&&(a="merge"),a==="merge"){const c=i.props;["class","style"].forEach(u=>{s.props[u]&&c[u]&&(u==="style"&&!c[u].endsWith(";")&&(c[u]+=";"),s.props[u]=`${c[u]} ${s.props[u]}`)}),t[r].props={...c,...s.props};return}else if(s._e===i._e){i._duped=i._duped||[],s._d=`${i._d}:${i._duped.length+1}`,i._duped.push(s);return}}const l=Object.keys(s.props).length+(s.innerHTML?1:0)+(s.textContent?1:0);if(jp.includes(s.tag)&&l===0){delete t[r];return}t[r]=s});const n=[];Object.values(t).forEach(s=>{const r=s._duped;delete s._duped,n.push(s),r&&n.push(...r)}),e.tags=n}}}}function dr(e,t){function n(i){if(["s","pageTitle"].includes(i))return t.pageTitle;let l;return i.includes(".")?l=i.split(".").reduce((a,c)=>a&&a[c]||void 0,t):l=t[i],typeof l<"u"?l||"":!1}let s=e;try{s=decodeURI(e)}catch{}return(s.match(/%(\w+\.+\w+)|%(\w+)/g)||[]).sort().reverse().forEach(i=>{const l=n(i.slice(1));typeof l=="string"&&(e=e.replace(new RegExp(`\\${i}(\\W|$)`,"g"),`${l}$1`).trim())}),t.separator&&(e.endsWith(t.separator)&&(e=e.slice(0,-t.separator.length).trim()),e.startsWith(t.separator)&&(e=e.slice(t.separator.length).trim()),e=e.replace(new RegExp(`\\${t.separator}\\s*\\${t.separator}`,"g"),t.separator)),e}function zg(){return{hooks:{"tags:resolve":e=>{var i;const{tags:t}=e,n=(i=t.find(l=>l.tag==="title"))==null?void 0:i.textContent,s=t.findIndex(l=>l.tag==="templateParams"),r=s!==-1?t[s].props:{};r.pageTitle=r.pageTitle||n||"";for(const l of t)if(["titleTemplate","title"].includes(l.tag)&&typeof l.textContent=="string")l.textContent=dr(l.textContent,r);else if(l.tag==="meta"&&typeof l.props.content=="string")l.props.content=dr(l.props.content,r);else if(l.tag==="link"&&typeof l.props.href=="string")l.props.href=dr(l.props.href,r);else if(l.tag==="script"&&["application/json","application/ld+json"].includes(l.props.type)&&typeof l.innerHTML=="string")try{l.innerHTML=JSON.stringify(JSON.parse(l.innerHTML),(a,c)=>typeof c=="string"?dr(c,r):c)}catch{}e.tags=t.filter(l=>l.tag!=="templateParams")}}}}const Kg=typeof window<"u";let Kp;function Gg(e){return Kp=e}function Yg(){return Kp}async function Qg(e,t){const n={tag:e,props:{}};return e==="templateParams"?(n.props=t,n):["title","titleTemplate"].includes(e)?(n.textContent=t instanceof Promise?await t:t,n):typeof t=="string"?["script","noscript","style"].includes(e)?(e==="script"&&(/^(https?:)?\/\//.test(t)||t.startsWith("/"))?n.props.src=t:n.innerHTML=t,n):!1:(n.props=await Jg(e,{...t}),n.props.children&&(n.props.innerHTML=n.props.children),delete n.props.children,Object.keys(n.props).filter(s=>Og.includes(s)).forEach(s=>{(!["innerHTML","textContent"].includes(s)||qp.includes(n.tag))&&(n[s]=n.props[s]),delete n.props[s]}),["innerHTML","textContent"].forEach(s=>{if(n.tag==="script"&&typeof n[s]=="string"&&["application/ld+json","application/json"].includes(n.props.type))try{n[s]=JSON.parse(n[s])}catch{n[s]=""}typeof n[s]=="object"&&(n[s]=JSON.stringify(n[s]))}),n.props.class&&(n.props.class=Zg(n.props.class)),n.props.content&&Array.isArray(n.props.content)?n.props.content.map(s=>({...n,props:{...n.props,content:s}})):n)}function Zg(e){return typeof e=="object"&&!Array.isArray(e)&&(e=Object.keys(e).filter(t=>e[t])),(Array.isArray(e)?e.join(" "):e).split(" ").filter(t=>t.trim()).filter(Boolean).join(" ")}async function Jg(e,t){for(const n of Object.keys(t)){const s=n.startsWith("data-");t[n]instanceof Promise&&(t[n]=await t[n]),String(t[n])==="true"?t[n]=s?"true":"":String(t[n])==="false"&&(s?t[n]="false":delete t[n])}return t}const Xg=10;async function e1(e){const t=[];return Object.entries(e.resolvedInput).filter(([n,s])=>typeof s<"u"&&Bg.includes(n)).forEach(([n,s])=>{const r=$g(s);t.push(...r.map(i=>Qg(n,i)).flat())}),(await Promise.all(t)).flat().filter(Boolean).map((n,s)=>(n._e=e._i,n._p=(e._i<<Xg)+s,n))}function t1(){return[Vg(),Lg(),zg(),Rg(),jg(),Wg(),Ng()]}function n1(e={}){return[Pg({document:e==null?void 0:e.document,delayFn:e==null?void 0:e.domDelayFn})]}function s1(e={}){const t=o1({...e,plugins:[...n1(e),...(e==null?void 0:e.plugins)||[]]});return e.experimentalHashHydration&&t.resolvedOptions.document&&(t._hash=Ug(t.resolvedOptions.document)),Gg(t),t}function o1(e={}){let t=[],n={},s=0;const r=Fg();e!=null&&e.hooks&&r.addHooks(e.hooks),e.plugins=[...t1(),...(e==null?void 0:e.plugins)||[]],e.plugins.forEach(a=>a.hooks&&r.addHooks(a.hooks)),e.document=e.document||(Kg?document:void 0);const i=()=>r.callHook("entries:updated",l),l={resolvedOptions:e,headEntries(){return t},get hooks(){return r},use(a){a.hooks&&r.addHooks(a.hooks)},push(a,c){const u={_i:s++,input:a,_sde:{}};return c!=null&&c.mode&&(u._m=c==null?void 0:c.mode),c!=null&&c.transform&&(u._t=c==null?void 0:c.transform),t.push(u),i(),{dispose(){t=t.filter(d=>d._i!==u._i?!0:(n={...n,...d._sde||{}},d._sde={},i(),!1))},patch(d){t=t.map(p=>(p._i===u._i&&(u.input=p.input=d,i()),p))}}},async resolveTags(){const a={tags:[],entries:[...t]};await r.callHook("entries:resolve",a);for(const c of a.entries){const u=c._t||(d=>d);if(c.resolvedInput=u(c.resolvedInput||c.input),c.resolvedInput)for(const d of await e1(c)){const p={tag:d,entry:c,resolvedOptions:l.resolvedOptions};await r.callHook("tag:normalise",p),a.tags.push(p.tag)}}return await r.callHook("tags:resolve",a),a.tags},_popSideEffectQueue(){const a={...n};return n={},a},_elMap:{}};return l.hooks.callHook("init",l),l}function r1(e){return typeof e=="function"?e():B(e)}function Vr(e,t=""){if(e instanceof Promise)return e;const n=r1(e);return!e||!n?n:Array.isArray(n)?n.map(s=>Vr(s,t)):typeof n=="object"?Object.fromEntries(Object.entries(n).map(([s,r])=>s==="titleTemplate"||s.startsWith("on")?[s,B(r)]:[s,Vr(r,s)])):n}const i1=Hr.startsWith("3"),l1=typeof window<"u",Gp="usehead";function Sa(){return Bt()&&L(Gp)||Yg()}function a1(e){return{install(n){i1&&(n.config.globalProperties.$unhead=e,n.config.globalProperties.$head=e,n.provide(Gp,e))}}.install}function c1(e={}){const t=s1({...e,domDelayFn:n=>setTimeout(()=>rt(()=>n()),10),plugins:[u1(),...(e==null?void 0:e.plugins)||[]]});return t.install=a1(t),t}function u1(){return{hooks:{"entries:resolve":function(e){for(const t of e.entries)t.resolvedInput=Vr(t.input)}}}}function d1(e,t={}){const n=Sa(),s=Y(!1),r=Y({});Ss(()=>{r.value=s.value?{}:Vr(e)});const i=n.push(r.value,t);return ge(r,a=>{i.patch(a)}),Bt()&&(Yo(()=>{i.dispose()}),pp(()=>{s.value=!0}),dp(()=>{s.value=!1})),i}function p1(e,t={}){return Sa().push(e,t)}function Yp(e,t={}){var s;const n=Sa();if(n){const r=l1||!!((s=n.resolvedOptions)!=null&&s.document);return t.mode==="server"&&r||t.mode==="client"&&!r?void 0:r?d1(e,t):p1(e,t)}}function f1(e,t){const n=c1(t||{}),s={unhead:n,install(r){Hr.startsWith("3")&&(r.config.globalProperties.$head=n,r.provide("usehead",n))},use(r){n.use(r)},resolveTags(){return n.resolveTags()},headEntries(){return n.headEntries()},headTags(){return n.resolveTags()},push(r,i){return n.push(r,i)},addEntry(r,i){return n.push(r,i)},addHeadObjs(r,i){return n.push(r,i)},addReactiveEntry(r,i){const l=Yp(r,i);return typeof l<"u"?l.dispose:()=>{}},removeHeadObjs(){},updateDOM(r,i){i?Vp(n,{document:r}):zp(n,{delayFn:l=>setTimeout(()=>l(),50),document:r})},internalHooks:n.hooks,hooks:{"before:dom":[],"resolved:tags":[],"resolved:entries":[]}};return n.addHeadObjs=s.addHeadObjs,n.updateDOM=s.updateDOM,n.hooks.hook("dom:beforeRender",r=>{for(const i of s.hooks["before:dom"])i()===!1&&(r.shouldRender=!1)}),e&&s.addHeadObjs(e),s}const _o=Symbol("v-click-clicks"),rs=Symbol("v-click-clicks-elements"),xl=Symbol("v-click-clicks-order-map"),bo=Symbol("v-click-clicks-disabled"),Qp=Symbol("slidev-slide-scale"),z=Symbol("slidev-slidev-context"),h1=Symbol("slidev-route"),m1=Symbol("slidev-slide-context"),ts="slidev-vclick-target",Oi="slidev-vclick-hidden",y1="slidev-vclick-fade",Ii="slidev-vclick-hidden-explicitly",to="slidev-vclick-current",pr="slidev-vclick-prior",g1=["localhost","127.0.0.1"];let v1=e=>crypto.getRandomValues(new Uint8Array(e)),_1=(e,t,n)=>{let s=(2<<Math.log(e.length-1)/Math.LN2)-1,r=-~(1.6*s*t/e.length);return(i=t)=>{let l="";for(;;){let a=n(r),c=r;for(;c--;)if(l+=e[a[c]&s]||"",l.length===i)return l}}},b1=(e,t=21)=>_1(e,t,v1),x1=(e=21)=>crypto.getRandomValues(new Uint8Array(e)).reduce((t,n)=>(n&=63,n<36?t+=n.toString(36):n<62?t+=(n-26).toString(36).toUpperCase():n>62?t+="-":t+="_",t),"");function Zp(e){return e=e??[],Array.isArray(e)?e:[e]}function wl(e,t){if(!e)return!1;const n=e.indexOf(t);return n>=0?(e.splice(n,1),!0):!1}function w1(...e){let t,n,s;e.length===1?(t=0,s=1,[n]=e):[t,n,s=1]=e;const r=[];let i=t;for(;i<n;)r.push(i),i+=s||1;return r}function k1(e){return e!=null}function A1(e,t){return Object.fromEntries(Object.entries(e).map(([n,s])=>t(n,s)).filter(k1))}const mo={theme:"seriph",title:"Demystifying Unicode",titleTemplate:"%s - Slidev",addons:[],remoteAssets:!1,monaco:"dev",download:!1,export:{},info:`<h2>Unicode, Rust, quirks, and way too much detail.</h2>
`,highlighter:"shiki",lineNumbers:!0,colorSchema:"auto",routerMode:"history",aspectRatio:1.7777777777777777,canvasWidth:980,exportFilename:"",selectable:!1,themeConfig:{},fonts:{sans:['"PT Serif"',"ui-sans-serif","system-ui","-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial",'"Noto Sans"',"sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"','"Noto Color Emoji"'],serif:['"PT Serif"',"ui-serif","Georgia","Cambria",'"Times New Roman"',"Times","serif"],mono:['"PT Mono"',"ui-monospace","SFMono-Regular","Menlo","Monaco","Consolas",'"Liberation Mono"','"Courier New"',"monospace"],webfonts:["PT Serif","PT Mono"],provider:"google",local:[],italic:!0,weights:["400","700"]},favicon:"https://cdn.jsdelivr.net/gh/slidevjs/slidev/assets/favicon.png",drawings:{enabled:!0,persist:!1,presenterOnly:!1,syncAll:!0},plantUmlServer:"https://www.plantuml.com/plantuml",codeCopy:!0,record:"dev",css:"unocss",presenter:!0,htmlAttrs:{},transition:"slide-left",background:"https://source.unsplash.com/collection/94734566/1920x1080",class:"text-center",hideInToc:!0},Fe=mo,Un=Fe.aspectRatio??16/9,Mn=Fe.canvasWidth??980,Ca=Math.ceil(Mn/Un),Ea=D(()=>A1(Fe.themeConfig||{},(e,t)=>[`--slidev-theme-${e}`,t]));function Jp(){return Math.random().toString(36).replace(/[^a-z]+/g,"").substr(2,10)}function Nt(e,t,n){Object.defineProperty(e,t,{value:n,writable:!0,enumerable:!1})}const Es=We({page:0,clicks:0});let S1=[],C1=[];Nt(Es,"$syncUp",!0);Nt(Es,"$syncDown",!0);Nt(Es,"$paused",!1);Nt(Es,"$onSet",e=>S1.push(e));Nt(Es,"$onPatch",e=>C1.push(e));Jp();Nt(Es,"$patch",async()=>!1);function Xp(e,t,n=!1){const s=[];let r=!1,i=!1,l,a;const c=We(t);function u(h){s.push(h)}function d(h,y){c[h]!==y&&(clearTimeout(l),r=!0,c[h]=y,l=setTimeout(()=>r=!1,0))}function p(h){r||(clearTimeout(a),i=!0,Object.entries(h).forEach(([y,b])=>{c[y]=b}),a=setTimeout(()=>i=!1,0))}function f(h){let y;n?n&&window.addEventListener("storage",k=>{k&&k.key===h&&k.newValue&&p(JSON.parse(k.newValue))}):(y=new BroadcastChannel(h),y.addEventListener("message",k=>p(k.data)));function b(){!n&&y&&!i?y.postMessage(he(c)):n&&!i&&window.localStorage.setItem(h,JSON.stringify(c)),r||s.forEach(k=>k(c))}if(ge(c,b,{deep:!0,flush:"sync"}),n){const k=window.localStorage.getItem(h);k&&p(JSON.parse(k))}}return{init:f,onPatch:u,patch:d,state:c}}const{init:E1,onPatch:T1,patch:no,state:Pi}=Xp(Es,{page:1,clicks:0,viewerPage:1,viewerClicks:0}),Ts=We({});let F1=[],$1=[];Nt(Ts,"$syncUp",!0);Nt(Ts,"$syncDown",!0);Nt(Ts,"$paused",!1);Nt(Ts,"$onSet",e=>F1.push(e));Nt(Ts,"$onPatch",e=>$1.push(e));Jp();Nt(Ts,"$patch",async()=>!1);const{init:B1,onPatch:D1,patch:ef,state:zr}=Xp(Ts,{},!1),O1="modulepreload",I1=function(e){return"/demystifying-unicode/"+e},Hc={},Ln=function(t,n,s){if(!n||n.length===0)return t();const r=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=I1(i),i in Hc)return;Hc[i]=!0;const l=i.endsWith(".css"),a=l?'[rel="stylesheet"]':"";if(!!s)for(let d=r.length-1;d>=0;d--){const p=r[d];if(p.href===i&&(!l||p.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${a}`))return;const u=document.createElement("link");if(u.rel=l?"stylesheet":O1,l||(u.as="script",u.crossOrigin=""),u.href=i,document.head.appendChild(u),l)return new Promise((d,p)=>{u.addEventListener("load",d),u.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>t())};function P1(e,t){let n,s,r;const i=Y(!0),l=()=>{i.value=!0,r()};ge(e,l,{flush:"sync"});const a=typeof t=="function"?t:t.get,c=typeof t=="function"?void 0:t.set,u=fa((d,p)=>(s=d,r=p,{get(){return i.value&&(n=a(),i.value=!1),s(),n},set(f){c==null||c(f)}}));return Object.isExtensible(u)&&(u.trigger=l),u}function dn(e){return ia()?(Fd(e),!0):!1}function Ke(e){return typeof e=="function"?e():B(e)}function U1(e){if(!$e(e))return We(e);const t=new Proxy({},{get(n,s,r){return B(Reflect.get(e.value,s,r))},set(n,s,r){return $e(e.value[s])&&!$e(r)?e.value[s].value=r:e.value[s]=r,!0},deleteProperty(n,s){return Reflect.deleteProperty(e.value,s)},has(n,s){return Reflect.has(e.value,s)},ownKeys(){return Object.keys(e.value)},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}}});return We(t)}const Kt=typeof window<"u",M1=e=>typeof e<"u",L1=e=>e!=null,R1=Object.prototype.toString,kl=e=>R1.call(e)==="[object Object]",Al=()=>+Date.now(),vs=()=>{},N1=q1();function q1(){var e;return Kt&&((e=window==null?void 0:window.navigator)==null?void 0:e.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent)}function j1(e,t){function n(...s){return new Promise((r,i)=>{Promise.resolve(e(()=>t.apply(this,s),{fn:t,thisArg:this,args:s})).then(r).catch(i)})}return n}const tf=e=>e();function W1(e=tf){const t=Y(!0);function n(){t.value=!1}function s(){t.value=!0}const r=(...i)=>{t.value&&e(...i)};return{isActive:Vt(t),pause:n,resume:s,eventFilter:r}}function H1(e,t){var n;if(typeof e=="number")return e+t;const s=((n=e.match(/^-?[0-9]+\.?[0-9]*/))==null?void 0:n[0])||"",r=e.slice(s.length),i=Number.parseFloat(s)+t;return Number.isNaN(i)?e:i+r}function nf(...e){if(e.length!==1)return Xm(...e);const t=e[0];return typeof t=="function"?Vt(fa(()=>({get:t,set:vs}))):Y(t)}var V1=Object.defineProperty,z1=Object.defineProperties,K1=Object.getOwnPropertyDescriptors,Vc=Object.getOwnPropertySymbols,G1=Object.prototype.hasOwnProperty,Y1=Object.prototype.propertyIsEnumerable,zc=(e,t,n)=>t in e?V1(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Q1=(e,t)=>{for(var n in t||(t={}))G1.call(t,n)&&zc(e,n,t[n]);if(Vc)for(var n of Vc(t))Y1.call(t,n)&&zc(e,n,t[n]);return e},Z1=(e,t)=>z1(e,K1(t));function J1(e){if(!$e(e))return Qm(e);const t=Array.isArray(e.value)?new Array(e.value.length):{};for(const n in e.value)t[n]=fa(()=>({get(){return e.value[n]},set(s){if(Array.isArray(e.value)){const r=[...e.value];r[n]=s,e.value=r}else{const r=Z1(Q1({},e.value),{[n]:s});Object.setPrototypeOf(r,e.value),e.value=r}}}));return t}function sf(e,t=!0){Bt()?zn(e):t?e():rt(e)}function X1(e){Bt()&&fi(e)}function ev(e,t=1e3,n={}){const{immediate:s=!0,immediateCallback:r=!1}=n;let i=null;const l=Y(!1);function a(){i&&(clearInterval(i),i=null)}function c(){l.value=!1,a()}function u(){const d=Ke(t);d<=0||(l.value=!0,r&&e(),a(),i=setInterval(e,d))}if(s&&Kt&&u(),$e(t)||typeof t=="function"){const d=ge(t,()=>{l.value&&Kt&&u()});dn(d)}return dn(c),{isActive:l,pause:c,resume:u}}function tv(e,t,n={}){const{immediate:s=!0}=n,r=Y(!1);let i=null;function l(){i&&(clearTimeout(i),i=null)}function a(){r.value=!1,l()}function c(...u){l(),r.value=!0,i=setTimeout(()=>{r.value=!1,i=null,e(...u)},Ke(t))}return s&&(r.value=!0,Kt&&c()),dn(a),{isPending:Vt(r),start:c,stop:a}}function of(e=!1,t={}){const{truthyValue:n=!0,falsyValue:s=!1}=t,r=$e(e),i=Y(e);function l(a){if(arguments.length)return i.value=a,i.value;{const c=Ke(n);return i.value=i.value===c?Ke(s):c,i.value}}return r?l:[i,l]}var Kc=Object.getOwnPropertySymbols,nv=Object.prototype.hasOwnProperty,sv=Object.prototype.propertyIsEnumerable,ov=(e,t)=>{var n={};for(var s in e)nv.call(e,s)&&t.indexOf(s)<0&&(n[s]=e[s]);if(e!=null&&Kc)for(var s of Kc(e))t.indexOf(s)<0&&sv.call(e,s)&&(n[s]=e[s]);return n};function rv(e,t,n={}){const s=n,{eventFilter:r=tf}=s,i=ov(s,["eventFilter"]);return ge(e,j1(r,t),i)}var iv=Object.defineProperty,lv=Object.defineProperties,av=Object.getOwnPropertyDescriptors,Kr=Object.getOwnPropertySymbols,rf=Object.prototype.hasOwnProperty,lf=Object.prototype.propertyIsEnumerable,Gc=(e,t,n)=>t in e?iv(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,cv=(e,t)=>{for(var n in t||(t={}))rf.call(t,n)&&Gc(e,n,t[n]);if(Kr)for(var n of Kr(t))lf.call(t,n)&&Gc(e,n,t[n]);return e},uv=(e,t)=>lv(e,av(t)),dv=(e,t)=>{var n={};for(var s in e)rf.call(e,s)&&t.indexOf(s)<0&&(n[s]=e[s]);if(e!=null&&Kr)for(var s of Kr(e))t.indexOf(s)<0&&lf.call(e,s)&&(n[s]=e[s]);return n};function pv(e,t,n={}){const s=n,{eventFilter:r}=s,i=dv(s,["eventFilter"]),{eventFilter:l,pause:a,resume:c,isActive:u}=W1(r);return{stop:rv(e,t,uv(cv({},i),{eventFilter:l})),pause:a,resume:c,isActive:u}}function it(e){var t;const n=Ke(e);return(t=n==null?void 0:n.$el)!=null?t:n}const et=Kt?window:void 0,af=Kt?window.document:void 0,fv=Kt?window.navigator:void 0;function xe(...e){let t,n,s,r;if(typeof e[0]=="string"||Array.isArray(e[0])?([n,s,r]=e,t=et):[t,n,s,r]=e,!t)return vs;Array.isArray(n)||(n=[n]),Array.isArray(s)||(s=[s]);const i=[],l=()=>{i.forEach(d=>d()),i.length=0},a=(d,p,f,h)=>(d.addEventListener(p,f,h),()=>d.removeEventListener(p,f,h)),c=ge(()=>[it(t),Ke(r)],([d,p])=>{l(),d&&i.push(...n.flatMap(f=>s.map(h=>a(d,f,h,p))))},{immediate:!0,flush:"post"}),u=()=>{c(),l()};return dn(u),u}let Yc=!1;function hv(e,t,n={}){const{window:s=et,ignore:r=[],capture:i=!0,detectIframe:l=!1}=n;if(!s)return;N1&&!Yc&&(Yc=!0,Array.from(s.document.body.children).forEach(f=>f.addEventListener("click",vs)));let a=!0;const c=f=>r.some(h=>{if(typeof h=="string")return Array.from(s.document.querySelectorAll(h)).some(y=>y===f.target||f.composedPath().includes(y));{const y=it(h);return y&&(f.target===y||f.composedPath().includes(y))}}),d=[xe(s,"click",f=>{const h=it(e);if(!(!h||h===f.target||f.composedPath().includes(h))){if(f.detail===0&&(a=!c(f)),!a){a=!0;return}t(f)}},{passive:!0,capture:i}),xe(s,"pointerdown",f=>{const h=it(e);h&&(a=!f.composedPath().includes(h)&&!c(f))},{passive:!0}),l&&xe(s,"blur",f=>{setTimeout(()=>{var h;const y=it(e);((h=s.document.activeElement)==null?void 0:h.tagName)==="IFRAME"&&!(y!=null&&y.contains(s.document.activeElement))&&t(f)},0)})].filter(Boolean);return()=>d.forEach(f=>f())}function mv(e){return typeof e=="function"?e:typeof e=="string"?t=>t.key===e:Array.isArray(e)?t=>e.includes(t.key):()=>!0}function yv(...e){let t,n,s={};e.length===3?(t=e[0],n=e[1],s=e[2]):e.length===2?typeof e[1]=="object"?(t=!0,n=e[0],s=e[1]):(t=e[0],n=e[1]):(t=!0,n=e[0]);const{target:r=et,eventName:i="keydown",passive:l=!1,dedupe:a=!1}=s,c=mv(t);return xe(r,i,d=>{d.repeat&&Ke(a)||c(d)&&n(d)},l)}function gv(e={}){var t;const{window:n=et}=e,s=(t=e.document)!=null?t:n==null?void 0:n.document,r=P1(()=>null,()=>s==null?void 0:s.activeElement);return n&&(xe(n,"blur",i=>{i.relatedTarget===null&&r.trigger()},!0),xe(n,"focus",r.trigger,!0)),r}function vv(){const e=Y(!1);return Bt()&&zn(()=>{e.value=!0}),e}function Zo(e){const t=vv();return D(()=>(t.value,!!e()))}function _v(e,t={}){const{immediate:n=!0,window:s=et}=t,r=Y(!1);let i=0,l=null;function a(d){if(!r.value||!s)return;const p=d-i;e({delta:p,timestamp:d}),i=d,l=s.requestAnimationFrame(a)}function c(){!r.value&&s&&(r.value=!0,l=s.requestAnimationFrame(a))}function u(){r.value=!1,l!=null&&s&&(s.cancelAnimationFrame(l),l=null)}return n&&c(),dn(u),{isActive:Vt(r),pause:u,resume:c}}function is(e,t={}){const{window:n=et}=t,s=Zo(()=>n&&"matchMedia"in n&&typeof n.matchMedia=="function");let r;const i=Y(!1),l=()=>{r&&("removeEventListener"in r?r.removeEventListener("change",a):r.removeListener(a))},a=()=>{s.value&&(l(),r=n.matchMedia(nf(e).value),i.value=!!(r!=null&&r.matches),r&&("addEventListener"in r?r.addEventListener("change",a):r.addListener(a)))};return Ss(a),dn(()=>l()),i}const bv={sm:640,md:768,lg:1024,xl:1280,"2xl":1536};function xv(e,t={}){function n(a,c){let u=e[a];return c!=null&&(u=H1(u,c)),typeof u=="number"&&(u=`${u}px`),u}const{window:s=et}=t;function r(a){return s?s.matchMedia(a).matches:!1}const i=a=>is(`(min-width: ${n(a)})`,t),l=Object.keys(e).reduce((a,c)=>(Object.defineProperty(a,c,{get:()=>i(c),enumerable:!0,configurable:!0}),a),{});return Object.assign(l,{greater(a){return is(`(min-width: ${n(a,.1)})`,t)},greaterOrEqual:i,smaller(a){return is(`(max-width: ${n(a,-.1)})`,t)},smallerOrEqual(a){return is(`(max-width: ${n(a)})`,t)},between(a,c){return is(`(min-width: ${n(a)}) and (max-width: ${n(c,-.1)})`,t)},isGreater(a){return r(`(min-width: ${n(a,.1)})`)},isGreaterOrEqual(a){return r(`(min-width: ${n(a)})`)},isSmaller(a){return r(`(max-width: ${n(a,-.1)})`)},isSmallerOrEqual(a){return r(`(max-width: ${n(a)})`)},isInBetween(a,c){return r(`(min-width: ${n(a)}) and (max-width: ${n(c,-.1)})`)},current(){const a=Object.keys(e).map(c=>[c,i(c)]);return D(()=>a.filter(([,c])=>c.value).map(([c])=>c))}})}function wv(e={}){const{navigator:t=fv,read:n=!1,source:s,copiedDuring:r=1500,legacy:i=!1}=e,l=["copy","cut"],a=Zo(()=>t&&"clipboard"in t),c=D(()=>a.value||i),u=Y(""),d=Y(!1),p=tv(()=>d.value=!1,r);function f(){a.value?t.clipboard.readText().then(k=>{u.value=k}):u.value=b()}if(c.value&&n)for(const k of l)xe(k,f);async function h(k=Ke(s)){c.value&&k!=null&&(a.value?await t.clipboard.writeText(k):y(k),u.value=k,d.value=!0,p.start())}function y(k){const w=document.createElement("textarea");w.value=k??"",w.style.position="absolute",w.style.opacity="0",document.body.appendChild(w),w.select(),document.execCommand("copy"),w.remove()}function b(){var k,w,A;return(A=(w=(k=document==null?void 0:document.getSelection)==null?void 0:k.call(document))==null?void 0:w.toString())!=null?A:""}return{isSupported:c,text:u,copied:d,copy:h}}function kv(e){return JSON.parse(JSON.stringify(e))}const fr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},hr="__vueuse_ssr_handlers__",Av=Sv();function Sv(){return hr in fr||(fr[hr]=fr[hr]||{}),fr[hr]}function Cv(e,t){return Av[e]||t}function Ev(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}var Tv=Object.defineProperty,Qc=Object.getOwnPropertySymbols,Fv=Object.prototype.hasOwnProperty,$v=Object.prototype.propertyIsEnumerable,Zc=(e,t,n)=>t in e?Tv(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Jc=(e,t)=>{for(var n in t||(t={}))Fv.call(t,n)&&Zc(e,n,t[n]);if(Qc)for(var n of Qc(t))$v.call(t,n)&&Zc(e,n,t[n]);return e};const Bv={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}},Xc="vueuse-storage";function Dv(e,t,n,s={}){var r;const{flush:i="pre",deep:l=!0,listenToStorageChanges:a=!0,writeDefaults:c=!0,mergeDefaults:u=!1,shallow:d,window:p=et,eventFilter:f,onError:h=O=>{console.error(O)}}=s,y=(d?an:Y)(t);if(!n)try{n=Cv("getDefaultStorage",()=>{var O;return(O=et)==null?void 0:O.localStorage})()}catch(O){h(O)}if(!n)return y;const b=Ke(t),k=Ev(b),w=(r=s.serializer)!=null?r:Bv[k],{pause:A,resume:x}=pv(y,()=>S(y.value),{flush:i,deep:l,eventFilter:f});return p&&a&&(xe(p,"storage",U),xe(p,Xc,F)),U(),y;function S(O){try{if(O==null)n.removeItem(e);else{const q=w.write(O),ne=n.getItem(e);ne!==q&&(n.setItem(e,q),p&&p.dispatchEvent(new CustomEvent(Xc,{detail:{key:e,oldValue:ne,newValue:q,storageArea:n}})))}}catch(q){h(q)}}function C(O){const q=O?O.newValue:n.getItem(e);if(q==null)return c&&b!==null&&n.setItem(e,w.write(b)),b;if(!O&&u){const ne=w.read(q);return typeof u=="function"?u(ne,b):k==="object"&&!Array.isArray(ne)?Jc(Jc({},b),ne):ne}else return typeof q!="string"?q:w.read(q)}function F(O){U(O.detail)}function U(O){if(!(O&&O.storageArea!==n)){if(O&&O.key==null){y.value=b;return}if(!(O&&O.key!==e)){A();try{y.value=C(O)}catch(q){h(q)}finally{O?rt(x):x()}}}}}function Ov(e){return is("(prefers-color-scheme: dark)",e)}var Iv=Object.defineProperty,Pv=Object.defineProperties,Uv=Object.getOwnPropertyDescriptors,eu=Object.getOwnPropertySymbols,Mv=Object.prototype.hasOwnProperty,Lv=Object.prototype.propertyIsEnumerable,tu=(e,t,n)=>t in e?Iv(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Rv=(e,t)=>{for(var n in t||(t={}))Mv.call(t,n)&&tu(e,n,t[n]);if(eu)for(var n of eu(t))Lv.call(t,n)&&tu(e,n,t[n]);return e},Nv=(e,t)=>Pv(e,Uv(t));function n7(e,t={}){var n,s;const{pointerTypes:r,preventDefault:i,stopPropagation:l,exact:a,onMove:c,onEnd:u,onStart:d,initialValue:p,axis:f="both",draggingElement:h=et,handle:y=e}=t,b=Y((n=Ke(p))!=null?n:{x:0,y:0}),k=Y(),w=F=>r?r.includes(F.pointerType):!0,A=F=>{Ke(i)&&F.preventDefault(),Ke(l)&&F.stopPropagation()},x=F=>{if(!w(F)||Ke(a)&&F.target!==Ke(e))return;const U=Ke(e).getBoundingClientRect(),O={x:F.clientX-U.left,y:F.clientY-U.top};(d==null?void 0:d(O,F))!==!1&&(k.value=O,A(F))},S=F=>{if(!w(F)||!k.value)return;let{x:U,y:O}=b.value;(f==="x"||f==="both")&&(U=F.clientX-k.value.x),(f==="y"||f==="both")&&(O=F.clientY-k.value.y),b.value={x:U,y:O},c==null||c(b.value,F),A(F)},C=F=>{w(F)&&k.value&&(k.value=void 0,u==null||u(b.value,F),A(F))};if(Kt){const F={capture:(s=t.capture)!=null?s:!0};xe(y,"pointerdown",x,F),xe(h,"pointermove",S,F),xe(h,"pointerup",C,F)}return Nv(Rv({},J1(b)),{position:b,isDragging:D(()=>!!k.value),style:D(()=>`left:${b.value.x}px;top:${b.value.y}px;`)})}var nu=Object.getOwnPropertySymbols,qv=Object.prototype.hasOwnProperty,jv=Object.prototype.propertyIsEnumerable,Wv=(e,t)=>{var n={};for(var s in e)qv.call(e,s)&&t.indexOf(s)<0&&(n[s]=e[s]);if(e!=null&&nu)for(var s of nu(e))t.indexOf(s)<0&&jv.call(e,s)&&(n[s]=e[s]);return n};function Hv(e,t,n={}){const s=n,{window:r=et}=s,i=Wv(s,["window"]);let l;const a=Zo(()=>r&&"ResizeObserver"in r),c=()=>{l&&(l.disconnect(),l=void 0)},u=D(()=>Array.isArray(e)?e.map(f=>it(f)):[it(e)]),d=ge(u,f=>{if(c(),a.value&&r){l=new ResizeObserver(t);for(const h of f)h&&l.observe(h,i)}},{immediate:!0,flush:"post",deep:!0}),p=()=>{c(),d()};return dn(p),{isSupported:a,stop:p}}function Vv(e,t={width:0,height:0},n={}){const{window:s=et,box:r="content-box"}=n,i=D(()=>{var c,u;return(u=(c=it(e))==null?void 0:c.namespaceURI)==null?void 0:u.includes("svg")}),l=Y(t.width),a=Y(t.height);return Hv(e,([c])=>{const u=r==="border-box"?c.borderBoxSize:r==="content-box"?c.contentBoxSize:c.devicePixelContentBoxSize;if(s&&i.value){const d=it(e);if(d){const p=s.getComputedStyle(d);l.value=Number.parseFloat(p.width),a.value=Number.parseFloat(p.height)}}else if(u){const d=Array.isArray(u)?u:[u];l.value=d.reduce((p,{inlineSize:f})=>p+f,0),a.value=d.reduce((p,{blockSize:f})=>p+f,0)}else l.value=c.contentRect.width,a.value=c.contentRect.height},n),ge(()=>it(e),c=>{l.value=c?t.width:0,a.value=c?t.height:0}),{width:l,height:a}}function zv(e,t,n={}){const{root:s,rootMargin:r="0px",threshold:i=.1,window:l=et,immediate:a=!0}=n,c=Zo(()=>l&&"IntersectionObserver"in l),u=D(()=>{const y=Ke(e);return(Array.isArray(y)?y:[y]).map(it).filter(L1)});let d=vs;const p=Y(a),f=c.value?ge(()=>[u.value,it(s),p.value],([y,b])=>{if(d(),!p.value||!y.length)return;const k=new IntersectionObserver(t,{root:it(b),rootMargin:r,threshold:i});y.forEach(w=>w&&k.observe(w)),d=()=>{k.disconnect(),d=vs}},{immediate:a,flush:"post"}):vs,h=()=>{d(),f(),p.value=!1};return dn(h),{isSupported:c,isActive:p,pause(){d(),p.value=!1},resume(){p.value=!0},stop:h}}const su=["fullscreenchange","webkitfullscreenchange","webkitendfullscreen","mozfullscreenchange","MSFullscreenChange"];function Kv(e,t={}){const{document:n=af,autoExit:s=!1}=t,r=D(()=>{var w;return(w=it(e))!=null?w:n==null?void 0:n.querySelector("html")}),i=Y(!1),l=D(()=>["requestFullscreen","webkitRequestFullscreen","webkitEnterFullscreen","webkitEnterFullScreen","webkitRequestFullScreen","mozRequestFullScreen","msRequestFullscreen"].find(w=>n&&w in n||r.value&&w in r.value)),a=D(()=>["exitFullscreen","webkitExitFullscreen","webkitExitFullScreen","webkitCancelFullScreen","mozCancelFullScreen","msExitFullscreen"].find(w=>n&&w in n||r.value&&w in r.value)),c=D(()=>["fullScreen","webkitIsFullScreen","webkitDisplayingFullscreen","mozFullScreen","msFullscreenElement"].find(w=>n&&w in n||r.value&&w in r.value)),u=["fullscreenElement","webkitFullscreenElement","mozFullScreenElement","msFullscreenElement"].find(w=>n&&w in n),d=Zo(()=>r.value&&n&&l.value!==void 0&&a.value!==void 0&&c.value!==void 0),p=()=>u?(n==null?void 0:n[u])===r.value:!1,f=()=>{if(c.value){if(n&&n[c.value]!=null)return n[c.value];{const w=r.value;if((w==null?void 0:w[c.value])!=null)return!!w[c.value]}}return!1};async function h(){if(d.value){if(a.value)if((n==null?void 0:n[a.value])!=null)await n[a.value]();else{const w=r.value;(w==null?void 0:w[a.value])!=null&&await w[a.value]()}i.value=!1}}async function y(){if(!d.value)return;f()&&await h();const w=r.value;l.value&&(w==null?void 0:w[l.value])!=null&&(await w[l.value](),i.value=!0)}async function b(){await(i.value?h():y())}const k=()=>{const w=f();(!w||w&&p())&&(i.value=w)};return xe(n,su,k,!1),xe(()=>it(r),su,k,!1),s&&dn(h),{isSupported:d,isFullscreen:i,enter:y,exit:h,toggle:b}}function Gt(e,t,n={}){const{window:s=et}=n;return Dv(e,t,s==null?void 0:s.localStorage,n)}const Gv={ctrl:"control",command:"meta",cmd:"meta",option:"alt",up:"arrowup",down:"arrowdown",left:"arrowleft",right:"arrowright"};function Yv(e={}){const{reactive:t=!1,target:n=et,aliasMap:s=Gv,passive:r=!0,onEventFired:i=vs}=e,l=We(new Set),a={toJSON(){return{}},current:l},c=t?We(a):a,u=new Set,d=new Set;function p(b,k){b in c&&(t?c[b]=k:c[b].value=k)}function f(){l.clear();for(const b of d)p(b,!1)}function h(b,k){var w,A;const x=(w=b.key)==null?void 0:w.toLowerCase(),C=[(A=b.code)==null?void 0:A.toLowerCase(),x].filter(Boolean);x&&(k?l.add(x):l.delete(x));for(const F of C)d.add(F),p(F,k);x==="meta"&&!k?(u.forEach(F=>{l.delete(F),p(F,!1)}),u.clear()):typeof b.getModifierState=="function"&&b.getModifierState("Meta")&&k&&[...l,...C].forEach(F=>u.add(F))}xe(n,"keydown",b=>(h(b,!0),i(b)),{passive:r}),xe(n,"keyup",b=>(h(b,!1),i(b)),{passive:r}),xe("blur",f,{passive:!0}),xe("focus",f,{passive:!0});const y=new Proxy(c,{get(b,k,w){if(typeof k!="string")return Reflect.get(b,k,w);if(k=k.toLowerCase(),k in s&&(k=s[k]),!(k in c))if(/[+_-]/.test(k)){const x=k.split(/[+_-]/g).map(S=>S.trim());c[k]=D(()=>x.every(S=>Ke(y[S])))}else c[k]=Y(!1);const A=Reflect.get(b,k,w);return t?Ke(A):A}});return y}const Qv={page:e=>[e.pageX,e.pageY],client:e=>[e.clientX,e.clientY],screen:e=>[e.screenX,e.screenY],movement:e=>e instanceof Touch?null:[e.movementX,e.movementY]};function s7(e={}){const{type:t="page",touch:n=!0,resetOnTouchEnds:s=!1,initialValue:r={x:0,y:0},window:i=et,target:l=i,eventFilter:a}=e,c=Y(r.x),u=Y(r.y),d=Y(null),p=typeof t=="function"?t:Qv[t],f=w=>{const A=p(w);A&&([c.value,u.value]=A,d.value="mouse")},h=w=>{if(w.touches.length>0){const A=p(w.touches[0]);A&&([c.value,u.value]=A,d.value="touch")}},y=()=>{c.value=r.x,u.value=r.y},b=a?w=>a(()=>f(w),{}):w=>f(w),k=a?w=>a(()=>h(w),{}):w=>h(w);return l&&(xe(l,"mousemove",b,{passive:!0}),xe(l,"dragover",b,{passive:!0}),n&&t!=="movement"&&(xe(l,"touchstart",k,{passive:!0}),xe(l,"touchmove",k,{passive:!0}),s&&xe(l,"touchend",y,{passive:!0}))),{x:c,y:u,sourceType:d}}function Zv(e,t={}){const n=nf(e),{threshold:s=50,onSwipe:r,onSwipeEnd:i,onSwipeStart:l}=t,a=We({x:0,y:0}),c=(F,U)=>{a.x=F,a.y=U},u=We({x:0,y:0}),d=(F,U)=>{u.x=F,u.y=U},p=D(()=>a.x-u.x),f=D(()=>a.y-u.y),{max:h,abs:y}=Math,b=D(()=>h(y(p.value),y(f.value))>=s),k=Y(!1),w=Y(!1),A=D(()=>b.value?y(p.value)>y(f.value)?p.value>0?"left":"right":f.value>0?"up":"down":"none"),x=F=>{var U,O,q;const ne=F.buttons===0,ue=F.buttons===1;return(q=(O=(U=t.pointerTypes)==null?void 0:U.includes(F.pointerType))!=null?O:ne||ue)!=null?q:!0},S=[xe(e,"pointerdown",F=>{var U,O;if(!x(F))return;w.value=!0,(O=(U=n.value)==null?void 0:U.style)==null||O.setProperty("touch-action","none");const q=F.target;q==null||q.setPointerCapture(F.pointerId);const{clientX:ne,clientY:ue}=F;c(ne,ue),d(ne,ue),l==null||l(F)}),xe(e,"pointermove",F=>{if(!x(F)||!w.value)return;const{clientX:U,clientY:O}=F;d(U,O),!k.value&&b.value&&(k.value=!0),k.value&&(r==null||r(F))}),xe(e,"pointerup",F=>{var U,O;x(F)&&(k.value&&(i==null||i(F,A.value)),w.value=!1,k.value=!1,(O=(U=n.value)==null?void 0:U.style)==null||O.setProperty("touch-action","initial"))})],C=()=>S.forEach(F=>F());return{isSwiping:Vt(k),direction:Vt(A),posStart:Vt(a),posEnd:Vt(u),distanceX:p,distanceY:f,stop:C}}let Jv=0;function o7(e,t={}){const n=Y(!1),{document:s=af,immediate:r=!0,manual:i=!1,id:l=`vueuse_styletag_${++Jv}`}=t,a=Y(e);let c=()=>{};const u=()=>{if(!s)return;const p=s.getElementById(l)||s.createElement("style");p.isConnected||(p.type="text/css",p.id=l,t.media&&(p.media=t.media),s.head.appendChild(p)),!n.value&&(c=ge(a,f=>{p.textContent=f},{immediate:!0}),n.value=!0)},d=()=>{!s||!n.value||(c(),s.head.removeChild(s.getElementById(l)),n.value=!1)};return r&&!i&&sf(u),i||dn(d),{id:l,css:a,unload:d,load:u,isLoaded:Vt(n)}}var Xv=Object.defineProperty,ou=Object.getOwnPropertySymbols,e_=Object.prototype.hasOwnProperty,t_=Object.prototype.propertyIsEnumerable,ru=(e,t,n)=>t in e?Xv(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,n_=(e,t)=>{for(var n in t||(t={}))e_.call(t,n)&&ru(e,n,t[n]);if(ou)for(var n of ou(t))t_.call(t,n)&&ru(e,n,t[n]);return e};function r7(e={}){const{controls:t=!1,offset:n=0,immediate:s=!0,interval:r="requestAnimationFrame",callback:i}=e,l=Y(Al()+n),a=()=>l.value=Al()+n,c=i?()=>{a(),i(l.value)}:a,u=r==="requestAnimationFrame"?_v(c,{immediate:s}):ev(c,r,{immediate:s});return t?n_({timestamp:l},u):l}function nn(e,t,n,s={}){var r,i,l;const{clone:a=!1,passive:c=!1,eventName:u,deep:d=!1,defaultValue:p,shouldEmit:f}=s,h=Bt(),y=n||(h==null?void 0:h.emit)||((r=h==null?void 0:h.$emit)==null?void 0:r.bind(h))||((l=(i=h==null?void 0:h.proxy)==null?void 0:i.$emit)==null?void 0:l.bind(h==null?void 0:h.proxy));let b=u;t||(t="modelValue"),b=b||`update:${t.toString()}`;const k=x=>a?typeof a=="function"?a(x):kv(x):x,w=()=>M1(e[t])?k(e[t]):p,A=x=>{f?f(x)&&y(b,x):y(b,x)};if(c){const x=w(),S=Y(x);return ge(()=>e[t],C=>S.value=k(C)),ge(S,C=>{(C!==e[t]||d)&&A(C)},{deep:d}),S}else return D({get(){return w()},set(x){A(x)}})}function i7({window:e=et}={}){if(!e)return Y(!1);const t=Y(e.document.hasFocus());return xe(e,"blur",()=>{t.value=!1}),xe(e,"focus",()=>{t.value=!0}),t}function s_(e={}){const{window:t=et,initialWidth:n=1/0,initialHeight:s=1/0,listenOrientation:r=!0,includeScrollbar:i=!0}=e,l=Y(n),a=Y(s),c=()=>{t&&(i?(l.value=t.innerWidth,a.value=t.innerHeight):(l.value=t.document.documentElement.clientWidth,a.value=t.document.documentElement.clientHeight))};if(c(),sf(c),xe("resize",c,{passive:!0}),r){const u=is("(orientation: portrait)");ge(u,()=>c())}return{width:l,height:a}}function o_(){return cf().__VUE_DEVTOOLS_GLOBAL_HOOK__}function cf(){return typeof navigator<"u"&&typeof window<"u"?window:typeof global<"u"?global:{}}const r_=typeof Proxy=="function",i_="devtools-plugin:setup",l_="plugin:settings:set";let Bs,Sl;function a_(){var e;return Bs!==void 0||(typeof window<"u"&&window.performance?(Bs=!0,Sl=window.performance):typeof global<"u"&&(!((e=global.perf_hooks)===null||e===void 0)&&e.performance)?(Bs=!0,Sl=global.perf_hooks.performance):Bs=!1),Bs}function c_(){return a_()?Sl.now():Date.now()}class u_{constructor(t,n){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=t,this.hook=n;const s={};if(t.settings)for(const l in t.settings){const a=t.settings[l];s[l]=a.defaultValue}const r=`__vue-devtools-plugin-settings__${t.id}`;let i=Object.assign({},s);try{const l=localStorage.getItem(r),a=JSON.parse(l);Object.assign(i,a)}catch{}this.fallbacks={getSettings(){return i},setSettings(l){try{localStorage.setItem(r,JSON.stringify(l))}catch{}i=l},now(){return c_()}},n&&n.on(l_,(l,a)=>{l===this.plugin.id&&this.fallbacks.setSettings(a)}),this.proxiedOn=new Proxy({},{get:(l,a)=>this.target?this.target.on[a]:(...c)=>{this.onQueue.push({method:a,args:c})}}),this.proxiedTarget=new Proxy({},{get:(l,a)=>this.target?this.target[a]:a==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(a)?(...c)=>(this.targetQueue.push({method:a,args:c,resolve:()=>{}}),this.fallbacks[a](...c)):(...c)=>new Promise(u=>{this.targetQueue.push({method:a,args:c,resolve:u})})})}async setRealTarget(t){this.target=t;for(const n of this.onQueue)this.target.on[n.method](...n.args);for(const n of this.targetQueue)n.resolve(await this.target[n.method](...n.args))}}function d_(e,t){const n=e,s=cf(),r=o_(),i=r_&&n.enableEarlyProxy;if(r&&(s.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!i))r.emit(i_,e,t);else{const l=i?new u_(n,r):null;(s.__VUE_DEVTOOLS_PLUGINS__=s.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:n,setupFn:t,proxy:l}),l&&t(l.proxiedTarget)}}/*!
  * vue-router v4.2.2
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const gn=typeof window<"u";function p_(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const Oe=Object.assign;function Ui(e,t){const n={};for(const s in t){const r=t[s];n[s]=$t(r)?r.map(e):e(r)}return n}const xo=()=>{},$t=Array.isArray;function Ee(e){const t=Array.from(arguments).slice(1);console.warn.apply(console,["[Vue Router warn]: "+e].concat(t))}const f_=/\/$/,h_=e=>e.replace(f_,"");function Mi(e,t,n="/"){let s,r={},i="",l="";const a=t.indexOf("#");let c=t.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(s=t.slice(0,c),i=t.slice(c+1,a>-1?a:t.length),r=e(i)),a>-1&&(s=s||t.slice(0,a),l=t.slice(a,t.length)),s=g_(s??t,n),{fullPath:s+(i&&"?")+i+l,path:s,query:r,hash:l}}function m_(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function iu(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function lu(e,t,n){const s=t.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&Hn(t.matched[s],n.matched[r])&&uf(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Hn(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function uf(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!y_(e[n],t[n]))return!1;return!0}function y_(e,t){return $t(e)?au(e,t):$t(t)?au(t,e):e===t}function au(e,t){return $t(t)?e.length===t.length&&e.every((n,s)=>n===t[s]):e.length===1&&e[0]===t}function g_(e,t){if(e.startsWith("/"))return e;if(!t.startsWith("/"))return Ee(`Cannot resolve a relative location without an absolute path. Trying to resolve "${e}" from "${t}". It should look like "/${t}".`),e;if(!e)return t;const n=t.split("/"),s=e.split("/"),r=s[s.length-1];(r===".."||r===".")&&s.push("");let i=n.length-1,l,a;for(l=0;l<s.length;l++)if(a=s[l],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+s.slice(l-(l===s.length?1:0)).join("/")}var Uo;(function(e){e.pop="pop",e.push="push"})(Uo||(Uo={}));var wo;(function(e){e.back="back",e.forward="forward",e.unknown=""})(wo||(wo={}));function v_(e){if(!e)if(gn){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),h_(e)}const __=/^[^#]+#/;function b_(e,t){return e.replace(__,"#")+t}function x_(e,t){const n=document.documentElement.getBoundingClientRect(),s=e.getBoundingClientRect();return{behavior:t.behavior,left:s.left-n.left-(t.left||0),top:s.top-n.top-(t.top||0)}}const gi=()=>({left:window.pageXOffset,top:window.pageYOffset});function w_(e){let t;if("el"in e){const n=e.el,s=typeof n=="string"&&n.startsWith("#");if(typeof e.el=="string"&&(!s||!document.getElementById(e.el.slice(1))))try{const i=document.querySelector(e.el);if(s&&i){Ee(`The selector "${e.el}" should be passed as "el: document.querySelector('${e.el}')" because it starts with "#".`);return}}catch{Ee(`The selector "${e.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`);return}const r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r){Ee(`Couldn't find element using selector "${e.el}" returned by scrollBehavior.`);return}t=x_(r,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function cu(e,t){return(history.state?history.state.position-t:-1)+e}const Cl=new Map;function k_(e,t){Cl.set(e,t)}function A_(e){const t=Cl.get(e);return Cl.delete(e),t}let S_=()=>location.protocol+"//"+location.host;function df(e,t){const{pathname:n,search:s,hash:r}=t,i=e.indexOf("#");if(i>-1){let a=r.includes(e.slice(i))?e.slice(i).length:1,c=r.slice(a);return c[0]!=="/"&&(c="/"+c),iu(c,"")}return iu(n,e)+s+r}function C_(e,t,n,s){let r=[],i=[],l=null;const a=({state:f})=>{const h=df(e,location),y=n.value,b=t.value;let k=0;if(f){if(n.value=h,t.value=f,l&&l===y){l=null;return}k=b?f.position-b.position:0}else s(h);r.forEach(w=>{w(n.value,y,{delta:k,type:Uo.pop,direction:k?k>0?wo.forward:wo.back:wo.unknown})})};function c(){l=n.value}function u(f){r.push(f);const h=()=>{const y=r.indexOf(f);y>-1&&r.splice(y,1)};return i.push(h),h}function d(){const{history:f}=window;f.state&&f.replaceState(Oe({},f.state,{scroll:gi()}),"")}function p(){for(const f of i)f();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",d,{passive:!0}),{pauseListeners:c,listen:u,destroy:p}}function uu(e,t,n,s=!1,r=!1){return{back:e,current:t,forward:n,replaced:s,position:window.history.length,scroll:r?gi():null}}function E_(e){const{history:t,location:n}=window,s={value:df(e,n)},r={value:t.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function i(c,u,d){const p=e.indexOf("#"),f=p>-1?(n.host&&document.querySelector("base")?e:e.slice(p))+c:S_()+e+c;try{t[d?"replaceState":"pushState"](u,"",f),r.value=u}catch(h){Ee("Error with push/replace State",h),n[d?"replace":"assign"](f)}}function l(c,u){const d=Oe({},t.state,uu(r.value.back,c,r.value.forward,!0),u,{position:r.value.position});i(c,d,!0),s.value=c}function a(c,u){const d=Oe({},r.value,t.state,{forward:c,scroll:gi()});t.state||Ee(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://next.router.vuejs.org/guide/migration/#usage-of-history-state.`),i(d.current,d,!0);const p=Oe({},uu(s.value,c,null),{position:d.position+1},u);i(c,p,!1),s.value=c}return{location:s,state:r,push:a,replace:l}}function T_(e){e=v_(e);const t=E_(e),n=C_(e,t.state,t.location,t.replace);function s(i,l=!0){l||n.pauseListeners(),history.go(i)}const r=Oe({location:"",base:e,go:s,createHref:b_.bind(null,e)},t,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>t.state.value}),r}function F_(e){return typeof e=="string"||e&&typeof e=="object"}function pf(e){return typeof e=="string"||typeof e=="symbol"}const En={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},ff=Symbol("navigation failure");var du;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(du||(du={}));const $_={[1]({location:e,currentLocation:t}){return`No match for
 ${JSON.stringify(e)}${t?`
while being at
`+JSON.stringify(t):""}`},[2]({from:e,to:t}){return`Redirected from "${e.fullPath}" to "${D_(t)}" via a navigation guard.`},[4]({from:e,to:t}){return`Navigation aborted from "${e.fullPath}" to "${t.fullPath}" via a navigation guard.`},[8]({from:e,to:t}){return`Navigation cancelled from "${e.fullPath}" to "${t.fullPath}" with a new navigation.`},[16]({from:e,to:t}){return`Avoided redundant navigation to current location: "${e.fullPath}".`}};function Ws(e,t){return Oe(new Error($_[e](t)),{type:e,[ff]:!0},t)}function pn(e,t){return e instanceof Error&&ff in e&&(t==null||!!(e.type&t))}const B_=["params","query","hash"];function D_(e){if(typeof e=="string")return e;if("path"in e)return e.path;const t={};for(const n of B_)n in e&&(t[n]=e[n]);return JSON.stringify(t,null,2)}const pu="[^/]+?",O_={sensitive:!1,strict:!1,start:!0,end:!0},I_=/[.+*?^${}()[\]/\\]/g;function P_(e,t){const n=Oe({},O_,t),s=[];let r=n.start?"^":"";const i=[];for(const u of e){const d=u.length?[]:[90];n.strict&&!u.length&&(r+="/");for(let p=0;p<u.length;p++){const f=u[p];let h=40+(n.sensitive?.25:0);if(f.type===0)p||(r+="/"),r+=f.value.replace(I_,"\\$&"),h+=40;else if(f.type===1){const{value:y,repeatable:b,optional:k,regexp:w}=f;i.push({name:y,repeatable:b,optional:k});const A=w||pu;if(A!==pu){h+=10;try{new RegExp(`(${A})`)}catch(S){throw new Error(`Invalid custom RegExp for param "${y}" (${A}): `+S.message)}}let x=b?`((?:${A})(?:/(?:${A}))*)`:`(${A})`;p||(x=k&&u.length<2?`(?:/${x})`:"/"+x),k&&(x+="?"),r+=x,h+=20,k&&(h+=-8),b&&(h+=-20),A===".*"&&(h+=-50)}d.push(h)}s.push(d)}if(n.strict&&n.end){const u=s.length-1;s[u][s[u].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const l=new RegExp(r,n.sensitive?"":"i");function a(u){const d=u.match(l),p={};if(!d)return null;for(let f=1;f<d.length;f++){const h=d[f]||"",y=i[f-1];p[y.name]=h&&y.repeatable?h.split("/"):h}return p}function c(u){let d="",p=!1;for(const f of e){(!p||!d.endsWith("/"))&&(d+="/"),p=!1;for(const h of f)if(h.type===0)d+=h.value;else if(h.type===1){const{value:y,repeatable:b,optional:k}=h,w=y in u?u[y]:"";if($t(w)&&!b)throw new Error(`Provided param "${y}" is an array but it is not repeatable (* or + modifiers)`);const A=$t(w)?w.join("/"):w;if(!A)if(k)f.length<2&&(d.endsWith("/")?d=d.slice(0,-1):p=!0);else throw new Error(`Missing required param "${y}"`);d+=A}}return d||"/"}return{re:l,score:s,keys:i,parse:a,stringify:c}}function U_(e,t){let n=0;for(;n<e.length&&n<t.length;){const s=t[n]-e[n];if(s)return s;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function M_(e,t){let n=0;const s=e.score,r=t.score;for(;n<s.length&&n<r.length;){const i=U_(s[n],r[n]);if(i)return i;n++}if(Math.abs(r.length-s.length)===1){if(fu(s))return 1;if(fu(r))return-1}return r.length-s.length}function fu(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const L_={type:0,value:""},R_=/[a-zA-Z0-9_]/;function N_(e){if(!e)return[[]];if(e==="/")return[[L_]];if(!e.startsWith("/"))throw new Error(`Route paths should start with a "/": "${e}" should be "/${e}".`);function t(h){throw new Error(`ERR (${n})/"${u}": ${h}`)}let n=0,s=n;const r=[];let i;function l(){i&&r.push(i),i=[]}let a=0,c,u="",d="";function p(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:d,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),u="")}function f(){u+=c}for(;a<e.length;){if(c=e[a++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(u&&p(),l()):c===":"?(p(),n=1):f();break;case 4:f(),n=s;break;case 1:c==="("?n=2:R_.test(c)?f():(p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+c:n=3:d+=c;break;case 3:p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,d="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${u}"`),p(),l(),r}function q_(e,t,n){const s=P_(N_(e.path),n);{const i=new Set;for(const l of s.keys)i.has(l.name)&&Ee(`Found duplicated params with name "${l.name}" for path "${e.path}". Only the last one will be available on "$route.params".`),i.add(l.name)}const r=Oe(s,{record:e,parent:t,children:[],alias:[]});return t&&!r.record.aliasOf==!t.record.aliasOf&&t.children.push(r),r}function j_(e,t){const n=[],s=new Map;t=yu({strict:!1,end:!0,sensitive:!1},t);function r(d){return s.get(d)}function i(d,p,f){const h=!f,y=W_(d);K_(y,p),y.aliasOf=f&&f.record;const b=yu(t,d),k=[y];if("alias"in d){const x=typeof d.alias=="string"?[d.alias]:d.alias;for(const S of x)k.push(Oe({},y,{components:f?f.record.components:y.components,path:S,aliasOf:f?f.record:y}))}let w,A;for(const x of k){const{path:S}=x;if(p&&S[0]!=="/"){const C=p.record.path,F=C[C.length-1]==="/"?"":"/";x.path=p.record.path+(S&&F+S)}if(x.path==="*")throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.`);if(w=q_(x,p,b),p&&S[0]==="/"&&G_(w,p),f?(f.alias.push(w),z_(f,w)):(A=A||w,A!==w&&A.alias.push(w),h&&d.name&&!mu(w)&&l(d.name)),y.children){const C=y.children;for(let F=0;F<C.length;F++)i(C[F],w,f&&f.children[F])}f=f||w,(w.record.components&&Object.keys(w.record.components).length||w.record.name||w.record.redirect)&&c(w)}return A?()=>{l(A)}:xo}function l(d){if(pf(d)){const p=s.get(d);p&&(s.delete(d),n.splice(n.indexOf(p),1),p.children.forEach(l),p.alias.forEach(l))}else{const p=n.indexOf(d);p>-1&&(n.splice(p,1),d.record.name&&s.delete(d.record.name),d.children.forEach(l),d.alias.forEach(l))}}function a(){return n}function c(d){let p=0;for(;p<n.length&&M_(d,n[p])>=0&&(d.record.path!==n[p].record.path||!hf(d,n[p]));)p++;n.splice(p,0,d),d.record.name&&!mu(d)&&s.set(d.record.name,d)}function u(d,p){let f,h={},y,b;if("name"in d&&d.name){if(f=s.get(d.name),!f)throw Ws(1,{location:d});{const A=Object.keys(d.params||{}).filter(x=>!f.keys.find(S=>S.name===x));A.length&&Ee(`Discarded invalid param(s) "${A.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`)}b=f.record.name,h=Oe(hu(p.params,f.keys.filter(A=>!A.optional).map(A=>A.name)),d.params&&hu(d.params,f.keys.map(A=>A.name))),y=f.stringify(h)}else if("path"in d)y=d.path,y.startsWith("/")||Ee(`The Matcher cannot resolve relative paths but received "${y}". Unless you directly called \`matcher.resolve("${y}")\`, this is probably a bug in vue-router. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/router.`),f=n.find(A=>A.re.test(y)),f&&(h=f.parse(y),b=f.record.name);else{if(f=p.name?s.get(p.name):n.find(A=>A.re.test(p.path)),!f)throw Ws(1,{location:d,currentLocation:p});b=f.record.name,h=Oe({},p.params,d.params),y=f.stringify(h)}const k=[];let w=f;for(;w;)k.unshift(w.record),w=w.parent;return{name:b,path:y,params:h,matched:k,meta:V_(k)}}return e.forEach(d=>i(d)),{addRoute:i,resolve:u,removeRoute:l,getRoutes:a,getRecordMatcher:r}}function hu(e,t){const n={};for(const s of t)s in e&&(n[s]=e[s]);return n}function W_(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:H_(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function H_(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const s in e.components)t[s]=typeof n=="boolean"?n:n[s];return t}function mu(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function V_(e){return e.reduce((t,n)=>Oe(t,n.meta),{})}function yu(e,t){const n={};for(const s in e)n[s]=s in t?t[s]:e[s];return n}function El(e,t){return e.name===t.name&&e.optional===t.optional&&e.repeatable===t.repeatable}function z_(e,t){for(const n of e.keys)if(!n.optional&&!t.keys.find(El.bind(null,n)))return Ee(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);for(const n of t.keys)if(!n.optional&&!e.keys.find(El.bind(null,n)))return Ee(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`)}function K_(e,t){t&&t.record.name&&!e.name&&!e.path&&Ee(`The route named "${String(t.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`)}function G_(e,t){for(const n of t.keys)if(!e.keys.find(El.bind(null,n)))return Ee(`Absolute path "${e.record.path}" must have the exact same param named "${n.name}" as its parent "${t.record.path}".`)}function hf(e,t){return t.children.some(n=>n===e||hf(e,n))}const mf=/#/g,Y_=/&/g,Q_=/\//g,Z_=/=/g,J_=/\?/g,yf=/\+/g,X_=/%5B/g,eb=/%5D/g,gf=/%5E/g,tb=/%60/g,vf=/%7B/g,nb=/%7C/g,_f=/%7D/g,sb=/%20/g;function Ta(e){return encodeURI(""+e).replace(nb,"|").replace(X_,"[").replace(eb,"]")}function ob(e){return Ta(e).replace(vf,"{").replace(_f,"}").replace(gf,"^")}function Tl(e){return Ta(e).replace(yf,"%2B").replace(sb,"+").replace(mf,"%23").replace(Y_,"%26").replace(tb,"`").replace(vf,"{").replace(_f,"}").replace(gf,"^")}function rb(e){return Tl(e).replace(Z_,"%3D")}function ib(e){return Ta(e).replace(mf,"%23").replace(J_,"%3F")}function lb(e){return e==null?"":ib(e).replace(Q_,"%2F")}function Mo(e){try{return decodeURIComponent(""+e)}catch{Ee(`Error decoding "${e}". Using original value`)}return""+e}function ab(e){const t={};if(e===""||e==="?")return t;const s=(e[0]==="?"?e.slice(1):e).split("&");for(let r=0;r<s.length;++r){const i=s[r].replace(yf," "),l=i.indexOf("="),a=Mo(l<0?i:i.slice(0,l)),c=l<0?null:Mo(i.slice(l+1));if(a in t){let u=t[a];$t(u)||(u=t[a]=[u]),u.push(c)}else t[a]=c}return t}function gu(e){let t="";for(let n in e){const s=e[n];if(n=rb(n),s==null){s!==void 0&&(t+=(t.length?"&":"")+n);continue}($t(s)?s.map(i=>i&&Tl(i)):[s&&Tl(s)]).forEach(i=>{i!==void 0&&(t+=(t.length?"&":"")+n,i!=null&&(t+="="+i))})}return t}function cb(e){const t={};for(const n in e){const s=e[n];s!==void 0&&(t[n]=$t(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return t}const ub=Symbol("router view location matched"),vu=Symbol("router view depth"),Fa=Symbol("router"),bf=Symbol("route location"),Fl=Symbol("router view location");function so(){let e=[];function t(s){return e.push(s),()=>{const r=e.indexOf(s);r>-1&&e.splice(r,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function Bn(e,t,n,s,r){const i=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((l,a)=>{const c=p=>{p===!1?a(Ws(4,{from:n,to:t})):p instanceof Error?a(p):F_(p)?a(Ws(2,{from:t,to:p})):(i&&s.enterCallbacks[r]===i&&typeof p=="function"&&i.push(p),l())},u=e.call(s&&s.instances[r],t,n,db(c,t,n));let d=Promise.resolve(u);if(e.length<3&&(d=d.then(c)),e.length>2){const p=`The "next" callback was never called inside of ${e.name?'"'+e.name+'"':""}:
${e.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;if(typeof u=="object"&&"then"in u)d=d.then(f=>c._called?f:(Ee(p),Promise.reject(new Error("Invalid navigation guard"))));else if(u!==void 0&&!c._called){Ee(p),a(new Error("Invalid navigation guard"));return}}d.catch(p=>a(p))})}function db(e,t,n){let s=0;return function(){s++===1&&Ee(`The "next" callback was called more than once in one navigation guard when going from "${n.fullPath}" to "${t.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`),e._called=!0,s===1&&e.apply(null,arguments)}}function Li(e,t,n,s){const r=[];for(const i of e){!i.components&&!i.children.length&&Ee(`Record with path "${i.path}" is either missing a "component(s)" or "children" property.`);for(const l in i.components){let a=i.components[l];{if(!a||typeof a!="object"&&typeof a!="function")throw Ee(`Component "${l}" in record with path "${i.path}" is not a valid component. Received "${String(a)}".`),new Error("Invalid route component");if("then"in a){Ee(`Component "${l}" in record with path "${i.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`);const c=a;a=()=>c}else a.__asyncLoader&&!a.__warnedDefineAsync&&(a.__warnedDefineAsync=!0,Ee(`Component "${l}" in record with path "${i.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`))}if(!(t!=="beforeRouteEnter"&&!i.instances[l]))if(pb(a)){const u=(a.__vccOpts||a)[t];u&&r.push(Bn(u,n,s,i,l))}else{let c=a();"catch"in c||(Ee(`Component "${l}" in record with path "${i.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`),c=Promise.resolve(c)),r.push(()=>c.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${l}" at "${i.path}"`));const d=p_(u)?u.default:u;i.components[l]=d;const f=(d.__vccOpts||d)[t];return f&&Bn(f,n,s,i,l)()}))}}}return r}function pb(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function _u(e){const t=L(Fa),n=L(bf),s=D(()=>t.resolve(B(e.to))),r=D(()=>{const{matched:c}=s.value,{length:u}=c,d=c[u-1],p=n.matched;if(!d||!p.length)return-1;const f=p.findIndex(Hn.bind(null,d));if(f>-1)return f;const h=bu(c[u-2]);return u>1&&bu(d)===h&&p[p.length-1].path!==h?p.findIndex(Hn.bind(null,c[u-2])):f}),i=D(()=>r.value>-1&&yb(n.params,s.value.params)),l=D(()=>r.value>-1&&r.value===n.matched.length-1&&uf(n.params,s.value.params));function a(c={}){return mb(c)?t[B(e.replace)?"replace":"push"](B(e.to)).catch(xo):Promise.resolve()}if(gn){const c=Bt();if(c){const u={route:s.value,isActive:i.value,isExactActive:l.value};c.__vrl_devtools=c.__vrl_devtools||[],c.__vrl_devtools.push(u),Ss(()=>{u.route=s.value,u.isActive=i.value,u.isExactActive=l.value},{flush:"post"})}}return{route:s,href:D(()=>s.value.href),isActive:i,isExactActive:l,navigate:a}}const fb=ke({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:_u,setup(e,{slots:t}){const n=We(_u(e)),{options:s}=L(Fa),r=D(()=>({[xu(e.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[xu(e.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=t.default&&t.default(n);return e.custom?i:Je("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),hb=fb;function mb(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function yb(e,t){for(const n in t){const s=t[n],r=e[n];if(typeof s=="string"){if(s!==r)return!1}else if(!$t(r)||r.length!==s.length||s.some((i,l)=>i!==r[l]))return!1}return!0}function bu(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const xu=(e,t,n)=>e??t??n,gb=ke({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){_b();const s=L(Fl),r=D(()=>e.route||s.value),i=L(vu,0),l=D(()=>{let u=B(i);const{matched:d}=r.value;let p;for(;(p=d[u])&&!p.components;)u++;return u}),a=D(()=>r.value.matched[l.value]);Ct(vu,D(()=>l.value+1)),Ct(ub,a),Ct(Fl,r);const c=Y();return ge(()=>[c.value,a.value,e.name],([u,d,p],[f,h,y])=>{d&&(d.instances[p]=u,h&&h!==d&&u&&u===f&&(d.leaveGuards.size||(d.leaveGuards=h.leaveGuards),d.updateGuards.size||(d.updateGuards=h.updateGuards))),u&&d&&(!h||!Hn(d,h)||!f)&&(d.enterCallbacks[p]||[]).forEach(b=>b(u))},{flush:"post"}),()=>{const u=r.value,d=e.name,p=a.value,f=p&&p.components[d];if(!f)return wu(n.default,{Component:f,route:u});const h=p.props[d],y=h?h===!0?u.params:typeof h=="function"?h(u):h:null,k=Je(f,Oe({},y,t,{onVnodeUnmounted:w=>{w.component.isUnmounted&&(p.instances[d]=null)},ref:c}));if(gn&&k.ref){const w={depth:l.value,name:p.name,path:p.path,meta:p.meta};($t(k.ref)?k.ref.map(x=>x.i):[k.ref.i]).forEach(x=>{x.__vrv_devtools=w})}return wu(n.default,{Component:k,route:u})||k}}});function wu(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const vb=gb;function _b(){const e=Bt(),t=e.parent&&e.parent.type.name,n=e.parent&&e.parent.subTree&&e.parent.subTree.type;if(t&&(t==="KeepAlive"||t.includes("Transition"))&&typeof n=="object"&&n.name==="RouterView"){const s=t==="KeepAlive"?"keep-alive":"transition";Ee(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.
Use slot props instead:

<router-view v-slot="{ Component }">
  <${s}>
    <component :is="Component" />
  </${s}>
</router-view>`)}}function oo(e,t){const n=Oe({},e,{matched:e.matched.map(s=>Tb(s,["instances","children","aliasOf"]))});return{_custom:{type:null,readOnly:!0,display:e.fullPath,tooltip:t,value:n}}}function mr(e){return{_custom:{display:e}}}let bb=0;function xb(e,t,n){if(t.__hasDevtools)return;t.__hasDevtools=!0;const s=bb++;d_({id:"org.vuejs.router"+(s?"."+s:""),label:"Vue Router",packageName:"vue-router",homepage:"https://router.vuejs.org",logo:"https://router.vuejs.org/logo.png",componentStateTypes:["Routing"],app:e},r=>{typeof r.now!="function"&&console.warn("[Vue Router]: You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."),r.on.inspectComponent((d,p)=>{d.instanceData&&d.instanceData.state.push({type:"Routing",key:"$route",editable:!1,value:oo(t.currentRoute.value,"Current Route")})}),r.on.visitComponentTree(({treeNode:d,componentInstance:p})=>{if(p.__vrv_devtools){const f=p.__vrv_devtools;d.tags.push({label:(f.name?`${f.name.toString()}: `:"")+f.path,textColor:0,tooltip:"This component is rendered by &lt;router-view&gt;",backgroundColor:xf})}$t(p.__vrl_devtools)&&(p.__devtoolsApi=r,p.__vrl_devtools.forEach(f=>{let h=Af,y="";f.isExactActive?(h=kf,y="This is exactly active"):f.isActive&&(h=wf,y="This link is active"),d.tags.push({label:f.route.path,textColor:0,tooltip:y,backgroundColor:h})}))}),ge(t.currentRoute,()=>{c(),r.notifyComponentUpdate(),r.sendInspectorTree(a),r.sendInspectorState(a)});const i="router:navigations:"+s;r.addTimelineLayer({id:i,label:`Router${s?" "+s:""} Navigations`,color:4237508}),t.onError((d,p)=>{r.addTimelineEvent({layerId:i,event:{title:"Error during Navigation",subtitle:p.fullPath,logType:"error",time:r.now(),data:{error:d},groupId:p.meta.__navigationId}})});let l=0;t.beforeEach((d,p)=>{const f={guard:mr("beforeEach"),from:oo(p,"Current Location during this navigation"),to:oo(d,"Target location")};Object.defineProperty(d.meta,"__navigationId",{value:l++}),r.addTimelineEvent({layerId:i,event:{time:r.now(),title:"Start of navigation",subtitle:d.fullPath,data:f,groupId:d.meta.__navigationId}})}),t.afterEach((d,p,f)=>{const h={guard:mr("afterEach")};f?(h.failure={_custom:{type:Error,readOnly:!0,display:f?f.message:"",tooltip:"Navigation Failure",value:f}},h.status=mr("❌")):h.status=mr("✅"),h.from=oo(p,"Current Location during this navigation"),h.to=oo(d,"Target location"),r.addTimelineEvent({layerId:i,event:{title:"End of navigation",subtitle:d.fullPath,time:r.now(),data:h,logType:f?"warning":"default",groupId:d.meta.__navigationId}})});const a="router-inspector:"+s;r.addInspector({id:a,label:"Routes"+(s?" "+s:""),icon:"book",treeFilterPlaceholder:"Search routes"});function c(){if(!u)return;const d=u;let p=n.getRoutes().filter(f=>!f.parent);p.forEach(Ef),d.filter&&(p=p.filter(f=>$l(f,d.filter.toLowerCase()))),p.forEach(f=>Cf(f,t.currentRoute.value)),d.rootNodes=p.map(Sf)}let u;r.on.getInspectorTree(d=>{u=d,d.app===e&&d.inspectorId===a&&c()}),r.on.getInspectorState(d=>{if(d.app===e&&d.inspectorId===a){const f=n.getRoutes().find(h=>h.record.__vd_id===d.nodeId);f&&(d.state={options:kb(f)})}}),r.sendInspectorTree(a),r.sendInspectorState(a)})}function wb(e){return e.optional?e.repeatable?"*":"?":e.repeatable?"+":""}function kb(e){const{record:t}=e,n=[{editable:!1,key:"path",value:t.path}];return t.name!=null&&n.push({editable:!1,key:"name",value:t.name}),n.push({editable:!1,key:"regexp",value:e.re}),e.keys.length&&n.push({editable:!1,key:"keys",value:{_custom:{type:null,readOnly:!0,display:e.keys.map(s=>`${s.name}${wb(s)}`).join(" "),tooltip:"Param keys",value:e.keys}}}),t.redirect!=null&&n.push({editable:!1,key:"redirect",value:t.redirect}),e.alias.length&&n.push({editable:!1,key:"aliases",value:e.alias.map(s=>s.record.path)}),Object.keys(e.record.meta).length&&n.push({editable:!1,key:"meta",value:e.record.meta}),n.push({key:"score",editable:!1,value:{_custom:{type:null,readOnly:!0,display:e.score.map(s=>s.join(", ")).join(" | "),tooltip:"Score used to sort routes",value:e.score}}}),n}const xf=15485081,wf=2450411,kf=8702998,Ab=2282478,Af=16486972,Sb=6710886;function Sf(e){const t=[],{record:n}=e;n.name!=null&&t.push({label:String(n.name),textColor:0,backgroundColor:Ab}),n.aliasOf&&t.push({label:"alias",textColor:0,backgroundColor:Af}),e.__vd_match&&t.push({label:"matches",textColor:0,backgroundColor:xf}),e.__vd_exactActive&&t.push({label:"exact",textColor:0,backgroundColor:kf}),e.__vd_active&&t.push({label:"active",textColor:0,backgroundColor:wf}),n.redirect&&t.push({label:typeof n.redirect=="string"?`redirect: ${n.redirect}`:"redirects",textColor:16777215,backgroundColor:Sb});let s=n.__vd_id;return s==null&&(s=String(Cb++),n.__vd_id=s),{id:s,label:n.path,tags:t,children:e.children.map(Sf)}}let Cb=0;const Eb=/^\/(.*)\/([a-z]*)$/;function Cf(e,t){const n=t.matched.length&&Hn(t.matched[t.matched.length-1],e.record);e.__vd_exactActive=e.__vd_active=n,n||(e.__vd_active=t.matched.some(s=>Hn(s,e.record))),e.children.forEach(s=>Cf(s,t))}function Ef(e){e.__vd_match=!1,e.children.forEach(Ef)}function $l(e,t){const n=String(e.re).match(Eb);if(e.__vd_match=!1,!n||n.length<3)return!1;if(new RegExp(n[1].replace(/\$$/,""),n[2]).test(t))return e.children.forEach(l=>$l(l,t)),e.record.path!=="/"||t==="/"?(e.__vd_match=e.re.test(t),!0):!1;const r=e.record.path.toLowerCase(),i=Mo(r);return!t.startsWith("/")&&(i.includes(t)||r.includes(t))||i.startsWith(t)||r.startsWith(t)||e.record.name&&String(e.record.name).includes(t)?!0:e.children.some(l=>$l(l,t))}function Tb(e,t){const n={};for(const s in e)t.includes(s)||(n[s]=e[s]);return n}function Fb(e){const t=j_(e.routes,e),n=e.parseQuery||ab,s=e.stringifyQuery||gu,r=e.history;if(!r)throw new Error('Provide the "history" option when calling "createRouter()": https://next.router.vuejs.org/api/#history.');const i=so(),l=so(),a=so(),c=an(En);let u=En;gn&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=Ui.bind(null,$=>""+$),p=Ui.bind(null,lb),f=Ui.bind(null,Mo);function h($,Z){let X,te;return pf($)?(X=t.getRecordMatcher($),te=Z):te=$,t.addRoute(te,X)}function y($){const Z=t.getRecordMatcher($);Z?t.removeRoute(Z):Ee(`Cannot remove non-existent route "${String($)}"`)}function b(){return t.getRoutes().map($=>$.record)}function k($){return!!t.getRecordMatcher($)}function w($,Z){if(Z=Oe({},Z||c.value),typeof $=="string"){const _=Mi(n,$,Z.path),E=t.resolve({path:_.path},Z),P=r.createHref(_.fullPath);return P.startsWith("//")?Ee(`Location "${$}" resolved to "${P}". A resolved location cannot start with multiple slashes.`):E.matched.length||Ee(`No match found for location with path "${$}"`),Oe(_,E,{params:f(E.params),hash:Mo(_.hash),redirectedFrom:void 0,href:P})}let X;if("path"in $)"params"in $&&!("name"in $)&&Object.keys($.params).length&&Ee(`Path "${$.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`),X=Oe({},$,{path:Mi(n,$.path,Z.path).path});else{const _=Oe({},$.params);for(const E in _)_[E]==null&&delete _[E];X=Oe({},$,{params:p(_)}),Z.params=p(Z.params)}const te=t.resolve(X,Z),we=$.hash||"";we&&!we.startsWith("#")&&Ee(`A \`hash\` should always start with the character "#". Replace "${we}" with "#${we}".`),te.params=d(f(te.params));const Ue=m_(s,Oe({},$,{hash:ob(we),path:te.path})),g=r.createHref(Ue);return g.startsWith("//")?Ee(`Location "${$}" resolved to "${g}". A resolved location cannot start with multiple slashes.`):te.matched.length||Ee(`No match found for location with path "${"path"in $?$.path:$}"`),Oe({fullPath:Ue,hash:we,query:s===gu?cb($.query):$.query||{}},te,{redirectedFrom:void 0,href:g})}function A($){return typeof $=="string"?Mi(n,$,c.value.path):Oe({},$)}function x($,Z){if(u!==$)return Ws(8,{from:Z,to:$})}function S($){return U($)}function C($){return S(Oe(A($),{replace:!0}))}function F($){const Z=$.matched[$.matched.length-1];if(Z&&Z.redirect){const{redirect:X}=Z;let te=typeof X=="function"?X($):X;if(typeof te=="string"&&(te=te.includes("?")||te.includes("#")?te=A(te):{path:te},te.params={}),!("path"in te)&&!("name"in te))throw Ee(`Invalid redirect found:
${JSON.stringify(te,null,2)}
 when navigating to "${$.fullPath}". A redirect must contain a name or path. This will break in production.`),new Error("Invalid redirect");return Oe({query:$.query,hash:$.hash,params:"path"in te?{}:$.params},te)}}function U($,Z){const X=u=w($),te=c.value,we=$.state,Ue=$.force,g=$.replace===!0,_=F(X);if(_)return U(Oe(A(_),{state:typeof _=="object"?Oe({},we,_.state):we,force:Ue,replace:g}),Z||X);const E=X;E.redirectedFrom=Z;let P;return!Ue&&lu(s,te,X)&&(P=Ws(16,{to:E,from:te}),Dt(te,te,!0,!1)),(P?Promise.resolve(P):ne(E,te)).catch(I=>pn(I)?pn(I,2)?I:Ie(I):ae(I,E,te)).then(I=>{if(I){if(pn(I,2))return lu(s,w(I.to),E)&&Z&&(Z._count=Z._count?Z._count+1:1)>30?(Ee(`Detected a possibly infinite redirection in a navigation guard when going from "${te.fullPath}" to "${E.fullPath}". Aborting to avoid a Stack Overflow.
 Are you always returning a new location within a navigation guard? That would lead to this error. Only return when redirecting or aborting, that should fix this. This might break in production if not fixed.`),Promise.reject(new Error("Infinite redirect in navigation guard"))):U(Oe({replace:g},A(I.to),{state:typeof I.to=="object"?Oe({},we,I.to.state):we,force:Ue}),Z||E)}else I=Q(E,te,!0,g,we);return ue(E,te,I),I})}function O($,Z){const X=x($,Z);return X?Promise.reject(X):Promise.resolve()}function q($){const Z=Zt.values().next().value;return Z&&typeof Z.runWithContext=="function"?Z.runWithContext($):$()}function ne($,Z){let X;const[te,we,Ue]=$b($,Z);X=Li(te.reverse(),"beforeRouteLeave",$,Z);for(const _ of te)_.leaveGuards.forEach(E=>{X.push(Bn(E,$,Z))});const g=O.bind(null,$,Z);return X.push(g),Ot(X).then(()=>{X=[];for(const _ of i.list())X.push(Bn(_,$,Z));return X.push(g),Ot(X)}).then(()=>{X=Li(we,"beforeRouteUpdate",$,Z);for(const _ of we)_.updateGuards.forEach(E=>{X.push(Bn(E,$,Z))});return X.push(g),Ot(X)}).then(()=>{X=[];for(const _ of $.matched)if(_.beforeEnter&&!Z.matched.includes(_))if($t(_.beforeEnter))for(const E of _.beforeEnter)X.push(Bn(E,$,Z));else X.push(Bn(_.beforeEnter,$,Z));return X.push(g),Ot(X)}).then(()=>($.matched.forEach(_=>_.enterCallbacks={}),X=Li(Ue,"beforeRouteEnter",$,Z),X.push(g),Ot(X))).then(()=>{X=[];for(const _ of l.list())X.push(Bn(_,$,Z));return X.push(g),Ot(X)}).catch(_=>pn(_,8)?_:Promise.reject(_))}function ue($,Z,X){for(const te of a.list())q(()=>te($,Z,X))}function Q($,Z,X,te,we){const Ue=x($,Z);if(Ue)return Ue;const g=Z===En,_=gn?history.state:{};X&&(te||g?r.replace($.fullPath,Oe({scroll:g&&_&&_.scroll},we)):r.push($.fullPath,we)),c.value=$,Dt($,Z,X,g),Ie()}let me;function ve(){me||(me=r.listen(($,Z,X)=>{if(!Gn.listening)return;const te=w($),we=F(te);if(we){U(Oe(we,{replace:!0}),te).catch(xo);return}u=te;const Ue=c.value;gn&&k_(cu(Ue.fullPath,X.delta),gi()),ne(te,Ue).catch(g=>pn(g,12)?g:pn(g,2)?(U(g.to,te).then(_=>{pn(_,20)&&!X.delta&&X.type===Uo.pop&&r.go(-1,!1)}).catch(xo),Promise.reject()):(X.delta&&r.go(-X.delta,!1),ae(g,te,Ue))).then(g=>{g=g||Q(te,Ue,!1),g&&(X.delta&&!pn(g,8)?r.go(-X.delta,!1):X.type===Uo.pop&&pn(g,20)&&r.go(-1,!1)),ue(te,Ue,g)}).catch(xo)}))}let be=so(),Pe=so(),ee;function ae($,Z,X){Ie($);const te=Pe.list();return te.length?te.forEach(we=>we($,Z,X)):(Ee("uncaught error during route navigation:"),console.error($)),Promise.reject($)}function Ae(){return ee&&c.value!==En?Promise.resolve():new Promise(($,Z)=>{be.add([$,Z])})}function Ie($){return ee||(ee=!$,ve(),be.list().forEach(([Z,X])=>$?X($):Z()),be.reset()),$}function Dt($,Z,X,te){const{scrollBehavior:we}=e;if(!gn||!we)return Promise.resolve();const Ue=!X&&A_(cu($.fullPath,0))||(te||!X)&&history.state&&history.state.scroll||null;return rt().then(()=>we($,Z,Ue)).then(g=>g&&w_(g)).catch(g=>ae(g,$,Z))}const st=$=>r.go($);let gt;const Zt=new Set,Gn={currentRoute:c,listening:!0,addRoute:h,removeRoute:y,hasRoute:k,getRoutes:b,resolve:w,options:e,push:S,replace:C,go:st,back:()=>st(-1),forward:()=>st(1),beforeEach:i.add,beforeResolve:l.add,afterEach:a.add,onError:Pe.add,isReady:Ae,install($){const Z=this;$.component("RouterLink",hb),$.component("RouterView",vb),$.config.globalProperties.$router=Z,Object.defineProperty($.config.globalProperties,"$route",{enumerable:!0,get:()=>B(c)}),gn&&!gt&&c.value===En&&(gt=!0,S(r.location).catch(we=>{Ee("Unexpected error when starting the router:",we)}));const X={};for(const we in En)X[we]=D(()=>c.value[we]);$.provide(Fa,Z),$.provide(bf,We(X)),$.provide(Fl,c);const te=$.unmount;Zt.add($),$.unmount=function(){Zt.delete($),Zt.size<1&&(u=En,me&&me(),me=null,c.value=En,gt=!1,ee=!1),te()},gn&&xb($,Z,t)}};function Ot($){return $.reduce((Z,X)=>Z.then(()=>q(X)),Promise.resolve())}return Gn}function $b(e,t){const n=[],s=[],r=[],i=Math.max(t.matched.length,e.matched.length);for(let l=0;l<i;l++){const a=t.matched[l];a&&(e.matched.find(u=>Hn(u,a))?s.push(a):n.push(a));const c=e.matched[l];c&&(t.matched.find(u=>Hn(u,c))||r.push(c))}return[n,s,r]}const Ri=Y(!1),ko=Y(!1),Ps=Y(!1),Bb=Y(!0),Bl=xv({xs:460,...bv}),_s=s_(),Tf=Yv(),Db=D(()=>_s.height.value-_s.width.value/Un>180),Ff=Kv(Kt?document.body:null),Rn=gv(),Ob=D(()=>{var e,t;return["INPUT","TEXTAREA"].includes(((e=Rn.value)==null?void 0:e.tagName)||"")||((t=Rn.value)==null?void 0:t.classList.contains("CodeMirror-code"))}),Ib=D(()=>{var e;return["BUTTON","A"].includes(((e=Rn.value)==null?void 0:e.tagName)||"")});Gt("slidev-camera","default");Gt("slidev-mic","default");const Sr=Gt("slidev-scale",0),pt=Gt("slidev-show-overview",!1),Ni=Gt("slidev-presenter-cursor",!0),ku=Gt("slidev-show-editor",!1);Gt("slidev-editor-width",Kt?window.innerWidth*.4:100);const $f=of(pt);function Au(e,t,n,s=r=>r){return e*s(.5-t*(.5-n))}function Pb(e){return[-e[0],-e[1]]}function Wt(e,t){return[e[0]+t[0],e[1]+t[1]]}function Ut(e,t){return[e[0]-t[0],e[1]-t[1]]}function jt(e,t){return[e[0]*t,e[1]*t]}function Ub(e,t){return[e[0]/t,e[1]/t]}function ro(e){return[e[1],-e[0]]}function Su(e,t){return e[0]*t[0]+e[1]*t[1]}function Mb(e,t){return e[0]===t[0]&&e[1]===t[1]}function Lb(e){return Math.hypot(e[0],e[1])}function Rb(e){return e[0]*e[0]+e[1]*e[1]}function Cu(e,t){return Rb(Ut(e,t))}function Bf(e){return Ub(e,Lb(e))}function Nb(e,t){return Math.hypot(e[1]-t[1],e[0]-t[0])}function io(e,t,n){let s=Math.sin(n),r=Math.cos(n),i=e[0]-t[0],l=e[1]-t[1],a=i*r-l*s,c=i*s+l*r;return[a+t[0],c+t[1]]}function Dl(e,t,n){return Wt(e,jt(Ut(t,e),n))}function Eu(e,t,n){return Wt(e,jt(t,n))}var{min:Ds,PI:qb}=Math,Tu=.275,lo=qb+1e-4;function jb(e,t={}){let{size:n=16,smoothing:s=.5,thinning:r=.5,simulatePressure:i=!0,easing:l=ee=>ee,start:a={},end:c={},last:u=!1}=t,{cap:d=!0,easing:p=ee=>ee*(2-ee)}=a,{cap:f=!0,easing:h=ee=>--ee*ee*ee+1}=c;if(e.length===0||n<=0)return[];let y=e[e.length-1].runningLength,b=a.taper===!1?0:a.taper===!0?Math.max(n,y):a.taper,k=c.taper===!1?0:c.taper===!0?Math.max(n,y):c.taper,w=Math.pow(n*s,2),A=[],x=[],S=e.slice(0,10).reduce((ee,ae)=>{let Ae=ae.pressure;if(i){let Ie=Ds(1,ae.distance/n),Dt=Ds(1,1-Ie);Ae=Ds(1,ee+(Dt-ee)*(Ie*Tu))}return(ee+Ae)/2},e[0].pressure),C=Au(n,r,e[e.length-1].pressure,l),F,U=e[0].vector,O=e[0].point,q=O,ne=O,ue=q,Q=!1;for(let ee=0;ee<e.length;ee++){let{pressure:ae}=e[ee],{point:Ae,vector:Ie,distance:Dt,runningLength:st}=e[ee];if(ee<e.length-1&&y-st<3)continue;if(r){if(i){let te=Ds(1,Dt/n),we=Ds(1,1-te);ae=Ds(1,S+(we-S)*(te*Tu))}C=Au(n,r,ae,l)}else C=n/2;F===void 0&&(F=C);let gt=st<b?p(st/b):1,Zt=y-st<k?h((y-st)/k):1;C=Math.max(.01,C*Math.min(gt,Zt));let Gn=(ee<e.length-1?e[ee+1]:e[ee]).vector,Ot=ee<e.length-1?Su(Ie,Gn):1,$=Su(Ie,U)<0&&!Q,Z=Ot!==null&&Ot<0;if($||Z){let te=jt(ro(U),C);for(let we=1/13,Ue=0;Ue<=1;Ue+=we)ne=io(Ut(Ae,te),Ae,lo*Ue),A.push(ne),ue=io(Wt(Ae,te),Ae,lo*-Ue),x.push(ue);O=ne,q=ue,Z&&(Q=!0);continue}if(Q=!1,ee===e.length-1){let te=jt(ro(Ie),C);A.push(Ut(Ae,te)),x.push(Wt(Ae,te));continue}let X=jt(ro(Dl(Gn,Ie,Ot)),C);ne=Ut(Ae,X),(ee<=1||Cu(O,ne)>w)&&(A.push(ne),O=ne),ue=Wt(Ae,X),(ee<=1||Cu(q,ue)>w)&&(x.push(ue),q=ue),S=ae,U=Ie}let me=e[0].point.slice(0,2),ve=e.length>1?e[e.length-1].point.slice(0,2):Wt(e[0].point,[1,1]),be=[],Pe=[];if(e.length===1){if(!(b||k)||u){let ee=Eu(me,Bf(ro(Ut(me,ve))),-(F||C)),ae=[];for(let Ae=1/13,Ie=Ae;Ie<=1;Ie+=Ae)ae.push(io(ee,me,lo*2*Ie));return ae}}else{if(!(b||k&&e.length===1))if(d)for(let ae=1/13,Ae=ae;Ae<=1;Ae+=ae){let Ie=io(x[0],me,lo*Ae);be.push(Ie)}else{let ae=Ut(A[0],x[0]),Ae=jt(ae,.5),Ie=jt(ae,.51);be.push(Ut(me,Ae),Ut(me,Ie),Wt(me,Ie),Wt(me,Ae))}let ee=ro(Pb(e[e.length-1].vector));if(k||b&&e.length===1)Pe.push(ve);else if(f){let ae=Eu(ve,ee,C);for(let Ae=1/29,Ie=Ae;Ie<1;Ie+=Ae)Pe.push(io(ae,ve,lo*3*Ie))}else Pe.push(Wt(ve,jt(ee,C)),Wt(ve,jt(ee,C*.99)),Ut(ve,jt(ee,C*.99)),Ut(ve,jt(ee,C)))}return A.concat(Pe,x.reverse(),be)}function Wb(e,t={}){var n;let{streamline:s=.5,size:r=16,last:i=!1}=t;if(e.length===0)return[];let l=.15+(1-s)*.85,a=Array.isArray(e[0])?e:e.map(({x:h,y,pressure:b=.5})=>[h,y,b]);if(a.length===2){let h=a[1];a=a.slice(0,-1);for(let y=1;y<5;y++)a.push(Dl(a[0],h,y/4))}a.length===1&&(a=[...a,[...Wt(a[0],[1,1]),...a[0].slice(2)]]);let c=[{point:[a[0][0],a[0][1]],pressure:a[0][2]>=0?a[0][2]:.25,vector:[1,1],distance:0,runningLength:0}],u=!1,d=0,p=c[0],f=a.length-1;for(let h=1;h<a.length;h++){let y=i&&h===f?a[h].slice(0,2):Dl(p.point,a[h],l);if(Mb(p.point,y))continue;let b=Nb(y,p.point);if(d+=b,h<f&&!u){if(d<r)continue;u=!0}p={point:y,pressure:a[h][2]>=0?a[h][2]:.5,vector:Bf(Ut(p.point,y)),distance:b,runningLength:d},c.push(p)}return c[0].vector=((n=c[1])==null?void 0:n.vector)||[0,0],c}function Hb(e,t={}){return jb(Wb(e,t),t)}var Vb=()=>({events:{},emit(e,...t){let n=this.events[e]||[];for(let s=0,r=n.length;s<r;s++)n[s](...t)},on(e,t){var n;return(n=this.events[e])!=null&&n.push(t)||(this.events[e]=[t]),()=>{var s;this.events[e]=(s=this.events[e])==null?void 0:s.filter(r=>t!==r)}}});function Gr(e,t){return e-t}function zb(e){return e<0?-1:1}function Yr(e){return[Math.abs(e),zb(e)]}function Df(){const e=()=>((1+Math.random())*65536|0).toString(16).substring(1);return`${e()+e()}-${e()}-${e()}-${e()}-${e()}${e()}${e()}`}var Kb=2,vn=Kb,Vs=class{constructor(e){this.drauu=e,this.event=void 0,this.point=void 0,this.start=void 0,this.el=null}onSelected(e){}onUnselected(){}onStart(e){}onMove(e){return!1}onEnd(e){}get brush(){return this.drauu.brush}get shiftPressed(){return this.drauu.shiftPressed}get altPressed(){return this.drauu.altPressed}get svgElement(){return this.drauu.el}getMousePosition(e){var t;const n=this.drauu.el,s=this.drauu.options.coordinateScale??1;if(this.drauu.options.coordinateTransform===!1){const r=this.drauu.el.getBoundingClientRect();return{x:(e.pageX-r.left)*s,y:(e.pageY-r.top)*s,pressure:e.pressure}}else{const r=this.drauu.svgPoint;r.x=e.clientX,r.y=e.clientY;const i=r.matrixTransform((t=n.getScreenCTM())==null?void 0:t.inverse());return{x:i.x*s,y:i.y*s,pressure:e.pressure}}}createElement(e,t){const n=document.createElementNS("http://www.w3.org/2000/svg",e),s=t?{...this.brush,...t}:this.brush;return n.setAttribute("fill",s.fill??"transparent"),n.setAttribute("stroke",s.color),n.setAttribute("stroke-width",s.size.toString()),n.setAttribute("stroke-linecap","round"),s.dasharray&&n.setAttribute("stroke-dasharray",s.dasharray),n}attr(e,t){this.el.setAttribute(e,typeof t=="string"?t:t.toFixed(vn))}_setEvent(e){this.event=e,this.point=this.getMousePosition(e)}_eventDown(e){return this._setEvent(e),this.start=this.point,this.onStart(this.point)}_eventMove(e){return this._setEvent(e),this.onMove(this.point)}_eventUp(e){return this._setEvent(e),this.onEnd(this.point)}},Gb=class extends Vs{constructor(){super(...arguments),this.points=[]}onStart(e){return this.el=document.createElementNS("http://www.w3.org/2000/svg","path"),this.points=[e],this.attr("fill",this.brush.color),this.attr("d",this.getSvgData(this.points)),this.el}onMove(e){return this.el||this.onStart(e),this.points[this.points.length-1]!==e&&this.points.push(e),this.attr("d",this.getSvgData(this.points)),!0}onEnd(){const e=this.el;return this.el=null,!!e}getSvgData(e){const t=Hb(e,{size:this.brush.size*2,thinning:.9,simulatePressure:!1,start:{taper:5},end:{taper:5},...this.brush.stylusOptions});if(!t.length)return"";const n=t.reduce((s,[r,i],l,a)=>{const[c,u]=a[(l+1)%a.length];return s.push(r,i,(r+c)/2,(i+u)/2),s},["M",...t[0],"Q"]);return n.push("Z"),n.map(s=>typeof s=="number"?s.toFixed(2):s).join(" ")}},Yb=class extends Vs{onStart(e){return this.el=this.createElement("ellipse"),this.attr("cx",e.x),this.attr("cy",e.y),this.el}onMove(e){if(!this.el||!this.start)return!1;let[t,n]=Yr(e.x-this.start.x),[s,r]=Yr(e.y-this.start.y);if(this.shiftPressed){const i=Math.min(t,s);t=i,s=i}if(this.altPressed)this.attr("cx",this.start.x),this.attr("cy",this.start.y),this.attr("rx",t),this.attr("ry",s);else{const[i,l]=[this.start.x,this.start.x+t*n].sort(Gr),[a,c]=[this.start.y,this.start.y+s*r].sort(Gr);this.attr("cx",(i+l)/2),this.attr("cy",(a+c)/2),this.attr("rx",(l-i)/2),this.attr("ry",(c-a)/2)}return!0}onEnd(){const e=this.el;return this.el=null,!(!e||!e.getTotalLength())}};function Of(e,t){const n=document.createElementNS("http://www.w3.org/2000/svg","defs"),s=document.createElementNS("http://www.w3.org/2000/svg","marker"),r=document.createElementNS("http://www.w3.org/2000/svg","path");return r.setAttribute("fill",t),s.setAttribute("id",e),s.setAttribute("viewBox","0 -5 10 10"),s.setAttribute("refX","5"),s.setAttribute("refY","0"),s.setAttribute("markerWidth","4"),s.setAttribute("markerHeight","4"),s.setAttribute("orient","auto"),r.setAttribute("d","M0,-5L10,0L0,5"),s.appendChild(r),n.appendChild(s),n}var Qb=class extends Vs{onStart(e){if(this.el=this.createElement("line",{fill:"transparent"}),this.attr("x1",e.x),this.attr("y1",e.y),this.attr("x2",e.x),this.attr("y2",e.y),this.brush.arrowEnd){const t=Df(),n=document.createElementNS("http://www.w3.org/2000/svg","g");return n.append(Of(t,this.brush.color)),n.append(this.el),this.attr("marker-end",`url(#${t})`),n}return this.el}onMove(e){if(!this.el)return!1;let{x:t,y:n}=e;if(this.shiftPressed){const s=e.x-this.start.x,r=e.y-this.start.y;if(r!==0){let i=s/r;i=Math.round(i),Math.abs(i)<=1?(t=this.start.x+r*i,n=this.start.y+r):(t=this.start.x+s,n=this.start.y)}}return this.altPressed?(this.attr("x1",this.start.x*2-t),this.attr("y1",this.start.y*2-n),this.attr("x2",t),this.attr("y2",n)):(this.attr("x1",this.start.x),this.attr("y1",this.start.y),this.attr("x2",t),this.attr("y2",n)),!0}onEnd(){const e=this.el;return this.el=null,!(!e||e.getTotalLength()<5)}},Zb=class extends Vs{onStart(e){return this.el=this.createElement("rect"),this.brush.cornerRadius&&(this.attr("rx",this.brush.cornerRadius),this.attr("ry",this.brush.cornerRadius)),this.attr("x",e.x),this.attr("y",e.y),this.el}onMove(e){if(!this.el||!this.start)return!1;let[t,n]=Yr(e.x-this.start.x),[s,r]=Yr(e.y-this.start.y);if(this.shiftPressed){const i=Math.min(t,s);t=i,s=i}if(this.altPressed)this.attr("x",this.start.x-t),this.attr("y",this.start.y-s),this.attr("width",t*2),this.attr("height",s*2);else{const[i,l]=[this.start.x,this.start.x+t*n].sort(Gr),[a,c]=[this.start.y,this.start.y+s*r].sort(Gr);this.attr("x",i),this.attr("y",a),this.attr("width",l-i),this.attr("height",c-a)}return!0}onEnd(){const e=this.el;return this.el=null,!(!e||!e.getTotalLength())}};function Jb(e,t){const n=e.x-t.x,s=e.y-t.y;return n*n+s*s}function Xb(e,t,n){let s=t.x,r=t.y,i=n.x-s,l=n.y-r;if(i!==0||l!==0){const a=((e.x-s)*i+(e.y-r)*l)/(i*i+l*l);a>1?(s=n.x,r=n.y):a>0&&(s+=i*a,r+=l*a)}return i=e.x-s,l=e.y-r,i*i+l*l}function ex(e,t){let n=e[0];const s=[n];let r;for(let i=1,l=e.length;i<l;i++)r=e[i],Jb(r,n)>t&&(s.push(r),n=r);return n!==r&&r&&s.push(r),s}function Ol(e,t,n,s,r){let i=s,l=0;for(let a=t+1;a<n;a++){const c=Xb(e[a],e[t],e[n]);c>i&&(l=a,i=c)}i>s&&(l-t>1&&Ol(e,t,l,s,r),r.push(e[l]),n-l>1&&Ol(e,l,n,s,r))}function tx(e,t){const n=e.length-1,s=[e[0]];return Ol(e,0,n,t,s),s.push(e[n]),s}function Fu(e,t,n=!1){if(e.length<=2)return e;const s=t!==void 0?t*t:1;return e=n?e:ex(e,s),e=tx(e,s),e}var nx=class extends Vs{constructor(){super(...arguments),this.points=[],this.count=0}onStart(e){if(this.el=this.createElement("path",{fill:"transparent"}),this.points=[e],this.brush.arrowEnd){this.arrowId=Df();const t=Of(this.arrowId,this.brush.color);this.el.appendChild(t)}return this.el}onMove(e){return this.el||this.onStart(e),this.points[this.points.length-1]!==e&&(this.points.push(e),this.count+=1),this.count>5&&(this.points=Fu(this.points,1,!0),this.count=0),this.attr("d",Bu(this.points)),!0}onEnd(){const e=this.el;return this.el=null,!(!e||(e.setAttribute("d",Bu(Fu(this.points,1,!0))),!e.getTotalLength()))}};function sx(e,t){const n=t.x-e.x,s=t.y-e.y;return{length:Math.sqrt(n**2+s**2),angle:Math.atan2(s,n)}}function $u(e,t,n,s){const r=t||e,i=n||e,l=.2,a=sx(r,i),c=a.angle+(s?Math.PI:0),u=a.length*l,d=e.x+Math.cos(c)*u,p=e.y+Math.sin(c)*u;return{x:d,y:p}}function ox(e,t,n){const s=$u(n[t-1],n[t-2],e),r=$u(e,n[t-1],n[t+1],!0);return`C ${s.x.toFixed(vn)},${s.y.toFixed(vn)} ${r.x.toFixed(vn)},${r.y.toFixed(vn)} ${e.x.toFixed(vn)},${e.y.toFixed(vn)}`}function Bu(e){return e.reduce((t,n,s,r)=>s===0?`M ${n.x.toFixed(vn)},${n.y.toFixed(vn)}`:`${t} ${ox(n,s,r)}`,"")}var rx=class extends Vs{constructor(){super(...arguments),this.pathSubFactor=20,this.pathFragments=[]}onSelected(e){const t=(n,s)=>{if(n&&n.length)for(let r=0;r<n.length;r++){const i=n[r];if(i.getTotalLength){const l=i.getTotalLength();for(let a=0;a<this.pathSubFactor;a++){const c=i.getPointAtLength(l*a/this.pathSubFactor),u=i.getPointAtLength(l*(a+1)/this.pathSubFactor);this.pathFragments.push({x1:c.x,x2:u.x,y1:c.y,y2:u.y,segment:a,element:s||i})}}else i.children&&t(i.children,i)}};e&&t(e.children)}onUnselected(){this.pathFragments=[]}onStart(e){this.svgPointPrevious=this.svgElement.createSVGPoint(),this.svgPointPrevious.x=e.x,this.svgPointPrevious.y=e.y}onMove(e){this.svgPointCurrent=this.svgElement.createSVGPoint(),this.svgPointCurrent.x=e.x,this.svgPointCurrent.y=e.y;const t=this.checkAndEraseElement();return this.svgPointPrevious=this.svgPointCurrent,t}onEnd(){return this.svgPointPrevious=void 0,this.svgPointCurrent=void 0,!0}checkAndEraseElement(){const e=[];if(this.pathFragments.length)for(let t=0;t<this.pathFragments.length;t++){const n=this.pathFragments[t],s={x1:this.svgPointPrevious.x,x2:this.svgPointCurrent.x,y1:this.svgPointPrevious.y,y2:this.svgPointCurrent.y};this.lineLineIntersect(n,s)&&(n.element.remove(),e.push(t))}return e.length&&(this.pathFragments=this.pathFragments.filter((t,n)=>!e.includes(n))),e.length>0}lineLineIntersect(e,t){const n=e.x1,s=e.x2,r=t.x1,i=t.x2,l=e.y1,a=e.y2,c=t.y1,u=t.y2,d=(n-s)*(c-u)-(l-a)*(r-i),p=(n*a-l*s)*(r-i)-(n-s)*(r*u-c*i),f=(n*a-l*s)*(c-u)-(l-a)*(r*u-c*i),h=(y,b,k)=>y>=b&&y<=k?!0:y>=k&&y<=b;if(d===0)return!1;{const y={x:p/d,y:f/d};return h(y.x,n,s)&&h(y.y,l,a)&&h(y.x,r,i)&&h(y.y,c,u)}}};function ix(e){return{draw:new nx(e),stylus:new Gb(e),line:new Qb(e),rectangle:new Zb(e),ellipse:new Yb(e),eraseLine:new rx(e)}}var lx=class{constructor(e={}){this.options=e,this.el=null,this.svgPoint=null,this.eventEl=null,this.shiftPressed=!1,this.altPressed=!1,this.drawing=!1,this._emitter=Vb(),this._models=ix(this),this._undoStack=[],this._disposables=[],this.options.brush||(this.options.brush={color:"black",size:3,mode:"stylus"}),e.el&&this.mount(e.el,e.eventTarget)}get model(){return this._models[this.mode]}get mounted(){return!!this.el}get mode(){return this.options.brush.mode||"stylus"}set mode(e){this._models[this.mode].onUnselected(),this.options.brush.mode=e,this.model.onSelected(this.el)}get brush(){return this.options.brush}set brush(e){this.options.brush=e}resolveSelector(e){return typeof e=="string"?document.querySelector(e):e||null}mount(e,t){if(this.el)throw new Error("[drauu] already mounted, unmount previous target first");if(this.el=this.resolveSelector(e),!this.el)throw new Error("[drauu] target element not found");if(this.el.tagName.toLocaleLowerCase()!=="svg")throw new Error("[drauu] can only mount to a SVG element");if(!this.el.createSVGPoint)throw new Error("[drauu] SVG element must be create by document.createElementNS('http://www.w3.org/2000/svg', 'svg')");this.svgPoint=this.el.createSVGPoint();const n=this.resolveSelector(t)||this.el,s=this.eventStart.bind(this),r=this.eventMove.bind(this),i=this.eventEnd.bind(this),l=this.eventKeyboard.bind(this);n.addEventListener("pointerdown",s,{passive:!1}),window.addEventListener("pointermove",r,{passive:!1}),window.addEventListener("pointerup",i,{passive:!1}),window.addEventListener("pointercancel",i,{passive:!1}),window.addEventListener("keydown",l,!1),window.addEventListener("keyup",l,!1),this._disposables.push(()=>{n.removeEventListener("pointerdown",s),window.removeEventListener("pointermove",r),window.removeEventListener("pointerup",i),window.removeEventListener("pointercancel",i),window.removeEventListener("keydown",l,!1),window.removeEventListener("keyup",l,!1)}),this._emitter.emit("mounted")}unmount(){this._disposables.forEach(e=>e()),this._disposables.length=0,this.el=null,this._emitter.emit("unmounted")}on(e,t){return this._emitter.on(e,t)}undo(){const e=this.el;return e.lastElementChild?(this._undoStack.push(e.lastElementChild.cloneNode(!0)),e.lastElementChild.remove(),this._emitter.emit("changed"),!0):!1}redo(){return this._undoStack.length?(this.el.appendChild(this._undoStack.pop()),this._emitter.emit("changed"),!0):!1}canRedo(){return!!this._undoStack.length}canUndo(){var e;return!!((e=this.el)!=null&&e.lastElementChild)}eventMove(e){!this.acceptsInput(e)||!this.drawing||this.model._eventMove(e)&&(e.stopPropagation(),e.preventDefault(),this._emitter.emit("changed"))}eventStart(e){this.acceptsInput(e)&&(e.stopPropagation(),e.preventDefault(),this._currentNode&&this.cancel(),this.drawing=!0,this._emitter.emit("start"),this._currentNode=this.model._eventDown(e),this._currentNode&&this.mode!=="eraseLine"&&this.el.appendChild(this._currentNode),this._emitter.emit("changed"))}eventEnd(e){if(!this.acceptsInput(e)||!this.drawing)return;const t=this.model._eventUp(e);t?(t instanceof Element&&t!==this._currentNode&&(this._currentNode=t),this.commit()):this.cancel(),this.drawing=!1,this._emitter.emit("end"),this._emitter.emit("changed")}acceptsInput(e){return!this.options.acceptsInputTypes||this.options.acceptsInputTypes.includes(e.pointerType)}eventKeyboard(e){this.shiftPressed===e.shiftKey&&this.altPressed===e.altKey||(this.shiftPressed=e.shiftKey,this.altPressed=e.altKey,this.model.point&&this.model.onMove(this.model.point)&&this._emitter.emit("changed"))}commit(){this._undoStack.length=0;const e=this._currentNode;this._currentNode=void 0,this._emitter.emit("committed",e)}clear(){this._undoStack.length=0,this.cancel(),this.el.innerHTML="",this._emitter.emit("changed")}cancel(){this._currentNode&&(this.el.removeChild(this._currentNode),this._currentNode=void 0,this._emitter.emit("canceled"))}dump(){return this.el.innerHTML}load(e){this.clear(),this.el.innerHTML=e}};function ax(e){return new lx(e)}const Il=["#ff595e","#ffca3a","#8ac926","#1982c4","#6a4c93","#ffffff","#000000"],sn=Gt("slidev-drawing-enabled",!1),l7=Gt("slidev-drawing-pinned",!1),cx=Y(!1),ux=Y(!1),dx=Y(!1),Lo=Y(!1),us=U1(Gt("slidev-drawing-brush",{color:Il[0],size:4,mode:"stylus"})),Du=Y("stylus"),If=D(()=>Fe.drawings.syncAll||_t.value);let Ro=!1;const ao=D({get(){return Du.value},set(e){Du.value=e,e==="arrow"?(us.mode="line",us.arrowEnd=!0):(us.mode=e,us.arrowEnd=!1)}}),px=We({brush:us,acceptsInputTypes:D(()=>sn.value&&(!Fe.drawings.presenterOnly||_t.value)?void 0:["pen"]),coordinateTransform:!1}),yt=ii(ax(px));function fx(){yt.clear(),If.value&&ef(He.value,"")}function $a(){var e;ux.value=yt.canRedo(),cx.value=yt.canUndo(),dx.value=!!((e=yt.el)!=null&&e.children.length)}function hx(e){Ro=!0;const t=zr[e||He.value];t!=null?yt.load(t):yt.clear(),$a(),Ro=!1}yt.on("changed",()=>{if($a(),!Ro){const e=yt.dump(),t=He.value;(zr[t]||"")!==e&&If.value&&ef(t,yt.dump())}});D1(e=>{Ro=!0,e[He.value]!=null&&yt.load(e[He.value]||""),Ro=!1,$a()});rt(()=>{ge(He,()=>{yt.mounted&&hx()},{immediate:!0})});yt.on("start",()=>Lo.value=!0);yt.on("end",()=>Lo.value=!1);window.addEventListener("keydown",e=>{if(!sn.value)return;const t=!e.ctrlKey&&!e.altKey&&!e.shiftKey&&!e.metaKey;let n=!0;e.code==="KeyZ"&&(e.ctrlKey||e.metaKey)?e.shiftKey?yt.redo():yt.undo():e.code==="Escape"?sn.value=!1:e.code==="KeyL"&&t?ao.value="line":e.code==="KeyA"&&t?ao.value="arrow":e.code==="KeyS"&&t?ao.value="stylus":e.code==="KeyR"&&t?ao.value="rectangle":e.code==="KeyE"&&t?ao.value="ellipse":e.code==="KeyC"&&t?fx():e.code.startsWith("Digit")&&t&&+e.code[5]<=Il.length?us.color=Il[+e.code[5]-1]:n=!1,n&&(e.preventDefault(),e.stopPropagation())},!1);function Ye(...e){return D(()=>e.every(t=>Ke(t)))}function At(e){return D(()=>!Ke(e))}const Ou=Ov(),qi=Gt("slidev-color-schema","auto"),Pl=D(()=>Fe.colorSchema!=="auto"),Ba=D({get(){return Pl.value?Fe.colorSchema==="dark":qi.value==="auto"?Ou.value:qi.value==="dark"},set(e){Pl.value||(qi.value=e===Ou.value?"auto":e?"dark":"light")}}),Pf=of(Ba);Kt&&ge(Ba,e=>{const t=document.querySelector("html");t.classList.toggle("dark",e),t.classList.toggle("light",!e)},{immediate:!0});const Cr=Y(1),Er=D(()=>Ge.length),Ft=Y(0),Da=Y(0);function mx(){Ft.value>Cr.value&&(Ft.value-=1)}function yx(){Ft.value<Er.value&&(Ft.value+=1)}function gx(){if(Ft.value>Cr.value){let e=Ft.value-Da.value;e<Cr.value&&(e=Cr.value),Ft.value=e}}function vx(){if(Ft.value<Er.value){let e=Ft.value+Da.value;e>Er.value&&(e=Er.value),Ft.value=e}}function _x(){const{escape:e,space:t,shift:n,left:s,right:r,up:i,down:l,enter:a,d:c,g:u,o:d}=Tf;let p=[{name:"next_space",key:Ye(t,At(n)),fn:Nn,autoRepeat:!0},{name:"prev_space",key:Ye(t,n),fn:qn,autoRepeat:!0},{name:"next_right",key:Ye(r,At(n),At(pt)),fn:Nn,autoRepeat:!0},{name:"prev_left",key:Ye(s,At(n),At(pt)),fn:qn,autoRepeat:!0},{name:"next_page_key",key:"pageDown",fn:Nn,autoRepeat:!0},{name:"prev_page_key",key:"pageUp",fn:qn,autoRepeat:!0},{name:"next_down",key:Ye(l,At(pt)),fn:qo,autoRepeat:!0},{name:"prev_up",key:Ye(i,At(pt)),fn:()=>jo(!1),autoRepeat:!0},{name:"next_shift",key:Ye(r,n),fn:qo,autoRepeat:!0},{name:"prev_shift",key:Ye(s,n),fn:()=>jo(!1),autoRepeat:!0},{name:"toggle_dark",key:Ye(c,At(sn)),fn:Pf},{name:"toggle_overview",key:Ye(d,At(sn)),fn:$f},{name:"hide_overview",key:Ye(e,At(sn)),fn:()=>pt.value=!1},{name:"goto",key:Ye(u,At(sn)),fn:()=>Ps.value=!Ps.value},{name:"next_overview",key:Ye(r,pt),fn:yx},{name:"prev_overview",key:Ye(s,pt),fn:mx},{name:"up_overview",key:Ye(i,pt),fn:gx},{name:"down_overview",key:Ye(l,pt),fn:vx},{name:"goto_from_overview",key:Ye(a,pt),fn:()=>{Hs(Ft.value),pt.value=!1}}];const f=new Set(p.map(y=>y.name));if(p.filter(y=>y.name&&f.has(y.name)).length===0){const y=["========== WARNING ==========","defineShortcutsSetup did not return any of the base shortcuts.","See https://sli.dev/custom/config-shortcuts.html for migration.",'If it is intentional, return at least one shortcut with one of the base names (e.g. name:"goto").'].join(`

`);alert(y),console.warn(y)}return p}const Uf=Ye(At(Ob),At(Ib),Bb);function bx(e,t,n=!1){typeof e=="string"&&(e=Tf[e]);const s=Ye(e,Uf);let r=0,i;const l=()=>{if(clearTimeout(i),!s.value){r=0;return}n&&(i=setTimeout(l,Math.max(1e3-r*250,150)),r++),t()};return ge(s,l,{flush:"sync"})}function xx(e,t){return yv(e,n=>{Uf.value&&(n.repeat||t())})}function wx(){const e=_x();new Map(e.map(n=>[n.key,n])).forEach(n=>{n.fn&&bx(n.key,n.fn,n.autoRepeat)}),xx("f",()=>Ff.toggle())}const kx={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Ax=o("path",{fill:"currentColor",d:"M24 9.4L22.6 8L16 14.6L9.4 8L8 9.4l6.6 6.6L8 22.6L9.4 24l6.6-6.6l6.6 6.6l1.4-1.4l-6.6-6.6L24 9.4z"},null,-1),Sx=[Ax];function Cx(e,t){return v(),T("svg",kx,Sx)}const Ex={name:"carbon-close",render:Cx};function Oa(e,t=""){var r,i;const n=["slidev-page",t],s=(i=(r=e==null?void 0:e.meta)==null?void 0:r.slide)==null?void 0:i.no;return s!=null&&n.push(`slidev-page-${s}`),n.filter(Boolean).join(" ")}const Tx=ke({__name:"SlideContainer",props:{width:{type:Number},meta:{default:()=>({})},scale:{type:[Number,String]}},setup(e){const t=e;L(z);const n=Y(),s=Vv(n),r=D(()=>t.width?t.width:s.width.value),i=D(()=>t.width?t.width/Un:s.height.value);t.width&&Ss(()=>{n.value&&(n.value.style.width=`${r.value}px`,n.value.style.height=`${i.value}px`)});const l=D(()=>r.value/i.value),a=D(()=>t.scale&&!bn.value?t.scale:l.value<Un?r.value/Mn:i.value*Un/Mn),c=D(()=>({height:`${Ca}px`,width:`${Mn}px`,transform:`translate(-50%, -50%) scale(${a.value})`})),u=D(()=>({"select-none":!Fe.selectable}));return Ct(Qp,a),(d,p)=>(v(),T("div",{id:"slide-container",ref_key:"root",ref:n,class:Re(u.value)},[o("div",{id:"slide-content",style:Xe(c.value)},[wt(d.$slots,"default")],4),wt(d.$slots,"controls")],2))}});const K=(e,t)=>{const n=e.__vccOpts||e;for(const[s,r]of t)n[s]=r;return n},Mf=K(Tx,[["__file","/home/ben/Workspace/demystifying-unicode/node_modules/@slidev/client/internals/SlideContainer.vue"]]),Ia=ke({name:"SlideWrapper",props:{clicks:{type:[Number,String],default:0},clicksElements:{type:Array,default:()=>[]},clicksOrderMap:{type:Map,default:()=>new Map},clicksDisabled:{type:Boolean,default:!1},context:{type:String,default:"main"},is:{type:Object,default:void 0},route:{type:Object,default:void 0}},setup(e,{emit:t}){const n=nn(e,"clicks",t),s=nn(e,"clicksElements",t),r=nn(e,"clicksDisabled",t),i=nn(e,"clicksOrderMap",t);s.value.length=0,Ct(h1,e.route),Ct(m1,e.context),Ct(_o,n),Ct(bo,r),Ct(rs,s),Ct(xl,i)},render(){var e,t;return this.$props.is?Je(this.$props.is):(t=(e=this.$slots)==null?void 0:e.default)==null?void 0:t.call(e)}}),Fx=["innerHTML"],$x=ke({__name:"DrawingPreview",props:{page:{type:Number,required:!0}},setup(e){return L(z),(t,n)=>B(zr)[t.page]?(v(),T("svg",{key:0,class:"w-full h-full absolute top-0 pointer-events-none",innerHTML:B(zr)[t.page]},null,8,Fx)):ye("v-if",!0)}}),Lf=K($x,[["__file","/home/ben/Workspace/demystifying-unicode/node_modules/@slidev/client/internals/DrawingPreview.vue"]]),Bx=Object.freeze(Object.defineProperty({__proto__:null,default:Lf},Symbol.toStringTag,{value:"Module"})),Dx={class:"slides-overview bg-main !bg-opacity-75 p-16 overflow-y-auto"},Ox=["onClick"],ji=4*16*2,Iu=2*16,Ix=ke({__name:"SlidesOverview",props:{modelValue:{type:Boolean,required:!0}},emits:[],setup(e,{emit:t}){const n=e;L(z);const s=nn(n,"modelValue",t);function r(){s.value=!1}function i(p){Hs(p),r()}function l(p){return p===Ft.value}const a=Bl.smaller("xs"),c=Bl.smaller("sm"),u=D(()=>a.value?_s.width.value-ji:c.value?(_s.width.value-ji-Iu)/2:300),d=D(()=>Math.floor((_s.width.value-ji)/(u.value+Iu)));return Ss(()=>{Ft.value=He.value,Da.value=d.value}),(p,f)=>{const h=Ex;return v(),T(Te,null,[Tt(o("div",Dx,[o("div",{class:"grid gap-y-4 gap-x-8 w-full",style:Xe(`grid-template-columns: repeat(auto-fit,minmax(${u.value}px,1fr))`)},[(v(!0),T(Te,null,Cs(B(Ge),(y,b)=>(v(),T("div",{key:y.path,class:"relative"},[o("div",{class:Re(["inline-block border rounded border-opacity-50 overflow-hidden bg-main hover:border-$slidev-theme-primary",{"border-$slidev-theme-primary":l(b+1),"border-gray-400":!l(b+1)}]),style:Xe(B(Ea)),onClick:k=>i(+y.path)},[(v(),j(Mf,{key:y.path,width:u.value,"clicks-disabled":!0,class:"pointer-events-none"},{default:M(()=>[y!=null&&y.component?(v(),j(B(Ia),{key:0,is:y.component,"clicks-disabled":!0,class:Re(B(Oa)(y)),route:y,context:"overview"},null,8,["is","class","route"])):ye("v-if",!0),H(Lf,{page:+y.path},null,8,["page"])]),_:2},1032,["width"]))],14,Ox),o("div",{class:"absolute top-0 opacity-50",style:Xe(`left: ${u.value+5}px`)},wn(b+1),5)]))),128))],4)],512),[[Rp,B(s)]]),B(s)?(v(),T("button",{key:0,class:"fixed text-2xl top-4 right-4 slidev-icon-btn text-gray-400",onClick:r},[H(h)])):ye("v-if",!0)],64)}}});const Px=K(Ix,[["__file","/home/ben/Workspace/demystifying-unicode/node_modules/@slidev/client/internals/SlidesOverview.vue"]]),Ux="/demystifying-unicode/assets/logo-b72bde5d.png",Mx={key:0,class:"fixed top-0 bottom-0 left-0 right-0 grid z-20"},Lx=ke({__name:"Modal",props:{modelValue:{default:!1},class:{default:""}},emits:["modelValue"],setup(e,{emit:t}){const n=e;L(z);const s=nn(n,"modelValue",t);function r(){s.value=!1}return(i,l)=>(v(),j(up,null,[B(s)?(v(),T("div",Mx,[o("div",{bg:"black opacity-80",class:"absolute top-0 bottom-0 left-0 right-0 -z-1",onClick:l[0]||(l[0]=a=>r())}),o("div",{class:Re(["m-auto rounded-md bg-main shadow",n.class]),"dark:border":"~ main"},[wt(i.$slots,"default")],2)])):ye("v-if",!0)],1024))}}),Rx=K(Lx,[["__file","/home/ben/Workspace/demystifying-unicode/node_modules/@slidev/client/internals/Modal.vue"]]),Nx={class:"slidev-info-dialog slidev-layout flex flex-col gap-4 text-base"},qx=["innerHTML"],jx=o("a",{href:"https://github.com/slidevjs/slidev",target:"_blank",class:"!opacity-100 !border-none !text-current"},[o("div",{class:"flex gap-1 children:my-auto"},[o("div",{class:"opacity-50 text-sm mr-2"},"Powered by"),o("img",{class:"w-5 h-5",src:Ux,alt:"Slidev"}),o("div",{style:{color:"#2082A6"}},[o("b",null,"Sli"),m("dev ")])])],-1),Wx=ke({__name:"InfoDialog",props:{modelValue:{default:!1}},emits:["modelValue"],setup(e,{emit:t}){const n=e;L(z);const s=nn(n,"modelValue",t),r=D(()=>typeof Fe.info=="string");return(i,l)=>(v(),j(Rx,{modelValue:B(s),"onUpdate:modelValue":l[0]||(l[0]=a=>$e(s)?s.value=a:null),class:"px-6 py-4"},{default:M(()=>[o("div",Nx,[r.value?(v(),T("div",{key:0,class:"mb-4",innerHTML:B(Fe).info},null,8,qx)):ye("v-if",!0),jx])]),_:1},8,["modelValue"]))}});const Hx=K(Wx,[["__file","/home/ben/Workspace/demystifying-unicode/node_modules/@slidev/client/internals/InfoDialog.vue"]]);function kn(e){return Array.isArray?Array.isArray(e):qf(e)==="[object Array]"}const Vx=1/0;function zx(e){if(typeof e=="string")return e;let t=e+"";return t=="0"&&1/e==-Vx?"-0":t}function Kx(e){return e==null?"":zx(e)}function on(e){return typeof e=="string"}function Rf(e){return typeof e=="number"}function Gx(e){return e===!0||e===!1||Yx(e)&&qf(e)=="[object Boolean]"}function Nf(e){return typeof e=="object"}function Yx(e){return Nf(e)&&e!==null}function Et(e){return e!=null}function Wi(e){return!e.trim().length}function qf(e){return e==null?e===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}const Qx="Incorrect 'index' type",Zx=e=>`Invalid value for key ${e}`,Jx=e=>`Pattern length exceeds max of ${e}.`,Xx=e=>`Missing ${e} property in key`,ew=e=>`Property 'weight' in key '${e}' must be a positive integer`,Pu=Object.prototype.hasOwnProperty;class tw{constructor(t){this._keys=[],this._keyMap={};let n=0;t.forEach(s=>{let r=jf(s);n+=r.weight,this._keys.push(r),this._keyMap[r.id]=r,n+=r.weight}),this._keys.forEach(s=>{s.weight/=n})}get(t){return this._keyMap[t]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function jf(e){let t=null,n=null,s=null,r=1,i=null;if(on(e)||kn(e))s=e,t=Uu(e),n=Ul(e);else{if(!Pu.call(e,"name"))throw new Error(Xx("name"));const l=e.name;if(s=l,Pu.call(e,"weight")&&(r=e.weight,r<=0))throw new Error(ew(l));t=Uu(l),n=Ul(l),i=e.getFn}return{path:t,id:n,weight:r,src:s,getFn:i}}function Uu(e){return kn(e)?e:e.split(".")}function Ul(e){return kn(e)?e.join("."):e}function nw(e,t){let n=[],s=!1;const r=(i,l,a)=>{if(Et(i))if(!l[a])n.push(i);else{let c=l[a];const u=i[c];if(!Et(u))return;if(a===l.length-1&&(on(u)||Rf(u)||Gx(u)))n.push(Kx(u));else if(kn(u)){s=!0;for(let d=0,p=u.length;d<p;d+=1)r(u[d],l,a+1)}else l.length&&r(u,l,a+1)}};return r(e,on(t)?t.split("."):t,0),s?n:n[0]}const sw={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},ow={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(e,t)=>e.score===t.score?e.idx<t.idx?-1:1:e.score<t.score?-1:1},rw={location:0,threshold:.6,distance:100},iw={useExtendedSearch:!1,getFn:nw,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var pe={...ow,...sw,...rw,...iw};const lw=/[^ ]+/g;function aw(e=1,t=3){const n=new Map,s=Math.pow(10,t);return{get(r){const i=r.match(lw).length;if(n.has(i))return n.get(i);const l=1/Math.pow(i,.5*e),a=parseFloat(Math.round(l*s)/s);return n.set(i,a),a},clear(){n.clear()}}}class Pa{constructor({getFn:t=pe.getFn,fieldNormWeight:n=pe.fieldNormWeight}={}){this.norm=aw(n,3),this.getFn=t,this.isCreated=!1,this.setIndexRecords()}setSources(t=[]){this.docs=t}setIndexRecords(t=[]){this.records=t}setKeys(t=[]){this.keys=t,this._keysMap={},t.forEach((n,s)=>{this._keysMap[n.id]=s})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,on(this.docs[0])?this.docs.forEach((t,n)=>{this._addString(t,n)}):this.docs.forEach((t,n)=>{this._addObject(t,n)}),this.norm.clear())}add(t){const n=this.size();on(t)?this._addString(t,n):this._addObject(t,n)}removeAt(t){this.records.splice(t,1);for(let n=t,s=this.size();n<s;n+=1)this.records[n].i-=1}getValueForItemAtKeyId(t,n){return t[this._keysMap[n]]}size(){return this.records.length}_addString(t,n){if(!Et(t)||Wi(t))return;let s={v:t,i:n,n:this.norm.get(t)};this.records.push(s)}_addObject(t,n){let s={i:n,$:{}};this.keys.forEach((r,i)=>{let l=r.getFn?r.getFn(t):this.getFn(t,r.path);if(Et(l)){if(kn(l)){let a=[];const c=[{nestedArrIndex:-1,value:l}];for(;c.length;){const{nestedArrIndex:u,value:d}=c.pop();if(Et(d))if(on(d)&&!Wi(d)){let p={v:d,i:u,n:this.norm.get(d)};a.push(p)}else kn(d)&&d.forEach((p,f)=>{c.push({nestedArrIndex:f,value:p})})}s.$[i]=a}else if(on(l)&&!Wi(l)){let a={v:l,n:this.norm.get(l)};s.$[i]=a}}}),this.records.push(s)}toJSON(){return{keys:this.keys,records:this.records}}}function Wf(e,t,{getFn:n=pe.getFn,fieldNormWeight:s=pe.fieldNormWeight}={}){const r=new Pa({getFn:n,fieldNormWeight:s});return r.setKeys(e.map(jf)),r.setSources(t),r.create(),r}function cw(e,{getFn:t=pe.getFn,fieldNormWeight:n=pe.fieldNormWeight}={}){const{keys:s,records:r}=e,i=new Pa({getFn:t,fieldNormWeight:n});return i.setKeys(s),i.setIndexRecords(r),i}function yr(e,{errors:t=0,currentLocation:n=0,expectedLocation:s=0,distance:r=pe.distance,ignoreLocation:i=pe.ignoreLocation}={}){const l=t/e.length;if(i)return l;const a=Math.abs(s-n);return r?l+a/r:a?1:l}function uw(e=[],t=pe.minMatchCharLength){let n=[],s=-1,r=-1,i=0;for(let l=e.length;i<l;i+=1){let a=e[i];a&&s===-1?s=i:!a&&s!==-1&&(r=i-1,r-s+1>=t&&n.push([s,r]),s=-1)}return e[i-1]&&i-s>=t&&n.push([s,i-1]),n}const ls=32;function dw(e,t,n,{location:s=pe.location,distance:r=pe.distance,threshold:i=pe.threshold,findAllMatches:l=pe.findAllMatches,minMatchCharLength:a=pe.minMatchCharLength,includeMatches:c=pe.includeMatches,ignoreLocation:u=pe.ignoreLocation}={}){if(t.length>ls)throw new Error(Jx(ls));const d=t.length,p=e.length,f=Math.max(0,Math.min(s,p));let h=i,y=f;const b=a>1||c,k=b?Array(p):[];let w;for(;(w=e.indexOf(t,y))>-1;){let U=yr(t,{currentLocation:w,expectedLocation:f,distance:r,ignoreLocation:u});if(h=Math.min(U,h),y=w+d,b){let O=0;for(;O<d;)k[w+O]=1,O+=1}}y=-1;let A=[],x=1,S=d+p;const C=1<<d-1;for(let U=0;U<d;U+=1){let O=0,q=S;for(;O<q;)yr(t,{errors:U,currentLocation:f+q,expectedLocation:f,distance:r,ignoreLocation:u})<=h?O=q:S=q,q=Math.floor((S-O)/2+O);S=q;let ne=Math.max(1,f-q+1),ue=l?p:Math.min(f+q,p)+d,Q=Array(ue+2);Q[ue+1]=(1<<U)-1;for(let ve=ue;ve>=ne;ve-=1){let be=ve-1,Pe=n[e.charAt(be)];if(b&&(k[be]=+!!Pe),Q[ve]=(Q[ve+1]<<1|1)&Pe,U&&(Q[ve]|=(A[ve+1]|A[ve])<<1|1|A[ve+1]),Q[ve]&C&&(x=yr(t,{errors:U,currentLocation:be,expectedLocation:f,distance:r,ignoreLocation:u}),x<=h)){if(h=x,y=be,y<=f)break;ne=Math.max(1,2*f-y)}}if(yr(t,{errors:U+1,currentLocation:f,expectedLocation:f,distance:r,ignoreLocation:u})>h)break;A=Q}const F={isMatch:y>=0,score:Math.max(.001,x)};if(b){const U=uw(k,a);U.length?c&&(F.indices=U):F.isMatch=!1}return F}function pw(e){let t={};for(let n=0,s=e.length;n<s;n+=1){const r=e.charAt(n);t[r]=(t[r]||0)|1<<s-n-1}return t}class Hf{constructor(t,{location:n=pe.location,threshold:s=pe.threshold,distance:r=pe.distance,includeMatches:i=pe.includeMatches,findAllMatches:l=pe.findAllMatches,minMatchCharLength:a=pe.minMatchCharLength,isCaseSensitive:c=pe.isCaseSensitive,ignoreLocation:u=pe.ignoreLocation}={}){if(this.options={location:n,threshold:s,distance:r,includeMatches:i,findAllMatches:l,minMatchCharLength:a,isCaseSensitive:c,ignoreLocation:u},this.pattern=c?t:t.toLowerCase(),this.chunks=[],!this.pattern.length)return;const d=(f,h)=>{this.chunks.push({pattern:f,alphabet:pw(f),startIndex:h})},p=this.pattern.length;if(p>ls){let f=0;const h=p%ls,y=p-h;for(;f<y;)d(this.pattern.substr(f,ls),f),f+=ls;if(h){const b=p-ls;d(this.pattern.substr(b),b)}}else d(this.pattern,0)}searchIn(t){const{isCaseSensitive:n,includeMatches:s}=this.options;if(n||(t=t.toLowerCase()),this.pattern===t){let y={isMatch:!0,score:0};return s&&(y.indices=[[0,t.length-1]]),y}const{location:r,distance:i,threshold:l,findAllMatches:a,minMatchCharLength:c,ignoreLocation:u}=this.options;let d=[],p=0,f=!1;this.chunks.forEach(({pattern:y,alphabet:b,startIndex:k})=>{const{isMatch:w,score:A,indices:x}=dw(t,y,b,{location:r+k,distance:i,threshold:l,findAllMatches:a,minMatchCharLength:c,includeMatches:s,ignoreLocation:u});w&&(f=!0),p+=A,w&&x&&(d=[...d,...x])});let h={isMatch:f,score:f?p/this.chunks.length:1};return f&&s&&(h.indices=d),h}}class Kn{constructor(t){this.pattern=t}static isMultiMatch(t){return Mu(t,this.multiRegex)}static isSingleMatch(t){return Mu(t,this.singleRegex)}search(){}}function Mu(e,t){const n=e.match(t);return n?n[1]:null}class fw extends Kn{constructor(t){super(t)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(t){const n=t===this.pattern;return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class hw extends Kn{constructor(t){super(t)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(t){const s=t.indexOf(this.pattern)===-1;return{isMatch:s,score:s?0:1,indices:[0,t.length-1]}}}class mw extends Kn{constructor(t){super(t)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(t){const n=t.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class yw extends Kn{constructor(t){super(t)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(t){const n=!t.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,t.length-1]}}}class gw extends Kn{constructor(t){super(t)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(t){const n=t.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[t.length-this.pattern.length,t.length-1]}}}class vw extends Kn{constructor(t){super(t)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(t){const n=!t.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,t.length-1]}}}class Vf extends Kn{constructor(t,{location:n=pe.location,threshold:s=pe.threshold,distance:r=pe.distance,includeMatches:i=pe.includeMatches,findAllMatches:l=pe.findAllMatches,minMatchCharLength:a=pe.minMatchCharLength,isCaseSensitive:c=pe.isCaseSensitive,ignoreLocation:u=pe.ignoreLocation}={}){super(t),this._bitapSearch=new Hf(t,{location:n,threshold:s,distance:r,includeMatches:i,findAllMatches:l,minMatchCharLength:a,isCaseSensitive:c,ignoreLocation:u})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(t){return this._bitapSearch.searchIn(t)}}class zf extends Kn{constructor(t){super(t)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(t){let n=0,s;const r=[],i=this.pattern.length;for(;(s=t.indexOf(this.pattern,n))>-1;)n=s+i,r.push([s,n-1]);const l=!!r.length;return{isMatch:l,score:l?0:1,indices:r}}}const Ml=[fw,zf,mw,yw,vw,gw,hw,Vf],Lu=Ml.length,_w=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,bw="|";function xw(e,t={}){return e.split(bw).map(n=>{let s=n.trim().split(_w).filter(i=>i&&!!i.trim()),r=[];for(let i=0,l=s.length;i<l;i+=1){const a=s[i];let c=!1,u=-1;for(;!c&&++u<Lu;){const d=Ml[u];let p=d.isMultiMatch(a);p&&(r.push(new d(p,t)),c=!0)}if(!c)for(u=-1;++u<Lu;){const d=Ml[u];let p=d.isSingleMatch(a);if(p){r.push(new d(p,t));break}}}return r})}const ww=new Set([Vf.type,zf.type]);class kw{constructor(t,{isCaseSensitive:n=pe.isCaseSensitive,includeMatches:s=pe.includeMatches,minMatchCharLength:r=pe.minMatchCharLength,ignoreLocation:i=pe.ignoreLocation,findAllMatches:l=pe.findAllMatches,location:a=pe.location,threshold:c=pe.threshold,distance:u=pe.distance}={}){this.query=null,this.options={isCaseSensitive:n,includeMatches:s,minMatchCharLength:r,findAllMatches:l,ignoreLocation:i,location:a,threshold:c,distance:u},this.pattern=n?t:t.toLowerCase(),this.query=xw(this.pattern,this.options)}static condition(t,n){return n.useExtendedSearch}searchIn(t){const n=this.query;if(!n)return{isMatch:!1,score:1};const{includeMatches:s,isCaseSensitive:r}=this.options;t=r?t:t.toLowerCase();let i=0,l=[],a=0;for(let c=0,u=n.length;c<u;c+=1){const d=n[c];l.length=0,i=0;for(let p=0,f=d.length;p<f;p+=1){const h=d[p],{isMatch:y,indices:b,score:k}=h.search(t);if(y){if(i+=1,a+=k,s){const w=h.constructor.type;ww.has(w)?l=[...l,...b]:l.push(b)}}else{a=0,i=0,l.length=0;break}}if(i){let p={isMatch:!0,score:a/i};return s&&(p.indices=l),p}}return{isMatch:!1,score:1}}}const Ll=[];function Aw(...e){Ll.push(...e)}function Rl(e,t){for(let n=0,s=Ll.length;n<s;n+=1){let r=Ll[n];if(r.condition(e,t))return new r(e,t)}return new Hf(e,t)}const Qr={AND:"$and",OR:"$or"},Nl={PATH:"$path",PATTERN:"$val"},ql=e=>!!(e[Qr.AND]||e[Qr.OR]),Sw=e=>!!e[Nl.PATH],Cw=e=>!kn(e)&&Nf(e)&&!ql(e),Ru=e=>({[Qr.AND]:Object.keys(e).map(t=>({[t]:e[t]}))});function Kf(e,t,{auto:n=!0}={}){const s=r=>{let i=Object.keys(r);const l=Sw(r);if(!l&&i.length>1&&!ql(r))return s(Ru(r));if(Cw(r)){const c=l?r[Nl.PATH]:i[0],u=l?r[Nl.PATTERN]:r[c];if(!on(u))throw new Error(Zx(c));const d={keyId:Ul(c),pattern:u};return n&&(d.searcher=Rl(u,t)),d}let a={children:[],operator:i[0]};return i.forEach(c=>{const u=r[c];kn(u)&&u.forEach(d=>{a.children.push(s(d))})}),a};return ql(e)||(e=Ru(e)),s(e)}function Ew(e,{ignoreFieldNorm:t=pe.ignoreFieldNorm}){e.forEach(n=>{let s=1;n.matches.forEach(({key:r,norm:i,score:l})=>{const a=r?r.weight:null;s*=Math.pow(l===0&&a?Number.EPSILON:l,(a||1)*(t?1:i))}),n.score=s})}function Tw(e,t){const n=e.matches;t.matches=[],Et(n)&&n.forEach(s=>{if(!Et(s.indices)||!s.indices.length)return;const{indices:r,value:i}=s;let l={indices:r,value:i};s.key&&(l.key=s.key.src),s.idx>-1&&(l.refIndex=s.idx),t.matches.push(l)})}function Fw(e,t){t.score=e.score}function $w(e,t,{includeMatches:n=pe.includeMatches,includeScore:s=pe.includeScore}={}){const r=[];return n&&r.push(Tw),s&&r.push(Fw),e.map(i=>{const{idx:l}=i,a={item:t[l],refIndex:l};return r.length&&r.forEach(c=>{c(i,a)}),a})}class zs{constructor(t,n={},s){this.options={...pe,...n},this.options.useExtendedSearch,this._keyStore=new tw(this.options.keys),this.setCollection(t,s)}setCollection(t,n){if(this._docs=t,n&&!(n instanceof Pa))throw new Error(Qx);this._myIndex=n||Wf(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(t){Et(t)&&(this._docs.push(t),this._myIndex.add(t))}remove(t=()=>!1){const n=[];for(let s=0,r=this._docs.length;s<r;s+=1){const i=this._docs[s];t(i,s)&&(this.removeAt(s),s-=1,r-=1,n.push(i))}return n}removeAt(t){this._docs.splice(t,1),this._myIndex.removeAt(t)}getIndex(){return this._myIndex}search(t,{limit:n=-1}={}){const{includeMatches:s,includeScore:r,shouldSort:i,sortFn:l,ignoreFieldNorm:a}=this.options;let c=on(t)?on(this._docs[0])?this._searchStringList(t):this._searchObjectList(t):this._searchLogical(t);return Ew(c,{ignoreFieldNorm:a}),i&&c.sort(l),Rf(n)&&n>-1&&(c=c.slice(0,n)),$w(c,this._docs,{includeMatches:s,includeScore:r})}_searchStringList(t){const n=Rl(t,this.options),{records:s}=this._myIndex,r=[];return s.forEach(({v:i,i:l,n:a})=>{if(!Et(i))return;const{isMatch:c,score:u,indices:d}=n.searchIn(i);c&&r.push({item:i,idx:l,matches:[{score:u,value:i,norm:a,indices:d}]})}),r}_searchLogical(t){const n=Kf(t,this.options),s=(a,c,u)=>{if(!a.children){const{keyId:p,searcher:f}=a,h=this._findMatches({key:this._keyStore.get(p),value:this._myIndex.getValueForItemAtKeyId(c,p),searcher:f});return h&&h.length?[{idx:u,item:c,matches:h}]:[]}const d=[];for(let p=0,f=a.children.length;p<f;p+=1){const h=a.children[p],y=s(h,c,u);if(y.length)d.push(...y);else if(a.operator===Qr.AND)return[]}return d},r=this._myIndex.records,i={},l=[];return r.forEach(({$:a,i:c})=>{if(Et(a)){let u=s(n,a,c);u.length&&(i[c]||(i[c]={idx:c,item:a,matches:[]},l.push(i[c])),u.forEach(({matches:d})=>{i[c].matches.push(...d)}))}}),l}_searchObjectList(t){const n=Rl(t,this.options),{keys:s,records:r}=this._myIndex,i=[];return r.forEach(({$:l,i:a})=>{if(!Et(l))return;let c=[];s.forEach((u,d)=>{c.push(...this._findMatches({key:u,value:l[d],searcher:n}))}),c.length&&i.push({idx:a,item:l,matches:c})}),i}_findMatches({key:t,value:n,searcher:s}){if(!Et(n))return[];let r=[];if(kn(n))n.forEach(({v:i,i:l,n:a})=>{if(!Et(i))return;const{isMatch:c,score:u,indices:d}=s.searchIn(i);c&&r.push({score:u,key:t,value:i,idx:l,norm:a,indices:d})});else{const{v:i,n:l}=n,{isMatch:a,score:c,indices:u}=s.searchIn(i);a&&r.push({score:c,key:t,value:i,norm:l,indices:u})}return r}}zs.version="6.6.2";zs.createIndex=Wf;zs.parseIndex=cw;zs.config=pe;zs.parseQuery=Kf;Aw(kw);const Bw={class:"bg-main transform",shadow:"~",p:"x-4 y-2",border:"~ transparent rounded dark:main"},Dw=["value","disabled","onKeydown"],Ow=["border","onClick"],Iw={"w-4":"","text-right":"",op50:"","text-sm":""},Pw=ke({__name:"Goto",setup(e){L(z);const t=Y(),n=Y(),s=Y(),r=Y(),i=Y(""),l=Y(0);function a(x){return x!=null}const c=D(()=>new zs(Ge.map(x=>{var S;return(S=x.meta)==null?void 0:S.slide}).filter(a),{keys:["no","title"],threshold:.3,shouldSort:!0,minMatchCharLength:1})),u=D(()=>i.value.startsWith("/")?i.value.substring(1):i.value),d=D(()=>c.value.search(u.value).map(x=>x.item)),p=D(()=>!!d.value.length);function f(){if(p.value){const x=d.value.at(l.value||0);x&&Hs(x.no)}h()}function h(){i.value="",Ps.value=!1}function y(x){x.preventDefault(),l.value++,l.value>=d.value.length&&(l.value=0),k()}function b(x){x.preventDefault(),l.value--,l.value<=-2&&(l.value=d.value.length-1),k()}function k(){var S;const x=(S=r.value)==null?void 0:S[l.value];x&&s.value&&(x.offsetTop+x.offsetHeight>s.value.offsetHeight+s.value.scrollTop?s.value.scrollTo({behavior:"smooth",top:x.offsetTop+x.offsetHeight-s.value.offsetHeight+1}):x.offsetTop<s.value.scrollTop&&s.value.scrollTo({behavior:"smooth",top:x.offsetTop}))}function w(x){l.value=0,i.value=x.target.value}function A(x){Hs(x),h()}return ge(Ps,async x=>{var S;x?(i.value="",l.value=0,setTimeout(()=>{var C;return(C=n.value)==null?void 0:C.focus()},0)):(S=n.value)==null||S.blur()}),ge(Rn,()=>{var x;(x=t.value)!=null&&x.contains(Rn.value)||h()}),(x,S)=>(v(),T("div",{id:"slidev-goto-dialog",ref_key:"container",ref:t,class:Re(["fixed right-5 transition-all",B(Ps)?"top-5":"-top-20"]),"w-90":"","max-w-90":"","min-w-90":""},[o("div",Bw,[o("input",{id:"slidev-goto-input",ref_key:"input",ref:n,value:i.value,type:"text",disabled:!B(Ps),class:Re(["outline-none bg-transparent",{"text-red-400":!p.value&&i.value}]),placeholder:"Goto...",onKeydown:[cr(f,["enter"]),cr(h,["escape"]),cr(y,["down"]),cr(b,["up"])],onInput:w},null,42,Dw)]),d.value.length>0?(v(),T("ul",{key:0,ref_key:"list",ref:s,class:"autocomplete-list",shadow:"~",border:"~ transparent rounded dark:main"},[(v(!0),T(Te,null,Cs(d.value,(C,F)=>(v(),T("li",{ref_for:!0,ref_key:"items",ref:r,key:C.id,role:"button",tabindex:"0",p:"x-4 y-2","cursor-pointer":"",hover:"op100",flex:"~ gap-2","w-90":"","items-center":"",border:F===0?"":"t main",class:Re(l.value===F?"bg-active op100":"op80"),onClick:mg(U=>A(C.no),["stop"])},[o("div",Iw,wn(C.no),1),m(" "+wn(C.title),1)],10,Ow))),128))],512)):ye("v-if",!0)],2))}});const Uw=K(Pw,[["__scopeId","data-v-f5ee02a7"],["__file","/home/ben/Workspace/demystifying-unicode/node_modules/@slidev/client/internals/Goto.vue"]]),Mw=ke({__name:"Controls",setup(e){L(z);const t=an(),n=an();return(s,r)=>(v(),T(Te,null,[H(Px,{modelValue:B(pt),"onUpdate:modelValue":r[0]||(r[0]=i=>$e(pt)?pt.value=i:null)},null,8,["modelValue"]),H(Uw),t.value?(v(),j(B(t),{key:0})):ye("v-if",!0),n.value?(v(),j(B(n),{key:1,modelValue:B(Ri),"onUpdate:modelValue":r[1]||(r[1]=i=>$e(Ri)?Ri.value=i:null)},null,8,["modelValue"])):ye("v-if",!0),B(Fe).info?(v(),j(Hx,{key:2,modelValue:B(ko),"onUpdate:modelValue":r[2]||(r[2]=i=>$e(ko)?ko.value=i:null)},null,8,["modelValue"])):ye("v-if",!0)],64))}}),Lw=K(Mw,[["__file","/home/ben/Workspace/demystifying-unicode/node_modules/@slidev/client/internals/Controls.vue"]]),Rw={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Nw=o("path",{fill:"currentColor",d:"M30 8h-4.1c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2h14.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30V8zm-9 4c-1.7 0-3-1.3-3-3s1.3-3 3-3s3 1.3 3 3s-1.3 3-3 3zM2 24h4.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30v-2H15.9c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2zm9-4c1.7 0 3 1.3 3 3s-1.3 3-3 3s-3-1.3-3-3s1.3-3 3-3z"},null,-1),qw=[Nw];function jw(e,t){return v(),T("svg",Rw,qw)}const Ww={name:"carbon-settings-adjust",render:jw},Hw={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Vw=o("path",{fill:"currentColor",d:"M17 22v-8h-4v2h2v6h-3v2h8v-2h-3zM16 8a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 16 8z"},null,-1),zw=o("path",{fill:"currentColor",d:"M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z"},null,-1),Kw=[Vw,zw];function Gw(e,t){return v(),T("svg",Hw,Kw)}const Yw={name:"carbon-information",render:Gw},Qw={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Zw=o("path",{fill:"currentColor",d:"M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10l10-10z"},null,-1),Jw=[Zw];function Xw(e,t){return v(),T("svg",Qw,Jw)}const e8={name:"carbon-download",render:Xw},t8={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},n8=o("path",{fill:"currentColor",d:"M29.415 19L27.7 17.285A2.97 2.97 0 0 0 28 16a3 3 0 1 0-3 3a2.97 2.97 0 0 0 1.286-.3L28 20.414V28h-6v-3a7.008 7.008 0 0 0-7-7H9a7.008 7.008 0 0 0-7 7v5h28v-9.586A1.988 1.988 0 0 0 29.415 19ZM4 25a5.006 5.006 0 0 1 5-5h6a5.006 5.006 0 0 1 5 5v3H4Z"},null,-1),s8=o("path",{fill:"currentColor",d:"M12 4a5 5 0 1 1-5 5a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7a7 7 0 0 0-7-7Z"},null,-1),o8=[n8,s8];function r8(e,t){return v(),T("svg",t8,o8)}const i8={name:"carbon-user-speaker",render:r8},l8={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},a8=o("path",{fill:"currentColor",d:"M15 10h2v8h-2zm5 4h2v4h-2zm-10-2h2v6h-2z"},null,-1),c8=o("path",{fill:"currentColor",d:"M25 4h-8V2h-2v2H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8v6h-4v2h10v-2h-4v-6h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 16H7V6h18Z"},null,-1),u8=[a8,c8];function d8(e,t){return v(),T("svg",l8,u8)}const p8={name:"carbon-presentation-file",render:d8},f8={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},h8=o("path",{fill:"currentColor",d:"M27.307 6.107L30 3.414L28.586 2l-2.693 2.693L24.8 3.6a1.933 1.933 0 0 0-2.8 0l-18 18V28h6.4l18-18a1.933 1.933 0 0 0 0-2.8ZM9.6 26H6v-3.6L23.4 5L27 8.6ZM9 11.586L16.586 4L18 5.414L10.414 13z"},null,-1),m8=[h8];function y8(e,t){return v(),T("svg",f8,m8)}const g8={name:"carbon-pen",render:y8},v8={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},_8=o("g",{fill:"currentColor"},[o("path",{d:"M213.66 201L201 213.66a8 8 0 0 1-11.31 0L140 164a8 8 0 0 0-13 2.46l-19.46 44.77a8 8 0 0 1-14.85-.71L40.41 50.44a8 8 0 0 1 10-10l160.1 52.24a8 8 0 0 1 .71 14.85L166.45 127a8 8 0 0 0-2.45 13l49.67 49.67a8 8 0 0 1-.01 11.33Z",opacity:".2"}),o("path",{d:"m169.64 134.33l44.77-19.46a16 16 0 0 0-1.41-29.8L52.92 32.8A16 16 0 0 0 32.8 52.92L85.07 213a15.83 15.83 0 0 0 14.41 11h.78a15.83 15.83 0 0 0 14.61-9.59l19.46-44.77L184 219.31a16 16 0 0 0 22.63 0l12.68-12.68a16 16 0 0 0 0-22.63Zm-69.48 73.76l.06-.05Zm95.15-.09l-49.67-49.67a16 16 0 0 0-26 4.94l-19.42 44.65L48 48l159.87 52.21l-44.64 19.41a16 16 0 0 0-4.94 26L208 195.31Z"})],-1),b8=[_8];function x8(e,t){return v(),T("svg",v8,b8)}const w8={name:"ph-cursor-duotone",render:x8},k8={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},A8=o("path",{fill:"currentColor",d:"M219.31 192a16 16 0 0 1 0 22.63l-4.68 4.68a16 16 0 0 1-22.63 0l-55.25-55.24l-21.88 50.34a15.84 15.84 0 0 1-14.61 9.59h-.78a15.82 15.82 0 0 1-14.41-11L32.8 52.92A15.95 15.95 0 0 1 52.92 32.8L213 85.07a16 16 0 0 1 1.41 29.8l-50.34 21.88Z"},null,-1),S8=[A8];function C8(e,t){return v(),T("svg",k8,S8)}const Gf={name:"ph-cursor-fill",render:C8},E8={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},T8=o("path",{fill:"currentColor",d:"M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6ZM5.394 6.813L6.81 5.399l3.505 3.506L8.9 10.319zM2 15.005h5v2H2zm3.394 10.193L8.9 21.692l1.414 1.414l-3.505 3.506zM15 25.005h2v5h-2zm6.687-1.9l1.414-1.414l3.506 3.506l-1.414 1.414zm3.313-8.1h5v2h-5zm-3.313-6.101l3.506-3.506l1.414 1.414l-3.506 3.506zM15 2.005h2v5h-2z"},null,-1),F8=[T8];function $8(e,t){return v(),T("svg",E8,F8)}const B8={name:"carbon-sun",render:$8},D8={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},O8=o("path",{fill:"currentColor",d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3Z"},null,-1),I8=[O8];function P8(e,t){return v(),T("svg",D8,I8)}const U8={name:"carbon-moon",render:P8},M8={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},L8=o("path",{fill:"currentColor",d:"M8 4v4H4V4Zm2-2H2v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8ZM8 14v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8ZM8 24v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Z"},null,-1),R8=[L8];function N8(e,t){return v(),T("svg",M8,R8)}const q8={name:"carbon-apps",render:N8},j8={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},W8=o("path",{fill:"currentColor",d:"m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10L18 6z"},null,-1),H8=[W8];function V8(e,t){return v(),T("svg",j8,H8)}const z8={name:"carbon-arrow-right",render:V8},K8={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},G8=o("path",{fill:"currentColor",d:"m14 26l1.41-1.41L7.83 17H28v-2H7.83l7.58-7.59L14 6L4 16l10 10z"},null,-1),Y8=[G8];function Q8(e,t){return v(),T("svg",K8,Y8)}const Z8={name:"carbon-arrow-left",render:Q8},J8={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},X8=o("path",{fill:"currentColor",d:"M20 2v2h6.586L18 12.582L19.414 14L28 5.414V12h2V2H20zm-6 17.416L12.592 18L4 26.586V20H2v10h10v-2H5.414L14 19.416z"},null,-1),e3=[X8];function t3(e,t){return v(),T("svg",J8,e3)}const n3={name:"carbon-maximize",render:t3},s3={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},o3=o("path",{fill:"currentColor",d:"M4 18v2h6.586L2 28.582L3.414 30L12 21.414V28h2V18H4zM30 3.416L28.592 2L20 10.586V4h-2v10h10v-2h-6.586L30 3.416z"},null,-1),r3=[o3];function i3(e,t){return v(),T("svg",s3,r3)}const l3={name:"carbon-minimize",render:i3},a3={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},c3=o("path",{fill:"currentColor",d:"m13 24l-9-9l1.414-1.414L13 21.171L26.586 7.586L28 9L13 24z"},null,-1),u3=[c3];function d3(e,t){return v(),T("svg",a3,u3)}const p3={name:"carbon-checkmark",render:d3},f3={class:"select-list"},h3={class:"title"},m3={class:"items"},y3=["onClick"],g3=ke({__name:"SelectList",props:{modelValue:{type:[Object,String,Number]},title:{type:String},items:{type:Array}},setup(e,{emit:t}){const n=e;L(z);const s=nn(n,"modelValue",t,{passive:!0});return(r,i)=>{const l=p3;return v(),T("div",f3,[o("div",h3,wn(e.title),1),o("div",m3,[(v(!0),T(Te,null,Cs(e.items,a=>(v(),T("div",{key:a.value,class:Re(["item",{active:B(s)===a.value}]),onClick:()=>{var c;s.value=a.value,(c=a.onClick)==null||c.call(a)}},[H(l,{class:Re(["text-green-500",{"opacity-0":B(s)!==a.value}])},null,8,["class"]),m(" "+wn(a.display||a.value),1)],10,y3))),128))])])}}});const v3=K(g3,[["__scopeId","data-v-3f89fa11"],["__file","/home/ben/Workspace/demystifying-unicode/node_modules/@slidev/client/internals/SelectList.vue"]]),_3={class:"text-sm"},b3=ke({__name:"Settings",setup(e){L(z);const t=[{display:"Fit",value:0},{display:"1:1",value:1}];return(n,s)=>(v(),T("div",_3,[H(v3,{modelValue:B(Sr),"onUpdate:modelValue":s[0]||(s[0]=r=>$e(Sr)?Sr.value=r:null),title:"Scale",items:t},null,8,["modelValue"])]))}}),x3=K(b3,[["__file","/home/ben/Workspace/demystifying-unicode/node_modules/@slidev/client/internals/Settings.vue"]]),w3={key:0,class:"rounded-md bg-main shadow absolute bottom-10 left-0 z-20","dark:border":"~ main"},k3=ke({__name:"MenuButton",props:{modelValue:{default:!1},disabled:{default:!1}},setup(e,{emit:t}){const n=e;L(z);const s=nn(n,"modelValue",t,{passive:!0}),r=Y();return hv(r,()=>{s.value=!1}),(i,l)=>(v(),T("div",{ref_key:"el",ref:r,class:"flex relative"},[o("button",{class:Re({disabled:e.disabled}),onClick:l[0]||(l[0]=a=>s.value=!B(s))},[wt(i.$slots,"button",{class:Re({disabled:e.disabled})})],2),(v(),j(up,null,[B(s)?(v(),T("div",w3,[wt(i.$slots,"menu")])):ye("v-if",!0)],1024))],512))}}),A3=K(k3,[["__file","/home/ben/Workspace/demystifying-unicode/node_modules/@slidev/client/internals/MenuButton.vue"]]),S3={class:"w-1px opacity-10 bg-current m-1 lg:m-2"},C3={__name:"VerticalDivider",setup(e){return L(z),(t,n)=>(v(),T("div",S3))}},gr=K(C3,[["__file","/home/ben/Workspace/demystifying-unicode/node_modules/@slidev/client/internals/VerticalDivider.vue"]]),E3={render(){return[]}},T3={class:"slidev-icon-btn"},F3={class:"h-40px flex",p:"l-1 t-0.5 r-2",text:"sm leading-2"},$3={class:"my-auto"},B3={class:"opacity-50"},D3=ke({__name:"NavControls",props:{persist:{default:!1}},setup(e){const t=e;L(z);const n=Bl.smaller("md"),{isFullscreen:s,toggle:r}=Ff,i=D(()=>Wl.value?`?password=${Wl.value}`:""),l=D(()=>`/presenter/${He.value}${i.value}`),a=D(()=>`/${He.value}${i.value}`),c=Y();function u(){c.value&&Rn.value&&c.value.contains(Rn.value)&&Rn.value.blur()}const d=D(()=>t.persist?"text-$slidev-controls-foreground bg-transparent":"rounded-md bg-main shadow dark:border dark:border-gray-400 dark:border-opacity-10"),p=an(),f=an();return Ln(()=>import("./DrawingControls-079301e5.js"),[]).then(h=>f.value=h.default),(h,y)=>{const b=l3,k=n3,w=Z8,A=z8,x=q8,S=U8,C=B8,F=Gf,U=w8,O=g8,q=p8,ne=qs("RouterLink"),ue=i8,Q=e8,me=Yw,ve=Ww;return v(),T("nav",{ref_key:"root",ref:c,class:"flex flex-col"},[o("div",{class:Re(["flex flex-wrap-reverse text-xl gap-0.5 p-1 lg:gap-1 lg:p-2",d.value]),onMouseleave:u},[B(yn)?ye("v-if",!0):(v(),T("button",{key:0,class:"slidev-icon-btn",onClick:y[0]||(y[0]=(...be)=>B(r)&&B(r)(...be))},[B(s)?(v(),j(b,{key:0})):(v(),j(k,{key:1}))])),o("button",{class:Re(["slidev-icon-btn",{disabled:!B(ST)}]),onClick:y[1]||(y[1]=(...be)=>B(qn)&&B(qn)(...be))},[H(w)],2),o("button",{class:Re(["slidev-icon-btn",{disabled:!B(AT)}]),title:"Next",onClick:y[2]||(y[2]=(...be)=>B(Nn)&&B(Nn)(...be))},[H(A)],2),B(yn)?ye("v-if",!0):(v(),T("button",{key:1,class:"slidev-icon-btn",title:"Slides overview",onClick:y[3]||(y[3]=be=>B($f)())},[H(x)])),B(Pl)?ye("v-if",!0):(v(),T("button",{key:2,class:"slidev-icon-btn",title:"Toggle dark mode",onClick:y[4]||(y[4]=be=>B(Pf)())},[B(Ba)?(v(),j(S,{key:0})):(v(),j(C,{key:1}))])),H(gr),B(yn)?ye("v-if",!0):(v(),T(Te,{key:3},[!B(_t)&&!B(n)&&p.value?(v(),T(Te,{key:0},[H(B(p)),H(gr)],64)):ye("v-if",!0),B(_t)?(v(),T("button",{key:1,class:"slidev-icon-btn",title:"Show presenter cursor",onClick:y[5]||(y[5]=be=>Ni.value=!B(Ni))},[B(Ni)?(v(),j(F,{key:0})):(v(),j(U,{key:1,class:"opacity-50"}))])):ye("v-if",!0)],64)),(!B(Fe).drawings.presenterOnly||B(_t))&&!B(yn)?(v(),T(Te,{key:4},[o("button",{class:"slidev-icon-btn relative",title:"Drawing",onClick:y[6]||(y[6]=be=>sn.value=!B(sn))},[H(O),B(sn)?(v(),T("div",{key:0,class:"absolute left-1 right-1 bottom-0 h-0.7 rounded-full",style:Xe({background:B(us).color})},null,4)):ye("v-if",!0)]),H(gr)],64)):ye("v-if",!0),B(yn)?ye("v-if",!0):(v(),T(Te,{key:5},[B(_t)?(v(),j(ne,{key:0,to:a.value,class:"slidev-icon-btn",title:"Play Mode"},{default:M(()=>[H(q)]),_:1},8,["to"])):ye("v-if",!0),B(_T)?(v(),j(ne,{key:1,to:l.value,class:"slidev-icon-btn",title:"Presenter Mode"},{default:M(()=>[H(ue)]),_:1},8,["to"])):ye("v-if",!0),ye("v-if",!0)],64)),(v(),T(Te,{key:6},[B(Fe).download?(v(),T("button",{key:0,class:"slidev-icon-btn",onClick:y[8]||(y[8]=(...be)=>B(Hl)&&B(Hl)(...be))},[H(Q)])):ye("v-if",!0)],64)),!B(_t)&&B(Fe).info&&!B(yn)?(v(),T("button",{key:7,class:"slidev-icon-btn",onClick:y[9]||(y[9]=be=>ko.value=!B(ko))},[H(me)])):ye("v-if",!0),!B(_t)&&!B(yn)?(v(),j(A3,{key:8},{button:M(()=>[o("button",T3,[H(ve)])]),menu:M(()=>[H(x3)]),_:1})):ye("v-if",!0),B(yn)?ye("v-if",!0):(v(),j(gr,{key:9})),o("div",F3,[o("div",$3,[m(wn(B(He))+" ",1),o("span",B3,"/ "+wn(B(bT)),1)])]),H(B(E3))],34)],512)}}}),O3=K(D3,[["__file","/home/ben/Workspace/demystifying-unicode/node_modules/@slidev/client/internals/NavControls.vue"]]),Yf={render(){return[]}},Qf={render(){return[]}},I3={key:0,class:"absolute top-0 left-0 right-0 bottom-0 pointer-events-none text-xl"},P3=ke({__name:"PresenterMouse",setup(e){return L(z),(t,n)=>{const s=Gf;return B(Pi).cursor?(v(),T("div",I3,[H(s,{class:"absolute",style:Xe({left:`${B(Pi).cursor.x}%`,top:`${B(Pi).cursor.y}%`})},null,8,["style"])])):ye("v-if",!0)}}}),U3=K(P3,[["__file","/home/ben/Workspace/demystifying-unicode/node_modules/@slidev/client/internals/PresenterMouse.vue"]]),M3=ke({__name:"SlidesShow",props:{context:{type:String,required:!0}},setup(e){L(z),ge(ft,()=>{var s,r;(s=ft.value)!=null&&s.meta&&ft.value.meta.preload!==!1&&(ft.value.meta.__preloaded=!0),(r=Hi.value)!=null&&r.meta&&Hi.value.meta.preload!==!1&&(Hi.value.meta.__preloaded=!0)},{immediate:!0});const t=an();Ln(()=>import("./DrawingLayer-cbd8090e.js"),[]).then(s=>t.value=s.default);const n=D(()=>Ge.filter(s=>{var r;return((r=s.meta)==null?void 0:r.__preloaded)||s===ft.value}));return(s,r)=>(v(),T(Te,null,[ye(" Global Bottom "),H(B(Qf)),ye(" Slides "),H(ag,mt(B(TT),{id:"slideshow",tag:"div"}),{default:M(()=>[(v(!0),T(Te,null,Cs(n.value,i=>{var l;return Tt((v(),j(B(Ia),{key:i.path,is:i==null?void 0:i.component,clicks:i===B(ft)?B(Mt):0,"clicks-elements":((l=i.meta)==null?void 0:l.__clicksElements)||[],"clicks-disabled":!1,class:Re(B(Oa)(i)),route:i,context:s.context},null,8,["is","clicks","clicks-elements","class","route","context"])),[[Rp,i===B(ft)]])}),128))]),_:1},16),ye(" Global Top "),H(B(Yf)),t.value?(v(),j(B(t),{key:0})):ye("v-if",!0),B(_t)?ye("v-if",!0):(v(),j(U3,{key:1}))],64))}});const L3=K(M3,[["__scopeId","data-v-afb4231e"],["__file","/home/ben/Workspace/demystifying-unicode/node_modules/@slidev/client/internals/SlidesShow.vue"]]),R3=ke({__name:"PrintStyle",setup(e){L(z);function t(n,{slots:s}){if(s.default)return Je("style",s.default())}return(n,s)=>(v(),j(t,null,{default:M(()=>[m(" @page { size: "+wn(B(Mn))+"px "+wn(B(Ca))+"px; margin: 0px; } ",1)]),_:1}))}}),Zf=K(R3,[["__file","/home/ben/Workspace/demystifying-unicode/node_modules/@slidev/client/internals/PrintStyle.vue"]]),N3=ke({__name:"Play",setup(e){L(z),wx();const t=Y();function n(i){var l;ku.value||((l=i.target)==null?void 0:l.id)==="slide-container"&&(i.screenX/window.innerWidth>.6?Nn():qn())}FT(t);const s=D(()=>Db.value||ku.value);an();const r=an();return Ln(()=>import("./DrawingControls-079301e5.js"),[]).then(i=>r.value=i.default),(i,l)=>(v(),T(Te,null,[B(bn)?(v(),j(Zf,{key:0})):ye("v-if",!0),o("div",{id:"page-root",ref_key:"root",ref:t,class:"grid grid-cols-[1fr_max-content]",style:Xe(B(Ea))},[H(Mf,{class:"w-full h-full",style:Xe({background:"var(--slidev-slide-container-background, black)"}),width:B(bn)?B(_s).width.value:void 0,scale:B(Sr),onPointerdown:n},{default:M(()=>[H(L3,{context:"slide"})]),controls:M(()=>[o("div",{class:Re(["absolute bottom-0 left-0 transition duration-300 opacity-0 hover:opacity-100",[s.value?"opacity-100 right-0":"opacity-0 p-2",B(Lo)?"pointer-events-none":""]])},[H(O3,{class:"m-auto",persist:s.value},null,8,["persist"])],2),!B(Fe).drawings.presenterOnly&&!B(yn)&&r.value?(v(),j(B(r),{key:0,class:"ml-0"})):ye("v-if",!0)]),_:1},8,["style","width","scale"]),ye("v-if",!0)],4),H(Lw)],64))}}),q3=K(N3,[["__file","/home/ben/Workspace/demystifying-unicode/node_modules/@slidev/client/internals/Play.vue"]]);/*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT */function Jf(e){return typeof e>"u"||e===null}function j3(e){return typeof e=="object"&&e!==null}function W3(e){return Array.isArray(e)?e:Jf(e)?[]:[e]}function H3(e,t){var n,s,r,i;if(t)for(i=Object.keys(t),n=0,s=i.length;n<s;n+=1)r=i[n],e[r]=t[r];return e}function V3(e,t){var n="",s;for(s=0;s<t;s+=1)n+=e;return n}function z3(e){return e===0&&Number.NEGATIVE_INFINITY===1/e}var K3=Jf,G3=j3,Y3=W3,Q3=V3,Z3=z3,J3=H3,Ua={isNothing:K3,isObject:G3,toArray:Y3,repeat:Q3,isNegativeZero:Z3,extend:J3};function Xf(e,t){var n="",s=e.reason||"(unknown reason)";return e.mark?(e.mark.name&&(n+='in "'+e.mark.name+'" '),n+="("+(e.mark.line+1)+":"+(e.mark.column+1)+")",!t&&e.mark.snippet&&(n+=`

`+e.mark.snippet),s+" "+n):s}function No(e,t){Error.call(this),this.name="YAMLException",this.reason=e,this.mark=t,this.message=Xf(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}No.prototype=Object.create(Error.prototype);No.prototype.constructor=No;No.prototype.toString=function(t){return this.name+": "+Xf(this,t)};var as=No,X3=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],ek=["scalar","sequence","mapping"];function tk(e){var t={};return e!==null&&Object.keys(e).forEach(function(n){e[n].forEach(function(s){t[String(s)]=n})}),t}function nk(e,t){if(t=t||{},Object.keys(t).forEach(function(n){if(X3.indexOf(n)===-1)throw new as('Unknown option "'+n+'" is met in definition of "'+e+'" YAML type.')}),this.options=t,this.tag=e,this.kind=t.kind||null,this.resolve=t.resolve||function(){return!0},this.construct=t.construct||function(n){return n},this.instanceOf=t.instanceOf||null,this.predicate=t.predicate||null,this.represent=t.represent||null,this.representName=t.representName||null,this.defaultStyle=t.defaultStyle||null,this.multi=t.multi||!1,this.styleAliases=tk(t.styleAliases||null),ek.indexOf(this.kind)===-1)throw new as('Unknown kind "'+this.kind+'" is specified for "'+e+'" YAML type.')}var at=nk;function Nu(e,t){var n=[];return e[t].forEach(function(s){var r=n.length;n.forEach(function(i,l){i.tag===s.tag&&i.kind===s.kind&&i.multi===s.multi&&(r=l)}),n[r]=s}),n}function sk(){var e={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}},t,n;function s(r){r.multi?(e.multi[r.kind].push(r),e.multi.fallback.push(r)):e[r.kind][r.tag]=e.fallback[r.tag]=r}for(t=0,n=arguments.length;t<n;t+=1)arguments[t].forEach(s);return e}function jl(e){return this.extend(e)}jl.prototype.extend=function(t){var n=[],s=[];if(t instanceof at)s.push(t);else if(Array.isArray(t))s=s.concat(t);else if(t&&(Array.isArray(t.implicit)||Array.isArray(t.explicit)))t.implicit&&(n=n.concat(t.implicit)),t.explicit&&(s=s.concat(t.explicit));else throw new as("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");n.forEach(function(i){if(!(i instanceof at))throw new as("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(i.loadKind&&i.loadKind!=="scalar")throw new as("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(i.multi)throw new as("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),s.forEach(function(i){if(!(i instanceof at))throw new as("Specified list of YAML types (or a single Type object) contains a non-Type object.")});var r=Object.create(jl.prototype);return r.implicit=(this.implicit||[]).concat(n),r.explicit=(this.explicit||[]).concat(s),r.compiledImplicit=Nu(r,"implicit"),r.compiledExplicit=Nu(r,"explicit"),r.compiledTypeMap=sk(r.compiledImplicit,r.compiledExplicit),r};var ok=jl,rk=new at("tag:yaml.org,2002:str",{kind:"scalar",construct:function(e){return e!==null?e:""}}),ik=new at("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(e){return e!==null?e:[]}}),lk=new at("tag:yaml.org,2002:map",{kind:"mapping",construct:function(e){return e!==null?e:{}}}),ak=new ok({explicit:[rk,ik,lk]});function ck(e){if(e===null)return!0;var t=e.length;return t===1&&e==="~"||t===4&&(e==="null"||e==="Null"||e==="NULL")}function uk(){return null}function dk(e){return e===null}var pk=new at("tag:yaml.org,2002:null",{kind:"scalar",resolve:ck,construct:uk,predicate:dk,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"});function fk(e){if(e===null)return!1;var t=e.length;return t===4&&(e==="true"||e==="True"||e==="TRUE")||t===5&&(e==="false"||e==="False"||e==="FALSE")}function hk(e){return e==="true"||e==="True"||e==="TRUE"}function mk(e){return Object.prototype.toString.call(e)==="[object Boolean]"}var yk=new at("tag:yaml.org,2002:bool",{kind:"scalar",resolve:fk,construct:hk,predicate:mk,represent:{lowercase:function(e){return e?"true":"false"},uppercase:function(e){return e?"TRUE":"FALSE"},camelcase:function(e){return e?"True":"False"}},defaultStyle:"lowercase"});function gk(e){return 48<=e&&e<=57||65<=e&&e<=70||97<=e&&e<=102}function vk(e){return 48<=e&&e<=55}function _k(e){return 48<=e&&e<=57}function bk(e){if(e===null)return!1;var t=e.length,n=0,s=!1,r;if(!t)return!1;if(r=e[n],(r==="-"||r==="+")&&(r=e[++n]),r==="0"){if(n+1===t)return!0;if(r=e[++n],r==="b"){for(n++;n<t;n++)if(r=e[n],r!=="_"){if(r!=="0"&&r!=="1")return!1;s=!0}return s&&r!=="_"}if(r==="x"){for(n++;n<t;n++)if(r=e[n],r!=="_"){if(!gk(e.charCodeAt(n)))return!1;s=!0}return s&&r!=="_"}if(r==="o"){for(n++;n<t;n++)if(r=e[n],r!=="_"){if(!vk(e.charCodeAt(n)))return!1;s=!0}return s&&r!=="_"}}if(r==="_")return!1;for(;n<t;n++)if(r=e[n],r!=="_"){if(!_k(e.charCodeAt(n)))return!1;s=!0}return!(!s||r==="_")}function xk(e){var t=e,n=1,s;if(t.indexOf("_")!==-1&&(t=t.replace(/_/g,"")),s=t[0],(s==="-"||s==="+")&&(s==="-"&&(n=-1),t=t.slice(1),s=t[0]),t==="0")return 0;if(s==="0"){if(t[1]==="b")return n*parseInt(t.slice(2),2);if(t[1]==="x")return n*parseInt(t.slice(2),16);if(t[1]==="o")return n*parseInt(t.slice(2),8)}return n*parseInt(t,10)}function wk(e){return Object.prototype.toString.call(e)==="[object Number]"&&e%1===0&&!Ua.isNegativeZero(e)}var kk=new at("tag:yaml.org,2002:int",{kind:"scalar",resolve:bk,construct:xk,predicate:wk,represent:{binary:function(e){return e>=0?"0b"+e.toString(2):"-0b"+e.toString(2).slice(1)},octal:function(e){return e>=0?"0o"+e.toString(8):"-0o"+e.toString(8).slice(1)},decimal:function(e){return e.toString(10)},hexadecimal:function(e){return e>=0?"0x"+e.toString(16).toUpperCase():"-0x"+e.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),Ak=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function Sk(e){return!(e===null||!Ak.test(e)||e[e.length-1]==="_")}function Ck(e){var t,n;return t=e.replace(/_/g,"").toLowerCase(),n=t[0]==="-"?-1:1,"+-".indexOf(t[0])>=0&&(t=t.slice(1)),t===".inf"?n===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:t===".nan"?NaN:n*parseFloat(t,10)}var Ek=/^[-+]?[0-9]+e/;function Tk(e,t){var n;if(isNaN(e))switch(t){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===e)switch(t){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===e)switch(t){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(Ua.isNegativeZero(e))return"-0.0";return n=e.toString(10),Ek.test(n)?n.replace("e",".e"):n}function Fk(e){return Object.prototype.toString.call(e)==="[object Number]"&&(e%1!==0||Ua.isNegativeZero(e))}var $k=new at("tag:yaml.org,2002:float",{kind:"scalar",resolve:Sk,construct:Ck,predicate:Fk,represent:Tk,defaultStyle:"lowercase"}),Bk=ak.extend({implicit:[pk,yk,kk,$k]}),Dk=Bk,eh=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),th=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function Ok(e){return e===null?!1:eh.exec(e)!==null||th.exec(e)!==null}function Ik(e){var t,n,s,r,i,l,a,c=0,u=null,d,p,f;if(t=eh.exec(e),t===null&&(t=th.exec(e)),t===null)throw new Error("Date resolve error");if(n=+t[1],s=+t[2]-1,r=+t[3],!t[4])return new Date(Date.UTC(n,s,r));if(i=+t[4],l=+t[5],a=+t[6],t[7]){for(c=t[7].slice(0,3);c.length<3;)c+="0";c=+c}return t[9]&&(d=+t[10],p=+(t[11]||0),u=(d*60+p)*6e4,t[9]==="-"&&(u=-u)),f=new Date(Date.UTC(n,s,r,i,l,a,c)),u&&f.setTime(f.getTime()-u),f}function Pk(e){return e.toISOString()}var Uk=new at("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:Ok,construct:Ik,instanceOf:Date,represent:Pk});function Mk(e){return e==="<<"||e===null}var Lk=new at("tag:yaml.org,2002:merge",{kind:"scalar",resolve:Mk}),Ma=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function Rk(e){if(e===null)return!1;var t,n,s=0,r=e.length,i=Ma;for(n=0;n<r;n++)if(t=i.indexOf(e.charAt(n)),!(t>64)){if(t<0)return!1;s+=6}return s%8===0}function Nk(e){var t,n,s=e.replace(/[\r\n=]/g,""),r=s.length,i=Ma,l=0,a=[];for(t=0;t<r;t++)t%4===0&&t&&(a.push(l>>16&255),a.push(l>>8&255),a.push(l&255)),l=l<<6|i.indexOf(s.charAt(t));return n=r%4*6,n===0?(a.push(l>>16&255),a.push(l>>8&255),a.push(l&255)):n===18?(a.push(l>>10&255),a.push(l>>2&255)):n===12&&a.push(l>>4&255),new Uint8Array(a)}function qk(e){var t="",n=0,s,r,i=e.length,l=Ma;for(s=0;s<i;s++)s%3===0&&s&&(t+=l[n>>18&63],t+=l[n>>12&63],t+=l[n>>6&63],t+=l[n&63]),n=(n<<8)+e[s];return r=i%3,r===0?(t+=l[n>>18&63],t+=l[n>>12&63],t+=l[n>>6&63],t+=l[n&63]):r===2?(t+=l[n>>10&63],t+=l[n>>4&63],t+=l[n<<2&63],t+=l[64]):r===1&&(t+=l[n>>2&63],t+=l[n<<4&63],t+=l[64],t+=l[64]),t}function jk(e){return Object.prototype.toString.call(e)==="[object Uint8Array]"}var Wk=new at("tag:yaml.org,2002:binary",{kind:"scalar",resolve:Rk,construct:Nk,predicate:jk,represent:qk}),Hk=Object.prototype.hasOwnProperty,Vk=Object.prototype.toString;function zk(e){if(e===null)return!0;var t=[],n,s,r,i,l,a=e;for(n=0,s=a.length;n<s;n+=1){if(r=a[n],l=!1,Vk.call(r)!=="[object Object]")return!1;for(i in r)if(Hk.call(r,i))if(!l)l=!0;else return!1;if(!l)return!1;if(t.indexOf(i)===-1)t.push(i);else return!1}return!0}function Kk(e){return e!==null?e:[]}var Gk=new at("tag:yaml.org,2002:omap",{kind:"sequence",resolve:zk,construct:Kk}),Yk=Object.prototype.toString;function Qk(e){if(e===null)return!0;var t,n,s,r,i,l=e;for(i=new Array(l.length),t=0,n=l.length;t<n;t+=1){if(s=l[t],Yk.call(s)!=="[object Object]"||(r=Object.keys(s),r.length!==1))return!1;i[t]=[r[0],s[r[0]]]}return!0}function Zk(e){if(e===null)return[];var t,n,s,r,i,l=e;for(i=new Array(l.length),t=0,n=l.length;t<n;t+=1)s=l[t],r=Object.keys(s),i[t]=[r[0],s[r[0]]];return i}var Jk=new at("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:Qk,construct:Zk}),Xk=Object.prototype.hasOwnProperty;function e2(e){if(e===null)return!0;var t,n=e;for(t in n)if(Xk.call(n,t)&&n[t]!==null)return!1;return!0}function t2(e){return e!==null?e:{}}var n2=new at("tag:yaml.org,2002:set",{kind:"mapping",resolve:e2,construct:t2});Dk.extend({implicit:[Uk,Lk],explicit:[Wk,Gk,Jk,n2]});function qu(e){return e===48?"\0":e===97?"\x07":e===98?"\b":e===116||e===9?"	":e===110?`
`:e===118?"\v":e===102?"\f":e===114?"\r":e===101?"\x1B":e===32?" ":e===34?'"':e===47?"/":e===92?"\\":e===78?"":e===95?" ":e===76?"\u2028":e===80?"\u2029":""}var s2=new Array(256),o2=new Array(256);for(var Os=0;Os<256;Os++)s2[Os]=qu(Os)?1:0,o2[Os]=qu(Os);function r2(e){return Array.from(new Set(e))}function ju(...e){let t,n,s;e.length===1?(t=0,s=1,[n]=e):[t,n,s=1]=e;const r=[];let i=t;for(;i<n;)r.push(i),i+=s||1;return r}function nh(e,t){if(!t||t==="all"||t==="*")return ju(1,e+1);const n=[];for(const s of t.split(/[,;]/g))if(!s.includes("-"))n.push(+s);else{const[r,i]=s.split("-",2);n.push(...ju(+r,i?+i+1:e+1))}return r2(n).filter(s=>s<=e).sort((s,r)=>s-r)}function sh(e){const t=D(()=>e.value.path),n=D(()=>Ge.length),s=D(()=>Number.parseInt(t.value.split(/\//g).slice(-1)[0])||1),r=D(()=>vi(s.value)),i=D(()=>Ge.find(f=>f.path===`${s.value}`)),l=D(()=>{var f,h,y;return(y=(h=(f=i.value)==null?void 0:f.meta)==null?void 0:h.slide)==null?void 0:y.id}),a=D(()=>{var f,h;return((h=(f=i.value)==null?void 0:f.meta)==null?void 0:h.layout)||(s.value===1?"cover":"default")}),c=D(()=>Ge.find(f=>f.path===`${Math.min(Ge.length,s.value+1)}`)),u=D(()=>Ge.filter(f=>{var h,y;return(y=(h=f.meta)==null?void 0:h.slide)==null?void 0:y.title}).reduce((f,h)=>(La(f,h),f),[])),d=D(()=>Ra(u.value,i.value)),p=D(()=>Na(d.value));return{route:e,path:t,total:n,currentPage:s,currentPath:r,currentRoute:i,currentSlideId:l,currentLayout:a,nextRoute:c,rawTree:u,treeWithActiveStatuses:d,tree:p,downloadPDF:Hl,next:Nn,nextSlide:qo,openInEditor:$T,prev:qn,prevSlide:jo}}function oh(e,t,n){const s=Y(0);rt(()=>{xt.afterEach(async()=>{await rt(),s.value+=1})});const r=D(()=>{var c,u;return s.value,((u=(c=t.value)==null?void 0:c.meta)==null?void 0:u.__clicksElements)||[]}),i=D(()=>{var c,u;return+(((u=(c=t.value)==null?void 0:c.meta)==null?void 0:u.clicks)??r.value.length)}),l=D(()=>n.value<Ge.length-1||e.value<i.value),a=D(()=>n.value>1||e.value>0);return{clicks:e,clicksElements:r,clicksTotal:i,hasNext:l,hasPrev:a}}const i2=["id"],l2=ke({__name:"PrintSlideClick",props:{clicks:{type:Number,required:!0},clicksElements:{type:Array,required:!1},nav:{type:null,required:!0},route:{type:null,required:!0}},emits:["update:clicksElements"],setup(e,{emit:t}){const n=e,s=nn(n,"clicksElements",t),r=D(()=>({height:`${Ca}px`,width:`${Mn}px`})),i=an();Ln(()=>Promise.resolve().then(()=>Bx),void 0).then(u=>i.value=u.default);const l=D(()=>n.clicks),a=oh(l,n.nav.currentRoute,n.nav.currentPage),c=D(()=>`${n.route.path.toString().padStart(3,"0")}-${(l.value+1).toString().padStart(2,"0")}`);return Ct(z,We({nav:{...n.nav,...a},configs:Fe,themeConfigs:D(()=>Fe.themeConfig)})),(u,d)=>{var p;return v(),T("div",{id:c.value,class:"print-slide-container",style:Xe(r.value)},[H(B(Qf)),H(B(Ia),{is:(p=u.route)==null?void 0:p.component,"clicks-elements":B(s),"onUpdate:clicksElements":d[0]||(d[0]=f=>$e(s)?s.value=f:null),clicks:l.value,"clicks-disabled":!1,class:Re(B(Oa)(u.route)),route:u.route},null,8,["is","clicks-elements","clicks","class","route"]),i.value?(v(),j(B(i),{key:0,page:+u.route.path},null,8,["page"])):ye("v-if",!0),H(B(Yf))],12,i2)}}}),Wu=K(l2,[["__file","/home/ben/Workspace/demystifying-unicode/node_modules/@slidev/client/internals/PrintSlideClick.vue"]]),a2=ke({__name:"PrintSlide",props:{route:{type:null,required:!0}},setup(e){var i;const t=e;L(z);const n=Y(((i=t.route.meta)==null?void 0:i.__clicksElements)||[]),s=D(()=>t.route),r=sh(s);return(l,a)=>(v(),T(Te,null,[H(Wu,{"clicks-elements":n.value,"onUpdate:clicksElements":a[0]||(a[0]=c=>n.value=c),clicks:0,nav:B(r),route:s.value},null,8,["clicks-elements","nav","route"]),B(Ao)?ye("v-if",!0):(v(!0),T(Te,{key:0},Cs(n.value.length,c=>(v(),j(Wu,{key:c,clicks:c,nav:B(r),route:s.value},null,8,["clicks","nav","route"]))),128))],64))}}),c2=K(a2,[["__file","/home/ben/Workspace/demystifying-unicode/node_modules/@slidev/client/internals/PrintSlide.vue"]]),u2={id:"print-content"},d2=ke({__name:"PrintContainer",props:{width:{type:Number,required:!0}},setup(e){const t=e;L(z);const n=D(()=>t.width),s=D(()=>t.width/Un),r=D(()=>n.value/s.value),i=D(()=>r.value<Un?n.value/Mn:s.value*Un/Mn);let l=Ge;Rt.value.query.range&&(l=nh(l.length,Rt.value.query.range).map(u=>l[u-1]));const a=D(()=>({"select-none":!Fe.selectable}));return Ct(Qp,i),(c,u)=>(v(),T("div",{id:"print-container",class:Re(a.value)},[o("div",u2,[(v(!0),T(Te,null,Cs(B(l),d=>(v(),j(c2,{key:d.path,route:d},null,8,["route"]))),128))]),wt(c.$slots,"controls")],2))}});const p2=K(d2,[["__file","/home/ben/Workspace/demystifying-unicode/node_modules/@slidev/client/internals/PrintContainer.vue"]]),f2=ke({__name:"Print",setup(e){return L(z),Ss(()=>{bn?document.body.parentNode.classList.add("print"):document.body.parentNode.classList.remove("print")}),(t,n)=>(v(),T(Te,null,[B(bn)?(v(),j(Zf,{key:0})):ye("v-if",!0),o("div",{id:"page-root",class:"grid grid-cols-[1fr_max-content]",style:Xe(B(Ea))},[H(p2,{class:"w-full h-full",style:Xe({background:"var(--slidev-slide-container-background, black)"}),width:B(_s).width.value},null,8,["style","width"])],4)],64))}});const h2=K(f2,[["__file","/home/ben/Workspace/demystifying-unicode/node_modules/@slidev/client/internals/Print.vue"]]);function Hu(e){return e.startsWith("/")?"/demystifying-unicode/"+e.slice(1):e}function m2(e,t=!1){const n=e&&["#","rgb","hsl"].some(r=>e.indexOf(r)===0),s={background:n?e:void 0,color:e&&!n?"white":void 0,backgroundImage:n?void 0:e?t?`linear-gradient(#0005, #0008), url(${Hu(e)})`:`url("${Hu(e)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return s.background||delete s.background,s}const y2={class:"my-auto w-full"},g2=ke({__name:"cover",props:{background:{default:"https://source.unsplash.com/collection/94734566/1920x1080"}},setup(e){const t=e;L(z);const n=D(()=>m2(t.background,!0));return(s,r)=>(v(),T("div",{class:"slidev-layout cover text-center",style:Xe(n.value)},[o("div",y2,[wt(s.$slots,"default")])],4))}}),Ks=K(g2,[["__file","/home/ben/Workspace/demystifying-unicode/node_modules/@slidev/theme-seriph/layouts/cover.vue"]]),v2=o("h1",null,"Demystifying Unicode",-1),_2=o("p",null,"Unicode, Rust, quirks, and way too much detail.",-1),b2={__name:"1",setup(e){const t={theme:"seriph",background:"https://source.unsplash.com/collection/94734566/1920x1080",class:"text-center",highlighter:"shiki",lineNumbers:!0,info:`## Unicode, Rust, quirks, and way too much detail.
`,drawings:{persist:!1},transition:"slide-left",hideInToc:!0};return L(z),(n,s)=>(v(),j(Ks,le(re(t)),{default:M(()=>[v2,_2]),_:1},16))}},x2=K(b2,[["__file","/@slidev/slides/1.md"]]),w2={class:"slidev-layout default"},k2={__name:"default",setup(e){return L(z),(t,n)=>(v(),T("div",w2,[wt(t.$slots,"default")]))}},De=K(k2,[["__file","/home/ben/Workspace/demystifying-unicode/node_modules/@slidev/client/layouts/default.vue"]]),A2=o("h1",null,"Some sorta outline",-1),S2=o("ul",null,[o("li",null,"We learn some things about Computers"),o("li",null,"Then, some things about unicode"),o("li",null,"And, some things about unicode in rust"),o("li",null,"Some things you only need to know when you need to know")],-1),C2={__name:"2",setup(e){const t={hideInToc:!0};return L(z),(n,s)=>(v(),j(De,le(re(t)),{default:M(()=>[A2,S2]),_:1},16))}},E2=K(C2,[["__file","/@slidev/slides/2.md"]]),T2=["href","innerHTML"],F2=["href"],$2=ke({__name:"Link",props:{to:{type:[Number,String],required:!0},title:{type:String,required:!1}},setup(e){return L(z),(t,n)=>{const s=qs("RouterLink");return!B(bn)&&t.title?(v(),j(s,{key:0,to:String(t.to),onClick:n[0]||(n[0]=r=>r.target.blur()),innerHTML:t.title},null,8,["to","innerHTML"])):!B(bn)&&!t.title?(v(),j(s,{key:1,to:String(t.to),onClick:n[1]||(n[1]=r=>r.target.blur())},{default:M(()=>[wt(t.$slots,"default")]),_:3},8,["to"])):B(bn)&&t.title?(v(),T("a",{key:2,href:`#${t.to}`,innerHTML:t.title},null,8,T2)):(v(),T("a",{key:3,href:`#${t.to}`},[wt(t.$slots,"default")],8,F2))}}}),B2=K($2,[["__file","/home/ben/Workspace/demystifying-unicode/node_modules/@slidev/client/builtin/Link.vue"]]),D2={key:0},O2={key:1},I2={key:2},P2={key:3},U2={key:4},M2={key:5},L2={key:6},R2={key:7},N2={key:8},q2={key:9},j2={key:10},W2={key:11},H2={key:12},V2={key:13},z2={key:14},K2={key:15},G2={key:16},Y2={key:17},Q2={key:18},Z2={key:19},J2={key:20},X2={key:21},eA={key:22},tA={key:23},nA={key:24},sA={key:25},oA={key:26},rA={key:27},iA={key:28},lA={key:29},aA={key:30},cA={key:31},uA={key:32},dA={key:33},pA={key:34},fA=o("code",null,"str",-1),hA=o("code",null,"[u8]",-1),mA=o("strong",null,"which contents are always valid UTF-8",-1),yA={key:35},gA={key:36},vA={key:37},_A={key:38},bA={key:39},xA={key:40},wA={key:41},kA={key:42},AA={key:43},SA={key:44},CA={key:45},EA=o("code",null,"unsafe",-1),TA={key:46},FA={key:47},$A={key:48},BA={key:49},DA={key:50},OA={key:51},IA={key:52},PA={key:53},UA={key:54},MA={key:55},LA=ke({__name:"titles",props:{no:{type:[Number,String],required:!0}},setup(e){return(t,n)=>(v(),T("div",null,[+t.no==1?(v(),T("p",D2,"Demystifying Unicode")):+t.no==2?(v(),T("p",O2,"Some sorta outline")):+t.no==3?(v(),T("p",I2,"Table of contents")):+t.no==4?(v(),T("p",P2,"History")):+t.no==5?(v(),T("p",U2,"A bit (🥁鈸) of fundamentals")):+t.no==6?(v(),T("p",M2,"Abstraction")):+t.no==7?(v(),T("p",L2,"Abstract? ABSTRACT!")):+t.no==8?(v(),T("p",R2,"undefined")):+t.no==9?(v(),T("p",N2,"Competing standards")):+t.no==10?(v(),T("p",q2,"About ol ASCII - QQ")):+t.no==11?(v(),T("p",j2,"How many characters is enough charcters?")):+t.no==12?(v(),T("p",W2,"Summary:")):+t.no==13?(v(),T("p",H2,"Unicode")):+t.no==14?(v(),T("p",V2,"Why Unicode?")):+t.no==15?(v(),T("p",z2,"undefined")):+t.no==16?(v(),T("p",K2,"Unicode to the resque")):+t.no==17?(v(),T("p",G2,"New Terminology")):+t.no==18?(v(),T("p",Y2,"undefined")):+t.no==19?(v(),T("p",Q2,"undefined")):+t.no==20?(v(),T("p",Z2,"Glyphemes")):+t.no==21?(v(),T("p",J2,"What is the difference between")):+t.no==22?(v(),T("p",X2,"undefined")):+t.no==23?(v(),T("p",eA,"Encoding")):+t.no==24?(v(),T("p",tA,"undefined")):+t.no==25?(v(),T("p",nA,"Woo options!")):+t.no==26?(v(),T("p",sA,"UTF-8 is the king of the web")):+t.no==27?(v(),T("p",oA,"Nuts and bolts of UTF-8")):+t.no==28?(v(),T("p",rA,"Let’s encode!")):+t.no==29?(v(),T("p",iA,"Let’s encode!")):+t.no==30?(v(),T("p",lA,"Summary")):+t.no==31?(v(),T("p",aA,"Unicode in Rust")):+t.no==32?(v(),T("p",cA,"undefined")):+t.no==33?(v(),T("p",uA,"undefined")):+t.no==34?(v(),T("p",dA,"String slices")):+t.no==35?(v(),T("p",pA,[m("A String slice ("),fA,m(") is just a slice of bytes ("),hA,m("), "),mA,m(".")])):+t.no==36?(v(),T("p",yA,"Lets make some strings")):+t.no==37?(v(),T("p",gA,"Creating strings")):+t.no==38?(v(),T("p",vA,"Creating Strings")):+t.no==39?(v(),T("p",_A,"Creating strings")):+t.no==40?(v(),T("p",bA,"See, creating strings is easy!")):+t.no==41?(v(),T("p",xA,"UTF8Error")):+t.no==42?(v(),T("p",wA,"Invalid UTF-8")):+t.no==43?(v(),T("p",kA,"Where Enforced UTF-8 can go wrong")):+t.no==44?(v(),T("p",AA,"Reading and Writing files")):+t.no==45?(v(),T("p",SA,"Standards - and why we follow them")):+t.no==46?(v(),T("p",CA,[EA,m(" is unsafe")])):+t.no==47?(v(),T("p",TA,"Conventially UTF-8 vs. Gaurantee")):+t.no==48?(v(),T("p",FA,"Summary")):+t.no==49?(v(),T("p",$A,"Quirks")):+t.no==50?(v(),T("p",BA,"Capitalization (AKA Casemapping and Casefolding)")):+t.no==51?(v(),T("p",DA,"Composition")):+t.no==52?(v(),T("p",OA,"Emoji Composition")):+t.no==53?(v(),T("p",IA,"Digraphs/ligatures")):+t.no==54?(v(),T("p",PA,"Flags")):+t.no==55?(v(),T("p",UA,"Unicode Tags")):+t.no==56?(v(),T("p",MA,"THE END")):ye("v-if",!0)]))}}),RA=K(LA,[["__file","/@slidev/titles.md"]]),NA=ke({__name:"TocList",props:{level:{type:Number,required:!0,default:1},list:{type:Array,required:!0},listClass:{type:[String,Array],required:!1}},setup(e){const t=e;L(z);const n=D(()=>[...Zp(t.listClass||[]),"slidev-toc-list",`slidev-toc-list-level-${t.level}`]);return(s,r)=>{const i=B2,l=qs("TocList",!0);return s.list&&s.list.length>0?(v(),T("ol",{key:0,class:Re(n.value)},[(v(!0),T(Te,null,Cs(s.list,a=>(v(),T("li",{key:a.path,class:Re(["slidev-toc-item",[{"slidev-toc-item-active":a.active},{"slidev-toc-item-parent-active":a.activeParent}]])},[H(i,{to:a.path},{default:M(()=>[H(B(RA),{no:a.path},null,8,["no"])]),_:2},1032,["to"]),a.children.length>0?(v(),j(l,{key:0,level:s.level+1,list:a.children,"list-class":s.listClass},null,8,["level","list","list-class"])):ye("v-if",!0)],2))),128))],2)):ye("v-if",!0)}}});const qA=K(NA,[["__file","/home/ben/Workspace/demystifying-unicode/node_modules/@slidev/client/builtin/TocList.vue"]]),jA=ke({__name:"Toc",props:{columns:{type:[String,Number],required:!1,default:1},listClass:{type:[String,Array],required:!1,default:""},maxDepth:{type:[String,Number],required:!1,default:1/0},minDepth:{type:[String,Number],required:!1,default:1},mode:{type:String,required:!1,default:"all"}},setup(e){const t=e,n=L(z);function s(a,c=1){if(c>Number(t.maxDepth))return[];if(c<Number(t.minDepth)){const u=a.find(d=>d.active||d.activeParent);return u?s(u.children,c+1):[]}return a.map(u=>({...u,children:s(u.children,c+1)}))}function r(a){return a.filter(c=>c.active||c.activeParent||c.hasActiveParent).map(c=>({...c,children:r(c.children)}))}function i(a){const c=a.some(u=>u.active||u.activeParent||u.hasActiveParent);return a.filter(()=>c).map(u=>({...u,children:i(u.children)}))}const l=D(()=>{const a=n==null?void 0:n.nav.tree;if(!a)return[];let c=s(a);return t.mode==="onlyCurrentTree"?c=r(c):t.mode==="onlySiblings"&&(c=i(c)),c});return(a,c)=>{const u=qA;return v(),T("div",{class:"slidev-toc",style:Xe(`column-count:${a.columns}`)},[H(u,{level:1,list:l.value,"list-class":a.listClass},null,8,["list","list-class"])],4)}}}),WA=K(jA,[["__file","/home/ben/Workspace/demystifying-unicode/node_modules/@slidev/client/builtin/Toc.vue"]]),HA=o("h1",null,"Table of contents",-1),VA={__name:"3",setup(e){const t={hideInToc:!0};return L(z),(n,s)=>{const r=WA;return v(),j(De,le(re(t)),{default:M(()=>[HA,H(r,{maxDepth:"1"})]),_:1},16)}}},zA=K(VA,[["__file","/@slidev/slides/3.md"]]),KA=o("h1",null,"History",-1),GA={__name:"4",setup(e){const t={layout:"cover",hide:!1,srcSequence:"./pages/01-history.md"};return L(z),(n,s)=>(v(),j(Ks,le(re(t)),{default:M(()=>[KA]),_:1},16))}},YA=K(GA,[["__file","/@slidev/slides/4.md"]]),Vu=["ul","ol"],Yt=ke({props:{depth:{type:[Number,String],default:1},every:{type:Number,default:1},at:{type:[Number,String],default:null},hide:{type:Boolean,default:!1},fade:{type:Boolean,default:!1}},render(){var a,c;const e=ws("click"),t=ws("after"),n=(u,d,p)=>Tt(u,[[d,p,"",{hide:this.hide,fade:this.fade}]]);let s=(c=(a=this.$slots).default)==null?void 0:c.call(a);if(!s)return;s=Zp(s);const r=(u,d=1)=>{let p=0;return[u.map(h=>{if(!cn(h))return h;if(Vu.includes(h.type)&&Array.isArray(h.children)){const[y,b]=l(h.children,d+1);return p+=b,Je(h,{},[y])}return Je(h)}),p]};let i=0;const l=(u,d=1)=>{let p=0;return[u.map(h=>{if(!cn(h)||h.type===lt)return h;const y=p%this.every===0?e:t;let b,k=0;if(d<+this.depth&&Array.isArray(h.children)){const[A,x]=r(h.children,d);b=Je(h,{},[A]),k=x,p+=x+1}else b=Je(h),p++;const w=this.at!=null?Number(this.at)+Math.floor(i/this.every)+d:(d-1-k).toString();return i++,n(b,y,typeof w=="string"&&!w.startsWith("-")?`+${w}`:w)}),p]};return s.length===1&&Vu.includes(s[0].type)&&Array.isArray(s[0].children)?Je(s[0],{},[l(s[0].children)[0]]):l(s)[0]}}),QA=o("h2",null,"A bit (🥁鈸) of fundamentals",-1),ZA=o("div",{class:"mt-5"},[o("blockquote",null,[o("p",null,"Computers represent information as 1’s and 0’s"),o("ul",null,[o("li",null,"Literally everyone, since forever")])])],-1),JA=o("p",null,"Multiple bits can be put together to make different structures.",-1),XA=o("p",null,"Those structures are inherently computer orientated - not human orientated:",-1),e5=o("ul",null,[o("li",null,[o("p",null,"8 bits makes a byte")]),o("li",null,[o("p",null,"4/8 bytes makes a word on 32/64 bit architectures respectively"),o("p",null,[o("sup",null,'(last you’ll heard of "words" in this presentation)')])])],-1),t5={__name:"5",setup(e){const t={hide:!1,srcSequence:"./pages/01-history.md"};return L(z),(n,s)=>{const r=Yt;return v(),j(De,le(re(t)),{default:M(()=>[QA,ZA,H(r,null,{default:M(()=>[JA,XA,e5]),_:1})]),_:1},16)}}},n5=K(t5,[["__file","/@slidev/slides/5.md"]]),Qt=ke({props:{at:{type:[Number,String],default:null},hide:{type:Boolean,default:!1},fade:{type:Boolean,default:!1}},render(){return H(Yt,{every:99999,at:this.at,hide:this.hide,fade:this.fade},{default:this.$slots.default})}}),s5=o("h2",null,"Abstraction",-1),o5=o("div",{class:"mt-5"},[o("blockquote",null,[o("p",null,"Let’s make an abstraction so we can understand things better"),o("ul",null,[o("li",null,"Literally every developer, since forever")])])],-1),r5=o("p",null,[o("code",null,"C"),m(" abstracted things a little further:")],-1),i5=o("ul",null,[o("li",null,[o("p",null,[o("code",null,"bool"),m(" is a 1 bit")])]),o("li",null,[o("p",null,[o("code",null,"char"),m(" is a 8 bits")])]),o("li",null,[o("p",null,[o("code",null,"int"),m(" is ambiguous")]),o("p",null,[m('More common "nowadays": '),o("code",null,"uint8_t"),m(", "),o("code",null,"uint32_t"),m(", "),o("code",null,"int8_t"),m(", etc")])]),o("li",null,[o("p",null,[o("code",null,"long"),m(" also ambiguous, but >= "),o("code",null,"int")])])],-1),l5=o("p",null,[m("But - what really "),o("strong",null,"is"),m(" a "),o("code",null,"char"),m("?")],-1),a5=o("p",null,"And what really are characters?",-1),c5={__name:"6",setup(e){const t={hide:!1,srcSequence:"./pages/01-history.md"};return L(z),(n,s)=>{const r=Yt,i=Qt;return v(),j(De,le(re(t)),{default:M(()=>[s5,o5,r5,H(r,null,{default:M(()=>[i5]),_:1}),H(i,null,{default:M(()=>[l5,a5]),_:1})]),_:1},16)}}},u5=K(c5,[["__file","/@slidev/slides/6.md"]]),d5=o("h2",null,"Abstract? ABSTRACT!",-1),p5=o("p",null,"Quiz time - what does this say:",-1),f5=o("pre",{class:"shiki-container"},[o("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[o("code",null,[o("span",{class:"line"},[o("span",{style:{color:"#dbd7ca"}},"01001000 01100101 01101100 01101100 01101111 00100000")]),m(`
`),o("span",{class:"line"},[o("span",{style:{color:"#dbd7ca"}},"01010111 01101111 01110010 01101100 01100100 00100001")])])]),o("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[o("code",null,[o("span",{class:"line"},[o("span",{style:{color:"#393a34"}},"01001000 01100101 01101100 01101100 01101111 00100000")]),m(`
`),o("span",{class:"line"},[o("span",{style:{color:"#393a34"}},"01010111 01101111 01110010 01101100 01100100 00100001")])])])],-1),h5=o("p",null,[o("code",null,"00100000"),m(" = "),o("code",null,"0x20"),m(" = "),o("code",null," "),o("span",{class:"pl-15"},[o("code",null,"00100001"),m(" = "),o("code",null,"0x21"),m(" = "),o("code",null,"!")])],-1),m5=o("hr",null,null,-1),y5=o("pre",{class:"shiki-container"},[o("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[o("code",null,[o("span",{class:"line"},[o("span",{style:{color:"#dbd7ca"}},"0100 1000  =  0x48  =  'H'")]),m(`
`),o("span",{class:"line"},[o("span",{style:{color:"#dbd7ca"}},"0110 0101  =  0x65  =  'e'")]),m(`
`),o("span",{class:"line"},[o("span",{style:{color:"#dbd7ca"}},"0110 1100  =  0x6c  =  'l'")]),m(`
`),o("span",{class:"line"},[o("span",{style:{color:"#dbd7ca"}},"0110 1100  =  0x6c  =  'l'")]),m(`
`),o("span",{class:"line"},[o("span",{style:{color:"#dbd7ca"}},"0110 1111  =  0x6f  =  'o'")]),m(`
`),o("span",{class:"line"},[o("span",{style:{color:"#dbd7ca"}},"0010 0000  =  0x20  =  ' '")]),m(`
`),o("span",{class:"line"},[o("span",{style:{color:"#dbd7ca"}},"0101 0111  =  0x57  =  'W'")]),m(`
`),o("span",{class:"line"},[o("span",{style:{color:"#dbd7ca"}},"0110 1111  =  0x6f  =  'o'")]),m(`
`),o("span",{class:"line"},[o("span",{style:{color:"#dbd7ca"}},"0111 0010  =  0x72  =  'r'")]),m(`
`),o("span",{class:"line"},[o("span",{style:{color:"#dbd7ca"}},"0110 1100  =  0x6c  =  'l'")]),m(`
`),o("span",{class:"line"},[o("span",{style:{color:"#dbd7ca"}},"0110 0100  =  0x64  =  'd'")]),m(`
`),o("span",{class:"line"},[o("span",{style:{color:"#dbd7ca"}},"0010 0001  =  0x21  =  '!'")])])]),o("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[o("code",null,[o("span",{class:"line"},[o("span",{style:{color:"#393a34"}},"0100 1000  =  0x48  =  'H'")]),m(`
`),o("span",{class:"line"},[o("span",{style:{color:"#393a34"}},"0110 0101  =  0x65  =  'e'")]),m(`
`),o("span",{class:"line"},[o("span",{style:{color:"#393a34"}},"0110 1100  =  0x6c  =  'l'")]),m(`
`),o("span",{class:"line"},[o("span",{style:{color:"#393a34"}},"0110 1100  =  0x6c  =  'l'")]),m(`
`),o("span",{class:"line"},[o("span",{style:{color:"#393a34"}},"0110 1111  =  0x6f  =  'o'")]),m(`
`),o("span",{class:"line"},[o("span",{style:{color:"#393a34"}},"0010 0000  =  0x20  =  ' '")]),m(`
`),o("span",{class:"line"},[o("span",{style:{color:"#393a34"}},"0101 0111  =  0x57  =  'W'")]),m(`
`),o("span",{class:"line"},[o("span",{style:{color:"#393a34"}},"0110 1111  =  0x6f  =  'o'")]),m(`
`),o("span",{class:"line"},[o("span",{style:{color:"#393a34"}},"0111 0010  =  0x72  =  'r'")]),m(`
`),o("span",{class:"line"},[o("span",{style:{color:"#393a34"}},"0110 1100  =  0x6c  =  'l'")]),m(`
`),o("span",{class:"line"},[o("span",{style:{color:"#393a34"}},"0110 0100  =  0x64  =  'd'")]),m(`
`),o("span",{class:"line"},[o("span",{style:{color:"#393a34"}},"0010 0001  =  0x21  =  '!'")])])])],-1),g5={__name:"7",setup(e){const t={hide:!1,srcSequence:"./pages/01-history.md"};return L(z),(n,s)=>{const r=Qt;return v(),j(De,le(re(t)),{default:M(()=>[d5,p5,f5,H(r,null,{default:M(()=>[h5]),_:1}),H(r,null,{default:M(()=>[m5,y5]),_:1})]),_:1},16)}}},v5=K(g5,[["__file","/@slidev/slides/7.md"]]),rh="/demystifying-unicode/standards.png",_5={class:"slidev-layout center h-full grid place-content-center"},b5={class:"my-auto"},x5={__name:"center",setup(e){return L(z),(t,n)=>(v(),T("div",_5,[o("div",b5,[wt(t.$slots,"default")])]))}},tt=K(x5,[["__file","/home/ben/Workspace/demystifying-unicode/node_modules/@slidev/client/layouts/center.vue"]]),w5=o("div",{class:"flex flex-col"},[o("img",{src:rh,class:"center"}),o("p",{class:"text-3"}," Alt: Fortunately, the charging one has been solved now that we've all standardized on mini-USB. Or is it micro-USB? Shit. ")],-1),k5=o("footer",null,[o("p",null,[m("Source: "),o("a",{href:"https://xkcd.com/927/",target:"_blank",rel:"noopener"},"https://xkcd.com/927/")])],-1),A5={__name:"8",setup(e){const t={layout:"center",hide:!1,srcSequence:"./pages/01-history.md"};return L(z),(n,s)=>(v(),j(tt,le(re(t)),{default:M(()=>[w5,k5]),_:1},16))}},S5=K(A5,[["__file","/@slidev/slides/8.md"]]),C5=o("h2",null,"Competing standards",-1),E5=o("ul",null,[o("li",null,[o("s",null,"ANSI (American National Standards Institue) Characters"),m(" Windows code pages, Code Page 437")]),o("li",null,"ASCII (American Standard Code for Information Interchange) Characters")],-1),T5={class:"mt-10"},F5=o("pre",{class:"shiki-container"},[o("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[o("code",null,[o("span",{class:"line"},[o("span",{style:{color:"#dbd7ca"}},'┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫ Cool "App" 3000 ┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓')]),m(`
`),o("span",{class:"line"},[o("span",{style:{color:"#dbd7ca"}},"┃                                                                                     ┃ ")]),m(`
`),o("span",{class:"line"},[o("span",{style:{color:"#dbd7ca"}},"┃                                                                                     ┃ ")]),m(`
`),o("span",{class:"line"},[o("span",{style:{color:"#dbd7ca"}},"┃                                                                                     ┃ ")]),m(`
`),o("span",{class:"line"},[o("span",{style:{color:"#dbd7ca"}},"┃                                                                                     ┃ ")]),m(`
`),o("span",{class:"line"},[o("span",{style:{color:"#dbd7ca"}},"┃                    ┏━━━━━━━━━━━━━━━━━━┫ Prompt ┣━━━━━━━━━━━━━━━━┓                   ┃")]),m(`
`),o("span",{class:"line"},[o("span",{style:{color:"#dbd7ca"}},"┃                    ┃                                            ┃                   ┃ ")]),m(`
`),o("span",{class:"line"},[o("span",{style:{color:"#dbd7ca"}},"┃                    ┃ DO YOU WANT YOUR LANGAUGE TO BE SUPPORTED? ┃                   ┃")]),m(`
`),o("span",{class:"line"},[o("span",{style:{color:"#dbd7ca"}},"┃                    ┃                                            ┃                   ┃")]),m(`
`),o("span",{class:"line"},[o("span",{style:{color:"#dbd7ca"}},"┃                    ┗━━━━━━━━━━━━━━━━━━┫ No ┣━┫ >Nah not even< ┣━┛                   ┃")]),m(`
`),o("span",{class:"line"},[o("span",{style:{color:"#dbd7ca"}},"┃                                                                                     ┃ ")]),m(`
`),o("span",{class:"line"},[o("span",{style:{color:"#dbd7ca"}},"┃                                                                                     ┃ ")]),m(`
`),o("span",{class:"line"},[o("span",{style:{color:"#dbd7ca"}},"┃                                                                                     ┃ ")]),m(`
`),o("span",{class:"line"},[o("span",{style:{color:"#dbd7ca"}},"┃                                                                                     ┃ ")]),m(`
`),o("span",{class:"line"},[o("span",{style:{color:"#dbd7ca"}},"┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛")])])]),o("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[o("code",null,[o("span",{class:"line"},[o("span",{style:{color:"#393a34"}},'┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫ Cool "App" 3000 ┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓')]),m(`
`),o("span",{class:"line"},[o("span",{style:{color:"#393a34"}},"┃                                                                                     ┃ ")]),m(`
`),o("span",{class:"line"},[o("span",{style:{color:"#393a34"}},"┃                                                                                     ┃ ")]),m(`
`),o("span",{class:"line"},[o("span",{style:{color:"#393a34"}},"┃                                                                                     ┃ ")]),m(`
`),o("span",{class:"line"},[o("span",{style:{color:"#393a34"}},"┃                                                                                     ┃ ")]),m(`
`),o("span",{class:"line"},[o("span",{style:{color:"#393a34"}},"┃                    ┏━━━━━━━━━━━━━━━━━━┫ Prompt ┣━━━━━━━━━━━━━━━━┓                   ┃")]),m(`
`),o("span",{class:"line"},[o("span",{style:{color:"#393a34"}},"┃                    ┃                                            ┃                   ┃ ")]),m(`
`),o("span",{class:"line"},[o("span",{style:{color:"#393a34"}},"┃                    ┃ DO YOU WANT YOUR LANGAUGE TO BE SUPPORTED? ┃                   ┃")]),m(`
`),o("span",{class:"line"},[o("span",{style:{color:"#393a34"}},"┃                    ┃                                            ┃                   ┃")]),m(`
`),o("span",{class:"line"},[o("span",{style:{color:"#393a34"}},"┃                    ┗━━━━━━━━━━━━━━━━━━┫ No ┣━┫ >Nah not even< ┣━┛                   ┃")]),m(`
`),o("span",{class:"line"},[o("span",{style:{color:"#393a34"}},"┃                                                                                     ┃ ")]),m(`
`),o("span",{class:"line"},[o("span",{style:{color:"#393a34"}},"┃                                                                                     ┃ ")]),m(`
`),o("span",{class:"line"},[o("span",{style:{color:"#393a34"}},"┃                                                                                     ┃ ")]),m(`
`),o("span",{class:"line"},[o("span",{style:{color:"#393a34"}},"┃                                                                                     ┃ ")]),m(`
`),o("span",{class:"line"},[o("span",{style:{color:"#393a34"}},"┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛")])])])],-1),$5=o("p",null,"🙇 IBM - You helped us draw instead of supporting languages.",-1),B5=[F5,$5],D5={__name:"9",setup(e){const t={hide:!1,srcSequence:"./pages/01-history.md"};return L(z),(n,s)=>{const r=ws("click");return v(),j(De,le(re(t)),{default:M(()=>[C5,E5,Tt((v(),T("div",T5,B5)),[[r]])]),_:1},16)}}},O5=K(D5,[["__file","/@slidev/slides/9.md"]]),I5="/demystifying-unicode/Codepage-437.png",P5="/demystifying-unicode/Codepage-737.png",U5=o("h2",null,"About ol ASCII - QQ",-1),M5=o("div",{class:"flex flex-row flex-items-stretch"},[o("div",{class:"text-center"},[o("p",null,[o("strong",null,"IBM 437")]),o("img",{class:"w-120",src:I5,alt:"An example of the characters on the commonly used IBM437 codepage"})]),o("div",{class:"text-center"},[o("p",null,[o("strong",null,"IBM 737")]),o("img",{class:"w-120 mt-5",src:P5,alt:"An example of the characters on IBM737 which shows greek characters above the 0x7F range"})])],-1),L5=o("div",{class:"absolute border-5 top-35 left-12 right-12 bottom-76 border-red"},null,-1),R5=o("ul",null,[o("li",null,[m("ASCII standardized 0x00…0x7F"),o("pre",{class:"shiki-container"},[o("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[o("code",null,[o("span",{class:"line"},[o("span",{style:{color:"#dbd7ca"}},"␀␁␂␃␄␅␆␇␈␉␊␋␌␍␎␏␐␑␒␓␔␕␖␗␘␙␚␛␜␝␞␟")]),m(`
`),o("span",{class:"line"},[o("span",{style:{color:"#dbd7ca"}},`␠!"#$%&'()*+,-./0123456789:;<=>?`)]),m(`
`),o("span",{class:"line"},[o("span",{style:{color:"#dbd7ca"}},"@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_")]),m(`
`),o("span",{class:"line"},[o("span",{style:{color:"#dbd7ca"}},"`abcdefghijklmnopqrstuvwxyz{|}~␡")])])]),o("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[o("code",null,[o("span",{class:"line"},[o("span",{style:{color:"#393a34"}},"␀␁␂␃␄␅␆␇␈␉␊␋␌␍␎␏␐␑␒␓␔␕␖␗␘␙␚␛␜␝␞␟")]),m(`
`),o("span",{class:"line"},[o("span",{style:{color:"#393a34"}},`␠!"#$%&'()*+,-./0123456789:;<=>?`)]),m(`
`),o("span",{class:"line"},[o("span",{style:{color:"#393a34"}},"@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_")]),m(`
`),o("span",{class:"line"},[o("span",{style:{color:"#393a34"}},"`abcdefghijklmnopqrstuvwxyz{|}~␡")])])])])]),o("li",null,[m("∴ "),o("code",null,"0x00..0x7F"),m(" was common between many code pages")])],-1),N5={__name:"10",setup(e){const t={hide:!1,srcSequence:"./pages/01-history.md"};return L(z),(n,s)=>{const r=Qt,i=Yt;return v(),j(De,le(re(t)),{default:M(()=>[U5,M5,H(r,null,{default:M(()=>[L5]),_:1}),H(i,null,{default:M(()=>[R5]),_:1})]),_:1},16)}}},q5=K(N5,[["__file","/@slidev/slides/10.md"]]),j5=o("h2",null,"How many characters is enough charcters?",-1),W5=o("p",{class:"pt-5"},[o("p",null,[o("strong",null,"DIN 91379"),m(' - Characters and character sequences for processing names and data exchange in europe"')])],-1),H5=o("table",null,[o("thead",null,[o("tr",null,[o("th"),o("th")])]),o("tbody",null,[o("tr",null,[o("td",null,"Base Latin Letters: 649"),o("td",null,"enl: 42")]),o("tr",null,[o("td",null,"Combinging Diacritics: 19"),o("td",null,"bnlreq: 17")]),o("tr",null,[o("td",null,"Greek Letters: 68"),o("td",null,"bnl: 59")]),o("tr",null,[o("td",null,"Cyrillic Letters: 61"),o("td",null,"bnlopt: 8")]),o("tr",null,[o("td"),o("td",null,"bnlnot: 2")])])],-1),V5=o("p",null,[o("strong",null,"💣 8 bits isn’t going to be enough 💣")],-1),z5=o("footer",null,[o("p",null,[m("DIN 91379: "),o("a",{href:"https://github.com/String-Latin/DIN-91379-Characters-and-Sequences",target:"_blank",rel:"noopener"},"https://github.com/String-Latin/DIN-91379-Characters-and-Sequences")])],-1),K5={__name:"11",setup(e){const t={hide:!1,srcSequence:"./pages/01-history.md"};return L(z),(n,s)=>{const r=Yt;return v(),j(De,le(re(t)),{default:M(()=>[j5,W5,H5,H(r,null,{default:M(()=>[V5]),_:1}),z5]),_:1},16)}}},G5=K(K5,[["__file","/@slidev/slides/11.md"]]),Y5=o("h2",null,"Summary:",-1),Q5=o("ul",null,[o("li",null,[m("Computers know bits - "),o("code",null,"1"),m("s and "),o("code",null,"0"),m("s")]),o("li",null,"Bits are not human structures - so we abstract"),o("li",null,[o("code",null,"char"),m(" isn’t a character, it’s just a "),o("code",null,"uint8_t"),m(" with a fancy name")]),o("li",null,"We need a whole lot more bits if we more than just names and dates in europe")],-1),Z5={__name:"12",setup(e){const t={layout:"center",hide:!1,srcSequence:"./pages/01-history.md"};return L(z),(n,s)=>{const r=Yt;return v(),j(tt,le(re(t)),{default:M(()=>[Y5,H(r,null,{default:M(()=>[Q5]),_:1})]),_:1},16)}}},J5=K(Z5,[["__file","/@slidev/slides/12.md"]]),X5=o("h1",null,"Unicode",-1),eS={__name:"13",setup(e){const t={layout:"cover",hide:!1,srcSequence:"./pages/02-unicode.md"};return L(z),(n,s)=>(v(),j(Ks,le(re(t)),{default:M(()=>[X5]),_:1},16))}},tS=K(eS,[["__file","/@slidev/slides/13.md"]]),nS=o("h2",null,"Why Unicode?",-1),sS=o("ol",null,[o("li",null,"Codepages/charmaps? System dependant"),o("li",null,"Unique characters? Duplication everywhere"),o("li",null,"Display more than one codepage/charmap at a time? ␎␏␎␏␎␏␎␏"),o("li",null,"Text from outside of Europe? :ha:")],-1),oS={__name:"14",setup(e){const t={hide:!1,srcSequence:"./pages/02-unicode.md"};return L(z),(n,s)=>{const r=Yt;return v(),j(De,le(re(t)),{default:M(()=>[nS,H(r,null,{default:M(()=>[sS]),_:1})]),_:1},16)}}},rS=K(oS,[["__file","/@slidev/slides/14.md"]]);const iS=e=>(sp("data-v-d13ddf34"),e=e(),op(),e),lS=iS(()=>o("div",{class:"absolute top-0 left-0 the-internet flex justify-center items-center text-30"},[o("p",{class:"text-shadow-xl color-white text-shadow-color-red"},"The Internet")],-1)),aS={__name:"15",setup(e){const t={layout:"center",hide:!1,srcSequence:"./pages/02-unicode.md"};return L(z),(n,s)=>(v(),j(tt,le(re(t)),{default:M(()=>[lS]),_:1},16))}},cS=K(aS,[["__scopeId","data-v-d13ddf34"],["__file","/@slidev/slides/15.md"]]),uS=o("h2",null,"Unicode to the resque",-1),dS=o("ul",null,[o("li",null,"Universal"),o("li",null,"Efficient"),o("li",null,"Unambiguous")],-1),pS={__name:"16",setup(e){const t={layout:"center",hide:!1,srcSequence:"./pages/02-unicode.md"};return L(z),(n,s)=>{const r=Yt;return v(),j(tt,le(re(t)),{default:M(()=>[uS,H(r,null,{default:M(()=>[dS]),_:1})]),_:1},16)}}},fS=K(pS,[["__file","/@slidev/slides/16.md"]]),hS=o("h2",null,"New Terminology",-1),mS=o("table",null,[o("thead",null,[o("tr",null,[o("th"),o("th"),o("th")])]),o("tbody",null,[o("tr",null,[o("td",null,"Glyph"),o("td",null,"‽"),o("td",null,"How it actually looks, defined by the font")]),o("tr",null,[o("td",null,"Codepoint"),o("td",null,"U+203D"),o("td",null,"Unique identifier for this character")]),o("tr",null,[o("td",null,"Character"),o("td",null,"Interrobang"),o("td",null,"Description of the codepoint")]),o("tr",null,[o("td",null,"Block"),o("td",null,"General Punctuation, U+2000 - U+206F"),o("td",null,"The range of codepoints for a specific purpose")]),o("tr",null,[o("td",null,"Plane"),o("td",null,"Basic Multilingual Plane, U+0000 - U+FFFF"),o("td",null,"The wide group of codepoints")])])],-1),yS=o("footer",null,[o("p",null,[m("Ref: Characters and Glyphs "),o("a",{href:"https://www.unicode.org/versions/Unicode15.0.0/ch01.pdf",target:"_blank",rel:"noopener"},"https://www.unicode.org/versions/Unicode15.0.0/ch01.pdf")])],-1),gS={__name:"17",setup(e){const t={hide:!1,srcSequence:"./pages/02-unicode.md"};return L(z),(n,s)=>(v(),j(De,le(re(t)),{default:M(()=>[hS,mS,yS]),_:1},16))}},vS=K(gS,[["__file","/@slidev/slides/17.md"]]),_S="/demystifying-unicode/glyph-codepoint-character.jpg",bS=o("img",{src:_S,alt:"Triple spiderman meme, glyph, codepoint, character pointing at each other"},null,-1),xS={__name:"18",setup(e){const t={layout:"center",hide:!1,srcSequence:"./pages/02-unicode.md"};return L(z),(n,s)=>(v(),j(tt,le(re(t)),{default:M(()=>[bS]),_:1},16))}},wS=K(xS,[["__file","/@slidev/slides/18.md"]]),kS="/demystifying-unicode/no_chars_yes_glyphs.jpg",AS=o("img",{src:kS,alt:"Drake no: characters. Drake yes: glyphs"},null,-1),SS={__name:"19",setup(e){const t={layout:"center",hide:!1,srcSequence:"./pages/02-unicode.md"};return L(z),(n,s)=>(v(),j(tt,le(re(t)),{default:M(()=>[AS]),_:1},16))}},CS=K(SS,[["__file","/@slidev/slides/19.md"]]),ES=ke({__name:"two-cols",props:{class:{type:String},layoutClass:{type:String}},setup(e){const t=e;return L(z),(n,s)=>(v(),T("div",{class:Re(["slidev-layout two-columns w-full h-full grid grid-cols-2",t.layoutClass])},[o("div",{class:Re(["col-left",t.class])},[wt(n.$slots,"default")],2),o("div",{class:Re(["col-right",t.class])},[wt(n.$slots,"right")],2)],2))}}),TS=K(ES,[["__file","/home/ben/Workspace/demystifying-unicode/node_modules/@slidev/client/layouts/two-cols.vue"]]),FS=o("h2",null,"Glyphemes",-1),$S=o("div",{class:"codepoint"},[o("div",{class:"glyph"},"é"),o("div",{class:"code"},"U+00e9")],-1),BS=o("div",{class:"codepoint"},[o("div",{class:"glyph"},"é"),o("div",{class:"code"},"U+0065 + U+0301")],-1),DS={__name:"20",setup(e){const t={layout:"two-cols",hide:!1,srcSequence:"./pages/02-unicode.md"};return L(z),(n,s)=>(v(),j(TS,le(re(t)),{right:M(r=>[BS]),default:M(()=>[FS,$S]),_:1},16))}},OS=K(DS,[["__file","/@slidev/slides/20.md"]]),IS=o("h2",null,"What is the difference between",-1),PS=o("h2",null,[o("code",null,"Unicode")],-1),US=o("h2",null,"and",-1),MS=o("h2",null,[o("code",null,"UTF-8")],-1),LS={__name:"21",setup(e){const t={layout:"center",hide:!1,srcSequence:"./pages/02-unicode.md"};return L(z),(n,s)=>(v(),j(tt,le(re(t)),{default:M(()=>[IS,PS,US,MS]),_:1},16))}},RS=K(LS,[["__file","/@slidev/slides/21.md"]]),NS=o("div",{class:"text-7"},[o("p",null,[o("code",null,"Unicode"),m(' - "The Standard"')]),o("p",null,[o("code",null,"UTF-8"),m(" - Encoding")])],-1),qS={__name:"22",setup(e){const t={layout:"center",hide:!1,srcSequence:"./pages/02-unicode.md"};return L(z),(n,s)=>(v(),j(tt,le(re(t)),{default:M(()=>[NS]),_:1},16))}},jS=K(qS,[["__file","/@slidev/slides/22.md"]]),WS=o("h2",null,"Encoding",-1),HS=o("p",null,[o("strong",null,"DIN 91379"),m(": 925 characters")],-1),VS=o("p",null,"At least 10 bits - (Names/Data exchange in Europe)",-1),zS=o("p",null,"Unicode:",-1),KS=o("ul",null,[o("li",null,"Supports 1048576 Characters"),o("li",null,"Code space: U+000000 - U+10FFFF"),o("li",null,"Which requires at least 21 bits")],-1),GS=o("footer",null,[o("p",null,"Fun fact: Unicode <2.0 code space was 16-bit wide.")],-1),YS={__name:"23",setup(e){const t={hide:!1,srcSequence:"./pages/02-unicode.md"};return L(z),(n,s)=>{const r=Yt;return v(),j(De,le(re(t)),{default:M(()=>[WS,H(r,null,{default:M(()=>[HS,VS,zS,KS]),_:1}),GS]),_:1},16)}}},QS=K(YS,[["__file","/@slidev/slides/23.md"]]),ZS=o("div",{class:"flex flex-col"},[o("img",{src:rh,class:"center"}),o("p",{class:"text-3"}," Alt: Fortunately, the charging one has been solved now that we've all standardized on mini-USB. Or is it micro-USB? Shit. ")],-1),JS=o("footer",null,[o("p",null,[m("Source: "),o("a",{href:"https://xkcd.com/927/",target:"_blank",rel:"noopener"},"https://xkcd.com/927/")])],-1),XS={__name:"24",setup(e){const t={layout:"center",hide:!1,srcSequence:"./pages/02-unicode.md"};return L(z),(n,s)=>(v(),j(tt,le(re(t)),{default:M(()=>[ZS,JS]),_:1},16))}},eC=K(XS,[["__file","/@slidev/slides/24.md"]]),tC=o("h2",null,"Woo options!",-1),nC=o("p",null,"😻 = U+1F63B = Smiling cat face with heart-shaped eyes",-1),sC=o("table",null,[o("thead",null,[o("tr",null,[o("th"),o("th")])]),o("tbody",null,[o("tr",null,[o("td",null,"UTF-8"),o("td",null,[o("code",null,"0xF0 0x9F 0x98 0xBB")])]),o("tr",null,[o("td",null,"UTF-16BE*"),o("td",null,[o("code",null,"0xD83D 0xDE3B")])]),o("tr",null,[o("td",null,"UTF-16LE"),o("td",null,[o("code",null,"0x3DD8 0x3BDE")])]),o("tr",null,[o("td",null,"UTF-32BE*"),o("td",null,[o("code",null,"0x0001F63B")])]),o("tr",null,[o("td",null,"UTF-32LE"),o("td",null,[o("code",null,"0x3BF60100")])])])],-1),oC=o("p",null,[m("* BE encodings are the default if no BOM "),o("code",null,"\\xFEFF")],-1),rC=o("footer",null,[o("p",null,[m("UTF-21 exists - but it’s a toy encoding hobby project"),o("br")])],-1),iC={__name:"25",setup(e){const t={hide:!1,srcSequence:"./pages/02-unicode.md"};return L(z),(n,s)=>{const r=Qt;return v(),j(De,le(re(t)),{default:M(()=>[tC,nC,H(r,null,{default:M(()=>[sC,oC]),_:1}),rC]),_:1},16)}}},lC=K(iC,[["__file","/@slidev/slides/25.md"]]),aC=o("h2",null,"UTF-8 is the king of the web",-1),cC={__name:"26",setup(e){const t={layout:"center",hide:!1,srcSequence:"./pages/02-unicode.md"};return L(z),(n,s)=>(v(),j(tt,le(re(t)),{default:M(()=>[aC]),_:1},16))}},uC=K(cC,[["__file","/@slidev/slides/26.md"]]),dC=o("h2",null,"Nuts and bolts of UTF-8",-1),pC=o("p",null,"Key points:",-1),fC=o("ul",null,[o("li",null,"Variable width (1-4 bytes)"),o("li",null,"∴ Variable offset between characters"),o("li",null,"The default in Rust (+many more)")],-1),hC=o("hr",null,null,-1),mC=o("table",null,[o("thead",null,[o("tr",null,[o("th",null,"Code point range"),o("th",null,"Byte 1"),o("th",null,"Byte 2"),o("th",null,"Byte 3"),o("th",null,"Byte 4"),o("th",null,"Bit Capacity"),o("th",null,"Code points")])]),o("tbody",null,[o("tr",null,[o("td",null,[o("code",null,"0x000000..0x00007F")]),o("td",null,[o("code",null,"0xxxxxxx")]),o("td"),o("td"),o("td"),o("td",null,"7"),o("td",null,"128")]),o("tr",null,[o("td",null,[o("code",null,"0x000080..0x0007FF")]),o("td",null,[o("code",null,"110xxxxx")]),o("td",null,[o("code",null,"10xxxxxx")]),o("td"),o("td"),o("td",null,"11"),o("td",null,"1920")]),o("tr",null,[o("td",null,[o("code",null,"0x000800..0x00FFFF")]),o("td",null,[o("code",null,"1110xxxx")]),o("td",null,[o("code",null,"10xxxxxx")]),o("td",null,[o("code",null,"10xxxxxx")]),o("td"),o("td",null,"16"),o("td",null,"63488")]),o("tr",null,[o("td",null,[o("code",null,"0x010000..0x10FFFF")]),o("td",null,[o("code",null,"11110xxx")]),o("td",null,[o("code",null,"10xxxxxx")]),o("td",null,[o("code",null,"10xxxxxx")]),o("td",null,[o("code",null,"10xxxxxx")]),o("td",null,"21"),o("td",null,"1mil+")])])],-1),yC={__name:"27",setup(e){const t={hide:!1,srcSequence:"./pages/02-unicode.md"};return L(z),(n,s)=>{const r=Qt;return v(),j(De,le(re(t)),{default:M(()=>[dC,pC,fC,H(r,null,{default:M(()=>[hC,mC]),_:1})]),_:1},16)}}},gC=K(yC,[["__file","/@slidev/slides/27.md"]]),vC=["width","height"],_C=["id"],bC=["fill"],xC=["x1","y1","x2","y2","stroke","stroke-width","marker-end"],wC=ke({__name:"Arrow",props:{x1:{type:[Number,String],required:!0},y1:{type:[Number,String],required:!0},x2:{type:[Number,String],required:!0},y2:{type:[Number,String],required:!0},width:{type:[Number,String],required:!1},color:{type:String,required:!1}},setup(e){L(z);const n=b1("abcedfghijklmn",10)();return(s,r)=>(v(),T("svg",{class:"absolute left-0 top-0 pointer-events-none",width:Math.max(+s.x1,+s.x2)+50,height:Math.max(+s.y1,+s.y2)+50},[o("defs",null,[o("marker",{id:B(n),markerUnits:"strokeWidth",markerWidth:10,markerHeight:7,refX:"9",refY:"3.5",orient:"auto"},[o("polygon",{points:"0 0, 10 3.5, 0 7",fill:s.color||"currentColor"},null,8,bC)],8,_C)]),o("line",{x1:+s.x1,y1:+s.y1,x2:+s.x2,y2:+s.y2,stroke:s.color||"currentColor","stroke-width":s.width||2,"marker-end":`url(#${B(n)})`},null,8,xC)],8,vC))}}),kC=K(wC,[["__file","/home/ben/Workspace/demystifying-unicode/node_modules/@slidev/client/builtin/Arrow.vue"]]),AC=o("h2",null,"Let’s encode!",-1),SC=o("p",null,"😻 = U+1F63B = Smiling cat face with heart-shaped eyes",-1),CC=o("p",null,[m("1F63B = "),o("code",null,"0001 1111 0110 0011 1011")],-1),EC=[CC],TC={class:"mt-30"},FC=o("p",null,"We need at least 17 bits of room to encode U+1F63B",-1),$C=o("hr",null,null,-1),BC=o("p",null,[o("code",null,"17 > 7"),m(" ∴ Needs more than 1 byte")],-1),DC=o("p",null,[o("code",null,"17 > 11"),m(" ∴ Needs more than 2 bytes")],-1),OC=o("p",null,[o("code",null,"17 > 16"),m(" ∴ Needs more than 3 bytes")],-1),IC=o("p",null,"∴ We need 4 bytes!",-1),PC=o("p",null,[o("code",null,"1111 0xxx"),m(),o("code",null,"10xx xxxx"),m(),o("code",null,"10xx xxxx"),m(),o("code",null,"10xx xxxx")],-1),UC=[$C,BC,DC,OC,IC,PC],MC={__name:"28",setup(e){const t={hide:!1,srcSequence:"./pages/02-unicode.md"};return L(z),(n,s)=>{const r=kC,i=ws("click");return v(),j(De,le(re(t)),{default:M(()=>[AC,SC,Tt((v(),T("p",null,EC)),[[i]]),Tt((v(),T("div",TC,[H(r,{x1:"250",y1:"250",x2:"170",y2:"160",width:"5"}),FC])),[[i]]),Tt((v(),T("div",null,UC)),[[i]])]),_:1},16)}}},LC=K(MC,[["__file","/@slidev/slides/28.md"]]);const Ve=e=>(sp("data-v-224221b4"),e=e(),op(),e),RC=Ve(()=>o("h2",null,"Let’s encode!",-1)),NC=Ve(()=>o("p",null,"😻 = U+1F63B = Smiling cat face with heart-shaped eyes",-1)),qC=Ve(()=>o("p",null,[m("0x1F63B = "),o("code",null,"0001 1111 0110 0011 1011")],-1)),jC={class:"absolute top-40 left-14"},WC=Ve(()=>o("span",null,"0x1F63B = ",-1)),HC=Ve(()=>o("span",{class:"binary color-red"}," 00",-1)),VC=Ve(()=>o("span",{class:"binary color-blue"},"01 1111",-1)),zC=Ve(()=>o("span",{class:"binary color-green"}," 0110 00",-1)),KC=Ve(()=>o("span",{class:"binary color-yellow"},"11 1011",-1)),GC=[WC,HC,VC,zC,KC],YC={class:"absolute parts top-40 left-14"},QC=Ve(()=>o("div",{class:"binary color-red absolute part part-1 anim"},"00",-1)),ZC=Ve(()=>o("div",{class:"binary color-blue absolute part part-2 anim"},"01 1111",-1)),JC=Ve(()=>o("div",{class:"binary color-green absolute part part-3 no-backtick anim"},"0110 00",-1)),XC=Ve(()=>o("div",{class:"binary color-yellow absolute part part-4 no-backtick anim"},"11 1011",-1)),eE=[QC,ZC,JC,XC],tE={class:"absolute top-49 left-31"},nE=Ve(()=>o("span",{class:"binary"},[m("| 1111 0000 = 1111 00"),o("span",{class:"color-red"},"00"),m(" ")],-1)),sE=Ve(()=>o("p",null,[o("span",{class:"binary"},[m("| 1000 0000 = 10"),o("span",{class:"color-blue"},"01 1111"),m(" ")])],-1)),oE=Ve(()=>o("p",null,[o("span",{class:"binary"},[m("| 1000 0000 = 10"),o("span",{class:"color-green"},"01 1000"),m(" ")])],-1)),rE=Ve(()=>o("p",null,[o("span",{class:"binary"},[m("| 1000 0000 = 10"),o("span",{class:"color-yellow"},"11 1011"),m(" ")])],-1)),iE=[nE,sE,oE,rE],lE={class:"absolute top-49 left-86"},aE=Ve(()=>o("span",{class:"binary"}," = 0xF0",-1)),cE=Ve(()=>o("p",null,[o("span",{class:"binary"}," = 0x9F")],-1)),uE=Ve(()=>o("p",null,[o("span",{class:"binary"}," = 0x98")],-1)),dE=Ve(()=>o("p",null,[o("span",{class:"binary"}," = 0xBB")],-1)),pE=[aE,cE,uE,dE],fE={class:"absolute top-90 left-15"},hE=Ve(()=>o("hr",null,null,-1)),mE=Ve(()=>o("p",null,[m("Thus! U+1F63B = "),o("code",null,"\\xF0\\x9F\\x97\\xBB"),m(" in UTF-8")],-1)),yE={__name:"29",setup(e){const t={hide:!1,srcSequence:"./pages/02-unicode.md"};return L(z),(n,s)=>{const r=Qt,i=ws("click");return v(),j(De,le(re(t)),{default:M(()=>[RC,NC,qC,Tt((v(),T("div",jC,GC)),[[i]]),Tt((v(),T("div",YC,eE)),[[i]]),Tt((v(),T("div",tE,iE)),[[i]]),Tt((v(),T("div",lE,pE)),[[i]]),o("div",fE,[H(r,null,{default:M(()=>[hE,mE]),_:1})])]),_:1},16)}}},gE=K(yE,[["__scopeId","data-v-224221b4"],["__file","/@slidev/slides/29.md"]]),vE=o("h2",null,"Summary",-1),_E=o("ul",null,[o("li",null,[m("Unicode is a standard. It defeines a dictionary of "),o("code",null,"codepoints"),m(" to their character descriptions")]),o("li",null,"UTF-8 is an Encoding - defined by the Unicode Standard."),o("li",null,"Encodings help humans interpret bytes as painted glyphs"),o("li",null,"UTF-8 is by far the most common standard due to it’s memory efficiency (e.g. variable space)")],-1),bE={__name:"30",setup(e){const t={layout:"center",hide:!1,srcSequence:"./pages/02-unicode.md"};return L(z),(n,s)=>{const r=Yt;return v(),j(tt,le(re(t)),{default:M(()=>[vE,H(r,null,{default:M(()=>[_E]),_:1})]),_:1},16)}}},xE=K(bE,[["__file","/@slidev/slides/30.md"]]),wE=o("h1",null,"Unicode in Rust",-1),kE={__name:"31",setup(e){const t={layout:"cover",hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"};return L(z),(n,s)=>(v(),j(Ks,le(re(t)),{default:M(()=>[wE]),_:1},16))}},AE=K(kE,[["__file","/@slidev/slides/31.md"]]),SE=o("p",null,"Q: What is the primitive string type in rust?",-1),CE={__name:"32",setup(e){const t={layout:"center",hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"};return L(z),(n,s)=>(v(),j(tt,le(re(t)),{default:M(()=>[SE]),_:1},16))}},EE=K(CE,[["__file","/@slidev/slides/32.md"]]),TE=o("p",null,[m("Answer: "),o("code",null,"str")],-1),FE=o("p",null,[m("Incorrect: "),o("code",null,"String"),m(", "),o("code",null,"&str")],-1),$E=o("ul",null,[o("li",null,[o("code",null,"&str"),m(" impls "),o("code",null,"AsRef<str>")]),o("li",null,[o("code",null,"String"),m(" impls "),o("code",null,"AsRef<str>")]),o("li",null,[o("code",null,"String"),m(" impls "),o("code",null,"Deref"),m(" to "),o("code",null,"str"),m(" (thus "),o("code",null,"&String"),m(" derefs to "),o("code",null,"&str"),m(")")])],-1),BE={class:"mt-5"},DE=o("blockquote",null,[o("p",null,[m("The "),o("code",null,"str"),m(" type, also called a ‘string slice’, is the most primitive string type. It is usually seen in its borrowed form, "),o("code",null,"&str"),m(". It is also the type of string literals, "),o("code",null,"&'static str"),m(".")]),o("p",null,[m("String slices are "),o("strong",null,"always"),m(" valid UTF-8.")])],-1),OE=[DE],IE={__name:"33",setup(e){const t={layout:"center",hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"};return L(z),(n,s)=>{const r=Qt,i=ws("click");return v(),j(tt,le(re(t)),{default:M(()=>[TE,H(r,null,{default:M(()=>[FE,$E]),_:1}),Tt((v(),T("div",BE,OE)),[[i]])]),_:1},16)}}},PE=K(IE,[["__file","/@slidev/slides/33.md"]]),UE={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},ME=o("path",{fill:"currentColor",d:"M200 32h-36.26a47.92 47.92 0 0 0-71.48 0H56a16 16 0 0 0-16 16v168a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16Zm-72 0a32 32 0 0 1 32 32H96a32 32 0 0 1 32-32Zm72 184H56V48h26.75A47.93 47.93 0 0 0 80 64v8a8 8 0 0 0 8 8h80a8 8 0 0 0 8-8v-8a47.93 47.93 0 0 0-2.75-16H200Z"},null,-1),LE=[ME];function RE(e,t){return v(),T("svg",UE,LE)}const NE={name:"ph-clipboard",render:RE},qE={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},jE=o("path",{fill:"currentColor",d:"M173.66 98.34a8 8 0 0 1 0 11.32l-56 56a8 8 0 0 1-11.32 0l-24-24a8 8 0 0 1 11.32-11.32L112 148.69l50.34-50.35a8 8 0 0 1 11.32 0ZM232 128A104 104 0 1 1 128 24a104.11 104.11 0 0 1 104 104Zm-16 0a88 88 0 1 0-88 88a88.1 88.1 0 0 0 88-88Z"},null,-1),WE=[jE];function HE(e,t){return v(),T("svg",qE,WE)}const VE={name:"ph-check-circle",render:HE},zE=["title"],KE=ke({__name:"CodeBlockWrapper",props:{ranges:{default:()=>[]},startLine:{type:Number,default:1},lines:{type:Boolean,default:Fe.lineNumbers},at:{type:Number,default:void 0},maxHeight:{type:String,default:void 0}},setup(e){const t=e;L(z);const n=L(_o),s=L(rs),r=L(bo);function i(p=5){const f=[],h="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",y=h.length;for(let b=0;b<p;b++)f.push(h.charAt(Math.floor(Math.random()*y)));return f.join("")}const l=Y(),a=Bt();zn(()=>{const p=t.at==null?s==null?void 0:s.value.length:t.at,f=D(()=>r!=null&&r.value?t.ranges.length-1:Math.min(Math.max(0,((n==null?void 0:n.value)||0)-(p||0)),t.ranges.length-1)),h=D(()=>t.ranges[f.value]||"");if(t.ranges.length>=2&&!(r!=null&&r.value)){const y=i(),b=w1(t.ranges.length-1).map(k=>y+k);s!=null&&s.value&&(s.value.push(...b),fi(()=>b.forEach(k=>wl(s.value,k)),a))}Ss(()=>{if(!l.value)return;const b=l.value.querySelector(".shiki-dark")?Array.from(l.value.querySelectorAll(".shiki")):[l.value],k=t.startLine;for(const w of b){const A=Array.from(w.querySelectorAll(".line")),x=nh(A.length+k-1,h.value);if(A.forEach((S,C)=>{const F=x.includes(C+k);S.classList.toggle(ts,!0),S.classList.toggle("highlighted",F),S.classList.toggle("dishonored",!F)}),t.maxHeight){const S=Array.from(w.querySelectorAll(".line.highlighted"));S.reduce((F,U)=>U.offsetHeight+F,0)>l.value.offsetHeight?S[0].scrollIntoView({behavior:"smooth",block:"start"}):S.length>0&&S[Math.round((S.length-1)/2)].scrollIntoView({behavior:"smooth",block:"center"})}}})});const{copied:c,copy:u}=wv();function d(){var f,h;const p=(h=(f=l.value)==null?void 0:f.querySelector(".slidev-code"))==null?void 0:h.textContent;p&&u(p)}return(p,f)=>{const h=VE,y=NE;return v(),T("div",{ref_key:"el",ref:l,class:Re(["slidev-code-wrapper relative group",{"slidev-code-line-numbers":t.lines}]),style:Xe({"max-height":t.maxHeight,"overflow-y":t.maxHeight?"scroll":void 0,"--start":t.startLine})},[wt(p.$slots,"default"),B(Fe).codeCopy?(v(),T("button",{key:0,class:"slidev-code-copy absolute top-0 right-0 transition opacity-0 group-hover:opacity-20 hover:!opacity-100",title:B(c)?"Copied":"Copy",onClick:f[0]||(f[0]=b=>d())},[B(c)?(v(),j(h,{key:0,class:"p-2 w-8 h-8"})):(v(),j(y,{key:1,class:"p-2 w-8 h-8"}))],8,zE)):ye("v-if",!0)],6)}}}),Gs=K(KE,[["__file","/home/ben/Workspace/demystifying-unicode/node_modules/@slidev/client/builtin/CodeBlockWrapper.vue"]]),GE=o("h2",null,"String slices",-1),YE=o("br",null,null,-1),QE=o("blockquote",null,[o("p",null,"Primitive Type slice"),o("p",null,"A dynamically-sized view into a contiguous sequence, [T]. Contiguous here means that elements are laid out so that every element is the same distance from its neighbors.")],-1),ZE=o("br",null,null,-1),JE=o("p",null,"What is the output?",-1),XE=o("pre",{class:"shiki-container"},[o("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[o("code",null,[o("span",{class:"line"},[o("span",{style:{color:"#4D9375"}},"fn"),o("span",{style:{color:"#DBD7CA"}}," "),o("span",{style:{color:"#A1B567"}},"main"),o("span",{style:{color:"#858585"}},"()"),o("span",{style:{color:"#DBD7CA"}}," "),o("span",{style:{color:"#858585"}},"{")]),m(`
`),o("span",{class:"line"},[o("span",{style:{color:"#DBD7CA"}},"    "),o("span",{style:{color:"#CB7676"}},"let"),o("span",{style:{color:"#DBD7CA"}}," "),o("span",{style:{color:"#B8A965"}},"s"),o("span",{style:{color:"#DBD7CA"}}," "),o("span",{style:{color:"#CB7676"}},"="),o("span",{style:{color:"#DBD7CA"}}," "),o("span",{style:{color:"#C98A7D"}},'"İstanbul"'),o("span",{style:{color:"#858585"}},";")]),m(`
`),o("span",{class:"line"}),m(`
`),o("span",{class:"line"},[o("span",{style:{color:"#DBD7CA"}},"    "),o("span",{style:{color:"#A1B567"}},"println!"),o("span",{style:{color:"#858585"}},"("),o("span",{style:{color:"#C98A7D"}},'"'),o("span",{style:{color:"#858585"}},"{}"),o("span",{style:{color:"#C98A7D"}},'"'),o("span",{style:{color:"#858585"}},","),o("span",{style:{color:"#DBD7CA"}}," "),o("span",{style:{color:"#B8A965"}},"s"),o("span",{style:{color:"#CB7676"}},"."),o("span",{style:{color:"#A1B567"}},"len"),o("span",{style:{color:"#858585"}},"());")]),m(`
`),o("span",{class:"line"},[o("span",{style:{color:"#858585"}},"}")])])]),o("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[o("code",null,[o("span",{class:"line"},[o("span",{style:{color:"#1C6B48"}},"fn"),o("span",{style:{color:"#393A34"}}," "),o("span",{style:{color:"#6C7834"}},"main"),o("span",{style:{color:"#8E8F8B"}},"()"),o("span",{style:{color:"#393A34"}}," "),o("span",{style:{color:"#8E8F8B"}},"{")]),m(`
`),o("span",{class:"line"},[o("span",{style:{color:"#393A34"}},"    "),o("span",{style:{color:"#AB5959"}},"let"),o("span",{style:{color:"#393A34"}}," "),o("span",{style:{color:"#8C862B"}},"s"),o("span",{style:{color:"#393A34"}}," "),o("span",{style:{color:"#AB5959"}},"="),o("span",{style:{color:"#393A34"}}," "),o("span",{style:{color:"#B56959"}},'"İstanbul"'),o("span",{style:{color:"#8E8F8B"}},";")]),m(`
`),o("span",{class:"line"}),m(`
`),o("span",{class:"line"},[o("span",{style:{color:"#393A34"}},"    "),o("span",{style:{color:"#6C7834"}},"println!"),o("span",{style:{color:"#8E8F8B"}},"("),o("span",{style:{color:"#B56959"}},'"'),o("span",{style:{color:"#8E8F8B"}},"{}"),o("span",{style:{color:"#B56959"}},'"'),o("span",{style:{color:"#8E8F8B"}},","),o("span",{style:{color:"#393A34"}}," "),o("span",{style:{color:"#8C862B"}},"s"),o("span",{style:{color:"#AB5959"}},"."),o("span",{style:{color:"#6C7834"}},"len"),o("span",{style:{color:"#8E8F8B"}},"());")]),m(`
`),o("span",{class:"line"},[o("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),e6=o("pre",{class:"shiki-container"},[o("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[o("code",null,[o("span",{class:"line"},[o("span",{style:{color:"#758575"}},"    //        ^^ 9")])])]),o("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[o("code",null,[o("span",{class:"line"},[o("span",{style:{color:"#A0ADA0"}},"    //        ^^ 9")])])])],-1),t6=o("pre",{class:"shiki-container"},[o("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[o("code",null,[o("span",{class:"line"},[o("span",{style:{color:"#A1B567"}},"println!"),o("span",{style:{color:"#858585"}},"("),o("span",{style:{color:"#C98A7D"}},'"'),o("span",{style:{color:"#858585"}},"{"),o("span",{style:{color:"#C98A7D"}},":x?"),o("span",{style:{color:"#858585"}},"}"),o("span",{style:{color:"#C98A7D"}},'"'),o("span",{style:{color:"#858585"}},","),o("span",{style:{color:"#DBD7CA"}}," "),o("span",{style:{color:"#C98A7D"}},'"İstanbul"'),o("span",{style:{color:"#CB7676"}},"."),o("span",{style:{color:"#A1B567"}},"as_bytes"),o("span",{style:{color:"#858585"}},"());"),o("span",{style:{color:"#758575"}},"   // [c4, b0, 73, 74, 61, 6e, 62, 75, 6c]")])])]),o("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[o("code",null,[o("span",{class:"line"},[o("span",{style:{color:"#6C7834"}},"println!"),o("span",{style:{color:"#8E8F8B"}},"("),o("span",{style:{color:"#B56959"}},'"'),o("span",{style:{color:"#8E8F8B"}},"{"),o("span",{style:{color:"#B56959"}},":x?"),o("span",{style:{color:"#8E8F8B"}},"}"),o("span",{style:{color:"#B56959"}},'"'),o("span",{style:{color:"#8E8F8B"}},","),o("span",{style:{color:"#393A34"}}," "),o("span",{style:{color:"#B56959"}},'"İstanbul"'),o("span",{style:{color:"#AB5959"}},"."),o("span",{style:{color:"#6C7834"}},"as_bytes"),o("span",{style:{color:"#8E8F8B"}},"());"),o("span",{style:{color:"#A0ADA0"}},"   // [c4, b0, 73, 74, 61, 6e, 62, 75, 6c]")])])])],-1),n6=o("footer",null,[o("p",null,[m("Ref: "),o("a",{href:"https://doc.rust-lang.org/std/primitive.slice.html",target:"_blank",rel:"noopener"},"https://doc.rust-lang.org/std/primitive.slice.html")])],-1),s6={__name:"34",setup(e){const t={hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"};return L(z),(n,s)=>{const r=Gs,i=Qt,l=Yt;return v(),j(De,le(re(t)),{default:M(()=>[GE,YE,QE,ZE,H(i,null,{default:M(()=>[JE,H(r,mt({},{ranges:[""]}),{default:M(()=>[XE]),_:1},16)]),_:1}),H(l,null,{default:M(()=>[H(r,mt({},{ranges:[""]}),{default:M(()=>[e6]),_:1},16),H(r,mt({},{ranges:[""]}),{default:M(()=>[t6]),_:1},16)]),_:1}),n6]),_:1},16)}}},o6=K(s6,[["__file","/@slidev/slides/34.md"]]),r6=o("h2",null,[m("A String slice ("),o("code",null,"str"),m(") is just a slice of bytes ("),o("code",null,"[u8]"),m("), "),o("strong",null,"which contents are always valid UTF-8"),m(".")],-1),i6={__name:"35",setup(e){const t={layout:"center",hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"};return L(z),(n,s)=>(v(),j(tt,le(re(t)),{default:M(()=>[r6]),_:1},16))}},l6=K(i6,[["__file","/@slidev/slides/35.md"]]),a6=o("h2",null,"Lets make some strings",-1),c6={__name:"36",setup(e){const t={layout:"center",hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"};return L(z),(n,s)=>(v(),j(tt,le(re(t)),{default:M(()=>[a6]),_:1},16))}},u6=K(c6,[["__file","/@slidev/slides/36.md"]]),d6=o("h2",null,"Creating strings",-1),p6=o("blockquote",null,[o("p",null,[m("String slices are "),o("strong",null,"always"),m(" valid UTF-8.")])],-1),f6=o("p",null,[m("∴ The compiler won’t compile your rust if you try to do non UTF-8 things in "),o("code",null,"&str")],-1),h6=o("pre",{class:"shiki-container"},[o("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[o("code",null,[o("span",{class:"line"},[o("span",{style:{color:"#4D9375"}},"fn"),o("span",{style:{color:"#DBD7CA"}}," "),o("span",{style:{color:"#A1B567"}},"main"),o("span",{style:{color:"#858585"}},"()"),o("span",{style:{color:"#DBD7CA"}}," "),o("span",{style:{color:"#858585"}},"{")]),m(`
`),o("span",{class:"line"},[o("span",{style:{color:"#758575"}},"    // ASCII chars are always safe!")]),m(`
`),o("span",{class:"line"},[o("span",{style:{color:"#DBD7CA"}},"    "),o("span",{style:{color:"#CB7676"}},"let"),o("span",{style:{color:"#DBD7CA"}}," "),o("span",{style:{color:"#B8A965"}},"s"),o("span",{style:{color:"#DBD7CA"}}," "),o("span",{style:{color:"#CB7676"}},"="),o("span",{style:{color:"#DBD7CA"}}," "),o("span",{style:{color:"#C98A7D"}},'"Hello World"'),o("span",{style:{color:"#858585"}},";"),o("span",{style:{color:"#758575"}},"     // Good")]),m(`
`),o("span",{class:"line"},[o("span",{style:{color:"#DBD7CA"}},"    "),o("span",{style:{color:"#CB7676"}},"let"),o("span",{style:{color:"#DBD7CA"}}," "),o("span",{style:{color:"#B8A965"}},"s"),o("span",{style:{color:"#DBD7CA"}}," "),o("span",{style:{color:"#CB7676"}},"="),o("span",{style:{color:"#DBD7CA"}}," "),o("span",{style:{color:"#C98A7D"}},'"Hello'),o("span",{style:{color:"#D4976C"}},"\\x20"),o("span",{style:{color:"#C98A7D"}},'World"'),o("span",{style:{color:"#858585"}},";"),o("span",{style:{color:"#758575"}},"  // Also good")]),m(`
`),o("span",{class:"line"},[o("span",{style:{color:"#DBD7CA"}},"    "),o("span",{style:{color:"#CB7676"}},"let"),o("span",{style:{color:"#DBD7CA"}}," "),o("span",{style:{color:"#B8A965"}},"s"),o("span",{style:{color:"#DBD7CA"}}," "),o("span",{style:{color:"#CB7676"}},"="),o("span",{style:{color:"#DBD7CA"}}," "),o("span",{style:{color:"#C98A7D"}},'"Hello'),o("span",{style:{color:"#D4976C"}},"\\x7F"),o("span",{style:{color:"#C98A7D"}},'World"'),o("span",{style:{color:"#858585"}},";"),o("span",{style:{color:"#758575"}},"  // Also good (\\x7F is the control character `DEL`)")]),m(`
`),o("span",{class:"line"},[o("span",{style:{color:"#DBD7CA"}},"    "),o("span",{style:{color:"#CB7676"}},"let"),o("span",{style:{color:"#DBD7CA"}}," "),o("span",{style:{color:"#B8A965"}},"s"),o("span",{style:{color:"#DBD7CA"}}," "),o("span",{style:{color:"#CB7676"}},"="),o("span",{style:{color:"#DBD7CA"}}," "),o("span",{style:{color:"#C98A7D"}},'"Hello'),o("span",{style:{color:"#D4976C"}},"\\x"),o("span",{style:{color:"#C98A7D"}},'80World"'),o("span",{style:{color:"#858585"}},";"),o("span",{style:{color:"#758575"}},"  // Fails")]),m(`
`),o("span",{class:"line"},[o("span",{style:{color:"#758575"}},"    //            ^^^^ must be a character in the range [\\x00-\\x7f]")]),m(`
`),o("span",{class:"line"},[o("span",{style:{color:"#858585"}},"}")])])]),o("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[o("code",null,[o("span",{class:"line"},[o("span",{style:{color:"#1C6B48"}},"fn"),o("span",{style:{color:"#393A34"}}," "),o("span",{style:{color:"#6C7834"}},"main"),o("span",{style:{color:"#8E8F8B"}},"()"),o("span",{style:{color:"#393A34"}}," "),o("span",{style:{color:"#8E8F8B"}},"{")]),m(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A0ADA0"}},"    // ASCII chars are always safe!")]),m(`
`),o("span",{class:"line"},[o("span",{style:{color:"#393A34"}},"    "),o("span",{style:{color:"#AB5959"}},"let"),o("span",{style:{color:"#393A34"}}," "),o("span",{style:{color:"#8C862B"}},"s"),o("span",{style:{color:"#393A34"}}," "),o("span",{style:{color:"#AB5959"}},"="),o("span",{style:{color:"#393A34"}}," "),o("span",{style:{color:"#B56959"}},'"Hello World"'),o("span",{style:{color:"#8E8F8B"}},";"),o("span",{style:{color:"#A0ADA0"}},"     // Good")]),m(`
`),o("span",{class:"line"},[o("span",{style:{color:"#393A34"}},"    "),o("span",{style:{color:"#AB5959"}},"let"),o("span",{style:{color:"#393A34"}}," "),o("span",{style:{color:"#8C862B"}},"s"),o("span",{style:{color:"#393A34"}}," "),o("span",{style:{color:"#AB5959"}},"="),o("span",{style:{color:"#393A34"}}," "),o("span",{style:{color:"#B56959"}},'"Hello'),o("span",{style:{color:"#A65E2B"}},"\\x20"),o("span",{style:{color:"#B56959"}},'World"'),o("span",{style:{color:"#8E8F8B"}},";"),o("span",{style:{color:"#A0ADA0"}},"  // Also good")]),m(`
`),o("span",{class:"line"},[o("span",{style:{color:"#393A34"}},"    "),o("span",{style:{color:"#AB5959"}},"let"),o("span",{style:{color:"#393A34"}}," "),o("span",{style:{color:"#8C862B"}},"s"),o("span",{style:{color:"#393A34"}}," "),o("span",{style:{color:"#AB5959"}},"="),o("span",{style:{color:"#393A34"}}," "),o("span",{style:{color:"#B56959"}},'"Hello'),o("span",{style:{color:"#A65E2B"}},"\\x7F"),o("span",{style:{color:"#B56959"}},'World"'),o("span",{style:{color:"#8E8F8B"}},";"),o("span",{style:{color:"#A0ADA0"}},"  // Also good (\\x7F is the control character `DEL`)")]),m(`
`),o("span",{class:"line"},[o("span",{style:{color:"#393A34"}},"    "),o("span",{style:{color:"#AB5959"}},"let"),o("span",{style:{color:"#393A34"}}," "),o("span",{style:{color:"#8C862B"}},"s"),o("span",{style:{color:"#393A34"}}," "),o("span",{style:{color:"#AB5959"}},"="),o("span",{style:{color:"#393A34"}}," "),o("span",{style:{color:"#B56959"}},'"Hello'),o("span",{style:{color:"#A65E2B"}},"\\x"),o("span",{style:{color:"#B56959"}},'80World"'),o("span",{style:{color:"#8E8F8B"}},";"),o("span",{style:{color:"#A0ADA0"}},"  // Fails")]),m(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A0ADA0"}},"    //            ^^^^ must be a character in the range [\\x00-\\x7f]")]),m(`
`),o("span",{class:"line"},[o("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),m6=o("p",null,"… and for completeness…",-1),y6=o("pre",{class:"shiki-container"},[o("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[o("code",null,[o("span",{class:"line"},[o("span",{style:{color:"#4D9375"}},"fn"),o("span",{style:{color:"#DBD7CA"}}," "),o("span",{style:{color:"#A1B567"}},"main"),o("span",{style:{color:"#858585"}},"()"),o("span",{style:{color:"#DBD7CA"}}," "),o("span",{style:{color:"#858585"}},"{")]),m(`
`),o("span",{class:"line"},[o("span",{style:{color:"#DBD7CA"}},"    "),o("span",{style:{color:"#CB7676"}},"let"),o("span",{style:{color:"#DBD7CA"}}," "),o("span",{style:{color:"#B8A965"}},"s"),o("span",{style:{color:"#DBD7CA"}}," "),o("span",{style:{color:"#CB7676"}},"="),o("span",{style:{color:"#DBD7CA"}}," "),o("span",{style:{color:"#C98A7D"}},'"Hello'),o("span",{style:{color:"#D4976C"}},"\\u{0020}"),o("span",{style:{color:"#C98A7D"}},'World"'),o("span",{style:{color:"#858585"}},";"),o("span",{style:{color:"#758575"}},"   // Good")]),m(`
`),o("span",{class:"line"},[o("span",{style:{color:"#DBD7CA"}},"    "),o("span",{style:{color:"#CB7676"}},"let"),o("span",{style:{color:"#DBD7CA"}}," "),o("span",{style:{color:"#B8A965"}},"s"),o("span",{style:{color:"#DBD7CA"}}," "),o("span",{style:{color:"#CB7676"}},"="),o("span",{style:{color:"#DBD7CA"}}," "),o("span",{style:{color:"#C98A7D"}},'"Hello'),o("span",{style:{color:"#D4976C"}},"\\u{1F63B}"),o("span",{style:{color:"#C98A7D"}},'World"'),o("span",{style:{color:"#858585"}},";"),o("span",{style:{color:"#758575"}},"   // Good")]),m(`
`),o("span",{class:"line"},[o("span",{style:{color:"#DBD7CA"}},"    "),o("span",{style:{color:"#CB7676"}},"let"),o("span",{style:{color:"#DBD7CA"}}," "),o("span",{style:{color:"#B8A965"}},"s"),o("span",{style:{color:"#DBD7CA"}}," "),o("span",{style:{color:"#CB7676"}},"="),o("span",{style:{color:"#DBD7CA"}}," "),o("span",{style:{color:"#C98A7D"}},'"Hello'),o("span",{style:{color:"#D4976C"}},"\\u{110000}"),o("span",{style:{color:"#C98A7D"}},'World"'),o("span",{style:{color:"#858585"}},";"),o("span",{style:{color:"#758575"}},"  // Fails")]),m(`
`),o("span",{class:"line"},[o("span",{style:{color:"#758575"}},"    //            ^^^^^^^^^^ invalid escape")]),m(`
`),o("span",{class:"line"},[o("span",{style:{color:"#858585"}},"}")])])]),o("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[o("code",null,[o("span",{class:"line"},[o("span",{style:{color:"#1C6B48"}},"fn"),o("span",{style:{color:"#393A34"}}," "),o("span",{style:{color:"#6C7834"}},"main"),o("span",{style:{color:"#8E8F8B"}},"()"),o("span",{style:{color:"#393A34"}}," "),o("span",{style:{color:"#8E8F8B"}},"{")]),m(`
`),o("span",{class:"line"},[o("span",{style:{color:"#393A34"}},"    "),o("span",{style:{color:"#AB5959"}},"let"),o("span",{style:{color:"#393A34"}}," "),o("span",{style:{color:"#8C862B"}},"s"),o("span",{style:{color:"#393A34"}}," "),o("span",{style:{color:"#AB5959"}},"="),o("span",{style:{color:"#393A34"}}," "),o("span",{style:{color:"#B56959"}},'"Hello'),o("span",{style:{color:"#A65E2B"}},"\\u{0020}"),o("span",{style:{color:"#B56959"}},'World"'),o("span",{style:{color:"#8E8F8B"}},";"),o("span",{style:{color:"#A0ADA0"}},"   // Good")]),m(`
`),o("span",{class:"line"},[o("span",{style:{color:"#393A34"}},"    "),o("span",{style:{color:"#AB5959"}},"let"),o("span",{style:{color:"#393A34"}}," "),o("span",{style:{color:"#8C862B"}},"s"),o("span",{style:{color:"#393A34"}}," "),o("span",{style:{color:"#AB5959"}},"="),o("span",{style:{color:"#393A34"}}," "),o("span",{style:{color:"#B56959"}},'"Hello'),o("span",{style:{color:"#A65E2B"}},"\\u{1F63B}"),o("span",{style:{color:"#B56959"}},'World"'),o("span",{style:{color:"#8E8F8B"}},";"),o("span",{style:{color:"#A0ADA0"}},"   // Good")]),m(`
`),o("span",{class:"line"},[o("span",{style:{color:"#393A34"}},"    "),o("span",{style:{color:"#AB5959"}},"let"),o("span",{style:{color:"#393A34"}}," "),o("span",{style:{color:"#8C862B"}},"s"),o("span",{style:{color:"#393A34"}}," "),o("span",{style:{color:"#AB5959"}},"="),o("span",{style:{color:"#393A34"}}," "),o("span",{style:{color:"#B56959"}},'"Hello'),o("span",{style:{color:"#A65E2B"}},"\\u{110000}"),o("span",{style:{color:"#B56959"}},'World"'),o("span",{style:{color:"#8E8F8B"}},";"),o("span",{style:{color:"#A0ADA0"}},"  // Fails")]),m(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A0ADA0"}},"    //            ^^^^^^^^^^ invalid escape")]),m(`
`),o("span",{class:"line"},[o("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),g6={__name:"37",setup(e){const t={hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"};return L(z),(n,s)=>{const r=Gs,i=Qt;return v(),j(De,le(re(t)),{default:M(()=>[d6,p6,f6,H(r,mt({},{ranges:[""]}),{default:M(()=>[h6]),_:1},16),H(i,null,{default:M(()=>[m6,H(r,mt({},{ranges:[""]}),{default:M(()=>[y6]),_:1},16)]),_:1})]),_:1},16)}}},v6=K(g6,[["__file","/@slidev/slides/37.md"]]),_6=o("h2",null,"Creating Strings",-1),b6=o("p",null,"Remember, all strings are just a sequence of bytes. As such, rust will also let us create strings from exactly that, vectors of bytes.",-1),x6=o("pre",{class:"shiki-container"},[o("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[o("code",null,[o("span",{class:"line"},[o("span",{style:{color:"#4D9375"}},"fn"),o("span",{style:{color:"#DBD7CA"}}," "),o("span",{style:{color:"#A1B567"}},"main"),o("span",{style:{color:"#858585"}},"()"),o("span",{style:{color:"#DBD7CA"}}," "),o("span",{style:{color:"#858585"}},"{")]),m(`
`),o("span",{class:"line"},[o("span",{style:{color:"#DBD7CA"}},"    "),o("span",{style:{color:"#CB7676"}},"let"),o("span",{style:{color:"#DBD7CA"}}," "),o("span",{style:{color:"#B8A965"}},"cat"),o("span",{style:{color:"#CB7676"}},":"),o("span",{style:{color:"#DBD7CA"}}," "),o("span",{style:{color:"#858585"}},"["),o("span",{style:{color:"#A1B567"}},"u8"),o("span",{style:{color:"#858585"}},";"),o("span",{style:{color:"#DBD7CA"}}," "),o("span",{style:{color:"#6394BF"}},"4"),o("span",{style:{color:"#858585"}},"]"),o("span",{style:{color:"#DBD7CA"}}," "),o("span",{style:{color:"#CB7676"}},"="),o("span",{style:{color:"#DBD7CA"}}," "),o("span",{style:{color:"#858585"}},"["),o("span",{style:{color:"#6394BF"}},"0xF0"),o("span",{style:{color:"#858585"}},","),o("span",{style:{color:"#DBD7CA"}}," "),o("span",{style:{color:"#6394BF"}},"0x9F"),o("span",{style:{color:"#858585"}},","),o("span",{style:{color:"#DBD7CA"}}," "),o("span",{style:{color:"#6394BF"}},"0x98"),o("span",{style:{color:"#858585"}},","),o("span",{style:{color:"#DBD7CA"}}," "),o("span",{style:{color:"#6394BF"}},"0xBB"),o("span",{style:{color:"#858585"}},"];")]),m(`
`),o("span",{class:"line"}),m(`
`),o("span",{class:"line"},[o("span",{style:{color:"#DBD7CA"}},"    "),o("span",{style:{color:"#CB7676"}},"let"),o("span",{style:{color:"#DBD7CA"}}," "),o("span",{style:{color:"#B8A965"}},"s"),o("span",{style:{color:"#DBD7CA"}}," "),o("span",{style:{color:"#CB7676"}},"="),o("span",{style:{color:"#DBD7CA"}}," "),o("span",{style:{color:"#A1B567"}},"std"),o("span",{style:{color:"#CB7676"}},"::"),o("span",{style:{color:"#A1B567"}},"str"),o("span",{style:{color:"#CB7676"}},"::"),o("span",{style:{color:"#A1B567"}},"from_utf8"),o("span",{style:{color:"#858585"}},"("),o("span",{style:{color:"#CB7676"}},"&"),o("span",{style:{color:"#B8A965"}},"cat"),o("span",{style:{color:"#858585"}},")"),o("span",{style:{color:"#CB7676"}},"."),o("span",{style:{color:"#A1B567"}},"unwrap"),o("span",{style:{color:"#858585"}},"();")]),m(`
`),o("span",{class:"line"},[o("span",{style:{color:"#758575"}},"    // let s = String::from_utf8(cat.to_vec()).unwrap();")]),m(`
`),o("span",{class:"line"}),m(`
`),o("span",{class:"line"},[o("span",{style:{color:"#DBD7CA"}},"    "),o("span",{style:{color:"#A1B567"}},"println!"),o("span",{style:{color:"#858585"}},"("),o("span",{style:{color:"#C98A7D"}},'"'),o("span",{style:{color:"#858585"}},"{"),o("span",{style:{color:"#C98A7D"}},"s"),o("span",{style:{color:"#858585"}},"}"),o("span",{style:{color:"#C98A7D"}},'"'),o("span",{style:{color:"#858585"}},");")]),m(`
`),o("span",{class:"line"},[o("span",{style:{color:"#758575"}},"    //        ^^^ 😻 ")]),m(`
`),o("span",{class:"line"},[o("span",{style:{color:"#858585"}},"}")])])]),o("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[o("code",null,[o("span",{class:"line"},[o("span",{style:{color:"#1C6B48"}},"fn"),o("span",{style:{color:"#393A34"}}," "),o("span",{style:{color:"#6C7834"}},"main"),o("span",{style:{color:"#8E8F8B"}},"()"),o("span",{style:{color:"#393A34"}}," "),o("span",{style:{color:"#8E8F8B"}},"{")]),m(`
`),o("span",{class:"line"},[o("span",{style:{color:"#393A34"}},"    "),o("span",{style:{color:"#AB5959"}},"let"),o("span",{style:{color:"#393A34"}}," "),o("span",{style:{color:"#8C862B"}},"cat"),o("span",{style:{color:"#AB5959"}},":"),o("span",{style:{color:"#393A34"}}," "),o("span",{style:{color:"#8E8F8B"}},"["),o("span",{style:{color:"#6C7834"}},"u8"),o("span",{style:{color:"#8E8F8B"}},";"),o("span",{style:{color:"#393A34"}}," "),o("span",{style:{color:"#296AA3"}},"4"),o("span",{style:{color:"#8E8F8B"}},"]"),o("span",{style:{color:"#393A34"}}," "),o("span",{style:{color:"#AB5959"}},"="),o("span",{style:{color:"#393A34"}}," "),o("span",{style:{color:"#8E8F8B"}},"["),o("span",{style:{color:"#296AA3"}},"0xF0"),o("span",{style:{color:"#8E8F8B"}},","),o("span",{style:{color:"#393A34"}}," "),o("span",{style:{color:"#296AA3"}},"0x9F"),o("span",{style:{color:"#8E8F8B"}},","),o("span",{style:{color:"#393A34"}}," "),o("span",{style:{color:"#296AA3"}},"0x98"),o("span",{style:{color:"#8E8F8B"}},","),o("span",{style:{color:"#393A34"}}," "),o("span",{style:{color:"#296AA3"}},"0xBB"),o("span",{style:{color:"#8E8F8B"}},"];")]),m(`
`),o("span",{class:"line"}),m(`
`),o("span",{class:"line"},[o("span",{style:{color:"#393A34"}},"    "),o("span",{style:{color:"#AB5959"}},"let"),o("span",{style:{color:"#393A34"}}," "),o("span",{style:{color:"#8C862B"}},"s"),o("span",{style:{color:"#393A34"}}," "),o("span",{style:{color:"#AB5959"}},"="),o("span",{style:{color:"#393A34"}}," "),o("span",{style:{color:"#6C7834"}},"std"),o("span",{style:{color:"#AB5959"}},"::"),o("span",{style:{color:"#6C7834"}},"str"),o("span",{style:{color:"#AB5959"}},"::"),o("span",{style:{color:"#6C7834"}},"from_utf8"),o("span",{style:{color:"#8E8F8B"}},"("),o("span",{style:{color:"#AB5959"}},"&"),o("span",{style:{color:"#8C862B"}},"cat"),o("span",{style:{color:"#8E8F8B"}},")"),o("span",{style:{color:"#AB5959"}},"."),o("span",{style:{color:"#6C7834"}},"unwrap"),o("span",{style:{color:"#8E8F8B"}},"();")]),m(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A0ADA0"}},"    // let s = String::from_utf8(cat.to_vec()).unwrap();")]),m(`
`),o("span",{class:"line"}),m(`
`),o("span",{class:"line"},[o("span",{style:{color:"#393A34"}},"    "),o("span",{style:{color:"#6C7834"}},"println!"),o("span",{style:{color:"#8E8F8B"}},"("),o("span",{style:{color:"#B56959"}},'"'),o("span",{style:{color:"#8E8F8B"}},"{"),o("span",{style:{color:"#B56959"}},"s"),o("span",{style:{color:"#8E8F8B"}},"}"),o("span",{style:{color:"#B56959"}},'"'),o("span",{style:{color:"#8E8F8B"}},");")]),m(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A0ADA0"}},"    //        ^^^ 😻 ")]),m(`
`),o("span",{class:"line"},[o("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),w6=o("p",null,"… and we can create byte sequences from strings even! (thanks compiler!)",-1),k6=o("pre",{class:"shiki-container"},[o("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[o("code",null,[o("span",{class:"line"},[o("span",{style:{color:"#4D9375"}},"fn"),o("span",{style:{color:"#DBD7CA"}}," "),o("span",{style:{color:"#A1B567"}},"main"),o("span",{style:{color:"#858585"}},"()"),o("span",{style:{color:"#DBD7CA"}}," "),o("span",{style:{color:"#858585"}},"{")]),m(`
`),o("span",{class:"line"},[o("span",{style:{color:"#DBD7CA"}},"    "),o("span",{style:{color:"#CB7676"}},"let"),o("span",{style:{color:"#DBD7CA"}}," "),o("span",{style:{color:"#B8A965"}},"s"),o("span",{style:{color:"#DBD7CA"}}," "),o("span",{style:{color:"#CB7676"}},"="),o("span",{style:{color:"#DBD7CA"}}," "),o("span",{style:{color:"#C98A7D"}},'b"Hello World!"'),o("span",{style:{color:"#858585"}},";")]),m(`
`),o("span",{class:"line"}),m(`
`),o("span",{class:"line"},[o("span",{style:{color:"#DBD7CA"}},"    "),o("span",{style:{color:"#A1B567"}},"assert_eq!"),o("span",{style:{color:"#858585"}},"("),o("span",{style:{color:"#B8A965"}},"s"),o("span",{style:{color:"#858585"}},","),o("span",{style:{color:"#DBD7CA"}}," "),o("span",{style:{color:"#CB7676"}},"&"),o("span",{style:{color:"#858585"}},"["),o("span",{style:{color:"#6394BF"}},"72"),o("span",{style:{color:"#858585"}},","),o("span",{style:{color:"#DBD7CA"}}," "),o("span",{style:{color:"#6394BF"}},"101"),o("span",{style:{color:"#858585"}},","),o("span",{style:{color:"#DBD7CA"}}," "),o("span",{style:{color:"#6394BF"}},"108"),o("span",{style:{color:"#858585"}},","),o("span",{style:{color:"#DBD7CA"}}," "),o("span",{style:{color:"#6394BF"}},"108"),o("span",{style:{color:"#858585"}},","),o("span",{style:{color:"#DBD7CA"}}," "),o("span",{style:{color:"#6394BF"}},"111"),o("span",{style:{color:"#858585"}},","),o("span",{style:{color:"#DBD7CA"}}," "),o("span",{style:{color:"#6394BF"}},"32"),o("span",{style:{color:"#858585"}},","),o("span",{style:{color:"#DBD7CA"}}," "),o("span",{style:{color:"#6394BF"}},"87"),o("span",{style:{color:"#858585"}},","),o("span",{style:{color:"#DBD7CA"}}," "),o("span",{style:{color:"#6394BF"}},"111"),o("span",{style:{color:"#858585"}},","),o("span",{style:{color:"#DBD7CA"}}," "),o("span",{style:{color:"#6394BF"}},"114"),o("span",{style:{color:"#858585"}},","),o("span",{style:{color:"#DBD7CA"}}," "),o("span",{style:{color:"#6394BF"}},"108"),o("span",{style:{color:"#858585"}},","),o("span",{style:{color:"#DBD7CA"}}," "),o("span",{style:{color:"#6394BF"}},"100"),o("span",{style:{color:"#858585"}},","),o("span",{style:{color:"#DBD7CA"}}," "),o("span",{style:{color:"#6394BF"}},"33"),o("span",{style:{color:"#858585"}},"]);"),o("span",{style:{color:"#758575"}},"  // passes")]),m(`
`),o("span",{class:"line"},[o("span",{style:{color:"#858585"}},"}")])])]),o("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[o("code",null,[o("span",{class:"line"},[o("span",{style:{color:"#1C6B48"}},"fn"),o("span",{style:{color:"#393A34"}}," "),o("span",{style:{color:"#6C7834"}},"main"),o("span",{style:{color:"#8E8F8B"}},"()"),o("span",{style:{color:"#393A34"}}," "),o("span",{style:{color:"#8E8F8B"}},"{")]),m(`
`),o("span",{class:"line"},[o("span",{style:{color:"#393A34"}},"    "),o("span",{style:{color:"#AB5959"}},"let"),o("span",{style:{color:"#393A34"}}," "),o("span",{style:{color:"#8C862B"}},"s"),o("span",{style:{color:"#393A34"}}," "),o("span",{style:{color:"#AB5959"}},"="),o("span",{style:{color:"#393A34"}}," "),o("span",{style:{color:"#B56959"}},'b"Hello World!"'),o("span",{style:{color:"#8E8F8B"}},";")]),m(`
`),o("span",{class:"line"}),m(`
`),o("span",{class:"line"},[o("span",{style:{color:"#393A34"}},"    "),o("span",{style:{color:"#6C7834"}},"assert_eq!"),o("span",{style:{color:"#8E8F8B"}},"("),o("span",{style:{color:"#8C862B"}},"s"),o("span",{style:{color:"#8E8F8B"}},","),o("span",{style:{color:"#393A34"}}," "),o("span",{style:{color:"#AB5959"}},"&"),o("span",{style:{color:"#8E8F8B"}},"["),o("span",{style:{color:"#296AA3"}},"72"),o("span",{style:{color:"#8E8F8B"}},","),o("span",{style:{color:"#393A34"}}," "),o("span",{style:{color:"#296AA3"}},"101"),o("span",{style:{color:"#8E8F8B"}},","),o("span",{style:{color:"#393A34"}}," "),o("span",{style:{color:"#296AA3"}},"108"),o("span",{style:{color:"#8E8F8B"}},","),o("span",{style:{color:"#393A34"}}," "),o("span",{style:{color:"#296AA3"}},"108"),o("span",{style:{color:"#8E8F8B"}},","),o("span",{style:{color:"#393A34"}}," "),o("span",{style:{color:"#296AA3"}},"111"),o("span",{style:{color:"#8E8F8B"}},","),o("span",{style:{color:"#393A34"}}," "),o("span",{style:{color:"#296AA3"}},"32"),o("span",{style:{color:"#8E8F8B"}},","),o("span",{style:{color:"#393A34"}}," "),o("span",{style:{color:"#296AA3"}},"87"),o("span",{style:{color:"#8E8F8B"}},","),o("span",{style:{color:"#393A34"}}," "),o("span",{style:{color:"#296AA3"}},"111"),o("span",{style:{color:"#8E8F8B"}},","),o("span",{style:{color:"#393A34"}}," "),o("span",{style:{color:"#296AA3"}},"114"),o("span",{style:{color:"#8E8F8B"}},","),o("span",{style:{color:"#393A34"}}," "),o("span",{style:{color:"#296AA3"}},"108"),o("span",{style:{color:"#8E8F8B"}},","),o("span",{style:{color:"#393A34"}}," "),o("span",{style:{color:"#296AA3"}},"100"),o("span",{style:{color:"#8E8F8B"}},","),o("span",{style:{color:"#393A34"}}," "),o("span",{style:{color:"#296AA3"}},"33"),o("span",{style:{color:"#8E8F8B"}},"]);"),o("span",{style:{color:"#A0ADA0"}},"  // passes")]),m(`
`),o("span",{class:"line"},[o("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),A6={__name:"38",setup(e){const t={hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"};return L(z),(n,s)=>{const r=Gs,i=Qt;return v(),j(De,le(re(t)),{default:M(()=>[_6,b6,H(r,mt({},{ranges:[""]}),{default:M(()=>[x6]),_:1},16),H(i,null,{default:M(()=>[w6,H(r,mt({},{ranges:[""]}),{default:M(()=>[k6]),_:1},16)]),_:1})]),_:1},16)}}},S6=K(A6,[["__file","/@slidev/slides/38.md"]]),C6=o("h2",null,"Creating strings",-1),E6=o("p",null,[m("Even "),o("code",null,"char"),m(" primitives!")],-1),T6=o("pre",{class:"shiki-container"},[o("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[o("code",null,[o("span",{class:"line"},[o("span",{style:{color:"#4D9375"}},"fn"),o("span",{style:{color:"#DBD7CA"}}," "),o("span",{style:{color:"#A1B567"}},"main"),o("span",{style:{color:"#858585"}},"()"),o("span",{style:{color:"#DBD7CA"}}," "),o("span",{style:{color:"#858585"}},"{")]),m(`
`),o("span",{class:"line"},[o("span",{style:{color:"#DBD7CA"}},"    "),o("span",{style:{color:"#CB7676"}},"let"),o("span",{style:{color:"#DBD7CA"}}," "),o("span",{style:{color:"#B8A965"}},"s"),o("span",{style:{color:"#CB7676"}},":"),o("span",{style:{color:"#DBD7CA"}}," "),o("span",{style:{color:"#858585"}},"["),o("span",{style:{color:"#A1B567"}},"char"),o("span",{style:{color:"#858585"}},";"),o("span",{style:{color:"#DBD7CA"}}," "),o("span",{style:{color:"#6394BF"}},"4"),o("span",{style:{color:"#858585"}},"]"),o("span",{style:{color:"#DBD7CA"}}," "),o("span",{style:{color:"#CB7676"}},"="),o("span",{style:{color:"#DBD7CA"}}," "),o("span",{style:{color:"#858585"}},"[")]),m(`
`),o("span",{class:"line"},[o("span",{style:{color:"#DBD7CA"}},"        "),o("span",{style:{color:"#858585"}},"'"),o("span",{style:{color:"#D4976C"}},"\\u{0048}"),o("span",{style:{color:"#858585"}},"'"),o("span",{style:{color:"#858585"}},",")]),m(`
`),o("span",{class:"line"},[o("span",{style:{color:"#DBD7CA"}},"        "),o("span",{style:{color:"#A1B567"}},"char"),o("span",{style:{color:"#CB7676"}},"::"),o("span",{style:{color:"#A1B567"}},"from_u32"),o("span",{style:{color:"#858585"}},"("),o("span",{style:{color:"#6394BF"}},"0x69"),o("span",{style:{color:"#858585"}},")"),o("span",{style:{color:"#CB7676"}},"."),o("span",{style:{color:"#A1B567"}},"unwrap"),o("span",{style:{color:"#858585"}},"(),")]),m(`
`),o("span",{class:"line"},[o("span",{style:{color:"#DBD7CA"}},"        "),o("span",{style:{color:"#4D9375"}},"unsafe"),o("span",{style:{color:"#DBD7CA"}}," "),o("span",{style:{color:"#858585"}},"{"),o("span",{style:{color:"#DBD7CA"}}," "),o("span",{style:{color:"#A1B567"}},"char"),o("span",{style:{color:"#CB7676"}},"::"),o("span",{style:{color:"#A1B567"}},"from_u32_unchecked"),o("span",{style:{color:"#858585"}},"("),o("span",{style:{color:"#6394BF"}},"0x20"),o("span",{style:{color:"#858585"}},")"),o("span",{style:{color:"#DBD7CA"}}," "),o("span",{style:{color:"#858585"}},"},")]),m(`
`),o("span",{class:"line"},[o("span",{style:{color:"#DBD7CA"}},"        "),o("span",{style:{color:"#858585"}},"'"),o("span",{style:{color:"#D4976C"}},"\\u{1F63B}"),o("span",{style:{color:"#858585"}},"'")]),m(`
`),o("span",{class:"line"},[o("span",{style:{color:"#DBD7CA"}},"    "),o("span",{style:{color:"#858585"}},"];")]),m(`
`),o("span",{class:"line"},[o("span",{style:{color:"#DBD7CA"}},"    "),o("span",{style:{color:"#A1B567"}},"println!"),o("span",{style:{color:"#858585"}},"("),o("span",{style:{color:"#C98A7D"}},'"'),o("span",{style:{color:"#858585"}},"{}"),o("span",{style:{color:"#C98A7D"}},'"'),o("span",{style:{color:"#858585"}},","),o("span",{style:{color:"#DBD7CA"}}," "),o("span",{style:{color:"#B8A965"}},"s"),o("span",{style:{color:"#CB7676"}},"."),o("span",{style:{color:"#A1B567"}},"len"),o("span",{style:{color:"#858585"}},"()"),o("span",{style:{color:"#DBD7CA"}}," "),o("span",{style:{color:"#CB7676"}},"*"),o("span",{style:{color:"#DBD7CA"}}," "),o("span",{style:{color:"#A1B567"}},"std"),o("span",{style:{color:"#CB7676"}},"::"),o("span",{style:{color:"#A1B567"}},"mem"),o("span",{style:{color:"#CB7676"}},"::"),o("span",{style:{color:"#A1B567"}},"size_of"),o("span",{style:{color:"#CB7676"}},"::"),o("span",{style:{color:"#858585"}},"<"),o("span",{style:{color:"#A1B567"}},"char"),o("span",{style:{color:"#858585"}},">());"),o("span",{style:{color:"#758575"}},"  // 16")]),m(`
`),o("span",{class:"line"},[o("span",{style:{color:"#DBD7CA"}},"    ")]),m(`
`),o("span",{class:"line"},[o("span",{style:{color:"#DBD7CA"}},"    "),o("span",{style:{color:"#CB7676"}},"let"),o("span",{style:{color:"#DBD7CA"}}," "),o("span",{style:{color:"#B8A965"}},"t"),o("span",{style:{color:"#CB7676"}},":"),o("span",{style:{color:"#DBD7CA"}}," "),o("span",{style:{color:"#A1B567"}},"String"),o("span",{style:{color:"#DBD7CA"}}," "),o("span",{style:{color:"#CB7676"}},"="),o("span",{style:{color:"#DBD7CA"}}," "),o("span",{style:{color:"#B8A965"}},"s"),o("span",{style:{color:"#CB7676"}},"."),o("span",{style:{color:"#A1B567"}},"iter"),o("span",{style:{color:"#858585"}},"()"),o("span",{style:{color:"#CB7676"}},"."),o("span",{style:{color:"#A1B567"}},"collect"),o("span",{style:{color:"#858585"}},"();")]),m(`
`),o("span",{class:"line"},[o("span",{style:{color:"#DBD7CA"}},"    "),o("span",{style:{color:"#A1B567"}},"println!"),o("span",{style:{color:"#858585"}},"("),o("span",{style:{color:"#C98A7D"}},'"'),o("span",{style:{color:"#858585"}},"{}"),o("span",{style:{color:"#C98A7D"}},'"'),o("span",{style:{color:"#858585"}},","),o("span",{style:{color:"#DBD7CA"}}," "),o("span",{style:{color:"#B8A965"}},"t"),o("span",{style:{color:"#CB7676"}},"."),o("span",{style:{color:"#A1B567"}},"len"),o("span",{style:{color:"#858585"}},"()"),o("span",{style:{color:"#DBD7CA"}}," "),o("span",{style:{color:"#CB7676"}},"*"),o("span",{style:{color:"#DBD7CA"}}," "),o("span",{style:{color:"#A1B567"}},"std"),o("span",{style:{color:"#CB7676"}},"::"),o("span",{style:{color:"#A1B567"}},"mem"),o("span",{style:{color:"#CB7676"}},"::"),o("span",{style:{color:"#A1B567"}},"size_of"),o("span",{style:{color:"#CB7676"}},"::"),o("span",{style:{color:"#858585"}},"<"),o("span",{style:{color:"#A1B567"}},"u8"),o("span",{style:{color:"#858585"}},">());"),o("span",{style:{color:"#758575"}},"    // 7")]),m(`
`),o("span",{class:"line"}),m(`
`),o("span",{class:"line"},[o("span",{style:{color:"#DBD7CA"}},"    "),o("span",{style:{color:"#A1B567"}},"println!"),o("span",{style:{color:"#858585"}},"("),o("span",{style:{color:"#C98A7D"}},'"'),o("span",{style:{color:"#858585"}},"{"),o("span",{style:{color:"#C98A7D"}},"t"),o("span",{style:{color:"#858585"}},"}"),o("span",{style:{color:"#C98A7D"}},'"'),o("span",{style:{color:"#858585"}},");")]),m(`
`),o("span",{class:"line"},[o("span",{style:{color:"#758575"}},'    //        ^^^ "Hi 😻"')]),m(`
`),o("span",{class:"line"},[o("span",{style:{color:"#858585"}},"}")])])]),o("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[o("code",null,[o("span",{class:"line"},[o("span",{style:{color:"#1C6B48"}},"fn"),o("span",{style:{color:"#393A34"}}," "),o("span",{style:{color:"#6C7834"}},"main"),o("span",{style:{color:"#8E8F8B"}},"()"),o("span",{style:{color:"#393A34"}}," "),o("span",{style:{color:"#8E8F8B"}},"{")]),m(`
`),o("span",{class:"line"},[o("span",{style:{color:"#393A34"}},"    "),o("span",{style:{color:"#AB5959"}},"let"),o("span",{style:{color:"#393A34"}}," "),o("span",{style:{color:"#8C862B"}},"s"),o("span",{style:{color:"#AB5959"}},":"),o("span",{style:{color:"#393A34"}}," "),o("span",{style:{color:"#8E8F8B"}},"["),o("span",{style:{color:"#6C7834"}},"char"),o("span",{style:{color:"#8E8F8B"}},";"),o("span",{style:{color:"#393A34"}}," "),o("span",{style:{color:"#296AA3"}},"4"),o("span",{style:{color:"#8E8F8B"}},"]"),o("span",{style:{color:"#393A34"}}," "),o("span",{style:{color:"#AB5959"}},"="),o("span",{style:{color:"#393A34"}}," "),o("span",{style:{color:"#8E8F8B"}},"[")]),m(`
`),o("span",{class:"line"},[o("span",{style:{color:"#393A34"}},"        "),o("span",{style:{color:"#8E8F8B"}},"'"),o("span",{style:{color:"#A65E2B"}},"\\u{0048}"),o("span",{style:{color:"#8E8F8B"}},"'"),o("span",{style:{color:"#8E8F8B"}},",")]),m(`
`),o("span",{class:"line"},[o("span",{style:{color:"#393A34"}},"        "),o("span",{style:{color:"#6C7834"}},"char"),o("span",{style:{color:"#AB5959"}},"::"),o("span",{style:{color:"#6C7834"}},"from_u32"),o("span",{style:{color:"#8E8F8B"}},"("),o("span",{style:{color:"#296AA3"}},"0x69"),o("span",{style:{color:"#8E8F8B"}},")"),o("span",{style:{color:"#AB5959"}},"."),o("span",{style:{color:"#6C7834"}},"unwrap"),o("span",{style:{color:"#8E8F8B"}},"(),")]),m(`
`),o("span",{class:"line"},[o("span",{style:{color:"#393A34"}},"        "),o("span",{style:{color:"#1C6B48"}},"unsafe"),o("span",{style:{color:"#393A34"}}," "),o("span",{style:{color:"#8E8F8B"}},"{"),o("span",{style:{color:"#393A34"}}," "),o("span",{style:{color:"#6C7834"}},"char"),o("span",{style:{color:"#AB5959"}},"::"),o("span",{style:{color:"#6C7834"}},"from_u32_unchecked"),o("span",{style:{color:"#8E8F8B"}},"("),o("span",{style:{color:"#296AA3"}},"0x20"),o("span",{style:{color:"#8E8F8B"}},")"),o("span",{style:{color:"#393A34"}}," "),o("span",{style:{color:"#8E8F8B"}},"},")]),m(`
`),o("span",{class:"line"},[o("span",{style:{color:"#393A34"}},"        "),o("span",{style:{color:"#8E8F8B"}},"'"),o("span",{style:{color:"#A65E2B"}},"\\u{1F63B}"),o("span",{style:{color:"#8E8F8B"}},"'")]),m(`
`),o("span",{class:"line"},[o("span",{style:{color:"#393A34"}},"    "),o("span",{style:{color:"#8E8F8B"}},"];")]),m(`
`),o("span",{class:"line"},[o("span",{style:{color:"#393A34"}},"    "),o("span",{style:{color:"#6C7834"}},"println!"),o("span",{style:{color:"#8E8F8B"}},"("),o("span",{style:{color:"#B56959"}},'"'),o("span",{style:{color:"#8E8F8B"}},"{}"),o("span",{style:{color:"#B56959"}},'"'),o("span",{style:{color:"#8E8F8B"}},","),o("span",{style:{color:"#393A34"}}," "),o("span",{style:{color:"#8C862B"}},"s"),o("span",{style:{color:"#AB5959"}},"."),o("span",{style:{color:"#6C7834"}},"len"),o("span",{style:{color:"#8E8F8B"}},"()"),o("span",{style:{color:"#393A34"}}," "),o("span",{style:{color:"#AB5959"}},"*"),o("span",{style:{color:"#393A34"}}," "),o("span",{style:{color:"#6C7834"}},"std"),o("span",{style:{color:"#AB5959"}},"::"),o("span",{style:{color:"#6C7834"}},"mem"),o("span",{style:{color:"#AB5959"}},"::"),o("span",{style:{color:"#6C7834"}},"size_of"),o("span",{style:{color:"#AB5959"}},"::"),o("span",{style:{color:"#8E8F8B"}},"<"),o("span",{style:{color:"#6C7834"}},"char"),o("span",{style:{color:"#8E8F8B"}},">());"),o("span",{style:{color:"#A0ADA0"}},"  // 16")]),m(`
`),o("span",{class:"line"},[o("span",{style:{color:"#393A34"}},"    ")]),m(`
`),o("span",{class:"line"},[o("span",{style:{color:"#393A34"}},"    "),o("span",{style:{color:"#AB5959"}},"let"),o("span",{style:{color:"#393A34"}}," "),o("span",{style:{color:"#8C862B"}},"t"),o("span",{style:{color:"#AB5959"}},":"),o("span",{style:{color:"#393A34"}}," "),o("span",{style:{color:"#6C7834"}},"String"),o("span",{style:{color:"#393A34"}}," "),o("span",{style:{color:"#AB5959"}},"="),o("span",{style:{color:"#393A34"}}," "),o("span",{style:{color:"#8C862B"}},"s"),o("span",{style:{color:"#AB5959"}},"."),o("span",{style:{color:"#6C7834"}},"iter"),o("span",{style:{color:"#8E8F8B"}},"()"),o("span",{style:{color:"#AB5959"}},"."),o("span",{style:{color:"#6C7834"}},"collect"),o("span",{style:{color:"#8E8F8B"}},"();")]),m(`
`),o("span",{class:"line"},[o("span",{style:{color:"#393A34"}},"    "),o("span",{style:{color:"#6C7834"}},"println!"),o("span",{style:{color:"#8E8F8B"}},"("),o("span",{style:{color:"#B56959"}},'"'),o("span",{style:{color:"#8E8F8B"}},"{}"),o("span",{style:{color:"#B56959"}},'"'),o("span",{style:{color:"#8E8F8B"}},","),o("span",{style:{color:"#393A34"}}," "),o("span",{style:{color:"#8C862B"}},"t"),o("span",{style:{color:"#AB5959"}},"."),o("span",{style:{color:"#6C7834"}},"len"),o("span",{style:{color:"#8E8F8B"}},"()"),o("span",{style:{color:"#393A34"}}," "),o("span",{style:{color:"#AB5959"}},"*"),o("span",{style:{color:"#393A34"}}," "),o("span",{style:{color:"#6C7834"}},"std"),o("span",{style:{color:"#AB5959"}},"::"),o("span",{style:{color:"#6C7834"}},"mem"),o("span",{style:{color:"#AB5959"}},"::"),o("span",{style:{color:"#6C7834"}},"size_of"),o("span",{style:{color:"#AB5959"}},"::"),o("span",{style:{color:"#8E8F8B"}},"<"),o("span",{style:{color:"#6C7834"}},"u8"),o("span",{style:{color:"#8E8F8B"}},">());"),o("span",{style:{color:"#A0ADA0"}},"    // 7")]),m(`
`),o("span",{class:"line"}),m(`
`),o("span",{class:"line"},[o("span",{style:{color:"#393A34"}},"    "),o("span",{style:{color:"#6C7834"}},"println!"),o("span",{style:{color:"#8E8F8B"}},"("),o("span",{style:{color:"#B56959"}},'"'),o("span",{style:{color:"#8E8F8B"}},"{"),o("span",{style:{color:"#B56959"}},"t"),o("span",{style:{color:"#8E8F8B"}},"}"),o("span",{style:{color:"#B56959"}},'"'),o("span",{style:{color:"#8E8F8B"}},");")]),m(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A0ADA0"}},'    //        ^^^ "Hi 😻"')]),m(`
`),o("span",{class:"line"},[o("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),F6=o("p",null,[m("👆 Yes, "),o("code",null,".iter().collect();")],-1),$6={__name:"39",setup(e){const t={hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"};return L(z),(n,s)=>{const r=Gs;return v(),j(De,le(re(t)),{default:M(()=>[C6,E6,H(r,mt({},{ranges:["0-7,10,13-16","all"]}),{default:M(()=>[T6]),_:1},16),F6]),_:1},16)}}},B6=K($6,[["__file","/@slidev/slides/39.md"]]),D6=o("h2",null,"See, creating strings is easy!",-1),O6={__name:"40",setup(e){const t={layout:"center",hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"};return L(z),(n,s)=>(v(),j(tt,le(re(t)),{default:M(()=>[D6]),_:1},16))}},I6=K(O6,[["__file","/@slidev/slides/40.md"]]),P6=o("h2",null,"UTF8Error",-1),U6=o("p",null,"Until it panics.",-1),M6=o("pre",{class:"shiki-container"},[o("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[o("code",null,[o("span",{class:"line"},[o("span",{style:{color:"#4D9375"}},"fn"),o("span",{style:{color:"#DBD7CA"}}," "),o("span",{style:{color:"#A1B567"}},"main"),o("span",{style:{color:"#858585"}},"()"),o("span",{style:{color:"#DBD7CA"}}," "),o("span",{style:{color:"#858585"}},"{")]),m(`
`),o("span",{class:"line"},[o("span",{style:{color:"#DBD7CA"}},"    "),o("span",{style:{color:"#CB7676"}},"let"),o("span",{style:{color:"#DBD7CA"}}," "),o("span",{style:{color:"#B8A965"}},"cat"),o("span",{style:{color:"#CB7676"}},":"),o("span",{style:{color:"#DBD7CA"}}," "),o("span",{style:{color:"#858585"}},"["),o("span",{style:{color:"#A1B567"}},"u8"),o("span",{style:{color:"#858585"}},";"),o("span",{style:{color:"#DBD7CA"}}," "),o("span",{style:{color:"#6394BF"}},"4"),o("span",{style:{color:"#858585"}},"]"),o("span",{style:{color:"#DBD7CA"}}," "),o("span",{style:{color:"#CB7676"}},"="),o("span",{style:{color:"#DBD7CA"}}," "),o("span",{style:{color:"#858585"}},"["),o("span",{style:{color:"#6394BF"}},"0xF0"),o("span",{style:{color:"#858585"}},","),o("span",{style:{color:"#DBD7CA"}}," "),o("span",{style:{color:"#6394BF"}},"0x9F"),o("span",{style:{color:"#858585"}},","),o("span",{style:{color:"#DBD7CA"}}," "),o("span",{style:{color:"#6394BF"}},"0x98"),o("span",{style:{color:"#858585"}},","),o("span",{style:{color:"#DBD7CA"}}," "),o("span",{style:{color:"#6394BF"}},"0xBB"),o("span",{style:{color:"#858585"}},"];")]),m(`
`),o("span",{class:"line"}),m(`
`),o("span",{class:"line"},[o("span",{style:{color:"#758575"}},"    // Panics")]),m(`
`),o("span",{class:"line"},[o("span",{style:{color:"#DBD7CA"}},"    "),o("span",{style:{color:"#CB7676"}},"let"),o("span",{style:{color:"#DBD7CA"}}," "),o("span",{style:{color:"#B8A965"}},"s"),o("span",{style:{color:"#DBD7CA"}}," "),o("span",{style:{color:"#CB7676"}},"="),o("span",{style:{color:"#DBD7CA"}}," "),o("span",{style:{color:"#A1B567"}},"std"),o("span",{style:{color:"#CB7676"}},"::"),o("span",{style:{color:"#A1B567"}},"str"),o("span",{style:{color:"#CB7676"}},"::"),o("span",{style:{color:"#A1B567"}},"from_utf8"),o("span",{style:{color:"#858585"}},"("),o("span",{style:{color:"#CB7676"}},"&"),o("span",{style:{color:"#B8A965"}},"cat"),o("span",{style:{color:"#858585"}},"["),o("span",{style:{color:"#6394BF"}},"0"),o("span",{style:{color:"#CB7676"}},".."),o("span",{style:{color:"#6394BF"}},"2"),o("span",{style:{color:"#858585"}},"])"),o("span",{style:{color:"#CB7676"}},"."),o("span",{style:{color:"#A1B567"}},"unwrap"),o("span",{style:{color:"#858585"}},"();")]),m(`
`),o("span",{class:"line"},[o("span",{style:{color:"#758575"}},"    // thread 'main' panicked at 'called `Result::unwrap()` on an `Err` value:")]),m(`
`),o("span",{class:"line"},[o("span",{style:{color:"#758575"}},"    //   FromUtf8Error { bytes: [128], error: Utf8Error { valid_up_to: 0, error_len: Some(1) } }', src/main.rs:5:35")]),m(`
`),o("span",{class:"line"},[o("span",{style:{color:"#858585"}},"}")])])]),o("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[o("code",null,[o("span",{class:"line"},[o("span",{style:{color:"#1C6B48"}},"fn"),o("span",{style:{color:"#393A34"}}," "),o("span",{style:{color:"#6C7834"}},"main"),o("span",{style:{color:"#8E8F8B"}},"()"),o("span",{style:{color:"#393A34"}}," "),o("span",{style:{color:"#8E8F8B"}},"{")]),m(`
`),o("span",{class:"line"},[o("span",{style:{color:"#393A34"}},"    "),o("span",{style:{color:"#AB5959"}},"let"),o("span",{style:{color:"#393A34"}}," "),o("span",{style:{color:"#8C862B"}},"cat"),o("span",{style:{color:"#AB5959"}},":"),o("span",{style:{color:"#393A34"}}," "),o("span",{style:{color:"#8E8F8B"}},"["),o("span",{style:{color:"#6C7834"}},"u8"),o("span",{style:{color:"#8E8F8B"}},";"),o("span",{style:{color:"#393A34"}}," "),o("span",{style:{color:"#296AA3"}},"4"),o("span",{style:{color:"#8E8F8B"}},"]"),o("span",{style:{color:"#393A34"}}," "),o("span",{style:{color:"#AB5959"}},"="),o("span",{style:{color:"#393A34"}}," "),o("span",{style:{color:"#8E8F8B"}},"["),o("span",{style:{color:"#296AA3"}},"0xF0"),o("span",{style:{color:"#8E8F8B"}},","),o("span",{style:{color:"#393A34"}}," "),o("span",{style:{color:"#296AA3"}},"0x9F"),o("span",{style:{color:"#8E8F8B"}},","),o("span",{style:{color:"#393A34"}}," "),o("span",{style:{color:"#296AA3"}},"0x98"),o("span",{style:{color:"#8E8F8B"}},","),o("span",{style:{color:"#393A34"}}," "),o("span",{style:{color:"#296AA3"}},"0xBB"),o("span",{style:{color:"#8E8F8B"}},"];")]),m(`
`),o("span",{class:"line"}),m(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A0ADA0"}},"    // Panics")]),m(`
`),o("span",{class:"line"},[o("span",{style:{color:"#393A34"}},"    "),o("span",{style:{color:"#AB5959"}},"let"),o("span",{style:{color:"#393A34"}}," "),o("span",{style:{color:"#8C862B"}},"s"),o("span",{style:{color:"#393A34"}}," "),o("span",{style:{color:"#AB5959"}},"="),o("span",{style:{color:"#393A34"}}," "),o("span",{style:{color:"#6C7834"}},"std"),o("span",{style:{color:"#AB5959"}},"::"),o("span",{style:{color:"#6C7834"}},"str"),o("span",{style:{color:"#AB5959"}},"::"),o("span",{style:{color:"#6C7834"}},"from_utf8"),o("span",{style:{color:"#8E8F8B"}},"("),o("span",{style:{color:"#AB5959"}},"&"),o("span",{style:{color:"#8C862B"}},"cat"),o("span",{style:{color:"#8E8F8B"}},"["),o("span",{style:{color:"#296AA3"}},"0"),o("span",{style:{color:"#AB5959"}},".."),o("span",{style:{color:"#296AA3"}},"2"),o("span",{style:{color:"#8E8F8B"}},"])"),o("span",{style:{color:"#AB5959"}},"."),o("span",{style:{color:"#6C7834"}},"unwrap"),o("span",{style:{color:"#8E8F8B"}},"();")]),m(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A0ADA0"}},"    // thread 'main' panicked at 'called `Result::unwrap()` on an `Err` value:")]),m(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A0ADA0"}},"    //   FromUtf8Error { bytes: [128], error: Utf8Error { valid_up_to: 0, error_len: Some(1) } }', src/main.rs:5:35")]),m(`
`),o("span",{class:"line"},[o("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),L6={class:"pt-10"},R6=o("blockquote",null,[o("p",null,[m("String slices are "),o("strong",null,"always"),m(" valid UTF-8.")])],-1),N6=o("p",null,'😬 Yeah, not all sequencess of bytes are "Valid UTF-8"',-1),q6=[R6,N6],j6={__name:"41",setup(e){const t={hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"};return L(z),(n,s)=>{const r=Gs,i=ws("click");return v(),j(De,le(re(t)),{default:M(()=>[P6,U6,H(r,mt({},{ranges:[""]}),{default:M(()=>[M6]),_:1},16),Tt((v(),T("p",L6,q6)),[[i]])]),_:1},16)}}},W6=K(j6,[["__file","/@slidev/slides/41.md"]]),H6=o("h2",null,"Invalid UTF-8",-1),V6=o("p",null,"…We didn’t talk about Invalid UTF-8 yet",-1),z6=o("ul",null,[o("li",null,[m("First byte of UTF-8 byte sequences "),o("ul",null,[o("li",null,[m("1 byte seq: "),o("code",null,"0xxxxxxx")]),o("li",null,[m("2 byte seq: "),o("code",null,"110xxxxx"),m(" - "),o("code",null,"0xCx"),m(" or "),o("code",null,"0xDx"),m(" = 2 bytes")]),o("li",null,[m("3 byte seq: "),o("code",null,"1110xxxx"),m(" - "),o("code",null,"0xEx"),m(" = 3 bytes")]),o("li",null,[m("4 byte seq: "),o("code",null,"11110xxx"),m(" - "),o("code",null,"0xFx"),m(" = 4 bytes")])])])],-1),K6=o("ul",null,[o("li",null,[m('∴ The following are "broken": '),o("ul",null,[o("li",null,[o("code",null,"[0xA0]"),m(", "),o("code",null,"[0xB0]"),m(" - invalid sequences")]),o("li",null,[o("code",null,"[0xC0]"),m(", "),o("code",null,"[0xD0]"),m(" - missing second byte")]),o("li",null,[o("code",null,"[0xE0, 0xFF]"),m(" - missing third byte")]),o("li",null,[o("code",null,"[0xF0, 0xFF, 0xFF]"),m(" - missing fourth byte")])])])],-1),G6={__name:"42",setup(e){const t={hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"};return L(z),(n,s)=>{const r=Qt;return v(),j(De,le(re(t)),{default:M(()=>[H6,V6,H(r,null,{default:M(()=>[z6]),_:1}),H(r,null,{default:M(()=>[K6]),_:1})]),_:1},16)}}},Y6=K(G6,[["__file","/@slidev/slides/42.md"]]),Q6=o("h2",null,"Where Enforced UTF-8 can go wrong",-1),Z6={__name:"43",setup(e){const t={layout:"center",hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"};return L(z),(n,s)=>(v(),j(tt,le(re(t)),{default:M(()=>[Q6]),_:1},16))}},J6=K(Z6,[["__file","/@slidev/slides/43.md"]]),X6=o("h2",null,"Reading and Writing files",-1),e4=o("ul",null,[o("li",null,'Binary "strings" (e.g. reading/writing from disk)')],-1),t4={__name:"44",setup(e){const t={hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"};return L(z),(n,s)=>(v(),j(De,le(re(t)),{default:M(()=>[X6,e4]),_:1},16))}},n4=K(t4,[["__file","/@slidev/slides/44.md"]]),s4=o("h2",null,"Standards - and why we follow them",-1),o4=o("ul",null,[o("li",null,"JSON, but it’s binary blobs as values")],-1),r4={__name:"45",setup(e){const t={hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"};return L(z),(n,s)=>(v(),j(De,le(re(t)),{default:M(()=>[s4,o4]),_:1},16))}},i4=K(r4,[["__file","/@slidev/slides/45.md"]]),l4=o("h2",null,[o("code",null,"unsafe"),m(" is unsafe")],-1),a4=o("ul",null,[o("li",null,[m("Breaking "),o("code",null,"&str"),m("s (pushing non utf8 bytes)")])],-1),c4={__name:"46",setup(e){const t={hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"};return L(z),(n,s)=>(v(),j(De,le(re(t)),{default:M(()=>[l4,a4]),_:1},16))}},u4=K(c4,[["__file","/@slidev/slides/46.md"]]),d4=o("h2",null,"Conventially UTF-8 vs. Gaurantee",-1),p4=o("p",null,"With the help of bstr crate",-1),f4={__name:"47",setup(e){const t={hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"};return L(z),(n,s)=>(v(),j(De,le(re(t)),{default:M(()=>[d4,p4]),_:1},16))}},h4=K(f4,[["__file","/@slidev/slides/47.md"]]),m4=o("h2",null,"Summary",-1),y4=o("p",null,[o("code",null,"str"),m(" is the primitive string - a slice of bytes with gaurantees of UTF-8")],-1),g4=o("p",null,[o("code",null,"str"),m(" is always "),o("code",null,"UTF-8")],-1),v4=o("p",null,[o("code",null,"UTF8Error"),m(" is because you should be handling bytes instead of strings")],-1),_4=o("p",null,[o("code",null,"bstr"),m(" if you want Conventially UTF-8 instead")],-1),b4={__name:"48",setup(e){const t={layout:"center",hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"};return L(z),(n,s)=>(v(),j(tt,le(re(t)),{default:M(()=>[m4,y4,g4,v4,_4]),_:1},16))}},x4=K(b4,[["__file","/@slidev/slides/48.md"]]),w4=o("h1",null,"Quirks",-1),k4={__name:"49",setup(e){const t={layout:"cover",hide:!1,srcSequence:"./pages/04-quirks.md"};return L(z),(n,s)=>(v(),j(Ks,le(re(t)),{default:M(()=>[w4]),_:1},16))}},A4=K(k4,[["__file","/@slidev/slides/49.md"]]),S4=o("h2",null,"Capitalization (AKA Casemapping and Casefolding)",-1),C4=o("p",null,"All ASCII letters just so happen to be lossless when transitioning between upper and lower case versions. But this doesn’t apply to all languages and characters.",-1),E4=o("p",null,'Capitalization - "\\u0131" == "\\u0131".upcase.downcase. "\\u0131".upcase.downcase(:turkic)',-1),T4=o("p",null,"Fun fact: There are no RTL languages that have the concept of casing (Arabic, Hebrew, Persian, and more…)",-1),F4={__name:"50",setup(e){const t={hide:!1,srcSequence:"./pages/04-quirks.md"};return L(z),(n,s)=>(v(),j(De,le(re(t)),{default:M(()=>[S4,C4,E4,T4]),_:1},16))}},$4=K(F4,[["__file","/@slidev/slides/50.md"]]),B4=o("h2",null,"Composition",-1),D4=o("p",null,"A[cute] E",-1),O4=o("ul",null,[o("li",null,[m("é = "),o("code",null,"\\u00e9")]),o("li",null,[m("é = "),o("code",null,"\\u0065\\u0301"),m(" (just an "),o("code",null,"e"),m(" but with special "),o("code",null,"\\u0301"),m(" combining)")])],-1),I4=o("pre",{class:"shiki-container"},[o("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[o("code",null,[o("span",{class:"line"},[o("span",{style:{color:"#dbd7ca"}},"é != é")])])]),o("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[o("code",null,[o("span",{class:"line"},[o("span",{style:{color:"#393a34"}},"é != é")])])])],-1),P4=o("p",null,[o("code",null,"\\u003d\\u0338\\u003d"),m(" vs. "),o("code",null,"\\u2260"),m(" vs. "),o("code",null,"!=")],-1),U4=o("pre",{class:"shiki-container"},[o("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[o("code",null,[o("span",{class:"line"},[o("span",{style:{color:"#dbd7ca"}},"'≠=' != '≠' != '!='")])])]),o("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[o("code",null,[o("span",{class:"line"},[o("span",{style:{color:"#393a34"}},"'≠=' != '≠' != '!='")])])])],-1),M4=o("p",null,"Not not equal",-1),L4=o("pre",{class:"shiki-container"},[o("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[o("code",null,[o("span",{class:"line"},[o("span",{style:{color:"#dbd7ca"}},"=⃥")])])]),o("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[o("code",null,[o("span",{class:"line"},[o("span",{style:{color:"#393a34"}},"=⃥")])])])],-1),R4=o("footer",null,[o("ul",null,[o("li",null,[m("Unicode combining classes: "),o("a",{href:"https://www.compart.com/en/unicode/combining",target:"_blank",rel:"noopener"},"https://www.compart.com/en/unicode/combining")]),o("li",null,[m("Unicode Normalization Forms: "),o("a",{href:"http://www.unicode.org/reports/tr15/",target:"_blank",rel:"noopener"},"http://www.unicode.org/reports/tr15/")]),o("li",null,[m("Crate unicode_normalization: "),o("a",{href:"https://docs.rs/unicode-normalization/latest/unicode_normalization/",target:"_blank",rel:"noopener"},"https://docs.rs/unicode-normalization/latest/unicode_normalization/")])])],-1),N4={__name:"51",setup(e){const t={hide:!1,srcSequence:"./pages/04-quirks.md"};return L(z),(n,s)=>(v(),j(De,le(re(t)),{default:M(()=>[B4,D4,O4,I4,P4,U4,M4,L4,R4]),_:1},16))}},q4=K(N4,[["__file","/@slidev/slides/51.md"]]),j4=o("h2",null,"Emoji Composition",-1),W4=o("p",{style:{"font-size":"65%","line-height":"1rem"}}," 😶‍🌫️ 😮‍💨 😵‍💫 ❤️‍🔥 ❤️‍🩹 👁️‍🗨️ 🫱🏻‍🫲🏼 🫱🏻‍🫲🏽 🫱🏻‍🫲🏾 🫱🏻‍🫲🏿 🫱🏼‍🫲🏻 🫱🏼‍🫲🏽 🫱🏼‍🫲🏾 🫱🏼‍🫲🏿 🫱🏽‍🫲🏻 🫱🏽‍🫲🏼 🫱🏽‍🫲🏾 🫱🏽‍🫲🏿 🫱🏾‍🫲🏻 🫱🏾‍🫲🏼 🫱🏾‍🫲🏽 🫱🏾‍🫲🏿 🫱🏿‍🫲🏻 🫱🏿‍🫲🏼 🫱🏿‍🫲🏽 🫱🏿‍🫲🏾 🧔‍♂️ 🧔🏻‍♂️ 🧔🏼‍♂️ 🧔🏽‍♂️ 🧔🏾‍♂️ 🧔🏿‍♂️ 🧔‍♀️ 🧔🏻‍♀️ 🧔🏼‍♀️ 🧔🏽‍♀️ 🧔🏾‍♀️ 🧔🏿‍♀️ 👨‍🦰 👨🏻‍🦰 👨🏼‍🦰 👨🏽‍🦰 👨🏾‍🦰 👨🏿‍🦰 👨‍🦱 👨🏻‍🦱 👨🏼‍🦱 👨🏽‍🦱 👨🏾‍🦱 👨🏿‍🦱 👨‍🦳 👨🏻‍🦳 👨🏼‍🦳 👨🏽‍🦳 👨🏾‍🦳 👨🏿‍🦳 👨‍🦲 👨🏻‍🦲 👨🏼‍🦲 👨🏽‍🦲 👨🏾‍🦲 👨🏿‍🦲 👩‍🦰 👩🏻‍🦰 👩🏼‍🦰 👩🏽‍🦰 👩🏾‍🦰 👩🏿‍🦰 🧑‍🦰 🧑🏻‍🦰 🧑🏼‍🦰 🧑🏽‍🦰 🧑🏾‍🦰 🧑🏿‍🦰 👩‍🦱 👩🏻‍🦱 👩🏼‍🦱 👩🏽‍🦱 👩🏾‍🦱 👩🏿‍🦱 🧑‍🦱 🧑🏻‍🦱 🧑🏼‍🦱 🧑🏽‍🦱 🧑🏾‍🦱 🧑🏿‍🦱 👩‍🦳 👩🏻‍🦳 👩🏼‍🦳 👩🏽‍🦳 👩🏾‍🦳 👩🏿‍🦳 🧑‍🦳 🧑🏻‍🦳 🧑🏼‍🦳 🧑🏽‍🦳 🧑🏾‍🦳 🧑🏿‍🦳 👩‍🦲 👩🏻‍🦲 👩🏼‍🦲 👩🏽‍🦲 👩🏾‍🦲 👩🏿‍🦲 🧑‍🦲 🧑🏻‍🦲 🧑🏼‍🦲 🧑🏽‍🦲 🧑🏾‍🦲 🧑🏿‍🦲 👱‍♀️ 👱🏻‍♀️ 👱🏼‍♀️ 👱🏽‍♀️ 👱🏾‍♀️ 👱🏿‍♀️ 👱‍♂️ 👱🏻‍♂️ 👱🏼‍♂️ 👱🏽‍♂️ 👱🏾‍♂️ 👱🏿‍♂️ 🙍‍♂️ 🙍🏻‍♂️ 🙍🏼‍♂️ 🙍🏽‍♂️ 🙍🏾‍♂️ 🙍🏿‍♂️ 🙍‍♀️ 🙍🏻‍♀️ 🙍🏼‍♀️ 🙍🏽‍♀️ 🙍🏾‍♀️ 🙍🏿‍♀️ 🙎‍♂️ 🙎🏻‍♂️ 🙎🏼‍♂️ 🙎🏽‍♂️ 🙎🏾‍♂️ 🙎🏿‍♂️ 🙎‍♀️ 🙎🏻‍♀️ 🙎🏼‍♀️ 🙎🏽‍♀️ 🙎🏾‍♀️ 🙎🏿‍♀️ 🙅‍♂️ 🙅🏻‍♂️ 🙅🏼‍♂️ 🙅🏽‍♂️ 🙅🏾‍♂️ 🙅🏿‍♂️ 🙅‍♀️ 🙅🏻‍♀️ 🙅🏼‍♀️ 🙅🏽‍♀️ 🙅🏾‍♀️ 🙅🏿‍♀️ 🙆‍♂️ 🙆🏻‍♂️ 🙆🏼‍♂️ 🙆🏽‍♂️ 🙆🏾‍♂️ 🙆🏿‍♂️ 🙆‍♀️ 🙆🏻‍♀️ 🙆🏼‍♀️ 🙆🏽‍♀️ 🙆🏾‍♀️ 🙆🏿‍♀️ 💁‍♂️ 💁🏻‍♂️ 💁🏼‍♂️ 💁🏽‍♂️ 💁🏾‍♂️ 💁🏿‍♂️ 💁‍♀️ 💁🏻‍♀️ 💁🏼‍♀️ 💁🏽‍♀️ 💁🏾‍♀️ 💁🏿‍♀️ 🙋‍♂️ 🙋🏻‍♂️ 🙋🏼‍♂️ 🙋🏽‍♂️ 🙋🏾‍♂️ 🙋🏿‍♂️ 🙋‍♀️ 🙋🏻‍♀️ 🙋🏼‍♀️ 🙋🏽‍♀️ 🙋🏾‍♀️ 🙋🏿‍♀️ 🧏‍♂️ 🧏🏻‍♂️ 🧏🏼‍♂️ 🧏🏽‍♂️ 🧏🏾‍♂️ 🧏🏿‍♂️ 🧏‍♀️ 🧏🏻‍♀️ 🧏🏼‍♀️ 🧏🏽‍♀️ 🧏🏾‍♀️ 🧏🏿‍♀️ 🙇‍♂️ 🙇🏻‍♂️ 🙇🏼‍♂️ 🙇🏽‍♂️ 🙇🏾‍♂️ 🙇🏿‍♂️ 🙇‍♀️ 🙇🏻‍♀️ 🙇🏼‍♀️ 🙇🏽‍♀️ 🙇🏾‍♀️ 🙇🏿‍♀️ 🤦‍♂️ 🤦🏻‍♂️ 🤦🏼‍♂️ 🤦🏽‍♂️ 🤦🏾‍♂️ 🤦🏿‍♂️ 🤦‍♀️ 🤦🏻‍♀️ 🤦🏼‍♀️ 🤦🏽‍♀️ 🤦🏾‍♀️ 🤦🏿‍♀️ 🤷‍♂️ 🤷🏻‍♂️ 🤷🏼‍♂️ 🤷🏽‍♂️ 🤷🏾‍♂️ 🤷🏿‍♂️ 🤷‍♀️ 🤷🏻‍♀️ 🤷🏼‍♀️ 🤷🏽‍♀️ 🤷🏾‍♀️ 🤷🏿‍♀️ 🧑‍⚕️ 🧑🏻‍⚕️ 🧑🏼‍⚕️ 🧑🏽‍⚕️ 🧑🏾‍⚕️ 🧑🏿‍⚕️ 👨‍⚕️ 👨🏻‍⚕️ 👨🏼‍⚕️ 👨🏽‍⚕️ 👨🏾‍⚕️ 👨🏿‍⚕️ 👩‍⚕️ 👩🏻‍⚕️ 👩🏼‍⚕️ 👩🏽‍⚕️ 👩🏾‍⚕️ 👩🏿‍⚕️ 🧑‍🎓 🧑🏻‍🎓 🧑🏼‍🎓 🧑🏽‍🎓 🧑🏾‍🎓 🧑🏿‍🎓 👨‍🎓 👨🏻‍🎓 👨🏼‍🎓 👨🏽‍🎓 👨🏾‍🎓 👨🏿‍🎓 👩‍🎓 👩🏻‍🎓 👩🏼‍🎓 👩🏽‍🎓 👩🏾‍🎓 👩🏿‍🎓 🧑‍🏫 🧑🏻‍🏫 🧑🏼‍🏫 🧑🏽‍🏫 🧑🏾‍🏫 🧑🏿‍🏫 👨‍🏫 👨🏻‍🏫 👨🏼‍🏫 👨🏽‍🏫 👨🏾‍🏫 👨🏿‍🏫 👩‍🏫 👩🏻‍🏫 👩🏼‍🏫 👩🏽‍🏫 👩🏾‍🏫 👩🏿‍🏫 🧑‍⚖️ 🧑🏻‍⚖️ 🧑🏼‍⚖️ 🧑🏽‍⚖️ 🧑🏾‍⚖️ 🧑🏿‍⚖️ 👨‍⚖️ 👨🏻‍⚖️ 👨🏼‍⚖️ 👨🏽‍⚖️ 👨🏾‍⚖️ 👨🏿‍⚖️ 👩‍⚖️ 👩🏻‍⚖️ 👩🏼‍⚖️ 👩🏽‍⚖️ 👩🏾‍⚖️ 👩🏿‍⚖️ 🧑‍🌾 🧑🏻‍🌾 🧑🏼‍🌾 🧑🏽‍🌾 🧑🏾‍🌾 🧑🏿‍🌾 👨‍🌾 👨🏻‍🌾 👨🏼‍🌾 👨🏽‍🌾 👨🏾‍🌾 👨🏿‍🌾 👩‍🌾 👩🏻‍🌾 👩🏼‍🌾 👩🏽‍🌾 👩🏾‍🌾 👩🏿‍🌾 🧑‍🍳 🧑🏻‍🍳 🧑🏼‍🍳 🧑🏽‍🍳 🧑🏾‍🍳 🧑🏿‍🍳 👨‍🍳 👨🏻‍🍳 👨🏼‍🍳 👨🏽‍🍳 👨🏾‍🍳 👨🏿‍🍳 👩‍🍳 👩🏻‍🍳 👩🏼‍🍳 👩🏽‍🍳 👩🏾‍🍳 👩🏿‍🍳 🧑‍🔧 🧑🏻‍🔧 🧑🏼‍🔧 🧑🏽‍🔧 🧑🏾‍🔧 🧑🏿‍🔧 👨‍🔧 👨🏻‍🔧 👨🏼‍🔧 👨🏽‍🔧 👨🏾‍🔧 👨🏿‍🔧 👩‍🔧 👩🏻‍🔧 👩🏼‍🔧 👩🏽‍🔧 👩🏾‍🔧 👩🏿‍🔧 🧑‍🏭 🧑🏻‍🏭 🧑🏼‍🏭 🧑🏽‍🏭 🧑🏾‍🏭 🧑🏿‍🏭 👨‍🏭 👨🏻‍🏭 👨🏼‍🏭 👨🏽‍🏭 👨🏾‍🏭 👨🏿‍🏭 👩‍🏭 👩🏻‍🏭 👩🏼‍🏭 👩🏽‍🏭 👩🏾‍🏭 👩🏿‍🏭 🧑‍💼 🧑🏻‍💼 🧑🏼‍💼 🧑🏽‍💼 🧑🏾‍💼 🧑🏿‍💼 👨‍💼 👨🏻‍💼 👨🏼‍💼 👨🏽‍💼 👨🏾‍💼 👨🏿‍💼 👩‍💼 👩🏻‍💼 👩🏼‍💼 👩🏽‍💼 👩🏾‍💼 👩🏿‍💼 🧑‍🔬 🧑🏻‍🔬 🧑🏼‍🔬 🧑🏽‍🔬 🧑🏾‍🔬 🧑🏿‍🔬 👨‍🔬 👨🏻‍🔬 👨🏼‍🔬 👨🏽‍🔬 👨🏾‍🔬 👨🏿‍🔬 👩‍🔬 👩🏻‍🔬 👩🏼‍🔬 👩🏽‍🔬 👩🏾‍🔬 👩🏿‍🔬 🧑‍💻 🧑🏻‍💻 🧑🏼‍💻 🧑🏽‍💻 🧑🏾‍💻 🧑🏿‍💻 👨‍💻 👨🏻‍💻 👨🏼‍💻 👨🏽‍💻 👨🏾‍💻 👨🏿‍💻 👩‍💻 👩🏻‍💻 👩🏼‍💻 👩🏽‍💻 👩🏾‍💻 👩🏿‍💻 🧑‍🎤 🧑🏻‍🎤 🧑🏼‍🎤 🧑🏽‍🎤 🧑🏾‍🎤 🧑🏿‍🎤 👨‍🎤 👨🏻‍🎤 👨🏼‍🎤 👨🏽‍🎤 👨🏾‍🎤 👨🏿‍🎤 👩‍🎤 👩🏻‍🎤 👩🏼‍🎤 👩🏽‍🎤 👩🏾‍🎤 👩🏿‍🎤 🧑‍🎨 🧑🏻‍🎨 🧑🏼‍🎨 🧑🏽‍🎨 🧑🏾‍🎨 🧑🏿‍🎨 👨‍🎨 👨🏻‍🎨 👨🏼‍🎨 👨🏽‍🎨 👨🏾‍🎨 👨🏿‍🎨 👩‍🎨 👩🏻‍🎨 👩🏼‍🎨 👩🏽‍🎨 👩🏾‍🎨 👩🏿‍🎨 🧑‍✈️ 🧑🏻‍✈️ 🧑🏼‍✈️ 🧑🏽‍✈️ 🧑🏾‍✈️ 🧑🏿‍✈️ 👨‍✈️ 👨🏻‍✈️ 👨🏼‍✈️ 👨🏽‍✈️ 👨🏾‍✈️ 👨🏿‍✈️ 👩‍✈️ 👩🏻‍✈️ 👩🏼‍✈️ 👩🏽‍✈️ 👩🏾‍✈️ 👩🏿‍✈️ 🧑‍🚀 🧑🏻‍🚀 🧑🏼‍🚀 🧑🏽‍🚀 🧑🏾‍🚀 🧑🏿‍🚀 👨‍🚀 👨🏻‍🚀 👨🏼‍🚀 👨🏽‍🚀 👨🏾‍🚀 👨🏿‍🚀 👩‍🚀 👩🏻‍🚀 👩🏼‍🚀 👩🏽‍🚀 👩🏾‍🚀 👩🏿‍🚀 🧑‍🚒 🧑🏻‍🚒 🧑🏼‍🚒 🧑🏽‍🚒 🧑🏾‍🚒 🧑🏿‍🚒 👨‍🚒 👨🏻‍🚒 👨🏼‍🚒 👨🏽‍🚒 👨🏾‍🚒 👨🏿‍🚒 👩‍🚒 👩🏻‍🚒 👩🏼‍🚒 👩🏽‍🚒 👩🏾‍🚒 👩🏿‍🚒 👮‍♂️ 👮🏻‍♂️ 👮🏼‍♂️ 👮🏽‍♂️ 👮🏾‍♂️ 👮🏿‍♂️ 👮‍♀️ 👮🏻‍♀️ 👮🏼‍♀️ 👮🏽‍♀️ 👮🏾‍♀️ 👮🏿‍♀️ 🕵️‍♂️ 🕵🏻‍♂️ 🕵🏼‍♂️ 🕵🏽‍♂️ 🕵🏾‍♂️ 🕵🏿‍♂️ 🕵️‍♀️ 🕵🏻‍♀️ 🕵🏼‍♀️ 🕵🏽‍♀️ 🕵🏾‍♀️ 🕵🏿‍♀️ 💂‍♂️ 💂🏻‍♂️ 💂🏼‍♂️ 💂🏽‍♂️ 💂🏾‍♂️ 💂🏿‍♂️ 💂‍♀️ 💂🏻‍♀️ 💂🏼‍♀️ 💂🏽‍♀️ 💂🏾‍♀️ 💂🏿‍♀️ 👷‍♂️ 👷🏻‍♂️ 👷🏼‍♂️ 👷🏽‍♂️ 👷🏾‍♂️ 👷🏿‍♂️ 👷‍♀️ 👷🏻‍♀️ 👷🏼‍♀️ 👷🏽‍♀️ 👷🏾‍♀️ 👷🏿‍♀️ 👳‍♂️ 👳🏻‍♂️ 👳🏼‍♂️ 👳🏽‍♂️ 👳🏾‍♂️ 👳🏿‍♂️ 👳‍♀️ 👳🏻‍♀️ 👳🏼‍♀️ 👳🏽‍♀️ 👳🏾‍♀️ 👳🏿‍♀️ 🤵‍♂️ 🤵🏻‍♂️ 🤵🏼‍♂️ 🤵🏽‍♂️ 🤵🏾‍♂️ 🤵🏿‍♂️ 🤵‍♀️ 🤵🏻‍♀️ 🤵🏼‍♀️ 🤵🏽‍♀️ 🤵🏾‍♀️ 🤵🏿‍♀️ 👰‍♂️ 👰🏻‍♂️ 👰🏼‍♂️ 👰🏽‍♂️ 👰🏾‍♂️ 👰🏿‍♂️ 👰‍♀️ 👰🏻‍♀️ 👰🏼‍♀️ 👰🏽‍♀️ 👰🏾‍♀️ 👰🏿‍♀️ 👩‍🍼 👩🏻‍🍼 👩🏼‍🍼 👩🏽‍🍼 👩🏾‍🍼 👩🏿‍🍼 👨‍🍼 👨🏻‍🍼 👨🏼‍🍼 👨🏽‍🍼 👨🏾‍🍼 👨🏿‍🍼 🧑‍🍼 🧑🏻‍🍼 🧑🏼‍🍼 🧑🏽‍🍼 🧑🏾‍🍼 🧑🏿‍🍼 🧑‍🎄 🧑🏻‍🎄 🧑🏼‍🎄 🧑🏽‍🎄 🧑🏾‍🎄 🧑🏿‍🎄 🦸‍♂️ 🦸🏻‍♂️ 🦸🏼‍♂️ 🦸🏽‍♂️ 🦸🏾‍♂️ 🦸🏿‍♂️ 🦸‍♀️ 🦸🏻‍♀️ 🦸🏼‍♀️ 🦸🏽‍♀️ 🦸🏾‍♀️ 🦸🏿‍♀️ 🦹‍♂️ 🦹🏻‍♂️ 🦹🏼‍♂️ 🦹🏽‍♂️ 🦹🏾‍♂️ 🦹🏿‍♂️ 🦹‍♀️ 🦹🏻‍♀️ 🦹🏼‍♀️ 🦹🏽‍♀️ 🦹🏾‍♀️ 🦹🏿‍♀️ 🧙‍♂️ 🧙🏻‍♂️ 🧙🏼‍♂️ 🧙🏽‍♂️ 🧙🏾‍♂️ 🧙🏿‍♂️ 🧙‍♀️ 🧙🏻‍♀️ 🧙🏼‍♀️ 🧙🏽‍♀️ 🧙🏾‍♀️ 🧙🏿‍♀️ 🧚‍♂️ 🧚🏻‍♂️ 🧚🏼‍♂️ 🧚🏽‍♂️ 🧚🏾‍♂️ 🧚🏿‍♂️ 🧚‍♀️ 🧚🏻‍♀️ 🧚🏼‍♀️ 🧚🏽‍♀️ 🧚🏾‍♀️ 🧚🏿‍♀️ 🧛‍♂️ 🧛🏻‍♂️ 🧛🏼‍♂️ 🧛🏽‍♂️ 🧛🏾‍♂️ 🧛🏿‍♂️ 🧛‍♀️ 🧛🏻‍♀️ 🧛🏼‍♀️ 🧛🏽‍♀️ 🧛🏾‍♀️ 🧛🏿‍♀️ 🧜‍♂️ 🧜🏻‍♂️ 🧜🏼‍♂️ 🧜🏽‍♂️ 🧜🏾‍♂️ 🧜🏿‍♂️ 🧜‍♀️ 🧜🏻‍♀️ 🧜🏼‍♀️ 🧜🏽‍♀️ 🧜🏾‍♀️ 🧜🏿‍♀️ 🧝‍♂️ 🧝🏻‍♂️ 🧝🏼‍♂️ 🧝🏽‍♂️ 🧝🏾‍♂️ 🧝🏿‍♂️ 🧝‍♀️ 🧝🏻‍♀️ 🧝🏼‍♀️ 🧝🏽‍♀️ 🧝🏾‍♀️ 🧝🏿‍♀️ 🧞‍♂️ 🧞‍♀️ 🧟‍♂️ 🧟‍♀️ 💆‍♂️ 💆🏻‍♂️ 💆🏼‍♂️ 💆🏽‍♂️ 💆🏾‍♂️ 💆🏿‍♂️ 💆‍♀️ 💆🏻‍♀️ 💆🏼‍♀️ 💆🏽‍♀️ 💆🏾‍♀️ 💆🏿‍♀️ 💇‍♂️ 💇🏻‍♂️ 💇🏼‍♂️ 💇🏽‍♂️ 💇🏾‍♂️ 💇🏿‍♂️ 💇‍♀️ 💇🏻‍♀️ 💇🏼‍♀️ 💇🏽‍♀️ 💇🏾‍♀️ 💇🏿‍♀️ 🚶‍♂️ 🚶🏻‍♂️ 🚶🏼‍♂️ 🚶🏽‍♂️ 🚶🏾‍♂️ 🚶🏿‍♂️ 🚶‍♀️ 🚶🏻‍♀️ 🚶🏼‍♀️ 🚶🏽‍♀️ 🚶🏾‍♀️ 🚶🏿‍♀️ 🧍‍♂️ 🧍🏻‍♂️ 🧍🏼‍♂️ 🧍🏽‍♂️ 🧍🏾‍♂️ 🧍🏿‍♂️ 🧍‍♀️ 🧍🏻‍♀️ 🧍🏼‍♀️ 🧍🏽‍♀️ 🧍🏾‍♀️ 🧍🏿‍♀️ 🧎‍♂️ 🧎🏻‍♂️ 🧎🏼‍♂️ 🧎🏽‍♂️ 🧎🏾‍♂️ 🧎🏿‍♂️ 🧎‍♀️ 🧎🏻‍♀️ 🧎🏼‍♀️ 🧎🏽‍♀️ 🧎🏾‍♀️ 🧎🏿‍♀️ 🧑‍🦯 🧑🏻‍🦯 🧑🏼‍🦯 🧑🏽‍🦯 🧑🏾‍🦯 🧑🏿‍🦯 👨‍🦯 👨🏻‍🦯 👨🏼‍🦯 👨🏽‍🦯 👨🏾‍🦯 👨🏿‍🦯 👩‍🦯 👩🏻‍🦯 👩🏼‍🦯 👩🏽‍🦯 👩🏾‍🦯 👩🏿‍🦯 🧑‍🦼 🧑🏻‍🦼 🧑🏼‍🦼 🧑🏽‍🦼 🧑🏾‍🦼 🧑🏿‍🦼 👨‍🦼 👨🏻‍🦼 👨🏼‍🦼 👨🏽‍🦼 👨🏾‍🦼 👨🏿‍🦼 👩‍🦼 👩🏻‍🦼 👩🏼‍🦼 👩🏽‍🦼 👩🏾‍🦼 👩🏿‍🦼 🧑‍🦽 🧑🏻‍🦽 🧑🏼‍🦽 🧑🏽‍🦽 🧑🏾‍🦽 🧑🏿‍🦽 👨‍🦽 👨🏻‍🦽 👨🏼‍🦽 👨🏽‍🦽 👨🏾‍🦽 👨🏿‍🦽 👩‍🦽 👩🏻‍🦽 👩🏼‍🦽 👩🏽‍🦽 👩🏾‍🦽 👩🏿‍🦽 🏃‍♂️ 🏃🏻‍♂️ 🏃🏼‍♂️ 🏃🏽‍♂️ 🏃🏾‍♂️ 🏃🏿‍♂️ 🏃‍♀️ 🏃🏻‍♀️ 🏃🏼‍♀️ 🏃🏽‍♀️ 🏃🏾‍♀️ 🏃🏿‍♀️ 👯‍♂️ 👯‍♀️ 🧖‍♂️ 🧖🏻‍♂️ 🧖🏼‍♂️ 🧖🏽‍♂️ 🧖🏾‍♂️ 🧖🏿‍♂️ 🧖‍♀️ 🧖🏻‍♀️ 🧖🏼‍♀️ 🧖🏽‍♀️ 🧖🏾‍♀️ 🧖🏿‍♀️ 🧗‍♂️ 🧗🏻‍♂️ 🧗🏼‍♂️ 🧗🏽‍♂️ 🧗🏾‍♂️ 🧗🏿‍♂️ 🧗‍♀️ 🧗🏻‍♀️ 🧗🏼‍♀️ 🧗🏽‍♀️ 🧗🏾‍♀️ 🧗🏿‍♀️ 🏌️‍♂️ 🏌🏻‍♂️ 🏌🏼‍♂️ 🏌🏽‍♂️ 🏌🏾‍♂️ 🏌🏿‍♂️ 🏌️‍♀️ 🏌🏻‍♀️ 🏌🏼‍♀️ 🏌🏽‍♀️ 🏌🏾‍♀️ 🏌🏿‍♀️ 🏄‍♂️ 🏄🏻‍♂️ 🏄🏼‍♂️ 🏄🏽‍♂️ 🏄🏾‍♂️ 🏄🏿‍♂️ 🏄‍♀️ 🏄🏻‍♀️ 🏄🏼‍♀️ 🏄🏽‍♀️ 🏄🏾‍♀️ 🏄🏿‍♀️ 🚣‍♂️ 🚣🏻‍♂️ 🚣🏼‍♂️ 🚣🏽‍♂️ 🚣🏾‍♂️ 🚣🏿‍♂️ 🚣‍♀️ 🚣🏻‍♀️ 🚣🏼‍♀️ 🚣🏽‍♀️ 🚣🏾‍♀️ 🚣🏿‍♀️ 🏊‍♂️ 🏊🏻‍♂️ 🏊🏼‍♂️ 🏊🏽‍♂️ 🏊🏾‍♂️ 🏊🏿‍♂️ 🏊‍♀️ 🏊🏻‍♀️ 🏊🏼‍♀️ 🏊🏽‍♀️ 🏊🏾‍♀️ 🏊🏿‍♀️ ⛹️‍♂️ ⛹🏻‍♂️ ⛹🏼‍♂️ ⛹🏽‍♂️ ⛹🏾‍♂️ ⛹🏿‍♂️ ⛹️‍♀️ ⛹🏻‍♀️ ⛹🏼‍♀️ ⛹🏽‍♀️ ⛹🏾‍♀️ ⛹🏿‍♀️ 🏋️‍♂️ 🏋🏻‍♂️ 🏋🏼‍♂️ 🏋🏽‍♂️ 🏋🏾‍♂️ 🏋🏿‍♂️ 🏋️‍♀️ 🏋🏻‍♀️ 🏋🏼‍♀️ 🏋🏽‍♀️ 🏋🏾‍♀️ 🏋🏿‍♀️ 🚴‍♂️ 🚴🏻‍♂️ 🚴🏼‍♂️ 🚴🏽‍♂️ 🚴🏾‍♂️ 🚴🏿‍♂️ 🚴‍♀️ 🚴🏻‍♀️ 🚴🏼‍♀️ 🚴🏽‍♀️ 🚴🏾‍♀️ 🚴🏿‍♀️ 🚵‍♂️ 🚵🏻‍♂️ 🚵🏼‍♂️ 🚵🏽‍♂️ 🚵🏾‍♂️ 🚵🏿‍♂️ 🚵‍♀️ 🚵🏻‍♀️ 🚵🏼‍♀️ 🚵🏽‍♀️ 🚵🏾‍♀️ 🚵🏿‍♀️ 🤸‍♂️ 🤸🏻‍♂️ 🤸🏼‍♂️ 🤸🏽‍♂️ 🤸🏾‍♂️ 🤸🏿‍♂️ 🤸‍♀️ 🤸🏻‍♀️ 🤸🏼‍♀️ 🤸🏽‍♀️ 🤸🏾‍♀️ 🤸🏿‍♀️ 🤼‍♂️ 🤼‍♀️ 🤽‍♂️ 🤽🏻‍♂️ 🤽🏼‍♂️ 🤽🏽‍♂️ 🤽🏾‍♂️ 🤽🏿‍♂️ 🤽‍♀️ 🤽🏻‍♀️ 🤽🏼‍♀️ 🤽🏽‍♀️ 🤽🏾‍♀️ 🤽🏿‍♀️ 🤾‍♂️ 🤾🏻‍♂️ 🤾🏼‍♂️ 🤾🏽‍♂️ 🤾🏾‍♂️ 🤾🏿‍♂️ 🤾‍♀️ 🤾🏻‍♀️ 🤾🏼‍♀️ 🤾🏽‍♀️ 🤾🏾‍♀️ 🤾🏿‍♀️ 🤹‍♂️ 🤹🏻‍♂️ 🤹🏼‍♂️ 🤹🏽‍♂️ 🤹🏾‍♂️ 🤹🏿‍♂️ 🤹‍♀️ 🤹🏻‍♀️ 🤹🏼‍♀️ 🤹🏽‍♀️ 🤹🏾‍♀️ 🤹🏿‍♀️ 🧘‍♂️ 🧘🏻‍♂️ 🧘🏼‍♂️ 🧘🏽‍♂️ 🧘🏾‍♂️ 🧘🏿‍♂️ 🧘‍♀️ 🧘🏻‍♀️ 🧘🏼‍♀️ 🧘🏽‍♀️ 🧘🏾‍♀️ 🧘🏿‍♀️ 🧑‍🤝‍🧑 🧑🏻‍🤝‍🧑🏻 🧑🏻‍🤝‍🧑🏼 🧑🏻‍🤝‍🧑🏽 🧑🏻‍🤝‍🧑🏾 🧑🏻‍🤝‍🧑🏿 🧑🏼‍🤝‍🧑🏻 🧑🏼‍🤝‍🧑🏼 🧑🏼‍🤝‍🧑🏽 🧑🏼‍🤝‍🧑🏾 🧑🏼‍🤝‍🧑🏿 🧑🏽‍🤝‍🧑🏻 🧑🏽‍🤝‍🧑🏼 🧑🏽‍🤝‍🧑🏽 🧑🏽‍🤝‍🧑🏾 🧑🏽‍🤝‍🧑🏿 🧑🏾‍🤝‍🧑🏻 🧑🏾‍🤝‍🧑🏼 🧑🏾‍🤝‍🧑🏽 🧑🏾‍🤝‍🧑🏾 🧑🏾‍🤝‍🧑🏿 🧑🏿‍🤝‍🧑🏻 🧑🏿‍🤝‍🧑🏼 🧑🏿‍🤝‍🧑🏽 🧑🏿‍🤝‍🧑🏾 🧑🏿‍🤝‍🧑🏿 👩🏻‍🤝‍👩🏼 👩🏻‍🤝‍👩🏽 👩🏻‍🤝‍👩🏾 👩🏻‍🤝‍👩🏿 👩🏼‍🤝‍👩🏻 👩🏼‍🤝‍👩🏽 👩🏼‍🤝‍👩🏾 👩🏼‍🤝‍👩🏿 👩🏽‍🤝‍👩🏻 👩🏽‍🤝‍👩🏼 👩🏽‍🤝‍👩🏾 👩🏽‍🤝‍👩🏿 👩🏾‍🤝‍👩🏻 👩🏾‍🤝‍👩🏼 👩🏾‍🤝‍👩🏽 👩🏾‍🤝‍👩🏿 👩🏿‍🤝‍👩🏻 👩🏿‍🤝‍👩🏼 👩🏿‍🤝‍👩🏽 👩🏿‍🤝‍👩🏾 👩🏻‍🤝‍👨🏼 👩🏻‍🤝‍👨🏽 👩🏻‍🤝‍👨🏾 👩🏻‍🤝‍👨🏿 👩🏼‍🤝‍👨🏻 👩🏼‍🤝‍👨🏽 👩🏼‍🤝‍👨🏾 👩🏼‍🤝‍👨🏿 👩🏽‍🤝‍👨🏻 👩🏽‍🤝‍👨🏼 👩🏽‍🤝‍👨🏾 👩🏽‍🤝‍👨🏿 👩🏾‍🤝‍👨🏻 👩🏾‍🤝‍👨🏼 👩🏾‍🤝‍👨🏽 👩🏾‍🤝‍👨🏿 👩🏿‍🤝‍👨🏻 👩🏿‍🤝‍👨🏼 👩🏿‍🤝‍👨🏽 👩🏿‍🤝‍👨🏾 👨🏻‍🤝‍👨🏼 👨🏻‍🤝‍👨🏽 👨🏻‍🤝‍👨🏾 👨🏻‍🤝‍👨🏿 👨🏼‍🤝‍👨🏻 👨🏼‍🤝‍👨🏽 👨🏼‍🤝‍👨🏾 👨🏼‍🤝‍👨🏿 👨🏽‍🤝‍👨🏻 👨🏽‍🤝‍👨🏼 👨🏽‍🤝‍👨🏾 👨🏽‍🤝‍👨🏿 👨🏾‍🤝‍👨🏻 👨🏾‍🤝‍👨🏼 👨🏾‍🤝‍👨🏽 👨🏾‍🤝‍👨🏿 👨🏿‍🤝‍👨🏻 👨🏿‍🤝‍👨🏼 👨🏿‍🤝‍👨🏽 👨🏿‍🤝‍👨🏾 💏 🧑🏻‍❤️‍💋‍🧑🏼 🧑🏻‍❤️‍💋‍🧑🏽 🧑🏻‍❤️‍💋‍🧑🏾 🧑🏻‍❤️‍💋‍🧑🏿 🧑🏼‍❤️‍💋‍🧑🏻 🧑🏼‍❤️‍💋‍🧑🏽 🧑🏼‍❤️‍💋‍🧑🏾 🧑🏼‍❤️‍💋‍🧑🏿 🧑🏽‍❤️‍💋‍🧑🏻 🧑🏽‍❤️‍💋‍🧑🏼 🧑🏽‍❤️‍💋‍🧑🏾 🧑🏽‍❤️‍💋‍🧑🏿 🧑🏾‍❤️‍💋‍🧑🏻 🧑🏾‍❤️‍💋‍🧑🏼 🧑🏾‍❤️‍💋‍🧑🏽 🧑🏾‍❤️‍💋‍🧑🏿 🧑🏿‍❤️‍💋‍🧑🏻 🧑🏿‍❤️‍💋‍🧑🏼 🧑🏿‍❤️‍💋‍🧑🏽 🧑🏿‍❤️‍💋‍🧑🏾 👩‍❤️‍💋‍👨 👩🏻‍❤️‍💋‍👨🏻 👩🏻‍❤️‍💋‍👨🏼 👩🏻‍❤️‍💋‍👨🏽 👩🏻‍❤️‍💋‍👨🏾 👩🏻‍❤️‍💋‍👨🏿 👩🏼‍❤️‍💋‍👨🏻 👩🏼‍❤️‍💋‍👨🏼 👩🏼‍❤️‍💋‍👨🏽 👩🏼‍❤️‍💋‍👨🏾 👩🏼‍❤️‍💋‍👨🏿 👩🏽‍❤️‍💋‍👨🏻 👩🏽‍❤️‍💋‍👨🏼 👩🏽‍❤️‍💋‍👨🏽 👩🏽‍❤️‍💋‍👨🏾 👩🏽‍❤️‍💋‍👨🏿 👩🏾‍❤️‍💋‍👨🏻 👩🏾‍❤️‍💋‍👨🏼 👩🏾‍❤️‍💋‍👨🏽 👩🏾‍❤️‍💋‍👨🏾 👩🏾‍❤️‍💋‍👨🏿 👩🏿‍❤️‍💋‍👨🏻 👩🏿‍❤️‍💋‍👨🏼 👩🏿‍❤️‍💋‍👨🏽 👩🏿‍❤️‍💋‍👨🏾 👩🏿‍❤️‍💋‍👨🏿 👨‍❤️‍💋‍👨 👨🏻‍❤️‍💋‍👨🏻 👨🏻‍❤️‍💋‍👨🏼 👨🏻‍❤️‍💋‍👨🏽 👨🏻‍❤️‍💋‍👨🏾 👨🏻‍❤️‍💋‍👨🏿 👨🏼‍❤️‍💋‍👨🏻 👨🏼‍❤️‍💋‍👨🏼 👨🏼‍❤️‍💋‍👨🏽 👨🏼‍❤️‍💋‍👨🏾 👨🏼‍❤️‍💋‍👨🏿 👨🏽‍❤️‍💋‍👨🏻 👨🏽‍❤️‍💋‍👨🏼 👨🏽‍❤️‍💋‍👨🏽 👨🏽‍❤️‍💋‍👨🏾 👨🏽‍❤️‍💋‍👨🏿 👨🏾‍❤️‍💋‍👨🏻 👨🏾‍❤️‍💋‍👨🏼 👨🏾‍❤️‍💋‍👨🏽 👨🏾‍❤️‍💋‍👨🏾 👨🏾‍❤️‍💋‍👨🏿 👨🏿‍❤️‍💋‍👨🏻 👨🏿‍❤️‍💋‍👨🏼 👨🏿‍❤️‍💋‍👨🏽 👨🏿‍❤️‍💋‍👨🏾 👨🏿‍❤️‍💋‍👨🏿 👩‍❤️‍💋‍👩 👩🏻‍❤️‍💋‍👩🏻 👩🏻‍❤️‍💋‍👩🏼 👩🏻‍❤️‍💋‍👩🏽 👩🏻‍❤️‍💋‍👩🏾 👩🏻‍❤️‍💋‍👩🏿 👩🏼‍❤️‍💋‍👩🏻 👩🏼‍❤️‍💋‍👩🏼 👩🏼‍❤️‍💋‍👩🏽 👩🏼‍❤️‍💋‍👩🏾 👩🏼‍❤️‍💋‍👩🏿 👩🏽‍❤️‍💋‍👩🏻 👩🏽‍❤️‍💋‍👩🏼 👩🏽‍❤️‍💋‍👩🏽 👩🏽‍❤️‍💋‍👩🏾 👩🏽‍❤️‍💋‍👩🏿 👩🏾‍❤️‍💋‍👩🏻 👩🏾‍❤️‍💋‍👩🏼 👩🏾‍❤️‍💋‍👩🏽 👩🏾‍❤️‍💋‍👩🏾 👩🏾‍❤️‍💋‍👩🏿 👩🏿‍❤️‍💋‍👩🏻 👩🏿‍❤️‍💋‍👩🏼 👩🏿‍❤️‍💋‍👩🏽 👩🏿‍❤️‍💋‍👩🏾 👩🏿‍❤️‍💋‍👩🏿 💑 🧑🏻‍❤️‍🧑🏼 🧑🏻‍❤️‍🧑🏽 🧑🏻‍❤️‍🧑🏾 🧑🏻‍❤️‍🧑🏿 🧑🏼‍❤️‍🧑🏻 🧑🏼‍❤️‍🧑🏽 🧑🏼‍❤️‍🧑🏾 🧑🏼‍❤️‍🧑🏿 🧑🏽‍❤️‍🧑🏻 🧑🏽‍❤️‍🧑🏼 🧑🏽‍❤️‍🧑🏾 🧑🏽‍❤️‍🧑🏿 🧑🏾‍❤️‍🧑🏻 🧑🏾‍❤️‍🧑🏼 🧑🏾‍❤️‍🧑🏽 🧑🏾‍❤️‍🧑🏿 🧑🏿‍❤️‍🧑🏻 🧑🏿‍❤️‍🧑🏼 🧑🏿‍❤️‍🧑🏽 🧑🏿‍❤️‍🧑🏾 👩‍❤️‍👨 👩🏻‍❤️‍👨🏻 👩🏻‍❤️‍👨🏼 👩🏻‍❤️‍👨🏽 👩🏻‍❤️‍👨🏾 👩🏻‍❤️‍👨🏿 👩🏼‍❤️‍👨🏻 👩🏼‍❤️‍👨🏼 👩🏼‍❤️‍👨🏽 👩🏼‍❤️‍👨🏾 👩🏼‍❤️‍👨🏿 👩🏽‍❤️‍👨🏻 👩🏽‍❤️‍👨🏼 👩🏽‍❤️‍👨🏽 👩🏽‍❤️‍👨🏾 👩🏽‍❤️‍👨🏿 👩🏾‍❤️‍👨🏻 👩🏾‍❤️‍👨🏼 👩🏾‍❤️‍👨🏽 👩🏾‍❤️‍👨🏾 👩🏾‍❤️‍👨🏿 👩🏿‍❤️‍👨🏻 👩🏿‍❤️‍👨🏼 👩🏿‍❤️‍👨🏽 👩🏿‍❤️‍👨🏾 👩🏿‍❤️‍👨🏿 👨‍❤️‍👨 👨🏻‍❤️‍👨🏻 👨🏻‍❤️‍👨🏼 👨🏻‍❤️‍👨🏽 👨🏻‍❤️‍👨🏾 👨🏻‍❤️‍👨🏿 👨🏼‍❤️‍👨🏻 👨🏼‍❤️‍👨🏼 👨🏼‍❤️‍👨🏽 👨🏼‍❤️‍👨🏾 👨🏼‍❤️‍👨🏿 👨🏽‍❤️‍👨🏻 👨🏽‍❤️‍👨🏼 👨🏽‍❤️‍👨🏽 👨🏽‍❤️‍👨🏾 👨🏽‍❤️‍👨🏿 👨🏾‍❤️‍👨🏻 👨🏾‍❤️‍👨🏼 👨🏾‍❤️‍👨🏽 👨🏾‍❤️‍👨🏾 👨🏾‍❤️‍👨🏿 👨🏿‍❤️‍👨🏻 👨🏿‍❤️‍👨🏼 👨🏿‍❤️‍👨🏽 👨🏿‍❤️‍👨🏾 👨🏿‍❤️‍👨🏿 👩‍❤️‍👩 👩🏻‍❤️‍👩🏻 👩🏻‍❤️‍👩🏼 👩🏻‍❤️‍👩🏽 👩🏻‍❤️‍👩🏾 👩🏻‍❤️‍👩🏿 👩🏼‍❤️‍👩🏻 👩🏼‍❤️‍👩🏼 👩🏼‍❤️‍👩🏽 👩🏼‍❤️‍👩🏾 👩🏼‍❤️‍👩🏿 👩🏽‍❤️‍👩🏻 👩🏽‍❤️‍👩🏼 👩🏽‍❤️‍👩🏽 👩🏽‍❤️‍👩🏾 👩🏽‍❤️‍👩🏿 👩🏾‍❤️‍👩🏻 👩🏾‍❤️‍👩🏼 👩🏾‍❤️‍👩🏽 👩🏾‍❤️‍👩🏾 👩🏾‍❤️‍👩🏿 👩🏿‍❤️‍👩🏻 👩🏿‍❤️‍👩🏼 👩🏿‍❤️‍👩🏽 👩🏿‍❤️‍👩🏾 👩🏿‍❤️‍👩🏿 👪 👨‍👩‍👦 👨‍👩‍👧 👨‍👩‍👧‍👦 👨‍👩‍👦‍👦 👨‍👩‍👧‍👧 👨‍👨‍👦 👨‍👨‍👧 👨‍👨‍👧‍👦 👨‍👨‍👦‍👦 👨‍👨‍👧‍👧 👩‍👩‍👦 👩‍👩‍👧 👩‍👩‍👧‍👦 👩‍👩‍👦‍👦 👩‍👩‍👧‍👧 👨‍👦 👨‍👦‍👦 👨‍👧 👨‍👧‍👦 👨‍👧‍👧 👩‍👦 👩‍👦‍👦 👩‍👧 👩‍👧‍👦 👩‍👧‍👧 🐕‍🦺 🐈‍⬛ 🐻‍❄️ 🐦‍⬛ 🏳️‍🌈 🏳️‍⚧️ 🏴‍☠️ ",-1),H4={__name:"52",setup(e){const t={hide:!1,srcSequence:"./pages/04-quirks.md"};return L(z),(n,s)=>(v(),j(De,le(re(t)),{default:M(()=>[j4,W4]),_:1},16))}},V4=K(H4,[["__file","/@slidev/slides/52.md"]]),z4=o("h2",null,"Digraphs/ligatures",-1),K4=o("p",null,"Digraphs and ligatures are both made by combining two glyphs:",-1),G4=o("ul",null,[o("li",null,"In a digraph, the glyphs remain separate but are placed close together."),o("li",null,"In a ligature, the glyphs are fused into a single glyph.")],-1),Y4=o("p",null,"Generally speaking, Unicode doesn’t like dealing with this problem.",-1),Q4=o("blockquote",null,[o("p",null,[m("The Unicode Standard is a character encoding standard, and is "),o("strong",null,"not intended to standardize ligatures or other presentation forms"),m(", or any other aspects of the details of font and glyph design. The ligatures which you can find in the Unicode Standard are "),o("strong",null,"compatibility encodings"),m(" only—and are not meant to set a precedent requiring the encoding of all ligatures as characters.")])],-1),Z4=o("p",null,"TL;DR; you shouldn’t expect any ligatures/digraphs to be added to Unicode any time soon.",-1),J4={__name:"53",setup(e){const t={hide:!1,srcSequence:"./pages/04-quirks.md"};return L(z),(n,s)=>(v(),j(De,le(re(t)),{default:M(()=>[z4,K4,G4,Y4,Q4,Z4]),_:1},16))}},X4=K(J4,[["__file","/@slidev/slides/53.md"]]),eT=o("h2",null,"Flags",-1),tT=o("ul",null,[o("li",null,[o("p",null,"Who adds a new flag?")]),o("li",null,[o("p",null,"Flag sequences"),o("ul",null,[o("li",null,":RGI_Emoji_Flag_Sequence"),o("li",null,[o("a",{href:"https://unicode.org/reports/tr51/#Flags",target:"_blank",rel:"noopener"},"https://unicode.org/reports/tr51/#Flags")]),o("li",null,"Qatar flag = wideboi")])]),o("li",null,[o("p",null,'"🇭🇪🇱🇱🇴🇼🇴🇷🇱🇩" ??')])],-1),nT=o("p",null,"Flag types:",-1),sT=o("ul",null,[o("li",null,"country/region"),o("li",null,"local (gbeng, etc)")],-1),oT={__name:"54",setup(e){const t={hide:!1,srcSequence:"./pages/04-quirks.md"};return L(z),(n,s)=>(v(),j(De,le(re(t)),{default:M(()=>[eT,tT,nT,sT]),_:1},16))}},rT=K(oT,[["__file","/@slidev/slides/54.md"]]),iT=o("h2",null,"Unicode Tags",-1),lT=o("pre",{class:"shiki-container"},[o("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[o("code",null,[o("span",{class:"line"},[o("span",{style:{color:"#4D9375"}},"fn"),o("span",{style:{color:"#DBD7CA"}}," "),o("span",{style:{color:"#A1B567"}},"main"),o("span",{style:{color:"#858585"}},"()"),o("span",{style:{color:"#DBD7CA"}}," "),o("span",{style:{color:"#858585"}},"{")]),m(`
`),o("span",{class:"line"},[o("span",{style:{color:"#DBD7CA"}},"    "),o("span",{style:{color:"#CB7676"}},"let"),o("span",{style:{color:"#DBD7CA"}}," "),o("span",{style:{color:"#B8A965"}},"encoded"),o("span",{style:{color:"#DBD7CA"}}," "),o("span",{style:{color:"#CB7676"}},"="),o("span",{style:{color:"#DBD7CA"}}," "),o("span",{style:{color:"#C98A7D"}},'"Hello󠀠󠁒󠁵󠁳󠁴 Meetup Amsterdam!"'),o("span",{style:{color:"#858585"}},";")]),m(`
`),o("span",{class:"line"}),m(`
`),o("span",{class:"line"},[o("span",{style:{color:"#DBD7CA"}},"    "),o("span",{style:{color:"#A1B567"}},"println!"),o("span",{style:{color:"#858585"}},"("),o("span",{style:{color:"#C98A7D"}},'"'),o("span",{style:{color:"#858585"}},"{}"),o("span",{style:{color:"#C98A7D"}},'"'),o("span",{style:{color:"#858585"}},","),o("span",{style:{color:"#DBD7CA"}}," "),o("span",{style:{color:"#B8A965"}},"encoded"),o("span",{style:{color:"#858585"}},");")]),m(`
`),o("span",{class:"line"},[o("span",{style:{color:"#758575"}},'    //println!("{:?}", encoded);')]),m(`
`),o("span",{class:"line"}),m(`
`),o("span",{class:"line"},[o("span",{style:{color:"#758575"}},"    //let codepoints: Vec<u32> = encoded.chars().map(|c| c.into()).collect();")]),m(`
`),o("span",{class:"line"},[o("span",{style:{color:"#758575"}},'    //println!("{:X?}", codepoints);')]),m(`
`),o("span",{class:"line"}),m(`
`),o("span",{class:"line"},[o("span",{style:{color:"#758575"}},"    //let offset: u32 = 0xE0000;")]),m(`
`),o("span",{class:"line"}),m(`
`),o("span",{class:"line"},[o("span",{style:{color:"#758575"}},"    //let decoded: String = encoded")]),m(`
`),o("span",{class:"line"},[o("span",{style:{color:"#758575"}},"    //    .chars()")]),m(`
`),o("span",{class:"line"},[o("span",{style:{color:"#758575"}},"    //    .map(|c| match c {")]),m(`
`),o("span",{class:"line"},[o("span",{style:{color:"#758575"}},"    //        '\\u{e0000}'..='\\u{e007F}' => {")]),m(`
`),o("span",{class:"line"},[o("span",{style:{color:"#758575"}},"    //            let char_u32: u32 = c.into();")]),m(`
`),o("span",{class:"line"},[o("span",{style:{color:"#758575"}},"    //            std::char::from_u32(char_u32 - offset).unwrap()")]),m(`
`),o("span",{class:"line"},[o("span",{style:{color:"#758575"}},"    //        },")]),m(`
`),o("span",{class:"line"},[o("span",{style:{color:"#758575"}},"    //        _ => c,")]),m(`
`),o("span",{class:"line"},[o("span",{style:{color:"#758575"}},"    //    })")]),m(`
`),o("span",{class:"line"},[o("span",{style:{color:"#758575"}},"    //    .collect();")]),m(`
`),o("span",{class:"line"}),m(`
`),o("span",{class:"line"},[o("span",{style:{color:"#758575"}},'    //println!("{:?}", decoded);')]),m(`
`),o("span",{class:"line"},[o("span",{style:{color:"#858585"}},"}")])])]),o("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[o("code",null,[o("span",{class:"line"},[o("span",{style:{color:"#1C6B48"}},"fn"),o("span",{style:{color:"#393A34"}}," "),o("span",{style:{color:"#6C7834"}},"main"),o("span",{style:{color:"#8E8F8B"}},"()"),o("span",{style:{color:"#393A34"}}," "),o("span",{style:{color:"#8E8F8B"}},"{")]),m(`
`),o("span",{class:"line"},[o("span",{style:{color:"#393A34"}},"    "),o("span",{style:{color:"#AB5959"}},"let"),o("span",{style:{color:"#393A34"}}," "),o("span",{style:{color:"#8C862B"}},"encoded"),o("span",{style:{color:"#393A34"}}," "),o("span",{style:{color:"#AB5959"}},"="),o("span",{style:{color:"#393A34"}}," "),o("span",{style:{color:"#B56959"}},'"Hello󠀠󠁒󠁵󠁳󠁴 Meetup Amsterdam!"'),o("span",{style:{color:"#8E8F8B"}},";")]),m(`
`),o("span",{class:"line"}),m(`
`),o("span",{class:"line"},[o("span",{style:{color:"#393A34"}},"    "),o("span",{style:{color:"#6C7834"}},"println!"),o("span",{style:{color:"#8E8F8B"}},"("),o("span",{style:{color:"#B56959"}},'"'),o("span",{style:{color:"#8E8F8B"}},"{}"),o("span",{style:{color:"#B56959"}},'"'),o("span",{style:{color:"#8E8F8B"}},","),o("span",{style:{color:"#393A34"}}," "),o("span",{style:{color:"#8C862B"}},"encoded"),o("span",{style:{color:"#8E8F8B"}},");")]),m(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A0ADA0"}},'    //println!("{:?}", encoded);')]),m(`
`),o("span",{class:"line"}),m(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A0ADA0"}},"    //let codepoints: Vec<u32> = encoded.chars().map(|c| c.into()).collect();")]),m(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A0ADA0"}},'    //println!("{:X?}", codepoints);')]),m(`
`),o("span",{class:"line"}),m(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A0ADA0"}},"    //let offset: u32 = 0xE0000;")]),m(`
`),o("span",{class:"line"}),m(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A0ADA0"}},"    //let decoded: String = encoded")]),m(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A0ADA0"}},"    //    .chars()")]),m(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A0ADA0"}},"    //    .map(|c| match c {")]),m(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A0ADA0"}},"    //        '\\u{e0000}'..='\\u{e007F}' => {")]),m(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A0ADA0"}},"    //            let char_u32: u32 = c.into();")]),m(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A0ADA0"}},"    //            std::char::from_u32(char_u32 - offset).unwrap()")]),m(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A0ADA0"}},"    //        },")]),m(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A0ADA0"}},"    //        _ => c,")]),m(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A0ADA0"}},"    //    })")]),m(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A0ADA0"}},"    //    .collect();")]),m(`
`),o("span",{class:"line"}),m(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A0ADA0"}},'    //println!("{:?}", decoded);')]),m(`
`),o("span",{class:"line"},[o("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),aT=o("p",null,[o("a",{href:"https://www.compart.com/en/unicode/block/U+E0000",target:"_blank",rel:"noopener"},"https://www.compart.com/en/unicode/block/U+E0000")],-1),cT={__name:"55",setup(e){const t={hide:!1,srcSequence:"./pages/04-quirks.md"};return L(z),(n,s)=>{const r=Gs;return v(),j(De,le(re(t)),{default:M(()=>[iT,H(r,mt({},{ranges:[""]}),{default:M(()=>[lT]),_:1},16),aT]),_:1},16)}}},uT=K(cT,[["__file","/@slidev/slides/55.md"]]),dT=o("h1",null,"THE END",-1),pT={__name:"56",setup(e){const t={layout:"cover",hideInToc:!0};return L(z),(n,s)=>(v(),j(Ks,le(re(t)),{default:M(()=>[dT]),_:1},16))}},fT=K(pT,[["__file","/@slidev/slides/56.md"]]),hT=[{path:"1",name:"page-1",component:x2,meta:{theme:"seriph",background:"https://source.unsplash.com/collection/94734566/1920x1080",class:"text-center",highlighter:"shiki",lineNumbers:!0,info:`## Unicode, Rust, quirks, and way too much detail.
`,drawings:{persist:!1},transition:"slide-left",title:"Demystifying Unicode",hideInToc:!0,slide:{raw:`---
theme: seriph
background: https://source.unsplash.com/collection/94734566/1920x1080
class: text-center
highlighter: shiki
lineNumbers: true
info: |
  ## Unicode, Rust, quirks, and way too much detail.
drawings:
  persist: false
transition: slide-left
title: Demystifying Unicode 
hideInToc: true
---

# Demystifying Unicode

Unicode, Rust, quirks, and way too much detail.
`,title:"Demystifying Unicode",content:`# Demystifying Unicode

Unicode, Rust, quirks, and way too much detail.`,frontmatter:{theme:"seriph",background:"https://source.unsplash.com/collection/94734566/1920x1080",class:"text-center",highlighter:"shiki",lineNumbers:!0,info:`## Unicode, Rust, quirks, and way too much detail.
`,drawings:{persist:!1},transition:"slide-left",title:"Demystifying Unicode",hideInToc:!0},index:0,start:0,end:19,noteHTML:"",filepath:"/home/ben/Workspace/demystifying-unicode/slides.md",id:0,no:1},__clicksElements:[],__preloaded:!1}},{path:"2",name:"page-2",component:E2,meta:{hideInToc:!0,slide:{raw:`---
hideInToc: true
---

# Some sorta outline

- We learn some things about Computers
- Then, some things about unicode
- And, some things about unicode in rust
- Some things you only need to know when you need to know
`,title:"Some sorta outline",level:1,content:`# Some sorta outline

- We learn some things about Computers
- Then, some things about unicode
- And, some things about unicode in rust
- Some things you only need to know when you need to know`,frontmatter:{hideInToc:!0},index:1,start:19,end:30,noteHTML:"",filepath:"/home/ben/Workspace/demystifying-unicode/slides.md",id:1,no:2},__clicksElements:[],__preloaded:!1}},{path:"3",name:"page-3",component:zA,meta:{hideInToc:!0,slide:{raw:`---
hideInToc: true
---

# Table of contents

<Toc maxDepth="1"></Toc>
`,title:"Table of contents",level:1,content:`# Table of contents

<Toc maxDepth="1"></Toc>`,frontmatter:{hideInToc:!0},index:2,start:30,end:38,noteHTML:"",filepath:"/home/ben/Workspace/demystifying-unicode/slides.md",id:2,no:3},__clicksElements:[],__preloaded:!1}},{path:"4",name:"page-4",component:YA,meta:{layout:"cover",title:"History",hide:!1,srcSequence:"./pages/01-history.md",slide:{raw:null,title:"History",level:1,content:"# History",frontmatter:{layout:"cover",title:"History",hide:!1,srcSequence:"./pages/01-history.md"},index:3,start:0,end:6,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/01-history.md",raw:`---
layout: cover
---

# History
`,title:"History",level:1,content:"# History",frontmatter:{layout:"cover",title:"History"},index:0,start:0,end:6},inline:{raw:`---
src: ./pages/01-history.md
hide: false
---
`,content:"",frontmatter:{hide:!1},index:3,start:38,end:43},filepath:"/home/ben/Workspace/demystifying-unicode/pages/01-history.md",noteHTML:"",id:3,no:4},__clicksElements:[],__preloaded:!1}},{path:"5",name:"page-5",component:n5,meta:{hide:!1,srcSequence:"./pages/01-history.md",slide:{raw:`
## A bit (🥁鈸) of fundamentals

<div class="mt-5">

> Computers represent information as 1's and 0's
> - Literally everyone, since forever

</div>

<v-clicks>

Multiple bits can be put together to make different structures.

Those structures are inherently computer orientated - not human orientated:

- 8 bits makes a byte
- 4/8 bytes makes a word on 32/64 bit architectures respectively
  
  <sup>(last you'll heard of "words" in this presentation)</sup>

</v-clicks>

<!--

👆 Although unimportant for this talk, these things are the main language of a computer, bits, bytes, words. Compilers compile our code, so we can make more __human__ structures. Often the compilers optimise our code for thigns the computer understands.

-->
`,title:"A bit (🥁鈸) of fundamentals",level:2,content:`## A bit (🥁鈸) of fundamentals

<div class="mt-5">

> Computers represent information as 1's and 0's
> - Literally everyone, since forever

</div>

<v-clicks>

Multiple bits can be put together to make different structures.

Those structures are inherently computer orientated - not human orientated:

- 8 bits makes a byte
- 4/8 bytes makes a word on 32/64 bit architectures respectively
  
  <sup>(last you'll heard of "words" in this presentation)</sup>

</v-clicks>`,frontmatter:{hide:!1,srcSequence:"./pages/01-history.md"},note:"👆 Although unimportant for this talk, these things are the main language of a computer, bits, bytes, words. Compilers compile our code, so we can make more __human__ structures. Often the compilers optimise our code for thigns the computer understands.",index:4,start:7,end:36,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/01-history.md",raw:`
## A bit (🥁鈸) of fundamentals

<div class="mt-5">

> Computers represent information as 1's and 0's
> - Literally everyone, since forever

</div>

<v-clicks>

Multiple bits can be put together to make different structures.

Those structures are inherently computer orientated - not human orientated:

- 8 bits makes a byte
- 4/8 bytes makes a word on 32/64 bit architectures respectively
  
  <sup>(last you'll heard of "words" in this presentation)</sup>

</v-clicks>

<!--

👆 Although unimportant for this talk, these things are the main language of a computer, bits, bytes, words. Compilers compile our code, so we can make more __human__ structures. Often the compilers optimise our code for thigns the computer understands.

-->
`,title:"A bit (🥁鈸) of fundamentals",level:2,content:`## A bit (🥁鈸) of fundamentals

<div class="mt-5">

> Computers represent information as 1's and 0's
> - Literally everyone, since forever

</div>

<v-clicks>

Multiple bits can be put together to make different structures.

Those structures are inherently computer orientated - not human orientated:

- 8 bits makes a byte
- 4/8 bytes makes a word on 32/64 bit architectures respectively
  
  <sup>(last you'll heard of "words" in this presentation)</sup>

</v-clicks>`,frontmatter:{},note:"👆 Although unimportant for this talk, these things are the main language of a computer, bits, bytes, words. Compilers compile our code, so we can make more __human__ structures. Often the compilers optimise our code for thigns the computer understands.",index:1,start:7,end:36},filepath:"/home/ben/Workspace/demystifying-unicode/pages/01-history.md",noteHTML:`<p>👆 Although unimportant for this talk, these things are the main language of a computer, bits, bytes, words. Compilers compile our code, so we can make more <strong>human</strong> structures. Often the compilers optimise our code for thigns the computer understands.</p>
`,id:4,no:5},__clicksElements:[],__preloaded:!1}},{path:"6",name:"page-6",component:u5,meta:{hide:!1,srcSequence:"./pages/01-history.md",slide:{raw:`
## Abstraction

<div class="mt-5">

> Let's make an abstraction so we can understand things better
> - Literally every developer, since forever

</div>

\`C\` abstracted things a little further:

<v-clicks>

- \`bool\` is a 1 bit
- \`char\` is a 8 bits
- \`int\` is ambiguous
  
  More common "nowadays": \`uint8_t\`, \`uint32_t\`, \`int8_t\`, etc
- \`long\` also ambiguous, but >= \`int\`

</v-clicks>

<v-click>

But - what really __is__ a \`char\`?

And what really are characters?

</v-click>
`,title:"Abstraction",level:2,content:`## Abstraction

<div class="mt-5">

> Let's make an abstraction so we can understand things better
> - Literally every developer, since forever

</div>

\`C\` abstracted things a little further:

<v-clicks>

- \`bool\` is a 1 bit
- \`char\` is a 8 bits
- \`int\` is ambiguous
  
  More common "nowadays": \`uint8_t\`, \`uint32_t\`, \`int8_t\`, etc
- \`long\` also ambiguous, but >= \`int\`

</v-clicks>

<v-click>

But - what really __is__ a \`char\`?

And what really are characters?

</v-click>`,frontmatter:{hide:!1,srcSequence:"./pages/01-history.md"},index:5,start:37,end:68,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/01-history.md",raw:`
## Abstraction

<div class="mt-5">

> Let's make an abstraction so we can understand things better
> - Literally every developer, since forever

</div>

\`C\` abstracted things a little further:

<v-clicks>

- \`bool\` is a 1 bit
- \`char\` is a 8 bits
- \`int\` is ambiguous
  
  More common "nowadays": \`uint8_t\`, \`uint32_t\`, \`int8_t\`, etc
- \`long\` also ambiguous, but >= \`int\`

</v-clicks>

<v-click>

But - what really __is__ a \`char\`?

And what really are characters?

</v-click>
`,title:"Abstraction",level:2,content:`## Abstraction

<div class="mt-5">

> Let's make an abstraction so we can understand things better
> - Literally every developer, since forever

</div>

\`C\` abstracted things a little further:

<v-clicks>

- \`bool\` is a 1 bit
- \`char\` is a 8 bits
- \`int\` is ambiguous
  
  More common "nowadays": \`uint8_t\`, \`uint32_t\`, \`int8_t\`, etc
- \`long\` also ambiguous, but >= \`int\`

</v-clicks>

<v-click>

But - what really __is__ a \`char\`?

And what really are characters?

</v-click>`,frontmatter:{},index:2,start:37,end:68},filepath:"/home/ben/Workspace/demystifying-unicode/pages/01-history.md",noteHTML:"",id:5,no:6},__clicksElements:[],__preloaded:!1}},{path:"7",name:"page-7",component:v5,meta:{hide:!1,srcSequence:"./pages/01-history.md",slide:{raw:`
## Abstract? ABSTRACT!

Quiz time - what does this say:

\`\`\`
01001000 01100101 01101100 01101100 01101111 00100000
01010111 01101111 01110010 01101100 01100100 00100001
\`\`\`

<v-click>

\`00100000\` = \`0x20\` = \` \`
<span class="pl-15">
\`00100001\` = \`0x21\` = \`!\`
</span>

</v-click>

<v-click>

<hr />

\`\`\`
0100 1000  =  0x48  =  'H'
0110 0101  =  0x65  =  'e'
0110 1100  =  0x6c  =  'l'
0110 1100  =  0x6c  =  'l'
0110 1111  =  0x6f  =  'o'
0010 0000  =  0x20  =  ' '
0101 0111  =  0x57  =  'W'
0110 1111  =  0x6f  =  'o'
0111 0010  =  0x72  =  'r'
0110 1100  =  0x6c  =  'l'
0110 0100  =  0x64  =  'd'
0010 0001  =  0x21  =  '!'
\`\`\`

</v-click>

<!--
When I think of a "character" I think of "Something a human can read". This text is made up of characters because we understand what each of the letters mean. We share that knowledge.
-->
`,title:"Abstract? ABSTRACT!",level:2,content:`## Abstract? ABSTRACT!

Quiz time - what does this say:

\`\`\`
01001000 01100101 01101100 01101100 01101111 00100000
01010111 01101111 01110010 01101100 01100100 00100001
\`\`\`

<v-click>

\`00100000\` = \`0x20\` = \` \`
<span class="pl-15">
\`00100001\` = \`0x21\` = \`!\`
</span>

</v-click>

<v-click>

<hr />

\`\`\`
0100 1000  =  0x48  =  'H'
0110 0101  =  0x65  =  'e'
0110 1100  =  0x6c  =  'l'
0110 1100  =  0x6c  =  'l'
0110 1111  =  0x6f  =  'o'
0010 0000  =  0x20  =  ' '
0101 0111  =  0x57  =  'W'
0110 1111  =  0x6f  =  'o'
0111 0010  =  0x72  =  'r'
0110 1100  =  0x6c  =  'l'
0110 0100  =  0x64  =  'd'
0010 0001  =  0x21  =  '!'
\`\`\`

</v-click>`,frontmatter:{hide:!1,srcSequence:"./pages/01-history.md"},note:'When I think of a "character" I think of "Something a human can read". This text is made up of characters because we understand what each of the letters mean. We share that knowledge.',index:6,start:69,end:113,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/01-history.md",raw:`
## Abstract? ABSTRACT!

Quiz time - what does this say:

\`\`\`
01001000 01100101 01101100 01101100 01101111 00100000
01010111 01101111 01110010 01101100 01100100 00100001
\`\`\`

<v-click>

\`00100000\` = \`0x20\` = \` \`
<span class="pl-15">
\`00100001\` = \`0x21\` = \`!\`
</span>

</v-click>

<v-click>

<hr />

\`\`\`
0100 1000  =  0x48  =  'H'
0110 0101  =  0x65  =  'e'
0110 1100  =  0x6c  =  'l'
0110 1100  =  0x6c  =  'l'
0110 1111  =  0x6f  =  'o'
0010 0000  =  0x20  =  ' '
0101 0111  =  0x57  =  'W'
0110 1111  =  0x6f  =  'o'
0111 0010  =  0x72  =  'r'
0110 1100  =  0x6c  =  'l'
0110 0100  =  0x64  =  'd'
0010 0001  =  0x21  =  '!'
\`\`\`

</v-click>

<!--
When I think of a "character" I think of "Something a human can read". This text is made up of characters because we understand what each of the letters mean. We share that knowledge.
-->
`,title:"Abstract? ABSTRACT!",level:2,content:`## Abstract? ABSTRACT!

Quiz time - what does this say:

\`\`\`
01001000 01100101 01101100 01101100 01101111 00100000
01010111 01101111 01110010 01101100 01100100 00100001
\`\`\`

<v-click>

\`00100000\` = \`0x20\` = \` \`
<span class="pl-15">
\`00100001\` = \`0x21\` = \`!\`
</span>

</v-click>

<v-click>

<hr />

\`\`\`
0100 1000  =  0x48  =  'H'
0110 0101  =  0x65  =  'e'
0110 1100  =  0x6c  =  'l'
0110 1100  =  0x6c  =  'l'
0110 1111  =  0x6f  =  'o'
0010 0000  =  0x20  =  ' '
0101 0111  =  0x57  =  'W'
0110 1111  =  0x6f  =  'o'
0111 0010  =  0x72  =  'r'
0110 1100  =  0x6c  =  'l'
0110 0100  =  0x64  =  'd'
0010 0001  =  0x21  =  '!'
\`\`\`

</v-click>`,frontmatter:{},note:'When I think of a "character" I think of "Something a human can read". This text is made up of characters because we understand what each of the letters mean. We share that knowledge.',index:3,start:69,end:113},filepath:"/home/ben/Workspace/demystifying-unicode/pages/01-history.md",noteHTML:`<p>When I think of a &quot;character&quot; I think of &quot;Something a human can read&quot;. This text is made up of characters because we understand what each of the letters mean. We share that knowledge.</p>
`,id:6,no:7},__clicksElements:[],__preloaded:!1}},{path:"8",name:"page-8",component:S5,meta:{layout:"center",hide:!1,srcSequence:"./pages/01-history.md",slide:{raw:`---
layout: center
---

<div class="flex flex-col">

<img src="/standards.png" class="center"/>

<p class="text-3">
Alt: Fortunately, the charging one has been solved now that we've all standardized on mini-USB. Or is it micro-USB? Shit.
</p>

</div>

<footer>

Source: https://xkcd.com/927/

</footer>

<!--

When we open up to interpretation as with a certain bit sequence meaning "H", then we open ourselves to standards. Mo standards, mo problems.

-->
`,content:`<div class="flex flex-col">

<img src="/standards.png" class="center"/>

<p class="text-3">
Alt: Fortunately, the charging one has been solved now that we've all standardized on mini-USB. Or is it micro-USB? Shit.
</p>

</div>

<footer>

Source: https://xkcd.com/927/

</footer>`,frontmatter:{layout:"center",hide:!1,srcSequence:"./pages/01-history.md"},note:'When we open up to interpretation as with a certain bit sequence meaning "H", then we open ourselves to standards. Mo standards, mo problems.',index:7,start:113,end:139,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/01-history.md",raw:`---
layout: center
---

<div class="flex flex-col">

<img src="/standards.png" class="center"/>

<p class="text-3">
Alt: Fortunately, the charging one has been solved now that we've all standardized on mini-USB. Or is it micro-USB? Shit.
</p>

</div>

<footer>

Source: https://xkcd.com/927/

</footer>

<!--

When we open up to interpretation as with a certain bit sequence meaning "H", then we open ourselves to standards. Mo standards, mo problems.

-->
`,content:`<div class="flex flex-col">

<img src="/standards.png" class="center"/>

<p class="text-3">
Alt: Fortunately, the charging one has been solved now that we've all standardized on mini-USB. Or is it micro-USB? Shit.
</p>

</div>

<footer>

Source: https://xkcd.com/927/

</footer>`,frontmatter:{layout:"center"},note:'When we open up to interpretation as with a certain bit sequence meaning "H", then we open ourselves to standards. Mo standards, mo problems.',index:4,start:113,end:139},filepath:"/home/ben/Workspace/demystifying-unicode/pages/01-history.md",noteHTML:`<p>When we open up to interpretation as with a certain bit sequence meaning &quot;H&quot;, then we open ourselves to standards. Mo standards, mo problems.</p>
`,id:7,no:8},__clicksElements:[],__preloaded:!1}},{path:"9",name:"page-9",component:O5,meta:{hide:!1,srcSequence:"./pages/01-history.md",slide:{raw:`
## Competing standards

- ~~ANSI (American National Standards Institue) Characters~~ Windows code pages, Code Page 437
- ASCII (American Standard Code for Information Interchange) Characters

<div v-click class="mt-10">

\`\`\`
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫ Cool "App" 3000 ┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃                                                                                     ┃ 
┃                                                                                     ┃ 
┃                                                                                     ┃ 
┃                                                                                     ┃ 
┃                    ┏━━━━━━━━━━━━━━━━━━┫ Prompt ┣━━━━━━━━━━━━━━━━┓                   ┃
┃                    ┃                                            ┃                   ┃ 
┃                    ┃ DO YOU WANT YOUR LANGAUGE TO BE SUPPORTED? ┃                   ┃
┃                    ┃                                            ┃                   ┃
┃                    ┗━━━━━━━━━━━━━━━━━━┫ No ┣━┫ >Nah not even< ┣━┛                   ┃
┃                                                                                     ┃ 
┃                                                                                     ┃ 
┃                                                                                     ┃ 
┃                                                                                     ┃ 
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
\`\`\`

🙇 IBM - You helped us draw instead of supporting languages.

</div>

<!--
ANSI Characters aren't actually a thing. When people use this term, they are refering to the windows code pages.

Quiz: How many bits is an ascii character?

IBM437: https://www.compart.com/en/unicode/charsets/IBM437
-->
`,title:"Competing standards",level:2,content:`## Competing standards

- ~~ANSI (American National Standards Institue) Characters~~ Windows code pages, Code Page 437
- ASCII (American Standard Code for Information Interchange) Characters

<div v-click class="mt-10">

\`\`\`
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫ Cool "App" 3000 ┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃                                                                                     ┃ 
┃                                                                                     ┃ 
┃                                                                                     ┃ 
┃                                                                                     ┃ 
┃                    ┏━━━━━━━━━━━━━━━━━━┫ Prompt ┣━━━━━━━━━━━━━━━━┓                   ┃
┃                    ┃                                            ┃                   ┃ 
┃                    ┃ DO YOU WANT YOUR LANGAUGE TO BE SUPPORTED? ┃                   ┃
┃                    ┃                                            ┃                   ┃
┃                    ┗━━━━━━━━━━━━━━━━━━┫ No ┣━┫ >Nah not even< ┣━┛                   ┃
┃                                                                                     ┃ 
┃                                                                                     ┃ 
┃                                                                                     ┃ 
┃                                                                                     ┃ 
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
\`\`\`

🙇 IBM - You helped us draw instead of supporting languages.

</div>`,frontmatter:{hide:!1,srcSequence:"./pages/01-history.md"},note:`ANSI Characters aren't actually a thing. When people use this term, they are refering to the windows code pages.

Quiz: How many bits is an ascii character?

IBM437: https://www.compart.com/en/unicode/charsets/IBM437`,index:8,start:140,end:178,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/01-history.md",raw:`
## Competing standards

- ~~ANSI (American National Standards Institue) Characters~~ Windows code pages, Code Page 437
- ASCII (American Standard Code for Information Interchange) Characters

<div v-click class="mt-10">

\`\`\`
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫ Cool "App" 3000 ┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃                                                                                     ┃ 
┃                                                                                     ┃ 
┃                                                                                     ┃ 
┃                                                                                     ┃ 
┃                    ┏━━━━━━━━━━━━━━━━━━┫ Prompt ┣━━━━━━━━━━━━━━━━┓                   ┃
┃                    ┃                                            ┃                   ┃ 
┃                    ┃ DO YOU WANT YOUR LANGAUGE TO BE SUPPORTED? ┃                   ┃
┃                    ┃                                            ┃                   ┃
┃                    ┗━━━━━━━━━━━━━━━━━━┫ No ┣━┫ >Nah not even< ┣━┛                   ┃
┃                                                                                     ┃ 
┃                                                                                     ┃ 
┃                                                                                     ┃ 
┃                                                                                     ┃ 
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
\`\`\`

🙇 IBM - You helped us draw instead of supporting languages.

</div>

<!--
ANSI Characters aren't actually a thing. When people use this term, they are refering to the windows code pages.

Quiz: How many bits is an ascii character?

IBM437: https://www.compart.com/en/unicode/charsets/IBM437
-->
`,title:"Competing standards",level:2,content:`## Competing standards

- ~~ANSI (American National Standards Institue) Characters~~ Windows code pages, Code Page 437
- ASCII (American Standard Code for Information Interchange) Characters

<div v-click class="mt-10">

\`\`\`
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫ Cool "App" 3000 ┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃                                                                                     ┃ 
┃                                                                                     ┃ 
┃                                                                                     ┃ 
┃                                                                                     ┃ 
┃                    ┏━━━━━━━━━━━━━━━━━━┫ Prompt ┣━━━━━━━━━━━━━━━━┓                   ┃
┃                    ┃                                            ┃                   ┃ 
┃                    ┃ DO YOU WANT YOUR LANGAUGE TO BE SUPPORTED? ┃                   ┃
┃                    ┃                                            ┃                   ┃
┃                    ┗━━━━━━━━━━━━━━━━━━┫ No ┣━┫ >Nah not even< ┣━┛                   ┃
┃                                                                                     ┃ 
┃                                                                                     ┃ 
┃                                                                                     ┃ 
┃                                                                                     ┃ 
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
\`\`\`

🙇 IBM - You helped us draw instead of supporting languages.

</div>`,frontmatter:{},note:`ANSI Characters aren't actually a thing. When people use this term, they are refering to the windows code pages.

Quiz: How many bits is an ascii character?

IBM437: https://www.compart.com/en/unicode/charsets/IBM437`,index:5,start:140,end:178},filepath:"/home/ben/Workspace/demystifying-unicode/pages/01-history.md",noteHTML:`<p>ANSI Characters aren't actually a thing. When people use this term, they are refering to the windows code pages.</p>
<p>Quiz: How many bits is an ascii character?</p>
<p>IBM437: https://www.compart.com/en/unicode/charsets/IBM437</p>
`,id:8,no:9},__clicksElements:[],__preloaded:!1}},{path:"10",name:"page-10",component:q5,meta:{hide:!1,srcSequence:"./pages/01-history.md",slide:{raw:`
## About ol ASCII - QQ

<div class="flex flex-row flex-items-stretch">
<div class="text-center">
    
**IBM 437**

<img class="w-120" src="/Codepage-437.png" alt="An example of the characters on the commonly used IBM437 codepage"/>

</div>
<div class="text-center">

**IBM 737**

<img class="w-120 mt-5" src="/Codepage-737.png" alt="An example of the characters on IBM737 which shows greek characters above the 0x7F range"/>

</div>
</div>

<v-click>

<div class="absolute border-5 top-35 left-12 right-12 bottom-76 border-red"></div>

</v-click>

<v-clicks>

- ASCII standardized 0x00..0x7F
  \`\`\`
  ␀␁␂␃␄␅␆␇␈␉␊␋␌␍␎␏␐␑␒␓␔␕␖␗␘␙␚␛␜␝␞␟
  ␠!"#$%&'()*+,-./0123456789:;<=>?
  @ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_
  \`abcdefghijklmnopqrstuvwxyz{|}~␡
  \`\`\`
- ∴ \`0x00..0x7F\` was common between many code pages

</v-clicks>
`,title:"About ol ASCII - QQ",level:2,content:`## About ol ASCII - QQ

<div class="flex flex-row flex-items-stretch">
<div class="text-center">
    
**IBM 437**

<img class="w-120" src="/Codepage-437.png" alt="An example of the characters on the commonly used IBM437 codepage"/>

</div>
<div class="text-center">

**IBM 737**

<img class="w-120 mt-5" src="/Codepage-737.png" alt="An example of the characters on IBM737 which shows greek characters above the 0x7F range"/>

</div>
</div>

<v-click>

<div class="absolute border-5 top-35 left-12 right-12 bottom-76 border-red"></div>

</v-click>

<v-clicks>

- ASCII standardized 0x00..0x7F
  \`\`\`
  ␀␁␂␃␄␅␆␇␈␉␊␋␌␍␎␏␐␑␒␓␔␕␖␗␘␙␚␛␜␝␞␟
  ␠!"#$%&'()*+,-./0123456789:;<=>?
  @ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_
  \`abcdefghijklmnopqrstuvwxyz{|}~␡
  \`\`\`
- ∴ \`0x00..0x7F\` was common between many code pages

</v-clicks>`,frontmatter:{hide:!1,srcSequence:"./pages/01-history.md"},index:9,start:179,end:218,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/01-history.md",raw:`
## About ol ASCII - QQ

<div class="flex flex-row flex-items-stretch">
<div class="text-center">
    
**IBM 437**

<img class="w-120" src="/Codepage-437.png" alt="An example of the characters on the commonly used IBM437 codepage"/>

</div>
<div class="text-center">

**IBM 737**

<img class="w-120 mt-5" src="/Codepage-737.png" alt="An example of the characters on IBM737 which shows greek characters above the 0x7F range"/>

</div>
</div>

<v-click>

<div class="absolute border-5 top-35 left-12 right-12 bottom-76 border-red"></div>

</v-click>

<v-clicks>

- ASCII standardized 0x00..0x7F
  \`\`\`
  ␀␁␂␃␄␅␆␇␈␉␊␋␌␍␎␏␐␑␒␓␔␕␖␗␘␙␚␛␜␝␞␟
  ␠!"#$%&'()*+,-./0123456789:;<=>?
  @ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_
  \`abcdefghijklmnopqrstuvwxyz{|}~␡
  \`\`\`
- ∴ \`0x00..0x7F\` was common between many code pages

</v-clicks>
`,title:"About ol ASCII - QQ",level:2,content:`## About ol ASCII - QQ

<div class="flex flex-row flex-items-stretch">
<div class="text-center">
    
**IBM 437**

<img class="w-120" src="/Codepage-437.png" alt="An example of the characters on the commonly used IBM437 codepage"/>

</div>
<div class="text-center">

**IBM 737**

<img class="w-120 mt-5" src="/Codepage-737.png" alt="An example of the characters on IBM737 which shows greek characters above the 0x7F range"/>

</div>
</div>

<v-click>

<div class="absolute border-5 top-35 left-12 right-12 bottom-76 border-red"></div>

</v-click>

<v-clicks>

- ASCII standardized 0x00..0x7F
  \`\`\`
  ␀␁␂␃␄␅␆␇␈␉␊␋␌␍␎␏␐␑␒␓␔␕␖␗␘␙␚␛␜␝␞␟
  ␠!"#$%&'()*+,-./0123456789:;<=>?
  @ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_
  \`abcdefghijklmnopqrstuvwxyz{|}~␡
  \`\`\`
- ∴ \`0x00..0x7F\` was common between many code pages

</v-clicks>`,frontmatter:{},index:6,start:179,end:218},filepath:"/home/ben/Workspace/demystifying-unicode/pages/01-history.md",noteHTML:"",id:9,no:10},__clicksElements:[],__preloaded:!1}},{path:"11",name:"page-11",component:G5,meta:{hide:!1,srcSequence:"./pages/01-history.md",slide:{raw:`
## How many characters is enough charcters?

<p class="pt-5">

**DIN 91379** - Characters and character sequences for processing names and data exchange in europe"

</p>

| | |
| --- | --- |
| Base Latin Letters: 649 | enl: 42 |
| Combinging Diacritics: 19 | bnlreq: 17 |
| Greek Letters: 68 | bnl: 59 |
| Cyrillic Letters: 61 | bnlopt: 8 |
| | bnlnot: 2 |

<v-clicks>

**💣 8 bits isn't going to be enough 💣**

</v-clicks>

<footer>

DIN 91379: https://github.com/String-Latin/DIN-91379-Characters-and-Sequences

</footer>
`,title:"How many characters is enough charcters?",level:2,content:`## How many characters is enough charcters?

<p class="pt-5">

**DIN 91379** - Characters and character sequences for processing names and data exchange in europe"

</p>

| | |
| --- | --- |
| Base Latin Letters: 649 | enl: 42 |
| Combinging Diacritics: 19 | bnlreq: 17 |
| Greek Letters: 68 | bnl: 59 |
| Cyrillic Letters: 61 | bnlopt: 8 |
| | bnlnot: 2 |

<v-clicks>

**💣 8 bits isn't going to be enough 💣**

</v-clicks>

<footer>

DIN 91379: https://github.com/String-Latin/DIN-91379-Characters-and-Sequences

</footer>`,frontmatter:{hide:!1,srcSequence:"./pages/01-history.md"},index:10,start:219,end:248,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/01-history.md",raw:`
## How many characters is enough charcters?

<p class="pt-5">

**DIN 91379** - Characters and character sequences for processing names and data exchange in europe"

</p>

| | |
| --- | --- |
| Base Latin Letters: 649 | enl: 42 |
| Combinging Diacritics: 19 | bnlreq: 17 |
| Greek Letters: 68 | bnl: 59 |
| Cyrillic Letters: 61 | bnlopt: 8 |
| | bnlnot: 2 |

<v-clicks>

**💣 8 bits isn't going to be enough 💣**

</v-clicks>

<footer>

DIN 91379: https://github.com/String-Latin/DIN-91379-Characters-and-Sequences

</footer>
`,title:"How many characters is enough charcters?",level:2,content:`## How many characters is enough charcters?

<p class="pt-5">

**DIN 91379** - Characters and character sequences for processing names and data exchange in europe"

</p>

| | |
| --- | --- |
| Base Latin Letters: 649 | enl: 42 |
| Combinging Diacritics: 19 | bnlreq: 17 |
| Greek Letters: 68 | bnl: 59 |
| Cyrillic Letters: 61 | bnlopt: 8 |
| | bnlnot: 2 |

<v-clicks>

**💣 8 bits isn't going to be enough 💣**

</v-clicks>

<footer>

DIN 91379: https://github.com/String-Latin/DIN-91379-Characters-and-Sequences

</footer>`,frontmatter:{},index:7,start:219,end:248},filepath:"/home/ben/Workspace/demystifying-unicode/pages/01-history.md",noteHTML:"",id:10,no:11},__clicksElements:[],__preloaded:!1}},{path:"12",name:"page-12",component:J5,meta:{layout:"center",hide:!1,srcSequence:"./pages/01-history.md",slide:{raw:`---
layout: center
---

## Summary:

<v-clicks>

- Computers know bits - \`1\`s and \`0\`s
- Bits are not human structures - so we abstract
- \`char\` isn't a character, it's just a \`uint8_t\` with a fancy name
- We need a whole lot more bits if we more than just names and dates in europe

</v-clicks>
`,title:"Summary:",level:2,content:`## Summary:

<v-clicks>

- Computers know bits - \`1\`s and \`0\`s
- Bits are not human structures - so we abstract
- \`char\` isn't a character, it's just a \`uint8_t\` with a fancy name
- We need a whole lot more bits if we more than just names and dates in europe

</v-clicks>`,frontmatter:{layout:"center",hide:!1,srcSequence:"./pages/01-history.md"},index:11,start:248,end:263,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/01-history.md",raw:`---
layout: center
---

## Summary:

<v-clicks>

- Computers know bits - \`1\`s and \`0\`s
- Bits are not human structures - so we abstract
- \`char\` isn't a character, it's just a \`uint8_t\` with a fancy name
- We need a whole lot more bits if we more than just names and dates in europe

</v-clicks>
`,title:"Summary:",level:2,content:`## Summary:

<v-clicks>

- Computers know bits - \`1\`s and \`0\`s
- Bits are not human structures - so we abstract
- \`char\` isn't a character, it's just a \`uint8_t\` with a fancy name
- We need a whole lot more bits if we more than just names and dates in europe

</v-clicks>`,frontmatter:{layout:"center"},index:8,start:248,end:263},filepath:"/home/ben/Workspace/demystifying-unicode/pages/01-history.md",noteHTML:"",id:11,no:12},__clicksElements:[],__preloaded:!1}},{path:"13",name:"page-13",component:tS,meta:{layout:"cover",title:"Unicode",hide:!1,srcSequence:"./pages/02-unicode.md",slide:{raw:null,title:"Unicode",level:1,content:"# Unicode",frontmatter:{layout:"cover",title:"Unicode",hide:!1,srcSequence:"./pages/02-unicode.md"},index:12,start:0,end:6,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/02-unicode.md",raw:`---
layout: cover
---

# Unicode
`,title:"Unicode",level:1,content:"# Unicode",frontmatter:{layout:"cover",title:"Unicode"},index:0,start:0,end:6},inline:{raw:`---
src: ./pages/02-unicode.md
hide: false
---
`,content:"",frontmatter:{hide:!1},index:4,start:43,end:48},filepath:"/home/ben/Workspace/demystifying-unicode/pages/02-unicode.md",noteHTML:"",id:12,no:13},__clicksElements:[],__preloaded:!1}},{path:"14",name:"page-14",component:rS,meta:{hide:!1,srcSequence:"./pages/02-unicode.md",slide:{raw:`
## Why Unicode?

<v-clicks>

1. Codepages/charmaps? System dependant
1. Unique characters? Duplication everywhere
1. Display more than one codepage/charmap at a time? ␎␏␎␏␎␏␎␏
1. Text from outside of Europe? :ha:

</v-clicks>

<!--
TODO: Illustrate with an example:
- Write an application on one computer, relying on codepage X
- Send data to another computer
- Get garbled nonsense
- 👍 
-->
`,title:"Why Unicode?",level:2,content:`## Why Unicode?

<v-clicks>

1. Codepages/charmaps? System dependant
1. Unique characters? Duplication everywhere
1. Display more than one codepage/charmap at a time? ␎␏␎␏␎␏␎␏
1. Text from outside of Europe? :ha:

</v-clicks>`,frontmatter:{hide:!1,srcSequence:"./pages/02-unicode.md"},note:`TODO: Illustrate with an example:
- Write an application on one computer, relying on codepage X
- Send data to another computer
- Get garbled nonsense
- 👍`,index:13,start:7,end:27,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/02-unicode.md",raw:`
## Why Unicode?

<v-clicks>

1. Codepages/charmaps? System dependant
1. Unique characters? Duplication everywhere
1. Display more than one codepage/charmap at a time? ␎␏␎␏␎␏␎␏
1. Text from outside of Europe? :ha:

</v-clicks>

<!--
TODO: Illustrate with an example:
- Write an application on one computer, relying on codepage X
- Send data to another computer
- Get garbled nonsense
- 👍 
-->
`,title:"Why Unicode?",level:2,content:`## Why Unicode?

<v-clicks>

1. Codepages/charmaps? System dependant
1. Unique characters? Duplication everywhere
1. Display more than one codepage/charmap at a time? ␎␏␎␏␎␏␎␏
1. Text from outside of Europe? :ha:

</v-clicks>`,frontmatter:{},note:`TODO: Illustrate with an example:
- Write an application on one computer, relying on codepage X
- Send data to another computer
- Get garbled nonsense
- 👍`,index:1,start:7,end:27},filepath:"/home/ben/Workspace/demystifying-unicode/pages/02-unicode.md",noteHTML:`<p>TODO: Illustrate with an example:</p>
<ul>
<li>Write an application on one computer, relying on codepage X</li>
<li>Send data to another computer</li>
<li>Get garbled nonsense</li>
<li>👍</li>
</ul>
`,id:13,no:14},__clicksElements:[],__preloaded:!1}},{path:"15",name:"page-15",component:cS,meta:{layout:"center",hide:!1,srcSequence:"./pages/02-unicode.md",slide:{raw:`---
layout: center
---

<div class="absolute top-0 left-0 the-internet flex justify-center items-center text-30">
  <p class="text-shadow-xl color-white text-shadow-color-red">The Internet</p>
</div>

<style>
.the-internet {
  background-image: url("/the_internet.jpg");
  width: 100%;
  height: 100%
}
</style>
`,content:`<div class="absolute top-0 left-0 the-internet flex justify-center items-center text-30">
  <p class="text-shadow-xl color-white text-shadow-color-red">The Internet</p>
</div>

<style>
.the-internet {
  background-image: url("/the_internet.jpg");
  width: 100%;
  height: 100%
}
</style>`,frontmatter:{layout:"center",hide:!1,srcSequence:"./pages/02-unicode.md"},index:14,start:27,end:43,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/02-unicode.md",raw:`---
layout: center
---

<div class="absolute top-0 left-0 the-internet flex justify-center items-center text-30">
  <p class="text-shadow-xl color-white text-shadow-color-red">The Internet</p>
</div>

<style>
.the-internet {
  background-image: url("/the_internet.jpg");
  width: 100%;
  height: 100%
}
</style>
`,content:`<div class="absolute top-0 left-0 the-internet flex justify-center items-center text-30">
  <p class="text-shadow-xl color-white text-shadow-color-red">The Internet</p>
</div>

<style>
.the-internet {
  background-image: url("/the_internet.jpg");
  width: 100%;
  height: 100%
}
</style>`,frontmatter:{layout:"center"},index:2,start:27,end:43},filepath:"/home/ben/Workspace/demystifying-unicode/pages/02-unicode.md",noteHTML:"",id:14,no:15},__clicksElements:[],__preloaded:!1}},{path:"16",name:"page-16",component:fS,meta:{layout:"center",hide:!1,srcSequence:"./pages/02-unicode.md",slide:{raw:`---
layout: center
---

## Unicode to the resque

<v-clicks>

- Universal
- Efficient
- Unambiguous

</v-clicks>

<!--
- Universal: Encompass all characters that can be used in general text interchange
- Efficient: Simple to store and parse. Fixed character codes for all the charaters, no switch code pages/charmaps.
- Unambiguous: \`\\1F600\` is a grinning face - everywhere.

Ref: https://www.unicode.org/versions/Unicode15.0.0/ch01.pdf

> The Unicode Standard was designed to be:
>
> - Universal. The repertoire must be large enough to encompass all characters that are likely to be used in general text interchange, including those in major international, national, and industry character sets.
> - Efficient. Plain text is simple to parse: software does not have to maintain state or look for special escape sequences, and character synchronization from any point in a character stream is quick and unambiguous. A fixed character code allows for efficient sorting, searching, display, and editing of text.
> - Unambiguous. Any given Unicode code point always represents the same character
-->
`,title:"Unicode to the resque",level:2,content:`## Unicode to the resque

<v-clicks>

- Universal
- Efficient
- Unambiguous

</v-clicks>`,frontmatter:{layout:"center",hide:!1,srcSequence:"./pages/02-unicode.md"},note:`- Universal: Encompass all characters that can be used in general text interchange
- Efficient: Simple to store and parse. Fixed character codes for all the charaters, no switch code pages/charmaps.
- Unambiguous: \`\\1F600\` is a grinning face - everywhere.

Ref: https://www.unicode.org/versions/Unicode15.0.0/ch01.pdf

> The Unicode Standard was designed to be:
>
> - Universal. The repertoire must be large enough to encompass all characters that are likely to be used in general text interchange, including those in major international, national, and industry character sets.
> - Efficient. Plain text is simple to parse: software does not have to maintain state or look for special escape sequences, and character synchronization from any point in a character stream is quick and unambiguous. A fixed character code allows for efficient sorting, searching, display, and editing of text.
> - Unambiguous. Any given Unicode code point always represents the same character`,index:15,start:43,end:71,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/02-unicode.md",raw:`---
layout: center
---

## Unicode to the resque

<v-clicks>

- Universal
- Efficient
- Unambiguous

</v-clicks>

<!--
- Universal: Encompass all characters that can be used in general text interchange
- Efficient: Simple to store and parse. Fixed character codes for all the charaters, no switch code pages/charmaps.
- Unambiguous: \`\\1F600\` is a grinning face - everywhere.

Ref: https://www.unicode.org/versions/Unicode15.0.0/ch01.pdf

> The Unicode Standard was designed to be:
>
> - Universal. The repertoire must be large enough to encompass all characters that are likely to be used in general text interchange, including those in major international, national, and industry character sets.
> - Efficient. Plain text is simple to parse: software does not have to maintain state or look for special escape sequences, and character synchronization from any point in a character stream is quick and unambiguous. A fixed character code allows for efficient sorting, searching, display, and editing of text.
> - Unambiguous. Any given Unicode code point always represents the same character
-->
`,title:"Unicode to the resque",level:2,content:`## Unicode to the resque

<v-clicks>

- Universal
- Efficient
- Unambiguous

</v-clicks>`,frontmatter:{layout:"center"},note:`- Universal: Encompass all characters that can be used in general text interchange
- Efficient: Simple to store and parse. Fixed character codes for all the charaters, no switch code pages/charmaps.
- Unambiguous: \`\\1F600\` is a grinning face - everywhere.

Ref: https://www.unicode.org/versions/Unicode15.0.0/ch01.pdf

> The Unicode Standard was designed to be:
>
> - Universal. The repertoire must be large enough to encompass all characters that are likely to be used in general text interchange, including those in major international, national, and industry character sets.
> - Efficient. Plain text is simple to parse: software does not have to maintain state or look for special escape sequences, and character synchronization from any point in a character stream is quick and unambiguous. A fixed character code allows for efficient sorting, searching, display, and editing of text.
> - Unambiguous. Any given Unicode code point always represents the same character`,index:3,start:43,end:71},filepath:"/home/ben/Workspace/demystifying-unicode/pages/02-unicode.md",noteHTML:`<ul>
<li>Universal: Encompass all characters that can be used in general text interchange</li>
<li>Efficient: Simple to store and parse. Fixed character codes for all the charaters, no switch code pages/charmaps.</li>
<li>Unambiguous: <code>\\1F600</code> is a grinning face - everywhere.</li>
</ul>
<p>Ref: https://www.unicode.org/versions/Unicode15.0.0/ch01.pdf</p>
<blockquote>
<p>The Unicode Standard was designed to be:</p>
<ul>
<li>Universal. The repertoire must be large enough to encompass all characters that are likely to be used in general text interchange, including those in major international, national, and industry character sets.</li>
<li>Efficient. Plain text is simple to parse: software does not have to maintain state or look for special escape sequences, and character synchronization from any point in a character stream is quick and unambiguous. A fixed character code allows for efficient sorting, searching, display, and editing of text.</li>
<li>Unambiguous. Any given Unicode code point always represents the same character</li>
</ul>
</blockquote>
`,id:15,no:16},__clicksElements:[],__preloaded:!1}},{path:"17",name:"page-17",component:vS,meta:{hide:!1,srcSequence:"./pages/02-unicode.md",slide:{raw:`
## New Terminology

| | | |
| - | - | - |
| Glyph | ‽ | How it actually looks, defined by the font |
| Codepoint | U+203D | Unique identifier for this character |
| Character | Interrobang | Description of the codepoint | 
| Block | General Punctuation, U+2000 - U+206F | The range of codepoints for a specific purpose |
| Plane | Basic Multilingual Plane, U+0000 - U+FFFF | The wide group of codepoints |

<footer>

Ref: Characters and Glyphs https://www.unicode.org/versions/Unicode15.0.0/ch01.pdf

</footer>

<!--
Glyphs are what are drawn to the screen, generally unicode interpreted by a font for example
Character is still ambiguous, but in unicode it's the description of the codepoint
-->
`,title:"New Terminology",level:2,content:`## New Terminology

| | | |
| - | - | - |
| Glyph | ‽ | How it actually looks, defined by the font |
| Codepoint | U+203D | Unique identifier for this character |
| Character | Interrobang | Description of the codepoint | 
| Block | General Punctuation, U+2000 - U+206F | The range of codepoints for a specific purpose |
| Plane | Basic Multilingual Plane, U+0000 - U+FFFF | The wide group of codepoints |

<footer>

Ref: Characters and Glyphs https://www.unicode.org/versions/Unicode15.0.0/ch01.pdf

</footer>`,frontmatter:{hide:!1,srcSequence:"./pages/02-unicode.md"},note:`Glyphs are what are drawn to the screen, generally unicode interpreted by a font for example
Character is still ambiguous, but in unicode it's the description of the codepoint`,index:16,start:72,end:94,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/02-unicode.md",raw:`
## New Terminology

| | | |
| - | - | - |
| Glyph | ‽ | How it actually looks, defined by the font |
| Codepoint | U+203D | Unique identifier for this character |
| Character | Interrobang | Description of the codepoint | 
| Block | General Punctuation, U+2000 - U+206F | The range of codepoints for a specific purpose |
| Plane | Basic Multilingual Plane, U+0000 - U+FFFF | The wide group of codepoints |

<footer>

Ref: Characters and Glyphs https://www.unicode.org/versions/Unicode15.0.0/ch01.pdf

</footer>

<!--
Glyphs are what are drawn to the screen, generally unicode interpreted by a font for example
Character is still ambiguous, but in unicode it's the description of the codepoint
-->
`,title:"New Terminology",level:2,content:`## New Terminology

| | | |
| - | - | - |
| Glyph | ‽ | How it actually looks, defined by the font |
| Codepoint | U+203D | Unique identifier for this character |
| Character | Interrobang | Description of the codepoint | 
| Block | General Punctuation, U+2000 - U+206F | The range of codepoints for a specific purpose |
| Plane | Basic Multilingual Plane, U+0000 - U+FFFF | The wide group of codepoints |

<footer>

Ref: Characters and Glyphs https://www.unicode.org/versions/Unicode15.0.0/ch01.pdf

</footer>`,frontmatter:{},note:`Glyphs are what are drawn to the screen, generally unicode interpreted by a font for example
Character is still ambiguous, but in unicode it's the description of the codepoint`,index:4,start:72,end:94},filepath:"/home/ben/Workspace/demystifying-unicode/pages/02-unicode.md",noteHTML:`<p>Glyphs are what are drawn to the screen, generally unicode interpreted by a font for example
Character is still ambiguous, but in unicode it's the description of the codepoint</p>
`,id:16,no:17},__clicksElements:[],__preloaded:!1}},{path:"18",name:"page-18",component:wS,meta:{layout:"center",hide:!1,srcSequence:"./pages/02-unicode.md",slide:{raw:`---
layout: center
---

<img src="/glyph-codepoint-character.jpg" alt="Triple spiderman meme, glyph, codepoint, character pointing at each other" />
`,content:'<img src="/glyph-codepoint-character.jpg" alt="Triple spiderman meme, glyph, codepoint, character pointing at each other" />',frontmatter:{layout:"center",hide:!1,srcSequence:"./pages/02-unicode.md"},index:17,start:94,end:100,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/02-unicode.md",raw:`---
layout: center
---

<img src="/glyph-codepoint-character.jpg" alt="Triple spiderman meme, glyph, codepoint, character pointing at each other" />
`,content:'<img src="/glyph-codepoint-character.jpg" alt="Triple spiderman meme, glyph, codepoint, character pointing at each other" />',frontmatter:{layout:"center"},index:5,start:94,end:100},filepath:"/home/ben/Workspace/demystifying-unicode/pages/02-unicode.md",noteHTML:"",id:17,no:18},__clicksElements:[],__preloaded:!1}},{path:"19",name:"page-19",component:CS,meta:{layout:"center",hide:!1,srcSequence:"./pages/02-unicode.md",slide:{raw:`---
layout: center
---

<img src="/no_chars_yes_glyphs.jpg" alt="Drake no: characters. Drake yes: glyphs" />
`,content:'<img src="/no_chars_yes_glyphs.jpg" alt="Drake no: characters. Drake yes: glyphs" />',frontmatter:{layout:"center",hide:!1,srcSequence:"./pages/02-unicode.md"},index:18,start:100,end:106,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/02-unicode.md",raw:`---
layout: center
---

<img src="/no_chars_yes_glyphs.jpg" alt="Drake no: characters. Drake yes: glyphs" />
`,content:'<img src="/no_chars_yes_glyphs.jpg" alt="Drake no: characters. Drake yes: glyphs" />',frontmatter:{layout:"center"},index:6,start:100,end:106},filepath:"/home/ben/Workspace/demystifying-unicode/pages/02-unicode.md",noteHTML:"",id:18,no:19},__clicksElements:[],__preloaded:!1}},{path:"20",name:"page-20",component:OS,meta:{layout:"two-cols",hide:!1,srcSequence:"./pages/02-unicode.md",slide:{raw:`---
layout: two-cols
---

## Glyphemes

<div class="codepoint">
  <div class="glyph">é</div>
  <div class="code">U+00e9</div>
</div>

::right::

<div class="codepoint">
  <div class="glyph">é</div>
  <div class="code">U+0065 + U+0301</div>
</div>

<!--
Glyphemes - 1 to many codepoints that are represented to the user as a single character
--> 
`,title:"Glyphemes",level:2,content:`## Glyphemes

<div class="codepoint">
  <div class="glyph">é</div>
  <div class="code">U+00e9</div>
</div>

::right::

<div class="codepoint">
  <div class="glyph">é</div>
  <div class="code">U+0065 + U+0301</div>
</div>`,frontmatter:{layout:"two-cols",hide:!1,srcSequence:"./pages/02-unicode.md"},note:"Glyphemes - 1 to many codepoints that are represented to the user as a single character",index:19,start:106,end:128,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/02-unicode.md",raw:`---
layout: two-cols
---

## Glyphemes

<div class="codepoint">
  <div class="glyph">é</div>
  <div class="code">U+00e9</div>
</div>

::right::

<div class="codepoint">
  <div class="glyph">é</div>
  <div class="code">U+0065 + U+0301</div>
</div>

<!--
Glyphemes - 1 to many codepoints that are represented to the user as a single character
--> 
`,title:"Glyphemes",level:2,content:`## Glyphemes

<div class="codepoint">
  <div class="glyph">é</div>
  <div class="code">U+00e9</div>
</div>

::right::

<div class="codepoint">
  <div class="glyph">é</div>
  <div class="code">U+0065 + U+0301</div>
</div>`,frontmatter:{layout:"two-cols"},note:"Glyphemes - 1 to many codepoints that are represented to the user as a single character",index:7,start:106,end:128},filepath:"/home/ben/Workspace/demystifying-unicode/pages/02-unicode.md",noteHTML:`<p>Glyphemes - 1 to many codepoints that are represented to the user as a single character</p>
`,id:19,no:20},__clicksElements:[],__preloaded:!1}},{path:"21",name:"page-21",component:RS,meta:{layout:"center",hide:!1,srcSequence:"./pages/02-unicode.md",slide:{raw:`---
layout: center
---

## What is the difference between
## \`Unicode\`
## and
## \`UTF-8\`
`,title:"What is the difference between",level:2,content:"## What is the difference between\n## `Unicode`\n## and\n## `UTF-8`",frontmatter:{layout:"center",hide:!1,srcSequence:"./pages/02-unicode.md"},index:20,start:128,end:137,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/02-unicode.md",raw:`---
layout: center
---

## What is the difference between
## \`Unicode\`
## and
## \`UTF-8\`
`,title:"What is the difference between",level:2,content:"## What is the difference between\n## `Unicode`\n## and\n## `UTF-8`",frontmatter:{layout:"center"},index:8,start:128,end:137},filepath:"/home/ben/Workspace/demystifying-unicode/pages/02-unicode.md",noteHTML:"",id:20,no:21},__clicksElements:[],__preloaded:!1}},{path:"22",name:"page-22",component:jS,meta:{layout:"center",hide:!1,srcSequence:"./pages/02-unicode.md",slide:{raw:`---
layout: center
---

<div class="text-7">

\`Unicode\` - "The Standard"

\`UTF-8\` - Encoding

</div>

<!--
There is also UTF-16 and UTF-32
-->
`,content:`<div class="text-7">

\`Unicode\` - "The Standard"

\`UTF-8\` - Encoding

</div>`,frontmatter:{layout:"center",hide:!1,srcSequence:"./pages/02-unicode.md"},note:"There is also UTF-16 and UTF-32",index:21,start:137,end:153,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/02-unicode.md",raw:`---
layout: center
---

<div class="text-7">

\`Unicode\` - "The Standard"

\`UTF-8\` - Encoding

</div>

<!--
There is also UTF-16 and UTF-32
-->
`,content:`<div class="text-7">

\`Unicode\` - "The Standard"

\`UTF-8\` - Encoding

</div>`,frontmatter:{layout:"center"},note:"There is also UTF-16 and UTF-32",index:9,start:137,end:153},filepath:"/home/ben/Workspace/demystifying-unicode/pages/02-unicode.md",noteHTML:`<p>There is also UTF-16 and UTF-32</p>
`,id:21,no:22},__clicksElements:[],__preloaded:!1}},{path:"23",name:"page-23",component:QS,meta:{hide:!1,srcSequence:"./pages/02-unicode.md",slide:{raw:`
## Encoding

<v-clicks>

**DIN 91379**: 925 characters

At least 10 bits - (Names/Data exchange in Europe)

Unicode:
- Supports 1048576 Characters
- Code space: U+000000 - U+10FFFF
- Which requires at least 21 bits

</v-clicks>

<footer>

Fun fact: Unicode <2.0 code space was 16-bit wide.

</footer>
`,title:"Encoding",level:2,content:`## Encoding

<v-clicks>

**DIN 91379**: 925 characters

At least 10 bits - (Names/Data exchange in Europe)

Unicode:
- Supports 1048576 Characters
- Code space: U+000000 - U+10FFFF
- Which requires at least 21 bits

</v-clicks>

<footer>

Fun fact: Unicode <2.0 code space was 16-bit wide.

</footer>`,frontmatter:{hide:!1,srcSequence:"./pages/02-unicode.md"},index:22,start:154,end:176,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/02-unicode.md",raw:`
## Encoding

<v-clicks>

**DIN 91379**: 925 characters

At least 10 bits - (Names/Data exchange in Europe)

Unicode:
- Supports 1048576 Characters
- Code space: U+000000 - U+10FFFF
- Which requires at least 21 bits

</v-clicks>

<footer>

Fun fact: Unicode <2.0 code space was 16-bit wide.

</footer>
`,title:"Encoding",level:2,content:`## Encoding

<v-clicks>

**DIN 91379**: 925 characters

At least 10 bits - (Names/Data exchange in Europe)

Unicode:
- Supports 1048576 Characters
- Code space: U+000000 - U+10FFFF
- Which requires at least 21 bits

</v-clicks>

<footer>

Fun fact: Unicode <2.0 code space was 16-bit wide.

</footer>`,frontmatter:{},index:10,start:154,end:176},filepath:"/home/ben/Workspace/demystifying-unicode/pages/02-unicode.md",noteHTML:"",id:22,no:23},__clicksElements:[],__preloaded:!1}},{path:"24",name:"page-24",component:eC,meta:{layout:"center",hide:!1,srcSequence:"./pages/02-unicode.md",slide:{raw:`---
layout: center
---

<div class="flex flex-col">

<img src="/standards.png" class="center"/>

<p class="text-3">
Alt: Fortunately, the charging one has been solved now that we've all standardized on mini-USB. Or is it micro-USB? Shit.
</p>

</div>

<footer>

Source: https://xkcd.com/927/

</footer>
`,content:`<div class="flex flex-col">

<img src="/standards.png" class="center"/>

<p class="text-3">
Alt: Fortunately, the charging one has been solved now that we've all standardized on mini-USB. Or is it micro-USB? Shit.
</p>

</div>

<footer>

Source: https://xkcd.com/927/

</footer>`,frontmatter:{layout:"center",hide:!1,srcSequence:"./pages/02-unicode.md"},index:23,start:176,end:196,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/02-unicode.md",raw:`---
layout: center
---

<div class="flex flex-col">

<img src="/standards.png" class="center"/>

<p class="text-3">
Alt: Fortunately, the charging one has been solved now that we've all standardized on mini-USB. Or is it micro-USB? Shit.
</p>

</div>

<footer>

Source: https://xkcd.com/927/

</footer>
`,content:`<div class="flex flex-col">

<img src="/standards.png" class="center"/>

<p class="text-3">
Alt: Fortunately, the charging one has been solved now that we've all standardized on mini-USB. Or is it micro-USB? Shit.
</p>

</div>

<footer>

Source: https://xkcd.com/927/

</footer>`,frontmatter:{layout:"center"},index:11,start:176,end:196},filepath:"/home/ben/Workspace/demystifying-unicode/pages/02-unicode.md",noteHTML:"",id:23,no:24},__clicksElements:[],__preloaded:!1}},{path:"25",name:"page-25",component:lC,meta:{hide:!1,srcSequence:"./pages/02-unicode.md",slide:{raw:`
## Woo options!

😻 = U+1F63B = Smiling cat face with heart-shaped eyes

<v-click>

| | |
| - | - |
| UTF-8 | \`0xF0 0x9F 0x98 0xBB\` |
| UTF-16BE* | \`0xD83D 0xDE3B\` |
| UTF-16LE | \`0x3DD8 0x3BDE\` |
| UTF-32BE* | \`0x0001F63B\` |
| UTF-32LE | \`0x3BF60100\` |

\\* BE encodings are the default if no BOM \`\\xFEFF\`

</v-click>

<footer>

UTF-21 exists - but it's a toy encoding hobby project<br />

</footer>

<!--
A UTF-8 encoded string on my machine spits out an array of bytes. To your machine, it's just an array of bytes.

UTF-8/16/32 & BOM FAQs: https://unicode.org/faq/utf_bom.html

Content-Encoding header on HTTP requests

UTF-21: https://evanhahn.com/utf-21/
-->
`,title:"Woo options!",level:2,content:`## Woo options!

😻 = U+1F63B = Smiling cat face with heart-shaped eyes

<v-click>

| | |
| - | - |
| UTF-8 | \`0xF0 0x9F 0x98 0xBB\` |
| UTF-16BE* | \`0xD83D 0xDE3B\` |
| UTF-16LE | \`0x3DD8 0x3BDE\` |
| UTF-32BE* | \`0x0001F63B\` |
| UTF-32LE | \`0x3BF60100\` |

\\* BE encodings are the default if no BOM \`\\xFEFF\`

</v-click>

<footer>

UTF-21 exists - but it's a toy encoding hobby project<br />

</footer>`,frontmatter:{hide:!1,srcSequence:"./pages/02-unicode.md"},note:`A UTF-8 encoded string on my machine spits out an array of bytes. To your machine, it's just an array of bytes.

UTF-8/16/32 & BOM FAQs: https://unicode.org/faq/utf_bom.html

Content-Encoding header on HTTP requests

UTF-21: https://evanhahn.com/utf-21/`,index:24,start:197,end:232,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/02-unicode.md",raw:`
## Woo options!

😻 = U+1F63B = Smiling cat face with heart-shaped eyes

<v-click>

| | |
| - | - |
| UTF-8 | \`0xF0 0x9F 0x98 0xBB\` |
| UTF-16BE* | \`0xD83D 0xDE3B\` |
| UTF-16LE | \`0x3DD8 0x3BDE\` |
| UTF-32BE* | \`0x0001F63B\` |
| UTF-32LE | \`0x3BF60100\` |

\\* BE encodings are the default if no BOM \`\\xFEFF\`

</v-click>

<footer>

UTF-21 exists - but it's a toy encoding hobby project<br />

</footer>

<!--
A UTF-8 encoded string on my machine spits out an array of bytes. To your machine, it's just an array of bytes.

UTF-8/16/32 & BOM FAQs: https://unicode.org/faq/utf_bom.html

Content-Encoding header on HTTP requests

UTF-21: https://evanhahn.com/utf-21/
-->
`,title:"Woo options!",level:2,content:`## Woo options!

😻 = U+1F63B = Smiling cat face with heart-shaped eyes

<v-click>

| | |
| - | - |
| UTF-8 | \`0xF0 0x9F 0x98 0xBB\` |
| UTF-16BE* | \`0xD83D 0xDE3B\` |
| UTF-16LE | \`0x3DD8 0x3BDE\` |
| UTF-32BE* | \`0x0001F63B\` |
| UTF-32LE | \`0x3BF60100\` |

\\* BE encodings are the default if no BOM \`\\xFEFF\`

</v-click>

<footer>

UTF-21 exists - but it's a toy encoding hobby project<br />

</footer>`,frontmatter:{},note:`A UTF-8 encoded string on my machine spits out an array of bytes. To your machine, it's just an array of bytes.

UTF-8/16/32 & BOM FAQs: https://unicode.org/faq/utf_bom.html

Content-Encoding header on HTTP requests

UTF-21: https://evanhahn.com/utf-21/`,index:12,start:197,end:232},filepath:"/home/ben/Workspace/demystifying-unicode/pages/02-unicode.md",noteHTML:`<p>A UTF-8 encoded string on my machine spits out an array of bytes. To your machine, it's just an array of bytes.</p>
<p>UTF-8/16/32 &amp; BOM FAQs: https://unicode.org/faq/utf_bom.html</p>
<p>Content-Encoding header on HTTP requests</p>
<p>UTF-21: https://evanhahn.com/utf-21/</p>
`,id:24,no:25},__clicksElements:[],__preloaded:!1}},{path:"26",name:"page-26",component:uC,meta:{layout:"center",hide:!1,srcSequence:"./pages/02-unicode.md",slide:{raw:`---
layout: center
---

## UTF-8 is the king of the web
`,title:"UTF-8 is the king of the web",level:2,content:"## UTF-8 is the king of the web",frontmatter:{layout:"center",hide:!1,srcSequence:"./pages/02-unicode.md"},index:25,start:232,end:238,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/02-unicode.md",raw:`---
layout: center
---

## UTF-8 is the king of the web
`,title:"UTF-8 is the king of the web",level:2,content:"## UTF-8 is the king of the web",frontmatter:{layout:"center"},index:13,start:232,end:238},filepath:"/home/ben/Workspace/demystifying-unicode/pages/02-unicode.md",noteHTML:"",id:25,no:26},__clicksElements:[],__preloaded:!1}},{path:"27",name:"page-27",component:gC,meta:{hide:!1,srcSequence:"./pages/02-unicode.md",slide:{raw:'\n## Nuts and bolts of UTF-8\n\nKey points:\n\n- Variable width (1-4 bytes)\n- ∴ Variable offset between characters\n- The default in Rust (+many more)\n\n<v-click>\n\n<hr />\n\n| Code point range | Byte 1 | Byte 2 | Byte 3 | Byte 4 | Bit Capacity | Code points |\n| - | - | - | - | - | - | - |\n| `0x000000..0x00007F` | `0xxxxxxx` | | | | 7 | 128 |\n| `0x000080..0x0007FF` | `110xxxxx` | `10xxxxxx` | | | 11 | 1920 |\n| `0x000800..0x00FFFF` | `1110xxxx` | `10xxxxxx` | `10xxxxxx` | | 16 | 63488 |\n| `0x010000..0x10FFFF` | `11110xxx` | `10xxxxxx` | `10xxxxxx` | `10xxxxxx` | 21 | 1mil+ |\n\n</v-click>\n\n<!--\nUTF-8 is generally speaking more efficient when dealing with "Latin" based web - Best case 1 byte, worst case, 2 bytes.\nUTF-16 is gauranteed to be 2 bytes, if not 4\nUTF-32 will always be 4 bytes.\n-->\n',title:"Nuts and bolts of UTF-8",level:2,content:"## Nuts and bolts of UTF-8\n\nKey points:\n\n- Variable width (1-4 bytes)\n- ∴ Variable offset between characters\n- The default in Rust (+many more)\n\n<v-click>\n\n<hr />\n\n| Code point range | Byte 1 | Byte 2 | Byte 3 | Byte 4 | Bit Capacity | Code points |\n| - | - | - | - | - | - | - |\n| `0x000000..0x00007F` | `0xxxxxxx` | | | | 7 | 128 |\n| `0x000080..0x0007FF` | `110xxxxx` | `10xxxxxx` | | | 11 | 1920 |\n| `0x000800..0x00FFFF` | `1110xxxx` | `10xxxxxx` | `10xxxxxx` | | 16 | 63488 |\n| `0x010000..0x10FFFF` | `11110xxx` | `10xxxxxx` | `10xxxxxx` | `10xxxxxx` | 21 | 1mil+ |\n\n</v-click>",frontmatter:{hide:!1,srcSequence:"./pages/02-unicode.md"},note:`UTF-8 is generally speaking more efficient when dealing with "Latin" based web - Best case 1 byte, worst case, 2 bytes.
UTF-16 is gauranteed to be 2 bytes, if not 4
UTF-32 will always be 4 bytes.`,index:26,start:239,end:267,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/02-unicode.md",raw:'\n## Nuts and bolts of UTF-8\n\nKey points:\n\n- Variable width (1-4 bytes)\n- ∴ Variable offset between characters\n- The default in Rust (+many more)\n\n<v-click>\n\n<hr />\n\n| Code point range | Byte 1 | Byte 2 | Byte 3 | Byte 4 | Bit Capacity | Code points |\n| - | - | - | - | - | - | - |\n| `0x000000..0x00007F` | `0xxxxxxx` | | | | 7 | 128 |\n| `0x000080..0x0007FF` | `110xxxxx` | `10xxxxxx` | | | 11 | 1920 |\n| `0x000800..0x00FFFF` | `1110xxxx` | `10xxxxxx` | `10xxxxxx` | | 16 | 63488 |\n| `0x010000..0x10FFFF` | `11110xxx` | `10xxxxxx` | `10xxxxxx` | `10xxxxxx` | 21 | 1mil+ |\n\n</v-click>\n\n<!--\nUTF-8 is generally speaking more efficient when dealing with "Latin" based web - Best case 1 byte, worst case, 2 bytes.\nUTF-16 is gauranteed to be 2 bytes, if not 4\nUTF-32 will always be 4 bytes.\n-->\n',title:"Nuts and bolts of UTF-8",level:2,content:"## Nuts and bolts of UTF-8\n\nKey points:\n\n- Variable width (1-4 bytes)\n- ∴ Variable offset between characters\n- The default in Rust (+many more)\n\n<v-click>\n\n<hr />\n\n| Code point range | Byte 1 | Byte 2 | Byte 3 | Byte 4 | Bit Capacity | Code points |\n| - | - | - | - | - | - | - |\n| `0x000000..0x00007F` | `0xxxxxxx` | | | | 7 | 128 |\n| `0x000080..0x0007FF` | `110xxxxx` | `10xxxxxx` | | | 11 | 1920 |\n| `0x000800..0x00FFFF` | `1110xxxx` | `10xxxxxx` | `10xxxxxx` | | 16 | 63488 |\n| `0x010000..0x10FFFF` | `11110xxx` | `10xxxxxx` | `10xxxxxx` | `10xxxxxx` | 21 | 1mil+ |\n\n</v-click>",frontmatter:{},note:`UTF-8 is generally speaking more efficient when dealing with "Latin" based web - Best case 1 byte, worst case, 2 bytes.
UTF-16 is gauranteed to be 2 bytes, if not 4
UTF-32 will always be 4 bytes.`,index:14,start:239,end:267},filepath:"/home/ben/Workspace/demystifying-unicode/pages/02-unicode.md",noteHTML:`<p>UTF-8 is generally speaking more efficient when dealing with &quot;Latin&quot; based web - Best case 1 byte, worst case, 2 bytes.
UTF-16 is gauranteed to be 2 bytes, if not 4
UTF-32 will always be 4 bytes.</p>
`,id:26,no:27},__clicksElements:[],__preloaded:!1}},{path:"28",name:"page-28",component:LC,meta:{hide:!1,srcSequence:"./pages/02-unicode.md",slide:{raw:`
## Let's encode!

😻 = U+1F63B = Smiling cat face with heart-shaped eyes

<p v-click>

1F63B = \`0001 1111 0110 0011 1011\`

</p>

<div v-click class="mt-30">

<Arrow x1="250" y1="250" x2="170" y2="160" width="5"/>

We need at least 17 bits of room to encode U+1F63B

</div>

<div v-click>

<hr />

\`17 > 7\` ∴ Needs more than 1 byte

\`17 > 11\` ∴ Needs more than 2 bytes

\`17 > 16\` ∴ Needs more than 3 bytes

∴ We need 4 bytes!

\`1111 0xxx\` \`10xx xxxx\` \`10xx xxxx\` \`10xx xxxx\`

</div>

<!--
Take a codepoint, and split it into UTF-8
-->
`,title:"Let's encode!",level:2,content:`## Let's encode!

😻 = U+1F63B = Smiling cat face with heart-shaped eyes

<p v-click>

1F63B = \`0001 1111 0110 0011 1011\`

</p>

<div v-click class="mt-30">

<Arrow x1="250" y1="250" x2="170" y2="160" width="5"/>

We need at least 17 bits of room to encode U+1F63B

</div>

<div v-click>

<hr />

\`17 > 7\` ∴ Needs more than 1 byte

\`17 > 11\` ∴ Needs more than 2 bytes

\`17 > 16\` ∴ Needs more than 3 bytes

∴ We need 4 bytes!

\`1111 0xxx\` \`10xx xxxx\` \`10xx xxxx\` \`10xx xxxx\`

</div>`,frontmatter:{hide:!1,srcSequence:"./pages/02-unicode.md"},note:"Take a codepoint, and split it into UTF-8",index:27,start:268,end:307,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/02-unicode.md",raw:`
## Let's encode!

😻 = U+1F63B = Smiling cat face with heart-shaped eyes

<p v-click>

1F63B = \`0001 1111 0110 0011 1011\`

</p>

<div v-click class="mt-30">

<Arrow x1="250" y1="250" x2="170" y2="160" width="5"/>

We need at least 17 bits of room to encode U+1F63B

</div>

<div v-click>

<hr />

\`17 > 7\` ∴ Needs more than 1 byte

\`17 > 11\` ∴ Needs more than 2 bytes

\`17 > 16\` ∴ Needs more than 3 bytes

∴ We need 4 bytes!

\`1111 0xxx\` \`10xx xxxx\` \`10xx xxxx\` \`10xx xxxx\`

</div>

<!--
Take a codepoint, and split it into UTF-8
-->
`,title:"Let's encode!",level:2,content:`## Let's encode!

😻 = U+1F63B = Smiling cat face with heart-shaped eyes

<p v-click>

1F63B = \`0001 1111 0110 0011 1011\`

</p>

<div v-click class="mt-30">

<Arrow x1="250" y1="250" x2="170" y2="160" width="5"/>

We need at least 17 bits of room to encode U+1F63B

</div>

<div v-click>

<hr />

\`17 > 7\` ∴ Needs more than 1 byte

\`17 > 11\` ∴ Needs more than 2 bytes

\`17 > 16\` ∴ Needs more than 3 bytes

∴ We need 4 bytes!

\`1111 0xxx\` \`10xx xxxx\` \`10xx xxxx\` \`10xx xxxx\`

</div>`,frontmatter:{},note:"Take a codepoint, and split it into UTF-8",index:15,start:268,end:307},filepath:"/home/ben/Workspace/demystifying-unicode/pages/02-unicode.md",noteHTML:`<p>Take a codepoint, and split it into UTF-8</p>
`,id:27,no:28},__clicksElements:[],__preloaded:!1}},{path:"29",name:"page-29",component:gE,meta:{hide:!1,srcSequence:"./pages/02-unicode.md",slide:{raw:`
## Let's encode!

😻 = U+1F63B = Smiling cat face with heart-shaped eyes

0x1F63B = \`0001 1111 0110 0011 1011\`

<div v-click class="absolute top-40 left-14">
  <span>0x1F63B =&nbsp;</span>
  <span class="binary color-red">&nbsp;00</span>
  <span class="binary color-blue">01 1111</span>
  <span class="binary color-green">&nbsp;0110 00</span>
  <span class="binary color-yellow">11 1011</span>
</div>

<div v-click class="absolute parts top-40 left-14">
  <div class="binary color-red absolute part part-1 anim">00</div>
  <div class="binary color-blue absolute part part-2 anim">01 1111</div>
  <div class="binary color-green absolute part part-3 no-backtick anim">0110 00</div>
  <div class="binary color-yellow absolute part part-4 no-backtick anim">11 1011</div>
</div>

<div v-click class="absolute top-49 left-31">
  <span class="binary">| 1111 0000 = 1111 00<span class="color-red">00</span>&nbsp;</span>

  <span class="binary">| 1000 0000 = 10<span class="color-blue">01 1111</span>&nbsp;</span>

  <span class="binary">| 1000 0000 = 10<span class="color-green">01 1000</span>&nbsp;</span>

  <span class="binary">| 1000 0000 = 10<span class="color-yellow">11 1011</span>&nbsp;</span>
</div>

<div v-click class="absolute top-49 left-86">
  <span class="binary">&nbsp;= 0xF0</span>

  <span class="binary">&nbsp;= 0x9F</span>

  <span class="binary">&nbsp;= 0x98</span>

  <span class="binary">&nbsp;= 0xBB</span>
</div>

<div class="absolute top-90 left-15">

<v-click>

<hr />

Thus! U+1F63B = \`\\xF0\\x9F\\x97\\xBB\` in UTF-8

</v-click>

</div>

<style>
.part {
  width: 4.5em;
  top: 0em;
}

.parts {
  opacity: 1;
}

.part-1 { left: 5.90em; width: 1.8em; }
.part-2 { left: 7.10em; }
.part-3 { left: 11.9em; }
.part-4 { left: 16.1em; }

.slidev-vclick-current,.slidev-vclick-prior {
  .part { left: 0em; }

  .part-1 { top: 2.3em; left: 2.7em; }
  .part-2 { top: 5.0em; }
  .part-3 { top: 7.5em; }
  .part-4 { top: 10.1em; }
}

.anim {
  transition-delay: 0s;
  transition-duration: 1s;
}
</style>
`,title:"Let's encode!",level:2,content:`## Let's encode!

😻 = U+1F63B = Smiling cat face with heart-shaped eyes

0x1F63B = \`0001 1111 0110 0011 1011\`

<div v-click class="absolute top-40 left-14">
  <span>0x1F63B =&nbsp;</span>
  <span class="binary color-red">&nbsp;00</span>
  <span class="binary color-blue">01 1111</span>
  <span class="binary color-green">&nbsp;0110 00</span>
  <span class="binary color-yellow">11 1011</span>
</div>

<div v-click class="absolute parts top-40 left-14">
  <div class="binary color-red absolute part part-1 anim">00</div>
  <div class="binary color-blue absolute part part-2 anim">01 1111</div>
  <div class="binary color-green absolute part part-3 no-backtick anim">0110 00</div>
  <div class="binary color-yellow absolute part part-4 no-backtick anim">11 1011</div>
</div>

<div v-click class="absolute top-49 left-31">
  <span class="binary">| 1111 0000 = 1111 00<span class="color-red">00</span>&nbsp;</span>

  <span class="binary">| 1000 0000 = 10<span class="color-blue">01 1111</span>&nbsp;</span>

  <span class="binary">| 1000 0000 = 10<span class="color-green">01 1000</span>&nbsp;</span>

  <span class="binary">| 1000 0000 = 10<span class="color-yellow">11 1011</span>&nbsp;</span>
</div>

<div v-click class="absolute top-49 left-86">
  <span class="binary">&nbsp;= 0xF0</span>

  <span class="binary">&nbsp;= 0x9F</span>

  <span class="binary">&nbsp;= 0x98</span>

  <span class="binary">&nbsp;= 0xBB</span>
</div>

<div class="absolute top-90 left-15">

<v-click>

<hr />

Thus! U+1F63B = \`\\xF0\\x9F\\x97\\xBB\` in UTF-8

</v-click>

</div>

<style>
.part {
  width: 4.5em;
  top: 0em;
}

.parts {
  opacity: 1;
}

.part-1 { left: 5.90em; width: 1.8em; }
.part-2 { left: 7.10em; }
.part-3 { left: 11.9em; }
.part-4 { left: 16.1em; }

.slidev-vclick-current,.slidev-vclick-prior {
  .part { left: 0em; }

  .part-1 { top: 2.3em; left: 2.7em; }
  .part-2 { top: 5.0em; }
  .part-3 { top: 7.5em; }
  .part-4 { top: 10.1em; }
}

.anim {
  transition-delay: 0s;
  transition-duration: 1s;
}
</style>`,frontmatter:{hide:!1,srcSequence:"./pages/02-unicode.md"},index:28,start:308,end:392,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/02-unicode.md",raw:`
## Let's encode!

😻 = U+1F63B = Smiling cat face with heart-shaped eyes

0x1F63B = \`0001 1111 0110 0011 1011\`

<div v-click class="absolute top-40 left-14">
  <span>0x1F63B =&nbsp;</span>
  <span class="binary color-red">&nbsp;00</span>
  <span class="binary color-blue">01 1111</span>
  <span class="binary color-green">&nbsp;0110 00</span>
  <span class="binary color-yellow">11 1011</span>
</div>

<div v-click class="absolute parts top-40 left-14">
  <div class="binary color-red absolute part part-1 anim">00</div>
  <div class="binary color-blue absolute part part-2 anim">01 1111</div>
  <div class="binary color-green absolute part part-3 no-backtick anim">0110 00</div>
  <div class="binary color-yellow absolute part part-4 no-backtick anim">11 1011</div>
</div>

<div v-click class="absolute top-49 left-31">
  <span class="binary">| 1111 0000 = 1111 00<span class="color-red">00</span>&nbsp;</span>

  <span class="binary">| 1000 0000 = 10<span class="color-blue">01 1111</span>&nbsp;</span>

  <span class="binary">| 1000 0000 = 10<span class="color-green">01 1000</span>&nbsp;</span>

  <span class="binary">| 1000 0000 = 10<span class="color-yellow">11 1011</span>&nbsp;</span>
</div>

<div v-click class="absolute top-49 left-86">
  <span class="binary">&nbsp;= 0xF0</span>

  <span class="binary">&nbsp;= 0x9F</span>

  <span class="binary">&nbsp;= 0x98</span>

  <span class="binary">&nbsp;= 0xBB</span>
</div>

<div class="absolute top-90 left-15">

<v-click>

<hr />

Thus! U+1F63B = \`\\xF0\\x9F\\x97\\xBB\` in UTF-8

</v-click>

</div>

<style>
.part {
  width: 4.5em;
  top: 0em;
}

.parts {
  opacity: 1;
}

.part-1 { left: 5.90em; width: 1.8em; }
.part-2 { left: 7.10em; }
.part-3 { left: 11.9em; }
.part-4 { left: 16.1em; }

.slidev-vclick-current,.slidev-vclick-prior {
  .part { left: 0em; }

  .part-1 { top: 2.3em; left: 2.7em; }
  .part-2 { top: 5.0em; }
  .part-3 { top: 7.5em; }
  .part-4 { top: 10.1em; }
}

.anim {
  transition-delay: 0s;
  transition-duration: 1s;
}
</style>
`,title:"Let's encode!",level:2,content:`## Let's encode!

😻 = U+1F63B = Smiling cat face with heart-shaped eyes

0x1F63B = \`0001 1111 0110 0011 1011\`

<div v-click class="absolute top-40 left-14">
  <span>0x1F63B =&nbsp;</span>
  <span class="binary color-red">&nbsp;00</span>
  <span class="binary color-blue">01 1111</span>
  <span class="binary color-green">&nbsp;0110 00</span>
  <span class="binary color-yellow">11 1011</span>
</div>

<div v-click class="absolute parts top-40 left-14">
  <div class="binary color-red absolute part part-1 anim">00</div>
  <div class="binary color-blue absolute part part-2 anim">01 1111</div>
  <div class="binary color-green absolute part part-3 no-backtick anim">0110 00</div>
  <div class="binary color-yellow absolute part part-4 no-backtick anim">11 1011</div>
</div>

<div v-click class="absolute top-49 left-31">
  <span class="binary">| 1111 0000 = 1111 00<span class="color-red">00</span>&nbsp;</span>

  <span class="binary">| 1000 0000 = 10<span class="color-blue">01 1111</span>&nbsp;</span>

  <span class="binary">| 1000 0000 = 10<span class="color-green">01 1000</span>&nbsp;</span>

  <span class="binary">| 1000 0000 = 10<span class="color-yellow">11 1011</span>&nbsp;</span>
</div>

<div v-click class="absolute top-49 left-86">
  <span class="binary">&nbsp;= 0xF0</span>

  <span class="binary">&nbsp;= 0x9F</span>

  <span class="binary">&nbsp;= 0x98</span>

  <span class="binary">&nbsp;= 0xBB</span>
</div>

<div class="absolute top-90 left-15">

<v-click>

<hr />

Thus! U+1F63B = \`\\xF0\\x9F\\x97\\xBB\` in UTF-8

</v-click>

</div>

<style>
.part {
  width: 4.5em;
  top: 0em;
}

.parts {
  opacity: 1;
}

.part-1 { left: 5.90em; width: 1.8em; }
.part-2 { left: 7.10em; }
.part-3 { left: 11.9em; }
.part-4 { left: 16.1em; }

.slidev-vclick-current,.slidev-vclick-prior {
  .part { left: 0em; }

  .part-1 { top: 2.3em; left: 2.7em; }
  .part-2 { top: 5.0em; }
  .part-3 { top: 7.5em; }
  .part-4 { top: 10.1em; }
}

.anim {
  transition-delay: 0s;
  transition-duration: 1s;
}
</style>`,frontmatter:{},index:16,start:308,end:392},filepath:"/home/ben/Workspace/demystifying-unicode/pages/02-unicode.md",noteHTML:"",id:28,no:29},__clicksElements:[],__preloaded:!1}},{path:"30",name:"page-30",component:xE,meta:{layout:"center",hide:!1,srcSequence:"./pages/02-unicode.md",slide:{raw:`---
layout: center
---

## Summary

<v-clicks>

- Unicode is a standard. It defeines a dictionary of \`codepoints\` to their character descriptions
- UTF-8 is an Encoding - defined by the Unicode Standard.
- Encodings help humans interpret bytes as painted glyphs
- UTF-8 is by far the most common standard due to it's memory efficiency (e.g. variable space) 

</v-clicks>
`,title:"Summary",level:2,content:`## Summary

<v-clicks>

- Unicode is a standard. It defeines a dictionary of \`codepoints\` to their character descriptions
- UTF-8 is an Encoding - defined by the Unicode Standard.
- Encodings help humans interpret bytes as painted glyphs
- UTF-8 is by far the most common standard due to it's memory efficiency (e.g. variable space) 

</v-clicks>`,frontmatter:{layout:"center",hide:!1,srcSequence:"./pages/02-unicode.md"},index:29,start:392,end:407,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/02-unicode.md",raw:`---
layout: center
---

## Summary

<v-clicks>

- Unicode is a standard. It defeines a dictionary of \`codepoints\` to their character descriptions
- UTF-8 is an Encoding - defined by the Unicode Standard.
- Encodings help humans interpret bytes as painted glyphs
- UTF-8 is by far the most common standard due to it's memory efficiency (e.g. variable space) 

</v-clicks>
`,title:"Summary",level:2,content:`## Summary

<v-clicks>

- Unicode is a standard. It defeines a dictionary of \`codepoints\` to their character descriptions
- UTF-8 is an Encoding - defined by the Unicode Standard.
- Encodings help humans interpret bytes as painted glyphs
- UTF-8 is by far the most common standard due to it's memory efficiency (e.g. variable space) 

</v-clicks>`,frontmatter:{layout:"center"},index:17,start:392,end:407},filepath:"/home/ben/Workspace/demystifying-unicode/pages/02-unicode.md",noteHTML:"",id:29,no:30},__clicksElements:[],__preloaded:!1}},{path:"31",name:"page-31",component:AE,meta:{layout:"cover",title:"Unicode in Rust",hide:!1,srcSequence:"./pages/03-unicode-in-rust.md",slide:{raw:null,title:"Unicode in Rust",level:1,content:"# Unicode in Rust",frontmatter:{layout:"cover",title:"Unicode in Rust",hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"},note:`We now know what Unicode and UTF-8 are, how is it used in rust?

- Limits of UTF-8 default
  - Reading binary from disk
  - People not following standards (binary in json without conversion) 
  - We can break a string \`unsafe {}\``,index:30,start:0,end:16,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/03-unicode-in-rust.md",raw:`---
layout: cover
---

# Unicode in Rust

<!--

We now know what Unicode and UTF-8 are, how is it used in rust?

- Limits of UTF-8 default
  - Reading binary from disk
  - People not following standards (binary in json without conversion) 
  - We can break a string \`unsafe {}\`
-->
`,title:"Unicode in Rust",level:1,content:"# Unicode in Rust",frontmatter:{layout:"cover",title:"Unicode in Rust"},note:`We now know what Unicode and UTF-8 are, how is it used in rust?

- Limits of UTF-8 default
  - Reading binary from disk
  - People not following standards (binary in json without conversion) 
  - We can break a string \`unsafe {}\``,index:0,start:0,end:16},inline:{raw:`---
src: ./pages/03-unicode-in-rust.md
hide: false
---
`,content:"",frontmatter:{hide:!1},index:5,start:48,end:53},filepath:"/home/ben/Workspace/demystifying-unicode/pages/03-unicode-in-rust.md",noteHTML:`<p>We now know what Unicode and UTF-8 are, how is it used in rust?</p>
<ul>
<li>Limits of UTF-8 default
<ul>
<li>Reading binary from disk</li>
<li>People not following standards (binary in json without conversion)</li>
<li>We can break a string <code>unsafe {}</code></li>
</ul>
</li>
</ul>
`,id:30,no:31},__clicksElements:[],__preloaded:!1}},{path:"32",name:"page-32",component:EE,meta:{layout:"center",hide:!1,srcSequence:"./pages/03-unicode-in-rust.md",slide:{raw:`---
layout: center
---

Q: What is the primitive string type in rust?
`,content:"Q: What is the primitive string type in rust?",frontmatter:{layout:"center",hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"},index:31,start:16,end:22,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/03-unicode-in-rust.md",raw:`---
layout: center
---

Q: What is the primitive string type in rust?
`,content:"Q: What is the primitive string type in rust?",frontmatter:{layout:"center"},index:1,start:16,end:22},filepath:"/home/ben/Workspace/demystifying-unicode/pages/03-unicode-in-rust.md",noteHTML:"",id:31,no:32},__clicksElements:[],__preloaded:!1}},{path:"33",name:"page-33",component:PE,meta:{layout:"center",hide:!1,srcSequence:"./pages/03-unicode-in-rust.md",slide:{raw:`---
layout: center
---

Answer: \`str\`

<v-click>

Incorrect: \`String\`, \`&str\`

- \`&str\` impls \`AsRef<str>\`
- \`String\` impls \`AsRef<str>\`
- \`String\` impls \`Deref\` to \`str\` (thus \`&String\` derefs to \`&str\`)

</v-click>

<div v-click class="mt-5">

> The \`str\` type, also called a ‘string slice’, is the most primitive string type. It is usually seen in its borrowed form, \`&str\`. It is also the type of string literals, \`&'static str\`.
> 
> String slices are **always** valid UTF-8.

</div>

<!--

Notes:
- str's can never actually be constructed directly
- &str could point to many different places, but it'll always implement the str primitives
- AsRef<str> is one of the common interfaces, however Deref means you can just use &String for &str args.
-->
`,content:'Answer: `str`\n\n<v-click>\n\nIncorrect: `String`, `&str`\n\n- `&str` impls `AsRef<str>`\n- `String` impls `AsRef<str>`\n- `String` impls `Deref` to `str` (thus `&String` derefs to `&str`)\n\n</v-click>\n\n<div v-click class="mt-5">\n\n> The `str` type, also called a ‘string slice’, is the most primitive string type. It is usually seen in its borrowed form, `&str`. It is also the type of string literals, `&\'static str`.\n> \n> String slices are **always** valid UTF-8.\n\n</div>',frontmatter:{layout:"center",hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"},note:`Notes:
- str's can never actually be constructed directly
- &str could point to many different places, but it'll always implement the str primitives
- AsRef<str> is one of the common interfaces, however Deref means you can just use &String for &str args.`,index:32,start:22,end:54,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/03-unicode-in-rust.md",raw:`---
layout: center
---

Answer: \`str\`

<v-click>

Incorrect: \`String\`, \`&str\`

- \`&str\` impls \`AsRef<str>\`
- \`String\` impls \`AsRef<str>\`
- \`String\` impls \`Deref\` to \`str\` (thus \`&String\` derefs to \`&str\`)

</v-click>

<div v-click class="mt-5">

> The \`str\` type, also called a ‘string slice’, is the most primitive string type. It is usually seen in its borrowed form, \`&str\`. It is also the type of string literals, \`&'static str\`.
> 
> String slices are **always** valid UTF-8.

</div>

<!--

Notes:
- str's can never actually be constructed directly
- &str could point to many different places, but it'll always implement the str primitives
- AsRef<str> is one of the common interfaces, however Deref means you can just use &String for &str args.
-->
`,content:'Answer: `str`\n\n<v-click>\n\nIncorrect: `String`, `&str`\n\n- `&str` impls `AsRef<str>`\n- `String` impls `AsRef<str>`\n- `String` impls `Deref` to `str` (thus `&String` derefs to `&str`)\n\n</v-click>\n\n<div v-click class="mt-5">\n\n> The `str` type, also called a ‘string slice’, is the most primitive string type. It is usually seen in its borrowed form, `&str`. It is also the type of string literals, `&\'static str`.\n> \n> String slices are **always** valid UTF-8.\n\n</div>',frontmatter:{layout:"center"},note:`Notes:
- str's can never actually be constructed directly
- &str could point to many different places, but it'll always implement the str primitives
- AsRef<str> is one of the common interfaces, however Deref means you can just use &String for &str args.`,index:2,start:22,end:54},filepath:"/home/ben/Workspace/demystifying-unicode/pages/03-unicode-in-rust.md",noteHTML:`<p>Notes:</p>
<ul>
<li>str's can never actually be constructed directly</li>
<li>&amp;str could point to many different places, but it'll always implement the str primitives</li>
<li>AsRef<str> is one of the common interfaces, however Deref means you can just use &amp;String for &amp;str args.</li>
</ul>
`,id:32,no:33},__clicksElements:[],__preloaded:!1}},{path:"34",name:"page-34",component:o6,meta:{hide:!1,srcSequence:"./pages/03-unicode-in-rust.md",slide:{raw:`
## String slices

<br />

> Primitive Type slice
>
> A dynamically-sized view into a contiguous sequence, [T]. Contiguous here means that elements are laid out so that every element is the same distance from its neighbors.

<br />

<v-click>

What is the output?

\`\`\`rust
fn main() {
    let s = "İstanbul";

    println!("{}", s.len());
}
\`\`\`

</v-click>

<v-clicks>

\`\`\`rust
    //        ^^ 9
\`\`\`

\`\`\`rust
println!("{:x?}", "İstanbul".as_bytes());   // [c4, b0, 73, 74, 61, 6e, 62, 75, 6c]
\`\`\`

</v-clicks>

<footer>

Ref: https://doc.rust-lang.org/std/primitive.slice.html

</footer>

<!--
&str is a slice of bytes, not of utf-8 characters. UTF-8 characters are between 1-4 bytes, so:
- it would be memory inefficient to assume all characters take 4 bytes
- it would be impossible to have a fixed distance with a variable length
Therefore string slices are slices of bytes
-->
`,title:"String slices",level:2,content:`## String slices

<br />

> Primitive Type slice
>
> A dynamically-sized view into a contiguous sequence, [T]. Contiguous here means that elements are laid out so that every element is the same distance from its neighbors.

<br />

<v-click>

What is the output?

\`\`\`rust
fn main() {
    let s = "İstanbul";

    println!("{}", s.len());
}
\`\`\`

</v-click>

<v-clicks>

\`\`\`rust
    //        ^^ 9
\`\`\`

\`\`\`rust
println!("{:x?}", "İstanbul".as_bytes());   // [c4, b0, 73, 74, 61, 6e, 62, 75, 6c]
\`\`\`

</v-clicks>

<footer>

Ref: https://doc.rust-lang.org/std/primitive.slice.html

</footer>`,frontmatter:{hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"},note:`&str is a slice of bytes, not of utf-8 characters. UTF-8 characters are between 1-4 bytes, so:
- it would be memory inefficient to assume all characters take 4 bytes
- it would be impossible to have a fixed distance with a variable length
Therefore string slices are slices of bytes`,index:33,start:55,end:105,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/03-unicode-in-rust.md",raw:`
## String slices

<br />

> Primitive Type slice
>
> A dynamically-sized view into a contiguous sequence, [T]. Contiguous here means that elements are laid out so that every element is the same distance from its neighbors.

<br />

<v-click>

What is the output?

\`\`\`rust
fn main() {
    let s = "İstanbul";

    println!("{}", s.len());
}
\`\`\`

</v-click>

<v-clicks>

\`\`\`rust
    //        ^^ 9
\`\`\`

\`\`\`rust
println!("{:x?}", "İstanbul".as_bytes());   // [c4, b0, 73, 74, 61, 6e, 62, 75, 6c]
\`\`\`

</v-clicks>

<footer>

Ref: https://doc.rust-lang.org/std/primitive.slice.html

</footer>

<!--
&str is a slice of bytes, not of utf-8 characters. UTF-8 characters are between 1-4 bytes, so:
- it would be memory inefficient to assume all characters take 4 bytes
- it would be impossible to have a fixed distance with a variable length
Therefore string slices are slices of bytes
-->
`,title:"String slices",level:2,content:`## String slices

<br />

> Primitive Type slice
>
> A dynamically-sized view into a contiguous sequence, [T]. Contiguous here means that elements are laid out so that every element is the same distance from its neighbors.

<br />

<v-click>

What is the output?

\`\`\`rust
fn main() {
    let s = "İstanbul";

    println!("{}", s.len());
}
\`\`\`

</v-click>

<v-clicks>

\`\`\`rust
    //        ^^ 9
\`\`\`

\`\`\`rust
println!("{:x?}", "İstanbul".as_bytes());   // [c4, b0, 73, 74, 61, 6e, 62, 75, 6c]
\`\`\`

</v-clicks>

<footer>

Ref: https://doc.rust-lang.org/std/primitive.slice.html

</footer>`,frontmatter:{},note:`&str is a slice of bytes, not of utf-8 characters. UTF-8 characters are between 1-4 bytes, so:
- it would be memory inefficient to assume all characters take 4 bytes
- it would be impossible to have a fixed distance with a variable length
Therefore string slices are slices of bytes`,index:3,start:55,end:105},filepath:"/home/ben/Workspace/demystifying-unicode/pages/03-unicode-in-rust.md",noteHTML:`<p>&amp;str is a slice of bytes, not of utf-8 characters. UTF-8 characters are between 1-4 bytes, so:</p>
<ul>
<li>it would be memory inefficient to assume all characters take 4 bytes</li>
<li>it would be impossible to have a fixed distance with a variable length
Therefore string slices are slices of bytes</li>
</ul>
`,id:33,no:34},__clicksElements:[],__preloaded:!1}},{path:"35",name:"page-35",component:l6,meta:{layout:"center",hide:!1,srcSequence:"./pages/03-unicode-in-rust.md",slide:{raw:`---
layout: center
---

## A String slice (\`str\`) is just a slice of bytes (\`[u8]\`), **which contents are always valid UTF-8**.
`,title:"A String slice (`str`) is just a slice of bytes (`[u8]`), **which contents are always valid UTF-8**.",level:2,content:"## A String slice (`str`) is just a slice of bytes (`[u8]`), **which contents are always valid UTF-8**.",frontmatter:{layout:"center",hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"},index:34,start:105,end:111,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/03-unicode-in-rust.md",raw:`---
layout: center
---

## A String slice (\`str\`) is just a slice of bytes (\`[u8]\`), **which contents are always valid UTF-8**.
`,title:"A String slice (`str`) is just a slice of bytes (`[u8]`), **which contents are always valid UTF-8**.",level:2,content:"## A String slice (`str`) is just a slice of bytes (`[u8]`), **which contents are always valid UTF-8**.",frontmatter:{layout:"center"},index:4,start:105,end:111},filepath:"/home/ben/Workspace/demystifying-unicode/pages/03-unicode-in-rust.md",noteHTML:"",id:34,no:35},__clicksElements:[],__preloaded:!1}},{path:"36",name:"page-36",component:u6,meta:{layout:"center",hide:!1,srcSequence:"./pages/03-unicode-in-rust.md",slide:{raw:`---
layout: center
---

## Lets make some strings
`,title:"Lets make some strings",level:2,content:"## Lets make some strings",frontmatter:{layout:"center",hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"},index:35,start:111,end:117,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/03-unicode-in-rust.md",raw:`---
layout: center
---

## Lets make some strings
`,title:"Lets make some strings",level:2,content:"## Lets make some strings",frontmatter:{layout:"center"},index:5,start:111,end:117},filepath:"/home/ben/Workspace/demystifying-unicode/pages/03-unicode-in-rust.md",noteHTML:"",id:35,no:36},__clicksElements:[],__preloaded:!1}},{path:"37",name:"page-37",component:v6,meta:{hide:!1,srcSequence:"./pages/03-unicode-in-rust.md",slide:{raw:`
## Creating strings

> String slices are **always** valid UTF-8.

∴ The compiler won't compile your rust if you try to do non UTF-8 things in \`&str\`

\`\`\`rust
fn main() {
    // ASCII chars are always safe!
    let s = "Hello World";     // Good
    let s = "Hello\\x20World";  // Also good
    let s = "Hello\\x7FWorld";  // Also good (\\x7F is the control character \`DEL\`)
    let s = "Hello\\x80World";  // Fails
    //            ^^^^ must be a character in the range [\\x00-\\x7f]
}
\`\`\`

<v-click>

... and for completeness...

\`\`\`rust
fn main() {
    let s = "Hello\\u{0020}World";   // Good
    let s = "Hello\\u{1F63B}World";   // Good
    let s = "Hello\\u{110000}World";  // Fails
    //            ^^^^^^^^^^ invalid escape
}

\`\`\`

</v-click>

<!--
\\x7F is DEL, so it seems as though the character is added then removed :shrug:
-->
`,title:"Creating strings",level:2,content:`## Creating strings

> String slices are **always** valid UTF-8.

∴ The compiler won't compile your rust if you try to do non UTF-8 things in \`&str\`

\`\`\`rust
fn main() {
    // ASCII chars are always safe!
    let s = "Hello World";     // Good
    let s = "Hello\\x20World";  // Also good
    let s = "Hello\\x7FWorld";  // Also good (\\x7F is the control character \`DEL\`)
    let s = "Hello\\x80World";  // Fails
    //            ^^^^ must be a character in the range [\\x00-\\x7f]
}
\`\`\`

<v-click>

... and for completeness...

\`\`\`rust
fn main() {
    let s = "Hello\\u{0020}World";   // Good
    let s = "Hello\\u{1F63B}World";   // Good
    let s = "Hello\\u{110000}World";  // Fails
    //            ^^^^^^^^^^ invalid escape
}

\`\`\`

</v-click>`,frontmatter:{hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"},note:"\\x7F is DEL, so it seems as though the character is added then removed :shrug:",index:36,start:118,end:156,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/03-unicode-in-rust.md",raw:`
## Creating strings

> String slices are **always** valid UTF-8.

∴ The compiler won't compile your rust if you try to do non UTF-8 things in \`&str\`

\`\`\`rust
fn main() {
    // ASCII chars are always safe!
    let s = "Hello World";     // Good
    let s = "Hello\\x20World";  // Also good
    let s = "Hello\\x7FWorld";  // Also good (\\x7F is the control character \`DEL\`)
    let s = "Hello\\x80World";  // Fails
    //            ^^^^ must be a character in the range [\\x00-\\x7f]
}
\`\`\`

<v-click>

... and for completeness...

\`\`\`rust
fn main() {
    let s = "Hello\\u{0020}World";   // Good
    let s = "Hello\\u{1F63B}World";   // Good
    let s = "Hello\\u{110000}World";  // Fails
    //            ^^^^^^^^^^ invalid escape
}

\`\`\`

</v-click>

<!--
\\x7F is DEL, so it seems as though the character is added then removed :shrug:
-->
`,title:"Creating strings",level:2,content:`## Creating strings

> String slices are **always** valid UTF-8.

∴ The compiler won't compile your rust if you try to do non UTF-8 things in \`&str\`

\`\`\`rust
fn main() {
    // ASCII chars are always safe!
    let s = "Hello World";     // Good
    let s = "Hello\\x20World";  // Also good
    let s = "Hello\\x7FWorld";  // Also good (\\x7F is the control character \`DEL\`)
    let s = "Hello\\x80World";  // Fails
    //            ^^^^ must be a character in the range [\\x00-\\x7f]
}
\`\`\`

<v-click>

... and for completeness...

\`\`\`rust
fn main() {
    let s = "Hello\\u{0020}World";   // Good
    let s = "Hello\\u{1F63B}World";   // Good
    let s = "Hello\\u{110000}World";  // Fails
    //            ^^^^^^^^^^ invalid escape
}

\`\`\`

</v-click>`,frontmatter:{},note:"\\x7F is DEL, so it seems as though the character is added then removed :shrug:",index:6,start:118,end:156},filepath:"/home/ben/Workspace/demystifying-unicode/pages/03-unicode-in-rust.md",noteHTML:`<p>\\x7F is DEL, so it seems as though the character is added then removed :shrug:</p>
`,id:36,no:37},__clicksElements:[],__preloaded:!1}},{path:"38",name:"page-38",component:S6,meta:{hide:!1,srcSequence:"./pages/03-unicode-in-rust.md",slide:{raw:`
## Creating Strings

Remember, all strings are just a sequence of bytes. As such, rust will also let us create strings from exactly that, vectors of bytes.

\`\`\`rust
fn main() {
    let cat: [u8; 4] = [0xF0, 0x9F, 0x98, 0xBB];

    let s = std::str::from_utf8(&cat).unwrap();
    // let s = String::from_utf8(cat.to_vec()).unwrap();

    println!("{s}");
    //        ^^^ 😻 
}
\`\`\`

<v-click>

... and we can create byte sequences from strings even! (thanks compiler!)

\`\`\`rust
fn main() {
    let s = b"Hello World!";

    assert_eq!(s, &[72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100, 33]);  // passes
}
\`\`\` 

</v-click>
`,title:"Creating Strings",level:2,content:`## Creating Strings

Remember, all strings are just a sequence of bytes. As such, rust will also let us create strings from exactly that, vectors of bytes.

\`\`\`rust
fn main() {
    let cat: [u8; 4] = [0xF0, 0x9F, 0x98, 0xBB];

    let s = std::str::from_utf8(&cat).unwrap();
    // let s = String::from_utf8(cat.to_vec()).unwrap();

    println!("{s}");
    //        ^^^ 😻 
}
\`\`\`

<v-click>

... and we can create byte sequences from strings even! (thanks compiler!)

\`\`\`rust
fn main() {
    let s = b"Hello World!";

    assert_eq!(s, &[72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100, 33]);  // passes
}
\`\`\` 

</v-click>`,frontmatter:{hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"},index:37,start:157,end:188,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/03-unicode-in-rust.md",raw:`
## Creating Strings

Remember, all strings are just a sequence of bytes. As such, rust will also let us create strings from exactly that, vectors of bytes.

\`\`\`rust
fn main() {
    let cat: [u8; 4] = [0xF0, 0x9F, 0x98, 0xBB];

    let s = std::str::from_utf8(&cat).unwrap();
    // let s = String::from_utf8(cat.to_vec()).unwrap();

    println!("{s}");
    //        ^^^ 😻 
}
\`\`\`

<v-click>

... and we can create byte sequences from strings even! (thanks compiler!)

\`\`\`rust
fn main() {
    let s = b"Hello World!";

    assert_eq!(s, &[72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100, 33]);  // passes
}
\`\`\` 

</v-click>
`,title:"Creating Strings",level:2,content:`## Creating Strings

Remember, all strings are just a sequence of bytes. As such, rust will also let us create strings from exactly that, vectors of bytes.

\`\`\`rust
fn main() {
    let cat: [u8; 4] = [0xF0, 0x9F, 0x98, 0xBB];

    let s = std::str::from_utf8(&cat).unwrap();
    // let s = String::from_utf8(cat.to_vec()).unwrap();

    println!("{s}");
    //        ^^^ 😻 
}
\`\`\`

<v-click>

... and we can create byte sequences from strings even! (thanks compiler!)

\`\`\`rust
fn main() {
    let s = b"Hello World!";

    assert_eq!(s, &[72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100, 33]);  // passes
}
\`\`\` 

</v-click>`,frontmatter:{},index:7,start:157,end:188},filepath:"/home/ben/Workspace/demystifying-unicode/pages/03-unicode-in-rust.md",noteHTML:"",id:37,no:38},__clicksElements:[],__preloaded:!1}},{path:"39",name:"page-39",component:B6,meta:{hide:!1,srcSequence:"./pages/03-unicode-in-rust.md",slide:{raw:`
## Creating strings

Even \`char\` primitives!

\`\`\`rust {0-7,10,13-16|all}
fn main() {
    let s: [char; 4] = [
        '\\u{0048}',
        char::from_u32(0x69).unwrap(),
        unsafe { char::from_u32_unchecked(0x20) },
        '\\u{1F63B}'
    ];
    println!("{}", s.len() * std::mem::size_of::<char>());  // 16
    
    let t: String = s.iter().collect();
    println!("{}", t.len() * std::mem::size_of::<u8>());    // 7

    println!("{t}");
    //        ^^^ "Hi 😻"
}
\`\`\`

👆 Yes, \`.iter().collect();\`
`,title:"Creating strings",level:2,content:`## Creating strings

Even \`char\` primitives!

\`\`\`rust {0-7,10,13-16|all}
fn main() {
    let s: [char; 4] = [
        '\\u{0048}',
        char::from_u32(0x69).unwrap(),
        unsafe { char::from_u32_unchecked(0x20) },
        '\\u{1F63B}'
    ];
    println!("{}", s.len() * std::mem::size_of::<char>());  // 16
    
    let t: String = s.iter().collect();
    println!("{}", t.len() * std::mem::size_of::<u8>());    // 7

    println!("{t}");
    //        ^^^ "Hi 😻"
}
\`\`\`

👆 Yes, \`.iter().collect();\``,frontmatter:{hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"},index:38,start:189,end:214,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/03-unicode-in-rust.md",raw:`
## Creating strings

Even \`char\` primitives!

\`\`\`rust {0-7,10,13-16|all}
fn main() {
    let s: [char; 4] = [
        '\\u{0048}',
        char::from_u32(0x69).unwrap(),
        unsafe { char::from_u32_unchecked(0x20) },
        '\\u{1F63B}'
    ];
    println!("{}", s.len() * std::mem::size_of::<char>());  // 16
    
    let t: String = s.iter().collect();
    println!("{}", t.len() * std::mem::size_of::<u8>());    // 7

    println!("{t}");
    //        ^^^ "Hi 😻"
}
\`\`\`

👆 Yes, \`.iter().collect();\`
`,title:"Creating strings",level:2,content:`## Creating strings

Even \`char\` primitives!

\`\`\`rust {0-7,10,13-16|all}
fn main() {
    let s: [char; 4] = [
        '\\u{0048}',
        char::from_u32(0x69).unwrap(),
        unsafe { char::from_u32_unchecked(0x20) },
        '\\u{1F63B}'
    ];
    println!("{}", s.len() * std::mem::size_of::<char>());  // 16
    
    let t: String = s.iter().collect();
    println!("{}", t.len() * std::mem::size_of::<u8>());    // 7

    println!("{t}");
    //        ^^^ "Hi 😻"
}
\`\`\`

👆 Yes, \`.iter().collect();\``,frontmatter:{},index:8,start:189,end:214},filepath:"/home/ben/Workspace/demystifying-unicode/pages/03-unicode-in-rust.md",noteHTML:"",id:38,no:39},__clicksElements:[],__preloaded:!1}},{path:"40",name:"page-40",component:I6,meta:{layout:"center",hide:!1,srcSequence:"./pages/03-unicode-in-rust.md",slide:{raw:`---
layout: center
---

## See, creating strings is easy!
`,title:"See, creating strings is easy!",level:2,content:"## See, creating strings is easy!",frontmatter:{layout:"center",hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"},index:39,start:214,end:220,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/03-unicode-in-rust.md",raw:`---
layout: center
---

## See, creating strings is easy!
`,title:"See, creating strings is easy!",level:2,content:"## See, creating strings is easy!",frontmatter:{layout:"center"},index:9,start:214,end:220},filepath:"/home/ben/Workspace/demystifying-unicode/pages/03-unicode-in-rust.md",noteHTML:"",id:39,no:40},__clicksElements:[],__preloaded:!1}},{path:"41",name:"page-41",component:W6,meta:{hide:!1,srcSequence:"./pages/03-unicode-in-rust.md",slide:{raw:`
## UTF8Error

Until it panics.

\`\`\`rust
fn main() {
    let cat: [u8; 4] = [0xF0, 0x9F, 0x98, 0xBB];

    // Panics
    let s = std::str::from_utf8(&cat[0..2]).unwrap();
    // thread 'main' panicked at 'called \`Result::unwrap()\` on an \`Err\` value:
    //   FromUtf8Error { bytes: [128], error: Utf8Error { valid_up_to: 0, error_len: Some(1) } }', src/main.rs:5:35
}
\`\`\`

<p v-click class="pt-10">

> String slices are **always** valid UTF-8.

😬 Yeah, not all sequencess of bytes are "Valid UTF-8"

</p>
`,title:"UTF8Error",level:2,content:`## UTF8Error

Until it panics.

\`\`\`rust
fn main() {
    let cat: [u8; 4] = [0xF0, 0x9F, 0x98, 0xBB];

    // Panics
    let s = std::str::from_utf8(&cat[0..2]).unwrap();
    // thread 'main' panicked at 'called \`Result::unwrap()\` on an \`Err\` value:
    //   FromUtf8Error { bytes: [128], error: Utf8Error { valid_up_to: 0, error_len: Some(1) } }', src/main.rs:5:35
}
\`\`\`

<p v-click class="pt-10">

> String slices are **always** valid UTF-8.

😬 Yeah, not all sequencess of bytes are "Valid UTF-8"

</p>`,frontmatter:{hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"},index:40,start:221,end:245,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/03-unicode-in-rust.md",raw:`
## UTF8Error

Until it panics.

\`\`\`rust
fn main() {
    let cat: [u8; 4] = [0xF0, 0x9F, 0x98, 0xBB];

    // Panics
    let s = std::str::from_utf8(&cat[0..2]).unwrap();
    // thread 'main' panicked at 'called \`Result::unwrap()\` on an \`Err\` value:
    //   FromUtf8Error { bytes: [128], error: Utf8Error { valid_up_to: 0, error_len: Some(1) } }', src/main.rs:5:35
}
\`\`\`

<p v-click class="pt-10">

> String slices are **always** valid UTF-8.

😬 Yeah, not all sequencess of bytes are "Valid UTF-8"

</p>
`,title:"UTF8Error",level:2,content:`## UTF8Error

Until it panics.

\`\`\`rust
fn main() {
    let cat: [u8; 4] = [0xF0, 0x9F, 0x98, 0xBB];

    // Panics
    let s = std::str::from_utf8(&cat[0..2]).unwrap();
    // thread 'main' panicked at 'called \`Result::unwrap()\` on an \`Err\` value:
    //   FromUtf8Error { bytes: [128], error: Utf8Error { valid_up_to: 0, error_len: Some(1) } }', src/main.rs:5:35
}
\`\`\`

<p v-click class="pt-10">

> String slices are **always** valid UTF-8.

😬 Yeah, not all sequencess of bytes are "Valid UTF-8"

</p>`,frontmatter:{},index:10,start:221,end:245},filepath:"/home/ben/Workspace/demystifying-unicode/pages/03-unicode-in-rust.md",noteHTML:"",id:40,no:41},__clicksElements:[],__preloaded:!1}},{path:"42",name:"page-42",component:Y6,meta:{hide:!1,srcSequence:"./pages/03-unicode-in-rust.md",slide:{raw:'\n## Invalid UTF-8\n\n...We didn\'t talk about Invalid UTF-8 yet\n\n<v-click>\n\n- First byte of UTF-8 byte sequences\n  - 1 byte seq: `0xxxxxxx`\n  - 2 byte seq: `110xxxxx` - `0xCx` or `0xDx` = 2 bytes \n  - 3 byte seq: `1110xxxx` - `0xEx` = 3 bytes\n  - 4 byte seq: `11110xxx` - `0xFx` = 4 bytes\n\n</v-click>\n\n<v-click>\n\n- ∴ The following are "broken":\n  - `[0xA0]`, `[0xB0]` - invalid sequences\n  - `[0xC0]`, `[0xD0]` - missing second byte\n  - `[0xE0, 0xFF]` - missing third byte\n  - `[0xF0, 0xFF, 0xFF]` - missing fourth byte\n\n</v-click>\n',title:"Invalid UTF-8",level:2,content:'## Invalid UTF-8\n\n...We didn\'t talk about Invalid UTF-8 yet\n\n<v-click>\n\n- First byte of UTF-8 byte sequences\n  - 1 byte seq: `0xxxxxxx`\n  - 2 byte seq: `110xxxxx` - `0xCx` or `0xDx` = 2 bytes \n  - 3 byte seq: `1110xxxx` - `0xEx` = 3 bytes\n  - 4 byte seq: `11110xxx` - `0xFx` = 4 bytes\n\n</v-click>\n\n<v-click>\n\n- ∴ The following are "broken":\n  - `[0xA0]`, `[0xB0]` - invalid sequences\n  - `[0xC0]`, `[0xD0]` - missing second byte\n  - `[0xE0, 0xFF]` - missing third byte\n  - `[0xF0, 0xFF, 0xFF]` - missing fourth byte\n\n</v-click>',frontmatter:{hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"},index:41,start:246,end:271,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/03-unicode-in-rust.md",raw:'\n## Invalid UTF-8\n\n...We didn\'t talk about Invalid UTF-8 yet\n\n<v-click>\n\n- First byte of UTF-8 byte sequences\n  - 1 byte seq: `0xxxxxxx`\n  - 2 byte seq: `110xxxxx` - `0xCx` or `0xDx` = 2 bytes \n  - 3 byte seq: `1110xxxx` - `0xEx` = 3 bytes\n  - 4 byte seq: `11110xxx` - `0xFx` = 4 bytes\n\n</v-click>\n\n<v-click>\n\n- ∴ The following are "broken":\n  - `[0xA0]`, `[0xB0]` - invalid sequences\n  - `[0xC0]`, `[0xD0]` - missing second byte\n  - `[0xE0, 0xFF]` - missing third byte\n  - `[0xF0, 0xFF, 0xFF]` - missing fourth byte\n\n</v-click>\n',title:"Invalid UTF-8",level:2,content:'## Invalid UTF-8\n\n...We didn\'t talk about Invalid UTF-8 yet\n\n<v-click>\n\n- First byte of UTF-8 byte sequences\n  - 1 byte seq: `0xxxxxxx`\n  - 2 byte seq: `110xxxxx` - `0xCx` or `0xDx` = 2 bytes \n  - 3 byte seq: `1110xxxx` - `0xEx` = 3 bytes\n  - 4 byte seq: `11110xxx` - `0xFx` = 4 bytes\n\n</v-click>\n\n<v-click>\n\n- ∴ The following are "broken":\n  - `[0xA0]`, `[0xB0]` - invalid sequences\n  - `[0xC0]`, `[0xD0]` - missing second byte\n  - `[0xE0, 0xFF]` - missing third byte\n  - `[0xF0, 0xFF, 0xFF]` - missing fourth byte\n\n</v-click>',frontmatter:{},index:11,start:246,end:271},filepath:"/home/ben/Workspace/demystifying-unicode/pages/03-unicode-in-rust.md",noteHTML:"",id:41,no:42},__clicksElements:[],__preloaded:!1}},{path:"43",name:"page-43",component:J6,meta:{layout:"center",hide:!1,srcSequence:"./pages/03-unicode-in-rust.md",slide:{raw:`---
layout: center
---

## Where Enforced UTF-8 can go wrong
`,title:"Where Enforced UTF-8 can go wrong",level:2,content:"## Where Enforced UTF-8 can go wrong",frontmatter:{layout:"center",hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"},index:42,start:271,end:277,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/03-unicode-in-rust.md",raw:`---
layout: center
---

## Where Enforced UTF-8 can go wrong
`,title:"Where Enforced UTF-8 can go wrong",level:2,content:"## Where Enforced UTF-8 can go wrong",frontmatter:{layout:"center"},index:12,start:271,end:277},filepath:"/home/ben/Workspace/demystifying-unicode/pages/03-unicode-in-rust.md",noteHTML:"",id:42,no:43},__clicksElements:[],__preloaded:!1}},{path:"44",name:"page-44",component:n4,meta:{hide:!1,srcSequence:"./pages/03-unicode-in-rust.md",slide:{raw:`
## Reading and Writing files

- Binary "strings" (e.g. reading/writing from disk)
`,title:"Reading and Writing files",level:2,content:`## Reading and Writing files

- Binary "strings" (e.g. reading/writing from disk)`,frontmatter:{hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"},index:43,start:278,end:283,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/03-unicode-in-rust.md",raw:`
## Reading and Writing files

- Binary "strings" (e.g. reading/writing from disk)
`,title:"Reading and Writing files",level:2,content:`## Reading and Writing files

- Binary "strings" (e.g. reading/writing from disk)`,frontmatter:{},index:13,start:278,end:283},filepath:"/home/ben/Workspace/demystifying-unicode/pages/03-unicode-in-rust.md",noteHTML:"",id:43,no:44},__clicksElements:[],__preloaded:!1}},{path:"45",name:"page-45",component:i4,meta:{hide:!1,srcSequence:"./pages/03-unicode-in-rust.md",slide:{raw:`
## Standards - and why we follow them

- JSON, but it's binary blobs as values
`,title:"Standards - and why we follow them",level:2,content:`## Standards - and why we follow them

- JSON, but it's binary blobs as values`,frontmatter:{hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"},index:44,start:284,end:289,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/03-unicode-in-rust.md",raw:`
## Standards - and why we follow them

- JSON, but it's binary blobs as values
`,title:"Standards - and why we follow them",level:2,content:`## Standards - and why we follow them

- JSON, but it's binary blobs as values`,frontmatter:{},index:14,start:284,end:289},filepath:"/home/ben/Workspace/demystifying-unicode/pages/03-unicode-in-rust.md",noteHTML:"",id:44,no:45},__clicksElements:[],__preloaded:!1}},{path:"46",name:"page-46",component:u4,meta:{hide:!1,srcSequence:"./pages/03-unicode-in-rust.md",slide:{raw:"\n## `unsafe` is unsafe\n\n- Breaking `&str`s (pushing non utf8 bytes)\n",title:"`unsafe` is unsafe",level:2,content:"## `unsafe` is unsafe\n\n- Breaking `&str`s (pushing non utf8 bytes)",frontmatter:{hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"},index:45,start:290,end:295,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/03-unicode-in-rust.md",raw:"\n## `unsafe` is unsafe\n\n- Breaking `&str`s (pushing non utf8 bytes)\n",title:"`unsafe` is unsafe",level:2,content:"## `unsafe` is unsafe\n\n- Breaking `&str`s (pushing non utf8 bytes)",frontmatter:{},index:15,start:290,end:295},filepath:"/home/ben/Workspace/demystifying-unicode/pages/03-unicode-in-rust.md",noteHTML:"",id:45,no:46},__clicksElements:[],__preloaded:!1}},{path:"47",name:"page-47",component:h4,meta:{hide:!1,srcSequence:"./pages/03-unicode-in-rust.md",slide:{raw:`
## Conventially UTF-8 vs. Gaurantee

With the help of bstr crate
`,title:"Conventially UTF-8 vs. Gaurantee",level:2,content:`## Conventially UTF-8 vs. Gaurantee

With the help of bstr crate`,frontmatter:{hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"},index:46,start:296,end:301,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/03-unicode-in-rust.md",raw:`
## Conventially UTF-8 vs. Gaurantee

With the help of bstr crate
`,title:"Conventially UTF-8 vs. Gaurantee",level:2,content:`## Conventially UTF-8 vs. Gaurantee

With the help of bstr crate`,frontmatter:{},index:16,start:296,end:301},filepath:"/home/ben/Workspace/demystifying-unicode/pages/03-unicode-in-rust.md",noteHTML:"",id:46,no:47},__clicksElements:[],__preloaded:!1}},{path:"48",name:"page-48",component:x4,meta:{layout:"center",hide:!1,srcSequence:"./pages/03-unicode-in-rust.md",slide:{raw:`---
layout: center
---

## Summary

\`str\` is the primitive string - a slice of bytes with gaurantees of UTF-8

\`str\` is always \`UTF-8\`

\`UTF8Error\` is because you should be handling bytes instead of strings

\`bstr\` if you want Conventially UTF-8 instead
`,title:"Summary",level:2,content:"## Summary\n\n`str` is the primitive string - a slice of bytes with gaurantees of UTF-8\n\n`str` is always `UTF-8`\n\n`UTF8Error` is because you should be handling bytes instead of strings\n\n`bstr` if you want Conventially UTF-8 instead",frontmatter:{layout:"center",hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"},index:47,start:301,end:315,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/03-unicode-in-rust.md",raw:`---
layout: center
---

## Summary

\`str\` is the primitive string - a slice of bytes with gaurantees of UTF-8

\`str\` is always \`UTF-8\`

\`UTF8Error\` is because you should be handling bytes instead of strings

\`bstr\` if you want Conventially UTF-8 instead
`,title:"Summary",level:2,content:"## Summary\n\n`str` is the primitive string - a slice of bytes with gaurantees of UTF-8\n\n`str` is always `UTF-8`\n\n`UTF8Error` is because you should be handling bytes instead of strings\n\n`bstr` if you want Conventially UTF-8 instead",frontmatter:{layout:"center"},index:17,start:301,end:315},filepath:"/home/ben/Workspace/demystifying-unicode/pages/03-unicode-in-rust.md",noteHTML:"",id:47,no:48},__clicksElements:[],__preloaded:!1}},{path:"49",name:"page-49",component:A4,meta:{layout:"cover",title:"Quirks",hide:!1,srcSequence:"./pages/04-quirks.md",slide:{raw:null,title:"Quirks",level:1,content:"# Quirks",frontmatter:{layout:"cover",title:"Quirks",hide:!1,srcSequence:"./pages/04-quirks.md"},index:48,start:0,end:6,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/04-quirks.md",raw:`---
layout: cover
---

# Quirks
`,title:"Quirks",level:1,content:"# Quirks",frontmatter:{layout:"cover",title:"Quirks"},index:0,start:0,end:6},inline:{raw:`---
src: ./pages/04-quirks.md
hide: false
---
`,content:"",frontmatter:{hide:!1},index:6,start:53,end:58},filepath:"/home/ben/Workspace/demystifying-unicode/pages/04-quirks.md",noteHTML:"",id:48,no:49},__clicksElements:[],__preloaded:!1}},{path:"50",name:"page-50",component:$4,meta:{hide:!1,srcSequence:"./pages/04-quirks.md",slide:{raw:`
## Capitalization (AKA Casemapping and Casefolding)

All ASCII letters just so happen to be lossless when transitioning between upper and lower case versions. But this doesn't apply to all languages and characters.

Capitalization - "\\u0131" == "\\u0131".upcase.downcase. "\\u0131".upcase.downcase(:turkic)

Fun fact: There are no RTL languages that have the concept of casing (Arabic, Hebrew, Persian, and more...)
`,title:"Capitalization (AKA Casemapping and Casefolding)",level:2,content:`## Capitalization (AKA Casemapping and Casefolding)

All ASCII letters just so happen to be lossless when transitioning between upper and lower case versions. But this doesn't apply to all languages and characters.

Capitalization - "\\u0131" == "\\u0131".upcase.downcase. "\\u0131".upcase.downcase(:turkic)

Fun fact: There are no RTL languages that have the concept of casing (Arabic, Hebrew, Persian, and more...)`,frontmatter:{hide:!1,srcSequence:"./pages/04-quirks.md"},index:49,start:7,end:16,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/04-quirks.md",raw:`
## Capitalization (AKA Casemapping and Casefolding)

All ASCII letters just so happen to be lossless when transitioning between upper and lower case versions. But this doesn't apply to all languages and characters.

Capitalization - "\\u0131" == "\\u0131".upcase.downcase. "\\u0131".upcase.downcase(:turkic)

Fun fact: There are no RTL languages that have the concept of casing (Arabic, Hebrew, Persian, and more...)
`,title:"Capitalization (AKA Casemapping and Casefolding)",level:2,content:`## Capitalization (AKA Casemapping and Casefolding)

All ASCII letters just so happen to be lossless when transitioning between upper and lower case versions. But this doesn't apply to all languages and characters.

Capitalization - "\\u0131" == "\\u0131".upcase.downcase. "\\u0131".upcase.downcase(:turkic)

Fun fact: There are no RTL languages that have the concept of casing (Arabic, Hebrew, Persian, and more...)`,frontmatter:{},index:1,start:7,end:16},filepath:"/home/ben/Workspace/demystifying-unicode/pages/04-quirks.md",noteHTML:"",id:49,no:50},__clicksElements:[],__preloaded:!1}},{path:"51",name:"page-51",component:q4,meta:{hide:!1,srcSequence:"./pages/04-quirks.md",slide:{raw:"\n## Composition\n\nA[cute] E\n\n- é = `\\u00e9`\n- é = `\\u0065\\u0301` (just an `e` but with special `\\u0301` combining)\n\n```\né != é\n```\n\n`\\u003d\\u0338\\u003d` vs. `\\u2260` vs. `!=`\n\n```\n'≠=' != '≠' != '!='\n```\n\nNot not equal\n```\n=⃥\n```\n\n<footer>\n\n- Unicode combining classes: https://www.compart.com/en/unicode/combining\n- Unicode Normalization Forms: http://www.unicode.org/reports/tr15/\n- Crate unicode\\_normalization: https://docs.rs/unicode-normalization/latest/unicode_normalization/\n\n</footer>\n",title:"Composition",level:2,content:"## Composition\n\nA[cute] E\n\n- é = `\\u00e9`\n- é = `\\u0065\\u0301` (just an `e` but with special `\\u0301` combining)\n\n```\né != é\n```\n\n`\\u003d\\u0338\\u003d` vs. `\\u2260` vs. `!=`\n\n```\n'≠=' != '≠' != '!='\n```\n\nNot not equal\n```\n=⃥\n```\n\n<footer>\n\n- Unicode combining classes: https://www.compart.com/en/unicode/combining\n- Unicode Normalization Forms: http://www.unicode.org/reports/tr15/\n- Crate unicode\\_normalization: https://docs.rs/unicode-normalization/latest/unicode_normalization/\n\n</footer>",frontmatter:{hide:!1,srcSequence:"./pages/04-quirks.md"},index:50,start:17,end:48,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/04-quirks.md",raw:"\n## Composition\n\nA[cute] E\n\n- é = `\\u00e9`\n- é = `\\u0065\\u0301` (just an `e` but with special `\\u0301` combining)\n\n```\né != é\n```\n\n`\\u003d\\u0338\\u003d` vs. `\\u2260` vs. `!=`\n\n```\n'≠=' != '≠' != '!='\n```\n\nNot not equal\n```\n=⃥\n```\n\n<footer>\n\n- Unicode combining classes: https://www.compart.com/en/unicode/combining\n- Unicode Normalization Forms: http://www.unicode.org/reports/tr15/\n- Crate unicode\\_normalization: https://docs.rs/unicode-normalization/latest/unicode_normalization/\n\n</footer>\n",title:"Composition",level:2,content:"## Composition\n\nA[cute] E\n\n- é = `\\u00e9`\n- é = `\\u0065\\u0301` (just an `e` but with special `\\u0301` combining)\n\n```\né != é\n```\n\n`\\u003d\\u0338\\u003d` vs. `\\u2260` vs. `!=`\n\n```\n'≠=' != '≠' != '!='\n```\n\nNot not equal\n```\n=⃥\n```\n\n<footer>\n\n- Unicode combining classes: https://www.compart.com/en/unicode/combining\n- Unicode Normalization Forms: http://www.unicode.org/reports/tr15/\n- Crate unicode\\_normalization: https://docs.rs/unicode-normalization/latest/unicode_normalization/\n\n</footer>",frontmatter:{},index:2,start:17,end:48},filepath:"/home/ben/Workspace/demystifying-unicode/pages/04-quirks.md",noteHTML:"",id:50,no:51},__clicksElements:[],__preloaded:!1}},{path:"52",name:"page-52",component:V4,meta:{hide:!1,srcSequence:"./pages/04-quirks.md",slide:{raw:`
## Emoji Composition

<p style="font-size: 65%; line-height: 1rem;"> 😶‍🌫️ 😮‍💨 😵‍💫 ❤️‍🔥 ❤️‍🩹 👁️‍🗨️ 🫱🏻‍🫲🏼 🫱🏻‍🫲🏽 🫱🏻‍🫲🏾 🫱🏻‍🫲🏿 🫱🏼‍🫲🏻 🫱🏼‍🫲🏽 🫱🏼‍🫲🏾 🫱🏼‍🫲🏿 🫱🏽‍🫲🏻 🫱🏽‍🫲🏼 🫱🏽‍🫲🏾 🫱🏽‍🫲🏿 🫱🏾‍🫲🏻 🫱🏾‍🫲🏼 🫱🏾‍🫲🏽 🫱🏾‍🫲🏿 🫱🏿‍🫲🏻 🫱🏿‍🫲🏼 🫱🏿‍🫲🏽 🫱🏿‍🫲🏾 🧔‍♂️ 🧔🏻‍♂️ 🧔🏼‍♂️ 🧔🏽‍♂️ 🧔🏾‍♂️ 🧔🏿‍♂️ 🧔‍♀️ 🧔🏻‍♀️ 🧔🏼‍♀️ 🧔🏽‍♀️ 🧔🏾‍♀️ 🧔🏿‍♀️ 👨‍🦰 👨🏻‍🦰 👨🏼‍🦰 👨🏽‍🦰 👨🏾‍🦰 👨🏿‍🦰 👨‍🦱 👨🏻‍🦱 👨🏼‍🦱 👨🏽‍🦱 👨🏾‍🦱 👨🏿‍🦱 👨‍🦳 👨🏻‍🦳 👨🏼‍🦳 👨🏽‍🦳 👨🏾‍🦳 👨🏿‍🦳 👨‍🦲 👨🏻‍🦲 👨🏼‍🦲 👨🏽‍🦲 👨🏾‍🦲 👨🏿‍🦲 👩‍🦰 👩🏻‍🦰 👩🏼‍🦰 👩🏽‍🦰 👩🏾‍🦰 👩🏿‍🦰 🧑‍🦰 🧑🏻‍🦰 🧑🏼‍🦰 🧑🏽‍🦰 🧑🏾‍🦰 🧑🏿‍🦰 👩‍🦱 👩🏻‍🦱 👩🏼‍🦱 👩🏽‍🦱 👩🏾‍🦱 👩🏿‍🦱 🧑‍🦱 🧑🏻‍🦱 🧑🏼‍🦱 🧑🏽‍🦱 🧑🏾‍🦱 🧑🏿‍🦱 👩‍🦳 👩🏻‍🦳 👩🏼‍🦳 👩🏽‍🦳 👩🏾‍🦳 👩🏿‍🦳 🧑‍🦳 🧑🏻‍🦳 🧑🏼‍🦳 🧑🏽‍🦳 🧑🏾‍🦳 🧑🏿‍🦳 👩‍🦲 👩🏻‍🦲 👩🏼‍🦲 👩🏽‍🦲 👩🏾‍🦲 👩🏿‍🦲 🧑‍🦲 🧑🏻‍🦲 🧑🏼‍🦲 🧑🏽‍🦲 🧑🏾‍🦲 🧑🏿‍🦲 👱‍♀️ 👱🏻‍♀️ 👱🏼‍♀️ 👱🏽‍♀️ 👱🏾‍♀️ 👱🏿‍♀️ 👱‍♂️ 👱🏻‍♂️ 👱🏼‍♂️ 👱🏽‍♂️ 👱🏾‍♂️ 👱🏿‍♂️ 🙍‍♂️ 🙍🏻‍♂️ 🙍🏼‍♂️ 🙍🏽‍♂️ 🙍🏾‍♂️ 🙍🏿‍♂️ 🙍‍♀️ 🙍🏻‍♀️ 🙍🏼‍♀️ 🙍🏽‍♀️ 🙍🏾‍♀️ 🙍🏿‍♀️ 🙎‍♂️ 🙎🏻‍♂️ 🙎🏼‍♂️ 🙎🏽‍♂️ 🙎🏾‍♂️ 🙎🏿‍♂️ 🙎‍♀️ 🙎🏻‍♀️ 🙎🏼‍♀️ 🙎🏽‍♀️ 🙎🏾‍♀️ 🙎🏿‍♀️ 🙅‍♂️ 🙅🏻‍♂️ 🙅🏼‍♂️ 🙅🏽‍♂️ 🙅🏾‍♂️ 🙅🏿‍♂️ 🙅‍♀️ 🙅🏻‍♀️ 🙅🏼‍♀️ 🙅🏽‍♀️ 🙅🏾‍♀️ 🙅🏿‍♀️ 🙆‍♂️ 🙆🏻‍♂️ 🙆🏼‍♂️ 🙆🏽‍♂️ 🙆🏾‍♂️ 🙆🏿‍♂️ 🙆‍♀️ 🙆🏻‍♀️ 🙆🏼‍♀️ 🙆🏽‍♀️ 🙆🏾‍♀️ 🙆🏿‍♀️ 💁‍♂️ 💁🏻‍♂️ 💁🏼‍♂️ 💁🏽‍♂️ 💁🏾‍♂️ 💁🏿‍♂️ 💁‍♀️ 💁🏻‍♀️ 💁🏼‍♀️ 💁🏽‍♀️ 💁🏾‍♀️ 💁🏿‍♀️ 🙋‍♂️ 🙋🏻‍♂️ 🙋🏼‍♂️ 🙋🏽‍♂️ 🙋🏾‍♂️ 🙋🏿‍♂️ 🙋‍♀️ 🙋🏻‍♀️ 🙋🏼‍♀️ 🙋🏽‍♀️ 🙋🏾‍♀️ 🙋🏿‍♀️ 🧏‍♂️ 🧏🏻‍♂️ 🧏🏼‍♂️ 🧏🏽‍♂️ 🧏🏾‍♂️ 🧏🏿‍♂️ 🧏‍♀️ 🧏🏻‍♀️ 🧏🏼‍♀️ 🧏🏽‍♀️ 🧏🏾‍♀️ 🧏🏿‍♀️ 🙇‍♂️ 🙇🏻‍♂️ 🙇🏼‍♂️ 🙇🏽‍♂️ 🙇🏾‍♂️ 🙇🏿‍♂️ 🙇‍♀️ 🙇🏻‍♀️ 🙇🏼‍♀️ 🙇🏽‍♀️ 🙇🏾‍♀️ 🙇🏿‍♀️ 🤦‍♂️ 🤦🏻‍♂️ 🤦🏼‍♂️ 🤦🏽‍♂️ 🤦🏾‍♂️ 🤦🏿‍♂️ 🤦‍♀️ 🤦🏻‍♀️ 🤦🏼‍♀️ 🤦🏽‍♀️ 🤦🏾‍♀️ 🤦🏿‍♀️ 🤷‍♂️ 🤷🏻‍♂️ 🤷🏼‍♂️ 🤷🏽‍♂️ 🤷🏾‍♂️ 🤷🏿‍♂️ 🤷‍♀️ 🤷🏻‍♀️ 🤷🏼‍♀️ 🤷🏽‍♀️ 🤷🏾‍♀️ 🤷🏿‍♀️ 🧑‍⚕️ 🧑🏻‍⚕️ 🧑🏼‍⚕️ 🧑🏽‍⚕️ 🧑🏾‍⚕️ 🧑🏿‍⚕️ 👨‍⚕️ 👨🏻‍⚕️ 👨🏼‍⚕️ 👨🏽‍⚕️ 👨🏾‍⚕️ 👨🏿‍⚕️ 👩‍⚕️ 👩🏻‍⚕️ 👩🏼‍⚕️ 👩🏽‍⚕️ 👩🏾‍⚕️ 👩🏿‍⚕️ 🧑‍🎓 🧑🏻‍🎓 🧑🏼‍🎓 🧑🏽‍🎓 🧑🏾‍🎓 🧑🏿‍🎓 👨‍🎓 👨🏻‍🎓 👨🏼‍🎓 👨🏽‍🎓 👨🏾‍🎓 👨🏿‍🎓 👩‍🎓 👩🏻‍🎓 👩🏼‍🎓 👩🏽‍🎓 👩🏾‍🎓 👩🏿‍🎓 🧑‍🏫 🧑🏻‍🏫 🧑🏼‍🏫 🧑🏽‍🏫 🧑🏾‍🏫 🧑🏿‍🏫 👨‍🏫 👨🏻‍🏫 👨🏼‍🏫 👨🏽‍🏫 👨🏾‍🏫 👨🏿‍🏫 👩‍🏫 👩🏻‍🏫 👩🏼‍🏫 👩🏽‍🏫 👩🏾‍🏫 👩🏿‍🏫 🧑‍⚖️ 🧑🏻‍⚖️ 🧑🏼‍⚖️ 🧑🏽‍⚖️ 🧑🏾‍⚖️ 🧑🏿‍⚖️ 👨‍⚖️ 👨🏻‍⚖️ 👨🏼‍⚖️ 👨🏽‍⚖️ 👨🏾‍⚖️ 👨🏿‍⚖️ 👩‍⚖️ 👩🏻‍⚖️ 👩🏼‍⚖️ 👩🏽‍⚖️ 👩🏾‍⚖️ 👩🏿‍⚖️ 🧑‍🌾 🧑🏻‍🌾 🧑🏼‍🌾 🧑🏽‍🌾 🧑🏾‍🌾 🧑🏿‍🌾 👨‍🌾 👨🏻‍🌾 👨🏼‍🌾 👨🏽‍🌾 👨🏾‍🌾 👨🏿‍🌾 👩‍🌾 👩🏻‍🌾 👩🏼‍🌾 👩🏽‍🌾 👩🏾‍🌾 👩🏿‍🌾 🧑‍🍳 🧑🏻‍🍳 🧑🏼‍🍳 🧑🏽‍🍳 🧑🏾‍🍳 🧑🏿‍🍳 👨‍🍳 👨🏻‍🍳 👨🏼‍🍳 👨🏽‍🍳 👨🏾‍🍳 👨🏿‍🍳 👩‍🍳 👩🏻‍🍳 👩🏼‍🍳 👩🏽‍🍳 👩🏾‍🍳 👩🏿‍🍳 🧑‍🔧 🧑🏻‍🔧 🧑🏼‍🔧 🧑🏽‍🔧 🧑🏾‍🔧 🧑🏿‍🔧 👨‍🔧 👨🏻‍🔧 👨🏼‍🔧 👨🏽‍🔧 👨🏾‍🔧 👨🏿‍🔧 👩‍🔧 👩🏻‍🔧 👩🏼‍🔧 👩🏽‍🔧 👩🏾‍🔧 👩🏿‍🔧 🧑‍🏭 🧑🏻‍🏭 🧑🏼‍🏭 🧑🏽‍🏭 🧑🏾‍🏭 🧑🏿‍🏭 👨‍🏭 👨🏻‍🏭 👨🏼‍🏭 👨🏽‍🏭 👨🏾‍🏭 👨🏿‍🏭 👩‍🏭 👩🏻‍🏭 👩🏼‍🏭 👩🏽‍🏭 👩🏾‍🏭 👩🏿‍🏭 🧑‍💼 🧑🏻‍💼 🧑🏼‍💼 🧑🏽‍💼 🧑🏾‍💼 🧑🏿‍💼 👨‍💼 👨🏻‍💼 👨🏼‍💼 👨🏽‍💼 👨🏾‍💼 👨🏿‍💼 👩‍💼 👩🏻‍💼 👩🏼‍💼 👩🏽‍💼 👩🏾‍💼 👩🏿‍💼 🧑‍🔬 🧑🏻‍🔬 🧑🏼‍🔬 🧑🏽‍🔬 🧑🏾‍🔬 🧑🏿‍🔬 👨‍🔬 👨🏻‍🔬 👨🏼‍🔬 👨🏽‍🔬 👨🏾‍🔬 👨🏿‍🔬 👩‍🔬 👩🏻‍🔬 👩🏼‍🔬 👩🏽‍🔬 👩🏾‍🔬 👩🏿‍🔬 🧑‍💻 🧑🏻‍💻 🧑🏼‍💻 🧑🏽‍💻 🧑🏾‍💻 🧑🏿‍💻 👨‍💻 👨🏻‍💻 👨🏼‍💻 👨🏽‍💻 👨🏾‍💻 👨🏿‍💻 👩‍💻 👩🏻‍💻 👩🏼‍💻 👩🏽‍💻 👩🏾‍💻 👩🏿‍💻 🧑‍🎤 🧑🏻‍🎤 🧑🏼‍🎤 🧑🏽‍🎤 🧑🏾‍🎤 🧑🏿‍🎤 👨‍🎤 👨🏻‍🎤 👨🏼‍🎤 👨🏽‍🎤 👨🏾‍🎤 👨🏿‍🎤 👩‍🎤 👩🏻‍🎤 👩🏼‍🎤 👩🏽‍🎤 👩🏾‍🎤 👩🏿‍🎤 🧑‍🎨 🧑🏻‍🎨 🧑🏼‍🎨 🧑🏽‍🎨 🧑🏾‍🎨 🧑🏿‍🎨 👨‍🎨 👨🏻‍🎨 👨🏼‍🎨 👨🏽‍🎨 👨🏾‍🎨 👨🏿‍🎨 👩‍🎨 👩🏻‍🎨 👩🏼‍🎨 👩🏽‍🎨 👩🏾‍🎨 👩🏿‍🎨 🧑‍✈️ 🧑🏻‍✈️ 🧑🏼‍✈️ 🧑🏽‍✈️ 🧑🏾‍✈️ 🧑🏿‍✈️ 👨‍✈️ 👨🏻‍✈️ 👨🏼‍✈️ 👨🏽‍✈️ 👨🏾‍✈️ 👨🏿‍✈️ 👩‍✈️ 👩🏻‍✈️ 👩🏼‍✈️ 👩🏽‍✈️ 👩🏾‍✈️ 👩🏿‍✈️ 🧑‍🚀 🧑🏻‍🚀 🧑🏼‍🚀 🧑🏽‍🚀 🧑🏾‍🚀 🧑🏿‍🚀 👨‍🚀 👨🏻‍🚀 👨🏼‍🚀 👨🏽‍🚀 👨🏾‍🚀 👨🏿‍🚀 👩‍🚀 👩🏻‍🚀 👩🏼‍🚀 👩🏽‍🚀 👩🏾‍🚀 👩🏿‍🚀 🧑‍🚒 🧑🏻‍🚒 🧑🏼‍🚒 🧑🏽‍🚒 🧑🏾‍🚒 🧑🏿‍🚒 👨‍🚒 👨🏻‍🚒 👨🏼‍🚒 👨🏽‍🚒 👨🏾‍🚒 👨🏿‍🚒 👩‍🚒 👩🏻‍🚒 👩🏼‍🚒 👩🏽‍🚒 👩🏾‍🚒 👩🏿‍🚒 👮‍♂️ 👮🏻‍♂️ 👮🏼‍♂️ 👮🏽‍♂️ 👮🏾‍♂️ 👮🏿‍♂️ 👮‍♀️ 👮🏻‍♀️ 👮🏼‍♀️ 👮🏽‍♀️ 👮🏾‍♀️ 👮🏿‍♀️ 🕵️‍♂️ 🕵🏻‍♂️ 🕵🏼‍♂️ 🕵🏽‍♂️ 🕵🏾‍♂️ 🕵🏿‍♂️ 🕵️‍♀️ 🕵🏻‍♀️ 🕵🏼‍♀️ 🕵🏽‍♀️ 🕵🏾‍♀️ 🕵🏿‍♀️ 💂‍♂️ 💂🏻‍♂️ 💂🏼‍♂️ 💂🏽‍♂️ 💂🏾‍♂️ 💂🏿‍♂️ 💂‍♀️ 💂🏻‍♀️ 💂🏼‍♀️ 💂🏽‍♀️ 💂🏾‍♀️ 💂🏿‍♀️ 👷‍♂️ 👷🏻‍♂️ 👷🏼‍♂️ 👷🏽‍♂️ 👷🏾‍♂️ 👷🏿‍♂️ 👷‍♀️ 👷🏻‍♀️ 👷🏼‍♀️ 👷🏽‍♀️ 👷🏾‍♀️ 👷🏿‍♀️ 👳‍♂️ 👳🏻‍♂️ 👳🏼‍♂️ 👳🏽‍♂️ 👳🏾‍♂️ 👳🏿‍♂️ 👳‍♀️ 👳🏻‍♀️ 👳🏼‍♀️ 👳🏽‍♀️ 👳🏾‍♀️ 👳🏿‍♀️ 🤵‍♂️ 🤵🏻‍♂️ 🤵🏼‍♂️ 🤵🏽‍♂️ 🤵🏾‍♂️ 🤵🏿‍♂️ 🤵‍♀️ 🤵🏻‍♀️ 🤵🏼‍♀️ 🤵🏽‍♀️ 🤵🏾‍♀️ 🤵🏿‍♀️ 👰‍♂️ 👰🏻‍♂️ 👰🏼‍♂️ 👰🏽‍♂️ 👰🏾‍♂️ 👰🏿‍♂️ 👰‍♀️ 👰🏻‍♀️ 👰🏼‍♀️ 👰🏽‍♀️ 👰🏾‍♀️ 👰🏿‍♀️ 👩‍🍼 👩🏻‍🍼 👩🏼‍🍼 👩🏽‍🍼 👩🏾‍🍼 👩🏿‍🍼 👨‍🍼 👨🏻‍🍼 👨🏼‍🍼 👨🏽‍🍼 👨🏾‍🍼 👨🏿‍🍼 🧑‍🍼 🧑🏻‍🍼 🧑🏼‍🍼 🧑🏽‍🍼 🧑🏾‍🍼 🧑🏿‍🍼 🧑‍🎄 🧑🏻‍🎄 🧑🏼‍🎄 🧑🏽‍🎄 🧑🏾‍🎄 🧑🏿‍🎄 🦸‍♂️ 🦸🏻‍♂️ 🦸🏼‍♂️ 🦸🏽‍♂️ 🦸🏾‍♂️ 🦸🏿‍♂️ 🦸‍♀️ 🦸🏻‍♀️ 🦸🏼‍♀️ 🦸🏽‍♀️ 🦸🏾‍♀️ 🦸🏿‍♀️ 🦹‍♂️ 🦹🏻‍♂️ 🦹🏼‍♂️ 🦹🏽‍♂️ 🦹🏾‍♂️ 🦹🏿‍♂️ 🦹‍♀️ 🦹🏻‍♀️ 🦹🏼‍♀️ 🦹🏽‍♀️ 🦹🏾‍♀️ 🦹🏿‍♀️ 🧙‍♂️ 🧙🏻‍♂️ 🧙🏼‍♂️ 🧙🏽‍♂️ 🧙🏾‍♂️ 🧙🏿‍♂️ 🧙‍♀️ 🧙🏻‍♀️ 🧙🏼‍♀️ 🧙🏽‍♀️ 🧙🏾‍♀️ 🧙🏿‍♀️ 🧚‍♂️ 🧚🏻‍♂️ 🧚🏼‍♂️ 🧚🏽‍♂️ 🧚🏾‍♂️ 🧚🏿‍♂️ 🧚‍♀️ 🧚🏻‍♀️ 🧚🏼‍♀️ 🧚🏽‍♀️ 🧚🏾‍♀️ 🧚🏿‍♀️ 🧛‍♂️ 🧛🏻‍♂️ 🧛🏼‍♂️ 🧛🏽‍♂️ 🧛🏾‍♂️ 🧛🏿‍♂️ 🧛‍♀️ 🧛🏻‍♀️ 🧛🏼‍♀️ 🧛🏽‍♀️ 🧛🏾‍♀️ 🧛🏿‍♀️ 🧜‍♂️ 🧜🏻‍♂️ 🧜🏼‍♂️ 🧜🏽‍♂️ 🧜🏾‍♂️ 🧜🏿‍♂️ 🧜‍♀️ 🧜🏻‍♀️ 🧜🏼‍♀️ 🧜🏽‍♀️ 🧜🏾‍♀️ 🧜🏿‍♀️ 🧝‍♂️ 🧝🏻‍♂️ 🧝🏼‍♂️ 🧝🏽‍♂️ 🧝🏾‍♂️ 🧝🏿‍♂️ 🧝‍♀️ 🧝🏻‍♀️ 🧝🏼‍♀️ 🧝🏽‍♀️ 🧝🏾‍♀️ 🧝🏿‍♀️ 🧞‍♂️ 🧞‍♀️ 🧟‍♂️ 🧟‍♀️ 💆‍♂️ 💆🏻‍♂️ 💆🏼‍♂️ 💆🏽‍♂️ 💆🏾‍♂️ 💆🏿‍♂️ 💆‍♀️ 💆🏻‍♀️ 💆🏼‍♀️ 💆🏽‍♀️ 💆🏾‍♀️ 💆🏿‍♀️ 💇‍♂️ 💇🏻‍♂️ 💇🏼‍♂️ 💇🏽‍♂️ 💇🏾‍♂️ 💇🏿‍♂️ 💇‍♀️ 💇🏻‍♀️ 💇🏼‍♀️ 💇🏽‍♀️ 💇🏾‍♀️ 💇🏿‍♀️ 🚶‍♂️ 🚶🏻‍♂️ 🚶🏼‍♂️ 🚶🏽‍♂️ 🚶🏾‍♂️ 🚶🏿‍♂️ 🚶‍♀️ 🚶🏻‍♀️ 🚶🏼‍♀️ 🚶🏽‍♀️ 🚶🏾‍♀️ 🚶🏿‍♀️ 🧍‍♂️ 🧍🏻‍♂️ 🧍🏼‍♂️ 🧍🏽‍♂️ 🧍🏾‍♂️ 🧍🏿‍♂️ 🧍‍♀️ 🧍🏻‍♀️ 🧍🏼‍♀️ 🧍🏽‍♀️ 🧍🏾‍♀️ 🧍🏿‍♀️ 🧎‍♂️ 🧎🏻‍♂️ 🧎🏼‍♂️ 🧎🏽‍♂️ 🧎🏾‍♂️ 🧎🏿‍♂️ 🧎‍♀️ 🧎🏻‍♀️ 🧎🏼‍♀️ 🧎🏽‍♀️ 🧎🏾‍♀️ 🧎🏿‍♀️ 🧑‍🦯 🧑🏻‍🦯 🧑🏼‍🦯 🧑🏽‍🦯 🧑🏾‍🦯 🧑🏿‍🦯 👨‍🦯 👨🏻‍🦯 👨🏼‍🦯 👨🏽‍🦯 👨🏾‍🦯 👨🏿‍🦯 👩‍🦯 👩🏻‍🦯 👩🏼‍🦯 👩🏽‍🦯 👩🏾‍🦯 👩🏿‍🦯 🧑‍🦼 🧑🏻‍🦼 🧑🏼‍🦼 🧑🏽‍🦼 🧑🏾‍🦼 🧑🏿‍🦼 👨‍🦼 👨🏻‍🦼 👨🏼‍🦼 👨🏽‍🦼 👨🏾‍🦼 👨🏿‍🦼 👩‍🦼 👩🏻‍🦼 👩🏼‍🦼 👩🏽‍🦼 👩🏾‍🦼 👩🏿‍🦼 🧑‍🦽 🧑🏻‍🦽 🧑🏼‍🦽 🧑🏽‍🦽 🧑🏾‍🦽 🧑🏿‍🦽 👨‍🦽 👨🏻‍🦽 👨🏼‍🦽 👨🏽‍🦽 👨🏾‍🦽 👨🏿‍🦽 👩‍🦽 👩🏻‍🦽 👩🏼‍🦽 👩🏽‍🦽 👩🏾‍🦽 👩🏿‍🦽 🏃‍♂️ 🏃🏻‍♂️ 🏃🏼‍♂️ 🏃🏽‍♂️ 🏃🏾‍♂️ 🏃🏿‍♂️ 🏃‍♀️ 🏃🏻‍♀️ 🏃🏼‍♀️ 🏃🏽‍♀️ 🏃🏾‍♀️ 🏃🏿‍♀️ 👯‍♂️ 👯‍♀️ 🧖‍♂️ 🧖🏻‍♂️ 🧖🏼‍♂️ 🧖🏽‍♂️ 🧖🏾‍♂️ 🧖🏿‍♂️ 🧖‍♀️ 🧖🏻‍♀️ 🧖🏼‍♀️ 🧖🏽‍♀️ 🧖🏾‍♀️ 🧖🏿‍♀️ 🧗‍♂️ 🧗🏻‍♂️ 🧗🏼‍♂️ 🧗🏽‍♂️ 🧗🏾‍♂️ 🧗🏿‍♂️ 🧗‍♀️ 🧗🏻‍♀️ 🧗🏼‍♀️ 🧗🏽‍♀️ 🧗🏾‍♀️ 🧗🏿‍♀️ 🏌️‍♂️ 🏌🏻‍♂️ 🏌🏼‍♂️ 🏌🏽‍♂️ 🏌🏾‍♂️ 🏌🏿‍♂️ 🏌️‍♀️ 🏌🏻‍♀️ 🏌🏼‍♀️ 🏌🏽‍♀️ 🏌🏾‍♀️ 🏌🏿‍♀️ 🏄‍♂️ 🏄🏻‍♂️ 🏄🏼‍♂️ 🏄🏽‍♂️ 🏄🏾‍♂️ 🏄🏿‍♂️ 🏄‍♀️ 🏄🏻‍♀️ 🏄🏼‍♀️ 🏄🏽‍♀️ 🏄🏾‍♀️ 🏄🏿‍♀️ 🚣‍♂️ 🚣🏻‍♂️ 🚣🏼‍♂️ 🚣🏽‍♂️ 🚣🏾‍♂️ 🚣🏿‍♂️ 🚣‍♀️ 🚣🏻‍♀️ 🚣🏼‍♀️ 🚣🏽‍♀️ 🚣🏾‍♀️ 🚣🏿‍♀️ 🏊‍♂️ 🏊🏻‍♂️ 🏊🏼‍♂️ 🏊🏽‍♂️ 🏊🏾‍♂️ 🏊🏿‍♂️ 🏊‍♀️ 🏊🏻‍♀️ 🏊🏼‍♀️ 🏊🏽‍♀️ 🏊🏾‍♀️ 🏊🏿‍♀️ ⛹️‍♂️ ⛹🏻‍♂️ ⛹🏼‍♂️ ⛹🏽‍♂️ ⛹🏾‍♂️ ⛹🏿‍♂️ ⛹️‍♀️ ⛹🏻‍♀️ ⛹🏼‍♀️ ⛹🏽‍♀️ ⛹🏾‍♀️ ⛹🏿‍♀️ 🏋️‍♂️ 🏋🏻‍♂️ 🏋🏼‍♂️ 🏋🏽‍♂️ 🏋🏾‍♂️ 🏋🏿‍♂️ 🏋️‍♀️ 🏋🏻‍♀️ 🏋🏼‍♀️ 🏋🏽‍♀️ 🏋🏾‍♀️ 🏋🏿‍♀️ 🚴‍♂️ 🚴🏻‍♂️ 🚴🏼‍♂️ 🚴🏽‍♂️ 🚴🏾‍♂️ 🚴🏿‍♂️ 🚴‍♀️ 🚴🏻‍♀️ 🚴🏼‍♀️ 🚴🏽‍♀️ 🚴🏾‍♀️ 🚴🏿‍♀️ 🚵‍♂️ 🚵🏻‍♂️ 🚵🏼‍♂️ 🚵🏽‍♂️ 🚵🏾‍♂️ 🚵🏿‍♂️ 🚵‍♀️ 🚵🏻‍♀️ 🚵🏼‍♀️ 🚵🏽‍♀️ 🚵🏾‍♀️ 🚵🏿‍♀️ 🤸‍♂️ 🤸🏻‍♂️ 🤸🏼‍♂️ 🤸🏽‍♂️ 🤸🏾‍♂️ 🤸🏿‍♂️ 🤸‍♀️ 🤸🏻‍♀️ 🤸🏼‍♀️ 🤸🏽‍♀️ 🤸🏾‍♀️ 🤸🏿‍♀️ 🤼‍♂️ 🤼‍♀️ 🤽‍♂️ 🤽🏻‍♂️ 🤽🏼‍♂️ 🤽🏽‍♂️ 🤽🏾‍♂️ 🤽🏿‍♂️ 🤽‍♀️ 🤽🏻‍♀️ 🤽🏼‍♀️ 🤽🏽‍♀️ 🤽🏾‍♀️ 🤽🏿‍♀️ 🤾‍♂️ 🤾🏻‍♂️ 🤾🏼‍♂️ 🤾🏽‍♂️ 🤾🏾‍♂️ 🤾🏿‍♂️ 🤾‍♀️ 🤾🏻‍♀️ 🤾🏼‍♀️ 🤾🏽‍♀️ 🤾🏾‍♀️ 🤾🏿‍♀️ 🤹‍♂️ 🤹🏻‍♂️ 🤹🏼‍♂️ 🤹🏽‍♂️ 🤹🏾‍♂️ 🤹🏿‍♂️ 🤹‍♀️ 🤹🏻‍♀️ 🤹🏼‍♀️ 🤹🏽‍♀️ 🤹🏾‍♀️ 🤹🏿‍♀️ 🧘‍♂️ 🧘🏻‍♂️ 🧘🏼‍♂️ 🧘🏽‍♂️ 🧘🏾‍♂️ 🧘🏿‍♂️ 🧘‍♀️ 🧘🏻‍♀️ 🧘🏼‍♀️ 🧘🏽‍♀️ 🧘🏾‍♀️ 🧘🏿‍♀️ 🧑‍🤝‍🧑 🧑🏻‍🤝‍🧑🏻 🧑🏻‍🤝‍🧑🏼 🧑🏻‍🤝‍🧑🏽 🧑🏻‍🤝‍🧑🏾 🧑🏻‍🤝‍🧑🏿 🧑🏼‍🤝‍🧑🏻 🧑🏼‍🤝‍🧑🏼 🧑🏼‍🤝‍🧑🏽 🧑🏼‍🤝‍🧑🏾 🧑🏼‍🤝‍🧑🏿 🧑🏽‍🤝‍🧑🏻 🧑🏽‍🤝‍🧑🏼 🧑🏽‍🤝‍🧑🏽 🧑🏽‍🤝‍🧑🏾 🧑🏽‍🤝‍🧑🏿 🧑🏾‍🤝‍🧑🏻 🧑🏾‍🤝‍🧑🏼 🧑🏾‍🤝‍🧑🏽 🧑🏾‍🤝‍🧑🏾 🧑🏾‍🤝‍🧑🏿 🧑🏿‍🤝‍🧑🏻 🧑🏿‍🤝‍🧑🏼 🧑🏿‍🤝‍🧑🏽 🧑🏿‍🤝‍🧑🏾 🧑🏿‍🤝‍🧑🏿 👩🏻‍🤝‍👩🏼 👩🏻‍🤝‍👩🏽 👩🏻‍🤝‍👩🏾 👩🏻‍🤝‍👩🏿 👩🏼‍🤝‍👩🏻 👩🏼‍🤝‍👩🏽 👩🏼‍🤝‍👩🏾 👩🏼‍🤝‍👩🏿 👩🏽‍🤝‍👩🏻 👩🏽‍🤝‍👩🏼 👩🏽‍🤝‍👩🏾 👩🏽‍🤝‍👩🏿 👩🏾‍🤝‍👩🏻 👩🏾‍🤝‍👩🏼 👩🏾‍🤝‍👩🏽 👩🏾‍🤝‍👩🏿 👩🏿‍🤝‍👩🏻 👩🏿‍🤝‍👩🏼 👩🏿‍🤝‍👩🏽 👩🏿‍🤝‍👩🏾 👩🏻‍🤝‍👨🏼 👩🏻‍🤝‍👨🏽 👩🏻‍🤝‍👨🏾 👩🏻‍🤝‍👨🏿 👩🏼‍🤝‍👨🏻 👩🏼‍🤝‍👨🏽 👩🏼‍🤝‍👨🏾 👩🏼‍🤝‍👨🏿 👩🏽‍🤝‍👨🏻 👩🏽‍🤝‍👨🏼 👩🏽‍🤝‍👨🏾 👩🏽‍🤝‍👨🏿 👩🏾‍🤝‍👨🏻 👩🏾‍🤝‍👨🏼 👩🏾‍🤝‍👨🏽 👩🏾‍🤝‍👨🏿 👩🏿‍🤝‍👨🏻 👩🏿‍🤝‍👨🏼 👩🏿‍🤝‍👨🏽 👩🏿‍🤝‍👨🏾 👨🏻‍🤝‍👨🏼 👨🏻‍🤝‍👨🏽 👨🏻‍🤝‍👨🏾 👨🏻‍🤝‍👨🏿 👨🏼‍🤝‍👨🏻 👨🏼‍🤝‍👨🏽 👨🏼‍🤝‍👨🏾 👨🏼‍🤝‍👨🏿 👨🏽‍🤝‍👨🏻 👨🏽‍🤝‍👨🏼 👨🏽‍🤝‍👨🏾 👨🏽‍🤝‍👨🏿 👨🏾‍🤝‍👨🏻 👨🏾‍🤝‍👨🏼 👨🏾‍🤝‍👨🏽 👨🏾‍🤝‍👨🏿 👨🏿‍🤝‍👨🏻 👨🏿‍🤝‍👨🏼 👨🏿‍🤝‍👨🏽 👨🏿‍🤝‍👨🏾 💏 🧑🏻‍❤️‍💋‍🧑🏼 🧑🏻‍❤️‍💋‍🧑🏽 🧑🏻‍❤️‍💋‍🧑🏾 🧑🏻‍❤️‍💋‍🧑🏿 🧑🏼‍❤️‍💋‍🧑🏻 🧑🏼‍❤️‍💋‍🧑🏽 🧑🏼‍❤️‍💋‍🧑🏾 🧑🏼‍❤️‍💋‍🧑🏿 🧑🏽‍❤️‍💋‍🧑🏻 🧑🏽‍❤️‍💋‍🧑🏼 🧑🏽‍❤️‍💋‍🧑🏾 🧑🏽‍❤️‍💋‍🧑🏿 🧑🏾‍❤️‍💋‍🧑🏻 🧑🏾‍❤️‍💋‍🧑🏼 🧑🏾‍❤️‍💋‍🧑🏽 🧑🏾‍❤️‍💋‍🧑🏿 🧑🏿‍❤️‍💋‍🧑🏻 🧑🏿‍❤️‍💋‍🧑🏼 🧑🏿‍❤️‍💋‍🧑🏽 🧑🏿‍❤️‍💋‍🧑🏾 👩‍❤️‍💋‍👨 👩🏻‍❤️‍💋‍👨🏻 👩🏻‍❤️‍💋‍👨🏼 👩🏻‍❤️‍💋‍👨🏽 👩🏻‍❤️‍💋‍👨🏾 👩🏻‍❤️‍💋‍👨🏿 👩🏼‍❤️‍💋‍👨🏻 👩🏼‍❤️‍💋‍👨🏼 👩🏼‍❤️‍💋‍👨🏽 👩🏼‍❤️‍💋‍👨🏾 👩🏼‍❤️‍💋‍👨🏿 👩🏽‍❤️‍💋‍👨🏻 👩🏽‍❤️‍💋‍👨🏼 👩🏽‍❤️‍💋‍👨🏽 👩🏽‍❤️‍💋‍👨🏾 👩🏽‍❤️‍💋‍👨🏿 👩🏾‍❤️‍💋‍👨🏻 👩🏾‍❤️‍💋‍👨🏼 👩🏾‍❤️‍💋‍👨🏽 👩🏾‍❤️‍💋‍👨🏾 👩🏾‍❤️‍💋‍👨🏿 👩🏿‍❤️‍💋‍👨🏻 👩🏿‍❤️‍💋‍👨🏼 👩🏿‍❤️‍💋‍👨🏽 👩🏿‍❤️‍💋‍👨🏾 👩🏿‍❤️‍💋‍👨🏿 👨‍❤️‍💋‍👨 👨🏻‍❤️‍💋‍👨🏻 👨🏻‍❤️‍💋‍👨🏼 👨🏻‍❤️‍💋‍👨🏽 👨🏻‍❤️‍💋‍👨🏾 👨🏻‍❤️‍💋‍👨🏿 👨🏼‍❤️‍💋‍👨🏻 👨🏼‍❤️‍💋‍👨🏼 👨🏼‍❤️‍💋‍👨🏽 👨🏼‍❤️‍💋‍👨🏾 👨🏼‍❤️‍💋‍👨🏿 👨🏽‍❤️‍💋‍👨🏻 👨🏽‍❤️‍💋‍👨🏼 👨🏽‍❤️‍💋‍👨🏽 👨🏽‍❤️‍💋‍👨🏾 👨🏽‍❤️‍💋‍👨🏿 👨🏾‍❤️‍💋‍👨🏻 👨🏾‍❤️‍💋‍👨🏼 👨🏾‍❤️‍💋‍👨🏽 👨🏾‍❤️‍💋‍👨🏾 👨🏾‍❤️‍💋‍👨🏿 👨🏿‍❤️‍💋‍👨🏻 👨🏿‍❤️‍💋‍👨🏼 👨🏿‍❤️‍💋‍👨🏽 👨🏿‍❤️‍💋‍👨🏾 👨🏿‍❤️‍💋‍👨🏿 👩‍❤️‍💋‍👩 👩🏻‍❤️‍💋‍👩🏻 👩🏻‍❤️‍💋‍👩🏼 👩🏻‍❤️‍💋‍👩🏽 👩🏻‍❤️‍💋‍👩🏾 👩🏻‍❤️‍💋‍👩🏿 👩🏼‍❤️‍💋‍👩🏻 👩🏼‍❤️‍💋‍👩🏼 👩🏼‍❤️‍💋‍👩🏽 👩🏼‍❤️‍💋‍👩🏾 👩🏼‍❤️‍💋‍👩🏿 👩🏽‍❤️‍💋‍👩🏻 👩🏽‍❤️‍💋‍👩🏼 👩🏽‍❤️‍💋‍👩🏽 👩🏽‍❤️‍💋‍👩🏾 👩🏽‍❤️‍💋‍👩🏿 👩🏾‍❤️‍💋‍👩🏻 👩🏾‍❤️‍💋‍👩🏼 👩🏾‍❤️‍💋‍👩🏽 👩🏾‍❤️‍💋‍👩🏾 👩🏾‍❤️‍💋‍👩🏿 👩🏿‍❤️‍💋‍👩🏻 👩🏿‍❤️‍💋‍👩🏼 👩🏿‍❤️‍💋‍👩🏽 👩🏿‍❤️‍💋‍👩🏾 👩🏿‍❤️‍💋‍👩🏿 💑 🧑🏻‍❤️‍🧑🏼 🧑🏻‍❤️‍🧑🏽 🧑🏻‍❤️‍🧑🏾 🧑🏻‍❤️‍🧑🏿 🧑🏼‍❤️‍🧑🏻 🧑🏼‍❤️‍🧑🏽 🧑🏼‍❤️‍🧑🏾 🧑🏼‍❤️‍🧑🏿 🧑🏽‍❤️‍🧑🏻 🧑🏽‍❤️‍🧑🏼 🧑🏽‍❤️‍🧑🏾 🧑🏽‍❤️‍🧑🏿 🧑🏾‍❤️‍🧑🏻 🧑🏾‍❤️‍🧑🏼 🧑🏾‍❤️‍🧑🏽 🧑🏾‍❤️‍🧑🏿 🧑🏿‍❤️‍🧑🏻 🧑🏿‍❤️‍🧑🏼 🧑🏿‍❤️‍🧑🏽 🧑🏿‍❤️‍🧑🏾 👩‍❤️‍👨 👩🏻‍❤️‍👨🏻 👩🏻‍❤️‍👨🏼 👩🏻‍❤️‍👨🏽 👩🏻‍❤️‍👨🏾 👩🏻‍❤️‍👨🏿 👩🏼‍❤️‍👨🏻 👩🏼‍❤️‍👨🏼 👩🏼‍❤️‍👨🏽 👩🏼‍❤️‍👨🏾 👩🏼‍❤️‍👨🏿 👩🏽‍❤️‍👨🏻 👩🏽‍❤️‍👨🏼 👩🏽‍❤️‍👨🏽 👩🏽‍❤️‍👨🏾 👩🏽‍❤️‍👨🏿 👩🏾‍❤️‍👨🏻 👩🏾‍❤️‍👨🏼 👩🏾‍❤️‍👨🏽 👩🏾‍❤️‍👨🏾 👩🏾‍❤️‍👨🏿 👩🏿‍❤️‍👨🏻 👩🏿‍❤️‍👨🏼 👩🏿‍❤️‍👨🏽 👩🏿‍❤️‍👨🏾 👩🏿‍❤️‍👨🏿 👨‍❤️‍👨 👨🏻‍❤️‍👨🏻 👨🏻‍❤️‍👨🏼 👨🏻‍❤️‍👨🏽 👨🏻‍❤️‍👨🏾 👨🏻‍❤️‍👨🏿 👨🏼‍❤️‍👨🏻 👨🏼‍❤️‍👨🏼 👨🏼‍❤️‍👨🏽 👨🏼‍❤️‍👨🏾 👨🏼‍❤️‍👨🏿 👨🏽‍❤️‍👨🏻 👨🏽‍❤️‍👨🏼 👨🏽‍❤️‍👨🏽 👨🏽‍❤️‍👨🏾 👨🏽‍❤️‍👨🏿 👨🏾‍❤️‍👨🏻 👨🏾‍❤️‍👨🏼 👨🏾‍❤️‍👨🏽 👨🏾‍❤️‍👨🏾 👨🏾‍❤️‍👨🏿 👨🏿‍❤️‍👨🏻 👨🏿‍❤️‍👨🏼 👨🏿‍❤️‍👨🏽 👨🏿‍❤️‍👨🏾 👨🏿‍❤️‍👨🏿 👩‍❤️‍👩 👩🏻‍❤️‍👩🏻 👩🏻‍❤️‍👩🏼 👩🏻‍❤️‍👩🏽 👩🏻‍❤️‍👩🏾 👩🏻‍❤️‍👩🏿 👩🏼‍❤️‍👩🏻 👩🏼‍❤️‍👩🏼 👩🏼‍❤️‍👩🏽 👩🏼‍❤️‍👩🏾 👩🏼‍❤️‍👩🏿 👩🏽‍❤️‍👩🏻 👩🏽‍❤️‍👩🏼 👩🏽‍❤️‍👩🏽 👩🏽‍❤️‍👩🏾 👩🏽‍❤️‍👩🏿 👩🏾‍❤️‍👩🏻 👩🏾‍❤️‍👩🏼 👩🏾‍❤️‍👩🏽 👩🏾‍❤️‍👩🏾 👩🏾‍❤️‍👩🏿 👩🏿‍❤️‍👩🏻 👩🏿‍❤️‍👩🏼 👩🏿‍❤️‍👩🏽 👩🏿‍❤️‍👩🏾 👩🏿‍❤️‍👩🏿 👪 👨‍👩‍👦 👨‍👩‍👧 👨‍👩‍👧‍👦 👨‍👩‍👦‍👦 👨‍👩‍👧‍👧 👨‍👨‍👦 👨‍👨‍👧 👨‍👨‍👧‍👦 👨‍👨‍👦‍👦 👨‍👨‍👧‍👧 👩‍👩‍👦 👩‍👩‍👧 👩‍👩‍👧‍👦 👩‍👩‍👦‍👦 👩‍👩‍👧‍👧 👨‍👦 👨‍👦‍👦 👨‍👧 👨‍👧‍👦 👨‍👧‍👧 👩‍👦 👩‍👦‍👦 👩‍👧 👩‍👧‍👦 👩‍👧‍👧 🐕‍🦺 🐈‍⬛ 🐻‍❄️ 🐦‍⬛ 🏳️‍🌈 🏳️‍⚧️ 🏴‍☠️ </p>

<!--
Full reference: https://unicode.org/Public/emoji/15.0/
ZJW: zwidje https://unicode.org/emoji/charts/emoji-zwj-sequences.html
-->
`,title:"Emoji Composition",level:2,content:`## Emoji Composition

<p style="font-size: 65%; line-height: 1rem;"> 😶‍🌫️ 😮‍💨 😵‍💫 ❤️‍🔥 ❤️‍🩹 👁️‍🗨️ 🫱🏻‍🫲🏼 🫱🏻‍🫲🏽 🫱🏻‍🫲🏾 🫱🏻‍🫲🏿 🫱🏼‍🫲🏻 🫱🏼‍🫲🏽 🫱🏼‍🫲🏾 🫱🏼‍🫲🏿 🫱🏽‍🫲🏻 🫱🏽‍🫲🏼 🫱🏽‍🫲🏾 🫱🏽‍🫲🏿 🫱🏾‍🫲🏻 🫱🏾‍🫲🏼 🫱🏾‍🫲🏽 🫱🏾‍🫲🏿 🫱🏿‍🫲🏻 🫱🏿‍🫲🏼 🫱🏿‍🫲🏽 🫱🏿‍🫲🏾 🧔‍♂️ 🧔🏻‍♂️ 🧔🏼‍♂️ 🧔🏽‍♂️ 🧔🏾‍♂️ 🧔🏿‍♂️ 🧔‍♀️ 🧔🏻‍♀️ 🧔🏼‍♀️ 🧔🏽‍♀️ 🧔🏾‍♀️ 🧔🏿‍♀️ 👨‍🦰 👨🏻‍🦰 👨🏼‍🦰 👨🏽‍🦰 👨🏾‍🦰 👨🏿‍🦰 👨‍🦱 👨🏻‍🦱 👨🏼‍🦱 👨🏽‍🦱 👨🏾‍🦱 👨🏿‍🦱 👨‍🦳 👨🏻‍🦳 👨🏼‍🦳 👨🏽‍🦳 👨🏾‍🦳 👨🏿‍🦳 👨‍🦲 👨🏻‍🦲 👨🏼‍🦲 👨🏽‍🦲 👨🏾‍🦲 👨🏿‍🦲 👩‍🦰 👩🏻‍🦰 👩🏼‍🦰 👩🏽‍🦰 👩🏾‍🦰 👩🏿‍🦰 🧑‍🦰 🧑🏻‍🦰 🧑🏼‍🦰 🧑🏽‍🦰 🧑🏾‍🦰 🧑🏿‍🦰 👩‍🦱 👩🏻‍🦱 👩🏼‍🦱 👩🏽‍🦱 👩🏾‍🦱 👩🏿‍🦱 🧑‍🦱 🧑🏻‍🦱 🧑🏼‍🦱 🧑🏽‍🦱 🧑🏾‍🦱 🧑🏿‍🦱 👩‍🦳 👩🏻‍🦳 👩🏼‍🦳 👩🏽‍🦳 👩🏾‍🦳 👩🏿‍🦳 🧑‍🦳 🧑🏻‍🦳 🧑🏼‍🦳 🧑🏽‍🦳 🧑🏾‍🦳 🧑🏿‍🦳 👩‍🦲 👩🏻‍🦲 👩🏼‍🦲 👩🏽‍🦲 👩🏾‍🦲 👩🏿‍🦲 🧑‍🦲 🧑🏻‍🦲 🧑🏼‍🦲 🧑🏽‍🦲 🧑🏾‍🦲 🧑🏿‍🦲 👱‍♀️ 👱🏻‍♀️ 👱🏼‍♀️ 👱🏽‍♀️ 👱🏾‍♀️ 👱🏿‍♀️ 👱‍♂️ 👱🏻‍♂️ 👱🏼‍♂️ 👱🏽‍♂️ 👱🏾‍♂️ 👱🏿‍♂️ 🙍‍♂️ 🙍🏻‍♂️ 🙍🏼‍♂️ 🙍🏽‍♂️ 🙍🏾‍♂️ 🙍🏿‍♂️ 🙍‍♀️ 🙍🏻‍♀️ 🙍🏼‍♀️ 🙍🏽‍♀️ 🙍🏾‍♀️ 🙍🏿‍♀️ 🙎‍♂️ 🙎🏻‍♂️ 🙎🏼‍♂️ 🙎🏽‍♂️ 🙎🏾‍♂️ 🙎🏿‍♂️ 🙎‍♀️ 🙎🏻‍♀️ 🙎🏼‍♀️ 🙎🏽‍♀️ 🙎🏾‍♀️ 🙎🏿‍♀️ 🙅‍♂️ 🙅🏻‍♂️ 🙅🏼‍♂️ 🙅🏽‍♂️ 🙅🏾‍♂️ 🙅🏿‍♂️ 🙅‍♀️ 🙅🏻‍♀️ 🙅🏼‍♀️ 🙅🏽‍♀️ 🙅🏾‍♀️ 🙅🏿‍♀️ 🙆‍♂️ 🙆🏻‍♂️ 🙆🏼‍♂️ 🙆🏽‍♂️ 🙆🏾‍♂️ 🙆🏿‍♂️ 🙆‍♀️ 🙆🏻‍♀️ 🙆🏼‍♀️ 🙆🏽‍♀️ 🙆🏾‍♀️ 🙆🏿‍♀️ 💁‍♂️ 💁🏻‍♂️ 💁🏼‍♂️ 💁🏽‍♂️ 💁🏾‍♂️ 💁🏿‍♂️ 💁‍♀️ 💁🏻‍♀️ 💁🏼‍♀️ 💁🏽‍♀️ 💁🏾‍♀️ 💁🏿‍♀️ 🙋‍♂️ 🙋🏻‍♂️ 🙋🏼‍♂️ 🙋🏽‍♂️ 🙋🏾‍♂️ 🙋🏿‍♂️ 🙋‍♀️ 🙋🏻‍♀️ 🙋🏼‍♀️ 🙋🏽‍♀️ 🙋🏾‍♀️ 🙋🏿‍♀️ 🧏‍♂️ 🧏🏻‍♂️ 🧏🏼‍♂️ 🧏🏽‍♂️ 🧏🏾‍♂️ 🧏🏿‍♂️ 🧏‍♀️ 🧏🏻‍♀️ 🧏🏼‍♀️ 🧏🏽‍♀️ 🧏🏾‍♀️ 🧏🏿‍♀️ 🙇‍♂️ 🙇🏻‍♂️ 🙇🏼‍♂️ 🙇🏽‍♂️ 🙇🏾‍♂️ 🙇🏿‍♂️ 🙇‍♀️ 🙇🏻‍♀️ 🙇🏼‍♀️ 🙇🏽‍♀️ 🙇🏾‍♀️ 🙇🏿‍♀️ 🤦‍♂️ 🤦🏻‍♂️ 🤦🏼‍♂️ 🤦🏽‍♂️ 🤦🏾‍♂️ 🤦🏿‍♂️ 🤦‍♀️ 🤦🏻‍♀️ 🤦🏼‍♀️ 🤦🏽‍♀️ 🤦🏾‍♀️ 🤦🏿‍♀️ 🤷‍♂️ 🤷🏻‍♂️ 🤷🏼‍♂️ 🤷🏽‍♂️ 🤷🏾‍♂️ 🤷🏿‍♂️ 🤷‍♀️ 🤷🏻‍♀️ 🤷🏼‍♀️ 🤷🏽‍♀️ 🤷🏾‍♀️ 🤷🏿‍♀️ 🧑‍⚕️ 🧑🏻‍⚕️ 🧑🏼‍⚕️ 🧑🏽‍⚕️ 🧑🏾‍⚕️ 🧑🏿‍⚕️ 👨‍⚕️ 👨🏻‍⚕️ 👨🏼‍⚕️ 👨🏽‍⚕️ 👨🏾‍⚕️ 👨🏿‍⚕️ 👩‍⚕️ 👩🏻‍⚕️ 👩🏼‍⚕️ 👩🏽‍⚕️ 👩🏾‍⚕️ 👩🏿‍⚕️ 🧑‍🎓 🧑🏻‍🎓 🧑🏼‍🎓 🧑🏽‍🎓 🧑🏾‍🎓 🧑🏿‍🎓 👨‍🎓 👨🏻‍🎓 👨🏼‍🎓 👨🏽‍🎓 👨🏾‍🎓 👨🏿‍🎓 👩‍🎓 👩🏻‍🎓 👩🏼‍🎓 👩🏽‍🎓 👩🏾‍🎓 👩🏿‍🎓 🧑‍🏫 🧑🏻‍🏫 🧑🏼‍🏫 🧑🏽‍🏫 🧑🏾‍🏫 🧑🏿‍🏫 👨‍🏫 👨🏻‍🏫 👨🏼‍🏫 👨🏽‍🏫 👨🏾‍🏫 👨🏿‍🏫 👩‍🏫 👩🏻‍🏫 👩🏼‍🏫 👩🏽‍🏫 👩🏾‍🏫 👩🏿‍🏫 🧑‍⚖️ 🧑🏻‍⚖️ 🧑🏼‍⚖️ 🧑🏽‍⚖️ 🧑🏾‍⚖️ 🧑🏿‍⚖️ 👨‍⚖️ 👨🏻‍⚖️ 👨🏼‍⚖️ 👨🏽‍⚖️ 👨🏾‍⚖️ 👨🏿‍⚖️ 👩‍⚖️ 👩🏻‍⚖️ 👩🏼‍⚖️ 👩🏽‍⚖️ 👩🏾‍⚖️ 👩🏿‍⚖️ 🧑‍🌾 🧑🏻‍🌾 🧑🏼‍🌾 🧑🏽‍🌾 🧑🏾‍🌾 🧑🏿‍🌾 👨‍🌾 👨🏻‍🌾 👨🏼‍🌾 👨🏽‍🌾 👨🏾‍🌾 👨🏿‍🌾 👩‍🌾 👩🏻‍🌾 👩🏼‍🌾 👩🏽‍🌾 👩🏾‍🌾 👩🏿‍🌾 🧑‍🍳 🧑🏻‍🍳 🧑🏼‍🍳 🧑🏽‍🍳 🧑🏾‍🍳 🧑🏿‍🍳 👨‍🍳 👨🏻‍🍳 👨🏼‍🍳 👨🏽‍🍳 👨🏾‍🍳 👨🏿‍🍳 👩‍🍳 👩🏻‍🍳 👩🏼‍🍳 👩🏽‍🍳 👩🏾‍🍳 👩🏿‍🍳 🧑‍🔧 🧑🏻‍🔧 🧑🏼‍🔧 🧑🏽‍🔧 🧑🏾‍🔧 🧑🏿‍🔧 👨‍🔧 👨🏻‍🔧 👨🏼‍🔧 👨🏽‍🔧 👨🏾‍🔧 👨🏿‍🔧 👩‍🔧 👩🏻‍🔧 👩🏼‍🔧 👩🏽‍🔧 👩🏾‍🔧 👩🏿‍🔧 🧑‍🏭 🧑🏻‍🏭 🧑🏼‍🏭 🧑🏽‍🏭 🧑🏾‍🏭 🧑🏿‍🏭 👨‍🏭 👨🏻‍🏭 👨🏼‍🏭 👨🏽‍🏭 👨🏾‍🏭 👨🏿‍🏭 👩‍🏭 👩🏻‍🏭 👩🏼‍🏭 👩🏽‍🏭 👩🏾‍🏭 👩🏿‍🏭 🧑‍💼 🧑🏻‍💼 🧑🏼‍💼 🧑🏽‍💼 🧑🏾‍💼 🧑🏿‍💼 👨‍💼 👨🏻‍💼 👨🏼‍💼 👨🏽‍💼 👨🏾‍💼 👨🏿‍💼 👩‍💼 👩🏻‍💼 👩🏼‍💼 👩🏽‍💼 👩🏾‍💼 👩🏿‍💼 🧑‍🔬 🧑🏻‍🔬 🧑🏼‍🔬 🧑🏽‍🔬 🧑🏾‍🔬 🧑🏿‍🔬 👨‍🔬 👨🏻‍🔬 👨🏼‍🔬 👨🏽‍🔬 👨🏾‍🔬 👨🏿‍🔬 👩‍🔬 👩🏻‍🔬 👩🏼‍🔬 👩🏽‍🔬 👩🏾‍🔬 👩🏿‍🔬 🧑‍💻 🧑🏻‍💻 🧑🏼‍💻 🧑🏽‍💻 🧑🏾‍💻 🧑🏿‍💻 👨‍💻 👨🏻‍💻 👨🏼‍💻 👨🏽‍💻 👨🏾‍💻 👨🏿‍💻 👩‍💻 👩🏻‍💻 👩🏼‍💻 👩🏽‍💻 👩🏾‍💻 👩🏿‍💻 🧑‍🎤 🧑🏻‍🎤 🧑🏼‍🎤 🧑🏽‍🎤 🧑🏾‍🎤 🧑🏿‍🎤 👨‍🎤 👨🏻‍🎤 👨🏼‍🎤 👨🏽‍🎤 👨🏾‍🎤 👨🏿‍🎤 👩‍🎤 👩🏻‍🎤 👩🏼‍🎤 👩🏽‍🎤 👩🏾‍🎤 👩🏿‍🎤 🧑‍🎨 🧑🏻‍🎨 🧑🏼‍🎨 🧑🏽‍🎨 🧑🏾‍🎨 🧑🏿‍🎨 👨‍🎨 👨🏻‍🎨 👨🏼‍🎨 👨🏽‍🎨 👨🏾‍🎨 👨🏿‍🎨 👩‍🎨 👩🏻‍🎨 👩🏼‍🎨 👩🏽‍🎨 👩🏾‍🎨 👩🏿‍🎨 🧑‍✈️ 🧑🏻‍✈️ 🧑🏼‍✈️ 🧑🏽‍✈️ 🧑🏾‍✈️ 🧑🏿‍✈️ 👨‍✈️ 👨🏻‍✈️ 👨🏼‍✈️ 👨🏽‍✈️ 👨🏾‍✈️ 👨🏿‍✈️ 👩‍✈️ 👩🏻‍✈️ 👩🏼‍✈️ 👩🏽‍✈️ 👩🏾‍✈️ 👩🏿‍✈️ 🧑‍🚀 🧑🏻‍🚀 🧑🏼‍🚀 🧑🏽‍🚀 🧑🏾‍🚀 🧑🏿‍🚀 👨‍🚀 👨🏻‍🚀 👨🏼‍🚀 👨🏽‍🚀 👨🏾‍🚀 👨🏿‍🚀 👩‍🚀 👩🏻‍🚀 👩🏼‍🚀 👩🏽‍🚀 👩🏾‍🚀 👩🏿‍🚀 🧑‍🚒 🧑🏻‍🚒 🧑🏼‍🚒 🧑🏽‍🚒 🧑🏾‍🚒 🧑🏿‍🚒 👨‍🚒 👨🏻‍🚒 👨🏼‍🚒 👨🏽‍🚒 👨🏾‍🚒 👨🏿‍🚒 👩‍🚒 👩🏻‍🚒 👩🏼‍🚒 👩🏽‍🚒 👩🏾‍🚒 👩🏿‍🚒 👮‍♂️ 👮🏻‍♂️ 👮🏼‍♂️ 👮🏽‍♂️ 👮🏾‍♂️ 👮🏿‍♂️ 👮‍♀️ 👮🏻‍♀️ 👮🏼‍♀️ 👮🏽‍♀️ 👮🏾‍♀️ 👮🏿‍♀️ 🕵️‍♂️ 🕵🏻‍♂️ 🕵🏼‍♂️ 🕵🏽‍♂️ 🕵🏾‍♂️ 🕵🏿‍♂️ 🕵️‍♀️ 🕵🏻‍♀️ 🕵🏼‍♀️ 🕵🏽‍♀️ 🕵🏾‍♀️ 🕵🏿‍♀️ 💂‍♂️ 💂🏻‍♂️ 💂🏼‍♂️ 💂🏽‍♂️ 💂🏾‍♂️ 💂🏿‍♂️ 💂‍♀️ 💂🏻‍♀️ 💂🏼‍♀️ 💂🏽‍♀️ 💂🏾‍♀️ 💂🏿‍♀️ 👷‍♂️ 👷🏻‍♂️ 👷🏼‍♂️ 👷🏽‍♂️ 👷🏾‍♂️ 👷🏿‍♂️ 👷‍♀️ 👷🏻‍♀️ 👷🏼‍♀️ 👷🏽‍♀️ 👷🏾‍♀️ 👷🏿‍♀️ 👳‍♂️ 👳🏻‍♂️ 👳🏼‍♂️ 👳🏽‍♂️ 👳🏾‍♂️ 👳🏿‍♂️ 👳‍♀️ 👳🏻‍♀️ 👳🏼‍♀️ 👳🏽‍♀️ 👳🏾‍♀️ 👳🏿‍♀️ 🤵‍♂️ 🤵🏻‍♂️ 🤵🏼‍♂️ 🤵🏽‍♂️ 🤵🏾‍♂️ 🤵🏿‍♂️ 🤵‍♀️ 🤵🏻‍♀️ 🤵🏼‍♀️ 🤵🏽‍♀️ 🤵🏾‍♀️ 🤵🏿‍♀️ 👰‍♂️ 👰🏻‍♂️ 👰🏼‍♂️ 👰🏽‍♂️ 👰🏾‍♂️ 👰🏿‍♂️ 👰‍♀️ 👰🏻‍♀️ 👰🏼‍♀️ 👰🏽‍♀️ 👰🏾‍♀️ 👰🏿‍♀️ 👩‍🍼 👩🏻‍🍼 👩🏼‍🍼 👩🏽‍🍼 👩🏾‍🍼 👩🏿‍🍼 👨‍🍼 👨🏻‍🍼 👨🏼‍🍼 👨🏽‍🍼 👨🏾‍🍼 👨🏿‍🍼 🧑‍🍼 🧑🏻‍🍼 🧑🏼‍🍼 🧑🏽‍🍼 🧑🏾‍🍼 🧑🏿‍🍼 🧑‍🎄 🧑🏻‍🎄 🧑🏼‍🎄 🧑🏽‍🎄 🧑🏾‍🎄 🧑🏿‍🎄 🦸‍♂️ 🦸🏻‍♂️ 🦸🏼‍♂️ 🦸🏽‍♂️ 🦸🏾‍♂️ 🦸🏿‍♂️ 🦸‍♀️ 🦸🏻‍♀️ 🦸🏼‍♀️ 🦸🏽‍♀️ 🦸🏾‍♀️ 🦸🏿‍♀️ 🦹‍♂️ 🦹🏻‍♂️ 🦹🏼‍♂️ 🦹🏽‍♂️ 🦹🏾‍♂️ 🦹🏿‍♂️ 🦹‍♀️ 🦹🏻‍♀️ 🦹🏼‍♀️ 🦹🏽‍♀️ 🦹🏾‍♀️ 🦹🏿‍♀️ 🧙‍♂️ 🧙🏻‍♂️ 🧙🏼‍♂️ 🧙🏽‍♂️ 🧙🏾‍♂️ 🧙🏿‍♂️ 🧙‍♀️ 🧙🏻‍♀️ 🧙🏼‍♀️ 🧙🏽‍♀️ 🧙🏾‍♀️ 🧙🏿‍♀️ 🧚‍♂️ 🧚🏻‍♂️ 🧚🏼‍♂️ 🧚🏽‍♂️ 🧚🏾‍♂️ 🧚🏿‍♂️ 🧚‍♀️ 🧚🏻‍♀️ 🧚🏼‍♀️ 🧚🏽‍♀️ 🧚🏾‍♀️ 🧚🏿‍♀️ 🧛‍♂️ 🧛🏻‍♂️ 🧛🏼‍♂️ 🧛🏽‍♂️ 🧛🏾‍♂️ 🧛🏿‍♂️ 🧛‍♀️ 🧛🏻‍♀️ 🧛🏼‍♀️ 🧛🏽‍♀️ 🧛🏾‍♀️ 🧛🏿‍♀️ 🧜‍♂️ 🧜🏻‍♂️ 🧜🏼‍♂️ 🧜🏽‍♂️ 🧜🏾‍♂️ 🧜🏿‍♂️ 🧜‍♀️ 🧜🏻‍♀️ 🧜🏼‍♀️ 🧜🏽‍♀️ 🧜🏾‍♀️ 🧜🏿‍♀️ 🧝‍♂️ 🧝🏻‍♂️ 🧝🏼‍♂️ 🧝🏽‍♂️ 🧝🏾‍♂️ 🧝🏿‍♂️ 🧝‍♀️ 🧝🏻‍♀️ 🧝🏼‍♀️ 🧝🏽‍♀️ 🧝🏾‍♀️ 🧝🏿‍♀️ 🧞‍♂️ 🧞‍♀️ 🧟‍♂️ 🧟‍♀️ 💆‍♂️ 💆🏻‍♂️ 💆🏼‍♂️ 💆🏽‍♂️ 💆🏾‍♂️ 💆🏿‍♂️ 💆‍♀️ 💆🏻‍♀️ 💆🏼‍♀️ 💆🏽‍♀️ 💆🏾‍♀️ 💆🏿‍♀️ 💇‍♂️ 💇🏻‍♂️ 💇🏼‍♂️ 💇🏽‍♂️ 💇🏾‍♂️ 💇🏿‍♂️ 💇‍♀️ 💇🏻‍♀️ 💇🏼‍♀️ 💇🏽‍♀️ 💇🏾‍♀️ 💇🏿‍♀️ 🚶‍♂️ 🚶🏻‍♂️ 🚶🏼‍♂️ 🚶🏽‍♂️ 🚶🏾‍♂️ 🚶🏿‍♂️ 🚶‍♀️ 🚶🏻‍♀️ 🚶🏼‍♀️ 🚶🏽‍♀️ 🚶🏾‍♀️ 🚶🏿‍♀️ 🧍‍♂️ 🧍🏻‍♂️ 🧍🏼‍♂️ 🧍🏽‍♂️ 🧍🏾‍♂️ 🧍🏿‍♂️ 🧍‍♀️ 🧍🏻‍♀️ 🧍🏼‍♀️ 🧍🏽‍♀️ 🧍🏾‍♀️ 🧍🏿‍♀️ 🧎‍♂️ 🧎🏻‍♂️ 🧎🏼‍♂️ 🧎🏽‍♂️ 🧎🏾‍♂️ 🧎🏿‍♂️ 🧎‍♀️ 🧎🏻‍♀️ 🧎🏼‍♀️ 🧎🏽‍♀️ 🧎🏾‍♀️ 🧎🏿‍♀️ 🧑‍🦯 🧑🏻‍🦯 🧑🏼‍🦯 🧑🏽‍🦯 🧑🏾‍🦯 🧑🏿‍🦯 👨‍🦯 👨🏻‍🦯 👨🏼‍🦯 👨🏽‍🦯 👨🏾‍🦯 👨🏿‍🦯 👩‍🦯 👩🏻‍🦯 👩🏼‍🦯 👩🏽‍🦯 👩🏾‍🦯 👩🏿‍🦯 🧑‍🦼 🧑🏻‍🦼 🧑🏼‍🦼 🧑🏽‍🦼 🧑🏾‍🦼 🧑🏿‍🦼 👨‍🦼 👨🏻‍🦼 👨🏼‍🦼 👨🏽‍🦼 👨🏾‍🦼 👨🏿‍🦼 👩‍🦼 👩🏻‍🦼 👩🏼‍🦼 👩🏽‍🦼 👩🏾‍🦼 👩🏿‍🦼 🧑‍🦽 🧑🏻‍🦽 🧑🏼‍🦽 🧑🏽‍🦽 🧑🏾‍🦽 🧑🏿‍🦽 👨‍🦽 👨🏻‍🦽 👨🏼‍🦽 👨🏽‍🦽 👨🏾‍🦽 👨🏿‍🦽 👩‍🦽 👩🏻‍🦽 👩🏼‍🦽 👩🏽‍🦽 👩🏾‍🦽 👩🏿‍🦽 🏃‍♂️ 🏃🏻‍♂️ 🏃🏼‍♂️ 🏃🏽‍♂️ 🏃🏾‍♂️ 🏃🏿‍♂️ 🏃‍♀️ 🏃🏻‍♀️ 🏃🏼‍♀️ 🏃🏽‍♀️ 🏃🏾‍♀️ 🏃🏿‍♀️ 👯‍♂️ 👯‍♀️ 🧖‍♂️ 🧖🏻‍♂️ 🧖🏼‍♂️ 🧖🏽‍♂️ 🧖🏾‍♂️ 🧖🏿‍♂️ 🧖‍♀️ 🧖🏻‍♀️ 🧖🏼‍♀️ 🧖🏽‍♀️ 🧖🏾‍♀️ 🧖🏿‍♀️ 🧗‍♂️ 🧗🏻‍♂️ 🧗🏼‍♂️ 🧗🏽‍♂️ 🧗🏾‍♂️ 🧗🏿‍♂️ 🧗‍♀️ 🧗🏻‍♀️ 🧗🏼‍♀️ 🧗🏽‍♀️ 🧗🏾‍♀️ 🧗🏿‍♀️ 🏌️‍♂️ 🏌🏻‍♂️ 🏌🏼‍♂️ 🏌🏽‍♂️ 🏌🏾‍♂️ 🏌🏿‍♂️ 🏌️‍♀️ 🏌🏻‍♀️ 🏌🏼‍♀️ 🏌🏽‍♀️ 🏌🏾‍♀️ 🏌🏿‍♀️ 🏄‍♂️ 🏄🏻‍♂️ 🏄🏼‍♂️ 🏄🏽‍♂️ 🏄🏾‍♂️ 🏄🏿‍♂️ 🏄‍♀️ 🏄🏻‍♀️ 🏄🏼‍♀️ 🏄🏽‍♀️ 🏄🏾‍♀️ 🏄🏿‍♀️ 🚣‍♂️ 🚣🏻‍♂️ 🚣🏼‍♂️ 🚣🏽‍♂️ 🚣🏾‍♂️ 🚣🏿‍♂️ 🚣‍♀️ 🚣🏻‍♀️ 🚣🏼‍♀️ 🚣🏽‍♀️ 🚣🏾‍♀️ 🚣🏿‍♀️ 🏊‍♂️ 🏊🏻‍♂️ 🏊🏼‍♂️ 🏊🏽‍♂️ 🏊🏾‍♂️ 🏊🏿‍♂️ 🏊‍♀️ 🏊🏻‍♀️ 🏊🏼‍♀️ 🏊🏽‍♀️ 🏊🏾‍♀️ 🏊🏿‍♀️ ⛹️‍♂️ ⛹🏻‍♂️ ⛹🏼‍♂️ ⛹🏽‍♂️ ⛹🏾‍♂️ ⛹🏿‍♂️ ⛹️‍♀️ ⛹🏻‍♀️ ⛹🏼‍♀️ ⛹🏽‍♀️ ⛹🏾‍♀️ ⛹🏿‍♀️ 🏋️‍♂️ 🏋🏻‍♂️ 🏋🏼‍♂️ 🏋🏽‍♂️ 🏋🏾‍♂️ 🏋🏿‍♂️ 🏋️‍♀️ 🏋🏻‍♀️ 🏋🏼‍♀️ 🏋🏽‍♀️ 🏋🏾‍♀️ 🏋🏿‍♀️ 🚴‍♂️ 🚴🏻‍♂️ 🚴🏼‍♂️ 🚴🏽‍♂️ 🚴🏾‍♂️ 🚴🏿‍♂️ 🚴‍♀️ 🚴🏻‍♀️ 🚴🏼‍♀️ 🚴🏽‍♀️ 🚴🏾‍♀️ 🚴🏿‍♀️ 🚵‍♂️ 🚵🏻‍♂️ 🚵🏼‍♂️ 🚵🏽‍♂️ 🚵🏾‍♂️ 🚵🏿‍♂️ 🚵‍♀️ 🚵🏻‍♀️ 🚵🏼‍♀️ 🚵🏽‍♀️ 🚵🏾‍♀️ 🚵🏿‍♀️ 🤸‍♂️ 🤸🏻‍♂️ 🤸🏼‍♂️ 🤸🏽‍♂️ 🤸🏾‍♂️ 🤸🏿‍♂️ 🤸‍♀️ 🤸🏻‍♀️ 🤸🏼‍♀️ 🤸🏽‍♀️ 🤸🏾‍♀️ 🤸🏿‍♀️ 🤼‍♂️ 🤼‍♀️ 🤽‍♂️ 🤽🏻‍♂️ 🤽🏼‍♂️ 🤽🏽‍♂️ 🤽🏾‍♂️ 🤽🏿‍♂️ 🤽‍♀️ 🤽🏻‍♀️ 🤽🏼‍♀️ 🤽🏽‍♀️ 🤽🏾‍♀️ 🤽🏿‍♀️ 🤾‍♂️ 🤾🏻‍♂️ 🤾🏼‍♂️ 🤾🏽‍♂️ 🤾🏾‍♂️ 🤾🏿‍♂️ 🤾‍♀️ 🤾🏻‍♀️ 🤾🏼‍♀️ 🤾🏽‍♀️ 🤾🏾‍♀️ 🤾🏿‍♀️ 🤹‍♂️ 🤹🏻‍♂️ 🤹🏼‍♂️ 🤹🏽‍♂️ 🤹🏾‍♂️ 🤹🏿‍♂️ 🤹‍♀️ 🤹🏻‍♀️ 🤹🏼‍♀️ 🤹🏽‍♀️ 🤹🏾‍♀️ 🤹🏿‍♀️ 🧘‍♂️ 🧘🏻‍♂️ 🧘🏼‍♂️ 🧘🏽‍♂️ 🧘🏾‍♂️ 🧘🏿‍♂️ 🧘‍♀️ 🧘🏻‍♀️ 🧘🏼‍♀️ 🧘🏽‍♀️ 🧘🏾‍♀️ 🧘🏿‍♀️ 🧑‍🤝‍🧑 🧑🏻‍🤝‍🧑🏻 🧑🏻‍🤝‍🧑🏼 🧑🏻‍🤝‍🧑🏽 🧑🏻‍🤝‍🧑🏾 🧑🏻‍🤝‍🧑🏿 🧑🏼‍🤝‍🧑🏻 🧑🏼‍🤝‍🧑🏼 🧑🏼‍🤝‍🧑🏽 🧑🏼‍🤝‍🧑🏾 🧑🏼‍🤝‍🧑🏿 🧑🏽‍🤝‍🧑🏻 🧑🏽‍🤝‍🧑🏼 🧑🏽‍🤝‍🧑🏽 🧑🏽‍🤝‍🧑🏾 🧑🏽‍🤝‍🧑🏿 🧑🏾‍🤝‍🧑🏻 🧑🏾‍🤝‍🧑🏼 🧑🏾‍🤝‍🧑🏽 🧑🏾‍🤝‍🧑🏾 🧑🏾‍🤝‍🧑🏿 🧑🏿‍🤝‍🧑🏻 🧑🏿‍🤝‍🧑🏼 🧑🏿‍🤝‍🧑🏽 🧑🏿‍🤝‍🧑🏾 🧑🏿‍🤝‍🧑🏿 👩🏻‍🤝‍👩🏼 👩🏻‍🤝‍👩🏽 👩🏻‍🤝‍👩🏾 👩🏻‍🤝‍👩🏿 👩🏼‍🤝‍👩🏻 👩🏼‍🤝‍👩🏽 👩🏼‍🤝‍👩🏾 👩🏼‍🤝‍👩🏿 👩🏽‍🤝‍👩🏻 👩🏽‍🤝‍👩🏼 👩🏽‍🤝‍👩🏾 👩🏽‍🤝‍👩🏿 👩🏾‍🤝‍👩🏻 👩🏾‍🤝‍👩🏼 👩🏾‍🤝‍👩🏽 👩🏾‍🤝‍👩🏿 👩🏿‍🤝‍👩🏻 👩🏿‍🤝‍👩🏼 👩🏿‍🤝‍👩🏽 👩🏿‍🤝‍👩🏾 👩🏻‍🤝‍👨🏼 👩🏻‍🤝‍👨🏽 👩🏻‍🤝‍👨🏾 👩🏻‍🤝‍👨🏿 👩🏼‍🤝‍👨🏻 👩🏼‍🤝‍👨🏽 👩🏼‍🤝‍👨🏾 👩🏼‍🤝‍👨🏿 👩🏽‍🤝‍👨🏻 👩🏽‍🤝‍👨🏼 👩🏽‍🤝‍👨🏾 👩🏽‍🤝‍👨🏿 👩🏾‍🤝‍👨🏻 👩🏾‍🤝‍👨🏼 👩🏾‍🤝‍👨🏽 👩🏾‍🤝‍👨🏿 👩🏿‍🤝‍👨🏻 👩🏿‍🤝‍👨🏼 👩🏿‍🤝‍👨🏽 👩🏿‍🤝‍👨🏾 👨🏻‍🤝‍👨🏼 👨🏻‍🤝‍👨🏽 👨🏻‍🤝‍👨🏾 👨🏻‍🤝‍👨🏿 👨🏼‍🤝‍👨🏻 👨🏼‍🤝‍👨🏽 👨🏼‍🤝‍👨🏾 👨🏼‍🤝‍👨🏿 👨🏽‍🤝‍👨🏻 👨🏽‍🤝‍👨🏼 👨🏽‍🤝‍👨🏾 👨🏽‍🤝‍👨🏿 👨🏾‍🤝‍👨🏻 👨🏾‍🤝‍👨🏼 👨🏾‍🤝‍👨🏽 👨🏾‍🤝‍👨🏿 👨🏿‍🤝‍👨🏻 👨🏿‍🤝‍👨🏼 👨🏿‍🤝‍👨🏽 👨🏿‍🤝‍👨🏾 💏 🧑🏻‍❤️‍💋‍🧑🏼 🧑🏻‍❤️‍💋‍🧑🏽 🧑🏻‍❤️‍💋‍🧑🏾 🧑🏻‍❤️‍💋‍🧑🏿 🧑🏼‍❤️‍💋‍🧑🏻 🧑🏼‍❤️‍💋‍🧑🏽 🧑🏼‍❤️‍💋‍🧑🏾 🧑🏼‍❤️‍💋‍🧑🏿 🧑🏽‍❤️‍💋‍🧑🏻 🧑🏽‍❤️‍💋‍🧑🏼 🧑🏽‍❤️‍💋‍🧑🏾 🧑🏽‍❤️‍💋‍🧑🏿 🧑🏾‍❤️‍💋‍🧑🏻 🧑🏾‍❤️‍💋‍🧑🏼 🧑🏾‍❤️‍💋‍🧑🏽 🧑🏾‍❤️‍💋‍🧑🏿 🧑🏿‍❤️‍💋‍🧑🏻 🧑🏿‍❤️‍💋‍🧑🏼 🧑🏿‍❤️‍💋‍🧑🏽 🧑🏿‍❤️‍💋‍🧑🏾 👩‍❤️‍💋‍👨 👩🏻‍❤️‍💋‍👨🏻 👩🏻‍❤️‍💋‍👨🏼 👩🏻‍❤️‍💋‍👨🏽 👩🏻‍❤️‍💋‍👨🏾 👩🏻‍❤️‍💋‍👨🏿 👩🏼‍❤️‍💋‍👨🏻 👩🏼‍❤️‍💋‍👨🏼 👩🏼‍❤️‍💋‍👨🏽 👩🏼‍❤️‍💋‍👨🏾 👩🏼‍❤️‍💋‍👨🏿 👩🏽‍❤️‍💋‍👨🏻 👩🏽‍❤️‍💋‍👨🏼 👩🏽‍❤️‍💋‍👨🏽 👩🏽‍❤️‍💋‍👨🏾 👩🏽‍❤️‍💋‍👨🏿 👩🏾‍❤️‍💋‍👨🏻 👩🏾‍❤️‍💋‍👨🏼 👩🏾‍❤️‍💋‍👨🏽 👩🏾‍❤️‍💋‍👨🏾 👩🏾‍❤️‍💋‍👨🏿 👩🏿‍❤️‍💋‍👨🏻 👩🏿‍❤️‍💋‍👨🏼 👩🏿‍❤️‍💋‍👨🏽 👩🏿‍❤️‍💋‍👨🏾 👩🏿‍❤️‍💋‍👨🏿 👨‍❤️‍💋‍👨 👨🏻‍❤️‍💋‍👨🏻 👨🏻‍❤️‍💋‍👨🏼 👨🏻‍❤️‍💋‍👨🏽 👨🏻‍❤️‍💋‍👨🏾 👨🏻‍❤️‍💋‍👨🏿 👨🏼‍❤️‍💋‍👨🏻 👨🏼‍❤️‍💋‍👨🏼 👨🏼‍❤️‍💋‍👨🏽 👨🏼‍❤️‍💋‍👨🏾 👨🏼‍❤️‍💋‍👨🏿 👨🏽‍❤️‍💋‍👨🏻 👨🏽‍❤️‍💋‍👨🏼 👨🏽‍❤️‍💋‍👨🏽 👨🏽‍❤️‍💋‍👨🏾 👨🏽‍❤️‍💋‍👨🏿 👨🏾‍❤️‍💋‍👨🏻 👨🏾‍❤️‍💋‍👨🏼 👨🏾‍❤️‍💋‍👨🏽 👨🏾‍❤️‍💋‍👨🏾 👨🏾‍❤️‍💋‍👨🏿 👨🏿‍❤️‍💋‍👨🏻 👨🏿‍❤️‍💋‍👨🏼 👨🏿‍❤️‍💋‍👨🏽 👨🏿‍❤️‍💋‍👨🏾 👨🏿‍❤️‍💋‍👨🏿 👩‍❤️‍💋‍👩 👩🏻‍❤️‍💋‍👩🏻 👩🏻‍❤️‍💋‍👩🏼 👩🏻‍❤️‍💋‍👩🏽 👩🏻‍❤️‍💋‍👩🏾 👩🏻‍❤️‍💋‍👩🏿 👩🏼‍❤️‍💋‍👩🏻 👩🏼‍❤️‍💋‍👩🏼 👩🏼‍❤️‍💋‍👩🏽 👩🏼‍❤️‍💋‍👩🏾 👩🏼‍❤️‍💋‍👩🏿 👩🏽‍❤️‍💋‍👩🏻 👩🏽‍❤️‍💋‍👩🏼 👩🏽‍❤️‍💋‍👩🏽 👩🏽‍❤️‍💋‍👩🏾 👩🏽‍❤️‍💋‍👩🏿 👩🏾‍❤️‍💋‍👩🏻 👩🏾‍❤️‍💋‍👩🏼 👩🏾‍❤️‍💋‍👩🏽 👩🏾‍❤️‍💋‍👩🏾 👩🏾‍❤️‍💋‍👩🏿 👩🏿‍❤️‍💋‍👩🏻 👩🏿‍❤️‍💋‍👩🏼 👩🏿‍❤️‍💋‍👩🏽 👩🏿‍❤️‍💋‍👩🏾 👩🏿‍❤️‍💋‍👩🏿 💑 🧑🏻‍❤️‍🧑🏼 🧑🏻‍❤️‍🧑🏽 🧑🏻‍❤️‍🧑🏾 🧑🏻‍❤️‍🧑🏿 🧑🏼‍❤️‍🧑🏻 🧑🏼‍❤️‍🧑🏽 🧑🏼‍❤️‍🧑🏾 🧑🏼‍❤️‍🧑🏿 🧑🏽‍❤️‍🧑🏻 🧑🏽‍❤️‍🧑🏼 🧑🏽‍❤️‍🧑🏾 🧑🏽‍❤️‍🧑🏿 🧑🏾‍❤️‍🧑🏻 🧑🏾‍❤️‍🧑🏼 🧑🏾‍❤️‍🧑🏽 🧑🏾‍❤️‍🧑🏿 🧑🏿‍❤️‍🧑🏻 🧑🏿‍❤️‍🧑🏼 🧑🏿‍❤️‍🧑🏽 🧑🏿‍❤️‍🧑🏾 👩‍❤️‍👨 👩🏻‍❤️‍👨🏻 👩🏻‍❤️‍👨🏼 👩🏻‍❤️‍👨🏽 👩🏻‍❤️‍👨🏾 👩🏻‍❤️‍👨🏿 👩🏼‍❤️‍👨🏻 👩🏼‍❤️‍👨🏼 👩🏼‍❤️‍👨🏽 👩🏼‍❤️‍👨🏾 👩🏼‍❤️‍👨🏿 👩🏽‍❤️‍👨🏻 👩🏽‍❤️‍👨🏼 👩🏽‍❤️‍👨🏽 👩🏽‍❤️‍👨🏾 👩🏽‍❤️‍👨🏿 👩🏾‍❤️‍👨🏻 👩🏾‍❤️‍👨🏼 👩🏾‍❤️‍👨🏽 👩🏾‍❤️‍👨🏾 👩🏾‍❤️‍👨🏿 👩🏿‍❤️‍👨🏻 👩🏿‍❤️‍👨🏼 👩🏿‍❤️‍👨🏽 👩🏿‍❤️‍👨🏾 👩🏿‍❤️‍👨🏿 👨‍❤️‍👨 👨🏻‍❤️‍👨🏻 👨🏻‍❤️‍👨🏼 👨🏻‍❤️‍👨🏽 👨🏻‍❤️‍👨🏾 👨🏻‍❤️‍👨🏿 👨🏼‍❤️‍👨🏻 👨🏼‍❤️‍👨🏼 👨🏼‍❤️‍👨🏽 👨🏼‍❤️‍👨🏾 👨🏼‍❤️‍👨🏿 👨🏽‍❤️‍👨🏻 👨🏽‍❤️‍👨🏼 👨🏽‍❤️‍👨🏽 👨🏽‍❤️‍👨🏾 👨🏽‍❤️‍👨🏿 👨🏾‍❤️‍👨🏻 👨🏾‍❤️‍👨🏼 👨🏾‍❤️‍👨🏽 👨🏾‍❤️‍👨🏾 👨🏾‍❤️‍👨🏿 👨🏿‍❤️‍👨🏻 👨🏿‍❤️‍👨🏼 👨🏿‍❤️‍👨🏽 👨🏿‍❤️‍👨🏾 👨🏿‍❤️‍👨🏿 👩‍❤️‍👩 👩🏻‍❤️‍👩🏻 👩🏻‍❤️‍👩🏼 👩🏻‍❤️‍👩🏽 👩🏻‍❤️‍👩🏾 👩🏻‍❤️‍👩🏿 👩🏼‍❤️‍👩🏻 👩🏼‍❤️‍👩🏼 👩🏼‍❤️‍👩🏽 👩🏼‍❤️‍👩🏾 👩🏼‍❤️‍👩🏿 👩🏽‍❤️‍👩🏻 👩🏽‍❤️‍👩🏼 👩🏽‍❤️‍👩🏽 👩🏽‍❤️‍👩🏾 👩🏽‍❤️‍👩🏿 👩🏾‍❤️‍👩🏻 👩🏾‍❤️‍👩🏼 👩🏾‍❤️‍👩🏽 👩🏾‍❤️‍👩🏾 👩🏾‍❤️‍👩🏿 👩🏿‍❤️‍👩🏻 👩🏿‍❤️‍👩🏼 👩🏿‍❤️‍👩🏽 👩🏿‍❤️‍👩🏾 👩🏿‍❤️‍👩🏿 👪 👨‍👩‍👦 👨‍👩‍👧 👨‍👩‍👧‍👦 👨‍👩‍👦‍👦 👨‍👩‍👧‍👧 👨‍👨‍👦 👨‍👨‍👧 👨‍👨‍👧‍👦 👨‍👨‍👦‍👦 👨‍👨‍👧‍👧 👩‍👩‍👦 👩‍👩‍👧 👩‍👩‍👧‍👦 👩‍👩‍👦‍👦 👩‍👩‍👧‍👧 👨‍👦 👨‍👦‍👦 👨‍👧 👨‍👧‍👦 👨‍👧‍👧 👩‍👦 👩‍👦‍👦 👩‍👧 👩‍👧‍👦 👩‍👧‍👧 🐕‍🦺 🐈‍⬛ 🐻‍❄️ 🐦‍⬛ 🏳️‍🌈 🏳️‍⚧️ 🏴‍☠️ </p>`,frontmatter:{hide:!1,srcSequence:"./pages/04-quirks.md"},note:`Full reference: https://unicode.org/Public/emoji/15.0/
ZJW: zwidje https://unicode.org/emoji/charts/emoji-zwj-sequences.html`,index:51,start:49,end:59,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/04-quirks.md",raw:`
## Emoji Composition

<p style="font-size: 65%; line-height: 1rem;"> 😶‍🌫️ 😮‍💨 😵‍💫 ❤️‍🔥 ❤️‍🩹 👁️‍🗨️ 🫱🏻‍🫲🏼 🫱🏻‍🫲🏽 🫱🏻‍🫲🏾 🫱🏻‍🫲🏿 🫱🏼‍🫲🏻 🫱🏼‍🫲🏽 🫱🏼‍🫲🏾 🫱🏼‍🫲🏿 🫱🏽‍🫲🏻 🫱🏽‍🫲🏼 🫱🏽‍🫲🏾 🫱🏽‍🫲🏿 🫱🏾‍🫲🏻 🫱🏾‍🫲🏼 🫱🏾‍🫲🏽 🫱🏾‍🫲🏿 🫱🏿‍🫲🏻 🫱🏿‍🫲🏼 🫱🏿‍🫲🏽 🫱🏿‍🫲🏾 🧔‍♂️ 🧔🏻‍♂️ 🧔🏼‍♂️ 🧔🏽‍♂️ 🧔🏾‍♂️ 🧔🏿‍♂️ 🧔‍♀️ 🧔🏻‍♀️ 🧔🏼‍♀️ 🧔🏽‍♀️ 🧔🏾‍♀️ 🧔🏿‍♀️ 👨‍🦰 👨🏻‍🦰 👨🏼‍🦰 👨🏽‍🦰 👨🏾‍🦰 👨🏿‍🦰 👨‍🦱 👨🏻‍🦱 👨🏼‍🦱 👨🏽‍🦱 👨🏾‍🦱 👨🏿‍🦱 👨‍🦳 👨🏻‍🦳 👨🏼‍🦳 👨🏽‍🦳 👨🏾‍🦳 👨🏿‍🦳 👨‍🦲 👨🏻‍🦲 👨🏼‍🦲 👨🏽‍🦲 👨🏾‍🦲 👨🏿‍🦲 👩‍🦰 👩🏻‍🦰 👩🏼‍🦰 👩🏽‍🦰 👩🏾‍🦰 👩🏿‍🦰 🧑‍🦰 🧑🏻‍🦰 🧑🏼‍🦰 🧑🏽‍🦰 🧑🏾‍🦰 🧑🏿‍🦰 👩‍🦱 👩🏻‍🦱 👩🏼‍🦱 👩🏽‍🦱 👩🏾‍🦱 👩🏿‍🦱 🧑‍🦱 🧑🏻‍🦱 🧑🏼‍🦱 🧑🏽‍🦱 🧑🏾‍🦱 🧑🏿‍🦱 👩‍🦳 👩🏻‍🦳 👩🏼‍🦳 👩🏽‍🦳 👩🏾‍🦳 👩🏿‍🦳 🧑‍🦳 🧑🏻‍🦳 🧑🏼‍🦳 🧑🏽‍🦳 🧑🏾‍🦳 🧑🏿‍🦳 👩‍🦲 👩🏻‍🦲 👩🏼‍🦲 👩🏽‍🦲 👩🏾‍🦲 👩🏿‍🦲 🧑‍🦲 🧑🏻‍🦲 🧑🏼‍🦲 🧑🏽‍🦲 🧑🏾‍🦲 🧑🏿‍🦲 👱‍♀️ 👱🏻‍♀️ 👱🏼‍♀️ 👱🏽‍♀️ 👱🏾‍♀️ 👱🏿‍♀️ 👱‍♂️ 👱🏻‍♂️ 👱🏼‍♂️ 👱🏽‍♂️ 👱🏾‍♂️ 👱🏿‍♂️ 🙍‍♂️ 🙍🏻‍♂️ 🙍🏼‍♂️ 🙍🏽‍♂️ 🙍🏾‍♂️ 🙍🏿‍♂️ 🙍‍♀️ 🙍🏻‍♀️ 🙍🏼‍♀️ 🙍🏽‍♀️ 🙍🏾‍♀️ 🙍🏿‍♀️ 🙎‍♂️ 🙎🏻‍♂️ 🙎🏼‍♂️ 🙎🏽‍♂️ 🙎🏾‍♂️ 🙎🏿‍♂️ 🙎‍♀️ 🙎🏻‍♀️ 🙎🏼‍♀️ 🙎🏽‍♀️ 🙎🏾‍♀️ 🙎🏿‍♀️ 🙅‍♂️ 🙅🏻‍♂️ 🙅🏼‍♂️ 🙅🏽‍♂️ 🙅🏾‍♂️ 🙅🏿‍♂️ 🙅‍♀️ 🙅🏻‍♀️ 🙅🏼‍♀️ 🙅🏽‍♀️ 🙅🏾‍♀️ 🙅🏿‍♀️ 🙆‍♂️ 🙆🏻‍♂️ 🙆🏼‍♂️ 🙆🏽‍♂️ 🙆🏾‍♂️ 🙆🏿‍♂️ 🙆‍♀️ 🙆🏻‍♀️ 🙆🏼‍♀️ 🙆🏽‍♀️ 🙆🏾‍♀️ 🙆🏿‍♀️ 💁‍♂️ 💁🏻‍♂️ 💁🏼‍♂️ 💁🏽‍♂️ 💁🏾‍♂️ 💁🏿‍♂️ 💁‍♀️ 💁🏻‍♀️ 💁🏼‍♀️ 💁🏽‍♀️ 💁🏾‍♀️ 💁🏿‍♀️ 🙋‍♂️ 🙋🏻‍♂️ 🙋🏼‍♂️ 🙋🏽‍♂️ 🙋🏾‍♂️ 🙋🏿‍♂️ 🙋‍♀️ 🙋🏻‍♀️ 🙋🏼‍♀️ 🙋🏽‍♀️ 🙋🏾‍♀️ 🙋🏿‍♀️ 🧏‍♂️ 🧏🏻‍♂️ 🧏🏼‍♂️ 🧏🏽‍♂️ 🧏🏾‍♂️ 🧏🏿‍♂️ 🧏‍♀️ 🧏🏻‍♀️ 🧏🏼‍♀️ 🧏🏽‍♀️ 🧏🏾‍♀️ 🧏🏿‍♀️ 🙇‍♂️ 🙇🏻‍♂️ 🙇🏼‍♂️ 🙇🏽‍♂️ 🙇🏾‍♂️ 🙇🏿‍♂️ 🙇‍♀️ 🙇🏻‍♀️ 🙇🏼‍♀️ 🙇🏽‍♀️ 🙇🏾‍♀️ 🙇🏿‍♀️ 🤦‍♂️ 🤦🏻‍♂️ 🤦🏼‍♂️ 🤦🏽‍♂️ 🤦🏾‍♂️ 🤦🏿‍♂️ 🤦‍♀️ 🤦🏻‍♀️ 🤦🏼‍♀️ 🤦🏽‍♀️ 🤦🏾‍♀️ 🤦🏿‍♀️ 🤷‍♂️ 🤷🏻‍♂️ 🤷🏼‍♂️ 🤷🏽‍♂️ 🤷🏾‍♂️ 🤷🏿‍♂️ 🤷‍♀️ 🤷🏻‍♀️ 🤷🏼‍♀️ 🤷🏽‍♀️ 🤷🏾‍♀️ 🤷🏿‍♀️ 🧑‍⚕️ 🧑🏻‍⚕️ 🧑🏼‍⚕️ 🧑🏽‍⚕️ 🧑🏾‍⚕️ 🧑🏿‍⚕️ 👨‍⚕️ 👨🏻‍⚕️ 👨🏼‍⚕️ 👨🏽‍⚕️ 👨🏾‍⚕️ 👨🏿‍⚕️ 👩‍⚕️ 👩🏻‍⚕️ 👩🏼‍⚕️ 👩🏽‍⚕️ 👩🏾‍⚕️ 👩🏿‍⚕️ 🧑‍🎓 🧑🏻‍🎓 🧑🏼‍🎓 🧑🏽‍🎓 🧑🏾‍🎓 🧑🏿‍🎓 👨‍🎓 👨🏻‍🎓 👨🏼‍🎓 👨🏽‍🎓 👨🏾‍🎓 👨🏿‍🎓 👩‍🎓 👩🏻‍🎓 👩🏼‍🎓 👩🏽‍🎓 👩🏾‍🎓 👩🏿‍🎓 🧑‍🏫 🧑🏻‍🏫 🧑🏼‍🏫 🧑🏽‍🏫 🧑🏾‍🏫 🧑🏿‍🏫 👨‍🏫 👨🏻‍🏫 👨🏼‍🏫 👨🏽‍🏫 👨🏾‍🏫 👨🏿‍🏫 👩‍🏫 👩🏻‍🏫 👩🏼‍🏫 👩🏽‍🏫 👩🏾‍🏫 👩🏿‍🏫 🧑‍⚖️ 🧑🏻‍⚖️ 🧑🏼‍⚖️ 🧑🏽‍⚖️ 🧑🏾‍⚖️ 🧑🏿‍⚖️ 👨‍⚖️ 👨🏻‍⚖️ 👨🏼‍⚖️ 👨🏽‍⚖️ 👨🏾‍⚖️ 👨🏿‍⚖️ 👩‍⚖️ 👩🏻‍⚖️ 👩🏼‍⚖️ 👩🏽‍⚖️ 👩🏾‍⚖️ 👩🏿‍⚖️ 🧑‍🌾 🧑🏻‍🌾 🧑🏼‍🌾 🧑🏽‍🌾 🧑🏾‍🌾 🧑🏿‍🌾 👨‍🌾 👨🏻‍🌾 👨🏼‍🌾 👨🏽‍🌾 👨🏾‍🌾 👨🏿‍🌾 👩‍🌾 👩🏻‍🌾 👩🏼‍🌾 👩🏽‍🌾 👩🏾‍🌾 👩🏿‍🌾 🧑‍🍳 🧑🏻‍🍳 🧑🏼‍🍳 🧑🏽‍🍳 🧑🏾‍🍳 🧑🏿‍🍳 👨‍🍳 👨🏻‍🍳 👨🏼‍🍳 👨🏽‍🍳 👨🏾‍🍳 👨🏿‍🍳 👩‍🍳 👩🏻‍🍳 👩🏼‍🍳 👩🏽‍🍳 👩🏾‍🍳 👩🏿‍🍳 🧑‍🔧 🧑🏻‍🔧 🧑🏼‍🔧 🧑🏽‍🔧 🧑🏾‍🔧 🧑🏿‍🔧 👨‍🔧 👨🏻‍🔧 👨🏼‍🔧 👨🏽‍🔧 👨🏾‍🔧 👨🏿‍🔧 👩‍🔧 👩🏻‍🔧 👩🏼‍🔧 👩🏽‍🔧 👩🏾‍🔧 👩🏿‍🔧 🧑‍🏭 🧑🏻‍🏭 🧑🏼‍🏭 🧑🏽‍🏭 🧑🏾‍🏭 🧑🏿‍🏭 👨‍🏭 👨🏻‍🏭 👨🏼‍🏭 👨🏽‍🏭 👨🏾‍🏭 👨🏿‍🏭 👩‍🏭 👩🏻‍🏭 👩🏼‍🏭 👩🏽‍🏭 👩🏾‍🏭 👩🏿‍🏭 🧑‍💼 🧑🏻‍💼 🧑🏼‍💼 🧑🏽‍💼 🧑🏾‍💼 🧑🏿‍💼 👨‍💼 👨🏻‍💼 👨🏼‍💼 👨🏽‍💼 👨🏾‍💼 👨🏿‍💼 👩‍💼 👩🏻‍💼 👩🏼‍💼 👩🏽‍💼 👩🏾‍💼 👩🏿‍💼 🧑‍🔬 🧑🏻‍🔬 🧑🏼‍🔬 🧑🏽‍🔬 🧑🏾‍🔬 🧑🏿‍🔬 👨‍🔬 👨🏻‍🔬 👨🏼‍🔬 👨🏽‍🔬 👨🏾‍🔬 👨🏿‍🔬 👩‍🔬 👩🏻‍🔬 👩🏼‍🔬 👩🏽‍🔬 👩🏾‍🔬 👩🏿‍🔬 🧑‍💻 🧑🏻‍💻 🧑🏼‍💻 🧑🏽‍💻 🧑🏾‍💻 🧑🏿‍💻 👨‍💻 👨🏻‍💻 👨🏼‍💻 👨🏽‍💻 👨🏾‍💻 👨🏿‍💻 👩‍💻 👩🏻‍💻 👩🏼‍💻 👩🏽‍💻 👩🏾‍💻 👩🏿‍💻 🧑‍🎤 🧑🏻‍🎤 🧑🏼‍🎤 🧑🏽‍🎤 🧑🏾‍🎤 🧑🏿‍🎤 👨‍🎤 👨🏻‍🎤 👨🏼‍🎤 👨🏽‍🎤 👨🏾‍🎤 👨🏿‍🎤 👩‍🎤 👩🏻‍🎤 👩🏼‍🎤 👩🏽‍🎤 👩🏾‍🎤 👩🏿‍🎤 🧑‍🎨 🧑🏻‍🎨 🧑🏼‍🎨 🧑🏽‍🎨 🧑🏾‍🎨 🧑🏿‍🎨 👨‍🎨 👨🏻‍🎨 👨🏼‍🎨 👨🏽‍🎨 👨🏾‍🎨 👨🏿‍🎨 👩‍🎨 👩🏻‍🎨 👩🏼‍🎨 👩🏽‍🎨 👩🏾‍🎨 👩🏿‍🎨 🧑‍✈️ 🧑🏻‍✈️ 🧑🏼‍✈️ 🧑🏽‍✈️ 🧑🏾‍✈️ 🧑🏿‍✈️ 👨‍✈️ 👨🏻‍✈️ 👨🏼‍✈️ 👨🏽‍✈️ 👨🏾‍✈️ 👨🏿‍✈️ 👩‍✈️ 👩🏻‍✈️ 👩🏼‍✈️ 👩🏽‍✈️ 👩🏾‍✈️ 👩🏿‍✈️ 🧑‍🚀 🧑🏻‍🚀 🧑🏼‍🚀 🧑🏽‍🚀 🧑🏾‍🚀 🧑🏿‍🚀 👨‍🚀 👨🏻‍🚀 👨🏼‍🚀 👨🏽‍🚀 👨🏾‍🚀 👨🏿‍🚀 👩‍🚀 👩🏻‍🚀 👩🏼‍🚀 👩🏽‍🚀 👩🏾‍🚀 👩🏿‍🚀 🧑‍🚒 🧑🏻‍🚒 🧑🏼‍🚒 🧑🏽‍🚒 🧑🏾‍🚒 🧑🏿‍🚒 👨‍🚒 👨🏻‍🚒 👨🏼‍🚒 👨🏽‍🚒 👨🏾‍🚒 👨🏿‍🚒 👩‍🚒 👩🏻‍🚒 👩🏼‍🚒 👩🏽‍🚒 👩🏾‍🚒 👩🏿‍🚒 👮‍♂️ 👮🏻‍♂️ 👮🏼‍♂️ 👮🏽‍♂️ 👮🏾‍♂️ 👮🏿‍♂️ 👮‍♀️ 👮🏻‍♀️ 👮🏼‍♀️ 👮🏽‍♀️ 👮🏾‍♀️ 👮🏿‍♀️ 🕵️‍♂️ 🕵🏻‍♂️ 🕵🏼‍♂️ 🕵🏽‍♂️ 🕵🏾‍♂️ 🕵🏿‍♂️ 🕵️‍♀️ 🕵🏻‍♀️ 🕵🏼‍♀️ 🕵🏽‍♀️ 🕵🏾‍♀️ 🕵🏿‍♀️ 💂‍♂️ 💂🏻‍♂️ 💂🏼‍♂️ 💂🏽‍♂️ 💂🏾‍♂️ 💂🏿‍♂️ 💂‍♀️ 💂🏻‍♀️ 💂🏼‍♀️ 💂🏽‍♀️ 💂🏾‍♀️ 💂🏿‍♀️ 👷‍♂️ 👷🏻‍♂️ 👷🏼‍♂️ 👷🏽‍♂️ 👷🏾‍♂️ 👷🏿‍♂️ 👷‍♀️ 👷🏻‍♀️ 👷🏼‍♀️ 👷🏽‍♀️ 👷🏾‍♀️ 👷🏿‍♀️ 👳‍♂️ 👳🏻‍♂️ 👳🏼‍♂️ 👳🏽‍♂️ 👳🏾‍♂️ 👳🏿‍♂️ 👳‍♀️ 👳🏻‍♀️ 👳🏼‍♀️ 👳🏽‍♀️ 👳🏾‍♀️ 👳🏿‍♀️ 🤵‍♂️ 🤵🏻‍♂️ 🤵🏼‍♂️ 🤵🏽‍♂️ 🤵🏾‍♂️ 🤵🏿‍♂️ 🤵‍♀️ 🤵🏻‍♀️ 🤵🏼‍♀️ 🤵🏽‍♀️ 🤵🏾‍♀️ 🤵🏿‍♀️ 👰‍♂️ 👰🏻‍♂️ 👰🏼‍♂️ 👰🏽‍♂️ 👰🏾‍♂️ 👰🏿‍♂️ 👰‍♀️ 👰🏻‍♀️ 👰🏼‍♀️ 👰🏽‍♀️ 👰🏾‍♀️ 👰🏿‍♀️ 👩‍🍼 👩🏻‍🍼 👩🏼‍🍼 👩🏽‍🍼 👩🏾‍🍼 👩🏿‍🍼 👨‍🍼 👨🏻‍🍼 👨🏼‍🍼 👨🏽‍🍼 👨🏾‍🍼 👨🏿‍🍼 🧑‍🍼 🧑🏻‍🍼 🧑🏼‍🍼 🧑🏽‍🍼 🧑🏾‍🍼 🧑🏿‍🍼 🧑‍🎄 🧑🏻‍🎄 🧑🏼‍🎄 🧑🏽‍🎄 🧑🏾‍🎄 🧑🏿‍🎄 🦸‍♂️ 🦸🏻‍♂️ 🦸🏼‍♂️ 🦸🏽‍♂️ 🦸🏾‍♂️ 🦸🏿‍♂️ 🦸‍♀️ 🦸🏻‍♀️ 🦸🏼‍♀️ 🦸🏽‍♀️ 🦸🏾‍♀️ 🦸🏿‍♀️ 🦹‍♂️ 🦹🏻‍♂️ 🦹🏼‍♂️ 🦹🏽‍♂️ 🦹🏾‍♂️ 🦹🏿‍♂️ 🦹‍♀️ 🦹🏻‍♀️ 🦹🏼‍♀️ 🦹🏽‍♀️ 🦹🏾‍♀️ 🦹🏿‍♀️ 🧙‍♂️ 🧙🏻‍♂️ 🧙🏼‍♂️ 🧙🏽‍♂️ 🧙🏾‍♂️ 🧙🏿‍♂️ 🧙‍♀️ 🧙🏻‍♀️ 🧙🏼‍♀️ 🧙🏽‍♀️ 🧙🏾‍♀️ 🧙🏿‍♀️ 🧚‍♂️ 🧚🏻‍♂️ 🧚🏼‍♂️ 🧚🏽‍♂️ 🧚🏾‍♂️ 🧚🏿‍♂️ 🧚‍♀️ 🧚🏻‍♀️ 🧚🏼‍♀️ 🧚🏽‍♀️ 🧚🏾‍♀️ 🧚🏿‍♀️ 🧛‍♂️ 🧛🏻‍♂️ 🧛🏼‍♂️ 🧛🏽‍♂️ 🧛🏾‍♂️ 🧛🏿‍♂️ 🧛‍♀️ 🧛🏻‍♀️ 🧛🏼‍♀️ 🧛🏽‍♀️ 🧛🏾‍♀️ 🧛🏿‍♀️ 🧜‍♂️ 🧜🏻‍♂️ 🧜🏼‍♂️ 🧜🏽‍♂️ 🧜🏾‍♂️ 🧜🏿‍♂️ 🧜‍♀️ 🧜🏻‍♀️ 🧜🏼‍♀️ 🧜🏽‍♀️ 🧜🏾‍♀️ 🧜🏿‍♀️ 🧝‍♂️ 🧝🏻‍♂️ 🧝🏼‍♂️ 🧝🏽‍♂️ 🧝🏾‍♂️ 🧝🏿‍♂️ 🧝‍♀️ 🧝🏻‍♀️ 🧝🏼‍♀️ 🧝🏽‍♀️ 🧝🏾‍♀️ 🧝🏿‍♀️ 🧞‍♂️ 🧞‍♀️ 🧟‍♂️ 🧟‍♀️ 💆‍♂️ 💆🏻‍♂️ 💆🏼‍♂️ 💆🏽‍♂️ 💆🏾‍♂️ 💆🏿‍♂️ 💆‍♀️ 💆🏻‍♀️ 💆🏼‍♀️ 💆🏽‍♀️ 💆🏾‍♀️ 💆🏿‍♀️ 💇‍♂️ 💇🏻‍♂️ 💇🏼‍♂️ 💇🏽‍♂️ 💇🏾‍♂️ 💇🏿‍♂️ 💇‍♀️ 💇🏻‍♀️ 💇🏼‍♀️ 💇🏽‍♀️ 💇🏾‍♀️ 💇🏿‍♀️ 🚶‍♂️ 🚶🏻‍♂️ 🚶🏼‍♂️ 🚶🏽‍♂️ 🚶🏾‍♂️ 🚶🏿‍♂️ 🚶‍♀️ 🚶🏻‍♀️ 🚶🏼‍♀️ 🚶🏽‍♀️ 🚶🏾‍♀️ 🚶🏿‍♀️ 🧍‍♂️ 🧍🏻‍♂️ 🧍🏼‍♂️ 🧍🏽‍♂️ 🧍🏾‍♂️ 🧍🏿‍♂️ 🧍‍♀️ 🧍🏻‍♀️ 🧍🏼‍♀️ 🧍🏽‍♀️ 🧍🏾‍♀️ 🧍🏿‍♀️ 🧎‍♂️ 🧎🏻‍♂️ 🧎🏼‍♂️ 🧎🏽‍♂️ 🧎🏾‍♂️ 🧎🏿‍♂️ 🧎‍♀️ 🧎🏻‍♀️ 🧎🏼‍♀️ 🧎🏽‍♀️ 🧎🏾‍♀️ 🧎🏿‍♀️ 🧑‍🦯 🧑🏻‍🦯 🧑🏼‍🦯 🧑🏽‍🦯 🧑🏾‍🦯 🧑🏿‍🦯 👨‍🦯 👨🏻‍🦯 👨🏼‍🦯 👨🏽‍🦯 👨🏾‍🦯 👨🏿‍🦯 👩‍🦯 👩🏻‍🦯 👩🏼‍🦯 👩🏽‍🦯 👩🏾‍🦯 👩🏿‍🦯 🧑‍🦼 🧑🏻‍🦼 🧑🏼‍🦼 🧑🏽‍🦼 🧑🏾‍🦼 🧑🏿‍🦼 👨‍🦼 👨🏻‍🦼 👨🏼‍🦼 👨🏽‍🦼 👨🏾‍🦼 👨🏿‍🦼 👩‍🦼 👩🏻‍🦼 👩🏼‍🦼 👩🏽‍🦼 👩🏾‍🦼 👩🏿‍🦼 🧑‍🦽 🧑🏻‍🦽 🧑🏼‍🦽 🧑🏽‍🦽 🧑🏾‍🦽 🧑🏿‍🦽 👨‍🦽 👨🏻‍🦽 👨🏼‍🦽 👨🏽‍🦽 👨🏾‍🦽 👨🏿‍🦽 👩‍🦽 👩🏻‍🦽 👩🏼‍🦽 👩🏽‍🦽 👩🏾‍🦽 👩🏿‍🦽 🏃‍♂️ 🏃🏻‍♂️ 🏃🏼‍♂️ 🏃🏽‍♂️ 🏃🏾‍♂️ 🏃🏿‍♂️ 🏃‍♀️ 🏃🏻‍♀️ 🏃🏼‍♀️ 🏃🏽‍♀️ 🏃🏾‍♀️ 🏃🏿‍♀️ 👯‍♂️ 👯‍♀️ 🧖‍♂️ 🧖🏻‍♂️ 🧖🏼‍♂️ 🧖🏽‍♂️ 🧖🏾‍♂️ 🧖🏿‍♂️ 🧖‍♀️ 🧖🏻‍♀️ 🧖🏼‍♀️ 🧖🏽‍♀️ 🧖🏾‍♀️ 🧖🏿‍♀️ 🧗‍♂️ 🧗🏻‍♂️ 🧗🏼‍♂️ 🧗🏽‍♂️ 🧗🏾‍♂️ 🧗🏿‍♂️ 🧗‍♀️ 🧗🏻‍♀️ 🧗🏼‍♀️ 🧗🏽‍♀️ 🧗🏾‍♀️ 🧗🏿‍♀️ 🏌️‍♂️ 🏌🏻‍♂️ 🏌🏼‍♂️ 🏌🏽‍♂️ 🏌🏾‍♂️ 🏌🏿‍♂️ 🏌️‍♀️ 🏌🏻‍♀️ 🏌🏼‍♀️ 🏌🏽‍♀️ 🏌🏾‍♀️ 🏌🏿‍♀️ 🏄‍♂️ 🏄🏻‍♂️ 🏄🏼‍♂️ 🏄🏽‍♂️ 🏄🏾‍♂️ 🏄🏿‍♂️ 🏄‍♀️ 🏄🏻‍♀️ 🏄🏼‍♀️ 🏄🏽‍♀️ 🏄🏾‍♀️ 🏄🏿‍♀️ 🚣‍♂️ 🚣🏻‍♂️ 🚣🏼‍♂️ 🚣🏽‍♂️ 🚣🏾‍♂️ 🚣🏿‍♂️ 🚣‍♀️ 🚣🏻‍♀️ 🚣🏼‍♀️ 🚣🏽‍♀️ 🚣🏾‍♀️ 🚣🏿‍♀️ 🏊‍♂️ 🏊🏻‍♂️ 🏊🏼‍♂️ 🏊🏽‍♂️ 🏊🏾‍♂️ 🏊🏿‍♂️ 🏊‍♀️ 🏊🏻‍♀️ 🏊🏼‍♀️ 🏊🏽‍♀️ 🏊🏾‍♀️ 🏊🏿‍♀️ ⛹️‍♂️ ⛹🏻‍♂️ ⛹🏼‍♂️ ⛹🏽‍♂️ ⛹🏾‍♂️ ⛹🏿‍♂️ ⛹️‍♀️ ⛹🏻‍♀️ ⛹🏼‍♀️ ⛹🏽‍♀️ ⛹🏾‍♀️ ⛹🏿‍♀️ 🏋️‍♂️ 🏋🏻‍♂️ 🏋🏼‍♂️ 🏋🏽‍♂️ 🏋🏾‍♂️ 🏋🏿‍♂️ 🏋️‍♀️ 🏋🏻‍♀️ 🏋🏼‍♀️ 🏋🏽‍♀️ 🏋🏾‍♀️ 🏋🏿‍♀️ 🚴‍♂️ 🚴🏻‍♂️ 🚴🏼‍♂️ 🚴🏽‍♂️ 🚴🏾‍♂️ 🚴🏿‍♂️ 🚴‍♀️ 🚴🏻‍♀️ 🚴🏼‍♀️ 🚴🏽‍♀️ 🚴🏾‍♀️ 🚴🏿‍♀️ 🚵‍♂️ 🚵🏻‍♂️ 🚵🏼‍♂️ 🚵🏽‍♂️ 🚵🏾‍♂️ 🚵🏿‍♂️ 🚵‍♀️ 🚵🏻‍♀️ 🚵🏼‍♀️ 🚵🏽‍♀️ 🚵🏾‍♀️ 🚵🏿‍♀️ 🤸‍♂️ 🤸🏻‍♂️ 🤸🏼‍♂️ 🤸🏽‍♂️ 🤸🏾‍♂️ 🤸🏿‍♂️ 🤸‍♀️ 🤸🏻‍♀️ 🤸🏼‍♀️ 🤸🏽‍♀️ 🤸🏾‍♀️ 🤸🏿‍♀️ 🤼‍♂️ 🤼‍♀️ 🤽‍♂️ 🤽🏻‍♂️ 🤽🏼‍♂️ 🤽🏽‍♂️ 🤽🏾‍♂️ 🤽🏿‍♂️ 🤽‍♀️ 🤽🏻‍♀️ 🤽🏼‍♀️ 🤽🏽‍♀️ 🤽🏾‍♀️ 🤽🏿‍♀️ 🤾‍♂️ 🤾🏻‍♂️ 🤾🏼‍♂️ 🤾🏽‍♂️ 🤾🏾‍♂️ 🤾🏿‍♂️ 🤾‍♀️ 🤾🏻‍♀️ 🤾🏼‍♀️ 🤾🏽‍♀️ 🤾🏾‍♀️ 🤾🏿‍♀️ 🤹‍♂️ 🤹🏻‍♂️ 🤹🏼‍♂️ 🤹🏽‍♂️ 🤹🏾‍♂️ 🤹🏿‍♂️ 🤹‍♀️ 🤹🏻‍♀️ 🤹🏼‍♀️ 🤹🏽‍♀️ 🤹🏾‍♀️ 🤹🏿‍♀️ 🧘‍♂️ 🧘🏻‍♂️ 🧘🏼‍♂️ 🧘🏽‍♂️ 🧘🏾‍♂️ 🧘🏿‍♂️ 🧘‍♀️ 🧘🏻‍♀️ 🧘🏼‍♀️ 🧘🏽‍♀️ 🧘🏾‍♀️ 🧘🏿‍♀️ 🧑‍🤝‍🧑 🧑🏻‍🤝‍🧑🏻 🧑🏻‍🤝‍🧑🏼 🧑🏻‍🤝‍🧑🏽 🧑🏻‍🤝‍🧑🏾 🧑🏻‍🤝‍🧑🏿 🧑🏼‍🤝‍🧑🏻 🧑🏼‍🤝‍🧑🏼 🧑🏼‍🤝‍🧑🏽 🧑🏼‍🤝‍🧑🏾 🧑🏼‍🤝‍🧑🏿 🧑🏽‍🤝‍🧑🏻 🧑🏽‍🤝‍🧑🏼 🧑🏽‍🤝‍🧑🏽 🧑🏽‍🤝‍🧑🏾 🧑🏽‍🤝‍🧑🏿 🧑🏾‍🤝‍🧑🏻 🧑🏾‍🤝‍🧑🏼 🧑🏾‍🤝‍🧑🏽 🧑🏾‍🤝‍🧑🏾 🧑🏾‍🤝‍🧑🏿 🧑🏿‍🤝‍🧑🏻 🧑🏿‍🤝‍🧑🏼 🧑🏿‍🤝‍🧑🏽 🧑🏿‍🤝‍🧑🏾 🧑🏿‍🤝‍🧑🏿 👩🏻‍🤝‍👩🏼 👩🏻‍🤝‍👩🏽 👩🏻‍🤝‍👩🏾 👩🏻‍🤝‍👩🏿 👩🏼‍🤝‍👩🏻 👩🏼‍🤝‍👩🏽 👩🏼‍🤝‍👩🏾 👩🏼‍🤝‍👩🏿 👩🏽‍🤝‍👩🏻 👩🏽‍🤝‍👩🏼 👩🏽‍🤝‍👩🏾 👩🏽‍🤝‍👩🏿 👩🏾‍🤝‍👩🏻 👩🏾‍🤝‍👩🏼 👩🏾‍🤝‍👩🏽 👩🏾‍🤝‍👩🏿 👩🏿‍🤝‍👩🏻 👩🏿‍🤝‍👩🏼 👩🏿‍🤝‍👩🏽 👩🏿‍🤝‍👩🏾 👩🏻‍🤝‍👨🏼 👩🏻‍🤝‍👨🏽 👩🏻‍🤝‍👨🏾 👩🏻‍🤝‍👨🏿 👩🏼‍🤝‍👨🏻 👩🏼‍🤝‍👨🏽 👩🏼‍🤝‍👨🏾 👩🏼‍🤝‍👨🏿 👩🏽‍🤝‍👨🏻 👩🏽‍🤝‍👨🏼 👩🏽‍🤝‍👨🏾 👩🏽‍🤝‍👨🏿 👩🏾‍🤝‍👨🏻 👩🏾‍🤝‍👨🏼 👩🏾‍🤝‍👨🏽 👩🏾‍🤝‍👨🏿 👩🏿‍🤝‍👨🏻 👩🏿‍🤝‍👨🏼 👩🏿‍🤝‍👨🏽 👩🏿‍🤝‍👨🏾 👨🏻‍🤝‍👨🏼 👨🏻‍🤝‍👨🏽 👨🏻‍🤝‍👨🏾 👨🏻‍🤝‍👨🏿 👨🏼‍🤝‍👨🏻 👨🏼‍🤝‍👨🏽 👨🏼‍🤝‍👨🏾 👨🏼‍🤝‍👨🏿 👨🏽‍🤝‍👨🏻 👨🏽‍🤝‍👨🏼 👨🏽‍🤝‍👨🏾 👨🏽‍🤝‍👨🏿 👨🏾‍🤝‍👨🏻 👨🏾‍🤝‍👨🏼 👨🏾‍🤝‍👨🏽 👨🏾‍🤝‍👨🏿 👨🏿‍🤝‍👨🏻 👨🏿‍🤝‍👨🏼 👨🏿‍🤝‍👨🏽 👨🏿‍🤝‍👨🏾 💏 🧑🏻‍❤️‍💋‍🧑🏼 🧑🏻‍❤️‍💋‍🧑🏽 🧑🏻‍❤️‍💋‍🧑🏾 🧑🏻‍❤️‍💋‍🧑🏿 🧑🏼‍❤️‍💋‍🧑🏻 🧑🏼‍❤️‍💋‍🧑🏽 🧑🏼‍❤️‍💋‍🧑🏾 🧑🏼‍❤️‍💋‍🧑🏿 🧑🏽‍❤️‍💋‍🧑🏻 🧑🏽‍❤️‍💋‍🧑🏼 🧑🏽‍❤️‍💋‍🧑🏾 🧑🏽‍❤️‍💋‍🧑🏿 🧑🏾‍❤️‍💋‍🧑🏻 🧑🏾‍❤️‍💋‍🧑🏼 🧑🏾‍❤️‍💋‍🧑🏽 🧑🏾‍❤️‍💋‍🧑🏿 🧑🏿‍❤️‍💋‍🧑🏻 🧑🏿‍❤️‍💋‍🧑🏼 🧑🏿‍❤️‍💋‍🧑🏽 🧑🏿‍❤️‍💋‍🧑🏾 👩‍❤️‍💋‍👨 👩🏻‍❤️‍💋‍👨🏻 👩🏻‍❤️‍💋‍👨🏼 👩🏻‍❤️‍💋‍👨🏽 👩🏻‍❤️‍💋‍👨🏾 👩🏻‍❤️‍💋‍👨🏿 👩🏼‍❤️‍💋‍👨🏻 👩🏼‍❤️‍💋‍👨🏼 👩🏼‍❤️‍💋‍👨🏽 👩🏼‍❤️‍💋‍👨🏾 👩🏼‍❤️‍💋‍👨🏿 👩🏽‍❤️‍💋‍👨🏻 👩🏽‍❤️‍💋‍👨🏼 👩🏽‍❤️‍💋‍👨🏽 👩🏽‍❤️‍💋‍👨🏾 👩🏽‍❤️‍💋‍👨🏿 👩🏾‍❤️‍💋‍👨🏻 👩🏾‍❤️‍💋‍👨🏼 👩🏾‍❤️‍💋‍👨🏽 👩🏾‍❤️‍💋‍👨🏾 👩🏾‍❤️‍💋‍👨🏿 👩🏿‍❤️‍💋‍👨🏻 👩🏿‍❤️‍💋‍👨🏼 👩🏿‍❤️‍💋‍👨🏽 👩🏿‍❤️‍💋‍👨🏾 👩🏿‍❤️‍💋‍👨🏿 👨‍❤️‍💋‍👨 👨🏻‍❤️‍💋‍👨🏻 👨🏻‍❤️‍💋‍👨🏼 👨🏻‍❤️‍💋‍👨🏽 👨🏻‍❤️‍💋‍👨🏾 👨🏻‍❤️‍💋‍👨🏿 👨🏼‍❤️‍💋‍👨🏻 👨🏼‍❤️‍💋‍👨🏼 👨🏼‍❤️‍💋‍👨🏽 👨🏼‍❤️‍💋‍👨🏾 👨🏼‍❤️‍💋‍👨🏿 👨🏽‍❤️‍💋‍👨🏻 👨🏽‍❤️‍💋‍👨🏼 👨🏽‍❤️‍💋‍👨🏽 👨🏽‍❤️‍💋‍👨🏾 👨🏽‍❤️‍💋‍👨🏿 👨🏾‍❤️‍💋‍👨🏻 👨🏾‍❤️‍💋‍👨🏼 👨🏾‍❤️‍💋‍👨🏽 👨🏾‍❤️‍💋‍👨🏾 👨🏾‍❤️‍💋‍👨🏿 👨🏿‍❤️‍💋‍👨🏻 👨🏿‍❤️‍💋‍👨🏼 👨🏿‍❤️‍💋‍👨🏽 👨🏿‍❤️‍💋‍👨🏾 👨🏿‍❤️‍💋‍👨🏿 👩‍❤️‍💋‍👩 👩🏻‍❤️‍💋‍👩🏻 👩🏻‍❤️‍💋‍👩🏼 👩🏻‍❤️‍💋‍👩🏽 👩🏻‍❤️‍💋‍👩🏾 👩🏻‍❤️‍💋‍👩🏿 👩🏼‍❤️‍💋‍👩🏻 👩🏼‍❤️‍💋‍👩🏼 👩🏼‍❤️‍💋‍👩🏽 👩🏼‍❤️‍💋‍👩🏾 👩🏼‍❤️‍💋‍👩🏿 👩🏽‍❤️‍💋‍👩🏻 👩🏽‍❤️‍💋‍👩🏼 👩🏽‍❤️‍💋‍👩🏽 👩🏽‍❤️‍💋‍👩🏾 👩🏽‍❤️‍💋‍👩🏿 👩🏾‍❤️‍💋‍👩🏻 👩🏾‍❤️‍💋‍👩🏼 👩🏾‍❤️‍💋‍👩🏽 👩🏾‍❤️‍💋‍👩🏾 👩🏾‍❤️‍💋‍👩🏿 👩🏿‍❤️‍💋‍👩🏻 👩🏿‍❤️‍💋‍👩🏼 👩🏿‍❤️‍💋‍👩🏽 👩🏿‍❤️‍💋‍👩🏾 👩🏿‍❤️‍💋‍👩🏿 💑 🧑🏻‍❤️‍🧑🏼 🧑🏻‍❤️‍🧑🏽 🧑🏻‍❤️‍🧑🏾 🧑🏻‍❤️‍🧑🏿 🧑🏼‍❤️‍🧑🏻 🧑🏼‍❤️‍🧑🏽 🧑🏼‍❤️‍🧑🏾 🧑🏼‍❤️‍🧑🏿 🧑🏽‍❤️‍🧑🏻 🧑🏽‍❤️‍🧑🏼 🧑🏽‍❤️‍🧑🏾 🧑🏽‍❤️‍🧑🏿 🧑🏾‍❤️‍🧑🏻 🧑🏾‍❤️‍🧑🏼 🧑🏾‍❤️‍🧑🏽 🧑🏾‍❤️‍🧑🏿 🧑🏿‍❤️‍🧑🏻 🧑🏿‍❤️‍🧑🏼 🧑🏿‍❤️‍🧑🏽 🧑🏿‍❤️‍🧑🏾 👩‍❤️‍👨 👩🏻‍❤️‍👨🏻 👩🏻‍❤️‍👨🏼 👩🏻‍❤️‍👨🏽 👩🏻‍❤️‍👨🏾 👩🏻‍❤️‍👨🏿 👩🏼‍❤️‍👨🏻 👩🏼‍❤️‍👨🏼 👩🏼‍❤️‍👨🏽 👩🏼‍❤️‍👨🏾 👩🏼‍❤️‍👨🏿 👩🏽‍❤️‍👨🏻 👩🏽‍❤️‍👨🏼 👩🏽‍❤️‍👨🏽 👩🏽‍❤️‍👨🏾 👩🏽‍❤️‍👨🏿 👩🏾‍❤️‍👨🏻 👩🏾‍❤️‍👨🏼 👩🏾‍❤️‍👨🏽 👩🏾‍❤️‍👨🏾 👩🏾‍❤️‍👨🏿 👩🏿‍❤️‍👨🏻 👩🏿‍❤️‍👨🏼 👩🏿‍❤️‍👨🏽 👩🏿‍❤️‍👨🏾 👩🏿‍❤️‍👨🏿 👨‍❤️‍👨 👨🏻‍❤️‍👨🏻 👨🏻‍❤️‍👨🏼 👨🏻‍❤️‍👨🏽 👨🏻‍❤️‍👨🏾 👨🏻‍❤️‍👨🏿 👨🏼‍❤️‍👨🏻 👨🏼‍❤️‍👨🏼 👨🏼‍❤️‍👨🏽 👨🏼‍❤️‍👨🏾 👨🏼‍❤️‍👨🏿 👨🏽‍❤️‍👨🏻 👨🏽‍❤️‍👨🏼 👨🏽‍❤️‍👨🏽 👨🏽‍❤️‍👨🏾 👨🏽‍❤️‍👨🏿 👨🏾‍❤️‍👨🏻 👨🏾‍❤️‍👨🏼 👨🏾‍❤️‍👨🏽 👨🏾‍❤️‍👨🏾 👨🏾‍❤️‍👨🏿 👨🏿‍❤️‍👨🏻 👨🏿‍❤️‍👨🏼 👨🏿‍❤️‍👨🏽 👨🏿‍❤️‍👨🏾 👨🏿‍❤️‍👨🏿 👩‍❤️‍👩 👩🏻‍❤️‍👩🏻 👩🏻‍❤️‍👩🏼 👩🏻‍❤️‍👩🏽 👩🏻‍❤️‍👩🏾 👩🏻‍❤️‍👩🏿 👩🏼‍❤️‍👩🏻 👩🏼‍❤️‍👩🏼 👩🏼‍❤️‍👩🏽 👩🏼‍❤️‍👩🏾 👩🏼‍❤️‍👩🏿 👩🏽‍❤️‍👩🏻 👩🏽‍❤️‍👩🏼 👩🏽‍❤️‍👩🏽 👩🏽‍❤️‍👩🏾 👩🏽‍❤️‍👩🏿 👩🏾‍❤️‍👩🏻 👩🏾‍❤️‍👩🏼 👩🏾‍❤️‍👩🏽 👩🏾‍❤️‍👩🏾 👩🏾‍❤️‍👩🏿 👩🏿‍❤️‍👩🏻 👩🏿‍❤️‍👩🏼 👩🏿‍❤️‍👩🏽 👩🏿‍❤️‍👩🏾 👩🏿‍❤️‍👩🏿 👪 👨‍👩‍👦 👨‍👩‍👧 👨‍👩‍👧‍👦 👨‍👩‍👦‍👦 👨‍👩‍👧‍👧 👨‍👨‍👦 👨‍👨‍👧 👨‍👨‍👧‍👦 👨‍👨‍👦‍👦 👨‍👨‍👧‍👧 👩‍👩‍👦 👩‍👩‍👧 👩‍👩‍👧‍👦 👩‍👩‍👦‍👦 👩‍👩‍👧‍👧 👨‍👦 👨‍👦‍👦 👨‍👧 👨‍👧‍👦 👨‍👧‍👧 👩‍👦 👩‍👦‍👦 👩‍👧 👩‍👧‍👦 👩‍👧‍👧 🐕‍🦺 🐈‍⬛ 🐻‍❄️ 🐦‍⬛ 🏳️‍🌈 🏳️‍⚧️ 🏴‍☠️ </p>

<!--
Full reference: https://unicode.org/Public/emoji/15.0/
ZJW: zwidje https://unicode.org/emoji/charts/emoji-zwj-sequences.html
-->
`,title:"Emoji Composition",level:2,content:`## Emoji Composition

<p style="font-size: 65%; line-height: 1rem;"> 😶‍🌫️ 😮‍💨 😵‍💫 ❤️‍🔥 ❤️‍🩹 👁️‍🗨️ 🫱🏻‍🫲🏼 🫱🏻‍🫲🏽 🫱🏻‍🫲🏾 🫱🏻‍🫲🏿 🫱🏼‍🫲🏻 🫱🏼‍🫲🏽 🫱🏼‍🫲🏾 🫱🏼‍🫲🏿 🫱🏽‍🫲🏻 🫱🏽‍🫲🏼 🫱🏽‍🫲🏾 🫱🏽‍🫲🏿 🫱🏾‍🫲🏻 🫱🏾‍🫲🏼 🫱🏾‍🫲🏽 🫱🏾‍🫲🏿 🫱🏿‍🫲🏻 🫱🏿‍🫲🏼 🫱🏿‍🫲🏽 🫱🏿‍🫲🏾 🧔‍♂️ 🧔🏻‍♂️ 🧔🏼‍♂️ 🧔🏽‍♂️ 🧔🏾‍♂️ 🧔🏿‍♂️ 🧔‍♀️ 🧔🏻‍♀️ 🧔🏼‍♀️ 🧔🏽‍♀️ 🧔🏾‍♀️ 🧔🏿‍♀️ 👨‍🦰 👨🏻‍🦰 👨🏼‍🦰 👨🏽‍🦰 👨🏾‍🦰 👨🏿‍🦰 👨‍🦱 👨🏻‍🦱 👨🏼‍🦱 👨🏽‍🦱 👨🏾‍🦱 👨🏿‍🦱 👨‍🦳 👨🏻‍🦳 👨🏼‍🦳 👨🏽‍🦳 👨🏾‍🦳 👨🏿‍🦳 👨‍🦲 👨🏻‍🦲 👨🏼‍🦲 👨🏽‍🦲 👨🏾‍🦲 👨🏿‍🦲 👩‍🦰 👩🏻‍🦰 👩🏼‍🦰 👩🏽‍🦰 👩🏾‍🦰 👩🏿‍🦰 🧑‍🦰 🧑🏻‍🦰 🧑🏼‍🦰 🧑🏽‍🦰 🧑🏾‍🦰 🧑🏿‍🦰 👩‍🦱 👩🏻‍🦱 👩🏼‍🦱 👩🏽‍🦱 👩🏾‍🦱 👩🏿‍🦱 🧑‍🦱 🧑🏻‍🦱 🧑🏼‍🦱 🧑🏽‍🦱 🧑🏾‍🦱 🧑🏿‍🦱 👩‍🦳 👩🏻‍🦳 👩🏼‍🦳 👩🏽‍🦳 👩🏾‍🦳 👩🏿‍🦳 🧑‍🦳 🧑🏻‍🦳 🧑🏼‍🦳 🧑🏽‍🦳 🧑🏾‍🦳 🧑🏿‍🦳 👩‍🦲 👩🏻‍🦲 👩🏼‍🦲 👩🏽‍🦲 👩🏾‍🦲 👩🏿‍🦲 🧑‍🦲 🧑🏻‍🦲 🧑🏼‍🦲 🧑🏽‍🦲 🧑🏾‍🦲 🧑🏿‍🦲 👱‍♀️ 👱🏻‍♀️ 👱🏼‍♀️ 👱🏽‍♀️ 👱🏾‍♀️ 👱🏿‍♀️ 👱‍♂️ 👱🏻‍♂️ 👱🏼‍♂️ 👱🏽‍♂️ 👱🏾‍♂️ 👱🏿‍♂️ 🙍‍♂️ 🙍🏻‍♂️ 🙍🏼‍♂️ 🙍🏽‍♂️ 🙍🏾‍♂️ 🙍🏿‍♂️ 🙍‍♀️ 🙍🏻‍♀️ 🙍🏼‍♀️ 🙍🏽‍♀️ 🙍🏾‍♀️ 🙍🏿‍♀️ 🙎‍♂️ 🙎🏻‍♂️ 🙎🏼‍♂️ 🙎🏽‍♂️ 🙎🏾‍♂️ 🙎🏿‍♂️ 🙎‍♀️ 🙎🏻‍♀️ 🙎🏼‍♀️ 🙎🏽‍♀️ 🙎🏾‍♀️ 🙎🏿‍♀️ 🙅‍♂️ 🙅🏻‍♂️ 🙅🏼‍♂️ 🙅🏽‍♂️ 🙅🏾‍♂️ 🙅🏿‍♂️ 🙅‍♀️ 🙅🏻‍♀️ 🙅🏼‍♀️ 🙅🏽‍♀️ 🙅🏾‍♀️ 🙅🏿‍♀️ 🙆‍♂️ 🙆🏻‍♂️ 🙆🏼‍♂️ 🙆🏽‍♂️ 🙆🏾‍♂️ 🙆🏿‍♂️ 🙆‍♀️ 🙆🏻‍♀️ 🙆🏼‍♀️ 🙆🏽‍♀️ 🙆🏾‍♀️ 🙆🏿‍♀️ 💁‍♂️ 💁🏻‍♂️ 💁🏼‍♂️ 💁🏽‍♂️ 💁🏾‍♂️ 💁🏿‍♂️ 💁‍♀️ 💁🏻‍♀️ 💁🏼‍♀️ 💁🏽‍♀️ 💁🏾‍♀️ 💁🏿‍♀️ 🙋‍♂️ 🙋🏻‍♂️ 🙋🏼‍♂️ 🙋🏽‍♂️ 🙋🏾‍♂️ 🙋🏿‍♂️ 🙋‍♀️ 🙋🏻‍♀️ 🙋🏼‍♀️ 🙋🏽‍♀️ 🙋🏾‍♀️ 🙋🏿‍♀️ 🧏‍♂️ 🧏🏻‍♂️ 🧏🏼‍♂️ 🧏🏽‍♂️ 🧏🏾‍♂️ 🧏🏿‍♂️ 🧏‍♀️ 🧏🏻‍♀️ 🧏🏼‍♀️ 🧏🏽‍♀️ 🧏🏾‍♀️ 🧏🏿‍♀️ 🙇‍♂️ 🙇🏻‍♂️ 🙇🏼‍♂️ 🙇🏽‍♂️ 🙇🏾‍♂️ 🙇🏿‍♂️ 🙇‍♀️ 🙇🏻‍♀️ 🙇🏼‍♀️ 🙇🏽‍♀️ 🙇🏾‍♀️ 🙇🏿‍♀️ 🤦‍♂️ 🤦🏻‍♂️ 🤦🏼‍♂️ 🤦🏽‍♂️ 🤦🏾‍♂️ 🤦🏿‍♂️ 🤦‍♀️ 🤦🏻‍♀️ 🤦🏼‍♀️ 🤦🏽‍♀️ 🤦🏾‍♀️ 🤦🏿‍♀️ 🤷‍♂️ 🤷🏻‍♂️ 🤷🏼‍♂️ 🤷🏽‍♂️ 🤷🏾‍♂️ 🤷🏿‍♂️ 🤷‍♀️ 🤷🏻‍♀️ 🤷🏼‍♀️ 🤷🏽‍♀️ 🤷🏾‍♀️ 🤷🏿‍♀️ 🧑‍⚕️ 🧑🏻‍⚕️ 🧑🏼‍⚕️ 🧑🏽‍⚕️ 🧑🏾‍⚕️ 🧑🏿‍⚕️ 👨‍⚕️ 👨🏻‍⚕️ 👨🏼‍⚕️ 👨🏽‍⚕️ 👨🏾‍⚕️ 👨🏿‍⚕️ 👩‍⚕️ 👩🏻‍⚕️ 👩🏼‍⚕️ 👩🏽‍⚕️ 👩🏾‍⚕️ 👩🏿‍⚕️ 🧑‍🎓 🧑🏻‍🎓 🧑🏼‍🎓 🧑🏽‍🎓 🧑🏾‍🎓 🧑🏿‍🎓 👨‍🎓 👨🏻‍🎓 👨🏼‍🎓 👨🏽‍🎓 👨🏾‍🎓 👨🏿‍🎓 👩‍🎓 👩🏻‍🎓 👩🏼‍🎓 👩🏽‍🎓 👩🏾‍🎓 👩🏿‍🎓 🧑‍🏫 🧑🏻‍🏫 🧑🏼‍🏫 🧑🏽‍🏫 🧑🏾‍🏫 🧑🏿‍🏫 👨‍🏫 👨🏻‍🏫 👨🏼‍🏫 👨🏽‍🏫 👨🏾‍🏫 👨🏿‍🏫 👩‍🏫 👩🏻‍🏫 👩🏼‍🏫 👩🏽‍🏫 👩🏾‍🏫 👩🏿‍🏫 🧑‍⚖️ 🧑🏻‍⚖️ 🧑🏼‍⚖️ 🧑🏽‍⚖️ 🧑🏾‍⚖️ 🧑🏿‍⚖️ 👨‍⚖️ 👨🏻‍⚖️ 👨🏼‍⚖️ 👨🏽‍⚖️ 👨🏾‍⚖️ 👨🏿‍⚖️ 👩‍⚖️ 👩🏻‍⚖️ 👩🏼‍⚖️ 👩🏽‍⚖️ 👩🏾‍⚖️ 👩🏿‍⚖️ 🧑‍🌾 🧑🏻‍🌾 🧑🏼‍🌾 🧑🏽‍🌾 🧑🏾‍🌾 🧑🏿‍🌾 👨‍🌾 👨🏻‍🌾 👨🏼‍🌾 👨🏽‍🌾 👨🏾‍🌾 👨🏿‍🌾 👩‍🌾 👩🏻‍🌾 👩🏼‍🌾 👩🏽‍🌾 👩🏾‍🌾 👩🏿‍🌾 🧑‍🍳 🧑🏻‍🍳 🧑🏼‍🍳 🧑🏽‍🍳 🧑🏾‍🍳 🧑🏿‍🍳 👨‍🍳 👨🏻‍🍳 👨🏼‍🍳 👨🏽‍🍳 👨🏾‍🍳 👨🏿‍🍳 👩‍🍳 👩🏻‍🍳 👩🏼‍🍳 👩🏽‍🍳 👩🏾‍🍳 👩🏿‍🍳 🧑‍🔧 🧑🏻‍🔧 🧑🏼‍🔧 🧑🏽‍🔧 🧑🏾‍🔧 🧑🏿‍🔧 👨‍🔧 👨🏻‍🔧 👨🏼‍🔧 👨🏽‍🔧 👨🏾‍🔧 👨🏿‍🔧 👩‍🔧 👩🏻‍🔧 👩🏼‍🔧 👩🏽‍🔧 👩🏾‍🔧 👩🏿‍🔧 🧑‍🏭 🧑🏻‍🏭 🧑🏼‍🏭 🧑🏽‍🏭 🧑🏾‍🏭 🧑🏿‍🏭 👨‍🏭 👨🏻‍🏭 👨🏼‍🏭 👨🏽‍🏭 👨🏾‍🏭 👨🏿‍🏭 👩‍🏭 👩🏻‍🏭 👩🏼‍🏭 👩🏽‍🏭 👩🏾‍🏭 👩🏿‍🏭 🧑‍💼 🧑🏻‍💼 🧑🏼‍💼 🧑🏽‍💼 🧑🏾‍💼 🧑🏿‍💼 👨‍💼 👨🏻‍💼 👨🏼‍💼 👨🏽‍💼 👨🏾‍💼 👨🏿‍💼 👩‍💼 👩🏻‍💼 👩🏼‍💼 👩🏽‍💼 👩🏾‍💼 👩🏿‍💼 🧑‍🔬 🧑🏻‍🔬 🧑🏼‍🔬 🧑🏽‍🔬 🧑🏾‍🔬 🧑🏿‍🔬 👨‍🔬 👨🏻‍🔬 👨🏼‍🔬 👨🏽‍🔬 👨🏾‍🔬 👨🏿‍🔬 👩‍🔬 👩🏻‍🔬 👩🏼‍🔬 👩🏽‍🔬 👩🏾‍🔬 👩🏿‍🔬 🧑‍💻 🧑🏻‍💻 🧑🏼‍💻 🧑🏽‍💻 🧑🏾‍💻 🧑🏿‍💻 👨‍💻 👨🏻‍💻 👨🏼‍💻 👨🏽‍💻 👨🏾‍💻 👨🏿‍💻 👩‍💻 👩🏻‍💻 👩🏼‍💻 👩🏽‍💻 👩🏾‍💻 👩🏿‍💻 🧑‍🎤 🧑🏻‍🎤 🧑🏼‍🎤 🧑🏽‍🎤 🧑🏾‍🎤 🧑🏿‍🎤 👨‍🎤 👨🏻‍🎤 👨🏼‍🎤 👨🏽‍🎤 👨🏾‍🎤 👨🏿‍🎤 👩‍🎤 👩🏻‍🎤 👩🏼‍🎤 👩🏽‍🎤 👩🏾‍🎤 👩🏿‍🎤 🧑‍🎨 🧑🏻‍🎨 🧑🏼‍🎨 🧑🏽‍🎨 🧑🏾‍🎨 🧑🏿‍🎨 👨‍🎨 👨🏻‍🎨 👨🏼‍🎨 👨🏽‍🎨 👨🏾‍🎨 👨🏿‍🎨 👩‍🎨 👩🏻‍🎨 👩🏼‍🎨 👩🏽‍🎨 👩🏾‍🎨 👩🏿‍🎨 🧑‍✈️ 🧑🏻‍✈️ 🧑🏼‍✈️ 🧑🏽‍✈️ 🧑🏾‍✈️ 🧑🏿‍✈️ 👨‍✈️ 👨🏻‍✈️ 👨🏼‍✈️ 👨🏽‍✈️ 👨🏾‍✈️ 👨🏿‍✈️ 👩‍✈️ 👩🏻‍✈️ 👩🏼‍✈️ 👩🏽‍✈️ 👩🏾‍✈️ 👩🏿‍✈️ 🧑‍🚀 🧑🏻‍🚀 🧑🏼‍🚀 🧑🏽‍🚀 🧑🏾‍🚀 🧑🏿‍🚀 👨‍🚀 👨🏻‍🚀 👨🏼‍🚀 👨🏽‍🚀 👨🏾‍🚀 👨🏿‍🚀 👩‍🚀 👩🏻‍🚀 👩🏼‍🚀 👩🏽‍🚀 👩🏾‍🚀 👩🏿‍🚀 🧑‍🚒 🧑🏻‍🚒 🧑🏼‍🚒 🧑🏽‍🚒 🧑🏾‍🚒 🧑🏿‍🚒 👨‍🚒 👨🏻‍🚒 👨🏼‍🚒 👨🏽‍🚒 👨🏾‍🚒 👨🏿‍🚒 👩‍🚒 👩🏻‍🚒 👩🏼‍🚒 👩🏽‍🚒 👩🏾‍🚒 👩🏿‍🚒 👮‍♂️ 👮🏻‍♂️ 👮🏼‍♂️ 👮🏽‍♂️ 👮🏾‍♂️ 👮🏿‍♂️ 👮‍♀️ 👮🏻‍♀️ 👮🏼‍♀️ 👮🏽‍♀️ 👮🏾‍♀️ 👮🏿‍♀️ 🕵️‍♂️ 🕵🏻‍♂️ 🕵🏼‍♂️ 🕵🏽‍♂️ 🕵🏾‍♂️ 🕵🏿‍♂️ 🕵️‍♀️ 🕵🏻‍♀️ 🕵🏼‍♀️ 🕵🏽‍♀️ 🕵🏾‍♀️ 🕵🏿‍♀️ 💂‍♂️ 💂🏻‍♂️ 💂🏼‍♂️ 💂🏽‍♂️ 💂🏾‍♂️ 💂🏿‍♂️ 💂‍♀️ 💂🏻‍♀️ 💂🏼‍♀️ 💂🏽‍♀️ 💂🏾‍♀️ 💂🏿‍♀️ 👷‍♂️ 👷🏻‍♂️ 👷🏼‍♂️ 👷🏽‍♂️ 👷🏾‍♂️ 👷🏿‍♂️ 👷‍♀️ 👷🏻‍♀️ 👷🏼‍♀️ 👷🏽‍♀️ 👷🏾‍♀️ 👷🏿‍♀️ 👳‍♂️ 👳🏻‍♂️ 👳🏼‍♂️ 👳🏽‍♂️ 👳🏾‍♂️ 👳🏿‍♂️ 👳‍♀️ 👳🏻‍♀️ 👳🏼‍♀️ 👳🏽‍♀️ 👳🏾‍♀️ 👳🏿‍♀️ 🤵‍♂️ 🤵🏻‍♂️ 🤵🏼‍♂️ 🤵🏽‍♂️ 🤵🏾‍♂️ 🤵🏿‍♂️ 🤵‍♀️ 🤵🏻‍♀️ 🤵🏼‍♀️ 🤵🏽‍♀️ 🤵🏾‍♀️ 🤵🏿‍♀️ 👰‍♂️ 👰🏻‍♂️ 👰🏼‍♂️ 👰🏽‍♂️ 👰🏾‍♂️ 👰🏿‍♂️ 👰‍♀️ 👰🏻‍♀️ 👰🏼‍♀️ 👰🏽‍♀️ 👰🏾‍♀️ 👰🏿‍♀️ 👩‍🍼 👩🏻‍🍼 👩🏼‍🍼 👩🏽‍🍼 👩🏾‍🍼 👩🏿‍🍼 👨‍🍼 👨🏻‍🍼 👨🏼‍🍼 👨🏽‍🍼 👨🏾‍🍼 👨🏿‍🍼 🧑‍🍼 🧑🏻‍🍼 🧑🏼‍🍼 🧑🏽‍🍼 🧑🏾‍🍼 🧑🏿‍🍼 🧑‍🎄 🧑🏻‍🎄 🧑🏼‍🎄 🧑🏽‍🎄 🧑🏾‍🎄 🧑🏿‍🎄 🦸‍♂️ 🦸🏻‍♂️ 🦸🏼‍♂️ 🦸🏽‍♂️ 🦸🏾‍♂️ 🦸🏿‍♂️ 🦸‍♀️ 🦸🏻‍♀️ 🦸🏼‍♀️ 🦸🏽‍♀️ 🦸🏾‍♀️ 🦸🏿‍♀️ 🦹‍♂️ 🦹🏻‍♂️ 🦹🏼‍♂️ 🦹🏽‍♂️ 🦹🏾‍♂️ 🦹🏿‍♂️ 🦹‍♀️ 🦹🏻‍♀️ 🦹🏼‍♀️ 🦹🏽‍♀️ 🦹🏾‍♀️ 🦹🏿‍♀️ 🧙‍♂️ 🧙🏻‍♂️ 🧙🏼‍♂️ 🧙🏽‍♂️ 🧙🏾‍♂️ 🧙🏿‍♂️ 🧙‍♀️ 🧙🏻‍♀️ 🧙🏼‍♀️ 🧙🏽‍♀️ 🧙🏾‍♀️ 🧙🏿‍♀️ 🧚‍♂️ 🧚🏻‍♂️ 🧚🏼‍♂️ 🧚🏽‍♂️ 🧚🏾‍♂️ 🧚🏿‍♂️ 🧚‍♀️ 🧚🏻‍♀️ 🧚🏼‍♀️ 🧚🏽‍♀️ 🧚🏾‍♀️ 🧚🏿‍♀️ 🧛‍♂️ 🧛🏻‍♂️ 🧛🏼‍♂️ 🧛🏽‍♂️ 🧛🏾‍♂️ 🧛🏿‍♂️ 🧛‍♀️ 🧛🏻‍♀️ 🧛🏼‍♀️ 🧛🏽‍♀️ 🧛🏾‍♀️ 🧛🏿‍♀️ 🧜‍♂️ 🧜🏻‍♂️ 🧜🏼‍♂️ 🧜🏽‍♂️ 🧜🏾‍♂️ 🧜🏿‍♂️ 🧜‍♀️ 🧜🏻‍♀️ 🧜🏼‍♀️ 🧜🏽‍♀️ 🧜🏾‍♀️ 🧜🏿‍♀️ 🧝‍♂️ 🧝🏻‍♂️ 🧝🏼‍♂️ 🧝🏽‍♂️ 🧝🏾‍♂️ 🧝🏿‍♂️ 🧝‍♀️ 🧝🏻‍♀️ 🧝🏼‍♀️ 🧝🏽‍♀️ 🧝🏾‍♀️ 🧝🏿‍♀️ 🧞‍♂️ 🧞‍♀️ 🧟‍♂️ 🧟‍♀️ 💆‍♂️ 💆🏻‍♂️ 💆🏼‍♂️ 💆🏽‍♂️ 💆🏾‍♂️ 💆🏿‍♂️ 💆‍♀️ 💆🏻‍♀️ 💆🏼‍♀️ 💆🏽‍♀️ 💆🏾‍♀️ 💆🏿‍♀️ 💇‍♂️ 💇🏻‍♂️ 💇🏼‍♂️ 💇🏽‍♂️ 💇🏾‍♂️ 💇🏿‍♂️ 💇‍♀️ 💇🏻‍♀️ 💇🏼‍♀️ 💇🏽‍♀️ 💇🏾‍♀️ 💇🏿‍♀️ 🚶‍♂️ 🚶🏻‍♂️ 🚶🏼‍♂️ 🚶🏽‍♂️ 🚶🏾‍♂️ 🚶🏿‍♂️ 🚶‍♀️ 🚶🏻‍♀️ 🚶🏼‍♀️ 🚶🏽‍♀️ 🚶🏾‍♀️ 🚶🏿‍♀️ 🧍‍♂️ 🧍🏻‍♂️ 🧍🏼‍♂️ 🧍🏽‍♂️ 🧍🏾‍♂️ 🧍🏿‍♂️ 🧍‍♀️ 🧍🏻‍♀️ 🧍🏼‍♀️ 🧍🏽‍♀️ 🧍🏾‍♀️ 🧍🏿‍♀️ 🧎‍♂️ 🧎🏻‍♂️ 🧎🏼‍♂️ 🧎🏽‍♂️ 🧎🏾‍♂️ 🧎🏿‍♂️ 🧎‍♀️ 🧎🏻‍♀️ 🧎🏼‍♀️ 🧎🏽‍♀️ 🧎🏾‍♀️ 🧎🏿‍♀️ 🧑‍🦯 🧑🏻‍🦯 🧑🏼‍🦯 🧑🏽‍🦯 🧑🏾‍🦯 🧑🏿‍🦯 👨‍🦯 👨🏻‍🦯 👨🏼‍🦯 👨🏽‍🦯 👨🏾‍🦯 👨🏿‍🦯 👩‍🦯 👩🏻‍🦯 👩🏼‍🦯 👩🏽‍🦯 👩🏾‍🦯 👩🏿‍🦯 🧑‍🦼 🧑🏻‍🦼 🧑🏼‍🦼 🧑🏽‍🦼 🧑🏾‍🦼 🧑🏿‍🦼 👨‍🦼 👨🏻‍🦼 👨🏼‍🦼 👨🏽‍🦼 👨🏾‍🦼 👨🏿‍🦼 👩‍🦼 👩🏻‍🦼 👩🏼‍🦼 👩🏽‍🦼 👩🏾‍🦼 👩🏿‍🦼 🧑‍🦽 🧑🏻‍🦽 🧑🏼‍🦽 🧑🏽‍🦽 🧑🏾‍🦽 🧑🏿‍🦽 👨‍🦽 👨🏻‍🦽 👨🏼‍🦽 👨🏽‍🦽 👨🏾‍🦽 👨🏿‍🦽 👩‍🦽 👩🏻‍🦽 👩🏼‍🦽 👩🏽‍🦽 👩🏾‍🦽 👩🏿‍🦽 🏃‍♂️ 🏃🏻‍♂️ 🏃🏼‍♂️ 🏃🏽‍♂️ 🏃🏾‍♂️ 🏃🏿‍♂️ 🏃‍♀️ 🏃🏻‍♀️ 🏃🏼‍♀️ 🏃🏽‍♀️ 🏃🏾‍♀️ 🏃🏿‍♀️ 👯‍♂️ 👯‍♀️ 🧖‍♂️ 🧖🏻‍♂️ 🧖🏼‍♂️ 🧖🏽‍♂️ 🧖🏾‍♂️ 🧖🏿‍♂️ 🧖‍♀️ 🧖🏻‍♀️ 🧖🏼‍♀️ 🧖🏽‍♀️ 🧖🏾‍♀️ 🧖🏿‍♀️ 🧗‍♂️ 🧗🏻‍♂️ 🧗🏼‍♂️ 🧗🏽‍♂️ 🧗🏾‍♂️ 🧗🏿‍♂️ 🧗‍♀️ 🧗🏻‍♀️ 🧗🏼‍♀️ 🧗🏽‍♀️ 🧗🏾‍♀️ 🧗🏿‍♀️ 🏌️‍♂️ 🏌🏻‍♂️ 🏌🏼‍♂️ 🏌🏽‍♂️ 🏌🏾‍♂️ 🏌🏿‍♂️ 🏌️‍♀️ 🏌🏻‍♀️ 🏌🏼‍♀️ 🏌🏽‍♀️ 🏌🏾‍♀️ 🏌🏿‍♀️ 🏄‍♂️ 🏄🏻‍♂️ 🏄🏼‍♂️ 🏄🏽‍♂️ 🏄🏾‍♂️ 🏄🏿‍♂️ 🏄‍♀️ 🏄🏻‍♀️ 🏄🏼‍♀️ 🏄🏽‍♀️ 🏄🏾‍♀️ 🏄🏿‍♀️ 🚣‍♂️ 🚣🏻‍♂️ 🚣🏼‍♂️ 🚣🏽‍♂️ 🚣🏾‍♂️ 🚣🏿‍♂️ 🚣‍♀️ 🚣🏻‍♀️ 🚣🏼‍♀️ 🚣🏽‍♀️ 🚣🏾‍♀️ 🚣🏿‍♀️ 🏊‍♂️ 🏊🏻‍♂️ 🏊🏼‍♂️ 🏊🏽‍♂️ 🏊🏾‍♂️ 🏊🏿‍♂️ 🏊‍♀️ 🏊🏻‍♀️ 🏊🏼‍♀️ 🏊🏽‍♀️ 🏊🏾‍♀️ 🏊🏿‍♀️ ⛹️‍♂️ ⛹🏻‍♂️ ⛹🏼‍♂️ ⛹🏽‍♂️ ⛹🏾‍♂️ ⛹🏿‍♂️ ⛹️‍♀️ ⛹🏻‍♀️ ⛹🏼‍♀️ ⛹🏽‍♀️ ⛹🏾‍♀️ ⛹🏿‍♀️ 🏋️‍♂️ 🏋🏻‍♂️ 🏋🏼‍♂️ 🏋🏽‍♂️ 🏋🏾‍♂️ 🏋🏿‍♂️ 🏋️‍♀️ 🏋🏻‍♀️ 🏋🏼‍♀️ 🏋🏽‍♀️ 🏋🏾‍♀️ 🏋🏿‍♀️ 🚴‍♂️ 🚴🏻‍♂️ 🚴🏼‍♂️ 🚴🏽‍♂️ 🚴🏾‍♂️ 🚴🏿‍♂️ 🚴‍♀️ 🚴🏻‍♀️ 🚴🏼‍♀️ 🚴🏽‍♀️ 🚴🏾‍♀️ 🚴🏿‍♀️ 🚵‍♂️ 🚵🏻‍♂️ 🚵🏼‍♂️ 🚵🏽‍♂️ 🚵🏾‍♂️ 🚵🏿‍♂️ 🚵‍♀️ 🚵🏻‍♀️ 🚵🏼‍♀️ 🚵🏽‍♀️ 🚵🏾‍♀️ 🚵🏿‍♀️ 🤸‍♂️ 🤸🏻‍♂️ 🤸🏼‍♂️ 🤸🏽‍♂️ 🤸🏾‍♂️ 🤸🏿‍♂️ 🤸‍♀️ 🤸🏻‍♀️ 🤸🏼‍♀️ 🤸🏽‍♀️ 🤸🏾‍♀️ 🤸🏿‍♀️ 🤼‍♂️ 🤼‍♀️ 🤽‍♂️ 🤽🏻‍♂️ 🤽🏼‍♂️ 🤽🏽‍♂️ 🤽🏾‍♂️ 🤽🏿‍♂️ 🤽‍♀️ 🤽🏻‍♀️ 🤽🏼‍♀️ 🤽🏽‍♀️ 🤽🏾‍♀️ 🤽🏿‍♀️ 🤾‍♂️ 🤾🏻‍♂️ 🤾🏼‍♂️ 🤾🏽‍♂️ 🤾🏾‍♂️ 🤾🏿‍♂️ 🤾‍♀️ 🤾🏻‍♀️ 🤾🏼‍♀️ 🤾🏽‍♀️ 🤾🏾‍♀️ 🤾🏿‍♀️ 🤹‍♂️ 🤹🏻‍♂️ 🤹🏼‍♂️ 🤹🏽‍♂️ 🤹🏾‍♂️ 🤹🏿‍♂️ 🤹‍♀️ 🤹🏻‍♀️ 🤹🏼‍♀️ 🤹🏽‍♀️ 🤹🏾‍♀️ 🤹🏿‍♀️ 🧘‍♂️ 🧘🏻‍♂️ 🧘🏼‍♂️ 🧘🏽‍♂️ 🧘🏾‍♂️ 🧘🏿‍♂️ 🧘‍♀️ 🧘🏻‍♀️ 🧘🏼‍♀️ 🧘🏽‍♀️ 🧘🏾‍♀️ 🧘🏿‍♀️ 🧑‍🤝‍🧑 🧑🏻‍🤝‍🧑🏻 🧑🏻‍🤝‍🧑🏼 🧑🏻‍🤝‍🧑🏽 🧑🏻‍🤝‍🧑🏾 🧑🏻‍🤝‍🧑🏿 🧑🏼‍🤝‍🧑🏻 🧑🏼‍🤝‍🧑🏼 🧑🏼‍🤝‍🧑🏽 🧑🏼‍🤝‍🧑🏾 🧑🏼‍🤝‍🧑🏿 🧑🏽‍🤝‍🧑🏻 🧑🏽‍🤝‍🧑🏼 🧑🏽‍🤝‍🧑🏽 🧑🏽‍🤝‍🧑🏾 🧑🏽‍🤝‍🧑🏿 🧑🏾‍🤝‍🧑🏻 🧑🏾‍🤝‍🧑🏼 🧑🏾‍🤝‍🧑🏽 🧑🏾‍🤝‍🧑🏾 🧑🏾‍🤝‍🧑🏿 🧑🏿‍🤝‍🧑🏻 🧑🏿‍🤝‍🧑🏼 🧑🏿‍🤝‍🧑🏽 🧑🏿‍🤝‍🧑🏾 🧑🏿‍🤝‍🧑🏿 👩🏻‍🤝‍👩🏼 👩🏻‍🤝‍👩🏽 👩🏻‍🤝‍👩🏾 👩🏻‍🤝‍👩🏿 👩🏼‍🤝‍👩🏻 👩🏼‍🤝‍👩🏽 👩🏼‍🤝‍👩🏾 👩🏼‍🤝‍👩🏿 👩🏽‍🤝‍👩🏻 👩🏽‍🤝‍👩🏼 👩🏽‍🤝‍👩🏾 👩🏽‍🤝‍👩🏿 👩🏾‍🤝‍👩🏻 👩🏾‍🤝‍👩🏼 👩🏾‍🤝‍👩🏽 👩🏾‍🤝‍👩🏿 👩🏿‍🤝‍👩🏻 👩🏿‍🤝‍👩🏼 👩🏿‍🤝‍👩🏽 👩🏿‍🤝‍👩🏾 👩🏻‍🤝‍👨🏼 👩🏻‍🤝‍👨🏽 👩🏻‍🤝‍👨🏾 👩🏻‍🤝‍👨🏿 👩🏼‍🤝‍👨🏻 👩🏼‍🤝‍👨🏽 👩🏼‍🤝‍👨🏾 👩🏼‍🤝‍👨🏿 👩🏽‍🤝‍👨🏻 👩🏽‍🤝‍👨🏼 👩🏽‍🤝‍👨🏾 👩🏽‍🤝‍👨🏿 👩🏾‍🤝‍👨🏻 👩🏾‍🤝‍👨🏼 👩🏾‍🤝‍👨🏽 👩🏾‍🤝‍👨🏿 👩🏿‍🤝‍👨🏻 👩🏿‍🤝‍👨🏼 👩🏿‍🤝‍👨🏽 👩🏿‍🤝‍👨🏾 👨🏻‍🤝‍👨🏼 👨🏻‍🤝‍👨🏽 👨🏻‍🤝‍👨🏾 👨🏻‍🤝‍👨🏿 👨🏼‍🤝‍👨🏻 👨🏼‍🤝‍👨🏽 👨🏼‍🤝‍👨🏾 👨🏼‍🤝‍👨🏿 👨🏽‍🤝‍👨🏻 👨🏽‍🤝‍👨🏼 👨🏽‍🤝‍👨🏾 👨🏽‍🤝‍👨🏿 👨🏾‍🤝‍👨🏻 👨🏾‍🤝‍👨🏼 👨🏾‍🤝‍👨🏽 👨🏾‍🤝‍👨🏿 👨🏿‍🤝‍👨🏻 👨🏿‍🤝‍👨🏼 👨🏿‍🤝‍👨🏽 👨🏿‍🤝‍👨🏾 💏 🧑🏻‍❤️‍💋‍🧑🏼 🧑🏻‍❤️‍💋‍🧑🏽 🧑🏻‍❤️‍💋‍🧑🏾 🧑🏻‍❤️‍💋‍🧑🏿 🧑🏼‍❤️‍💋‍🧑🏻 🧑🏼‍❤️‍💋‍🧑🏽 🧑🏼‍❤️‍💋‍🧑🏾 🧑🏼‍❤️‍💋‍🧑🏿 🧑🏽‍❤️‍💋‍🧑🏻 🧑🏽‍❤️‍💋‍🧑🏼 🧑🏽‍❤️‍💋‍🧑🏾 🧑🏽‍❤️‍💋‍🧑🏿 🧑🏾‍❤️‍💋‍🧑🏻 🧑🏾‍❤️‍💋‍🧑🏼 🧑🏾‍❤️‍💋‍🧑🏽 🧑🏾‍❤️‍💋‍🧑🏿 🧑🏿‍❤️‍💋‍🧑🏻 🧑🏿‍❤️‍💋‍🧑🏼 🧑🏿‍❤️‍💋‍🧑🏽 🧑🏿‍❤️‍💋‍🧑🏾 👩‍❤️‍💋‍👨 👩🏻‍❤️‍💋‍👨🏻 👩🏻‍❤️‍💋‍👨🏼 👩🏻‍❤️‍💋‍👨🏽 👩🏻‍❤️‍💋‍👨🏾 👩🏻‍❤️‍💋‍👨🏿 👩🏼‍❤️‍💋‍👨🏻 👩🏼‍❤️‍💋‍👨🏼 👩🏼‍❤️‍💋‍👨🏽 👩🏼‍❤️‍💋‍👨🏾 👩🏼‍❤️‍💋‍👨🏿 👩🏽‍❤️‍💋‍👨🏻 👩🏽‍❤️‍💋‍👨🏼 👩🏽‍❤️‍💋‍👨🏽 👩🏽‍❤️‍💋‍👨🏾 👩🏽‍❤️‍💋‍👨🏿 👩🏾‍❤️‍💋‍👨🏻 👩🏾‍❤️‍💋‍👨🏼 👩🏾‍❤️‍💋‍👨🏽 👩🏾‍❤️‍💋‍👨🏾 👩🏾‍❤️‍💋‍👨🏿 👩🏿‍❤️‍💋‍👨🏻 👩🏿‍❤️‍💋‍👨🏼 👩🏿‍❤️‍💋‍👨🏽 👩🏿‍❤️‍💋‍👨🏾 👩🏿‍❤️‍💋‍👨🏿 👨‍❤️‍💋‍👨 👨🏻‍❤️‍💋‍👨🏻 👨🏻‍❤️‍💋‍👨🏼 👨🏻‍❤️‍💋‍👨🏽 👨🏻‍❤️‍💋‍👨🏾 👨🏻‍❤️‍💋‍👨🏿 👨🏼‍❤️‍💋‍👨🏻 👨🏼‍❤️‍💋‍👨🏼 👨🏼‍❤️‍💋‍👨🏽 👨🏼‍❤️‍💋‍👨🏾 👨🏼‍❤️‍💋‍👨🏿 👨🏽‍❤️‍💋‍👨🏻 👨🏽‍❤️‍💋‍👨🏼 👨🏽‍❤️‍💋‍👨🏽 👨🏽‍❤️‍💋‍👨🏾 👨🏽‍❤️‍💋‍👨🏿 👨🏾‍❤️‍💋‍👨🏻 👨🏾‍❤️‍💋‍👨🏼 👨🏾‍❤️‍💋‍👨🏽 👨🏾‍❤️‍💋‍👨🏾 👨🏾‍❤️‍💋‍👨🏿 👨🏿‍❤️‍💋‍👨🏻 👨🏿‍❤️‍💋‍👨🏼 👨🏿‍❤️‍💋‍👨🏽 👨🏿‍❤️‍💋‍👨🏾 👨🏿‍❤️‍💋‍👨🏿 👩‍❤️‍💋‍👩 👩🏻‍❤️‍💋‍👩🏻 👩🏻‍❤️‍💋‍👩🏼 👩🏻‍❤️‍💋‍👩🏽 👩🏻‍❤️‍💋‍👩🏾 👩🏻‍❤️‍💋‍👩🏿 👩🏼‍❤️‍💋‍👩🏻 👩🏼‍❤️‍💋‍👩🏼 👩🏼‍❤️‍💋‍👩🏽 👩🏼‍❤️‍💋‍👩🏾 👩🏼‍❤️‍💋‍👩🏿 👩🏽‍❤️‍💋‍👩🏻 👩🏽‍❤️‍💋‍👩🏼 👩🏽‍❤️‍💋‍👩🏽 👩🏽‍❤️‍💋‍👩🏾 👩🏽‍❤️‍💋‍👩🏿 👩🏾‍❤️‍💋‍👩🏻 👩🏾‍❤️‍💋‍👩🏼 👩🏾‍❤️‍💋‍👩🏽 👩🏾‍❤️‍💋‍👩🏾 👩🏾‍❤️‍💋‍👩🏿 👩🏿‍❤️‍💋‍👩🏻 👩🏿‍❤️‍💋‍👩🏼 👩🏿‍❤️‍💋‍👩🏽 👩🏿‍❤️‍💋‍👩🏾 👩🏿‍❤️‍💋‍👩🏿 💑 🧑🏻‍❤️‍🧑🏼 🧑🏻‍❤️‍🧑🏽 🧑🏻‍❤️‍🧑🏾 🧑🏻‍❤️‍🧑🏿 🧑🏼‍❤️‍🧑🏻 🧑🏼‍❤️‍🧑🏽 🧑🏼‍❤️‍🧑🏾 🧑🏼‍❤️‍🧑🏿 🧑🏽‍❤️‍🧑🏻 🧑🏽‍❤️‍🧑🏼 🧑🏽‍❤️‍🧑🏾 🧑🏽‍❤️‍🧑🏿 🧑🏾‍❤️‍🧑🏻 🧑🏾‍❤️‍🧑🏼 🧑🏾‍❤️‍🧑🏽 🧑🏾‍❤️‍🧑🏿 🧑🏿‍❤️‍🧑🏻 🧑🏿‍❤️‍🧑🏼 🧑🏿‍❤️‍🧑🏽 🧑🏿‍❤️‍🧑🏾 👩‍❤️‍👨 👩🏻‍❤️‍👨🏻 👩🏻‍❤️‍👨🏼 👩🏻‍❤️‍👨🏽 👩🏻‍❤️‍👨🏾 👩🏻‍❤️‍👨🏿 👩🏼‍❤️‍👨🏻 👩🏼‍❤️‍👨🏼 👩🏼‍❤️‍👨🏽 👩🏼‍❤️‍👨🏾 👩🏼‍❤️‍👨🏿 👩🏽‍❤️‍👨🏻 👩🏽‍❤️‍👨🏼 👩🏽‍❤️‍👨🏽 👩🏽‍❤️‍👨🏾 👩🏽‍❤️‍👨🏿 👩🏾‍❤️‍👨🏻 👩🏾‍❤️‍👨🏼 👩🏾‍❤️‍👨🏽 👩🏾‍❤️‍👨🏾 👩🏾‍❤️‍👨🏿 👩🏿‍❤️‍👨🏻 👩🏿‍❤️‍👨🏼 👩🏿‍❤️‍👨🏽 👩🏿‍❤️‍👨🏾 👩🏿‍❤️‍👨🏿 👨‍❤️‍👨 👨🏻‍❤️‍👨🏻 👨🏻‍❤️‍👨🏼 👨🏻‍❤️‍👨🏽 👨🏻‍❤️‍👨🏾 👨🏻‍❤️‍👨🏿 👨🏼‍❤️‍👨🏻 👨🏼‍❤️‍👨🏼 👨🏼‍❤️‍👨🏽 👨🏼‍❤️‍👨🏾 👨🏼‍❤️‍👨🏿 👨🏽‍❤️‍👨🏻 👨🏽‍❤️‍👨🏼 👨🏽‍❤️‍👨🏽 👨🏽‍❤️‍👨🏾 👨🏽‍❤️‍👨🏿 👨🏾‍❤️‍👨🏻 👨🏾‍❤️‍👨🏼 👨🏾‍❤️‍👨🏽 👨🏾‍❤️‍👨🏾 👨🏾‍❤️‍👨🏿 👨🏿‍❤️‍👨🏻 👨🏿‍❤️‍👨🏼 👨🏿‍❤️‍👨🏽 👨🏿‍❤️‍👨🏾 👨🏿‍❤️‍👨🏿 👩‍❤️‍👩 👩🏻‍❤️‍👩🏻 👩🏻‍❤️‍👩🏼 👩🏻‍❤️‍👩🏽 👩🏻‍❤️‍👩🏾 👩🏻‍❤️‍👩🏿 👩🏼‍❤️‍👩🏻 👩🏼‍❤️‍👩🏼 👩🏼‍❤️‍👩🏽 👩🏼‍❤️‍👩🏾 👩🏼‍❤️‍👩🏿 👩🏽‍❤️‍👩🏻 👩🏽‍❤️‍👩🏼 👩🏽‍❤️‍👩🏽 👩🏽‍❤️‍👩🏾 👩🏽‍❤️‍👩🏿 👩🏾‍❤️‍👩🏻 👩🏾‍❤️‍👩🏼 👩🏾‍❤️‍👩🏽 👩🏾‍❤️‍👩🏾 👩🏾‍❤️‍👩🏿 👩🏿‍❤️‍👩🏻 👩🏿‍❤️‍👩🏼 👩🏿‍❤️‍👩🏽 👩🏿‍❤️‍👩🏾 👩🏿‍❤️‍👩🏿 👪 👨‍👩‍👦 👨‍👩‍👧 👨‍👩‍👧‍👦 👨‍👩‍👦‍👦 👨‍👩‍👧‍👧 👨‍👨‍👦 👨‍👨‍👧 👨‍👨‍👧‍👦 👨‍👨‍👦‍👦 👨‍👨‍👧‍👧 👩‍👩‍👦 👩‍👩‍👧 👩‍👩‍👧‍👦 👩‍👩‍👦‍👦 👩‍👩‍👧‍👧 👨‍👦 👨‍👦‍👦 👨‍👧 👨‍👧‍👦 👨‍👧‍👧 👩‍👦 👩‍👦‍👦 👩‍👧 👩‍👧‍👦 👩‍👧‍👧 🐕‍🦺 🐈‍⬛ 🐻‍❄️ 🐦‍⬛ 🏳️‍🌈 🏳️‍⚧️ 🏴‍☠️ </p>`,frontmatter:{},note:`Full reference: https://unicode.org/Public/emoji/15.0/
ZJW: zwidje https://unicode.org/emoji/charts/emoji-zwj-sequences.html`,index:3,start:49,end:59},filepath:"/home/ben/Workspace/demystifying-unicode/pages/04-quirks.md",noteHTML:`<p>Full reference: https://unicode.org/Public/emoji/15.0/
ZJW: zwidje https://unicode.org/emoji/charts/emoji-zwj-sequences.html</p>
`,id:51,no:52},__clicksElements:[],__preloaded:!1}},{path:"53",name:"page-53",component:X4,meta:{hide:!1,srcSequence:"./pages/04-quirks.md",slide:{raw:`
## Digraphs/ligatures

Digraphs and ligatures are both made by combining two glyphs:

- In a digraph, the glyphs remain separate but are placed close together.
- In a ligature, the glyphs are fused into a single glyph.

Generally speaking, Unicode doesn't like dealing with this problem.

> The Unicode Standard is a character encoding standard, and is **not intended to standardize ligatures or other presentation forms**, or any other aspects of the details of font and glyph design. The ligatures which you can find in the Unicode Standard are **compatibility encodings** only—and are not meant to set a precedent requiring the encoding of all ligatures as characters.

TL;DR; you shouldn't expect any ligatures/digraphs to be added to Unicode any time soon.


<!--
http://unicode.org/faq/ligature_digraph.html
-->
`,title:"Digraphs/ligatures",level:2,content:`## Digraphs/ligatures

Digraphs and ligatures are both made by combining two glyphs:

- In a digraph, the glyphs remain separate but are placed close together.
- In a ligature, the glyphs are fused into a single glyph.

Generally speaking, Unicode doesn't like dealing with this problem.

> The Unicode Standard is a character encoding standard, and is **not intended to standardize ligatures or other presentation forms**, or any other aspects of the details of font and glyph design. The ligatures which you can find in the Unicode Standard are **compatibility encodings** only—and are not meant to set a precedent requiring the encoding of all ligatures as characters.

TL;DR; you shouldn't expect any ligatures/digraphs to be added to Unicode any time soon.`,frontmatter:{hide:!1,srcSequence:"./pages/04-quirks.md"},note:"http://unicode.org/faq/ligature_digraph.html",index:52,start:60,end:79,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/04-quirks.md",raw:`
## Digraphs/ligatures

Digraphs and ligatures are both made by combining two glyphs:

- In a digraph, the glyphs remain separate but are placed close together.
- In a ligature, the glyphs are fused into a single glyph.

Generally speaking, Unicode doesn't like dealing with this problem.

> The Unicode Standard is a character encoding standard, and is **not intended to standardize ligatures or other presentation forms**, or any other aspects of the details of font and glyph design. The ligatures which you can find in the Unicode Standard are **compatibility encodings** only—and are not meant to set a precedent requiring the encoding of all ligatures as characters.

TL;DR; you shouldn't expect any ligatures/digraphs to be added to Unicode any time soon.


<!--
http://unicode.org/faq/ligature_digraph.html
-->
`,title:"Digraphs/ligatures",level:2,content:`## Digraphs/ligatures

Digraphs and ligatures are both made by combining two glyphs:

- In a digraph, the glyphs remain separate but are placed close together.
- In a ligature, the glyphs are fused into a single glyph.

Generally speaking, Unicode doesn't like dealing with this problem.

> The Unicode Standard is a character encoding standard, and is **not intended to standardize ligatures or other presentation forms**, or any other aspects of the details of font and glyph design. The ligatures which you can find in the Unicode Standard are **compatibility encodings** only—and are not meant to set a precedent requiring the encoding of all ligatures as characters.

TL;DR; you shouldn't expect any ligatures/digraphs to be added to Unicode any time soon.`,frontmatter:{},note:"http://unicode.org/faq/ligature_digraph.html",index:4,start:60,end:79},filepath:"/home/ben/Workspace/demystifying-unicode/pages/04-quirks.md",noteHTML:`<p>http://unicode.org/faq/ligature_digraph.html</p>
`,id:52,no:53},__clicksElements:[],__preloaded:!1}},{path:"54",name:"page-54",component:rT,meta:{hide:!1,srcSequence:"./pages/04-quirks.md",slide:{raw:`
## Flags

- Who adds a new flag?
- Flag sequences
  - :RGI_Emoji_Flag_Sequence
  - https://unicode.org/reports/tr51/#Flags
  - Qatar flag = wideboi

- "🇭🇪🇱🇱🇴🇼🇴🇷🇱🇩" ??


Flag types:
- country/region
- local (gbeng, etc)
`,title:"Flags",level:2,content:`## Flags

- Who adds a new flag?
- Flag sequences
  - :RGI_Emoji_Flag_Sequence
  - https://unicode.org/reports/tr51/#Flags
  - Qatar flag = wideboi

- "🇭🇪🇱🇱🇴🇼🇴🇷🇱🇩" ??


Flag types:
- country/region
- local (gbeng, etc)`,frontmatter:{hide:!1,srcSequence:"./pages/04-quirks.md"},index:53,start:80,end:96,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/04-quirks.md",raw:`
## Flags

- Who adds a new flag?
- Flag sequences
  - :RGI_Emoji_Flag_Sequence
  - https://unicode.org/reports/tr51/#Flags
  - Qatar flag = wideboi

- "🇭🇪🇱🇱🇴🇼🇴🇷🇱🇩" ??


Flag types:
- country/region
- local (gbeng, etc)
`,title:"Flags",level:2,content:`## Flags

- Who adds a new flag?
- Flag sequences
  - :RGI_Emoji_Flag_Sequence
  - https://unicode.org/reports/tr51/#Flags
  - Qatar flag = wideboi

- "🇭🇪🇱🇱🇴🇼🇴🇷🇱🇩" ??


Flag types:
- country/region
- local (gbeng, etc)`,frontmatter:{},index:5,start:80,end:96},filepath:"/home/ben/Workspace/demystifying-unicode/pages/04-quirks.md",noteHTML:"",id:53,no:54},__clicksElements:[],__preloaded:!1}},{path:"55",name:"page-55",component:uT,meta:{hide:!1,srcSequence:"./pages/04-quirks.md",slide:{raw:`
## Unicode Tags

\`\`\`rust
fn main() {
    let encoded = "Hello󠀠󠁒󠁵󠁳󠁴 Meetup Amsterdam!";

    println!("{}", encoded);
    //println!("{:?}", encoded);

    //let codepoints: Vec<u32> = encoded.chars().map(|c| c.into()).collect();
    //println!("{:X?}", codepoints);

    //let offset: u32 = 0xE0000;

    //let decoded: String = encoded
    //    .chars()
    //    .map(|c| match c {
    //        '\\u{e0000}'..='\\u{e007F}' => {
    //            let char_u32: u32 = c.into();
    //            std::char::from_u32(char_u32 - offset).unwrap()
    //        },
    //        _ => c,
    //    })
    //    .collect();

    //println!("{:?}", decoded);
}
\`\`\`

https://www.compart.com/en/unicode/block/U+E0000

<!--
Unicode tags: https://en.wikipedia.org/wiki/Tags_(Unicode_block)
\\uE0001-\\uE007F
-->
`,title:"Unicode Tags",level:2,content:`## Unicode Tags

\`\`\`rust
fn main() {
    let encoded = "Hello󠀠󠁒󠁵󠁳󠁴 Meetup Amsterdam!";

    println!("{}", encoded);
    //println!("{:?}", encoded);

    //let codepoints: Vec<u32> = encoded.chars().map(|c| c.into()).collect();
    //println!("{:X?}", codepoints);

    //let offset: u32 = 0xE0000;

    //let decoded: String = encoded
    //    .chars()
    //    .map(|c| match c {
    //        '\\u{e0000}'..='\\u{e007F}' => {
    //            let char_u32: u32 = c.into();
    //            std::char::from_u32(char_u32 - offset).unwrap()
    //        },
    //        _ => c,
    //    })
    //    .collect();

    //println!("{:?}", decoded);
}
\`\`\`

https://www.compart.com/en/unicode/block/U+E0000`,frontmatter:{hide:!1,srcSequence:"./pages/04-quirks.md"},note:`Unicode tags: https://en.wikipedia.org/wiki/Tags_(Unicode_block)
\\uE0001-\\uE007F`,index:54,start:97,end:134,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/04-quirks.md",raw:`
## Unicode Tags

\`\`\`rust
fn main() {
    let encoded = "Hello󠀠󠁒󠁵󠁳󠁴 Meetup Amsterdam!";

    println!("{}", encoded);
    //println!("{:?}", encoded);

    //let codepoints: Vec<u32> = encoded.chars().map(|c| c.into()).collect();
    //println!("{:X?}", codepoints);

    //let offset: u32 = 0xE0000;

    //let decoded: String = encoded
    //    .chars()
    //    .map(|c| match c {
    //        '\\u{e0000}'..='\\u{e007F}' => {
    //            let char_u32: u32 = c.into();
    //            std::char::from_u32(char_u32 - offset).unwrap()
    //        },
    //        _ => c,
    //    })
    //    .collect();

    //println!("{:?}", decoded);
}
\`\`\`

https://www.compart.com/en/unicode/block/U+E0000

<!--
Unicode tags: https://en.wikipedia.org/wiki/Tags_(Unicode_block)
\\uE0001-\\uE007F
-->
`,title:"Unicode Tags",level:2,content:`## Unicode Tags

\`\`\`rust
fn main() {
    let encoded = "Hello󠀠󠁒󠁵󠁳󠁴 Meetup Amsterdam!";

    println!("{}", encoded);
    //println!("{:?}", encoded);

    //let codepoints: Vec<u32> = encoded.chars().map(|c| c.into()).collect();
    //println!("{:X?}", codepoints);

    //let offset: u32 = 0xE0000;

    //let decoded: String = encoded
    //    .chars()
    //    .map(|c| match c {
    //        '\\u{e0000}'..='\\u{e007F}' => {
    //            let char_u32: u32 = c.into();
    //            std::char::from_u32(char_u32 - offset).unwrap()
    //        },
    //        _ => c,
    //    })
    //    .collect();

    //println!("{:?}", decoded);
}
\`\`\`

https://www.compart.com/en/unicode/block/U+E0000`,frontmatter:{},note:`Unicode tags: https://en.wikipedia.org/wiki/Tags_(Unicode_block)
\\uE0001-\\uE007F`,index:6,start:97,end:134},filepath:"/home/ben/Workspace/demystifying-unicode/pages/04-quirks.md",noteHTML:`<p>Unicode tags: https://en.wikipedia.org/wiki/Tags_(Unicode_block)
\\uE0001-\\uE007F</p>
`,id:54,no:55},__clicksElements:[],__preloaded:!1}},{path:"56",name:"page-56",component:fT,meta:{layout:"cover",hideInToc:!0,slide:{raw:`---
layout: cover
hideInToc: true
---

# THE END
`,title:"THE END",level:1,content:"# THE END",frontmatter:{layout:"cover",hideInToc:!0},index:55,start:58,end:65,noteHTML:"",filepath:"/home/ben/Workspace/demystifying-unicode/slides.md",id:55,no:56},__clicksElements:[],__preloaded:!1}}],mT=[],Ge=hT,yo=[{name:"play",path:"/",component:q3,children:[...Ge,...mT]},{name:"print",path:"/print",component:h2},{path:"",redirect:{path:"/1"}},{path:"/:pathMatch(.*)",redirect:{path:"/1"}}];{let e=function(t){if(!mo.remote||mo.remote===t.query.password)return!0;if(mo.remote&&t.query.password===void 0){const n=prompt("Enter password");if(mo.remote===n)return!0}return t.params.no?{path:`/${t.params.no}`}:{path:""}};yo.push({path:"/presenter/print",component:()=>Ln(()=>import("./PresenterPrint-7b123f3e.js"),["assets/PresenterPrint-7b123f3e.js","assets/NoteDisplay-b9eb84b9.js"])}),yo.push({name:"notes",path:"/notes",component:()=>Ln(()=>import("./NotesView-e61a988d.js"),["assets/NotesView-e61a988d.js","assets/NoteDisplay-b9eb84b9.js"]),beforeEnter:e}),yo.push({name:"presenter",path:"/presenter/:no",component:()=>Ln(()=>import("./Presenter-1136f601.js"),["assets/Presenter-1136f601.js","assets/NoteDisplay-b9eb84b9.js","assets/DrawingControls-079301e5.js","assets/Presenter-aa6741a8.css"]),beforeEnter:e}),yo.push({path:"/presenter",redirect:{path:"/presenter/1"}})}const xt=Fb({history:T_("/demystifying-unicode/"),routes:yo});function yT(e,t,{mode:n="replace"}={}){return D({get(){const s=xt.currentRoute.value.query[e];return s==null?t??null:Array.isArray(s)?s.filter(Boolean):s},set(s){rt(()=>{xt[B(n)]({query:{...xt.currentRoute.value.query,[e]:s}})})}})}const ih=Y(0);rt(()=>{xt.afterEach(async()=>{await rt(),ih.value+=1})});const lh=Y(0),Rt=D(()=>xt.currentRoute.value),bn=D(()=>Rt.value.query.print!==void 0),gT=D(()=>Rt.value.query.print==="clicks"),yn=D(()=>Rt.value.query.embedded!==void 0),_t=D(()=>Rt.value.path.startsWith("/presenter")),vT=D(()=>Rt.value.path.startsWith("/notes")),Ao=D(()=>bn.value&&!gT.value),Wl=D(()=>Rt.value.query.password),_T=D(()=>!_t.value&&(!Fe.remote||Wl.value===Fe.remote)),zu=yT("clicks","0"),bT=D(()=>Ge.length),xT=D(()=>Rt.value.path),He=D(()=>Number.parseInt(xT.value.split(/\//g).slice(-1)[0])||1);D(()=>vi(He.value));const ft=D(()=>Ge.find(e=>e.path===`${He.value}`));D(()=>{var e,t,n;return(n=(t=(e=ft.value)==null?void 0:e.meta)==null?void 0:t.slide)==null?void 0:n.id});D(()=>{var e,t;return((t=(e=ft.value)==null?void 0:e.meta)==null?void 0:t.layout)||(He.value===1?"cover":"default")});const Hi=D(()=>Ge.find(e=>e.path===`${Math.min(Ge.length,He.value+1)}`)),wT=D(()=>Ge.find(e=>e.path===`${Math.max(1,He.value-1)}`)),kT=D(()=>{var e,t;return ih.value,((t=(e=ft.value)==null?void 0:e.meta)==null?void 0:t.__clicksElements)||[]}),Mt=D({get(){if(Ao.value)return 99999;let e=+(zu.value||0);return Number.isNaN(e)&&(e=0),e},set(e){zu.value=e.toString()}}),Zr=D(()=>{var e,t;return+(((t=(e=ft.value)==null?void 0:e.meta)==null?void 0:t.clicks)??kT.value.length)}),AT=D(()=>He.value<Ge.length||Mt.value<Zr.value),ST=D(()=>He.value>1||Mt.value>0),CT=D(()=>Ge.filter(e=>{var t,n;return(n=(t=e.meta)==null?void 0:t.slide)==null?void 0:n.title}).reduce((e,t)=>(La(e,t),e),[])),ET=D(()=>Ra(CT.value,ft.value));D(()=>Na(ET.value));const TT=D(()=>OT(lh.value,ft.value,wT.value));ge(ft,(e,t)=>{lh.value=Number(e==null?void 0:e.path)-Number(t==null?void 0:t.path)});function Nn(){Zr.value<=Mt.value?qo():Mt.value+=1}async function qn(){Mt.value<=0?await jo():Mt.value-=1}function vi(e){return _t.value?`/presenter/${e}`:`/${e}`}function qo(){const e=Math.min(Ge.length,He.value+1);return Hs(e)}async function jo(e=!0){const t=Math.max(1,He.value-1);await Hs(t),e&&Zr.value&&xt.replace({query:{...Rt.value.query,clicks:Zr.value}})}function Hs(e,t){return xt.push({path:vi(e),query:{...Rt.value.query,clicks:t}})}function FT(e){const t=Y(0),{direction:n,distanceX:s,distanceY:r}=Zv(e,{onSwipeStart(i){i.pointerType==="touch"&&(Lo.value||(t.value=Al()))},onSwipeEnd(i){if(i.pointerType!=="touch"||!t.value||Lo.value)return;const l=Math.abs(s.value),a=Math.abs(r.value);l/window.innerWidth>.3||l>100?n.value==="left"?Nn():qn():(a/window.innerHeight>.4||a>200)&&(n.value==="down"?jo():qo())}})}async function Hl(){const{saveAs:e}=await Ln(()=>import("./FileSaver.min-23a5d44b.js").then(t=>t.F),[]);e(typeof Fe.download=="string"?Fe.download:Fe.exportFilename?`${Fe.exportFilename}.pdf`:"/demystifying-unicode/slidev-exported.pdf",`${Fe.title}.pdf`)}async function $T(e){var t,n;if(e==null){const s=(n=(t=ft.value)==null?void 0:t.meta)==null?void 0:n.slide;if(!(s!=null&&s.filepath))return!1;e=`${s.filepath}:${s.start}`}return await fetch(`/__open-in-editor?file=${encodeURIComponent(e)}`),!0}function La(e,t,n=1){var r,i,l,a,c;const s=(i=(r=t.meta)==null?void 0:r.slide)==null?void 0:i.level;s&&s>n&&e.length>0?La(e[e.length-1].children,t,n+1):e.push({children:[],level:n,path:t.path,hideInToc:!!((l=t.meta)!=null&&l.hideInToc),title:(c=(a=t.meta)==null?void 0:a.slide)==null?void 0:c.title})}function Ra(e,t,n=!1,s){return e.map(r=>{const i={...r,active:r.path===(t==null?void 0:t.path),hasActiveParent:n};return i.children.length>0&&(i.children=Ra(i.children,t,i.active||i.hasActiveParent,i)),s&&(i.active||i.activeParent)&&(s.activeParent=!0),i})}function Na(e,t=1){return e.filter(n=>!n.hideInToc).map(n=>({...n,children:Na(n.children,t+1)}))}const BT={"slide-left":"slide-left | slide-right","slide-right":"slide-right | slide-left","slide-up":"slide-up | slide-down","slide-down":"slide-down | slide-up"};function DT(e,t=!1){if(!e||(typeof e=="string"&&(e={name:e}),!e.name))return;let n=e.name.includes("|")?e.name:BT[e.name]||e.name;if(n.includes("|")){const[s,r]=n.split("|").map(i=>i.trim());n=t?r:s}if(n)return{...e,name:n}}function OT(e,t,n){var r,i;let s=e>0?(r=n==null?void 0:n.meta)==null?void 0:r.transition:(i=t==null?void 0:t.meta)==null?void 0:i.transition;return s||(s=Fe.transition),DT(s,e<0)}function IT(){const e=Fe.titleTemplate.replace("%s",Fe.title||"Slidev");Yp({title:e,htmlAttrs:Fe.htmlAttrs}),E1(`${e} - shared`),B1(`${e} - drawings`);const t=`${location.origin}_${x1()}`;function n(){vT.value||!_t.value&&!g1.includes(location.host.split(":")[0])||(_t.value?(no("page",+He.value),no("clicks",Mt.value)):(no("viewerPage",+He.value),no("viewerClicks",Mt.value)),no("lastUpdate",{id:t,type:_t.value?"presenter":"viewer",time:new Date().getTime()}))}xt.afterEach(n),ge(Mt,n),T1(s=>{var i;xt.currentRoute.value.path.match(/^\/(\d+|presenter)\/?/)&&((i=s.lastUpdate)==null?void 0:i.type)==="presenter"&&(+s.page!=+He.value||+Mt.value!=+s.clicks)&&xt.replace({path:vi(s.page),query:{...xt.currentRoute.value.query,clicks:s.clicks||0}})})}const PT=ke({__name:"App",setup(e){return L(z),IT(),(t,n)=>{const s=qs("RouterView"),r=qs("StarportCarrier");return v(),T(Te,null,[H(s),H(r)],64)}}}),UT=K(PT,[["__file","/home/ben/Workspace/demystifying-unicode/node_modules/@slidev/client/App.vue"]]);function Vi(e){return e!==null&&typeof e=="object"}function Vl(e,t,n=".",s){if(!Vi(t))return Vl(e,{},n,s);const r=Object.assign({},t);for(const i in e){if(i==="__proto__"||i==="constructor")continue;const l=e[i];l!=null&&(s&&s(r,i,l,n)||(Array.isArray(l)&&Array.isArray(r[i])?r[i]=[...l,...r[i]]:Vi(l)&&Vi(r[i])?r[i]=Vl(l,r[i],(n?`${n}.`:"")+i.toString(),s):r[i]=l))}return r}function MT(e){return(...t)=>t.reduce((n,s)=>Vl(n,s,"",e),{})}const LT=MT(),ah=1/60*1e3,RT=typeof performance<"u"?()=>performance.now():()=>Date.now(),ch=typeof window<"u"?e=>window.requestAnimationFrame(e):e=>setTimeout(()=>e(RT()),ah);function NT(e){let t=[],n=[],s=0,r=!1,i=!1;const l=new WeakSet,a={schedule:(c,u=!1,d=!1)=>{const p=d&&r,f=p?t:n;return u&&l.add(c),f.indexOf(c)===-1&&(f.push(c),p&&r&&(s=t.length)),c},cancel:c=>{const u=n.indexOf(c);u!==-1&&n.splice(u,1),l.delete(c)},process:c=>{if(r){i=!0;return}if(r=!0,[t,n]=[n,t],n.length=0,s=t.length,s)for(let u=0;u<s;u++){const d=t[u];d(c),l.has(d)&&(a.schedule(d),e())}r=!1,i&&(i=!1,a.process(c))}};return a}const qT=40;let zl=!0,Wo=!1,Kl=!1;const Ns={delta:0,timestamp:0},Jo=["read","update","preRender","render","postRender"],_i=Jo.reduce((e,t)=>(e[t]=NT(()=>Wo=!0),e),{}),Gl=Jo.reduce((e,t)=>{const n=_i[t];return e[t]=(s,r=!1,i=!1)=>(Wo||HT(),n.schedule(s,r,i)),e},{}),jT=Jo.reduce((e,t)=>(e[t]=_i[t].cancel,e),{});Jo.reduce((e,t)=>(e[t]=()=>_i[t].process(Ns),e),{});const WT=e=>_i[e].process(Ns),uh=e=>{Wo=!1,Ns.delta=zl?ah:Math.max(Math.min(e-Ns.timestamp,qT),1),Ns.timestamp=e,Kl=!0,Jo.forEach(WT),Kl=!1,Wo&&(zl=!1,ch(uh))},HT=()=>{Wo=!0,zl=!0,Kl||ch(uh)},dh=()=>Ns;function ph(e,t){var n={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(n[s]=e[s]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(e);r<s.length;r++)t.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(e,s[r])&&(n[s[r]]=e[s[r]]);return n}var qa=function(){},Ho=function(){};qa=function(e,t){!e&&typeof console<"u"&&console.warn(t)},Ho=function(e,t){if(!e)throw new Error(t)};const Yl=(e,t,n)=>Math.min(Math.max(n,e),t),zi=.001,VT=.01,Ku=10,zT=.05,KT=1;function GT({duration:e=800,bounce:t=.25,velocity:n=0,mass:s=1}){let r,i;qa(e<=Ku*1e3,"Spring duration must be 10 seconds or less");let l=1-t;l=Yl(zT,KT,l),e=Yl(VT,Ku,e/1e3),l<1?(r=u=>{const d=u*l,p=d*e,f=d-n,h=Ql(u,l),y=Math.exp(-p);return zi-f/h*y},i=u=>{const p=u*l*e,f=p*n+n,h=Math.pow(l,2)*Math.pow(u,2)*e,y=Math.exp(-p),b=Ql(Math.pow(u,2),l);return(-r(u)+zi>0?-1:1)*((f-h)*y)/b}):(r=u=>{const d=Math.exp(-u*e),p=(u-n)*e+1;return-zi+d*p},i=u=>{const d=Math.exp(-u*e),p=(n-u)*(e*e);return d*p});const a=5/e,c=QT(r,i,a);if(e=e*1e3,isNaN(c))return{stiffness:100,damping:10,duration:e};{const u=Math.pow(c,2)*s;return{stiffness:u,damping:l*2*Math.sqrt(s*u),duration:e}}}const YT=12;function QT(e,t,n){let s=n;for(let r=1;r<YT;r++)s=s-e(s)/t(s);return s}function Ql(e,t){return e*Math.sqrt(1-t*t)}const ZT=["duration","bounce"],JT=["stiffness","damping","mass"];function Gu(e,t){return t.some(n=>e[n]!==void 0)}function XT(e){let t=Object.assign({velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1},e);if(!Gu(e,JT)&&Gu(e,ZT)){const n=GT(e);t=Object.assign(Object.assign(Object.assign({},t),n),{velocity:0,mass:1}),t.isResolvedFromDuration=!0}return t}function ja(e){var{from:t=0,to:n=1,restSpeed:s=2,restDelta:r}=e,i=ph(e,["from","to","restSpeed","restDelta"]);const l={done:!1,value:t};let{stiffness:a,damping:c,mass:u,velocity:d,duration:p,isResolvedFromDuration:f}=XT(i),h=Yu,y=Yu;function b(){const k=d?-(d/1e3):0,w=n-t,A=c/(2*Math.sqrt(a*u)),x=Math.sqrt(a/u)/1e3;if(r===void 0&&(r=Math.min(Math.abs(n-t)/100,.4)),A<1){const S=Ql(x,A);h=C=>{const F=Math.exp(-A*x*C);return n-F*((k+A*x*w)/S*Math.sin(S*C)+w*Math.cos(S*C))},y=C=>{const F=Math.exp(-A*x*C);return A*x*F*(Math.sin(S*C)*(k+A*x*w)/S+w*Math.cos(S*C))-F*(Math.cos(S*C)*(k+A*x*w)-S*w*Math.sin(S*C))}}else if(A===1)h=S=>n-Math.exp(-x*S)*(w+(k+x*w)*S);else{const S=x*Math.sqrt(A*A-1);h=C=>{const F=Math.exp(-A*x*C),U=Math.min(S*C,300);return n-F*((k+A*x*w)*Math.sinh(U)+S*w*Math.cosh(U))/S}}}return b(),{next:k=>{const w=h(k);if(f)l.done=k>=p;else{const A=y(k)*1e3,x=Math.abs(A)<=s,S=Math.abs(n-w)<=r;l.done=x&&S}return l.value=l.done?n:w,l},flipTarget:()=>{d=-d,[t,n]=[n,t],b()}}}ja.needsInterpolation=(e,t)=>typeof e=="string"||typeof t=="string";const Yu=e=>0,fh=(e,t,n)=>{const s=t-e;return s===0?1:(n-e)/s},Wa=(e,t,n)=>-n*e+n*t+e,hh=(e,t)=>n=>Math.max(Math.min(n,t),e),So=e=>e%1?Number(e.toFixed(5)):e,Vo=/(-)?([\d]*\.?[\d])+/g,Zl=/(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,eF=/^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function Xo(e){return typeof e=="string"}const er={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},Co=Object.assign(Object.assign({},er),{transform:hh(0,1)}),vr=Object.assign(Object.assign({},er),{default:1}),Ha=e=>({test:t=>Xo(t)&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),Jn=Ha("deg"),Eo=Ha("%"),_e=Ha("px"),Qu=Object.assign(Object.assign({},Eo),{parse:e=>Eo.parse(e)/100,transform:e=>Eo.transform(e*100)}),Va=(e,t)=>n=>!!(Xo(n)&&eF.test(n)&&n.startsWith(e)||t&&Object.prototype.hasOwnProperty.call(n,t)),mh=(e,t,n)=>s=>{if(!Xo(s))return s;const[r,i,l,a]=s.match(Vo);return{[e]:parseFloat(r),[t]:parseFloat(i),[n]:parseFloat(l),alpha:a!==void 0?parseFloat(a):1}},ds={test:Va("hsl","hue"),parse:mh("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:s=1})=>"hsla("+Math.round(e)+", "+Eo.transform(So(t))+", "+Eo.transform(So(n))+", "+So(Co.transform(s))+")"},tF=hh(0,255),Ki=Object.assign(Object.assign({},er),{transform:e=>Math.round(tF(e))}),On={test:Va("rgb","red"),parse:mh("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:s=1})=>"rgba("+Ki.transform(e)+", "+Ki.transform(t)+", "+Ki.transform(n)+", "+So(Co.transform(s))+")"};function nF(e){let t="",n="",s="",r="";return e.length>5?(t=e.substr(1,2),n=e.substr(3,2),s=e.substr(5,2),r=e.substr(7,2)):(t=e.substr(1,1),n=e.substr(2,1),s=e.substr(3,1),r=e.substr(4,1),t+=t,n+=n,s+=s,r+=r),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(s,16),alpha:r?parseInt(r,16)/255:1}}const Jl={test:Va("#"),parse:nF,transform:On.transform},vt={test:e=>On.test(e)||Jl.test(e)||ds.test(e),parse:e=>On.test(e)?On.parse(e):ds.test(e)?ds.parse(e):Jl.parse(e),transform:e=>Xo(e)?e:e.hasOwnProperty("red")?On.transform(e):ds.transform(e)},yh="${c}",gh="${n}";function sF(e){var t,n,s,r;return isNaN(e)&&Xo(e)&&((n=(t=e.match(Vo))===null||t===void 0?void 0:t.length)!==null&&n!==void 0?n:0)+((r=(s=e.match(Zl))===null||s===void 0?void 0:s.length)!==null&&r!==void 0?r:0)>0}function vh(e){typeof e=="number"&&(e=`${e}`);const t=[];let n=0;const s=e.match(Zl);s&&(n=s.length,e=e.replace(Zl,yh),t.push(...s.map(vt.parse)));const r=e.match(Vo);return r&&(e=e.replace(Vo,gh),t.push(...r.map(er.parse))),{values:t,numColors:n,tokenised:e}}function _h(e){return vh(e).values}function bh(e){const{values:t,numColors:n,tokenised:s}=vh(e),r=t.length;return i=>{let l=s;for(let a=0;a<r;a++)l=l.replace(a<n?yh:gh,a<n?vt.transform(i[a]):So(i[a]));return l}}const oF=e=>typeof e=="number"?0:e;function rF(e){const t=_h(e);return bh(e)(t.map(oF))}const tr={test:sF,parse:_h,createTransformer:bh,getAnimatableNone:rF},iF=new Set(["brightness","contrast","saturate","opacity"]);function lF(e){let[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[s]=n.match(Vo)||[];if(!s)return e;const r=n.replace(s,"");let i=iF.has(t)?1:0;return s!==n&&(i*=100),t+"("+i+r+")"}const aF=/([a-z-]*)\(.*?\)/g,Xl=Object.assign(Object.assign({},tr),{getAnimatableNone:e=>{const t=e.match(aF);return t?t.map(lF).join(" "):e}});function Gi(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function Zu({hue:e,saturation:t,lightness:n,alpha:s}){e/=360,t/=100,n/=100;let r=0,i=0,l=0;if(!t)r=i=l=n;else{const a=n<.5?n*(1+t):n+t-n*t,c=2*n-a;r=Gi(c,a,e+1/3),i=Gi(c,a,e),l=Gi(c,a,e-1/3)}return{red:Math.round(r*255),green:Math.round(i*255),blue:Math.round(l*255),alpha:s}}const cF=(e,t,n)=>{const s=e*e,r=t*t;return Math.sqrt(Math.max(0,n*(r-s)+s))},uF=[Jl,On,ds],Ju=e=>uF.find(t=>t.test(e)),Xu=e=>`'${e}' is not an animatable color. Use the equivalent color code instead.`,xh=(e,t)=>{let n=Ju(e),s=Ju(t);Ho(!!n,Xu(e)),Ho(!!s,Xu(t));let r=n.parse(e),i=s.parse(t);n===ds&&(r=Zu(r),n=On),s===ds&&(i=Zu(i),s=On);const l=Object.assign({},r);return a=>{for(const c in l)c!=="alpha"&&(l[c]=cF(r[c],i[c],a));return l.alpha=Wa(r.alpha,i.alpha,a),n.transform(l)}},dF=e=>typeof e=="number",pF=(e,t)=>n=>t(e(n)),wh=(...e)=>e.reduce(pF);function kh(e,t){return dF(e)?n=>Wa(e,t,n):vt.test(e)?xh(e,t):Sh(e,t)}const Ah=(e,t)=>{const n=[...e],s=n.length,r=e.map((i,l)=>kh(i,t[l]));return i=>{for(let l=0;l<s;l++)n[l]=r[l](i);return n}},fF=(e,t)=>{const n=Object.assign(Object.assign({},e),t),s={};for(const r in n)e[r]!==void 0&&t[r]!==void 0&&(s[r]=kh(e[r],t[r]));return r=>{for(const i in s)n[i]=s[i](r);return n}};function ed(e){const t=tr.parse(e),n=t.length;let s=0,r=0,i=0;for(let l=0;l<n;l++)s||typeof t[l]=="number"?s++:t[l].hue!==void 0?i++:r++;return{parsed:t,numNumbers:s,numRGB:r,numHSL:i}}const Sh=(e,t)=>{const n=tr.createTransformer(t),s=ed(e),r=ed(t);return s.numHSL===r.numHSL&&s.numRGB===r.numRGB&&s.numNumbers>=r.numNumbers?wh(Ah(s.parsed,r.parsed),n):(qa(!0,`Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`),l=>`${l>0?t:e}`)},hF=(e,t)=>n=>Wa(e,t,n);function mF(e){if(typeof e=="number")return hF;if(typeof e=="string")return vt.test(e)?xh:Sh;if(Array.isArray(e))return Ah;if(typeof e=="object")return fF}function yF(e,t,n){const s=[],r=n||mF(e[0]),i=e.length-1;for(let l=0;l<i;l++){let a=r(e[l],e[l+1]);if(t){const c=Array.isArray(t)?t[l]:t;a=wh(c,a)}s.push(a)}return s}function gF([e,t],[n]){return s=>n(fh(e,t,s))}function vF(e,t){const n=e.length,s=n-1;return r=>{let i=0,l=!1;if(r<=e[0]?l=!0:r>=e[s]&&(i=s-1,l=!0),!l){let c=1;for(;c<n&&!(e[c]>r||c===s);c++);i=c-1}const a=fh(e[i],e[i+1],r);return t[i](a)}}function Ch(e,t,{clamp:n=!0,ease:s,mixer:r}={}){const i=e.length;Ho(i===t.length,"Both input and output ranges must be the same length"),Ho(!s||!Array.isArray(s)||s.length===i-1,"Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values."),e[0]>e[i-1]&&(e=[].concat(e),t=[].concat(t),e.reverse(),t.reverse());const l=yF(t,s,r),a=i===2?gF(e,l):vF(e,l);return n?c=>a(Yl(e[0],e[i-1],c)):a}const bi=e=>t=>1-e(1-t),za=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,_F=e=>t=>Math.pow(t,e),Eh=e=>t=>t*t*((e+1)*t-e),bF=e=>{const t=Eh(e);return n=>(n*=2)<1?.5*t(n):.5*(2-Math.pow(2,-10*(n-1)))},Th=1.525,xF=4/11,wF=8/11,kF=9/10,Fh=e=>e,Ka=_F(2),AF=bi(Ka),$h=za(Ka),Bh=e=>1-Math.sin(Math.acos(e)),Dh=bi(Bh),SF=za(Dh),Ga=Eh(Th),CF=bi(Ga),EF=za(Ga),TF=bF(Th),FF=4356/361,$F=35442/1805,BF=16061/1805,Jr=e=>{if(e===1||e===0)return e;const t=e*e;return e<xF?7.5625*t:e<wF?9.075*t-9.9*e+3.4:e<kF?FF*t-$F*e+BF:10.8*e*e-20.52*e+10.72},DF=bi(Jr),OF=e=>e<.5?.5*(1-Jr(1-e*2)):.5*Jr(e*2-1)+.5;function IF(e,t){return e.map(()=>t||$h).splice(0,e.length-1)}function PF(e){const t=e.length;return e.map((n,s)=>s!==0?s/(t-1):0)}function UF(e,t){return e.map(n=>n*t)}function Tr({from:e=0,to:t=1,ease:n,offset:s,duration:r=300}){const i={done:!1,value:e},l=Array.isArray(t)?t:[e,t],a=UF(s&&s.length===l.length?s:PF(l),r);function c(){return Ch(a,l,{ease:Array.isArray(n)?n:IF(l,n)})}let u=c();return{next:d=>(i.value=u(d),i.done=d>=r,i),flipTarget:()=>{l.reverse(),u=c()}}}function MF({velocity:e=0,from:t=0,power:n=.8,timeConstant:s=350,restDelta:r=.5,modifyTarget:i}){const l={done:!1,value:t};let a=n*e;const c=t+a,u=i===void 0?c:i(c);return u!==c&&(a=u-t),{next:d=>{const p=-a*Math.exp(-d/s);return l.done=!(p>r||p<-r),l.value=l.done?u:u+p,l},flipTarget:()=>{}}}const td={keyframes:Tr,spring:ja,decay:MF};function LF(e){if(Array.isArray(e.to))return Tr;if(td[e.type])return td[e.type];const t=new Set(Object.keys(e));return t.has("ease")||t.has("duration")&&!t.has("dampingRatio")?Tr:t.has("dampingRatio")||t.has("stiffness")||t.has("mass")||t.has("damping")||t.has("restSpeed")||t.has("restDelta")?ja:Tr}function Oh(e,t,n=0){return e-t-n}function RF(e,t,n=0,s=!0){return s?Oh(t+-e,t,n):t-(e-t)+n}function NF(e,t,n,s){return s?e>=t+n:e<=-n}const qF=e=>{const t=({delta:n})=>e(n);return{start:()=>Gl.update(t,!0),stop:()=>jT.update(t)}};function Ih(e){var t,n,{from:s,autoplay:r=!0,driver:i=qF,elapsed:l=0,repeat:a=0,repeatType:c="loop",repeatDelay:u=0,onPlay:d,onStop:p,onComplete:f,onRepeat:h,onUpdate:y}=e,b=ph(e,["from","autoplay","driver","elapsed","repeat","repeatType","repeatDelay","onPlay","onStop","onComplete","onRepeat","onUpdate"]);let{to:k}=b,w,A=0,x=b.duration,S,C=!1,F=!0,U;const O=LF(b);!((n=(t=O).needsInterpolation)===null||n===void 0)&&n.call(t,s,k)&&(U=Ch([0,100],[s,k],{clamp:!1}),s=0,k=100);const q=O(Object.assign(Object.assign({},b),{from:s,to:k}));function ne(){A++,c==="reverse"?(F=A%2===0,l=RF(l,x,u,F)):(l=Oh(l,x,u),c==="mirror"&&q.flipTarget()),C=!1,h&&h()}function ue(){w.stop(),f&&f()}function Q(ve){if(F||(ve=-ve),l+=ve,!C){const be=q.next(Math.max(0,l));S=be.value,U&&(S=U(S)),C=F?be.done:l<=0}y==null||y(S),C&&(A===0&&(x??(x=l)),A<a?NF(l,x,u,F)&&ne():ue())}function me(){d==null||d(),w=i(Q),w.start()}return r&&me(),{stop:()=>{p==null||p(),w.stop()}}}function Ph(e,t){return t?e*(1e3/t):0}function jF({from:e=0,velocity:t=0,min:n,max:s,power:r=.8,timeConstant:i=750,bounceStiffness:l=500,bounceDamping:a=10,restDelta:c=1,modifyTarget:u,driver:d,onUpdate:p,onComplete:f,onStop:h}){let y;function b(x){return n!==void 0&&x<n||s!==void 0&&x>s}function k(x){return n===void 0?s:s===void 0||Math.abs(n-x)<Math.abs(s-x)?n:s}function w(x){y==null||y.stop(),y=Ih(Object.assign(Object.assign({},x),{driver:d,onUpdate:S=>{var C;p==null||p(S),(C=x.onUpdate)===null||C===void 0||C.call(x,S)},onComplete:f,onStop:h}))}function A(x){w(Object.assign({type:"spring",stiffness:l,damping:a,restDelta:c},x))}if(b(e))A({from:e,velocity:t,to:k(e)});else{let x=r*t+e;typeof u<"u"&&(x=u(x));const S=k(x),C=S===n?-1:1;let F,U;const O=q=>{F=U,U=q,t=Ph(q-F,dh().delta),(C===1&&q>S||C===-1&&q<S)&&A({from:q,to:S,velocity:t})};w({type:"decay",from:e,velocity:t,timeConstant:i,power:r,restDelta:c,modifyTarget:u,onUpdate:b(x)?O:void 0})}return{stop:()=>y==null?void 0:y.stop()}}const Uh=(e,t)=>1-3*t+3*e,Mh=(e,t)=>3*t-6*e,Lh=e=>3*e,Xr=(e,t,n)=>((Uh(t,n)*e+Mh(t,n))*e+Lh(t))*e,Rh=(e,t,n)=>3*Uh(t,n)*e*e+2*Mh(t,n)*e+Lh(t),WF=1e-7,HF=10;function VF(e,t,n,s,r){let i,l,a=0;do l=t+(n-t)/2,i=Xr(l,s,r)-e,i>0?n=l:t=l;while(Math.abs(i)>WF&&++a<HF);return l}const zF=8,KF=.001;function GF(e,t,n,s){for(let r=0;r<zF;++r){const i=Rh(t,n,s);if(i===0)return t;const l=Xr(t,n,s)-e;t-=l/i}return t}const Fr=11,_r=1/(Fr-1);function YF(e,t,n,s){if(e===t&&n===s)return Fh;const r=new Float32Array(Fr);for(let l=0;l<Fr;++l)r[l]=Xr(l*_r,e,n);function i(l){let a=0,c=1;const u=Fr-1;for(;c!==u&&r[c]<=l;++c)a+=_r;--c;const d=(l-r[c])/(r[c+1]-r[c]),p=a+d*_r,f=Rh(p,e,n);return f>=KF?GF(l,p,e,n):f===0?p:VF(l,a,a+_r,e,n)}return l=>l===0||l===1?l:Xr(i(l),t,s)}const Yi={};class QF{constructor(){this.subscriptions=new Set}add(t){return this.subscriptions.add(t),()=>this.subscriptions.delete(t)}notify(t,n,s){if(this.subscriptions.size)for(const r of this.subscriptions)r(t,n,s)}clear(){this.subscriptions.clear()}}function nd(e){return!isNaN(parseFloat(e))}class ZF{constructor(t){this.timeDelta=0,this.lastUpdated=0,this.updateSubscribers=new QF,this.canTrackVelocity=!1,this.updateAndNotify=n=>{this.prev=this.current,this.current=n;const{delta:s,timestamp:r}=dh();this.lastUpdated!==r&&(this.timeDelta=s,this.lastUpdated=r),Gl.postRender(this.scheduleVelocityCheck),this.updateSubscribers.notify(this.current)},this.scheduleVelocityCheck=()=>Gl.postRender(this.velocityCheck),this.velocityCheck=({timestamp:n})=>{this.canTrackVelocity||(this.canTrackVelocity=nd(this.current)),n!==this.lastUpdated&&(this.prev=this.current)},this.prev=this.current=t,this.canTrackVelocity=nd(this.current)}onChange(t){return this.updateSubscribers.add(t)}clearListeners(){this.updateSubscribers.clear()}set(t){this.updateAndNotify(t)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?Ph(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(t){return this.stop(),new Promise(n=>{const{stop:s}=t(n);this.stopAnimation=s}).then(()=>this.clearAnimation())}stop(){this.stopAnimation&&this.stopAnimation(),this.clearAnimation()}isAnimating(){return!!this.stopAnimation}clearAnimation(){this.stopAnimation=null}destroy(){this.updateSubscribers.clear(),this.stop()}}function JF(e){return new ZF(e)}const{isArray:XF}=Array;function e$(){const e=Y({}),t=s=>{const r=i=>{e.value[i]&&(e.value[i].stop(),e.value[i].destroy(),delete e.value[i])};s?XF(s)?s.forEach(r):r(s):Object.keys(e.value).forEach(r)},n=(s,r,i)=>{if(e.value[s])return e.value[s];const l=JF(r);return l.onChange(a=>i[s]=a),e.value[s]=l,l};return X1(t),{motionValues:e,get:n,stop:t}}function t$(e){return Array.isArray(e)}function Xn(){return{type:"spring",stiffness:500,damping:25,restDelta:.5,restSpeed:10}}function Qi(e){return{type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restDelta:.01,restSpeed:10}}function n$(e){return{type:"spring",stiffness:550,damping:e===0?100:30,restDelta:.01,restSpeed:10}}function Zi(){return{type:"keyframes",ease:"linear",duration:300}}function s$(e){return{type:"keyframes",duration:800,values:e}}const sd={default:n$,x:Xn,y:Xn,z:Xn,rotate:Xn,rotateX:Xn,rotateY:Xn,rotateZ:Xn,scaleX:Qi,scaleY:Qi,scale:Qi,backgroundColor:Zi,color:Zi,opacity:Zi};function Nh(e,t){let n;return t$(t)?n=s$:n=sd[e]||sd.default,{to:t,...n(t)}}const od={...er,transform:Math.round},qh={color:vt,backgroundColor:vt,outlineColor:vt,fill:vt,stroke:vt,borderColor:vt,borderTopColor:vt,borderRightColor:vt,borderBottomColor:vt,borderLeftColor:vt,borderWidth:_e,borderTopWidth:_e,borderRightWidth:_e,borderBottomWidth:_e,borderLeftWidth:_e,borderRadius:_e,radius:_e,borderTopLeftRadius:_e,borderTopRightRadius:_e,borderBottomRightRadius:_e,borderBottomLeftRadius:_e,width:_e,maxWidth:_e,height:_e,maxHeight:_e,size:_e,top:_e,right:_e,bottom:_e,left:_e,padding:_e,paddingTop:_e,paddingRight:_e,paddingBottom:_e,paddingLeft:_e,margin:_e,marginTop:_e,marginRight:_e,marginBottom:_e,marginLeft:_e,rotate:Jn,rotateX:Jn,rotateY:Jn,rotateZ:Jn,scale:vr,scaleX:vr,scaleY:vr,scaleZ:vr,skew:Jn,skewX:Jn,skewY:Jn,distance:_e,translateX:_e,translateY:_e,translateZ:_e,x:_e,y:_e,z:_e,perspective:_e,transformPerspective:_e,opacity:Co,originX:Qu,originY:Qu,originZ:_e,zIndex:od,filter:Xl,WebkitFilter:Xl,fillOpacity:Co,strokeOpacity:Co,numOctaves:od},Ya=e=>qh[e];function jh(e,t){return t&&typeof e=="number"&&t.transform?t.transform(e):e}function o$(e,t){let n=Ya(e);return n!==Xl&&(n=tr),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const r$={linear:Fh,easeIn:Ka,easeInOut:$h,easeOut:AF,circIn:Bh,circInOut:SF,circOut:Dh,backIn:Ga,backInOut:EF,backOut:CF,anticipate:TF,bounceIn:DF,bounceInOut:OF,bounceOut:Jr};function rd(e){if(Array.isArray(e)){const[t,n,s,r]=e;return YF(t,n,s,r)}else if(typeof e=="string")return r$[e];return e}function i$(e){return Array.isArray(e)&&typeof e[0]!="number"}function id(e,t){return e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&tr.test(t)&&!t.startsWith("url("))}function l$(e){return Array.isArray(e.to)&&e.to[0]===null&&(e.to=[...e.to],e.to[0]=e.from),e}function a$({ease:e,times:t,delay:n,...s}){const r={...s};return t&&(r.offset=t),e&&(r.ease=i$(e)?e.map(rd):rd(e)),n&&(r.elapsed=-n),r}function c$(e,t,n){return Array.isArray(t.to)&&(e.duration||(e.duration=800)),l$(t),u$(e)||(e={...e,...Nh(n,t.to)}),{...t,...a$(e)}}function u$({delay:e,repeat:t,repeatType:n,repeatDelay:s,from:r,...i}){return!!Object.keys(i).length}function d$(e,t){return e[t]||e.default||e}function p$(e,t,n,s,r){const i=d$(s,e);let l=i.from===null||i.from===void 0?t.get():i.from;const a=id(e,n);l==="none"&&a&&typeof n=="string"&&(l=o$(e,n));const c=id(e,l);function u(p){const f={from:l,to:n,velocity:s.velocity?s.velocity:t.getVelocity(),onUpdate:h=>t.set(h)};return i.type==="inertia"||i.type==="decay"?jF({...f,...i}):Ih({...c$(i,f,e),onUpdate:h=>{f.onUpdate(h),i.onUpdate&&i.onUpdate(h)},onComplete:()=>{s.onComplete&&s.onComplete(),r&&r(),p&&p()}})}function d(p){return t.set(n),s.onComplete&&s.onComplete(),r&&r(),p&&p(),{stop:()=>{}}}return!c||!a||i.type===!1?d:u}function f$(){const{motionValues:e,stop:t,get:n}=e$();return{motionValues:e,stop:t,push:(r,i,l,a={},c)=>{const u=l[r],d=n(r,u,l);if(a&&a.immediate){d.set(i);return}const p=p$(r,d,i,a,c);d.start(p)}}}function h$(e,t={},{motionValues:n,push:s,stop:r}=f$()){const i=B(t),l=Y(!1);ge(n,p=>{l.value=Object.values(p).filter(f=>f.isAnimating()).length>0},{immediate:!0,deep:!0});const a=p=>{if(!i||!i[p])throw new Error(`The variant ${p} does not exist.`);return i[p]},c=p=>(typeof p=="string"&&(p=a(p)),Promise.all(Object.entries(p).map(([f,h])=>{if(f!=="transition")return new Promise(y=>s(f,h,e,p.transition||Nh(f,p[f]),y))}).filter(Boolean)));return{isAnimating:l,apply:c,set:p=>{const f=kl(p)?p:a(p);Object.entries(f).forEach(([h,y])=>{h!=="transition"&&s(h,y,e,{immediate:!0})})},leave:async p=>{let f;if(i&&(i.leave&&(f=i.leave),!i.leave&&i.initial&&(f=i.initial)),!f){p();return}await c(f),p()},stop:r}}const Qa=typeof window<"u",m$=()=>Qa&&window.onpointerdown===null,y$=()=>Qa&&window.ontouchstart===null,g$=()=>Qa&&window.onmousedown===null;function v$({target:e,state:t,variants:n,apply:s}){const r=B(n),i=Y(!1),l=Y(!1),a=Y(!1),c=D(()=>{let d=[];return r&&(r.hovered&&(d=[...d,...Object.keys(r.hovered)]),r.tapped&&(d=[...d,...Object.keys(r.tapped)]),r.focused&&(d=[...d,...Object.keys(r.focused)])),d}),u=D(()=>{const d={};Object.assign(d,t.value),i.value&&r.hovered&&Object.assign(d,r.hovered),l.value&&r.tapped&&Object.assign(d,r.tapped),a.value&&r.focused&&Object.assign(d,r.focused);for(const p in d)c.value.includes(p)||delete d[p];return d});r.hovered&&(xe(e,"mouseenter",()=>i.value=!0),xe(e,"mouseleave",()=>{i.value=!1,l.value=!1}),xe(e,"mouseout",()=>{i.value=!1,l.value=!1})),r.tapped&&(g$()&&(xe(e,"mousedown",()=>l.value=!0),xe(e,"mouseup",()=>l.value=!1)),m$()&&(xe(e,"pointerdown",()=>l.value=!0),xe(e,"pointerup",()=>l.value=!1)),y$()&&(xe(e,"touchstart",()=>l.value=!0),xe(e,"touchend",()=>l.value=!1))),r.focused&&(xe(e,"focus",()=>a.value=!0),xe(e,"blur",()=>a.value=!1)),ge(u,s)}function _$({set:e,target:t,variants:n,variant:s}){const r=B(n);ge(()=>t,()=>{r&&(r.initial&&e("initial"),r.enter&&(s.value="enter"))},{immediate:!0,flush:"pre"})}function b$({state:e,apply:t}){ge(e,n=>{n&&t(n)},{immediate:!0})}function x$({target:e,variants:t,variant:n}){const s=B(t);s&&(s.visible||s.visibleOnce)&&zv(e,([{isIntersecting:r}])=>{s.visible?r?n.value="visible":n.value="initial":s.visibleOnce&&(r&&n.value!=="visibleOnce"?n.value="visibleOnce":n.value||(n.value="initial"))})}function w$(e,t={syncVariants:!0,lifeCycleHooks:!0,visibilityHooks:!0,eventListeners:!0}){t.lifeCycleHooks&&_$(e),t.syncVariants&&b$(e),t.visibilityHooks&&x$(e),t.eventListeners&&v$(e)}function Wh(e={}){const t=We({...e}),n=Y({});return ge(t,()=>{const s={};for(const[r,i]of Object.entries(t)){const l=Ya(r),a=jh(i,l);s[r]=a}n.value=s},{immediate:!0,deep:!0}),{state:t,style:n}}function Za(e,t){ge(()=>it(e),n=>{n&&t(n)},{immediate:!0})}const k$={x:"translateX",y:"translateY",z:"translateZ"};function Hh(e={},t=!0){const n=We({...e}),s=Y("");return ge(n,r=>{let i="",l=!1;if(t&&(r.x||r.y||r.z)){const a=[r.x||0,r.y||0,r.z||0].map(_e.transform).join(",");i+=`translate3d(${a}) `,l=!0}for(const[a,c]of Object.entries(r)){if(t&&(a==="x"||a==="y"||a==="z"))continue;const u=Ya(a),d=jh(c,u);i+=`${k$[a]||a}(${d}) `}t&&!l&&(i+="translateZ(0px) "),s.value=i.trim()},{immediate:!0,deep:!0}),{state:n,transform:s}}const A$=["","X","Y","Z"],S$=["perspective","translate","scale","rotate","skew"],Vh=["transformPerspective","x","y","z"];S$.forEach(e=>{A$.forEach(t=>{const n=e+t;Vh.push(n)})});const C$=new Set(Vh);function Ja(e){return C$.has(e)}const E$=new Set(["originX","originY","originZ"]);function zh(e){return E$.has(e)}function T$(e){const t={},n={};return Object.entries(e).forEach(([s,r])=>{Ja(s)||zh(s)?t[s]=r:n[s]=r}),{transform:t,style:n}}function Kh(e){const{transform:t,style:n}=T$(e),{transform:s}=Hh(t),{style:r}=Wh(n);return s.value&&(r.value.transform=s.value),r.value}function F$(e,t){let n,s;const{state:r,style:i}=Wh();return Za(e,l=>{s=l;for(const a of Object.keys(qh))l.style[a]===null||l.style[a]===""||Ja(a)||zh(a)||(r[a]=l.style[a]);n&&Object.entries(n).forEach(([a,c])=>l.style[a]=c),t&&t(r)}),ge(i,l=>{if(!s){n=l;return}for(const a in l)s.style[a]=l[a]},{immediate:!0}),{style:r}}function $$(e){const t=e.trim().split(/\) |\)/);if(t.length===1)return{};const n=s=>s.endsWith("px")||s.endsWith("deg")?parseFloat(s):isNaN(Number(s))?Number(s):s;return t.reduce((s,r)=>{if(!r)return s;const[i,l]=r.split("("),c=l.split(",").map(d=>n(d.endsWith(")")?d.replace(")",""):d.trim())),u=c.length===1?c[0]:c;return{...s,[i]:u}},{})}function B$(e,t){Object.entries($$(t)).forEach(([n,s])=>{const r=["x","y","z"];if(n==="translate3d"){if(s===0){r.forEach(i=>e[i]=0);return}s.forEach((i,l)=>e[r[l]]=i);return}if(s=parseFloat(s),n==="translateX"){e.x=s;return}if(n==="translateY"){e.y=s;return}if(n==="translateZ"){e.z=s;return}e[n]=s})}function D$(e,t){let n,s;const{state:r,transform:i}=Hh();return Za(e,l=>{s=l,l.style.transform&&B$(r,l.style.transform),n&&(l.style.transform=n),t&&t(r)}),ge(i,l=>{if(!s){n=l;return}s.style.transform=l},{immediate:!0}),{transform:r}}function O$(e,t){const n=We({}),s=l=>Object.entries(l).forEach(([a,c])=>n[a]=c),{style:r}=F$(e,s),{transform:i}=D$(e,s);return ge(n,l=>{Object.entries(l).forEach(([a,c])=>{const u=Ja(a)?i:r;u[a]&&u[a]===c||(u[a]=c)})},{immediate:!0,deep:!0}),Za(e,()=>t&&s(t)),{motionProperties:n,style:r,transform:i}}function I$(e={}){const t=B(e),n=Y();return{state:D(()=>{if(n.value)return t[n.value]}),variant:n}}function Gh(e,t={},n){const{motionProperties:s}=O$(e),{variant:r,state:i}=I$(t),l=h$(s,t),a={target:e,variant:r,variants:t,state:i,motionProperties:s,...l};return w$(a,n),a}const P$=["initial","enter","leave","visible","visible-once","hovered","tapped","focused","delay"];function U$(e,t){const n=e.props?e.props:e.data&&e.data.attrs?e.data.attrs:{};n&&(n.variants&&kl(n.variants)&&(t.value={...t.value,...n.variants}),P$.forEach(s=>{if(s==="delay"){if(n&&n[s]&&typeof n[s]=="number"){const r=n[s];t&&t.value&&(t.value.enter&&(t.value.enter.transition||(t.value.enter.transition={}),t.value.enter.transition={delay:r,...t.value.enter.transition}),t.value.visible&&(t.value.visible.transition||(t.value.visible.transition={}),t.value.visible.transition={delay:r,...t.value.visible.transition}),t.value.visibleOnce&&(t.value.visibleOnce.transition||(t.value.visibleOnce.transition={}),t.value.visibleOnce.transition={delay:r,...t.value.visibleOnce.transition}))}return}s==="visible-once"&&(s="visibleOnce"),n&&n[s]&&kl(n[s])&&(t.value[s]=n[s])}))}function Ji(e){return{created:(n,s,r)=>{const i=s.value&&typeof s.value=="string"?s.value:r.key;i&&Yi[i]&&Yi[i].stop();const l=Y(e||{});typeof s.value=="object"&&(l.value=s.value),U$(r,l);const a=Gh(n,l);n.motionInstance=a,i&&(Yi[i]=a)},getSSRProps(n,s){let{initial:r}=n.value||s&&(s==null?void 0:s.props)||{};r=B(r);const i=LT((e==null?void 0:e.initial)||{},r||{});return!i||Object.keys(i).length===0?void 0:{style:Kh(i)}}}}const M$={initial:{opacity:0},enter:{opacity:1}},L$={initial:{opacity:0},visible:{opacity:1}},R$={initial:{opacity:0},visibleOnce:{opacity:1}},N$={initial:{scale:0,opacity:0},enter:{scale:1,opacity:1}},q$={initial:{scale:0,opacity:0},visible:{scale:1,opacity:1}},j$={initial:{scale:0,opacity:0},visibleOnce:{scale:1,opacity:1}},W$={initial:{x:-100,rotate:90,opacity:0},enter:{x:0,rotate:0,opacity:1}},H$={initial:{x:-100,rotate:90,opacity:0},visible:{x:0,rotate:0,opacity:1}},V$={initial:{x:-100,rotate:90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},z$={initial:{x:100,rotate:-90,opacity:0},enter:{x:0,rotate:0,opacity:1}},K$={initial:{x:100,rotate:-90,opacity:0},visible:{x:0,rotate:0,opacity:1}},G$={initial:{x:100,rotate:-90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},Y$={initial:{y:-100,rotate:-90,opacity:0},enter:{y:0,rotate:0,opacity:1}},Q$={initial:{y:-100,rotate:-90,opacity:0},visible:{y:0,rotate:0,opacity:1}},Z$={initial:{y:-100,rotate:-90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},J$={initial:{y:100,rotate:90,opacity:0},enter:{y:0,rotate:0,opacity:1}},X$={initial:{y:100,rotate:90,opacity:0},visible:{y:0,rotate:0,opacity:1}},eB={initial:{y:100,rotate:90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},tB={initial:{x:-100,opacity:0},enter:{x:0,opacity:1}},nB={initial:{x:-100,opacity:0},visible:{x:0,opacity:1}},sB={initial:{x:-100,opacity:0},visibleOnce:{x:0,opacity:1}},oB={initial:{x:100,opacity:0},enter:{x:0,opacity:1}},rB={initial:{x:100,opacity:0},visible:{x:0,opacity:1}},iB={initial:{x:100,opacity:0},visibleOnce:{x:0,opacity:1}},lB={initial:{y:-100,opacity:0},enter:{y:0,opacity:1}},aB={initial:{y:-100,opacity:0},visible:{y:0,opacity:1}},cB={initial:{y:-100,opacity:0},visibleOnce:{y:0,opacity:1}},uB={initial:{y:100,opacity:0},enter:{y:0,opacity:1}},dB={initial:{y:100,opacity:0},visible:{y:0,opacity:1}},pB={initial:{y:100,opacity:0},visibleOnce:{y:0,opacity:1}},ea={__proto__:null,fade:M$,fadeVisible:L$,fadeVisibleOnce:R$,pop:N$,popVisible:q$,popVisibleOnce:j$,rollBottom:J$,rollLeft:W$,rollRight:z$,rollTop:Y$,rollVisibleBottom:X$,rollVisibleLeft:H$,rollVisibleOnceBottom:eB,rollVisibleOnceLeft:V$,rollVisibleOnceRight:G$,rollVisibleOnceTop:Z$,rollVisibleRight:K$,rollVisibleTop:Q$,slideBottom:uB,slideLeft:tB,slideRight:oB,slideTop:lB,slideVisibleBottom:dB,slideVisibleLeft:nB,slideVisibleOnceBottom:pB,slideVisibleOnceLeft:sB,slideVisibleOnceRight:iB,slideVisibleOnceTop:cB,slideVisibleRight:rB,slideVisibleTop:aB},fB=ke({props:{is:{type:[String,Object],required:!1},preset:{type:String,required:!1},instance:{type:Object,required:!1},variants:{type:Object,required:!1},initial:{type:Object,required:!1},enter:{type:Object,required:!1},leave:{type:Object,required:!1},visible:{type:Object,required:!1},visibleOnce:{type:Object,required:!1},hovered:{type:Object,required:!1},tapped:{type:Object,required:!1},focused:{type:Object,required:!1},delay:{type:[Number,String],required:!1}},setup(e){var a;const t=K0(),n=We({});if(!e.is&&!t.default)return()=>Je("div",{});const s=D(()=>{let c;return e.preset&&(c=ea[e.preset]),c}),r=D(()=>({initial:e.initial,enter:e.enter,leave:e.leave,visible:e.visible,visibleOnce:e.visibleOnce,hovered:e.hovered,tapped:e.tapped,focused:e.focused})),i=D(()=>{const c={...r.value,...s.value||{},...e.variants||{}};return e.delay&&(c.enter.transition={...c.enter.transition},c.enter.transition.delay=parseInt(e.delay)),c}),l=D(()=>{if(!e.is)return;let c=e.is;return typeof l.value=="string"&&!Sd(c)&&(c=qs(c)),c});if(((a=process==null?void 0:process.env)==null?void 0:a.NODE_ENV)==="development"||process!=null&&process.dev){const c=u=>{var d;(d=u.variants)!=null&&d.initial&&u.set("initial"),setTimeout(()=>{var p,f,h;(p=u.variants)!=null&&p.enter&&u.apply("enter"),(f=u.variants)!=null&&f.visible&&u.apply("visible"),(h=u.variants)!=null&&h.visibleOnce&&u.apply("visibleOnce")},10)};pi(()=>Object.entries(n).forEach(([u,d])=>c(d)))}return{slots:t,component:l,motionConfig:i,instances:n}},render({slots:e,motionConfig:t,instances:n,component:s}){var a;const r=Kh(t.initial||{}),i=(c,u)=>(c.props||(c.props={}),c.props.style=r,c.props.onVnodeMounted=({el:d})=>{const p=Gh(d,t);n[u]=p},c);if(s){const c=Je(s,void 0,e);return i(c,0),c}return(((a=e.default)==null?void 0:a.call(e))||[]).map((c,u)=>i(c,u))}});function hB(e){const t="àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;",n="aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------",s=new RegExp(t.split("").join("|"),"g");return e.toString().replace(/[A-Z]/g,r=>`-${r}`).toLowerCase().replace(/\s+/g,"-").replace(s,r=>n.charAt(t.indexOf(r))).replace(/&/g,"-and-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}const mB={install(e,t){if(e.directive("motion",Ji()),e.component("Motion",fB),!t||t&&!t.excludePresets)for(const n in ea){const s=ea[n];e.directive(`motion-${hB(n)}`,Ji(s))}if(t&&t.directives)for(const n in t.directives){const s=t.directives[n];s.initial,e.directive(`motion-${n}`,Ji(s))}}};var ld;const To=typeof window<"u",yB=Object.prototype.toString,gB=e=>yB.call(e)==="[object Object]";To&&((ld=window==null?void 0:window.navigator)!=null&&ld.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function vB(e){return ia()?(Fd(e),!0):!1}function _B(e){var t;const n=B(e);return(t=n==null?void 0:n.$el)!=null?t:n}const bB=To?window:void 0,ad=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},cd="__vueuse_ssr_handlers__";ad[cd]=ad[cd]||{};function xB(e,t={}){const{immediate:n=!0,window:s=bB}=t,r=Y(!1);let i=null;function l(){!r.value||!s||(e(),i=s.requestAnimationFrame(l))}function a(){!r.value&&s&&(r.value=!0,l())}function c(){r.value=!1,i!=null&&s&&(s.cancelAnimationFrame(i),i=null)}return n&&a(),vB(c),{isActive:r,pause:c,resume:a}}var ud;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(ud||(ud={}));const xi="vue-starport-injection",Yh="vue-starport-options",wB={duration:800,easing:"cubic-bezier(0.45, 0, 0.55, 1)",keepAlive:!1},Qh={port:{type:String,required:!0},duration:{type:Number,required:!1},easing:{type:String,required:!1},keepAlive:{type:Boolean,required:!1,default:void 0},mountedProps:{type:Object,required:!1},initialProps:{type:Object,required:!1}};var kB=Object.defineProperty,ei=Object.getOwnPropertySymbols,Zh=Object.prototype.hasOwnProperty,Jh=Object.prototype.propertyIsEnumerable,dd=(e,t,n)=>t in e?kB(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,AB=(e,t)=>{for(var n in t||(t={}))Zh.call(t,n)&&dd(e,n,t[n]);if(ei)for(var n of ei(t))Jh.call(t,n)&&dd(e,n,t[n]);return e},pd=(e,t)=>{var n={};for(var s in e)Zh.call(e,s)&&t.indexOf(s)<0&&(n[s]=e[s]);if(e!=null&&ei)for(var s of ei(e))t.indexOf(s)<0&&Jh.call(e,s)&&(n[s]=e[s]);return n};const SB=ke({name:"StarportProxy",props:AB({props:{type:Object,default:()=>({})},component:{type:Object,required:!0}},Qh),setup(e,t){const n=L(xi),s=D(()=>n.getInstance(e.port,e.component)),r=Y(),i=s.value.generateId(),l=Y(!1);return s.value.isVisible||(s.value.land(),l.value=!0),zn(async()=>{if(s.value.el){console.error(`[Vue Starport] Multiple proxies of "${s.value.componentName}" with port "${e.port}" detected. The later one will be ignored.`);return}if(s.value.el=r.value,await rt(),l.value=!0,s.value.rect.update(),s.value.rect.width===0||s.value.rect.height===0){const a=s.value.rect.width===0?"width":"height";console.warn(`[Vue Starport] The proxy of component "${s.value.componentName}" (port "${e.port}") has no ${a} on initial render, have you set the size for it?`),console.warn("element:",s.value.el),console.warn("rect:",s.value.rect)}}),Yo(async()=>{s.value.rect.update(),s.value.liftOff(),s.value.el=void 0,l.value=!1,!s.value.options.keepAlive&&(await rt(),await rt(),!s.value.el&&n.dispose(s.value.port))}),ge(()=>e,async()=>{s.value.props&&await rt();const a=e,{props:c}=a,u=pd(a,["props"]);s.value.props=c||{},s.value.setLocalOptions(u)},{deep:!0,immediate:!0}),()=>{const a=e,{initialProps:c,mountedProps:u}=a,d=pd(a,["initialProps","mountedProps"]),p=mt(d,(l.value?u:c)||{});return Je("div",mt(p,{id:i,ref:r,"data-starport-proxy":s.value.componentId,"data-starport-landed":s.value.isLanded?"true":void 0,"data-starport-floating":s.value.isLanded?void 0:"true"}),t.slots.default?Je(t.slots.default):void 0)}}});var CB=Object.defineProperty,EB=Object.defineProperties,TB=Object.getOwnPropertyDescriptors,fd=Object.getOwnPropertySymbols,FB=Object.prototype.hasOwnProperty,$B=Object.prototype.propertyIsEnumerable,hd=(e,t,n)=>t in e?CB(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,BB=(e,t)=>{for(var n in t||(t={}))FB.call(t,n)&&hd(e,n,t[n]);if(fd)for(var n of fd(t))$B.call(t,n)&&hd(e,n,t[n]);return e},DB=(e,t)=>EB(e,TB(t));const OB=ke({name:"Starport",inheritAttrs:!0,props:Qh,setup(e,t){const n=Y(!1);return zn(()=>{if(n.value=!0,!L(xi))throw new Error("[Vue Starport] Failed to find the carrier, all Starport components must be wrapped in a <StarportCarrier> component.")}),()=>{var l,a;const s=(a=(l=t.slots).default)==null?void 0:a.call(l);if(!s)throw new Error("[Vue Starport] Slot is required to use <Starport>");if(s.length!==1)throw new Error(`[Vue Starport] <Starport> requires exactly one slot, but got ${s.length}`);const r=s[0];let i=r.type;return(!gB(i)||cn(i))&&(i={render(){return s}}),Je(SB,DB(BB({},e),{key:e.port,component:ii(i),props:r.props}))}}});function IB(e){const t=We({height:0,width:0,left:0,top:0,update:s,listen:i,pause:l,margin:"0px",padding:"0px"}),n=To?document.documentElement||document.body:void 0;function s(){if(!To)return;const a=_B(e);if(!a)return;const{height:c,width:u,left:d,top:p}=a.getBoundingClientRect(),f=window.getComputedStyle(a),h=f.margin,y=f.padding;Object.assign(t,{height:c,width:u,left:d,top:n.scrollTop+p,margin:h,padding:y})}const r=xB(s,{immediate:!1});function i(){To&&(s(),r.resume())}function l(){r.pause()}return t}let PB=(e,t=21)=>(n=t)=>{let s="",r=n;for(;r--;)s+=e[Math.random()*e.length|0];return s};const md=PB("abcdefghijklmnopqrstuvwxyz",5);function yd(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase().replace(/[^\w\d_-]/g,"")}function UB(e){var t;return e.name||((t=e.__file)==null?void 0:t.split(/[\/\\.]/).slice(-2)[0])||""}var MB=Object.defineProperty,gd=Object.getOwnPropertySymbols,LB=Object.prototype.hasOwnProperty,RB=Object.prototype.propertyIsEnumerable,vd=(e,t,n)=>t in e?MB(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Xi=(e,t)=>{for(var n in t||(t={}))LB.call(t,n)&&vd(e,n,t[n]);if(gd)for(var n of gd(t))RB.call(t,n)&&vd(e,n,t[n]);return e};function NB(e,t,n={}){const s=UB(t),r=yd(s)||md(),i=Y(),l=Y(null),a=Y(!1),c=Y(!1),u=ym(!0),d=Y({}),p=D(()=>Xi(Xi(Xi({},wB),n),d.value)),f=Y(0);let h;u.run(()=>{h=IB(i),ge(i,async w=>{w&&(c.value=!0),await rt(),i.value||(c.value=!1)})});const y=yd(e);function b(){return`starport-${r}-${y}-${md()}`}const k=b();return We({el:i,id:k,port:e,props:l,rect:h,scope:u,isLanded:a,isVisible:c,options:p,liftOffTime:f,component:t,componentName:s,componentId:r,generateId:b,setLocalOptions(w={}){d.value=JSON.parse(JSON.stringify(w))},elRef(){return i},liftOff(){a.value&&(a.value=!1,f.value=Date.now(),h.listen())},land(){a.value||(a.value=!0,h.pause())}})}function qB(e){const t=We(new Map);function n(r,i){let l=t.get(r);return l||(l=NB(r,i,e),t.set(r,l)),l.component=i,l}function s(r){var i;(i=t.get(r))==null||i.scope.stop(),t.delete(r)}return{portMap:t,dispose:s,getInstance:n}}var jB=Object.defineProperty,WB=Object.defineProperties,HB=Object.getOwnPropertyDescriptors,_d=Object.getOwnPropertySymbols,VB=Object.prototype.hasOwnProperty,zB=Object.prototype.propertyIsEnumerable,bd=(e,t,n)=>t in e?jB(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,KB=(e,t)=>{for(var n in t||(t={}))VB.call(t,n)&&bd(e,n,t[n]);if(_d)for(var n of _d(t))zB.call(t,n)&&bd(e,n,t[n]);return e},GB=(e,t)=>WB(e,HB(t));const YB=ke({name:"StarportCraft",props:{port:{type:String,required:!0},component:{type:Object,required:!0}},setup(e){const t=L(xi);if(!t)throw new Error("[Vue Starport] Failed to find the carrier, all Starport components must be wrapped in a <StarportCarrier> component.");const n=D(()=>t.getInstance(e.port,e.component)),s=D(()=>{var l;return((l=n.value.el)==null?void 0:l.id)||n.value.id}),r=D(()=>{const l=Date.now()-n.value.liftOffTime,a=Math.max(0,n.value.options.duration-l),c=n.value.rect,u={position:"absolute",left:0,top:0,width:`${c.width}px`,height:`${c.height}px`,margin:c.margin,padding:c.padding,transform:`translate3d(${c.left}px,${c.top}px,0px)`};return!n.value.isVisible||!n.value.el?GB(KB({},u),{zIndex:-1,display:"none"}):(n.value.isLanded?u.display="none":Object.assign(u,{transitionProperty:"all",transitionDuration:`${a}ms`,transitionTimingFunction:n.value.options.easing}),u)}),i={onTransitionend(l){n.value.isLanded||console.warn(`[Vue Starport] Transition duration of component "${n.value.componentName}" is too short (${l.elapsedTime}s) that may cause animation glitches. Try to increase the duration of that component, or decrease the duration the Starport (current: ${n.value.options.duration/1e3}s).`)}};return()=>{const l=!!(n.value.isLanded&&n.value.el);return Je("div",{style:r.value,"data-starport-craft":n.value.componentId,"data-starport-landed":n.value.isLanded?"true":void 0,"data-starport-floating":n.value.isLanded?void 0:"true",onTransitionend:n.value.land},Je(xy,{to:l?`#${s.value}`:"body",disabled:!l},Je(n.value.component,mt(i,n.value.props))))}}}),QB=ke({name:"StarportCarrier",setup(e,{slots:t}){const n=qB(L(Yh,{}));return Bt().appContext.app.provide(xi,n),()=>{var r;return[(r=t.default)==null?void 0:r.call(t),Array.from(n.portMap.entries()).map(([i,{component:l}])=>Je(YB,{key:i,port:i,component:l}))]}}});function ZB(e={}){return{install(t){t.provide(Yh,e),t.component("Starport",OB),t.component("StarportCarrier",QB)}}}function JB(e){function t(){document.documentElement.style.setProperty("--vh",`${window.innerHeight*.01}px`)}t(),window.addEventListener("resize",t),e.app.use(mB),e.app.use(ZB({keepAlive:!0}))}function kt(e,t,n){var s;return((s=e.instance)==null?void 0:s.$).provides[t]??n}function XB(){return{install(e){e.directive("click",{name:"v-click",mounted(t,n){var d,p,f,h,y,b;if(Ao.value||(d=kt(n,bo))!=null&&d.value)return;const s=kt(n,rs),r=kt(n,_o),i=kt(n,xl),l=n.modifiers.hide!==!1&&n.modifiers.hide!=null,a=n.modifiers.fade!==!1&&n.modifiers.fade!=null,c=((p=s==null?void 0:s.value)==null?void 0:p.length)||0,u=a?y1:Oi;if(s&&!((f=s==null?void 0:s.value)!=null&&f.includes(t))&&s.value.push(t),n.value==null&&(n.value=(h=s==null?void 0:s.value)==null?void 0:h.length),typeof n.value=="string"&&(n.value.startsWith("+")||n.value.startsWith("-"))&&(n.value=(((y=s==null?void 0:s.value)==null?void 0:y.length)||0)+Number(n.value)),!(i!=null&&i.value.has(n.value)))i==null||i.value.set(n.value,[t]);else if(!((b=i==null?void 0:i.value.get(n.value))!=null&&b.includes(t))){const k=(i==null?void 0:i.value.get(n.value))||[];i==null||i.value.set(n.value,[t].concat(k))}t==null||t.classList.toggle(ts,!0),r&&ge(r,()=>{const k=(r==null?void 0:r.value)??0,w=n.value!=null?k>=n.value:k>c;t.classList.contains(Ii)||t.classList.toggle(u,!w),l!==!1&&l!==void 0&&t.classList.toggle(u,w),t.classList.toggle(to,!1);const A=i==null?void 0:i.value.get(k);A==null||A.forEach((x,S)=>{x.classList.toggle(pr,!1),S===A.length-1?x.classList.toggle(to,!0):x.classList.toggle(pr,!0)}),t.classList.contains(to)||t.classList.toggle(pr,w)},{immediate:!0})},unmounted(t,n){t==null||t.classList.toggle(ts,!1);const s=kt(n,rs);s!=null&&s.value&&wl(s.value,t)}}),e.directive("after",{name:"v-after",mounted(t,n){var a,c,u;if(Ao.value||(a=kt(n,bo))!=null&&a.value)return;const s=kt(n,rs),r=kt(n,_o),i=kt(n,xl),l=s==null?void 0:s.value.length;n.value==null&&(n.value=s==null?void 0:s.value.length),typeof n.value=="string"&&(n.value.startsWith("+")||n.value.startsWith("-"))&&(n.value=(((c=s==null?void 0:s.value)==null?void 0:c.length)||0)+Number(n.value)),i!=null&&i.value.has(n.value)?(u=i==null?void 0:i.value.get(n.value))==null||u.push(t):i==null||i.value.set(n.value,[t]),t==null||t.classList.toggle(ts,!0),r&&ge(r,()=>{const d=(r.value??0)>=(n.value??l??0);t.classList.contains(Ii)||t.classList.toggle(Oi,!d),t.classList.toggle(to,!1),t.classList.contains(to)||t.classList.toggle(pr,d)},{immediate:!0})},unmounted(t){t==null||t.classList.toggle(ts,!0)}}),e.directive("click-hide",{name:"v-click-hide",mounted(t,n){var l,a,c;if(Ao.value||(l=kt(n,bo))!=null&&l.value)return;const s=kt(n,rs),r=kt(n,_o),i=((a=s==null?void 0:s.value)==null?void 0:a.length)||0;s&&!((c=s==null?void 0:s.value)!=null&&c.includes(t))&&s.value.push(t),t==null||t.classList.toggle(ts,!0),r&&ge(r,()=>{const u=(r==null?void 0:r.value)??0,d=n.value!=null?u>=n.value:u>i;t.classList.toggle(Oi,d),t.classList.toggle(Ii,d)},{immediate:!0})},unmounted(t,n){t==null||t.classList.toggle(ts,!1);const s=kt(n,rs);s!=null&&s.value&&wl(s.value,t)}})}}}function e7(e,t){const n=sh(e),s=oh(t,n.currentRoute,n.currentPage);return{nav:{...n,...s},configs:Fe,themeConfigs:D(()=>Fe.themeConfig)}}function t7(){return{install(e){const t=e7(Rt,Mt);e.provide(z,We(t))}}}const Ys=_g(UT);Ys.use(xt);Ys.use(f1());Ys.use(XB());Ys.use(t7());JB({app:Ys,router:xt});Ys.mount("#app");export{L3 as $,n3 as A,Y as B,r7 as C,ft as D,Re as E,Te as F,wx as G,FT as H,Mt as I,Zr as J,AT as K,Hi as L,zn as M,We as N,s7 as O,i7 as P,ge as Q,M as R,Mf as S,$e as T,pt as U,Px as V,sp as W,op as X,Lo as Y,Ni as Z,K as _,z as a,Oa as a0,Ia as a1,O3 as a2,He as a3,Uw as a4,n7 as a5,wt as a6,ao as a7,gr as a8,us as a9,sn as aa,Il as ab,cx as ac,ux as ad,dx as ae,fx as af,Tt as ag,Rp as ah,l7 as ai,yt as aj,g8 as ak,Qp as al,hx as am,Yo as an,Yp as b,Fe as c,ke as d,t0 as e,T as f,o as g,B as h,L as i,Ge as j,bT as k,m as l,H as m,Xe as n,v as o,ye as p,Ea as q,Cs as r,Gt as s,wn as t,o7 as u,D as v,Pi as w,j as x,Ff as y,l3 as z};
