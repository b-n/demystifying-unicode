(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(o){if(o.ep)return;o.ep=!0;const r=n(o);fetch(o.href,r)}})();function qn(e,t){const n=Object.create(null),s=e.split(",");for(let o=0;o<s.length;o++)n[s[o]]=!0;return t?o=>!!n[o.toLowerCase()]:o=>!!n[o]}const Be=Object.freeze({}),Ms=Object.freeze([]),_t=()=>{},wd=()=>!1,Zh=/^on[^a-z]/,Ho=e=>Zh.test(e),$r=e=>e.startsWith("onUpdate:"),je=Object.assign,tl=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Qh=Object.prototype.hasOwnProperty,Te=(e,t)=>Qh.call(e,t),re=Array.isArray,us=e=>Vo(e)==="[object Map]",xd=e=>Vo(e)==="[object Set]",Jh=e=>Vo(e)==="[object RegExp]",de=e=>typeof e=="function",We=e=>typeof e=="string",nl=e=>typeof e=="symbol",Oe=e=>e!==null&&typeof e=="object",sl=e=>Oe(e)&&de(e.then)&&de(e.catch),kd=Object.prototype.toString,Vo=e=>kd.call(e),ol=e=>Vo(e).slice(8,-1),Sd=e=>Vo(e)==="[object Object]",rl=e=>We(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,_r=qn(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Xh=qn("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"),ti=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},em=/-(\w)/g,sn=ti(e=>e.replace(em,(t,n)=>n?n.toUpperCase():"")),tm=/\B([A-Z])/g,_n=ti(e=>e.replace(tm,"-$1").toLowerCase()),vs=ti(e=>e.charAt(0).toUpperCase()+e.slice(1)),Jn=ti(e=>e?`on${vs(e)}`:""),Co=(e,t)=>!Object.is(e,t),es=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Fr=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},nm=e=>{const t=parseFloat(e);return isNaN(t)?e:t},sm=e=>{const t=We(e)?Number(e):NaN;return isNaN(t)?e:t};let nc;const Or=()=>nc||(nc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Xe(e){if(re(e)){const t={};for(let n=0;n<e.length;n++){const s=e[n],o=We(s)?am(s):Xe(s);if(o)for(const r in o)t[r]=o[r]}return t}else{if(We(e))return e;if(Oe(e))return e}}const om=/;(?![^(]*\))/g,rm=/:([^]+)/,im=/\/\*[^]*?\*\//g;function am(e){const t={};return e.replace(im,"").split(om).forEach(n=>{if(n){const s=n.split(rm);s.length>1&&(t[s[0].trim()]=s[1].trim())}}),t}function De(e){let t="";if(We(e))t=e;else if(re(e))for(let n=0;n<e.length;n++){const s=De(e[n]);s&&(t+=s+" ")}else if(Oe(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}function ue(e){if(!e)return null;let{class:t,style:n}=e;return t&&!We(t)&&(e.class=De(t)),n&&(e.style=Xe(n)),e}const lm="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",cm="svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view",Td=qn(lm),um=qn(cm),dm="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",fm=qn(dm);function Ed(e){return!!e||e===""}const bn=e=>We(e)?e:e==null?"":re(e)||Oe(e)&&(e.toString===kd||!de(e.toString))?JSON.stringify(e,Cd,2):String(e),Cd=(e,t)=>t&&t.__v_isRef?Cd(e,t.value):us(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[s,o])=>(n[`${s} =>`]=o,n),{})}:xd(t)?{[`Set(${t.size})`]:[...t.values()]}:Oe(t)&&!re(t)&&!Sd(t)?String(t):t;function Ir(e,...t){console.warn(`[Vue warn] ${e}`,...t)}let St;class Ad{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=St,!t&&St&&(this.index=(St.scopes||(St.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=St;try{return St=this,t()}finally{St=n}}else Ir("cannot run an inactive effect scope.")}on(){St=this}off(){St=this.parent}stop(t){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const o=this.parent.scopes.pop();o&&o!==this&&(this.parent.scopes[this.index]=o,o.index=this.index)}this.parent=void 0,this._active=!1}}}function pm(e){return new Ad(e)}function hm(e,t=St){t&&t.active&&t.effects.push(e)}function il(){return St}function $d(e){St?St.cleanups.push(e):Ir("onScopeDispose() is called when there is no active effect scope to be associated with.")}const al=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Fd=e=>(e.w&Nn)>0,Od=e=>(e.n&Nn)>0,mm=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=Nn},gm=e=>{const{deps:t}=e;if(t.length){let n=0;for(let s=0;s<t.length;s++){const o=t[s];Fd(o)&&!Od(o)?o.delete(e):t[n++]=o,o.w&=~Nn,o.n&=~Nn}t.length=n}},Ur=new WeakMap;let ao=0,Nn=1;const ea=30;let pt;const ds=Symbol("iterate"),ta=Symbol("Map key iterate");class ll{constructor(t,n=null,s){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,hm(this,s)}run(){if(!this.active)return this.fn();let t=pt,n=In;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=pt,pt=this,In=!0,Nn=1<<++ao,ao<=ea?mm(this):sc(this),this.fn()}finally{ao<=ea&&gm(this),Nn=1<<--ao,pt=this.parent,In=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){pt===this?this.deferStop=!0:this.active&&(sc(this),this.onStop&&this.onStop(),this.active=!1)}}function sc(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let In=!0;const Id=[];function bs(){Id.push(In),In=!1}function ws(){const e=Id.pop();In=e===void 0?!0:e}function lt(e,t,n){if(In&&pt){let s=Ur.get(e);s||Ur.set(e,s=new Map);let o=s.get(n);o||s.set(n,o=al()),Ud(o,{effect:pt,target:e,type:t,key:n})}}function Ud(e,t){let n=!1;ao<=ea?Od(e)||(e.n|=Nn,n=!Fd(e)):n=!e.has(pt),n&&(e.add(pt),pt.deps.push(e),pt.onTrack&&pt.onTrack(je({effect:pt},t)))}function on(e,t,n,s,o,r){const a=Ur.get(e);if(!a)return;let l=[];if(t==="clear")l=[...a.values()];else if(n==="length"&&re(e)){const u=Number(s);a.forEach((d,f)=>{(f==="length"||f>=u)&&l.push(d)})}else switch(n!==void 0&&l.push(a.get(n)),t){case"add":re(e)?rl(n)&&l.push(a.get("length")):(l.push(a.get(ds)),us(e)&&l.push(a.get(ta)));break;case"delete":re(e)||(l.push(a.get(ds)),us(e)&&l.push(a.get(ta)));break;case"set":us(e)&&l.push(a.get(ds));break}const c={target:e,type:t,key:n,newValue:s,oldValue:o,oldTarget:r};if(l.length===1)l[0]&&na(l[0],c);else{const u=[];for(const d of l)d&&u.push(...d);na(al(u),c)}}function na(e,t){const n=re(e)?e:[...e];for(const s of n)s.computed&&oc(s,t);for(const s of n)s.computed||oc(s,t)}function oc(e,t){(e!==pt||e.allowRecurse)&&(e.onTrigger&&e.onTrigger(je({effect:e},t)),e.scheduler?e.scheduler():e.run())}function ym(e,t){var n;return(n=Ur.get(e))==null?void 0:n.get(t)}const vm=qn("__proto__,__v_isRef,__isVue"),Pd=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(nl)),_m=ni(),bm=ni(!1,!0),wm=ni(!0),xm=ni(!0,!0),rc=km();function km(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const s=he(this);for(let r=0,a=this.length;r<a;r++)lt(s,"get",r+"");const o=s[t](...n);return o===-1||o===!1?s[t](...n.map(he)):o}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){bs();const s=he(this)[t].apply(this,n);return ws(),s}}),e}function Sm(e){const t=he(this);return lt(t,"has",e),t.hasOwnProperty(e)}function ni(e=!1,t=!1){return function(s,o,r){if(o==="__v_isReactive")return!e;if(o==="__v_isReadonly")return e;if(o==="__v_isShallow")return t;if(o==="__v_raw"&&r===(e?t?Wd:jd:t?Nd:Rd).get(s))return s;const a=re(s);if(!e){if(a&&Te(rc,o))return Reflect.get(rc,o,r);if(o==="hasOwnProperty")return Sm}const l=Reflect.get(s,o,r);return(nl(o)?Pd.has(o):vm(o))||(e||lt(s,"get",o),t)?l:Fe(l)?a&&rl(o)?l:l.value:Oe(l)?e?qt(l):qe(l):l}}const Tm=Md(),Em=Md(!0);function Md(e=!1){return function(n,s,o,r){let a=n[s];if(jn(a)&&Fe(a)&&!Fe(o))return!1;if(!e&&(!Pr(o)&&!jn(o)&&(a=he(a),o=he(o)),!re(n)&&Fe(a)&&!Fe(o)))return a.value=o,!0;const l=re(n)&&rl(s)?Number(s)<n.length:Te(n,s),c=Reflect.set(n,s,o,r);return n===he(r)&&(l?Co(o,a)&&on(n,"set",s,o,a):on(n,"add",s,o)),c}}function Cm(e,t){const n=Te(e,t),s=e[t],o=Reflect.deleteProperty(e,t);return o&&n&&on(e,"delete",t,void 0,s),o}function Am(e,t){const n=Reflect.has(e,t);return(!nl(t)||!Pd.has(t))&&lt(e,"has",t),n}function $m(e){return lt(e,"iterate",re(e)?"length":ds),Reflect.ownKeys(e)}const Ld={get:_m,set:Tm,deleteProperty:Cm,has:Am,ownKeys:$m},Bd={get:wm,set(e,t){return Ir(`Set operation on key "${String(t)}" failed: target is readonly.`,e),!0},deleteProperty(e,t){return Ir(`Delete operation on key "${String(t)}" failed: target is readonly.`,e),!0}},Fm=je({},Ld,{get:bm,set:Em}),Om=je({},Bd,{get:xm}),cl=e=>e,si=e=>Reflect.getPrototypeOf(e);function tr(e,t,n=!1,s=!1){e=e.__v_raw;const o=he(e),r=he(t);n||(t!==r&&lt(o,"get",t),lt(o,"get",r));const{has:a}=si(o),l=s?cl:n?ul:Ao;if(a.call(o,t))return l(e.get(t));if(a.call(o,r))return l(e.get(r));e!==o&&e.get(t)}function nr(e,t=!1){const n=this.__v_raw,s=he(n),o=he(e);return t||(e!==o&&lt(s,"has",e),lt(s,"has",o)),e===o?n.has(e):n.has(e)||n.has(o)}function sr(e,t=!1){return e=e.__v_raw,!t&&lt(he(e),"iterate",ds),Reflect.get(e,"size",e)}function ic(e){e=he(e);const t=he(this);return si(t).has.call(t,e)||(t.add(e),on(t,"add",e,e)),this}function ac(e,t){t=he(t);const n=he(this),{has:s,get:o}=si(n);let r=s.call(n,e);r?Dd(n,s,e):(e=he(e),r=s.call(n,e));const a=o.call(n,e);return n.set(e,t),r?Co(t,a)&&on(n,"set",e,t,a):on(n,"add",e,t),this}function lc(e){const t=he(this),{has:n,get:s}=si(t);let o=n.call(t,e);o?Dd(t,n,e):(e=he(e),o=n.call(t,e));const r=s?s.call(t,e):void 0,a=t.delete(e);return o&&on(t,"delete",e,void 0,r),a}function cc(){const e=he(this),t=e.size!==0,n=us(e)?new Map(e):new Set(e),s=e.clear();return t&&on(e,"clear",void 0,void 0,n),s}function or(e,t){return function(s,o){const r=this,a=r.__v_raw,l=he(a),c=t?cl:e?ul:Ao;return!e&&lt(l,"iterate",ds),a.forEach((u,d)=>s.call(o,c(u),c(d),r))}}function rr(e,t,n){return function(...s){const o=this.__v_raw,r=he(o),a=us(r),l=e==="entries"||e===Symbol.iterator&&a,c=e==="keys"&&a,u=o[e](...s),d=n?cl:t?ul:Ao;return!t&&lt(r,"iterate",c?ta:ds),{next(){const{value:f,done:p}=u.next();return p?{value:f,done:p}:{value:l?[d(f[0]),d(f[1])]:d(f),done:p}},[Symbol.iterator](){return this}}}}function kn(e){return function(...t){{const n=t[0]?`on key "${t[0]}" `:"";console.warn(`${vs(e)} operation ${n}failed: target is readonly.`,he(this))}return e==="delete"?!1:this}}function Im(){const e={get(r){return tr(this,r)},get size(){return sr(this)},has:nr,add:ic,set:ac,delete:lc,clear:cc,forEach:or(!1,!1)},t={get(r){return tr(this,r,!1,!0)},get size(){return sr(this)},has:nr,add:ic,set:ac,delete:lc,clear:cc,forEach:or(!1,!0)},n={get(r){return tr(this,r,!0)},get size(){return sr(this,!0)},has(r){return nr.call(this,r,!0)},add:kn("add"),set:kn("set"),delete:kn("delete"),clear:kn("clear"),forEach:or(!0,!1)},s={get(r){return tr(this,r,!0,!0)},get size(){return sr(this,!0)},has(r){return nr.call(this,r,!0)},add:kn("add"),set:kn("set"),delete:kn("delete"),clear:kn("clear"),forEach:or(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{e[r]=rr(r,!1,!1),n[r]=rr(r,!0,!1),t[r]=rr(r,!1,!0),s[r]=rr(r,!0,!0)}),[e,n,t,s]}const[Um,Pm,Mm,Lm]=Im();function oi(e,t){const n=t?e?Lm:Mm:e?Pm:Um;return(s,o,r)=>o==="__v_isReactive"?!e:o==="__v_isReadonly"?e:o==="__v_raw"?s:Reflect.get(Te(n,o)&&o in s?n:s,o,r)}const Bm={get:oi(!1,!1)},Dm={get:oi(!1,!0)},Rm={get:oi(!0,!1)},Nm={get:oi(!0,!0)};function Dd(e,t,n){const s=he(n);if(s!==n&&t.call(e,s)){const o=ol(e);console.warn(`Reactive ${o} contains both the raw and reactive versions of the same object${o==="Map"?" as keys":""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`)}}const Rd=new WeakMap,Nd=new WeakMap,jd=new WeakMap,Wd=new WeakMap;function jm(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Wm(e){return e.__v_skip||!Object.isExtensible(e)?0:jm(ol(e))}function qe(e){return jn(e)?e:ri(e,!1,Ld,Bm,Rd)}function qm(e){return ri(e,!1,Fm,Dm,Nd)}function qt(e){return ri(e,!0,Bd,Rm,jd)}function lo(e){return ri(e,!0,Om,Nm,Wd)}function ri(e,t,n,s,o){if(!Oe(e))return console.warn(`value cannot be made reactive: ${String(e)}`),e;if(e.__v_raw&&!(t&&e.__v_isReactive))return e;const r=o.get(e);if(r)return r;const a=Wm(e);if(a===0)return e;const l=new Proxy(e,a===2?s:n);return o.set(e,l),l}function fs(e){return jn(e)?fs(e.__v_raw):!!(e&&e.__v_isReactive)}function jn(e){return!!(e&&e.__v_isReadonly)}function Pr(e){return!!(e&&e.__v_isShallow)}function Mr(e){return fs(e)||jn(e)}function he(e){const t=e&&e.__v_raw;return t?he(t):e}function ii(e){return Fr(e,"__v_skip",!0),e}const Ao=e=>Oe(e)?qe(e):e,ul=e=>Oe(e)?qt(e):e;function dl(e){In&&pt&&(e=he(e),Ud(e.dep||(e.dep=al()),{target:e,type:"get",key:"value"}))}function fl(e,t){e=he(e);const n=e.dep;n&&na(n,{target:e,type:"set",key:"value",newValue:t})}function Fe(e){return!!(e&&e.__v_isRef===!0)}function z(e){return qd(e,!1)}function rn(e){return qd(e,!0)}function qd(e,t){return Fe(e)?e:new Hm(e,t)}class Hm{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:he(t),this._value=n?t:Ao(t)}get value(){return dl(this),this._value}set value(t){const n=this.__v_isShallow||Pr(t)||jn(t);t=n?t:he(t),Co(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:Ao(t),fl(this,t))}}function O(e){return Fe(e)?e.value:e}const Vm={get:(e,t,n)=>O(Reflect.get(e,t,n)),set:(e,t,n,s)=>{const o=e[t];return Fe(o)&&!Fe(n)?(o.value=n,!0):Reflect.set(e,t,n,s)}};function Hd(e){return fs(e)?e:new Proxy(e,Vm)}class zm{constructor(t){this.dep=void 0,this.__v_isRef=!0;const{get:n,set:s}=t(()=>dl(this),()=>fl(this));this._get=n,this._set=s}get value(){return this._get()}set value(t){this._set(t)}}function pl(e){return new zm(e)}function Km(e){Mr(e)||console.warn("toRefs() expects a reactive object but received a plain one.");const t=re(e)?new Array(e.length):{};for(const n in e)t[n]=Vd(e,n);return t}class Gm{constructor(t,n,s){this._object=t,this._key=n,this._defaultValue=s,this.__v_isRef=!0}get value(){const t=this._object[this._key];return t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}get dep(){return ym(he(this._object),this._key)}}class Ym{constructor(t){this._getter=t,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function Zm(e,t,n){return Fe(e)?e:de(e)?new Ym(e):Oe(e)&&arguments.length>1?Vd(e,t,n):z(e)}function Vd(e,t,n){const s=e[t];return Fe(s)?s:new Gm(e,t,n)}class Qm{constructor(t,n,s,o){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new ll(t,()=>{this._dirty||(this._dirty=!0,fl(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!o,this.__v_isReadonly=s}get value(){const t=he(this);return dl(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function Jm(e,t,n=!1){let s,o;const r=de(e);r?(s=e,o=()=>{console.warn("Write operation failed: computed value is readonly")}):(s=e.get,o=e.set);const a=new Qm(s,o,r||!o,n);return t&&!n&&(a.effect.onTrack=t.onTrack,a.effect.onTrigger=t.onTrigger),a}const ps=[];function br(e){ps.push(e)}function wr(){ps.pop()}function B(e,...t){bs();const n=ps.length?ps[ps.length-1].component:null,s=n&&n.appContext.config.warnHandler,o=Xm();if(s)yn(s,n,11,[e+t.join(""),n&&n.proxy,o.map(({vnode:r})=>`at <${gi(n,r.type)}>`).join(`
`),o]);else{const r=[`[Vue warn]: ${e}`,...t];o.length&&r.push(`
`,...eg(o)),console.warn(...r)}ws()}function Xm(){let e=ps[ps.length-1];if(!e)return[];const t=[];for(;e;){const n=t[0];n&&n.vnode===e?n.recurseCount++:t.push({vnode:e,recurseCount:0});const s=e.component&&e.component.parent;e=s&&s.vnode}return t}function eg(e){const t=[];return e.forEach((n,s)=>{t.push(...s===0?[]:[`
`],...tg(n))}),t}function tg({vnode:e,recurseCount:t}){const n=t>0?`... (${t} recursive calls)`:"",s=e.component?e.component.parent==null:!1,o=` at <${gi(e.component,e.type,s)}`,r=">"+n;return e.props?[o,...ng(e.props),r]:[o+r]}function ng(e){const t=[],n=Object.keys(e);return n.slice(0,3).forEach(s=>{t.push(...zd(s,e[s]))}),n.length>3&&t.push(" ..."),t}function zd(e,t,n){return We(t)?(t=JSON.stringify(t),n?t:[`${e}=${t}`]):typeof t=="number"||typeof t=="boolean"||t==null?n?t:[`${e}=${t}`]:Fe(t)?(t=zd(e,he(t.value),!0),n?t:[`${e}=Ref<`,t,">"]):de(t)?[`${e}=fn${t.name?`<${t.name}>`:""}`]:(t=he(t),n?t:[`${e}=`,t])}function sg(e,t){e!==void 0&&(typeof e!="number"?B(`${t} is not a valid number - got ${JSON.stringify(e)}.`):isNaN(e)&&B(`${t} is NaN - the duration expression might be incorrect.`))}const hl={sp:"serverPrefetch hook",bc:"beforeCreate hook",c:"created hook",bm:"beforeMount hook",m:"mounted hook",bu:"beforeUpdate hook",u:"updated",bum:"beforeUnmount hook",um:"unmounted hook",a:"activated hook",da:"deactivated hook",ec:"errorCaptured hook",rtc:"renderTracked hook",rtg:"renderTriggered hook",[0]:"setup function",[1]:"render function",[2]:"watcher getter",[3]:"watcher callback",[4]:"watcher cleanup function",[5]:"native event handler",[6]:"component event handler",[7]:"vnode hook",[8]:"directive hook",[9]:"transition hook",[10]:"app errorHandler",[11]:"app warnHandler",[12]:"ref function",[13]:"async component loader",[14]:"scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core"};function yn(e,t,n,s){let o;try{o=s?e(...s):e()}catch(r){ai(r,t,n)}return o}function Lt(e,t,n,s){if(de(e)){const r=yn(e,t,n,s);return r&&sl(r)&&r.catch(a=>{ai(a,t,n)}),r}const o=[];for(let r=0;r<e.length;r++)o.push(Lt(e[r],t,n,s));return o}function ai(e,t,n,s=!0){const o=t?t.vnode:null;if(t){let r=t.parent;const a=t.proxy,l=hl[n];for(;r;){const u=r.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](e,a,l)===!1)return}r=r.parent}const c=t.appContext.config.errorHandler;if(c){yn(c,null,10,[e,a,l]);return}}og(e,n,o,s)}function og(e,t,n,s=!0){{const o=hl[t];if(n&&br(n),B(`Unhandled error${o?` during execution of ${o}`:""}`),n&&wr(),s)throw e;console.error(e)}}let $o=!1,sa=!1;const st=[];let Qt=0;const Ls=[];let Zt=null,Cn=0;const Kd=Promise.resolve();let ml=null;const rg=100;function ot(e){const t=ml||Kd;return e?t.then(this?e.bind(this):e):t}function ig(e){let t=Qt+1,n=st.length;for(;t<n;){const s=t+n>>>1;Fo(st[s])<e?t=s+1:n=s}return t}function li(e){(!st.length||!st.includes(e,$o&&e.allowRecurse?Qt+1:Qt))&&(e.id==null?st.push(e):st.splice(ig(e.id),0,e),Gd())}function Gd(){!$o&&!sa&&(sa=!0,ml=Kd.then(Qd))}function ag(e){const t=st.indexOf(e);t>Qt&&st.splice(t,1)}function Yd(e){re(e)?Ls.push(...e):(!Zt||!Zt.includes(e,e.allowRecurse?Cn+1:Cn))&&Ls.push(e),Gd()}function uc(e,t=$o?Qt+1:0){for(e=e||new Map;t<st.length;t++){const n=st[t];if(n&&n.pre){if(gl(e,n))continue;st.splice(t,1),t--,n()}}}function Zd(e){if(Ls.length){const t=[...new Set(Ls)];if(Ls.length=0,Zt){Zt.push(...t);return}for(Zt=t,e=e||new Map,Zt.sort((n,s)=>Fo(n)-Fo(s)),Cn=0;Cn<Zt.length;Cn++)gl(e,Zt[Cn])||Zt[Cn]();Zt=null,Cn=0}}const Fo=e=>e.id==null?1/0:e.id,lg=(e,t)=>{const n=Fo(e)-Fo(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function Qd(e){sa=!1,$o=!0,e=e||new Map,st.sort(lg);const t=n=>gl(e,n);try{for(Qt=0;Qt<st.length;Qt++){const n=st[Qt];if(n&&n.active!==!1){if(t(n))continue;yn(n,null,14)}}}finally{Qt=0,st.length=0,Zd(e),$o=!1,ml=null,(st.length||Ls.length)&&Qd(e)}}function gl(e,t){if(!e.has(t))e.set(t,1);else{const n=e.get(t);if(n>rg){const s=t.ownerInstance,o=s&&Uo(s.type);return B(`Maximum recursive updates exceeded${o?` in component <${o}>`:""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`),!0}else e.set(t,n+1)}}let Un=!1;const Us=new Set;Or().__VUE_HMR_RUNTIME__={createRecord:xi(Jd),rerender:xi(dg),reload:xi(fg)};const _s=new Map;function cg(e){const t=e.type.__hmrId;let n=_s.get(t);n||(Jd(t,e.type),n=_s.get(t)),n.instances.add(e)}function ug(e){_s.get(e.type.__hmrId).instances.delete(e)}function Jd(e,t){return _s.has(e)?!1:(_s.set(e,{initialDef:mo(t),instances:new Set}),!0)}function mo(e){return Of(e)?e.__vccOpts:e}function dg(e,t){const n=_s.get(e);n&&(n.initialDef.render=t,[...n.instances].forEach(s=>{t&&(s.render=t,mo(s.type).render=t),s.renderCache=[],Un=!0,s.update(),Un=!1}))}function fg(e,t){const n=_s.get(e);if(!n)return;t=mo(t),dc(n.initialDef,t);const s=[...n.instances];for(const o of s){const r=mo(o.type);Us.has(r)||(r!==n.initialDef&&dc(r,t),Us.add(r)),o.appContext.propsCache.delete(o.type),o.appContext.emitsCache.delete(o.type),o.appContext.optionsCache.delete(o.type),o.ceReload?(Us.add(r),o.ceReload(t.styles),Us.delete(r)):o.parent?li(o.parent.update):o.appContext.reload?o.appContext.reload():typeof window<"u"?window.location.reload():console.warn("[HMR] Root or manually mounted instance modified. Full reload required.")}Yd(()=>{for(const o of s)Us.delete(mo(o.type))})}function dc(e,t){je(e,t);for(const n in e)n!=="__file"&&!(n in t)&&delete e[n]}function xi(e){return(t,n)=>{try{return e(t,n)}catch(s){console.error(s),console.warn("[HMR] Something went wrong during Vue component hot-reload. Full reload required.")}}}let Jt,co=[],oa=!1;function zo(e,...t){Jt?Jt.emit(e,...t):oa||co.push({event:e,args:t})}function Xd(e,t){var n,s;Jt=e,Jt?(Jt.enabled=!0,co.forEach(({event:o,args:r})=>Jt.emit(o,...r)),co=[]):typeof window<"u"&&window.HTMLElement&&!((s=(n=window.navigator)==null?void 0:n.userAgent)!=null&&s.includes("jsdom"))?((t.__VUE_DEVTOOLS_HOOK_REPLAY__=t.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(r=>{Xd(r,t)}),setTimeout(()=>{Jt||(t.__VUE_DEVTOOLS_HOOK_REPLAY__=null,oa=!0,co=[])},3e3)):(oa=!0,co=[])}function pg(e,t){zo("app:init",e,t,{Fragment:Ae,Text:Go,Comment:it,Static:xr})}function hg(e){zo("app:unmount",e)}const ra=yl("component:added"),ef=yl("component:updated"),mg=yl("component:removed"),gg=e=>{Jt&&typeof Jt.cleanupBuffer=="function"&&!Jt.cleanupBuffer(e)&&mg(e)};function yl(e){return t=>{zo(e,t.appContext.app,t.uid,t.parent?t.parent.uid:void 0,t)}}const yg=tf("perf:start"),vg=tf("perf:end");function tf(e){return(t,n,s)=>{zo(e,t.appContext.app,t.uid,t,n,s)}}function _g(e,t,n){zo("component:emit",e.appContext.app,e,t,n)}function bg(e,t,...n){if(e.isUnmounted)return;const s=e.vnode.props||Be;{const{emitsOptions:d,propsOptions:[f]}=e;if(d)if(!(t in d))(!f||!(Jn(t)in f))&&B(`Component emitted event "${t}" but it is neither declared in the emits option nor as an "${Jn(t)}" prop.`);else{const p=d[t];de(p)&&(p(...n)||B(`Invalid event arguments: event validation failed for event "${t}".`))}}let o=n;const r=t.startsWith("update:"),a=r&&t.slice(7);if(a&&a in s){const d=`${a==="modelValue"?"model":a}Modifiers`,{number:f,trim:p}=s[d]||Be;p&&(o=n.map(h=>We(h)?h.trim():h)),f&&(o=n.map(nm))}_g(e,t,o);{const d=t.toLowerCase();d!==t&&s[Jn(d)]&&B(`Event "${d}" is emitted in component ${gi(e,e.type)} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${_n(t)}" instead of "${t}".`)}let l,c=s[l=Jn(t)]||s[l=Jn(sn(t))];!c&&r&&(c=s[l=Jn(_n(t))]),c&&Lt(c,e,6,o);const u=s[l+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[l])return;e.emitted[l]=!0,Lt(u,e,6,o)}}function nf(e,t,n=!1){const s=t.emitsCache,o=s.get(e);if(o!==void 0)return o;const r=e.emits;let a={},l=!1;if(!de(e)){const c=u=>{const d=nf(u,t,!0);d&&(l=!0,je(a,d))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!r&&!l?(Oe(e)&&s.set(e,null),null):(re(r)?r.forEach(c=>a[c]=null):je(a,r),Oe(e)&&s.set(e,a),a)}function ci(e,t){return!e||!Ho(t)?!1:(t=t.slice(2).replace(/Once$/,""),Te(e,t[0].toLowerCase()+t.slice(1))||Te(e,_n(t))||Te(e,t))}let Qe=null,ui=null;function Lr(e){const t=Qe;return Qe=e,ui=e&&e.type.__scopeId||null,t}function wg(e){ui=e}function xg(){ui=null}function W(e,t=Qe,n){if(!t||e._n)return e;const s=(...o)=>{s._d&&Tc(-1);const r=Lr(t);let a;try{a=e(...o)}finally{Lr(r),s._d&&Tc(1)}return ef(t),a};return s._n=!0,s._c=!0,s._d=!0,s}let ia=!1;function Br(){ia=!0}function ki(e){const{type:t,vnode:n,proxy:s,withProxy:o,props:r,propsOptions:[a],slots:l,attrs:c,emit:u,render:d,renderCache:f,data:p,setupState:h,ctx:m,inheritAttrs:_}=e;let k,x;const S=Lr(e);ia=!1;try{if(n.shapeFlag&4){const E=o||s;k=Wt(d.call(E,E,f,r,h,p,m)),x=c}else{const E=t;c===r&&Br(),k=Wt(E.length>1?E(r,{get attrs(){return Br(),c},slots:l,emit:u}):E(r,null)),x=t.props?c:Sg(c)}}catch(E){go.length=0,ai(E,e,1),k=Y(it)}let b=k,T;if(k.patchFlag>0&&k.patchFlag&2048&&([b,T]=kg(k)),x&&_!==!1){const E=Object.keys(x),{shapeFlag:A}=b;if(E.length){if(A&7)a&&E.some($r)&&(x=Tg(x,a)),b=ln(b,x);else if(!ia&&b.type!==it){const L=Object.keys(c),U=[],N=[];for(let ne=0,le=L.length;ne<le;ne++){const Z=L[ne];Ho(Z)?$r(Z)||U.push(Z[2].toLowerCase()+Z.slice(3)):N.push(Z)}N.length&&B(`Extraneous non-props attributes (${N.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`),U.length&&B(`Extraneous non-emits event listeners (${U.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`)}}}return n.dirs&&(fc(b)||B("Runtime directive used on component with non-element root node. The directives will not function as intended."),b=ln(b),b.dirs=b.dirs?b.dirs.concat(n.dirs):n.dirs),n.transition&&(fc(b)||B("Component inside <Transition> renders non-element root node that cannot be animated."),b.transition=n.transition),T?T(b):k=b,Lr(S),k}const kg=e=>{const t=e.children,n=e.dynamicChildren,s=sf(t);if(!s)return[e,void 0];const o=t.indexOf(s),r=n?n.indexOf(s):-1,a=l=>{t[o]=l,n&&(r>-1?n[r]=l:l.patchFlag>0&&(e.dynamicChildren=[...n,l]))};return[Wt(s),a]};function sf(e){let t;for(let n=0;n<e.length;n++){const s=e[n];if(an(s)){if(s.type!==it||s.children==="v-if"){if(t)return;t=s}}else return}return t}const Sg=e=>{let t;for(const n in e)(n==="class"||n==="style"||Ho(n))&&((t||(t={}))[n]=e[n]);return t},Tg=(e,t)=>{const n={};for(const s in e)(!$r(s)||!(s.slice(9)in t))&&(n[s]=e[s]);return n},fc=e=>e.shapeFlag&7||e.type===it;function Eg(e,t,n){const{props:s,children:o,component:r}=e,{props:a,children:l,patchFlag:c}=t,u=r.emitsOptions;if((o||l)&&Un||t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?pc(s,a,u):!!a;if(c&8){const d=t.dynamicProps;for(let f=0;f<d.length;f++){const p=d[f];if(a[p]!==s[p]&&!ci(u,p))return!0}}}else return(o||l)&&(!l||!l.$stable)?!0:s===a?!1:s?a?pc(s,a,u):!0:!!a;return!1}function pc(e,t,n){const s=Object.keys(t);if(s.length!==Object.keys(e).length)return!0;for(let o=0;o<s.length;o++){const r=s[o];if(t[r]!==e[r]&&!ci(n,r))return!0}return!1}function Cg({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const of=e=>e.__isSuspense;function Ag(e,t){t&&t.pendingBranch?re(e)?t.effects.push(...e):t.effects.push(e):Yd(e)}function xs(e,t){return vl(e,null,t)}const ir={};function ye(e,t,n){return de(t)||B("`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."),vl(e,t,n)}function vl(e,t,{immediate:n,deep:s,flush:o,onTrack:r,onTrigger:a}=Be){var l;t||(n!==void 0&&B('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'),s!==void 0&&B('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'));const c=E=>{B("Invalid watch source: ",E,"A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.")},u=il()===((l=Ze)==null?void 0:l.scope)?Ze:null;let d,f=!1,p=!1;if(Fe(e)?(d=()=>e.value,f=Pr(e)):fs(e)?(d=()=>e,s=!0):re(e)?(p=!0,f=e.some(E=>fs(E)||Pr(E)),d=()=>e.map(E=>{if(Fe(E))return E.value;if(fs(E))return as(E);if(de(E))return yn(E,u,2);c(E)})):de(e)?t?d=()=>yn(e,u,2):d=()=>{if(!(u&&u.isUnmounted))return h&&h(),Lt(e,u,3,[m])}:(d=_t,c(e)),t&&s){const E=d;d=()=>as(E())}let h,m=E=>{h=b.onStop=()=>{yn(E,u,4)}},_;if(Io)if(m=_t,t?n&&Lt(t,u,3,[d(),p?[]:void 0,m]):d(),o==="sync"){const E=Ly();_=E.__watcherHandles||(E.__watcherHandles=[])}else return _t;let k=p?new Array(e.length).fill(ir):ir;const x=()=>{if(b.active)if(t){const E=b.run();(s||f||(p?E.some((A,L)=>Co(A,k[L])):Co(E,k)))&&(h&&h(),Lt(t,u,3,[E,k===ir?void 0:p&&k[0]===ir?[]:k,m]),k=E)}else b.run()};x.allowRecurse=!!t;let S;o==="sync"?S=x:o==="post"?S=()=>tt(x,u&&u.suspense):(x.pre=!0,u&&(x.id=u.uid),S=()=>li(x));const b=new ll(d,S);b.onTrack=r,b.onTrigger=a,t?n?x():k=b.run():o==="post"?tt(b.run.bind(b),u&&u.suspense):b.run();const T=()=>{b.stop(),u&&u.scope&&tl(u.scope.effects,b)};return _&&_.push(T),T}function $g(e,t,n){const s=this.proxy,o=We(e)?e.includes(".")?rf(s,e):()=>s[e]:e.bind(s,s);let r;de(t)?r=t:(r=t.handler,n=t);const a=Ze;js(this);const l=vl(o,r.bind(s),n);return a?js(a):ms(),l}function rf(e,t){const n=t.split(".");return()=>{let s=e;for(let o=0;o<n.length&&s;o++)s=s[n[o]];return s}}function as(e,t){if(!Oe(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),Fe(e))as(e.value,t);else if(re(e))for(let n=0;n<e.length;n++)as(e[n],t);else if(xd(e)||us(e))e.forEach(n=>{as(n,t)});else if(Sd(e))for(const n in e)as(e[n],t);return e}function af(e){Xh(e)&&B("Do not use built-in directive ids as custom directive id: "+e)}function Xt(e,t){const n=Qe;if(n===null)return B("withDirectives can only be used inside render functions."),e;const s=mi(n)||n.proxy,o=e.dirs||(e.dirs=[]);for(let r=0;r<t.length;r++){let[a,l,c,u=Be]=t[r];a&&(de(a)&&(a={mounted:a,updated:a}),a.deep&&as(l),o.push({dir:a,instance:s,value:l,oldValue:void 0,arg:c,modifiers:u}))}return e}function Kn(e,t,n,s){const o=e.dirs,r=t&&t.dirs;for(let a=0;a<o.length;a++){const l=o[a];r&&(l.oldValue=r[a].value);let c=l.dir[s];c&&(bs(),Lt(c,n,8,[e.el,l,e,t]),ws())}}function Fg(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Hn(()=>{e.isMounted=!0}),Ko(()=>{e.isUnmounting=!0}),e}const It=[Function,Array],Og={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:It,onEnter:It,onAfterEnter:It,onEnterCancelled:It,onBeforeLeave:It,onLeave:It,onAfterLeave:It,onLeaveCancelled:It,onBeforeAppear:It,onAppear:It,onAfterAppear:It,onAppearCancelled:It};function Ig(e,t){const{leavingVNodes:n}=e;let s=n.get(t.type);return s||(s=Object.create(null),n.set(t.type,s)),s}function aa(e,t,n,s){const{appear:o,mode:r,persisted:a=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:d,onBeforeLeave:f,onLeave:p,onAfterLeave:h,onLeaveCancelled:m,onBeforeAppear:_,onAppear:k,onAfterAppear:x,onAppearCancelled:S}=t,b=String(e.key),T=Ig(n,e),E=(U,N)=>{U&&Lt(U,s,9,N)},A=(U,N)=>{const ne=N[1];E(U,N),re(U)?U.every(le=>le.length<=1)&&ne():U.length<=1&&ne()},L={mode:r,persisted:a,beforeEnter(U){let N=l;if(!n.isMounted)if(o)N=_||l;else return;U._leaveCb&&U._leaveCb(!0);const ne=T[b];ne&&ts(e,ne)&&ne.el._leaveCb&&ne.el._leaveCb(),E(N,[U])},enter(U){let N=c,ne=u,le=d;if(!n.isMounted)if(o)N=k||c,ne=x||u,le=S||d;else return;let Z=!1;const me=U._enterCb=ve=>{Z||(Z=!0,ve?E(le,[U]):E(ne,[U]),L.delayedLeave&&L.delayedLeave(),U._enterCb=void 0)};N?A(N,[U,me]):me()},leave(U,N){const ne=String(e.key);if(U._enterCb&&U._enterCb(!0),n.isUnmounting)return N();E(f,[U]);let le=!1;const Z=U._leaveCb=me=>{le||(le=!0,N(),me?E(m,[U]):E(h,[U]),U._leaveCb=void 0,T[ne]===e&&delete T[ne])};T[ne]=e,p?A(p,[U,Z]):Z()},clone(U){return aa(U,t,n,s)}};return L}function Dr(e,t){e.shapeFlag&6&&e.component?Dr(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function lf(e,t=!1,n){let s=[],o=0;for(let r=0;r<e.length;r++){let a=e[r];const l=n==null?a.key:String(n)+String(a.key!=null?a.key:r);a.type===Ae?(a.patchFlag&128&&o++,s=s.concat(lf(a.children,t,l))):(t||a.type!==it)&&s.push(l!=null?ln(a,{key:l}):a)}if(o>1)for(let r=0;r<s.length;r++)s[r].patchFlag=-2;return s}function ke(e,t){return de(e)?(()=>je({name:e.name},t,{setup:e}))():e}const Bs=e=>!!e.type.__asyncLoader,_l=e=>e.type.__isKeepAlive,Ug={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(e,{slots:t}){const n=$t(),s=n.ctx;if(!s.renderer)return()=>{const S=t.default&&t.default();return S&&S.length===1?S[0]:S};const o=new Map,r=new Set;let a=null;n.__v_cache=o;const l=n.suspense,{renderer:{p:c,m:u,um:d,o:{createElement:f}}}=s,p=f("div");s.activate=(S,b,T,E,A)=>{const L=S.component;u(S,b,T,0,l),c(L.vnode,S,b,T,L,l,E,S.slotScopeIds,A),tt(()=>{L.isDeactivated=!1,L.a&&es(L.a);const U=S.props&&S.props.onVnodeMounted;U&&Ut(U,L.parent,S)},l),ra(L)},s.deactivate=S=>{const b=S.component;u(S,p,null,1,l),tt(()=>{b.da&&es(b.da);const T=S.props&&S.props.onVnodeUnmounted;T&&Ut(T,b.parent,S),b.isDeactivated=!0},l),ra(b)};function h(S){Si(S),d(S,n,l,!0)}function m(S){o.forEach((b,T)=>{const E=Uo(b.type);E&&(!S||!S(E))&&_(T)})}function _(S){const b=o.get(S);!a||!ts(b,a)?h(b):a&&Si(a),o.delete(S),r.delete(S)}ye(()=>[e.include,e.exclude],([S,b])=>{S&&m(T=>uo(S,T)),b&&m(T=>!uo(b,T))},{flush:"post",deep:!0});let k=null;const x=()=>{k!=null&&o.set(k,Ti(n.subTree))};return Hn(x),fi(x),Ko(()=>{o.forEach(S=>{const{subTree:b,suspense:T}=n,E=Ti(b);if(S.type===E.type&&S.key===E.key){Si(E);const A=E.component.da;A&&tt(A,T);return}h(S)})}),()=>{if(k=null,!t.default)return null;const S=t.default(),b=S[0];if(S.length>1)return B("KeepAlive should contain exactly one component child."),a=null,S;if(!an(b)||!(b.shapeFlag&4)&&!(b.shapeFlag&128))return a=null,b;let T=Ti(b);const E=T.type,A=Uo(Bs(T)?T.type.__asyncResolved||{}:E),{include:L,exclude:U,max:N}=e;if(L&&(!A||!uo(L,A))||U&&A&&uo(U,A))return a=T,b;const ne=T.key==null?E:T.key,le=o.get(ne);return T.el&&(T=ln(T),b.shapeFlag&128&&(b.ssContent=T)),k=ne,le?(T.el=le.el,T.component=le.component,T.transition&&Dr(T,T.transition),T.shapeFlag|=512,r.delete(ne),r.add(ne)):(r.add(ne),N&&r.size>parseInt(N,10)&&_(r.values().next().value)),T.shapeFlag|=256,a=T,of(b.type)?b:T}}},cf=Ug;function uo(e,t){return re(e)?e.some(n=>uo(n,t)):We(e)?e.split(",").includes(t):Jh(e)?e.test(t):!1}function uf(e,t){ff(e,"a",t)}function df(e,t){ff(e,"da",t)}function ff(e,t,n=Ze){const s=e.__wdc||(e.__wdc=()=>{let o=n;for(;o;){if(o.isDeactivated)return;o=o.parent}return e()});if(di(t,s,n),n){let o=n.parent;for(;o&&o.parent;)_l(o.parent.vnode)&&Pg(s,t,n,o),o=o.parent}}function Pg(e,t,n,s){const o=di(t,e,s,!0);pi(()=>{tl(s[t],o)},n)}function Si(e){e.shapeFlag&=-257,e.shapeFlag&=-513}function Ti(e){return e.shapeFlag&128?e.ssContent:e}function di(e,t,n=Ze,s=!1){if(n){const o=n[e]||(n[e]=[]),r=t.__weh||(t.__weh=(...a)=>{if(n.isUnmounted)return;bs(),js(n);const l=Lt(t,n,e,a);return ms(),ws(),l});return s?o.unshift(r):o.push(r),r}else{const o=Jn(hl[e].replace(/ hook$/,""));B(`${o} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`)}}const xn=e=>(t,n=Ze)=>(!Io||e==="sp")&&di(e,(...s)=>t(...s),n),Mg=xn("bm"),Hn=xn("m"),Lg=xn("bu"),fi=xn("u"),Ko=xn("bum"),pi=xn("um"),Bg=xn("sp"),Dg=xn("rtg"),Rg=xn("rtc");function Ng(e,t=Ze){di("ec",e,t)}const la="components",jg="directives";function Ns(e,t){return pf(la,e,!0,t)||e}const Wg=Symbol.for("v-ndc");function Rr(e){return pf(jg,e)}function pf(e,t,n=!0,s=!1){const o=Qe||Ze;if(o){const r=o.type;if(e===la){const l=Uo(r,!1);if(l&&(l===t||l===sn(t)||l===vs(sn(t))))return r}const a=hc(o[e]||r[e],t)||hc(o.appContext[e],t);if(!a&&s)return r;if(n&&!a){const l=e===la?`
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.`:"";B(`Failed to resolve ${e.slice(0,-1)}: ${t}${l}`)}return a}else B(`resolve${vs(e.slice(0,-1))} can only be used in render() or setup().`)}function hc(e,t){return e&&(e[t]||e[sn(t)]||e[vs(sn(t))])}function ks(e,t,n,s){let o;const r=n&&n[s];if(re(e)||We(e)){o=new Array(e.length);for(let a=0,l=e.length;a<l;a++)o[a]=t(e[a],a,void 0,r&&r[a])}else if(typeof e=="number"){Number.isInteger(e)||B(`The v-for range expect an integer value but got ${e}.`),o=new Array(e);for(let a=0;a<e;a++)o[a]=t(a+1,a,void 0,r&&r[a])}else if(Oe(e))if(e[Symbol.iterator])o=Array.from(e,(a,l)=>t(a,l,void 0,r&&r[l]));else{const a=Object.keys(e);o=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];o[l]=t(e[u],u,l,r&&r[l])}}else o=[];return n&&(n[s]=o),o}function mt(e,t,n={},s,o){if(Qe.isCE||Qe.parent&&Bs(Qe.parent)&&Qe.parent.isCE)return t!=="default"&&(n.name=t),Y("slot",n,s&&s());let r=e[t];r&&r.length>1&&(B("SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."),r=()=>[]),r&&r._c&&(r._d=!1),w();const a=r&&hf(r(n)),l=H(Ae,{key:n.key||a&&a.key||`_${t}`},a||(s?s():[]),a&&e._===1?64:-2);return!o&&l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),r&&r._c&&(r._d=!0),l}function hf(e){return e.some(t=>an(t)?!(t.type===it||t.type===Ae&&!hf(t.children)):!0)?e:null}const ca=e=>e?Af(e)?mi(e)||e.proxy:ca(e.parent):null,hs=je(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>lo(e.props),$attrs:e=>lo(e.attrs),$slots:e=>lo(e.slots),$refs:e=>lo(e.refs),$parent:e=>ca(e.parent),$root:e=>ca(e.root),$emit:e=>e.emit,$options:e=>wl(e),$forceUpdate:e=>e.f||(e.f=()=>li(e.update)),$nextTick:e=>e.n||(e.n=ot.bind(e.proxy)),$watch:e=>$g.bind(e)}),bl=e=>e==="_"||e==="$",Ei=(e,t)=>e!==Be&&!e.__isScriptSetup&&Te(e,t),mf={get({_:e},t){const{ctx:n,setupState:s,data:o,props:r,accessCache:a,type:l,appContext:c}=e;if(t==="__isVue")return!0;let u;if(t[0]!=="$"){const h=a[t];if(h!==void 0)switch(h){case 1:return s[t];case 2:return o[t];case 4:return n[t];case 3:return r[t]}else{if(Ei(s,t))return a[t]=1,s[t];if(o!==Be&&Te(o,t))return a[t]=2,o[t];if((u=e.propsOptions[0])&&Te(u,t))return a[t]=3,r[t];if(n!==Be&&Te(n,t))return a[t]=4,n[t];ua&&(a[t]=0)}}const d=hs[t];let f,p;if(d)return t==="$attrs"?(lt(e,"get",t),Br()):t==="$slots"&&lt(e,"get",t),d(e);if((f=l.__cssModules)&&(f=f[t]))return f;if(n!==Be&&Te(n,t))return a[t]=4,n[t];if(p=c.config.globalProperties,Te(p,t))return p[t];Qe&&(!We(t)||t.indexOf("__v")!==0)&&(o!==Be&&bl(t[0])&&Te(o,t)?B(`Property ${JSON.stringify(t)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`):e===Qe&&B(`Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`))},set({_:e},t,n){const{data:s,setupState:o,ctx:r}=e;return Ei(o,t)?(o[t]=n,!0):o.__isScriptSetup&&Te(o,t)?(B(`Cannot mutate <script setup> binding "${t}" from Options API.`),!1):s!==Be&&Te(s,t)?(s[t]=n,!0):Te(e.props,t)?(B(`Attempting to mutate prop "${t}". Props are readonly.`),!1):t[0]==="$"&&t.slice(1)in e?(B(`Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`),!1):(t in e.appContext.config.globalProperties?Object.defineProperty(r,t,{enumerable:!0,configurable:!0,value:n}):r[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:s,appContext:o,propsOptions:r}},a){let l;return!!n[a]||e!==Be&&Te(e,a)||Ei(t,a)||(l=r[0])&&Te(l,a)||Te(s,a)||Te(hs,a)||Te(o.config.globalProperties,a)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:Te(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};mf.ownKeys=e=>(B("Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."),Reflect.ownKeys(e));function qg(e){const t={};return Object.defineProperty(t,"_",{configurable:!0,enumerable:!1,get:()=>e}),Object.keys(hs).forEach(n=>{Object.defineProperty(t,n,{configurable:!0,enumerable:!1,get:()=>hs[n](e),set:_t})}),t}function Hg(e){const{ctx:t,propsOptions:[n]}=e;n&&Object.keys(n).forEach(s=>{Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>e.props[s],set:_t})})}function Vg(e){const{ctx:t,setupState:n}=e;Object.keys(he(n)).forEach(s=>{if(!n.__isScriptSetup){if(bl(s[0])){B(`setup() return property ${JSON.stringify(s)} should not start with "$" or "_" which are reserved prefixes for Vue internals.`);return}Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>n[s],set:_t})}})}function zg(){return Kg().slots}function Kg(){const e=$t();return e||B("useContext() called without active instance."),e.setupContext||(e.setupContext=Ff(e))}function mc(e){return re(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}function Gg(){const e=Object.create(null);return(t,n)=>{e[n]?B(`${t} property "${n}" is already defined in ${e[n]}.`):e[n]=t}}let ua=!0;function Yg(e){const t=wl(e),n=e.proxy,s=e.ctx;ua=!1,t.beforeCreate&&gc(t.beforeCreate,e,"bc");const{data:o,computed:r,methods:a,watch:l,provide:c,inject:u,created:d,beforeMount:f,mounted:p,beforeUpdate:h,updated:m,activated:_,deactivated:k,beforeDestroy:x,beforeUnmount:S,destroyed:b,unmounted:T,render:E,renderTracked:A,renderTriggered:L,errorCaptured:U,serverPrefetch:N,expose:ne,inheritAttrs:le,components:Z,directives:me,filters:ve}=t,be=Gg();{const[ee]=e.propsOptions;if(ee)for(const ie in ee)be("Props",ie)}if(u&&Zg(u,s,be),a)for(const ee in a){const ie=a[ee];de(ie)?(Object.defineProperty(s,ee,{value:ie.bind(n),configurable:!0,enumerable:!0,writable:!0}),be("Methods",ee)):B(`Method "${ee}" has type "${typeof ie}" in the component definition. Did you reference the function correctly?`)}if(o){de(o)||B("The data option must be a function. Plain object usage is no longer supported.");const ee=o.call(n,n);if(sl(ee)&&B("data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."),!Oe(ee))B("data() should return an object.");else{e.data=qe(ee);for(const ie in ee)be("Data",ie),bl(ie[0])||Object.defineProperty(s,ie,{configurable:!0,enumerable:!0,get:()=>ee[ie],set:_t})}}if(ua=!0,r)for(const ee in r){const ie=r[ee],Se=de(ie)?ie.bind(n,n):de(ie.get)?ie.get.bind(n,n):_t;Se===_t&&B(`Computed property "${ee}" has no getter.`);const Ue=!de(ie)&&de(ie.set)?ie.set.bind(n):()=>{B(`Write operation failed: computed property "${ee}" is readonly.`)},Ft=I({get:Se,set:Ue});Object.defineProperty(s,ee,{enumerable:!0,configurable:!0,get:()=>Ft.value,set:nt=>Ft.value=nt}),be("Computed",ee)}if(l)for(const ee in l)gf(l[ee],s,n,ee);if(c){const ee=de(c)?c.call(n):c;Reflect.ownKeys(ee).forEach(ie=>{Tt(ie,ee[ie])})}d&&gc(d,e,"c");function Pe(ee,ie){re(ie)?ie.forEach(Se=>ee(Se.bind(n))):ie&&ee(ie.bind(n))}if(Pe(Mg,f),Pe(Hn,p),Pe(Lg,h),Pe(fi,m),Pe(uf,_),Pe(df,k),Pe(Ng,U),Pe(Rg,A),Pe(Dg,L),Pe(Ko,S),Pe(pi,T),Pe(Bg,N),re(ne))if(ne.length){const ee=e.exposed||(e.exposed={});ne.forEach(ie=>{Object.defineProperty(ee,ie,{get:()=>n[ie],set:Se=>n[ie]=Se})})}else e.exposed||(e.exposed={});E&&e.render===_t&&(e.render=E),le!=null&&(e.inheritAttrs=le),Z&&(e.components=Z),me&&(e.directives=me)}function Zg(e,t,n=_t){re(e)&&(e=da(e));for(const s in e){const o=e[s];let r;Oe(o)?"default"in o?r=R(o.from||s,o.default,!0):r=R(o.from||s):r=R(o),Fe(r)?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:a=>r.value=a}):t[s]=r,n("Inject",s)}}function gc(e,t,n){Lt(re(e)?e.map(s=>s.bind(t.proxy)):e.bind(t.proxy),t,n)}function gf(e,t,n,s){const o=s.includes(".")?rf(n,s):()=>n[s];if(We(e)){const r=t[e];de(r)?ye(o,r):B(`Invalid watch handler specified by key "${e}"`,r)}else if(de(e))ye(o,e.bind(n));else if(Oe(e))if(re(e))e.forEach(r=>gf(r,t,n,s));else{const r=de(e.handler)?e.handler.bind(n):t[e.handler];de(r)?ye(o,r,e):B(`Invalid watch handler specified by key "${e.handler}"`,r)}else B(`Invalid watch option: "${s}"`,e)}function wl(e){const t=e.type,{mixins:n,extends:s}=t,{mixins:o,optionsCache:r,config:{optionMergeStrategies:a}}=e.appContext,l=r.get(t);let c;return l?c=l:!o.length&&!n&&!s?c=t:(c={},o.length&&o.forEach(u=>Nr(c,u,a,!0)),Nr(c,t,a)),Oe(t)&&r.set(t,c),c}function Nr(e,t,n,s=!1){const{mixins:o,extends:r}=t;r&&Nr(e,r,n,!0),o&&o.forEach(a=>Nr(e,a,n,!0));for(const a in t)if(s&&a==="expose")B('"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.');else{const l=Qg[a]||n&&n[a];e[a]=l?l(e[a],t[a]):t[a]}return e}const Qg={data:yc,props:vc,emits:vc,methods:fo,computed:fo,beforeCreate:ut,created:ut,beforeMount:ut,mounted:ut,beforeUpdate:ut,updated:ut,beforeDestroy:ut,beforeUnmount:ut,destroyed:ut,unmounted:ut,activated:ut,deactivated:ut,errorCaptured:ut,serverPrefetch:ut,components:fo,directives:fo,watch:Xg,provide:yc,inject:Jg};function yc(e,t){return t?e?function(){return je(de(e)?e.call(this,this):e,de(t)?t.call(this,this):t)}:t:e}function Jg(e,t){return fo(da(e),da(t))}function da(e){if(re(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function ut(e,t){return e?[...new Set([].concat(e,t))]:t}function fo(e,t){return e?je(Object.create(null),e,t):t}function vc(e,t){return e?re(e)&&re(t)?[...new Set([...e,...t])]:je(Object.create(null),mc(e),mc(t??{})):t}function Xg(e,t){if(!e)return t;if(!t)return e;const n=je(Object.create(null),e);for(const s in t)n[s]=ut(e[s],t[s]);return n}function yf(){return{app:null,config:{isNativeTag:wd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ey=0;function ty(e,t){return function(s,o=null){de(s)||(s=je({},s)),o!=null&&!Oe(o)&&(B("root props passed to app.mount() must be an object."),o=null);const r=yf();Object.defineProperty(r.config,"unwrapInjectedRef",{get(){return!0},set(){B("app.config.unwrapInjectedRef has been deprecated. 3.3 now alawys unwraps injected refs in Options API.")}});const a=new Set;let l=!1;const c=r.app={_uid:ey++,_component:s,_props:o,_container:null,_context:r,_instance:null,version:Hr,get config(){return r.config},set config(u){B("app.config cannot be replaced. Modify individual options instead.")},use(u,...d){return a.has(u)?B("Plugin has already been applied to target app."):u&&de(u.install)?(a.add(u),u.install(c,...d)):de(u)?(a.add(u),u(c,...d)):B('A plugin must either be a function or an object with an "install" function.'),c},mixin(u){return r.mixins.includes(u)?B("Mixin has already been applied to target app"+(u.name?`: ${u.name}`:"")):r.mixins.push(u),c},component(u,d){return ga(u,r.config),d?(r.components[u]&&B(`Component "${u}" has already been registered in target app.`),r.components[u]=d,c):r.components[u]},directive(u,d){return af(u),d?(r.directives[u]&&B(`Directive "${u}" has already been registered in target app.`),r.directives[u]=d,c):r.directives[u]},mount(u,d,f){if(l)B("App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`");else{u.__vue_app__&&B("There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first.");const p=Y(s,o);return p.appContext=r,r.reload=()=>{e(ln(p),u,f)},d&&t?t(p,u):e(p,u,f),l=!0,c._container=u,u.__vue_app__=c,c._instance=p.component,pg(c,Hr),mi(p.component)||p.component.proxy}},unmount(){l?(e(null,c._container),c._instance=null,hg(c),delete c._container.__vue_app__):B("Cannot unmount an app that is not mounted.")},provide(u,d){return u in r.provides&&B(`App already provides property with key "${String(u)}". It will be overwritten with the new value.`),r.provides[u]=d,c},runWithContext(u){jr=c;try{return u()}finally{jr=null}}};return c}}let jr=null;function Tt(e,t){if(!Ze)B("provide() can only be used inside setup().");else{let n=Ze.provides;const s=Ze.parent&&Ze.parent.provides;s===n&&(n=Ze.provides=Object.create(s)),n[e]=t}}function R(e,t,n=!1){const s=Ze||Qe;if(s||jr){const o=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:jr._context.provides;if(o&&e in o)return o[e];if(arguments.length>1)return n&&de(t)?t.call(s&&s.proxy):t;B(`injection "${String(e)}" not found.`)}else B("inject() can only be used inside setup() or functional components.")}function ny(e,t,n,s=!1){const o={},r={};Fr(r,hi,1),e.propsDefaults=Object.create(null),vf(e,t,o,r);for(const a in e.propsOptions[0])a in o||(o[a]=void 0);bf(t||{},o,e),n?e.props=s?o:qm(o):e.type.props?e.props=o:e.props=r,e.attrs=r}function sy(e){for(;e;){if(e.type.__hmrId)return!0;e=e.parent}}function oy(e,t,n,s){const{props:o,attrs:r,vnode:{patchFlag:a}}=e,l=he(o),[c]=e.propsOptions;let u=!1;if(!sy(e)&&(s||a>0)&&!(a&16)){if(a&8){const d=e.vnode.dynamicProps;for(let f=0;f<d.length;f++){let p=d[f];if(ci(e.emitsOptions,p))continue;const h=t[p];if(c)if(Te(r,p))h!==r[p]&&(r[p]=h,u=!0);else{const m=sn(p);o[m]=fa(c,l,m,h,e,!1)}else h!==r[p]&&(r[p]=h,u=!0)}}}else{vf(e,t,o,r)&&(u=!0);let d;for(const f in l)(!t||!Te(t,f)&&((d=_n(f))===f||!Te(t,d)))&&(c?n&&(n[f]!==void 0||n[d]!==void 0)&&(o[f]=fa(c,l,f,void 0,e,!0)):delete o[f]);if(r!==l)for(const f in r)(!t||!Te(t,f))&&(delete r[f],u=!0)}u&&on(e,"set","$attrs"),bf(t||{},o,e)}function vf(e,t,n,s){const[o,r]=e.propsOptions;let a=!1,l;if(t)for(let c in t){if(_r(c))continue;const u=t[c];let d;o&&Te(o,d=sn(c))?!r||!r.includes(d)?n[d]=u:(l||(l={}))[d]=u:ci(e.emitsOptions,c)||(!(c in s)||u!==s[c])&&(s[c]=u,a=!0)}if(r){const c=he(n),u=l||Be;for(let d=0;d<r.length;d++){const f=r[d];n[f]=fa(o,c,f,u[f],e,!Te(u,f))}}return a}function fa(e,t,n,s,o,r){const a=e[n];if(a!=null){const l=Te(a,"default");if(l&&s===void 0){const c=a.default;if(a.type!==Function&&!a.skipFactory&&de(c)){const{propsDefaults:u}=o;n in u?s=u[n]:(js(o),s=u[n]=c.call(null,t),ms())}else s=c}a[0]&&(r&&!l?s=!1:a[1]&&(s===""||s===_n(n))&&(s=!0))}return s}function _f(e,t,n=!1){const s=t.propsCache,o=s.get(e);if(o)return o;const r=e.props,a={},l=[];let c=!1;if(!de(e)){const d=f=>{c=!0;const[p,h]=_f(f,t,!0);je(a,p),h&&l.push(...h)};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!r&&!c)return Oe(e)&&s.set(e,Ms),Ms;if(re(r))for(let d=0;d<r.length;d++){We(r[d])||B("props must be strings when using array syntax.",r[d]);const f=sn(r[d]);_c(f)&&(a[f]=Be)}else if(r){Oe(r)||B("invalid props options",r);for(const d in r){const f=sn(d);if(_c(f)){const p=r[d],h=a[f]=re(p)||de(p)?{type:p}:je({},p);if(h){const m=wc(Boolean,h.type),_=wc(String,h.type);h[0]=m>-1,h[1]=_<0||m<_,(m>-1||Te(h,"default"))&&l.push(f)}}}}const u=[a,l];return Oe(e)&&s.set(e,u),u}function _c(e){return e[0]!=="$"?!0:(B(`Invalid prop name: "${e}" is a reserved property.`),!1)}function pa(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function bc(e,t){return pa(e)===pa(t)}function wc(e,t){return re(t)?t.findIndex(n=>bc(n,e)):de(t)&&bc(t,e)?0:-1}function bf(e,t,n){const s=he(t),o=n.propsOptions[0];for(const r in o){let a=o[r];a!=null&&ry(r,s[r],a,!Te(e,r)&&!Te(e,_n(r)))}}function ry(e,t,n,s){const{type:o,required:r,validator:a,skipCheck:l}=n;if(r&&s){B('Missing required prop: "'+e+'"');return}if(!(t==null&&!r)){if(o!=null&&o!==!0&&!l){let c=!1;const u=re(o)?o:[o],d=[];for(let f=0;f<u.length&&!c;f++){const{valid:p,expectedType:h}=ay(t,u[f]);d.push(h||""),c=p}if(!c){B(ly(e,t,d));return}}a&&!a(t)&&B('Invalid prop: custom validator check failed for prop "'+e+'".')}}const iy=qn("String,Number,Boolean,Function,Symbol,BigInt");function ay(e,t){let n;const s=pa(t);if(iy(s)){const o=typeof e;n=o===s.toLowerCase(),!n&&o==="object"&&(n=e instanceof t)}else s==="Object"?n=Oe(e):s==="Array"?n=re(e):s==="null"?n=e===null:n=e instanceof t;return{valid:n,expectedType:s}}function ly(e,t,n){let s=`Invalid prop: type check failed for prop "${e}". Expected ${n.map(vs).join(" | ")}`;const o=n[0],r=ol(t),a=xc(t,o),l=xc(t,r);return n.length===1&&kc(o)&&!cy(o,r)&&(s+=` with value ${a}`),s+=`, got ${r} `,kc(r)&&(s+=`with value ${l}.`),s}function xc(e,t){return t==="String"?`"${e}"`:t==="Number"?`${Number(e)}`:`${e}`}function kc(e){return["string","number","boolean"].some(n=>e.toLowerCase()===n)}function cy(...e){return e.some(t=>t.toLowerCase()==="boolean")}const wf=e=>e[0]==="_"||e==="$stable",xl=e=>re(e)?e.map(Wt):[Wt(e)],uy=(e,t,n)=>{if(t._n)return t;const s=W((...o)=>(Ze&&B(`Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`),xl(t(...o))),n);return s._c=!1,s},xf=(e,t,n)=>{const s=e._ctx;for(const o in e){if(wf(o))continue;const r=e[o];if(de(r))t[o]=uy(o,r,s);else if(r!=null){B(`Non-function value encountered for slot "${o}". Prefer function slots for better performance.`);const a=xl(r);t[o]=()=>a}}},kf=(e,t)=>{_l(e.vnode)||B("Non-function value encountered for default slot. Prefer function slots for better performance.");const n=xl(t);e.slots.default=()=>n},dy=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=he(t),Fr(t,"_",n)):xf(t,e.slots={})}else e.slots={},t&&kf(e,t);Fr(e.slots,hi,1)},fy=(e,t,n)=>{const{vnode:s,slots:o}=e;let r=!0,a=Be;if(s.shapeFlag&32){const l=t._;l?Un?(je(o,t),on(e,"set","$slots")):n&&l===1?r=!1:(je(o,t),!n&&l===1&&delete o._):(r=!t.$stable,xf(t,o)),a=t}else t&&(kf(e,t),a={default:1});if(r)for(const l in o)!wf(l)&&!(l in a)&&delete o[l]};function ha(e,t,n,s,o=!1){if(re(e)){e.forEach((p,h)=>ha(p,t&&(re(t)?t[h]:t),n,s,o));return}if(Bs(s)&&!o)return;const r=s.shapeFlag&4?mi(s.component)||s.component.proxy:s.el,a=o?null:r,{i:l,r:c}=e;if(!l){B("Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function.");return}const u=t&&t.r,d=l.refs===Be?l.refs={}:l.refs,f=l.setupState;if(u!=null&&u!==c&&(We(u)?(d[u]=null,Te(f,u)&&(f[u]=null)):Fe(u)&&(u.value=null)),de(c))yn(c,l,12,[a,d]);else{const p=We(c),h=Fe(c);if(p||h){const m=()=>{if(e.f){const _=p?Te(f,c)?f[c]:d[c]:c.value;o?re(_)&&tl(_,r):re(_)?_.includes(r)||_.push(r):p?(d[c]=[r],Te(f,c)&&(f[c]=d[c])):(c.value=[r],e.k&&(d[e.k]=c.value))}else p?(d[c]=a,Te(f,c)&&(f[c]=a)):h?(c.value=a,e.k&&(d[e.k]=a)):B("Invalid template ref type:",c,`(${typeof c})`)};a?(m.id=-1,tt(m,n)):m()}else B("Invalid template ref type:",c,`(${typeof c})`)}}let Ys,Fn;function dn(e,t){e.appContext.config.performance&&Wr()&&Fn.mark(`vue-${t}-${e.uid}`),yg(e,t,Wr()?Fn.now():Date.now())}function fn(e,t){if(e.appContext.config.performance&&Wr()){const n=`vue-${t}-${e.uid}`,s=n+":end";Fn.mark(s),Fn.measure(`<${gi(e,e.type)}> ${t}`,n,s),Fn.clearMarks(n),Fn.clearMarks(s)}vg(e,t,Wr()?Fn.now():Date.now())}function Wr(){return Ys!==void 0||(typeof window<"u"&&window.performance?(Ys=!0,Fn=window.performance):Ys=!1),Ys}function py(){const e=[];if(e.length){const t=e.length>1;console.warn(`Feature flag${t?"s":""} ${e.join(", ")} ${t?"are":"is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`)}}const tt=Ag;function hy(e){return my(e)}function my(e,t){py();const n=Or();n.__VUE__=!0,Xd(n.__VUE_DEVTOOLS_GLOBAL_HOOK__,n);const{insert:s,remove:o,patchProp:r,createElement:a,createText:l,createComment:c,setText:u,setElementText:d,parentNode:f,nextSibling:p,setScopeId:h=_t,insertStaticContent:m}=e,_=(g,y,C,M=null,P=null,q=null,J=!1,j=null,V=Un?!1:!!y.dynamicChildren)=>{if(g===y)return;g&&!ts(g,y)&&(M=Q(g),gt(g,P,q,!0),g=null),y.patchFlag===-2&&(V=!1,y.dynamicChildren=null);const{type:D,ref:oe,shapeFlag:se}=y;switch(D){case Go:k(g,y,C,M);break;case it:x(g,y,C,M);break;case xr:g==null?S(y,C,M,J):b(g,y,C,J);break;case Ae:me(g,y,C,M,P,q,J,j,V);break;default:se&1?A(g,y,C,M,P,q,J,j,V):se&6?ve(g,y,C,M,P,q,J,j,V):se&64||se&128?D.process(g,y,C,M,P,q,J,j,V,te):B("Invalid VNode type:",D,`(${typeof D})`)}oe!=null&&P&&ha(oe,g&&g.ref,q,y||g,!y)},k=(g,y,C,M)=>{if(g==null)s(y.el=l(y.children),C,M);else{const P=y.el=g.el;y.children!==g.children&&u(P,y.children)}},x=(g,y,C,M)=>{g==null?s(y.el=c(y.children||""),C,M):y.el=g.el},S=(g,y,C,M)=>{[g.el,g.anchor]=m(g.children,y,C,M,g.el,g.anchor)},b=(g,y,C,M)=>{if(y.children!==g.children){const P=p(g.anchor);E(g),[y.el,y.anchor]=m(y.children,C,P,M)}else y.el=g.el,y.anchor=g.anchor},T=({el:g,anchor:y},C,M)=>{let P;for(;g&&g!==y;)P=p(g),s(g,C,M),g=P;s(y,C,M)},E=({el:g,anchor:y})=>{let C;for(;g&&g!==y;)C=p(g),o(g),g=C;o(y)},A=(g,y,C,M,P,q,J,j,V)=>{J=J||y.type==="svg",g==null?L(y,C,M,P,q,J,j,V):ne(g,y,P,q,J,j,V)},L=(g,y,C,M,P,q,J,j)=>{let V,D;const{type:oe,props:se,shapeFlag:ae,transition:pe,dirs:Ee}=g;if(V=g.el=a(g.type,q,se&&se.is,se),ae&8?d(V,g.children):ae&16&&N(g.children,V,null,M,P,q&&oe!=="foreignObject",J,j),Ee&&Kn(g,null,M,"created"),U(V,g,g.scopeId,J,M),se){for(const Le in se)Le!=="value"&&!_r(Le)&&r(V,Le,null,se[Le],q,g.children,M,P,F);"value"in se&&r(V,"value",null,se.value),(D=se.onVnodeBeforeMount)&&Ut(D,M,g)}Object.defineProperty(V,"__vnode",{value:g,enumerable:!1}),Object.defineProperty(V,"__vueParentComponent",{value:M,enumerable:!1}),Ee&&Kn(g,null,M,"beforeMount");const Ne=(!P||P&&!P.pendingBranch)&&pe&&!pe.persisted;Ne&&pe.beforeEnter(V),s(V,y,C),((D=se&&se.onVnodeMounted)||Ne||Ee)&&tt(()=>{D&&Ut(D,M,g),Ne&&pe.enter(V),Ee&&Kn(g,null,M,"mounted")},P)},U=(g,y,C,M,P)=>{if(C&&h(g,C),M)for(let q=0;q<M.length;q++)h(g,M[q]);if(P){let q=P.subTree;if(q.patchFlag>0&&q.patchFlag&2048&&(q=sf(q.children)||q),y===q){const J=P.vnode;U(g,J,J.scopeId,J.slotScopeIds,P.parent)}}},N=(g,y,C,M,P,q,J,j,V=0)=>{for(let D=V;D<g.length;D++){const oe=g[D]=j?An(g[D]):Wt(g[D]);_(null,oe,y,C,M,P,q,J,j)}},ne=(g,y,C,M,P,q,J)=>{const j=y.el=g.el;let{patchFlag:V,dynamicChildren:D,dirs:oe}=y;V|=g.patchFlag&16;const se=g.props||Be,ae=y.props||Be;let pe;C&&Gn(C,!1),(pe=ae.onVnodeBeforeUpdate)&&Ut(pe,C,y,g),oe&&Kn(y,g,C,"beforeUpdate"),C&&Gn(C,!0),Un&&(V=0,J=!1,D=null);const Ee=P&&y.type!=="foreignObject";if(D?(le(g.dynamicChildren,D,j,C,M,Ee,q),qr(g,y)):J||Se(g,y,j,null,C,M,Ee,q,!1),V>0){if(V&16)Z(j,y,se,ae,C,M,P);else if(V&2&&se.class!==ae.class&&r(j,"class",null,ae.class,P),V&4&&r(j,"style",se.style,ae.style,P),V&8){const Ne=y.dynamicProps;for(let Le=0;Le<Ne.length;Le++){const ze=Ne[Le],Rt=se[ze],As=ae[ze];(As!==Rt||ze==="value")&&r(j,ze,Rt,As,P,g.children,C,M,F)}}V&1&&g.children!==y.children&&d(j,y.children)}else!J&&D==null&&Z(j,y,se,ae,C,M,P);((pe=ae.onVnodeUpdated)||oe)&&tt(()=>{pe&&Ut(pe,C,y,g),oe&&Kn(y,g,C,"updated")},M)},le=(g,y,C,M,P,q,J)=>{for(let j=0;j<y.length;j++){const V=g[j],D=y[j],oe=V.el&&(V.type===Ae||!ts(V,D)||V.shapeFlag&70)?f(V.el):C;_(V,D,oe,null,M,P,q,J,!0)}},Z=(g,y,C,M,P,q,J)=>{if(C!==M){if(C!==Be)for(const j in C)!_r(j)&&!(j in M)&&r(g,j,C[j],null,J,y.children,P,q,F);for(const j in M){if(_r(j))continue;const V=M[j],D=C[j];V!==D&&j!=="value"&&r(g,j,D,V,J,y.children,P,q,F)}"value"in M&&r(g,"value",C.value,M.value)}},me=(g,y,C,M,P,q,J,j,V)=>{const D=y.el=g?g.el:l(""),oe=y.anchor=g?g.anchor:l("");let{patchFlag:se,dynamicChildren:ae,slotScopeIds:pe}=y;(Un||se&2048)&&(se=0,V=!1,ae=null),pe&&(j=j?j.concat(pe):pe),g==null?(s(D,C,M),s(oe,C,M),N(y.children,C,oe,P,q,J,j,V)):se>0&&se&64&&ae&&g.dynamicChildren?(le(g.dynamicChildren,ae,C,P,q,J,j),qr(g,y)):Se(g,y,C,oe,P,q,J,j,V)},ve=(g,y,C,M,P,q,J,j,V)=>{y.slotScopeIds=j,g==null?y.shapeFlag&512?P.ctx.activate(y,C,M,J,V):be(y,C,M,P,q,J,V):Pe(g,y,V)},be=(g,y,C,M,P,q,J)=>{const j=g.component=Ey(g,M,P);if(j.type.__hmrId&&cg(j),br(g),dn(j,"mount"),_l(g)&&(j.ctx.renderer=te),dn(j,"init"),Ay(j),fn(j,"init"),j.asyncDep){if(P&&P.registerDep(j,ee),!g.el){const V=j.subTree=Y(it);x(null,V,y,C)}return}ee(j,g,y,C,P,q,J),wr(),fn(j,"mount")},Pe=(g,y,C)=>{const M=y.component=g.component;if(Eg(g,y,C))if(M.asyncDep&&!M.asyncResolved){br(y),ie(M,y,C),wr();return}else M.next=y,ag(M.update),M.update();else y.el=g.el,M.vnode=y},ee=(g,y,C,M,P,q,J)=>{const j=()=>{if(g.isMounted){let{next:oe,bu:se,u:ae,parent:pe,vnode:Ee}=g,Ne=oe,Le;br(oe||g.vnode),Gn(g,!1),oe?(oe.el=Ee.el,ie(g,oe,J)):oe=Ee,se&&es(se),(Le=oe.props&&oe.props.onVnodeBeforeUpdate)&&Ut(Le,pe,oe,Ee),Gn(g,!0),dn(g,"render");const ze=ki(g);fn(g,"render");const Rt=g.subTree;g.subTree=ze,dn(g,"patch"),_(Rt,ze,f(Rt.el),Q(Rt),g,P,q),fn(g,"patch"),oe.el=ze.el,Ne===null&&Cg(g,ze.el),ae&&tt(ae,P),(Le=oe.props&&oe.props.onVnodeUpdated)&&tt(()=>Ut(Le,pe,oe,Ee),P),ef(g),wr()}else{let oe;const{el:se,props:ae}=y,{bm:pe,m:Ee,parent:Ne}=g,Le=Bs(y);if(Gn(g,!1),pe&&es(pe),!Le&&(oe=ae&&ae.onVnodeBeforeMount)&&Ut(oe,Ne,y),Gn(g,!0),se&&Me){const ze=()=>{dn(g,"render"),g.subTree=ki(g),fn(g,"render"),dn(g,"hydrate"),Me(se,g.subTree,g,P,null),fn(g,"hydrate")};Le?y.type.__asyncLoader().then(()=>!g.isUnmounted&&ze()):ze()}else{dn(g,"render");const ze=g.subTree=ki(g);fn(g,"render"),dn(g,"patch"),_(null,ze,C,M,g,P,q),fn(g,"patch"),y.el=ze.el}if(Ee&&tt(Ee,P),!Le&&(oe=ae&&ae.onVnodeMounted)){const ze=y;tt(()=>Ut(oe,Ne,ze),P)}(y.shapeFlag&256||Ne&&Bs(Ne.vnode)&&Ne.vnode.shapeFlag&256)&&g.a&&tt(g.a,P),g.isMounted=!0,ra(g),y=C=M=null}},V=g.effect=new ll(j,()=>li(D),g.scope),D=g.update=()=>V.run();D.id=g.uid,Gn(g,!0),V.onTrack=g.rtc?oe=>es(g.rtc,oe):void 0,V.onTrigger=g.rtg?oe=>es(g.rtg,oe):void 0,D.ownerInstance=g,D()},ie=(g,y,C)=>{y.component=g;const M=g.vnode.props;g.vnode=y,g.next=null,oy(g,y.props,M,C),fy(g,y.children,C),bs(),uc(),ws()},Se=(g,y,C,M,P,q,J,j,V=!1)=>{const D=g&&g.children,oe=g?g.shapeFlag:0,se=y.children,{patchFlag:ae,shapeFlag:pe}=y;if(ae>0){if(ae&128){Ft(D,se,C,M,P,q,J,j,V);return}else if(ae&256){Ue(D,se,C,M,P,q,J,j,V);return}}pe&8?(oe&16&&F(D,P,q),se!==D&&d(C,se)):oe&16?pe&16?Ft(D,se,C,M,P,q,J,j,V):F(D,P,q,!0):(oe&8&&d(C,""),pe&16&&N(se,C,M,P,q,J,j,V))},Ue=(g,y,C,M,P,q,J,j,V)=>{g=g||Ms,y=y||Ms;const D=g.length,oe=y.length,se=Math.min(D,oe);let ae;for(ae=0;ae<se;ae++){const pe=y[ae]=V?An(y[ae]):Wt(y[ae]);_(g[ae],pe,C,null,P,q,J,j,V)}D>oe?F(g,P,q,!0,!1,se):N(y,C,M,P,q,J,j,V,se)},Ft=(g,y,C,M,P,q,J,j,V)=>{let D=0;const oe=y.length;let se=g.length-1,ae=oe-1;for(;D<=se&&D<=ae;){const pe=g[D],Ee=y[D]=V?An(y[D]):Wt(y[D]);if(ts(pe,Ee))_(pe,Ee,C,null,P,q,J,j,V);else break;D++}for(;D<=se&&D<=ae;){const pe=g[se],Ee=y[ae]=V?An(y[ae]):Wt(y[ae]);if(ts(pe,Ee))_(pe,Ee,C,null,P,q,J,j,V);else break;se--,ae--}if(D>se){if(D<=ae){const pe=ae+1,Ee=pe<oe?y[pe].el:M;for(;D<=ae;)_(null,y[D]=V?An(y[D]):Wt(y[D]),C,Ee,P,q,J,j,V),D++}}else if(D>ae)for(;D<=se;)gt(g[D],P,q,!0),D++;else{const pe=D,Ee=D,Ne=new Map;for(D=Ee;D<=ae;D++){const ct=y[D]=V?An(y[D]):Wt(y[D]);ct.key!=null&&(Ne.has(ct.key)&&B("Duplicate keys found during update:",JSON.stringify(ct.key),"Make sure keys are unique."),Ne.set(ct.key,D))}let Le,ze=0;const Rt=ae-Ee+1;let As=!1,Xl=0;const Gs=new Array(Rt);for(D=0;D<Rt;D++)Gs[D]=0;for(D=pe;D<=se;D++){const ct=g[D];if(ze>=Rt){gt(ct,P,q,!0);continue}let Yt;if(ct.key!=null)Yt=Ne.get(ct.key);else for(Le=Ee;Le<=ae;Le++)if(Gs[Le-Ee]===0&&ts(ct,y[Le])){Yt=Le;break}Yt===void 0?gt(ct,P,q,!0):(Gs[Yt-Ee]=D+1,Yt>=Xl?Xl=Yt:As=!0,_(ct,y[Yt],C,null,P,q,J,j,V),ze++)}const ec=As?gy(Gs):Ms;for(Le=ec.length-1,D=Rt-1;D>=0;D--){const ct=Ee+D,Yt=y[ct],tc=ct+1<oe?y[ct+1].el:M;Gs[D]===0?_(null,Yt,C,tc,P,q,J,j,V):As&&(Le<0||D!==ec[Le]?nt(Yt,C,tc,2):Le--)}}},nt=(g,y,C,M,P=null)=>{const{el:q,type:J,transition:j,children:V,shapeFlag:D}=g;if(D&6){nt(g.component.subTree,y,C,M);return}if(D&128){g.suspense.move(y,C,M);return}if(D&64){J.move(g,y,C,te);return}if(J===Ae){s(q,y,C);for(let se=0;se<V.length;se++)nt(V[se],y,C,M);s(g.anchor,y,C);return}if(J===xr){T(g,y,C);return}if(M!==2&&D&1&&j)if(M===0)j.beforeEnter(q),s(q,y,C),tt(()=>j.enter(q),P);else{const{leave:se,delayLeave:ae,afterLeave:pe}=j,Ee=()=>s(q,y,C),Ne=()=>{se(q,()=>{Ee(),pe&&pe()})};ae?ae(q,Ee,Ne):Ne()}else s(q,y,C)},gt=(g,y,C,M=!1,P=!1)=>{const{type:q,props:J,ref:j,children:V,dynamicChildren:D,shapeFlag:oe,patchFlag:se,dirs:ae}=g;if(j!=null&&ha(j,null,C,g,!0),oe&256){y.ctx.deactivate(g);return}const pe=oe&1&&ae,Ee=!Bs(g);let Ne;if(Ee&&(Ne=J&&J.onVnodeBeforeUnmount)&&Ut(Ne,y,g),oe&6)Ot(g.component,C,M);else{if(oe&128){g.suspense.unmount(C,M);return}pe&&Kn(g,null,y,"beforeUnmount"),oe&64?g.type.remove(g,y,C,P,te,M):D&&(q!==Ae||se>0&&se&64)?F(D,y,C,!1,!0):(q===Ae&&se&384||!P&&oe&16)&&F(V,y,C),M&&Gt(g)}(Ee&&(Ne=J&&J.onVnodeUnmounted)||pe)&&tt(()=>{Ne&&Ut(Ne,y,g),pe&&Kn(g,null,y,"unmounted")},C)},Gt=g=>{const{type:y,el:C,anchor:M,transition:P}=g;if(y===Ae){g.patchFlag>0&&g.patchFlag&2048&&P&&!P.persisted?g.children.forEach(J=>{J.type===it?o(J.el):Gt(J)}):zn(C,M);return}if(y===xr){E(g);return}const q=()=>{o(C),P&&!P.persisted&&P.afterLeave&&P.afterLeave()};if(g.shapeFlag&1&&P&&!P.persisted){const{leave:J,delayLeave:j}=P,V=()=>J(C,q);j?j(g.el,q,V):V()}else q()},zn=(g,y)=>{let C;for(;g!==y;)C=p(g),o(g),g=C;o(y)},Ot=(g,y,C)=>{g.type.__hmrId&&ug(g);const{bum:M,scope:P,update:q,subTree:J,um:j}=g;M&&es(M),P.stop(),q&&(q.active=!1,gt(J,g,y,C)),j&&tt(j,y),tt(()=>{g.isUnmounted=!0},y),y&&y.pendingBranch&&!y.isUnmounted&&g.asyncDep&&!g.asyncResolved&&g.suspenseId===y.pendingId&&(y.deps--,y.deps===0&&y.resolve()),gg(g)},F=(g,y,C,M=!1,P=!1,q=0)=>{for(let J=q;J<g.length;J++)gt(g[J],y,C,M,P)},Q=g=>g.shapeFlag&6?Q(g.component.subTree):g.shapeFlag&128?g.suspense.next():p(g.anchor||g.el),X=(g,y,C)=>{g==null?y._vnode&&gt(y._vnode,null,null,!0):_(y._vnode||null,g,y,null,null,null,C),uc(),Zd(),y._vnode=g},te={p:_,um:gt,m:nt,r:Gt,mt:be,mc:N,pc:Se,pbc:le,n:Q,o:e};let xe,Me;return t&&([xe,Me]=t(te)),{render:X,hydrate:xe,createApp:ty(X,xe)}}function Gn({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function qr(e,t,n=!1){const s=e.children,o=t.children;if(re(s)&&re(o))for(let r=0;r<s.length;r++){const a=s[r];let l=o[r];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=o[r]=An(o[r]),l.el=a.el),n||qr(a,l)),l.type===Go&&(l.el=a.el),l.type===it&&!l.el&&(l.el=a.el)}}function gy(e){const t=e.slice(),n=[0];let s,o,r,a,l;const c=e.length;for(s=0;s<c;s++){const u=e[s];if(u!==0){if(o=n[n.length-1],e[o]<u){t[s]=o,n.push(s);continue}for(r=0,a=n.length-1;r<a;)l=r+a>>1,e[n[l]]<u?r=l+1:a=l;u<e[n[r]]&&(r>0&&(t[s]=n[r-1]),n[r]=s)}}for(r=n.length,a=n[r-1];r-- >0;)n[r]=a,a=t[a];return n}const yy=e=>e.__isTeleport,Ds=e=>e&&(e.disabled||e.disabled===""),Sc=e=>typeof SVGElement<"u"&&e instanceof SVGElement,ma=(e,t)=>{const n=e&&e.to;if(We(n))if(t){const s=t(n);return s||B(`Failed to locate Teleport target with selector "${n}". Note the target element must exist before the component is mounted - i.e. the target cannot be rendered by the component itself, and ideally should be outside of the entire Vue component tree.`),s}else return B("Current renderer does not support string target for Teleports. (missing querySelector renderer option)"),null;else return!n&&!Ds(e)&&B(`Invalid Teleport target: ${n}`),n},vy={__isTeleport:!0,process(e,t,n,s,o,r,a,l,c,u){const{mc:d,pc:f,pbc:p,o:{insert:h,querySelector:m,createText:_,createComment:k}}=u,x=Ds(t.props);let{shapeFlag:S,children:b,dynamicChildren:T}=t;if(Un&&(c=!1,T=null),e==null){const E=t.el=k("teleport start"),A=t.anchor=k("teleport end");h(E,n,s),h(A,n,s);const L=t.target=ma(t.props,m),U=t.targetAnchor=_("");L?(h(U,L),a=a||Sc(L)):x||B("Invalid Teleport target on mount:",L,`(${typeof L})`);const N=(ne,le)=>{S&16&&d(b,ne,le,o,r,a,l,c)};x?N(n,A):L&&N(L,U)}else{t.el=e.el;const E=t.anchor=e.anchor,A=t.target=e.target,L=t.targetAnchor=e.targetAnchor,U=Ds(e.props),N=U?n:A,ne=U?E:L;if(a=a||Sc(A),T?(p(e.dynamicChildren,T,N,o,r,a,l),qr(e,t,!0)):c||f(e,t,N,ne,o,r,a,l,!1),x)U||ar(t,n,E,u,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const le=t.target=ma(t.props,m);le?ar(t,le,null,u,0):B("Invalid Teleport target on update:",A,`(${typeof A})`)}else U&&ar(t,A,L,u,1)}Sf(t)},remove(e,t,n,s,{um:o,o:{remove:r}},a){const{shapeFlag:l,children:c,anchor:u,targetAnchor:d,target:f,props:p}=e;if(f&&r(d),(a||!Ds(p))&&(r(u),l&16))for(let h=0;h<c.length;h++){const m=c[h];o(m,t,n,!0,!!m.dynamicChildren)}},move:ar,hydrate:_y};function ar(e,t,n,{o:{insert:s},m:o},r=2){r===0&&s(e.targetAnchor,t,n);const{el:a,anchor:l,shapeFlag:c,children:u,props:d}=e,f=r===2;if(f&&s(a,t,n),(!f||Ds(d))&&c&16)for(let p=0;p<u.length;p++)o(u[p],t,n,2);f&&s(l,t,n)}function _y(e,t,n,s,o,r,{o:{nextSibling:a,parentNode:l,querySelector:c}},u){const d=t.target=ma(t.props,c);if(d){const f=d._lpa||d.firstChild;if(t.shapeFlag&16)if(Ds(t.props))t.anchor=u(a(e),t,l(e),n,s,o,r),t.targetAnchor=f;else{t.anchor=a(e);let p=f;for(;p;)if(p=a(p),p&&p.nodeType===8&&p.data==="teleport anchor"){t.targetAnchor=p,d._lpa=t.targetAnchor&&a(t.targetAnchor);break}u(f,t,d,n,s,o,r)}Sf(t)}return t.anchor&&a(t.anchor)}const by=vy;function Sf(e){const t=e.ctx;if(t&&t.ut){let n=e.children[0].el;for(;n!==e.targetAnchor;)n.nodeType===1&&n.setAttribute("data-v-owner",t.uid),n=n.nextSibling;t.ut()}}const Ae=Symbol.for("v-fgt"),Go=Symbol.for("v-txt"),it=Symbol.for("v-cmt"),xr=Symbol.for("v-stc"),go=[];let Ht=null;function w(e=!1){go.push(Ht=e?null:[])}function wy(){go.pop(),Ht=go[go.length-1]||null}let Oo=1;function Tc(e){Oo+=e}function Tf(e){return e.dynamicChildren=Oo>0?Ht||Ms:null,wy(),Oo>0&&Ht&&Ht.push(e),e}function $(e,t,n,s,o,r){return Tf(i(e,t,n,s,o,r,!0))}function H(e,t,n,s,o){return Tf(Y(e,t,n,s,o,!0))}function an(e){return e?e.__v_isVNode===!0:!1}function ts(e,t){return t.shapeFlag&6&&Us.has(t.type)?(e.shapeFlag&=-257,t.shapeFlag&=-513,!1):e.type===t.type&&e.key===t.key}const xy=(...e)=>ky(...e),hi="__vInternal",Ef=({key:e})=>e??null,kr=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?We(e)||Fe(e)||de(e)?{i:Qe,r:e,k:t,f:!!n}:e:null);function i(e,t=null,n=null,s=0,o=null,r=e===Ae?0:1,a=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Ef(t),ref:t&&kr(t),scopeId:ui,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:o,dynamicChildren:null,appContext:null,ctx:Qe};return l?(kl(c,n),r&128&&e.normalize(c)):n&&(c.shapeFlag|=We(n)?8:16),c.key!==c.key&&B("VNode created with invalid key (NaN). VNode type:",c.type),Oo>0&&!a&&Ht&&(c.patchFlag>0||r&6)&&c.patchFlag!==32&&Ht.push(c),c}const Y=xy;function ky(e,t=null,n=null,s=0,o=null,r=!1){if((!e||e===Wg)&&(e||B(`Invalid vnode type when creating vnode: ${e}.`),e=it),an(e)){const l=ln(e,t,!0);return n&&kl(l,n),Oo>0&&!r&&Ht&&(l.shapeFlag&6?Ht[Ht.indexOf(e)]=l:Ht.push(l)),l.patchFlag|=-2,l}if(Of(e)&&(e=e.__vccOpts),t){t=ce(t);let{class:l,style:c}=t;l&&!We(l)&&(t.class=De(l)),Oe(c)&&(Mr(c)&&!re(c)&&(c=je({},c)),t.style=Xe(c))}const a=We(e)?1:of(e)?128:yy(e)?64:Oe(e)?4:de(e)?2:0;return a&4&&Mr(e)&&(e=he(e),B("Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",`
Component that was made reactive: `,e)),i(e,t,n,s,o,a,r,!0)}function ce(e){return e?Mr(e)||hi in e?je({},e):e:null}function ln(e,t,n=!1){const{props:s,ref:o,patchFlag:r,children:a}=e,l=t?Vt(s||{},t):s;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&Ef(l),ref:t&&t.ref?n&&o?re(o)?o.concat(kr(t)):[o,kr(t)]:kr(t):o,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:r===-1&&re(a)?a.map(Cf):a,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Ae?r===-1?16:r|16:r,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&ln(e.ssContent),ssFallback:e.ssFallback&&ln(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function Cf(e){const t=ln(e);return re(e.children)&&(t.children=e.children.map(Cf)),t}function v(e=" ",t=0){return Y(Go,null,e,t)}function ge(e="",t=!1){return t?(w(),H(it,null,e)):Y(it,null,e)}function Wt(e){return e==null||typeof e=="boolean"?Y(it):re(e)?Y(Ae,null,e.slice()):typeof e=="object"?An(e):Y(Go,null,String(e))}function An(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:ln(e)}function kl(e,t){let n=0;const{shapeFlag:s}=e;if(t==null)t=null;else if(re(t))n=16;else if(typeof t=="object")if(s&65){const o=t.default;o&&(o._c&&(o._d=!1),kl(e,o()),o._c&&(o._d=!0));return}else{n=32;const o=t._;!o&&!(hi in t)?t._ctx=Qe:o===3&&Qe&&(Qe.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else de(t)?(t={default:t,_ctx:Qe},n=32):(t=String(t),s&64?(n=16,t=[v(t)]):n=8);e.children=t,e.shapeFlag|=n}function Vt(...e){const t={};for(let n=0;n<e.length;n++){const s=e[n];for(const o in s)if(o==="class")t.class!==s.class&&(t.class=De([t.class,s.class]));else if(o==="style")t.style=Xe([t.style,s.style]);else if(Ho(o)){const r=t[o],a=s[o];a&&r!==a&&!(re(r)&&r.includes(a))&&(t[o]=r?[].concat(r,a):a)}else o!==""&&(t[o]=s[o])}return t}function Ut(e,t,n,s=null){Lt(e,t,7,[n,s])}const Sy=yf();let Ty=0;function Ey(e,t,n){const s=e.type,o=(t?t.appContext:e.appContext)||Sy,r={uid:Ty++,vnode:e,type:s,parent:t,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,scope:new Ad(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(o.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:_f(s,o),emitsOptions:nf(s,o),emit:null,emitted:null,propsDefaults:Be,inheritAttrs:s.inheritAttrs,ctx:Be,data:Be,props:Be,attrs:Be,slots:Be,refs:Be,setupState:Be,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx=qg(r),r.root=t?t.root:r,r.emit=bg.bind(null,r),e.ce&&e.ce(r),r}let Ze=null;const $t=()=>Ze||Qe;let Sl,$s,Ec="__VUE_INSTANCE_SETTERS__";($s=Or()[Ec])||($s=Or()[Ec]=[]),$s.push(e=>Ze=e),Sl=e=>{$s.length>1?$s.forEach(t=>t(e)):$s[0](e)};const js=e=>{Sl(e),e.scope.on()},ms=()=>{Ze&&Ze.scope.off(),Sl(null)},Cy=qn("slot,component");function ga(e,t){const n=t.isNativeTag||wd;(Cy(e)||n(e))&&B("Do not use built-in or reserved HTML elements as component id: "+e)}function Af(e){return e.vnode.shapeFlag&4}let Io=!1;function Ay(e,t=!1){Io=t;const{props:n,children:s}=e.vnode,o=Af(e);ny(e,n,o,t),dy(e,s);const r=o?$y(e,t):void 0;return Io=!1,r}function $y(e,t){var n;const s=e.type;{if(s.name&&ga(s.name,e.appContext.config),s.components){const r=Object.keys(s.components);for(let a=0;a<r.length;a++)ga(r[a],e.appContext.config)}if(s.directives){const r=Object.keys(s.directives);for(let a=0;a<r.length;a++)af(r[a])}s.compilerOptions&&Fy()&&B('"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.')}e.accessCache=Object.create(null),e.proxy=ii(new Proxy(e.ctx,mf)),Hg(e);const{setup:o}=s;if(o){const r=e.setupContext=o.length>1?Ff(e):null;js(e),bs();const a=yn(o,e,0,[lo(e.props),r]);if(ws(),ms(),sl(a)){if(a.then(ms,ms),t)return a.then(l=>{Cc(e,l,t)}).catch(l=>{ai(l,e,0)});if(e.asyncDep=a,!e.suspense){const l=(n=s.name)!=null?n:"Anonymous";B(`Component <${l}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`)}}else Cc(e,a,t)}else $f(e,t)}function Cc(e,t,n){de(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Oe(t)?(an(t)&&B("setup() should not return VNodes directly - return a render function instead."),e.devtoolsRawSetupState=t,e.setupState=Hd(t),Vg(e)):t!==void 0&&B(`setup() should return an object. Received: ${t===null?"null":typeof t}`),$f(e,n)}let ya;const Fy=()=>!ya;function $f(e,t,n){const s=e.type;if(!e.render){if(!t&&ya&&!s.render){const o=s.template||wl(e).template;if(o){dn(e,"compile");const{isCustomElement:r,compilerOptions:a}=e.appContext.config,{delimiters:l,compilerOptions:c}=s,u=je(je({isCustomElement:r,delimiters:l},a),c);s.render=ya(o,u),fn(e,"compile")}}e.render=s.render||_t}js(e),bs(),Yg(e),ws(),ms(),!s.render&&e.render===_t&&!t&&(s.template?B('Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'):B("Component is missing template or render function."))}function Oy(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,n){return Br(),lt(e,"get","$attrs"),t[n]},set(){return B("setupContext.attrs is readonly."),!1},deleteProperty(){return B("setupContext.attrs is readonly."),!1}}))}function Iy(e){return e.slotsProxy||(e.slotsProxy=new Proxy(e.slots,{get(t,n){return lt(e,"get","$slots"),t[n]}}))}function Ff(e){return Object.freeze({get attrs(){return Oy(e)},get slots(){return Iy(e)},get emit(){return(n,...s)=>e.emit(n,...s)},expose:n=>{if(e.exposed&&B("expose() should be called only once per setup()."),n!=null){let s=typeof n;s==="object"&&(re(n)?s="array":Fe(n)&&(s="ref")),s!=="object"&&B(`expose() should be passed a plain object, received ${s}.`)}e.exposed=n||{}}})}function mi(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Hd(ii(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in hs)return hs[n](e)},has(t,n){return n in t||n in hs}}))}const Uy=/(?:^|[-_])(\w)/g,Py=e=>e.replace(Uy,t=>t.toUpperCase()).replace(/[-_]/g,"");function Uo(e,t=!0){return de(e)?e.displayName||e.name:e.name||t&&e.__name}function gi(e,t,n=!1){let s=Uo(t);if(!s&&t.__file){const o=t.__file.match(/([^/\\]+)\.\w+$/);o&&(s=o[1])}if(!s&&e&&e.parent){const o=r=>{for(const a in r)if(r[a]===t)return a};s=o(e.components||e.parent.type.components)||o(e.appContext.components)}return s?Py(s):n?"App":"Anonymous"}function Of(e){return de(e)&&"__vccOpts"in e}const I=(e,t)=>Jm(e,t,Io);function Je(e,t,n){const s=arguments.length;return s===2?Oe(t)&&!re(t)?an(t)?Y(e,null,[t]):Y(e,t):Y(e,null,t):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&an(n)&&(n=[n]),Y(e,t,n))}const My=Symbol.for("v-scx"),Ly=()=>{{const e=R(My);return e||B("Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."),e}};function Ci(e){return!!(e&&e.__v_isShallow)}function By(){if(typeof window>"u")return;const e={style:"color:#3ba776"},t={style:"color:#0b1bc9"},n={style:"color:#b62e24"},s={style:"color:#9d288c"},o={header(f){return Oe(f)?f.__isVue?["div",e,"VueInstance"]:Fe(f)?["div",{},["span",e,d(f)],"<",l(f.value),">"]:fs(f)?["div",{},["span",e,Ci(f)?"ShallowReactive":"Reactive"],"<",l(f),`>${jn(f)?" (readonly)":""}`]:jn(f)?["div",{},["span",e,Ci(f)?"ShallowReadonly":"Readonly"],"<",l(f),">"]:null:null},hasBody(f){return f&&f.__isVue},body(f){if(f&&f.__isVue)return["div",{},...r(f.$)]}};function r(f){const p=[];f.type.props&&f.props&&p.push(a("props",he(f.props))),f.setupState!==Be&&p.push(a("setup",f.setupState)),f.data!==Be&&p.push(a("data",he(f.data)));const h=c(f,"computed");h&&p.push(a("computed",h));const m=c(f,"inject");return m&&p.push(a("injected",m)),p.push(["div",{},["span",{style:s.style+";opacity:0.66"},"$ (internal): "],["object",{object:f}]]),p}function a(f,p){return p=je({},p),Object.keys(p).length?["div",{style:"line-height:1.25em;margin-bottom:0.6em"},["div",{style:"color:#476582"},f],["div",{style:"padding-left:1.25em"},...Object.keys(p).map(h=>["div",{},["span",s,h+": "],l(p[h],!1)])]]:["span",{}]}function l(f,p=!0){return typeof f=="number"?["span",t,f]:typeof f=="string"?["span",n,JSON.stringify(f)]:typeof f=="boolean"?["span",s,f]:Oe(f)?["object",{object:p?he(f):f}]:["span",n,String(f)]}function c(f,p){const h=f.type;if(de(h))return;const m={};for(const _ in f.ctx)u(h,_,p)&&(m[_]=f.ctx[_]);return m}function u(f,p,h){const m=f[h];if(re(m)&&m.includes(p)||Oe(m)&&p in m||f.extends&&u(f.extends,p,h)||f.mixins&&f.mixins.some(_=>u(_,p,h)))return!0}function d(f){return Ci(f)?"ShallowRef":f.effect?"ComputedRef":"Ref"}window.devtoolsFormatters?window.devtoolsFormatters.push(o):window.devtoolsFormatters=[o]}const Hr="3.3.4",Dy="http://www.w3.org/2000/svg",ns=typeof document<"u"?document:null,Ac=ns&&ns.createElement("template"),Ry={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,s)=>{const o=t?ns.createElementNS(Dy,e):ns.createElement(e,n?{is:n}:void 0);return e==="select"&&s&&s.multiple!=null&&o.setAttribute("multiple",s.multiple),o},createText:e=>ns.createTextNode(e),createComment:e=>ns.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>ns.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,s,o,r){const a=n?n.previousSibling:t.lastChild;if(o&&(o===r||o.nextSibling))for(;t.insertBefore(o.cloneNode(!0),n),!(o===r||!(o=o.nextSibling)););else{Ac.innerHTML=s?`<svg>${e}</svg>`:e;const l=Ac.content;if(s){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}t.insertBefore(l,n)}return[a?a.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function Ny(e,t,n){const s=e._vtc;s&&(t=(t?[t,...s]:[...s]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function jy(e,t,n){const s=e.style,o=We(n);if(n&&!o){if(t&&!We(t))for(const r in t)n[r]==null&&va(s,r,"");for(const r in n)va(s,r,n[r])}else{const r=s.display;o?t!==n&&(s.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(s.display=r)}}const Wy=/[^\\];\s*$/,$c=/\s*!important$/;function va(e,t,n){if(re(n))n.forEach(s=>va(e,t,s));else if(n==null&&(n=""),Wy.test(n)&&B(`Unexpected semicolon at the end of '${t}' style value: '${n}'`),t.startsWith("--"))e.setProperty(t,n);else{const s=qy(e,t);$c.test(n)?e.setProperty(_n(s),n.replace($c,""),"important"):e[s]=n}}const Fc=["Webkit","Moz","ms"],Ai={};function qy(e,t){const n=Ai[t];if(n)return n;let s=sn(t);if(s!=="filter"&&s in e)return Ai[t]=s;s=vs(s);for(let o=0;o<Fc.length;o++){const r=Fc[o]+s;if(r in e)return Ai[t]=r}return t}const Oc="http://www.w3.org/1999/xlink";function Hy(e,t,n,s,o){if(s&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(Oc,t.slice(6,t.length)):e.setAttributeNS(Oc,t,n);else{const r=fm(t);n==null||r&&!Ed(n)?e.removeAttribute(t):e.setAttribute(t,r?"":n)}}function Vy(e,t,n,s,o,r,a){if(t==="innerHTML"||t==="textContent"){s&&a(s,o,r),e[t]=n??"";return}const l=e.tagName;if(t==="value"&&l!=="PROGRESS"&&!l.includes("-")){e._value=n;const u=l==="OPTION"?e.getAttribute("value"):e.value,d=n??"";u!==d&&(e.value=d),n==null&&e.removeAttribute(t);return}let c=!1;if(n===""||n==null){const u=typeof e[t];u==="boolean"?n=Ed(n):n==null&&u==="string"?(n="",c=!0):u==="number"&&(n=0,c=!0)}try{e[t]=n}catch(u){c||B(`Failed setting prop "${t}" on <${l.toLowerCase()}>: value ${n} is invalid.`,u)}c&&e.removeAttribute(t)}function zy(e,t,n,s){e.addEventListener(t,n,s)}function Ky(e,t,n,s){e.removeEventListener(t,n,s)}function Gy(e,t,n,s,o=null){const r=e._vei||(e._vei={}),a=r[t];if(s&&a)a.value=s;else{const[l,c]=Yy(t);if(s){const u=r[t]=Jy(s,o);zy(e,l,u,c)}else a&&(Ky(e,l,a,c),r[t]=void 0)}}const Ic=/(?:Once|Passive|Capture)$/;function Yy(e){let t;if(Ic.test(e)){t={};let s;for(;s=e.match(Ic);)e=e.slice(0,e.length-s[0].length),t[s[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):_n(e.slice(2)),t]}let $i=0;const Zy=Promise.resolve(),Qy=()=>$i||(Zy.then(()=>$i=0),$i=Date.now());function Jy(e,t){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Lt(Xy(s,n.value),t,5,[s])};return n.value=e,n.attached=Qy(),n}function Xy(e,t){if(re(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(s=>o=>!o._stopped&&s&&s(o))}else return t}const Uc=/^on[a-z]/,e0=(e,t,n,s,o=!1,r,a,l,c)=>{t==="class"?Ny(e,s,o):t==="style"?jy(e,n,s):Ho(t)?$r(t)||Gy(e,t,n,s,a):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):t0(e,t,s,o))?Vy(e,t,s,r,a,l,c):(t==="true-value"?e._trueValue=s:t==="false-value"&&(e._falseValue=s),Hy(e,t,s,o))};function t0(e,t,n,s){return s?!!(t==="innerHTML"||t==="textContent"||t in e&&Uc.test(t)&&de(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Uc.test(t)&&We(n)?!1:t in e}const Sn="transition",Zs="animation",If={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},n0=je({},Og,If),Yn=(e,t=[])=>{re(e)?e.forEach(n=>n(...t)):e&&e(...t)},Pc=e=>e?re(e)?e.some(t=>t.length>1):e.length>1:!1;function s0(e){const t={};for(const Z in e)Z in If||(t[Z]=e[Z]);if(e.css===!1)return t;const{name:n="v",type:s,duration:o,enterFromClass:r=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:l=`${n}-enter-to`,appearFromClass:c=r,appearActiveClass:u=a,appearToClass:d=l,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:p=`${n}-leave-active`,leaveToClass:h=`${n}-leave-to`}=e,m=o0(o),_=m&&m[0],k=m&&m[1],{onBeforeEnter:x,onEnter:S,onEnterCancelled:b,onLeave:T,onLeaveCancelled:E,onBeforeAppear:A=x,onAppear:L=S,onAppearCancelled:U=b}=t,N=(Z,me,ve)=>{En(Z,me?d:l),En(Z,me?u:a),ve&&ve()},ne=(Z,me)=>{Z._isLeaving=!1,En(Z,f),En(Z,h),En(Z,p),me&&me()},le=Z=>(me,ve)=>{const be=Z?L:S,Pe=()=>N(me,Z,ve);Yn(be,[me,Pe]),Mc(()=>{En(me,Z?c:r),pn(me,Z?d:l),Pc(be)||Lc(me,s,_,Pe)})};return je(t,{onBeforeEnter(Z){Yn(x,[Z]),pn(Z,r),pn(Z,a)},onBeforeAppear(Z){Yn(A,[Z]),pn(Z,c),pn(Z,u)},onEnter:le(!1),onAppear:le(!0),onLeave(Z,me){Z._isLeaving=!0;const ve=()=>ne(Z,me);pn(Z,f),Pf(),pn(Z,p),Mc(()=>{Z._isLeaving&&(En(Z,f),pn(Z,h),Pc(T)||Lc(Z,s,k,ve))}),Yn(T,[Z,ve])},onEnterCancelled(Z){N(Z,!1),Yn(b,[Z])},onAppearCancelled(Z){N(Z,!0),Yn(U,[Z])},onLeaveCancelled(Z){ne(Z),Yn(E,[Z])}})}function o0(e){if(e==null)return null;if(Oe(e))return[Fi(e.enter),Fi(e.leave)];{const t=Fi(e);return[t,t]}}function Fi(e){const t=sm(e);return sg(t,"<transition> explicit duration"),t}function pn(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e._vtc||(e._vtc=new Set)).add(t)}function En(e,t){t.split(/\s+/).forEach(s=>s&&e.classList.remove(s));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function Mc(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let r0=0;function Lc(e,t,n,s){const o=e._endId=++r0,r=()=>{o===e._endId&&s()};if(n)return setTimeout(r,n);const{type:a,timeout:l,propCount:c}=Uf(e,t);if(!a)return s();const u=a+"end";let d=0;const f=()=>{e.removeEventListener(u,p),r()},p=h=>{h.target===e&&++d>=c&&f()};setTimeout(()=>{d<c&&f()},l+1),e.addEventListener(u,p)}function Uf(e,t){const n=window.getComputedStyle(e),s=m=>(n[m]||"").split(", "),o=s(`${Sn}Delay`),r=s(`${Sn}Duration`),a=Bc(o,r),l=s(`${Zs}Delay`),c=s(`${Zs}Duration`),u=Bc(l,c);let d=null,f=0,p=0;t===Sn?a>0&&(d=Sn,f=a,p=r.length):t===Zs?u>0&&(d=Zs,f=u,p=c.length):(f=Math.max(a,u),d=f>0?a>u?Sn:Zs:null,p=d?d===Sn?r.length:c.length:0);const h=d===Sn&&/\b(transform|all)(,|$)/.test(s(`${Sn}Property`).toString());return{type:d,timeout:f,propCount:p,hasTransform:h}}function Bc(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,s)=>Dc(n)+Dc(e[s])))}function Dc(e){return Number(e.slice(0,-1).replace(",","."))*1e3}function Pf(){return document.body.offsetHeight}const Mf=new WeakMap,Lf=new WeakMap,Bf={name:"TransitionGroup",props:je({},n0,{tag:String,moveClass:String}),setup(e,{slots:t}){const n=$t(),s=Fg();let o,r;return fi(()=>{if(!o.length)return;const a=e.moveClass||`${e.name||"v"}-move`;if(!d0(o[0].el,n.vnode.el,a))return;o.forEach(l0),o.forEach(c0);const l=o.filter(u0);Pf(),l.forEach(c=>{const u=c.el,d=u.style;pn(u,a),d.transform=d.webkitTransform=d.transitionDuration="";const f=u._moveCb=p=>{p&&p.target!==u||(!p||/transform$/.test(p.propertyName))&&(u.removeEventListener("transitionend",f),u._moveCb=null,En(u,a))};u.addEventListener("transitionend",f)})}),()=>{const a=he(e),l=s0(a);let c=a.tag||Ae;o=r,r=t.default?lf(t.default()):[];for(let u=0;u<r.length;u++){const d=r[u];d.key!=null?Dr(d,aa(d,l,s,n)):B("<TransitionGroup> children must be keyed.")}if(o)for(let u=0;u<o.length;u++){const d=o[u];Dr(d,aa(d,l,s,n)),Mf.set(d,d.el.getBoundingClientRect())}return Y(c,null,r)}}},i0=e=>delete e.mode;Bf.props;const a0=Bf;function l0(e){const t=e.el;t._moveCb&&t._moveCb(),t._enterCb&&t._enterCb()}function c0(e){Lf.set(e,e.el.getBoundingClientRect())}function u0(e){const t=Mf.get(e),n=Lf.get(e),s=t.left-n.left,o=t.top-n.top;if(s||o){const r=e.el.style;return r.transform=r.webkitTransform=`translate(${s}px,${o}px)`,r.transitionDuration="0s",e}}function d0(e,t,n){const s=e.cloneNode();e._vtc&&e._vtc.forEach(a=>{a.split(/\s+/).forEach(l=>l&&s.classList.remove(l))}),n.split(/\s+/).forEach(a=>a&&s.classList.add(a)),s.style.display="none";const o=t.nodeType===1?t:t.parentNode;o.appendChild(s);const{hasTransform:r}=Uf(s);return o.removeChild(s),r}const f0=["ctrl","shift","alt","meta"],p0={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>f0.some(n=>e[`${n}Key`]&&!t.includes(n))},h0=(e,t)=>(n,...s)=>{for(let o=0;o<t.length;o++){const r=p0[t[o]];if(r&&r(n,t))return}return e(n,...s)},m0={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},lr=(e,t)=>n=>{if(!("key"in n))return;const s=_n(n.key);if(t.some(o=>o===s||m0[o]===s))return e(n)},Df={beforeMount(e,{value:t},{transition:n}){e._vod=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):Qs(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:s}){!t!=!n&&(s?t?(s.beforeEnter(e),Qs(e,!0),s.enter(e)):s.leave(e,()=>{Qs(e,!1)}):Qs(e,t))},beforeUnmount(e,{value:t}){Qs(e,t)}};function Qs(e,t){e.style.display=t?e._vod:"none"}const g0=je({patchProp:e0},Ry);let Rc;function y0(){return Rc||(Rc=hy(g0))}const v0=(...e)=>{const t=y0().createApp(...e);_0(t),b0(t);const{mount:n}=t;return t.mount=s=>{const o=w0(s);if(!o)return;const r=t._component;!de(r)&&!r.render&&!r.template&&(r.template=o.innerHTML),o.innerHTML="";const a=n(o,!1,o instanceof SVGElement);return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),a},t};function _0(e){Object.defineProperty(e.config,"isNativeTag",{value:t=>Td(t)||um(t),writable:!1})}function b0(e){{const t=e.config.isCustomElement;Object.defineProperty(e.config,"isCustomElement",{get(){return t},set(){B("The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead.")}});const n=e.config.compilerOptions,s='The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';Object.defineProperty(e.config,"compilerOptions",{get(){return B(s),n},set(){B(s)}})}}function w0(e){if(We(e)){const t=document.querySelector(e);return t||B(`Failed to mount app: mount target selector "${e}" returned null.`),t}return window.ShadowRoot&&e instanceof window.ShadowRoot&&e.mode==="closed"&&B('mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'),e}function x0(){By()}x0();function _a(e,t={},n){for(const s in e){const o=e[s],r=n?`${n}:${s}`:s;typeof o=="object"&&o!==null?_a(o,t,r):typeof o=="function"&&(t[r]=o)}return t}const k0={run:e=>e()},S0=()=>k0,Rf=typeof console.createTask<"u"?console.createTask:S0;function T0(e,t){const n=t.shift(),s=Rf(n);return e.reduce((o,r)=>o.then(()=>s.run(()=>r(...t))),Promise.resolve())}function E0(e,t){const n=t.shift(),s=Rf(n);return Promise.all(e.map(o=>s.run(()=>o(...t))))}function Oi(e,t){for(const n of[...e])n(t)}class C0{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(t,n,s={}){if(!t||typeof n!="function")return()=>{};const o=t;let r;for(;this._deprecatedHooks[t];)r=this._deprecatedHooks[t],t=r.to;if(r&&!s.allowDeprecated){let a=r.message;a||(a=`${o} hook has been deprecated`+(r.to?`, please use ${r.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(a)||(console.warn(a),this._deprecatedMessages.add(a))}if(!n.name)try{Object.defineProperty(n,"name",{get:()=>"_"+t.replace(/\W+/g,"_")+"_hook_cb",configurable:!0})}catch{}return this._hooks[t]=this._hooks[t]||[],this._hooks[t].push(n),()=>{n&&(this.removeHook(t,n),n=void 0)}}hookOnce(t,n){let s,o=(...r)=>(typeof s=="function"&&s(),s=void 0,o=void 0,n(...r));return s=this.hook(t,o),s}removeHook(t,n){if(this._hooks[t]){const s=this._hooks[t].indexOf(n);s!==-1&&this._hooks[t].splice(s,1),this._hooks[t].length===0&&delete this._hooks[t]}}deprecateHook(t,n){this._deprecatedHooks[t]=typeof n=="string"?{to:n}:n;const s=this._hooks[t]||[];delete this._hooks[t];for(const o of s)this.hook(t,o)}deprecateHooks(t){Object.assign(this._deprecatedHooks,t);for(const n in t)this.deprecateHook(n,t[n])}addHooks(t){const n=_a(t),s=Object.keys(n).map(o=>this.hook(o,n[o]));return()=>{for(const o of s.splice(0,s.length))o()}}removeHooks(t){const n=_a(t);for(const s in n)this.removeHook(s,n[s])}removeAllHooks(){for(const t in this._hooks)delete this._hooks[t]}callHook(t,...n){return n.unshift(t),this.callHookWith(T0,t,...n)}callHookParallel(t,...n){return n.unshift(t),this.callHookWith(E0,t,...n)}callHookWith(t,n,...s){const o=this._before||this._after?{name:n,args:s,context:{}}:void 0;this._before&&Oi(this._before,o);const r=t(n in this._hooks?[...this._hooks[n]]:[],s);return r instanceof Promise?r.finally(()=>{this._after&&o&&Oi(this._after,o)}):(this._after&&o&&Oi(this._after,o),r)}beforeEach(t){return this._before=this._before||[],this._before.push(t),()=>{if(this._before!==void 0){const n=this._before.indexOf(t);n!==-1&&this._before.splice(n,1)}}}afterEach(t){return this._after=this._after||[],this._after.push(t),()=>{if(this._after!==void 0){const n=this._after.indexOf(t);n!==-1&&this._after.splice(n,1)}}}}function A0(){return new C0}function $0(e){return Array.isArray(e)?e:[e]}const Nf=["title","script","style","noscript"],jf=["base","meta","link","style","script","noscript"],F0=["title","titleTemplate","templateParams","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"],O0=["base","title","titleTemplate","bodyAttrs","htmlAttrs","templateParams"],I0=["tagPosition","tagPriority","tagDuplicateStrategy","innerHTML","textContent"];function Wf(e){let t=9;for(let n=0;n<e.length;)t=Math.imul(t^e.charCodeAt(n++),9**9);return((t^t>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function ba(e){return Wf(`${e.tag}:${e.textContent||e.innerHTML||""}:${Object.entries(e.props).map(([t,n])=>`${t}:${String(n)}`).join(",")}`)}function U0(e){let t=9;for(const n of e)for(let s=0;s<n.length;)t=Math.imul(t^n.charCodeAt(s++),9**9);return((t^t>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function qf(e,t){const{props:n,tag:s}=e;if(O0.includes(s))return s;if(s==="link"&&n.rel==="canonical")return"canonical";if(n.charset)return"charset";const o=["id"];s==="meta"&&o.push("name","property","http-equiv");for(const r of o)if(typeof n[r]<"u"){const a=String(n[r]);return t&&!t(a)?!1:`${s}:${r}:${a}`}return!1}function Nc(e,t){return e==null?t||null:typeof e=="function"?e(t):e}function cr(e,t=!1,n){const{tag:s,$el:o}=e;o&&(Object.entries(s.props).forEach(([r,a])=>{a=String(a);const l=`attr:${r}`;if(r==="class"){if(!a)return;for(const c of a.split(" ")){const u=`${l}:${c}`;n&&n(e,u,()=>o.classList.remove(c)),o.classList.contains(c)||o.classList.add(c)}return}n&&!r.startsWith("data-h-")&&n(e,l,()=>o.removeAttribute(r)),(t||o.getAttribute(r)!==a)&&o.setAttribute(r,a)}),Nf.includes(s.tag)&&(s.textContent&&s.textContent!==o.textContent?o.textContent=s.textContent:s.innerHTML&&s.innerHTML!==o.innerHTML&&(o.innerHTML=s.innerHTML)))}let Js=!1;async function Hf(e,t={}){var p,h;const n={shouldRender:!0};if(await e.hooks.callHook("dom:beforeRender",n),!n.shouldRender)return;const s=t.document||e.resolvedOptions.document||window.document,o=(await e.resolveTags()).map(l);if(e.resolvedOptions.experimentalHashHydration&&(Js=Js||e._hash||!1,Js)){const m=U0(o.map(_=>_.tag._h));if(Js===m)return;Js=m}const r=e._popSideEffectQueue();e.headEntries().map(m=>m._sde).forEach(m=>{Object.entries(m).forEach(([_,k])=>{r[_]=k})});const a=(m,_,k)=>{_=`${m.renderId}:${_}`,m.entry&&(m.entry._sde[_]=k),delete r[_]};function l(m){const _=e.headEntries().find(x=>x._i===m._e),k={renderId:m._d||ba(m),$el:null,shouldRender:!0,tag:m,entry:_,markSideEffect:(x,S)=>a(k,x,S)};return k}const c=[],u={body:[],head:[]},d=m=>{e._elMap[m.renderId]=m.$el,c.push(m),a(m,"el",()=>{var _;(_=m.$el)==null||_.remove(),delete e._elMap[m.renderId]})};for(const m of o){if(await e.hooks.callHook("dom:beforeRenderTag",m),!m.shouldRender)continue;const{tag:_}=m;if(_.tag==="title"){s.title=_.textContent||"",c.push(m);continue}if(_.tag==="htmlAttrs"||_.tag==="bodyAttrs"){m.$el=s[_.tag==="htmlAttrs"?"documentElement":"body"],cr(m,!1,a),c.push(m);continue}if(m.$el=e._elMap[m.renderId],!m.$el&&_.key&&(m.$el=s.querySelector(`${(p=_.tagPosition)!=null&&p.startsWith("body")?"body":"head"} > ${_.tag}[data-h-${_._h}]`)),m.$el){m.tag._d&&cr(m),d(m);continue}u[(h=_.tagPosition)!=null&&h.startsWith("body")?"body":"head"].push(m)}const f={bodyClose:void 0,bodyOpen:void 0,head:void 0};Object.entries(u).forEach(([m,_])=>{var x;if(!_.length)return;const k=(x=s==null?void 0:s[m])==null?void 0:x.children;if(k){for(const S of[...k].reverse()){const b=S.tagName.toLowerCase();if(!jf.includes(b))continue;const T=S.getAttributeNames().reduce((U,N)=>({...U,[N]:S.getAttribute(N)}),{}),E={tag:b,props:T};S.innerHTML&&(E.innerHTML=S.innerHTML);const A=ba(E);let L=_.findIndex(U=>(U==null?void 0:U.renderId)===A);if(L===-1){const U=qf(E);L=_.findIndex(N=>(N==null?void 0:N.tag._d)&&N.tag._d===U)}if(L!==-1){const U=_[L];U.$el=S,cr(U),d(U),delete _[L]}}_.forEach(S=>{const b=S.tag.tagPosition||"head";f[b]=f[b]||s.createDocumentFragment(),S.$el||(S.$el=s.createElement(S.tag.tag),cr(S,!0)),f[b].appendChild(S.$el),d(S)})}}),f.head&&s.head.appendChild(f.head),f.bodyOpen&&s.body.insertBefore(f.bodyOpen,s.body.firstChild),f.bodyClose&&s.body.appendChild(f.bodyClose);for(const m of c)await e.hooks.callHook("dom:renderTag",m);Object.values(r).forEach(m=>m())}let Ii=null;async function Vf(e,t={}){function n(){return Ii=null,Hf(e,t)}const s=t.delayFn||(o=>setTimeout(o,10));return Ii=Ii||new Promise(o=>s(()=>o(n())))}function P0(e){return{hooks:{"entries:updated":function(t){if(typeof(e==null?void 0:e.document)>"u"&&typeof window>"u")return;let n=e==null?void 0:e.delayFn;!n&&typeof requestAnimationFrame<"u"&&(n=requestAnimationFrame),Vf(t,{document:(e==null?void 0:e.document)||window.document,delayFn:n})}}}}function M0(e){var t;return((t=e==null?void 0:e.head.querySelector('meta[name="unhead:ssr"]'))==null?void 0:t.getAttribute("content"))||!1}const jc={critical:2,high:9,low:12,base:-1,title:1,meta:10};function Wc(e){if(typeof e.tagPriority=="number")return e.tagPriority;if(e.tag==="meta"){if(e.props.charset)return-2;if(e.props["http-equiv"]==="content-security-policy")return 0}const t=e.tagPriority||e.tag;return t in jc?jc[t]:10}const L0=[{prefix:"before:",offset:-1},{prefix:"after:",offset:1}];function B0(){return{hooks:{"tags:resolve":e=>{const t=n=>{var s;return(s=e.tags.find(o=>o._d===n))==null?void 0:s._p};for(const{prefix:n,offset:s}of L0)for(const o of e.tags.filter(r=>typeof r.tagPriority=="string"&&r.tagPriority.startsWith(n))){const r=t(o.tagPriority.replace(n,""));typeof r<"u"&&(o._p=r+s)}e.tags.sort((n,s)=>n._p-s._p).sort((n,s)=>Wc(n)-Wc(s))}}}}function D0(){return{hooks:{"tags:resolve":e=>{const{tags:t}=e;let n=t.findIndex(o=>o.tag==="titleTemplate");const s=t.findIndex(o=>o.tag==="title");if(s!==-1&&n!==-1){const o=Nc(t[n].textContent,t[s].textContent);o!==null?t[s].textContent=o||t[s].textContent:delete t[s]}else if(n!==-1){const o=Nc(t[n].textContent);o!==null&&(t[n].textContent=o,t[n].tag="title",n=-1)}n!==-1&&delete t[n],e.tags=t.filter(Boolean)}}}}function R0(){return{hooks:{"tag:normalise":function({tag:e}){typeof e.props.body<"u"&&(e.tagPosition="bodyClose",delete e.props.body)}}}}const N0=["link","style","script","noscript"];function j0(){return{hooks:{"tag:normalise":({tag:e,resolvedOptions:t})=>{t.experimentalHashHydration===!0&&(e._h=ba(e)),e.key&&N0.includes(e.tag)&&(e._h=Wf(e.key),e.props[`data-h-${e._h}`]="")}}}}const qc=["script","link","bodyAttrs"];function W0(){const e=(t,n)=>{const s={},o={};Object.entries(n.props).forEach(([a,l])=>{a.startsWith("on")&&typeof l=="function"?o[a]=l:s[a]=l});let r;return t==="dom"&&n.tag==="script"&&typeof s.src=="string"&&typeof o.onload<"u"&&(r=s.src,delete s.src),{props:s,eventHandlers:o,delayedSrc:r}};return{hooks:{"ssr:render":function(t){t.tags=t.tags.map(n=>(!qc.includes(n.tag)||!Object.entries(n.props).find(([s,o])=>s.startsWith("on")&&typeof o=="function")||(n.props=e("ssr",n).props),n))},"dom:beforeRenderTag":function(t){if(!qc.includes(t.tag.tag)||!Object.entries(t.tag.props).find(([r,a])=>r.startsWith("on")&&typeof a=="function"))return;const{props:n,eventHandlers:s,delayedSrc:o}=e("dom",t.tag);Object.keys(s).length&&(t.tag.props=n,t.tag._eventHandlers=s,t.tag._delayedSrc=o)},"dom:renderTag":function(t){const n=t.$el;if(!t.tag._eventHandlers||!n)return;const s=t.tag.tag==="bodyAttrs"&&typeof window<"u"?window:n;Object.entries(t.tag._eventHandlers).forEach(([o,r])=>{const a=`${t.tag._d||t.tag._p}:${o}`,l=o.slice(2).toLowerCase(),c=`data-h-${l}`;if(t.markSideEffect(a,()=>{}),n.hasAttribute(c))return;const u=r;n.setAttribute(c,""),s.addEventListener(l,u),t.entry&&(t.entry._sde[a]=()=>{s.removeEventListener(l,u),n.removeAttribute(c)})}),t.tag._delayedSrc&&n.setAttribute("src",t.tag._delayedSrc)}}}}const q0=["templateParams","htmlAttrs","bodyAttrs"];function H0(){return{hooks:{"tag:normalise":function({tag:e}){["hid","vmid","key"].forEach(s=>{e.props[s]&&(e.key=e.props[s],delete e.props[s])});const n=qf(e)||(e.key?`${e.tag}:${e.key}`:!1);n&&(e._d=n)},"tags:resolve":function(e){const t={};e.tags.forEach(s=>{const o=(s.key?`${s.tag}:${s.key}`:s._d)||s._p,r=t[o];if(r){let l=s==null?void 0:s.tagDuplicateStrategy;if(!l&&q0.includes(s.tag)&&(l="merge"),l==="merge"){const c=r.props;["class","style"].forEach(u=>{s.props[u]&&c[u]&&(u==="style"&&!c[u].endsWith(";")&&(c[u]+=";"),s.props[u]=`${c[u]} ${s.props[u]}`)}),t[o].props={...c,...s.props};return}else if(s._e===r._e){r._duped=r._duped||[],s._d=`${r._d}:${r._duped.length+1}`,r._duped.push(s);return}}const a=Object.keys(s.props).length+(s.innerHTML?1:0)+(s.textContent?1:0);if(jf.includes(s.tag)&&a===0){delete t[o];return}t[o]=s});const n=[];Object.values(t).forEach(s=>{const o=s._duped;delete s._duped,n.push(s),o&&n.push(...o)}),e.tags=n}}}}function ur(e,t){function n(r){if(["s","pageTitle"].includes(r))return t.pageTitle;let a;return r.includes(".")?a=r.split(".").reduce((l,c)=>l&&l[c]||void 0,t):a=t[r],typeof a<"u"?a||"":!1}let s=e;try{s=decodeURI(e)}catch{}return(s.match(/%(\w+\.+\w+)|%(\w+)/g)||[]).sort().reverse().forEach(r=>{const a=n(r.slice(1));typeof a=="string"&&(e=e.replace(new RegExp(`\\${r}(\\W|$)`,"g"),`${a}$1`).trim())}),t.separator&&(e.endsWith(t.separator)&&(e=e.slice(0,-t.separator.length).trim()),e.startsWith(t.separator)&&(e=e.slice(t.separator.length).trim()),e=e.replace(new RegExp(`\\${t.separator}\\s*\\${t.separator}`,"g"),t.separator)),e}function V0(){return{hooks:{"tags:resolve":e=>{var r;const{tags:t}=e,n=(r=t.find(a=>a.tag==="title"))==null?void 0:r.textContent,s=t.findIndex(a=>a.tag==="templateParams"),o=s!==-1?t[s].props:{};o.pageTitle=o.pageTitle||n||"";for(const a of t)if(["titleTemplate","title"].includes(a.tag)&&typeof a.textContent=="string")a.textContent=ur(a.textContent,o);else if(a.tag==="meta"&&typeof a.props.content=="string")a.props.content=ur(a.props.content,o);else if(a.tag==="link"&&typeof a.props.href=="string")a.props.href=ur(a.props.href,o);else if(a.tag==="script"&&["application/json","application/ld+json"].includes(a.props.type)&&typeof a.innerHTML=="string")try{a.innerHTML=JSON.stringify(JSON.parse(a.innerHTML),(l,c)=>typeof c=="string"?ur(c,o):c)}catch{}e.tags=t.filter(a=>a.tag!=="templateParams")}}}}const z0=typeof window<"u";let zf;function K0(e){return zf=e}function G0(){return zf}async function Y0(e,t){const n={tag:e,props:{}};return e==="templateParams"?(n.props=t,n):["title","titleTemplate"].includes(e)?(n.textContent=t instanceof Promise?await t:t,n):typeof t=="string"?["script","noscript","style"].includes(e)?(e==="script"&&(/^(https?:)?\/\//.test(t)||t.startsWith("/"))?n.props.src=t:n.innerHTML=t,n):!1:(n.props=await Q0(e,{...t}),n.props.children&&(n.props.innerHTML=n.props.children),delete n.props.children,Object.keys(n.props).filter(s=>I0.includes(s)).forEach(s=>{(!["innerHTML","textContent"].includes(s)||Nf.includes(n.tag))&&(n[s]=n.props[s]),delete n.props[s]}),["innerHTML","textContent"].forEach(s=>{if(n.tag==="script"&&typeof n[s]=="string"&&["application/ld+json","application/json"].includes(n.props.type))try{n[s]=JSON.parse(n[s])}catch{n[s]=""}typeof n[s]=="object"&&(n[s]=JSON.stringify(n[s]))}),n.props.class&&(n.props.class=Z0(n.props.class)),n.props.content&&Array.isArray(n.props.content)?n.props.content.map(s=>({...n,props:{...n.props,content:s}})):n)}function Z0(e){return typeof e=="object"&&!Array.isArray(e)&&(e=Object.keys(e).filter(t=>e[t])),(Array.isArray(e)?e.join(" "):e).split(" ").filter(t=>t.trim()).filter(Boolean).join(" ")}async function Q0(e,t){for(const n of Object.keys(t)){const s=n.startsWith("data-");t[n]instanceof Promise&&(t[n]=await t[n]),String(t[n])==="true"?t[n]=s?"true":"":String(t[n])==="false"&&(s?t[n]="false":delete t[n])}return t}const J0=10;async function X0(e){const t=[];return Object.entries(e.resolvedInput).filter(([n,s])=>typeof s<"u"&&F0.includes(n)).forEach(([n,s])=>{const o=$0(s);t.push(...o.map(r=>Y0(n,r)).flat())}),(await Promise.all(t)).flat().filter(Boolean).map((n,s)=>(n._e=e._i,n._p=(e._i<<J0)+s,n))}function e1(){return[H0(),B0(),V0(),D0(),j0(),W0(),R0()]}function t1(e={}){return[P0({document:e==null?void 0:e.document,delayFn:e==null?void 0:e.domDelayFn})]}function n1(e={}){const t=s1({...e,plugins:[...t1(e),...(e==null?void 0:e.plugins)||[]]});return e.experimentalHashHydration&&t.resolvedOptions.document&&(t._hash=M0(t.resolvedOptions.document)),K0(t),t}function s1(e={}){let t=[],n={},s=0;const o=A0();e!=null&&e.hooks&&o.addHooks(e.hooks),e.plugins=[...e1(),...(e==null?void 0:e.plugins)||[]],e.plugins.forEach(l=>l.hooks&&o.addHooks(l.hooks)),e.document=e.document||(z0?document:void 0);const r=()=>o.callHook("entries:updated",a),a={resolvedOptions:e,headEntries(){return t},get hooks(){return o},use(l){l.hooks&&o.addHooks(l.hooks)},push(l,c){const u={_i:s++,input:l,_sde:{}};return c!=null&&c.mode&&(u._m=c==null?void 0:c.mode),c!=null&&c.transform&&(u._t=c==null?void 0:c.transform),t.push(u),r(),{dispose(){t=t.filter(d=>d._i!==u._i?!0:(n={...n,...d._sde||{}},d._sde={},r(),!1))},patch(d){t=t.map(f=>(f._i===u._i&&(u.input=f.input=d,r()),f))}}},async resolveTags(){const l={tags:[],entries:[...t]};await o.callHook("entries:resolve",l);for(const c of l.entries){const u=c._t||(d=>d);if(c.resolvedInput=u(c.resolvedInput||c.input),c.resolvedInput)for(const d of await X0(c)){const f={tag:d,entry:c,resolvedOptions:a.resolvedOptions};await o.callHook("tag:normalise",f),l.tags.push(f.tag)}}return await o.callHook("tags:resolve",l),l.tags},_popSideEffectQueue(){const l={...n};return n={},l},_elMap:{}};return a.hooks.callHook("init",a),a}function o1(e){return typeof e=="function"?e():O(e)}function Vr(e,t=""){if(e instanceof Promise)return e;const n=o1(e);return!e||!n?n:Array.isArray(n)?n.map(s=>Vr(s,t)):typeof n=="object"?Object.fromEntries(Object.entries(n).map(([s,o])=>s==="titleTemplate"||s.startsWith("on")?[s,O(o)]:[s,Vr(o,s)])):n}const r1=Hr.startsWith("3"),i1=typeof window<"u",Kf="usehead";function Tl(){return $t()&&R(Kf)||G0()}function a1(e){return{install(n){r1&&(n.config.globalProperties.$unhead=e,n.config.globalProperties.$head=e,n.provide(Kf,e))}}.install}function l1(e={}){const t=n1({...e,domDelayFn:n=>setTimeout(()=>ot(()=>n()),10),plugins:[c1(),...(e==null?void 0:e.plugins)||[]]});return t.install=a1(t),t}function c1(){return{hooks:{"entries:resolve":function(e){for(const t of e.entries)t.resolvedInput=Vr(t.input)}}}}function u1(e,t={}){const n=Tl(),s=z(!1),o=z({});xs(()=>{o.value=s.value?{}:Vr(e)});const r=n.push(o.value,t);return ye(o,l=>{r.patch(l)}),$t()&&(Ko(()=>{r.dispose()}),df(()=>{s.value=!0}),uf(()=>{s.value=!1})),r}function d1(e,t={}){return Tl().push(e,t)}function Gf(e,t={}){var s;const n=Tl();if(n){const o=i1||!!((s=n.resolvedOptions)!=null&&s.document);return t.mode==="server"&&o||t.mode==="client"&&!o?void 0:o?u1(e,t):d1(e,t)}}function f1(e,t){const n=l1(t||{}),s={unhead:n,install(o){Hr.startsWith("3")&&(o.config.globalProperties.$head=n,o.provide("usehead",n))},use(o){n.use(o)},resolveTags(){return n.resolveTags()},headEntries(){return n.headEntries()},headTags(){return n.resolveTags()},push(o,r){return n.push(o,r)},addEntry(o,r){return n.push(o,r)},addHeadObjs(o,r){return n.push(o,r)},addReactiveEntry(o,r){const a=Gf(o,r);return typeof a<"u"?a.dispose:()=>{}},removeHeadObjs(){},updateDOM(o,r){r?Hf(n,{document:o}):Vf(n,{delayFn:a=>setTimeout(()=>a(),50),document:o})},internalHooks:n.hooks,hooks:{"before:dom":[],"resolved:tags":[],"resolved:entries":[]}};return n.addHeadObjs=s.addHeadObjs,n.updateDOM=s.updateDOM,n.hooks.hook("dom:beforeRender",o=>{for(const r of s.hooks["before:dom"])r()===!1&&(o.shouldRender=!1)}),e&&s.addHeadObjs(e),s}const yo=Symbol("v-click-clicks"),ss=Symbol("v-click-clicks-elements"),wa=Symbol("v-click-clicks-order-map"),vo=Symbol("v-click-clicks-disabled"),Yf=Symbol("slidev-slide-scale"),K=Symbol("slidev-slidev-context"),p1=Symbol("slidev-route"),h1=Symbol("slidev-slide-context"),Xn="slidev-vclick-target",Ui="slidev-vclick-hidden",m1="slidev-vclick-fade",Pi="slidev-vclick-hidden-explicitly",Xs="slidev-vclick-current",dr="slidev-vclick-prior",g1=["localhost","127.0.0.1"];let y1=e=>crypto.getRandomValues(new Uint8Array(e)),v1=(e,t,n)=>{let s=(2<<Math.log(e.length-1)/Math.LN2)-1,o=-~(1.6*s*t/e.length);return(r=t)=>{let a="";for(;;){let l=n(o),c=o;for(;c--;)if(a+=e[l[c]&s]||"",a.length===r)return a}}},_1=(e,t=21)=>v1(e,t,y1),b1=(e=21)=>crypto.getRandomValues(new Uint8Array(e)).reduce((t,n)=>(n&=63,n<36?t+=n.toString(36):n<62?t+=(n-26).toString(36).toUpperCase():n>62?t+="-":t+="_",t),"");function Zf(e){return e=e??[],Array.isArray(e)?e:[e]}function xa(e,t){if(!e)return!1;const n=e.indexOf(t);return n>=0?(e.splice(n,1),!0):!1}function w1(...e){let t,n,s;e.length===1?(t=0,s=1,[n]=e):[t,n,s=1]=e;const o=[];let r=t;for(;r<n;)o.push(r),r+=s||1;return o}function x1(e){return e!=null}function k1(e,t){return Object.fromEntries(Object.entries(e).map(([n,s])=>t(n,s)).filter(x1))}const po={theme:"seriph",title:"Demystifying Unicode",titleTemplate:"%s - Slidev",addons:[],remoteAssets:!1,monaco:"dev",download:!1,export:{},info:`<h2>Unicode, Rust, quirks, and way too much detail.</h2>
`,highlighter:"shiki",lineNumbers:!0,colorSchema:"auto",routerMode:"history",aspectRatio:1.7777777777777777,canvasWidth:980,exportFilename:"",selectable:!1,themeConfig:{},fonts:{sans:['"PT Serif"',"ui-sans-serif","system-ui","-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial",'"Noto Sans"',"sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"','"Noto Color Emoji"'],serif:['"PT Serif"',"ui-serif","Georgia","Cambria",'"Times New Roman"',"Times","serif"],mono:['"PT Mono"',"ui-monospace","SFMono-Regular","Menlo","Monaco","Consolas",'"Liberation Mono"','"Courier New"',"monospace"],webfonts:["PT Serif","PT Mono"],provider:"google",local:[],italic:!0,weights:["400","700"]},favicon:"https://cdn.jsdelivr.net/gh/slidevjs/slidev/assets/favicon.png",drawings:{enabled:!0,persist:!1,presenterOnly:!1,syncAll:!0},plantUmlServer:"https://www.plantuml.com/plantuml",codeCopy:!0,record:"dev",css:"unocss",presenter:!0,htmlAttrs:{},transition:"slide-left",background:"https://source.unsplash.com/collection/94734566/1920x1080",class:"text-center",hideInToc:!0},$e=po,Pn=$e.aspectRatio??16/9,Mn=$e.canvasWidth??980,El=Math.ceil(Mn/Pn),Cl=I(()=>k1($e.themeConfig||{},(e,t)=>[`--slidev-theme-${e}`,t]));function Qf(){return Math.random().toString(36).replace(/[^a-z]+/g,"").substr(2,10)}function Dt(e,t,n){Object.defineProperty(e,t,{value:n,writable:!0,enumerable:!1})}const Ss=qe({page:0,clicks:0});let S1=[],T1=[];Dt(Ss,"$syncUp",!0);Dt(Ss,"$syncDown",!0);Dt(Ss,"$paused",!1);Dt(Ss,"$onSet",e=>S1.push(e));Dt(Ss,"$onPatch",e=>T1.push(e));Qf();Dt(Ss,"$patch",async()=>!1);function Jf(e,t,n=!1){const s=[];let o=!1,r=!1,a,l;const c=qe(t);function u(h){s.push(h)}function d(h,m){c[h]!==m&&(clearTimeout(a),o=!0,c[h]=m,a=setTimeout(()=>o=!1,0))}function f(h){o||(clearTimeout(l),r=!0,Object.entries(h).forEach(([m,_])=>{c[m]=_}),l=setTimeout(()=>r=!1,0))}function p(h){let m;n?n&&window.addEventListener("storage",k=>{k&&k.key===h&&k.newValue&&f(JSON.parse(k.newValue))}):(m=new BroadcastChannel(h),m.addEventListener("message",k=>f(k.data)));function _(){!n&&m&&!r?m.postMessage(he(c)):n&&!r&&window.localStorage.setItem(h,JSON.stringify(c)),o||s.forEach(k=>k(c))}if(ye(c,_,{deep:!0,flush:"sync"}),n){const k=window.localStorage.getItem(h);k&&f(JSON.parse(k))}}return{init:p,onPatch:u,patch:d,state:c}}const{init:E1,onPatch:C1,patch:eo,state:Mi}=Jf(Ss,{page:1,clicks:0,viewerPage:1,viewerClicks:0}),Ts=qe({});let A1=[],$1=[];Dt(Ts,"$syncUp",!0);Dt(Ts,"$syncDown",!0);Dt(Ts,"$paused",!1);Dt(Ts,"$onSet",e=>A1.push(e));Dt(Ts,"$onPatch",e=>$1.push(e));Qf();Dt(Ts,"$patch",async()=>!1);const{init:F1,onPatch:O1,patch:Xf,state:zr}=Jf(Ts,{},!1),I1="modulepreload",U1=function(e){return"/"+e},Hc={},Ln=function(t,n,s){if(!n||n.length===0)return t();const o=document.getElementsByTagName("link");return Promise.all(n.map(r=>{if(r=U1(r),r in Hc)return;Hc[r]=!0;const a=r.endsWith(".css"),l=a?'[rel="stylesheet"]':"";if(!!s)for(let d=o.length-1;d>=0;d--){const f=o[d];if(f.href===r&&(!a||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${l}`))return;const u=document.createElement("link");if(u.rel=a?"stylesheet":I1,a||(u.as="script",u.crossOrigin=""),u.href=r,document.head.appendChild(u),a)return new Promise((d,f)=>{u.addEventListener("load",d),u.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>t())};function P1(e,t){let n,s,o;const r=z(!0),a=()=>{r.value=!0,o()};ye(e,a,{flush:"sync"});const l=typeof t=="function"?t:t.get,c=typeof t=="function"?void 0:t.set,u=pl((d,f)=>(s=d,o=f,{get(){return r.value&&(n=l(),r.value=!1),s(),n},set(p){c==null||c(p)}}));return Object.isExtensible(u)&&(u.trigger=a),u}function cn(e){return il()?($d(e),!0):!1}function Ke(e){return typeof e=="function"?e():O(e)}function M1(e){if(!Fe(e))return qe(e);const t=new Proxy({},{get(n,s,o){return O(Reflect.get(e.value,s,o))},set(n,s,o){return Fe(e.value[s])&&!Fe(o)?e.value[s].value=o:e.value[s]=o,!0},deleteProperty(n,s){return Reflect.deleteProperty(e.value,s)},has(n,s){return Reflect.has(e.value,s)},ownKeys(){return Object.keys(e.value)},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}}});return qe(t)}const zt=typeof window<"u",L1=e=>typeof e<"u",B1=e=>e!=null,D1=Object.prototype.toString,ka=e=>D1.call(e)==="[object Object]",Sa=()=>+Date.now(),gs=()=>{},R1=N1();function N1(){var e;return zt&&((e=window==null?void 0:window.navigator)==null?void 0:e.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent)}function j1(e,t){function n(...s){return new Promise((o,r)=>{Promise.resolve(e(()=>t.apply(this,s),{fn:t,thisArg:this,args:s})).then(o).catch(r)})}return n}const ep=e=>e();function W1(e=ep){const t=z(!0);function n(){t.value=!1}function s(){t.value=!0}const o=(...r)=>{t.value&&e(...r)};return{isActive:qt(t),pause:n,resume:s,eventFilter:o}}function q1(e,t){var n;if(typeof e=="number")return e+t;const s=((n=e.match(/^-?[0-9]+\.?[0-9]*/))==null?void 0:n[0])||"",o=e.slice(s.length),r=Number.parseFloat(s)+t;return Number.isNaN(r)?e:r+o}function tp(...e){if(e.length!==1)return Zm(...e);const t=e[0];return typeof t=="function"?qt(pl(()=>({get:t,set:gs}))):z(t)}var H1=Object.defineProperty,V1=Object.defineProperties,z1=Object.getOwnPropertyDescriptors,Vc=Object.getOwnPropertySymbols,K1=Object.prototype.hasOwnProperty,G1=Object.prototype.propertyIsEnumerable,zc=(e,t,n)=>t in e?H1(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Y1=(e,t)=>{for(var n in t||(t={}))K1.call(t,n)&&zc(e,n,t[n]);if(Vc)for(var n of Vc(t))G1.call(t,n)&&zc(e,n,t[n]);return e},Z1=(e,t)=>V1(e,z1(t));function Q1(e){if(!Fe(e))return Km(e);const t=Array.isArray(e.value)?new Array(e.value.length):{};for(const n in e.value)t[n]=pl(()=>({get(){return e.value[n]},set(s){if(Array.isArray(e.value)){const o=[...e.value];o[n]=s,e.value=o}else{const o=Z1(Y1({},e.value),{[n]:s});Object.setPrototypeOf(o,e.value),e.value=o}}}));return t}function np(e,t=!0){$t()?Hn(e):t?e():ot(e)}function J1(e){$t()&&pi(e)}function X1(e,t=1e3,n={}){const{immediate:s=!0,immediateCallback:o=!1}=n;let r=null;const a=z(!1);function l(){r&&(clearInterval(r),r=null)}function c(){a.value=!1,l()}function u(){const d=Ke(t);d<=0||(a.value=!0,o&&e(),l(),r=setInterval(e,d))}if(s&&zt&&u(),Fe(t)||typeof t=="function"){const d=ye(t,()=>{a.value&&zt&&u()});cn(d)}return cn(c),{isActive:a,pause:c,resume:u}}function ev(e,t,n={}){const{immediate:s=!0}=n,o=z(!1);let r=null;function a(){r&&(clearTimeout(r),r=null)}function l(){o.value=!1,a()}function c(...u){a(),o.value=!0,r=setTimeout(()=>{o.value=!1,r=null,e(...u)},Ke(t))}return s&&(o.value=!0,zt&&c()),cn(l),{isPending:qt(o),start:c,stop:l}}function sp(e=!1,t={}){const{truthyValue:n=!0,falsyValue:s=!1}=t,o=Fe(e),r=z(e);function a(l){if(arguments.length)return r.value=l,r.value;{const c=Ke(n);return r.value=r.value===c?Ke(s):c,r.value}}return o?a:[r,a]}var Kc=Object.getOwnPropertySymbols,tv=Object.prototype.hasOwnProperty,nv=Object.prototype.propertyIsEnumerable,sv=(e,t)=>{var n={};for(var s in e)tv.call(e,s)&&t.indexOf(s)<0&&(n[s]=e[s]);if(e!=null&&Kc)for(var s of Kc(e))t.indexOf(s)<0&&nv.call(e,s)&&(n[s]=e[s]);return n};function ov(e,t,n={}){const s=n,{eventFilter:o=ep}=s,r=sv(s,["eventFilter"]);return ye(e,j1(o,t),r)}var rv=Object.defineProperty,iv=Object.defineProperties,av=Object.getOwnPropertyDescriptors,Kr=Object.getOwnPropertySymbols,op=Object.prototype.hasOwnProperty,rp=Object.prototype.propertyIsEnumerable,Gc=(e,t,n)=>t in e?rv(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,lv=(e,t)=>{for(var n in t||(t={}))op.call(t,n)&&Gc(e,n,t[n]);if(Kr)for(var n of Kr(t))rp.call(t,n)&&Gc(e,n,t[n]);return e},cv=(e,t)=>iv(e,av(t)),uv=(e,t)=>{var n={};for(var s in e)op.call(e,s)&&t.indexOf(s)<0&&(n[s]=e[s]);if(e!=null&&Kr)for(var s of Kr(e))t.indexOf(s)<0&&rp.call(e,s)&&(n[s]=e[s]);return n};function dv(e,t,n={}){const s=n,{eventFilter:o}=s,r=uv(s,["eventFilter"]),{eventFilter:a,pause:l,resume:c,isActive:u}=W1(o);return{stop:ov(e,t,cv(lv({},r),{eventFilter:a})),pause:l,resume:c,isActive:u}}function rt(e){var t;const n=Ke(e);return(t=n==null?void 0:n.$el)!=null?t:n}const et=zt?window:void 0,ip=zt?window.document:void 0,fv=zt?window.navigator:void 0;function we(...e){let t,n,s,o;if(typeof e[0]=="string"||Array.isArray(e[0])?([n,s,o]=e,t=et):[t,n,s,o]=e,!t)return gs;Array.isArray(n)||(n=[n]),Array.isArray(s)||(s=[s]);const r=[],a=()=>{r.forEach(d=>d()),r.length=0},l=(d,f,p,h)=>(d.addEventListener(f,p,h),()=>d.removeEventListener(f,p,h)),c=ye(()=>[rt(t),Ke(o)],([d,f])=>{a(),d&&r.push(...n.flatMap(p=>s.map(h=>l(d,p,h,f))))},{immediate:!0,flush:"post"}),u=()=>{c(),a()};return cn(u),u}let Yc=!1;function pv(e,t,n={}){const{window:s=et,ignore:o=[],capture:r=!0,detectIframe:a=!1}=n;if(!s)return;R1&&!Yc&&(Yc=!0,Array.from(s.document.body.children).forEach(p=>p.addEventListener("click",gs)));let l=!0;const c=p=>o.some(h=>{if(typeof h=="string")return Array.from(s.document.querySelectorAll(h)).some(m=>m===p.target||p.composedPath().includes(m));{const m=rt(h);return m&&(p.target===m||p.composedPath().includes(m))}}),d=[we(s,"click",p=>{const h=rt(e);if(!(!h||h===p.target||p.composedPath().includes(h))){if(p.detail===0&&(l=!c(p)),!l){l=!0;return}t(p)}},{passive:!0,capture:r}),we(s,"pointerdown",p=>{const h=rt(e);h&&(l=!p.composedPath().includes(h)&&!c(p))},{passive:!0}),a&&we(s,"blur",p=>{setTimeout(()=>{var h;const m=rt(e);((h=s.document.activeElement)==null?void 0:h.tagName)==="IFRAME"&&!(m!=null&&m.contains(s.document.activeElement))&&t(p)},0)})].filter(Boolean);return()=>d.forEach(p=>p())}function hv(e){return typeof e=="function"?e:typeof e=="string"?t=>t.key===e:Array.isArray(e)?t=>e.includes(t.key):()=>!0}function mv(...e){let t,n,s={};e.length===3?(t=e[0],n=e[1],s=e[2]):e.length===2?typeof e[1]=="object"?(t=!0,n=e[0],s=e[1]):(t=e[0],n=e[1]):(t=!0,n=e[0]);const{target:o=et,eventName:r="keydown",passive:a=!1,dedupe:l=!1}=s,c=hv(t);return we(o,r,d=>{d.repeat&&Ke(l)||c(d)&&n(d)},a)}function gv(e={}){var t;const{window:n=et}=e,s=(t=e.document)!=null?t:n==null?void 0:n.document,o=P1(()=>null,()=>s==null?void 0:s.activeElement);return n&&(we(n,"blur",r=>{r.relatedTarget===null&&o.trigger()},!0),we(n,"focus",o.trigger,!0)),o}function yv(){const e=z(!1);return $t()&&Hn(()=>{e.value=!0}),e}function Yo(e){const t=yv();return I(()=>(t.value,!!e()))}function vv(e,t={}){const{immediate:n=!0,window:s=et}=t,o=z(!1);let r=0,a=null;function l(d){if(!o.value||!s)return;const f=d-r;e({delta:f,timestamp:d}),r=d,a=s.requestAnimationFrame(l)}function c(){!o.value&&s&&(o.value=!0,a=s.requestAnimationFrame(l))}function u(){o.value=!1,a!=null&&s&&(s.cancelAnimationFrame(a),a=null)}return n&&c(),cn(u),{isActive:qt(o),pause:u,resume:c}}function os(e,t={}){const{window:n=et}=t,s=Yo(()=>n&&"matchMedia"in n&&typeof n.matchMedia=="function");let o;const r=z(!1),a=()=>{o&&("removeEventListener"in o?o.removeEventListener("change",l):o.removeListener(l))},l=()=>{s.value&&(a(),o=n.matchMedia(tp(e).value),r.value=!!(o!=null&&o.matches),o&&("addEventListener"in o?o.addEventListener("change",l):o.addListener(l)))};return xs(l),cn(()=>a()),r}const _v={sm:640,md:768,lg:1024,xl:1280,"2xl":1536};function bv(e,t={}){function n(l,c){let u=e[l];return c!=null&&(u=q1(u,c)),typeof u=="number"&&(u=`${u}px`),u}const{window:s=et}=t;function o(l){return s?s.matchMedia(l).matches:!1}const r=l=>os(`(min-width: ${n(l)})`,t),a=Object.keys(e).reduce((l,c)=>(Object.defineProperty(l,c,{get:()=>r(c),enumerable:!0,configurable:!0}),l),{});return Object.assign(a,{greater(l){return os(`(min-width: ${n(l,.1)})`,t)},greaterOrEqual:r,smaller(l){return os(`(max-width: ${n(l,-.1)})`,t)},smallerOrEqual(l){return os(`(max-width: ${n(l)})`,t)},between(l,c){return os(`(min-width: ${n(l)}) and (max-width: ${n(c,-.1)})`,t)},isGreater(l){return o(`(min-width: ${n(l,.1)})`)},isGreaterOrEqual(l){return o(`(min-width: ${n(l)})`)},isSmaller(l){return o(`(max-width: ${n(l,-.1)})`)},isSmallerOrEqual(l){return o(`(max-width: ${n(l)})`)},isInBetween(l,c){return o(`(min-width: ${n(l)}) and (max-width: ${n(c,-.1)})`)},current(){const l=Object.keys(e).map(c=>[c,r(c)]);return I(()=>l.filter(([,c])=>c.value).map(([c])=>c))}})}function wv(e={}){const{navigator:t=fv,read:n=!1,source:s,copiedDuring:o=1500,legacy:r=!1}=e,a=["copy","cut"],l=Yo(()=>t&&"clipboard"in t),c=I(()=>l.value||r),u=z(""),d=z(!1),f=ev(()=>d.value=!1,o);function p(){l.value?t.clipboard.readText().then(k=>{u.value=k}):u.value=_()}if(c.value&&n)for(const k of a)we(k,p);async function h(k=Ke(s)){c.value&&k!=null&&(l.value?await t.clipboard.writeText(k):m(k),u.value=k,d.value=!0,f.start())}function m(k){const x=document.createElement("textarea");x.value=k??"",x.style.position="absolute",x.style.opacity="0",document.body.appendChild(x),x.select(),document.execCommand("copy"),x.remove()}function _(){var k,x,S;return(S=(x=(k=document==null?void 0:document.getSelection)==null?void 0:k.call(document))==null?void 0:x.toString())!=null?S:""}return{isSupported:c,text:u,copied:d,copy:h}}function xv(e){return JSON.parse(JSON.stringify(e))}const fr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},pr="__vueuse_ssr_handlers__",kv=Sv();function Sv(){return pr in fr||(fr[pr]=fr[pr]||{}),fr[pr]}function Tv(e,t){return kv[e]||t}function Ev(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}var Cv=Object.defineProperty,Zc=Object.getOwnPropertySymbols,Av=Object.prototype.hasOwnProperty,$v=Object.prototype.propertyIsEnumerable,Qc=(e,t,n)=>t in e?Cv(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Jc=(e,t)=>{for(var n in t||(t={}))Av.call(t,n)&&Qc(e,n,t[n]);if(Zc)for(var n of Zc(t))$v.call(t,n)&&Qc(e,n,t[n]);return e};const Fv={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}},Xc="vueuse-storage";function Ov(e,t,n,s={}){var o;const{flush:r="pre",deep:a=!0,listenToStorageChanges:l=!0,writeDefaults:c=!0,mergeDefaults:u=!1,shallow:d,window:f=et,eventFilter:p,onError:h=U=>{console.error(U)}}=s,m=(d?rn:z)(t);if(!n)try{n=Tv("getDefaultStorage",()=>{var U;return(U=et)==null?void 0:U.localStorage})()}catch(U){h(U)}if(!n)return m;const _=Ke(t),k=Ev(_),x=(o=s.serializer)!=null?o:Fv[k],{pause:S,resume:b}=dv(m,()=>T(m.value),{flush:r,deep:a,eventFilter:p});return f&&l&&(we(f,"storage",L),we(f,Xc,A)),L(),m;function T(U){try{if(U==null)n.removeItem(e);else{const N=x.write(U),ne=n.getItem(e);ne!==N&&(n.setItem(e,N),f&&f.dispatchEvent(new CustomEvent(Xc,{detail:{key:e,oldValue:ne,newValue:N,storageArea:n}})))}}catch(N){h(N)}}function E(U){const N=U?U.newValue:n.getItem(e);if(N==null)return c&&_!==null&&n.setItem(e,x.write(_)),_;if(!U&&u){const ne=x.read(N);return typeof u=="function"?u(ne,_):k==="object"&&!Array.isArray(ne)?Jc(Jc({},_),ne):ne}else return typeof N!="string"?N:x.read(N)}function A(U){L(U.detail)}function L(U){if(!(U&&U.storageArea!==n)){if(U&&U.key==null){m.value=_;return}if(!(U&&U.key!==e)){S();try{m.value=E(U)}catch(N){h(N)}finally{U?ot(b):b()}}}}}function Iv(e){return os("(prefers-color-scheme: dark)",e)}var Uv=Object.defineProperty,Pv=Object.defineProperties,Mv=Object.getOwnPropertyDescriptors,eu=Object.getOwnPropertySymbols,Lv=Object.prototype.hasOwnProperty,Bv=Object.prototype.propertyIsEnumerable,tu=(e,t,n)=>t in e?Uv(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Dv=(e,t)=>{for(var n in t||(t={}))Lv.call(t,n)&&tu(e,n,t[n]);if(eu)for(var n of eu(t))Bv.call(t,n)&&tu(e,n,t[n]);return e},Rv=(e,t)=>Pv(e,Mv(t));function vO(e,t={}){var n,s;const{pointerTypes:o,preventDefault:r,stopPropagation:a,exact:l,onMove:c,onEnd:u,onStart:d,initialValue:f,axis:p="both",draggingElement:h=et,handle:m=e}=t,_=z((n=Ke(f))!=null?n:{x:0,y:0}),k=z(),x=A=>o?o.includes(A.pointerType):!0,S=A=>{Ke(r)&&A.preventDefault(),Ke(a)&&A.stopPropagation()},b=A=>{if(!x(A)||Ke(l)&&A.target!==Ke(e))return;const L=Ke(e).getBoundingClientRect(),U={x:A.clientX-L.left,y:A.clientY-L.top};(d==null?void 0:d(U,A))!==!1&&(k.value=U,S(A))},T=A=>{if(!x(A)||!k.value)return;let{x:L,y:U}=_.value;(p==="x"||p==="both")&&(L=A.clientX-k.value.x),(p==="y"||p==="both")&&(U=A.clientY-k.value.y),_.value={x:L,y:U},c==null||c(_.value,A),S(A)},E=A=>{x(A)&&k.value&&(k.value=void 0,u==null||u(_.value,A),S(A))};if(zt){const A={capture:(s=t.capture)!=null?s:!0};we(m,"pointerdown",b,A),we(h,"pointermove",T,A),we(h,"pointerup",E,A)}return Rv(Dv({},Q1(_)),{position:_,isDragging:I(()=>!!k.value),style:I(()=>`left:${_.value.x}px;top:${_.value.y}px;`)})}var nu=Object.getOwnPropertySymbols,Nv=Object.prototype.hasOwnProperty,jv=Object.prototype.propertyIsEnumerable,Wv=(e,t)=>{var n={};for(var s in e)Nv.call(e,s)&&t.indexOf(s)<0&&(n[s]=e[s]);if(e!=null&&nu)for(var s of nu(e))t.indexOf(s)<0&&jv.call(e,s)&&(n[s]=e[s]);return n};function qv(e,t,n={}){const s=n,{window:o=et}=s,r=Wv(s,["window"]);let a;const l=Yo(()=>o&&"ResizeObserver"in o),c=()=>{a&&(a.disconnect(),a=void 0)},u=I(()=>Array.isArray(e)?e.map(p=>rt(p)):[rt(e)]),d=ye(u,p=>{if(c(),l.value&&o){a=new ResizeObserver(t);for(const h of p)h&&a.observe(h,r)}},{immediate:!0,flush:"post",deep:!0}),f=()=>{c(),d()};return cn(f),{isSupported:l,stop:f}}function Hv(e,t={width:0,height:0},n={}){const{window:s=et,box:o="content-box"}=n,r=I(()=>{var c,u;return(u=(c=rt(e))==null?void 0:c.namespaceURI)==null?void 0:u.includes("svg")}),a=z(t.width),l=z(t.height);return qv(e,([c])=>{const u=o==="border-box"?c.borderBoxSize:o==="content-box"?c.contentBoxSize:c.devicePixelContentBoxSize;if(s&&r.value){const d=rt(e);if(d){const f=s.getComputedStyle(d);a.value=Number.parseFloat(f.width),l.value=Number.parseFloat(f.height)}}else if(u){const d=Array.isArray(u)?u:[u];a.value=d.reduce((f,{inlineSize:p})=>f+p,0),l.value=d.reduce((f,{blockSize:p})=>f+p,0)}else a.value=c.contentRect.width,l.value=c.contentRect.height},n),ye(()=>rt(e),c=>{a.value=c?t.width:0,l.value=c?t.height:0}),{width:a,height:l}}function Vv(e,t,n={}){const{root:s,rootMargin:o="0px",threshold:r=.1,window:a=et,immediate:l=!0}=n,c=Yo(()=>a&&"IntersectionObserver"in a),u=I(()=>{const m=Ke(e);return(Array.isArray(m)?m:[m]).map(rt).filter(B1)});let d=gs;const f=z(l),p=c.value?ye(()=>[u.value,rt(s),f.value],([m,_])=>{if(d(),!f.value||!m.length)return;const k=new IntersectionObserver(t,{root:rt(_),rootMargin:o,threshold:r});m.forEach(x=>x&&k.observe(x)),d=()=>{k.disconnect(),d=gs}},{immediate:l,flush:"post"}):gs,h=()=>{d(),p(),f.value=!1};return cn(h),{isSupported:c,isActive:f,pause(){d(),f.value=!1},resume(){f.value=!0},stop:h}}const su=["fullscreenchange","webkitfullscreenchange","webkitendfullscreen","mozfullscreenchange","MSFullscreenChange"];function zv(e,t={}){const{document:n=ip,autoExit:s=!1}=t,o=I(()=>{var x;return(x=rt(e))!=null?x:n==null?void 0:n.querySelector("html")}),r=z(!1),a=I(()=>["requestFullscreen","webkitRequestFullscreen","webkitEnterFullscreen","webkitEnterFullScreen","webkitRequestFullScreen","mozRequestFullScreen","msRequestFullscreen"].find(x=>n&&x in n||o.value&&x in o.value)),l=I(()=>["exitFullscreen","webkitExitFullscreen","webkitExitFullScreen","webkitCancelFullScreen","mozCancelFullScreen","msExitFullscreen"].find(x=>n&&x in n||o.value&&x in o.value)),c=I(()=>["fullScreen","webkitIsFullScreen","webkitDisplayingFullscreen","mozFullScreen","msFullscreenElement"].find(x=>n&&x in n||o.value&&x in o.value)),u=["fullscreenElement","webkitFullscreenElement","mozFullScreenElement","msFullscreenElement"].find(x=>n&&x in n),d=Yo(()=>o.value&&n&&a.value!==void 0&&l.value!==void 0&&c.value!==void 0),f=()=>u?(n==null?void 0:n[u])===o.value:!1,p=()=>{if(c.value){if(n&&n[c.value]!=null)return n[c.value];{const x=o.value;if((x==null?void 0:x[c.value])!=null)return!!x[c.value]}}return!1};async function h(){if(d.value){if(l.value)if((n==null?void 0:n[l.value])!=null)await n[l.value]();else{const x=o.value;(x==null?void 0:x[l.value])!=null&&await x[l.value]()}r.value=!1}}async function m(){if(!d.value)return;p()&&await h();const x=o.value;a.value&&(x==null?void 0:x[a.value])!=null&&(await x[a.value](),r.value=!0)}async function _(){await(r.value?h():m())}const k=()=>{const x=p();(!x||x&&f())&&(r.value=x)};return we(n,su,k,!1),we(()=>rt(o),su,k,!1),s&&cn(h),{isSupported:d,isFullscreen:r,enter:m,exit:h,toggle:_}}function Kt(e,t,n={}){const{window:s=et}=n;return Ov(e,t,s==null?void 0:s.localStorage,n)}const Kv={ctrl:"control",command:"meta",cmd:"meta",option:"alt",up:"arrowup",down:"arrowdown",left:"arrowleft",right:"arrowright"};function Gv(e={}){const{reactive:t=!1,target:n=et,aliasMap:s=Kv,passive:o=!0,onEventFired:r=gs}=e,a=qe(new Set),l={toJSON(){return{}},current:a},c=t?qe(l):l,u=new Set,d=new Set;function f(_,k){_ in c&&(t?c[_]=k:c[_].value=k)}function p(){a.clear();for(const _ of d)f(_,!1)}function h(_,k){var x,S;const b=(x=_.key)==null?void 0:x.toLowerCase(),E=[(S=_.code)==null?void 0:S.toLowerCase(),b].filter(Boolean);b&&(k?a.add(b):a.delete(b));for(const A of E)d.add(A),f(A,k);b==="meta"&&!k?(u.forEach(A=>{a.delete(A),f(A,!1)}),u.clear()):typeof _.getModifierState=="function"&&_.getModifierState("Meta")&&k&&[...a,...E].forEach(A=>u.add(A))}we(n,"keydown",_=>(h(_,!0),r(_)),{passive:o}),we(n,"keyup",_=>(h(_,!1),r(_)),{passive:o}),we("blur",p,{passive:!0}),we("focus",p,{passive:!0});const m=new Proxy(c,{get(_,k,x){if(typeof k!="string")return Reflect.get(_,k,x);if(k=k.toLowerCase(),k in s&&(k=s[k]),!(k in c))if(/[+_-]/.test(k)){const b=k.split(/[+_-]/g).map(T=>T.trim());c[k]=I(()=>b.every(T=>Ke(m[T])))}else c[k]=z(!1);const S=Reflect.get(_,k,x);return t?Ke(S):S}});return m}const Yv={page:e=>[e.pageX,e.pageY],client:e=>[e.clientX,e.clientY],screen:e=>[e.screenX,e.screenY],movement:e=>e instanceof Touch?null:[e.movementX,e.movementY]};function _O(e={}){const{type:t="page",touch:n=!0,resetOnTouchEnds:s=!1,initialValue:o={x:0,y:0},window:r=et,target:a=r,eventFilter:l}=e,c=z(o.x),u=z(o.y),d=z(null),f=typeof t=="function"?t:Yv[t],p=x=>{const S=f(x);S&&([c.value,u.value]=S,d.value="mouse")},h=x=>{if(x.touches.length>0){const S=f(x.touches[0]);S&&([c.value,u.value]=S,d.value="touch")}},m=()=>{c.value=o.x,u.value=o.y},_=l?x=>l(()=>p(x),{}):x=>p(x),k=l?x=>l(()=>h(x),{}):x=>h(x);return a&&(we(a,"mousemove",_,{passive:!0}),we(a,"dragover",_,{passive:!0}),n&&t!=="movement"&&(we(a,"touchstart",k,{passive:!0}),we(a,"touchmove",k,{passive:!0}),s&&we(a,"touchend",m,{passive:!0}))),{x:c,y:u,sourceType:d}}function Zv(e,t={}){const n=tp(e),{threshold:s=50,onSwipe:o,onSwipeEnd:r,onSwipeStart:a}=t,l=qe({x:0,y:0}),c=(A,L)=>{l.x=A,l.y=L},u=qe({x:0,y:0}),d=(A,L)=>{u.x=A,u.y=L},f=I(()=>l.x-u.x),p=I(()=>l.y-u.y),{max:h,abs:m}=Math,_=I(()=>h(m(f.value),m(p.value))>=s),k=z(!1),x=z(!1),S=I(()=>_.value?m(f.value)>m(p.value)?f.value>0?"left":"right":p.value>0?"up":"down":"none"),b=A=>{var L,U,N;const ne=A.buttons===0,le=A.buttons===1;return(N=(U=(L=t.pointerTypes)==null?void 0:L.includes(A.pointerType))!=null?U:ne||le)!=null?N:!0},T=[we(e,"pointerdown",A=>{var L,U;if(!b(A))return;x.value=!0,(U=(L=n.value)==null?void 0:L.style)==null||U.setProperty("touch-action","none");const N=A.target;N==null||N.setPointerCapture(A.pointerId);const{clientX:ne,clientY:le}=A;c(ne,le),d(ne,le),a==null||a(A)}),we(e,"pointermove",A=>{if(!b(A)||!x.value)return;const{clientX:L,clientY:U}=A;d(L,U),!k.value&&_.value&&(k.value=!0),k.value&&(o==null||o(A))}),we(e,"pointerup",A=>{var L,U;b(A)&&(k.value&&(r==null||r(A,S.value)),x.value=!1,k.value=!1,(U=(L=n.value)==null?void 0:L.style)==null||U.setProperty("touch-action","initial"))})],E=()=>T.forEach(A=>A());return{isSwiping:qt(k),direction:qt(S),posStart:qt(l),posEnd:qt(u),distanceX:f,distanceY:p,stop:E}}let Qv=0;function bO(e,t={}){const n=z(!1),{document:s=ip,immediate:o=!0,manual:r=!1,id:a=`vueuse_styletag_${++Qv}`}=t,l=z(e);let c=()=>{};const u=()=>{if(!s)return;const f=s.getElementById(a)||s.createElement("style");f.isConnected||(f.type="text/css",f.id=a,t.media&&(f.media=t.media),s.head.appendChild(f)),!n.value&&(c=ye(l,p=>{f.textContent=p},{immediate:!0}),n.value=!0)},d=()=>{!s||!n.value||(c(),s.head.removeChild(s.getElementById(a)),n.value=!1)};return o&&!r&&np(u),r||cn(d),{id:a,css:l,unload:d,load:u,isLoaded:qt(n)}}var Jv=Object.defineProperty,ou=Object.getOwnPropertySymbols,Xv=Object.prototype.hasOwnProperty,e_=Object.prototype.propertyIsEnumerable,ru=(e,t,n)=>t in e?Jv(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,t_=(e,t)=>{for(var n in t||(t={}))Xv.call(t,n)&&ru(e,n,t[n]);if(ou)for(var n of ou(t))e_.call(t,n)&&ru(e,n,t[n]);return e};function wO(e={}){const{controls:t=!1,offset:n=0,immediate:s=!0,interval:o="requestAnimationFrame",callback:r}=e,a=z(Sa()+n),l=()=>a.value=Sa()+n,c=r?()=>{l(),r(a.value)}:l,u=o==="requestAnimationFrame"?vv(c,{immediate:s}):X1(c,o,{immediate:s});return t?t_({timestamp:a},u):a}function en(e,t,n,s={}){var o,r,a;const{clone:l=!1,passive:c=!1,eventName:u,deep:d=!1,defaultValue:f,shouldEmit:p}=s,h=$t(),m=n||(h==null?void 0:h.emit)||((o=h==null?void 0:h.$emit)==null?void 0:o.bind(h))||((a=(r=h==null?void 0:h.proxy)==null?void 0:r.$emit)==null?void 0:a.bind(h==null?void 0:h.proxy));let _=u;t||(t="modelValue"),_=_||`update:${t.toString()}`;const k=b=>l?typeof l=="function"?l(b):xv(b):b,x=()=>L1(e[t])?k(e[t]):f,S=b=>{p?p(b)&&m(_,b):m(_,b)};if(c){const b=x(),T=z(b);return ye(()=>e[t],E=>T.value=k(E)),ye(T,E=>{(E!==e[t]||d)&&S(E)},{deep:d}),T}else return I({get(){return x()},set(b){S(b)}})}function xO({window:e=et}={}){if(!e)return z(!1);const t=z(e.document.hasFocus());return we(e,"blur",()=>{t.value=!1}),we(e,"focus",()=>{t.value=!0}),t}function n_(e={}){const{window:t=et,initialWidth:n=1/0,initialHeight:s=1/0,listenOrientation:o=!0,includeScrollbar:r=!0}=e,a=z(n),l=z(s),c=()=>{t&&(r?(a.value=t.innerWidth,l.value=t.innerHeight):(a.value=t.document.documentElement.clientWidth,l.value=t.document.documentElement.clientHeight))};if(c(),np(c),we("resize",c,{passive:!0}),o){const u=os("(orientation: portrait)");ye(u,()=>c())}return{width:a,height:l}}function s_(){return ap().__VUE_DEVTOOLS_GLOBAL_HOOK__}function ap(){return typeof navigator<"u"&&typeof window<"u"?window:typeof global<"u"?global:{}}const o_=typeof Proxy=="function",r_="devtools-plugin:setup",i_="plugin:settings:set";let Fs,Ta;function a_(){var e;return Fs!==void 0||(typeof window<"u"&&window.performance?(Fs=!0,Ta=window.performance):typeof global<"u"&&(!((e=global.perf_hooks)===null||e===void 0)&&e.performance)?(Fs=!0,Ta=global.perf_hooks.performance):Fs=!1),Fs}function l_(){return a_()?Ta.now():Date.now()}class c_{constructor(t,n){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=t,this.hook=n;const s={};if(t.settings)for(const a in t.settings){const l=t.settings[a];s[a]=l.defaultValue}const o=`__vue-devtools-plugin-settings__${t.id}`;let r=Object.assign({},s);try{const a=localStorage.getItem(o),l=JSON.parse(a);Object.assign(r,l)}catch{}this.fallbacks={getSettings(){return r},setSettings(a){try{localStorage.setItem(o,JSON.stringify(a))}catch{}r=a},now(){return l_()}},n&&n.on(i_,(a,l)=>{a===this.plugin.id&&this.fallbacks.setSettings(l)}),this.proxiedOn=new Proxy({},{get:(a,l)=>this.target?this.target.on[l]:(...c)=>{this.onQueue.push({method:l,args:c})}}),this.proxiedTarget=new Proxy({},{get:(a,l)=>this.target?this.target[l]:l==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(l)?(...c)=>(this.targetQueue.push({method:l,args:c,resolve:()=>{}}),this.fallbacks[l](...c)):(...c)=>new Promise(u=>{this.targetQueue.push({method:l,args:c,resolve:u})})})}async setRealTarget(t){this.target=t;for(const n of this.onQueue)this.target.on[n.method](...n.args);for(const n of this.targetQueue)n.resolve(await this.target[n.method](...n.args))}}function u_(e,t){const n=e,s=ap(),o=s_(),r=o_&&n.enableEarlyProxy;if(o&&(s.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!r))o.emit(r_,e,t);else{const a=r?new c_(n,o):null;(s.__VUE_DEVTOOLS_PLUGINS__=s.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:n,setupFn:t,proxy:a}),a&&t(a.proxiedTarget)}}/*!
  * vue-router v4.2.2
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const mn=typeof window<"u";function d_(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const Ie=Object.assign;function Li(e,t){const n={};for(const s in t){const o=t[s];n[s]=At(o)?o.map(e):e(o)}return n}const _o=()=>{},At=Array.isArray;function Ce(e){const t=Array.from(arguments).slice(1);console.warn.apply(console,["[Vue Router warn]: "+e].concat(t))}const f_=/\/$/,p_=e=>e.replace(f_,"");function Bi(e,t,n="/"){let s,o={},r="",a="";const l=t.indexOf("#");let c=t.indexOf("?");return l<c&&l>=0&&(c=-1),c>-1&&(s=t.slice(0,c),r=t.slice(c+1,l>-1?l:t.length),o=e(r)),l>-1&&(s=s||t.slice(0,l),a=t.slice(l,t.length)),s=g_(s??t,n),{fullPath:s+(r&&"?")+r+a,path:s,query:o,hash:a}}function h_(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function iu(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function au(e,t,n){const s=t.matched.length-1,o=n.matched.length-1;return s>-1&&s===o&&Wn(t.matched[s],n.matched[o])&&lp(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Wn(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function lp(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!m_(e[n],t[n]))return!1;return!0}function m_(e,t){return At(e)?lu(e,t):At(t)?lu(t,e):e===t}function lu(e,t){return At(t)?e.length===t.length&&e.every((n,s)=>n===t[s]):e.length===1&&e[0]===t}function g_(e,t){if(e.startsWith("/"))return e;if(!t.startsWith("/"))return Ce(`Cannot resolve a relative location without an absolute path. Trying to resolve "${e}" from "${t}". It should look like "/${t}".`),e;if(!e)return t;const n=t.split("/"),s=e.split("/"),o=s[s.length-1];(o===".."||o===".")&&s.push("");let r=n.length-1,a,l;for(a=0;a<s.length;a++)if(l=s[a],l!==".")if(l==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(a-(a===s.length?1:0)).join("/")}var Po;(function(e){e.pop="pop",e.push="push"})(Po||(Po={}));var bo;(function(e){e.back="back",e.forward="forward",e.unknown=""})(bo||(bo={}));function y_(e){if(!e)if(mn){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),p_(e)}const v_=/^[^#]+#/;function __(e,t){return e.replace(v_,"#")+t}function b_(e,t){const n=document.documentElement.getBoundingClientRect(),s=e.getBoundingClientRect();return{behavior:t.behavior,left:s.left-n.left-(t.left||0),top:s.top-n.top-(t.top||0)}}const yi=()=>({left:window.pageXOffset,top:window.pageYOffset});function w_(e){let t;if("el"in e){const n=e.el,s=typeof n=="string"&&n.startsWith("#");if(typeof e.el=="string"&&(!s||!document.getElementById(e.el.slice(1))))try{const r=document.querySelector(e.el);if(s&&r){Ce(`The selector "${e.el}" should be passed as "el: document.querySelector('${e.el}')" because it starts with "#".`);return}}catch{Ce(`The selector "${e.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`);return}const o=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!o){Ce(`Couldn't find element using selector "${e.el}" returned by scrollBehavior.`);return}t=b_(o,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function cu(e,t){return(history.state?history.state.position-t:-1)+e}const Ea=new Map;function x_(e,t){Ea.set(e,t)}function k_(e){const t=Ea.get(e);return Ea.delete(e),t}let S_=()=>location.protocol+"//"+location.host;function cp(e,t){const{pathname:n,search:s,hash:o}=t,r=e.indexOf("#");if(r>-1){let l=o.includes(e.slice(r))?e.slice(r).length:1,c=o.slice(l);return c[0]!=="/"&&(c="/"+c),iu(c,"")}return iu(n,e)+s+o}function T_(e,t,n,s){let o=[],r=[],a=null;const l=({state:p})=>{const h=cp(e,location),m=n.value,_=t.value;let k=0;if(p){if(n.value=h,t.value=p,a&&a===m){a=null;return}k=_?p.position-_.position:0}else s(h);o.forEach(x=>{x(n.value,m,{delta:k,type:Po.pop,direction:k?k>0?bo.forward:bo.back:bo.unknown})})};function c(){a=n.value}function u(p){o.push(p);const h=()=>{const m=o.indexOf(p);m>-1&&o.splice(m,1)};return r.push(h),h}function d(){const{history:p}=window;p.state&&p.replaceState(Ie({},p.state,{scroll:yi()}),"")}function f(){for(const p of r)p();r=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",d,{passive:!0}),{pauseListeners:c,listen:u,destroy:f}}function uu(e,t,n,s=!1,o=!1){return{back:e,current:t,forward:n,replaced:s,position:window.history.length,scroll:o?yi():null}}function E_(e){const{history:t,location:n}=window,s={value:cp(e,n)},o={value:t.state};o.value||r(s.value,{back:null,current:s.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function r(c,u,d){const f=e.indexOf("#"),p=f>-1?(n.host&&document.querySelector("base")?e:e.slice(f))+c:S_()+e+c;try{t[d?"replaceState":"pushState"](u,"",p),o.value=u}catch(h){Ce("Error with push/replace State",h),n[d?"replace":"assign"](p)}}function a(c,u){const d=Ie({},t.state,uu(o.value.back,c,o.value.forward,!0),u,{position:o.value.position});r(c,d,!0),s.value=c}function l(c,u){const d=Ie({},o.value,t.state,{forward:c,scroll:yi()});t.state||Ce(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://next.router.vuejs.org/guide/migration/#usage-of-history-state.`),r(d.current,d,!0);const f=Ie({},uu(s.value,c,null),{position:d.position+1},u);r(c,f,!1),s.value=c}return{location:s,state:o,push:l,replace:a}}function C_(e){e=y_(e);const t=E_(e),n=T_(e,t.state,t.location,t.replace);function s(r,a=!0){a||n.pauseListeners(),history.go(r)}const o=Ie({location:"",base:e,go:s,createHref:__.bind(null,e)},t,n);return Object.defineProperty(o,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(o,"state",{enumerable:!0,get:()=>t.state.value}),o}function A_(e){return typeof e=="string"||e&&typeof e=="object"}function up(e){return typeof e=="string"||typeof e=="symbol"}const Tn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},dp=Symbol("navigation failure");var du;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(du||(du={}));const $_={[1]({location:e,currentLocation:t}){return`No match for
 ${JSON.stringify(e)}${t?`
while being at
`+JSON.stringify(t):""}`},[2]({from:e,to:t}){return`Redirected from "${e.fullPath}" to "${O_(t)}" via a navigation guard.`},[4]({from:e,to:t}){return`Navigation aborted from "${e.fullPath}" to "${t.fullPath}" via a navigation guard.`},[8]({from:e,to:t}){return`Navigation cancelled from "${e.fullPath}" to "${t.fullPath}" with a new navigation.`},[16]({from:e,to:t}){return`Avoided redundant navigation to current location: "${e.fullPath}".`}};function Ws(e,t){return Ie(new Error($_[e](t)),{type:e,[dp]:!0},t)}function un(e,t){return e instanceof Error&&dp in e&&(t==null||!!(e.type&t))}const F_=["params","query","hash"];function O_(e){if(typeof e=="string")return e;if("path"in e)return e.path;const t={};for(const n of F_)n in e&&(t[n]=e[n]);return JSON.stringify(t,null,2)}const fu="[^/]+?",I_={sensitive:!1,strict:!1,start:!0,end:!0},U_=/[.+*?^${}()[\]/\\]/g;function P_(e,t){const n=Ie({},I_,t),s=[];let o=n.start?"^":"";const r=[];for(const u of e){const d=u.length?[]:[90];n.strict&&!u.length&&(o+="/");for(let f=0;f<u.length;f++){const p=u[f];let h=40+(n.sensitive?.25:0);if(p.type===0)f||(o+="/"),o+=p.value.replace(U_,"\\$&"),h+=40;else if(p.type===1){const{value:m,repeatable:_,optional:k,regexp:x}=p;r.push({name:m,repeatable:_,optional:k});const S=x||fu;if(S!==fu){h+=10;try{new RegExp(`(${S})`)}catch(T){throw new Error(`Invalid custom RegExp for param "${m}" (${S}): `+T.message)}}let b=_?`((?:${S})(?:/(?:${S}))*)`:`(${S})`;f||(b=k&&u.length<2?`(?:/${b})`:"/"+b),k&&(b+="?"),o+=b,h+=20,k&&(h+=-8),_&&(h+=-20),S===".*"&&(h+=-50)}d.push(h)}s.push(d)}if(n.strict&&n.end){const u=s.length-1;s[u][s[u].length-1]+=.7000000000000001}n.strict||(o+="/?"),n.end?o+="$":n.strict&&(o+="(?:/|$)");const a=new RegExp(o,n.sensitive?"":"i");function l(u){const d=u.match(a),f={};if(!d)return null;for(let p=1;p<d.length;p++){const h=d[p]||"",m=r[p-1];f[m.name]=h&&m.repeatable?h.split("/"):h}return f}function c(u){let d="",f=!1;for(const p of e){(!f||!d.endsWith("/"))&&(d+="/"),f=!1;for(const h of p)if(h.type===0)d+=h.value;else if(h.type===1){const{value:m,repeatable:_,optional:k}=h,x=m in u?u[m]:"";if(At(x)&&!_)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const S=At(x)?x.join("/"):x;if(!S)if(k)p.length<2&&(d.endsWith("/")?d=d.slice(0,-1):f=!0);else throw new Error(`Missing required param "${m}"`);d+=S}}return d||"/"}return{re:a,score:s,keys:r,parse:l,stringify:c}}function M_(e,t){let n=0;for(;n<e.length&&n<t.length;){const s=t[n]-e[n];if(s)return s;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function L_(e,t){let n=0;const s=e.score,o=t.score;for(;n<s.length&&n<o.length;){const r=M_(s[n],o[n]);if(r)return r;n++}if(Math.abs(o.length-s.length)===1){if(pu(s))return 1;if(pu(o))return-1}return o.length-s.length}function pu(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const B_={type:0,value:""},D_=/[a-zA-Z0-9_]/;function R_(e){if(!e)return[[]];if(e==="/")return[[B_]];if(!e.startsWith("/"))throw new Error(`Route paths should start with a "/": "${e}" should be "/${e}".`);function t(h){throw new Error(`ERR (${n})/"${u}": ${h}`)}let n=0,s=n;const o=[];let r;function a(){r&&o.push(r),r=[]}let l=0,c,u="",d="";function f(){u&&(n===0?r.push({type:0,value:u}):n===1||n===2||n===3?(r.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:u,regexp:d,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),u="")}function p(){u+=c}for(;l<e.length;){if(c=e[l++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(u&&f(),a()):c===":"?(f(),n=1):p();break;case 4:p(),n=s;break;case 1:c==="("?n=2:D_.test(c)?p():(f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case 2:c===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+c:n=3:d+=c;break;case 3:f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--,d="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${u}"`),f(),a(),o}function N_(e,t,n){const s=P_(R_(e.path),n);{const r=new Set;for(const a of s.keys)r.has(a.name)&&Ce(`Found duplicated params with name "${a.name}" for path "${e.path}". Only the last one will be available on "$route.params".`),r.add(a.name)}const o=Ie(s,{record:e,parent:t,children:[],alias:[]});return t&&!o.record.aliasOf==!t.record.aliasOf&&t.children.push(o),o}function j_(e,t){const n=[],s=new Map;t=gu({strict:!1,end:!0,sensitive:!1},t);function o(d){return s.get(d)}function r(d,f,p){const h=!p,m=W_(d);z_(m,f),m.aliasOf=p&&p.record;const _=gu(t,d),k=[m];if("alias"in d){const b=typeof d.alias=="string"?[d.alias]:d.alias;for(const T of b)k.push(Ie({},m,{components:p?p.record.components:m.components,path:T,aliasOf:p?p.record:m}))}let x,S;for(const b of k){const{path:T}=b;if(f&&T[0]!=="/"){const E=f.record.path,A=E[E.length-1]==="/"?"":"/";b.path=f.record.path+(T&&A+T)}if(b.path==="*")throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.`);if(x=N_(b,f,_),f&&T[0]==="/"&&K_(x,f),p?(p.alias.push(x),V_(p,x)):(S=S||x,S!==x&&S.alias.push(x),h&&d.name&&!mu(x)&&a(d.name)),m.children){const E=m.children;for(let A=0;A<E.length;A++)r(E[A],x,p&&p.children[A])}p=p||x,(x.record.components&&Object.keys(x.record.components).length||x.record.name||x.record.redirect)&&c(x)}return S?()=>{a(S)}:_o}function a(d){if(up(d)){const f=s.get(d);f&&(s.delete(d),n.splice(n.indexOf(f),1),f.children.forEach(a),f.alias.forEach(a))}else{const f=n.indexOf(d);f>-1&&(n.splice(f,1),d.record.name&&s.delete(d.record.name),d.children.forEach(a),d.alias.forEach(a))}}function l(){return n}function c(d){let f=0;for(;f<n.length&&L_(d,n[f])>=0&&(d.record.path!==n[f].record.path||!fp(d,n[f]));)f++;n.splice(f,0,d),d.record.name&&!mu(d)&&s.set(d.record.name,d)}function u(d,f){let p,h={},m,_;if("name"in d&&d.name){if(p=s.get(d.name),!p)throw Ws(1,{location:d});{const S=Object.keys(d.params||{}).filter(b=>!p.keys.find(T=>T.name===b));S.length&&Ce(`Discarded invalid param(s) "${S.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`)}_=p.record.name,h=Ie(hu(f.params,p.keys.filter(S=>!S.optional).map(S=>S.name)),d.params&&hu(d.params,p.keys.map(S=>S.name))),m=p.stringify(h)}else if("path"in d)m=d.path,m.startsWith("/")||Ce(`The Matcher cannot resolve relative paths but received "${m}". Unless you directly called \`matcher.resolve("${m}")\`, this is probably a bug in vue-router. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/router.`),p=n.find(S=>S.re.test(m)),p&&(h=p.parse(m),_=p.record.name);else{if(p=f.name?s.get(f.name):n.find(S=>S.re.test(f.path)),!p)throw Ws(1,{location:d,currentLocation:f});_=p.record.name,h=Ie({},f.params,d.params),m=p.stringify(h)}const k=[];let x=p;for(;x;)k.unshift(x.record),x=x.parent;return{name:_,path:m,params:h,matched:k,meta:H_(k)}}return e.forEach(d=>r(d)),{addRoute:r,resolve:u,removeRoute:a,getRoutes:l,getRecordMatcher:o}}function hu(e,t){const n={};for(const s of t)s in e&&(n[s]=e[s]);return n}function W_(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:q_(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function q_(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const s in e.components)t[s]=typeof n=="boolean"?n:n[s];return t}function mu(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function H_(e){return e.reduce((t,n)=>Ie(t,n.meta),{})}function gu(e,t){const n={};for(const s in e)n[s]=s in t?t[s]:e[s];return n}function Ca(e,t){return e.name===t.name&&e.optional===t.optional&&e.repeatable===t.repeatable}function V_(e,t){for(const n of e.keys)if(!n.optional&&!t.keys.find(Ca.bind(null,n)))return Ce(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);for(const n of t.keys)if(!n.optional&&!e.keys.find(Ca.bind(null,n)))return Ce(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`)}function z_(e,t){t&&t.record.name&&!e.name&&!e.path&&Ce(`The route named "${String(t.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`)}function K_(e,t){for(const n of t.keys)if(!e.keys.find(Ca.bind(null,n)))return Ce(`Absolute path "${e.record.path}" must have the exact same param named "${n.name}" as its parent "${t.record.path}".`)}function fp(e,t){return t.children.some(n=>n===e||fp(e,n))}const pp=/#/g,G_=/&/g,Y_=/\//g,Z_=/=/g,Q_=/\?/g,hp=/\+/g,J_=/%5B/g,X_=/%5D/g,mp=/%5E/g,eb=/%60/g,gp=/%7B/g,tb=/%7C/g,yp=/%7D/g,nb=/%20/g;function Al(e){return encodeURI(""+e).replace(tb,"|").replace(J_,"[").replace(X_,"]")}function sb(e){return Al(e).replace(gp,"{").replace(yp,"}").replace(mp,"^")}function Aa(e){return Al(e).replace(hp,"%2B").replace(nb,"+").replace(pp,"%23").replace(G_,"%26").replace(eb,"`").replace(gp,"{").replace(yp,"}").replace(mp,"^")}function ob(e){return Aa(e).replace(Z_,"%3D")}function rb(e){return Al(e).replace(pp,"%23").replace(Q_,"%3F")}function ib(e){return e==null?"":rb(e).replace(Y_,"%2F")}function Mo(e){try{return decodeURIComponent(""+e)}catch{Ce(`Error decoding "${e}". Using original value`)}return""+e}function ab(e){const t={};if(e===""||e==="?")return t;const s=(e[0]==="?"?e.slice(1):e).split("&");for(let o=0;o<s.length;++o){const r=s[o].replace(hp," "),a=r.indexOf("="),l=Mo(a<0?r:r.slice(0,a)),c=a<0?null:Mo(r.slice(a+1));if(l in t){let u=t[l];At(u)||(u=t[l]=[u]),u.push(c)}else t[l]=c}return t}function yu(e){let t="";for(let n in e){const s=e[n];if(n=ob(n),s==null){s!==void 0&&(t+=(t.length?"&":"")+n);continue}(At(s)?s.map(r=>r&&Aa(r)):[s&&Aa(s)]).forEach(r=>{r!==void 0&&(t+=(t.length?"&":"")+n,r!=null&&(t+="="+r))})}return t}function lb(e){const t={};for(const n in e){const s=e[n];s!==void 0&&(t[n]=At(s)?s.map(o=>o==null?null:""+o):s==null?s:""+s)}return t}const cb=Symbol("router view location matched"),vu=Symbol("router view depth"),$l=Symbol("router"),vp=Symbol("route location"),$a=Symbol("router view location");function to(){let e=[];function t(s){return e.push(s),()=>{const o=e.indexOf(s);o>-1&&e.splice(o,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function $n(e,t,n,s,o){const r=s&&(s.enterCallbacks[o]=s.enterCallbacks[o]||[]);return()=>new Promise((a,l)=>{const c=f=>{f===!1?l(Ws(4,{from:n,to:t})):f instanceof Error?l(f):A_(f)?l(Ws(2,{from:t,to:f})):(r&&s.enterCallbacks[o]===r&&typeof f=="function"&&r.push(f),a())},u=e.call(s&&s.instances[o],t,n,ub(c,t,n));let d=Promise.resolve(u);if(e.length<3&&(d=d.then(c)),e.length>2){const f=`The "next" callback was never called inside of ${e.name?'"'+e.name+'"':""}:
${e.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;if(typeof u=="object"&&"then"in u)d=d.then(p=>c._called?p:(Ce(f),Promise.reject(new Error("Invalid navigation guard"))));else if(u!==void 0&&!c._called){Ce(f),l(new Error("Invalid navigation guard"));return}}d.catch(f=>l(f))})}function ub(e,t,n){let s=0;return function(){s++===1&&Ce(`The "next" callback was called more than once in one navigation guard when going from "${n.fullPath}" to "${t.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`),e._called=!0,s===1&&e.apply(null,arguments)}}function Di(e,t,n,s){const o=[];for(const r of e){!r.components&&!r.children.length&&Ce(`Record with path "${r.path}" is either missing a "component(s)" or "children" property.`);for(const a in r.components){let l=r.components[a];{if(!l||typeof l!="object"&&typeof l!="function")throw Ce(`Component "${a}" in record with path "${r.path}" is not a valid component. Received "${String(l)}".`),new Error("Invalid route component");if("then"in l){Ce(`Component "${a}" in record with path "${r.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`);const c=l;l=()=>c}else l.__asyncLoader&&!l.__warnedDefineAsync&&(l.__warnedDefineAsync=!0,Ce(`Component "${a}" in record with path "${r.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`))}if(!(t!=="beforeRouteEnter"&&!r.instances[a]))if(db(l)){const u=(l.__vccOpts||l)[t];u&&o.push($n(u,n,s,r,a))}else{let c=l();"catch"in c||(Ce(`Component "${a}" in record with path "${r.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`),c=Promise.resolve(c)),o.push(()=>c.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${r.path}"`));const d=d_(u)?u.default:u;r.components[a]=d;const p=(d.__vccOpts||d)[t];return p&&$n(p,n,s,r,a)()}))}}}return o}function db(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function _u(e){const t=R($l),n=R(vp),s=I(()=>t.resolve(O(e.to))),o=I(()=>{const{matched:c}=s.value,{length:u}=c,d=c[u-1],f=n.matched;if(!d||!f.length)return-1;const p=f.findIndex(Wn.bind(null,d));if(p>-1)return p;const h=bu(c[u-2]);return u>1&&bu(d)===h&&f[f.length-1].path!==h?f.findIndex(Wn.bind(null,c[u-2])):p}),r=I(()=>o.value>-1&&mb(n.params,s.value.params)),a=I(()=>o.value>-1&&o.value===n.matched.length-1&&lp(n.params,s.value.params));function l(c={}){return hb(c)?t[O(e.replace)?"replace":"push"](O(e.to)).catch(_o):Promise.resolve()}if(mn){const c=$t();if(c){const u={route:s.value,isActive:r.value,isExactActive:a.value};c.__vrl_devtools=c.__vrl_devtools||[],c.__vrl_devtools.push(u),xs(()=>{u.route=s.value,u.isActive=r.value,u.isExactActive=a.value},{flush:"post"})}}return{route:s,href:I(()=>s.value.href),isActive:r,isExactActive:a,navigate:l}}const fb=ke({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:_u,setup(e,{slots:t}){const n=qe(_u(e)),{options:s}=R($l),o=I(()=>({[wu(e.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[wu(e.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=t.default&&t.default(n);return e.custom?r:Je("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},r)}}}),pb=fb;function hb(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function mb(e,t){for(const n in t){const s=t[n],o=e[n];if(typeof s=="string"){if(s!==o)return!1}else if(!At(o)||o.length!==s.length||s.some((r,a)=>r!==o[a]))return!1}return!0}function bu(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const wu=(e,t,n)=>e??t??n,gb=ke({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){vb();const s=R($a),o=I(()=>e.route||s.value),r=R(vu,0),a=I(()=>{let u=O(r);const{matched:d}=o.value;let f;for(;(f=d[u])&&!f.components;)u++;return u}),l=I(()=>o.value.matched[a.value]);Tt(vu,I(()=>a.value+1)),Tt(cb,l),Tt($a,o);const c=z();return ye(()=>[c.value,l.value,e.name],([u,d,f],[p,h,m])=>{d&&(d.instances[f]=u,h&&h!==d&&u&&u===p&&(d.leaveGuards.size||(d.leaveGuards=h.leaveGuards),d.updateGuards.size||(d.updateGuards=h.updateGuards))),u&&d&&(!h||!Wn(d,h)||!p)&&(d.enterCallbacks[f]||[]).forEach(_=>_(u))},{flush:"post"}),()=>{const u=o.value,d=e.name,f=l.value,p=f&&f.components[d];if(!p)return xu(n.default,{Component:p,route:u});const h=f.props[d],m=h?h===!0?u.params:typeof h=="function"?h(u):h:null,k=Je(p,Ie({},m,t,{onVnodeUnmounted:x=>{x.component.isUnmounted&&(f.instances[d]=null)},ref:c}));if(mn&&k.ref){const x={depth:a.value,name:f.name,path:f.path,meta:f.meta};(At(k.ref)?k.ref.map(b=>b.i):[k.ref.i]).forEach(b=>{b.__vrv_devtools=x})}return xu(n.default,{Component:k,route:u})||k}}});function xu(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const yb=gb;function vb(){const e=$t(),t=e.parent&&e.parent.type.name,n=e.parent&&e.parent.subTree&&e.parent.subTree.type;if(t&&(t==="KeepAlive"||t.includes("Transition"))&&typeof n=="object"&&n.name==="RouterView"){const s=t==="KeepAlive"?"keep-alive":"transition";Ce(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.
Use slot props instead:

<router-view v-slot="{ Component }">
  <${s}>
    <component :is="Component" />
  </${s}>
</router-view>`)}}function no(e,t){const n=Ie({},e,{matched:e.matched.map(s=>Cb(s,["instances","children","aliasOf"]))});return{_custom:{type:null,readOnly:!0,display:e.fullPath,tooltip:t,value:n}}}function hr(e){return{_custom:{display:e}}}let _b=0;function bb(e,t,n){if(t.__hasDevtools)return;t.__hasDevtools=!0;const s=_b++;u_({id:"org.vuejs.router"+(s?"."+s:""),label:"Vue Router",packageName:"vue-router",homepage:"https://router.vuejs.org",logo:"https://router.vuejs.org/logo.png",componentStateTypes:["Routing"],app:e},o=>{typeof o.now!="function"&&console.warn("[Vue Router]: You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."),o.on.inspectComponent((d,f)=>{d.instanceData&&d.instanceData.state.push({type:"Routing",key:"$route",editable:!1,value:no(t.currentRoute.value,"Current Route")})}),o.on.visitComponentTree(({treeNode:d,componentInstance:f})=>{if(f.__vrv_devtools){const p=f.__vrv_devtools;d.tags.push({label:(p.name?`${p.name.toString()}: `:"")+p.path,textColor:0,tooltip:"This component is rendered by &lt;router-view&gt;",backgroundColor:_p})}At(f.__vrl_devtools)&&(f.__devtoolsApi=o,f.__vrl_devtools.forEach(p=>{let h=xp,m="";p.isExactActive?(h=wp,m="This is exactly active"):p.isActive&&(h=bp,m="This link is active"),d.tags.push({label:p.route.path,textColor:0,tooltip:m,backgroundColor:h})}))}),ye(t.currentRoute,()=>{c(),o.notifyComponentUpdate(),o.sendInspectorTree(l),o.sendInspectorState(l)});const r="router:navigations:"+s;o.addTimelineLayer({id:r,label:`Router${s?" "+s:""} Navigations`,color:4237508}),t.onError((d,f)=>{o.addTimelineEvent({layerId:r,event:{title:"Error during Navigation",subtitle:f.fullPath,logType:"error",time:o.now(),data:{error:d},groupId:f.meta.__navigationId}})});let a=0;t.beforeEach((d,f)=>{const p={guard:hr("beforeEach"),from:no(f,"Current Location during this navigation"),to:no(d,"Target location")};Object.defineProperty(d.meta,"__navigationId",{value:a++}),o.addTimelineEvent({layerId:r,event:{time:o.now(),title:"Start of navigation",subtitle:d.fullPath,data:p,groupId:d.meta.__navigationId}})}),t.afterEach((d,f,p)=>{const h={guard:hr("afterEach")};p?(h.failure={_custom:{type:Error,readOnly:!0,display:p?p.message:"",tooltip:"Navigation Failure",value:p}},h.status=hr("❌")):h.status=hr("✅"),h.from=no(f,"Current Location during this navigation"),h.to=no(d,"Target location"),o.addTimelineEvent({layerId:r,event:{title:"End of navigation",subtitle:d.fullPath,time:o.now(),data:h,logType:p?"warning":"default",groupId:d.meta.__navigationId}})});const l="router-inspector:"+s;o.addInspector({id:l,label:"Routes"+(s?" "+s:""),icon:"book",treeFilterPlaceholder:"Search routes"});function c(){if(!u)return;const d=u;let f=n.getRoutes().filter(p=>!p.parent);f.forEach(Tp),d.filter&&(f=f.filter(p=>Fa(p,d.filter.toLowerCase()))),f.forEach(p=>Sp(p,t.currentRoute.value)),d.rootNodes=f.map(kp)}let u;o.on.getInspectorTree(d=>{u=d,d.app===e&&d.inspectorId===l&&c()}),o.on.getInspectorState(d=>{if(d.app===e&&d.inspectorId===l){const p=n.getRoutes().find(h=>h.record.__vd_id===d.nodeId);p&&(d.state={options:xb(p)})}}),o.sendInspectorTree(l),o.sendInspectorState(l)})}function wb(e){return e.optional?e.repeatable?"*":"?":e.repeatable?"+":""}function xb(e){const{record:t}=e,n=[{editable:!1,key:"path",value:t.path}];return t.name!=null&&n.push({editable:!1,key:"name",value:t.name}),n.push({editable:!1,key:"regexp",value:e.re}),e.keys.length&&n.push({editable:!1,key:"keys",value:{_custom:{type:null,readOnly:!0,display:e.keys.map(s=>`${s.name}${wb(s)}`).join(" "),tooltip:"Param keys",value:e.keys}}}),t.redirect!=null&&n.push({editable:!1,key:"redirect",value:t.redirect}),e.alias.length&&n.push({editable:!1,key:"aliases",value:e.alias.map(s=>s.record.path)}),Object.keys(e.record.meta).length&&n.push({editable:!1,key:"meta",value:e.record.meta}),n.push({key:"score",editable:!1,value:{_custom:{type:null,readOnly:!0,display:e.score.map(s=>s.join(", ")).join(" | "),tooltip:"Score used to sort routes",value:e.score}}}),n}const _p=15485081,bp=2450411,wp=8702998,kb=2282478,xp=16486972,Sb=6710886;function kp(e){const t=[],{record:n}=e;n.name!=null&&t.push({label:String(n.name),textColor:0,backgroundColor:kb}),n.aliasOf&&t.push({label:"alias",textColor:0,backgroundColor:xp}),e.__vd_match&&t.push({label:"matches",textColor:0,backgroundColor:_p}),e.__vd_exactActive&&t.push({label:"exact",textColor:0,backgroundColor:wp}),e.__vd_active&&t.push({label:"active",textColor:0,backgroundColor:bp}),n.redirect&&t.push({label:typeof n.redirect=="string"?`redirect: ${n.redirect}`:"redirects",textColor:16777215,backgroundColor:Sb});let s=n.__vd_id;return s==null&&(s=String(Tb++),n.__vd_id=s),{id:s,label:n.path,tags:t,children:e.children.map(kp)}}let Tb=0;const Eb=/^\/(.*)\/([a-z]*)$/;function Sp(e,t){const n=t.matched.length&&Wn(t.matched[t.matched.length-1],e.record);e.__vd_exactActive=e.__vd_active=n,n||(e.__vd_active=t.matched.some(s=>Wn(s,e.record))),e.children.forEach(s=>Sp(s,t))}function Tp(e){e.__vd_match=!1,e.children.forEach(Tp)}function Fa(e,t){const n=String(e.re).match(Eb);if(e.__vd_match=!1,!n||n.length<3)return!1;if(new RegExp(n[1].replace(/\$$/,""),n[2]).test(t))return e.children.forEach(a=>Fa(a,t)),e.record.path!=="/"||t==="/"?(e.__vd_match=e.re.test(t),!0):!1;const o=e.record.path.toLowerCase(),r=Mo(o);return!t.startsWith("/")&&(r.includes(t)||o.includes(t))||r.startsWith(t)||o.startsWith(t)||e.record.name&&String(e.record.name).includes(t)?!0:e.children.some(a=>Fa(a,t))}function Cb(e,t){const n={};for(const s in e)t.includes(s)||(n[s]=e[s]);return n}function Ab(e){const t=j_(e.routes,e),n=e.parseQuery||ab,s=e.stringifyQuery||yu,o=e.history;if(!o)throw new Error('Provide the "history" option when calling "createRouter()": https://next.router.vuejs.org/api/#history.');const r=to(),a=to(),l=to(),c=rn(Tn);let u=Tn;mn&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=Li.bind(null,F=>""+F),f=Li.bind(null,ib),p=Li.bind(null,Mo);function h(F,Q){let X,te;return up(F)?(X=t.getRecordMatcher(F),te=Q):te=F,t.addRoute(te,X)}function m(F){const Q=t.getRecordMatcher(F);Q?t.removeRoute(Q):Ce(`Cannot remove non-existent route "${String(F)}"`)}function _(){return t.getRoutes().map(F=>F.record)}function k(F){return!!t.getRecordMatcher(F)}function x(F,Q){if(Q=Ie({},Q||c.value),typeof F=="string"){const y=Bi(n,F,Q.path),C=t.resolve({path:y.path},Q),M=o.createHref(y.fullPath);return M.startsWith("//")?Ce(`Location "${F}" resolved to "${M}". A resolved location cannot start with multiple slashes.`):C.matched.length||Ce(`No match found for location with path "${F}"`),Ie(y,C,{params:p(C.params),hash:Mo(y.hash),redirectedFrom:void 0,href:M})}let X;if("path"in F)"params"in F&&!("name"in F)&&Object.keys(F.params).length&&Ce(`Path "${F.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`),X=Ie({},F,{path:Bi(n,F.path,Q.path).path});else{const y=Ie({},F.params);for(const C in y)y[C]==null&&delete y[C];X=Ie({},F,{params:f(y)}),Q.params=f(Q.params)}const te=t.resolve(X,Q),xe=F.hash||"";xe&&!xe.startsWith("#")&&Ce(`A \`hash\` should always start with the character "#". Replace "${xe}" with "#${xe}".`),te.params=d(p(te.params));const Me=h_(s,Ie({},F,{hash:sb(xe),path:te.path})),g=o.createHref(Me);return g.startsWith("//")?Ce(`Location "${F}" resolved to "${g}". A resolved location cannot start with multiple slashes.`):te.matched.length||Ce(`No match found for location with path "${"path"in F?F.path:F}"`),Ie({fullPath:Me,hash:xe,query:s===yu?lb(F.query):F.query||{}},te,{redirectedFrom:void 0,href:g})}function S(F){return typeof F=="string"?Bi(n,F,c.value.path):Ie({},F)}function b(F,Q){if(u!==F)return Ws(8,{from:Q,to:F})}function T(F){return L(F)}function E(F){return T(Ie(S(F),{replace:!0}))}function A(F){const Q=F.matched[F.matched.length-1];if(Q&&Q.redirect){const{redirect:X}=Q;let te=typeof X=="function"?X(F):X;if(typeof te=="string"&&(te=te.includes("?")||te.includes("#")?te=S(te):{path:te},te.params={}),!("path"in te)&&!("name"in te))throw Ce(`Invalid redirect found:
${JSON.stringify(te,null,2)}
 when navigating to "${F.fullPath}". A redirect must contain a name or path. This will break in production.`),new Error("Invalid redirect");return Ie({query:F.query,hash:F.hash,params:"path"in te?{}:F.params},te)}}function L(F,Q){const X=u=x(F),te=c.value,xe=F.state,Me=F.force,g=F.replace===!0,y=A(X);if(y)return L(Ie(S(y),{state:typeof y=="object"?Ie({},xe,y.state):xe,force:Me,replace:g}),Q||X);const C=X;C.redirectedFrom=Q;let M;return!Me&&au(s,te,X)&&(M=Ws(16,{to:C,from:te}),Ft(te,te,!0,!1)),(M?Promise.resolve(M):ne(C,te)).catch(P=>un(P)?un(P,2)?P:Ue(P):ie(P,C,te)).then(P=>{if(P){if(un(P,2))return au(s,x(P.to),C)&&Q&&(Q._count=Q._count?Q._count+1:1)>30?(Ce(`Detected a possibly infinite redirection in a navigation guard when going from "${te.fullPath}" to "${C.fullPath}". Aborting to avoid a Stack Overflow.
 Are you always returning a new location within a navigation guard? That would lead to this error. Only return when redirecting or aborting, that should fix this. This might break in production if not fixed.`),Promise.reject(new Error("Infinite redirect in navigation guard"))):L(Ie({replace:g},S(P.to),{state:typeof P.to=="object"?Ie({},xe,P.to.state):xe,force:Me}),Q||C)}else P=Z(C,te,!0,g,xe);return le(C,te,P),P})}function U(F,Q){const X=b(F,Q);return X?Promise.reject(X):Promise.resolve()}function N(F){const Q=Gt.values().next().value;return Q&&typeof Q.runWithContext=="function"?Q.runWithContext(F):F()}function ne(F,Q){let X;const[te,xe,Me]=$b(F,Q);X=Di(te.reverse(),"beforeRouteLeave",F,Q);for(const y of te)y.leaveGuards.forEach(C=>{X.push($n(C,F,Q))});const g=U.bind(null,F,Q);return X.push(g),Ot(X).then(()=>{X=[];for(const y of r.list())X.push($n(y,F,Q));return X.push(g),Ot(X)}).then(()=>{X=Di(xe,"beforeRouteUpdate",F,Q);for(const y of xe)y.updateGuards.forEach(C=>{X.push($n(C,F,Q))});return X.push(g),Ot(X)}).then(()=>{X=[];for(const y of F.matched)if(y.beforeEnter&&!Q.matched.includes(y))if(At(y.beforeEnter))for(const C of y.beforeEnter)X.push($n(C,F,Q));else X.push($n(y.beforeEnter,F,Q));return X.push(g),Ot(X)}).then(()=>(F.matched.forEach(y=>y.enterCallbacks={}),X=Di(Me,"beforeRouteEnter",F,Q),X.push(g),Ot(X))).then(()=>{X=[];for(const y of a.list())X.push($n(y,F,Q));return X.push(g),Ot(X)}).catch(y=>un(y,8)?y:Promise.reject(y))}function le(F,Q,X){for(const te of l.list())N(()=>te(F,Q,X))}function Z(F,Q,X,te,xe){const Me=b(F,Q);if(Me)return Me;const g=Q===Tn,y=mn?history.state:{};X&&(te||g?o.replace(F.fullPath,Ie({scroll:g&&y&&y.scroll},xe)):o.push(F.fullPath,xe)),c.value=F,Ft(F,Q,X,g),Ue()}let me;function ve(){me||(me=o.listen((F,Q,X)=>{if(!zn.listening)return;const te=x(F),xe=A(te);if(xe){L(Ie(xe,{replace:!0}),te).catch(_o);return}u=te;const Me=c.value;mn&&x_(cu(Me.fullPath,X.delta),yi()),ne(te,Me).catch(g=>un(g,12)?g:un(g,2)?(L(g.to,te).then(y=>{un(y,20)&&!X.delta&&X.type===Po.pop&&o.go(-1,!1)}).catch(_o),Promise.reject()):(X.delta&&o.go(-X.delta,!1),ie(g,te,Me))).then(g=>{g=g||Z(te,Me,!1),g&&(X.delta&&!un(g,8)?o.go(-X.delta,!1):X.type===Po.pop&&un(g,20)&&o.go(-1,!1)),le(te,Me,g)}).catch(_o)}))}let be=to(),Pe=to(),ee;function ie(F,Q,X){Ue(F);const te=Pe.list();return te.length?te.forEach(xe=>xe(F,Q,X)):(Ce("uncaught error during route navigation:"),console.error(F)),Promise.reject(F)}function Se(){return ee&&c.value!==Tn?Promise.resolve():new Promise((F,Q)=>{be.add([F,Q])})}function Ue(F){return ee||(ee=!F,ve(),be.list().forEach(([Q,X])=>F?X(F):Q()),be.reset()),F}function Ft(F,Q,X,te){const{scrollBehavior:xe}=e;if(!mn||!xe)return Promise.resolve();const Me=!X&&k_(cu(F.fullPath,0))||(te||!X)&&history.state&&history.state.scroll||null;return ot().then(()=>xe(F,Q,Me)).then(g=>g&&w_(g)).catch(g=>ie(g,F,Q))}const nt=F=>o.go(F);let gt;const Gt=new Set,zn={currentRoute:c,listening:!0,addRoute:h,removeRoute:m,hasRoute:k,getRoutes:_,resolve:x,options:e,push:T,replace:E,go:nt,back:()=>nt(-1),forward:()=>nt(1),beforeEach:r.add,beforeResolve:a.add,afterEach:l.add,onError:Pe.add,isReady:Se,install(F){const Q=this;F.component("RouterLink",pb),F.component("RouterView",yb),F.config.globalProperties.$router=Q,Object.defineProperty(F.config.globalProperties,"$route",{enumerable:!0,get:()=>O(c)}),mn&&!gt&&c.value===Tn&&(gt=!0,T(o.location).catch(xe=>{Ce("Unexpected error when starting the router:",xe)}));const X={};for(const xe in Tn)X[xe]=I(()=>c.value[xe]);F.provide($l,Q),F.provide(vp,qe(X)),F.provide($a,c);const te=F.unmount;Gt.add(F),F.unmount=function(){Gt.delete(F),Gt.size<1&&(u=Tn,me&&me(),me=null,c.value=Tn,gt=!1,ee=!1),te()},mn&&bb(F,Q,t)}};function Ot(F){return F.reduce((Q,X)=>Q.then(()=>N(X)),Promise.resolve())}return zn}function $b(e,t){const n=[],s=[],o=[],r=Math.max(t.matched.length,e.matched.length);for(let a=0;a<r;a++){const l=t.matched[a];l&&(e.matched.find(u=>Wn(u,l))?s.push(l):n.push(l));const c=e.matched[a];c&&(t.matched.find(u=>Wn(u,c))||o.push(c))}return[n,s,o]}const Ri=z(!1),wo=z(!1),Ps=z(!1),Fb=z(!0),Oa=bv({xs:460,..._v}),ys=n_(),Ep=Gv(),Ob=I(()=>ys.height.value-ys.width.value/Pn>180),Cp=zv(zt?document.body:null),Bn=gv(),Ib=I(()=>{var e,t;return["INPUT","TEXTAREA"].includes(((e=Bn.value)==null?void 0:e.tagName)||"")||((t=Bn.value)==null?void 0:t.classList.contains("CodeMirror-code"))}),Ub=I(()=>{var e;return["BUTTON","A"].includes(((e=Bn.value)==null?void 0:e.tagName)||"")});Kt("slidev-camera","default");Kt("slidev-mic","default");const Sr=Kt("slidev-scale",0),dt=Kt("slidev-show-overview",!1),Ni=Kt("slidev-presenter-cursor",!0),ku=Kt("slidev-show-editor",!1);Kt("slidev-editor-width",zt?window.innerWidth*.4:100);const Ap=sp(dt);function Su(e,t,n,s=o=>o){return e*s(.5-t*(.5-n))}function Pb(e){return[-e[0],-e[1]]}function jt(e,t){return[e[0]+t[0],e[1]+t[1]]}function Pt(e,t){return[e[0]-t[0],e[1]-t[1]]}function Nt(e,t){return[e[0]*t,e[1]*t]}function Mb(e,t){return[e[0]/t,e[1]/t]}function so(e){return[e[1],-e[0]]}function Tu(e,t){return e[0]*t[0]+e[1]*t[1]}function Lb(e,t){return e[0]===t[0]&&e[1]===t[1]}function Bb(e){return Math.hypot(e[0],e[1])}function Db(e){return e[0]*e[0]+e[1]*e[1]}function Eu(e,t){return Db(Pt(e,t))}function $p(e){return Mb(e,Bb(e))}function Rb(e,t){return Math.hypot(e[1]-t[1],e[0]-t[0])}function oo(e,t,n){let s=Math.sin(n),o=Math.cos(n),r=e[0]-t[0],a=e[1]-t[1],l=r*o-a*s,c=r*s+a*o;return[l+t[0],c+t[1]]}function Ia(e,t,n){return jt(e,Nt(Pt(t,e),n))}function Cu(e,t,n){return jt(e,Nt(t,n))}var{min:Os,PI:Nb}=Math,Au=.275,ro=Nb+1e-4;function jb(e,t={}){let{size:n=16,smoothing:s=.5,thinning:o=.5,simulatePressure:r=!0,easing:a=ee=>ee,start:l={},end:c={},last:u=!1}=t,{cap:d=!0,easing:f=ee=>ee*(2-ee)}=l,{cap:p=!0,easing:h=ee=>--ee*ee*ee+1}=c;if(e.length===0||n<=0)return[];let m=e[e.length-1].runningLength,_=l.taper===!1?0:l.taper===!0?Math.max(n,m):l.taper,k=c.taper===!1?0:c.taper===!0?Math.max(n,m):c.taper,x=Math.pow(n*s,2),S=[],b=[],T=e.slice(0,10).reduce((ee,ie)=>{let Se=ie.pressure;if(r){let Ue=Os(1,ie.distance/n),Ft=Os(1,1-Ue);Se=Os(1,ee+(Ft-ee)*(Ue*Au))}return(ee+Se)/2},e[0].pressure),E=Su(n,o,e[e.length-1].pressure,a),A,L=e[0].vector,U=e[0].point,N=U,ne=U,le=N,Z=!1;for(let ee=0;ee<e.length;ee++){let{pressure:ie}=e[ee],{point:Se,vector:Ue,distance:Ft,runningLength:nt}=e[ee];if(ee<e.length-1&&m-nt<3)continue;if(o){if(r){let te=Os(1,Ft/n),xe=Os(1,1-te);ie=Os(1,T+(xe-T)*(te*Au))}E=Su(n,o,ie,a)}else E=n/2;A===void 0&&(A=E);let gt=nt<_?f(nt/_):1,Gt=m-nt<k?h((m-nt)/k):1;E=Math.max(.01,E*Math.min(gt,Gt));let zn=(ee<e.length-1?e[ee+1]:e[ee]).vector,Ot=ee<e.length-1?Tu(Ue,zn):1,F=Tu(Ue,L)<0&&!Z,Q=Ot!==null&&Ot<0;if(F||Q){let te=Nt(so(L),E);for(let xe=1/13,Me=0;Me<=1;Me+=xe)ne=oo(Pt(Se,te),Se,ro*Me),S.push(ne),le=oo(jt(Se,te),Se,ro*-Me),b.push(le);U=ne,N=le,Q&&(Z=!0);continue}if(Z=!1,ee===e.length-1){let te=Nt(so(Ue),E);S.push(Pt(Se,te)),b.push(jt(Se,te));continue}let X=Nt(so(Ia(zn,Ue,Ot)),E);ne=Pt(Se,X),(ee<=1||Eu(U,ne)>x)&&(S.push(ne),U=ne),le=jt(Se,X),(ee<=1||Eu(N,le)>x)&&(b.push(le),N=le),T=ie,L=Ue}let me=e[0].point.slice(0,2),ve=e.length>1?e[e.length-1].point.slice(0,2):jt(e[0].point,[1,1]),be=[],Pe=[];if(e.length===1){if(!(_||k)||u){let ee=Cu(me,$p(so(Pt(me,ve))),-(A||E)),ie=[];for(let Se=1/13,Ue=Se;Ue<=1;Ue+=Se)ie.push(oo(ee,me,ro*2*Ue));return ie}}else{if(!(_||k&&e.length===1))if(d)for(let ie=1/13,Se=ie;Se<=1;Se+=ie){let Ue=oo(b[0],me,ro*Se);be.push(Ue)}else{let ie=Pt(S[0],b[0]),Se=Nt(ie,.5),Ue=Nt(ie,.51);be.push(Pt(me,Se),Pt(me,Ue),jt(me,Ue),jt(me,Se))}let ee=so(Pb(e[e.length-1].vector));if(k||_&&e.length===1)Pe.push(ve);else if(p){let ie=Cu(ve,ee,E);for(let Se=1/29,Ue=Se;Ue<1;Ue+=Se)Pe.push(oo(ie,ve,ro*3*Ue))}else Pe.push(jt(ve,Nt(ee,E)),jt(ve,Nt(ee,E*.99)),Pt(ve,Nt(ee,E*.99)),Pt(ve,Nt(ee,E)))}return S.concat(Pe,b.reverse(),be)}function Wb(e,t={}){var n;let{streamline:s=.5,size:o=16,last:r=!1}=t;if(e.length===0)return[];let a=.15+(1-s)*.85,l=Array.isArray(e[0])?e:e.map(({x:h,y:m,pressure:_=.5})=>[h,m,_]);if(l.length===2){let h=l[1];l=l.slice(0,-1);for(let m=1;m<5;m++)l.push(Ia(l[0],h,m/4))}l.length===1&&(l=[...l,[...jt(l[0],[1,1]),...l[0].slice(2)]]);let c=[{point:[l[0][0],l[0][1]],pressure:l[0][2]>=0?l[0][2]:.25,vector:[1,1],distance:0,runningLength:0}],u=!1,d=0,f=c[0],p=l.length-1;for(let h=1;h<l.length;h++){let m=r&&h===p?l[h].slice(0,2):Ia(f.point,l[h],a);if(Lb(f.point,m))continue;let _=Rb(m,f.point);if(d+=_,h<p&&!u){if(d<o)continue;u=!0}f={point:m,pressure:l[h][2]>=0?l[h][2]:.5,vector:$p(Pt(f.point,m)),distance:_,runningLength:d},c.push(f)}return c[0].vector=((n=c[1])==null?void 0:n.vector)||[0,0],c}function qb(e,t={}){return jb(Wb(e,t),t)}var Hb=()=>({events:{},emit(e,...t){let n=this.events[e]||[];for(let s=0,o=n.length;s<o;s++)n[s](...t)},on(e,t){var n;return(n=this.events[e])!=null&&n.push(t)||(this.events[e]=[t]),()=>{var s;this.events[e]=(s=this.events[e])==null?void 0:s.filter(o=>t!==o)}}});function Gr(e,t){return e-t}function Vb(e){return e<0?-1:1}function Yr(e){return[Math.abs(e),Vb(e)]}function Fp(){const e=()=>((1+Math.random())*65536|0).toString(16).substring(1);return`${e()+e()}-${e()}-${e()}-${e()}-${e()}${e()}${e()}`}var zb=2,gn=zb,Hs=class{constructor(e){this.drauu=e,this.event=void 0,this.point=void 0,this.start=void 0,this.el=null}onSelected(e){}onUnselected(){}onStart(e){}onMove(e){return!1}onEnd(e){}get brush(){return this.drauu.brush}get shiftPressed(){return this.drauu.shiftPressed}get altPressed(){return this.drauu.altPressed}get svgElement(){return this.drauu.el}getMousePosition(e){var t;const n=this.drauu.el,s=this.drauu.options.coordinateScale??1;if(this.drauu.options.coordinateTransform===!1){const o=this.drauu.el.getBoundingClientRect();return{x:(e.pageX-o.left)*s,y:(e.pageY-o.top)*s,pressure:e.pressure}}else{const o=this.drauu.svgPoint;o.x=e.clientX,o.y=e.clientY;const r=o.matrixTransform((t=n.getScreenCTM())==null?void 0:t.inverse());return{x:r.x*s,y:r.y*s,pressure:e.pressure}}}createElement(e,t){const n=document.createElementNS("http://www.w3.org/2000/svg",e),s=t?{...this.brush,...t}:this.brush;return n.setAttribute("fill",s.fill??"transparent"),n.setAttribute("stroke",s.color),n.setAttribute("stroke-width",s.size.toString()),n.setAttribute("stroke-linecap","round"),s.dasharray&&n.setAttribute("stroke-dasharray",s.dasharray),n}attr(e,t){this.el.setAttribute(e,typeof t=="string"?t:t.toFixed(gn))}_setEvent(e){this.event=e,this.point=this.getMousePosition(e)}_eventDown(e){return this._setEvent(e),this.start=this.point,this.onStart(this.point)}_eventMove(e){return this._setEvent(e),this.onMove(this.point)}_eventUp(e){return this._setEvent(e),this.onEnd(this.point)}},Kb=class extends Hs{constructor(){super(...arguments),this.points=[]}onStart(e){return this.el=document.createElementNS("http://www.w3.org/2000/svg","path"),this.points=[e],this.attr("fill",this.brush.color),this.attr("d",this.getSvgData(this.points)),this.el}onMove(e){return this.el||this.onStart(e),this.points[this.points.length-1]!==e&&this.points.push(e),this.attr("d",this.getSvgData(this.points)),!0}onEnd(){const e=this.el;return this.el=null,!!e}getSvgData(e){const t=qb(e,{size:this.brush.size*2,thinning:.9,simulatePressure:!1,start:{taper:5},end:{taper:5},...this.brush.stylusOptions});if(!t.length)return"";const n=t.reduce((s,[o,r],a,l)=>{const[c,u]=l[(a+1)%l.length];return s.push(o,r,(o+c)/2,(r+u)/2),s},["M",...t[0],"Q"]);return n.push("Z"),n.map(s=>typeof s=="number"?s.toFixed(2):s).join(" ")}},Gb=class extends Hs{onStart(e){return this.el=this.createElement("ellipse"),this.attr("cx",e.x),this.attr("cy",e.y),this.el}onMove(e){if(!this.el||!this.start)return!1;let[t,n]=Yr(e.x-this.start.x),[s,o]=Yr(e.y-this.start.y);if(this.shiftPressed){const r=Math.min(t,s);t=r,s=r}if(this.altPressed)this.attr("cx",this.start.x),this.attr("cy",this.start.y),this.attr("rx",t),this.attr("ry",s);else{const[r,a]=[this.start.x,this.start.x+t*n].sort(Gr),[l,c]=[this.start.y,this.start.y+s*o].sort(Gr);this.attr("cx",(r+a)/2),this.attr("cy",(l+c)/2),this.attr("rx",(a-r)/2),this.attr("ry",(c-l)/2)}return!0}onEnd(){const e=this.el;return this.el=null,!(!e||!e.getTotalLength())}};function Op(e,t){const n=document.createElementNS("http://www.w3.org/2000/svg","defs"),s=document.createElementNS("http://www.w3.org/2000/svg","marker"),o=document.createElementNS("http://www.w3.org/2000/svg","path");return o.setAttribute("fill",t),s.setAttribute("id",e),s.setAttribute("viewBox","0 -5 10 10"),s.setAttribute("refX","5"),s.setAttribute("refY","0"),s.setAttribute("markerWidth","4"),s.setAttribute("markerHeight","4"),s.setAttribute("orient","auto"),o.setAttribute("d","M0,-5L10,0L0,5"),s.appendChild(o),n.appendChild(s),n}var Yb=class extends Hs{onStart(e){if(this.el=this.createElement("line",{fill:"transparent"}),this.attr("x1",e.x),this.attr("y1",e.y),this.attr("x2",e.x),this.attr("y2",e.y),this.brush.arrowEnd){const t=Fp(),n=document.createElementNS("http://www.w3.org/2000/svg","g");return n.append(Op(t,this.brush.color)),n.append(this.el),this.attr("marker-end",`url(#${t})`),n}return this.el}onMove(e){if(!this.el)return!1;let{x:t,y:n}=e;if(this.shiftPressed){const s=e.x-this.start.x,o=e.y-this.start.y;if(o!==0){let r=s/o;r=Math.round(r),Math.abs(r)<=1?(t=this.start.x+o*r,n=this.start.y+o):(t=this.start.x+s,n=this.start.y)}}return this.altPressed?(this.attr("x1",this.start.x*2-t),this.attr("y1",this.start.y*2-n),this.attr("x2",t),this.attr("y2",n)):(this.attr("x1",this.start.x),this.attr("y1",this.start.y),this.attr("x2",t),this.attr("y2",n)),!0}onEnd(){const e=this.el;return this.el=null,!(!e||e.getTotalLength()<5)}},Zb=class extends Hs{onStart(e){return this.el=this.createElement("rect"),this.brush.cornerRadius&&(this.attr("rx",this.brush.cornerRadius),this.attr("ry",this.brush.cornerRadius)),this.attr("x",e.x),this.attr("y",e.y),this.el}onMove(e){if(!this.el||!this.start)return!1;let[t,n]=Yr(e.x-this.start.x),[s,o]=Yr(e.y-this.start.y);if(this.shiftPressed){const r=Math.min(t,s);t=r,s=r}if(this.altPressed)this.attr("x",this.start.x-t),this.attr("y",this.start.y-s),this.attr("width",t*2),this.attr("height",s*2);else{const[r,a]=[this.start.x,this.start.x+t*n].sort(Gr),[l,c]=[this.start.y,this.start.y+s*o].sort(Gr);this.attr("x",r),this.attr("y",l),this.attr("width",a-r),this.attr("height",c-l)}return!0}onEnd(){const e=this.el;return this.el=null,!(!e||!e.getTotalLength())}};function Qb(e,t){const n=e.x-t.x,s=e.y-t.y;return n*n+s*s}function Jb(e,t,n){let s=t.x,o=t.y,r=n.x-s,a=n.y-o;if(r!==0||a!==0){const l=((e.x-s)*r+(e.y-o)*a)/(r*r+a*a);l>1?(s=n.x,o=n.y):l>0&&(s+=r*l,o+=a*l)}return r=e.x-s,a=e.y-o,r*r+a*a}function Xb(e,t){let n=e[0];const s=[n];let o;for(let r=1,a=e.length;r<a;r++)o=e[r],Qb(o,n)>t&&(s.push(o),n=o);return n!==o&&o&&s.push(o),s}function Ua(e,t,n,s,o){let r=s,a=0;for(let l=t+1;l<n;l++){const c=Jb(e[l],e[t],e[n]);c>r&&(a=l,r=c)}r>s&&(a-t>1&&Ua(e,t,a,s,o),o.push(e[a]),n-a>1&&Ua(e,a,n,s,o))}function ew(e,t){const n=e.length-1,s=[e[0]];return Ua(e,0,n,t,s),s.push(e[n]),s}function $u(e,t,n=!1){if(e.length<=2)return e;const s=t!==void 0?t*t:1;return e=n?e:Xb(e,s),e=ew(e,s),e}var tw=class extends Hs{constructor(){super(...arguments),this.points=[],this.count=0}onStart(e){if(this.el=this.createElement("path",{fill:"transparent"}),this.points=[e],this.brush.arrowEnd){this.arrowId=Fp();const t=Op(this.arrowId,this.brush.color);this.el.appendChild(t)}return this.el}onMove(e){return this.el||this.onStart(e),this.points[this.points.length-1]!==e&&(this.points.push(e),this.count+=1),this.count>5&&(this.points=$u(this.points,1,!0),this.count=0),this.attr("d",Ou(this.points)),!0}onEnd(){const e=this.el;return this.el=null,!(!e||(e.setAttribute("d",Ou($u(this.points,1,!0))),!e.getTotalLength()))}};function nw(e,t){const n=t.x-e.x,s=t.y-e.y;return{length:Math.sqrt(n**2+s**2),angle:Math.atan2(s,n)}}function Fu(e,t,n,s){const o=t||e,r=n||e,a=.2,l=nw(o,r),c=l.angle+(s?Math.PI:0),u=l.length*a,d=e.x+Math.cos(c)*u,f=e.y+Math.sin(c)*u;return{x:d,y:f}}function sw(e,t,n){const s=Fu(n[t-1],n[t-2],e),o=Fu(e,n[t-1],n[t+1],!0);return`C ${s.x.toFixed(gn)},${s.y.toFixed(gn)} ${o.x.toFixed(gn)},${o.y.toFixed(gn)} ${e.x.toFixed(gn)},${e.y.toFixed(gn)}`}function Ou(e){return e.reduce((t,n,s,o)=>s===0?`M ${n.x.toFixed(gn)},${n.y.toFixed(gn)}`:`${t} ${sw(n,s,o)}`,"")}var ow=class extends Hs{constructor(){super(...arguments),this.pathSubFactor=20,this.pathFragments=[]}onSelected(e){const t=(n,s)=>{if(n&&n.length)for(let o=0;o<n.length;o++){const r=n[o];if(r.getTotalLength){const a=r.getTotalLength();for(let l=0;l<this.pathSubFactor;l++){const c=r.getPointAtLength(a*l/this.pathSubFactor),u=r.getPointAtLength(a*(l+1)/this.pathSubFactor);this.pathFragments.push({x1:c.x,x2:u.x,y1:c.y,y2:u.y,segment:l,element:s||r})}}else r.children&&t(r.children,r)}};e&&t(e.children)}onUnselected(){this.pathFragments=[]}onStart(e){this.svgPointPrevious=this.svgElement.createSVGPoint(),this.svgPointPrevious.x=e.x,this.svgPointPrevious.y=e.y}onMove(e){this.svgPointCurrent=this.svgElement.createSVGPoint(),this.svgPointCurrent.x=e.x,this.svgPointCurrent.y=e.y;const t=this.checkAndEraseElement();return this.svgPointPrevious=this.svgPointCurrent,t}onEnd(){return this.svgPointPrevious=void 0,this.svgPointCurrent=void 0,!0}checkAndEraseElement(){const e=[];if(this.pathFragments.length)for(let t=0;t<this.pathFragments.length;t++){const n=this.pathFragments[t],s={x1:this.svgPointPrevious.x,x2:this.svgPointCurrent.x,y1:this.svgPointPrevious.y,y2:this.svgPointCurrent.y};this.lineLineIntersect(n,s)&&(n.element.remove(),e.push(t))}return e.length&&(this.pathFragments=this.pathFragments.filter((t,n)=>!e.includes(n))),e.length>0}lineLineIntersect(e,t){const n=e.x1,s=e.x2,o=t.x1,r=t.x2,a=e.y1,l=e.y2,c=t.y1,u=t.y2,d=(n-s)*(c-u)-(a-l)*(o-r),f=(n*l-a*s)*(o-r)-(n-s)*(o*u-c*r),p=(n*l-a*s)*(c-u)-(a-l)*(o*u-c*r),h=(m,_,k)=>m>=_&&m<=k?!0:m>=k&&m<=_;if(d===0)return!1;{const m={x:f/d,y:p/d};return h(m.x,n,s)&&h(m.y,a,l)&&h(m.x,o,r)&&h(m.y,c,u)}}};function rw(e){return{draw:new tw(e),stylus:new Kb(e),line:new Yb(e),rectangle:new Zb(e),ellipse:new Gb(e),eraseLine:new ow(e)}}var iw=class{constructor(e={}){this.options=e,this.el=null,this.svgPoint=null,this.eventEl=null,this.shiftPressed=!1,this.altPressed=!1,this.drawing=!1,this._emitter=Hb(),this._models=rw(this),this._undoStack=[],this._disposables=[],this.options.brush||(this.options.brush={color:"black",size:3,mode:"stylus"}),e.el&&this.mount(e.el,e.eventTarget)}get model(){return this._models[this.mode]}get mounted(){return!!this.el}get mode(){return this.options.brush.mode||"stylus"}set mode(e){this._models[this.mode].onUnselected(),this.options.brush.mode=e,this.model.onSelected(this.el)}get brush(){return this.options.brush}set brush(e){this.options.brush=e}resolveSelector(e){return typeof e=="string"?document.querySelector(e):e||null}mount(e,t){if(this.el)throw new Error("[drauu] already mounted, unmount previous target first");if(this.el=this.resolveSelector(e),!this.el)throw new Error("[drauu] target element not found");if(this.el.tagName.toLocaleLowerCase()!=="svg")throw new Error("[drauu] can only mount to a SVG element");if(!this.el.createSVGPoint)throw new Error("[drauu] SVG element must be create by document.createElementNS('http://www.w3.org/2000/svg', 'svg')");this.svgPoint=this.el.createSVGPoint();const n=this.resolveSelector(t)||this.el,s=this.eventStart.bind(this),o=this.eventMove.bind(this),r=this.eventEnd.bind(this),a=this.eventKeyboard.bind(this);n.addEventListener("pointerdown",s,{passive:!1}),window.addEventListener("pointermove",o,{passive:!1}),window.addEventListener("pointerup",r,{passive:!1}),window.addEventListener("pointercancel",r,{passive:!1}),window.addEventListener("keydown",a,!1),window.addEventListener("keyup",a,!1),this._disposables.push(()=>{n.removeEventListener("pointerdown",s),window.removeEventListener("pointermove",o),window.removeEventListener("pointerup",r),window.removeEventListener("pointercancel",r),window.removeEventListener("keydown",a,!1),window.removeEventListener("keyup",a,!1)}),this._emitter.emit("mounted")}unmount(){this._disposables.forEach(e=>e()),this._disposables.length=0,this.el=null,this._emitter.emit("unmounted")}on(e,t){return this._emitter.on(e,t)}undo(){const e=this.el;return e.lastElementChild?(this._undoStack.push(e.lastElementChild.cloneNode(!0)),e.lastElementChild.remove(),this._emitter.emit("changed"),!0):!1}redo(){return this._undoStack.length?(this.el.appendChild(this._undoStack.pop()),this._emitter.emit("changed"),!0):!1}canRedo(){return!!this._undoStack.length}canUndo(){var e;return!!((e=this.el)!=null&&e.lastElementChild)}eventMove(e){!this.acceptsInput(e)||!this.drawing||this.model._eventMove(e)&&(e.stopPropagation(),e.preventDefault(),this._emitter.emit("changed"))}eventStart(e){this.acceptsInput(e)&&(e.stopPropagation(),e.preventDefault(),this._currentNode&&this.cancel(),this.drawing=!0,this._emitter.emit("start"),this._currentNode=this.model._eventDown(e),this._currentNode&&this.mode!=="eraseLine"&&this.el.appendChild(this._currentNode),this._emitter.emit("changed"))}eventEnd(e){if(!this.acceptsInput(e)||!this.drawing)return;const t=this.model._eventUp(e);t?(t instanceof Element&&t!==this._currentNode&&(this._currentNode=t),this.commit()):this.cancel(),this.drawing=!1,this._emitter.emit("end"),this._emitter.emit("changed")}acceptsInput(e){return!this.options.acceptsInputTypes||this.options.acceptsInputTypes.includes(e.pointerType)}eventKeyboard(e){this.shiftPressed===e.shiftKey&&this.altPressed===e.altKey||(this.shiftPressed=e.shiftKey,this.altPressed=e.altKey,this.model.point&&this.model.onMove(this.model.point)&&this._emitter.emit("changed"))}commit(){this._undoStack.length=0;const e=this._currentNode;this._currentNode=void 0,this._emitter.emit("committed",e)}clear(){this._undoStack.length=0,this.cancel(),this.el.innerHTML="",this._emitter.emit("changed")}cancel(){this._currentNode&&(this.el.removeChild(this._currentNode),this._currentNode=void 0,this._emitter.emit("canceled"))}dump(){return this.el.innerHTML}load(e){this.clear(),this.el.innerHTML=e}};function aw(e){return new iw(e)}const Pa=["#ff595e","#ffca3a","#8ac926","#1982c4","#6a4c93","#ffffff","#000000"],tn=Kt("slidev-drawing-enabled",!1),kO=Kt("slidev-drawing-pinned",!1),lw=z(!1),cw=z(!1),uw=z(!1),Lo=z(!1),ls=M1(Kt("slidev-drawing-brush",{color:Pa[0],size:4,mode:"stylus"})),Iu=z("stylus"),Ip=I(()=>$e.drawings.syncAll||vt.value);let Bo=!1;const io=I({get(){return Iu.value},set(e){Iu.value=e,e==="arrow"?(ls.mode="line",ls.arrowEnd=!0):(ls.mode=e,ls.arrowEnd=!1)}}),dw=qe({brush:ls,acceptsInputTypes:I(()=>tn.value&&(!$e.drawings.presenterOnly||vt.value)?void 0:["pen"]),coordinateTransform:!1}),ht=ii(aw(dw));function fw(){ht.clear(),Ip.value&&Xf(He.value,"")}function Fl(){var e;cw.value=ht.canRedo(),lw.value=ht.canUndo(),uw.value=!!((e=ht.el)!=null&&e.children.length)}function pw(e){Bo=!0;const t=zr[e||He.value];t!=null?ht.load(t):ht.clear(),Fl(),Bo=!1}ht.on("changed",()=>{if(Fl(),!Bo){const e=ht.dump(),t=He.value;(zr[t]||"")!==e&&Ip.value&&Xf(t,ht.dump())}});O1(e=>{Bo=!0,e[He.value]!=null&&ht.load(e[He.value]||""),Bo=!1,Fl()});ot(()=>{ye(He,()=>{ht.mounted&&pw()},{immediate:!0})});ht.on("start",()=>Lo.value=!0);ht.on("end",()=>Lo.value=!1);window.addEventListener("keydown",e=>{if(!tn.value)return;const t=!e.ctrlKey&&!e.altKey&&!e.shiftKey&&!e.metaKey;let n=!0;e.code==="KeyZ"&&(e.ctrlKey||e.metaKey)?e.shiftKey?ht.redo():ht.undo():e.code==="Escape"?tn.value=!1:e.code==="KeyL"&&t?io.value="line":e.code==="KeyA"&&t?io.value="arrow":e.code==="KeyS"&&t?io.value="stylus":e.code==="KeyR"&&t?io.value="rectangle":e.code==="KeyE"&&t?io.value="ellipse":e.code==="KeyC"&&t?fw():e.code.startsWith("Digit")&&t&&+e.code[5]<=Pa.length?ls.color=Pa[+e.code[5]-1]:n=!1,n&&(e.preventDefault(),e.stopPropagation())},!1);function Ye(...e){return I(()=>e.every(t=>Ke(t)))}function kt(e){return I(()=>!Ke(e))}const Uu=Iv(),ji=Kt("slidev-color-schema","auto"),Ma=I(()=>$e.colorSchema!=="auto"),Ol=I({get(){return Ma.value?$e.colorSchema==="dark":ji.value==="auto"?Uu.value:ji.value==="dark"},set(e){Ma.value||(ji.value=e===Uu.value?"auto":e?"dark":"light")}}),Up=sp(Ol);zt&&ye(Ol,e=>{const t=document.querySelector("html");t.classList.toggle("dark",e),t.classList.toggle("light",!e)},{immediate:!0});const Tr=z(1),Er=I(()=>Ge.length),Ct=z(0),Il=z(0);function hw(){Ct.value>Tr.value&&(Ct.value-=1)}function mw(){Ct.value<Er.value&&(Ct.value+=1)}function gw(){if(Ct.value>Tr.value){let e=Ct.value-Il.value;e<Tr.value&&(e=Tr.value),Ct.value=e}}function yw(){if(Ct.value<Er.value){let e=Ct.value+Il.value;e>Er.value&&(e=Er.value),Ct.value=e}}function vw(){const{escape:e,space:t,shift:n,left:s,right:o,up:r,down:a,enter:l,d:c,g:u,o:d}=Ep;let f=[{name:"next_space",key:Ye(t,kt(n)),fn:Dn,autoRepeat:!0},{name:"prev_space",key:Ye(t,n),fn:Rn,autoRepeat:!0},{name:"next_right",key:Ye(o,kt(n),kt(dt)),fn:Dn,autoRepeat:!0},{name:"prev_left",key:Ye(s,kt(n),kt(dt)),fn:Rn,autoRepeat:!0},{name:"next_page_key",key:"pageDown",fn:Dn,autoRepeat:!0},{name:"prev_page_key",key:"pageUp",fn:Rn,autoRepeat:!0},{name:"next_down",key:Ye(a,kt(dt)),fn:Ro,autoRepeat:!0},{name:"prev_up",key:Ye(r,kt(dt)),fn:()=>No(!1),autoRepeat:!0},{name:"next_shift",key:Ye(o,n),fn:Ro,autoRepeat:!0},{name:"prev_shift",key:Ye(s,n),fn:()=>No(!1),autoRepeat:!0},{name:"toggle_dark",key:Ye(c,kt(tn)),fn:Up},{name:"toggle_overview",key:Ye(d,kt(tn)),fn:Ap},{name:"hide_overview",key:Ye(e,kt(tn)),fn:()=>dt.value=!1},{name:"goto",key:Ye(u,kt(tn)),fn:()=>Ps.value=!Ps.value},{name:"next_overview",key:Ye(o,dt),fn:mw},{name:"prev_overview",key:Ye(s,dt),fn:hw},{name:"up_overview",key:Ye(r,dt),fn:gw},{name:"down_overview",key:Ye(a,dt),fn:yw},{name:"goto_from_overview",key:Ye(l,dt),fn:()=>{qs(Ct.value),dt.value=!1}}];const p=new Set(f.map(m=>m.name));if(f.filter(m=>m.name&&p.has(m.name)).length===0){const m=["========== WARNING ==========","defineShortcutsSetup did not return any of the base shortcuts.","See https://sli.dev/custom/config-shortcuts.html for migration.",'If it is intentional, return at least one shortcut with one of the base names (e.g. name:"goto").'].join(`

`);alert(m),console.warn(m)}return f}const Pp=Ye(kt(Ib),kt(Ub),Fb);function _w(e,t,n=!1){typeof e=="string"&&(e=Ep[e]);const s=Ye(e,Pp);let o=0,r;const a=()=>{if(clearTimeout(r),!s.value){o=0;return}n&&(r=setTimeout(a,Math.max(1e3-o*250,150)),o++),t()};return ye(s,a,{flush:"sync"})}function bw(e,t){return mv(e,n=>{Pp.value&&(n.repeat||t())})}function ww(){const e=vw();new Map(e.map(n=>[n.key,n])).forEach(n=>{n.fn&&_w(n.key,n.fn,n.autoRepeat)}),bw("f",()=>Cp.toggle())}const xw={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},kw=i("path",{fill:"currentColor",d:"M24 9.4L22.6 8L16 14.6L9.4 8L8 9.4l6.6 6.6L8 22.6L9.4 24l6.6-6.6l6.6 6.6l1.4-1.4l-6.6-6.6L24 9.4z"},null,-1),Sw=[kw];function Tw(e,t){return w(),$("svg",xw,Sw)}const Ew={name:"carbon-close",render:Tw};function Ul(e,t=""){var o,r;const n=["slidev-page",t],s=(r=(o=e==null?void 0:e.meta)==null?void 0:o.slide)==null?void 0:r.no;return s!=null&&n.push(`slidev-page-${s}`),n.filter(Boolean).join(" ")}const Cw=ke({__name:"SlideContainer",props:{width:{type:Number},meta:{default:()=>({})},scale:{type:[Number,String]}},setup(e){const t=e;R(K);const n=z(),s=Hv(n),o=I(()=>t.width?t.width:s.width.value),r=I(()=>t.width?t.width/Pn:s.height.value);t.width&&xs(()=>{n.value&&(n.value.style.width=`${o.value}px`,n.value.style.height=`${r.value}px`)});const a=I(()=>o.value/r.value),l=I(()=>t.scale&&!vn.value?t.scale:a.value<Pn?o.value/Mn:r.value*Pn/Mn),c=I(()=>({height:`${El}px`,width:`${Mn}px`,transform:`translate(-50%, -50%) scale(${l.value})`})),u=I(()=>({"select-none":!$e.selectable}));return Tt(Yf,l),(d,f)=>(w(),$("div",{id:"slide-container",ref_key:"root",ref:n,class:De(u.value)},[i("div",{id:"slide-content",style:Xe(c.value)},[mt(d.$slots,"default")],4),mt(d.$slots,"controls")],2))}});const G=(e,t)=>{const n=e.__vccOpts||e;for(const[s,o]of t)n[s]=o;return n},Mp=G(Cw,[["__file","/home/ben/Workspace/demystifying-unicode/node_modules/@slidev/client/internals/SlideContainer.vue"]]),Pl=ke({name:"SlideWrapper",props:{clicks:{type:[Number,String],default:0},clicksElements:{type:Array,default:()=>[]},clicksOrderMap:{type:Map,default:()=>new Map},clicksDisabled:{type:Boolean,default:!1},context:{type:String,default:"main"},is:{type:Object,default:void 0},route:{type:Object,default:void 0}},setup(e,{emit:t}){const n=en(e,"clicks",t),s=en(e,"clicksElements",t),o=en(e,"clicksDisabled",t),r=en(e,"clicksOrderMap",t);s.value.length=0,Tt(p1,e.route),Tt(h1,e.context),Tt(yo,n),Tt(vo,o),Tt(ss,s),Tt(wa,r)},render(){var e,t;return this.$props.is?Je(this.$props.is):(t=(e=this.$slots)==null?void 0:e.default)==null?void 0:t.call(e)}}),Aw=["innerHTML"],$w=ke({__name:"DrawingPreview",props:{page:{type:Number,required:!0}},setup(e){return R(K),(t,n)=>O(zr)[t.page]?(w(),$("svg",{key:0,class:"w-full h-full absolute top-0 pointer-events-none",innerHTML:O(zr)[t.page]},null,8,Aw)):ge("v-if",!0)}}),Lp=G($w,[["__file","/home/ben/Workspace/demystifying-unicode/node_modules/@slidev/client/internals/DrawingPreview.vue"]]),Fw=Object.freeze(Object.defineProperty({__proto__:null,default:Lp},Symbol.toStringTag,{value:"Module"})),Ow={class:"slides-overview bg-main !bg-opacity-75 p-16 overflow-y-auto"},Iw=["onClick"],Wi=4*16*2,Pu=2*16,Uw=ke({__name:"SlidesOverview",props:{modelValue:{type:Boolean,required:!0}},emits:[],setup(e,{emit:t}){const n=e;R(K);const s=en(n,"modelValue",t);function o(){s.value=!1}function r(f){qs(f),o()}function a(f){return f===Ct.value}const l=Oa.smaller("xs"),c=Oa.smaller("sm"),u=I(()=>l.value?ys.width.value-Wi:c.value?(ys.width.value-Wi-Pu)/2:300),d=I(()=>Math.floor((ys.width.value-Wi)/(u.value+Pu)));return xs(()=>{Ct.value=He.value,Il.value=d.value}),(f,p)=>{const h=Ew;return w(),$(Ae,null,[Xt(i("div",Ow,[i("div",{class:"grid gap-y-4 gap-x-8 w-full",style:Xe(`grid-template-columns: repeat(auto-fit,minmax(${u.value}px,1fr))`)},[(w(!0),$(Ae,null,ks(O(Ge),(m,_)=>(w(),$("div",{key:m.path,class:"relative"},[i("div",{class:De(["inline-block border rounded border-opacity-50 overflow-hidden bg-main hover:border-$slidev-theme-primary",{"border-$slidev-theme-primary":a(_+1),"border-gray-400":!a(_+1)}]),style:Xe(O(Cl)),onClick:k=>r(+m.path)},[(w(),H(Mp,{key:m.path,width:u.value,"clicks-disabled":!0,class:"pointer-events-none"},{default:W(()=>[m!=null&&m.component?(w(),H(O(Pl),{key:0,is:m.component,"clicks-disabled":!0,class:De(O(Ul)(m)),route:m,context:"overview"},null,8,["is","class","route"])):ge("v-if",!0),Y(Lp,{page:+m.path},null,8,["page"])]),_:2},1032,["width"]))],14,Iw),i("div",{class:"absolute top-0 opacity-50",style:Xe(`left: ${u.value+5}px`)},bn(_+1),5)]))),128))],4)],512),[[Df,O(s)]]),O(s)?(w(),$("button",{key:0,class:"fixed text-2xl top-4 right-4 slidev-icon-btn text-gray-400",onClick:o},[Y(h)])):ge("v-if",!0)],64)}}});const Pw=G(Uw,[["__file","/home/ben/Workspace/demystifying-unicode/node_modules/@slidev/client/internals/SlidesOverview.vue"]]),Mw="/assets/logo-b72bde5d.png",Lw={key:0,class:"fixed top-0 bottom-0 left-0 right-0 grid z-20"},Bw=ke({__name:"Modal",props:{modelValue:{default:!1},class:{default:""}},emits:["modelValue"],setup(e,{emit:t}){const n=e;R(K);const s=en(n,"modelValue",t);function o(){s.value=!1}return(r,a)=>(w(),H(cf,null,[O(s)?(w(),$("div",Lw,[i("div",{bg:"black opacity-80",class:"absolute top-0 bottom-0 left-0 right-0 -z-1",onClick:a[0]||(a[0]=l=>o())}),i("div",{class:De(["m-auto rounded-md bg-main shadow",n.class]),"dark:border":"~ main"},[mt(r.$slots,"default")],2)])):ge("v-if",!0)],1024))}}),Dw=G(Bw,[["__file","/home/ben/Workspace/demystifying-unicode/node_modules/@slidev/client/internals/Modal.vue"]]),Rw={class:"slidev-info-dialog slidev-layout flex flex-col gap-4 text-base"},Nw=["innerHTML"],jw=i("a",{href:"https://github.com/slidevjs/slidev",target:"_blank",class:"!opacity-100 !border-none !text-current"},[i("div",{class:"flex gap-1 children:my-auto"},[i("div",{class:"opacity-50 text-sm mr-2"},"Powered by"),i("img",{class:"w-5 h-5",src:Mw,alt:"Slidev"}),i("div",{style:{color:"#2082A6"}},[i("b",null,"Sli"),v("dev ")])])],-1),Ww=ke({__name:"InfoDialog",props:{modelValue:{default:!1}},emits:["modelValue"],setup(e,{emit:t}){const n=e;R(K);const s=en(n,"modelValue",t),o=I(()=>typeof $e.info=="string");return(r,a)=>(w(),H(Dw,{modelValue:O(s),"onUpdate:modelValue":a[0]||(a[0]=l=>Fe(s)?s.value=l:null),class:"px-6 py-4"},{default:W(()=>[i("div",Rw,[o.value?(w(),$("div",{key:0,class:"mb-4",innerHTML:O($e).info},null,8,Nw)):ge("v-if",!0),jw])]),_:1},8,["modelValue"]))}});const qw=G(Ww,[["__file","/home/ben/Workspace/demystifying-unicode/node_modules/@slidev/client/internals/InfoDialog.vue"]]);function wn(e){return Array.isArray?Array.isArray(e):Rp(e)==="[object Array]"}const Hw=1/0;function Vw(e){if(typeof e=="string")return e;let t=e+"";return t=="0"&&1/e==-Hw?"-0":t}function zw(e){return e==null?"":Vw(e)}function nn(e){return typeof e=="string"}function Bp(e){return typeof e=="number"}function Kw(e){return e===!0||e===!1||Gw(e)&&Rp(e)=="[object Boolean]"}function Dp(e){return typeof e=="object"}function Gw(e){return Dp(e)&&e!==null}function Et(e){return e!=null}function qi(e){return!e.trim().length}function Rp(e){return e==null?e===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}const Yw="Incorrect 'index' type",Zw=e=>`Invalid value for key ${e}`,Qw=e=>`Pattern length exceeds max of ${e}.`,Jw=e=>`Missing ${e} property in key`,Xw=e=>`Property 'weight' in key '${e}' must be a positive integer`,Mu=Object.prototype.hasOwnProperty;class ex{constructor(t){this._keys=[],this._keyMap={};let n=0;t.forEach(s=>{let o=Np(s);n+=o.weight,this._keys.push(o),this._keyMap[o.id]=o,n+=o.weight}),this._keys.forEach(s=>{s.weight/=n})}get(t){return this._keyMap[t]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function Np(e){let t=null,n=null,s=null,o=1,r=null;if(nn(e)||wn(e))s=e,t=Lu(e),n=La(e);else{if(!Mu.call(e,"name"))throw new Error(Jw("name"));const a=e.name;if(s=a,Mu.call(e,"weight")&&(o=e.weight,o<=0))throw new Error(Xw(a));t=Lu(a),n=La(a),r=e.getFn}return{path:t,id:n,weight:o,src:s,getFn:r}}function Lu(e){return wn(e)?e:e.split(".")}function La(e){return wn(e)?e.join("."):e}function tx(e,t){let n=[],s=!1;const o=(r,a,l)=>{if(Et(r))if(!a[l])n.push(r);else{let c=a[l];const u=r[c];if(!Et(u))return;if(l===a.length-1&&(nn(u)||Bp(u)||Kw(u)))n.push(zw(u));else if(wn(u)){s=!0;for(let d=0,f=u.length;d<f;d+=1)o(u[d],a,l+1)}else a.length&&o(u,a,l+1)}};return o(e,nn(t)?t.split("."):t,0),s?n:n[0]}const nx={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},sx={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(e,t)=>e.score===t.score?e.idx<t.idx?-1:1:e.score<t.score?-1:1},ox={location:0,threshold:.6,distance:100},rx={useExtendedSearch:!1,getFn:tx,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var fe={...sx,...nx,...ox,...rx};const ix=/[^ ]+/g;function ax(e=1,t=3){const n=new Map,s=Math.pow(10,t);return{get(o){const r=o.match(ix).length;if(n.has(r))return n.get(r);const a=1/Math.pow(r,.5*e),l=parseFloat(Math.round(a*s)/s);return n.set(r,l),l},clear(){n.clear()}}}class Ml{constructor({getFn:t=fe.getFn,fieldNormWeight:n=fe.fieldNormWeight}={}){this.norm=ax(n,3),this.getFn=t,this.isCreated=!1,this.setIndexRecords()}setSources(t=[]){this.docs=t}setIndexRecords(t=[]){this.records=t}setKeys(t=[]){this.keys=t,this._keysMap={},t.forEach((n,s)=>{this._keysMap[n.id]=s})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,nn(this.docs[0])?this.docs.forEach((t,n)=>{this._addString(t,n)}):this.docs.forEach((t,n)=>{this._addObject(t,n)}),this.norm.clear())}add(t){const n=this.size();nn(t)?this._addString(t,n):this._addObject(t,n)}removeAt(t){this.records.splice(t,1);for(let n=t,s=this.size();n<s;n+=1)this.records[n].i-=1}getValueForItemAtKeyId(t,n){return t[this._keysMap[n]]}size(){return this.records.length}_addString(t,n){if(!Et(t)||qi(t))return;let s={v:t,i:n,n:this.norm.get(t)};this.records.push(s)}_addObject(t,n){let s={i:n,$:{}};this.keys.forEach((o,r)=>{let a=o.getFn?o.getFn(t):this.getFn(t,o.path);if(Et(a)){if(wn(a)){let l=[];const c=[{nestedArrIndex:-1,value:a}];for(;c.length;){const{nestedArrIndex:u,value:d}=c.pop();if(Et(d))if(nn(d)&&!qi(d)){let f={v:d,i:u,n:this.norm.get(d)};l.push(f)}else wn(d)&&d.forEach((f,p)=>{c.push({nestedArrIndex:p,value:f})})}s.$[r]=l}else if(nn(a)&&!qi(a)){let l={v:a,n:this.norm.get(a)};s.$[r]=l}}}),this.records.push(s)}toJSON(){return{keys:this.keys,records:this.records}}}function jp(e,t,{getFn:n=fe.getFn,fieldNormWeight:s=fe.fieldNormWeight}={}){const o=new Ml({getFn:n,fieldNormWeight:s});return o.setKeys(e.map(Np)),o.setSources(t),o.create(),o}function lx(e,{getFn:t=fe.getFn,fieldNormWeight:n=fe.fieldNormWeight}={}){const{keys:s,records:o}=e,r=new Ml({getFn:t,fieldNormWeight:n});return r.setKeys(s),r.setIndexRecords(o),r}function mr(e,{errors:t=0,currentLocation:n=0,expectedLocation:s=0,distance:o=fe.distance,ignoreLocation:r=fe.ignoreLocation}={}){const a=t/e.length;if(r)return a;const l=Math.abs(s-n);return o?a+l/o:l?1:a}function cx(e=[],t=fe.minMatchCharLength){let n=[],s=-1,o=-1,r=0;for(let a=e.length;r<a;r+=1){let l=e[r];l&&s===-1?s=r:!l&&s!==-1&&(o=r-1,o-s+1>=t&&n.push([s,o]),s=-1)}return e[r-1]&&r-s>=t&&n.push([s,r-1]),n}const rs=32;function ux(e,t,n,{location:s=fe.location,distance:o=fe.distance,threshold:r=fe.threshold,findAllMatches:a=fe.findAllMatches,minMatchCharLength:l=fe.minMatchCharLength,includeMatches:c=fe.includeMatches,ignoreLocation:u=fe.ignoreLocation}={}){if(t.length>rs)throw new Error(Qw(rs));const d=t.length,f=e.length,p=Math.max(0,Math.min(s,f));let h=r,m=p;const _=l>1||c,k=_?Array(f):[];let x;for(;(x=e.indexOf(t,m))>-1;){let L=mr(t,{currentLocation:x,expectedLocation:p,distance:o,ignoreLocation:u});if(h=Math.min(L,h),m=x+d,_){let U=0;for(;U<d;)k[x+U]=1,U+=1}}m=-1;let S=[],b=1,T=d+f;const E=1<<d-1;for(let L=0;L<d;L+=1){let U=0,N=T;for(;U<N;)mr(t,{errors:L,currentLocation:p+N,expectedLocation:p,distance:o,ignoreLocation:u})<=h?U=N:T=N,N=Math.floor((T-U)/2+U);T=N;let ne=Math.max(1,p-N+1),le=a?f:Math.min(p+N,f)+d,Z=Array(le+2);Z[le+1]=(1<<L)-1;for(let ve=le;ve>=ne;ve-=1){let be=ve-1,Pe=n[e.charAt(be)];if(_&&(k[be]=+!!Pe),Z[ve]=(Z[ve+1]<<1|1)&Pe,L&&(Z[ve]|=(S[ve+1]|S[ve])<<1|1|S[ve+1]),Z[ve]&E&&(b=mr(t,{errors:L,currentLocation:be,expectedLocation:p,distance:o,ignoreLocation:u}),b<=h)){if(h=b,m=be,m<=p)break;ne=Math.max(1,2*p-m)}}if(mr(t,{errors:L+1,currentLocation:p,expectedLocation:p,distance:o,ignoreLocation:u})>h)break;S=Z}const A={isMatch:m>=0,score:Math.max(.001,b)};if(_){const L=cx(k,l);L.length?c&&(A.indices=L):A.isMatch=!1}return A}function dx(e){let t={};for(let n=0,s=e.length;n<s;n+=1){const o=e.charAt(n);t[o]=(t[o]||0)|1<<s-n-1}return t}class Wp{constructor(t,{location:n=fe.location,threshold:s=fe.threshold,distance:o=fe.distance,includeMatches:r=fe.includeMatches,findAllMatches:a=fe.findAllMatches,minMatchCharLength:l=fe.minMatchCharLength,isCaseSensitive:c=fe.isCaseSensitive,ignoreLocation:u=fe.ignoreLocation}={}){if(this.options={location:n,threshold:s,distance:o,includeMatches:r,findAllMatches:a,minMatchCharLength:l,isCaseSensitive:c,ignoreLocation:u},this.pattern=c?t:t.toLowerCase(),this.chunks=[],!this.pattern.length)return;const d=(p,h)=>{this.chunks.push({pattern:p,alphabet:dx(p),startIndex:h})},f=this.pattern.length;if(f>rs){let p=0;const h=f%rs,m=f-h;for(;p<m;)d(this.pattern.substr(p,rs),p),p+=rs;if(h){const _=f-rs;d(this.pattern.substr(_),_)}}else d(this.pattern,0)}searchIn(t){const{isCaseSensitive:n,includeMatches:s}=this.options;if(n||(t=t.toLowerCase()),this.pattern===t){let m={isMatch:!0,score:0};return s&&(m.indices=[[0,t.length-1]]),m}const{location:o,distance:r,threshold:a,findAllMatches:l,minMatchCharLength:c,ignoreLocation:u}=this.options;let d=[],f=0,p=!1;this.chunks.forEach(({pattern:m,alphabet:_,startIndex:k})=>{const{isMatch:x,score:S,indices:b}=ux(t,m,_,{location:o+k,distance:r,threshold:a,findAllMatches:l,minMatchCharLength:c,includeMatches:s,ignoreLocation:u});x&&(p=!0),f+=S,x&&b&&(d=[...d,...b])});let h={isMatch:p,score:p?f/this.chunks.length:1};return p&&s&&(h.indices=d),h}}class Vn{constructor(t){this.pattern=t}static isMultiMatch(t){return Bu(t,this.multiRegex)}static isSingleMatch(t){return Bu(t,this.singleRegex)}search(){}}function Bu(e,t){const n=e.match(t);return n?n[1]:null}class fx extends Vn{constructor(t){super(t)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(t){const n=t===this.pattern;return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class px extends Vn{constructor(t){super(t)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(t){const s=t.indexOf(this.pattern)===-1;return{isMatch:s,score:s?0:1,indices:[0,t.length-1]}}}class hx extends Vn{constructor(t){super(t)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(t){const n=t.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class mx extends Vn{constructor(t){super(t)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(t){const n=!t.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,t.length-1]}}}class gx extends Vn{constructor(t){super(t)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(t){const n=t.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[t.length-this.pattern.length,t.length-1]}}}class yx extends Vn{constructor(t){super(t)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(t){const n=!t.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,t.length-1]}}}class qp extends Vn{constructor(t,{location:n=fe.location,threshold:s=fe.threshold,distance:o=fe.distance,includeMatches:r=fe.includeMatches,findAllMatches:a=fe.findAllMatches,minMatchCharLength:l=fe.minMatchCharLength,isCaseSensitive:c=fe.isCaseSensitive,ignoreLocation:u=fe.ignoreLocation}={}){super(t),this._bitapSearch=new Wp(t,{location:n,threshold:s,distance:o,includeMatches:r,findAllMatches:a,minMatchCharLength:l,isCaseSensitive:c,ignoreLocation:u})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(t){return this._bitapSearch.searchIn(t)}}class Hp extends Vn{constructor(t){super(t)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(t){let n=0,s;const o=[],r=this.pattern.length;for(;(s=t.indexOf(this.pattern,n))>-1;)n=s+r,o.push([s,n-1]);const a=!!o.length;return{isMatch:a,score:a?0:1,indices:o}}}const Ba=[fx,Hp,hx,mx,yx,gx,px,qp],Du=Ba.length,vx=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,_x="|";function bx(e,t={}){return e.split(_x).map(n=>{let s=n.trim().split(vx).filter(r=>r&&!!r.trim()),o=[];for(let r=0,a=s.length;r<a;r+=1){const l=s[r];let c=!1,u=-1;for(;!c&&++u<Du;){const d=Ba[u];let f=d.isMultiMatch(l);f&&(o.push(new d(f,t)),c=!0)}if(!c)for(u=-1;++u<Du;){const d=Ba[u];let f=d.isSingleMatch(l);if(f){o.push(new d(f,t));break}}}return o})}const wx=new Set([qp.type,Hp.type]);class xx{constructor(t,{isCaseSensitive:n=fe.isCaseSensitive,includeMatches:s=fe.includeMatches,minMatchCharLength:o=fe.minMatchCharLength,ignoreLocation:r=fe.ignoreLocation,findAllMatches:a=fe.findAllMatches,location:l=fe.location,threshold:c=fe.threshold,distance:u=fe.distance}={}){this.query=null,this.options={isCaseSensitive:n,includeMatches:s,minMatchCharLength:o,findAllMatches:a,ignoreLocation:r,location:l,threshold:c,distance:u},this.pattern=n?t:t.toLowerCase(),this.query=bx(this.pattern,this.options)}static condition(t,n){return n.useExtendedSearch}searchIn(t){const n=this.query;if(!n)return{isMatch:!1,score:1};const{includeMatches:s,isCaseSensitive:o}=this.options;t=o?t:t.toLowerCase();let r=0,a=[],l=0;for(let c=0,u=n.length;c<u;c+=1){const d=n[c];a.length=0,r=0;for(let f=0,p=d.length;f<p;f+=1){const h=d[f],{isMatch:m,indices:_,score:k}=h.search(t);if(m){if(r+=1,l+=k,s){const x=h.constructor.type;wx.has(x)?a=[...a,..._]:a.push(_)}}else{l=0,r=0,a.length=0;break}}if(r){let f={isMatch:!0,score:l/r};return s&&(f.indices=a),f}}return{isMatch:!1,score:1}}}const Da=[];function kx(...e){Da.push(...e)}function Ra(e,t){for(let n=0,s=Da.length;n<s;n+=1){let o=Da[n];if(o.condition(e,t))return new o(e,t)}return new Wp(e,t)}const Zr={AND:"$and",OR:"$or"},Na={PATH:"$path",PATTERN:"$val"},ja=e=>!!(e[Zr.AND]||e[Zr.OR]),Sx=e=>!!e[Na.PATH],Tx=e=>!wn(e)&&Dp(e)&&!ja(e),Ru=e=>({[Zr.AND]:Object.keys(e).map(t=>({[t]:e[t]}))});function Vp(e,t,{auto:n=!0}={}){const s=o=>{let r=Object.keys(o);const a=Sx(o);if(!a&&r.length>1&&!ja(o))return s(Ru(o));if(Tx(o)){const c=a?o[Na.PATH]:r[0],u=a?o[Na.PATTERN]:o[c];if(!nn(u))throw new Error(Zw(c));const d={keyId:La(c),pattern:u};return n&&(d.searcher=Ra(u,t)),d}let l={children:[],operator:r[0]};return r.forEach(c=>{const u=o[c];wn(u)&&u.forEach(d=>{l.children.push(s(d))})}),l};return ja(e)||(e=Ru(e)),s(e)}function Ex(e,{ignoreFieldNorm:t=fe.ignoreFieldNorm}){e.forEach(n=>{let s=1;n.matches.forEach(({key:o,norm:r,score:a})=>{const l=o?o.weight:null;s*=Math.pow(a===0&&l?Number.EPSILON:a,(l||1)*(t?1:r))}),n.score=s})}function Cx(e,t){const n=e.matches;t.matches=[],Et(n)&&n.forEach(s=>{if(!Et(s.indices)||!s.indices.length)return;const{indices:o,value:r}=s;let a={indices:o,value:r};s.key&&(a.key=s.key.src),s.idx>-1&&(a.refIndex=s.idx),t.matches.push(a)})}function Ax(e,t){t.score=e.score}function $x(e,t,{includeMatches:n=fe.includeMatches,includeScore:s=fe.includeScore}={}){const o=[];return n&&o.push(Cx),s&&o.push(Ax),e.map(r=>{const{idx:a}=r,l={item:t[a],refIndex:a};return o.length&&o.forEach(c=>{c(r,l)}),l})}class Vs{constructor(t,n={},s){this.options={...fe,...n},this.options.useExtendedSearch,this._keyStore=new ex(this.options.keys),this.setCollection(t,s)}setCollection(t,n){if(this._docs=t,n&&!(n instanceof Ml))throw new Error(Yw);this._myIndex=n||jp(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(t){Et(t)&&(this._docs.push(t),this._myIndex.add(t))}remove(t=()=>!1){const n=[];for(let s=0,o=this._docs.length;s<o;s+=1){const r=this._docs[s];t(r,s)&&(this.removeAt(s),s-=1,o-=1,n.push(r))}return n}removeAt(t){this._docs.splice(t,1),this._myIndex.removeAt(t)}getIndex(){return this._myIndex}search(t,{limit:n=-1}={}){const{includeMatches:s,includeScore:o,shouldSort:r,sortFn:a,ignoreFieldNorm:l}=this.options;let c=nn(t)?nn(this._docs[0])?this._searchStringList(t):this._searchObjectList(t):this._searchLogical(t);return Ex(c,{ignoreFieldNorm:l}),r&&c.sort(a),Bp(n)&&n>-1&&(c=c.slice(0,n)),$x(c,this._docs,{includeMatches:s,includeScore:o})}_searchStringList(t){const n=Ra(t,this.options),{records:s}=this._myIndex,o=[];return s.forEach(({v:r,i:a,n:l})=>{if(!Et(r))return;const{isMatch:c,score:u,indices:d}=n.searchIn(r);c&&o.push({item:r,idx:a,matches:[{score:u,value:r,norm:l,indices:d}]})}),o}_searchLogical(t){const n=Vp(t,this.options),s=(l,c,u)=>{if(!l.children){const{keyId:f,searcher:p}=l,h=this._findMatches({key:this._keyStore.get(f),value:this._myIndex.getValueForItemAtKeyId(c,f),searcher:p});return h&&h.length?[{idx:u,item:c,matches:h}]:[]}const d=[];for(let f=0,p=l.children.length;f<p;f+=1){const h=l.children[f],m=s(h,c,u);if(m.length)d.push(...m);else if(l.operator===Zr.AND)return[]}return d},o=this._myIndex.records,r={},a=[];return o.forEach(({$:l,i:c})=>{if(Et(l)){let u=s(n,l,c);u.length&&(r[c]||(r[c]={idx:c,item:l,matches:[]},a.push(r[c])),u.forEach(({matches:d})=>{r[c].matches.push(...d)}))}}),a}_searchObjectList(t){const n=Ra(t,this.options),{keys:s,records:o}=this._myIndex,r=[];return o.forEach(({$:a,i:l})=>{if(!Et(a))return;let c=[];s.forEach((u,d)=>{c.push(...this._findMatches({key:u,value:a[d],searcher:n}))}),c.length&&r.push({idx:l,item:a,matches:c})}),r}_findMatches({key:t,value:n,searcher:s}){if(!Et(n))return[];let o=[];if(wn(n))n.forEach(({v:r,i:a,n:l})=>{if(!Et(r))return;const{isMatch:c,score:u,indices:d}=s.searchIn(r);c&&o.push({score:u,key:t,value:r,idx:a,norm:l,indices:d})});else{const{v:r,n:a}=n,{isMatch:l,score:c,indices:u}=s.searchIn(r);l&&o.push({score:c,key:t,value:r,norm:a,indices:u})}return o}}Vs.version="6.6.2";Vs.createIndex=jp;Vs.parseIndex=lx;Vs.config=fe;Vs.parseQuery=Vp;kx(xx);const Fx={class:"bg-main transform",shadow:"~",p:"x-4 y-2",border:"~ transparent rounded dark:main"},Ox=["value","disabled","onKeydown"],Ix=["border","onClick"],Ux={"w-4":"","text-right":"",op50:"","text-sm":""},Px=ke({__name:"Goto",setup(e){R(K);const t=z(),n=z(),s=z(),o=z(),r=z(""),a=z(0);function l(b){return b!=null}const c=I(()=>new Vs(Ge.map(b=>{var T;return(T=b.meta)==null?void 0:T.slide}).filter(l),{keys:["no","title"],threshold:.3,shouldSort:!0,minMatchCharLength:1})),u=I(()=>r.value.startsWith("/")?r.value.substring(1):r.value),d=I(()=>c.value.search(u.value).map(b=>b.item)),f=I(()=>!!d.value.length);function p(){if(f.value){const b=d.value.at(a.value||0);b&&qs(b.no)}h()}function h(){r.value="",Ps.value=!1}function m(b){b.preventDefault(),a.value++,a.value>=d.value.length&&(a.value=0),k()}function _(b){b.preventDefault(),a.value--,a.value<=-2&&(a.value=d.value.length-1),k()}function k(){var T;const b=(T=o.value)==null?void 0:T[a.value];b&&s.value&&(b.offsetTop+b.offsetHeight>s.value.offsetHeight+s.value.scrollTop?s.value.scrollTo({behavior:"smooth",top:b.offsetTop+b.offsetHeight-s.value.offsetHeight+1}):b.offsetTop<s.value.scrollTop&&s.value.scrollTo({behavior:"smooth",top:b.offsetTop}))}function x(b){a.value=0,r.value=b.target.value}function S(b){qs(b),h()}return ye(Ps,async b=>{var T;b?(r.value="",a.value=0,setTimeout(()=>{var E;return(E=n.value)==null?void 0:E.focus()},0)):(T=n.value)==null||T.blur()}),ye(Bn,()=>{var b;(b=t.value)!=null&&b.contains(Bn.value)||h()}),(b,T)=>(w(),$("div",{id:"slidev-goto-dialog",ref_key:"container",ref:t,class:De(["fixed right-5 transition-all",O(Ps)?"top-5":"-top-20"]),"w-90":"","max-w-90":"","min-w-90":""},[i("div",Fx,[i("input",{id:"slidev-goto-input",ref_key:"input",ref:n,value:r.value,type:"text",disabled:!O(Ps),class:De(["outline-none bg-transparent",{"text-red-400":!f.value&&r.value}]),placeholder:"Goto...",onKeydown:[lr(p,["enter"]),lr(h,["escape"]),lr(m,["down"]),lr(_,["up"])],onInput:x},null,42,Ox)]),d.value.length>0?(w(),$("ul",{key:0,ref_key:"list",ref:s,class:"autocomplete-list",shadow:"~",border:"~ transparent rounded dark:main"},[(w(!0),$(Ae,null,ks(d.value,(E,A)=>(w(),$("li",{ref_for:!0,ref_key:"items",ref:o,key:E.id,role:"button",tabindex:"0",p:"x-4 y-2","cursor-pointer":"",hover:"op100",flex:"~ gap-2","w-90":"","items-center":"",border:A===0?"":"t main",class:De(a.value===A?"bg-active op100":"op80"),onClick:h0(L=>S(E.no),["stop"])},[i("div",Ux,bn(E.no),1),v(" "+bn(E.title),1)],10,Ix))),128))],512)):ge("v-if",!0)],2))}});const Mx=G(Px,[["__scopeId","data-v-f5ee02a7"],["__file","/home/ben/Workspace/demystifying-unicode/node_modules/@slidev/client/internals/Goto.vue"]]),Lx=ke({__name:"Controls",setup(e){R(K);const t=rn(),n=rn();return(s,o)=>(w(),$(Ae,null,[Y(Pw,{modelValue:O(dt),"onUpdate:modelValue":o[0]||(o[0]=r=>Fe(dt)?dt.value=r:null)},null,8,["modelValue"]),Y(Mx),t.value?(w(),H(O(t),{key:0})):ge("v-if",!0),n.value?(w(),H(O(n),{key:1,modelValue:O(Ri),"onUpdate:modelValue":o[1]||(o[1]=r=>Fe(Ri)?Ri.value=r:null)},null,8,["modelValue"])):ge("v-if",!0),O($e).info?(w(),H(qw,{key:2,modelValue:O(wo),"onUpdate:modelValue":o[2]||(o[2]=r=>Fe(wo)?wo.value=r:null)},null,8,["modelValue"])):ge("v-if",!0)],64))}}),Bx=G(Lx,[["__file","/home/ben/Workspace/demystifying-unicode/node_modules/@slidev/client/internals/Controls.vue"]]),Dx={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Rx=i("path",{fill:"currentColor",d:"M30 8h-4.1c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2h14.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30V8zm-9 4c-1.7 0-3-1.3-3-3s1.3-3 3-3s3 1.3 3 3s-1.3 3-3 3zM2 24h4.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30v-2H15.9c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2zm9-4c1.7 0 3 1.3 3 3s-1.3 3-3 3s-3-1.3-3-3s1.3-3 3-3z"},null,-1),Nx=[Rx];function jx(e,t){return w(),$("svg",Dx,Nx)}const Wx={name:"carbon-settings-adjust",render:jx},qx={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Hx=i("path",{fill:"currentColor",d:"M17 22v-8h-4v2h2v6h-3v2h8v-2h-3zM16 8a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 16 8z"},null,-1),Vx=i("path",{fill:"currentColor",d:"M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z"},null,-1),zx=[Hx,Vx];function Kx(e,t){return w(),$("svg",qx,zx)}const Gx={name:"carbon-information",render:Kx},Yx={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Zx=i("path",{fill:"currentColor",d:"M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10l10-10z"},null,-1),Qx=[Zx];function Jx(e,t){return w(),$("svg",Yx,Qx)}const Xx={name:"carbon-download",render:Jx},ek={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},tk=i("path",{fill:"currentColor",d:"M29.415 19L27.7 17.285A2.97 2.97 0 0 0 28 16a3 3 0 1 0-3 3a2.97 2.97 0 0 0 1.286-.3L28 20.414V28h-6v-3a7.008 7.008 0 0 0-7-7H9a7.008 7.008 0 0 0-7 7v5h28v-9.586A1.988 1.988 0 0 0 29.415 19ZM4 25a5.006 5.006 0 0 1 5-5h6a5.006 5.006 0 0 1 5 5v3H4Z"},null,-1),nk=i("path",{fill:"currentColor",d:"M12 4a5 5 0 1 1-5 5a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7a7 7 0 0 0-7-7Z"},null,-1),sk=[tk,nk];function ok(e,t){return w(),$("svg",ek,sk)}const rk={name:"carbon-user-speaker",render:ok},ik={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},ak=i("path",{fill:"currentColor",d:"M15 10h2v8h-2zm5 4h2v4h-2zm-10-2h2v6h-2z"},null,-1),lk=i("path",{fill:"currentColor",d:"M25 4h-8V2h-2v2H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8v6h-4v2h10v-2h-4v-6h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 16H7V6h18Z"},null,-1),ck=[ak,lk];function uk(e,t){return w(),$("svg",ik,ck)}const dk={name:"carbon-presentation-file",render:uk},fk={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},pk=i("path",{fill:"currentColor",d:"M27.307 6.107L30 3.414L28.586 2l-2.693 2.693L24.8 3.6a1.933 1.933 0 0 0-2.8 0l-18 18V28h6.4l18-18a1.933 1.933 0 0 0 0-2.8ZM9.6 26H6v-3.6L23.4 5L27 8.6ZM9 11.586L16.586 4L18 5.414L10.414 13z"},null,-1),hk=[pk];function mk(e,t){return w(),$("svg",fk,hk)}const gk={name:"carbon-pen",render:mk},yk={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},vk=i("g",{fill:"currentColor"},[i("path",{d:"M213.66 201L201 213.66a8 8 0 0 1-11.31 0L140 164a8 8 0 0 0-13 2.46l-19.46 44.77a8 8 0 0 1-14.85-.71L40.41 50.44a8 8 0 0 1 10-10l160.1 52.24a8 8 0 0 1 .71 14.85L166.45 127a8 8 0 0 0-2.45 13l49.67 49.67a8 8 0 0 1-.01 11.33Z",opacity:".2"}),i("path",{d:"m169.64 134.33l44.77-19.46a16 16 0 0 0-1.41-29.8L52.92 32.8A16 16 0 0 0 32.8 52.92L85.07 213a15.83 15.83 0 0 0 14.41 11h.78a15.83 15.83 0 0 0 14.61-9.59l19.46-44.77L184 219.31a16 16 0 0 0 22.63 0l12.68-12.68a16 16 0 0 0 0-22.63Zm-69.48 73.76l.06-.05Zm95.15-.09l-49.67-49.67a16 16 0 0 0-26 4.94l-19.42 44.65L48 48l159.87 52.21l-44.64 19.41a16 16 0 0 0-4.94 26L208 195.31Z"})],-1),_k=[vk];function bk(e,t){return w(),$("svg",yk,_k)}const wk={name:"ph-cursor-duotone",render:bk},xk={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},kk=i("path",{fill:"currentColor",d:"M219.31 192a16 16 0 0 1 0 22.63l-4.68 4.68a16 16 0 0 1-22.63 0l-55.25-55.24l-21.88 50.34a15.84 15.84 0 0 1-14.61 9.59h-.78a15.82 15.82 0 0 1-14.41-11L32.8 52.92A15.95 15.95 0 0 1 52.92 32.8L213 85.07a16 16 0 0 1 1.41 29.8l-50.34 21.88Z"},null,-1),Sk=[kk];function Tk(e,t){return w(),$("svg",xk,Sk)}const zp={name:"ph-cursor-fill",render:Tk},Ek={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Ck=i("path",{fill:"currentColor",d:"M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6ZM5.394 6.813L6.81 5.399l3.505 3.506L8.9 10.319zM2 15.005h5v2H2zm3.394 10.193L8.9 21.692l1.414 1.414l-3.505 3.506zM15 25.005h2v5h-2zm6.687-1.9l1.414-1.414l3.506 3.506l-1.414 1.414zm3.313-8.1h5v2h-5zm-3.313-6.101l3.506-3.506l1.414 1.414l-3.506 3.506zM15 2.005h2v5h-2z"},null,-1),Ak=[Ck];function $k(e,t){return w(),$("svg",Ek,Ak)}const Fk={name:"carbon-sun",render:$k},Ok={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Ik=i("path",{fill:"currentColor",d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3Z"},null,-1),Uk=[Ik];function Pk(e,t){return w(),$("svg",Ok,Uk)}const Mk={name:"carbon-moon",render:Pk},Lk={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Bk=i("path",{fill:"currentColor",d:"M8 4v4H4V4Zm2-2H2v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8ZM8 14v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8ZM8 24v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Z"},null,-1),Dk=[Bk];function Rk(e,t){return w(),$("svg",Lk,Dk)}const Nk={name:"carbon-apps",render:Rk},jk={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Wk=i("path",{fill:"currentColor",d:"m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10L18 6z"},null,-1),qk=[Wk];function Hk(e,t){return w(),$("svg",jk,qk)}const Vk={name:"carbon-arrow-right",render:Hk},zk={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Kk=i("path",{fill:"currentColor",d:"m14 26l1.41-1.41L7.83 17H28v-2H7.83l7.58-7.59L14 6L4 16l10 10z"},null,-1),Gk=[Kk];function Yk(e,t){return w(),$("svg",zk,Gk)}const Zk={name:"carbon-arrow-left",render:Yk},Qk={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Jk=i("path",{fill:"currentColor",d:"M20 2v2h6.586L18 12.582L19.414 14L28 5.414V12h2V2H20zm-6 17.416L12.592 18L4 26.586V20H2v10h10v-2H5.414L14 19.416z"},null,-1),Xk=[Jk];function e2(e,t){return w(),$("svg",Qk,Xk)}const t2={name:"carbon-maximize",render:e2},n2={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},s2=i("path",{fill:"currentColor",d:"M4 18v2h6.586L2 28.582L3.414 30L12 21.414V28h2V18H4zM30 3.416L28.592 2L20 10.586V4h-2v10h10v-2h-6.586L30 3.416z"},null,-1),o2=[s2];function r2(e,t){return w(),$("svg",n2,o2)}const i2={name:"carbon-minimize",render:r2},a2={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},l2=i("path",{fill:"currentColor",d:"m13 24l-9-9l1.414-1.414L13 21.171L26.586 7.586L28 9L13 24z"},null,-1),c2=[l2];function u2(e,t){return w(),$("svg",a2,c2)}const d2={name:"carbon-checkmark",render:u2},f2={class:"select-list"},p2={class:"title"},h2={class:"items"},m2=["onClick"],g2=ke({__name:"SelectList",props:{modelValue:{type:[Object,String,Number]},title:{type:String},items:{type:Array}},setup(e,{emit:t}){const n=e;R(K);const s=en(n,"modelValue",t,{passive:!0});return(o,r)=>{const a=d2;return w(),$("div",f2,[i("div",p2,bn(e.title),1),i("div",h2,[(w(!0),$(Ae,null,ks(e.items,l=>(w(),$("div",{key:l.value,class:De(["item",{active:O(s)===l.value}]),onClick:()=>{var c;s.value=l.value,(c=l.onClick)==null||c.call(l)}},[Y(a,{class:De(["text-green-500",{"opacity-0":O(s)!==l.value}])},null,8,["class"]),v(" "+bn(l.display||l.value),1)],10,m2))),128))])])}}});const y2=G(g2,[["__scopeId","data-v-3f89fa11"],["__file","/home/ben/Workspace/demystifying-unicode/node_modules/@slidev/client/internals/SelectList.vue"]]),v2={class:"text-sm"},_2=ke({__name:"Settings",setup(e){R(K);const t=[{display:"Fit",value:0},{display:"1:1",value:1}];return(n,s)=>(w(),$("div",v2,[Y(y2,{modelValue:O(Sr),"onUpdate:modelValue":s[0]||(s[0]=o=>Fe(Sr)?Sr.value=o:null),title:"Scale",items:t},null,8,["modelValue"])]))}}),b2=G(_2,[["__file","/home/ben/Workspace/demystifying-unicode/node_modules/@slidev/client/internals/Settings.vue"]]),w2={key:0,class:"rounded-md bg-main shadow absolute bottom-10 left-0 z-20","dark:border":"~ main"},x2=ke({__name:"MenuButton",props:{modelValue:{default:!1},disabled:{default:!1}},setup(e,{emit:t}){const n=e;R(K);const s=en(n,"modelValue",t,{passive:!0}),o=z();return pv(o,()=>{s.value=!1}),(r,a)=>(w(),$("div",{ref_key:"el",ref:o,class:"flex relative"},[i("button",{class:De({disabled:e.disabled}),onClick:a[0]||(a[0]=l=>s.value=!O(s))},[mt(r.$slots,"button",{class:De({disabled:e.disabled})})],2),(w(),H(cf,null,[O(s)?(w(),$("div",w2,[mt(r.$slots,"menu")])):ge("v-if",!0)],1024))],512))}}),k2=G(x2,[["__file","/home/ben/Workspace/demystifying-unicode/node_modules/@slidev/client/internals/MenuButton.vue"]]),S2={class:"w-1px opacity-10 bg-current m-1 lg:m-2"},T2={__name:"VerticalDivider",setup(e){return R(K),(t,n)=>(w(),$("div",S2))}},gr=G(T2,[["__file","/home/ben/Workspace/demystifying-unicode/node_modules/@slidev/client/internals/VerticalDivider.vue"]]),E2={render(){return[]}},C2={class:"slidev-icon-btn"},A2={class:"h-40px flex",p:"l-1 t-0.5 r-2",text:"sm leading-2"},$2={class:"my-auto"},F2={class:"opacity-50"},O2=ke({__name:"NavControls",props:{persist:{default:!1}},setup(e){const t=e;R(K);const n=Oa.smaller("md"),{isFullscreen:s,toggle:o}=Cp,r=I(()=>qa.value?`?password=${qa.value}`:""),a=I(()=>`/presenter/${He.value}${r.value}`),l=I(()=>`/${He.value}${r.value}`),c=z();function u(){c.value&&Bn.value&&c.value.contains(Bn.value)&&Bn.value.blur()}const d=I(()=>t.persist?"text-$slidev-controls-foreground bg-transparent":"rounded-md bg-main shadow dark:border dark:border-gray-400 dark:border-opacity-10"),f=rn(),p=rn();return Ln(()=>import("./DrawingControls-acd029de.js"),[]).then(h=>p.value=h.default),(h,m)=>{const _=i2,k=t2,x=Zk,S=Vk,b=Nk,T=Mk,E=Fk,A=zp,L=wk,U=gk,N=dk,ne=Ns("RouterLink"),le=rk,Z=Xx,me=Gx,ve=Wx;return w(),$("nav",{ref_key:"root",ref:c,class:"flex flex-col"},[i("div",{class:De(["flex flex-wrap-reverse text-xl gap-0.5 p-1 lg:gap-1 lg:p-2",d.value]),onMouseleave:u},[O(hn)?ge("v-if",!0):(w(),$("button",{key:0,class:"slidev-icon-btn",onClick:m[0]||(m[0]=(...be)=>O(o)&&O(o)(...be))},[O(s)?(w(),H(_,{key:0})):(w(),H(k,{key:1}))])),i("button",{class:De(["slidev-icon-btn",{disabled:!O(jF)}]),onClick:m[1]||(m[1]=(...be)=>O(Rn)&&O(Rn)(...be))},[Y(x)],2),i("button",{class:De(["slidev-icon-btn",{disabled:!O(NF)}]),title:"Next",onClick:m[2]||(m[2]=(...be)=>O(Dn)&&O(Dn)(...be))},[Y(S)],2),O(hn)?ge("v-if",!0):(w(),$("button",{key:1,class:"slidev-icon-btn",title:"Slides overview",onClick:m[3]||(m[3]=be=>O(Ap)())},[Y(b)])),O(Ma)?ge("v-if",!0):(w(),$("button",{key:2,class:"slidev-icon-btn",title:"Toggle dark mode",onClick:m[4]||(m[4]=be=>O(Up)())},[O(Ol)?(w(),H(T,{key:0})):(w(),H(E,{key:1}))])),Y(gr),O(hn)?ge("v-if",!0):(w(),$(Ae,{key:3},[!O(vt)&&!O(n)&&f.value?(w(),$(Ae,{key:0},[Y(O(f)),Y(gr)],64)):ge("v-if",!0),O(vt)?(w(),$("button",{key:1,class:"slidev-icon-btn",title:"Show presenter cursor",onClick:m[5]||(m[5]=be=>Ni.value=!O(Ni))},[O(Ni)?(w(),H(A,{key:0})):(w(),H(L,{key:1,class:"opacity-50"}))])):ge("v-if",!0)],64)),(!O($e).drawings.presenterOnly||O(vt))&&!O(hn)?(w(),$(Ae,{key:4},[i("button",{class:"slidev-icon-btn relative",title:"Drawing",onClick:m[6]||(m[6]=be=>tn.value=!O(tn))},[Y(U),O(tn)?(w(),$("div",{key:0,class:"absolute left-1 right-1 bottom-0 h-0.7 rounded-full",style:Xe({background:O(ls).color})},null,4)):ge("v-if",!0)]),Y(gr)],64)):ge("v-if",!0),O(hn)?ge("v-if",!0):(w(),$(Ae,{key:5},[O(vt)?(w(),H(ne,{key:0,to:l.value,class:"slidev-icon-btn",title:"Play Mode"},{default:W(()=>[Y(N)]),_:1},8,["to"])):ge("v-if",!0),O(MF)?(w(),H(ne,{key:1,to:a.value,class:"slidev-icon-btn",title:"Presenter Mode"},{default:W(()=>[Y(le)]),_:1},8,["to"])):ge("v-if",!0),ge("v-if",!0)],64)),(w(),$(Ae,{key:6},[O($e).download?(w(),$("button",{key:0,class:"slidev-icon-btn",onClick:m[8]||(m[8]=(...be)=>O(Ha)&&O(Ha)(...be))},[Y(Z)])):ge("v-if",!0)],64)),!O(vt)&&O($e).info&&!O(hn)?(w(),$("button",{key:7,class:"slidev-icon-btn",onClick:m[9]||(m[9]=be=>wo.value=!O(wo))},[Y(me)])):ge("v-if",!0),!O(vt)&&!O(hn)?(w(),H(k2,{key:8},{button:W(()=>[i("button",C2,[Y(ve)])]),menu:W(()=>[Y(b2)]),_:1})):ge("v-if",!0),O(hn)?ge("v-if",!0):(w(),H(gr,{key:9})),i("div",A2,[i("div",$2,[v(bn(O(He))+" ",1),i("span",F2,"/ "+bn(O(LF)),1)])]),Y(O(E2))],34)],512)}}}),I2=G(O2,[["__file","/home/ben/Workspace/demystifying-unicode/node_modules/@slidev/client/internals/NavControls.vue"]]),Kp={render(){return[]}},Gp={render(){return[]}},U2={key:0,class:"absolute top-0 left-0 right-0 bottom-0 pointer-events-none text-xl"},P2=ke({__name:"PresenterMouse",setup(e){return R(K),(t,n)=>{const s=zp;return O(Mi).cursor?(w(),$("div",U2,[Y(s,{class:"absolute",style:Xe({left:`${O(Mi).cursor.x}%`,top:`${O(Mi).cursor.y}%`})},null,8,["style"])])):ge("v-if",!0)}}}),M2=G(P2,[["__file","/home/ben/Workspace/demystifying-unicode/node_modules/@slidev/client/internals/PresenterMouse.vue"]]),L2=ke({__name:"SlidesShow",props:{context:{type:String,required:!0}},setup(e){R(K),ye(ft,()=>{var s,o;(s=ft.value)!=null&&s.meta&&ft.value.meta.preload!==!1&&(ft.value.meta.__preloaded=!0),(o=Hi.value)!=null&&o.meta&&Hi.value.meta.preload!==!1&&(Hi.value.meta.__preloaded=!0)},{immediate:!0});const t=rn();Ln(()=>import("./DrawingLayer-b90c8618.js"),[]).then(s=>t.value=s.default);const n=I(()=>Ge.filter(s=>{var o;return((o=s.meta)==null?void 0:o.__preloaded)||s===ft.value}));return(s,o)=>(w(),$(Ae,null,[ge(" Global Bottom "),Y(O(Gp)),ge(" Slides "),Y(a0,Vt(O(HF),{id:"slideshow",tag:"div"}),{default:W(()=>[(w(!0),$(Ae,null,ks(n.value,r=>{var a;return Xt((w(),H(O(Pl),{key:r.path,is:r==null?void 0:r.component,clicks:r===O(ft)?O(Mt):0,"clicks-elements":((a=r.meta)==null?void 0:a.__clicksElements)||[],"clicks-disabled":!1,class:De(O(Ul)(r)),route:r,context:s.context},null,8,["is","clicks","clicks-elements","class","route","context"])),[[Df,r===O(ft)]])}),128))]),_:1},16),ge(" Global Top "),Y(O(Kp)),t.value?(w(),H(O(t),{key:0})):ge("v-if",!0),O(vt)?ge("v-if",!0):(w(),H(M2,{key:1}))],64))}});const B2=G(L2,[["__scopeId","data-v-afb4231e"],["__file","/home/ben/Workspace/demystifying-unicode/node_modules/@slidev/client/internals/SlidesShow.vue"]]),D2=ke({__name:"PrintStyle",setup(e){R(K);function t(n,{slots:s}){if(s.default)return Je("style",s.default())}return(n,s)=>(w(),H(t,null,{default:W(()=>[v(" @page { size: "+bn(O(Mn))+"px "+bn(O(El))+"px; margin: 0px; } ",1)]),_:1}))}}),Yp=G(D2,[["__file","/home/ben/Workspace/demystifying-unicode/node_modules/@slidev/client/internals/PrintStyle.vue"]]),R2=ke({__name:"Play",setup(e){R(K),ww();const t=z();function n(r){var a;ku.value||((a=r.target)==null?void 0:a.id)==="slide-container"&&(r.screenX/window.innerWidth>.6?Dn():Rn())}VF(t);const s=I(()=>Ob.value||ku.value);rn();const o=rn();return Ln(()=>import("./DrawingControls-acd029de.js"),[]).then(r=>o.value=r.default),(r,a)=>(w(),$(Ae,null,[O(vn)?(w(),H(Yp,{key:0})):ge("v-if",!0),i("div",{id:"page-root",ref_key:"root",ref:t,class:"grid grid-cols-[1fr_max-content]",style:Xe(O(Cl))},[Y(Mp,{class:"w-full h-full",style:Xe({background:"var(--slidev-slide-container-background, black)"}),width:O(vn)?O(ys).width.value:void 0,scale:O(Sr),onPointerdown:n},{default:W(()=>[Y(B2,{context:"slide"})]),controls:W(()=>[i("div",{class:De(["absolute bottom-0 left-0 transition duration-300 opacity-0 hover:opacity-100",[s.value?"opacity-100 right-0":"opacity-0 p-2",O(Lo)?"pointer-events-none":""]])},[Y(I2,{class:"m-auto",persist:s.value},null,8,["persist"])],2),!O($e).drawings.presenterOnly&&!O(hn)&&o.value?(w(),H(O(o),{key:0,class:"ml-0"})):ge("v-if",!0)]),_:1},8,["style","width","scale"]),ge("v-if",!0)],4),Y(Bx)],64))}}),N2=G(R2,[["__file","/home/ben/Workspace/demystifying-unicode/node_modules/@slidev/client/internals/Play.vue"]]);/*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT */function Zp(e){return typeof e>"u"||e===null}function j2(e){return typeof e=="object"&&e!==null}function W2(e){return Array.isArray(e)?e:Zp(e)?[]:[e]}function q2(e,t){var n,s,o,r;if(t)for(r=Object.keys(t),n=0,s=r.length;n<s;n+=1)o=r[n],e[o]=t[o];return e}function H2(e,t){var n="",s;for(s=0;s<t;s+=1)n+=e;return n}function V2(e){return e===0&&Number.NEGATIVE_INFINITY===1/e}var z2=Zp,K2=j2,G2=W2,Y2=H2,Z2=V2,Q2=q2,Ll={isNothing:z2,isObject:K2,toArray:G2,repeat:Y2,isNegativeZero:Z2,extend:Q2};function Qp(e,t){var n="",s=e.reason||"(unknown reason)";return e.mark?(e.mark.name&&(n+='in "'+e.mark.name+'" '),n+="("+(e.mark.line+1)+":"+(e.mark.column+1)+")",!t&&e.mark.snippet&&(n+=`

`+e.mark.snippet),s+" "+n):s}function Do(e,t){Error.call(this),this.name="YAMLException",this.reason=e,this.mark=t,this.message=Qp(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}Do.prototype=Object.create(Error.prototype);Do.prototype.constructor=Do;Do.prototype.toString=function(t){return this.name+": "+Qp(this,t)};var is=Do,J2=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],X2=["scalar","sequence","mapping"];function e3(e){var t={};return e!==null&&Object.keys(e).forEach(function(n){e[n].forEach(function(s){t[String(s)]=n})}),t}function t3(e,t){if(t=t||{},Object.keys(t).forEach(function(n){if(J2.indexOf(n)===-1)throw new is('Unknown option "'+n+'" is met in definition of "'+e+'" YAML type.')}),this.options=t,this.tag=e,this.kind=t.kind||null,this.resolve=t.resolve||function(){return!0},this.construct=t.construct||function(n){return n},this.instanceOf=t.instanceOf||null,this.predicate=t.predicate||null,this.represent=t.represent||null,this.representName=t.representName||null,this.defaultStyle=t.defaultStyle||null,this.multi=t.multi||!1,this.styleAliases=e3(t.styleAliases||null),X2.indexOf(this.kind)===-1)throw new is('Unknown kind "'+this.kind+'" is specified for "'+e+'" YAML type.')}var at=t3;function Nu(e,t){var n=[];return e[t].forEach(function(s){var o=n.length;n.forEach(function(r,a){r.tag===s.tag&&r.kind===s.kind&&r.multi===s.multi&&(o=a)}),n[o]=s}),n}function n3(){var e={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}},t,n;function s(o){o.multi?(e.multi[o.kind].push(o),e.multi.fallback.push(o)):e[o.kind][o.tag]=e.fallback[o.tag]=o}for(t=0,n=arguments.length;t<n;t+=1)arguments[t].forEach(s);return e}function Wa(e){return this.extend(e)}Wa.prototype.extend=function(t){var n=[],s=[];if(t instanceof at)s.push(t);else if(Array.isArray(t))s=s.concat(t);else if(t&&(Array.isArray(t.implicit)||Array.isArray(t.explicit)))t.implicit&&(n=n.concat(t.implicit)),t.explicit&&(s=s.concat(t.explicit));else throw new is("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");n.forEach(function(r){if(!(r instanceof at))throw new is("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(r.loadKind&&r.loadKind!=="scalar")throw new is("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(r.multi)throw new is("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),s.forEach(function(r){if(!(r instanceof at))throw new is("Specified list of YAML types (or a single Type object) contains a non-Type object.")});var o=Object.create(Wa.prototype);return o.implicit=(this.implicit||[]).concat(n),o.explicit=(this.explicit||[]).concat(s),o.compiledImplicit=Nu(o,"implicit"),o.compiledExplicit=Nu(o,"explicit"),o.compiledTypeMap=n3(o.compiledImplicit,o.compiledExplicit),o};var s3=Wa,o3=new at("tag:yaml.org,2002:str",{kind:"scalar",construct:function(e){return e!==null?e:""}}),r3=new at("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(e){return e!==null?e:[]}}),i3=new at("tag:yaml.org,2002:map",{kind:"mapping",construct:function(e){return e!==null?e:{}}}),a3=new s3({explicit:[o3,r3,i3]});function l3(e){if(e===null)return!0;var t=e.length;return t===1&&e==="~"||t===4&&(e==="null"||e==="Null"||e==="NULL")}function c3(){return null}function u3(e){return e===null}var d3=new at("tag:yaml.org,2002:null",{kind:"scalar",resolve:l3,construct:c3,predicate:u3,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"});function f3(e){if(e===null)return!1;var t=e.length;return t===4&&(e==="true"||e==="True"||e==="TRUE")||t===5&&(e==="false"||e==="False"||e==="FALSE")}function p3(e){return e==="true"||e==="True"||e==="TRUE"}function h3(e){return Object.prototype.toString.call(e)==="[object Boolean]"}var m3=new at("tag:yaml.org,2002:bool",{kind:"scalar",resolve:f3,construct:p3,predicate:h3,represent:{lowercase:function(e){return e?"true":"false"},uppercase:function(e){return e?"TRUE":"FALSE"},camelcase:function(e){return e?"True":"False"}},defaultStyle:"lowercase"});function g3(e){return 48<=e&&e<=57||65<=e&&e<=70||97<=e&&e<=102}function y3(e){return 48<=e&&e<=55}function v3(e){return 48<=e&&e<=57}function _3(e){if(e===null)return!1;var t=e.length,n=0,s=!1,o;if(!t)return!1;if(o=e[n],(o==="-"||o==="+")&&(o=e[++n]),o==="0"){if(n+1===t)return!0;if(o=e[++n],o==="b"){for(n++;n<t;n++)if(o=e[n],o!=="_"){if(o!=="0"&&o!=="1")return!1;s=!0}return s&&o!=="_"}if(o==="x"){for(n++;n<t;n++)if(o=e[n],o!=="_"){if(!g3(e.charCodeAt(n)))return!1;s=!0}return s&&o!=="_"}if(o==="o"){for(n++;n<t;n++)if(o=e[n],o!=="_"){if(!y3(e.charCodeAt(n)))return!1;s=!0}return s&&o!=="_"}}if(o==="_")return!1;for(;n<t;n++)if(o=e[n],o!=="_"){if(!v3(e.charCodeAt(n)))return!1;s=!0}return!(!s||o==="_")}function b3(e){var t=e,n=1,s;if(t.indexOf("_")!==-1&&(t=t.replace(/_/g,"")),s=t[0],(s==="-"||s==="+")&&(s==="-"&&(n=-1),t=t.slice(1),s=t[0]),t==="0")return 0;if(s==="0"){if(t[1]==="b")return n*parseInt(t.slice(2),2);if(t[1]==="x")return n*parseInt(t.slice(2),16);if(t[1]==="o")return n*parseInt(t.slice(2),8)}return n*parseInt(t,10)}function w3(e){return Object.prototype.toString.call(e)==="[object Number]"&&e%1===0&&!Ll.isNegativeZero(e)}var x3=new at("tag:yaml.org,2002:int",{kind:"scalar",resolve:_3,construct:b3,predicate:w3,represent:{binary:function(e){return e>=0?"0b"+e.toString(2):"-0b"+e.toString(2).slice(1)},octal:function(e){return e>=0?"0o"+e.toString(8):"-0o"+e.toString(8).slice(1)},decimal:function(e){return e.toString(10)},hexadecimal:function(e){return e>=0?"0x"+e.toString(16).toUpperCase():"-0x"+e.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),k3=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function S3(e){return!(e===null||!k3.test(e)||e[e.length-1]==="_")}function T3(e){var t,n;return t=e.replace(/_/g,"").toLowerCase(),n=t[0]==="-"?-1:1,"+-".indexOf(t[0])>=0&&(t=t.slice(1)),t===".inf"?n===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:t===".nan"?NaN:n*parseFloat(t,10)}var E3=/^[-+]?[0-9]+e/;function C3(e,t){var n;if(isNaN(e))switch(t){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===e)switch(t){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===e)switch(t){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(Ll.isNegativeZero(e))return"-0.0";return n=e.toString(10),E3.test(n)?n.replace("e",".e"):n}function A3(e){return Object.prototype.toString.call(e)==="[object Number]"&&(e%1!==0||Ll.isNegativeZero(e))}var $3=new at("tag:yaml.org,2002:float",{kind:"scalar",resolve:S3,construct:T3,predicate:A3,represent:C3,defaultStyle:"lowercase"}),F3=a3.extend({implicit:[d3,m3,x3,$3]}),O3=F3,Jp=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),Xp=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function I3(e){return e===null?!1:Jp.exec(e)!==null||Xp.exec(e)!==null}function U3(e){var t,n,s,o,r,a,l,c=0,u=null,d,f,p;if(t=Jp.exec(e),t===null&&(t=Xp.exec(e)),t===null)throw new Error("Date resolve error");if(n=+t[1],s=+t[2]-1,o=+t[3],!t[4])return new Date(Date.UTC(n,s,o));if(r=+t[4],a=+t[5],l=+t[6],t[7]){for(c=t[7].slice(0,3);c.length<3;)c+="0";c=+c}return t[9]&&(d=+t[10],f=+(t[11]||0),u=(d*60+f)*6e4,t[9]==="-"&&(u=-u)),p=new Date(Date.UTC(n,s,o,r,a,l,c)),u&&p.setTime(p.getTime()-u),p}function P3(e){return e.toISOString()}var M3=new at("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:I3,construct:U3,instanceOf:Date,represent:P3});function L3(e){return e==="<<"||e===null}var B3=new at("tag:yaml.org,2002:merge",{kind:"scalar",resolve:L3}),Bl=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function D3(e){if(e===null)return!1;var t,n,s=0,o=e.length,r=Bl;for(n=0;n<o;n++)if(t=r.indexOf(e.charAt(n)),!(t>64)){if(t<0)return!1;s+=6}return s%8===0}function R3(e){var t,n,s=e.replace(/[\r\n=]/g,""),o=s.length,r=Bl,a=0,l=[];for(t=0;t<o;t++)t%4===0&&t&&(l.push(a>>16&255),l.push(a>>8&255),l.push(a&255)),a=a<<6|r.indexOf(s.charAt(t));return n=o%4*6,n===0?(l.push(a>>16&255),l.push(a>>8&255),l.push(a&255)):n===18?(l.push(a>>10&255),l.push(a>>2&255)):n===12&&l.push(a>>4&255),new Uint8Array(l)}function N3(e){var t="",n=0,s,o,r=e.length,a=Bl;for(s=0;s<r;s++)s%3===0&&s&&(t+=a[n>>18&63],t+=a[n>>12&63],t+=a[n>>6&63],t+=a[n&63]),n=(n<<8)+e[s];return o=r%3,o===0?(t+=a[n>>18&63],t+=a[n>>12&63],t+=a[n>>6&63],t+=a[n&63]):o===2?(t+=a[n>>10&63],t+=a[n>>4&63],t+=a[n<<2&63],t+=a[64]):o===1&&(t+=a[n>>2&63],t+=a[n<<4&63],t+=a[64],t+=a[64]),t}function j3(e){return Object.prototype.toString.call(e)==="[object Uint8Array]"}var W3=new at("tag:yaml.org,2002:binary",{kind:"scalar",resolve:D3,construct:R3,predicate:j3,represent:N3}),q3=Object.prototype.hasOwnProperty,H3=Object.prototype.toString;function V3(e){if(e===null)return!0;var t=[],n,s,o,r,a,l=e;for(n=0,s=l.length;n<s;n+=1){if(o=l[n],a=!1,H3.call(o)!=="[object Object]")return!1;for(r in o)if(q3.call(o,r))if(!a)a=!0;else return!1;if(!a)return!1;if(t.indexOf(r)===-1)t.push(r);else return!1}return!0}function z3(e){return e!==null?e:[]}var K3=new at("tag:yaml.org,2002:omap",{kind:"sequence",resolve:V3,construct:z3}),G3=Object.prototype.toString;function Y3(e){if(e===null)return!0;var t,n,s,o,r,a=e;for(r=new Array(a.length),t=0,n=a.length;t<n;t+=1){if(s=a[t],G3.call(s)!=="[object Object]"||(o=Object.keys(s),o.length!==1))return!1;r[t]=[o[0],s[o[0]]]}return!0}function Z3(e){if(e===null)return[];var t,n,s,o,r,a=e;for(r=new Array(a.length),t=0,n=a.length;t<n;t+=1)s=a[t],o=Object.keys(s),r[t]=[o[0],s[o[0]]];return r}var Q3=new at("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:Y3,construct:Z3}),J3=Object.prototype.hasOwnProperty;function X3(e){if(e===null)return!0;var t,n=e;for(t in n)if(J3.call(n,t)&&n[t]!==null)return!1;return!0}function eS(e){return e!==null?e:{}}var tS=new at("tag:yaml.org,2002:set",{kind:"mapping",resolve:X3,construct:eS});O3.extend({implicit:[M3,B3],explicit:[W3,K3,Q3,tS]});function ju(e){return e===48?"\0":e===97?"\x07":e===98?"\b":e===116||e===9?"	":e===110?`
`:e===118?"\v":e===102?"\f":e===114?"\r":e===101?"\x1B":e===32?" ":e===34?'"':e===47?"/":e===92?"\\":e===78?"":e===95?" ":e===76?"\u2028":e===80?"\u2029":""}var nS=new Array(256),sS=new Array(256);for(var Is=0;Is<256;Is++)nS[Is]=ju(Is)?1:0,sS[Is]=ju(Is);function oS(e){return Array.from(new Set(e))}function Wu(...e){let t,n,s;e.length===1?(t=0,s=1,[n]=e):[t,n,s=1]=e;const o=[];let r=t;for(;r<n;)o.push(r),r+=s||1;return o}function eh(e,t){if(!t||t==="all"||t==="*")return Wu(1,e+1);const n=[];for(const s of t.split(/[,;]/g))if(!s.includes("-"))n.push(+s);else{const[o,r]=s.split("-",2);n.push(...Wu(+o,r?+r+1:e+1))}return oS(n).filter(s=>s<=e).sort((s,o)=>s-o)}function th(e){const t=I(()=>e.value.path),n=I(()=>Ge.length),s=I(()=>Number.parseInt(t.value.split(/\//g).slice(-1)[0])||1),o=I(()=>vi(s.value)),r=I(()=>Ge.find(p=>p.path===`${s.value}`)),a=I(()=>{var p,h,m;return(m=(h=(p=r.value)==null?void 0:p.meta)==null?void 0:h.slide)==null?void 0:m.id}),l=I(()=>{var p,h;return((h=(p=r.value)==null?void 0:p.meta)==null?void 0:h.layout)||(s.value===1?"cover":"default")}),c=I(()=>Ge.find(p=>p.path===`${Math.min(Ge.length,s.value+1)}`)),u=I(()=>Ge.filter(p=>{var h,m;return(m=(h=p.meta)==null?void 0:h.slide)==null?void 0:m.title}).reduce((p,h)=>(Dl(p,h),p),[])),d=I(()=>Rl(u.value,r.value)),f=I(()=>Nl(d.value));return{route:e,path:t,total:n,currentPage:s,currentPath:o,currentRoute:r,currentSlideId:a,currentLayout:l,nextRoute:c,rawTree:u,treeWithActiveStatuses:d,tree:f,downloadPDF:Ha,next:Dn,nextSlide:Ro,openInEditor:zF,prev:Rn,prevSlide:No}}function nh(e,t,n){const s=z(0);ot(()=>{bt.afterEach(async()=>{await ot(),s.value+=1})});const o=I(()=>{var c,u;return s.value,((u=(c=t.value)==null?void 0:c.meta)==null?void 0:u.__clicksElements)||[]}),r=I(()=>{var c,u;return+(((u=(c=t.value)==null?void 0:c.meta)==null?void 0:u.clicks)??o.value.length)}),a=I(()=>n.value<Ge.length-1||e.value<r.value),l=I(()=>n.value>1||e.value>0);return{clicks:e,clicksElements:o,clicksTotal:r,hasNext:a,hasPrev:l}}const rS=["id"],iS=ke({__name:"PrintSlideClick",props:{clicks:{type:Number,required:!0},clicksElements:{type:Array,required:!1},nav:{type:null,required:!0},route:{type:null,required:!0}},emits:["update:clicksElements"],setup(e,{emit:t}){const n=e,s=en(n,"clicksElements",t),o=I(()=>({height:`${El}px`,width:`${Mn}px`})),r=rn();Ln(()=>Promise.resolve().then(()=>Fw),void 0).then(u=>r.value=u.default);const a=I(()=>n.clicks),l=nh(a,n.nav.currentRoute,n.nav.currentPage),c=I(()=>`${n.route.path.toString().padStart(3,"0")}-${(a.value+1).toString().padStart(2,"0")}`);return Tt(K,qe({nav:{...n.nav,...l},configs:$e,themeConfigs:I(()=>$e.themeConfig)})),(u,d)=>{var f;return w(),$("div",{id:c.value,class:"print-slide-container",style:Xe(o.value)},[Y(O(Gp)),Y(O(Pl),{is:(f=u.route)==null?void 0:f.component,"clicks-elements":O(s),"onUpdate:clicksElements":d[0]||(d[0]=p=>Fe(s)?s.value=p:null),clicks:a.value,"clicks-disabled":!1,class:De(O(Ul)(u.route)),route:u.route},null,8,["is","clicks-elements","clicks","class","route"]),r.value?(w(),H(O(r),{key:0,page:+u.route.path},null,8,["page"])):ge("v-if",!0),Y(O(Kp))],12,rS)}}}),qu=G(iS,[["__file","/home/ben/Workspace/demystifying-unicode/node_modules/@slidev/client/internals/PrintSlideClick.vue"]]),aS=ke({__name:"PrintSlide",props:{route:{type:null,required:!0}},setup(e){var r;const t=e;R(K);const n=z(((r=t.route.meta)==null?void 0:r.__clicksElements)||[]),s=I(()=>t.route),o=th(s);return(a,l)=>(w(),$(Ae,null,[Y(qu,{"clicks-elements":n.value,"onUpdate:clicksElements":l[0]||(l[0]=c=>n.value=c),clicks:0,nav:O(o),route:s.value},null,8,["clicks-elements","nav","route"]),O(xo)?ge("v-if",!0):(w(!0),$(Ae,{key:0},ks(n.value.length,c=>(w(),H(qu,{key:c,clicks:c,nav:O(o),route:s.value},null,8,["clicks","nav","route"]))),128))],64))}}),lS=G(aS,[["__file","/home/ben/Workspace/demystifying-unicode/node_modules/@slidev/client/internals/PrintSlide.vue"]]),cS={id:"print-content"},uS=ke({__name:"PrintContainer",props:{width:{type:Number,required:!0}},setup(e){const t=e;R(K);const n=I(()=>t.width),s=I(()=>t.width/Pn),o=I(()=>n.value/s.value),r=I(()=>o.value<Pn?n.value/Mn:s.value*Pn/Mn);let a=Ge;Bt.value.query.range&&(a=eh(a.length,Bt.value.query.range).map(u=>a[u-1]));const l=I(()=>({"select-none":!$e.selectable}));return Tt(Yf,r),(c,u)=>(w(),$("div",{id:"print-container",class:De(l.value)},[i("div",cS,[(w(!0),$(Ae,null,ks(O(a),d=>(w(),H(lS,{key:d.path,route:d},null,8,["route"]))),128))]),mt(c.$slots,"controls")],2))}});const dS=G(uS,[["__file","/home/ben/Workspace/demystifying-unicode/node_modules/@slidev/client/internals/PrintContainer.vue"]]),fS=ke({__name:"Print",setup(e){return R(K),xs(()=>{vn?document.body.parentNode.classList.add("print"):document.body.parentNode.classList.remove("print")}),(t,n)=>(w(),$(Ae,null,[O(vn)?(w(),H(Yp,{key:0})):ge("v-if",!0),i("div",{id:"page-root",class:"grid grid-cols-[1fr_max-content]",style:Xe(O(Cl))},[Y(dS,{class:"w-full h-full",style:Xe({background:"var(--slidev-slide-container-background, black)"}),width:O(ys).width.value},null,8,["style","width"])],4)],64))}});const pS=G(fS,[["__file","/home/ben/Workspace/demystifying-unicode/node_modules/@slidev/client/internals/Print.vue"]]);function Hu(e){return e.startsWith("/")?"/"+e.slice(1):e}function hS(e,t=!1){const n=e&&["#","rgb","hsl"].some(o=>e.indexOf(o)===0),s={background:n?e:void 0,color:e&&!n?"white":void 0,backgroundImage:n?void 0:e?t?`linear-gradient(#0005, #0008), url(${Hu(e)})`:`url("${Hu(e)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return s.background||delete s.background,s}const mS={class:"my-auto w-full"},gS=ke({__name:"cover",props:{background:{default:"https://source.unsplash.com/collection/94734566/1920x1080"}},setup(e){const t=e;R(K);const n=I(()=>hS(t.background,!0));return(s,o)=>(w(),$("div",{class:"slidev-layout cover text-center",style:Xe(n.value)},[i("div",mS,[mt(s.$slots,"default")])],4))}}),zs=G(gS,[["__file","/home/ben/Workspace/demystifying-unicode/node_modules/@slidev/theme-seriph/layouts/cover.vue"]]),yS=i("h1",null,"Demystifying Unicode",-1),vS=i("p",null,"Unicode, Rust, quirks, and way too much detail.",-1),_S={__name:"1",setup(e){const t={theme:"seriph",background:"https://source.unsplash.com/collection/94734566/1920x1080",class:"text-center",highlighter:"shiki",lineNumbers:!0,info:`## Unicode, Rust, quirks, and way too much detail.
`,drawings:{persist:!1},transition:"slide-left",hideInToc:!0};return R(K),(n,s)=>(w(),H(zs,ue(ce(t)),{default:W(()=>[yS,vS]),_:1},16))}},bS=G(_S,[["__file","/@slidev/slides/1.md"]]),wS={class:"slidev-layout default"},xS={__name:"default",setup(e){return R(K),(t,n)=>(w(),$("div",wS,[mt(t.$slots,"default")]))}},Re=G(xS,[["__file","/home/ben/Workspace/demystifying-unicode/node_modules/@slidev/client/layouts/default.vue"]]),kS=i("h1",null,"Some sorta outline",-1),SS=i("ul",null,[i("li",null,"We learn some things about Computers"),i("li",null,"Then, some things about unicode"),i("li",null,"And, some things about unicode in rust"),i("li",null,"Some things you only need to know when you need to know")],-1),TS={__name:"2",setup(e){const t={hideInToc:!0};return R(K),(n,s)=>(w(),H(Re,ue(ce(t)),{default:W(()=>[kS,SS]),_:1},16))}},ES=G(TS,[["__file","/@slidev/slides/2.md"]]),CS=["href","innerHTML"],AS=["href"],$S=ke({__name:"Link",props:{to:{type:[Number,String],required:!0},title:{type:String,required:!1}},setup(e){return R(K),(t,n)=>{const s=Ns("RouterLink");return!O(vn)&&t.title?(w(),H(s,{key:0,to:String(t.to),onClick:n[0]||(n[0]=o=>o.target.blur()),innerHTML:t.title},null,8,["to","innerHTML"])):!O(vn)&&!t.title?(w(),H(s,{key:1,to:String(t.to),onClick:n[1]||(n[1]=o=>o.target.blur())},{default:W(()=>[mt(t.$slots,"default")]),_:3},8,["to"])):O(vn)&&t.title?(w(),$("a",{key:2,href:`#${t.to}`,innerHTML:t.title},null,8,CS)):(w(),$("a",{key:3,href:`#${t.to}`},[mt(t.$slots,"default")],8,AS))}}}),FS=G($S,[["__file","/home/ben/Workspace/demystifying-unicode/node_modules/@slidev/client/builtin/Link.vue"]]),OS={key:0},IS={key:1},US={key:2},PS={key:3},MS={key:4},LS={key:5},BS={key:6},DS={key:7},RS={key:8},NS={key:9},jS={key:10},WS={key:11},qS={key:12},HS={key:13},VS={key:14},zS={key:15},KS={key:16},GS={key:17},YS={key:18},ZS={key:19},QS={key:20},JS={key:21},XS={key:22},e8={key:23},t8={key:24},n8={key:25},s8={key:26},o8={key:27},r8={key:28},i8={key:29},a8={key:30},l8={key:31},c8={key:32},u8={key:33},d8={key:34},f8={key:35},p8={key:36},h8={key:37},m8={key:38},g8={key:39},y8={key:40},v8=i("code",null,"unsafe",-1),_8={key:41},b8={key:42},w8={key:43},x8={key:44},k8={key:45},S8={key:46},T8={key:47},E8={key:48},C8={key:49},A8=ke({__name:"titles",props:{no:{type:[Number,String],required:!0}},setup(e){return(t,n)=>(w(),$("div",null,[+t.no==1?(w(),$("p",OS,"Demystifying Unicode")):+t.no==2?(w(),$("p",IS,"Some sorta outline")):+t.no==3?(w(),$("p",US,"Table of contents")):+t.no==4?(w(),$("p",PS,"History")):+t.no==5?(w(),$("p",MS,"A bit (🥁鈸) of fundamentals")):+t.no==6?(w(),$("p",LS,"Abstraction")):+t.no==7?(w(),$("p",BS,"Characters")):+t.no==8?(w(),$("p",DS,"Competing standards")):+t.no==9?(w(),$("p",RS,"About ol ASCII")):+t.no==10?(w(),$("p",NS,"A world before encoding/before the web?")):+t.no==11?(w(),$("p",jS,"undefined")):+t.no==12?(w(),$("p",WS,"undefined")):+t.no==13?(w(),$("p",qS,"Unicode")):+t.no==14?(w(),$("p",HS,"Why Unicode?")):+t.no==15?(w(),$("p",VS,"Unicode to the resque")):+t.no==16?(w(),$("p",zS,"New Terminology")):+t.no==17?(w(),$("p",KS,"Glyphemes")):+t.no==18?(w(),$("p",GS,"What is the difference between")):+t.no==19?(w(),$("p",YS,"undefined")):+t.no==20?(w(),$("p",ZS,"undefined")):+t.no==21?(w(),$("p",QS,"Encoding")):+t.no==22?(w(),$("p",JS,"Unicode has 5 Encodings!")):+t.no==23?(w(),$("p",XS,"Important")):+t.no==24?(w(),$("p",e8,"UTF-8 is the king of the web")):+t.no==25?(w(),$("p",t8,"Nuts and bolts of UTF-8")):+t.no==26?(w(),$("p",n8,"Let’s encode!")):+t.no==27?(w(),$("p",s8,"Let’s encode!")):+t.no==28?(w(),$("p",o8,"Summary")):+t.no==29?(w(),$("p",r8,"Unicode in Rust")):+t.no==30?(w(),$("p",i8,"undefined")):+t.no==31?(w(),$("p",a8,"undefined")):+t.no==32?(w(),$("p",l8,"String slices")):+t.no==33?(w(),$("p",c8,"Lets make some strings")):+t.no==34?(w(),$("p",u8,"Using strings in Rust")):+t.no==35?(w(),$("p",d8,"Creating Strings")):+t.no==36?(w(),$("p",f8,"UTF8Error")):+t.no==37?(w(),$("p",p8,"Conventially UTF-8 vs. Gaurantee")):+t.no==38?(w(),$("p",h8,"Where Enforced UTF-8 can go wrong")):+t.no==39?(w(),$("p",m8,"Reading and Writing files")):+t.no==40?(w(),$("p",g8,"Standards - and why we follow them")):+t.no==41?(w(),$("p",y8,[v8,v(" is unsafe")])):+t.no==42?(w(),$("p",_8,"Summary")):+t.no==43?(w(),$("p",b8,"Quirks")):+t.no==44?(w(),$("p",w8,"Capitalization (AKA Casemapping and Casefolding)")):+t.no==45?(w(),$("p",x8,"Composition")):+t.no==46?(w(),$("p",k8,"Emoji Composition")):+t.no==47?(w(),$("p",S8,"Digraphs/ligatures")):+t.no==48?(w(),$("p",T8,"Flags")):+t.no==49?(w(),$("p",E8,"Unicode Tags")):+t.no==50?(w(),$("p",C8,"THE END")):ge("v-if",!0)]))}}),$8=G(A8,[["__file","/@slidev/titles.md"]]),F8=ke({__name:"TocList",props:{level:{type:Number,required:!0,default:1},list:{type:Array,required:!0},listClass:{type:[String,Array],required:!1}},setup(e){const t=e;R(K);const n=I(()=>[...Zf(t.listClass||[]),"slidev-toc-list",`slidev-toc-list-level-${t.level}`]);return(s,o)=>{const r=FS,a=Ns("TocList",!0);return s.list&&s.list.length>0?(w(),$("ol",{key:0,class:De(n.value)},[(w(!0),$(Ae,null,ks(s.list,l=>(w(),$("li",{key:l.path,class:De(["slidev-toc-item",[{"slidev-toc-item-active":l.active},{"slidev-toc-item-parent-active":l.activeParent}]])},[Y(r,{to:l.path},{default:W(()=>[Y(O($8),{no:l.path},null,8,["no"])]),_:2},1032,["to"]),l.children.length>0?(w(),H(a,{key:0,level:s.level+1,list:l.children,"list-class":s.listClass},null,8,["level","list","list-class"])):ge("v-if",!0)],2))),128))],2)):ge("v-if",!0)}}});const O8=G(F8,[["__file","/home/ben/Workspace/demystifying-unicode/node_modules/@slidev/client/builtin/TocList.vue"]]),I8=ke({__name:"Toc",props:{columns:{type:[String,Number],required:!1,default:1},listClass:{type:[String,Array],required:!1,default:""},maxDepth:{type:[String,Number],required:!1,default:1/0},minDepth:{type:[String,Number],required:!1,default:1},mode:{type:String,required:!1,default:"all"}},setup(e){const t=e,n=R(K);function s(l,c=1){if(c>Number(t.maxDepth))return[];if(c<Number(t.minDepth)){const u=l.find(d=>d.active||d.activeParent);return u?s(u.children,c+1):[]}return l.map(u=>({...u,children:s(u.children,c+1)}))}function o(l){return l.filter(c=>c.active||c.activeParent||c.hasActiveParent).map(c=>({...c,children:o(c.children)}))}function r(l){const c=l.some(u=>u.active||u.activeParent||u.hasActiveParent);return l.filter(()=>c).map(u=>({...u,children:r(u.children)}))}const a=I(()=>{const l=n==null?void 0:n.nav.tree;if(!l)return[];let c=s(l);return t.mode==="onlyCurrentTree"?c=o(c):t.mode==="onlySiblings"&&(c=r(c)),c});return(l,c)=>{const u=O8;return w(),$("div",{class:"slidev-toc",style:Xe(`column-count:${l.columns}`)},[Y(u,{level:1,list:a.value,"list-class":l.listClass},null,8,["list","list-class"])],4)}}}),U8=G(I8,[["__file","/home/ben/Workspace/demystifying-unicode/node_modules/@slidev/client/builtin/Toc.vue"]]),P8=i("h1",null,"Table of contents",-1),M8={__name:"3",setup(e){const t={hideInToc:!0};return R(K),(n,s)=>{const o=U8;return w(),H(Re,ue(ce(t)),{default:W(()=>[P8,Y(o,{maxDepth:"1"})]),_:1},16)}}},L8=G(M8,[["__file","/@slidev/slides/3.md"]]),B8=i("h1",null,"History",-1),D8={__name:"4",setup(e){const t={layout:"cover",hide:!1,srcSequence:"./pages/01-history.md"};return R(K),(n,s)=>(w(),H(zs,ue(ce(t)),{default:W(()=>[B8]),_:1},16))}},R8=G(D8,[["__file","/@slidev/slides/4.md"]]),N8=i("h2",null,"A bit (🥁鈸) of fundamentals",-1),j8=i("blockquote",null,[i("p",null,"Computers represent information as 1’s and 0’s"),i("ul",null,[i("li",null,"Literally everyone, since forever")])],-1),W8=i("p",null,"Multiple bits can be put together to make different structures.",-1),q8=i("ul",null,[i("li",null,"8 bits makes a byte"),i("li",null,"4/8 bytes makes a word on 32/64 bit architectures respectively")],-1),H8=i("p",null,[v("👆 Although unimportant for this talk, these things are the main language of a computer, bits, bytes, words. Compilers compile our code, so we can make more "),i("strong",null,"human"),v(" structures. Often the compilers optimise our code for thigns the computer understands.")],-1),V8={__name:"5",setup(e){const t={hide:!1,srcSequence:"./pages/01-history.md"};return R(K),(n,s)=>(w(),H(Re,ue(ce(t)),{default:W(()=>[N8,j8,W8,q8,H8]),_:1},16))}},z8=G(V8,[["__file","/@slidev/slides/5.md"]]),Vu=["ul","ol"],Es=ke({props:{depth:{type:[Number,String],default:1},every:{type:Number,default:1},at:{type:[Number,String],default:null},hide:{type:Boolean,default:!1},fade:{type:Boolean,default:!1}},render(){var l,c;const e=Rr("click"),t=Rr("after"),n=(u,d,f)=>Xt(u,[[d,f,"",{hide:this.hide,fade:this.fade}]]);let s=(c=(l=this.$slots).default)==null?void 0:c.call(l);if(!s)return;s=Zf(s);const o=(u,d=1)=>{let f=0;return[u.map(h=>{if(!an(h))return h;if(Vu.includes(h.type)&&Array.isArray(h.children)){const[m,_]=a(h.children,d+1);return f+=_,Je(h,{},[m])}return Je(h)}),f]};let r=0;const a=(u,d=1)=>{let f=0;return[u.map(h=>{if(!an(h)||h.type===it)return h;const m=f%this.every===0?e:t;let _,k=0;if(d<+this.depth&&Array.isArray(h.children)){const[S,b]=o(h.children,d);_=Je(h,{},[S]),k=b,f+=b+1}else _=Je(h),f++;const x=this.at!=null?Number(this.at)+Math.floor(r/this.every)+d:(d-1-k).toString();return r++,n(_,m,typeof x=="string"&&!x.startsWith("-")?`+${x}`:x)}),f]};return s.length===1&&Vu.includes(s[0].type)&&Array.isArray(s[0].children)?Je(s[0],{},[a(s[0].children)[0]]):a(s)[0]}}),Cs=ke({props:{at:{type:[Number,String],default:null},hide:{type:Boolean,default:!1},fade:{type:Boolean,default:!1}},render(){return Y(Es,{every:99999,at:this.at,hide:this.hide,fade:this.fade},{default:this.$slots.default})}}),K8=i("h2",null,"Abstraction",-1),G8=i("blockquote",null,[i("p",null,"Let’s make an abstraction so we can understand things better"),i("ul",null,[i("li",null,"Literally every developer, since forever")])],-1),Y8=i("p",null,[i("code",null,"C"),v(" originally abstracted things a little further:")],-1),Z8=i("ul",null,[i("li",null,[i("code",null,"bool"),v(" is a 1 bit")]),i("li",null,[i("code",null,"char"),v(" is a 8 bits")]),i("li",null,[i("code",null,"int"),v(" is ambiguous, however they solved that with: "),i("ul",null,[i("li",null,[i("code",null,"uint8_t"),v(" - unsigned 8bit integer")]),i("li",null,[i("code",null,"uint32_t"),v(" - unsigned 32bit integer")]),i("li",null,[i("code",null,"int8_t"),v(" - signed 8bit integer, 2’s compliment")]),i("li",null,"… etc, etc.")])]),i("li",null,[i("code",null,"long"),v(" also ambiguous, but >= "),i("code",null,"int")])],-1),Q8=i("p",null,[v("But - what really "),i("strong",null,"is"),v(" a "),i("code",null,"char"),v("?")],-1),J8=i("p",null,"And what really are characters?",-1),X8={__name:"6",setup(e){const t={hide:!1,srcSequence:"./pages/01-history.md"};return R(K),(n,s)=>{const o=Es,r=Cs;return w(),H(Re,ue(ce(t)),{default:W(()=>[K8,G8,Y8,Y(o,null,{default:W(()=>[Z8]),_:1}),Y(r,null,{default:W(()=>[Q8,J8]),_:1})]),_:1},16)}}},eT=G(X8,[["__file","/@slidev/slides/6.md"]]),tT=i("h2",null,"Characters",-1),nT=i("p",null,"Quiz time - what does this say:",-1),sT=i("pre",{class:"shiki-container"},[i("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{color:"#dbd7ca"}},"01101000 01100101 01101100 01101100 01101111 00100000")]),v(`
`),i("span",{class:"line"},[i("span",{style:{color:"#dbd7ca"}},"01110111 01101111 01110010 01101100 01100100")])])]),i("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{color:"#393a34"}},"01101000 01100101 01101100 01101100 01101111 00100000")]),v(`
`),i("span",{class:"line"},[i("span",{style:{color:"#393a34"}},"01110111 01101111 01110010 01101100 01100100")])])])],-1),oT=i("p",null,[v("The knowledge we share with computers: "),i("code",null,"00100000"),v(" = "),i("code",null,"32"),v(" = "),i("code",null," ")],-1),rT=i("p",null,"But there are more than 255 characters in different scripts. DIN 91379 includes:",-1),iT=i("table",null,[i("thead",null,[i("tr",null,[i("th"),i("th")])]),i("tbody",null,[i("tr",null,[i("td",null,"Base Latin Letters: 649"),i("td",null,"enl: 42")]),i("tr",null,[i("td",null,"Combinging Diacritics: 19"),i("td",null,"bnlreq: 17")]),i("tr",null,[i("td",null,"Greek Letters: 68"),i("td",null,"bnl: 59")]),i("tr",null,[i("td",null,"Cyrillic Letters: 61"),i("td",null,"bnlopt: 8")]),i("tr",null,[i("td"),i("td",null,"bnlnot: 2")])])],-1),aT={__name:"7",setup(e){const t={hide:!1,srcSequence:"./pages/01-history.md"};return R(K),(n,s)=>{const o=Cs;return w(),H(Re,ue(ce(t)),{default:W(()=>[tT,nT,sT,Y(o,null,{default:W(()=>[oT]),_:1}),Y(o,null,{default:W(()=>[rT,iT]),_:1})]),_:1},16)}}},lT=G(aT,[["__file","/@slidev/slides/7.md"]]),cT=i("h2",null,"Competing standards",-1),uT=i("p",null,"XKCD comic 927",-1),dT=i("p",null,"8 bits isn’t going to be enough.",-1),fT=i("ul",null,[i("li",null,[i("s",null,"ANSI (American National Standards Institue) Characters"),v(" Windows code pages, Code Page 437")]),i("li",null,"ASCII (American Standard Code for Information Interchange) Characters (QQ)")],-1),pT=i("p",null,"IBM decided that drawing UI’s was more important than people being able to write in their language",-1),hT=i("pre",{class:"shiki-container"},[i("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{color:"#dbd7ca"}},"┏━━━━━━━━━━━━━━━━━━┫ Prompt ┣━━━━━━━━━━━━━━━━┓")]),v(`
`),i("span",{class:"line"},[i("span",{style:{color:"#dbd7ca"}},"┃                                            ┃ ")]),v(`
`),i("span",{class:"line"},[i("span",{style:{color:"#dbd7ca"}},"┃ Do you want your langauge to be supported? ┃")]),v(`
`),i("span",{class:"line"},[i("span",{style:{color:"#dbd7ca"}},"┃                                            ┃ ")]),v(`
`),i("span",{class:"line"},[i("span",{style:{color:"#dbd7ca"}},"┗━━━━━━━━━━━━━━━━━━┫ No ┣━┫ >Nah not even< ┣━┛")])])]),i("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{color:"#393a34"}},"┏━━━━━━━━━━━━━━━━━━┫ Prompt ┣━━━━━━━━━━━━━━━━┓")]),v(`
`),i("span",{class:"line"},[i("span",{style:{color:"#393a34"}},"┃                                            ┃ ")]),v(`
`),i("span",{class:"line"},[i("span",{style:{color:"#393a34"}},"┃ Do you want your langauge to be supported? ┃")]),v(`
`),i("span",{class:"line"},[i("span",{style:{color:"#393a34"}},"┃                                            ┃ ")]),v(`
`),i("span",{class:"line"},[i("span",{style:{color:"#393a34"}},"┗━━━━━━━━━━━━━━━━━━┫ No ┣━┫ >Nah not even< ┣━┛")])])])],-1),mT=i("br",null,null,-1),gT=i("blockquote",null,[i("p",null,"Unicode has entered the chat")],-1),yT=i("br",null,null,-1),vT={__name:"8",setup(e){const t={hide:!1,srcSequence:"./pages/01-history.md"};return R(K),(n,s)=>(w(),H(Re,ue(ce(t)),{default:W(()=>[cT,uT,dT,fT,pT,hT,mT,gT,yT,v(" But first... ")]),_:1},16))}},_T=G(vT,[["__file","/@slidev/slides/8.md"]]),bT=i("h2",null,"About ol ASCII",-1),wT=i("ul",null,[i("li",null,[v("ASCII standardized 0x00…0x7F"),i("pre",{class:"shiki-container"},[i("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{color:"#dbd7ca"}},"␀␁␂␃␄␅␆␇␈␉␊␋␌␍␎␏")]),v(`
`),i("span",{class:"line"},[i("span",{style:{color:"#dbd7ca"}},"␐␑␒␓␔␕␖␗␘␙␚␛␜␝␞␟")]),v(`
`),i("span",{class:"line"},[i("span",{style:{color:"#dbd7ca"}},`␠!"#$%&'()*+,-./`)]),v(`
`),i("span",{class:"line"},[i("span",{style:{color:"#dbd7ca"}},"0123456789:;<=>?")]),v(`
`),i("span",{class:"line"},[i("span",{style:{color:"#dbd7ca"}},"@ABCDEFGHIJKLMNO")]),v(`
`),i("span",{class:"line"},[i("span",{style:{color:"#dbd7ca"}},"PQRSTUVWXYZ[\\]^_")]),v(`
`),i("span",{class:"line"},[i("span",{style:{color:"#dbd7ca"}},"`abcdefghijklmno")]),v(`
`),i("span",{class:"line"},[i("span",{style:{color:"#dbd7ca"}},"pqrstuvwxyz{|}~␡")])])]),i("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{color:"#393a34"}},"␀␁␂␃␄␅␆␇␈␉␊␋␌␍␎␏")]),v(`
`),i("span",{class:"line"},[i("span",{style:{color:"#393a34"}},"␐␑␒␓␔␕␖␗␘␙␚␛␜␝␞␟")]),v(`
`),i("span",{class:"line"},[i("span",{style:{color:"#393a34"}},`␠!"#$%&'()*+,-./`)]),v(`
`),i("span",{class:"line"},[i("span",{style:{color:"#393a34"}},"0123456789:;<=>?")]),v(`
`),i("span",{class:"line"},[i("span",{style:{color:"#393a34"}},"@ABCDEFGHIJKLMNO")]),v(`
`),i("span",{class:"line"},[i("span",{style:{color:"#393a34"}},"PQRSTUVWXYZ[\\]^_")]),v(`
`),i("span",{class:"line"},[i("span",{style:{color:"#393a34"}},"`abcdefghijklmno")]),v(`
`),i("span",{class:"line"},[i("span",{style:{color:"#393a34"}},"pqrstuvwxyz{|}~␡")])])])])]),i("li",null,"0x00…0x7F was common between many code pages"),i("li",null,[v("Which code page? Which "),i("code",null,"encoding"),v(" of bits makes what char?")])],-1),xT={__name:"9",setup(e){const t={hide:!1,srcSequence:"./pages/01-history.md"};return R(K),(n,s)=>{const o=Es;return w(),H(Re,ue(ce(t)),{default:W(()=>[bT,Y(o,null,{default:W(()=>[wT]),_:1})]),_:1},16)}}},kT=G(xT,[["__file","/@slidev/slides/9.md"]]),ST=i("h2",null,"A world before encoding/before the web?",-1),TT=i("p",null,"Be grug developer:",-1),ET=i("ul",null,[i("li",null,"I use IBM 437 because I’m writing DOS applications"),i("li",null,"Everyone else must use IBM 437, because they all speak english and like borders right?"),i("li",null,"Write once, run only on my machine")],-1),CT=i("p",null,"Hypothesis: When the world started going online…",-1),AT=i("p",null,"Dos world: IBM437",-1),$T=i("p",null,"Windows world: ISO-8859-1",-1),FT=i("footer",null,[i("p",null,[i("strong",null,"🌶 Facts"),v(": HTTP 1.1 used to use "),i("code",null,"ISO-8859-1"),v(" as the default charset 🤯")])],-1),OT={__name:"10",setup(e){const t={hide:!1,srcSequence:"./pages/01-history.md"};return R(K),(n,s)=>(w(),H(Re,ue(ce(t)),{default:W(()=>[ST,TT,ET,CT,AT,$T,FT]),_:1},16))}},IT=G(OT,[["__file","/@slidev/slides/10.md"]]),UT={class:"slidev-layout quote"},PT={class:"my-auto"},MT={__name:"quote",setup(e){return R(K),(t,n)=>(w(),$("div",UT,[i("div",PT,[mt(t.$slots,"default")])]))}},LT=G(MT,[["__file","/home/ben/Workspace/demystifying-unicode/node_modules/@slidev/theme-seriph/layouts/quote.vue"]]),BT=i("p",null,"The term charactor is ambiguous.",-1),DT=i("p",null,[i("code",null,"char"),v(" isn’t a character, it’s just a "),i("code",null,"uint8_t"),v(" with a fancy name.")],-1),RT={__name:"11",setup(e){const t={layout:"quote",hide:!1,srcSequence:"./pages/01-history.md"};return R(K),(n,s)=>(w(),H(LT,ue(ce(t)),{default:W(()=>[BT,DT]),_:1},16))}},NT=G(RT,[["__file","/@slidev/slides/11.md"]]),jT="/no_chars_yes_glyphs.jpg",WT={class:"slidev-layout center h-full grid place-content-center"},qT={class:"my-auto"},HT={__name:"center",setup(e){return R(K),(t,n)=>(w(),$("div",WT,[i("div",qT,[mt(t.$slots,"default")])]))}},wt=G(HT,[["__file","/home/ben/Workspace/demystifying-unicode/node_modules/@slidev/client/layouts/center.vue"]]),VT=i("img",{src:jT,alt:"Drake no: characters. Drake yes: glyphs"},null,-1),zT={__name:"12",setup(e){const t={layout:"center",hide:!1,srcSequence:"./pages/01-history.md"};return R(K),(n,s)=>(w(),H(wt,ue(ce(t)),{default:W(()=>[VT]),_:1},16))}},KT=G(zT,[["__file","/@slidev/slides/12.md"]]),GT=i("h1",null,"Unicode",-1),YT={__name:"13",setup(e){const t={layout:"cover",hide:!1,srcSequence:"./pages/02-unicode.md"};return R(K),(n,s)=>(w(),H(zs,ue(ce(t)),{default:W(()=>[GT]),_:1},16))}},ZT=G(YT,[["__file","/@slidev/slides/13.md"]]),QT=i("h2",null,"Why Unicode?",-1),JT=i("ol",null,[i("li",null,"Reliance on code page/charmap defaults per system"),i("li",null,"Code page duplication/lack of standardisation"),i("li",null,'Concept of "Encoding" was lacking'),i("li",null,"OEMs just did what they wanted"),i("li",null,"Display more than one code page at a time?")],-1),XT={__name:"14",setup(e){const t={hide:!1,srcSequence:"./pages/02-unicode.md"};return R(K),(n,s)=>{const o=Es;return w(),H(Re,ue(ce(t)),{default:W(()=>[QT,Y(o,null,{default:W(()=>[JT]),_:1})]),_:1},16)}}},eE=G(XT,[["__file","/@slidev/slides/14.md"]]),tE=i("h2",null,"Unicode to the resque",-1),nE=i("ul",null,[i("li",null,"Universal"),i("li",null,"Efficient"),i("li",null,"Unambiguous")],-1),sE={__name:"15",setup(e){const t={layout:"center",hide:!1,srcSequence:"./pages/02-unicode.md"};return R(K),(n,s)=>{const o=Es;return w(),H(wt,ue(ce(t)),{default:W(()=>[tE,Y(o,null,{default:W(()=>[nE]),_:1})]),_:1},16)}}},oE=G(sE,[["__file","/@slidev/slides/15.md"]]),rE=i("h2",null,"New Terminology",-1),iE=i("table",null,[i("thead",null,[i("tr",null,[i("th"),i("th"),i("th")])]),i("tbody",null,[i("tr",null,[i("td",null,"Glyph"),i("td",null,"‽"),i("td",null,"How it actually looks, defined by the font")]),i("tr",null,[i("td",null,"Codepoint"),i("td",null,"U+203D"),i("td",null,"Unique identifier for this character")]),i("tr",null,[i("td",null,"Character"),i("td",null,"Interrobang"),i("td",null,"Description of the character")]),i("tr",null,[i("td",null,"Block"),i("td",null,"General Punctuation, U+2000 - U+206F"),i("td",null,"The range of codepoints for a specific purpose")]),i("tr",null,[i("td",null,"Plane"),i("td",null,"Basic Multilingual Plane, U+0000 - U+FFFF"),i("td",null,"The wide group of codepoints")])])],-1),aE=i("footer",null,[i("p",null,[v("Ref: Characters and Glyphs "),i("a",{href:"https://www.unicode.org/versions/Unicode15.0.0/ch01.pdf",target:"_blank",rel:"noopener"},"https://www.unicode.org/versions/Unicode15.0.0/ch01.pdf")])],-1),lE={__name:"16",setup(e){const t={hide:!1,srcSequence:"./pages/02-unicode.md"};return R(K),(n,s)=>(w(),H(Re,ue(ce(t)),{default:W(()=>[rE,iE,aE]),_:1},16))}},cE=G(lE,[["__file","/@slidev/slides/16.md"]]),uE=ke({__name:"two-cols",props:{class:{type:String},layoutClass:{type:String}},setup(e){const t=e;return R(K),(n,s)=>(w(),$("div",{class:De(["slidev-layout two-columns w-full h-full grid grid-cols-2",t.layoutClass])},[i("div",{class:De(["col-left",t.class])},[mt(n.$slots,"default")],2),i("div",{class:De(["col-right",t.class])},[mt(n.$slots,"right")],2)],2))}}),dE=G(uE,[["__file","/home/ben/Workspace/demystifying-unicode/node_modules/@slidev/client/layouts/two-cols.vue"]]),fE=i("h2",null,"Glyphemes",-1),pE=i("div",{class:"codepoint"},[i("div",{class:"glyph"},"é"),i("div",{class:"code"},"U+00e9")],-1),hE=i("div",{class:"codepoint"},[i("div",{class:"glyph"},"é"),i("div",{class:"code"},"U+0065 + U+0301")],-1),mE={__name:"17",setup(e){const t={layout:"two-cols",hide:!1,srcSequence:"./pages/02-unicode.md"};return R(K),(n,s)=>(w(),H(dE,ue(ce(t)),{right:W(o=>[hE]),default:W(()=>[fE,pE]),_:1},16))}},gE=G(mE,[["__file","/@slidev/slides/17.md"]]),yE=i("h2",null,"What is the difference between",-1),vE=i("h2",null,[i("code",null,"Unicode")],-1),_E=i("h2",null,"and",-1),bE=i("h2",null,[i("code",null,"UTF-8/UTF-16/UTF-32?")],-1),wE={__name:"18",setup(e){const t={layout:"center",hide:!1,srcSequence:"./pages/02-unicode.md"};return R(K),(n,s)=>(w(),H(wt,ue(ce(t)),{default:W(()=>[yE,vE,_E,bE]),_:1},16))}},xE=G(wE,[["__file","/@slidev/slides/18.md"]]),kE=i("p",null,[i("code",null,"Unicode"),v(' - "The Standard" '),i("sup",null,"defines codepoints")],-1),SE=i("p",null,[i("code",null,"UTF-8/UTF-16/UTF-32"),v(" - Encodings")],-1),TE={__name:"19",setup(e){const t={layout:"center",hide:!1,srcSequence:"./pages/02-unicode.md"};return R(K),(n,s)=>(w(),H(wt,ue(ce(t)),{default:W(()=>[kE,SE]),_:1},16))}},EE=G(TE,[["__file","/@slidev/slides/19.md"]]),CE=i("p",null,"A quick word on encoding",-1),AE={__name:"20",setup(e){const t={layout:"center",hide:!1,srcSequence:"./pages/02-unicode.md"};return R(K),(n,s)=>(w(),H(wt,ue(ce(t)),{default:W(()=>[CE]),_:1},16))}},$E=G(AE,[["__file","/@slidev/slides/20.md"]]),FE=i("h2",null,"Encoding",-1),OE=i("p",null,"Current Unicode total code space size: 21bits, 1048576 characters.",-1),IE=i("p",null,"Code space: U+000000 - U+10FFFF",-1),UE=i("p",null,"But…",-1),PE=i("blockquote",null,[i("p",null,"There are many ways to encode/skin a unicode/cat.")],-1),ME=i("p",null,[i("strong",null,"Important:")],-1),LE=i("ul",null,[i("li",null,[v("ASCII standardized 0x00 - 0x7F"),i("pre",{class:"shiki-container"},[i("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{color:"#dbd7ca"}},"␀␁␂␃␄␅␆␇␈␉␊␋␌␍␎␏␐␑␒␓␔␕␖␗␘␙␚␛␜␝␞␟")]),v(`
`),i("span",{class:"line"},[i("span",{style:{color:"#dbd7ca"}},`␠!"#$%&'()*+,-./0123456789:;<=>?`)]),v(`
`),i("span",{class:"line"},[i("span",{style:{color:"#dbd7ca"}},"@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_")]),v(`
`),i("span",{class:"line"},[i("span",{style:{color:"#dbd7ca"}},"`abcdefghijklmnopqrstuvwxyz{|}~␡")])])]),i("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{color:"#393a34"}},"␀␁␂␃␄␅␆␇␈␉␊␋␌␍␎␏␐␑␒␓␔␕␖␗␘␙␚␛␜␝␞␟")]),v(`
`),i("span",{class:"line"},[i("span",{style:{color:"#393a34"}},`␠!"#$%&'()*+,-./0123456789:;<=>?`)]),v(`
`),i("span",{class:"line"},[i("span",{style:{color:"#393a34"}},"@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_")]),v(`
`),i("span",{class:"line"},[i("span",{style:{color:"#393a34"}},"`abcdefghijklmnopqrstuvwxyz{|}~␡")])])])])]),i("li",null,"Many code pages were using ASCII too"),i("li",null,[i("small",null,"It’s really important to 🤝 on encoding - even to this day.")])],-1),BE=i("footer",null,[i("p",null,"Fun fact: Unicode <2.0 code space was 16-bit wide.")],-1),DE={__name:"21",setup(e){const t={hide:!1,srcSequence:"./pages/02-unicode.md"};return R(K),(n,s)=>{const o=Cs,r=Es;return w(),H(Re,ue(ce(t)),{default:W(()=>[FE,OE,IE,UE,Y(o,null,{default:W(()=>[PE]),_:1}),Y(o,null,{default:W(()=>[ME]),_:1}),Y(r,null,{default:W(()=>[LE]),_:1}),BE]),_:1},16)}}},RE=G(DE,[["__file","/@slidev/slides/21.md"]]),NE=i("h2",null,"Unicode has 5 Encodings!",-1),jE=i("ul",null,[i("li",null,"UTF-8"),i("li",null,"UTF-16LE"),i("li",null,"UTF-16BE *"),i("li",null,"UTF-32LE"),i("li",null,"UTF-32BE *")],-1),WE=i("footer",null,[i("p",null,[v("UTF-21 exists - but it’s a toy encoding hobby project"),i("br"),v(" * denotes the encodings which are default if not explicit LE/BE defined")])],-1),qE={__name:"22",setup(e){const t={layout:"center",hide:!1,srcSequence:"./pages/02-unicode.md"};return R(K),(n,s)=>(w(),H(wt,ue(ce(t)),{default:W(()=>[NE,jE,WE]),_:1},16))}},HE=G(qE,[["__file","/@slidev/slides/22.md"]]),VE=i("h2",null,"Important",-1),zE=i("p",null,[v("UTF-[8/16/32] "),i("strong",null,"should"),v(" always be the same everywhere")],-1),KE=i("p",null,"UTF-8 == UTF-8",-1),GE=i("p",null,"UTF-16 == UTF-16",-1),YE=i("p",null,"UTF-32 == UTF-32",-1),ZE={__name:"23",setup(e){const t={layout:"center",hide:!1,srcSequence:"./pages/02-unicode.md"};return R(K),(n,s)=>(w(),H(wt,ue(ce(t)),{default:W(()=>[VE,zE,KE,GE,YE]),_:1},16))}},QE=G(ZE,[["__file","/@slidev/slides/23.md"]]),JE=i("h2",null,"UTF-8 is the king of the web",-1),XE={__name:"24",setup(e){const t={layout:"center",hide:!1,srcSequence:"./pages/02-unicode.md"};return R(K),(n,s)=>(w(),H(wt,ue(ce(t)),{default:W(()=>[JE]),_:1},16))}},eC=G(XE,[["__file","/@slidev/slides/24.md"]]),tC=i("h2",null,"Nuts and bolts of UTF-8",-1),nC=i("p",null,"Key points:",-1),sC=i("ul",null,[i("li",null,"Variable width (1-4 bytes)"),i("li",null,"∴ Variable offset between characters"),i("li",null,"The default in Rust (+many more)")],-1),oC=i("hr",null,null,-1),rC=i("table",null,[i("thead",null,[i("tr",null,[i("th",null,"First code point"),i("th",null,"Last code point"),i("th",null,"Byte 1"),i("th",null,"Byte 2"),i("th",null,"Byte 3"),i("th",null,"Byte 4"),i("th",null,"Bit Capacity")])]),i("tbody",null,[i("tr",null,[i("td",null,"U+0000"),i("td",null,"U+007F"),i("td",null,[i("code",null,"0xxxxxxx")]),i("td"),i("td"),i("td"),i("td",null,"7")]),i("tr",null,[i("td",null,"U+0080"),i("td",null,"U+07FF"),i("td",null,[i("code",null,"110xxxxx")]),i("td",null,[i("code",null,"10xxxxxx")]),i("td"),i("td"),i("td",null,"11")]),i("tr",null,[i("td",null,"U+0800"),i("td",null,"U+FFFF"),i("td",null,[i("code",null,"1110xxxx")]),i("td",null,[i("code",null,"10xxxxxx")]),i("td",null,[i("code",null,"10xxxxxx")]),i("td"),i("td",null,"16")]),i("tr",null,[i("td",null,"U+10000"),i("td",null,"U+10FFFF"),i("td",null,[i("code",null,"11110xxx")]),i("td",null,[i("code",null,"10xxxxxx")]),i("td",null,[i("code",null,"10xxxxxx")]),i("td",null,[i("code",null,"10xxxxxx")]),i("td",null,"21")])])],-1),iC={__name:"25",setup(e){const t={hide:!1,srcSequence:"./pages/02-unicode.md"};return R(K),(n,s)=>{const o=Cs;return w(),H(Re,ue(ce(t)),{default:W(()=>[tC,nC,sC,Y(o,null,{default:W(()=>[oC,rC]),_:1})]),_:1},16)}}},aC=G(iC,[["__file","/@slidev/slides/25.md"]]),lC=["width","height"],cC=["id"],uC=["fill"],dC=["x1","y1","x2","y2","stroke","stroke-width","marker-end"],fC=ke({__name:"Arrow",props:{x1:{type:[Number,String],required:!0},y1:{type:[Number,String],required:!0},x2:{type:[Number,String],required:!0},y2:{type:[Number,String],required:!0},width:{type:[Number,String],required:!1},color:{type:String,required:!1}},setup(e){R(K);const n=_1("abcedfghijklmn",10)();return(s,o)=>(w(),$("svg",{class:"absolute left-0 top-0 pointer-events-none",width:Math.max(+s.x1,+s.x2)+50,height:Math.max(+s.y1,+s.y2)+50},[i("defs",null,[i("marker",{id:O(n),markerUnits:"strokeWidth",markerWidth:10,markerHeight:7,refX:"9",refY:"3.5",orient:"auto"},[i("polygon",{points:"0 0, 10 3.5, 0 7",fill:s.color||"currentColor"},null,8,uC)],8,cC)]),i("line",{x1:+s.x1,y1:+s.y1,x2:+s.x2,y2:+s.y2,stroke:s.color||"currentColor","stroke-width":s.width||2,"marker-end":`url(#${O(n)})`},null,8,dC)],8,lC))}}),pC=G(fC,[["__file","/home/ben/Workspace/demystifying-unicode/node_modules/@slidev/client/builtin/Arrow.vue"]]),hC=i("h2",null,"Let’s encode!",-1),mC=i("p",null,"😻 = U+1F63B = Smiling cat face with heart-shaped eyes",-1),gC=i("p",null,[v("1F63B = "),i("code",null,"0001 1111 0110 0011 1011")],-1),yC=[gC],vC={class:"mt-30"},_C=i("p",null,"We need at least 17 bits of room to encode U+1F63B",-1),bC=i("hr",null,null,-1),wC=i("p",null,[i("code",null,"17 > 7"),v(" ∴ Needs more than 1 byte")],-1),xC=i("p",null,[i("code",null,"17 > 11"),v(" ∴ Needs more than 2 bytes")],-1),kC=i("p",null,[i("code",null,"17 > 16"),v(" ∴ Needs more than 3 bytes")],-1),SC=i("p",null,"∴ We need 4 bytes!",-1),TC=i("p",null,[i("code",null,"1111 0xxx"),v(),i("code",null,"10xx xxxx"),v(),i("code",null,"10xx xxxx"),v(),i("code",null,"10xx xxxx")],-1),EC=[bC,wC,xC,kC,SC,TC],CC={__name:"26",setup(e){const t={hide:!1,srcSequence:"./pages/02-unicode.md"};return R(K),(n,s)=>{const o=pC,r=Rr("click");return w(),H(Re,ue(ce(t)),{default:W(()=>[hC,mC,Xt((w(),$("p",null,yC)),[[r]]),Xt((w(),$("div",vC,[Y(o,{x1:"250",y1:"250",x2:"170",y2:"160",width:"5"}),_C])),[[r]]),Xt((w(),$("div",null,EC)),[[r]])]),_:1},16)}}},AC=G(CC,[["__file","/@slidev/slides/26.md"]]);const Ve=e=>(wg("data-v-af1c93f2"),e=e(),xg(),e),$C=Ve(()=>i("h2",null,"Let’s encode!",-1)),FC=Ve(()=>i("p",null,"😻 = U+1F63B = Smiling cat face with heart-shaped eyes",-1)),OC=Ve(()=>i("p",null,[v("0x1F63B = "),i("code",null,"0001 1111 0110 0011 1011")],-1)),IC={class:"absolute top-40 left-14"},UC=Ve(()=>i("span",null,"0x1F63B = ",-1)),PC=Ve(()=>i("span",{class:"binary color-red"}," 00",-1)),MC=Ve(()=>i("span",{class:"binary color-blue"},"01 1111",-1)),LC=Ve(()=>i("span",{class:"binary color-green"}," 0110 00",-1)),BC=Ve(()=>i("span",{class:"binary color-yellow"},"11 1011",-1)),DC=[UC,PC,MC,LC,BC],RC={class:"absolute parts top-40 left-14"},NC=Ve(()=>i("div",{class:"binary color-red absolute part part-1 anim"},"00",-1)),jC=Ve(()=>i("div",{class:"binary color-blue absolute part part-2 anim"},"01 1111",-1)),WC=Ve(()=>i("div",{class:"binary color-green absolute part part-3 no-backtick anim"},"0110 00",-1)),qC=Ve(()=>i("div",{class:"binary color-yellow absolute part part-4 no-backtick anim"},"11 1011",-1)),HC=[NC,jC,WC,qC],VC={class:"absolute top-49 left-31"},zC=Ve(()=>i("span",{class:"binary"},[v("| 1111 0000 = 1111 00"),i("span",{class:"color-red"},"00"),v(" ")],-1)),KC=Ve(()=>i("p",null,[i("span",{class:"binary"},[v("| 1000 0000 = 10"),i("span",{class:"color-blue"},"01 1111"),v(" ")])],-1)),GC=Ve(()=>i("p",null,[i("span",{class:"binary"},[v("| 1000 0000 = 10"),i("span",{class:"color-green"},"01 1000"),v(" ")])],-1)),YC=Ve(()=>i("p",null,[i("span",{class:"binary"},[v("| 1000 0000 = 10"),i("span",{class:"color-yellow"},"11 1011"),v(" ")])],-1)),ZC=[zC,KC,GC,YC],QC={class:"absolute top-49 left-86"},JC=Ve(()=>i("span",{class:"binary"}," = 0xF0",-1)),XC=Ve(()=>i("p",null,[i("span",{class:"binary"}," = 0x9F")],-1)),eA=Ve(()=>i("p",null,[i("span",{class:"binary"}," = 0x98")],-1)),tA=Ve(()=>i("p",null,[i("span",{class:"binary"}," = 0xBB")],-1)),nA=[JC,XC,eA,tA],sA={class:"absolute top-90 left-15"},oA=Ve(()=>i("hr",null,null,-1)),rA=Ve(()=>i("p",null,[v("Thus! U+1F63B = "),i("code",null,"\\xF0\\x9F\\x97\\xBB"),v(" in UTF-8")],-1)),iA={__name:"27",setup(e){const t={hide:!1,srcSequence:"./pages/02-unicode.md"};return R(K),(n,s)=>{const o=Cs,r=Rr("click");return w(),H(Re,ue(ce(t)),{default:W(()=>[$C,FC,OC,Xt((w(),$("div",IC,DC)),[[r]]),Xt((w(),$("div",RC,HC)),[[r]]),Xt((w(),$("div",VC,ZC)),[[r]]),Xt((w(),$("div",QC,nA)),[[r]]),i("div",sA,[Y(o,null,{default:W(()=>[oA,rA]),_:1})])]),_:1},16)}}},aA=G(iA,[["__scopeId","data-v-af1c93f2"],["__file","/@slidev/slides/27.md"]]),lA=i("h2",null,"Summary",-1),cA=i("ul",null,[i("li",null,"Unicode standard is a dictionary of codepoints and their character descriptions"),i("li",null,"Encoding is a concept to help humans interpret bytes as painted glyphs"),i("li",null,"UTF-8/16/32 are encodings defined by the Unicode Standard"),i("li",null,"UTF-8 is most cases is more memory efficient due to the mass amounts of Latin + ASCII usage")],-1),uA={__name:"28",setup(e){const t={layout:"center",hide:!1,srcSequence:"./pages/02-unicode.md"};return R(K),(n,s)=>{const o=Es;return w(),H(wt,ue(ce(t)),{default:W(()=>[lA,Y(o,null,{default:W(()=>[cA]),_:1})]),_:1},16)}}},dA=G(uA,[["__file","/@slidev/slides/28.md"]]),fA=i("h1",null,"Unicode in Rust",-1),pA={__name:"29",setup(e){const t={layout:"cover",hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"};return R(K),(n,s)=>(w(),H(zs,ue(ce(t)),{default:W(()=>[fA]),_:1},16))}},hA=G(pA,[["__file","/@slidev/slides/29.md"]]),mA=i("p",null,"Q: What is the primitive string type in rust?",-1),gA={__name:"30",setup(e){const t={layout:"center",hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"};return R(K),(n,s)=>(w(),H(wt,ue(ce(t)),{default:W(()=>[mA]),_:1},16))}},yA=G(gA,[["__file","/@slidev/slides/30.md"]]),vA=i("p",null,[v("Answer: "),i("code",null,"str")],-1),_A=i("p",null,[v("Incorrect: "),i("code",null,"String"),v(", "),i("code",null,"&str")],-1),bA=i("ul",null,[i("li",null,[i("code",null,"&str"),v(" impls "),i("code",null,"AsRef<str>")]),i("li",null,[i("code",null,"String"),v(" impls "),i("code",null,"AsRef<str>")]),i("li",null,[i("code",null,"String"),v(" impls "),i("code",null,"Deref"),v(" to "),i("code",null,"str"),v(" (thus "),i("code",null,"&String"),v(" derefs to "),i("code",null,"&str"),v(")")])],-1),wA=i("blockquote",null,[i("p",null,[v("The "),i("code",null,"str"),v(" type, also called a ‘string slice’, is the most primitive string type. It is usually seen in its borrowed form, "),i("code",null,"&str"),v(". It is also the type of string literals, "),i("code",null,"&'static str"),v(".")]),i("p",null,[v("String slices are "),i("strong",null,"always"),v(" valid UTF-8.")])],-1),xA={__name:"31",setup(e){const t={layout:"center",hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"};return R(K),(n,s)=>{const o=Cs;return w(),H(wt,ue(ce(t)),{default:W(()=>[vA,Y(o,null,{default:W(()=>[_A,bA]),_:1}),Y(o,null,{default:W(()=>[wA]),_:1})]),_:1},16)}}},kA=G(xA,[["__file","/@slidev/slides/31.md"]]),SA={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},TA=i("path",{fill:"currentColor",d:"M200 32h-36.26a47.92 47.92 0 0 0-71.48 0H56a16 16 0 0 0-16 16v168a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16Zm-72 0a32 32 0 0 1 32 32H96a32 32 0 0 1 32-32Zm72 184H56V48h26.75A47.93 47.93 0 0 0 80 64v8a8 8 0 0 0 8 8h80a8 8 0 0 0 8-8v-8a47.93 47.93 0 0 0-2.75-16H200Z"},null,-1),EA=[TA];function CA(e,t){return w(),$("svg",SA,EA)}const AA={name:"ph-clipboard",render:CA},$A={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},FA=i("path",{fill:"currentColor",d:"M173.66 98.34a8 8 0 0 1 0 11.32l-56 56a8 8 0 0 1-11.32 0l-24-24a8 8 0 0 1 11.32-11.32L112 148.69l50.34-50.35a8 8 0 0 1 11.32 0ZM232 128A104 104 0 1 1 128 24a104.11 104.11 0 0 1 104 104Zm-16 0a88 88 0 1 0-88 88a88.1 88.1 0 0 0 88-88Z"},null,-1),OA=[FA];function IA(e,t){return w(),$("svg",$A,OA)}const UA={name:"ph-check-circle",render:IA},PA=["title"],MA=ke({__name:"CodeBlockWrapper",props:{ranges:{default:()=>[]},startLine:{type:Number,default:1},lines:{type:Boolean,default:$e.lineNumbers},at:{type:Number,default:void 0},maxHeight:{type:String,default:void 0}},setup(e){const t=e;R(K);const n=R(yo),s=R(ss),o=R(vo);function r(f=5){const p=[],h="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",m=h.length;for(let _=0;_<f;_++)p.push(h.charAt(Math.floor(Math.random()*m)));return p.join("")}const a=z(),l=$t();Hn(()=>{const f=t.at==null?s==null?void 0:s.value.length:t.at,p=I(()=>o!=null&&o.value?t.ranges.length-1:Math.min(Math.max(0,((n==null?void 0:n.value)||0)-(f||0)),t.ranges.length-1)),h=I(()=>t.ranges[p.value]||"");if(t.ranges.length>=2&&!(o!=null&&o.value)){const m=r(),_=w1(t.ranges.length-1).map(k=>m+k);s!=null&&s.value&&(s.value.push(..._),pi(()=>_.forEach(k=>xa(s.value,k)),l))}xs(()=>{if(!a.value)return;const _=a.value.querySelector(".shiki-dark")?Array.from(a.value.querySelectorAll(".shiki")):[a.value],k=t.startLine;for(const x of _){const S=Array.from(x.querySelectorAll(".line")),b=eh(S.length+k-1,h.value);if(S.forEach((T,E)=>{const A=b.includes(E+k);T.classList.toggle(Xn,!0),T.classList.toggle("highlighted",A),T.classList.toggle("dishonored",!A)}),t.maxHeight){const T=Array.from(x.querySelectorAll(".line.highlighted"));T.reduce((A,L)=>L.offsetHeight+A,0)>a.value.offsetHeight?T[0].scrollIntoView({behavior:"smooth",block:"start"}):T.length>0&&T[Math.round((T.length-1)/2)].scrollIntoView({behavior:"smooth",block:"center"})}}})});const{copied:c,copy:u}=wv();function d(){var p,h;const f=(h=(p=a.value)==null?void 0:p.querySelector(".slidev-code"))==null?void 0:h.textContent;f&&u(f)}return(f,p)=>{const h=UA,m=AA;return w(),$("div",{ref_key:"el",ref:a,class:De(["slidev-code-wrapper relative group",{"slidev-code-line-numbers":t.lines}]),style:Xe({"max-height":t.maxHeight,"overflow-y":t.maxHeight?"scroll":void 0,"--start":t.startLine})},[mt(f.$slots,"default"),O($e).codeCopy?(w(),$("button",{key:0,class:"slidev-code-copy absolute top-0 right-0 transition opacity-0 group-hover:opacity-20 hover:!opacity-100",title:O(c)?"Copied":"Copy",onClick:p[0]||(p[0]=_=>d())},[O(c)?(w(),H(h,{key:0,class:"p-2 w-8 h-8"})):(w(),H(m,{key:1,class:"p-2 w-8 h-8"}))],8,PA)):ge("v-if",!0)],6)}}}),Zo=G(MA,[["__file","/home/ben/Workspace/demystifying-unicode/node_modules/@slidev/client/builtin/CodeBlockWrapper.vue"]]),LA=i("h2",null,"String slices",-1),BA=i("br",null,null,-1),DA=i("blockquote",null,[i("p",null,"Primitive Type slice"),i("p",null,"A dynamically-sized view into a contiguous sequence, [T]. Contiguous here means that elements are laid out so that every element is the same distance from its neighbors.")],-1),RA=i("p",null,[v("Ref: "),i("a",{href:"https://doc.rust-lang.org/std/primitive.slice.html",target:"_blank",rel:"noopener"},"https://doc.rust-lang.org/std/primitive.slice.html")],-1),NA=i("br",null,null,-1),jA=i("p",null,[v("If every element is the same distance from it’s neighbour, then what is the "),i("code",null,"len"),v(" of the following?")],-1),WA=i("pre",{class:"shiki-container"},[i("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{color:"#4D9375"}},"fn"),i("span",{style:{color:"#DBD7CA"}}," "),i("span",{style:{color:"#A1B567"}},"main"),i("span",{style:{color:"#858585"}},"()"),i("span",{style:{color:"#DBD7CA"}}," "),i("span",{style:{color:"#858585"}},"{")]),v(`
`),i("span",{class:"line"},[i("span",{style:{color:"#DBD7CA"}},"    "),i("span",{style:{color:"#CB7676"}},"let"),i("span",{style:{color:"#DBD7CA"}}," "),i("span",{style:{color:"#B8A965"}},"s"),i("span",{style:{color:"#DBD7CA"}}," "),i("span",{style:{color:"#CB7676"}},"="),i("span",{style:{color:"#DBD7CA"}}," "),i("span",{style:{color:"#C98A7D"}},'"İstanbul"'),i("span",{style:{color:"#858585"}},";")]),v(`
`),i("span",{class:"line"}),v(`
`),i("span",{class:"line"},[i("span",{style:{color:"#DBD7CA"}},"    "),i("span",{style:{color:"#A1B567"}},"println!"),i("span",{style:{color:"#858585"}},"("),i("span",{style:{color:"#C98A7D"}},'"'),i("span",{style:{color:"#858585"}},"{}"),i("span",{style:{color:"#C98A7D"}},'"'),i("span",{style:{color:"#858585"}},","),i("span",{style:{color:"#DBD7CA"}}," "),i("span",{style:{color:"#B8A965"}},"s"),i("span",{style:{color:"#CB7676"}},"."),i("span",{style:{color:"#A1B567"}},"len"),i("span",{style:{color:"#858585"}},"());")]),v(`
`),i("span",{class:"line"},[i("span",{style:{color:"#858585"}},"}")])])]),i("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{color:"#1C6B48"}},"fn"),i("span",{style:{color:"#393A34"}}," "),i("span",{style:{color:"#6C7834"}},"main"),i("span",{style:{color:"#8E8F8B"}},"()"),i("span",{style:{color:"#393A34"}}," "),i("span",{style:{color:"#8E8F8B"}},"{")]),v(`
`),i("span",{class:"line"},[i("span",{style:{color:"#393A34"}},"    "),i("span",{style:{color:"#AB5959"}},"let"),i("span",{style:{color:"#393A34"}}," "),i("span",{style:{color:"#8C862B"}},"s"),i("span",{style:{color:"#393A34"}}," "),i("span",{style:{color:"#AB5959"}},"="),i("span",{style:{color:"#393A34"}}," "),i("span",{style:{color:"#B56959"}},'"İstanbul"'),i("span",{style:{color:"#8E8F8B"}},";")]),v(`
`),i("span",{class:"line"}),v(`
`),i("span",{class:"line"},[i("span",{style:{color:"#393A34"}},"    "),i("span",{style:{color:"#6C7834"}},"println!"),i("span",{style:{color:"#8E8F8B"}},"("),i("span",{style:{color:"#B56959"}},'"'),i("span",{style:{color:"#8E8F8B"}},"{}"),i("span",{style:{color:"#B56959"}},'"'),i("span",{style:{color:"#8E8F8B"}},","),i("span",{style:{color:"#393A34"}}," "),i("span",{style:{color:"#8C862B"}},"s"),i("span",{style:{color:"#AB5959"}},"."),i("span",{style:{color:"#6C7834"}},"len"),i("span",{style:{color:"#8E8F8B"}},"());")]),v(`
`),i("span",{class:"line"},[i("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),qA=i("pre",{class:"shiki-container"},[i("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{color:"#758575"}},"    //        ^^ 9")])])]),i("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{color:"#A0ADA0"}},"    //        ^^ 9")])])])],-1),HA=i("p",null,[v("∴ A String slice ("),i("code",null,"str"),v(") is just a slice of bytes ("),i("code",null,"[u8]"),v("), which contents are always valid UTF-8.")],-1),VA={__name:"32",setup(e){const t={hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"};return R(K),(n,s)=>{const o=Zo,r=Cs;return w(),H(Re,ue(ce(t)),{default:W(()=>[LA,BA,DA,RA,NA,Y(r,null,{default:W(()=>[jA,Y(o,Vt({},{ranges:[""]}),{default:W(()=>[WA]),_:1},16)]),_:1}),Y(r,null,{default:W(()=>[Y(o,Vt({},{ranges:[""]}),{default:W(()=>[qA]),_:1},16)]),_:1}),Y(r,null,{default:W(()=>[HA]),_:1})]),_:1},16)}}},zA=G(VA,[["__file","/@slidev/slides/32.md"]]),KA=i("h2",null,"Lets make some strings",-1),GA={__name:"33",setup(e){const t={layout:"center",hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"};return R(K),(n,s)=>(w(),H(wt,ue(ce(t)),{default:W(()=>[KA]),_:1},16))}},YA=G(GA,[["__file","/@slidev/slides/33.md"]]),ZA=i("h2",null,"Using strings in Rust",-1),QA=i("blockquote",null,[i("p",null,[v("String slices are "),i("strong",null,"always"),v(" valid UTF-8.")])],-1),JA=i("p",null,[v("∴ The compiler won’t compile your rust if you try to do non UTF-8 things in "),i("code",null,"&str")],-1),XA=i("pre",{class:"shiki-container"},[i("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{color:"#4D9375"}},"fn"),i("span",{style:{color:"#DBD7CA"}}," "),i("span",{style:{color:"#A1B567"}},"main"),i("span",{style:{color:"#858585"}},"()"),i("span",{style:{color:"#DBD7CA"}}," "),i("span",{style:{color:"#858585"}},"{")]),v(`
`),i("span",{class:"line"},[i("span",{style:{color:"#DBD7CA"}},"    "),i("span",{style:{color:"#CB7676"}},"let"),i("span",{style:{color:"#DBD7CA"}}," "),i("span",{style:{color:"#B8A965"}},"s"),i("span",{style:{color:"#DBD7CA"}}," "),i("span",{style:{color:"#CB7676"}},"="),i("span",{style:{color:"#DBD7CA"}}," "),i("span",{style:{color:"#C98A7D"}},'"Hello World"'),i("span",{style:{color:"#858585"}},";"),i("span",{style:{color:"#758575"}},"     // Good")]),v(`
`),i("span",{class:"line"},[i("span",{style:{color:"#DBD7CA"}},"    "),i("span",{style:{color:"#CB7676"}},"let"),i("span",{style:{color:"#DBD7CA"}}," "),i("span",{style:{color:"#B8A965"}},"s"),i("span",{style:{color:"#DBD7CA"}}," "),i("span",{style:{color:"#CB7676"}},"="),i("span",{style:{color:"#DBD7CA"}}," "),i("span",{style:{color:"#C98A7D"}},'"Hello'),i("span",{style:{color:"#D4976C"}},"\\x20"),i("span",{style:{color:"#C98A7D"}},'World"'),i("span",{style:{color:"#858585"}},";"),i("span",{style:{color:"#758575"}},"  // Also good")]),v(`
`),i("span",{class:"line"},[i("span",{style:{color:"#DBD7CA"}},"    "),i("span",{style:{color:"#CB7676"}},"let"),i("span",{style:{color:"#DBD7CA"}}," "),i("span",{style:{color:"#B8A965"}},"s"),i("span",{style:{color:"#DBD7CA"}}," "),i("span",{style:{color:"#CB7676"}},"="),i("span",{style:{color:"#DBD7CA"}}," "),i("span",{style:{color:"#C98A7D"}},'"Hello'),i("span",{style:{color:"#D4976C"}},"\\x7F"),i("span",{style:{color:"#C98A7D"}},'World"'),i("span",{style:{color:"#858585"}},";"),i("span",{style:{color:"#758575"}},"  // Also good (\\x7F is the control character `DEL`)")]),v(`
`),i("span",{class:"line"},[i("span",{style:{color:"#DBD7CA"}},"    "),i("span",{style:{color:"#CB7676"}},"let"),i("span",{style:{color:"#DBD7CA"}}," "),i("span",{style:{color:"#B8A965"}},"s"),i("span",{style:{color:"#DBD7CA"}}," "),i("span",{style:{color:"#CB7676"}},"="),i("span",{style:{color:"#DBD7CA"}}," "),i("span",{style:{color:"#C98A7D"}},'"Hello'),i("span",{style:{color:"#D4976C"}},"\\x"),i("span",{style:{color:"#C98A7D"}},'80World"'),i("span",{style:{color:"#858585"}},";"),i("span",{style:{color:"#758575"}},"  // Fails")]),v(`
`),i("span",{class:"line"},[i("span",{style:{color:"#758575"}},"    //            ^^^^ must be a character in the range [\\x00-\\x7f]")]),v(`
`),i("span",{class:"line"},[i("span",{style:{color:"#858585"}},"}")])])]),i("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{color:"#1C6B48"}},"fn"),i("span",{style:{color:"#393A34"}}," "),i("span",{style:{color:"#6C7834"}},"main"),i("span",{style:{color:"#8E8F8B"}},"()"),i("span",{style:{color:"#393A34"}}," "),i("span",{style:{color:"#8E8F8B"}},"{")]),v(`
`),i("span",{class:"line"},[i("span",{style:{color:"#393A34"}},"    "),i("span",{style:{color:"#AB5959"}},"let"),i("span",{style:{color:"#393A34"}}," "),i("span",{style:{color:"#8C862B"}},"s"),i("span",{style:{color:"#393A34"}}," "),i("span",{style:{color:"#AB5959"}},"="),i("span",{style:{color:"#393A34"}}," "),i("span",{style:{color:"#B56959"}},'"Hello World"'),i("span",{style:{color:"#8E8F8B"}},";"),i("span",{style:{color:"#A0ADA0"}},"     // Good")]),v(`
`),i("span",{class:"line"},[i("span",{style:{color:"#393A34"}},"    "),i("span",{style:{color:"#AB5959"}},"let"),i("span",{style:{color:"#393A34"}}," "),i("span",{style:{color:"#8C862B"}},"s"),i("span",{style:{color:"#393A34"}}," "),i("span",{style:{color:"#AB5959"}},"="),i("span",{style:{color:"#393A34"}}," "),i("span",{style:{color:"#B56959"}},'"Hello'),i("span",{style:{color:"#A65E2B"}},"\\x20"),i("span",{style:{color:"#B56959"}},'World"'),i("span",{style:{color:"#8E8F8B"}},";"),i("span",{style:{color:"#A0ADA0"}},"  // Also good")]),v(`
`),i("span",{class:"line"},[i("span",{style:{color:"#393A34"}},"    "),i("span",{style:{color:"#AB5959"}},"let"),i("span",{style:{color:"#393A34"}}," "),i("span",{style:{color:"#8C862B"}},"s"),i("span",{style:{color:"#393A34"}}," "),i("span",{style:{color:"#AB5959"}},"="),i("span",{style:{color:"#393A34"}}," "),i("span",{style:{color:"#B56959"}},'"Hello'),i("span",{style:{color:"#A65E2B"}},"\\x7F"),i("span",{style:{color:"#B56959"}},'World"'),i("span",{style:{color:"#8E8F8B"}},";"),i("span",{style:{color:"#A0ADA0"}},"  // Also good (\\x7F is the control character `DEL`)")]),v(`
`),i("span",{class:"line"},[i("span",{style:{color:"#393A34"}},"    "),i("span",{style:{color:"#AB5959"}},"let"),i("span",{style:{color:"#393A34"}}," "),i("span",{style:{color:"#8C862B"}},"s"),i("span",{style:{color:"#393A34"}}," "),i("span",{style:{color:"#AB5959"}},"="),i("span",{style:{color:"#393A34"}}," "),i("span",{style:{color:"#B56959"}},'"Hello'),i("span",{style:{color:"#A65E2B"}},"\\x"),i("span",{style:{color:"#B56959"}},'80World"'),i("span",{style:{color:"#8E8F8B"}},";"),i("span",{style:{color:"#A0ADA0"}},"  // Fails")]),v(`
`),i("span",{class:"line"},[i("span",{style:{color:"#A0ADA0"}},"    //            ^^^^ must be a character in the range [\\x00-\\x7f]")]),v(`
`),i("span",{class:"line"},[i("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),e$={__name:"34",setup(e){const t={hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"};return R(K),(n,s)=>{const o=Zo;return w(),H(Re,ue(ce(t)),{default:W(()=>[ZA,QA,JA,Y(o,Vt({},{ranges:[""]}),{default:W(()=>[XA]),_:1},16)]),_:1},16)}}},t$=G(e$,[["__file","/@slidev/slides/34.md"]]),n$=i("h2",null,"Creating Strings",-1),s$=i("p",null,"Remember, all strings are just arrays of bytes. As such, rust will also let us create strings from exactly that, vectors of bytes.",-1),o$=i("pre",{class:"shiki-container"},[i("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{color:"#4D9375"}},"fn"),i("span",{style:{color:"#DBD7CA"}}," "),i("span",{style:{color:"#A1B567"}},"main"),i("span",{style:{color:"#858585"}},"()"),i("span",{style:{color:"#DBD7CA"}}," "),i("span",{style:{color:"#858585"}},"{")]),v(`
`),i("span",{class:"line"},[i("span",{style:{color:"#DBD7CA"}},"    "),i("span",{style:{color:"#CB7676"}},"let"),i("span",{style:{color:"#DBD7CA"}}," "),i("span",{style:{color:"#B8A965"}},"v"),i("span",{style:{color:"#DBD7CA"}}," "),i("span",{style:{color:"#CB7676"}},"="),i("span",{style:{color:"#DBD7CA"}}," "),i("span",{style:{color:"#A1B567"}},"vec!"),i("span",{style:{color:"#858585"}},"["),i("span",{style:{color:"#6394BF"}},"0x52"),i("span",{style:{color:"#858585"}},","),i("span",{style:{color:"#DBD7CA"}}," "),i("span",{style:{color:"#6394BF"}},"0x75"),i("span",{style:{color:"#858585"}},","),i("span",{style:{color:"#DBD7CA"}}," "),i("span",{style:{color:"#6394BF"}},"0x73"),i("span",{style:{color:"#858585"}},","),i("span",{style:{color:"#DBD7CA"}}," "),i("span",{style:{color:"#6394BF"}},"0x74"),i("span",{style:{color:"#858585"}},","),i("span",{style:{color:"#DBD7CA"}}," "),i("span",{style:{color:"#6394BF"}},"0x21"),i("span",{style:{color:"#858585"}},"];")]),v(`
`),i("span",{class:"line"}),v(`
`),i("span",{class:"line"},[i("span",{style:{color:"#758575"}},"    // Panics if not a valid UTF-8 string")]),v(`
`),i("span",{class:"line"},[i("span",{style:{color:"#DBD7CA"}},"    "),i("span",{style:{color:"#CB7676"}},"let"),i("span",{style:{color:"#DBD7CA"}}," "),i("span",{style:{color:"#B8A965"}},"s"),i("span",{style:{color:"#DBD7CA"}}," "),i("span",{style:{color:"#CB7676"}},"="),i("span",{style:{color:"#DBD7CA"}}," "),i("span",{style:{color:"#A1B567"}},"String"),i("span",{style:{color:"#CB7676"}},"::"),i("span",{style:{color:"#A1B567"}},"from_utf8"),i("span",{style:{color:"#858585"}},"("),i("span",{style:{color:"#B8A965"}},"v"),i("span",{style:{color:"#858585"}},")"),i("span",{style:{color:"#CB7676"}},"."),i("span",{style:{color:"#A1B567"}},"unwrap"),i("span",{style:{color:"#858585"}},"();")]),v(`
`),i("span",{class:"line"}),v(`
`),i("span",{class:"line"},[i("span",{style:{color:"#DBD7CA"}},"    "),i("span",{style:{color:"#A1B567"}},"println!"),i("span",{style:{color:"#858585"}},"("),i("span",{style:{color:"#C98A7D"}},'"'),i("span",{style:{color:"#858585"}},"{"),i("span",{style:{color:"#C98A7D"}},"s"),i("span",{style:{color:"#858585"}},"}"),i("span",{style:{color:"#C98A7D"}},'"'),i("span",{style:{color:"#858585"}},");")]),v(`
`),i("span",{class:"line"},[i("span",{style:{color:"#858585"}},"}")])])]),i("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{color:"#1C6B48"}},"fn"),i("span",{style:{color:"#393A34"}}," "),i("span",{style:{color:"#6C7834"}},"main"),i("span",{style:{color:"#8E8F8B"}},"()"),i("span",{style:{color:"#393A34"}}," "),i("span",{style:{color:"#8E8F8B"}},"{")]),v(`
`),i("span",{class:"line"},[i("span",{style:{color:"#393A34"}},"    "),i("span",{style:{color:"#AB5959"}},"let"),i("span",{style:{color:"#393A34"}}," "),i("span",{style:{color:"#8C862B"}},"v"),i("span",{style:{color:"#393A34"}}," "),i("span",{style:{color:"#AB5959"}},"="),i("span",{style:{color:"#393A34"}}," "),i("span",{style:{color:"#6C7834"}},"vec!"),i("span",{style:{color:"#8E8F8B"}},"["),i("span",{style:{color:"#296AA3"}},"0x52"),i("span",{style:{color:"#8E8F8B"}},","),i("span",{style:{color:"#393A34"}}," "),i("span",{style:{color:"#296AA3"}},"0x75"),i("span",{style:{color:"#8E8F8B"}},","),i("span",{style:{color:"#393A34"}}," "),i("span",{style:{color:"#296AA3"}},"0x73"),i("span",{style:{color:"#8E8F8B"}},","),i("span",{style:{color:"#393A34"}}," "),i("span",{style:{color:"#296AA3"}},"0x74"),i("span",{style:{color:"#8E8F8B"}},","),i("span",{style:{color:"#393A34"}}," "),i("span",{style:{color:"#296AA3"}},"0x21"),i("span",{style:{color:"#8E8F8B"}},"];")]),v(`
`),i("span",{class:"line"}),v(`
`),i("span",{class:"line"},[i("span",{style:{color:"#A0ADA0"}},"    // Panics if not a valid UTF-8 string")]),v(`
`),i("span",{class:"line"},[i("span",{style:{color:"#393A34"}},"    "),i("span",{style:{color:"#AB5959"}},"let"),i("span",{style:{color:"#393A34"}}," "),i("span",{style:{color:"#8C862B"}},"s"),i("span",{style:{color:"#393A34"}}," "),i("span",{style:{color:"#AB5959"}},"="),i("span",{style:{color:"#393A34"}}," "),i("span",{style:{color:"#6C7834"}},"String"),i("span",{style:{color:"#AB5959"}},"::"),i("span",{style:{color:"#6C7834"}},"from_utf8"),i("span",{style:{color:"#8E8F8B"}},"("),i("span",{style:{color:"#8C862B"}},"v"),i("span",{style:{color:"#8E8F8B"}},")"),i("span",{style:{color:"#AB5959"}},"."),i("span",{style:{color:"#6C7834"}},"unwrap"),i("span",{style:{color:"#8E8F8B"}},"();")]),v(`
`),i("span",{class:"line"}),v(`
`),i("span",{class:"line"},[i("span",{style:{color:"#393A34"}},"    "),i("span",{style:{color:"#6C7834"}},"println!"),i("span",{style:{color:"#8E8F8B"}},"("),i("span",{style:{color:"#B56959"}},'"'),i("span",{style:{color:"#8E8F8B"}},"{"),i("span",{style:{color:"#B56959"}},"s"),i("span",{style:{color:"#8E8F8B"}},"}"),i("span",{style:{color:"#B56959"}},'"'),i("span",{style:{color:"#8E8F8B"}},");")]),v(`
`),i("span",{class:"line"},[i("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),r$={__name:"35",setup(e){const t={hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"};return R(K),(n,s)=>{const o=Zo;return w(),H(Re,ue(ce(t)),{default:W(()=>[n$,s$,Y(o,Vt({},{ranges:[""]}),{default:W(()=>[o$]),_:1},16)]),_:1},16)}}},i$=G(r$,[["__file","/@slidev/slides/35.md"]]),a$=i("h2",null,"UTF8Error",-1),l$=i("p",null,"Until it panics.",-1),c$=i("pre",{class:"shiki-container"},[i("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{color:"#4D9375"}},"fn"),i("span",{style:{color:"#DBD7CA"}}," "),i("span",{style:{color:"#A1B567"}},"main"),i("span",{style:{color:"#858585"}},"()"),i("span",{style:{color:"#DBD7CA"}}," "),i("span",{style:{color:"#858585"}},"{")]),v(`
`),i("span",{class:"line"},[i("span",{style:{color:"#DBD7CA"}},"    "),i("span",{style:{color:"#CB7676"}},"let"),i("span",{style:{color:"#DBD7CA"}}," "),i("span",{style:{color:"#B8A965"}},"v"),i("span",{style:{color:"#DBD7CA"}}," "),i("span",{style:{color:"#CB7676"}},"="),i("span",{style:{color:"#DBD7CA"}}," "),i("span",{style:{color:"#A1B567"}},"vec!"),i("span",{style:{color:"#858585"}},"["),i("span",{style:{color:"#6394BF"}},"0x80"),i("span",{style:{color:"#858585"}},"];")]),v(`
`),i("span",{class:"line"}),v(`
`),i("span",{class:"line"},[i("span",{style:{color:"#758575"}},"    // Panics")]),v(`
`),i("span",{class:"line"},[i("span",{style:{color:"#DBD7CA"}},"    "),i("span",{style:{color:"#CB7676"}},"let"),i("span",{style:{color:"#DBD7CA"}}," "),i("span",{style:{color:"#B8A965"}},"s"),i("span",{style:{color:"#DBD7CA"}}," "),i("span",{style:{color:"#CB7676"}},"="),i("span",{style:{color:"#DBD7CA"}}," "),i("span",{style:{color:"#A1B567"}},"String"),i("span",{style:{color:"#CB7676"}},"::"),i("span",{style:{color:"#A1B567"}},"from_utf8"),i("span",{style:{color:"#858585"}},"("),i("span",{style:{color:"#B8A965"}},"v"),i("span",{style:{color:"#858585"}},")"),i("span",{style:{color:"#CB7676"}},"."),i("span",{style:{color:"#A1B567"}},"unwrap"),i("span",{style:{color:"#858585"}},"();")]),v(`
`),i("span",{class:"line"},[i("span",{style:{color:"#758575"}},"    // thread 'main' panicked at 'called `Result::unwrap()` on an `Err` value: FromUtf8Error { bytes: [128], error: Utf8Error { valid_up_to: 0, error_len: Some(1) } }', src/main.rs:5:35")]),v(`
`),i("span",{class:"line"},[i("span",{style:{color:"#858585"}},"}")])])]),i("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{color:"#1C6B48"}},"fn"),i("span",{style:{color:"#393A34"}}," "),i("span",{style:{color:"#6C7834"}},"main"),i("span",{style:{color:"#8E8F8B"}},"()"),i("span",{style:{color:"#393A34"}}," "),i("span",{style:{color:"#8E8F8B"}},"{")]),v(`
`),i("span",{class:"line"},[i("span",{style:{color:"#393A34"}},"    "),i("span",{style:{color:"#AB5959"}},"let"),i("span",{style:{color:"#393A34"}}," "),i("span",{style:{color:"#8C862B"}},"v"),i("span",{style:{color:"#393A34"}}," "),i("span",{style:{color:"#AB5959"}},"="),i("span",{style:{color:"#393A34"}}," "),i("span",{style:{color:"#6C7834"}},"vec!"),i("span",{style:{color:"#8E8F8B"}},"["),i("span",{style:{color:"#296AA3"}},"0x80"),i("span",{style:{color:"#8E8F8B"}},"];")]),v(`
`),i("span",{class:"line"}),v(`
`),i("span",{class:"line"},[i("span",{style:{color:"#A0ADA0"}},"    // Panics")]),v(`
`),i("span",{class:"line"},[i("span",{style:{color:"#393A34"}},"    "),i("span",{style:{color:"#AB5959"}},"let"),i("span",{style:{color:"#393A34"}}," "),i("span",{style:{color:"#8C862B"}},"s"),i("span",{style:{color:"#393A34"}}," "),i("span",{style:{color:"#AB5959"}},"="),i("span",{style:{color:"#393A34"}}," "),i("span",{style:{color:"#6C7834"}},"String"),i("span",{style:{color:"#AB5959"}},"::"),i("span",{style:{color:"#6C7834"}},"from_utf8"),i("span",{style:{color:"#8E8F8B"}},"("),i("span",{style:{color:"#8C862B"}},"v"),i("span",{style:{color:"#8E8F8B"}},")"),i("span",{style:{color:"#AB5959"}},"."),i("span",{style:{color:"#6C7834"}},"unwrap"),i("span",{style:{color:"#8E8F8B"}},"();")]),v(`
`),i("span",{class:"line"},[i("span",{style:{color:"#A0ADA0"}},"    // thread 'main' panicked at 'called `Result::unwrap()` on an `Err` value: FromUtf8Error { bytes: [128], error: Utf8Error { valid_up_to: 0, error_len: Some(1) } }', src/main.rs:5:35")]),v(`
`),i("span",{class:"line"},[i("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),u$={__name:"36",setup(e){const t={hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"};return R(K),(n,s)=>{const o=Zo;return w(),H(Re,ue(ce(t)),{default:W(()=>[a$,l$,Y(o,Vt({},{ranges:[""]}),{default:W(()=>[c$]),_:1},16)]),_:1},16)}}},d$=G(u$,[["__file","/@slidev/slides/36.md"]]),f$=i("h2",null,"Conventially UTF-8 vs. Gaurantee",-1),p$=i("p",null,"With the help of bstr crate",-1),h$={__name:"37",setup(e){const t={hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"};return R(K),(n,s)=>(w(),H(Re,ue(ce(t)),{default:W(()=>[f$,p$]),_:1},16))}},m$=G(h$,[["__file","/@slidev/slides/37.md"]]),g$=i("h2",null,"Where Enforced UTF-8 can go wrong",-1),y$={__name:"38",setup(e){const t={layout:"center",hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"};return R(K),(n,s)=>(w(),H(wt,ue(ce(t)),{default:W(()=>[g$]),_:1},16))}},v$=G(y$,[["__file","/@slidev/slides/38.md"]]),_$=i("h2",null,"Reading and Writing files",-1),b$=i("ul",null,[i("li",null,'Binary "strings" (e.g. reading/writing from disk)')],-1),w$={__name:"39",setup(e){const t={hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"};return R(K),(n,s)=>(w(),H(Re,ue(ce(t)),{default:W(()=>[_$,b$]),_:1},16))}},x$=G(w$,[["__file","/@slidev/slides/39.md"]]),k$=i("h2",null,"Standards - and why we follow them",-1),S$=i("ul",null,[i("li",null,"JSON, but it’s binary blobs as values")],-1),T$={__name:"40",setup(e){const t={hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"};return R(K),(n,s)=>(w(),H(Re,ue(ce(t)),{default:W(()=>[k$,S$]),_:1},16))}},E$=G(T$,[["__file","/@slidev/slides/40.md"]]),C$=i("h2",null,[i("code",null,"unsafe"),v(" is unsafe")],-1),A$=i("ul",null,[i("li",null,[v("Breaking "),i("code",null,"&str"),v("s (pushing non utf8 bytes)")])],-1),$$={__name:"41",setup(e){const t={hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"};return R(K),(n,s)=>(w(),H(Re,ue(ce(t)),{default:W(()=>[C$,A$]),_:1},16))}},F$=G($$,[["__file","/@slidev/slides/41.md"]]),O$=i("h2",null,"Summary",-1),I$=i("p",null,[i("code",null,"str"),v(" is the primitive string - a slice of bytes with gaurantees of UTF-8")],-1),U$=i("p",null,[i("code",null,"str"),v(" is always "),i("code",null,"UTF-8")],-1),P$=i("p",null,[i("code",null,"UTF8Error"),v(" is because you should be handling bytes instead of strings")],-1),M$=i("p",null,[i("code",null,"bstr"),v(" if you want Conventially UTF-8 instead")],-1),L$={__name:"42",setup(e){const t={layout:"center",hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"};return R(K),(n,s)=>(w(),H(wt,ue(ce(t)),{default:W(()=>[O$,I$,U$,P$,M$]),_:1},16))}},B$=G(L$,[["__file","/@slidev/slides/42.md"]]),D$=i("h1",null,"Quirks",-1),R$={__name:"43",setup(e){const t={layout:"cover",hide:!1,srcSequence:"./pages/04-quirks.md"};return R(K),(n,s)=>(w(),H(zs,ue(ce(t)),{default:W(()=>[D$]),_:1},16))}},N$=G(R$,[["__file","/@slidev/slides/43.md"]]),j$=i("h2",null,"Capitalization (AKA Casemapping and Casefolding)",-1),W$=i("p",null,"All ASCII letters just so happen to be lossless when transitioning between upper and lower case versions. But this doesn’t apply to all languages and characters.",-1),q$=i("p",null,'Capitalization - "\\u0131" == "\\u0131".upcase.downcase. "\\u0131".upcase.downcase(:turkic)',-1),H$=i("p",null,"Fun fact: There are no RTL languages that have the concept of casing (Arabic, Hebrew, Persian, and more…)",-1),V$={__name:"44",setup(e){const t={hide:!1,srcSequence:"./pages/04-quirks.md"};return R(K),(n,s)=>(w(),H(Re,ue(ce(t)),{default:W(()=>[j$,W$,q$,H$]),_:1},16))}},z$=G(V$,[["__file","/@slidev/slides/44.md"]]),K$=i("h2",null,"Composition",-1),G$=i("p",null,"A[cute] E",-1),Y$=i("ul",null,[i("li",null,[v("é = "),i("code",null,"\\u00e9")]),i("li",null,[v("é = "),i("code",null,"\\u0065\\u0301"),v(" (just an "),i("code",null,"e"),v(" but with special "),i("code",null,"\\u0301"),v(" combining)")])],-1),Z$=i("pre",{class:"shiki-container"},[i("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{color:"#dbd7ca"}},"é != é")])])]),i("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{color:"#393a34"}},"é != é")])])])],-1),Q$=i("p",null,[i("code",null,"\\u003d\\u0338\\u003d"),v(" vs. "),i("code",null,"\\u2260"),v(" vs. "),i("code",null,"!=")],-1),J$=i("pre",{class:"shiki-container"},[i("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{color:"#dbd7ca"}},"'≠=' != '≠' != '!='")])])]),i("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{color:"#393a34"}},"'≠=' != '≠' != '!='")])])])],-1),X$=i("p",null,"Not not equal",-1),eF=i("pre",{class:"shiki-container"},[i("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{color:"#dbd7ca"}},"=⃥")])])]),i("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{color:"#393a34"}},"=⃥")])])])],-1),tF=i("footer",null,[i("ul",null,[i("li",null,[v("Unicode combining classes: "),i("a",{href:"https://www.compart.com/en/unicode/combining",target:"_blank",rel:"noopener"},"https://www.compart.com/en/unicode/combining")]),i("li",null,[v("Unicode Normalization Forms: "),i("a",{href:"http://www.unicode.org/reports/tr15/",target:"_blank",rel:"noopener"},"http://www.unicode.org/reports/tr15/")]),i("li",null,[v("Crate unicode_normalization: "),i("a",{href:"https://docs.rs/unicode-normalization/latest/unicode_normalization/",target:"_blank",rel:"noopener"},"https://docs.rs/unicode-normalization/latest/unicode_normalization/")])])],-1),nF={__name:"45",setup(e){const t={hide:!1,srcSequence:"./pages/04-quirks.md"};return R(K),(n,s)=>(w(),H(Re,ue(ce(t)),{default:W(()=>[K$,G$,Y$,Z$,Q$,J$,X$,eF,tF]),_:1},16))}},sF=G(nF,[["__file","/@slidev/slides/45.md"]]),oF=i("h2",null,"Emoji Composition",-1),rF=i("p",{style:{"font-size":"65%","line-height":"1rem"}}," 😶‍🌫️ 😮‍💨 😵‍💫 ❤️‍🔥 ❤️‍🩹 👁️‍🗨️ 🫱🏻‍🫲🏼 🫱🏻‍🫲🏽 🫱🏻‍🫲🏾 🫱🏻‍🫲🏿 🫱🏼‍🫲🏻 🫱🏼‍🫲🏽 🫱🏼‍🫲🏾 🫱🏼‍🫲🏿 🫱🏽‍🫲🏻 🫱🏽‍🫲🏼 🫱🏽‍🫲🏾 🫱🏽‍🫲🏿 🫱🏾‍🫲🏻 🫱🏾‍🫲🏼 🫱🏾‍🫲🏽 🫱🏾‍🫲🏿 🫱🏿‍🫲🏻 🫱🏿‍🫲🏼 🫱🏿‍🫲🏽 🫱🏿‍🫲🏾 🧔‍♂️ 🧔🏻‍♂️ 🧔🏼‍♂️ 🧔🏽‍♂️ 🧔🏾‍♂️ 🧔🏿‍♂️ 🧔‍♀️ 🧔🏻‍♀️ 🧔🏼‍♀️ 🧔🏽‍♀️ 🧔🏾‍♀️ 🧔🏿‍♀️ 👨‍🦰 👨🏻‍🦰 👨🏼‍🦰 👨🏽‍🦰 👨🏾‍🦰 👨🏿‍🦰 👨‍🦱 👨🏻‍🦱 👨🏼‍🦱 👨🏽‍🦱 👨🏾‍🦱 👨🏿‍🦱 👨‍🦳 👨🏻‍🦳 👨🏼‍🦳 👨🏽‍🦳 👨🏾‍🦳 👨🏿‍🦳 👨‍🦲 👨🏻‍🦲 👨🏼‍🦲 👨🏽‍🦲 👨🏾‍🦲 👨🏿‍🦲 👩‍🦰 👩🏻‍🦰 👩🏼‍🦰 👩🏽‍🦰 👩🏾‍🦰 👩🏿‍🦰 🧑‍🦰 🧑🏻‍🦰 🧑🏼‍🦰 🧑🏽‍🦰 🧑🏾‍🦰 🧑🏿‍🦰 👩‍🦱 👩🏻‍🦱 👩🏼‍🦱 👩🏽‍🦱 👩🏾‍🦱 👩🏿‍🦱 🧑‍🦱 🧑🏻‍🦱 🧑🏼‍🦱 🧑🏽‍🦱 🧑🏾‍🦱 🧑🏿‍🦱 👩‍🦳 👩🏻‍🦳 👩🏼‍🦳 👩🏽‍🦳 👩🏾‍🦳 👩🏿‍🦳 🧑‍🦳 🧑🏻‍🦳 🧑🏼‍🦳 🧑🏽‍🦳 🧑🏾‍🦳 🧑🏿‍🦳 👩‍🦲 👩🏻‍🦲 👩🏼‍🦲 👩🏽‍🦲 👩🏾‍🦲 👩🏿‍🦲 🧑‍🦲 🧑🏻‍🦲 🧑🏼‍🦲 🧑🏽‍🦲 🧑🏾‍🦲 🧑🏿‍🦲 👱‍♀️ 👱🏻‍♀️ 👱🏼‍♀️ 👱🏽‍♀️ 👱🏾‍♀️ 👱🏿‍♀️ 👱‍♂️ 👱🏻‍♂️ 👱🏼‍♂️ 👱🏽‍♂️ 👱🏾‍♂️ 👱🏿‍♂️ 🙍‍♂️ 🙍🏻‍♂️ 🙍🏼‍♂️ 🙍🏽‍♂️ 🙍🏾‍♂️ 🙍🏿‍♂️ 🙍‍♀️ 🙍🏻‍♀️ 🙍🏼‍♀️ 🙍🏽‍♀️ 🙍🏾‍♀️ 🙍🏿‍♀️ 🙎‍♂️ 🙎🏻‍♂️ 🙎🏼‍♂️ 🙎🏽‍♂️ 🙎🏾‍♂️ 🙎🏿‍♂️ 🙎‍♀️ 🙎🏻‍♀️ 🙎🏼‍♀️ 🙎🏽‍♀️ 🙎🏾‍♀️ 🙎🏿‍♀️ 🙅‍♂️ 🙅🏻‍♂️ 🙅🏼‍♂️ 🙅🏽‍♂️ 🙅🏾‍♂️ 🙅🏿‍♂️ 🙅‍♀️ 🙅🏻‍♀️ 🙅🏼‍♀️ 🙅🏽‍♀️ 🙅🏾‍♀️ 🙅🏿‍♀️ 🙆‍♂️ 🙆🏻‍♂️ 🙆🏼‍♂️ 🙆🏽‍♂️ 🙆🏾‍♂️ 🙆🏿‍♂️ 🙆‍♀️ 🙆🏻‍♀️ 🙆🏼‍♀️ 🙆🏽‍♀️ 🙆🏾‍♀️ 🙆🏿‍♀️ 💁‍♂️ 💁🏻‍♂️ 💁🏼‍♂️ 💁🏽‍♂️ 💁🏾‍♂️ 💁🏿‍♂️ 💁‍♀️ 💁🏻‍♀️ 💁🏼‍♀️ 💁🏽‍♀️ 💁🏾‍♀️ 💁🏿‍♀️ 🙋‍♂️ 🙋🏻‍♂️ 🙋🏼‍♂️ 🙋🏽‍♂️ 🙋🏾‍♂️ 🙋🏿‍♂️ 🙋‍♀️ 🙋🏻‍♀️ 🙋🏼‍♀️ 🙋🏽‍♀️ 🙋🏾‍♀️ 🙋🏿‍♀️ 🧏‍♂️ 🧏🏻‍♂️ 🧏🏼‍♂️ 🧏🏽‍♂️ 🧏🏾‍♂️ 🧏🏿‍♂️ 🧏‍♀️ 🧏🏻‍♀️ 🧏🏼‍♀️ 🧏🏽‍♀️ 🧏🏾‍♀️ 🧏🏿‍♀️ 🙇‍♂️ 🙇🏻‍♂️ 🙇🏼‍♂️ 🙇🏽‍♂️ 🙇🏾‍♂️ 🙇🏿‍♂️ 🙇‍♀️ 🙇🏻‍♀️ 🙇🏼‍♀️ 🙇🏽‍♀️ 🙇🏾‍♀️ 🙇🏿‍♀️ 🤦‍♂️ 🤦🏻‍♂️ 🤦🏼‍♂️ 🤦🏽‍♂️ 🤦🏾‍♂️ 🤦🏿‍♂️ 🤦‍♀️ 🤦🏻‍♀️ 🤦🏼‍♀️ 🤦🏽‍♀️ 🤦🏾‍♀️ 🤦🏿‍♀️ 🤷‍♂️ 🤷🏻‍♂️ 🤷🏼‍♂️ 🤷🏽‍♂️ 🤷🏾‍♂️ 🤷🏿‍♂️ 🤷‍♀️ 🤷🏻‍♀️ 🤷🏼‍♀️ 🤷🏽‍♀️ 🤷🏾‍♀️ 🤷🏿‍♀️ 🧑‍⚕️ 🧑🏻‍⚕️ 🧑🏼‍⚕️ 🧑🏽‍⚕️ 🧑🏾‍⚕️ 🧑🏿‍⚕️ 👨‍⚕️ 👨🏻‍⚕️ 👨🏼‍⚕️ 👨🏽‍⚕️ 👨🏾‍⚕️ 👨🏿‍⚕️ 👩‍⚕️ 👩🏻‍⚕️ 👩🏼‍⚕️ 👩🏽‍⚕️ 👩🏾‍⚕️ 👩🏿‍⚕️ 🧑‍🎓 🧑🏻‍🎓 🧑🏼‍🎓 🧑🏽‍🎓 🧑🏾‍🎓 🧑🏿‍🎓 👨‍🎓 👨🏻‍🎓 👨🏼‍🎓 👨🏽‍🎓 👨🏾‍🎓 👨🏿‍🎓 👩‍🎓 👩🏻‍🎓 👩🏼‍🎓 👩🏽‍🎓 👩🏾‍🎓 👩🏿‍🎓 🧑‍🏫 🧑🏻‍🏫 🧑🏼‍🏫 🧑🏽‍🏫 🧑🏾‍🏫 🧑🏿‍🏫 👨‍🏫 👨🏻‍🏫 👨🏼‍🏫 👨🏽‍🏫 👨🏾‍🏫 👨🏿‍🏫 👩‍🏫 👩🏻‍🏫 👩🏼‍🏫 👩🏽‍🏫 👩🏾‍🏫 👩🏿‍🏫 🧑‍⚖️ 🧑🏻‍⚖️ 🧑🏼‍⚖️ 🧑🏽‍⚖️ 🧑🏾‍⚖️ 🧑🏿‍⚖️ 👨‍⚖️ 👨🏻‍⚖️ 👨🏼‍⚖️ 👨🏽‍⚖️ 👨🏾‍⚖️ 👨🏿‍⚖️ 👩‍⚖️ 👩🏻‍⚖️ 👩🏼‍⚖️ 👩🏽‍⚖️ 👩🏾‍⚖️ 👩🏿‍⚖️ 🧑‍🌾 🧑🏻‍🌾 🧑🏼‍🌾 🧑🏽‍🌾 🧑🏾‍🌾 🧑🏿‍🌾 👨‍🌾 👨🏻‍🌾 👨🏼‍🌾 👨🏽‍🌾 👨🏾‍🌾 👨🏿‍🌾 👩‍🌾 👩🏻‍🌾 👩🏼‍🌾 👩🏽‍🌾 👩🏾‍🌾 👩🏿‍🌾 🧑‍🍳 🧑🏻‍🍳 🧑🏼‍🍳 🧑🏽‍🍳 🧑🏾‍🍳 🧑🏿‍🍳 👨‍🍳 👨🏻‍🍳 👨🏼‍🍳 👨🏽‍🍳 👨🏾‍🍳 👨🏿‍🍳 👩‍🍳 👩🏻‍🍳 👩🏼‍🍳 👩🏽‍🍳 👩🏾‍🍳 👩🏿‍🍳 🧑‍🔧 🧑🏻‍🔧 🧑🏼‍🔧 🧑🏽‍🔧 🧑🏾‍🔧 🧑🏿‍🔧 👨‍🔧 👨🏻‍🔧 👨🏼‍🔧 👨🏽‍🔧 👨🏾‍🔧 👨🏿‍🔧 👩‍🔧 👩🏻‍🔧 👩🏼‍🔧 👩🏽‍🔧 👩🏾‍🔧 👩🏿‍🔧 🧑‍🏭 🧑🏻‍🏭 🧑🏼‍🏭 🧑🏽‍🏭 🧑🏾‍🏭 🧑🏿‍🏭 👨‍🏭 👨🏻‍🏭 👨🏼‍🏭 👨🏽‍🏭 👨🏾‍🏭 👨🏿‍🏭 👩‍🏭 👩🏻‍🏭 👩🏼‍🏭 👩🏽‍🏭 👩🏾‍🏭 👩🏿‍🏭 🧑‍💼 🧑🏻‍💼 🧑🏼‍💼 🧑🏽‍💼 🧑🏾‍💼 🧑🏿‍💼 👨‍💼 👨🏻‍💼 👨🏼‍💼 👨🏽‍💼 👨🏾‍💼 👨🏿‍💼 👩‍💼 👩🏻‍💼 👩🏼‍💼 👩🏽‍💼 👩🏾‍💼 👩🏿‍💼 🧑‍🔬 🧑🏻‍🔬 🧑🏼‍🔬 🧑🏽‍🔬 🧑🏾‍🔬 🧑🏿‍🔬 👨‍🔬 👨🏻‍🔬 👨🏼‍🔬 👨🏽‍🔬 👨🏾‍🔬 👨🏿‍🔬 👩‍🔬 👩🏻‍🔬 👩🏼‍🔬 👩🏽‍🔬 👩🏾‍🔬 👩🏿‍🔬 🧑‍💻 🧑🏻‍💻 🧑🏼‍💻 🧑🏽‍💻 🧑🏾‍💻 🧑🏿‍💻 👨‍💻 👨🏻‍💻 👨🏼‍💻 👨🏽‍💻 👨🏾‍💻 👨🏿‍💻 👩‍💻 👩🏻‍💻 👩🏼‍💻 👩🏽‍💻 👩🏾‍💻 👩🏿‍💻 🧑‍🎤 🧑🏻‍🎤 🧑🏼‍🎤 🧑🏽‍🎤 🧑🏾‍🎤 🧑🏿‍🎤 👨‍🎤 👨🏻‍🎤 👨🏼‍🎤 👨🏽‍🎤 👨🏾‍🎤 👨🏿‍🎤 👩‍🎤 👩🏻‍🎤 👩🏼‍🎤 👩🏽‍🎤 👩🏾‍🎤 👩🏿‍🎤 🧑‍🎨 🧑🏻‍🎨 🧑🏼‍🎨 🧑🏽‍🎨 🧑🏾‍🎨 🧑🏿‍🎨 👨‍🎨 👨🏻‍🎨 👨🏼‍🎨 👨🏽‍🎨 👨🏾‍🎨 👨🏿‍🎨 👩‍🎨 👩🏻‍🎨 👩🏼‍🎨 👩🏽‍🎨 👩🏾‍🎨 👩🏿‍🎨 🧑‍✈️ 🧑🏻‍✈️ 🧑🏼‍✈️ 🧑🏽‍✈️ 🧑🏾‍✈️ 🧑🏿‍✈️ 👨‍✈️ 👨🏻‍✈️ 👨🏼‍✈️ 👨🏽‍✈️ 👨🏾‍✈️ 👨🏿‍✈️ 👩‍✈️ 👩🏻‍✈️ 👩🏼‍✈️ 👩🏽‍✈️ 👩🏾‍✈️ 👩🏿‍✈️ 🧑‍🚀 🧑🏻‍🚀 🧑🏼‍🚀 🧑🏽‍🚀 🧑🏾‍🚀 🧑🏿‍🚀 👨‍🚀 👨🏻‍🚀 👨🏼‍🚀 👨🏽‍🚀 👨🏾‍🚀 👨🏿‍🚀 👩‍🚀 👩🏻‍🚀 👩🏼‍🚀 👩🏽‍🚀 👩🏾‍🚀 👩🏿‍🚀 🧑‍🚒 🧑🏻‍🚒 🧑🏼‍🚒 🧑🏽‍🚒 🧑🏾‍🚒 🧑🏿‍🚒 👨‍🚒 👨🏻‍🚒 👨🏼‍🚒 👨🏽‍🚒 👨🏾‍🚒 👨🏿‍🚒 👩‍🚒 👩🏻‍🚒 👩🏼‍🚒 👩🏽‍🚒 👩🏾‍🚒 👩🏿‍🚒 👮‍♂️ 👮🏻‍♂️ 👮🏼‍♂️ 👮🏽‍♂️ 👮🏾‍♂️ 👮🏿‍♂️ 👮‍♀️ 👮🏻‍♀️ 👮🏼‍♀️ 👮🏽‍♀️ 👮🏾‍♀️ 👮🏿‍♀️ 🕵️‍♂️ 🕵🏻‍♂️ 🕵🏼‍♂️ 🕵🏽‍♂️ 🕵🏾‍♂️ 🕵🏿‍♂️ 🕵️‍♀️ 🕵🏻‍♀️ 🕵🏼‍♀️ 🕵🏽‍♀️ 🕵🏾‍♀️ 🕵🏿‍♀️ 💂‍♂️ 💂🏻‍♂️ 💂🏼‍♂️ 💂🏽‍♂️ 💂🏾‍♂️ 💂🏿‍♂️ 💂‍♀️ 💂🏻‍♀️ 💂🏼‍♀️ 💂🏽‍♀️ 💂🏾‍♀️ 💂🏿‍♀️ 👷‍♂️ 👷🏻‍♂️ 👷🏼‍♂️ 👷🏽‍♂️ 👷🏾‍♂️ 👷🏿‍♂️ 👷‍♀️ 👷🏻‍♀️ 👷🏼‍♀️ 👷🏽‍♀️ 👷🏾‍♀️ 👷🏿‍♀️ 👳‍♂️ 👳🏻‍♂️ 👳🏼‍♂️ 👳🏽‍♂️ 👳🏾‍♂️ 👳🏿‍♂️ 👳‍♀️ 👳🏻‍♀️ 👳🏼‍♀️ 👳🏽‍♀️ 👳🏾‍♀️ 👳🏿‍♀️ 🤵‍♂️ 🤵🏻‍♂️ 🤵🏼‍♂️ 🤵🏽‍♂️ 🤵🏾‍♂️ 🤵🏿‍♂️ 🤵‍♀️ 🤵🏻‍♀️ 🤵🏼‍♀️ 🤵🏽‍♀️ 🤵🏾‍♀️ 🤵🏿‍♀️ 👰‍♂️ 👰🏻‍♂️ 👰🏼‍♂️ 👰🏽‍♂️ 👰🏾‍♂️ 👰🏿‍♂️ 👰‍♀️ 👰🏻‍♀️ 👰🏼‍♀️ 👰🏽‍♀️ 👰🏾‍♀️ 👰🏿‍♀️ 👩‍🍼 👩🏻‍🍼 👩🏼‍🍼 👩🏽‍🍼 👩🏾‍🍼 👩🏿‍🍼 👨‍🍼 👨🏻‍🍼 👨🏼‍🍼 👨🏽‍🍼 👨🏾‍🍼 👨🏿‍🍼 🧑‍🍼 🧑🏻‍🍼 🧑🏼‍🍼 🧑🏽‍🍼 🧑🏾‍🍼 🧑🏿‍🍼 🧑‍🎄 🧑🏻‍🎄 🧑🏼‍🎄 🧑🏽‍🎄 🧑🏾‍🎄 🧑🏿‍🎄 🦸‍♂️ 🦸🏻‍♂️ 🦸🏼‍♂️ 🦸🏽‍♂️ 🦸🏾‍♂️ 🦸🏿‍♂️ 🦸‍♀️ 🦸🏻‍♀️ 🦸🏼‍♀️ 🦸🏽‍♀️ 🦸🏾‍♀️ 🦸🏿‍♀️ 🦹‍♂️ 🦹🏻‍♂️ 🦹🏼‍♂️ 🦹🏽‍♂️ 🦹🏾‍♂️ 🦹🏿‍♂️ 🦹‍♀️ 🦹🏻‍♀️ 🦹🏼‍♀️ 🦹🏽‍♀️ 🦹🏾‍♀️ 🦹🏿‍♀️ 🧙‍♂️ 🧙🏻‍♂️ 🧙🏼‍♂️ 🧙🏽‍♂️ 🧙🏾‍♂️ 🧙🏿‍♂️ 🧙‍♀️ 🧙🏻‍♀️ 🧙🏼‍♀️ 🧙🏽‍♀️ 🧙🏾‍♀️ 🧙🏿‍♀️ 🧚‍♂️ 🧚🏻‍♂️ 🧚🏼‍♂️ 🧚🏽‍♂️ 🧚🏾‍♂️ 🧚🏿‍♂️ 🧚‍♀️ 🧚🏻‍♀️ 🧚🏼‍♀️ 🧚🏽‍♀️ 🧚🏾‍♀️ 🧚🏿‍♀️ 🧛‍♂️ 🧛🏻‍♂️ 🧛🏼‍♂️ 🧛🏽‍♂️ 🧛🏾‍♂️ 🧛🏿‍♂️ 🧛‍♀️ 🧛🏻‍♀️ 🧛🏼‍♀️ 🧛🏽‍♀️ 🧛🏾‍♀️ 🧛🏿‍♀️ 🧜‍♂️ 🧜🏻‍♂️ 🧜🏼‍♂️ 🧜🏽‍♂️ 🧜🏾‍♂️ 🧜🏿‍♂️ 🧜‍♀️ 🧜🏻‍♀️ 🧜🏼‍♀️ 🧜🏽‍♀️ 🧜🏾‍♀️ 🧜🏿‍♀️ 🧝‍♂️ 🧝🏻‍♂️ 🧝🏼‍♂️ 🧝🏽‍♂️ 🧝🏾‍♂️ 🧝🏿‍♂️ 🧝‍♀️ 🧝🏻‍♀️ 🧝🏼‍♀️ 🧝🏽‍♀️ 🧝🏾‍♀️ 🧝🏿‍♀️ 🧞‍♂️ 🧞‍♀️ 🧟‍♂️ 🧟‍♀️ 💆‍♂️ 💆🏻‍♂️ 💆🏼‍♂️ 💆🏽‍♂️ 💆🏾‍♂️ 💆🏿‍♂️ 💆‍♀️ 💆🏻‍♀️ 💆🏼‍♀️ 💆🏽‍♀️ 💆🏾‍♀️ 💆🏿‍♀️ 💇‍♂️ 💇🏻‍♂️ 💇🏼‍♂️ 💇🏽‍♂️ 💇🏾‍♂️ 💇🏿‍♂️ 💇‍♀️ 💇🏻‍♀️ 💇🏼‍♀️ 💇🏽‍♀️ 💇🏾‍♀️ 💇🏿‍♀️ 🚶‍♂️ 🚶🏻‍♂️ 🚶🏼‍♂️ 🚶🏽‍♂️ 🚶🏾‍♂️ 🚶🏿‍♂️ 🚶‍♀️ 🚶🏻‍♀️ 🚶🏼‍♀️ 🚶🏽‍♀️ 🚶🏾‍♀️ 🚶🏿‍♀️ 🧍‍♂️ 🧍🏻‍♂️ 🧍🏼‍♂️ 🧍🏽‍♂️ 🧍🏾‍♂️ 🧍🏿‍♂️ 🧍‍♀️ 🧍🏻‍♀️ 🧍🏼‍♀️ 🧍🏽‍♀️ 🧍🏾‍♀️ 🧍🏿‍♀️ 🧎‍♂️ 🧎🏻‍♂️ 🧎🏼‍♂️ 🧎🏽‍♂️ 🧎🏾‍♂️ 🧎🏿‍♂️ 🧎‍♀️ 🧎🏻‍♀️ 🧎🏼‍♀️ 🧎🏽‍♀️ 🧎🏾‍♀️ 🧎🏿‍♀️ 🧑‍🦯 🧑🏻‍🦯 🧑🏼‍🦯 🧑🏽‍🦯 🧑🏾‍🦯 🧑🏿‍🦯 👨‍🦯 👨🏻‍🦯 👨🏼‍🦯 👨🏽‍🦯 👨🏾‍🦯 👨🏿‍🦯 👩‍🦯 👩🏻‍🦯 👩🏼‍🦯 👩🏽‍🦯 👩🏾‍🦯 👩🏿‍🦯 🧑‍🦼 🧑🏻‍🦼 🧑🏼‍🦼 🧑🏽‍🦼 🧑🏾‍🦼 🧑🏿‍🦼 👨‍🦼 👨🏻‍🦼 👨🏼‍🦼 👨🏽‍🦼 👨🏾‍🦼 👨🏿‍🦼 👩‍🦼 👩🏻‍🦼 👩🏼‍🦼 👩🏽‍🦼 👩🏾‍🦼 👩🏿‍🦼 🧑‍🦽 🧑🏻‍🦽 🧑🏼‍🦽 🧑🏽‍🦽 🧑🏾‍🦽 🧑🏿‍🦽 👨‍🦽 👨🏻‍🦽 👨🏼‍🦽 👨🏽‍🦽 👨🏾‍🦽 👨🏿‍🦽 👩‍🦽 👩🏻‍🦽 👩🏼‍🦽 👩🏽‍🦽 👩🏾‍🦽 👩🏿‍🦽 🏃‍♂️ 🏃🏻‍♂️ 🏃🏼‍♂️ 🏃🏽‍♂️ 🏃🏾‍♂️ 🏃🏿‍♂️ 🏃‍♀️ 🏃🏻‍♀️ 🏃🏼‍♀️ 🏃🏽‍♀️ 🏃🏾‍♀️ 🏃🏿‍♀️ 👯‍♂️ 👯‍♀️ 🧖‍♂️ 🧖🏻‍♂️ 🧖🏼‍♂️ 🧖🏽‍♂️ 🧖🏾‍♂️ 🧖🏿‍♂️ 🧖‍♀️ 🧖🏻‍♀️ 🧖🏼‍♀️ 🧖🏽‍♀️ 🧖🏾‍♀️ 🧖🏿‍♀️ 🧗‍♂️ 🧗🏻‍♂️ 🧗🏼‍♂️ 🧗🏽‍♂️ 🧗🏾‍♂️ 🧗🏿‍♂️ 🧗‍♀️ 🧗🏻‍♀️ 🧗🏼‍♀️ 🧗🏽‍♀️ 🧗🏾‍♀️ 🧗🏿‍♀️ 🏌️‍♂️ 🏌🏻‍♂️ 🏌🏼‍♂️ 🏌🏽‍♂️ 🏌🏾‍♂️ 🏌🏿‍♂️ 🏌️‍♀️ 🏌🏻‍♀️ 🏌🏼‍♀️ 🏌🏽‍♀️ 🏌🏾‍♀️ 🏌🏿‍♀️ 🏄‍♂️ 🏄🏻‍♂️ 🏄🏼‍♂️ 🏄🏽‍♂️ 🏄🏾‍♂️ 🏄🏿‍♂️ 🏄‍♀️ 🏄🏻‍♀️ 🏄🏼‍♀️ 🏄🏽‍♀️ 🏄🏾‍♀️ 🏄🏿‍♀️ 🚣‍♂️ 🚣🏻‍♂️ 🚣🏼‍♂️ 🚣🏽‍♂️ 🚣🏾‍♂️ 🚣🏿‍♂️ 🚣‍♀️ 🚣🏻‍♀️ 🚣🏼‍♀️ 🚣🏽‍♀️ 🚣🏾‍♀️ 🚣🏿‍♀️ 🏊‍♂️ 🏊🏻‍♂️ 🏊🏼‍♂️ 🏊🏽‍♂️ 🏊🏾‍♂️ 🏊🏿‍♂️ 🏊‍♀️ 🏊🏻‍♀️ 🏊🏼‍♀️ 🏊🏽‍♀️ 🏊🏾‍♀️ 🏊🏿‍♀️ ⛹️‍♂️ ⛹🏻‍♂️ ⛹🏼‍♂️ ⛹🏽‍♂️ ⛹🏾‍♂️ ⛹🏿‍♂️ ⛹️‍♀️ ⛹🏻‍♀️ ⛹🏼‍♀️ ⛹🏽‍♀️ ⛹🏾‍♀️ ⛹🏿‍♀️ 🏋️‍♂️ 🏋🏻‍♂️ 🏋🏼‍♂️ 🏋🏽‍♂️ 🏋🏾‍♂️ 🏋🏿‍♂️ 🏋️‍♀️ 🏋🏻‍♀️ 🏋🏼‍♀️ 🏋🏽‍♀️ 🏋🏾‍♀️ 🏋🏿‍♀️ 🚴‍♂️ 🚴🏻‍♂️ 🚴🏼‍♂️ 🚴🏽‍♂️ 🚴🏾‍♂️ 🚴🏿‍♂️ 🚴‍♀️ 🚴🏻‍♀️ 🚴🏼‍♀️ 🚴🏽‍♀️ 🚴🏾‍♀️ 🚴🏿‍♀️ 🚵‍♂️ 🚵🏻‍♂️ 🚵🏼‍♂️ 🚵🏽‍♂️ 🚵🏾‍♂️ 🚵🏿‍♂️ 🚵‍♀️ 🚵🏻‍♀️ 🚵🏼‍♀️ 🚵🏽‍♀️ 🚵🏾‍♀️ 🚵🏿‍♀️ 🤸‍♂️ 🤸🏻‍♂️ 🤸🏼‍♂️ 🤸🏽‍♂️ 🤸🏾‍♂️ 🤸🏿‍♂️ 🤸‍♀️ 🤸🏻‍♀️ 🤸🏼‍♀️ 🤸🏽‍♀️ 🤸🏾‍♀️ 🤸🏿‍♀️ 🤼‍♂️ 🤼‍♀️ 🤽‍♂️ 🤽🏻‍♂️ 🤽🏼‍♂️ 🤽🏽‍♂️ 🤽🏾‍♂️ 🤽🏿‍♂️ 🤽‍♀️ 🤽🏻‍♀️ 🤽🏼‍♀️ 🤽🏽‍♀️ 🤽🏾‍♀️ 🤽🏿‍♀️ 🤾‍♂️ 🤾🏻‍♂️ 🤾🏼‍♂️ 🤾🏽‍♂️ 🤾🏾‍♂️ 🤾🏿‍♂️ 🤾‍♀️ 🤾🏻‍♀️ 🤾🏼‍♀️ 🤾🏽‍♀️ 🤾🏾‍♀️ 🤾🏿‍♀️ 🤹‍♂️ 🤹🏻‍♂️ 🤹🏼‍♂️ 🤹🏽‍♂️ 🤹🏾‍♂️ 🤹🏿‍♂️ 🤹‍♀️ 🤹🏻‍♀️ 🤹🏼‍♀️ 🤹🏽‍♀️ 🤹🏾‍♀️ 🤹🏿‍♀️ 🧘‍♂️ 🧘🏻‍♂️ 🧘🏼‍♂️ 🧘🏽‍♂️ 🧘🏾‍♂️ 🧘🏿‍♂️ 🧘‍♀️ 🧘🏻‍♀️ 🧘🏼‍♀️ 🧘🏽‍♀️ 🧘🏾‍♀️ 🧘🏿‍♀️ 🧑‍🤝‍🧑 🧑🏻‍🤝‍🧑🏻 🧑🏻‍🤝‍🧑🏼 🧑🏻‍🤝‍🧑🏽 🧑🏻‍🤝‍🧑🏾 🧑🏻‍🤝‍🧑🏿 🧑🏼‍🤝‍🧑🏻 🧑🏼‍🤝‍🧑🏼 🧑🏼‍🤝‍🧑🏽 🧑🏼‍🤝‍🧑🏾 🧑🏼‍🤝‍🧑🏿 🧑🏽‍🤝‍🧑🏻 🧑🏽‍🤝‍🧑🏼 🧑🏽‍🤝‍🧑🏽 🧑🏽‍🤝‍🧑🏾 🧑🏽‍🤝‍🧑🏿 🧑🏾‍🤝‍🧑🏻 🧑🏾‍🤝‍🧑🏼 🧑🏾‍🤝‍🧑🏽 🧑🏾‍🤝‍🧑🏾 🧑🏾‍🤝‍🧑🏿 🧑🏿‍🤝‍🧑🏻 🧑🏿‍🤝‍🧑🏼 🧑🏿‍🤝‍🧑🏽 🧑🏿‍🤝‍🧑🏾 🧑🏿‍🤝‍🧑🏿 👩🏻‍🤝‍👩🏼 👩🏻‍🤝‍👩🏽 👩🏻‍🤝‍👩🏾 👩🏻‍🤝‍👩🏿 👩🏼‍🤝‍👩🏻 👩🏼‍🤝‍👩🏽 👩🏼‍🤝‍👩🏾 👩🏼‍🤝‍👩🏿 👩🏽‍🤝‍👩🏻 👩🏽‍🤝‍👩🏼 👩🏽‍🤝‍👩🏾 👩🏽‍🤝‍👩🏿 👩🏾‍🤝‍👩🏻 👩🏾‍🤝‍👩🏼 👩🏾‍🤝‍👩🏽 👩🏾‍🤝‍👩🏿 👩🏿‍🤝‍👩🏻 👩🏿‍🤝‍👩🏼 👩🏿‍🤝‍👩🏽 👩🏿‍🤝‍👩🏾 👩🏻‍🤝‍👨🏼 👩🏻‍🤝‍👨🏽 👩🏻‍🤝‍👨🏾 👩🏻‍🤝‍👨🏿 👩🏼‍🤝‍👨🏻 👩🏼‍🤝‍👨🏽 👩🏼‍🤝‍👨🏾 👩🏼‍🤝‍👨🏿 👩🏽‍🤝‍👨🏻 👩🏽‍🤝‍👨🏼 👩🏽‍🤝‍👨🏾 👩🏽‍🤝‍👨🏿 👩🏾‍🤝‍👨🏻 👩🏾‍🤝‍👨🏼 👩🏾‍🤝‍👨🏽 👩🏾‍🤝‍👨🏿 👩🏿‍🤝‍👨🏻 👩🏿‍🤝‍👨🏼 👩🏿‍🤝‍👨🏽 👩🏿‍🤝‍👨🏾 👨🏻‍🤝‍👨🏼 👨🏻‍🤝‍👨🏽 👨🏻‍🤝‍👨🏾 👨🏻‍🤝‍👨🏿 👨🏼‍🤝‍👨🏻 👨🏼‍🤝‍👨🏽 👨🏼‍🤝‍👨🏾 👨🏼‍🤝‍👨🏿 👨🏽‍🤝‍👨🏻 👨🏽‍🤝‍👨🏼 👨🏽‍🤝‍👨🏾 👨🏽‍🤝‍👨🏿 👨🏾‍🤝‍👨🏻 👨🏾‍🤝‍👨🏼 👨🏾‍🤝‍👨🏽 👨🏾‍🤝‍👨🏿 👨🏿‍🤝‍👨🏻 👨🏿‍🤝‍👨🏼 👨🏿‍🤝‍👨🏽 👨🏿‍🤝‍👨🏾 💏 🧑🏻‍❤️‍💋‍🧑🏼 🧑🏻‍❤️‍💋‍🧑🏽 🧑🏻‍❤️‍💋‍🧑🏾 🧑🏻‍❤️‍💋‍🧑🏿 🧑🏼‍❤️‍💋‍🧑🏻 🧑🏼‍❤️‍💋‍🧑🏽 🧑🏼‍❤️‍💋‍🧑🏾 🧑🏼‍❤️‍💋‍🧑🏿 🧑🏽‍❤️‍💋‍🧑🏻 🧑🏽‍❤️‍💋‍🧑🏼 🧑🏽‍❤️‍💋‍🧑🏾 🧑🏽‍❤️‍💋‍🧑🏿 🧑🏾‍❤️‍💋‍🧑🏻 🧑🏾‍❤️‍💋‍🧑🏼 🧑🏾‍❤️‍💋‍🧑🏽 🧑🏾‍❤️‍💋‍🧑🏿 🧑🏿‍❤️‍💋‍🧑🏻 🧑🏿‍❤️‍💋‍🧑🏼 🧑🏿‍❤️‍💋‍🧑🏽 🧑🏿‍❤️‍💋‍🧑🏾 👩‍❤️‍💋‍👨 👩🏻‍❤️‍💋‍👨🏻 👩🏻‍❤️‍💋‍👨🏼 👩🏻‍❤️‍💋‍👨🏽 👩🏻‍❤️‍💋‍👨🏾 👩🏻‍❤️‍💋‍👨🏿 👩🏼‍❤️‍💋‍👨🏻 👩🏼‍❤️‍💋‍👨🏼 👩🏼‍❤️‍💋‍👨🏽 👩🏼‍❤️‍💋‍👨🏾 👩🏼‍❤️‍💋‍👨🏿 👩🏽‍❤️‍💋‍👨🏻 👩🏽‍❤️‍💋‍👨🏼 👩🏽‍❤️‍💋‍👨🏽 👩🏽‍❤️‍💋‍👨🏾 👩🏽‍❤️‍💋‍👨🏿 👩🏾‍❤️‍💋‍👨🏻 👩🏾‍❤️‍💋‍👨🏼 👩🏾‍❤️‍💋‍👨🏽 👩🏾‍❤️‍💋‍👨🏾 👩🏾‍❤️‍💋‍👨🏿 👩🏿‍❤️‍💋‍👨🏻 👩🏿‍❤️‍💋‍👨🏼 👩🏿‍❤️‍💋‍👨🏽 👩🏿‍❤️‍💋‍👨🏾 👩🏿‍❤️‍💋‍👨🏿 👨‍❤️‍💋‍👨 👨🏻‍❤️‍💋‍👨🏻 👨🏻‍❤️‍💋‍👨🏼 👨🏻‍❤️‍💋‍👨🏽 👨🏻‍❤️‍💋‍👨🏾 👨🏻‍❤️‍💋‍👨🏿 👨🏼‍❤️‍💋‍👨🏻 👨🏼‍❤️‍💋‍👨🏼 👨🏼‍❤️‍💋‍👨🏽 👨🏼‍❤️‍💋‍👨🏾 👨🏼‍❤️‍💋‍👨🏿 👨🏽‍❤️‍💋‍👨🏻 👨🏽‍❤️‍💋‍👨🏼 👨🏽‍❤️‍💋‍👨🏽 👨🏽‍❤️‍💋‍👨🏾 👨🏽‍❤️‍💋‍👨🏿 👨🏾‍❤️‍💋‍👨🏻 👨🏾‍❤️‍💋‍👨🏼 👨🏾‍❤️‍💋‍👨🏽 👨🏾‍❤️‍💋‍👨🏾 👨🏾‍❤️‍💋‍👨🏿 👨🏿‍❤️‍💋‍👨🏻 👨🏿‍❤️‍💋‍👨🏼 👨🏿‍❤️‍💋‍👨🏽 👨🏿‍❤️‍💋‍👨🏾 👨🏿‍❤️‍💋‍👨🏿 👩‍❤️‍💋‍👩 👩🏻‍❤️‍💋‍👩🏻 👩🏻‍❤️‍💋‍👩🏼 👩🏻‍❤️‍💋‍👩🏽 👩🏻‍❤️‍💋‍👩🏾 👩🏻‍❤️‍💋‍👩🏿 👩🏼‍❤️‍💋‍👩🏻 👩🏼‍❤️‍💋‍👩🏼 👩🏼‍❤️‍💋‍👩🏽 👩🏼‍❤️‍💋‍👩🏾 👩🏼‍❤️‍💋‍👩🏿 👩🏽‍❤️‍💋‍👩🏻 👩🏽‍❤️‍💋‍👩🏼 👩🏽‍❤️‍💋‍👩🏽 👩🏽‍❤️‍💋‍👩🏾 👩🏽‍❤️‍💋‍👩🏿 👩🏾‍❤️‍💋‍👩🏻 👩🏾‍❤️‍💋‍👩🏼 👩🏾‍❤️‍💋‍👩🏽 👩🏾‍❤️‍💋‍👩🏾 👩🏾‍❤️‍💋‍👩🏿 👩🏿‍❤️‍💋‍👩🏻 👩🏿‍❤️‍💋‍👩🏼 👩🏿‍❤️‍💋‍👩🏽 👩🏿‍❤️‍💋‍👩🏾 👩🏿‍❤️‍💋‍👩🏿 💑 🧑🏻‍❤️‍🧑🏼 🧑🏻‍❤️‍🧑🏽 🧑🏻‍❤️‍🧑🏾 🧑🏻‍❤️‍🧑🏿 🧑🏼‍❤️‍🧑🏻 🧑🏼‍❤️‍🧑🏽 🧑🏼‍❤️‍🧑🏾 🧑🏼‍❤️‍🧑🏿 🧑🏽‍❤️‍🧑🏻 🧑🏽‍❤️‍🧑🏼 🧑🏽‍❤️‍🧑🏾 🧑🏽‍❤️‍🧑🏿 🧑🏾‍❤️‍🧑🏻 🧑🏾‍❤️‍🧑🏼 🧑🏾‍❤️‍🧑🏽 🧑🏾‍❤️‍🧑🏿 🧑🏿‍❤️‍🧑🏻 🧑🏿‍❤️‍🧑🏼 🧑🏿‍❤️‍🧑🏽 🧑🏿‍❤️‍🧑🏾 👩‍❤️‍👨 👩🏻‍❤️‍👨🏻 👩🏻‍❤️‍👨🏼 👩🏻‍❤️‍👨🏽 👩🏻‍❤️‍👨🏾 👩🏻‍❤️‍👨🏿 👩🏼‍❤️‍👨🏻 👩🏼‍❤️‍👨🏼 👩🏼‍❤️‍👨🏽 👩🏼‍❤️‍👨🏾 👩🏼‍❤️‍👨🏿 👩🏽‍❤️‍👨🏻 👩🏽‍❤️‍👨🏼 👩🏽‍❤️‍👨🏽 👩🏽‍❤️‍👨🏾 👩🏽‍❤️‍👨🏿 👩🏾‍❤️‍👨🏻 👩🏾‍❤️‍👨🏼 👩🏾‍❤️‍👨🏽 👩🏾‍❤️‍👨🏾 👩🏾‍❤️‍👨🏿 👩🏿‍❤️‍👨🏻 👩🏿‍❤️‍👨🏼 👩🏿‍❤️‍👨🏽 👩🏿‍❤️‍👨🏾 👩🏿‍❤️‍👨🏿 👨‍❤️‍👨 👨🏻‍❤️‍👨🏻 👨🏻‍❤️‍👨🏼 👨🏻‍❤️‍👨🏽 👨🏻‍❤️‍👨🏾 👨🏻‍❤️‍👨🏿 👨🏼‍❤️‍👨🏻 👨🏼‍❤️‍👨🏼 👨🏼‍❤️‍👨🏽 👨🏼‍❤️‍👨🏾 👨🏼‍❤️‍👨🏿 👨🏽‍❤️‍👨🏻 👨🏽‍❤️‍👨🏼 👨🏽‍❤️‍👨🏽 👨🏽‍❤️‍👨🏾 👨🏽‍❤️‍👨🏿 👨🏾‍❤️‍👨🏻 👨🏾‍❤️‍👨🏼 👨🏾‍❤️‍👨🏽 👨🏾‍❤️‍👨🏾 👨🏾‍❤️‍👨🏿 👨🏿‍❤️‍👨🏻 👨🏿‍❤️‍👨🏼 👨🏿‍❤️‍👨🏽 👨🏿‍❤️‍👨🏾 👨🏿‍❤️‍👨🏿 👩‍❤️‍👩 👩🏻‍❤️‍👩🏻 👩🏻‍❤️‍👩🏼 👩🏻‍❤️‍👩🏽 👩🏻‍❤️‍👩🏾 👩🏻‍❤️‍👩🏿 👩🏼‍❤️‍👩🏻 👩🏼‍❤️‍👩🏼 👩🏼‍❤️‍👩🏽 👩🏼‍❤️‍👩🏾 👩🏼‍❤️‍👩🏿 👩🏽‍❤️‍👩🏻 👩🏽‍❤️‍👩🏼 👩🏽‍❤️‍👩🏽 👩🏽‍❤️‍👩🏾 👩🏽‍❤️‍👩🏿 👩🏾‍❤️‍👩🏻 👩🏾‍❤️‍👩🏼 👩🏾‍❤️‍👩🏽 👩🏾‍❤️‍👩🏾 👩🏾‍❤️‍👩🏿 👩🏿‍❤️‍👩🏻 👩🏿‍❤️‍👩🏼 👩🏿‍❤️‍👩🏽 👩🏿‍❤️‍👩🏾 👩🏿‍❤️‍👩🏿 👪 👨‍👩‍👦 👨‍👩‍👧 👨‍👩‍👧‍👦 👨‍👩‍👦‍👦 👨‍👩‍👧‍👧 👨‍👨‍👦 👨‍👨‍👧 👨‍👨‍👧‍👦 👨‍👨‍👦‍👦 👨‍👨‍👧‍👧 👩‍👩‍👦 👩‍👩‍👧 👩‍👩‍👧‍👦 👩‍👩‍👦‍👦 👩‍👩‍👧‍👧 👨‍👦 👨‍👦‍👦 👨‍👧 👨‍👧‍👦 👨‍👧‍👧 👩‍👦 👩‍👦‍👦 👩‍👧 👩‍👧‍👦 👩‍👧‍👧 🐕‍🦺 🐈‍⬛ 🐻‍❄️ 🐦‍⬛ 🏳️‍🌈 🏳️‍⚧️ 🏴‍☠️ ",-1),iF={__name:"46",setup(e){const t={hide:!1,srcSequence:"./pages/04-quirks.md"};return R(K),(n,s)=>(w(),H(Re,ue(ce(t)),{default:W(()=>[oF,rF]),_:1},16))}},aF=G(iF,[["__file","/@slidev/slides/46.md"]]),lF=i("h2",null,"Digraphs/ligatures",-1),cF=i("p",null,"Digraphs and ligatures are both made by combining two glyphs:",-1),uF=i("ul",null,[i("li",null,"In a digraph, the glyphs remain separate but are placed close together."),i("li",null,"In a ligature, the glyphs are fused into a single glyph.")],-1),dF=i("p",null,"Generally speaking, Unicode doesn’t like dealing with this problem.",-1),fF=i("blockquote",null,[i("p",null,[v("The Unicode Standard is a character encoding standard, and is "),i("strong",null,"not intended to standardize ligatures or other presentation forms"),v(", or any other aspects of the details of font and glyph design. The ligatures which you can find in the Unicode Standard are "),i("strong",null,"compatibility encodings"),v(" only—and are not meant to set a precedent requiring the encoding of all ligatures as characters.")])],-1),pF=i("p",null,"TL;DR; you shouldn’t expect any ligatures/digraphs to be added to Unicode any time soon.",-1),hF={__name:"47",setup(e){const t={hide:!1,srcSequence:"./pages/04-quirks.md"};return R(K),(n,s)=>(w(),H(Re,ue(ce(t)),{default:W(()=>[lF,cF,uF,dF,fF,pF]),_:1},16))}},mF=G(hF,[["__file","/@slidev/slides/47.md"]]),gF=i("h2",null,"Flags",-1),yF=i("ul",null,[i("li",null,[i("p",null,"Who adds a new flag?")]),i("li",null,[i("p",null,"Flag sequences"),i("ul",null,[i("li",null,":RGI_Emoji_Flag_Sequence"),i("li",null,[i("a",{href:"https://unicode.org/reports/tr51/#Flags",target:"_blank",rel:"noopener"},"https://unicode.org/reports/tr51/#Flags")]),i("li",null,"Qatar flag = wideboi")])]),i("li",null,[i("p",null,'"🇭🇪🇱🇱🇴🇼🇴🇷🇱🇩" ??')])],-1),vF=i("p",null,"Flag types:",-1),_F=i("ul",null,[i("li",null,"country/region"),i("li",null,"local (gbeng, etc)")],-1),bF={__name:"48",setup(e){const t={hide:!1,srcSequence:"./pages/04-quirks.md"};return R(K),(n,s)=>(w(),H(Re,ue(ce(t)),{default:W(()=>[gF,yF,vF,_F]),_:1},16))}},wF=G(bF,[["__file","/@slidev/slides/48.md"]]),xF=i("h2",null,"Unicode Tags",-1),kF=i("pre",{class:"shiki-container"},[i("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{color:"#4D9375"}},"fn"),i("span",{style:{color:"#DBD7CA"}}," "),i("span",{style:{color:"#A1B567"}},"main"),i("span",{style:{color:"#858585"}},"()"),i("span",{style:{color:"#DBD7CA"}}," "),i("span",{style:{color:"#858585"}},"{")]),v(`
`),i("span",{class:"line"},[i("span",{style:{color:"#DBD7CA"}},"    "),i("span",{style:{color:"#CB7676"}},"let"),i("span",{style:{color:"#DBD7CA"}}," "),i("span",{style:{color:"#B8A965"}},"encoded"),i("span",{style:{color:"#DBD7CA"}}," "),i("span",{style:{color:"#CB7676"}},"="),i("span",{style:{color:"#DBD7CA"}}," "),i("span",{style:{color:"#C98A7D"}},'"Hello󠀠󠁒󠁵󠁳󠁴 Meetup Amsterdam!"'),i("span",{style:{color:"#858585"}},";")]),v(`
`),i("span",{class:"line"}),v(`
`),i("span",{class:"line"},[i("span",{style:{color:"#DBD7CA"}},"    "),i("span",{style:{color:"#A1B567"}},"println!"),i("span",{style:{color:"#858585"}},"("),i("span",{style:{color:"#C98A7D"}},'"'),i("span",{style:{color:"#858585"}},"{}"),i("span",{style:{color:"#C98A7D"}},'"'),i("span",{style:{color:"#858585"}},","),i("span",{style:{color:"#DBD7CA"}}," "),i("span",{style:{color:"#B8A965"}},"encoded"),i("span",{style:{color:"#858585"}},");")]),v(`
`),i("span",{class:"line"},[i("span",{style:{color:"#758575"}},'    //println!("{:?}", encoded);')]),v(`
`),i("span",{class:"line"}),v(`
`),i("span",{class:"line"},[i("span",{style:{color:"#758575"}},"    //let codepoints: Vec<u32> = encoded.chars().map(|c| c.into()).collect();")]),v(`
`),i("span",{class:"line"},[i("span",{style:{color:"#758575"}},'    //println!("{:X?}", codepoints);')]),v(`
`),i("span",{class:"line"}),v(`
`),i("span",{class:"line"},[i("span",{style:{color:"#758575"}},"    //let offset: u32 = 0xE0000;")]),v(`
`),i("span",{class:"line"}),v(`
`),i("span",{class:"line"},[i("span",{style:{color:"#758575"}},"    //let decoded: String = encoded")]),v(`
`),i("span",{class:"line"},[i("span",{style:{color:"#758575"}},"    //    .chars()")]),v(`
`),i("span",{class:"line"},[i("span",{style:{color:"#758575"}},"    //    .map(|c| match c {")]),v(`
`),i("span",{class:"line"},[i("span",{style:{color:"#758575"}},"    //        '\\u{e0000}'..='\\u{e007F}' => {")]),v(`
`),i("span",{class:"line"},[i("span",{style:{color:"#758575"}},"    //            let char_u32: u32 = c.into();")]),v(`
`),i("span",{class:"line"},[i("span",{style:{color:"#758575"}},"    //            std::char::from_u32(char_u32 - offset).unwrap()")]),v(`
`),i("span",{class:"line"},[i("span",{style:{color:"#758575"}},"    //        },")]),v(`
`),i("span",{class:"line"},[i("span",{style:{color:"#758575"}},"    //        _ => c,")]),v(`
`),i("span",{class:"line"},[i("span",{style:{color:"#758575"}},"    //    })")]),v(`
`),i("span",{class:"line"},[i("span",{style:{color:"#758575"}},"    //    .collect();")]),v(`
`),i("span",{class:"line"}),v(`
`),i("span",{class:"line"},[i("span",{style:{color:"#758575"}},'    //println!("{:?}", decoded);')]),v(`
`),i("span",{class:"line"},[i("span",{style:{color:"#858585"}},"}")])])]),i("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{color:"#1C6B48"}},"fn"),i("span",{style:{color:"#393A34"}}," "),i("span",{style:{color:"#6C7834"}},"main"),i("span",{style:{color:"#8E8F8B"}},"()"),i("span",{style:{color:"#393A34"}}," "),i("span",{style:{color:"#8E8F8B"}},"{")]),v(`
`),i("span",{class:"line"},[i("span",{style:{color:"#393A34"}},"    "),i("span",{style:{color:"#AB5959"}},"let"),i("span",{style:{color:"#393A34"}}," "),i("span",{style:{color:"#8C862B"}},"encoded"),i("span",{style:{color:"#393A34"}}," "),i("span",{style:{color:"#AB5959"}},"="),i("span",{style:{color:"#393A34"}}," "),i("span",{style:{color:"#B56959"}},'"Hello󠀠󠁒󠁵󠁳󠁴 Meetup Amsterdam!"'),i("span",{style:{color:"#8E8F8B"}},";")]),v(`
`),i("span",{class:"line"}),v(`
`),i("span",{class:"line"},[i("span",{style:{color:"#393A34"}},"    "),i("span",{style:{color:"#6C7834"}},"println!"),i("span",{style:{color:"#8E8F8B"}},"("),i("span",{style:{color:"#B56959"}},'"'),i("span",{style:{color:"#8E8F8B"}},"{}"),i("span",{style:{color:"#B56959"}},'"'),i("span",{style:{color:"#8E8F8B"}},","),i("span",{style:{color:"#393A34"}}," "),i("span",{style:{color:"#8C862B"}},"encoded"),i("span",{style:{color:"#8E8F8B"}},");")]),v(`
`),i("span",{class:"line"},[i("span",{style:{color:"#A0ADA0"}},'    //println!("{:?}", encoded);')]),v(`
`),i("span",{class:"line"}),v(`
`),i("span",{class:"line"},[i("span",{style:{color:"#A0ADA0"}},"    //let codepoints: Vec<u32> = encoded.chars().map(|c| c.into()).collect();")]),v(`
`),i("span",{class:"line"},[i("span",{style:{color:"#A0ADA0"}},'    //println!("{:X?}", codepoints);')]),v(`
`),i("span",{class:"line"}),v(`
`),i("span",{class:"line"},[i("span",{style:{color:"#A0ADA0"}},"    //let offset: u32 = 0xE0000;")]),v(`
`),i("span",{class:"line"}),v(`
`),i("span",{class:"line"},[i("span",{style:{color:"#A0ADA0"}},"    //let decoded: String = encoded")]),v(`
`),i("span",{class:"line"},[i("span",{style:{color:"#A0ADA0"}},"    //    .chars()")]),v(`
`),i("span",{class:"line"},[i("span",{style:{color:"#A0ADA0"}},"    //    .map(|c| match c {")]),v(`
`),i("span",{class:"line"},[i("span",{style:{color:"#A0ADA0"}},"    //        '\\u{e0000}'..='\\u{e007F}' => {")]),v(`
`),i("span",{class:"line"},[i("span",{style:{color:"#A0ADA0"}},"    //            let char_u32: u32 = c.into();")]),v(`
`),i("span",{class:"line"},[i("span",{style:{color:"#A0ADA0"}},"    //            std::char::from_u32(char_u32 - offset).unwrap()")]),v(`
`),i("span",{class:"line"},[i("span",{style:{color:"#A0ADA0"}},"    //        },")]),v(`
`),i("span",{class:"line"},[i("span",{style:{color:"#A0ADA0"}},"    //        _ => c,")]),v(`
`),i("span",{class:"line"},[i("span",{style:{color:"#A0ADA0"}},"    //    })")]),v(`
`),i("span",{class:"line"},[i("span",{style:{color:"#A0ADA0"}},"    //    .collect();")]),v(`
`),i("span",{class:"line"}),v(`
`),i("span",{class:"line"},[i("span",{style:{color:"#A0ADA0"}},'    //println!("{:?}", decoded);')]),v(`
`),i("span",{class:"line"},[i("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),SF=i("p",null,[i("a",{href:"https://www.compart.com/en/unicode/block/U+E0000",target:"_blank",rel:"noopener"},"https://www.compart.com/en/unicode/block/U+E0000")],-1),TF={__name:"49",setup(e){const t={hide:!1,srcSequence:"./pages/04-quirks.md"};return R(K),(n,s)=>{const o=Zo;return w(),H(Re,ue(ce(t)),{default:W(()=>[xF,Y(o,Vt({},{ranges:[""]}),{default:W(()=>[kF]),_:1},16),SF]),_:1},16)}}},EF=G(TF,[["__file","/@slidev/slides/49.md"]]),CF=i("h1",null,"THE END",-1),AF={__name:"50",setup(e){const t={layout:"cover",hideInToc:!0};return R(K),(n,s)=>(w(),H(zs,ue(ce(t)),{default:W(()=>[CF]),_:1},16))}},$F=G(AF,[["__file","/@slidev/slides/50.md"]]),FF=[{path:"1",name:"page-1",component:bS,meta:{theme:"seriph",background:"https://source.unsplash.com/collection/94734566/1920x1080",class:"text-center",highlighter:"shiki",lineNumbers:!0,info:`## Unicode, Rust, quirks, and way too much detail.
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
`,drawings:{persist:!1},transition:"slide-left",title:"Demystifying Unicode",hideInToc:!0},index:0,start:0,end:19,noteHTML:"",filepath:"/home/ben/Workspace/demystifying-unicode/slides.md",id:0,no:1},__clicksElements:[],__preloaded:!1}},{path:"2",name:"page-2",component:ES,meta:{hideInToc:!0,slide:{raw:`---
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
- Some things you only need to know when you need to know`,frontmatter:{hideInToc:!0},index:1,start:19,end:30,noteHTML:"",filepath:"/home/ben/Workspace/demystifying-unicode/slides.md",id:1,no:2},__clicksElements:[],__preloaded:!1}},{path:"3",name:"page-3",component:L8,meta:{hideInToc:!0,slide:{raw:`---
hideInToc: true
---

# Table of contents

<Toc maxDepth="1"></Toc>
`,title:"Table of contents",level:1,content:`# Table of contents

<Toc maxDepth="1"></Toc>`,frontmatter:{hideInToc:!0},index:2,start:30,end:38,noteHTML:"",filepath:"/home/ben/Workspace/demystifying-unicode/slides.md",id:2,no:3},__clicksElements:[],__preloaded:!1}},{path:"4",name:"page-4",component:R8,meta:{layout:"cover",title:"History",hide:!1,srcSequence:"./pages/01-history.md",slide:{raw:null,title:"History",level:1,content:"# History",frontmatter:{layout:"cover",title:"History",hide:!1,srcSequence:"./pages/01-history.md"},index:3,start:0,end:6,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/01-history.md",raw:`---
layout: cover
---

# History
`,title:"History",level:1,content:"# History",frontmatter:{layout:"cover",title:"History"},index:0,start:0,end:6},inline:{raw:`---
src: ./pages/01-history.md
hide: false
---
`,content:"",frontmatter:{hide:!1},index:3,start:38,end:43},filepath:"/home/ben/Workspace/demystifying-unicode/pages/01-history.md",noteHTML:"",id:3,no:4},__clicksElements:[],__preloaded:!1}},{path:"5",name:"page-5",component:z8,meta:{hide:!1,srcSequence:"./pages/01-history.md",slide:{raw:`
## A bit (🥁鈸) of fundamentals

> Computers represent information as 1's and 0's
> - Literally everyone, since forever

Multiple bits can be put together to make different structures.

- 8 bits makes a byte
- 4/8 bytes makes a word on 32/64 bit architectures respectively

👆 Although unimportant for this talk, these things are the main language of a computer, bits, bytes, words. Compilers compile our code, so we can make more __human__ structures. Often the compilers optimise our code for thigns the computer understands.
`,title:"A bit (🥁鈸) of fundamentals",level:2,content:`## A bit (🥁鈸) of fundamentals

> Computers represent information as 1's and 0's
> - Literally everyone, since forever

Multiple bits can be put together to make different structures.

- 8 bits makes a byte
- 4/8 bytes makes a word on 32/64 bit architectures respectively

👆 Although unimportant for this talk, these things are the main language of a computer, bits, bytes, words. Compilers compile our code, so we can make more __human__ structures. Often the compilers optimise our code for thigns the computer understands.`,frontmatter:{hide:!1,srcSequence:"./pages/01-history.md"},index:4,start:7,end:20,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/01-history.md",raw:`
## A bit (🥁鈸) of fundamentals

> Computers represent information as 1's and 0's
> - Literally everyone, since forever

Multiple bits can be put together to make different structures.

- 8 bits makes a byte
- 4/8 bytes makes a word on 32/64 bit architectures respectively

👆 Although unimportant for this talk, these things are the main language of a computer, bits, bytes, words. Compilers compile our code, so we can make more __human__ structures. Often the compilers optimise our code for thigns the computer understands.
`,title:"A bit (🥁鈸) of fundamentals",level:2,content:`## A bit (🥁鈸) of fundamentals

> Computers represent information as 1's and 0's
> - Literally everyone, since forever

Multiple bits can be put together to make different structures.

- 8 bits makes a byte
- 4/8 bytes makes a word on 32/64 bit architectures respectively

👆 Although unimportant for this talk, these things are the main language of a computer, bits, bytes, words. Compilers compile our code, so we can make more __human__ structures. Often the compilers optimise our code for thigns the computer understands.`,frontmatter:{},index:1,start:7,end:20},filepath:"/home/ben/Workspace/demystifying-unicode/pages/01-history.md",noteHTML:"",id:4,no:5},__clicksElements:[],__preloaded:!1}},{path:"6",name:"page-6",component:eT,meta:{hide:!1,srcSequence:"./pages/01-history.md",slide:{raw:`
## Abstraction

> Let's make an abstraction so we can understand things better
> - Literally every developer, since forever

\`C\` originally abstracted things a little further:

<v-clicks>

- \`bool\` is a 1 bit
- \`char\` is a 8 bits
- \`int\` is ambiguous, however they solved that with:
  - \`uint8_t\` - unsigned 8bit integer
  - \`uint32_t\` - unsigned 32bit integer
  - \`int8_t\` - signed 8bit integer, 2's compliment
  - ... etc, etc.
- \`long\` also ambiguous, but >= \`int\`

</v-clicks>

<v-click>

But - what really __is__ a \`char\`?

And what really are characters?

</v-click>
`,title:"Abstraction",level:2,content:`## Abstraction

> Let's make an abstraction so we can understand things better
> - Literally every developer, since forever

\`C\` originally abstracted things a little further:

<v-clicks>

- \`bool\` is a 1 bit
- \`char\` is a 8 bits
- \`int\` is ambiguous, however they solved that with:
  - \`uint8_t\` - unsigned 8bit integer
  - \`uint32_t\` - unsigned 32bit integer
  - \`int8_t\` - signed 8bit integer, 2's compliment
  - ... etc, etc.
- \`long\` also ambiguous, but >= \`int\`

</v-clicks>

<v-click>

But - what really __is__ a \`char\`?

And what really are characters?

</v-click>`,frontmatter:{hide:!1,srcSequence:"./pages/01-history.md"},index:5,start:21,end:50,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/01-history.md",raw:`
## Abstraction

> Let's make an abstraction so we can understand things better
> - Literally every developer, since forever

\`C\` originally abstracted things a little further:

<v-clicks>

- \`bool\` is a 1 bit
- \`char\` is a 8 bits
- \`int\` is ambiguous, however they solved that with:
  - \`uint8_t\` - unsigned 8bit integer
  - \`uint32_t\` - unsigned 32bit integer
  - \`int8_t\` - signed 8bit integer, 2's compliment
  - ... etc, etc.
- \`long\` also ambiguous, but >= \`int\`

</v-clicks>

<v-click>

But - what really __is__ a \`char\`?

And what really are characters?

</v-click>
`,title:"Abstraction",level:2,content:`## Abstraction

> Let's make an abstraction so we can understand things better
> - Literally every developer, since forever

\`C\` originally abstracted things a little further:

<v-clicks>

- \`bool\` is a 1 bit
- \`char\` is a 8 bits
- \`int\` is ambiguous, however they solved that with:
  - \`uint8_t\` - unsigned 8bit integer
  - \`uint32_t\` - unsigned 32bit integer
  - \`int8_t\` - signed 8bit integer, 2's compliment
  - ... etc, etc.
- \`long\` also ambiguous, but >= \`int\`

</v-clicks>

<v-click>

But - what really __is__ a \`char\`?

And what really are characters?

</v-click>`,frontmatter:{},index:2,start:21,end:50},filepath:"/home/ben/Workspace/demystifying-unicode/pages/01-history.md",noteHTML:"",id:5,no:6},__clicksElements:[],__preloaded:!1}},{path:"7",name:"page-7",component:lT,meta:{hide:!1,srcSequence:"./pages/01-history.md",slide:{raw:`
## Characters

Quiz time - what does this say:

\`\`\`
01101000 01100101 01101100 01101100 01101111 00100000
01110111 01101111 01110010 01101100 01100100
\`\`\`

<v-click>

The knowledge we share with computers: \`00100000\` = \`32\` = \` \`

</v-click>

<v-click>

But there are more than 255 characters in different scripts. DIN 91379 includes:
| | |
| --- | --- |
| Base Latin Letters: 649 | enl: 42 |
| Combinging Diacritics: 19 | bnlreq: 17 |
| Greek Letters: 68 | bnl: 59 |
| Cyrillic Letters: 61 | bnlopt: 8 |
| | bnlnot: 2 |

</v-click>

<!--
When I think of a "character" I think of "Something a human can read". This text is made up of characters because we understand what each of the letters mean. We share that knowledge.

DIN 91379: https://github.com/String-Latin/DIN-91379-Characters-and-Sequences
-->
`,title:"Characters",level:2,content:`## Characters

Quiz time - what does this say:

\`\`\`
01101000 01100101 01101100 01101100 01101111 00100000
01110111 01101111 01110010 01101100 01100100
\`\`\`

<v-click>

The knowledge we share with computers: \`00100000\` = \`32\` = \` \`

</v-click>

<v-click>

But there are more than 255 characters in different scripts. DIN 91379 includes:
| | |
| --- | --- |
| Base Latin Letters: 649 | enl: 42 |
| Combinging Diacritics: 19 | bnlreq: 17 |
| Greek Letters: 68 | bnl: 59 |
| Cyrillic Letters: 61 | bnlopt: 8 |
| | bnlnot: 2 |

</v-click>`,frontmatter:{hide:!1,srcSequence:"./pages/01-history.md"},note:`When I think of a "character" I think of "Something a human can read". This text is made up of characters because we understand what each of the letters mean. We share that knowledge.

DIN 91379: https://github.com/String-Latin/DIN-91379-Characters-and-Sequences`,index:6,start:51,end:86,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/01-history.md",raw:`
## Characters

Quiz time - what does this say:

\`\`\`
01101000 01100101 01101100 01101100 01101111 00100000
01110111 01101111 01110010 01101100 01100100
\`\`\`

<v-click>

The knowledge we share with computers: \`00100000\` = \`32\` = \` \`

</v-click>

<v-click>

But there are more than 255 characters in different scripts. DIN 91379 includes:
| | |
| --- | --- |
| Base Latin Letters: 649 | enl: 42 |
| Combinging Diacritics: 19 | bnlreq: 17 |
| Greek Letters: 68 | bnl: 59 |
| Cyrillic Letters: 61 | bnlopt: 8 |
| | bnlnot: 2 |

</v-click>

<!--
When I think of a "character" I think of "Something a human can read". This text is made up of characters because we understand what each of the letters mean. We share that knowledge.

DIN 91379: https://github.com/String-Latin/DIN-91379-Characters-and-Sequences
-->
`,title:"Characters",level:2,content:`## Characters

Quiz time - what does this say:

\`\`\`
01101000 01100101 01101100 01101100 01101111 00100000
01110111 01101111 01110010 01101100 01100100
\`\`\`

<v-click>

The knowledge we share with computers: \`00100000\` = \`32\` = \` \`

</v-click>

<v-click>

But there are more than 255 characters in different scripts. DIN 91379 includes:
| | |
| --- | --- |
| Base Latin Letters: 649 | enl: 42 |
| Combinging Diacritics: 19 | bnlreq: 17 |
| Greek Letters: 68 | bnl: 59 |
| Cyrillic Letters: 61 | bnlopt: 8 |
| | bnlnot: 2 |

</v-click>`,frontmatter:{},note:`When I think of a "character" I think of "Something a human can read". This text is made up of characters because we understand what each of the letters mean. We share that knowledge.

DIN 91379: https://github.com/String-Latin/DIN-91379-Characters-and-Sequences`,index:3,start:51,end:86},filepath:"/home/ben/Workspace/demystifying-unicode/pages/01-history.md",noteHTML:`<p>When I think of a &quot;character&quot; I think of &quot;Something a human can read&quot;. This text is made up of characters because we understand what each of the letters mean. We share that knowledge.</p>
<p>DIN 91379: https://github.com/String-Latin/DIN-91379-Characters-and-Sequences</p>
`,id:6,no:7},__clicksElements:[],__preloaded:!1}},{path:"8",name:"page-8",component:_T,meta:{hide:!1,srcSequence:"./pages/01-history.md",slide:{raw:`
## Competing standards

XKCD comic 927

8 bits isn't going to be enough.

- ~~ANSI (American National Standards Institue) Characters~~ Windows code pages, Code Page 437
- ASCII (American Standard Code for Information Interchange) Characters (QQ)

IBM decided that drawing UI's was more important than people being able to write in their language 

\`\`\`
┏━━━━━━━━━━━━━━━━━━┫ Prompt ┣━━━━━━━━━━━━━━━━┓
┃                                            ┃ 
┃ Do you want your langauge to be supported? ┃
┃                                            ┃ 
┗━━━━━━━━━━━━━━━━━━┫ No ┣━┫ >Nah not even< ┣━┛
\`\`\`

<br />

> Unicode has entered the chat

<br />
But first...

<!--
ANSI Characters aren't actually a thing. When people use this term, they are refering to the windows code pages.

Quiz: How many bits is an ascii character?

IBM437: https://www.compart.com/en/unicode/charsets/IBM437
-->
`,title:"Competing standards",level:2,content:`## Competing standards

XKCD comic 927

8 bits isn't going to be enough.

- ~~ANSI (American National Standards Institue) Characters~~ Windows code pages, Code Page 437
- ASCII (American Standard Code for Information Interchange) Characters (QQ)

IBM decided that drawing UI's was more important than people being able to write in their language 

\`\`\`
┏━━━━━━━━━━━━━━━━━━┫ Prompt ┣━━━━━━━━━━━━━━━━┓
┃                                            ┃ 
┃ Do you want your langauge to be supported? ┃
┃                                            ┃ 
┗━━━━━━━━━━━━━━━━━━┫ No ┣━┫ >Nah not even< ┣━┛
\`\`\`

<br />

> Unicode has entered the chat

<br />
But first...`,frontmatter:{hide:!1,srcSequence:"./pages/01-history.md"},note:`ANSI Characters aren't actually a thing. When people use this term, they are refering to the windows code pages.

Quiz: How many bits is an ascii character?

IBM437: https://www.compart.com/en/unicode/charsets/IBM437`,index:7,start:87,end:122,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/01-history.md",raw:`
## Competing standards

XKCD comic 927

8 bits isn't going to be enough.

- ~~ANSI (American National Standards Institue) Characters~~ Windows code pages, Code Page 437
- ASCII (American Standard Code for Information Interchange) Characters (QQ)

IBM decided that drawing UI's was more important than people being able to write in their language 

\`\`\`
┏━━━━━━━━━━━━━━━━━━┫ Prompt ┣━━━━━━━━━━━━━━━━┓
┃                                            ┃ 
┃ Do you want your langauge to be supported? ┃
┃                                            ┃ 
┗━━━━━━━━━━━━━━━━━━┫ No ┣━┫ >Nah not even< ┣━┛
\`\`\`

<br />

> Unicode has entered the chat

<br />
But first...

<!--
ANSI Characters aren't actually a thing. When people use this term, they are refering to the windows code pages.

Quiz: How many bits is an ascii character?

IBM437: https://www.compart.com/en/unicode/charsets/IBM437
-->
`,title:"Competing standards",level:2,content:`## Competing standards

XKCD comic 927

8 bits isn't going to be enough.

- ~~ANSI (American National Standards Institue) Characters~~ Windows code pages, Code Page 437
- ASCII (American Standard Code for Information Interchange) Characters (QQ)

IBM decided that drawing UI's was more important than people being able to write in their language 

\`\`\`
┏━━━━━━━━━━━━━━━━━━┫ Prompt ┣━━━━━━━━━━━━━━━━┓
┃                                            ┃ 
┃ Do you want your langauge to be supported? ┃
┃                                            ┃ 
┗━━━━━━━━━━━━━━━━━━┫ No ┣━┫ >Nah not even< ┣━┛
\`\`\`

<br />

> Unicode has entered the chat

<br />
But first...`,frontmatter:{},note:`ANSI Characters aren't actually a thing. When people use this term, they are refering to the windows code pages.

Quiz: How many bits is an ascii character?

IBM437: https://www.compart.com/en/unicode/charsets/IBM437`,index:4,start:87,end:122},filepath:"/home/ben/Workspace/demystifying-unicode/pages/01-history.md",noteHTML:`<p>ANSI Characters aren't actually a thing. When people use this term, they are refering to the windows code pages.</p>
<p>Quiz: How many bits is an ascii character?</p>
<p>IBM437: https://www.compart.com/en/unicode/charsets/IBM437</p>
`,id:7,no:8},__clicksElements:[],__preloaded:!1}},{path:"9",name:"page-9",component:kT,meta:{hide:!1,srcSequence:"./pages/01-history.md",slide:{raw:`
## About ol ASCII

<v-clicks>

- ASCII standardized 0x00..0x7F
  \`\`\`
  ␀␁␂␃␄␅␆␇␈␉␊␋␌␍␎␏
  ␐␑␒␓␔␕␖␗␘␙␚␛␜␝␞␟
  ␠!"#$%&'()*+,-./
  0123456789:;<=>?
  @ABCDEFGHIJKLMNO
  PQRSTUVWXYZ[\\]^_
  \`abcdefghijklmno
  pqrstuvwxyz{|}~␡
  \`\`\`
- 0x00..0x7F was common between many code pages
- Which code page? Which \`encoding\` of bits makes what char?

</v-clicks>
`,title:"About ol ASCII",level:2,content:`## About ol ASCII

<v-clicks>

- ASCII standardized 0x00..0x7F
  \`\`\`
  ␀␁␂␃␄␅␆␇␈␉␊␋␌␍␎␏
  ␐␑␒␓␔␕␖␗␘␙␚␛␜␝␞␟
  ␠!"#$%&'()*+,-./
  0123456789:;<=>?
  @ABCDEFGHIJKLMNO
  PQRSTUVWXYZ[\\]^_
  \`abcdefghijklmno
  pqrstuvwxyz{|}~␡
  \`\`\`
- 0x00..0x7F was common between many code pages
- Which code page? Which \`encoding\` of bits makes what char?

</v-clicks>`,frontmatter:{hide:!1,srcSequence:"./pages/01-history.md"},index:8,start:123,end:144,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/01-history.md",raw:`
## About ol ASCII

<v-clicks>

- ASCII standardized 0x00..0x7F
  \`\`\`
  ␀␁␂␃␄␅␆␇␈␉␊␋␌␍␎␏
  ␐␑␒␓␔␕␖␗␘␙␚␛␜␝␞␟
  ␠!"#$%&'()*+,-./
  0123456789:;<=>?
  @ABCDEFGHIJKLMNO
  PQRSTUVWXYZ[\\]^_
  \`abcdefghijklmno
  pqrstuvwxyz{|}~␡
  \`\`\`
- 0x00..0x7F was common between many code pages
- Which code page? Which \`encoding\` of bits makes what char?

</v-clicks>
`,title:"About ol ASCII",level:2,content:`## About ol ASCII

<v-clicks>

- ASCII standardized 0x00..0x7F
  \`\`\`
  ␀␁␂␃␄␅␆␇␈␉␊␋␌␍␎␏
  ␐␑␒␓␔␕␖␗␘␙␚␛␜␝␞␟
  ␠!"#$%&'()*+,-./
  0123456789:;<=>?
  @ABCDEFGHIJKLMNO
  PQRSTUVWXYZ[\\]^_
  \`abcdefghijklmno
  pqrstuvwxyz{|}~␡
  \`\`\`
- 0x00..0x7F was common between many code pages
- Which code page? Which \`encoding\` of bits makes what char?

</v-clicks>`,frontmatter:{},index:5,start:123,end:144},filepath:"/home/ben/Workspace/demystifying-unicode/pages/01-history.md",noteHTML:"",id:8,no:9},__clicksElements:[],__preloaded:!1}},{path:"10",name:"page-10",component:IT,meta:{hide:!1,srcSequence:"./pages/01-history.md",slide:{raw:`
## A world before encoding/before the web?

Be grug developer:

- I use IBM 437 because I'm writing DOS applications
- Everyone else must use IBM 437, because they all speak english and like borders right?
- Write once, run only on my machine

Hypothesis: When the world started going online...

Dos world: IBM437

Windows world: ISO-8859-1

<footer>

**🌶 Facts**: HTTP 1.1 used to use \`ISO-8859-1\` as the default charset 🤯

</footer>
`,title:"A world before encoding/before the web?",level:2,content:`## A world before encoding/before the web?

Be grug developer:

- I use IBM 437 because I'm writing DOS applications
- Everyone else must use IBM 437, because they all speak english and like borders right?
- Write once, run only on my machine

Hypothesis: When the world started going online...

Dos world: IBM437

Windows world: ISO-8859-1

<footer>

**🌶 Facts**: HTTP 1.1 used to use \`ISO-8859-1\` as the default charset 🤯

</footer>`,frontmatter:{hide:!1,srcSequence:"./pages/01-history.md"},index:9,start:145,end:166,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/01-history.md",raw:`
## A world before encoding/before the web?

Be grug developer:

- I use IBM 437 because I'm writing DOS applications
- Everyone else must use IBM 437, because they all speak english and like borders right?
- Write once, run only on my machine

Hypothesis: When the world started going online...

Dos world: IBM437

Windows world: ISO-8859-1

<footer>

**🌶 Facts**: HTTP 1.1 used to use \`ISO-8859-1\` as the default charset 🤯

</footer>
`,title:"A world before encoding/before the web?",level:2,content:`## A world before encoding/before the web?

Be grug developer:

- I use IBM 437 because I'm writing DOS applications
- Everyone else must use IBM 437, because they all speak english and like borders right?
- Write once, run only on my machine

Hypothesis: When the world started going online...

Dos world: IBM437

Windows world: ISO-8859-1

<footer>

**🌶 Facts**: HTTP 1.1 used to use \`ISO-8859-1\` as the default charset 🤯

</footer>`,frontmatter:{},index:6,start:145,end:166},filepath:"/home/ben/Workspace/demystifying-unicode/pages/01-history.md",noteHTML:"",id:9,no:10},__clicksElements:[],__preloaded:!1}},{path:"11",name:"page-11",component:NT,meta:{layout:"quote",hide:!1,srcSequence:"./pages/01-history.md",slide:{raw:`---
layout: quote
---

The term charactor is ambiguous.

\`char\` isn't a character, it's just a \`uint8_t\` with a fancy name.
`,content:"The term charactor is ambiguous.\n\n`char` isn't a character, it's just a `uint8_t` with a fancy name.",frontmatter:{layout:"quote",hide:!1,srcSequence:"./pages/01-history.md"},index:10,start:166,end:174,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/01-history.md",raw:`---
layout: quote
---

The term charactor is ambiguous.

\`char\` isn't a character, it's just a \`uint8_t\` with a fancy name.
`,content:"The term charactor is ambiguous.\n\n`char` isn't a character, it's just a `uint8_t` with a fancy name.",frontmatter:{layout:"quote"},index:7,start:166,end:174},filepath:"/home/ben/Workspace/demystifying-unicode/pages/01-history.md",noteHTML:"",id:10,no:11},__clicksElements:[],__preloaded:!1}},{path:"12",name:"page-12",component:KT,meta:{layout:"center",hide:!1,srcSequence:"./pages/01-history.md",slide:{raw:`---
layout: center
---

<img src="/no_chars_yes_glyphs.jpg" alt="Drake no: characters. Drake yes: glyphs" />
`,content:'<img src="/no_chars_yes_glyphs.jpg" alt="Drake no: characters. Drake yes: glyphs" />',frontmatter:{layout:"center",hide:!1,srcSequence:"./pages/01-history.md"},index:11,start:174,end:180,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/01-history.md",raw:`---
layout: center
---

<img src="/no_chars_yes_glyphs.jpg" alt="Drake no: characters. Drake yes: glyphs" />
`,content:'<img src="/no_chars_yes_glyphs.jpg" alt="Drake no: characters. Drake yes: glyphs" />',frontmatter:{layout:"center"},index:8,start:174,end:180},filepath:"/home/ben/Workspace/demystifying-unicode/pages/01-history.md",noteHTML:"",id:11,no:12},__clicksElements:[],__preloaded:!1}},{path:"13",name:"page-13",component:ZT,meta:{layout:"cover",title:"Unicode",hide:!1,srcSequence:"./pages/02-unicode.md",slide:{raw:null,title:"Unicode",level:1,content:"# Unicode",frontmatter:{layout:"cover",title:"Unicode",hide:!1,srcSequence:"./pages/02-unicode.md"},index:12,start:0,end:6,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/02-unicode.md",raw:`---
layout: cover
---

# Unicode
`,title:"Unicode",level:1,content:"# Unicode",frontmatter:{layout:"cover",title:"Unicode"},index:0,start:0,end:6},inline:{raw:`---
src: ./pages/02-unicode.md
hide: false
---
`,content:"",frontmatter:{hide:!1},index:4,start:43,end:48},filepath:"/home/ben/Workspace/demystifying-unicode/pages/02-unicode.md",noteHTML:"",id:12,no:13},__clicksElements:[],__preloaded:!1}},{path:"14",name:"page-14",component:eE,meta:{hide:!1,srcSequence:"./pages/02-unicode.md",slide:{raw:`
## Why Unicode?

<v-clicks>

1. Reliance on code page/charmap defaults per system
1. Code page duplication/lack of standardisation
1. Concept of "Encoding" was lacking
1. OEMs just did what they wanted
1. Display more than one code page at a time?

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

1. Reliance on code page/charmap defaults per system
1. Code page duplication/lack of standardisation
1. Concept of "Encoding" was lacking
1. OEMs just did what they wanted
1. Display more than one code page at a time?

</v-clicks>`,frontmatter:{hide:!1,srcSequence:"./pages/02-unicode.md"},note:`TODO: Illustrate with an example:
- Write an application on one computer, relying on codepage X
- Send data to another computer
- Get garbled nonsense
- 👍`,index:13,start:7,end:28,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/02-unicode.md",raw:`
## Why Unicode?

<v-clicks>

1. Reliance on code page/charmap defaults per system
1. Code page duplication/lack of standardisation
1. Concept of "Encoding" was lacking
1. OEMs just did what they wanted
1. Display more than one code page at a time?

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

1. Reliance on code page/charmap defaults per system
1. Code page duplication/lack of standardisation
1. Concept of "Encoding" was lacking
1. OEMs just did what they wanted
1. Display more than one code page at a time?

</v-clicks>`,frontmatter:{},note:`TODO: Illustrate with an example:
- Write an application on one computer, relying on codepage X
- Send data to another computer
- Get garbled nonsense
- 👍`,index:1,start:7,end:28},filepath:"/home/ben/Workspace/demystifying-unicode/pages/02-unicode.md",noteHTML:`<p>TODO: Illustrate with an example:</p>
<ul>
<li>Write an application on one computer, relying on codepage X</li>
<li>Send data to another computer</li>
<li>Get garbled nonsense</li>
<li>👍</li>
</ul>
`,id:13,no:14},__clicksElements:[],__preloaded:!1}},{path:"15",name:"page-15",component:oE,meta:{layout:"center",hide:!1,srcSequence:"./pages/02-unicode.md",slide:{raw:`---
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
> - Unambiguous. Any given Unicode code point always represents the same character`,index:14,start:28,end:56,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/02-unicode.md",raw:`---
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
> - Unambiguous. Any given Unicode code point always represents the same character`,index:2,start:28,end:56},filepath:"/home/ben/Workspace/demystifying-unicode/pages/02-unicode.md",noteHTML:`<ul>
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
`,id:14,no:15},__clicksElements:[],__preloaded:!1}},{path:"16",name:"page-16",component:cE,meta:{hide:!1,srcSequence:"./pages/02-unicode.md",slide:{raw:`
## New Terminology

| | | |
| - | - | - |
| Glyph | ‽ | How it actually looks, defined by the font |
| Codepoint | U+203D | Unique identifier for this character |
| Character | Interrobang | Description of the character | 
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
| Character | Interrobang | Description of the character | 
| Block | General Punctuation, U+2000 - U+206F | The range of codepoints for a specific purpose |
| Plane | Basic Multilingual Plane, U+0000 - U+FFFF | The wide group of codepoints |

<footer>

Ref: Characters and Glyphs https://www.unicode.org/versions/Unicode15.0.0/ch01.pdf

</footer>`,frontmatter:{hide:!1,srcSequence:"./pages/02-unicode.md"},note:`Glyphs are what are drawn to the screen, generally unicode interpreted by a font for example
Character is still ambiguous, but in unicode it's the description of the codepoint`,index:15,start:57,end:79,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/02-unicode.md",raw:`
## New Terminology

| | | |
| - | - | - |
| Glyph | ‽ | How it actually looks, defined by the font |
| Codepoint | U+203D | Unique identifier for this character |
| Character | Interrobang | Description of the character | 
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
| Character | Interrobang | Description of the character | 
| Block | General Punctuation, U+2000 - U+206F | The range of codepoints for a specific purpose |
| Plane | Basic Multilingual Plane, U+0000 - U+FFFF | The wide group of codepoints |

<footer>

Ref: Characters and Glyphs https://www.unicode.org/versions/Unicode15.0.0/ch01.pdf

</footer>`,frontmatter:{},note:`Glyphs are what are drawn to the screen, generally unicode interpreted by a font for example
Character is still ambiguous, but in unicode it's the description of the codepoint`,index:3,start:57,end:79},filepath:"/home/ben/Workspace/demystifying-unicode/pages/02-unicode.md",noteHTML:`<p>Glyphs are what are drawn to the screen, generally unicode interpreted by a font for example
Character is still ambiguous, but in unicode it's the description of the codepoint</p>
`,id:15,no:16},__clicksElements:[],__preloaded:!1}},{path:"17",name:"page-17",component:gE,meta:{layout:"two-cols",hide:!1,srcSequence:"./pages/02-unicode.md",slide:{raw:`---
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
</div>`,frontmatter:{layout:"two-cols",hide:!1,srcSequence:"./pages/02-unicode.md"},note:"Glyphemes - 1 to many codepoints that are represented to the user as a single character",index:16,start:79,end:101,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/02-unicode.md",raw:`---
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
</div>`,frontmatter:{layout:"two-cols"},note:"Glyphemes - 1 to many codepoints that are represented to the user as a single character",index:4,start:79,end:101},filepath:"/home/ben/Workspace/demystifying-unicode/pages/02-unicode.md",noteHTML:`<p>Glyphemes - 1 to many codepoints that are represented to the user as a single character</p>
`,id:16,no:17},__clicksElements:[],__preloaded:!1}},{path:"18",name:"page-18",component:xE,meta:{layout:"center",hide:!1,srcSequence:"./pages/02-unicode.md",slide:{raw:`---
layout: center
---

## What is the difference between
## \`Unicode\`
## and
## \`UTF-8/UTF-16/UTF-32?\`
`,title:"What is the difference between",level:2,content:"## What is the difference between\n## `Unicode`\n## and\n## `UTF-8/UTF-16/UTF-32?`",frontmatter:{layout:"center",hide:!1,srcSequence:"./pages/02-unicode.md"},index:17,start:101,end:110,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/02-unicode.md",raw:`---
layout: center
---

## What is the difference between
## \`Unicode\`
## and
## \`UTF-8/UTF-16/UTF-32?\`
`,title:"What is the difference between",level:2,content:"## What is the difference between\n## `Unicode`\n## and\n## `UTF-8/UTF-16/UTF-32?`",frontmatter:{layout:"center"},index:5,start:101,end:110},filepath:"/home/ben/Workspace/demystifying-unicode/pages/02-unicode.md",noteHTML:"",id:17,no:18},__clicksElements:[],__preloaded:!1}},{path:"19",name:"page-19",component:EE,meta:{layout:"center",hide:!1,srcSequence:"./pages/02-unicode.md",slide:{raw:`---
layout: center
---

\`Unicode\` - "The Standard" <sup>defines codepoints</sup>

\`UTF-8/UTF-16/UTF-32\` - Encodings
`,content:'`Unicode` - "The Standard" <sup>defines codepoints</sup>\n\n`UTF-8/UTF-16/UTF-32` - Encodings',frontmatter:{layout:"center",hide:!1,srcSequence:"./pages/02-unicode.md"},index:18,start:110,end:118,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/02-unicode.md",raw:`---
layout: center
---

\`Unicode\` - "The Standard" <sup>defines codepoints</sup>

\`UTF-8/UTF-16/UTF-32\` - Encodings
`,content:'`Unicode` - "The Standard" <sup>defines codepoints</sup>\n\n`UTF-8/UTF-16/UTF-32` - Encodings',frontmatter:{layout:"center"},index:6,start:110,end:118},filepath:"/home/ben/Workspace/demystifying-unicode/pages/02-unicode.md",noteHTML:"",id:18,no:19},__clicksElements:[],__preloaded:!1}},{path:"20",name:"page-20",component:$E,meta:{layout:"center",hide:!1,srcSequence:"./pages/02-unicode.md",slide:{raw:`---
layout: center
---

A quick word on encoding
`,content:"A quick word on encoding",frontmatter:{layout:"center",hide:!1,srcSequence:"./pages/02-unicode.md"},index:19,start:118,end:124,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/02-unicode.md",raw:`---
layout: center
---

A quick word on encoding
`,content:"A quick word on encoding",frontmatter:{layout:"center"},index:7,start:118,end:124},filepath:"/home/ben/Workspace/demystifying-unicode/pages/02-unicode.md",noteHTML:"",id:19,no:20},__clicksElements:[],__preloaded:!1}},{path:"21",name:"page-21",component:RE,meta:{hide:!1,srcSequence:"./pages/02-unicode.md",slide:{raw:`
## Encoding

Current Unicode total code space size: 21bits, 1048576 characters.

Code space: U+000000 - U+10FFFF

But...

<v-click>

> There are many ways to encode/skin a unicode/cat.

</v-click>

<v-click>

**Important:**

</v-click>

<v-clicks>

- ASCII standardized 0x00 - 0x7F
  \`\`\`
  ␀␁␂␃␄␅␆␇␈␉␊␋␌␍␎␏␐␑␒␓␔␕␖␗␘␙␚␛␜␝␞␟
  ␠!"#$%&'()*+,-./0123456789:;<=>?
  @ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_
  \`abcdefghijklmnopqrstuvwxyz{|}~␡
  \`\`\`
- Many code pages were using ASCII too
- <small>It's really important to 🤝 on encoding - even to this day.</small>

</v-clicks>

<footer>

Fun fact: Unicode <2.0 code space was 16-bit wide.

</footer>
`,title:"Encoding",level:2,content:`## Encoding

Current Unicode total code space size: 21bits, 1048576 characters.

Code space: U+000000 - U+10FFFF

But...

<v-click>

> There are many ways to encode/skin a unicode/cat.

</v-click>

<v-click>

**Important:**

</v-click>

<v-clicks>

- ASCII standardized 0x00 - 0x7F
  \`\`\`
  ␀␁␂␃␄␅␆␇␈␉␊␋␌␍␎␏␐␑␒␓␔␕␖␗␘␙␚␛␜␝␞␟
  ␠!"#$%&'()*+,-./0123456789:;<=>?
  @ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_
  \`abcdefghijklmnopqrstuvwxyz{|}~␡
  \`\`\`
- Many code pages were using ASCII too
- <small>It's really important to 🤝 on encoding - even to this day.</small>

</v-clicks>

<footer>

Fun fact: Unicode <2.0 code space was 16-bit wide.

</footer>`,frontmatter:{hide:!1,srcSequence:"./pages/02-unicode.md"},index:20,start:125,end:166,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/02-unicode.md",raw:`
## Encoding

Current Unicode total code space size: 21bits, 1048576 characters.

Code space: U+000000 - U+10FFFF

But...

<v-click>

> There are many ways to encode/skin a unicode/cat.

</v-click>

<v-click>

**Important:**

</v-click>

<v-clicks>

- ASCII standardized 0x00 - 0x7F
  \`\`\`
  ␀␁␂␃␄␅␆␇␈␉␊␋␌␍␎␏␐␑␒␓␔␕␖␗␘␙␚␛␜␝␞␟
  ␠!"#$%&'()*+,-./0123456789:;<=>?
  @ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_
  \`abcdefghijklmnopqrstuvwxyz{|}~␡
  \`\`\`
- Many code pages were using ASCII too
- <small>It's really important to 🤝 on encoding - even to this day.</small>

</v-clicks>

<footer>

Fun fact: Unicode <2.0 code space was 16-bit wide.

</footer>
`,title:"Encoding",level:2,content:`## Encoding

Current Unicode total code space size: 21bits, 1048576 characters.

Code space: U+000000 - U+10FFFF

But...

<v-click>

> There are many ways to encode/skin a unicode/cat.

</v-click>

<v-click>

**Important:**

</v-click>

<v-clicks>

- ASCII standardized 0x00 - 0x7F
  \`\`\`
  ␀␁␂␃␄␅␆␇␈␉␊␋␌␍␎␏␐␑␒␓␔␕␖␗␘␙␚␛␜␝␞␟
  ␠!"#$%&'()*+,-./0123456789:;<=>?
  @ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_
  \`abcdefghijklmnopqrstuvwxyz{|}~␡
  \`\`\`
- Many code pages were using ASCII too
- <small>It's really important to 🤝 on encoding - even to this day.</small>

</v-clicks>

<footer>

Fun fact: Unicode <2.0 code space was 16-bit wide.

</footer>`,frontmatter:{},index:8,start:125,end:166},filepath:"/home/ben/Workspace/demystifying-unicode/pages/02-unicode.md",noteHTML:"",id:20,no:21},__clicksElements:[],__preloaded:!1}},{path:"22",name:"page-22",component:HE,meta:{layout:"center",hide:!1,srcSequence:"./pages/02-unicode.md",slide:{raw:`---
layout: center
---

## Unicode has 5 Encodings!

- UTF-8
- UTF-16LE
- UTF-16BE *
- UTF-32LE
- UTF-32BE *

<footer>

UTF-21 exists - but it's a toy encoding hobby project<br />
\\* denotes the encodings which are default if not explicit LE/BE defined

</footer>

<!--
A UTF-8 encoded string on my machine spits out an array of bytes.
To your machine, it's just an array of bytes.

Content-Encoding header on HTTP requests

UTF-21: https://evanhahn.com/utf-21/
-->
`,title:"Unicode has 5 Encodings!",level:2,content:`## Unicode has 5 Encodings!

- UTF-8
- UTF-16LE
- UTF-16BE *
- UTF-32LE
- UTF-32BE *

<footer>

UTF-21 exists - but it's a toy encoding hobby project<br />
\\* denotes the encodings which are default if not explicit LE/BE defined

</footer>`,frontmatter:{layout:"center",hide:!1,srcSequence:"./pages/02-unicode.md"},note:`A UTF-8 encoded string on my machine spits out an array of bytes.
To your machine, it's just an array of bytes.

Content-Encoding header on HTTP requests

UTF-21: https://evanhahn.com/utf-21/`,index:21,start:166,end:194,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/02-unicode.md",raw:`---
layout: center
---

## Unicode has 5 Encodings!

- UTF-8
- UTF-16LE
- UTF-16BE *
- UTF-32LE
- UTF-32BE *

<footer>

UTF-21 exists - but it's a toy encoding hobby project<br />
\\* denotes the encodings which are default if not explicit LE/BE defined

</footer>

<!--
A UTF-8 encoded string on my machine spits out an array of bytes.
To your machine, it's just an array of bytes.

Content-Encoding header on HTTP requests

UTF-21: https://evanhahn.com/utf-21/
-->
`,title:"Unicode has 5 Encodings!",level:2,content:`## Unicode has 5 Encodings!

- UTF-8
- UTF-16LE
- UTF-16BE *
- UTF-32LE
- UTF-32BE *

<footer>

UTF-21 exists - but it's a toy encoding hobby project<br />
\\* denotes the encodings which are default if not explicit LE/BE defined

</footer>`,frontmatter:{layout:"center"},note:`A UTF-8 encoded string on my machine spits out an array of bytes.
To your machine, it's just an array of bytes.

Content-Encoding header on HTTP requests

UTF-21: https://evanhahn.com/utf-21/`,index:9,start:166,end:194},filepath:"/home/ben/Workspace/demystifying-unicode/pages/02-unicode.md",noteHTML:`<p>A UTF-8 encoded string on my machine spits out an array of bytes.
To your machine, it's just an array of bytes.</p>
<p>Content-Encoding header on HTTP requests</p>
<p>UTF-21: https://evanhahn.com/utf-21/</p>
`,id:21,no:22},__clicksElements:[],__preloaded:!1}},{path:"23",name:"page-23",component:QE,meta:{layout:"center",hide:!1,srcSequence:"./pages/02-unicode.md",slide:{raw:`---
layout: center
---

## Important

UTF-[8/16/32] __should__ always be the same everywhere

UTF-8 == UTF-8

UTF-16 == UTF-16

UTF-32 == UTF-32

<!--
The encoding standard is the encoding standard. If people are implementing UTF-8 in different ways (e.g. reverse byte order), then they are not using UTF-8, they have their own special thing.
-->
`,title:"Important",level:2,content:`## Important

UTF-[8/16/32] __should__ always be the same everywhere

UTF-8 == UTF-8

UTF-16 == UTF-16

UTF-32 == UTF-32`,frontmatter:{layout:"center",hide:!1,srcSequence:"./pages/02-unicode.md"},note:"The encoding standard is the encoding standard. If people are implementing UTF-8 in different ways (e.g. reverse byte order), then they are not using UTF-8, they have their own special thing.",index:22,start:194,end:212,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/02-unicode.md",raw:`---
layout: center
---

## Important

UTF-[8/16/32] __should__ always be the same everywhere

UTF-8 == UTF-8

UTF-16 == UTF-16

UTF-32 == UTF-32

<!--
The encoding standard is the encoding standard. If people are implementing UTF-8 in different ways (e.g. reverse byte order), then they are not using UTF-8, they have their own special thing.
-->
`,title:"Important",level:2,content:`## Important

UTF-[8/16/32] __should__ always be the same everywhere

UTF-8 == UTF-8

UTF-16 == UTF-16

UTF-32 == UTF-32`,frontmatter:{layout:"center"},note:"The encoding standard is the encoding standard. If people are implementing UTF-8 in different ways (e.g. reverse byte order), then they are not using UTF-8, they have their own special thing.",index:10,start:194,end:212},filepath:"/home/ben/Workspace/demystifying-unicode/pages/02-unicode.md",noteHTML:`<p>The encoding standard is the encoding standard. If people are implementing UTF-8 in different ways (e.g. reverse byte order), then they are not using UTF-8, they have their own special thing.</p>
`,id:22,no:23},__clicksElements:[],__preloaded:!1}},{path:"24",name:"page-24",component:eC,meta:{layout:"center",hide:!1,srcSequence:"./pages/02-unicode.md",slide:{raw:`---
layout: center
---

## UTF-8 is the king of the web
`,title:"UTF-8 is the king of the web",level:2,content:"## UTF-8 is the king of the web",frontmatter:{layout:"center",hide:!1,srcSequence:"./pages/02-unicode.md"},index:23,start:212,end:218,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/02-unicode.md",raw:`---
layout: center
---

## UTF-8 is the king of the web
`,title:"UTF-8 is the king of the web",level:2,content:"## UTF-8 is the king of the web",frontmatter:{layout:"center"},index:11,start:212,end:218},filepath:"/home/ben/Workspace/demystifying-unicode/pages/02-unicode.md",noteHTML:"",id:23,no:24},__clicksElements:[],__preloaded:!1}},{path:"25",name:"page-25",component:aC,meta:{hide:!1,srcSequence:"./pages/02-unicode.md",slide:{raw:`
## Nuts and bolts of UTF-8

Key points:

- Variable width (1-4 bytes)
- ∴ Variable offset between characters
- The default in Rust (+many more)

<v-click>

<hr />

| First code point | Last code point | Byte 1 | Byte 2 | Byte 3 | Byte 4 | Bit Capacity |
| - | - | - | - | - | - | - |
| U+0000 | U+007F | \`0xxxxxxx\` | | | | 7 |
| U+0080 | U+07FF | \`110xxxxx\` | \`10xxxxxx\` | | | 11 |
| U+0800 | U+FFFF | \`1110xxxx\` | \`10xxxxxx\` | \`10xxxxxx\` | | 16 |
| U+10000 | U+10FFFF | \`11110xxx\` | \`10xxxxxx\` | \`10xxxxxx\` | \`10xxxxxx\` | 21 |

</v-click>

<!--
UTF-8 is generally speaking more efficient when dealing with "Latin" based web - Best case 1 byte, worst case, 2 bytes.
UTF-16 is gauranteed to be 2 bytes, if not 4
UTF-32 will always be 4 bytes.
-->
`,title:"Nuts and bolts of UTF-8",level:2,content:"## Nuts and bolts of UTF-8\n\nKey points:\n\n- Variable width (1-4 bytes)\n- ∴ Variable offset between characters\n- The default in Rust (+many more)\n\n<v-click>\n\n<hr />\n\n| First code point | Last code point | Byte 1 | Byte 2 | Byte 3 | Byte 4 | Bit Capacity |\n| - | - | - | - | - | - | - |\n| U+0000 | U+007F | `0xxxxxxx` | | | | 7 |\n| U+0080 | U+07FF | `110xxxxx` | `10xxxxxx` | | | 11 |\n| U+0800 | U+FFFF | `1110xxxx` | `10xxxxxx` | `10xxxxxx` | | 16 |\n| U+10000 | U+10FFFF | `11110xxx` | `10xxxxxx` | `10xxxxxx` | `10xxxxxx` | 21 |\n\n</v-click>",frontmatter:{hide:!1,srcSequence:"./pages/02-unicode.md"},note:`UTF-8 is generally speaking more efficient when dealing with "Latin" based web - Best case 1 byte, worst case, 2 bytes.
UTF-16 is gauranteed to be 2 bytes, if not 4
UTF-32 will always be 4 bytes.`,index:24,start:219,end:247,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/02-unicode.md",raw:`
## Nuts and bolts of UTF-8

Key points:

- Variable width (1-4 bytes)
- ∴ Variable offset between characters
- The default in Rust (+many more)

<v-click>

<hr />

| First code point | Last code point | Byte 1 | Byte 2 | Byte 3 | Byte 4 | Bit Capacity |
| - | - | - | - | - | - | - |
| U+0000 | U+007F | \`0xxxxxxx\` | | | | 7 |
| U+0080 | U+07FF | \`110xxxxx\` | \`10xxxxxx\` | | | 11 |
| U+0800 | U+FFFF | \`1110xxxx\` | \`10xxxxxx\` | \`10xxxxxx\` | | 16 |
| U+10000 | U+10FFFF | \`11110xxx\` | \`10xxxxxx\` | \`10xxxxxx\` | \`10xxxxxx\` | 21 |

</v-click>

<!--
UTF-8 is generally speaking more efficient when dealing with "Latin" based web - Best case 1 byte, worst case, 2 bytes.
UTF-16 is gauranteed to be 2 bytes, if not 4
UTF-32 will always be 4 bytes.
-->
`,title:"Nuts and bolts of UTF-8",level:2,content:"## Nuts and bolts of UTF-8\n\nKey points:\n\n- Variable width (1-4 bytes)\n- ∴ Variable offset between characters\n- The default in Rust (+many more)\n\n<v-click>\n\n<hr />\n\n| First code point | Last code point | Byte 1 | Byte 2 | Byte 3 | Byte 4 | Bit Capacity |\n| - | - | - | - | - | - | - |\n| U+0000 | U+007F | `0xxxxxxx` | | | | 7 |\n| U+0080 | U+07FF | `110xxxxx` | `10xxxxxx` | | | 11 |\n| U+0800 | U+FFFF | `1110xxxx` | `10xxxxxx` | `10xxxxxx` | | 16 |\n| U+10000 | U+10FFFF | `11110xxx` | `10xxxxxx` | `10xxxxxx` | `10xxxxxx` | 21 |\n\n</v-click>",frontmatter:{},note:`UTF-8 is generally speaking more efficient when dealing with "Latin" based web - Best case 1 byte, worst case, 2 bytes.
UTF-16 is gauranteed to be 2 bytes, if not 4
UTF-32 will always be 4 bytes.`,index:12,start:219,end:247},filepath:"/home/ben/Workspace/demystifying-unicode/pages/02-unicode.md",noteHTML:`<p>UTF-8 is generally speaking more efficient when dealing with &quot;Latin&quot; based web - Best case 1 byte, worst case, 2 bytes.
UTF-16 is gauranteed to be 2 bytes, if not 4
UTF-32 will always be 4 bytes.</p>
`,id:24,no:25},__clicksElements:[],__preloaded:!1}},{path:"26",name:"page-26",component:AC,meta:{hide:!1,srcSequence:"./pages/02-unicode.md",slide:{raw:`
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

</div>`,frontmatter:{hide:!1,srcSequence:"./pages/02-unicode.md"},note:"Take a codepoint, and split it into UTF-8",index:25,start:248,end:287,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/02-unicode.md",raw:`
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

</div>`,frontmatter:{},note:"Take a codepoint, and split it into UTF-8",index:13,start:248,end:287},filepath:"/home/ben/Workspace/demystifying-unicode/pages/02-unicode.md",noteHTML:`<p>Take a codepoint, and split it into UTF-8</p>
`,id:25,no:26},__clicksElements:[],__preloaded:!1}},{path:"27",name:"page-27",component:aA,meta:{hide:!1,srcSequence:"./pages/02-unicode.md",slide:{raw:`
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
</style>`,frontmatter:{hide:!1,srcSequence:"./pages/02-unicode.md"},index:26,start:288,end:372,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/02-unicode.md",raw:`
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
</style>`,frontmatter:{},index:14,start:288,end:372},filepath:"/home/ben/Workspace/demystifying-unicode/pages/02-unicode.md",noteHTML:"",id:26,no:27},__clicksElements:[],__preloaded:!1}},{path:"28",name:"page-28",component:dA,meta:{layout:"center",hide:!1,srcSequence:"./pages/02-unicode.md",slide:{raw:`---
layout: center
---

## Summary

<v-clicks>

- Unicode standard is a dictionary of codepoints and their character descriptions
- Encoding is a concept to help humans interpret bytes as painted glyphs
- UTF-8/16/32 are encodings defined by the Unicode Standard
- UTF-8 is most cases is more memory efficient due to the mass amounts of Latin + ASCII usage

</v-clicks>
`,title:"Summary",level:2,content:`## Summary

<v-clicks>

- Unicode standard is a dictionary of codepoints and their character descriptions
- Encoding is a concept to help humans interpret bytes as painted glyphs
- UTF-8/16/32 are encodings defined by the Unicode Standard
- UTF-8 is most cases is more memory efficient due to the mass amounts of Latin + ASCII usage

</v-clicks>`,frontmatter:{layout:"center",hide:!1,srcSequence:"./pages/02-unicode.md"},index:27,start:372,end:387,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/02-unicode.md",raw:`---
layout: center
---

## Summary

<v-clicks>

- Unicode standard is a dictionary of codepoints and their character descriptions
- Encoding is a concept to help humans interpret bytes as painted glyphs
- UTF-8/16/32 are encodings defined by the Unicode Standard
- UTF-8 is most cases is more memory efficient due to the mass amounts of Latin + ASCII usage

</v-clicks>
`,title:"Summary",level:2,content:`## Summary

<v-clicks>

- Unicode standard is a dictionary of codepoints and their character descriptions
- Encoding is a concept to help humans interpret bytes as painted glyphs
- UTF-8/16/32 are encodings defined by the Unicode Standard
- UTF-8 is most cases is more memory efficient due to the mass amounts of Latin + ASCII usage

</v-clicks>`,frontmatter:{layout:"center"},index:15,start:372,end:387},filepath:"/home/ben/Workspace/demystifying-unicode/pages/02-unicode.md",noteHTML:"",id:27,no:28},__clicksElements:[],__preloaded:!1}},{path:"29",name:"page-29",component:hA,meta:{layout:"cover",title:"Unicode in Rust",hide:!1,srcSequence:"./pages/03-unicode-in-rust.md",slide:{raw:null,title:"Unicode in Rust",level:1,content:"# Unicode in Rust",frontmatter:{layout:"cover",title:"Unicode in Rust",hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"},note:`We now know what UTF-8 is, and what Unicode is, how is it used in rust?

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
  - We can break a string \`unsafe {}\``,index:28,start:0,end:28,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/03-unicode-in-rust.md",raw:`---
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
`,id:28,no:29},__clicksElements:[],__preloaded:!1}},{path:"30",name:"page-30",component:yA,meta:{layout:"center",hide:!1,srcSequence:"./pages/03-unicode-in-rust.md",slide:{raw:`---
layout: center
---

Q: What is the primitive string type in rust?
`,content:"Q: What is the primitive string type in rust?",frontmatter:{layout:"center",hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"},index:29,start:28,end:34,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/03-unicode-in-rust.md",raw:`---
layout: center
---

Q: What is the primitive string type in rust?
`,content:"Q: What is the primitive string type in rust?",frontmatter:{layout:"center"},index:1,start:28,end:34},filepath:"/home/ben/Workspace/demystifying-unicode/pages/03-unicode-in-rust.md",noteHTML:"",id:29,no:30},__clicksElements:[],__preloaded:!1}},{path:"31",name:"page-31",component:kA,meta:{layout:"center",hide:!1,srcSequence:"./pages/03-unicode-in-rust.md",slide:{raw:"---\nlayout: center\n---\n\nAnswer: `str`\n\n<v-click>\n\nIncorrect: `String`, `&str`\n\n- `&str` impls `AsRef<str>`\n- `String` impls `AsRef<str>`\n- `String` impls `Deref` to `str` (thus `&String` derefs to `&str`)\n\n</v-click>\n\n<v-click>\n\n> The `str` type, also called a ‘string slice’, is the most primitive string type. It is usually seen in its borrowed form, `&str`. It is also the type of string literals, `&'static str`.\n> \n> String slices are **always** valid UTF-8.\n\n</v-click>\n",content:"Answer: `str`\n\n<v-click>\n\nIncorrect: `String`, `&str`\n\n- `&str` impls `AsRef<str>`\n- `String` impls `AsRef<str>`\n- `String` impls `Deref` to `str` (thus `&String` derefs to `&str`)\n\n</v-click>\n\n<v-click>\n\n> The `str` type, also called a ‘string slice’, is the most primitive string type. It is usually seen in its borrowed form, `&str`. It is also the type of string literals, `&'static str`.\n> \n> String slices are **always** valid UTF-8.\n\n</v-click>",frontmatter:{layout:"center",hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"},index:30,start:34,end:58,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/03-unicode-in-rust.md",raw:"---\nlayout: center\n---\n\nAnswer: `str`\n\n<v-click>\n\nIncorrect: `String`, `&str`\n\n- `&str` impls `AsRef<str>`\n- `String` impls `AsRef<str>`\n- `String` impls `Deref` to `str` (thus `&String` derefs to `&str`)\n\n</v-click>\n\n<v-click>\n\n> The `str` type, also called a ‘string slice’, is the most primitive string type. It is usually seen in its borrowed form, `&str`. It is also the type of string literals, `&'static str`.\n> \n> String slices are **always** valid UTF-8.\n\n</v-click>\n",content:"Answer: `str`\n\n<v-click>\n\nIncorrect: `String`, `&str`\n\n- `&str` impls `AsRef<str>`\n- `String` impls `AsRef<str>`\n- `String` impls `Deref` to `str` (thus `&String` derefs to `&str`)\n\n</v-click>\n\n<v-click>\n\n> The `str` type, also called a ‘string slice’, is the most primitive string type. It is usually seen in its borrowed form, `&str`. It is also the type of string literals, `&'static str`.\n> \n> String slices are **always** valid UTF-8.\n\n</v-click>",frontmatter:{layout:"center"},index:2,start:34,end:58},filepath:"/home/ben/Workspace/demystifying-unicode/pages/03-unicode-in-rust.md",noteHTML:"",id:30,no:31},__clicksElements:[],__preloaded:!1}},{path:"32",name:"page-32",component:zA,meta:{hide:!1,srcSequence:"./pages/03-unicode-in-rust.md",slide:{raw:`
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
Therefore string slices are slices of bytes`,index:31,start:59,end:107,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/03-unicode-in-rust.md",raw:`
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
`,id:31,no:32},__clicksElements:[],__preloaded:!1}},{path:"33",name:"page-33",component:YA,meta:{layout:"center",hide:!1,srcSequence:"./pages/03-unicode-in-rust.md",slide:{raw:`---
layout: center
---

## Lets make some strings
`,title:"Lets make some strings",level:2,content:"## Lets make some strings",frontmatter:{layout:"center",hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"},index:32,start:107,end:113,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/03-unicode-in-rust.md",raw:`---
layout: center
---

## Lets make some strings
`,title:"Lets make some strings",level:2,content:"## Lets make some strings",frontmatter:{layout:"center"},index:4,start:107,end:113},filepath:"/home/ben/Workspace/demystifying-unicode/pages/03-unicode-in-rust.md",noteHTML:"",id:32,no:33},__clicksElements:[],__preloaded:!1}},{path:"34",name:"page-34",component:t$,meta:{hide:!1,srcSequence:"./pages/03-unicode-in-rust.md",slide:{raw:`
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
\`\`\``,frontmatter:{hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"},note:"\\x7F is DEL, so it seems as though the character is added then removed :shrug:",index:33,start:114,end:135,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/03-unicode-in-rust.md",raw:`
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
`,id:33,no:34},__clicksElements:[],__preloaded:!1}},{path:"35",name:"page-35",component:i$,meta:{hide:!1,srcSequence:"./pages/03-unicode-in-rust.md",slide:{raw:`
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
\`\`\``,frontmatter:{hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"},index:34,start:136,end:152,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/03-unicode-in-rust.md",raw:`
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
\`\`\``,frontmatter:{},index:6,start:136,end:152},filepath:"/home/ben/Workspace/demystifying-unicode/pages/03-unicode-in-rust.md",noteHTML:"",id:34,no:35},__clicksElements:[],__preloaded:!1}},{path:"36",name:"page-36",component:d$,meta:{hide:!1,srcSequence:"./pages/03-unicode-in-rust.md",slide:{raw:`
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
\`\`\``,frontmatter:{hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"},index:35,start:153,end:168,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/03-unicode-in-rust.md",raw:`
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
\`\`\``,frontmatter:{},index:7,start:153,end:168},filepath:"/home/ben/Workspace/demystifying-unicode/pages/03-unicode-in-rust.md",noteHTML:"",id:35,no:36},__clicksElements:[],__preloaded:!1}},{path:"37",name:"page-37",component:m$,meta:{hide:!1,srcSequence:"./pages/03-unicode-in-rust.md",slide:{raw:`
## Conventially UTF-8 vs. Gaurantee

With the help of bstr crate
`,title:"Conventially UTF-8 vs. Gaurantee",level:2,content:`## Conventially UTF-8 vs. Gaurantee

With the help of bstr crate`,frontmatter:{hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"},index:36,start:169,end:174,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/03-unicode-in-rust.md",raw:`
## Conventially UTF-8 vs. Gaurantee

With the help of bstr crate
`,title:"Conventially UTF-8 vs. Gaurantee",level:2,content:`## Conventially UTF-8 vs. Gaurantee

With the help of bstr crate`,frontmatter:{},index:8,start:169,end:174},filepath:"/home/ben/Workspace/demystifying-unicode/pages/03-unicode-in-rust.md",noteHTML:"",id:36,no:37},__clicksElements:[],__preloaded:!1}},{path:"38",name:"page-38",component:v$,meta:{layout:"center",hide:!1,srcSequence:"./pages/03-unicode-in-rust.md",slide:{raw:`---
layout: center
---

## Where Enforced UTF-8 can go wrong
`,title:"Where Enforced UTF-8 can go wrong",level:2,content:"## Where Enforced UTF-8 can go wrong",frontmatter:{layout:"center",hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"},index:37,start:174,end:180,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/03-unicode-in-rust.md",raw:`---
layout: center
---

## Where Enforced UTF-8 can go wrong
`,title:"Where Enforced UTF-8 can go wrong",level:2,content:"## Where Enforced UTF-8 can go wrong",frontmatter:{layout:"center"},index:9,start:174,end:180},filepath:"/home/ben/Workspace/demystifying-unicode/pages/03-unicode-in-rust.md",noteHTML:"",id:37,no:38},__clicksElements:[],__preloaded:!1}},{path:"39",name:"page-39",component:x$,meta:{hide:!1,srcSequence:"./pages/03-unicode-in-rust.md",slide:{raw:`
## Reading and Writing files

- Binary "strings" (e.g. reading/writing from disk)
`,title:"Reading and Writing files",level:2,content:`## Reading and Writing files

- Binary "strings" (e.g. reading/writing from disk)`,frontmatter:{hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"},index:38,start:181,end:186,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/03-unicode-in-rust.md",raw:`
## Reading and Writing files

- Binary "strings" (e.g. reading/writing from disk)
`,title:"Reading and Writing files",level:2,content:`## Reading and Writing files

- Binary "strings" (e.g. reading/writing from disk)`,frontmatter:{},index:10,start:181,end:186},filepath:"/home/ben/Workspace/demystifying-unicode/pages/03-unicode-in-rust.md",noteHTML:"",id:38,no:39},__clicksElements:[],__preloaded:!1}},{path:"40",name:"page-40",component:E$,meta:{hide:!1,srcSequence:"./pages/03-unicode-in-rust.md",slide:{raw:`
## Standards - and why we follow them

- JSON, but it's binary blobs as values
`,title:"Standards - and why we follow them",level:2,content:`## Standards - and why we follow them

- JSON, but it's binary blobs as values`,frontmatter:{hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"},index:39,start:187,end:192,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/03-unicode-in-rust.md",raw:`
## Standards - and why we follow them

- JSON, but it's binary blobs as values
`,title:"Standards - and why we follow them",level:2,content:`## Standards - and why we follow them

- JSON, but it's binary blobs as values`,frontmatter:{},index:11,start:187,end:192},filepath:"/home/ben/Workspace/demystifying-unicode/pages/03-unicode-in-rust.md",noteHTML:"",id:39,no:40},__clicksElements:[],__preloaded:!1}},{path:"41",name:"page-41",component:F$,meta:{hide:!1,srcSequence:"./pages/03-unicode-in-rust.md",slide:{raw:"\n## `unsafe` is unsafe\n\n- Breaking `&str`s (pushing non utf8 bytes)\n",title:"`unsafe` is unsafe",level:2,content:"## `unsafe` is unsafe\n\n- Breaking `&str`s (pushing non utf8 bytes)",frontmatter:{hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"},index:40,start:193,end:198,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/03-unicode-in-rust.md",raw:"\n## `unsafe` is unsafe\n\n- Breaking `&str`s (pushing non utf8 bytes)\n",title:"`unsafe` is unsafe",level:2,content:"## `unsafe` is unsafe\n\n- Breaking `&str`s (pushing non utf8 bytes)",frontmatter:{},index:12,start:193,end:198},filepath:"/home/ben/Workspace/demystifying-unicode/pages/03-unicode-in-rust.md",noteHTML:"",id:40,no:41},__clicksElements:[],__preloaded:!1}},{path:"42",name:"page-42",component:B$,meta:{layout:"center",hide:!1,srcSequence:"./pages/03-unicode-in-rust.md",slide:{raw:`---
layout: center
---

## Summary

\`str\` is the primitive string - a slice of bytes with gaurantees of UTF-8

\`str\` is always \`UTF-8\`

\`UTF8Error\` is because you should be handling bytes instead of strings

\`bstr\` if you want Conventially UTF-8 instead
`,title:"Summary",level:2,content:"## Summary\n\n`str` is the primitive string - a slice of bytes with gaurantees of UTF-8\n\n`str` is always `UTF-8`\n\n`UTF8Error` is because you should be handling bytes instead of strings\n\n`bstr` if you want Conventially UTF-8 instead",frontmatter:{layout:"center",hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"},index:41,start:198,end:212,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/03-unicode-in-rust.md",raw:`---
layout: center
---

## Summary

\`str\` is the primitive string - a slice of bytes with gaurantees of UTF-8

\`str\` is always \`UTF-8\`

\`UTF8Error\` is because you should be handling bytes instead of strings

\`bstr\` if you want Conventially UTF-8 instead
`,title:"Summary",level:2,content:"## Summary\n\n`str` is the primitive string - a slice of bytes with gaurantees of UTF-8\n\n`str` is always `UTF-8`\n\n`UTF8Error` is because you should be handling bytes instead of strings\n\n`bstr` if you want Conventially UTF-8 instead",frontmatter:{layout:"center"},index:13,start:198,end:212},filepath:"/home/ben/Workspace/demystifying-unicode/pages/03-unicode-in-rust.md",noteHTML:"",id:41,no:42},__clicksElements:[],__preloaded:!1}},{path:"43",name:"page-43",component:N$,meta:{layout:"cover",title:"Quirks",hide:!1,srcSequence:"./pages/04-quirks.md",slide:{raw:null,title:"Quirks",level:1,content:"# Quirks",frontmatter:{layout:"cover",title:"Quirks",hide:!1,srcSequence:"./pages/04-quirks.md"},index:42,start:0,end:6,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/04-quirks.md",raw:`---
layout: cover
---

# Quirks
`,title:"Quirks",level:1,content:"# Quirks",frontmatter:{layout:"cover",title:"Quirks"},index:0,start:0,end:6},inline:{raw:`---
src: ./pages/04-quirks.md
hide: false
---
`,content:"",frontmatter:{hide:!1},index:6,start:53,end:58},filepath:"/home/ben/Workspace/demystifying-unicode/pages/04-quirks.md",noteHTML:"",id:42,no:43},__clicksElements:[],__preloaded:!1}},{path:"44",name:"page-44",component:z$,meta:{hide:!1,srcSequence:"./pages/04-quirks.md",slide:{raw:`
## Capitalization (AKA Casemapping and Casefolding)

All ASCII letters just so happen to be lossless when transitioning between upper and lower case versions. But this doesn't apply to all languages and characters.

Capitalization - "\\u0131" == "\\u0131".upcase.downcase. "\\u0131".upcase.downcase(:turkic)

Fun fact: There are no RTL languages that have the concept of casing (Arabic, Hebrew, Persian, and more...)
`,title:"Capitalization (AKA Casemapping and Casefolding)",level:2,content:`## Capitalization (AKA Casemapping and Casefolding)

All ASCII letters just so happen to be lossless when transitioning between upper and lower case versions. But this doesn't apply to all languages and characters.

Capitalization - "\\u0131" == "\\u0131".upcase.downcase. "\\u0131".upcase.downcase(:turkic)

Fun fact: There are no RTL languages that have the concept of casing (Arabic, Hebrew, Persian, and more...)`,frontmatter:{hide:!1,srcSequence:"./pages/04-quirks.md"},index:43,start:7,end:16,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/04-quirks.md",raw:`
## Capitalization (AKA Casemapping and Casefolding)

All ASCII letters just so happen to be lossless when transitioning between upper and lower case versions. But this doesn't apply to all languages and characters.

Capitalization - "\\u0131" == "\\u0131".upcase.downcase. "\\u0131".upcase.downcase(:turkic)

Fun fact: There are no RTL languages that have the concept of casing (Arabic, Hebrew, Persian, and more...)
`,title:"Capitalization (AKA Casemapping and Casefolding)",level:2,content:`## Capitalization (AKA Casemapping and Casefolding)

All ASCII letters just so happen to be lossless when transitioning between upper and lower case versions. But this doesn't apply to all languages and characters.

Capitalization - "\\u0131" == "\\u0131".upcase.downcase. "\\u0131".upcase.downcase(:turkic)

Fun fact: There are no RTL languages that have the concept of casing (Arabic, Hebrew, Persian, and more...)`,frontmatter:{},index:1,start:7,end:16},filepath:"/home/ben/Workspace/demystifying-unicode/pages/04-quirks.md",noteHTML:"",id:43,no:44},__clicksElements:[],__preloaded:!1}},{path:"45",name:"page-45",component:sF,meta:{hide:!1,srcSequence:"./pages/04-quirks.md",slide:{raw:"\n## Composition\n\nA[cute] E\n\n- é = `\\u00e9`\n- é = `\\u0065\\u0301` (just an `e` but with special `\\u0301` combining)\n\n```\né != é\n```\n\n`\\u003d\\u0338\\u003d` vs. `\\u2260` vs. `!=`\n\n```\n'≠=' != '≠' != '!='\n```\n\nNot not equal\n```\n=⃥\n```\n\n<footer>\n\n- Unicode combining classes: https://www.compart.com/en/unicode/combining\n- Unicode Normalization Forms: http://www.unicode.org/reports/tr15/\n- Crate unicode\\_normalization: https://docs.rs/unicode-normalization/latest/unicode_normalization/\n\n</footer>\n",title:"Composition",level:2,content:"## Composition\n\nA[cute] E\n\n- é = `\\u00e9`\n- é = `\\u0065\\u0301` (just an `e` but with special `\\u0301` combining)\n\n```\né != é\n```\n\n`\\u003d\\u0338\\u003d` vs. `\\u2260` vs. `!=`\n\n```\n'≠=' != '≠' != '!='\n```\n\nNot not equal\n```\n=⃥\n```\n\n<footer>\n\n- Unicode combining classes: https://www.compart.com/en/unicode/combining\n- Unicode Normalization Forms: http://www.unicode.org/reports/tr15/\n- Crate unicode\\_normalization: https://docs.rs/unicode-normalization/latest/unicode_normalization/\n\n</footer>",frontmatter:{hide:!1,srcSequence:"./pages/04-quirks.md"},index:44,start:17,end:48,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/04-quirks.md",raw:"\n## Composition\n\nA[cute] E\n\n- é = `\\u00e9`\n- é = `\\u0065\\u0301` (just an `e` but with special `\\u0301` combining)\n\n```\né != é\n```\n\n`\\u003d\\u0338\\u003d` vs. `\\u2260` vs. `!=`\n\n```\n'≠=' != '≠' != '!='\n```\n\nNot not equal\n```\n=⃥\n```\n\n<footer>\n\n- Unicode combining classes: https://www.compart.com/en/unicode/combining\n- Unicode Normalization Forms: http://www.unicode.org/reports/tr15/\n- Crate unicode\\_normalization: https://docs.rs/unicode-normalization/latest/unicode_normalization/\n\n</footer>\n",title:"Composition",level:2,content:"## Composition\n\nA[cute] E\n\n- é = `\\u00e9`\n- é = `\\u0065\\u0301` (just an `e` but with special `\\u0301` combining)\n\n```\né != é\n```\n\n`\\u003d\\u0338\\u003d` vs. `\\u2260` vs. `!=`\n\n```\n'≠=' != '≠' != '!='\n```\n\nNot not equal\n```\n=⃥\n```\n\n<footer>\n\n- Unicode combining classes: https://www.compart.com/en/unicode/combining\n- Unicode Normalization Forms: http://www.unicode.org/reports/tr15/\n- Crate unicode\\_normalization: https://docs.rs/unicode-normalization/latest/unicode_normalization/\n\n</footer>",frontmatter:{},index:2,start:17,end:48},filepath:"/home/ben/Workspace/demystifying-unicode/pages/04-quirks.md",noteHTML:"",id:44,no:45},__clicksElements:[],__preloaded:!1}},{path:"46",name:"page-46",component:aF,meta:{hide:!1,srcSequence:"./pages/04-quirks.md",slide:{raw:`
## Emoji Composition

<p style="font-size: 65%; line-height: 1rem;"> 😶‍🌫️ 😮‍💨 😵‍💫 ❤️‍🔥 ❤️‍🩹 👁️‍🗨️ 🫱🏻‍🫲🏼 🫱🏻‍🫲🏽 🫱🏻‍🫲🏾 🫱🏻‍🫲🏿 🫱🏼‍🫲🏻 🫱🏼‍🫲🏽 🫱🏼‍🫲🏾 🫱🏼‍🫲🏿 🫱🏽‍🫲🏻 🫱🏽‍🫲🏼 🫱🏽‍🫲🏾 🫱🏽‍🫲🏿 🫱🏾‍🫲🏻 🫱🏾‍🫲🏼 🫱🏾‍🫲🏽 🫱🏾‍🫲🏿 🫱🏿‍🫲🏻 🫱🏿‍🫲🏼 🫱🏿‍🫲🏽 🫱🏿‍🫲🏾 🧔‍♂️ 🧔🏻‍♂️ 🧔🏼‍♂️ 🧔🏽‍♂️ 🧔🏾‍♂️ 🧔🏿‍♂️ 🧔‍♀️ 🧔🏻‍♀️ 🧔🏼‍♀️ 🧔🏽‍♀️ 🧔🏾‍♀️ 🧔🏿‍♀️ 👨‍🦰 👨🏻‍🦰 👨🏼‍🦰 👨🏽‍🦰 👨🏾‍🦰 👨🏿‍🦰 👨‍🦱 👨🏻‍🦱 👨🏼‍🦱 👨🏽‍🦱 👨🏾‍🦱 👨🏿‍🦱 👨‍🦳 👨🏻‍🦳 👨🏼‍🦳 👨🏽‍🦳 👨🏾‍🦳 👨🏿‍🦳 👨‍🦲 👨🏻‍🦲 👨🏼‍🦲 👨🏽‍🦲 👨🏾‍🦲 👨🏿‍🦲 👩‍🦰 👩🏻‍🦰 👩🏼‍🦰 👩🏽‍🦰 👩🏾‍🦰 👩🏿‍🦰 🧑‍🦰 🧑🏻‍🦰 🧑🏼‍🦰 🧑🏽‍🦰 🧑🏾‍🦰 🧑🏿‍🦰 👩‍🦱 👩🏻‍🦱 👩🏼‍🦱 👩🏽‍🦱 👩🏾‍🦱 👩🏿‍🦱 🧑‍🦱 🧑🏻‍🦱 🧑🏼‍🦱 🧑🏽‍🦱 🧑🏾‍🦱 🧑🏿‍🦱 👩‍🦳 👩🏻‍🦳 👩🏼‍🦳 👩🏽‍🦳 👩🏾‍🦳 👩🏿‍🦳 🧑‍🦳 🧑🏻‍🦳 🧑🏼‍🦳 🧑🏽‍🦳 🧑🏾‍🦳 🧑🏿‍🦳 👩‍🦲 👩🏻‍🦲 👩🏼‍🦲 👩🏽‍🦲 👩🏾‍🦲 👩🏿‍🦲 🧑‍🦲 🧑🏻‍🦲 🧑🏼‍🦲 🧑🏽‍🦲 🧑🏾‍🦲 🧑🏿‍🦲 👱‍♀️ 👱🏻‍♀️ 👱🏼‍♀️ 👱🏽‍♀️ 👱🏾‍♀️ 👱🏿‍♀️ 👱‍♂️ 👱🏻‍♂️ 👱🏼‍♂️ 👱🏽‍♂️ 👱🏾‍♂️ 👱🏿‍♂️ 🙍‍♂️ 🙍🏻‍♂️ 🙍🏼‍♂️ 🙍🏽‍♂️ 🙍🏾‍♂️ 🙍🏿‍♂️ 🙍‍♀️ 🙍🏻‍♀️ 🙍🏼‍♀️ 🙍🏽‍♀️ 🙍🏾‍♀️ 🙍🏿‍♀️ 🙎‍♂️ 🙎🏻‍♂️ 🙎🏼‍♂️ 🙎🏽‍♂️ 🙎🏾‍♂️ 🙎🏿‍♂️ 🙎‍♀️ 🙎🏻‍♀️ 🙎🏼‍♀️ 🙎🏽‍♀️ 🙎🏾‍♀️ 🙎🏿‍♀️ 🙅‍♂️ 🙅🏻‍♂️ 🙅🏼‍♂️ 🙅🏽‍♂️ 🙅🏾‍♂️ 🙅🏿‍♂️ 🙅‍♀️ 🙅🏻‍♀️ 🙅🏼‍♀️ 🙅🏽‍♀️ 🙅🏾‍♀️ 🙅🏿‍♀️ 🙆‍♂️ 🙆🏻‍♂️ 🙆🏼‍♂️ 🙆🏽‍♂️ 🙆🏾‍♂️ 🙆🏿‍♂️ 🙆‍♀️ 🙆🏻‍♀️ 🙆🏼‍♀️ 🙆🏽‍♀️ 🙆🏾‍♀️ 🙆🏿‍♀️ 💁‍♂️ 💁🏻‍♂️ 💁🏼‍♂️ 💁🏽‍♂️ 💁🏾‍♂️ 💁🏿‍♂️ 💁‍♀️ 💁🏻‍♀️ 💁🏼‍♀️ 💁🏽‍♀️ 💁🏾‍♀️ 💁🏿‍♀️ 🙋‍♂️ 🙋🏻‍♂️ 🙋🏼‍♂️ 🙋🏽‍♂️ 🙋🏾‍♂️ 🙋🏿‍♂️ 🙋‍♀️ 🙋🏻‍♀️ 🙋🏼‍♀️ 🙋🏽‍♀️ 🙋🏾‍♀️ 🙋🏿‍♀️ 🧏‍♂️ 🧏🏻‍♂️ 🧏🏼‍♂️ 🧏🏽‍♂️ 🧏🏾‍♂️ 🧏🏿‍♂️ 🧏‍♀️ 🧏🏻‍♀️ 🧏🏼‍♀️ 🧏🏽‍♀️ 🧏🏾‍♀️ 🧏🏿‍♀️ 🙇‍♂️ 🙇🏻‍♂️ 🙇🏼‍♂️ 🙇🏽‍♂️ 🙇🏾‍♂️ 🙇🏿‍♂️ 🙇‍♀️ 🙇🏻‍♀️ 🙇🏼‍♀️ 🙇🏽‍♀️ 🙇🏾‍♀️ 🙇🏿‍♀️ 🤦‍♂️ 🤦🏻‍♂️ 🤦🏼‍♂️ 🤦🏽‍♂️ 🤦🏾‍♂️ 🤦🏿‍♂️ 🤦‍♀️ 🤦🏻‍♀️ 🤦🏼‍♀️ 🤦🏽‍♀️ 🤦🏾‍♀️ 🤦🏿‍♀️ 🤷‍♂️ 🤷🏻‍♂️ 🤷🏼‍♂️ 🤷🏽‍♂️ 🤷🏾‍♂️ 🤷🏿‍♂️ 🤷‍♀️ 🤷🏻‍♀️ 🤷🏼‍♀️ 🤷🏽‍♀️ 🤷🏾‍♀️ 🤷🏿‍♀️ 🧑‍⚕️ 🧑🏻‍⚕️ 🧑🏼‍⚕️ 🧑🏽‍⚕️ 🧑🏾‍⚕️ 🧑🏿‍⚕️ 👨‍⚕️ 👨🏻‍⚕️ 👨🏼‍⚕️ 👨🏽‍⚕️ 👨🏾‍⚕️ 👨🏿‍⚕️ 👩‍⚕️ 👩🏻‍⚕️ 👩🏼‍⚕️ 👩🏽‍⚕️ 👩🏾‍⚕️ 👩🏿‍⚕️ 🧑‍🎓 🧑🏻‍🎓 🧑🏼‍🎓 🧑🏽‍🎓 🧑🏾‍🎓 🧑🏿‍🎓 👨‍🎓 👨🏻‍🎓 👨🏼‍🎓 👨🏽‍🎓 👨🏾‍🎓 👨🏿‍🎓 👩‍🎓 👩🏻‍🎓 👩🏼‍🎓 👩🏽‍🎓 👩🏾‍🎓 👩🏿‍🎓 🧑‍🏫 🧑🏻‍🏫 🧑🏼‍🏫 🧑🏽‍🏫 🧑🏾‍🏫 🧑🏿‍🏫 👨‍🏫 👨🏻‍🏫 👨🏼‍🏫 👨🏽‍🏫 👨🏾‍🏫 👨🏿‍🏫 👩‍🏫 👩🏻‍🏫 👩🏼‍🏫 👩🏽‍🏫 👩🏾‍🏫 👩🏿‍🏫 🧑‍⚖️ 🧑🏻‍⚖️ 🧑🏼‍⚖️ 🧑🏽‍⚖️ 🧑🏾‍⚖️ 🧑🏿‍⚖️ 👨‍⚖️ 👨🏻‍⚖️ 👨🏼‍⚖️ 👨🏽‍⚖️ 👨🏾‍⚖️ 👨🏿‍⚖️ 👩‍⚖️ 👩🏻‍⚖️ 👩🏼‍⚖️ 👩🏽‍⚖️ 👩🏾‍⚖️ 👩🏿‍⚖️ 🧑‍🌾 🧑🏻‍🌾 🧑🏼‍🌾 🧑🏽‍🌾 🧑🏾‍🌾 🧑🏿‍🌾 👨‍🌾 👨🏻‍🌾 👨🏼‍🌾 👨🏽‍🌾 👨🏾‍🌾 👨🏿‍🌾 👩‍🌾 👩🏻‍🌾 👩🏼‍🌾 👩🏽‍🌾 👩🏾‍🌾 👩🏿‍🌾 🧑‍🍳 🧑🏻‍🍳 🧑🏼‍🍳 🧑🏽‍🍳 🧑🏾‍🍳 🧑🏿‍🍳 👨‍🍳 👨🏻‍🍳 👨🏼‍🍳 👨🏽‍🍳 👨🏾‍🍳 👨🏿‍🍳 👩‍🍳 👩🏻‍🍳 👩🏼‍🍳 👩🏽‍🍳 👩🏾‍🍳 👩🏿‍🍳 🧑‍🔧 🧑🏻‍🔧 🧑🏼‍🔧 🧑🏽‍🔧 🧑🏾‍🔧 🧑🏿‍🔧 👨‍🔧 👨🏻‍🔧 👨🏼‍🔧 👨🏽‍🔧 👨🏾‍🔧 👨🏿‍🔧 👩‍🔧 👩🏻‍🔧 👩🏼‍🔧 👩🏽‍🔧 👩🏾‍🔧 👩🏿‍🔧 🧑‍🏭 🧑🏻‍🏭 🧑🏼‍🏭 🧑🏽‍🏭 🧑🏾‍🏭 🧑🏿‍🏭 👨‍🏭 👨🏻‍🏭 👨🏼‍🏭 👨🏽‍🏭 👨🏾‍🏭 👨🏿‍🏭 👩‍🏭 👩🏻‍🏭 👩🏼‍🏭 👩🏽‍🏭 👩🏾‍🏭 👩🏿‍🏭 🧑‍💼 🧑🏻‍💼 🧑🏼‍💼 🧑🏽‍💼 🧑🏾‍💼 🧑🏿‍💼 👨‍💼 👨🏻‍💼 👨🏼‍💼 👨🏽‍💼 👨🏾‍💼 👨🏿‍💼 👩‍💼 👩🏻‍💼 👩🏼‍💼 👩🏽‍💼 👩🏾‍💼 👩🏿‍💼 🧑‍🔬 🧑🏻‍🔬 🧑🏼‍🔬 🧑🏽‍🔬 🧑🏾‍🔬 🧑🏿‍🔬 👨‍🔬 👨🏻‍🔬 👨🏼‍🔬 👨🏽‍🔬 👨🏾‍🔬 👨🏿‍🔬 👩‍🔬 👩🏻‍🔬 👩🏼‍🔬 👩🏽‍🔬 👩🏾‍🔬 👩🏿‍🔬 🧑‍💻 🧑🏻‍💻 🧑🏼‍💻 🧑🏽‍💻 🧑🏾‍💻 🧑🏿‍💻 👨‍💻 👨🏻‍💻 👨🏼‍💻 👨🏽‍💻 👨🏾‍💻 👨🏿‍💻 👩‍💻 👩🏻‍💻 👩🏼‍💻 👩🏽‍💻 👩🏾‍💻 👩🏿‍💻 🧑‍🎤 🧑🏻‍🎤 🧑🏼‍🎤 🧑🏽‍🎤 🧑🏾‍🎤 🧑🏿‍🎤 👨‍🎤 👨🏻‍🎤 👨🏼‍🎤 👨🏽‍🎤 👨🏾‍🎤 👨🏿‍🎤 👩‍🎤 👩🏻‍🎤 👩🏼‍🎤 👩🏽‍🎤 👩🏾‍🎤 👩🏿‍🎤 🧑‍🎨 🧑🏻‍🎨 🧑🏼‍🎨 🧑🏽‍🎨 🧑🏾‍🎨 🧑🏿‍🎨 👨‍🎨 👨🏻‍🎨 👨🏼‍🎨 👨🏽‍🎨 👨🏾‍🎨 👨🏿‍🎨 👩‍🎨 👩🏻‍🎨 👩🏼‍🎨 👩🏽‍🎨 👩🏾‍🎨 👩🏿‍🎨 🧑‍✈️ 🧑🏻‍✈️ 🧑🏼‍✈️ 🧑🏽‍✈️ 🧑🏾‍✈️ 🧑🏿‍✈️ 👨‍✈️ 👨🏻‍✈️ 👨🏼‍✈️ 👨🏽‍✈️ 👨🏾‍✈️ 👨🏿‍✈️ 👩‍✈️ 👩🏻‍✈️ 👩🏼‍✈️ 👩🏽‍✈️ 👩🏾‍✈️ 👩🏿‍✈️ 🧑‍🚀 🧑🏻‍🚀 🧑🏼‍🚀 🧑🏽‍🚀 🧑🏾‍🚀 🧑🏿‍🚀 👨‍🚀 👨🏻‍🚀 👨🏼‍🚀 👨🏽‍🚀 👨🏾‍🚀 👨🏿‍🚀 👩‍🚀 👩🏻‍🚀 👩🏼‍🚀 👩🏽‍🚀 👩🏾‍🚀 👩🏿‍🚀 🧑‍🚒 🧑🏻‍🚒 🧑🏼‍🚒 🧑🏽‍🚒 🧑🏾‍🚒 🧑🏿‍🚒 👨‍🚒 👨🏻‍🚒 👨🏼‍🚒 👨🏽‍🚒 👨🏾‍🚒 👨🏿‍🚒 👩‍🚒 👩🏻‍🚒 👩🏼‍🚒 👩🏽‍🚒 👩🏾‍🚒 👩🏿‍🚒 👮‍♂️ 👮🏻‍♂️ 👮🏼‍♂️ 👮🏽‍♂️ 👮🏾‍♂️ 👮🏿‍♂️ 👮‍♀️ 👮🏻‍♀️ 👮🏼‍♀️ 👮🏽‍♀️ 👮🏾‍♀️ 👮🏿‍♀️ 🕵️‍♂️ 🕵🏻‍♂️ 🕵🏼‍♂️ 🕵🏽‍♂️ 🕵🏾‍♂️ 🕵🏿‍♂️ 🕵️‍♀️ 🕵🏻‍♀️ 🕵🏼‍♀️ 🕵🏽‍♀️ 🕵🏾‍♀️ 🕵🏿‍♀️ 💂‍♂️ 💂🏻‍♂️ 💂🏼‍♂️ 💂🏽‍♂️ 💂🏾‍♂️ 💂🏿‍♂️ 💂‍♀️ 💂🏻‍♀️ 💂🏼‍♀️ 💂🏽‍♀️ 💂🏾‍♀️ 💂🏿‍♀️ 👷‍♂️ 👷🏻‍♂️ 👷🏼‍♂️ 👷🏽‍♂️ 👷🏾‍♂️ 👷🏿‍♂️ 👷‍♀️ 👷🏻‍♀️ 👷🏼‍♀️ 👷🏽‍♀️ 👷🏾‍♀️ 👷🏿‍♀️ 👳‍♂️ 👳🏻‍♂️ 👳🏼‍♂️ 👳🏽‍♂️ 👳🏾‍♂️ 👳🏿‍♂️ 👳‍♀️ 👳🏻‍♀️ 👳🏼‍♀️ 👳🏽‍♀️ 👳🏾‍♀️ 👳🏿‍♀️ 🤵‍♂️ 🤵🏻‍♂️ 🤵🏼‍♂️ 🤵🏽‍♂️ 🤵🏾‍♂️ 🤵🏿‍♂️ 🤵‍♀️ 🤵🏻‍♀️ 🤵🏼‍♀️ 🤵🏽‍♀️ 🤵🏾‍♀️ 🤵🏿‍♀️ 👰‍♂️ 👰🏻‍♂️ 👰🏼‍♂️ 👰🏽‍♂️ 👰🏾‍♂️ 👰🏿‍♂️ 👰‍♀️ 👰🏻‍♀️ 👰🏼‍♀️ 👰🏽‍♀️ 👰🏾‍♀️ 👰🏿‍♀️ 👩‍🍼 👩🏻‍🍼 👩🏼‍🍼 👩🏽‍🍼 👩🏾‍🍼 👩🏿‍🍼 👨‍🍼 👨🏻‍🍼 👨🏼‍🍼 👨🏽‍🍼 👨🏾‍🍼 👨🏿‍🍼 🧑‍🍼 🧑🏻‍🍼 🧑🏼‍🍼 🧑🏽‍🍼 🧑🏾‍🍼 🧑🏿‍🍼 🧑‍🎄 🧑🏻‍🎄 🧑🏼‍🎄 🧑🏽‍🎄 🧑🏾‍🎄 🧑🏿‍🎄 🦸‍♂️ 🦸🏻‍♂️ 🦸🏼‍♂️ 🦸🏽‍♂️ 🦸🏾‍♂️ 🦸🏿‍♂️ 🦸‍♀️ 🦸🏻‍♀️ 🦸🏼‍♀️ 🦸🏽‍♀️ 🦸🏾‍♀️ 🦸🏿‍♀️ 🦹‍♂️ 🦹🏻‍♂️ 🦹🏼‍♂️ 🦹🏽‍♂️ 🦹🏾‍♂️ 🦹🏿‍♂️ 🦹‍♀️ 🦹🏻‍♀️ 🦹🏼‍♀️ 🦹🏽‍♀️ 🦹🏾‍♀️ 🦹🏿‍♀️ 🧙‍♂️ 🧙🏻‍♂️ 🧙🏼‍♂️ 🧙🏽‍♂️ 🧙🏾‍♂️ 🧙🏿‍♂️ 🧙‍♀️ 🧙🏻‍♀️ 🧙🏼‍♀️ 🧙🏽‍♀️ 🧙🏾‍♀️ 🧙🏿‍♀️ 🧚‍♂️ 🧚🏻‍♂️ 🧚🏼‍♂️ 🧚🏽‍♂️ 🧚🏾‍♂️ 🧚🏿‍♂️ 🧚‍♀️ 🧚🏻‍♀️ 🧚🏼‍♀️ 🧚🏽‍♀️ 🧚🏾‍♀️ 🧚🏿‍♀️ 🧛‍♂️ 🧛🏻‍♂️ 🧛🏼‍♂️ 🧛🏽‍♂️ 🧛🏾‍♂️ 🧛🏿‍♂️ 🧛‍♀️ 🧛🏻‍♀️ 🧛🏼‍♀️ 🧛🏽‍♀️ 🧛🏾‍♀️ 🧛🏿‍♀️ 🧜‍♂️ 🧜🏻‍♂️ 🧜🏼‍♂️ 🧜🏽‍♂️ 🧜🏾‍♂️ 🧜🏿‍♂️ 🧜‍♀️ 🧜🏻‍♀️ 🧜🏼‍♀️ 🧜🏽‍♀️ 🧜🏾‍♀️ 🧜🏿‍♀️ 🧝‍♂️ 🧝🏻‍♂️ 🧝🏼‍♂️ 🧝🏽‍♂️ 🧝🏾‍♂️ 🧝🏿‍♂️ 🧝‍♀️ 🧝🏻‍♀️ 🧝🏼‍♀️ 🧝🏽‍♀️ 🧝🏾‍♀️ 🧝🏿‍♀️ 🧞‍♂️ 🧞‍♀️ 🧟‍♂️ 🧟‍♀️ 💆‍♂️ 💆🏻‍♂️ 💆🏼‍♂️ 💆🏽‍♂️ 💆🏾‍♂️ 💆🏿‍♂️ 💆‍♀️ 💆🏻‍♀️ 💆🏼‍♀️ 💆🏽‍♀️ 💆🏾‍♀️ 💆🏿‍♀️ 💇‍♂️ 💇🏻‍♂️ 💇🏼‍♂️ 💇🏽‍♂️ 💇🏾‍♂️ 💇🏿‍♂️ 💇‍♀️ 💇🏻‍♀️ 💇🏼‍♀️ 💇🏽‍♀️ 💇🏾‍♀️ 💇🏿‍♀️ 🚶‍♂️ 🚶🏻‍♂️ 🚶🏼‍♂️ 🚶🏽‍♂️ 🚶🏾‍♂️ 🚶🏿‍♂️ 🚶‍♀️ 🚶🏻‍♀️ 🚶🏼‍♀️ 🚶🏽‍♀️ 🚶🏾‍♀️ 🚶🏿‍♀️ 🧍‍♂️ 🧍🏻‍♂️ 🧍🏼‍♂️ 🧍🏽‍♂️ 🧍🏾‍♂️ 🧍🏿‍♂️ 🧍‍♀️ 🧍🏻‍♀️ 🧍🏼‍♀️ 🧍🏽‍♀️ 🧍🏾‍♀️ 🧍🏿‍♀️ 🧎‍♂️ 🧎🏻‍♂️ 🧎🏼‍♂️ 🧎🏽‍♂️ 🧎🏾‍♂️ 🧎🏿‍♂️ 🧎‍♀️ 🧎🏻‍♀️ 🧎🏼‍♀️ 🧎🏽‍♀️ 🧎🏾‍♀️ 🧎🏿‍♀️ 🧑‍🦯 🧑🏻‍🦯 🧑🏼‍🦯 🧑🏽‍🦯 🧑🏾‍🦯 🧑🏿‍🦯 👨‍🦯 👨🏻‍🦯 👨🏼‍🦯 👨🏽‍🦯 👨🏾‍🦯 👨🏿‍🦯 👩‍🦯 👩🏻‍🦯 👩🏼‍🦯 👩🏽‍🦯 👩🏾‍🦯 👩🏿‍🦯 🧑‍🦼 🧑🏻‍🦼 🧑🏼‍🦼 🧑🏽‍🦼 🧑🏾‍🦼 🧑🏿‍🦼 👨‍🦼 👨🏻‍🦼 👨🏼‍🦼 👨🏽‍🦼 👨🏾‍🦼 👨🏿‍🦼 👩‍🦼 👩🏻‍🦼 👩🏼‍🦼 👩🏽‍🦼 👩🏾‍🦼 👩🏿‍🦼 🧑‍🦽 🧑🏻‍🦽 🧑🏼‍🦽 🧑🏽‍🦽 🧑🏾‍🦽 🧑🏿‍🦽 👨‍🦽 👨🏻‍🦽 👨🏼‍🦽 👨🏽‍🦽 👨🏾‍🦽 👨🏿‍🦽 👩‍🦽 👩🏻‍🦽 👩🏼‍🦽 👩🏽‍🦽 👩🏾‍🦽 👩🏿‍🦽 🏃‍♂️ 🏃🏻‍♂️ 🏃🏼‍♂️ 🏃🏽‍♂️ 🏃🏾‍♂️ 🏃🏿‍♂️ 🏃‍♀️ 🏃🏻‍♀️ 🏃🏼‍♀️ 🏃🏽‍♀️ 🏃🏾‍♀️ 🏃🏿‍♀️ 👯‍♂️ 👯‍♀️ 🧖‍♂️ 🧖🏻‍♂️ 🧖🏼‍♂️ 🧖🏽‍♂️ 🧖🏾‍♂️ 🧖🏿‍♂️ 🧖‍♀️ 🧖🏻‍♀️ 🧖🏼‍♀️ 🧖🏽‍♀️ 🧖🏾‍♀️ 🧖🏿‍♀️ 🧗‍♂️ 🧗🏻‍♂️ 🧗🏼‍♂️ 🧗🏽‍♂️ 🧗🏾‍♂️ 🧗🏿‍♂️ 🧗‍♀️ 🧗🏻‍♀️ 🧗🏼‍♀️ 🧗🏽‍♀️ 🧗🏾‍♀️ 🧗🏿‍♀️ 🏌️‍♂️ 🏌🏻‍♂️ 🏌🏼‍♂️ 🏌🏽‍♂️ 🏌🏾‍♂️ 🏌🏿‍♂️ 🏌️‍♀️ 🏌🏻‍♀️ 🏌🏼‍♀️ 🏌🏽‍♀️ 🏌🏾‍♀️ 🏌🏿‍♀️ 🏄‍♂️ 🏄🏻‍♂️ 🏄🏼‍♂️ 🏄🏽‍♂️ 🏄🏾‍♂️ 🏄🏿‍♂️ 🏄‍♀️ 🏄🏻‍♀️ 🏄🏼‍♀️ 🏄🏽‍♀️ 🏄🏾‍♀️ 🏄🏿‍♀️ 🚣‍♂️ 🚣🏻‍♂️ 🚣🏼‍♂️ 🚣🏽‍♂️ 🚣🏾‍♂️ 🚣🏿‍♂️ 🚣‍♀️ 🚣🏻‍♀️ 🚣🏼‍♀️ 🚣🏽‍♀️ 🚣🏾‍♀️ 🚣🏿‍♀️ 🏊‍♂️ 🏊🏻‍♂️ 🏊🏼‍♂️ 🏊🏽‍♂️ 🏊🏾‍♂️ 🏊🏿‍♂️ 🏊‍♀️ 🏊🏻‍♀️ 🏊🏼‍♀️ 🏊🏽‍♀️ 🏊🏾‍♀️ 🏊🏿‍♀️ ⛹️‍♂️ ⛹🏻‍♂️ ⛹🏼‍♂️ ⛹🏽‍♂️ ⛹🏾‍♂️ ⛹🏿‍♂️ ⛹️‍♀️ ⛹🏻‍♀️ ⛹🏼‍♀️ ⛹🏽‍♀️ ⛹🏾‍♀️ ⛹🏿‍♀️ 🏋️‍♂️ 🏋🏻‍♂️ 🏋🏼‍♂️ 🏋🏽‍♂️ 🏋🏾‍♂️ 🏋🏿‍♂️ 🏋️‍♀️ 🏋🏻‍♀️ 🏋🏼‍♀️ 🏋🏽‍♀️ 🏋🏾‍♀️ 🏋🏿‍♀️ 🚴‍♂️ 🚴🏻‍♂️ 🚴🏼‍♂️ 🚴🏽‍♂️ 🚴🏾‍♂️ 🚴🏿‍♂️ 🚴‍♀️ 🚴🏻‍♀️ 🚴🏼‍♀️ 🚴🏽‍♀️ 🚴🏾‍♀️ 🚴🏿‍♀️ 🚵‍♂️ 🚵🏻‍♂️ 🚵🏼‍♂️ 🚵🏽‍♂️ 🚵🏾‍♂️ 🚵🏿‍♂️ 🚵‍♀️ 🚵🏻‍♀️ 🚵🏼‍♀️ 🚵🏽‍♀️ 🚵🏾‍♀️ 🚵🏿‍♀️ 🤸‍♂️ 🤸🏻‍♂️ 🤸🏼‍♂️ 🤸🏽‍♂️ 🤸🏾‍♂️ 🤸🏿‍♂️ 🤸‍♀️ 🤸🏻‍♀️ 🤸🏼‍♀️ 🤸🏽‍♀️ 🤸🏾‍♀️ 🤸🏿‍♀️ 🤼‍♂️ 🤼‍♀️ 🤽‍♂️ 🤽🏻‍♂️ 🤽🏼‍♂️ 🤽🏽‍♂️ 🤽🏾‍♂️ 🤽🏿‍♂️ 🤽‍♀️ 🤽🏻‍♀️ 🤽🏼‍♀️ 🤽🏽‍♀️ 🤽🏾‍♀️ 🤽🏿‍♀️ 🤾‍♂️ 🤾🏻‍♂️ 🤾🏼‍♂️ 🤾🏽‍♂️ 🤾🏾‍♂️ 🤾🏿‍♂️ 🤾‍♀️ 🤾🏻‍♀️ 🤾🏼‍♀️ 🤾🏽‍♀️ 🤾🏾‍♀️ 🤾🏿‍♀️ 🤹‍♂️ 🤹🏻‍♂️ 🤹🏼‍♂️ 🤹🏽‍♂️ 🤹🏾‍♂️ 🤹🏿‍♂️ 🤹‍♀️ 🤹🏻‍♀️ 🤹🏼‍♀️ 🤹🏽‍♀️ 🤹🏾‍♀️ 🤹🏿‍♀️ 🧘‍♂️ 🧘🏻‍♂️ 🧘🏼‍♂️ 🧘🏽‍♂️ 🧘🏾‍♂️ 🧘🏿‍♂️ 🧘‍♀️ 🧘🏻‍♀️ 🧘🏼‍♀️ 🧘🏽‍♀️ 🧘🏾‍♀️ 🧘🏿‍♀️ 🧑‍🤝‍🧑 🧑🏻‍🤝‍🧑🏻 🧑🏻‍🤝‍🧑🏼 🧑🏻‍🤝‍🧑🏽 🧑🏻‍🤝‍🧑🏾 🧑🏻‍🤝‍🧑🏿 🧑🏼‍🤝‍🧑🏻 🧑🏼‍🤝‍🧑🏼 🧑🏼‍🤝‍🧑🏽 🧑🏼‍🤝‍🧑🏾 🧑🏼‍🤝‍🧑🏿 🧑🏽‍🤝‍🧑🏻 🧑🏽‍🤝‍🧑🏼 🧑🏽‍🤝‍🧑🏽 🧑🏽‍🤝‍🧑🏾 🧑🏽‍🤝‍🧑🏿 🧑🏾‍🤝‍🧑🏻 🧑🏾‍🤝‍🧑🏼 🧑🏾‍🤝‍🧑🏽 🧑🏾‍🤝‍🧑🏾 🧑🏾‍🤝‍🧑🏿 🧑🏿‍🤝‍🧑🏻 🧑🏿‍🤝‍🧑🏼 🧑🏿‍🤝‍🧑🏽 🧑🏿‍🤝‍🧑🏾 🧑🏿‍🤝‍🧑🏿 👩🏻‍🤝‍👩🏼 👩🏻‍🤝‍👩🏽 👩🏻‍🤝‍👩🏾 👩🏻‍🤝‍👩🏿 👩🏼‍🤝‍👩🏻 👩🏼‍🤝‍👩🏽 👩🏼‍🤝‍👩🏾 👩🏼‍🤝‍👩🏿 👩🏽‍🤝‍👩🏻 👩🏽‍🤝‍👩🏼 👩🏽‍🤝‍👩🏾 👩🏽‍🤝‍👩🏿 👩🏾‍🤝‍👩🏻 👩🏾‍🤝‍👩🏼 👩🏾‍🤝‍👩🏽 👩🏾‍🤝‍👩🏿 👩🏿‍🤝‍👩🏻 👩🏿‍🤝‍👩🏼 👩🏿‍🤝‍👩🏽 👩🏿‍🤝‍👩🏾 👩🏻‍🤝‍👨🏼 👩🏻‍🤝‍👨🏽 👩🏻‍🤝‍👨🏾 👩🏻‍🤝‍👨🏿 👩🏼‍🤝‍👨🏻 👩🏼‍🤝‍👨🏽 👩🏼‍🤝‍👨🏾 👩🏼‍🤝‍👨🏿 👩🏽‍🤝‍👨🏻 👩🏽‍🤝‍👨🏼 👩🏽‍🤝‍👨🏾 👩🏽‍🤝‍👨🏿 👩🏾‍🤝‍👨🏻 👩🏾‍🤝‍👨🏼 👩🏾‍🤝‍👨🏽 👩🏾‍🤝‍👨🏿 👩🏿‍🤝‍👨🏻 👩🏿‍🤝‍👨🏼 👩🏿‍🤝‍👨🏽 👩🏿‍🤝‍👨🏾 👨🏻‍🤝‍👨🏼 👨🏻‍🤝‍👨🏽 👨🏻‍🤝‍👨🏾 👨🏻‍🤝‍👨🏿 👨🏼‍🤝‍👨🏻 👨🏼‍🤝‍👨🏽 👨🏼‍🤝‍👨🏾 👨🏼‍🤝‍👨🏿 👨🏽‍🤝‍👨🏻 👨🏽‍🤝‍👨🏼 👨🏽‍🤝‍👨🏾 👨🏽‍🤝‍👨🏿 👨🏾‍🤝‍👨🏻 👨🏾‍🤝‍👨🏼 👨🏾‍🤝‍👨🏽 👨🏾‍🤝‍👨🏿 👨🏿‍🤝‍👨🏻 👨🏿‍🤝‍👨🏼 👨🏿‍🤝‍👨🏽 👨🏿‍🤝‍👨🏾 💏 🧑🏻‍❤️‍💋‍🧑🏼 🧑🏻‍❤️‍💋‍🧑🏽 🧑🏻‍❤️‍💋‍🧑🏾 🧑🏻‍❤️‍💋‍🧑🏿 🧑🏼‍❤️‍💋‍🧑🏻 🧑🏼‍❤️‍💋‍🧑🏽 🧑🏼‍❤️‍💋‍🧑🏾 🧑🏼‍❤️‍💋‍🧑🏿 🧑🏽‍❤️‍💋‍🧑🏻 🧑🏽‍❤️‍💋‍🧑🏼 🧑🏽‍❤️‍💋‍🧑🏾 🧑🏽‍❤️‍💋‍🧑🏿 🧑🏾‍❤️‍💋‍🧑🏻 🧑🏾‍❤️‍💋‍🧑🏼 🧑🏾‍❤️‍💋‍🧑🏽 🧑🏾‍❤️‍💋‍🧑🏿 🧑🏿‍❤️‍💋‍🧑🏻 🧑🏿‍❤️‍💋‍🧑🏼 🧑🏿‍❤️‍💋‍🧑🏽 🧑🏿‍❤️‍💋‍🧑🏾 👩‍❤️‍💋‍👨 👩🏻‍❤️‍💋‍👨🏻 👩🏻‍❤️‍💋‍👨🏼 👩🏻‍❤️‍💋‍👨🏽 👩🏻‍❤️‍💋‍👨🏾 👩🏻‍❤️‍💋‍👨🏿 👩🏼‍❤️‍💋‍👨🏻 👩🏼‍❤️‍💋‍👨🏼 👩🏼‍❤️‍💋‍👨🏽 👩🏼‍❤️‍💋‍👨🏾 👩🏼‍❤️‍💋‍👨🏿 👩🏽‍❤️‍💋‍👨🏻 👩🏽‍❤️‍💋‍👨🏼 👩🏽‍❤️‍💋‍👨🏽 👩🏽‍❤️‍💋‍👨🏾 👩🏽‍❤️‍💋‍👨🏿 👩🏾‍❤️‍💋‍👨🏻 👩🏾‍❤️‍💋‍👨🏼 👩🏾‍❤️‍💋‍👨🏽 👩🏾‍❤️‍💋‍👨🏾 👩🏾‍❤️‍💋‍👨🏿 👩🏿‍❤️‍💋‍👨🏻 👩🏿‍❤️‍💋‍👨🏼 👩🏿‍❤️‍💋‍👨🏽 👩🏿‍❤️‍💋‍👨🏾 👩🏿‍❤️‍💋‍👨🏿 👨‍❤️‍💋‍👨 👨🏻‍❤️‍💋‍👨🏻 👨🏻‍❤️‍💋‍👨🏼 👨🏻‍❤️‍💋‍👨🏽 👨🏻‍❤️‍💋‍👨🏾 👨🏻‍❤️‍💋‍👨🏿 👨🏼‍❤️‍💋‍👨🏻 👨🏼‍❤️‍💋‍👨🏼 👨🏼‍❤️‍💋‍👨🏽 👨🏼‍❤️‍💋‍👨🏾 👨🏼‍❤️‍💋‍👨🏿 👨🏽‍❤️‍💋‍👨🏻 👨🏽‍❤️‍💋‍👨🏼 👨🏽‍❤️‍💋‍👨🏽 👨🏽‍❤️‍💋‍👨🏾 👨🏽‍❤️‍💋‍👨🏿 👨🏾‍❤️‍💋‍👨🏻 👨🏾‍❤️‍💋‍👨🏼 👨🏾‍❤️‍💋‍👨🏽 👨🏾‍❤️‍💋‍👨🏾 👨🏾‍❤️‍💋‍👨🏿 👨🏿‍❤️‍💋‍👨🏻 👨🏿‍❤️‍💋‍👨🏼 👨🏿‍❤️‍💋‍👨🏽 👨🏿‍❤️‍💋‍👨🏾 👨🏿‍❤️‍💋‍👨🏿 👩‍❤️‍💋‍👩 👩🏻‍❤️‍💋‍👩🏻 👩🏻‍❤️‍💋‍👩🏼 👩🏻‍❤️‍💋‍👩🏽 👩🏻‍❤️‍💋‍👩🏾 👩🏻‍❤️‍💋‍👩🏿 👩🏼‍❤️‍💋‍👩🏻 👩🏼‍❤️‍💋‍👩🏼 👩🏼‍❤️‍💋‍👩🏽 👩🏼‍❤️‍💋‍👩🏾 👩🏼‍❤️‍💋‍👩🏿 👩🏽‍❤️‍💋‍👩🏻 👩🏽‍❤️‍💋‍👩🏼 👩🏽‍❤️‍💋‍👩🏽 👩🏽‍❤️‍💋‍👩🏾 👩🏽‍❤️‍💋‍👩🏿 👩🏾‍❤️‍💋‍👩🏻 👩🏾‍❤️‍💋‍👩🏼 👩🏾‍❤️‍💋‍👩🏽 👩🏾‍❤️‍💋‍👩🏾 👩🏾‍❤️‍💋‍👩🏿 👩🏿‍❤️‍💋‍👩🏻 👩🏿‍❤️‍💋‍👩🏼 👩🏿‍❤️‍💋‍👩🏽 👩🏿‍❤️‍💋‍👩🏾 👩🏿‍❤️‍💋‍👩🏿 💑 🧑🏻‍❤️‍🧑🏼 🧑🏻‍❤️‍🧑🏽 🧑🏻‍❤️‍🧑🏾 🧑🏻‍❤️‍🧑🏿 🧑🏼‍❤️‍🧑🏻 🧑🏼‍❤️‍🧑🏽 🧑🏼‍❤️‍🧑🏾 🧑🏼‍❤️‍🧑🏿 🧑🏽‍❤️‍🧑🏻 🧑🏽‍❤️‍🧑🏼 🧑🏽‍❤️‍🧑🏾 🧑🏽‍❤️‍🧑🏿 🧑🏾‍❤️‍🧑🏻 🧑🏾‍❤️‍🧑🏼 🧑🏾‍❤️‍🧑🏽 🧑🏾‍❤️‍🧑🏿 🧑🏿‍❤️‍🧑🏻 🧑🏿‍❤️‍🧑🏼 🧑🏿‍❤️‍🧑🏽 🧑🏿‍❤️‍🧑🏾 👩‍❤️‍👨 👩🏻‍❤️‍👨🏻 👩🏻‍❤️‍👨🏼 👩🏻‍❤️‍👨🏽 👩🏻‍❤️‍👨🏾 👩🏻‍❤️‍👨🏿 👩🏼‍❤️‍👨🏻 👩🏼‍❤️‍👨🏼 👩🏼‍❤️‍👨🏽 👩🏼‍❤️‍👨🏾 👩🏼‍❤️‍👨🏿 👩🏽‍❤️‍👨🏻 👩🏽‍❤️‍👨🏼 👩🏽‍❤️‍👨🏽 👩🏽‍❤️‍👨🏾 👩🏽‍❤️‍👨🏿 👩🏾‍❤️‍👨🏻 👩🏾‍❤️‍👨🏼 👩🏾‍❤️‍👨🏽 👩🏾‍❤️‍👨🏾 👩🏾‍❤️‍👨🏿 👩🏿‍❤️‍👨🏻 👩🏿‍❤️‍👨🏼 👩🏿‍❤️‍👨🏽 👩🏿‍❤️‍👨🏾 👩🏿‍❤️‍👨🏿 👨‍❤️‍👨 👨🏻‍❤️‍👨🏻 👨🏻‍❤️‍👨🏼 👨🏻‍❤️‍👨🏽 👨🏻‍❤️‍👨🏾 👨🏻‍❤️‍👨🏿 👨🏼‍❤️‍👨🏻 👨🏼‍❤️‍👨🏼 👨🏼‍❤️‍👨🏽 👨🏼‍❤️‍👨🏾 👨🏼‍❤️‍👨🏿 👨🏽‍❤️‍👨🏻 👨🏽‍❤️‍👨🏼 👨🏽‍❤️‍👨🏽 👨🏽‍❤️‍👨🏾 👨🏽‍❤️‍👨🏿 👨🏾‍❤️‍👨🏻 👨🏾‍❤️‍👨🏼 👨🏾‍❤️‍👨🏽 👨🏾‍❤️‍👨🏾 👨🏾‍❤️‍👨🏿 👨🏿‍❤️‍👨🏻 👨🏿‍❤️‍👨🏼 👨🏿‍❤️‍👨🏽 👨🏿‍❤️‍👨🏾 👨🏿‍❤️‍👨🏿 👩‍❤️‍👩 👩🏻‍❤️‍👩🏻 👩🏻‍❤️‍👩🏼 👩🏻‍❤️‍👩🏽 👩🏻‍❤️‍👩🏾 👩🏻‍❤️‍👩🏿 👩🏼‍❤️‍👩🏻 👩🏼‍❤️‍👩🏼 👩🏼‍❤️‍👩🏽 👩🏼‍❤️‍👩🏾 👩🏼‍❤️‍👩🏿 👩🏽‍❤️‍👩🏻 👩🏽‍❤️‍👩🏼 👩🏽‍❤️‍👩🏽 👩🏽‍❤️‍👩🏾 👩🏽‍❤️‍👩🏿 👩🏾‍❤️‍👩🏻 👩🏾‍❤️‍👩🏼 👩🏾‍❤️‍👩🏽 👩🏾‍❤️‍👩🏾 👩🏾‍❤️‍👩🏿 👩🏿‍❤️‍👩🏻 👩🏿‍❤️‍👩🏼 👩🏿‍❤️‍👩🏽 👩🏿‍❤️‍👩🏾 👩🏿‍❤️‍👩🏿 👪 👨‍👩‍👦 👨‍👩‍👧 👨‍👩‍👧‍👦 👨‍👩‍👦‍👦 👨‍👩‍👧‍👧 👨‍👨‍👦 👨‍👨‍👧 👨‍👨‍👧‍👦 👨‍👨‍👦‍👦 👨‍👨‍👧‍👧 👩‍👩‍👦 👩‍👩‍👧 👩‍👩‍👧‍👦 👩‍👩‍👦‍👦 👩‍👩‍👧‍👧 👨‍👦 👨‍👦‍👦 👨‍👧 👨‍👧‍👦 👨‍👧‍👧 👩‍👦 👩‍👦‍👦 👩‍👧 👩‍👧‍👦 👩‍👧‍👧 🐕‍🦺 🐈‍⬛ 🐻‍❄️ 🐦‍⬛ 🏳️‍🌈 🏳️‍⚧️ 🏴‍☠️ </p>

<!--
Full reference: https://unicode.org/Public/emoji/15.0/
ZJW: zwidje https://unicode.org/emoji/charts/emoji-zwj-sequences.html
-->
`,title:"Emoji Composition",level:2,content:`## Emoji Composition

<p style="font-size: 65%; line-height: 1rem;"> 😶‍🌫️ 😮‍💨 😵‍💫 ❤️‍🔥 ❤️‍🩹 👁️‍🗨️ 🫱🏻‍🫲🏼 🫱🏻‍🫲🏽 🫱🏻‍🫲🏾 🫱🏻‍🫲🏿 🫱🏼‍🫲🏻 🫱🏼‍🫲🏽 🫱🏼‍🫲🏾 🫱🏼‍🫲🏿 🫱🏽‍🫲🏻 🫱🏽‍🫲🏼 🫱🏽‍🫲🏾 🫱🏽‍🫲🏿 🫱🏾‍🫲🏻 🫱🏾‍🫲🏼 🫱🏾‍🫲🏽 🫱🏾‍🫲🏿 🫱🏿‍🫲🏻 🫱🏿‍🫲🏼 🫱🏿‍🫲🏽 🫱🏿‍🫲🏾 🧔‍♂️ 🧔🏻‍♂️ 🧔🏼‍♂️ 🧔🏽‍♂️ 🧔🏾‍♂️ 🧔🏿‍♂️ 🧔‍♀️ 🧔🏻‍♀️ 🧔🏼‍♀️ 🧔🏽‍♀️ 🧔🏾‍♀️ 🧔🏿‍♀️ 👨‍🦰 👨🏻‍🦰 👨🏼‍🦰 👨🏽‍🦰 👨🏾‍🦰 👨🏿‍🦰 👨‍🦱 👨🏻‍🦱 👨🏼‍🦱 👨🏽‍🦱 👨🏾‍🦱 👨🏿‍🦱 👨‍🦳 👨🏻‍🦳 👨🏼‍🦳 👨🏽‍🦳 👨🏾‍🦳 👨🏿‍🦳 👨‍🦲 👨🏻‍🦲 👨🏼‍🦲 👨🏽‍🦲 👨🏾‍🦲 👨🏿‍🦲 👩‍🦰 👩🏻‍🦰 👩🏼‍🦰 👩🏽‍🦰 👩🏾‍🦰 👩🏿‍🦰 🧑‍🦰 🧑🏻‍🦰 🧑🏼‍🦰 🧑🏽‍🦰 🧑🏾‍🦰 🧑🏿‍🦰 👩‍🦱 👩🏻‍🦱 👩🏼‍🦱 👩🏽‍🦱 👩🏾‍🦱 👩🏿‍🦱 🧑‍🦱 🧑🏻‍🦱 🧑🏼‍🦱 🧑🏽‍🦱 🧑🏾‍🦱 🧑🏿‍🦱 👩‍🦳 👩🏻‍🦳 👩🏼‍🦳 👩🏽‍🦳 👩🏾‍🦳 👩🏿‍🦳 🧑‍🦳 🧑🏻‍🦳 🧑🏼‍🦳 🧑🏽‍🦳 🧑🏾‍🦳 🧑🏿‍🦳 👩‍🦲 👩🏻‍🦲 👩🏼‍🦲 👩🏽‍🦲 👩🏾‍🦲 👩🏿‍🦲 🧑‍🦲 🧑🏻‍🦲 🧑🏼‍🦲 🧑🏽‍🦲 🧑🏾‍🦲 🧑🏿‍🦲 👱‍♀️ 👱🏻‍♀️ 👱🏼‍♀️ 👱🏽‍♀️ 👱🏾‍♀️ 👱🏿‍♀️ 👱‍♂️ 👱🏻‍♂️ 👱🏼‍♂️ 👱🏽‍♂️ 👱🏾‍♂️ 👱🏿‍♂️ 🙍‍♂️ 🙍🏻‍♂️ 🙍🏼‍♂️ 🙍🏽‍♂️ 🙍🏾‍♂️ 🙍🏿‍♂️ 🙍‍♀️ 🙍🏻‍♀️ 🙍🏼‍♀️ 🙍🏽‍♀️ 🙍🏾‍♀️ 🙍🏿‍♀️ 🙎‍♂️ 🙎🏻‍♂️ 🙎🏼‍♂️ 🙎🏽‍♂️ 🙎🏾‍♂️ 🙎🏿‍♂️ 🙎‍♀️ 🙎🏻‍♀️ 🙎🏼‍♀️ 🙎🏽‍♀️ 🙎🏾‍♀️ 🙎🏿‍♀️ 🙅‍♂️ 🙅🏻‍♂️ 🙅🏼‍♂️ 🙅🏽‍♂️ 🙅🏾‍♂️ 🙅🏿‍♂️ 🙅‍♀️ 🙅🏻‍♀️ 🙅🏼‍♀️ 🙅🏽‍♀️ 🙅🏾‍♀️ 🙅🏿‍♀️ 🙆‍♂️ 🙆🏻‍♂️ 🙆🏼‍♂️ 🙆🏽‍♂️ 🙆🏾‍♂️ 🙆🏿‍♂️ 🙆‍♀️ 🙆🏻‍♀️ 🙆🏼‍♀️ 🙆🏽‍♀️ 🙆🏾‍♀️ 🙆🏿‍♀️ 💁‍♂️ 💁🏻‍♂️ 💁🏼‍♂️ 💁🏽‍♂️ 💁🏾‍♂️ 💁🏿‍♂️ 💁‍♀️ 💁🏻‍♀️ 💁🏼‍♀️ 💁🏽‍♀️ 💁🏾‍♀️ 💁🏿‍♀️ 🙋‍♂️ 🙋🏻‍♂️ 🙋🏼‍♂️ 🙋🏽‍♂️ 🙋🏾‍♂️ 🙋🏿‍♂️ 🙋‍♀️ 🙋🏻‍♀️ 🙋🏼‍♀️ 🙋🏽‍♀️ 🙋🏾‍♀️ 🙋🏿‍♀️ 🧏‍♂️ 🧏🏻‍♂️ 🧏🏼‍♂️ 🧏🏽‍♂️ 🧏🏾‍♂️ 🧏🏿‍♂️ 🧏‍♀️ 🧏🏻‍♀️ 🧏🏼‍♀️ 🧏🏽‍♀️ 🧏🏾‍♀️ 🧏🏿‍♀️ 🙇‍♂️ 🙇🏻‍♂️ 🙇🏼‍♂️ 🙇🏽‍♂️ 🙇🏾‍♂️ 🙇🏿‍♂️ 🙇‍♀️ 🙇🏻‍♀️ 🙇🏼‍♀️ 🙇🏽‍♀️ 🙇🏾‍♀️ 🙇🏿‍♀️ 🤦‍♂️ 🤦🏻‍♂️ 🤦🏼‍♂️ 🤦🏽‍♂️ 🤦🏾‍♂️ 🤦🏿‍♂️ 🤦‍♀️ 🤦🏻‍♀️ 🤦🏼‍♀️ 🤦🏽‍♀️ 🤦🏾‍♀️ 🤦🏿‍♀️ 🤷‍♂️ 🤷🏻‍♂️ 🤷🏼‍♂️ 🤷🏽‍♂️ 🤷🏾‍♂️ 🤷🏿‍♂️ 🤷‍♀️ 🤷🏻‍♀️ 🤷🏼‍♀️ 🤷🏽‍♀️ 🤷🏾‍♀️ 🤷🏿‍♀️ 🧑‍⚕️ 🧑🏻‍⚕️ 🧑🏼‍⚕️ 🧑🏽‍⚕️ 🧑🏾‍⚕️ 🧑🏿‍⚕️ 👨‍⚕️ 👨🏻‍⚕️ 👨🏼‍⚕️ 👨🏽‍⚕️ 👨🏾‍⚕️ 👨🏿‍⚕️ 👩‍⚕️ 👩🏻‍⚕️ 👩🏼‍⚕️ 👩🏽‍⚕️ 👩🏾‍⚕️ 👩🏿‍⚕️ 🧑‍🎓 🧑🏻‍🎓 🧑🏼‍🎓 🧑🏽‍🎓 🧑🏾‍🎓 🧑🏿‍🎓 👨‍🎓 👨🏻‍🎓 👨🏼‍🎓 👨🏽‍🎓 👨🏾‍🎓 👨🏿‍🎓 👩‍🎓 👩🏻‍🎓 👩🏼‍🎓 👩🏽‍🎓 👩🏾‍🎓 👩🏿‍🎓 🧑‍🏫 🧑🏻‍🏫 🧑🏼‍🏫 🧑🏽‍🏫 🧑🏾‍🏫 🧑🏿‍🏫 👨‍🏫 👨🏻‍🏫 👨🏼‍🏫 👨🏽‍🏫 👨🏾‍🏫 👨🏿‍🏫 👩‍🏫 👩🏻‍🏫 👩🏼‍🏫 👩🏽‍🏫 👩🏾‍🏫 👩🏿‍🏫 🧑‍⚖️ 🧑🏻‍⚖️ 🧑🏼‍⚖️ 🧑🏽‍⚖️ 🧑🏾‍⚖️ 🧑🏿‍⚖️ 👨‍⚖️ 👨🏻‍⚖️ 👨🏼‍⚖️ 👨🏽‍⚖️ 👨🏾‍⚖️ 👨🏿‍⚖️ 👩‍⚖️ 👩🏻‍⚖️ 👩🏼‍⚖️ 👩🏽‍⚖️ 👩🏾‍⚖️ 👩🏿‍⚖️ 🧑‍🌾 🧑🏻‍🌾 🧑🏼‍🌾 🧑🏽‍🌾 🧑🏾‍🌾 🧑🏿‍🌾 👨‍🌾 👨🏻‍🌾 👨🏼‍🌾 👨🏽‍🌾 👨🏾‍🌾 👨🏿‍🌾 👩‍🌾 👩🏻‍🌾 👩🏼‍🌾 👩🏽‍🌾 👩🏾‍🌾 👩🏿‍🌾 🧑‍🍳 🧑🏻‍🍳 🧑🏼‍🍳 🧑🏽‍🍳 🧑🏾‍🍳 🧑🏿‍🍳 👨‍🍳 👨🏻‍🍳 👨🏼‍🍳 👨🏽‍🍳 👨🏾‍🍳 👨🏿‍🍳 👩‍🍳 👩🏻‍🍳 👩🏼‍🍳 👩🏽‍🍳 👩🏾‍🍳 👩🏿‍🍳 🧑‍🔧 🧑🏻‍🔧 🧑🏼‍🔧 🧑🏽‍🔧 🧑🏾‍🔧 🧑🏿‍🔧 👨‍🔧 👨🏻‍🔧 👨🏼‍🔧 👨🏽‍🔧 👨🏾‍🔧 👨🏿‍🔧 👩‍🔧 👩🏻‍🔧 👩🏼‍🔧 👩🏽‍🔧 👩🏾‍🔧 👩🏿‍🔧 🧑‍🏭 🧑🏻‍🏭 🧑🏼‍🏭 🧑🏽‍🏭 🧑🏾‍🏭 🧑🏿‍🏭 👨‍🏭 👨🏻‍🏭 👨🏼‍🏭 👨🏽‍🏭 👨🏾‍🏭 👨🏿‍🏭 👩‍🏭 👩🏻‍🏭 👩🏼‍🏭 👩🏽‍🏭 👩🏾‍🏭 👩🏿‍🏭 🧑‍💼 🧑🏻‍💼 🧑🏼‍💼 🧑🏽‍💼 🧑🏾‍💼 🧑🏿‍💼 👨‍💼 👨🏻‍💼 👨🏼‍💼 👨🏽‍💼 👨🏾‍💼 👨🏿‍💼 👩‍💼 👩🏻‍💼 👩🏼‍💼 👩🏽‍💼 👩🏾‍💼 👩🏿‍💼 🧑‍🔬 🧑🏻‍🔬 🧑🏼‍🔬 🧑🏽‍🔬 🧑🏾‍🔬 🧑🏿‍🔬 👨‍🔬 👨🏻‍🔬 👨🏼‍🔬 👨🏽‍🔬 👨🏾‍🔬 👨🏿‍🔬 👩‍🔬 👩🏻‍🔬 👩🏼‍🔬 👩🏽‍🔬 👩🏾‍🔬 👩🏿‍🔬 🧑‍💻 🧑🏻‍💻 🧑🏼‍💻 🧑🏽‍💻 🧑🏾‍💻 🧑🏿‍💻 👨‍💻 👨🏻‍💻 👨🏼‍💻 👨🏽‍💻 👨🏾‍💻 👨🏿‍💻 👩‍💻 👩🏻‍💻 👩🏼‍💻 👩🏽‍💻 👩🏾‍💻 👩🏿‍💻 🧑‍🎤 🧑🏻‍🎤 🧑🏼‍🎤 🧑🏽‍🎤 🧑🏾‍🎤 🧑🏿‍🎤 👨‍🎤 👨🏻‍🎤 👨🏼‍🎤 👨🏽‍🎤 👨🏾‍🎤 👨🏿‍🎤 👩‍🎤 👩🏻‍🎤 👩🏼‍🎤 👩🏽‍🎤 👩🏾‍🎤 👩🏿‍🎤 🧑‍🎨 🧑🏻‍🎨 🧑🏼‍🎨 🧑🏽‍🎨 🧑🏾‍🎨 🧑🏿‍🎨 👨‍🎨 👨🏻‍🎨 👨🏼‍🎨 👨🏽‍🎨 👨🏾‍🎨 👨🏿‍🎨 👩‍🎨 👩🏻‍🎨 👩🏼‍🎨 👩🏽‍🎨 👩🏾‍🎨 👩🏿‍🎨 🧑‍✈️ 🧑🏻‍✈️ 🧑🏼‍✈️ 🧑🏽‍✈️ 🧑🏾‍✈️ 🧑🏿‍✈️ 👨‍✈️ 👨🏻‍✈️ 👨🏼‍✈️ 👨🏽‍✈️ 👨🏾‍✈️ 👨🏿‍✈️ 👩‍✈️ 👩🏻‍✈️ 👩🏼‍✈️ 👩🏽‍✈️ 👩🏾‍✈️ 👩🏿‍✈️ 🧑‍🚀 🧑🏻‍🚀 🧑🏼‍🚀 🧑🏽‍🚀 🧑🏾‍🚀 🧑🏿‍🚀 👨‍🚀 👨🏻‍🚀 👨🏼‍🚀 👨🏽‍🚀 👨🏾‍🚀 👨🏿‍🚀 👩‍🚀 👩🏻‍🚀 👩🏼‍🚀 👩🏽‍🚀 👩🏾‍🚀 👩🏿‍🚀 🧑‍🚒 🧑🏻‍🚒 🧑🏼‍🚒 🧑🏽‍🚒 🧑🏾‍🚒 🧑🏿‍🚒 👨‍🚒 👨🏻‍🚒 👨🏼‍🚒 👨🏽‍🚒 👨🏾‍🚒 👨🏿‍🚒 👩‍🚒 👩🏻‍🚒 👩🏼‍🚒 👩🏽‍🚒 👩🏾‍🚒 👩🏿‍🚒 👮‍♂️ 👮🏻‍♂️ 👮🏼‍♂️ 👮🏽‍♂️ 👮🏾‍♂️ 👮🏿‍♂️ 👮‍♀️ 👮🏻‍♀️ 👮🏼‍♀️ 👮🏽‍♀️ 👮🏾‍♀️ 👮🏿‍♀️ 🕵️‍♂️ 🕵🏻‍♂️ 🕵🏼‍♂️ 🕵🏽‍♂️ 🕵🏾‍♂️ 🕵🏿‍♂️ 🕵️‍♀️ 🕵🏻‍♀️ 🕵🏼‍♀️ 🕵🏽‍♀️ 🕵🏾‍♀️ 🕵🏿‍♀️ 💂‍♂️ 💂🏻‍♂️ 💂🏼‍♂️ 💂🏽‍♂️ 💂🏾‍♂️ 💂🏿‍♂️ 💂‍♀️ 💂🏻‍♀️ 💂🏼‍♀️ 💂🏽‍♀️ 💂🏾‍♀️ 💂🏿‍♀️ 👷‍♂️ 👷🏻‍♂️ 👷🏼‍♂️ 👷🏽‍♂️ 👷🏾‍♂️ 👷🏿‍♂️ 👷‍♀️ 👷🏻‍♀️ 👷🏼‍♀️ 👷🏽‍♀️ 👷🏾‍♀️ 👷🏿‍♀️ 👳‍♂️ 👳🏻‍♂️ 👳🏼‍♂️ 👳🏽‍♂️ 👳🏾‍♂️ 👳🏿‍♂️ 👳‍♀️ 👳🏻‍♀️ 👳🏼‍♀️ 👳🏽‍♀️ 👳🏾‍♀️ 👳🏿‍♀️ 🤵‍♂️ 🤵🏻‍♂️ 🤵🏼‍♂️ 🤵🏽‍♂️ 🤵🏾‍♂️ 🤵🏿‍♂️ 🤵‍♀️ 🤵🏻‍♀️ 🤵🏼‍♀️ 🤵🏽‍♀️ 🤵🏾‍♀️ 🤵🏿‍♀️ 👰‍♂️ 👰🏻‍♂️ 👰🏼‍♂️ 👰🏽‍♂️ 👰🏾‍♂️ 👰🏿‍♂️ 👰‍♀️ 👰🏻‍♀️ 👰🏼‍♀️ 👰🏽‍♀️ 👰🏾‍♀️ 👰🏿‍♀️ 👩‍🍼 👩🏻‍🍼 👩🏼‍🍼 👩🏽‍🍼 👩🏾‍🍼 👩🏿‍🍼 👨‍🍼 👨🏻‍🍼 👨🏼‍🍼 👨🏽‍🍼 👨🏾‍🍼 👨🏿‍🍼 🧑‍🍼 🧑🏻‍🍼 🧑🏼‍🍼 🧑🏽‍🍼 🧑🏾‍🍼 🧑🏿‍🍼 🧑‍🎄 🧑🏻‍🎄 🧑🏼‍🎄 🧑🏽‍🎄 🧑🏾‍🎄 🧑🏿‍🎄 🦸‍♂️ 🦸🏻‍♂️ 🦸🏼‍♂️ 🦸🏽‍♂️ 🦸🏾‍♂️ 🦸🏿‍♂️ 🦸‍♀️ 🦸🏻‍♀️ 🦸🏼‍♀️ 🦸🏽‍♀️ 🦸🏾‍♀️ 🦸🏿‍♀️ 🦹‍♂️ 🦹🏻‍♂️ 🦹🏼‍♂️ 🦹🏽‍♂️ 🦹🏾‍♂️ 🦹🏿‍♂️ 🦹‍♀️ 🦹🏻‍♀️ 🦹🏼‍♀️ 🦹🏽‍♀️ 🦹🏾‍♀️ 🦹🏿‍♀️ 🧙‍♂️ 🧙🏻‍♂️ 🧙🏼‍♂️ 🧙🏽‍♂️ 🧙🏾‍♂️ 🧙🏿‍♂️ 🧙‍♀️ 🧙🏻‍♀️ 🧙🏼‍♀️ 🧙🏽‍♀️ 🧙🏾‍♀️ 🧙🏿‍♀️ 🧚‍♂️ 🧚🏻‍♂️ 🧚🏼‍♂️ 🧚🏽‍♂️ 🧚🏾‍♂️ 🧚🏿‍♂️ 🧚‍♀️ 🧚🏻‍♀️ 🧚🏼‍♀️ 🧚🏽‍♀️ 🧚🏾‍♀️ 🧚🏿‍♀️ 🧛‍♂️ 🧛🏻‍♂️ 🧛🏼‍♂️ 🧛🏽‍♂️ 🧛🏾‍♂️ 🧛🏿‍♂️ 🧛‍♀️ 🧛🏻‍♀️ 🧛🏼‍♀️ 🧛🏽‍♀️ 🧛🏾‍♀️ 🧛🏿‍♀️ 🧜‍♂️ 🧜🏻‍♂️ 🧜🏼‍♂️ 🧜🏽‍♂️ 🧜🏾‍♂️ 🧜🏿‍♂️ 🧜‍♀️ 🧜🏻‍♀️ 🧜🏼‍♀️ 🧜🏽‍♀️ 🧜🏾‍♀️ 🧜🏿‍♀️ 🧝‍♂️ 🧝🏻‍♂️ 🧝🏼‍♂️ 🧝🏽‍♂️ 🧝🏾‍♂️ 🧝🏿‍♂️ 🧝‍♀️ 🧝🏻‍♀️ 🧝🏼‍♀️ 🧝🏽‍♀️ 🧝🏾‍♀️ 🧝🏿‍♀️ 🧞‍♂️ 🧞‍♀️ 🧟‍♂️ 🧟‍♀️ 💆‍♂️ 💆🏻‍♂️ 💆🏼‍♂️ 💆🏽‍♂️ 💆🏾‍♂️ 💆🏿‍♂️ 💆‍♀️ 💆🏻‍♀️ 💆🏼‍♀️ 💆🏽‍♀️ 💆🏾‍♀️ 💆🏿‍♀️ 💇‍♂️ 💇🏻‍♂️ 💇🏼‍♂️ 💇🏽‍♂️ 💇🏾‍♂️ 💇🏿‍♂️ 💇‍♀️ 💇🏻‍♀️ 💇🏼‍♀️ 💇🏽‍♀️ 💇🏾‍♀️ 💇🏿‍♀️ 🚶‍♂️ 🚶🏻‍♂️ 🚶🏼‍♂️ 🚶🏽‍♂️ 🚶🏾‍♂️ 🚶🏿‍♂️ 🚶‍♀️ 🚶🏻‍♀️ 🚶🏼‍♀️ 🚶🏽‍♀️ 🚶🏾‍♀️ 🚶🏿‍♀️ 🧍‍♂️ 🧍🏻‍♂️ 🧍🏼‍♂️ 🧍🏽‍♂️ 🧍🏾‍♂️ 🧍🏿‍♂️ 🧍‍♀️ 🧍🏻‍♀️ 🧍🏼‍♀️ 🧍🏽‍♀️ 🧍🏾‍♀️ 🧍🏿‍♀️ 🧎‍♂️ 🧎🏻‍♂️ 🧎🏼‍♂️ 🧎🏽‍♂️ 🧎🏾‍♂️ 🧎🏿‍♂️ 🧎‍♀️ 🧎🏻‍♀️ 🧎🏼‍♀️ 🧎🏽‍♀️ 🧎🏾‍♀️ 🧎🏿‍♀️ 🧑‍🦯 🧑🏻‍🦯 🧑🏼‍🦯 🧑🏽‍🦯 🧑🏾‍🦯 🧑🏿‍🦯 👨‍🦯 👨🏻‍🦯 👨🏼‍🦯 👨🏽‍🦯 👨🏾‍🦯 👨🏿‍🦯 👩‍🦯 👩🏻‍🦯 👩🏼‍🦯 👩🏽‍🦯 👩🏾‍🦯 👩🏿‍🦯 🧑‍🦼 🧑🏻‍🦼 🧑🏼‍🦼 🧑🏽‍🦼 🧑🏾‍🦼 🧑🏿‍🦼 👨‍🦼 👨🏻‍🦼 👨🏼‍🦼 👨🏽‍🦼 👨🏾‍🦼 👨🏿‍🦼 👩‍🦼 👩🏻‍🦼 👩🏼‍🦼 👩🏽‍🦼 👩🏾‍🦼 👩🏿‍🦼 🧑‍🦽 🧑🏻‍🦽 🧑🏼‍🦽 🧑🏽‍🦽 🧑🏾‍🦽 🧑🏿‍🦽 👨‍🦽 👨🏻‍🦽 👨🏼‍🦽 👨🏽‍🦽 👨🏾‍🦽 👨🏿‍🦽 👩‍🦽 👩🏻‍🦽 👩🏼‍🦽 👩🏽‍🦽 👩🏾‍🦽 👩🏿‍🦽 🏃‍♂️ 🏃🏻‍♂️ 🏃🏼‍♂️ 🏃🏽‍♂️ 🏃🏾‍♂️ 🏃🏿‍♂️ 🏃‍♀️ 🏃🏻‍♀️ 🏃🏼‍♀️ 🏃🏽‍♀️ 🏃🏾‍♀️ 🏃🏿‍♀️ 👯‍♂️ 👯‍♀️ 🧖‍♂️ 🧖🏻‍♂️ 🧖🏼‍♂️ 🧖🏽‍♂️ 🧖🏾‍♂️ 🧖🏿‍♂️ 🧖‍♀️ 🧖🏻‍♀️ 🧖🏼‍♀️ 🧖🏽‍♀️ 🧖🏾‍♀️ 🧖🏿‍♀️ 🧗‍♂️ 🧗🏻‍♂️ 🧗🏼‍♂️ 🧗🏽‍♂️ 🧗🏾‍♂️ 🧗🏿‍♂️ 🧗‍♀️ 🧗🏻‍♀️ 🧗🏼‍♀️ 🧗🏽‍♀️ 🧗🏾‍♀️ 🧗🏿‍♀️ 🏌️‍♂️ 🏌🏻‍♂️ 🏌🏼‍♂️ 🏌🏽‍♂️ 🏌🏾‍♂️ 🏌🏿‍♂️ 🏌️‍♀️ 🏌🏻‍♀️ 🏌🏼‍♀️ 🏌🏽‍♀️ 🏌🏾‍♀️ 🏌🏿‍♀️ 🏄‍♂️ 🏄🏻‍♂️ 🏄🏼‍♂️ 🏄🏽‍♂️ 🏄🏾‍♂️ 🏄🏿‍♂️ 🏄‍♀️ 🏄🏻‍♀️ 🏄🏼‍♀️ 🏄🏽‍♀️ 🏄🏾‍♀️ 🏄🏿‍♀️ 🚣‍♂️ 🚣🏻‍♂️ 🚣🏼‍♂️ 🚣🏽‍♂️ 🚣🏾‍♂️ 🚣🏿‍♂️ 🚣‍♀️ 🚣🏻‍♀️ 🚣🏼‍♀️ 🚣🏽‍♀️ 🚣🏾‍♀️ 🚣🏿‍♀️ 🏊‍♂️ 🏊🏻‍♂️ 🏊🏼‍♂️ 🏊🏽‍♂️ 🏊🏾‍♂️ 🏊🏿‍♂️ 🏊‍♀️ 🏊🏻‍♀️ 🏊🏼‍♀️ 🏊🏽‍♀️ 🏊🏾‍♀️ 🏊🏿‍♀️ ⛹️‍♂️ ⛹🏻‍♂️ ⛹🏼‍♂️ ⛹🏽‍♂️ ⛹🏾‍♂️ ⛹🏿‍♂️ ⛹️‍♀️ ⛹🏻‍♀️ ⛹🏼‍♀️ ⛹🏽‍♀️ ⛹🏾‍♀️ ⛹🏿‍♀️ 🏋️‍♂️ 🏋🏻‍♂️ 🏋🏼‍♂️ 🏋🏽‍♂️ 🏋🏾‍♂️ 🏋🏿‍♂️ 🏋️‍♀️ 🏋🏻‍♀️ 🏋🏼‍♀️ 🏋🏽‍♀️ 🏋🏾‍♀️ 🏋🏿‍♀️ 🚴‍♂️ 🚴🏻‍♂️ 🚴🏼‍♂️ 🚴🏽‍♂️ 🚴🏾‍♂️ 🚴🏿‍♂️ 🚴‍♀️ 🚴🏻‍♀️ 🚴🏼‍♀️ 🚴🏽‍♀️ 🚴🏾‍♀️ 🚴🏿‍♀️ 🚵‍♂️ 🚵🏻‍♂️ 🚵🏼‍♂️ 🚵🏽‍♂️ 🚵🏾‍♂️ 🚵🏿‍♂️ 🚵‍♀️ 🚵🏻‍♀️ 🚵🏼‍♀️ 🚵🏽‍♀️ 🚵🏾‍♀️ 🚵🏿‍♀️ 🤸‍♂️ 🤸🏻‍♂️ 🤸🏼‍♂️ 🤸🏽‍♂️ 🤸🏾‍♂️ 🤸🏿‍♂️ 🤸‍♀️ 🤸🏻‍♀️ 🤸🏼‍♀️ 🤸🏽‍♀️ 🤸🏾‍♀️ 🤸🏿‍♀️ 🤼‍♂️ 🤼‍♀️ 🤽‍♂️ 🤽🏻‍♂️ 🤽🏼‍♂️ 🤽🏽‍♂️ 🤽🏾‍♂️ 🤽🏿‍♂️ 🤽‍♀️ 🤽🏻‍♀️ 🤽🏼‍♀️ 🤽🏽‍♀️ 🤽🏾‍♀️ 🤽🏿‍♀️ 🤾‍♂️ 🤾🏻‍♂️ 🤾🏼‍♂️ 🤾🏽‍♂️ 🤾🏾‍♂️ 🤾🏿‍♂️ 🤾‍♀️ 🤾🏻‍♀️ 🤾🏼‍♀️ 🤾🏽‍♀️ 🤾🏾‍♀️ 🤾🏿‍♀️ 🤹‍♂️ 🤹🏻‍♂️ 🤹🏼‍♂️ 🤹🏽‍♂️ 🤹🏾‍♂️ 🤹🏿‍♂️ 🤹‍♀️ 🤹🏻‍♀️ 🤹🏼‍♀️ 🤹🏽‍♀️ 🤹🏾‍♀️ 🤹🏿‍♀️ 🧘‍♂️ 🧘🏻‍♂️ 🧘🏼‍♂️ 🧘🏽‍♂️ 🧘🏾‍♂️ 🧘🏿‍♂️ 🧘‍♀️ 🧘🏻‍♀️ 🧘🏼‍♀️ 🧘🏽‍♀️ 🧘🏾‍♀️ 🧘🏿‍♀️ 🧑‍🤝‍🧑 🧑🏻‍🤝‍🧑🏻 🧑🏻‍🤝‍🧑🏼 🧑🏻‍🤝‍🧑🏽 🧑🏻‍🤝‍🧑🏾 🧑🏻‍🤝‍🧑🏿 🧑🏼‍🤝‍🧑🏻 🧑🏼‍🤝‍🧑🏼 🧑🏼‍🤝‍🧑🏽 🧑🏼‍🤝‍🧑🏾 🧑🏼‍🤝‍🧑🏿 🧑🏽‍🤝‍🧑🏻 🧑🏽‍🤝‍🧑🏼 🧑🏽‍🤝‍🧑🏽 🧑🏽‍🤝‍🧑🏾 🧑🏽‍🤝‍🧑🏿 🧑🏾‍🤝‍🧑🏻 🧑🏾‍🤝‍🧑🏼 🧑🏾‍🤝‍🧑🏽 🧑🏾‍🤝‍🧑🏾 🧑🏾‍🤝‍🧑🏿 🧑🏿‍🤝‍🧑🏻 🧑🏿‍🤝‍🧑🏼 🧑🏿‍🤝‍🧑🏽 🧑🏿‍🤝‍🧑🏾 🧑🏿‍🤝‍🧑🏿 👩🏻‍🤝‍👩🏼 👩🏻‍🤝‍👩🏽 👩🏻‍🤝‍👩🏾 👩🏻‍🤝‍👩🏿 👩🏼‍🤝‍👩🏻 👩🏼‍🤝‍👩🏽 👩🏼‍🤝‍👩🏾 👩🏼‍🤝‍👩🏿 👩🏽‍🤝‍👩🏻 👩🏽‍🤝‍👩🏼 👩🏽‍🤝‍👩🏾 👩🏽‍🤝‍👩🏿 👩🏾‍🤝‍👩🏻 👩🏾‍🤝‍👩🏼 👩🏾‍🤝‍👩🏽 👩🏾‍🤝‍👩🏿 👩🏿‍🤝‍👩🏻 👩🏿‍🤝‍👩🏼 👩🏿‍🤝‍👩🏽 👩🏿‍🤝‍👩🏾 👩🏻‍🤝‍👨🏼 👩🏻‍🤝‍👨🏽 👩🏻‍🤝‍👨🏾 👩🏻‍🤝‍👨🏿 👩🏼‍🤝‍👨🏻 👩🏼‍🤝‍👨🏽 👩🏼‍🤝‍👨🏾 👩🏼‍🤝‍👨🏿 👩🏽‍🤝‍👨🏻 👩🏽‍🤝‍👨🏼 👩🏽‍🤝‍👨🏾 👩🏽‍🤝‍👨🏿 👩🏾‍🤝‍👨🏻 👩🏾‍🤝‍👨🏼 👩🏾‍🤝‍👨🏽 👩🏾‍🤝‍👨🏿 👩🏿‍🤝‍👨🏻 👩🏿‍🤝‍👨🏼 👩🏿‍🤝‍👨🏽 👩🏿‍🤝‍👨🏾 👨🏻‍🤝‍👨🏼 👨🏻‍🤝‍👨🏽 👨🏻‍🤝‍👨🏾 👨🏻‍🤝‍👨🏿 👨🏼‍🤝‍👨🏻 👨🏼‍🤝‍👨🏽 👨🏼‍🤝‍👨🏾 👨🏼‍🤝‍👨🏿 👨🏽‍🤝‍👨🏻 👨🏽‍🤝‍👨🏼 👨🏽‍🤝‍👨🏾 👨🏽‍🤝‍👨🏿 👨🏾‍🤝‍👨🏻 👨🏾‍🤝‍👨🏼 👨🏾‍🤝‍👨🏽 👨🏾‍🤝‍👨🏿 👨🏿‍🤝‍👨🏻 👨🏿‍🤝‍👨🏼 👨🏿‍🤝‍👨🏽 👨🏿‍🤝‍👨🏾 💏 🧑🏻‍❤️‍💋‍🧑🏼 🧑🏻‍❤️‍💋‍🧑🏽 🧑🏻‍❤️‍💋‍🧑🏾 🧑🏻‍❤️‍💋‍🧑🏿 🧑🏼‍❤️‍💋‍🧑🏻 🧑🏼‍❤️‍💋‍🧑🏽 🧑🏼‍❤️‍💋‍🧑🏾 🧑🏼‍❤️‍💋‍🧑🏿 🧑🏽‍❤️‍💋‍🧑🏻 🧑🏽‍❤️‍💋‍🧑🏼 🧑🏽‍❤️‍💋‍🧑🏾 🧑🏽‍❤️‍💋‍🧑🏿 🧑🏾‍❤️‍💋‍🧑🏻 🧑🏾‍❤️‍💋‍🧑🏼 🧑🏾‍❤️‍💋‍🧑🏽 🧑🏾‍❤️‍💋‍🧑🏿 🧑🏿‍❤️‍💋‍🧑🏻 🧑🏿‍❤️‍💋‍🧑🏼 🧑🏿‍❤️‍💋‍🧑🏽 🧑🏿‍❤️‍💋‍🧑🏾 👩‍❤️‍💋‍👨 👩🏻‍❤️‍💋‍👨🏻 👩🏻‍❤️‍💋‍👨🏼 👩🏻‍❤️‍💋‍👨🏽 👩🏻‍❤️‍💋‍👨🏾 👩🏻‍❤️‍💋‍👨🏿 👩🏼‍❤️‍💋‍👨🏻 👩🏼‍❤️‍💋‍👨🏼 👩🏼‍❤️‍💋‍👨🏽 👩🏼‍❤️‍💋‍👨🏾 👩🏼‍❤️‍💋‍👨🏿 👩🏽‍❤️‍💋‍👨🏻 👩🏽‍❤️‍💋‍👨🏼 👩🏽‍❤️‍💋‍👨🏽 👩🏽‍❤️‍💋‍👨🏾 👩🏽‍❤️‍💋‍👨🏿 👩🏾‍❤️‍💋‍👨🏻 👩🏾‍❤️‍💋‍👨🏼 👩🏾‍❤️‍💋‍👨🏽 👩🏾‍❤️‍💋‍👨🏾 👩🏾‍❤️‍💋‍👨🏿 👩🏿‍❤️‍💋‍👨🏻 👩🏿‍❤️‍💋‍👨🏼 👩🏿‍❤️‍💋‍👨🏽 👩🏿‍❤️‍💋‍👨🏾 👩🏿‍❤️‍💋‍👨🏿 👨‍❤️‍💋‍👨 👨🏻‍❤️‍💋‍👨🏻 👨🏻‍❤️‍💋‍👨🏼 👨🏻‍❤️‍💋‍👨🏽 👨🏻‍❤️‍💋‍👨🏾 👨🏻‍❤️‍💋‍👨🏿 👨🏼‍❤️‍💋‍👨🏻 👨🏼‍❤️‍💋‍👨🏼 👨🏼‍❤️‍💋‍👨🏽 👨🏼‍❤️‍💋‍👨🏾 👨🏼‍❤️‍💋‍👨🏿 👨🏽‍❤️‍💋‍👨🏻 👨🏽‍❤️‍💋‍👨🏼 👨🏽‍❤️‍💋‍👨🏽 👨🏽‍❤️‍💋‍👨🏾 👨🏽‍❤️‍💋‍👨🏿 👨🏾‍❤️‍💋‍👨🏻 👨🏾‍❤️‍💋‍👨🏼 👨🏾‍❤️‍💋‍👨🏽 👨🏾‍❤️‍💋‍👨🏾 👨🏾‍❤️‍💋‍👨🏿 👨🏿‍❤️‍💋‍👨🏻 👨🏿‍❤️‍💋‍👨🏼 👨🏿‍❤️‍💋‍👨🏽 👨🏿‍❤️‍💋‍👨🏾 👨🏿‍❤️‍💋‍👨🏿 👩‍❤️‍💋‍👩 👩🏻‍❤️‍💋‍👩🏻 👩🏻‍❤️‍💋‍👩🏼 👩🏻‍❤️‍💋‍👩🏽 👩🏻‍❤️‍💋‍👩🏾 👩🏻‍❤️‍💋‍👩🏿 👩🏼‍❤️‍💋‍👩🏻 👩🏼‍❤️‍💋‍👩🏼 👩🏼‍❤️‍💋‍👩🏽 👩🏼‍❤️‍💋‍👩🏾 👩🏼‍❤️‍💋‍👩🏿 👩🏽‍❤️‍💋‍👩🏻 👩🏽‍❤️‍💋‍👩🏼 👩🏽‍❤️‍💋‍👩🏽 👩🏽‍❤️‍💋‍👩🏾 👩🏽‍❤️‍💋‍👩🏿 👩🏾‍❤️‍💋‍👩🏻 👩🏾‍❤️‍💋‍👩🏼 👩🏾‍❤️‍💋‍👩🏽 👩🏾‍❤️‍💋‍👩🏾 👩🏾‍❤️‍💋‍👩🏿 👩🏿‍❤️‍💋‍👩🏻 👩🏿‍❤️‍💋‍👩🏼 👩🏿‍❤️‍💋‍👩🏽 👩🏿‍❤️‍💋‍👩🏾 👩🏿‍❤️‍💋‍👩🏿 💑 🧑🏻‍❤️‍🧑🏼 🧑🏻‍❤️‍🧑🏽 🧑🏻‍❤️‍🧑🏾 🧑🏻‍❤️‍🧑🏿 🧑🏼‍❤️‍🧑🏻 🧑🏼‍❤️‍🧑🏽 🧑🏼‍❤️‍🧑🏾 🧑🏼‍❤️‍🧑🏿 🧑🏽‍❤️‍🧑🏻 🧑🏽‍❤️‍🧑🏼 🧑🏽‍❤️‍🧑🏾 🧑🏽‍❤️‍🧑🏿 🧑🏾‍❤️‍🧑🏻 🧑🏾‍❤️‍🧑🏼 🧑🏾‍❤️‍🧑🏽 🧑🏾‍❤️‍🧑🏿 🧑🏿‍❤️‍🧑🏻 🧑🏿‍❤️‍🧑🏼 🧑🏿‍❤️‍🧑🏽 🧑🏿‍❤️‍🧑🏾 👩‍❤️‍👨 👩🏻‍❤️‍👨🏻 👩🏻‍❤️‍👨🏼 👩🏻‍❤️‍👨🏽 👩🏻‍❤️‍👨🏾 👩🏻‍❤️‍👨🏿 👩🏼‍❤️‍👨🏻 👩🏼‍❤️‍👨🏼 👩🏼‍❤️‍👨🏽 👩🏼‍❤️‍👨🏾 👩🏼‍❤️‍👨🏿 👩🏽‍❤️‍👨🏻 👩🏽‍❤️‍👨🏼 👩🏽‍❤️‍👨🏽 👩🏽‍❤️‍👨🏾 👩🏽‍❤️‍👨🏿 👩🏾‍❤️‍👨🏻 👩🏾‍❤️‍👨🏼 👩🏾‍❤️‍👨🏽 👩🏾‍❤️‍👨🏾 👩🏾‍❤️‍👨🏿 👩🏿‍❤️‍👨🏻 👩🏿‍❤️‍👨🏼 👩🏿‍❤️‍👨🏽 👩🏿‍❤️‍👨🏾 👩🏿‍❤️‍👨🏿 👨‍❤️‍👨 👨🏻‍❤️‍👨🏻 👨🏻‍❤️‍👨🏼 👨🏻‍❤️‍👨🏽 👨🏻‍❤️‍👨🏾 👨🏻‍❤️‍👨🏿 👨🏼‍❤️‍👨🏻 👨🏼‍❤️‍👨🏼 👨🏼‍❤️‍👨🏽 👨🏼‍❤️‍👨🏾 👨🏼‍❤️‍👨🏿 👨🏽‍❤️‍👨🏻 👨🏽‍❤️‍👨🏼 👨🏽‍❤️‍👨🏽 👨🏽‍❤️‍👨🏾 👨🏽‍❤️‍👨🏿 👨🏾‍❤️‍👨🏻 👨🏾‍❤️‍👨🏼 👨🏾‍❤️‍👨🏽 👨🏾‍❤️‍👨🏾 👨🏾‍❤️‍👨🏿 👨🏿‍❤️‍👨🏻 👨🏿‍❤️‍👨🏼 👨🏿‍❤️‍👨🏽 👨🏿‍❤️‍👨🏾 👨🏿‍❤️‍👨🏿 👩‍❤️‍👩 👩🏻‍❤️‍👩🏻 👩🏻‍❤️‍👩🏼 👩🏻‍❤️‍👩🏽 👩🏻‍❤️‍👩🏾 👩🏻‍❤️‍👩🏿 👩🏼‍❤️‍👩🏻 👩🏼‍❤️‍👩🏼 👩🏼‍❤️‍👩🏽 👩🏼‍❤️‍👩🏾 👩🏼‍❤️‍👩🏿 👩🏽‍❤️‍👩🏻 👩🏽‍❤️‍👩🏼 👩🏽‍❤️‍👩🏽 👩🏽‍❤️‍👩🏾 👩🏽‍❤️‍👩🏿 👩🏾‍❤️‍👩🏻 👩🏾‍❤️‍👩🏼 👩🏾‍❤️‍👩🏽 👩🏾‍❤️‍👩🏾 👩🏾‍❤️‍👩🏿 👩🏿‍❤️‍👩🏻 👩🏿‍❤️‍👩🏼 👩🏿‍❤️‍👩🏽 👩🏿‍❤️‍👩🏾 👩🏿‍❤️‍👩🏿 👪 👨‍👩‍👦 👨‍👩‍👧 👨‍👩‍👧‍👦 👨‍👩‍👦‍👦 👨‍👩‍👧‍👧 👨‍👨‍👦 👨‍👨‍👧 👨‍👨‍👧‍👦 👨‍👨‍👦‍👦 👨‍👨‍👧‍👧 👩‍👩‍👦 👩‍👩‍👧 👩‍👩‍👧‍👦 👩‍👩‍👦‍👦 👩‍👩‍👧‍👧 👨‍👦 👨‍👦‍👦 👨‍👧 👨‍👧‍👦 👨‍👧‍👧 👩‍👦 👩‍👦‍👦 👩‍👧 👩‍👧‍👦 👩‍👧‍👧 🐕‍🦺 🐈‍⬛ 🐻‍❄️ 🐦‍⬛ 🏳️‍🌈 🏳️‍⚧️ 🏴‍☠️ </p>`,frontmatter:{hide:!1,srcSequence:"./pages/04-quirks.md"},note:`Full reference: https://unicode.org/Public/emoji/15.0/
ZJW: zwidje https://unicode.org/emoji/charts/emoji-zwj-sequences.html`,index:45,start:49,end:59,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/04-quirks.md",raw:`
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
`,id:45,no:46},__clicksElements:[],__preloaded:!1}},{path:"47",name:"page-47",component:mF,meta:{hide:!1,srcSequence:"./pages/04-quirks.md",slide:{raw:`
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

TL;DR; you shouldn't expect any ligatures/digraphs to be added to Unicode any time soon.`,frontmatter:{hide:!1,srcSequence:"./pages/04-quirks.md"},note:"http://unicode.org/faq/ligature_digraph.html",index:46,start:60,end:79,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/04-quirks.md",raw:`
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
`,id:46,no:47},__clicksElements:[],__preloaded:!1}},{path:"48",name:"page-48",component:wF,meta:{hide:!1,srcSequence:"./pages/04-quirks.md",slide:{raw:`
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
- local (gbeng, etc)`,frontmatter:{hide:!1,srcSequence:"./pages/04-quirks.md"},index:47,start:80,end:96,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/04-quirks.md",raw:`
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
- local (gbeng, etc)`,frontmatter:{},index:5,start:80,end:96},filepath:"/home/ben/Workspace/demystifying-unicode/pages/04-quirks.md",noteHTML:"",id:47,no:48},__clicksElements:[],__preloaded:!1}},{path:"49",name:"page-49",component:EF,meta:{hide:!1,srcSequence:"./pages/04-quirks.md",slide:{raw:`
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
\\uE0001-\\uE007F`,index:48,start:97,end:134,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/04-quirks.md",raw:`
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
`,id:48,no:49},__clicksElements:[],__preloaded:!1}},{path:"50",name:"page-50",component:$F,meta:{layout:"cover",hideInToc:!0,slide:{raw:`---
layout: cover
hideInToc: true
---

# THE END
`,title:"THE END",level:1,content:"# THE END",frontmatter:{layout:"cover",hideInToc:!0},index:49,start:58,end:65,noteHTML:"",filepath:"/home/ben/Workspace/demystifying-unicode/slides.md",id:49,no:50},__clicksElements:[],__preloaded:!1}}],OF=[],Ge=FF,ho=[{name:"play",path:"/",component:N2,children:[...Ge,...OF]},{name:"print",path:"/print",component:pS},{path:"",redirect:{path:"/1"}},{path:"/:pathMatch(.*)",redirect:{path:"/1"}}];{let e=function(t){if(!po.remote||po.remote===t.query.password)return!0;if(po.remote&&t.query.password===void 0){const n=prompt("Enter password");if(po.remote===n)return!0}return t.params.no?{path:`/${t.params.no}`}:{path:""}};ho.push({path:"/presenter/print",component:()=>Ln(()=>import("./PresenterPrint-78ee18e9.js"),["assets/PresenterPrint-78ee18e9.js","assets/NoteDisplay-57f4154d.js"])}),ho.push({name:"notes",path:"/notes",component:()=>Ln(()=>import("./NotesView-85da9b3b.js"),["assets/NotesView-85da9b3b.js","assets/NoteDisplay-57f4154d.js"]),beforeEnter:e}),ho.push({name:"presenter",path:"/presenter/:no",component:()=>Ln(()=>import("./Presenter-1ae2d88a.js"),["assets/Presenter-1ae2d88a.js","assets/NoteDisplay-57f4154d.js","assets/DrawingControls-acd029de.js","assets/Presenter-aa6741a8.css"]),beforeEnter:e}),ho.push({path:"/presenter",redirect:{path:"/presenter/1"}})}const bt=Ab({history:C_("/"),routes:ho});function IF(e,t,{mode:n="replace"}={}){return I({get(){const s=bt.currentRoute.value.query[e];return s==null?t??null:Array.isArray(s)?s.filter(Boolean):s},set(s){ot(()=>{bt[O(n)]({query:{...bt.currentRoute.value.query,[e]:s}})})}})}const sh=z(0);ot(()=>{bt.afterEach(async()=>{await ot(),sh.value+=1})});const oh=z(0),Bt=I(()=>bt.currentRoute.value),vn=I(()=>Bt.value.query.print!==void 0),UF=I(()=>Bt.value.query.print==="clicks"),hn=I(()=>Bt.value.query.embedded!==void 0),vt=I(()=>Bt.value.path.startsWith("/presenter")),PF=I(()=>Bt.value.path.startsWith("/notes")),xo=I(()=>vn.value&&!UF.value),qa=I(()=>Bt.value.query.password),MF=I(()=>!vt.value&&(!$e.remote||qa.value===$e.remote)),zu=IF("clicks","0"),LF=I(()=>Ge.length),BF=I(()=>Bt.value.path),He=I(()=>Number.parseInt(BF.value.split(/\//g).slice(-1)[0])||1);I(()=>vi(He.value));const ft=I(()=>Ge.find(e=>e.path===`${He.value}`));I(()=>{var e,t,n;return(n=(t=(e=ft.value)==null?void 0:e.meta)==null?void 0:t.slide)==null?void 0:n.id});I(()=>{var e,t;return((t=(e=ft.value)==null?void 0:e.meta)==null?void 0:t.layout)||(He.value===1?"cover":"default")});const Hi=I(()=>Ge.find(e=>e.path===`${Math.min(Ge.length,He.value+1)}`)),DF=I(()=>Ge.find(e=>e.path===`${Math.max(1,He.value-1)}`)),RF=I(()=>{var e,t;return sh.value,((t=(e=ft.value)==null?void 0:e.meta)==null?void 0:t.__clicksElements)||[]}),Mt=I({get(){if(xo.value)return 99999;let e=+(zu.value||0);return Number.isNaN(e)&&(e=0),e},set(e){zu.value=e.toString()}}),Qr=I(()=>{var e,t;return+(((t=(e=ft.value)==null?void 0:e.meta)==null?void 0:t.clicks)??RF.value.length)}),NF=I(()=>He.value<Ge.length||Mt.value<Qr.value),jF=I(()=>He.value>1||Mt.value>0),WF=I(()=>Ge.filter(e=>{var t,n;return(n=(t=e.meta)==null?void 0:t.slide)==null?void 0:n.title}).reduce((e,t)=>(Dl(e,t),e),[])),qF=I(()=>Rl(WF.value,ft.value));I(()=>Nl(qF.value));const HF=I(()=>YF(oh.value,ft.value,DF.value));ye(ft,(e,t)=>{oh.value=Number(e==null?void 0:e.path)-Number(t==null?void 0:t.path)});function Dn(){Qr.value<=Mt.value?Ro():Mt.value+=1}async function Rn(){Mt.value<=0?await No():Mt.value-=1}function vi(e){return vt.value?`/presenter/${e}`:`/${e}`}function Ro(){const e=Math.min(Ge.length,He.value+1);return qs(e)}async function No(e=!0){const t=Math.max(1,He.value-1);await qs(t),e&&Qr.value&&bt.replace({query:{...Bt.value.query,clicks:Qr.value}})}function qs(e,t){return bt.push({path:vi(e),query:{...Bt.value.query,clicks:t}})}function VF(e){const t=z(0),{direction:n,distanceX:s,distanceY:o}=Zv(e,{onSwipeStart(r){r.pointerType==="touch"&&(Lo.value||(t.value=Sa()))},onSwipeEnd(r){if(r.pointerType!=="touch"||!t.value||Lo.value)return;const a=Math.abs(s.value),l=Math.abs(o.value);a/window.innerWidth>.3||a>100?n.value==="left"?Dn():Rn():(l/window.innerHeight>.4||l>200)&&(n.value==="down"?No():Ro())}})}async function Ha(){const{saveAs:e}=await Ln(()=>import("./FileSaver.min-23a5d44b.js").then(t=>t.F),[]);e(typeof $e.download=="string"?$e.download:$e.exportFilename?`${$e.exportFilename}.pdf`:"/slidev-exported.pdf",`${$e.title}.pdf`)}async function zF(e){var t,n;if(e==null){const s=(n=(t=ft.value)==null?void 0:t.meta)==null?void 0:n.slide;if(!(s!=null&&s.filepath))return!1;e=`${s.filepath}:${s.start}`}return await fetch(`/__open-in-editor?file=${encodeURIComponent(e)}`),!0}function Dl(e,t,n=1){var o,r,a,l,c;const s=(r=(o=t.meta)==null?void 0:o.slide)==null?void 0:r.level;s&&s>n&&e.length>0?Dl(e[e.length-1].children,t,n+1):e.push({children:[],level:n,path:t.path,hideInToc:!!((a=t.meta)!=null&&a.hideInToc),title:(c=(l=t.meta)==null?void 0:l.slide)==null?void 0:c.title})}function Rl(e,t,n=!1,s){return e.map(o=>{const r={...o,active:o.path===(t==null?void 0:t.path),hasActiveParent:n};return r.children.length>0&&(r.children=Rl(r.children,t,r.active||r.hasActiveParent,r)),s&&(r.active||r.activeParent)&&(s.activeParent=!0),r})}function Nl(e,t=1){return e.filter(n=>!n.hideInToc).map(n=>({...n,children:Nl(n.children,t+1)}))}const KF={"slide-left":"slide-left | slide-right","slide-right":"slide-right | slide-left","slide-up":"slide-up | slide-down","slide-down":"slide-down | slide-up"};function GF(e,t=!1){if(!e||(typeof e=="string"&&(e={name:e}),!e.name))return;let n=e.name.includes("|")?e.name:KF[e.name]||e.name;if(n.includes("|")){const[s,o]=n.split("|").map(r=>r.trim());n=t?o:s}if(n)return{...e,name:n}}function YF(e,t,n){var o,r;let s=e>0?(o=n==null?void 0:n.meta)==null?void 0:o.transition:(r=t==null?void 0:t.meta)==null?void 0:r.transition;return s||(s=$e.transition),GF(s,e<0)}function ZF(){const e=$e.titleTemplate.replace("%s",$e.title||"Slidev");Gf({title:e,htmlAttrs:$e.htmlAttrs}),E1(`${e} - shared`),F1(`${e} - drawings`);const t=`${location.origin}_${b1()}`;function n(){PF.value||!vt.value&&!g1.includes(location.host.split(":")[0])||(vt.value?(eo("page",+He.value),eo("clicks",Mt.value)):(eo("viewerPage",+He.value),eo("viewerClicks",Mt.value)),eo("lastUpdate",{id:t,type:vt.value?"presenter":"viewer",time:new Date().getTime()}))}bt.afterEach(n),ye(Mt,n),C1(s=>{var r;bt.currentRoute.value.path.match(/^\/(\d+|presenter)\/?/)&&((r=s.lastUpdate)==null?void 0:r.type)==="presenter"&&(+s.page!=+He.value||+Mt.value!=+s.clicks)&&bt.replace({path:vi(s.page),query:{...bt.currentRoute.value.query,clicks:s.clicks||0}})})}const QF=ke({__name:"App",setup(e){return R(K),ZF(),(t,n)=>{const s=Ns("RouterView"),o=Ns("StarportCarrier");return w(),$(Ae,null,[Y(s),Y(o)],64)}}}),JF=G(QF,[["__file","/home/ben/Workspace/demystifying-unicode/node_modules/@slidev/client/App.vue"]]);function Vi(e){return e!==null&&typeof e=="object"}function Va(e,t,n=".",s){if(!Vi(t))return Va(e,{},n,s);const o=Object.assign({},t);for(const r in e){if(r==="__proto__"||r==="constructor")continue;const a=e[r];a!=null&&(s&&s(o,r,a,n)||(Array.isArray(a)&&Array.isArray(o[r])?o[r]=[...a,...o[r]]:Vi(a)&&Vi(o[r])?o[r]=Va(a,o[r],(n?`${n}.`:"")+r.toString(),s):o[r]=a))}return o}function XF(e){return(...t)=>t.reduce((n,s)=>Va(n,s,"",e),{})}const e4=XF(),rh=1/60*1e3,t4=typeof performance<"u"?()=>performance.now():()=>Date.now(),ih=typeof window<"u"?e=>window.requestAnimationFrame(e):e=>setTimeout(()=>e(t4()),rh);function n4(e){let t=[],n=[],s=0,o=!1,r=!1;const a=new WeakSet,l={schedule:(c,u=!1,d=!1)=>{const f=d&&o,p=f?t:n;return u&&a.add(c),p.indexOf(c)===-1&&(p.push(c),f&&o&&(s=t.length)),c},cancel:c=>{const u=n.indexOf(c);u!==-1&&n.splice(u,1),a.delete(c)},process:c=>{if(o){r=!0;return}if(o=!0,[t,n]=[n,t],n.length=0,s=t.length,s)for(let u=0;u<s;u++){const d=t[u];d(c),a.has(d)&&(l.schedule(d),e())}o=!1,r&&(r=!1,l.process(c))}};return l}const s4=40;let za=!0,jo=!1,Ka=!1;const Rs={delta:0,timestamp:0},Qo=["read","update","preRender","render","postRender"],_i=Qo.reduce((e,t)=>(e[t]=n4(()=>jo=!0),e),{}),Ga=Qo.reduce((e,t)=>{const n=_i[t];return e[t]=(s,o=!1,r=!1)=>(jo||i4(),n.schedule(s,o,r)),e},{}),o4=Qo.reduce((e,t)=>(e[t]=_i[t].cancel,e),{});Qo.reduce((e,t)=>(e[t]=()=>_i[t].process(Rs),e),{});const r4=e=>_i[e].process(Rs),ah=e=>{jo=!1,Rs.delta=za?rh:Math.max(Math.min(e-Rs.timestamp,s4),1),Rs.timestamp=e,Ka=!0,Qo.forEach(r4),Ka=!1,jo&&(za=!1,ih(ah))},i4=()=>{jo=!0,za=!0,Ka||ih(ah)},lh=()=>Rs;function ch(e,t){var n={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(n[s]=e[s]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,s=Object.getOwnPropertySymbols(e);o<s.length;o++)t.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(e,s[o])&&(n[s[o]]=e[s[o]]);return n}var jl=function(){},Wo=function(){};jl=function(e,t){!e&&typeof console<"u"&&console.warn(t)},Wo=function(e,t){if(!e)throw new Error(t)};const Ya=(e,t,n)=>Math.min(Math.max(n,e),t),zi=.001,a4=.01,Ku=10,l4=.05,c4=1;function u4({duration:e=800,bounce:t=.25,velocity:n=0,mass:s=1}){let o,r;jl(e<=Ku*1e3,"Spring duration must be 10 seconds or less");let a=1-t;a=Ya(l4,c4,a),e=Ya(a4,Ku,e/1e3),a<1?(o=u=>{const d=u*a,f=d*e,p=d-n,h=Za(u,a),m=Math.exp(-f);return zi-p/h*m},r=u=>{const f=u*a*e,p=f*n+n,h=Math.pow(a,2)*Math.pow(u,2)*e,m=Math.exp(-f),_=Za(Math.pow(u,2),a);return(-o(u)+zi>0?-1:1)*((p-h)*m)/_}):(o=u=>{const d=Math.exp(-u*e),f=(u-n)*e+1;return-zi+d*f},r=u=>{const d=Math.exp(-u*e),f=(n-u)*(e*e);return d*f});const l=5/e,c=f4(o,r,l);if(e=e*1e3,isNaN(c))return{stiffness:100,damping:10,duration:e};{const u=Math.pow(c,2)*s;return{stiffness:u,damping:a*2*Math.sqrt(s*u),duration:e}}}const d4=12;function f4(e,t,n){let s=n;for(let o=1;o<d4;o++)s=s-e(s)/t(s);return s}function Za(e,t){return e*Math.sqrt(1-t*t)}const p4=["duration","bounce"],h4=["stiffness","damping","mass"];function Gu(e,t){return t.some(n=>e[n]!==void 0)}function m4(e){let t=Object.assign({velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1},e);if(!Gu(e,h4)&&Gu(e,p4)){const n=u4(e);t=Object.assign(Object.assign(Object.assign({},t),n),{velocity:0,mass:1}),t.isResolvedFromDuration=!0}return t}function Wl(e){var{from:t=0,to:n=1,restSpeed:s=2,restDelta:o}=e,r=ch(e,["from","to","restSpeed","restDelta"]);const a={done:!1,value:t};let{stiffness:l,damping:c,mass:u,velocity:d,duration:f,isResolvedFromDuration:p}=m4(r),h=Yu,m=Yu;function _(){const k=d?-(d/1e3):0,x=n-t,S=c/(2*Math.sqrt(l*u)),b=Math.sqrt(l/u)/1e3;if(o===void 0&&(o=Math.min(Math.abs(n-t)/100,.4)),S<1){const T=Za(b,S);h=E=>{const A=Math.exp(-S*b*E);return n-A*((k+S*b*x)/T*Math.sin(T*E)+x*Math.cos(T*E))},m=E=>{const A=Math.exp(-S*b*E);return S*b*A*(Math.sin(T*E)*(k+S*b*x)/T+x*Math.cos(T*E))-A*(Math.cos(T*E)*(k+S*b*x)-T*x*Math.sin(T*E))}}else if(S===1)h=T=>n-Math.exp(-b*T)*(x+(k+b*x)*T);else{const T=b*Math.sqrt(S*S-1);h=E=>{const A=Math.exp(-S*b*E),L=Math.min(T*E,300);return n-A*((k+S*b*x)*Math.sinh(L)+T*x*Math.cosh(L))/T}}}return _(),{next:k=>{const x=h(k);if(p)a.done=k>=f;else{const S=m(k)*1e3,b=Math.abs(S)<=s,T=Math.abs(n-x)<=o;a.done=b&&T}return a.value=a.done?n:x,a},flipTarget:()=>{d=-d,[t,n]=[n,t],_()}}}Wl.needsInterpolation=(e,t)=>typeof e=="string"||typeof t=="string";const Yu=e=>0,uh=(e,t,n)=>{const s=t-e;return s===0?1:(n-e)/s},ql=(e,t,n)=>-n*e+n*t+e,dh=(e,t)=>n=>Math.max(Math.min(n,t),e),ko=e=>e%1?Number(e.toFixed(5)):e,qo=/(-)?([\d]*\.?[\d])+/g,Qa=/(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,g4=/^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function Jo(e){return typeof e=="string"}const Xo={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},So=Object.assign(Object.assign({},Xo),{transform:dh(0,1)}),yr=Object.assign(Object.assign({},Xo),{default:1}),Hl=e=>({test:t=>Jo(t)&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),Zn=Hl("deg"),To=Hl("%"),_e=Hl("px"),Zu=Object.assign(Object.assign({},To),{parse:e=>To.parse(e)/100,transform:e=>To.transform(e*100)}),Vl=(e,t)=>n=>!!(Jo(n)&&g4.test(n)&&n.startsWith(e)||t&&Object.prototype.hasOwnProperty.call(n,t)),fh=(e,t,n)=>s=>{if(!Jo(s))return s;const[o,r,a,l]=s.match(qo);return{[e]:parseFloat(o),[t]:parseFloat(r),[n]:parseFloat(a),alpha:l!==void 0?parseFloat(l):1}},cs={test:Vl("hsl","hue"),parse:fh("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:s=1})=>"hsla("+Math.round(e)+", "+To.transform(ko(t))+", "+To.transform(ko(n))+", "+ko(So.transform(s))+")"},y4=dh(0,255),Ki=Object.assign(Object.assign({},Xo),{transform:e=>Math.round(y4(e))}),On={test:Vl("rgb","red"),parse:fh("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:s=1})=>"rgba("+Ki.transform(e)+", "+Ki.transform(t)+", "+Ki.transform(n)+", "+ko(So.transform(s))+")"};function v4(e){let t="",n="",s="",o="";return e.length>5?(t=e.substr(1,2),n=e.substr(3,2),s=e.substr(5,2),o=e.substr(7,2)):(t=e.substr(1,1),n=e.substr(2,1),s=e.substr(3,1),o=e.substr(4,1),t+=t,n+=n,s+=s,o+=o),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(s,16),alpha:o?parseInt(o,16)/255:1}}const Ja={test:Vl("#"),parse:v4,transform:On.transform},yt={test:e=>On.test(e)||Ja.test(e)||cs.test(e),parse:e=>On.test(e)?On.parse(e):cs.test(e)?cs.parse(e):Ja.parse(e),transform:e=>Jo(e)?e:e.hasOwnProperty("red")?On.transform(e):cs.transform(e)},ph="${c}",hh="${n}";function _4(e){var t,n,s,o;return isNaN(e)&&Jo(e)&&((n=(t=e.match(qo))===null||t===void 0?void 0:t.length)!==null&&n!==void 0?n:0)+((o=(s=e.match(Qa))===null||s===void 0?void 0:s.length)!==null&&o!==void 0?o:0)>0}function mh(e){typeof e=="number"&&(e=`${e}`);const t=[];let n=0;const s=e.match(Qa);s&&(n=s.length,e=e.replace(Qa,ph),t.push(...s.map(yt.parse)));const o=e.match(qo);return o&&(e=e.replace(qo,hh),t.push(...o.map(Xo.parse))),{values:t,numColors:n,tokenised:e}}function gh(e){return mh(e).values}function yh(e){const{values:t,numColors:n,tokenised:s}=mh(e),o=t.length;return r=>{let a=s;for(let l=0;l<o;l++)a=a.replace(l<n?ph:hh,l<n?yt.transform(r[l]):ko(r[l]));return a}}const b4=e=>typeof e=="number"?0:e;function w4(e){const t=gh(e);return yh(e)(t.map(b4))}const er={test:_4,parse:gh,createTransformer:yh,getAnimatableNone:w4},x4=new Set(["brightness","contrast","saturate","opacity"]);function k4(e){let[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[s]=n.match(qo)||[];if(!s)return e;const o=n.replace(s,"");let r=x4.has(t)?1:0;return s!==n&&(r*=100),t+"("+r+o+")"}const S4=/([a-z-]*)\(.*?\)/g,Xa=Object.assign(Object.assign({},er),{getAnimatableNone:e=>{const t=e.match(S4);return t?t.map(k4).join(" "):e}});function Gi(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function Qu({hue:e,saturation:t,lightness:n,alpha:s}){e/=360,t/=100,n/=100;let o=0,r=0,a=0;if(!t)o=r=a=n;else{const l=n<.5?n*(1+t):n+t-n*t,c=2*n-l;o=Gi(c,l,e+1/3),r=Gi(c,l,e),a=Gi(c,l,e-1/3)}return{red:Math.round(o*255),green:Math.round(r*255),blue:Math.round(a*255),alpha:s}}const T4=(e,t,n)=>{const s=e*e,o=t*t;return Math.sqrt(Math.max(0,n*(o-s)+s))},E4=[Ja,On,cs],Ju=e=>E4.find(t=>t.test(e)),Xu=e=>`'${e}' is not an animatable color. Use the equivalent color code instead.`,vh=(e,t)=>{let n=Ju(e),s=Ju(t);Wo(!!n,Xu(e)),Wo(!!s,Xu(t));let o=n.parse(e),r=s.parse(t);n===cs&&(o=Qu(o),n=On),s===cs&&(r=Qu(r),s=On);const a=Object.assign({},o);return l=>{for(const c in a)c!=="alpha"&&(a[c]=T4(o[c],r[c],l));return a.alpha=ql(o.alpha,r.alpha,l),n.transform(a)}},C4=e=>typeof e=="number",A4=(e,t)=>n=>t(e(n)),_h=(...e)=>e.reduce(A4);function bh(e,t){return C4(e)?n=>ql(e,t,n):yt.test(e)?vh(e,t):xh(e,t)}const wh=(e,t)=>{const n=[...e],s=n.length,o=e.map((r,a)=>bh(r,t[a]));return r=>{for(let a=0;a<s;a++)n[a]=o[a](r);return n}},$4=(e,t)=>{const n=Object.assign(Object.assign({},e),t),s={};for(const o in n)e[o]!==void 0&&t[o]!==void 0&&(s[o]=bh(e[o],t[o]));return o=>{for(const r in s)n[r]=s[r](o);return n}};function ed(e){const t=er.parse(e),n=t.length;let s=0,o=0,r=0;for(let a=0;a<n;a++)s||typeof t[a]=="number"?s++:t[a].hue!==void 0?r++:o++;return{parsed:t,numNumbers:s,numRGB:o,numHSL:r}}const xh=(e,t)=>{const n=er.createTransformer(t),s=ed(e),o=ed(t);return s.numHSL===o.numHSL&&s.numRGB===o.numRGB&&s.numNumbers>=o.numNumbers?_h(wh(s.parsed,o.parsed),n):(jl(!0,`Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`),a=>`${a>0?t:e}`)},F4=(e,t)=>n=>ql(e,t,n);function O4(e){if(typeof e=="number")return F4;if(typeof e=="string")return yt.test(e)?vh:xh;if(Array.isArray(e))return wh;if(typeof e=="object")return $4}function I4(e,t,n){const s=[],o=n||O4(e[0]),r=e.length-1;for(let a=0;a<r;a++){let l=o(e[a],e[a+1]);if(t){const c=Array.isArray(t)?t[a]:t;l=_h(c,l)}s.push(l)}return s}function U4([e,t],[n]){return s=>n(uh(e,t,s))}function P4(e,t){const n=e.length,s=n-1;return o=>{let r=0,a=!1;if(o<=e[0]?a=!0:o>=e[s]&&(r=s-1,a=!0),!a){let c=1;for(;c<n&&!(e[c]>o||c===s);c++);r=c-1}const l=uh(e[r],e[r+1],o);return t[r](l)}}function kh(e,t,{clamp:n=!0,ease:s,mixer:o}={}){const r=e.length;Wo(r===t.length,"Both input and output ranges must be the same length"),Wo(!s||!Array.isArray(s)||s.length===r-1,"Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values."),e[0]>e[r-1]&&(e=[].concat(e),t=[].concat(t),e.reverse(),t.reverse());const a=I4(t,s,o),l=r===2?U4(e,a):P4(e,a);return n?c=>l(Ya(e[0],e[r-1],c)):l}const bi=e=>t=>1-e(1-t),zl=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,M4=e=>t=>Math.pow(t,e),Sh=e=>t=>t*t*((e+1)*t-e),L4=e=>{const t=Sh(e);return n=>(n*=2)<1?.5*t(n):.5*(2-Math.pow(2,-10*(n-1)))},Th=1.525,B4=4/11,D4=8/11,R4=9/10,Eh=e=>e,Kl=M4(2),N4=bi(Kl),Ch=zl(Kl),Ah=e=>1-Math.sin(Math.acos(e)),$h=bi(Ah),j4=zl($h),Gl=Sh(Th),W4=bi(Gl),q4=zl(Gl),H4=L4(Th),V4=4356/361,z4=35442/1805,K4=16061/1805,Jr=e=>{if(e===1||e===0)return e;const t=e*e;return e<B4?7.5625*t:e<D4?9.075*t-9.9*e+3.4:e<R4?V4*t-z4*e+K4:10.8*e*e-20.52*e+10.72},G4=bi(Jr),Y4=e=>e<.5?.5*(1-Jr(1-e*2)):.5*Jr(e*2-1)+.5;function Z4(e,t){return e.map(()=>t||Ch).splice(0,e.length-1)}function Q4(e){const t=e.length;return e.map((n,s)=>s!==0?s/(t-1):0)}function J4(e,t){return e.map(n=>n*t)}function Cr({from:e=0,to:t=1,ease:n,offset:s,duration:o=300}){const r={done:!1,value:e},a=Array.isArray(t)?t:[e,t],l=J4(s&&s.length===a.length?s:Q4(a),o);function c(){return kh(l,a,{ease:Array.isArray(n)?n:Z4(a,n)})}let u=c();return{next:d=>(r.value=u(d),r.done=d>=o,r),flipTarget:()=>{a.reverse(),u=c()}}}function X4({velocity:e=0,from:t=0,power:n=.8,timeConstant:s=350,restDelta:o=.5,modifyTarget:r}){const a={done:!1,value:t};let l=n*e;const c=t+l,u=r===void 0?c:r(c);return u!==c&&(l=u-t),{next:d=>{const f=-l*Math.exp(-d/s);return a.done=!(f>o||f<-o),a.value=a.done?u:u+f,a},flipTarget:()=>{}}}const td={keyframes:Cr,spring:Wl,decay:X4};function e5(e){if(Array.isArray(e.to))return Cr;if(td[e.type])return td[e.type];const t=new Set(Object.keys(e));return t.has("ease")||t.has("duration")&&!t.has("dampingRatio")?Cr:t.has("dampingRatio")||t.has("stiffness")||t.has("mass")||t.has("damping")||t.has("restSpeed")||t.has("restDelta")?Wl:Cr}function Fh(e,t,n=0){return e-t-n}function t5(e,t,n=0,s=!0){return s?Fh(t+-e,t,n):t-(e-t)+n}function n5(e,t,n,s){return s?e>=t+n:e<=-n}const s5=e=>{const t=({delta:n})=>e(n);return{start:()=>Ga.update(t,!0),stop:()=>o4.update(t)}};function Oh(e){var t,n,{from:s,autoplay:o=!0,driver:r=s5,elapsed:a=0,repeat:l=0,repeatType:c="loop",repeatDelay:u=0,onPlay:d,onStop:f,onComplete:p,onRepeat:h,onUpdate:m}=e,_=ch(e,["from","autoplay","driver","elapsed","repeat","repeatType","repeatDelay","onPlay","onStop","onComplete","onRepeat","onUpdate"]);let{to:k}=_,x,S=0,b=_.duration,T,E=!1,A=!0,L;const U=e5(_);!((n=(t=U).needsInterpolation)===null||n===void 0)&&n.call(t,s,k)&&(L=kh([0,100],[s,k],{clamp:!1}),s=0,k=100);const N=U(Object.assign(Object.assign({},_),{from:s,to:k}));function ne(){S++,c==="reverse"?(A=S%2===0,a=t5(a,b,u,A)):(a=Fh(a,b,u),c==="mirror"&&N.flipTarget()),E=!1,h&&h()}function le(){x.stop(),p&&p()}function Z(ve){if(A||(ve=-ve),a+=ve,!E){const be=N.next(Math.max(0,a));T=be.value,L&&(T=L(T)),E=A?be.done:a<=0}m==null||m(T),E&&(S===0&&(b??(b=a)),S<l?n5(a,b,u,A)&&ne():le())}function me(){d==null||d(),x=r(Z),x.start()}return o&&me(),{stop:()=>{f==null||f(),x.stop()}}}function Ih(e,t){return t?e*(1e3/t):0}function o5({from:e=0,velocity:t=0,min:n,max:s,power:o=.8,timeConstant:r=750,bounceStiffness:a=500,bounceDamping:l=10,restDelta:c=1,modifyTarget:u,driver:d,onUpdate:f,onComplete:p,onStop:h}){let m;function _(b){return n!==void 0&&b<n||s!==void 0&&b>s}function k(b){return n===void 0?s:s===void 0||Math.abs(n-b)<Math.abs(s-b)?n:s}function x(b){m==null||m.stop(),m=Oh(Object.assign(Object.assign({},b),{driver:d,onUpdate:T=>{var E;f==null||f(T),(E=b.onUpdate)===null||E===void 0||E.call(b,T)},onComplete:p,onStop:h}))}function S(b){x(Object.assign({type:"spring",stiffness:a,damping:l,restDelta:c},b))}if(_(e))S({from:e,velocity:t,to:k(e)});else{let b=o*t+e;typeof u<"u"&&(b=u(b));const T=k(b),E=T===n?-1:1;let A,L;const U=N=>{A=L,L=N,t=Ih(N-A,lh().delta),(E===1&&N>T||E===-1&&N<T)&&S({from:N,to:T,velocity:t})};x({type:"decay",from:e,velocity:t,timeConstant:r,power:o,restDelta:c,modifyTarget:u,onUpdate:_(b)?U:void 0})}return{stop:()=>m==null?void 0:m.stop()}}const Uh=(e,t)=>1-3*t+3*e,Ph=(e,t)=>3*t-6*e,Mh=e=>3*e,Xr=(e,t,n)=>((Uh(t,n)*e+Ph(t,n))*e+Mh(t))*e,Lh=(e,t,n)=>3*Uh(t,n)*e*e+2*Ph(t,n)*e+Mh(t),r5=1e-7,i5=10;function a5(e,t,n,s,o){let r,a,l=0;do a=t+(n-t)/2,r=Xr(a,s,o)-e,r>0?n=a:t=a;while(Math.abs(r)>r5&&++l<i5);return a}const l5=8,c5=.001;function u5(e,t,n,s){for(let o=0;o<l5;++o){const r=Lh(t,n,s);if(r===0)return t;const a=Xr(t,n,s)-e;t-=a/r}return t}const Ar=11,vr=1/(Ar-1);function d5(e,t,n,s){if(e===t&&n===s)return Eh;const o=new Float32Array(Ar);for(let a=0;a<Ar;++a)o[a]=Xr(a*vr,e,n);function r(a){let l=0,c=1;const u=Ar-1;for(;c!==u&&o[c]<=a;++c)l+=vr;--c;const d=(a-o[c])/(o[c+1]-o[c]),f=l+d*vr,p=Lh(f,e,n);return p>=c5?u5(a,f,e,n):p===0?f:a5(a,l,l+vr,e,n)}return a=>a===0||a===1?a:Xr(r(a),t,s)}const Yi={};class f5{constructor(){this.subscriptions=new Set}add(t){return this.subscriptions.add(t),()=>this.subscriptions.delete(t)}notify(t,n,s){if(this.subscriptions.size)for(const o of this.subscriptions)o(t,n,s)}clear(){this.subscriptions.clear()}}function nd(e){return!isNaN(parseFloat(e))}class p5{constructor(t){this.timeDelta=0,this.lastUpdated=0,this.updateSubscribers=new f5,this.canTrackVelocity=!1,this.updateAndNotify=n=>{this.prev=this.current,this.current=n;const{delta:s,timestamp:o}=lh();this.lastUpdated!==o&&(this.timeDelta=s,this.lastUpdated=o),Ga.postRender(this.scheduleVelocityCheck),this.updateSubscribers.notify(this.current)},this.scheduleVelocityCheck=()=>Ga.postRender(this.velocityCheck),this.velocityCheck=({timestamp:n})=>{this.canTrackVelocity||(this.canTrackVelocity=nd(this.current)),n!==this.lastUpdated&&(this.prev=this.current)},this.prev=this.current=t,this.canTrackVelocity=nd(this.current)}onChange(t){return this.updateSubscribers.add(t)}clearListeners(){this.updateSubscribers.clear()}set(t){this.updateAndNotify(t)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?Ih(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(t){return this.stop(),new Promise(n=>{const{stop:s}=t(n);this.stopAnimation=s}).then(()=>this.clearAnimation())}stop(){this.stopAnimation&&this.stopAnimation(),this.clearAnimation()}isAnimating(){return!!this.stopAnimation}clearAnimation(){this.stopAnimation=null}destroy(){this.updateSubscribers.clear(),this.stop()}}function h5(e){return new p5(e)}const{isArray:m5}=Array;function g5(){const e=z({}),t=s=>{const o=r=>{e.value[r]&&(e.value[r].stop(),e.value[r].destroy(),delete e.value[r])};s?m5(s)?s.forEach(o):o(s):Object.keys(e.value).forEach(o)},n=(s,o,r)=>{if(e.value[s])return e.value[s];const a=h5(o);return a.onChange(l=>r[s]=l),e.value[s]=a,a};return J1(t),{motionValues:e,get:n,stop:t}}function y5(e){return Array.isArray(e)}function Qn(){return{type:"spring",stiffness:500,damping:25,restDelta:.5,restSpeed:10}}function Zi(e){return{type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restDelta:.01,restSpeed:10}}function v5(e){return{type:"spring",stiffness:550,damping:e===0?100:30,restDelta:.01,restSpeed:10}}function Qi(){return{type:"keyframes",ease:"linear",duration:300}}function _5(e){return{type:"keyframes",duration:800,values:e}}const sd={default:v5,x:Qn,y:Qn,z:Qn,rotate:Qn,rotateX:Qn,rotateY:Qn,rotateZ:Qn,scaleX:Zi,scaleY:Zi,scale:Zi,backgroundColor:Qi,color:Qi,opacity:Qi};function Bh(e,t){let n;return y5(t)?n=_5:n=sd[e]||sd.default,{to:t,...n(t)}}const od={...Xo,transform:Math.round},Dh={color:yt,backgroundColor:yt,outlineColor:yt,fill:yt,stroke:yt,borderColor:yt,borderTopColor:yt,borderRightColor:yt,borderBottomColor:yt,borderLeftColor:yt,borderWidth:_e,borderTopWidth:_e,borderRightWidth:_e,borderBottomWidth:_e,borderLeftWidth:_e,borderRadius:_e,radius:_e,borderTopLeftRadius:_e,borderTopRightRadius:_e,borderBottomRightRadius:_e,borderBottomLeftRadius:_e,width:_e,maxWidth:_e,height:_e,maxHeight:_e,size:_e,top:_e,right:_e,bottom:_e,left:_e,padding:_e,paddingTop:_e,paddingRight:_e,paddingBottom:_e,paddingLeft:_e,margin:_e,marginTop:_e,marginRight:_e,marginBottom:_e,marginLeft:_e,rotate:Zn,rotateX:Zn,rotateY:Zn,rotateZ:Zn,scale:yr,scaleX:yr,scaleY:yr,scaleZ:yr,skew:Zn,skewX:Zn,skewY:Zn,distance:_e,translateX:_e,translateY:_e,translateZ:_e,x:_e,y:_e,z:_e,perspective:_e,transformPerspective:_e,opacity:So,originX:Zu,originY:Zu,originZ:_e,zIndex:od,filter:Xa,WebkitFilter:Xa,fillOpacity:So,strokeOpacity:So,numOctaves:od},Yl=e=>Dh[e];function Rh(e,t){return t&&typeof e=="number"&&t.transform?t.transform(e):e}function b5(e,t){let n=Yl(e);return n!==Xa&&(n=er),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const w5={linear:Eh,easeIn:Kl,easeInOut:Ch,easeOut:N4,circIn:Ah,circInOut:j4,circOut:$h,backIn:Gl,backInOut:q4,backOut:W4,anticipate:H4,bounceIn:G4,bounceInOut:Y4,bounceOut:Jr};function rd(e){if(Array.isArray(e)){const[t,n,s,o]=e;return d5(t,n,s,o)}else if(typeof e=="string")return w5[e];return e}function x5(e){return Array.isArray(e)&&typeof e[0]!="number"}function id(e,t){return e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&er.test(t)&&!t.startsWith("url("))}function k5(e){return Array.isArray(e.to)&&e.to[0]===null&&(e.to=[...e.to],e.to[0]=e.from),e}function S5({ease:e,times:t,delay:n,...s}){const o={...s};return t&&(o.offset=t),e&&(o.ease=x5(e)?e.map(rd):rd(e)),n&&(o.elapsed=-n),o}function T5(e,t,n){return Array.isArray(t.to)&&(e.duration||(e.duration=800)),k5(t),E5(e)||(e={...e,...Bh(n,t.to)}),{...t,...S5(e)}}function E5({delay:e,repeat:t,repeatType:n,repeatDelay:s,from:o,...r}){return!!Object.keys(r).length}function C5(e,t){return e[t]||e.default||e}function A5(e,t,n,s,o){const r=C5(s,e);let a=r.from===null||r.from===void 0?t.get():r.from;const l=id(e,n);a==="none"&&l&&typeof n=="string"&&(a=b5(e,n));const c=id(e,a);function u(f){const p={from:a,to:n,velocity:s.velocity?s.velocity:t.getVelocity(),onUpdate:h=>t.set(h)};return r.type==="inertia"||r.type==="decay"?o5({...p,...r}):Oh({...T5(r,p,e),onUpdate:h=>{p.onUpdate(h),r.onUpdate&&r.onUpdate(h)},onComplete:()=>{s.onComplete&&s.onComplete(),o&&o(),f&&f()}})}function d(f){return t.set(n),s.onComplete&&s.onComplete(),o&&o(),f&&f(),{stop:()=>{}}}return!c||!l||r.type===!1?d:u}function $5(){const{motionValues:e,stop:t,get:n}=g5();return{motionValues:e,stop:t,push:(o,r,a,l={},c)=>{const u=a[o],d=n(o,u,a);if(l&&l.immediate){d.set(r);return}const f=A5(o,d,r,l,c);d.start(f)}}}function F5(e,t={},{motionValues:n,push:s,stop:o}=$5()){const r=O(t),a=z(!1);ye(n,f=>{a.value=Object.values(f).filter(p=>p.isAnimating()).length>0},{immediate:!0,deep:!0});const l=f=>{if(!r||!r[f])throw new Error(`The variant ${f} does not exist.`);return r[f]},c=f=>(typeof f=="string"&&(f=l(f)),Promise.all(Object.entries(f).map(([p,h])=>{if(p!=="transition")return new Promise(m=>s(p,h,e,f.transition||Bh(p,f[p]),m))}).filter(Boolean)));return{isAnimating:a,apply:c,set:f=>{const p=ka(f)?f:l(f);Object.entries(p).forEach(([h,m])=>{h!=="transition"&&s(h,m,e,{immediate:!0})})},leave:async f=>{let p;if(r&&(r.leave&&(p=r.leave),!r.leave&&r.initial&&(p=r.initial)),!p){f();return}await c(p),f()},stop:o}}const Zl=typeof window<"u",O5=()=>Zl&&window.onpointerdown===null,I5=()=>Zl&&window.ontouchstart===null,U5=()=>Zl&&window.onmousedown===null;function P5({target:e,state:t,variants:n,apply:s}){const o=O(n),r=z(!1),a=z(!1),l=z(!1),c=I(()=>{let d=[];return o&&(o.hovered&&(d=[...d,...Object.keys(o.hovered)]),o.tapped&&(d=[...d,...Object.keys(o.tapped)]),o.focused&&(d=[...d,...Object.keys(o.focused)])),d}),u=I(()=>{const d={};Object.assign(d,t.value),r.value&&o.hovered&&Object.assign(d,o.hovered),a.value&&o.tapped&&Object.assign(d,o.tapped),l.value&&o.focused&&Object.assign(d,o.focused);for(const f in d)c.value.includes(f)||delete d[f];return d});o.hovered&&(we(e,"mouseenter",()=>r.value=!0),we(e,"mouseleave",()=>{r.value=!1,a.value=!1}),we(e,"mouseout",()=>{r.value=!1,a.value=!1})),o.tapped&&(U5()&&(we(e,"mousedown",()=>a.value=!0),we(e,"mouseup",()=>a.value=!1)),O5()&&(we(e,"pointerdown",()=>a.value=!0),we(e,"pointerup",()=>a.value=!1)),I5()&&(we(e,"touchstart",()=>a.value=!0),we(e,"touchend",()=>a.value=!1))),o.focused&&(we(e,"focus",()=>l.value=!0),we(e,"blur",()=>l.value=!1)),ye(u,s)}function M5({set:e,target:t,variants:n,variant:s}){const o=O(n);ye(()=>t,()=>{o&&(o.initial&&e("initial"),o.enter&&(s.value="enter"))},{immediate:!0,flush:"pre"})}function L5({state:e,apply:t}){ye(e,n=>{n&&t(n)},{immediate:!0})}function B5({target:e,variants:t,variant:n}){const s=O(t);s&&(s.visible||s.visibleOnce)&&Vv(e,([{isIntersecting:o}])=>{s.visible?o?n.value="visible":n.value="initial":s.visibleOnce&&(o&&n.value!=="visibleOnce"?n.value="visibleOnce":n.value||(n.value="initial"))})}function D5(e,t={syncVariants:!0,lifeCycleHooks:!0,visibilityHooks:!0,eventListeners:!0}){t.lifeCycleHooks&&M5(e),t.syncVariants&&L5(e),t.visibilityHooks&&B5(e),t.eventListeners&&P5(e)}function Nh(e={}){const t=qe({...e}),n=z({});return ye(t,()=>{const s={};for(const[o,r]of Object.entries(t)){const a=Yl(o),l=Rh(r,a);s[o]=l}n.value=s},{immediate:!0,deep:!0}),{state:t,style:n}}function Ql(e,t){ye(()=>rt(e),n=>{n&&t(n)},{immediate:!0})}const R5={x:"translateX",y:"translateY",z:"translateZ"};function jh(e={},t=!0){const n=qe({...e}),s=z("");return ye(n,o=>{let r="",a=!1;if(t&&(o.x||o.y||o.z)){const l=[o.x||0,o.y||0,o.z||0].map(_e.transform).join(",");r+=`translate3d(${l}) `,a=!0}for(const[l,c]of Object.entries(o)){if(t&&(l==="x"||l==="y"||l==="z"))continue;const u=Yl(l),d=Rh(c,u);r+=`${R5[l]||l}(${d}) `}t&&!a&&(r+="translateZ(0px) "),s.value=r.trim()},{immediate:!0,deep:!0}),{state:n,transform:s}}const N5=["","X","Y","Z"],j5=["perspective","translate","scale","rotate","skew"],Wh=["transformPerspective","x","y","z"];j5.forEach(e=>{N5.forEach(t=>{const n=e+t;Wh.push(n)})});const W5=new Set(Wh);function Jl(e){return W5.has(e)}const q5=new Set(["originX","originY","originZ"]);function qh(e){return q5.has(e)}function H5(e){const t={},n={};return Object.entries(e).forEach(([s,o])=>{Jl(s)||qh(s)?t[s]=o:n[s]=o}),{transform:t,style:n}}function Hh(e){const{transform:t,style:n}=H5(e),{transform:s}=jh(t),{style:o}=Nh(n);return s.value&&(o.value.transform=s.value),o.value}function V5(e,t){let n,s;const{state:o,style:r}=Nh();return Ql(e,a=>{s=a;for(const l of Object.keys(Dh))a.style[l]===null||a.style[l]===""||Jl(l)||qh(l)||(o[l]=a.style[l]);n&&Object.entries(n).forEach(([l,c])=>a.style[l]=c),t&&t(o)}),ye(r,a=>{if(!s){n=a;return}for(const l in a)s.style[l]=a[l]},{immediate:!0}),{style:o}}function z5(e){const t=e.trim().split(/\) |\)/);if(t.length===1)return{};const n=s=>s.endsWith("px")||s.endsWith("deg")?parseFloat(s):isNaN(Number(s))?Number(s):s;return t.reduce((s,o)=>{if(!o)return s;const[r,a]=o.split("("),c=a.split(",").map(d=>n(d.endsWith(")")?d.replace(")",""):d.trim())),u=c.length===1?c[0]:c;return{...s,[r]:u}},{})}function K5(e,t){Object.entries(z5(t)).forEach(([n,s])=>{const o=["x","y","z"];if(n==="translate3d"){if(s===0){o.forEach(r=>e[r]=0);return}s.forEach((r,a)=>e[o[a]]=r);return}if(s=parseFloat(s),n==="translateX"){e.x=s;return}if(n==="translateY"){e.y=s;return}if(n==="translateZ"){e.z=s;return}e[n]=s})}function G5(e,t){let n,s;const{state:o,transform:r}=jh();return Ql(e,a=>{s=a,a.style.transform&&K5(o,a.style.transform),n&&(a.style.transform=n),t&&t(o)}),ye(r,a=>{if(!s){n=a;return}s.style.transform=a},{immediate:!0}),{transform:o}}function Y5(e,t){const n=qe({}),s=a=>Object.entries(a).forEach(([l,c])=>n[l]=c),{style:o}=V5(e,s),{transform:r}=G5(e,s);return ye(n,a=>{Object.entries(a).forEach(([l,c])=>{const u=Jl(l)?r:o;u[l]&&u[l]===c||(u[l]=c)})},{immediate:!0,deep:!0}),Ql(e,()=>t&&s(t)),{motionProperties:n,style:o,transform:r}}function Z5(e={}){const t=O(e),n=z();return{state:I(()=>{if(n.value)return t[n.value]}),variant:n}}function Vh(e,t={},n){const{motionProperties:s}=Y5(e),{variant:o,state:r}=Z5(t),a=F5(s,t),l={target:e,variant:o,variants:t,state:r,motionProperties:s,...a};return D5(l,n),l}const Q5=["initial","enter","leave","visible","visible-once","hovered","tapped","focused","delay"];function J5(e,t){const n=e.props?e.props:e.data&&e.data.attrs?e.data.attrs:{};n&&(n.variants&&ka(n.variants)&&(t.value={...t.value,...n.variants}),Q5.forEach(s=>{if(s==="delay"){if(n&&n[s]&&typeof n[s]=="number"){const o=n[s];t&&t.value&&(t.value.enter&&(t.value.enter.transition||(t.value.enter.transition={}),t.value.enter.transition={delay:o,...t.value.enter.transition}),t.value.visible&&(t.value.visible.transition||(t.value.visible.transition={}),t.value.visible.transition={delay:o,...t.value.visible.transition}),t.value.visibleOnce&&(t.value.visibleOnce.transition||(t.value.visibleOnce.transition={}),t.value.visibleOnce.transition={delay:o,...t.value.visibleOnce.transition}))}return}s==="visible-once"&&(s="visibleOnce"),n&&n[s]&&ka(n[s])&&(t.value[s]=n[s])}))}function Ji(e){return{created:(n,s,o)=>{const r=s.value&&typeof s.value=="string"?s.value:o.key;r&&Yi[r]&&Yi[r].stop();const a=z(e||{});typeof s.value=="object"&&(a.value=s.value),J5(o,a);const l=Vh(n,a);n.motionInstance=l,r&&(Yi[r]=l)},getSSRProps(n,s){let{initial:o}=n.value||s&&(s==null?void 0:s.props)||{};o=O(o);const r=e4((e==null?void 0:e.initial)||{},o||{});return!r||Object.keys(r).length===0?void 0:{style:Hh(r)}}}}const X5={initial:{opacity:0},enter:{opacity:1}},e6={initial:{opacity:0},visible:{opacity:1}},t6={initial:{opacity:0},visibleOnce:{opacity:1}},n6={initial:{scale:0,opacity:0},enter:{scale:1,opacity:1}},s6={initial:{scale:0,opacity:0},visible:{scale:1,opacity:1}},o6={initial:{scale:0,opacity:0},visibleOnce:{scale:1,opacity:1}},r6={initial:{x:-100,rotate:90,opacity:0},enter:{x:0,rotate:0,opacity:1}},i6={initial:{x:-100,rotate:90,opacity:0},visible:{x:0,rotate:0,opacity:1}},a6={initial:{x:-100,rotate:90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},l6={initial:{x:100,rotate:-90,opacity:0},enter:{x:0,rotate:0,opacity:1}},c6={initial:{x:100,rotate:-90,opacity:0},visible:{x:0,rotate:0,opacity:1}},u6={initial:{x:100,rotate:-90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},d6={initial:{y:-100,rotate:-90,opacity:0},enter:{y:0,rotate:0,opacity:1}},f6={initial:{y:-100,rotate:-90,opacity:0},visible:{y:0,rotate:0,opacity:1}},p6={initial:{y:-100,rotate:-90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},h6={initial:{y:100,rotate:90,opacity:0},enter:{y:0,rotate:0,opacity:1}},m6={initial:{y:100,rotate:90,opacity:0},visible:{y:0,rotate:0,opacity:1}},g6={initial:{y:100,rotate:90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},y6={initial:{x:-100,opacity:0},enter:{x:0,opacity:1}},v6={initial:{x:-100,opacity:0},visible:{x:0,opacity:1}},_6={initial:{x:-100,opacity:0},visibleOnce:{x:0,opacity:1}},b6={initial:{x:100,opacity:0},enter:{x:0,opacity:1}},w6={initial:{x:100,opacity:0},visible:{x:0,opacity:1}},x6={initial:{x:100,opacity:0},visibleOnce:{x:0,opacity:1}},k6={initial:{y:-100,opacity:0},enter:{y:0,opacity:1}},S6={initial:{y:-100,opacity:0},visible:{y:0,opacity:1}},T6={initial:{y:-100,opacity:0},visibleOnce:{y:0,opacity:1}},E6={initial:{y:100,opacity:0},enter:{y:0,opacity:1}},C6={initial:{y:100,opacity:0},visible:{y:0,opacity:1}},A6={initial:{y:100,opacity:0},visibleOnce:{y:0,opacity:1}},el={__proto__:null,fade:X5,fadeVisible:e6,fadeVisibleOnce:t6,pop:n6,popVisible:s6,popVisibleOnce:o6,rollBottom:h6,rollLeft:r6,rollRight:l6,rollTop:d6,rollVisibleBottom:m6,rollVisibleLeft:i6,rollVisibleOnceBottom:g6,rollVisibleOnceLeft:a6,rollVisibleOnceRight:u6,rollVisibleOnceTop:p6,rollVisibleRight:c6,rollVisibleTop:f6,slideBottom:E6,slideLeft:y6,slideRight:b6,slideTop:k6,slideVisibleBottom:C6,slideVisibleLeft:v6,slideVisibleOnceBottom:A6,slideVisibleOnceLeft:_6,slideVisibleOnceRight:x6,slideVisibleOnceTop:T6,slideVisibleRight:w6,slideVisibleTop:S6},$6=ke({props:{is:{type:[String,Object],required:!1},preset:{type:String,required:!1},instance:{type:Object,required:!1},variants:{type:Object,required:!1},initial:{type:Object,required:!1},enter:{type:Object,required:!1},leave:{type:Object,required:!1},visible:{type:Object,required:!1},visibleOnce:{type:Object,required:!1},hovered:{type:Object,required:!1},tapped:{type:Object,required:!1},focused:{type:Object,required:!1},delay:{type:[Number,String],required:!1}},setup(e){var l;const t=zg(),n=qe({});if(!e.is&&!t.default)return()=>Je("div",{});const s=I(()=>{let c;return e.preset&&(c=el[e.preset]),c}),o=I(()=>({initial:e.initial,enter:e.enter,leave:e.leave,visible:e.visible,visibleOnce:e.visibleOnce,hovered:e.hovered,tapped:e.tapped,focused:e.focused})),r=I(()=>{const c={...o.value,...s.value||{},...e.variants||{}};return e.delay&&(c.enter.transition={...c.enter.transition},c.enter.transition.delay=parseInt(e.delay)),c}),a=I(()=>{if(!e.is)return;let c=e.is;return typeof a.value=="string"&&!Td(c)&&(c=Ns(c)),c});if(((l=process==null?void 0:process.env)==null?void 0:l.NODE_ENV)==="development"||process!=null&&process.dev){const c=u=>{var d;(d=u.variants)!=null&&d.initial&&u.set("initial"),setTimeout(()=>{var f,p,h;(f=u.variants)!=null&&f.enter&&u.apply("enter"),(p=u.variants)!=null&&p.visible&&u.apply("visible"),(h=u.variants)!=null&&h.visibleOnce&&u.apply("visibleOnce")},10)};fi(()=>Object.entries(n).forEach(([u,d])=>c(d)))}return{slots:t,component:a,motionConfig:r,instances:n}},render({slots:e,motionConfig:t,instances:n,component:s}){var l;const o=Hh(t.initial||{}),r=(c,u)=>(c.props||(c.props={}),c.props.style=o,c.props.onVnodeMounted=({el:d})=>{const f=Vh(d,t);n[u]=f},c);if(s){const c=Je(s,void 0,e);return r(c,0),c}return(((l=e.default)==null?void 0:l.call(e))||[]).map((c,u)=>r(c,u))}});function F6(e){const t="àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;",n="aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------",s=new RegExp(t.split("").join("|"),"g");return e.toString().replace(/[A-Z]/g,o=>`-${o}`).toLowerCase().replace(/\s+/g,"-").replace(s,o=>n.charAt(t.indexOf(o))).replace(/&/g,"-and-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}const O6={install(e,t){if(e.directive("motion",Ji()),e.component("Motion",$6),!t||t&&!t.excludePresets)for(const n in el){const s=el[n];e.directive(`motion-${F6(n)}`,Ji(s))}if(t&&t.directives)for(const n in t.directives){const s=t.directives[n];s.initial,e.directive(`motion-${n}`,Ji(s))}}};var ad;const Eo=typeof window<"u",I6=Object.prototype.toString,U6=e=>I6.call(e)==="[object Object]";Eo&&((ad=window==null?void 0:window.navigator)!=null&&ad.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function P6(e){return il()?($d(e),!0):!1}function M6(e){var t;const n=O(e);return(t=n==null?void 0:n.$el)!=null?t:n}const L6=Eo?window:void 0,ld=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},cd="__vueuse_ssr_handlers__";ld[cd]=ld[cd]||{};function B6(e,t={}){const{immediate:n=!0,window:s=L6}=t,o=z(!1);let r=null;function a(){!o.value||!s||(e(),r=s.requestAnimationFrame(a))}function l(){!o.value&&s&&(o.value=!0,a())}function c(){o.value=!1,r!=null&&s&&(s.cancelAnimationFrame(r),r=null)}return n&&l(),P6(c),{isActive:o,pause:c,resume:l}}var ud;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(ud||(ud={}));const wi="vue-starport-injection",zh="vue-starport-options",D6={duration:800,easing:"cubic-bezier(0.45, 0, 0.55, 1)",keepAlive:!1},Kh={port:{type:String,required:!0},duration:{type:Number,required:!1},easing:{type:String,required:!1},keepAlive:{type:Boolean,required:!1,default:void 0},mountedProps:{type:Object,required:!1},initialProps:{type:Object,required:!1}};var R6=Object.defineProperty,ei=Object.getOwnPropertySymbols,Gh=Object.prototype.hasOwnProperty,Yh=Object.prototype.propertyIsEnumerable,dd=(e,t,n)=>t in e?R6(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,N6=(e,t)=>{for(var n in t||(t={}))Gh.call(t,n)&&dd(e,n,t[n]);if(ei)for(var n of ei(t))Yh.call(t,n)&&dd(e,n,t[n]);return e},fd=(e,t)=>{var n={};for(var s in e)Gh.call(e,s)&&t.indexOf(s)<0&&(n[s]=e[s]);if(e!=null&&ei)for(var s of ei(e))t.indexOf(s)<0&&Yh.call(e,s)&&(n[s]=e[s]);return n};const j6=ke({name:"StarportProxy",props:N6({props:{type:Object,default:()=>({})},component:{type:Object,required:!0}},Kh),setup(e,t){const n=R(wi),s=I(()=>n.getInstance(e.port,e.component)),o=z(),r=s.value.generateId(),a=z(!1);return s.value.isVisible||(s.value.land(),a.value=!0),Hn(async()=>{if(s.value.el){console.error(`[Vue Starport] Multiple proxies of "${s.value.componentName}" with port "${e.port}" detected. The later one will be ignored.`);return}if(s.value.el=o.value,await ot(),a.value=!0,s.value.rect.update(),s.value.rect.width===0||s.value.rect.height===0){const l=s.value.rect.width===0?"width":"height";console.warn(`[Vue Starport] The proxy of component "${s.value.componentName}" (port "${e.port}") has no ${l} on initial render, have you set the size for it?`),console.warn("element:",s.value.el),console.warn("rect:",s.value.rect)}}),Ko(async()=>{s.value.rect.update(),s.value.liftOff(),s.value.el=void 0,a.value=!1,!s.value.options.keepAlive&&(await ot(),await ot(),!s.value.el&&n.dispose(s.value.port))}),ye(()=>e,async()=>{s.value.props&&await ot();const l=e,{props:c}=l,u=fd(l,["props"]);s.value.props=c||{},s.value.setLocalOptions(u)},{deep:!0,immediate:!0}),()=>{const l=e,{initialProps:c,mountedProps:u}=l,d=fd(l,["initialProps","mountedProps"]),f=Vt(d,(a.value?u:c)||{});return Je("div",Vt(f,{id:r,ref:o,"data-starport-proxy":s.value.componentId,"data-starport-landed":s.value.isLanded?"true":void 0,"data-starport-floating":s.value.isLanded?void 0:"true"}),t.slots.default?Je(t.slots.default):void 0)}}});var W6=Object.defineProperty,q6=Object.defineProperties,H6=Object.getOwnPropertyDescriptors,pd=Object.getOwnPropertySymbols,V6=Object.prototype.hasOwnProperty,z6=Object.prototype.propertyIsEnumerable,hd=(e,t,n)=>t in e?W6(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,K6=(e,t)=>{for(var n in t||(t={}))V6.call(t,n)&&hd(e,n,t[n]);if(pd)for(var n of pd(t))z6.call(t,n)&&hd(e,n,t[n]);return e},G6=(e,t)=>q6(e,H6(t));const Y6=ke({name:"Starport",inheritAttrs:!0,props:Kh,setup(e,t){const n=z(!1);return Hn(()=>{if(n.value=!0,!R(wi))throw new Error("[Vue Starport] Failed to find the carrier, all Starport components must be wrapped in a <StarportCarrier> component.")}),()=>{var a,l;const s=(l=(a=t.slots).default)==null?void 0:l.call(a);if(!s)throw new Error("[Vue Starport] Slot is required to use <Starport>");if(s.length!==1)throw new Error(`[Vue Starport] <Starport> requires exactly one slot, but got ${s.length}`);const o=s[0];let r=o.type;return(!U6(r)||an(r))&&(r={render(){return s}}),Je(j6,G6(K6({},e),{key:e.port,component:ii(r),props:o.props}))}}});function Z6(e){const t=qe({height:0,width:0,left:0,top:0,update:s,listen:r,pause:a,margin:"0px",padding:"0px"}),n=Eo?document.documentElement||document.body:void 0;function s(){if(!Eo)return;const l=M6(e);if(!l)return;const{height:c,width:u,left:d,top:f}=l.getBoundingClientRect(),p=window.getComputedStyle(l),h=p.margin,m=p.padding;Object.assign(t,{height:c,width:u,left:d,top:n.scrollTop+f,margin:h,padding:m})}const o=B6(s,{immediate:!1});function r(){Eo&&(s(),o.resume())}function a(){o.pause()}return t}let Q6=(e,t=21)=>(n=t)=>{let s="",o=n;for(;o--;)s+=e[Math.random()*e.length|0];return s};const md=Q6("abcdefghijklmnopqrstuvwxyz",5);function gd(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase().replace(/[^\w\d_-]/g,"")}function J6(e){var t;return e.name||((t=e.__file)==null?void 0:t.split(/[\/\\.]/).slice(-2)[0])||""}var X6=Object.defineProperty,yd=Object.getOwnPropertySymbols,eO=Object.prototype.hasOwnProperty,tO=Object.prototype.propertyIsEnumerable,vd=(e,t,n)=>t in e?X6(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Xi=(e,t)=>{for(var n in t||(t={}))eO.call(t,n)&&vd(e,n,t[n]);if(yd)for(var n of yd(t))tO.call(t,n)&&vd(e,n,t[n]);return e};function nO(e,t,n={}){const s=J6(t),o=gd(s)||md(),r=z(),a=z(null),l=z(!1),c=z(!1),u=pm(!0),d=z({}),f=I(()=>Xi(Xi(Xi({},D6),n),d.value)),p=z(0);let h;u.run(()=>{h=Z6(r),ye(r,async x=>{x&&(c.value=!0),await ot(),r.value||(c.value=!1)})});const m=gd(e);function _(){return`starport-${o}-${m}-${md()}`}const k=_();return qe({el:r,id:k,port:e,props:a,rect:h,scope:u,isLanded:l,isVisible:c,options:f,liftOffTime:p,component:t,componentName:s,componentId:o,generateId:_,setLocalOptions(x={}){d.value=JSON.parse(JSON.stringify(x))},elRef(){return r},liftOff(){l.value&&(l.value=!1,p.value=Date.now(),h.listen())},land(){l.value||(l.value=!0,h.pause())}})}function sO(e){const t=qe(new Map);function n(o,r){let a=t.get(o);return a||(a=nO(o,r,e),t.set(o,a)),a.component=r,a}function s(o){var r;(r=t.get(o))==null||r.scope.stop(),t.delete(o)}return{portMap:t,dispose:s,getInstance:n}}var oO=Object.defineProperty,rO=Object.defineProperties,iO=Object.getOwnPropertyDescriptors,_d=Object.getOwnPropertySymbols,aO=Object.prototype.hasOwnProperty,lO=Object.prototype.propertyIsEnumerable,bd=(e,t,n)=>t in e?oO(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,cO=(e,t)=>{for(var n in t||(t={}))aO.call(t,n)&&bd(e,n,t[n]);if(_d)for(var n of _d(t))lO.call(t,n)&&bd(e,n,t[n]);return e},uO=(e,t)=>rO(e,iO(t));const dO=ke({name:"StarportCraft",props:{port:{type:String,required:!0},component:{type:Object,required:!0}},setup(e){const t=R(wi);if(!t)throw new Error("[Vue Starport] Failed to find the carrier, all Starport components must be wrapped in a <StarportCarrier> component.");const n=I(()=>t.getInstance(e.port,e.component)),s=I(()=>{var a;return((a=n.value.el)==null?void 0:a.id)||n.value.id}),o=I(()=>{const a=Date.now()-n.value.liftOffTime,l=Math.max(0,n.value.options.duration-a),c=n.value.rect,u={position:"absolute",left:0,top:0,width:`${c.width}px`,height:`${c.height}px`,margin:c.margin,padding:c.padding,transform:`translate3d(${c.left}px,${c.top}px,0px)`};return!n.value.isVisible||!n.value.el?uO(cO({},u),{zIndex:-1,display:"none"}):(n.value.isLanded?u.display="none":Object.assign(u,{transitionProperty:"all",transitionDuration:`${l}ms`,transitionTimingFunction:n.value.options.easing}),u)}),r={onTransitionend(a){n.value.isLanded||console.warn(`[Vue Starport] Transition duration of component "${n.value.componentName}" is too short (${a.elapsedTime}s) that may cause animation glitches. Try to increase the duration of that component, or decrease the duration the Starport (current: ${n.value.options.duration/1e3}s).`)}};return()=>{const a=!!(n.value.isLanded&&n.value.el);return Je("div",{style:o.value,"data-starport-craft":n.value.componentId,"data-starport-landed":n.value.isLanded?"true":void 0,"data-starport-floating":n.value.isLanded?void 0:"true",onTransitionend:n.value.land},Je(by,{to:a?`#${s.value}`:"body",disabled:!a},Je(n.value.component,Vt(r,n.value.props))))}}}),fO=ke({name:"StarportCarrier",setup(e,{slots:t}){const n=sO(R(zh,{}));return $t().appContext.app.provide(wi,n),()=>{var o;return[(o=t.default)==null?void 0:o.call(t),Array.from(n.portMap.entries()).map(([r,{component:a}])=>Je(dO,{key:r,port:r,component:a}))]}}});function pO(e={}){return{install(t){t.provide(zh,e),t.component("Starport",Y6),t.component("StarportCarrier",fO)}}}function hO(e){function t(){document.documentElement.style.setProperty("--vh",`${window.innerHeight*.01}px`)}t(),window.addEventListener("resize",t),e.app.use(O6),e.app.use(pO({keepAlive:!0}))}function xt(e,t,n){var s;return((s=e.instance)==null?void 0:s.$).provides[t]??n}function mO(){return{install(e){e.directive("click",{name:"v-click",mounted(t,n){var d,f,p,h,m,_;if(xo.value||(d=xt(n,vo))!=null&&d.value)return;const s=xt(n,ss),o=xt(n,yo),r=xt(n,wa),a=n.modifiers.hide!==!1&&n.modifiers.hide!=null,l=n.modifiers.fade!==!1&&n.modifiers.fade!=null,c=((f=s==null?void 0:s.value)==null?void 0:f.length)||0,u=l?m1:Ui;if(s&&!((p=s==null?void 0:s.value)!=null&&p.includes(t))&&s.value.push(t),n.value==null&&(n.value=(h=s==null?void 0:s.value)==null?void 0:h.length),typeof n.value=="string"&&(n.value.startsWith("+")||n.value.startsWith("-"))&&(n.value=(((m=s==null?void 0:s.value)==null?void 0:m.length)||0)+Number(n.value)),!(r!=null&&r.value.has(n.value)))r==null||r.value.set(n.value,[t]);else if(!((_=r==null?void 0:r.value.get(n.value))!=null&&_.includes(t))){const k=(r==null?void 0:r.value.get(n.value))||[];r==null||r.value.set(n.value,[t].concat(k))}t==null||t.classList.toggle(Xn,!0),o&&ye(o,()=>{const k=(o==null?void 0:o.value)??0,x=n.value!=null?k>=n.value:k>c;t.classList.contains(Pi)||t.classList.toggle(u,!x),a!==!1&&a!==void 0&&t.classList.toggle(u,x),t.classList.toggle(Xs,!1);const S=r==null?void 0:r.value.get(k);S==null||S.forEach((b,T)=>{b.classList.toggle(dr,!1),T===S.length-1?b.classList.toggle(Xs,!0):b.classList.toggle(dr,!0)}),t.classList.contains(Xs)||t.classList.toggle(dr,x)},{immediate:!0})},unmounted(t,n){t==null||t.classList.toggle(Xn,!1);const s=xt(n,ss);s!=null&&s.value&&xa(s.value,t)}}),e.directive("after",{name:"v-after",mounted(t,n){var l,c,u;if(xo.value||(l=xt(n,vo))!=null&&l.value)return;const s=xt(n,ss),o=xt(n,yo),r=xt(n,wa),a=s==null?void 0:s.value.length;n.value==null&&(n.value=s==null?void 0:s.value.length),typeof n.value=="string"&&(n.value.startsWith("+")||n.value.startsWith("-"))&&(n.value=(((c=s==null?void 0:s.value)==null?void 0:c.length)||0)+Number(n.value)),r!=null&&r.value.has(n.value)?(u=r==null?void 0:r.value.get(n.value))==null||u.push(t):r==null||r.value.set(n.value,[t]),t==null||t.classList.toggle(Xn,!0),o&&ye(o,()=>{const d=(o.value??0)>=(n.value??a??0);t.classList.contains(Pi)||t.classList.toggle(Ui,!d),t.classList.toggle(Xs,!1),t.classList.contains(Xs)||t.classList.toggle(dr,d)},{immediate:!0})},unmounted(t){t==null||t.classList.toggle(Xn,!0)}}),e.directive("click-hide",{name:"v-click-hide",mounted(t,n){var a,l,c;if(xo.value||(a=xt(n,vo))!=null&&a.value)return;const s=xt(n,ss),o=xt(n,yo),r=((l=s==null?void 0:s.value)==null?void 0:l.length)||0;s&&!((c=s==null?void 0:s.value)!=null&&c.includes(t))&&s.value.push(t),t==null||t.classList.toggle(Xn,!0),o&&ye(o,()=>{const u=(o==null?void 0:o.value)??0,d=n.value!=null?u>=n.value:u>r;t.classList.toggle(Ui,d),t.classList.toggle(Pi,d)},{immediate:!0})},unmounted(t,n){t==null||t.classList.toggle(Xn,!1);const s=xt(n,ss);s!=null&&s.value&&xa(s.value,t)}})}}}function gO(e,t){const n=th(e),s=nh(t,n.currentRoute,n.currentPage);return{nav:{...n,...s},configs:$e,themeConfigs:I(()=>$e.themeConfig)}}function yO(){return{install(e){const t=gO(Bt,Mt);e.provide(K,qe(t))}}}const Ks=v0(JF);Ks.use(bt);Ks.use(f1());Ks.use(mO());Ks.use(yO());hO({app:Ks,router:bt});Ks.mount("#app");export{B2 as $,t2 as A,z as B,wO as C,ft as D,De as E,Ae as F,ww as G,VF as H,Mt as I,Qr as J,NF as K,Hi as L,Hn as M,qe as N,_O as O,xO as P,ye as Q,W as R,Mp as S,Fe as T,dt as U,Pw as V,wg as W,xg as X,Lo as Y,Ni as Z,G as _,K as a,Ul as a0,Pl as a1,I2 as a2,He as a3,Mx as a4,vO as a5,mt as a6,io as a7,gr as a8,ls as a9,tn as aa,Pa as ab,lw as ac,cw as ad,uw as ae,fw as af,Xt as ag,Df as ah,kO as ai,ht as aj,gk as ak,Yf as al,pw as am,Ko as an,Gf as b,$e as c,ke as d,Jm as e,$ as f,i as g,O as h,R as i,Ge as j,LF as k,v as l,Y as m,Xe as n,w as o,ge as p,Cl as q,ks as r,Kt as s,bn as t,bO as u,I as v,Mi as w,H as x,Cp as y,i2 as z};
