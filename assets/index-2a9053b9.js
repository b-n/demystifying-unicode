(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(o){if(o.ep)return;o.ep=!0;const r=n(o);fetch(o.href,r)}})();function Hn(e,t){const n=Object.create(null),s=e.split(",");for(let o=0;o<s.length;o++)n[s[o]]=!0;return t?o=>!!n[o.toLowerCase()]:o=>!!n[o]}const Le=Object.freeze({}),Bs=Object.freeze([]),_t=()=>{},wd=()=>!1,Xh=/^on[^a-z]/,Vo=e=>Xh.test(e),Fr=e=>e.startsWith("onUpdate:"),je=Object.assign,tl=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},em=Object.prototype.hasOwnProperty,Ae=(e,t)=>em.call(e,t),re=Array.isArray,fs=e=>zo(e)==="[object Map]",xd=e=>zo(e)==="[object Set]",tm=e=>zo(e)==="[object RegExp]",de=e=>typeof e=="function",We=e=>typeof e=="string",nl=e=>typeof e=="symbol",Oe=e=>e!==null&&typeof e=="object",sl=e=>Oe(e)&&de(e.then)&&de(e.catch),kd=Object.prototype.toString,zo=e=>kd.call(e),ol=e=>zo(e).slice(8,-1),Sd=e=>zo(e)==="[object Object]",rl=e=>We(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,br=Hn(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),nm=Hn("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"),ti=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},sm=/-(\w)/g,sn=ti(e=>e.replace(sm,(t,n)=>n?n.toUpperCase():"")),om=/\B([A-Z])/g,bn=ti(e=>e.replace(om,"-$1").toLowerCase()),bs=ti(e=>e.charAt(0).toUpperCase()+e.slice(1)),es=ti(e=>e?`on${bs(e)}`:""),To=(e,t)=>!Object.is(e,t),ns=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Or=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},rm=e=>{const t=parseFloat(e);return isNaN(t)?e:t},im=e=>{const t=We(e)?Number(e):NaN;return isNaN(t)?e:t};let nc;const Pr=()=>nc||(nc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Xe(e){if(re(e)){const t={};for(let n=0;n<e.length;n++){const s=e[n],o=We(s)?um(s):Xe(s);if(o)for(const r in o)t[r]=o[r]}return t}else{if(We(e))return e;if(Oe(e))return e}}const am=/;(?![^(]*\))/g,lm=/:([^]+)/,cm=/\/\*[^]*?\*\//g;function um(e){const t={};return e.replace(cm,"").split(am).forEach(n=>{if(n){const s=n.split(lm);s.length>1&&(t[s[0].trim()]=s[1].trim())}}),t}function Re(e){let t="";if(We(e))t=e;else if(re(e))for(let n=0;n<e.length;n++){const s=Re(e[n]);s&&(t+=s+" ")}else if(Oe(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}function ue(e){if(!e)return null;let{class:t,style:n}=e;return t&&!We(t)&&(e.class=Re(t)),n&&(e.style=Xe(n)),e}const dm="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",fm="svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view",Ad=Hn(dm),pm=Hn(fm),hm="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",mm=Hn(hm);function Ed(e){return!!e||e===""}const wn=e=>We(e)?e:e==null?"":re(e)||Oe(e)&&(e.toString===kd||!de(e.toString))?JSON.stringify(e,Td,2):String(e),Td=(e,t)=>t&&t.__v_isRef?Td(e,t.value):fs(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[s,o])=>(n[`${s} =>`]=o,n),{})}:xd(t)?{[`Set(${t.size})`]:[...t.values()]}:Oe(t)&&!re(t)&&!Sd(t)?String(t):t;function Ir(e,...t){console.warn(`[Vue warn] ${e}`,...t)}let St;class Cd{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=St,!t&&St&&(this.index=(St.scopes||(St.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=St;try{return St=this,t()}finally{St=n}}else Ir("cannot run an inactive effect scope.")}on(){St=this}off(){St=this.parent}stop(t){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const o=this.parent.scopes.pop();o&&o!==this&&(this.parent.scopes[this.index]=o,o.index=this.index)}this.parent=void 0,this._active=!1}}}function gm(e){return new Cd(e)}function ym(e,t=St){t&&t.active&&t.effects.push(e)}function il(){return St}function $d(e){St?St.cleanups.push(e):Ir("onScopeDispose() is called when there is no active effect scope to be associated with.")}const al=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Fd=e=>(e.w&jn)>0,Od=e=>(e.n&jn)>0,vm=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=jn},_m=e=>{const{deps:t}=e;if(t.length){let n=0;for(let s=0;s<t.length;s++){const o=t[s];Fd(o)&&!Od(o)?o.delete(e):t[n++]=o,o.w&=~jn,o.n&=~jn}t.length=n}},Ur=new WeakMap;let ao=0,jn=1;const ea=30;let ht;const ps=Symbol("iterate"),ta=Symbol("Map key iterate");class ll{constructor(t,n=null,s){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,ym(this,s)}run(){if(!this.active)return this.fn();let t=ht,n=In;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=ht,ht=this,In=!0,jn=1<<++ao,ao<=ea?vm(this):sc(this),this.fn()}finally{ao<=ea&&_m(this),jn=1<<--ao,ht=this.parent,In=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){ht===this?this.deferStop=!0:this.active&&(sc(this),this.onStop&&this.onStop(),this.active=!1)}}function sc(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let In=!0;const Pd=[];function xs(){Pd.push(In),In=!1}function ks(){const e=Pd.pop();In=e===void 0?!0:e}function lt(e,t,n){if(In&&ht){let s=Ur.get(e);s||Ur.set(e,s=new Map);let o=s.get(n);o||s.set(n,o=al()),Id(o,{effect:ht,target:e,type:t,key:n})}}function Id(e,t){let n=!1;ao<=ea?Od(e)||(e.n|=jn,n=!Fd(e)):n=!e.has(ht),n&&(e.add(ht),ht.deps.push(e),ht.onTrack&&ht.onTrack(je({effect:ht},t)))}function on(e,t,n,s,o,r){const a=Ur.get(e);if(!a)return;let l=[];if(t==="clear")l=[...a.values()];else if(n==="length"&&re(e)){const u=Number(s);a.forEach((d,f)=>{(f==="length"||f>=u)&&l.push(d)})}else switch(n!==void 0&&l.push(a.get(n)),t){case"add":re(e)?rl(n)&&l.push(a.get("length")):(l.push(a.get(ps)),fs(e)&&l.push(a.get(ta)));break;case"delete":re(e)||(l.push(a.get(ps)),fs(e)&&l.push(a.get(ta)));break;case"set":fs(e)&&l.push(a.get(ps));break}const c={target:e,type:t,key:n,newValue:s,oldValue:o,oldTarget:r};if(l.length===1)l[0]&&na(l[0],c);else{const u=[];for(const d of l)d&&u.push(...d);na(al(u),c)}}function na(e,t){const n=re(e)?e:[...e];for(const s of n)s.computed&&oc(s,t);for(const s of n)s.computed||oc(s,t)}function oc(e,t){(e!==ht||e.allowRecurse)&&(e.onTrigger&&e.onTrigger(je({effect:e},t)),e.scheduler?e.scheduler():e.run())}function bm(e,t){var n;return(n=Ur.get(e))==null?void 0:n.get(t)}const wm=Hn("__proto__,__v_isRef,__isVue"),Ud=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(nl)),xm=ni(),km=ni(!1,!0),Sm=ni(!0),Am=ni(!0,!0),rc=Em();function Em(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const s=he(this);for(let r=0,a=this.length;r<a;r++)lt(s,"get",r+"");const o=s[t](...n);return o===-1||o===!1?s[t](...n.map(he)):o}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){xs();const s=he(this)[t].apply(this,n);return ks(),s}}),e}function Tm(e){const t=he(this);return lt(t,"has",e),t.hasOwnProperty(e)}function ni(e=!1,t=!1){return function(s,o,r){if(o==="__v_isReactive")return!e;if(o==="__v_isReadonly")return e;if(o==="__v_isShallow")return t;if(o==="__v_raw"&&r===(e?t?Wd:jd:t?Nd:Rd).get(s))return s;const a=re(s);if(!e){if(a&&Ae(rc,o))return Reflect.get(rc,o,r);if(o==="hasOwnProperty")return Tm}const l=Reflect.get(s,o,r);return(nl(o)?Ud.has(o):wm(o))||(e||lt(s,"get",o),t)?l:Fe(l)?a&&rl(o)?l:l.value:Oe(l)?e?qt(l):qe(l):l}}const Cm=Bd(),$m=Bd(!0);function Bd(e=!1){return function(n,s,o,r){let a=n[s];if(Wn(a)&&Fe(a)&&!Fe(o))return!1;if(!e&&(!Br(o)&&!Wn(o)&&(a=he(a),o=he(o)),!re(n)&&Fe(a)&&!Fe(o)))return a.value=o,!0;const l=re(n)&&rl(s)?Number(s)<n.length:Ae(n,s),c=Reflect.set(n,s,o,r);return n===he(r)&&(l?To(o,a)&&on(n,"set",s,o,a):on(n,"add",s,o)),c}}function Fm(e,t){const n=Ae(e,t),s=e[t],o=Reflect.deleteProperty(e,t);return o&&n&&on(e,"delete",t,void 0,s),o}function Om(e,t){const n=Reflect.has(e,t);return(!nl(t)||!Ud.has(t))&&lt(e,"has",t),n}function Pm(e){return lt(e,"iterate",re(e)?"length":ps),Reflect.ownKeys(e)}const Md={get:xm,set:Cm,deleteProperty:Fm,has:Om,ownKeys:Pm},Dd={get:Sm,set(e,t){return Ir(`Set operation on key "${String(t)}" failed: target is readonly.`,e),!0},deleteProperty(e,t){return Ir(`Delete operation on key "${String(t)}" failed: target is readonly.`,e),!0}},Im=je({},Md,{get:km,set:$m}),Um=je({},Dd,{get:Am}),cl=e=>e,si=e=>Reflect.getPrototypeOf(e);function nr(e,t,n=!1,s=!1){e=e.__v_raw;const o=he(e),r=he(t);n||(t!==r&&lt(o,"get",t),lt(o,"get",r));const{has:a}=si(o),l=s?cl:n?ul:Co;if(a.call(o,t))return l(e.get(t));if(a.call(o,r))return l(e.get(r));e!==o&&e.get(t)}function sr(e,t=!1){const n=this.__v_raw,s=he(n),o=he(e);return t||(e!==o&&lt(s,"has",e),lt(s,"has",o)),e===o?n.has(e):n.has(e)||n.has(o)}function or(e,t=!1){return e=e.__v_raw,!t&&lt(he(e),"iterate",ps),Reflect.get(e,"size",e)}function ic(e){e=he(e);const t=he(this);return si(t).has.call(t,e)||(t.add(e),on(t,"add",e,e)),this}function ac(e,t){t=he(t);const n=he(this),{has:s,get:o}=si(n);let r=s.call(n,e);r?Ld(n,s,e):(e=he(e),r=s.call(n,e));const a=o.call(n,e);return n.set(e,t),r?To(t,a)&&on(n,"set",e,t,a):on(n,"add",e,t),this}function lc(e){const t=he(this),{has:n,get:s}=si(t);let o=n.call(t,e);o?Ld(t,n,e):(e=he(e),o=n.call(t,e));const r=s?s.call(t,e):void 0,a=t.delete(e);return o&&on(t,"delete",e,void 0,r),a}function cc(){const e=he(this),t=e.size!==0,n=fs(e)?new Map(e):new Set(e),s=e.clear();return t&&on(e,"clear",void 0,void 0,n),s}function rr(e,t){return function(s,o){const r=this,a=r.__v_raw,l=he(a),c=t?cl:e?ul:Co;return!e&&lt(l,"iterate",ps),a.forEach((u,d)=>s.call(o,c(u),c(d),r))}}function ir(e,t,n){return function(...s){const o=this.__v_raw,r=he(o),a=fs(r),l=e==="entries"||e===Symbol.iterator&&a,c=e==="keys"&&a,u=o[e](...s),d=n?cl:t?ul:Co;return!t&&lt(r,"iterate",c?ta:ps),{next(){const{value:f,done:p}=u.next();return p?{value:f,done:p}:{value:l?[d(f[0]),d(f[1])]:d(f),done:p}},[Symbol.iterator](){return this}}}}function Sn(e){return function(...t){{const n=t[0]?`on key "${t[0]}" `:"";console.warn(`${bs(e)} operation ${n}failed: target is readonly.`,he(this))}return e==="delete"?!1:this}}function Bm(){const e={get(r){return nr(this,r)},get size(){return or(this)},has:sr,add:ic,set:ac,delete:lc,clear:cc,forEach:rr(!1,!1)},t={get(r){return nr(this,r,!1,!0)},get size(){return or(this)},has:sr,add:ic,set:ac,delete:lc,clear:cc,forEach:rr(!1,!0)},n={get(r){return nr(this,r,!0)},get size(){return or(this,!0)},has(r){return sr.call(this,r,!0)},add:Sn("add"),set:Sn("set"),delete:Sn("delete"),clear:Sn("clear"),forEach:rr(!0,!1)},s={get(r){return nr(this,r,!0,!0)},get size(){return or(this,!0)},has(r){return sr.call(this,r,!0)},add:Sn("add"),set:Sn("set"),delete:Sn("delete"),clear:Sn("clear"),forEach:rr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{e[r]=ir(r,!1,!1),n[r]=ir(r,!0,!1),t[r]=ir(r,!1,!0),s[r]=ir(r,!0,!0)}),[e,n,t,s]}const[Mm,Dm,Lm,Rm]=Bm();function oi(e,t){const n=t?e?Rm:Lm:e?Dm:Mm;return(s,o,r)=>o==="__v_isReactive"?!e:o==="__v_isReadonly"?e:o==="__v_raw"?s:Reflect.get(Ae(n,o)&&o in s?n:s,o,r)}const Nm={get:oi(!1,!1)},jm={get:oi(!1,!0)},Wm={get:oi(!0,!1)},qm={get:oi(!0,!0)};function Ld(e,t,n){const s=he(n);if(s!==n&&t.call(e,s)){const o=ol(e);console.warn(`Reactive ${o} contains both the raw and reactive versions of the same object${o==="Map"?" as keys":""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`)}}const Rd=new WeakMap,Nd=new WeakMap,jd=new WeakMap,Wd=new WeakMap;function Hm(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Vm(e){return e.__v_skip||!Object.isExtensible(e)?0:Hm(ol(e))}function qe(e){return Wn(e)?e:ri(e,!1,Md,Nm,Rd)}function zm(e){return ri(e,!1,Im,jm,Nd)}function qt(e){return ri(e,!0,Dd,Wm,jd)}function lo(e){return ri(e,!0,Um,qm,Wd)}function ri(e,t,n,s,o){if(!Oe(e))return console.warn(`value cannot be made reactive: ${String(e)}`),e;if(e.__v_raw&&!(t&&e.__v_isReactive))return e;const r=o.get(e);if(r)return r;const a=Vm(e);if(a===0)return e;const l=new Proxy(e,a===2?s:n);return o.set(e,l),l}function hs(e){return Wn(e)?hs(e.__v_raw):!!(e&&e.__v_isReactive)}function Wn(e){return!!(e&&e.__v_isReadonly)}function Br(e){return!!(e&&e.__v_isShallow)}function Mr(e){return hs(e)||Wn(e)}function he(e){const t=e&&e.__v_raw;return t?he(t):e}function ii(e){return Or(e,"__v_skip",!0),e}const Co=e=>Oe(e)?qe(e):e,ul=e=>Oe(e)?qt(e):e;function dl(e){In&&ht&&(e=he(e),Id(e.dep||(e.dep=al()),{target:e,type:"get",key:"value"}))}function fl(e,t){e=he(e);const n=e.dep;n&&na(n,{target:e,type:"set",key:"value",newValue:t})}function Fe(e){return!!(e&&e.__v_isRef===!0)}function K(e){return qd(e,!1)}function rn(e){return qd(e,!0)}function qd(e,t){return Fe(e)?e:new Km(e,t)}class Km{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:he(t),this._value=n?t:Co(t)}get value(){return dl(this),this._value}set value(t){const n=this.__v_isShallow||Br(t)||Wn(t);t=n?t:he(t),To(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:Co(t),fl(this,t))}}function O(e){return Fe(e)?e.value:e}const Gm={get:(e,t,n)=>O(Reflect.get(e,t,n)),set:(e,t,n,s)=>{const o=e[t];return Fe(o)&&!Fe(n)?(o.value=n,!0):Reflect.set(e,t,n,s)}};function Hd(e){return hs(e)?e:new Proxy(e,Gm)}class Ym{constructor(t){this.dep=void 0,this.__v_isRef=!0;const{get:n,set:s}=t(()=>dl(this),()=>fl(this));this._get=n,this._set=s}get value(){return this._get()}set value(t){this._set(t)}}function pl(e){return new Ym(e)}function Qm(e){Mr(e)||console.warn("toRefs() expects a reactive object but received a plain one.");const t=re(e)?new Array(e.length):{};for(const n in e)t[n]=Vd(e,n);return t}class Zm{constructor(t,n,s){this._object=t,this._key=n,this._defaultValue=s,this.__v_isRef=!0}get value(){const t=this._object[this._key];return t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}get dep(){return bm(he(this._object),this._key)}}class Jm{constructor(t){this._getter=t,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function Xm(e,t,n){return Fe(e)?e:de(e)?new Jm(e):Oe(e)&&arguments.length>1?Vd(e,t,n):K(e)}function Vd(e,t,n){const s=e[t];return Fe(s)?s:new Zm(e,t,n)}class e0{constructor(t,n,s,o){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new ll(t,()=>{this._dirty||(this._dirty=!0,fl(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!o,this.__v_isReadonly=s}get value(){const t=he(this);return dl(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function t0(e,t,n=!1){let s,o;const r=de(e);r?(s=e,o=()=>{console.warn("Write operation failed: computed value is readonly")}):(s=e.get,o=e.set);const a=new e0(s,o,r||!o,n);return t&&!n&&(a.effect.onTrack=t.onTrack,a.effect.onTrigger=t.onTrigger),a}const ms=[];function wr(e){ms.push(e)}function xr(){ms.pop()}function D(e,...t){xs();const n=ms.length?ms[ms.length-1].component:null,s=n&&n.appContext.config.warnHandler,o=n0();if(s)vn(s,n,11,[e+t.join(""),n&&n.proxy,o.map(({vnode:r})=>`at <${gi(n,r.type)}>`).join(`
`),o]);else{const r=[`[Vue warn]: ${e}`,...t];o.length&&r.push(`
`,...s0(o)),console.warn(...r)}ks()}function n0(){let e=ms[ms.length-1];if(!e)return[];const t=[];for(;e;){const n=t[0];n&&n.vnode===e?n.recurseCount++:t.push({vnode:e,recurseCount:0});const s=e.component&&e.component.parent;e=s&&s.vnode}return t}function s0(e){const t=[];return e.forEach((n,s)=>{t.push(...s===0?[]:[`
`],...o0(n))}),t}function o0({vnode:e,recurseCount:t}){const n=t>0?`... (${t} recursive calls)`:"",s=e.component?e.component.parent==null:!1,o=` at <${gi(e.component,e.type,s)}`,r=">"+n;return e.props?[o,...r0(e.props),r]:[o+r]}function r0(e){const t=[],n=Object.keys(e);return n.slice(0,3).forEach(s=>{t.push(...zd(s,e[s]))}),n.length>3&&t.push(" ..."),t}function zd(e,t,n){return We(t)?(t=JSON.stringify(t),n?t:[`${e}=${t}`]):typeof t=="number"||typeof t=="boolean"||t==null?n?t:[`${e}=${t}`]:Fe(t)?(t=zd(e,he(t.value),!0),n?t:[`${e}=Ref<`,t,">"]):de(t)?[`${e}=fn${t.name?`<${t.name}>`:""}`]:(t=he(t),n?t:[`${e}=`,t])}function i0(e,t){e!==void 0&&(typeof e!="number"?D(`${t} is not a valid number - got ${JSON.stringify(e)}.`):isNaN(e)&&D(`${t} is NaN - the duration expression might be incorrect.`))}const hl={sp:"serverPrefetch hook",bc:"beforeCreate hook",c:"created hook",bm:"beforeMount hook",m:"mounted hook",bu:"beforeUpdate hook",u:"updated",bum:"beforeUnmount hook",um:"unmounted hook",a:"activated hook",da:"deactivated hook",ec:"errorCaptured hook",rtc:"renderTracked hook",rtg:"renderTriggered hook",[0]:"setup function",[1]:"render function",[2]:"watcher getter",[3]:"watcher callback",[4]:"watcher cleanup function",[5]:"native event handler",[6]:"component event handler",[7]:"vnode hook",[8]:"directive hook",[9]:"transition hook",[10]:"app errorHandler",[11]:"app warnHandler",[12]:"ref function",[13]:"async component loader",[14]:"scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core"};function vn(e,t,n,s){let o;try{o=s?e(...s):e()}catch(r){ai(r,t,n)}return o}function Mt(e,t,n,s){if(de(e)){const r=vn(e,t,n,s);return r&&sl(r)&&r.catch(a=>{ai(a,t,n)}),r}const o=[];for(let r=0;r<e.length;r++)o.push(Mt(e[r],t,n,s));return o}function ai(e,t,n,s=!0){const o=t?t.vnode:null;if(t){let r=t.parent;const a=t.proxy,l=hl[n];for(;r;){const u=r.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](e,a,l)===!1)return}r=r.parent}const c=t.appContext.config.errorHandler;if(c){vn(c,null,10,[e,a,l]);return}}a0(e,n,o,s)}function a0(e,t,n,s=!0){{const o=hl[t];if(n&&wr(n),D(`Unhandled error${o?` during execution of ${o}`:""}`),n&&xr(),s)throw e;console.error(e)}}let $o=!1,sa=!1;const st=[];let Jt=0;const Ms=[];let Zt=null,Cn=0;const Kd=Promise.resolve();let ml=null;const l0=100;function ot(e){const t=ml||Kd;return e?t.then(this?e.bind(this):e):t}function c0(e){let t=Jt+1,n=st.length;for(;t<n;){const s=t+n>>>1;Fo(st[s])<e?t=s+1:n=s}return t}function li(e){(!st.length||!st.includes(e,$o&&e.allowRecurse?Jt+1:Jt))&&(e.id==null?st.push(e):st.splice(c0(e.id),0,e),Gd())}function Gd(){!$o&&!sa&&(sa=!0,ml=Kd.then(Zd))}function u0(e){const t=st.indexOf(e);t>Jt&&st.splice(t,1)}function Yd(e){re(e)?Ms.push(...e):(!Zt||!Zt.includes(e,e.allowRecurse?Cn+1:Cn))&&Ms.push(e),Gd()}function uc(e,t=$o?Jt+1:0){for(e=e||new Map;t<st.length;t++){const n=st[t];if(n&&n.pre){if(gl(e,n))continue;st.splice(t,1),t--,n()}}}function Qd(e){if(Ms.length){const t=[...new Set(Ms)];if(Ms.length=0,Zt){Zt.push(...t);return}for(Zt=t,e=e||new Map,Zt.sort((n,s)=>Fo(n)-Fo(s)),Cn=0;Cn<Zt.length;Cn++)gl(e,Zt[Cn])||Zt[Cn]();Zt=null,Cn=0}}const Fo=e=>e.id==null?1/0:e.id,d0=(e,t)=>{const n=Fo(e)-Fo(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function Zd(e){sa=!1,$o=!0,e=e||new Map,st.sort(d0);const t=n=>gl(e,n);try{for(Jt=0;Jt<st.length;Jt++){const n=st[Jt];if(n&&n.active!==!1){if(t(n))continue;vn(n,null,14)}}}finally{Jt=0,st.length=0,Qd(e),$o=!1,ml=null,(st.length||Ms.length)&&Zd(e)}}function gl(e,t){if(!e.has(t))e.set(t,1);else{const n=e.get(t);if(n>l0){const s=t.ownerInstance,o=s&&Uo(s.type);return D(`Maximum recursive updates exceeded${o?` in component <${o}>`:""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`),!0}else e.set(t,n+1)}}let Un=!1;const Is=new Set;Pr().__VUE_HMR_RUNTIME__={createRecord:xi(Jd),rerender:xi(h0),reload:xi(m0)};const ws=new Map;function f0(e){const t=e.type.__hmrId;let n=ws.get(t);n||(Jd(t,e.type),n=ws.get(t)),n.instances.add(e)}function p0(e){ws.get(e.type.__hmrId).instances.delete(e)}function Jd(e,t){return ws.has(e)?!1:(ws.set(e,{initialDef:mo(t),instances:new Set}),!0)}function mo(e){return If(e)?e.__vccOpts:e}function h0(e,t){const n=ws.get(e);n&&(n.initialDef.render=t,[...n.instances].forEach(s=>{t&&(s.render=t,mo(s.type).render=t),s.renderCache=[],Un=!0,s.update(),Un=!1}))}function m0(e,t){const n=ws.get(e);if(!n)return;t=mo(t),dc(n.initialDef,t);const s=[...n.instances];for(const o of s){const r=mo(o.type);Is.has(r)||(r!==n.initialDef&&dc(r,t),Is.add(r)),o.appContext.propsCache.delete(o.type),o.appContext.emitsCache.delete(o.type),o.appContext.optionsCache.delete(o.type),o.ceReload?(Is.add(r),o.ceReload(t.styles),Is.delete(r)):o.parent?li(o.parent.update):o.appContext.reload?o.appContext.reload():typeof window<"u"?window.location.reload():console.warn("[HMR] Root or manually mounted instance modified. Full reload required.")}Yd(()=>{for(const o of s)Is.delete(mo(o.type))})}function dc(e,t){je(e,t);for(const n in e)n!=="__file"&&!(n in t)&&delete e[n]}function xi(e){return(t,n)=>{try{return e(t,n)}catch(s){console.error(s),console.warn("[HMR] Something went wrong during Vue component hot-reload. Full reload required.")}}}let Xt,co=[],oa=!1;function Ko(e,...t){Xt?Xt.emit(e,...t):oa||co.push({event:e,args:t})}function Xd(e,t){var n,s;Xt=e,Xt?(Xt.enabled=!0,co.forEach(({event:o,args:r})=>Xt.emit(o,...r)),co=[]):typeof window<"u"&&window.HTMLElement&&!((s=(n=window.navigator)==null?void 0:n.userAgent)!=null&&s.includes("jsdom"))?((t.__VUE_DEVTOOLS_HOOK_REPLAY__=t.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(r=>{Xd(r,t)}),setTimeout(()=>{Xt||(t.__VUE_DEVTOOLS_HOOK_REPLAY__=null,oa=!0,co=[])},3e3)):(oa=!0,co=[])}function g0(e,t){Ko("app:init",e,t,{Fragment:Ce,Text:Yo,Comment:it,Static:kr})}function y0(e){Ko("app:unmount",e)}const ra=yl("component:added"),ef=yl("component:updated"),v0=yl("component:removed"),_0=e=>{Xt&&typeof Xt.cleanupBuffer=="function"&&!Xt.cleanupBuffer(e)&&v0(e)};function yl(e){return t=>{Ko(e,t.appContext.app,t.uid,t.parent?t.parent.uid:void 0,t)}}const b0=tf("perf:start"),w0=tf("perf:end");function tf(e){return(t,n,s)=>{Ko(e,t.appContext.app,t.uid,t,n,s)}}function x0(e,t,n){Ko("component:emit",e.appContext.app,e,t,n)}function k0(e,t,...n){if(e.isUnmounted)return;const s=e.vnode.props||Le;{const{emitsOptions:d,propsOptions:[f]}=e;if(d)if(!(t in d))(!f||!(es(t)in f))&&D(`Component emitted event "${t}" but it is neither declared in the emits option nor as an "${es(t)}" prop.`);else{const p=d[t];de(p)&&(p(...n)||D(`Invalid event arguments: event validation failed for event "${t}".`))}}let o=n;const r=t.startsWith("update:"),a=r&&t.slice(7);if(a&&a in s){const d=`${a==="modelValue"?"model":a}Modifiers`,{number:f,trim:p}=s[d]||Le;p&&(o=n.map(h=>We(h)?h.trim():h)),f&&(o=n.map(rm))}x0(e,t,o);{const d=t.toLowerCase();d!==t&&s[es(d)]&&D(`Event "${d}" is emitted in component ${gi(e,e.type)} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${bn(t)}" instead of "${t}".`)}let l,c=s[l=es(t)]||s[l=es(sn(t))];!c&&r&&(c=s[l=es(bn(t))]),c&&Mt(c,e,6,o);const u=s[l+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[l])return;e.emitted[l]=!0,Mt(u,e,6,o)}}function nf(e,t,n=!1){const s=t.emitsCache,o=s.get(e);if(o!==void 0)return o;const r=e.emits;let a={},l=!1;if(!de(e)){const c=u=>{const d=nf(u,t,!0);d&&(l=!0,je(a,d))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!r&&!l?(Oe(e)&&s.set(e,null),null):(re(r)?r.forEach(c=>a[c]=null):je(a,r),Oe(e)&&s.set(e,a),a)}function ci(e,t){return!e||!Vo(t)?!1:(t=t.slice(2).replace(/Once$/,""),Ae(e,t[0].toLowerCase()+t.slice(1))||Ae(e,bn(t))||Ae(e,t))}let Ze=null,ui=null;function Dr(e){const t=Ze;return Ze=e,ui=e&&e.type.__scopeId||null,t}function sf(e){ui=e}function of(){ui=null}function j(e,t=Ze,n){if(!t||e._n)return e;const s=(...o)=>{s._d&&Ac(-1);const r=Dr(t);let a;try{a=e(...o)}finally{Dr(r),s._d&&Ac(1)}return ef(t),a};return s._n=!0,s._c=!0,s._d=!0,s}let ia=!1;function Lr(){ia=!0}function ki(e){const{type:t,vnode:n,proxy:s,withProxy:o,props:r,propsOptions:[a],slots:l,attrs:c,emit:u,render:d,renderCache:f,data:p,setupState:h,ctx:m,inheritAttrs:_}=e;let k,x;const S=Dr(e);ia=!1;try{if(n.shapeFlag&4){const E=o||s;k=Wt(d.call(E,E,f,r,h,p,m)),x=c}else{const E=t;c===r&&Lr(),k=Wt(E.length>1?E(r,{get attrs(){return Lr(),c},slots:l,emit:u}):E(r,null)),x=t.props?c:A0(c)}}catch(E){go.length=0,ai(E,e,1),k=V(it)}let b=k,A;if(k.patchFlag>0&&k.patchFlag&2048&&([b,A]=S0(k)),x&&_!==!1){const E=Object.keys(x),{shapeFlag:C}=b;if(E.length){if(C&7)a&&E.some(Fr)&&(x=E0(x,a)),b=ln(b,x);else if(!ia&&b.type!==it){const M=Object.keys(c),I=[],N=[];for(let ne=0,ce=M.length;ne<ce;ne++){const Q=M[ne];Vo(Q)?Fr(Q)||I.push(Q[2].toLowerCase()+Q.slice(3)):N.push(Q)}N.length&&D(`Extraneous non-props attributes (${N.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`),I.length&&D(`Extraneous non-emits event listeners (${I.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`)}}}return n.dirs&&(fc(b)||D("Runtime directive used on component with non-element root node. The directives will not function as intended."),b=ln(b),b.dirs=b.dirs?b.dirs.concat(n.dirs):n.dirs),n.transition&&(fc(b)||D("Component inside <Transition> renders non-element root node that cannot be animated."),b.transition=n.transition),A?A(b):k=b,Dr(S),k}const S0=e=>{const t=e.children,n=e.dynamicChildren,s=rf(t);if(!s)return[e,void 0];const o=t.indexOf(s),r=n?n.indexOf(s):-1,a=l=>{t[o]=l,n&&(r>-1?n[r]=l:l.patchFlag>0&&(e.dynamicChildren=[...n,l]))};return[Wt(s),a]};function rf(e){let t;for(let n=0;n<e.length;n++){const s=e[n];if(an(s)){if(s.type!==it||s.children==="v-if"){if(t)return;t=s}}else return}return t}const A0=e=>{let t;for(const n in e)(n==="class"||n==="style"||Vo(n))&&((t||(t={}))[n]=e[n]);return t},E0=(e,t)=>{const n={};for(const s in e)(!Fr(s)||!(s.slice(9)in t))&&(n[s]=e[s]);return n},fc=e=>e.shapeFlag&7||e.type===it;function T0(e,t,n){const{props:s,children:o,component:r}=e,{props:a,children:l,patchFlag:c}=t,u=r.emitsOptions;if((o||l)&&Un||t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?pc(s,a,u):!!a;if(c&8){const d=t.dynamicProps;for(let f=0;f<d.length;f++){const p=d[f];if(a[p]!==s[p]&&!ci(u,p))return!0}}}else return(o||l)&&(!l||!l.$stable)?!0:s===a?!1:s?a?pc(s,a,u):!0:!!a;return!1}function pc(e,t,n){const s=Object.keys(t);if(s.length!==Object.keys(e).length)return!0;for(let o=0;o<s.length;o++){const r=s[o];if(t[r]!==e[r]&&!ci(n,r))return!0}return!1}function C0({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const af=e=>e.__isSuspense;function $0(e,t){t&&t.pendingBranch?re(e)?t.effects.push(...e):t.effects.push(e):Yd(e)}function Ss(e,t){return vl(e,null,t)}const ar={};function ye(e,t,n){return de(t)||D("`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."),vl(e,t,n)}function vl(e,t,{immediate:n,deep:s,flush:o,onTrack:r,onTrigger:a}=Le){var l;t||(n!==void 0&&D('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'),s!==void 0&&D('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'));const c=E=>{D("Invalid watch source: ",E,"A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.")},u=il()===((l=Qe)==null?void 0:l.scope)?Qe:null;let d,f=!1,p=!1;if(Fe(e)?(d=()=>e.value,f=Br(e)):hs(e)?(d=()=>e,s=!0):re(e)?(p=!0,f=e.some(E=>hs(E)||Br(E)),d=()=>e.map(E=>{if(Fe(E))return E.value;if(hs(E))return cs(E);if(de(E))return vn(E,u,2);c(E)})):de(e)?t?d=()=>vn(e,u,2):d=()=>{if(!(u&&u.isUnmounted))return h&&h(),Mt(e,u,3,[m])}:(d=_t,c(e)),t&&s){const E=d;d=()=>cs(E())}let h,m=E=>{h=b.onStop=()=>{vn(E,u,4)}},_;if(Io)if(m=_t,t?n&&Mt(t,u,3,[d(),p?[]:void 0,m]):d(),o==="sync"){const E=Dg();_=E.__watcherHandles||(E.__watcherHandles=[])}else return _t;let k=p?new Array(e.length).fill(ar):ar;const x=()=>{if(b.active)if(t){const E=b.run();(s||f||(p?E.some((C,M)=>To(C,k[M])):To(E,k)))&&(h&&h(),Mt(t,u,3,[E,k===ar?void 0:p&&k[0]===ar?[]:k,m]),k=E)}else b.run()};x.allowRecurse=!!t;let S;o==="sync"?S=x:o==="post"?S=()=>tt(x,u&&u.suspense):(x.pre=!0,u&&(x.id=u.uid),S=()=>li(x));const b=new ll(d,S);b.onTrack=r,b.onTrigger=a,t?n?x():k=b.run():o==="post"?tt(b.run.bind(b),u&&u.suspense):b.run();const A=()=>{b.stop(),u&&u.scope&&tl(u.scope.effects,b)};return _&&_.push(A),A}function F0(e,t,n){const s=this.proxy,o=We(e)?e.includes(".")?lf(s,e):()=>s[e]:e.bind(s,s);let r;de(t)?r=t:(r=t.handler,n=t);const a=Qe;js(this);const l=vl(o,r.bind(s),n);return a?js(a):ys(),l}function lf(e,t){const n=t.split(".");return()=>{let s=e;for(let o=0;o<n.length&&s;o++)s=s[n[o]];return s}}function cs(e,t){if(!Oe(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),Fe(e))cs(e.value,t);else if(re(e))for(let n=0;n<e.length;n++)cs(e[n],t);else if(xd(e)||fs(e))e.forEach(n=>{cs(n,t)});else if(Sd(e))for(const n in e)cs(e[n],t);return e}function cf(e){nm(e)&&D("Do not use built-in directive ids as custom directive id: "+e)}function Ht(e,t){const n=Ze;if(n===null)return D("withDirectives can only be used inside render functions."),e;const s=mi(n)||n.proxy,o=e.dirs||(e.dirs=[]);for(let r=0;r<t.length;r++){let[a,l,c,u=Le]=t[r];a&&(de(a)&&(a={mounted:a,updated:a}),a.deep&&cs(l),o.push({dir:a,instance:s,value:l,oldValue:void 0,arg:c,modifiers:u}))}return e}function Yn(e,t,n,s){const o=e.dirs,r=t&&t.dirs;for(let a=0;a<o.length;a++){const l=o[a];r&&(l.oldValue=r[a].value);let c=l.dir[s];c&&(xs(),Mt(c,n,8,[e.el,l,e,t]),ks())}}function O0(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Vn(()=>{e.isMounted=!0}),Go(()=>{e.isUnmounting=!0}),e}const Pt=[Function,Array],P0={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Pt,onEnter:Pt,onAfterEnter:Pt,onEnterCancelled:Pt,onBeforeLeave:Pt,onLeave:Pt,onAfterLeave:Pt,onLeaveCancelled:Pt,onBeforeAppear:Pt,onAppear:Pt,onAfterAppear:Pt,onAppearCancelled:Pt};function I0(e,t){const{leavingVNodes:n}=e;let s=n.get(t.type);return s||(s=Object.create(null),n.set(t.type,s)),s}function aa(e,t,n,s){const{appear:o,mode:r,persisted:a=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:d,onBeforeLeave:f,onLeave:p,onAfterLeave:h,onLeaveCancelled:m,onBeforeAppear:_,onAppear:k,onAfterAppear:x,onAppearCancelled:S}=t,b=String(e.key),A=I0(n,e),E=(I,N)=>{I&&Mt(I,s,9,N)},C=(I,N)=>{const ne=N[1];E(I,N),re(I)?I.every(ce=>ce.length<=1)&&ne():I.length<=1&&ne()},M={mode:r,persisted:a,beforeEnter(I){let N=l;if(!n.isMounted)if(o)N=_||l;else return;I._leaveCb&&I._leaveCb(!0);const ne=A[b];ne&&ss(e,ne)&&ne.el._leaveCb&&ne.el._leaveCb(),E(N,[I])},enter(I){let N=c,ne=u,ce=d;if(!n.isMounted)if(o)N=k||c,ne=x||u,ce=S||d;else return;let Q=!1;const me=I._enterCb=ve=>{Q||(Q=!0,ve?E(ce,[I]):E(ne,[I]),M.delayedLeave&&M.delayedLeave(),I._enterCb=void 0)};N?C(N,[I,me]):me()},leave(I,N){const ne=String(e.key);if(I._enterCb&&I._enterCb(!0),n.isUnmounting)return N();E(f,[I]);let ce=!1;const Q=I._leaveCb=me=>{ce||(ce=!0,N(),me?E(m,[I]):E(h,[I]),I._leaveCb=void 0,A[ne]===e&&delete A[ne])};A[ne]=e,p?C(p,[I,Q]):Q()},clone(I){return aa(I,t,n,s)}};return M}function Rr(e,t){e.shapeFlag&6&&e.component?Rr(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function uf(e,t=!1,n){let s=[],o=0;for(let r=0;r<e.length;r++){let a=e[r];const l=n==null?a.key:String(n)+String(a.key!=null?a.key:r);a.type===Ce?(a.patchFlag&128&&o++,s=s.concat(uf(a.children,t,l))):(t||a.type!==it)&&s.push(l!=null?ln(a,{key:l}):a)}if(o>1)for(let r=0;r<s.length;r++)s[r].patchFlag=-2;return s}function ke(e,t){return de(e)?(()=>je({name:e.name},t,{setup:e}))():e}const Ds=e=>!!e.type.__asyncLoader,_l=e=>e.type.__isKeepAlive,U0={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(e,{slots:t}){const n=$t(),s=n.ctx;if(!s.renderer)return()=>{const S=t.default&&t.default();return S&&S.length===1?S[0]:S};const o=new Map,r=new Set;let a=null;n.__v_cache=o;const l=n.suspense,{renderer:{p:c,m:u,um:d,o:{createElement:f}}}=s,p=f("div");s.activate=(S,b,A,E,C)=>{const M=S.component;u(S,b,A,0,l),c(M.vnode,S,b,A,M,l,E,S.slotScopeIds,C),tt(()=>{M.isDeactivated=!1,M.a&&ns(M.a);const I=S.props&&S.props.onVnodeMounted;I&&It(I,M.parent,S)},l),ra(M)},s.deactivate=S=>{const b=S.component;u(S,p,null,1,l),tt(()=>{b.da&&ns(b.da);const A=S.props&&S.props.onVnodeUnmounted;A&&It(A,b.parent,S),b.isDeactivated=!0},l),ra(b)};function h(S){Si(S),d(S,n,l,!0)}function m(S){o.forEach((b,A)=>{const E=Uo(b.type);E&&(!S||!S(E))&&_(A)})}function _(S){const b=o.get(S);!a||!ss(b,a)?h(b):a&&Si(a),o.delete(S),r.delete(S)}ye(()=>[e.include,e.exclude],([S,b])=>{S&&m(A=>uo(S,A)),b&&m(A=>!uo(b,A))},{flush:"post",deep:!0});let k=null;const x=()=>{k!=null&&o.set(k,Ai(n.subTree))};return Vn(x),fi(x),Go(()=>{o.forEach(S=>{const{subTree:b,suspense:A}=n,E=Ai(b);if(S.type===E.type&&S.key===E.key){Si(E);const C=E.component.da;C&&tt(C,A);return}h(S)})}),()=>{if(k=null,!t.default)return null;const S=t.default(),b=S[0];if(S.length>1)return D("KeepAlive should contain exactly one component child."),a=null,S;if(!an(b)||!(b.shapeFlag&4)&&!(b.shapeFlag&128))return a=null,b;let A=Ai(b);const E=A.type,C=Uo(Ds(A)?A.type.__asyncResolved||{}:E),{include:M,exclude:I,max:N}=e;if(M&&(!C||!uo(M,C))||I&&C&&uo(I,C))return a=A,b;const ne=A.key==null?E:A.key,ce=o.get(ne);return A.el&&(A=ln(A),b.shapeFlag&128&&(b.ssContent=A)),k=ne,ce?(A.el=ce.el,A.component=ce.component,A.transition&&Rr(A,A.transition),A.shapeFlag|=512,r.delete(ne),r.add(ne)):(r.add(ne),N&&r.size>parseInt(N,10)&&_(r.values().next().value)),A.shapeFlag|=256,a=A,af(b.type)?b:A}}},df=U0;function uo(e,t){return re(e)?e.some(n=>uo(n,t)):We(e)?e.split(",").includes(t):tm(e)?e.test(t):!1}function ff(e,t){hf(e,"a",t)}function pf(e,t){hf(e,"da",t)}function hf(e,t,n=Qe){const s=e.__wdc||(e.__wdc=()=>{let o=n;for(;o;){if(o.isDeactivated)return;o=o.parent}return e()});if(di(t,s,n),n){let o=n.parent;for(;o&&o.parent;)_l(o.parent.vnode)&&B0(s,t,n,o),o=o.parent}}function B0(e,t,n,s){const o=di(t,e,s,!0);pi(()=>{tl(s[t],o)},n)}function Si(e){e.shapeFlag&=-257,e.shapeFlag&=-513}function Ai(e){return e.shapeFlag&128?e.ssContent:e}function di(e,t,n=Qe,s=!1){if(n){const o=n[e]||(n[e]=[]),r=t.__weh||(t.__weh=(...a)=>{if(n.isUnmounted)return;xs(),js(n);const l=Mt(t,n,e,a);return ys(),ks(),l});return s?o.unshift(r):o.push(r),r}else{const o=es(hl[e].replace(/ hook$/,""));D(`${o} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`)}}const kn=e=>(t,n=Qe)=>(!Io||e==="sp")&&di(e,(...s)=>t(...s),n),M0=kn("bm"),Vn=kn("m"),D0=kn("bu"),fi=kn("u"),Go=kn("bum"),pi=kn("um"),L0=kn("sp"),R0=kn("rtg"),N0=kn("rtc");function j0(e,t=Qe){di("ec",e,t)}const la="components",W0="directives";function Ns(e,t){return mf(la,e,!0,t)||e}const q0=Symbol.for("v-ndc");function Oo(e){return mf(W0,e)}function mf(e,t,n=!0,s=!1){const o=Ze||Qe;if(o){const r=o.type;if(e===la){const l=Uo(r,!1);if(l&&(l===t||l===sn(t)||l===bs(sn(t))))return r}const a=hc(o[e]||r[e],t)||hc(o.appContext[e],t);if(!a&&s)return r;if(n&&!a){const l=e===la?`
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.`:"";D(`Failed to resolve ${e.slice(0,-1)}: ${t}${l}`)}return a}else D(`resolve${bs(e.slice(0,-1))} can only be used in render() or setup().`)}function hc(e,t){return e&&(e[t]||e[sn(t)]||e[bs(sn(t))])}function As(e,t,n,s){let o;const r=n&&n[s];if(re(e)||We(e)){o=new Array(e.length);for(let a=0,l=e.length;a<l;a++)o[a]=t(e[a],a,void 0,r&&r[a])}else if(typeof e=="number"){Number.isInteger(e)||D(`The v-for range expect an integer value but got ${e}.`),o=new Array(e);for(let a=0;a<e;a++)o[a]=t(a+1,a,void 0,r&&r[a])}else if(Oe(e))if(e[Symbol.iterator])o=Array.from(e,(a,l)=>t(a,l,void 0,r&&r[l]));else{const a=Object.keys(e);o=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];o[l]=t(e[u],u,l,r&&r[l])}}else o=[];return n&&(n[s]=o),o}function wt(e,t,n={},s,o){if(Ze.isCE||Ze.parent&&Ds(Ze.parent)&&Ze.parent.isCE)return t!=="default"&&(n.name=t),V("slot",n,s&&s());let r=e[t];r&&r.length>1&&(D("SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."),r=()=>[]),r&&r._c&&(r._d=!1),w();const a=r&&gf(r(n)),l=H(Ce,{key:n.key||a&&a.key||`_${t}`},a||(s?s():[]),a&&e._===1?64:-2);return!o&&l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),r&&r._c&&(r._d=!0),l}function gf(e){return e.some(t=>an(t)?!(t.type===it||t.type===Ce&&!gf(t.children)):!0)?e:null}const ca=e=>e?Ff(e)?mi(e)||e.proxy:ca(e.parent):null,gs=je(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>lo(e.props),$attrs:e=>lo(e.attrs),$slots:e=>lo(e.slots),$refs:e=>lo(e.refs),$parent:e=>ca(e.parent),$root:e=>ca(e.root),$emit:e=>e.emit,$options:e=>wl(e),$forceUpdate:e=>e.f||(e.f=()=>li(e.update)),$nextTick:e=>e.n||(e.n=ot.bind(e.proxy)),$watch:e=>F0.bind(e)}),bl=e=>e==="_"||e==="$",Ei=(e,t)=>e!==Le&&!e.__isScriptSetup&&Ae(e,t),yf={get({_:e},t){const{ctx:n,setupState:s,data:o,props:r,accessCache:a,type:l,appContext:c}=e;if(t==="__isVue")return!0;let u;if(t[0]!=="$"){const h=a[t];if(h!==void 0)switch(h){case 1:return s[t];case 2:return o[t];case 4:return n[t];case 3:return r[t]}else{if(Ei(s,t))return a[t]=1,s[t];if(o!==Le&&Ae(o,t))return a[t]=2,o[t];if((u=e.propsOptions[0])&&Ae(u,t))return a[t]=3,r[t];if(n!==Le&&Ae(n,t))return a[t]=4,n[t];ua&&(a[t]=0)}}const d=gs[t];let f,p;if(d)return t==="$attrs"?(lt(e,"get",t),Lr()):t==="$slots"&&lt(e,"get",t),d(e);if((f=l.__cssModules)&&(f=f[t]))return f;if(n!==Le&&Ae(n,t))return a[t]=4,n[t];if(p=c.config.globalProperties,Ae(p,t))return p[t];Ze&&(!We(t)||t.indexOf("__v")!==0)&&(o!==Le&&bl(t[0])&&Ae(o,t)?D(`Property ${JSON.stringify(t)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`):e===Ze&&D(`Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`))},set({_:e},t,n){const{data:s,setupState:o,ctx:r}=e;return Ei(o,t)?(o[t]=n,!0):o.__isScriptSetup&&Ae(o,t)?(D(`Cannot mutate <script setup> binding "${t}" from Options API.`),!1):s!==Le&&Ae(s,t)?(s[t]=n,!0):Ae(e.props,t)?(D(`Attempting to mutate prop "${t}". Props are readonly.`),!1):t[0]==="$"&&t.slice(1)in e?(D(`Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`),!1):(t in e.appContext.config.globalProperties?Object.defineProperty(r,t,{enumerable:!0,configurable:!0,value:n}):r[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:s,appContext:o,propsOptions:r}},a){let l;return!!n[a]||e!==Le&&Ae(e,a)||Ei(t,a)||(l=r[0])&&Ae(l,a)||Ae(s,a)||Ae(gs,a)||Ae(o.config.globalProperties,a)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:Ae(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};yf.ownKeys=e=>(D("Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."),Reflect.ownKeys(e));function H0(e){const t={};return Object.defineProperty(t,"_",{configurable:!0,enumerable:!1,get:()=>e}),Object.keys(gs).forEach(n=>{Object.defineProperty(t,n,{configurable:!0,enumerable:!1,get:()=>gs[n](e),set:_t})}),t}function V0(e){const{ctx:t,propsOptions:[n]}=e;n&&Object.keys(n).forEach(s=>{Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>e.props[s],set:_t})})}function z0(e){const{ctx:t,setupState:n}=e;Object.keys(he(n)).forEach(s=>{if(!n.__isScriptSetup){if(bl(s[0])){D(`setup() return property ${JSON.stringify(s)} should not start with "$" or "_" which are reserved prefixes for Vue internals.`);return}Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>n[s],set:_t})}})}function K0(){return G0().slots}function G0(){const e=$t();return e||D("useContext() called without active instance."),e.setupContext||(e.setupContext=Pf(e))}function mc(e){return re(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}function Y0(){const e=Object.create(null);return(t,n)=>{e[n]?D(`${t} property "${n}" is already defined in ${e[n]}.`):e[n]=t}}let ua=!0;function Q0(e){const t=wl(e),n=e.proxy,s=e.ctx;ua=!1,t.beforeCreate&&gc(t.beforeCreate,e,"bc");const{data:o,computed:r,methods:a,watch:l,provide:c,inject:u,created:d,beforeMount:f,mounted:p,beforeUpdate:h,updated:m,activated:_,deactivated:k,beforeDestroy:x,beforeUnmount:S,destroyed:b,unmounted:A,render:E,renderTracked:C,renderTriggered:M,errorCaptured:I,serverPrefetch:N,expose:ne,inheritAttrs:ce,components:Q,directives:me,filters:ve}=t,be=Y0();{const[ee]=e.propsOptions;if(ee)for(const ie in ee)be("Props",ie)}if(u&&Z0(u,s,be),a)for(const ee in a){const ie=a[ee];de(ie)?(Object.defineProperty(s,ee,{value:ie.bind(n),configurable:!0,enumerable:!0,writable:!0}),be("Methods",ee)):D(`Method "${ee}" has type "${typeof ie}" in the component definition. Did you reference the function correctly?`)}if(o){de(o)||D("The data option must be a function. Plain object usage is no longer supported.");const ee=o.call(n,n);if(sl(ee)&&D("data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."),!Oe(ee))D("data() should return an object.");else{e.data=qe(ee);for(const ie in ee)be("Data",ie),bl(ie[0])||Object.defineProperty(s,ie,{configurable:!0,enumerable:!0,get:()=>ee[ie],set:_t})}}if(ua=!0,r)for(const ee in r){const ie=r[ee],Se=de(ie)?ie.bind(n,n):de(ie.get)?ie.get.bind(n,n):_t;Se===_t&&D(`Computed property "${ee}" has no getter.`);const Ie=!de(ie)&&de(ie.set)?ie.set.bind(n):()=>{D(`Write operation failed: computed property "${ee}" is readonly.`)},Ft=P({get:Se,set:Ie});Object.defineProperty(s,ee,{enumerable:!0,configurable:!0,get:()=>Ft.value,set:nt=>Ft.value=nt}),be("Computed",ee)}if(l)for(const ee in l)vf(l[ee],s,n,ee);if(c){const ee=de(c)?c.call(n):c;Reflect.ownKeys(ee).forEach(ie=>{At(ie,ee[ie])})}d&&gc(d,e,"c");function Be(ee,ie){re(ie)?ie.forEach(Se=>ee(Se.bind(n))):ie&&ee(ie.bind(n))}if(Be(M0,f),Be(Vn,p),Be(D0,h),Be(fi,m),Be(ff,_),Be(pf,k),Be(j0,I),Be(N0,C),Be(R0,M),Be(Go,S),Be(pi,A),Be(L0,N),re(ne))if(ne.length){const ee=e.exposed||(e.exposed={});ne.forEach(ie=>{Object.defineProperty(ee,ie,{get:()=>n[ie],set:Se=>n[ie]=Se})})}else e.exposed||(e.exposed={});E&&e.render===_t&&(e.render=E),ce!=null&&(e.inheritAttrs=ce),Q&&(e.components=Q),me&&(e.directives=me)}function Z0(e,t,n=_t){re(e)&&(e=da(e));for(const s in e){const o=e[s];let r;Oe(o)?"default"in o?r=R(o.from||s,o.default,!0):r=R(o.from||s):r=R(o),Fe(r)?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:a=>r.value=a}):t[s]=r,n("Inject",s)}}function gc(e,t,n){Mt(re(e)?e.map(s=>s.bind(t.proxy)):e.bind(t.proxy),t,n)}function vf(e,t,n,s){const o=s.includes(".")?lf(n,s):()=>n[s];if(We(e)){const r=t[e];de(r)?ye(o,r):D(`Invalid watch handler specified by key "${e}"`,r)}else if(de(e))ye(o,e.bind(n));else if(Oe(e))if(re(e))e.forEach(r=>vf(r,t,n,s));else{const r=de(e.handler)?e.handler.bind(n):t[e.handler];de(r)?ye(o,r,e):D(`Invalid watch handler specified by key "${e.handler}"`,r)}else D(`Invalid watch option: "${s}"`,e)}function wl(e){const t=e.type,{mixins:n,extends:s}=t,{mixins:o,optionsCache:r,config:{optionMergeStrategies:a}}=e.appContext,l=r.get(t);let c;return l?c=l:!o.length&&!n&&!s?c=t:(c={},o.length&&o.forEach(u=>Nr(c,u,a,!0)),Nr(c,t,a)),Oe(t)&&r.set(t,c),c}function Nr(e,t,n,s=!1){const{mixins:o,extends:r}=t;r&&Nr(e,r,n,!0),o&&o.forEach(a=>Nr(e,a,n,!0));for(const a in t)if(s&&a==="expose")D('"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.');else{const l=J0[a]||n&&n[a];e[a]=l?l(e[a],t[a]):t[a]}return e}const J0={data:yc,props:vc,emits:vc,methods:fo,computed:fo,beforeCreate:dt,created:dt,beforeMount:dt,mounted:dt,beforeUpdate:dt,updated:dt,beforeDestroy:dt,beforeUnmount:dt,destroyed:dt,unmounted:dt,activated:dt,deactivated:dt,errorCaptured:dt,serverPrefetch:dt,components:fo,directives:fo,watch:eg,provide:yc,inject:X0};function yc(e,t){return t?e?function(){return je(de(e)?e.call(this,this):e,de(t)?t.call(this,this):t)}:t:e}function X0(e,t){return fo(da(e),da(t))}function da(e){if(re(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function dt(e,t){return e?[...new Set([].concat(e,t))]:t}function fo(e,t){return e?je(Object.create(null),e,t):t}function vc(e,t){return e?re(e)&&re(t)?[...new Set([...e,...t])]:je(Object.create(null),mc(e),mc(t??{})):t}function eg(e,t){if(!e)return t;if(!t)return e;const n=je(Object.create(null),e);for(const s in t)n[s]=dt(e[s],t[s]);return n}function _f(){return{app:null,config:{isNativeTag:wd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let tg=0;function ng(e,t){return function(s,o=null){de(s)||(s=je({},s)),o!=null&&!Oe(o)&&(D("root props passed to app.mount() must be an object."),o=null);const r=_f();Object.defineProperty(r.config,"unwrapInjectedRef",{get(){return!0},set(){D("app.config.unwrapInjectedRef has been deprecated. 3.3 now alawys unwraps injected refs in Options API.")}});const a=new Set;let l=!1;const c=r.app={_uid:tg++,_component:s,_props:o,_container:null,_context:r,_instance:null,version:Hr,get config(){return r.config},set config(u){D("app.config cannot be replaced. Modify individual options instead.")},use(u,...d){return a.has(u)?D("Plugin has already been applied to target app."):u&&de(u.install)?(a.add(u),u.install(c,...d)):de(u)?(a.add(u),u(c,...d)):D('A plugin must either be a function or an object with an "install" function.'),c},mixin(u){return r.mixins.includes(u)?D("Mixin has already been applied to target app"+(u.name?`: ${u.name}`:"")):r.mixins.push(u),c},component(u,d){return ga(u,r.config),d?(r.components[u]&&D(`Component "${u}" has already been registered in target app.`),r.components[u]=d,c):r.components[u]},directive(u,d){return cf(u),d?(r.directives[u]&&D(`Directive "${u}" has already been registered in target app.`),r.directives[u]=d,c):r.directives[u]},mount(u,d,f){if(l)D("App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`");else{u.__vue_app__&&D("There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first.");const p=V(s,o);return p.appContext=r,r.reload=()=>{e(ln(p),u,f)},d&&t?t(p,u):e(p,u,f),l=!0,c._container=u,u.__vue_app__=c,c._instance=p.component,g0(c,Hr),mi(p.component)||p.component.proxy}},unmount(){l?(e(null,c._container),c._instance=null,y0(c),delete c._container.__vue_app__):D("Cannot unmount an app that is not mounted.")},provide(u,d){return u in r.provides&&D(`App already provides property with key "${String(u)}". It will be overwritten with the new value.`),r.provides[u]=d,c},runWithContext(u){jr=c;try{return u()}finally{jr=null}}};return c}}let jr=null;function At(e,t){if(!Qe)D("provide() can only be used inside setup().");else{let n=Qe.provides;const s=Qe.parent&&Qe.parent.provides;s===n&&(n=Qe.provides=Object.create(s)),n[e]=t}}function R(e,t,n=!1){const s=Qe||Ze;if(s||jr){const o=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:jr._context.provides;if(o&&e in o)return o[e];if(arguments.length>1)return n&&de(t)?t.call(s&&s.proxy):t;D(`injection "${String(e)}" not found.`)}else D("inject() can only be used inside setup() or functional components.")}function sg(e,t,n,s=!1){const o={},r={};Or(r,hi,1),e.propsDefaults=Object.create(null),bf(e,t,o,r);for(const a in e.propsOptions[0])a in o||(o[a]=void 0);xf(t||{},o,e),n?e.props=s?o:zm(o):e.type.props?e.props=o:e.props=r,e.attrs=r}function og(e){for(;e;){if(e.type.__hmrId)return!0;e=e.parent}}function rg(e,t,n,s){const{props:o,attrs:r,vnode:{patchFlag:a}}=e,l=he(o),[c]=e.propsOptions;let u=!1;if(!og(e)&&(s||a>0)&&!(a&16)){if(a&8){const d=e.vnode.dynamicProps;for(let f=0;f<d.length;f++){let p=d[f];if(ci(e.emitsOptions,p))continue;const h=t[p];if(c)if(Ae(r,p))h!==r[p]&&(r[p]=h,u=!0);else{const m=sn(p);o[m]=fa(c,l,m,h,e,!1)}else h!==r[p]&&(r[p]=h,u=!0)}}}else{bf(e,t,o,r)&&(u=!0);let d;for(const f in l)(!t||!Ae(t,f)&&((d=bn(f))===f||!Ae(t,d)))&&(c?n&&(n[f]!==void 0||n[d]!==void 0)&&(o[f]=fa(c,l,f,void 0,e,!0)):delete o[f]);if(r!==l)for(const f in r)(!t||!Ae(t,f))&&(delete r[f],u=!0)}u&&on(e,"set","$attrs"),xf(t||{},o,e)}function bf(e,t,n,s){const[o,r]=e.propsOptions;let a=!1,l;if(t)for(let c in t){if(br(c))continue;const u=t[c];let d;o&&Ae(o,d=sn(c))?!r||!r.includes(d)?n[d]=u:(l||(l={}))[d]=u:ci(e.emitsOptions,c)||(!(c in s)||u!==s[c])&&(s[c]=u,a=!0)}if(r){const c=he(n),u=l||Le;for(let d=0;d<r.length;d++){const f=r[d];n[f]=fa(o,c,f,u[f],e,!Ae(u,f))}}return a}function fa(e,t,n,s,o,r){const a=e[n];if(a!=null){const l=Ae(a,"default");if(l&&s===void 0){const c=a.default;if(a.type!==Function&&!a.skipFactory&&de(c)){const{propsDefaults:u}=o;n in u?s=u[n]:(js(o),s=u[n]=c.call(null,t),ys())}else s=c}a[0]&&(r&&!l?s=!1:a[1]&&(s===""||s===bn(n))&&(s=!0))}return s}function wf(e,t,n=!1){const s=t.propsCache,o=s.get(e);if(o)return o;const r=e.props,a={},l=[];let c=!1;if(!de(e)){const d=f=>{c=!0;const[p,h]=wf(f,t,!0);je(a,p),h&&l.push(...h)};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!r&&!c)return Oe(e)&&s.set(e,Bs),Bs;if(re(r))for(let d=0;d<r.length;d++){We(r[d])||D("props must be strings when using array syntax.",r[d]);const f=sn(r[d]);_c(f)&&(a[f]=Le)}else if(r){Oe(r)||D("invalid props options",r);for(const d in r){const f=sn(d);if(_c(f)){const p=r[d],h=a[f]=re(p)||de(p)?{type:p}:je({},p);if(h){const m=wc(Boolean,h.type),_=wc(String,h.type);h[0]=m>-1,h[1]=_<0||m<_,(m>-1||Ae(h,"default"))&&l.push(f)}}}}const u=[a,l];return Oe(e)&&s.set(e,u),u}function _c(e){return e[0]!=="$"?!0:(D(`Invalid prop name: "${e}" is a reserved property.`),!1)}function pa(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function bc(e,t){return pa(e)===pa(t)}function wc(e,t){return re(t)?t.findIndex(n=>bc(n,e)):de(t)&&bc(t,e)?0:-1}function xf(e,t,n){const s=he(t),o=n.propsOptions[0];for(const r in o){let a=o[r];a!=null&&ig(r,s[r],a,!Ae(e,r)&&!Ae(e,bn(r)))}}function ig(e,t,n,s){const{type:o,required:r,validator:a,skipCheck:l}=n;if(r&&s){D('Missing required prop: "'+e+'"');return}if(!(t==null&&!r)){if(o!=null&&o!==!0&&!l){let c=!1;const u=re(o)?o:[o],d=[];for(let f=0;f<u.length&&!c;f++){const{valid:p,expectedType:h}=lg(t,u[f]);d.push(h||""),c=p}if(!c){D(cg(e,t,d));return}}a&&!a(t)&&D('Invalid prop: custom validator check failed for prop "'+e+'".')}}const ag=Hn("String,Number,Boolean,Function,Symbol,BigInt");function lg(e,t){let n;const s=pa(t);if(ag(s)){const o=typeof e;n=o===s.toLowerCase(),!n&&o==="object"&&(n=e instanceof t)}else s==="Object"?n=Oe(e):s==="Array"?n=re(e):s==="null"?n=e===null:n=e instanceof t;return{valid:n,expectedType:s}}function cg(e,t,n){let s=`Invalid prop: type check failed for prop "${e}". Expected ${n.map(bs).join(" | ")}`;const o=n[0],r=ol(t),a=xc(t,o),l=xc(t,r);return n.length===1&&kc(o)&&!ug(o,r)&&(s+=` with value ${a}`),s+=`, got ${r} `,kc(r)&&(s+=`with value ${l}.`),s}function xc(e,t){return t==="String"?`"${e}"`:t==="Number"?`${Number(e)}`:`${e}`}function kc(e){return["string","number","boolean"].some(n=>e.toLowerCase()===n)}function ug(...e){return e.some(t=>t.toLowerCase()==="boolean")}const kf=e=>e[0]==="_"||e==="$stable",xl=e=>re(e)?e.map(Wt):[Wt(e)],dg=(e,t,n)=>{if(t._n)return t;const s=j((...o)=>(Qe&&D(`Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`),xl(t(...o))),n);return s._c=!1,s},Sf=(e,t,n)=>{const s=e._ctx;for(const o in e){if(kf(o))continue;const r=e[o];if(de(r))t[o]=dg(o,r,s);else if(r!=null){D(`Non-function value encountered for slot "${o}". Prefer function slots for better performance.`);const a=xl(r);t[o]=()=>a}}},Af=(e,t)=>{_l(e.vnode)||D("Non-function value encountered for default slot. Prefer function slots for better performance.");const n=xl(t);e.slots.default=()=>n},fg=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=he(t),Or(t,"_",n)):Sf(t,e.slots={})}else e.slots={},t&&Af(e,t);Or(e.slots,hi,1)},pg=(e,t,n)=>{const{vnode:s,slots:o}=e;let r=!0,a=Le;if(s.shapeFlag&32){const l=t._;l?Un?(je(o,t),on(e,"set","$slots")):n&&l===1?r=!1:(je(o,t),!n&&l===1&&delete o._):(r=!t.$stable,Sf(t,o)),a=t}else t&&(Af(e,t),a={default:1});if(r)for(const l in o)!kf(l)&&!(l in a)&&delete o[l]};function ha(e,t,n,s,o=!1){if(re(e)){e.forEach((p,h)=>ha(p,t&&(re(t)?t[h]:t),n,s,o));return}if(Ds(s)&&!o)return;const r=s.shapeFlag&4?mi(s.component)||s.component.proxy:s.el,a=o?null:r,{i:l,r:c}=e;if(!l){D("Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function.");return}const u=t&&t.r,d=l.refs===Le?l.refs={}:l.refs,f=l.setupState;if(u!=null&&u!==c&&(We(u)?(d[u]=null,Ae(f,u)&&(f[u]=null)):Fe(u)&&(u.value=null)),de(c))vn(c,l,12,[a,d]);else{const p=We(c),h=Fe(c);if(p||h){const m=()=>{if(e.f){const _=p?Ae(f,c)?f[c]:d[c]:c.value;o?re(_)&&tl(_,r):re(_)?_.includes(r)||_.push(r):p?(d[c]=[r],Ae(f,c)&&(f[c]=d[c])):(c.value=[r],e.k&&(d[e.k]=c.value))}else p?(d[c]=a,Ae(f,c)&&(f[c]=a)):h?(c.value=a,e.k&&(d[e.k]=a)):D("Invalid template ref type:",c,`(${typeof c})`)};a?(m.id=-1,tt(m,n)):m()}else D("Invalid template ref type:",c,`(${typeof c})`)}}let Ys,On;function fn(e,t){e.appContext.config.performance&&Wr()&&On.mark(`vue-${t}-${e.uid}`),b0(e,t,Wr()?On.now():Date.now())}function pn(e,t){if(e.appContext.config.performance&&Wr()){const n=`vue-${t}-${e.uid}`,s=n+":end";On.mark(s),On.measure(`<${gi(e,e.type)}> ${t}`,n,s),On.clearMarks(n),On.clearMarks(s)}w0(e,t,Wr()?On.now():Date.now())}function Wr(){return Ys!==void 0||(typeof window<"u"&&window.performance?(Ys=!0,On=window.performance):Ys=!1),Ys}function hg(){const e=[];if(e.length){const t=e.length>1;console.warn(`Feature flag${t?"s":""} ${e.join(", ")} ${t?"are":"is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`)}}const tt=$0;function mg(e){return gg(e)}function gg(e,t){hg();const n=Pr();n.__VUE__=!0,Xd(n.__VUE_DEVTOOLS_GLOBAL_HOOK__,n);const{insert:s,remove:o,patchProp:r,createElement:a,createText:l,createComment:c,setText:u,setElementText:d,parentNode:f,nextSibling:p,setScopeId:h=_t,insertStaticContent:m}=e,_=(g,v,T,B=null,U=null,q=null,J=!1,W=null,z=Un?!1:!!v.dynamicChildren)=>{if(g===v)return;g&&!ss(g,v)&&(B=Z(g),gt(g,U,q,!0),g=null),v.patchFlag===-2&&(z=!1,v.dynamicChildren=null);const{type:L,ref:oe,shapeFlag:se}=v;switch(L){case Yo:k(g,v,T,B);break;case it:x(g,v,T,B);break;case kr:g==null?S(v,T,B,J):b(g,v,T,J);break;case Ce:me(g,v,T,B,U,q,J,W,z);break;default:se&1?C(g,v,T,B,U,q,J,W,z):se&6?ve(g,v,T,B,U,q,J,W,z):se&64||se&128?L.process(g,v,T,B,U,q,J,W,z,te):D("Invalid VNode type:",L,`(${typeof L})`)}oe!=null&&U&&ha(oe,g&&g.ref,q,v||g,!v)},k=(g,v,T,B)=>{if(g==null)s(v.el=l(v.children),T,B);else{const U=v.el=g.el;v.children!==g.children&&u(U,v.children)}},x=(g,v,T,B)=>{g==null?s(v.el=c(v.children||""),T,B):v.el=g.el},S=(g,v,T,B)=>{[g.el,g.anchor]=m(g.children,v,T,B,g.el,g.anchor)},b=(g,v,T,B)=>{if(v.children!==g.children){const U=p(g.anchor);E(g),[v.el,v.anchor]=m(v.children,T,U,B)}else v.el=g.el,v.anchor=g.anchor},A=({el:g,anchor:v},T,B)=>{let U;for(;g&&g!==v;)U=p(g),s(g,T,B),g=U;s(v,T,B)},E=({el:g,anchor:v})=>{let T;for(;g&&g!==v;)T=p(g),o(g),g=T;o(v)},C=(g,v,T,B,U,q,J,W,z)=>{J=J||v.type==="svg",g==null?M(v,T,B,U,q,J,W,z):ne(g,v,U,q,J,W,z)},M=(g,v,T,B,U,q,J,W)=>{let z,L;const{type:oe,props:se,shapeFlag:ae,transition:pe,dirs:Ee}=g;if(z=g.el=a(g.type,q,se&&se.is,se),ae&8?d(z,g.children):ae&16&&N(g.children,z,null,B,U,q&&oe!=="foreignObject",J,W),Ee&&Yn(g,null,B,"created"),I(z,g,g.scopeId,J,B),se){for(const De in se)De!=="value"&&!br(De)&&r(z,De,null,se[De],q,g.children,B,U,F);"value"in se&&r(z,"value",null,se.value),(L=se.onVnodeBeforeMount)&&It(L,B,g)}Object.defineProperty(z,"__vnode",{value:g,enumerable:!1}),Object.defineProperty(z,"__vueParentComponent",{value:B,enumerable:!1}),Ee&&Yn(g,null,B,"beforeMount");const Ne=(!U||U&&!U.pendingBranch)&&pe&&!pe.persisted;Ne&&pe.beforeEnter(z),s(z,v,T),((L=se&&se.onVnodeMounted)||Ne||Ee)&&tt(()=>{L&&It(L,B,g),Ne&&pe.enter(z),Ee&&Yn(g,null,B,"mounted")},U)},I=(g,v,T,B,U)=>{if(T&&h(g,T),B)for(let q=0;q<B.length;q++)h(g,B[q]);if(U){let q=U.subTree;if(q.patchFlag>0&&q.patchFlag&2048&&(q=rf(q.children)||q),v===q){const J=U.vnode;I(g,J,J.scopeId,J.slotScopeIds,U.parent)}}},N=(g,v,T,B,U,q,J,W,z=0)=>{for(let L=z;L<g.length;L++){const oe=g[L]=W?$n(g[L]):Wt(g[L]);_(null,oe,v,T,B,U,q,J,W)}},ne=(g,v,T,B,U,q,J)=>{const W=v.el=g.el;let{patchFlag:z,dynamicChildren:L,dirs:oe}=v;z|=g.patchFlag&16;const se=g.props||Le,ae=v.props||Le;let pe;T&&Qn(T,!1),(pe=ae.onVnodeBeforeUpdate)&&It(pe,T,v,g),oe&&Yn(v,g,T,"beforeUpdate"),T&&Qn(T,!0),Un&&(z=0,J=!1,L=null);const Ee=U&&v.type!=="foreignObject";if(L?(ce(g.dynamicChildren,L,W,T,B,Ee,q),qr(g,v)):J||Se(g,v,W,null,T,B,Ee,q,!1),z>0){if(z&16)Q(W,v,se,ae,T,B,U);else if(z&2&&se.class!==ae.class&&r(W,"class",null,ae.class,U),z&4&&r(W,"style",se.style,ae.style,U),z&8){const Ne=v.dynamicProps;for(let De=0;De<Ne.length;De++){const ze=Ne[De],Rt=se[ze],Cs=ae[ze];(Cs!==Rt||ze==="value")&&r(W,ze,Rt,Cs,U,g.children,T,B,F)}}z&1&&g.children!==v.children&&d(W,v.children)}else!J&&L==null&&Q(W,v,se,ae,T,B,U);((pe=ae.onVnodeUpdated)||oe)&&tt(()=>{pe&&It(pe,T,v,g),oe&&Yn(v,g,T,"updated")},B)},ce=(g,v,T,B,U,q,J)=>{for(let W=0;W<v.length;W++){const z=g[W],L=v[W],oe=z.el&&(z.type===Ce||!ss(z,L)||z.shapeFlag&70)?f(z.el):T;_(z,L,oe,null,B,U,q,J,!0)}},Q=(g,v,T,B,U,q,J)=>{if(T!==B){if(T!==Le)for(const W in T)!br(W)&&!(W in B)&&r(g,W,T[W],null,J,v.children,U,q,F);for(const W in B){if(br(W))continue;const z=B[W],L=T[W];z!==L&&W!=="value"&&r(g,W,L,z,J,v.children,U,q,F)}"value"in B&&r(g,"value",T.value,B.value)}},me=(g,v,T,B,U,q,J,W,z)=>{const L=v.el=g?g.el:l(""),oe=v.anchor=g?g.anchor:l("");let{patchFlag:se,dynamicChildren:ae,slotScopeIds:pe}=v;(Un||se&2048)&&(se=0,z=!1,ae=null),pe&&(W=W?W.concat(pe):pe),g==null?(s(L,T,B),s(oe,T,B),N(v.children,T,oe,U,q,J,W,z)):se>0&&se&64&&ae&&g.dynamicChildren?(ce(g.dynamicChildren,ae,T,U,q,J,W),qr(g,v)):Se(g,v,T,oe,U,q,J,W,z)},ve=(g,v,T,B,U,q,J,W,z)=>{v.slotScopeIds=W,g==null?v.shapeFlag&512?U.ctx.activate(v,T,B,J,z):be(v,T,B,U,q,J,z):Be(g,v,z)},be=(g,v,T,B,U,q,J)=>{const W=g.component=Tg(g,B,U);if(W.type.__hmrId&&f0(W),wr(g),fn(W,"mount"),_l(g)&&(W.ctx.renderer=te),fn(W,"init"),$g(W),pn(W,"init"),W.asyncDep){if(U&&U.registerDep(W,ee),!g.el){const z=W.subTree=V(it);x(null,z,v,T)}return}ee(W,g,v,T,U,q,J),xr(),pn(W,"mount")},Be=(g,v,T)=>{const B=v.component=g.component;if(T0(g,v,T))if(B.asyncDep&&!B.asyncResolved){wr(v),ie(B,v,T),xr();return}else B.next=v,u0(B.update),B.update();else v.el=g.el,B.vnode=v},ee=(g,v,T,B,U,q,J)=>{const W=()=>{if(g.isMounted){let{next:oe,bu:se,u:ae,parent:pe,vnode:Ee}=g,Ne=oe,De;wr(oe||g.vnode),Qn(g,!1),oe?(oe.el=Ee.el,ie(g,oe,J)):oe=Ee,se&&ns(se),(De=oe.props&&oe.props.onVnodeBeforeUpdate)&&It(De,pe,oe,Ee),Qn(g,!0),fn(g,"render");const ze=ki(g);pn(g,"render");const Rt=g.subTree;g.subTree=ze,fn(g,"patch"),_(Rt,ze,f(Rt.el),Z(Rt),g,U,q),pn(g,"patch"),oe.el=ze.el,Ne===null&&C0(g,ze.el),ae&&tt(ae,U),(De=oe.props&&oe.props.onVnodeUpdated)&&tt(()=>It(De,pe,oe,Ee),U),ef(g),xr()}else{let oe;const{el:se,props:ae}=v,{bm:pe,m:Ee,parent:Ne}=g,De=Ds(v);if(Qn(g,!1),pe&&ns(pe),!De&&(oe=ae&&ae.onVnodeBeforeMount)&&It(oe,Ne,v),Qn(g,!0),se&&Me){const ze=()=>{fn(g,"render"),g.subTree=ki(g),pn(g,"render"),fn(g,"hydrate"),Me(se,g.subTree,g,U,null),pn(g,"hydrate")};De?v.type.__asyncLoader().then(()=>!g.isUnmounted&&ze()):ze()}else{fn(g,"render");const ze=g.subTree=ki(g);pn(g,"render"),fn(g,"patch"),_(null,ze,T,B,g,U,q),pn(g,"patch"),v.el=ze.el}if(Ee&&tt(Ee,U),!De&&(oe=ae&&ae.onVnodeMounted)){const ze=v;tt(()=>It(oe,Ne,ze),U)}(v.shapeFlag&256||Ne&&Ds(Ne.vnode)&&Ne.vnode.shapeFlag&256)&&g.a&&tt(g.a,U),g.isMounted=!0,ra(g),v=T=B=null}},z=g.effect=new ll(W,()=>li(L),g.scope),L=g.update=()=>z.run();L.id=g.uid,Qn(g,!0),z.onTrack=g.rtc?oe=>ns(g.rtc,oe):void 0,z.onTrigger=g.rtg?oe=>ns(g.rtg,oe):void 0,L.ownerInstance=g,L()},ie=(g,v,T)=>{v.component=g;const B=g.vnode.props;g.vnode=v,g.next=null,rg(g,v.props,B,T),pg(g,v.children,T),xs(),uc(),ks()},Se=(g,v,T,B,U,q,J,W,z=!1)=>{const L=g&&g.children,oe=g?g.shapeFlag:0,se=v.children,{patchFlag:ae,shapeFlag:pe}=v;if(ae>0){if(ae&128){Ft(L,se,T,B,U,q,J,W,z);return}else if(ae&256){Ie(L,se,T,B,U,q,J,W,z);return}}pe&8?(oe&16&&F(L,U,q),se!==L&&d(T,se)):oe&16?pe&16?Ft(L,se,T,B,U,q,J,W,z):F(L,U,q,!0):(oe&8&&d(T,""),pe&16&&N(se,T,B,U,q,J,W,z))},Ie=(g,v,T,B,U,q,J,W,z)=>{g=g||Bs,v=v||Bs;const L=g.length,oe=v.length,se=Math.min(L,oe);let ae;for(ae=0;ae<se;ae++){const pe=v[ae]=z?$n(v[ae]):Wt(v[ae]);_(g[ae],pe,T,null,U,q,J,W,z)}L>oe?F(g,U,q,!0,!1,se):N(v,T,B,U,q,J,W,z,se)},Ft=(g,v,T,B,U,q,J,W,z)=>{let L=0;const oe=v.length;let se=g.length-1,ae=oe-1;for(;L<=se&&L<=ae;){const pe=g[L],Ee=v[L]=z?$n(v[L]):Wt(v[L]);if(ss(pe,Ee))_(pe,Ee,T,null,U,q,J,W,z);else break;L++}for(;L<=se&&L<=ae;){const pe=g[se],Ee=v[ae]=z?$n(v[ae]):Wt(v[ae]);if(ss(pe,Ee))_(pe,Ee,T,null,U,q,J,W,z);else break;se--,ae--}if(L>se){if(L<=ae){const pe=ae+1,Ee=pe<oe?v[pe].el:B;for(;L<=ae;)_(null,v[L]=z?$n(v[L]):Wt(v[L]),T,Ee,U,q,J,W,z),L++}}else if(L>ae)for(;L<=se;)gt(g[L],U,q,!0),L++;else{const pe=L,Ee=L,Ne=new Map;for(L=Ee;L<=ae;L++){const ut=v[L]=z?$n(v[L]):Wt(v[L]);ut.key!=null&&(Ne.has(ut.key)&&D("Duplicate keys found during update:",JSON.stringify(ut.key),"Make sure keys are unique."),Ne.set(ut.key,L))}let De,ze=0;const Rt=ae-Ee+1;let Cs=!1,Xl=0;const Gs=new Array(Rt);for(L=0;L<Rt;L++)Gs[L]=0;for(L=pe;L<=se;L++){const ut=g[L];if(ze>=Rt){gt(ut,U,q,!0);continue}let Qt;if(ut.key!=null)Qt=Ne.get(ut.key);else for(De=Ee;De<=ae;De++)if(Gs[De-Ee]===0&&ss(ut,v[De])){Qt=De;break}Qt===void 0?gt(ut,U,q,!0):(Gs[Qt-Ee]=L+1,Qt>=Xl?Xl=Qt:Cs=!0,_(ut,v[Qt],T,null,U,q,J,W,z),ze++)}const ec=Cs?yg(Gs):Bs;for(De=ec.length-1,L=Rt-1;L>=0;L--){const ut=Ee+L,Qt=v[ut],tc=ut+1<oe?v[ut+1].el:B;Gs[L]===0?_(null,Qt,T,tc,U,q,J,W,z):Cs&&(De<0||L!==ec[De]?nt(Qt,T,tc,2):De--)}}},nt=(g,v,T,B,U=null)=>{const{el:q,type:J,transition:W,children:z,shapeFlag:L}=g;if(L&6){nt(g.component.subTree,v,T,B);return}if(L&128){g.suspense.move(v,T,B);return}if(L&64){J.move(g,v,T,te);return}if(J===Ce){s(q,v,T);for(let se=0;se<z.length;se++)nt(z[se],v,T,B);s(g.anchor,v,T);return}if(J===kr){A(g,v,T);return}if(B!==2&&L&1&&W)if(B===0)W.beforeEnter(q),s(q,v,T),tt(()=>W.enter(q),U);else{const{leave:se,delayLeave:ae,afterLeave:pe}=W,Ee=()=>s(q,v,T),Ne=()=>{se(q,()=>{Ee(),pe&&pe()})};ae?ae(q,Ee,Ne):Ne()}else s(q,v,T)},gt=(g,v,T,B=!1,U=!1)=>{const{type:q,props:J,ref:W,children:z,dynamicChildren:L,shapeFlag:oe,patchFlag:se,dirs:ae}=g;if(W!=null&&ha(W,null,T,g,!0),oe&256){v.ctx.deactivate(g);return}const pe=oe&1&&ae,Ee=!Ds(g);let Ne;if(Ee&&(Ne=J&&J.onVnodeBeforeUnmount)&&It(Ne,v,g),oe&6)Ot(g.component,T,B);else{if(oe&128){g.suspense.unmount(T,B);return}pe&&Yn(g,null,v,"beforeUnmount"),oe&64?g.type.remove(g,v,T,U,te,B):L&&(q!==Ce||se>0&&se&64)?F(L,v,T,!1,!0):(q===Ce&&se&384||!U&&oe&16)&&F(z,v,T),B&&Yt(g)}(Ee&&(Ne=J&&J.onVnodeUnmounted)||pe)&&tt(()=>{Ne&&It(Ne,v,g),pe&&Yn(g,null,v,"unmounted")},T)},Yt=g=>{const{type:v,el:T,anchor:B,transition:U}=g;if(v===Ce){g.patchFlag>0&&g.patchFlag&2048&&U&&!U.persisted?g.children.forEach(J=>{J.type===it?o(J.el):Yt(J)}):Gn(T,B);return}if(v===kr){E(g);return}const q=()=>{o(T),U&&!U.persisted&&U.afterLeave&&U.afterLeave()};if(g.shapeFlag&1&&U&&!U.persisted){const{leave:J,delayLeave:W}=U,z=()=>J(T,q);W?W(g.el,q,z):z()}else q()},Gn=(g,v)=>{let T;for(;g!==v;)T=p(g),o(g),g=T;o(v)},Ot=(g,v,T)=>{g.type.__hmrId&&p0(g);const{bum:B,scope:U,update:q,subTree:J,um:W}=g;B&&ns(B),U.stop(),q&&(q.active=!1,gt(J,g,v,T)),W&&tt(W,v),tt(()=>{g.isUnmounted=!0},v),v&&v.pendingBranch&&!v.isUnmounted&&g.asyncDep&&!g.asyncResolved&&g.suspenseId===v.pendingId&&(v.deps--,v.deps===0&&v.resolve()),_0(g)},F=(g,v,T,B=!1,U=!1,q=0)=>{for(let J=q;J<g.length;J++)gt(g[J],v,T,B,U)},Z=g=>g.shapeFlag&6?Z(g.component.subTree):g.shapeFlag&128?g.suspense.next():p(g.anchor||g.el),X=(g,v,T)=>{g==null?v._vnode&&gt(v._vnode,null,null,!0):_(v._vnode||null,g,v,null,null,null,T),uc(),Qd(),v._vnode=g},te={p:_,um:gt,m:nt,r:Yt,mt:be,mc:N,pc:Se,pbc:ce,n:Z,o:e};let xe,Me;return t&&([xe,Me]=t(te)),{render:X,hydrate:xe,createApp:ng(X,xe)}}function Qn({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function qr(e,t,n=!1){const s=e.children,o=t.children;if(re(s)&&re(o))for(let r=0;r<s.length;r++){const a=s[r];let l=o[r];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=o[r]=$n(o[r]),l.el=a.el),n||qr(a,l)),l.type===Yo&&(l.el=a.el),l.type===it&&!l.el&&(l.el=a.el)}}function yg(e){const t=e.slice(),n=[0];let s,o,r,a,l;const c=e.length;for(s=0;s<c;s++){const u=e[s];if(u!==0){if(o=n[n.length-1],e[o]<u){t[s]=o,n.push(s);continue}for(r=0,a=n.length-1;r<a;)l=r+a>>1,e[n[l]]<u?r=l+1:a=l;u<e[n[r]]&&(r>0&&(t[s]=n[r-1]),n[r]=s)}}for(r=n.length,a=n[r-1];r-- >0;)n[r]=a,a=t[a];return n}const vg=e=>e.__isTeleport,Ls=e=>e&&(e.disabled||e.disabled===""),Sc=e=>typeof SVGElement<"u"&&e instanceof SVGElement,ma=(e,t)=>{const n=e&&e.to;if(We(n))if(t){const s=t(n);return s||D(`Failed to locate Teleport target with selector "${n}". Note the target element must exist before the component is mounted - i.e. the target cannot be rendered by the component itself, and ideally should be outside of the entire Vue component tree.`),s}else return D("Current renderer does not support string target for Teleports. (missing querySelector renderer option)"),null;else return!n&&!Ls(e)&&D(`Invalid Teleport target: ${n}`),n},_g={__isTeleport:!0,process(e,t,n,s,o,r,a,l,c,u){const{mc:d,pc:f,pbc:p,o:{insert:h,querySelector:m,createText:_,createComment:k}}=u,x=Ls(t.props);let{shapeFlag:S,children:b,dynamicChildren:A}=t;if(Un&&(c=!1,A=null),e==null){const E=t.el=k("teleport start"),C=t.anchor=k("teleport end");h(E,n,s),h(C,n,s);const M=t.target=ma(t.props,m),I=t.targetAnchor=_("");M?(h(I,M),a=a||Sc(M)):x||D("Invalid Teleport target on mount:",M,`(${typeof M})`);const N=(ne,ce)=>{S&16&&d(b,ne,ce,o,r,a,l,c)};x?N(n,C):M&&N(M,I)}else{t.el=e.el;const E=t.anchor=e.anchor,C=t.target=e.target,M=t.targetAnchor=e.targetAnchor,I=Ls(e.props),N=I?n:C,ne=I?E:M;if(a=a||Sc(C),A?(p(e.dynamicChildren,A,N,o,r,a,l),qr(e,t,!0)):c||f(e,t,N,ne,o,r,a,l,!1),x)I||lr(t,n,E,u,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const ce=t.target=ma(t.props,m);ce?lr(t,ce,null,u,0):D("Invalid Teleport target on update:",C,`(${typeof C})`)}else I&&lr(t,C,M,u,1)}Ef(t)},remove(e,t,n,s,{um:o,o:{remove:r}},a){const{shapeFlag:l,children:c,anchor:u,targetAnchor:d,target:f,props:p}=e;if(f&&r(d),(a||!Ls(p))&&(r(u),l&16))for(let h=0;h<c.length;h++){const m=c[h];o(m,t,n,!0,!!m.dynamicChildren)}},move:lr,hydrate:bg};function lr(e,t,n,{o:{insert:s},m:o},r=2){r===0&&s(e.targetAnchor,t,n);const{el:a,anchor:l,shapeFlag:c,children:u,props:d}=e,f=r===2;if(f&&s(a,t,n),(!f||Ls(d))&&c&16)for(let p=0;p<u.length;p++)o(u[p],t,n,2);f&&s(l,t,n)}function bg(e,t,n,s,o,r,{o:{nextSibling:a,parentNode:l,querySelector:c}},u){const d=t.target=ma(t.props,c);if(d){const f=d._lpa||d.firstChild;if(t.shapeFlag&16)if(Ls(t.props))t.anchor=u(a(e),t,l(e),n,s,o,r),t.targetAnchor=f;else{t.anchor=a(e);let p=f;for(;p;)if(p=a(p),p&&p.nodeType===8&&p.data==="teleport anchor"){t.targetAnchor=p,d._lpa=t.targetAnchor&&a(t.targetAnchor);break}u(f,t,d,n,s,o,r)}Ef(t)}return t.anchor&&a(t.anchor)}const wg=_g;function Ef(e){const t=e.ctx;if(t&&t.ut){let n=e.children[0].el;for(;n!==e.targetAnchor;)n.nodeType===1&&n.setAttribute("data-v-owner",t.uid),n=n.nextSibling;t.ut()}}const Ce=Symbol.for("v-fgt"),Yo=Symbol.for("v-txt"),it=Symbol.for("v-cmt"),kr=Symbol.for("v-stc"),go=[];let Vt=null;function w(e=!1){go.push(Vt=e?null:[])}function xg(){go.pop(),Vt=go[go.length-1]||null}let Po=1;function Ac(e){Po+=e}function Tf(e){return e.dynamicChildren=Po>0?Vt||Bs:null,xg(),Po>0&&Vt&&Vt.push(e),e}function $(e,t,n,s,o,r){return Tf(i(e,t,n,s,o,r,!0))}function H(e,t,n,s,o){return Tf(V(e,t,n,s,o,!0))}function an(e){return e?e.__v_isVNode===!0:!1}function ss(e,t){return t.shapeFlag&6&&Is.has(t.type)?(e.shapeFlag&=-257,t.shapeFlag&=-513,!1):e.type===t.type&&e.key===t.key}const kg=(...e)=>Sg(...e),hi="__vInternal",Cf=({key:e})=>e??null,Sr=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?We(e)||Fe(e)||de(e)?{i:Ze,r:e,k:t,f:!!n}:e:null);function i(e,t=null,n=null,s=0,o=null,r=e===Ce?0:1,a=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Cf(t),ref:t&&Sr(t),scopeId:ui,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:o,dynamicChildren:null,appContext:null,ctx:Ze};return l?(kl(c,n),r&128&&e.normalize(c)):n&&(c.shapeFlag|=We(n)?8:16),c.key!==c.key&&D("VNode created with invalid key (NaN). VNode type:",c.type),Po>0&&!a&&Vt&&(c.patchFlag>0||r&6)&&c.patchFlag!==32&&Vt.push(c),c}const V=kg;function Sg(e,t=null,n=null,s=0,o=null,r=!1){if((!e||e===q0)&&(e||D(`Invalid vnode type when creating vnode: ${e}.`),e=it),an(e)){const l=ln(e,t,!0);return n&&kl(l,n),Po>0&&!r&&Vt&&(l.shapeFlag&6?Vt[Vt.indexOf(e)]=l:Vt.push(l)),l.patchFlag|=-2,l}if(If(e)&&(e=e.__vccOpts),t){t=le(t);let{class:l,style:c}=t;l&&!We(l)&&(t.class=Re(l)),Oe(c)&&(Mr(c)&&!re(c)&&(c=je({},c)),t.style=Xe(c))}const a=We(e)?1:af(e)?128:vg(e)?64:Oe(e)?4:de(e)?2:0;return a&4&&Mr(e)&&(e=he(e),D("Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",`
Component that was made reactive: `,e)),i(e,t,n,s,o,a,r,!0)}function le(e){return e?Mr(e)||hi in e?je({},e):e:null}function ln(e,t,n=!1){const{props:s,ref:o,patchFlag:r,children:a}=e,l=t?zt(s||{},t):s;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&Cf(l),ref:t&&t.ref?n&&o?re(o)?o.concat(Sr(t)):[o,Sr(t)]:Sr(t):o,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:r===-1&&re(a)?a.map($f):a,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Ce?r===-1?16:r|16:r,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&ln(e.ssContent),ssFallback:e.ssFallback&&ln(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function $f(e){const t=ln(e);return re(e.children)&&(t.children=e.children.map($f)),t}function y(e=" ",t=0){return V(Yo,null,e,t)}function ge(e="",t=!1){return t?(w(),H(it,null,e)):V(it,null,e)}function Wt(e){return e==null||typeof e=="boolean"?V(it):re(e)?V(Ce,null,e.slice()):typeof e=="object"?$n(e):V(Yo,null,String(e))}function $n(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:ln(e)}function kl(e,t){let n=0;const{shapeFlag:s}=e;if(t==null)t=null;else if(re(t))n=16;else if(typeof t=="object")if(s&65){const o=t.default;o&&(o._c&&(o._d=!1),kl(e,o()),o._c&&(o._d=!0));return}else{n=32;const o=t._;!o&&!(hi in t)?t._ctx=Ze:o===3&&Ze&&(Ze.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else de(t)?(t={default:t,_ctx:Ze},n=32):(t=String(t),s&64?(n=16,t=[y(t)]):n=8);e.children=t,e.shapeFlag|=n}function zt(...e){const t={};for(let n=0;n<e.length;n++){const s=e[n];for(const o in s)if(o==="class")t.class!==s.class&&(t.class=Re([t.class,s.class]));else if(o==="style")t.style=Xe([t.style,s.style]);else if(Vo(o)){const r=t[o],a=s[o];a&&r!==a&&!(re(r)&&r.includes(a))&&(t[o]=r?[].concat(r,a):a)}else o!==""&&(t[o]=s[o])}return t}function It(e,t,n,s=null){Mt(e,t,7,[n,s])}const Ag=_f();let Eg=0;function Tg(e,t,n){const s=e.type,o=(t?t.appContext:e.appContext)||Ag,r={uid:Eg++,vnode:e,type:s,parent:t,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,scope:new Cd(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(o.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:wf(s,o),emitsOptions:nf(s,o),emit:null,emitted:null,propsDefaults:Le,inheritAttrs:s.inheritAttrs,ctx:Le,data:Le,props:Le,attrs:Le,slots:Le,refs:Le,setupState:Le,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx=H0(r),r.root=t?t.root:r,r.emit=k0.bind(null,r),e.ce&&e.ce(r),r}let Qe=null;const $t=()=>Qe||Ze;let Sl,$s,Ec="__VUE_INSTANCE_SETTERS__";($s=Pr()[Ec])||($s=Pr()[Ec]=[]),$s.push(e=>Qe=e),Sl=e=>{$s.length>1?$s.forEach(t=>t(e)):$s[0](e)};const js=e=>{Sl(e),e.scope.on()},ys=()=>{Qe&&Qe.scope.off(),Sl(null)},Cg=Hn("slot,component");function ga(e,t){const n=t.isNativeTag||wd;(Cg(e)||n(e))&&D("Do not use built-in or reserved HTML elements as component id: "+e)}function Ff(e){return e.vnode.shapeFlag&4}let Io=!1;function $g(e,t=!1){Io=t;const{props:n,children:s}=e.vnode,o=Ff(e);sg(e,n,o,t),fg(e,s);const r=o?Fg(e,t):void 0;return Io=!1,r}function Fg(e,t){var n;const s=e.type;{if(s.name&&ga(s.name,e.appContext.config),s.components){const r=Object.keys(s.components);for(let a=0;a<r.length;a++)ga(r[a],e.appContext.config)}if(s.directives){const r=Object.keys(s.directives);for(let a=0;a<r.length;a++)cf(r[a])}s.compilerOptions&&Og()&&D('"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.')}e.accessCache=Object.create(null),e.proxy=ii(new Proxy(e.ctx,yf)),V0(e);const{setup:o}=s;if(o){const r=e.setupContext=o.length>1?Pf(e):null;js(e),xs();const a=vn(o,e,0,[lo(e.props),r]);if(ks(),ys(),sl(a)){if(a.then(ys,ys),t)return a.then(l=>{Tc(e,l,t)}).catch(l=>{ai(l,e,0)});if(e.asyncDep=a,!e.suspense){const l=(n=s.name)!=null?n:"Anonymous";D(`Component <${l}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`)}}else Tc(e,a,t)}else Of(e,t)}function Tc(e,t,n){de(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Oe(t)?(an(t)&&D("setup() should not return VNodes directly - return a render function instead."),e.devtoolsRawSetupState=t,e.setupState=Hd(t),z0(e)):t!==void 0&&D(`setup() should return an object. Received: ${t===null?"null":typeof t}`),Of(e,n)}let ya;const Og=()=>!ya;function Of(e,t,n){const s=e.type;if(!e.render){if(!t&&ya&&!s.render){const o=s.template||wl(e).template;if(o){fn(e,"compile");const{isCustomElement:r,compilerOptions:a}=e.appContext.config,{delimiters:l,compilerOptions:c}=s,u=je(je({isCustomElement:r,delimiters:l},a),c);s.render=ya(o,u),pn(e,"compile")}}e.render=s.render||_t}js(e),xs(),Q0(e),ks(),ys(),!s.render&&e.render===_t&&!t&&(s.template?D('Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'):D("Component is missing template or render function."))}function Pg(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,n){return Lr(),lt(e,"get","$attrs"),t[n]},set(){return D("setupContext.attrs is readonly."),!1},deleteProperty(){return D("setupContext.attrs is readonly."),!1}}))}function Ig(e){return e.slotsProxy||(e.slotsProxy=new Proxy(e.slots,{get(t,n){return lt(e,"get","$slots"),t[n]}}))}function Pf(e){return Object.freeze({get attrs(){return Pg(e)},get slots(){return Ig(e)},get emit(){return(n,...s)=>e.emit(n,...s)},expose:n=>{if(e.exposed&&D("expose() should be called only once per setup()."),n!=null){let s=typeof n;s==="object"&&(re(n)?s="array":Fe(n)&&(s="ref")),s!=="object"&&D(`expose() should be passed a plain object, received ${s}.`)}e.exposed=n||{}}})}function mi(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Hd(ii(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in gs)return gs[n](e)},has(t,n){return n in t||n in gs}}))}const Ug=/(?:^|[-_])(\w)/g,Bg=e=>e.replace(Ug,t=>t.toUpperCase()).replace(/[-_]/g,"");function Uo(e,t=!0){return de(e)?e.displayName||e.name:e.name||t&&e.__name}function gi(e,t,n=!1){let s=Uo(t);if(!s&&t.__file){const o=t.__file.match(/([^/\\]+)\.\w+$/);o&&(s=o[1])}if(!s&&e&&e.parent){const o=r=>{for(const a in r)if(r[a]===t)return a};s=o(e.components||e.parent.type.components)||o(e.appContext.components)}return s?Bg(s):n?"App":"Anonymous"}function If(e){return de(e)&&"__vccOpts"in e}const P=(e,t)=>t0(e,t,Io);function Je(e,t,n){const s=arguments.length;return s===2?Oe(t)&&!re(t)?an(t)?V(e,null,[t]):V(e,t):V(e,null,t):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&an(n)&&(n=[n]),V(e,t,n))}const Mg=Symbol.for("v-scx"),Dg=()=>{{const e=R(Mg);return e||D("Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."),e}};function Ti(e){return!!(e&&e.__v_isShallow)}function Lg(){if(typeof window>"u")return;const e={style:"color:#3ba776"},t={style:"color:#0b1bc9"},n={style:"color:#b62e24"},s={style:"color:#9d288c"},o={header(f){return Oe(f)?f.__isVue?["div",e,"VueInstance"]:Fe(f)?["div",{},["span",e,d(f)],"<",l(f.value),">"]:hs(f)?["div",{},["span",e,Ti(f)?"ShallowReactive":"Reactive"],"<",l(f),`>${Wn(f)?" (readonly)":""}`]:Wn(f)?["div",{},["span",e,Ti(f)?"ShallowReadonly":"Readonly"],"<",l(f),">"]:null:null},hasBody(f){return f&&f.__isVue},body(f){if(f&&f.__isVue)return["div",{},...r(f.$)]}};function r(f){const p=[];f.type.props&&f.props&&p.push(a("props",he(f.props))),f.setupState!==Le&&p.push(a("setup",f.setupState)),f.data!==Le&&p.push(a("data",he(f.data)));const h=c(f,"computed");h&&p.push(a("computed",h));const m=c(f,"inject");return m&&p.push(a("injected",m)),p.push(["div",{},["span",{style:s.style+";opacity:0.66"},"$ (internal): "],["object",{object:f}]]),p}function a(f,p){return p=je({},p),Object.keys(p).length?["div",{style:"line-height:1.25em;margin-bottom:0.6em"},["div",{style:"color:#476582"},f],["div",{style:"padding-left:1.25em"},...Object.keys(p).map(h=>["div",{},["span",s,h+": "],l(p[h],!1)])]]:["span",{}]}function l(f,p=!0){return typeof f=="number"?["span",t,f]:typeof f=="string"?["span",n,JSON.stringify(f)]:typeof f=="boolean"?["span",s,f]:Oe(f)?["object",{object:p?he(f):f}]:["span",n,String(f)]}function c(f,p){const h=f.type;if(de(h))return;const m={};for(const _ in f.ctx)u(h,_,p)&&(m[_]=f.ctx[_]);return m}function u(f,p,h){const m=f[h];if(re(m)&&m.includes(p)||Oe(m)&&p in m||f.extends&&u(f.extends,p,h)||f.mixins&&f.mixins.some(_=>u(_,p,h)))return!0}function d(f){return Ti(f)?"ShallowRef":f.effect?"ComputedRef":"Ref"}window.devtoolsFormatters?window.devtoolsFormatters.push(o):window.devtoolsFormatters=[o]}const Hr="3.3.4",Rg="http://www.w3.org/2000/svg",os=typeof document<"u"?document:null,Cc=os&&os.createElement("template"),Ng={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,s)=>{const o=t?os.createElementNS(Rg,e):os.createElement(e,n?{is:n}:void 0);return e==="select"&&s&&s.multiple!=null&&o.setAttribute("multiple",s.multiple),o},createText:e=>os.createTextNode(e),createComment:e=>os.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>os.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,s,o,r){const a=n?n.previousSibling:t.lastChild;if(o&&(o===r||o.nextSibling))for(;t.insertBefore(o.cloneNode(!0),n),!(o===r||!(o=o.nextSibling)););else{Cc.innerHTML=s?`<svg>${e}</svg>`:e;const l=Cc.content;if(s){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}t.insertBefore(l,n)}return[a?a.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function jg(e,t,n){const s=e._vtc;s&&(t=(t?[t,...s]:[...s]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function Wg(e,t,n){const s=e.style,o=We(n);if(n&&!o){if(t&&!We(t))for(const r in t)n[r]==null&&va(s,r,"");for(const r in n)va(s,r,n[r])}else{const r=s.display;o?t!==n&&(s.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(s.display=r)}}const qg=/[^\\];\s*$/,$c=/\s*!important$/;function va(e,t,n){if(re(n))n.forEach(s=>va(e,t,s));else if(n==null&&(n=""),qg.test(n)&&D(`Unexpected semicolon at the end of '${t}' style value: '${n}'`),t.startsWith("--"))e.setProperty(t,n);else{const s=Hg(e,t);$c.test(n)?e.setProperty(bn(s),n.replace($c,""),"important"):e[s]=n}}const Fc=["Webkit","Moz","ms"],Ci={};function Hg(e,t){const n=Ci[t];if(n)return n;let s=sn(t);if(s!=="filter"&&s in e)return Ci[t]=s;s=bs(s);for(let o=0;o<Fc.length;o++){const r=Fc[o]+s;if(r in e)return Ci[t]=r}return t}const Oc="http://www.w3.org/1999/xlink";function Vg(e,t,n,s,o){if(s&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(Oc,t.slice(6,t.length)):e.setAttributeNS(Oc,t,n);else{const r=mm(t);n==null||r&&!Ed(n)?e.removeAttribute(t):e.setAttribute(t,r?"":n)}}function zg(e,t,n,s,o,r,a){if(t==="innerHTML"||t==="textContent"){s&&a(s,o,r),e[t]=n??"";return}const l=e.tagName;if(t==="value"&&l!=="PROGRESS"&&!l.includes("-")){e._value=n;const u=l==="OPTION"?e.getAttribute("value"):e.value,d=n??"";u!==d&&(e.value=d),n==null&&e.removeAttribute(t);return}let c=!1;if(n===""||n==null){const u=typeof e[t];u==="boolean"?n=Ed(n):n==null&&u==="string"?(n="",c=!0):u==="number"&&(n=0,c=!0)}try{e[t]=n}catch(u){c||D(`Failed setting prop "${t}" on <${l.toLowerCase()}>: value ${n} is invalid.`,u)}c&&e.removeAttribute(t)}function Kg(e,t,n,s){e.addEventListener(t,n,s)}function Gg(e,t,n,s){e.removeEventListener(t,n,s)}function Yg(e,t,n,s,o=null){const r=e._vei||(e._vei={}),a=r[t];if(s&&a)a.value=s;else{const[l,c]=Qg(t);if(s){const u=r[t]=Xg(s,o);Kg(e,l,u,c)}else a&&(Gg(e,l,a,c),r[t]=void 0)}}const Pc=/(?:Once|Passive|Capture)$/;function Qg(e){let t;if(Pc.test(e)){t={};let s;for(;s=e.match(Pc);)e=e.slice(0,e.length-s[0].length),t[s[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):bn(e.slice(2)),t]}let $i=0;const Zg=Promise.resolve(),Jg=()=>$i||(Zg.then(()=>$i=0),$i=Date.now());function Xg(e,t){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Mt(ey(s,n.value),t,5,[s])};return n.value=e,n.attached=Jg(),n}function ey(e,t){if(re(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(s=>o=>!o._stopped&&s&&s(o))}else return t}const Ic=/^on[a-z]/,ty=(e,t,n,s,o=!1,r,a,l,c)=>{t==="class"?jg(e,s,o):t==="style"?Wg(e,n,s):Vo(t)?Fr(t)||Yg(e,t,n,s,a):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):ny(e,t,s,o))?zg(e,t,s,r,a,l,c):(t==="true-value"?e._trueValue=s:t==="false-value"&&(e._falseValue=s),Vg(e,t,s,o))};function ny(e,t,n,s){return s?!!(t==="innerHTML"||t==="textContent"||t in e&&Ic.test(t)&&de(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Ic.test(t)&&We(n)?!1:t in e}const An="transition",Qs="animation",Uf={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},sy=je({},P0,Uf),Zn=(e,t=[])=>{re(e)?e.forEach(n=>n(...t)):e&&e(...t)},Uc=e=>e?re(e)?e.some(t=>t.length>1):e.length>1:!1;function oy(e){const t={};for(const Q in e)Q in Uf||(t[Q]=e[Q]);if(e.css===!1)return t;const{name:n="v",type:s,duration:o,enterFromClass:r=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:l=`${n}-enter-to`,appearFromClass:c=r,appearActiveClass:u=a,appearToClass:d=l,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:p=`${n}-leave-active`,leaveToClass:h=`${n}-leave-to`}=e,m=ry(o),_=m&&m[0],k=m&&m[1],{onBeforeEnter:x,onEnter:S,onEnterCancelled:b,onLeave:A,onLeaveCancelled:E,onBeforeAppear:C=x,onAppear:M=S,onAppearCancelled:I=b}=t,N=(Q,me,ve)=>{Tn(Q,me?d:l),Tn(Q,me?u:a),ve&&ve()},ne=(Q,me)=>{Q._isLeaving=!1,Tn(Q,f),Tn(Q,h),Tn(Q,p),me&&me()},ce=Q=>(me,ve)=>{const be=Q?M:S,Be=()=>N(me,Q,ve);Zn(be,[me,Be]),Bc(()=>{Tn(me,Q?c:r),hn(me,Q?d:l),Uc(be)||Mc(me,s,_,Be)})};return je(t,{onBeforeEnter(Q){Zn(x,[Q]),hn(Q,r),hn(Q,a)},onBeforeAppear(Q){Zn(C,[Q]),hn(Q,c),hn(Q,u)},onEnter:ce(!1),onAppear:ce(!0),onLeave(Q,me){Q._isLeaving=!0;const ve=()=>ne(Q,me);hn(Q,f),Mf(),hn(Q,p),Bc(()=>{Q._isLeaving&&(Tn(Q,f),hn(Q,h),Uc(A)||Mc(Q,s,k,ve))}),Zn(A,[Q,ve])},onEnterCancelled(Q){N(Q,!1),Zn(b,[Q])},onAppearCancelled(Q){N(Q,!0),Zn(I,[Q])},onLeaveCancelled(Q){ne(Q),Zn(E,[Q])}})}function ry(e){if(e==null)return null;if(Oe(e))return[Fi(e.enter),Fi(e.leave)];{const t=Fi(e);return[t,t]}}function Fi(e){const t=im(e);return i0(t,"<transition> explicit duration"),t}function hn(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e._vtc||(e._vtc=new Set)).add(t)}function Tn(e,t){t.split(/\s+/).forEach(s=>s&&e.classList.remove(s));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function Bc(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let iy=0;function Mc(e,t,n,s){const o=e._endId=++iy,r=()=>{o===e._endId&&s()};if(n)return setTimeout(r,n);const{type:a,timeout:l,propCount:c}=Bf(e,t);if(!a)return s();const u=a+"end";let d=0;const f=()=>{e.removeEventListener(u,p),r()},p=h=>{h.target===e&&++d>=c&&f()};setTimeout(()=>{d<c&&f()},l+1),e.addEventListener(u,p)}function Bf(e,t){const n=window.getComputedStyle(e),s=m=>(n[m]||"").split(", "),o=s(`${An}Delay`),r=s(`${An}Duration`),a=Dc(o,r),l=s(`${Qs}Delay`),c=s(`${Qs}Duration`),u=Dc(l,c);let d=null,f=0,p=0;t===An?a>0&&(d=An,f=a,p=r.length):t===Qs?u>0&&(d=Qs,f=u,p=c.length):(f=Math.max(a,u),d=f>0?a>u?An:Qs:null,p=d?d===An?r.length:c.length:0);const h=d===An&&/\b(transform|all)(,|$)/.test(s(`${An}Property`).toString());return{type:d,timeout:f,propCount:p,hasTransform:h}}function Dc(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,s)=>Lc(n)+Lc(e[s])))}function Lc(e){return Number(e.slice(0,-1).replace(",","."))*1e3}function Mf(){return document.body.offsetHeight}const Df=new WeakMap,Lf=new WeakMap,Rf={name:"TransitionGroup",props:je({},sy,{tag:String,moveClass:String}),setup(e,{slots:t}){const n=$t(),s=O0();let o,r;return fi(()=>{if(!o.length)return;const a=e.moveClass||`${e.name||"v"}-move`;if(!fy(o[0].el,n.vnode.el,a))return;o.forEach(cy),o.forEach(uy);const l=o.filter(dy);Mf(),l.forEach(c=>{const u=c.el,d=u.style;hn(u,a),d.transform=d.webkitTransform=d.transitionDuration="";const f=u._moveCb=p=>{p&&p.target!==u||(!p||/transform$/.test(p.propertyName))&&(u.removeEventListener("transitionend",f),u._moveCb=null,Tn(u,a))};u.addEventListener("transitionend",f)})}),()=>{const a=he(e),l=oy(a);let c=a.tag||Ce;o=r,r=t.default?uf(t.default()):[];for(let u=0;u<r.length;u++){const d=r[u];d.key!=null?Rr(d,aa(d,l,s,n)):D("<TransitionGroup> children must be keyed.")}if(o)for(let u=0;u<o.length;u++){const d=o[u];Rr(d,aa(d,l,s,n)),Df.set(d,d.el.getBoundingClientRect())}return V(c,null,r)}}},ay=e=>delete e.mode;Rf.props;const ly=Rf;function cy(e){const t=e.el;t._moveCb&&t._moveCb(),t._enterCb&&t._enterCb()}function uy(e){Lf.set(e,e.el.getBoundingClientRect())}function dy(e){const t=Df.get(e),n=Lf.get(e),s=t.left-n.left,o=t.top-n.top;if(s||o){const r=e.el.style;return r.transform=r.webkitTransform=`translate(${s}px,${o}px)`,r.transitionDuration="0s",e}}function fy(e,t,n){const s=e.cloneNode();e._vtc&&e._vtc.forEach(a=>{a.split(/\s+/).forEach(l=>l&&s.classList.remove(l))}),n.split(/\s+/).forEach(a=>a&&s.classList.add(a)),s.style.display="none";const o=t.nodeType===1?t:t.parentNode;o.appendChild(s);const{hasTransform:r}=Bf(s);return o.removeChild(s),r}const py=["ctrl","shift","alt","meta"],hy={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>py.some(n=>e[`${n}Key`]&&!t.includes(n))},my=(e,t)=>(n,...s)=>{for(let o=0;o<t.length;o++){const r=hy[t[o]];if(r&&r(n,t))return}return e(n,...s)},gy={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},cr=(e,t)=>n=>{if(!("key"in n))return;const s=bn(n.key);if(t.some(o=>o===s||gy[o]===s))return e(n)},Nf={beforeMount(e,{value:t},{transition:n}){e._vod=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):Zs(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:s}){!t!=!n&&(s?t?(s.beforeEnter(e),Zs(e,!0),s.enter(e)):s.leave(e,()=>{Zs(e,!1)}):Zs(e,t))},beforeUnmount(e,{value:t}){Zs(e,t)}};function Zs(e,t){e.style.display=t?e._vod:"none"}const yy=je({patchProp:ty},Ng);let Rc;function vy(){return Rc||(Rc=mg(yy))}const _y=(...e)=>{const t=vy().createApp(...e);by(t),wy(t);const{mount:n}=t;return t.mount=s=>{const o=xy(s);if(!o)return;const r=t._component;!de(r)&&!r.render&&!r.template&&(r.template=o.innerHTML),o.innerHTML="";const a=n(o,!1,o instanceof SVGElement);return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),a},t};function by(e){Object.defineProperty(e.config,"isNativeTag",{value:t=>Ad(t)||pm(t),writable:!1})}function wy(e){{const t=e.config.isCustomElement;Object.defineProperty(e.config,"isCustomElement",{get(){return t},set(){D("The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead.")}});const n=e.config.compilerOptions,s='The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';Object.defineProperty(e.config,"compilerOptions",{get(){return D(s),n},set(){D(s)}})}}function xy(e){if(We(e)){const t=document.querySelector(e);return t||D(`Failed to mount app: mount target selector "${e}" returned null.`),t}return window.ShadowRoot&&e instanceof window.ShadowRoot&&e.mode==="closed"&&D('mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'),e}function ky(){Lg()}ky();function _a(e,t={},n){for(const s in e){const o=e[s],r=n?`${n}:${s}`:s;typeof o=="object"&&o!==null?_a(o,t,r):typeof o=="function"&&(t[r]=o)}return t}const Sy={run:e=>e()},Ay=()=>Sy,jf=typeof console.createTask<"u"?console.createTask:Ay;function Ey(e,t){const n=t.shift(),s=jf(n);return e.reduce((o,r)=>o.then(()=>s.run(()=>r(...t))),Promise.resolve())}function Ty(e,t){const n=t.shift(),s=jf(n);return Promise.all(e.map(o=>s.run(()=>o(...t))))}function Oi(e,t){for(const n of[...e])n(t)}class Cy{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(t,n,s={}){if(!t||typeof n!="function")return()=>{};const o=t;let r;for(;this._deprecatedHooks[t];)r=this._deprecatedHooks[t],t=r.to;if(r&&!s.allowDeprecated){let a=r.message;a||(a=`${o} hook has been deprecated`+(r.to?`, please use ${r.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(a)||(console.warn(a),this._deprecatedMessages.add(a))}if(!n.name)try{Object.defineProperty(n,"name",{get:()=>"_"+t.replace(/\W+/g,"_")+"_hook_cb",configurable:!0})}catch{}return this._hooks[t]=this._hooks[t]||[],this._hooks[t].push(n),()=>{n&&(this.removeHook(t,n),n=void 0)}}hookOnce(t,n){let s,o=(...r)=>(typeof s=="function"&&s(),s=void 0,o=void 0,n(...r));return s=this.hook(t,o),s}removeHook(t,n){if(this._hooks[t]){const s=this._hooks[t].indexOf(n);s!==-1&&this._hooks[t].splice(s,1),this._hooks[t].length===0&&delete this._hooks[t]}}deprecateHook(t,n){this._deprecatedHooks[t]=typeof n=="string"?{to:n}:n;const s=this._hooks[t]||[];delete this._hooks[t];for(const o of s)this.hook(t,o)}deprecateHooks(t){Object.assign(this._deprecatedHooks,t);for(const n in t)this.deprecateHook(n,t[n])}addHooks(t){const n=_a(t),s=Object.keys(n).map(o=>this.hook(o,n[o]));return()=>{for(const o of s.splice(0,s.length))o()}}removeHooks(t){const n=_a(t);for(const s in n)this.removeHook(s,n[s])}removeAllHooks(){for(const t in this._hooks)delete this._hooks[t]}callHook(t,...n){return n.unshift(t),this.callHookWith(Ey,t,...n)}callHookParallel(t,...n){return n.unshift(t),this.callHookWith(Ty,t,...n)}callHookWith(t,n,...s){const o=this._before||this._after?{name:n,args:s,context:{}}:void 0;this._before&&Oi(this._before,o);const r=t(n in this._hooks?[...this._hooks[n]]:[],s);return r instanceof Promise?r.finally(()=>{this._after&&o&&Oi(this._after,o)}):(this._after&&o&&Oi(this._after,o),r)}beforeEach(t){return this._before=this._before||[],this._before.push(t),()=>{if(this._before!==void 0){const n=this._before.indexOf(t);n!==-1&&this._before.splice(n,1)}}}afterEach(t){return this._after=this._after||[],this._after.push(t),()=>{if(this._after!==void 0){const n=this._after.indexOf(t);n!==-1&&this._after.splice(n,1)}}}}function $y(){return new Cy}function Fy(e){return Array.isArray(e)?e:[e]}const Wf=["title","script","style","noscript"],qf=["base","meta","link","style","script","noscript"],Oy=["title","titleTemplate","templateParams","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"],Py=["base","title","titleTemplate","bodyAttrs","htmlAttrs","templateParams"],Iy=["tagPosition","tagPriority","tagDuplicateStrategy","innerHTML","textContent"];function Hf(e){let t=9;for(let n=0;n<e.length;)t=Math.imul(t^e.charCodeAt(n++),9**9);return((t^t>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function ba(e){return Hf(`${e.tag}:${e.textContent||e.innerHTML||""}:${Object.entries(e.props).map(([t,n])=>`${t}:${String(n)}`).join(",")}`)}function Uy(e){let t=9;for(const n of e)for(let s=0;s<n.length;)t=Math.imul(t^n.charCodeAt(s++),9**9);return((t^t>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function Vf(e,t){const{props:n,tag:s}=e;if(Py.includes(s))return s;if(s==="link"&&n.rel==="canonical")return"canonical";if(n.charset)return"charset";const o=["id"];s==="meta"&&o.push("name","property","http-equiv");for(const r of o)if(typeof n[r]<"u"){const a=String(n[r]);return t&&!t(a)?!1:`${s}:${r}:${a}`}return!1}function Nc(e,t){return e==null?t||null:typeof e=="function"?e(t):e}function ur(e,t=!1,n){const{tag:s,$el:o}=e;o&&(Object.entries(s.props).forEach(([r,a])=>{a=String(a);const l=`attr:${r}`;if(r==="class"){if(!a)return;for(const c of a.split(" ")){const u=`${l}:${c}`;n&&n(e,u,()=>o.classList.remove(c)),o.classList.contains(c)||o.classList.add(c)}return}n&&!r.startsWith("data-h-")&&n(e,l,()=>o.removeAttribute(r)),(t||o.getAttribute(r)!==a)&&o.setAttribute(r,a)}),Wf.includes(s.tag)&&(s.textContent&&s.textContent!==o.textContent?o.textContent=s.textContent:s.innerHTML&&s.innerHTML!==o.innerHTML&&(o.innerHTML=s.innerHTML)))}let Js=!1;async function zf(e,t={}){var p,h;const n={shouldRender:!0};if(await e.hooks.callHook("dom:beforeRender",n),!n.shouldRender)return;const s=t.document||e.resolvedOptions.document||window.document,o=(await e.resolveTags()).map(l);if(e.resolvedOptions.experimentalHashHydration&&(Js=Js||e._hash||!1,Js)){const m=Uy(o.map(_=>_.tag._h));if(Js===m)return;Js=m}const r=e._popSideEffectQueue();e.headEntries().map(m=>m._sde).forEach(m=>{Object.entries(m).forEach(([_,k])=>{r[_]=k})});const a=(m,_,k)=>{_=`${m.renderId}:${_}`,m.entry&&(m.entry._sde[_]=k),delete r[_]};function l(m){const _=e.headEntries().find(x=>x._i===m._e),k={renderId:m._d||ba(m),$el:null,shouldRender:!0,tag:m,entry:_,markSideEffect:(x,S)=>a(k,x,S)};return k}const c=[],u={body:[],head:[]},d=m=>{e._elMap[m.renderId]=m.$el,c.push(m),a(m,"el",()=>{var _;(_=m.$el)==null||_.remove(),delete e._elMap[m.renderId]})};for(const m of o){if(await e.hooks.callHook("dom:beforeRenderTag",m),!m.shouldRender)continue;const{tag:_}=m;if(_.tag==="title"){s.title=_.textContent||"",c.push(m);continue}if(_.tag==="htmlAttrs"||_.tag==="bodyAttrs"){m.$el=s[_.tag==="htmlAttrs"?"documentElement":"body"],ur(m,!1,a),c.push(m);continue}if(m.$el=e._elMap[m.renderId],!m.$el&&_.key&&(m.$el=s.querySelector(`${(p=_.tagPosition)!=null&&p.startsWith("body")?"body":"head"} > ${_.tag}[data-h-${_._h}]`)),m.$el){m.tag._d&&ur(m),d(m);continue}u[(h=_.tagPosition)!=null&&h.startsWith("body")?"body":"head"].push(m)}const f={bodyClose:void 0,bodyOpen:void 0,head:void 0};Object.entries(u).forEach(([m,_])=>{var x;if(!_.length)return;const k=(x=s==null?void 0:s[m])==null?void 0:x.children;if(k){for(const S of[...k].reverse()){const b=S.tagName.toLowerCase();if(!qf.includes(b))continue;const A=S.getAttributeNames().reduce((I,N)=>({...I,[N]:S.getAttribute(N)}),{}),E={tag:b,props:A};S.innerHTML&&(E.innerHTML=S.innerHTML);const C=ba(E);let M=_.findIndex(I=>(I==null?void 0:I.renderId)===C);if(M===-1){const I=Vf(E);M=_.findIndex(N=>(N==null?void 0:N.tag._d)&&N.tag._d===I)}if(M!==-1){const I=_[M];I.$el=S,ur(I),d(I),delete _[M]}}_.forEach(S=>{const b=S.tag.tagPosition||"head";f[b]=f[b]||s.createDocumentFragment(),S.$el||(S.$el=s.createElement(S.tag.tag),ur(S,!0)),f[b].appendChild(S.$el),d(S)})}}),f.head&&s.head.appendChild(f.head),f.bodyOpen&&s.body.insertBefore(f.bodyOpen,s.body.firstChild),f.bodyClose&&s.body.appendChild(f.bodyClose);for(const m of c)await e.hooks.callHook("dom:renderTag",m);Object.values(r).forEach(m=>m())}let Pi=null;async function Kf(e,t={}){function n(){return Pi=null,zf(e,t)}const s=t.delayFn||(o=>setTimeout(o,10));return Pi=Pi||new Promise(o=>s(()=>o(n())))}function By(e){return{hooks:{"entries:updated":function(t){if(typeof(e==null?void 0:e.document)>"u"&&typeof window>"u")return;let n=e==null?void 0:e.delayFn;!n&&typeof requestAnimationFrame<"u"&&(n=requestAnimationFrame),Kf(t,{document:(e==null?void 0:e.document)||window.document,delayFn:n})}}}}function My(e){var t;return((t=e==null?void 0:e.head.querySelector('meta[name="unhead:ssr"]'))==null?void 0:t.getAttribute("content"))||!1}const jc={critical:2,high:9,low:12,base:-1,title:1,meta:10};function Wc(e){if(typeof e.tagPriority=="number")return e.tagPriority;if(e.tag==="meta"){if(e.props.charset)return-2;if(e.props["http-equiv"]==="content-security-policy")return 0}const t=e.tagPriority||e.tag;return t in jc?jc[t]:10}const Dy=[{prefix:"before:",offset:-1},{prefix:"after:",offset:1}];function Ly(){return{hooks:{"tags:resolve":e=>{const t=n=>{var s;return(s=e.tags.find(o=>o._d===n))==null?void 0:s._p};for(const{prefix:n,offset:s}of Dy)for(const o of e.tags.filter(r=>typeof r.tagPriority=="string"&&r.tagPriority.startsWith(n))){const r=t(o.tagPriority.replace(n,""));typeof r<"u"&&(o._p=r+s)}e.tags.sort((n,s)=>n._p-s._p).sort((n,s)=>Wc(n)-Wc(s))}}}}function Ry(){return{hooks:{"tags:resolve":e=>{const{tags:t}=e;let n=t.findIndex(o=>o.tag==="titleTemplate");const s=t.findIndex(o=>o.tag==="title");if(s!==-1&&n!==-1){const o=Nc(t[n].textContent,t[s].textContent);o!==null?t[s].textContent=o||t[s].textContent:delete t[s]}else if(n!==-1){const o=Nc(t[n].textContent);o!==null&&(t[n].textContent=o,t[n].tag="title",n=-1)}n!==-1&&delete t[n],e.tags=t.filter(Boolean)}}}}function Ny(){return{hooks:{"tag:normalise":function({tag:e}){typeof e.props.body<"u"&&(e.tagPosition="bodyClose",delete e.props.body)}}}}const jy=["link","style","script","noscript"];function Wy(){return{hooks:{"tag:normalise":({tag:e,resolvedOptions:t})=>{t.experimentalHashHydration===!0&&(e._h=ba(e)),e.key&&jy.includes(e.tag)&&(e._h=Hf(e.key),e.props[`data-h-${e._h}`]="")}}}}const qc=["script","link","bodyAttrs"];function qy(){const e=(t,n)=>{const s={},o={};Object.entries(n.props).forEach(([a,l])=>{a.startsWith("on")&&typeof l=="function"?o[a]=l:s[a]=l});let r;return t==="dom"&&n.tag==="script"&&typeof s.src=="string"&&typeof o.onload<"u"&&(r=s.src,delete s.src),{props:s,eventHandlers:o,delayedSrc:r}};return{hooks:{"ssr:render":function(t){t.tags=t.tags.map(n=>(!qc.includes(n.tag)||!Object.entries(n.props).find(([s,o])=>s.startsWith("on")&&typeof o=="function")||(n.props=e("ssr",n).props),n))},"dom:beforeRenderTag":function(t){if(!qc.includes(t.tag.tag)||!Object.entries(t.tag.props).find(([r,a])=>r.startsWith("on")&&typeof a=="function"))return;const{props:n,eventHandlers:s,delayedSrc:o}=e("dom",t.tag);Object.keys(s).length&&(t.tag.props=n,t.tag._eventHandlers=s,t.tag._delayedSrc=o)},"dom:renderTag":function(t){const n=t.$el;if(!t.tag._eventHandlers||!n)return;const s=t.tag.tag==="bodyAttrs"&&typeof window<"u"?window:n;Object.entries(t.tag._eventHandlers).forEach(([o,r])=>{const a=`${t.tag._d||t.tag._p}:${o}`,l=o.slice(2).toLowerCase(),c=`data-h-${l}`;if(t.markSideEffect(a,()=>{}),n.hasAttribute(c))return;const u=r;n.setAttribute(c,""),s.addEventListener(l,u),t.entry&&(t.entry._sde[a]=()=>{s.removeEventListener(l,u),n.removeAttribute(c)})}),t.tag._delayedSrc&&n.setAttribute("src",t.tag._delayedSrc)}}}}const Hy=["templateParams","htmlAttrs","bodyAttrs"];function Vy(){return{hooks:{"tag:normalise":function({tag:e}){["hid","vmid","key"].forEach(s=>{e.props[s]&&(e.key=e.props[s],delete e.props[s])});const n=Vf(e)||(e.key?`${e.tag}:${e.key}`:!1);n&&(e._d=n)},"tags:resolve":function(e){const t={};e.tags.forEach(s=>{const o=(s.key?`${s.tag}:${s.key}`:s._d)||s._p,r=t[o];if(r){let l=s==null?void 0:s.tagDuplicateStrategy;if(!l&&Hy.includes(s.tag)&&(l="merge"),l==="merge"){const c=r.props;["class","style"].forEach(u=>{s.props[u]&&c[u]&&(u==="style"&&!c[u].endsWith(";")&&(c[u]+=";"),s.props[u]=`${c[u]} ${s.props[u]}`)}),t[o].props={...c,...s.props};return}else if(s._e===r._e){r._duped=r._duped||[],s._d=`${r._d}:${r._duped.length+1}`,r._duped.push(s);return}}const a=Object.keys(s.props).length+(s.innerHTML?1:0)+(s.textContent?1:0);if(qf.includes(s.tag)&&a===0){delete t[o];return}t[o]=s});const n=[];Object.values(t).forEach(s=>{const o=s._duped;delete s._duped,n.push(s),o&&n.push(...o)}),e.tags=n}}}}function dr(e,t){function n(r){if(["s","pageTitle"].includes(r))return t.pageTitle;let a;return r.includes(".")?a=r.split(".").reduce((l,c)=>l&&l[c]||void 0,t):a=t[r],typeof a<"u"?a||"":!1}let s=e;try{s=decodeURI(e)}catch{}return(s.match(/%(\w+\.+\w+)|%(\w+)/g)||[]).sort().reverse().forEach(r=>{const a=n(r.slice(1));typeof a=="string"&&(e=e.replace(new RegExp(`\\${r}(\\W|$)`,"g"),`${a}$1`).trim())}),t.separator&&(e.endsWith(t.separator)&&(e=e.slice(0,-t.separator.length).trim()),e.startsWith(t.separator)&&(e=e.slice(t.separator.length).trim()),e=e.replace(new RegExp(`\\${t.separator}\\s*\\${t.separator}`,"g"),t.separator)),e}function zy(){return{hooks:{"tags:resolve":e=>{var r;const{tags:t}=e,n=(r=t.find(a=>a.tag==="title"))==null?void 0:r.textContent,s=t.findIndex(a=>a.tag==="templateParams"),o=s!==-1?t[s].props:{};o.pageTitle=o.pageTitle||n||"";for(const a of t)if(["titleTemplate","title"].includes(a.tag)&&typeof a.textContent=="string")a.textContent=dr(a.textContent,o);else if(a.tag==="meta"&&typeof a.props.content=="string")a.props.content=dr(a.props.content,o);else if(a.tag==="link"&&typeof a.props.href=="string")a.props.href=dr(a.props.href,o);else if(a.tag==="script"&&["application/json","application/ld+json"].includes(a.props.type)&&typeof a.innerHTML=="string")try{a.innerHTML=JSON.stringify(JSON.parse(a.innerHTML),(l,c)=>typeof c=="string"?dr(c,o):c)}catch{}e.tags=t.filter(a=>a.tag!=="templateParams")}}}}const Ky=typeof window<"u";let Gf;function Gy(e){return Gf=e}function Yy(){return Gf}async function Qy(e,t){const n={tag:e,props:{}};return e==="templateParams"?(n.props=t,n):["title","titleTemplate"].includes(e)?(n.textContent=t instanceof Promise?await t:t,n):typeof t=="string"?["script","noscript","style"].includes(e)?(e==="script"&&(/^(https?:)?\/\//.test(t)||t.startsWith("/"))?n.props.src=t:n.innerHTML=t,n):!1:(n.props=await Jy(e,{...t}),n.props.children&&(n.props.innerHTML=n.props.children),delete n.props.children,Object.keys(n.props).filter(s=>Iy.includes(s)).forEach(s=>{(!["innerHTML","textContent"].includes(s)||Wf.includes(n.tag))&&(n[s]=n.props[s]),delete n.props[s]}),["innerHTML","textContent"].forEach(s=>{if(n.tag==="script"&&typeof n[s]=="string"&&["application/ld+json","application/json"].includes(n.props.type))try{n[s]=JSON.parse(n[s])}catch{n[s]=""}typeof n[s]=="object"&&(n[s]=JSON.stringify(n[s]))}),n.props.class&&(n.props.class=Zy(n.props.class)),n.props.content&&Array.isArray(n.props.content)?n.props.content.map(s=>({...n,props:{...n.props,content:s}})):n)}function Zy(e){return typeof e=="object"&&!Array.isArray(e)&&(e=Object.keys(e).filter(t=>e[t])),(Array.isArray(e)?e.join(" "):e).split(" ").filter(t=>t.trim()).filter(Boolean).join(" ")}async function Jy(e,t){for(const n of Object.keys(t)){const s=n.startsWith("data-");t[n]instanceof Promise&&(t[n]=await t[n]),String(t[n])==="true"?t[n]=s?"true":"":String(t[n])==="false"&&(s?t[n]="false":delete t[n])}return t}const Xy=10;async function e1(e){const t=[];return Object.entries(e.resolvedInput).filter(([n,s])=>typeof s<"u"&&Oy.includes(n)).forEach(([n,s])=>{const o=Fy(s);t.push(...o.map(r=>Qy(n,r)).flat())}),(await Promise.all(t)).flat().filter(Boolean).map((n,s)=>(n._e=e._i,n._p=(e._i<<Xy)+s,n))}function t1(){return[Vy(),Ly(),zy(),Ry(),Wy(),qy(),Ny()]}function n1(e={}){return[By({document:e==null?void 0:e.document,delayFn:e==null?void 0:e.domDelayFn})]}function s1(e={}){const t=o1({...e,plugins:[...n1(e),...(e==null?void 0:e.plugins)||[]]});return e.experimentalHashHydration&&t.resolvedOptions.document&&(t._hash=My(t.resolvedOptions.document)),Gy(t),t}function o1(e={}){let t=[],n={},s=0;const o=$y();e!=null&&e.hooks&&o.addHooks(e.hooks),e.plugins=[...t1(),...(e==null?void 0:e.plugins)||[]],e.plugins.forEach(l=>l.hooks&&o.addHooks(l.hooks)),e.document=e.document||(Ky?document:void 0);const r=()=>o.callHook("entries:updated",a),a={resolvedOptions:e,headEntries(){return t},get hooks(){return o},use(l){l.hooks&&o.addHooks(l.hooks)},push(l,c){const u={_i:s++,input:l,_sde:{}};return c!=null&&c.mode&&(u._m=c==null?void 0:c.mode),c!=null&&c.transform&&(u._t=c==null?void 0:c.transform),t.push(u),r(),{dispose(){t=t.filter(d=>d._i!==u._i?!0:(n={...n,...d._sde||{}},d._sde={},r(),!1))},patch(d){t=t.map(f=>(f._i===u._i&&(u.input=f.input=d,r()),f))}}},async resolveTags(){const l={tags:[],entries:[...t]};await o.callHook("entries:resolve",l);for(const c of l.entries){const u=c._t||(d=>d);if(c.resolvedInput=u(c.resolvedInput||c.input),c.resolvedInput)for(const d of await e1(c)){const f={tag:d,entry:c,resolvedOptions:a.resolvedOptions};await o.callHook("tag:normalise",f),l.tags.push(f.tag)}}return await o.callHook("tags:resolve",l),l.tags},_popSideEffectQueue(){const l={...n};return n={},l},_elMap:{}};return a.hooks.callHook("init",a),a}function r1(e){return typeof e=="function"?e():O(e)}function Vr(e,t=""){if(e instanceof Promise)return e;const n=r1(e);return!e||!n?n:Array.isArray(n)?n.map(s=>Vr(s,t)):typeof n=="object"?Object.fromEntries(Object.entries(n).map(([s,o])=>s==="titleTemplate"||s.startsWith("on")?[s,O(o)]:[s,Vr(o,s)])):n}const i1=Hr.startsWith("3"),a1=typeof window<"u",Yf="usehead";function Al(){return $t()&&R(Yf)||Yy()}function l1(e){return{install(n){i1&&(n.config.globalProperties.$unhead=e,n.config.globalProperties.$head=e,n.provide(Yf,e))}}.install}function c1(e={}){const t=s1({...e,domDelayFn:n=>setTimeout(()=>ot(()=>n()),10),plugins:[u1(),...(e==null?void 0:e.plugins)||[]]});return t.install=l1(t),t}function u1(){return{hooks:{"entries:resolve":function(e){for(const t of e.entries)t.resolvedInput=Vr(t.input)}}}}function d1(e,t={}){const n=Al(),s=K(!1),o=K({});Ss(()=>{o.value=s.value?{}:Vr(e)});const r=n.push(o.value,t);return ye(o,l=>{r.patch(l)}),$t()&&(Go(()=>{r.dispose()}),pf(()=>{s.value=!0}),ff(()=>{s.value=!1})),r}function f1(e,t={}){return Al().push(e,t)}function Qf(e,t={}){var s;const n=Al();if(n){const o=a1||!!((s=n.resolvedOptions)!=null&&s.document);return t.mode==="server"&&o||t.mode==="client"&&!o?void 0:o?d1(e,t):f1(e,t)}}function p1(e,t){const n=c1(t||{}),s={unhead:n,install(o){Hr.startsWith("3")&&(o.config.globalProperties.$head=n,o.provide("usehead",n))},use(o){n.use(o)},resolveTags(){return n.resolveTags()},headEntries(){return n.headEntries()},headTags(){return n.resolveTags()},push(o,r){return n.push(o,r)},addEntry(o,r){return n.push(o,r)},addHeadObjs(o,r){return n.push(o,r)},addReactiveEntry(o,r){const a=Qf(o,r);return typeof a<"u"?a.dispose:()=>{}},removeHeadObjs(){},updateDOM(o,r){r?zf(n,{document:o}):Kf(n,{delayFn:a=>setTimeout(()=>a(),50),document:o})},internalHooks:n.hooks,hooks:{"before:dom":[],"resolved:tags":[],"resolved:entries":[]}};return n.addHeadObjs=s.addHeadObjs,n.updateDOM=s.updateDOM,n.hooks.hook("dom:beforeRender",o=>{for(const r of s.hooks["before:dom"])r()===!1&&(o.shouldRender=!1)}),e&&s.addHeadObjs(e),s}const yo=Symbol("v-click-clicks"),rs=Symbol("v-click-clicks-elements"),wa=Symbol("v-click-clicks-order-map"),vo=Symbol("v-click-clicks-disabled"),Zf=Symbol("slidev-slide-scale"),G=Symbol("slidev-slidev-context"),h1=Symbol("slidev-route"),m1=Symbol("slidev-slide-context"),ts="slidev-vclick-target",Ii="slidev-vclick-hidden",g1="slidev-vclick-fade",Ui="slidev-vclick-hidden-explicitly",Xs="slidev-vclick-current",fr="slidev-vclick-prior",y1=["localhost","127.0.0.1"];let v1=e=>crypto.getRandomValues(new Uint8Array(e)),_1=(e,t,n)=>{let s=(2<<Math.log(e.length-1)/Math.LN2)-1,o=-~(1.6*s*t/e.length);return(r=t)=>{let a="";for(;;){let l=n(o),c=o;for(;c--;)if(a+=e[l[c]&s]||"",a.length===r)return a}}},b1=(e,t=21)=>_1(e,t,v1),w1=(e=21)=>crypto.getRandomValues(new Uint8Array(e)).reduce((t,n)=>(n&=63,n<36?t+=n.toString(36):n<62?t+=(n-26).toString(36).toUpperCase():n>62?t+="-":t+="_",t),"");function Jf(e){return e=e??[],Array.isArray(e)?e:[e]}function xa(e,t){if(!e)return!1;const n=e.indexOf(t);return n>=0?(e.splice(n,1),!0):!1}function x1(...e){let t,n,s;e.length===1?(t=0,s=1,[n]=e):[t,n,s=1]=e;const o=[];let r=t;for(;r<n;)o.push(r),r+=s||1;return o}function k1(e){return e!=null}function S1(e,t){return Object.fromEntries(Object.entries(e).map(([n,s])=>t(n,s)).filter(k1))}const po={theme:"seriph",title:"Demystifying Unicode",titleTemplate:"%s - Slidev",addons:[],remoteAssets:!1,monaco:"dev",download:!1,export:{},info:`<h2>Unicode, Rust, quirks, and way too much detail.</h2>
`,highlighter:"shiki",lineNumbers:!0,colorSchema:"auto",routerMode:"history",aspectRatio:1.7777777777777777,canvasWidth:980,exportFilename:"",selectable:!1,themeConfig:{},fonts:{sans:['"PT Serif"',"ui-sans-serif","system-ui","-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial",'"Noto Sans"',"sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"','"Noto Color Emoji"'],serif:['"PT Serif"',"ui-serif","Georgia","Cambria",'"Times New Roman"',"Times","serif"],mono:['"PT Mono"',"ui-monospace","SFMono-Regular","Menlo","Monaco","Consolas",'"Liberation Mono"','"Courier New"',"monospace"],webfonts:["PT Serif","PT Mono"],provider:"google",local:[],italic:!0,weights:["400","700"]},favicon:"https://cdn.jsdelivr.net/gh/slidevjs/slidev/assets/favicon.png",drawings:{enabled:!0,persist:!1,presenterOnly:!1,syncAll:!0},plantUmlServer:"https://www.plantuml.com/plantuml",codeCopy:!0,record:"dev",css:"unocss",presenter:!0,htmlAttrs:{},transition:"slide-left",background:"https://source.unsplash.com/collection/94734566/1920x1080",class:"text-center",hideInToc:!0},$e=po,Bn=$e.aspectRatio??16/9,Mn=$e.canvasWidth??980,El=Math.ceil(Mn/Bn),Tl=P(()=>S1($e.themeConfig||{},(e,t)=>[`--slidev-theme-${e}`,t]));function Xf(){return Math.random().toString(36).replace(/[^a-z]+/g,"").substr(2,10)}function Lt(e,t,n){Object.defineProperty(e,t,{value:n,writable:!0,enumerable:!1})}const Es=qe({page:0,clicks:0});let A1=[],E1=[];Lt(Es,"$syncUp",!0);Lt(Es,"$syncDown",!0);Lt(Es,"$paused",!1);Lt(Es,"$onSet",e=>A1.push(e));Lt(Es,"$onPatch",e=>E1.push(e));Xf();Lt(Es,"$patch",async()=>!1);function ep(e,t,n=!1){const s=[];let o=!1,r=!1,a,l;const c=qe(t);function u(h){s.push(h)}function d(h,m){c[h]!==m&&(clearTimeout(a),o=!0,c[h]=m,a=setTimeout(()=>o=!1,0))}function f(h){o||(clearTimeout(l),r=!0,Object.entries(h).forEach(([m,_])=>{c[m]=_}),l=setTimeout(()=>r=!1,0))}function p(h){let m;n?n&&window.addEventListener("storage",k=>{k&&k.key===h&&k.newValue&&f(JSON.parse(k.newValue))}):(m=new BroadcastChannel(h),m.addEventListener("message",k=>f(k.data)));function _(){!n&&m&&!r?m.postMessage(he(c)):n&&!r&&window.localStorage.setItem(h,JSON.stringify(c)),o||s.forEach(k=>k(c))}if(ye(c,_,{deep:!0,flush:"sync"}),n){const k=window.localStorage.getItem(h);k&&f(JSON.parse(k))}}return{init:p,onPatch:u,patch:d,state:c}}const{init:T1,onPatch:C1,patch:eo,state:Bi}=ep(Es,{page:1,clicks:0,viewerPage:1,viewerClicks:0}),Ts=qe({});let $1=[],F1=[];Lt(Ts,"$syncUp",!0);Lt(Ts,"$syncDown",!0);Lt(Ts,"$paused",!1);Lt(Ts,"$onSet",e=>$1.push(e));Lt(Ts,"$onPatch",e=>F1.push(e));Xf();Lt(Ts,"$patch",async()=>!1);const{init:O1,onPatch:P1,patch:tp,state:zr}=ep(Ts,{},!1),I1="modulepreload",U1=function(e){return"/demystifying-unicode/"+e},Hc={},Dn=function(t,n,s){if(!n||n.length===0)return t();const o=document.getElementsByTagName("link");return Promise.all(n.map(r=>{if(r=U1(r),r in Hc)return;Hc[r]=!0;const a=r.endsWith(".css"),l=a?'[rel="stylesheet"]':"";if(!!s)for(let d=o.length-1;d>=0;d--){const f=o[d];if(f.href===r&&(!a||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${l}`))return;const u=document.createElement("link");if(u.rel=a?"stylesheet":I1,a||(u.as="script",u.crossOrigin=""),u.href=r,document.head.appendChild(u),a)return new Promise((d,f)=>{u.addEventListener("load",d),u.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>t())};function B1(e,t){let n,s,o;const r=K(!0),a=()=>{r.value=!0,o()};ye(e,a,{flush:"sync"});const l=typeof t=="function"?t:t.get,c=typeof t=="function"?void 0:t.set,u=pl((d,f)=>(s=d,o=f,{get(){return r.value&&(n=l(),r.value=!1),s(),n},set(p){c==null||c(p)}}));return Object.isExtensible(u)&&(u.trigger=a),u}function cn(e){return il()?($d(e),!0):!1}function Ke(e){return typeof e=="function"?e():O(e)}function M1(e){if(!Fe(e))return qe(e);const t=new Proxy({},{get(n,s,o){return O(Reflect.get(e.value,s,o))},set(n,s,o){return Fe(e.value[s])&&!Fe(o)?e.value[s].value=o:e.value[s]=o,!0},deleteProperty(n,s){return Reflect.deleteProperty(e.value,s)},has(n,s){return Reflect.has(e.value,s)},ownKeys(){return Object.keys(e.value)},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}}});return qe(t)}const Kt=typeof window<"u",D1=e=>typeof e<"u",L1=e=>e!=null,R1=Object.prototype.toString,ka=e=>R1.call(e)==="[object Object]",Sa=()=>+Date.now(),vs=()=>{},N1=j1();function j1(){var e;return Kt&&((e=window==null?void 0:window.navigator)==null?void 0:e.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent)}function W1(e,t){function n(...s){return new Promise((o,r)=>{Promise.resolve(e(()=>t.apply(this,s),{fn:t,thisArg:this,args:s})).then(o).catch(r)})}return n}const np=e=>e();function q1(e=np){const t=K(!0);function n(){t.value=!1}function s(){t.value=!0}const o=(...r)=>{t.value&&e(...r)};return{isActive:qt(t),pause:n,resume:s,eventFilter:o}}function H1(e,t){var n;if(typeof e=="number")return e+t;const s=((n=e.match(/^-?[0-9]+\.?[0-9]*/))==null?void 0:n[0])||"",o=e.slice(s.length),r=Number.parseFloat(s)+t;return Number.isNaN(r)?e:r+o}function sp(...e){if(e.length!==1)return Xm(...e);const t=e[0];return typeof t=="function"?qt(pl(()=>({get:t,set:vs}))):K(t)}var V1=Object.defineProperty,z1=Object.defineProperties,K1=Object.getOwnPropertyDescriptors,Vc=Object.getOwnPropertySymbols,G1=Object.prototype.hasOwnProperty,Y1=Object.prototype.propertyIsEnumerable,zc=(e,t,n)=>t in e?V1(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Q1=(e,t)=>{for(var n in t||(t={}))G1.call(t,n)&&zc(e,n,t[n]);if(Vc)for(var n of Vc(t))Y1.call(t,n)&&zc(e,n,t[n]);return e},Z1=(e,t)=>z1(e,K1(t));function J1(e){if(!Fe(e))return Qm(e);const t=Array.isArray(e.value)?new Array(e.value.length):{};for(const n in e.value)t[n]=pl(()=>({get(){return e.value[n]},set(s){if(Array.isArray(e.value)){const o=[...e.value];o[n]=s,e.value=o}else{const o=Z1(Q1({},e.value),{[n]:s});Object.setPrototypeOf(o,e.value),e.value=o}}}));return t}function op(e,t=!0){$t()?Vn(e):t?e():ot(e)}function X1(e){$t()&&pi(e)}function ev(e,t=1e3,n={}){const{immediate:s=!0,immediateCallback:o=!1}=n;let r=null;const a=K(!1);function l(){r&&(clearInterval(r),r=null)}function c(){a.value=!1,l()}function u(){const d=Ke(t);d<=0||(a.value=!0,o&&e(),l(),r=setInterval(e,d))}if(s&&Kt&&u(),Fe(t)||typeof t=="function"){const d=ye(t,()=>{a.value&&Kt&&u()});cn(d)}return cn(c),{isActive:a,pause:c,resume:u}}function tv(e,t,n={}){const{immediate:s=!0}=n,o=K(!1);let r=null;function a(){r&&(clearTimeout(r),r=null)}function l(){o.value=!1,a()}function c(...u){a(),o.value=!0,r=setTimeout(()=>{o.value=!1,r=null,e(...u)},Ke(t))}return s&&(o.value=!0,Kt&&c()),cn(l),{isPending:qt(o),start:c,stop:l}}function rp(e=!1,t={}){const{truthyValue:n=!0,falsyValue:s=!1}=t,o=Fe(e),r=K(e);function a(l){if(arguments.length)return r.value=l,r.value;{const c=Ke(n);return r.value=r.value===c?Ke(s):c,r.value}}return o?a:[r,a]}var Kc=Object.getOwnPropertySymbols,nv=Object.prototype.hasOwnProperty,sv=Object.prototype.propertyIsEnumerable,ov=(e,t)=>{var n={};for(var s in e)nv.call(e,s)&&t.indexOf(s)<0&&(n[s]=e[s]);if(e!=null&&Kc)for(var s of Kc(e))t.indexOf(s)<0&&sv.call(e,s)&&(n[s]=e[s]);return n};function rv(e,t,n={}){const s=n,{eventFilter:o=np}=s,r=ov(s,["eventFilter"]);return ye(e,W1(o,t),r)}var iv=Object.defineProperty,av=Object.defineProperties,lv=Object.getOwnPropertyDescriptors,Kr=Object.getOwnPropertySymbols,ip=Object.prototype.hasOwnProperty,ap=Object.prototype.propertyIsEnumerable,Gc=(e,t,n)=>t in e?iv(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,cv=(e,t)=>{for(var n in t||(t={}))ip.call(t,n)&&Gc(e,n,t[n]);if(Kr)for(var n of Kr(t))ap.call(t,n)&&Gc(e,n,t[n]);return e},uv=(e,t)=>av(e,lv(t)),dv=(e,t)=>{var n={};for(var s in e)ip.call(e,s)&&t.indexOf(s)<0&&(n[s]=e[s]);if(e!=null&&Kr)for(var s of Kr(e))t.indexOf(s)<0&&ap.call(e,s)&&(n[s]=e[s]);return n};function fv(e,t,n={}){const s=n,{eventFilter:o}=s,r=dv(s,["eventFilter"]),{eventFilter:a,pause:l,resume:c,isActive:u}=q1(o);return{stop:rv(e,t,uv(cv({},r),{eventFilter:a})),pause:l,resume:c,isActive:u}}function rt(e){var t;const n=Ke(e);return(t=n==null?void 0:n.$el)!=null?t:n}const et=Kt?window:void 0,lp=Kt?window.document:void 0,pv=Kt?window.navigator:void 0;function we(...e){let t,n,s,o;if(typeof e[0]=="string"||Array.isArray(e[0])?([n,s,o]=e,t=et):[t,n,s,o]=e,!t)return vs;Array.isArray(n)||(n=[n]),Array.isArray(s)||(s=[s]);const r=[],a=()=>{r.forEach(d=>d()),r.length=0},l=(d,f,p,h)=>(d.addEventListener(f,p,h),()=>d.removeEventListener(f,p,h)),c=ye(()=>[rt(t),Ke(o)],([d,f])=>{a(),d&&r.push(...n.flatMap(p=>s.map(h=>l(d,p,h,f))))},{immediate:!0,flush:"post"}),u=()=>{c(),a()};return cn(u),u}let Yc=!1;function hv(e,t,n={}){const{window:s=et,ignore:o=[],capture:r=!0,detectIframe:a=!1}=n;if(!s)return;N1&&!Yc&&(Yc=!0,Array.from(s.document.body.children).forEach(p=>p.addEventListener("click",vs)));let l=!0;const c=p=>o.some(h=>{if(typeof h=="string")return Array.from(s.document.querySelectorAll(h)).some(m=>m===p.target||p.composedPath().includes(m));{const m=rt(h);return m&&(p.target===m||p.composedPath().includes(m))}}),d=[we(s,"click",p=>{const h=rt(e);if(!(!h||h===p.target||p.composedPath().includes(h))){if(p.detail===0&&(l=!c(p)),!l){l=!0;return}t(p)}},{passive:!0,capture:r}),we(s,"pointerdown",p=>{const h=rt(e);h&&(l=!p.composedPath().includes(h)&&!c(p))},{passive:!0}),a&&we(s,"blur",p=>{setTimeout(()=>{var h;const m=rt(e);((h=s.document.activeElement)==null?void 0:h.tagName)==="IFRAME"&&!(m!=null&&m.contains(s.document.activeElement))&&t(p)},0)})].filter(Boolean);return()=>d.forEach(p=>p())}function mv(e){return typeof e=="function"?e:typeof e=="string"?t=>t.key===e:Array.isArray(e)?t=>e.includes(t.key):()=>!0}function gv(...e){let t,n,s={};e.length===3?(t=e[0],n=e[1],s=e[2]):e.length===2?typeof e[1]=="object"?(t=!0,n=e[0],s=e[1]):(t=e[0],n=e[1]):(t=!0,n=e[0]);const{target:o=et,eventName:r="keydown",passive:a=!1,dedupe:l=!1}=s,c=mv(t);return we(o,r,d=>{d.repeat&&Ke(l)||c(d)&&n(d)},a)}function yv(e={}){var t;const{window:n=et}=e,s=(t=e.document)!=null?t:n==null?void 0:n.document,o=B1(()=>null,()=>s==null?void 0:s.activeElement);return n&&(we(n,"blur",r=>{r.relatedTarget===null&&o.trigger()},!0),we(n,"focus",o.trigger,!0)),o}function vv(){const e=K(!1);return $t()&&Vn(()=>{e.value=!0}),e}function Qo(e){const t=vv();return P(()=>(t.value,!!e()))}function _v(e,t={}){const{immediate:n=!0,window:s=et}=t,o=K(!1);let r=0,a=null;function l(d){if(!o.value||!s)return;const f=d-r;e({delta:f,timestamp:d}),r=d,a=s.requestAnimationFrame(l)}function c(){!o.value&&s&&(o.value=!0,a=s.requestAnimationFrame(l))}function u(){o.value=!1,a!=null&&s&&(s.cancelAnimationFrame(a),a=null)}return n&&c(),cn(u),{isActive:qt(o),pause:u,resume:c}}function is(e,t={}){const{window:n=et}=t,s=Qo(()=>n&&"matchMedia"in n&&typeof n.matchMedia=="function");let o;const r=K(!1),a=()=>{o&&("removeEventListener"in o?o.removeEventListener("change",l):o.removeListener(l))},l=()=>{s.value&&(a(),o=n.matchMedia(sp(e).value),r.value=!!(o!=null&&o.matches),o&&("addEventListener"in o?o.addEventListener("change",l):o.addListener(l)))};return Ss(l),cn(()=>a()),r}const bv={sm:640,md:768,lg:1024,xl:1280,"2xl":1536};function wv(e,t={}){function n(l,c){let u=e[l];return c!=null&&(u=H1(u,c)),typeof u=="number"&&(u=`${u}px`),u}const{window:s=et}=t;function o(l){return s?s.matchMedia(l).matches:!1}const r=l=>is(`(min-width: ${n(l)})`,t),a=Object.keys(e).reduce((l,c)=>(Object.defineProperty(l,c,{get:()=>r(c),enumerable:!0,configurable:!0}),l),{});return Object.assign(a,{greater(l){return is(`(min-width: ${n(l,.1)})`,t)},greaterOrEqual:r,smaller(l){return is(`(max-width: ${n(l,-.1)})`,t)},smallerOrEqual(l){return is(`(max-width: ${n(l)})`,t)},between(l,c){return is(`(min-width: ${n(l)}) and (max-width: ${n(c,-.1)})`,t)},isGreater(l){return o(`(min-width: ${n(l,.1)})`)},isGreaterOrEqual(l){return o(`(min-width: ${n(l)})`)},isSmaller(l){return o(`(max-width: ${n(l,-.1)})`)},isSmallerOrEqual(l){return o(`(max-width: ${n(l)})`)},isInBetween(l,c){return o(`(min-width: ${n(l)}) and (max-width: ${n(c,-.1)})`)},current(){const l=Object.keys(e).map(c=>[c,r(c)]);return P(()=>l.filter(([,c])=>c.value).map(([c])=>c))}})}function xv(e={}){const{navigator:t=pv,read:n=!1,source:s,copiedDuring:o=1500,legacy:r=!1}=e,a=["copy","cut"],l=Qo(()=>t&&"clipboard"in t),c=P(()=>l.value||r),u=K(""),d=K(!1),f=tv(()=>d.value=!1,o);function p(){l.value?t.clipboard.readText().then(k=>{u.value=k}):u.value=_()}if(c.value&&n)for(const k of a)we(k,p);async function h(k=Ke(s)){c.value&&k!=null&&(l.value?await t.clipboard.writeText(k):m(k),u.value=k,d.value=!0,f.start())}function m(k){const x=document.createElement("textarea");x.value=k??"",x.style.position="absolute",x.style.opacity="0",document.body.appendChild(x),x.select(),document.execCommand("copy"),x.remove()}function _(){var k,x,S;return(S=(x=(k=document==null?void 0:document.getSelection)==null?void 0:k.call(document))==null?void 0:x.toString())!=null?S:""}return{isSupported:c,text:u,copied:d,copy:h}}function kv(e){return JSON.parse(JSON.stringify(e))}const pr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},hr="__vueuse_ssr_handlers__",Sv=Av();function Av(){return hr in pr||(pr[hr]=pr[hr]||{}),pr[hr]}function Ev(e,t){return Sv[e]||t}function Tv(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}var Cv=Object.defineProperty,Qc=Object.getOwnPropertySymbols,$v=Object.prototype.hasOwnProperty,Fv=Object.prototype.propertyIsEnumerable,Zc=(e,t,n)=>t in e?Cv(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Jc=(e,t)=>{for(var n in t||(t={}))$v.call(t,n)&&Zc(e,n,t[n]);if(Qc)for(var n of Qc(t))Fv.call(t,n)&&Zc(e,n,t[n]);return e};const Ov={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}},Xc="vueuse-storage";function Pv(e,t,n,s={}){var o;const{flush:r="pre",deep:a=!0,listenToStorageChanges:l=!0,writeDefaults:c=!0,mergeDefaults:u=!1,shallow:d,window:f=et,eventFilter:p,onError:h=I=>{console.error(I)}}=s,m=(d?rn:K)(t);if(!n)try{n=Ev("getDefaultStorage",()=>{var I;return(I=et)==null?void 0:I.localStorage})()}catch(I){h(I)}if(!n)return m;const _=Ke(t),k=Tv(_),x=(o=s.serializer)!=null?o:Ov[k],{pause:S,resume:b}=fv(m,()=>A(m.value),{flush:r,deep:a,eventFilter:p});return f&&l&&(we(f,"storage",M),we(f,Xc,C)),M(),m;function A(I){try{if(I==null)n.removeItem(e);else{const N=x.write(I),ne=n.getItem(e);ne!==N&&(n.setItem(e,N),f&&f.dispatchEvent(new CustomEvent(Xc,{detail:{key:e,oldValue:ne,newValue:N,storageArea:n}})))}}catch(N){h(N)}}function E(I){const N=I?I.newValue:n.getItem(e);if(N==null)return c&&_!==null&&n.setItem(e,x.write(_)),_;if(!I&&u){const ne=x.read(N);return typeof u=="function"?u(ne,_):k==="object"&&!Array.isArray(ne)?Jc(Jc({},_),ne):ne}else return typeof N!="string"?N:x.read(N)}function C(I){M(I.detail)}function M(I){if(!(I&&I.storageArea!==n)){if(I&&I.key==null){m.value=_;return}if(!(I&&I.key!==e)){S();try{m.value=E(I)}catch(N){h(N)}finally{I?ot(b):b()}}}}}function Iv(e){return is("(prefers-color-scheme: dark)",e)}var Uv=Object.defineProperty,Bv=Object.defineProperties,Mv=Object.getOwnPropertyDescriptors,eu=Object.getOwnPropertySymbols,Dv=Object.prototype.hasOwnProperty,Lv=Object.prototype.propertyIsEnumerable,tu=(e,t,n)=>t in e?Uv(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Rv=(e,t)=>{for(var n in t||(t={}))Dv.call(t,n)&&tu(e,n,t[n]);if(eu)for(var n of eu(t))Lv.call(t,n)&&tu(e,n,t[n]);return e},Nv=(e,t)=>Bv(e,Mv(t));function wO(e,t={}){var n,s;const{pointerTypes:o,preventDefault:r,stopPropagation:a,exact:l,onMove:c,onEnd:u,onStart:d,initialValue:f,axis:p="both",draggingElement:h=et,handle:m=e}=t,_=K((n=Ke(f))!=null?n:{x:0,y:0}),k=K(),x=C=>o?o.includes(C.pointerType):!0,S=C=>{Ke(r)&&C.preventDefault(),Ke(a)&&C.stopPropagation()},b=C=>{if(!x(C)||Ke(l)&&C.target!==Ke(e))return;const M=Ke(e).getBoundingClientRect(),I={x:C.clientX-M.left,y:C.clientY-M.top};(d==null?void 0:d(I,C))!==!1&&(k.value=I,S(C))},A=C=>{if(!x(C)||!k.value)return;let{x:M,y:I}=_.value;(p==="x"||p==="both")&&(M=C.clientX-k.value.x),(p==="y"||p==="both")&&(I=C.clientY-k.value.y),_.value={x:M,y:I},c==null||c(_.value,C),S(C)},E=C=>{x(C)&&k.value&&(k.value=void 0,u==null||u(_.value,C),S(C))};if(Kt){const C={capture:(s=t.capture)!=null?s:!0};we(m,"pointerdown",b,C),we(h,"pointermove",A,C),we(h,"pointerup",E,C)}return Nv(Rv({},J1(_)),{position:_,isDragging:P(()=>!!k.value),style:P(()=>`left:${_.value.x}px;top:${_.value.y}px;`)})}var nu=Object.getOwnPropertySymbols,jv=Object.prototype.hasOwnProperty,Wv=Object.prototype.propertyIsEnumerable,qv=(e,t)=>{var n={};for(var s in e)jv.call(e,s)&&t.indexOf(s)<0&&(n[s]=e[s]);if(e!=null&&nu)for(var s of nu(e))t.indexOf(s)<0&&Wv.call(e,s)&&(n[s]=e[s]);return n};function Hv(e,t,n={}){const s=n,{window:o=et}=s,r=qv(s,["window"]);let a;const l=Qo(()=>o&&"ResizeObserver"in o),c=()=>{a&&(a.disconnect(),a=void 0)},u=P(()=>Array.isArray(e)?e.map(p=>rt(p)):[rt(e)]),d=ye(u,p=>{if(c(),l.value&&o){a=new ResizeObserver(t);for(const h of p)h&&a.observe(h,r)}},{immediate:!0,flush:"post",deep:!0}),f=()=>{c(),d()};return cn(f),{isSupported:l,stop:f}}function Vv(e,t={width:0,height:0},n={}){const{window:s=et,box:o="content-box"}=n,r=P(()=>{var c,u;return(u=(c=rt(e))==null?void 0:c.namespaceURI)==null?void 0:u.includes("svg")}),a=K(t.width),l=K(t.height);return Hv(e,([c])=>{const u=o==="border-box"?c.borderBoxSize:o==="content-box"?c.contentBoxSize:c.devicePixelContentBoxSize;if(s&&r.value){const d=rt(e);if(d){const f=s.getComputedStyle(d);a.value=Number.parseFloat(f.width),l.value=Number.parseFloat(f.height)}}else if(u){const d=Array.isArray(u)?u:[u];a.value=d.reduce((f,{inlineSize:p})=>f+p,0),l.value=d.reduce((f,{blockSize:p})=>f+p,0)}else a.value=c.contentRect.width,l.value=c.contentRect.height},n),ye(()=>rt(e),c=>{a.value=c?t.width:0,l.value=c?t.height:0}),{width:a,height:l}}function zv(e,t,n={}){const{root:s,rootMargin:o="0px",threshold:r=.1,window:a=et,immediate:l=!0}=n,c=Qo(()=>a&&"IntersectionObserver"in a),u=P(()=>{const m=Ke(e);return(Array.isArray(m)?m:[m]).map(rt).filter(L1)});let d=vs;const f=K(l),p=c.value?ye(()=>[u.value,rt(s),f.value],([m,_])=>{if(d(),!f.value||!m.length)return;const k=new IntersectionObserver(t,{root:rt(_),rootMargin:o,threshold:r});m.forEach(x=>x&&k.observe(x)),d=()=>{k.disconnect(),d=vs}},{immediate:l,flush:"post"}):vs,h=()=>{d(),p(),f.value=!1};return cn(h),{isSupported:c,isActive:f,pause(){d(),f.value=!1},resume(){f.value=!0},stop:h}}const su=["fullscreenchange","webkitfullscreenchange","webkitendfullscreen","mozfullscreenchange","MSFullscreenChange"];function Kv(e,t={}){const{document:n=lp,autoExit:s=!1}=t,o=P(()=>{var x;return(x=rt(e))!=null?x:n==null?void 0:n.querySelector("html")}),r=K(!1),a=P(()=>["requestFullscreen","webkitRequestFullscreen","webkitEnterFullscreen","webkitEnterFullScreen","webkitRequestFullScreen","mozRequestFullScreen","msRequestFullscreen"].find(x=>n&&x in n||o.value&&x in o.value)),l=P(()=>["exitFullscreen","webkitExitFullscreen","webkitExitFullScreen","webkitCancelFullScreen","mozCancelFullScreen","msExitFullscreen"].find(x=>n&&x in n||o.value&&x in o.value)),c=P(()=>["fullScreen","webkitIsFullScreen","webkitDisplayingFullscreen","mozFullScreen","msFullscreenElement"].find(x=>n&&x in n||o.value&&x in o.value)),u=["fullscreenElement","webkitFullscreenElement","mozFullScreenElement","msFullscreenElement"].find(x=>n&&x in n),d=Qo(()=>o.value&&n&&a.value!==void 0&&l.value!==void 0&&c.value!==void 0),f=()=>u?(n==null?void 0:n[u])===o.value:!1,p=()=>{if(c.value){if(n&&n[c.value]!=null)return n[c.value];{const x=o.value;if((x==null?void 0:x[c.value])!=null)return!!x[c.value]}}return!1};async function h(){if(d.value){if(l.value)if((n==null?void 0:n[l.value])!=null)await n[l.value]();else{const x=o.value;(x==null?void 0:x[l.value])!=null&&await x[l.value]()}r.value=!1}}async function m(){if(!d.value)return;p()&&await h();const x=o.value;a.value&&(x==null?void 0:x[a.value])!=null&&(await x[a.value](),r.value=!0)}async function _(){await(r.value?h():m())}const k=()=>{const x=p();(!x||x&&f())&&(r.value=x)};return we(n,su,k,!1),we(()=>rt(o),su,k,!1),s&&cn(h),{isSupported:d,isFullscreen:r,enter:m,exit:h,toggle:_}}function Gt(e,t,n={}){const{window:s=et}=n;return Pv(e,t,s==null?void 0:s.localStorage,n)}const Gv={ctrl:"control",command:"meta",cmd:"meta",option:"alt",up:"arrowup",down:"arrowdown",left:"arrowleft",right:"arrowright"};function Yv(e={}){const{reactive:t=!1,target:n=et,aliasMap:s=Gv,passive:o=!0,onEventFired:r=vs}=e,a=qe(new Set),l={toJSON(){return{}},current:a},c=t?qe(l):l,u=new Set,d=new Set;function f(_,k){_ in c&&(t?c[_]=k:c[_].value=k)}function p(){a.clear();for(const _ of d)f(_,!1)}function h(_,k){var x,S;const b=(x=_.key)==null?void 0:x.toLowerCase(),E=[(S=_.code)==null?void 0:S.toLowerCase(),b].filter(Boolean);b&&(k?a.add(b):a.delete(b));for(const C of E)d.add(C),f(C,k);b==="meta"&&!k?(u.forEach(C=>{a.delete(C),f(C,!1)}),u.clear()):typeof _.getModifierState=="function"&&_.getModifierState("Meta")&&k&&[...a,...E].forEach(C=>u.add(C))}we(n,"keydown",_=>(h(_,!0),r(_)),{passive:o}),we(n,"keyup",_=>(h(_,!1),r(_)),{passive:o}),we("blur",p,{passive:!0}),we("focus",p,{passive:!0});const m=new Proxy(c,{get(_,k,x){if(typeof k!="string")return Reflect.get(_,k,x);if(k=k.toLowerCase(),k in s&&(k=s[k]),!(k in c))if(/[+_-]/.test(k)){const b=k.split(/[+_-]/g).map(A=>A.trim());c[k]=P(()=>b.every(A=>Ke(m[A])))}else c[k]=K(!1);const S=Reflect.get(_,k,x);return t?Ke(S):S}});return m}const Qv={page:e=>[e.pageX,e.pageY],client:e=>[e.clientX,e.clientY],screen:e=>[e.screenX,e.screenY],movement:e=>e instanceof Touch?null:[e.movementX,e.movementY]};function xO(e={}){const{type:t="page",touch:n=!0,resetOnTouchEnds:s=!1,initialValue:o={x:0,y:0},window:r=et,target:a=r,eventFilter:l}=e,c=K(o.x),u=K(o.y),d=K(null),f=typeof t=="function"?t:Qv[t],p=x=>{const S=f(x);S&&([c.value,u.value]=S,d.value="mouse")},h=x=>{if(x.touches.length>0){const S=f(x.touches[0]);S&&([c.value,u.value]=S,d.value="touch")}},m=()=>{c.value=o.x,u.value=o.y},_=l?x=>l(()=>p(x),{}):x=>p(x),k=l?x=>l(()=>h(x),{}):x=>h(x);return a&&(we(a,"mousemove",_,{passive:!0}),we(a,"dragover",_,{passive:!0}),n&&t!=="movement"&&(we(a,"touchstart",k,{passive:!0}),we(a,"touchmove",k,{passive:!0}),s&&we(a,"touchend",m,{passive:!0}))),{x:c,y:u,sourceType:d}}function Zv(e,t={}){const n=sp(e),{threshold:s=50,onSwipe:o,onSwipeEnd:r,onSwipeStart:a}=t,l=qe({x:0,y:0}),c=(C,M)=>{l.x=C,l.y=M},u=qe({x:0,y:0}),d=(C,M)=>{u.x=C,u.y=M},f=P(()=>l.x-u.x),p=P(()=>l.y-u.y),{max:h,abs:m}=Math,_=P(()=>h(m(f.value),m(p.value))>=s),k=K(!1),x=K(!1),S=P(()=>_.value?m(f.value)>m(p.value)?f.value>0?"left":"right":p.value>0?"up":"down":"none"),b=C=>{var M,I,N;const ne=C.buttons===0,ce=C.buttons===1;return(N=(I=(M=t.pointerTypes)==null?void 0:M.includes(C.pointerType))!=null?I:ne||ce)!=null?N:!0},A=[we(e,"pointerdown",C=>{var M,I;if(!b(C))return;x.value=!0,(I=(M=n.value)==null?void 0:M.style)==null||I.setProperty("touch-action","none");const N=C.target;N==null||N.setPointerCapture(C.pointerId);const{clientX:ne,clientY:ce}=C;c(ne,ce),d(ne,ce),a==null||a(C)}),we(e,"pointermove",C=>{if(!b(C)||!x.value)return;const{clientX:M,clientY:I}=C;d(M,I),!k.value&&_.value&&(k.value=!0),k.value&&(o==null||o(C))}),we(e,"pointerup",C=>{var M,I;b(C)&&(k.value&&(r==null||r(C,S.value)),x.value=!1,k.value=!1,(I=(M=n.value)==null?void 0:M.style)==null||I.setProperty("touch-action","initial"))})],E=()=>A.forEach(C=>C());return{isSwiping:qt(k),direction:qt(S),posStart:qt(l),posEnd:qt(u),distanceX:f,distanceY:p,stop:E}}let Jv=0;function kO(e,t={}){const n=K(!1),{document:s=lp,immediate:o=!0,manual:r=!1,id:a=`vueuse_styletag_${++Jv}`}=t,l=K(e);let c=()=>{};const u=()=>{if(!s)return;const f=s.getElementById(a)||s.createElement("style");f.isConnected||(f.type="text/css",f.id=a,t.media&&(f.media=t.media),s.head.appendChild(f)),!n.value&&(c=ye(l,p=>{f.textContent=p},{immediate:!0}),n.value=!0)},d=()=>{!s||!n.value||(c(),s.head.removeChild(s.getElementById(a)),n.value=!1)};return o&&!r&&op(u),r||cn(d),{id:a,css:l,unload:d,load:u,isLoaded:qt(n)}}var Xv=Object.defineProperty,ou=Object.getOwnPropertySymbols,e_=Object.prototype.hasOwnProperty,t_=Object.prototype.propertyIsEnumerable,ru=(e,t,n)=>t in e?Xv(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,n_=(e,t)=>{for(var n in t||(t={}))e_.call(t,n)&&ru(e,n,t[n]);if(ou)for(var n of ou(t))t_.call(t,n)&&ru(e,n,t[n]);return e};function SO(e={}){const{controls:t=!1,offset:n=0,immediate:s=!0,interval:o="requestAnimationFrame",callback:r}=e,a=K(Sa()+n),l=()=>a.value=Sa()+n,c=r?()=>{l(),r(a.value)}:l,u=o==="requestAnimationFrame"?_v(c,{immediate:s}):ev(c,o,{immediate:s});return t?n_({timestamp:a},u):a}function en(e,t,n,s={}){var o,r,a;const{clone:l=!1,passive:c=!1,eventName:u,deep:d=!1,defaultValue:f,shouldEmit:p}=s,h=$t(),m=n||(h==null?void 0:h.emit)||((o=h==null?void 0:h.$emit)==null?void 0:o.bind(h))||((a=(r=h==null?void 0:h.proxy)==null?void 0:r.$emit)==null?void 0:a.bind(h==null?void 0:h.proxy));let _=u;t||(t="modelValue"),_=_||`update:${t.toString()}`;const k=b=>l?typeof l=="function"?l(b):kv(b):b,x=()=>D1(e[t])?k(e[t]):f,S=b=>{p?p(b)&&m(_,b):m(_,b)};if(c){const b=x(),A=K(b);return ye(()=>e[t],E=>A.value=k(E)),ye(A,E=>{(E!==e[t]||d)&&S(E)},{deep:d}),A}else return P({get(){return x()},set(b){S(b)}})}function AO({window:e=et}={}){if(!e)return K(!1);const t=K(e.document.hasFocus());return we(e,"blur",()=>{t.value=!1}),we(e,"focus",()=>{t.value=!0}),t}function s_(e={}){const{window:t=et,initialWidth:n=1/0,initialHeight:s=1/0,listenOrientation:o=!0,includeScrollbar:r=!0}=e,a=K(n),l=K(s),c=()=>{t&&(r?(a.value=t.innerWidth,l.value=t.innerHeight):(a.value=t.document.documentElement.clientWidth,l.value=t.document.documentElement.clientHeight))};if(c(),op(c),we("resize",c,{passive:!0}),o){const u=is("(orientation: portrait)");ye(u,()=>c())}return{width:a,height:l}}function o_(){return cp().__VUE_DEVTOOLS_GLOBAL_HOOK__}function cp(){return typeof navigator<"u"&&typeof window<"u"?window:typeof global<"u"?global:{}}const r_=typeof Proxy=="function",i_="devtools-plugin:setup",a_="plugin:settings:set";let Fs,Aa;function l_(){var e;return Fs!==void 0||(typeof window<"u"&&window.performance?(Fs=!0,Aa=window.performance):typeof global<"u"&&(!((e=global.perf_hooks)===null||e===void 0)&&e.performance)?(Fs=!0,Aa=global.perf_hooks.performance):Fs=!1),Fs}function c_(){return l_()?Aa.now():Date.now()}class u_{constructor(t,n){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=t,this.hook=n;const s={};if(t.settings)for(const a in t.settings){const l=t.settings[a];s[a]=l.defaultValue}const o=`__vue-devtools-plugin-settings__${t.id}`;let r=Object.assign({},s);try{const a=localStorage.getItem(o),l=JSON.parse(a);Object.assign(r,l)}catch{}this.fallbacks={getSettings(){return r},setSettings(a){try{localStorage.setItem(o,JSON.stringify(a))}catch{}r=a},now(){return c_()}},n&&n.on(a_,(a,l)=>{a===this.plugin.id&&this.fallbacks.setSettings(l)}),this.proxiedOn=new Proxy({},{get:(a,l)=>this.target?this.target.on[l]:(...c)=>{this.onQueue.push({method:l,args:c})}}),this.proxiedTarget=new Proxy({},{get:(a,l)=>this.target?this.target[l]:l==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(l)?(...c)=>(this.targetQueue.push({method:l,args:c,resolve:()=>{}}),this.fallbacks[l](...c)):(...c)=>new Promise(u=>{this.targetQueue.push({method:l,args:c,resolve:u})})})}async setRealTarget(t){this.target=t;for(const n of this.onQueue)this.target.on[n.method](...n.args);for(const n of this.targetQueue)n.resolve(await this.target[n.method](...n.args))}}function d_(e,t){const n=e,s=cp(),o=o_(),r=r_&&n.enableEarlyProxy;if(o&&(s.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!r))o.emit(i_,e,t);else{const a=r?new u_(n,o):null;(s.__VUE_DEVTOOLS_PLUGINS__=s.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:n,setupFn:t,proxy:a}),a&&t(a.proxiedTarget)}}/*!
  * vue-router v4.2.2
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const gn=typeof window<"u";function f_(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const Pe=Object.assign;function Mi(e,t){const n={};for(const s in t){const o=t[s];n[s]=Ct(o)?o.map(e):e(o)}return n}const _o=()=>{},Ct=Array.isArray;function Te(e){const t=Array.from(arguments).slice(1);console.warn.apply(console,["[Vue Router warn]: "+e].concat(t))}const p_=/\/$/,h_=e=>e.replace(p_,"");function Di(e,t,n="/"){let s,o={},r="",a="";const l=t.indexOf("#");let c=t.indexOf("?");return l<c&&l>=0&&(c=-1),c>-1&&(s=t.slice(0,c),r=t.slice(c+1,l>-1?l:t.length),o=e(r)),l>-1&&(s=s||t.slice(0,l),a=t.slice(l,t.length)),s=y_(s??t,n),{fullPath:s+(r&&"?")+r+a,path:s,query:o,hash:a}}function m_(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function iu(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function au(e,t,n){const s=t.matched.length-1,o=n.matched.length-1;return s>-1&&s===o&&qn(t.matched[s],n.matched[o])&&up(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function qn(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function up(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!g_(e[n],t[n]))return!1;return!0}function g_(e,t){return Ct(e)?lu(e,t):Ct(t)?lu(t,e):e===t}function lu(e,t){return Ct(t)?e.length===t.length&&e.every((n,s)=>n===t[s]):e.length===1&&e[0]===t}function y_(e,t){if(e.startsWith("/"))return e;if(!t.startsWith("/"))return Te(`Cannot resolve a relative location without an absolute path. Trying to resolve "${e}" from "${t}". It should look like "/${t}".`),e;if(!e)return t;const n=t.split("/"),s=e.split("/"),o=s[s.length-1];(o===".."||o===".")&&s.push("");let r=n.length-1,a,l;for(a=0;a<s.length;a++)if(l=s[a],l!==".")if(l==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(a-(a===s.length?1:0)).join("/")}var Bo;(function(e){e.pop="pop",e.push="push"})(Bo||(Bo={}));var bo;(function(e){e.back="back",e.forward="forward",e.unknown=""})(bo||(bo={}));function v_(e){if(!e)if(gn){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),h_(e)}const __=/^[^#]+#/;function b_(e,t){return e.replace(__,"#")+t}function w_(e,t){const n=document.documentElement.getBoundingClientRect(),s=e.getBoundingClientRect();return{behavior:t.behavior,left:s.left-n.left-(t.left||0),top:s.top-n.top-(t.top||0)}}const yi=()=>({left:window.pageXOffset,top:window.pageYOffset});function x_(e){let t;if("el"in e){const n=e.el,s=typeof n=="string"&&n.startsWith("#");if(typeof e.el=="string"&&(!s||!document.getElementById(e.el.slice(1))))try{const r=document.querySelector(e.el);if(s&&r){Te(`The selector "${e.el}" should be passed as "el: document.querySelector('${e.el}')" because it starts with "#".`);return}}catch{Te(`The selector "${e.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`);return}const o=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!o){Te(`Couldn't find element using selector "${e.el}" returned by scrollBehavior.`);return}t=w_(o,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function cu(e,t){return(history.state?history.state.position-t:-1)+e}const Ea=new Map;function k_(e,t){Ea.set(e,t)}function S_(e){const t=Ea.get(e);return Ea.delete(e),t}let A_=()=>location.protocol+"//"+location.host;function dp(e,t){const{pathname:n,search:s,hash:o}=t,r=e.indexOf("#");if(r>-1){let l=o.includes(e.slice(r))?e.slice(r).length:1,c=o.slice(l);return c[0]!=="/"&&(c="/"+c),iu(c,"")}return iu(n,e)+s+o}function E_(e,t,n,s){let o=[],r=[],a=null;const l=({state:p})=>{const h=dp(e,location),m=n.value,_=t.value;let k=0;if(p){if(n.value=h,t.value=p,a&&a===m){a=null;return}k=_?p.position-_.position:0}else s(h);o.forEach(x=>{x(n.value,m,{delta:k,type:Bo.pop,direction:k?k>0?bo.forward:bo.back:bo.unknown})})};function c(){a=n.value}function u(p){o.push(p);const h=()=>{const m=o.indexOf(p);m>-1&&o.splice(m,1)};return r.push(h),h}function d(){const{history:p}=window;p.state&&p.replaceState(Pe({},p.state,{scroll:yi()}),"")}function f(){for(const p of r)p();r=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",d,{passive:!0}),{pauseListeners:c,listen:u,destroy:f}}function uu(e,t,n,s=!1,o=!1){return{back:e,current:t,forward:n,replaced:s,position:window.history.length,scroll:o?yi():null}}function T_(e){const{history:t,location:n}=window,s={value:dp(e,n)},o={value:t.state};o.value||r(s.value,{back:null,current:s.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function r(c,u,d){const f=e.indexOf("#"),p=f>-1?(n.host&&document.querySelector("base")?e:e.slice(f))+c:A_()+e+c;try{t[d?"replaceState":"pushState"](u,"",p),o.value=u}catch(h){Te("Error with push/replace State",h),n[d?"replace":"assign"](p)}}function a(c,u){const d=Pe({},t.state,uu(o.value.back,c,o.value.forward,!0),u,{position:o.value.position});r(c,d,!0),s.value=c}function l(c,u){const d=Pe({},o.value,t.state,{forward:c,scroll:yi()});t.state||Te(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://next.router.vuejs.org/guide/migration/#usage-of-history-state.`),r(d.current,d,!0);const f=Pe({},uu(s.value,c,null),{position:d.position+1},u);r(c,f,!1),s.value=c}return{location:s,state:o,push:l,replace:a}}function C_(e){e=v_(e);const t=T_(e),n=E_(e,t.state,t.location,t.replace);function s(r,a=!0){a||n.pauseListeners(),history.go(r)}const o=Pe({location:"",base:e,go:s,createHref:b_.bind(null,e)},t,n);return Object.defineProperty(o,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(o,"state",{enumerable:!0,get:()=>t.state.value}),o}function $_(e){return typeof e=="string"||e&&typeof e=="object"}function fp(e){return typeof e=="string"||typeof e=="symbol"}const En={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},pp=Symbol("navigation failure");var du;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(du||(du={}));const F_={[1]({location:e,currentLocation:t}){return`No match for
 ${JSON.stringify(e)}${t?`
while being at
`+JSON.stringify(t):""}`},[2]({from:e,to:t}){return`Redirected from "${e.fullPath}" to "${P_(t)}" via a navigation guard.`},[4]({from:e,to:t}){return`Navigation aborted from "${e.fullPath}" to "${t.fullPath}" via a navigation guard.`},[8]({from:e,to:t}){return`Navigation cancelled from "${e.fullPath}" to "${t.fullPath}" with a new navigation.`},[16]({from:e,to:t}){return`Avoided redundant navigation to current location: "${e.fullPath}".`}};function Ws(e,t){return Pe(new Error(F_[e](t)),{type:e,[pp]:!0},t)}function dn(e,t){return e instanceof Error&&pp in e&&(t==null||!!(e.type&t))}const O_=["params","query","hash"];function P_(e){if(typeof e=="string")return e;if("path"in e)return e.path;const t={};for(const n of O_)n in e&&(t[n]=e[n]);return JSON.stringify(t,null,2)}const fu="[^/]+?",I_={sensitive:!1,strict:!1,start:!0,end:!0},U_=/[.+*?^${}()[\]/\\]/g;function B_(e,t){const n=Pe({},I_,t),s=[];let o=n.start?"^":"";const r=[];for(const u of e){const d=u.length?[]:[90];n.strict&&!u.length&&(o+="/");for(let f=0;f<u.length;f++){const p=u[f];let h=40+(n.sensitive?.25:0);if(p.type===0)f||(o+="/"),o+=p.value.replace(U_,"\\$&"),h+=40;else if(p.type===1){const{value:m,repeatable:_,optional:k,regexp:x}=p;r.push({name:m,repeatable:_,optional:k});const S=x||fu;if(S!==fu){h+=10;try{new RegExp(`(${S})`)}catch(A){throw new Error(`Invalid custom RegExp for param "${m}" (${S}): `+A.message)}}let b=_?`((?:${S})(?:/(?:${S}))*)`:`(${S})`;f||(b=k&&u.length<2?`(?:/${b})`:"/"+b),k&&(b+="?"),o+=b,h+=20,k&&(h+=-8),_&&(h+=-20),S===".*"&&(h+=-50)}d.push(h)}s.push(d)}if(n.strict&&n.end){const u=s.length-1;s[u][s[u].length-1]+=.7000000000000001}n.strict||(o+="/?"),n.end?o+="$":n.strict&&(o+="(?:/|$)");const a=new RegExp(o,n.sensitive?"":"i");function l(u){const d=u.match(a),f={};if(!d)return null;for(let p=1;p<d.length;p++){const h=d[p]||"",m=r[p-1];f[m.name]=h&&m.repeatable?h.split("/"):h}return f}function c(u){let d="",f=!1;for(const p of e){(!f||!d.endsWith("/"))&&(d+="/"),f=!1;for(const h of p)if(h.type===0)d+=h.value;else if(h.type===1){const{value:m,repeatable:_,optional:k}=h,x=m in u?u[m]:"";if(Ct(x)&&!_)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const S=Ct(x)?x.join("/"):x;if(!S)if(k)p.length<2&&(d.endsWith("/")?d=d.slice(0,-1):f=!0);else throw new Error(`Missing required param "${m}"`);d+=S}}return d||"/"}return{re:a,score:s,keys:r,parse:l,stringify:c}}function M_(e,t){let n=0;for(;n<e.length&&n<t.length;){const s=t[n]-e[n];if(s)return s;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function D_(e,t){let n=0;const s=e.score,o=t.score;for(;n<s.length&&n<o.length;){const r=M_(s[n],o[n]);if(r)return r;n++}if(Math.abs(o.length-s.length)===1){if(pu(s))return 1;if(pu(o))return-1}return o.length-s.length}function pu(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const L_={type:0,value:""},R_=/[a-zA-Z0-9_]/;function N_(e){if(!e)return[[]];if(e==="/")return[[L_]];if(!e.startsWith("/"))throw new Error(`Route paths should start with a "/": "${e}" should be "/${e}".`);function t(h){throw new Error(`ERR (${n})/"${u}": ${h}`)}let n=0,s=n;const o=[];let r;function a(){r&&o.push(r),r=[]}let l=0,c,u="",d="";function f(){u&&(n===0?r.push({type:0,value:u}):n===1||n===2||n===3?(r.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:u,regexp:d,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),u="")}function p(){u+=c}for(;l<e.length;){if(c=e[l++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(u&&f(),a()):c===":"?(f(),n=1):p();break;case 4:p(),n=s;break;case 1:c==="("?n=2:R_.test(c)?p():(f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case 2:c===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+c:n=3:d+=c;break;case 3:f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--,d="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${u}"`),f(),a(),o}function j_(e,t,n){const s=B_(N_(e.path),n);{const r=new Set;for(const a of s.keys)r.has(a.name)&&Te(`Found duplicated params with name "${a.name}" for path "${e.path}". Only the last one will be available on "$route.params".`),r.add(a.name)}const o=Pe(s,{record:e,parent:t,children:[],alias:[]});return t&&!o.record.aliasOf==!t.record.aliasOf&&t.children.push(o),o}function W_(e,t){const n=[],s=new Map;t=gu({strict:!1,end:!0,sensitive:!1},t);function o(d){return s.get(d)}function r(d,f,p){const h=!p,m=q_(d);K_(m,f),m.aliasOf=p&&p.record;const _=gu(t,d),k=[m];if("alias"in d){const b=typeof d.alias=="string"?[d.alias]:d.alias;for(const A of b)k.push(Pe({},m,{components:p?p.record.components:m.components,path:A,aliasOf:p?p.record:m}))}let x,S;for(const b of k){const{path:A}=b;if(f&&A[0]!=="/"){const E=f.record.path,C=E[E.length-1]==="/"?"":"/";b.path=f.record.path+(A&&C+A)}if(b.path==="*")throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.`);if(x=j_(b,f,_),f&&A[0]==="/"&&G_(x,f),p?(p.alias.push(x),z_(p,x)):(S=S||x,S!==x&&S.alias.push(x),h&&d.name&&!mu(x)&&a(d.name)),m.children){const E=m.children;for(let C=0;C<E.length;C++)r(E[C],x,p&&p.children[C])}p=p||x,(x.record.components&&Object.keys(x.record.components).length||x.record.name||x.record.redirect)&&c(x)}return S?()=>{a(S)}:_o}function a(d){if(fp(d)){const f=s.get(d);f&&(s.delete(d),n.splice(n.indexOf(f),1),f.children.forEach(a),f.alias.forEach(a))}else{const f=n.indexOf(d);f>-1&&(n.splice(f,1),d.record.name&&s.delete(d.record.name),d.children.forEach(a),d.alias.forEach(a))}}function l(){return n}function c(d){let f=0;for(;f<n.length&&D_(d,n[f])>=0&&(d.record.path!==n[f].record.path||!hp(d,n[f]));)f++;n.splice(f,0,d),d.record.name&&!mu(d)&&s.set(d.record.name,d)}function u(d,f){let p,h={},m,_;if("name"in d&&d.name){if(p=s.get(d.name),!p)throw Ws(1,{location:d});{const S=Object.keys(d.params||{}).filter(b=>!p.keys.find(A=>A.name===b));S.length&&Te(`Discarded invalid param(s) "${S.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`)}_=p.record.name,h=Pe(hu(f.params,p.keys.filter(S=>!S.optional).map(S=>S.name)),d.params&&hu(d.params,p.keys.map(S=>S.name))),m=p.stringify(h)}else if("path"in d)m=d.path,m.startsWith("/")||Te(`The Matcher cannot resolve relative paths but received "${m}". Unless you directly called \`matcher.resolve("${m}")\`, this is probably a bug in vue-router. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/router.`),p=n.find(S=>S.re.test(m)),p&&(h=p.parse(m),_=p.record.name);else{if(p=f.name?s.get(f.name):n.find(S=>S.re.test(f.path)),!p)throw Ws(1,{location:d,currentLocation:f});_=p.record.name,h=Pe({},f.params,d.params),m=p.stringify(h)}const k=[];let x=p;for(;x;)k.unshift(x.record),x=x.parent;return{name:_,path:m,params:h,matched:k,meta:V_(k)}}return e.forEach(d=>r(d)),{addRoute:r,resolve:u,removeRoute:a,getRoutes:l,getRecordMatcher:o}}function hu(e,t){const n={};for(const s of t)s in e&&(n[s]=e[s]);return n}function q_(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:H_(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function H_(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const s in e.components)t[s]=typeof n=="boolean"?n:n[s];return t}function mu(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function V_(e){return e.reduce((t,n)=>Pe(t,n.meta),{})}function gu(e,t){const n={};for(const s in e)n[s]=s in t?t[s]:e[s];return n}function Ta(e,t){return e.name===t.name&&e.optional===t.optional&&e.repeatable===t.repeatable}function z_(e,t){for(const n of e.keys)if(!n.optional&&!t.keys.find(Ta.bind(null,n)))return Te(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);for(const n of t.keys)if(!n.optional&&!e.keys.find(Ta.bind(null,n)))return Te(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`)}function K_(e,t){t&&t.record.name&&!e.name&&!e.path&&Te(`The route named "${String(t.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`)}function G_(e,t){for(const n of t.keys)if(!e.keys.find(Ta.bind(null,n)))return Te(`Absolute path "${e.record.path}" must have the exact same param named "${n.name}" as its parent "${t.record.path}".`)}function hp(e,t){return t.children.some(n=>n===e||hp(e,n))}const mp=/#/g,Y_=/&/g,Q_=/\//g,Z_=/=/g,J_=/\?/g,gp=/\+/g,X_=/%5B/g,eb=/%5D/g,yp=/%5E/g,tb=/%60/g,vp=/%7B/g,nb=/%7C/g,_p=/%7D/g,sb=/%20/g;function Cl(e){return encodeURI(""+e).replace(nb,"|").replace(X_,"[").replace(eb,"]")}function ob(e){return Cl(e).replace(vp,"{").replace(_p,"}").replace(yp,"^")}function Ca(e){return Cl(e).replace(gp,"%2B").replace(sb,"+").replace(mp,"%23").replace(Y_,"%26").replace(tb,"`").replace(vp,"{").replace(_p,"}").replace(yp,"^")}function rb(e){return Ca(e).replace(Z_,"%3D")}function ib(e){return Cl(e).replace(mp,"%23").replace(J_,"%3F")}function ab(e){return e==null?"":ib(e).replace(Q_,"%2F")}function Mo(e){try{return decodeURIComponent(""+e)}catch{Te(`Error decoding "${e}". Using original value`)}return""+e}function lb(e){const t={};if(e===""||e==="?")return t;const s=(e[0]==="?"?e.slice(1):e).split("&");for(let o=0;o<s.length;++o){const r=s[o].replace(gp," "),a=r.indexOf("="),l=Mo(a<0?r:r.slice(0,a)),c=a<0?null:Mo(r.slice(a+1));if(l in t){let u=t[l];Ct(u)||(u=t[l]=[u]),u.push(c)}else t[l]=c}return t}function yu(e){let t="";for(let n in e){const s=e[n];if(n=rb(n),s==null){s!==void 0&&(t+=(t.length?"&":"")+n);continue}(Ct(s)?s.map(r=>r&&Ca(r)):[s&&Ca(s)]).forEach(r=>{r!==void 0&&(t+=(t.length?"&":"")+n,r!=null&&(t+="="+r))})}return t}function cb(e){const t={};for(const n in e){const s=e[n];s!==void 0&&(t[n]=Ct(s)?s.map(o=>o==null?null:""+o):s==null?s:""+s)}return t}const ub=Symbol("router view location matched"),vu=Symbol("router view depth"),$l=Symbol("router"),bp=Symbol("route location"),$a=Symbol("router view location");function to(){let e=[];function t(s){return e.push(s),()=>{const o=e.indexOf(s);o>-1&&e.splice(o,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function Fn(e,t,n,s,o){const r=s&&(s.enterCallbacks[o]=s.enterCallbacks[o]||[]);return()=>new Promise((a,l)=>{const c=f=>{f===!1?l(Ws(4,{from:n,to:t})):f instanceof Error?l(f):$_(f)?l(Ws(2,{from:t,to:f})):(r&&s.enterCallbacks[o]===r&&typeof f=="function"&&r.push(f),a())},u=e.call(s&&s.instances[o],t,n,db(c,t,n));let d=Promise.resolve(u);if(e.length<3&&(d=d.then(c)),e.length>2){const f=`The "next" callback was never called inside of ${e.name?'"'+e.name+'"':""}:
${e.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;if(typeof u=="object"&&"then"in u)d=d.then(p=>c._called?p:(Te(f),Promise.reject(new Error("Invalid navigation guard"))));else if(u!==void 0&&!c._called){Te(f),l(new Error("Invalid navigation guard"));return}}d.catch(f=>l(f))})}function db(e,t,n){let s=0;return function(){s++===1&&Te(`The "next" callback was called more than once in one navigation guard when going from "${n.fullPath}" to "${t.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`),e._called=!0,s===1&&e.apply(null,arguments)}}function Li(e,t,n,s){const o=[];for(const r of e){!r.components&&!r.children.length&&Te(`Record with path "${r.path}" is either missing a "component(s)" or "children" property.`);for(const a in r.components){let l=r.components[a];{if(!l||typeof l!="object"&&typeof l!="function")throw Te(`Component "${a}" in record with path "${r.path}" is not a valid component. Received "${String(l)}".`),new Error("Invalid route component");if("then"in l){Te(`Component "${a}" in record with path "${r.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`);const c=l;l=()=>c}else l.__asyncLoader&&!l.__warnedDefineAsync&&(l.__warnedDefineAsync=!0,Te(`Component "${a}" in record with path "${r.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`))}if(!(t!=="beforeRouteEnter"&&!r.instances[a]))if(fb(l)){const u=(l.__vccOpts||l)[t];u&&o.push(Fn(u,n,s,r,a))}else{let c=l();"catch"in c||(Te(`Component "${a}" in record with path "${r.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`),c=Promise.resolve(c)),o.push(()=>c.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${r.path}"`));const d=f_(u)?u.default:u;r.components[a]=d;const p=(d.__vccOpts||d)[t];return p&&Fn(p,n,s,r,a)()}))}}}return o}function fb(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function _u(e){const t=R($l),n=R(bp),s=P(()=>t.resolve(O(e.to))),o=P(()=>{const{matched:c}=s.value,{length:u}=c,d=c[u-1],f=n.matched;if(!d||!f.length)return-1;const p=f.findIndex(qn.bind(null,d));if(p>-1)return p;const h=bu(c[u-2]);return u>1&&bu(d)===h&&f[f.length-1].path!==h?f.findIndex(qn.bind(null,c[u-2])):p}),r=P(()=>o.value>-1&&gb(n.params,s.value.params)),a=P(()=>o.value>-1&&o.value===n.matched.length-1&&up(n.params,s.value.params));function l(c={}){return mb(c)?t[O(e.replace)?"replace":"push"](O(e.to)).catch(_o):Promise.resolve()}if(gn){const c=$t();if(c){const u={route:s.value,isActive:r.value,isExactActive:a.value};c.__vrl_devtools=c.__vrl_devtools||[],c.__vrl_devtools.push(u),Ss(()=>{u.route=s.value,u.isActive=r.value,u.isExactActive=a.value},{flush:"post"})}}return{route:s,href:P(()=>s.value.href),isActive:r,isExactActive:a,navigate:l}}const pb=ke({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:_u,setup(e,{slots:t}){const n=qe(_u(e)),{options:s}=R($l),o=P(()=>({[wu(e.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[wu(e.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=t.default&&t.default(n);return e.custom?r:Je("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},r)}}}),hb=pb;function mb(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function gb(e,t){for(const n in t){const s=t[n],o=e[n];if(typeof s=="string"){if(s!==o)return!1}else if(!Ct(o)||o.length!==s.length||s.some((r,a)=>r!==o[a]))return!1}return!0}function bu(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const wu=(e,t,n)=>e??t??n,yb=ke({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){_b();const s=R($a),o=P(()=>e.route||s.value),r=R(vu,0),a=P(()=>{let u=O(r);const{matched:d}=o.value;let f;for(;(f=d[u])&&!f.components;)u++;return u}),l=P(()=>o.value.matched[a.value]);At(vu,P(()=>a.value+1)),At(ub,l),At($a,o);const c=K();return ye(()=>[c.value,l.value,e.name],([u,d,f],[p,h,m])=>{d&&(d.instances[f]=u,h&&h!==d&&u&&u===p&&(d.leaveGuards.size||(d.leaveGuards=h.leaveGuards),d.updateGuards.size||(d.updateGuards=h.updateGuards))),u&&d&&(!h||!qn(d,h)||!p)&&(d.enterCallbacks[f]||[]).forEach(_=>_(u))},{flush:"post"}),()=>{const u=o.value,d=e.name,f=l.value,p=f&&f.components[d];if(!p)return xu(n.default,{Component:p,route:u});const h=f.props[d],m=h?h===!0?u.params:typeof h=="function"?h(u):h:null,k=Je(p,Pe({},m,t,{onVnodeUnmounted:x=>{x.component.isUnmounted&&(f.instances[d]=null)},ref:c}));if(gn&&k.ref){const x={depth:a.value,name:f.name,path:f.path,meta:f.meta};(Ct(k.ref)?k.ref.map(b=>b.i):[k.ref.i]).forEach(b=>{b.__vrv_devtools=x})}return xu(n.default,{Component:k,route:u})||k}}});function xu(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const vb=yb;function _b(){const e=$t(),t=e.parent&&e.parent.type.name,n=e.parent&&e.parent.subTree&&e.parent.subTree.type;if(t&&(t==="KeepAlive"||t.includes("Transition"))&&typeof n=="object"&&n.name==="RouterView"){const s=t==="KeepAlive"?"keep-alive":"transition";Te(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.
Use slot props instead:

<router-view v-slot="{ Component }">
  <${s}>
    <component :is="Component" />
  </${s}>
</router-view>`)}}function no(e,t){const n=Pe({},e,{matched:e.matched.map(s=>Cb(s,["instances","children","aliasOf"]))});return{_custom:{type:null,readOnly:!0,display:e.fullPath,tooltip:t,value:n}}}function mr(e){return{_custom:{display:e}}}let bb=0;function wb(e,t,n){if(t.__hasDevtools)return;t.__hasDevtools=!0;const s=bb++;d_({id:"org.vuejs.router"+(s?"."+s:""),label:"Vue Router",packageName:"vue-router",homepage:"https://router.vuejs.org",logo:"https://router.vuejs.org/logo.png",componentStateTypes:["Routing"],app:e},o=>{typeof o.now!="function"&&console.warn("[Vue Router]: You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."),o.on.inspectComponent((d,f)=>{d.instanceData&&d.instanceData.state.push({type:"Routing",key:"$route",editable:!1,value:no(t.currentRoute.value,"Current Route")})}),o.on.visitComponentTree(({treeNode:d,componentInstance:f})=>{if(f.__vrv_devtools){const p=f.__vrv_devtools;d.tags.push({label:(p.name?`${p.name.toString()}: `:"")+p.path,textColor:0,tooltip:"This component is rendered by &lt;router-view&gt;",backgroundColor:wp})}Ct(f.__vrl_devtools)&&(f.__devtoolsApi=o,f.__vrl_devtools.forEach(p=>{let h=Sp,m="";p.isExactActive?(h=kp,m="This is exactly active"):p.isActive&&(h=xp,m="This link is active"),d.tags.push({label:p.route.path,textColor:0,tooltip:m,backgroundColor:h})}))}),ye(t.currentRoute,()=>{c(),o.notifyComponentUpdate(),o.sendInspectorTree(l),o.sendInspectorState(l)});const r="router:navigations:"+s;o.addTimelineLayer({id:r,label:`Router${s?" "+s:""} Navigations`,color:4237508}),t.onError((d,f)=>{o.addTimelineEvent({layerId:r,event:{title:"Error during Navigation",subtitle:f.fullPath,logType:"error",time:o.now(),data:{error:d},groupId:f.meta.__navigationId}})});let a=0;t.beforeEach((d,f)=>{const p={guard:mr("beforeEach"),from:no(f,"Current Location during this navigation"),to:no(d,"Target location")};Object.defineProperty(d.meta,"__navigationId",{value:a++}),o.addTimelineEvent({layerId:r,event:{time:o.now(),title:"Start of navigation",subtitle:d.fullPath,data:p,groupId:d.meta.__navigationId}})}),t.afterEach((d,f,p)=>{const h={guard:mr("afterEach")};p?(h.failure={_custom:{type:Error,readOnly:!0,display:p?p.message:"",tooltip:"Navigation Failure",value:p}},h.status=mr("❌")):h.status=mr("✅"),h.from=no(f,"Current Location during this navigation"),h.to=no(d,"Target location"),o.addTimelineEvent({layerId:r,event:{title:"End of navigation",subtitle:d.fullPath,time:o.now(),data:h,logType:p?"warning":"default",groupId:d.meta.__navigationId}})});const l="router-inspector:"+s;o.addInspector({id:l,label:"Routes"+(s?" "+s:""),icon:"book",treeFilterPlaceholder:"Search routes"});function c(){if(!u)return;const d=u;let f=n.getRoutes().filter(p=>!p.parent);f.forEach(Tp),d.filter&&(f=f.filter(p=>Fa(p,d.filter.toLowerCase()))),f.forEach(p=>Ep(p,t.currentRoute.value)),d.rootNodes=f.map(Ap)}let u;o.on.getInspectorTree(d=>{u=d,d.app===e&&d.inspectorId===l&&c()}),o.on.getInspectorState(d=>{if(d.app===e&&d.inspectorId===l){const p=n.getRoutes().find(h=>h.record.__vd_id===d.nodeId);p&&(d.state={options:kb(p)})}}),o.sendInspectorTree(l),o.sendInspectorState(l)})}function xb(e){return e.optional?e.repeatable?"*":"?":e.repeatable?"+":""}function kb(e){const{record:t}=e,n=[{editable:!1,key:"path",value:t.path}];return t.name!=null&&n.push({editable:!1,key:"name",value:t.name}),n.push({editable:!1,key:"regexp",value:e.re}),e.keys.length&&n.push({editable:!1,key:"keys",value:{_custom:{type:null,readOnly:!0,display:e.keys.map(s=>`${s.name}${xb(s)}`).join(" "),tooltip:"Param keys",value:e.keys}}}),t.redirect!=null&&n.push({editable:!1,key:"redirect",value:t.redirect}),e.alias.length&&n.push({editable:!1,key:"aliases",value:e.alias.map(s=>s.record.path)}),Object.keys(e.record.meta).length&&n.push({editable:!1,key:"meta",value:e.record.meta}),n.push({key:"score",editable:!1,value:{_custom:{type:null,readOnly:!0,display:e.score.map(s=>s.join(", ")).join(" | "),tooltip:"Score used to sort routes",value:e.score}}}),n}const wp=15485081,xp=2450411,kp=8702998,Sb=2282478,Sp=16486972,Ab=6710886;function Ap(e){const t=[],{record:n}=e;n.name!=null&&t.push({label:String(n.name),textColor:0,backgroundColor:Sb}),n.aliasOf&&t.push({label:"alias",textColor:0,backgroundColor:Sp}),e.__vd_match&&t.push({label:"matches",textColor:0,backgroundColor:wp}),e.__vd_exactActive&&t.push({label:"exact",textColor:0,backgroundColor:kp}),e.__vd_active&&t.push({label:"active",textColor:0,backgroundColor:xp}),n.redirect&&t.push({label:typeof n.redirect=="string"?`redirect: ${n.redirect}`:"redirects",textColor:16777215,backgroundColor:Ab});let s=n.__vd_id;return s==null&&(s=String(Eb++),n.__vd_id=s),{id:s,label:n.path,tags:t,children:e.children.map(Ap)}}let Eb=0;const Tb=/^\/(.*)\/([a-z]*)$/;function Ep(e,t){const n=t.matched.length&&qn(t.matched[t.matched.length-1],e.record);e.__vd_exactActive=e.__vd_active=n,n||(e.__vd_active=t.matched.some(s=>qn(s,e.record))),e.children.forEach(s=>Ep(s,t))}function Tp(e){e.__vd_match=!1,e.children.forEach(Tp)}function Fa(e,t){const n=String(e.re).match(Tb);if(e.__vd_match=!1,!n||n.length<3)return!1;if(new RegExp(n[1].replace(/\$$/,""),n[2]).test(t))return e.children.forEach(a=>Fa(a,t)),e.record.path!=="/"||t==="/"?(e.__vd_match=e.re.test(t),!0):!1;const o=e.record.path.toLowerCase(),r=Mo(o);return!t.startsWith("/")&&(r.includes(t)||o.includes(t))||r.startsWith(t)||o.startsWith(t)||e.record.name&&String(e.record.name).includes(t)?!0:e.children.some(a=>Fa(a,t))}function Cb(e,t){const n={};for(const s in e)t.includes(s)||(n[s]=e[s]);return n}function $b(e){const t=W_(e.routes,e),n=e.parseQuery||lb,s=e.stringifyQuery||yu,o=e.history;if(!o)throw new Error('Provide the "history" option when calling "createRouter()": https://next.router.vuejs.org/api/#history.');const r=to(),a=to(),l=to(),c=rn(En);let u=En;gn&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=Mi.bind(null,F=>""+F),f=Mi.bind(null,ab),p=Mi.bind(null,Mo);function h(F,Z){let X,te;return fp(F)?(X=t.getRecordMatcher(F),te=Z):te=F,t.addRoute(te,X)}function m(F){const Z=t.getRecordMatcher(F);Z?t.removeRoute(Z):Te(`Cannot remove non-existent route "${String(F)}"`)}function _(){return t.getRoutes().map(F=>F.record)}function k(F){return!!t.getRecordMatcher(F)}function x(F,Z){if(Z=Pe({},Z||c.value),typeof F=="string"){const v=Di(n,F,Z.path),T=t.resolve({path:v.path},Z),B=o.createHref(v.fullPath);return B.startsWith("//")?Te(`Location "${F}" resolved to "${B}". A resolved location cannot start with multiple slashes.`):T.matched.length||Te(`No match found for location with path "${F}"`),Pe(v,T,{params:p(T.params),hash:Mo(v.hash),redirectedFrom:void 0,href:B})}let X;if("path"in F)"params"in F&&!("name"in F)&&Object.keys(F.params).length&&Te(`Path "${F.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`),X=Pe({},F,{path:Di(n,F.path,Z.path).path});else{const v=Pe({},F.params);for(const T in v)v[T]==null&&delete v[T];X=Pe({},F,{params:f(v)}),Z.params=f(Z.params)}const te=t.resolve(X,Z),xe=F.hash||"";xe&&!xe.startsWith("#")&&Te(`A \`hash\` should always start with the character "#". Replace "${xe}" with "#${xe}".`),te.params=d(p(te.params));const Me=m_(s,Pe({},F,{hash:ob(xe),path:te.path})),g=o.createHref(Me);return g.startsWith("//")?Te(`Location "${F}" resolved to "${g}". A resolved location cannot start with multiple slashes.`):te.matched.length||Te(`No match found for location with path "${"path"in F?F.path:F}"`),Pe({fullPath:Me,hash:xe,query:s===yu?cb(F.query):F.query||{}},te,{redirectedFrom:void 0,href:g})}function S(F){return typeof F=="string"?Di(n,F,c.value.path):Pe({},F)}function b(F,Z){if(u!==F)return Ws(8,{from:Z,to:F})}function A(F){return M(F)}function E(F){return A(Pe(S(F),{replace:!0}))}function C(F){const Z=F.matched[F.matched.length-1];if(Z&&Z.redirect){const{redirect:X}=Z;let te=typeof X=="function"?X(F):X;if(typeof te=="string"&&(te=te.includes("?")||te.includes("#")?te=S(te):{path:te},te.params={}),!("path"in te)&&!("name"in te))throw Te(`Invalid redirect found:
${JSON.stringify(te,null,2)}
 when navigating to "${F.fullPath}". A redirect must contain a name or path. This will break in production.`),new Error("Invalid redirect");return Pe({query:F.query,hash:F.hash,params:"path"in te?{}:F.params},te)}}function M(F,Z){const X=u=x(F),te=c.value,xe=F.state,Me=F.force,g=F.replace===!0,v=C(X);if(v)return M(Pe(S(v),{state:typeof v=="object"?Pe({},xe,v.state):xe,force:Me,replace:g}),Z||X);const T=X;T.redirectedFrom=Z;let B;return!Me&&au(s,te,X)&&(B=Ws(16,{to:T,from:te}),Ft(te,te,!0,!1)),(B?Promise.resolve(B):ne(T,te)).catch(U=>dn(U)?dn(U,2)?U:Ie(U):ie(U,T,te)).then(U=>{if(U){if(dn(U,2))return au(s,x(U.to),T)&&Z&&(Z._count=Z._count?Z._count+1:1)>30?(Te(`Detected a possibly infinite redirection in a navigation guard when going from "${te.fullPath}" to "${T.fullPath}". Aborting to avoid a Stack Overflow.
 Are you always returning a new location within a navigation guard? That would lead to this error. Only return when redirecting or aborting, that should fix this. This might break in production if not fixed.`),Promise.reject(new Error("Infinite redirect in navigation guard"))):M(Pe({replace:g},S(U.to),{state:typeof U.to=="object"?Pe({},xe,U.to.state):xe,force:Me}),Z||T)}else U=Q(T,te,!0,g,xe);return ce(T,te,U),U})}function I(F,Z){const X=b(F,Z);return X?Promise.reject(X):Promise.resolve()}function N(F){const Z=Yt.values().next().value;return Z&&typeof Z.runWithContext=="function"?Z.runWithContext(F):F()}function ne(F,Z){let X;const[te,xe,Me]=Fb(F,Z);X=Li(te.reverse(),"beforeRouteLeave",F,Z);for(const v of te)v.leaveGuards.forEach(T=>{X.push(Fn(T,F,Z))});const g=I.bind(null,F,Z);return X.push(g),Ot(X).then(()=>{X=[];for(const v of r.list())X.push(Fn(v,F,Z));return X.push(g),Ot(X)}).then(()=>{X=Li(xe,"beforeRouteUpdate",F,Z);for(const v of xe)v.updateGuards.forEach(T=>{X.push(Fn(T,F,Z))});return X.push(g),Ot(X)}).then(()=>{X=[];for(const v of F.matched)if(v.beforeEnter&&!Z.matched.includes(v))if(Ct(v.beforeEnter))for(const T of v.beforeEnter)X.push(Fn(T,F,Z));else X.push(Fn(v.beforeEnter,F,Z));return X.push(g),Ot(X)}).then(()=>(F.matched.forEach(v=>v.enterCallbacks={}),X=Li(Me,"beforeRouteEnter",F,Z),X.push(g),Ot(X))).then(()=>{X=[];for(const v of a.list())X.push(Fn(v,F,Z));return X.push(g),Ot(X)}).catch(v=>dn(v,8)?v:Promise.reject(v))}function ce(F,Z,X){for(const te of l.list())N(()=>te(F,Z,X))}function Q(F,Z,X,te,xe){const Me=b(F,Z);if(Me)return Me;const g=Z===En,v=gn?history.state:{};X&&(te||g?o.replace(F.fullPath,Pe({scroll:g&&v&&v.scroll},xe)):o.push(F.fullPath,xe)),c.value=F,Ft(F,Z,X,g),Ie()}let me;function ve(){me||(me=o.listen((F,Z,X)=>{if(!Gn.listening)return;const te=x(F),xe=C(te);if(xe){M(Pe(xe,{replace:!0}),te).catch(_o);return}u=te;const Me=c.value;gn&&k_(cu(Me.fullPath,X.delta),yi()),ne(te,Me).catch(g=>dn(g,12)?g:dn(g,2)?(M(g.to,te).then(v=>{dn(v,20)&&!X.delta&&X.type===Bo.pop&&o.go(-1,!1)}).catch(_o),Promise.reject()):(X.delta&&o.go(-X.delta,!1),ie(g,te,Me))).then(g=>{g=g||Q(te,Me,!1),g&&(X.delta&&!dn(g,8)?o.go(-X.delta,!1):X.type===Bo.pop&&dn(g,20)&&o.go(-1,!1)),ce(te,Me,g)}).catch(_o)}))}let be=to(),Be=to(),ee;function ie(F,Z,X){Ie(F);const te=Be.list();return te.length?te.forEach(xe=>xe(F,Z,X)):(Te("uncaught error during route navigation:"),console.error(F)),Promise.reject(F)}function Se(){return ee&&c.value!==En?Promise.resolve():new Promise((F,Z)=>{be.add([F,Z])})}function Ie(F){return ee||(ee=!F,ve(),be.list().forEach(([Z,X])=>F?X(F):Z()),be.reset()),F}function Ft(F,Z,X,te){const{scrollBehavior:xe}=e;if(!gn||!xe)return Promise.resolve();const Me=!X&&S_(cu(F.fullPath,0))||(te||!X)&&history.state&&history.state.scroll||null;return ot().then(()=>xe(F,Z,Me)).then(g=>g&&x_(g)).catch(g=>ie(g,F,Z))}const nt=F=>o.go(F);let gt;const Yt=new Set,Gn={currentRoute:c,listening:!0,addRoute:h,removeRoute:m,hasRoute:k,getRoutes:_,resolve:x,options:e,push:A,replace:E,go:nt,back:()=>nt(-1),forward:()=>nt(1),beforeEach:r.add,beforeResolve:a.add,afterEach:l.add,onError:Be.add,isReady:Se,install(F){const Z=this;F.component("RouterLink",hb),F.component("RouterView",vb),F.config.globalProperties.$router=Z,Object.defineProperty(F.config.globalProperties,"$route",{enumerable:!0,get:()=>O(c)}),gn&&!gt&&c.value===En&&(gt=!0,A(o.location).catch(xe=>{Te("Unexpected error when starting the router:",xe)}));const X={};for(const xe in En)X[xe]=P(()=>c.value[xe]);F.provide($l,Z),F.provide(bp,qe(X)),F.provide($a,c);const te=F.unmount;Yt.add(F),F.unmount=function(){Yt.delete(F),Yt.size<1&&(u=En,me&&me(),me=null,c.value=En,gt=!1,ee=!1),te()},gn&&wb(F,Z,t)}};function Ot(F){return F.reduce((Z,X)=>Z.then(()=>N(X)),Promise.resolve())}return Gn}function Fb(e,t){const n=[],s=[],o=[],r=Math.max(t.matched.length,e.matched.length);for(let a=0;a<r;a++){const l=t.matched[a];l&&(e.matched.find(u=>qn(u,l))?s.push(l):n.push(l));const c=e.matched[a];c&&(t.matched.find(u=>qn(u,c))||o.push(c))}return[n,s,o]}const Ri=K(!1),wo=K(!1),Us=K(!1),Ob=K(!0),Oa=wv({xs:460,...bv}),_s=s_(),Cp=Yv(),Pb=P(()=>_s.height.value-_s.width.value/Bn>180),$p=Kv(Kt?document.body:null),Ln=yv(),Ib=P(()=>{var e,t;return["INPUT","TEXTAREA"].includes(((e=Ln.value)==null?void 0:e.tagName)||"")||((t=Ln.value)==null?void 0:t.classList.contains("CodeMirror-code"))}),Ub=P(()=>{var e;return["BUTTON","A"].includes(((e=Ln.value)==null?void 0:e.tagName)||"")});Gt("slidev-camera","default");Gt("slidev-mic","default");const Ar=Gt("slidev-scale",0),ft=Gt("slidev-show-overview",!1),Ni=Gt("slidev-presenter-cursor",!0),ku=Gt("slidev-show-editor",!1);Gt("slidev-editor-width",Kt?window.innerWidth*.4:100);const Fp=rp(ft);function Su(e,t,n,s=o=>o){return e*s(.5-t*(.5-n))}function Bb(e){return[-e[0],-e[1]]}function jt(e,t){return[e[0]+t[0],e[1]+t[1]]}function Ut(e,t){return[e[0]-t[0],e[1]-t[1]]}function Nt(e,t){return[e[0]*t,e[1]*t]}function Mb(e,t){return[e[0]/t,e[1]/t]}function so(e){return[e[1],-e[0]]}function Au(e,t){return e[0]*t[0]+e[1]*t[1]}function Db(e,t){return e[0]===t[0]&&e[1]===t[1]}function Lb(e){return Math.hypot(e[0],e[1])}function Rb(e){return e[0]*e[0]+e[1]*e[1]}function Eu(e,t){return Rb(Ut(e,t))}function Op(e){return Mb(e,Lb(e))}function Nb(e,t){return Math.hypot(e[1]-t[1],e[0]-t[0])}function oo(e,t,n){let s=Math.sin(n),o=Math.cos(n),r=e[0]-t[0],a=e[1]-t[1],l=r*o-a*s,c=r*s+a*o;return[l+t[0],c+t[1]]}function Pa(e,t,n){return jt(e,Nt(Ut(t,e),n))}function Tu(e,t,n){return jt(e,Nt(t,n))}var{min:Os,PI:jb}=Math,Cu=.275,ro=jb+1e-4;function Wb(e,t={}){let{size:n=16,smoothing:s=.5,thinning:o=.5,simulatePressure:r=!0,easing:a=ee=>ee,start:l={},end:c={},last:u=!1}=t,{cap:d=!0,easing:f=ee=>ee*(2-ee)}=l,{cap:p=!0,easing:h=ee=>--ee*ee*ee+1}=c;if(e.length===0||n<=0)return[];let m=e[e.length-1].runningLength,_=l.taper===!1?0:l.taper===!0?Math.max(n,m):l.taper,k=c.taper===!1?0:c.taper===!0?Math.max(n,m):c.taper,x=Math.pow(n*s,2),S=[],b=[],A=e.slice(0,10).reduce((ee,ie)=>{let Se=ie.pressure;if(r){let Ie=Os(1,ie.distance/n),Ft=Os(1,1-Ie);Se=Os(1,ee+(Ft-ee)*(Ie*Cu))}return(ee+Se)/2},e[0].pressure),E=Su(n,o,e[e.length-1].pressure,a),C,M=e[0].vector,I=e[0].point,N=I,ne=I,ce=N,Q=!1;for(let ee=0;ee<e.length;ee++){let{pressure:ie}=e[ee],{point:Se,vector:Ie,distance:Ft,runningLength:nt}=e[ee];if(ee<e.length-1&&m-nt<3)continue;if(o){if(r){let te=Os(1,Ft/n),xe=Os(1,1-te);ie=Os(1,A+(xe-A)*(te*Cu))}E=Su(n,o,ie,a)}else E=n/2;C===void 0&&(C=E);let gt=nt<_?f(nt/_):1,Yt=m-nt<k?h((m-nt)/k):1;E=Math.max(.01,E*Math.min(gt,Yt));let Gn=(ee<e.length-1?e[ee+1]:e[ee]).vector,Ot=ee<e.length-1?Au(Ie,Gn):1,F=Au(Ie,M)<0&&!Q,Z=Ot!==null&&Ot<0;if(F||Z){let te=Nt(so(M),E);for(let xe=1/13,Me=0;Me<=1;Me+=xe)ne=oo(Ut(Se,te),Se,ro*Me),S.push(ne),ce=oo(jt(Se,te),Se,ro*-Me),b.push(ce);I=ne,N=ce,Z&&(Q=!0);continue}if(Q=!1,ee===e.length-1){let te=Nt(so(Ie),E);S.push(Ut(Se,te)),b.push(jt(Se,te));continue}let X=Nt(so(Pa(Gn,Ie,Ot)),E);ne=Ut(Se,X),(ee<=1||Eu(I,ne)>x)&&(S.push(ne),I=ne),ce=jt(Se,X),(ee<=1||Eu(N,ce)>x)&&(b.push(ce),N=ce),A=ie,M=Ie}let me=e[0].point.slice(0,2),ve=e.length>1?e[e.length-1].point.slice(0,2):jt(e[0].point,[1,1]),be=[],Be=[];if(e.length===1){if(!(_||k)||u){let ee=Tu(me,Op(so(Ut(me,ve))),-(C||E)),ie=[];for(let Se=1/13,Ie=Se;Ie<=1;Ie+=Se)ie.push(oo(ee,me,ro*2*Ie));return ie}}else{if(!(_||k&&e.length===1))if(d)for(let ie=1/13,Se=ie;Se<=1;Se+=ie){let Ie=oo(b[0],me,ro*Se);be.push(Ie)}else{let ie=Ut(S[0],b[0]),Se=Nt(ie,.5),Ie=Nt(ie,.51);be.push(Ut(me,Se),Ut(me,Ie),jt(me,Ie),jt(me,Se))}let ee=so(Bb(e[e.length-1].vector));if(k||_&&e.length===1)Be.push(ve);else if(p){let ie=Tu(ve,ee,E);for(let Se=1/29,Ie=Se;Ie<1;Ie+=Se)Be.push(oo(ie,ve,ro*3*Ie))}else Be.push(jt(ve,Nt(ee,E)),jt(ve,Nt(ee,E*.99)),Ut(ve,Nt(ee,E*.99)),Ut(ve,Nt(ee,E)))}return S.concat(Be,b.reverse(),be)}function qb(e,t={}){var n;let{streamline:s=.5,size:o=16,last:r=!1}=t;if(e.length===0)return[];let a=.15+(1-s)*.85,l=Array.isArray(e[0])?e:e.map(({x:h,y:m,pressure:_=.5})=>[h,m,_]);if(l.length===2){let h=l[1];l=l.slice(0,-1);for(let m=1;m<5;m++)l.push(Pa(l[0],h,m/4))}l.length===1&&(l=[...l,[...jt(l[0],[1,1]),...l[0].slice(2)]]);let c=[{point:[l[0][0],l[0][1]],pressure:l[0][2]>=0?l[0][2]:.25,vector:[1,1],distance:0,runningLength:0}],u=!1,d=0,f=c[0],p=l.length-1;for(let h=1;h<l.length;h++){let m=r&&h===p?l[h].slice(0,2):Pa(f.point,l[h],a);if(Db(f.point,m))continue;let _=Nb(m,f.point);if(d+=_,h<p&&!u){if(d<o)continue;u=!0}f={point:m,pressure:l[h][2]>=0?l[h][2]:.5,vector:Op(Ut(f.point,m)),distance:_,runningLength:d},c.push(f)}return c[0].vector=((n=c[1])==null?void 0:n.vector)||[0,0],c}function Hb(e,t={}){return Wb(qb(e,t),t)}var Vb=()=>({events:{},emit(e,...t){let n=this.events[e]||[];for(let s=0,o=n.length;s<o;s++)n[s](...t)},on(e,t){var n;return(n=this.events[e])!=null&&n.push(t)||(this.events[e]=[t]),()=>{var s;this.events[e]=(s=this.events[e])==null?void 0:s.filter(o=>t!==o)}}});function Gr(e,t){return e-t}function zb(e){return e<0?-1:1}function Yr(e){return[Math.abs(e),zb(e)]}function Pp(){const e=()=>((1+Math.random())*65536|0).toString(16).substring(1);return`${e()+e()}-${e()}-${e()}-${e()}-${e()}${e()}${e()}`}var Kb=2,yn=Kb,Hs=class{constructor(e){this.drauu=e,this.event=void 0,this.point=void 0,this.start=void 0,this.el=null}onSelected(e){}onUnselected(){}onStart(e){}onMove(e){return!1}onEnd(e){}get brush(){return this.drauu.brush}get shiftPressed(){return this.drauu.shiftPressed}get altPressed(){return this.drauu.altPressed}get svgElement(){return this.drauu.el}getMousePosition(e){var t;const n=this.drauu.el,s=this.drauu.options.coordinateScale??1;if(this.drauu.options.coordinateTransform===!1){const o=this.drauu.el.getBoundingClientRect();return{x:(e.pageX-o.left)*s,y:(e.pageY-o.top)*s,pressure:e.pressure}}else{const o=this.drauu.svgPoint;o.x=e.clientX,o.y=e.clientY;const r=o.matrixTransform((t=n.getScreenCTM())==null?void 0:t.inverse());return{x:r.x*s,y:r.y*s,pressure:e.pressure}}}createElement(e,t){const n=document.createElementNS("http://www.w3.org/2000/svg",e),s=t?{...this.brush,...t}:this.brush;return n.setAttribute("fill",s.fill??"transparent"),n.setAttribute("stroke",s.color),n.setAttribute("stroke-width",s.size.toString()),n.setAttribute("stroke-linecap","round"),s.dasharray&&n.setAttribute("stroke-dasharray",s.dasharray),n}attr(e,t){this.el.setAttribute(e,typeof t=="string"?t:t.toFixed(yn))}_setEvent(e){this.event=e,this.point=this.getMousePosition(e)}_eventDown(e){return this._setEvent(e),this.start=this.point,this.onStart(this.point)}_eventMove(e){return this._setEvent(e),this.onMove(this.point)}_eventUp(e){return this._setEvent(e),this.onEnd(this.point)}},Gb=class extends Hs{constructor(){super(...arguments),this.points=[]}onStart(e){return this.el=document.createElementNS("http://www.w3.org/2000/svg","path"),this.points=[e],this.attr("fill",this.brush.color),this.attr("d",this.getSvgData(this.points)),this.el}onMove(e){return this.el||this.onStart(e),this.points[this.points.length-1]!==e&&this.points.push(e),this.attr("d",this.getSvgData(this.points)),!0}onEnd(){const e=this.el;return this.el=null,!!e}getSvgData(e){const t=Hb(e,{size:this.brush.size*2,thinning:.9,simulatePressure:!1,start:{taper:5},end:{taper:5},...this.brush.stylusOptions});if(!t.length)return"";const n=t.reduce((s,[o,r],a,l)=>{const[c,u]=l[(a+1)%l.length];return s.push(o,r,(o+c)/2,(r+u)/2),s},["M",...t[0],"Q"]);return n.push("Z"),n.map(s=>typeof s=="number"?s.toFixed(2):s).join(" ")}},Yb=class extends Hs{onStart(e){return this.el=this.createElement("ellipse"),this.attr("cx",e.x),this.attr("cy",e.y),this.el}onMove(e){if(!this.el||!this.start)return!1;let[t,n]=Yr(e.x-this.start.x),[s,o]=Yr(e.y-this.start.y);if(this.shiftPressed){const r=Math.min(t,s);t=r,s=r}if(this.altPressed)this.attr("cx",this.start.x),this.attr("cy",this.start.y),this.attr("rx",t),this.attr("ry",s);else{const[r,a]=[this.start.x,this.start.x+t*n].sort(Gr),[l,c]=[this.start.y,this.start.y+s*o].sort(Gr);this.attr("cx",(r+a)/2),this.attr("cy",(l+c)/2),this.attr("rx",(a-r)/2),this.attr("ry",(c-l)/2)}return!0}onEnd(){const e=this.el;return this.el=null,!(!e||!e.getTotalLength())}};function Ip(e,t){const n=document.createElementNS("http://www.w3.org/2000/svg","defs"),s=document.createElementNS("http://www.w3.org/2000/svg","marker"),o=document.createElementNS("http://www.w3.org/2000/svg","path");return o.setAttribute("fill",t),s.setAttribute("id",e),s.setAttribute("viewBox","0 -5 10 10"),s.setAttribute("refX","5"),s.setAttribute("refY","0"),s.setAttribute("markerWidth","4"),s.setAttribute("markerHeight","4"),s.setAttribute("orient","auto"),o.setAttribute("d","M0,-5L10,0L0,5"),s.appendChild(o),n.appendChild(s),n}var Qb=class extends Hs{onStart(e){if(this.el=this.createElement("line",{fill:"transparent"}),this.attr("x1",e.x),this.attr("y1",e.y),this.attr("x2",e.x),this.attr("y2",e.y),this.brush.arrowEnd){const t=Pp(),n=document.createElementNS("http://www.w3.org/2000/svg","g");return n.append(Ip(t,this.brush.color)),n.append(this.el),this.attr("marker-end",`url(#${t})`),n}return this.el}onMove(e){if(!this.el)return!1;let{x:t,y:n}=e;if(this.shiftPressed){const s=e.x-this.start.x,o=e.y-this.start.y;if(o!==0){let r=s/o;r=Math.round(r),Math.abs(r)<=1?(t=this.start.x+o*r,n=this.start.y+o):(t=this.start.x+s,n=this.start.y)}}return this.altPressed?(this.attr("x1",this.start.x*2-t),this.attr("y1",this.start.y*2-n),this.attr("x2",t),this.attr("y2",n)):(this.attr("x1",this.start.x),this.attr("y1",this.start.y),this.attr("x2",t),this.attr("y2",n)),!0}onEnd(){const e=this.el;return this.el=null,!(!e||e.getTotalLength()<5)}},Zb=class extends Hs{onStart(e){return this.el=this.createElement("rect"),this.brush.cornerRadius&&(this.attr("rx",this.brush.cornerRadius),this.attr("ry",this.brush.cornerRadius)),this.attr("x",e.x),this.attr("y",e.y),this.el}onMove(e){if(!this.el||!this.start)return!1;let[t,n]=Yr(e.x-this.start.x),[s,o]=Yr(e.y-this.start.y);if(this.shiftPressed){const r=Math.min(t,s);t=r,s=r}if(this.altPressed)this.attr("x",this.start.x-t),this.attr("y",this.start.y-s),this.attr("width",t*2),this.attr("height",s*2);else{const[r,a]=[this.start.x,this.start.x+t*n].sort(Gr),[l,c]=[this.start.y,this.start.y+s*o].sort(Gr);this.attr("x",r),this.attr("y",l),this.attr("width",a-r),this.attr("height",c-l)}return!0}onEnd(){const e=this.el;return this.el=null,!(!e||!e.getTotalLength())}};function Jb(e,t){const n=e.x-t.x,s=e.y-t.y;return n*n+s*s}function Xb(e,t,n){let s=t.x,o=t.y,r=n.x-s,a=n.y-o;if(r!==0||a!==0){const l=((e.x-s)*r+(e.y-o)*a)/(r*r+a*a);l>1?(s=n.x,o=n.y):l>0&&(s+=r*l,o+=a*l)}return r=e.x-s,a=e.y-o,r*r+a*a}function ew(e,t){let n=e[0];const s=[n];let o;for(let r=1,a=e.length;r<a;r++)o=e[r],Jb(o,n)>t&&(s.push(o),n=o);return n!==o&&o&&s.push(o),s}function Ia(e,t,n,s,o){let r=s,a=0;for(let l=t+1;l<n;l++){const c=Xb(e[l],e[t],e[n]);c>r&&(a=l,r=c)}r>s&&(a-t>1&&Ia(e,t,a,s,o),o.push(e[a]),n-a>1&&Ia(e,a,n,s,o))}function tw(e,t){const n=e.length-1,s=[e[0]];return Ia(e,0,n,t,s),s.push(e[n]),s}function $u(e,t,n=!1){if(e.length<=2)return e;const s=t!==void 0?t*t:1;return e=n?e:ew(e,s),e=tw(e,s),e}var nw=class extends Hs{constructor(){super(...arguments),this.points=[],this.count=0}onStart(e){if(this.el=this.createElement("path",{fill:"transparent"}),this.points=[e],this.brush.arrowEnd){this.arrowId=Pp();const t=Ip(this.arrowId,this.brush.color);this.el.appendChild(t)}return this.el}onMove(e){return this.el||this.onStart(e),this.points[this.points.length-1]!==e&&(this.points.push(e),this.count+=1),this.count>5&&(this.points=$u(this.points,1,!0),this.count=0),this.attr("d",Ou(this.points)),!0}onEnd(){const e=this.el;return this.el=null,!(!e||(e.setAttribute("d",Ou($u(this.points,1,!0))),!e.getTotalLength()))}};function sw(e,t){const n=t.x-e.x,s=t.y-e.y;return{length:Math.sqrt(n**2+s**2),angle:Math.atan2(s,n)}}function Fu(e,t,n,s){const o=t||e,r=n||e,a=.2,l=sw(o,r),c=l.angle+(s?Math.PI:0),u=l.length*a,d=e.x+Math.cos(c)*u,f=e.y+Math.sin(c)*u;return{x:d,y:f}}function ow(e,t,n){const s=Fu(n[t-1],n[t-2],e),o=Fu(e,n[t-1],n[t+1],!0);return`C ${s.x.toFixed(yn)},${s.y.toFixed(yn)} ${o.x.toFixed(yn)},${o.y.toFixed(yn)} ${e.x.toFixed(yn)},${e.y.toFixed(yn)}`}function Ou(e){return e.reduce((t,n,s,o)=>s===0?`M ${n.x.toFixed(yn)},${n.y.toFixed(yn)}`:`${t} ${ow(n,s,o)}`,"")}var rw=class extends Hs{constructor(){super(...arguments),this.pathSubFactor=20,this.pathFragments=[]}onSelected(e){const t=(n,s)=>{if(n&&n.length)for(let o=0;o<n.length;o++){const r=n[o];if(r.getTotalLength){const a=r.getTotalLength();for(let l=0;l<this.pathSubFactor;l++){const c=r.getPointAtLength(a*l/this.pathSubFactor),u=r.getPointAtLength(a*(l+1)/this.pathSubFactor);this.pathFragments.push({x1:c.x,x2:u.x,y1:c.y,y2:u.y,segment:l,element:s||r})}}else r.children&&t(r.children,r)}};e&&t(e.children)}onUnselected(){this.pathFragments=[]}onStart(e){this.svgPointPrevious=this.svgElement.createSVGPoint(),this.svgPointPrevious.x=e.x,this.svgPointPrevious.y=e.y}onMove(e){this.svgPointCurrent=this.svgElement.createSVGPoint(),this.svgPointCurrent.x=e.x,this.svgPointCurrent.y=e.y;const t=this.checkAndEraseElement();return this.svgPointPrevious=this.svgPointCurrent,t}onEnd(){return this.svgPointPrevious=void 0,this.svgPointCurrent=void 0,!0}checkAndEraseElement(){const e=[];if(this.pathFragments.length)for(let t=0;t<this.pathFragments.length;t++){const n=this.pathFragments[t],s={x1:this.svgPointPrevious.x,x2:this.svgPointCurrent.x,y1:this.svgPointPrevious.y,y2:this.svgPointCurrent.y};this.lineLineIntersect(n,s)&&(n.element.remove(),e.push(t))}return e.length&&(this.pathFragments=this.pathFragments.filter((t,n)=>!e.includes(n))),e.length>0}lineLineIntersect(e,t){const n=e.x1,s=e.x2,o=t.x1,r=t.x2,a=e.y1,l=e.y2,c=t.y1,u=t.y2,d=(n-s)*(c-u)-(a-l)*(o-r),f=(n*l-a*s)*(o-r)-(n-s)*(o*u-c*r),p=(n*l-a*s)*(c-u)-(a-l)*(o*u-c*r),h=(m,_,k)=>m>=_&&m<=k?!0:m>=k&&m<=_;if(d===0)return!1;{const m={x:f/d,y:p/d};return h(m.x,n,s)&&h(m.y,a,l)&&h(m.x,o,r)&&h(m.y,c,u)}}};function iw(e){return{draw:new nw(e),stylus:new Gb(e),line:new Qb(e),rectangle:new Zb(e),ellipse:new Yb(e),eraseLine:new rw(e)}}var aw=class{constructor(e={}){this.options=e,this.el=null,this.svgPoint=null,this.eventEl=null,this.shiftPressed=!1,this.altPressed=!1,this.drawing=!1,this._emitter=Vb(),this._models=iw(this),this._undoStack=[],this._disposables=[],this.options.brush||(this.options.brush={color:"black",size:3,mode:"stylus"}),e.el&&this.mount(e.el,e.eventTarget)}get model(){return this._models[this.mode]}get mounted(){return!!this.el}get mode(){return this.options.brush.mode||"stylus"}set mode(e){this._models[this.mode].onUnselected(),this.options.brush.mode=e,this.model.onSelected(this.el)}get brush(){return this.options.brush}set brush(e){this.options.brush=e}resolveSelector(e){return typeof e=="string"?document.querySelector(e):e||null}mount(e,t){if(this.el)throw new Error("[drauu] already mounted, unmount previous target first");if(this.el=this.resolveSelector(e),!this.el)throw new Error("[drauu] target element not found");if(this.el.tagName.toLocaleLowerCase()!=="svg")throw new Error("[drauu] can only mount to a SVG element");if(!this.el.createSVGPoint)throw new Error("[drauu] SVG element must be create by document.createElementNS('http://www.w3.org/2000/svg', 'svg')");this.svgPoint=this.el.createSVGPoint();const n=this.resolveSelector(t)||this.el,s=this.eventStart.bind(this),o=this.eventMove.bind(this),r=this.eventEnd.bind(this),a=this.eventKeyboard.bind(this);n.addEventListener("pointerdown",s,{passive:!1}),window.addEventListener("pointermove",o,{passive:!1}),window.addEventListener("pointerup",r,{passive:!1}),window.addEventListener("pointercancel",r,{passive:!1}),window.addEventListener("keydown",a,!1),window.addEventListener("keyup",a,!1),this._disposables.push(()=>{n.removeEventListener("pointerdown",s),window.removeEventListener("pointermove",o),window.removeEventListener("pointerup",r),window.removeEventListener("pointercancel",r),window.removeEventListener("keydown",a,!1),window.removeEventListener("keyup",a,!1)}),this._emitter.emit("mounted")}unmount(){this._disposables.forEach(e=>e()),this._disposables.length=0,this.el=null,this._emitter.emit("unmounted")}on(e,t){return this._emitter.on(e,t)}undo(){const e=this.el;return e.lastElementChild?(this._undoStack.push(e.lastElementChild.cloneNode(!0)),e.lastElementChild.remove(),this._emitter.emit("changed"),!0):!1}redo(){return this._undoStack.length?(this.el.appendChild(this._undoStack.pop()),this._emitter.emit("changed"),!0):!1}canRedo(){return!!this._undoStack.length}canUndo(){var e;return!!((e=this.el)!=null&&e.lastElementChild)}eventMove(e){!this.acceptsInput(e)||!this.drawing||this.model._eventMove(e)&&(e.stopPropagation(),e.preventDefault(),this._emitter.emit("changed"))}eventStart(e){this.acceptsInput(e)&&(e.stopPropagation(),e.preventDefault(),this._currentNode&&this.cancel(),this.drawing=!0,this._emitter.emit("start"),this._currentNode=this.model._eventDown(e),this._currentNode&&this.mode!=="eraseLine"&&this.el.appendChild(this._currentNode),this._emitter.emit("changed"))}eventEnd(e){if(!this.acceptsInput(e)||!this.drawing)return;const t=this.model._eventUp(e);t?(t instanceof Element&&t!==this._currentNode&&(this._currentNode=t),this.commit()):this.cancel(),this.drawing=!1,this._emitter.emit("end"),this._emitter.emit("changed")}acceptsInput(e){return!this.options.acceptsInputTypes||this.options.acceptsInputTypes.includes(e.pointerType)}eventKeyboard(e){this.shiftPressed===e.shiftKey&&this.altPressed===e.altKey||(this.shiftPressed=e.shiftKey,this.altPressed=e.altKey,this.model.point&&this.model.onMove(this.model.point)&&this._emitter.emit("changed"))}commit(){this._undoStack.length=0;const e=this._currentNode;this._currentNode=void 0,this._emitter.emit("committed",e)}clear(){this._undoStack.length=0,this.cancel(),this.el.innerHTML="",this._emitter.emit("changed")}cancel(){this._currentNode&&(this.el.removeChild(this._currentNode),this._currentNode=void 0,this._emitter.emit("canceled"))}dump(){return this.el.innerHTML}load(e){this.clear(),this.el.innerHTML=e}};function lw(e){return new aw(e)}const Ua=["#ff595e","#ffca3a","#8ac926","#1982c4","#6a4c93","#ffffff","#000000"],tn=Gt("slidev-drawing-enabled",!1),EO=Gt("slidev-drawing-pinned",!1),cw=K(!1),uw=K(!1),dw=K(!1),Do=K(!1),us=M1(Gt("slidev-drawing-brush",{color:Ua[0],size:4,mode:"stylus"})),Pu=K("stylus"),Up=P(()=>$e.drawings.syncAll||vt.value);let Lo=!1;const io=P({get(){return Pu.value},set(e){Pu.value=e,e==="arrow"?(us.mode="line",us.arrowEnd=!0):(us.mode=e,us.arrowEnd=!1)}}),fw=qe({brush:us,acceptsInputTypes:P(()=>tn.value&&(!$e.drawings.presenterOnly||vt.value)?void 0:["pen"]),coordinateTransform:!1}),mt=ii(lw(fw));function pw(){mt.clear(),Up.value&&tp(He.value,"")}function Fl(){var e;uw.value=mt.canRedo(),cw.value=mt.canUndo(),dw.value=!!((e=mt.el)!=null&&e.children.length)}function hw(e){Lo=!0;const t=zr[e||He.value];t!=null?mt.load(t):mt.clear(),Fl(),Lo=!1}mt.on("changed",()=>{if(Fl(),!Lo){const e=mt.dump(),t=He.value;(zr[t]||"")!==e&&Up.value&&tp(t,mt.dump())}});P1(e=>{Lo=!0,e[He.value]!=null&&mt.load(e[He.value]||""),Lo=!1,Fl()});ot(()=>{ye(He,()=>{mt.mounted&&hw()},{immediate:!0})});mt.on("start",()=>Do.value=!0);mt.on("end",()=>Do.value=!1);window.addEventListener("keydown",e=>{if(!tn.value)return;const t=!e.ctrlKey&&!e.altKey&&!e.shiftKey&&!e.metaKey;let n=!0;e.code==="KeyZ"&&(e.ctrlKey||e.metaKey)?e.shiftKey?mt.redo():mt.undo():e.code==="Escape"?tn.value=!1:e.code==="KeyL"&&t?io.value="line":e.code==="KeyA"&&t?io.value="arrow":e.code==="KeyS"&&t?io.value="stylus":e.code==="KeyR"&&t?io.value="rectangle":e.code==="KeyE"&&t?io.value="ellipse":e.code==="KeyC"&&t?pw():e.code.startsWith("Digit")&&t&&+e.code[5]<=Ua.length?us.color=Ua[+e.code[5]-1]:n=!1,n&&(e.preventDefault(),e.stopPropagation())},!1);function Ye(...e){return P(()=>e.every(t=>Ke(t)))}function kt(e){return P(()=>!Ke(e))}const Iu=Iv(),ji=Gt("slidev-color-schema","auto"),Ba=P(()=>$e.colorSchema!=="auto"),Ol=P({get(){return Ba.value?$e.colorSchema==="dark":ji.value==="auto"?Iu.value:ji.value==="dark"},set(e){Ba.value||(ji.value=e===Iu.value?"auto":e?"dark":"light")}}),Bp=rp(Ol);Kt&&ye(Ol,e=>{const t=document.querySelector("html");t.classList.toggle("dark",e),t.classList.toggle("light",!e)},{immediate:!0});const Er=K(1),Tr=P(()=>Ge.length),Tt=K(0),Pl=K(0);function mw(){Tt.value>Er.value&&(Tt.value-=1)}function gw(){Tt.value<Tr.value&&(Tt.value+=1)}function yw(){if(Tt.value>Er.value){let e=Tt.value-Pl.value;e<Er.value&&(e=Er.value),Tt.value=e}}function vw(){if(Tt.value<Tr.value){let e=Tt.value+Pl.value;e>Tr.value&&(e=Tr.value),Tt.value=e}}function _w(){const{escape:e,space:t,shift:n,left:s,right:o,up:r,down:a,enter:l,d:c,g:u,o:d}=Cp;let f=[{name:"next_space",key:Ye(t,kt(n)),fn:Rn,autoRepeat:!0},{name:"prev_space",key:Ye(t,n),fn:Nn,autoRepeat:!0},{name:"next_right",key:Ye(o,kt(n),kt(ft)),fn:Rn,autoRepeat:!0},{name:"prev_left",key:Ye(s,kt(n),kt(ft)),fn:Nn,autoRepeat:!0},{name:"next_page_key",key:"pageDown",fn:Rn,autoRepeat:!0},{name:"prev_page_key",key:"pageUp",fn:Nn,autoRepeat:!0},{name:"next_down",key:Ye(a,kt(ft)),fn:No,autoRepeat:!0},{name:"prev_up",key:Ye(r,kt(ft)),fn:()=>jo(!1),autoRepeat:!0},{name:"next_shift",key:Ye(o,n),fn:No,autoRepeat:!0},{name:"prev_shift",key:Ye(s,n),fn:()=>jo(!1),autoRepeat:!0},{name:"toggle_dark",key:Ye(c,kt(tn)),fn:Bp},{name:"toggle_overview",key:Ye(d,kt(tn)),fn:Fp},{name:"hide_overview",key:Ye(e,kt(tn)),fn:()=>ft.value=!1},{name:"goto",key:Ye(u,kt(tn)),fn:()=>Us.value=!Us.value},{name:"next_overview",key:Ye(o,ft),fn:gw},{name:"prev_overview",key:Ye(s,ft),fn:mw},{name:"up_overview",key:Ye(r,ft),fn:yw},{name:"down_overview",key:Ye(a,ft),fn:vw},{name:"goto_from_overview",key:Ye(l,ft),fn:()=>{qs(Tt.value),ft.value=!1}}];const p=new Set(f.map(m=>m.name));if(f.filter(m=>m.name&&p.has(m.name)).length===0){const m=["========== WARNING ==========","defineShortcutsSetup did not return any of the base shortcuts.","See https://sli.dev/custom/config-shortcuts.html for migration.",'If it is intentional, return at least one shortcut with one of the base names (e.g. name:"goto").'].join(`

`);alert(m),console.warn(m)}return f}const Mp=Ye(kt(Ib),kt(Ub),Ob);function bw(e,t,n=!1){typeof e=="string"&&(e=Cp[e]);const s=Ye(e,Mp);let o=0,r;const a=()=>{if(clearTimeout(r),!s.value){o=0;return}n&&(r=setTimeout(a,Math.max(1e3-o*250,150)),o++),t()};return ye(s,a,{flush:"sync"})}function ww(e,t){return gv(e,n=>{Mp.value&&(n.repeat||t())})}function xw(){const e=_w();new Map(e.map(n=>[n.key,n])).forEach(n=>{n.fn&&bw(n.key,n.fn,n.autoRepeat)}),ww("f",()=>$p.toggle())}const kw={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Sw=i("path",{fill:"currentColor",d:"M24 9.4L22.6 8L16 14.6L9.4 8L8 9.4l6.6 6.6L8 22.6L9.4 24l6.6-6.6l6.6 6.6l1.4-1.4l-6.6-6.6L24 9.4z"},null,-1),Aw=[Sw];function Ew(e,t){return w(),$("svg",kw,Aw)}const Tw={name:"carbon-close",render:Ew};function Il(e,t=""){var o,r;const n=["slidev-page",t],s=(r=(o=e==null?void 0:e.meta)==null?void 0:o.slide)==null?void 0:r.no;return s!=null&&n.push(`slidev-page-${s}`),n.filter(Boolean).join(" ")}const Cw=ke({__name:"SlideContainer",props:{width:{type:Number},meta:{default:()=>({})},scale:{type:[Number,String]}},setup(e){const t=e;R(G);const n=K(),s=Vv(n),o=P(()=>t.width?t.width:s.width.value),r=P(()=>t.width?t.width/Bn:s.height.value);t.width&&Ss(()=>{n.value&&(n.value.style.width=`${o.value}px`,n.value.style.height=`${r.value}px`)});const a=P(()=>o.value/r.value),l=P(()=>t.scale&&!_n.value?t.scale:a.value<Bn?o.value/Mn:r.value*Bn/Mn),c=P(()=>({height:`${El}px`,width:`${Mn}px`,transform:`translate(-50%, -50%) scale(${l.value})`})),u=P(()=>({"select-none":!$e.selectable}));return At(Zf,l),(d,f)=>(w(),$("div",{id:"slide-container",ref_key:"root",ref:n,class:Re(u.value)},[i("div",{id:"slide-content",style:Xe(c.value)},[wt(d.$slots,"default")],4),wt(d.$slots,"controls")],2))}});const Y=(e,t)=>{const n=e.__vccOpts||e;for(const[s,o]of t)n[s]=o;return n},Dp=Y(Cw,[["__file","/home/ben/Workspace/demystifying-unicode/node_modules/@slidev/client/internals/SlideContainer.vue"]]),Ul=ke({name:"SlideWrapper",props:{clicks:{type:[Number,String],default:0},clicksElements:{type:Array,default:()=>[]},clicksOrderMap:{type:Map,default:()=>new Map},clicksDisabled:{type:Boolean,default:!1},context:{type:String,default:"main"},is:{type:Object,default:void 0},route:{type:Object,default:void 0}},setup(e,{emit:t}){const n=en(e,"clicks",t),s=en(e,"clicksElements",t),o=en(e,"clicksDisabled",t),r=en(e,"clicksOrderMap",t);s.value.length=0,At(h1,e.route),At(m1,e.context),At(yo,n),At(vo,o),At(rs,s),At(wa,r)},render(){var e,t;return this.$props.is?Je(this.$props.is):(t=(e=this.$slots)==null?void 0:e.default)==null?void 0:t.call(e)}}),$w=["innerHTML"],Fw=ke({__name:"DrawingPreview",props:{page:{type:Number,required:!0}},setup(e){return R(G),(t,n)=>O(zr)[t.page]?(w(),$("svg",{key:0,class:"w-full h-full absolute top-0 pointer-events-none",innerHTML:O(zr)[t.page]},null,8,$w)):ge("v-if",!0)}}),Lp=Y(Fw,[["__file","/home/ben/Workspace/demystifying-unicode/node_modules/@slidev/client/internals/DrawingPreview.vue"]]),Ow=Object.freeze(Object.defineProperty({__proto__:null,default:Lp},Symbol.toStringTag,{value:"Module"})),Pw={class:"slides-overview bg-main !bg-opacity-75 p-16 overflow-y-auto"},Iw=["onClick"],Wi=4*16*2,Uu=2*16,Uw=ke({__name:"SlidesOverview",props:{modelValue:{type:Boolean,required:!0}},emits:[],setup(e,{emit:t}){const n=e;R(G);const s=en(n,"modelValue",t);function o(){s.value=!1}function r(f){qs(f),o()}function a(f){return f===Tt.value}const l=Oa.smaller("xs"),c=Oa.smaller("sm"),u=P(()=>l.value?_s.width.value-Wi:c.value?(_s.width.value-Wi-Uu)/2:300),d=P(()=>Math.floor((_s.width.value-Wi)/(u.value+Uu)));return Ss(()=>{Tt.value=He.value,Pl.value=d.value}),(f,p)=>{const h=Tw;return w(),$(Ce,null,[Ht(i("div",Pw,[i("div",{class:"grid gap-y-4 gap-x-8 w-full",style:Xe(`grid-template-columns: repeat(auto-fit,minmax(${u.value}px,1fr))`)},[(w(!0),$(Ce,null,As(O(Ge),(m,_)=>(w(),$("div",{key:m.path,class:"relative"},[i("div",{class:Re(["inline-block border rounded border-opacity-50 overflow-hidden bg-main hover:border-$slidev-theme-primary",{"border-$slidev-theme-primary":a(_+1),"border-gray-400":!a(_+1)}]),style:Xe(O(Tl)),onClick:k=>r(+m.path)},[(w(),H(Dp,{key:m.path,width:u.value,"clicks-disabled":!0,class:"pointer-events-none"},{default:j(()=>[m!=null&&m.component?(w(),H(O(Ul),{key:0,is:m.component,"clicks-disabled":!0,class:Re(O(Il)(m)),route:m,context:"overview"},null,8,["is","class","route"])):ge("v-if",!0),V(Lp,{page:+m.path},null,8,["page"])]),_:2},1032,["width"]))],14,Iw),i("div",{class:"absolute top-0 opacity-50",style:Xe(`left: ${u.value+5}px`)},wn(_+1),5)]))),128))],4)],512),[[Nf,O(s)]]),O(s)?(w(),$("button",{key:0,class:"fixed text-2xl top-4 right-4 slidev-icon-btn text-gray-400",onClick:o},[V(h)])):ge("v-if",!0)],64)}}});const Bw=Y(Uw,[["__file","/home/ben/Workspace/demystifying-unicode/node_modules/@slidev/client/internals/SlidesOverview.vue"]]),Mw="/demystifying-unicode/assets/logo-b72bde5d.png",Dw={key:0,class:"fixed top-0 bottom-0 left-0 right-0 grid z-20"},Lw=ke({__name:"Modal",props:{modelValue:{default:!1},class:{default:""}},emits:["modelValue"],setup(e,{emit:t}){const n=e;R(G);const s=en(n,"modelValue",t);function o(){s.value=!1}return(r,a)=>(w(),H(df,null,[O(s)?(w(),$("div",Dw,[i("div",{bg:"black opacity-80",class:"absolute top-0 bottom-0 left-0 right-0 -z-1",onClick:a[0]||(a[0]=l=>o())}),i("div",{class:Re(["m-auto rounded-md bg-main shadow",n.class]),"dark:border":"~ main"},[wt(r.$slots,"default")],2)])):ge("v-if",!0)],1024))}}),Rw=Y(Lw,[["__file","/home/ben/Workspace/demystifying-unicode/node_modules/@slidev/client/internals/Modal.vue"]]),Nw={class:"slidev-info-dialog slidev-layout flex flex-col gap-4 text-base"},jw=["innerHTML"],Ww=i("a",{href:"https://github.com/slidevjs/slidev",target:"_blank",class:"!opacity-100 !border-none !text-current"},[i("div",{class:"flex gap-1 children:my-auto"},[i("div",{class:"opacity-50 text-sm mr-2"},"Powered by"),i("img",{class:"w-5 h-5",src:Mw,alt:"Slidev"}),i("div",{style:{color:"#2082A6"}},[i("b",null,"Sli"),y("dev ")])])],-1),qw=ke({__name:"InfoDialog",props:{modelValue:{default:!1}},emits:["modelValue"],setup(e,{emit:t}){const n=e;R(G);const s=en(n,"modelValue",t),o=P(()=>typeof $e.info=="string");return(r,a)=>(w(),H(Rw,{modelValue:O(s),"onUpdate:modelValue":a[0]||(a[0]=l=>Fe(s)?s.value=l:null),class:"px-6 py-4"},{default:j(()=>[i("div",Nw,[o.value?(w(),$("div",{key:0,class:"mb-4",innerHTML:O($e).info},null,8,jw)):ge("v-if",!0),Ww])]),_:1},8,["modelValue"]))}});const Hw=Y(qw,[["__file","/home/ben/Workspace/demystifying-unicode/node_modules/@slidev/client/internals/InfoDialog.vue"]]);function xn(e){return Array.isArray?Array.isArray(e):jp(e)==="[object Array]"}const Vw=1/0;function zw(e){if(typeof e=="string")return e;let t=e+"";return t=="0"&&1/e==-Vw?"-0":t}function Kw(e){return e==null?"":zw(e)}function nn(e){return typeof e=="string"}function Rp(e){return typeof e=="number"}function Gw(e){return e===!0||e===!1||Yw(e)&&jp(e)=="[object Boolean]"}function Np(e){return typeof e=="object"}function Yw(e){return Np(e)&&e!==null}function Et(e){return e!=null}function qi(e){return!e.trim().length}function jp(e){return e==null?e===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}const Qw="Incorrect 'index' type",Zw=e=>`Invalid value for key ${e}`,Jw=e=>`Pattern length exceeds max of ${e}.`,Xw=e=>`Missing ${e} property in key`,ex=e=>`Property 'weight' in key '${e}' must be a positive integer`,Bu=Object.prototype.hasOwnProperty;class tx{constructor(t){this._keys=[],this._keyMap={};let n=0;t.forEach(s=>{let o=Wp(s);n+=o.weight,this._keys.push(o),this._keyMap[o.id]=o,n+=o.weight}),this._keys.forEach(s=>{s.weight/=n})}get(t){return this._keyMap[t]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function Wp(e){let t=null,n=null,s=null,o=1,r=null;if(nn(e)||xn(e))s=e,t=Mu(e),n=Ma(e);else{if(!Bu.call(e,"name"))throw new Error(Xw("name"));const a=e.name;if(s=a,Bu.call(e,"weight")&&(o=e.weight,o<=0))throw new Error(ex(a));t=Mu(a),n=Ma(a),r=e.getFn}return{path:t,id:n,weight:o,src:s,getFn:r}}function Mu(e){return xn(e)?e:e.split(".")}function Ma(e){return xn(e)?e.join("."):e}function nx(e,t){let n=[],s=!1;const o=(r,a,l)=>{if(Et(r))if(!a[l])n.push(r);else{let c=a[l];const u=r[c];if(!Et(u))return;if(l===a.length-1&&(nn(u)||Rp(u)||Gw(u)))n.push(Kw(u));else if(xn(u)){s=!0;for(let d=0,f=u.length;d<f;d+=1)o(u[d],a,l+1)}else a.length&&o(u,a,l+1)}};return o(e,nn(t)?t.split("."):t,0),s?n:n[0]}const sx={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},ox={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(e,t)=>e.score===t.score?e.idx<t.idx?-1:1:e.score<t.score?-1:1},rx={location:0,threshold:.6,distance:100},ix={useExtendedSearch:!1,getFn:nx,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var fe={...ox,...sx,...rx,...ix};const ax=/[^ ]+/g;function lx(e=1,t=3){const n=new Map,s=Math.pow(10,t);return{get(o){const r=o.match(ax).length;if(n.has(r))return n.get(r);const a=1/Math.pow(r,.5*e),l=parseFloat(Math.round(a*s)/s);return n.set(r,l),l},clear(){n.clear()}}}class Bl{constructor({getFn:t=fe.getFn,fieldNormWeight:n=fe.fieldNormWeight}={}){this.norm=lx(n,3),this.getFn=t,this.isCreated=!1,this.setIndexRecords()}setSources(t=[]){this.docs=t}setIndexRecords(t=[]){this.records=t}setKeys(t=[]){this.keys=t,this._keysMap={},t.forEach((n,s)=>{this._keysMap[n.id]=s})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,nn(this.docs[0])?this.docs.forEach((t,n)=>{this._addString(t,n)}):this.docs.forEach((t,n)=>{this._addObject(t,n)}),this.norm.clear())}add(t){const n=this.size();nn(t)?this._addString(t,n):this._addObject(t,n)}removeAt(t){this.records.splice(t,1);for(let n=t,s=this.size();n<s;n+=1)this.records[n].i-=1}getValueForItemAtKeyId(t,n){return t[this._keysMap[n]]}size(){return this.records.length}_addString(t,n){if(!Et(t)||qi(t))return;let s={v:t,i:n,n:this.norm.get(t)};this.records.push(s)}_addObject(t,n){let s={i:n,$:{}};this.keys.forEach((o,r)=>{let a=o.getFn?o.getFn(t):this.getFn(t,o.path);if(Et(a)){if(xn(a)){let l=[];const c=[{nestedArrIndex:-1,value:a}];for(;c.length;){const{nestedArrIndex:u,value:d}=c.pop();if(Et(d))if(nn(d)&&!qi(d)){let f={v:d,i:u,n:this.norm.get(d)};l.push(f)}else xn(d)&&d.forEach((f,p)=>{c.push({nestedArrIndex:p,value:f})})}s.$[r]=l}else if(nn(a)&&!qi(a)){let l={v:a,n:this.norm.get(a)};s.$[r]=l}}}),this.records.push(s)}toJSON(){return{keys:this.keys,records:this.records}}}function qp(e,t,{getFn:n=fe.getFn,fieldNormWeight:s=fe.fieldNormWeight}={}){const o=new Bl({getFn:n,fieldNormWeight:s});return o.setKeys(e.map(Wp)),o.setSources(t),o.create(),o}function cx(e,{getFn:t=fe.getFn,fieldNormWeight:n=fe.fieldNormWeight}={}){const{keys:s,records:o}=e,r=new Bl({getFn:t,fieldNormWeight:n});return r.setKeys(s),r.setIndexRecords(o),r}function gr(e,{errors:t=0,currentLocation:n=0,expectedLocation:s=0,distance:o=fe.distance,ignoreLocation:r=fe.ignoreLocation}={}){const a=t/e.length;if(r)return a;const l=Math.abs(s-n);return o?a+l/o:l?1:a}function ux(e=[],t=fe.minMatchCharLength){let n=[],s=-1,o=-1,r=0;for(let a=e.length;r<a;r+=1){let l=e[r];l&&s===-1?s=r:!l&&s!==-1&&(o=r-1,o-s+1>=t&&n.push([s,o]),s=-1)}return e[r-1]&&r-s>=t&&n.push([s,r-1]),n}const as=32;function dx(e,t,n,{location:s=fe.location,distance:o=fe.distance,threshold:r=fe.threshold,findAllMatches:a=fe.findAllMatches,minMatchCharLength:l=fe.minMatchCharLength,includeMatches:c=fe.includeMatches,ignoreLocation:u=fe.ignoreLocation}={}){if(t.length>as)throw new Error(Jw(as));const d=t.length,f=e.length,p=Math.max(0,Math.min(s,f));let h=r,m=p;const _=l>1||c,k=_?Array(f):[];let x;for(;(x=e.indexOf(t,m))>-1;){let M=gr(t,{currentLocation:x,expectedLocation:p,distance:o,ignoreLocation:u});if(h=Math.min(M,h),m=x+d,_){let I=0;for(;I<d;)k[x+I]=1,I+=1}}m=-1;let S=[],b=1,A=d+f;const E=1<<d-1;for(let M=0;M<d;M+=1){let I=0,N=A;for(;I<N;)gr(t,{errors:M,currentLocation:p+N,expectedLocation:p,distance:o,ignoreLocation:u})<=h?I=N:A=N,N=Math.floor((A-I)/2+I);A=N;let ne=Math.max(1,p-N+1),ce=a?f:Math.min(p+N,f)+d,Q=Array(ce+2);Q[ce+1]=(1<<M)-1;for(let ve=ce;ve>=ne;ve-=1){let be=ve-1,Be=n[e.charAt(be)];if(_&&(k[be]=+!!Be),Q[ve]=(Q[ve+1]<<1|1)&Be,M&&(Q[ve]|=(S[ve+1]|S[ve])<<1|1|S[ve+1]),Q[ve]&E&&(b=gr(t,{errors:M,currentLocation:be,expectedLocation:p,distance:o,ignoreLocation:u}),b<=h)){if(h=b,m=be,m<=p)break;ne=Math.max(1,2*p-m)}}if(gr(t,{errors:M+1,currentLocation:p,expectedLocation:p,distance:o,ignoreLocation:u})>h)break;S=Q}const C={isMatch:m>=0,score:Math.max(.001,b)};if(_){const M=ux(k,l);M.length?c&&(C.indices=M):C.isMatch=!1}return C}function fx(e){let t={};for(let n=0,s=e.length;n<s;n+=1){const o=e.charAt(n);t[o]=(t[o]||0)|1<<s-n-1}return t}class Hp{constructor(t,{location:n=fe.location,threshold:s=fe.threshold,distance:o=fe.distance,includeMatches:r=fe.includeMatches,findAllMatches:a=fe.findAllMatches,minMatchCharLength:l=fe.minMatchCharLength,isCaseSensitive:c=fe.isCaseSensitive,ignoreLocation:u=fe.ignoreLocation}={}){if(this.options={location:n,threshold:s,distance:o,includeMatches:r,findAllMatches:a,minMatchCharLength:l,isCaseSensitive:c,ignoreLocation:u},this.pattern=c?t:t.toLowerCase(),this.chunks=[],!this.pattern.length)return;const d=(p,h)=>{this.chunks.push({pattern:p,alphabet:fx(p),startIndex:h})},f=this.pattern.length;if(f>as){let p=0;const h=f%as,m=f-h;for(;p<m;)d(this.pattern.substr(p,as),p),p+=as;if(h){const _=f-as;d(this.pattern.substr(_),_)}}else d(this.pattern,0)}searchIn(t){const{isCaseSensitive:n,includeMatches:s}=this.options;if(n||(t=t.toLowerCase()),this.pattern===t){let m={isMatch:!0,score:0};return s&&(m.indices=[[0,t.length-1]]),m}const{location:o,distance:r,threshold:a,findAllMatches:l,minMatchCharLength:c,ignoreLocation:u}=this.options;let d=[],f=0,p=!1;this.chunks.forEach(({pattern:m,alphabet:_,startIndex:k})=>{const{isMatch:x,score:S,indices:b}=dx(t,m,_,{location:o+k,distance:r,threshold:a,findAllMatches:l,minMatchCharLength:c,includeMatches:s,ignoreLocation:u});x&&(p=!0),f+=S,x&&b&&(d=[...d,...b])});let h={isMatch:p,score:p?f/this.chunks.length:1};return p&&s&&(h.indices=d),h}}class zn{constructor(t){this.pattern=t}static isMultiMatch(t){return Du(t,this.multiRegex)}static isSingleMatch(t){return Du(t,this.singleRegex)}search(){}}function Du(e,t){const n=e.match(t);return n?n[1]:null}class px extends zn{constructor(t){super(t)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(t){const n=t===this.pattern;return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class hx extends zn{constructor(t){super(t)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(t){const s=t.indexOf(this.pattern)===-1;return{isMatch:s,score:s?0:1,indices:[0,t.length-1]}}}class mx extends zn{constructor(t){super(t)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(t){const n=t.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class gx extends zn{constructor(t){super(t)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(t){const n=!t.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,t.length-1]}}}class yx extends zn{constructor(t){super(t)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(t){const n=t.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[t.length-this.pattern.length,t.length-1]}}}class vx extends zn{constructor(t){super(t)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(t){const n=!t.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,t.length-1]}}}class Vp extends zn{constructor(t,{location:n=fe.location,threshold:s=fe.threshold,distance:o=fe.distance,includeMatches:r=fe.includeMatches,findAllMatches:a=fe.findAllMatches,minMatchCharLength:l=fe.minMatchCharLength,isCaseSensitive:c=fe.isCaseSensitive,ignoreLocation:u=fe.ignoreLocation}={}){super(t),this._bitapSearch=new Hp(t,{location:n,threshold:s,distance:o,includeMatches:r,findAllMatches:a,minMatchCharLength:l,isCaseSensitive:c,ignoreLocation:u})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(t){return this._bitapSearch.searchIn(t)}}class zp extends zn{constructor(t){super(t)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(t){let n=0,s;const o=[],r=this.pattern.length;for(;(s=t.indexOf(this.pattern,n))>-1;)n=s+r,o.push([s,n-1]);const a=!!o.length;return{isMatch:a,score:a?0:1,indices:o}}}const Da=[px,zp,mx,gx,vx,yx,hx,Vp],Lu=Da.length,_x=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,bx="|";function wx(e,t={}){return e.split(bx).map(n=>{let s=n.trim().split(_x).filter(r=>r&&!!r.trim()),o=[];for(let r=0,a=s.length;r<a;r+=1){const l=s[r];let c=!1,u=-1;for(;!c&&++u<Lu;){const d=Da[u];let f=d.isMultiMatch(l);f&&(o.push(new d(f,t)),c=!0)}if(!c)for(u=-1;++u<Lu;){const d=Da[u];let f=d.isSingleMatch(l);if(f){o.push(new d(f,t));break}}}return o})}const xx=new Set([Vp.type,zp.type]);class kx{constructor(t,{isCaseSensitive:n=fe.isCaseSensitive,includeMatches:s=fe.includeMatches,minMatchCharLength:o=fe.minMatchCharLength,ignoreLocation:r=fe.ignoreLocation,findAllMatches:a=fe.findAllMatches,location:l=fe.location,threshold:c=fe.threshold,distance:u=fe.distance}={}){this.query=null,this.options={isCaseSensitive:n,includeMatches:s,minMatchCharLength:o,findAllMatches:a,ignoreLocation:r,location:l,threshold:c,distance:u},this.pattern=n?t:t.toLowerCase(),this.query=wx(this.pattern,this.options)}static condition(t,n){return n.useExtendedSearch}searchIn(t){const n=this.query;if(!n)return{isMatch:!1,score:1};const{includeMatches:s,isCaseSensitive:o}=this.options;t=o?t:t.toLowerCase();let r=0,a=[],l=0;for(let c=0,u=n.length;c<u;c+=1){const d=n[c];a.length=0,r=0;for(let f=0,p=d.length;f<p;f+=1){const h=d[f],{isMatch:m,indices:_,score:k}=h.search(t);if(m){if(r+=1,l+=k,s){const x=h.constructor.type;xx.has(x)?a=[...a,..._]:a.push(_)}}else{l=0,r=0,a.length=0;break}}if(r){let f={isMatch:!0,score:l/r};return s&&(f.indices=a),f}}return{isMatch:!1,score:1}}}const La=[];function Sx(...e){La.push(...e)}function Ra(e,t){for(let n=0,s=La.length;n<s;n+=1){let o=La[n];if(o.condition(e,t))return new o(e,t)}return new Hp(e,t)}const Qr={AND:"$and",OR:"$or"},Na={PATH:"$path",PATTERN:"$val"},ja=e=>!!(e[Qr.AND]||e[Qr.OR]),Ax=e=>!!e[Na.PATH],Ex=e=>!xn(e)&&Np(e)&&!ja(e),Ru=e=>({[Qr.AND]:Object.keys(e).map(t=>({[t]:e[t]}))});function Kp(e,t,{auto:n=!0}={}){const s=o=>{let r=Object.keys(o);const a=Ax(o);if(!a&&r.length>1&&!ja(o))return s(Ru(o));if(Ex(o)){const c=a?o[Na.PATH]:r[0],u=a?o[Na.PATTERN]:o[c];if(!nn(u))throw new Error(Zw(c));const d={keyId:Ma(c),pattern:u};return n&&(d.searcher=Ra(u,t)),d}let l={children:[],operator:r[0]};return r.forEach(c=>{const u=o[c];xn(u)&&u.forEach(d=>{l.children.push(s(d))})}),l};return ja(e)||(e=Ru(e)),s(e)}function Tx(e,{ignoreFieldNorm:t=fe.ignoreFieldNorm}){e.forEach(n=>{let s=1;n.matches.forEach(({key:o,norm:r,score:a})=>{const l=o?o.weight:null;s*=Math.pow(a===0&&l?Number.EPSILON:a,(l||1)*(t?1:r))}),n.score=s})}function Cx(e,t){const n=e.matches;t.matches=[],Et(n)&&n.forEach(s=>{if(!Et(s.indices)||!s.indices.length)return;const{indices:o,value:r}=s;let a={indices:o,value:r};s.key&&(a.key=s.key.src),s.idx>-1&&(a.refIndex=s.idx),t.matches.push(a)})}function $x(e,t){t.score=e.score}function Fx(e,t,{includeMatches:n=fe.includeMatches,includeScore:s=fe.includeScore}={}){const o=[];return n&&o.push(Cx),s&&o.push($x),e.map(r=>{const{idx:a}=r,l={item:t[a],refIndex:a};return o.length&&o.forEach(c=>{c(r,l)}),l})}class Vs{constructor(t,n={},s){this.options={...fe,...n},this.options.useExtendedSearch,this._keyStore=new tx(this.options.keys),this.setCollection(t,s)}setCollection(t,n){if(this._docs=t,n&&!(n instanceof Bl))throw new Error(Qw);this._myIndex=n||qp(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(t){Et(t)&&(this._docs.push(t),this._myIndex.add(t))}remove(t=()=>!1){const n=[];for(let s=0,o=this._docs.length;s<o;s+=1){const r=this._docs[s];t(r,s)&&(this.removeAt(s),s-=1,o-=1,n.push(r))}return n}removeAt(t){this._docs.splice(t,1),this._myIndex.removeAt(t)}getIndex(){return this._myIndex}search(t,{limit:n=-1}={}){const{includeMatches:s,includeScore:o,shouldSort:r,sortFn:a,ignoreFieldNorm:l}=this.options;let c=nn(t)?nn(this._docs[0])?this._searchStringList(t):this._searchObjectList(t):this._searchLogical(t);return Tx(c,{ignoreFieldNorm:l}),r&&c.sort(a),Rp(n)&&n>-1&&(c=c.slice(0,n)),Fx(c,this._docs,{includeMatches:s,includeScore:o})}_searchStringList(t){const n=Ra(t,this.options),{records:s}=this._myIndex,o=[];return s.forEach(({v:r,i:a,n:l})=>{if(!Et(r))return;const{isMatch:c,score:u,indices:d}=n.searchIn(r);c&&o.push({item:r,idx:a,matches:[{score:u,value:r,norm:l,indices:d}]})}),o}_searchLogical(t){const n=Kp(t,this.options),s=(l,c,u)=>{if(!l.children){const{keyId:f,searcher:p}=l,h=this._findMatches({key:this._keyStore.get(f),value:this._myIndex.getValueForItemAtKeyId(c,f),searcher:p});return h&&h.length?[{idx:u,item:c,matches:h}]:[]}const d=[];for(let f=0,p=l.children.length;f<p;f+=1){const h=l.children[f],m=s(h,c,u);if(m.length)d.push(...m);else if(l.operator===Qr.AND)return[]}return d},o=this._myIndex.records,r={},a=[];return o.forEach(({$:l,i:c})=>{if(Et(l)){let u=s(n,l,c);u.length&&(r[c]||(r[c]={idx:c,item:l,matches:[]},a.push(r[c])),u.forEach(({matches:d})=>{r[c].matches.push(...d)}))}}),a}_searchObjectList(t){const n=Ra(t,this.options),{keys:s,records:o}=this._myIndex,r=[];return o.forEach(({$:a,i:l})=>{if(!Et(a))return;let c=[];s.forEach((u,d)=>{c.push(...this._findMatches({key:u,value:a[d],searcher:n}))}),c.length&&r.push({idx:l,item:a,matches:c})}),r}_findMatches({key:t,value:n,searcher:s}){if(!Et(n))return[];let o=[];if(xn(n))n.forEach(({v:r,i:a,n:l})=>{if(!Et(r))return;const{isMatch:c,score:u,indices:d}=s.searchIn(r);c&&o.push({score:u,key:t,value:r,idx:a,norm:l,indices:d})});else{const{v:r,n:a}=n,{isMatch:l,score:c,indices:u}=s.searchIn(r);l&&o.push({score:c,key:t,value:r,norm:a,indices:u})}return o}}Vs.version="6.6.2";Vs.createIndex=qp;Vs.parseIndex=cx;Vs.config=fe;Vs.parseQuery=Kp;Sx(kx);const Ox={class:"bg-main transform",shadow:"~",p:"x-4 y-2",border:"~ transparent rounded dark:main"},Px=["value","disabled","onKeydown"],Ix=["border","onClick"],Ux={"w-4":"","text-right":"",op50:"","text-sm":""},Bx=ke({__name:"Goto",setup(e){R(G);const t=K(),n=K(),s=K(),o=K(),r=K(""),a=K(0);function l(b){return b!=null}const c=P(()=>new Vs(Ge.map(b=>{var A;return(A=b.meta)==null?void 0:A.slide}).filter(l),{keys:["no","title"],threshold:.3,shouldSort:!0,minMatchCharLength:1})),u=P(()=>r.value.startsWith("/")?r.value.substring(1):r.value),d=P(()=>c.value.search(u.value).map(b=>b.item)),f=P(()=>!!d.value.length);function p(){if(f.value){const b=d.value.at(a.value||0);b&&qs(b.no)}h()}function h(){r.value="",Us.value=!1}function m(b){b.preventDefault(),a.value++,a.value>=d.value.length&&(a.value=0),k()}function _(b){b.preventDefault(),a.value--,a.value<=-2&&(a.value=d.value.length-1),k()}function k(){var A;const b=(A=o.value)==null?void 0:A[a.value];b&&s.value&&(b.offsetTop+b.offsetHeight>s.value.offsetHeight+s.value.scrollTop?s.value.scrollTo({behavior:"smooth",top:b.offsetTop+b.offsetHeight-s.value.offsetHeight+1}):b.offsetTop<s.value.scrollTop&&s.value.scrollTo({behavior:"smooth",top:b.offsetTop}))}function x(b){a.value=0,r.value=b.target.value}function S(b){qs(b),h()}return ye(Us,async b=>{var A;b?(r.value="",a.value=0,setTimeout(()=>{var E;return(E=n.value)==null?void 0:E.focus()},0)):(A=n.value)==null||A.blur()}),ye(Ln,()=>{var b;(b=t.value)!=null&&b.contains(Ln.value)||h()}),(b,A)=>(w(),$("div",{id:"slidev-goto-dialog",ref_key:"container",ref:t,class:Re(["fixed right-5 transition-all",O(Us)?"top-5":"-top-20"]),"w-90":"","max-w-90":"","min-w-90":""},[i("div",Ox,[i("input",{id:"slidev-goto-input",ref_key:"input",ref:n,value:r.value,type:"text",disabled:!O(Us),class:Re(["outline-none bg-transparent",{"text-red-400":!f.value&&r.value}]),placeholder:"Goto...",onKeydown:[cr(p,["enter"]),cr(h,["escape"]),cr(m,["down"]),cr(_,["up"])],onInput:x},null,42,Px)]),d.value.length>0?(w(),$("ul",{key:0,ref_key:"list",ref:s,class:"autocomplete-list",shadow:"~",border:"~ transparent rounded dark:main"},[(w(!0),$(Ce,null,As(d.value,(E,C)=>(w(),$("li",{ref_for:!0,ref_key:"items",ref:o,key:E.id,role:"button",tabindex:"0",p:"x-4 y-2","cursor-pointer":"",hover:"op100",flex:"~ gap-2","w-90":"","items-center":"",border:C===0?"":"t main",class:Re(a.value===C?"bg-active op100":"op80"),onClick:my(M=>S(E.no),["stop"])},[i("div",Ux,wn(E.no),1),y(" "+wn(E.title),1)],10,Ix))),128))],512)):ge("v-if",!0)],2))}});const Mx=Y(Bx,[["__scopeId","data-v-f5ee02a7"],["__file","/home/ben/Workspace/demystifying-unicode/node_modules/@slidev/client/internals/Goto.vue"]]),Dx=ke({__name:"Controls",setup(e){R(G);const t=rn(),n=rn();return(s,o)=>(w(),$(Ce,null,[V(Bw,{modelValue:O(ft),"onUpdate:modelValue":o[0]||(o[0]=r=>Fe(ft)?ft.value=r:null)},null,8,["modelValue"]),V(Mx),t.value?(w(),H(O(t),{key:0})):ge("v-if",!0),n.value?(w(),H(O(n),{key:1,modelValue:O(Ri),"onUpdate:modelValue":o[1]||(o[1]=r=>Fe(Ri)?Ri.value=r:null)},null,8,["modelValue"])):ge("v-if",!0),O($e).info?(w(),H(Hw,{key:2,modelValue:O(wo),"onUpdate:modelValue":o[2]||(o[2]=r=>Fe(wo)?wo.value=r:null)},null,8,["modelValue"])):ge("v-if",!0)],64))}}),Lx=Y(Dx,[["__file","/home/ben/Workspace/demystifying-unicode/node_modules/@slidev/client/internals/Controls.vue"]]),Rx={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Nx=i("path",{fill:"currentColor",d:"M30 8h-4.1c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2h14.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30V8zm-9 4c-1.7 0-3-1.3-3-3s1.3-3 3-3s3 1.3 3 3s-1.3 3-3 3zM2 24h4.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30v-2H15.9c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2zm9-4c1.7 0 3 1.3 3 3s-1.3 3-3 3s-3-1.3-3-3s1.3-3 3-3z"},null,-1),jx=[Nx];function Wx(e,t){return w(),$("svg",Rx,jx)}const qx={name:"carbon-settings-adjust",render:Wx},Hx={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Vx=i("path",{fill:"currentColor",d:"M17 22v-8h-4v2h2v6h-3v2h8v-2h-3zM16 8a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 16 8z"},null,-1),zx=i("path",{fill:"currentColor",d:"M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z"},null,-1),Kx=[Vx,zx];function Gx(e,t){return w(),$("svg",Hx,Kx)}const Yx={name:"carbon-information",render:Gx},Qx={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Zx=i("path",{fill:"currentColor",d:"M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10l10-10z"},null,-1),Jx=[Zx];function Xx(e,t){return w(),$("svg",Qx,Jx)}const ek={name:"carbon-download",render:Xx},tk={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},nk=i("path",{fill:"currentColor",d:"M29.415 19L27.7 17.285A2.97 2.97 0 0 0 28 16a3 3 0 1 0-3 3a2.97 2.97 0 0 0 1.286-.3L28 20.414V28h-6v-3a7.008 7.008 0 0 0-7-7H9a7.008 7.008 0 0 0-7 7v5h28v-9.586A1.988 1.988 0 0 0 29.415 19ZM4 25a5.006 5.006 0 0 1 5-5h6a5.006 5.006 0 0 1 5 5v3H4Z"},null,-1),sk=i("path",{fill:"currentColor",d:"M12 4a5 5 0 1 1-5 5a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7a7 7 0 0 0-7-7Z"},null,-1),ok=[nk,sk];function rk(e,t){return w(),$("svg",tk,ok)}const ik={name:"carbon-user-speaker",render:rk},ak={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},lk=i("path",{fill:"currentColor",d:"M15 10h2v8h-2zm5 4h2v4h-2zm-10-2h2v6h-2z"},null,-1),ck=i("path",{fill:"currentColor",d:"M25 4h-8V2h-2v2H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8v6h-4v2h10v-2h-4v-6h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 16H7V6h18Z"},null,-1),uk=[lk,ck];function dk(e,t){return w(),$("svg",ak,uk)}const fk={name:"carbon-presentation-file",render:dk},pk={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},hk=i("path",{fill:"currentColor",d:"M27.307 6.107L30 3.414L28.586 2l-2.693 2.693L24.8 3.6a1.933 1.933 0 0 0-2.8 0l-18 18V28h6.4l18-18a1.933 1.933 0 0 0 0-2.8ZM9.6 26H6v-3.6L23.4 5L27 8.6ZM9 11.586L16.586 4L18 5.414L10.414 13z"},null,-1),mk=[hk];function gk(e,t){return w(),$("svg",pk,mk)}const yk={name:"carbon-pen",render:gk},vk={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},_k=i("g",{fill:"currentColor"},[i("path",{d:"M213.66 201L201 213.66a8 8 0 0 1-11.31 0L140 164a8 8 0 0 0-13 2.46l-19.46 44.77a8 8 0 0 1-14.85-.71L40.41 50.44a8 8 0 0 1 10-10l160.1 52.24a8 8 0 0 1 .71 14.85L166.45 127a8 8 0 0 0-2.45 13l49.67 49.67a8 8 0 0 1-.01 11.33Z",opacity:".2"}),i("path",{d:"m169.64 134.33l44.77-19.46a16 16 0 0 0-1.41-29.8L52.92 32.8A16 16 0 0 0 32.8 52.92L85.07 213a15.83 15.83 0 0 0 14.41 11h.78a15.83 15.83 0 0 0 14.61-9.59l19.46-44.77L184 219.31a16 16 0 0 0 22.63 0l12.68-12.68a16 16 0 0 0 0-22.63Zm-69.48 73.76l.06-.05Zm95.15-.09l-49.67-49.67a16 16 0 0 0-26 4.94l-19.42 44.65L48 48l159.87 52.21l-44.64 19.41a16 16 0 0 0-4.94 26L208 195.31Z"})],-1),bk=[_k];function wk(e,t){return w(),$("svg",vk,bk)}const xk={name:"ph-cursor-duotone",render:wk},kk={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},Sk=i("path",{fill:"currentColor",d:"M219.31 192a16 16 0 0 1 0 22.63l-4.68 4.68a16 16 0 0 1-22.63 0l-55.25-55.24l-21.88 50.34a15.84 15.84 0 0 1-14.61 9.59h-.78a15.82 15.82 0 0 1-14.41-11L32.8 52.92A15.95 15.95 0 0 1 52.92 32.8L213 85.07a16 16 0 0 1 1.41 29.8l-50.34 21.88Z"},null,-1),Ak=[Sk];function Ek(e,t){return w(),$("svg",kk,Ak)}const Gp={name:"ph-cursor-fill",render:Ek},Tk={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Ck=i("path",{fill:"currentColor",d:"M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6ZM5.394 6.813L6.81 5.399l3.505 3.506L8.9 10.319zM2 15.005h5v2H2zm3.394 10.193L8.9 21.692l1.414 1.414l-3.505 3.506zM15 25.005h2v5h-2zm6.687-1.9l1.414-1.414l3.506 3.506l-1.414 1.414zm3.313-8.1h5v2h-5zm-3.313-6.101l3.506-3.506l1.414 1.414l-3.506 3.506zM15 2.005h2v5h-2z"},null,-1),$k=[Ck];function Fk(e,t){return w(),$("svg",Tk,$k)}const Ok={name:"carbon-sun",render:Fk},Pk={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Ik=i("path",{fill:"currentColor",d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3Z"},null,-1),Uk=[Ik];function Bk(e,t){return w(),$("svg",Pk,Uk)}const Mk={name:"carbon-moon",render:Bk},Dk={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Lk=i("path",{fill:"currentColor",d:"M8 4v4H4V4Zm2-2H2v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8ZM8 14v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8ZM8 24v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Z"},null,-1),Rk=[Lk];function Nk(e,t){return w(),$("svg",Dk,Rk)}const jk={name:"carbon-apps",render:Nk},Wk={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},qk=i("path",{fill:"currentColor",d:"m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10L18 6z"},null,-1),Hk=[qk];function Vk(e,t){return w(),$("svg",Wk,Hk)}const zk={name:"carbon-arrow-right",render:Vk},Kk={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Gk=i("path",{fill:"currentColor",d:"m14 26l1.41-1.41L7.83 17H28v-2H7.83l7.58-7.59L14 6L4 16l10 10z"},null,-1),Yk=[Gk];function Qk(e,t){return w(),$("svg",Kk,Yk)}const Zk={name:"carbon-arrow-left",render:Qk},Jk={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Xk=i("path",{fill:"currentColor",d:"M20 2v2h6.586L18 12.582L19.414 14L28 5.414V12h2V2H20zm-6 17.416L12.592 18L4 26.586V20H2v10h10v-2H5.414L14 19.416z"},null,-1),e2=[Xk];function t2(e,t){return w(),$("svg",Jk,e2)}const n2={name:"carbon-maximize",render:t2},s2={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},o2=i("path",{fill:"currentColor",d:"M4 18v2h6.586L2 28.582L3.414 30L12 21.414V28h2V18H4zM30 3.416L28.592 2L20 10.586V4h-2v10h10v-2h-6.586L30 3.416z"},null,-1),r2=[o2];function i2(e,t){return w(),$("svg",s2,r2)}const a2={name:"carbon-minimize",render:i2},l2={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},c2=i("path",{fill:"currentColor",d:"m13 24l-9-9l1.414-1.414L13 21.171L26.586 7.586L28 9L13 24z"},null,-1),u2=[c2];function d2(e,t){return w(),$("svg",l2,u2)}const f2={name:"carbon-checkmark",render:d2},p2={class:"select-list"},h2={class:"title"},m2={class:"items"},g2=["onClick"],y2=ke({__name:"SelectList",props:{modelValue:{type:[Object,String,Number]},title:{type:String},items:{type:Array}},setup(e,{emit:t}){const n=e;R(G);const s=en(n,"modelValue",t,{passive:!0});return(o,r)=>{const a=f2;return w(),$("div",p2,[i("div",h2,wn(e.title),1),i("div",m2,[(w(!0),$(Ce,null,As(e.items,l=>(w(),$("div",{key:l.value,class:Re(["item",{active:O(s)===l.value}]),onClick:()=>{var c;s.value=l.value,(c=l.onClick)==null||c.call(l)}},[V(a,{class:Re(["text-green-500",{"opacity-0":O(s)!==l.value}])},null,8,["class"]),y(" "+wn(l.display||l.value),1)],10,g2))),128))])])}}});const v2=Y(y2,[["__scopeId","data-v-3f89fa11"],["__file","/home/ben/Workspace/demystifying-unicode/node_modules/@slidev/client/internals/SelectList.vue"]]),_2={class:"text-sm"},b2=ke({__name:"Settings",setup(e){R(G);const t=[{display:"Fit",value:0},{display:"1:1",value:1}];return(n,s)=>(w(),$("div",_2,[V(v2,{modelValue:O(Ar),"onUpdate:modelValue":s[0]||(s[0]=o=>Fe(Ar)?Ar.value=o:null),title:"Scale",items:t},null,8,["modelValue"])]))}}),w2=Y(b2,[["__file","/home/ben/Workspace/demystifying-unicode/node_modules/@slidev/client/internals/Settings.vue"]]),x2={key:0,class:"rounded-md bg-main shadow absolute bottom-10 left-0 z-20","dark:border":"~ main"},k2=ke({__name:"MenuButton",props:{modelValue:{default:!1},disabled:{default:!1}},setup(e,{emit:t}){const n=e;R(G);const s=en(n,"modelValue",t,{passive:!0}),o=K();return hv(o,()=>{s.value=!1}),(r,a)=>(w(),$("div",{ref_key:"el",ref:o,class:"flex relative"},[i("button",{class:Re({disabled:e.disabled}),onClick:a[0]||(a[0]=l=>s.value=!O(s))},[wt(r.$slots,"button",{class:Re({disabled:e.disabled})})],2),(w(),H(df,null,[O(s)?(w(),$("div",x2,[wt(r.$slots,"menu")])):ge("v-if",!0)],1024))],512))}}),S2=Y(k2,[["__file","/home/ben/Workspace/demystifying-unicode/node_modules/@slidev/client/internals/MenuButton.vue"]]),A2={class:"w-1px opacity-10 bg-current m-1 lg:m-2"},E2={__name:"VerticalDivider",setup(e){return R(G),(t,n)=>(w(),$("div",A2))}},yr=Y(E2,[["__file","/home/ben/Workspace/demystifying-unicode/node_modules/@slidev/client/internals/VerticalDivider.vue"]]),T2={render(){return[]}},C2={class:"slidev-icon-btn"},$2={class:"h-40px flex",p:"l-1 t-0.5 r-2",text:"sm leading-2"},F2={class:"my-auto"},O2={class:"opacity-50"},P2=ke({__name:"NavControls",props:{persist:{default:!1}},setup(e){const t=e;R(G);const n=Oa.smaller("md"),{isFullscreen:s,toggle:o}=$p,r=P(()=>qa.value?`?password=${qa.value}`:""),a=P(()=>`/presenter/${He.value}${r.value}`),l=P(()=>`/${He.value}${r.value}`),c=K();function u(){c.value&&Ln.value&&c.value.contains(Ln.value)&&Ln.value.blur()}const d=P(()=>t.persist?"text-$slidev-controls-foreground bg-transparent":"rounded-md bg-main shadow dark:border dark:border-gray-400 dark:border-opacity-10"),f=rn(),p=rn();return Dn(()=>import("./DrawingControls-777e249a.js"),[]).then(h=>p.value=h.default),(h,m)=>{const _=a2,k=n2,x=Zk,S=zk,b=jk,A=Mk,E=Ok,C=Gp,M=xk,I=yk,N=fk,ne=Ns("RouterLink"),ce=ik,Q=ek,me=Yx,ve=qx;return w(),$("nav",{ref_key:"root",ref:c,class:"flex flex-col"},[i("div",{class:Re(["flex flex-wrap-reverse text-xl gap-0.5 p-1 lg:gap-1 lg:p-2",d.value]),onMouseleave:u},[O(mn)?ge("v-if",!0):(w(),$("button",{key:0,class:"slidev-icon-btn",onClick:m[0]||(m[0]=(...be)=>O(o)&&O(o)(...be))},[O(s)?(w(),H(_,{key:0})):(w(),H(k,{key:1}))])),i("button",{class:Re(["slidev-icon-btn",{disabled:!O(H4)}]),onClick:m[1]||(m[1]=(...be)=>O(Nn)&&O(Nn)(...be))},[V(x)],2),i("button",{class:Re(["slidev-icon-btn",{disabled:!O(q4)}]),title:"Next",onClick:m[2]||(m[2]=(...be)=>O(Rn)&&O(Rn)(...be))},[V(S)],2),O(mn)?ge("v-if",!0):(w(),$("button",{key:1,class:"slidev-icon-btn",title:"Slides overview",onClick:m[3]||(m[3]=be=>O(Fp)())},[V(b)])),O(Ba)?ge("v-if",!0):(w(),$("button",{key:2,class:"slidev-icon-btn",title:"Toggle dark mode",onClick:m[4]||(m[4]=be=>O(Bp)())},[O(Ol)?(w(),H(A,{key:0})):(w(),H(E,{key:1}))])),V(yr),O(mn)?ge("v-if",!0):(w(),$(Ce,{key:3},[!O(vt)&&!O(n)&&f.value?(w(),$(Ce,{key:0},[V(O(f)),V(yr)],64)):ge("v-if",!0),O(vt)?(w(),$("button",{key:1,class:"slidev-icon-btn",title:"Show presenter cursor",onClick:m[5]||(m[5]=be=>Ni.value=!O(Ni))},[O(Ni)?(w(),H(C,{key:0})):(w(),H(M,{key:1,class:"opacity-50"}))])):ge("v-if",!0)],64)),(!O($e).drawings.presenterOnly||O(vt))&&!O(mn)?(w(),$(Ce,{key:4},[i("button",{class:"slidev-icon-btn relative",title:"Drawing",onClick:m[6]||(m[6]=be=>tn.value=!O(tn))},[V(I),O(tn)?(w(),$("div",{key:0,class:"absolute left-1 right-1 bottom-0 h-0.7 rounded-full",style:Xe({background:O(us).color})},null,4)):ge("v-if",!0)]),V(yr)],64)):ge("v-if",!0),O(mn)?ge("v-if",!0):(w(),$(Ce,{key:5},[O(vt)?(w(),H(ne,{key:0,to:l.value,class:"slidev-icon-btn",title:"Play Mode"},{default:j(()=>[V(N)]),_:1},8,["to"])):ge("v-if",!0),O(L4)?(w(),H(ne,{key:1,to:a.value,class:"slidev-icon-btn",title:"Presenter Mode"},{default:j(()=>[V(ce)]),_:1},8,["to"])):ge("v-if",!0),ge("v-if",!0)],64)),(w(),$(Ce,{key:6},[O($e).download?(w(),$("button",{key:0,class:"slidev-icon-btn",onClick:m[8]||(m[8]=(...be)=>O(Ha)&&O(Ha)(...be))},[V(Q)])):ge("v-if",!0)],64)),!O(vt)&&O($e).info&&!O(mn)?(w(),$("button",{key:7,class:"slidev-icon-btn",onClick:m[9]||(m[9]=be=>wo.value=!O(wo))},[V(me)])):ge("v-if",!0),!O(vt)&&!O(mn)?(w(),H(S2,{key:8},{button:j(()=>[i("button",C2,[V(ve)])]),menu:j(()=>[V(w2)]),_:1})):ge("v-if",!0),O(mn)?ge("v-if",!0):(w(),H(yr,{key:9})),i("div",$2,[i("div",F2,[y(wn(O(He))+" ",1),i("span",O2,"/ "+wn(O(R4)),1)])]),V(O(T2))],34)],512)}}}),I2=Y(P2,[["__file","/home/ben/Workspace/demystifying-unicode/node_modules/@slidev/client/internals/NavControls.vue"]]),Yp={render(){return[]}},Qp={render(){return[]}},U2={key:0,class:"absolute top-0 left-0 right-0 bottom-0 pointer-events-none text-xl"},B2=ke({__name:"PresenterMouse",setup(e){return R(G),(t,n)=>{const s=Gp;return O(Bi).cursor?(w(),$("div",U2,[V(s,{class:"absolute",style:Xe({left:`${O(Bi).cursor.x}%`,top:`${O(Bi).cursor.y}%`})},null,8,["style"])])):ge("v-if",!0)}}}),M2=Y(B2,[["__file","/home/ben/Workspace/demystifying-unicode/node_modules/@slidev/client/internals/PresenterMouse.vue"]]),D2=ke({__name:"SlidesShow",props:{context:{type:String,required:!0}},setup(e){R(G),ye(pt,()=>{var s,o;(s=pt.value)!=null&&s.meta&&pt.value.meta.preload!==!1&&(pt.value.meta.__preloaded=!0),(o=Hi.value)!=null&&o.meta&&Hi.value.meta.preload!==!1&&(Hi.value.meta.__preloaded=!0)},{immediate:!0});const t=rn();Dn(()=>import("./DrawingLayer-c890f5dc.js"),[]).then(s=>t.value=s.default);const n=P(()=>Ge.filter(s=>{var o;return((o=s.meta)==null?void 0:o.__preloaded)||s===pt.value}));return(s,o)=>(w(),$(Ce,null,[ge(" Global Bottom "),V(O(Qp)),ge(" Slides "),V(ly,zt(O(K4),{id:"slideshow",tag:"div"}),{default:j(()=>[(w(!0),$(Ce,null,As(n.value,r=>{var a;return Ht((w(),H(O(Ul),{key:r.path,is:r==null?void 0:r.component,clicks:r===O(pt)?O(Bt):0,"clicks-elements":((a=r.meta)==null?void 0:a.__clicksElements)||[],"clicks-disabled":!1,class:Re(O(Il)(r)),route:r,context:s.context},null,8,["is","clicks","clicks-elements","class","route","context"])),[[Nf,r===O(pt)]])}),128))]),_:1},16),ge(" Global Top "),V(O(Yp)),t.value?(w(),H(O(t),{key:0})):ge("v-if",!0),O(vt)?ge("v-if",!0):(w(),H(M2,{key:1}))],64))}});const L2=Y(D2,[["__scopeId","data-v-afb4231e"],["__file","/home/ben/Workspace/demystifying-unicode/node_modules/@slidev/client/internals/SlidesShow.vue"]]),R2=ke({__name:"PrintStyle",setup(e){R(G);function t(n,{slots:s}){if(s.default)return Je("style",s.default())}return(n,s)=>(w(),H(t,null,{default:j(()=>[y(" @page { size: "+wn(O(Mn))+"px "+wn(O(El))+"px; margin: 0px; } ",1)]),_:1}))}}),Zp=Y(R2,[["__file","/home/ben/Workspace/demystifying-unicode/node_modules/@slidev/client/internals/PrintStyle.vue"]]),N2=ke({__name:"Play",setup(e){R(G),xw();const t=K();function n(r){var a;ku.value||((a=r.target)==null?void 0:a.id)==="slide-container"&&(r.screenX/window.innerWidth>.6?Rn():Nn())}G4(t);const s=P(()=>Pb.value||ku.value);rn();const o=rn();return Dn(()=>import("./DrawingControls-777e249a.js"),[]).then(r=>o.value=r.default),(r,a)=>(w(),$(Ce,null,[O(_n)?(w(),H(Zp,{key:0})):ge("v-if",!0),i("div",{id:"page-root",ref_key:"root",ref:t,class:"grid grid-cols-[1fr_max-content]",style:Xe(O(Tl))},[V(Dp,{class:"w-full h-full",style:Xe({background:"var(--slidev-slide-container-background, black)"}),width:O(_n)?O(_s).width.value:void 0,scale:O(Ar),onPointerdown:n},{default:j(()=>[V(L2,{context:"slide"})]),controls:j(()=>[i("div",{class:Re(["absolute bottom-0 left-0 transition duration-300 opacity-0 hover:opacity-100",[s.value?"opacity-100 right-0":"opacity-0 p-2",O(Do)?"pointer-events-none":""]])},[V(I2,{class:"m-auto",persist:s.value},null,8,["persist"])],2),!O($e).drawings.presenterOnly&&!O(mn)&&o.value?(w(),H(O(o),{key:0,class:"ml-0"})):ge("v-if",!0)]),_:1},8,["style","width","scale"]),ge("v-if",!0)],4),V(Lx)],64))}}),j2=Y(N2,[["__file","/home/ben/Workspace/demystifying-unicode/node_modules/@slidev/client/internals/Play.vue"]]);/*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT */function Jp(e){return typeof e>"u"||e===null}function W2(e){return typeof e=="object"&&e!==null}function q2(e){return Array.isArray(e)?e:Jp(e)?[]:[e]}function H2(e,t){var n,s,o,r;if(t)for(r=Object.keys(t),n=0,s=r.length;n<s;n+=1)o=r[n],e[o]=t[o];return e}function V2(e,t){var n="",s;for(s=0;s<t;s+=1)n+=e;return n}function z2(e){return e===0&&Number.NEGATIVE_INFINITY===1/e}var K2=Jp,G2=W2,Y2=q2,Q2=V2,Z2=z2,J2=H2,Ml={isNothing:K2,isObject:G2,toArray:Y2,repeat:Q2,isNegativeZero:Z2,extend:J2};function Xp(e,t){var n="",s=e.reason||"(unknown reason)";return e.mark?(e.mark.name&&(n+='in "'+e.mark.name+'" '),n+="("+(e.mark.line+1)+":"+(e.mark.column+1)+")",!t&&e.mark.snippet&&(n+=`

`+e.mark.snippet),s+" "+n):s}function Ro(e,t){Error.call(this),this.name="YAMLException",this.reason=e,this.mark=t,this.message=Xp(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}Ro.prototype=Object.create(Error.prototype);Ro.prototype.constructor=Ro;Ro.prototype.toString=function(t){return this.name+": "+Xp(this,t)};var ls=Ro,X2=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],e3=["scalar","sequence","mapping"];function t3(e){var t={};return e!==null&&Object.keys(e).forEach(function(n){e[n].forEach(function(s){t[String(s)]=n})}),t}function n3(e,t){if(t=t||{},Object.keys(t).forEach(function(n){if(X2.indexOf(n)===-1)throw new ls('Unknown option "'+n+'" is met in definition of "'+e+'" YAML type.')}),this.options=t,this.tag=e,this.kind=t.kind||null,this.resolve=t.resolve||function(){return!0},this.construct=t.construct||function(n){return n},this.instanceOf=t.instanceOf||null,this.predicate=t.predicate||null,this.represent=t.represent||null,this.representName=t.representName||null,this.defaultStyle=t.defaultStyle||null,this.multi=t.multi||!1,this.styleAliases=t3(t.styleAliases||null),e3.indexOf(this.kind)===-1)throw new ls('Unknown kind "'+this.kind+'" is specified for "'+e+'" YAML type.')}var at=n3;function Nu(e,t){var n=[];return e[t].forEach(function(s){var o=n.length;n.forEach(function(r,a){r.tag===s.tag&&r.kind===s.kind&&r.multi===s.multi&&(o=a)}),n[o]=s}),n}function s3(){var e={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}},t,n;function s(o){o.multi?(e.multi[o.kind].push(o),e.multi.fallback.push(o)):e[o.kind][o.tag]=e.fallback[o.tag]=o}for(t=0,n=arguments.length;t<n;t+=1)arguments[t].forEach(s);return e}function Wa(e){return this.extend(e)}Wa.prototype.extend=function(t){var n=[],s=[];if(t instanceof at)s.push(t);else if(Array.isArray(t))s=s.concat(t);else if(t&&(Array.isArray(t.implicit)||Array.isArray(t.explicit)))t.implicit&&(n=n.concat(t.implicit)),t.explicit&&(s=s.concat(t.explicit));else throw new ls("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");n.forEach(function(r){if(!(r instanceof at))throw new ls("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(r.loadKind&&r.loadKind!=="scalar")throw new ls("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(r.multi)throw new ls("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),s.forEach(function(r){if(!(r instanceof at))throw new ls("Specified list of YAML types (or a single Type object) contains a non-Type object.")});var o=Object.create(Wa.prototype);return o.implicit=(this.implicit||[]).concat(n),o.explicit=(this.explicit||[]).concat(s),o.compiledImplicit=Nu(o,"implicit"),o.compiledExplicit=Nu(o,"explicit"),o.compiledTypeMap=s3(o.compiledImplicit,o.compiledExplicit),o};var o3=Wa,r3=new at("tag:yaml.org,2002:str",{kind:"scalar",construct:function(e){return e!==null?e:""}}),i3=new at("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(e){return e!==null?e:[]}}),a3=new at("tag:yaml.org,2002:map",{kind:"mapping",construct:function(e){return e!==null?e:{}}}),l3=new o3({explicit:[r3,i3,a3]});function c3(e){if(e===null)return!0;var t=e.length;return t===1&&e==="~"||t===4&&(e==="null"||e==="Null"||e==="NULL")}function u3(){return null}function d3(e){return e===null}var f3=new at("tag:yaml.org,2002:null",{kind:"scalar",resolve:c3,construct:u3,predicate:d3,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"});function p3(e){if(e===null)return!1;var t=e.length;return t===4&&(e==="true"||e==="True"||e==="TRUE")||t===5&&(e==="false"||e==="False"||e==="FALSE")}function h3(e){return e==="true"||e==="True"||e==="TRUE"}function m3(e){return Object.prototype.toString.call(e)==="[object Boolean]"}var g3=new at("tag:yaml.org,2002:bool",{kind:"scalar",resolve:p3,construct:h3,predicate:m3,represent:{lowercase:function(e){return e?"true":"false"},uppercase:function(e){return e?"TRUE":"FALSE"},camelcase:function(e){return e?"True":"False"}},defaultStyle:"lowercase"});function y3(e){return 48<=e&&e<=57||65<=e&&e<=70||97<=e&&e<=102}function v3(e){return 48<=e&&e<=55}function _3(e){return 48<=e&&e<=57}function b3(e){if(e===null)return!1;var t=e.length,n=0,s=!1,o;if(!t)return!1;if(o=e[n],(o==="-"||o==="+")&&(o=e[++n]),o==="0"){if(n+1===t)return!0;if(o=e[++n],o==="b"){for(n++;n<t;n++)if(o=e[n],o!=="_"){if(o!=="0"&&o!=="1")return!1;s=!0}return s&&o!=="_"}if(o==="x"){for(n++;n<t;n++)if(o=e[n],o!=="_"){if(!y3(e.charCodeAt(n)))return!1;s=!0}return s&&o!=="_"}if(o==="o"){for(n++;n<t;n++)if(o=e[n],o!=="_"){if(!v3(e.charCodeAt(n)))return!1;s=!0}return s&&o!=="_"}}if(o==="_")return!1;for(;n<t;n++)if(o=e[n],o!=="_"){if(!_3(e.charCodeAt(n)))return!1;s=!0}return!(!s||o==="_")}function w3(e){var t=e,n=1,s;if(t.indexOf("_")!==-1&&(t=t.replace(/_/g,"")),s=t[0],(s==="-"||s==="+")&&(s==="-"&&(n=-1),t=t.slice(1),s=t[0]),t==="0")return 0;if(s==="0"){if(t[1]==="b")return n*parseInt(t.slice(2),2);if(t[1]==="x")return n*parseInt(t.slice(2),16);if(t[1]==="o")return n*parseInt(t.slice(2),8)}return n*parseInt(t,10)}function x3(e){return Object.prototype.toString.call(e)==="[object Number]"&&e%1===0&&!Ml.isNegativeZero(e)}var k3=new at("tag:yaml.org,2002:int",{kind:"scalar",resolve:b3,construct:w3,predicate:x3,represent:{binary:function(e){return e>=0?"0b"+e.toString(2):"-0b"+e.toString(2).slice(1)},octal:function(e){return e>=0?"0o"+e.toString(8):"-0o"+e.toString(8).slice(1)},decimal:function(e){return e.toString(10)},hexadecimal:function(e){return e>=0?"0x"+e.toString(16).toUpperCase():"-0x"+e.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),S3=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function A3(e){return!(e===null||!S3.test(e)||e[e.length-1]==="_")}function E3(e){var t,n;return t=e.replace(/_/g,"").toLowerCase(),n=t[0]==="-"?-1:1,"+-".indexOf(t[0])>=0&&(t=t.slice(1)),t===".inf"?n===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:t===".nan"?NaN:n*parseFloat(t,10)}var T3=/^[-+]?[0-9]+e/;function C3(e,t){var n;if(isNaN(e))switch(t){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===e)switch(t){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===e)switch(t){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(Ml.isNegativeZero(e))return"-0.0";return n=e.toString(10),T3.test(n)?n.replace("e",".e"):n}function $3(e){return Object.prototype.toString.call(e)==="[object Number]"&&(e%1!==0||Ml.isNegativeZero(e))}var F3=new at("tag:yaml.org,2002:float",{kind:"scalar",resolve:A3,construct:E3,predicate:$3,represent:C3,defaultStyle:"lowercase"}),O3=l3.extend({implicit:[f3,g3,k3,F3]}),P3=O3,eh=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),th=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function I3(e){return e===null?!1:eh.exec(e)!==null||th.exec(e)!==null}function U3(e){var t,n,s,o,r,a,l,c=0,u=null,d,f,p;if(t=eh.exec(e),t===null&&(t=th.exec(e)),t===null)throw new Error("Date resolve error");if(n=+t[1],s=+t[2]-1,o=+t[3],!t[4])return new Date(Date.UTC(n,s,o));if(r=+t[4],a=+t[5],l=+t[6],t[7]){for(c=t[7].slice(0,3);c.length<3;)c+="0";c=+c}return t[9]&&(d=+t[10],f=+(t[11]||0),u=(d*60+f)*6e4,t[9]==="-"&&(u=-u)),p=new Date(Date.UTC(n,s,o,r,a,l,c)),u&&p.setTime(p.getTime()-u),p}function B3(e){return e.toISOString()}var M3=new at("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:I3,construct:U3,instanceOf:Date,represent:B3});function D3(e){return e==="<<"||e===null}var L3=new at("tag:yaml.org,2002:merge",{kind:"scalar",resolve:D3}),Dl=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function R3(e){if(e===null)return!1;var t,n,s=0,o=e.length,r=Dl;for(n=0;n<o;n++)if(t=r.indexOf(e.charAt(n)),!(t>64)){if(t<0)return!1;s+=6}return s%8===0}function N3(e){var t,n,s=e.replace(/[\r\n=]/g,""),o=s.length,r=Dl,a=0,l=[];for(t=0;t<o;t++)t%4===0&&t&&(l.push(a>>16&255),l.push(a>>8&255),l.push(a&255)),a=a<<6|r.indexOf(s.charAt(t));return n=o%4*6,n===0?(l.push(a>>16&255),l.push(a>>8&255),l.push(a&255)):n===18?(l.push(a>>10&255),l.push(a>>2&255)):n===12&&l.push(a>>4&255),new Uint8Array(l)}function j3(e){var t="",n=0,s,o,r=e.length,a=Dl;for(s=0;s<r;s++)s%3===0&&s&&(t+=a[n>>18&63],t+=a[n>>12&63],t+=a[n>>6&63],t+=a[n&63]),n=(n<<8)+e[s];return o=r%3,o===0?(t+=a[n>>18&63],t+=a[n>>12&63],t+=a[n>>6&63],t+=a[n&63]):o===2?(t+=a[n>>10&63],t+=a[n>>4&63],t+=a[n<<2&63],t+=a[64]):o===1&&(t+=a[n>>2&63],t+=a[n<<4&63],t+=a[64],t+=a[64]),t}function W3(e){return Object.prototype.toString.call(e)==="[object Uint8Array]"}var q3=new at("tag:yaml.org,2002:binary",{kind:"scalar",resolve:R3,construct:N3,predicate:W3,represent:j3}),H3=Object.prototype.hasOwnProperty,V3=Object.prototype.toString;function z3(e){if(e===null)return!0;var t=[],n,s,o,r,a,l=e;for(n=0,s=l.length;n<s;n+=1){if(o=l[n],a=!1,V3.call(o)!=="[object Object]")return!1;for(r in o)if(H3.call(o,r))if(!a)a=!0;else return!1;if(!a)return!1;if(t.indexOf(r)===-1)t.push(r);else return!1}return!0}function K3(e){return e!==null?e:[]}var G3=new at("tag:yaml.org,2002:omap",{kind:"sequence",resolve:z3,construct:K3}),Y3=Object.prototype.toString;function Q3(e){if(e===null)return!0;var t,n,s,o,r,a=e;for(r=new Array(a.length),t=0,n=a.length;t<n;t+=1){if(s=a[t],Y3.call(s)!=="[object Object]"||(o=Object.keys(s),o.length!==1))return!1;r[t]=[o[0],s[o[0]]]}return!0}function Z3(e){if(e===null)return[];var t,n,s,o,r,a=e;for(r=new Array(a.length),t=0,n=a.length;t<n;t+=1)s=a[t],o=Object.keys(s),r[t]=[o[0],s[o[0]]];return r}var J3=new at("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:Q3,construct:Z3}),X3=Object.prototype.hasOwnProperty;function eS(e){if(e===null)return!0;var t,n=e;for(t in n)if(X3.call(n,t)&&n[t]!==null)return!1;return!0}function tS(e){return e!==null?e:{}}var nS=new at("tag:yaml.org,2002:set",{kind:"mapping",resolve:eS,construct:tS});P3.extend({implicit:[M3,L3],explicit:[q3,G3,J3,nS]});function ju(e){return e===48?"\0":e===97?"\x07":e===98?"\b":e===116||e===9?"	":e===110?`
`:e===118?"\v":e===102?"\f":e===114?"\r":e===101?"\x1B":e===32?" ":e===34?'"':e===47?"/":e===92?"\\":e===78?"":e===95?" ":e===76?"\u2028":e===80?"\u2029":""}var sS=new Array(256),oS=new Array(256);for(var Ps=0;Ps<256;Ps++)sS[Ps]=ju(Ps)?1:0,oS[Ps]=ju(Ps);function rS(e){return Array.from(new Set(e))}function Wu(...e){let t,n,s;e.length===1?(t=0,s=1,[n]=e):[t,n,s=1]=e;const o=[];let r=t;for(;r<n;)o.push(r),r+=s||1;return o}function nh(e,t){if(!t||t==="all"||t==="*")return Wu(1,e+1);const n=[];for(const s of t.split(/[,;]/g))if(!s.includes("-"))n.push(+s);else{const[o,r]=s.split("-",2);n.push(...Wu(+o,r?+r+1:e+1))}return rS(n).filter(s=>s<=e).sort((s,o)=>s-o)}function sh(e){const t=P(()=>e.value.path),n=P(()=>Ge.length),s=P(()=>Number.parseInt(t.value.split(/\//g).slice(-1)[0])||1),o=P(()=>vi(s.value)),r=P(()=>Ge.find(p=>p.path===`${s.value}`)),a=P(()=>{var p,h,m;return(m=(h=(p=r.value)==null?void 0:p.meta)==null?void 0:h.slide)==null?void 0:m.id}),l=P(()=>{var p,h;return((h=(p=r.value)==null?void 0:p.meta)==null?void 0:h.layout)||(s.value===1?"cover":"default")}),c=P(()=>Ge.find(p=>p.path===`${Math.min(Ge.length,s.value+1)}`)),u=P(()=>Ge.filter(p=>{var h,m;return(m=(h=p.meta)==null?void 0:h.slide)==null?void 0:m.title}).reduce((p,h)=>(Ll(p,h),p),[])),d=P(()=>Rl(u.value,r.value)),f=P(()=>Nl(d.value));return{route:e,path:t,total:n,currentPage:s,currentPath:o,currentRoute:r,currentSlideId:a,currentLayout:l,nextRoute:c,rawTree:u,treeWithActiveStatuses:d,tree:f,downloadPDF:Ha,next:Rn,nextSlide:No,openInEditor:Y4,prev:Nn,prevSlide:jo}}function oh(e,t,n){const s=K(0);ot(()=>{bt.afterEach(async()=>{await ot(),s.value+=1})});const o=P(()=>{var c,u;return s.value,((u=(c=t.value)==null?void 0:c.meta)==null?void 0:u.__clicksElements)||[]}),r=P(()=>{var c,u;return+(((u=(c=t.value)==null?void 0:c.meta)==null?void 0:u.clicks)??o.value.length)}),a=P(()=>n.value<Ge.length-1||e.value<r.value),l=P(()=>n.value>1||e.value>0);return{clicks:e,clicksElements:o,clicksTotal:r,hasNext:a,hasPrev:l}}const iS=["id"],aS=ke({__name:"PrintSlideClick",props:{clicks:{type:Number,required:!0},clicksElements:{type:Array,required:!1},nav:{type:null,required:!0},route:{type:null,required:!0}},emits:["update:clicksElements"],setup(e,{emit:t}){const n=e,s=en(n,"clicksElements",t),o=P(()=>({height:`${El}px`,width:`${Mn}px`})),r=rn();Dn(()=>Promise.resolve().then(()=>Ow),void 0).then(u=>r.value=u.default);const a=P(()=>n.clicks),l=oh(a,n.nav.currentRoute,n.nav.currentPage),c=P(()=>`${n.route.path.toString().padStart(3,"0")}-${(a.value+1).toString().padStart(2,"0")}`);return At(G,qe({nav:{...n.nav,...l},configs:$e,themeConfigs:P(()=>$e.themeConfig)})),(u,d)=>{var f;return w(),$("div",{id:c.value,class:"print-slide-container",style:Xe(o.value)},[V(O(Qp)),V(O(Ul),{is:(f=u.route)==null?void 0:f.component,"clicks-elements":O(s),"onUpdate:clicksElements":d[0]||(d[0]=p=>Fe(s)?s.value=p:null),clicks:a.value,"clicks-disabled":!1,class:Re(O(Il)(u.route)),route:u.route},null,8,["is","clicks-elements","clicks","class","route"]),r.value?(w(),H(O(r),{key:0,page:+u.route.path},null,8,["page"])):ge("v-if",!0),V(O(Yp))],12,iS)}}}),qu=Y(aS,[["__file","/home/ben/Workspace/demystifying-unicode/node_modules/@slidev/client/internals/PrintSlideClick.vue"]]),lS=ke({__name:"PrintSlide",props:{route:{type:null,required:!0}},setup(e){var r;const t=e;R(G);const n=K(((r=t.route.meta)==null?void 0:r.__clicksElements)||[]),s=P(()=>t.route),o=sh(s);return(a,l)=>(w(),$(Ce,null,[V(qu,{"clicks-elements":n.value,"onUpdate:clicksElements":l[0]||(l[0]=c=>n.value=c),clicks:0,nav:O(o),route:s.value},null,8,["clicks-elements","nav","route"]),O(xo)?ge("v-if",!0):(w(!0),$(Ce,{key:0},As(n.value.length,c=>(w(),H(qu,{key:c,clicks:c,nav:O(o),route:s.value},null,8,["clicks","nav","route"]))),128))],64))}}),cS=Y(lS,[["__file","/home/ben/Workspace/demystifying-unicode/node_modules/@slidev/client/internals/PrintSlide.vue"]]),uS={id:"print-content"},dS=ke({__name:"PrintContainer",props:{width:{type:Number,required:!0}},setup(e){const t=e;R(G);const n=P(()=>t.width),s=P(()=>t.width/Bn),o=P(()=>n.value/s.value),r=P(()=>o.value<Bn?n.value/Mn:s.value*Bn/Mn);let a=Ge;Dt.value.query.range&&(a=nh(a.length,Dt.value.query.range).map(u=>a[u-1]));const l=P(()=>({"select-none":!$e.selectable}));return At(Zf,r),(c,u)=>(w(),$("div",{id:"print-container",class:Re(l.value)},[i("div",uS,[(w(!0),$(Ce,null,As(O(a),d=>(w(),H(cS,{key:d.path,route:d},null,8,["route"]))),128))]),wt(c.$slots,"controls")],2))}});const fS=Y(dS,[["__file","/home/ben/Workspace/demystifying-unicode/node_modules/@slidev/client/internals/PrintContainer.vue"]]),pS=ke({__name:"Print",setup(e){return R(G),Ss(()=>{_n?document.body.parentNode.classList.add("print"):document.body.parentNode.classList.remove("print")}),(t,n)=>(w(),$(Ce,null,[O(_n)?(w(),H(Zp,{key:0})):ge("v-if",!0),i("div",{id:"page-root",class:"grid grid-cols-[1fr_max-content]",style:Xe(O(Tl))},[V(fS,{class:"w-full h-full",style:Xe({background:"var(--slidev-slide-container-background, black)"}),width:O(_s).width.value},null,8,["style","width"])],4)],64))}});const hS=Y(pS,[["__file","/home/ben/Workspace/demystifying-unicode/node_modules/@slidev/client/internals/Print.vue"]]);function Hu(e){return e.startsWith("/")?"/demystifying-unicode/"+e.slice(1):e}function mS(e,t=!1){const n=e&&["#","rgb","hsl"].some(o=>e.indexOf(o)===0),s={background:n?e:void 0,color:e&&!n?"white":void 0,backgroundImage:n?void 0:e?t?`linear-gradient(#0005, #0008), url(${Hu(e)})`:`url("${Hu(e)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return s.background||delete s.background,s}const gS={class:"my-auto w-full"},yS=ke({__name:"cover",props:{background:{default:"https://source.unsplash.com/collection/94734566/1920x1080"}},setup(e){const t=e;R(G);const n=P(()=>mS(t.background,!0));return(s,o)=>(w(),$("div",{class:"slidev-layout cover text-center",style:Xe(n.value)},[i("div",gS,[wt(s.$slots,"default")])],4))}}),zs=Y(yS,[["__file","/home/ben/Workspace/demystifying-unicode/node_modules/@slidev/theme-seriph/layouts/cover.vue"]]),vS=i("h1",null,"Demystifying Unicode",-1),_S=i("p",null,"Unicode, Rust, quirks, and way too much detail.",-1),bS={__name:"1",setup(e){const t={theme:"seriph",background:"https://source.unsplash.com/collection/94734566/1920x1080",class:"text-center",highlighter:"shiki",lineNumbers:!0,info:`## Unicode, Rust, quirks, and way too much detail.
`,drawings:{persist:!1},transition:"slide-left",hideInToc:!0};return R(G),(n,s)=>(w(),H(zs,ue(le(t)),{default:j(()=>[vS,_S]),_:1},16))}},wS=Y(bS,[["__file","/@slidev/slides/1.md"]]),xS={class:"slidev-layout default"},kS={__name:"default",setup(e){return R(G),(t,n)=>(w(),$("div",xS,[wt(t.$slots,"default")]))}},Ue=Y(kS,[["__file","/home/ben/Workspace/demystifying-unicode/node_modules/@slidev/client/layouts/default.vue"]]),SS=i("h1",null,"Some sorta outline",-1),AS=i("ul",null,[i("li",null,"We learn some things about Computers"),i("li",null,"Then, some things about unicode"),i("li",null,"And, some things about unicode in rust"),i("li",null,"Some things you only need to know when you need to know")],-1),ES={__name:"2",setup(e){const t={hideInToc:!0};return R(G),(n,s)=>(w(),H(Ue,ue(le(t)),{default:j(()=>[SS,AS]),_:1},16))}},TS=Y(ES,[["__file","/@slidev/slides/2.md"]]),CS=["href","innerHTML"],$S=["href"],FS=ke({__name:"Link",props:{to:{type:[Number,String],required:!0},title:{type:String,required:!1}},setup(e){return R(G),(t,n)=>{const s=Ns("RouterLink");return!O(_n)&&t.title?(w(),H(s,{key:0,to:String(t.to),onClick:n[0]||(n[0]=o=>o.target.blur()),innerHTML:t.title},null,8,["to","innerHTML"])):!O(_n)&&!t.title?(w(),H(s,{key:1,to:String(t.to),onClick:n[1]||(n[1]=o=>o.target.blur())},{default:j(()=>[wt(t.$slots,"default")]),_:3},8,["to"])):O(_n)&&t.title?(w(),$("a",{key:2,href:`#${t.to}`,innerHTML:t.title},null,8,CS)):(w(),$("a",{key:3,href:`#${t.to}`},[wt(t.$slots,"default")],8,$S))}}}),OS=Y(FS,[["__file","/home/ben/Workspace/demystifying-unicode/node_modules/@slidev/client/builtin/Link.vue"]]),PS={key:0},IS={key:1},US={key:2},BS={key:3},MS={key:4},DS={key:5},LS={key:6},RS={key:7},NS={key:8},jS={key:9},WS={key:10},qS={key:11},HS={key:12},VS={key:13},zS={key:14},KS={key:15},GS={key:16},YS={key:17},QS={key:18},ZS={key:19},JS={key:20},XS={key:21},e8={key:22},t8={key:23},n8={key:24},s8={key:25},o8={key:26},r8={key:27},i8={key:28},a8={key:29},l8={key:30},c8={key:31},u8={key:32},d8={key:33},f8={key:34},p8={key:35},h8={key:36},m8={key:37},g8={key:38},y8={key:39},v8={key:40},_8={key:41},b8={key:42},w8=i("code",null,"unsafe",-1),x8={key:43},k8={key:44},S8={key:45},A8={key:46},E8={key:47},T8={key:48},C8={key:49},$8={key:50},F8={key:51},O8=ke({__name:"titles",props:{no:{type:[Number,String],required:!0}},setup(e){return(t,n)=>(w(),$("div",null,[+t.no==1?(w(),$("p",PS,"Demystifying Unicode")):+t.no==2?(w(),$("p",IS,"Some sorta outline")):+t.no==3?(w(),$("p",US,"Table of contents")):+t.no==4?(w(),$("p",BS,"History")):+t.no==5?(w(),$("p",MS,"A bit (🥁鈸) of fundamentals")):+t.no==6?(w(),$("p",DS,"Abstraction")):+t.no==7?(w(),$("p",LS,"Abstract? ABSTRACT!")):+t.no==8?(w(),$("p",RS,"undefined")):+t.no==9?(w(),$("p",NS,"Competing standards")):+t.no==10?(w(),$("p",jS,"About ol ASCII - QQ")):+t.no==11?(w(),$("p",WS,"How many characters is enough charcters?")):+t.no==12?(w(),$("p",qS,"Summary:")):+t.no==13?(w(),$("p",HS,"Unicode")):+t.no==14?(w(),$("p",VS,"Why Unicode?")):+t.no==15?(w(),$("p",zS,"undefined")):+t.no==16?(w(),$("p",KS,"Unicode to the resque")):+t.no==17?(w(),$("p",GS,"New Terminology")):+t.no==18?(w(),$("p",YS,"undefined")):+t.no==19?(w(),$("p",QS,"undefined")):+t.no==20?(w(),$("p",ZS,"Glyphemes")):+t.no==21?(w(),$("p",JS,"What is the difference between")):+t.no==22?(w(),$("p",XS,"undefined")):+t.no==23?(w(),$("p",e8,"Encoding")):+t.no==24?(w(),$("p",t8,"undefined")):+t.no==25?(w(),$("p",n8,"Woo options!")):+t.no==26?(w(),$("p",s8,"UTF-8 is the king of the web")):+t.no==27?(w(),$("p",o8,"Nuts and bolts of UTF-8")):+t.no==28?(w(),$("p",r8,"Let’s encode!")):+t.no==29?(w(),$("p",i8,"Let’s encode!")):+t.no==30?(w(),$("p",a8,"Summary")):+t.no==31?(w(),$("p",l8,"Unicode in Rust")):+t.no==32?(w(),$("p",c8,"undefined")):+t.no==33?(w(),$("p",u8,"undefined")):+t.no==34?(w(),$("p",d8,"String slices")):+t.no==35?(w(),$("p",f8,"Lets make some strings")):+t.no==36?(w(),$("p",p8,"Using strings in Rust")):+t.no==37?(w(),$("p",h8,"Creating Strings")):+t.no==38?(w(),$("p",m8,"UTF8Error")):+t.no==39?(w(),$("p",g8,"Conventially UTF-8 vs. Gaurantee")):+t.no==40?(w(),$("p",y8,"Where Enforced UTF-8 can go wrong")):+t.no==41?(w(),$("p",v8,"Reading and Writing files")):+t.no==42?(w(),$("p",_8,"Standards - and why we follow them")):+t.no==43?(w(),$("p",b8,[w8,y(" is unsafe")])):+t.no==44?(w(),$("p",x8,"Summary")):+t.no==45?(w(),$("p",k8,"Quirks")):+t.no==46?(w(),$("p",S8,"Capitalization (AKA Casemapping and Casefolding)")):+t.no==47?(w(),$("p",A8,"Composition")):+t.no==48?(w(),$("p",E8,"Emoji Composition")):+t.no==49?(w(),$("p",T8,"Digraphs/ligatures")):+t.no==50?(w(),$("p",C8,"Flags")):+t.no==51?(w(),$("p",$8,"Unicode Tags")):+t.no==52?(w(),$("p",F8,"THE END")):ge("v-if",!0)]))}}),P8=Y(O8,[["__file","/@slidev/titles.md"]]),I8=ke({__name:"TocList",props:{level:{type:Number,required:!0,default:1},list:{type:Array,required:!0},listClass:{type:[String,Array],required:!1}},setup(e){const t=e;R(G);const n=P(()=>[...Jf(t.listClass||[]),"slidev-toc-list",`slidev-toc-list-level-${t.level}`]);return(s,o)=>{const r=OS,a=Ns("TocList",!0);return s.list&&s.list.length>0?(w(),$("ol",{key:0,class:Re(n.value)},[(w(!0),$(Ce,null,As(s.list,l=>(w(),$("li",{key:l.path,class:Re(["slidev-toc-item",[{"slidev-toc-item-active":l.active},{"slidev-toc-item-parent-active":l.activeParent}]])},[V(r,{to:l.path},{default:j(()=>[V(O(P8),{no:l.path},null,8,["no"])]),_:2},1032,["to"]),l.children.length>0?(w(),H(a,{key:0,level:s.level+1,list:l.children,"list-class":s.listClass},null,8,["level","list","list-class"])):ge("v-if",!0)],2))),128))],2)):ge("v-if",!0)}}});const U8=Y(I8,[["__file","/home/ben/Workspace/demystifying-unicode/node_modules/@slidev/client/builtin/TocList.vue"]]),B8=ke({__name:"Toc",props:{columns:{type:[String,Number],required:!1,default:1},listClass:{type:[String,Array],required:!1,default:""},maxDepth:{type:[String,Number],required:!1,default:1/0},minDepth:{type:[String,Number],required:!1,default:1},mode:{type:String,required:!1,default:"all"}},setup(e){const t=e,n=R(G);function s(l,c=1){if(c>Number(t.maxDepth))return[];if(c<Number(t.minDepth)){const u=l.find(d=>d.active||d.activeParent);return u?s(u.children,c+1):[]}return l.map(u=>({...u,children:s(u.children,c+1)}))}function o(l){return l.filter(c=>c.active||c.activeParent||c.hasActiveParent).map(c=>({...c,children:o(c.children)}))}function r(l){const c=l.some(u=>u.active||u.activeParent||u.hasActiveParent);return l.filter(()=>c).map(u=>({...u,children:r(u.children)}))}const a=P(()=>{const l=n==null?void 0:n.nav.tree;if(!l)return[];let c=s(l);return t.mode==="onlyCurrentTree"?c=o(c):t.mode==="onlySiblings"&&(c=r(c)),c});return(l,c)=>{const u=U8;return w(),$("div",{class:"slidev-toc",style:Xe(`column-count:${l.columns}`)},[V(u,{level:1,list:a.value,"list-class":l.listClass},null,8,["list","list-class"])],4)}}}),M8=Y(B8,[["__file","/home/ben/Workspace/demystifying-unicode/node_modules/@slidev/client/builtin/Toc.vue"]]),D8=i("h1",null,"Table of contents",-1),L8={__name:"3",setup(e){const t={hideInToc:!0};return R(G),(n,s)=>{const o=M8;return w(),H(Ue,ue(le(t)),{default:j(()=>[D8,V(o,{maxDepth:"1"})]),_:1},16)}}},R8=Y(L8,[["__file","/@slidev/slides/3.md"]]),N8=i("h1",null,"History",-1),j8={__name:"4",setup(e){const t={layout:"cover",hide:!1,srcSequence:"./pages/01-history.md"};return R(G),(n,s)=>(w(),H(zs,ue(le(t)),{default:j(()=>[N8]),_:1},16))}},W8=Y(j8,[["__file","/@slidev/slides/4.md"]]),Vu=["ul","ol"],un=ke({props:{depth:{type:[Number,String],default:1},every:{type:Number,default:1},at:{type:[Number,String],default:null},hide:{type:Boolean,default:!1},fade:{type:Boolean,default:!1}},render(){var l,c;const e=Oo("click"),t=Oo("after"),n=(u,d,f)=>Ht(u,[[d,f,"",{hide:this.hide,fade:this.fade}]]);let s=(c=(l=this.$slots).default)==null?void 0:c.call(l);if(!s)return;s=Jf(s);const o=(u,d=1)=>{let f=0;return[u.map(h=>{if(!an(h))return h;if(Vu.includes(h.type)&&Array.isArray(h.children)){const[m,_]=a(h.children,d+1);return f+=_,Je(h,{},[m])}return Je(h)}),f]};let r=0;const a=(u,d=1)=>{let f=0;return[u.map(h=>{if(!an(h)||h.type===it)return h;const m=f%this.every===0?e:t;let _,k=0;if(d<+this.depth&&Array.isArray(h.children)){const[S,b]=o(h.children,d);_=Je(h,{},[S]),k=b,f+=b+1}else _=Je(h),f++;const x=this.at!=null?Number(this.at)+Math.floor(r/this.every)+d:(d-1-k).toString();return r++,n(_,m,typeof x=="string"&&!x.startsWith("-")?`+${x}`:x)}),f]};return s.length===1&&Vu.includes(s[0].type)&&Array.isArray(s[0].children)?Je(s[0],{},[a(s[0].children)[0]]):a(s)[0]}}),q8=i("h2",null,"A bit (🥁鈸) of fundamentals",-1),H8=i("div",{class:"mt-5"},[i("blockquote",null,[i("p",null,"Computers represent information as 1’s and 0’s"),i("ul",null,[i("li",null,"Literally everyone, since forever")])])],-1),V8=i("p",null,"Multiple bits can be put together to make different structures.",-1),z8=i("p",null,"Those structures are inherently computer orientated - not human orientated:",-1),K8=i("ul",null,[i("li",null,[i("p",null,"8 bits makes a byte")]),i("li",null,[i("p",null,"4/8 bytes makes a word on 32/64 bit architectures respectively"),i("p",null,[i("sup",null,'(last you’ll heard of "words" in this presentation)')])])],-1),G8={__name:"5",setup(e){const t={hide:!1,srcSequence:"./pages/01-history.md"};return R(G),(n,s)=>{const o=un;return w(),H(Ue,ue(le(t)),{default:j(()=>[q8,H8,V(o,null,{default:j(()=>[V8,z8,K8]),_:1})]),_:1},16)}}},Y8=Y(G8,[["__file","/@slidev/slides/5.md"]]),Kn=ke({props:{at:{type:[Number,String],default:null},hide:{type:Boolean,default:!1},fade:{type:Boolean,default:!1}},render(){return V(un,{every:99999,at:this.at,hide:this.hide,fade:this.fade},{default:this.$slots.default})}}),Q8=i("h2",null,"Abstraction",-1),Z8=i("div",{class:"mt-5"},[i("blockquote",null,[i("p",null,"Let’s make an abstraction so we can understand things better"),i("ul",null,[i("li",null,"Literally every developer, since forever")])])],-1),J8=i("p",null,[i("code",null,"C"),y(" abstracted things a little further:")],-1),X8=i("ul",null,[i("li",null,[i("p",null,[i("code",null,"bool"),y(" is a 1 bit")])]),i("li",null,[i("p",null,[i("code",null,"char"),y(" is a 8 bits")])]),i("li",null,[i("p",null,[i("code",null,"int"),y(" is ambiguous")]),i("p",null,[y('More common "nowadays": '),i("code",null,"uint8_t"),y(", "),i("code",null,"uint32_t"),y(", "),i("code",null,"int8_t"),y(", etc")])]),i("li",null,[i("p",null,[i("code",null,"long"),y(" also ambiguous, but >= "),i("code",null,"int")])])],-1),eA=i("p",null,[y("But - what really "),i("strong",null,"is"),y(" a "),i("code",null,"char"),y("?")],-1),tA=i("p",null,"And what really are characters?",-1),nA={__name:"6",setup(e){const t={hide:!1,srcSequence:"./pages/01-history.md"};return R(G),(n,s)=>{const o=un,r=Kn;return w(),H(Ue,ue(le(t)),{default:j(()=>[Q8,Z8,J8,V(o,null,{default:j(()=>[X8]),_:1}),V(r,null,{default:j(()=>[eA,tA]),_:1})]),_:1},16)}}},sA=Y(nA,[["__file","/@slidev/slides/6.md"]]),oA=i("h2",null,"Abstract? ABSTRACT!",-1),rA=i("p",null,"Quiz time - what does this say:",-1),iA=i("pre",{class:"shiki-container"},[i("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{color:"#dbd7ca"}},"01001000 01100101 01101100 01101100 01101111 00100000")]),y(`
`),i("span",{class:"line"},[i("span",{style:{color:"#dbd7ca"}},"01010111 01101111 01110010 01101100 01100100 00100001")])])]),i("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{color:"#393a34"}},"01001000 01100101 01101100 01101100 01101111 00100000")]),y(`
`),i("span",{class:"line"},[i("span",{style:{color:"#393a34"}},"01010111 01101111 01110010 01101100 01100100 00100001")])])])],-1),aA=i("p",null,[i("code",null,"00100000"),y(" = "),i("code",null,"0x20"),y(" = "),i("code",null," "),i("span",{class:"pl-15"},[i("code",null,"00100001"),y(" = "),i("code",null,"0x21"),y(" = "),i("code",null,"!")])],-1),lA=i("hr",null,null,-1),cA=i("pre",{class:"shiki-container"},[i("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{color:"#dbd7ca"}},"0100 1000  =  0x48  =  'H'")]),y(`
`),i("span",{class:"line"},[i("span",{style:{color:"#dbd7ca"}},"0110 0101  =  0x65  =  'e'")]),y(`
`),i("span",{class:"line"},[i("span",{style:{color:"#dbd7ca"}},"0110 1100  =  0x6c  =  'l'")]),y(`
`),i("span",{class:"line"},[i("span",{style:{color:"#dbd7ca"}},"0110 1100  =  0x6c  =  'l'")]),y(`
`),i("span",{class:"line"},[i("span",{style:{color:"#dbd7ca"}},"0110 1111  =  0x6f  =  'o'")]),y(`
`),i("span",{class:"line"},[i("span",{style:{color:"#dbd7ca"}},"0010 0000  =  0x20  =  ' '")]),y(`
`),i("span",{class:"line"},[i("span",{style:{color:"#dbd7ca"}},"0101 0111  =  0x57  =  'W'")]),y(`
`),i("span",{class:"line"},[i("span",{style:{color:"#dbd7ca"}},"0110 1111  =  0x6f  =  'o'")]),y(`
`),i("span",{class:"line"},[i("span",{style:{color:"#dbd7ca"}},"0111 0010  =  0x72  =  'r'")]),y(`
`),i("span",{class:"line"},[i("span",{style:{color:"#dbd7ca"}},"0110 1100  =  0x6c  =  'l'")]),y(`
`),i("span",{class:"line"},[i("span",{style:{color:"#dbd7ca"}},"0110 0100  =  0x64  =  'd'")]),y(`
`),i("span",{class:"line"},[i("span",{style:{color:"#dbd7ca"}},"0010 0001  =  0x21  =  '!'")])])]),i("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{color:"#393a34"}},"0100 1000  =  0x48  =  'H'")]),y(`
`),i("span",{class:"line"},[i("span",{style:{color:"#393a34"}},"0110 0101  =  0x65  =  'e'")]),y(`
`),i("span",{class:"line"},[i("span",{style:{color:"#393a34"}},"0110 1100  =  0x6c  =  'l'")]),y(`
`),i("span",{class:"line"},[i("span",{style:{color:"#393a34"}},"0110 1100  =  0x6c  =  'l'")]),y(`
`),i("span",{class:"line"},[i("span",{style:{color:"#393a34"}},"0110 1111  =  0x6f  =  'o'")]),y(`
`),i("span",{class:"line"},[i("span",{style:{color:"#393a34"}},"0010 0000  =  0x20  =  ' '")]),y(`
`),i("span",{class:"line"},[i("span",{style:{color:"#393a34"}},"0101 0111  =  0x57  =  'W'")]),y(`
`),i("span",{class:"line"},[i("span",{style:{color:"#393a34"}},"0110 1111  =  0x6f  =  'o'")]),y(`
`),i("span",{class:"line"},[i("span",{style:{color:"#393a34"}},"0111 0010  =  0x72  =  'r'")]),y(`
`),i("span",{class:"line"},[i("span",{style:{color:"#393a34"}},"0110 1100  =  0x6c  =  'l'")]),y(`
`),i("span",{class:"line"},[i("span",{style:{color:"#393a34"}},"0110 0100  =  0x64  =  'd'")]),y(`
`),i("span",{class:"line"},[i("span",{style:{color:"#393a34"}},"0010 0001  =  0x21  =  '!'")])])])],-1),uA={__name:"7",setup(e){const t={hide:!1,srcSequence:"./pages/01-history.md"};return R(G),(n,s)=>{const o=Kn;return w(),H(Ue,ue(le(t)),{default:j(()=>[oA,rA,iA,V(o,null,{default:j(()=>[aA]),_:1}),V(o,null,{default:j(()=>[lA,cA]),_:1})]),_:1},16)}}},dA=Y(uA,[["__file","/@slidev/slides/7.md"]]),rh="/demystifying-unicode/standards.png",fA={class:"slidev-layout center h-full grid place-content-center"},pA={class:"my-auto"},hA={__name:"center",setup(e){return R(G),(t,n)=>(w(),$("div",fA,[i("div",pA,[wt(t.$slots,"default")])]))}},ct=Y(hA,[["__file","/home/ben/Workspace/demystifying-unicode/node_modules/@slidev/client/layouts/center.vue"]]),mA=i("div",{class:"flex flex-col"},[i("img",{src:rh,class:"center"}),i("p",{class:"text-3"}," Alt: Fortunately, the charging one has been solved now that we've all standardized on mini-USB. Or is it micro-USB? Shit. ")],-1),gA=i("footer",null,[i("p",null,[y("Source: "),i("a",{href:"https://xkcd.com/927/",target:"_blank",rel:"noopener"},"https://xkcd.com/927/")])],-1),yA={__name:"8",setup(e){const t={layout:"center",hide:!1,srcSequence:"./pages/01-history.md"};return R(G),(n,s)=>(w(),H(ct,ue(le(t)),{default:j(()=>[mA,gA]),_:1},16))}},vA=Y(yA,[["__file","/@slidev/slides/8.md"]]),_A=i("h2",null,"Competing standards",-1),bA=i("ul",null,[i("li",null,[i("s",null,"ANSI (American National Standards Institue) Characters"),y(" Windows code pages, Code Page 437")]),i("li",null,"ASCII (American Standard Code for Information Interchange) Characters")],-1),wA={class:"mt-10"},xA=i("pre",{class:"shiki-container"},[i("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{color:"#dbd7ca"}},'┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫ Cool "App" 3000 ┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓')]),y(`
`),i("span",{class:"line"},[i("span",{style:{color:"#dbd7ca"}},"┃                                                                                     ┃ ")]),y(`
`),i("span",{class:"line"},[i("span",{style:{color:"#dbd7ca"}},"┃                                                                                     ┃ ")]),y(`
`),i("span",{class:"line"},[i("span",{style:{color:"#dbd7ca"}},"┃                                                                                     ┃ ")]),y(`
`),i("span",{class:"line"},[i("span",{style:{color:"#dbd7ca"}},"┃                                                                                     ┃ ")]),y(`
`),i("span",{class:"line"},[i("span",{style:{color:"#dbd7ca"}},"┃                    ┏━━━━━━━━━━━━━━━━━━┫ Prompt ┣━━━━━━━━━━━━━━━━┓                   ┃")]),y(`
`),i("span",{class:"line"},[i("span",{style:{color:"#dbd7ca"}},"┃                    ┃                                            ┃                   ┃ ")]),y(`
`),i("span",{class:"line"},[i("span",{style:{color:"#dbd7ca"}},"┃                    ┃ DO YOU WANT YOUR LANGAUGE TO BE SUPPORTED? ┃                   ┃")]),y(`
`),i("span",{class:"line"},[i("span",{style:{color:"#dbd7ca"}},"┃                    ┃                                            ┃                   ┃")]),y(`
`),i("span",{class:"line"},[i("span",{style:{color:"#dbd7ca"}},"┃                    ┗━━━━━━━━━━━━━━━━━━┫ No ┣━┫ >Nah not even< ┣━┛                   ┃")]),y(`
`),i("span",{class:"line"},[i("span",{style:{color:"#dbd7ca"}},"┃                                                                                     ┃ ")]),y(`
`),i("span",{class:"line"},[i("span",{style:{color:"#dbd7ca"}},"┃                                                                                     ┃ ")]),y(`
`),i("span",{class:"line"},[i("span",{style:{color:"#dbd7ca"}},"┃                                                                                     ┃ ")]),y(`
`),i("span",{class:"line"},[i("span",{style:{color:"#dbd7ca"}},"┃                                                                                     ┃ ")]),y(`
`),i("span",{class:"line"},[i("span",{style:{color:"#dbd7ca"}},"┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛")])])]),i("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{color:"#393a34"}},'┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫ Cool "App" 3000 ┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓')]),y(`
`),i("span",{class:"line"},[i("span",{style:{color:"#393a34"}},"┃                                                                                     ┃ ")]),y(`
`),i("span",{class:"line"},[i("span",{style:{color:"#393a34"}},"┃                                                                                     ┃ ")]),y(`
`),i("span",{class:"line"},[i("span",{style:{color:"#393a34"}},"┃                                                                                     ┃ ")]),y(`
`),i("span",{class:"line"},[i("span",{style:{color:"#393a34"}},"┃                                                                                     ┃ ")]),y(`
`),i("span",{class:"line"},[i("span",{style:{color:"#393a34"}},"┃                    ┏━━━━━━━━━━━━━━━━━━┫ Prompt ┣━━━━━━━━━━━━━━━━┓                   ┃")]),y(`
`),i("span",{class:"line"},[i("span",{style:{color:"#393a34"}},"┃                    ┃                                            ┃                   ┃ ")]),y(`
`),i("span",{class:"line"},[i("span",{style:{color:"#393a34"}},"┃                    ┃ DO YOU WANT YOUR LANGAUGE TO BE SUPPORTED? ┃                   ┃")]),y(`
`),i("span",{class:"line"},[i("span",{style:{color:"#393a34"}},"┃                    ┃                                            ┃                   ┃")]),y(`
`),i("span",{class:"line"},[i("span",{style:{color:"#393a34"}},"┃                    ┗━━━━━━━━━━━━━━━━━━┫ No ┣━┫ >Nah not even< ┣━┛                   ┃")]),y(`
`),i("span",{class:"line"},[i("span",{style:{color:"#393a34"}},"┃                                                                                     ┃ ")]),y(`
`),i("span",{class:"line"},[i("span",{style:{color:"#393a34"}},"┃                                                                                     ┃ ")]),y(`
`),i("span",{class:"line"},[i("span",{style:{color:"#393a34"}},"┃                                                                                     ┃ ")]),y(`
`),i("span",{class:"line"},[i("span",{style:{color:"#393a34"}},"┃                                                                                     ┃ ")]),y(`
`),i("span",{class:"line"},[i("span",{style:{color:"#393a34"}},"┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛")])])])],-1),kA=i("p",null,"🙇 IBM - You helped us draw instead of supporting languages.",-1),SA=[xA,kA],AA={__name:"9",setup(e){const t={hide:!1,srcSequence:"./pages/01-history.md"};return R(G),(n,s)=>{const o=Oo("click");return w(),H(Ue,ue(le(t)),{default:j(()=>[_A,bA,Ht((w(),$("div",wA,SA)),[[o]])]),_:1},16)}}},EA=Y(AA,[["__file","/@slidev/slides/9.md"]]),TA="/demystifying-unicode/Codepage-437.png",CA="/demystifying-unicode/Codepage-737.png",$A=i("h2",null,"About ol ASCII - QQ",-1),FA=i("div",{class:"flex flex-row flex-items-stretch"},[i("div",{class:"text-center"},[i("p",null,[i("strong",null,"IBM 437")]),i("img",{class:"w-120",src:TA,alt:"An example of the characters on the commonly used IBM437 codepage"})]),i("div",{class:"text-center"},[i("p",null,[i("strong",null,"IBM 737")]),i("img",{class:"w-120 mt-5",src:CA,alt:"An example of the characters on IBM737 which shows greek characters above the 0x7F range"})])],-1),OA=i("div",{class:"absolute border-5 top-35 left-12 right-12 bottom-76 border-red"},null,-1),PA=i("ul",null,[i("li",null,[y("ASCII standardized 0x00…0x7F"),i("pre",{class:"shiki-container"},[i("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{color:"#dbd7ca"}},"␀␁␂␃␄␅␆␇␈␉␊␋␌␍␎␏␐␑␒␓␔␕␖␗␘␙␚␛␜␝␞␟")]),y(`
`),i("span",{class:"line"},[i("span",{style:{color:"#dbd7ca"}},`␠!"#$%&'()*+,-./0123456789:;<=>?`)]),y(`
`),i("span",{class:"line"},[i("span",{style:{color:"#dbd7ca"}},"@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_")]),y(`
`),i("span",{class:"line"},[i("span",{style:{color:"#dbd7ca"}},"`abcdefghijklmnopqrstuvwxyz{|}~␡")])])]),i("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{color:"#393a34"}},"␀␁␂␃␄␅␆␇␈␉␊␋␌␍␎␏␐␑␒␓␔␕␖␗␘␙␚␛␜␝␞␟")]),y(`
`),i("span",{class:"line"},[i("span",{style:{color:"#393a34"}},`␠!"#$%&'()*+,-./0123456789:;<=>?`)]),y(`
`),i("span",{class:"line"},[i("span",{style:{color:"#393a34"}},"@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_")]),y(`
`),i("span",{class:"line"},[i("span",{style:{color:"#393a34"}},"`abcdefghijklmnopqrstuvwxyz{|}~␡")])])])])]),i("li",null,[y("∴ "),i("code",null,"0x00..0x7F"),y(" was common between many code pages")])],-1),IA={__name:"10",setup(e){const t={hide:!1,srcSequence:"./pages/01-history.md"};return R(G),(n,s)=>{const o=Kn,r=un;return w(),H(Ue,ue(le(t)),{default:j(()=>[$A,FA,V(o,null,{default:j(()=>[OA]),_:1}),V(r,null,{default:j(()=>[PA]),_:1})]),_:1},16)}}},UA=Y(IA,[["__file","/@slidev/slides/10.md"]]),BA=i("h2",null,"How many characters is enough charcters?",-1),MA=i("p",{class:"pt-5"},[i("p",null,[i("strong",null,"DIN 91379"),y(' - Characters and character sequences for processing names and data exchange in europe"')])],-1),DA=i("table",null,[i("thead",null,[i("tr",null,[i("th"),i("th")])]),i("tbody",null,[i("tr",null,[i("td",null,"Base Latin Letters: 649"),i("td",null,"enl: 42")]),i("tr",null,[i("td",null,"Combinging Diacritics: 19"),i("td",null,"bnlreq: 17")]),i("tr",null,[i("td",null,"Greek Letters: 68"),i("td",null,"bnl: 59")]),i("tr",null,[i("td",null,"Cyrillic Letters: 61"),i("td",null,"bnlopt: 8")]),i("tr",null,[i("td"),i("td",null,"bnlnot: 2")])])],-1),LA=i("p",null,[i("strong",null,"💣 8 bits isn’t going to be enough 💣")],-1),RA=i("footer",null,[i("p",null,[y("DIN 91379: "),i("a",{href:"https://github.com/String-Latin/DIN-91379-Characters-and-Sequences",target:"_blank",rel:"noopener"},"https://github.com/String-Latin/DIN-91379-Characters-and-Sequences")])],-1),NA={__name:"11",setup(e){const t={hide:!1,srcSequence:"./pages/01-history.md"};return R(G),(n,s)=>{const o=un;return w(),H(Ue,ue(le(t)),{default:j(()=>[BA,MA,DA,V(o,null,{default:j(()=>[LA]),_:1}),RA]),_:1},16)}}},jA=Y(NA,[["__file","/@slidev/slides/11.md"]]),WA=i("h2",null,"Summary:",-1),qA=i("ul",null,[i("li",null,[y("Computers know bits - "),i("code",null,"1"),y("s and "),i("code",null,"0"),y("s")]),i("li",null,"Bits are not human structures - so we abstract"),i("li",null,[i("code",null,"char"),y(" isn’t a character, it’s just a "),i("code",null,"uint8_t"),y(" with a fancy name")]),i("li",null,"We need a whole lot more bits if we more than just names and dates in europe")],-1),HA={__name:"12",setup(e){const t={layout:"center",hide:!1,srcSequence:"./pages/01-history.md"};return R(G),(n,s)=>{const o=un;return w(),H(ct,ue(le(t)),{default:j(()=>[WA,V(o,null,{default:j(()=>[qA]),_:1})]),_:1},16)}}},VA=Y(HA,[["__file","/@slidev/slides/12.md"]]),zA=i("h1",null,"Unicode",-1),KA={__name:"13",setup(e){const t={layout:"cover",hide:!1,srcSequence:"./pages/02-unicode.md"};return R(G),(n,s)=>(w(),H(zs,ue(le(t)),{default:j(()=>[zA]),_:1},16))}},GA=Y(KA,[["__file","/@slidev/slides/13.md"]]),YA=i("h2",null,"Why Unicode?",-1),QA=i("ol",null,[i("li",null,"Codepages/charmaps? System dependant"),i("li",null,"Unique characters? Duplication everywhere"),i("li",null,"Display more than one codepage/charmap at a time? ␎␏␎␏␎␏␎␏"),i("li",null,"Text from outside of Europe? :ha:")],-1),ZA={__name:"14",setup(e){const t={hide:!1,srcSequence:"./pages/02-unicode.md"};return R(G),(n,s)=>{const o=un;return w(),H(Ue,ue(le(t)),{default:j(()=>[YA,V(o,null,{default:j(()=>[QA]),_:1})]),_:1},16)}}},JA=Y(ZA,[["__file","/@slidev/slides/14.md"]]);const XA=e=>(sf("data-v-d13ddf34"),e=e(),of(),e),eE=XA(()=>i("div",{class:"absolute top-0 left-0 the-internet flex justify-center items-center text-30"},[i("p",{class:"text-shadow-xl color-white text-shadow-color-red"},"The Internet")],-1)),tE={__name:"15",setup(e){const t={layout:"center",hide:!1,srcSequence:"./pages/02-unicode.md"};return R(G),(n,s)=>(w(),H(ct,ue(le(t)),{default:j(()=>[eE]),_:1},16))}},nE=Y(tE,[["__scopeId","data-v-d13ddf34"],["__file","/@slidev/slides/15.md"]]),sE=i("h2",null,"Unicode to the resque",-1),oE=i("ul",null,[i("li",null,"Universal"),i("li",null,"Efficient"),i("li",null,"Unambiguous")],-1),rE={__name:"16",setup(e){const t={layout:"center",hide:!1,srcSequence:"./pages/02-unicode.md"};return R(G),(n,s)=>{const o=un;return w(),H(ct,ue(le(t)),{default:j(()=>[sE,V(o,null,{default:j(()=>[oE]),_:1})]),_:1},16)}}},iE=Y(rE,[["__file","/@slidev/slides/16.md"]]),aE=i("h2",null,"New Terminology",-1),lE=i("table",null,[i("thead",null,[i("tr",null,[i("th"),i("th"),i("th")])]),i("tbody",null,[i("tr",null,[i("td",null,"Glyph"),i("td",null,"‽"),i("td",null,"How it actually looks, defined by the font")]),i("tr",null,[i("td",null,"Codepoint"),i("td",null,"U+203D"),i("td",null,"Unique identifier for this character")]),i("tr",null,[i("td",null,"Character"),i("td",null,"Interrobang"),i("td",null,"Description of the codepoint")]),i("tr",null,[i("td",null,"Block"),i("td",null,"General Punctuation, U+2000 - U+206F"),i("td",null,"The range of codepoints for a specific purpose")]),i("tr",null,[i("td",null,"Plane"),i("td",null,"Basic Multilingual Plane, U+0000 - U+FFFF"),i("td",null,"The wide group of codepoints")])])],-1),cE=i("footer",null,[i("p",null,[y("Ref: Characters and Glyphs "),i("a",{href:"https://www.unicode.org/versions/Unicode15.0.0/ch01.pdf",target:"_blank",rel:"noopener"},"https://www.unicode.org/versions/Unicode15.0.0/ch01.pdf")])],-1),uE={__name:"17",setup(e){const t={hide:!1,srcSequence:"./pages/02-unicode.md"};return R(G),(n,s)=>(w(),H(Ue,ue(le(t)),{default:j(()=>[aE,lE,cE]),_:1},16))}},dE=Y(uE,[["__file","/@slidev/slides/17.md"]]),fE="/demystifying-unicode/glyph-codepoint-character.jpg",pE=i("img",{src:fE,alt:"Triple spiderman meme, glyph, codepoint, character pointing at each other"},null,-1),hE={__name:"18",setup(e){const t={layout:"center",hide:!1,srcSequence:"./pages/02-unicode.md"};return R(G),(n,s)=>(w(),H(ct,ue(le(t)),{default:j(()=>[pE]),_:1},16))}},mE=Y(hE,[["__file","/@slidev/slides/18.md"]]),gE="/demystifying-unicode/no_chars_yes_glyphs.jpg",yE=i("img",{src:gE,alt:"Drake no: characters. Drake yes: glyphs"},null,-1),vE={__name:"19",setup(e){const t={layout:"center",hide:!1,srcSequence:"./pages/02-unicode.md"};return R(G),(n,s)=>(w(),H(ct,ue(le(t)),{default:j(()=>[yE]),_:1},16))}},_E=Y(vE,[["__file","/@slidev/slides/19.md"]]),bE=ke({__name:"two-cols",props:{class:{type:String},layoutClass:{type:String}},setup(e){const t=e;return R(G),(n,s)=>(w(),$("div",{class:Re(["slidev-layout two-columns w-full h-full grid grid-cols-2",t.layoutClass])},[i("div",{class:Re(["col-left",t.class])},[wt(n.$slots,"default")],2),i("div",{class:Re(["col-right",t.class])},[wt(n.$slots,"right")],2)],2))}}),wE=Y(bE,[["__file","/home/ben/Workspace/demystifying-unicode/node_modules/@slidev/client/layouts/two-cols.vue"]]),xE=i("h2",null,"Glyphemes",-1),kE=i("div",{class:"codepoint"},[i("div",{class:"glyph"},"é"),i("div",{class:"code"},"U+00e9")],-1),SE=i("div",{class:"codepoint"},[i("div",{class:"glyph"},"é"),i("div",{class:"code"},"U+0065 + U+0301")],-1),AE={__name:"20",setup(e){const t={layout:"two-cols",hide:!1,srcSequence:"./pages/02-unicode.md"};return R(G),(n,s)=>(w(),H(wE,ue(le(t)),{right:j(o=>[SE]),default:j(()=>[xE,kE]),_:1},16))}},EE=Y(AE,[["__file","/@slidev/slides/20.md"]]),TE=i("h2",null,"What is the difference between",-1),CE=i("h2",null,[i("code",null,"Unicode")],-1),$E=i("h2",null,"and",-1),FE=i("h2",null,[i("code",null,"UTF-8")],-1),OE={__name:"21",setup(e){const t={layout:"center",hide:!1,srcSequence:"./pages/02-unicode.md"};return R(G),(n,s)=>(w(),H(ct,ue(le(t)),{default:j(()=>[TE,CE,$E,FE]),_:1},16))}},PE=Y(OE,[["__file","/@slidev/slides/21.md"]]),IE=i("div",{class:"text-7"},[i("p",null,[i("code",null,"Unicode"),y(' - "The Standard"')]),i("p",null,[i("code",null,"UTF-8"),y(" - Encoding")])],-1),UE={__name:"22",setup(e){const t={layout:"center",hide:!1,srcSequence:"./pages/02-unicode.md"};return R(G),(n,s)=>(w(),H(ct,ue(le(t)),{default:j(()=>[IE]),_:1},16))}},BE=Y(UE,[["__file","/@slidev/slides/22.md"]]),ME=i("h2",null,"Encoding",-1),DE=i("p",null,[i("strong",null,"DIN 91379"),y(": 925 characters")],-1),LE=i("p",null,"At least 10 bits - (Names/Data exchange in Europe)",-1),RE=i("p",null,"Unicode:",-1),NE=i("ul",null,[i("li",null,"Supports 1048576 Characters"),i("li",null,"Code space: U+000000 - U+10FFFF"),i("li",null,"Which requires at least 21 bits")],-1),jE=i("footer",null,[i("p",null,"Fun fact: Unicode <2.0 code space was 16-bit wide.")],-1),WE={__name:"23",setup(e){const t={hide:!1,srcSequence:"./pages/02-unicode.md"};return R(G),(n,s)=>{const o=un;return w(),H(Ue,ue(le(t)),{default:j(()=>[ME,V(o,null,{default:j(()=>[DE,LE,RE,NE]),_:1}),jE]),_:1},16)}}},qE=Y(WE,[["__file","/@slidev/slides/23.md"]]),HE=i("div",{class:"flex flex-col"},[i("img",{src:rh,class:"center"}),i("p",{class:"text-3"}," Alt: Fortunately, the charging one has been solved now that we've all standardized on mini-USB. Or is it micro-USB? Shit. ")],-1),VE=i("footer",null,[i("p",null,[y("Source: "),i("a",{href:"https://xkcd.com/927/",target:"_blank",rel:"noopener"},"https://xkcd.com/927/")])],-1),zE={__name:"24",setup(e){const t={layout:"center",hide:!1,srcSequence:"./pages/02-unicode.md"};return R(G),(n,s)=>(w(),H(ct,ue(le(t)),{default:j(()=>[HE,VE]),_:1},16))}},KE=Y(zE,[["__file","/@slidev/slides/24.md"]]),GE=i("h2",null,"Woo options!",-1),YE=i("p",null,"😻 = U+1F63B = Smiling cat face with heart-shaped eyes",-1),QE=i("table",null,[i("thead",null,[i("tr",null,[i("th"),i("th")])]),i("tbody",null,[i("tr",null,[i("td",null,"UTF-8"),i("td",null,[i("code",null,"0xF0 0x9F 0x98 0xBB")])]),i("tr",null,[i("td",null,"UTF-16BE*"),i("td",null,[i("code",null,"0xD83D 0xDE3B")])]),i("tr",null,[i("td",null,"UTF-16LE"),i("td",null,[i("code",null,"0x3DD8 0x3BDE")])]),i("tr",null,[i("td",null,"UTF-32BE*"),i("td",null,[i("code",null,"0x0001F63B")])]),i("tr",null,[i("td",null,"UTF-32LE"),i("td",null,[i("code",null,"0x3BF60100")])])])],-1),ZE=i("p",null,[y("* BE encodings are the default if no BOM "),i("code",null,"\\xFEFF")],-1),JE=i("footer",null,[i("p",null,[y("UTF-21 exists - but it’s a toy encoding hobby project"),i("br")])],-1),XE={__name:"25",setup(e){const t={hide:!1,srcSequence:"./pages/02-unicode.md"};return R(G),(n,s)=>{const o=Kn;return w(),H(Ue,ue(le(t)),{default:j(()=>[GE,YE,V(o,null,{default:j(()=>[QE,ZE]),_:1}),JE]),_:1},16)}}},eT=Y(XE,[["__file","/@slidev/slides/25.md"]]),tT=i("h2",null,"UTF-8 is the king of the web",-1),nT={__name:"26",setup(e){const t={layout:"center",hide:!1,srcSequence:"./pages/02-unicode.md"};return R(G),(n,s)=>(w(),H(ct,ue(le(t)),{default:j(()=>[tT]),_:1},16))}},sT=Y(nT,[["__file","/@slidev/slides/26.md"]]),oT=i("h2",null,"Nuts and bolts of UTF-8",-1),rT=i("p",null,"Key points:",-1),iT=i("ul",null,[i("li",null,"Variable width (1-4 bytes)"),i("li",null,"∴ Variable offset between characters"),i("li",null,"The default in Rust (+many more)")],-1),aT=i("hr",null,null,-1),lT=i("table",null,[i("thead",null,[i("tr",null,[i("th",null,"Code point range"),i("th",null,"Byte 1"),i("th",null,"Byte 2"),i("th",null,"Byte 3"),i("th",null,"Byte 4"),i("th",null,"Bit Capacity"),i("th",null,"Code points")])]),i("tbody",null,[i("tr",null,[i("td",null,[i("code",null,"0x000000..0x00007F")]),i("td",null,[i("code",null,"0xxxxxxx")]),i("td"),i("td"),i("td"),i("td",null,"7"),i("td",null,"128")]),i("tr",null,[i("td",null,[i("code",null,"0x000080..0x0007FF")]),i("td",null,[i("code",null,"110xxxxx")]),i("td",null,[i("code",null,"10xxxxxx")]),i("td"),i("td"),i("td",null,"11"),i("td",null,"1920")]),i("tr",null,[i("td",null,[i("code",null,"0x000800..0x00FFFF")]),i("td",null,[i("code",null,"1110xxxx")]),i("td",null,[i("code",null,"10xxxxxx")]),i("td",null,[i("code",null,"10xxxxxx")]),i("td"),i("td",null,"16"),i("td",null,"63488")]),i("tr",null,[i("td",null,[i("code",null,"0x010000..0x10FFFF")]),i("td",null,[i("code",null,"11110xxx")]),i("td",null,[i("code",null,"10xxxxxx")]),i("td",null,[i("code",null,"10xxxxxx")]),i("td",null,[i("code",null,"10xxxxxx")]),i("td",null,"21"),i("td",null,"1mil+")])])],-1),cT={__name:"27",setup(e){const t={hide:!1,srcSequence:"./pages/02-unicode.md"};return R(G),(n,s)=>{const o=Kn;return w(),H(Ue,ue(le(t)),{default:j(()=>[oT,rT,iT,V(o,null,{default:j(()=>[aT,lT]),_:1})]),_:1},16)}}},uT=Y(cT,[["__file","/@slidev/slides/27.md"]]),dT=["width","height"],fT=["id"],pT=["fill"],hT=["x1","y1","x2","y2","stroke","stroke-width","marker-end"],mT=ke({__name:"Arrow",props:{x1:{type:[Number,String],required:!0},y1:{type:[Number,String],required:!0},x2:{type:[Number,String],required:!0},y2:{type:[Number,String],required:!0},width:{type:[Number,String],required:!1},color:{type:String,required:!1}},setup(e){R(G);const n=b1("abcedfghijklmn",10)();return(s,o)=>(w(),$("svg",{class:"absolute left-0 top-0 pointer-events-none",width:Math.max(+s.x1,+s.x2)+50,height:Math.max(+s.y1,+s.y2)+50},[i("defs",null,[i("marker",{id:O(n),markerUnits:"strokeWidth",markerWidth:10,markerHeight:7,refX:"9",refY:"3.5",orient:"auto"},[i("polygon",{points:"0 0, 10 3.5, 0 7",fill:s.color||"currentColor"},null,8,pT)],8,fT)]),i("line",{x1:+s.x1,y1:+s.y1,x2:+s.x2,y2:+s.y2,stroke:s.color||"currentColor","stroke-width":s.width||2,"marker-end":`url(#${O(n)})`},null,8,hT)],8,dT))}}),gT=Y(mT,[["__file","/home/ben/Workspace/demystifying-unicode/node_modules/@slidev/client/builtin/Arrow.vue"]]),yT=i("h2",null,"Let’s encode!",-1),vT=i("p",null,"😻 = U+1F63B = Smiling cat face with heart-shaped eyes",-1),_T=i("p",null,[y("1F63B = "),i("code",null,"0001 1111 0110 0011 1011")],-1),bT=[_T],wT={class:"mt-30"},xT=i("p",null,"We need at least 17 bits of room to encode U+1F63B",-1),kT=i("hr",null,null,-1),ST=i("p",null,[i("code",null,"17 > 7"),y(" ∴ Needs more than 1 byte")],-1),AT=i("p",null,[i("code",null,"17 > 11"),y(" ∴ Needs more than 2 bytes")],-1),ET=i("p",null,[i("code",null,"17 > 16"),y(" ∴ Needs more than 3 bytes")],-1),TT=i("p",null,"∴ We need 4 bytes!",-1),CT=i("p",null,[i("code",null,"1111 0xxx"),y(),i("code",null,"10xx xxxx"),y(),i("code",null,"10xx xxxx"),y(),i("code",null,"10xx xxxx")],-1),$T=[kT,ST,AT,ET,TT,CT],FT={__name:"28",setup(e){const t={hide:!1,srcSequence:"./pages/02-unicode.md"};return R(G),(n,s)=>{const o=gT,r=Oo("click");return w(),H(Ue,ue(le(t)),{default:j(()=>[yT,vT,Ht((w(),$("p",null,bT)),[[r]]),Ht((w(),$("div",wT,[V(o,{x1:"250",y1:"250",x2:"170",y2:"160",width:"5"}),xT])),[[r]]),Ht((w(),$("div",null,$T)),[[r]])]),_:1},16)}}},OT=Y(FT,[["__file","/@slidev/slides/28.md"]]);const Ve=e=>(sf("data-v-224221b4"),e=e(),of(),e),PT=Ve(()=>i("h2",null,"Let’s encode!",-1)),IT=Ve(()=>i("p",null,"😻 = U+1F63B = Smiling cat face with heart-shaped eyes",-1)),UT=Ve(()=>i("p",null,[y("0x1F63B = "),i("code",null,"0001 1111 0110 0011 1011")],-1)),BT={class:"absolute top-40 left-14"},MT=Ve(()=>i("span",null,"0x1F63B = ",-1)),DT=Ve(()=>i("span",{class:"binary color-red"}," 00",-1)),LT=Ve(()=>i("span",{class:"binary color-blue"},"01 1111",-1)),RT=Ve(()=>i("span",{class:"binary color-green"}," 0110 00",-1)),NT=Ve(()=>i("span",{class:"binary color-yellow"},"11 1011",-1)),jT=[MT,DT,LT,RT,NT],WT={class:"absolute parts top-40 left-14"},qT=Ve(()=>i("div",{class:"binary color-red absolute part part-1 anim"},"00",-1)),HT=Ve(()=>i("div",{class:"binary color-blue absolute part part-2 anim"},"01 1111",-1)),VT=Ve(()=>i("div",{class:"binary color-green absolute part part-3 no-backtick anim"},"0110 00",-1)),zT=Ve(()=>i("div",{class:"binary color-yellow absolute part part-4 no-backtick anim"},"11 1011",-1)),KT=[qT,HT,VT,zT],GT={class:"absolute top-49 left-31"},YT=Ve(()=>i("span",{class:"binary"},[y("| 1111 0000 = 1111 00"),i("span",{class:"color-red"},"00"),y(" ")],-1)),QT=Ve(()=>i("p",null,[i("span",{class:"binary"},[y("| 1000 0000 = 10"),i("span",{class:"color-blue"},"01 1111"),y(" ")])],-1)),ZT=Ve(()=>i("p",null,[i("span",{class:"binary"},[y("| 1000 0000 = 10"),i("span",{class:"color-green"},"01 1000"),y(" ")])],-1)),JT=Ve(()=>i("p",null,[i("span",{class:"binary"},[y("| 1000 0000 = 10"),i("span",{class:"color-yellow"},"11 1011"),y(" ")])],-1)),XT=[YT,QT,ZT,JT],eC={class:"absolute top-49 left-86"},tC=Ve(()=>i("span",{class:"binary"}," = 0xF0",-1)),nC=Ve(()=>i("p",null,[i("span",{class:"binary"}," = 0x9F")],-1)),sC=Ve(()=>i("p",null,[i("span",{class:"binary"}," = 0x98")],-1)),oC=Ve(()=>i("p",null,[i("span",{class:"binary"}," = 0xBB")],-1)),rC=[tC,nC,sC,oC],iC={class:"absolute top-90 left-15"},aC=Ve(()=>i("hr",null,null,-1)),lC=Ve(()=>i("p",null,[y("Thus! U+1F63B = "),i("code",null,"\\xF0\\x9F\\x97\\xBB"),y(" in UTF-8")],-1)),cC={__name:"29",setup(e){const t={hide:!1,srcSequence:"./pages/02-unicode.md"};return R(G),(n,s)=>{const o=Kn,r=Oo("click");return w(),H(Ue,ue(le(t)),{default:j(()=>[PT,IT,UT,Ht((w(),$("div",BT,jT)),[[r]]),Ht((w(),$("div",WT,KT)),[[r]]),Ht((w(),$("div",GT,XT)),[[r]]),Ht((w(),$("div",eC,rC)),[[r]]),i("div",iC,[V(o,null,{default:j(()=>[aC,lC]),_:1})])]),_:1},16)}}},uC=Y(cC,[["__scopeId","data-v-224221b4"],["__file","/@slidev/slides/29.md"]]),dC=i("h2",null,"Summary",-1),fC=i("ul",null,[i("li",null,[y("Unicode is a standard. It defeines a dictionary of "),i("code",null,"codepoints"),y(" to their character descriptions")]),i("li",null,"UTF-8 is an Encoding - defined by the Unicode Standard."),i("li",null,"Encodings help humans interpret bytes as painted glyphs"),i("li",null,"UTF-8 is by far the most common standard due to it’s memory efficiency (e.g. variable space)")],-1),pC={__name:"30",setup(e){const t={layout:"center",hide:!1,srcSequence:"./pages/02-unicode.md"};return R(G),(n,s)=>{const o=un;return w(),H(ct,ue(le(t)),{default:j(()=>[dC,V(o,null,{default:j(()=>[fC]),_:1})]),_:1},16)}}},hC=Y(pC,[["__file","/@slidev/slides/30.md"]]),mC=i("h1",null,"Unicode in Rust",-1),gC={__name:"31",setup(e){const t={layout:"cover",hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"};return R(G),(n,s)=>(w(),H(zs,ue(le(t)),{default:j(()=>[mC]),_:1},16))}},yC=Y(gC,[["__file","/@slidev/slides/31.md"]]),vC=i("p",null,"Q: What is the primitive string type in rust?",-1),_C={__name:"32",setup(e){const t={layout:"center",hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"};return R(G),(n,s)=>(w(),H(ct,ue(le(t)),{default:j(()=>[vC]),_:1},16))}},bC=Y(_C,[["__file","/@slidev/slides/32.md"]]),wC=i("p",null,[y("Answer: "),i("code",null,"str")],-1),xC=i("p",null,[y("Incorrect: "),i("code",null,"String"),y(", "),i("code",null,"&str")],-1),kC=i("ul",null,[i("li",null,[i("code",null,"&str"),y(" impls "),i("code",null,"AsRef<str>")]),i("li",null,[i("code",null,"String"),y(" impls "),i("code",null,"AsRef<str>")]),i("li",null,[i("code",null,"String"),y(" impls "),i("code",null,"Deref"),y(" to "),i("code",null,"str"),y(" (thus "),i("code",null,"&String"),y(" derefs to "),i("code",null,"&str"),y(")")])],-1),SC=i("blockquote",null,[i("p",null,[y("The "),i("code",null,"str"),y(" type, also called a ‘string slice’, is the most primitive string type. It is usually seen in its borrowed form, "),i("code",null,"&str"),y(". It is also the type of string literals, "),i("code",null,"&'static str"),y(".")]),i("p",null,[y("String slices are "),i("strong",null,"always"),y(" valid UTF-8.")])],-1),AC={__name:"33",setup(e){const t={layout:"center",hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"};return R(G),(n,s)=>{const o=Kn;return w(),H(ct,ue(le(t)),{default:j(()=>[wC,V(o,null,{default:j(()=>[xC,kC]),_:1}),V(o,null,{default:j(()=>[SC]),_:1})]),_:1},16)}}},EC=Y(AC,[["__file","/@slidev/slides/33.md"]]),TC={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},CC=i("path",{fill:"currentColor",d:"M200 32h-36.26a47.92 47.92 0 0 0-71.48 0H56a16 16 0 0 0-16 16v168a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16Zm-72 0a32 32 0 0 1 32 32H96a32 32 0 0 1 32-32Zm72 184H56V48h26.75A47.93 47.93 0 0 0 80 64v8a8 8 0 0 0 8 8h80a8 8 0 0 0 8-8v-8a47.93 47.93 0 0 0-2.75-16H200Z"},null,-1),$C=[CC];function FC(e,t){return w(),$("svg",TC,$C)}const OC={name:"ph-clipboard",render:FC},PC={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},IC=i("path",{fill:"currentColor",d:"M173.66 98.34a8 8 0 0 1 0 11.32l-56 56a8 8 0 0 1-11.32 0l-24-24a8 8 0 0 1 11.32-11.32L112 148.69l50.34-50.35a8 8 0 0 1 11.32 0ZM232 128A104 104 0 1 1 128 24a104.11 104.11 0 0 1 104 104Zm-16 0a88 88 0 1 0-88 88a88.1 88.1 0 0 0 88-88Z"},null,-1),UC=[IC];function BC(e,t){return w(),$("svg",PC,UC)}const MC={name:"ph-check-circle",render:BC},DC=["title"],LC=ke({__name:"CodeBlockWrapper",props:{ranges:{default:()=>[]},startLine:{type:Number,default:1},lines:{type:Boolean,default:$e.lineNumbers},at:{type:Number,default:void 0},maxHeight:{type:String,default:void 0}},setup(e){const t=e;R(G);const n=R(yo),s=R(rs),o=R(vo);function r(f=5){const p=[],h="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",m=h.length;for(let _=0;_<f;_++)p.push(h.charAt(Math.floor(Math.random()*m)));return p.join("")}const a=K(),l=$t();Vn(()=>{const f=t.at==null?s==null?void 0:s.value.length:t.at,p=P(()=>o!=null&&o.value?t.ranges.length-1:Math.min(Math.max(0,((n==null?void 0:n.value)||0)-(f||0)),t.ranges.length-1)),h=P(()=>t.ranges[p.value]||"");if(t.ranges.length>=2&&!(o!=null&&o.value)){const m=r(),_=x1(t.ranges.length-1).map(k=>m+k);s!=null&&s.value&&(s.value.push(..._),pi(()=>_.forEach(k=>xa(s.value,k)),l))}Ss(()=>{if(!a.value)return;const _=a.value.querySelector(".shiki-dark")?Array.from(a.value.querySelectorAll(".shiki")):[a.value],k=t.startLine;for(const x of _){const S=Array.from(x.querySelectorAll(".line")),b=nh(S.length+k-1,h.value);if(S.forEach((A,E)=>{const C=b.includes(E+k);A.classList.toggle(ts,!0),A.classList.toggle("highlighted",C),A.classList.toggle("dishonored",!C)}),t.maxHeight){const A=Array.from(x.querySelectorAll(".line.highlighted"));A.reduce((C,M)=>M.offsetHeight+C,0)>a.value.offsetHeight?A[0].scrollIntoView({behavior:"smooth",block:"start"}):A.length>0&&A[Math.round((A.length-1)/2)].scrollIntoView({behavior:"smooth",block:"center"})}}})});const{copied:c,copy:u}=xv();function d(){var p,h;const f=(h=(p=a.value)==null?void 0:p.querySelector(".slidev-code"))==null?void 0:h.textContent;f&&u(f)}return(f,p)=>{const h=MC,m=OC;return w(),$("div",{ref_key:"el",ref:a,class:Re(["slidev-code-wrapper relative group",{"slidev-code-line-numbers":t.lines}]),style:Xe({"max-height":t.maxHeight,"overflow-y":t.maxHeight?"scroll":void 0,"--start":t.startLine})},[wt(f.$slots,"default"),O($e).codeCopy?(w(),$("button",{key:0,class:"slidev-code-copy absolute top-0 right-0 transition opacity-0 group-hover:opacity-20 hover:!opacity-100",title:O(c)?"Copied":"Copy",onClick:p[0]||(p[0]=_=>d())},[O(c)?(w(),H(h,{key:0,class:"p-2 w-8 h-8"})):(w(),H(m,{key:1,class:"p-2 w-8 h-8"}))],8,DC)):ge("v-if",!0)],6)}}}),Zo=Y(LC,[["__file","/home/ben/Workspace/demystifying-unicode/node_modules/@slidev/client/builtin/CodeBlockWrapper.vue"]]),RC=i("h2",null,"String slices",-1),NC=i("br",null,null,-1),jC=i("blockquote",null,[i("p",null,"Primitive Type slice"),i("p",null,"A dynamically-sized view into a contiguous sequence, [T]. Contiguous here means that elements are laid out so that every element is the same distance from its neighbors.")],-1),WC=i("p",null,[y("Ref: "),i("a",{href:"https://doc.rust-lang.org/std/primitive.slice.html",target:"_blank",rel:"noopener"},"https://doc.rust-lang.org/std/primitive.slice.html")],-1),qC=i("br",null,null,-1),HC=i("p",null,[y("If every element is the same distance from it’s neighbour, then what is the "),i("code",null,"len"),y(" of the following?")],-1),VC=i("pre",{class:"shiki-container"},[i("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{color:"#4D9375"}},"fn"),i("span",{style:{color:"#DBD7CA"}}," "),i("span",{style:{color:"#A1B567"}},"main"),i("span",{style:{color:"#858585"}},"()"),i("span",{style:{color:"#DBD7CA"}}," "),i("span",{style:{color:"#858585"}},"{")]),y(`
`),i("span",{class:"line"},[i("span",{style:{color:"#DBD7CA"}},"    "),i("span",{style:{color:"#CB7676"}},"let"),i("span",{style:{color:"#DBD7CA"}}," "),i("span",{style:{color:"#B8A965"}},"s"),i("span",{style:{color:"#DBD7CA"}}," "),i("span",{style:{color:"#CB7676"}},"="),i("span",{style:{color:"#DBD7CA"}}," "),i("span",{style:{color:"#C98A7D"}},'"İstanbul"'),i("span",{style:{color:"#858585"}},";")]),y(`
`),i("span",{class:"line"}),y(`
`),i("span",{class:"line"},[i("span",{style:{color:"#DBD7CA"}},"    "),i("span",{style:{color:"#A1B567"}},"println!"),i("span",{style:{color:"#858585"}},"("),i("span",{style:{color:"#C98A7D"}},'"'),i("span",{style:{color:"#858585"}},"{}"),i("span",{style:{color:"#C98A7D"}},'"'),i("span",{style:{color:"#858585"}},","),i("span",{style:{color:"#DBD7CA"}}," "),i("span",{style:{color:"#B8A965"}},"s"),i("span",{style:{color:"#CB7676"}},"."),i("span",{style:{color:"#A1B567"}},"len"),i("span",{style:{color:"#858585"}},"());")]),y(`
`),i("span",{class:"line"},[i("span",{style:{color:"#858585"}},"}")])])]),i("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{color:"#1C6B48"}},"fn"),i("span",{style:{color:"#393A34"}}," "),i("span",{style:{color:"#6C7834"}},"main"),i("span",{style:{color:"#8E8F8B"}},"()"),i("span",{style:{color:"#393A34"}}," "),i("span",{style:{color:"#8E8F8B"}},"{")]),y(`
`),i("span",{class:"line"},[i("span",{style:{color:"#393A34"}},"    "),i("span",{style:{color:"#AB5959"}},"let"),i("span",{style:{color:"#393A34"}}," "),i("span",{style:{color:"#8C862B"}},"s"),i("span",{style:{color:"#393A34"}}," "),i("span",{style:{color:"#AB5959"}},"="),i("span",{style:{color:"#393A34"}}," "),i("span",{style:{color:"#B56959"}},'"İstanbul"'),i("span",{style:{color:"#8E8F8B"}},";")]),y(`
`),i("span",{class:"line"}),y(`
`),i("span",{class:"line"},[i("span",{style:{color:"#393A34"}},"    "),i("span",{style:{color:"#6C7834"}},"println!"),i("span",{style:{color:"#8E8F8B"}},"("),i("span",{style:{color:"#B56959"}},'"'),i("span",{style:{color:"#8E8F8B"}},"{}"),i("span",{style:{color:"#B56959"}},'"'),i("span",{style:{color:"#8E8F8B"}},","),i("span",{style:{color:"#393A34"}}," "),i("span",{style:{color:"#8C862B"}},"s"),i("span",{style:{color:"#AB5959"}},"."),i("span",{style:{color:"#6C7834"}},"len"),i("span",{style:{color:"#8E8F8B"}},"());")]),y(`
`),i("span",{class:"line"},[i("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),zC=i("pre",{class:"shiki-container"},[i("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{color:"#758575"}},"    //        ^^ 9")])])]),i("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{color:"#A0ADA0"}},"    //        ^^ 9")])])])],-1),KC=i("p",null,[y("∴ A String slice ("),i("code",null,"str"),y(") is just a slice of bytes ("),i("code",null,"[u8]"),y("), which contents are always valid UTF-8.")],-1),GC={__name:"34",setup(e){const t={hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"};return R(G),(n,s)=>{const o=Zo,r=Kn;return w(),H(Ue,ue(le(t)),{default:j(()=>[RC,NC,jC,WC,qC,V(r,null,{default:j(()=>[HC,V(o,zt({},{ranges:[""]}),{default:j(()=>[VC]),_:1},16)]),_:1}),V(r,null,{default:j(()=>[V(o,zt({},{ranges:[""]}),{default:j(()=>[zC]),_:1},16)]),_:1}),V(r,null,{default:j(()=>[KC]),_:1})]),_:1},16)}}},YC=Y(GC,[["__file","/@slidev/slides/34.md"]]),QC=i("h2",null,"Lets make some strings",-1),ZC={__name:"35",setup(e){const t={layout:"center",hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"};return R(G),(n,s)=>(w(),H(ct,ue(le(t)),{default:j(()=>[QC]),_:1},16))}},JC=Y(ZC,[["__file","/@slidev/slides/35.md"]]),XC=i("h2",null,"Using strings in Rust",-1),e$=i("blockquote",null,[i("p",null,[y("String slices are "),i("strong",null,"always"),y(" valid UTF-8.")])],-1),t$=i("p",null,[y("∴ The compiler won’t compile your rust if you try to do non UTF-8 things in "),i("code",null,"&str")],-1),n$=i("pre",{class:"shiki-container"},[i("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{color:"#4D9375"}},"fn"),i("span",{style:{color:"#DBD7CA"}}," "),i("span",{style:{color:"#A1B567"}},"main"),i("span",{style:{color:"#858585"}},"()"),i("span",{style:{color:"#DBD7CA"}}," "),i("span",{style:{color:"#858585"}},"{")]),y(`
`),i("span",{class:"line"},[i("span",{style:{color:"#DBD7CA"}},"    "),i("span",{style:{color:"#CB7676"}},"let"),i("span",{style:{color:"#DBD7CA"}}," "),i("span",{style:{color:"#B8A965"}},"s"),i("span",{style:{color:"#DBD7CA"}}," "),i("span",{style:{color:"#CB7676"}},"="),i("span",{style:{color:"#DBD7CA"}}," "),i("span",{style:{color:"#C98A7D"}},'"Hello World"'),i("span",{style:{color:"#858585"}},";"),i("span",{style:{color:"#758575"}},"     // Good")]),y(`
`),i("span",{class:"line"},[i("span",{style:{color:"#DBD7CA"}},"    "),i("span",{style:{color:"#CB7676"}},"let"),i("span",{style:{color:"#DBD7CA"}}," "),i("span",{style:{color:"#B8A965"}},"s"),i("span",{style:{color:"#DBD7CA"}}," "),i("span",{style:{color:"#CB7676"}},"="),i("span",{style:{color:"#DBD7CA"}}," "),i("span",{style:{color:"#C98A7D"}},'"Hello'),i("span",{style:{color:"#D4976C"}},"\\x20"),i("span",{style:{color:"#C98A7D"}},'World"'),i("span",{style:{color:"#858585"}},";"),i("span",{style:{color:"#758575"}},"  // Also good")]),y(`
`),i("span",{class:"line"},[i("span",{style:{color:"#DBD7CA"}},"    "),i("span",{style:{color:"#CB7676"}},"let"),i("span",{style:{color:"#DBD7CA"}}," "),i("span",{style:{color:"#B8A965"}},"s"),i("span",{style:{color:"#DBD7CA"}}," "),i("span",{style:{color:"#CB7676"}},"="),i("span",{style:{color:"#DBD7CA"}}," "),i("span",{style:{color:"#C98A7D"}},'"Hello'),i("span",{style:{color:"#D4976C"}},"\\x7F"),i("span",{style:{color:"#C98A7D"}},'World"'),i("span",{style:{color:"#858585"}},";"),i("span",{style:{color:"#758575"}},"  // Also good (\\x7F is the control character `DEL`)")]),y(`
`),i("span",{class:"line"},[i("span",{style:{color:"#DBD7CA"}},"    "),i("span",{style:{color:"#CB7676"}},"let"),i("span",{style:{color:"#DBD7CA"}}," "),i("span",{style:{color:"#B8A965"}},"s"),i("span",{style:{color:"#DBD7CA"}}," "),i("span",{style:{color:"#CB7676"}},"="),i("span",{style:{color:"#DBD7CA"}}," "),i("span",{style:{color:"#C98A7D"}},'"Hello'),i("span",{style:{color:"#D4976C"}},"\\x"),i("span",{style:{color:"#C98A7D"}},'80World"'),i("span",{style:{color:"#858585"}},";"),i("span",{style:{color:"#758575"}},"  // Fails")]),y(`
`),i("span",{class:"line"},[i("span",{style:{color:"#758575"}},"    //            ^^^^ must be a character in the range [\\x00-\\x7f]")]),y(`
`),i("span",{class:"line"},[i("span",{style:{color:"#858585"}},"}")])])]),i("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{color:"#1C6B48"}},"fn"),i("span",{style:{color:"#393A34"}}," "),i("span",{style:{color:"#6C7834"}},"main"),i("span",{style:{color:"#8E8F8B"}},"()"),i("span",{style:{color:"#393A34"}}," "),i("span",{style:{color:"#8E8F8B"}},"{")]),y(`
`),i("span",{class:"line"},[i("span",{style:{color:"#393A34"}},"    "),i("span",{style:{color:"#AB5959"}},"let"),i("span",{style:{color:"#393A34"}}," "),i("span",{style:{color:"#8C862B"}},"s"),i("span",{style:{color:"#393A34"}}," "),i("span",{style:{color:"#AB5959"}},"="),i("span",{style:{color:"#393A34"}}," "),i("span",{style:{color:"#B56959"}},'"Hello World"'),i("span",{style:{color:"#8E8F8B"}},";"),i("span",{style:{color:"#A0ADA0"}},"     // Good")]),y(`
`),i("span",{class:"line"},[i("span",{style:{color:"#393A34"}},"    "),i("span",{style:{color:"#AB5959"}},"let"),i("span",{style:{color:"#393A34"}}," "),i("span",{style:{color:"#8C862B"}},"s"),i("span",{style:{color:"#393A34"}}," "),i("span",{style:{color:"#AB5959"}},"="),i("span",{style:{color:"#393A34"}}," "),i("span",{style:{color:"#B56959"}},'"Hello'),i("span",{style:{color:"#A65E2B"}},"\\x20"),i("span",{style:{color:"#B56959"}},'World"'),i("span",{style:{color:"#8E8F8B"}},";"),i("span",{style:{color:"#A0ADA0"}},"  // Also good")]),y(`
`),i("span",{class:"line"},[i("span",{style:{color:"#393A34"}},"    "),i("span",{style:{color:"#AB5959"}},"let"),i("span",{style:{color:"#393A34"}}," "),i("span",{style:{color:"#8C862B"}},"s"),i("span",{style:{color:"#393A34"}}," "),i("span",{style:{color:"#AB5959"}},"="),i("span",{style:{color:"#393A34"}}," "),i("span",{style:{color:"#B56959"}},'"Hello'),i("span",{style:{color:"#A65E2B"}},"\\x7F"),i("span",{style:{color:"#B56959"}},'World"'),i("span",{style:{color:"#8E8F8B"}},";"),i("span",{style:{color:"#A0ADA0"}},"  // Also good (\\x7F is the control character `DEL`)")]),y(`
`),i("span",{class:"line"},[i("span",{style:{color:"#393A34"}},"    "),i("span",{style:{color:"#AB5959"}},"let"),i("span",{style:{color:"#393A34"}}," "),i("span",{style:{color:"#8C862B"}},"s"),i("span",{style:{color:"#393A34"}}," "),i("span",{style:{color:"#AB5959"}},"="),i("span",{style:{color:"#393A34"}}," "),i("span",{style:{color:"#B56959"}},'"Hello'),i("span",{style:{color:"#A65E2B"}},"\\x"),i("span",{style:{color:"#B56959"}},'80World"'),i("span",{style:{color:"#8E8F8B"}},";"),i("span",{style:{color:"#A0ADA0"}},"  // Fails")]),y(`
`),i("span",{class:"line"},[i("span",{style:{color:"#A0ADA0"}},"    //            ^^^^ must be a character in the range [\\x00-\\x7f]")]),y(`
`),i("span",{class:"line"},[i("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),s$={__name:"36",setup(e){const t={hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"};return R(G),(n,s)=>{const o=Zo;return w(),H(Ue,ue(le(t)),{default:j(()=>[XC,e$,t$,V(o,zt({},{ranges:[""]}),{default:j(()=>[n$]),_:1},16)]),_:1},16)}}},o$=Y(s$,[["__file","/@slidev/slides/36.md"]]),r$=i("h2",null,"Creating Strings",-1),i$=i("p",null,"Remember, all strings are just arrays of bytes. As such, rust will also let us create strings from exactly that, vectors of bytes.",-1),a$=i("pre",{class:"shiki-container"},[i("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{color:"#4D9375"}},"fn"),i("span",{style:{color:"#DBD7CA"}}," "),i("span",{style:{color:"#A1B567"}},"main"),i("span",{style:{color:"#858585"}},"()"),i("span",{style:{color:"#DBD7CA"}}," "),i("span",{style:{color:"#858585"}},"{")]),y(`
`),i("span",{class:"line"},[i("span",{style:{color:"#DBD7CA"}},"    "),i("span",{style:{color:"#CB7676"}},"let"),i("span",{style:{color:"#DBD7CA"}}," "),i("span",{style:{color:"#B8A965"}},"v"),i("span",{style:{color:"#DBD7CA"}}," "),i("span",{style:{color:"#CB7676"}},"="),i("span",{style:{color:"#DBD7CA"}}," "),i("span",{style:{color:"#A1B567"}},"vec!"),i("span",{style:{color:"#858585"}},"["),i("span",{style:{color:"#6394BF"}},"0x52"),i("span",{style:{color:"#858585"}},","),i("span",{style:{color:"#DBD7CA"}}," "),i("span",{style:{color:"#6394BF"}},"0x75"),i("span",{style:{color:"#858585"}},","),i("span",{style:{color:"#DBD7CA"}}," "),i("span",{style:{color:"#6394BF"}},"0x73"),i("span",{style:{color:"#858585"}},","),i("span",{style:{color:"#DBD7CA"}}," "),i("span",{style:{color:"#6394BF"}},"0x74"),i("span",{style:{color:"#858585"}},","),i("span",{style:{color:"#DBD7CA"}}," "),i("span",{style:{color:"#6394BF"}},"0x21"),i("span",{style:{color:"#858585"}},"];")]),y(`
`),i("span",{class:"line"}),y(`
`),i("span",{class:"line"},[i("span",{style:{color:"#758575"}},"    // Panics if not a valid UTF-8 string")]),y(`
`),i("span",{class:"line"},[i("span",{style:{color:"#DBD7CA"}},"    "),i("span",{style:{color:"#CB7676"}},"let"),i("span",{style:{color:"#DBD7CA"}}," "),i("span",{style:{color:"#B8A965"}},"s"),i("span",{style:{color:"#DBD7CA"}}," "),i("span",{style:{color:"#CB7676"}},"="),i("span",{style:{color:"#DBD7CA"}}," "),i("span",{style:{color:"#A1B567"}},"String"),i("span",{style:{color:"#CB7676"}},"::"),i("span",{style:{color:"#A1B567"}},"from_utf8"),i("span",{style:{color:"#858585"}},"("),i("span",{style:{color:"#B8A965"}},"v"),i("span",{style:{color:"#858585"}},")"),i("span",{style:{color:"#CB7676"}},"."),i("span",{style:{color:"#A1B567"}},"unwrap"),i("span",{style:{color:"#858585"}},"();")]),y(`
`),i("span",{class:"line"}),y(`
`),i("span",{class:"line"},[i("span",{style:{color:"#DBD7CA"}},"    "),i("span",{style:{color:"#A1B567"}},"println!"),i("span",{style:{color:"#858585"}},"("),i("span",{style:{color:"#C98A7D"}},'"'),i("span",{style:{color:"#858585"}},"{"),i("span",{style:{color:"#C98A7D"}},"s"),i("span",{style:{color:"#858585"}},"}"),i("span",{style:{color:"#C98A7D"}},'"'),i("span",{style:{color:"#858585"}},");")]),y(`
`),i("span",{class:"line"},[i("span",{style:{color:"#858585"}},"}")])])]),i("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{color:"#1C6B48"}},"fn"),i("span",{style:{color:"#393A34"}}," "),i("span",{style:{color:"#6C7834"}},"main"),i("span",{style:{color:"#8E8F8B"}},"()"),i("span",{style:{color:"#393A34"}}," "),i("span",{style:{color:"#8E8F8B"}},"{")]),y(`
`),i("span",{class:"line"},[i("span",{style:{color:"#393A34"}},"    "),i("span",{style:{color:"#AB5959"}},"let"),i("span",{style:{color:"#393A34"}}," "),i("span",{style:{color:"#8C862B"}},"v"),i("span",{style:{color:"#393A34"}}," "),i("span",{style:{color:"#AB5959"}},"="),i("span",{style:{color:"#393A34"}}," "),i("span",{style:{color:"#6C7834"}},"vec!"),i("span",{style:{color:"#8E8F8B"}},"["),i("span",{style:{color:"#296AA3"}},"0x52"),i("span",{style:{color:"#8E8F8B"}},","),i("span",{style:{color:"#393A34"}}," "),i("span",{style:{color:"#296AA3"}},"0x75"),i("span",{style:{color:"#8E8F8B"}},","),i("span",{style:{color:"#393A34"}}," "),i("span",{style:{color:"#296AA3"}},"0x73"),i("span",{style:{color:"#8E8F8B"}},","),i("span",{style:{color:"#393A34"}}," "),i("span",{style:{color:"#296AA3"}},"0x74"),i("span",{style:{color:"#8E8F8B"}},","),i("span",{style:{color:"#393A34"}}," "),i("span",{style:{color:"#296AA3"}},"0x21"),i("span",{style:{color:"#8E8F8B"}},"];")]),y(`
`),i("span",{class:"line"}),y(`
`),i("span",{class:"line"},[i("span",{style:{color:"#A0ADA0"}},"    // Panics if not a valid UTF-8 string")]),y(`
`),i("span",{class:"line"},[i("span",{style:{color:"#393A34"}},"    "),i("span",{style:{color:"#AB5959"}},"let"),i("span",{style:{color:"#393A34"}}," "),i("span",{style:{color:"#8C862B"}},"s"),i("span",{style:{color:"#393A34"}}," "),i("span",{style:{color:"#AB5959"}},"="),i("span",{style:{color:"#393A34"}}," "),i("span",{style:{color:"#6C7834"}},"String"),i("span",{style:{color:"#AB5959"}},"::"),i("span",{style:{color:"#6C7834"}},"from_utf8"),i("span",{style:{color:"#8E8F8B"}},"("),i("span",{style:{color:"#8C862B"}},"v"),i("span",{style:{color:"#8E8F8B"}},")"),i("span",{style:{color:"#AB5959"}},"."),i("span",{style:{color:"#6C7834"}},"unwrap"),i("span",{style:{color:"#8E8F8B"}},"();")]),y(`
`),i("span",{class:"line"}),y(`
`),i("span",{class:"line"},[i("span",{style:{color:"#393A34"}},"    "),i("span",{style:{color:"#6C7834"}},"println!"),i("span",{style:{color:"#8E8F8B"}},"("),i("span",{style:{color:"#B56959"}},'"'),i("span",{style:{color:"#8E8F8B"}},"{"),i("span",{style:{color:"#B56959"}},"s"),i("span",{style:{color:"#8E8F8B"}},"}"),i("span",{style:{color:"#B56959"}},'"'),i("span",{style:{color:"#8E8F8B"}},");")]),y(`
`),i("span",{class:"line"},[i("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),l$={__name:"37",setup(e){const t={hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"};return R(G),(n,s)=>{const o=Zo;return w(),H(Ue,ue(le(t)),{default:j(()=>[r$,i$,V(o,zt({},{ranges:[""]}),{default:j(()=>[a$]),_:1},16)]),_:1},16)}}},c$=Y(l$,[["__file","/@slidev/slides/37.md"]]),u$=i("h2",null,"UTF8Error",-1),d$=i("p",null,"Until it panics.",-1),f$=i("pre",{class:"shiki-container"},[i("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{color:"#4D9375"}},"fn"),i("span",{style:{color:"#DBD7CA"}}," "),i("span",{style:{color:"#A1B567"}},"main"),i("span",{style:{color:"#858585"}},"()"),i("span",{style:{color:"#DBD7CA"}}," "),i("span",{style:{color:"#858585"}},"{")]),y(`
`),i("span",{class:"line"},[i("span",{style:{color:"#DBD7CA"}},"    "),i("span",{style:{color:"#CB7676"}},"let"),i("span",{style:{color:"#DBD7CA"}}," "),i("span",{style:{color:"#B8A965"}},"v"),i("span",{style:{color:"#DBD7CA"}}," "),i("span",{style:{color:"#CB7676"}},"="),i("span",{style:{color:"#DBD7CA"}}," "),i("span",{style:{color:"#A1B567"}},"vec!"),i("span",{style:{color:"#858585"}},"["),i("span",{style:{color:"#6394BF"}},"0x80"),i("span",{style:{color:"#858585"}},"];")]),y(`
`),i("span",{class:"line"}),y(`
`),i("span",{class:"line"},[i("span",{style:{color:"#758575"}},"    // Panics")]),y(`
`),i("span",{class:"line"},[i("span",{style:{color:"#DBD7CA"}},"    "),i("span",{style:{color:"#CB7676"}},"let"),i("span",{style:{color:"#DBD7CA"}}," "),i("span",{style:{color:"#B8A965"}},"s"),i("span",{style:{color:"#DBD7CA"}}," "),i("span",{style:{color:"#CB7676"}},"="),i("span",{style:{color:"#DBD7CA"}}," "),i("span",{style:{color:"#A1B567"}},"String"),i("span",{style:{color:"#CB7676"}},"::"),i("span",{style:{color:"#A1B567"}},"from_utf8"),i("span",{style:{color:"#858585"}},"("),i("span",{style:{color:"#B8A965"}},"v"),i("span",{style:{color:"#858585"}},")"),i("span",{style:{color:"#CB7676"}},"."),i("span",{style:{color:"#A1B567"}},"unwrap"),i("span",{style:{color:"#858585"}},"();")]),y(`
`),i("span",{class:"line"},[i("span",{style:{color:"#758575"}},"    // thread 'main' panicked at 'called `Result::unwrap()` on an `Err` value: FromUtf8Error { bytes: [128], error: Utf8Error { valid_up_to: 0, error_len: Some(1) } }', src/main.rs:5:35")]),y(`
`),i("span",{class:"line"},[i("span",{style:{color:"#858585"}},"}")])])]),i("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{color:"#1C6B48"}},"fn"),i("span",{style:{color:"#393A34"}}," "),i("span",{style:{color:"#6C7834"}},"main"),i("span",{style:{color:"#8E8F8B"}},"()"),i("span",{style:{color:"#393A34"}}," "),i("span",{style:{color:"#8E8F8B"}},"{")]),y(`
`),i("span",{class:"line"},[i("span",{style:{color:"#393A34"}},"    "),i("span",{style:{color:"#AB5959"}},"let"),i("span",{style:{color:"#393A34"}}," "),i("span",{style:{color:"#8C862B"}},"v"),i("span",{style:{color:"#393A34"}}," "),i("span",{style:{color:"#AB5959"}},"="),i("span",{style:{color:"#393A34"}}," "),i("span",{style:{color:"#6C7834"}},"vec!"),i("span",{style:{color:"#8E8F8B"}},"["),i("span",{style:{color:"#296AA3"}},"0x80"),i("span",{style:{color:"#8E8F8B"}},"];")]),y(`
`),i("span",{class:"line"}),y(`
`),i("span",{class:"line"},[i("span",{style:{color:"#A0ADA0"}},"    // Panics")]),y(`
`),i("span",{class:"line"},[i("span",{style:{color:"#393A34"}},"    "),i("span",{style:{color:"#AB5959"}},"let"),i("span",{style:{color:"#393A34"}}," "),i("span",{style:{color:"#8C862B"}},"s"),i("span",{style:{color:"#393A34"}}," "),i("span",{style:{color:"#AB5959"}},"="),i("span",{style:{color:"#393A34"}}," "),i("span",{style:{color:"#6C7834"}},"String"),i("span",{style:{color:"#AB5959"}},"::"),i("span",{style:{color:"#6C7834"}},"from_utf8"),i("span",{style:{color:"#8E8F8B"}},"("),i("span",{style:{color:"#8C862B"}},"v"),i("span",{style:{color:"#8E8F8B"}},")"),i("span",{style:{color:"#AB5959"}},"."),i("span",{style:{color:"#6C7834"}},"unwrap"),i("span",{style:{color:"#8E8F8B"}},"();")]),y(`
`),i("span",{class:"line"},[i("span",{style:{color:"#A0ADA0"}},"    // thread 'main' panicked at 'called `Result::unwrap()` on an `Err` value: FromUtf8Error { bytes: [128], error: Utf8Error { valid_up_to: 0, error_len: Some(1) } }', src/main.rs:5:35")]),y(`
`),i("span",{class:"line"},[i("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),p$={__name:"38",setup(e){const t={hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"};return R(G),(n,s)=>{const o=Zo;return w(),H(Ue,ue(le(t)),{default:j(()=>[u$,d$,V(o,zt({},{ranges:[""]}),{default:j(()=>[f$]),_:1},16)]),_:1},16)}}},h$=Y(p$,[["__file","/@slidev/slides/38.md"]]),m$=i("h2",null,"Conventially UTF-8 vs. Gaurantee",-1),g$=i("p",null,"With the help of bstr crate",-1),y$={__name:"39",setup(e){const t={hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"};return R(G),(n,s)=>(w(),H(Ue,ue(le(t)),{default:j(()=>[m$,g$]),_:1},16))}},v$=Y(y$,[["__file","/@slidev/slides/39.md"]]),_$=i("h2",null,"Where Enforced UTF-8 can go wrong",-1),b$={__name:"40",setup(e){const t={layout:"center",hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"};return R(G),(n,s)=>(w(),H(ct,ue(le(t)),{default:j(()=>[_$]),_:1},16))}},w$=Y(b$,[["__file","/@slidev/slides/40.md"]]),x$=i("h2",null,"Reading and Writing files",-1),k$=i("ul",null,[i("li",null,'Binary "strings" (e.g. reading/writing from disk)')],-1),S$={__name:"41",setup(e){const t={hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"};return R(G),(n,s)=>(w(),H(Ue,ue(le(t)),{default:j(()=>[x$,k$]),_:1},16))}},A$=Y(S$,[["__file","/@slidev/slides/41.md"]]),E$=i("h2",null,"Standards - and why we follow them",-1),T$=i("ul",null,[i("li",null,"JSON, but it’s binary blobs as values")],-1),C$={__name:"42",setup(e){const t={hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"};return R(G),(n,s)=>(w(),H(Ue,ue(le(t)),{default:j(()=>[E$,T$]),_:1},16))}},$$=Y(C$,[["__file","/@slidev/slides/42.md"]]),F$=i("h2",null,[i("code",null,"unsafe"),y(" is unsafe")],-1),O$=i("ul",null,[i("li",null,[y("Breaking "),i("code",null,"&str"),y("s (pushing non utf8 bytes)")])],-1),P$={__name:"43",setup(e){const t={hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"};return R(G),(n,s)=>(w(),H(Ue,ue(le(t)),{default:j(()=>[F$,O$]),_:1},16))}},I$=Y(P$,[["__file","/@slidev/slides/43.md"]]),U$=i("h2",null,"Summary",-1),B$=i("p",null,[i("code",null,"str"),y(" is the primitive string - a slice of bytes with gaurantees of UTF-8")],-1),M$=i("p",null,[i("code",null,"str"),y(" is always "),i("code",null,"UTF-8")],-1),D$=i("p",null,[i("code",null,"UTF8Error"),y(" is because you should be handling bytes instead of strings")],-1),L$=i("p",null,[i("code",null,"bstr"),y(" if you want Conventially UTF-8 instead")],-1),R$={__name:"44",setup(e){const t={layout:"center",hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"};return R(G),(n,s)=>(w(),H(ct,ue(le(t)),{default:j(()=>[U$,B$,M$,D$,L$]),_:1},16))}},N$=Y(R$,[["__file","/@slidev/slides/44.md"]]),j$=i("h1",null,"Quirks",-1),W$={__name:"45",setup(e){const t={layout:"cover",hide:!1,srcSequence:"./pages/04-quirks.md"};return R(G),(n,s)=>(w(),H(zs,ue(le(t)),{default:j(()=>[j$]),_:1},16))}},q$=Y(W$,[["__file","/@slidev/slides/45.md"]]),H$=i("h2",null,"Capitalization (AKA Casemapping and Casefolding)",-1),V$=i("p",null,"All ASCII letters just so happen to be lossless when transitioning between upper and lower case versions. But this doesn’t apply to all languages and characters.",-1),z$=i("p",null,'Capitalization - "\\u0131" == "\\u0131".upcase.downcase. "\\u0131".upcase.downcase(:turkic)',-1),K$=i("p",null,"Fun fact: There are no RTL languages that have the concept of casing (Arabic, Hebrew, Persian, and more…)",-1),G$={__name:"46",setup(e){const t={hide:!1,srcSequence:"./pages/04-quirks.md"};return R(G),(n,s)=>(w(),H(Ue,ue(le(t)),{default:j(()=>[H$,V$,z$,K$]),_:1},16))}},Y$=Y(G$,[["__file","/@slidev/slides/46.md"]]),Q$=i("h2",null,"Composition",-1),Z$=i("p",null,"A[cute] E",-1),J$=i("ul",null,[i("li",null,[y("é = "),i("code",null,"\\u00e9")]),i("li",null,[y("é = "),i("code",null,"\\u0065\\u0301"),y(" (just an "),i("code",null,"e"),y(" but with special "),i("code",null,"\\u0301"),y(" combining)")])],-1),X$=i("pre",{class:"shiki-container"},[i("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{color:"#dbd7ca"}},"é != é")])])]),i("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{color:"#393a34"}},"é != é")])])])],-1),e4=i("p",null,[i("code",null,"\\u003d\\u0338\\u003d"),y(" vs. "),i("code",null,"\\u2260"),y(" vs. "),i("code",null,"!=")],-1),t4=i("pre",{class:"shiki-container"},[i("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{color:"#dbd7ca"}},"'≠=' != '≠' != '!='")])])]),i("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{color:"#393a34"}},"'≠=' != '≠' != '!='")])])])],-1),n4=i("p",null,"Not not equal",-1),s4=i("pre",{class:"shiki-container"},[i("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{color:"#dbd7ca"}},"=⃥")])])]),i("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{color:"#393a34"}},"=⃥")])])])],-1),o4=i("footer",null,[i("ul",null,[i("li",null,[y("Unicode combining classes: "),i("a",{href:"https://www.compart.com/en/unicode/combining",target:"_blank",rel:"noopener"},"https://www.compart.com/en/unicode/combining")]),i("li",null,[y("Unicode Normalization Forms: "),i("a",{href:"http://www.unicode.org/reports/tr15/",target:"_blank",rel:"noopener"},"http://www.unicode.org/reports/tr15/")]),i("li",null,[y("Crate unicode_normalization: "),i("a",{href:"https://docs.rs/unicode-normalization/latest/unicode_normalization/",target:"_blank",rel:"noopener"},"https://docs.rs/unicode-normalization/latest/unicode_normalization/")])])],-1),r4={__name:"47",setup(e){const t={hide:!1,srcSequence:"./pages/04-quirks.md"};return R(G),(n,s)=>(w(),H(Ue,ue(le(t)),{default:j(()=>[Q$,Z$,J$,X$,e4,t4,n4,s4,o4]),_:1},16))}},i4=Y(r4,[["__file","/@slidev/slides/47.md"]]),a4=i("h2",null,"Emoji Composition",-1),l4=i("p",{style:{"font-size":"65%","line-height":"1rem"}}," 😶‍🌫️ 😮‍💨 😵‍💫 ❤️‍🔥 ❤️‍🩹 👁️‍🗨️ 🫱🏻‍🫲🏼 🫱🏻‍🫲🏽 🫱🏻‍🫲🏾 🫱🏻‍🫲🏿 🫱🏼‍🫲🏻 🫱🏼‍🫲🏽 🫱🏼‍🫲🏾 🫱🏼‍🫲🏿 🫱🏽‍🫲🏻 🫱🏽‍🫲🏼 🫱🏽‍🫲🏾 🫱🏽‍🫲🏿 🫱🏾‍🫲🏻 🫱🏾‍🫲🏼 🫱🏾‍🫲🏽 🫱🏾‍🫲🏿 🫱🏿‍🫲🏻 🫱🏿‍🫲🏼 🫱🏿‍🫲🏽 🫱🏿‍🫲🏾 🧔‍♂️ 🧔🏻‍♂️ 🧔🏼‍♂️ 🧔🏽‍♂️ 🧔🏾‍♂️ 🧔🏿‍♂️ 🧔‍♀️ 🧔🏻‍♀️ 🧔🏼‍♀️ 🧔🏽‍♀️ 🧔🏾‍♀️ 🧔🏿‍♀️ 👨‍🦰 👨🏻‍🦰 👨🏼‍🦰 👨🏽‍🦰 👨🏾‍🦰 👨🏿‍🦰 👨‍🦱 👨🏻‍🦱 👨🏼‍🦱 👨🏽‍🦱 👨🏾‍🦱 👨🏿‍🦱 👨‍🦳 👨🏻‍🦳 👨🏼‍🦳 👨🏽‍🦳 👨🏾‍🦳 👨🏿‍🦳 👨‍🦲 👨🏻‍🦲 👨🏼‍🦲 👨🏽‍🦲 👨🏾‍🦲 👨🏿‍🦲 👩‍🦰 👩🏻‍🦰 👩🏼‍🦰 👩🏽‍🦰 👩🏾‍🦰 👩🏿‍🦰 🧑‍🦰 🧑🏻‍🦰 🧑🏼‍🦰 🧑🏽‍🦰 🧑🏾‍🦰 🧑🏿‍🦰 👩‍🦱 👩🏻‍🦱 👩🏼‍🦱 👩🏽‍🦱 👩🏾‍🦱 👩🏿‍🦱 🧑‍🦱 🧑🏻‍🦱 🧑🏼‍🦱 🧑🏽‍🦱 🧑🏾‍🦱 🧑🏿‍🦱 👩‍🦳 👩🏻‍🦳 👩🏼‍🦳 👩🏽‍🦳 👩🏾‍🦳 👩🏿‍🦳 🧑‍🦳 🧑🏻‍🦳 🧑🏼‍🦳 🧑🏽‍🦳 🧑🏾‍🦳 🧑🏿‍🦳 👩‍🦲 👩🏻‍🦲 👩🏼‍🦲 👩🏽‍🦲 👩🏾‍🦲 👩🏿‍🦲 🧑‍🦲 🧑🏻‍🦲 🧑🏼‍🦲 🧑🏽‍🦲 🧑🏾‍🦲 🧑🏿‍🦲 👱‍♀️ 👱🏻‍♀️ 👱🏼‍♀️ 👱🏽‍♀️ 👱🏾‍♀️ 👱🏿‍♀️ 👱‍♂️ 👱🏻‍♂️ 👱🏼‍♂️ 👱🏽‍♂️ 👱🏾‍♂️ 👱🏿‍♂️ 🙍‍♂️ 🙍🏻‍♂️ 🙍🏼‍♂️ 🙍🏽‍♂️ 🙍🏾‍♂️ 🙍🏿‍♂️ 🙍‍♀️ 🙍🏻‍♀️ 🙍🏼‍♀️ 🙍🏽‍♀️ 🙍🏾‍♀️ 🙍🏿‍♀️ 🙎‍♂️ 🙎🏻‍♂️ 🙎🏼‍♂️ 🙎🏽‍♂️ 🙎🏾‍♂️ 🙎🏿‍♂️ 🙎‍♀️ 🙎🏻‍♀️ 🙎🏼‍♀️ 🙎🏽‍♀️ 🙎🏾‍♀️ 🙎🏿‍♀️ 🙅‍♂️ 🙅🏻‍♂️ 🙅🏼‍♂️ 🙅🏽‍♂️ 🙅🏾‍♂️ 🙅🏿‍♂️ 🙅‍♀️ 🙅🏻‍♀️ 🙅🏼‍♀️ 🙅🏽‍♀️ 🙅🏾‍♀️ 🙅🏿‍♀️ 🙆‍♂️ 🙆🏻‍♂️ 🙆🏼‍♂️ 🙆🏽‍♂️ 🙆🏾‍♂️ 🙆🏿‍♂️ 🙆‍♀️ 🙆🏻‍♀️ 🙆🏼‍♀️ 🙆🏽‍♀️ 🙆🏾‍♀️ 🙆🏿‍♀️ 💁‍♂️ 💁🏻‍♂️ 💁🏼‍♂️ 💁🏽‍♂️ 💁🏾‍♂️ 💁🏿‍♂️ 💁‍♀️ 💁🏻‍♀️ 💁🏼‍♀️ 💁🏽‍♀️ 💁🏾‍♀️ 💁🏿‍♀️ 🙋‍♂️ 🙋🏻‍♂️ 🙋🏼‍♂️ 🙋🏽‍♂️ 🙋🏾‍♂️ 🙋🏿‍♂️ 🙋‍♀️ 🙋🏻‍♀️ 🙋🏼‍♀️ 🙋🏽‍♀️ 🙋🏾‍♀️ 🙋🏿‍♀️ 🧏‍♂️ 🧏🏻‍♂️ 🧏🏼‍♂️ 🧏🏽‍♂️ 🧏🏾‍♂️ 🧏🏿‍♂️ 🧏‍♀️ 🧏🏻‍♀️ 🧏🏼‍♀️ 🧏🏽‍♀️ 🧏🏾‍♀️ 🧏🏿‍♀️ 🙇‍♂️ 🙇🏻‍♂️ 🙇🏼‍♂️ 🙇🏽‍♂️ 🙇🏾‍♂️ 🙇🏿‍♂️ 🙇‍♀️ 🙇🏻‍♀️ 🙇🏼‍♀️ 🙇🏽‍♀️ 🙇🏾‍♀️ 🙇🏿‍♀️ 🤦‍♂️ 🤦🏻‍♂️ 🤦🏼‍♂️ 🤦🏽‍♂️ 🤦🏾‍♂️ 🤦🏿‍♂️ 🤦‍♀️ 🤦🏻‍♀️ 🤦🏼‍♀️ 🤦🏽‍♀️ 🤦🏾‍♀️ 🤦🏿‍♀️ 🤷‍♂️ 🤷🏻‍♂️ 🤷🏼‍♂️ 🤷🏽‍♂️ 🤷🏾‍♂️ 🤷🏿‍♂️ 🤷‍♀️ 🤷🏻‍♀️ 🤷🏼‍♀️ 🤷🏽‍♀️ 🤷🏾‍♀️ 🤷🏿‍♀️ 🧑‍⚕️ 🧑🏻‍⚕️ 🧑🏼‍⚕️ 🧑🏽‍⚕️ 🧑🏾‍⚕️ 🧑🏿‍⚕️ 👨‍⚕️ 👨🏻‍⚕️ 👨🏼‍⚕️ 👨🏽‍⚕️ 👨🏾‍⚕️ 👨🏿‍⚕️ 👩‍⚕️ 👩🏻‍⚕️ 👩🏼‍⚕️ 👩🏽‍⚕️ 👩🏾‍⚕️ 👩🏿‍⚕️ 🧑‍🎓 🧑🏻‍🎓 🧑🏼‍🎓 🧑🏽‍🎓 🧑🏾‍🎓 🧑🏿‍🎓 👨‍🎓 👨🏻‍🎓 👨🏼‍🎓 👨🏽‍🎓 👨🏾‍🎓 👨🏿‍🎓 👩‍🎓 👩🏻‍🎓 👩🏼‍🎓 👩🏽‍🎓 👩🏾‍🎓 👩🏿‍🎓 🧑‍🏫 🧑🏻‍🏫 🧑🏼‍🏫 🧑🏽‍🏫 🧑🏾‍🏫 🧑🏿‍🏫 👨‍🏫 👨🏻‍🏫 👨🏼‍🏫 👨🏽‍🏫 👨🏾‍🏫 👨🏿‍🏫 👩‍🏫 👩🏻‍🏫 👩🏼‍🏫 👩🏽‍🏫 👩🏾‍🏫 👩🏿‍🏫 🧑‍⚖️ 🧑🏻‍⚖️ 🧑🏼‍⚖️ 🧑🏽‍⚖️ 🧑🏾‍⚖️ 🧑🏿‍⚖️ 👨‍⚖️ 👨🏻‍⚖️ 👨🏼‍⚖️ 👨🏽‍⚖️ 👨🏾‍⚖️ 👨🏿‍⚖️ 👩‍⚖️ 👩🏻‍⚖️ 👩🏼‍⚖️ 👩🏽‍⚖️ 👩🏾‍⚖️ 👩🏿‍⚖️ 🧑‍🌾 🧑🏻‍🌾 🧑🏼‍🌾 🧑🏽‍🌾 🧑🏾‍🌾 🧑🏿‍🌾 👨‍🌾 👨🏻‍🌾 👨🏼‍🌾 👨🏽‍🌾 👨🏾‍🌾 👨🏿‍🌾 👩‍🌾 👩🏻‍🌾 👩🏼‍🌾 👩🏽‍🌾 👩🏾‍🌾 👩🏿‍🌾 🧑‍🍳 🧑🏻‍🍳 🧑🏼‍🍳 🧑🏽‍🍳 🧑🏾‍🍳 🧑🏿‍🍳 👨‍🍳 👨🏻‍🍳 👨🏼‍🍳 👨🏽‍🍳 👨🏾‍🍳 👨🏿‍🍳 👩‍🍳 👩🏻‍🍳 👩🏼‍🍳 👩🏽‍🍳 👩🏾‍🍳 👩🏿‍🍳 🧑‍🔧 🧑🏻‍🔧 🧑🏼‍🔧 🧑🏽‍🔧 🧑🏾‍🔧 🧑🏿‍🔧 👨‍🔧 👨🏻‍🔧 👨🏼‍🔧 👨🏽‍🔧 👨🏾‍🔧 👨🏿‍🔧 👩‍🔧 👩🏻‍🔧 👩🏼‍🔧 👩🏽‍🔧 👩🏾‍🔧 👩🏿‍🔧 🧑‍🏭 🧑🏻‍🏭 🧑🏼‍🏭 🧑🏽‍🏭 🧑🏾‍🏭 🧑🏿‍🏭 👨‍🏭 👨🏻‍🏭 👨🏼‍🏭 👨🏽‍🏭 👨🏾‍🏭 👨🏿‍🏭 👩‍🏭 👩🏻‍🏭 👩🏼‍🏭 👩🏽‍🏭 👩🏾‍🏭 👩🏿‍🏭 🧑‍💼 🧑🏻‍💼 🧑🏼‍💼 🧑🏽‍💼 🧑🏾‍💼 🧑🏿‍💼 👨‍💼 👨🏻‍💼 👨🏼‍💼 👨🏽‍💼 👨🏾‍💼 👨🏿‍💼 👩‍💼 👩🏻‍💼 👩🏼‍💼 👩🏽‍💼 👩🏾‍💼 👩🏿‍💼 🧑‍🔬 🧑🏻‍🔬 🧑🏼‍🔬 🧑🏽‍🔬 🧑🏾‍🔬 🧑🏿‍🔬 👨‍🔬 👨🏻‍🔬 👨🏼‍🔬 👨🏽‍🔬 👨🏾‍🔬 👨🏿‍🔬 👩‍🔬 👩🏻‍🔬 👩🏼‍🔬 👩🏽‍🔬 👩🏾‍🔬 👩🏿‍🔬 🧑‍💻 🧑🏻‍💻 🧑🏼‍💻 🧑🏽‍💻 🧑🏾‍💻 🧑🏿‍💻 👨‍💻 👨🏻‍💻 👨🏼‍💻 👨🏽‍💻 👨🏾‍💻 👨🏿‍💻 👩‍💻 👩🏻‍💻 👩🏼‍💻 👩🏽‍💻 👩🏾‍💻 👩🏿‍💻 🧑‍🎤 🧑🏻‍🎤 🧑🏼‍🎤 🧑🏽‍🎤 🧑🏾‍🎤 🧑🏿‍🎤 👨‍🎤 👨🏻‍🎤 👨🏼‍🎤 👨🏽‍🎤 👨🏾‍🎤 👨🏿‍🎤 👩‍🎤 👩🏻‍🎤 👩🏼‍🎤 👩🏽‍🎤 👩🏾‍🎤 👩🏿‍🎤 🧑‍🎨 🧑🏻‍🎨 🧑🏼‍🎨 🧑🏽‍🎨 🧑🏾‍🎨 🧑🏿‍🎨 👨‍🎨 👨🏻‍🎨 👨🏼‍🎨 👨🏽‍🎨 👨🏾‍🎨 👨🏿‍🎨 👩‍🎨 👩🏻‍🎨 👩🏼‍🎨 👩🏽‍🎨 👩🏾‍🎨 👩🏿‍🎨 🧑‍✈️ 🧑🏻‍✈️ 🧑🏼‍✈️ 🧑🏽‍✈️ 🧑🏾‍✈️ 🧑🏿‍✈️ 👨‍✈️ 👨🏻‍✈️ 👨🏼‍✈️ 👨🏽‍✈️ 👨🏾‍✈️ 👨🏿‍✈️ 👩‍✈️ 👩🏻‍✈️ 👩🏼‍✈️ 👩🏽‍✈️ 👩🏾‍✈️ 👩🏿‍✈️ 🧑‍🚀 🧑🏻‍🚀 🧑🏼‍🚀 🧑🏽‍🚀 🧑🏾‍🚀 🧑🏿‍🚀 👨‍🚀 👨🏻‍🚀 👨🏼‍🚀 👨🏽‍🚀 👨🏾‍🚀 👨🏿‍🚀 👩‍🚀 👩🏻‍🚀 👩🏼‍🚀 👩🏽‍🚀 👩🏾‍🚀 👩🏿‍🚀 🧑‍🚒 🧑🏻‍🚒 🧑🏼‍🚒 🧑🏽‍🚒 🧑🏾‍🚒 🧑🏿‍🚒 👨‍🚒 👨🏻‍🚒 👨🏼‍🚒 👨🏽‍🚒 👨🏾‍🚒 👨🏿‍🚒 👩‍🚒 👩🏻‍🚒 👩🏼‍🚒 👩🏽‍🚒 👩🏾‍🚒 👩🏿‍🚒 👮‍♂️ 👮🏻‍♂️ 👮🏼‍♂️ 👮🏽‍♂️ 👮🏾‍♂️ 👮🏿‍♂️ 👮‍♀️ 👮🏻‍♀️ 👮🏼‍♀️ 👮🏽‍♀️ 👮🏾‍♀️ 👮🏿‍♀️ 🕵️‍♂️ 🕵🏻‍♂️ 🕵🏼‍♂️ 🕵🏽‍♂️ 🕵🏾‍♂️ 🕵🏿‍♂️ 🕵️‍♀️ 🕵🏻‍♀️ 🕵🏼‍♀️ 🕵🏽‍♀️ 🕵🏾‍♀️ 🕵🏿‍♀️ 💂‍♂️ 💂🏻‍♂️ 💂🏼‍♂️ 💂🏽‍♂️ 💂🏾‍♂️ 💂🏿‍♂️ 💂‍♀️ 💂🏻‍♀️ 💂🏼‍♀️ 💂🏽‍♀️ 💂🏾‍♀️ 💂🏿‍♀️ 👷‍♂️ 👷🏻‍♂️ 👷🏼‍♂️ 👷🏽‍♂️ 👷🏾‍♂️ 👷🏿‍♂️ 👷‍♀️ 👷🏻‍♀️ 👷🏼‍♀️ 👷🏽‍♀️ 👷🏾‍♀️ 👷🏿‍♀️ 👳‍♂️ 👳🏻‍♂️ 👳🏼‍♂️ 👳🏽‍♂️ 👳🏾‍♂️ 👳🏿‍♂️ 👳‍♀️ 👳🏻‍♀️ 👳🏼‍♀️ 👳🏽‍♀️ 👳🏾‍♀️ 👳🏿‍♀️ 🤵‍♂️ 🤵🏻‍♂️ 🤵🏼‍♂️ 🤵🏽‍♂️ 🤵🏾‍♂️ 🤵🏿‍♂️ 🤵‍♀️ 🤵🏻‍♀️ 🤵🏼‍♀️ 🤵🏽‍♀️ 🤵🏾‍♀️ 🤵🏿‍♀️ 👰‍♂️ 👰🏻‍♂️ 👰🏼‍♂️ 👰🏽‍♂️ 👰🏾‍♂️ 👰🏿‍♂️ 👰‍♀️ 👰🏻‍♀️ 👰🏼‍♀️ 👰🏽‍♀️ 👰🏾‍♀️ 👰🏿‍♀️ 👩‍🍼 👩🏻‍🍼 👩🏼‍🍼 👩🏽‍🍼 👩🏾‍🍼 👩🏿‍🍼 👨‍🍼 👨🏻‍🍼 👨🏼‍🍼 👨🏽‍🍼 👨🏾‍🍼 👨🏿‍🍼 🧑‍🍼 🧑🏻‍🍼 🧑🏼‍🍼 🧑🏽‍🍼 🧑🏾‍🍼 🧑🏿‍🍼 🧑‍🎄 🧑🏻‍🎄 🧑🏼‍🎄 🧑🏽‍🎄 🧑🏾‍🎄 🧑🏿‍🎄 🦸‍♂️ 🦸🏻‍♂️ 🦸🏼‍♂️ 🦸🏽‍♂️ 🦸🏾‍♂️ 🦸🏿‍♂️ 🦸‍♀️ 🦸🏻‍♀️ 🦸🏼‍♀️ 🦸🏽‍♀️ 🦸🏾‍♀️ 🦸🏿‍♀️ 🦹‍♂️ 🦹🏻‍♂️ 🦹🏼‍♂️ 🦹🏽‍♂️ 🦹🏾‍♂️ 🦹🏿‍♂️ 🦹‍♀️ 🦹🏻‍♀️ 🦹🏼‍♀️ 🦹🏽‍♀️ 🦹🏾‍♀️ 🦹🏿‍♀️ 🧙‍♂️ 🧙🏻‍♂️ 🧙🏼‍♂️ 🧙🏽‍♂️ 🧙🏾‍♂️ 🧙🏿‍♂️ 🧙‍♀️ 🧙🏻‍♀️ 🧙🏼‍♀️ 🧙🏽‍♀️ 🧙🏾‍♀️ 🧙🏿‍♀️ 🧚‍♂️ 🧚🏻‍♂️ 🧚🏼‍♂️ 🧚🏽‍♂️ 🧚🏾‍♂️ 🧚🏿‍♂️ 🧚‍♀️ 🧚🏻‍♀️ 🧚🏼‍♀️ 🧚🏽‍♀️ 🧚🏾‍♀️ 🧚🏿‍♀️ 🧛‍♂️ 🧛🏻‍♂️ 🧛🏼‍♂️ 🧛🏽‍♂️ 🧛🏾‍♂️ 🧛🏿‍♂️ 🧛‍♀️ 🧛🏻‍♀️ 🧛🏼‍♀️ 🧛🏽‍♀️ 🧛🏾‍♀️ 🧛🏿‍♀️ 🧜‍♂️ 🧜🏻‍♂️ 🧜🏼‍♂️ 🧜🏽‍♂️ 🧜🏾‍♂️ 🧜🏿‍♂️ 🧜‍♀️ 🧜🏻‍♀️ 🧜🏼‍♀️ 🧜🏽‍♀️ 🧜🏾‍♀️ 🧜🏿‍♀️ 🧝‍♂️ 🧝🏻‍♂️ 🧝🏼‍♂️ 🧝🏽‍♂️ 🧝🏾‍♂️ 🧝🏿‍♂️ 🧝‍♀️ 🧝🏻‍♀️ 🧝🏼‍♀️ 🧝🏽‍♀️ 🧝🏾‍♀️ 🧝🏿‍♀️ 🧞‍♂️ 🧞‍♀️ 🧟‍♂️ 🧟‍♀️ 💆‍♂️ 💆🏻‍♂️ 💆🏼‍♂️ 💆🏽‍♂️ 💆🏾‍♂️ 💆🏿‍♂️ 💆‍♀️ 💆🏻‍♀️ 💆🏼‍♀️ 💆🏽‍♀️ 💆🏾‍♀️ 💆🏿‍♀️ 💇‍♂️ 💇🏻‍♂️ 💇🏼‍♂️ 💇🏽‍♂️ 💇🏾‍♂️ 💇🏿‍♂️ 💇‍♀️ 💇🏻‍♀️ 💇🏼‍♀️ 💇🏽‍♀️ 💇🏾‍♀️ 💇🏿‍♀️ 🚶‍♂️ 🚶🏻‍♂️ 🚶🏼‍♂️ 🚶🏽‍♂️ 🚶🏾‍♂️ 🚶🏿‍♂️ 🚶‍♀️ 🚶🏻‍♀️ 🚶🏼‍♀️ 🚶🏽‍♀️ 🚶🏾‍♀️ 🚶🏿‍♀️ 🧍‍♂️ 🧍🏻‍♂️ 🧍🏼‍♂️ 🧍🏽‍♂️ 🧍🏾‍♂️ 🧍🏿‍♂️ 🧍‍♀️ 🧍🏻‍♀️ 🧍🏼‍♀️ 🧍🏽‍♀️ 🧍🏾‍♀️ 🧍🏿‍♀️ 🧎‍♂️ 🧎🏻‍♂️ 🧎🏼‍♂️ 🧎🏽‍♂️ 🧎🏾‍♂️ 🧎🏿‍♂️ 🧎‍♀️ 🧎🏻‍♀️ 🧎🏼‍♀️ 🧎🏽‍♀️ 🧎🏾‍♀️ 🧎🏿‍♀️ 🧑‍🦯 🧑🏻‍🦯 🧑🏼‍🦯 🧑🏽‍🦯 🧑🏾‍🦯 🧑🏿‍🦯 👨‍🦯 👨🏻‍🦯 👨🏼‍🦯 👨🏽‍🦯 👨🏾‍🦯 👨🏿‍🦯 👩‍🦯 👩🏻‍🦯 👩🏼‍🦯 👩🏽‍🦯 👩🏾‍🦯 👩🏿‍🦯 🧑‍🦼 🧑🏻‍🦼 🧑🏼‍🦼 🧑🏽‍🦼 🧑🏾‍🦼 🧑🏿‍🦼 👨‍🦼 👨🏻‍🦼 👨🏼‍🦼 👨🏽‍🦼 👨🏾‍🦼 👨🏿‍🦼 👩‍🦼 👩🏻‍🦼 👩🏼‍🦼 👩🏽‍🦼 👩🏾‍🦼 👩🏿‍🦼 🧑‍🦽 🧑🏻‍🦽 🧑🏼‍🦽 🧑🏽‍🦽 🧑🏾‍🦽 🧑🏿‍🦽 👨‍🦽 👨🏻‍🦽 👨🏼‍🦽 👨🏽‍🦽 👨🏾‍🦽 👨🏿‍🦽 👩‍🦽 👩🏻‍🦽 👩🏼‍🦽 👩🏽‍🦽 👩🏾‍🦽 👩🏿‍🦽 🏃‍♂️ 🏃🏻‍♂️ 🏃🏼‍♂️ 🏃🏽‍♂️ 🏃🏾‍♂️ 🏃🏿‍♂️ 🏃‍♀️ 🏃🏻‍♀️ 🏃🏼‍♀️ 🏃🏽‍♀️ 🏃🏾‍♀️ 🏃🏿‍♀️ 👯‍♂️ 👯‍♀️ 🧖‍♂️ 🧖🏻‍♂️ 🧖🏼‍♂️ 🧖🏽‍♂️ 🧖🏾‍♂️ 🧖🏿‍♂️ 🧖‍♀️ 🧖🏻‍♀️ 🧖🏼‍♀️ 🧖🏽‍♀️ 🧖🏾‍♀️ 🧖🏿‍♀️ 🧗‍♂️ 🧗🏻‍♂️ 🧗🏼‍♂️ 🧗🏽‍♂️ 🧗🏾‍♂️ 🧗🏿‍♂️ 🧗‍♀️ 🧗🏻‍♀️ 🧗🏼‍♀️ 🧗🏽‍♀️ 🧗🏾‍♀️ 🧗🏿‍♀️ 🏌️‍♂️ 🏌🏻‍♂️ 🏌🏼‍♂️ 🏌🏽‍♂️ 🏌🏾‍♂️ 🏌🏿‍♂️ 🏌️‍♀️ 🏌🏻‍♀️ 🏌🏼‍♀️ 🏌🏽‍♀️ 🏌🏾‍♀️ 🏌🏿‍♀️ 🏄‍♂️ 🏄🏻‍♂️ 🏄🏼‍♂️ 🏄🏽‍♂️ 🏄🏾‍♂️ 🏄🏿‍♂️ 🏄‍♀️ 🏄🏻‍♀️ 🏄🏼‍♀️ 🏄🏽‍♀️ 🏄🏾‍♀️ 🏄🏿‍♀️ 🚣‍♂️ 🚣🏻‍♂️ 🚣🏼‍♂️ 🚣🏽‍♂️ 🚣🏾‍♂️ 🚣🏿‍♂️ 🚣‍♀️ 🚣🏻‍♀️ 🚣🏼‍♀️ 🚣🏽‍♀️ 🚣🏾‍♀️ 🚣🏿‍♀️ 🏊‍♂️ 🏊🏻‍♂️ 🏊🏼‍♂️ 🏊🏽‍♂️ 🏊🏾‍♂️ 🏊🏿‍♂️ 🏊‍♀️ 🏊🏻‍♀️ 🏊🏼‍♀️ 🏊🏽‍♀️ 🏊🏾‍♀️ 🏊🏿‍♀️ ⛹️‍♂️ ⛹🏻‍♂️ ⛹🏼‍♂️ ⛹🏽‍♂️ ⛹🏾‍♂️ ⛹🏿‍♂️ ⛹️‍♀️ ⛹🏻‍♀️ ⛹🏼‍♀️ ⛹🏽‍♀️ ⛹🏾‍♀️ ⛹🏿‍♀️ 🏋️‍♂️ 🏋🏻‍♂️ 🏋🏼‍♂️ 🏋🏽‍♂️ 🏋🏾‍♂️ 🏋🏿‍♂️ 🏋️‍♀️ 🏋🏻‍♀️ 🏋🏼‍♀️ 🏋🏽‍♀️ 🏋🏾‍♀️ 🏋🏿‍♀️ 🚴‍♂️ 🚴🏻‍♂️ 🚴🏼‍♂️ 🚴🏽‍♂️ 🚴🏾‍♂️ 🚴🏿‍♂️ 🚴‍♀️ 🚴🏻‍♀️ 🚴🏼‍♀️ 🚴🏽‍♀️ 🚴🏾‍♀️ 🚴🏿‍♀️ 🚵‍♂️ 🚵🏻‍♂️ 🚵🏼‍♂️ 🚵🏽‍♂️ 🚵🏾‍♂️ 🚵🏿‍♂️ 🚵‍♀️ 🚵🏻‍♀️ 🚵🏼‍♀️ 🚵🏽‍♀️ 🚵🏾‍♀️ 🚵🏿‍♀️ 🤸‍♂️ 🤸🏻‍♂️ 🤸🏼‍♂️ 🤸🏽‍♂️ 🤸🏾‍♂️ 🤸🏿‍♂️ 🤸‍♀️ 🤸🏻‍♀️ 🤸🏼‍♀️ 🤸🏽‍♀️ 🤸🏾‍♀️ 🤸🏿‍♀️ 🤼‍♂️ 🤼‍♀️ 🤽‍♂️ 🤽🏻‍♂️ 🤽🏼‍♂️ 🤽🏽‍♂️ 🤽🏾‍♂️ 🤽🏿‍♂️ 🤽‍♀️ 🤽🏻‍♀️ 🤽🏼‍♀️ 🤽🏽‍♀️ 🤽🏾‍♀️ 🤽🏿‍♀️ 🤾‍♂️ 🤾🏻‍♂️ 🤾🏼‍♂️ 🤾🏽‍♂️ 🤾🏾‍♂️ 🤾🏿‍♂️ 🤾‍♀️ 🤾🏻‍♀️ 🤾🏼‍♀️ 🤾🏽‍♀️ 🤾🏾‍♀️ 🤾🏿‍♀️ 🤹‍♂️ 🤹🏻‍♂️ 🤹🏼‍♂️ 🤹🏽‍♂️ 🤹🏾‍♂️ 🤹🏿‍♂️ 🤹‍♀️ 🤹🏻‍♀️ 🤹🏼‍♀️ 🤹🏽‍♀️ 🤹🏾‍♀️ 🤹🏿‍♀️ 🧘‍♂️ 🧘🏻‍♂️ 🧘🏼‍♂️ 🧘🏽‍♂️ 🧘🏾‍♂️ 🧘🏿‍♂️ 🧘‍♀️ 🧘🏻‍♀️ 🧘🏼‍♀️ 🧘🏽‍♀️ 🧘🏾‍♀️ 🧘🏿‍♀️ 🧑‍🤝‍🧑 🧑🏻‍🤝‍🧑🏻 🧑🏻‍🤝‍🧑🏼 🧑🏻‍🤝‍🧑🏽 🧑🏻‍🤝‍🧑🏾 🧑🏻‍🤝‍🧑🏿 🧑🏼‍🤝‍🧑🏻 🧑🏼‍🤝‍🧑🏼 🧑🏼‍🤝‍🧑🏽 🧑🏼‍🤝‍🧑🏾 🧑🏼‍🤝‍🧑🏿 🧑🏽‍🤝‍🧑🏻 🧑🏽‍🤝‍🧑🏼 🧑🏽‍🤝‍🧑🏽 🧑🏽‍🤝‍🧑🏾 🧑🏽‍🤝‍🧑🏿 🧑🏾‍🤝‍🧑🏻 🧑🏾‍🤝‍🧑🏼 🧑🏾‍🤝‍🧑🏽 🧑🏾‍🤝‍🧑🏾 🧑🏾‍🤝‍🧑🏿 🧑🏿‍🤝‍🧑🏻 🧑🏿‍🤝‍🧑🏼 🧑🏿‍🤝‍🧑🏽 🧑🏿‍🤝‍🧑🏾 🧑🏿‍🤝‍🧑🏿 👩🏻‍🤝‍👩🏼 👩🏻‍🤝‍👩🏽 👩🏻‍🤝‍👩🏾 👩🏻‍🤝‍👩🏿 👩🏼‍🤝‍👩🏻 👩🏼‍🤝‍👩🏽 👩🏼‍🤝‍👩🏾 👩🏼‍🤝‍👩🏿 👩🏽‍🤝‍👩🏻 👩🏽‍🤝‍👩🏼 👩🏽‍🤝‍👩🏾 👩🏽‍🤝‍👩🏿 👩🏾‍🤝‍👩🏻 👩🏾‍🤝‍👩🏼 👩🏾‍🤝‍👩🏽 👩🏾‍🤝‍👩🏿 👩🏿‍🤝‍👩🏻 👩🏿‍🤝‍👩🏼 👩🏿‍🤝‍👩🏽 👩🏿‍🤝‍👩🏾 👩🏻‍🤝‍👨🏼 👩🏻‍🤝‍👨🏽 👩🏻‍🤝‍👨🏾 👩🏻‍🤝‍👨🏿 👩🏼‍🤝‍👨🏻 👩🏼‍🤝‍👨🏽 👩🏼‍🤝‍👨🏾 👩🏼‍🤝‍👨🏿 👩🏽‍🤝‍👨🏻 👩🏽‍🤝‍👨🏼 👩🏽‍🤝‍👨🏾 👩🏽‍🤝‍👨🏿 👩🏾‍🤝‍👨🏻 👩🏾‍🤝‍👨🏼 👩🏾‍🤝‍👨🏽 👩🏾‍🤝‍👨🏿 👩🏿‍🤝‍👨🏻 👩🏿‍🤝‍👨🏼 👩🏿‍🤝‍👨🏽 👩🏿‍🤝‍👨🏾 👨🏻‍🤝‍👨🏼 👨🏻‍🤝‍👨🏽 👨🏻‍🤝‍👨🏾 👨🏻‍🤝‍👨🏿 👨🏼‍🤝‍👨🏻 👨🏼‍🤝‍👨🏽 👨🏼‍🤝‍👨🏾 👨🏼‍🤝‍👨🏿 👨🏽‍🤝‍👨🏻 👨🏽‍🤝‍👨🏼 👨🏽‍🤝‍👨🏾 👨🏽‍🤝‍👨🏿 👨🏾‍🤝‍👨🏻 👨🏾‍🤝‍👨🏼 👨🏾‍🤝‍👨🏽 👨🏾‍🤝‍👨🏿 👨🏿‍🤝‍👨🏻 👨🏿‍🤝‍👨🏼 👨🏿‍🤝‍👨🏽 👨🏿‍🤝‍👨🏾 💏 🧑🏻‍❤️‍💋‍🧑🏼 🧑🏻‍❤️‍💋‍🧑🏽 🧑🏻‍❤️‍💋‍🧑🏾 🧑🏻‍❤️‍💋‍🧑🏿 🧑🏼‍❤️‍💋‍🧑🏻 🧑🏼‍❤️‍💋‍🧑🏽 🧑🏼‍❤️‍💋‍🧑🏾 🧑🏼‍❤️‍💋‍🧑🏿 🧑🏽‍❤️‍💋‍🧑🏻 🧑🏽‍❤️‍💋‍🧑🏼 🧑🏽‍❤️‍💋‍🧑🏾 🧑🏽‍❤️‍💋‍🧑🏿 🧑🏾‍❤️‍💋‍🧑🏻 🧑🏾‍❤️‍💋‍🧑🏼 🧑🏾‍❤️‍💋‍🧑🏽 🧑🏾‍❤️‍💋‍🧑🏿 🧑🏿‍❤️‍💋‍🧑🏻 🧑🏿‍❤️‍💋‍🧑🏼 🧑🏿‍❤️‍💋‍🧑🏽 🧑🏿‍❤️‍💋‍🧑🏾 👩‍❤️‍💋‍👨 👩🏻‍❤️‍💋‍👨🏻 👩🏻‍❤️‍💋‍👨🏼 👩🏻‍❤️‍💋‍👨🏽 👩🏻‍❤️‍💋‍👨🏾 👩🏻‍❤️‍💋‍👨🏿 👩🏼‍❤️‍💋‍👨🏻 👩🏼‍❤️‍💋‍👨🏼 👩🏼‍❤️‍💋‍👨🏽 👩🏼‍❤️‍💋‍👨🏾 👩🏼‍❤️‍💋‍👨🏿 👩🏽‍❤️‍💋‍👨🏻 👩🏽‍❤️‍💋‍👨🏼 👩🏽‍❤️‍💋‍👨🏽 👩🏽‍❤️‍💋‍👨🏾 👩🏽‍❤️‍💋‍👨🏿 👩🏾‍❤️‍💋‍👨🏻 👩🏾‍❤️‍💋‍👨🏼 👩🏾‍❤️‍💋‍👨🏽 👩🏾‍❤️‍💋‍👨🏾 👩🏾‍❤️‍💋‍👨🏿 👩🏿‍❤️‍💋‍👨🏻 👩🏿‍❤️‍💋‍👨🏼 👩🏿‍❤️‍💋‍👨🏽 👩🏿‍❤️‍💋‍👨🏾 👩🏿‍❤️‍💋‍👨🏿 👨‍❤️‍💋‍👨 👨🏻‍❤️‍💋‍👨🏻 👨🏻‍❤️‍💋‍👨🏼 👨🏻‍❤️‍💋‍👨🏽 👨🏻‍❤️‍💋‍👨🏾 👨🏻‍❤️‍💋‍👨🏿 👨🏼‍❤️‍💋‍👨🏻 👨🏼‍❤️‍💋‍👨🏼 👨🏼‍❤️‍💋‍👨🏽 👨🏼‍❤️‍💋‍👨🏾 👨🏼‍❤️‍💋‍👨🏿 👨🏽‍❤️‍💋‍👨🏻 👨🏽‍❤️‍💋‍👨🏼 👨🏽‍❤️‍💋‍👨🏽 👨🏽‍❤️‍💋‍👨🏾 👨🏽‍❤️‍💋‍👨🏿 👨🏾‍❤️‍💋‍👨🏻 👨🏾‍❤️‍💋‍👨🏼 👨🏾‍❤️‍💋‍👨🏽 👨🏾‍❤️‍💋‍👨🏾 👨🏾‍❤️‍💋‍👨🏿 👨🏿‍❤️‍💋‍👨🏻 👨🏿‍❤️‍💋‍👨🏼 👨🏿‍❤️‍💋‍👨🏽 👨🏿‍❤️‍💋‍👨🏾 👨🏿‍❤️‍💋‍👨🏿 👩‍❤️‍💋‍👩 👩🏻‍❤️‍💋‍👩🏻 👩🏻‍❤️‍💋‍👩🏼 👩🏻‍❤️‍💋‍👩🏽 👩🏻‍❤️‍💋‍👩🏾 👩🏻‍❤️‍💋‍👩🏿 👩🏼‍❤️‍💋‍👩🏻 👩🏼‍❤️‍💋‍👩🏼 👩🏼‍❤️‍💋‍👩🏽 👩🏼‍❤️‍💋‍👩🏾 👩🏼‍❤️‍💋‍👩🏿 👩🏽‍❤️‍💋‍👩🏻 👩🏽‍❤️‍💋‍👩🏼 👩🏽‍❤️‍💋‍👩🏽 👩🏽‍❤️‍💋‍👩🏾 👩🏽‍❤️‍💋‍👩🏿 👩🏾‍❤️‍💋‍👩🏻 👩🏾‍❤️‍💋‍👩🏼 👩🏾‍❤️‍💋‍👩🏽 👩🏾‍❤️‍💋‍👩🏾 👩🏾‍❤️‍💋‍👩🏿 👩🏿‍❤️‍💋‍👩🏻 👩🏿‍❤️‍💋‍👩🏼 👩🏿‍❤️‍💋‍👩🏽 👩🏿‍❤️‍💋‍👩🏾 👩🏿‍❤️‍💋‍👩🏿 💑 🧑🏻‍❤️‍🧑🏼 🧑🏻‍❤️‍🧑🏽 🧑🏻‍❤️‍🧑🏾 🧑🏻‍❤️‍🧑🏿 🧑🏼‍❤️‍🧑🏻 🧑🏼‍❤️‍🧑🏽 🧑🏼‍❤️‍🧑🏾 🧑🏼‍❤️‍🧑🏿 🧑🏽‍❤️‍🧑🏻 🧑🏽‍❤️‍🧑🏼 🧑🏽‍❤️‍🧑🏾 🧑🏽‍❤️‍🧑🏿 🧑🏾‍❤️‍🧑🏻 🧑🏾‍❤️‍🧑🏼 🧑🏾‍❤️‍🧑🏽 🧑🏾‍❤️‍🧑🏿 🧑🏿‍❤️‍🧑🏻 🧑🏿‍❤️‍🧑🏼 🧑🏿‍❤️‍🧑🏽 🧑🏿‍❤️‍🧑🏾 👩‍❤️‍👨 👩🏻‍❤️‍👨🏻 👩🏻‍❤️‍👨🏼 👩🏻‍❤️‍👨🏽 👩🏻‍❤️‍👨🏾 👩🏻‍❤️‍👨🏿 👩🏼‍❤️‍👨🏻 👩🏼‍❤️‍👨🏼 👩🏼‍❤️‍👨🏽 👩🏼‍❤️‍👨🏾 👩🏼‍❤️‍👨🏿 👩🏽‍❤️‍👨🏻 👩🏽‍❤️‍👨🏼 👩🏽‍❤️‍👨🏽 👩🏽‍❤️‍👨🏾 👩🏽‍❤️‍👨🏿 👩🏾‍❤️‍👨🏻 👩🏾‍❤️‍👨🏼 👩🏾‍❤️‍👨🏽 👩🏾‍❤️‍👨🏾 👩🏾‍❤️‍👨🏿 👩🏿‍❤️‍👨🏻 👩🏿‍❤️‍👨🏼 👩🏿‍❤️‍👨🏽 👩🏿‍❤️‍👨🏾 👩🏿‍❤️‍👨🏿 👨‍❤️‍👨 👨🏻‍❤️‍👨🏻 👨🏻‍❤️‍👨🏼 👨🏻‍❤️‍👨🏽 👨🏻‍❤️‍👨🏾 👨🏻‍❤️‍👨🏿 👨🏼‍❤️‍👨🏻 👨🏼‍❤️‍👨🏼 👨🏼‍❤️‍👨🏽 👨🏼‍❤️‍👨🏾 👨🏼‍❤️‍👨🏿 👨🏽‍❤️‍👨🏻 👨🏽‍❤️‍👨🏼 👨🏽‍❤️‍👨🏽 👨🏽‍❤️‍👨🏾 👨🏽‍❤️‍👨🏿 👨🏾‍❤️‍👨🏻 👨🏾‍❤️‍👨🏼 👨🏾‍❤️‍👨🏽 👨🏾‍❤️‍👨🏾 👨🏾‍❤️‍👨🏿 👨🏿‍❤️‍👨🏻 👨🏿‍❤️‍👨🏼 👨🏿‍❤️‍👨🏽 👨🏿‍❤️‍👨🏾 👨🏿‍❤️‍👨🏿 👩‍❤️‍👩 👩🏻‍❤️‍👩🏻 👩🏻‍❤️‍👩🏼 👩🏻‍❤️‍👩🏽 👩🏻‍❤️‍👩🏾 👩🏻‍❤️‍👩🏿 👩🏼‍❤️‍👩🏻 👩🏼‍❤️‍👩🏼 👩🏼‍❤️‍👩🏽 👩🏼‍❤️‍👩🏾 👩🏼‍❤️‍👩🏿 👩🏽‍❤️‍👩🏻 👩🏽‍❤️‍👩🏼 👩🏽‍❤️‍👩🏽 👩🏽‍❤️‍👩🏾 👩🏽‍❤️‍👩🏿 👩🏾‍❤️‍👩🏻 👩🏾‍❤️‍👩🏼 👩🏾‍❤️‍👩🏽 👩🏾‍❤️‍👩🏾 👩🏾‍❤️‍👩🏿 👩🏿‍❤️‍👩🏻 👩🏿‍❤️‍👩🏼 👩🏿‍❤️‍👩🏽 👩🏿‍❤️‍👩🏾 👩🏿‍❤️‍👩🏿 👪 👨‍👩‍👦 👨‍👩‍👧 👨‍👩‍👧‍👦 👨‍👩‍👦‍👦 👨‍👩‍👧‍👧 👨‍👨‍👦 👨‍👨‍👧 👨‍👨‍👧‍👦 👨‍👨‍👦‍👦 👨‍👨‍👧‍👧 👩‍👩‍👦 👩‍👩‍👧 👩‍👩‍👧‍👦 👩‍👩‍👦‍👦 👩‍👩‍👧‍👧 👨‍👦 👨‍👦‍👦 👨‍👧 👨‍👧‍👦 👨‍👧‍👧 👩‍👦 👩‍👦‍👦 👩‍👧 👩‍👧‍👦 👩‍👧‍👧 🐕‍🦺 🐈‍⬛ 🐻‍❄️ 🐦‍⬛ 🏳️‍🌈 🏳️‍⚧️ 🏴‍☠️ ",-1),c4={__name:"48",setup(e){const t={hide:!1,srcSequence:"./pages/04-quirks.md"};return R(G),(n,s)=>(w(),H(Ue,ue(le(t)),{default:j(()=>[a4,l4]),_:1},16))}},u4=Y(c4,[["__file","/@slidev/slides/48.md"]]),d4=i("h2",null,"Digraphs/ligatures",-1),f4=i("p",null,"Digraphs and ligatures are both made by combining two glyphs:",-1),p4=i("ul",null,[i("li",null,"In a digraph, the glyphs remain separate but are placed close together."),i("li",null,"In a ligature, the glyphs are fused into a single glyph.")],-1),h4=i("p",null,"Generally speaking, Unicode doesn’t like dealing with this problem.",-1),m4=i("blockquote",null,[i("p",null,[y("The Unicode Standard is a character encoding standard, and is "),i("strong",null,"not intended to standardize ligatures or other presentation forms"),y(", or any other aspects of the details of font and glyph design. The ligatures which you can find in the Unicode Standard are "),i("strong",null,"compatibility encodings"),y(" only—and are not meant to set a precedent requiring the encoding of all ligatures as characters.")])],-1),g4=i("p",null,"TL;DR; you shouldn’t expect any ligatures/digraphs to be added to Unicode any time soon.",-1),y4={__name:"49",setup(e){const t={hide:!1,srcSequence:"./pages/04-quirks.md"};return R(G),(n,s)=>(w(),H(Ue,ue(le(t)),{default:j(()=>[d4,f4,p4,h4,m4,g4]),_:1},16))}},v4=Y(y4,[["__file","/@slidev/slides/49.md"]]),_4=i("h2",null,"Flags",-1),b4=i("ul",null,[i("li",null,[i("p",null,"Who adds a new flag?")]),i("li",null,[i("p",null,"Flag sequences"),i("ul",null,[i("li",null,":RGI_Emoji_Flag_Sequence"),i("li",null,[i("a",{href:"https://unicode.org/reports/tr51/#Flags",target:"_blank",rel:"noopener"},"https://unicode.org/reports/tr51/#Flags")]),i("li",null,"Qatar flag = wideboi")])]),i("li",null,[i("p",null,'"🇭🇪🇱🇱🇴🇼🇴🇷🇱🇩" ??')])],-1),w4=i("p",null,"Flag types:",-1),x4=i("ul",null,[i("li",null,"country/region"),i("li",null,"local (gbeng, etc)")],-1),k4={__name:"50",setup(e){const t={hide:!1,srcSequence:"./pages/04-quirks.md"};return R(G),(n,s)=>(w(),H(Ue,ue(le(t)),{default:j(()=>[_4,b4,w4,x4]),_:1},16))}},S4=Y(k4,[["__file","/@slidev/slides/50.md"]]),A4=i("h2",null,"Unicode Tags",-1),E4=i("pre",{class:"shiki-container"},[i("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{color:"#4D9375"}},"fn"),i("span",{style:{color:"#DBD7CA"}}," "),i("span",{style:{color:"#A1B567"}},"main"),i("span",{style:{color:"#858585"}},"()"),i("span",{style:{color:"#DBD7CA"}}," "),i("span",{style:{color:"#858585"}},"{")]),y(`
`),i("span",{class:"line"},[i("span",{style:{color:"#DBD7CA"}},"    "),i("span",{style:{color:"#CB7676"}},"let"),i("span",{style:{color:"#DBD7CA"}}," "),i("span",{style:{color:"#B8A965"}},"encoded"),i("span",{style:{color:"#DBD7CA"}}," "),i("span",{style:{color:"#CB7676"}},"="),i("span",{style:{color:"#DBD7CA"}}," "),i("span",{style:{color:"#C98A7D"}},'"Hello󠀠󠁒󠁵󠁳󠁴 Meetup Amsterdam!"'),i("span",{style:{color:"#858585"}},";")]),y(`
`),i("span",{class:"line"}),y(`
`),i("span",{class:"line"},[i("span",{style:{color:"#DBD7CA"}},"    "),i("span",{style:{color:"#A1B567"}},"println!"),i("span",{style:{color:"#858585"}},"("),i("span",{style:{color:"#C98A7D"}},'"'),i("span",{style:{color:"#858585"}},"{}"),i("span",{style:{color:"#C98A7D"}},'"'),i("span",{style:{color:"#858585"}},","),i("span",{style:{color:"#DBD7CA"}}," "),i("span",{style:{color:"#B8A965"}},"encoded"),i("span",{style:{color:"#858585"}},");")]),y(`
`),i("span",{class:"line"},[i("span",{style:{color:"#758575"}},'    //println!("{:?}", encoded);')]),y(`
`),i("span",{class:"line"}),y(`
`),i("span",{class:"line"},[i("span",{style:{color:"#758575"}},"    //let codepoints: Vec<u32> = encoded.chars().map(|c| c.into()).collect();")]),y(`
`),i("span",{class:"line"},[i("span",{style:{color:"#758575"}},'    //println!("{:X?}", codepoints);')]),y(`
`),i("span",{class:"line"}),y(`
`),i("span",{class:"line"},[i("span",{style:{color:"#758575"}},"    //let offset: u32 = 0xE0000;")]),y(`
`),i("span",{class:"line"}),y(`
`),i("span",{class:"line"},[i("span",{style:{color:"#758575"}},"    //let decoded: String = encoded")]),y(`
`),i("span",{class:"line"},[i("span",{style:{color:"#758575"}},"    //    .chars()")]),y(`
`),i("span",{class:"line"},[i("span",{style:{color:"#758575"}},"    //    .map(|c| match c {")]),y(`
`),i("span",{class:"line"},[i("span",{style:{color:"#758575"}},"    //        '\\u{e0000}'..='\\u{e007F}' => {")]),y(`
`),i("span",{class:"line"},[i("span",{style:{color:"#758575"}},"    //            let char_u32: u32 = c.into();")]),y(`
`),i("span",{class:"line"},[i("span",{style:{color:"#758575"}},"    //            std::char::from_u32(char_u32 - offset).unwrap()")]),y(`
`),i("span",{class:"line"},[i("span",{style:{color:"#758575"}},"    //        },")]),y(`
`),i("span",{class:"line"},[i("span",{style:{color:"#758575"}},"    //        _ => c,")]),y(`
`),i("span",{class:"line"},[i("span",{style:{color:"#758575"}},"    //    })")]),y(`
`),i("span",{class:"line"},[i("span",{style:{color:"#758575"}},"    //    .collect();")]),y(`
`),i("span",{class:"line"}),y(`
`),i("span",{class:"line"},[i("span",{style:{color:"#758575"}},'    //println!("{:?}", decoded);')]),y(`
`),i("span",{class:"line"},[i("span",{style:{color:"#858585"}},"}")])])]),i("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{color:"#1C6B48"}},"fn"),i("span",{style:{color:"#393A34"}}," "),i("span",{style:{color:"#6C7834"}},"main"),i("span",{style:{color:"#8E8F8B"}},"()"),i("span",{style:{color:"#393A34"}}," "),i("span",{style:{color:"#8E8F8B"}},"{")]),y(`
`),i("span",{class:"line"},[i("span",{style:{color:"#393A34"}},"    "),i("span",{style:{color:"#AB5959"}},"let"),i("span",{style:{color:"#393A34"}}," "),i("span",{style:{color:"#8C862B"}},"encoded"),i("span",{style:{color:"#393A34"}}," "),i("span",{style:{color:"#AB5959"}},"="),i("span",{style:{color:"#393A34"}}," "),i("span",{style:{color:"#B56959"}},'"Hello󠀠󠁒󠁵󠁳󠁴 Meetup Amsterdam!"'),i("span",{style:{color:"#8E8F8B"}},";")]),y(`
`),i("span",{class:"line"}),y(`
`),i("span",{class:"line"},[i("span",{style:{color:"#393A34"}},"    "),i("span",{style:{color:"#6C7834"}},"println!"),i("span",{style:{color:"#8E8F8B"}},"("),i("span",{style:{color:"#B56959"}},'"'),i("span",{style:{color:"#8E8F8B"}},"{}"),i("span",{style:{color:"#B56959"}},'"'),i("span",{style:{color:"#8E8F8B"}},","),i("span",{style:{color:"#393A34"}}," "),i("span",{style:{color:"#8C862B"}},"encoded"),i("span",{style:{color:"#8E8F8B"}},");")]),y(`
`),i("span",{class:"line"},[i("span",{style:{color:"#A0ADA0"}},'    //println!("{:?}", encoded);')]),y(`
`),i("span",{class:"line"}),y(`
`),i("span",{class:"line"},[i("span",{style:{color:"#A0ADA0"}},"    //let codepoints: Vec<u32> = encoded.chars().map(|c| c.into()).collect();")]),y(`
`),i("span",{class:"line"},[i("span",{style:{color:"#A0ADA0"}},'    //println!("{:X?}", codepoints);')]),y(`
`),i("span",{class:"line"}),y(`
`),i("span",{class:"line"},[i("span",{style:{color:"#A0ADA0"}},"    //let offset: u32 = 0xE0000;")]),y(`
`),i("span",{class:"line"}),y(`
`),i("span",{class:"line"},[i("span",{style:{color:"#A0ADA0"}},"    //let decoded: String = encoded")]),y(`
`),i("span",{class:"line"},[i("span",{style:{color:"#A0ADA0"}},"    //    .chars()")]),y(`
`),i("span",{class:"line"},[i("span",{style:{color:"#A0ADA0"}},"    //    .map(|c| match c {")]),y(`
`),i("span",{class:"line"},[i("span",{style:{color:"#A0ADA0"}},"    //        '\\u{e0000}'..='\\u{e007F}' => {")]),y(`
`),i("span",{class:"line"},[i("span",{style:{color:"#A0ADA0"}},"    //            let char_u32: u32 = c.into();")]),y(`
`),i("span",{class:"line"},[i("span",{style:{color:"#A0ADA0"}},"    //            std::char::from_u32(char_u32 - offset).unwrap()")]),y(`
`),i("span",{class:"line"},[i("span",{style:{color:"#A0ADA0"}},"    //        },")]),y(`
`),i("span",{class:"line"},[i("span",{style:{color:"#A0ADA0"}},"    //        _ => c,")]),y(`
`),i("span",{class:"line"},[i("span",{style:{color:"#A0ADA0"}},"    //    })")]),y(`
`),i("span",{class:"line"},[i("span",{style:{color:"#A0ADA0"}},"    //    .collect();")]),y(`
`),i("span",{class:"line"}),y(`
`),i("span",{class:"line"},[i("span",{style:{color:"#A0ADA0"}},'    //println!("{:?}", decoded);')]),y(`
`),i("span",{class:"line"},[i("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),T4=i("p",null,[i("a",{href:"https://www.compart.com/en/unicode/block/U+E0000",target:"_blank",rel:"noopener"},"https://www.compart.com/en/unicode/block/U+E0000")],-1),C4={__name:"51",setup(e){const t={hide:!1,srcSequence:"./pages/04-quirks.md"};return R(G),(n,s)=>{const o=Zo;return w(),H(Ue,ue(le(t)),{default:j(()=>[A4,V(o,zt({},{ranges:[""]}),{default:j(()=>[E4]),_:1},16),T4]),_:1},16)}}},$4=Y(C4,[["__file","/@slidev/slides/51.md"]]),F4=i("h1",null,"THE END",-1),O4={__name:"52",setup(e){const t={layout:"cover",hideInToc:!0};return R(G),(n,s)=>(w(),H(zs,ue(le(t)),{default:j(()=>[F4]),_:1},16))}},P4=Y(O4,[["__file","/@slidev/slides/52.md"]]),I4=[{path:"1",name:"page-1",component:wS,meta:{theme:"seriph",background:"https://source.unsplash.com/collection/94734566/1920x1080",class:"text-center",highlighter:"shiki",lineNumbers:!0,info:`## Unicode, Rust, quirks, and way too much detail.
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
`,drawings:{persist:!1},transition:"slide-left",title:"Demystifying Unicode",hideInToc:!0},index:0,start:0,end:19,noteHTML:"",filepath:"/home/ben/Workspace/demystifying-unicode/slides.md",id:0,no:1},__clicksElements:[],__preloaded:!1}},{path:"2",name:"page-2",component:TS,meta:{hideInToc:!0,slide:{raw:`---
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
- Some things you only need to know when you need to know`,frontmatter:{hideInToc:!0},index:1,start:19,end:30,noteHTML:"",filepath:"/home/ben/Workspace/demystifying-unicode/slides.md",id:1,no:2},__clicksElements:[],__preloaded:!1}},{path:"3",name:"page-3",component:R8,meta:{hideInToc:!0,slide:{raw:`---
hideInToc: true
---

# Table of contents

<Toc maxDepth="1"></Toc>
`,title:"Table of contents",level:1,content:`# Table of contents

<Toc maxDepth="1"></Toc>`,frontmatter:{hideInToc:!0},index:2,start:30,end:38,noteHTML:"",filepath:"/home/ben/Workspace/demystifying-unicode/slides.md",id:2,no:3},__clicksElements:[],__preloaded:!1}},{path:"4",name:"page-4",component:W8,meta:{layout:"cover",title:"History",hide:!1,srcSequence:"./pages/01-history.md",slide:{raw:null,title:"History",level:1,content:"# History",frontmatter:{layout:"cover",title:"History",hide:!1,srcSequence:"./pages/01-history.md"},index:3,start:0,end:6,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/01-history.md",raw:`---
layout: cover
---

# History
`,title:"History",level:1,content:"# History",frontmatter:{layout:"cover",title:"History"},index:0,start:0,end:6},inline:{raw:`---
src: ./pages/01-history.md
hide: false
---
`,content:"",frontmatter:{hide:!1},index:3,start:38,end:43},filepath:"/home/ben/Workspace/demystifying-unicode/pages/01-history.md",noteHTML:"",id:3,no:4},__clicksElements:[],__preloaded:!1}},{path:"5",name:"page-5",component:Y8,meta:{hide:!1,srcSequence:"./pages/01-history.md",slide:{raw:`
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
`,id:4,no:5},__clicksElements:[],__preloaded:!1}},{path:"6",name:"page-6",component:sA,meta:{hide:!1,srcSequence:"./pages/01-history.md",slide:{raw:`
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

</v-click>`,frontmatter:{},index:2,start:37,end:68},filepath:"/home/ben/Workspace/demystifying-unicode/pages/01-history.md",noteHTML:"",id:5,no:6},__clicksElements:[],__preloaded:!1}},{path:"7",name:"page-7",component:dA,meta:{hide:!1,srcSequence:"./pages/01-history.md",slide:{raw:`
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
`,id:6,no:7},__clicksElements:[],__preloaded:!1}},{path:"8",name:"page-8",component:vA,meta:{layout:"center",hide:!1,srcSequence:"./pages/01-history.md",slide:{raw:`---
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
`,id:7,no:8},__clicksElements:[],__preloaded:!1}},{path:"9",name:"page-9",component:EA,meta:{hide:!1,srcSequence:"./pages/01-history.md",slide:{raw:`
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
`,id:8,no:9},__clicksElements:[],__preloaded:!1}},{path:"10",name:"page-10",component:UA,meta:{hide:!1,srcSequence:"./pages/01-history.md",slide:{raw:`
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

</v-clicks>`,frontmatter:{},index:6,start:179,end:218},filepath:"/home/ben/Workspace/demystifying-unicode/pages/01-history.md",noteHTML:"",id:9,no:10},__clicksElements:[],__preloaded:!1}},{path:"11",name:"page-11",component:jA,meta:{hide:!1,srcSequence:"./pages/01-history.md",slide:{raw:`
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

</footer>`,frontmatter:{},index:7,start:219,end:248},filepath:"/home/ben/Workspace/demystifying-unicode/pages/01-history.md",noteHTML:"",id:10,no:11},__clicksElements:[],__preloaded:!1}},{path:"12",name:"page-12",component:VA,meta:{layout:"center",hide:!1,srcSequence:"./pages/01-history.md",slide:{raw:`---
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

</v-clicks>`,frontmatter:{layout:"center"},index:8,start:248,end:263},filepath:"/home/ben/Workspace/demystifying-unicode/pages/01-history.md",noteHTML:"",id:11,no:12},__clicksElements:[],__preloaded:!1}},{path:"13",name:"page-13",component:GA,meta:{layout:"cover",title:"Unicode",hide:!1,srcSequence:"./pages/02-unicode.md",slide:{raw:null,title:"Unicode",level:1,content:"# Unicode",frontmatter:{layout:"cover",title:"Unicode",hide:!1,srcSequence:"./pages/02-unicode.md"},index:12,start:0,end:6,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/02-unicode.md",raw:`---
layout: cover
---

# Unicode
`,title:"Unicode",level:1,content:"# Unicode",frontmatter:{layout:"cover",title:"Unicode"},index:0,start:0,end:6},inline:{raw:`---
src: ./pages/02-unicode.md
hide: false
---
`,content:"",frontmatter:{hide:!1},index:4,start:43,end:48},filepath:"/home/ben/Workspace/demystifying-unicode/pages/02-unicode.md",noteHTML:"",id:12,no:13},__clicksElements:[],__preloaded:!1}},{path:"14",name:"page-14",component:JA,meta:{hide:!1,srcSequence:"./pages/02-unicode.md",slide:{raw:`
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
`,id:13,no:14},__clicksElements:[],__preloaded:!1}},{path:"15",name:"page-15",component:nE,meta:{layout:"center",hide:!1,srcSequence:"./pages/02-unicode.md",slide:{raw:`---
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
</style>`,frontmatter:{layout:"center"},index:2,start:27,end:43},filepath:"/home/ben/Workspace/demystifying-unicode/pages/02-unicode.md",noteHTML:"",id:14,no:15},__clicksElements:[],__preloaded:!1}},{path:"16",name:"page-16",component:iE,meta:{layout:"center",hide:!1,srcSequence:"./pages/02-unicode.md",slide:{raw:`---
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
`,id:15,no:16},__clicksElements:[],__preloaded:!1}},{path:"17",name:"page-17",component:dE,meta:{hide:!1,srcSequence:"./pages/02-unicode.md",slide:{raw:`
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
`,id:16,no:17},__clicksElements:[],__preloaded:!1}},{path:"18",name:"page-18",component:mE,meta:{layout:"center",hide:!1,srcSequence:"./pages/02-unicode.md",slide:{raw:`---
layout: center
---

<img src="/glyph-codepoint-character.jpg" alt="Triple spiderman meme, glyph, codepoint, character pointing at each other" />
`,content:'<img src="/glyph-codepoint-character.jpg" alt="Triple spiderman meme, glyph, codepoint, character pointing at each other" />',frontmatter:{layout:"center",hide:!1,srcSequence:"./pages/02-unicode.md"},index:17,start:94,end:100,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/02-unicode.md",raw:`---
layout: center
---

<img src="/glyph-codepoint-character.jpg" alt="Triple spiderman meme, glyph, codepoint, character pointing at each other" />
`,content:'<img src="/glyph-codepoint-character.jpg" alt="Triple spiderman meme, glyph, codepoint, character pointing at each other" />',frontmatter:{layout:"center"},index:5,start:94,end:100},filepath:"/home/ben/Workspace/demystifying-unicode/pages/02-unicode.md",noteHTML:"",id:17,no:18},__clicksElements:[],__preloaded:!1}},{path:"19",name:"page-19",component:_E,meta:{layout:"center",hide:!1,srcSequence:"./pages/02-unicode.md",slide:{raw:`---
layout: center
---

<img src="/no_chars_yes_glyphs.jpg" alt="Drake no: characters. Drake yes: glyphs" />
`,content:'<img src="/no_chars_yes_glyphs.jpg" alt="Drake no: characters. Drake yes: glyphs" />',frontmatter:{layout:"center",hide:!1,srcSequence:"./pages/02-unicode.md"},index:18,start:100,end:106,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/02-unicode.md",raw:`---
layout: center
---

<img src="/no_chars_yes_glyphs.jpg" alt="Drake no: characters. Drake yes: glyphs" />
`,content:'<img src="/no_chars_yes_glyphs.jpg" alt="Drake no: characters. Drake yes: glyphs" />',frontmatter:{layout:"center"},index:6,start:100,end:106},filepath:"/home/ben/Workspace/demystifying-unicode/pages/02-unicode.md",noteHTML:"",id:18,no:19},__clicksElements:[],__preloaded:!1}},{path:"20",name:"page-20",component:EE,meta:{layout:"two-cols",hide:!1,srcSequence:"./pages/02-unicode.md",slide:{raw:`---
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
`,id:19,no:20},__clicksElements:[],__preloaded:!1}},{path:"21",name:"page-21",component:PE,meta:{layout:"center",hide:!1,srcSequence:"./pages/02-unicode.md",slide:{raw:`---
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
`,title:"What is the difference between",level:2,content:"## What is the difference between\n## `Unicode`\n## and\n## `UTF-8`",frontmatter:{layout:"center"},index:8,start:128,end:137},filepath:"/home/ben/Workspace/demystifying-unicode/pages/02-unicode.md",noteHTML:"",id:20,no:21},__clicksElements:[],__preloaded:!1}},{path:"22",name:"page-22",component:BE,meta:{layout:"center",hide:!1,srcSequence:"./pages/02-unicode.md",slide:{raw:`---
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
`,id:21,no:22},__clicksElements:[],__preloaded:!1}},{path:"23",name:"page-23",component:qE,meta:{hide:!1,srcSequence:"./pages/02-unicode.md",slide:{raw:`
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

</footer>`,frontmatter:{},index:10,start:154,end:176},filepath:"/home/ben/Workspace/demystifying-unicode/pages/02-unicode.md",noteHTML:"",id:22,no:23},__clicksElements:[],__preloaded:!1}},{path:"24",name:"page-24",component:KE,meta:{layout:"center",hide:!1,srcSequence:"./pages/02-unicode.md",slide:{raw:`---
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

</footer>`,frontmatter:{layout:"center"},index:11,start:176,end:196},filepath:"/home/ben/Workspace/demystifying-unicode/pages/02-unicode.md",noteHTML:"",id:23,no:24},__clicksElements:[],__preloaded:!1}},{path:"25",name:"page-25",component:eT,meta:{hide:!1,srcSequence:"./pages/02-unicode.md",slide:{raw:`
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
A UTF-8 encoded string on my machine spits out an array of bytes.
To your machine, it's just an array of bytes.

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

</footer>`,frontmatter:{hide:!1,srcSequence:"./pages/02-unicode.md"},note:`A UTF-8 encoded string on my machine spits out an array of bytes.
To your machine, it's just an array of bytes.

Content-Encoding header on HTTP requests

UTF-21: https://evanhahn.com/utf-21/`,index:24,start:197,end:231,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/02-unicode.md",raw:`
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
A UTF-8 encoded string on my machine spits out an array of bytes.
To your machine, it's just an array of bytes.

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

</footer>`,frontmatter:{},note:`A UTF-8 encoded string on my machine spits out an array of bytes.
To your machine, it's just an array of bytes.

Content-Encoding header on HTTP requests

UTF-21: https://evanhahn.com/utf-21/`,index:12,start:197,end:231},filepath:"/home/ben/Workspace/demystifying-unicode/pages/02-unicode.md",noteHTML:`<p>A UTF-8 encoded string on my machine spits out an array of bytes.
To your machine, it's just an array of bytes.</p>
<p>Content-Encoding header on HTTP requests</p>
<p>UTF-21: https://evanhahn.com/utf-21/</p>
`,id:24,no:25},__clicksElements:[],__preloaded:!1}},{path:"26",name:"page-26",component:sT,meta:{layout:"center",hide:!1,srcSequence:"./pages/02-unicode.md",slide:{raw:`---
layout: center
---

## UTF-8 is the king of the web
`,title:"UTF-8 is the king of the web",level:2,content:"## UTF-8 is the king of the web",frontmatter:{layout:"center",hide:!1,srcSequence:"./pages/02-unicode.md"},index:25,start:231,end:237,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/02-unicode.md",raw:`---
layout: center
---

## UTF-8 is the king of the web
`,title:"UTF-8 is the king of the web",level:2,content:"## UTF-8 is the king of the web",frontmatter:{layout:"center"},index:13,start:231,end:237},filepath:"/home/ben/Workspace/demystifying-unicode/pages/02-unicode.md",noteHTML:"",id:25,no:26},__clicksElements:[],__preloaded:!1}},{path:"27",name:"page-27",component:uT,meta:{hide:!1,srcSequence:"./pages/02-unicode.md",slide:{raw:'\n## Nuts and bolts of UTF-8\n\nKey points:\n\n- Variable width (1-4 bytes)\n- ∴ Variable offset between characters\n- The default in Rust (+many more)\n\n<v-click>\n\n<hr />\n\n| Code point range | Byte 1 | Byte 2 | Byte 3 | Byte 4 | Bit Capacity | Code points |\n| - | - | - | - | - | - | - |\n| `0x000000..0x00007F` | `0xxxxxxx` | | | | 7 | 128 |\n| `0x000080..0x0007FF` | `110xxxxx` | `10xxxxxx` | | | 11 | 1920 |\n| `0x000800..0x00FFFF` | `1110xxxx` | `10xxxxxx` | `10xxxxxx` | | 16 | 63488 |\n| `0x010000..0x10FFFF` | `11110xxx` | `10xxxxxx` | `10xxxxxx` | `10xxxxxx` | 21 | 1mil+ |\n\n</v-click>\n\n<!--\nUTF-8 is generally speaking more efficient when dealing with "Latin" based web - Best case 1 byte, worst case, 2 bytes.\nUTF-16 is gauranteed to be 2 bytes, if not 4\nUTF-32 will always be 4 bytes.\n-->\n',title:"Nuts and bolts of UTF-8",level:2,content:"## Nuts and bolts of UTF-8\n\nKey points:\n\n- Variable width (1-4 bytes)\n- ∴ Variable offset between characters\n- The default in Rust (+many more)\n\n<v-click>\n\n<hr />\n\n| Code point range | Byte 1 | Byte 2 | Byte 3 | Byte 4 | Bit Capacity | Code points |\n| - | - | - | - | - | - | - |\n| `0x000000..0x00007F` | `0xxxxxxx` | | | | 7 | 128 |\n| `0x000080..0x0007FF` | `110xxxxx` | `10xxxxxx` | | | 11 | 1920 |\n| `0x000800..0x00FFFF` | `1110xxxx` | `10xxxxxx` | `10xxxxxx` | | 16 | 63488 |\n| `0x010000..0x10FFFF` | `11110xxx` | `10xxxxxx` | `10xxxxxx` | `10xxxxxx` | 21 | 1mil+ |\n\n</v-click>",frontmatter:{hide:!1,srcSequence:"./pages/02-unicode.md"},note:`UTF-8 is generally speaking more efficient when dealing with "Latin" based web - Best case 1 byte, worst case, 2 bytes.
UTF-16 is gauranteed to be 2 bytes, if not 4
UTF-32 will always be 4 bytes.`,index:26,start:238,end:266,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/02-unicode.md",raw:'\n## Nuts and bolts of UTF-8\n\nKey points:\n\n- Variable width (1-4 bytes)\n- ∴ Variable offset between characters\n- The default in Rust (+many more)\n\n<v-click>\n\n<hr />\n\n| Code point range | Byte 1 | Byte 2 | Byte 3 | Byte 4 | Bit Capacity | Code points |\n| - | - | - | - | - | - | - |\n| `0x000000..0x00007F` | `0xxxxxxx` | | | | 7 | 128 |\n| `0x000080..0x0007FF` | `110xxxxx` | `10xxxxxx` | | | 11 | 1920 |\n| `0x000800..0x00FFFF` | `1110xxxx` | `10xxxxxx` | `10xxxxxx` | | 16 | 63488 |\n| `0x010000..0x10FFFF` | `11110xxx` | `10xxxxxx` | `10xxxxxx` | `10xxxxxx` | 21 | 1mil+ |\n\n</v-click>\n\n<!--\nUTF-8 is generally speaking more efficient when dealing with "Latin" based web - Best case 1 byte, worst case, 2 bytes.\nUTF-16 is gauranteed to be 2 bytes, if not 4\nUTF-32 will always be 4 bytes.\n-->\n',title:"Nuts and bolts of UTF-8",level:2,content:"## Nuts and bolts of UTF-8\n\nKey points:\n\n- Variable width (1-4 bytes)\n- ∴ Variable offset between characters\n- The default in Rust (+many more)\n\n<v-click>\n\n<hr />\n\n| Code point range | Byte 1 | Byte 2 | Byte 3 | Byte 4 | Bit Capacity | Code points |\n| - | - | - | - | - | - | - |\n| `0x000000..0x00007F` | `0xxxxxxx` | | | | 7 | 128 |\n| `0x000080..0x0007FF` | `110xxxxx` | `10xxxxxx` | | | 11 | 1920 |\n| `0x000800..0x00FFFF` | `1110xxxx` | `10xxxxxx` | `10xxxxxx` | | 16 | 63488 |\n| `0x010000..0x10FFFF` | `11110xxx` | `10xxxxxx` | `10xxxxxx` | `10xxxxxx` | 21 | 1mil+ |\n\n</v-click>",frontmatter:{},note:`UTF-8 is generally speaking more efficient when dealing with "Latin" based web - Best case 1 byte, worst case, 2 bytes.
UTF-16 is gauranteed to be 2 bytes, if not 4
UTF-32 will always be 4 bytes.`,index:14,start:238,end:266},filepath:"/home/ben/Workspace/demystifying-unicode/pages/02-unicode.md",noteHTML:`<p>UTF-8 is generally speaking more efficient when dealing with &quot;Latin&quot; based web - Best case 1 byte, worst case, 2 bytes.
UTF-16 is gauranteed to be 2 bytes, if not 4
UTF-32 will always be 4 bytes.</p>
`,id:26,no:27},__clicksElements:[],__preloaded:!1}},{path:"28",name:"page-28",component:OT,meta:{hide:!1,srcSequence:"./pages/02-unicode.md",slide:{raw:`
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

</div>`,frontmatter:{hide:!1,srcSequence:"./pages/02-unicode.md"},note:"Take a codepoint, and split it into UTF-8",index:27,start:267,end:306,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/02-unicode.md",raw:`
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

</div>`,frontmatter:{},note:"Take a codepoint, and split it into UTF-8",index:15,start:267,end:306},filepath:"/home/ben/Workspace/demystifying-unicode/pages/02-unicode.md",noteHTML:`<p>Take a codepoint, and split it into UTF-8</p>
`,id:27,no:28},__clicksElements:[],__preloaded:!1}},{path:"29",name:"page-29",component:uC,meta:{hide:!1,srcSequence:"./pages/02-unicode.md",slide:{raw:`
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
</style>`,frontmatter:{hide:!1,srcSequence:"./pages/02-unicode.md"},index:28,start:307,end:391,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/02-unicode.md",raw:`
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
</style>`,frontmatter:{},index:16,start:307,end:391},filepath:"/home/ben/Workspace/demystifying-unicode/pages/02-unicode.md",noteHTML:"",id:28,no:29},__clicksElements:[],__preloaded:!1}},{path:"30",name:"page-30",component:hC,meta:{layout:"center",hide:!1,srcSequence:"./pages/02-unicode.md",slide:{raw:`---
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

</v-clicks>`,frontmatter:{layout:"center",hide:!1,srcSequence:"./pages/02-unicode.md"},index:29,start:391,end:406,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/02-unicode.md",raw:`---
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

</v-clicks>`,frontmatter:{layout:"center"},index:17,start:391,end:406},filepath:"/home/ben/Workspace/demystifying-unicode/pages/02-unicode.md",noteHTML:"",id:29,no:30},__clicksElements:[],__preloaded:!1}},{path:"31",name:"page-31",component:yC,meta:{layout:"cover",title:"Unicode in Rust",hide:!1,srcSequence:"./pages/03-unicode-in-rust.md",slide:{raw:null,title:"Unicode in Rust",level:1,content:"# Unicode in Rust",frontmatter:{layout:"cover",title:"Unicode in Rust",hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"},note:`We now know what UTF-8 is, and what Unicode is, how is it used in rust?

- How do we represent strings in rust?
  - str = primitive
  - str = string slice
  - string slice = vector of bytes
- Creating strings
  - str is valid UTF-8 only
  - Different ways to create str's
    - &'static str
    - String::from_utf8(bytes);
    - b"" (and then conversion)
    - array of std::char
  - UTF-8Errors
  - Conventially UTF-8 instead of Gauranteed
- Limits of UTF-8 default
  - Reading binary from disk
  - People not following standards (binary in json without conversion) 
  - We can break a string \`unsafe {}\``,index:30,start:0,end:28,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/03-unicode-in-rust.md",raw:`---
layout: cover
---

# Unicode in Rust

<!--
We now know what UTF-8 is, and what Unicode is, how is it used in rust?

- How do we represent strings in rust?
  - str = primitive
  - str = string slice
  - string slice = vector of bytes
- Creating strings
  - str is valid UTF-8 only
  - Different ways to create str's
    - &'static str
    - String::from_utf8(bytes);
    - b"" (and then conversion)
    - array of std::char
  - UTF-8Errors
  - Conventially UTF-8 instead of Gauranteed
- Limits of UTF-8 default
  - Reading binary from disk
  - People not following standards (binary in json without conversion) 
  - We can break a string \`unsafe {}\`
-->
`,title:"Unicode in Rust",level:1,content:"# Unicode in Rust",frontmatter:{layout:"cover",title:"Unicode in Rust"},note:`We now know what UTF-8 is, and what Unicode is, how is it used in rust?

- How do we represent strings in rust?
  - str = primitive
  - str = string slice
  - string slice = vector of bytes
- Creating strings
  - str is valid UTF-8 only
  - Different ways to create str's
    - &'static str
    - String::from_utf8(bytes);
    - b"" (and then conversion)
    - array of std::char
  - UTF-8Errors
  - Conventially UTF-8 instead of Gauranteed
- Limits of UTF-8 default
  - Reading binary from disk
  - People not following standards (binary in json without conversion) 
  - We can break a string \`unsafe {}\``,index:0,start:0,end:28},inline:{raw:`---
src: ./pages/03-unicode-in-rust.md
hide: false
---
`,content:"",frontmatter:{hide:!1},index:5,start:48,end:53},filepath:"/home/ben/Workspace/demystifying-unicode/pages/03-unicode-in-rust.md",noteHTML:`<p>We now know what UTF-8 is, and what Unicode is, how is it used in rust?</p>
<ul>
<li>How do we represent strings in rust?
<ul>
<li>str = primitive</li>
<li>str = string slice</li>
<li>string slice = vector of bytes</li>
</ul>
</li>
<li>Creating strings
<ul>
<li>str is valid UTF-8 only</li>
<li>Different ways to create str's
<ul>
<li>&amp;'static str</li>
<li>String::from_utf8(bytes);</li>
<li>b&quot;&quot; (and then conversion)</li>
<li>array of std::char</li>
</ul>
</li>
<li>UTF-8Errors</li>
<li>Conventially UTF-8 instead of Gauranteed</li>
</ul>
</li>
<li>Limits of UTF-8 default
<ul>
<li>Reading binary from disk</li>
<li>People not following standards (binary in json without conversion)</li>
<li>We can break a string <code>unsafe {}</code></li>
</ul>
</li>
</ul>
`,id:30,no:31},__clicksElements:[],__preloaded:!1}},{path:"32",name:"page-32",component:bC,meta:{layout:"center",hide:!1,srcSequence:"./pages/03-unicode-in-rust.md",slide:{raw:`---
layout: center
---

Q: What is the primitive string type in rust?
`,content:"Q: What is the primitive string type in rust?",frontmatter:{layout:"center",hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"},index:31,start:28,end:34,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/03-unicode-in-rust.md",raw:`---
layout: center
---

Q: What is the primitive string type in rust?
`,content:"Q: What is the primitive string type in rust?",frontmatter:{layout:"center"},index:1,start:28,end:34},filepath:"/home/ben/Workspace/demystifying-unicode/pages/03-unicode-in-rust.md",noteHTML:"",id:31,no:32},__clicksElements:[],__preloaded:!1}},{path:"33",name:"page-33",component:EC,meta:{layout:"center",hide:!1,srcSequence:"./pages/03-unicode-in-rust.md",slide:{raw:"---\nlayout: center\n---\n\nAnswer: `str`\n\n<v-click>\n\nIncorrect: `String`, `&str`\n\n- `&str` impls `AsRef<str>`\n- `String` impls `AsRef<str>`\n- `String` impls `Deref` to `str` (thus `&String` derefs to `&str`)\n\n</v-click>\n\n<v-click>\n\n> The `str` type, also called a ‘string slice’, is the most primitive string type. It is usually seen in its borrowed form, `&str`. It is also the type of string literals, `&'static str`.\n> \n> String slices are **always** valid UTF-8.\n\n</v-click>\n",content:"Answer: `str`\n\n<v-click>\n\nIncorrect: `String`, `&str`\n\n- `&str` impls `AsRef<str>`\n- `String` impls `AsRef<str>`\n- `String` impls `Deref` to `str` (thus `&String` derefs to `&str`)\n\n</v-click>\n\n<v-click>\n\n> The `str` type, also called a ‘string slice’, is the most primitive string type. It is usually seen in its borrowed form, `&str`. It is also the type of string literals, `&'static str`.\n> \n> String slices are **always** valid UTF-8.\n\n</v-click>",frontmatter:{layout:"center",hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"},index:32,start:34,end:58,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/03-unicode-in-rust.md",raw:"---\nlayout: center\n---\n\nAnswer: `str`\n\n<v-click>\n\nIncorrect: `String`, `&str`\n\n- `&str` impls `AsRef<str>`\n- `String` impls `AsRef<str>`\n- `String` impls `Deref` to `str` (thus `&String` derefs to `&str`)\n\n</v-click>\n\n<v-click>\n\n> The `str` type, also called a ‘string slice’, is the most primitive string type. It is usually seen in its borrowed form, `&str`. It is also the type of string literals, `&'static str`.\n> \n> String slices are **always** valid UTF-8.\n\n</v-click>\n",content:"Answer: `str`\n\n<v-click>\n\nIncorrect: `String`, `&str`\n\n- `&str` impls `AsRef<str>`\n- `String` impls `AsRef<str>`\n- `String` impls `Deref` to `str` (thus `&String` derefs to `&str`)\n\n</v-click>\n\n<v-click>\n\n> The `str` type, also called a ‘string slice’, is the most primitive string type. It is usually seen in its borrowed form, `&str`. It is also the type of string literals, `&'static str`.\n> \n> String slices are **always** valid UTF-8.\n\n</v-click>",frontmatter:{layout:"center"},index:2,start:34,end:58},filepath:"/home/ben/Workspace/demystifying-unicode/pages/03-unicode-in-rust.md",noteHTML:"",id:32,no:33},__clicksElements:[],__preloaded:!1}},{path:"34",name:"page-34",component:YC,meta:{hide:!1,srcSequence:"./pages/03-unicode-in-rust.md",slide:{raw:`
## String slices

<br />

> Primitive Type slice
>
> A dynamically-sized view into a contiguous sequence, [T]. Contiguous here means that elements are laid out so that every element is the same distance from its neighbors.

Ref: https://doc.rust-lang.org/std/primitive.slice.html

<br />

<v-click>

If every element is the same distance from it's neighbour, then what is the \`len\` of the following?

\`\`\`rust
fn main() {
    let s = "İstanbul";

    println!("{}", s.len());
}
\`\`\`

</v-click>

<v-click>

\`\`\`rust
    //        ^^ 9
\`\`\`

</v-click>

<v-click>

∴ A String slice (\`str\`) is just a slice of bytes (\`[u8]\`), which contents are always valid UTF-8.

</v-click>

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

Ref: https://doc.rust-lang.org/std/primitive.slice.html

<br />

<v-click>

If every element is the same distance from it's neighbour, then what is the \`len\` of the following?

\`\`\`rust
fn main() {
    let s = "İstanbul";

    println!("{}", s.len());
}
\`\`\`

</v-click>

<v-click>

\`\`\`rust
    //        ^^ 9
\`\`\`

</v-click>

<v-click>

∴ A String slice (\`str\`) is just a slice of bytes (\`[u8]\`), which contents are always valid UTF-8.

</v-click>`,frontmatter:{hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"},note:`&str is a slice of bytes, not of utf-8 characters. UTF-8 characters are between 1-4 bytes, so:
- it would be memory inefficient to assume all characters take 4 bytes
- it would be impossible to have a fixed distance with a variable length
Therefore string slices are slices of bytes`,index:33,start:59,end:107,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/03-unicode-in-rust.md",raw:`
## String slices

<br />

> Primitive Type slice
>
> A dynamically-sized view into a contiguous sequence, [T]. Contiguous here means that elements are laid out so that every element is the same distance from its neighbors.

Ref: https://doc.rust-lang.org/std/primitive.slice.html

<br />

<v-click>

If every element is the same distance from it's neighbour, then what is the \`len\` of the following?

\`\`\`rust
fn main() {
    let s = "İstanbul";

    println!("{}", s.len());
}
\`\`\`

</v-click>

<v-click>

\`\`\`rust
    //        ^^ 9
\`\`\`

</v-click>

<v-click>

∴ A String slice (\`str\`) is just a slice of bytes (\`[u8]\`), which contents are always valid UTF-8.

</v-click>

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

Ref: https://doc.rust-lang.org/std/primitive.slice.html

<br />

<v-click>

If every element is the same distance from it's neighbour, then what is the \`len\` of the following?

\`\`\`rust
fn main() {
    let s = "İstanbul";

    println!("{}", s.len());
}
\`\`\`

</v-click>

<v-click>

\`\`\`rust
    //        ^^ 9
\`\`\`

</v-click>

<v-click>

∴ A String slice (\`str\`) is just a slice of bytes (\`[u8]\`), which contents are always valid UTF-8.

</v-click>`,frontmatter:{},note:`&str is a slice of bytes, not of utf-8 characters. UTF-8 characters are between 1-4 bytes, so:
- it would be memory inefficient to assume all characters take 4 bytes
- it would be impossible to have a fixed distance with a variable length
Therefore string slices are slices of bytes`,index:3,start:59,end:107},filepath:"/home/ben/Workspace/demystifying-unicode/pages/03-unicode-in-rust.md",noteHTML:`<p>&amp;str is a slice of bytes, not of utf-8 characters. UTF-8 characters are between 1-4 bytes, so:</p>
<ul>
<li>it would be memory inefficient to assume all characters take 4 bytes</li>
<li>it would be impossible to have a fixed distance with a variable length
Therefore string slices are slices of bytes</li>
</ul>
`,id:33,no:34},__clicksElements:[],__preloaded:!1}},{path:"35",name:"page-35",component:JC,meta:{layout:"center",hide:!1,srcSequence:"./pages/03-unicode-in-rust.md",slide:{raw:`---
layout: center
---

## Lets make some strings
`,title:"Lets make some strings",level:2,content:"## Lets make some strings",frontmatter:{layout:"center",hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"},index:34,start:107,end:113,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/03-unicode-in-rust.md",raw:`---
layout: center
---

## Lets make some strings
`,title:"Lets make some strings",level:2,content:"## Lets make some strings",frontmatter:{layout:"center"},index:4,start:107,end:113},filepath:"/home/ben/Workspace/demystifying-unicode/pages/03-unicode-in-rust.md",noteHTML:"",id:34,no:35},__clicksElements:[],__preloaded:!1}},{path:"36",name:"page-36",component:o$,meta:{hide:!1,srcSequence:"./pages/03-unicode-in-rust.md",slide:{raw:`
## Using strings in Rust

> String slices are **always** valid UTF-8.

∴ The compiler won't compile your rust if you try to do non UTF-8 things in \`&str\`

\`\`\`rs
fn main() {
    let s = "Hello World";     // Good
    let s = "Hello\\x20World";  // Also good
    let s = "Hello\\x7FWorld";  // Also good (\\x7F is the control character \`DEL\`)
    let s = "Hello\\x80World";  // Fails
    //            ^^^^ must be a character in the range [\\x00-\\x7f]
}
\`\`\`

<!--
\\x7F is DEL, so it seems as though the character is added then removed :shrug:
-->
`,title:"Using strings in Rust",level:2,content:`## Using strings in Rust

> String slices are **always** valid UTF-8.

∴ The compiler won't compile your rust if you try to do non UTF-8 things in \`&str\`

\`\`\`rs
fn main() {
    let s = "Hello World";     // Good
    let s = "Hello\\x20World";  // Also good
    let s = "Hello\\x7FWorld";  // Also good (\\x7F is the control character \`DEL\`)
    let s = "Hello\\x80World";  // Fails
    //            ^^^^ must be a character in the range [\\x00-\\x7f]
}
\`\`\``,frontmatter:{hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"},note:"\\x7F is DEL, so it seems as though the character is added then removed :shrug:",index:35,start:114,end:135,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/03-unicode-in-rust.md",raw:`
## Using strings in Rust

> String slices are **always** valid UTF-8.

∴ The compiler won't compile your rust if you try to do non UTF-8 things in \`&str\`

\`\`\`rs
fn main() {
    let s = "Hello World";     // Good
    let s = "Hello\\x20World";  // Also good
    let s = "Hello\\x7FWorld";  // Also good (\\x7F is the control character \`DEL\`)
    let s = "Hello\\x80World";  // Fails
    //            ^^^^ must be a character in the range [\\x00-\\x7f]
}
\`\`\`

<!--
\\x7F is DEL, so it seems as though the character is added then removed :shrug:
-->
`,title:"Using strings in Rust",level:2,content:`## Using strings in Rust

> String slices are **always** valid UTF-8.

∴ The compiler won't compile your rust if you try to do non UTF-8 things in \`&str\`

\`\`\`rs
fn main() {
    let s = "Hello World";     // Good
    let s = "Hello\\x20World";  // Also good
    let s = "Hello\\x7FWorld";  // Also good (\\x7F is the control character \`DEL\`)
    let s = "Hello\\x80World";  // Fails
    //            ^^^^ must be a character in the range [\\x00-\\x7f]
}
\`\`\``,frontmatter:{},note:"\\x7F is DEL, so it seems as though the character is added then removed :shrug:",index:5,start:114,end:135},filepath:"/home/ben/Workspace/demystifying-unicode/pages/03-unicode-in-rust.md",noteHTML:`<p>\\x7F is DEL, so it seems as though the character is added then removed :shrug:</p>
`,id:35,no:36},__clicksElements:[],__preloaded:!1}},{path:"37",name:"page-37",component:c$,meta:{hide:!1,srcSequence:"./pages/03-unicode-in-rust.md",slide:{raw:`
## Creating Strings

Remember, all strings are just arrays of bytes. As such, rust will also let us create strings from exactly that, vectors of bytes.

\`\`\`rust
fn main() {
    let v = vec![0x52, 0x75, 0x73, 0x74, 0x21];

    // Panics if not a valid UTF-8 string
    let s = String::from_utf8(v).unwrap();

    println!("{s}");
}
\`\`\`
`,title:"Creating Strings",level:2,content:`## Creating Strings

Remember, all strings are just arrays of bytes. As such, rust will also let us create strings from exactly that, vectors of bytes.

\`\`\`rust
fn main() {
    let v = vec![0x52, 0x75, 0x73, 0x74, 0x21];

    // Panics if not a valid UTF-8 string
    let s = String::from_utf8(v).unwrap();

    println!("{s}");
}
\`\`\``,frontmatter:{hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"},index:36,start:136,end:152,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/03-unicode-in-rust.md",raw:`
## Creating Strings

Remember, all strings are just arrays of bytes. As such, rust will also let us create strings from exactly that, vectors of bytes.

\`\`\`rust
fn main() {
    let v = vec![0x52, 0x75, 0x73, 0x74, 0x21];

    // Panics if not a valid UTF-8 string
    let s = String::from_utf8(v).unwrap();

    println!("{s}");
}
\`\`\`
`,title:"Creating Strings",level:2,content:`## Creating Strings

Remember, all strings are just arrays of bytes. As such, rust will also let us create strings from exactly that, vectors of bytes.

\`\`\`rust
fn main() {
    let v = vec![0x52, 0x75, 0x73, 0x74, 0x21];

    // Panics if not a valid UTF-8 string
    let s = String::from_utf8(v).unwrap();

    println!("{s}");
}
\`\`\``,frontmatter:{},index:6,start:136,end:152},filepath:"/home/ben/Workspace/demystifying-unicode/pages/03-unicode-in-rust.md",noteHTML:"",id:36,no:37},__clicksElements:[],__preloaded:!1}},{path:"38",name:"page-38",component:h$,meta:{hide:!1,srcSequence:"./pages/03-unicode-in-rust.md",slide:{raw:`
## UTF8Error

Until it panics.

\`\`\`rust
fn main() {
    let v = vec![0x80];

    // Panics
    let s = String::from_utf8(v).unwrap();
    // thread 'main' panicked at 'called \`Result::unwrap()\` on an \`Err\` value: FromUtf8Error { bytes: [128], error: Utf8Error { valid_up_to: 0, error_len: Some(1) } }', src/main.rs:5:35
}
\`\`\`
`,title:"UTF8Error",level:2,content:`## UTF8Error

Until it panics.

\`\`\`rust
fn main() {
    let v = vec![0x80];

    // Panics
    let s = String::from_utf8(v).unwrap();
    // thread 'main' panicked at 'called \`Result::unwrap()\` on an \`Err\` value: FromUtf8Error { bytes: [128], error: Utf8Error { valid_up_to: 0, error_len: Some(1) } }', src/main.rs:5:35
}
\`\`\``,frontmatter:{hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"},index:37,start:153,end:168,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/03-unicode-in-rust.md",raw:`
## UTF8Error

Until it panics.

\`\`\`rust
fn main() {
    let v = vec![0x80];

    // Panics
    let s = String::from_utf8(v).unwrap();
    // thread 'main' panicked at 'called \`Result::unwrap()\` on an \`Err\` value: FromUtf8Error { bytes: [128], error: Utf8Error { valid_up_to: 0, error_len: Some(1) } }', src/main.rs:5:35
}
\`\`\`
`,title:"UTF8Error",level:2,content:`## UTF8Error

Until it panics.

\`\`\`rust
fn main() {
    let v = vec![0x80];

    // Panics
    let s = String::from_utf8(v).unwrap();
    // thread 'main' panicked at 'called \`Result::unwrap()\` on an \`Err\` value: FromUtf8Error { bytes: [128], error: Utf8Error { valid_up_to: 0, error_len: Some(1) } }', src/main.rs:5:35
}
\`\`\``,frontmatter:{},index:7,start:153,end:168},filepath:"/home/ben/Workspace/demystifying-unicode/pages/03-unicode-in-rust.md",noteHTML:"",id:37,no:38},__clicksElements:[],__preloaded:!1}},{path:"39",name:"page-39",component:v$,meta:{hide:!1,srcSequence:"./pages/03-unicode-in-rust.md",slide:{raw:`
## Conventially UTF-8 vs. Gaurantee

With the help of bstr crate
`,title:"Conventially UTF-8 vs. Gaurantee",level:2,content:`## Conventially UTF-8 vs. Gaurantee

With the help of bstr crate`,frontmatter:{hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"},index:38,start:169,end:174,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/03-unicode-in-rust.md",raw:`
## Conventially UTF-8 vs. Gaurantee

With the help of bstr crate
`,title:"Conventially UTF-8 vs. Gaurantee",level:2,content:`## Conventially UTF-8 vs. Gaurantee

With the help of bstr crate`,frontmatter:{},index:8,start:169,end:174},filepath:"/home/ben/Workspace/demystifying-unicode/pages/03-unicode-in-rust.md",noteHTML:"",id:38,no:39},__clicksElements:[],__preloaded:!1}},{path:"40",name:"page-40",component:w$,meta:{layout:"center",hide:!1,srcSequence:"./pages/03-unicode-in-rust.md",slide:{raw:`---
layout: center
---

## Where Enforced UTF-8 can go wrong
`,title:"Where Enforced UTF-8 can go wrong",level:2,content:"## Where Enforced UTF-8 can go wrong",frontmatter:{layout:"center",hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"},index:39,start:174,end:180,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/03-unicode-in-rust.md",raw:`---
layout: center
---

## Where Enforced UTF-8 can go wrong
`,title:"Where Enforced UTF-8 can go wrong",level:2,content:"## Where Enforced UTF-8 can go wrong",frontmatter:{layout:"center"},index:9,start:174,end:180},filepath:"/home/ben/Workspace/demystifying-unicode/pages/03-unicode-in-rust.md",noteHTML:"",id:39,no:40},__clicksElements:[],__preloaded:!1}},{path:"41",name:"page-41",component:A$,meta:{hide:!1,srcSequence:"./pages/03-unicode-in-rust.md",slide:{raw:`
## Reading and Writing files

- Binary "strings" (e.g. reading/writing from disk)
`,title:"Reading and Writing files",level:2,content:`## Reading and Writing files

- Binary "strings" (e.g. reading/writing from disk)`,frontmatter:{hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"},index:40,start:181,end:186,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/03-unicode-in-rust.md",raw:`
## Reading and Writing files

- Binary "strings" (e.g. reading/writing from disk)
`,title:"Reading and Writing files",level:2,content:`## Reading and Writing files

- Binary "strings" (e.g. reading/writing from disk)`,frontmatter:{},index:10,start:181,end:186},filepath:"/home/ben/Workspace/demystifying-unicode/pages/03-unicode-in-rust.md",noteHTML:"",id:40,no:41},__clicksElements:[],__preloaded:!1}},{path:"42",name:"page-42",component:$$,meta:{hide:!1,srcSequence:"./pages/03-unicode-in-rust.md",slide:{raw:`
## Standards - and why we follow them

- JSON, but it's binary blobs as values
`,title:"Standards - and why we follow them",level:2,content:`## Standards - and why we follow them

- JSON, but it's binary blobs as values`,frontmatter:{hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"},index:41,start:187,end:192,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/03-unicode-in-rust.md",raw:`
## Standards - and why we follow them

- JSON, but it's binary blobs as values
`,title:"Standards - and why we follow them",level:2,content:`## Standards - and why we follow them

- JSON, but it's binary blobs as values`,frontmatter:{},index:11,start:187,end:192},filepath:"/home/ben/Workspace/demystifying-unicode/pages/03-unicode-in-rust.md",noteHTML:"",id:41,no:42},__clicksElements:[],__preloaded:!1}},{path:"43",name:"page-43",component:I$,meta:{hide:!1,srcSequence:"./pages/03-unicode-in-rust.md",slide:{raw:"\n## `unsafe` is unsafe\n\n- Breaking `&str`s (pushing non utf8 bytes)\n",title:"`unsafe` is unsafe",level:2,content:"## `unsafe` is unsafe\n\n- Breaking `&str`s (pushing non utf8 bytes)",frontmatter:{hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"},index:42,start:193,end:198,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/03-unicode-in-rust.md",raw:"\n## `unsafe` is unsafe\n\n- Breaking `&str`s (pushing non utf8 bytes)\n",title:"`unsafe` is unsafe",level:2,content:"## `unsafe` is unsafe\n\n- Breaking `&str`s (pushing non utf8 bytes)",frontmatter:{},index:12,start:193,end:198},filepath:"/home/ben/Workspace/demystifying-unicode/pages/03-unicode-in-rust.md",noteHTML:"",id:42,no:43},__clicksElements:[],__preloaded:!1}},{path:"44",name:"page-44",component:N$,meta:{layout:"center",hide:!1,srcSequence:"./pages/03-unicode-in-rust.md",slide:{raw:`---
layout: center
---

## Summary

\`str\` is the primitive string - a slice of bytes with gaurantees of UTF-8

\`str\` is always \`UTF-8\`

\`UTF8Error\` is because you should be handling bytes instead of strings

\`bstr\` if you want Conventially UTF-8 instead
`,title:"Summary",level:2,content:"## Summary\n\n`str` is the primitive string - a slice of bytes with gaurantees of UTF-8\n\n`str` is always `UTF-8`\n\n`UTF8Error` is because you should be handling bytes instead of strings\n\n`bstr` if you want Conventially UTF-8 instead",frontmatter:{layout:"center",hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"},index:43,start:198,end:212,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/03-unicode-in-rust.md",raw:`---
layout: center
---

## Summary

\`str\` is the primitive string - a slice of bytes with gaurantees of UTF-8

\`str\` is always \`UTF-8\`

\`UTF8Error\` is because you should be handling bytes instead of strings

\`bstr\` if you want Conventially UTF-8 instead
`,title:"Summary",level:2,content:"## Summary\n\n`str` is the primitive string - a slice of bytes with gaurantees of UTF-8\n\n`str` is always `UTF-8`\n\n`UTF8Error` is because you should be handling bytes instead of strings\n\n`bstr` if you want Conventially UTF-8 instead",frontmatter:{layout:"center"},index:13,start:198,end:212},filepath:"/home/ben/Workspace/demystifying-unicode/pages/03-unicode-in-rust.md",noteHTML:"",id:43,no:44},__clicksElements:[],__preloaded:!1}},{path:"45",name:"page-45",component:q$,meta:{layout:"cover",title:"Quirks",hide:!1,srcSequence:"./pages/04-quirks.md",slide:{raw:null,title:"Quirks",level:1,content:"# Quirks",frontmatter:{layout:"cover",title:"Quirks",hide:!1,srcSequence:"./pages/04-quirks.md"},index:44,start:0,end:6,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/04-quirks.md",raw:`---
layout: cover
---

# Quirks
`,title:"Quirks",level:1,content:"# Quirks",frontmatter:{layout:"cover",title:"Quirks"},index:0,start:0,end:6},inline:{raw:`---
src: ./pages/04-quirks.md
hide: false
---
`,content:"",frontmatter:{hide:!1},index:6,start:53,end:58},filepath:"/home/ben/Workspace/demystifying-unicode/pages/04-quirks.md",noteHTML:"",id:44,no:45},__clicksElements:[],__preloaded:!1}},{path:"46",name:"page-46",component:Y$,meta:{hide:!1,srcSequence:"./pages/04-quirks.md",slide:{raw:`
## Capitalization (AKA Casemapping and Casefolding)

All ASCII letters just so happen to be lossless when transitioning between upper and lower case versions. But this doesn't apply to all languages and characters.

Capitalization - "\\u0131" == "\\u0131".upcase.downcase. "\\u0131".upcase.downcase(:turkic)

Fun fact: There are no RTL languages that have the concept of casing (Arabic, Hebrew, Persian, and more...)
`,title:"Capitalization (AKA Casemapping and Casefolding)",level:2,content:`## Capitalization (AKA Casemapping and Casefolding)

All ASCII letters just so happen to be lossless when transitioning between upper and lower case versions. But this doesn't apply to all languages and characters.

Capitalization - "\\u0131" == "\\u0131".upcase.downcase. "\\u0131".upcase.downcase(:turkic)

Fun fact: There are no RTL languages that have the concept of casing (Arabic, Hebrew, Persian, and more...)`,frontmatter:{hide:!1,srcSequence:"./pages/04-quirks.md"},index:45,start:7,end:16,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/04-quirks.md",raw:`
## Capitalization (AKA Casemapping and Casefolding)

All ASCII letters just so happen to be lossless when transitioning between upper and lower case versions. But this doesn't apply to all languages and characters.

Capitalization - "\\u0131" == "\\u0131".upcase.downcase. "\\u0131".upcase.downcase(:turkic)

Fun fact: There are no RTL languages that have the concept of casing (Arabic, Hebrew, Persian, and more...)
`,title:"Capitalization (AKA Casemapping and Casefolding)",level:2,content:`## Capitalization (AKA Casemapping and Casefolding)

All ASCII letters just so happen to be lossless when transitioning between upper and lower case versions. But this doesn't apply to all languages and characters.

Capitalization - "\\u0131" == "\\u0131".upcase.downcase. "\\u0131".upcase.downcase(:turkic)

Fun fact: There are no RTL languages that have the concept of casing (Arabic, Hebrew, Persian, and more...)`,frontmatter:{},index:1,start:7,end:16},filepath:"/home/ben/Workspace/demystifying-unicode/pages/04-quirks.md",noteHTML:"",id:45,no:46},__clicksElements:[],__preloaded:!1}},{path:"47",name:"page-47",component:i4,meta:{hide:!1,srcSequence:"./pages/04-quirks.md",slide:{raw:"\n## Composition\n\nA[cute] E\n\n- é = `\\u00e9`\n- é = `\\u0065\\u0301` (just an `e` but with special `\\u0301` combining)\n\n```\né != é\n```\n\n`\\u003d\\u0338\\u003d` vs. `\\u2260` vs. `!=`\n\n```\n'≠=' != '≠' != '!='\n```\n\nNot not equal\n```\n=⃥\n```\n\n<footer>\n\n- Unicode combining classes: https://www.compart.com/en/unicode/combining\n- Unicode Normalization Forms: http://www.unicode.org/reports/tr15/\n- Crate unicode\\_normalization: https://docs.rs/unicode-normalization/latest/unicode_normalization/\n\n</footer>\n",title:"Composition",level:2,content:"## Composition\n\nA[cute] E\n\n- é = `\\u00e9`\n- é = `\\u0065\\u0301` (just an `e` but with special `\\u0301` combining)\n\n```\né != é\n```\n\n`\\u003d\\u0338\\u003d` vs. `\\u2260` vs. `!=`\n\n```\n'≠=' != '≠' != '!='\n```\n\nNot not equal\n```\n=⃥\n```\n\n<footer>\n\n- Unicode combining classes: https://www.compart.com/en/unicode/combining\n- Unicode Normalization Forms: http://www.unicode.org/reports/tr15/\n- Crate unicode\\_normalization: https://docs.rs/unicode-normalization/latest/unicode_normalization/\n\n</footer>",frontmatter:{hide:!1,srcSequence:"./pages/04-quirks.md"},index:46,start:17,end:48,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/04-quirks.md",raw:"\n## Composition\n\nA[cute] E\n\n- é = `\\u00e9`\n- é = `\\u0065\\u0301` (just an `e` but with special `\\u0301` combining)\n\n```\né != é\n```\n\n`\\u003d\\u0338\\u003d` vs. `\\u2260` vs. `!=`\n\n```\n'≠=' != '≠' != '!='\n```\n\nNot not equal\n```\n=⃥\n```\n\n<footer>\n\n- Unicode combining classes: https://www.compart.com/en/unicode/combining\n- Unicode Normalization Forms: http://www.unicode.org/reports/tr15/\n- Crate unicode\\_normalization: https://docs.rs/unicode-normalization/latest/unicode_normalization/\n\n</footer>\n",title:"Composition",level:2,content:"## Composition\n\nA[cute] E\n\n- é = `\\u00e9`\n- é = `\\u0065\\u0301` (just an `e` but with special `\\u0301` combining)\n\n```\né != é\n```\n\n`\\u003d\\u0338\\u003d` vs. `\\u2260` vs. `!=`\n\n```\n'≠=' != '≠' != '!='\n```\n\nNot not equal\n```\n=⃥\n```\n\n<footer>\n\n- Unicode combining classes: https://www.compart.com/en/unicode/combining\n- Unicode Normalization Forms: http://www.unicode.org/reports/tr15/\n- Crate unicode\\_normalization: https://docs.rs/unicode-normalization/latest/unicode_normalization/\n\n</footer>",frontmatter:{},index:2,start:17,end:48},filepath:"/home/ben/Workspace/demystifying-unicode/pages/04-quirks.md",noteHTML:"",id:46,no:47},__clicksElements:[],__preloaded:!1}},{path:"48",name:"page-48",component:u4,meta:{hide:!1,srcSequence:"./pages/04-quirks.md",slide:{raw:`
## Emoji Composition

<p style="font-size: 65%; line-height: 1rem;"> 😶‍🌫️ 😮‍💨 😵‍💫 ❤️‍🔥 ❤️‍🩹 👁️‍🗨️ 🫱🏻‍🫲🏼 🫱🏻‍🫲🏽 🫱🏻‍🫲🏾 🫱🏻‍🫲🏿 🫱🏼‍🫲🏻 🫱🏼‍🫲🏽 🫱🏼‍🫲🏾 🫱🏼‍🫲🏿 🫱🏽‍🫲🏻 🫱🏽‍🫲🏼 🫱🏽‍🫲🏾 🫱🏽‍🫲🏿 🫱🏾‍🫲🏻 🫱🏾‍🫲🏼 🫱🏾‍🫲🏽 🫱🏾‍🫲🏿 🫱🏿‍🫲🏻 🫱🏿‍🫲🏼 🫱🏿‍🫲🏽 🫱🏿‍🫲🏾 🧔‍♂️ 🧔🏻‍♂️ 🧔🏼‍♂️ 🧔🏽‍♂️ 🧔🏾‍♂️ 🧔🏿‍♂️ 🧔‍♀️ 🧔🏻‍♀️ 🧔🏼‍♀️ 🧔🏽‍♀️ 🧔🏾‍♀️ 🧔🏿‍♀️ 👨‍🦰 👨🏻‍🦰 👨🏼‍🦰 👨🏽‍🦰 👨🏾‍🦰 👨🏿‍🦰 👨‍🦱 👨🏻‍🦱 👨🏼‍🦱 👨🏽‍🦱 👨🏾‍🦱 👨🏿‍🦱 👨‍🦳 👨🏻‍🦳 👨🏼‍🦳 👨🏽‍🦳 👨🏾‍🦳 👨🏿‍🦳 👨‍🦲 👨🏻‍🦲 👨🏼‍🦲 👨🏽‍🦲 👨🏾‍🦲 👨🏿‍🦲 👩‍🦰 👩🏻‍🦰 👩🏼‍🦰 👩🏽‍🦰 👩🏾‍🦰 👩🏿‍🦰 🧑‍🦰 🧑🏻‍🦰 🧑🏼‍🦰 🧑🏽‍🦰 🧑🏾‍🦰 🧑🏿‍🦰 👩‍🦱 👩🏻‍🦱 👩🏼‍🦱 👩🏽‍🦱 👩🏾‍🦱 👩🏿‍🦱 🧑‍🦱 🧑🏻‍🦱 🧑🏼‍🦱 🧑🏽‍🦱 🧑🏾‍🦱 🧑🏿‍🦱 👩‍🦳 👩🏻‍🦳 👩🏼‍🦳 👩🏽‍🦳 👩🏾‍🦳 👩🏿‍🦳 🧑‍🦳 🧑🏻‍🦳 🧑🏼‍🦳 🧑🏽‍🦳 🧑🏾‍🦳 🧑🏿‍🦳 👩‍🦲 👩🏻‍🦲 👩🏼‍🦲 👩🏽‍🦲 👩🏾‍🦲 👩🏿‍🦲 🧑‍🦲 🧑🏻‍🦲 🧑🏼‍🦲 🧑🏽‍🦲 🧑🏾‍🦲 🧑🏿‍🦲 👱‍♀️ 👱🏻‍♀️ 👱🏼‍♀️ 👱🏽‍♀️ 👱🏾‍♀️ 👱🏿‍♀️ 👱‍♂️ 👱🏻‍♂️ 👱🏼‍♂️ 👱🏽‍♂️ 👱🏾‍♂️ 👱🏿‍♂️ 🙍‍♂️ 🙍🏻‍♂️ 🙍🏼‍♂️ 🙍🏽‍♂️ 🙍🏾‍♂️ 🙍🏿‍♂️ 🙍‍♀️ 🙍🏻‍♀️ 🙍🏼‍♀️ 🙍🏽‍♀️ 🙍🏾‍♀️ 🙍🏿‍♀️ 🙎‍♂️ 🙎🏻‍♂️ 🙎🏼‍♂️ 🙎🏽‍♂️ 🙎🏾‍♂️ 🙎🏿‍♂️ 🙎‍♀️ 🙎🏻‍♀️ 🙎🏼‍♀️ 🙎🏽‍♀️ 🙎🏾‍♀️ 🙎🏿‍♀️ 🙅‍♂️ 🙅🏻‍♂️ 🙅🏼‍♂️ 🙅🏽‍♂️ 🙅🏾‍♂️ 🙅🏿‍♂️ 🙅‍♀️ 🙅🏻‍♀️ 🙅🏼‍♀️ 🙅🏽‍♀️ 🙅🏾‍♀️ 🙅🏿‍♀️ 🙆‍♂️ 🙆🏻‍♂️ 🙆🏼‍♂️ 🙆🏽‍♂️ 🙆🏾‍♂️ 🙆🏿‍♂️ 🙆‍♀️ 🙆🏻‍♀️ 🙆🏼‍♀️ 🙆🏽‍♀️ 🙆🏾‍♀️ 🙆🏿‍♀️ 💁‍♂️ 💁🏻‍♂️ 💁🏼‍♂️ 💁🏽‍♂️ 💁🏾‍♂️ 💁🏿‍♂️ 💁‍♀️ 💁🏻‍♀️ 💁🏼‍♀️ 💁🏽‍♀️ 💁🏾‍♀️ 💁🏿‍♀️ 🙋‍♂️ 🙋🏻‍♂️ 🙋🏼‍♂️ 🙋🏽‍♂️ 🙋🏾‍♂️ 🙋🏿‍♂️ 🙋‍♀️ 🙋🏻‍♀️ 🙋🏼‍♀️ 🙋🏽‍♀️ 🙋🏾‍♀️ 🙋🏿‍♀️ 🧏‍♂️ 🧏🏻‍♂️ 🧏🏼‍♂️ 🧏🏽‍♂️ 🧏🏾‍♂️ 🧏🏿‍♂️ 🧏‍♀️ 🧏🏻‍♀️ 🧏🏼‍♀️ 🧏🏽‍♀️ 🧏🏾‍♀️ 🧏🏿‍♀️ 🙇‍♂️ 🙇🏻‍♂️ 🙇🏼‍♂️ 🙇🏽‍♂️ 🙇🏾‍♂️ 🙇🏿‍♂️ 🙇‍♀️ 🙇🏻‍♀️ 🙇🏼‍♀️ 🙇🏽‍♀️ 🙇🏾‍♀️ 🙇🏿‍♀️ 🤦‍♂️ 🤦🏻‍♂️ 🤦🏼‍♂️ 🤦🏽‍♂️ 🤦🏾‍♂️ 🤦🏿‍♂️ 🤦‍♀️ 🤦🏻‍♀️ 🤦🏼‍♀️ 🤦🏽‍♀️ 🤦🏾‍♀️ 🤦🏿‍♀️ 🤷‍♂️ 🤷🏻‍♂️ 🤷🏼‍♂️ 🤷🏽‍♂️ 🤷🏾‍♂️ 🤷🏿‍♂️ 🤷‍♀️ 🤷🏻‍♀️ 🤷🏼‍♀️ 🤷🏽‍♀️ 🤷🏾‍♀️ 🤷🏿‍♀️ 🧑‍⚕️ 🧑🏻‍⚕️ 🧑🏼‍⚕️ 🧑🏽‍⚕️ 🧑🏾‍⚕️ 🧑🏿‍⚕️ 👨‍⚕️ 👨🏻‍⚕️ 👨🏼‍⚕️ 👨🏽‍⚕️ 👨🏾‍⚕️ 👨🏿‍⚕️ 👩‍⚕️ 👩🏻‍⚕️ 👩🏼‍⚕️ 👩🏽‍⚕️ 👩🏾‍⚕️ 👩🏿‍⚕️ 🧑‍🎓 🧑🏻‍🎓 🧑🏼‍🎓 🧑🏽‍🎓 🧑🏾‍🎓 🧑🏿‍🎓 👨‍🎓 👨🏻‍🎓 👨🏼‍🎓 👨🏽‍🎓 👨🏾‍🎓 👨🏿‍🎓 👩‍🎓 👩🏻‍🎓 👩🏼‍🎓 👩🏽‍🎓 👩🏾‍🎓 👩🏿‍🎓 🧑‍🏫 🧑🏻‍🏫 🧑🏼‍🏫 🧑🏽‍🏫 🧑🏾‍🏫 🧑🏿‍🏫 👨‍🏫 👨🏻‍🏫 👨🏼‍🏫 👨🏽‍🏫 👨🏾‍🏫 👨🏿‍🏫 👩‍🏫 👩🏻‍🏫 👩🏼‍🏫 👩🏽‍🏫 👩🏾‍🏫 👩🏿‍🏫 🧑‍⚖️ 🧑🏻‍⚖️ 🧑🏼‍⚖️ 🧑🏽‍⚖️ 🧑🏾‍⚖️ 🧑🏿‍⚖️ 👨‍⚖️ 👨🏻‍⚖️ 👨🏼‍⚖️ 👨🏽‍⚖️ 👨🏾‍⚖️ 👨🏿‍⚖️ 👩‍⚖️ 👩🏻‍⚖️ 👩🏼‍⚖️ 👩🏽‍⚖️ 👩🏾‍⚖️ 👩🏿‍⚖️ 🧑‍🌾 🧑🏻‍🌾 🧑🏼‍🌾 🧑🏽‍🌾 🧑🏾‍🌾 🧑🏿‍🌾 👨‍🌾 👨🏻‍🌾 👨🏼‍🌾 👨🏽‍🌾 👨🏾‍🌾 👨🏿‍🌾 👩‍🌾 👩🏻‍🌾 👩🏼‍🌾 👩🏽‍🌾 👩🏾‍🌾 👩🏿‍🌾 🧑‍🍳 🧑🏻‍🍳 🧑🏼‍🍳 🧑🏽‍🍳 🧑🏾‍🍳 🧑🏿‍🍳 👨‍🍳 👨🏻‍🍳 👨🏼‍🍳 👨🏽‍🍳 👨🏾‍🍳 👨🏿‍🍳 👩‍🍳 👩🏻‍🍳 👩🏼‍🍳 👩🏽‍🍳 👩🏾‍🍳 👩🏿‍🍳 🧑‍🔧 🧑🏻‍🔧 🧑🏼‍🔧 🧑🏽‍🔧 🧑🏾‍🔧 🧑🏿‍🔧 👨‍🔧 👨🏻‍🔧 👨🏼‍🔧 👨🏽‍🔧 👨🏾‍🔧 👨🏿‍🔧 👩‍🔧 👩🏻‍🔧 👩🏼‍🔧 👩🏽‍🔧 👩🏾‍🔧 👩🏿‍🔧 🧑‍🏭 🧑🏻‍🏭 🧑🏼‍🏭 🧑🏽‍🏭 🧑🏾‍🏭 🧑🏿‍🏭 👨‍🏭 👨🏻‍🏭 👨🏼‍🏭 👨🏽‍🏭 👨🏾‍🏭 👨🏿‍🏭 👩‍🏭 👩🏻‍🏭 👩🏼‍🏭 👩🏽‍🏭 👩🏾‍🏭 👩🏿‍🏭 🧑‍💼 🧑🏻‍💼 🧑🏼‍💼 🧑🏽‍💼 🧑🏾‍💼 🧑🏿‍💼 👨‍💼 👨🏻‍💼 👨🏼‍💼 👨🏽‍💼 👨🏾‍💼 👨🏿‍💼 👩‍💼 👩🏻‍💼 👩🏼‍💼 👩🏽‍💼 👩🏾‍💼 👩🏿‍💼 🧑‍🔬 🧑🏻‍🔬 🧑🏼‍🔬 🧑🏽‍🔬 🧑🏾‍🔬 🧑🏿‍🔬 👨‍🔬 👨🏻‍🔬 👨🏼‍🔬 👨🏽‍🔬 👨🏾‍🔬 👨🏿‍🔬 👩‍🔬 👩🏻‍🔬 👩🏼‍🔬 👩🏽‍🔬 👩🏾‍🔬 👩🏿‍🔬 🧑‍💻 🧑🏻‍💻 🧑🏼‍💻 🧑🏽‍💻 🧑🏾‍💻 🧑🏿‍💻 👨‍💻 👨🏻‍💻 👨🏼‍💻 👨🏽‍💻 👨🏾‍💻 👨🏿‍💻 👩‍💻 👩🏻‍💻 👩🏼‍💻 👩🏽‍💻 👩🏾‍💻 👩🏿‍💻 🧑‍🎤 🧑🏻‍🎤 🧑🏼‍🎤 🧑🏽‍🎤 🧑🏾‍🎤 🧑🏿‍🎤 👨‍🎤 👨🏻‍🎤 👨🏼‍🎤 👨🏽‍🎤 👨🏾‍🎤 👨🏿‍🎤 👩‍🎤 👩🏻‍🎤 👩🏼‍🎤 👩🏽‍🎤 👩🏾‍🎤 👩🏿‍🎤 🧑‍🎨 🧑🏻‍🎨 🧑🏼‍🎨 🧑🏽‍🎨 🧑🏾‍🎨 🧑🏿‍🎨 👨‍🎨 👨🏻‍🎨 👨🏼‍🎨 👨🏽‍🎨 👨🏾‍🎨 👨🏿‍🎨 👩‍🎨 👩🏻‍🎨 👩🏼‍🎨 👩🏽‍🎨 👩🏾‍🎨 👩🏿‍🎨 🧑‍✈️ 🧑🏻‍✈️ 🧑🏼‍✈️ 🧑🏽‍✈️ 🧑🏾‍✈️ 🧑🏿‍✈️ 👨‍✈️ 👨🏻‍✈️ 👨🏼‍✈️ 👨🏽‍✈️ 👨🏾‍✈️ 👨🏿‍✈️ 👩‍✈️ 👩🏻‍✈️ 👩🏼‍✈️ 👩🏽‍✈️ 👩🏾‍✈️ 👩🏿‍✈️ 🧑‍🚀 🧑🏻‍🚀 🧑🏼‍🚀 🧑🏽‍🚀 🧑🏾‍🚀 🧑🏿‍🚀 👨‍🚀 👨🏻‍🚀 👨🏼‍🚀 👨🏽‍🚀 👨🏾‍🚀 👨🏿‍🚀 👩‍🚀 👩🏻‍🚀 👩🏼‍🚀 👩🏽‍🚀 👩🏾‍🚀 👩🏿‍🚀 🧑‍🚒 🧑🏻‍🚒 🧑🏼‍🚒 🧑🏽‍🚒 🧑🏾‍🚒 🧑🏿‍🚒 👨‍🚒 👨🏻‍🚒 👨🏼‍🚒 👨🏽‍🚒 👨🏾‍🚒 👨🏿‍🚒 👩‍🚒 👩🏻‍🚒 👩🏼‍🚒 👩🏽‍🚒 👩🏾‍🚒 👩🏿‍🚒 👮‍♂️ 👮🏻‍♂️ 👮🏼‍♂️ 👮🏽‍♂️ 👮🏾‍♂️ 👮🏿‍♂️ 👮‍♀️ 👮🏻‍♀️ 👮🏼‍♀️ 👮🏽‍♀️ 👮🏾‍♀️ 👮🏿‍♀️ 🕵️‍♂️ 🕵🏻‍♂️ 🕵🏼‍♂️ 🕵🏽‍♂️ 🕵🏾‍♂️ 🕵🏿‍♂️ 🕵️‍♀️ 🕵🏻‍♀️ 🕵🏼‍♀️ 🕵🏽‍♀️ 🕵🏾‍♀️ 🕵🏿‍♀️ 💂‍♂️ 💂🏻‍♂️ 💂🏼‍♂️ 💂🏽‍♂️ 💂🏾‍♂️ 💂🏿‍♂️ 💂‍♀️ 💂🏻‍♀️ 💂🏼‍♀️ 💂🏽‍♀️ 💂🏾‍♀️ 💂🏿‍♀️ 👷‍♂️ 👷🏻‍♂️ 👷🏼‍♂️ 👷🏽‍♂️ 👷🏾‍♂️ 👷🏿‍♂️ 👷‍♀️ 👷🏻‍♀️ 👷🏼‍♀️ 👷🏽‍♀️ 👷🏾‍♀️ 👷🏿‍♀️ 👳‍♂️ 👳🏻‍♂️ 👳🏼‍♂️ 👳🏽‍♂️ 👳🏾‍♂️ 👳🏿‍♂️ 👳‍♀️ 👳🏻‍♀️ 👳🏼‍♀️ 👳🏽‍♀️ 👳🏾‍♀️ 👳🏿‍♀️ 🤵‍♂️ 🤵🏻‍♂️ 🤵🏼‍♂️ 🤵🏽‍♂️ 🤵🏾‍♂️ 🤵🏿‍♂️ 🤵‍♀️ 🤵🏻‍♀️ 🤵🏼‍♀️ 🤵🏽‍♀️ 🤵🏾‍♀️ 🤵🏿‍♀️ 👰‍♂️ 👰🏻‍♂️ 👰🏼‍♂️ 👰🏽‍♂️ 👰🏾‍♂️ 👰🏿‍♂️ 👰‍♀️ 👰🏻‍♀️ 👰🏼‍♀️ 👰🏽‍♀️ 👰🏾‍♀️ 👰🏿‍♀️ 👩‍🍼 👩🏻‍🍼 👩🏼‍🍼 👩🏽‍🍼 👩🏾‍🍼 👩🏿‍🍼 👨‍🍼 👨🏻‍🍼 👨🏼‍🍼 👨🏽‍🍼 👨🏾‍🍼 👨🏿‍🍼 🧑‍🍼 🧑🏻‍🍼 🧑🏼‍🍼 🧑🏽‍🍼 🧑🏾‍🍼 🧑🏿‍🍼 🧑‍🎄 🧑🏻‍🎄 🧑🏼‍🎄 🧑🏽‍🎄 🧑🏾‍🎄 🧑🏿‍🎄 🦸‍♂️ 🦸🏻‍♂️ 🦸🏼‍♂️ 🦸🏽‍♂️ 🦸🏾‍♂️ 🦸🏿‍♂️ 🦸‍♀️ 🦸🏻‍♀️ 🦸🏼‍♀️ 🦸🏽‍♀️ 🦸🏾‍♀️ 🦸🏿‍♀️ 🦹‍♂️ 🦹🏻‍♂️ 🦹🏼‍♂️ 🦹🏽‍♂️ 🦹🏾‍♂️ 🦹🏿‍♂️ 🦹‍♀️ 🦹🏻‍♀️ 🦹🏼‍♀️ 🦹🏽‍♀️ 🦹🏾‍♀️ 🦹🏿‍♀️ 🧙‍♂️ 🧙🏻‍♂️ 🧙🏼‍♂️ 🧙🏽‍♂️ 🧙🏾‍♂️ 🧙🏿‍♂️ 🧙‍♀️ 🧙🏻‍♀️ 🧙🏼‍♀️ 🧙🏽‍♀️ 🧙🏾‍♀️ 🧙🏿‍♀️ 🧚‍♂️ 🧚🏻‍♂️ 🧚🏼‍♂️ 🧚🏽‍♂️ 🧚🏾‍♂️ 🧚🏿‍♂️ 🧚‍♀️ 🧚🏻‍♀️ 🧚🏼‍♀️ 🧚🏽‍♀️ 🧚🏾‍♀️ 🧚🏿‍♀️ 🧛‍♂️ 🧛🏻‍♂️ 🧛🏼‍♂️ 🧛🏽‍♂️ 🧛🏾‍♂️ 🧛🏿‍♂️ 🧛‍♀️ 🧛🏻‍♀️ 🧛🏼‍♀️ 🧛🏽‍♀️ 🧛🏾‍♀️ 🧛🏿‍♀️ 🧜‍♂️ 🧜🏻‍♂️ 🧜🏼‍♂️ 🧜🏽‍♂️ 🧜🏾‍♂️ 🧜🏿‍♂️ 🧜‍♀️ 🧜🏻‍♀️ 🧜🏼‍♀️ 🧜🏽‍♀️ 🧜🏾‍♀️ 🧜🏿‍♀️ 🧝‍♂️ 🧝🏻‍♂️ 🧝🏼‍♂️ 🧝🏽‍♂️ 🧝🏾‍♂️ 🧝🏿‍♂️ 🧝‍♀️ 🧝🏻‍♀️ 🧝🏼‍♀️ 🧝🏽‍♀️ 🧝🏾‍♀️ 🧝🏿‍♀️ 🧞‍♂️ 🧞‍♀️ 🧟‍♂️ 🧟‍♀️ 💆‍♂️ 💆🏻‍♂️ 💆🏼‍♂️ 💆🏽‍♂️ 💆🏾‍♂️ 💆🏿‍♂️ 💆‍♀️ 💆🏻‍♀️ 💆🏼‍♀️ 💆🏽‍♀️ 💆🏾‍♀️ 💆🏿‍♀️ 💇‍♂️ 💇🏻‍♂️ 💇🏼‍♂️ 💇🏽‍♂️ 💇🏾‍♂️ 💇🏿‍♂️ 💇‍♀️ 💇🏻‍♀️ 💇🏼‍♀️ 💇🏽‍♀️ 💇🏾‍♀️ 💇🏿‍♀️ 🚶‍♂️ 🚶🏻‍♂️ 🚶🏼‍♂️ 🚶🏽‍♂️ 🚶🏾‍♂️ 🚶🏿‍♂️ 🚶‍♀️ 🚶🏻‍♀️ 🚶🏼‍♀️ 🚶🏽‍♀️ 🚶🏾‍♀️ 🚶🏿‍♀️ 🧍‍♂️ 🧍🏻‍♂️ 🧍🏼‍♂️ 🧍🏽‍♂️ 🧍🏾‍♂️ 🧍🏿‍♂️ 🧍‍♀️ 🧍🏻‍♀️ 🧍🏼‍♀️ 🧍🏽‍♀️ 🧍🏾‍♀️ 🧍🏿‍♀️ 🧎‍♂️ 🧎🏻‍♂️ 🧎🏼‍♂️ 🧎🏽‍♂️ 🧎🏾‍♂️ 🧎🏿‍♂️ 🧎‍♀️ 🧎🏻‍♀️ 🧎🏼‍♀️ 🧎🏽‍♀️ 🧎🏾‍♀️ 🧎🏿‍♀️ 🧑‍🦯 🧑🏻‍🦯 🧑🏼‍🦯 🧑🏽‍🦯 🧑🏾‍🦯 🧑🏿‍🦯 👨‍🦯 👨🏻‍🦯 👨🏼‍🦯 👨🏽‍🦯 👨🏾‍🦯 👨🏿‍🦯 👩‍🦯 👩🏻‍🦯 👩🏼‍🦯 👩🏽‍🦯 👩🏾‍🦯 👩🏿‍🦯 🧑‍🦼 🧑🏻‍🦼 🧑🏼‍🦼 🧑🏽‍🦼 🧑🏾‍🦼 🧑🏿‍🦼 👨‍🦼 👨🏻‍🦼 👨🏼‍🦼 👨🏽‍🦼 👨🏾‍🦼 👨🏿‍🦼 👩‍🦼 👩🏻‍🦼 👩🏼‍🦼 👩🏽‍🦼 👩🏾‍🦼 👩🏿‍🦼 🧑‍🦽 🧑🏻‍🦽 🧑🏼‍🦽 🧑🏽‍🦽 🧑🏾‍🦽 🧑🏿‍🦽 👨‍🦽 👨🏻‍🦽 👨🏼‍🦽 👨🏽‍🦽 👨🏾‍🦽 👨🏿‍🦽 👩‍🦽 👩🏻‍🦽 👩🏼‍🦽 👩🏽‍🦽 👩🏾‍🦽 👩🏿‍🦽 🏃‍♂️ 🏃🏻‍♂️ 🏃🏼‍♂️ 🏃🏽‍♂️ 🏃🏾‍♂️ 🏃🏿‍♂️ 🏃‍♀️ 🏃🏻‍♀️ 🏃🏼‍♀️ 🏃🏽‍♀️ 🏃🏾‍♀️ 🏃🏿‍♀️ 👯‍♂️ 👯‍♀️ 🧖‍♂️ 🧖🏻‍♂️ 🧖🏼‍♂️ 🧖🏽‍♂️ 🧖🏾‍♂️ 🧖🏿‍♂️ 🧖‍♀️ 🧖🏻‍♀️ 🧖🏼‍♀️ 🧖🏽‍♀️ 🧖🏾‍♀️ 🧖🏿‍♀️ 🧗‍♂️ 🧗🏻‍♂️ 🧗🏼‍♂️ 🧗🏽‍♂️ 🧗🏾‍♂️ 🧗🏿‍♂️ 🧗‍♀️ 🧗🏻‍♀️ 🧗🏼‍♀️ 🧗🏽‍♀️ 🧗🏾‍♀️ 🧗🏿‍♀️ 🏌️‍♂️ 🏌🏻‍♂️ 🏌🏼‍♂️ 🏌🏽‍♂️ 🏌🏾‍♂️ 🏌🏿‍♂️ 🏌️‍♀️ 🏌🏻‍♀️ 🏌🏼‍♀️ 🏌🏽‍♀️ 🏌🏾‍♀️ 🏌🏿‍♀️ 🏄‍♂️ 🏄🏻‍♂️ 🏄🏼‍♂️ 🏄🏽‍♂️ 🏄🏾‍♂️ 🏄🏿‍♂️ 🏄‍♀️ 🏄🏻‍♀️ 🏄🏼‍♀️ 🏄🏽‍♀️ 🏄🏾‍♀️ 🏄🏿‍♀️ 🚣‍♂️ 🚣🏻‍♂️ 🚣🏼‍♂️ 🚣🏽‍♂️ 🚣🏾‍♂️ 🚣🏿‍♂️ 🚣‍♀️ 🚣🏻‍♀️ 🚣🏼‍♀️ 🚣🏽‍♀️ 🚣🏾‍♀️ 🚣🏿‍♀️ 🏊‍♂️ 🏊🏻‍♂️ 🏊🏼‍♂️ 🏊🏽‍♂️ 🏊🏾‍♂️ 🏊🏿‍♂️ 🏊‍♀️ 🏊🏻‍♀️ 🏊🏼‍♀️ 🏊🏽‍♀️ 🏊🏾‍♀️ 🏊🏿‍♀️ ⛹️‍♂️ ⛹🏻‍♂️ ⛹🏼‍♂️ ⛹🏽‍♂️ ⛹🏾‍♂️ ⛹🏿‍♂️ ⛹️‍♀️ ⛹🏻‍♀️ ⛹🏼‍♀️ ⛹🏽‍♀️ ⛹🏾‍♀️ ⛹🏿‍♀️ 🏋️‍♂️ 🏋🏻‍♂️ 🏋🏼‍♂️ 🏋🏽‍♂️ 🏋🏾‍♂️ 🏋🏿‍♂️ 🏋️‍♀️ 🏋🏻‍♀️ 🏋🏼‍♀️ 🏋🏽‍♀️ 🏋🏾‍♀️ 🏋🏿‍♀️ 🚴‍♂️ 🚴🏻‍♂️ 🚴🏼‍♂️ 🚴🏽‍♂️ 🚴🏾‍♂️ 🚴🏿‍♂️ 🚴‍♀️ 🚴🏻‍♀️ 🚴🏼‍♀️ 🚴🏽‍♀️ 🚴🏾‍♀️ 🚴🏿‍♀️ 🚵‍♂️ 🚵🏻‍♂️ 🚵🏼‍♂️ 🚵🏽‍♂️ 🚵🏾‍♂️ 🚵🏿‍♂️ 🚵‍♀️ 🚵🏻‍♀️ 🚵🏼‍♀️ 🚵🏽‍♀️ 🚵🏾‍♀️ 🚵🏿‍♀️ 🤸‍♂️ 🤸🏻‍♂️ 🤸🏼‍♂️ 🤸🏽‍♂️ 🤸🏾‍♂️ 🤸🏿‍♂️ 🤸‍♀️ 🤸🏻‍♀️ 🤸🏼‍♀️ 🤸🏽‍♀️ 🤸🏾‍♀️ 🤸🏿‍♀️ 🤼‍♂️ 🤼‍♀️ 🤽‍♂️ 🤽🏻‍♂️ 🤽🏼‍♂️ 🤽🏽‍♂️ 🤽🏾‍♂️ 🤽🏿‍♂️ 🤽‍♀️ 🤽🏻‍♀️ 🤽🏼‍♀️ 🤽🏽‍♀️ 🤽🏾‍♀️ 🤽🏿‍♀️ 🤾‍♂️ 🤾🏻‍♂️ 🤾🏼‍♂️ 🤾🏽‍♂️ 🤾🏾‍♂️ 🤾🏿‍♂️ 🤾‍♀️ 🤾🏻‍♀️ 🤾🏼‍♀️ 🤾🏽‍♀️ 🤾🏾‍♀️ 🤾🏿‍♀️ 🤹‍♂️ 🤹🏻‍♂️ 🤹🏼‍♂️ 🤹🏽‍♂️ 🤹🏾‍♂️ 🤹🏿‍♂️ 🤹‍♀️ 🤹🏻‍♀️ 🤹🏼‍♀️ 🤹🏽‍♀️ 🤹🏾‍♀️ 🤹🏿‍♀️ 🧘‍♂️ 🧘🏻‍♂️ 🧘🏼‍♂️ 🧘🏽‍♂️ 🧘🏾‍♂️ 🧘🏿‍♂️ 🧘‍♀️ 🧘🏻‍♀️ 🧘🏼‍♀️ 🧘🏽‍♀️ 🧘🏾‍♀️ 🧘🏿‍♀️ 🧑‍🤝‍🧑 🧑🏻‍🤝‍🧑🏻 🧑🏻‍🤝‍🧑🏼 🧑🏻‍🤝‍🧑🏽 🧑🏻‍🤝‍🧑🏾 🧑🏻‍🤝‍🧑🏿 🧑🏼‍🤝‍🧑🏻 🧑🏼‍🤝‍🧑🏼 🧑🏼‍🤝‍🧑🏽 🧑🏼‍🤝‍🧑🏾 🧑🏼‍🤝‍🧑🏿 🧑🏽‍🤝‍🧑🏻 🧑🏽‍🤝‍🧑🏼 🧑🏽‍🤝‍🧑🏽 🧑🏽‍🤝‍🧑🏾 🧑🏽‍🤝‍🧑🏿 🧑🏾‍🤝‍🧑🏻 🧑🏾‍🤝‍🧑🏼 🧑🏾‍🤝‍🧑🏽 🧑🏾‍🤝‍🧑🏾 🧑🏾‍🤝‍🧑🏿 🧑🏿‍🤝‍🧑🏻 🧑🏿‍🤝‍🧑🏼 🧑🏿‍🤝‍🧑🏽 🧑🏿‍🤝‍🧑🏾 🧑🏿‍🤝‍🧑🏿 👩🏻‍🤝‍👩🏼 👩🏻‍🤝‍👩🏽 👩🏻‍🤝‍👩🏾 👩🏻‍🤝‍👩🏿 👩🏼‍🤝‍👩🏻 👩🏼‍🤝‍👩🏽 👩🏼‍🤝‍👩🏾 👩🏼‍🤝‍👩🏿 👩🏽‍🤝‍👩🏻 👩🏽‍🤝‍👩🏼 👩🏽‍🤝‍👩🏾 👩🏽‍🤝‍👩🏿 👩🏾‍🤝‍👩🏻 👩🏾‍🤝‍👩🏼 👩🏾‍🤝‍👩🏽 👩🏾‍🤝‍👩🏿 👩🏿‍🤝‍👩🏻 👩🏿‍🤝‍👩🏼 👩🏿‍🤝‍👩🏽 👩🏿‍🤝‍👩🏾 👩🏻‍🤝‍👨🏼 👩🏻‍🤝‍👨🏽 👩🏻‍🤝‍👨🏾 👩🏻‍🤝‍👨🏿 👩🏼‍🤝‍👨🏻 👩🏼‍🤝‍👨🏽 👩🏼‍🤝‍👨🏾 👩🏼‍🤝‍👨🏿 👩🏽‍🤝‍👨🏻 👩🏽‍🤝‍👨🏼 👩🏽‍🤝‍👨🏾 👩🏽‍🤝‍👨🏿 👩🏾‍🤝‍👨🏻 👩🏾‍🤝‍👨🏼 👩🏾‍🤝‍👨🏽 👩🏾‍🤝‍👨🏿 👩🏿‍🤝‍👨🏻 👩🏿‍🤝‍👨🏼 👩🏿‍🤝‍👨🏽 👩🏿‍🤝‍👨🏾 👨🏻‍🤝‍👨🏼 👨🏻‍🤝‍👨🏽 👨🏻‍🤝‍👨🏾 👨🏻‍🤝‍👨🏿 👨🏼‍🤝‍👨🏻 👨🏼‍🤝‍👨🏽 👨🏼‍🤝‍👨🏾 👨🏼‍🤝‍👨🏿 👨🏽‍🤝‍👨🏻 👨🏽‍🤝‍👨🏼 👨🏽‍🤝‍👨🏾 👨🏽‍🤝‍👨🏿 👨🏾‍🤝‍👨🏻 👨🏾‍🤝‍👨🏼 👨🏾‍🤝‍👨🏽 👨🏾‍🤝‍👨🏿 👨🏿‍🤝‍👨🏻 👨🏿‍🤝‍👨🏼 👨🏿‍🤝‍👨🏽 👨🏿‍🤝‍👨🏾 💏 🧑🏻‍❤️‍💋‍🧑🏼 🧑🏻‍❤️‍💋‍🧑🏽 🧑🏻‍❤️‍💋‍🧑🏾 🧑🏻‍❤️‍💋‍🧑🏿 🧑🏼‍❤️‍💋‍🧑🏻 🧑🏼‍❤️‍💋‍🧑🏽 🧑🏼‍❤️‍💋‍🧑🏾 🧑🏼‍❤️‍💋‍🧑🏿 🧑🏽‍❤️‍💋‍🧑🏻 🧑🏽‍❤️‍💋‍🧑🏼 🧑🏽‍❤️‍💋‍🧑🏾 🧑🏽‍❤️‍💋‍🧑🏿 🧑🏾‍❤️‍💋‍🧑🏻 🧑🏾‍❤️‍💋‍🧑🏼 🧑🏾‍❤️‍💋‍🧑🏽 🧑🏾‍❤️‍💋‍🧑🏿 🧑🏿‍❤️‍💋‍🧑🏻 🧑🏿‍❤️‍💋‍🧑🏼 🧑🏿‍❤️‍💋‍🧑🏽 🧑🏿‍❤️‍💋‍🧑🏾 👩‍❤️‍💋‍👨 👩🏻‍❤️‍💋‍👨🏻 👩🏻‍❤️‍💋‍👨🏼 👩🏻‍❤️‍💋‍👨🏽 👩🏻‍❤️‍💋‍👨🏾 👩🏻‍❤️‍💋‍👨🏿 👩🏼‍❤️‍💋‍👨🏻 👩🏼‍❤️‍💋‍👨🏼 👩🏼‍❤️‍💋‍👨🏽 👩🏼‍❤️‍💋‍👨🏾 👩🏼‍❤️‍💋‍👨🏿 👩🏽‍❤️‍💋‍👨🏻 👩🏽‍❤️‍💋‍👨🏼 👩🏽‍❤️‍💋‍👨🏽 👩🏽‍❤️‍💋‍👨🏾 👩🏽‍❤️‍💋‍👨🏿 👩🏾‍❤️‍💋‍👨🏻 👩🏾‍❤️‍💋‍👨🏼 👩🏾‍❤️‍💋‍👨🏽 👩🏾‍❤️‍💋‍👨🏾 👩🏾‍❤️‍💋‍👨🏿 👩🏿‍❤️‍💋‍👨🏻 👩🏿‍❤️‍💋‍👨🏼 👩🏿‍❤️‍💋‍👨🏽 👩🏿‍❤️‍💋‍👨🏾 👩🏿‍❤️‍💋‍👨🏿 👨‍❤️‍💋‍👨 👨🏻‍❤️‍💋‍👨🏻 👨🏻‍❤️‍💋‍👨🏼 👨🏻‍❤️‍💋‍👨🏽 👨🏻‍❤️‍💋‍👨🏾 👨🏻‍❤️‍💋‍👨🏿 👨🏼‍❤️‍💋‍👨🏻 👨🏼‍❤️‍💋‍👨🏼 👨🏼‍❤️‍💋‍👨🏽 👨🏼‍❤️‍💋‍👨🏾 👨🏼‍❤️‍💋‍👨🏿 👨🏽‍❤️‍💋‍👨🏻 👨🏽‍❤️‍💋‍👨🏼 👨🏽‍❤️‍💋‍👨🏽 👨🏽‍❤️‍💋‍👨🏾 👨🏽‍❤️‍💋‍👨🏿 👨🏾‍❤️‍💋‍👨🏻 👨🏾‍❤️‍💋‍👨🏼 👨🏾‍❤️‍💋‍👨🏽 👨🏾‍❤️‍💋‍👨🏾 👨🏾‍❤️‍💋‍👨🏿 👨🏿‍❤️‍💋‍👨🏻 👨🏿‍❤️‍💋‍👨🏼 👨🏿‍❤️‍💋‍👨🏽 👨🏿‍❤️‍💋‍👨🏾 👨🏿‍❤️‍💋‍👨🏿 👩‍❤️‍💋‍👩 👩🏻‍❤️‍💋‍👩🏻 👩🏻‍❤️‍💋‍👩🏼 👩🏻‍❤️‍💋‍👩🏽 👩🏻‍❤️‍💋‍👩🏾 👩🏻‍❤️‍💋‍👩🏿 👩🏼‍❤️‍💋‍👩🏻 👩🏼‍❤️‍💋‍👩🏼 👩🏼‍❤️‍💋‍👩🏽 👩🏼‍❤️‍💋‍👩🏾 👩🏼‍❤️‍💋‍👩🏿 👩🏽‍❤️‍💋‍👩🏻 👩🏽‍❤️‍💋‍👩🏼 👩🏽‍❤️‍💋‍👩🏽 👩🏽‍❤️‍💋‍👩🏾 👩🏽‍❤️‍💋‍👩🏿 👩🏾‍❤️‍💋‍👩🏻 👩🏾‍❤️‍💋‍👩🏼 👩🏾‍❤️‍💋‍👩🏽 👩🏾‍❤️‍💋‍👩🏾 👩🏾‍❤️‍💋‍👩🏿 👩🏿‍❤️‍💋‍👩🏻 👩🏿‍❤️‍💋‍👩🏼 👩🏿‍❤️‍💋‍👩🏽 👩🏿‍❤️‍💋‍👩🏾 👩🏿‍❤️‍💋‍👩🏿 💑 🧑🏻‍❤️‍🧑🏼 🧑🏻‍❤️‍🧑🏽 🧑🏻‍❤️‍🧑🏾 🧑🏻‍❤️‍🧑🏿 🧑🏼‍❤️‍🧑🏻 🧑🏼‍❤️‍🧑🏽 🧑🏼‍❤️‍🧑🏾 🧑🏼‍❤️‍🧑🏿 🧑🏽‍❤️‍🧑🏻 🧑🏽‍❤️‍🧑🏼 🧑🏽‍❤️‍🧑🏾 🧑🏽‍❤️‍🧑🏿 🧑🏾‍❤️‍🧑🏻 🧑🏾‍❤️‍🧑🏼 🧑🏾‍❤️‍🧑🏽 🧑🏾‍❤️‍🧑🏿 🧑🏿‍❤️‍🧑🏻 🧑🏿‍❤️‍🧑🏼 🧑🏿‍❤️‍🧑🏽 🧑🏿‍❤️‍🧑🏾 👩‍❤️‍👨 👩🏻‍❤️‍👨🏻 👩🏻‍❤️‍👨🏼 👩🏻‍❤️‍👨🏽 👩🏻‍❤️‍👨🏾 👩🏻‍❤️‍👨🏿 👩🏼‍❤️‍👨🏻 👩🏼‍❤️‍👨🏼 👩🏼‍❤️‍👨🏽 👩🏼‍❤️‍👨🏾 👩🏼‍❤️‍👨🏿 👩🏽‍❤️‍👨🏻 👩🏽‍❤️‍👨🏼 👩🏽‍❤️‍👨🏽 👩🏽‍❤️‍👨🏾 👩🏽‍❤️‍👨🏿 👩🏾‍❤️‍👨🏻 👩🏾‍❤️‍👨🏼 👩🏾‍❤️‍👨🏽 👩🏾‍❤️‍👨🏾 👩🏾‍❤️‍👨🏿 👩🏿‍❤️‍👨🏻 👩🏿‍❤️‍👨🏼 👩🏿‍❤️‍👨🏽 👩🏿‍❤️‍👨🏾 👩🏿‍❤️‍👨🏿 👨‍❤️‍👨 👨🏻‍❤️‍👨🏻 👨🏻‍❤️‍👨🏼 👨🏻‍❤️‍👨🏽 👨🏻‍❤️‍👨🏾 👨🏻‍❤️‍👨🏿 👨🏼‍❤️‍👨🏻 👨🏼‍❤️‍👨🏼 👨🏼‍❤️‍👨🏽 👨🏼‍❤️‍👨🏾 👨🏼‍❤️‍👨🏿 👨🏽‍❤️‍👨🏻 👨🏽‍❤️‍👨🏼 👨🏽‍❤️‍👨🏽 👨🏽‍❤️‍👨🏾 👨🏽‍❤️‍👨🏿 👨🏾‍❤️‍👨🏻 👨🏾‍❤️‍👨🏼 👨🏾‍❤️‍👨🏽 👨🏾‍❤️‍👨🏾 👨🏾‍❤️‍👨🏿 👨🏿‍❤️‍👨🏻 👨🏿‍❤️‍👨🏼 👨🏿‍❤️‍👨🏽 👨🏿‍❤️‍👨🏾 👨🏿‍❤️‍👨🏿 👩‍❤️‍👩 👩🏻‍❤️‍👩🏻 👩🏻‍❤️‍👩🏼 👩🏻‍❤️‍👩🏽 👩🏻‍❤️‍👩🏾 👩🏻‍❤️‍👩🏿 👩🏼‍❤️‍👩🏻 👩🏼‍❤️‍👩🏼 👩🏼‍❤️‍👩🏽 👩🏼‍❤️‍👩🏾 👩🏼‍❤️‍👩🏿 👩🏽‍❤️‍👩🏻 👩🏽‍❤️‍👩🏼 👩🏽‍❤️‍👩🏽 👩🏽‍❤️‍👩🏾 👩🏽‍❤️‍👩🏿 👩🏾‍❤️‍👩🏻 👩🏾‍❤️‍👩🏼 👩🏾‍❤️‍👩🏽 👩🏾‍❤️‍👩🏾 👩🏾‍❤️‍👩🏿 👩🏿‍❤️‍👩🏻 👩🏿‍❤️‍👩🏼 👩🏿‍❤️‍👩🏽 👩🏿‍❤️‍👩🏾 👩🏿‍❤️‍👩🏿 👪 👨‍👩‍👦 👨‍👩‍👧 👨‍👩‍👧‍👦 👨‍👩‍👦‍👦 👨‍👩‍👧‍👧 👨‍👨‍👦 👨‍👨‍👧 👨‍👨‍👧‍👦 👨‍👨‍👦‍👦 👨‍👨‍👧‍👧 👩‍👩‍👦 👩‍👩‍👧 👩‍👩‍👧‍👦 👩‍👩‍👦‍👦 👩‍👩‍👧‍👧 👨‍👦 👨‍👦‍👦 👨‍👧 👨‍👧‍👦 👨‍👧‍👧 👩‍👦 👩‍👦‍👦 👩‍👧 👩‍👧‍👦 👩‍👧‍👧 🐕‍🦺 🐈‍⬛ 🐻‍❄️ 🐦‍⬛ 🏳️‍🌈 🏳️‍⚧️ 🏴‍☠️ </p>

<!--
Full reference: https://unicode.org/Public/emoji/15.0/
ZJW: zwidje https://unicode.org/emoji/charts/emoji-zwj-sequences.html
-->
`,title:"Emoji Composition",level:2,content:`## Emoji Composition

<p style="font-size: 65%; line-height: 1rem;"> 😶‍🌫️ 😮‍💨 😵‍💫 ❤️‍🔥 ❤️‍🩹 👁️‍🗨️ 🫱🏻‍🫲🏼 🫱🏻‍🫲🏽 🫱🏻‍🫲🏾 🫱🏻‍🫲🏿 🫱🏼‍🫲🏻 🫱🏼‍🫲🏽 🫱🏼‍🫲🏾 🫱🏼‍🫲🏿 🫱🏽‍🫲🏻 🫱🏽‍🫲🏼 🫱🏽‍🫲🏾 🫱🏽‍🫲🏿 🫱🏾‍🫲🏻 🫱🏾‍🫲🏼 🫱🏾‍🫲🏽 🫱🏾‍🫲🏿 🫱🏿‍🫲🏻 🫱🏿‍🫲🏼 🫱🏿‍🫲🏽 🫱🏿‍🫲🏾 🧔‍♂️ 🧔🏻‍♂️ 🧔🏼‍♂️ 🧔🏽‍♂️ 🧔🏾‍♂️ 🧔🏿‍♂️ 🧔‍♀️ 🧔🏻‍♀️ 🧔🏼‍♀️ 🧔🏽‍♀️ 🧔🏾‍♀️ 🧔🏿‍♀️ 👨‍🦰 👨🏻‍🦰 👨🏼‍🦰 👨🏽‍🦰 👨🏾‍🦰 👨🏿‍🦰 👨‍🦱 👨🏻‍🦱 👨🏼‍🦱 👨🏽‍🦱 👨🏾‍🦱 👨🏿‍🦱 👨‍🦳 👨🏻‍🦳 👨🏼‍🦳 👨🏽‍🦳 👨🏾‍🦳 👨🏿‍🦳 👨‍🦲 👨🏻‍🦲 👨🏼‍🦲 👨🏽‍🦲 👨🏾‍🦲 👨🏿‍🦲 👩‍🦰 👩🏻‍🦰 👩🏼‍🦰 👩🏽‍🦰 👩🏾‍🦰 👩🏿‍🦰 🧑‍🦰 🧑🏻‍🦰 🧑🏼‍🦰 🧑🏽‍🦰 🧑🏾‍🦰 🧑🏿‍🦰 👩‍🦱 👩🏻‍🦱 👩🏼‍🦱 👩🏽‍🦱 👩🏾‍🦱 👩🏿‍🦱 🧑‍🦱 🧑🏻‍🦱 🧑🏼‍🦱 🧑🏽‍🦱 🧑🏾‍🦱 🧑🏿‍🦱 👩‍🦳 👩🏻‍🦳 👩🏼‍🦳 👩🏽‍🦳 👩🏾‍🦳 👩🏿‍🦳 🧑‍🦳 🧑🏻‍🦳 🧑🏼‍🦳 🧑🏽‍🦳 🧑🏾‍🦳 🧑🏿‍🦳 👩‍🦲 👩🏻‍🦲 👩🏼‍🦲 👩🏽‍🦲 👩🏾‍🦲 👩🏿‍🦲 🧑‍🦲 🧑🏻‍🦲 🧑🏼‍🦲 🧑🏽‍🦲 🧑🏾‍🦲 🧑🏿‍🦲 👱‍♀️ 👱🏻‍♀️ 👱🏼‍♀️ 👱🏽‍♀️ 👱🏾‍♀️ 👱🏿‍♀️ 👱‍♂️ 👱🏻‍♂️ 👱🏼‍♂️ 👱🏽‍♂️ 👱🏾‍♂️ 👱🏿‍♂️ 🙍‍♂️ 🙍🏻‍♂️ 🙍🏼‍♂️ 🙍🏽‍♂️ 🙍🏾‍♂️ 🙍🏿‍♂️ 🙍‍♀️ 🙍🏻‍♀️ 🙍🏼‍♀️ 🙍🏽‍♀️ 🙍🏾‍♀️ 🙍🏿‍♀️ 🙎‍♂️ 🙎🏻‍♂️ 🙎🏼‍♂️ 🙎🏽‍♂️ 🙎🏾‍♂️ 🙎🏿‍♂️ 🙎‍♀️ 🙎🏻‍♀️ 🙎🏼‍♀️ 🙎🏽‍♀️ 🙎🏾‍♀️ 🙎🏿‍♀️ 🙅‍♂️ 🙅🏻‍♂️ 🙅🏼‍♂️ 🙅🏽‍♂️ 🙅🏾‍♂️ 🙅🏿‍♂️ 🙅‍♀️ 🙅🏻‍♀️ 🙅🏼‍♀️ 🙅🏽‍♀️ 🙅🏾‍♀️ 🙅🏿‍♀️ 🙆‍♂️ 🙆🏻‍♂️ 🙆🏼‍♂️ 🙆🏽‍♂️ 🙆🏾‍♂️ 🙆🏿‍♂️ 🙆‍♀️ 🙆🏻‍♀️ 🙆🏼‍♀️ 🙆🏽‍♀️ 🙆🏾‍♀️ 🙆🏿‍♀️ 💁‍♂️ 💁🏻‍♂️ 💁🏼‍♂️ 💁🏽‍♂️ 💁🏾‍♂️ 💁🏿‍♂️ 💁‍♀️ 💁🏻‍♀️ 💁🏼‍♀️ 💁🏽‍♀️ 💁🏾‍♀️ 💁🏿‍♀️ 🙋‍♂️ 🙋🏻‍♂️ 🙋🏼‍♂️ 🙋🏽‍♂️ 🙋🏾‍♂️ 🙋🏿‍♂️ 🙋‍♀️ 🙋🏻‍♀️ 🙋🏼‍♀️ 🙋🏽‍♀️ 🙋🏾‍♀️ 🙋🏿‍♀️ 🧏‍♂️ 🧏🏻‍♂️ 🧏🏼‍♂️ 🧏🏽‍♂️ 🧏🏾‍♂️ 🧏🏿‍♂️ 🧏‍♀️ 🧏🏻‍♀️ 🧏🏼‍♀️ 🧏🏽‍♀️ 🧏🏾‍♀️ 🧏🏿‍♀️ 🙇‍♂️ 🙇🏻‍♂️ 🙇🏼‍♂️ 🙇🏽‍♂️ 🙇🏾‍♂️ 🙇🏿‍♂️ 🙇‍♀️ 🙇🏻‍♀️ 🙇🏼‍♀️ 🙇🏽‍♀️ 🙇🏾‍♀️ 🙇🏿‍♀️ 🤦‍♂️ 🤦🏻‍♂️ 🤦🏼‍♂️ 🤦🏽‍♂️ 🤦🏾‍♂️ 🤦🏿‍♂️ 🤦‍♀️ 🤦🏻‍♀️ 🤦🏼‍♀️ 🤦🏽‍♀️ 🤦🏾‍♀️ 🤦🏿‍♀️ 🤷‍♂️ 🤷🏻‍♂️ 🤷🏼‍♂️ 🤷🏽‍♂️ 🤷🏾‍♂️ 🤷🏿‍♂️ 🤷‍♀️ 🤷🏻‍♀️ 🤷🏼‍♀️ 🤷🏽‍♀️ 🤷🏾‍♀️ 🤷🏿‍♀️ 🧑‍⚕️ 🧑🏻‍⚕️ 🧑🏼‍⚕️ 🧑🏽‍⚕️ 🧑🏾‍⚕️ 🧑🏿‍⚕️ 👨‍⚕️ 👨🏻‍⚕️ 👨🏼‍⚕️ 👨🏽‍⚕️ 👨🏾‍⚕️ 👨🏿‍⚕️ 👩‍⚕️ 👩🏻‍⚕️ 👩🏼‍⚕️ 👩🏽‍⚕️ 👩🏾‍⚕️ 👩🏿‍⚕️ 🧑‍🎓 🧑🏻‍🎓 🧑🏼‍🎓 🧑🏽‍🎓 🧑🏾‍🎓 🧑🏿‍🎓 👨‍🎓 👨🏻‍🎓 👨🏼‍🎓 👨🏽‍🎓 👨🏾‍🎓 👨🏿‍🎓 👩‍🎓 👩🏻‍🎓 👩🏼‍🎓 👩🏽‍🎓 👩🏾‍🎓 👩🏿‍🎓 🧑‍🏫 🧑🏻‍🏫 🧑🏼‍🏫 🧑🏽‍🏫 🧑🏾‍🏫 🧑🏿‍🏫 👨‍🏫 👨🏻‍🏫 👨🏼‍🏫 👨🏽‍🏫 👨🏾‍🏫 👨🏿‍🏫 👩‍🏫 👩🏻‍🏫 👩🏼‍🏫 👩🏽‍🏫 👩🏾‍🏫 👩🏿‍🏫 🧑‍⚖️ 🧑🏻‍⚖️ 🧑🏼‍⚖️ 🧑🏽‍⚖️ 🧑🏾‍⚖️ 🧑🏿‍⚖️ 👨‍⚖️ 👨🏻‍⚖️ 👨🏼‍⚖️ 👨🏽‍⚖️ 👨🏾‍⚖️ 👨🏿‍⚖️ 👩‍⚖️ 👩🏻‍⚖️ 👩🏼‍⚖️ 👩🏽‍⚖️ 👩🏾‍⚖️ 👩🏿‍⚖️ 🧑‍🌾 🧑🏻‍🌾 🧑🏼‍🌾 🧑🏽‍🌾 🧑🏾‍🌾 🧑🏿‍🌾 👨‍🌾 👨🏻‍🌾 👨🏼‍🌾 👨🏽‍🌾 👨🏾‍🌾 👨🏿‍🌾 👩‍🌾 👩🏻‍🌾 👩🏼‍🌾 👩🏽‍🌾 👩🏾‍🌾 👩🏿‍🌾 🧑‍🍳 🧑🏻‍🍳 🧑🏼‍🍳 🧑🏽‍🍳 🧑🏾‍🍳 🧑🏿‍🍳 👨‍🍳 👨🏻‍🍳 👨🏼‍🍳 👨🏽‍🍳 👨🏾‍🍳 👨🏿‍🍳 👩‍🍳 👩🏻‍🍳 👩🏼‍🍳 👩🏽‍🍳 👩🏾‍🍳 👩🏿‍🍳 🧑‍🔧 🧑🏻‍🔧 🧑🏼‍🔧 🧑🏽‍🔧 🧑🏾‍🔧 🧑🏿‍🔧 👨‍🔧 👨🏻‍🔧 👨🏼‍🔧 👨🏽‍🔧 👨🏾‍🔧 👨🏿‍🔧 👩‍🔧 👩🏻‍🔧 👩🏼‍🔧 👩🏽‍🔧 👩🏾‍🔧 👩🏿‍🔧 🧑‍🏭 🧑🏻‍🏭 🧑🏼‍🏭 🧑🏽‍🏭 🧑🏾‍🏭 🧑🏿‍🏭 👨‍🏭 👨🏻‍🏭 👨🏼‍🏭 👨🏽‍🏭 👨🏾‍🏭 👨🏿‍🏭 👩‍🏭 👩🏻‍🏭 👩🏼‍🏭 👩🏽‍🏭 👩🏾‍🏭 👩🏿‍🏭 🧑‍💼 🧑🏻‍💼 🧑🏼‍💼 🧑🏽‍💼 🧑🏾‍💼 🧑🏿‍💼 👨‍💼 👨🏻‍💼 👨🏼‍💼 👨🏽‍💼 👨🏾‍💼 👨🏿‍💼 👩‍💼 👩🏻‍💼 👩🏼‍💼 👩🏽‍💼 👩🏾‍💼 👩🏿‍💼 🧑‍🔬 🧑🏻‍🔬 🧑🏼‍🔬 🧑🏽‍🔬 🧑🏾‍🔬 🧑🏿‍🔬 👨‍🔬 👨🏻‍🔬 👨🏼‍🔬 👨🏽‍🔬 👨🏾‍🔬 👨🏿‍🔬 👩‍🔬 👩🏻‍🔬 👩🏼‍🔬 👩🏽‍🔬 👩🏾‍🔬 👩🏿‍🔬 🧑‍💻 🧑🏻‍💻 🧑🏼‍💻 🧑🏽‍💻 🧑🏾‍💻 🧑🏿‍💻 👨‍💻 👨🏻‍💻 👨🏼‍💻 👨🏽‍💻 👨🏾‍💻 👨🏿‍💻 👩‍💻 👩🏻‍💻 👩🏼‍💻 👩🏽‍💻 👩🏾‍💻 👩🏿‍💻 🧑‍🎤 🧑🏻‍🎤 🧑🏼‍🎤 🧑🏽‍🎤 🧑🏾‍🎤 🧑🏿‍🎤 👨‍🎤 👨🏻‍🎤 👨🏼‍🎤 👨🏽‍🎤 👨🏾‍🎤 👨🏿‍🎤 👩‍🎤 👩🏻‍🎤 👩🏼‍🎤 👩🏽‍🎤 👩🏾‍🎤 👩🏿‍🎤 🧑‍🎨 🧑🏻‍🎨 🧑🏼‍🎨 🧑🏽‍🎨 🧑🏾‍🎨 🧑🏿‍🎨 👨‍🎨 👨🏻‍🎨 👨🏼‍🎨 👨🏽‍🎨 👨🏾‍🎨 👨🏿‍🎨 👩‍🎨 👩🏻‍🎨 👩🏼‍🎨 👩🏽‍🎨 👩🏾‍🎨 👩🏿‍🎨 🧑‍✈️ 🧑🏻‍✈️ 🧑🏼‍✈️ 🧑🏽‍✈️ 🧑🏾‍✈️ 🧑🏿‍✈️ 👨‍✈️ 👨🏻‍✈️ 👨🏼‍✈️ 👨🏽‍✈️ 👨🏾‍✈️ 👨🏿‍✈️ 👩‍✈️ 👩🏻‍✈️ 👩🏼‍✈️ 👩🏽‍✈️ 👩🏾‍✈️ 👩🏿‍✈️ 🧑‍🚀 🧑🏻‍🚀 🧑🏼‍🚀 🧑🏽‍🚀 🧑🏾‍🚀 🧑🏿‍🚀 👨‍🚀 👨🏻‍🚀 👨🏼‍🚀 👨🏽‍🚀 👨🏾‍🚀 👨🏿‍🚀 👩‍🚀 👩🏻‍🚀 👩🏼‍🚀 👩🏽‍🚀 👩🏾‍🚀 👩🏿‍🚀 🧑‍🚒 🧑🏻‍🚒 🧑🏼‍🚒 🧑🏽‍🚒 🧑🏾‍🚒 🧑🏿‍🚒 👨‍🚒 👨🏻‍🚒 👨🏼‍🚒 👨🏽‍🚒 👨🏾‍🚒 👨🏿‍🚒 👩‍🚒 👩🏻‍🚒 👩🏼‍🚒 👩🏽‍🚒 👩🏾‍🚒 👩🏿‍🚒 👮‍♂️ 👮🏻‍♂️ 👮🏼‍♂️ 👮🏽‍♂️ 👮🏾‍♂️ 👮🏿‍♂️ 👮‍♀️ 👮🏻‍♀️ 👮🏼‍♀️ 👮🏽‍♀️ 👮🏾‍♀️ 👮🏿‍♀️ 🕵️‍♂️ 🕵🏻‍♂️ 🕵🏼‍♂️ 🕵🏽‍♂️ 🕵🏾‍♂️ 🕵🏿‍♂️ 🕵️‍♀️ 🕵🏻‍♀️ 🕵🏼‍♀️ 🕵🏽‍♀️ 🕵🏾‍♀️ 🕵🏿‍♀️ 💂‍♂️ 💂🏻‍♂️ 💂🏼‍♂️ 💂🏽‍♂️ 💂🏾‍♂️ 💂🏿‍♂️ 💂‍♀️ 💂🏻‍♀️ 💂🏼‍♀️ 💂🏽‍♀️ 💂🏾‍♀️ 💂🏿‍♀️ 👷‍♂️ 👷🏻‍♂️ 👷🏼‍♂️ 👷🏽‍♂️ 👷🏾‍♂️ 👷🏿‍♂️ 👷‍♀️ 👷🏻‍♀️ 👷🏼‍♀️ 👷🏽‍♀️ 👷🏾‍♀️ 👷🏿‍♀️ 👳‍♂️ 👳🏻‍♂️ 👳🏼‍♂️ 👳🏽‍♂️ 👳🏾‍♂️ 👳🏿‍♂️ 👳‍♀️ 👳🏻‍♀️ 👳🏼‍♀️ 👳🏽‍♀️ 👳🏾‍♀️ 👳🏿‍♀️ 🤵‍♂️ 🤵🏻‍♂️ 🤵🏼‍♂️ 🤵🏽‍♂️ 🤵🏾‍♂️ 🤵🏿‍♂️ 🤵‍♀️ 🤵🏻‍♀️ 🤵🏼‍♀️ 🤵🏽‍♀️ 🤵🏾‍♀️ 🤵🏿‍♀️ 👰‍♂️ 👰🏻‍♂️ 👰🏼‍♂️ 👰🏽‍♂️ 👰🏾‍♂️ 👰🏿‍♂️ 👰‍♀️ 👰🏻‍♀️ 👰🏼‍♀️ 👰🏽‍♀️ 👰🏾‍♀️ 👰🏿‍♀️ 👩‍🍼 👩🏻‍🍼 👩🏼‍🍼 👩🏽‍🍼 👩🏾‍🍼 👩🏿‍🍼 👨‍🍼 👨🏻‍🍼 👨🏼‍🍼 👨🏽‍🍼 👨🏾‍🍼 👨🏿‍🍼 🧑‍🍼 🧑🏻‍🍼 🧑🏼‍🍼 🧑🏽‍🍼 🧑🏾‍🍼 🧑🏿‍🍼 🧑‍🎄 🧑🏻‍🎄 🧑🏼‍🎄 🧑🏽‍🎄 🧑🏾‍🎄 🧑🏿‍🎄 🦸‍♂️ 🦸🏻‍♂️ 🦸🏼‍♂️ 🦸🏽‍♂️ 🦸🏾‍♂️ 🦸🏿‍♂️ 🦸‍♀️ 🦸🏻‍♀️ 🦸🏼‍♀️ 🦸🏽‍♀️ 🦸🏾‍♀️ 🦸🏿‍♀️ 🦹‍♂️ 🦹🏻‍♂️ 🦹🏼‍♂️ 🦹🏽‍♂️ 🦹🏾‍♂️ 🦹🏿‍♂️ 🦹‍♀️ 🦹🏻‍♀️ 🦹🏼‍♀️ 🦹🏽‍♀️ 🦹🏾‍♀️ 🦹🏿‍♀️ 🧙‍♂️ 🧙🏻‍♂️ 🧙🏼‍♂️ 🧙🏽‍♂️ 🧙🏾‍♂️ 🧙🏿‍♂️ 🧙‍♀️ 🧙🏻‍♀️ 🧙🏼‍♀️ 🧙🏽‍♀️ 🧙🏾‍♀️ 🧙🏿‍♀️ 🧚‍♂️ 🧚🏻‍♂️ 🧚🏼‍♂️ 🧚🏽‍♂️ 🧚🏾‍♂️ 🧚🏿‍♂️ 🧚‍♀️ 🧚🏻‍♀️ 🧚🏼‍♀️ 🧚🏽‍♀️ 🧚🏾‍♀️ 🧚🏿‍♀️ 🧛‍♂️ 🧛🏻‍♂️ 🧛🏼‍♂️ 🧛🏽‍♂️ 🧛🏾‍♂️ 🧛🏿‍♂️ 🧛‍♀️ 🧛🏻‍♀️ 🧛🏼‍♀️ 🧛🏽‍♀️ 🧛🏾‍♀️ 🧛🏿‍♀️ 🧜‍♂️ 🧜🏻‍♂️ 🧜🏼‍♂️ 🧜🏽‍♂️ 🧜🏾‍♂️ 🧜🏿‍♂️ 🧜‍♀️ 🧜🏻‍♀️ 🧜🏼‍♀️ 🧜🏽‍♀️ 🧜🏾‍♀️ 🧜🏿‍♀️ 🧝‍♂️ 🧝🏻‍♂️ 🧝🏼‍♂️ 🧝🏽‍♂️ 🧝🏾‍♂️ 🧝🏿‍♂️ 🧝‍♀️ 🧝🏻‍♀️ 🧝🏼‍♀️ 🧝🏽‍♀️ 🧝🏾‍♀️ 🧝🏿‍♀️ 🧞‍♂️ 🧞‍♀️ 🧟‍♂️ 🧟‍♀️ 💆‍♂️ 💆🏻‍♂️ 💆🏼‍♂️ 💆🏽‍♂️ 💆🏾‍♂️ 💆🏿‍♂️ 💆‍♀️ 💆🏻‍♀️ 💆🏼‍♀️ 💆🏽‍♀️ 💆🏾‍♀️ 💆🏿‍♀️ 💇‍♂️ 💇🏻‍♂️ 💇🏼‍♂️ 💇🏽‍♂️ 💇🏾‍♂️ 💇🏿‍♂️ 💇‍♀️ 💇🏻‍♀️ 💇🏼‍♀️ 💇🏽‍♀️ 💇🏾‍♀️ 💇🏿‍♀️ 🚶‍♂️ 🚶🏻‍♂️ 🚶🏼‍♂️ 🚶🏽‍♂️ 🚶🏾‍♂️ 🚶🏿‍♂️ 🚶‍♀️ 🚶🏻‍♀️ 🚶🏼‍♀️ 🚶🏽‍♀️ 🚶🏾‍♀️ 🚶🏿‍♀️ 🧍‍♂️ 🧍🏻‍♂️ 🧍🏼‍♂️ 🧍🏽‍♂️ 🧍🏾‍♂️ 🧍🏿‍♂️ 🧍‍♀️ 🧍🏻‍♀️ 🧍🏼‍♀️ 🧍🏽‍♀️ 🧍🏾‍♀️ 🧍🏿‍♀️ 🧎‍♂️ 🧎🏻‍♂️ 🧎🏼‍♂️ 🧎🏽‍♂️ 🧎🏾‍♂️ 🧎🏿‍♂️ 🧎‍♀️ 🧎🏻‍♀️ 🧎🏼‍♀️ 🧎🏽‍♀️ 🧎🏾‍♀️ 🧎🏿‍♀️ 🧑‍🦯 🧑🏻‍🦯 🧑🏼‍🦯 🧑🏽‍🦯 🧑🏾‍🦯 🧑🏿‍🦯 👨‍🦯 👨🏻‍🦯 👨🏼‍🦯 👨🏽‍🦯 👨🏾‍🦯 👨🏿‍🦯 👩‍🦯 👩🏻‍🦯 👩🏼‍🦯 👩🏽‍🦯 👩🏾‍🦯 👩🏿‍🦯 🧑‍🦼 🧑🏻‍🦼 🧑🏼‍🦼 🧑🏽‍🦼 🧑🏾‍🦼 🧑🏿‍🦼 👨‍🦼 👨🏻‍🦼 👨🏼‍🦼 👨🏽‍🦼 👨🏾‍🦼 👨🏿‍🦼 👩‍🦼 👩🏻‍🦼 👩🏼‍🦼 👩🏽‍🦼 👩🏾‍🦼 👩🏿‍🦼 🧑‍🦽 🧑🏻‍🦽 🧑🏼‍🦽 🧑🏽‍🦽 🧑🏾‍🦽 🧑🏿‍🦽 👨‍🦽 👨🏻‍🦽 👨🏼‍🦽 👨🏽‍🦽 👨🏾‍🦽 👨🏿‍🦽 👩‍🦽 👩🏻‍🦽 👩🏼‍🦽 👩🏽‍🦽 👩🏾‍🦽 👩🏿‍🦽 🏃‍♂️ 🏃🏻‍♂️ 🏃🏼‍♂️ 🏃🏽‍♂️ 🏃🏾‍♂️ 🏃🏿‍♂️ 🏃‍♀️ 🏃🏻‍♀️ 🏃🏼‍♀️ 🏃🏽‍♀️ 🏃🏾‍♀️ 🏃🏿‍♀️ 👯‍♂️ 👯‍♀️ 🧖‍♂️ 🧖🏻‍♂️ 🧖🏼‍♂️ 🧖🏽‍♂️ 🧖🏾‍♂️ 🧖🏿‍♂️ 🧖‍♀️ 🧖🏻‍♀️ 🧖🏼‍♀️ 🧖🏽‍♀️ 🧖🏾‍♀️ 🧖🏿‍♀️ 🧗‍♂️ 🧗🏻‍♂️ 🧗🏼‍♂️ 🧗🏽‍♂️ 🧗🏾‍♂️ 🧗🏿‍♂️ 🧗‍♀️ 🧗🏻‍♀️ 🧗🏼‍♀️ 🧗🏽‍♀️ 🧗🏾‍♀️ 🧗🏿‍♀️ 🏌️‍♂️ 🏌🏻‍♂️ 🏌🏼‍♂️ 🏌🏽‍♂️ 🏌🏾‍♂️ 🏌🏿‍♂️ 🏌️‍♀️ 🏌🏻‍♀️ 🏌🏼‍♀️ 🏌🏽‍♀️ 🏌🏾‍♀️ 🏌🏿‍♀️ 🏄‍♂️ 🏄🏻‍♂️ 🏄🏼‍♂️ 🏄🏽‍♂️ 🏄🏾‍♂️ 🏄🏿‍♂️ 🏄‍♀️ 🏄🏻‍♀️ 🏄🏼‍♀️ 🏄🏽‍♀️ 🏄🏾‍♀️ 🏄🏿‍♀️ 🚣‍♂️ 🚣🏻‍♂️ 🚣🏼‍♂️ 🚣🏽‍♂️ 🚣🏾‍♂️ 🚣🏿‍♂️ 🚣‍♀️ 🚣🏻‍♀️ 🚣🏼‍♀️ 🚣🏽‍♀️ 🚣🏾‍♀️ 🚣🏿‍♀️ 🏊‍♂️ 🏊🏻‍♂️ 🏊🏼‍♂️ 🏊🏽‍♂️ 🏊🏾‍♂️ 🏊🏿‍♂️ 🏊‍♀️ 🏊🏻‍♀️ 🏊🏼‍♀️ 🏊🏽‍♀️ 🏊🏾‍♀️ 🏊🏿‍♀️ ⛹️‍♂️ ⛹🏻‍♂️ ⛹🏼‍♂️ ⛹🏽‍♂️ ⛹🏾‍♂️ ⛹🏿‍♂️ ⛹️‍♀️ ⛹🏻‍♀️ ⛹🏼‍♀️ ⛹🏽‍♀️ ⛹🏾‍♀️ ⛹🏿‍♀️ 🏋️‍♂️ 🏋🏻‍♂️ 🏋🏼‍♂️ 🏋🏽‍♂️ 🏋🏾‍♂️ 🏋🏿‍♂️ 🏋️‍♀️ 🏋🏻‍♀️ 🏋🏼‍♀️ 🏋🏽‍♀️ 🏋🏾‍♀️ 🏋🏿‍♀️ 🚴‍♂️ 🚴🏻‍♂️ 🚴🏼‍♂️ 🚴🏽‍♂️ 🚴🏾‍♂️ 🚴🏿‍♂️ 🚴‍♀️ 🚴🏻‍♀️ 🚴🏼‍♀️ 🚴🏽‍♀️ 🚴🏾‍♀️ 🚴🏿‍♀️ 🚵‍♂️ 🚵🏻‍♂️ 🚵🏼‍♂️ 🚵🏽‍♂️ 🚵🏾‍♂️ 🚵🏿‍♂️ 🚵‍♀️ 🚵🏻‍♀️ 🚵🏼‍♀️ 🚵🏽‍♀️ 🚵🏾‍♀️ 🚵🏿‍♀️ 🤸‍♂️ 🤸🏻‍♂️ 🤸🏼‍♂️ 🤸🏽‍♂️ 🤸🏾‍♂️ 🤸🏿‍♂️ 🤸‍♀️ 🤸🏻‍♀️ 🤸🏼‍♀️ 🤸🏽‍♀️ 🤸🏾‍♀️ 🤸🏿‍♀️ 🤼‍♂️ 🤼‍♀️ 🤽‍♂️ 🤽🏻‍♂️ 🤽🏼‍♂️ 🤽🏽‍♂️ 🤽🏾‍♂️ 🤽🏿‍♂️ 🤽‍♀️ 🤽🏻‍♀️ 🤽🏼‍♀️ 🤽🏽‍♀️ 🤽🏾‍♀️ 🤽🏿‍♀️ 🤾‍♂️ 🤾🏻‍♂️ 🤾🏼‍♂️ 🤾🏽‍♂️ 🤾🏾‍♂️ 🤾🏿‍♂️ 🤾‍♀️ 🤾🏻‍♀️ 🤾🏼‍♀️ 🤾🏽‍♀️ 🤾🏾‍♀️ 🤾🏿‍♀️ 🤹‍♂️ 🤹🏻‍♂️ 🤹🏼‍♂️ 🤹🏽‍♂️ 🤹🏾‍♂️ 🤹🏿‍♂️ 🤹‍♀️ 🤹🏻‍♀️ 🤹🏼‍♀️ 🤹🏽‍♀️ 🤹🏾‍♀️ 🤹🏿‍♀️ 🧘‍♂️ 🧘🏻‍♂️ 🧘🏼‍♂️ 🧘🏽‍♂️ 🧘🏾‍♂️ 🧘🏿‍♂️ 🧘‍♀️ 🧘🏻‍♀️ 🧘🏼‍♀️ 🧘🏽‍♀️ 🧘🏾‍♀️ 🧘🏿‍♀️ 🧑‍🤝‍🧑 🧑🏻‍🤝‍🧑🏻 🧑🏻‍🤝‍🧑🏼 🧑🏻‍🤝‍🧑🏽 🧑🏻‍🤝‍🧑🏾 🧑🏻‍🤝‍🧑🏿 🧑🏼‍🤝‍🧑🏻 🧑🏼‍🤝‍🧑🏼 🧑🏼‍🤝‍🧑🏽 🧑🏼‍🤝‍🧑🏾 🧑🏼‍🤝‍🧑🏿 🧑🏽‍🤝‍🧑🏻 🧑🏽‍🤝‍🧑🏼 🧑🏽‍🤝‍🧑🏽 🧑🏽‍🤝‍🧑🏾 🧑🏽‍🤝‍🧑🏿 🧑🏾‍🤝‍🧑🏻 🧑🏾‍🤝‍🧑🏼 🧑🏾‍🤝‍🧑🏽 🧑🏾‍🤝‍🧑🏾 🧑🏾‍🤝‍🧑🏿 🧑🏿‍🤝‍🧑🏻 🧑🏿‍🤝‍🧑🏼 🧑🏿‍🤝‍🧑🏽 🧑🏿‍🤝‍🧑🏾 🧑🏿‍🤝‍🧑🏿 👩🏻‍🤝‍👩🏼 👩🏻‍🤝‍👩🏽 👩🏻‍🤝‍👩🏾 👩🏻‍🤝‍👩🏿 👩🏼‍🤝‍👩🏻 👩🏼‍🤝‍👩🏽 👩🏼‍🤝‍👩🏾 👩🏼‍🤝‍👩🏿 👩🏽‍🤝‍👩🏻 👩🏽‍🤝‍👩🏼 👩🏽‍🤝‍👩🏾 👩🏽‍🤝‍👩🏿 👩🏾‍🤝‍👩🏻 👩🏾‍🤝‍👩🏼 👩🏾‍🤝‍👩🏽 👩🏾‍🤝‍👩🏿 👩🏿‍🤝‍👩🏻 👩🏿‍🤝‍👩🏼 👩🏿‍🤝‍👩🏽 👩🏿‍🤝‍👩🏾 👩🏻‍🤝‍👨🏼 👩🏻‍🤝‍👨🏽 👩🏻‍🤝‍👨🏾 👩🏻‍🤝‍👨🏿 👩🏼‍🤝‍👨🏻 👩🏼‍🤝‍👨🏽 👩🏼‍🤝‍👨🏾 👩🏼‍🤝‍👨🏿 👩🏽‍🤝‍👨🏻 👩🏽‍🤝‍👨🏼 👩🏽‍🤝‍👨🏾 👩🏽‍🤝‍👨🏿 👩🏾‍🤝‍👨🏻 👩🏾‍🤝‍👨🏼 👩🏾‍🤝‍👨🏽 👩🏾‍🤝‍👨🏿 👩🏿‍🤝‍👨🏻 👩🏿‍🤝‍👨🏼 👩🏿‍🤝‍👨🏽 👩🏿‍🤝‍👨🏾 👨🏻‍🤝‍👨🏼 👨🏻‍🤝‍👨🏽 👨🏻‍🤝‍👨🏾 👨🏻‍🤝‍👨🏿 👨🏼‍🤝‍👨🏻 👨🏼‍🤝‍👨🏽 👨🏼‍🤝‍👨🏾 👨🏼‍🤝‍👨🏿 👨🏽‍🤝‍👨🏻 👨🏽‍🤝‍👨🏼 👨🏽‍🤝‍👨🏾 👨🏽‍🤝‍👨🏿 👨🏾‍🤝‍👨🏻 👨🏾‍🤝‍👨🏼 👨🏾‍🤝‍👨🏽 👨🏾‍🤝‍👨🏿 👨🏿‍🤝‍👨🏻 👨🏿‍🤝‍👨🏼 👨🏿‍🤝‍👨🏽 👨🏿‍🤝‍👨🏾 💏 🧑🏻‍❤️‍💋‍🧑🏼 🧑🏻‍❤️‍💋‍🧑🏽 🧑🏻‍❤️‍💋‍🧑🏾 🧑🏻‍❤️‍💋‍🧑🏿 🧑🏼‍❤️‍💋‍🧑🏻 🧑🏼‍❤️‍💋‍🧑🏽 🧑🏼‍❤️‍💋‍🧑🏾 🧑🏼‍❤️‍💋‍🧑🏿 🧑🏽‍❤️‍💋‍🧑🏻 🧑🏽‍❤️‍💋‍🧑🏼 🧑🏽‍❤️‍💋‍🧑🏾 🧑🏽‍❤️‍💋‍🧑🏿 🧑🏾‍❤️‍💋‍🧑🏻 🧑🏾‍❤️‍💋‍🧑🏼 🧑🏾‍❤️‍💋‍🧑🏽 🧑🏾‍❤️‍💋‍🧑🏿 🧑🏿‍❤️‍💋‍🧑🏻 🧑🏿‍❤️‍💋‍🧑🏼 🧑🏿‍❤️‍💋‍🧑🏽 🧑🏿‍❤️‍💋‍🧑🏾 👩‍❤️‍💋‍👨 👩🏻‍❤️‍💋‍👨🏻 👩🏻‍❤️‍💋‍👨🏼 👩🏻‍❤️‍💋‍👨🏽 👩🏻‍❤️‍💋‍👨🏾 👩🏻‍❤️‍💋‍👨🏿 👩🏼‍❤️‍💋‍👨🏻 👩🏼‍❤️‍💋‍👨🏼 👩🏼‍❤️‍💋‍👨🏽 👩🏼‍❤️‍💋‍👨🏾 👩🏼‍❤️‍💋‍👨🏿 👩🏽‍❤️‍💋‍👨🏻 👩🏽‍❤️‍💋‍👨🏼 👩🏽‍❤️‍💋‍👨🏽 👩🏽‍❤️‍💋‍👨🏾 👩🏽‍❤️‍💋‍👨🏿 👩🏾‍❤️‍💋‍👨🏻 👩🏾‍❤️‍💋‍👨🏼 👩🏾‍❤️‍💋‍👨🏽 👩🏾‍❤️‍💋‍👨🏾 👩🏾‍❤️‍💋‍👨🏿 👩🏿‍❤️‍💋‍👨🏻 👩🏿‍❤️‍💋‍👨🏼 👩🏿‍❤️‍💋‍👨🏽 👩🏿‍❤️‍💋‍👨🏾 👩🏿‍❤️‍💋‍👨🏿 👨‍❤️‍💋‍👨 👨🏻‍❤️‍💋‍👨🏻 👨🏻‍❤️‍💋‍👨🏼 👨🏻‍❤️‍💋‍👨🏽 👨🏻‍❤️‍💋‍👨🏾 👨🏻‍❤️‍💋‍👨🏿 👨🏼‍❤️‍💋‍👨🏻 👨🏼‍❤️‍💋‍👨🏼 👨🏼‍❤️‍💋‍👨🏽 👨🏼‍❤️‍💋‍👨🏾 👨🏼‍❤️‍💋‍👨🏿 👨🏽‍❤️‍💋‍👨🏻 👨🏽‍❤️‍💋‍👨🏼 👨🏽‍❤️‍💋‍👨🏽 👨🏽‍❤️‍💋‍👨🏾 👨🏽‍❤️‍💋‍👨🏿 👨🏾‍❤️‍💋‍👨🏻 👨🏾‍❤️‍💋‍👨🏼 👨🏾‍❤️‍💋‍👨🏽 👨🏾‍❤️‍💋‍👨🏾 👨🏾‍❤️‍💋‍👨🏿 👨🏿‍❤️‍💋‍👨🏻 👨🏿‍❤️‍💋‍👨🏼 👨🏿‍❤️‍💋‍👨🏽 👨🏿‍❤️‍💋‍👨🏾 👨🏿‍❤️‍💋‍👨🏿 👩‍❤️‍💋‍👩 👩🏻‍❤️‍💋‍👩🏻 👩🏻‍❤️‍💋‍👩🏼 👩🏻‍❤️‍💋‍👩🏽 👩🏻‍❤️‍💋‍👩🏾 👩🏻‍❤️‍💋‍👩🏿 👩🏼‍❤️‍💋‍👩🏻 👩🏼‍❤️‍💋‍👩🏼 👩🏼‍❤️‍💋‍👩🏽 👩🏼‍❤️‍💋‍👩🏾 👩🏼‍❤️‍💋‍👩🏿 👩🏽‍❤️‍💋‍👩🏻 👩🏽‍❤️‍💋‍👩🏼 👩🏽‍❤️‍💋‍👩🏽 👩🏽‍❤️‍💋‍👩🏾 👩🏽‍❤️‍💋‍👩🏿 👩🏾‍❤️‍💋‍👩🏻 👩🏾‍❤️‍💋‍👩🏼 👩🏾‍❤️‍💋‍👩🏽 👩🏾‍❤️‍💋‍👩🏾 👩🏾‍❤️‍💋‍👩🏿 👩🏿‍❤️‍💋‍👩🏻 👩🏿‍❤️‍💋‍👩🏼 👩🏿‍❤️‍💋‍👩🏽 👩🏿‍❤️‍💋‍👩🏾 👩🏿‍❤️‍💋‍👩🏿 💑 🧑🏻‍❤️‍🧑🏼 🧑🏻‍❤️‍🧑🏽 🧑🏻‍❤️‍🧑🏾 🧑🏻‍❤️‍🧑🏿 🧑🏼‍❤️‍🧑🏻 🧑🏼‍❤️‍🧑🏽 🧑🏼‍❤️‍🧑🏾 🧑🏼‍❤️‍🧑🏿 🧑🏽‍❤️‍🧑🏻 🧑🏽‍❤️‍🧑🏼 🧑🏽‍❤️‍🧑🏾 🧑🏽‍❤️‍🧑🏿 🧑🏾‍❤️‍🧑🏻 🧑🏾‍❤️‍🧑🏼 🧑🏾‍❤️‍🧑🏽 🧑🏾‍❤️‍🧑🏿 🧑🏿‍❤️‍🧑🏻 🧑🏿‍❤️‍🧑🏼 🧑🏿‍❤️‍🧑🏽 🧑🏿‍❤️‍🧑🏾 👩‍❤️‍👨 👩🏻‍❤️‍👨🏻 👩🏻‍❤️‍👨🏼 👩🏻‍❤️‍👨🏽 👩🏻‍❤️‍👨🏾 👩🏻‍❤️‍👨🏿 👩🏼‍❤️‍👨🏻 👩🏼‍❤️‍👨🏼 👩🏼‍❤️‍👨🏽 👩🏼‍❤️‍👨🏾 👩🏼‍❤️‍👨🏿 👩🏽‍❤️‍👨🏻 👩🏽‍❤️‍👨🏼 👩🏽‍❤️‍👨🏽 👩🏽‍❤️‍👨🏾 👩🏽‍❤️‍👨🏿 👩🏾‍❤️‍👨🏻 👩🏾‍❤️‍👨🏼 👩🏾‍❤️‍👨🏽 👩🏾‍❤️‍👨🏾 👩🏾‍❤️‍👨🏿 👩🏿‍❤️‍👨🏻 👩🏿‍❤️‍👨🏼 👩🏿‍❤️‍👨🏽 👩🏿‍❤️‍👨🏾 👩🏿‍❤️‍👨🏿 👨‍❤️‍👨 👨🏻‍❤️‍👨🏻 👨🏻‍❤️‍👨🏼 👨🏻‍❤️‍👨🏽 👨🏻‍❤️‍👨🏾 👨🏻‍❤️‍👨🏿 👨🏼‍❤️‍👨🏻 👨🏼‍❤️‍👨🏼 👨🏼‍❤️‍👨🏽 👨🏼‍❤️‍👨🏾 👨🏼‍❤️‍👨🏿 👨🏽‍❤️‍👨🏻 👨🏽‍❤️‍👨🏼 👨🏽‍❤️‍👨🏽 👨🏽‍❤️‍👨🏾 👨🏽‍❤️‍👨🏿 👨🏾‍❤️‍👨🏻 👨🏾‍❤️‍👨🏼 👨🏾‍❤️‍👨🏽 👨🏾‍❤️‍👨🏾 👨🏾‍❤️‍👨🏿 👨🏿‍❤️‍👨🏻 👨🏿‍❤️‍👨🏼 👨🏿‍❤️‍👨🏽 👨🏿‍❤️‍👨🏾 👨🏿‍❤️‍👨🏿 👩‍❤️‍👩 👩🏻‍❤️‍👩🏻 👩🏻‍❤️‍👩🏼 👩🏻‍❤️‍👩🏽 👩🏻‍❤️‍👩🏾 👩🏻‍❤️‍👩🏿 👩🏼‍❤️‍👩🏻 👩🏼‍❤️‍👩🏼 👩🏼‍❤️‍👩🏽 👩🏼‍❤️‍👩🏾 👩🏼‍❤️‍👩🏿 👩🏽‍❤️‍👩🏻 👩🏽‍❤️‍👩🏼 👩🏽‍❤️‍👩🏽 👩🏽‍❤️‍👩🏾 👩🏽‍❤️‍👩🏿 👩🏾‍❤️‍👩🏻 👩🏾‍❤️‍👩🏼 👩🏾‍❤️‍👩🏽 👩🏾‍❤️‍👩🏾 👩🏾‍❤️‍👩🏿 👩🏿‍❤️‍👩🏻 👩🏿‍❤️‍👩🏼 👩🏿‍❤️‍👩🏽 👩🏿‍❤️‍👩🏾 👩🏿‍❤️‍👩🏿 👪 👨‍👩‍👦 👨‍👩‍👧 👨‍👩‍👧‍👦 👨‍👩‍👦‍👦 👨‍👩‍👧‍👧 👨‍👨‍👦 👨‍👨‍👧 👨‍👨‍👧‍👦 👨‍👨‍👦‍👦 👨‍👨‍👧‍👧 👩‍👩‍👦 👩‍👩‍👧 👩‍👩‍👧‍👦 👩‍👩‍👦‍👦 👩‍👩‍👧‍👧 👨‍👦 👨‍👦‍👦 👨‍👧 👨‍👧‍👦 👨‍👧‍👧 👩‍👦 👩‍👦‍👦 👩‍👧 👩‍👧‍👦 👩‍👧‍👧 🐕‍🦺 🐈‍⬛ 🐻‍❄️ 🐦‍⬛ 🏳️‍🌈 🏳️‍⚧️ 🏴‍☠️ </p>`,frontmatter:{hide:!1,srcSequence:"./pages/04-quirks.md"},note:`Full reference: https://unicode.org/Public/emoji/15.0/
ZJW: zwidje https://unicode.org/emoji/charts/emoji-zwj-sequences.html`,index:47,start:49,end:59,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/04-quirks.md",raw:`
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
`,id:47,no:48},__clicksElements:[],__preloaded:!1}},{path:"49",name:"page-49",component:v4,meta:{hide:!1,srcSequence:"./pages/04-quirks.md",slide:{raw:`
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

TL;DR; you shouldn't expect any ligatures/digraphs to be added to Unicode any time soon.`,frontmatter:{hide:!1,srcSequence:"./pages/04-quirks.md"},note:"http://unicode.org/faq/ligature_digraph.html",index:48,start:60,end:79,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/04-quirks.md",raw:`
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
`,id:48,no:49},__clicksElements:[],__preloaded:!1}},{path:"50",name:"page-50",component:S4,meta:{hide:!1,srcSequence:"./pages/04-quirks.md",slide:{raw:`
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
- local (gbeng, etc)`,frontmatter:{hide:!1,srcSequence:"./pages/04-quirks.md"},index:49,start:80,end:96,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/04-quirks.md",raw:`
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
- local (gbeng, etc)`,frontmatter:{},index:5,start:80,end:96},filepath:"/home/ben/Workspace/demystifying-unicode/pages/04-quirks.md",noteHTML:"",id:49,no:50},__clicksElements:[],__preloaded:!1}},{path:"51",name:"page-51",component:$4,meta:{hide:!1,srcSequence:"./pages/04-quirks.md",slide:{raw:`
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
\\uE0001-\\uE007F`,index:50,start:97,end:134,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/04-quirks.md",raw:`
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
`,id:50,no:51},__clicksElements:[],__preloaded:!1}},{path:"52",name:"page-52",component:P4,meta:{layout:"cover",hideInToc:!0,slide:{raw:`---
layout: cover
hideInToc: true
---

# THE END
`,title:"THE END",level:1,content:"# THE END",frontmatter:{layout:"cover",hideInToc:!0},index:51,start:58,end:65,noteHTML:"",filepath:"/home/ben/Workspace/demystifying-unicode/slides.md",id:51,no:52},__clicksElements:[],__preloaded:!1}}],U4=[],Ge=I4,ho=[{name:"play",path:"/",component:j2,children:[...Ge,...U4]},{name:"print",path:"/print",component:hS},{path:"",redirect:{path:"/1"}},{path:"/:pathMatch(.*)",redirect:{path:"/1"}}];{let e=function(t){if(!po.remote||po.remote===t.query.password)return!0;if(po.remote&&t.query.password===void 0){const n=prompt("Enter password");if(po.remote===n)return!0}return t.params.no?{path:`/${t.params.no}`}:{path:""}};ho.push({path:"/presenter/print",component:()=>Dn(()=>import("./PresenterPrint-bf5f1238.js"),["assets/PresenterPrint-bf5f1238.js","assets/NoteDisplay-03bd29ae.js"])}),ho.push({name:"notes",path:"/notes",component:()=>Dn(()=>import("./NotesView-775e8ad1.js"),["assets/NotesView-775e8ad1.js","assets/NoteDisplay-03bd29ae.js"]),beforeEnter:e}),ho.push({name:"presenter",path:"/presenter/:no",component:()=>Dn(()=>import("./Presenter-8c5768d6.js"),["assets/Presenter-8c5768d6.js","assets/NoteDisplay-03bd29ae.js","assets/DrawingControls-777e249a.js","assets/Presenter-aa6741a8.css"]),beforeEnter:e}),ho.push({path:"/presenter",redirect:{path:"/presenter/1"}})}const bt=$b({history:C_("/demystifying-unicode/"),routes:ho});function B4(e,t,{mode:n="replace"}={}){return P({get(){const s=bt.currentRoute.value.query[e];return s==null?t??null:Array.isArray(s)?s.filter(Boolean):s},set(s){ot(()=>{bt[O(n)]({query:{...bt.currentRoute.value.query,[e]:s}})})}})}const ih=K(0);ot(()=>{bt.afterEach(async()=>{await ot(),ih.value+=1})});const ah=K(0),Dt=P(()=>bt.currentRoute.value),_n=P(()=>Dt.value.query.print!==void 0),M4=P(()=>Dt.value.query.print==="clicks"),mn=P(()=>Dt.value.query.embedded!==void 0),vt=P(()=>Dt.value.path.startsWith("/presenter")),D4=P(()=>Dt.value.path.startsWith("/notes")),xo=P(()=>_n.value&&!M4.value),qa=P(()=>Dt.value.query.password),L4=P(()=>!vt.value&&(!$e.remote||qa.value===$e.remote)),zu=B4("clicks","0"),R4=P(()=>Ge.length),N4=P(()=>Dt.value.path),He=P(()=>Number.parseInt(N4.value.split(/\//g).slice(-1)[0])||1);P(()=>vi(He.value));const pt=P(()=>Ge.find(e=>e.path===`${He.value}`));P(()=>{var e,t,n;return(n=(t=(e=pt.value)==null?void 0:e.meta)==null?void 0:t.slide)==null?void 0:n.id});P(()=>{var e,t;return((t=(e=pt.value)==null?void 0:e.meta)==null?void 0:t.layout)||(He.value===1?"cover":"default")});const Hi=P(()=>Ge.find(e=>e.path===`${Math.min(Ge.length,He.value+1)}`)),j4=P(()=>Ge.find(e=>e.path===`${Math.max(1,He.value-1)}`)),W4=P(()=>{var e,t;return ih.value,((t=(e=pt.value)==null?void 0:e.meta)==null?void 0:t.__clicksElements)||[]}),Bt=P({get(){if(xo.value)return 99999;let e=+(zu.value||0);return Number.isNaN(e)&&(e=0),e},set(e){zu.value=e.toString()}}),Zr=P(()=>{var e,t;return+(((t=(e=pt.value)==null?void 0:e.meta)==null?void 0:t.clicks)??W4.value.length)}),q4=P(()=>He.value<Ge.length||Bt.value<Zr.value),H4=P(()=>He.value>1||Bt.value>0),V4=P(()=>Ge.filter(e=>{var t,n;return(n=(t=e.meta)==null?void 0:t.slide)==null?void 0:n.title}).reduce((e,t)=>(Ll(e,t),e),[])),z4=P(()=>Rl(V4.value,pt.value));P(()=>Nl(z4.value));const K4=P(()=>J4(ah.value,pt.value,j4.value));ye(pt,(e,t)=>{ah.value=Number(e==null?void 0:e.path)-Number(t==null?void 0:t.path)});function Rn(){Zr.value<=Bt.value?No():Bt.value+=1}async function Nn(){Bt.value<=0?await jo():Bt.value-=1}function vi(e){return vt.value?`/presenter/${e}`:`/${e}`}function No(){const e=Math.min(Ge.length,He.value+1);return qs(e)}async function jo(e=!0){const t=Math.max(1,He.value-1);await qs(t),e&&Zr.value&&bt.replace({query:{...Dt.value.query,clicks:Zr.value}})}function qs(e,t){return bt.push({path:vi(e),query:{...Dt.value.query,clicks:t}})}function G4(e){const t=K(0),{direction:n,distanceX:s,distanceY:o}=Zv(e,{onSwipeStart(r){r.pointerType==="touch"&&(Do.value||(t.value=Sa()))},onSwipeEnd(r){if(r.pointerType!=="touch"||!t.value||Do.value)return;const a=Math.abs(s.value),l=Math.abs(o.value);a/window.innerWidth>.3||a>100?n.value==="left"?Rn():Nn():(l/window.innerHeight>.4||l>200)&&(n.value==="down"?jo():No())}})}async function Ha(){const{saveAs:e}=await Dn(()=>import("./FileSaver.min-23a5d44b.js").then(t=>t.F),[]);e(typeof $e.download=="string"?$e.download:$e.exportFilename?`${$e.exportFilename}.pdf`:"/demystifying-unicode/slidev-exported.pdf",`${$e.title}.pdf`)}async function Y4(e){var t,n;if(e==null){const s=(n=(t=pt.value)==null?void 0:t.meta)==null?void 0:n.slide;if(!(s!=null&&s.filepath))return!1;e=`${s.filepath}:${s.start}`}return await fetch(`/__open-in-editor?file=${encodeURIComponent(e)}`),!0}function Ll(e,t,n=1){var o,r,a,l,c;const s=(r=(o=t.meta)==null?void 0:o.slide)==null?void 0:r.level;s&&s>n&&e.length>0?Ll(e[e.length-1].children,t,n+1):e.push({children:[],level:n,path:t.path,hideInToc:!!((a=t.meta)!=null&&a.hideInToc),title:(c=(l=t.meta)==null?void 0:l.slide)==null?void 0:c.title})}function Rl(e,t,n=!1,s){return e.map(o=>{const r={...o,active:o.path===(t==null?void 0:t.path),hasActiveParent:n};return r.children.length>0&&(r.children=Rl(r.children,t,r.active||r.hasActiveParent,r)),s&&(r.active||r.activeParent)&&(s.activeParent=!0),r})}function Nl(e,t=1){return e.filter(n=>!n.hideInToc).map(n=>({...n,children:Nl(n.children,t+1)}))}const Q4={"slide-left":"slide-left | slide-right","slide-right":"slide-right | slide-left","slide-up":"slide-up | slide-down","slide-down":"slide-down | slide-up"};function Z4(e,t=!1){if(!e||(typeof e=="string"&&(e={name:e}),!e.name))return;let n=e.name.includes("|")?e.name:Q4[e.name]||e.name;if(n.includes("|")){const[s,o]=n.split("|").map(r=>r.trim());n=t?o:s}if(n)return{...e,name:n}}function J4(e,t,n){var o,r;let s=e>0?(o=n==null?void 0:n.meta)==null?void 0:o.transition:(r=t==null?void 0:t.meta)==null?void 0:r.transition;return s||(s=$e.transition),Z4(s,e<0)}function X4(){const e=$e.titleTemplate.replace("%s",$e.title||"Slidev");Qf({title:e,htmlAttrs:$e.htmlAttrs}),T1(`${e} - shared`),O1(`${e} - drawings`);const t=`${location.origin}_${w1()}`;function n(){D4.value||!vt.value&&!y1.includes(location.host.split(":")[0])||(vt.value?(eo("page",+He.value),eo("clicks",Bt.value)):(eo("viewerPage",+He.value),eo("viewerClicks",Bt.value)),eo("lastUpdate",{id:t,type:vt.value?"presenter":"viewer",time:new Date().getTime()}))}bt.afterEach(n),ye(Bt,n),C1(s=>{var r;bt.currentRoute.value.path.match(/^\/(\d+|presenter)\/?/)&&((r=s.lastUpdate)==null?void 0:r.type)==="presenter"&&(+s.page!=+He.value||+Bt.value!=+s.clicks)&&bt.replace({path:vi(s.page),query:{...bt.currentRoute.value.query,clicks:s.clicks||0}})})}const e5=ke({__name:"App",setup(e){return R(G),X4(),(t,n)=>{const s=Ns("RouterView"),o=Ns("StarportCarrier");return w(),$(Ce,null,[V(s),V(o)],64)}}}),t5=Y(e5,[["__file","/home/ben/Workspace/demystifying-unicode/node_modules/@slidev/client/App.vue"]]);function Vi(e){return e!==null&&typeof e=="object"}function Va(e,t,n=".",s){if(!Vi(t))return Va(e,{},n,s);const o=Object.assign({},t);for(const r in e){if(r==="__proto__"||r==="constructor")continue;const a=e[r];a!=null&&(s&&s(o,r,a,n)||(Array.isArray(a)&&Array.isArray(o[r])?o[r]=[...a,...o[r]]:Vi(a)&&Vi(o[r])?o[r]=Va(a,o[r],(n?`${n}.`:"")+r.toString(),s):o[r]=a))}return o}function n5(e){return(...t)=>t.reduce((n,s)=>Va(n,s,"",e),{})}const s5=n5(),lh=1/60*1e3,o5=typeof performance<"u"?()=>performance.now():()=>Date.now(),ch=typeof window<"u"?e=>window.requestAnimationFrame(e):e=>setTimeout(()=>e(o5()),lh);function r5(e){let t=[],n=[],s=0,o=!1,r=!1;const a=new WeakSet,l={schedule:(c,u=!1,d=!1)=>{const f=d&&o,p=f?t:n;return u&&a.add(c),p.indexOf(c)===-1&&(p.push(c),f&&o&&(s=t.length)),c},cancel:c=>{const u=n.indexOf(c);u!==-1&&n.splice(u,1),a.delete(c)},process:c=>{if(o){r=!0;return}if(o=!0,[t,n]=[n,t],n.length=0,s=t.length,s)for(let u=0;u<s;u++){const d=t[u];d(c),a.has(d)&&(l.schedule(d),e())}o=!1,r&&(r=!1,l.process(c))}};return l}const i5=40;let za=!0,Wo=!1,Ka=!1;const Rs={delta:0,timestamp:0},Jo=["read","update","preRender","render","postRender"],_i=Jo.reduce((e,t)=>(e[t]=r5(()=>Wo=!0),e),{}),Ga=Jo.reduce((e,t)=>{const n=_i[t];return e[t]=(s,o=!1,r=!1)=>(Wo||c5(),n.schedule(s,o,r)),e},{}),a5=Jo.reduce((e,t)=>(e[t]=_i[t].cancel,e),{});Jo.reduce((e,t)=>(e[t]=()=>_i[t].process(Rs),e),{});const l5=e=>_i[e].process(Rs),uh=e=>{Wo=!1,Rs.delta=za?lh:Math.max(Math.min(e-Rs.timestamp,i5),1),Rs.timestamp=e,Ka=!0,Jo.forEach(l5),Ka=!1,Wo&&(za=!1,ch(uh))},c5=()=>{Wo=!0,za=!0,Ka||ch(uh)},dh=()=>Rs;function fh(e,t){var n={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(n[s]=e[s]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,s=Object.getOwnPropertySymbols(e);o<s.length;o++)t.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(e,s[o])&&(n[s[o]]=e[s[o]]);return n}var jl=function(){},qo=function(){};jl=function(e,t){!e&&typeof console<"u"&&console.warn(t)},qo=function(e,t){if(!e)throw new Error(t)};const Ya=(e,t,n)=>Math.min(Math.max(n,e),t),zi=.001,u5=.01,Ku=10,d5=.05,f5=1;function p5({duration:e=800,bounce:t=.25,velocity:n=0,mass:s=1}){let o,r;jl(e<=Ku*1e3,"Spring duration must be 10 seconds or less");let a=1-t;a=Ya(d5,f5,a),e=Ya(u5,Ku,e/1e3),a<1?(o=u=>{const d=u*a,f=d*e,p=d-n,h=Qa(u,a),m=Math.exp(-f);return zi-p/h*m},r=u=>{const f=u*a*e,p=f*n+n,h=Math.pow(a,2)*Math.pow(u,2)*e,m=Math.exp(-f),_=Qa(Math.pow(u,2),a);return(-o(u)+zi>0?-1:1)*((p-h)*m)/_}):(o=u=>{const d=Math.exp(-u*e),f=(u-n)*e+1;return-zi+d*f},r=u=>{const d=Math.exp(-u*e),f=(n-u)*(e*e);return d*f});const l=5/e,c=m5(o,r,l);if(e=e*1e3,isNaN(c))return{stiffness:100,damping:10,duration:e};{const u=Math.pow(c,2)*s;return{stiffness:u,damping:a*2*Math.sqrt(s*u),duration:e}}}const h5=12;function m5(e,t,n){let s=n;for(let o=1;o<h5;o++)s=s-e(s)/t(s);return s}function Qa(e,t){return e*Math.sqrt(1-t*t)}const g5=["duration","bounce"],y5=["stiffness","damping","mass"];function Gu(e,t){return t.some(n=>e[n]!==void 0)}function v5(e){let t=Object.assign({velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1},e);if(!Gu(e,y5)&&Gu(e,g5)){const n=p5(e);t=Object.assign(Object.assign(Object.assign({},t),n),{velocity:0,mass:1}),t.isResolvedFromDuration=!0}return t}function Wl(e){var{from:t=0,to:n=1,restSpeed:s=2,restDelta:o}=e,r=fh(e,["from","to","restSpeed","restDelta"]);const a={done:!1,value:t};let{stiffness:l,damping:c,mass:u,velocity:d,duration:f,isResolvedFromDuration:p}=v5(r),h=Yu,m=Yu;function _(){const k=d?-(d/1e3):0,x=n-t,S=c/(2*Math.sqrt(l*u)),b=Math.sqrt(l/u)/1e3;if(o===void 0&&(o=Math.min(Math.abs(n-t)/100,.4)),S<1){const A=Qa(b,S);h=E=>{const C=Math.exp(-S*b*E);return n-C*((k+S*b*x)/A*Math.sin(A*E)+x*Math.cos(A*E))},m=E=>{const C=Math.exp(-S*b*E);return S*b*C*(Math.sin(A*E)*(k+S*b*x)/A+x*Math.cos(A*E))-C*(Math.cos(A*E)*(k+S*b*x)-A*x*Math.sin(A*E))}}else if(S===1)h=A=>n-Math.exp(-b*A)*(x+(k+b*x)*A);else{const A=b*Math.sqrt(S*S-1);h=E=>{const C=Math.exp(-S*b*E),M=Math.min(A*E,300);return n-C*((k+S*b*x)*Math.sinh(M)+A*x*Math.cosh(M))/A}}}return _(),{next:k=>{const x=h(k);if(p)a.done=k>=f;else{const S=m(k)*1e3,b=Math.abs(S)<=s,A=Math.abs(n-x)<=o;a.done=b&&A}return a.value=a.done?n:x,a},flipTarget:()=>{d=-d,[t,n]=[n,t],_()}}}Wl.needsInterpolation=(e,t)=>typeof e=="string"||typeof t=="string";const Yu=e=>0,ph=(e,t,n)=>{const s=t-e;return s===0?1:(n-e)/s},ql=(e,t,n)=>-n*e+n*t+e,hh=(e,t)=>n=>Math.max(Math.min(n,t),e),ko=e=>e%1?Number(e.toFixed(5)):e,Ho=/(-)?([\d]*\.?[\d])+/g,Za=/(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,_5=/^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function Xo(e){return typeof e=="string"}const er={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},So=Object.assign(Object.assign({},er),{transform:hh(0,1)}),vr=Object.assign(Object.assign({},er),{default:1}),Hl=e=>({test:t=>Xo(t)&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),Jn=Hl("deg"),Ao=Hl("%"),_e=Hl("px"),Qu=Object.assign(Object.assign({},Ao),{parse:e=>Ao.parse(e)/100,transform:e=>Ao.transform(e*100)}),Vl=(e,t)=>n=>!!(Xo(n)&&_5.test(n)&&n.startsWith(e)||t&&Object.prototype.hasOwnProperty.call(n,t)),mh=(e,t,n)=>s=>{if(!Xo(s))return s;const[o,r,a,l]=s.match(Ho);return{[e]:parseFloat(o),[t]:parseFloat(r),[n]:parseFloat(a),alpha:l!==void 0?parseFloat(l):1}},ds={test:Vl("hsl","hue"),parse:mh("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:s=1})=>"hsla("+Math.round(e)+", "+Ao.transform(ko(t))+", "+Ao.transform(ko(n))+", "+ko(So.transform(s))+")"},b5=hh(0,255),Ki=Object.assign(Object.assign({},er),{transform:e=>Math.round(b5(e))}),Pn={test:Vl("rgb","red"),parse:mh("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:s=1})=>"rgba("+Ki.transform(e)+", "+Ki.transform(t)+", "+Ki.transform(n)+", "+ko(So.transform(s))+")"};function w5(e){let t="",n="",s="",o="";return e.length>5?(t=e.substr(1,2),n=e.substr(3,2),s=e.substr(5,2),o=e.substr(7,2)):(t=e.substr(1,1),n=e.substr(2,1),s=e.substr(3,1),o=e.substr(4,1),t+=t,n+=n,s+=s,o+=o),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(s,16),alpha:o?parseInt(o,16)/255:1}}const Ja={test:Vl("#"),parse:w5,transform:Pn.transform},yt={test:e=>Pn.test(e)||Ja.test(e)||ds.test(e),parse:e=>Pn.test(e)?Pn.parse(e):ds.test(e)?ds.parse(e):Ja.parse(e),transform:e=>Xo(e)?e:e.hasOwnProperty("red")?Pn.transform(e):ds.transform(e)},gh="${c}",yh="${n}";function x5(e){var t,n,s,o;return isNaN(e)&&Xo(e)&&((n=(t=e.match(Ho))===null||t===void 0?void 0:t.length)!==null&&n!==void 0?n:0)+((o=(s=e.match(Za))===null||s===void 0?void 0:s.length)!==null&&o!==void 0?o:0)>0}function vh(e){typeof e=="number"&&(e=`${e}`);const t=[];let n=0;const s=e.match(Za);s&&(n=s.length,e=e.replace(Za,gh),t.push(...s.map(yt.parse)));const o=e.match(Ho);return o&&(e=e.replace(Ho,yh),t.push(...o.map(er.parse))),{values:t,numColors:n,tokenised:e}}function _h(e){return vh(e).values}function bh(e){const{values:t,numColors:n,tokenised:s}=vh(e),o=t.length;return r=>{let a=s;for(let l=0;l<o;l++)a=a.replace(l<n?gh:yh,l<n?yt.transform(r[l]):ko(r[l]));return a}}const k5=e=>typeof e=="number"?0:e;function S5(e){const t=_h(e);return bh(e)(t.map(k5))}const tr={test:x5,parse:_h,createTransformer:bh,getAnimatableNone:S5},A5=new Set(["brightness","contrast","saturate","opacity"]);function E5(e){let[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[s]=n.match(Ho)||[];if(!s)return e;const o=n.replace(s,"");let r=A5.has(t)?1:0;return s!==n&&(r*=100),t+"("+r+o+")"}const T5=/([a-z-]*)\(.*?\)/g,Xa=Object.assign(Object.assign({},tr),{getAnimatableNone:e=>{const t=e.match(T5);return t?t.map(E5).join(" "):e}});function Gi(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function Zu({hue:e,saturation:t,lightness:n,alpha:s}){e/=360,t/=100,n/=100;let o=0,r=0,a=0;if(!t)o=r=a=n;else{const l=n<.5?n*(1+t):n+t-n*t,c=2*n-l;o=Gi(c,l,e+1/3),r=Gi(c,l,e),a=Gi(c,l,e-1/3)}return{red:Math.round(o*255),green:Math.round(r*255),blue:Math.round(a*255),alpha:s}}const C5=(e,t,n)=>{const s=e*e,o=t*t;return Math.sqrt(Math.max(0,n*(o-s)+s))},$5=[Ja,Pn,ds],Ju=e=>$5.find(t=>t.test(e)),Xu=e=>`'${e}' is not an animatable color. Use the equivalent color code instead.`,wh=(e,t)=>{let n=Ju(e),s=Ju(t);qo(!!n,Xu(e)),qo(!!s,Xu(t));let o=n.parse(e),r=s.parse(t);n===ds&&(o=Zu(o),n=Pn),s===ds&&(r=Zu(r),s=Pn);const a=Object.assign({},o);return l=>{for(const c in a)c!=="alpha"&&(a[c]=C5(o[c],r[c],l));return a.alpha=ql(o.alpha,r.alpha,l),n.transform(a)}},F5=e=>typeof e=="number",O5=(e,t)=>n=>t(e(n)),xh=(...e)=>e.reduce(O5);function kh(e,t){return F5(e)?n=>ql(e,t,n):yt.test(e)?wh(e,t):Ah(e,t)}const Sh=(e,t)=>{const n=[...e],s=n.length,o=e.map((r,a)=>kh(r,t[a]));return r=>{for(let a=0;a<s;a++)n[a]=o[a](r);return n}},P5=(e,t)=>{const n=Object.assign(Object.assign({},e),t),s={};for(const o in n)e[o]!==void 0&&t[o]!==void 0&&(s[o]=kh(e[o],t[o]));return o=>{for(const r in s)n[r]=s[r](o);return n}};function ed(e){const t=tr.parse(e),n=t.length;let s=0,o=0,r=0;for(let a=0;a<n;a++)s||typeof t[a]=="number"?s++:t[a].hue!==void 0?r++:o++;return{parsed:t,numNumbers:s,numRGB:o,numHSL:r}}const Ah=(e,t)=>{const n=tr.createTransformer(t),s=ed(e),o=ed(t);return s.numHSL===o.numHSL&&s.numRGB===o.numRGB&&s.numNumbers>=o.numNumbers?xh(Sh(s.parsed,o.parsed),n):(jl(!0,`Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`),a=>`${a>0?t:e}`)},I5=(e,t)=>n=>ql(e,t,n);function U5(e){if(typeof e=="number")return I5;if(typeof e=="string")return yt.test(e)?wh:Ah;if(Array.isArray(e))return Sh;if(typeof e=="object")return P5}function B5(e,t,n){const s=[],o=n||U5(e[0]),r=e.length-1;for(let a=0;a<r;a++){let l=o(e[a],e[a+1]);if(t){const c=Array.isArray(t)?t[a]:t;l=xh(c,l)}s.push(l)}return s}function M5([e,t],[n]){return s=>n(ph(e,t,s))}function D5(e,t){const n=e.length,s=n-1;return o=>{let r=0,a=!1;if(o<=e[0]?a=!0:o>=e[s]&&(r=s-1,a=!0),!a){let c=1;for(;c<n&&!(e[c]>o||c===s);c++);r=c-1}const l=ph(e[r],e[r+1],o);return t[r](l)}}function Eh(e,t,{clamp:n=!0,ease:s,mixer:o}={}){const r=e.length;qo(r===t.length,"Both input and output ranges must be the same length"),qo(!s||!Array.isArray(s)||s.length===r-1,"Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values."),e[0]>e[r-1]&&(e=[].concat(e),t=[].concat(t),e.reverse(),t.reverse());const a=B5(t,s,o),l=r===2?M5(e,a):D5(e,a);return n?c=>l(Ya(e[0],e[r-1],c)):l}const bi=e=>t=>1-e(1-t),zl=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,L5=e=>t=>Math.pow(t,e),Th=e=>t=>t*t*((e+1)*t-e),R5=e=>{const t=Th(e);return n=>(n*=2)<1?.5*t(n):.5*(2-Math.pow(2,-10*(n-1)))},Ch=1.525,N5=4/11,j5=8/11,W5=9/10,$h=e=>e,Kl=L5(2),q5=bi(Kl),Fh=zl(Kl),Oh=e=>1-Math.sin(Math.acos(e)),Ph=bi(Oh),H5=zl(Ph),Gl=Th(Ch),V5=bi(Gl),z5=zl(Gl),K5=R5(Ch),G5=4356/361,Y5=35442/1805,Q5=16061/1805,Jr=e=>{if(e===1||e===0)return e;const t=e*e;return e<N5?7.5625*t:e<j5?9.075*t-9.9*e+3.4:e<W5?G5*t-Y5*e+Q5:10.8*e*e-20.52*e+10.72},Z5=bi(Jr),J5=e=>e<.5?.5*(1-Jr(1-e*2)):.5*Jr(e*2-1)+.5;function X5(e,t){return e.map(()=>t||Fh).splice(0,e.length-1)}function eF(e){const t=e.length;return e.map((n,s)=>s!==0?s/(t-1):0)}function tF(e,t){return e.map(n=>n*t)}function Cr({from:e=0,to:t=1,ease:n,offset:s,duration:o=300}){const r={done:!1,value:e},a=Array.isArray(t)?t:[e,t],l=tF(s&&s.length===a.length?s:eF(a),o);function c(){return Eh(l,a,{ease:Array.isArray(n)?n:X5(a,n)})}let u=c();return{next:d=>(r.value=u(d),r.done=d>=o,r),flipTarget:()=>{a.reverse(),u=c()}}}function nF({velocity:e=0,from:t=0,power:n=.8,timeConstant:s=350,restDelta:o=.5,modifyTarget:r}){const a={done:!1,value:t};let l=n*e;const c=t+l,u=r===void 0?c:r(c);return u!==c&&(l=u-t),{next:d=>{const f=-l*Math.exp(-d/s);return a.done=!(f>o||f<-o),a.value=a.done?u:u+f,a},flipTarget:()=>{}}}const td={keyframes:Cr,spring:Wl,decay:nF};function sF(e){if(Array.isArray(e.to))return Cr;if(td[e.type])return td[e.type];const t=new Set(Object.keys(e));return t.has("ease")||t.has("duration")&&!t.has("dampingRatio")?Cr:t.has("dampingRatio")||t.has("stiffness")||t.has("mass")||t.has("damping")||t.has("restSpeed")||t.has("restDelta")?Wl:Cr}function Ih(e,t,n=0){return e-t-n}function oF(e,t,n=0,s=!0){return s?Ih(t+-e,t,n):t-(e-t)+n}function rF(e,t,n,s){return s?e>=t+n:e<=-n}const iF=e=>{const t=({delta:n})=>e(n);return{start:()=>Ga.update(t,!0),stop:()=>a5.update(t)}};function Uh(e){var t,n,{from:s,autoplay:o=!0,driver:r=iF,elapsed:a=0,repeat:l=0,repeatType:c="loop",repeatDelay:u=0,onPlay:d,onStop:f,onComplete:p,onRepeat:h,onUpdate:m}=e,_=fh(e,["from","autoplay","driver","elapsed","repeat","repeatType","repeatDelay","onPlay","onStop","onComplete","onRepeat","onUpdate"]);let{to:k}=_,x,S=0,b=_.duration,A,E=!1,C=!0,M;const I=sF(_);!((n=(t=I).needsInterpolation)===null||n===void 0)&&n.call(t,s,k)&&(M=Eh([0,100],[s,k],{clamp:!1}),s=0,k=100);const N=I(Object.assign(Object.assign({},_),{from:s,to:k}));function ne(){S++,c==="reverse"?(C=S%2===0,a=oF(a,b,u,C)):(a=Ih(a,b,u),c==="mirror"&&N.flipTarget()),E=!1,h&&h()}function ce(){x.stop(),p&&p()}function Q(ve){if(C||(ve=-ve),a+=ve,!E){const be=N.next(Math.max(0,a));A=be.value,M&&(A=M(A)),E=C?be.done:a<=0}m==null||m(A),E&&(S===0&&(b??(b=a)),S<l?rF(a,b,u,C)&&ne():ce())}function me(){d==null||d(),x=r(Q),x.start()}return o&&me(),{stop:()=>{f==null||f(),x.stop()}}}function Bh(e,t){return t?e*(1e3/t):0}function aF({from:e=0,velocity:t=0,min:n,max:s,power:o=.8,timeConstant:r=750,bounceStiffness:a=500,bounceDamping:l=10,restDelta:c=1,modifyTarget:u,driver:d,onUpdate:f,onComplete:p,onStop:h}){let m;function _(b){return n!==void 0&&b<n||s!==void 0&&b>s}function k(b){return n===void 0?s:s===void 0||Math.abs(n-b)<Math.abs(s-b)?n:s}function x(b){m==null||m.stop(),m=Uh(Object.assign(Object.assign({},b),{driver:d,onUpdate:A=>{var E;f==null||f(A),(E=b.onUpdate)===null||E===void 0||E.call(b,A)},onComplete:p,onStop:h}))}function S(b){x(Object.assign({type:"spring",stiffness:a,damping:l,restDelta:c},b))}if(_(e))S({from:e,velocity:t,to:k(e)});else{let b=o*t+e;typeof u<"u"&&(b=u(b));const A=k(b),E=A===n?-1:1;let C,M;const I=N=>{C=M,M=N,t=Bh(N-C,dh().delta),(E===1&&N>A||E===-1&&N<A)&&S({from:N,to:A,velocity:t})};x({type:"decay",from:e,velocity:t,timeConstant:r,power:o,restDelta:c,modifyTarget:u,onUpdate:_(b)?I:void 0})}return{stop:()=>m==null?void 0:m.stop()}}const Mh=(e,t)=>1-3*t+3*e,Dh=(e,t)=>3*t-6*e,Lh=e=>3*e,Xr=(e,t,n)=>((Mh(t,n)*e+Dh(t,n))*e+Lh(t))*e,Rh=(e,t,n)=>3*Mh(t,n)*e*e+2*Dh(t,n)*e+Lh(t),lF=1e-7,cF=10;function uF(e,t,n,s,o){let r,a,l=0;do a=t+(n-t)/2,r=Xr(a,s,o)-e,r>0?n=a:t=a;while(Math.abs(r)>lF&&++l<cF);return a}const dF=8,fF=.001;function pF(e,t,n,s){for(let o=0;o<dF;++o){const r=Rh(t,n,s);if(r===0)return t;const a=Xr(t,n,s)-e;t-=a/r}return t}const $r=11,_r=1/($r-1);function hF(e,t,n,s){if(e===t&&n===s)return $h;const o=new Float32Array($r);for(let a=0;a<$r;++a)o[a]=Xr(a*_r,e,n);function r(a){let l=0,c=1;const u=$r-1;for(;c!==u&&o[c]<=a;++c)l+=_r;--c;const d=(a-o[c])/(o[c+1]-o[c]),f=l+d*_r,p=Rh(f,e,n);return p>=fF?pF(a,f,e,n):p===0?f:uF(a,l,l+_r,e,n)}return a=>a===0||a===1?a:Xr(r(a),t,s)}const Yi={};class mF{constructor(){this.subscriptions=new Set}add(t){return this.subscriptions.add(t),()=>this.subscriptions.delete(t)}notify(t,n,s){if(this.subscriptions.size)for(const o of this.subscriptions)o(t,n,s)}clear(){this.subscriptions.clear()}}function nd(e){return!isNaN(parseFloat(e))}class gF{constructor(t){this.timeDelta=0,this.lastUpdated=0,this.updateSubscribers=new mF,this.canTrackVelocity=!1,this.updateAndNotify=n=>{this.prev=this.current,this.current=n;const{delta:s,timestamp:o}=dh();this.lastUpdated!==o&&(this.timeDelta=s,this.lastUpdated=o),Ga.postRender(this.scheduleVelocityCheck),this.updateSubscribers.notify(this.current)},this.scheduleVelocityCheck=()=>Ga.postRender(this.velocityCheck),this.velocityCheck=({timestamp:n})=>{this.canTrackVelocity||(this.canTrackVelocity=nd(this.current)),n!==this.lastUpdated&&(this.prev=this.current)},this.prev=this.current=t,this.canTrackVelocity=nd(this.current)}onChange(t){return this.updateSubscribers.add(t)}clearListeners(){this.updateSubscribers.clear()}set(t){this.updateAndNotify(t)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?Bh(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(t){return this.stop(),new Promise(n=>{const{stop:s}=t(n);this.stopAnimation=s}).then(()=>this.clearAnimation())}stop(){this.stopAnimation&&this.stopAnimation(),this.clearAnimation()}isAnimating(){return!!this.stopAnimation}clearAnimation(){this.stopAnimation=null}destroy(){this.updateSubscribers.clear(),this.stop()}}function yF(e){return new gF(e)}const{isArray:vF}=Array;function _F(){const e=K({}),t=s=>{const o=r=>{e.value[r]&&(e.value[r].stop(),e.value[r].destroy(),delete e.value[r])};s?vF(s)?s.forEach(o):o(s):Object.keys(e.value).forEach(o)},n=(s,o,r)=>{if(e.value[s])return e.value[s];const a=yF(o);return a.onChange(l=>r[s]=l),e.value[s]=a,a};return X1(t),{motionValues:e,get:n,stop:t}}function bF(e){return Array.isArray(e)}function Xn(){return{type:"spring",stiffness:500,damping:25,restDelta:.5,restSpeed:10}}function Qi(e){return{type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restDelta:.01,restSpeed:10}}function wF(e){return{type:"spring",stiffness:550,damping:e===0?100:30,restDelta:.01,restSpeed:10}}function Zi(){return{type:"keyframes",ease:"linear",duration:300}}function xF(e){return{type:"keyframes",duration:800,values:e}}const sd={default:wF,x:Xn,y:Xn,z:Xn,rotate:Xn,rotateX:Xn,rotateY:Xn,rotateZ:Xn,scaleX:Qi,scaleY:Qi,scale:Qi,backgroundColor:Zi,color:Zi,opacity:Zi};function Nh(e,t){let n;return bF(t)?n=xF:n=sd[e]||sd.default,{to:t,...n(t)}}const od={...er,transform:Math.round},jh={color:yt,backgroundColor:yt,outlineColor:yt,fill:yt,stroke:yt,borderColor:yt,borderTopColor:yt,borderRightColor:yt,borderBottomColor:yt,borderLeftColor:yt,borderWidth:_e,borderTopWidth:_e,borderRightWidth:_e,borderBottomWidth:_e,borderLeftWidth:_e,borderRadius:_e,radius:_e,borderTopLeftRadius:_e,borderTopRightRadius:_e,borderBottomRightRadius:_e,borderBottomLeftRadius:_e,width:_e,maxWidth:_e,height:_e,maxHeight:_e,size:_e,top:_e,right:_e,bottom:_e,left:_e,padding:_e,paddingTop:_e,paddingRight:_e,paddingBottom:_e,paddingLeft:_e,margin:_e,marginTop:_e,marginRight:_e,marginBottom:_e,marginLeft:_e,rotate:Jn,rotateX:Jn,rotateY:Jn,rotateZ:Jn,scale:vr,scaleX:vr,scaleY:vr,scaleZ:vr,skew:Jn,skewX:Jn,skewY:Jn,distance:_e,translateX:_e,translateY:_e,translateZ:_e,x:_e,y:_e,z:_e,perspective:_e,transformPerspective:_e,opacity:So,originX:Qu,originY:Qu,originZ:_e,zIndex:od,filter:Xa,WebkitFilter:Xa,fillOpacity:So,strokeOpacity:So,numOctaves:od},Yl=e=>jh[e];function Wh(e,t){return t&&typeof e=="number"&&t.transform?t.transform(e):e}function kF(e,t){let n=Yl(e);return n!==Xa&&(n=tr),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const SF={linear:$h,easeIn:Kl,easeInOut:Fh,easeOut:q5,circIn:Oh,circInOut:H5,circOut:Ph,backIn:Gl,backInOut:z5,backOut:V5,anticipate:K5,bounceIn:Z5,bounceInOut:J5,bounceOut:Jr};function rd(e){if(Array.isArray(e)){const[t,n,s,o]=e;return hF(t,n,s,o)}else if(typeof e=="string")return SF[e];return e}function AF(e){return Array.isArray(e)&&typeof e[0]!="number"}function id(e,t){return e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&tr.test(t)&&!t.startsWith("url("))}function EF(e){return Array.isArray(e.to)&&e.to[0]===null&&(e.to=[...e.to],e.to[0]=e.from),e}function TF({ease:e,times:t,delay:n,...s}){const o={...s};return t&&(o.offset=t),e&&(o.ease=AF(e)?e.map(rd):rd(e)),n&&(o.elapsed=-n),o}function CF(e,t,n){return Array.isArray(t.to)&&(e.duration||(e.duration=800)),EF(t),$F(e)||(e={...e,...Nh(n,t.to)}),{...t,...TF(e)}}function $F({delay:e,repeat:t,repeatType:n,repeatDelay:s,from:o,...r}){return!!Object.keys(r).length}function FF(e,t){return e[t]||e.default||e}function OF(e,t,n,s,o){const r=FF(s,e);let a=r.from===null||r.from===void 0?t.get():r.from;const l=id(e,n);a==="none"&&l&&typeof n=="string"&&(a=kF(e,n));const c=id(e,a);function u(f){const p={from:a,to:n,velocity:s.velocity?s.velocity:t.getVelocity(),onUpdate:h=>t.set(h)};return r.type==="inertia"||r.type==="decay"?aF({...p,...r}):Uh({...CF(r,p,e),onUpdate:h=>{p.onUpdate(h),r.onUpdate&&r.onUpdate(h)},onComplete:()=>{s.onComplete&&s.onComplete(),o&&o(),f&&f()}})}function d(f){return t.set(n),s.onComplete&&s.onComplete(),o&&o(),f&&f(),{stop:()=>{}}}return!c||!l||r.type===!1?d:u}function PF(){const{motionValues:e,stop:t,get:n}=_F();return{motionValues:e,stop:t,push:(o,r,a,l={},c)=>{const u=a[o],d=n(o,u,a);if(l&&l.immediate){d.set(r);return}const f=OF(o,d,r,l,c);d.start(f)}}}function IF(e,t={},{motionValues:n,push:s,stop:o}=PF()){const r=O(t),a=K(!1);ye(n,f=>{a.value=Object.values(f).filter(p=>p.isAnimating()).length>0},{immediate:!0,deep:!0});const l=f=>{if(!r||!r[f])throw new Error(`The variant ${f} does not exist.`);return r[f]},c=f=>(typeof f=="string"&&(f=l(f)),Promise.all(Object.entries(f).map(([p,h])=>{if(p!=="transition")return new Promise(m=>s(p,h,e,f.transition||Nh(p,f[p]),m))}).filter(Boolean)));return{isAnimating:a,apply:c,set:f=>{const p=ka(f)?f:l(f);Object.entries(p).forEach(([h,m])=>{h!=="transition"&&s(h,m,e,{immediate:!0})})},leave:async f=>{let p;if(r&&(r.leave&&(p=r.leave),!r.leave&&r.initial&&(p=r.initial)),!p){f();return}await c(p),f()},stop:o}}const Ql=typeof window<"u",UF=()=>Ql&&window.onpointerdown===null,BF=()=>Ql&&window.ontouchstart===null,MF=()=>Ql&&window.onmousedown===null;function DF({target:e,state:t,variants:n,apply:s}){const o=O(n),r=K(!1),a=K(!1),l=K(!1),c=P(()=>{let d=[];return o&&(o.hovered&&(d=[...d,...Object.keys(o.hovered)]),o.tapped&&(d=[...d,...Object.keys(o.tapped)]),o.focused&&(d=[...d,...Object.keys(o.focused)])),d}),u=P(()=>{const d={};Object.assign(d,t.value),r.value&&o.hovered&&Object.assign(d,o.hovered),a.value&&o.tapped&&Object.assign(d,o.tapped),l.value&&o.focused&&Object.assign(d,o.focused);for(const f in d)c.value.includes(f)||delete d[f];return d});o.hovered&&(we(e,"mouseenter",()=>r.value=!0),we(e,"mouseleave",()=>{r.value=!1,a.value=!1}),we(e,"mouseout",()=>{r.value=!1,a.value=!1})),o.tapped&&(MF()&&(we(e,"mousedown",()=>a.value=!0),we(e,"mouseup",()=>a.value=!1)),UF()&&(we(e,"pointerdown",()=>a.value=!0),we(e,"pointerup",()=>a.value=!1)),BF()&&(we(e,"touchstart",()=>a.value=!0),we(e,"touchend",()=>a.value=!1))),o.focused&&(we(e,"focus",()=>l.value=!0),we(e,"blur",()=>l.value=!1)),ye(u,s)}function LF({set:e,target:t,variants:n,variant:s}){const o=O(n);ye(()=>t,()=>{o&&(o.initial&&e("initial"),o.enter&&(s.value="enter"))},{immediate:!0,flush:"pre"})}function RF({state:e,apply:t}){ye(e,n=>{n&&t(n)},{immediate:!0})}function NF({target:e,variants:t,variant:n}){const s=O(t);s&&(s.visible||s.visibleOnce)&&zv(e,([{isIntersecting:o}])=>{s.visible?o?n.value="visible":n.value="initial":s.visibleOnce&&(o&&n.value!=="visibleOnce"?n.value="visibleOnce":n.value||(n.value="initial"))})}function jF(e,t={syncVariants:!0,lifeCycleHooks:!0,visibilityHooks:!0,eventListeners:!0}){t.lifeCycleHooks&&LF(e),t.syncVariants&&RF(e),t.visibilityHooks&&NF(e),t.eventListeners&&DF(e)}function qh(e={}){const t=qe({...e}),n=K({});return ye(t,()=>{const s={};for(const[o,r]of Object.entries(t)){const a=Yl(o),l=Wh(r,a);s[o]=l}n.value=s},{immediate:!0,deep:!0}),{state:t,style:n}}function Zl(e,t){ye(()=>rt(e),n=>{n&&t(n)},{immediate:!0})}const WF={x:"translateX",y:"translateY",z:"translateZ"};function Hh(e={},t=!0){const n=qe({...e}),s=K("");return ye(n,o=>{let r="",a=!1;if(t&&(o.x||o.y||o.z)){const l=[o.x||0,o.y||0,o.z||0].map(_e.transform).join(",");r+=`translate3d(${l}) `,a=!0}for(const[l,c]of Object.entries(o)){if(t&&(l==="x"||l==="y"||l==="z"))continue;const u=Yl(l),d=Wh(c,u);r+=`${WF[l]||l}(${d}) `}t&&!a&&(r+="translateZ(0px) "),s.value=r.trim()},{immediate:!0,deep:!0}),{state:n,transform:s}}const qF=["","X","Y","Z"],HF=["perspective","translate","scale","rotate","skew"],Vh=["transformPerspective","x","y","z"];HF.forEach(e=>{qF.forEach(t=>{const n=e+t;Vh.push(n)})});const VF=new Set(Vh);function Jl(e){return VF.has(e)}const zF=new Set(["originX","originY","originZ"]);function zh(e){return zF.has(e)}function KF(e){const t={},n={};return Object.entries(e).forEach(([s,o])=>{Jl(s)||zh(s)?t[s]=o:n[s]=o}),{transform:t,style:n}}function Kh(e){const{transform:t,style:n}=KF(e),{transform:s}=Hh(t),{style:o}=qh(n);return s.value&&(o.value.transform=s.value),o.value}function GF(e,t){let n,s;const{state:o,style:r}=qh();return Zl(e,a=>{s=a;for(const l of Object.keys(jh))a.style[l]===null||a.style[l]===""||Jl(l)||zh(l)||(o[l]=a.style[l]);n&&Object.entries(n).forEach(([l,c])=>a.style[l]=c),t&&t(o)}),ye(r,a=>{if(!s){n=a;return}for(const l in a)s.style[l]=a[l]},{immediate:!0}),{style:o}}function YF(e){const t=e.trim().split(/\) |\)/);if(t.length===1)return{};const n=s=>s.endsWith("px")||s.endsWith("deg")?parseFloat(s):isNaN(Number(s))?Number(s):s;return t.reduce((s,o)=>{if(!o)return s;const[r,a]=o.split("("),c=a.split(",").map(d=>n(d.endsWith(")")?d.replace(")",""):d.trim())),u=c.length===1?c[0]:c;return{...s,[r]:u}},{})}function QF(e,t){Object.entries(YF(t)).forEach(([n,s])=>{const o=["x","y","z"];if(n==="translate3d"){if(s===0){o.forEach(r=>e[r]=0);return}s.forEach((r,a)=>e[o[a]]=r);return}if(s=parseFloat(s),n==="translateX"){e.x=s;return}if(n==="translateY"){e.y=s;return}if(n==="translateZ"){e.z=s;return}e[n]=s})}function ZF(e,t){let n,s;const{state:o,transform:r}=Hh();return Zl(e,a=>{s=a,a.style.transform&&QF(o,a.style.transform),n&&(a.style.transform=n),t&&t(o)}),ye(r,a=>{if(!s){n=a;return}s.style.transform=a},{immediate:!0}),{transform:o}}function JF(e,t){const n=qe({}),s=a=>Object.entries(a).forEach(([l,c])=>n[l]=c),{style:o}=GF(e,s),{transform:r}=ZF(e,s);return ye(n,a=>{Object.entries(a).forEach(([l,c])=>{const u=Jl(l)?r:o;u[l]&&u[l]===c||(u[l]=c)})},{immediate:!0,deep:!0}),Zl(e,()=>t&&s(t)),{motionProperties:n,style:o,transform:r}}function XF(e={}){const t=O(e),n=K();return{state:P(()=>{if(n.value)return t[n.value]}),variant:n}}function Gh(e,t={},n){const{motionProperties:s}=JF(e),{variant:o,state:r}=XF(t),a=IF(s,t),l={target:e,variant:o,variants:t,state:r,motionProperties:s,...a};return jF(l,n),l}const e6=["initial","enter","leave","visible","visible-once","hovered","tapped","focused","delay"];function t6(e,t){const n=e.props?e.props:e.data&&e.data.attrs?e.data.attrs:{};n&&(n.variants&&ka(n.variants)&&(t.value={...t.value,...n.variants}),e6.forEach(s=>{if(s==="delay"){if(n&&n[s]&&typeof n[s]=="number"){const o=n[s];t&&t.value&&(t.value.enter&&(t.value.enter.transition||(t.value.enter.transition={}),t.value.enter.transition={delay:o,...t.value.enter.transition}),t.value.visible&&(t.value.visible.transition||(t.value.visible.transition={}),t.value.visible.transition={delay:o,...t.value.visible.transition}),t.value.visibleOnce&&(t.value.visibleOnce.transition||(t.value.visibleOnce.transition={}),t.value.visibleOnce.transition={delay:o,...t.value.visibleOnce.transition}))}return}s==="visible-once"&&(s="visibleOnce"),n&&n[s]&&ka(n[s])&&(t.value[s]=n[s])}))}function Ji(e){return{created:(n,s,o)=>{const r=s.value&&typeof s.value=="string"?s.value:o.key;r&&Yi[r]&&Yi[r].stop();const a=K(e||{});typeof s.value=="object"&&(a.value=s.value),t6(o,a);const l=Gh(n,a);n.motionInstance=l,r&&(Yi[r]=l)},getSSRProps(n,s){let{initial:o}=n.value||s&&(s==null?void 0:s.props)||{};o=O(o);const r=s5((e==null?void 0:e.initial)||{},o||{});return!r||Object.keys(r).length===0?void 0:{style:Kh(r)}}}}const n6={initial:{opacity:0},enter:{opacity:1}},s6={initial:{opacity:0},visible:{opacity:1}},o6={initial:{opacity:0},visibleOnce:{opacity:1}},r6={initial:{scale:0,opacity:0},enter:{scale:1,opacity:1}},i6={initial:{scale:0,opacity:0},visible:{scale:1,opacity:1}},a6={initial:{scale:0,opacity:0},visibleOnce:{scale:1,opacity:1}},l6={initial:{x:-100,rotate:90,opacity:0},enter:{x:0,rotate:0,opacity:1}},c6={initial:{x:-100,rotate:90,opacity:0},visible:{x:0,rotate:0,opacity:1}},u6={initial:{x:-100,rotate:90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},d6={initial:{x:100,rotate:-90,opacity:0},enter:{x:0,rotate:0,opacity:1}},f6={initial:{x:100,rotate:-90,opacity:0},visible:{x:0,rotate:0,opacity:1}},p6={initial:{x:100,rotate:-90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},h6={initial:{y:-100,rotate:-90,opacity:0},enter:{y:0,rotate:0,opacity:1}},m6={initial:{y:-100,rotate:-90,opacity:0},visible:{y:0,rotate:0,opacity:1}},g6={initial:{y:-100,rotate:-90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},y6={initial:{y:100,rotate:90,opacity:0},enter:{y:0,rotate:0,opacity:1}},v6={initial:{y:100,rotate:90,opacity:0},visible:{y:0,rotate:0,opacity:1}},_6={initial:{y:100,rotate:90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},b6={initial:{x:-100,opacity:0},enter:{x:0,opacity:1}},w6={initial:{x:-100,opacity:0},visible:{x:0,opacity:1}},x6={initial:{x:-100,opacity:0},visibleOnce:{x:0,opacity:1}},k6={initial:{x:100,opacity:0},enter:{x:0,opacity:1}},S6={initial:{x:100,opacity:0},visible:{x:0,opacity:1}},A6={initial:{x:100,opacity:0},visibleOnce:{x:0,opacity:1}},E6={initial:{y:-100,opacity:0},enter:{y:0,opacity:1}},T6={initial:{y:-100,opacity:0},visible:{y:0,opacity:1}},C6={initial:{y:-100,opacity:0},visibleOnce:{y:0,opacity:1}},$6={initial:{y:100,opacity:0},enter:{y:0,opacity:1}},F6={initial:{y:100,opacity:0},visible:{y:0,opacity:1}},O6={initial:{y:100,opacity:0},visibleOnce:{y:0,opacity:1}},el={__proto__:null,fade:n6,fadeVisible:s6,fadeVisibleOnce:o6,pop:r6,popVisible:i6,popVisibleOnce:a6,rollBottom:y6,rollLeft:l6,rollRight:d6,rollTop:h6,rollVisibleBottom:v6,rollVisibleLeft:c6,rollVisibleOnceBottom:_6,rollVisibleOnceLeft:u6,rollVisibleOnceRight:p6,rollVisibleOnceTop:g6,rollVisibleRight:f6,rollVisibleTop:m6,slideBottom:$6,slideLeft:b6,slideRight:k6,slideTop:E6,slideVisibleBottom:F6,slideVisibleLeft:w6,slideVisibleOnceBottom:O6,slideVisibleOnceLeft:x6,slideVisibleOnceRight:A6,slideVisibleOnceTop:C6,slideVisibleRight:S6,slideVisibleTop:T6},P6=ke({props:{is:{type:[String,Object],required:!1},preset:{type:String,required:!1},instance:{type:Object,required:!1},variants:{type:Object,required:!1},initial:{type:Object,required:!1},enter:{type:Object,required:!1},leave:{type:Object,required:!1},visible:{type:Object,required:!1},visibleOnce:{type:Object,required:!1},hovered:{type:Object,required:!1},tapped:{type:Object,required:!1},focused:{type:Object,required:!1},delay:{type:[Number,String],required:!1}},setup(e){var l;const t=K0(),n=qe({});if(!e.is&&!t.default)return()=>Je("div",{});const s=P(()=>{let c;return e.preset&&(c=el[e.preset]),c}),o=P(()=>({initial:e.initial,enter:e.enter,leave:e.leave,visible:e.visible,visibleOnce:e.visibleOnce,hovered:e.hovered,tapped:e.tapped,focused:e.focused})),r=P(()=>{const c={...o.value,...s.value||{},...e.variants||{}};return e.delay&&(c.enter.transition={...c.enter.transition},c.enter.transition.delay=parseInt(e.delay)),c}),a=P(()=>{if(!e.is)return;let c=e.is;return typeof a.value=="string"&&!Ad(c)&&(c=Ns(c)),c});if(((l=process==null?void 0:process.env)==null?void 0:l.NODE_ENV)==="development"||process!=null&&process.dev){const c=u=>{var d;(d=u.variants)!=null&&d.initial&&u.set("initial"),setTimeout(()=>{var f,p,h;(f=u.variants)!=null&&f.enter&&u.apply("enter"),(p=u.variants)!=null&&p.visible&&u.apply("visible"),(h=u.variants)!=null&&h.visibleOnce&&u.apply("visibleOnce")},10)};fi(()=>Object.entries(n).forEach(([u,d])=>c(d)))}return{slots:t,component:a,motionConfig:r,instances:n}},render({slots:e,motionConfig:t,instances:n,component:s}){var l;const o=Kh(t.initial||{}),r=(c,u)=>(c.props||(c.props={}),c.props.style=o,c.props.onVnodeMounted=({el:d})=>{const f=Gh(d,t);n[u]=f},c);if(s){const c=Je(s,void 0,e);return r(c,0),c}return(((l=e.default)==null?void 0:l.call(e))||[]).map((c,u)=>r(c,u))}});function I6(e){const t="àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;",n="aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------",s=new RegExp(t.split("").join("|"),"g");return e.toString().replace(/[A-Z]/g,o=>`-${o}`).toLowerCase().replace(/\s+/g,"-").replace(s,o=>n.charAt(t.indexOf(o))).replace(/&/g,"-and-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}const U6={install(e,t){if(e.directive("motion",Ji()),e.component("Motion",P6),!t||t&&!t.excludePresets)for(const n in el){const s=el[n];e.directive(`motion-${I6(n)}`,Ji(s))}if(t&&t.directives)for(const n in t.directives){const s=t.directives[n];s.initial,e.directive(`motion-${n}`,Ji(s))}}};var ad;const Eo=typeof window<"u",B6=Object.prototype.toString,M6=e=>B6.call(e)==="[object Object]";Eo&&((ad=window==null?void 0:window.navigator)!=null&&ad.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function D6(e){return il()?($d(e),!0):!1}function L6(e){var t;const n=O(e);return(t=n==null?void 0:n.$el)!=null?t:n}const R6=Eo?window:void 0,ld=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},cd="__vueuse_ssr_handlers__";ld[cd]=ld[cd]||{};function N6(e,t={}){const{immediate:n=!0,window:s=R6}=t,o=K(!1);let r=null;function a(){!o.value||!s||(e(),r=s.requestAnimationFrame(a))}function l(){!o.value&&s&&(o.value=!0,a())}function c(){o.value=!1,r!=null&&s&&(s.cancelAnimationFrame(r),r=null)}return n&&l(),D6(c),{isActive:o,pause:c,resume:l}}var ud;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(ud||(ud={}));const wi="vue-starport-injection",Yh="vue-starport-options",j6={duration:800,easing:"cubic-bezier(0.45, 0, 0.55, 1)",keepAlive:!1},Qh={port:{type:String,required:!0},duration:{type:Number,required:!1},easing:{type:String,required:!1},keepAlive:{type:Boolean,required:!1,default:void 0},mountedProps:{type:Object,required:!1},initialProps:{type:Object,required:!1}};var W6=Object.defineProperty,ei=Object.getOwnPropertySymbols,Zh=Object.prototype.hasOwnProperty,Jh=Object.prototype.propertyIsEnumerable,dd=(e,t,n)=>t in e?W6(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,q6=(e,t)=>{for(var n in t||(t={}))Zh.call(t,n)&&dd(e,n,t[n]);if(ei)for(var n of ei(t))Jh.call(t,n)&&dd(e,n,t[n]);return e},fd=(e,t)=>{var n={};for(var s in e)Zh.call(e,s)&&t.indexOf(s)<0&&(n[s]=e[s]);if(e!=null&&ei)for(var s of ei(e))t.indexOf(s)<0&&Jh.call(e,s)&&(n[s]=e[s]);return n};const H6=ke({name:"StarportProxy",props:q6({props:{type:Object,default:()=>({})},component:{type:Object,required:!0}},Qh),setup(e,t){const n=R(wi),s=P(()=>n.getInstance(e.port,e.component)),o=K(),r=s.value.generateId(),a=K(!1);return s.value.isVisible||(s.value.land(),a.value=!0),Vn(async()=>{if(s.value.el){console.error(`[Vue Starport] Multiple proxies of "${s.value.componentName}" with port "${e.port}" detected. The later one will be ignored.`);return}if(s.value.el=o.value,await ot(),a.value=!0,s.value.rect.update(),s.value.rect.width===0||s.value.rect.height===0){const l=s.value.rect.width===0?"width":"height";console.warn(`[Vue Starport] The proxy of component "${s.value.componentName}" (port "${e.port}") has no ${l} on initial render, have you set the size for it?`),console.warn("element:",s.value.el),console.warn("rect:",s.value.rect)}}),Go(async()=>{s.value.rect.update(),s.value.liftOff(),s.value.el=void 0,a.value=!1,!s.value.options.keepAlive&&(await ot(),await ot(),!s.value.el&&n.dispose(s.value.port))}),ye(()=>e,async()=>{s.value.props&&await ot();const l=e,{props:c}=l,u=fd(l,["props"]);s.value.props=c||{},s.value.setLocalOptions(u)},{deep:!0,immediate:!0}),()=>{const l=e,{initialProps:c,mountedProps:u}=l,d=fd(l,["initialProps","mountedProps"]),f=zt(d,(a.value?u:c)||{});return Je("div",zt(f,{id:r,ref:o,"data-starport-proxy":s.value.componentId,"data-starport-landed":s.value.isLanded?"true":void 0,"data-starport-floating":s.value.isLanded?void 0:"true"}),t.slots.default?Je(t.slots.default):void 0)}}});var V6=Object.defineProperty,z6=Object.defineProperties,K6=Object.getOwnPropertyDescriptors,pd=Object.getOwnPropertySymbols,G6=Object.prototype.hasOwnProperty,Y6=Object.prototype.propertyIsEnumerable,hd=(e,t,n)=>t in e?V6(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Q6=(e,t)=>{for(var n in t||(t={}))G6.call(t,n)&&hd(e,n,t[n]);if(pd)for(var n of pd(t))Y6.call(t,n)&&hd(e,n,t[n]);return e},Z6=(e,t)=>z6(e,K6(t));const J6=ke({name:"Starport",inheritAttrs:!0,props:Qh,setup(e,t){const n=K(!1);return Vn(()=>{if(n.value=!0,!R(wi))throw new Error("[Vue Starport] Failed to find the carrier, all Starport components must be wrapped in a <StarportCarrier> component.")}),()=>{var a,l;const s=(l=(a=t.slots).default)==null?void 0:l.call(a);if(!s)throw new Error("[Vue Starport] Slot is required to use <Starport>");if(s.length!==1)throw new Error(`[Vue Starport] <Starport> requires exactly one slot, but got ${s.length}`);const o=s[0];let r=o.type;return(!M6(r)||an(r))&&(r={render(){return s}}),Je(H6,Z6(Q6({},e),{key:e.port,component:ii(r),props:o.props}))}}});function X6(e){const t=qe({height:0,width:0,left:0,top:0,update:s,listen:r,pause:a,margin:"0px",padding:"0px"}),n=Eo?document.documentElement||document.body:void 0;function s(){if(!Eo)return;const l=L6(e);if(!l)return;const{height:c,width:u,left:d,top:f}=l.getBoundingClientRect(),p=window.getComputedStyle(l),h=p.margin,m=p.padding;Object.assign(t,{height:c,width:u,left:d,top:n.scrollTop+f,margin:h,padding:m})}const o=N6(s,{immediate:!1});function r(){Eo&&(s(),o.resume())}function a(){o.pause()}return t}let eO=(e,t=21)=>(n=t)=>{let s="",o=n;for(;o--;)s+=e[Math.random()*e.length|0];return s};const md=eO("abcdefghijklmnopqrstuvwxyz",5);function gd(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase().replace(/[^\w\d_-]/g,"")}function tO(e){var t;return e.name||((t=e.__file)==null?void 0:t.split(/[\/\\.]/).slice(-2)[0])||""}var nO=Object.defineProperty,yd=Object.getOwnPropertySymbols,sO=Object.prototype.hasOwnProperty,oO=Object.prototype.propertyIsEnumerable,vd=(e,t,n)=>t in e?nO(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Xi=(e,t)=>{for(var n in t||(t={}))sO.call(t,n)&&vd(e,n,t[n]);if(yd)for(var n of yd(t))oO.call(t,n)&&vd(e,n,t[n]);return e};function rO(e,t,n={}){const s=tO(t),o=gd(s)||md(),r=K(),a=K(null),l=K(!1),c=K(!1),u=gm(!0),d=K({}),f=P(()=>Xi(Xi(Xi({},j6),n),d.value)),p=K(0);let h;u.run(()=>{h=X6(r),ye(r,async x=>{x&&(c.value=!0),await ot(),r.value||(c.value=!1)})});const m=gd(e);function _(){return`starport-${o}-${m}-${md()}`}const k=_();return qe({el:r,id:k,port:e,props:a,rect:h,scope:u,isLanded:l,isVisible:c,options:f,liftOffTime:p,component:t,componentName:s,componentId:o,generateId:_,setLocalOptions(x={}){d.value=JSON.parse(JSON.stringify(x))},elRef(){return r},liftOff(){l.value&&(l.value=!1,p.value=Date.now(),h.listen())},land(){l.value||(l.value=!0,h.pause())}})}function iO(e){const t=qe(new Map);function n(o,r){let a=t.get(o);return a||(a=rO(o,r,e),t.set(o,a)),a.component=r,a}function s(o){var r;(r=t.get(o))==null||r.scope.stop(),t.delete(o)}return{portMap:t,dispose:s,getInstance:n}}var aO=Object.defineProperty,lO=Object.defineProperties,cO=Object.getOwnPropertyDescriptors,_d=Object.getOwnPropertySymbols,uO=Object.prototype.hasOwnProperty,dO=Object.prototype.propertyIsEnumerable,bd=(e,t,n)=>t in e?aO(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,fO=(e,t)=>{for(var n in t||(t={}))uO.call(t,n)&&bd(e,n,t[n]);if(_d)for(var n of _d(t))dO.call(t,n)&&bd(e,n,t[n]);return e},pO=(e,t)=>lO(e,cO(t));const hO=ke({name:"StarportCraft",props:{port:{type:String,required:!0},component:{type:Object,required:!0}},setup(e){const t=R(wi);if(!t)throw new Error("[Vue Starport] Failed to find the carrier, all Starport components must be wrapped in a <StarportCarrier> component.");const n=P(()=>t.getInstance(e.port,e.component)),s=P(()=>{var a;return((a=n.value.el)==null?void 0:a.id)||n.value.id}),o=P(()=>{const a=Date.now()-n.value.liftOffTime,l=Math.max(0,n.value.options.duration-a),c=n.value.rect,u={position:"absolute",left:0,top:0,width:`${c.width}px`,height:`${c.height}px`,margin:c.margin,padding:c.padding,transform:`translate3d(${c.left}px,${c.top}px,0px)`};return!n.value.isVisible||!n.value.el?pO(fO({},u),{zIndex:-1,display:"none"}):(n.value.isLanded?u.display="none":Object.assign(u,{transitionProperty:"all",transitionDuration:`${l}ms`,transitionTimingFunction:n.value.options.easing}),u)}),r={onTransitionend(a){n.value.isLanded||console.warn(`[Vue Starport] Transition duration of component "${n.value.componentName}" is too short (${a.elapsedTime}s) that may cause animation glitches. Try to increase the duration of that component, or decrease the duration the Starport (current: ${n.value.options.duration/1e3}s).`)}};return()=>{const a=!!(n.value.isLanded&&n.value.el);return Je("div",{style:o.value,"data-starport-craft":n.value.componentId,"data-starport-landed":n.value.isLanded?"true":void 0,"data-starport-floating":n.value.isLanded?void 0:"true",onTransitionend:n.value.land},Je(wg,{to:a?`#${s.value}`:"body",disabled:!a},Je(n.value.component,zt(r,n.value.props))))}}}),mO=ke({name:"StarportCarrier",setup(e,{slots:t}){const n=iO(R(Yh,{}));return $t().appContext.app.provide(wi,n),()=>{var o;return[(o=t.default)==null?void 0:o.call(t),Array.from(n.portMap.entries()).map(([r,{component:a}])=>Je(hO,{key:r,port:r,component:a}))]}}});function gO(e={}){return{install(t){t.provide(Yh,e),t.component("Starport",J6),t.component("StarportCarrier",mO)}}}function yO(e){function t(){document.documentElement.style.setProperty("--vh",`${window.innerHeight*.01}px`)}t(),window.addEventListener("resize",t),e.app.use(U6),e.app.use(gO({keepAlive:!0}))}function xt(e,t,n){var s;return((s=e.instance)==null?void 0:s.$).provides[t]??n}function vO(){return{install(e){e.directive("click",{name:"v-click",mounted(t,n){var d,f,p,h,m,_;if(xo.value||(d=xt(n,vo))!=null&&d.value)return;const s=xt(n,rs),o=xt(n,yo),r=xt(n,wa),a=n.modifiers.hide!==!1&&n.modifiers.hide!=null,l=n.modifiers.fade!==!1&&n.modifiers.fade!=null,c=((f=s==null?void 0:s.value)==null?void 0:f.length)||0,u=l?g1:Ii;if(s&&!((p=s==null?void 0:s.value)!=null&&p.includes(t))&&s.value.push(t),n.value==null&&(n.value=(h=s==null?void 0:s.value)==null?void 0:h.length),typeof n.value=="string"&&(n.value.startsWith("+")||n.value.startsWith("-"))&&(n.value=(((m=s==null?void 0:s.value)==null?void 0:m.length)||0)+Number(n.value)),!(r!=null&&r.value.has(n.value)))r==null||r.value.set(n.value,[t]);else if(!((_=r==null?void 0:r.value.get(n.value))!=null&&_.includes(t))){const k=(r==null?void 0:r.value.get(n.value))||[];r==null||r.value.set(n.value,[t].concat(k))}t==null||t.classList.toggle(ts,!0),o&&ye(o,()=>{const k=(o==null?void 0:o.value)??0,x=n.value!=null?k>=n.value:k>c;t.classList.contains(Ui)||t.classList.toggle(u,!x),a!==!1&&a!==void 0&&t.classList.toggle(u,x),t.classList.toggle(Xs,!1);const S=r==null?void 0:r.value.get(k);S==null||S.forEach((b,A)=>{b.classList.toggle(fr,!1),A===S.length-1?b.classList.toggle(Xs,!0):b.classList.toggle(fr,!0)}),t.classList.contains(Xs)||t.classList.toggle(fr,x)},{immediate:!0})},unmounted(t,n){t==null||t.classList.toggle(ts,!1);const s=xt(n,rs);s!=null&&s.value&&xa(s.value,t)}}),e.directive("after",{name:"v-after",mounted(t,n){var l,c,u;if(xo.value||(l=xt(n,vo))!=null&&l.value)return;const s=xt(n,rs),o=xt(n,yo),r=xt(n,wa),a=s==null?void 0:s.value.length;n.value==null&&(n.value=s==null?void 0:s.value.length),typeof n.value=="string"&&(n.value.startsWith("+")||n.value.startsWith("-"))&&(n.value=(((c=s==null?void 0:s.value)==null?void 0:c.length)||0)+Number(n.value)),r!=null&&r.value.has(n.value)?(u=r==null?void 0:r.value.get(n.value))==null||u.push(t):r==null||r.value.set(n.value,[t]),t==null||t.classList.toggle(ts,!0),o&&ye(o,()=>{const d=(o.value??0)>=(n.value??a??0);t.classList.contains(Ui)||t.classList.toggle(Ii,!d),t.classList.toggle(Xs,!1),t.classList.contains(Xs)||t.classList.toggle(fr,d)},{immediate:!0})},unmounted(t){t==null||t.classList.toggle(ts,!0)}}),e.directive("click-hide",{name:"v-click-hide",mounted(t,n){var a,l,c;if(xo.value||(a=xt(n,vo))!=null&&a.value)return;const s=xt(n,rs),o=xt(n,yo),r=((l=s==null?void 0:s.value)==null?void 0:l.length)||0;s&&!((c=s==null?void 0:s.value)!=null&&c.includes(t))&&s.value.push(t),t==null||t.classList.toggle(ts,!0),o&&ye(o,()=>{const u=(o==null?void 0:o.value)??0,d=n.value!=null?u>=n.value:u>r;t.classList.toggle(Ii,d),t.classList.toggle(Ui,d)},{immediate:!0})},unmounted(t,n){t==null||t.classList.toggle(ts,!1);const s=xt(n,rs);s!=null&&s.value&&xa(s.value,t)}})}}}function _O(e,t){const n=sh(e),s=oh(t,n.currentRoute,n.currentPage);return{nav:{...n,...s},configs:$e,themeConfigs:P(()=>$e.themeConfig)}}function bO(){return{install(e){const t=_O(Dt,Bt);e.provide(G,qe(t))}}}const Ks=_y(t5);Ks.use(bt);Ks.use(p1());Ks.use(vO());Ks.use(bO());yO({app:Ks,router:bt});Ks.mount("#app");export{L2 as $,n2 as A,K as B,SO as C,pt as D,Re as E,Ce as F,xw as G,G4 as H,Bt as I,Zr as J,q4 as K,Hi as L,Vn as M,qe as N,xO as O,AO as P,ye as Q,j as R,Dp as S,Fe as T,ft as U,Bw as V,sf as W,of as X,Do as Y,Ni as Z,Y as _,G as a,Il as a0,Ul as a1,I2 as a2,He as a3,Mx as a4,wO as a5,wt as a6,io as a7,yr as a8,us as a9,tn as aa,Ua as ab,cw as ac,uw as ad,dw as ae,pw as af,Ht as ag,Nf as ah,EO as ai,mt as aj,yk as ak,Zf as al,hw as am,Go as an,Qf as b,$e as c,ke as d,t0 as e,$ as f,i as g,O as h,R as i,Ge as j,R4 as k,y as l,V as m,Xe as n,w as o,ge as p,Tl as q,As as r,Gt as s,wn as t,kO as u,P as v,Bi as w,H as x,$p as y,a2 as z};
