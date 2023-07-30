(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const a of l.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function s(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerPolicy&&(l.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?l.credentials="include":r.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function o(r){if(r.ep)return;r.ep=!0;const l=s(r);fetch(r.href,l)}})();function Kn(e,n){const s=Object.create(null),o=e.split(",");for(let r=0;r<o.length;r++)s[o[r]]=!0;return n?r=>!!s[r.toLowerCase()]:r=>!!s[r]}const Le=Object.freeze({}),Ms=Object.freeze([]),xt=()=>{},xp=()=>!1,ey=/^on[^a-z]/,zo=e=>ey.test(e),Dr=e=>e.startsWith("onUpdate:"),qe=Object.assign,ti=(e,n)=>{const s=e.indexOf(n);s>-1&&e.splice(s,1)},ty=Object.prototype.hasOwnProperty,Be=(e,n)=>ty.call(e,n),ae=Array.isArray,hs=e=>Ko(e)==="[object Map]",wp=e=>Ko(e)==="[object Set]",ny=e=>Ko(e)==="[object RegExp]",pe=e=>typeof e=="function",je=e=>typeof e=="string",ni=e=>typeof e=="symbol",$e=e=>e!==null&&typeof e=="object",si=e=>$e(e)&&pe(e.then)&&pe(e.catch),Ap=Object.prototype.toString,Ko=e=>Ap.call(e),oi=e=>Ko(e).slice(8,-1),Cp=e=>Ko(e)==="[object Object]",ri=e=>je(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,br=Kn(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),sy=Kn("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"),tl=e=>{const n=Object.create(null);return s=>n[s]||(n[s]=e(s))},oy=/-(\w)/g,ln=tl(e=>e.replace(oy,(n,s)=>s?s.toUpperCase():"")),ry=/\B([A-Z])/g,wn=tl(e=>e.replace(ry,"-$1").toLowerCase()),ws=tl(e=>e.charAt(0).toUpperCase()+e.slice(1)),ns=tl(e=>e?`on${ws(e)}`:""),So=(e,n)=>!Object.is(e,n),os=(e,n)=>{for(let s=0;s<e.length;s++)e[s](n)},Tr=(e,n,s)=>{Object.defineProperty(e,n,{configurable:!0,enumerable:!1,value:s})},ly=e=>{const n=parseFloat(e);return isNaN(n)?e:n},ay=e=>{const n=je(e)?Number(e):NaN;return isNaN(n)?e:n};let nc;const $r=()=>nc||(nc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function et(e){if(ae(e)){const n={};for(let s=0;s<e.length;s++){const o=e[s],r=je(o)?py(o):et(o);if(r)for(const l in r)n[l]=r[l]}return n}else{if(je(e))return e;if($e(e))return e}}const iy=/;(?![^(]*\))/g,cy=/:([^]+)/,uy=/\/\*[^]*?\*\//g;function py(e){const n={};return e.replace(uy,"").split(iy).forEach(s=>{if(s){const o=s.split(cy);o.length>1&&(n[o[0].trim()]=o[1].trim())}}),n}function Re(e){let n="";if(je(e))n=e;else if(ae(e))for(let s=0;s<e.length;s++){const o=Re(e[s]);o&&(n+=o+" ")}else if($e(e))for(const s in e)e[s]&&(n+=s+" ");return n.trim()}function le(e){if(!e)return null;let{class:n,style:s}=e;return n&&!je(n)&&(e.class=Re(n)),s&&(e.style=et(s)),e}const dy="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",fy="svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view",Bp=Kn(dy),hy=Kn(fy),yy="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",my=Kn(yy);function kp(e){return!!e||e===""}const An=e=>je(e)?e:e==null?"":ae(e)||$e(e)&&(e.toString===Ap||!pe(e.toString))?JSON.stringify(e,Ep,2):String(e),Ep=(e,n)=>n&&n.__v_isRef?Ep(e,n.value):hs(n)?{[`Map(${n.size})`]:[...n.entries()].reduce((s,[o,r])=>(s[`${o} =>`]=r,s),{})}:wp(n)?{[`Set(${n.size})`]:[...n.values()]}:$e(n)&&!ae(n)&&!Cp(n)?String(n):n;function Or(e,...n){console.warn(`[Vue warn] ${e}`,...n)}let Et;class Fp{constructor(n=!1){this.detached=n,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Et,!n&&Et&&(this.index=(Et.scopes||(Et.scopes=[])).push(this)-1)}get active(){return this._active}run(n){if(this._active){const s=Et;try{return Et=this,n()}finally{Et=s}}else Or("cannot run an inactive effect scope.")}on(){Et=this}off(){Et=this.parent}stop(n){if(this._active){let s,o;for(s=0,o=this.effects.length;s<o;s++)this.effects[s].stop();for(s=0,o=this.cleanups.length;s<o;s++)this.cleanups[s]();if(this.scopes)for(s=0,o=this.scopes.length;s<o;s++)this.scopes[s].stop(!0);if(!this.detached&&this.parent&&!n){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function gy(e){return new Fp(e)}function _y(e,n=Et){n&&n.active&&n.effects.push(e)}function li(){return Et}function Sp(e){Et?Et.cleanups.push(e):Or("onScopeDispose() is called when there is no active effect scope to be associated with.")}const ai=e=>{const n=new Set(e);return n.w=0,n.n=0,n},Dp=e=>(e.w&Wn)>0,Tp=e=>(e.n&Wn)>0,vy=({deps:e})=>{if(e.length)for(let n=0;n<e.length;n++)e[n].w|=Wn},by=e=>{const{deps:n}=e;if(n.length){let s=0;for(let o=0;o<n.length;o++){const r=n[o];Dp(r)&&!Tp(r)?r.delete(e):n[s++]=r,r.w&=~Wn,r.n&=~Wn}n.length=s}},Ur=new WeakMap;let co=0,Wn=1;const ea=30;let yt;const ys=Symbol("iterate"),ta=Symbol("Map key iterate");class ii{constructor(n,s=null,o){this.fn=n,this.scheduler=s,this.active=!0,this.deps=[],this.parent=void 0,_y(this,o)}run(){if(!this.active)return this.fn();let n=yt,s=Pn;for(;n;){if(n===this)return;n=n.parent}try{return this.parent=yt,yt=this,Pn=!0,Wn=1<<++co,co<=ea?vy(this):sc(this),this.fn()}finally{co<=ea&&by(this),Wn=1<<--co,yt=this.parent,Pn=s,this.parent=void 0,this.deferStop&&this.stop()}}stop(){yt===this?this.deferStop=!0:this.active&&(sc(this),this.onStop&&this.onStop(),this.active=!1)}}function sc(e){const{deps:n}=e;if(n.length){for(let s=0;s<n.length;s++)n[s].delete(e);n.length=0}}let Pn=!0;const $p=[];function Cs(){$p.push(Pn),Pn=!1}function Bs(){const e=$p.pop();Pn=e===void 0?!0:e}function ut(e,n,s){if(Pn&&yt){let o=Ur.get(e);o||Ur.set(e,o=new Map);let r=o.get(s);r||o.set(s,r=ai()),Op(r,{effect:yt,target:e,type:n,key:s})}}function Op(e,n){let s=!1;co<=ea?Tp(e)||(e.n|=Wn,s=!Dp(e)):s=!e.has(yt),s&&(e.add(yt),yt.deps.push(e),yt.onTrack&&yt.onTrack(qe({effect:yt},n)))}function an(e,n,s,o,r,l){const a=Ur.get(e);if(!a)return;let i=[];if(n==="clear")i=[...a.values()];else if(s==="length"&&ae(e)){const u=Number(o);a.forEach((p,d)=>{(d==="length"||d>=u)&&i.push(p)})}else switch(s!==void 0&&i.push(a.get(s)),n){case"add":ae(e)?ri(s)&&i.push(a.get("length")):(i.push(a.get(ys)),hs(e)&&i.push(a.get(ta)));break;case"delete":ae(e)||(i.push(a.get(ys)),hs(e)&&i.push(a.get(ta)));break;case"set":hs(e)&&i.push(a.get(ys));break}const c={target:e,type:n,key:s,newValue:o,oldValue:r,oldTarget:l};if(i.length===1)i[0]&&na(i[0],c);else{const u=[];for(const p of i)p&&u.push(...p);na(ai(u),c)}}function na(e,n){const s=ae(e)?e:[...e];for(const o of s)o.computed&&oc(o,n);for(const o of s)o.computed||oc(o,n)}function oc(e,n){(e!==yt||e.allowRecurse)&&(e.onTrigger&&e.onTrigger(qe({effect:e},n)),e.scheduler?e.scheduler():e.run())}function xy(e,n){var s;return(s=Ur.get(e))==null?void 0:s.get(n)}const wy=Kn("__proto__,__v_isRef,__isVue"),Up=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(ni)),Ay=nl(),Cy=nl(!1,!0),By=nl(!0),ky=nl(!0,!0),rc=Ey();function Ey(){const e={};return["includes","indexOf","lastIndexOf"].forEach(n=>{e[n]=function(...s){const o=he(this);for(let l=0,a=this.length;l<a;l++)ut(o,"get",l+"");const r=o[n](...s);return r===-1||r===!1?o[n](...s.map(he)):r}}),["push","pop","shift","unshift","splice"].forEach(n=>{e[n]=function(...s){Cs();const o=he(this)[n].apply(this,s);return Bs(),o}}),e}function Fy(e){const n=he(this);return ut(n,"has",e),n.hasOwnProperty(e)}function nl(e=!1,n=!1){return function(o,r,l){if(r==="__v_isReactive")return!e;if(r==="__v_isReadonly")return e;if(r==="__v_isShallow")return n;if(r==="__v_raw"&&l===(e?n?jp:qp:n?Np:Rp).get(o))return o;const a=ae(o);if(!e){if(a&&Be(rc,r))return Reflect.get(rc,r,l);if(r==="hasOwnProperty")return Fy}const i=Reflect.get(o,r,l);return(ni(r)?Up.has(r):wy(r))||(e||ut(o,"get",r),n)?i:De(i)?a&&ri(r)?i:i.value:$e(i)?e?zt(i):We(i):i}}const Sy=Pp(),Dy=Pp(!0);function Pp(e=!1){return function(s,o,r,l){let a=s[o];if(Hn(a)&&De(a)&&!De(r))return!1;if(!e&&(!Pr(r)&&!Hn(r)&&(a=he(a),r=he(r)),!ae(s)&&De(a)&&!De(r)))return a.value=r,!0;const i=ae(s)&&ri(o)?Number(o)<s.length:Be(s,o),c=Reflect.set(s,o,r,l);return s===he(l)&&(i?So(r,a)&&an(s,"set",o,r,a):an(s,"add",o,r)),c}}function Ty(e,n){const s=Be(e,n),o=e[n],r=Reflect.deleteProperty(e,n);return r&&s&&an(e,"delete",n,void 0,o),r}function $y(e,n){const s=Reflect.has(e,n);return(!ni(n)||!Up.has(n))&&ut(e,"has",n),s}function Oy(e){return ut(e,"iterate",ae(e)?"length":ys),Reflect.ownKeys(e)}const Ip={get:Ay,set:Sy,deleteProperty:Ty,has:$y,ownKeys:Oy},Mp={get:By,set(e,n){return Or(`Set operation on key "${String(n)}" failed: target is readonly.`,e),!0},deleteProperty(e,n){return Or(`Delete operation on key "${String(n)}" failed: target is readonly.`,e),!0}},Uy=qe({},Ip,{get:Cy,set:Dy}),Py=qe({},Mp,{get:ky}),ci=e=>e,sl=e=>Reflect.getPrototypeOf(e);function nr(e,n,s=!1,o=!1){e=e.__v_raw;const r=he(e),l=he(n);s||(n!==l&&ut(r,"get",n),ut(r,"get",l));const{has:a}=sl(r),i=o?ci:s?ui:Do;if(a.call(r,n))return i(e.get(n));if(a.call(r,l))return i(e.get(l));e!==r&&e.get(n)}function sr(e,n=!1){const s=this.__v_raw,o=he(s),r=he(e);return n||(e!==r&&ut(o,"has",e),ut(o,"has",r)),e===r?s.has(e):s.has(e)||s.has(r)}function or(e,n=!1){return e=e.__v_raw,!n&&ut(he(e),"iterate",ys),Reflect.get(e,"size",e)}function lc(e){e=he(e);const n=he(this);return sl(n).has.call(n,e)||(n.add(e),an(n,"add",e,e)),this}function ac(e,n){n=he(n);const s=he(this),{has:o,get:r}=sl(s);let l=o.call(s,e);l?Lp(s,o,e):(e=he(e),l=o.call(s,e));const a=r.call(s,e);return s.set(e,n),l?So(n,a)&&an(s,"set",e,n,a):an(s,"add",e,n),this}function ic(e){const n=he(this),{has:s,get:o}=sl(n);let r=s.call(n,e);r?Lp(n,s,e):(e=he(e),r=s.call(n,e));const l=o?o.call(n,e):void 0,a=n.delete(e);return r&&an(n,"delete",e,void 0,l),a}function cc(){const e=he(this),n=e.size!==0,s=hs(e)?new Map(e):new Set(e),o=e.clear();return n&&an(e,"clear",void 0,void 0,s),o}function rr(e,n){return function(o,r){const l=this,a=l.__v_raw,i=he(a),c=n?ci:e?ui:Do;return!e&&ut(i,"iterate",ys),a.forEach((u,p)=>o.call(r,c(u),c(p),l))}}function lr(e,n,s){return function(...o){const r=this.__v_raw,l=he(r),a=hs(l),i=e==="entries"||e===Symbol.iterator&&a,c=e==="keys"&&a,u=r[e](...o),p=s?ci:n?ui:Do;return!n&&ut(l,"iterate",c?ta:ys),{next(){const{value:d,done:h}=u.next();return h?{value:d,done:h}:{value:i?[p(d[0]),p(d[1])]:p(d),done:h}},[Symbol.iterator](){return this}}}}function kn(e){return function(...n){{const s=n[0]?`on key "${n[0]}" `:"";console.warn(`${ws(e)} operation ${s}failed: target is readonly.`,he(this))}return e==="delete"?!1:this}}function Iy(){const e={get(l){return nr(this,l)},get size(){return or(this)},has:sr,add:lc,set:ac,delete:ic,clear:cc,forEach:rr(!1,!1)},n={get(l){return nr(this,l,!1,!0)},get size(){return or(this)},has:sr,add:lc,set:ac,delete:ic,clear:cc,forEach:rr(!1,!0)},s={get(l){return nr(this,l,!0)},get size(){return or(this,!0)},has(l){return sr.call(this,l,!0)},add:kn("add"),set:kn("set"),delete:kn("delete"),clear:kn("clear"),forEach:rr(!0,!1)},o={get(l){return nr(this,l,!0,!0)},get size(){return or(this,!0)},has(l){return sr.call(this,l,!0)},add:kn("add"),set:kn("set"),delete:kn("delete"),clear:kn("clear"),forEach:rr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(l=>{e[l]=lr(l,!1,!1),s[l]=lr(l,!0,!1),n[l]=lr(l,!1,!0),o[l]=lr(l,!0,!0)}),[e,s,n,o]}const[My,Ly,Ry,Ny]=Iy();function ol(e,n){const s=n?e?Ny:Ry:e?Ly:My;return(o,r,l)=>r==="__v_isReactive"?!e:r==="__v_isReadonly"?e:r==="__v_raw"?o:Reflect.get(Be(s,r)&&r in o?s:o,r,l)}const qy={get:ol(!1,!1)},jy={get:ol(!1,!0)},Wy={get:ol(!0,!1)},Hy={get:ol(!0,!0)};function Lp(e,n,s){const o=he(s);if(o!==s&&n.call(e,o)){const r=oi(e);console.warn(`Reactive ${r} contains both the raw and reactive versions of the same object${r==="Map"?" as keys":""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`)}}const Rp=new WeakMap,Np=new WeakMap,qp=new WeakMap,jp=new WeakMap;function Vy(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function zy(e){return e.__v_skip||!Object.isExtensible(e)?0:Vy(oi(e))}function We(e){return Hn(e)?e:rl(e,!1,Ip,qy,Rp)}function Ky(e){return rl(e,!1,Uy,jy,Np)}function zt(e){return rl(e,!0,Mp,Wy,qp)}function uo(e){return rl(e,!0,Py,Hy,jp)}function rl(e,n,s,o,r){if(!$e(e))return console.warn(`value cannot be made reactive: ${String(e)}`),e;if(e.__v_raw&&!(n&&e.__v_isReactive))return e;const l=r.get(e);if(l)return l;const a=zy(e);if(a===0)return e;const i=new Proxy(e,a===2?o:s);return r.set(e,i),i}function ms(e){return Hn(e)?ms(e.__v_raw):!!(e&&e.__v_isReactive)}function Hn(e){return!!(e&&e.__v_isReadonly)}function Pr(e){return!!(e&&e.__v_isShallow)}function Ir(e){return ms(e)||Hn(e)}function he(e){const n=e&&e.__v_raw;return n?he(n):e}function ll(e){return Tr(e,"__v_skip",!0),e}const Do=e=>$e(e)?We(e):e,ui=e=>$e(e)?zt(e):e;function pi(e){Pn&&yt&&(e=he(e),Op(e.dep||(e.dep=ai()),{target:e,type:"get",key:"value"}))}function di(e,n){e=he(e);const s=e.dep;s&&na(s,{target:e,type:"set",key:"value",newValue:n})}function De(e){return!!(e&&e.__v_isRef===!0)}function Y(e){return Wp(e,!1)}function cn(e){return Wp(e,!0)}function Wp(e,n){return De(e)?e:new Gy(e,n)}class Gy{constructor(n,s){this.__v_isShallow=s,this.dep=void 0,this.__v_isRef=!0,this._rawValue=s?n:he(n),this._value=s?n:Do(n)}get value(){return pi(this),this._value}set value(n){const s=this.__v_isShallow||Pr(n)||Hn(n);n=s?n:he(n),So(n,this._rawValue)&&(this._rawValue=n,this._value=s?n:Do(n),di(this,n))}}function T(e){return De(e)?e.value:e}const Yy={get:(e,n,s)=>T(Reflect.get(e,n,s)),set:(e,n,s,o)=>{const r=e[n];return De(r)&&!De(s)?(r.value=s,!0):Reflect.set(e,n,s,o)}};function Hp(e){return ms(e)?e:new Proxy(e,Yy)}class Qy{constructor(n){this.dep=void 0,this.__v_isRef=!0;const{get:s,set:o}=n(()=>pi(this),()=>di(this));this._get=s,this._set=o}get value(){return this._get()}set value(n){this._set(n)}}function fi(e){return new Qy(e)}function Zy(e){Ir(e)||console.warn("toRefs() expects a reactive object but received a plain one.");const n=ae(e)?new Array(e.length):{};for(const s in e)n[s]=Vp(e,s);return n}class Jy{constructor(n,s,o){this._object=n,this._key=s,this._defaultValue=o,this.__v_isRef=!0}get value(){const n=this._object[this._key];return n===void 0?this._defaultValue:n}set value(n){this._object[this._key]=n}get dep(){return xy(he(this._object),this._key)}}class Xy{constructor(n){this._getter=n,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function em(e,n,s){return De(e)?e:pe(e)?new Xy(e):$e(e)&&arguments.length>1?Vp(e,n,s):Y(e)}function Vp(e,n,s){const o=e[n];return De(o)?o:new Jy(e,n,s)}class tm{constructor(n,s,o,r){this._setter=s,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new ii(n,()=>{this._dirty||(this._dirty=!0,di(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=o}get value(){const n=he(this);return pi(n),(n._dirty||!n._cacheable)&&(n._dirty=!1,n._value=n.effect.run()),n._value}set value(n){this._setter(n)}}function nm(e,n,s=!1){let o,r;const l=pe(e);l?(o=e,r=()=>{console.warn("Write operation failed: computed value is readonly")}):(o=e.get,r=e.set);const a=new tm(o,r,l||!r,s);return n&&!s&&(a.effect.onTrack=n.onTrack,a.effect.onTrigger=n.onTrigger),a}const gs=[];function xr(e){gs.push(e)}function wr(){gs.pop()}function N(e,...n){Cs();const s=gs.length?gs[gs.length-1].component:null,o=s&&s.appContext.config.warnHandler,r=sm();if(o)bn(o,s,11,[e+n.join(""),s&&s.proxy,r.map(({vnode:l})=>`at <${ml(s,l.type)}>`).join(`
`),r]);else{const l=[`[Vue warn]: ${e}`,...n];r.length&&l.push(`
`,...om(r)),console.warn(...l)}Bs()}function sm(){let e=gs[gs.length-1];if(!e)return[];const n=[];for(;e;){const s=n[0];s&&s.vnode===e?s.recurseCount++:n.push({vnode:e,recurseCount:0});const o=e.component&&e.component.parent;e=o&&o.vnode}return n}function om(e){const n=[];return e.forEach((s,o)=>{n.push(...o===0?[]:[`
`],...rm(s))}),n}function rm({vnode:e,recurseCount:n}){const s=n>0?`... (${n} recursive calls)`:"",o=e.component?e.component.parent==null:!1,r=` at <${ml(e.component,e.type,o)}`,l=">"+s;return e.props?[r,...lm(e.props),l]:[r+l]}function lm(e){const n=[],s=Object.keys(e);return s.slice(0,3).forEach(o=>{n.push(...zp(o,e[o]))}),s.length>3&&n.push(" ..."),n}function zp(e,n,s){return je(n)?(n=JSON.stringify(n),s?n:[`${e}=${n}`]):typeof n=="number"||typeof n=="boolean"||n==null?s?n:[`${e}=${n}`]:De(n)?(n=zp(e,he(n.value),!0),s?n:[`${e}=Ref<`,n,">"]):pe(n)?[`${e}=fn${n.name?`<${n.name}>`:""}`]:(n=he(n),s?n:[`${e}=`,n])}function am(e,n){e!==void 0&&(typeof e!="number"?N(`${n} is not a valid number - got ${JSON.stringify(e)}.`):isNaN(e)&&N(`${n} is NaN - the duration expression might be incorrect.`))}const hi={sp:"serverPrefetch hook",bc:"beforeCreate hook",c:"created hook",bm:"beforeMount hook",m:"mounted hook",bu:"beforeUpdate hook",u:"updated",bum:"beforeUnmount hook",um:"unmounted hook",a:"activated hook",da:"deactivated hook",ec:"errorCaptured hook",rtc:"renderTracked hook",rtg:"renderTriggered hook",[0]:"setup function",[1]:"render function",[2]:"watcher getter",[3]:"watcher callback",[4]:"watcher cleanup function",[5]:"native event handler",[6]:"component event handler",[7]:"vnode hook",[8]:"directive hook",[9]:"transition hook",[10]:"app errorHandler",[11]:"app warnHandler",[12]:"ref function",[13]:"async component loader",[14]:"scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core"};function bn(e,n,s,o){let r;try{r=o?e(...o):e()}catch(l){al(l,n,s)}return r}function Rt(e,n,s,o){if(pe(e)){const l=bn(e,n,s,o);return l&&si(l)&&l.catch(a=>{al(a,n,s)}),l}const r=[];for(let l=0;l<e.length;l++)r.push(Rt(e[l],n,s,o));return r}function al(e,n,s,o=!0){const r=n?n.vnode:null;if(n){let l=n.parent;const a=n.proxy,i=hi[s];for(;l;){const u=l.ec;if(u){for(let p=0;p<u.length;p++)if(u[p](e,a,i)===!1)return}l=l.parent}const c=n.appContext.config.errorHandler;if(c){bn(c,null,10,[e,a,i]);return}}im(e,s,r,o)}function im(e,n,s,o=!0){{const r=hi[n];if(s&&xr(s),N(`Unhandled error${r?` during execution of ${r}`:""}`),s&&wr(),o)throw e;console.error(e)}}let To=!1,sa=!1;const rt=[];let tn=0;const Ls=[];let en=null,Dn=0;const Kp=Promise.resolve();let yi=null;const cm=100;function lt(e){const n=yi||Kp;return e?n.then(this?e.bind(this):e):n}function um(e){let n=tn+1,s=rt.length;for(;n<s;){const o=n+s>>>1;$o(rt[o])<e?n=o+1:s=o}return n}function il(e){(!rt.length||!rt.includes(e,To&&e.allowRecurse?tn+1:tn))&&(e.id==null?rt.push(e):rt.splice(um(e.id),0,e),Gp())}function Gp(){!To&&!sa&&(sa=!0,yi=Kp.then(Zp))}function pm(e){const n=rt.indexOf(e);n>tn&&rt.splice(n,1)}function Yp(e){ae(e)?Ls.push(...e):(!en||!en.includes(e,e.allowRecurse?Dn+1:Dn))&&Ls.push(e),Gp()}function uc(e,n=To?tn+1:0){for(e=e||new Map;n<rt.length;n++){const s=rt[n];if(s&&s.pre){if(mi(e,s))continue;rt.splice(n,1),n--,s()}}}function Qp(e){if(Ls.length){const n=[...new Set(Ls)];if(Ls.length=0,en){en.push(...n);return}for(en=n,e=e||new Map,en.sort((s,o)=>$o(s)-$o(o)),Dn=0;Dn<en.length;Dn++)mi(e,en[Dn])||en[Dn]();en=null,Dn=0}}const $o=e=>e.id==null?1/0:e.id,dm=(e,n)=>{const s=$o(e)-$o(n);if(s===0){if(e.pre&&!n.pre)return-1;if(n.pre&&!e.pre)return 1}return s};function Zp(e){sa=!1,To=!0,e=e||new Map,rt.sort(dm);const n=s=>mi(e,s);try{for(tn=0;tn<rt.length;tn++){const s=rt[tn];if(s&&s.active!==!1){if(n(s))continue;bn(s,null,14)}}}finally{tn=0,rt.length=0,Qp(e),To=!1,yi=null,(rt.length||Ls.length)&&Zp(e)}}function mi(e,n){if(!e.has(n))e.set(n,1);else{const s=e.get(n);if(s>cm){const o=n.ownerInstance,r=o&&Po(o.type);return N(`Maximum recursive updates exceeded${r?` in component <${r}>`:""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`),!0}else e.set(n,s+1)}}let In=!1;const Ps=new Set;$r().__VUE_HMR_RUNTIME__={createRecord:wl(Jp),rerender:wl(ym),reload:wl(mm)};const As=new Map;function fm(e){const n=e.type.__hmrId;let s=As.get(n);s||(Jp(n,e.type),s=As.get(n)),s.instances.add(e)}function hm(e){As.get(e.type.__hmrId).instances.delete(e)}function Jp(e,n){return As.has(e)?!1:(As.set(e,{initialDef:go(n),instances:new Set}),!0)}function go(e){return $d(e)?e.__vccOpts:e}function ym(e,n){const s=As.get(e);s&&(s.initialDef.render=n,[...s.instances].forEach(o=>{n&&(o.render=n,go(o.type).render=n),o.renderCache=[],In=!0,o.update(),In=!1}))}function mm(e,n){const s=As.get(e);if(!s)return;n=go(n),pc(s.initialDef,n);const o=[...s.instances];for(const r of o){const l=go(r.type);Ps.has(l)||(l!==s.initialDef&&pc(l,n),Ps.add(l)),r.appContext.propsCache.delete(r.type),r.appContext.emitsCache.delete(r.type),r.appContext.optionsCache.delete(r.type),r.ceReload?(Ps.add(l),r.ceReload(n.styles),Ps.delete(l)):r.parent?il(r.parent.update):r.appContext.reload?r.appContext.reload():typeof window<"u"?window.location.reload():console.warn("[HMR] Root or manually mounted instance modified. Full reload required.")}Yp(()=>{for(const r of o)Ps.delete(go(r.type))})}function pc(e,n){qe(e,n);for(const s in e)s!=="__file"&&!(s in n)&&delete e[s]}function wl(e){return(n,s)=>{try{return e(n,s)}catch(o){console.error(o),console.warn("[HMR] Something went wrong during Vue component hot-reload. Full reload required.")}}}let nn,po=[],oa=!1;function Go(e,...n){nn?nn.emit(e,...n):oa||po.push({event:e,args:n})}function Xp(e,n){var s,o;nn=e,nn?(nn.enabled=!0,po.forEach(({event:r,args:l})=>nn.emit(r,...l)),po=[]):typeof window<"u"&&window.HTMLElement&&!((o=(s=window.navigator)==null?void 0:s.userAgent)!=null&&o.includes("jsdom"))?((n.__VUE_DEVTOOLS_HOOK_REPLAY__=n.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(l=>{Xp(l,n)}),setTimeout(()=>{nn||(n.__VUE_DEVTOOLS_HOOK_REPLAY__=null,oa=!0,po=[])},3e3)):(oa=!0,po=[])}function gm(e,n){Go("app:init",e,n,{Fragment:Fe,Text:Qo,Comment:it,Static:Ar})}function _m(e){Go("app:unmount",e)}const ra=gi("component:added"),ed=gi("component:updated"),vm=gi("component:removed"),bm=e=>{nn&&typeof nn.cleanupBuffer=="function"&&!nn.cleanupBuffer(e)&&vm(e)};function gi(e){return n=>{Go(e,n.appContext.app,n.uid,n.parent?n.parent.uid:void 0,n)}}const xm=td("perf:start"),wm=td("perf:end");function td(e){return(n,s,o)=>{Go(e,n.appContext.app,n.uid,n,s,o)}}function Am(e,n,s){Go("component:emit",e.appContext.app,e,n,s)}function Cm(e,n,...s){if(e.isUnmounted)return;const o=e.vnode.props||Le;{const{emitsOptions:p,propsOptions:[d]}=e;if(p)if(!(n in p))(!d||!(ns(n)in d))&&N(`Component emitted event "${n}" but it is neither declared in the emits option nor as an "${ns(n)}" prop.`);else{const h=p[n];pe(h)&&(h(...s)||N(`Invalid event arguments: event validation failed for event "${n}".`))}}let r=s;const l=n.startsWith("update:"),a=l&&n.slice(7);if(a&&a in o){const p=`${a==="modelValue"?"model":a}Modifiers`,{number:d,trim:h}=o[p]||Le;h&&(r=s.map(y=>je(y)?y.trim():y)),d&&(r=s.map(ly))}Am(e,n,r);{const p=n.toLowerCase();p!==n&&o[ns(p)]&&N(`Event "${p}" is emitted in component ${ml(e,e.type)} but the handler is registered for "${n}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${wn(n)}" instead of "${n}".`)}let i,c=o[i=ns(n)]||o[i=ns(ln(n))];!c&&l&&(c=o[i=ns(wn(n))]),c&&Rt(c,e,6,r);const u=o[i+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[i])return;e.emitted[i]=!0,Rt(u,e,6,r)}}function nd(e,n,s=!1){const o=n.emitsCache,r=o.get(e);if(r!==void 0)return r;const l=e.emits;let a={},i=!1;if(!pe(e)){const c=u=>{const p=nd(u,n,!0);p&&(i=!0,qe(a,p))};!s&&n.mixins.length&&n.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!l&&!i?($e(e)&&o.set(e,null),null):(ae(l)?l.forEach(c=>a[c]=null):qe(a,l),$e(e)&&o.set(e,a),a)}function cl(e,n){return!e||!zo(n)?!1:(n=n.slice(2).replace(/Once$/,""),Be(e,n[0].toLowerCase()+n.slice(1))||Be(e,wn(n))||Be(e,n))}let Je=null,ul=null;function Mr(e){const n=Je;return Je=e,ul=e&&e.type.__scopeId||null,n}function sd(e){ul=e}function od(){ul=null}function P(e,n=Je,s){if(!n||e._n)return e;const o=(...r)=>{o._d&&Bc(-1);const l=Mr(n);let a;try{a=e(...r)}finally{Mr(l),o._d&&Bc(1)}return ed(n),a};return o._n=!0,o._c=!0,o._d=!0,o}let la=!1;function Lr(){la=!0}function Al(e){const{type:n,vnode:s,proxy:o,withProxy:r,props:l,propsOptions:[a],slots:i,attrs:c,emit:u,render:p,renderCache:d,data:h,setupState:y,ctx:m,inheritAttrs:b}=e;let A,w;const C=Mr(e);la=!1;try{if(s.shapeFlag&4){const k=r||o;A=Vt(p.call(k,k,d,l,y,h,m)),w=c}else{const k=n;c===l&&Lr(),A=Vt(k.length>1?k(l,{get attrs(){return Lr(),c},slots:i,emit:u}):k(l,null)),w=n.props?c:km(c)}}catch(k){_o.length=0,al(k,e,1),A=M(it)}let x=A,B;if(A.patchFlag>0&&A.patchFlag&2048&&([x,B]=Bm(A)),w&&b!==!1){const k=Object.keys(w),{shapeFlag:S}=x;if(k.length){if(S&7)a&&k.some(Dr)&&(w=Em(w,a)),x=pn(x,w);else if(!la&&x.type!==it){const L=Object.keys(c),O=[],j=[];for(let ne=0,ue=L.length;ne<ue;ne++){const Q=L[ne];zo(Q)?Dr(Q)||O.push(Q[2].toLowerCase()+Q.slice(3)):j.push(Q)}j.length&&N(`Extraneous non-props attributes (${j.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`),O.length&&N(`Extraneous non-emits event listeners (${O.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`)}}}return s.dirs&&(dc(x)||N("Runtime directive used on component with non-element root node. The directives will not function as intended."),x=pn(x),x.dirs=x.dirs?x.dirs.concat(s.dirs):s.dirs),s.transition&&(dc(x)||N("Component inside <Transition> renders non-element root node that cannot be animated."),x.transition=s.transition),B?B(x):A=x,Mr(C),A}const Bm=e=>{const n=e.children,s=e.dynamicChildren,o=rd(n);if(!o)return[e,void 0];const r=n.indexOf(o),l=s?s.indexOf(o):-1,a=i=>{n[r]=i,s&&(l>-1?s[l]=i:i.patchFlag>0&&(e.dynamicChildren=[...s,i]))};return[Vt(o),a]};function rd(e){let n;for(let s=0;s<e.length;s++){const o=e[s];if(un(o)){if(o.type!==it||o.children==="v-if"){if(n)return;n=o}}else return}return n}const km=e=>{let n;for(const s in e)(s==="class"||s==="style"||zo(s))&&((n||(n={}))[s]=e[s]);return n},Em=(e,n)=>{const s={};for(const o in e)(!Dr(o)||!(o.slice(9)in n))&&(s[o]=e[o]);return s},dc=e=>e.shapeFlag&7||e.type===it;function Fm(e,n,s){const{props:o,children:r,component:l}=e,{props:a,children:i,patchFlag:c}=n,u=l.emitsOptions;if((r||i)&&In||n.dirs||n.transition)return!0;if(s&&c>=0){if(c&1024)return!0;if(c&16)return o?fc(o,a,u):!!a;if(c&8){const p=n.dynamicProps;for(let d=0;d<p.length;d++){const h=p[d];if(a[h]!==o[h]&&!cl(u,h))return!0}}}else return(r||i)&&(!i||!i.$stable)?!0:o===a?!1:o?a?fc(o,a,u):!0:!!a;return!1}function fc(e,n,s){const o=Object.keys(n);if(o.length!==Object.keys(e).length)return!0;for(let r=0;r<o.length;r++){const l=o[r];if(n[l]!==e[l]&&!cl(s,l))return!0}return!1}function Sm({vnode:e,parent:n},s){for(;n&&n.subTree===e;)(e=n.vnode).el=s,n=n.parent}const ld=e=>e.__isSuspense;function Dm(e,n){n&&n.pendingBranch?ae(e)?n.effects.push(...e):n.effects.push(e):Yp(e)}function ks(e,n){return _i(e,null,n)}const ar={};function ge(e,n,s){return pe(n)||N("`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."),_i(e,n,s)}function _i(e,n,{immediate:s,deep:o,flush:r,onTrack:l,onTrigger:a}=Le){var i;n||(s!==void 0&&N('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'),o!==void 0&&N('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'));const c=k=>{N("Invalid watch source: ",k,"A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.")},u=li()===((i=Ze)==null?void 0:i.scope)?Ze:null;let p,d=!1,h=!1;if(De(e)?(p=()=>e.value,d=Pr(e)):ms(e)?(p=()=>e,o=!0):ae(e)?(h=!0,d=e.some(k=>ms(k)||Pr(k)),p=()=>e.map(k=>{if(De(k))return k.value;if(ms(k))return ps(k);if(pe(k))return bn(k,u,2);c(k)})):pe(e)?n?p=()=>bn(e,u,2):p=()=>{if(!(u&&u.isUnmounted))return y&&y(),Rt(e,u,3,[m])}:(p=xt,c(e)),n&&o){const k=p;p=()=>ps(k())}let y,m=k=>{y=x.onStop=()=>{bn(k,u,4)}},b;if(Uo)if(m=xt,n?s&&Rt(n,u,3,[p(),h?[]:void 0,m]):p(),r==="sync"){const k=L0();b=k.__watcherHandles||(k.__watcherHandles=[])}else return xt;let A=h?new Array(e.length).fill(ar):ar;const w=()=>{if(x.active)if(n){const k=x.run();(o||d||(h?k.some((S,L)=>So(S,A[L])):So(k,A)))&&(y&&y(),Rt(n,u,3,[k,A===ar?void 0:h&&A[0]===ar?[]:A,m]),A=k)}else x.run()};w.allowRecurse=!!n;let C;r==="sync"?C=w:r==="post"?C=()=>st(w,u&&u.suspense):(w.pre=!0,u&&(w.id=u.uid),C=()=>il(w));const x=new ii(p,C);x.onTrack=l,x.onTrigger=a,n?s?w():A=x.run():r==="post"?st(x.run.bind(x),u&&u.suspense):x.run();const B=()=>{x.stop(),u&&u.scope&&ti(u.scope.effects,x)};return b&&b.push(B),B}function Tm(e,n,s){const o=this.proxy,r=je(e)?e.includes(".")?ad(o,e):()=>o[e]:e.bind(o,o);let l;pe(n)?l=n:(l=n.handler,s=n);const a=Ze;Ws(this);const i=_i(r,l.bind(o),s);return a?Ws(a):vs(),i}function ad(e,n){const s=n.split(".");return()=>{let o=e;for(let r=0;r<s.length&&o;r++)o=o[s[r]];return o}}function ps(e,n){if(!$e(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),De(e))ps(e.value,n);else if(ae(e))for(let s=0;s<e.length;s++)ps(e[s],n);else if(wp(e)||hs(e))e.forEach(s=>{ps(s,n)});else if(Cp(e))for(const s in e)ps(e[s],n);return e}function id(e){sy(e)&&N("Do not use built-in directive ids as custom directive id: "+e)}function wt(e,n){const s=Je;if(s===null)return N("withDirectives can only be used inside render functions."),e;const o=yl(s)||s.proxy,r=e.dirs||(e.dirs=[]);for(let l=0;l<n.length;l++){let[a,i,c,u=Le]=n[l];a&&(pe(a)&&(a={mounted:a,updated:a}),a.deep&&ps(i),r.push({dir:a,instance:o,value:i,oldValue:void 0,arg:c,modifiers:u}))}return e}function Zn(e,n,s,o){const r=e.dirs,l=n&&n.dirs;for(let a=0;a<r.length;a++){const i=r[a];l&&(i.oldValue=l[a].value);let c=i.dir[o];c&&(Cs(),Rt(c,s,8,[e.el,i,e,n]),Bs())}}function $m(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Gn(()=>{e.isMounted=!0}),Yo(()=>{e.isUnmounting=!0}),e}const Pt=[Function,Array],Om={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Pt,onEnter:Pt,onAfterEnter:Pt,onEnterCancelled:Pt,onBeforeLeave:Pt,onLeave:Pt,onAfterLeave:Pt,onLeaveCancelled:Pt,onBeforeAppear:Pt,onAppear:Pt,onAfterAppear:Pt,onAppearCancelled:Pt};function Um(e,n){const{leavingVNodes:s}=e;let o=s.get(n.type);return o||(o=Object.create(null),s.set(n.type,o)),o}function aa(e,n,s,o){const{appear:r,mode:l,persisted:a=!1,onBeforeEnter:i,onEnter:c,onAfterEnter:u,onEnterCancelled:p,onBeforeLeave:d,onLeave:h,onAfterLeave:y,onLeaveCancelled:m,onBeforeAppear:b,onAppear:A,onAfterAppear:w,onAppearCancelled:C}=n,x=String(e.key),B=Um(s,e),k=(O,j)=>{O&&Rt(O,o,9,j)},S=(O,j)=>{const ne=j[1];k(O,j),ae(O)?O.every(ue=>ue.length<=1)&&ne():O.length<=1&&ne()},L={mode:l,persisted:a,beforeEnter(O){let j=i;if(!s.isMounted)if(r)j=b||i;else return;O._leaveCb&&O._leaveCb(!0);const ne=B[x];ne&&rs(e,ne)&&ne.el._leaveCb&&ne.el._leaveCb(),k(j,[O])},enter(O){let j=c,ne=u,ue=p;if(!s.isMounted)if(r)j=A||c,ne=w||u,ue=C||p;else return;let Q=!1;const ye=O._enterCb=_e=>{Q||(Q=!0,_e?k(ue,[O]):k(ne,[O]),L.delayedLeave&&L.delayedLeave(),O._enterCb=void 0)};j?S(j,[O,ye]):ye()},leave(O,j){const ne=String(e.key);if(O._enterCb&&O._enterCb(!0),s.isUnmounting)return j();k(d,[O]);let ue=!1;const Q=O._leaveCb=ye=>{ue||(ue=!0,j(),ye?k(m,[O]):k(y,[O]),O._leaveCb=void 0,B[ne]===e&&delete B[ne])};B[ne]=e,h?S(h,[O,Q]):Q()},clone(O){return aa(O,n,s,o)}};return L}function Rr(e,n){e.shapeFlag&6&&e.component?Rr(e.component.subTree,n):e.shapeFlag&128?(e.ssContent.transition=n.clone(e.ssContent),e.ssFallback.transition=n.clone(e.ssFallback)):e.transition=n}function cd(e,n=!1,s){let o=[],r=0;for(let l=0;l<e.length;l++){let a=e[l];const i=s==null?a.key:String(s)+String(a.key!=null?a.key:l);a.type===Fe?(a.patchFlag&128&&r++,o=o.concat(cd(a.children,n,i))):(n||a.type!==it)&&o.push(i!=null?pn(a,{key:i}):a)}if(r>1)for(let l=0;l<o.length;l++)o[l].patchFlag=-2;return o}function Ae(e,n){return pe(e)?(()=>qe({name:e.name},n,{setup:e}))():e}const Rs=e=>!!e.type.__asyncLoader,vi=e=>e.type.__isKeepAlive,Pm={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(e,{slots:n}){const s=$t(),o=s.ctx;if(!o.renderer)return()=>{const C=n.default&&n.default();return C&&C.length===1?C[0]:C};const r=new Map,l=new Set;let a=null;s.__v_cache=r;const i=s.suspense,{renderer:{p:c,m:u,um:p,o:{createElement:d}}}=o,h=d("div");o.activate=(C,x,B,k,S)=>{const L=C.component;u(C,x,B,0,i),c(L.vnode,C,x,B,L,i,k,C.slotScopeIds,S),st(()=>{L.isDeactivated=!1,L.a&&os(L.a);const O=C.props&&C.props.onVnodeMounted;O&&It(O,L.parent,C)},i),ra(L)},o.deactivate=C=>{const x=C.component;u(C,h,null,1,i),st(()=>{x.da&&os(x.da);const B=C.props&&C.props.onVnodeUnmounted;B&&It(B,x.parent,C),x.isDeactivated=!0},i),ra(x)};function y(C){Cl(C),p(C,s,i,!0)}function m(C){r.forEach((x,B)=>{const k=Po(x.type);k&&(!C||!C(k))&&b(B)})}function b(C){const x=r.get(C);!a||!rs(x,a)?y(x):a&&Cl(a),r.delete(C),l.delete(C)}ge(()=>[e.include,e.exclude],([C,x])=>{C&&m(B=>fo(C,B)),x&&m(B=>!fo(x,B))},{flush:"post",deep:!0});let A=null;const w=()=>{A!=null&&r.set(A,Bl(s.subTree))};return Gn(w),dl(w),Yo(()=>{r.forEach(C=>{const{subTree:x,suspense:B}=s,k=Bl(x);if(C.type===k.type&&C.key===k.key){Cl(k);const S=k.component.da;S&&st(S,B);return}y(C)})}),()=>{if(A=null,!n.default)return null;const C=n.default(),x=C[0];if(C.length>1)return N("KeepAlive should contain exactly one component child."),a=null,C;if(!un(x)||!(x.shapeFlag&4)&&!(x.shapeFlag&128))return a=null,x;let B=Bl(x);const k=B.type,S=Po(Rs(B)?B.type.__asyncResolved||{}:k),{include:L,exclude:O,max:j}=e;if(L&&(!S||!fo(L,S))||O&&S&&fo(O,S))return a=B,x;const ne=B.key==null?k:B.key,ue=r.get(ne);return B.el&&(B=pn(B),x.shapeFlag&128&&(x.ssContent=B)),A=ne,ue?(B.el=ue.el,B.component=ue.component,B.transition&&Rr(B,B.transition),B.shapeFlag|=512,l.delete(ne),l.add(ne)):(l.add(ne),j&&l.size>parseInt(j,10)&&b(l.values().next().value)),B.shapeFlag|=256,a=B,ld(x.type)?x:B}}},ud=Pm;function fo(e,n){return ae(e)?e.some(s=>fo(s,n)):je(e)?e.split(",").includes(n):ny(e)?e.test(n):!1}function pd(e,n){fd(e,"a",n)}function dd(e,n){fd(e,"da",n)}function fd(e,n,s=Ze){const o=e.__wdc||(e.__wdc=()=>{let r=s;for(;r;){if(r.isDeactivated)return;r=r.parent}return e()});if(pl(n,o,s),s){let r=s.parent;for(;r&&r.parent;)vi(r.parent.vnode)&&Im(o,n,s,r),r=r.parent}}function Im(e,n,s,o){const r=pl(n,e,o,!0);fl(()=>{ti(o[n],r)},s)}function Cl(e){e.shapeFlag&=-257,e.shapeFlag&=-513}function Bl(e){return e.shapeFlag&128?e.ssContent:e}function pl(e,n,s=Ze,o=!1){if(s){const r=s[e]||(s[e]=[]),l=n.__weh||(n.__weh=(...a)=>{if(s.isUnmounted)return;Cs(),Ws(s);const i=Rt(n,s,e,a);return vs(),Bs(),i});return o?r.unshift(l):r.push(l),l}else{const r=ns(hi[e].replace(/ hook$/,""));N(`${r} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`)}}const Bn=e=>(n,s=Ze)=>(!Uo||e==="sp")&&pl(e,(...o)=>n(...o),s),Mm=Bn("bm"),Gn=Bn("m"),Lm=Bn("bu"),dl=Bn("u"),Yo=Bn("bum"),fl=Bn("um"),Rm=Bn("sp"),Nm=Bn("rtg"),qm=Bn("rtc");function jm(e,n=Ze){pl("ec",e,n)}const ia="components",Wm="directives";function js(e,n){return hd(ia,e,!0,n)||e}const Hm=Symbol.for("v-ndc");function Vn(e){return hd(Wm,e)}function hd(e,n,s=!0,o=!1){const r=Je||Ze;if(r){const l=r.type;if(e===ia){const i=Po(l,!1);if(i&&(i===n||i===ln(n)||i===ws(ln(n))))return l}const a=hc(r[e]||l[e],n)||hc(r.appContext[e],n);if(!a&&o)return l;if(s&&!a){const i=e===ia?`
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.`:"";N(`Failed to resolve ${e.slice(0,-1)}: ${n}${i}`)}return a}else N(`resolve${ws(e.slice(0,-1))} can only be used in render() or setup().`)}function hc(e,n){return e&&(e[n]||e[ln(n)]||e[ws(ln(n))])}function Es(e,n,s,o){let r;const l=s&&s[o];if(ae(e)||je(e)){r=new Array(e.length);for(let a=0,i=e.length;a<i;a++)r[a]=n(e[a],a,void 0,l&&l[a])}else if(typeof e=="number"){Number.isInteger(e)||N(`The v-for range expect an integer value but got ${e}.`),r=new Array(e);for(let a=0;a<e;a++)r[a]=n(a+1,a,void 0,l&&l[a])}else if($e(e))if(e[Symbol.iterator])r=Array.from(e,(a,i)=>n(a,i,void 0,l&&l[i]));else{const a=Object.keys(e);r=new Array(a.length);for(let i=0,c=a.length;i<c;i++){const u=a[i];r[i]=n(e[u],u,i,l&&l[i])}}else r=[];return s&&(s[o]=r),r}function Ct(e,n,s={},o,r){if(Je.isCE||Je.parent&&Rs(Je.parent)&&Je.parent.isCE)return n!=="default"&&(s.name=n),M("slot",s,o&&o());let l=e[n];l&&l.length>1&&(N("SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."),l=()=>[]),l&&l._c&&(l._d=!1),_();const a=l&&yd(l(s)),i=W(Fe,{key:s.key||a&&a.key||`_${n}`},a||(o?o():[]),a&&e._===1?64:-2);return!r&&i.scopeId&&(i.slotScopeIds=[i.scopeId+"-s"]),l&&l._c&&(l._d=!0),i}function yd(e){return e.some(n=>un(n)?!(n.type===it||n.type===Fe&&!yd(n.children)):!0)?e:null}const ca=e=>e?Sd(e)?yl(e)||e.proxy:ca(e.parent):null,_s=qe(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>uo(e.props),$attrs:e=>uo(e.attrs),$slots:e=>uo(e.slots),$refs:e=>uo(e.refs),$parent:e=>ca(e.parent),$root:e=>ca(e.root),$emit:e=>e.emit,$options:e=>xi(e),$forceUpdate:e=>e.f||(e.f=()=>il(e.update)),$nextTick:e=>e.n||(e.n=lt.bind(e.proxy)),$watch:e=>Tm.bind(e)}),bi=e=>e==="_"||e==="$",kl=(e,n)=>e!==Le&&!e.__isScriptSetup&&Be(e,n),md={get({_:e},n){const{ctx:s,setupState:o,data:r,props:l,accessCache:a,type:i,appContext:c}=e;if(n==="__isVue")return!0;let u;if(n[0]!=="$"){const y=a[n];if(y!==void 0)switch(y){case 1:return o[n];case 2:return r[n];case 4:return s[n];case 3:return l[n]}else{if(kl(o,n))return a[n]=1,o[n];if(r!==Le&&Be(r,n))return a[n]=2,r[n];if((u=e.propsOptions[0])&&Be(u,n))return a[n]=3,l[n];if(s!==Le&&Be(s,n))return a[n]=4,s[n];ua&&(a[n]=0)}}const p=_s[n];let d,h;if(p)return n==="$attrs"?(ut(e,"get",n),Lr()):n==="$slots"&&ut(e,"get",n),p(e);if((d=i.__cssModules)&&(d=d[n]))return d;if(s!==Le&&Be(s,n))return a[n]=4,s[n];if(h=c.config.globalProperties,Be(h,n))return h[n];Je&&(!je(n)||n.indexOf("__v")!==0)&&(r!==Le&&bi(n[0])&&Be(r,n)?N(`Property ${JSON.stringify(n)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`):e===Je&&N(`Property ${JSON.stringify(n)} was accessed during render but is not defined on instance.`))},set({_:e},n,s){const{data:o,setupState:r,ctx:l}=e;return kl(r,n)?(r[n]=s,!0):r.__isScriptSetup&&Be(r,n)?(N(`Cannot mutate <script setup> binding "${n}" from Options API.`),!1):o!==Le&&Be(o,n)?(o[n]=s,!0):Be(e.props,n)?(N(`Attempting to mutate prop "${n}". Props are readonly.`),!1):n[0]==="$"&&n.slice(1)in e?(N(`Attempting to mutate public property "${n}". Properties starting with $ are reserved and readonly.`),!1):(n in e.appContext.config.globalProperties?Object.defineProperty(l,n,{enumerable:!0,configurable:!0,value:s}):l[n]=s,!0)},has({_:{data:e,setupState:n,accessCache:s,ctx:o,appContext:r,propsOptions:l}},a){let i;return!!s[a]||e!==Le&&Be(e,a)||kl(n,a)||(i=l[0])&&Be(i,a)||Be(o,a)||Be(_s,a)||Be(r.config.globalProperties,a)},defineProperty(e,n,s){return s.get!=null?e._.accessCache[n]=0:Be(s,"value")&&this.set(e,n,s.value,null),Reflect.defineProperty(e,n,s)}};md.ownKeys=e=>(N("Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."),Reflect.ownKeys(e));function Vm(e){const n={};return Object.defineProperty(n,"_",{configurable:!0,enumerable:!1,get:()=>e}),Object.keys(_s).forEach(s=>{Object.defineProperty(n,s,{configurable:!0,enumerable:!1,get:()=>_s[s](e),set:xt})}),n}function zm(e){const{ctx:n,propsOptions:[s]}=e;s&&Object.keys(s).forEach(o=>{Object.defineProperty(n,o,{enumerable:!0,configurable:!0,get:()=>e.props[o],set:xt})})}function Km(e){const{ctx:n,setupState:s}=e;Object.keys(he(s)).forEach(o=>{if(!s.__isScriptSetup){if(bi(o[0])){N(`setup() return property ${JSON.stringify(o)} should not start with "$" or "_" which are reserved prefixes for Vue internals.`);return}Object.defineProperty(n,o,{enumerable:!0,configurable:!0,get:()=>s[o],set:xt})}})}function Gm(){return Ym().slots}function Ym(){const e=$t();return e||N("useContext() called without active instance."),e.setupContext||(e.setupContext=Td(e))}function yc(e){return ae(e)?e.reduce((n,s)=>(n[s]=null,n),{}):e}function Qm(){const e=Object.create(null);return(n,s)=>{e[s]?N(`${n} property "${s}" is already defined in ${e[s]}.`):e[s]=n}}let ua=!0;function Zm(e){const n=xi(e),s=e.proxy,o=e.ctx;ua=!1,n.beforeCreate&&mc(n.beforeCreate,e,"bc");const{data:r,computed:l,methods:a,watch:i,provide:c,inject:u,created:p,beforeMount:d,mounted:h,beforeUpdate:y,updated:m,activated:b,deactivated:A,beforeDestroy:w,beforeUnmount:C,destroyed:x,unmounted:B,render:k,renderTracked:S,renderTriggered:L,errorCaptured:O,serverPrefetch:j,expose:ne,inheritAttrs:ue,components:Q,directives:ye,filters:_e}=n,be=Qm();{const[ee]=e.propsOptions;if(ee)for(const ie in ee)be("Props",ie)}if(u&&Jm(u,o,be),a)for(const ee in a){const ie=a[ee];pe(ie)?(Object.defineProperty(o,ee,{value:ie.bind(s),configurable:!0,enumerable:!0,writable:!0}),be("Methods",ee)):N(`Method "${ee}" has type "${typeof ie}" in the component definition. Did you reference the function correctly?`)}if(r){pe(r)||N("The data option must be a function. Plain object usage is no longer supported.");const ee=r.call(s,s);if(si(ee)&&N("data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."),!$e(ee))N("data() should return an object.");else{e.data=We(ee);for(const ie in ee)be("Data",ie),bi(ie[0])||Object.defineProperty(o,ie,{configurable:!0,enumerable:!0,get:()=>ee[ie],set:xt})}}if(ua=!0,l)for(const ee in l){const ie=l[ee],Ce=pe(ie)?ie.bind(s,s):pe(ie.get)?ie.get.bind(s,s):xt;Ce===xt&&N(`Computed property "${ee}" has no getter.`);const Ue=!pe(ie)&&pe(ie.set)?ie.set.bind(s):()=>{N(`Write operation failed: computed property "${ee}" is readonly.`)},Ot=$({get:Ce,set:Ue});Object.defineProperty(o,ee,{enumerable:!0,configurable:!0,get:()=>Ot.value,set:ot=>Ot.value=ot}),be("Computed",ee)}if(i)for(const ee in i)gd(i[ee],o,s,ee);if(c){const ee=pe(c)?c.call(s):c;Reflect.ownKeys(ee).forEach(ie=>{Ft(ie,ee[ie])})}p&&mc(p,e,"c");function Pe(ee,ie){ae(ie)?ie.forEach(Ce=>ee(Ce.bind(s))):ie&&ee(ie.bind(s))}if(Pe(Mm,d),Pe(Gn,h),Pe(Lm,y),Pe(dl,m),Pe(pd,b),Pe(dd,A),Pe(jm,O),Pe(qm,S),Pe(Nm,L),Pe(Yo,C),Pe(fl,B),Pe(Rm,j),ae(ne))if(ne.length){const ee=e.exposed||(e.exposed={});ne.forEach(ie=>{Object.defineProperty(ee,ie,{get:()=>s[ie],set:Ce=>s[ie]=Ce})})}else e.exposed||(e.exposed={});k&&e.render===xt&&(e.render=k),ue!=null&&(e.inheritAttrs=ue),Q&&(e.components=Q),ye&&(e.directives=ye)}function Jm(e,n,s=xt){ae(e)&&(e=pa(e));for(const o in e){const r=e[o];let l;$e(r)?"default"in r?l=R(r.from||o,r.default,!0):l=R(r.from||o):l=R(r),De(l)?Object.defineProperty(n,o,{enumerable:!0,configurable:!0,get:()=>l.value,set:a=>l.value=a}):n[o]=l,s("Inject",o)}}function mc(e,n,s){Rt(ae(e)?e.map(o=>o.bind(n.proxy)):e.bind(n.proxy),n,s)}function gd(e,n,s,o){const r=o.includes(".")?ad(s,o):()=>s[o];if(je(e)){const l=n[e];pe(l)?ge(r,l):N(`Invalid watch handler specified by key "${e}"`,l)}else if(pe(e))ge(r,e.bind(s));else if($e(e))if(ae(e))e.forEach(l=>gd(l,n,s,o));else{const l=pe(e.handler)?e.handler.bind(s):n[e.handler];pe(l)?ge(r,l,e):N(`Invalid watch handler specified by key "${e.handler}"`,l)}else N(`Invalid watch option: "${o}"`,e)}function xi(e){const n=e.type,{mixins:s,extends:o}=n,{mixins:r,optionsCache:l,config:{optionMergeStrategies:a}}=e.appContext,i=l.get(n);let c;return i?c=i:!r.length&&!s&&!o?c=n:(c={},r.length&&r.forEach(u=>Nr(c,u,a,!0)),Nr(c,n,a)),$e(n)&&l.set(n,c),c}function Nr(e,n,s,o=!1){const{mixins:r,extends:l}=n;l&&Nr(e,l,s,!0),r&&r.forEach(a=>Nr(e,a,s,!0));for(const a in n)if(o&&a==="expose")N('"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.');else{const i=Xm[a]||s&&s[a];e[a]=i?i(e[a],n[a]):n[a]}return e}const Xm={data:gc,props:_c,emits:_c,methods:ho,computed:ho,beforeCreate:dt,created:dt,beforeMount:dt,mounted:dt,beforeUpdate:dt,updated:dt,beforeDestroy:dt,beforeUnmount:dt,destroyed:dt,unmounted:dt,activated:dt,deactivated:dt,errorCaptured:dt,serverPrefetch:dt,components:ho,directives:ho,watch:t0,provide:gc,inject:e0};function gc(e,n){return n?e?function(){return qe(pe(e)?e.call(this,this):e,pe(n)?n.call(this,this):n)}:n:e}function e0(e,n){return ho(pa(e),pa(n))}function pa(e){if(ae(e)){const n={};for(let s=0;s<e.length;s++)n[e[s]]=e[s];return n}return e}function dt(e,n){return e?[...new Set([].concat(e,n))]:n}function ho(e,n){return e?qe(Object.create(null),e,n):n}function _c(e,n){return e?ae(e)&&ae(n)?[...new Set([...e,...n])]:qe(Object.create(null),yc(e),yc(n??{})):n}function t0(e,n){if(!e)return n;if(!n)return e;const s=qe(Object.create(null),e);for(const o in n)s[o]=dt(e[o],n[o]);return s}function _d(){return{app:null,config:{isNativeTag:xp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let n0=0;function s0(e,n){return function(o,r=null){pe(o)||(o=qe({},o)),r!=null&&!$e(r)&&(N("root props passed to app.mount() must be an object."),r=null);const l=_d();Object.defineProperty(l.config,"unwrapInjectedRef",{get(){return!0},set(){N("app.config.unwrapInjectedRef has been deprecated. 3.3 now alawys unwraps injected refs in Options API.")}});const a=new Set;let i=!1;const c=l.app={_uid:n0++,_component:o,_props:r,_container:null,_context:l,_instance:null,version:Hr,get config(){return l.config},set config(u){N("app.config cannot be replaced. Modify individual options instead.")},use(u,...p){return a.has(u)?N("Plugin has already been applied to target app."):u&&pe(u.install)?(a.add(u),u.install(c,...p)):pe(u)?(a.add(u),u(c,...p)):N('A plugin must either be a function or an object with an "install" function.'),c},mixin(u){return l.mixins.includes(u)?N("Mixin has already been applied to target app"+(u.name?`: ${u.name}`:"")):l.mixins.push(u),c},component(u,p){return ma(u,l.config),p?(l.components[u]&&N(`Component "${u}" has already been registered in target app.`),l.components[u]=p,c):l.components[u]},directive(u,p){return id(u),p?(l.directives[u]&&N(`Directive "${u}" has already been registered in target app.`),l.directives[u]=p,c):l.directives[u]},mount(u,p,d){if(i)N("App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`");else{u.__vue_app__&&N("There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first.");const h=M(o,r);return h.appContext=l,l.reload=()=>{e(pn(h),u,d)},p&&n?n(h,u):e(h,u,d),i=!0,c._container=u,u.__vue_app__=c,c._instance=h.component,gm(c,Hr),yl(h.component)||h.component.proxy}},unmount(){i?(e(null,c._container),c._instance=null,_m(c),delete c._container.__vue_app__):N("Cannot unmount an app that is not mounted.")},provide(u,p){return u in l.provides&&N(`App already provides property with key "${String(u)}". It will be overwritten with the new value.`),l.provides[u]=p,c},runWithContext(u){qr=c;try{return u()}finally{qr=null}}};return c}}let qr=null;function Ft(e,n){if(!Ze)N("provide() can only be used inside setup().");else{let s=Ze.provides;const o=Ze.parent&&Ze.parent.provides;o===s&&(s=Ze.provides=Object.create(o)),s[e]=n}}function R(e,n,s=!1){const o=Ze||Je;if(o||qr){const r=o?o.parent==null?o.vnode.appContext&&o.vnode.appContext.provides:o.parent.provides:qr._context.provides;if(r&&e in r)return r[e];if(arguments.length>1)return s&&pe(n)?n.call(o&&o.proxy):n;N(`injection "${String(e)}" not found.`)}else N("inject() can only be used inside setup() or functional components.")}function o0(e,n,s,o=!1){const r={},l={};Tr(l,hl,1),e.propsDefaults=Object.create(null),vd(e,n,r,l);for(const a in e.propsOptions[0])a in r||(r[a]=void 0);xd(n||{},r,e),s?e.props=o?r:Ky(r):e.type.props?e.props=r:e.props=l,e.attrs=l}function r0(e){for(;e;){if(e.type.__hmrId)return!0;e=e.parent}}function l0(e,n,s,o){const{props:r,attrs:l,vnode:{patchFlag:a}}=e,i=he(r),[c]=e.propsOptions;let u=!1;if(!r0(e)&&(o||a>0)&&!(a&16)){if(a&8){const p=e.vnode.dynamicProps;for(let d=0;d<p.length;d++){let h=p[d];if(cl(e.emitsOptions,h))continue;const y=n[h];if(c)if(Be(l,h))y!==l[h]&&(l[h]=y,u=!0);else{const m=ln(h);r[m]=da(c,i,m,y,e,!1)}else y!==l[h]&&(l[h]=y,u=!0)}}}else{vd(e,n,r,l)&&(u=!0);let p;for(const d in i)(!n||!Be(n,d)&&((p=wn(d))===d||!Be(n,p)))&&(c?s&&(s[d]!==void 0||s[p]!==void 0)&&(r[d]=da(c,i,d,void 0,e,!0)):delete r[d]);if(l!==i)for(const d in l)(!n||!Be(n,d))&&(delete l[d],u=!0)}u&&an(e,"set","$attrs"),xd(n||{},r,e)}function vd(e,n,s,o){const[r,l]=e.propsOptions;let a=!1,i;if(n)for(let c in n){if(br(c))continue;const u=n[c];let p;r&&Be(r,p=ln(c))?!l||!l.includes(p)?s[p]=u:(i||(i={}))[p]=u:cl(e.emitsOptions,c)||(!(c in o)||u!==o[c])&&(o[c]=u,a=!0)}if(l){const c=he(s),u=i||Le;for(let p=0;p<l.length;p++){const d=l[p];s[d]=da(r,c,d,u[d],e,!Be(u,d))}}return a}function da(e,n,s,o,r,l){const a=e[s];if(a!=null){const i=Be(a,"default");if(i&&o===void 0){const c=a.default;if(a.type!==Function&&!a.skipFactory&&pe(c)){const{propsDefaults:u}=r;s in u?o=u[s]:(Ws(r),o=u[s]=c.call(null,n),vs())}else o=c}a[0]&&(l&&!i?o=!1:a[1]&&(o===""||o===wn(s))&&(o=!0))}return o}function bd(e,n,s=!1){const o=n.propsCache,r=o.get(e);if(r)return r;const l=e.props,a={},i=[];let c=!1;if(!pe(e)){const p=d=>{c=!0;const[h,y]=bd(d,n,!0);qe(a,h),y&&i.push(...y)};!s&&n.mixins.length&&n.mixins.forEach(p),e.extends&&p(e.extends),e.mixins&&e.mixins.forEach(p)}if(!l&&!c)return $e(e)&&o.set(e,Ms),Ms;if(ae(l))for(let p=0;p<l.length;p++){je(l[p])||N("props must be strings when using array syntax.",l[p]);const d=ln(l[p]);vc(d)&&(a[d]=Le)}else if(l){$e(l)||N("invalid props options",l);for(const p in l){const d=ln(p);if(vc(d)){const h=l[p],y=a[d]=ae(h)||pe(h)?{type:h}:qe({},h);if(y){const m=xc(Boolean,y.type),b=xc(String,y.type);y[0]=m>-1,y[1]=b<0||m<b,(m>-1||Be(y,"default"))&&i.push(d)}}}}const u=[a,i];return $e(e)&&o.set(e,u),u}function vc(e){return e[0]!=="$"?!0:(N(`Invalid prop name: "${e}" is a reserved property.`),!1)}function fa(e){const n=e&&e.toString().match(/^\s*(function|class) (\w+)/);return n?n[2]:e===null?"null":""}function bc(e,n){return fa(e)===fa(n)}function xc(e,n){return ae(n)?n.findIndex(s=>bc(s,e)):pe(n)&&bc(n,e)?0:-1}function xd(e,n,s){const o=he(n),r=s.propsOptions[0];for(const l in r){let a=r[l];a!=null&&a0(l,o[l],a,!Be(e,l)&&!Be(e,wn(l)))}}function a0(e,n,s,o){const{type:r,required:l,validator:a,skipCheck:i}=s;if(l&&o){N('Missing required prop: "'+e+'"');return}if(!(n==null&&!l)){if(r!=null&&r!==!0&&!i){let c=!1;const u=ae(r)?r:[r],p=[];for(let d=0;d<u.length&&!c;d++){const{valid:h,expectedType:y}=c0(n,u[d]);p.push(y||""),c=h}if(!c){N(u0(e,n,p));return}}a&&!a(n)&&N('Invalid prop: custom validator check failed for prop "'+e+'".')}}const i0=Kn("String,Number,Boolean,Function,Symbol,BigInt");function c0(e,n){let s;const o=fa(n);if(i0(o)){const r=typeof e;s=r===o.toLowerCase(),!s&&r==="object"&&(s=e instanceof n)}else o==="Object"?s=$e(e):o==="Array"?s=ae(e):o==="null"?s=e===null:s=e instanceof n;return{valid:s,expectedType:o}}function u0(e,n,s){let o=`Invalid prop: type check failed for prop "${e}". Expected ${s.map(ws).join(" | ")}`;const r=s[0],l=oi(n),a=wc(n,r),i=wc(n,l);return s.length===1&&Ac(r)&&!p0(r,l)&&(o+=` with value ${a}`),o+=`, got ${l} `,Ac(l)&&(o+=`with value ${i}.`),o}function wc(e,n){return n==="String"?`"${e}"`:n==="Number"?`${Number(e)}`:`${e}`}function Ac(e){return["string","number","boolean"].some(s=>e.toLowerCase()===s)}function p0(...e){return e.some(n=>n.toLowerCase()==="boolean")}const wd=e=>e[0]==="_"||e==="$stable",wi=e=>ae(e)?e.map(Vt):[Vt(e)],d0=(e,n,s)=>{if(n._n)return n;const o=P((...r)=>(Ze&&N(`Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`),wi(n(...r))),s);return o._c=!1,o},Ad=(e,n,s)=>{const o=e._ctx;for(const r in e){if(wd(r))continue;const l=e[r];if(pe(l))n[r]=d0(r,l,o);else if(l!=null){N(`Non-function value encountered for slot "${r}". Prefer function slots for better performance.`);const a=wi(l);n[r]=()=>a}}},Cd=(e,n)=>{vi(e.vnode)||N("Non-function value encountered for default slot. Prefer function slots for better performance.");const s=wi(n);e.slots.default=()=>s},f0=(e,n)=>{if(e.vnode.shapeFlag&32){const s=n._;s?(e.slots=he(n),Tr(n,"_",s)):Ad(n,e.slots={})}else e.slots={},n&&Cd(e,n);Tr(e.slots,hl,1)},h0=(e,n,s)=>{const{vnode:o,slots:r}=e;let l=!0,a=Le;if(o.shapeFlag&32){const i=n._;i?In?(qe(r,n),an(e,"set","$slots")):s&&i===1?l=!1:(qe(r,n),!s&&i===1&&delete r._):(l=!n.$stable,Ad(n,r)),a=n}else n&&(Cd(e,n),a={default:1});if(l)for(const i in r)!wd(i)&&!(i in a)&&delete r[i]};function ha(e,n,s,o,r=!1){if(ae(e)){e.forEach((h,y)=>ha(h,n&&(ae(n)?n[y]:n),s,o,r));return}if(Rs(o)&&!r)return;const l=o.shapeFlag&4?yl(o.component)||o.component.proxy:o.el,a=r?null:l,{i,r:c}=e;if(!i){N("Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function.");return}const u=n&&n.r,p=i.refs===Le?i.refs={}:i.refs,d=i.setupState;if(u!=null&&u!==c&&(je(u)?(p[u]=null,Be(d,u)&&(d[u]=null)):De(u)&&(u.value=null)),pe(c))bn(c,i,12,[a,p]);else{const h=je(c),y=De(c);if(h||y){const m=()=>{if(e.f){const b=h?Be(d,c)?d[c]:p[c]:c.value;r?ae(b)&&ti(b,l):ae(b)?b.includes(l)||b.push(l):h?(p[c]=[l],Be(d,c)&&(d[c]=p[c])):(c.value=[l],e.k&&(p[e.k]=c.value))}else h?(p[c]=a,Be(d,c)&&(d[c]=a)):y?(c.value=a,e.k&&(p[e.k]=a)):N("Invalid template ref type:",c,`(${typeof c})`)};a?(m.id=-1,st(m,s)):m()}else N("Invalid template ref type:",c,`(${typeof c})`)}}let Zs,On;function hn(e,n){e.appContext.config.performance&&jr()&&On.mark(`vue-${n}-${e.uid}`),xm(e,n,jr()?On.now():Date.now())}function yn(e,n){if(e.appContext.config.performance&&jr()){const s=`vue-${n}-${e.uid}`,o=s+":end";On.mark(o),On.measure(`<${ml(e,e.type)}> ${n}`,s,o),On.clearMarks(s),On.clearMarks(o)}wm(e,n,jr()?On.now():Date.now())}function jr(){return Zs!==void 0||(typeof window<"u"&&window.performance?(Zs=!0,On=window.performance):Zs=!1),Zs}function y0(){const e=[];if(e.length){const n=e.length>1;console.warn(`Feature flag${n?"s":""} ${e.join(", ")} ${n?"are":"is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`)}}const st=Dm;function m0(e){return g0(e)}function g0(e,n){y0();const s=$r();s.__VUE__=!0,Xp(s.__VUE_DEVTOOLS_GLOBAL_HOOK__,s);const{insert:o,remove:r,patchProp:l,createElement:a,createText:i,createComment:c,setText:u,setElementText:p,parentNode:d,nextSibling:h,setScopeId:y=xt,insertStaticContent:m}=e,b=(g,v,E,I=null,U=null,K=null,J=!1,H=null,G=In?!1:!!v.dynamicChildren)=>{if(g===v)return;g&&!rs(g,v)&&(I=Z(g),_t(g,U,K,!0),g=null),v.patchFlag===-2&&(G=!1,v.dynamicChildren=null);const{type:q,ref:oe,shapeFlag:se}=v;switch(q){case Qo:A(g,v,E,I);break;case it:w(g,v,E,I);break;case Ar:g==null?C(v,E,I,J):x(g,v,E,J);break;case Fe:ye(g,v,E,I,U,K,J,H,G);break;default:se&1?S(g,v,E,I,U,K,J,H,G):se&6?_e(g,v,E,I,U,K,J,H,G):se&64||se&128?q.process(g,v,E,I,U,K,J,H,G,te):N("Invalid VNode type:",q,`(${typeof q})`)}oe!=null&&U&&ha(oe,g&&g.ref,K,v||g,!v)},A=(g,v,E,I)=>{if(g==null)o(v.el=i(v.children),E,I);else{const U=v.el=g.el;v.children!==g.children&&u(U,v.children)}},w=(g,v,E,I)=>{g==null?o(v.el=c(v.children||""),E,I):v.el=g.el},C=(g,v,E,I)=>{[g.el,g.anchor]=m(g.children,v,E,I,g.el,g.anchor)},x=(g,v,E,I)=>{if(v.children!==g.children){const U=h(g.anchor);k(g),[v.el,v.anchor]=m(v.children,E,U,I)}else v.el=g.el,v.anchor=g.anchor},B=({el:g,anchor:v},E,I)=>{let U;for(;g&&g!==v;)U=h(g),o(g,E,I),g=U;o(v,E,I)},k=({el:g,anchor:v})=>{let E;for(;g&&g!==v;)E=h(g),r(g),g=E;r(v)},S=(g,v,E,I,U,K,J,H,G)=>{J=J||v.type==="svg",g==null?L(v,E,I,U,K,J,H,G):ne(g,v,U,K,J,H,G)},L=(g,v,E,I,U,K,J,H)=>{let G,q;const{type:oe,props:se,shapeFlag:ce,transition:fe,dirs:ke}=g;if(G=g.el=a(g.type,K,se&&se.is,se),ce&8?p(G,g.children):ce&16&&j(g.children,G,null,I,U,K&&oe!=="foreignObject",J,H),ke&&Zn(g,null,I,"created"),O(G,g,g.scopeId,J,I),se){for(const Me in se)Me!=="value"&&!br(Me)&&l(G,Me,null,se[Me],K,g.children,I,U,D);"value"in se&&l(G,"value",null,se.value),(q=se.onVnodeBeforeMount)&&It(q,I,g)}Object.defineProperty(G,"__vnode",{value:g,enumerable:!1}),Object.defineProperty(G,"__vueParentComponent",{value:I,enumerable:!1}),ke&&Zn(g,null,I,"beforeMount");const Ne=(!U||U&&!U.pendingBranch)&&fe&&!fe.persisted;Ne&&fe.beforeEnter(G),o(G,v,E),((q=se&&se.onVnodeMounted)||Ne||ke)&&st(()=>{q&&It(q,I,g),Ne&&fe.enter(G),ke&&Zn(g,null,I,"mounted")},U)},O=(g,v,E,I,U)=>{if(E&&y(g,E),I)for(let K=0;K<I.length;K++)y(g,I[K]);if(U){let K=U.subTree;if(K.patchFlag>0&&K.patchFlag&2048&&(K=rd(K.children)||K),v===K){const J=U.vnode;O(g,J,J.scopeId,J.slotScopeIds,U.parent)}}},j=(g,v,E,I,U,K,J,H,G=0)=>{for(let q=G;q<g.length;q++){const oe=g[q]=H?Tn(g[q]):Vt(g[q]);b(null,oe,v,E,I,U,K,J,H)}},ne=(g,v,E,I,U,K,J)=>{const H=v.el=g.el;let{patchFlag:G,dynamicChildren:q,dirs:oe}=v;G|=g.patchFlag&16;const se=g.props||Le,ce=v.props||Le;let fe;E&&Jn(E,!1),(fe=ce.onVnodeBeforeUpdate)&&It(fe,E,v,g),oe&&Zn(v,g,E,"beforeUpdate"),E&&Jn(E,!0),In&&(G=0,J=!1,q=null);const ke=U&&v.type!=="foreignObject";if(q?(ue(g.dynamicChildren,q,H,E,I,ke,K),Wr(g,v)):J||Ce(g,v,H,null,E,I,ke,K,!1),G>0){if(G&16)Q(H,v,se,ce,E,I,U);else if(G&2&&se.class!==ce.class&&l(H,"class",null,ce.class,U),G&4&&l(H,"style",se.style,ce.style,U),G&8){const Ne=v.dynamicProps;for(let Me=0;Me<Ne.length;Me++){const Ke=Ne[Me],jt=se[Ke],Ds=ce[Ke];(Ds!==jt||Ke==="value")&&l(H,Ke,jt,Ds,U,g.children,E,I,D)}}G&1&&g.children!==v.children&&p(H,v.children)}else!J&&q==null&&Q(H,v,se,ce,E,I,U);((fe=ce.onVnodeUpdated)||oe)&&st(()=>{fe&&It(fe,E,v,g),oe&&Zn(v,g,E,"updated")},I)},ue=(g,v,E,I,U,K,J)=>{for(let H=0;H<v.length;H++){const G=g[H],q=v[H],oe=G.el&&(G.type===Fe||!rs(G,q)||G.shapeFlag&70)?d(G.el):E;b(G,q,oe,null,I,U,K,J,!0)}},Q=(g,v,E,I,U,K,J)=>{if(E!==I){if(E!==Le)for(const H in E)!br(H)&&!(H in I)&&l(g,H,E[H],null,J,v.children,U,K,D);for(const H in I){if(br(H))continue;const G=I[H],q=E[H];G!==q&&H!=="value"&&l(g,H,q,G,J,v.children,U,K,D)}"value"in I&&l(g,"value",E.value,I.value)}},ye=(g,v,E,I,U,K,J,H,G)=>{const q=v.el=g?g.el:i(""),oe=v.anchor=g?g.anchor:i("");let{patchFlag:se,dynamicChildren:ce,slotScopeIds:fe}=v;(In||se&2048)&&(se=0,G=!1,ce=null),fe&&(H=H?H.concat(fe):fe),g==null?(o(q,E,I),o(oe,E,I),j(v.children,E,oe,U,K,J,H,G)):se>0&&se&64&&ce&&g.dynamicChildren?(ue(g.dynamicChildren,ce,E,U,K,J,H),Wr(g,v)):Ce(g,v,E,oe,U,K,J,H,G)},_e=(g,v,E,I,U,K,J,H,G)=>{v.slotScopeIds=H,g==null?v.shapeFlag&512?U.ctx.activate(v,E,I,J,G):be(v,E,I,U,K,J,G):Pe(g,v,G)},be=(g,v,E,I,U,K,J)=>{const H=g.component=F0(g,I,U);if(H.type.__hmrId&&fm(H),xr(g),hn(H,"mount"),vi(g)&&(H.ctx.renderer=te),hn(H,"init"),D0(H),yn(H,"init"),H.asyncDep){if(U&&U.registerDep(H,ee),!g.el){const G=H.subTree=M(it);w(null,G,v,E)}return}ee(H,g,v,E,U,K,J),wr(),yn(H,"mount")},Pe=(g,v,E)=>{const I=v.component=g.component;if(Fm(g,v,E))if(I.asyncDep&&!I.asyncResolved){xr(v),ie(I,v,E),wr();return}else I.next=v,pm(I.update),I.update();else v.el=g.el,I.vnode=v},ee=(g,v,E,I,U,K,J)=>{const H=()=>{if(g.isMounted){let{next:oe,bu:se,u:ce,parent:fe,vnode:ke}=g,Ne=oe,Me;xr(oe||g.vnode),Jn(g,!1),oe?(oe.el=ke.el,ie(g,oe,J)):oe=ke,se&&os(se),(Me=oe.props&&oe.props.onVnodeBeforeUpdate)&&It(Me,fe,oe,ke),Jn(g,!0),hn(g,"render");const Ke=Al(g);yn(g,"render");const jt=g.subTree;g.subTree=Ke,hn(g,"patch"),b(jt,Ke,d(jt.el),Z(jt),g,U,K),yn(g,"patch"),oe.el=Ke.el,Ne===null&&Sm(g,Ke.el),ce&&st(ce,U),(Me=oe.props&&oe.props.onVnodeUpdated)&&st(()=>It(Me,fe,oe,ke),U),ed(g),wr()}else{let oe;const{el:se,props:ce}=v,{bm:fe,m:ke,parent:Ne}=g,Me=Rs(v);if(Jn(g,!1),fe&&os(fe),!Me&&(oe=ce&&ce.onVnodeBeforeMount)&&It(oe,Ne,v),Jn(g,!0),se&&Ie){const Ke=()=>{hn(g,"render"),g.subTree=Al(g),yn(g,"render"),hn(g,"hydrate"),Ie(se,g.subTree,g,U,null),yn(g,"hydrate")};Me?v.type.__asyncLoader().then(()=>!g.isUnmounted&&Ke()):Ke()}else{hn(g,"render");const Ke=g.subTree=Al(g);yn(g,"render"),hn(g,"patch"),b(null,Ke,E,I,g,U,K),yn(g,"patch"),v.el=Ke.el}if(ke&&st(ke,U),!Me&&(oe=ce&&ce.onVnodeMounted)){const Ke=v;st(()=>It(oe,Ne,Ke),U)}(v.shapeFlag&256||Ne&&Rs(Ne.vnode)&&Ne.vnode.shapeFlag&256)&&g.a&&st(g.a,U),g.isMounted=!0,ra(g),v=E=I=null}},G=g.effect=new ii(H,()=>il(q),g.scope),q=g.update=()=>G.run();q.id=g.uid,Jn(g,!0),G.onTrack=g.rtc?oe=>os(g.rtc,oe):void 0,G.onTrigger=g.rtg?oe=>os(g.rtg,oe):void 0,q.ownerInstance=g,q()},ie=(g,v,E)=>{v.component=g;const I=g.vnode.props;g.vnode=v,g.next=null,l0(g,v.props,I,E),h0(g,v.children,E),Cs(),uc(),Bs()},Ce=(g,v,E,I,U,K,J,H,G=!1)=>{const q=g&&g.children,oe=g?g.shapeFlag:0,se=v.children,{patchFlag:ce,shapeFlag:fe}=v;if(ce>0){if(ce&128){Ot(q,se,E,I,U,K,J,H,G);return}else if(ce&256){Ue(q,se,E,I,U,K,J,H,G);return}}fe&8?(oe&16&&D(q,U,K),se!==q&&p(E,se)):oe&16?fe&16?Ot(q,se,E,I,U,K,J,H,G):D(q,U,K,!0):(oe&8&&p(E,""),fe&16&&j(se,E,I,U,K,J,H,G))},Ue=(g,v,E,I,U,K,J,H,G)=>{g=g||Ms,v=v||Ms;const q=g.length,oe=v.length,se=Math.min(q,oe);let ce;for(ce=0;ce<se;ce++){const fe=v[ce]=G?Tn(v[ce]):Vt(v[ce]);b(g[ce],fe,E,null,U,K,J,H,G)}q>oe?D(g,U,K,!0,!1,se):j(v,E,I,U,K,J,H,G,se)},Ot=(g,v,E,I,U,K,J,H,G)=>{let q=0;const oe=v.length;let se=g.length-1,ce=oe-1;for(;q<=se&&q<=ce;){const fe=g[q],ke=v[q]=G?Tn(v[q]):Vt(v[q]);if(rs(fe,ke))b(fe,ke,E,null,U,K,J,H,G);else break;q++}for(;q<=se&&q<=ce;){const fe=g[se],ke=v[ce]=G?Tn(v[ce]):Vt(v[ce]);if(rs(fe,ke))b(fe,ke,E,null,U,K,J,H,G);else break;se--,ce--}if(q>se){if(q<=ce){const fe=ce+1,ke=fe<oe?v[fe].el:I;for(;q<=ce;)b(null,v[q]=G?Tn(v[q]):Vt(v[q]),E,ke,U,K,J,H,G),q++}}else if(q>ce)for(;q<=se;)_t(g[q],U,K,!0),q++;else{const fe=q,ke=q,Ne=new Map;for(q=ke;q<=ce;q++){const pt=v[q]=G?Tn(v[q]):Vt(v[q]);pt.key!=null&&(Ne.has(pt.key)&&N("Duplicate keys found during update:",JSON.stringify(pt.key),"Make sure keys are unique."),Ne.set(pt.key,q))}let Me,Ke=0;const jt=ce-ke+1;let Ds=!1,Xi=0;const Qs=new Array(jt);for(q=0;q<jt;q++)Qs[q]=0;for(q=fe;q<=se;q++){const pt=g[q];if(Ke>=jt){_t(pt,U,K,!0);continue}let Xt;if(pt.key!=null)Xt=Ne.get(pt.key);else for(Me=ke;Me<=ce;Me++)if(Qs[Me-ke]===0&&rs(pt,v[Me])){Xt=Me;break}Xt===void 0?_t(pt,U,K,!0):(Qs[Xt-ke]=q+1,Xt>=Xi?Xi=Xt:Ds=!0,b(pt,v[Xt],E,null,U,K,J,H,G),Ke++)}const ec=Ds?_0(Qs):Ms;for(Me=ec.length-1,q=jt-1;q>=0;q--){const pt=ke+q,Xt=v[pt],tc=pt+1<oe?v[pt+1].el:I;Qs[q]===0?b(null,Xt,E,tc,U,K,J,H,G):Ds&&(Me<0||q!==ec[Me]?ot(Xt,E,tc,2):Me--)}}},ot=(g,v,E,I,U=null)=>{const{el:K,type:J,transition:H,children:G,shapeFlag:q}=g;if(q&6){ot(g.component.subTree,v,E,I);return}if(q&128){g.suspense.move(v,E,I);return}if(q&64){J.move(g,v,E,te);return}if(J===Fe){o(K,v,E);for(let se=0;se<G.length;se++)ot(G[se],v,E,I);o(g.anchor,v,E);return}if(J===Ar){B(g,v,E);return}if(I!==2&&q&1&&H)if(I===0)H.beforeEnter(K),o(K,v,E),st(()=>H.enter(K),U);else{const{leave:se,delayLeave:ce,afterLeave:fe}=H,ke=()=>o(K,v,E),Ne=()=>{se(K,()=>{ke(),fe&&fe()})};ce?ce(K,ke,Ne):Ne()}else o(K,v,E)},_t=(g,v,E,I=!1,U=!1)=>{const{type:K,props:J,ref:H,children:G,dynamicChildren:q,shapeFlag:oe,patchFlag:se,dirs:ce}=g;if(H!=null&&ha(H,null,E,g,!0),oe&256){v.ctx.deactivate(g);return}const fe=oe&1&&ce,ke=!Rs(g);let Ne;if(ke&&(Ne=J&&J.onVnodeBeforeUnmount)&&It(Ne,v,g),oe&6)Ut(g.component,E,I);else{if(oe&128){g.suspense.unmount(E,I);return}fe&&Zn(g,null,v,"beforeUnmount"),oe&64?g.type.remove(g,v,E,U,te,I):q&&(K!==Fe||se>0&&se&64)?D(q,v,E,!1,!0):(K===Fe&&se&384||!U&&oe&16)&&D(G,v,E),I&&Jt(g)}(ke&&(Ne=J&&J.onVnodeUnmounted)||fe)&&st(()=>{Ne&&It(Ne,v,g),fe&&Zn(g,null,v,"unmounted")},E)},Jt=g=>{const{type:v,el:E,anchor:I,transition:U}=g;if(v===Fe){g.patchFlag>0&&g.patchFlag&2048&&U&&!U.persisted?g.children.forEach(J=>{J.type===it?r(J.el):Jt(J)}):Qn(E,I);return}if(v===Ar){k(g);return}const K=()=>{r(E),U&&!U.persisted&&U.afterLeave&&U.afterLeave()};if(g.shapeFlag&1&&U&&!U.persisted){const{leave:J,delayLeave:H}=U,G=()=>J(E,K);H?H(g.el,K,G):G()}else K()},Qn=(g,v)=>{let E;for(;g!==v;)E=h(g),r(g),g=E;r(v)},Ut=(g,v,E)=>{g.type.__hmrId&&hm(g);const{bum:I,scope:U,update:K,subTree:J,um:H}=g;I&&os(I),U.stop(),K&&(K.active=!1,_t(J,g,v,E)),H&&st(H,v),st(()=>{g.isUnmounted=!0},v),v&&v.pendingBranch&&!v.isUnmounted&&g.asyncDep&&!g.asyncResolved&&g.suspenseId===v.pendingId&&(v.deps--,v.deps===0&&v.resolve()),bm(g)},D=(g,v,E,I=!1,U=!1,K=0)=>{for(let J=K;J<g.length;J++)_t(g[J],v,E,I,U)},Z=g=>g.shapeFlag&6?Z(g.component.subTree):g.shapeFlag&128?g.suspense.next():h(g.anchor||g.el),X=(g,v,E)=>{g==null?v._vnode&&_t(v._vnode,null,null,!0):b(v._vnode||null,g,v,null,null,null,E),uc(),Qp(),v._vnode=g},te={p:b,um:_t,m:ot,r:Jt,mt:be,mc:j,pc:Ce,pbc:ue,n:Z,o:e};let we,Ie;return n&&([we,Ie]=n(te)),{render:X,hydrate:we,createApp:s0(X,we)}}function Jn({effect:e,update:n},s){e.allowRecurse=n.allowRecurse=s}function Wr(e,n,s=!1){const o=e.children,r=n.children;if(ae(o)&&ae(r))for(let l=0;l<o.length;l++){const a=o[l];let i=r[l];i.shapeFlag&1&&!i.dynamicChildren&&((i.patchFlag<=0||i.patchFlag===32)&&(i=r[l]=Tn(r[l]),i.el=a.el),s||Wr(a,i)),i.type===Qo&&(i.el=a.el),i.type===it&&!i.el&&(i.el=a.el)}}function _0(e){const n=e.slice(),s=[0];let o,r,l,a,i;const c=e.length;for(o=0;o<c;o++){const u=e[o];if(u!==0){if(r=s[s.length-1],e[r]<u){n[o]=r,s.push(o);continue}for(l=0,a=s.length-1;l<a;)i=l+a>>1,e[s[i]]<u?l=i+1:a=i;u<e[s[l]]&&(l>0&&(n[o]=s[l-1]),s[l]=o)}}for(l=s.length,a=s[l-1];l-- >0;)s[l]=a,a=n[a];return s}const v0=e=>e.__isTeleport,Ns=e=>e&&(e.disabled||e.disabled===""),Cc=e=>typeof SVGElement<"u"&&e instanceof SVGElement,ya=(e,n)=>{const s=e&&e.to;if(je(s))if(n){const o=n(s);return o||N(`Failed to locate Teleport target with selector "${s}". Note the target element must exist before the component is mounted - i.e. the target cannot be rendered by the component itself, and ideally should be outside of the entire Vue component tree.`),o}else return N("Current renderer does not support string target for Teleports. (missing querySelector renderer option)"),null;else return!s&&!Ns(e)&&N(`Invalid Teleport target: ${s}`),s},b0={__isTeleport:!0,process(e,n,s,o,r,l,a,i,c,u){const{mc:p,pc:d,pbc:h,o:{insert:y,querySelector:m,createText:b,createComment:A}}=u,w=Ns(n.props);let{shapeFlag:C,children:x,dynamicChildren:B}=n;if(In&&(c=!1,B=null),e==null){const k=n.el=A("teleport start"),S=n.anchor=A("teleport end");y(k,s,o),y(S,s,o);const L=n.target=ya(n.props,m),O=n.targetAnchor=b("");L?(y(O,L),a=a||Cc(L)):w||N("Invalid Teleport target on mount:",L,`(${typeof L})`);const j=(ne,ue)=>{C&16&&p(x,ne,ue,r,l,a,i,c)};w?j(s,S):L&&j(L,O)}else{n.el=e.el;const k=n.anchor=e.anchor,S=n.target=e.target,L=n.targetAnchor=e.targetAnchor,O=Ns(e.props),j=O?s:S,ne=O?k:L;if(a=a||Cc(S),B?(h(e.dynamicChildren,B,j,r,l,a,i),Wr(e,n,!0)):c||d(e,n,j,ne,r,l,a,i,!1),w)O||ir(n,s,k,u,1);else if((n.props&&n.props.to)!==(e.props&&e.props.to)){const ue=n.target=ya(n.props,m);ue?ir(n,ue,null,u,0):N("Invalid Teleport target on update:",S,`(${typeof S})`)}else O&&ir(n,S,L,u,1)}Bd(n)},remove(e,n,s,o,{um:r,o:{remove:l}},a){const{shapeFlag:i,children:c,anchor:u,targetAnchor:p,target:d,props:h}=e;if(d&&l(p),(a||!Ns(h))&&(l(u),i&16))for(let y=0;y<c.length;y++){const m=c[y];r(m,n,s,!0,!!m.dynamicChildren)}},move:ir,hydrate:x0};function ir(e,n,s,{o:{insert:o},m:r},l=2){l===0&&o(e.targetAnchor,n,s);const{el:a,anchor:i,shapeFlag:c,children:u,props:p}=e,d=l===2;if(d&&o(a,n,s),(!d||Ns(p))&&c&16)for(let h=0;h<u.length;h++)r(u[h],n,s,2);d&&o(i,n,s)}function x0(e,n,s,o,r,l,{o:{nextSibling:a,parentNode:i,querySelector:c}},u){const p=n.target=ya(n.props,c);if(p){const d=p._lpa||p.firstChild;if(n.shapeFlag&16)if(Ns(n.props))n.anchor=u(a(e),n,i(e),s,o,r,l),n.targetAnchor=d;else{n.anchor=a(e);let h=d;for(;h;)if(h=a(h),h&&h.nodeType===8&&h.data==="teleport anchor"){n.targetAnchor=h,p._lpa=n.targetAnchor&&a(n.targetAnchor);break}u(d,n,p,s,o,r,l)}Bd(n)}return n.anchor&&a(n.anchor)}const w0=b0;function Bd(e){const n=e.ctx;if(n&&n.ut){let s=e.children[0].el;for(;s!==e.targetAnchor;)s.nodeType===1&&s.setAttribute("data-v-owner",n.uid),s=s.nextSibling;n.ut()}}const Fe=Symbol.for("v-fgt"),Qo=Symbol.for("v-txt"),it=Symbol.for("v-cmt"),Ar=Symbol.for("v-stc"),_o=[];let Kt=null;function _(e=!1){_o.push(Kt=e?null:[])}function A0(){_o.pop(),Kt=_o[_o.length-1]||null}let Oo=1;function Bc(e){Oo+=e}function kd(e){return e.dynamicChildren=Oo>0?Kt||Ms:null,A0(),Oo>0&&Kt&&Kt.push(e),e}function F(e,n,s,o,r,l){return kd(t(e,n,s,o,r,l,!0))}function W(e,n,s,o,r){return kd(M(e,n,s,o,r,!0))}function un(e){return e?e.__v_isVNode===!0:!1}function rs(e,n){return n.shapeFlag&6&&Ps.has(n.type)?(e.shapeFlag&=-257,n.shapeFlag&=-513,!1):e.type===n.type&&e.key===n.key}const C0=(...e)=>B0(...e),hl="__vInternal",Ed=({key:e})=>e??null,Cr=({ref:e,ref_key:n,ref_for:s})=>(typeof e=="number"&&(e=""+e),e!=null?je(e)||De(e)||pe(e)?{i:Je,r:e,k:n,f:!!s}:e:null);function t(e,n=null,s=null,o=0,r=null,l=e===Fe?0:1,a=!1,i=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:n,key:n&&Ed(n),ref:n&&Cr(n),scopeId:ul,slotScopeIds:null,children:s,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:l,patchFlag:o,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Je};return i?(Ai(c,s),l&128&&e.normalize(c)):s&&(c.shapeFlag|=je(s)?8:16),c.key!==c.key&&N("VNode created with invalid key (NaN). VNode type:",c.type),Oo>0&&!a&&Kt&&(c.patchFlag>0||l&6)&&c.patchFlag!==32&&Kt.push(c),c}const M=C0;function B0(e,n=null,s=null,o=0,r=null,l=!1){if((!e||e===Hm)&&(e||N(`Invalid vnode type when creating vnode: ${e}.`),e=it),un(e)){const i=pn(e,n,!0);return s&&Ai(i,s),Oo>0&&!l&&Kt&&(i.shapeFlag&6?Kt[Kt.indexOf(e)]=i:Kt.push(i)),i.patchFlag|=-2,i}if($d(e)&&(e=e.__vccOpts),n){n=re(n);let{class:i,style:c}=n;i&&!je(i)&&(n.class=Re(i)),$e(c)&&(Ir(c)&&!ae(c)&&(c=qe({},c)),n.style=et(c))}const a=je(e)?1:ld(e)?128:v0(e)?64:$e(e)?4:pe(e)?2:0;return a&4&&Ir(e)&&(e=he(e),N("Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",`
Component that was made reactive: `,e)),t(e,n,s,o,r,a,l,!0)}function re(e){return e?Ir(e)||hl in e?qe({},e):e:null}function pn(e,n,s=!1){const{props:o,ref:r,patchFlag:l,children:a}=e,i=n?ze(o||{},n):o;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:i,key:i&&Ed(i),ref:n&&n.ref?s&&r?ae(r)?r.concat(Cr(n)):[r,Cr(n)]:Cr(n):r,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:l===-1&&ae(a)?a.map(Fd):a,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:n&&e.type!==Fe?l===-1?16:l|16:l,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&pn(e.ssContent),ssFallback:e.ssFallback&&pn(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function Fd(e){const n=pn(e);return ae(e.children)&&(n.children=e.children.map(Fd)),n}function f(e=" ",n=0){return M(Qo,null,e,n)}function me(e="",n=!1){return n?(_(),W(it,null,e)):M(it,null,e)}function Vt(e){return e==null||typeof e=="boolean"?M(it):ae(e)?M(Fe,null,e.slice()):typeof e=="object"?Tn(e):M(Qo,null,String(e))}function Tn(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:pn(e)}function Ai(e,n){let s=0;const{shapeFlag:o}=e;if(n==null)n=null;else if(ae(n))s=16;else if(typeof n=="object")if(o&65){const r=n.default;r&&(r._c&&(r._d=!1),Ai(e,r()),r._c&&(r._d=!0));return}else{s=32;const r=n._;!r&&!(hl in n)?n._ctx=Je:r===3&&Je&&(Je.slots._===1?n._=1:(n._=2,e.patchFlag|=1024))}else pe(n)?(n={default:n,_ctx:Je},s=32):(n=String(n),o&64?(s=16,n=[f(n)]):s=8);e.children=n,e.shapeFlag|=s}function ze(...e){const n={};for(let s=0;s<e.length;s++){const o=e[s];for(const r in o)if(r==="class")n.class!==o.class&&(n.class=Re([n.class,o.class]));else if(r==="style")n.style=et([n.style,o.style]);else if(zo(r)){const l=n[r],a=o[r];a&&l!==a&&!(ae(l)&&l.includes(a))&&(n[r]=l?[].concat(l,a):a)}else r!==""&&(n[r]=o[r])}return n}function It(e,n,s,o=null){Rt(e,n,7,[s,o])}const k0=_d();let E0=0;function F0(e,n,s){const o=e.type,r=(n?n.appContext:e.appContext)||k0,l={uid:E0++,vnode:e,type:o,parent:n,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Fp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:n?n.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:bd(o,r),emitsOptions:nd(o,r),emit:null,emitted:null,propsDefaults:Le,inheritAttrs:o.inheritAttrs,ctx:Le,data:Le,props:Le,attrs:Le,slots:Le,refs:Le,setupState:Le,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:s,suspenseId:s?s.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return l.ctx=Vm(l),l.root=n?n.root:l,l.emit=Cm.bind(null,l),e.ce&&e.ce(l),l}let Ze=null;const $t=()=>Ze||Je;let Ci,Ts,kc="__VUE_INSTANCE_SETTERS__";(Ts=$r()[kc])||(Ts=$r()[kc]=[]),Ts.push(e=>Ze=e),Ci=e=>{Ts.length>1?Ts.forEach(n=>n(e)):Ts[0](e)};const Ws=e=>{Ci(e),e.scope.on()},vs=()=>{Ze&&Ze.scope.off(),Ci(null)},S0=Kn("slot,component");function ma(e,n){const s=n.isNativeTag||xp;(S0(e)||s(e))&&N("Do not use built-in or reserved HTML elements as component id: "+e)}function Sd(e){return e.vnode.shapeFlag&4}let Uo=!1;function D0(e,n=!1){Uo=n;const{props:s,children:o}=e.vnode,r=Sd(e);o0(e,s,r,n),f0(e,o);const l=r?T0(e,n):void 0;return Uo=!1,l}function T0(e,n){var s;const o=e.type;{if(o.name&&ma(o.name,e.appContext.config),o.components){const l=Object.keys(o.components);for(let a=0;a<l.length;a++)ma(l[a],e.appContext.config)}if(o.directives){const l=Object.keys(o.directives);for(let a=0;a<l.length;a++)id(l[a])}o.compilerOptions&&$0()&&N('"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.')}e.accessCache=Object.create(null),e.proxy=ll(new Proxy(e.ctx,md)),zm(e);const{setup:r}=o;if(r){const l=e.setupContext=r.length>1?Td(e):null;Ws(e),Cs();const a=bn(r,e,0,[uo(e.props),l]);if(Bs(),vs(),si(a)){if(a.then(vs,vs),n)return a.then(i=>{Ec(e,i,n)}).catch(i=>{al(i,e,0)});if(e.asyncDep=a,!e.suspense){const i=(s=o.name)!=null?s:"Anonymous";N(`Component <${i}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`)}}else Ec(e,a,n)}else Dd(e,n)}function Ec(e,n,s){pe(n)?e.type.__ssrInlineRender?e.ssrRender=n:e.render=n:$e(n)?(un(n)&&N("setup() should not return VNodes directly - return a render function instead."),e.devtoolsRawSetupState=n,e.setupState=Hp(n),Km(e)):n!==void 0&&N(`setup() should return an object. Received: ${n===null?"null":typeof n}`),Dd(e,s)}let ga;const $0=()=>!ga;function Dd(e,n,s){const o=e.type;if(!e.render){if(!n&&ga&&!o.render){const r=o.template||xi(e).template;if(r){hn(e,"compile");const{isCustomElement:l,compilerOptions:a}=e.appContext.config,{delimiters:i,compilerOptions:c}=o,u=qe(qe({isCustomElement:l,delimiters:i},a),c);o.render=ga(r,u),yn(e,"compile")}}e.render=o.render||xt}Ws(e),Cs(),Zm(e),Bs(),vs(),!o.render&&e.render===xt&&!n&&(o.template?N('Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'):N("Component is missing template or render function."))}function O0(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(n,s){return Lr(),ut(e,"get","$attrs"),n[s]},set(){return N("setupContext.attrs is readonly."),!1},deleteProperty(){return N("setupContext.attrs is readonly."),!1}}))}function U0(e){return e.slotsProxy||(e.slotsProxy=new Proxy(e.slots,{get(n,s){return ut(e,"get","$slots"),n[s]}}))}function Td(e){return Object.freeze({get attrs(){return O0(e)},get slots(){return U0(e)},get emit(){return(s,...o)=>e.emit(s,...o)},expose:s=>{if(e.exposed&&N("expose() should be called only once per setup()."),s!=null){let o=typeof s;o==="object"&&(ae(s)?o="array":De(s)&&(o="ref")),o!=="object"&&N(`expose() should be passed a plain object, received ${o}.`)}e.exposed=s||{}}})}function yl(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Hp(ll(e.exposed)),{get(n,s){if(s in n)return n[s];if(s in _s)return _s[s](e)},has(n,s){return s in n||s in _s}}))}const P0=/(?:^|[-_])(\w)/g,I0=e=>e.replace(P0,n=>n.toUpperCase()).replace(/[-_]/g,"");function Po(e,n=!0){return pe(e)?e.displayName||e.name:e.name||n&&e.__name}function ml(e,n,s=!1){let o=Po(n);if(!o&&n.__file){const r=n.__file.match(/([^/\\]+)\.\w+$/);r&&(o=r[1])}if(!o&&e&&e.parent){const r=l=>{for(const a in l)if(l[a]===n)return a};o=r(e.components||e.parent.type.components)||r(e.appContext.components)}return o?I0(o):s?"App":"Anonymous"}function $d(e){return pe(e)&&"__vccOpts"in e}const $=(e,n)=>nm(e,n,Uo);function Xe(e,n,s){const o=arguments.length;return o===2?$e(n)&&!ae(n)?un(n)?M(e,null,[n]):M(e,n):M(e,null,n):(o>3?s=Array.prototype.slice.call(arguments,2):o===3&&un(s)&&(s=[s]),M(e,n,s))}const M0=Symbol.for("v-scx"),L0=()=>{{const e=R(M0);return e||N("Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."),e}};function El(e){return!!(e&&e.__v_isShallow)}function R0(){if(typeof window>"u")return;const e={style:"color:#3ba776"},n={style:"color:#0b1bc9"},s={style:"color:#b62e24"},o={style:"color:#9d288c"},r={header(d){return $e(d)?d.__isVue?["div",e,"VueInstance"]:De(d)?["div",{},["span",e,p(d)],"<",i(d.value),">"]:ms(d)?["div",{},["span",e,El(d)?"ShallowReactive":"Reactive"],"<",i(d),`>${Hn(d)?" (readonly)":""}`]:Hn(d)?["div",{},["span",e,El(d)?"ShallowReadonly":"Readonly"],"<",i(d),">"]:null:null},hasBody(d){return d&&d.__isVue},body(d){if(d&&d.__isVue)return["div",{},...l(d.$)]}};function l(d){const h=[];d.type.props&&d.props&&h.push(a("props",he(d.props))),d.setupState!==Le&&h.push(a("setup",d.setupState)),d.data!==Le&&h.push(a("data",he(d.data)));const y=c(d,"computed");y&&h.push(a("computed",y));const m=c(d,"inject");return m&&h.push(a("injected",m)),h.push(["div",{},["span",{style:o.style+";opacity:0.66"},"$ (internal): "],["object",{object:d}]]),h}function a(d,h){return h=qe({},h),Object.keys(h).length?["div",{style:"line-height:1.25em;margin-bottom:0.6em"},["div",{style:"color:#476582"},d],["div",{style:"padding-left:1.25em"},...Object.keys(h).map(y=>["div",{},["span",o,y+": "],i(h[y],!1)])]]:["span",{}]}function i(d,h=!0){return typeof d=="number"?["span",n,d]:typeof d=="string"?["span",s,JSON.stringify(d)]:typeof d=="boolean"?["span",o,d]:$e(d)?["object",{object:h?he(d):d}]:["span",s,String(d)]}function c(d,h){const y=d.type;if(pe(y))return;const m={};for(const b in d.ctx)u(y,b,h)&&(m[b]=d.ctx[b]);return m}function u(d,h,y){const m=d[y];if(ae(m)&&m.includes(h)||$e(m)&&h in m||d.extends&&u(d.extends,h,y)||d.mixins&&d.mixins.some(b=>u(b,h,y)))return!0}function p(d){return El(d)?"ShallowRef":d.effect?"ComputedRef":"Ref"}window.devtoolsFormatters?window.devtoolsFormatters.push(r):window.devtoolsFormatters=[r]}const Hr="3.3.4",N0="http://www.w3.org/2000/svg",ls=typeof document<"u"?document:null,Fc=ls&&ls.createElement("template"),q0={insert:(e,n,s)=>{n.insertBefore(e,s||null)},remove:e=>{const n=e.parentNode;n&&n.removeChild(e)},createElement:(e,n,s,o)=>{const r=n?ls.createElementNS(N0,e):ls.createElement(e,s?{is:s}:void 0);return e==="select"&&o&&o.multiple!=null&&r.setAttribute("multiple",o.multiple),r},createText:e=>ls.createTextNode(e),createComment:e=>ls.createComment(e),setText:(e,n)=>{e.nodeValue=n},setElementText:(e,n)=>{e.textContent=n},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>ls.querySelector(e),setScopeId(e,n){e.setAttribute(n,"")},insertStaticContent(e,n,s,o,r,l){const a=s?s.previousSibling:n.lastChild;if(r&&(r===l||r.nextSibling))for(;n.insertBefore(r.cloneNode(!0),s),!(r===l||!(r=r.nextSibling)););else{Fc.innerHTML=o?`<svg>${e}</svg>`:e;const i=Fc.content;if(o){const c=i.firstChild;for(;c.firstChild;)i.appendChild(c.firstChild);i.removeChild(c)}n.insertBefore(i,s)}return[a?a.nextSibling:n.firstChild,s?s.previousSibling:n.lastChild]}};function j0(e,n,s){const o=e._vtc;o&&(n=(n?[n,...o]:[...o]).join(" ")),n==null?e.removeAttribute("class"):s?e.setAttribute("class",n):e.className=n}function W0(e,n,s){const o=e.style,r=je(s);if(s&&!r){if(n&&!je(n))for(const l in n)s[l]==null&&_a(o,l,"");for(const l in s)_a(o,l,s[l])}else{const l=o.display;r?n!==s&&(o.cssText=s):n&&e.removeAttribute("style"),"_vod"in e&&(o.display=l)}}const H0=/[^\\];\s*$/,Sc=/\s*!important$/;function _a(e,n,s){if(ae(s))s.forEach(o=>_a(e,n,o));else if(s==null&&(s=""),H0.test(s)&&N(`Unexpected semicolon at the end of '${n}' style value: '${s}'`),n.startsWith("--"))e.setProperty(n,s);else{const o=V0(e,n);Sc.test(s)?e.setProperty(wn(o),s.replace(Sc,""),"important"):e[o]=s}}const Dc=["Webkit","Moz","ms"],Fl={};function V0(e,n){const s=Fl[n];if(s)return s;let o=ln(n);if(o!=="filter"&&o in e)return Fl[n]=o;o=ws(o);for(let r=0;r<Dc.length;r++){const l=Dc[r]+o;if(l in e)return Fl[n]=l}return n}const Tc="http://www.w3.org/1999/xlink";function z0(e,n,s,o,r){if(o&&n.startsWith("xlink:"))s==null?e.removeAttributeNS(Tc,n.slice(6,n.length)):e.setAttributeNS(Tc,n,s);else{const l=my(n);s==null||l&&!kp(s)?e.removeAttribute(n):e.setAttribute(n,l?"":s)}}function K0(e,n,s,o,r,l,a){if(n==="innerHTML"||n==="textContent"){o&&a(o,r,l),e[n]=s??"";return}const i=e.tagName;if(n==="value"&&i!=="PROGRESS"&&!i.includes("-")){e._value=s;const u=i==="OPTION"?e.getAttribute("value"):e.value,p=s??"";u!==p&&(e.value=p),s==null&&e.removeAttribute(n);return}let c=!1;if(s===""||s==null){const u=typeof e[n];u==="boolean"?s=kp(s):s==null&&u==="string"?(s="",c=!0):u==="number"&&(s=0,c=!0)}try{e[n]=s}catch(u){c||N(`Failed setting prop "${n}" on <${i.toLowerCase()}>: value ${s} is invalid.`,u)}c&&e.removeAttribute(n)}function G0(e,n,s,o){e.addEventListener(n,s,o)}function Y0(e,n,s,o){e.removeEventListener(n,s,o)}function Q0(e,n,s,o,r=null){const l=e._vei||(e._vei={}),a=l[n];if(o&&a)a.value=o;else{const[i,c]=Z0(n);if(o){const u=l[n]=e1(o,r);G0(e,i,u,c)}else a&&(Y0(e,i,a,c),l[n]=void 0)}}const $c=/(?:Once|Passive|Capture)$/;function Z0(e){let n;if($c.test(e)){n={};let o;for(;o=e.match($c);)e=e.slice(0,e.length-o[0].length),n[o[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):wn(e.slice(2)),n]}let Sl=0;const J0=Promise.resolve(),X0=()=>Sl||(J0.then(()=>Sl=0),Sl=Date.now());function e1(e,n){const s=o=>{if(!o._vts)o._vts=Date.now();else if(o._vts<=s.attached)return;Rt(t1(o,s.value),n,5,[o])};return s.value=e,s.attached=X0(),s}function t1(e,n){if(ae(n)){const s=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{s.call(e),e._stopped=!0},n.map(o=>r=>!r._stopped&&o&&o(r))}else return n}const Oc=/^on[a-z]/,n1=(e,n,s,o,r=!1,l,a,i,c)=>{n==="class"?j0(e,o,r):n==="style"?W0(e,s,o):zo(n)?Dr(n)||Q0(e,n,s,o,a):(n[0]==="."?(n=n.slice(1),!0):n[0]==="^"?(n=n.slice(1),!1):s1(e,n,o,r))?K0(e,n,o,l,a,i,c):(n==="true-value"?e._trueValue=o:n==="false-value"&&(e._falseValue=o),z0(e,n,o,r))};function s1(e,n,s,o){return o?!!(n==="innerHTML"||n==="textContent"||n in e&&Oc.test(n)&&pe(s)):n==="spellcheck"||n==="draggable"||n==="translate"||n==="form"||n==="list"&&e.tagName==="INPUT"||n==="type"&&e.tagName==="TEXTAREA"||Oc.test(n)&&je(s)?!1:n in e}const En="transition",Js="animation",Od={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},o1=qe({},Om,Od),Xn=(e,n=[])=>{ae(e)?e.forEach(s=>s(...n)):e&&e(...n)},Uc=e=>e?ae(e)?e.some(n=>n.length>1):e.length>1:!1;function r1(e){const n={};for(const Q in e)Q in Od||(n[Q]=e[Q]);if(e.css===!1)return n;const{name:s="v",type:o,duration:r,enterFromClass:l=`${s}-enter-from`,enterActiveClass:a=`${s}-enter-active`,enterToClass:i=`${s}-enter-to`,appearFromClass:c=l,appearActiveClass:u=a,appearToClass:p=i,leaveFromClass:d=`${s}-leave-from`,leaveActiveClass:h=`${s}-leave-active`,leaveToClass:y=`${s}-leave-to`}=e,m=l1(r),b=m&&m[0],A=m&&m[1],{onBeforeEnter:w,onEnter:C,onEnterCancelled:x,onLeave:B,onLeaveCancelled:k,onBeforeAppear:S=w,onAppear:L=C,onAppearCancelled:O=x}=n,j=(Q,ye,_e)=>{Sn(Q,ye?p:i),Sn(Q,ye?u:a),_e&&_e()},ne=(Q,ye)=>{Q._isLeaving=!1,Sn(Q,d),Sn(Q,y),Sn(Q,h),ye&&ye()},ue=Q=>(ye,_e)=>{const be=Q?L:C,Pe=()=>j(ye,Q,_e);Xn(be,[ye,Pe]),Pc(()=>{Sn(ye,Q?c:l),mn(ye,Q?p:i),Uc(be)||Ic(ye,o,b,Pe)})};return qe(n,{onBeforeEnter(Q){Xn(w,[Q]),mn(Q,l),mn(Q,a)},onBeforeAppear(Q){Xn(S,[Q]),mn(Q,c),mn(Q,u)},onEnter:ue(!1),onAppear:ue(!0),onLeave(Q,ye){Q._isLeaving=!0;const _e=()=>ne(Q,ye);mn(Q,d),Pd(),mn(Q,h),Pc(()=>{Q._isLeaving&&(Sn(Q,d),mn(Q,y),Uc(B)||Ic(Q,o,A,_e))}),Xn(B,[Q,_e])},onEnterCancelled(Q){j(Q,!1),Xn(x,[Q])},onAppearCancelled(Q){j(Q,!0),Xn(O,[Q])},onLeaveCancelled(Q){ne(Q),Xn(k,[Q])}})}function l1(e){if(e==null)return null;if($e(e))return[Dl(e.enter),Dl(e.leave)];{const n=Dl(e);return[n,n]}}function Dl(e){const n=ay(e);return am(n,"<transition> explicit duration"),n}function mn(e,n){n.split(/\s+/).forEach(s=>s&&e.classList.add(s)),(e._vtc||(e._vtc=new Set)).add(n)}function Sn(e,n){n.split(/\s+/).forEach(o=>o&&e.classList.remove(o));const{_vtc:s}=e;s&&(s.delete(n),s.size||(e._vtc=void 0))}function Pc(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let a1=0;function Ic(e,n,s,o){const r=e._endId=++a1,l=()=>{r===e._endId&&o()};if(s)return setTimeout(l,s);const{type:a,timeout:i,propCount:c}=Ud(e,n);if(!a)return o();const u=a+"end";let p=0;const d=()=>{e.removeEventListener(u,h),l()},h=y=>{y.target===e&&++p>=c&&d()};setTimeout(()=>{p<c&&d()},i+1),e.addEventListener(u,h)}function Ud(e,n){const s=window.getComputedStyle(e),o=m=>(s[m]||"").split(", "),r=o(`${En}Delay`),l=o(`${En}Duration`),a=Mc(r,l),i=o(`${Js}Delay`),c=o(`${Js}Duration`),u=Mc(i,c);let p=null,d=0,h=0;n===En?a>0&&(p=En,d=a,h=l.length):n===Js?u>0&&(p=Js,d=u,h=c.length):(d=Math.max(a,u),p=d>0?a>u?En:Js:null,h=p?p===En?l.length:c.length:0);const y=p===En&&/\b(transform|all)(,|$)/.test(o(`${En}Property`).toString());return{type:p,timeout:d,propCount:h,hasTransform:y}}function Mc(e,n){for(;e.length<n.length;)e=e.concat(e);return Math.max(...n.map((s,o)=>Lc(s)+Lc(e[o])))}function Lc(e){return Number(e.slice(0,-1).replace(",","."))*1e3}function Pd(){return document.body.offsetHeight}const Id=new WeakMap,Md=new WeakMap,Ld={name:"TransitionGroup",props:qe({},o1,{tag:String,moveClass:String}),setup(e,{slots:n}){const s=$t(),o=$m();let r,l;return dl(()=>{if(!r.length)return;const a=e.moveClass||`${e.name||"v"}-move`;if(!f1(r[0].el,s.vnode.el,a))return;r.forEach(u1),r.forEach(p1);const i=r.filter(d1);Pd(),i.forEach(c=>{const u=c.el,p=u.style;mn(u,a),p.transform=p.webkitTransform=p.transitionDuration="";const d=u._moveCb=h=>{h&&h.target!==u||(!h||/transform$/.test(h.propertyName))&&(u.removeEventListener("transitionend",d),u._moveCb=null,Sn(u,a))};u.addEventListener("transitionend",d)})}),()=>{const a=he(e),i=r1(a);let c=a.tag||Fe;r=l,l=n.default?cd(n.default()):[];for(let u=0;u<l.length;u++){const p=l[u];p.key!=null?Rr(p,aa(p,i,o,s)):N("<TransitionGroup> children must be keyed.")}if(r)for(let u=0;u<r.length;u++){const p=r[u];Rr(p,aa(p,i,o,s)),Id.set(p,p.el.getBoundingClientRect())}return M(c,null,l)}}},i1=e=>delete e.mode;Ld.props;const c1=Ld;function u1(e){const n=e.el;n._moveCb&&n._moveCb(),n._enterCb&&n._enterCb()}function p1(e){Md.set(e,e.el.getBoundingClientRect())}function d1(e){const n=Id.get(e),s=Md.get(e),o=n.left-s.left,r=n.top-s.top;if(o||r){const l=e.el.style;return l.transform=l.webkitTransform=`translate(${o}px,${r}px)`,l.transitionDuration="0s",e}}function f1(e,n,s){const o=e.cloneNode();e._vtc&&e._vtc.forEach(a=>{a.split(/\s+/).forEach(i=>i&&o.classList.remove(i))}),s.split(/\s+/).forEach(a=>a&&o.classList.add(a)),o.style.display="none";const r=n.nodeType===1?n:n.parentNode;r.appendChild(o);const{hasTransform:l}=Ud(o);return r.removeChild(o),l}const h1=["ctrl","shift","alt","meta"],y1={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,n)=>h1.some(s=>e[`${s}Key`]&&!n.includes(s))},m1=(e,n)=>(s,...o)=>{for(let r=0;r<n.length;r++){const l=y1[n[r]];if(l&&l(s,n))return}return e(s,...o)},g1={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},cr=(e,n)=>s=>{if(!("key"in s))return;const o=wn(s.key);if(n.some(r=>r===o||g1[r]===o))return e(s)},Rd={beforeMount(e,{value:n},{transition:s}){e._vod=e.style.display==="none"?"":e.style.display,s&&n?s.beforeEnter(e):Xs(e,n)},mounted(e,{value:n},{transition:s}){s&&n&&s.enter(e)},updated(e,{value:n,oldValue:s},{transition:o}){!n!=!s&&(o?n?(o.beforeEnter(e),Xs(e,!0),o.enter(e)):o.leave(e,()=>{Xs(e,!1)}):Xs(e,n))},beforeUnmount(e,{value:n}){Xs(e,n)}};function Xs(e,n){e.style.display=n?e._vod:"none"}const _1=qe({patchProp:n1},q0);let Rc;function v1(){return Rc||(Rc=m0(_1))}const b1=(...e)=>{const n=v1().createApp(...e);x1(n),w1(n);const{mount:s}=n;return n.mount=o=>{const r=A1(o);if(!r)return;const l=n._component;!pe(l)&&!l.render&&!l.template&&(l.template=r.innerHTML),r.innerHTML="";const a=s(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),a},n};function x1(e){Object.defineProperty(e.config,"isNativeTag",{value:n=>Bp(n)||hy(n),writable:!1})}function w1(e){{const n=e.config.isCustomElement;Object.defineProperty(e.config,"isCustomElement",{get(){return n},set(){N("The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead.")}});const s=e.config.compilerOptions,o='The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';Object.defineProperty(e.config,"compilerOptions",{get(){return N(o),s},set(){N(o)}})}}function A1(e){if(je(e)){const n=document.querySelector(e);return n||N(`Failed to mount app: mount target selector "${e}" returned null.`),n}return window.ShadowRoot&&e instanceof window.ShadowRoot&&e.mode==="closed"&&N('mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'),e}function C1(){R0()}C1();function va(e,n={},s){for(const o in e){const r=e[o],l=s?`${s}:${o}`:o;typeof r=="object"&&r!==null?va(r,n,l):typeof r=="function"&&(n[l]=r)}return n}const B1={run:e=>e()},k1=()=>B1,Nd=typeof console.createTask<"u"?console.createTask:k1;function E1(e,n){const s=n.shift(),o=Nd(s);return e.reduce((r,l)=>r.then(()=>o.run(()=>l(...n))),Promise.resolve())}function F1(e,n){const s=n.shift(),o=Nd(s);return Promise.all(e.map(r=>o.run(()=>r(...n))))}function Tl(e,n){for(const s of[...e])s(n)}class S1{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(n,s,o={}){if(!n||typeof s!="function")return()=>{};const r=n;let l;for(;this._deprecatedHooks[n];)l=this._deprecatedHooks[n],n=l.to;if(l&&!o.allowDeprecated){let a=l.message;a||(a=`${r} hook has been deprecated`+(l.to?`, please use ${l.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(a)||(console.warn(a),this._deprecatedMessages.add(a))}if(!s.name)try{Object.defineProperty(s,"name",{get:()=>"_"+n.replace(/\W+/g,"_")+"_hook_cb",configurable:!0})}catch{}return this._hooks[n]=this._hooks[n]||[],this._hooks[n].push(s),()=>{s&&(this.removeHook(n,s),s=void 0)}}hookOnce(n,s){let o,r=(...l)=>(typeof o=="function"&&o(),o=void 0,r=void 0,s(...l));return o=this.hook(n,r),o}removeHook(n,s){if(this._hooks[n]){const o=this._hooks[n].indexOf(s);o!==-1&&this._hooks[n].splice(o,1),this._hooks[n].length===0&&delete this._hooks[n]}}deprecateHook(n,s){this._deprecatedHooks[n]=typeof s=="string"?{to:s}:s;const o=this._hooks[n]||[];delete this._hooks[n];for(const r of o)this.hook(n,r)}deprecateHooks(n){Object.assign(this._deprecatedHooks,n);for(const s in n)this.deprecateHook(s,n[s])}addHooks(n){const s=va(n),o=Object.keys(s).map(r=>this.hook(r,s[r]));return()=>{for(const r of o.splice(0,o.length))r()}}removeHooks(n){const s=va(n);for(const o in s)this.removeHook(o,s[o])}removeAllHooks(){for(const n in this._hooks)delete this._hooks[n]}callHook(n,...s){return s.unshift(n),this.callHookWith(E1,n,...s)}callHookParallel(n,...s){return s.unshift(n),this.callHookWith(F1,n,...s)}callHookWith(n,s,...o){const r=this._before||this._after?{name:s,args:o,context:{}}:void 0;this._before&&Tl(this._before,r);const l=n(s in this._hooks?[...this._hooks[s]]:[],o);return l instanceof Promise?l.finally(()=>{this._after&&r&&Tl(this._after,r)}):(this._after&&r&&Tl(this._after,r),l)}beforeEach(n){return this._before=this._before||[],this._before.push(n),()=>{if(this._before!==void 0){const s=this._before.indexOf(n);s!==-1&&this._before.splice(s,1)}}}afterEach(n){return this._after=this._after||[],this._after.push(n),()=>{if(this._after!==void 0){const s=this._after.indexOf(n);s!==-1&&this._after.splice(s,1)}}}}function D1(){return new S1}function T1(e){return Array.isArray(e)?e:[e]}const qd=["title","script","style","noscript"],jd=["base","meta","link","style","script","noscript"],$1=["title","titleTemplate","templateParams","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"],O1=["base","title","titleTemplate","bodyAttrs","htmlAttrs","templateParams"],U1=["tagPosition","tagPriority","tagDuplicateStrategy","innerHTML","textContent"];function Wd(e){let n=9;for(let s=0;s<e.length;)n=Math.imul(n^e.charCodeAt(s++),9**9);return((n^n>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function ba(e){return Wd(`${e.tag}:${e.textContent||e.innerHTML||""}:${Object.entries(e.props).map(([n,s])=>`${n}:${String(s)}`).join(",")}`)}function P1(e){let n=9;for(const s of e)for(let o=0;o<s.length;)n=Math.imul(n^s.charCodeAt(o++),9**9);return((n^n>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function Hd(e,n){const{props:s,tag:o}=e;if(O1.includes(o))return o;if(o==="link"&&s.rel==="canonical")return"canonical";if(s.charset)return"charset";const r=["id"];o==="meta"&&r.push("name","property","http-equiv");for(const l of r)if(typeof s[l]<"u"){const a=String(s[l]);return n&&!n(a)?!1:`${o}:${l}:${a}`}return!1}function Nc(e,n){return e==null?n||null:typeof e=="function"?e(n):e}function ur(e,n=!1,s){const{tag:o,$el:r}=e;r&&(Object.entries(o.props).forEach(([l,a])=>{a=String(a);const i=`attr:${l}`;if(l==="class"){if(!a)return;for(const c of a.split(" ")){const u=`${i}:${c}`;s&&s(e,u,()=>r.classList.remove(c)),r.classList.contains(c)||r.classList.add(c)}return}s&&!l.startsWith("data-h-")&&s(e,i,()=>r.removeAttribute(l)),(n||r.getAttribute(l)!==a)&&r.setAttribute(l,a)}),qd.includes(o.tag)&&(o.textContent&&o.textContent!==r.textContent?r.textContent=o.textContent:o.innerHTML&&o.innerHTML!==r.innerHTML&&(r.innerHTML=o.innerHTML)))}let eo=!1;async function Vd(e,n={}){var h,y;const s={shouldRender:!0};if(await e.hooks.callHook("dom:beforeRender",s),!s.shouldRender)return;const o=n.document||e.resolvedOptions.document||window.document,r=(await e.resolveTags()).map(i);if(e.resolvedOptions.experimentalHashHydration&&(eo=eo||e._hash||!1,eo)){const m=P1(r.map(b=>b.tag._h));if(eo===m)return;eo=m}const l=e._popSideEffectQueue();e.headEntries().map(m=>m._sde).forEach(m=>{Object.entries(m).forEach(([b,A])=>{l[b]=A})});const a=(m,b,A)=>{b=`${m.renderId}:${b}`,m.entry&&(m.entry._sde[b]=A),delete l[b]};function i(m){const b=e.headEntries().find(w=>w._i===m._e),A={renderId:m._d||ba(m),$el:null,shouldRender:!0,tag:m,entry:b,markSideEffect:(w,C)=>a(A,w,C)};return A}const c=[],u={body:[],head:[]},p=m=>{e._elMap[m.renderId]=m.$el,c.push(m),a(m,"el",()=>{var b;(b=m.$el)==null||b.remove(),delete e._elMap[m.renderId]})};for(const m of r){if(await e.hooks.callHook("dom:beforeRenderTag",m),!m.shouldRender)continue;const{tag:b}=m;if(b.tag==="title"){o.title=b.textContent||"",c.push(m);continue}if(b.tag==="htmlAttrs"||b.tag==="bodyAttrs"){m.$el=o[b.tag==="htmlAttrs"?"documentElement":"body"],ur(m,!1,a),c.push(m);continue}if(m.$el=e._elMap[m.renderId],!m.$el&&b.key&&(m.$el=o.querySelector(`${(h=b.tagPosition)!=null&&h.startsWith("body")?"body":"head"} > ${b.tag}[data-h-${b._h}]`)),m.$el){m.tag._d&&ur(m),p(m);continue}u[(y=b.tagPosition)!=null&&y.startsWith("body")?"body":"head"].push(m)}const d={bodyClose:void 0,bodyOpen:void 0,head:void 0};Object.entries(u).forEach(([m,b])=>{var w;if(!b.length)return;const A=(w=o==null?void 0:o[m])==null?void 0:w.children;if(A){for(const C of[...A].reverse()){const x=C.tagName.toLowerCase();if(!jd.includes(x))continue;const B=C.getAttributeNames().reduce((O,j)=>({...O,[j]:C.getAttribute(j)}),{}),k={tag:x,props:B};C.innerHTML&&(k.innerHTML=C.innerHTML);const S=ba(k);let L=b.findIndex(O=>(O==null?void 0:O.renderId)===S);if(L===-1){const O=Hd(k);L=b.findIndex(j=>(j==null?void 0:j.tag._d)&&j.tag._d===O)}if(L!==-1){const O=b[L];O.$el=C,ur(O),p(O),delete b[L]}}b.forEach(C=>{const x=C.tag.tagPosition||"head";d[x]=d[x]||o.createDocumentFragment(),C.$el||(C.$el=o.createElement(C.tag.tag),ur(C,!0)),d[x].appendChild(C.$el),p(C)})}}),d.head&&o.head.appendChild(d.head),d.bodyOpen&&o.body.insertBefore(d.bodyOpen,o.body.firstChild),d.bodyClose&&o.body.appendChild(d.bodyClose);for(const m of c)await e.hooks.callHook("dom:renderTag",m);Object.values(l).forEach(m=>m())}let $l=null;async function zd(e,n={}){function s(){return $l=null,Vd(e,n)}const o=n.delayFn||(r=>setTimeout(r,10));return $l=$l||new Promise(r=>o(()=>r(s())))}function I1(e){return{hooks:{"entries:updated":function(n){if(typeof(e==null?void 0:e.document)>"u"&&typeof window>"u")return;let s=e==null?void 0:e.delayFn;!s&&typeof requestAnimationFrame<"u"&&(s=requestAnimationFrame),zd(n,{document:(e==null?void 0:e.document)||window.document,delayFn:s})}}}}function M1(e){var n;return((n=e==null?void 0:e.head.querySelector('meta[name="unhead:ssr"]'))==null?void 0:n.getAttribute("content"))||!1}const qc={critical:2,high:9,low:12,base:-1,title:1,meta:10};function jc(e){if(typeof e.tagPriority=="number")return e.tagPriority;if(e.tag==="meta"){if(e.props.charset)return-2;if(e.props["http-equiv"]==="content-security-policy")return 0}const n=e.tagPriority||e.tag;return n in qc?qc[n]:10}const L1=[{prefix:"before:",offset:-1},{prefix:"after:",offset:1}];function R1(){return{hooks:{"tags:resolve":e=>{const n=s=>{var o;return(o=e.tags.find(r=>r._d===s))==null?void 0:o._p};for(const{prefix:s,offset:o}of L1)for(const r of e.tags.filter(l=>typeof l.tagPriority=="string"&&l.tagPriority.startsWith(s))){const l=n(r.tagPriority.replace(s,""));typeof l<"u"&&(r._p=l+o)}e.tags.sort((s,o)=>s._p-o._p).sort((s,o)=>jc(s)-jc(o))}}}}function N1(){return{hooks:{"tags:resolve":e=>{const{tags:n}=e;let s=n.findIndex(r=>r.tag==="titleTemplate");const o=n.findIndex(r=>r.tag==="title");if(o!==-1&&s!==-1){const r=Nc(n[s].textContent,n[o].textContent);r!==null?n[o].textContent=r||n[o].textContent:delete n[o]}else if(s!==-1){const r=Nc(n[s].textContent);r!==null&&(n[s].textContent=r,n[s].tag="title",s=-1)}s!==-1&&delete n[s],e.tags=n.filter(Boolean)}}}}function q1(){return{hooks:{"tag:normalise":function({tag:e}){typeof e.props.body<"u"&&(e.tagPosition="bodyClose",delete e.props.body)}}}}const j1=["link","style","script","noscript"];function W1(){return{hooks:{"tag:normalise":({tag:e,resolvedOptions:n})=>{n.experimentalHashHydration===!0&&(e._h=ba(e)),e.key&&j1.includes(e.tag)&&(e._h=Wd(e.key),e.props[`data-h-${e._h}`]="")}}}}const Wc=["script","link","bodyAttrs"];function H1(){const e=(n,s)=>{const o={},r={};Object.entries(s.props).forEach(([a,i])=>{a.startsWith("on")&&typeof i=="function"?r[a]=i:o[a]=i});let l;return n==="dom"&&s.tag==="script"&&typeof o.src=="string"&&typeof r.onload<"u"&&(l=o.src,delete o.src),{props:o,eventHandlers:r,delayedSrc:l}};return{hooks:{"ssr:render":function(n){n.tags=n.tags.map(s=>(!Wc.includes(s.tag)||!Object.entries(s.props).find(([o,r])=>o.startsWith("on")&&typeof r=="function")||(s.props=e("ssr",s).props),s))},"dom:beforeRenderTag":function(n){if(!Wc.includes(n.tag.tag)||!Object.entries(n.tag.props).find(([l,a])=>l.startsWith("on")&&typeof a=="function"))return;const{props:s,eventHandlers:o,delayedSrc:r}=e("dom",n.tag);Object.keys(o).length&&(n.tag.props=s,n.tag._eventHandlers=o,n.tag._delayedSrc=r)},"dom:renderTag":function(n){const s=n.$el;if(!n.tag._eventHandlers||!s)return;const o=n.tag.tag==="bodyAttrs"&&typeof window<"u"?window:s;Object.entries(n.tag._eventHandlers).forEach(([r,l])=>{const a=`${n.tag._d||n.tag._p}:${r}`,i=r.slice(2).toLowerCase(),c=`data-h-${i}`;if(n.markSideEffect(a,()=>{}),s.hasAttribute(c))return;const u=l;s.setAttribute(c,""),o.addEventListener(i,u),n.entry&&(n.entry._sde[a]=()=>{o.removeEventListener(i,u),s.removeAttribute(c)})}),n.tag._delayedSrc&&s.setAttribute("src",n.tag._delayedSrc)}}}}const V1=["templateParams","htmlAttrs","bodyAttrs"];function z1(){return{hooks:{"tag:normalise":function({tag:e}){["hid","vmid","key"].forEach(o=>{e.props[o]&&(e.key=e.props[o],delete e.props[o])});const s=Hd(e)||(e.key?`${e.tag}:${e.key}`:!1);s&&(e._d=s)},"tags:resolve":function(e){const n={};e.tags.forEach(o=>{const r=(o.key?`${o.tag}:${o.key}`:o._d)||o._p,l=n[r];if(l){let i=o==null?void 0:o.tagDuplicateStrategy;if(!i&&V1.includes(o.tag)&&(i="merge"),i==="merge"){const c=l.props;["class","style"].forEach(u=>{o.props[u]&&c[u]&&(u==="style"&&!c[u].endsWith(";")&&(c[u]+=";"),o.props[u]=`${c[u]} ${o.props[u]}`)}),n[r].props={...c,...o.props};return}else if(o._e===l._e){l._duped=l._duped||[],o._d=`${l._d}:${l._duped.length+1}`,l._duped.push(o);return}}const a=Object.keys(o.props).length+(o.innerHTML?1:0)+(o.textContent?1:0);if(jd.includes(o.tag)&&a===0){delete n[r];return}n[r]=o});const s=[];Object.values(n).forEach(o=>{const r=o._duped;delete o._duped,s.push(o),r&&s.push(...r)}),e.tags=s}}}}function pr(e,n){function s(l){if(["s","pageTitle"].includes(l))return n.pageTitle;let a;return l.includes(".")?a=l.split(".").reduce((i,c)=>i&&i[c]||void 0,n):a=n[l],typeof a<"u"?a||"":!1}let o=e;try{o=decodeURI(e)}catch{}return(o.match(/%(\w+\.+\w+)|%(\w+)/g)||[]).sort().reverse().forEach(l=>{const a=s(l.slice(1));typeof a=="string"&&(e=e.replace(new RegExp(`\\${l}(\\W|$)`,"g"),`${a}$1`).trim())}),n.separator&&(e.endsWith(n.separator)&&(e=e.slice(0,-n.separator.length).trim()),e.startsWith(n.separator)&&(e=e.slice(n.separator.length).trim()),e=e.replace(new RegExp(`\\${n.separator}\\s*\\${n.separator}`,"g"),n.separator)),e}function K1(){return{hooks:{"tags:resolve":e=>{var l;const{tags:n}=e,s=(l=n.find(a=>a.tag==="title"))==null?void 0:l.textContent,o=n.findIndex(a=>a.tag==="templateParams"),r=o!==-1?n[o].props:{};r.pageTitle=r.pageTitle||s||"";for(const a of n)if(["titleTemplate","title"].includes(a.tag)&&typeof a.textContent=="string")a.textContent=pr(a.textContent,r);else if(a.tag==="meta"&&typeof a.props.content=="string")a.props.content=pr(a.props.content,r);else if(a.tag==="link"&&typeof a.props.href=="string")a.props.href=pr(a.props.href,r);else if(a.tag==="script"&&["application/json","application/ld+json"].includes(a.props.type)&&typeof a.innerHTML=="string")try{a.innerHTML=JSON.stringify(JSON.parse(a.innerHTML),(i,c)=>typeof c=="string"?pr(c,r):c)}catch{}e.tags=n.filter(a=>a.tag!=="templateParams")}}}}const G1=typeof window<"u";let Kd;function Y1(e){return Kd=e}function Q1(){return Kd}async function Z1(e,n){const s={tag:e,props:{}};return e==="templateParams"?(s.props=n,s):["title","titleTemplate"].includes(e)?(s.textContent=n instanceof Promise?await n:n,s):typeof n=="string"?["script","noscript","style"].includes(e)?(e==="script"&&(/^(https?:)?\/\//.test(n)||n.startsWith("/"))?s.props.src=n:s.innerHTML=n,s):!1:(s.props=await X1(e,{...n}),s.props.children&&(s.props.innerHTML=s.props.children),delete s.props.children,Object.keys(s.props).filter(o=>U1.includes(o)).forEach(o=>{(!["innerHTML","textContent"].includes(o)||qd.includes(s.tag))&&(s[o]=s.props[o]),delete s.props[o]}),["innerHTML","textContent"].forEach(o=>{if(s.tag==="script"&&typeof s[o]=="string"&&["application/ld+json","application/json"].includes(s.props.type))try{s[o]=JSON.parse(s[o])}catch{s[o]=""}typeof s[o]=="object"&&(s[o]=JSON.stringify(s[o]))}),s.props.class&&(s.props.class=J1(s.props.class)),s.props.content&&Array.isArray(s.props.content)?s.props.content.map(o=>({...s,props:{...s.props,content:o}})):s)}function J1(e){return typeof e=="object"&&!Array.isArray(e)&&(e=Object.keys(e).filter(n=>e[n])),(Array.isArray(e)?e.join(" "):e).split(" ").filter(n=>n.trim()).filter(Boolean).join(" ")}async function X1(e,n){for(const s of Object.keys(n)){const o=s.startsWith("data-");n[s]instanceof Promise&&(n[s]=await n[s]),String(n[s])==="true"?n[s]=o?"true":"":String(n[s])==="false"&&(o?n[s]="false":delete n[s])}return n}const eg=10;async function tg(e){const n=[];return Object.entries(e.resolvedInput).filter(([s,o])=>typeof o<"u"&&$1.includes(s)).forEach(([s,o])=>{const r=T1(o);n.push(...r.map(l=>Z1(s,l)).flat())}),(await Promise.all(n)).flat().filter(Boolean).map((s,o)=>(s._e=e._i,s._p=(e._i<<eg)+o,s))}function ng(){return[z1(),R1(),K1(),N1(),W1(),H1(),q1()]}function sg(e={}){return[I1({document:e==null?void 0:e.document,delayFn:e==null?void 0:e.domDelayFn})]}function og(e={}){const n=rg({...e,plugins:[...sg(e),...(e==null?void 0:e.plugins)||[]]});return e.experimentalHashHydration&&n.resolvedOptions.document&&(n._hash=M1(n.resolvedOptions.document)),Y1(n),n}function rg(e={}){let n=[],s={},o=0;const r=D1();e!=null&&e.hooks&&r.addHooks(e.hooks),e.plugins=[...ng(),...(e==null?void 0:e.plugins)||[]],e.plugins.forEach(i=>i.hooks&&r.addHooks(i.hooks)),e.document=e.document||(G1?document:void 0);const l=()=>r.callHook("entries:updated",a),a={resolvedOptions:e,headEntries(){return n},get hooks(){return r},use(i){i.hooks&&r.addHooks(i.hooks)},push(i,c){const u={_i:o++,input:i,_sde:{}};return c!=null&&c.mode&&(u._m=c==null?void 0:c.mode),c!=null&&c.transform&&(u._t=c==null?void 0:c.transform),n.push(u),l(),{dispose(){n=n.filter(p=>p._i!==u._i?!0:(s={...s,...p._sde||{}},p._sde={},l(),!1))},patch(p){n=n.map(d=>(d._i===u._i&&(u.input=d.input=p,l()),d))}}},async resolveTags(){const i={tags:[],entries:[...n]};await r.callHook("entries:resolve",i);for(const c of i.entries){const u=c._t||(p=>p);if(c.resolvedInput=u(c.resolvedInput||c.input),c.resolvedInput)for(const p of await tg(c)){const d={tag:p,entry:c,resolvedOptions:a.resolvedOptions};await r.callHook("tag:normalise",d),i.tags.push(d.tag)}}return await r.callHook("tags:resolve",i),i.tags},_popSideEffectQueue(){const i={...s};return s={},i},_elMap:{}};return a.hooks.callHook("init",a),a}function lg(e){return typeof e=="function"?e():T(e)}function Vr(e,n=""){if(e instanceof Promise)return e;const s=lg(e);return!e||!s?s:Array.isArray(s)?s.map(o=>Vr(o,n)):typeof s=="object"?Object.fromEntries(Object.entries(s).map(([o,r])=>o==="titleTemplate"||o.startsWith("on")?[o,T(r)]:[o,Vr(r,o)])):s}const ag=Hr.startsWith("3"),ig=typeof window<"u",Gd="usehead";function Bi(){return $t()&&R(Gd)||Q1()}function cg(e){return{install(s){ag&&(s.config.globalProperties.$unhead=e,s.config.globalProperties.$head=e,s.provide(Gd,e))}}.install}function ug(e={}){const n=og({...e,domDelayFn:s=>setTimeout(()=>lt(()=>s()),10),plugins:[pg(),...(e==null?void 0:e.plugins)||[]]});return n.install=cg(n),n}function pg(){return{hooks:{"entries:resolve":function(e){for(const n of e.entries)n.resolvedInput=Vr(n.input)}}}}function dg(e,n={}){const s=Bi(),o=Y(!1),r=Y({});ks(()=>{r.value=o.value?{}:Vr(e)});const l=s.push(r.value,n);return ge(r,i=>{l.patch(i)}),$t()&&(Yo(()=>{l.dispose()}),dd(()=>{o.value=!0}),pd(()=>{o.value=!1})),l}function fg(e,n={}){return Bi().push(e,n)}function Yd(e,n={}){var o;const s=Bi();if(s){const r=ig||!!((o=s.resolvedOptions)!=null&&o.document);return n.mode==="server"&&r||n.mode==="client"&&!r?void 0:r?dg(e,n):fg(e,n)}}function hg(e,n){const s=ug(n||{}),o={unhead:s,install(r){Hr.startsWith("3")&&(r.config.globalProperties.$head=s,r.provide("usehead",s))},use(r){s.use(r)},resolveTags(){return s.resolveTags()},headEntries(){return s.headEntries()},headTags(){return s.resolveTags()},push(r,l){return s.push(r,l)},addEntry(r,l){return s.push(r,l)},addHeadObjs(r,l){return s.push(r,l)},addReactiveEntry(r,l){const a=Yd(r,l);return typeof a<"u"?a.dispose:()=>{}},removeHeadObjs(){},updateDOM(r,l){l?Vd(s,{document:r}):zd(s,{delayFn:a=>setTimeout(()=>a(),50),document:r})},internalHooks:s.hooks,hooks:{"before:dom":[],"resolved:tags":[],"resolved:entries":[]}};return s.addHeadObjs=o.addHeadObjs,s.updateDOM=o.updateDOM,s.hooks.hook("dom:beforeRender",r=>{for(const l of o.hooks["before:dom"])l()===!1&&(r.shouldRender=!1)}),e&&o.addHeadObjs(e),o}const vo=Symbol("v-click-clicks"),as=Symbol("v-click-clicks-elements"),xa=Symbol("v-click-clicks-order-map"),bo=Symbol("v-click-clicks-disabled"),Qd=Symbol("slidev-slide-scale"),V=Symbol("slidev-slidev-context"),yg=Symbol("slidev-route"),mg=Symbol("slidev-slide-context"),ss="slidev-vclick-target",Ol="slidev-vclick-hidden",gg="slidev-vclick-fade",Ul="slidev-vclick-hidden-explicitly",to="slidev-vclick-current",dr="slidev-vclick-prior",_g=["localhost","127.0.0.1"];let vg=e=>crypto.getRandomValues(new Uint8Array(e)),bg=(e,n,s)=>{let o=(2<<Math.log(e.length-1)/Math.LN2)-1,r=-~(1.6*o*n/e.length);return(l=n)=>{let a="";for(;;){let i=s(r),c=r;for(;c--;)if(a+=e[i[c]&o]||"",a.length===l)return a}}},xg=(e,n=21)=>bg(e,n,vg),wg=(e=21)=>crypto.getRandomValues(new Uint8Array(e)).reduce((n,s)=>(s&=63,s<36?n+=s.toString(36):s<62?n+=(s-26).toString(36).toUpperCase():s>62?n+="-":n+="_",n),"");function Zd(e){return e=e??[],Array.isArray(e)?e:[e]}function wa(e,n){if(!e)return!1;const s=e.indexOf(n);return s>=0?(e.splice(s,1),!0):!1}function Ag(...e){let n,s,o;e.length===1?(n=0,o=1,[s]=e):[n,s,o=1]=e;const r=[];let l=n;for(;l<s;)r.push(l),l+=o||1;return r}function Cg(e){return e!=null}function Bg(e,n){return Object.fromEntries(Object.entries(e).map(([s,o])=>n(s,o)).filter(Cg))}const yo={theme:"seriph",title:"Demystifying Unicode",titleTemplate:"%s - Slidev",addons:[],remoteAssets:!1,monaco:"dev",download:!1,export:{},info:`<h2>Unicode, Rust, quirks, and way too much detail.</h2>
`,highlighter:"shiki",lineNumbers:!0,colorSchema:"auto",routerMode:"history",aspectRatio:1.7777777777777777,canvasWidth:980,exportFilename:"",selectable:!1,themeConfig:{},fonts:{sans:['"PT Serif"',"ui-sans-serif","system-ui","-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial",'"Noto Sans"',"sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"','"Noto Color Emoji"'],serif:['"PT Serif"',"ui-serif","Georgia","Cambria",'"Times New Roman"',"Times","serif"],mono:['"PT Mono"',"ui-monospace","SFMono-Regular","Menlo","Monaco","Consolas",'"Liberation Mono"','"Courier New"',"monospace"],webfonts:["PT Serif","PT Mono"],provider:"google",local:[],italic:!0,weights:["400","700"]},favicon:"https://cdn.jsdelivr.net/gh/slidevjs/slidev/assets/favicon.png",drawings:{enabled:!0,persist:!1,presenterOnly:!1,syncAll:!0},plantUmlServer:"https://www.plantuml.com/plantuml",codeCopy:!0,record:"dev",css:"unocss",presenter:!0,htmlAttrs:{},transition:"slide-left",background:"https://source.unsplash.com/collection/94734566/1920x1080",class:"text-center",hideInToc:!0},Se=yo,Mn=Se.aspectRatio??16/9,Ln=Se.canvasWidth??980,ki=Math.ceil(Ln/Mn),Ei=$(()=>Bg(Se.themeConfig||{},(e,n)=>[`--slidev-theme-${e}`,n]));function Jd(){return Math.random().toString(36).replace(/[^a-z]+/g,"").substr(2,10)}function qt(e,n,s){Object.defineProperty(e,n,{value:s,writable:!0,enumerable:!1})}const Fs=We({page:0,clicks:0});let kg=[],Eg=[];qt(Fs,"$syncUp",!0);qt(Fs,"$syncDown",!0);qt(Fs,"$paused",!1);qt(Fs,"$onSet",e=>kg.push(e));qt(Fs,"$onPatch",e=>Eg.push(e));Jd();qt(Fs,"$patch",async()=>!1);function Xd(e,n,s=!1){const o=[];let r=!1,l=!1,a,i;const c=We(n);function u(y){o.push(y)}function p(y,m){c[y]!==m&&(clearTimeout(a),r=!0,c[y]=m,a=setTimeout(()=>r=!1,0))}function d(y){r||(clearTimeout(i),l=!0,Object.entries(y).forEach(([m,b])=>{c[m]=b}),i=setTimeout(()=>l=!1,0))}function h(y){let m;s?s&&window.addEventListener("storage",A=>{A&&A.key===y&&A.newValue&&d(JSON.parse(A.newValue))}):(m=new BroadcastChannel(y),m.addEventListener("message",A=>d(A.data)));function b(){!s&&m&&!l?m.postMessage(he(c)):s&&!l&&window.localStorage.setItem(y,JSON.stringify(c)),r||o.forEach(A=>A(c))}if(ge(c,b,{deep:!0,flush:"sync"}),s){const A=window.localStorage.getItem(y);A&&d(JSON.parse(A))}}return{init:h,onPatch:u,patch:p,state:c}}const{init:Fg,onPatch:Sg,patch:no,state:Pl}=Xd(Fs,{page:1,clicks:0,viewerPage:1,viewerClicks:0}),Ss=We({});let Dg=[],Tg=[];qt(Ss,"$syncUp",!0);qt(Ss,"$syncDown",!0);qt(Ss,"$paused",!1);qt(Ss,"$onSet",e=>Dg.push(e));qt(Ss,"$onPatch",e=>Tg.push(e));Jd();qt(Ss,"$patch",async()=>!1);const{init:$g,onPatch:Og,patch:ef,state:zr}=Xd(Ss,{},!1),Ug="modulepreload",Pg=function(e){return"/demystifying-unicode/"+e},Hc={},Rn=function(n,s,o){if(!s||s.length===0)return n();const r=document.getElementsByTagName("link");return Promise.all(s.map(l=>{if(l=Pg(l),l in Hc)return;Hc[l]=!0;const a=l.endsWith(".css"),i=a?'[rel="stylesheet"]':"";if(!!o)for(let p=r.length-1;p>=0;p--){const d=r[p];if(d.href===l&&(!a||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${l}"]${i}`))return;const u=document.createElement("link");if(u.rel=a?"stylesheet":Ug,a||(u.as="script",u.crossOrigin=""),u.href=l,document.head.appendChild(u),a)return new Promise((p,d)=>{u.addEventListener("load",p),u.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${l}`)))})})).then(()=>n())};function Ig(e,n){let s,o,r;const l=Y(!0),a=()=>{l.value=!0,r()};ge(e,a,{flush:"sync"});const i=typeof n=="function"?n:n.get,c=typeof n=="function"?void 0:n.set,u=fi((p,d)=>(o=p,r=d,{get(){return l.value&&(s=i(),l.value=!1),o(),s},set(h){c==null||c(h)}}));return Object.isExtensible(u)&&(u.trigger=a),u}function dn(e){return li()?(Sp(e),!0):!1}function Ge(e){return typeof e=="function"?e():T(e)}function Mg(e){if(!De(e))return We(e);const n=new Proxy({},{get(s,o,r){return T(Reflect.get(e.value,o,r))},set(s,o,r){return De(e.value[o])&&!De(r)?e.value[o].value=r:e.value[o]=r,!0},deleteProperty(s,o){return Reflect.deleteProperty(e.value,o)},has(s,o){return Reflect.has(e.value,o)},ownKeys(){return Object.keys(e.value)},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}}});return We(n)}const Gt=typeof window<"u",Lg=e=>typeof e<"u",Rg=e=>e!=null,Ng=Object.prototype.toString,Aa=e=>Ng.call(e)==="[object Object]",Ca=()=>+Date.now(),bs=()=>{},qg=jg();function jg(){var e;return Gt&&((e=window==null?void 0:window.navigator)==null?void 0:e.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent)}function Wg(e,n){function s(...o){return new Promise((r,l)=>{Promise.resolve(e(()=>n.apply(this,o),{fn:n,thisArg:this,args:o})).then(r).catch(l)})}return s}const tf=e=>e();function Hg(e=tf){const n=Y(!0);function s(){n.value=!1}function o(){n.value=!0}const r=(...l)=>{n.value&&e(...l)};return{isActive:zt(n),pause:s,resume:o,eventFilter:r}}function Vg(e,n){var s;if(typeof e=="number")return e+n;const o=((s=e.match(/^-?[0-9]+\.?[0-9]*/))==null?void 0:s[0])||"",r=e.slice(o.length),l=Number.parseFloat(o)+n;return Number.isNaN(l)?e:l+r}function nf(...e){if(e.length!==1)return em(...e);const n=e[0];return typeof n=="function"?zt(fi(()=>({get:n,set:bs}))):Y(n)}var zg=Object.defineProperty,Kg=Object.defineProperties,Gg=Object.getOwnPropertyDescriptors,Vc=Object.getOwnPropertySymbols,Yg=Object.prototype.hasOwnProperty,Qg=Object.prototype.propertyIsEnumerable,zc=(e,n,s)=>n in e?zg(e,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[n]=s,Zg=(e,n)=>{for(var s in n||(n={}))Yg.call(n,s)&&zc(e,s,n[s]);if(Vc)for(var s of Vc(n))Qg.call(n,s)&&zc(e,s,n[s]);return e},Jg=(e,n)=>Kg(e,Gg(n));function Xg(e){if(!De(e))return Zy(e);const n=Array.isArray(e.value)?new Array(e.value.length):{};for(const s in e.value)n[s]=fi(()=>({get(){return e.value[s]},set(o){if(Array.isArray(e.value)){const r=[...e.value];r[s]=o,e.value=r}else{const r=Jg(Zg({},e.value),{[s]:o});Object.setPrototypeOf(r,e.value),e.value=r}}}));return n}function sf(e,n=!0){$t()?Gn(e):n?e():lt(e)}function e_(e){$t()&&fl(e)}function t_(e,n=1e3,s={}){const{immediate:o=!0,immediateCallback:r=!1}=s;let l=null;const a=Y(!1);function i(){l&&(clearInterval(l),l=null)}function c(){a.value=!1,i()}function u(){const p=Ge(n);p<=0||(a.value=!0,r&&e(),i(),l=setInterval(e,p))}if(o&&Gt&&u(),De(n)||typeof n=="function"){const p=ge(n,()=>{a.value&&Gt&&u()});dn(p)}return dn(c),{isActive:a,pause:c,resume:u}}function n_(e,n,s={}){const{immediate:o=!0}=s,r=Y(!1);let l=null;function a(){l&&(clearTimeout(l),l=null)}function i(){r.value=!1,a()}function c(...u){a(),r.value=!0,l=setTimeout(()=>{r.value=!1,l=null,e(...u)},Ge(n))}return o&&(r.value=!0,Gt&&c()),dn(i),{isPending:zt(r),start:c,stop:i}}function of(e=!1,n={}){const{truthyValue:s=!0,falsyValue:o=!1}=n,r=De(e),l=Y(e);function a(i){if(arguments.length)return l.value=i,l.value;{const c=Ge(s);return l.value=l.value===c?Ge(o):c,l.value}}return r?a:[l,a]}var Kc=Object.getOwnPropertySymbols,s_=Object.prototype.hasOwnProperty,o_=Object.prototype.propertyIsEnumerable,r_=(e,n)=>{var s={};for(var o in e)s_.call(e,o)&&n.indexOf(o)<0&&(s[o]=e[o]);if(e!=null&&Kc)for(var o of Kc(e))n.indexOf(o)<0&&o_.call(e,o)&&(s[o]=e[o]);return s};function l_(e,n,s={}){const o=s,{eventFilter:r=tf}=o,l=r_(o,["eventFilter"]);return ge(e,Wg(r,n),l)}var a_=Object.defineProperty,i_=Object.defineProperties,c_=Object.getOwnPropertyDescriptors,Kr=Object.getOwnPropertySymbols,rf=Object.prototype.hasOwnProperty,lf=Object.prototype.propertyIsEnumerable,Gc=(e,n,s)=>n in e?a_(e,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[n]=s,u_=(e,n)=>{for(var s in n||(n={}))rf.call(n,s)&&Gc(e,s,n[s]);if(Kr)for(var s of Kr(n))lf.call(n,s)&&Gc(e,s,n[s]);return e},p_=(e,n)=>i_(e,c_(n)),d_=(e,n)=>{var s={};for(var o in e)rf.call(e,o)&&n.indexOf(o)<0&&(s[o]=e[o]);if(e!=null&&Kr)for(var o of Kr(e))n.indexOf(o)<0&&lf.call(e,o)&&(s[o]=e[o]);return s};function f_(e,n,s={}){const o=s,{eventFilter:r}=o,l=d_(o,["eventFilter"]),{eventFilter:a,pause:i,resume:c,isActive:u}=Hg(r);return{stop:l_(e,n,p_(u_({},l),{eventFilter:a})),pause:i,resume:c,isActive:u}}function at(e){var n;const s=Ge(e);return(n=s==null?void 0:s.$el)!=null?n:s}const tt=Gt?window:void 0,af=Gt?window.document:void 0,h_=Gt?window.navigator:void 0;function xe(...e){let n,s,o,r;if(typeof e[0]=="string"||Array.isArray(e[0])?([s,o,r]=e,n=tt):[n,s,o,r]=e,!n)return bs;Array.isArray(s)||(s=[s]),Array.isArray(o)||(o=[o]);const l=[],a=()=>{l.forEach(p=>p()),l.length=0},i=(p,d,h,y)=>(p.addEventListener(d,h,y),()=>p.removeEventListener(d,h,y)),c=ge(()=>[at(n),Ge(r)],([p,d])=>{a(),p&&l.push(...s.flatMap(h=>o.map(y=>i(p,h,y,d))))},{immediate:!0,flush:"post"}),u=()=>{c(),a()};return dn(u),u}let Yc=!1;function y_(e,n,s={}){const{window:o=tt,ignore:r=[],capture:l=!0,detectIframe:a=!1}=s;if(!o)return;qg&&!Yc&&(Yc=!0,Array.from(o.document.body.children).forEach(h=>h.addEventListener("click",bs)));let i=!0;const c=h=>r.some(y=>{if(typeof y=="string")return Array.from(o.document.querySelectorAll(y)).some(m=>m===h.target||h.composedPath().includes(m));{const m=at(y);return m&&(h.target===m||h.composedPath().includes(m))}}),p=[xe(o,"click",h=>{const y=at(e);if(!(!y||y===h.target||h.composedPath().includes(y))){if(h.detail===0&&(i=!c(h)),!i){i=!0;return}n(h)}},{passive:!0,capture:l}),xe(o,"pointerdown",h=>{const y=at(e);y&&(i=!h.composedPath().includes(y)&&!c(h))},{passive:!0}),a&&xe(o,"blur",h=>{setTimeout(()=>{var y;const m=at(e);((y=o.document.activeElement)==null?void 0:y.tagName)==="IFRAME"&&!(m!=null&&m.contains(o.document.activeElement))&&n(h)},0)})].filter(Boolean);return()=>p.forEach(h=>h())}function m_(e){return typeof e=="function"?e:typeof e=="string"?n=>n.key===e:Array.isArray(e)?n=>e.includes(n.key):()=>!0}function g_(...e){let n,s,o={};e.length===3?(n=e[0],s=e[1],o=e[2]):e.length===2?typeof e[1]=="object"?(n=!0,s=e[0],o=e[1]):(n=e[0],s=e[1]):(n=!0,s=e[0]);const{target:r=tt,eventName:l="keydown",passive:a=!1,dedupe:i=!1}=o,c=m_(n);return xe(r,l,p=>{p.repeat&&Ge(i)||c(p)&&s(p)},a)}function __(e={}){var n;const{window:s=tt}=e,o=(n=e.document)!=null?n:s==null?void 0:s.document,r=Ig(()=>null,()=>o==null?void 0:o.activeElement);return s&&(xe(s,"blur",l=>{l.relatedTarget===null&&r.trigger()},!0),xe(s,"focus",r.trigger,!0)),r}function v_(){const e=Y(!1);return $t()&&Gn(()=>{e.value=!0}),e}function Zo(e){const n=v_();return $(()=>(n.value,!!e()))}function b_(e,n={}){const{immediate:s=!0,window:o=tt}=n,r=Y(!1);let l=0,a=null;function i(p){if(!r.value||!o)return;const d=p-l;e({delta:d,timestamp:p}),l=p,a=o.requestAnimationFrame(i)}function c(){!r.value&&o&&(r.value=!0,a=o.requestAnimationFrame(i))}function u(){r.value=!1,a!=null&&o&&(o.cancelAnimationFrame(a),a=null)}return s&&c(),dn(u),{isActive:zt(r),pause:u,resume:c}}function is(e,n={}){const{window:s=tt}=n,o=Zo(()=>s&&"matchMedia"in s&&typeof s.matchMedia=="function");let r;const l=Y(!1),a=()=>{r&&("removeEventListener"in r?r.removeEventListener("change",i):r.removeListener(i))},i=()=>{o.value&&(a(),r=s.matchMedia(nf(e).value),l.value=!!(r!=null&&r.matches),r&&("addEventListener"in r?r.addEventListener("change",i):r.addListener(i)))};return ks(i),dn(()=>a()),l}const x_={sm:640,md:768,lg:1024,xl:1280,"2xl":1536};function w_(e,n={}){function s(i,c){let u=e[i];return c!=null&&(u=Vg(u,c)),typeof u=="number"&&(u=`${u}px`),u}const{window:o=tt}=n;function r(i){return o?o.matchMedia(i).matches:!1}const l=i=>is(`(min-width: ${s(i)})`,n),a=Object.keys(e).reduce((i,c)=>(Object.defineProperty(i,c,{get:()=>l(c),enumerable:!0,configurable:!0}),i),{});return Object.assign(a,{greater(i){return is(`(min-width: ${s(i,.1)})`,n)},greaterOrEqual:l,smaller(i){return is(`(max-width: ${s(i,-.1)})`,n)},smallerOrEqual(i){return is(`(max-width: ${s(i)})`,n)},between(i,c){return is(`(min-width: ${s(i)}) and (max-width: ${s(c,-.1)})`,n)},isGreater(i){return r(`(min-width: ${s(i,.1)})`)},isGreaterOrEqual(i){return r(`(min-width: ${s(i)})`)},isSmaller(i){return r(`(max-width: ${s(i,-.1)})`)},isSmallerOrEqual(i){return r(`(max-width: ${s(i)})`)},isInBetween(i,c){return r(`(min-width: ${s(i)}) and (max-width: ${s(c,-.1)})`)},current(){const i=Object.keys(e).map(c=>[c,l(c)]);return $(()=>i.filter(([,c])=>c.value).map(([c])=>c))}})}function A_(e={}){const{navigator:n=h_,read:s=!1,source:o,copiedDuring:r=1500,legacy:l=!1}=e,a=["copy","cut"],i=Zo(()=>n&&"clipboard"in n),c=$(()=>i.value||l),u=Y(""),p=Y(!1),d=n_(()=>p.value=!1,r);function h(){i.value?n.clipboard.readText().then(A=>{u.value=A}):u.value=b()}if(c.value&&s)for(const A of a)xe(A,h);async function y(A=Ge(o)){c.value&&A!=null&&(i.value?await n.clipboard.writeText(A):m(A),u.value=A,p.value=!0,d.start())}function m(A){const w=document.createElement("textarea");w.value=A??"",w.style.position="absolute",w.style.opacity="0",document.body.appendChild(w),w.select(),document.execCommand("copy"),w.remove()}function b(){var A,w,C;return(C=(w=(A=document==null?void 0:document.getSelection)==null?void 0:A.call(document))==null?void 0:w.toString())!=null?C:""}return{isSupported:c,text:u,copied:p,copy:y}}function C_(e){return JSON.parse(JSON.stringify(e))}const fr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},hr="__vueuse_ssr_handlers__",B_=k_();function k_(){return hr in fr||(fr[hr]=fr[hr]||{}),fr[hr]}function E_(e,n){return B_[e]||n}function F_(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}var S_=Object.defineProperty,Qc=Object.getOwnPropertySymbols,D_=Object.prototype.hasOwnProperty,T_=Object.prototype.propertyIsEnumerable,Zc=(e,n,s)=>n in e?S_(e,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[n]=s,Jc=(e,n)=>{for(var s in n||(n={}))D_.call(n,s)&&Zc(e,s,n[s]);if(Qc)for(var s of Qc(n))T_.call(n,s)&&Zc(e,s,n[s]);return e};const $_={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}},Xc="vueuse-storage";function O_(e,n,s,o={}){var r;const{flush:l="pre",deep:a=!0,listenToStorageChanges:i=!0,writeDefaults:c=!0,mergeDefaults:u=!1,shallow:p,window:d=tt,eventFilter:h,onError:y=O=>{console.error(O)}}=o,m=(p?cn:Y)(n);if(!s)try{s=E_("getDefaultStorage",()=>{var O;return(O=tt)==null?void 0:O.localStorage})()}catch(O){y(O)}if(!s)return m;const b=Ge(n),A=F_(b),w=(r=o.serializer)!=null?r:$_[A],{pause:C,resume:x}=f_(m,()=>B(m.value),{flush:l,deep:a,eventFilter:h});return d&&i&&(xe(d,"storage",L),xe(d,Xc,S)),L(),m;function B(O){try{if(O==null)s.removeItem(e);else{const j=w.write(O),ne=s.getItem(e);ne!==j&&(s.setItem(e,j),d&&d.dispatchEvent(new CustomEvent(Xc,{detail:{key:e,oldValue:ne,newValue:j,storageArea:s}})))}}catch(j){y(j)}}function k(O){const j=O?O.newValue:s.getItem(e);if(j==null)return c&&b!==null&&s.setItem(e,w.write(b)),b;if(!O&&u){const ne=w.read(j);return typeof u=="function"?u(ne,b):A==="object"&&!Array.isArray(ne)?Jc(Jc({},b),ne):ne}else return typeof j!="string"?j:w.read(j)}function S(O){L(O.detail)}function L(O){if(!(O&&O.storageArea!==s)){if(O&&O.key==null){m.value=b;return}if(!(O&&O.key!==e)){C();try{m.value=k(O)}catch(j){y(j)}finally{O?lt(x):x()}}}}}function U_(e){return is("(prefers-color-scheme: dark)",e)}var P_=Object.defineProperty,I_=Object.defineProperties,M_=Object.getOwnPropertyDescriptors,eu=Object.getOwnPropertySymbols,L_=Object.prototype.hasOwnProperty,R_=Object.prototype.propertyIsEnumerable,tu=(e,n,s)=>n in e?P_(e,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[n]=s,N_=(e,n)=>{for(var s in n||(n={}))L_.call(n,s)&&tu(e,s,n[s]);if(eu)for(var s of eu(n))R_.call(n,s)&&tu(e,s,n[s]);return e},q_=(e,n)=>I_(e,M_(n));function wD(e,n={}){var s,o;const{pointerTypes:r,preventDefault:l,stopPropagation:a,exact:i,onMove:c,onEnd:u,onStart:p,initialValue:d,axis:h="both",draggingElement:y=tt,handle:m=e}=n,b=Y((s=Ge(d))!=null?s:{x:0,y:0}),A=Y(),w=S=>r?r.includes(S.pointerType):!0,C=S=>{Ge(l)&&S.preventDefault(),Ge(a)&&S.stopPropagation()},x=S=>{if(!w(S)||Ge(i)&&S.target!==Ge(e))return;const L=Ge(e).getBoundingClientRect(),O={x:S.clientX-L.left,y:S.clientY-L.top};(p==null?void 0:p(O,S))!==!1&&(A.value=O,C(S))},B=S=>{if(!w(S)||!A.value)return;let{x:L,y:O}=b.value;(h==="x"||h==="both")&&(L=S.clientX-A.value.x),(h==="y"||h==="both")&&(O=S.clientY-A.value.y),b.value={x:L,y:O},c==null||c(b.value,S),C(S)},k=S=>{w(S)&&A.value&&(A.value=void 0,u==null||u(b.value,S),C(S))};if(Gt){const S={capture:(o=n.capture)!=null?o:!0};xe(m,"pointerdown",x,S),xe(y,"pointermove",B,S),xe(y,"pointerup",k,S)}return q_(N_({},Xg(b)),{position:b,isDragging:$(()=>!!A.value),style:$(()=>`left:${b.value.x}px;top:${b.value.y}px;`)})}var nu=Object.getOwnPropertySymbols,j_=Object.prototype.hasOwnProperty,W_=Object.prototype.propertyIsEnumerable,H_=(e,n)=>{var s={};for(var o in e)j_.call(e,o)&&n.indexOf(o)<0&&(s[o]=e[o]);if(e!=null&&nu)for(var o of nu(e))n.indexOf(o)<0&&W_.call(e,o)&&(s[o]=e[o]);return s};function V_(e,n,s={}){const o=s,{window:r=tt}=o,l=H_(o,["window"]);let a;const i=Zo(()=>r&&"ResizeObserver"in r),c=()=>{a&&(a.disconnect(),a=void 0)},u=$(()=>Array.isArray(e)?e.map(h=>at(h)):[at(e)]),p=ge(u,h=>{if(c(),i.value&&r){a=new ResizeObserver(n);for(const y of h)y&&a.observe(y,l)}},{immediate:!0,flush:"post",deep:!0}),d=()=>{c(),p()};return dn(d),{isSupported:i,stop:d}}function z_(e,n={width:0,height:0},s={}){const{window:o=tt,box:r="content-box"}=s,l=$(()=>{var c,u;return(u=(c=at(e))==null?void 0:c.namespaceURI)==null?void 0:u.includes("svg")}),a=Y(n.width),i=Y(n.height);return V_(e,([c])=>{const u=r==="border-box"?c.borderBoxSize:r==="content-box"?c.contentBoxSize:c.devicePixelContentBoxSize;if(o&&l.value){const p=at(e);if(p){const d=o.getComputedStyle(p);a.value=Number.parseFloat(d.width),i.value=Number.parseFloat(d.height)}}else if(u){const p=Array.isArray(u)?u:[u];a.value=p.reduce((d,{inlineSize:h})=>d+h,0),i.value=p.reduce((d,{blockSize:h})=>d+h,0)}else a.value=c.contentRect.width,i.value=c.contentRect.height},s),ge(()=>at(e),c=>{a.value=c?n.width:0,i.value=c?n.height:0}),{width:a,height:i}}function K_(e,n,s={}){const{root:o,rootMargin:r="0px",threshold:l=.1,window:a=tt,immediate:i=!0}=s,c=Zo(()=>a&&"IntersectionObserver"in a),u=$(()=>{const m=Ge(e);return(Array.isArray(m)?m:[m]).map(at).filter(Rg)});let p=bs;const d=Y(i),h=c.value?ge(()=>[u.value,at(o),d.value],([m,b])=>{if(p(),!d.value||!m.length)return;const A=new IntersectionObserver(n,{root:at(b),rootMargin:r,threshold:l});m.forEach(w=>w&&A.observe(w)),p=()=>{A.disconnect(),p=bs}},{immediate:i,flush:"post"}):bs,y=()=>{p(),h(),d.value=!1};return dn(y),{isSupported:c,isActive:d,pause(){p(),d.value=!1},resume(){d.value=!0},stop:y}}const su=["fullscreenchange","webkitfullscreenchange","webkitendfullscreen","mozfullscreenchange","MSFullscreenChange"];function G_(e,n={}){const{document:s=af,autoExit:o=!1}=n,r=$(()=>{var w;return(w=at(e))!=null?w:s==null?void 0:s.querySelector("html")}),l=Y(!1),a=$(()=>["requestFullscreen","webkitRequestFullscreen","webkitEnterFullscreen","webkitEnterFullScreen","webkitRequestFullScreen","mozRequestFullScreen","msRequestFullscreen"].find(w=>s&&w in s||r.value&&w in r.value)),i=$(()=>["exitFullscreen","webkitExitFullscreen","webkitExitFullScreen","webkitCancelFullScreen","mozCancelFullScreen","msExitFullscreen"].find(w=>s&&w in s||r.value&&w in r.value)),c=$(()=>["fullScreen","webkitIsFullScreen","webkitDisplayingFullscreen","mozFullScreen","msFullscreenElement"].find(w=>s&&w in s||r.value&&w in r.value)),u=["fullscreenElement","webkitFullscreenElement","mozFullScreenElement","msFullscreenElement"].find(w=>s&&w in s),p=Zo(()=>r.value&&s&&a.value!==void 0&&i.value!==void 0&&c.value!==void 0),d=()=>u?(s==null?void 0:s[u])===r.value:!1,h=()=>{if(c.value){if(s&&s[c.value]!=null)return s[c.value];{const w=r.value;if((w==null?void 0:w[c.value])!=null)return!!w[c.value]}}return!1};async function y(){if(p.value){if(i.value)if((s==null?void 0:s[i.value])!=null)await s[i.value]();else{const w=r.value;(w==null?void 0:w[i.value])!=null&&await w[i.value]()}l.value=!1}}async function m(){if(!p.value)return;h()&&await y();const w=r.value;a.value&&(w==null?void 0:w[a.value])!=null&&(await w[a.value](),l.value=!0)}async function b(){await(l.value?y():m())}const A=()=>{const w=h();(!w||w&&d())&&(l.value=w)};return xe(s,su,A,!1),xe(()=>at(r),su,A,!1),o&&dn(y),{isSupported:p,isFullscreen:l,enter:m,exit:y,toggle:b}}function Yt(e,n,s={}){const{window:o=tt}=s;return O_(e,n,o==null?void 0:o.localStorage,s)}const Y_={ctrl:"control",command:"meta",cmd:"meta",option:"alt",up:"arrowup",down:"arrowdown",left:"arrowleft",right:"arrowright"};function Q_(e={}){const{reactive:n=!1,target:s=tt,aliasMap:o=Y_,passive:r=!0,onEventFired:l=bs}=e,a=We(new Set),i={toJSON(){return{}},current:a},c=n?We(i):i,u=new Set,p=new Set;function d(b,A){b in c&&(n?c[b]=A:c[b].value=A)}function h(){a.clear();for(const b of p)d(b,!1)}function y(b,A){var w,C;const x=(w=b.key)==null?void 0:w.toLowerCase(),k=[(C=b.code)==null?void 0:C.toLowerCase(),x].filter(Boolean);x&&(A?a.add(x):a.delete(x));for(const S of k)p.add(S),d(S,A);x==="meta"&&!A?(u.forEach(S=>{a.delete(S),d(S,!1)}),u.clear()):typeof b.getModifierState=="function"&&b.getModifierState("Meta")&&A&&[...a,...k].forEach(S=>u.add(S))}xe(s,"keydown",b=>(y(b,!0),l(b)),{passive:r}),xe(s,"keyup",b=>(y(b,!1),l(b)),{passive:r}),xe("blur",h,{passive:!0}),xe("focus",h,{passive:!0});const m=new Proxy(c,{get(b,A,w){if(typeof A!="string")return Reflect.get(b,A,w);if(A=A.toLowerCase(),A in o&&(A=o[A]),!(A in c))if(/[+_-]/.test(A)){const x=A.split(/[+_-]/g).map(B=>B.trim());c[A]=$(()=>x.every(B=>Ge(m[B])))}else c[A]=Y(!1);const C=Reflect.get(b,A,w);return n?Ge(C):C}});return m}const Z_={page:e=>[e.pageX,e.pageY],client:e=>[e.clientX,e.clientY],screen:e=>[e.screenX,e.screenY],movement:e=>e instanceof Touch?null:[e.movementX,e.movementY]};function AD(e={}){const{type:n="page",touch:s=!0,resetOnTouchEnds:o=!1,initialValue:r={x:0,y:0},window:l=tt,target:a=l,eventFilter:i}=e,c=Y(r.x),u=Y(r.y),p=Y(null),d=typeof n=="function"?n:Z_[n],h=w=>{const C=d(w);C&&([c.value,u.value]=C,p.value="mouse")},y=w=>{if(w.touches.length>0){const C=d(w.touches[0]);C&&([c.value,u.value]=C,p.value="touch")}},m=()=>{c.value=r.x,u.value=r.y},b=i?w=>i(()=>h(w),{}):w=>h(w),A=i?w=>i(()=>y(w),{}):w=>y(w);return a&&(xe(a,"mousemove",b,{passive:!0}),xe(a,"dragover",b,{passive:!0}),s&&n!=="movement"&&(xe(a,"touchstart",A,{passive:!0}),xe(a,"touchmove",A,{passive:!0}),o&&xe(a,"touchend",m,{passive:!0}))),{x:c,y:u,sourceType:p}}function J_(e,n={}){const s=nf(e),{threshold:o=50,onSwipe:r,onSwipeEnd:l,onSwipeStart:a}=n,i=We({x:0,y:0}),c=(S,L)=>{i.x=S,i.y=L},u=We({x:0,y:0}),p=(S,L)=>{u.x=S,u.y=L},d=$(()=>i.x-u.x),h=$(()=>i.y-u.y),{max:y,abs:m}=Math,b=$(()=>y(m(d.value),m(h.value))>=o),A=Y(!1),w=Y(!1),C=$(()=>b.value?m(d.value)>m(h.value)?d.value>0?"left":"right":h.value>0?"up":"down":"none"),x=S=>{var L,O,j;const ne=S.buttons===0,ue=S.buttons===1;return(j=(O=(L=n.pointerTypes)==null?void 0:L.includes(S.pointerType))!=null?O:ne||ue)!=null?j:!0},B=[xe(e,"pointerdown",S=>{var L,O;if(!x(S))return;w.value=!0,(O=(L=s.value)==null?void 0:L.style)==null||O.setProperty("touch-action","none");const j=S.target;j==null||j.setPointerCapture(S.pointerId);const{clientX:ne,clientY:ue}=S;c(ne,ue),p(ne,ue),a==null||a(S)}),xe(e,"pointermove",S=>{if(!x(S)||!w.value)return;const{clientX:L,clientY:O}=S;p(L,O),!A.value&&b.value&&(A.value=!0),A.value&&(r==null||r(S))}),xe(e,"pointerup",S=>{var L,O;x(S)&&(A.value&&(l==null||l(S,C.value)),w.value=!1,A.value=!1,(O=(L=s.value)==null?void 0:L.style)==null||O.setProperty("touch-action","initial"))})],k=()=>B.forEach(S=>S());return{isSwiping:zt(A),direction:zt(C),posStart:zt(i),posEnd:zt(u),distanceX:d,distanceY:h,stop:k}}let X_=0;function CD(e,n={}){const s=Y(!1),{document:o=af,immediate:r=!0,manual:l=!1,id:a=`vueuse_styletag_${++X_}`}=n,i=Y(e);let c=()=>{};const u=()=>{if(!o)return;const d=o.getElementById(a)||o.createElement("style");d.isConnected||(d.type="text/css",d.id=a,n.media&&(d.media=n.media),o.head.appendChild(d)),!s.value&&(c=ge(i,h=>{d.textContent=h},{immediate:!0}),s.value=!0)},p=()=>{!o||!s.value||(c(),o.head.removeChild(o.getElementById(a)),s.value=!1)};return r&&!l&&sf(u),l||dn(p),{id:a,css:i,unload:p,load:u,isLoaded:zt(s)}}var ev=Object.defineProperty,ou=Object.getOwnPropertySymbols,tv=Object.prototype.hasOwnProperty,nv=Object.prototype.propertyIsEnumerable,ru=(e,n,s)=>n in e?ev(e,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[n]=s,sv=(e,n)=>{for(var s in n||(n={}))tv.call(n,s)&&ru(e,s,n[s]);if(ou)for(var s of ou(n))nv.call(n,s)&&ru(e,s,n[s]);return e};function BD(e={}){const{controls:n=!1,offset:s=0,immediate:o=!0,interval:r="requestAnimationFrame",callback:l}=e,a=Y(Ca()+s),i=()=>a.value=Ca()+s,c=l?()=>{i(),l(a.value)}:i,u=r==="requestAnimationFrame"?b_(c,{immediate:o}):t_(c,r,{immediate:o});return n?sv({timestamp:a},u):a}function sn(e,n,s,o={}){var r,l,a;const{clone:i=!1,passive:c=!1,eventName:u,deep:p=!1,defaultValue:d,shouldEmit:h}=o,y=$t(),m=s||(y==null?void 0:y.emit)||((r=y==null?void 0:y.$emit)==null?void 0:r.bind(y))||((a=(l=y==null?void 0:y.proxy)==null?void 0:l.$emit)==null?void 0:a.bind(y==null?void 0:y.proxy));let b=u;n||(n="modelValue"),b=b||`update:${n.toString()}`;const A=x=>i?typeof i=="function"?i(x):C_(x):x,w=()=>Lg(e[n])?A(e[n]):d,C=x=>{h?h(x)&&m(b,x):m(b,x)};if(c){const x=w(),B=Y(x);return ge(()=>e[n],k=>B.value=A(k)),ge(B,k=>{(k!==e[n]||p)&&C(k)},{deep:p}),B}else return $({get(){return w()},set(x){C(x)}})}function kD({window:e=tt}={}){if(!e)return Y(!1);const n=Y(e.document.hasFocus());return xe(e,"blur",()=>{n.value=!1}),xe(e,"focus",()=>{n.value=!0}),n}function ov(e={}){const{window:n=tt,initialWidth:s=1/0,initialHeight:o=1/0,listenOrientation:r=!0,includeScrollbar:l=!0}=e,a=Y(s),i=Y(o),c=()=>{n&&(l?(a.value=n.innerWidth,i.value=n.innerHeight):(a.value=n.document.documentElement.clientWidth,i.value=n.document.documentElement.clientHeight))};if(c(),sf(c),xe("resize",c,{passive:!0}),r){const u=is("(orientation: portrait)");ge(u,()=>c())}return{width:a,height:i}}function rv(){return cf().__VUE_DEVTOOLS_GLOBAL_HOOK__}function cf(){return typeof navigator<"u"&&typeof window<"u"?window:typeof global<"u"?global:{}}const lv=typeof Proxy=="function",av="devtools-plugin:setup",iv="plugin:settings:set";let $s,Ba;function cv(){var e;return $s!==void 0||(typeof window<"u"&&window.performance?($s=!0,Ba=window.performance):typeof global<"u"&&(!((e=global.perf_hooks)===null||e===void 0)&&e.performance)?($s=!0,Ba=global.perf_hooks.performance):$s=!1),$s}function uv(){return cv()?Ba.now():Date.now()}class pv{constructor(n,s){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=n,this.hook=s;const o={};if(n.settings)for(const a in n.settings){const i=n.settings[a];o[a]=i.defaultValue}const r=`__vue-devtools-plugin-settings__${n.id}`;let l=Object.assign({},o);try{const a=localStorage.getItem(r),i=JSON.parse(a);Object.assign(l,i)}catch{}this.fallbacks={getSettings(){return l},setSettings(a){try{localStorage.setItem(r,JSON.stringify(a))}catch{}l=a},now(){return uv()}},s&&s.on(iv,(a,i)=>{a===this.plugin.id&&this.fallbacks.setSettings(i)}),this.proxiedOn=new Proxy({},{get:(a,i)=>this.target?this.target.on[i]:(...c)=>{this.onQueue.push({method:i,args:c})}}),this.proxiedTarget=new Proxy({},{get:(a,i)=>this.target?this.target[i]:i==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(i)?(...c)=>(this.targetQueue.push({method:i,args:c,resolve:()=>{}}),this.fallbacks[i](...c)):(...c)=>new Promise(u=>{this.targetQueue.push({method:i,args:c,resolve:u})})})}async setRealTarget(n){this.target=n;for(const s of this.onQueue)this.target.on[s.method](...s.args);for(const s of this.targetQueue)s.resolve(await this.target[s.method](...s.args))}}function dv(e,n){const s=e,o=cf(),r=rv(),l=lv&&s.enableEarlyProxy;if(r&&(o.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!l))r.emit(av,e,n);else{const a=l?new pv(s,r):null;(o.__VUE_DEVTOOLS_PLUGINS__=o.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:s,setupFn:n,proxy:a}),a&&n(a.proxiedTarget)}}/*!
  * vue-router v4.2.2
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const _n=typeof window<"u";function fv(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const Oe=Object.assign;function Il(e,n){const s={};for(const o in n){const r=n[o];s[o]=Tt(r)?r.map(e):e(r)}return s}const xo=()=>{},Tt=Array.isArray;function Ee(e){const n=Array.from(arguments).slice(1);console.warn.apply(console,["[Vue Router warn]: "+e].concat(n))}const hv=/\/$/,yv=e=>e.replace(hv,"");function Ml(e,n,s="/"){let o,r={},l="",a="";const i=n.indexOf("#");let c=n.indexOf("?");return i<c&&i>=0&&(c=-1),c>-1&&(o=n.slice(0,c),l=n.slice(c+1,i>-1?i:n.length),r=e(l)),i>-1&&(o=o||n.slice(0,i),a=n.slice(i,n.length)),o=_v(o??n,s),{fullPath:o+(l&&"?")+l+a,path:o,query:r,hash:a}}function mv(e,n){const s=n.query?e(n.query):"";return n.path+(s&&"?")+s+(n.hash||"")}function lu(e,n){return!n||!e.toLowerCase().startsWith(n.toLowerCase())?e:e.slice(n.length)||"/"}function au(e,n,s){const o=n.matched.length-1,r=s.matched.length-1;return o>-1&&o===r&&zn(n.matched[o],s.matched[r])&&uf(n.params,s.params)&&e(n.query)===e(s.query)&&n.hash===s.hash}function zn(e,n){return(e.aliasOf||e)===(n.aliasOf||n)}function uf(e,n){if(Object.keys(e).length!==Object.keys(n).length)return!1;for(const s in e)if(!gv(e[s],n[s]))return!1;return!0}function gv(e,n){return Tt(e)?iu(e,n):Tt(n)?iu(n,e):e===n}function iu(e,n){return Tt(n)?e.length===n.length&&e.every((s,o)=>s===n[o]):e.length===1&&e[0]===n}function _v(e,n){if(e.startsWith("/"))return e;if(!n.startsWith("/"))return Ee(`Cannot resolve a relative location without an absolute path. Trying to resolve "${e}" from "${n}". It should look like "/${n}".`),e;if(!e)return n;const s=n.split("/"),o=e.split("/"),r=o[o.length-1];(r===".."||r===".")&&o.push("");let l=s.length-1,a,i;for(a=0;a<o.length;a++)if(i=o[a],i!==".")if(i==="..")l>1&&l--;else break;return s.slice(0,l).join("/")+"/"+o.slice(a-(a===o.length?1:0)).join("/")}var Io;(function(e){e.pop="pop",e.push="push"})(Io||(Io={}));var wo;(function(e){e.back="back",e.forward="forward",e.unknown=""})(wo||(wo={}));function vv(e){if(!e)if(_n){const n=document.querySelector("base");e=n&&n.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),yv(e)}const bv=/^[^#]+#/;function xv(e,n){return e.replace(bv,"#")+n}function wv(e,n){const s=document.documentElement.getBoundingClientRect(),o=e.getBoundingClientRect();return{behavior:n.behavior,left:o.left-s.left-(n.left||0),top:o.top-s.top-(n.top||0)}}const gl=()=>({left:window.pageXOffset,top:window.pageYOffset});function Av(e){let n;if("el"in e){const s=e.el,o=typeof s=="string"&&s.startsWith("#");if(typeof e.el=="string"&&(!o||!document.getElementById(e.el.slice(1))))try{const l=document.querySelector(e.el);if(o&&l){Ee(`The selector "${e.el}" should be passed as "el: document.querySelector('${e.el}')" because it starts with "#".`);return}}catch{Ee(`The selector "${e.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`);return}const r=typeof s=="string"?o?document.getElementById(s.slice(1)):document.querySelector(s):s;if(!r){Ee(`Couldn't find element using selector "${e.el}" returned by scrollBehavior.`);return}n=wv(r,e)}else n=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(n):window.scrollTo(n.left!=null?n.left:window.pageXOffset,n.top!=null?n.top:window.pageYOffset)}function cu(e,n){return(history.state?history.state.position-n:-1)+e}const ka=new Map;function Cv(e,n){ka.set(e,n)}function Bv(e){const n=ka.get(e);return ka.delete(e),n}let kv=()=>location.protocol+"//"+location.host;function pf(e,n){const{pathname:s,search:o,hash:r}=n,l=e.indexOf("#");if(l>-1){let i=r.includes(e.slice(l))?e.slice(l).length:1,c=r.slice(i);return c[0]!=="/"&&(c="/"+c),lu(c,"")}return lu(s,e)+o+r}function Ev(e,n,s,o){let r=[],l=[],a=null;const i=({state:h})=>{const y=pf(e,location),m=s.value,b=n.value;let A=0;if(h){if(s.value=y,n.value=h,a&&a===m){a=null;return}A=b?h.position-b.position:0}else o(y);r.forEach(w=>{w(s.value,m,{delta:A,type:Io.pop,direction:A?A>0?wo.forward:wo.back:wo.unknown})})};function c(){a=s.value}function u(h){r.push(h);const y=()=>{const m=r.indexOf(h);m>-1&&r.splice(m,1)};return l.push(y),y}function p(){const{history:h}=window;h.state&&h.replaceState(Oe({},h.state,{scroll:gl()}),"")}function d(){for(const h of l)h();l=[],window.removeEventListener("popstate",i),window.removeEventListener("beforeunload",p)}return window.addEventListener("popstate",i),window.addEventListener("beforeunload",p,{passive:!0}),{pauseListeners:c,listen:u,destroy:d}}function uu(e,n,s,o=!1,r=!1){return{back:e,current:n,forward:s,replaced:o,position:window.history.length,scroll:r?gl():null}}function Fv(e){const{history:n,location:s}=window,o={value:pf(e,s)},r={value:n.state};r.value||l(o.value,{back:null,current:o.value,forward:null,position:n.length-1,replaced:!0,scroll:null},!0);function l(c,u,p){const d=e.indexOf("#"),h=d>-1?(s.host&&document.querySelector("base")?e:e.slice(d))+c:kv()+e+c;try{n[p?"replaceState":"pushState"](u,"",h),r.value=u}catch(y){Ee("Error with push/replace State",y),s[p?"replace":"assign"](h)}}function a(c,u){const p=Oe({},n.state,uu(r.value.back,c,r.value.forward,!0),u,{position:r.value.position});l(c,p,!0),o.value=c}function i(c,u){const p=Oe({},r.value,n.state,{forward:c,scroll:gl()});n.state||Ee(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://next.router.vuejs.org/guide/migration/#usage-of-history-state.`),l(p.current,p,!0);const d=Oe({},uu(o.value,c,null),{position:p.position+1},u);l(c,d,!1),o.value=c}return{location:o,state:r,push:i,replace:a}}function Sv(e){e=vv(e);const n=Fv(e),s=Ev(e,n.state,n.location,n.replace);function o(l,a=!0){a||s.pauseListeners(),history.go(l)}const r=Oe({location:"",base:e,go:o,createHref:xv.bind(null,e)},n,s);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>n.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>n.state.value}),r}function Dv(e){return typeof e=="string"||e&&typeof e=="object"}function df(e){return typeof e=="string"||typeof e=="symbol"}const Fn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},ff=Symbol("navigation failure");var pu;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(pu||(pu={}));const Tv={[1]({location:e,currentLocation:n}){return`No match for
 ${JSON.stringify(e)}${n?`
while being at
`+JSON.stringify(n):""}`},[2]({from:e,to:n}){return`Redirected from "${e.fullPath}" to "${Ov(n)}" via a navigation guard.`},[4]({from:e,to:n}){return`Navigation aborted from "${e.fullPath}" to "${n.fullPath}" via a navigation guard.`},[8]({from:e,to:n}){return`Navigation cancelled from "${e.fullPath}" to "${n.fullPath}" with a new navigation.`},[16]({from:e,to:n}){return`Avoided redundant navigation to current location: "${e.fullPath}".`}};function Hs(e,n){return Oe(new Error(Tv[e](n)),{type:e,[ff]:!0},n)}function fn(e,n){return e instanceof Error&&ff in e&&(n==null||!!(e.type&n))}const $v=["params","query","hash"];function Ov(e){if(typeof e=="string")return e;if("path"in e)return e.path;const n={};for(const s of $v)s in e&&(n[s]=e[s]);return JSON.stringify(n,null,2)}const du="[^/]+?",Uv={sensitive:!1,strict:!1,start:!0,end:!0},Pv=/[.+*?^${}()[\]/\\]/g;function Iv(e,n){const s=Oe({},Uv,n),o=[];let r=s.start?"^":"";const l=[];for(const u of e){const p=u.length?[]:[90];s.strict&&!u.length&&(r+="/");for(let d=0;d<u.length;d++){const h=u[d];let y=40+(s.sensitive?.25:0);if(h.type===0)d||(r+="/"),r+=h.value.replace(Pv,"\\$&"),y+=40;else if(h.type===1){const{value:m,repeatable:b,optional:A,regexp:w}=h;l.push({name:m,repeatable:b,optional:A});const C=w||du;if(C!==du){y+=10;try{new RegExp(`(${C})`)}catch(B){throw new Error(`Invalid custom RegExp for param "${m}" (${C}): `+B.message)}}let x=b?`((?:${C})(?:/(?:${C}))*)`:`(${C})`;d||(x=A&&u.length<2?`(?:/${x})`:"/"+x),A&&(x+="?"),r+=x,y+=20,A&&(y+=-8),b&&(y+=-20),C===".*"&&(y+=-50)}p.push(y)}o.push(p)}if(s.strict&&s.end){const u=o.length-1;o[u][o[u].length-1]+=.7000000000000001}s.strict||(r+="/?"),s.end?r+="$":s.strict&&(r+="(?:/|$)");const a=new RegExp(r,s.sensitive?"":"i");function i(u){const p=u.match(a),d={};if(!p)return null;for(let h=1;h<p.length;h++){const y=p[h]||"",m=l[h-1];d[m.name]=y&&m.repeatable?y.split("/"):y}return d}function c(u){let p="",d=!1;for(const h of e){(!d||!p.endsWith("/"))&&(p+="/"),d=!1;for(const y of h)if(y.type===0)p+=y.value;else if(y.type===1){const{value:m,repeatable:b,optional:A}=y,w=m in u?u[m]:"";if(Tt(w)&&!b)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const C=Tt(w)?w.join("/"):w;if(!C)if(A)h.length<2&&(p.endsWith("/")?p=p.slice(0,-1):d=!0);else throw new Error(`Missing required param "${m}"`);p+=C}}return p||"/"}return{re:a,score:o,keys:l,parse:i,stringify:c}}function Mv(e,n){let s=0;for(;s<e.length&&s<n.length;){const o=n[s]-e[s];if(o)return o;s++}return e.length<n.length?e.length===1&&e[0]===40+40?-1:1:e.length>n.length?n.length===1&&n[0]===40+40?1:-1:0}function Lv(e,n){let s=0;const o=e.score,r=n.score;for(;s<o.length&&s<r.length;){const l=Mv(o[s],r[s]);if(l)return l;s++}if(Math.abs(r.length-o.length)===1){if(fu(o))return 1;if(fu(r))return-1}return r.length-o.length}function fu(e){const n=e[e.length-1];return e.length>0&&n[n.length-1]<0}const Rv={type:0,value:""},Nv=/[a-zA-Z0-9_]/;function qv(e){if(!e)return[[]];if(e==="/")return[[Rv]];if(!e.startsWith("/"))throw new Error(`Route paths should start with a "/": "${e}" should be "/${e}".`);function n(y){throw new Error(`ERR (${s})/"${u}": ${y}`)}let s=0,o=s;const r=[];let l;function a(){l&&r.push(l),l=[]}let i=0,c,u="",p="";function d(){u&&(s===0?l.push({type:0,value:u}):s===1||s===2||s===3?(l.length>1&&(c==="*"||c==="+")&&n(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),l.push({type:1,value:u,regexp:p,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):n("Invalid state to consume buffer"),u="")}function h(){u+=c}for(;i<e.length;){if(c=e[i++],c==="\\"&&s!==2){o=s,s=4;continue}switch(s){case 0:c==="/"?(u&&d(),a()):c===":"?(d(),s=1):h();break;case 4:h(),s=o;break;case 1:c==="("?s=2:Nv.test(c)?h():(d(),s=0,c!=="*"&&c!=="?"&&c!=="+"&&i--);break;case 2:c===")"?p[p.length-1]=="\\"?p=p.slice(0,-1)+c:s=3:p+=c;break;case 3:d(),s=0,c!=="*"&&c!=="?"&&c!=="+"&&i--,p="";break;default:n("Unknown state");break}}return s===2&&n(`Unfinished custom RegExp for param "${u}"`),d(),a(),r}function jv(e,n,s){const o=Iv(qv(e.path),s);{const l=new Set;for(const a of o.keys)l.has(a.name)&&Ee(`Found duplicated params with name "${a.name}" for path "${e.path}". Only the last one will be available on "$route.params".`),l.add(a.name)}const r=Oe(o,{record:e,parent:n,children:[],alias:[]});return n&&!r.record.aliasOf==!n.record.aliasOf&&n.children.push(r),r}function Wv(e,n){const s=[],o=new Map;n=mu({strict:!1,end:!0,sensitive:!1},n);function r(p){return o.get(p)}function l(p,d,h){const y=!h,m=Hv(p);Gv(m,d),m.aliasOf=h&&h.record;const b=mu(n,p),A=[m];if("alias"in p){const x=typeof p.alias=="string"?[p.alias]:p.alias;for(const B of x)A.push(Oe({},m,{components:h?h.record.components:m.components,path:B,aliasOf:h?h.record:m}))}let w,C;for(const x of A){const{path:B}=x;if(d&&B[0]!=="/"){const k=d.record.path,S=k[k.length-1]==="/"?"":"/";x.path=d.record.path+(B&&S+B)}if(x.path==="*")throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.`);if(w=jv(x,d,b),d&&B[0]==="/"&&Yv(w,d),h?(h.alias.push(w),Kv(h,w)):(C=C||w,C!==w&&C.alias.push(w),y&&p.name&&!yu(w)&&a(p.name)),m.children){const k=m.children;for(let S=0;S<k.length;S++)l(k[S],w,h&&h.children[S])}h=h||w,(w.record.components&&Object.keys(w.record.components).length||w.record.name||w.record.redirect)&&c(w)}return C?()=>{a(C)}:xo}function a(p){if(df(p)){const d=o.get(p);d&&(o.delete(p),s.splice(s.indexOf(d),1),d.children.forEach(a),d.alias.forEach(a))}else{const d=s.indexOf(p);d>-1&&(s.splice(d,1),p.record.name&&o.delete(p.record.name),p.children.forEach(a),p.alias.forEach(a))}}function i(){return s}function c(p){let d=0;for(;d<s.length&&Lv(p,s[d])>=0&&(p.record.path!==s[d].record.path||!hf(p,s[d]));)d++;s.splice(d,0,p),p.record.name&&!yu(p)&&o.set(p.record.name,p)}function u(p,d){let h,y={},m,b;if("name"in p&&p.name){if(h=o.get(p.name),!h)throw Hs(1,{location:p});{const C=Object.keys(p.params||{}).filter(x=>!h.keys.find(B=>B.name===x));C.length&&Ee(`Discarded invalid param(s) "${C.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`)}b=h.record.name,y=Oe(hu(d.params,h.keys.filter(C=>!C.optional).map(C=>C.name)),p.params&&hu(p.params,h.keys.map(C=>C.name))),m=h.stringify(y)}else if("path"in p)m=p.path,m.startsWith("/")||Ee(`The Matcher cannot resolve relative paths but received "${m}". Unless you directly called \`matcher.resolve("${m}")\`, this is probably a bug in vue-router. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/router.`),h=s.find(C=>C.re.test(m)),h&&(y=h.parse(m),b=h.record.name);else{if(h=d.name?o.get(d.name):s.find(C=>C.re.test(d.path)),!h)throw Hs(1,{location:p,currentLocation:d});b=h.record.name,y=Oe({},d.params,p.params),m=h.stringify(y)}const A=[];let w=h;for(;w;)A.unshift(w.record),w=w.parent;return{name:b,path:m,params:y,matched:A,meta:zv(A)}}return e.forEach(p=>l(p)),{addRoute:l,resolve:u,removeRoute:a,getRoutes:i,getRecordMatcher:r}}function hu(e,n){const s={};for(const o of n)o in e&&(s[o]=e[o]);return s}function Hv(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:Vv(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function Vv(e){const n={},s=e.props||!1;if("component"in e)n.default=s;else for(const o in e.components)n[o]=typeof s=="boolean"?s:s[o];return n}function yu(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function zv(e){return e.reduce((n,s)=>Oe(n,s.meta),{})}function mu(e,n){const s={};for(const o in e)s[o]=o in n?n[o]:e[o];return s}function Ea(e,n){return e.name===n.name&&e.optional===n.optional&&e.repeatable===n.repeatable}function Kv(e,n){for(const s of e.keys)if(!s.optional&&!n.keys.find(Ea.bind(null,s)))return Ee(`Alias "${n.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${s.name}"`);for(const s of n.keys)if(!s.optional&&!e.keys.find(Ea.bind(null,s)))return Ee(`Alias "${n.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${s.name}"`)}function Gv(e,n){n&&n.record.name&&!e.name&&!e.path&&Ee(`The route named "${String(n.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`)}function Yv(e,n){for(const s of n.keys)if(!e.keys.find(Ea.bind(null,s)))return Ee(`Absolute path "${e.record.path}" must have the exact same param named "${s.name}" as its parent "${n.record.path}".`)}function hf(e,n){return n.children.some(s=>s===e||hf(e,s))}const yf=/#/g,Qv=/&/g,Zv=/\//g,Jv=/=/g,Xv=/\?/g,mf=/\+/g,e8=/%5B/g,t8=/%5D/g,gf=/%5E/g,n8=/%60/g,_f=/%7B/g,s8=/%7C/g,vf=/%7D/g,o8=/%20/g;function Fi(e){return encodeURI(""+e).replace(s8,"|").replace(e8,"[").replace(t8,"]")}function r8(e){return Fi(e).replace(_f,"{").replace(vf,"}").replace(gf,"^")}function Fa(e){return Fi(e).replace(mf,"%2B").replace(o8,"+").replace(yf,"%23").replace(Qv,"%26").replace(n8,"`").replace(_f,"{").replace(vf,"}").replace(gf,"^")}function l8(e){return Fa(e).replace(Jv,"%3D")}function a8(e){return Fi(e).replace(yf,"%23").replace(Xv,"%3F")}function i8(e){return e==null?"":a8(e).replace(Zv,"%2F")}function Mo(e){try{return decodeURIComponent(""+e)}catch{Ee(`Error decoding "${e}". Using original value`)}return""+e}function c8(e){const n={};if(e===""||e==="?")return n;const o=(e[0]==="?"?e.slice(1):e).split("&");for(let r=0;r<o.length;++r){const l=o[r].replace(mf," "),a=l.indexOf("="),i=Mo(a<0?l:l.slice(0,a)),c=a<0?null:Mo(l.slice(a+1));if(i in n){let u=n[i];Tt(u)||(u=n[i]=[u]),u.push(c)}else n[i]=c}return n}function gu(e){let n="";for(let s in e){const o=e[s];if(s=l8(s),o==null){o!==void 0&&(n+=(n.length?"&":"")+s);continue}(Tt(o)?o.map(l=>l&&Fa(l)):[o&&Fa(o)]).forEach(l=>{l!==void 0&&(n+=(n.length?"&":"")+s,l!=null&&(n+="="+l))})}return n}function u8(e){const n={};for(const s in e){const o=e[s];o!==void 0&&(n[s]=Tt(o)?o.map(r=>r==null?null:""+r):o==null?o:""+o)}return n}const p8=Symbol("router view location matched"),_u=Symbol("router view depth"),Si=Symbol("router"),bf=Symbol("route location"),Sa=Symbol("router view location");function so(){let e=[];function n(o){return e.push(o),()=>{const r=e.indexOf(o);r>-1&&e.splice(r,1)}}function s(){e=[]}return{add:n,list:()=>e,reset:s}}function $n(e,n,s,o,r){const l=o&&(o.enterCallbacks[r]=o.enterCallbacks[r]||[]);return()=>new Promise((a,i)=>{const c=d=>{d===!1?i(Hs(4,{from:s,to:n})):d instanceof Error?i(d):Dv(d)?i(Hs(2,{from:n,to:d})):(l&&o.enterCallbacks[r]===l&&typeof d=="function"&&l.push(d),a())},u=e.call(o&&o.instances[r],n,s,d8(c,n,s));let p=Promise.resolve(u);if(e.length<3&&(p=p.then(c)),e.length>2){const d=`The "next" callback was never called inside of ${e.name?'"'+e.name+'"':""}:
${e.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;if(typeof u=="object"&&"then"in u)p=p.then(h=>c._called?h:(Ee(d),Promise.reject(new Error("Invalid navigation guard"))));else if(u!==void 0&&!c._called){Ee(d),i(new Error("Invalid navigation guard"));return}}p.catch(d=>i(d))})}function d8(e,n,s){let o=0;return function(){o++===1&&Ee(`The "next" callback was called more than once in one navigation guard when going from "${s.fullPath}" to "${n.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`),e._called=!0,o===1&&e.apply(null,arguments)}}function Ll(e,n,s,o){const r=[];for(const l of e){!l.components&&!l.children.length&&Ee(`Record with path "${l.path}" is either missing a "component(s)" or "children" property.`);for(const a in l.components){let i=l.components[a];{if(!i||typeof i!="object"&&typeof i!="function")throw Ee(`Component "${a}" in record with path "${l.path}" is not a valid component. Received "${String(i)}".`),new Error("Invalid route component");if("then"in i){Ee(`Component "${a}" in record with path "${l.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`);const c=i;i=()=>c}else i.__asyncLoader&&!i.__warnedDefineAsync&&(i.__warnedDefineAsync=!0,Ee(`Component "${a}" in record with path "${l.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`))}if(!(n!=="beforeRouteEnter"&&!l.instances[a]))if(f8(i)){const u=(i.__vccOpts||i)[n];u&&r.push($n(u,s,o,l,a))}else{let c=i();"catch"in c||(Ee(`Component "${a}" in record with path "${l.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`),c=Promise.resolve(c)),r.push(()=>c.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${l.path}"`));const p=fv(u)?u.default:u;l.components[a]=p;const h=(p.__vccOpts||p)[n];return h&&$n(h,s,o,l,a)()}))}}}return r}function f8(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function vu(e){const n=R(Si),s=R(bf),o=$(()=>n.resolve(T(e.to))),r=$(()=>{const{matched:c}=o.value,{length:u}=c,p=c[u-1],d=s.matched;if(!p||!d.length)return-1;const h=d.findIndex(zn.bind(null,p));if(h>-1)return h;const y=bu(c[u-2]);return u>1&&bu(p)===y&&d[d.length-1].path!==y?d.findIndex(zn.bind(null,c[u-2])):h}),l=$(()=>r.value>-1&&g8(s.params,o.value.params)),a=$(()=>r.value>-1&&r.value===s.matched.length-1&&uf(s.params,o.value.params));function i(c={}){return m8(c)?n[T(e.replace)?"replace":"push"](T(e.to)).catch(xo):Promise.resolve()}if(_n){const c=$t();if(c){const u={route:o.value,isActive:l.value,isExactActive:a.value};c.__vrl_devtools=c.__vrl_devtools||[],c.__vrl_devtools.push(u),ks(()=>{u.route=o.value,u.isActive=l.value,u.isExactActive=a.value},{flush:"post"})}}return{route:o,href:$(()=>o.value.href),isActive:l,isExactActive:a,navigate:i}}const h8=Ae({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:vu,setup(e,{slots:n}){const s=We(vu(e)),{options:o}=R(Si),r=$(()=>({[xu(e.activeClass,o.linkActiveClass,"router-link-active")]:s.isActive,[xu(e.exactActiveClass,o.linkExactActiveClass,"router-link-exact-active")]:s.isExactActive}));return()=>{const l=n.default&&n.default(s);return e.custom?l:Xe("a",{"aria-current":s.isExactActive?e.ariaCurrentValue:null,href:s.href,onClick:s.navigate,class:r.value},l)}}}),y8=h8;function m8(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const n=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(n))return}return e.preventDefault&&e.preventDefault(),!0}}function g8(e,n){for(const s in n){const o=n[s],r=e[s];if(typeof o=="string"){if(o!==r)return!1}else if(!Tt(r)||r.length!==o.length||o.some((l,a)=>l!==r[a]))return!1}return!0}function bu(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const xu=(e,n,s)=>e??n??s,_8=Ae({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:n,slots:s}){b8();const o=R(Sa),r=$(()=>e.route||o.value),l=R(_u,0),a=$(()=>{let u=T(l);const{matched:p}=r.value;let d;for(;(d=p[u])&&!d.components;)u++;return u}),i=$(()=>r.value.matched[a.value]);Ft(_u,$(()=>a.value+1)),Ft(p8,i),Ft(Sa,r);const c=Y();return ge(()=>[c.value,i.value,e.name],([u,p,d],[h,y,m])=>{p&&(p.instances[d]=u,y&&y!==p&&u&&u===h&&(p.leaveGuards.size||(p.leaveGuards=y.leaveGuards),p.updateGuards.size||(p.updateGuards=y.updateGuards))),u&&p&&(!y||!zn(p,y)||!h)&&(p.enterCallbacks[d]||[]).forEach(b=>b(u))},{flush:"post"}),()=>{const u=r.value,p=e.name,d=i.value,h=d&&d.components[p];if(!h)return wu(s.default,{Component:h,route:u});const y=d.props[p],m=y?y===!0?u.params:typeof y=="function"?y(u):y:null,A=Xe(h,Oe({},m,n,{onVnodeUnmounted:w=>{w.component.isUnmounted&&(d.instances[p]=null)},ref:c}));if(_n&&A.ref){const w={depth:a.value,name:d.name,path:d.path,meta:d.meta};(Tt(A.ref)?A.ref.map(x=>x.i):[A.ref.i]).forEach(x=>{x.__vrv_devtools=w})}return wu(s.default,{Component:A,route:u})||A}}});function wu(e,n){if(!e)return null;const s=e(n);return s.length===1?s[0]:s}const v8=_8;function b8(){const e=$t(),n=e.parent&&e.parent.type.name,s=e.parent&&e.parent.subTree&&e.parent.subTree.type;if(n&&(n==="KeepAlive"||n.includes("Transition"))&&typeof s=="object"&&s.name==="RouterView"){const o=n==="KeepAlive"?"keep-alive":"transition";Ee(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.
Use slot props instead:

<router-view v-slot="{ Component }">
  <${o}>
    <component :is="Component" />
  </${o}>
</router-view>`)}}function oo(e,n){const s=Oe({},e,{matched:e.matched.map(o=>S8(o,["instances","children","aliasOf"]))});return{_custom:{type:null,readOnly:!0,display:e.fullPath,tooltip:n,value:s}}}function yr(e){return{_custom:{display:e}}}let x8=0;function w8(e,n,s){if(n.__hasDevtools)return;n.__hasDevtools=!0;const o=x8++;dv({id:"org.vuejs.router"+(o?"."+o:""),label:"Vue Router",packageName:"vue-router",homepage:"https://router.vuejs.org",logo:"https://router.vuejs.org/logo.png",componentStateTypes:["Routing"],app:e},r=>{typeof r.now!="function"&&console.warn("[Vue Router]: You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."),r.on.inspectComponent((p,d)=>{p.instanceData&&p.instanceData.state.push({type:"Routing",key:"$route",editable:!1,value:oo(n.currentRoute.value,"Current Route")})}),r.on.visitComponentTree(({treeNode:p,componentInstance:d})=>{if(d.__vrv_devtools){const h=d.__vrv_devtools;p.tags.push({label:(h.name?`${h.name.toString()}: `:"")+h.path,textColor:0,tooltip:"This component is rendered by &lt;router-view&gt;",backgroundColor:xf})}Tt(d.__vrl_devtools)&&(d.__devtoolsApi=r,d.__vrl_devtools.forEach(h=>{let y=Cf,m="";h.isExactActive?(y=Af,m="This is exactly active"):h.isActive&&(y=wf,m="This link is active"),p.tags.push({label:h.route.path,textColor:0,tooltip:m,backgroundColor:y})}))}),ge(n.currentRoute,()=>{c(),r.notifyComponentUpdate(),r.sendInspectorTree(i),r.sendInspectorState(i)});const l="router:navigations:"+o;r.addTimelineLayer({id:l,label:`Router${o?" "+o:""} Navigations`,color:4237508}),n.onError((p,d)=>{r.addTimelineEvent({layerId:l,event:{title:"Error during Navigation",subtitle:d.fullPath,logType:"error",time:r.now(),data:{error:p},groupId:d.meta.__navigationId}})});let a=0;n.beforeEach((p,d)=>{const h={guard:yr("beforeEach"),from:oo(d,"Current Location during this navigation"),to:oo(p,"Target location")};Object.defineProperty(p.meta,"__navigationId",{value:a++}),r.addTimelineEvent({layerId:l,event:{time:r.now(),title:"Start of navigation",subtitle:p.fullPath,data:h,groupId:p.meta.__navigationId}})}),n.afterEach((p,d,h)=>{const y={guard:yr("afterEach")};h?(y.failure={_custom:{type:Error,readOnly:!0,display:h?h.message:"",tooltip:"Navigation Failure",value:h}},y.status=yr("❌")):y.status=yr("✅"),y.from=oo(d,"Current Location during this navigation"),y.to=oo(p,"Target location"),r.addTimelineEvent({layerId:l,event:{title:"End of navigation",subtitle:p.fullPath,time:r.now(),data:y,logType:h?"warning":"default",groupId:p.meta.__navigationId}})});const i="router-inspector:"+o;r.addInspector({id:i,label:"Routes"+(o?" "+o:""),icon:"book",treeFilterPlaceholder:"Search routes"});function c(){if(!u)return;const p=u;let d=s.getRoutes().filter(h=>!h.parent);d.forEach(Ef),p.filter&&(d=d.filter(h=>Da(h,p.filter.toLowerCase()))),d.forEach(h=>kf(h,n.currentRoute.value)),p.rootNodes=d.map(Bf)}let u;r.on.getInspectorTree(p=>{u=p,p.app===e&&p.inspectorId===i&&c()}),r.on.getInspectorState(p=>{if(p.app===e&&p.inspectorId===i){const h=s.getRoutes().find(y=>y.record.__vd_id===p.nodeId);h&&(p.state={options:C8(h)})}}),r.sendInspectorTree(i),r.sendInspectorState(i)})}function A8(e){return e.optional?e.repeatable?"*":"?":e.repeatable?"+":""}function C8(e){const{record:n}=e,s=[{editable:!1,key:"path",value:n.path}];return n.name!=null&&s.push({editable:!1,key:"name",value:n.name}),s.push({editable:!1,key:"regexp",value:e.re}),e.keys.length&&s.push({editable:!1,key:"keys",value:{_custom:{type:null,readOnly:!0,display:e.keys.map(o=>`${o.name}${A8(o)}`).join(" "),tooltip:"Param keys",value:e.keys}}}),n.redirect!=null&&s.push({editable:!1,key:"redirect",value:n.redirect}),e.alias.length&&s.push({editable:!1,key:"aliases",value:e.alias.map(o=>o.record.path)}),Object.keys(e.record.meta).length&&s.push({editable:!1,key:"meta",value:e.record.meta}),s.push({key:"score",editable:!1,value:{_custom:{type:null,readOnly:!0,display:e.score.map(o=>o.join(", ")).join(" | "),tooltip:"Score used to sort routes",value:e.score}}}),s}const xf=15485081,wf=2450411,Af=8702998,B8=2282478,Cf=16486972,k8=6710886;function Bf(e){const n=[],{record:s}=e;s.name!=null&&n.push({label:String(s.name),textColor:0,backgroundColor:B8}),s.aliasOf&&n.push({label:"alias",textColor:0,backgroundColor:Cf}),e.__vd_match&&n.push({label:"matches",textColor:0,backgroundColor:xf}),e.__vd_exactActive&&n.push({label:"exact",textColor:0,backgroundColor:Af}),e.__vd_active&&n.push({label:"active",textColor:0,backgroundColor:wf}),s.redirect&&n.push({label:typeof s.redirect=="string"?`redirect: ${s.redirect}`:"redirects",textColor:16777215,backgroundColor:k8});let o=s.__vd_id;return o==null&&(o=String(E8++),s.__vd_id=o),{id:o,label:s.path,tags:n,children:e.children.map(Bf)}}let E8=0;const F8=/^\/(.*)\/([a-z]*)$/;function kf(e,n){const s=n.matched.length&&zn(n.matched[n.matched.length-1],e.record);e.__vd_exactActive=e.__vd_active=s,s||(e.__vd_active=n.matched.some(o=>zn(o,e.record))),e.children.forEach(o=>kf(o,n))}function Ef(e){e.__vd_match=!1,e.children.forEach(Ef)}function Da(e,n){const s=String(e.re).match(F8);if(e.__vd_match=!1,!s||s.length<3)return!1;if(new RegExp(s[1].replace(/\$$/,""),s[2]).test(n))return e.children.forEach(a=>Da(a,n)),e.record.path!=="/"||n==="/"?(e.__vd_match=e.re.test(n),!0):!1;const r=e.record.path.toLowerCase(),l=Mo(r);return!n.startsWith("/")&&(l.includes(n)||r.includes(n))||l.startsWith(n)||r.startsWith(n)||e.record.name&&String(e.record.name).includes(n)?!0:e.children.some(a=>Da(a,n))}function S8(e,n){const s={};for(const o in e)n.includes(o)||(s[o]=e[o]);return s}function D8(e){const n=Wv(e.routes,e),s=e.parseQuery||c8,o=e.stringifyQuery||gu,r=e.history;if(!r)throw new Error('Provide the "history" option when calling "createRouter()": https://next.router.vuejs.org/api/#history.');const l=so(),a=so(),i=so(),c=cn(Fn);let u=Fn;_n&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const p=Il.bind(null,D=>""+D),d=Il.bind(null,i8),h=Il.bind(null,Mo);function y(D,Z){let X,te;return df(D)?(X=n.getRecordMatcher(D),te=Z):te=D,n.addRoute(te,X)}function m(D){const Z=n.getRecordMatcher(D);Z?n.removeRoute(Z):Ee(`Cannot remove non-existent route "${String(D)}"`)}function b(){return n.getRoutes().map(D=>D.record)}function A(D){return!!n.getRecordMatcher(D)}function w(D,Z){if(Z=Oe({},Z||c.value),typeof D=="string"){const v=Ml(s,D,Z.path),E=n.resolve({path:v.path},Z),I=r.createHref(v.fullPath);return I.startsWith("//")?Ee(`Location "${D}" resolved to "${I}". A resolved location cannot start with multiple slashes.`):E.matched.length||Ee(`No match found for location with path "${D}"`),Oe(v,E,{params:h(E.params),hash:Mo(v.hash),redirectedFrom:void 0,href:I})}let X;if("path"in D)"params"in D&&!("name"in D)&&Object.keys(D.params).length&&Ee(`Path "${D.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`),X=Oe({},D,{path:Ml(s,D.path,Z.path).path});else{const v=Oe({},D.params);for(const E in v)v[E]==null&&delete v[E];X=Oe({},D,{params:d(v)}),Z.params=d(Z.params)}const te=n.resolve(X,Z),we=D.hash||"";we&&!we.startsWith("#")&&Ee(`A \`hash\` should always start with the character "#". Replace "${we}" with "#${we}".`),te.params=p(h(te.params));const Ie=mv(o,Oe({},D,{hash:r8(we),path:te.path})),g=r.createHref(Ie);return g.startsWith("//")?Ee(`Location "${D}" resolved to "${g}". A resolved location cannot start with multiple slashes.`):te.matched.length||Ee(`No match found for location with path "${"path"in D?D.path:D}"`),Oe({fullPath:Ie,hash:we,query:o===gu?u8(D.query):D.query||{}},te,{redirectedFrom:void 0,href:g})}function C(D){return typeof D=="string"?Ml(s,D,c.value.path):Oe({},D)}function x(D,Z){if(u!==D)return Hs(8,{from:Z,to:D})}function B(D){return L(D)}function k(D){return B(Oe(C(D),{replace:!0}))}function S(D){const Z=D.matched[D.matched.length-1];if(Z&&Z.redirect){const{redirect:X}=Z;let te=typeof X=="function"?X(D):X;if(typeof te=="string"&&(te=te.includes("?")||te.includes("#")?te=C(te):{path:te},te.params={}),!("path"in te)&&!("name"in te))throw Ee(`Invalid redirect found:
${JSON.stringify(te,null,2)}
 when navigating to "${D.fullPath}". A redirect must contain a name or path. This will break in production.`),new Error("Invalid redirect");return Oe({query:D.query,hash:D.hash,params:"path"in te?{}:D.params},te)}}function L(D,Z){const X=u=w(D),te=c.value,we=D.state,Ie=D.force,g=D.replace===!0,v=S(X);if(v)return L(Oe(C(v),{state:typeof v=="object"?Oe({},we,v.state):we,force:Ie,replace:g}),Z||X);const E=X;E.redirectedFrom=Z;let I;return!Ie&&au(o,te,X)&&(I=Hs(16,{to:E,from:te}),Ot(te,te,!0,!1)),(I?Promise.resolve(I):ne(E,te)).catch(U=>fn(U)?fn(U,2)?U:Ue(U):ie(U,E,te)).then(U=>{if(U){if(fn(U,2))return au(o,w(U.to),E)&&Z&&(Z._count=Z._count?Z._count+1:1)>30?(Ee(`Detected a possibly infinite redirection in a navigation guard when going from "${te.fullPath}" to "${E.fullPath}". Aborting to avoid a Stack Overflow.
 Are you always returning a new location within a navigation guard? That would lead to this error. Only return when redirecting or aborting, that should fix this. This might break in production if not fixed.`),Promise.reject(new Error("Infinite redirect in navigation guard"))):L(Oe({replace:g},C(U.to),{state:typeof U.to=="object"?Oe({},we,U.to.state):we,force:Ie}),Z||E)}else U=Q(E,te,!0,g,we);return ue(E,te,U),U})}function O(D,Z){const X=x(D,Z);return X?Promise.reject(X):Promise.resolve()}function j(D){const Z=Jt.values().next().value;return Z&&typeof Z.runWithContext=="function"?Z.runWithContext(D):D()}function ne(D,Z){let X;const[te,we,Ie]=T8(D,Z);X=Ll(te.reverse(),"beforeRouteLeave",D,Z);for(const v of te)v.leaveGuards.forEach(E=>{X.push($n(E,D,Z))});const g=O.bind(null,D,Z);return X.push(g),Ut(X).then(()=>{X=[];for(const v of l.list())X.push($n(v,D,Z));return X.push(g),Ut(X)}).then(()=>{X=Ll(we,"beforeRouteUpdate",D,Z);for(const v of we)v.updateGuards.forEach(E=>{X.push($n(E,D,Z))});return X.push(g),Ut(X)}).then(()=>{X=[];for(const v of D.matched)if(v.beforeEnter&&!Z.matched.includes(v))if(Tt(v.beforeEnter))for(const E of v.beforeEnter)X.push($n(E,D,Z));else X.push($n(v.beforeEnter,D,Z));return X.push(g),Ut(X)}).then(()=>(D.matched.forEach(v=>v.enterCallbacks={}),X=Ll(Ie,"beforeRouteEnter",D,Z),X.push(g),Ut(X))).then(()=>{X=[];for(const v of a.list())X.push($n(v,D,Z));return X.push(g),Ut(X)}).catch(v=>fn(v,8)?v:Promise.reject(v))}function ue(D,Z,X){for(const te of i.list())j(()=>te(D,Z,X))}function Q(D,Z,X,te,we){const Ie=x(D,Z);if(Ie)return Ie;const g=Z===Fn,v=_n?history.state:{};X&&(te||g?r.replace(D.fullPath,Oe({scroll:g&&v&&v.scroll},we)):r.push(D.fullPath,we)),c.value=D,Ot(D,Z,X,g),Ue()}let ye;function _e(){ye||(ye=r.listen((D,Z,X)=>{if(!Qn.listening)return;const te=w(D),we=S(te);if(we){L(Oe(we,{replace:!0}),te).catch(xo);return}u=te;const Ie=c.value;_n&&Cv(cu(Ie.fullPath,X.delta),gl()),ne(te,Ie).catch(g=>fn(g,12)?g:fn(g,2)?(L(g.to,te).then(v=>{fn(v,20)&&!X.delta&&X.type===Io.pop&&r.go(-1,!1)}).catch(xo),Promise.reject()):(X.delta&&r.go(-X.delta,!1),ie(g,te,Ie))).then(g=>{g=g||Q(te,Ie,!1),g&&(X.delta&&!fn(g,8)?r.go(-X.delta,!1):X.type===Io.pop&&fn(g,20)&&r.go(-1,!1)),ue(te,Ie,g)}).catch(xo)}))}let be=so(),Pe=so(),ee;function ie(D,Z,X){Ue(D);const te=Pe.list();return te.length?te.forEach(we=>we(D,Z,X)):(Ee("uncaught error during route navigation:"),console.error(D)),Promise.reject(D)}function Ce(){return ee&&c.value!==Fn?Promise.resolve():new Promise((D,Z)=>{be.add([D,Z])})}function Ue(D){return ee||(ee=!D,_e(),be.list().forEach(([Z,X])=>D?X(D):Z()),be.reset()),D}function Ot(D,Z,X,te){const{scrollBehavior:we}=e;if(!_n||!we)return Promise.resolve();const Ie=!X&&Bv(cu(D.fullPath,0))||(te||!X)&&history.state&&history.state.scroll||null;return lt().then(()=>we(D,Z,Ie)).then(g=>g&&Av(g)).catch(g=>ie(g,D,Z))}const ot=D=>r.go(D);let _t;const Jt=new Set,Qn={currentRoute:c,listening:!0,addRoute:y,removeRoute:m,hasRoute:A,getRoutes:b,resolve:w,options:e,push:B,replace:k,go:ot,back:()=>ot(-1),forward:()=>ot(1),beforeEach:l.add,beforeResolve:a.add,afterEach:i.add,onError:Pe.add,isReady:Ce,install(D){const Z=this;D.component("RouterLink",y8),D.component("RouterView",v8),D.config.globalProperties.$router=Z,Object.defineProperty(D.config.globalProperties,"$route",{enumerable:!0,get:()=>T(c)}),_n&&!_t&&c.value===Fn&&(_t=!0,B(r.location).catch(we=>{Ee("Unexpected error when starting the router:",we)}));const X={};for(const we in Fn)X[we]=$(()=>c.value[we]);D.provide(Si,Z),D.provide(bf,We(X)),D.provide(Sa,c);const te=D.unmount;Jt.add(D),D.unmount=function(){Jt.delete(D),Jt.size<1&&(u=Fn,ye&&ye(),ye=null,c.value=Fn,_t=!1,ee=!1),te()},_n&&w8(D,Z,n)}};function Ut(D){return D.reduce((Z,X)=>Z.then(()=>j(X)),Promise.resolve())}return Qn}function T8(e,n){const s=[],o=[],r=[],l=Math.max(n.matched.length,e.matched.length);for(let a=0;a<l;a++){const i=n.matched[a];i&&(e.matched.find(u=>zn(u,i))?o.push(i):s.push(i));const c=e.matched[a];c&&(n.matched.find(u=>zn(u,c))||r.push(c))}return[s,o,r]}const Rl=Y(!1),Ao=Y(!1),Is=Y(!1),$8=Y(!0),Ta=w_({xs:460,...x_}),xs=ov(),Ff=Q_(),O8=$(()=>xs.height.value-xs.width.value/Mn>180),Sf=G_(Gt?document.body:null),Nn=__(),U8=$(()=>{var e,n;return["INPUT","TEXTAREA"].includes(((e=Nn.value)==null?void 0:e.tagName)||"")||((n=Nn.value)==null?void 0:n.classList.contains("CodeMirror-code"))}),P8=$(()=>{var e;return["BUTTON","A"].includes(((e=Nn.value)==null?void 0:e.tagName)||"")});Yt("slidev-camera","default");Yt("slidev-mic","default");const Br=Yt("slidev-scale",0),ft=Yt("slidev-show-overview",!1),Nl=Yt("slidev-presenter-cursor",!0),Au=Yt("slidev-show-editor",!1);Yt("slidev-editor-width",Gt?window.innerWidth*.4:100);const Df=of(ft);function Cu(e,n,s,o=r=>r){return e*o(.5-n*(.5-s))}function I8(e){return[-e[0],-e[1]]}function Ht(e,n){return[e[0]+n[0],e[1]+n[1]]}function Mt(e,n){return[e[0]-n[0],e[1]-n[1]]}function Wt(e,n){return[e[0]*n,e[1]*n]}function M8(e,n){return[e[0]/n,e[1]/n]}function ro(e){return[e[1],-e[0]]}function Bu(e,n){return e[0]*n[0]+e[1]*n[1]}function L8(e,n){return e[0]===n[0]&&e[1]===n[1]}function R8(e){return Math.hypot(e[0],e[1])}function N8(e){return e[0]*e[0]+e[1]*e[1]}function ku(e,n){return N8(Mt(e,n))}function Tf(e){return M8(e,R8(e))}function q8(e,n){return Math.hypot(e[1]-n[1],e[0]-n[0])}function lo(e,n,s){let o=Math.sin(s),r=Math.cos(s),l=e[0]-n[0],a=e[1]-n[1],i=l*r-a*o,c=l*o+a*r;return[i+n[0],c+n[1]]}function $a(e,n,s){return Ht(e,Wt(Mt(n,e),s))}function Eu(e,n,s){return Ht(e,Wt(n,s))}var{min:Os,PI:j8}=Math,Fu=.275,ao=j8+1e-4;function W8(e,n={}){let{size:s=16,smoothing:o=.5,thinning:r=.5,simulatePressure:l=!0,easing:a=ee=>ee,start:i={},end:c={},last:u=!1}=n,{cap:p=!0,easing:d=ee=>ee*(2-ee)}=i,{cap:h=!0,easing:y=ee=>--ee*ee*ee+1}=c;if(e.length===0||s<=0)return[];let m=e[e.length-1].runningLength,b=i.taper===!1?0:i.taper===!0?Math.max(s,m):i.taper,A=c.taper===!1?0:c.taper===!0?Math.max(s,m):c.taper,w=Math.pow(s*o,2),C=[],x=[],B=e.slice(0,10).reduce((ee,ie)=>{let Ce=ie.pressure;if(l){let Ue=Os(1,ie.distance/s),Ot=Os(1,1-Ue);Ce=Os(1,ee+(Ot-ee)*(Ue*Fu))}return(ee+Ce)/2},e[0].pressure),k=Cu(s,r,e[e.length-1].pressure,a),S,L=e[0].vector,O=e[0].point,j=O,ne=O,ue=j,Q=!1;for(let ee=0;ee<e.length;ee++){let{pressure:ie}=e[ee],{point:Ce,vector:Ue,distance:Ot,runningLength:ot}=e[ee];if(ee<e.length-1&&m-ot<3)continue;if(r){if(l){let te=Os(1,Ot/s),we=Os(1,1-te);ie=Os(1,B+(we-B)*(te*Fu))}k=Cu(s,r,ie,a)}else k=s/2;S===void 0&&(S=k);let _t=ot<b?d(ot/b):1,Jt=m-ot<A?y((m-ot)/A):1;k=Math.max(.01,k*Math.min(_t,Jt));let Qn=(ee<e.length-1?e[ee+1]:e[ee]).vector,Ut=ee<e.length-1?Bu(Ue,Qn):1,D=Bu(Ue,L)<0&&!Q,Z=Ut!==null&&Ut<0;if(D||Z){let te=Wt(ro(L),k);for(let we=1/13,Ie=0;Ie<=1;Ie+=we)ne=lo(Mt(Ce,te),Ce,ao*Ie),C.push(ne),ue=lo(Ht(Ce,te),Ce,ao*-Ie),x.push(ue);O=ne,j=ue,Z&&(Q=!0);continue}if(Q=!1,ee===e.length-1){let te=Wt(ro(Ue),k);C.push(Mt(Ce,te)),x.push(Ht(Ce,te));continue}let X=Wt(ro($a(Qn,Ue,Ut)),k);ne=Mt(Ce,X),(ee<=1||ku(O,ne)>w)&&(C.push(ne),O=ne),ue=Ht(Ce,X),(ee<=1||ku(j,ue)>w)&&(x.push(ue),j=ue),B=ie,L=Ue}let ye=e[0].point.slice(0,2),_e=e.length>1?e[e.length-1].point.slice(0,2):Ht(e[0].point,[1,1]),be=[],Pe=[];if(e.length===1){if(!(b||A)||u){let ee=Eu(ye,Tf(ro(Mt(ye,_e))),-(S||k)),ie=[];for(let Ce=1/13,Ue=Ce;Ue<=1;Ue+=Ce)ie.push(lo(ee,ye,ao*2*Ue));return ie}}else{if(!(b||A&&e.length===1))if(p)for(let ie=1/13,Ce=ie;Ce<=1;Ce+=ie){let Ue=lo(x[0],ye,ao*Ce);be.push(Ue)}else{let ie=Mt(C[0],x[0]),Ce=Wt(ie,.5),Ue=Wt(ie,.51);be.push(Mt(ye,Ce),Mt(ye,Ue),Ht(ye,Ue),Ht(ye,Ce))}let ee=ro(I8(e[e.length-1].vector));if(A||b&&e.length===1)Pe.push(_e);else if(h){let ie=Eu(_e,ee,k);for(let Ce=1/29,Ue=Ce;Ue<1;Ue+=Ce)Pe.push(lo(ie,_e,ao*3*Ue))}else Pe.push(Ht(_e,Wt(ee,k)),Ht(_e,Wt(ee,k*.99)),Mt(_e,Wt(ee,k*.99)),Mt(_e,Wt(ee,k)))}return C.concat(Pe,x.reverse(),be)}function H8(e,n={}){var s;let{streamline:o=.5,size:r=16,last:l=!1}=n;if(e.length===0)return[];let a=.15+(1-o)*.85,i=Array.isArray(e[0])?e:e.map(({x:y,y:m,pressure:b=.5})=>[y,m,b]);if(i.length===2){let y=i[1];i=i.slice(0,-1);for(let m=1;m<5;m++)i.push($a(i[0],y,m/4))}i.length===1&&(i=[...i,[...Ht(i[0],[1,1]),...i[0].slice(2)]]);let c=[{point:[i[0][0],i[0][1]],pressure:i[0][2]>=0?i[0][2]:.25,vector:[1,1],distance:0,runningLength:0}],u=!1,p=0,d=c[0],h=i.length-1;for(let y=1;y<i.length;y++){let m=l&&y===h?i[y].slice(0,2):$a(d.point,i[y],a);if(L8(d.point,m))continue;let b=q8(m,d.point);if(p+=b,y<h&&!u){if(p<r)continue;u=!0}d={point:m,pressure:i[y][2]>=0?i[y][2]:.5,vector:Tf(Mt(d.point,m)),distance:b,runningLength:p},c.push(d)}return c[0].vector=((s=c[1])==null?void 0:s.vector)||[0,0],c}function V8(e,n={}){return W8(H8(e,n),n)}var z8=()=>({events:{},emit(e,...n){let s=this.events[e]||[];for(let o=0,r=s.length;o<r;o++)s[o](...n)},on(e,n){var s;return(s=this.events[e])!=null&&s.push(n)||(this.events[e]=[n]),()=>{var o;this.events[e]=(o=this.events[e])==null?void 0:o.filter(r=>n!==r)}}});function Gr(e,n){return e-n}function K8(e){return e<0?-1:1}function Yr(e){return[Math.abs(e),K8(e)]}function $f(){const e=()=>((1+Math.random())*65536|0).toString(16).substring(1);return`${e()+e()}-${e()}-${e()}-${e()}-${e()}${e()}${e()}`}var G8=2,vn=G8,zs=class{constructor(e){this.drauu=e,this.event=void 0,this.point=void 0,this.start=void 0,this.el=null}onSelected(e){}onUnselected(){}onStart(e){}onMove(e){return!1}onEnd(e){}get brush(){return this.drauu.brush}get shiftPressed(){return this.drauu.shiftPressed}get altPressed(){return this.drauu.altPressed}get svgElement(){return this.drauu.el}getMousePosition(e){var n;const s=this.drauu.el,o=this.drauu.options.coordinateScale??1;if(this.drauu.options.coordinateTransform===!1){const r=this.drauu.el.getBoundingClientRect();return{x:(e.pageX-r.left)*o,y:(e.pageY-r.top)*o,pressure:e.pressure}}else{const r=this.drauu.svgPoint;r.x=e.clientX,r.y=e.clientY;const l=r.matrixTransform((n=s.getScreenCTM())==null?void 0:n.inverse());return{x:l.x*o,y:l.y*o,pressure:e.pressure}}}createElement(e,n){const s=document.createElementNS("http://www.w3.org/2000/svg",e),o=n?{...this.brush,...n}:this.brush;return s.setAttribute("fill",o.fill??"transparent"),s.setAttribute("stroke",o.color),s.setAttribute("stroke-width",o.size.toString()),s.setAttribute("stroke-linecap","round"),o.dasharray&&s.setAttribute("stroke-dasharray",o.dasharray),s}attr(e,n){this.el.setAttribute(e,typeof n=="string"?n:n.toFixed(vn))}_setEvent(e){this.event=e,this.point=this.getMousePosition(e)}_eventDown(e){return this._setEvent(e),this.start=this.point,this.onStart(this.point)}_eventMove(e){return this._setEvent(e),this.onMove(this.point)}_eventUp(e){return this._setEvent(e),this.onEnd(this.point)}},Y8=class extends zs{constructor(){super(...arguments),this.points=[]}onStart(e){return this.el=document.createElementNS("http://www.w3.org/2000/svg","path"),this.points=[e],this.attr("fill",this.brush.color),this.attr("d",this.getSvgData(this.points)),this.el}onMove(e){return this.el||this.onStart(e),this.points[this.points.length-1]!==e&&this.points.push(e),this.attr("d",this.getSvgData(this.points)),!0}onEnd(){const e=this.el;return this.el=null,!!e}getSvgData(e){const n=V8(e,{size:this.brush.size*2,thinning:.9,simulatePressure:!1,start:{taper:5},end:{taper:5},...this.brush.stylusOptions});if(!n.length)return"";const s=n.reduce((o,[r,l],a,i)=>{const[c,u]=i[(a+1)%i.length];return o.push(r,l,(r+c)/2,(l+u)/2),o},["M",...n[0],"Q"]);return s.push("Z"),s.map(o=>typeof o=="number"?o.toFixed(2):o).join(" ")}},Q8=class extends zs{onStart(e){return this.el=this.createElement("ellipse"),this.attr("cx",e.x),this.attr("cy",e.y),this.el}onMove(e){if(!this.el||!this.start)return!1;let[n,s]=Yr(e.x-this.start.x),[o,r]=Yr(e.y-this.start.y);if(this.shiftPressed){const l=Math.min(n,o);n=l,o=l}if(this.altPressed)this.attr("cx",this.start.x),this.attr("cy",this.start.y),this.attr("rx",n),this.attr("ry",o);else{const[l,a]=[this.start.x,this.start.x+n*s].sort(Gr),[i,c]=[this.start.y,this.start.y+o*r].sort(Gr);this.attr("cx",(l+a)/2),this.attr("cy",(i+c)/2),this.attr("rx",(a-l)/2),this.attr("ry",(c-i)/2)}return!0}onEnd(){const e=this.el;return this.el=null,!(!e||!e.getTotalLength())}};function Of(e,n){const s=document.createElementNS("http://www.w3.org/2000/svg","defs"),o=document.createElementNS("http://www.w3.org/2000/svg","marker"),r=document.createElementNS("http://www.w3.org/2000/svg","path");return r.setAttribute("fill",n),o.setAttribute("id",e),o.setAttribute("viewBox","0 -5 10 10"),o.setAttribute("refX","5"),o.setAttribute("refY","0"),o.setAttribute("markerWidth","4"),o.setAttribute("markerHeight","4"),o.setAttribute("orient","auto"),r.setAttribute("d","M0,-5L10,0L0,5"),o.appendChild(r),s.appendChild(o),s}var Z8=class extends zs{onStart(e){if(this.el=this.createElement("line",{fill:"transparent"}),this.attr("x1",e.x),this.attr("y1",e.y),this.attr("x2",e.x),this.attr("y2",e.y),this.brush.arrowEnd){const n=$f(),s=document.createElementNS("http://www.w3.org/2000/svg","g");return s.append(Of(n,this.brush.color)),s.append(this.el),this.attr("marker-end",`url(#${n})`),s}return this.el}onMove(e){if(!this.el)return!1;let{x:n,y:s}=e;if(this.shiftPressed){const o=e.x-this.start.x,r=e.y-this.start.y;if(r!==0){let l=o/r;l=Math.round(l),Math.abs(l)<=1?(n=this.start.x+r*l,s=this.start.y+r):(n=this.start.x+o,s=this.start.y)}}return this.altPressed?(this.attr("x1",this.start.x*2-n),this.attr("y1",this.start.y*2-s),this.attr("x2",n),this.attr("y2",s)):(this.attr("x1",this.start.x),this.attr("y1",this.start.y),this.attr("x2",n),this.attr("y2",s)),!0}onEnd(){const e=this.el;return this.el=null,!(!e||e.getTotalLength()<5)}},J8=class extends zs{onStart(e){return this.el=this.createElement("rect"),this.brush.cornerRadius&&(this.attr("rx",this.brush.cornerRadius),this.attr("ry",this.brush.cornerRadius)),this.attr("x",e.x),this.attr("y",e.y),this.el}onMove(e){if(!this.el||!this.start)return!1;let[n,s]=Yr(e.x-this.start.x),[o,r]=Yr(e.y-this.start.y);if(this.shiftPressed){const l=Math.min(n,o);n=l,o=l}if(this.altPressed)this.attr("x",this.start.x-n),this.attr("y",this.start.y-o),this.attr("width",n*2),this.attr("height",o*2);else{const[l,a]=[this.start.x,this.start.x+n*s].sort(Gr),[i,c]=[this.start.y,this.start.y+o*r].sort(Gr);this.attr("x",l),this.attr("y",i),this.attr("width",a-l),this.attr("height",c-i)}return!0}onEnd(){const e=this.el;return this.el=null,!(!e||!e.getTotalLength())}};function X8(e,n){const s=e.x-n.x,o=e.y-n.y;return s*s+o*o}function eb(e,n,s){let o=n.x,r=n.y,l=s.x-o,a=s.y-r;if(l!==0||a!==0){const i=((e.x-o)*l+(e.y-r)*a)/(l*l+a*a);i>1?(o=s.x,r=s.y):i>0&&(o+=l*i,r+=a*i)}return l=e.x-o,a=e.y-r,l*l+a*a}function tb(e,n){let s=e[0];const o=[s];let r;for(let l=1,a=e.length;l<a;l++)r=e[l],X8(r,s)>n&&(o.push(r),s=r);return s!==r&&r&&o.push(r),o}function Oa(e,n,s,o,r){let l=o,a=0;for(let i=n+1;i<s;i++){const c=eb(e[i],e[n],e[s]);c>l&&(a=i,l=c)}l>o&&(a-n>1&&Oa(e,n,a,o,r),r.push(e[a]),s-a>1&&Oa(e,a,s,o,r))}function nb(e,n){const s=e.length-1,o=[e[0]];return Oa(e,0,s,n,o),o.push(e[s]),o}function Su(e,n,s=!1){if(e.length<=2)return e;const o=n!==void 0?n*n:1;return e=s?e:tb(e,o),e=nb(e,o),e}var sb=class extends zs{constructor(){super(...arguments),this.points=[],this.count=0}onStart(e){if(this.el=this.createElement("path",{fill:"transparent"}),this.points=[e],this.brush.arrowEnd){this.arrowId=$f();const n=Of(this.arrowId,this.brush.color);this.el.appendChild(n)}return this.el}onMove(e){return this.el||this.onStart(e),this.points[this.points.length-1]!==e&&(this.points.push(e),this.count+=1),this.count>5&&(this.points=Su(this.points,1,!0),this.count=0),this.attr("d",Tu(this.points)),!0}onEnd(){const e=this.el;return this.el=null,!(!e||(e.setAttribute("d",Tu(Su(this.points,1,!0))),!e.getTotalLength()))}};function ob(e,n){const s=n.x-e.x,o=n.y-e.y;return{length:Math.sqrt(s**2+o**2),angle:Math.atan2(o,s)}}function Du(e,n,s,o){const r=n||e,l=s||e,a=.2,i=ob(r,l),c=i.angle+(o?Math.PI:0),u=i.length*a,p=e.x+Math.cos(c)*u,d=e.y+Math.sin(c)*u;return{x:p,y:d}}function rb(e,n,s){const o=Du(s[n-1],s[n-2],e),r=Du(e,s[n-1],s[n+1],!0);return`C ${o.x.toFixed(vn)},${o.y.toFixed(vn)} ${r.x.toFixed(vn)},${r.y.toFixed(vn)} ${e.x.toFixed(vn)},${e.y.toFixed(vn)}`}function Tu(e){return e.reduce((n,s,o,r)=>o===0?`M ${s.x.toFixed(vn)},${s.y.toFixed(vn)}`:`${n} ${rb(s,o,r)}`,"")}var lb=class extends zs{constructor(){super(...arguments),this.pathSubFactor=20,this.pathFragments=[]}onSelected(e){const n=(s,o)=>{if(s&&s.length)for(let r=0;r<s.length;r++){const l=s[r];if(l.getTotalLength){const a=l.getTotalLength();for(let i=0;i<this.pathSubFactor;i++){const c=l.getPointAtLength(a*i/this.pathSubFactor),u=l.getPointAtLength(a*(i+1)/this.pathSubFactor);this.pathFragments.push({x1:c.x,x2:u.x,y1:c.y,y2:u.y,segment:i,element:o||l})}}else l.children&&n(l.children,l)}};e&&n(e.children)}onUnselected(){this.pathFragments=[]}onStart(e){this.svgPointPrevious=this.svgElement.createSVGPoint(),this.svgPointPrevious.x=e.x,this.svgPointPrevious.y=e.y}onMove(e){this.svgPointCurrent=this.svgElement.createSVGPoint(),this.svgPointCurrent.x=e.x,this.svgPointCurrent.y=e.y;const n=this.checkAndEraseElement();return this.svgPointPrevious=this.svgPointCurrent,n}onEnd(){return this.svgPointPrevious=void 0,this.svgPointCurrent=void 0,!0}checkAndEraseElement(){const e=[];if(this.pathFragments.length)for(let n=0;n<this.pathFragments.length;n++){const s=this.pathFragments[n],o={x1:this.svgPointPrevious.x,x2:this.svgPointCurrent.x,y1:this.svgPointPrevious.y,y2:this.svgPointCurrent.y};this.lineLineIntersect(s,o)&&(s.element.remove(),e.push(n))}return e.length&&(this.pathFragments=this.pathFragments.filter((n,s)=>!e.includes(s))),e.length>0}lineLineIntersect(e,n){const s=e.x1,o=e.x2,r=n.x1,l=n.x2,a=e.y1,i=e.y2,c=n.y1,u=n.y2,p=(s-o)*(c-u)-(a-i)*(r-l),d=(s*i-a*o)*(r-l)-(s-o)*(r*u-c*l),h=(s*i-a*o)*(c-u)-(a-i)*(r*u-c*l),y=(m,b,A)=>m>=b&&m<=A?!0:m>=A&&m<=b;if(p===0)return!1;{const m={x:d/p,y:h/p};return y(m.x,s,o)&&y(m.y,a,i)&&y(m.x,r,l)&&y(m.y,c,u)}}};function ab(e){return{draw:new sb(e),stylus:new Y8(e),line:new Z8(e),rectangle:new J8(e),ellipse:new Q8(e),eraseLine:new lb(e)}}var ib=class{constructor(e={}){this.options=e,this.el=null,this.svgPoint=null,this.eventEl=null,this.shiftPressed=!1,this.altPressed=!1,this.drawing=!1,this._emitter=z8(),this._models=ab(this),this._undoStack=[],this._disposables=[],this.options.brush||(this.options.brush={color:"black",size:3,mode:"stylus"}),e.el&&this.mount(e.el,e.eventTarget)}get model(){return this._models[this.mode]}get mounted(){return!!this.el}get mode(){return this.options.brush.mode||"stylus"}set mode(e){this._models[this.mode].onUnselected(),this.options.brush.mode=e,this.model.onSelected(this.el)}get brush(){return this.options.brush}set brush(e){this.options.brush=e}resolveSelector(e){return typeof e=="string"?document.querySelector(e):e||null}mount(e,n){if(this.el)throw new Error("[drauu] already mounted, unmount previous target first");if(this.el=this.resolveSelector(e),!this.el)throw new Error("[drauu] target element not found");if(this.el.tagName.toLocaleLowerCase()!=="svg")throw new Error("[drauu] can only mount to a SVG element");if(!this.el.createSVGPoint)throw new Error("[drauu] SVG element must be create by document.createElementNS('http://www.w3.org/2000/svg', 'svg')");this.svgPoint=this.el.createSVGPoint();const s=this.resolveSelector(n)||this.el,o=this.eventStart.bind(this),r=this.eventMove.bind(this),l=this.eventEnd.bind(this),a=this.eventKeyboard.bind(this);s.addEventListener("pointerdown",o,{passive:!1}),window.addEventListener("pointermove",r,{passive:!1}),window.addEventListener("pointerup",l,{passive:!1}),window.addEventListener("pointercancel",l,{passive:!1}),window.addEventListener("keydown",a,!1),window.addEventListener("keyup",a,!1),this._disposables.push(()=>{s.removeEventListener("pointerdown",o),window.removeEventListener("pointermove",r),window.removeEventListener("pointerup",l),window.removeEventListener("pointercancel",l),window.removeEventListener("keydown",a,!1),window.removeEventListener("keyup",a,!1)}),this._emitter.emit("mounted")}unmount(){this._disposables.forEach(e=>e()),this._disposables.length=0,this.el=null,this._emitter.emit("unmounted")}on(e,n){return this._emitter.on(e,n)}undo(){const e=this.el;return e.lastElementChild?(this._undoStack.push(e.lastElementChild.cloneNode(!0)),e.lastElementChild.remove(),this._emitter.emit("changed"),!0):!1}redo(){return this._undoStack.length?(this.el.appendChild(this._undoStack.pop()),this._emitter.emit("changed"),!0):!1}canRedo(){return!!this._undoStack.length}canUndo(){var e;return!!((e=this.el)!=null&&e.lastElementChild)}eventMove(e){!this.acceptsInput(e)||!this.drawing||this.model._eventMove(e)&&(e.stopPropagation(),e.preventDefault(),this._emitter.emit("changed"))}eventStart(e){this.acceptsInput(e)&&(e.stopPropagation(),e.preventDefault(),this._currentNode&&this.cancel(),this.drawing=!0,this._emitter.emit("start"),this._currentNode=this.model._eventDown(e),this._currentNode&&this.mode!=="eraseLine"&&this.el.appendChild(this._currentNode),this._emitter.emit("changed"))}eventEnd(e){if(!this.acceptsInput(e)||!this.drawing)return;const n=this.model._eventUp(e);n?(n instanceof Element&&n!==this._currentNode&&(this._currentNode=n),this.commit()):this.cancel(),this.drawing=!1,this._emitter.emit("end"),this._emitter.emit("changed")}acceptsInput(e){return!this.options.acceptsInputTypes||this.options.acceptsInputTypes.includes(e.pointerType)}eventKeyboard(e){this.shiftPressed===e.shiftKey&&this.altPressed===e.altKey||(this.shiftPressed=e.shiftKey,this.altPressed=e.altKey,this.model.point&&this.model.onMove(this.model.point)&&this._emitter.emit("changed"))}commit(){this._undoStack.length=0;const e=this._currentNode;this._currentNode=void 0,this._emitter.emit("committed",e)}clear(){this._undoStack.length=0,this.cancel(),this.el.innerHTML="",this._emitter.emit("changed")}cancel(){this._currentNode&&(this.el.removeChild(this._currentNode),this._currentNode=void 0,this._emitter.emit("canceled"))}dump(){return this.el.innerHTML}load(e){this.clear(),this.el.innerHTML=e}};function cb(e){return new ib(e)}const Ua=["#ff595e","#ffca3a","#8ac926","#1982c4","#6a4c93","#ffffff","#000000"],on=Yt("slidev-drawing-enabled",!1),ED=Yt("slidev-drawing-pinned",!1),ub=Y(!1),pb=Y(!1),db=Y(!1),Lo=Y(!1),ds=Mg(Yt("slidev-drawing-brush",{color:Ua[0],size:4,mode:"stylus"})),$u=Y("stylus"),Uf=$(()=>Se.drawings.syncAll||bt.value);let Ro=!1;const io=$({get(){return $u.value},set(e){$u.value=e,e==="arrow"?(ds.mode="line",ds.arrowEnd=!0):(ds.mode=e,ds.arrowEnd=!1)}}),fb=We({brush:ds,acceptsInputTypes:$(()=>on.value&&(!Se.drawings.presenterOnly||bt.value)?void 0:["pen"]),coordinateTransform:!1}),mt=ll(cb(fb));function hb(){mt.clear(),Uf.value&&ef(He.value,"")}function Di(){var e;pb.value=mt.canRedo(),ub.value=mt.canUndo(),db.value=!!((e=mt.el)!=null&&e.children.length)}function yb(e){Ro=!0;const n=zr[e||He.value];n!=null?mt.load(n):mt.clear(),Di(),Ro=!1}mt.on("changed",()=>{if(Di(),!Ro){const e=mt.dump(),n=He.value;(zr[n]||"")!==e&&Uf.value&&ef(n,mt.dump())}});Og(e=>{Ro=!0,e[He.value]!=null&&mt.load(e[He.value]||""),Ro=!1,Di()});lt(()=>{ge(He,()=>{mt.mounted&&yb()},{immediate:!0})});mt.on("start",()=>Lo.value=!0);mt.on("end",()=>Lo.value=!1);window.addEventListener("keydown",e=>{if(!on.value)return;const n=!e.ctrlKey&&!e.altKey&&!e.shiftKey&&!e.metaKey;let s=!0;e.code==="KeyZ"&&(e.ctrlKey||e.metaKey)?e.shiftKey?mt.redo():mt.undo():e.code==="Escape"?on.value=!1:e.code==="KeyL"&&n?io.value="line":e.code==="KeyA"&&n?io.value="arrow":e.code==="KeyS"&&n?io.value="stylus":e.code==="KeyR"&&n?io.value="rectangle":e.code==="KeyE"&&n?io.value="ellipse":e.code==="KeyC"&&n?hb():e.code.startsWith("Digit")&&n&&+e.code[5]<=Ua.length?ds.color=Ua[+e.code[5]-1]:s=!1,s&&(e.preventDefault(),e.stopPropagation())},!1);function Qe(...e){return $(()=>e.every(n=>Ge(n)))}function kt(e){return $(()=>!Ge(e))}const Ou=U_(),ql=Yt("slidev-color-schema","auto"),Pa=$(()=>Se.colorSchema!=="auto"),Ti=$({get(){return Pa.value?Se.colorSchema==="dark":ql.value==="auto"?Ou.value:ql.value==="dark"},set(e){Pa.value||(ql.value=e===Ou.value?"auto":e?"dark":"light")}}),Pf=of(Ti);Gt&&ge(Ti,e=>{const n=document.querySelector("html");n.classList.toggle("dark",e),n.classList.toggle("light",!e)},{immediate:!0});const kr=Y(1),Er=$(()=>Ye.length),Dt=Y(0),$i=Y(0);function mb(){Dt.value>kr.value&&(Dt.value-=1)}function gb(){Dt.value<Er.value&&(Dt.value+=1)}function _b(){if(Dt.value>kr.value){let e=Dt.value-$i.value;e<kr.value&&(e=kr.value),Dt.value=e}}function vb(){if(Dt.value<Er.value){let e=Dt.value+$i.value;e>Er.value&&(e=Er.value),Dt.value=e}}function bb(){const{escape:e,space:n,shift:s,left:o,right:r,up:l,down:a,enter:i,d:c,g:u,o:p}=Ff;let d=[{name:"next_space",key:Qe(n,kt(s)),fn:qn,autoRepeat:!0},{name:"prev_space",key:Qe(n,s),fn:jn,autoRepeat:!0},{name:"next_right",key:Qe(r,kt(s),kt(ft)),fn:qn,autoRepeat:!0},{name:"prev_left",key:Qe(o,kt(s),kt(ft)),fn:jn,autoRepeat:!0},{name:"next_page_key",key:"pageDown",fn:qn,autoRepeat:!0},{name:"prev_page_key",key:"pageUp",fn:jn,autoRepeat:!0},{name:"next_down",key:Qe(a,kt(ft)),fn:qo,autoRepeat:!0},{name:"prev_up",key:Qe(l,kt(ft)),fn:()=>jo(!1),autoRepeat:!0},{name:"next_shift",key:Qe(r,s),fn:qo,autoRepeat:!0},{name:"prev_shift",key:Qe(o,s),fn:()=>jo(!1),autoRepeat:!0},{name:"toggle_dark",key:Qe(c,kt(on)),fn:Pf},{name:"toggle_overview",key:Qe(p,kt(on)),fn:Df},{name:"hide_overview",key:Qe(e,kt(on)),fn:()=>ft.value=!1},{name:"goto",key:Qe(u,kt(on)),fn:()=>Is.value=!Is.value},{name:"next_overview",key:Qe(r,ft),fn:gb},{name:"prev_overview",key:Qe(o,ft),fn:mb},{name:"up_overview",key:Qe(l,ft),fn:_b},{name:"down_overview",key:Qe(a,ft),fn:vb},{name:"goto_from_overview",key:Qe(i,ft),fn:()=>{Vs(Dt.value),ft.value=!1}}];const h=new Set(d.map(m=>m.name));if(d.filter(m=>m.name&&h.has(m.name)).length===0){const m=["========== WARNING ==========","defineShortcutsSetup did not return any of the base shortcuts.","See https://sli.dev/custom/config-shortcuts.html for migration.",'If it is intentional, return at least one shortcut with one of the base names (e.g. name:"goto").'].join(`

`);alert(m),console.warn(m)}return d}const If=Qe(kt(U8),kt(P8),$8);function xb(e,n,s=!1){typeof e=="string"&&(e=Ff[e]);const o=Qe(e,If);let r=0,l;const a=()=>{if(clearTimeout(l),!o.value){r=0;return}s&&(l=setTimeout(a,Math.max(1e3-r*250,150)),r++),n()};return ge(o,a,{flush:"sync"})}function wb(e,n){return g_(e,s=>{If.value&&(s.repeat||n())})}function Ab(){const e=bb();new Map(e.map(s=>[s.key,s])).forEach(s=>{s.fn&&xb(s.key,s.fn,s.autoRepeat)}),wb("f",()=>Sf.toggle())}const Cb={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Bb=t("path",{fill:"currentColor",d:"M24 9.4L22.6 8L16 14.6L9.4 8L8 9.4l6.6 6.6L8 22.6L9.4 24l6.6-6.6l6.6 6.6l1.4-1.4l-6.6-6.6L24 9.4z"},null,-1),kb=[Bb];function Eb(e,n){return _(),F("svg",Cb,kb)}const Fb={name:"carbon-close",render:Eb};function Oi(e,n=""){var r,l;const s=["slidev-page",n],o=(l=(r=e==null?void 0:e.meta)==null?void 0:r.slide)==null?void 0:l.no;return o!=null&&s.push(`slidev-page-${o}`),s.filter(Boolean).join(" ")}const Sb=Ae({__name:"SlideContainer",props:{width:{type:Number},meta:{default:()=>({})},scale:{type:[Number,String]}},setup(e){const n=e;R(V);const s=Y(),o=z_(s),r=$(()=>n.width?n.width:o.width.value),l=$(()=>n.width?n.width/Mn:o.height.value);n.width&&ks(()=>{s.value&&(s.value.style.width=`${r.value}px`,s.value.style.height=`${l.value}px`)});const a=$(()=>r.value/l.value),i=$(()=>n.scale&&!xn.value?n.scale:a.value<Mn?r.value/Ln:l.value*Mn/Ln),c=$(()=>({height:`${ki}px`,width:`${Ln}px`,transform:`translate(-50%, -50%) scale(${i.value})`})),u=$(()=>({"select-none":!Se.selectable}));return Ft(Qd,i),(p,d)=>(_(),F("div",{id:"slide-container",ref_key:"root",ref:s,class:Re(u.value)},[t("div",{id:"slide-content",style:et(c.value)},[Ct(p.$slots,"default")],4),Ct(p.$slots,"controls")],2))}});const z=(e,n)=>{const s=e.__vccOpts||e;for(const[o,r]of n)s[o]=r;return s},Mf=z(Sb,[["__file","/home/ben/Workspace/demystifying-unicode/node_modules/@slidev/client/internals/SlideContainer.vue"]]),Ui=Ae({name:"SlideWrapper",props:{clicks:{type:[Number,String],default:0},clicksElements:{type:Array,default:()=>[]},clicksOrderMap:{type:Map,default:()=>new Map},clicksDisabled:{type:Boolean,default:!1},context:{type:String,default:"main"},is:{type:Object,default:void 0},route:{type:Object,default:void 0}},setup(e,{emit:n}){const s=sn(e,"clicks",n),o=sn(e,"clicksElements",n),r=sn(e,"clicksDisabled",n),l=sn(e,"clicksOrderMap",n);o.value.length=0,Ft(yg,e.route),Ft(mg,e.context),Ft(vo,s),Ft(bo,r),Ft(as,o),Ft(xa,l)},render(){var e,n;return this.$props.is?Xe(this.$props.is):(n=(e=this.$slots)==null?void 0:e.default)==null?void 0:n.call(e)}}),Db=["innerHTML"],Tb=Ae({__name:"DrawingPreview",props:{page:{type:Number,required:!0}},setup(e){return R(V),(n,s)=>T(zr)[n.page]?(_(),F("svg",{key:0,class:"w-full h-full absolute top-0 pointer-events-none",innerHTML:T(zr)[n.page]},null,8,Db)):me("v-if",!0)}}),Lf=z(Tb,[["__file","/home/ben/Workspace/demystifying-unicode/node_modules/@slidev/client/internals/DrawingPreview.vue"]]),$b=Object.freeze(Object.defineProperty({__proto__:null,default:Lf},Symbol.toStringTag,{value:"Module"})),Ob={class:"slides-overview bg-main !bg-opacity-75 p-16 overflow-y-auto"},Ub=["onClick"],jl=4*16*2,Uu=2*16,Pb=Ae({__name:"SlidesOverview",props:{modelValue:{type:Boolean,required:!0}},emits:[],setup(e,{emit:n}){const s=e;R(V);const o=sn(s,"modelValue",n);function r(){o.value=!1}function l(d){Vs(d),r()}function a(d){return d===Dt.value}const i=Ta.smaller("xs"),c=Ta.smaller("sm"),u=$(()=>i.value?xs.width.value-jl:c.value?(xs.width.value-jl-Uu)/2:300),p=$(()=>Math.floor((xs.width.value-jl)/(u.value+Uu)));return ks(()=>{Dt.value=He.value,$i.value=p.value}),(d,h)=>{const y=Fb;return _(),F(Fe,null,[wt(t("div",Ob,[t("div",{class:"grid gap-y-4 gap-x-8 w-full",style:et(`grid-template-columns: repeat(auto-fit,minmax(${u.value}px,1fr))`)},[(_(!0),F(Fe,null,Es(T(Ye),(m,b)=>(_(),F("div",{key:m.path,class:"relative"},[t("div",{class:Re(["inline-block border rounded border-opacity-50 overflow-hidden bg-main hover:border-$slidev-theme-primary",{"border-$slidev-theme-primary":a(b+1),"border-gray-400":!a(b+1)}]),style:et(T(Ei)),onClick:A=>l(+m.path)},[(_(),W(Mf,{key:m.path,width:u.value,"clicks-disabled":!0,class:"pointer-events-none"},{default:P(()=>[m!=null&&m.component?(_(),W(T(Ui),{key:0,is:m.component,"clicks-disabled":!0,class:Re(T(Oi)(m)),route:m,context:"overview"},null,8,["is","class","route"])):me("v-if",!0),M(Lf,{page:+m.path},null,8,["page"])]),_:2},1032,["width"]))],14,Ub),t("div",{class:"absolute top-0 opacity-50",style:et(`left: ${u.value+5}px`)},An(b+1),5)]))),128))],4)],512),[[Rd,T(o)]]),T(o)?(_(),F("button",{key:0,class:"fixed text-2xl top-4 right-4 slidev-icon-btn text-gray-400",onClick:r},[M(y)])):me("v-if",!0)],64)}}});const Ib=z(Pb,[["__file","/home/ben/Workspace/demystifying-unicode/node_modules/@slidev/client/internals/SlidesOverview.vue"]]),Mb="/demystifying-unicode/assets/logo-b72bde5d.png",Lb={key:0,class:"fixed top-0 bottom-0 left-0 right-0 grid z-20"},Rb=Ae({__name:"Modal",props:{modelValue:{default:!1},class:{default:""}},emits:["modelValue"],setup(e,{emit:n}){const s=e;R(V);const o=sn(s,"modelValue",n);function r(){o.value=!1}return(l,a)=>(_(),W(ud,null,[T(o)?(_(),F("div",Lb,[t("div",{bg:"black opacity-80",class:"absolute top-0 bottom-0 left-0 right-0 -z-1",onClick:a[0]||(a[0]=i=>r())}),t("div",{class:Re(["m-auto rounded-md bg-main shadow",s.class]),"dark:border":"~ main"},[Ct(l.$slots,"default")],2)])):me("v-if",!0)],1024))}}),Nb=z(Rb,[["__file","/home/ben/Workspace/demystifying-unicode/node_modules/@slidev/client/internals/Modal.vue"]]),qb={class:"slidev-info-dialog slidev-layout flex flex-col gap-4 text-base"},jb=["innerHTML"],Wb=t("a",{href:"https://github.com/slidevjs/slidev",target:"_blank",class:"!opacity-100 !border-none !text-current"},[t("div",{class:"flex gap-1 children:my-auto"},[t("div",{class:"opacity-50 text-sm mr-2"},"Powered by"),t("img",{class:"w-5 h-5",src:Mb,alt:"Slidev"}),t("div",{style:{color:"#2082A6"}},[t("b",null,"Sli"),f("dev ")])])],-1),Hb=Ae({__name:"InfoDialog",props:{modelValue:{default:!1}},emits:["modelValue"],setup(e,{emit:n}){const s=e;R(V);const o=sn(s,"modelValue",n),r=$(()=>typeof Se.info=="string");return(l,a)=>(_(),W(Nb,{modelValue:T(o),"onUpdate:modelValue":a[0]||(a[0]=i=>De(o)?o.value=i:null),class:"px-6 py-4"},{default:P(()=>[t("div",qb,[r.value?(_(),F("div",{key:0,class:"mb-4",innerHTML:T(Se).info},null,8,jb)):me("v-if",!0),Wb])]),_:1},8,["modelValue"]))}});const Vb=z(Hb,[["__file","/home/ben/Workspace/demystifying-unicode/node_modules/@slidev/client/internals/InfoDialog.vue"]]);function Cn(e){return Array.isArray?Array.isArray(e):qf(e)==="[object Array]"}const zb=1/0;function Kb(e){if(typeof e=="string")return e;let n=e+"";return n=="0"&&1/e==-zb?"-0":n}function Gb(e){return e==null?"":Kb(e)}function rn(e){return typeof e=="string"}function Rf(e){return typeof e=="number"}function Yb(e){return e===!0||e===!1||Qb(e)&&qf(e)=="[object Boolean]"}function Nf(e){return typeof e=="object"}function Qb(e){return Nf(e)&&e!==null}function St(e){return e!=null}function Wl(e){return!e.trim().length}function qf(e){return e==null?e===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}const Zb="Incorrect 'index' type",Jb=e=>`Invalid value for key ${e}`,Xb=e=>`Pattern length exceeds max of ${e}.`,ex=e=>`Missing ${e} property in key`,tx=e=>`Property 'weight' in key '${e}' must be a positive integer`,Pu=Object.prototype.hasOwnProperty;class nx{constructor(n){this._keys=[],this._keyMap={};let s=0;n.forEach(o=>{let r=jf(o);s+=r.weight,this._keys.push(r),this._keyMap[r.id]=r,s+=r.weight}),this._keys.forEach(o=>{o.weight/=s})}get(n){return this._keyMap[n]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function jf(e){let n=null,s=null,o=null,r=1,l=null;if(rn(e)||Cn(e))o=e,n=Iu(e),s=Ia(e);else{if(!Pu.call(e,"name"))throw new Error(ex("name"));const a=e.name;if(o=a,Pu.call(e,"weight")&&(r=e.weight,r<=0))throw new Error(tx(a));n=Iu(a),s=Ia(a),l=e.getFn}return{path:n,id:s,weight:r,src:o,getFn:l}}function Iu(e){return Cn(e)?e:e.split(".")}function Ia(e){return Cn(e)?e.join("."):e}function sx(e,n){let s=[],o=!1;const r=(l,a,i)=>{if(St(l))if(!a[i])s.push(l);else{let c=a[i];const u=l[c];if(!St(u))return;if(i===a.length-1&&(rn(u)||Rf(u)||Yb(u)))s.push(Gb(u));else if(Cn(u)){o=!0;for(let p=0,d=u.length;p<d;p+=1)r(u[p],a,i+1)}else a.length&&r(u,a,i+1)}};return r(e,rn(n)?n.split("."):n,0),o?s:s[0]}const ox={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},rx={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(e,n)=>e.score===n.score?e.idx<n.idx?-1:1:e.score<n.score?-1:1},lx={location:0,threshold:.6,distance:100},ax={useExtendedSearch:!1,getFn:sx,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var de={...rx,...ox,...lx,...ax};const ix=/[^ ]+/g;function cx(e=1,n=3){const s=new Map,o=Math.pow(10,n);return{get(r){const l=r.match(ix).length;if(s.has(l))return s.get(l);const a=1/Math.pow(l,.5*e),i=parseFloat(Math.round(a*o)/o);return s.set(l,i),i},clear(){s.clear()}}}class Pi{constructor({getFn:n=de.getFn,fieldNormWeight:s=de.fieldNormWeight}={}){this.norm=cx(s,3),this.getFn=n,this.isCreated=!1,this.setIndexRecords()}setSources(n=[]){this.docs=n}setIndexRecords(n=[]){this.records=n}setKeys(n=[]){this.keys=n,this._keysMap={},n.forEach((s,o)=>{this._keysMap[s.id]=o})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,rn(this.docs[0])?this.docs.forEach((n,s)=>{this._addString(n,s)}):this.docs.forEach((n,s)=>{this._addObject(n,s)}),this.norm.clear())}add(n){const s=this.size();rn(n)?this._addString(n,s):this._addObject(n,s)}removeAt(n){this.records.splice(n,1);for(let s=n,o=this.size();s<o;s+=1)this.records[s].i-=1}getValueForItemAtKeyId(n,s){return n[this._keysMap[s]]}size(){return this.records.length}_addString(n,s){if(!St(n)||Wl(n))return;let o={v:n,i:s,n:this.norm.get(n)};this.records.push(o)}_addObject(n,s){let o={i:s,$:{}};this.keys.forEach((r,l)=>{let a=r.getFn?r.getFn(n):this.getFn(n,r.path);if(St(a)){if(Cn(a)){let i=[];const c=[{nestedArrIndex:-1,value:a}];for(;c.length;){const{nestedArrIndex:u,value:p}=c.pop();if(St(p))if(rn(p)&&!Wl(p)){let d={v:p,i:u,n:this.norm.get(p)};i.push(d)}else Cn(p)&&p.forEach((d,h)=>{c.push({nestedArrIndex:h,value:d})})}o.$[l]=i}else if(rn(a)&&!Wl(a)){let i={v:a,n:this.norm.get(a)};o.$[l]=i}}}),this.records.push(o)}toJSON(){return{keys:this.keys,records:this.records}}}function Wf(e,n,{getFn:s=de.getFn,fieldNormWeight:o=de.fieldNormWeight}={}){const r=new Pi({getFn:s,fieldNormWeight:o});return r.setKeys(e.map(jf)),r.setSources(n),r.create(),r}function ux(e,{getFn:n=de.getFn,fieldNormWeight:s=de.fieldNormWeight}={}){const{keys:o,records:r}=e,l=new Pi({getFn:n,fieldNormWeight:s});return l.setKeys(o),l.setIndexRecords(r),l}function mr(e,{errors:n=0,currentLocation:s=0,expectedLocation:o=0,distance:r=de.distance,ignoreLocation:l=de.ignoreLocation}={}){const a=n/e.length;if(l)return a;const i=Math.abs(o-s);return r?a+i/r:i?1:a}function px(e=[],n=de.minMatchCharLength){let s=[],o=-1,r=-1,l=0;for(let a=e.length;l<a;l+=1){let i=e[l];i&&o===-1?o=l:!i&&o!==-1&&(r=l-1,r-o+1>=n&&s.push([o,r]),o=-1)}return e[l-1]&&l-o>=n&&s.push([o,l-1]),s}const cs=32;function dx(e,n,s,{location:o=de.location,distance:r=de.distance,threshold:l=de.threshold,findAllMatches:a=de.findAllMatches,minMatchCharLength:i=de.minMatchCharLength,includeMatches:c=de.includeMatches,ignoreLocation:u=de.ignoreLocation}={}){if(n.length>cs)throw new Error(Xb(cs));const p=n.length,d=e.length,h=Math.max(0,Math.min(o,d));let y=l,m=h;const b=i>1||c,A=b?Array(d):[];let w;for(;(w=e.indexOf(n,m))>-1;){let L=mr(n,{currentLocation:w,expectedLocation:h,distance:r,ignoreLocation:u});if(y=Math.min(L,y),m=w+p,b){let O=0;for(;O<p;)A[w+O]=1,O+=1}}m=-1;let C=[],x=1,B=p+d;const k=1<<p-1;for(let L=0;L<p;L+=1){let O=0,j=B;for(;O<j;)mr(n,{errors:L,currentLocation:h+j,expectedLocation:h,distance:r,ignoreLocation:u})<=y?O=j:B=j,j=Math.floor((B-O)/2+O);B=j;let ne=Math.max(1,h-j+1),ue=a?d:Math.min(h+j,d)+p,Q=Array(ue+2);Q[ue+1]=(1<<L)-1;for(let _e=ue;_e>=ne;_e-=1){let be=_e-1,Pe=s[e.charAt(be)];if(b&&(A[be]=+!!Pe),Q[_e]=(Q[_e+1]<<1|1)&Pe,L&&(Q[_e]|=(C[_e+1]|C[_e])<<1|1|C[_e+1]),Q[_e]&k&&(x=mr(n,{errors:L,currentLocation:be,expectedLocation:h,distance:r,ignoreLocation:u}),x<=y)){if(y=x,m=be,m<=h)break;ne=Math.max(1,2*h-m)}}if(mr(n,{errors:L+1,currentLocation:h,expectedLocation:h,distance:r,ignoreLocation:u})>y)break;C=Q}const S={isMatch:m>=0,score:Math.max(.001,x)};if(b){const L=px(A,i);L.length?c&&(S.indices=L):S.isMatch=!1}return S}function fx(e){let n={};for(let s=0,o=e.length;s<o;s+=1){const r=e.charAt(s);n[r]=(n[r]||0)|1<<o-s-1}return n}class Hf{constructor(n,{location:s=de.location,threshold:o=de.threshold,distance:r=de.distance,includeMatches:l=de.includeMatches,findAllMatches:a=de.findAllMatches,minMatchCharLength:i=de.minMatchCharLength,isCaseSensitive:c=de.isCaseSensitive,ignoreLocation:u=de.ignoreLocation}={}){if(this.options={location:s,threshold:o,distance:r,includeMatches:l,findAllMatches:a,minMatchCharLength:i,isCaseSensitive:c,ignoreLocation:u},this.pattern=c?n:n.toLowerCase(),this.chunks=[],!this.pattern.length)return;const p=(h,y)=>{this.chunks.push({pattern:h,alphabet:fx(h),startIndex:y})},d=this.pattern.length;if(d>cs){let h=0;const y=d%cs,m=d-y;for(;h<m;)p(this.pattern.substr(h,cs),h),h+=cs;if(y){const b=d-cs;p(this.pattern.substr(b),b)}}else p(this.pattern,0)}searchIn(n){const{isCaseSensitive:s,includeMatches:o}=this.options;if(s||(n=n.toLowerCase()),this.pattern===n){let m={isMatch:!0,score:0};return o&&(m.indices=[[0,n.length-1]]),m}const{location:r,distance:l,threshold:a,findAllMatches:i,minMatchCharLength:c,ignoreLocation:u}=this.options;let p=[],d=0,h=!1;this.chunks.forEach(({pattern:m,alphabet:b,startIndex:A})=>{const{isMatch:w,score:C,indices:x}=dx(n,m,b,{location:r+A,distance:l,threshold:a,findAllMatches:i,minMatchCharLength:c,includeMatches:o,ignoreLocation:u});w&&(h=!0),d+=C,w&&x&&(p=[...p,...x])});let y={isMatch:h,score:h?d/this.chunks.length:1};return h&&o&&(y.indices=p),y}}class Yn{constructor(n){this.pattern=n}static isMultiMatch(n){return Mu(n,this.multiRegex)}static isSingleMatch(n){return Mu(n,this.singleRegex)}search(){}}function Mu(e,n){const s=e.match(n);return s?s[1]:null}class hx extends Yn{constructor(n){super(n)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(n){const s=n===this.pattern;return{isMatch:s,score:s?0:1,indices:[0,this.pattern.length-1]}}}class yx extends Yn{constructor(n){super(n)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(n){const o=n.indexOf(this.pattern)===-1;return{isMatch:o,score:o?0:1,indices:[0,n.length-1]}}}class mx extends Yn{constructor(n){super(n)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(n){const s=n.startsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[0,this.pattern.length-1]}}}class gx extends Yn{constructor(n){super(n)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(n){const s=!n.startsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[0,n.length-1]}}}class _x extends Yn{constructor(n){super(n)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(n){const s=n.endsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[n.length-this.pattern.length,n.length-1]}}}class vx extends Yn{constructor(n){super(n)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(n){const s=!n.endsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[0,n.length-1]}}}class Vf extends Yn{constructor(n,{location:s=de.location,threshold:o=de.threshold,distance:r=de.distance,includeMatches:l=de.includeMatches,findAllMatches:a=de.findAllMatches,minMatchCharLength:i=de.minMatchCharLength,isCaseSensitive:c=de.isCaseSensitive,ignoreLocation:u=de.ignoreLocation}={}){super(n),this._bitapSearch=new Hf(n,{location:s,threshold:o,distance:r,includeMatches:l,findAllMatches:a,minMatchCharLength:i,isCaseSensitive:c,ignoreLocation:u})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(n){return this._bitapSearch.searchIn(n)}}class zf extends Yn{constructor(n){super(n)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(n){let s=0,o;const r=[],l=this.pattern.length;for(;(o=n.indexOf(this.pattern,s))>-1;)s=o+l,r.push([o,s-1]);const a=!!r.length;return{isMatch:a,score:a?0:1,indices:r}}}const Ma=[hx,zf,mx,gx,vx,_x,yx,Vf],Lu=Ma.length,bx=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,xx="|";function wx(e,n={}){return e.split(xx).map(s=>{let o=s.trim().split(bx).filter(l=>l&&!!l.trim()),r=[];for(let l=0,a=o.length;l<a;l+=1){const i=o[l];let c=!1,u=-1;for(;!c&&++u<Lu;){const p=Ma[u];let d=p.isMultiMatch(i);d&&(r.push(new p(d,n)),c=!0)}if(!c)for(u=-1;++u<Lu;){const p=Ma[u];let d=p.isSingleMatch(i);if(d){r.push(new p(d,n));break}}}return r})}const Ax=new Set([Vf.type,zf.type]);class Cx{constructor(n,{isCaseSensitive:s=de.isCaseSensitive,includeMatches:o=de.includeMatches,minMatchCharLength:r=de.minMatchCharLength,ignoreLocation:l=de.ignoreLocation,findAllMatches:a=de.findAllMatches,location:i=de.location,threshold:c=de.threshold,distance:u=de.distance}={}){this.query=null,this.options={isCaseSensitive:s,includeMatches:o,minMatchCharLength:r,findAllMatches:a,ignoreLocation:l,location:i,threshold:c,distance:u},this.pattern=s?n:n.toLowerCase(),this.query=wx(this.pattern,this.options)}static condition(n,s){return s.useExtendedSearch}searchIn(n){const s=this.query;if(!s)return{isMatch:!1,score:1};const{includeMatches:o,isCaseSensitive:r}=this.options;n=r?n:n.toLowerCase();let l=0,a=[],i=0;for(let c=0,u=s.length;c<u;c+=1){const p=s[c];a.length=0,l=0;for(let d=0,h=p.length;d<h;d+=1){const y=p[d],{isMatch:m,indices:b,score:A}=y.search(n);if(m){if(l+=1,i+=A,o){const w=y.constructor.type;Ax.has(w)?a=[...a,...b]:a.push(b)}}else{i=0,l=0,a.length=0;break}}if(l){let d={isMatch:!0,score:i/l};return o&&(d.indices=a),d}}return{isMatch:!1,score:1}}}const La=[];function Bx(...e){La.push(...e)}function Ra(e,n){for(let s=0,o=La.length;s<o;s+=1){let r=La[s];if(r.condition(e,n))return new r(e,n)}return new Hf(e,n)}const Qr={AND:"$and",OR:"$or"},Na={PATH:"$path",PATTERN:"$val"},qa=e=>!!(e[Qr.AND]||e[Qr.OR]),kx=e=>!!e[Na.PATH],Ex=e=>!Cn(e)&&Nf(e)&&!qa(e),Ru=e=>({[Qr.AND]:Object.keys(e).map(n=>({[n]:e[n]}))});function Kf(e,n,{auto:s=!0}={}){const o=r=>{let l=Object.keys(r);const a=kx(r);if(!a&&l.length>1&&!qa(r))return o(Ru(r));if(Ex(r)){const c=a?r[Na.PATH]:l[0],u=a?r[Na.PATTERN]:r[c];if(!rn(u))throw new Error(Jb(c));const p={keyId:Ia(c),pattern:u};return s&&(p.searcher=Ra(u,n)),p}let i={children:[],operator:l[0]};return l.forEach(c=>{const u=r[c];Cn(u)&&u.forEach(p=>{i.children.push(o(p))})}),i};return qa(e)||(e=Ru(e)),o(e)}function Fx(e,{ignoreFieldNorm:n=de.ignoreFieldNorm}){e.forEach(s=>{let o=1;s.matches.forEach(({key:r,norm:l,score:a})=>{const i=r?r.weight:null;o*=Math.pow(a===0&&i?Number.EPSILON:a,(i||1)*(n?1:l))}),s.score=o})}function Sx(e,n){const s=e.matches;n.matches=[],St(s)&&s.forEach(o=>{if(!St(o.indices)||!o.indices.length)return;const{indices:r,value:l}=o;let a={indices:r,value:l};o.key&&(a.key=o.key.src),o.idx>-1&&(a.refIndex=o.idx),n.matches.push(a)})}function Dx(e,n){n.score=e.score}function Tx(e,n,{includeMatches:s=de.includeMatches,includeScore:o=de.includeScore}={}){const r=[];return s&&r.push(Sx),o&&r.push(Dx),e.map(l=>{const{idx:a}=l,i={item:n[a],refIndex:a};return r.length&&r.forEach(c=>{c(l,i)}),i})}class Ks{constructor(n,s={},o){this.options={...de,...s},this.options.useExtendedSearch,this._keyStore=new nx(this.options.keys),this.setCollection(n,o)}setCollection(n,s){if(this._docs=n,s&&!(s instanceof Pi))throw new Error(Zb);this._myIndex=s||Wf(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(n){St(n)&&(this._docs.push(n),this._myIndex.add(n))}remove(n=()=>!1){const s=[];for(let o=0,r=this._docs.length;o<r;o+=1){const l=this._docs[o];n(l,o)&&(this.removeAt(o),o-=1,r-=1,s.push(l))}return s}removeAt(n){this._docs.splice(n,1),this._myIndex.removeAt(n)}getIndex(){return this._myIndex}search(n,{limit:s=-1}={}){const{includeMatches:o,includeScore:r,shouldSort:l,sortFn:a,ignoreFieldNorm:i}=this.options;let c=rn(n)?rn(this._docs[0])?this._searchStringList(n):this._searchObjectList(n):this._searchLogical(n);return Fx(c,{ignoreFieldNorm:i}),l&&c.sort(a),Rf(s)&&s>-1&&(c=c.slice(0,s)),Tx(c,this._docs,{includeMatches:o,includeScore:r})}_searchStringList(n){const s=Ra(n,this.options),{records:o}=this._myIndex,r=[];return o.forEach(({v:l,i:a,n:i})=>{if(!St(l))return;const{isMatch:c,score:u,indices:p}=s.searchIn(l);c&&r.push({item:l,idx:a,matches:[{score:u,value:l,norm:i,indices:p}]})}),r}_searchLogical(n){const s=Kf(n,this.options),o=(i,c,u)=>{if(!i.children){const{keyId:d,searcher:h}=i,y=this._findMatches({key:this._keyStore.get(d),value:this._myIndex.getValueForItemAtKeyId(c,d),searcher:h});return y&&y.length?[{idx:u,item:c,matches:y}]:[]}const p=[];for(let d=0,h=i.children.length;d<h;d+=1){const y=i.children[d],m=o(y,c,u);if(m.length)p.push(...m);else if(i.operator===Qr.AND)return[]}return p},r=this._myIndex.records,l={},a=[];return r.forEach(({$:i,i:c})=>{if(St(i)){let u=o(s,i,c);u.length&&(l[c]||(l[c]={idx:c,item:i,matches:[]},a.push(l[c])),u.forEach(({matches:p})=>{l[c].matches.push(...p)}))}}),a}_searchObjectList(n){const s=Ra(n,this.options),{keys:o,records:r}=this._myIndex,l=[];return r.forEach(({$:a,i})=>{if(!St(a))return;let c=[];o.forEach((u,p)=>{c.push(...this._findMatches({key:u,value:a[p],searcher:s}))}),c.length&&l.push({idx:i,item:a,matches:c})}),l}_findMatches({key:n,value:s,searcher:o}){if(!St(s))return[];let r=[];if(Cn(s))s.forEach(({v:l,i:a,n:i})=>{if(!St(l))return;const{isMatch:c,score:u,indices:p}=o.searchIn(l);c&&r.push({score:u,key:n,value:l,idx:a,norm:i,indices:p})});else{const{v:l,n:a}=s,{isMatch:i,score:c,indices:u}=o.searchIn(l);i&&r.push({score:c,key:n,value:l,norm:a,indices:u})}return r}}Ks.version="6.6.2";Ks.createIndex=Wf;Ks.parseIndex=ux;Ks.config=de;Ks.parseQuery=Kf;Bx(Cx);const $x={class:"bg-main transform",shadow:"~",p:"x-4 y-2",border:"~ transparent rounded dark:main"},Ox=["value","disabled","onKeydown"],Ux=["border","onClick"],Px={"w-4":"","text-right":"",op50:"","text-sm":""},Ix=Ae({__name:"Goto",setup(e){R(V);const n=Y(),s=Y(),o=Y(),r=Y(),l=Y(""),a=Y(0);function i(x){return x!=null}const c=$(()=>new Ks(Ye.map(x=>{var B;return(B=x.meta)==null?void 0:B.slide}).filter(i),{keys:["no","title"],threshold:.3,shouldSort:!0,minMatchCharLength:1})),u=$(()=>l.value.startsWith("/")?l.value.substring(1):l.value),p=$(()=>c.value.search(u.value).map(x=>x.item)),d=$(()=>!!p.value.length);function h(){if(d.value){const x=p.value.at(a.value||0);x&&Vs(x.no)}y()}function y(){l.value="",Is.value=!1}function m(x){x.preventDefault(),a.value++,a.value>=p.value.length&&(a.value=0),A()}function b(x){x.preventDefault(),a.value--,a.value<=-2&&(a.value=p.value.length-1),A()}function A(){var B;const x=(B=r.value)==null?void 0:B[a.value];x&&o.value&&(x.offsetTop+x.offsetHeight>o.value.offsetHeight+o.value.scrollTop?o.value.scrollTo({behavior:"smooth",top:x.offsetTop+x.offsetHeight-o.value.offsetHeight+1}):x.offsetTop<o.value.scrollTop&&o.value.scrollTo({behavior:"smooth",top:x.offsetTop}))}function w(x){a.value=0,l.value=x.target.value}function C(x){Vs(x),y()}return ge(Is,async x=>{var B;x?(l.value="",a.value=0,setTimeout(()=>{var k;return(k=s.value)==null?void 0:k.focus()},0)):(B=s.value)==null||B.blur()}),ge(Nn,()=>{var x;(x=n.value)!=null&&x.contains(Nn.value)||y()}),(x,B)=>(_(),F("div",{id:"slidev-goto-dialog",ref_key:"container",ref:n,class:Re(["fixed right-5 transition-all",T(Is)?"top-5":"-top-20"]),"w-90":"","max-w-90":"","min-w-90":""},[t("div",$x,[t("input",{id:"slidev-goto-input",ref_key:"input",ref:s,value:l.value,type:"text",disabled:!T(Is),class:Re(["outline-none bg-transparent",{"text-red-400":!d.value&&l.value}]),placeholder:"Goto...",onKeydown:[cr(h,["enter"]),cr(y,["escape"]),cr(m,["down"]),cr(b,["up"])],onInput:w},null,42,Ox)]),p.value.length>0?(_(),F("ul",{key:0,ref_key:"list",ref:o,class:"autocomplete-list",shadow:"~",border:"~ transparent rounded dark:main"},[(_(!0),F(Fe,null,Es(p.value,(k,S)=>(_(),F("li",{ref_for:!0,ref_key:"items",ref:r,key:k.id,role:"button",tabindex:"0",p:"x-4 y-2","cursor-pointer":"",hover:"op100",flex:"~ gap-2","w-90":"","items-center":"",border:S===0?"":"t main",class:Re(a.value===S?"bg-active op100":"op80"),onClick:m1(L=>C(k.no),["stop"])},[t("div",Px,An(k.no),1),f(" "+An(k.title),1)],10,Ux))),128))],512)):me("v-if",!0)],2))}});const Mx=z(Ix,[["__scopeId","data-v-f5ee02a7"],["__file","/home/ben/Workspace/demystifying-unicode/node_modules/@slidev/client/internals/Goto.vue"]]),Lx=Ae({__name:"Controls",setup(e){R(V);const n=cn(),s=cn();return(o,r)=>(_(),F(Fe,null,[M(Ib,{modelValue:T(ft),"onUpdate:modelValue":r[0]||(r[0]=l=>De(ft)?ft.value=l:null)},null,8,["modelValue"]),M(Mx),n.value?(_(),W(T(n),{key:0})):me("v-if",!0),s.value?(_(),W(T(s),{key:1,modelValue:T(Rl),"onUpdate:modelValue":r[1]||(r[1]=l=>De(Rl)?Rl.value=l:null)},null,8,["modelValue"])):me("v-if",!0),T(Se).info?(_(),W(Vb,{key:2,modelValue:T(Ao),"onUpdate:modelValue":r[2]||(r[2]=l=>De(Ao)?Ao.value=l:null)},null,8,["modelValue"])):me("v-if",!0)],64))}}),Rx=z(Lx,[["__file","/home/ben/Workspace/demystifying-unicode/node_modules/@slidev/client/internals/Controls.vue"]]),Nx={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},qx=t("path",{fill:"currentColor",d:"M30 8h-4.1c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2h14.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30V8zm-9 4c-1.7 0-3-1.3-3-3s1.3-3 3-3s3 1.3 3 3s-1.3 3-3 3zM2 24h4.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30v-2H15.9c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2zm9-4c1.7 0 3 1.3 3 3s-1.3 3-3 3s-3-1.3-3-3s1.3-3 3-3z"},null,-1),jx=[qx];function Wx(e,n){return _(),F("svg",Nx,jx)}const Hx={name:"carbon-settings-adjust",render:Wx},Vx={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},zx=t("path",{fill:"currentColor",d:"M17 22v-8h-4v2h2v6h-3v2h8v-2h-3zM16 8a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 16 8z"},null,-1),Kx=t("path",{fill:"currentColor",d:"M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z"},null,-1),Gx=[zx,Kx];function Yx(e,n){return _(),F("svg",Vx,Gx)}const Qx={name:"carbon-information",render:Yx},Zx={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Jx=t("path",{fill:"currentColor",d:"M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10l10-10z"},null,-1),Xx=[Jx];function e5(e,n){return _(),F("svg",Zx,Xx)}const t5={name:"carbon-download",render:e5},n5={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},s5=t("path",{fill:"currentColor",d:"M29.415 19L27.7 17.285A2.97 2.97 0 0 0 28 16a3 3 0 1 0-3 3a2.97 2.97 0 0 0 1.286-.3L28 20.414V28h-6v-3a7.008 7.008 0 0 0-7-7H9a7.008 7.008 0 0 0-7 7v5h28v-9.586A1.988 1.988 0 0 0 29.415 19ZM4 25a5.006 5.006 0 0 1 5-5h6a5.006 5.006 0 0 1 5 5v3H4Z"},null,-1),o5=t("path",{fill:"currentColor",d:"M12 4a5 5 0 1 1-5 5a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7a7 7 0 0 0-7-7Z"},null,-1),r5=[s5,o5];function l5(e,n){return _(),F("svg",n5,r5)}const a5={name:"carbon-user-speaker",render:l5},i5={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},c5=t("path",{fill:"currentColor",d:"M15 10h2v8h-2zm5 4h2v4h-2zm-10-2h2v6h-2z"},null,-1),u5=t("path",{fill:"currentColor",d:"M25 4h-8V2h-2v2H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8v6h-4v2h10v-2h-4v-6h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 16H7V6h18Z"},null,-1),p5=[c5,u5];function d5(e,n){return _(),F("svg",i5,p5)}const f5={name:"carbon-presentation-file",render:d5},h5={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},y5=t("path",{fill:"currentColor",d:"M27.307 6.107L30 3.414L28.586 2l-2.693 2.693L24.8 3.6a1.933 1.933 0 0 0-2.8 0l-18 18V28h6.4l18-18a1.933 1.933 0 0 0 0-2.8ZM9.6 26H6v-3.6L23.4 5L27 8.6ZM9 11.586L16.586 4L18 5.414L10.414 13z"},null,-1),m5=[y5];function g5(e,n){return _(),F("svg",h5,m5)}const _5={name:"carbon-pen",render:g5},v5={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},b5=t("g",{fill:"currentColor"},[t("path",{d:"M213.66 201L201 213.66a8 8 0 0 1-11.31 0L140 164a8 8 0 0 0-13 2.46l-19.46 44.77a8 8 0 0 1-14.85-.71L40.41 50.44a8 8 0 0 1 10-10l160.1 52.24a8 8 0 0 1 .71 14.85L166.45 127a8 8 0 0 0-2.45 13l49.67 49.67a8 8 0 0 1-.01 11.33Z",opacity:".2"}),t("path",{d:"m169.64 134.33l44.77-19.46a16 16 0 0 0-1.41-29.8L52.92 32.8A16 16 0 0 0 32.8 52.92L85.07 213a15.83 15.83 0 0 0 14.41 11h.78a15.83 15.83 0 0 0 14.61-9.59l19.46-44.77L184 219.31a16 16 0 0 0 22.63 0l12.68-12.68a16 16 0 0 0 0-22.63Zm-69.48 73.76l.06-.05Zm95.15-.09l-49.67-49.67a16 16 0 0 0-26 4.94l-19.42 44.65L48 48l159.87 52.21l-44.64 19.41a16 16 0 0 0-4.94 26L208 195.31Z"})],-1),x5=[b5];function w5(e,n){return _(),F("svg",v5,x5)}const A5={name:"ph-cursor-duotone",render:w5},C5={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},B5=t("path",{fill:"currentColor",d:"M219.31 192a16 16 0 0 1 0 22.63l-4.68 4.68a16 16 0 0 1-22.63 0l-55.25-55.24l-21.88 50.34a15.84 15.84 0 0 1-14.61 9.59h-.78a15.82 15.82 0 0 1-14.41-11L32.8 52.92A15.95 15.95 0 0 1 52.92 32.8L213 85.07a16 16 0 0 1 1.41 29.8l-50.34 21.88Z"},null,-1),k5=[B5];function E5(e,n){return _(),F("svg",C5,k5)}const Gf={name:"ph-cursor-fill",render:E5},F5={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},S5=t("path",{fill:"currentColor",d:"M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6ZM5.394 6.813L6.81 5.399l3.505 3.506L8.9 10.319zM2 15.005h5v2H2zm3.394 10.193L8.9 21.692l1.414 1.414l-3.505 3.506zM15 25.005h2v5h-2zm6.687-1.9l1.414-1.414l3.506 3.506l-1.414 1.414zm3.313-8.1h5v2h-5zm-3.313-6.101l3.506-3.506l1.414 1.414l-3.506 3.506zM15 2.005h2v5h-2z"},null,-1),D5=[S5];function T5(e,n){return _(),F("svg",F5,D5)}const $5={name:"carbon-sun",render:T5},O5={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},U5=t("path",{fill:"currentColor",d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3Z"},null,-1),P5=[U5];function I5(e,n){return _(),F("svg",O5,P5)}const M5={name:"carbon-moon",render:I5},L5={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},R5=t("path",{fill:"currentColor",d:"M8 4v4H4V4Zm2-2H2v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8ZM8 14v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8ZM8 24v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Z"},null,-1),N5=[R5];function q5(e,n){return _(),F("svg",L5,N5)}const j5={name:"carbon-apps",render:q5},W5={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},H5=t("path",{fill:"currentColor",d:"m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10L18 6z"},null,-1),V5=[H5];function z5(e,n){return _(),F("svg",W5,V5)}const K5={name:"carbon-arrow-right",render:z5},G5={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Y5=t("path",{fill:"currentColor",d:"m14 26l1.41-1.41L7.83 17H28v-2H7.83l7.58-7.59L14 6L4 16l10 10z"},null,-1),Q5=[Y5];function Z5(e,n){return _(),F("svg",G5,Q5)}const J5={name:"carbon-arrow-left",render:Z5},X5={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},e3=t("path",{fill:"currentColor",d:"M20 2v2h6.586L18 12.582L19.414 14L28 5.414V12h2V2H20zm-6 17.416L12.592 18L4 26.586V20H2v10h10v-2H5.414L14 19.416z"},null,-1),t3=[e3];function n3(e,n){return _(),F("svg",X5,t3)}const s3={name:"carbon-maximize",render:n3},o3={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},r3=t("path",{fill:"currentColor",d:"M4 18v2h6.586L2 28.582L3.414 30L12 21.414V28h2V18H4zM30 3.416L28.592 2L20 10.586V4h-2v10h10v-2h-6.586L30 3.416z"},null,-1),l3=[r3];function a3(e,n){return _(),F("svg",o3,l3)}const i3={name:"carbon-minimize",render:a3},c3={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},u3=t("path",{fill:"currentColor",d:"m13 24l-9-9l1.414-1.414L13 21.171L26.586 7.586L28 9L13 24z"},null,-1),p3=[u3];function d3(e,n){return _(),F("svg",c3,p3)}const f3={name:"carbon-checkmark",render:d3},h3={class:"select-list"},y3={class:"title"},m3={class:"items"},g3=["onClick"],_3=Ae({__name:"SelectList",props:{modelValue:{type:[Object,String,Number]},title:{type:String},items:{type:Array}},setup(e,{emit:n}){const s=e;R(V);const o=sn(s,"modelValue",n,{passive:!0});return(r,l)=>{const a=f3;return _(),F("div",h3,[t("div",y3,An(e.title),1),t("div",m3,[(_(!0),F(Fe,null,Es(e.items,i=>(_(),F("div",{key:i.value,class:Re(["item",{active:T(o)===i.value}]),onClick:()=>{var c;o.value=i.value,(c=i.onClick)==null||c.call(i)}},[M(a,{class:Re(["text-green-500",{"opacity-0":T(o)!==i.value}])},null,8,["class"]),f(" "+An(i.display||i.value),1)],10,g3))),128))])])}}});const v3=z(_3,[["__scopeId","data-v-3f89fa11"],["__file","/home/ben/Workspace/demystifying-unicode/node_modules/@slidev/client/internals/SelectList.vue"]]),b3={class:"text-sm"},x3=Ae({__name:"Settings",setup(e){R(V);const n=[{display:"Fit",value:0},{display:"1:1",value:1}];return(s,o)=>(_(),F("div",b3,[M(v3,{modelValue:T(Br),"onUpdate:modelValue":o[0]||(o[0]=r=>De(Br)?Br.value=r:null),title:"Scale",items:n},null,8,["modelValue"])]))}}),w3=z(x3,[["__file","/home/ben/Workspace/demystifying-unicode/node_modules/@slidev/client/internals/Settings.vue"]]),A3={key:0,class:"rounded-md bg-main shadow absolute bottom-10 left-0 z-20","dark:border":"~ main"},C3=Ae({__name:"MenuButton",props:{modelValue:{default:!1},disabled:{default:!1}},setup(e,{emit:n}){const s=e;R(V);const o=sn(s,"modelValue",n,{passive:!0}),r=Y();return y_(r,()=>{o.value=!1}),(l,a)=>(_(),F("div",{ref_key:"el",ref:r,class:"flex relative"},[t("button",{class:Re({disabled:e.disabled}),onClick:a[0]||(a[0]=i=>o.value=!T(o))},[Ct(l.$slots,"button",{class:Re({disabled:e.disabled})})],2),(_(),W(ud,null,[T(o)?(_(),F("div",A3,[Ct(l.$slots,"menu")])):me("v-if",!0)],1024))],512))}}),B3=z(C3,[["__file","/home/ben/Workspace/demystifying-unicode/node_modules/@slidev/client/internals/MenuButton.vue"]]),k3={class:"w-1px opacity-10 bg-current m-1 lg:m-2"},E3={__name:"VerticalDivider",setup(e){return R(V),(n,s)=>(_(),F("div",k3))}},gr=z(E3,[["__file","/home/ben/Workspace/demystifying-unicode/node_modules/@slidev/client/internals/VerticalDivider.vue"]]),F3={render(){return[]}},S3={class:"slidev-icon-btn"},D3={class:"h-40px flex",p:"l-1 t-0.5 r-2",text:"sm leading-2"},T3={class:"my-auto"},$3={class:"opacity-50"},O3=Ae({__name:"NavControls",props:{persist:{default:!1}},setup(e){const n=e;R(V);const s=Ta.smaller("md"),{isFullscreen:o,toggle:r}=Sf,l=$(()=>Wa.value?`?password=${Wa.value}`:""),a=$(()=>`/presenter/${He.value}${l.value}`),i=$(()=>`/${He.value}${l.value}`),c=Y();function u(){c.value&&Nn.value&&c.value.contains(Nn.value)&&Nn.value.blur()}const p=$(()=>n.persist?"text-$slidev-controls-foreground bg-transparent":"rounded-md bg-main shadow dark:border dark:border-gray-400 dark:border-opacity-10"),d=cn(),h=cn();return Rn(()=>import("./DrawingControls-aed2aeec.js"),[]).then(y=>h.value=y.default),(y,m)=>{const b=i3,A=s3,w=J5,C=K5,x=j5,B=M5,k=$5,S=Gf,L=A5,O=_5,j=f5,ne=js("RouterLink"),ue=a5,Q=t5,ye=Qx,_e=Hx;return _(),F("nav",{ref_key:"root",ref:c,class:"flex flex-col"},[t("div",{class:Re(["flex flex-wrap-reverse text-xl gap-0.5 p-1 lg:gap-1 lg:p-2",p.value]),onMouseleave:u},[T(gn)?me("v-if",!0):(_(),F("button",{key:0,class:"slidev-icon-btn",onClick:m[0]||(m[0]=(...be)=>T(r)&&T(r)(...be))},[T(o)?(_(),W(b,{key:0})):(_(),W(A,{key:1}))])),t("button",{class:Re(["slidev-icon-btn",{disabled:!T(V4)}]),onClick:m[1]||(m[1]=(...be)=>T(jn)&&T(jn)(...be))},[M(w)],2),t("button",{class:Re(["slidev-icon-btn",{disabled:!T(H4)}]),title:"Next",onClick:m[2]||(m[2]=(...be)=>T(qn)&&T(qn)(...be))},[M(C)],2),T(gn)?me("v-if",!0):(_(),F("button",{key:1,class:"slidev-icon-btn",title:"Slides overview",onClick:m[3]||(m[3]=be=>T(Df)())},[M(x)])),T(Pa)?me("v-if",!0):(_(),F("button",{key:2,class:"slidev-icon-btn",title:"Toggle dark mode",onClick:m[4]||(m[4]=be=>T(Pf)())},[T(Ti)?(_(),W(B,{key:0})):(_(),W(k,{key:1}))])),M(gr),T(gn)?me("v-if",!0):(_(),F(Fe,{key:3},[!T(bt)&&!T(s)&&d.value?(_(),F(Fe,{key:0},[M(T(d)),M(gr)],64)):me("v-if",!0),T(bt)?(_(),F("button",{key:1,class:"slidev-icon-btn",title:"Show presenter cursor",onClick:m[5]||(m[5]=be=>Nl.value=!T(Nl))},[T(Nl)?(_(),W(S,{key:0})):(_(),W(L,{key:1,class:"opacity-50"}))])):me("v-if",!0)],64)),(!T(Se).drawings.presenterOnly||T(bt))&&!T(gn)?(_(),F(Fe,{key:4},[t("button",{class:"slidev-icon-btn relative",title:"Drawing",onClick:m[6]||(m[6]=be=>on.value=!T(on))},[M(O),T(on)?(_(),F("div",{key:0,class:"absolute left-1 right-1 bottom-0 h-0.7 rounded-full",style:et({background:T(ds).color})},null,4)):me("v-if",!0)]),M(gr)],64)):me("v-if",!0),T(gn)?me("v-if",!0):(_(),F(Fe,{key:5},[T(bt)?(_(),W(ne,{key:0,to:i.value,class:"slidev-icon-btn",title:"Play Mode"},{default:P(()=>[M(j)]),_:1},8,["to"])):me("v-if",!0),T(R4)?(_(),W(ne,{key:1,to:a.value,class:"slidev-icon-btn",title:"Presenter Mode"},{default:P(()=>[M(ue)]),_:1},8,["to"])):me("v-if",!0),me("v-if",!0)],64)),(_(),F(Fe,{key:6},[T(Se).download?(_(),F("button",{key:0,class:"slidev-icon-btn",onClick:m[8]||(m[8]=(...be)=>T(Ha)&&T(Ha)(...be))},[M(Q)])):me("v-if",!0)],64)),!T(bt)&&T(Se).info&&!T(gn)?(_(),F("button",{key:7,class:"slidev-icon-btn",onClick:m[9]||(m[9]=be=>Ao.value=!T(Ao))},[M(ye)])):me("v-if",!0),!T(bt)&&!T(gn)?(_(),W(B3,{key:8},{button:P(()=>[t("button",S3,[M(_e)])]),menu:P(()=>[M(w3)]),_:1})):me("v-if",!0),T(gn)?me("v-if",!0):(_(),W(gr,{key:9})),t("div",D3,[t("div",T3,[f(An(T(He))+" ",1),t("span",$3,"/ "+An(T(N4)),1)])]),M(T(F3))],34)],512)}}}),U3=z(O3,[["__file","/home/ben/Workspace/demystifying-unicode/node_modules/@slidev/client/internals/NavControls.vue"]]),Yf={render(){return[]}},Qf={render(){return[]}},P3={key:0,class:"absolute top-0 left-0 right-0 bottom-0 pointer-events-none text-xl"},I3=Ae({__name:"PresenterMouse",setup(e){return R(V),(n,s)=>{const o=Gf;return T(Pl).cursor?(_(),F("div",P3,[M(o,{class:"absolute",style:et({left:`${T(Pl).cursor.x}%`,top:`${T(Pl).cursor.y}%`})},null,8,["style"])])):me("v-if",!0)}}}),M3=z(I3,[["__file","/home/ben/Workspace/demystifying-unicode/node_modules/@slidev/client/internals/PresenterMouse.vue"]]),L3=Ae({__name:"SlidesShow",props:{context:{type:String,required:!0}},setup(e){R(V),ge(ht,()=>{var o,r;(o=ht.value)!=null&&o.meta&&ht.value.meta.preload!==!1&&(ht.value.meta.__preloaded=!0),(r=Hl.value)!=null&&r.meta&&Hl.value.meta.preload!==!1&&(Hl.value.meta.__preloaded=!0)},{immediate:!0});const n=cn();Rn(()=>import("./DrawingLayer-77bca6f1.js"),[]).then(o=>n.value=o.default);const s=$(()=>Ye.filter(o=>{var r;return((r=o.meta)==null?void 0:r.__preloaded)||o===ht.value}));return(o,r)=>(_(),F(Fe,null,[me(" Global Bottom "),M(T(Qf)),me(" Slides "),M(c1,ze(T(G4),{id:"slideshow",tag:"div"}),{default:P(()=>[(_(!0),F(Fe,null,Es(s.value,l=>{var a;return wt((_(),W(T(Ui),{key:l.path,is:l==null?void 0:l.component,clicks:l===T(ht)?T(Lt):0,"clicks-elements":((a=l.meta)==null?void 0:a.__clicksElements)||[],"clicks-disabled":!1,class:Re(T(Oi)(l)),route:l,context:o.context},null,8,["is","clicks","clicks-elements","class","route","context"])),[[Rd,l===T(ht)]])}),128))]),_:1},16),me(" Global Top "),M(T(Yf)),n.value?(_(),W(T(n),{key:0})):me("v-if",!0),T(bt)?me("v-if",!0):(_(),W(M3,{key:1}))],64))}});const R3=z(L3,[["__scopeId","data-v-afb4231e"],["__file","/home/ben/Workspace/demystifying-unicode/node_modules/@slidev/client/internals/SlidesShow.vue"]]),N3=Ae({__name:"PrintStyle",setup(e){R(V);function n(s,{slots:o}){if(o.default)return Xe("style",o.default())}return(s,o)=>(_(),W(n,null,{default:P(()=>[f(" @page { size: "+An(T(Ln))+"px "+An(T(ki))+"px; margin: 0px; } ",1)]),_:1}))}}),Zf=z(N3,[["__file","/home/ben/Workspace/demystifying-unicode/node_modules/@slidev/client/internals/PrintStyle.vue"]]),q3=Ae({__name:"Play",setup(e){R(V),Ab();const n=Y();function s(l){var a;Au.value||((a=l.target)==null?void 0:a.id)==="slide-container"&&(l.screenX/window.innerWidth>.6?qn():jn())}Y4(n);const o=$(()=>O8.value||Au.value);cn();const r=cn();return Rn(()=>import("./DrawingControls-aed2aeec.js"),[]).then(l=>r.value=l.default),(l,a)=>(_(),F(Fe,null,[T(xn)?(_(),W(Zf,{key:0})):me("v-if",!0),t("div",{id:"page-root",ref_key:"root",ref:n,class:"grid grid-cols-[1fr_max-content]",style:et(T(Ei))},[M(Mf,{class:"w-full h-full",style:et({background:"var(--slidev-slide-container-background, black)"}),width:T(xn)?T(xs).width.value:void 0,scale:T(Br),onPointerdown:s},{default:P(()=>[M(R3,{context:"slide"})]),controls:P(()=>[t("div",{class:Re(["absolute bottom-0 left-0 transition duration-300 opacity-0 hover:opacity-100",[o.value?"opacity-100 right-0":"opacity-0 p-2",T(Lo)?"pointer-events-none":""]])},[M(U3,{class:"m-auto",persist:o.value},null,8,["persist"])],2),!T(Se).drawings.presenterOnly&&!T(gn)&&r.value?(_(),W(T(r),{key:0,class:"ml-0"})):me("v-if",!0)]),_:1},8,["style","width","scale"]),me("v-if",!0)],4),M(Rx)],64))}}),j3=z(q3,[["__file","/home/ben/Workspace/demystifying-unicode/node_modules/@slidev/client/internals/Play.vue"]]);/*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT */function Jf(e){return typeof e>"u"||e===null}function W3(e){return typeof e=="object"&&e!==null}function H3(e){return Array.isArray(e)?e:Jf(e)?[]:[e]}function V3(e,n){var s,o,r,l;if(n)for(l=Object.keys(n),s=0,o=l.length;s<o;s+=1)r=l[s],e[r]=n[r];return e}function z3(e,n){var s="",o;for(o=0;o<n;o+=1)s+=e;return s}function K3(e){return e===0&&Number.NEGATIVE_INFINITY===1/e}var G3=Jf,Y3=W3,Q3=H3,Z3=z3,J3=K3,X3=V3,Ii={isNothing:G3,isObject:Y3,toArray:Q3,repeat:Z3,isNegativeZero:J3,extend:X3};function Xf(e,n){var s="",o=e.reason||"(unknown reason)";return e.mark?(e.mark.name&&(s+='in "'+e.mark.name+'" '),s+="("+(e.mark.line+1)+":"+(e.mark.column+1)+")",!n&&e.mark.snippet&&(s+=`

`+e.mark.snippet),o+" "+s):o}function No(e,n){Error.call(this),this.name="YAMLException",this.reason=e,this.mark=n,this.message=Xf(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}No.prototype=Object.create(Error.prototype);No.prototype.constructor=No;No.prototype.toString=function(n){return this.name+": "+Xf(this,n)};var us=No,ew=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],tw=["scalar","sequence","mapping"];function nw(e){var n={};return e!==null&&Object.keys(e).forEach(function(s){e[s].forEach(function(o){n[String(o)]=s})}),n}function sw(e,n){if(n=n||{},Object.keys(n).forEach(function(s){if(ew.indexOf(s)===-1)throw new us('Unknown option "'+s+'" is met in definition of "'+e+'" YAML type.')}),this.options=n,this.tag=e,this.kind=n.kind||null,this.resolve=n.resolve||function(){return!0},this.construct=n.construct||function(s){return s},this.instanceOf=n.instanceOf||null,this.predicate=n.predicate||null,this.represent=n.represent||null,this.representName=n.representName||null,this.defaultStyle=n.defaultStyle||null,this.multi=n.multi||!1,this.styleAliases=nw(n.styleAliases||null),tw.indexOf(this.kind)===-1)throw new us('Unknown kind "'+this.kind+'" is specified for "'+e+'" YAML type.')}var ct=sw;function Nu(e,n){var s=[];return e[n].forEach(function(o){var r=s.length;s.forEach(function(l,a){l.tag===o.tag&&l.kind===o.kind&&l.multi===o.multi&&(r=a)}),s[r]=o}),s}function ow(){var e={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}},n,s;function o(r){r.multi?(e.multi[r.kind].push(r),e.multi.fallback.push(r)):e[r.kind][r.tag]=e.fallback[r.tag]=r}for(n=0,s=arguments.length;n<s;n+=1)arguments[n].forEach(o);return e}function ja(e){return this.extend(e)}ja.prototype.extend=function(n){var s=[],o=[];if(n instanceof ct)o.push(n);else if(Array.isArray(n))o=o.concat(n);else if(n&&(Array.isArray(n.implicit)||Array.isArray(n.explicit)))n.implicit&&(s=s.concat(n.implicit)),n.explicit&&(o=o.concat(n.explicit));else throw new us("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");s.forEach(function(l){if(!(l instanceof ct))throw new us("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(l.loadKind&&l.loadKind!=="scalar")throw new us("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(l.multi)throw new us("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),o.forEach(function(l){if(!(l instanceof ct))throw new us("Specified list of YAML types (or a single Type object) contains a non-Type object.")});var r=Object.create(ja.prototype);return r.implicit=(this.implicit||[]).concat(s),r.explicit=(this.explicit||[]).concat(o),r.compiledImplicit=Nu(r,"implicit"),r.compiledExplicit=Nu(r,"explicit"),r.compiledTypeMap=ow(r.compiledImplicit,r.compiledExplicit),r};var rw=ja,lw=new ct("tag:yaml.org,2002:str",{kind:"scalar",construct:function(e){return e!==null?e:""}}),aw=new ct("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(e){return e!==null?e:[]}}),iw=new ct("tag:yaml.org,2002:map",{kind:"mapping",construct:function(e){return e!==null?e:{}}}),cw=new rw({explicit:[lw,aw,iw]});function uw(e){if(e===null)return!0;var n=e.length;return n===1&&e==="~"||n===4&&(e==="null"||e==="Null"||e==="NULL")}function pw(){return null}function dw(e){return e===null}var fw=new ct("tag:yaml.org,2002:null",{kind:"scalar",resolve:uw,construct:pw,predicate:dw,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"});function hw(e){if(e===null)return!1;var n=e.length;return n===4&&(e==="true"||e==="True"||e==="TRUE")||n===5&&(e==="false"||e==="False"||e==="FALSE")}function yw(e){return e==="true"||e==="True"||e==="TRUE"}function mw(e){return Object.prototype.toString.call(e)==="[object Boolean]"}var gw=new ct("tag:yaml.org,2002:bool",{kind:"scalar",resolve:hw,construct:yw,predicate:mw,represent:{lowercase:function(e){return e?"true":"false"},uppercase:function(e){return e?"TRUE":"FALSE"},camelcase:function(e){return e?"True":"False"}},defaultStyle:"lowercase"});function _w(e){return 48<=e&&e<=57||65<=e&&e<=70||97<=e&&e<=102}function vw(e){return 48<=e&&e<=55}function bw(e){return 48<=e&&e<=57}function xw(e){if(e===null)return!1;var n=e.length,s=0,o=!1,r;if(!n)return!1;if(r=e[s],(r==="-"||r==="+")&&(r=e[++s]),r==="0"){if(s+1===n)return!0;if(r=e[++s],r==="b"){for(s++;s<n;s++)if(r=e[s],r!=="_"){if(r!=="0"&&r!=="1")return!1;o=!0}return o&&r!=="_"}if(r==="x"){for(s++;s<n;s++)if(r=e[s],r!=="_"){if(!_w(e.charCodeAt(s)))return!1;o=!0}return o&&r!=="_"}if(r==="o"){for(s++;s<n;s++)if(r=e[s],r!=="_"){if(!vw(e.charCodeAt(s)))return!1;o=!0}return o&&r!=="_"}}if(r==="_")return!1;for(;s<n;s++)if(r=e[s],r!=="_"){if(!bw(e.charCodeAt(s)))return!1;o=!0}return!(!o||r==="_")}function ww(e){var n=e,s=1,o;if(n.indexOf("_")!==-1&&(n=n.replace(/_/g,"")),o=n[0],(o==="-"||o==="+")&&(o==="-"&&(s=-1),n=n.slice(1),o=n[0]),n==="0")return 0;if(o==="0"){if(n[1]==="b")return s*parseInt(n.slice(2),2);if(n[1]==="x")return s*parseInt(n.slice(2),16);if(n[1]==="o")return s*parseInt(n.slice(2),8)}return s*parseInt(n,10)}function Aw(e){return Object.prototype.toString.call(e)==="[object Number]"&&e%1===0&&!Ii.isNegativeZero(e)}var Cw=new ct("tag:yaml.org,2002:int",{kind:"scalar",resolve:xw,construct:ww,predicate:Aw,represent:{binary:function(e){return e>=0?"0b"+e.toString(2):"-0b"+e.toString(2).slice(1)},octal:function(e){return e>=0?"0o"+e.toString(8):"-0o"+e.toString(8).slice(1)},decimal:function(e){return e.toString(10)},hexadecimal:function(e){return e>=0?"0x"+e.toString(16).toUpperCase():"-0x"+e.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),Bw=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function kw(e){return!(e===null||!Bw.test(e)||e[e.length-1]==="_")}function Ew(e){var n,s;return n=e.replace(/_/g,"").toLowerCase(),s=n[0]==="-"?-1:1,"+-".indexOf(n[0])>=0&&(n=n.slice(1)),n===".inf"?s===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:n===".nan"?NaN:s*parseFloat(n,10)}var Fw=/^[-+]?[0-9]+e/;function Sw(e,n){var s;if(isNaN(e))switch(n){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===e)switch(n){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===e)switch(n){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(Ii.isNegativeZero(e))return"-0.0";return s=e.toString(10),Fw.test(s)?s.replace("e",".e"):s}function Dw(e){return Object.prototype.toString.call(e)==="[object Number]"&&(e%1!==0||Ii.isNegativeZero(e))}var Tw=new ct("tag:yaml.org,2002:float",{kind:"scalar",resolve:kw,construct:Ew,predicate:Dw,represent:Sw,defaultStyle:"lowercase"}),$w=cw.extend({implicit:[fw,gw,Cw,Tw]}),Ow=$w,eh=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),th=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function Uw(e){return e===null?!1:eh.exec(e)!==null||th.exec(e)!==null}function Pw(e){var n,s,o,r,l,a,i,c=0,u=null,p,d,h;if(n=eh.exec(e),n===null&&(n=th.exec(e)),n===null)throw new Error("Date resolve error");if(s=+n[1],o=+n[2]-1,r=+n[3],!n[4])return new Date(Date.UTC(s,o,r));if(l=+n[4],a=+n[5],i=+n[6],n[7]){for(c=n[7].slice(0,3);c.length<3;)c+="0";c=+c}return n[9]&&(p=+n[10],d=+(n[11]||0),u=(p*60+d)*6e4,n[9]==="-"&&(u=-u)),h=new Date(Date.UTC(s,o,r,l,a,i,c)),u&&h.setTime(h.getTime()-u),h}function Iw(e){return e.toISOString()}var Mw=new ct("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:Uw,construct:Pw,instanceOf:Date,represent:Iw});function Lw(e){return e==="<<"||e===null}var Rw=new ct("tag:yaml.org,2002:merge",{kind:"scalar",resolve:Lw}),Mi=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function Nw(e){if(e===null)return!1;var n,s,o=0,r=e.length,l=Mi;for(s=0;s<r;s++)if(n=l.indexOf(e.charAt(s)),!(n>64)){if(n<0)return!1;o+=6}return o%8===0}function qw(e){var n,s,o=e.replace(/[\r\n=]/g,""),r=o.length,l=Mi,a=0,i=[];for(n=0;n<r;n++)n%4===0&&n&&(i.push(a>>16&255),i.push(a>>8&255),i.push(a&255)),a=a<<6|l.indexOf(o.charAt(n));return s=r%4*6,s===0?(i.push(a>>16&255),i.push(a>>8&255),i.push(a&255)):s===18?(i.push(a>>10&255),i.push(a>>2&255)):s===12&&i.push(a>>4&255),new Uint8Array(i)}function jw(e){var n="",s=0,o,r,l=e.length,a=Mi;for(o=0;o<l;o++)o%3===0&&o&&(n+=a[s>>18&63],n+=a[s>>12&63],n+=a[s>>6&63],n+=a[s&63]),s=(s<<8)+e[o];return r=l%3,r===0?(n+=a[s>>18&63],n+=a[s>>12&63],n+=a[s>>6&63],n+=a[s&63]):r===2?(n+=a[s>>10&63],n+=a[s>>4&63],n+=a[s<<2&63],n+=a[64]):r===1&&(n+=a[s>>2&63],n+=a[s<<4&63],n+=a[64],n+=a[64]),n}function Ww(e){return Object.prototype.toString.call(e)==="[object Uint8Array]"}var Hw=new ct("tag:yaml.org,2002:binary",{kind:"scalar",resolve:Nw,construct:qw,predicate:Ww,represent:jw}),Vw=Object.prototype.hasOwnProperty,zw=Object.prototype.toString;function Kw(e){if(e===null)return!0;var n=[],s,o,r,l,a,i=e;for(s=0,o=i.length;s<o;s+=1){if(r=i[s],a=!1,zw.call(r)!=="[object Object]")return!1;for(l in r)if(Vw.call(r,l))if(!a)a=!0;else return!1;if(!a)return!1;if(n.indexOf(l)===-1)n.push(l);else return!1}return!0}function Gw(e){return e!==null?e:[]}var Yw=new ct("tag:yaml.org,2002:omap",{kind:"sequence",resolve:Kw,construct:Gw}),Qw=Object.prototype.toString;function Zw(e){if(e===null)return!0;var n,s,o,r,l,a=e;for(l=new Array(a.length),n=0,s=a.length;n<s;n+=1){if(o=a[n],Qw.call(o)!=="[object Object]"||(r=Object.keys(o),r.length!==1))return!1;l[n]=[r[0],o[r[0]]]}return!0}function Jw(e){if(e===null)return[];var n,s,o,r,l,a=e;for(l=new Array(a.length),n=0,s=a.length;n<s;n+=1)o=a[n],r=Object.keys(o),l[n]=[r[0],o[r[0]]];return l}var Xw=new ct("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:Zw,construct:Jw}),eA=Object.prototype.hasOwnProperty;function tA(e){if(e===null)return!0;var n,s=e;for(n in s)if(eA.call(s,n)&&s[n]!==null)return!1;return!0}function nA(e){return e!==null?e:{}}var sA=new ct("tag:yaml.org,2002:set",{kind:"mapping",resolve:tA,construct:nA});Ow.extend({implicit:[Mw,Rw],explicit:[Hw,Yw,Xw,sA]});function qu(e){return e===48?"\0":e===97?"\x07":e===98?"\b":e===116||e===9?"	":e===110?`
`:e===118?"\v":e===102?"\f":e===114?"\r":e===101?"\x1B":e===32?" ":e===34?'"':e===47?"/":e===92?"\\":e===78?"":e===95?" ":e===76?"\u2028":e===80?"\u2029":""}var oA=new Array(256),rA=new Array(256);for(var Us=0;Us<256;Us++)oA[Us]=qu(Us)?1:0,rA[Us]=qu(Us);function lA(e){return Array.from(new Set(e))}function ju(...e){let n,s,o;e.length===1?(n=0,o=1,[s]=e):[n,s,o=1]=e;const r=[];let l=n;for(;l<s;)r.push(l),l+=o||1;return r}function nh(e,n){if(!n||n==="all"||n==="*")return ju(1,e+1);const s=[];for(const o of n.split(/[,;]/g))if(!o.includes("-"))s.push(+o);else{const[r,l]=o.split("-",2);s.push(...ju(+r,l?+l+1:e+1))}return lA(s).filter(o=>o<=e).sort((o,r)=>o-r)}function sh(e){const n=$(()=>e.value.path),s=$(()=>Ye.length),o=$(()=>Number.parseInt(n.value.split(/\//g).slice(-1)[0])||1),r=$(()=>_l(o.value)),l=$(()=>Ye.find(h=>h.path===`${o.value}`)),a=$(()=>{var h,y,m;return(m=(y=(h=l.value)==null?void 0:h.meta)==null?void 0:y.slide)==null?void 0:m.id}),i=$(()=>{var h,y;return((y=(h=l.value)==null?void 0:h.meta)==null?void 0:y.layout)||(o.value===1?"cover":"default")}),c=$(()=>Ye.find(h=>h.path===`${Math.min(Ye.length,o.value+1)}`)),u=$(()=>Ye.filter(h=>{var y,m;return(m=(y=h.meta)==null?void 0:y.slide)==null?void 0:m.title}).reduce((h,y)=>(Li(h,y),h),[])),p=$(()=>Ri(u.value,l.value)),d=$(()=>Ni(p.value));return{route:e,path:n,total:s,currentPage:o,currentPath:r,currentRoute:l,currentSlideId:a,currentLayout:i,nextRoute:c,rawTree:u,treeWithActiveStatuses:p,tree:d,downloadPDF:Ha,next:qn,nextSlide:qo,openInEditor:Q4,prev:jn,prevSlide:jo}}function oh(e,n,s){const o=Y(0);lt(()=>{At.afterEach(async()=>{await lt(),o.value+=1})});const r=$(()=>{var c,u;return o.value,((u=(c=n.value)==null?void 0:c.meta)==null?void 0:u.__clicksElements)||[]}),l=$(()=>{var c,u;return+(((u=(c=n.value)==null?void 0:c.meta)==null?void 0:u.clicks)??r.value.length)}),a=$(()=>s.value<Ye.length-1||e.value<l.value),i=$(()=>s.value>1||e.value>0);return{clicks:e,clicksElements:r,clicksTotal:l,hasNext:a,hasPrev:i}}const aA=["id"],iA=Ae({__name:"PrintSlideClick",props:{clicks:{type:Number,required:!0},clicksElements:{type:Array,required:!1},nav:{type:null,required:!0},route:{type:null,required:!0}},emits:["update:clicksElements"],setup(e,{emit:n}){const s=e,o=sn(s,"clicksElements",n),r=$(()=>({height:`${ki}px`,width:`${Ln}px`})),l=cn();Rn(()=>Promise.resolve().then(()=>$b),void 0).then(u=>l.value=u.default);const a=$(()=>s.clicks),i=oh(a,s.nav.currentRoute,s.nav.currentPage),c=$(()=>`${s.route.path.toString().padStart(3,"0")}-${(a.value+1).toString().padStart(2,"0")}`);return Ft(V,We({nav:{...s.nav,...i},configs:Se,themeConfigs:$(()=>Se.themeConfig)})),(u,p)=>{var d;return _(),F("div",{id:c.value,class:"print-slide-container",style:et(r.value)},[M(T(Qf)),M(T(Ui),{is:(d=u.route)==null?void 0:d.component,"clicks-elements":T(o),"onUpdate:clicksElements":p[0]||(p[0]=h=>De(o)?o.value=h:null),clicks:a.value,"clicks-disabled":!1,class:Re(T(Oi)(u.route)),route:u.route},null,8,["is","clicks-elements","clicks","class","route"]),l.value?(_(),W(T(l),{key:0,page:+u.route.path},null,8,["page"])):me("v-if",!0),M(T(Yf))],12,aA)}}}),Wu=z(iA,[["__file","/home/ben/Workspace/demystifying-unicode/node_modules/@slidev/client/internals/PrintSlideClick.vue"]]),cA=Ae({__name:"PrintSlide",props:{route:{type:null,required:!0}},setup(e){var l;const n=e;R(V);const s=Y(((l=n.route.meta)==null?void 0:l.__clicksElements)||[]),o=$(()=>n.route),r=sh(o);return(a,i)=>(_(),F(Fe,null,[M(Wu,{"clicks-elements":s.value,"onUpdate:clicksElements":i[0]||(i[0]=c=>s.value=c),clicks:0,nav:T(r),route:o.value},null,8,["clicks-elements","nav","route"]),T(Co)?me("v-if",!0):(_(!0),F(Fe,{key:0},Es(s.value.length,c=>(_(),W(Wu,{key:c,clicks:c,nav:T(r),route:o.value},null,8,["clicks","nav","route"]))),128))],64))}}),uA=z(cA,[["__file","/home/ben/Workspace/demystifying-unicode/node_modules/@slidev/client/internals/PrintSlide.vue"]]),pA={id:"print-content"},dA=Ae({__name:"PrintContainer",props:{width:{type:Number,required:!0}},setup(e){const n=e;R(V);const s=$(()=>n.width),o=$(()=>n.width/Mn),r=$(()=>s.value/o.value),l=$(()=>r.value<Mn?s.value/Ln:o.value*Mn/Ln);let a=Ye;Nt.value.query.range&&(a=nh(a.length,Nt.value.query.range).map(u=>a[u-1]));const i=$(()=>({"select-none":!Se.selectable}));return Ft(Qd,l),(c,u)=>(_(),F("div",{id:"print-container",class:Re(i.value)},[t("div",pA,[(_(!0),F(Fe,null,Es(T(a),p=>(_(),W(uA,{key:p.path,route:p},null,8,["route"]))),128))]),Ct(c.$slots,"controls")],2))}});const fA=z(dA,[["__file","/home/ben/Workspace/demystifying-unicode/node_modules/@slidev/client/internals/PrintContainer.vue"]]),hA=Ae({__name:"Print",setup(e){return R(V),ks(()=>{xn?document.body.parentNode.classList.add("print"):document.body.parentNode.classList.remove("print")}),(n,s)=>(_(),F(Fe,null,[T(xn)?(_(),W(Zf,{key:0})):me("v-if",!0),t("div",{id:"page-root",class:"grid grid-cols-[1fr_max-content]",style:et(T(Ei))},[M(fA,{class:"w-full h-full",style:et({background:"var(--slidev-slide-container-background, black)"}),width:T(xs).width.value},null,8,["style","width"])],4)],64))}});const yA=z(hA,[["__file","/home/ben/Workspace/demystifying-unicode/node_modules/@slidev/client/internals/Print.vue"]]);function Hu(e){return e.startsWith("/")?"/demystifying-unicode/"+e.slice(1):e}function mA(e,n=!1){const s=e&&["#","rgb","hsl"].some(r=>e.indexOf(r)===0),o={background:s?e:void 0,color:e&&!s?"white":void 0,backgroundImage:s?void 0:e?n?`linear-gradient(#0005, #0008), url(${Hu(e)})`:`url("${Hu(e)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return o.background||delete o.background,o}const gA={class:"my-auto w-full"},_A=Ae({__name:"cover",props:{background:{default:"https://source.unsplash.com/collection/94734566/1920x1080"}},setup(e){const n=e;R(V);const s=$(()=>mA(n.background,!0));return(o,r)=>(_(),F("div",{class:"slidev-layout cover text-center",style:et(s.value)},[t("div",gA,[Ct(o.$slots,"default")])],4))}}),Gs=z(_A,[["__file","/home/ben/Workspace/demystifying-unicode/node_modules/@slidev/theme-seriph/layouts/cover.vue"]]),vA=t("h1",null,"Demystifying Unicode",-1),bA=t("p",null,"Unicode, Rust, quirks, and way too much detail.",-1),xA={__name:"1",setup(e){const n={theme:"seriph",background:"https://source.unsplash.com/collection/94734566/1920x1080",class:"text-center",highlighter:"shiki",lineNumbers:!0,info:`## Unicode, Rust, quirks, and way too much detail.
`,drawings:{persist:!1},transition:"slide-left",hideInToc:!0};return R(V),(s,o)=>(_(),W(Gs,le(re(n)),{default:P(()=>[vA,bA]),_:1},16))}},wA=z(xA,[["__file","/@slidev/slides/1.md"]]),AA={class:"slidev-layout default"},CA={__name:"default",setup(e){return R(V),(n,s)=>(_(),F("div",AA,[Ct(n.$slots,"default")]))}},Te=z(CA,[["__file","/home/ben/Workspace/demystifying-unicode/node_modules/@slidev/client/layouts/default.vue"]]),BA=t("h1",null,"Some sorta outline",-1),kA=t("ul",null,[t("li",null,"We learn some things about Computers"),t("li",null,"Then, some things about unicode"),t("li",null,"And, some things about unicode in rust"),t("li",null,"Some things you only need to know when you need to know")],-1),EA={__name:"2",setup(e){const n={hideInToc:!0};return R(V),(s,o)=>(_(),W(Te,le(re(n)),{default:P(()=>[BA,kA]),_:1},16))}},FA=z(EA,[["__file","/@slidev/slides/2.md"]]),SA=["href","innerHTML"],DA=["href"],TA=Ae({__name:"Link",props:{to:{type:[Number,String],required:!0},title:{type:String,required:!1}},setup(e){return R(V),(n,s)=>{const o=js("RouterLink");return!T(xn)&&n.title?(_(),W(o,{key:0,to:String(n.to),onClick:s[0]||(s[0]=r=>r.target.blur()),innerHTML:n.title},null,8,["to","innerHTML"])):!T(xn)&&!n.title?(_(),W(o,{key:1,to:String(n.to),onClick:s[1]||(s[1]=r=>r.target.blur())},{default:P(()=>[Ct(n.$slots,"default")]),_:3},8,["to"])):T(xn)&&n.title?(_(),F("a",{key:2,href:`#${n.to}`,innerHTML:n.title},null,8,SA)):(_(),F("a",{key:3,href:`#${n.to}`},[Ct(n.$slots,"default")],8,DA))}}}),$A=z(TA,[["__file","/home/ben/Workspace/demystifying-unicode/node_modules/@slidev/client/builtin/Link.vue"]]),OA={key:0},UA={key:1},PA={key:2},IA={key:3},MA={key:4},LA={key:5},RA={key:6},NA={key:7},qA={key:8},jA={key:9},WA={key:10},HA={key:11},VA={key:12},zA={key:13},KA={key:14},GA={key:15},YA={key:16},QA={key:17},ZA={key:18},JA={key:19},XA={key:20},e6={key:21},t6={key:22},n6={key:23},s6={key:24},o6={key:25},r6={key:26},l6={key:27},a6={key:28},i6={key:29},c6={key:30},u6={key:31},p6={key:32},d6={key:33},f6={key:34},h6=t("code",null,"str",-1),y6=t("code",null,"[u8]",-1),m6=t("strong",null,"which contents are always valid UTF-8",-1),g6={key:35},_6={key:36},v6={key:37},b6={key:38},x6={key:39},w6={key:40},A6={key:41},C6={key:42},B6={key:43},k6={key:44},E6={key:45},F6={key:46},S6={key:47},D6={key:48},T6={key:49},$6={key:50},O6={key:51},U6={key:52},P6={key:53},I6={key:54},M6={key:55},L6={key:56},R6=Ae({__name:"titles",props:{no:{type:[Number,String],required:!0}},setup(e){return(n,s)=>(_(),F("div",null,[+n.no==1?(_(),F("p",OA,"Demystifying Unicode")):+n.no==2?(_(),F("p",UA,"Some sorta outline")):+n.no==3?(_(),F("p",PA,"Table of contents")):+n.no==4?(_(),F("p",IA,"History")):+n.no==5?(_(),F("p",MA,"A bit (🥁鈸) of fundamentals")):+n.no==6?(_(),F("p",LA,"Abstraction")):+n.no==7?(_(),F("p",RA,"Abstract? ABSTRACT!")):+n.no==8?(_(),F("p",NA,"undefined")):+n.no==9?(_(),F("p",qA,"Competing standards")):+n.no==10?(_(),F("p",jA,"About ol ASCII - QQ")):+n.no==11?(_(),F("p",WA,"How many characters is enough charcters?")):+n.no==12?(_(),F("p",HA,"Summary")):+n.no==13?(_(),F("p",VA,"Unicode")):+n.no==14?(_(),F("p",zA,"Why Unicode?")):+n.no==15?(_(),F("p",KA,"undefined")):+n.no==16?(_(),F("p",GA,"Unicode to the resque")):+n.no==17?(_(),F("p",YA,"New Terminology")):+n.no==18?(_(),F("p",QA,"undefined")):+n.no==19?(_(),F("p",ZA,"undefined")):+n.no==20?(_(),F("p",JA,"Glyphemes")):+n.no==21?(_(),F("p",XA,"What is the difference between")):+n.no==22?(_(),F("p",e6,"undefined")):+n.no==23?(_(),F("p",t6,"Encoding")):+n.no==24?(_(),F("p",n6,"undefined")):+n.no==25?(_(),F("p",s6,"Woo options!")):+n.no==26?(_(),F("p",o6,"UTF-8 is the king of the web")):+n.no==27?(_(),F("p",r6,"Nuts and bolts of UTF-8")):+n.no==28?(_(),F("p",l6,"Let’s encode!")):+n.no==29?(_(),F("p",a6,"Let’s encode!")):+n.no==30?(_(),F("p",i6,"Summary")):+n.no==31?(_(),F("p",c6,"Unicode in Rust")):+n.no==32?(_(),F("p",u6,"undefined")):+n.no==33?(_(),F("p",p6,"undefined")):+n.no==34?(_(),F("p",d6,"String slices")):+n.no==35?(_(),F("p",f6,[f("A String slice ("),h6,f(") is just a slice of bytes ("),y6,f("), "),m6,f(".")])):+n.no==36?(_(),F("p",g6,"Lets make some strings")):+n.no==37?(_(),F("p",_6,"Creating strings")):+n.no==38?(_(),F("p",v6,"Creating Strings")):+n.no==39?(_(),F("p",b6,"Creating strings")):+n.no==40?(_(),F("p",x6,"See, creating strings is easy!")):+n.no==41?(_(),F("p",w6,"UTF8Error")):+n.no==42?(_(),F("p",A6,"Invalid UTF-8")):+n.no==43?(_(),F("p",C6,"Where Enforced UTF-8 can go wrong")):+n.no==44?(_(),F("p",B6,"Reading and Writing")):+n.no==45?(_(),F("p",k6,"Reading and Writing")):+n.no==46?(_(),F("p",E6,"Read and Writing - JSON")):+n.no==47?(_(),F("p",F6,"Conventially UTF-8 vs. Gauranteed")):+n.no==48?(_(),F("p",S6,"Summary")):+n.no==49?(_(),F("p",D6,"Quirks")):+n.no==50?(_(),F("p",T6,"Can we just know which UTF Encoding by looking at the bytes?")):+n.no==51?(_(),F("p",$6,"Capitalization (AKA Casemapping and Casefolding)")):+n.no==52?(_(),F("p",O6,"Composition")):+n.no==53?(_(),F("p",U6,"Emoji Composition")):+n.no==54?(_(),F("p",P6,"Digraphs/ligatures")):+n.no==55?(_(),F("p",I6,"Flags")):+n.no==56?(_(),F("p",M6,"Unicode Tags")):+n.no==57?(_(),F("p",L6,"THE END")):me("v-if",!0)]))}}),N6=z(R6,[["__file","/@slidev/titles.md"]]),q6=Ae({__name:"TocList",props:{level:{type:Number,required:!0,default:1},list:{type:Array,required:!0},listClass:{type:[String,Array],required:!1}},setup(e){const n=e;R(V);const s=$(()=>[...Zd(n.listClass||[]),"slidev-toc-list",`slidev-toc-list-level-${n.level}`]);return(o,r)=>{const l=$A,a=js("TocList",!0);return o.list&&o.list.length>0?(_(),F("ol",{key:0,class:Re(s.value)},[(_(!0),F(Fe,null,Es(o.list,i=>(_(),F("li",{key:i.path,class:Re(["slidev-toc-item",[{"slidev-toc-item-active":i.active},{"slidev-toc-item-parent-active":i.activeParent}]])},[M(l,{to:i.path},{default:P(()=>[M(T(N6),{no:i.path},null,8,["no"])]),_:2},1032,["to"]),i.children.length>0?(_(),W(a,{key:0,level:o.level+1,list:i.children,"list-class":o.listClass},null,8,["level","list","list-class"])):me("v-if",!0)],2))),128))],2)):me("v-if",!0)}}});const j6=z(q6,[["__file","/home/ben/Workspace/demystifying-unicode/node_modules/@slidev/client/builtin/TocList.vue"]]),W6=Ae({__name:"Toc",props:{columns:{type:[String,Number],required:!1,default:1},listClass:{type:[String,Array],required:!1,default:""},maxDepth:{type:[String,Number],required:!1,default:1/0},minDepth:{type:[String,Number],required:!1,default:1},mode:{type:String,required:!1,default:"all"}},setup(e){const n=e,s=R(V);function o(i,c=1){if(c>Number(n.maxDepth))return[];if(c<Number(n.minDepth)){const u=i.find(p=>p.active||p.activeParent);return u?o(u.children,c+1):[]}return i.map(u=>({...u,children:o(u.children,c+1)}))}function r(i){return i.filter(c=>c.active||c.activeParent||c.hasActiveParent).map(c=>({...c,children:r(c.children)}))}function l(i){const c=i.some(u=>u.active||u.activeParent||u.hasActiveParent);return i.filter(()=>c).map(u=>({...u,children:l(u.children)}))}const a=$(()=>{const i=s==null?void 0:s.nav.tree;if(!i)return[];let c=o(i);return n.mode==="onlyCurrentTree"?c=r(c):n.mode==="onlySiblings"&&(c=l(c)),c});return(i,c)=>{const u=j6;return _(),F("div",{class:"slidev-toc",style:et(`column-count:${i.columns}`)},[M(u,{level:1,list:a.value,"list-class":i.listClass},null,8,["list","list-class"])],4)}}}),H6=z(W6,[["__file","/home/ben/Workspace/demystifying-unicode/node_modules/@slidev/client/builtin/Toc.vue"]]),V6=t("h1",null,"Table of contents",-1),z6={__name:"3",setup(e){const n={hideInToc:!0};return R(V),(s,o)=>{const r=H6;return _(),W(Te,le(re(n)),{default:P(()=>[V6,M(r,{maxDepth:"1"})]),_:1},16)}}},K6=z(z6,[["__file","/@slidev/slides/3.md"]]),G6=t("h1",null,"History",-1),Y6={__name:"4",setup(e){const n={layout:"cover",hide:!1,srcSequence:"./pages/01-history.md"};return R(V),(s,o)=>(_(),W(Gs,le(re(n)),{default:P(()=>[G6]),_:1},16))}},Q6=z(Y6,[["__file","/@slidev/slides/4.md"]]),Vu=["ul","ol"],Qt=Ae({props:{depth:{type:[Number,String],default:1},every:{type:Number,default:1},at:{type:[Number,String],default:null},hide:{type:Boolean,default:!1},fade:{type:Boolean,default:!1}},render(){var i,c;const e=Vn("click"),n=Vn("after"),s=(u,p,d)=>wt(u,[[p,d,"",{hide:this.hide,fade:this.fade}]]);let o=(c=(i=this.$slots).default)==null?void 0:c.call(i);if(!o)return;o=Zd(o);const r=(u,p=1)=>{let d=0;return[u.map(y=>{if(!un(y))return y;if(Vu.includes(y.type)&&Array.isArray(y.children)){const[m,b]=a(y.children,p+1);return d+=b,Xe(y,{},[m])}return Xe(y)}),d]};let l=0;const a=(u,p=1)=>{let d=0;return[u.map(y=>{if(!un(y)||y.type===it)return y;const m=d%this.every===0?e:n;let b,A=0;if(p<+this.depth&&Array.isArray(y.children)){const[C,x]=r(y.children,p);b=Xe(y,{},[C]),A=x,d+=x+1}else b=Xe(y),d++;const w=this.at!=null?Number(this.at)+Math.floor(l/this.every)+p:(p-1-A).toString();return l++,s(b,m,typeof w=="string"&&!w.startsWith("-")?`+${w}`:w)}),d]};return o.length===1&&Vu.includes(o[0].type)&&Array.isArray(o[0].children)?Xe(o[0],{},[a(o[0].children)[0]]):a(o)[0]}}),Z6=t("h2",null,"A bit (🥁鈸) of fundamentals",-1),J6=t("div",{class:"mt-5"},[t("blockquote",null,[t("p",null,"Computers represent information as 1’s and 0’s"),t("ul",null,[t("li",null,"Literally everyone, since forever")])])],-1),X6=t("p",null,"Multiple bits can be put together to make different structures.",-1),e2=t("p",null,"Those structures are inherently computer orientated - not human orientated:",-1),t2=t("ul",null,[t("li",null,[t("p",null,"8 bits makes a byte")]),t("li",null,[t("p",null,"4/8 bytes makes a word on 32/64 bit architectures respectively"),t("p",null,[t("sup",null,'(last you’ll heard of "words" in this presentation)')])])],-1),n2={__name:"5",setup(e){const n={hide:!1,srcSequence:"./pages/01-history.md"};return R(V),(s,o)=>{const r=Qt;return _(),W(Te,le(re(n)),{default:P(()=>[Z6,J6,M(r,null,{default:P(()=>[X6,e2,t2]),_:1})]),_:1},16)}}},s2=z(n2,[["__file","/@slidev/slides/5.md"]]),gt=Ae({props:{at:{type:[Number,String],default:null},hide:{type:Boolean,default:!1},fade:{type:Boolean,default:!1}},render(){return M(Qt,{every:99999,at:this.at,hide:this.hide,fade:this.fade},{default:this.$slots.default})}}),o2=t("h2",null,"Abstraction",-1),r2=t("div",{class:"mt-5"},[t("blockquote",null,[t("p",null,"Let’s make an abstraction so we can understand things better"),t("ul",null,[t("li",null,"Literally every developer, since forever")])])],-1),l2=t("p",null,[t("code",null,"C"),f(" abstracted things a little further:")],-1),a2=t("ul",null,[t("li",null,[t("p",null,[t("code",null,"bool"),f(" is a 1 bit")])]),t("li",null,[t("p",null,[t("code",null,"char"),f(" is a 8 bits")])]),t("li",null,[t("p",null,[t("code",null,"int"),f(" is ambiguous")]),t("p",null,[f('More common "nowadays": '),t("code",null,"uint8_t"),f(", "),t("code",null,"uint32_t"),f(", "),t("code",null,"int8_t"),f(", etc")])]),t("li",null,[t("p",null,[t("code",null,"long"),f(" also ambiguous, but >= "),t("code",null,"int")])])],-1),i2=t("p",null,[f("But - what really "),t("strong",null,"is"),f(" a "),t("code",null,"char"),f("?")],-1),c2=t("p",null,"And what really are characters?",-1),u2={__name:"6",setup(e){const n={hide:!1,srcSequence:"./pages/01-history.md"};return R(V),(s,o)=>{const r=Qt,l=gt;return _(),W(Te,le(re(n)),{default:P(()=>[o2,r2,l2,M(r,null,{default:P(()=>[a2]),_:1}),M(l,null,{default:P(()=>[i2,c2]),_:1})]),_:1},16)}}},p2=z(u2,[["__file","/@slidev/slides/6.md"]]),d2=t("h2",null,"Abstract? ABSTRACT!",-1),f2=t("p",null,"Quiz time - what does this say:",-1),h2=t("pre",{class:"shiki-container"},[t("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#dbd7ca"}},"01001000 01100101 01101100 01101100 01101111 00100000")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#dbd7ca"}},"01010111 01101111 01110010 01101100 01100100 00100001")])])]),t("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#393a34"}},"01001000 01100101 01101100 01101100 01101111 00100000")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393a34"}},"01010111 01101111 01110010 01101100 01100100 00100001")])])])],-1),y2=t("p",null,[t("code",null,"00100000"),f(" = "),t("code",null,"0x20"),f(" = "),t("code",null," "),t("span",{class:"pl-15"},[t("code",null,"00100001"),f(" = "),t("code",null,"0x21"),f(" = "),t("code",null,"!")])],-1),m2=t("hr",null,null,-1),g2=t("pre",{class:"shiki-container"},[t("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#dbd7ca"}},"0100 1000  =  0x48  =  'H'")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#dbd7ca"}},"0110 0101  =  0x65  =  'e'")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#dbd7ca"}},"0110 1100  =  0x6c  =  'l'")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#dbd7ca"}},"0110 1100  =  0x6c  =  'l'")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#dbd7ca"}},"0110 1111  =  0x6f  =  'o'")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#dbd7ca"}},"0010 0000  =  0x20  =  ' '")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#dbd7ca"}},"0101 0111  =  0x57  =  'W'")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#dbd7ca"}},"0110 1111  =  0x6f  =  'o'")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#dbd7ca"}},"0111 0010  =  0x72  =  'r'")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#dbd7ca"}},"0110 1100  =  0x6c  =  'l'")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#dbd7ca"}},"0110 0100  =  0x64  =  'd'")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#dbd7ca"}},"0010 0001  =  0x21  =  '!'")])])]),t("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#393a34"}},"0100 1000  =  0x48  =  'H'")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393a34"}},"0110 0101  =  0x65  =  'e'")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393a34"}},"0110 1100  =  0x6c  =  'l'")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393a34"}},"0110 1100  =  0x6c  =  'l'")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393a34"}},"0110 1111  =  0x6f  =  'o'")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393a34"}},"0010 0000  =  0x20  =  ' '")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393a34"}},"0101 0111  =  0x57  =  'W'")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393a34"}},"0110 1111  =  0x6f  =  'o'")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393a34"}},"0111 0010  =  0x72  =  'r'")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393a34"}},"0110 1100  =  0x6c  =  'l'")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393a34"}},"0110 0100  =  0x64  =  'd'")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393a34"}},"0010 0001  =  0x21  =  '!'")])])])],-1),_2={__name:"7",setup(e){const n={hide:!1,srcSequence:"./pages/01-history.md"};return R(V),(s,o)=>{const r=gt;return _(),W(Te,le(re(n)),{default:P(()=>[d2,f2,h2,M(r,null,{default:P(()=>[y2]),_:1}),M(r,null,{default:P(()=>[m2,g2]),_:1})]),_:1},16)}}},v2=z(_2,[["__file","/@slidev/slides/7.md"]]),rh="/demystifying-unicode/standards.png",b2={class:"slidev-layout center h-full grid place-content-center"},x2={class:"my-auto"},w2={__name:"center",setup(e){return R(V),(n,s)=>(_(),F("div",b2,[t("div",x2,[Ct(n.$slots,"default")])]))}},nt=z(w2,[["__file","/home/ben/Workspace/demystifying-unicode/node_modules/@slidev/client/layouts/center.vue"]]),A2=t("div",{class:"flex flex-col"},[t("img",{src:rh,class:"center"}),t("p",{class:"text-3"}," Alt: Fortunately, the charging one has been solved now that we've all standardized on mini-USB. Or is it micro-USB? Shit. ")],-1),C2=t("footer",null,[t("p",null,[f("Source: "),t("a",{href:"https://xkcd.com/927/",target:"_blank",rel:"noopener"},"https://xkcd.com/927/")])],-1),B2={__name:"8",setup(e){const n={layout:"center",hide:!1,srcSequence:"./pages/01-history.md"};return R(V),(s,o)=>(_(),W(nt,le(re(n)),{default:P(()=>[A2,C2]),_:1},16))}},k2=z(B2,[["__file","/@slidev/slides/8.md"]]),E2=t("h2",null,"Competing standards",-1),F2=t("ul",null,[t("li",null,[t("s",null,"ANSI (American National Standards Institue) Characters"),f(" Windows code pages, Code Page 437")]),t("li",null,"ASCII (American Standard Code for Information Interchange) Characters")],-1),S2={class:"mt-10"},D2=t("pre",{class:"shiki-container"},[t("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#dbd7ca"}},'┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫ Cool "App" 3000 ┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓')]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#dbd7ca"}},"┃                                                                                     ┃ ")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#dbd7ca"}},"┃                                                                                     ┃ ")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#dbd7ca"}},"┃                                                                                     ┃ ")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#dbd7ca"}},"┃                                                                                     ┃ ")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#dbd7ca"}},"┃                    ┏━━━━━━━━━━━━━━━━━━┫ Prompt ┣━━━━━━━━━━━━━━━━┓                   ┃")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#dbd7ca"}},"┃                    ┃                                            ┃                   ┃ ")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#dbd7ca"}},"┃                    ┃ DO YOU WANT YOUR LANGAUGE TO BE SUPPORTED? ┃                   ┃")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#dbd7ca"}},"┃                    ┃                                            ┃                   ┃")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#dbd7ca"}},"┃                    ┗━━━━━━━━━━━━━━━━━━┫ No ┣━┫ >Nah not even< ┣━┛                   ┃")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#dbd7ca"}},"┃                                                                                     ┃ ")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#dbd7ca"}},"┃                                                                                     ┃ ")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#dbd7ca"}},"┃                                                                                     ┃ ")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#dbd7ca"}},"┃                                                                                     ┃ ")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#dbd7ca"}},"┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛")])])]),t("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#393a34"}},'┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫ Cool "App" 3000 ┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓')]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393a34"}},"┃                                                                                     ┃ ")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393a34"}},"┃                                                                                     ┃ ")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393a34"}},"┃                                                                                     ┃ ")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393a34"}},"┃                                                                                     ┃ ")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393a34"}},"┃                    ┏━━━━━━━━━━━━━━━━━━┫ Prompt ┣━━━━━━━━━━━━━━━━┓                   ┃")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393a34"}},"┃                    ┃                                            ┃                   ┃ ")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393a34"}},"┃                    ┃ DO YOU WANT YOUR LANGAUGE TO BE SUPPORTED? ┃                   ┃")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393a34"}},"┃                    ┃                                            ┃                   ┃")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393a34"}},"┃                    ┗━━━━━━━━━━━━━━━━━━┫ No ┣━┫ >Nah not even< ┣━┛                   ┃")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393a34"}},"┃                                                                                     ┃ ")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393a34"}},"┃                                                                                     ┃ ")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393a34"}},"┃                                                                                     ┃ ")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393a34"}},"┃                                                                                     ┃ ")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393a34"}},"┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛")])])])],-1),T2=t("p",null,"🙇 IBM - You helped us draw instead of supporting languages.",-1),$2=[D2,T2],O2={__name:"9",setup(e){const n={hide:!1,srcSequence:"./pages/01-history.md"};return R(V),(s,o)=>{const r=Vn("click");return _(),W(Te,le(re(n)),{default:P(()=>[E2,F2,wt((_(),F("div",S2,$2)),[[r]])]),_:1},16)}}},U2=z(O2,[["__file","/@slidev/slides/9.md"]]),P2="/demystifying-unicode/Codepage-437.png",I2="/demystifying-unicode/Codepage-737.png",M2=t("h2",null,"About ol ASCII - QQ",-1),L2=t("div",{class:"flex flex-row flex-items-stretch"},[t("div",{class:"text-center"},[t("p",null,[t("strong",null,"IBM 437")]),t("img",{class:"w-120",src:P2,alt:"An example of the characters on the commonly used IBM437 codepage"})]),t("div",{class:"text-center"},[t("p",null,[t("strong",null,"IBM 737")]),t("img",{class:"w-120 mt-5",src:I2,alt:"An example of the characters on IBM737 which shows greek characters above the 0x7F range"})])],-1),R2=t("div",{class:"absolute border-5 top-35 left-12 right-12 bottom-76 border-red"},null,-1),N2=t("ul",null,[t("li",null,[f("ASCII standardized 0x00…0x7F"),t("pre",{class:"shiki-container"},[t("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#dbd7ca"}},"␀␁␂␃␄␅␆␇␈␉␊␋␌␍␎␏␐␑␒␓␔␕␖␗␘␙␚␛␜␝␞␟")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#dbd7ca"}},`␠!"#$%&'()*+,-./0123456789:;<=>?`)]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#dbd7ca"}},"@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#dbd7ca"}},"`abcdefghijklmnopqrstuvwxyz{|}~␡")])])]),t("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#393a34"}},"␀␁␂␃␄␅␆␇␈␉␊␋␌␍␎␏␐␑␒␓␔␕␖␗␘␙␚␛␜␝␞␟")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393a34"}},`␠!"#$%&'()*+,-./0123456789:;<=>?`)]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393a34"}},"@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393a34"}},"`abcdefghijklmnopqrstuvwxyz{|}~␡")])])])])]),t("li",null,[f("∴ "),t("code",null,"0x00..0x7F"),f(" was common between many code pages")])],-1),q2={__name:"10",setup(e){const n={hide:!1,srcSequence:"./pages/01-history.md"};return R(V),(s,o)=>{const r=gt,l=Qt;return _(),W(Te,le(re(n)),{default:P(()=>[M2,L2,M(r,null,{default:P(()=>[R2]),_:1}),M(l,null,{default:P(()=>[N2]),_:1})]),_:1},16)}}},j2=z(q2,[["__file","/@slidev/slides/10.md"]]),W2=t("h2",null,"How many characters is enough charcters?",-1),H2=t("p",{class:"pt-5"},[t("p",null,[t("strong",null,"DIN 91379"),f(' - Characters and character sequences for processing names and data exchange in europe"')])],-1),V2=t("table",null,[t("thead",null,[t("tr",null,[t("th"),t("th")])]),t("tbody",null,[t("tr",null,[t("td",null,"Base Latin Letters: 649"),t("td",null,"enl: 42")]),t("tr",null,[t("td",null,"Combinging Diacritics: 19"),t("td",null,"bnlreq: 17")]),t("tr",null,[t("td",null,"Greek Letters: 68"),t("td",null,"bnl: 59")]),t("tr",null,[t("td",null,"Cyrillic Letters: 61"),t("td",null,"bnlopt: 8")]),t("tr",null,[t("td"),t("td",null,"bnlnot: 2")])])],-1),z2=t("p",null,[t("strong",null,"💣 8 bits isn’t going to be enough 💣")],-1),K2=t("footer",null,[t("p",null,[f("DIN 91379: "),t("a",{href:"https://github.com/String-Latin/DIN-91379-Characters-and-Sequences",target:"_blank",rel:"noopener"},"https://github.com/String-Latin/DIN-91379-Characters-and-Sequences")])],-1),G2={__name:"11",setup(e){const n={hide:!1,srcSequence:"./pages/01-history.md"};return R(V),(s,o)=>{const r=Qt;return _(),W(Te,le(re(n)),{default:P(()=>[W2,H2,V2,M(r,null,{default:P(()=>[z2]),_:1}),K2]),_:1},16)}}},Y2=z(G2,[["__file","/@slidev/slides/11.md"]]),Q2=t("h2",null,"Summary",-1),Z2=t("p",null,[f("Computers know bits - "),t("code",null,"1"),f("s and "),t("code",null,"0"),f("s")],-1),J2=t("p",null,"Bits are not human structures - so we abstract",-1),X2=t("p",null,[t("code",null,"char"),f(" isn’t a character, it’s just a "),t("code",null,"uint8_t"),f(" with a fancy name")],-1),eC=t("p",null,"We need a whole lot more bits if we more than just names and dates in europe",-1),tC={__name:"12",setup(e){const n={layout:"center",hide:!1,srcSequence:"./pages/01-history.md"};return R(V),(s,o)=>{const r=Qt;return _(),W(nt,le(re(n)),{default:P(()=>[Q2,M(r,null,{default:P(()=>[Z2,J2,X2,eC]),_:1})]),_:1},16)}}},nC=z(tC,[["__file","/@slidev/slides/12.md"]]),sC=t("h1",null,"Unicode",-1),oC={__name:"13",setup(e){const n={layout:"cover",hide:!1,srcSequence:"./pages/02-unicode.md"};return R(V),(s,o)=>(_(),W(Gs,le(re(n)),{default:P(()=>[sC]),_:1},16))}},rC=z(oC,[["__file","/@slidev/slides/13.md"]]),lC=t("h2",null,"Why Unicode?",-1),aC=t("ol",null,[t("li",null,"Codepages/charmaps? System dependant"),t("li",null,"Unique characters? Duplication everywhere"),t("li",null,"Display more than one codepage/charmap at a time? ␎␏␎␏␎␏␎␏"),t("li",null,"Text from outside of Europe? :ha:")],-1),iC={__name:"14",setup(e){const n={hide:!1,srcSequence:"./pages/02-unicode.md"};return R(V),(s,o)=>{const r=Qt;return _(),W(Te,le(re(n)),{default:P(()=>[lC,M(r,null,{default:P(()=>[aC]),_:1})]),_:1},16)}}},cC=z(iC,[["__file","/@slidev/slides/14.md"]]);const uC=e=>(sd("data-v-d13ddf34"),e=e(),od(),e),pC=uC(()=>t("div",{class:"absolute top-0 left-0 the-internet flex justify-center items-center text-30"},[t("p",{class:"text-shadow-xl color-white text-shadow-color-red"},"The Internet")],-1)),dC={__name:"15",setup(e){const n={layout:"center",hide:!1,srcSequence:"./pages/02-unicode.md"};return R(V),(s,o)=>(_(),W(nt,le(re(n)),{default:P(()=>[pC]),_:1},16))}},fC=z(dC,[["__scopeId","data-v-d13ddf34"],["__file","/@slidev/slides/15.md"]]),hC=t("h2",null,"Unicode to the resque",-1),yC=t("ul",null,[t("li",null,"Universal"),t("li",null,"Efficient"),t("li",null,"Unambiguous")],-1),mC={__name:"16",setup(e){const n={layout:"center",hide:!1,srcSequence:"./pages/02-unicode.md"};return R(V),(s,o)=>{const r=gt;return _(),W(nt,le(re(n)),{default:P(()=>[hC,M(r,null,{default:P(()=>[yC]),_:1})]),_:1},16)}}},gC=z(mC,[["__file","/@slidev/slides/16.md"]]),_C=t("h2",null,"New Terminology",-1),vC=t("table",null,[t("thead",null,[t("tr",null,[t("th"),t("th"),t("th")])]),t("tbody",null,[t("tr",null,[t("td",null,"Glyph"),t("td",null,"‽"),t("td",null,"How it actually looks, defined by the font")]),t("tr",null,[t("td",null,"Codepoint"),t("td",null,"U+203D"),t("td",null,"Unique identifier for this character")]),t("tr",null,[t("td",null,"Character"),t("td",null,"Interrobang"),t("td",null,"Description of the codepoint")]),t("tr",null,[t("td",null,"Block"),t("td",null,"General Punctuation, U+2000 - U+206F"),t("td",null,"The range of codepoints for a specific purpose")]),t("tr",null,[t("td",null,"Plane"),t("td",null,"Basic Multilingual Plane, U+0000 - U+FFFF"),t("td",null,"The wide group of codepoints")])])],-1),bC=t("footer",null,[t("p",null,[f("Ref: Characters and Glyphs "),t("a",{href:"https://www.unicode.org/versions/Unicode15.0.0/ch01.pdf",target:"_blank",rel:"noopener"},"https://www.unicode.org/versions/Unicode15.0.0/ch01.pdf")])],-1),xC={__name:"17",setup(e){const n={hide:!1,srcSequence:"./pages/02-unicode.md"};return R(V),(s,o)=>(_(),W(Te,le(re(n)),{default:P(()=>[_C,vC,bC]),_:1},16))}},wC=z(xC,[["__file","/@slidev/slides/17.md"]]),AC="/demystifying-unicode/glyph-codepoint-character.jpg",CC=t("img",{src:AC,alt:"Triple spiderman meme, glyph, codepoint, character pointing at each other"},null,-1),BC={__name:"18",setup(e){const n={layout:"center",hide:!1,srcSequence:"./pages/02-unicode.md"};return R(V),(s,o)=>(_(),W(nt,le(re(n)),{default:P(()=>[CC]),_:1},16))}},kC=z(BC,[["__file","/@slidev/slides/18.md"]]),EC="/demystifying-unicode/no_chars_yes_glyphs.jpg",FC=t("img",{src:EC,alt:"Drake no: characters. Drake yes: glyphs"},null,-1),SC={__name:"19",setup(e){const n={layout:"center",hide:!1,srcSequence:"./pages/02-unicode.md"};return R(V),(s,o)=>(_(),W(nt,le(re(n)),{default:P(()=>[FC]),_:1},16))}},DC=z(SC,[["__file","/@slidev/slides/19.md"]]),TC=Ae({__name:"two-cols",props:{class:{type:String},layoutClass:{type:String}},setup(e){const n=e;return R(V),(s,o)=>(_(),F("div",{class:Re(["slidev-layout two-columns w-full h-full grid grid-cols-2",n.layoutClass])},[t("div",{class:Re(["col-left",n.class])},[Ct(s.$slots,"default")],2),t("div",{class:Re(["col-right",n.class])},[Ct(s.$slots,"right")],2)],2))}}),$C=z(TC,[["__file","/home/ben/Workspace/demystifying-unicode/node_modules/@slidev/client/layouts/two-cols.vue"]]),OC=t("h2",null,"Glyphemes",-1),UC=t("div",{class:"codepoint"},[t("div",{class:"glyph"},"é"),t("div",{class:"code"},"U+00e9")],-1),PC=t("div",{class:"codepoint"},[t("div",{class:"glyph"},"é"),t("div",{class:"code"},"U+0065 + U+0301")],-1),IC={__name:"20",setup(e){const n={layout:"two-cols",hide:!1,srcSequence:"./pages/02-unicode.md"};return R(V),(s,o)=>(_(),W($C,le(re(n)),{right:P(r=>[PC]),default:P(()=>[OC,UC]),_:1},16))}},MC=z(IC,[["__file","/@slidev/slides/20.md"]]),LC=t("h2",null,"What is the difference between",-1),RC=t("h2",null,[t("code",null,"Unicode")],-1),NC=t("h2",null,"and",-1),qC=t("h2",null,[t("code",null,"UTF-8")],-1),jC={__name:"21",setup(e){const n={layout:"center",hide:!1,srcSequence:"./pages/02-unicode.md"};return R(V),(s,o)=>(_(),W(nt,le(re(n)),{default:P(()=>[LC,RC,NC,qC]),_:1},16))}},WC=z(jC,[["__file","/@slidev/slides/21.md"]]),HC=t("div",{class:"text-7"},[t("p",null,[t("code",null,"Unicode"),f(' - "The Standard"')]),t("p",null,[t("code",null,"UTF-8"),f(" - Encoding")])],-1),VC={__name:"22",setup(e){const n={layout:"center",hide:!1,srcSequence:"./pages/02-unicode.md"};return R(V),(s,o)=>(_(),W(nt,le(re(n)),{default:P(()=>[HC]),_:1},16))}},zC=z(VC,[["__file","/@slidev/slides/22.md"]]),KC=t("h2",null,"Encoding",-1),GC=t("p",null,[t("strong",null,"DIN 91379"),f(": 925 characters")],-1),YC=t("p",null,"At least 10 bits - (Names/Data exchange in Europe)",-1),QC=t("p",null,"Unicode:",-1),ZC=t("ul",null,[t("li",null,"Supports 1048576 Characters"),t("li",null,"Code space: U+000000 - U+10FFFF"),t("li",null,"Which requires at least 21 bits")],-1),JC=t("footer",null,[t("p",null,"Fun fact: Unicode <2.0 code space was 16-bit wide.")],-1),XC={__name:"23",setup(e){const n={hide:!1,srcSequence:"./pages/02-unicode.md"};return R(V),(s,o)=>{const r=Qt;return _(),W(Te,le(re(n)),{default:P(()=>[KC,M(r,null,{default:P(()=>[GC,YC,QC,ZC]),_:1}),JC]),_:1},16)}}},eB=z(XC,[["__file","/@slidev/slides/23.md"]]),tB=t("div",{class:"flex flex-col"},[t("img",{src:rh,class:"center"}),t("p",{class:"text-3"}," Alt: Fortunately, the charging one has been solved now that we've all standardized on mini-USB. Or is it micro-USB? Shit. ")],-1),nB=t("footer",null,[t("p",null,[f("Source: "),t("a",{href:"https://xkcd.com/927/",target:"_blank",rel:"noopener"},"https://xkcd.com/927/")])],-1),sB={__name:"24",setup(e){const n={layout:"center",hide:!1,srcSequence:"./pages/02-unicode.md"};return R(V),(s,o)=>(_(),W(nt,le(re(n)),{default:P(()=>[tB,nB]),_:1},16))}},oB=z(sB,[["__file","/@slidev/slides/24.md"]]),rB=t("h2",null,"Woo options!",-1),lB=t("p",null,"😻 = U+1F63B = Smiling cat face with heart-shaped eyes",-1),aB=t("table",null,[t("thead",null,[t("tr",null,[t("th"),t("th")])]),t("tbody",null,[t("tr",null,[t("td",null,"UTF-8"),t("td",null,[t("code",null,"0xF0 0x9F 0x98 0xBB")])]),t("tr",null,[t("td",null,"UTF-16BE*"),t("td",null,[t("code",null,"0xD83D 0xDE3B")])]),t("tr",null,[t("td",null,"UTF-16LE"),t("td",null,[t("code",null,"0x3DD8 0x3BDE")])]),t("tr",null,[t("td",null,"UTF-32BE*"),t("td",null,[t("code",null,"0x0001F63B")])]),t("tr",null,[t("td",null,"UTF-32LE"),t("td",null,[t("code",null,"0x3BF60100")])])])],-1),iB=t("p",null,[f("* BE encodings are the default if no BOM "),t("code",null,"\\xFEFF")],-1),cB=t("footer",null,[t("p",null,[f("UTF-21 exists - but it’s a toy encoding hobby project"),t("br")])],-1),uB={__name:"25",setup(e){const n={hide:!1,srcSequence:"./pages/02-unicode.md"};return R(V),(s,o)=>{const r=gt;return _(),W(Te,le(re(n)),{default:P(()=>[rB,lB,M(r,null,{default:P(()=>[aB,iB]),_:1}),cB]),_:1},16)}}},pB=z(uB,[["__file","/@slidev/slides/25.md"]]),dB=t("h2",null,"UTF-8 is the king of the web",-1),fB={__name:"26",setup(e){const n={layout:"center",hide:!1,srcSequence:"./pages/02-unicode.md"};return R(V),(s,o)=>(_(),W(nt,le(re(n)),{default:P(()=>[dB]),_:1},16))}},hB=z(fB,[["__file","/@slidev/slides/26.md"]]),yB=t("h2",null,"Nuts and bolts of UTF-8",-1),mB=t("p",null,"Key points:",-1),gB=t("ul",null,[t("li",null,"Variable width (1-4 bytes)"),t("li",null,"∴ Variable offset between characters"),t("li",null,"The default in Rust (+many more)")],-1),_B=t("hr",null,null,-1),vB=t("table",null,[t("thead",null,[t("tr",null,[t("th",null,"Code point range"),t("th",null,"Byte 1"),t("th",null,"Byte 2"),t("th",null,"Byte 3"),t("th",null,"Byte 4"),t("th",null,"Bit Capacity"),t("th",null,"Code points")])]),t("tbody",null,[t("tr",null,[t("td",null,[t("code",null,"0x000000..0x00007F")]),t("td",null,[t("code",null,"0xxxxxxx")]),t("td"),t("td"),t("td"),t("td",null,"7"),t("td",null,"128")]),t("tr",null,[t("td",null,[t("code",null,"0x000080..0x0007FF")]),t("td",null,[t("code",null,"110xxxxx")]),t("td",null,[t("code",null,"10xxxxxx")]),t("td"),t("td"),t("td",null,"11"),t("td",null,"1920")]),t("tr",null,[t("td",null,[t("code",null,"0x000800..0x00FFFF")]),t("td",null,[t("code",null,"1110xxxx")]),t("td",null,[t("code",null,"10xxxxxx")]),t("td",null,[t("code",null,"10xxxxxx")]),t("td"),t("td",null,"16"),t("td",null,"63488")]),t("tr",null,[t("td",null,[t("code",null,"0x010000..0x10FFFF")]),t("td",null,[t("code",null,"11110xxx")]),t("td",null,[t("code",null,"10xxxxxx")]),t("td",null,[t("code",null,"10xxxxxx")]),t("td",null,[t("code",null,"10xxxxxx")]),t("td",null,"21"),t("td",null,"1mil+")])])],-1),bB={__name:"27",setup(e){const n={hide:!1,srcSequence:"./pages/02-unicode.md"};return R(V),(s,o)=>{const r=gt;return _(),W(Te,le(re(n)),{default:P(()=>[yB,mB,gB,M(r,null,{default:P(()=>[_B,vB]),_:1})]),_:1},16)}}},xB=z(bB,[["__file","/@slidev/slides/27.md"]]),wB=["width","height"],AB=["id"],CB=["fill"],BB=["x1","y1","x2","y2","stroke","stroke-width","marker-end"],kB=Ae({__name:"Arrow",props:{x1:{type:[Number,String],required:!0},y1:{type:[Number,String],required:!0},x2:{type:[Number,String],required:!0},y2:{type:[Number,String],required:!0},width:{type:[Number,String],required:!1},color:{type:String,required:!1}},setup(e){R(V);const s=xg("abcedfghijklmn",10)();return(o,r)=>(_(),F("svg",{class:"absolute left-0 top-0 pointer-events-none",width:Math.max(+o.x1,+o.x2)+50,height:Math.max(+o.y1,+o.y2)+50},[t("defs",null,[t("marker",{id:T(s),markerUnits:"strokeWidth",markerWidth:10,markerHeight:7,refX:"9",refY:"3.5",orient:"auto"},[t("polygon",{points:"0 0, 10 3.5, 0 7",fill:o.color||"currentColor"},null,8,CB)],8,AB)]),t("line",{x1:+o.x1,y1:+o.y1,x2:+o.x2,y2:+o.y2,stroke:o.color||"currentColor","stroke-width":o.width||2,"marker-end":`url(#${T(s)})`},null,8,BB)],8,wB))}}),lh=z(kB,[["__file","/home/ben/Workspace/demystifying-unicode/node_modules/@slidev/client/builtin/Arrow.vue"]]),EB=t("h2",null,"Let’s encode!",-1),FB=t("p",null,"😻 = U+1F63B = Smiling cat face with heart-shaped eyes",-1),SB=t("p",null,[f("1F63B = "),t("code",null,"0001 1111 0110 0011 1011")],-1),DB=[SB],TB={class:"mt-30"},$B=t("p",null,"We need at least 17 bits of room to encode U+1F63B",-1),OB=t("hr",null,null,-1),UB=t("p",null,[t("code",null,"17 > 7"),f(" ∴ Needs more than 1 byte")],-1),PB=t("p",null,[t("code",null,"17 > 11"),f(" ∴ Needs more than 2 bytes")],-1),IB=t("p",null,[t("code",null,"17 > 16"),f(" ∴ Needs more than 3 bytes")],-1),MB=t("p",null,"∴ We need 4 bytes!",-1),LB=t("p",null,[t("code",null,"1111 0xxx"),f(),t("code",null,"10xx xxxx"),f(),t("code",null,"10xx xxxx"),f(),t("code",null,"10xx xxxx")],-1),RB=[OB,UB,PB,IB,MB,LB],NB={__name:"28",setup(e){const n={hide:!1,srcSequence:"./pages/02-unicode.md"};return R(V),(s,o)=>{const r=lh,l=Vn("click");return _(),W(Te,le(re(n)),{default:P(()=>[EB,FB,wt((_(),F("p",null,DB)),[[l]]),wt((_(),F("div",TB,[M(r,{x1:"250",y1:"250",x2:"170",y2:"160",width:"5"}),$B])),[[l]]),wt((_(),F("div",null,RB)),[[l]])]),_:1},16)}}},qB=z(NB,[["__file","/@slidev/slides/28.md"]]);const Ve=e=>(sd("data-v-224221b4"),e=e(),od(),e),jB=Ve(()=>t("h2",null,"Let’s encode!",-1)),WB=Ve(()=>t("p",null,"😻 = U+1F63B = Smiling cat face with heart-shaped eyes",-1)),HB=Ve(()=>t("p",null,[f("0x1F63B = "),t("code",null,"0001 1111 0110 0011 1011")],-1)),VB={class:"absolute top-40 left-14"},zB=Ve(()=>t("span",null,"0x1F63B = ",-1)),KB=Ve(()=>t("span",{class:"binary color-red"}," 00",-1)),GB=Ve(()=>t("span",{class:"binary color-blue"},"01 1111",-1)),YB=Ve(()=>t("span",{class:"binary color-green"}," 0110 00",-1)),QB=Ve(()=>t("span",{class:"binary color-yellow"},"11 1011",-1)),ZB=[zB,KB,GB,YB,QB],JB={class:"absolute parts top-40 left-14"},XB=Ve(()=>t("div",{class:"binary color-red absolute part part-1 anim"},"00",-1)),ek=Ve(()=>t("div",{class:"binary color-blue absolute part part-2 anim"},"01 1111",-1)),tk=Ve(()=>t("div",{class:"binary color-green absolute part part-3 no-backtick anim"},"0110 00",-1)),nk=Ve(()=>t("div",{class:"binary color-yellow absolute part part-4 no-backtick anim"},"11 1011",-1)),sk=[XB,ek,tk,nk],ok={class:"absolute top-49 left-31"},rk=Ve(()=>t("span",{class:"binary"},[f("| 1111 0000 = 1111 00"),t("span",{class:"color-red"},"00"),f(" ")],-1)),lk=Ve(()=>t("p",null,[t("span",{class:"binary"},[f("| 1000 0000 = 10"),t("span",{class:"color-blue"},"01 1111"),f(" ")])],-1)),ak=Ve(()=>t("p",null,[t("span",{class:"binary"},[f("| 1000 0000 = 10"),t("span",{class:"color-green"},"01 1000"),f(" ")])],-1)),ik=Ve(()=>t("p",null,[t("span",{class:"binary"},[f("| 1000 0000 = 10"),t("span",{class:"color-yellow"},"11 1011"),f(" ")])],-1)),ck=[rk,lk,ak,ik],uk={class:"absolute top-49 left-86"},pk=Ve(()=>t("span",{class:"binary"}," = 0xF0",-1)),dk=Ve(()=>t("p",null,[t("span",{class:"binary"}," = 0x9F")],-1)),fk=Ve(()=>t("p",null,[t("span",{class:"binary"}," = 0x98")],-1)),hk=Ve(()=>t("p",null,[t("span",{class:"binary"}," = 0xBB")],-1)),yk=[pk,dk,fk,hk],mk={class:"absolute top-90 left-15"},gk=Ve(()=>t("hr",null,null,-1)),_k=Ve(()=>t("p",null,[f("Thus! U+1F63B = "),t("code",null,"\\xF0\\x9F\\x97\\xBB"),f(" in UTF-8")],-1)),vk={__name:"29",setup(e){const n={hide:!1,srcSequence:"./pages/02-unicode.md"};return R(V),(s,o)=>{const r=gt,l=Vn("click");return _(),W(Te,le(re(n)),{default:P(()=>[jB,WB,HB,wt((_(),F("div",VB,ZB)),[[l]]),wt((_(),F("div",JB,sk)),[[l]]),wt((_(),F("div",ok,ck)),[[l]]),wt((_(),F("div",uk,yk)),[[l]]),t("div",mk,[M(r,null,{default:P(()=>[gk,_k]),_:1})])]),_:1},16)}}},bk=z(vk,[["__scopeId","data-v-224221b4"],["__file","/@slidev/slides/29.md"]]),xk=t("h2",null,"Summary",-1),wk=t("p",null,[f("Unicode is a standard. It defeines a dictionary of "),t("code",null,"codepoints"),f(" to their character descriptions")],-1),Ak=t("p",null,"UTF-8 is an Encoding - defined by the Unicode Standard.",-1),Ck=t("p",null,"Encodings help humans interpret bytes as painted glyphs",-1),Bk=t("p",null,"UTF-8 is by far the most common standard due to it’s memory efficiency (e.g. variable space)",-1),kk={__name:"30",setup(e){const n={layout:"center",hide:!1,srcSequence:"./pages/02-unicode.md"};return R(V),(s,o)=>{const r=Qt;return _(),W(nt,le(re(n)),{default:P(()=>[xk,M(r,null,{default:P(()=>[wk,Ak,Ck,Bk]),_:1})]),_:1},16)}}},Ek=z(kk,[["__file","/@slidev/slides/30.md"]]),Fk=t("h1",null,"Unicode in Rust",-1),Sk={__name:"31",setup(e){const n={layout:"cover",hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"};return R(V),(s,o)=>(_(),W(Gs,le(re(n)),{default:P(()=>[Fk]),_:1},16))}},Dk=z(Sk,[["__file","/@slidev/slides/31.md"]]),Tk=t("p",null,"Q: What is the primitive string type in rust?",-1),$k={__name:"32",setup(e){const n={layout:"center",hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"};return R(V),(s,o)=>(_(),W(nt,le(re(n)),{default:P(()=>[Tk]),_:1},16))}},Ok=z($k,[["__file","/@slidev/slides/32.md"]]),Uk=t("p",null,[f("Answer: "),t("code",null,"str")],-1),Pk=t("p",null,[f("Incorrect: "),t("code",null,"String"),f(", "),t("code",null,"&str")],-1),Ik=t("ul",null,[t("li",null,[t("code",null,"&str"),f(" impls "),t("code",null,"AsRef<str>")]),t("li",null,[t("code",null,"String"),f(" impls "),t("code",null,"AsRef<str>")]),t("li",null,[t("code",null,"String"),f(" impls "),t("code",null,"Deref"),f(" to "),t("code",null,"str"),f(" (thus "),t("code",null,"&String"),f(" derefs to "),t("code",null,"&str"),f(")")])],-1),Mk={class:"mt-5"},Lk=t("blockquote",null,[t("p",null,[f("The "),t("code",null,"str"),f(" type, also called a ‘string slice’, is the most primitive string type. It is usually seen in its borrowed form, "),t("code",null,"&str"),f(". It is also the type of string literals, "),t("code",null,"&'static str"),f(".")]),t("p",null,[f("String slices are "),t("strong",null,"always"),f(" valid UTF-8.")])],-1),Rk=[Lk],Nk={__name:"33",setup(e){const n={layout:"center",hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"};return R(V),(s,o)=>{const r=gt,l=Vn("click");return _(),W(nt,le(re(n)),{default:P(()=>[Uk,M(r,null,{default:P(()=>[Pk,Ik]),_:1}),wt((_(),F("div",Mk,Rk)),[[l]])]),_:1},16)}}},qk=z(Nk,[["__file","/@slidev/slides/33.md"]]),jk={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},Wk=t("path",{fill:"currentColor",d:"M200 32h-36.26a47.92 47.92 0 0 0-71.48 0H56a16 16 0 0 0-16 16v168a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16Zm-72 0a32 32 0 0 1 32 32H96a32 32 0 0 1 32-32Zm72 184H56V48h26.75A47.93 47.93 0 0 0 80 64v8a8 8 0 0 0 8 8h80a8 8 0 0 0 8-8v-8a47.93 47.93 0 0 0-2.75-16H200Z"},null,-1),Hk=[Wk];function Vk(e,n){return _(),F("svg",jk,Hk)}const zk={name:"ph-clipboard",render:Vk},Kk={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},Gk=t("path",{fill:"currentColor",d:"M173.66 98.34a8 8 0 0 1 0 11.32l-56 56a8 8 0 0 1-11.32 0l-24-24a8 8 0 0 1 11.32-11.32L112 148.69l50.34-50.35a8 8 0 0 1 11.32 0ZM232 128A104 104 0 1 1 128 24a104.11 104.11 0 0 1 104 104Zm-16 0a88 88 0 1 0-88 88a88.1 88.1 0 0 0 88-88Z"},null,-1),Yk=[Gk];function Qk(e,n){return _(),F("svg",Kk,Yk)}const Zk={name:"ph-check-circle",render:Qk},Jk=["title"],Xk=Ae({__name:"CodeBlockWrapper",props:{ranges:{default:()=>[]},startLine:{type:Number,default:1},lines:{type:Boolean,default:Se.lineNumbers},at:{type:Number,default:void 0},maxHeight:{type:String,default:void 0}},setup(e){const n=e;R(V);const s=R(vo),o=R(as),r=R(bo);function l(d=5){const h=[],y="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",m=y.length;for(let b=0;b<d;b++)h.push(y.charAt(Math.floor(Math.random()*m)));return h.join("")}const a=Y(),i=$t();Gn(()=>{const d=n.at==null?o==null?void 0:o.value.length:n.at,h=$(()=>r!=null&&r.value?n.ranges.length-1:Math.min(Math.max(0,((s==null?void 0:s.value)||0)-(d||0)),n.ranges.length-1)),y=$(()=>n.ranges[h.value]||"");if(n.ranges.length>=2&&!(r!=null&&r.value)){const m=l(),b=Ag(n.ranges.length-1).map(A=>m+A);o!=null&&o.value&&(o.value.push(...b),fl(()=>b.forEach(A=>wa(o.value,A)),i))}ks(()=>{if(!a.value)return;const b=a.value.querySelector(".shiki-dark")?Array.from(a.value.querySelectorAll(".shiki")):[a.value],A=n.startLine;for(const w of b){const C=Array.from(w.querySelectorAll(".line")),x=nh(C.length+A-1,y.value);if(C.forEach((B,k)=>{const S=x.includes(k+A);B.classList.toggle(ss,!0),B.classList.toggle("highlighted",S),B.classList.toggle("dishonored",!S)}),n.maxHeight){const B=Array.from(w.querySelectorAll(".line.highlighted"));B.reduce((S,L)=>L.offsetHeight+S,0)>a.value.offsetHeight?B[0].scrollIntoView({behavior:"smooth",block:"start"}):B.length>0&&B[Math.round((B.length-1)/2)].scrollIntoView({behavior:"smooth",block:"center"})}}})});const{copied:c,copy:u}=A_();function p(){var h,y;const d=(y=(h=a.value)==null?void 0:h.querySelector(".slidev-code"))==null?void 0:y.textContent;d&&u(d)}return(d,h)=>{const y=Zk,m=zk;return _(),F("div",{ref_key:"el",ref:a,class:Re(["slidev-code-wrapper relative group",{"slidev-code-line-numbers":n.lines}]),style:et({"max-height":n.maxHeight,"overflow-y":n.maxHeight?"scroll":void 0,"--start":n.startLine})},[Ct(d.$slots,"default"),T(Se).codeCopy?(_(),F("button",{key:0,class:"slidev-code-copy absolute top-0 right-0 transition opacity-0 group-hover:opacity-20 hover:!opacity-100",title:T(c)?"Copied":"Copy",onClick:h[0]||(h[0]=b=>p())},[T(c)?(_(),W(y,{key:0,class:"p-2 w-8 h-8"})):(_(),W(m,{key:1,class:"p-2 w-8 h-8"}))],8,Jk)):me("v-if",!0)],6)}}}),Zt=z(Xk,[["__file","/home/ben/Workspace/demystifying-unicode/node_modules/@slidev/client/builtin/CodeBlockWrapper.vue"]]),e7=t("h2",null,"String slices",-1),t7=t("br",null,null,-1),n7=t("blockquote",null,[t("p",null,"Primitive Type slice"),t("p",null,"A dynamically-sized view into a contiguous sequence, [T]. Contiguous here means that elements are laid out so that every element is the same distance from its neighbors.")],-1),s7=t("br",null,null,-1),o7=t("p",null,"What is the output?",-1),r7=t("pre",{class:"shiki-container"},[t("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#4D9375"}},"fn"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#A1B567"}},"main"),t("span",{style:{color:"#858585"}},"()"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#858585"}},"{")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#CB7676"}},"let"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#B8A965"}},"s"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#CB7676"}},"="),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#C98A7D"}},'"İstanbul"'),t("span",{style:{color:"#858585"}},";")]),f(`
`),t("span",{class:"line"}),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#A1B567"}},"println!"),t("span",{style:{color:"#858585"}},"("),t("span",{style:{color:"#C98A7D"}},'"'),t("span",{style:{color:"#858585"}},"{}"),t("span",{style:{color:"#C98A7D"}},'"'),t("span",{style:{color:"#858585"}},","),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#B8A965"}},"s"),t("span",{style:{color:"#CB7676"}},"."),t("span",{style:{color:"#A1B567"}},"len"),t("span",{style:{color:"#858585"}},"());")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#858585"}},"}")])])]),t("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#1C6B48"}},"fn"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#6C7834"}},"main"),t("span",{style:{color:"#8E8F8B"}},"()"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8E8F8B"}},"{")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#AB5959"}},"let"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8C862B"}},"s"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#AB5959"}},"="),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#B56959"}},'"İstanbul"'),t("span",{style:{color:"#8E8F8B"}},";")]),f(`
`),t("span",{class:"line"}),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#6C7834"}},"println!"),t("span",{style:{color:"#8E8F8B"}},"("),t("span",{style:{color:"#B56959"}},'"'),t("span",{style:{color:"#8E8F8B"}},"{}"),t("span",{style:{color:"#B56959"}},'"'),t("span",{style:{color:"#8E8F8B"}},","),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8C862B"}},"s"),t("span",{style:{color:"#AB5959"}},"."),t("span",{style:{color:"#6C7834"}},"len"),t("span",{style:{color:"#8E8F8B"}},"());")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),l7=t("pre",{class:"shiki-container"},[t("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#758575"}},"    //        ^^ 9")])])]),t("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#A0ADA0"}},"    //        ^^ 9")])])])],-1),a7=t("pre",{class:"shiki-container"},[t("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#A1B567"}},"println!"),t("span",{style:{color:"#858585"}},"("),t("span",{style:{color:"#C98A7D"}},'"'),t("span",{style:{color:"#858585"}},"{"),t("span",{style:{color:"#C98A7D"}},":x?"),t("span",{style:{color:"#858585"}},"}"),t("span",{style:{color:"#C98A7D"}},'"'),t("span",{style:{color:"#858585"}},","),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#C98A7D"}},'"İstanbul"'),t("span",{style:{color:"#CB7676"}},"."),t("span",{style:{color:"#A1B567"}},"as_bytes"),t("span",{style:{color:"#858585"}},"());"),t("span",{style:{color:"#758575"}},"   // [c4, b0, 73, 74, 61, 6e, 62, 75, 6c]")])])]),t("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#6C7834"}},"println!"),t("span",{style:{color:"#8E8F8B"}},"("),t("span",{style:{color:"#B56959"}},'"'),t("span",{style:{color:"#8E8F8B"}},"{"),t("span",{style:{color:"#B56959"}},":x?"),t("span",{style:{color:"#8E8F8B"}},"}"),t("span",{style:{color:"#B56959"}},'"'),t("span",{style:{color:"#8E8F8B"}},","),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#B56959"}},'"İstanbul"'),t("span",{style:{color:"#AB5959"}},"."),t("span",{style:{color:"#6C7834"}},"as_bytes"),t("span",{style:{color:"#8E8F8B"}},"());"),t("span",{style:{color:"#A0ADA0"}},"   // [c4, b0, 73, 74, 61, 6e, 62, 75, 6c]")])])])],-1),i7=t("footer",null,[t("p",null,[f("Ref: "),t("a",{href:"https://doc.rust-lang.org/std/primitive.slice.html",target:"_blank",rel:"noopener"},"https://doc.rust-lang.org/std/primitive.slice.html")])],-1),c7={__name:"34",setup(e){const n={hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"};return R(V),(s,o)=>{const r=Zt,l=gt,a=Qt;return _(),W(Te,le(re(n)),{default:P(()=>[e7,t7,n7,s7,M(l,null,{default:P(()=>[o7,M(r,ze({},{ranges:[""]}),{default:P(()=>[r7]),_:1},16)]),_:1}),M(a,null,{default:P(()=>[M(r,ze({},{ranges:[""]}),{default:P(()=>[l7]),_:1},16),M(r,ze({},{ranges:[""]}),{default:P(()=>[a7]),_:1},16)]),_:1}),i7]),_:1},16)}}},u7=z(c7,[["__file","/@slidev/slides/34.md"]]),p7=t("h2",null,[f("A String slice ("),t("code",null,"str"),f(") is just a slice of bytes ("),t("code",null,"[u8]"),f("), "),t("strong",null,"which contents are always valid UTF-8"),f(".")],-1),d7={__name:"35",setup(e){const n={layout:"center",hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"};return R(V),(s,o)=>(_(),W(nt,le(re(n)),{default:P(()=>[p7]),_:1},16))}},f7=z(d7,[["__file","/@slidev/slides/35.md"]]),h7=t("h2",null,"Lets make some strings",-1),y7={__name:"36",setup(e){const n={layout:"center",hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"};return R(V),(s,o)=>(_(),W(nt,le(re(n)),{default:P(()=>[h7]),_:1},16))}},m7=z(y7,[["__file","/@slidev/slides/36.md"]]),g7=t("h2",null,"Creating strings",-1),_7=t("blockquote",null,[t("p",null,[f("String slices are "),t("strong",null,"always"),f(" valid UTF-8.")])],-1),v7=t("p",null,[f("∴ The compiler won’t compile your rust if you try to do non UTF-8 things in "),t("code",null,"&str")],-1),b7=t("pre",{class:"shiki-container"},[t("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#4D9375"}},"fn"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#A1B567"}},"main"),t("span",{style:{color:"#858585"}},"()"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#858585"}},"{")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#758575"}},"    // ASCII chars are always safe!")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#CB7676"}},"let"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#B8A965"}},"s"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#CB7676"}},"="),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#C98A7D"}},'"Hello World"'),t("span",{style:{color:"#858585"}},";"),t("span",{style:{color:"#758575"}},"     // Good")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#CB7676"}},"let"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#B8A965"}},"s"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#CB7676"}},"="),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#C98A7D"}},'"Hello'),t("span",{style:{color:"#D4976C"}},"\\x20"),t("span",{style:{color:"#C98A7D"}},'World"'),t("span",{style:{color:"#858585"}},";"),t("span",{style:{color:"#758575"}},"  // Also good")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#CB7676"}},"let"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#B8A965"}},"s"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#CB7676"}},"="),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#C98A7D"}},'"Hello'),t("span",{style:{color:"#D4976C"}},"\\x7F"),t("span",{style:{color:"#C98A7D"}},'World"'),t("span",{style:{color:"#858585"}},";"),t("span",{style:{color:"#758575"}},"  // Also good (\\x7F is the control character `DEL`)")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#CB7676"}},"let"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#B8A965"}},"s"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#CB7676"}},"="),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#C98A7D"}},'"Hello'),t("span",{style:{color:"#D4976C"}},"\\x"),t("span",{style:{color:"#C98A7D"}},'80World"'),t("span",{style:{color:"#858585"}},";"),t("span",{style:{color:"#758575"}},"  // Fails")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#758575"}},"    //            ^^^^ must be a character in the range [\\x00-\\x7f]")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#858585"}},"}")])])]),t("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#1C6B48"}},"fn"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#6C7834"}},"main"),t("span",{style:{color:"#8E8F8B"}},"()"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8E8F8B"}},"{")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#A0ADA0"}},"    // ASCII chars are always safe!")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#AB5959"}},"let"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8C862B"}},"s"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#AB5959"}},"="),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#B56959"}},'"Hello World"'),t("span",{style:{color:"#8E8F8B"}},";"),t("span",{style:{color:"#A0ADA0"}},"     // Good")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#AB5959"}},"let"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8C862B"}},"s"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#AB5959"}},"="),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#B56959"}},'"Hello'),t("span",{style:{color:"#A65E2B"}},"\\x20"),t("span",{style:{color:"#B56959"}},'World"'),t("span",{style:{color:"#8E8F8B"}},";"),t("span",{style:{color:"#A0ADA0"}},"  // Also good")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#AB5959"}},"let"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8C862B"}},"s"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#AB5959"}},"="),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#B56959"}},'"Hello'),t("span",{style:{color:"#A65E2B"}},"\\x7F"),t("span",{style:{color:"#B56959"}},'World"'),t("span",{style:{color:"#8E8F8B"}},";"),t("span",{style:{color:"#A0ADA0"}},"  // Also good (\\x7F is the control character `DEL`)")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#AB5959"}},"let"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8C862B"}},"s"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#AB5959"}},"="),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#B56959"}},'"Hello'),t("span",{style:{color:"#A65E2B"}},"\\x"),t("span",{style:{color:"#B56959"}},'80World"'),t("span",{style:{color:"#8E8F8B"}},";"),t("span",{style:{color:"#A0ADA0"}},"  // Fails")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#A0ADA0"}},"    //            ^^^^ must be a character in the range [\\x00-\\x7f]")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),x7=t("p",null,"… and for completeness…",-1),w7=t("pre",{class:"shiki-container"},[t("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#4D9375"}},"fn"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#A1B567"}},"main"),t("span",{style:{color:"#858585"}},"()"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#858585"}},"{")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#CB7676"}},"let"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#B8A965"}},"s"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#CB7676"}},"="),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#C98A7D"}},'"Hello'),t("span",{style:{color:"#D4976C"}},"\\u{0020}"),t("span",{style:{color:"#C98A7D"}},'World"'),t("span",{style:{color:"#858585"}},";"),t("span",{style:{color:"#758575"}},"   // Good")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#CB7676"}},"let"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#B8A965"}},"s"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#CB7676"}},"="),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#C98A7D"}},'"Hello'),t("span",{style:{color:"#D4976C"}},"\\u{1F63B}"),t("span",{style:{color:"#C98A7D"}},'World"'),t("span",{style:{color:"#858585"}},";"),t("span",{style:{color:"#758575"}},"   // Good")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#CB7676"}},"let"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#B8A965"}},"s"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#CB7676"}},"="),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#C98A7D"}},'"Hello'),t("span",{style:{color:"#D4976C"}},"\\u{110000}"),t("span",{style:{color:"#C98A7D"}},'World"'),t("span",{style:{color:"#858585"}},";"),t("span",{style:{color:"#758575"}},"  // Fails")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#758575"}},"    //            ^^^^^^^^^^ invalid escape")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#858585"}},"}")])])]),t("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#1C6B48"}},"fn"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#6C7834"}},"main"),t("span",{style:{color:"#8E8F8B"}},"()"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8E8F8B"}},"{")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#AB5959"}},"let"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8C862B"}},"s"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#AB5959"}},"="),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#B56959"}},'"Hello'),t("span",{style:{color:"#A65E2B"}},"\\u{0020}"),t("span",{style:{color:"#B56959"}},'World"'),t("span",{style:{color:"#8E8F8B"}},";"),t("span",{style:{color:"#A0ADA0"}},"   // Good")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#AB5959"}},"let"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8C862B"}},"s"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#AB5959"}},"="),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#B56959"}},'"Hello'),t("span",{style:{color:"#A65E2B"}},"\\u{1F63B}"),t("span",{style:{color:"#B56959"}},'World"'),t("span",{style:{color:"#8E8F8B"}},";"),t("span",{style:{color:"#A0ADA0"}},"   // Good")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#AB5959"}},"let"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8C862B"}},"s"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#AB5959"}},"="),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#B56959"}},'"Hello'),t("span",{style:{color:"#A65E2B"}},"\\u{110000}"),t("span",{style:{color:"#B56959"}},'World"'),t("span",{style:{color:"#8E8F8B"}},";"),t("span",{style:{color:"#A0ADA0"}},"  // Fails")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#A0ADA0"}},"    //            ^^^^^^^^^^ invalid escape")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),A7={__name:"37",setup(e){const n={hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"};return R(V),(s,o)=>{const r=Zt,l=gt;return _(),W(Te,le(re(n)),{default:P(()=>[g7,_7,v7,M(r,ze({},{ranges:[""]}),{default:P(()=>[b7]),_:1},16),M(l,null,{default:P(()=>[x7,M(r,ze({},{ranges:[""]}),{default:P(()=>[w7]),_:1},16)]),_:1})]),_:1},16)}}},C7=z(A7,[["__file","/@slidev/slides/37.md"]]),B7=t("h2",null,"Creating Strings",-1),k7=t("ul",null,[t("li",null,"All strings are a sequence of bytes"),t("li",null,"∴ Rust let’s us create strings from slices/vectors of bytes.")],-1),E7=t("pre",{class:"shiki-container"},[t("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#4D9375"}},"fn"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#A1B567"}},"main"),t("span",{style:{color:"#858585"}},"()"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#858585"}},"{")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#CB7676"}},"let"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#B8A965"}},"cat"),t("span",{style:{color:"#CB7676"}},":"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#858585"}},"["),t("span",{style:{color:"#A1B567"}},"u8"),t("span",{style:{color:"#858585"}},";"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#6394BF"}},"4"),t("span",{style:{color:"#858585"}},"]"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#CB7676"}},"="),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#858585"}},"["),t("span",{style:{color:"#6394BF"}},"0xF0"),t("span",{style:{color:"#858585"}},","),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#6394BF"}},"0x9F"),t("span",{style:{color:"#858585"}},","),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#6394BF"}},"0x98"),t("span",{style:{color:"#858585"}},","),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#6394BF"}},"0xBB"),t("span",{style:{color:"#858585"}},"];")]),f(`
`),t("span",{class:"line"}),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#CB7676"}},"let"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#B8A965"}},"s"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#CB7676"}},"="),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#A1B567"}},"std"),t("span",{style:{color:"#CB7676"}},"::"),t("span",{style:{color:"#A1B567"}},"str"),t("span",{style:{color:"#CB7676"}},"::"),t("span",{style:{color:"#A1B567"}},"from_utf8"),t("span",{style:{color:"#858585"}},"("),t("span",{style:{color:"#CB7676"}},"&"),t("span",{style:{color:"#B8A965"}},"cat"),t("span",{style:{color:"#858585"}},")"),t("span",{style:{color:"#CB7676"}},"."),t("span",{style:{color:"#A1B567"}},"unwrap"),t("span",{style:{color:"#858585"}},"();")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#758575"}},"    // let s = String::from_utf8(cat.to_vec()).unwrap();")]),f(`
`),t("span",{class:"line"}),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#A1B567"}},"println!"),t("span",{style:{color:"#858585"}},"("),t("span",{style:{color:"#C98A7D"}},'"'),t("span",{style:{color:"#858585"}},"{"),t("span",{style:{color:"#C98A7D"}},"s"),t("span",{style:{color:"#858585"}},"}"),t("span",{style:{color:"#C98A7D"}},'"'),t("span",{style:{color:"#858585"}},");")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#758575"}},"    //        ^^^ 😻 ")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#858585"}},"}")])])]),t("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#1C6B48"}},"fn"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#6C7834"}},"main"),t("span",{style:{color:"#8E8F8B"}},"()"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8E8F8B"}},"{")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#AB5959"}},"let"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8C862B"}},"cat"),t("span",{style:{color:"#AB5959"}},":"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8E8F8B"}},"["),t("span",{style:{color:"#6C7834"}},"u8"),t("span",{style:{color:"#8E8F8B"}},";"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#296AA3"}},"4"),t("span",{style:{color:"#8E8F8B"}},"]"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#AB5959"}},"="),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8E8F8B"}},"["),t("span",{style:{color:"#296AA3"}},"0xF0"),t("span",{style:{color:"#8E8F8B"}},","),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#296AA3"}},"0x9F"),t("span",{style:{color:"#8E8F8B"}},","),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#296AA3"}},"0x98"),t("span",{style:{color:"#8E8F8B"}},","),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#296AA3"}},"0xBB"),t("span",{style:{color:"#8E8F8B"}},"];")]),f(`
`),t("span",{class:"line"}),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#AB5959"}},"let"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8C862B"}},"s"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#AB5959"}},"="),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#6C7834"}},"std"),t("span",{style:{color:"#AB5959"}},"::"),t("span",{style:{color:"#6C7834"}},"str"),t("span",{style:{color:"#AB5959"}},"::"),t("span",{style:{color:"#6C7834"}},"from_utf8"),t("span",{style:{color:"#8E8F8B"}},"("),t("span",{style:{color:"#AB5959"}},"&"),t("span",{style:{color:"#8C862B"}},"cat"),t("span",{style:{color:"#8E8F8B"}},")"),t("span",{style:{color:"#AB5959"}},"."),t("span",{style:{color:"#6C7834"}},"unwrap"),t("span",{style:{color:"#8E8F8B"}},"();")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#A0ADA0"}},"    // let s = String::from_utf8(cat.to_vec()).unwrap();")]),f(`
`),t("span",{class:"line"}),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#6C7834"}},"println!"),t("span",{style:{color:"#8E8F8B"}},"("),t("span",{style:{color:"#B56959"}},'"'),t("span",{style:{color:"#8E8F8B"}},"{"),t("span",{style:{color:"#B56959"}},"s"),t("span",{style:{color:"#8E8F8B"}},"}"),t("span",{style:{color:"#B56959"}},'"'),t("span",{style:{color:"#8E8F8B"}},");")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#A0ADA0"}},"    //        ^^^ 😻 ")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),F7=t("p",null,"… and we can create byte sequences from strings even! (thanks compiler!)",-1),S7=t("pre",{class:"shiki-container"},[t("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#4D9375"}},"fn"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#A1B567"}},"main"),t("span",{style:{color:"#858585"}},"()"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#858585"}},"{")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#CB7676"}},"let"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#B8A965"}},"s"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#CB7676"}},"="),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#C98A7D"}},'b"Hello World!"'),t("span",{style:{color:"#858585"}},";")]),f(`
`),t("span",{class:"line"}),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#A1B567"}},"assert_eq!"),t("span",{style:{color:"#858585"}},"("),t("span",{style:{color:"#B8A965"}},"s"),t("span",{style:{color:"#858585"}},","),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#CB7676"}},"&"),t("span",{style:{color:"#858585"}},"["),t("span",{style:{color:"#6394BF"}},"72"),t("span",{style:{color:"#858585"}},","),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#6394BF"}},"101"),t("span",{style:{color:"#858585"}},","),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#6394BF"}},"108"),t("span",{style:{color:"#858585"}},","),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#6394BF"}},"108"),t("span",{style:{color:"#858585"}},","),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#6394BF"}},"111"),t("span",{style:{color:"#858585"}},","),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#6394BF"}},"32"),t("span",{style:{color:"#858585"}},","),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#6394BF"}},"87"),t("span",{style:{color:"#858585"}},","),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#6394BF"}},"111"),t("span",{style:{color:"#858585"}},","),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#6394BF"}},"114"),t("span",{style:{color:"#858585"}},","),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#6394BF"}},"108"),t("span",{style:{color:"#858585"}},","),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#6394BF"}},"100"),t("span",{style:{color:"#858585"}},","),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#6394BF"}},"33"),t("span",{style:{color:"#858585"}},"]);"),t("span",{style:{color:"#758575"}},"  // passes")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#858585"}},"}")])])]),t("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#1C6B48"}},"fn"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#6C7834"}},"main"),t("span",{style:{color:"#8E8F8B"}},"()"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8E8F8B"}},"{")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#AB5959"}},"let"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8C862B"}},"s"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#AB5959"}},"="),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#B56959"}},'b"Hello World!"'),t("span",{style:{color:"#8E8F8B"}},";")]),f(`
`),t("span",{class:"line"}),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#6C7834"}},"assert_eq!"),t("span",{style:{color:"#8E8F8B"}},"("),t("span",{style:{color:"#8C862B"}},"s"),t("span",{style:{color:"#8E8F8B"}},","),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#AB5959"}},"&"),t("span",{style:{color:"#8E8F8B"}},"["),t("span",{style:{color:"#296AA3"}},"72"),t("span",{style:{color:"#8E8F8B"}},","),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#296AA3"}},"101"),t("span",{style:{color:"#8E8F8B"}},","),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#296AA3"}},"108"),t("span",{style:{color:"#8E8F8B"}},","),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#296AA3"}},"108"),t("span",{style:{color:"#8E8F8B"}},","),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#296AA3"}},"111"),t("span",{style:{color:"#8E8F8B"}},","),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#296AA3"}},"32"),t("span",{style:{color:"#8E8F8B"}},","),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#296AA3"}},"87"),t("span",{style:{color:"#8E8F8B"}},","),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#296AA3"}},"111"),t("span",{style:{color:"#8E8F8B"}},","),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#296AA3"}},"114"),t("span",{style:{color:"#8E8F8B"}},","),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#296AA3"}},"108"),t("span",{style:{color:"#8E8F8B"}},","),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#296AA3"}},"100"),t("span",{style:{color:"#8E8F8B"}},","),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#296AA3"}},"33"),t("span",{style:{color:"#8E8F8B"}},"]);"),t("span",{style:{color:"#A0ADA0"}},"  // passes")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),D7={__name:"38",setup(e){const n={hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"};return R(V),(s,o)=>{const r=Zt,l=gt;return _(),W(Te,le(re(n)),{default:P(()=>[B7,k7,M(r,ze({},{ranges:[""]}),{default:P(()=>[E7]),_:1},16),M(l,null,{default:P(()=>[F7,M(r,ze({},{ranges:[""]}),{default:P(()=>[S7]),_:1},16)]),_:1})]),_:1},16)}}},T7=z(D7,[["__file","/@slidev/slides/38.md"]]),$7=t("h2",null,"Creating strings",-1),O7=t("p",null,[f("Even "),t("code",null,"char"),f(" primitives!")],-1),U7=t("pre",{class:"shiki-container"},[t("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#4D9375"}},"fn"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#A1B567"}},"main"),t("span",{style:{color:"#858585"}},"()"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#858585"}},"{")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#CB7676"}},"let"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#B8A965"}},"s"),t("span",{style:{color:"#CB7676"}},":"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#858585"}},"["),t("span",{style:{color:"#A1B567"}},"char"),t("span",{style:{color:"#858585"}},";"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#6394BF"}},"4"),t("span",{style:{color:"#858585"}},"]"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#CB7676"}},"="),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#858585"}},"[")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"        "),t("span",{style:{color:"#858585"}},"'"),t("span",{style:{color:"#C98A7D"}},"H"),t("span",{style:{color:"#858585"}},"'"),t("span",{style:{color:"#858585"}},",")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"        "),t("span",{style:{color:"#A1B567"}},"char"),t("span",{style:{color:"#CB7676"}},"::"),t("span",{style:{color:"#A1B567"}},"from_u32"),t("span",{style:{color:"#858585"}},"("),t("span",{style:{color:"#6394BF"}},"0x69"),t("span",{style:{color:"#858585"}},")"),t("span",{style:{color:"#CB7676"}},"."),t("span",{style:{color:"#A1B567"}},"unwrap"),t("span",{style:{color:"#858585"}},"(),")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"        "),t("span",{style:{color:"#4D9375"}},"unsafe"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#858585"}},"{"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#A1B567"}},"char"),t("span",{style:{color:"#CB7676"}},"::"),t("span",{style:{color:"#A1B567"}},"from_u32_unchecked"),t("span",{style:{color:"#858585"}},"("),t("span",{style:{color:"#6394BF"}},"0x20"),t("span",{style:{color:"#858585"}},")"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#858585"}},"},")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"        "),t("span",{style:{color:"#858585"}},"'"),t("span",{style:{color:"#D4976C"}},"\\u{1F63B}"),t("span",{style:{color:"#858585"}},"'")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#858585"}},"];")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#A1B567"}},"println!"),t("span",{style:{color:"#858585"}},"("),t("span",{style:{color:"#C98A7D"}},'"'),t("span",{style:{color:"#858585"}},"{}"),t("span",{style:{color:"#C98A7D"}},'"'),t("span",{style:{color:"#858585"}},","),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#B8A965"}},"s"),t("span",{style:{color:"#CB7676"}},"."),t("span",{style:{color:"#A1B567"}},"len"),t("span",{style:{color:"#858585"}},"()"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#CB7676"}},"*"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#A1B567"}},"std"),t("span",{style:{color:"#CB7676"}},"::"),t("span",{style:{color:"#A1B567"}},"mem"),t("span",{style:{color:"#CB7676"}},"::"),t("span",{style:{color:"#A1B567"}},"size_of"),t("span",{style:{color:"#CB7676"}},"::"),t("span",{style:{color:"#858585"}},"<"),t("span",{style:{color:"#A1B567"}},"char"),t("span",{style:{color:"#858585"}},">());"),t("span",{style:{color:"#758575"}},"  // 16")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    ")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#CB7676"}},"let"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#B8A965"}},"t"),t("span",{style:{color:"#CB7676"}},":"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#A1B567"}},"String"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#CB7676"}},"="),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#B8A965"}},"s"),t("span",{style:{color:"#CB7676"}},"."),t("span",{style:{color:"#A1B567"}},"iter"),t("span",{style:{color:"#858585"}},"()"),t("span",{style:{color:"#CB7676"}},"."),t("span",{style:{color:"#A1B567"}},"collect"),t("span",{style:{color:"#858585"}},"();")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#A1B567"}},"println!"),t("span",{style:{color:"#858585"}},"("),t("span",{style:{color:"#C98A7D"}},'"'),t("span",{style:{color:"#858585"}},"{}"),t("span",{style:{color:"#C98A7D"}},'"'),t("span",{style:{color:"#858585"}},","),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#B8A965"}},"t"),t("span",{style:{color:"#CB7676"}},"."),t("span",{style:{color:"#A1B567"}},"len"),t("span",{style:{color:"#858585"}},"()"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#CB7676"}},"*"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#A1B567"}},"std"),t("span",{style:{color:"#CB7676"}},"::"),t("span",{style:{color:"#A1B567"}},"mem"),t("span",{style:{color:"#CB7676"}},"::"),t("span",{style:{color:"#A1B567"}},"size_of"),t("span",{style:{color:"#CB7676"}},"::"),t("span",{style:{color:"#858585"}},"<"),t("span",{style:{color:"#A1B567"}},"u8"),t("span",{style:{color:"#858585"}},">());"),t("span",{style:{color:"#758575"}},"    // 7")]),f(`
`),t("span",{class:"line"}),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#A1B567"}},"println!"),t("span",{style:{color:"#858585"}},"("),t("span",{style:{color:"#C98A7D"}},'"'),t("span",{style:{color:"#858585"}},"{"),t("span",{style:{color:"#C98A7D"}},"t"),t("span",{style:{color:"#858585"}},"}"),t("span",{style:{color:"#C98A7D"}},'"'),t("span",{style:{color:"#858585"}},");")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#758575"}},'    //        ^^^ "Hi 😻"')]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#858585"}},"}")])])]),t("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#1C6B48"}},"fn"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#6C7834"}},"main"),t("span",{style:{color:"#8E8F8B"}},"()"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8E8F8B"}},"{")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#AB5959"}},"let"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8C862B"}},"s"),t("span",{style:{color:"#AB5959"}},":"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8E8F8B"}},"["),t("span",{style:{color:"#6C7834"}},"char"),t("span",{style:{color:"#8E8F8B"}},";"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#296AA3"}},"4"),t("span",{style:{color:"#8E8F8B"}},"]"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#AB5959"}},"="),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8E8F8B"}},"[")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"        "),t("span",{style:{color:"#8E8F8B"}},"'"),t("span",{style:{color:"#B56959"}},"H"),t("span",{style:{color:"#8E8F8B"}},"'"),t("span",{style:{color:"#8E8F8B"}},",")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"        "),t("span",{style:{color:"#6C7834"}},"char"),t("span",{style:{color:"#AB5959"}},"::"),t("span",{style:{color:"#6C7834"}},"from_u32"),t("span",{style:{color:"#8E8F8B"}},"("),t("span",{style:{color:"#296AA3"}},"0x69"),t("span",{style:{color:"#8E8F8B"}},")"),t("span",{style:{color:"#AB5959"}},"."),t("span",{style:{color:"#6C7834"}},"unwrap"),t("span",{style:{color:"#8E8F8B"}},"(),")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"        "),t("span",{style:{color:"#1C6B48"}},"unsafe"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8E8F8B"}},"{"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#6C7834"}},"char"),t("span",{style:{color:"#AB5959"}},"::"),t("span",{style:{color:"#6C7834"}},"from_u32_unchecked"),t("span",{style:{color:"#8E8F8B"}},"("),t("span",{style:{color:"#296AA3"}},"0x20"),t("span",{style:{color:"#8E8F8B"}},")"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8E8F8B"}},"},")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"        "),t("span",{style:{color:"#8E8F8B"}},"'"),t("span",{style:{color:"#A65E2B"}},"\\u{1F63B}"),t("span",{style:{color:"#8E8F8B"}},"'")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#8E8F8B"}},"];")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#6C7834"}},"println!"),t("span",{style:{color:"#8E8F8B"}},"("),t("span",{style:{color:"#B56959"}},'"'),t("span",{style:{color:"#8E8F8B"}},"{}"),t("span",{style:{color:"#B56959"}},'"'),t("span",{style:{color:"#8E8F8B"}},","),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8C862B"}},"s"),t("span",{style:{color:"#AB5959"}},"."),t("span",{style:{color:"#6C7834"}},"len"),t("span",{style:{color:"#8E8F8B"}},"()"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#AB5959"}},"*"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#6C7834"}},"std"),t("span",{style:{color:"#AB5959"}},"::"),t("span",{style:{color:"#6C7834"}},"mem"),t("span",{style:{color:"#AB5959"}},"::"),t("span",{style:{color:"#6C7834"}},"size_of"),t("span",{style:{color:"#AB5959"}},"::"),t("span",{style:{color:"#8E8F8B"}},"<"),t("span",{style:{color:"#6C7834"}},"char"),t("span",{style:{color:"#8E8F8B"}},">());"),t("span",{style:{color:"#A0ADA0"}},"  // 16")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    ")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#AB5959"}},"let"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8C862B"}},"t"),t("span",{style:{color:"#AB5959"}},":"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#6C7834"}},"String"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#AB5959"}},"="),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8C862B"}},"s"),t("span",{style:{color:"#AB5959"}},"."),t("span",{style:{color:"#6C7834"}},"iter"),t("span",{style:{color:"#8E8F8B"}},"()"),t("span",{style:{color:"#AB5959"}},"."),t("span",{style:{color:"#6C7834"}},"collect"),t("span",{style:{color:"#8E8F8B"}},"();")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#6C7834"}},"println!"),t("span",{style:{color:"#8E8F8B"}},"("),t("span",{style:{color:"#B56959"}},'"'),t("span",{style:{color:"#8E8F8B"}},"{}"),t("span",{style:{color:"#B56959"}},'"'),t("span",{style:{color:"#8E8F8B"}},","),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8C862B"}},"t"),t("span",{style:{color:"#AB5959"}},"."),t("span",{style:{color:"#6C7834"}},"len"),t("span",{style:{color:"#8E8F8B"}},"()"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#AB5959"}},"*"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#6C7834"}},"std"),t("span",{style:{color:"#AB5959"}},"::"),t("span",{style:{color:"#6C7834"}},"mem"),t("span",{style:{color:"#AB5959"}},"::"),t("span",{style:{color:"#6C7834"}},"size_of"),t("span",{style:{color:"#AB5959"}},"::"),t("span",{style:{color:"#8E8F8B"}},"<"),t("span",{style:{color:"#6C7834"}},"u8"),t("span",{style:{color:"#8E8F8B"}},">());"),t("span",{style:{color:"#A0ADA0"}},"    // 7")]),f(`
`),t("span",{class:"line"}),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#6C7834"}},"println!"),t("span",{style:{color:"#8E8F8B"}},"("),t("span",{style:{color:"#B56959"}},'"'),t("span",{style:{color:"#8E8F8B"}},"{"),t("span",{style:{color:"#B56959"}},"t"),t("span",{style:{color:"#8E8F8B"}},"}"),t("span",{style:{color:"#B56959"}},'"'),t("span",{style:{color:"#8E8F8B"}},");")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#A0ADA0"}},'    //        ^^^ "Hi 😻"')]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),P7=t("p",null,[f("👆 Yes, "),t("code",null,".iter().collect();")],-1),I7={__name:"39",setup(e){const n={hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"};return R(V),(s,o)=>{const r=Zt;return _(),W(Te,le(re(n)),{default:P(()=>[$7,O7,M(r,ze({},{ranges:["0-7,10,13-16","8,11"]}),{default:P(()=>[U7]),_:1},16),P7]),_:1},16)}}},M7=z(I7,[["__file","/@slidev/slides/39.md"]]),L7=t("h2",null,"See, creating strings is easy!",-1),R7={__name:"40",setup(e){const n={layout:"center",hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"};return R(V),(s,o)=>(_(),W(nt,le(re(n)),{default:P(()=>[L7]),_:1},16))}},N7=z(R7,[["__file","/@slidev/slides/40.md"]]),q7=t("h2",null,"UTF8Error",-1),j7=t("p",null,"Until it panics.",-1),W7=t("pre",{class:"shiki-container"},[t("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#4D9375"}},"fn"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#A1B567"}},"main"),t("span",{style:{color:"#858585"}},"()"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#858585"}},"{")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#CB7676"}},"let"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#B8A965"}},"cat"),t("span",{style:{color:"#CB7676"}},":"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#858585"}},"["),t("span",{style:{color:"#A1B567"}},"u8"),t("span",{style:{color:"#858585"}},";"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#6394BF"}},"4"),t("span",{style:{color:"#858585"}},"]"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#CB7676"}},"="),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#858585"}},"["),t("span",{style:{color:"#6394BF"}},"0xF0"),t("span",{style:{color:"#858585"}},","),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#6394BF"}},"0x9F"),t("span",{style:{color:"#858585"}},","),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#6394BF"}},"0x98"),t("span",{style:{color:"#858585"}},","),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#6394BF"}},"0xBB"),t("span",{style:{color:"#858585"}},"];")]),f(`
`),t("span",{class:"line"}),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#CB7676"}},"let"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#B8A965"}},"sliced"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#CB7676"}},"="),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#CB7676"}},"&"),t("span",{style:{color:"#B8A965"}},"cat"),t("span",{style:{color:"#858585"}},"["),t("span",{style:{color:"#6394BF"}},"0"),t("span",{style:{color:"#CB7676"}},"..="),t("span",{style:{color:"#6394BF"}},"2"),t("span",{style:{color:"#858585"}},"];")]),f(`
`),t("span",{class:"line"}),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#758575"}},"    // Panics")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#CB7676"}},"let"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#B8A965"}},"_s"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#CB7676"}},"="),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#A1B567"}},"std"),t("span",{style:{color:"#CB7676"}},"::"),t("span",{style:{color:"#A1B567"}},"str"),t("span",{style:{color:"#CB7676"}},"::"),t("span",{style:{color:"#A1B567"}},"from_utf8"),t("span",{style:{color:"#858585"}},"("),t("span",{style:{color:"#B8A965"}},"sliced"),t("span",{style:{color:"#858585"}},")"),t("span",{style:{color:"#CB7676"}},"."),t("span",{style:{color:"#A1B567"}},"unwrap"),t("span",{style:{color:"#858585"}},"();")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#758575"}},"    // thread 'main' panicked at 'called `Result::unwrap()` on an `Err` value:")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#758575"}},"    //   FromUtf8Error { bytes: [128], error: Utf8Error { valid_up_to: 0, error_len: Some(1) } }', src/main.rs:5:35")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#858585"}},"}")])])]),t("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#1C6B48"}},"fn"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#6C7834"}},"main"),t("span",{style:{color:"#8E8F8B"}},"()"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8E8F8B"}},"{")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#AB5959"}},"let"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8C862B"}},"cat"),t("span",{style:{color:"#AB5959"}},":"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8E8F8B"}},"["),t("span",{style:{color:"#6C7834"}},"u8"),t("span",{style:{color:"#8E8F8B"}},";"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#296AA3"}},"4"),t("span",{style:{color:"#8E8F8B"}},"]"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#AB5959"}},"="),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8E8F8B"}},"["),t("span",{style:{color:"#296AA3"}},"0xF0"),t("span",{style:{color:"#8E8F8B"}},","),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#296AA3"}},"0x9F"),t("span",{style:{color:"#8E8F8B"}},","),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#296AA3"}},"0x98"),t("span",{style:{color:"#8E8F8B"}},","),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#296AA3"}},"0xBB"),t("span",{style:{color:"#8E8F8B"}},"];")]),f(`
`),t("span",{class:"line"}),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#AB5959"}},"let"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8C862B"}},"sliced"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#AB5959"}},"="),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#AB5959"}},"&"),t("span",{style:{color:"#8C862B"}},"cat"),t("span",{style:{color:"#8E8F8B"}},"["),t("span",{style:{color:"#296AA3"}},"0"),t("span",{style:{color:"#AB5959"}},"..="),t("span",{style:{color:"#296AA3"}},"2"),t("span",{style:{color:"#8E8F8B"}},"];")]),f(`
`),t("span",{class:"line"}),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#A0ADA0"}},"    // Panics")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#AB5959"}},"let"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8C862B"}},"_s"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#AB5959"}},"="),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#6C7834"}},"std"),t("span",{style:{color:"#AB5959"}},"::"),t("span",{style:{color:"#6C7834"}},"str"),t("span",{style:{color:"#AB5959"}},"::"),t("span",{style:{color:"#6C7834"}},"from_utf8"),t("span",{style:{color:"#8E8F8B"}},"("),t("span",{style:{color:"#8C862B"}},"sliced"),t("span",{style:{color:"#8E8F8B"}},")"),t("span",{style:{color:"#AB5959"}},"."),t("span",{style:{color:"#6C7834"}},"unwrap"),t("span",{style:{color:"#8E8F8B"}},"();")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#A0ADA0"}},"    // thread 'main' panicked at 'called `Result::unwrap()` on an `Err` value:")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#A0ADA0"}},"    //   FromUtf8Error { bytes: [128], error: Utf8Error { valid_up_to: 0, error_len: Some(1) } }', src/main.rs:5:35")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),H7={class:"pt-10"},V7=t("blockquote",null,[t("p",null,[f("String slices are "),t("strong",null,"always"),f(" valid UTF-8.")])],-1),z7=t("p",null,'😬 Yeah, not all sequencess of bytes are "Valid UTF-8"',-1),K7=[V7,z7],G7={__name:"41",setup(e){const n={hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"};return R(V),(s,o)=>{const r=Zt,l=Vn("click");return _(),W(Te,le(re(n)),{default:P(()=>[q7,j7,M(r,ze({},{ranges:[""]}),{default:P(()=>[W7]),_:1},16),wt((_(),F("p",H7,K7)),[[l]])]),_:1},16)}}},Y7=z(G7,[["__file","/@slidev/slides/41.md"]]),Q7=t("h2",null,"Invalid UTF-8",-1),Z7=t("p",null,"…We didn’t talk about Invalid UTF-8 yet",-1),J7=t("ul",null,[t("li",null,[f("First byte of UTF-8 byte sequences "),t("ul",null,[t("li",null,[f("1 byte seq: "),t("code",null,"0xxxxxxx")]),t("li",null,[f("2 byte seq: "),t("code",null,"110xxxxx"),f(" - "),t("code",null,"0xCx"),f(" or "),t("code",null,"0xDx"),f(" = 2 bytes")]),t("li",null,[f("3 byte seq: "),t("code",null,"1110xxxx"),f(" - "),t("code",null,"0xEx"),f(" = 3 bytes")]),t("li",null,[f("4 byte seq: "),t("code",null,"11110xxx"),f(" - "),t("code",null,"0xFx"),f(" = 4 bytes")])])])],-1),X7=t("ul",null,[t("li",null,[f('∴ The following are "broken": '),t("ul",null,[t("li",null,[t("code",null,"[0x80]"),f(", "),t("code",null,"[0x90]"),f(", "),t("code",null,"[0xA0]"),f(", "),t("code",null,"[0xB0]"),f(" - invalid UTF-8 sequences")]),t("li",null,[t("code",null,"[0xC0]"),f(", "),t("code",null,"[0xD0]"),f(" - missing second byte")]),t("li",null,[t("code",null,"[0xE0, 0xFF]"),f(" - missing third byte")]),t("li",null,[t("code",null,"[0xF0, 0xFF, 0xFF]"),f(" - missing fourth byte")])])])],-1),e9={__name:"42",setup(e){const n={hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"};return R(V),(s,o)=>{const r=gt;return _(),W(Te,le(re(n)),{default:P(()=>[Q7,Z7,M(r,null,{default:P(()=>[J7]),_:1}),M(r,null,{default:P(()=>[X7]),_:1})]),_:1},16)}}},t9=z(e9,[["__file","/@slidev/slides/42.md"]]),n9=t("h2",null,"Where Enforced UTF-8 can go wrong",-1),s9={__name:"43",setup(e){const n={layout:"center",hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"};return R(V),(s,o)=>(_(),W(nt,le(re(n)),{default:P(()=>[n9]),_:1},16))}},o9=z(s9,[["__file","/@slidev/slides/43.md"]]),r9=t("h2",null,"Reading and Writing",-1),l9=t("pre",{class:"shiki-container"},[t("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#758575"}},"// Needed for `impl Read for &[u8]`")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#4D9375"}},"use"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#A1B567"}},"std"),t("span",{style:{color:"#CB7676"}},"::"),t("span",{style:{color:"#A1B567"}},"io"),t("span",{style:{color:"#CB7676"}},"::"),t("span",{style:{color:"#A1B567"}},"prelude"),t("span",{style:{color:"#CB7676"}},"::*"),t("span",{style:{color:"#858585"}},";")]),f(`
`),t("span",{class:"line"}),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#4D9375"}},"fn"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#A1B567"}},"main"),t("span",{style:{color:"#858585"}},"()"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#858585"}},"{")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#758575"}},'    //let mut file = std::fs::File::open("ref/plain_text.txt").unwrap();')]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#CB7676"}},"let"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#CB7676"}},"mut"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#B8A965"}},"file"),t("span",{style:{color:"#CB7676"}},":"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#CB7676"}},"&"),t("span",{style:{color:"#858585"}},"["),t("span",{style:{color:"#A1B567"}},"u8"),t("span",{style:{color:"#858585"}},"]"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#CB7676"}},"="),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#C98A7D"}},'b"Plain'),t("span",{style:{color:"#D4976C"}},"\\x"),t("span",{style:{color:"#C98A7D"}},'80 Text!"'),t("span",{style:{color:"#858585"}},";")]),f(`
`),t("span",{class:"line"}),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#CB7676"}},"let"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#CB7676"}},"mut"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#B8A965"}},"buf"),t("span",{style:{color:"#CB7676"}},":"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#A1B567"}},"Vec"),t("span",{style:{color:"#858585"}},"<"),t("span",{style:{color:"#A1B567"}},"u8"),t("span",{style:{color:"#858585"}},">"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#CB7676"}},"="),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#A1B567"}},"vec!"),t("span",{style:{color:"#858585"}},"[];")]),f(`
`),t("span",{class:"line"}),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#CB7676"}},"let"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#B8A965"}},"bytes_read"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#CB7676"}},"="),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#B8A965"}},"file"),t("span",{style:{color:"#CB7676"}},"."),t("span",{style:{color:"#A1B567"}},"read_to_end"),t("span",{style:{color:"#858585"}},"("),t("span",{style:{color:"#CB7676"}},"&mut"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#B8A965"}},"buf"),t("span",{style:{color:"#858585"}},")"),t("span",{style:{color:"#CB7676"}},"."),t("span",{style:{color:"#A1B567"}},"unwrap"),t("span",{style:{color:"#858585"}},"();")]),f(`
`),t("span",{class:"line"}),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#A1B567"}},"println!"),t("span",{style:{color:"#858585"}},"("),t("span",{style:{color:"#C98A7D"}},'"'),t("span",{style:{color:"#858585"}},"{"),t("span",{style:{color:"#C98A7D"}},"bytes_read"),t("span",{style:{color:"#858585"}},"}"),t("span",{style:{color:"#C98A7D"}},", "),t("span",{style:{color:"#858585"}},"{"),t("span",{style:{color:"#C98A7D"}},"buf:02X?"),t("span",{style:{color:"#858585"}},"}"),t("span",{style:{color:"#C98A7D"}},'"'),t("span",{style:{color:"#858585"}},");")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#758575"}},"    //        ^^^^^^^^^^^^^^^^^^^^^^^^ 12, [50, 6C, 61, 69, 6E, 80, 20, 54, 65, 78, 74, 21]")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#858585"}},"}")])])]),t("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#A0ADA0"}},"// Needed for `impl Read for &[u8]`")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#1C6B48"}},"use"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#6C7834"}},"std"),t("span",{style:{color:"#AB5959"}},"::"),t("span",{style:{color:"#6C7834"}},"io"),t("span",{style:{color:"#AB5959"}},"::"),t("span",{style:{color:"#6C7834"}},"prelude"),t("span",{style:{color:"#AB5959"}},"::*"),t("span",{style:{color:"#8E8F8B"}},";")]),f(`
`),t("span",{class:"line"}),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#1C6B48"}},"fn"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#6C7834"}},"main"),t("span",{style:{color:"#8E8F8B"}},"()"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8E8F8B"}},"{")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#A0ADA0"}},'    //let mut file = std::fs::File::open("ref/plain_text.txt").unwrap();')]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#AB5959"}},"let"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#AB5959"}},"mut"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8C862B"}},"file"),t("span",{style:{color:"#AB5959"}},":"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#AB5959"}},"&"),t("span",{style:{color:"#8E8F8B"}},"["),t("span",{style:{color:"#6C7834"}},"u8"),t("span",{style:{color:"#8E8F8B"}},"]"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#AB5959"}},"="),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#B56959"}},'b"Plain'),t("span",{style:{color:"#A65E2B"}},"\\x"),t("span",{style:{color:"#B56959"}},'80 Text!"'),t("span",{style:{color:"#8E8F8B"}},";")]),f(`
`),t("span",{class:"line"}),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#AB5959"}},"let"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#AB5959"}},"mut"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8C862B"}},"buf"),t("span",{style:{color:"#AB5959"}},":"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#6C7834"}},"Vec"),t("span",{style:{color:"#8E8F8B"}},"<"),t("span",{style:{color:"#6C7834"}},"u8"),t("span",{style:{color:"#8E8F8B"}},">"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#AB5959"}},"="),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#6C7834"}},"vec!"),t("span",{style:{color:"#8E8F8B"}},"[];")]),f(`
`),t("span",{class:"line"}),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#AB5959"}},"let"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8C862B"}},"bytes_read"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#AB5959"}},"="),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8C862B"}},"file"),t("span",{style:{color:"#AB5959"}},"."),t("span",{style:{color:"#6C7834"}},"read_to_end"),t("span",{style:{color:"#8E8F8B"}},"("),t("span",{style:{color:"#AB5959"}},"&mut"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8C862B"}},"buf"),t("span",{style:{color:"#8E8F8B"}},")"),t("span",{style:{color:"#AB5959"}},"."),t("span",{style:{color:"#6C7834"}},"unwrap"),t("span",{style:{color:"#8E8F8B"}},"();")]),f(`
`),t("span",{class:"line"}),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#6C7834"}},"println!"),t("span",{style:{color:"#8E8F8B"}},"("),t("span",{style:{color:"#B56959"}},'"'),t("span",{style:{color:"#8E8F8B"}},"{"),t("span",{style:{color:"#B56959"}},"bytes_read"),t("span",{style:{color:"#8E8F8B"}},"}"),t("span",{style:{color:"#B56959"}},", "),t("span",{style:{color:"#8E8F8B"}},"{"),t("span",{style:{color:"#B56959"}},"buf:02X?"),t("span",{style:{color:"#8E8F8B"}},"}"),t("span",{style:{color:"#B56959"}},'"'),t("span",{style:{color:"#8E8F8B"}},");")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#A0ADA0"}},"    //        ^^^^^^^^^^^^^^^^^^^^^^^^ 12, [50, 6C, 61, 69, 6E, 80, 20, 54, 65, 78, 74, 21]")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),a9=t("p",null,"Nothing bad… so far…",-1),i9={__name:"44",setup(e){const n={hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"};return R(V),(s,o)=>{const r=Zt,l=gt;return _(),W(Te,le(re(n)),{default:P(()=>[r9,M(r,ze({},{ranges:["5","6","0-4,6-12,14","0-4,6-14"]}),{default:P(()=>[l9]),_:1},16),M(l,null,{default:P(()=>[a9]),_:1})]),_:1},16)}}},c9=z(i9,[["__file","/@slidev/slides/44.md"]]),u9=t("h2",null,"Reading and Writing",-1),p9=t("pre",{class:"shiki-container"},[t("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#758575"}},"// Needed for `impl Read for &[u8]`")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#4D9375"}},"use"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#A1B567"}},"std"),t("span",{style:{color:"#CB7676"}},"::"),t("span",{style:{color:"#A1B567"}},"io"),t("span",{style:{color:"#CB7676"}},"::"),t("span",{style:{color:"#A1B567"}},"prelude"),t("span",{style:{color:"#CB7676"}},"::*"),t("span",{style:{color:"#858585"}},";")]),f(`
`),t("span",{class:"line"}),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#4D9375"}},"fn"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#A1B567"}},"main"),t("span",{style:{color:"#858585"}},"()"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#858585"}},"{")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#758575"}},'    //let mut file = std::fs::File::open("ref/plain_text.txt").unwrap();')]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#CB7676"}},"let"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#CB7676"}},"mut"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#B8A965"}},"file"),t("span",{style:{color:"#CB7676"}},":"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#CB7676"}},"&"),t("span",{style:{color:"#858585"}},"["),t("span",{style:{color:"#A1B567"}},"u8"),t("span",{style:{color:"#858585"}},"]"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#CB7676"}},"="),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#C98A7D"}},'b"Plain'),t("span",{style:{color:"#D4976C"}},"\\x"),t("span",{style:{color:"#C98A7D"}},'80 Text!"'),t("span",{style:{color:"#858585"}},";")]),f(`
`),t("span",{class:"line"}),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#CB7676"}},"let"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#CB7676"}},"mut"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#B8A965"}},"buf"),t("span",{style:{color:"#CB7676"}},":"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#A1B567"}},"String"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#CB7676"}},"="),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#A1B567"}},"String"),t("span",{style:{color:"#CB7676"}},"::"),t("span",{style:{color:"#A1B567"}},"new"),t("span",{style:{color:"#858585"}},"();")]),f(`
`),t("span",{class:"line"}),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#758575"}},"    //let bytes_read = file.read_to_end(&mut buf).unwrap();")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#CB7676"}},"let"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#B8A965"}},"bytes_read"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#CB7676"}},"="),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#B8A965"}},"file"),t("span",{style:{color:"#CB7676"}},"."),t("span",{style:{color:"#A1B567"}},"read_to_string"),t("span",{style:{color:"#858585"}},"("),t("span",{style:{color:"#CB7676"}},"&mut"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#B8A965"}},"buf"),t("span",{style:{color:"#858585"}},")"),t("span",{style:{color:"#CB7676"}},"."),t("span",{style:{color:"#A1B567"}},"unwrap"),t("span",{style:{color:"#858585"}},"();")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#758575"}},"    // thread 'main' panicked at 'called `Result::unwrap()` on an `Err` value:")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#758575"}},`    //     Error { kind: InvalidData, message: "stream did not contain valid UTF-8" }', src/main.rs:11:52`)]),f(`
`),t("span",{class:"line"}),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#A1B567"}},"println!"),t("span",{style:{color:"#858585"}},"("),t("span",{style:{color:"#C98A7D"}},'"'),t("span",{style:{color:"#858585"}},"{"),t("span",{style:{color:"#C98A7D"}},"bytes_read"),t("span",{style:{color:"#858585"}},"}"),t("span",{style:{color:"#C98A7D"}},", "),t("span",{style:{color:"#858585"}},"{"),t("span",{style:{color:"#C98A7D"}},"buf:02X?"),t("span",{style:{color:"#858585"}},"}"),t("span",{style:{color:"#C98A7D"}},'"'),t("span",{style:{color:"#858585"}},");")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#858585"}},"}")])])]),t("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#A0ADA0"}},"// Needed for `impl Read for &[u8]`")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#1C6B48"}},"use"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#6C7834"}},"std"),t("span",{style:{color:"#AB5959"}},"::"),t("span",{style:{color:"#6C7834"}},"io"),t("span",{style:{color:"#AB5959"}},"::"),t("span",{style:{color:"#6C7834"}},"prelude"),t("span",{style:{color:"#AB5959"}},"::*"),t("span",{style:{color:"#8E8F8B"}},";")]),f(`
`),t("span",{class:"line"}),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#1C6B48"}},"fn"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#6C7834"}},"main"),t("span",{style:{color:"#8E8F8B"}},"()"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8E8F8B"}},"{")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#A0ADA0"}},'    //let mut file = std::fs::File::open("ref/plain_text.txt").unwrap();')]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#AB5959"}},"let"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#AB5959"}},"mut"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8C862B"}},"file"),t("span",{style:{color:"#AB5959"}},":"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#AB5959"}},"&"),t("span",{style:{color:"#8E8F8B"}},"["),t("span",{style:{color:"#6C7834"}},"u8"),t("span",{style:{color:"#8E8F8B"}},"]"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#AB5959"}},"="),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#B56959"}},'b"Plain'),t("span",{style:{color:"#A65E2B"}},"\\x"),t("span",{style:{color:"#B56959"}},'80 Text!"'),t("span",{style:{color:"#8E8F8B"}},";")]),f(`
`),t("span",{class:"line"}),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#AB5959"}},"let"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#AB5959"}},"mut"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8C862B"}},"buf"),t("span",{style:{color:"#AB5959"}},":"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#6C7834"}},"String"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#AB5959"}},"="),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#6C7834"}},"String"),t("span",{style:{color:"#AB5959"}},"::"),t("span",{style:{color:"#6C7834"}},"new"),t("span",{style:{color:"#8E8F8B"}},"();")]),f(`
`),t("span",{class:"line"}),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#A0ADA0"}},"    //let bytes_read = file.read_to_end(&mut buf).unwrap();")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#AB5959"}},"let"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8C862B"}},"bytes_read"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#AB5959"}},"="),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8C862B"}},"file"),t("span",{style:{color:"#AB5959"}},"."),t("span",{style:{color:"#6C7834"}},"read_to_string"),t("span",{style:{color:"#8E8F8B"}},"("),t("span",{style:{color:"#AB5959"}},"&mut"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8C862B"}},"buf"),t("span",{style:{color:"#8E8F8B"}},")"),t("span",{style:{color:"#AB5959"}},"."),t("span",{style:{color:"#6C7834"}},"unwrap"),t("span",{style:{color:"#8E8F8B"}},"();")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#A0ADA0"}},"    // thread 'main' panicked at 'called `Result::unwrap()` on an `Err` value:")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#A0ADA0"}},`    //     Error { kind: InvalidData, message: "stream did not contain valid UTF-8" }', src/main.rs:11:52`)]),f(`
`),t("span",{class:"line"}),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#6C7834"}},"println!"),t("span",{style:{color:"#8E8F8B"}},"("),t("span",{style:{color:"#B56959"}},'"'),t("span",{style:{color:"#8E8F8B"}},"{"),t("span",{style:{color:"#B56959"}},"bytes_read"),t("span",{style:{color:"#8E8F8B"}},"}"),t("span",{style:{color:"#B56959"}},", "),t("span",{style:{color:"#8E8F8B"}},"{"),t("span",{style:{color:"#B56959"}},"buf:02X?"),t("span",{style:{color:"#8E8F8B"}},"}"),t("span",{style:{color:"#B56959"}},'"'),t("span",{style:{color:"#8E8F8B"}},");")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),d9={__name:"45",setup(e){const n={hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"};return R(V),(s,o)=>{const r=Zt;return _(),W(Te,le(re(n)),{default:P(()=>[u9,M(r,ze({},{ranges:["6,10-11","6,10-13"]}),{default:P(()=>[p9]),_:1},16)]),_:1},16)}}},f9=z(d9,[["__file","/@slidev/slides/45.md"]]),h9=t("h2",null,"Read and Writing - JSON",-1),y9=t("pre",{class:"shiki-container"},[t("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#858585"}},"{")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"  "),t("span",{style:{color:"#858585"}},'"'),t("span",{style:{color:"#E0A569"}},"hello"),t("span",{style:{color:"#858585"}},'"'),t("span",{style:{color:"#858585"}},":"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#C98A7D"}},'"world'),t("span",{style:{color:"#FDAEB7","font-style":"italic"}},"\\x"),t("span",{style:{color:"#C98A7D"}},'80!"')]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#858585"}},"}")])])]),t("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#8E8F8B"}},"{")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"  "),t("span",{style:{color:"#8E8F8B"}},'"'),t("span",{style:{color:"#B58451"}},"hello"),t("span",{style:{color:"#8E8F8B"}},'"'),t("span",{style:{color:"#8E8F8B"}},":"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#B56959"}},'"world'),t("span",{style:{color:"#B31D28","font-style":"italic"}},"\\x"),t("span",{style:{color:"#B56959"}},'80!"')]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),m9=t("pre",{class:"shiki-container"},[t("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#858585"}},"#["),t("span",{style:{color:"#DBD7CA"}},"derive"),t("span",{style:{color:"#858585"}},"("),t("span",{style:{color:"#A1B567"}},"Debug"),t("span",{style:{color:"#858585"}},","),t("span",{style:{color:"#DBD7CA"}}," serde"),t("span",{style:{color:"#CB7676"}},"::"),t("span",{style:{color:"#A1B567"}},"Deserialize"),t("span",{style:{color:"#858585"}},")]")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#CB7676"}},"struct"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#A1B567"}},"Greeting"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#858585"}},"{")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#4D9375"}},"pub"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#B8A965"}},"who"),t("span",{style:{color:"#CB7676"}},":"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#A1B567"}},"String")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#858585"}},"}")]),f(`
`),t("span",{class:"line"}),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#4D9375"}},"fn"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#A1B567"}},"main"),t("span",{style:{color:"#858585"}},"()"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#858585"}},"{")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#CB7676"}},"let"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#B8A965"}},"raw"),t("span",{style:{color:"#CB7676"}},":"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#CB7676"}},"&"),t("span",{style:{color:"#858585"}},"["),t("span",{style:{color:"#A1B567"}},"u8"),t("span",{style:{color:"#858585"}},"]"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#CB7676"}},"="),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#C98A7D"}},'b"{'),t("span",{style:{color:"#D4976C"}},'\\"'),t("span",{style:{color:"#C98A7D"}},"who"),t("span",{style:{color:"#D4976C"}},'\\"'),t("span",{style:{color:"#C98A7D"}},": "),t("span",{style:{color:"#D4976C"}},'\\"'),t("span",{style:{color:"#C98A7D"}},"world"),t("span",{style:{color:"#D4976C"}},"\\x"),t("span",{style:{color:"#C98A7D"}},"80"),t("span",{style:{color:"#D4976C"}},'\\"'),t("span",{style:{color:"#C98A7D"}},'}"'),t("span",{style:{color:"#858585"}},";")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#758575"}},"    // for illustrative purposes")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#CB7676"}},"let"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#B8A965"}},"s"),t("span",{style:{color:"#CB7676"}},":"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#CB7676"}},"&"),t("span",{style:{color:"#A1B567"}},"str"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#CB7676"}},"="),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#4D9375"}},"unsafe"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#858585"}},"{"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#A1B567"}},"std"),t("span",{style:{color:"#CB7676"}},"::"),t("span",{style:{color:"#A1B567"}},"str"),t("span",{style:{color:"#CB7676"}},"::"),t("span",{style:{color:"#A1B567"}},"from_utf8_unchecked"),t("span",{style:{color:"#858585"}},"("),t("span",{style:{color:"#B8A965"}},"raw"),t("span",{style:{color:"#858585"}},")"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#858585"}},"};")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    ")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#CB7676"}},"let"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#B8A965"}},"greeting"),t("span",{style:{color:"#CB7676"}},":"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#A1B567"}},"Greeting"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#CB7676"}},"="),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#A1B567"}},"serde_json"),t("span",{style:{color:"#CB7676"}},"::"),t("span",{style:{color:"#A1B567"}},"from_str"),t("span",{style:{color:"#858585"}},"("),t("span",{style:{color:"#B8A965"}},"s"),t("span",{style:{color:"#858585"}},")"),t("span",{style:{color:"#CB7676"}},"."),t("span",{style:{color:"#A1B567"}},"unwrap"),t("span",{style:{color:"#858585"}},"();")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    ")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#A1B567"}},"println!"),t("span",{style:{color:"#858585"}},"("),t("span",{style:{color:"#C98A7D"}},'"Hello '),t("span",{style:{color:"#858585"}},"{}"),t("span",{style:{color:"#C98A7D"}},'!"'),t("span",{style:{color:"#858585"}},","),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#B8A965"}},"greeting"),t("span",{style:{color:"#CB7676"}},"."),t("span",{style:{color:"#DBD7CA"}},"who"),t("span",{style:{color:"#858585"}},");")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#858585"}},"}")])])]),t("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#8E8F8B"}},"#["),t("span",{style:{color:"#393A34"}},"derive"),t("span",{style:{color:"#8E8F8B"}},"("),t("span",{style:{color:"#6C7834"}},"Debug"),t("span",{style:{color:"#8E8F8B"}},","),t("span",{style:{color:"#393A34"}}," serde"),t("span",{style:{color:"#AB5959"}},"::"),t("span",{style:{color:"#6C7834"}},"Deserialize"),t("span",{style:{color:"#8E8F8B"}},")]")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#AB5959"}},"struct"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#6C7834"}},"Greeting"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8E8F8B"}},"{")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#1C6B48"}},"pub"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8C862B"}},"who"),t("span",{style:{color:"#AB5959"}},":"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#6C7834"}},"String")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#8E8F8B"}},"}")]),f(`
`),t("span",{class:"line"}),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#1C6B48"}},"fn"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#6C7834"}},"main"),t("span",{style:{color:"#8E8F8B"}},"()"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8E8F8B"}},"{")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#AB5959"}},"let"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8C862B"}},"raw"),t("span",{style:{color:"#AB5959"}},":"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#AB5959"}},"&"),t("span",{style:{color:"#8E8F8B"}},"["),t("span",{style:{color:"#6C7834"}},"u8"),t("span",{style:{color:"#8E8F8B"}},"]"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#AB5959"}},"="),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#B56959"}},'b"{'),t("span",{style:{color:"#A65E2B"}},'\\"'),t("span",{style:{color:"#B56959"}},"who"),t("span",{style:{color:"#A65E2B"}},'\\"'),t("span",{style:{color:"#B56959"}},": "),t("span",{style:{color:"#A65E2B"}},'\\"'),t("span",{style:{color:"#B56959"}},"world"),t("span",{style:{color:"#A65E2B"}},"\\x"),t("span",{style:{color:"#B56959"}},"80"),t("span",{style:{color:"#A65E2B"}},'\\"'),t("span",{style:{color:"#B56959"}},'}"'),t("span",{style:{color:"#8E8F8B"}},";")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#A0ADA0"}},"    // for illustrative purposes")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#AB5959"}},"let"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8C862B"}},"s"),t("span",{style:{color:"#AB5959"}},":"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#AB5959"}},"&"),t("span",{style:{color:"#6C7834"}},"str"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#AB5959"}},"="),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#1C6B48"}},"unsafe"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8E8F8B"}},"{"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#6C7834"}},"std"),t("span",{style:{color:"#AB5959"}},"::"),t("span",{style:{color:"#6C7834"}},"str"),t("span",{style:{color:"#AB5959"}},"::"),t("span",{style:{color:"#6C7834"}},"from_utf8_unchecked"),t("span",{style:{color:"#8E8F8B"}},"("),t("span",{style:{color:"#8C862B"}},"raw"),t("span",{style:{color:"#8E8F8B"}},")"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8E8F8B"}},"};")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    ")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#AB5959"}},"let"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8C862B"}},"greeting"),t("span",{style:{color:"#AB5959"}},":"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#6C7834"}},"Greeting"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#AB5959"}},"="),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#6C7834"}},"serde_json"),t("span",{style:{color:"#AB5959"}},"::"),t("span",{style:{color:"#6C7834"}},"from_str"),t("span",{style:{color:"#8E8F8B"}},"("),t("span",{style:{color:"#8C862B"}},"s"),t("span",{style:{color:"#8E8F8B"}},")"),t("span",{style:{color:"#AB5959"}},"."),t("span",{style:{color:"#6C7834"}},"unwrap"),t("span",{style:{color:"#8E8F8B"}},"();")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    ")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#6C7834"}},"println!"),t("span",{style:{color:"#8E8F8B"}},"("),t("span",{style:{color:"#B56959"}},'"Hello '),t("span",{style:{color:"#8E8F8B"}},"{}"),t("span",{style:{color:"#B56959"}},'!"'),t("span",{style:{color:"#8E8F8B"}},","),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8C862B"}},"greeting"),t("span",{style:{color:"#AB5959"}},"."),t("span",{style:{color:"#393A34"}},"who"),t("span",{style:{color:"#8E8F8B"}},");")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),g9={class:"mt-7"},_9=t("blockquote",null,[t("p",null,"JSON text exchanged between systems that are not part of a closed ecosystem MUST be encoded using UTF-8")],-1),v9=[_9],b9=t("footer",null,[t("p",null,[f("Ref: "),t("a",{href:"https://datatracker.ietf.org/doc/html/rfc8259#section-8.1",target:"_blank",rel:"noopener"},"https://datatracker.ietf.org/doc/html/rfc8259#section-8.1")])],-1),x9={__name:"46",setup(e){const n={hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"};return R(V),(s,o)=>{const r=Zt,l=gt,a=Vn("click");return _(),W(Te,le(re(n)),{default:P(()=>[h9,M(r,ze({},{ranges:[""]}),{default:P(()=>[y9]),_:1},16),M(l,null,{default:P(()=>[M(r,ze({},{ranges:["all","1-4,7-9","1-4,11","1-4,13","all"]}),{default:P(()=>[m9]),_:1},16)]),_:1}),wt((_(),F("div",g9,v9)),[[a]]),b9]),_:1},16)}}},w9=z(x9,[["__file","/@slidev/slides/46.md"]]),A9=t("h2",null,"Conventially UTF-8 vs. Gauranteed",-1),C9=t("p",null,"Sometimes you just want cats:",-1),B9=t("pre",{class:"shiki-container"},[t("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#4D9375"}},"use"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#A1B567"}},"bstr"),t("span",{style:{color:"#CB7676"}},"::"),t("span",{style:{color:"#A1B567"}},"ByteSlice"),t("span",{style:{color:"#858585"}},";")]),f(`
`),t("span",{class:"line"}),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#4D9375"}},"fn"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#A1B567"}},"main"),t("span",{style:{color:"#858585"}},"()"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#858585"}},"{")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#CB7676"}},"let"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#B8A965"}},"raw"),t("span",{style:{color:"#CB7676"}},":"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#CB7676"}},"&"),t("span",{style:{color:"#858585"}},"["),t("span",{style:{color:"#A1B567"}},"u8"),t("span",{style:{color:"#858585"}},"]"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#CB7676"}},"=")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"        "),t("span",{style:{color:"#C98A7D"}},'b"'),t("span",{style:{color:"#D4976C"}},"\\x"),t("span",{style:{color:"#C98A7D"}},"80"),t("span",{style:{color:"#D4976C"}},"\\x"),t("span",{style:{color:"#C98A7D"}},"90"),t("span",{style:{color:"#D4976C"}},"\\x"),t("span",{style:{color:"#C98A7D"}},"F0"),t("span",{style:{color:"#D4976C"}},"\\x"),t("span",{style:{color:"#C98A7D"}},"9F"),t("span",{style:{color:"#D4976C"}},"\\x"),t("span",{style:{color:"#C98A7D"}},"99"),t("span",{style:{color:"#D4976C"}},"\\x"),t("span",{style:{color:"#C98A7D"}},"84Pl"),t("span",{style:{color:"#D4976C"}},"\\x"),t("span",{style:{color:"#C98A7D"}},"F0"),t("span",{style:{color:"#D4976C"}},"\\x"),t("span",{style:{color:"#C98A7D"}},"9F"),t("span",{style:{color:"#D4976C"}},"\\x"),t("span",{style:{color:"#C98A7D"}},"98"),t("span",{style:{color:"#D4976C"}},"\\x"),t("span",{style:{color:"#C98A7D"}},"BBain"),t("span",{style:{color:"#D4976C"}},"\\x"),t("span",{style:{color:"#C98A7D"}},"F0"),t("span",{style:{color:"#D4976C"}},"\\x"),t("span",{style:{color:"#C98A7D"}},"9F"),t("span",{style:{color:"#D4976C"}},"\\x"),t("span",{style:{color:"#C98A7D"}},"98"),t("span",{style:{color:"#D4976C"}},"\\x"),t("span",{style:{color:"#C98A7D"}},"BEText!"),t("span",{style:{color:"#D4976C"}},"\\x"),t("span",{style:{color:"#C98A7D"}},"80"),t("span",{style:{color:"#D4976C"}},"\\x"),t("span",{style:{color:"#C98A7D"}},"80"),t("span",{style:{color:"#D4976C"}},"\\x"),t("span",{style:{color:"#C98A7D"}},'80"'),t("span",{style:{color:"#858585"}},";")]),f(`
`),t("span",{class:"line"}),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#CB7676"}},"let"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#B8A965"}},"cats"),t("span",{style:{color:"#CB7676"}},":"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#A1B567"}},"String"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#CB7676"}},"="),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#B8A965"}},"raw")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"        "),t("span",{style:{color:"#CB7676"}},"."),t("span",{style:{color:"#A1B567"}},"chars"),t("span",{style:{color:"#858585"}},"()")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"        "),t("span",{style:{color:"#CB7676"}},"."),t("span",{style:{color:"#A1B567"}},"filter"),t("span",{style:{color:"#858585"}},"("),t("span",{style:{color:"#CB7676"}},"|"),t("span",{style:{color:"#B8A965"}},"c"),t("span",{style:{color:"#CB7676"}},"|"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#858585"}},"("),t("span",{style:{color:"#858585"}},"'"),t("span",{style:{color:"#D4976C"}},"\\u{1F638}"),t("span",{style:{color:"#858585"}},"'"),t("span",{style:{color:"#CB7676"}},".."),t("span",{style:{color:"#858585"}},"'"),t("span",{style:{color:"#D4976C"}},"\\u{1F640}"),t("span",{style:{color:"#858585"}},"'"),t("span",{style:{color:"#858585"}},")"),t("span",{style:{color:"#CB7676"}},"."),t("span",{style:{color:"#A1B567"}},"contains"),t("span",{style:{color:"#858585"}},"("),t("span",{style:{color:"#B8A965"}},"c"),t("span",{style:{color:"#858585"}},"))")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"        "),t("span",{style:{color:"#CB7676"}},"."),t("span",{style:{color:"#A1B567"}},"collect"),t("span",{style:{color:"#858585"}},"();")]),f(`
`),t("span",{class:"line"}),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#A1B567"}},"println!"),t("span",{style:{color:"#858585"}},"("),t("span",{style:{color:"#C98A7D"}},'"Cats: '),t("span",{style:{color:"#858585"}},"{}"),t("span",{style:{color:"#C98A7D"}},'"'),t("span",{style:{color:"#858585"}},","),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#B8A965"}},"cats"),t("span",{style:{color:"#858585"}},");")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#758575"}},"    // Cats: 😻😾")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#858585"}},"}")])])]),t("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#1C6B48"}},"use"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#6C7834"}},"bstr"),t("span",{style:{color:"#AB5959"}},"::"),t("span",{style:{color:"#6C7834"}},"ByteSlice"),t("span",{style:{color:"#8E8F8B"}},";")]),f(`
`),t("span",{class:"line"}),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#1C6B48"}},"fn"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#6C7834"}},"main"),t("span",{style:{color:"#8E8F8B"}},"()"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8E8F8B"}},"{")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#AB5959"}},"let"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8C862B"}},"raw"),t("span",{style:{color:"#AB5959"}},":"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#AB5959"}},"&"),t("span",{style:{color:"#8E8F8B"}},"["),t("span",{style:{color:"#6C7834"}},"u8"),t("span",{style:{color:"#8E8F8B"}},"]"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#AB5959"}},"=")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"        "),t("span",{style:{color:"#B56959"}},'b"'),t("span",{style:{color:"#A65E2B"}},"\\x"),t("span",{style:{color:"#B56959"}},"80"),t("span",{style:{color:"#A65E2B"}},"\\x"),t("span",{style:{color:"#B56959"}},"90"),t("span",{style:{color:"#A65E2B"}},"\\x"),t("span",{style:{color:"#B56959"}},"F0"),t("span",{style:{color:"#A65E2B"}},"\\x"),t("span",{style:{color:"#B56959"}},"9F"),t("span",{style:{color:"#A65E2B"}},"\\x"),t("span",{style:{color:"#B56959"}},"99"),t("span",{style:{color:"#A65E2B"}},"\\x"),t("span",{style:{color:"#B56959"}},"84Pl"),t("span",{style:{color:"#A65E2B"}},"\\x"),t("span",{style:{color:"#B56959"}},"F0"),t("span",{style:{color:"#A65E2B"}},"\\x"),t("span",{style:{color:"#B56959"}},"9F"),t("span",{style:{color:"#A65E2B"}},"\\x"),t("span",{style:{color:"#B56959"}},"98"),t("span",{style:{color:"#A65E2B"}},"\\x"),t("span",{style:{color:"#B56959"}},"BBain"),t("span",{style:{color:"#A65E2B"}},"\\x"),t("span",{style:{color:"#B56959"}},"F0"),t("span",{style:{color:"#A65E2B"}},"\\x"),t("span",{style:{color:"#B56959"}},"9F"),t("span",{style:{color:"#A65E2B"}},"\\x"),t("span",{style:{color:"#B56959"}},"98"),t("span",{style:{color:"#A65E2B"}},"\\x"),t("span",{style:{color:"#B56959"}},"BEText!"),t("span",{style:{color:"#A65E2B"}},"\\x"),t("span",{style:{color:"#B56959"}},"80"),t("span",{style:{color:"#A65E2B"}},"\\x"),t("span",{style:{color:"#B56959"}},"80"),t("span",{style:{color:"#A65E2B"}},"\\x"),t("span",{style:{color:"#B56959"}},'80"'),t("span",{style:{color:"#8E8F8B"}},";")]),f(`
`),t("span",{class:"line"}),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#AB5959"}},"let"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8C862B"}},"cats"),t("span",{style:{color:"#AB5959"}},":"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#6C7834"}},"String"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#AB5959"}},"="),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8C862B"}},"raw")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"        "),t("span",{style:{color:"#AB5959"}},"."),t("span",{style:{color:"#6C7834"}},"chars"),t("span",{style:{color:"#8E8F8B"}},"()")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"        "),t("span",{style:{color:"#AB5959"}},"."),t("span",{style:{color:"#6C7834"}},"filter"),t("span",{style:{color:"#8E8F8B"}},"("),t("span",{style:{color:"#AB5959"}},"|"),t("span",{style:{color:"#8C862B"}},"c"),t("span",{style:{color:"#AB5959"}},"|"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8E8F8B"}},"("),t("span",{style:{color:"#8E8F8B"}},"'"),t("span",{style:{color:"#A65E2B"}},"\\u{1F638}"),t("span",{style:{color:"#8E8F8B"}},"'"),t("span",{style:{color:"#AB5959"}},".."),t("span",{style:{color:"#8E8F8B"}},"'"),t("span",{style:{color:"#A65E2B"}},"\\u{1F640}"),t("span",{style:{color:"#8E8F8B"}},"'"),t("span",{style:{color:"#8E8F8B"}},")"),t("span",{style:{color:"#AB5959"}},"."),t("span",{style:{color:"#6C7834"}},"contains"),t("span",{style:{color:"#8E8F8B"}},"("),t("span",{style:{color:"#8C862B"}},"c"),t("span",{style:{color:"#8E8F8B"}},"))")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"        "),t("span",{style:{color:"#AB5959"}},"."),t("span",{style:{color:"#6C7834"}},"collect"),t("span",{style:{color:"#8E8F8B"}},"();")]),f(`
`),t("span",{class:"line"}),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#6C7834"}},"println!"),t("span",{style:{color:"#8E8F8B"}},"("),t("span",{style:{color:"#B56959"}},'"Cats: '),t("span",{style:{color:"#8E8F8B"}},"{}"),t("span",{style:{color:"#B56959"}},'"'),t("span",{style:{color:"#8E8F8B"}},","),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8C862B"}},"cats"),t("span",{style:{color:"#8E8F8B"}},");")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#A0ADA0"}},"    // Cats: 😻😾")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),k9=t("p",null,[t("code",null,"bstr"),f(" crate - #182 on crates.io")],-1),E9=t("blockquote",null,[t("p",null,"The primary motivation for byte strings is for handling arbitrary bytes that are mostly UTF-8.")],-1),F9=t("p",null,[f("Ref: "),t("a",{href:"https://crates.io/crates/bstr",target:"_blank",rel:"noopener"},"https://crates.io/crates/bstr")],-1),S9={__name:"47",setup(e){const n={hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"};return R(V),(s,o)=>{const r=Zt,l=lh,a=gt;return _(),W(Te,le(re(n)),{default:P(()=>[A9,C9,M(r,ze({},{ranges:[""]}),{default:P(()=>[B9]),_:1},16),M(a,null,{default:P(()=>[M(l,{x1:"220",y1:"150",x2:"190",y2:"210",class:"color-red"}),M(l,{x1:"250",y1:"150",x2:"220",y2:"210",class:"color-red"}),M(l,{x1:"700",y1:"150",x2:"670",y2:"210",class:"color-red"}),M(l,{x1:"725",y1:"150",x2:"695",y2:"210",class:"color-red"}),M(l,{x1:"750",y1:"150",x2:"720",y2:"210",class:"color-red"})]),_:1}),M(a,null,{default:P(()=>[k9,E9,F9]),_:1})]),_:1},16)}}},D9=z(S9,[["__file","/@slidev/slides/47.md"]]),T9=t("h2",null,"Summary",-1),$9=t("p",null,[t("code",null,"str"),f(" is the primitive string - a slice of bytes with gaurantees of UTF-8")],-1),O9=t("p",null,[t("code",null,"str"),f(" is always "),t("code",null,"UTF-8")],-1),U9=t("p",null,[t("code",null,"UTF8Error"),f(" is because you should be handling bytes instead of strings")],-1),P9=t("p",null,[t("code",null,"bstr"),f(" if you want Conventially UTF-8 instead")],-1),I9={__name:"48",setup(e){const n={layout:"center",hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"};return R(V),(s,o)=>{const r=Qt;return _(),W(nt,le(re(n)),{default:P(()=>[T9,M(r,null,{default:P(()=>[$9,O9,U9,P9]),_:1})]),_:1},16)}}},M9=z(I9,[["__file","/@slidev/slides/48.md"]]),L9=t("h1",null,"Quirks",-1),R9={__name:"49",setup(e){const n={layout:"cover",hide:!1,srcSequence:"./pages/04-quirks.md"};return R(V),(s,o)=>(_(),W(Gs,le(re(n)),{default:P(()=>[L9]),_:1},16))}},N9=z(R9,[["__file","/@slidev/slides/49.md"]]),q9=t("h2",null,"Can we just know which UTF Encoding by looking at the bytes?",-1),j9=t("pre",{class:"shiki-container"},[t("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#4D9375"}},"fn"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#A1B567"}},"main"),t("span",{style:{color:"#858585"}},"()"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#858585"}},"{")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#CB7676"}},"let"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#B8A965"}},"s"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#CB7676"}},"="),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#C98A7D"}},'b"'),t("span",{style:{color:"#D4976C"}},"\\x00\\x10\\x"),t("span",{style:{color:"#C98A7D"}},"CA"),t("span",{style:{color:"#D4976C"}},"\\x"),t("span",{style:{color:"#C98A7D"}},"9C"),t("span",{style:{color:"#D4976C"}},"\\x00\\x10\\x"),t("span",{style:{color:"#C98A7D"}},"C9"),t("span",{style:{color:"#D4976C"}},"\\x"),t("span",{style:{color:"#C98A7D"}},"98"),t("span",{style:{color:"#D4976C"}},"\\x00\\x10\\x"),t("span",{style:{color:"#C98A7D"}},"C9"),t("span",{style:{color:"#D4976C"}},"\\x"),t("span",{style:{color:"#C98A7D"}},"AD"),t("span",{style:{color:"#D4976C"}},"\\x00\\x10\\x"),t("span",{style:{color:"#C98A7D"}},"C9"),t("span",{style:{color:"#D4976C"}},"\\x"),t("span",{style:{color:"#C98A7D"}},"AD"),t("span",{style:{color:"#D4976C"}},"\\x00\\x10\\x"),t("span",{style:{color:"#C98A7D"}},"CA"),t("span",{style:{color:"#D4976C"}},"\\x"),t("span",{style:{color:"#C98A7D"}},'98"'),t("span",{style:{color:"#858585"}},";")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    ")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#758575"}},"    // UTF-8 decode")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#CB7676"}},"let"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#B8A965"}},"utf8_s"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#CB7676"}},"="),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#A1B567"}},"std"),t("span",{style:{color:"#CB7676"}},"::"),t("span",{style:{color:"#A1B567"}},"str"),t("span",{style:{color:"#CB7676"}},"::"),t("span",{style:{color:"#A1B567"}},"from_utf8"),t("span",{style:{color:"#858585"}},"("),t("span",{style:{color:"#B8A965"}},"s"),t("span",{style:{color:"#858585"}},")"),t("span",{style:{color:"#CB7676"}},"."),t("span",{style:{color:"#A1B567"}},"unwrap"),t("span",{style:{color:"#858585"}},"();")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#A1B567"}},"println!"),t("span",{style:{color:"#858585"}},"("),t("span",{style:{color:"#C98A7D"}},'" UTF-8: '),t("span",{style:{color:"#858585"}},"{"),t("span",{style:{color:"#C98A7D"}},"utf8_s"),t("span",{style:{color:"#858585"}},"}"),t("span",{style:{color:"#C98A7D"}},'"'),t("span",{style:{color:"#858585"}},");")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    ")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#758575"}},"    // UTF-16 decode")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#CB7676"}},"let"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#B8A965"}},"utf16"),t("span",{style:{color:"#CB7676"}},":"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#A1B567"}},"Vec"),t("span",{style:{color:"#858585"}},"<"),t("span",{style:{color:"#A1B567"}},"u16"),t("span",{style:{color:"#858585"}},">"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#CB7676"}},"="),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#B8A965"}},"s"),t("span",{style:{color:"#CB7676"}},"."),t("span",{style:{color:"#A1B567"}},"chunks"),t("span",{style:{color:"#858585"}},"("),t("span",{style:{color:"#6394BF"}},"2"),t("span",{style:{color:"#858585"}},")")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"        "),t("span",{style:{color:"#CB7676"}},"."),t("span",{style:{color:"#A1B567"}},"map"),t("span",{style:{color:"#858585"}},"("),t("span",{style:{color:"#CB7676"}},"|"),t("span",{style:{color:"#B8A965"}},"c"),t("span",{style:{color:"#CB7676"}},"|"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#858585"}},"("),t("span",{style:{color:"#B8A965"}},"c"),t("span",{style:{color:"#858585"}},"["),t("span",{style:{color:"#6394BF"}},"0"),t("span",{style:{color:"#858585"}},"]"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#4D9375"}},"as"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#A1B567"}},"u16"),t("span",{style:{color:"#858585"}},")"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#CB7676"}},"<<"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#6394BF"}},"8"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#CB7676"}},"|"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#858585"}},"("),t("span",{style:{color:"#B8A965"}},"c"),t("span",{style:{color:"#858585"}},"["),t("span",{style:{color:"#6394BF"}},"1"),t("span",{style:{color:"#858585"}},"]"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#4D9375"}},"as"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#A1B567"}},"u16"),t("span",{style:{color:"#858585"}},"))")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"        "),t("span",{style:{color:"#CB7676"}},"."),t("span",{style:{color:"#A1B567"}},"collect"),t("span",{style:{color:"#858585"}},"();")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#CB7676"}},"let"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#B8A965"}},"utf16_s"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#CB7676"}},"="),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#A1B567"}},"char"),t("span",{style:{color:"#CB7676"}},"::"),t("span",{style:{color:"#A1B567"}},"decode_utf16"),t("span",{style:{color:"#858585"}},"("),t("span",{style:{color:"#B8A965"}},"utf16"),t("span",{style:{color:"#858585"}},")")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"        "),t("span",{style:{color:"#CB7676"}},"."),t("span",{style:{color:"#A1B567"}},"map"),t("span",{style:{color:"#858585"}},"("),t("span",{style:{color:"#CB7676"}},"|"),t("span",{style:{color:"#B8A965"}},"r"),t("span",{style:{color:"#CB7676"}},"|"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#B8A965"}},"r"),t("span",{style:{color:"#CB7676"}},"."),t("span",{style:{color:"#A1B567"}},"unwrap_or"),t("span",{style:{color:"#858585"}},"("),t("span",{style:{color:"#A1B567"}},"char"),t("span",{style:{color:"#CB7676"}},"::"),t("span",{style:{color:"#D4976C"}},"REPLACEMENT_CHARACTER"),t("span",{style:{color:"#858585"}},"))")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"        "),t("span",{style:{color:"#CB7676"}},"."),t("span",{style:{color:"#A1B567"}},"collect"),t("span",{style:{color:"#CB7676"}},"::"),t("span",{style:{color:"#858585"}},"<"),t("span",{style:{color:"#A1B567"}},"String"),t("span",{style:{color:"#858585"}},">();")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#A1B567"}},"println!"),t("span",{style:{color:"#858585"}},"("),t("span",{style:{color:"#C98A7D"}},'"UTF-16: '),t("span",{style:{color:"#858585"}},"{"),t("span",{style:{color:"#C98A7D"}},"utf16_s"),t("span",{style:{color:"#858585"}},"}"),t("span",{style:{color:"#C98A7D"}},'"'),t("span",{style:{color:"#858585"}},");")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    ")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#758575"}},"    // UTF-32 decode")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#CB7676"}},"let"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#B8A965"}},"utf32_s"),t("span",{style:{color:"#CB7676"}},":"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#A1B567"}},"String"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#CB7676"}},"="),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#B8A965"}},"s"),t("span",{style:{color:"#CB7676"}},"."),t("span",{style:{color:"#A1B567"}},"chunks"),t("span",{style:{color:"#858585"}},"("),t("span",{style:{color:"#6394BF"}},"4"),t("span",{style:{color:"#858585"}},")")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"        "),t("span",{style:{color:"#CB7676"}},"."),t("span",{style:{color:"#A1B567"}},"map"),t("span",{style:{color:"#858585"}},"("),t("span",{style:{color:"#CB7676"}},"|"),t("span",{style:{color:"#B8A965"}},"c"),t("span",{style:{color:"#CB7676"}},"|"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#858585"}},"("),t("span",{style:{color:"#B8A965"}},"c"),t("span",{style:{color:"#858585"}},"["),t("span",{style:{color:"#6394BF"}},"0"),t("span",{style:{color:"#858585"}},"]"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#4D9375"}},"as"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#A1B567"}},"u32"),t("span",{style:{color:"#858585"}},")"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#CB7676"}},"<<"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#6394BF"}},"24"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#CB7676"}},"|"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#858585"}},"("),t("span",{style:{color:"#B8A965"}},"c"),t("span",{style:{color:"#858585"}},"["),t("span",{style:{color:"#6394BF"}},"1"),t("span",{style:{color:"#858585"}},"]"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#4D9375"}},"as"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#A1B567"}},"u32"),t("span",{style:{color:"#858585"}},")"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#CB7676"}},"<<"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#6394BF"}},"16"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#CB7676"}},"|"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#858585"}},"("),t("span",{style:{color:"#B8A965"}},"c"),t("span",{style:{color:"#858585"}},"["),t("span",{style:{color:"#6394BF"}},"2"),t("span",{style:{color:"#858585"}},"]"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#4D9375"}},"as"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#A1B567"}},"u32"),t("span",{style:{color:"#858585"}},")"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#CB7676"}},"<<"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#6394BF"}},"8"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#CB7676"}},"|"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#858585"}},"("),t("span",{style:{color:"#B8A965"}},"c"),t("span",{style:{color:"#858585"}},"["),t("span",{style:{color:"#6394BF"}},"3"),t("span",{style:{color:"#858585"}},"]"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#4D9375"}},"as"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#A1B567"}},"u32"),t("span",{style:{color:"#858585"}},"))")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"        "),t("span",{style:{color:"#CB7676"}},"."),t("span",{style:{color:"#A1B567"}},"map"),t("span",{style:{color:"#858585"}},"("),t("span",{style:{color:"#CB7676"}},"|"),t("span",{style:{color:"#B8A965"}},"c"),t("span",{style:{color:"#CB7676"}},"|"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#A1B567"}},"char"),t("span",{style:{color:"#CB7676"}},"::"),t("span",{style:{color:"#A1B567"}},"from_u32"),t("span",{style:{color:"#858585"}},"("),t("span",{style:{color:"#B8A965"}},"c"),t("span",{style:{color:"#858585"}},")"),t("span",{style:{color:"#CB7676"}},"."),t("span",{style:{color:"#A1B567"}},"unwrap"),t("span",{style:{color:"#858585"}},"())")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"        "),t("span",{style:{color:"#CB7676"}},"."),t("span",{style:{color:"#A1B567"}},"collect"),t("span",{style:{color:"#858585"}},"();")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#A1B567"}},"println!"),t("span",{style:{color:"#858585"}},"("),t("span",{style:{color:"#C98A7D"}},'"UTF-32: '),t("span",{style:{color:"#858585"}},"{}"),t("span",{style:{color:"#C98A7D"}},'"'),t("span",{style:{color:"#858585"}},","),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#B8A965"}},"utf32_s"),t("span",{style:{color:"#858585"}},");")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#858585"}},"}")])])]),t("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#1C6B48"}},"fn"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#6C7834"}},"main"),t("span",{style:{color:"#8E8F8B"}},"()"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8E8F8B"}},"{")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#AB5959"}},"let"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8C862B"}},"s"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#AB5959"}},"="),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#B56959"}},'b"'),t("span",{style:{color:"#A65E2B"}},"\\x00\\x10\\x"),t("span",{style:{color:"#B56959"}},"CA"),t("span",{style:{color:"#A65E2B"}},"\\x"),t("span",{style:{color:"#B56959"}},"9C"),t("span",{style:{color:"#A65E2B"}},"\\x00\\x10\\x"),t("span",{style:{color:"#B56959"}},"C9"),t("span",{style:{color:"#A65E2B"}},"\\x"),t("span",{style:{color:"#B56959"}},"98"),t("span",{style:{color:"#A65E2B"}},"\\x00\\x10\\x"),t("span",{style:{color:"#B56959"}},"C9"),t("span",{style:{color:"#A65E2B"}},"\\x"),t("span",{style:{color:"#B56959"}},"AD"),t("span",{style:{color:"#A65E2B"}},"\\x00\\x10\\x"),t("span",{style:{color:"#B56959"}},"C9"),t("span",{style:{color:"#A65E2B"}},"\\x"),t("span",{style:{color:"#B56959"}},"AD"),t("span",{style:{color:"#A65E2B"}},"\\x00\\x10\\x"),t("span",{style:{color:"#B56959"}},"CA"),t("span",{style:{color:"#A65E2B"}},"\\x"),t("span",{style:{color:"#B56959"}},'98"'),t("span",{style:{color:"#8E8F8B"}},";")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    ")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#A0ADA0"}},"    // UTF-8 decode")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#AB5959"}},"let"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8C862B"}},"utf8_s"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#AB5959"}},"="),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#6C7834"}},"std"),t("span",{style:{color:"#AB5959"}},"::"),t("span",{style:{color:"#6C7834"}},"str"),t("span",{style:{color:"#AB5959"}},"::"),t("span",{style:{color:"#6C7834"}},"from_utf8"),t("span",{style:{color:"#8E8F8B"}},"("),t("span",{style:{color:"#8C862B"}},"s"),t("span",{style:{color:"#8E8F8B"}},")"),t("span",{style:{color:"#AB5959"}},"."),t("span",{style:{color:"#6C7834"}},"unwrap"),t("span",{style:{color:"#8E8F8B"}},"();")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#6C7834"}},"println!"),t("span",{style:{color:"#8E8F8B"}},"("),t("span",{style:{color:"#B56959"}},'" UTF-8: '),t("span",{style:{color:"#8E8F8B"}},"{"),t("span",{style:{color:"#B56959"}},"utf8_s"),t("span",{style:{color:"#8E8F8B"}},"}"),t("span",{style:{color:"#B56959"}},'"'),t("span",{style:{color:"#8E8F8B"}},");")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    ")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#A0ADA0"}},"    // UTF-16 decode")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#AB5959"}},"let"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8C862B"}},"utf16"),t("span",{style:{color:"#AB5959"}},":"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#6C7834"}},"Vec"),t("span",{style:{color:"#8E8F8B"}},"<"),t("span",{style:{color:"#6C7834"}},"u16"),t("span",{style:{color:"#8E8F8B"}},">"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#AB5959"}},"="),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8C862B"}},"s"),t("span",{style:{color:"#AB5959"}},"."),t("span",{style:{color:"#6C7834"}},"chunks"),t("span",{style:{color:"#8E8F8B"}},"("),t("span",{style:{color:"#296AA3"}},"2"),t("span",{style:{color:"#8E8F8B"}},")")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"        "),t("span",{style:{color:"#AB5959"}},"."),t("span",{style:{color:"#6C7834"}},"map"),t("span",{style:{color:"#8E8F8B"}},"("),t("span",{style:{color:"#AB5959"}},"|"),t("span",{style:{color:"#8C862B"}},"c"),t("span",{style:{color:"#AB5959"}},"|"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8E8F8B"}},"("),t("span",{style:{color:"#8C862B"}},"c"),t("span",{style:{color:"#8E8F8B"}},"["),t("span",{style:{color:"#296AA3"}},"0"),t("span",{style:{color:"#8E8F8B"}},"]"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#1C6B48"}},"as"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#6C7834"}},"u16"),t("span",{style:{color:"#8E8F8B"}},")"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#AB5959"}},"<<"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#296AA3"}},"8"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#AB5959"}},"|"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8E8F8B"}},"("),t("span",{style:{color:"#8C862B"}},"c"),t("span",{style:{color:"#8E8F8B"}},"["),t("span",{style:{color:"#296AA3"}},"1"),t("span",{style:{color:"#8E8F8B"}},"]"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#1C6B48"}},"as"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#6C7834"}},"u16"),t("span",{style:{color:"#8E8F8B"}},"))")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"        "),t("span",{style:{color:"#AB5959"}},"."),t("span",{style:{color:"#6C7834"}},"collect"),t("span",{style:{color:"#8E8F8B"}},"();")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#AB5959"}},"let"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8C862B"}},"utf16_s"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#AB5959"}},"="),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#6C7834"}},"char"),t("span",{style:{color:"#AB5959"}},"::"),t("span",{style:{color:"#6C7834"}},"decode_utf16"),t("span",{style:{color:"#8E8F8B"}},"("),t("span",{style:{color:"#8C862B"}},"utf16"),t("span",{style:{color:"#8E8F8B"}},")")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"        "),t("span",{style:{color:"#AB5959"}},"."),t("span",{style:{color:"#6C7834"}},"map"),t("span",{style:{color:"#8E8F8B"}},"("),t("span",{style:{color:"#AB5959"}},"|"),t("span",{style:{color:"#8C862B"}},"r"),t("span",{style:{color:"#AB5959"}},"|"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8C862B"}},"r"),t("span",{style:{color:"#AB5959"}},"."),t("span",{style:{color:"#6C7834"}},"unwrap_or"),t("span",{style:{color:"#8E8F8B"}},"("),t("span",{style:{color:"#6C7834"}},"char"),t("span",{style:{color:"#AB5959"}},"::"),t("span",{style:{color:"#A65E2B"}},"REPLACEMENT_CHARACTER"),t("span",{style:{color:"#8E8F8B"}},"))")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"        "),t("span",{style:{color:"#AB5959"}},"."),t("span",{style:{color:"#6C7834"}},"collect"),t("span",{style:{color:"#AB5959"}},"::"),t("span",{style:{color:"#8E8F8B"}},"<"),t("span",{style:{color:"#6C7834"}},"String"),t("span",{style:{color:"#8E8F8B"}},">();")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#6C7834"}},"println!"),t("span",{style:{color:"#8E8F8B"}},"("),t("span",{style:{color:"#B56959"}},'"UTF-16: '),t("span",{style:{color:"#8E8F8B"}},"{"),t("span",{style:{color:"#B56959"}},"utf16_s"),t("span",{style:{color:"#8E8F8B"}},"}"),t("span",{style:{color:"#B56959"}},'"'),t("span",{style:{color:"#8E8F8B"}},");")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    ")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#A0ADA0"}},"    // UTF-32 decode")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#AB5959"}},"let"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8C862B"}},"utf32_s"),t("span",{style:{color:"#AB5959"}},":"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#6C7834"}},"String"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#AB5959"}},"="),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8C862B"}},"s"),t("span",{style:{color:"#AB5959"}},"."),t("span",{style:{color:"#6C7834"}},"chunks"),t("span",{style:{color:"#8E8F8B"}},"("),t("span",{style:{color:"#296AA3"}},"4"),t("span",{style:{color:"#8E8F8B"}},")")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"        "),t("span",{style:{color:"#AB5959"}},"."),t("span",{style:{color:"#6C7834"}},"map"),t("span",{style:{color:"#8E8F8B"}},"("),t("span",{style:{color:"#AB5959"}},"|"),t("span",{style:{color:"#8C862B"}},"c"),t("span",{style:{color:"#AB5959"}},"|"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8E8F8B"}},"("),t("span",{style:{color:"#8C862B"}},"c"),t("span",{style:{color:"#8E8F8B"}},"["),t("span",{style:{color:"#296AA3"}},"0"),t("span",{style:{color:"#8E8F8B"}},"]"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#1C6B48"}},"as"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#6C7834"}},"u32"),t("span",{style:{color:"#8E8F8B"}},")"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#AB5959"}},"<<"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#296AA3"}},"24"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#AB5959"}},"|"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8E8F8B"}},"("),t("span",{style:{color:"#8C862B"}},"c"),t("span",{style:{color:"#8E8F8B"}},"["),t("span",{style:{color:"#296AA3"}},"1"),t("span",{style:{color:"#8E8F8B"}},"]"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#1C6B48"}},"as"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#6C7834"}},"u32"),t("span",{style:{color:"#8E8F8B"}},")"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#AB5959"}},"<<"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#296AA3"}},"16"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#AB5959"}},"|"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8E8F8B"}},"("),t("span",{style:{color:"#8C862B"}},"c"),t("span",{style:{color:"#8E8F8B"}},"["),t("span",{style:{color:"#296AA3"}},"2"),t("span",{style:{color:"#8E8F8B"}},"]"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#1C6B48"}},"as"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#6C7834"}},"u32"),t("span",{style:{color:"#8E8F8B"}},")"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#AB5959"}},"<<"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#296AA3"}},"8"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#AB5959"}},"|"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8E8F8B"}},"("),t("span",{style:{color:"#8C862B"}},"c"),t("span",{style:{color:"#8E8F8B"}},"["),t("span",{style:{color:"#296AA3"}},"3"),t("span",{style:{color:"#8E8F8B"}},"]"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#1C6B48"}},"as"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#6C7834"}},"u32"),t("span",{style:{color:"#8E8F8B"}},"))")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"        "),t("span",{style:{color:"#AB5959"}},"."),t("span",{style:{color:"#6C7834"}},"map"),t("span",{style:{color:"#8E8F8B"}},"("),t("span",{style:{color:"#AB5959"}},"|"),t("span",{style:{color:"#8C862B"}},"c"),t("span",{style:{color:"#AB5959"}},"|"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#6C7834"}},"char"),t("span",{style:{color:"#AB5959"}},"::"),t("span",{style:{color:"#6C7834"}},"from_u32"),t("span",{style:{color:"#8E8F8B"}},"("),t("span",{style:{color:"#8C862B"}},"c"),t("span",{style:{color:"#8E8F8B"}},")"),t("span",{style:{color:"#AB5959"}},"."),t("span",{style:{color:"#6C7834"}},"unwrap"),t("span",{style:{color:"#8E8F8B"}},"())")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"        "),t("span",{style:{color:"#AB5959"}},"."),t("span",{style:{color:"#6C7834"}},"collect"),t("span",{style:{color:"#8E8F8B"}},"();")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#6C7834"}},"println!"),t("span",{style:{color:"#8E8F8B"}},"("),t("span",{style:{color:"#B56959"}},'"UTF-32: '),t("span",{style:{color:"#8E8F8B"}},"{}"),t("span",{style:{color:"#B56959"}},'"'),t("span",{style:{color:"#8E8F8B"}},","),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8C862B"}},"utf32_s"),t("span",{style:{color:"#8E8F8B"}},");")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),W9={__name:"50",setup(e){const n={hide:!1,srcSequence:"./pages/04-quirks.md"};return R(V),(s,o)=>{const r=Zt;return _(),W(Te,le(re(n)),{default:P(()=>[q9,M(r,ze({},{ranges:["all","1-2,23","1-6,23","1-2,8-15,23","1-2,17-23"]}),{default:P(()=>[j9]),_:1},16)]),_:1},16)}}},H9=z(W9,[["__file","/@slidev/slides/50.md"]]),V9=t("h2",null,"Capitalization (AKA Casemapping and Casefolding)",-1),z9=t("p",null,"All ASCII letters just so happen to be lossless when transitioning between upper and lower case versions. But this doesn’t apply to all languages and characters.",-1),K9=t("p",null,'Capitalization - "\\u0131" == "\\u0131".upcase.downcase. "\\u0131".upcase.downcase(:turkic)',-1),G9=t("p",null,"Fun fact: There are no RTL languages that have the concept of casing (Arabic, Hebrew, Persian, and more…)",-1),Y9={__name:"51",setup(e){const n={hide:!1,srcSequence:"./pages/04-quirks.md"};return R(V),(s,o)=>(_(),W(Te,le(re(n)),{default:P(()=>[V9,z9,K9,G9]),_:1},16))}},Q9=z(Y9,[["__file","/@slidev/slides/51.md"]]),Z9=t("h2",null,"Composition",-1),J9=t("p",null,"A[cute] E",-1),X9=t("ul",null,[t("li",null,[f("é = "),t("code",null,"\\u00e9")]),t("li",null,[f("é = "),t("code",null,"\\u0065\\u0301"),f(" (just an "),t("code",null,"e"),f(" but with special "),t("code",null,"\\u0301"),f(" combining)")])],-1),e4=t("pre",{class:"shiki-container"},[t("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#dbd7ca"}},"é != é")])])]),t("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#393a34"}},"é != é")])])])],-1),t4=t("p",null,[t("code",null,"\\u003d\\u0338\\u003d"),f(" vs. "),t("code",null,"\\u2260"),f(" vs. "),t("code",null,"!=")],-1),n4=t("pre",{class:"shiki-container"},[t("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#dbd7ca"}},"'≠=' != '≠' != '!='")])])]),t("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#393a34"}},"'≠=' != '≠' != '!='")])])])],-1),s4=t("p",null,"Not not equal",-1),o4=t("pre",{class:"shiki-container"},[t("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#dbd7ca"}},"=⃥")])])]),t("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#393a34"}},"=⃥")])])])],-1),r4=t("footer",null,[t("ul",null,[t("li",null,[f("Unicode combining classes: "),t("a",{href:"https://www.compart.com/en/unicode/combining",target:"_blank",rel:"noopener"},"https://www.compart.com/en/unicode/combining")]),t("li",null,[f("Unicode Normalization Forms: "),t("a",{href:"http://www.unicode.org/reports/tr15/",target:"_blank",rel:"noopener"},"http://www.unicode.org/reports/tr15/")]),t("li",null,[f("Crate unicode_normalization: "),t("a",{href:"https://docs.rs/unicode-normalization/latest/unicode_normalization/",target:"_blank",rel:"noopener"},"https://docs.rs/unicode-normalization/latest/unicode_normalization/")])])],-1),l4={__name:"52",setup(e){const n={hide:!1,srcSequence:"./pages/04-quirks.md"};return R(V),(s,o)=>(_(),W(Te,le(re(n)),{default:P(()=>[Z9,J9,X9,e4,t4,n4,s4,o4,r4]),_:1},16))}},a4=z(l4,[["__file","/@slidev/slides/52.md"]]),i4=t("h2",null,"Emoji Composition",-1),c4=t("p",{style:{"font-size":"65%","line-height":"1rem"}}," 😶‍🌫️ 😮‍💨 😵‍💫 ❤️‍🔥 ❤️‍🩹 👁️‍🗨️ 🫱🏻‍🫲🏼 🫱🏻‍🫲🏽 🫱🏻‍🫲🏾 🫱🏻‍🫲🏿 🫱🏼‍🫲🏻 🫱🏼‍🫲🏽 🫱🏼‍🫲🏾 🫱🏼‍🫲🏿 🫱🏽‍🫲🏻 🫱🏽‍🫲🏼 🫱🏽‍🫲🏾 🫱🏽‍🫲🏿 🫱🏾‍🫲🏻 🫱🏾‍🫲🏼 🫱🏾‍🫲🏽 🫱🏾‍🫲🏿 🫱🏿‍🫲🏻 🫱🏿‍🫲🏼 🫱🏿‍🫲🏽 🫱🏿‍🫲🏾 🧔‍♂️ 🧔🏻‍♂️ 🧔🏼‍♂️ 🧔🏽‍♂️ 🧔🏾‍♂️ 🧔🏿‍♂️ 🧔‍♀️ 🧔🏻‍♀️ 🧔🏼‍♀️ 🧔🏽‍♀️ 🧔🏾‍♀️ 🧔🏿‍♀️ 👨‍🦰 👨🏻‍🦰 👨🏼‍🦰 👨🏽‍🦰 👨🏾‍🦰 👨🏿‍🦰 👨‍🦱 👨🏻‍🦱 👨🏼‍🦱 👨🏽‍🦱 👨🏾‍🦱 👨🏿‍🦱 👨‍🦳 👨🏻‍🦳 👨🏼‍🦳 👨🏽‍🦳 👨🏾‍🦳 👨🏿‍🦳 👨‍🦲 👨🏻‍🦲 👨🏼‍🦲 👨🏽‍🦲 👨🏾‍🦲 👨🏿‍🦲 👩‍🦰 👩🏻‍🦰 👩🏼‍🦰 👩🏽‍🦰 👩🏾‍🦰 👩🏿‍🦰 🧑‍🦰 🧑🏻‍🦰 🧑🏼‍🦰 🧑🏽‍🦰 🧑🏾‍🦰 🧑🏿‍🦰 👩‍🦱 👩🏻‍🦱 👩🏼‍🦱 👩🏽‍🦱 👩🏾‍🦱 👩🏿‍🦱 🧑‍🦱 🧑🏻‍🦱 🧑🏼‍🦱 🧑🏽‍🦱 🧑🏾‍🦱 🧑🏿‍🦱 👩‍🦳 👩🏻‍🦳 👩🏼‍🦳 👩🏽‍🦳 👩🏾‍🦳 👩🏿‍🦳 🧑‍🦳 🧑🏻‍🦳 🧑🏼‍🦳 🧑🏽‍🦳 🧑🏾‍🦳 🧑🏿‍🦳 👩‍🦲 👩🏻‍🦲 👩🏼‍🦲 👩🏽‍🦲 👩🏾‍🦲 👩🏿‍🦲 🧑‍🦲 🧑🏻‍🦲 🧑🏼‍🦲 🧑🏽‍🦲 🧑🏾‍🦲 🧑🏿‍🦲 👱‍♀️ 👱🏻‍♀️ 👱🏼‍♀️ 👱🏽‍♀️ 👱🏾‍♀️ 👱🏿‍♀️ 👱‍♂️ 👱🏻‍♂️ 👱🏼‍♂️ 👱🏽‍♂️ 👱🏾‍♂️ 👱🏿‍♂️ 🙍‍♂️ 🙍🏻‍♂️ 🙍🏼‍♂️ 🙍🏽‍♂️ 🙍🏾‍♂️ 🙍🏿‍♂️ 🙍‍♀️ 🙍🏻‍♀️ 🙍🏼‍♀️ 🙍🏽‍♀️ 🙍🏾‍♀️ 🙍🏿‍♀️ 🙎‍♂️ 🙎🏻‍♂️ 🙎🏼‍♂️ 🙎🏽‍♂️ 🙎🏾‍♂️ 🙎🏿‍♂️ 🙎‍♀️ 🙎🏻‍♀️ 🙎🏼‍♀️ 🙎🏽‍♀️ 🙎🏾‍♀️ 🙎🏿‍♀️ 🙅‍♂️ 🙅🏻‍♂️ 🙅🏼‍♂️ 🙅🏽‍♂️ 🙅🏾‍♂️ 🙅🏿‍♂️ 🙅‍♀️ 🙅🏻‍♀️ 🙅🏼‍♀️ 🙅🏽‍♀️ 🙅🏾‍♀️ 🙅🏿‍♀️ 🙆‍♂️ 🙆🏻‍♂️ 🙆🏼‍♂️ 🙆🏽‍♂️ 🙆🏾‍♂️ 🙆🏿‍♂️ 🙆‍♀️ 🙆🏻‍♀️ 🙆🏼‍♀️ 🙆🏽‍♀️ 🙆🏾‍♀️ 🙆🏿‍♀️ 💁‍♂️ 💁🏻‍♂️ 💁🏼‍♂️ 💁🏽‍♂️ 💁🏾‍♂️ 💁🏿‍♂️ 💁‍♀️ 💁🏻‍♀️ 💁🏼‍♀️ 💁🏽‍♀️ 💁🏾‍♀️ 💁🏿‍♀️ 🙋‍♂️ 🙋🏻‍♂️ 🙋🏼‍♂️ 🙋🏽‍♂️ 🙋🏾‍♂️ 🙋🏿‍♂️ 🙋‍♀️ 🙋🏻‍♀️ 🙋🏼‍♀️ 🙋🏽‍♀️ 🙋🏾‍♀️ 🙋🏿‍♀️ 🧏‍♂️ 🧏🏻‍♂️ 🧏🏼‍♂️ 🧏🏽‍♂️ 🧏🏾‍♂️ 🧏🏿‍♂️ 🧏‍♀️ 🧏🏻‍♀️ 🧏🏼‍♀️ 🧏🏽‍♀️ 🧏🏾‍♀️ 🧏🏿‍♀️ 🙇‍♂️ 🙇🏻‍♂️ 🙇🏼‍♂️ 🙇🏽‍♂️ 🙇🏾‍♂️ 🙇🏿‍♂️ 🙇‍♀️ 🙇🏻‍♀️ 🙇🏼‍♀️ 🙇🏽‍♀️ 🙇🏾‍♀️ 🙇🏿‍♀️ 🤦‍♂️ 🤦🏻‍♂️ 🤦🏼‍♂️ 🤦🏽‍♂️ 🤦🏾‍♂️ 🤦🏿‍♂️ 🤦‍♀️ 🤦🏻‍♀️ 🤦🏼‍♀️ 🤦🏽‍♀️ 🤦🏾‍♀️ 🤦🏿‍♀️ 🤷‍♂️ 🤷🏻‍♂️ 🤷🏼‍♂️ 🤷🏽‍♂️ 🤷🏾‍♂️ 🤷🏿‍♂️ 🤷‍♀️ 🤷🏻‍♀️ 🤷🏼‍♀️ 🤷🏽‍♀️ 🤷🏾‍♀️ 🤷🏿‍♀️ 🧑‍⚕️ 🧑🏻‍⚕️ 🧑🏼‍⚕️ 🧑🏽‍⚕️ 🧑🏾‍⚕️ 🧑🏿‍⚕️ 👨‍⚕️ 👨🏻‍⚕️ 👨🏼‍⚕️ 👨🏽‍⚕️ 👨🏾‍⚕️ 👨🏿‍⚕️ 👩‍⚕️ 👩🏻‍⚕️ 👩🏼‍⚕️ 👩🏽‍⚕️ 👩🏾‍⚕️ 👩🏿‍⚕️ 🧑‍🎓 🧑🏻‍🎓 🧑🏼‍🎓 🧑🏽‍🎓 🧑🏾‍🎓 🧑🏿‍🎓 👨‍🎓 👨🏻‍🎓 👨🏼‍🎓 👨🏽‍🎓 👨🏾‍🎓 👨🏿‍🎓 👩‍🎓 👩🏻‍🎓 👩🏼‍🎓 👩🏽‍🎓 👩🏾‍🎓 👩🏿‍🎓 🧑‍🏫 🧑🏻‍🏫 🧑🏼‍🏫 🧑🏽‍🏫 🧑🏾‍🏫 🧑🏿‍🏫 👨‍🏫 👨🏻‍🏫 👨🏼‍🏫 👨🏽‍🏫 👨🏾‍🏫 👨🏿‍🏫 👩‍🏫 👩🏻‍🏫 👩🏼‍🏫 👩🏽‍🏫 👩🏾‍🏫 👩🏿‍🏫 🧑‍⚖️ 🧑🏻‍⚖️ 🧑🏼‍⚖️ 🧑🏽‍⚖️ 🧑🏾‍⚖️ 🧑🏿‍⚖️ 👨‍⚖️ 👨🏻‍⚖️ 👨🏼‍⚖️ 👨🏽‍⚖️ 👨🏾‍⚖️ 👨🏿‍⚖️ 👩‍⚖️ 👩🏻‍⚖️ 👩🏼‍⚖️ 👩🏽‍⚖️ 👩🏾‍⚖️ 👩🏿‍⚖️ 🧑‍🌾 🧑🏻‍🌾 🧑🏼‍🌾 🧑🏽‍🌾 🧑🏾‍🌾 🧑🏿‍🌾 👨‍🌾 👨🏻‍🌾 👨🏼‍🌾 👨🏽‍🌾 👨🏾‍🌾 👨🏿‍🌾 👩‍🌾 👩🏻‍🌾 👩🏼‍🌾 👩🏽‍🌾 👩🏾‍🌾 👩🏿‍🌾 🧑‍🍳 🧑🏻‍🍳 🧑🏼‍🍳 🧑🏽‍🍳 🧑🏾‍🍳 🧑🏿‍🍳 👨‍🍳 👨🏻‍🍳 👨🏼‍🍳 👨🏽‍🍳 👨🏾‍🍳 👨🏿‍🍳 👩‍🍳 👩🏻‍🍳 👩🏼‍🍳 👩🏽‍🍳 👩🏾‍🍳 👩🏿‍🍳 🧑‍🔧 🧑🏻‍🔧 🧑🏼‍🔧 🧑🏽‍🔧 🧑🏾‍🔧 🧑🏿‍🔧 👨‍🔧 👨🏻‍🔧 👨🏼‍🔧 👨🏽‍🔧 👨🏾‍🔧 👨🏿‍🔧 👩‍🔧 👩🏻‍🔧 👩🏼‍🔧 👩🏽‍🔧 👩🏾‍🔧 👩🏿‍🔧 🧑‍🏭 🧑🏻‍🏭 🧑🏼‍🏭 🧑🏽‍🏭 🧑🏾‍🏭 🧑🏿‍🏭 👨‍🏭 👨🏻‍🏭 👨🏼‍🏭 👨🏽‍🏭 👨🏾‍🏭 👨🏿‍🏭 👩‍🏭 👩🏻‍🏭 👩🏼‍🏭 👩🏽‍🏭 👩🏾‍🏭 👩🏿‍🏭 🧑‍💼 🧑🏻‍💼 🧑🏼‍💼 🧑🏽‍💼 🧑🏾‍💼 🧑🏿‍💼 👨‍💼 👨🏻‍💼 👨🏼‍💼 👨🏽‍💼 👨🏾‍💼 👨🏿‍💼 👩‍💼 👩🏻‍💼 👩🏼‍💼 👩🏽‍💼 👩🏾‍💼 👩🏿‍💼 🧑‍🔬 🧑🏻‍🔬 🧑🏼‍🔬 🧑🏽‍🔬 🧑🏾‍🔬 🧑🏿‍🔬 👨‍🔬 👨🏻‍🔬 👨🏼‍🔬 👨🏽‍🔬 👨🏾‍🔬 👨🏿‍🔬 👩‍🔬 👩🏻‍🔬 👩🏼‍🔬 👩🏽‍🔬 👩🏾‍🔬 👩🏿‍🔬 🧑‍💻 🧑🏻‍💻 🧑🏼‍💻 🧑🏽‍💻 🧑🏾‍💻 🧑🏿‍💻 👨‍💻 👨🏻‍💻 👨🏼‍💻 👨🏽‍💻 👨🏾‍💻 👨🏿‍💻 👩‍💻 👩🏻‍💻 👩🏼‍💻 👩🏽‍💻 👩🏾‍💻 👩🏿‍💻 🧑‍🎤 🧑🏻‍🎤 🧑🏼‍🎤 🧑🏽‍🎤 🧑🏾‍🎤 🧑🏿‍🎤 👨‍🎤 👨🏻‍🎤 👨🏼‍🎤 👨🏽‍🎤 👨🏾‍🎤 👨🏿‍🎤 👩‍🎤 👩🏻‍🎤 👩🏼‍🎤 👩🏽‍🎤 👩🏾‍🎤 👩🏿‍🎤 🧑‍🎨 🧑🏻‍🎨 🧑🏼‍🎨 🧑🏽‍🎨 🧑🏾‍🎨 🧑🏿‍🎨 👨‍🎨 👨🏻‍🎨 👨🏼‍🎨 👨🏽‍🎨 👨🏾‍🎨 👨🏿‍🎨 👩‍🎨 👩🏻‍🎨 👩🏼‍🎨 👩🏽‍🎨 👩🏾‍🎨 👩🏿‍🎨 🧑‍✈️ 🧑🏻‍✈️ 🧑🏼‍✈️ 🧑🏽‍✈️ 🧑🏾‍✈️ 🧑🏿‍✈️ 👨‍✈️ 👨🏻‍✈️ 👨🏼‍✈️ 👨🏽‍✈️ 👨🏾‍✈️ 👨🏿‍✈️ 👩‍✈️ 👩🏻‍✈️ 👩🏼‍✈️ 👩🏽‍✈️ 👩🏾‍✈️ 👩🏿‍✈️ 🧑‍🚀 🧑🏻‍🚀 🧑🏼‍🚀 🧑🏽‍🚀 🧑🏾‍🚀 🧑🏿‍🚀 👨‍🚀 👨🏻‍🚀 👨🏼‍🚀 👨🏽‍🚀 👨🏾‍🚀 👨🏿‍🚀 👩‍🚀 👩🏻‍🚀 👩🏼‍🚀 👩🏽‍🚀 👩🏾‍🚀 👩🏿‍🚀 🧑‍🚒 🧑🏻‍🚒 🧑🏼‍🚒 🧑🏽‍🚒 🧑🏾‍🚒 🧑🏿‍🚒 👨‍🚒 👨🏻‍🚒 👨🏼‍🚒 👨🏽‍🚒 👨🏾‍🚒 👨🏿‍🚒 👩‍🚒 👩🏻‍🚒 👩🏼‍🚒 👩🏽‍🚒 👩🏾‍🚒 👩🏿‍🚒 👮‍♂️ 👮🏻‍♂️ 👮🏼‍♂️ 👮🏽‍♂️ 👮🏾‍♂️ 👮🏿‍♂️ 👮‍♀️ 👮🏻‍♀️ 👮🏼‍♀️ 👮🏽‍♀️ 👮🏾‍♀️ 👮🏿‍♀️ 🕵️‍♂️ 🕵🏻‍♂️ 🕵🏼‍♂️ 🕵🏽‍♂️ 🕵🏾‍♂️ 🕵🏿‍♂️ 🕵️‍♀️ 🕵🏻‍♀️ 🕵🏼‍♀️ 🕵🏽‍♀️ 🕵🏾‍♀️ 🕵🏿‍♀️ 💂‍♂️ 💂🏻‍♂️ 💂🏼‍♂️ 💂🏽‍♂️ 💂🏾‍♂️ 💂🏿‍♂️ 💂‍♀️ 💂🏻‍♀️ 💂🏼‍♀️ 💂🏽‍♀️ 💂🏾‍♀️ 💂🏿‍♀️ 👷‍♂️ 👷🏻‍♂️ 👷🏼‍♂️ 👷🏽‍♂️ 👷🏾‍♂️ 👷🏿‍♂️ 👷‍♀️ 👷🏻‍♀️ 👷🏼‍♀️ 👷🏽‍♀️ 👷🏾‍♀️ 👷🏿‍♀️ 👳‍♂️ 👳🏻‍♂️ 👳🏼‍♂️ 👳🏽‍♂️ 👳🏾‍♂️ 👳🏿‍♂️ 👳‍♀️ 👳🏻‍♀️ 👳🏼‍♀️ 👳🏽‍♀️ 👳🏾‍♀️ 👳🏿‍♀️ 🤵‍♂️ 🤵🏻‍♂️ 🤵🏼‍♂️ 🤵🏽‍♂️ 🤵🏾‍♂️ 🤵🏿‍♂️ 🤵‍♀️ 🤵🏻‍♀️ 🤵🏼‍♀️ 🤵🏽‍♀️ 🤵🏾‍♀️ 🤵🏿‍♀️ 👰‍♂️ 👰🏻‍♂️ 👰🏼‍♂️ 👰🏽‍♂️ 👰🏾‍♂️ 👰🏿‍♂️ 👰‍♀️ 👰🏻‍♀️ 👰🏼‍♀️ 👰🏽‍♀️ 👰🏾‍♀️ 👰🏿‍♀️ 👩‍🍼 👩🏻‍🍼 👩🏼‍🍼 👩🏽‍🍼 👩🏾‍🍼 👩🏿‍🍼 👨‍🍼 👨🏻‍🍼 👨🏼‍🍼 👨🏽‍🍼 👨🏾‍🍼 👨🏿‍🍼 🧑‍🍼 🧑🏻‍🍼 🧑🏼‍🍼 🧑🏽‍🍼 🧑🏾‍🍼 🧑🏿‍🍼 🧑‍🎄 🧑🏻‍🎄 🧑🏼‍🎄 🧑🏽‍🎄 🧑🏾‍🎄 🧑🏿‍🎄 🦸‍♂️ 🦸🏻‍♂️ 🦸🏼‍♂️ 🦸🏽‍♂️ 🦸🏾‍♂️ 🦸🏿‍♂️ 🦸‍♀️ 🦸🏻‍♀️ 🦸🏼‍♀️ 🦸🏽‍♀️ 🦸🏾‍♀️ 🦸🏿‍♀️ 🦹‍♂️ 🦹🏻‍♂️ 🦹🏼‍♂️ 🦹🏽‍♂️ 🦹🏾‍♂️ 🦹🏿‍♂️ 🦹‍♀️ 🦹🏻‍♀️ 🦹🏼‍♀️ 🦹🏽‍♀️ 🦹🏾‍♀️ 🦹🏿‍♀️ 🧙‍♂️ 🧙🏻‍♂️ 🧙🏼‍♂️ 🧙🏽‍♂️ 🧙🏾‍♂️ 🧙🏿‍♂️ 🧙‍♀️ 🧙🏻‍♀️ 🧙🏼‍♀️ 🧙🏽‍♀️ 🧙🏾‍♀️ 🧙🏿‍♀️ 🧚‍♂️ 🧚🏻‍♂️ 🧚🏼‍♂️ 🧚🏽‍♂️ 🧚🏾‍♂️ 🧚🏿‍♂️ 🧚‍♀️ 🧚🏻‍♀️ 🧚🏼‍♀️ 🧚🏽‍♀️ 🧚🏾‍♀️ 🧚🏿‍♀️ 🧛‍♂️ 🧛🏻‍♂️ 🧛🏼‍♂️ 🧛🏽‍♂️ 🧛🏾‍♂️ 🧛🏿‍♂️ 🧛‍♀️ 🧛🏻‍♀️ 🧛🏼‍♀️ 🧛🏽‍♀️ 🧛🏾‍♀️ 🧛🏿‍♀️ 🧜‍♂️ 🧜🏻‍♂️ 🧜🏼‍♂️ 🧜🏽‍♂️ 🧜🏾‍♂️ 🧜🏿‍♂️ 🧜‍♀️ 🧜🏻‍♀️ 🧜🏼‍♀️ 🧜🏽‍♀️ 🧜🏾‍♀️ 🧜🏿‍♀️ 🧝‍♂️ 🧝🏻‍♂️ 🧝🏼‍♂️ 🧝🏽‍♂️ 🧝🏾‍♂️ 🧝🏿‍♂️ 🧝‍♀️ 🧝🏻‍♀️ 🧝🏼‍♀️ 🧝🏽‍♀️ 🧝🏾‍♀️ 🧝🏿‍♀️ 🧞‍♂️ 🧞‍♀️ 🧟‍♂️ 🧟‍♀️ 💆‍♂️ 💆🏻‍♂️ 💆🏼‍♂️ 💆🏽‍♂️ 💆🏾‍♂️ 💆🏿‍♂️ 💆‍♀️ 💆🏻‍♀️ 💆🏼‍♀️ 💆🏽‍♀️ 💆🏾‍♀️ 💆🏿‍♀️ 💇‍♂️ 💇🏻‍♂️ 💇🏼‍♂️ 💇🏽‍♂️ 💇🏾‍♂️ 💇🏿‍♂️ 💇‍♀️ 💇🏻‍♀️ 💇🏼‍♀️ 💇🏽‍♀️ 💇🏾‍♀️ 💇🏿‍♀️ 🚶‍♂️ 🚶🏻‍♂️ 🚶🏼‍♂️ 🚶🏽‍♂️ 🚶🏾‍♂️ 🚶🏿‍♂️ 🚶‍♀️ 🚶🏻‍♀️ 🚶🏼‍♀️ 🚶🏽‍♀️ 🚶🏾‍♀️ 🚶🏿‍♀️ 🧍‍♂️ 🧍🏻‍♂️ 🧍🏼‍♂️ 🧍🏽‍♂️ 🧍🏾‍♂️ 🧍🏿‍♂️ 🧍‍♀️ 🧍🏻‍♀️ 🧍🏼‍♀️ 🧍🏽‍♀️ 🧍🏾‍♀️ 🧍🏿‍♀️ 🧎‍♂️ 🧎🏻‍♂️ 🧎🏼‍♂️ 🧎🏽‍♂️ 🧎🏾‍♂️ 🧎🏿‍♂️ 🧎‍♀️ 🧎🏻‍♀️ 🧎🏼‍♀️ 🧎🏽‍♀️ 🧎🏾‍♀️ 🧎🏿‍♀️ 🧑‍🦯 🧑🏻‍🦯 🧑🏼‍🦯 🧑🏽‍🦯 🧑🏾‍🦯 🧑🏿‍🦯 👨‍🦯 👨🏻‍🦯 👨🏼‍🦯 👨🏽‍🦯 👨🏾‍🦯 👨🏿‍🦯 👩‍🦯 👩🏻‍🦯 👩🏼‍🦯 👩🏽‍🦯 👩🏾‍🦯 👩🏿‍🦯 🧑‍🦼 🧑🏻‍🦼 🧑🏼‍🦼 🧑🏽‍🦼 🧑🏾‍🦼 🧑🏿‍🦼 👨‍🦼 👨🏻‍🦼 👨🏼‍🦼 👨🏽‍🦼 👨🏾‍🦼 👨🏿‍🦼 👩‍🦼 👩🏻‍🦼 👩🏼‍🦼 👩🏽‍🦼 👩🏾‍🦼 👩🏿‍🦼 🧑‍🦽 🧑🏻‍🦽 🧑🏼‍🦽 🧑🏽‍🦽 🧑🏾‍🦽 🧑🏿‍🦽 👨‍🦽 👨🏻‍🦽 👨🏼‍🦽 👨🏽‍🦽 👨🏾‍🦽 👨🏿‍🦽 👩‍🦽 👩🏻‍🦽 👩🏼‍🦽 👩🏽‍🦽 👩🏾‍🦽 👩🏿‍🦽 🏃‍♂️ 🏃🏻‍♂️ 🏃🏼‍♂️ 🏃🏽‍♂️ 🏃🏾‍♂️ 🏃🏿‍♂️ 🏃‍♀️ 🏃🏻‍♀️ 🏃🏼‍♀️ 🏃🏽‍♀️ 🏃🏾‍♀️ 🏃🏿‍♀️ 👯‍♂️ 👯‍♀️ 🧖‍♂️ 🧖🏻‍♂️ 🧖🏼‍♂️ 🧖🏽‍♂️ 🧖🏾‍♂️ 🧖🏿‍♂️ 🧖‍♀️ 🧖🏻‍♀️ 🧖🏼‍♀️ 🧖🏽‍♀️ 🧖🏾‍♀️ 🧖🏿‍♀️ 🧗‍♂️ 🧗🏻‍♂️ 🧗🏼‍♂️ 🧗🏽‍♂️ 🧗🏾‍♂️ 🧗🏿‍♂️ 🧗‍♀️ 🧗🏻‍♀️ 🧗🏼‍♀️ 🧗🏽‍♀️ 🧗🏾‍♀️ 🧗🏿‍♀️ 🏌️‍♂️ 🏌🏻‍♂️ 🏌🏼‍♂️ 🏌🏽‍♂️ 🏌🏾‍♂️ 🏌🏿‍♂️ 🏌️‍♀️ 🏌🏻‍♀️ 🏌🏼‍♀️ 🏌🏽‍♀️ 🏌🏾‍♀️ 🏌🏿‍♀️ 🏄‍♂️ 🏄🏻‍♂️ 🏄🏼‍♂️ 🏄🏽‍♂️ 🏄🏾‍♂️ 🏄🏿‍♂️ 🏄‍♀️ 🏄🏻‍♀️ 🏄🏼‍♀️ 🏄🏽‍♀️ 🏄🏾‍♀️ 🏄🏿‍♀️ 🚣‍♂️ 🚣🏻‍♂️ 🚣🏼‍♂️ 🚣🏽‍♂️ 🚣🏾‍♂️ 🚣🏿‍♂️ 🚣‍♀️ 🚣🏻‍♀️ 🚣🏼‍♀️ 🚣🏽‍♀️ 🚣🏾‍♀️ 🚣🏿‍♀️ 🏊‍♂️ 🏊🏻‍♂️ 🏊🏼‍♂️ 🏊🏽‍♂️ 🏊🏾‍♂️ 🏊🏿‍♂️ 🏊‍♀️ 🏊🏻‍♀️ 🏊🏼‍♀️ 🏊🏽‍♀️ 🏊🏾‍♀️ 🏊🏿‍♀️ ⛹️‍♂️ ⛹🏻‍♂️ ⛹🏼‍♂️ ⛹🏽‍♂️ ⛹🏾‍♂️ ⛹🏿‍♂️ ⛹️‍♀️ ⛹🏻‍♀️ ⛹🏼‍♀️ ⛹🏽‍♀️ ⛹🏾‍♀️ ⛹🏿‍♀️ 🏋️‍♂️ 🏋🏻‍♂️ 🏋🏼‍♂️ 🏋🏽‍♂️ 🏋🏾‍♂️ 🏋🏿‍♂️ 🏋️‍♀️ 🏋🏻‍♀️ 🏋🏼‍♀️ 🏋🏽‍♀️ 🏋🏾‍♀️ 🏋🏿‍♀️ 🚴‍♂️ 🚴🏻‍♂️ 🚴🏼‍♂️ 🚴🏽‍♂️ 🚴🏾‍♂️ 🚴🏿‍♂️ 🚴‍♀️ 🚴🏻‍♀️ 🚴🏼‍♀️ 🚴🏽‍♀️ 🚴🏾‍♀️ 🚴🏿‍♀️ 🚵‍♂️ 🚵🏻‍♂️ 🚵🏼‍♂️ 🚵🏽‍♂️ 🚵🏾‍♂️ 🚵🏿‍♂️ 🚵‍♀️ 🚵🏻‍♀️ 🚵🏼‍♀️ 🚵🏽‍♀️ 🚵🏾‍♀️ 🚵🏿‍♀️ 🤸‍♂️ 🤸🏻‍♂️ 🤸🏼‍♂️ 🤸🏽‍♂️ 🤸🏾‍♂️ 🤸🏿‍♂️ 🤸‍♀️ 🤸🏻‍♀️ 🤸🏼‍♀️ 🤸🏽‍♀️ 🤸🏾‍♀️ 🤸🏿‍♀️ 🤼‍♂️ 🤼‍♀️ 🤽‍♂️ 🤽🏻‍♂️ 🤽🏼‍♂️ 🤽🏽‍♂️ 🤽🏾‍♂️ 🤽🏿‍♂️ 🤽‍♀️ 🤽🏻‍♀️ 🤽🏼‍♀️ 🤽🏽‍♀️ 🤽🏾‍♀️ 🤽🏿‍♀️ 🤾‍♂️ 🤾🏻‍♂️ 🤾🏼‍♂️ 🤾🏽‍♂️ 🤾🏾‍♂️ 🤾🏿‍♂️ 🤾‍♀️ 🤾🏻‍♀️ 🤾🏼‍♀️ 🤾🏽‍♀️ 🤾🏾‍♀️ 🤾🏿‍♀️ 🤹‍♂️ 🤹🏻‍♂️ 🤹🏼‍♂️ 🤹🏽‍♂️ 🤹🏾‍♂️ 🤹🏿‍♂️ 🤹‍♀️ 🤹🏻‍♀️ 🤹🏼‍♀️ 🤹🏽‍♀️ 🤹🏾‍♀️ 🤹🏿‍♀️ 🧘‍♂️ 🧘🏻‍♂️ 🧘🏼‍♂️ 🧘🏽‍♂️ 🧘🏾‍♂️ 🧘🏿‍♂️ 🧘‍♀️ 🧘🏻‍♀️ 🧘🏼‍♀️ 🧘🏽‍♀️ 🧘🏾‍♀️ 🧘🏿‍♀️ 🧑‍🤝‍🧑 🧑🏻‍🤝‍🧑🏻 🧑🏻‍🤝‍🧑🏼 🧑🏻‍🤝‍🧑🏽 🧑🏻‍🤝‍🧑🏾 🧑🏻‍🤝‍🧑🏿 🧑🏼‍🤝‍🧑🏻 🧑🏼‍🤝‍🧑🏼 🧑🏼‍🤝‍🧑🏽 🧑🏼‍🤝‍🧑🏾 🧑🏼‍🤝‍🧑🏿 🧑🏽‍🤝‍🧑🏻 🧑🏽‍🤝‍🧑🏼 🧑🏽‍🤝‍🧑🏽 🧑🏽‍🤝‍🧑🏾 🧑🏽‍🤝‍🧑🏿 🧑🏾‍🤝‍🧑🏻 🧑🏾‍🤝‍🧑🏼 🧑🏾‍🤝‍🧑🏽 🧑🏾‍🤝‍🧑🏾 🧑🏾‍🤝‍🧑🏿 🧑🏿‍🤝‍🧑🏻 🧑🏿‍🤝‍🧑🏼 🧑🏿‍🤝‍🧑🏽 🧑🏿‍🤝‍🧑🏾 🧑🏿‍🤝‍🧑🏿 👩🏻‍🤝‍👩🏼 👩🏻‍🤝‍👩🏽 👩🏻‍🤝‍👩🏾 👩🏻‍🤝‍👩🏿 👩🏼‍🤝‍👩🏻 👩🏼‍🤝‍👩🏽 👩🏼‍🤝‍👩🏾 👩🏼‍🤝‍👩🏿 👩🏽‍🤝‍👩🏻 👩🏽‍🤝‍👩🏼 👩🏽‍🤝‍👩🏾 👩🏽‍🤝‍👩🏿 👩🏾‍🤝‍👩🏻 👩🏾‍🤝‍👩🏼 👩🏾‍🤝‍👩🏽 👩🏾‍🤝‍👩🏿 👩🏿‍🤝‍👩🏻 👩🏿‍🤝‍👩🏼 👩🏿‍🤝‍👩🏽 👩🏿‍🤝‍👩🏾 👩🏻‍🤝‍👨🏼 👩🏻‍🤝‍👨🏽 👩🏻‍🤝‍👨🏾 👩🏻‍🤝‍👨🏿 👩🏼‍🤝‍👨🏻 👩🏼‍🤝‍👨🏽 👩🏼‍🤝‍👨🏾 👩🏼‍🤝‍👨🏿 👩🏽‍🤝‍👨🏻 👩🏽‍🤝‍👨🏼 👩🏽‍🤝‍👨🏾 👩🏽‍🤝‍👨🏿 👩🏾‍🤝‍👨🏻 👩🏾‍🤝‍👨🏼 👩🏾‍🤝‍👨🏽 👩🏾‍🤝‍👨🏿 👩🏿‍🤝‍👨🏻 👩🏿‍🤝‍👨🏼 👩🏿‍🤝‍👨🏽 👩🏿‍🤝‍👨🏾 👨🏻‍🤝‍👨🏼 👨🏻‍🤝‍👨🏽 👨🏻‍🤝‍👨🏾 👨🏻‍🤝‍👨🏿 👨🏼‍🤝‍👨🏻 👨🏼‍🤝‍👨🏽 👨🏼‍🤝‍👨🏾 👨🏼‍🤝‍👨🏿 👨🏽‍🤝‍👨🏻 👨🏽‍🤝‍👨🏼 👨🏽‍🤝‍👨🏾 👨🏽‍🤝‍👨🏿 👨🏾‍🤝‍👨🏻 👨🏾‍🤝‍👨🏼 👨🏾‍🤝‍👨🏽 👨🏾‍🤝‍👨🏿 👨🏿‍🤝‍👨🏻 👨🏿‍🤝‍👨🏼 👨🏿‍🤝‍👨🏽 👨🏿‍🤝‍👨🏾 💏 🧑🏻‍❤️‍💋‍🧑🏼 🧑🏻‍❤️‍💋‍🧑🏽 🧑🏻‍❤️‍💋‍🧑🏾 🧑🏻‍❤️‍💋‍🧑🏿 🧑🏼‍❤️‍💋‍🧑🏻 🧑🏼‍❤️‍💋‍🧑🏽 🧑🏼‍❤️‍💋‍🧑🏾 🧑🏼‍❤️‍💋‍🧑🏿 🧑🏽‍❤️‍💋‍🧑🏻 🧑🏽‍❤️‍💋‍🧑🏼 🧑🏽‍❤️‍💋‍🧑🏾 🧑🏽‍❤️‍💋‍🧑🏿 🧑🏾‍❤️‍💋‍🧑🏻 🧑🏾‍❤️‍💋‍🧑🏼 🧑🏾‍❤️‍💋‍🧑🏽 🧑🏾‍❤️‍💋‍🧑🏿 🧑🏿‍❤️‍💋‍🧑🏻 🧑🏿‍❤️‍💋‍🧑🏼 🧑🏿‍❤️‍💋‍🧑🏽 🧑🏿‍❤️‍💋‍🧑🏾 👩‍❤️‍💋‍👨 👩🏻‍❤️‍💋‍👨🏻 👩🏻‍❤️‍💋‍👨🏼 👩🏻‍❤️‍💋‍👨🏽 👩🏻‍❤️‍💋‍👨🏾 👩🏻‍❤️‍💋‍👨🏿 👩🏼‍❤️‍💋‍👨🏻 👩🏼‍❤️‍💋‍👨🏼 👩🏼‍❤️‍💋‍👨🏽 👩🏼‍❤️‍💋‍👨🏾 👩🏼‍❤️‍💋‍👨🏿 👩🏽‍❤️‍💋‍👨🏻 👩🏽‍❤️‍💋‍👨🏼 👩🏽‍❤️‍💋‍👨🏽 👩🏽‍❤️‍💋‍👨🏾 👩🏽‍❤️‍💋‍👨🏿 👩🏾‍❤️‍💋‍👨🏻 👩🏾‍❤️‍💋‍👨🏼 👩🏾‍❤️‍💋‍👨🏽 👩🏾‍❤️‍💋‍👨🏾 👩🏾‍❤️‍💋‍👨🏿 👩🏿‍❤️‍💋‍👨🏻 👩🏿‍❤️‍💋‍👨🏼 👩🏿‍❤️‍💋‍👨🏽 👩🏿‍❤️‍💋‍👨🏾 👩🏿‍❤️‍💋‍👨🏿 👨‍❤️‍💋‍👨 👨🏻‍❤️‍💋‍👨🏻 👨🏻‍❤️‍💋‍👨🏼 👨🏻‍❤️‍💋‍👨🏽 👨🏻‍❤️‍💋‍👨🏾 👨🏻‍❤️‍💋‍👨🏿 👨🏼‍❤️‍💋‍👨🏻 👨🏼‍❤️‍💋‍👨🏼 👨🏼‍❤️‍💋‍👨🏽 👨🏼‍❤️‍💋‍👨🏾 👨🏼‍❤️‍💋‍👨🏿 👨🏽‍❤️‍💋‍👨🏻 👨🏽‍❤️‍💋‍👨🏼 👨🏽‍❤️‍💋‍👨🏽 👨🏽‍❤️‍💋‍👨🏾 👨🏽‍❤️‍💋‍👨🏿 👨🏾‍❤️‍💋‍👨🏻 👨🏾‍❤️‍💋‍👨🏼 👨🏾‍❤️‍💋‍👨🏽 👨🏾‍❤️‍💋‍👨🏾 👨🏾‍❤️‍💋‍👨🏿 👨🏿‍❤️‍💋‍👨🏻 👨🏿‍❤️‍💋‍👨🏼 👨🏿‍❤️‍💋‍👨🏽 👨🏿‍❤️‍💋‍👨🏾 👨🏿‍❤️‍💋‍👨🏿 👩‍❤️‍💋‍👩 👩🏻‍❤️‍💋‍👩🏻 👩🏻‍❤️‍💋‍👩🏼 👩🏻‍❤️‍💋‍👩🏽 👩🏻‍❤️‍💋‍👩🏾 👩🏻‍❤️‍💋‍👩🏿 👩🏼‍❤️‍💋‍👩🏻 👩🏼‍❤️‍💋‍👩🏼 👩🏼‍❤️‍💋‍👩🏽 👩🏼‍❤️‍💋‍👩🏾 👩🏼‍❤️‍💋‍👩🏿 👩🏽‍❤️‍💋‍👩🏻 👩🏽‍❤️‍💋‍👩🏼 👩🏽‍❤️‍💋‍👩🏽 👩🏽‍❤️‍💋‍👩🏾 👩🏽‍❤️‍💋‍👩🏿 👩🏾‍❤️‍💋‍👩🏻 👩🏾‍❤️‍💋‍👩🏼 👩🏾‍❤️‍💋‍👩🏽 👩🏾‍❤️‍💋‍👩🏾 👩🏾‍❤️‍💋‍👩🏿 👩🏿‍❤️‍💋‍👩🏻 👩🏿‍❤️‍💋‍👩🏼 👩🏿‍❤️‍💋‍👩🏽 👩🏿‍❤️‍💋‍👩🏾 👩🏿‍❤️‍💋‍👩🏿 💑 🧑🏻‍❤️‍🧑🏼 🧑🏻‍❤️‍🧑🏽 🧑🏻‍❤️‍🧑🏾 🧑🏻‍❤️‍🧑🏿 🧑🏼‍❤️‍🧑🏻 🧑🏼‍❤️‍🧑🏽 🧑🏼‍❤️‍🧑🏾 🧑🏼‍❤️‍🧑🏿 🧑🏽‍❤️‍🧑🏻 🧑🏽‍❤️‍🧑🏼 🧑🏽‍❤️‍🧑🏾 🧑🏽‍❤️‍🧑🏿 🧑🏾‍❤️‍🧑🏻 🧑🏾‍❤️‍🧑🏼 🧑🏾‍❤️‍🧑🏽 🧑🏾‍❤️‍🧑🏿 🧑🏿‍❤️‍🧑🏻 🧑🏿‍❤️‍🧑🏼 🧑🏿‍❤️‍🧑🏽 🧑🏿‍❤️‍🧑🏾 👩‍❤️‍👨 👩🏻‍❤️‍👨🏻 👩🏻‍❤️‍👨🏼 👩🏻‍❤️‍👨🏽 👩🏻‍❤️‍👨🏾 👩🏻‍❤️‍👨🏿 👩🏼‍❤️‍👨🏻 👩🏼‍❤️‍👨🏼 👩🏼‍❤️‍👨🏽 👩🏼‍❤️‍👨🏾 👩🏼‍❤️‍👨🏿 👩🏽‍❤️‍👨🏻 👩🏽‍❤️‍👨🏼 👩🏽‍❤️‍👨🏽 👩🏽‍❤️‍👨🏾 👩🏽‍❤️‍👨🏿 👩🏾‍❤️‍👨🏻 👩🏾‍❤️‍👨🏼 👩🏾‍❤️‍👨🏽 👩🏾‍❤️‍👨🏾 👩🏾‍❤️‍👨🏿 👩🏿‍❤️‍👨🏻 👩🏿‍❤️‍👨🏼 👩🏿‍❤️‍👨🏽 👩🏿‍❤️‍👨🏾 👩🏿‍❤️‍👨🏿 👨‍❤️‍👨 👨🏻‍❤️‍👨🏻 👨🏻‍❤️‍👨🏼 👨🏻‍❤️‍👨🏽 👨🏻‍❤️‍👨🏾 👨🏻‍❤️‍👨🏿 👨🏼‍❤️‍👨🏻 👨🏼‍❤️‍👨🏼 👨🏼‍❤️‍👨🏽 👨🏼‍❤️‍👨🏾 👨🏼‍❤️‍👨🏿 👨🏽‍❤️‍👨🏻 👨🏽‍❤️‍👨🏼 👨🏽‍❤️‍👨🏽 👨🏽‍❤️‍👨🏾 👨🏽‍❤️‍👨🏿 👨🏾‍❤️‍👨🏻 👨🏾‍❤️‍👨🏼 👨🏾‍❤️‍👨🏽 👨🏾‍❤️‍👨🏾 👨🏾‍❤️‍👨🏿 👨🏿‍❤️‍👨🏻 👨🏿‍❤️‍👨🏼 👨🏿‍❤️‍👨🏽 👨🏿‍❤️‍👨🏾 👨🏿‍❤️‍👨🏿 👩‍❤️‍👩 👩🏻‍❤️‍👩🏻 👩🏻‍❤️‍👩🏼 👩🏻‍❤️‍👩🏽 👩🏻‍❤️‍👩🏾 👩🏻‍❤️‍👩🏿 👩🏼‍❤️‍👩🏻 👩🏼‍❤️‍👩🏼 👩🏼‍❤️‍👩🏽 👩🏼‍❤️‍👩🏾 👩🏼‍❤️‍👩🏿 👩🏽‍❤️‍👩🏻 👩🏽‍❤️‍👩🏼 👩🏽‍❤️‍👩🏽 👩🏽‍❤️‍👩🏾 👩🏽‍❤️‍👩🏿 👩🏾‍❤️‍👩🏻 👩🏾‍❤️‍👩🏼 👩🏾‍❤️‍👩🏽 👩🏾‍❤️‍👩🏾 👩🏾‍❤️‍👩🏿 👩🏿‍❤️‍👩🏻 👩🏿‍❤️‍👩🏼 👩🏿‍❤️‍👩🏽 👩🏿‍❤️‍👩🏾 👩🏿‍❤️‍👩🏿 👪 👨‍👩‍👦 👨‍👩‍👧 👨‍👩‍👧‍👦 👨‍👩‍👦‍👦 👨‍👩‍👧‍👧 👨‍👨‍👦 👨‍👨‍👧 👨‍👨‍👧‍👦 👨‍👨‍👦‍👦 👨‍👨‍👧‍👧 👩‍👩‍👦 👩‍👩‍👧 👩‍👩‍👧‍👦 👩‍👩‍👦‍👦 👩‍👩‍👧‍👧 👨‍👦 👨‍👦‍👦 👨‍👧 👨‍👧‍👦 👨‍👧‍👧 👩‍👦 👩‍👦‍👦 👩‍👧 👩‍👧‍👦 👩‍👧‍👧 🐕‍🦺 🐈‍⬛ 🐻‍❄️ 🐦‍⬛ 🏳️‍🌈 🏳️‍⚧️ 🏴‍☠️ ",-1),u4={__name:"53",setup(e){const n={hide:!1,srcSequence:"./pages/04-quirks.md"};return R(V),(s,o)=>(_(),W(Te,le(re(n)),{default:P(()=>[i4,c4]),_:1},16))}},p4=z(u4,[["__file","/@slidev/slides/53.md"]]),d4=t("h2",null,"Digraphs/ligatures",-1),f4=t("p",null,"Digraphs and ligatures are both made by combining two glyphs:",-1),h4=t("ul",null,[t("li",null,"In a digraph, the glyphs remain separate but are placed close together."),t("li",null,"In a ligature, the glyphs are fused into a single glyph.")],-1),y4=t("p",null,"Generally speaking, Unicode doesn’t like dealing with this problem.",-1),m4=t("blockquote",null,[t("p",null,[f("The Unicode Standard is a character encoding standard, and is "),t("strong",null,"not intended to standardize ligatures or other presentation forms"),f(", or any other aspects of the details of font and glyph design. The ligatures which you can find in the Unicode Standard are "),t("strong",null,"compatibility encodings"),f(" only—and are not meant to set a precedent requiring the encoding of all ligatures as characters.")])],-1),g4=t("p",null,"TL;DR; you shouldn’t expect any ligatures/digraphs to be added to Unicode any time soon.",-1),_4={__name:"54",setup(e){const n={hide:!1,srcSequence:"./pages/04-quirks.md"};return R(V),(s,o)=>(_(),W(Te,le(re(n)),{default:P(()=>[d4,f4,h4,y4,m4,g4]),_:1},16))}},v4=z(_4,[["__file","/@slidev/slides/54.md"]]),b4=t("h2",null,"Flags",-1),x4=t("ul",null,[t("li",null,[t("p",null,"Who adds a new flag?")]),t("li",null,[t("p",null,"Flag sequences"),t("ul",null,[t("li",null,":RGI_Emoji_Flag_Sequence"),t("li",null,[t("a",{href:"https://unicode.org/reports/tr51/#Flags",target:"_blank",rel:"noopener"},"https://unicode.org/reports/tr51/#Flags")]),t("li",null,"Qatar flag = wideboi")])]),t("li",null,[t("p",null,'"🇭🇪🇱🇱🇴🇼🇴🇷🇱🇩" ??')])],-1),w4=t("p",null,"Flag types:",-1),A4=t("ul",null,[t("li",null,"country/region"),t("li",null,"local (gbeng, etc)")],-1),C4={__name:"55",setup(e){const n={hide:!1,srcSequence:"./pages/04-quirks.md"};return R(V),(s,o)=>(_(),W(Te,le(re(n)),{default:P(()=>[b4,x4,w4,A4]),_:1},16))}},B4=z(C4,[["__file","/@slidev/slides/55.md"]]),k4=t("h2",null,"Unicode Tags",-1),E4=t("pre",{class:"shiki-container"},[t("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#4D9375"}},"fn"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#A1B567"}},"main"),t("span",{style:{color:"#858585"}},"()"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#858585"}},"{")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#CB7676"}},"let"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#B8A965"}},"encoded"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#CB7676"}},"="),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#C98A7D"}},'"Hello󠀠󠁒󠁵󠁳󠁴 Meetup Amsterdam!"'),t("span",{style:{color:"#858585"}},";")]),f(`
`),t("span",{class:"line"}),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#A1B567"}},"println!"),t("span",{style:{color:"#858585"}},"("),t("span",{style:{color:"#C98A7D"}},'"'),t("span",{style:{color:"#858585"}},"{}"),t("span",{style:{color:"#C98A7D"}},'"'),t("span",{style:{color:"#858585"}},","),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#B8A965"}},"encoded"),t("span",{style:{color:"#858585"}},");")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#758575"}},'    //println!("{:?}", encoded);')]),f(`
`),t("span",{class:"line"}),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#758575"}},"    //let codepoints: Vec<u32> = encoded.chars().map(|c| c.into()).collect();")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#758575"}},'    //println!("{:X?}", codepoints);')]),f(`
`),t("span",{class:"line"}),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#758575"}},"    //let offset: u32 = 0xE0000;")]),f(`
`),t("span",{class:"line"}),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#758575"}},"    //let decoded: String = encoded")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#758575"}},"    //    .chars()")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#758575"}},"    //    .map(|c| match c {")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#758575"}},"    //        '\\u{e0000}'..='\\u{e007F}' => {")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#758575"}},"    //            let char_u32: u32 = c.into();")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#758575"}},"    //            std::char::from_u32(char_u32 - offset).unwrap()")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#758575"}},"    //        },")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#758575"}},"    //        _ => c,")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#758575"}},"    //    })")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#758575"}},"    //    .collect();")]),f(`
`),t("span",{class:"line"}),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#758575"}},'    //println!("{:?}", decoded);')]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#858585"}},"}")])])]),t("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#1C6B48"}},"fn"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#6C7834"}},"main"),t("span",{style:{color:"#8E8F8B"}},"()"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8E8F8B"}},"{")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#AB5959"}},"let"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8C862B"}},"encoded"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#AB5959"}},"="),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#B56959"}},'"Hello󠀠󠁒󠁵󠁳󠁴 Meetup Amsterdam!"'),t("span",{style:{color:"#8E8F8B"}},";")]),f(`
`),t("span",{class:"line"}),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#6C7834"}},"println!"),t("span",{style:{color:"#8E8F8B"}},"("),t("span",{style:{color:"#B56959"}},'"'),t("span",{style:{color:"#8E8F8B"}},"{}"),t("span",{style:{color:"#B56959"}},'"'),t("span",{style:{color:"#8E8F8B"}},","),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8C862B"}},"encoded"),t("span",{style:{color:"#8E8F8B"}},");")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#A0ADA0"}},'    //println!("{:?}", encoded);')]),f(`
`),t("span",{class:"line"}),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#A0ADA0"}},"    //let codepoints: Vec<u32> = encoded.chars().map(|c| c.into()).collect();")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#A0ADA0"}},'    //println!("{:X?}", codepoints);')]),f(`
`),t("span",{class:"line"}),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#A0ADA0"}},"    //let offset: u32 = 0xE0000;")]),f(`
`),t("span",{class:"line"}),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#A0ADA0"}},"    //let decoded: String = encoded")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#A0ADA0"}},"    //    .chars()")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#A0ADA0"}},"    //    .map(|c| match c {")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#A0ADA0"}},"    //        '\\u{e0000}'..='\\u{e007F}' => {")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#A0ADA0"}},"    //            let char_u32: u32 = c.into();")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#A0ADA0"}},"    //            std::char::from_u32(char_u32 - offset).unwrap()")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#A0ADA0"}},"    //        },")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#A0ADA0"}},"    //        _ => c,")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#A0ADA0"}},"    //    })")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#A0ADA0"}},"    //    .collect();")]),f(`
`),t("span",{class:"line"}),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#A0ADA0"}},'    //println!("{:?}", decoded);')]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),F4=t("p",null,[t("a",{href:"https://www.compart.com/en/unicode/block/U+E0000",target:"_blank",rel:"noopener"},"https://www.compart.com/en/unicode/block/U+E0000")],-1),S4={__name:"56",setup(e){const n={hide:!1,srcSequence:"./pages/04-quirks.md"};return R(V),(s,o)=>{const r=Zt;return _(),W(Te,le(re(n)),{default:P(()=>[k4,M(r,ze({},{ranges:[""]}),{default:P(()=>[E4]),_:1},16),F4]),_:1},16)}}},D4=z(S4,[["__file","/@slidev/slides/56.md"]]),T4=t("h1",null,"THE END",-1),$4={__name:"57",setup(e){const n={layout:"cover",hideInToc:!0};return R(V),(s,o)=>(_(),W(Gs,le(re(n)),{default:P(()=>[T4]),_:1},16))}},O4=z($4,[["__file","/@slidev/slides/57.md"]]),U4=[{path:"1",name:"page-1",component:wA,meta:{theme:"seriph",background:"https://source.unsplash.com/collection/94734566/1920x1080",class:"text-center",highlighter:"shiki",lineNumbers:!0,info:`## Unicode, Rust, quirks, and way too much detail.
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
`,drawings:{persist:!1},transition:"slide-left",title:"Demystifying Unicode",hideInToc:!0},index:0,start:0,end:19,noteHTML:"",filepath:"/home/ben/Workspace/demystifying-unicode/slides.md",id:0,no:1},__clicksElements:[],__preloaded:!1}},{path:"2",name:"page-2",component:FA,meta:{hideInToc:!0,slide:{raw:`---
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
- Some things you only need to know when you need to know`,frontmatter:{hideInToc:!0},index:1,start:19,end:30,noteHTML:"",filepath:"/home/ben/Workspace/demystifying-unicode/slides.md",id:1,no:2},__clicksElements:[],__preloaded:!1}},{path:"3",name:"page-3",component:K6,meta:{hideInToc:!0,slide:{raw:`---
hideInToc: true
---

# Table of contents

<Toc maxDepth="1"></Toc>
`,title:"Table of contents",level:1,content:`# Table of contents

<Toc maxDepth="1"></Toc>`,frontmatter:{hideInToc:!0},index:2,start:30,end:38,noteHTML:"",filepath:"/home/ben/Workspace/demystifying-unicode/slides.md",id:2,no:3},__clicksElements:[],__preloaded:!1}},{path:"4",name:"page-4",component:Q6,meta:{layout:"cover",title:"History",hide:!1,srcSequence:"./pages/01-history.md",slide:{raw:null,title:"History",level:1,content:"# History",frontmatter:{layout:"cover",title:"History",hide:!1,srcSequence:"./pages/01-history.md"},index:3,start:0,end:6,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/01-history.md",raw:`---
layout: cover
---

# History
`,title:"History",level:1,content:"# History",frontmatter:{layout:"cover",title:"History"},index:0,start:0,end:6},inline:{raw:`---
src: ./pages/01-history.md
hide: false
---
`,content:"",frontmatter:{hide:!1},index:3,start:38,end:43},filepath:"/home/ben/Workspace/demystifying-unicode/pages/01-history.md",noteHTML:"",id:3,no:4},__clicksElements:[],__preloaded:!1}},{path:"5",name:"page-5",component:s2,meta:{hide:!1,srcSequence:"./pages/01-history.md",slide:{raw:`
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
`,id:4,no:5},__clicksElements:[],__preloaded:!1}},{path:"6",name:"page-6",component:p2,meta:{hide:!1,srcSequence:"./pages/01-history.md",slide:{raw:`
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

</v-click>`,frontmatter:{},index:2,start:37,end:68},filepath:"/home/ben/Workspace/demystifying-unicode/pages/01-history.md",noteHTML:"",id:5,no:6},__clicksElements:[],__preloaded:!1}},{path:"7",name:"page-7",component:v2,meta:{hide:!1,srcSequence:"./pages/01-history.md",slide:{raw:`
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
`,id:6,no:7},__clicksElements:[],__preloaded:!1}},{path:"8",name:"page-8",component:k2,meta:{layout:"center",hide:!1,srcSequence:"./pages/01-history.md",slide:{raw:`---
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
`,id:7,no:8},__clicksElements:[],__preloaded:!1}},{path:"9",name:"page-9",component:U2,meta:{hide:!1,srcSequence:"./pages/01-history.md",slide:{raw:`
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
`,id:8,no:9},__clicksElements:[],__preloaded:!1}},{path:"10",name:"page-10",component:j2,meta:{hide:!1,srcSequence:"./pages/01-history.md",slide:{raw:`
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

</v-clicks>`,frontmatter:{},index:6,start:179,end:218},filepath:"/home/ben/Workspace/demystifying-unicode/pages/01-history.md",noteHTML:"",id:9,no:10},__clicksElements:[],__preloaded:!1}},{path:"11",name:"page-11",component:Y2,meta:{hide:!1,srcSequence:"./pages/01-history.md",slide:{raw:`
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

</footer>`,frontmatter:{},index:7,start:219,end:248},filepath:"/home/ben/Workspace/demystifying-unicode/pages/01-history.md",noteHTML:"",id:10,no:11},__clicksElements:[],__preloaded:!1}},{path:"12",name:"page-12",component:nC,meta:{layout:"center",hide:!1,srcSequence:"./pages/01-history.md",slide:{raw:`---
layout: center
---

## Summary

<v-clicks>

Computers know bits - \`1\`s and \`0\`s

Bits are not human structures - so we abstract

\`char\` isn't a character, it's just a \`uint8_t\` with a fancy name

We need a whole lot more bits if we more than just names and dates in europe

</v-clicks>
`,title:"Summary",level:2,content:`## Summary

<v-clicks>

Computers know bits - \`1\`s and \`0\`s

Bits are not human structures - so we abstract

\`char\` isn't a character, it's just a \`uint8_t\` with a fancy name

We need a whole lot more bits if we more than just names and dates in europe

</v-clicks>`,frontmatter:{layout:"center",hide:!1,srcSequence:"./pages/01-history.md"},index:11,start:248,end:266,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/01-history.md",raw:`---
layout: center
---

## Summary

<v-clicks>

Computers know bits - \`1\`s and \`0\`s

Bits are not human structures - so we abstract

\`char\` isn't a character, it's just a \`uint8_t\` with a fancy name

We need a whole lot more bits if we more than just names and dates in europe

</v-clicks>
`,title:"Summary",level:2,content:`## Summary

<v-clicks>

Computers know bits - \`1\`s and \`0\`s

Bits are not human structures - so we abstract

\`char\` isn't a character, it's just a \`uint8_t\` with a fancy name

We need a whole lot more bits if we more than just names and dates in europe

</v-clicks>`,frontmatter:{layout:"center"},index:8,start:248,end:266},filepath:"/home/ben/Workspace/demystifying-unicode/pages/01-history.md",noteHTML:"",id:11,no:12},__clicksElements:[],__preloaded:!1}},{path:"13",name:"page-13",component:rC,meta:{layout:"cover",title:"Unicode",hide:!1,srcSequence:"./pages/02-unicode.md",slide:{raw:null,title:"Unicode",level:1,content:"# Unicode",frontmatter:{layout:"cover",title:"Unicode",hide:!1,srcSequence:"./pages/02-unicode.md"},index:12,start:0,end:6,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/02-unicode.md",raw:`---
layout: cover
---

# Unicode
`,title:"Unicode",level:1,content:"# Unicode",frontmatter:{layout:"cover",title:"Unicode"},index:0,start:0,end:6},inline:{raw:`---
src: ./pages/02-unicode.md
hide: false
---
`,content:"",frontmatter:{hide:!1},index:4,start:43,end:48},filepath:"/home/ben/Workspace/demystifying-unicode/pages/02-unicode.md",noteHTML:"",id:12,no:13},__clicksElements:[],__preloaded:!1}},{path:"14",name:"page-14",component:cC,meta:{hide:!1,srcSequence:"./pages/02-unicode.md",slide:{raw:`
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
`,id:13,no:14},__clicksElements:[],__preloaded:!1}},{path:"15",name:"page-15",component:fC,meta:{layout:"center",hide:!1,srcSequence:"./pages/02-unicode.md",slide:{raw:`---
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
</style>`,frontmatter:{layout:"center"},index:2,start:27,end:43},filepath:"/home/ben/Workspace/demystifying-unicode/pages/02-unicode.md",noteHTML:"",id:14,no:15},__clicksElements:[],__preloaded:!1}},{path:"16",name:"page-16",component:gC,meta:{layout:"center",hide:!1,srcSequence:"./pages/02-unicode.md",slide:{raw:`---
layout: center
---

## Unicode to the resque

<v-click>

- Universal
- Efficient
- Unambiguous

</v-click>

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

<v-click>

- Universal
- Efficient
- Unambiguous

</v-click>`,frontmatter:{layout:"center",hide:!1,srcSequence:"./pages/02-unicode.md"},note:`- Universal: Encompass all characters that can be used in general text interchange
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

<v-click>

- Universal
- Efficient
- Unambiguous

</v-click>

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

<v-click>

- Universal
- Efficient
- Unambiguous

</v-click>`,frontmatter:{layout:"center"},note:`- Universal: Encompass all characters that can be used in general text interchange
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
`,id:15,no:16},__clicksElements:[],__preloaded:!1}},{path:"17",name:"page-17",component:wC,meta:{hide:!1,srcSequence:"./pages/02-unicode.md",slide:{raw:`
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
`,id:16,no:17},__clicksElements:[],__preloaded:!1}},{path:"18",name:"page-18",component:kC,meta:{layout:"center",hide:!1,srcSequence:"./pages/02-unicode.md",slide:{raw:`---
layout: center
---

<img src="/glyph-codepoint-character.jpg" alt="Triple spiderman meme, glyph, codepoint, character pointing at each other" />
`,content:'<img src="/glyph-codepoint-character.jpg" alt="Triple spiderman meme, glyph, codepoint, character pointing at each other" />',frontmatter:{layout:"center",hide:!1,srcSequence:"./pages/02-unicode.md"},index:17,start:94,end:100,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/02-unicode.md",raw:`---
layout: center
---

<img src="/glyph-codepoint-character.jpg" alt="Triple spiderman meme, glyph, codepoint, character pointing at each other" />
`,content:'<img src="/glyph-codepoint-character.jpg" alt="Triple spiderman meme, glyph, codepoint, character pointing at each other" />',frontmatter:{layout:"center"},index:5,start:94,end:100},filepath:"/home/ben/Workspace/demystifying-unicode/pages/02-unicode.md",noteHTML:"",id:17,no:18},__clicksElements:[],__preloaded:!1}},{path:"19",name:"page-19",component:DC,meta:{layout:"center",hide:!1,srcSequence:"./pages/02-unicode.md",slide:{raw:`---
layout: center
---

<img src="/no_chars_yes_glyphs.jpg" alt="Drake no: characters. Drake yes: glyphs" />
`,content:'<img src="/no_chars_yes_glyphs.jpg" alt="Drake no: characters. Drake yes: glyphs" />',frontmatter:{layout:"center",hide:!1,srcSequence:"./pages/02-unicode.md"},index:18,start:100,end:106,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/02-unicode.md",raw:`---
layout: center
---

<img src="/no_chars_yes_glyphs.jpg" alt="Drake no: characters. Drake yes: glyphs" />
`,content:'<img src="/no_chars_yes_glyphs.jpg" alt="Drake no: characters. Drake yes: glyphs" />',frontmatter:{layout:"center"},index:6,start:100,end:106},filepath:"/home/ben/Workspace/demystifying-unicode/pages/02-unicode.md",noteHTML:"",id:18,no:19},__clicksElements:[],__preloaded:!1}},{path:"20",name:"page-20",component:MC,meta:{layout:"two-cols",hide:!1,srcSequence:"./pages/02-unicode.md",slide:{raw:`---
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
`,id:19,no:20},__clicksElements:[],__preloaded:!1}},{path:"21",name:"page-21",component:WC,meta:{layout:"center",hide:!1,srcSequence:"./pages/02-unicode.md",slide:{raw:`---
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
`,title:"What is the difference between",level:2,content:"## What is the difference between\n## `Unicode`\n## and\n## `UTF-8`",frontmatter:{layout:"center"},index:8,start:128,end:137},filepath:"/home/ben/Workspace/demystifying-unicode/pages/02-unicode.md",noteHTML:"",id:20,no:21},__clicksElements:[],__preloaded:!1}},{path:"22",name:"page-22",component:zC,meta:{layout:"center",hide:!1,srcSequence:"./pages/02-unicode.md",slide:{raw:`---
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
`,id:21,no:22},__clicksElements:[],__preloaded:!1}},{path:"23",name:"page-23",component:eB,meta:{hide:!1,srcSequence:"./pages/02-unicode.md",slide:{raw:`
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

</footer>`,frontmatter:{},index:10,start:154,end:176},filepath:"/home/ben/Workspace/demystifying-unicode/pages/02-unicode.md",noteHTML:"",id:22,no:23},__clicksElements:[],__preloaded:!1}},{path:"24",name:"page-24",component:oB,meta:{layout:"center",hide:!1,srcSequence:"./pages/02-unicode.md",slide:{raw:`---
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

</footer>`,frontmatter:{layout:"center"},index:11,start:176,end:196},filepath:"/home/ben/Workspace/demystifying-unicode/pages/02-unicode.md",noteHTML:"",id:23,no:24},__clicksElements:[],__preloaded:!1}},{path:"25",name:"page-25",component:pB,meta:{hide:!1,srcSequence:"./pages/02-unicode.md",slide:{raw:`
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
`,id:24,no:25},__clicksElements:[],__preloaded:!1}},{path:"26",name:"page-26",component:hB,meta:{layout:"center",hide:!1,srcSequence:"./pages/02-unicode.md",slide:{raw:`---
layout: center
---

## UTF-8 is the king of the web
`,title:"UTF-8 is the king of the web",level:2,content:"## UTF-8 is the king of the web",frontmatter:{layout:"center",hide:!1,srcSequence:"./pages/02-unicode.md"},index:25,start:232,end:238,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/02-unicode.md",raw:`---
layout: center
---

## UTF-8 is the king of the web
`,title:"UTF-8 is the king of the web",level:2,content:"## UTF-8 is the king of the web",frontmatter:{layout:"center"},index:13,start:232,end:238},filepath:"/home/ben/Workspace/demystifying-unicode/pages/02-unicode.md",noteHTML:"",id:25,no:26},__clicksElements:[],__preloaded:!1}},{path:"27",name:"page-27",component:xB,meta:{hide:!1,srcSequence:"./pages/02-unicode.md",slide:{raw:'\n## Nuts and bolts of UTF-8\n\nKey points:\n\n- Variable width (1-4 bytes)\n- ∴ Variable offset between characters\n- The default in Rust (+many more)\n\n<v-click>\n\n<hr />\n\n| Code point range | Byte 1 | Byte 2 | Byte 3 | Byte 4 | Bit Capacity | Code points |\n| - | - | - | - | - | - | - |\n| `0x000000..0x00007F` | `0xxxxxxx` | | | | 7 | 128 |\n| `0x000080..0x0007FF` | `110xxxxx` | `10xxxxxx` | | | 11 | 1920 |\n| `0x000800..0x00FFFF` | `1110xxxx` | `10xxxxxx` | `10xxxxxx` | | 16 | 63488 |\n| `0x010000..0x10FFFF` | `11110xxx` | `10xxxxxx` | `10xxxxxx` | `10xxxxxx` | 21 | 1mil+ |\n\n</v-click>\n\n<!--\nUTF-8 is generally speaking more efficient when dealing with "Latin" based web - Best case 1 byte, worst case, 2 bytes.\nUTF-16 is gauranteed to be 2 bytes, if not 4\nUTF-32 will always be 4 bytes.\n-->\n',title:"Nuts and bolts of UTF-8",level:2,content:"## Nuts and bolts of UTF-8\n\nKey points:\n\n- Variable width (1-4 bytes)\n- ∴ Variable offset between characters\n- The default in Rust (+many more)\n\n<v-click>\n\n<hr />\n\n| Code point range | Byte 1 | Byte 2 | Byte 3 | Byte 4 | Bit Capacity | Code points |\n| - | - | - | - | - | - | - |\n| `0x000000..0x00007F` | `0xxxxxxx` | | | | 7 | 128 |\n| `0x000080..0x0007FF` | `110xxxxx` | `10xxxxxx` | | | 11 | 1920 |\n| `0x000800..0x00FFFF` | `1110xxxx` | `10xxxxxx` | `10xxxxxx` | | 16 | 63488 |\n| `0x010000..0x10FFFF` | `11110xxx` | `10xxxxxx` | `10xxxxxx` | `10xxxxxx` | 21 | 1mil+ |\n\n</v-click>",frontmatter:{hide:!1,srcSequence:"./pages/02-unicode.md"},note:`UTF-8 is generally speaking more efficient when dealing with "Latin" based web - Best case 1 byte, worst case, 2 bytes.
UTF-16 is gauranteed to be 2 bytes, if not 4
UTF-32 will always be 4 bytes.`,index:26,start:239,end:267,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/02-unicode.md",raw:'\n## Nuts and bolts of UTF-8\n\nKey points:\n\n- Variable width (1-4 bytes)\n- ∴ Variable offset between characters\n- The default in Rust (+many more)\n\n<v-click>\n\n<hr />\n\n| Code point range | Byte 1 | Byte 2 | Byte 3 | Byte 4 | Bit Capacity | Code points |\n| - | - | - | - | - | - | - |\n| `0x000000..0x00007F` | `0xxxxxxx` | | | | 7 | 128 |\n| `0x000080..0x0007FF` | `110xxxxx` | `10xxxxxx` | | | 11 | 1920 |\n| `0x000800..0x00FFFF` | `1110xxxx` | `10xxxxxx` | `10xxxxxx` | | 16 | 63488 |\n| `0x010000..0x10FFFF` | `11110xxx` | `10xxxxxx` | `10xxxxxx` | `10xxxxxx` | 21 | 1mil+ |\n\n</v-click>\n\n<!--\nUTF-8 is generally speaking more efficient when dealing with "Latin" based web - Best case 1 byte, worst case, 2 bytes.\nUTF-16 is gauranteed to be 2 bytes, if not 4\nUTF-32 will always be 4 bytes.\n-->\n',title:"Nuts and bolts of UTF-8",level:2,content:"## Nuts and bolts of UTF-8\n\nKey points:\n\n- Variable width (1-4 bytes)\n- ∴ Variable offset between characters\n- The default in Rust (+many more)\n\n<v-click>\n\n<hr />\n\n| Code point range | Byte 1 | Byte 2 | Byte 3 | Byte 4 | Bit Capacity | Code points |\n| - | - | - | - | - | - | - |\n| `0x000000..0x00007F` | `0xxxxxxx` | | | | 7 | 128 |\n| `0x000080..0x0007FF` | `110xxxxx` | `10xxxxxx` | | | 11 | 1920 |\n| `0x000800..0x00FFFF` | `1110xxxx` | `10xxxxxx` | `10xxxxxx` | | 16 | 63488 |\n| `0x010000..0x10FFFF` | `11110xxx` | `10xxxxxx` | `10xxxxxx` | `10xxxxxx` | 21 | 1mil+ |\n\n</v-click>",frontmatter:{},note:`UTF-8 is generally speaking more efficient when dealing with "Latin" based web - Best case 1 byte, worst case, 2 bytes.
UTF-16 is gauranteed to be 2 bytes, if not 4
UTF-32 will always be 4 bytes.`,index:14,start:239,end:267},filepath:"/home/ben/Workspace/demystifying-unicode/pages/02-unicode.md",noteHTML:`<p>UTF-8 is generally speaking more efficient when dealing with &quot;Latin&quot; based web - Best case 1 byte, worst case, 2 bytes.
UTF-16 is gauranteed to be 2 bytes, if not 4
UTF-32 will always be 4 bytes.</p>
`,id:26,no:27},__clicksElements:[],__preloaded:!1}},{path:"28",name:"page-28",component:qB,meta:{hide:!1,srcSequence:"./pages/02-unicode.md",slide:{raw:`
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
`,id:27,no:28},__clicksElements:[],__preloaded:!1}},{path:"29",name:"page-29",component:bk,meta:{hide:!1,srcSequence:"./pages/02-unicode.md",slide:{raw:`
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
</style>`,frontmatter:{},index:16,start:308,end:392},filepath:"/home/ben/Workspace/demystifying-unicode/pages/02-unicode.md",noteHTML:"",id:28,no:29},__clicksElements:[],__preloaded:!1}},{path:"30",name:"page-30",component:Ek,meta:{layout:"center",hide:!1,srcSequence:"./pages/02-unicode.md",slide:{raw:`---
layout: center
---

## Summary

<v-clicks>

Unicode is a standard. It defeines a dictionary of \`codepoints\` to their character descriptions

UTF-8 is an Encoding - defined by the Unicode Standard.

Encodings help humans interpret bytes as painted glyphs

UTF-8 is by far the most common standard due to it's memory efficiency (e.g. variable space) 

</v-clicks>
`,title:"Summary",level:2,content:`## Summary

<v-clicks>

Unicode is a standard. It defeines a dictionary of \`codepoints\` to their character descriptions

UTF-8 is an Encoding - defined by the Unicode Standard.

Encodings help humans interpret bytes as painted glyphs

UTF-8 is by far the most common standard due to it's memory efficiency (e.g. variable space) 

</v-clicks>`,frontmatter:{layout:"center",hide:!1,srcSequence:"./pages/02-unicode.md"},index:29,start:392,end:410,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/02-unicode.md",raw:`---
layout: center
---

## Summary

<v-clicks>

Unicode is a standard. It defeines a dictionary of \`codepoints\` to their character descriptions

UTF-8 is an Encoding - defined by the Unicode Standard.

Encodings help humans interpret bytes as painted glyphs

UTF-8 is by far the most common standard due to it's memory efficiency (e.g. variable space) 

</v-clicks>
`,title:"Summary",level:2,content:`## Summary

<v-clicks>

Unicode is a standard. It defeines a dictionary of \`codepoints\` to their character descriptions

UTF-8 is an Encoding - defined by the Unicode Standard.

Encodings help humans interpret bytes as painted glyphs

UTF-8 is by far the most common standard due to it's memory efficiency (e.g. variable space) 

</v-clicks>`,frontmatter:{layout:"center"},index:17,start:392,end:410},filepath:"/home/ben/Workspace/demystifying-unicode/pages/02-unicode.md",noteHTML:"",id:29,no:30},__clicksElements:[],__preloaded:!1}},{path:"31",name:"page-31",component:Dk,meta:{layout:"cover",title:"Unicode in Rust",hide:!1,srcSequence:"./pages/03-unicode-in-rust.md",slide:{raw:null,title:"Unicode in Rust",level:1,content:"# Unicode in Rust",frontmatter:{layout:"cover",title:"Unicode in Rust",hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"},note:"We now know what Unicode and UTF-8 are, how is it used in rust?",index:30,start:0,end:12,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/03-unicode-in-rust.md",raw:`---
layout: cover
---

# Unicode in Rust

<!--

We now know what Unicode and UTF-8 are, how is it used in rust?

-->
`,title:"Unicode in Rust",level:1,content:"# Unicode in Rust",frontmatter:{layout:"cover",title:"Unicode in Rust"},note:"We now know what Unicode and UTF-8 are, how is it used in rust?",index:0,start:0,end:12},inline:{raw:`---
src: ./pages/03-unicode-in-rust.md
hide: false
---
`,content:"",frontmatter:{hide:!1},index:5,start:48,end:53},filepath:"/home/ben/Workspace/demystifying-unicode/pages/03-unicode-in-rust.md",noteHTML:`<p>We now know what Unicode and UTF-8 are, how is it used in rust?</p>
`,id:30,no:31},__clicksElements:[],__preloaded:!1}},{path:"32",name:"page-32",component:Ok,meta:{layout:"center",hide:!1,srcSequence:"./pages/03-unicode-in-rust.md",slide:{raw:`---
layout: center
---

Q: What is the primitive string type in rust?
`,content:"Q: What is the primitive string type in rust?",frontmatter:{layout:"center",hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"},index:31,start:12,end:18,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/03-unicode-in-rust.md",raw:`---
layout: center
---

Q: What is the primitive string type in rust?
`,content:"Q: What is the primitive string type in rust?",frontmatter:{layout:"center"},index:1,start:12,end:18},filepath:"/home/ben/Workspace/demystifying-unicode/pages/03-unicode-in-rust.md",noteHTML:"",id:31,no:32},__clicksElements:[],__preloaded:!1}},{path:"33",name:"page-33",component:qk,meta:{layout:"center",hide:!1,srcSequence:"./pages/03-unicode-in-rust.md",slide:{raw:`---
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
- AsRef<str> is one of the common interfaces, however Deref means you can just use &String for &str args.`,index:32,start:18,end:50,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/03-unicode-in-rust.md",raw:`---
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
- AsRef<str> is one of the common interfaces, however Deref means you can just use &String for &str args.`,index:2,start:18,end:50},filepath:"/home/ben/Workspace/demystifying-unicode/pages/03-unicode-in-rust.md",noteHTML:`<p>Notes:</p>
<ul>
<li>str's can never actually be constructed directly</li>
<li>&amp;str could point to many different places, but it'll always implement the str primitives</li>
<li>AsRef<str> is one of the common interfaces, however Deref means you can just use &amp;String for &amp;str args.</li>
</ul>
`,id:32,no:33},__clicksElements:[],__preloaded:!1}},{path:"34",name:"page-34",component:u7,meta:{hide:!1,srcSequence:"./pages/03-unicode-in-rust.md",slide:{raw:`
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
Therefore string slices are slices of bytes`,index:33,start:51,end:101,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/03-unicode-in-rust.md",raw:`
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
Therefore string slices are slices of bytes`,index:3,start:51,end:101},filepath:"/home/ben/Workspace/demystifying-unicode/pages/03-unicode-in-rust.md",noteHTML:`<p>&amp;str is a slice of bytes, not of utf-8 characters. UTF-8 characters are between 1-4 bytes, so:</p>
<ul>
<li>it would be memory inefficient to assume all characters take 4 bytes</li>
<li>it would be impossible to have a fixed distance with a variable length
Therefore string slices are slices of bytes</li>
</ul>
`,id:33,no:34},__clicksElements:[],__preloaded:!1}},{path:"35",name:"page-35",component:f7,meta:{layout:"center",hide:!1,srcSequence:"./pages/03-unicode-in-rust.md",slide:{raw:`---
layout: center
---

## A String slice (\`str\`) is just a slice of bytes (\`[u8]\`), **which contents are always valid UTF-8**.
`,title:"A String slice (`str`) is just a slice of bytes (`[u8]`), **which contents are always valid UTF-8**.",level:2,content:"## A String slice (`str`) is just a slice of bytes (`[u8]`), **which contents are always valid UTF-8**.",frontmatter:{layout:"center",hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"},index:34,start:101,end:107,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/03-unicode-in-rust.md",raw:`---
layout: center
---

## A String slice (\`str\`) is just a slice of bytes (\`[u8]\`), **which contents are always valid UTF-8**.
`,title:"A String slice (`str`) is just a slice of bytes (`[u8]`), **which contents are always valid UTF-8**.",level:2,content:"## A String slice (`str`) is just a slice of bytes (`[u8]`), **which contents are always valid UTF-8**.",frontmatter:{layout:"center"},index:4,start:101,end:107},filepath:"/home/ben/Workspace/demystifying-unicode/pages/03-unicode-in-rust.md",noteHTML:"",id:34,no:35},__clicksElements:[],__preloaded:!1}},{path:"36",name:"page-36",component:m7,meta:{layout:"center",hide:!1,srcSequence:"./pages/03-unicode-in-rust.md",slide:{raw:`---
layout: center
---

## Lets make some strings
`,title:"Lets make some strings",level:2,content:"## Lets make some strings",frontmatter:{layout:"center",hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"},index:35,start:107,end:113,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/03-unicode-in-rust.md",raw:`---
layout: center
---

## Lets make some strings
`,title:"Lets make some strings",level:2,content:"## Lets make some strings",frontmatter:{layout:"center"},index:5,start:107,end:113},filepath:"/home/ben/Workspace/demystifying-unicode/pages/03-unicode-in-rust.md",noteHTML:"",id:35,no:36},__clicksElements:[],__preloaded:!1}},{path:"37",name:"page-37",component:C7,meta:{hide:!1,srcSequence:"./pages/03-unicode-in-rust.md",slide:{raw:`
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

</v-click>`,frontmatter:{hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"},note:"\\x7F is DEL, so it seems as though the character is added then removed :shrug:",index:36,start:114,end:152,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/03-unicode-in-rust.md",raw:`
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

</v-click>`,frontmatter:{},note:"\\x7F is DEL, so it seems as though the character is added then removed :shrug:",index:6,start:114,end:152},filepath:"/home/ben/Workspace/demystifying-unicode/pages/03-unicode-in-rust.md",noteHTML:`<p>\\x7F is DEL, so it seems as though the character is added then removed :shrug:</p>
`,id:36,no:37},__clicksElements:[],__preloaded:!1}},{path:"38",name:"page-38",component:T7,meta:{hide:!1,srcSequence:"./pages/03-unicode-in-rust.md",slide:{raw:`
## Creating Strings

- All strings are a sequence of bytes
- ∴ Rust let's us create strings from slices/vectors of bytes.

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

- All strings are a sequence of bytes
- ∴ Rust let's us create strings from slices/vectors of bytes.

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

</v-click>`,frontmatter:{hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"},index:37,start:153,end:185,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/03-unicode-in-rust.md",raw:`
## Creating Strings

- All strings are a sequence of bytes
- ∴ Rust let's us create strings from slices/vectors of bytes.

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

- All strings are a sequence of bytes
- ∴ Rust let's us create strings from slices/vectors of bytes.

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

</v-click>`,frontmatter:{},index:7,start:153,end:185},filepath:"/home/ben/Workspace/demystifying-unicode/pages/03-unicode-in-rust.md",noteHTML:"",id:37,no:38},__clicksElements:[],__preloaded:!1}},{path:"39",name:"page-39",component:M7,meta:{hide:!1,srcSequence:"./pages/03-unicode-in-rust.md",slide:{raw:`
## Creating strings

Even \`char\` primitives!

\`\`\`rust {0-7,10,13-16|8,11}
fn main() {
    let s: [char; 4] = [
        'H',
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

\`\`\`rust {0-7,10,13-16|8,11}
fn main() {
    let s: [char; 4] = [
        'H',
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

👆 Yes, \`.iter().collect();\``,frontmatter:{hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"},index:38,start:186,end:211,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/03-unicode-in-rust.md",raw:`
## Creating strings

Even \`char\` primitives!

\`\`\`rust {0-7,10,13-16|8,11}
fn main() {
    let s: [char; 4] = [
        'H',
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

\`\`\`rust {0-7,10,13-16|8,11}
fn main() {
    let s: [char; 4] = [
        'H',
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

👆 Yes, \`.iter().collect();\``,frontmatter:{},index:8,start:186,end:211},filepath:"/home/ben/Workspace/demystifying-unicode/pages/03-unicode-in-rust.md",noteHTML:"",id:38,no:39},__clicksElements:[],__preloaded:!1}},{path:"40",name:"page-40",component:N7,meta:{layout:"center",hide:!1,srcSequence:"./pages/03-unicode-in-rust.md",slide:{raw:`---
layout: center
---

## See, creating strings is easy!
`,title:"See, creating strings is easy!",level:2,content:"## See, creating strings is easy!",frontmatter:{layout:"center",hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"},index:39,start:211,end:217,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/03-unicode-in-rust.md",raw:`---
layout: center
---

## See, creating strings is easy!
`,title:"See, creating strings is easy!",level:2,content:"## See, creating strings is easy!",frontmatter:{layout:"center"},index:9,start:211,end:217},filepath:"/home/ben/Workspace/demystifying-unicode/pages/03-unicode-in-rust.md",noteHTML:"",id:39,no:40},__clicksElements:[],__preloaded:!1}},{path:"41",name:"page-41",component:Y7,meta:{hide:!1,srcSequence:"./pages/03-unicode-in-rust.md",slide:{raw:`
## UTF8Error

Until it panics.

\`\`\`rust
fn main() {
    let cat: [u8; 4] = [0xF0, 0x9F, 0x98, 0xBB];

    let sliced = &cat[0..=2];

    // Panics
    let _s = std::str::from_utf8(sliced).unwrap();
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

    let sliced = &cat[0..=2];

    // Panics
    let _s = std::str::from_utf8(sliced).unwrap();
    // thread 'main' panicked at 'called \`Result::unwrap()\` on an \`Err\` value:
    //   FromUtf8Error { bytes: [128], error: Utf8Error { valid_up_to: 0, error_len: Some(1) } }', src/main.rs:5:35
}
\`\`\`

<p v-click class="pt-10">

> String slices are **always** valid UTF-8.

😬 Yeah, not all sequencess of bytes are "Valid UTF-8"

</p>`,frontmatter:{hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"},index:40,start:218,end:244,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/03-unicode-in-rust.md",raw:`
## UTF8Error

Until it panics.

\`\`\`rust
fn main() {
    let cat: [u8; 4] = [0xF0, 0x9F, 0x98, 0xBB];

    let sliced = &cat[0..=2];

    // Panics
    let _s = std::str::from_utf8(sliced).unwrap();
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

    let sliced = &cat[0..=2];

    // Panics
    let _s = std::str::from_utf8(sliced).unwrap();
    // thread 'main' panicked at 'called \`Result::unwrap()\` on an \`Err\` value:
    //   FromUtf8Error { bytes: [128], error: Utf8Error { valid_up_to: 0, error_len: Some(1) } }', src/main.rs:5:35
}
\`\`\`

<p v-click class="pt-10">

> String slices are **always** valid UTF-8.

😬 Yeah, not all sequencess of bytes are "Valid UTF-8"

</p>`,frontmatter:{},index:10,start:218,end:244},filepath:"/home/ben/Workspace/demystifying-unicode/pages/03-unicode-in-rust.md",noteHTML:"",id:40,no:41},__clicksElements:[],__preloaded:!1}},{path:"42",name:"page-42",component:t9,meta:{hide:!1,srcSequence:"./pages/03-unicode-in-rust.md",slide:{raw:'\n## Invalid UTF-8\n\n...We didn\'t talk about Invalid UTF-8 yet\n\n<v-click>\n\n- First byte of UTF-8 byte sequences\n  - 1 byte seq: `0xxxxxxx`\n  - 2 byte seq: `110xxxxx` - `0xCx` or `0xDx` = 2 bytes \n  - 3 byte seq: `1110xxxx` - `0xEx` = 3 bytes\n  - 4 byte seq: `11110xxx` - `0xFx` = 4 bytes\n\n</v-click>\n\n<v-click>\n\n- ∴ The following are "broken":\n  - `[0x80]`, `[0x90]`, `[0xA0]`, `[0xB0]` - invalid UTF-8 sequences\n  - `[0xC0]`, `[0xD0]` - missing second byte\n  - `[0xE0, 0xFF]` - missing third byte\n  - `[0xF0, 0xFF, 0xFF]` - missing fourth byte\n\n</v-click>\n',title:"Invalid UTF-8",level:2,content:'## Invalid UTF-8\n\n...We didn\'t talk about Invalid UTF-8 yet\n\n<v-click>\n\n- First byte of UTF-8 byte sequences\n  - 1 byte seq: `0xxxxxxx`\n  - 2 byte seq: `110xxxxx` - `0xCx` or `0xDx` = 2 bytes \n  - 3 byte seq: `1110xxxx` - `0xEx` = 3 bytes\n  - 4 byte seq: `11110xxx` - `0xFx` = 4 bytes\n\n</v-click>\n\n<v-click>\n\n- ∴ The following are "broken":\n  - `[0x80]`, `[0x90]`, `[0xA0]`, `[0xB0]` - invalid UTF-8 sequences\n  - `[0xC0]`, `[0xD0]` - missing second byte\n  - `[0xE0, 0xFF]` - missing third byte\n  - `[0xF0, 0xFF, 0xFF]` - missing fourth byte\n\n</v-click>',frontmatter:{hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"},index:41,start:245,end:270,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/03-unicode-in-rust.md",raw:'\n## Invalid UTF-8\n\n...We didn\'t talk about Invalid UTF-8 yet\n\n<v-click>\n\n- First byte of UTF-8 byte sequences\n  - 1 byte seq: `0xxxxxxx`\n  - 2 byte seq: `110xxxxx` - `0xCx` or `0xDx` = 2 bytes \n  - 3 byte seq: `1110xxxx` - `0xEx` = 3 bytes\n  - 4 byte seq: `11110xxx` - `0xFx` = 4 bytes\n\n</v-click>\n\n<v-click>\n\n- ∴ The following are "broken":\n  - `[0x80]`, `[0x90]`, `[0xA0]`, `[0xB0]` - invalid UTF-8 sequences\n  - `[0xC0]`, `[0xD0]` - missing second byte\n  - `[0xE0, 0xFF]` - missing third byte\n  - `[0xF0, 0xFF, 0xFF]` - missing fourth byte\n\n</v-click>\n',title:"Invalid UTF-8",level:2,content:'## Invalid UTF-8\n\n...We didn\'t talk about Invalid UTF-8 yet\n\n<v-click>\n\n- First byte of UTF-8 byte sequences\n  - 1 byte seq: `0xxxxxxx`\n  - 2 byte seq: `110xxxxx` - `0xCx` or `0xDx` = 2 bytes \n  - 3 byte seq: `1110xxxx` - `0xEx` = 3 bytes\n  - 4 byte seq: `11110xxx` - `0xFx` = 4 bytes\n\n</v-click>\n\n<v-click>\n\n- ∴ The following are "broken":\n  - `[0x80]`, `[0x90]`, `[0xA0]`, `[0xB0]` - invalid UTF-8 sequences\n  - `[0xC0]`, `[0xD0]` - missing second byte\n  - `[0xE0, 0xFF]` - missing third byte\n  - `[0xF0, 0xFF, 0xFF]` - missing fourth byte\n\n</v-click>',frontmatter:{},index:11,start:245,end:270},filepath:"/home/ben/Workspace/demystifying-unicode/pages/03-unicode-in-rust.md",noteHTML:"",id:41,no:42},__clicksElements:[],__preloaded:!1}},{path:"43",name:"page-43",component:o9,meta:{layout:"center",hide:!1,srcSequence:"./pages/03-unicode-in-rust.md",slide:{raw:`---
layout: center
---

## Where Enforced UTF-8 can go wrong
`,title:"Where Enforced UTF-8 can go wrong",level:2,content:"## Where Enforced UTF-8 can go wrong",frontmatter:{layout:"center",hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"},index:42,start:270,end:276,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/03-unicode-in-rust.md",raw:`---
layout: center
---

## Where Enforced UTF-8 can go wrong
`,title:"Where Enforced UTF-8 can go wrong",level:2,content:"## Where Enforced UTF-8 can go wrong",frontmatter:{layout:"center"},index:12,start:270,end:276},filepath:"/home/ben/Workspace/demystifying-unicode/pages/03-unicode-in-rust.md",noteHTML:"",id:42,no:43},__clicksElements:[],__preloaded:!1}},{path:"44",name:"page-44",component:c9,meta:{hide:!1,srcSequence:"./pages/03-unicode-in-rust.md",slide:{raw:`
## Reading and Writing

\`\`\`rust {5|6|0-4,6-12,14|0-4,6-14}
// Needed for \`impl Read for &[u8]\`
use std::io::prelude::*;

fn main() {
    //let mut file = std::fs::File::open("ref/plain_text.txt").unwrap();
    let mut file: &[u8] = b"Plain\\x80 Text!";

    let mut buf: Vec<u8> = vec![];

    let bytes_read = file.read_to_end(&mut buf).unwrap();

    println!("{bytes_read}, {buf:02X?}");
    //        ^^^^^^^^^^^^^^^^^^^^^^^^ 12, [50, 6C, 61, 69, 6E, 80, 20, 54, 65, 78, 74, 21]
}
\`\`\`

<v-click>

Nothing bad... so far...

</v-click>
`,title:"Reading and Writing",level:2,content:`## Reading and Writing

\`\`\`rust {5|6|0-4,6-12,14|0-4,6-14}
// Needed for \`impl Read for &[u8]\`
use std::io::prelude::*;

fn main() {
    //let mut file = std::fs::File::open("ref/plain_text.txt").unwrap();
    let mut file: &[u8] = b"Plain\\x80 Text!";

    let mut buf: Vec<u8> = vec![];

    let bytes_read = file.read_to_end(&mut buf).unwrap();

    println!("{bytes_read}, {buf:02X?}");
    //        ^^^^^^^^^^^^^^^^^^^^^^^^ 12, [50, 6C, 61, 69, 6E, 80, 20, 54, 65, 78, 74, 21]
}
\`\`\`

<v-click>

Nothing bad... so far...

</v-click>`,frontmatter:{hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"},index:43,start:277,end:303,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/03-unicode-in-rust.md",raw:`
## Reading and Writing

\`\`\`rust {5|6|0-4,6-12,14|0-4,6-14}
// Needed for \`impl Read for &[u8]\`
use std::io::prelude::*;

fn main() {
    //let mut file = std::fs::File::open("ref/plain_text.txt").unwrap();
    let mut file: &[u8] = b"Plain\\x80 Text!";

    let mut buf: Vec<u8> = vec![];

    let bytes_read = file.read_to_end(&mut buf).unwrap();

    println!("{bytes_read}, {buf:02X?}");
    //        ^^^^^^^^^^^^^^^^^^^^^^^^ 12, [50, 6C, 61, 69, 6E, 80, 20, 54, 65, 78, 74, 21]
}
\`\`\`

<v-click>

Nothing bad... so far...

</v-click>
`,title:"Reading and Writing",level:2,content:`## Reading and Writing

\`\`\`rust {5|6|0-4,6-12,14|0-4,6-14}
// Needed for \`impl Read for &[u8]\`
use std::io::prelude::*;

fn main() {
    //let mut file = std::fs::File::open("ref/plain_text.txt").unwrap();
    let mut file: &[u8] = b"Plain\\x80 Text!";

    let mut buf: Vec<u8> = vec![];

    let bytes_read = file.read_to_end(&mut buf).unwrap();

    println!("{bytes_read}, {buf:02X?}");
    //        ^^^^^^^^^^^^^^^^^^^^^^^^ 12, [50, 6C, 61, 69, 6E, 80, 20, 54, 65, 78, 74, 21]
}
\`\`\`

<v-click>

Nothing bad... so far...

</v-click>`,frontmatter:{},index:13,start:277,end:303},filepath:"/home/ben/Workspace/demystifying-unicode/pages/03-unicode-in-rust.md",noteHTML:"",id:43,no:44},__clicksElements:[],__preloaded:!1}},{path:"45",name:"page-45",component:f9,meta:{hide:!1,srcSequence:"./pages/03-unicode-in-rust.md",slide:{raw:`
## Reading and Writing

\`\`\`rust {6,10-11|6,10-13}
// Needed for \`impl Read for &[u8]\`
use std::io::prelude::*;

fn main() {
    //let mut file = std::fs::File::open("ref/plain_text.txt").unwrap();
    let mut file: &[u8] = b"Plain\\x80 Text!";

    let mut buf: String = String::new();

    //let bytes_read = file.read_to_end(&mut buf).unwrap();
    let bytes_read = file.read_to_string(&mut buf).unwrap();
    // thread 'main' panicked at 'called \`Result::unwrap()\` on an \`Err\` value:
    //     Error { kind: InvalidData, message: "stream did not contain valid UTF-8" }', src/main.rs:11:52

    println!("{bytes_read}, {buf:02X?}");
}
\`\`\`
`,title:"Reading and Writing",level:2,content:`## Reading and Writing

\`\`\`rust {6,10-11|6,10-13}
// Needed for \`impl Read for &[u8]\`
use std::io::prelude::*;

fn main() {
    //let mut file = std::fs::File::open("ref/plain_text.txt").unwrap();
    let mut file: &[u8] = b"Plain\\x80 Text!";

    let mut buf: String = String::new();

    //let bytes_read = file.read_to_end(&mut buf).unwrap();
    let bytes_read = file.read_to_string(&mut buf).unwrap();
    // thread 'main' panicked at 'called \`Result::unwrap()\` on an \`Err\` value:
    //     Error { kind: InvalidData, message: "stream did not contain valid UTF-8" }', src/main.rs:11:52

    println!("{bytes_read}, {buf:02X?}");
}
\`\`\``,frontmatter:{hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"},index:44,start:304,end:326,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/03-unicode-in-rust.md",raw:`
## Reading and Writing

\`\`\`rust {6,10-11|6,10-13}
// Needed for \`impl Read for &[u8]\`
use std::io::prelude::*;

fn main() {
    //let mut file = std::fs::File::open("ref/plain_text.txt").unwrap();
    let mut file: &[u8] = b"Plain\\x80 Text!";

    let mut buf: String = String::new();

    //let bytes_read = file.read_to_end(&mut buf).unwrap();
    let bytes_read = file.read_to_string(&mut buf).unwrap();
    // thread 'main' panicked at 'called \`Result::unwrap()\` on an \`Err\` value:
    //     Error { kind: InvalidData, message: "stream did not contain valid UTF-8" }', src/main.rs:11:52

    println!("{bytes_read}, {buf:02X?}");
}
\`\`\`
`,title:"Reading and Writing",level:2,content:`## Reading and Writing

\`\`\`rust {6,10-11|6,10-13}
// Needed for \`impl Read for &[u8]\`
use std::io::prelude::*;

fn main() {
    //let mut file = std::fs::File::open("ref/plain_text.txt").unwrap();
    let mut file: &[u8] = b"Plain\\x80 Text!";

    let mut buf: String = String::new();

    //let bytes_read = file.read_to_end(&mut buf).unwrap();
    let bytes_read = file.read_to_string(&mut buf).unwrap();
    // thread 'main' panicked at 'called \`Result::unwrap()\` on an \`Err\` value:
    //     Error { kind: InvalidData, message: "stream did not contain valid UTF-8" }', src/main.rs:11:52

    println!("{bytes_read}, {buf:02X?}");
}
\`\`\``,frontmatter:{},index:14,start:304,end:326},filepath:"/home/ben/Workspace/demystifying-unicode/pages/03-unicode-in-rust.md",noteHTML:"",id:44,no:45},__clicksElements:[],__preloaded:!1}},{path:"46",name:"page-46",component:w9,meta:{hide:!1,srcSequence:"./pages/03-unicode-in-rust.md",slide:{raw:`
## Read and Writing - JSON

\`\`\`json
{
  "hello": "world\\x80!"
}
\`\`\`

<v-click>

\`\`\`rust {all|1-4,7-9|1-4,11|1-4,13|all}
#[derive(Debug, serde::Deserialize)]
struct Greeting {
    pub who: String
}

fn main() {
    let raw: &[u8] = b"{\\"who\\": \\"world\\x80\\"}";
    // for illustrative purposes
    let s: &str = unsafe { std::str::from_utf8_unchecked(raw) };
    
    let greeting: Greeting = serde_json::from_str(s).unwrap();
    
    println!("Hello {}!", greeting.who);
}
\`\`\`

</v-click>

<div v-click class="mt-7">

> JSON text exchanged between systems that are not part of a closed ecosystem MUST be encoded using UTF-8

</div>

<footer>

Ref: https://datatracker.ietf.org/doc/html/rfc8259#section-8.1

</footer>

<!--
The execution never completes, and outputs "Hello world", but not the exclamation mark.

unsafe could be burried in dependencies - it shouldn't be, but it could be.
-->
`,title:"Read and Writing - JSON",level:2,content:`## Read and Writing - JSON

\`\`\`json
{
  "hello": "world\\x80!"
}
\`\`\`

<v-click>

\`\`\`rust {all|1-4,7-9|1-4,11|1-4,13|all}
#[derive(Debug, serde::Deserialize)]
struct Greeting {
    pub who: String
}

fn main() {
    let raw: &[u8] = b"{\\"who\\": \\"world\\x80\\"}";
    // for illustrative purposes
    let s: &str = unsafe { std::str::from_utf8_unchecked(raw) };
    
    let greeting: Greeting = serde_json::from_str(s).unwrap();
    
    println!("Hello {}!", greeting.who);
}
\`\`\`

</v-click>

<div v-click class="mt-7">

> JSON text exchanged between systems that are not part of a closed ecosystem MUST be encoded using UTF-8

</div>

<footer>

Ref: https://datatracker.ietf.org/doc/html/rfc8259#section-8.1

</footer>`,frontmatter:{hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"},note:`The execution never completes, and outputs "Hello world", but not the exclamation mark.

unsafe could be burried in dependencies - it shouldn't be, but it could be.`,index:45,start:327,end:375,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/03-unicode-in-rust.md",raw:`
## Read and Writing - JSON

\`\`\`json
{
  "hello": "world\\x80!"
}
\`\`\`

<v-click>

\`\`\`rust {all|1-4,7-9|1-4,11|1-4,13|all}
#[derive(Debug, serde::Deserialize)]
struct Greeting {
    pub who: String
}

fn main() {
    let raw: &[u8] = b"{\\"who\\": \\"world\\x80\\"}";
    // for illustrative purposes
    let s: &str = unsafe { std::str::from_utf8_unchecked(raw) };
    
    let greeting: Greeting = serde_json::from_str(s).unwrap();
    
    println!("Hello {}!", greeting.who);
}
\`\`\`

</v-click>

<div v-click class="mt-7">

> JSON text exchanged between systems that are not part of a closed ecosystem MUST be encoded using UTF-8

</div>

<footer>

Ref: https://datatracker.ietf.org/doc/html/rfc8259#section-8.1

</footer>

<!--
The execution never completes, and outputs "Hello world", but not the exclamation mark.

unsafe could be burried in dependencies - it shouldn't be, but it could be.
-->
`,title:"Read and Writing - JSON",level:2,content:`## Read and Writing - JSON

\`\`\`json
{
  "hello": "world\\x80!"
}
\`\`\`

<v-click>

\`\`\`rust {all|1-4,7-9|1-4,11|1-4,13|all}
#[derive(Debug, serde::Deserialize)]
struct Greeting {
    pub who: String
}

fn main() {
    let raw: &[u8] = b"{\\"who\\": \\"world\\x80\\"}";
    // for illustrative purposes
    let s: &str = unsafe { std::str::from_utf8_unchecked(raw) };
    
    let greeting: Greeting = serde_json::from_str(s).unwrap();
    
    println!("Hello {}!", greeting.who);
}
\`\`\`

</v-click>

<div v-click class="mt-7">

> JSON text exchanged between systems that are not part of a closed ecosystem MUST be encoded using UTF-8

</div>

<footer>

Ref: https://datatracker.ietf.org/doc/html/rfc8259#section-8.1

</footer>`,frontmatter:{},note:`The execution never completes, and outputs "Hello world", but not the exclamation mark.

unsafe could be burried in dependencies - it shouldn't be, but it could be.`,index:15,start:327,end:375},filepath:"/home/ben/Workspace/demystifying-unicode/pages/03-unicode-in-rust.md",noteHTML:`<p>The execution never completes, and outputs &quot;Hello world&quot;, but not the exclamation mark.</p>
<p>unsafe could be burried in dependencies - it shouldn't be, but it could be.</p>
`,id:45,no:46},__clicksElements:[],__preloaded:!1}},{path:"47",name:"page-47",component:D9,meta:{hide:!1,srcSequence:"./pages/03-unicode-in-rust.md",slide:{raw:`
## Conventially UTF-8 vs. Gauranteed

Sometimes you just want cats:

\`\`\`rust
use bstr::ByteSlice;

fn main() {
    let raw: &[u8] =
        b"\\x80\\x90\\xF0\\x9F\\x99\\x84Pl\\xF0\\x9F\\x98\\xBBain\\xF0\\x9F\\x98\\xBEText!\\x80\\x80\\x80";

    let cats: String = raw
        .chars()
        .filter(|c| ('\\u{1F638}'..'\\u{1F640}').contains(c))
        .collect();

    println!("Cats: {}", cats);
    // Cats: 😻😾
}
\`\`\`

<v-click>

<Arrow x1="220" y1="150" x2="190" y2="210" class="color-red"/>
<Arrow x1="250" y1="150" x2="220" y2="210" class="color-red"/>
<Arrow x1="700" y1="150" x2="670" y2="210" class="color-red"/>
<Arrow x1="725" y1="150" x2="695" y2="210" class="color-red"/>
<Arrow x1="750" y1="150" x2="720" y2="210" class="color-red"/>

</v-click>

<v-click>

\`bstr\` crate - #182 on crates.io

> The primary motivation for byte strings is for handling arbitrary bytes that are mostly UTF-8.

Ref: https://crates.io/crates/bstr

</v-click>
`,title:"Conventially UTF-8 vs. Gauranteed",level:2,content:`## Conventially UTF-8 vs. Gauranteed

Sometimes you just want cats:

\`\`\`rust
use bstr::ByteSlice;

fn main() {
    let raw: &[u8] =
        b"\\x80\\x90\\xF0\\x9F\\x99\\x84Pl\\xF0\\x9F\\x98\\xBBain\\xF0\\x9F\\x98\\xBEText!\\x80\\x80\\x80";

    let cats: String = raw
        .chars()
        .filter(|c| ('\\u{1F638}'..'\\u{1F640}').contains(c))
        .collect();

    println!("Cats: {}", cats);
    // Cats: 😻😾
}
\`\`\`

<v-click>

<Arrow x1="220" y1="150" x2="190" y2="210" class="color-red"/>
<Arrow x1="250" y1="150" x2="220" y2="210" class="color-red"/>
<Arrow x1="700" y1="150" x2="670" y2="210" class="color-red"/>
<Arrow x1="725" y1="150" x2="695" y2="210" class="color-red"/>
<Arrow x1="750" y1="150" x2="720" y2="210" class="color-red"/>

</v-click>

<v-click>

\`bstr\` crate - #182 on crates.io

> The primary motivation for byte strings is for handling arbitrary bytes that are mostly UTF-8.

Ref: https://crates.io/crates/bstr

</v-click>`,frontmatter:{hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"},index:46,start:376,end:418,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/03-unicode-in-rust.md",raw:`
## Conventially UTF-8 vs. Gauranteed

Sometimes you just want cats:

\`\`\`rust
use bstr::ByteSlice;

fn main() {
    let raw: &[u8] =
        b"\\x80\\x90\\xF0\\x9F\\x99\\x84Pl\\xF0\\x9F\\x98\\xBBain\\xF0\\x9F\\x98\\xBEText!\\x80\\x80\\x80";

    let cats: String = raw
        .chars()
        .filter(|c| ('\\u{1F638}'..'\\u{1F640}').contains(c))
        .collect();

    println!("Cats: {}", cats);
    // Cats: 😻😾
}
\`\`\`

<v-click>

<Arrow x1="220" y1="150" x2="190" y2="210" class="color-red"/>
<Arrow x1="250" y1="150" x2="220" y2="210" class="color-red"/>
<Arrow x1="700" y1="150" x2="670" y2="210" class="color-red"/>
<Arrow x1="725" y1="150" x2="695" y2="210" class="color-red"/>
<Arrow x1="750" y1="150" x2="720" y2="210" class="color-red"/>

</v-click>

<v-click>

\`bstr\` crate - #182 on crates.io

> The primary motivation for byte strings is for handling arbitrary bytes that are mostly UTF-8.

Ref: https://crates.io/crates/bstr

</v-click>
`,title:"Conventially UTF-8 vs. Gauranteed",level:2,content:`## Conventially UTF-8 vs. Gauranteed

Sometimes you just want cats:

\`\`\`rust
use bstr::ByteSlice;

fn main() {
    let raw: &[u8] =
        b"\\x80\\x90\\xF0\\x9F\\x99\\x84Pl\\xF0\\x9F\\x98\\xBBain\\xF0\\x9F\\x98\\xBEText!\\x80\\x80\\x80";

    let cats: String = raw
        .chars()
        .filter(|c| ('\\u{1F638}'..'\\u{1F640}').contains(c))
        .collect();

    println!("Cats: {}", cats);
    // Cats: 😻😾
}
\`\`\`

<v-click>

<Arrow x1="220" y1="150" x2="190" y2="210" class="color-red"/>
<Arrow x1="250" y1="150" x2="220" y2="210" class="color-red"/>
<Arrow x1="700" y1="150" x2="670" y2="210" class="color-red"/>
<Arrow x1="725" y1="150" x2="695" y2="210" class="color-red"/>
<Arrow x1="750" y1="150" x2="720" y2="210" class="color-red"/>

</v-click>

<v-click>

\`bstr\` crate - #182 on crates.io

> The primary motivation for byte strings is for handling arbitrary bytes that are mostly UTF-8.

Ref: https://crates.io/crates/bstr

</v-click>`,frontmatter:{},index:16,start:376,end:418},filepath:"/home/ben/Workspace/demystifying-unicode/pages/03-unicode-in-rust.md",noteHTML:"",id:46,no:47},__clicksElements:[],__preloaded:!1}},{path:"48",name:"page-48",component:M9,meta:{layout:"center",hide:!1,srcSequence:"./pages/03-unicode-in-rust.md",slide:{raw:`---
layout: center
---

## Summary

<v-clicks>

\`str\` is the primitive string - a slice of bytes with gaurantees of UTF-8

\`str\` is always \`UTF-8\`

\`UTF8Error\` is because you should be handling bytes instead of strings

\`bstr\` if you want Conventially UTF-8 instead

</v-clicks>
`,title:"Summary",level:2,content:`## Summary

<v-clicks>

\`str\` is the primitive string - a slice of bytes with gaurantees of UTF-8

\`str\` is always \`UTF-8\`

\`UTF8Error\` is because you should be handling bytes instead of strings

\`bstr\` if you want Conventially UTF-8 instead

</v-clicks>`,frontmatter:{layout:"center",hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"},index:47,start:418,end:436,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/03-unicode-in-rust.md",raw:`---
layout: center
---

## Summary

<v-clicks>

\`str\` is the primitive string - a slice of bytes with gaurantees of UTF-8

\`str\` is always \`UTF-8\`

\`UTF8Error\` is because you should be handling bytes instead of strings

\`bstr\` if you want Conventially UTF-8 instead

</v-clicks>
`,title:"Summary",level:2,content:`## Summary

<v-clicks>

\`str\` is the primitive string - a slice of bytes with gaurantees of UTF-8

\`str\` is always \`UTF-8\`

\`UTF8Error\` is because you should be handling bytes instead of strings

\`bstr\` if you want Conventially UTF-8 instead

</v-clicks>`,frontmatter:{layout:"center"},index:17,start:418,end:436},filepath:"/home/ben/Workspace/demystifying-unicode/pages/03-unicode-in-rust.md",noteHTML:"",id:47,no:48},__clicksElements:[],__preloaded:!1}},{path:"49",name:"page-49",component:N9,meta:{layout:"cover",title:"Quirks",hide:!1,srcSequence:"./pages/04-quirks.md",slide:{raw:null,title:"Quirks",level:1,content:"# Quirks",frontmatter:{layout:"cover",title:"Quirks",hide:!1,srcSequence:"./pages/04-quirks.md"},index:48,start:0,end:6,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/04-quirks.md",raw:`---
layout: cover
---

# Quirks
`,title:"Quirks",level:1,content:"# Quirks",frontmatter:{layout:"cover",title:"Quirks"},index:0,start:0,end:6},inline:{raw:`---
src: ./pages/04-quirks.md
hide: false
---
`,content:"",frontmatter:{hide:!1},index:6,start:53,end:58},filepath:"/home/ben/Workspace/demystifying-unicode/pages/04-quirks.md",noteHTML:"",id:48,no:49},__clicksElements:[],__preloaded:!1}},{path:"50",name:"page-50",component:H9,meta:{hide:!1,srcSequence:"./pages/04-quirks.md",slide:{raw:`
## Can we just know which UTF Encoding by looking at the bytes?

\`\`\`rust {all|1-2,23|1-6,23|1-2,8-15,23|1-2,17-23}
fn main() {
    let s = b"\\x00\\x10\\xCA\\x9C\\x00\\x10\\xC9\\x98\\x00\\x10\\xC9\\xAD\\x00\\x10\\xC9\\xAD\\x00\\x10\\xCA\\x98";
    
    // UTF-8 decode
    let utf8_s = std::str::from_utf8(s).unwrap();
    println!(" UTF-8: {utf8_s}");
    
    // UTF-16 decode
    let utf16: Vec<u16> = s.chunks(2)
        .map(|c| (c[0] as u16) << 8 | (c[1] as u16))
        .collect();
    let utf16_s = char::decode_utf16(utf16)
        .map(|r| r.unwrap_or(char::REPLACEMENT_CHARACTER))
        .collect::<String>();
    println!("UTF-16: {utf16_s}");
    
    // UTF-32 decode
    let utf32_s: String = s.chunks(4)
        .map(|c| (c[0] as u32) << 24 | (c[1] as u32) << 16 | (c[2] as u32) << 8 | (c[3] as u32))
        .map(|c| char::from_u32(c).unwrap())
        .collect();
    println!("UTF-32: {}", utf32_s);
}
\`\`\`
`,title:"Can we just know which UTF Encoding by looking at the bytes?",level:2,content:`## Can we just know which UTF Encoding by looking at the bytes?

\`\`\`rust {all|1-2,23|1-6,23|1-2,8-15,23|1-2,17-23}
fn main() {
    let s = b"\\x00\\x10\\xCA\\x9C\\x00\\x10\\xC9\\x98\\x00\\x10\\xC9\\xAD\\x00\\x10\\xC9\\xAD\\x00\\x10\\xCA\\x98";
    
    // UTF-8 decode
    let utf8_s = std::str::from_utf8(s).unwrap();
    println!(" UTF-8: {utf8_s}");
    
    // UTF-16 decode
    let utf16: Vec<u16> = s.chunks(2)
        .map(|c| (c[0] as u16) << 8 | (c[1] as u16))
        .collect();
    let utf16_s = char::decode_utf16(utf16)
        .map(|r| r.unwrap_or(char::REPLACEMENT_CHARACTER))
        .collect::<String>();
    println!("UTF-16: {utf16_s}");
    
    // UTF-32 decode
    let utf32_s: String = s.chunks(4)
        .map(|c| (c[0] as u32) << 24 | (c[1] as u32) << 16 | (c[2] as u32) << 8 | (c[3] as u32))
        .map(|c| char::from_u32(c).unwrap())
        .collect();
    println!("UTF-32: {}", utf32_s);
}
\`\`\``,frontmatter:{hide:!1,srcSequence:"./pages/04-quirks.md"},index:49,start:7,end:36,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/04-quirks.md",raw:`
## Can we just know which UTF Encoding by looking at the bytes?

\`\`\`rust {all|1-2,23|1-6,23|1-2,8-15,23|1-2,17-23}
fn main() {
    let s = b"\\x00\\x10\\xCA\\x9C\\x00\\x10\\xC9\\x98\\x00\\x10\\xC9\\xAD\\x00\\x10\\xC9\\xAD\\x00\\x10\\xCA\\x98";
    
    // UTF-8 decode
    let utf8_s = std::str::from_utf8(s).unwrap();
    println!(" UTF-8: {utf8_s}");
    
    // UTF-16 decode
    let utf16: Vec<u16> = s.chunks(2)
        .map(|c| (c[0] as u16) << 8 | (c[1] as u16))
        .collect();
    let utf16_s = char::decode_utf16(utf16)
        .map(|r| r.unwrap_or(char::REPLACEMENT_CHARACTER))
        .collect::<String>();
    println!("UTF-16: {utf16_s}");
    
    // UTF-32 decode
    let utf32_s: String = s.chunks(4)
        .map(|c| (c[0] as u32) << 24 | (c[1] as u32) << 16 | (c[2] as u32) << 8 | (c[3] as u32))
        .map(|c| char::from_u32(c).unwrap())
        .collect();
    println!("UTF-32: {}", utf32_s);
}
\`\`\`
`,title:"Can we just know which UTF Encoding by looking at the bytes?",level:2,content:`## Can we just know which UTF Encoding by looking at the bytes?

\`\`\`rust {all|1-2,23|1-6,23|1-2,8-15,23|1-2,17-23}
fn main() {
    let s = b"\\x00\\x10\\xCA\\x9C\\x00\\x10\\xC9\\x98\\x00\\x10\\xC9\\xAD\\x00\\x10\\xC9\\xAD\\x00\\x10\\xCA\\x98";
    
    // UTF-8 decode
    let utf8_s = std::str::from_utf8(s).unwrap();
    println!(" UTF-8: {utf8_s}");
    
    // UTF-16 decode
    let utf16: Vec<u16> = s.chunks(2)
        .map(|c| (c[0] as u16) << 8 | (c[1] as u16))
        .collect();
    let utf16_s = char::decode_utf16(utf16)
        .map(|r| r.unwrap_or(char::REPLACEMENT_CHARACTER))
        .collect::<String>();
    println!("UTF-16: {utf16_s}");
    
    // UTF-32 decode
    let utf32_s: String = s.chunks(4)
        .map(|c| (c[0] as u32) << 24 | (c[1] as u32) << 16 | (c[2] as u32) << 8 | (c[3] as u32))
        .map(|c| char::from_u32(c).unwrap())
        .collect();
    println!("UTF-32: {}", utf32_s);
}
\`\`\``,frontmatter:{},index:1,start:7,end:36},filepath:"/home/ben/Workspace/demystifying-unicode/pages/04-quirks.md",noteHTML:"",id:49,no:50},__clicksElements:[],__preloaded:!1}},{path:"51",name:"page-51",component:Q9,meta:{hide:!1,srcSequence:"./pages/04-quirks.md",slide:{raw:`
## Capitalization (AKA Casemapping and Casefolding)

All ASCII letters just so happen to be lossless when transitioning between upper and lower case versions. But this doesn't apply to all languages and characters.

Capitalization - "\\u0131" == "\\u0131".upcase.downcase. "\\u0131".upcase.downcase(:turkic)

Fun fact: There are no RTL languages that have the concept of casing (Arabic, Hebrew, Persian, and more...)
`,title:"Capitalization (AKA Casemapping and Casefolding)",level:2,content:`## Capitalization (AKA Casemapping and Casefolding)

All ASCII letters just so happen to be lossless when transitioning between upper and lower case versions. But this doesn't apply to all languages and characters.

Capitalization - "\\u0131" == "\\u0131".upcase.downcase. "\\u0131".upcase.downcase(:turkic)

Fun fact: There are no RTL languages that have the concept of casing (Arabic, Hebrew, Persian, and more...)`,frontmatter:{hide:!1,srcSequence:"./pages/04-quirks.md"},index:50,start:37,end:46,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/04-quirks.md",raw:`
## Capitalization (AKA Casemapping and Casefolding)

All ASCII letters just so happen to be lossless when transitioning between upper and lower case versions. But this doesn't apply to all languages and characters.

Capitalization - "\\u0131" == "\\u0131".upcase.downcase. "\\u0131".upcase.downcase(:turkic)

Fun fact: There are no RTL languages that have the concept of casing (Arabic, Hebrew, Persian, and more...)
`,title:"Capitalization (AKA Casemapping and Casefolding)",level:2,content:`## Capitalization (AKA Casemapping and Casefolding)

All ASCII letters just so happen to be lossless when transitioning between upper and lower case versions. But this doesn't apply to all languages and characters.

Capitalization - "\\u0131" == "\\u0131".upcase.downcase. "\\u0131".upcase.downcase(:turkic)

Fun fact: There are no RTL languages that have the concept of casing (Arabic, Hebrew, Persian, and more...)`,frontmatter:{},index:2,start:37,end:46},filepath:"/home/ben/Workspace/demystifying-unicode/pages/04-quirks.md",noteHTML:"",id:50,no:51},__clicksElements:[],__preloaded:!1}},{path:"52",name:"page-52",component:a4,meta:{hide:!1,srcSequence:"./pages/04-quirks.md",slide:{raw:"\n## Composition\n\nA[cute] E\n\n- é = `\\u00e9`\n- é = `\\u0065\\u0301` (just an `e` but with special `\\u0301` combining)\n\n```\né != é\n```\n\n`\\u003d\\u0338\\u003d` vs. `\\u2260` vs. `!=`\n\n```\n'≠=' != '≠' != '!='\n```\n\nNot not equal\n```\n=⃥\n```\n\n<footer>\n\n- Unicode combining classes: https://www.compart.com/en/unicode/combining\n- Unicode Normalization Forms: http://www.unicode.org/reports/tr15/\n- Crate unicode\\_normalization: https://docs.rs/unicode-normalization/latest/unicode_normalization/\n\n</footer>\n",title:"Composition",level:2,content:"## Composition\n\nA[cute] E\n\n- é = `\\u00e9`\n- é = `\\u0065\\u0301` (just an `e` but with special `\\u0301` combining)\n\n```\né != é\n```\n\n`\\u003d\\u0338\\u003d` vs. `\\u2260` vs. `!=`\n\n```\n'≠=' != '≠' != '!='\n```\n\nNot not equal\n```\n=⃥\n```\n\n<footer>\n\n- Unicode combining classes: https://www.compart.com/en/unicode/combining\n- Unicode Normalization Forms: http://www.unicode.org/reports/tr15/\n- Crate unicode\\_normalization: https://docs.rs/unicode-normalization/latest/unicode_normalization/\n\n</footer>",frontmatter:{hide:!1,srcSequence:"./pages/04-quirks.md"},index:51,start:47,end:78,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/04-quirks.md",raw:"\n## Composition\n\nA[cute] E\n\n- é = `\\u00e9`\n- é = `\\u0065\\u0301` (just an `e` but with special `\\u0301` combining)\n\n```\né != é\n```\n\n`\\u003d\\u0338\\u003d` vs. `\\u2260` vs. `!=`\n\n```\n'≠=' != '≠' != '!='\n```\n\nNot not equal\n```\n=⃥\n```\n\n<footer>\n\n- Unicode combining classes: https://www.compart.com/en/unicode/combining\n- Unicode Normalization Forms: http://www.unicode.org/reports/tr15/\n- Crate unicode\\_normalization: https://docs.rs/unicode-normalization/latest/unicode_normalization/\n\n</footer>\n",title:"Composition",level:2,content:"## Composition\n\nA[cute] E\n\n- é = `\\u00e9`\n- é = `\\u0065\\u0301` (just an `e` but with special `\\u0301` combining)\n\n```\né != é\n```\n\n`\\u003d\\u0338\\u003d` vs. `\\u2260` vs. `!=`\n\n```\n'≠=' != '≠' != '!='\n```\n\nNot not equal\n```\n=⃥\n```\n\n<footer>\n\n- Unicode combining classes: https://www.compart.com/en/unicode/combining\n- Unicode Normalization Forms: http://www.unicode.org/reports/tr15/\n- Crate unicode\\_normalization: https://docs.rs/unicode-normalization/latest/unicode_normalization/\n\n</footer>",frontmatter:{},index:3,start:47,end:78},filepath:"/home/ben/Workspace/demystifying-unicode/pages/04-quirks.md",noteHTML:"",id:51,no:52},__clicksElements:[],__preloaded:!1}},{path:"53",name:"page-53",component:p4,meta:{hide:!1,srcSequence:"./pages/04-quirks.md",slide:{raw:`
## Emoji Composition

<p style="font-size: 65%; line-height: 1rem;"> 😶‍🌫️ 😮‍💨 😵‍💫 ❤️‍🔥 ❤️‍🩹 👁️‍🗨️ 🫱🏻‍🫲🏼 🫱🏻‍🫲🏽 🫱🏻‍🫲🏾 🫱🏻‍🫲🏿 🫱🏼‍🫲🏻 🫱🏼‍🫲🏽 🫱🏼‍🫲🏾 🫱🏼‍🫲🏿 🫱🏽‍🫲🏻 🫱🏽‍🫲🏼 🫱🏽‍🫲🏾 🫱🏽‍🫲🏿 🫱🏾‍🫲🏻 🫱🏾‍🫲🏼 🫱🏾‍🫲🏽 🫱🏾‍🫲🏿 🫱🏿‍🫲🏻 🫱🏿‍🫲🏼 🫱🏿‍🫲🏽 🫱🏿‍🫲🏾 🧔‍♂️ 🧔🏻‍♂️ 🧔🏼‍♂️ 🧔🏽‍♂️ 🧔🏾‍♂️ 🧔🏿‍♂️ 🧔‍♀️ 🧔🏻‍♀️ 🧔🏼‍♀️ 🧔🏽‍♀️ 🧔🏾‍♀️ 🧔🏿‍♀️ 👨‍🦰 👨🏻‍🦰 👨🏼‍🦰 👨🏽‍🦰 👨🏾‍🦰 👨🏿‍🦰 👨‍🦱 👨🏻‍🦱 👨🏼‍🦱 👨🏽‍🦱 👨🏾‍🦱 👨🏿‍🦱 👨‍🦳 👨🏻‍🦳 👨🏼‍🦳 👨🏽‍🦳 👨🏾‍🦳 👨🏿‍🦳 👨‍🦲 👨🏻‍🦲 👨🏼‍🦲 👨🏽‍🦲 👨🏾‍🦲 👨🏿‍🦲 👩‍🦰 👩🏻‍🦰 👩🏼‍🦰 👩🏽‍🦰 👩🏾‍🦰 👩🏿‍🦰 🧑‍🦰 🧑🏻‍🦰 🧑🏼‍🦰 🧑🏽‍🦰 🧑🏾‍🦰 🧑🏿‍🦰 👩‍🦱 👩🏻‍🦱 👩🏼‍🦱 👩🏽‍🦱 👩🏾‍🦱 👩🏿‍🦱 🧑‍🦱 🧑🏻‍🦱 🧑🏼‍🦱 🧑🏽‍🦱 🧑🏾‍🦱 🧑🏿‍🦱 👩‍🦳 👩🏻‍🦳 👩🏼‍🦳 👩🏽‍🦳 👩🏾‍🦳 👩🏿‍🦳 🧑‍🦳 🧑🏻‍🦳 🧑🏼‍🦳 🧑🏽‍🦳 🧑🏾‍🦳 🧑🏿‍🦳 👩‍🦲 👩🏻‍🦲 👩🏼‍🦲 👩🏽‍🦲 👩🏾‍🦲 👩🏿‍🦲 🧑‍🦲 🧑🏻‍🦲 🧑🏼‍🦲 🧑🏽‍🦲 🧑🏾‍🦲 🧑🏿‍🦲 👱‍♀️ 👱🏻‍♀️ 👱🏼‍♀️ 👱🏽‍♀️ 👱🏾‍♀️ 👱🏿‍♀️ 👱‍♂️ 👱🏻‍♂️ 👱🏼‍♂️ 👱🏽‍♂️ 👱🏾‍♂️ 👱🏿‍♂️ 🙍‍♂️ 🙍🏻‍♂️ 🙍🏼‍♂️ 🙍🏽‍♂️ 🙍🏾‍♂️ 🙍🏿‍♂️ 🙍‍♀️ 🙍🏻‍♀️ 🙍🏼‍♀️ 🙍🏽‍♀️ 🙍🏾‍♀️ 🙍🏿‍♀️ 🙎‍♂️ 🙎🏻‍♂️ 🙎🏼‍♂️ 🙎🏽‍♂️ 🙎🏾‍♂️ 🙎🏿‍♂️ 🙎‍♀️ 🙎🏻‍♀️ 🙎🏼‍♀️ 🙎🏽‍♀️ 🙎🏾‍♀️ 🙎🏿‍♀️ 🙅‍♂️ 🙅🏻‍♂️ 🙅🏼‍♂️ 🙅🏽‍♂️ 🙅🏾‍♂️ 🙅🏿‍♂️ 🙅‍♀️ 🙅🏻‍♀️ 🙅🏼‍♀️ 🙅🏽‍♀️ 🙅🏾‍♀️ 🙅🏿‍♀️ 🙆‍♂️ 🙆🏻‍♂️ 🙆🏼‍♂️ 🙆🏽‍♂️ 🙆🏾‍♂️ 🙆🏿‍♂️ 🙆‍♀️ 🙆🏻‍♀️ 🙆🏼‍♀️ 🙆🏽‍♀️ 🙆🏾‍♀️ 🙆🏿‍♀️ 💁‍♂️ 💁🏻‍♂️ 💁🏼‍♂️ 💁🏽‍♂️ 💁🏾‍♂️ 💁🏿‍♂️ 💁‍♀️ 💁🏻‍♀️ 💁🏼‍♀️ 💁🏽‍♀️ 💁🏾‍♀️ 💁🏿‍♀️ 🙋‍♂️ 🙋🏻‍♂️ 🙋🏼‍♂️ 🙋🏽‍♂️ 🙋🏾‍♂️ 🙋🏿‍♂️ 🙋‍♀️ 🙋🏻‍♀️ 🙋🏼‍♀️ 🙋🏽‍♀️ 🙋🏾‍♀️ 🙋🏿‍♀️ 🧏‍♂️ 🧏🏻‍♂️ 🧏🏼‍♂️ 🧏🏽‍♂️ 🧏🏾‍♂️ 🧏🏿‍♂️ 🧏‍♀️ 🧏🏻‍♀️ 🧏🏼‍♀️ 🧏🏽‍♀️ 🧏🏾‍♀️ 🧏🏿‍♀️ 🙇‍♂️ 🙇🏻‍♂️ 🙇🏼‍♂️ 🙇🏽‍♂️ 🙇🏾‍♂️ 🙇🏿‍♂️ 🙇‍♀️ 🙇🏻‍♀️ 🙇🏼‍♀️ 🙇🏽‍♀️ 🙇🏾‍♀️ 🙇🏿‍♀️ 🤦‍♂️ 🤦🏻‍♂️ 🤦🏼‍♂️ 🤦🏽‍♂️ 🤦🏾‍♂️ 🤦🏿‍♂️ 🤦‍♀️ 🤦🏻‍♀️ 🤦🏼‍♀️ 🤦🏽‍♀️ 🤦🏾‍♀️ 🤦🏿‍♀️ 🤷‍♂️ 🤷🏻‍♂️ 🤷🏼‍♂️ 🤷🏽‍♂️ 🤷🏾‍♂️ 🤷🏿‍♂️ 🤷‍♀️ 🤷🏻‍♀️ 🤷🏼‍♀️ 🤷🏽‍♀️ 🤷🏾‍♀️ 🤷🏿‍♀️ 🧑‍⚕️ 🧑🏻‍⚕️ 🧑🏼‍⚕️ 🧑🏽‍⚕️ 🧑🏾‍⚕️ 🧑🏿‍⚕️ 👨‍⚕️ 👨🏻‍⚕️ 👨🏼‍⚕️ 👨🏽‍⚕️ 👨🏾‍⚕️ 👨🏿‍⚕️ 👩‍⚕️ 👩🏻‍⚕️ 👩🏼‍⚕️ 👩🏽‍⚕️ 👩🏾‍⚕️ 👩🏿‍⚕️ 🧑‍🎓 🧑🏻‍🎓 🧑🏼‍🎓 🧑🏽‍🎓 🧑🏾‍🎓 🧑🏿‍🎓 👨‍🎓 👨🏻‍🎓 👨🏼‍🎓 👨🏽‍🎓 👨🏾‍🎓 👨🏿‍🎓 👩‍🎓 👩🏻‍🎓 👩🏼‍🎓 👩🏽‍🎓 👩🏾‍🎓 👩🏿‍🎓 🧑‍🏫 🧑🏻‍🏫 🧑🏼‍🏫 🧑🏽‍🏫 🧑🏾‍🏫 🧑🏿‍🏫 👨‍🏫 👨🏻‍🏫 👨🏼‍🏫 👨🏽‍🏫 👨🏾‍🏫 👨🏿‍🏫 👩‍🏫 👩🏻‍🏫 👩🏼‍🏫 👩🏽‍🏫 👩🏾‍🏫 👩🏿‍🏫 🧑‍⚖️ 🧑🏻‍⚖️ 🧑🏼‍⚖️ 🧑🏽‍⚖️ 🧑🏾‍⚖️ 🧑🏿‍⚖️ 👨‍⚖️ 👨🏻‍⚖️ 👨🏼‍⚖️ 👨🏽‍⚖️ 👨🏾‍⚖️ 👨🏿‍⚖️ 👩‍⚖️ 👩🏻‍⚖️ 👩🏼‍⚖️ 👩🏽‍⚖️ 👩🏾‍⚖️ 👩🏿‍⚖️ 🧑‍🌾 🧑🏻‍🌾 🧑🏼‍🌾 🧑🏽‍🌾 🧑🏾‍🌾 🧑🏿‍🌾 👨‍🌾 👨🏻‍🌾 👨🏼‍🌾 👨🏽‍🌾 👨🏾‍🌾 👨🏿‍🌾 👩‍🌾 👩🏻‍🌾 👩🏼‍🌾 👩🏽‍🌾 👩🏾‍🌾 👩🏿‍🌾 🧑‍🍳 🧑🏻‍🍳 🧑🏼‍🍳 🧑🏽‍🍳 🧑🏾‍🍳 🧑🏿‍🍳 👨‍🍳 👨🏻‍🍳 👨🏼‍🍳 👨🏽‍🍳 👨🏾‍🍳 👨🏿‍🍳 👩‍🍳 👩🏻‍🍳 👩🏼‍🍳 👩🏽‍🍳 👩🏾‍🍳 👩🏿‍🍳 🧑‍🔧 🧑🏻‍🔧 🧑🏼‍🔧 🧑🏽‍🔧 🧑🏾‍🔧 🧑🏿‍🔧 👨‍🔧 👨🏻‍🔧 👨🏼‍🔧 👨🏽‍🔧 👨🏾‍🔧 👨🏿‍🔧 👩‍🔧 👩🏻‍🔧 👩🏼‍🔧 👩🏽‍🔧 👩🏾‍🔧 👩🏿‍🔧 🧑‍🏭 🧑🏻‍🏭 🧑🏼‍🏭 🧑🏽‍🏭 🧑🏾‍🏭 🧑🏿‍🏭 👨‍🏭 👨🏻‍🏭 👨🏼‍🏭 👨🏽‍🏭 👨🏾‍🏭 👨🏿‍🏭 👩‍🏭 👩🏻‍🏭 👩🏼‍🏭 👩🏽‍🏭 👩🏾‍🏭 👩🏿‍🏭 🧑‍💼 🧑🏻‍💼 🧑🏼‍💼 🧑🏽‍💼 🧑🏾‍💼 🧑🏿‍💼 👨‍💼 👨🏻‍💼 👨🏼‍💼 👨🏽‍💼 👨🏾‍💼 👨🏿‍💼 👩‍💼 👩🏻‍💼 👩🏼‍💼 👩🏽‍💼 👩🏾‍💼 👩🏿‍💼 🧑‍🔬 🧑🏻‍🔬 🧑🏼‍🔬 🧑🏽‍🔬 🧑🏾‍🔬 🧑🏿‍🔬 👨‍🔬 👨🏻‍🔬 👨🏼‍🔬 👨🏽‍🔬 👨🏾‍🔬 👨🏿‍🔬 👩‍🔬 👩🏻‍🔬 👩🏼‍🔬 👩🏽‍🔬 👩🏾‍🔬 👩🏿‍🔬 🧑‍💻 🧑🏻‍💻 🧑🏼‍💻 🧑🏽‍💻 🧑🏾‍💻 🧑🏿‍💻 👨‍💻 👨🏻‍💻 👨🏼‍💻 👨🏽‍💻 👨🏾‍💻 👨🏿‍💻 👩‍💻 👩🏻‍💻 👩🏼‍💻 👩🏽‍💻 👩🏾‍💻 👩🏿‍💻 🧑‍🎤 🧑🏻‍🎤 🧑🏼‍🎤 🧑🏽‍🎤 🧑🏾‍🎤 🧑🏿‍🎤 👨‍🎤 👨🏻‍🎤 👨🏼‍🎤 👨🏽‍🎤 👨🏾‍🎤 👨🏿‍🎤 👩‍🎤 👩🏻‍🎤 👩🏼‍🎤 👩🏽‍🎤 👩🏾‍🎤 👩🏿‍🎤 🧑‍🎨 🧑🏻‍🎨 🧑🏼‍🎨 🧑🏽‍🎨 🧑🏾‍🎨 🧑🏿‍🎨 👨‍🎨 👨🏻‍🎨 👨🏼‍🎨 👨🏽‍🎨 👨🏾‍🎨 👨🏿‍🎨 👩‍🎨 👩🏻‍🎨 👩🏼‍🎨 👩🏽‍🎨 👩🏾‍🎨 👩🏿‍🎨 🧑‍✈️ 🧑🏻‍✈️ 🧑🏼‍✈️ 🧑🏽‍✈️ 🧑🏾‍✈️ 🧑🏿‍✈️ 👨‍✈️ 👨🏻‍✈️ 👨🏼‍✈️ 👨🏽‍✈️ 👨🏾‍✈️ 👨🏿‍✈️ 👩‍✈️ 👩🏻‍✈️ 👩🏼‍✈️ 👩🏽‍✈️ 👩🏾‍✈️ 👩🏿‍✈️ 🧑‍🚀 🧑🏻‍🚀 🧑🏼‍🚀 🧑🏽‍🚀 🧑🏾‍🚀 🧑🏿‍🚀 👨‍🚀 👨🏻‍🚀 👨🏼‍🚀 👨🏽‍🚀 👨🏾‍🚀 👨🏿‍🚀 👩‍🚀 👩🏻‍🚀 👩🏼‍🚀 👩🏽‍🚀 👩🏾‍🚀 👩🏿‍🚀 🧑‍🚒 🧑🏻‍🚒 🧑🏼‍🚒 🧑🏽‍🚒 🧑🏾‍🚒 🧑🏿‍🚒 👨‍🚒 👨🏻‍🚒 👨🏼‍🚒 👨🏽‍🚒 👨🏾‍🚒 👨🏿‍🚒 👩‍🚒 👩🏻‍🚒 👩🏼‍🚒 👩🏽‍🚒 👩🏾‍🚒 👩🏿‍🚒 👮‍♂️ 👮🏻‍♂️ 👮🏼‍♂️ 👮🏽‍♂️ 👮🏾‍♂️ 👮🏿‍♂️ 👮‍♀️ 👮🏻‍♀️ 👮🏼‍♀️ 👮🏽‍♀️ 👮🏾‍♀️ 👮🏿‍♀️ 🕵️‍♂️ 🕵🏻‍♂️ 🕵🏼‍♂️ 🕵🏽‍♂️ 🕵🏾‍♂️ 🕵🏿‍♂️ 🕵️‍♀️ 🕵🏻‍♀️ 🕵🏼‍♀️ 🕵🏽‍♀️ 🕵🏾‍♀️ 🕵🏿‍♀️ 💂‍♂️ 💂🏻‍♂️ 💂🏼‍♂️ 💂🏽‍♂️ 💂🏾‍♂️ 💂🏿‍♂️ 💂‍♀️ 💂🏻‍♀️ 💂🏼‍♀️ 💂🏽‍♀️ 💂🏾‍♀️ 💂🏿‍♀️ 👷‍♂️ 👷🏻‍♂️ 👷🏼‍♂️ 👷🏽‍♂️ 👷🏾‍♂️ 👷🏿‍♂️ 👷‍♀️ 👷🏻‍♀️ 👷🏼‍♀️ 👷🏽‍♀️ 👷🏾‍♀️ 👷🏿‍♀️ 👳‍♂️ 👳🏻‍♂️ 👳🏼‍♂️ 👳🏽‍♂️ 👳🏾‍♂️ 👳🏿‍♂️ 👳‍♀️ 👳🏻‍♀️ 👳🏼‍♀️ 👳🏽‍♀️ 👳🏾‍♀️ 👳🏿‍♀️ 🤵‍♂️ 🤵🏻‍♂️ 🤵🏼‍♂️ 🤵🏽‍♂️ 🤵🏾‍♂️ 🤵🏿‍♂️ 🤵‍♀️ 🤵🏻‍♀️ 🤵🏼‍♀️ 🤵🏽‍♀️ 🤵🏾‍♀️ 🤵🏿‍♀️ 👰‍♂️ 👰🏻‍♂️ 👰🏼‍♂️ 👰🏽‍♂️ 👰🏾‍♂️ 👰🏿‍♂️ 👰‍♀️ 👰🏻‍♀️ 👰🏼‍♀️ 👰🏽‍♀️ 👰🏾‍♀️ 👰🏿‍♀️ 👩‍🍼 👩🏻‍🍼 👩🏼‍🍼 👩🏽‍🍼 👩🏾‍🍼 👩🏿‍🍼 👨‍🍼 👨🏻‍🍼 👨🏼‍🍼 👨🏽‍🍼 👨🏾‍🍼 👨🏿‍🍼 🧑‍🍼 🧑🏻‍🍼 🧑🏼‍🍼 🧑🏽‍🍼 🧑🏾‍🍼 🧑🏿‍🍼 🧑‍🎄 🧑🏻‍🎄 🧑🏼‍🎄 🧑🏽‍🎄 🧑🏾‍🎄 🧑🏿‍🎄 🦸‍♂️ 🦸🏻‍♂️ 🦸🏼‍♂️ 🦸🏽‍♂️ 🦸🏾‍♂️ 🦸🏿‍♂️ 🦸‍♀️ 🦸🏻‍♀️ 🦸🏼‍♀️ 🦸🏽‍♀️ 🦸🏾‍♀️ 🦸🏿‍♀️ 🦹‍♂️ 🦹🏻‍♂️ 🦹🏼‍♂️ 🦹🏽‍♂️ 🦹🏾‍♂️ 🦹🏿‍♂️ 🦹‍♀️ 🦹🏻‍♀️ 🦹🏼‍♀️ 🦹🏽‍♀️ 🦹🏾‍♀️ 🦹🏿‍♀️ 🧙‍♂️ 🧙🏻‍♂️ 🧙🏼‍♂️ 🧙🏽‍♂️ 🧙🏾‍♂️ 🧙🏿‍♂️ 🧙‍♀️ 🧙🏻‍♀️ 🧙🏼‍♀️ 🧙🏽‍♀️ 🧙🏾‍♀️ 🧙🏿‍♀️ 🧚‍♂️ 🧚🏻‍♂️ 🧚🏼‍♂️ 🧚🏽‍♂️ 🧚🏾‍♂️ 🧚🏿‍♂️ 🧚‍♀️ 🧚🏻‍♀️ 🧚🏼‍♀️ 🧚🏽‍♀️ 🧚🏾‍♀️ 🧚🏿‍♀️ 🧛‍♂️ 🧛🏻‍♂️ 🧛🏼‍♂️ 🧛🏽‍♂️ 🧛🏾‍♂️ 🧛🏿‍♂️ 🧛‍♀️ 🧛🏻‍♀️ 🧛🏼‍♀️ 🧛🏽‍♀️ 🧛🏾‍♀️ 🧛🏿‍♀️ 🧜‍♂️ 🧜🏻‍♂️ 🧜🏼‍♂️ 🧜🏽‍♂️ 🧜🏾‍♂️ 🧜🏿‍♂️ 🧜‍♀️ 🧜🏻‍♀️ 🧜🏼‍♀️ 🧜🏽‍♀️ 🧜🏾‍♀️ 🧜🏿‍♀️ 🧝‍♂️ 🧝🏻‍♂️ 🧝🏼‍♂️ 🧝🏽‍♂️ 🧝🏾‍♂️ 🧝🏿‍♂️ 🧝‍♀️ 🧝🏻‍♀️ 🧝🏼‍♀️ 🧝🏽‍♀️ 🧝🏾‍♀️ 🧝🏿‍♀️ 🧞‍♂️ 🧞‍♀️ 🧟‍♂️ 🧟‍♀️ 💆‍♂️ 💆🏻‍♂️ 💆🏼‍♂️ 💆🏽‍♂️ 💆🏾‍♂️ 💆🏿‍♂️ 💆‍♀️ 💆🏻‍♀️ 💆🏼‍♀️ 💆🏽‍♀️ 💆🏾‍♀️ 💆🏿‍♀️ 💇‍♂️ 💇🏻‍♂️ 💇🏼‍♂️ 💇🏽‍♂️ 💇🏾‍♂️ 💇🏿‍♂️ 💇‍♀️ 💇🏻‍♀️ 💇🏼‍♀️ 💇🏽‍♀️ 💇🏾‍♀️ 💇🏿‍♀️ 🚶‍♂️ 🚶🏻‍♂️ 🚶🏼‍♂️ 🚶🏽‍♂️ 🚶🏾‍♂️ 🚶🏿‍♂️ 🚶‍♀️ 🚶🏻‍♀️ 🚶🏼‍♀️ 🚶🏽‍♀️ 🚶🏾‍♀️ 🚶🏿‍♀️ 🧍‍♂️ 🧍🏻‍♂️ 🧍🏼‍♂️ 🧍🏽‍♂️ 🧍🏾‍♂️ 🧍🏿‍♂️ 🧍‍♀️ 🧍🏻‍♀️ 🧍🏼‍♀️ 🧍🏽‍♀️ 🧍🏾‍♀️ 🧍🏿‍♀️ 🧎‍♂️ 🧎🏻‍♂️ 🧎🏼‍♂️ 🧎🏽‍♂️ 🧎🏾‍♂️ 🧎🏿‍♂️ 🧎‍♀️ 🧎🏻‍♀️ 🧎🏼‍♀️ 🧎🏽‍♀️ 🧎🏾‍♀️ 🧎🏿‍♀️ 🧑‍🦯 🧑🏻‍🦯 🧑🏼‍🦯 🧑🏽‍🦯 🧑🏾‍🦯 🧑🏿‍🦯 👨‍🦯 👨🏻‍🦯 👨🏼‍🦯 👨🏽‍🦯 👨🏾‍🦯 👨🏿‍🦯 👩‍🦯 👩🏻‍🦯 👩🏼‍🦯 👩🏽‍🦯 👩🏾‍🦯 👩🏿‍🦯 🧑‍🦼 🧑🏻‍🦼 🧑🏼‍🦼 🧑🏽‍🦼 🧑🏾‍🦼 🧑🏿‍🦼 👨‍🦼 👨🏻‍🦼 👨🏼‍🦼 👨🏽‍🦼 👨🏾‍🦼 👨🏿‍🦼 👩‍🦼 👩🏻‍🦼 👩🏼‍🦼 👩🏽‍🦼 👩🏾‍🦼 👩🏿‍🦼 🧑‍🦽 🧑🏻‍🦽 🧑🏼‍🦽 🧑🏽‍🦽 🧑🏾‍🦽 🧑🏿‍🦽 👨‍🦽 👨🏻‍🦽 👨🏼‍🦽 👨🏽‍🦽 👨🏾‍🦽 👨🏿‍🦽 👩‍🦽 👩🏻‍🦽 👩🏼‍🦽 👩🏽‍🦽 👩🏾‍🦽 👩🏿‍🦽 🏃‍♂️ 🏃🏻‍♂️ 🏃🏼‍♂️ 🏃🏽‍♂️ 🏃🏾‍♂️ 🏃🏿‍♂️ 🏃‍♀️ 🏃🏻‍♀️ 🏃🏼‍♀️ 🏃🏽‍♀️ 🏃🏾‍♀️ 🏃🏿‍♀️ 👯‍♂️ 👯‍♀️ 🧖‍♂️ 🧖🏻‍♂️ 🧖🏼‍♂️ 🧖🏽‍♂️ 🧖🏾‍♂️ 🧖🏿‍♂️ 🧖‍♀️ 🧖🏻‍♀️ 🧖🏼‍♀️ 🧖🏽‍♀️ 🧖🏾‍♀️ 🧖🏿‍♀️ 🧗‍♂️ 🧗🏻‍♂️ 🧗🏼‍♂️ 🧗🏽‍♂️ 🧗🏾‍♂️ 🧗🏿‍♂️ 🧗‍♀️ 🧗🏻‍♀️ 🧗🏼‍♀️ 🧗🏽‍♀️ 🧗🏾‍♀️ 🧗🏿‍♀️ 🏌️‍♂️ 🏌🏻‍♂️ 🏌🏼‍♂️ 🏌🏽‍♂️ 🏌🏾‍♂️ 🏌🏿‍♂️ 🏌️‍♀️ 🏌🏻‍♀️ 🏌🏼‍♀️ 🏌🏽‍♀️ 🏌🏾‍♀️ 🏌🏿‍♀️ 🏄‍♂️ 🏄🏻‍♂️ 🏄🏼‍♂️ 🏄🏽‍♂️ 🏄🏾‍♂️ 🏄🏿‍♂️ 🏄‍♀️ 🏄🏻‍♀️ 🏄🏼‍♀️ 🏄🏽‍♀️ 🏄🏾‍♀️ 🏄🏿‍♀️ 🚣‍♂️ 🚣🏻‍♂️ 🚣🏼‍♂️ 🚣🏽‍♂️ 🚣🏾‍♂️ 🚣🏿‍♂️ 🚣‍♀️ 🚣🏻‍♀️ 🚣🏼‍♀️ 🚣🏽‍♀️ 🚣🏾‍♀️ 🚣🏿‍♀️ 🏊‍♂️ 🏊🏻‍♂️ 🏊🏼‍♂️ 🏊🏽‍♂️ 🏊🏾‍♂️ 🏊🏿‍♂️ 🏊‍♀️ 🏊🏻‍♀️ 🏊🏼‍♀️ 🏊🏽‍♀️ 🏊🏾‍♀️ 🏊🏿‍♀️ ⛹️‍♂️ ⛹🏻‍♂️ ⛹🏼‍♂️ ⛹🏽‍♂️ ⛹🏾‍♂️ ⛹🏿‍♂️ ⛹️‍♀️ ⛹🏻‍♀️ ⛹🏼‍♀️ ⛹🏽‍♀️ ⛹🏾‍♀️ ⛹🏿‍♀️ 🏋️‍♂️ 🏋🏻‍♂️ 🏋🏼‍♂️ 🏋🏽‍♂️ 🏋🏾‍♂️ 🏋🏿‍♂️ 🏋️‍♀️ 🏋🏻‍♀️ 🏋🏼‍♀️ 🏋🏽‍♀️ 🏋🏾‍♀️ 🏋🏿‍♀️ 🚴‍♂️ 🚴🏻‍♂️ 🚴🏼‍♂️ 🚴🏽‍♂️ 🚴🏾‍♂️ 🚴🏿‍♂️ 🚴‍♀️ 🚴🏻‍♀️ 🚴🏼‍♀️ 🚴🏽‍♀️ 🚴🏾‍♀️ 🚴🏿‍♀️ 🚵‍♂️ 🚵🏻‍♂️ 🚵🏼‍♂️ 🚵🏽‍♂️ 🚵🏾‍♂️ 🚵🏿‍♂️ 🚵‍♀️ 🚵🏻‍♀️ 🚵🏼‍♀️ 🚵🏽‍♀️ 🚵🏾‍♀️ 🚵🏿‍♀️ 🤸‍♂️ 🤸🏻‍♂️ 🤸🏼‍♂️ 🤸🏽‍♂️ 🤸🏾‍♂️ 🤸🏿‍♂️ 🤸‍♀️ 🤸🏻‍♀️ 🤸🏼‍♀️ 🤸🏽‍♀️ 🤸🏾‍♀️ 🤸🏿‍♀️ 🤼‍♂️ 🤼‍♀️ 🤽‍♂️ 🤽🏻‍♂️ 🤽🏼‍♂️ 🤽🏽‍♂️ 🤽🏾‍♂️ 🤽🏿‍♂️ 🤽‍♀️ 🤽🏻‍♀️ 🤽🏼‍♀️ 🤽🏽‍♀️ 🤽🏾‍♀️ 🤽🏿‍♀️ 🤾‍♂️ 🤾🏻‍♂️ 🤾🏼‍♂️ 🤾🏽‍♂️ 🤾🏾‍♂️ 🤾🏿‍♂️ 🤾‍♀️ 🤾🏻‍♀️ 🤾🏼‍♀️ 🤾🏽‍♀️ 🤾🏾‍♀️ 🤾🏿‍♀️ 🤹‍♂️ 🤹🏻‍♂️ 🤹🏼‍♂️ 🤹🏽‍♂️ 🤹🏾‍♂️ 🤹🏿‍♂️ 🤹‍♀️ 🤹🏻‍♀️ 🤹🏼‍♀️ 🤹🏽‍♀️ 🤹🏾‍♀️ 🤹🏿‍♀️ 🧘‍♂️ 🧘🏻‍♂️ 🧘🏼‍♂️ 🧘🏽‍♂️ 🧘🏾‍♂️ 🧘🏿‍♂️ 🧘‍♀️ 🧘🏻‍♀️ 🧘🏼‍♀️ 🧘🏽‍♀️ 🧘🏾‍♀️ 🧘🏿‍♀️ 🧑‍🤝‍🧑 🧑🏻‍🤝‍🧑🏻 🧑🏻‍🤝‍🧑🏼 🧑🏻‍🤝‍🧑🏽 🧑🏻‍🤝‍🧑🏾 🧑🏻‍🤝‍🧑🏿 🧑🏼‍🤝‍🧑🏻 🧑🏼‍🤝‍🧑🏼 🧑🏼‍🤝‍🧑🏽 🧑🏼‍🤝‍🧑🏾 🧑🏼‍🤝‍🧑🏿 🧑🏽‍🤝‍🧑🏻 🧑🏽‍🤝‍🧑🏼 🧑🏽‍🤝‍🧑🏽 🧑🏽‍🤝‍🧑🏾 🧑🏽‍🤝‍🧑🏿 🧑🏾‍🤝‍🧑🏻 🧑🏾‍🤝‍🧑🏼 🧑🏾‍🤝‍🧑🏽 🧑🏾‍🤝‍🧑🏾 🧑🏾‍🤝‍🧑🏿 🧑🏿‍🤝‍🧑🏻 🧑🏿‍🤝‍🧑🏼 🧑🏿‍🤝‍🧑🏽 🧑🏿‍🤝‍🧑🏾 🧑🏿‍🤝‍🧑🏿 👩🏻‍🤝‍👩🏼 👩🏻‍🤝‍👩🏽 👩🏻‍🤝‍👩🏾 👩🏻‍🤝‍👩🏿 👩🏼‍🤝‍👩🏻 👩🏼‍🤝‍👩🏽 👩🏼‍🤝‍👩🏾 👩🏼‍🤝‍👩🏿 👩🏽‍🤝‍👩🏻 👩🏽‍🤝‍👩🏼 👩🏽‍🤝‍👩🏾 👩🏽‍🤝‍👩🏿 👩🏾‍🤝‍👩🏻 👩🏾‍🤝‍👩🏼 👩🏾‍🤝‍👩🏽 👩🏾‍🤝‍👩🏿 👩🏿‍🤝‍👩🏻 👩🏿‍🤝‍👩🏼 👩🏿‍🤝‍👩🏽 👩🏿‍🤝‍👩🏾 👩🏻‍🤝‍👨🏼 👩🏻‍🤝‍👨🏽 👩🏻‍🤝‍👨🏾 👩🏻‍🤝‍👨🏿 👩🏼‍🤝‍👨🏻 👩🏼‍🤝‍👨🏽 👩🏼‍🤝‍👨🏾 👩🏼‍🤝‍👨🏿 👩🏽‍🤝‍👨🏻 👩🏽‍🤝‍👨🏼 👩🏽‍🤝‍👨🏾 👩🏽‍🤝‍👨🏿 👩🏾‍🤝‍👨🏻 👩🏾‍🤝‍👨🏼 👩🏾‍🤝‍👨🏽 👩🏾‍🤝‍👨🏿 👩🏿‍🤝‍👨🏻 👩🏿‍🤝‍👨🏼 👩🏿‍🤝‍👨🏽 👩🏿‍🤝‍👨🏾 👨🏻‍🤝‍👨🏼 👨🏻‍🤝‍👨🏽 👨🏻‍🤝‍👨🏾 👨🏻‍🤝‍👨🏿 👨🏼‍🤝‍👨🏻 👨🏼‍🤝‍👨🏽 👨🏼‍🤝‍👨🏾 👨🏼‍🤝‍👨🏿 👨🏽‍🤝‍👨🏻 👨🏽‍🤝‍👨🏼 👨🏽‍🤝‍👨🏾 👨🏽‍🤝‍👨🏿 👨🏾‍🤝‍👨🏻 👨🏾‍🤝‍👨🏼 👨🏾‍🤝‍👨🏽 👨🏾‍🤝‍👨🏿 👨🏿‍🤝‍👨🏻 👨🏿‍🤝‍👨🏼 👨🏿‍🤝‍👨🏽 👨🏿‍🤝‍👨🏾 💏 🧑🏻‍❤️‍💋‍🧑🏼 🧑🏻‍❤️‍💋‍🧑🏽 🧑🏻‍❤️‍💋‍🧑🏾 🧑🏻‍❤️‍💋‍🧑🏿 🧑🏼‍❤️‍💋‍🧑🏻 🧑🏼‍❤️‍💋‍🧑🏽 🧑🏼‍❤️‍💋‍🧑🏾 🧑🏼‍❤️‍💋‍🧑🏿 🧑🏽‍❤️‍💋‍🧑🏻 🧑🏽‍❤️‍💋‍🧑🏼 🧑🏽‍❤️‍💋‍🧑🏾 🧑🏽‍❤️‍💋‍🧑🏿 🧑🏾‍❤️‍💋‍🧑🏻 🧑🏾‍❤️‍💋‍🧑🏼 🧑🏾‍❤️‍💋‍🧑🏽 🧑🏾‍❤️‍💋‍🧑🏿 🧑🏿‍❤️‍💋‍🧑🏻 🧑🏿‍❤️‍💋‍🧑🏼 🧑🏿‍❤️‍💋‍🧑🏽 🧑🏿‍❤️‍💋‍🧑🏾 👩‍❤️‍💋‍👨 👩🏻‍❤️‍💋‍👨🏻 👩🏻‍❤️‍💋‍👨🏼 👩🏻‍❤️‍💋‍👨🏽 👩🏻‍❤️‍💋‍👨🏾 👩🏻‍❤️‍💋‍👨🏿 👩🏼‍❤️‍💋‍👨🏻 👩🏼‍❤️‍💋‍👨🏼 👩🏼‍❤️‍💋‍👨🏽 👩🏼‍❤️‍💋‍👨🏾 👩🏼‍❤️‍💋‍👨🏿 👩🏽‍❤️‍💋‍👨🏻 👩🏽‍❤️‍💋‍👨🏼 👩🏽‍❤️‍💋‍👨🏽 👩🏽‍❤️‍💋‍👨🏾 👩🏽‍❤️‍💋‍👨🏿 👩🏾‍❤️‍💋‍👨🏻 👩🏾‍❤️‍💋‍👨🏼 👩🏾‍❤️‍💋‍👨🏽 👩🏾‍❤️‍💋‍👨🏾 👩🏾‍❤️‍💋‍👨🏿 👩🏿‍❤️‍💋‍👨🏻 👩🏿‍❤️‍💋‍👨🏼 👩🏿‍❤️‍💋‍👨🏽 👩🏿‍❤️‍💋‍👨🏾 👩🏿‍❤️‍💋‍👨🏿 👨‍❤️‍💋‍👨 👨🏻‍❤️‍💋‍👨🏻 👨🏻‍❤️‍💋‍👨🏼 👨🏻‍❤️‍💋‍👨🏽 👨🏻‍❤️‍💋‍👨🏾 👨🏻‍❤️‍💋‍👨🏿 👨🏼‍❤️‍💋‍👨🏻 👨🏼‍❤️‍💋‍👨🏼 👨🏼‍❤️‍💋‍👨🏽 👨🏼‍❤️‍💋‍👨🏾 👨🏼‍❤️‍💋‍👨🏿 👨🏽‍❤️‍💋‍👨🏻 👨🏽‍❤️‍💋‍👨🏼 👨🏽‍❤️‍💋‍👨🏽 👨🏽‍❤️‍💋‍👨🏾 👨🏽‍❤️‍💋‍👨🏿 👨🏾‍❤️‍💋‍👨🏻 👨🏾‍❤️‍💋‍👨🏼 👨🏾‍❤️‍💋‍👨🏽 👨🏾‍❤️‍💋‍👨🏾 👨🏾‍❤️‍💋‍👨🏿 👨🏿‍❤️‍💋‍👨🏻 👨🏿‍❤️‍💋‍👨🏼 👨🏿‍❤️‍💋‍👨🏽 👨🏿‍❤️‍💋‍👨🏾 👨🏿‍❤️‍💋‍👨🏿 👩‍❤️‍💋‍👩 👩🏻‍❤️‍💋‍👩🏻 👩🏻‍❤️‍💋‍👩🏼 👩🏻‍❤️‍💋‍👩🏽 👩🏻‍❤️‍💋‍👩🏾 👩🏻‍❤️‍💋‍👩🏿 👩🏼‍❤️‍💋‍👩🏻 👩🏼‍❤️‍💋‍👩🏼 👩🏼‍❤️‍💋‍👩🏽 👩🏼‍❤️‍💋‍👩🏾 👩🏼‍❤️‍💋‍👩🏿 👩🏽‍❤️‍💋‍👩🏻 👩🏽‍❤️‍💋‍👩🏼 👩🏽‍❤️‍💋‍👩🏽 👩🏽‍❤️‍💋‍👩🏾 👩🏽‍❤️‍💋‍👩🏿 👩🏾‍❤️‍💋‍👩🏻 👩🏾‍❤️‍💋‍👩🏼 👩🏾‍❤️‍💋‍👩🏽 👩🏾‍❤️‍💋‍👩🏾 👩🏾‍❤️‍💋‍👩🏿 👩🏿‍❤️‍💋‍👩🏻 👩🏿‍❤️‍💋‍👩🏼 👩🏿‍❤️‍💋‍👩🏽 👩🏿‍❤️‍💋‍👩🏾 👩🏿‍❤️‍💋‍👩🏿 💑 🧑🏻‍❤️‍🧑🏼 🧑🏻‍❤️‍🧑🏽 🧑🏻‍❤️‍🧑🏾 🧑🏻‍❤️‍🧑🏿 🧑🏼‍❤️‍🧑🏻 🧑🏼‍❤️‍🧑🏽 🧑🏼‍❤️‍🧑🏾 🧑🏼‍❤️‍🧑🏿 🧑🏽‍❤️‍🧑🏻 🧑🏽‍❤️‍🧑🏼 🧑🏽‍❤️‍🧑🏾 🧑🏽‍❤️‍🧑🏿 🧑🏾‍❤️‍🧑🏻 🧑🏾‍❤️‍🧑🏼 🧑🏾‍❤️‍🧑🏽 🧑🏾‍❤️‍🧑🏿 🧑🏿‍❤️‍🧑🏻 🧑🏿‍❤️‍🧑🏼 🧑🏿‍❤️‍🧑🏽 🧑🏿‍❤️‍🧑🏾 👩‍❤️‍👨 👩🏻‍❤️‍👨🏻 👩🏻‍❤️‍👨🏼 👩🏻‍❤️‍👨🏽 👩🏻‍❤️‍👨🏾 👩🏻‍❤️‍👨🏿 👩🏼‍❤️‍👨🏻 👩🏼‍❤️‍👨🏼 👩🏼‍❤️‍👨🏽 👩🏼‍❤️‍👨🏾 👩🏼‍❤️‍👨🏿 👩🏽‍❤️‍👨🏻 👩🏽‍❤️‍👨🏼 👩🏽‍❤️‍👨🏽 👩🏽‍❤️‍👨🏾 👩🏽‍❤️‍👨🏿 👩🏾‍❤️‍👨🏻 👩🏾‍❤️‍👨🏼 👩🏾‍❤️‍👨🏽 👩🏾‍❤️‍👨🏾 👩🏾‍❤️‍👨🏿 👩🏿‍❤️‍👨🏻 👩🏿‍❤️‍👨🏼 👩🏿‍❤️‍👨🏽 👩🏿‍❤️‍👨🏾 👩🏿‍❤️‍👨🏿 👨‍❤️‍👨 👨🏻‍❤️‍👨🏻 👨🏻‍❤️‍👨🏼 👨🏻‍❤️‍👨🏽 👨🏻‍❤️‍👨🏾 👨🏻‍❤️‍👨🏿 👨🏼‍❤️‍👨🏻 👨🏼‍❤️‍👨🏼 👨🏼‍❤️‍👨🏽 👨🏼‍❤️‍👨🏾 👨🏼‍❤️‍👨🏿 👨🏽‍❤️‍👨🏻 👨🏽‍❤️‍👨🏼 👨🏽‍❤️‍👨🏽 👨🏽‍❤️‍👨🏾 👨🏽‍❤️‍👨🏿 👨🏾‍❤️‍👨🏻 👨🏾‍❤️‍👨🏼 👨🏾‍❤️‍👨🏽 👨🏾‍❤️‍👨🏾 👨🏾‍❤️‍👨🏿 👨🏿‍❤️‍👨🏻 👨🏿‍❤️‍👨🏼 👨🏿‍❤️‍👨🏽 👨🏿‍❤️‍👨🏾 👨🏿‍❤️‍👨🏿 👩‍❤️‍👩 👩🏻‍❤️‍👩🏻 👩🏻‍❤️‍👩🏼 👩🏻‍❤️‍👩🏽 👩🏻‍❤️‍👩🏾 👩🏻‍❤️‍👩🏿 👩🏼‍❤️‍👩🏻 👩🏼‍❤️‍👩🏼 👩🏼‍❤️‍👩🏽 👩🏼‍❤️‍👩🏾 👩🏼‍❤️‍👩🏿 👩🏽‍❤️‍👩🏻 👩🏽‍❤️‍👩🏼 👩🏽‍❤️‍👩🏽 👩🏽‍❤️‍👩🏾 👩🏽‍❤️‍👩🏿 👩🏾‍❤️‍👩🏻 👩🏾‍❤️‍👩🏼 👩🏾‍❤️‍👩🏽 👩🏾‍❤️‍👩🏾 👩🏾‍❤️‍👩🏿 👩🏿‍❤️‍👩🏻 👩🏿‍❤️‍👩🏼 👩🏿‍❤️‍👩🏽 👩🏿‍❤️‍👩🏾 👩🏿‍❤️‍👩🏿 👪 👨‍👩‍👦 👨‍👩‍👧 👨‍👩‍👧‍👦 👨‍👩‍👦‍👦 👨‍👩‍👧‍👧 👨‍👨‍👦 👨‍👨‍👧 👨‍👨‍👧‍👦 👨‍👨‍👦‍👦 👨‍👨‍👧‍👧 👩‍👩‍👦 👩‍👩‍👧 👩‍👩‍👧‍👦 👩‍👩‍👦‍👦 👩‍👩‍👧‍👧 👨‍👦 👨‍👦‍👦 👨‍👧 👨‍👧‍👦 👨‍👧‍👧 👩‍👦 👩‍👦‍👦 👩‍👧 👩‍👧‍👦 👩‍👧‍👧 🐕‍🦺 🐈‍⬛ 🐻‍❄️ 🐦‍⬛ 🏳️‍🌈 🏳️‍⚧️ 🏴‍☠️ </p>

<!--
Full reference: https://unicode.org/Public/emoji/15.0/
ZJW: zwidje https://unicode.org/emoji/charts/emoji-zwj-sequences.html
-->
`,title:"Emoji Composition",level:2,content:`## Emoji Composition

<p style="font-size: 65%; line-height: 1rem;"> 😶‍🌫️ 😮‍💨 😵‍💫 ❤️‍🔥 ❤️‍🩹 👁️‍🗨️ 🫱🏻‍🫲🏼 🫱🏻‍🫲🏽 🫱🏻‍🫲🏾 🫱🏻‍🫲🏿 🫱🏼‍🫲🏻 🫱🏼‍🫲🏽 🫱🏼‍🫲🏾 🫱🏼‍🫲🏿 🫱🏽‍🫲🏻 🫱🏽‍🫲🏼 🫱🏽‍🫲🏾 🫱🏽‍🫲🏿 🫱🏾‍🫲🏻 🫱🏾‍🫲🏼 🫱🏾‍🫲🏽 🫱🏾‍🫲🏿 🫱🏿‍🫲🏻 🫱🏿‍🫲🏼 🫱🏿‍🫲🏽 🫱🏿‍🫲🏾 🧔‍♂️ 🧔🏻‍♂️ 🧔🏼‍♂️ 🧔🏽‍♂️ 🧔🏾‍♂️ 🧔🏿‍♂️ 🧔‍♀️ 🧔🏻‍♀️ 🧔🏼‍♀️ 🧔🏽‍♀️ 🧔🏾‍♀️ 🧔🏿‍♀️ 👨‍🦰 👨🏻‍🦰 👨🏼‍🦰 👨🏽‍🦰 👨🏾‍🦰 👨🏿‍🦰 👨‍🦱 👨🏻‍🦱 👨🏼‍🦱 👨🏽‍🦱 👨🏾‍🦱 👨🏿‍🦱 👨‍🦳 👨🏻‍🦳 👨🏼‍🦳 👨🏽‍🦳 👨🏾‍🦳 👨🏿‍🦳 👨‍🦲 👨🏻‍🦲 👨🏼‍🦲 👨🏽‍🦲 👨🏾‍🦲 👨🏿‍🦲 👩‍🦰 👩🏻‍🦰 👩🏼‍🦰 👩🏽‍🦰 👩🏾‍🦰 👩🏿‍🦰 🧑‍🦰 🧑🏻‍🦰 🧑🏼‍🦰 🧑🏽‍🦰 🧑🏾‍🦰 🧑🏿‍🦰 👩‍🦱 👩🏻‍🦱 👩🏼‍🦱 👩🏽‍🦱 👩🏾‍🦱 👩🏿‍🦱 🧑‍🦱 🧑🏻‍🦱 🧑🏼‍🦱 🧑🏽‍🦱 🧑🏾‍🦱 🧑🏿‍🦱 👩‍🦳 👩🏻‍🦳 👩🏼‍🦳 👩🏽‍🦳 👩🏾‍🦳 👩🏿‍🦳 🧑‍🦳 🧑🏻‍🦳 🧑🏼‍🦳 🧑🏽‍🦳 🧑🏾‍🦳 🧑🏿‍🦳 👩‍🦲 👩🏻‍🦲 👩🏼‍🦲 👩🏽‍🦲 👩🏾‍🦲 👩🏿‍🦲 🧑‍🦲 🧑🏻‍🦲 🧑🏼‍🦲 🧑🏽‍🦲 🧑🏾‍🦲 🧑🏿‍🦲 👱‍♀️ 👱🏻‍♀️ 👱🏼‍♀️ 👱🏽‍♀️ 👱🏾‍♀️ 👱🏿‍♀️ 👱‍♂️ 👱🏻‍♂️ 👱🏼‍♂️ 👱🏽‍♂️ 👱🏾‍♂️ 👱🏿‍♂️ 🙍‍♂️ 🙍🏻‍♂️ 🙍🏼‍♂️ 🙍🏽‍♂️ 🙍🏾‍♂️ 🙍🏿‍♂️ 🙍‍♀️ 🙍🏻‍♀️ 🙍🏼‍♀️ 🙍🏽‍♀️ 🙍🏾‍♀️ 🙍🏿‍♀️ 🙎‍♂️ 🙎🏻‍♂️ 🙎🏼‍♂️ 🙎🏽‍♂️ 🙎🏾‍♂️ 🙎🏿‍♂️ 🙎‍♀️ 🙎🏻‍♀️ 🙎🏼‍♀️ 🙎🏽‍♀️ 🙎🏾‍♀️ 🙎🏿‍♀️ 🙅‍♂️ 🙅🏻‍♂️ 🙅🏼‍♂️ 🙅🏽‍♂️ 🙅🏾‍♂️ 🙅🏿‍♂️ 🙅‍♀️ 🙅🏻‍♀️ 🙅🏼‍♀️ 🙅🏽‍♀️ 🙅🏾‍♀️ 🙅🏿‍♀️ 🙆‍♂️ 🙆🏻‍♂️ 🙆🏼‍♂️ 🙆🏽‍♂️ 🙆🏾‍♂️ 🙆🏿‍♂️ 🙆‍♀️ 🙆🏻‍♀️ 🙆🏼‍♀️ 🙆🏽‍♀️ 🙆🏾‍♀️ 🙆🏿‍♀️ 💁‍♂️ 💁🏻‍♂️ 💁🏼‍♂️ 💁🏽‍♂️ 💁🏾‍♂️ 💁🏿‍♂️ 💁‍♀️ 💁🏻‍♀️ 💁🏼‍♀️ 💁🏽‍♀️ 💁🏾‍♀️ 💁🏿‍♀️ 🙋‍♂️ 🙋🏻‍♂️ 🙋🏼‍♂️ 🙋🏽‍♂️ 🙋🏾‍♂️ 🙋🏿‍♂️ 🙋‍♀️ 🙋🏻‍♀️ 🙋🏼‍♀️ 🙋🏽‍♀️ 🙋🏾‍♀️ 🙋🏿‍♀️ 🧏‍♂️ 🧏🏻‍♂️ 🧏🏼‍♂️ 🧏🏽‍♂️ 🧏🏾‍♂️ 🧏🏿‍♂️ 🧏‍♀️ 🧏🏻‍♀️ 🧏🏼‍♀️ 🧏🏽‍♀️ 🧏🏾‍♀️ 🧏🏿‍♀️ 🙇‍♂️ 🙇🏻‍♂️ 🙇🏼‍♂️ 🙇🏽‍♂️ 🙇🏾‍♂️ 🙇🏿‍♂️ 🙇‍♀️ 🙇🏻‍♀️ 🙇🏼‍♀️ 🙇🏽‍♀️ 🙇🏾‍♀️ 🙇🏿‍♀️ 🤦‍♂️ 🤦🏻‍♂️ 🤦🏼‍♂️ 🤦🏽‍♂️ 🤦🏾‍♂️ 🤦🏿‍♂️ 🤦‍♀️ 🤦🏻‍♀️ 🤦🏼‍♀️ 🤦🏽‍♀️ 🤦🏾‍♀️ 🤦🏿‍♀️ 🤷‍♂️ 🤷🏻‍♂️ 🤷🏼‍♂️ 🤷🏽‍♂️ 🤷🏾‍♂️ 🤷🏿‍♂️ 🤷‍♀️ 🤷🏻‍♀️ 🤷🏼‍♀️ 🤷🏽‍♀️ 🤷🏾‍♀️ 🤷🏿‍♀️ 🧑‍⚕️ 🧑🏻‍⚕️ 🧑🏼‍⚕️ 🧑🏽‍⚕️ 🧑🏾‍⚕️ 🧑🏿‍⚕️ 👨‍⚕️ 👨🏻‍⚕️ 👨🏼‍⚕️ 👨🏽‍⚕️ 👨🏾‍⚕️ 👨🏿‍⚕️ 👩‍⚕️ 👩🏻‍⚕️ 👩🏼‍⚕️ 👩🏽‍⚕️ 👩🏾‍⚕️ 👩🏿‍⚕️ 🧑‍🎓 🧑🏻‍🎓 🧑🏼‍🎓 🧑🏽‍🎓 🧑🏾‍🎓 🧑🏿‍🎓 👨‍🎓 👨🏻‍🎓 👨🏼‍🎓 👨🏽‍🎓 👨🏾‍🎓 👨🏿‍🎓 👩‍🎓 👩🏻‍🎓 👩🏼‍🎓 👩🏽‍🎓 👩🏾‍🎓 👩🏿‍🎓 🧑‍🏫 🧑🏻‍🏫 🧑🏼‍🏫 🧑🏽‍🏫 🧑🏾‍🏫 🧑🏿‍🏫 👨‍🏫 👨🏻‍🏫 👨🏼‍🏫 👨🏽‍🏫 👨🏾‍🏫 👨🏿‍🏫 👩‍🏫 👩🏻‍🏫 👩🏼‍🏫 👩🏽‍🏫 👩🏾‍🏫 👩🏿‍🏫 🧑‍⚖️ 🧑🏻‍⚖️ 🧑🏼‍⚖️ 🧑🏽‍⚖️ 🧑🏾‍⚖️ 🧑🏿‍⚖️ 👨‍⚖️ 👨🏻‍⚖️ 👨🏼‍⚖️ 👨🏽‍⚖️ 👨🏾‍⚖️ 👨🏿‍⚖️ 👩‍⚖️ 👩🏻‍⚖️ 👩🏼‍⚖️ 👩🏽‍⚖️ 👩🏾‍⚖️ 👩🏿‍⚖️ 🧑‍🌾 🧑🏻‍🌾 🧑🏼‍🌾 🧑🏽‍🌾 🧑🏾‍🌾 🧑🏿‍🌾 👨‍🌾 👨🏻‍🌾 👨🏼‍🌾 👨🏽‍🌾 👨🏾‍🌾 👨🏿‍🌾 👩‍🌾 👩🏻‍🌾 👩🏼‍🌾 👩🏽‍🌾 👩🏾‍🌾 👩🏿‍🌾 🧑‍🍳 🧑🏻‍🍳 🧑🏼‍🍳 🧑🏽‍🍳 🧑🏾‍🍳 🧑🏿‍🍳 👨‍🍳 👨🏻‍🍳 👨🏼‍🍳 👨🏽‍🍳 👨🏾‍🍳 👨🏿‍🍳 👩‍🍳 👩🏻‍🍳 👩🏼‍🍳 👩🏽‍🍳 👩🏾‍🍳 👩🏿‍🍳 🧑‍🔧 🧑🏻‍🔧 🧑🏼‍🔧 🧑🏽‍🔧 🧑🏾‍🔧 🧑🏿‍🔧 👨‍🔧 👨🏻‍🔧 👨🏼‍🔧 👨🏽‍🔧 👨🏾‍🔧 👨🏿‍🔧 👩‍🔧 👩🏻‍🔧 👩🏼‍🔧 👩🏽‍🔧 👩🏾‍🔧 👩🏿‍🔧 🧑‍🏭 🧑🏻‍🏭 🧑🏼‍🏭 🧑🏽‍🏭 🧑🏾‍🏭 🧑🏿‍🏭 👨‍🏭 👨🏻‍🏭 👨🏼‍🏭 👨🏽‍🏭 👨🏾‍🏭 👨🏿‍🏭 👩‍🏭 👩🏻‍🏭 👩🏼‍🏭 👩🏽‍🏭 👩🏾‍🏭 👩🏿‍🏭 🧑‍💼 🧑🏻‍💼 🧑🏼‍💼 🧑🏽‍💼 🧑🏾‍💼 🧑🏿‍💼 👨‍💼 👨🏻‍💼 👨🏼‍💼 👨🏽‍💼 👨🏾‍💼 👨🏿‍💼 👩‍💼 👩🏻‍💼 👩🏼‍💼 👩🏽‍💼 👩🏾‍💼 👩🏿‍💼 🧑‍🔬 🧑🏻‍🔬 🧑🏼‍🔬 🧑🏽‍🔬 🧑🏾‍🔬 🧑🏿‍🔬 👨‍🔬 👨🏻‍🔬 👨🏼‍🔬 👨🏽‍🔬 👨🏾‍🔬 👨🏿‍🔬 👩‍🔬 👩🏻‍🔬 👩🏼‍🔬 👩🏽‍🔬 👩🏾‍🔬 👩🏿‍🔬 🧑‍💻 🧑🏻‍💻 🧑🏼‍💻 🧑🏽‍💻 🧑🏾‍💻 🧑🏿‍💻 👨‍💻 👨🏻‍💻 👨🏼‍💻 👨🏽‍💻 👨🏾‍💻 👨🏿‍💻 👩‍💻 👩🏻‍💻 👩🏼‍💻 👩🏽‍💻 👩🏾‍💻 👩🏿‍💻 🧑‍🎤 🧑🏻‍🎤 🧑🏼‍🎤 🧑🏽‍🎤 🧑🏾‍🎤 🧑🏿‍🎤 👨‍🎤 👨🏻‍🎤 👨🏼‍🎤 👨🏽‍🎤 👨🏾‍🎤 👨🏿‍🎤 👩‍🎤 👩🏻‍🎤 👩🏼‍🎤 👩🏽‍🎤 👩🏾‍🎤 👩🏿‍🎤 🧑‍🎨 🧑🏻‍🎨 🧑🏼‍🎨 🧑🏽‍🎨 🧑🏾‍🎨 🧑🏿‍🎨 👨‍🎨 👨🏻‍🎨 👨🏼‍🎨 👨🏽‍🎨 👨🏾‍🎨 👨🏿‍🎨 👩‍🎨 👩🏻‍🎨 👩🏼‍🎨 👩🏽‍🎨 👩🏾‍🎨 👩🏿‍🎨 🧑‍✈️ 🧑🏻‍✈️ 🧑🏼‍✈️ 🧑🏽‍✈️ 🧑🏾‍✈️ 🧑🏿‍✈️ 👨‍✈️ 👨🏻‍✈️ 👨🏼‍✈️ 👨🏽‍✈️ 👨🏾‍✈️ 👨🏿‍✈️ 👩‍✈️ 👩🏻‍✈️ 👩🏼‍✈️ 👩🏽‍✈️ 👩🏾‍✈️ 👩🏿‍✈️ 🧑‍🚀 🧑🏻‍🚀 🧑🏼‍🚀 🧑🏽‍🚀 🧑🏾‍🚀 🧑🏿‍🚀 👨‍🚀 👨🏻‍🚀 👨🏼‍🚀 👨🏽‍🚀 👨🏾‍🚀 👨🏿‍🚀 👩‍🚀 👩🏻‍🚀 👩🏼‍🚀 👩🏽‍🚀 👩🏾‍🚀 👩🏿‍🚀 🧑‍🚒 🧑🏻‍🚒 🧑🏼‍🚒 🧑🏽‍🚒 🧑🏾‍🚒 🧑🏿‍🚒 👨‍🚒 👨🏻‍🚒 👨🏼‍🚒 👨🏽‍🚒 👨🏾‍🚒 👨🏿‍🚒 👩‍🚒 👩🏻‍🚒 👩🏼‍🚒 👩🏽‍🚒 👩🏾‍🚒 👩🏿‍🚒 👮‍♂️ 👮🏻‍♂️ 👮🏼‍♂️ 👮🏽‍♂️ 👮🏾‍♂️ 👮🏿‍♂️ 👮‍♀️ 👮🏻‍♀️ 👮🏼‍♀️ 👮🏽‍♀️ 👮🏾‍♀️ 👮🏿‍♀️ 🕵️‍♂️ 🕵🏻‍♂️ 🕵🏼‍♂️ 🕵🏽‍♂️ 🕵🏾‍♂️ 🕵🏿‍♂️ 🕵️‍♀️ 🕵🏻‍♀️ 🕵🏼‍♀️ 🕵🏽‍♀️ 🕵🏾‍♀️ 🕵🏿‍♀️ 💂‍♂️ 💂🏻‍♂️ 💂🏼‍♂️ 💂🏽‍♂️ 💂🏾‍♂️ 💂🏿‍♂️ 💂‍♀️ 💂🏻‍♀️ 💂🏼‍♀️ 💂🏽‍♀️ 💂🏾‍♀️ 💂🏿‍♀️ 👷‍♂️ 👷🏻‍♂️ 👷🏼‍♂️ 👷🏽‍♂️ 👷🏾‍♂️ 👷🏿‍♂️ 👷‍♀️ 👷🏻‍♀️ 👷🏼‍♀️ 👷🏽‍♀️ 👷🏾‍♀️ 👷🏿‍♀️ 👳‍♂️ 👳🏻‍♂️ 👳🏼‍♂️ 👳🏽‍♂️ 👳🏾‍♂️ 👳🏿‍♂️ 👳‍♀️ 👳🏻‍♀️ 👳🏼‍♀️ 👳🏽‍♀️ 👳🏾‍♀️ 👳🏿‍♀️ 🤵‍♂️ 🤵🏻‍♂️ 🤵🏼‍♂️ 🤵🏽‍♂️ 🤵🏾‍♂️ 🤵🏿‍♂️ 🤵‍♀️ 🤵🏻‍♀️ 🤵🏼‍♀️ 🤵🏽‍♀️ 🤵🏾‍♀️ 🤵🏿‍♀️ 👰‍♂️ 👰🏻‍♂️ 👰🏼‍♂️ 👰🏽‍♂️ 👰🏾‍♂️ 👰🏿‍♂️ 👰‍♀️ 👰🏻‍♀️ 👰🏼‍♀️ 👰🏽‍♀️ 👰🏾‍♀️ 👰🏿‍♀️ 👩‍🍼 👩🏻‍🍼 👩🏼‍🍼 👩🏽‍🍼 👩🏾‍🍼 👩🏿‍🍼 👨‍🍼 👨🏻‍🍼 👨🏼‍🍼 👨🏽‍🍼 👨🏾‍🍼 👨🏿‍🍼 🧑‍🍼 🧑🏻‍🍼 🧑🏼‍🍼 🧑🏽‍🍼 🧑🏾‍🍼 🧑🏿‍🍼 🧑‍🎄 🧑🏻‍🎄 🧑🏼‍🎄 🧑🏽‍🎄 🧑🏾‍🎄 🧑🏿‍🎄 🦸‍♂️ 🦸🏻‍♂️ 🦸🏼‍♂️ 🦸🏽‍♂️ 🦸🏾‍♂️ 🦸🏿‍♂️ 🦸‍♀️ 🦸🏻‍♀️ 🦸🏼‍♀️ 🦸🏽‍♀️ 🦸🏾‍♀️ 🦸🏿‍♀️ 🦹‍♂️ 🦹🏻‍♂️ 🦹🏼‍♂️ 🦹🏽‍♂️ 🦹🏾‍♂️ 🦹🏿‍♂️ 🦹‍♀️ 🦹🏻‍♀️ 🦹🏼‍♀️ 🦹🏽‍♀️ 🦹🏾‍♀️ 🦹🏿‍♀️ 🧙‍♂️ 🧙🏻‍♂️ 🧙🏼‍♂️ 🧙🏽‍♂️ 🧙🏾‍♂️ 🧙🏿‍♂️ 🧙‍♀️ 🧙🏻‍♀️ 🧙🏼‍♀️ 🧙🏽‍♀️ 🧙🏾‍♀️ 🧙🏿‍♀️ 🧚‍♂️ 🧚🏻‍♂️ 🧚🏼‍♂️ 🧚🏽‍♂️ 🧚🏾‍♂️ 🧚🏿‍♂️ 🧚‍♀️ 🧚🏻‍♀️ 🧚🏼‍♀️ 🧚🏽‍♀️ 🧚🏾‍♀️ 🧚🏿‍♀️ 🧛‍♂️ 🧛🏻‍♂️ 🧛🏼‍♂️ 🧛🏽‍♂️ 🧛🏾‍♂️ 🧛🏿‍♂️ 🧛‍♀️ 🧛🏻‍♀️ 🧛🏼‍♀️ 🧛🏽‍♀️ 🧛🏾‍♀️ 🧛🏿‍♀️ 🧜‍♂️ 🧜🏻‍♂️ 🧜🏼‍♂️ 🧜🏽‍♂️ 🧜🏾‍♂️ 🧜🏿‍♂️ 🧜‍♀️ 🧜🏻‍♀️ 🧜🏼‍♀️ 🧜🏽‍♀️ 🧜🏾‍♀️ 🧜🏿‍♀️ 🧝‍♂️ 🧝🏻‍♂️ 🧝🏼‍♂️ 🧝🏽‍♂️ 🧝🏾‍♂️ 🧝🏿‍♂️ 🧝‍♀️ 🧝🏻‍♀️ 🧝🏼‍♀️ 🧝🏽‍♀️ 🧝🏾‍♀️ 🧝🏿‍♀️ 🧞‍♂️ 🧞‍♀️ 🧟‍♂️ 🧟‍♀️ 💆‍♂️ 💆🏻‍♂️ 💆🏼‍♂️ 💆🏽‍♂️ 💆🏾‍♂️ 💆🏿‍♂️ 💆‍♀️ 💆🏻‍♀️ 💆🏼‍♀️ 💆🏽‍♀️ 💆🏾‍♀️ 💆🏿‍♀️ 💇‍♂️ 💇🏻‍♂️ 💇🏼‍♂️ 💇🏽‍♂️ 💇🏾‍♂️ 💇🏿‍♂️ 💇‍♀️ 💇🏻‍♀️ 💇🏼‍♀️ 💇🏽‍♀️ 💇🏾‍♀️ 💇🏿‍♀️ 🚶‍♂️ 🚶🏻‍♂️ 🚶🏼‍♂️ 🚶🏽‍♂️ 🚶🏾‍♂️ 🚶🏿‍♂️ 🚶‍♀️ 🚶🏻‍♀️ 🚶🏼‍♀️ 🚶🏽‍♀️ 🚶🏾‍♀️ 🚶🏿‍♀️ 🧍‍♂️ 🧍🏻‍♂️ 🧍🏼‍♂️ 🧍🏽‍♂️ 🧍🏾‍♂️ 🧍🏿‍♂️ 🧍‍♀️ 🧍🏻‍♀️ 🧍🏼‍♀️ 🧍🏽‍♀️ 🧍🏾‍♀️ 🧍🏿‍♀️ 🧎‍♂️ 🧎🏻‍♂️ 🧎🏼‍♂️ 🧎🏽‍♂️ 🧎🏾‍♂️ 🧎🏿‍♂️ 🧎‍♀️ 🧎🏻‍♀️ 🧎🏼‍♀️ 🧎🏽‍♀️ 🧎🏾‍♀️ 🧎🏿‍♀️ 🧑‍🦯 🧑🏻‍🦯 🧑🏼‍🦯 🧑🏽‍🦯 🧑🏾‍🦯 🧑🏿‍🦯 👨‍🦯 👨🏻‍🦯 👨🏼‍🦯 👨🏽‍🦯 👨🏾‍🦯 👨🏿‍🦯 👩‍🦯 👩🏻‍🦯 👩🏼‍🦯 👩🏽‍🦯 👩🏾‍🦯 👩🏿‍🦯 🧑‍🦼 🧑🏻‍🦼 🧑🏼‍🦼 🧑🏽‍🦼 🧑🏾‍🦼 🧑🏿‍🦼 👨‍🦼 👨🏻‍🦼 👨🏼‍🦼 👨🏽‍🦼 👨🏾‍🦼 👨🏿‍🦼 👩‍🦼 👩🏻‍🦼 👩🏼‍🦼 👩🏽‍🦼 👩🏾‍🦼 👩🏿‍🦼 🧑‍🦽 🧑🏻‍🦽 🧑🏼‍🦽 🧑🏽‍🦽 🧑🏾‍🦽 🧑🏿‍🦽 👨‍🦽 👨🏻‍🦽 👨🏼‍🦽 👨🏽‍🦽 👨🏾‍🦽 👨🏿‍🦽 👩‍🦽 👩🏻‍🦽 👩🏼‍🦽 👩🏽‍🦽 👩🏾‍🦽 👩🏿‍🦽 🏃‍♂️ 🏃🏻‍♂️ 🏃🏼‍♂️ 🏃🏽‍♂️ 🏃🏾‍♂️ 🏃🏿‍♂️ 🏃‍♀️ 🏃🏻‍♀️ 🏃🏼‍♀️ 🏃🏽‍♀️ 🏃🏾‍♀️ 🏃🏿‍♀️ 👯‍♂️ 👯‍♀️ 🧖‍♂️ 🧖🏻‍♂️ 🧖🏼‍♂️ 🧖🏽‍♂️ 🧖🏾‍♂️ 🧖🏿‍♂️ 🧖‍♀️ 🧖🏻‍♀️ 🧖🏼‍♀️ 🧖🏽‍♀️ 🧖🏾‍♀️ 🧖🏿‍♀️ 🧗‍♂️ 🧗🏻‍♂️ 🧗🏼‍♂️ 🧗🏽‍♂️ 🧗🏾‍♂️ 🧗🏿‍♂️ 🧗‍♀️ 🧗🏻‍♀️ 🧗🏼‍♀️ 🧗🏽‍♀️ 🧗🏾‍♀️ 🧗🏿‍♀️ 🏌️‍♂️ 🏌🏻‍♂️ 🏌🏼‍♂️ 🏌🏽‍♂️ 🏌🏾‍♂️ 🏌🏿‍♂️ 🏌️‍♀️ 🏌🏻‍♀️ 🏌🏼‍♀️ 🏌🏽‍♀️ 🏌🏾‍♀️ 🏌🏿‍♀️ 🏄‍♂️ 🏄🏻‍♂️ 🏄🏼‍♂️ 🏄🏽‍♂️ 🏄🏾‍♂️ 🏄🏿‍♂️ 🏄‍♀️ 🏄🏻‍♀️ 🏄🏼‍♀️ 🏄🏽‍♀️ 🏄🏾‍♀️ 🏄🏿‍♀️ 🚣‍♂️ 🚣🏻‍♂️ 🚣🏼‍♂️ 🚣🏽‍♂️ 🚣🏾‍♂️ 🚣🏿‍♂️ 🚣‍♀️ 🚣🏻‍♀️ 🚣🏼‍♀️ 🚣🏽‍♀️ 🚣🏾‍♀️ 🚣🏿‍♀️ 🏊‍♂️ 🏊🏻‍♂️ 🏊🏼‍♂️ 🏊🏽‍♂️ 🏊🏾‍♂️ 🏊🏿‍♂️ 🏊‍♀️ 🏊🏻‍♀️ 🏊🏼‍♀️ 🏊🏽‍♀️ 🏊🏾‍♀️ 🏊🏿‍♀️ ⛹️‍♂️ ⛹🏻‍♂️ ⛹🏼‍♂️ ⛹🏽‍♂️ ⛹🏾‍♂️ ⛹🏿‍♂️ ⛹️‍♀️ ⛹🏻‍♀️ ⛹🏼‍♀️ ⛹🏽‍♀️ ⛹🏾‍♀️ ⛹🏿‍♀️ 🏋️‍♂️ 🏋🏻‍♂️ 🏋🏼‍♂️ 🏋🏽‍♂️ 🏋🏾‍♂️ 🏋🏿‍♂️ 🏋️‍♀️ 🏋🏻‍♀️ 🏋🏼‍♀️ 🏋🏽‍♀️ 🏋🏾‍♀️ 🏋🏿‍♀️ 🚴‍♂️ 🚴🏻‍♂️ 🚴🏼‍♂️ 🚴🏽‍♂️ 🚴🏾‍♂️ 🚴🏿‍♂️ 🚴‍♀️ 🚴🏻‍♀️ 🚴🏼‍♀️ 🚴🏽‍♀️ 🚴🏾‍♀️ 🚴🏿‍♀️ 🚵‍♂️ 🚵🏻‍♂️ 🚵🏼‍♂️ 🚵🏽‍♂️ 🚵🏾‍♂️ 🚵🏿‍♂️ 🚵‍♀️ 🚵🏻‍♀️ 🚵🏼‍♀️ 🚵🏽‍♀️ 🚵🏾‍♀️ 🚵🏿‍♀️ 🤸‍♂️ 🤸🏻‍♂️ 🤸🏼‍♂️ 🤸🏽‍♂️ 🤸🏾‍♂️ 🤸🏿‍♂️ 🤸‍♀️ 🤸🏻‍♀️ 🤸🏼‍♀️ 🤸🏽‍♀️ 🤸🏾‍♀️ 🤸🏿‍♀️ 🤼‍♂️ 🤼‍♀️ 🤽‍♂️ 🤽🏻‍♂️ 🤽🏼‍♂️ 🤽🏽‍♂️ 🤽🏾‍♂️ 🤽🏿‍♂️ 🤽‍♀️ 🤽🏻‍♀️ 🤽🏼‍♀️ 🤽🏽‍♀️ 🤽🏾‍♀️ 🤽🏿‍♀️ 🤾‍♂️ 🤾🏻‍♂️ 🤾🏼‍♂️ 🤾🏽‍♂️ 🤾🏾‍♂️ 🤾🏿‍♂️ 🤾‍♀️ 🤾🏻‍♀️ 🤾🏼‍♀️ 🤾🏽‍♀️ 🤾🏾‍♀️ 🤾🏿‍♀️ 🤹‍♂️ 🤹🏻‍♂️ 🤹🏼‍♂️ 🤹🏽‍♂️ 🤹🏾‍♂️ 🤹🏿‍♂️ 🤹‍♀️ 🤹🏻‍♀️ 🤹🏼‍♀️ 🤹🏽‍♀️ 🤹🏾‍♀️ 🤹🏿‍♀️ 🧘‍♂️ 🧘🏻‍♂️ 🧘🏼‍♂️ 🧘🏽‍♂️ 🧘🏾‍♂️ 🧘🏿‍♂️ 🧘‍♀️ 🧘🏻‍♀️ 🧘🏼‍♀️ 🧘🏽‍♀️ 🧘🏾‍♀️ 🧘🏿‍♀️ 🧑‍🤝‍🧑 🧑🏻‍🤝‍🧑🏻 🧑🏻‍🤝‍🧑🏼 🧑🏻‍🤝‍🧑🏽 🧑🏻‍🤝‍🧑🏾 🧑🏻‍🤝‍🧑🏿 🧑🏼‍🤝‍🧑🏻 🧑🏼‍🤝‍🧑🏼 🧑🏼‍🤝‍🧑🏽 🧑🏼‍🤝‍🧑🏾 🧑🏼‍🤝‍🧑🏿 🧑🏽‍🤝‍🧑🏻 🧑🏽‍🤝‍🧑🏼 🧑🏽‍🤝‍🧑🏽 🧑🏽‍🤝‍🧑🏾 🧑🏽‍🤝‍🧑🏿 🧑🏾‍🤝‍🧑🏻 🧑🏾‍🤝‍🧑🏼 🧑🏾‍🤝‍🧑🏽 🧑🏾‍🤝‍🧑🏾 🧑🏾‍🤝‍🧑🏿 🧑🏿‍🤝‍🧑🏻 🧑🏿‍🤝‍🧑🏼 🧑🏿‍🤝‍🧑🏽 🧑🏿‍🤝‍🧑🏾 🧑🏿‍🤝‍🧑🏿 👩🏻‍🤝‍👩🏼 👩🏻‍🤝‍👩🏽 👩🏻‍🤝‍👩🏾 👩🏻‍🤝‍👩🏿 👩🏼‍🤝‍👩🏻 👩🏼‍🤝‍👩🏽 👩🏼‍🤝‍👩🏾 👩🏼‍🤝‍👩🏿 👩🏽‍🤝‍👩🏻 👩🏽‍🤝‍👩🏼 👩🏽‍🤝‍👩🏾 👩🏽‍🤝‍👩🏿 👩🏾‍🤝‍👩🏻 👩🏾‍🤝‍👩🏼 👩🏾‍🤝‍👩🏽 👩🏾‍🤝‍👩🏿 👩🏿‍🤝‍👩🏻 👩🏿‍🤝‍👩🏼 👩🏿‍🤝‍👩🏽 👩🏿‍🤝‍👩🏾 👩🏻‍🤝‍👨🏼 👩🏻‍🤝‍👨🏽 👩🏻‍🤝‍👨🏾 👩🏻‍🤝‍👨🏿 👩🏼‍🤝‍👨🏻 👩🏼‍🤝‍👨🏽 👩🏼‍🤝‍👨🏾 👩🏼‍🤝‍👨🏿 👩🏽‍🤝‍👨🏻 👩🏽‍🤝‍👨🏼 👩🏽‍🤝‍👨🏾 👩🏽‍🤝‍👨🏿 👩🏾‍🤝‍👨🏻 👩🏾‍🤝‍👨🏼 👩🏾‍🤝‍👨🏽 👩🏾‍🤝‍👨🏿 👩🏿‍🤝‍👨🏻 👩🏿‍🤝‍👨🏼 👩🏿‍🤝‍👨🏽 👩🏿‍🤝‍👨🏾 👨🏻‍🤝‍👨🏼 👨🏻‍🤝‍👨🏽 👨🏻‍🤝‍👨🏾 👨🏻‍🤝‍👨🏿 👨🏼‍🤝‍👨🏻 👨🏼‍🤝‍👨🏽 👨🏼‍🤝‍👨🏾 👨🏼‍🤝‍👨🏿 👨🏽‍🤝‍👨🏻 👨🏽‍🤝‍👨🏼 👨🏽‍🤝‍👨🏾 👨🏽‍🤝‍👨🏿 👨🏾‍🤝‍👨🏻 👨🏾‍🤝‍👨🏼 👨🏾‍🤝‍👨🏽 👨🏾‍🤝‍👨🏿 👨🏿‍🤝‍👨🏻 👨🏿‍🤝‍👨🏼 👨🏿‍🤝‍👨🏽 👨🏿‍🤝‍👨🏾 💏 🧑🏻‍❤️‍💋‍🧑🏼 🧑🏻‍❤️‍💋‍🧑🏽 🧑🏻‍❤️‍💋‍🧑🏾 🧑🏻‍❤️‍💋‍🧑🏿 🧑🏼‍❤️‍💋‍🧑🏻 🧑🏼‍❤️‍💋‍🧑🏽 🧑🏼‍❤️‍💋‍🧑🏾 🧑🏼‍❤️‍💋‍🧑🏿 🧑🏽‍❤️‍💋‍🧑🏻 🧑🏽‍❤️‍💋‍🧑🏼 🧑🏽‍❤️‍💋‍🧑🏾 🧑🏽‍❤️‍💋‍🧑🏿 🧑🏾‍❤️‍💋‍🧑🏻 🧑🏾‍❤️‍💋‍🧑🏼 🧑🏾‍❤️‍💋‍🧑🏽 🧑🏾‍❤️‍💋‍🧑🏿 🧑🏿‍❤️‍💋‍🧑🏻 🧑🏿‍❤️‍💋‍🧑🏼 🧑🏿‍❤️‍💋‍🧑🏽 🧑🏿‍❤️‍💋‍🧑🏾 👩‍❤️‍💋‍👨 👩🏻‍❤️‍💋‍👨🏻 👩🏻‍❤️‍💋‍👨🏼 👩🏻‍❤️‍💋‍👨🏽 👩🏻‍❤️‍💋‍👨🏾 👩🏻‍❤️‍💋‍👨🏿 👩🏼‍❤️‍💋‍👨🏻 👩🏼‍❤️‍💋‍👨🏼 👩🏼‍❤️‍💋‍👨🏽 👩🏼‍❤️‍💋‍👨🏾 👩🏼‍❤️‍💋‍👨🏿 👩🏽‍❤️‍💋‍👨🏻 👩🏽‍❤️‍💋‍👨🏼 👩🏽‍❤️‍💋‍👨🏽 👩🏽‍❤️‍💋‍👨🏾 👩🏽‍❤️‍💋‍👨🏿 👩🏾‍❤️‍💋‍👨🏻 👩🏾‍❤️‍💋‍👨🏼 👩🏾‍❤️‍💋‍👨🏽 👩🏾‍❤️‍💋‍👨🏾 👩🏾‍❤️‍💋‍👨🏿 👩🏿‍❤️‍💋‍👨🏻 👩🏿‍❤️‍💋‍👨🏼 👩🏿‍❤️‍💋‍👨🏽 👩🏿‍❤️‍💋‍👨🏾 👩🏿‍❤️‍💋‍👨🏿 👨‍❤️‍💋‍👨 👨🏻‍❤️‍💋‍👨🏻 👨🏻‍❤️‍💋‍👨🏼 👨🏻‍❤️‍💋‍👨🏽 👨🏻‍❤️‍💋‍👨🏾 👨🏻‍❤️‍💋‍👨🏿 👨🏼‍❤️‍💋‍👨🏻 👨🏼‍❤️‍💋‍👨🏼 👨🏼‍❤️‍💋‍👨🏽 👨🏼‍❤️‍💋‍👨🏾 👨🏼‍❤️‍💋‍👨🏿 👨🏽‍❤️‍💋‍👨🏻 👨🏽‍❤️‍💋‍👨🏼 👨🏽‍❤️‍💋‍👨🏽 👨🏽‍❤️‍💋‍👨🏾 👨🏽‍❤️‍💋‍👨🏿 👨🏾‍❤️‍💋‍👨🏻 👨🏾‍❤️‍💋‍👨🏼 👨🏾‍❤️‍💋‍👨🏽 👨🏾‍❤️‍💋‍👨🏾 👨🏾‍❤️‍💋‍👨🏿 👨🏿‍❤️‍💋‍👨🏻 👨🏿‍❤️‍💋‍👨🏼 👨🏿‍❤️‍💋‍👨🏽 👨🏿‍❤️‍💋‍👨🏾 👨🏿‍❤️‍💋‍👨🏿 👩‍❤️‍💋‍👩 👩🏻‍❤️‍💋‍👩🏻 👩🏻‍❤️‍💋‍👩🏼 👩🏻‍❤️‍💋‍👩🏽 👩🏻‍❤️‍💋‍👩🏾 👩🏻‍❤️‍💋‍👩🏿 👩🏼‍❤️‍💋‍👩🏻 👩🏼‍❤️‍💋‍👩🏼 👩🏼‍❤️‍💋‍👩🏽 👩🏼‍❤️‍💋‍👩🏾 👩🏼‍❤️‍💋‍👩🏿 👩🏽‍❤️‍💋‍👩🏻 👩🏽‍❤️‍💋‍👩🏼 👩🏽‍❤️‍💋‍👩🏽 👩🏽‍❤️‍💋‍👩🏾 👩🏽‍❤️‍💋‍👩🏿 👩🏾‍❤️‍💋‍👩🏻 👩🏾‍❤️‍💋‍👩🏼 👩🏾‍❤️‍💋‍👩🏽 👩🏾‍❤️‍💋‍👩🏾 👩🏾‍❤️‍💋‍👩🏿 👩🏿‍❤️‍💋‍👩🏻 👩🏿‍❤️‍💋‍👩🏼 👩🏿‍❤️‍💋‍👩🏽 👩🏿‍❤️‍💋‍👩🏾 👩🏿‍❤️‍💋‍👩🏿 💑 🧑🏻‍❤️‍🧑🏼 🧑🏻‍❤️‍🧑🏽 🧑🏻‍❤️‍🧑🏾 🧑🏻‍❤️‍🧑🏿 🧑🏼‍❤️‍🧑🏻 🧑🏼‍❤️‍🧑🏽 🧑🏼‍❤️‍🧑🏾 🧑🏼‍❤️‍🧑🏿 🧑🏽‍❤️‍🧑🏻 🧑🏽‍❤️‍🧑🏼 🧑🏽‍❤️‍🧑🏾 🧑🏽‍❤️‍🧑🏿 🧑🏾‍❤️‍🧑🏻 🧑🏾‍❤️‍🧑🏼 🧑🏾‍❤️‍🧑🏽 🧑🏾‍❤️‍🧑🏿 🧑🏿‍❤️‍🧑🏻 🧑🏿‍❤️‍🧑🏼 🧑🏿‍❤️‍🧑🏽 🧑🏿‍❤️‍🧑🏾 👩‍❤️‍👨 👩🏻‍❤️‍👨🏻 👩🏻‍❤️‍👨🏼 👩🏻‍❤️‍👨🏽 👩🏻‍❤️‍👨🏾 👩🏻‍❤️‍👨🏿 👩🏼‍❤️‍👨🏻 👩🏼‍❤️‍👨🏼 👩🏼‍❤️‍👨🏽 👩🏼‍❤️‍👨🏾 👩🏼‍❤️‍👨🏿 👩🏽‍❤️‍👨🏻 👩🏽‍❤️‍👨🏼 👩🏽‍❤️‍👨🏽 👩🏽‍❤️‍👨🏾 👩🏽‍❤️‍👨🏿 👩🏾‍❤️‍👨🏻 👩🏾‍❤️‍👨🏼 👩🏾‍❤️‍👨🏽 👩🏾‍❤️‍👨🏾 👩🏾‍❤️‍👨🏿 👩🏿‍❤️‍👨🏻 👩🏿‍❤️‍👨🏼 👩🏿‍❤️‍👨🏽 👩🏿‍❤️‍👨🏾 👩🏿‍❤️‍👨🏿 👨‍❤️‍👨 👨🏻‍❤️‍👨🏻 👨🏻‍❤️‍👨🏼 👨🏻‍❤️‍👨🏽 👨🏻‍❤️‍👨🏾 👨🏻‍❤️‍👨🏿 👨🏼‍❤️‍👨🏻 👨🏼‍❤️‍👨🏼 👨🏼‍❤️‍👨🏽 👨🏼‍❤️‍👨🏾 👨🏼‍❤️‍👨🏿 👨🏽‍❤️‍👨🏻 👨🏽‍❤️‍👨🏼 👨🏽‍❤️‍👨🏽 👨🏽‍❤️‍👨🏾 👨🏽‍❤️‍👨🏿 👨🏾‍❤️‍👨🏻 👨🏾‍❤️‍👨🏼 👨🏾‍❤️‍👨🏽 👨🏾‍❤️‍👨🏾 👨🏾‍❤️‍👨🏿 👨🏿‍❤️‍👨🏻 👨🏿‍❤️‍👨🏼 👨🏿‍❤️‍👨🏽 👨🏿‍❤️‍👨🏾 👨🏿‍❤️‍👨🏿 👩‍❤️‍👩 👩🏻‍❤️‍👩🏻 👩🏻‍❤️‍👩🏼 👩🏻‍❤️‍👩🏽 👩🏻‍❤️‍👩🏾 👩🏻‍❤️‍👩🏿 👩🏼‍❤️‍👩🏻 👩🏼‍❤️‍👩🏼 👩🏼‍❤️‍👩🏽 👩🏼‍❤️‍👩🏾 👩🏼‍❤️‍👩🏿 👩🏽‍❤️‍👩🏻 👩🏽‍❤️‍👩🏼 👩🏽‍❤️‍👩🏽 👩🏽‍❤️‍👩🏾 👩🏽‍❤️‍👩🏿 👩🏾‍❤️‍👩🏻 👩🏾‍❤️‍👩🏼 👩🏾‍❤️‍👩🏽 👩🏾‍❤️‍👩🏾 👩🏾‍❤️‍👩🏿 👩🏿‍❤️‍👩🏻 👩🏿‍❤️‍👩🏼 👩🏿‍❤️‍👩🏽 👩🏿‍❤️‍👩🏾 👩🏿‍❤️‍👩🏿 👪 👨‍👩‍👦 👨‍👩‍👧 👨‍👩‍👧‍👦 👨‍👩‍👦‍👦 👨‍👩‍👧‍👧 👨‍👨‍👦 👨‍👨‍👧 👨‍👨‍👧‍👦 👨‍👨‍👦‍👦 👨‍👨‍👧‍👧 👩‍👩‍👦 👩‍👩‍👧 👩‍👩‍👧‍👦 👩‍👩‍👦‍👦 👩‍👩‍👧‍👧 👨‍👦 👨‍👦‍👦 👨‍👧 👨‍👧‍👦 👨‍👧‍👧 👩‍👦 👩‍👦‍👦 👩‍👧 👩‍👧‍👦 👩‍👧‍👧 🐕‍🦺 🐈‍⬛ 🐻‍❄️ 🐦‍⬛ 🏳️‍🌈 🏳️‍⚧️ 🏴‍☠️ </p>`,frontmatter:{hide:!1,srcSequence:"./pages/04-quirks.md"},note:`Full reference: https://unicode.org/Public/emoji/15.0/
ZJW: zwidje https://unicode.org/emoji/charts/emoji-zwj-sequences.html`,index:52,start:79,end:89,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/04-quirks.md",raw:`
## Emoji Composition

<p style="font-size: 65%; line-height: 1rem;"> 😶‍🌫️ 😮‍💨 😵‍💫 ❤️‍🔥 ❤️‍🩹 👁️‍🗨️ 🫱🏻‍🫲🏼 🫱🏻‍🫲🏽 🫱🏻‍🫲🏾 🫱🏻‍🫲🏿 🫱🏼‍🫲🏻 🫱🏼‍🫲🏽 🫱🏼‍🫲🏾 🫱🏼‍🫲🏿 🫱🏽‍🫲🏻 🫱🏽‍🫲🏼 🫱🏽‍🫲🏾 🫱🏽‍🫲🏿 🫱🏾‍🫲🏻 🫱🏾‍🫲🏼 🫱🏾‍🫲🏽 🫱🏾‍🫲🏿 🫱🏿‍🫲🏻 🫱🏿‍🫲🏼 🫱🏿‍🫲🏽 🫱🏿‍🫲🏾 🧔‍♂️ 🧔🏻‍♂️ 🧔🏼‍♂️ 🧔🏽‍♂️ 🧔🏾‍♂️ 🧔🏿‍♂️ 🧔‍♀️ 🧔🏻‍♀️ 🧔🏼‍♀️ 🧔🏽‍♀️ 🧔🏾‍♀️ 🧔🏿‍♀️ 👨‍🦰 👨🏻‍🦰 👨🏼‍🦰 👨🏽‍🦰 👨🏾‍🦰 👨🏿‍🦰 👨‍🦱 👨🏻‍🦱 👨🏼‍🦱 👨🏽‍🦱 👨🏾‍🦱 👨🏿‍🦱 👨‍🦳 👨🏻‍🦳 👨🏼‍🦳 👨🏽‍🦳 👨🏾‍🦳 👨🏿‍🦳 👨‍🦲 👨🏻‍🦲 👨🏼‍🦲 👨🏽‍🦲 👨🏾‍🦲 👨🏿‍🦲 👩‍🦰 👩🏻‍🦰 👩🏼‍🦰 👩🏽‍🦰 👩🏾‍🦰 👩🏿‍🦰 🧑‍🦰 🧑🏻‍🦰 🧑🏼‍🦰 🧑🏽‍🦰 🧑🏾‍🦰 🧑🏿‍🦰 👩‍🦱 👩🏻‍🦱 👩🏼‍🦱 👩🏽‍🦱 👩🏾‍🦱 👩🏿‍🦱 🧑‍🦱 🧑🏻‍🦱 🧑🏼‍🦱 🧑🏽‍🦱 🧑🏾‍🦱 🧑🏿‍🦱 👩‍🦳 👩🏻‍🦳 👩🏼‍🦳 👩🏽‍🦳 👩🏾‍🦳 👩🏿‍🦳 🧑‍🦳 🧑🏻‍🦳 🧑🏼‍🦳 🧑🏽‍🦳 🧑🏾‍🦳 🧑🏿‍🦳 👩‍🦲 👩🏻‍🦲 👩🏼‍🦲 👩🏽‍🦲 👩🏾‍🦲 👩🏿‍🦲 🧑‍🦲 🧑🏻‍🦲 🧑🏼‍🦲 🧑🏽‍🦲 🧑🏾‍🦲 🧑🏿‍🦲 👱‍♀️ 👱🏻‍♀️ 👱🏼‍♀️ 👱🏽‍♀️ 👱🏾‍♀️ 👱🏿‍♀️ 👱‍♂️ 👱🏻‍♂️ 👱🏼‍♂️ 👱🏽‍♂️ 👱🏾‍♂️ 👱🏿‍♂️ 🙍‍♂️ 🙍🏻‍♂️ 🙍🏼‍♂️ 🙍🏽‍♂️ 🙍🏾‍♂️ 🙍🏿‍♂️ 🙍‍♀️ 🙍🏻‍♀️ 🙍🏼‍♀️ 🙍🏽‍♀️ 🙍🏾‍♀️ 🙍🏿‍♀️ 🙎‍♂️ 🙎🏻‍♂️ 🙎🏼‍♂️ 🙎🏽‍♂️ 🙎🏾‍♂️ 🙎🏿‍♂️ 🙎‍♀️ 🙎🏻‍♀️ 🙎🏼‍♀️ 🙎🏽‍♀️ 🙎🏾‍♀️ 🙎🏿‍♀️ 🙅‍♂️ 🙅🏻‍♂️ 🙅🏼‍♂️ 🙅🏽‍♂️ 🙅🏾‍♂️ 🙅🏿‍♂️ 🙅‍♀️ 🙅🏻‍♀️ 🙅🏼‍♀️ 🙅🏽‍♀️ 🙅🏾‍♀️ 🙅🏿‍♀️ 🙆‍♂️ 🙆🏻‍♂️ 🙆🏼‍♂️ 🙆🏽‍♂️ 🙆🏾‍♂️ 🙆🏿‍♂️ 🙆‍♀️ 🙆🏻‍♀️ 🙆🏼‍♀️ 🙆🏽‍♀️ 🙆🏾‍♀️ 🙆🏿‍♀️ 💁‍♂️ 💁🏻‍♂️ 💁🏼‍♂️ 💁🏽‍♂️ 💁🏾‍♂️ 💁🏿‍♂️ 💁‍♀️ 💁🏻‍♀️ 💁🏼‍♀️ 💁🏽‍♀️ 💁🏾‍♀️ 💁🏿‍♀️ 🙋‍♂️ 🙋🏻‍♂️ 🙋🏼‍♂️ 🙋🏽‍♂️ 🙋🏾‍♂️ 🙋🏿‍♂️ 🙋‍♀️ 🙋🏻‍♀️ 🙋🏼‍♀️ 🙋🏽‍♀️ 🙋🏾‍♀️ 🙋🏿‍♀️ 🧏‍♂️ 🧏🏻‍♂️ 🧏🏼‍♂️ 🧏🏽‍♂️ 🧏🏾‍♂️ 🧏🏿‍♂️ 🧏‍♀️ 🧏🏻‍♀️ 🧏🏼‍♀️ 🧏🏽‍♀️ 🧏🏾‍♀️ 🧏🏿‍♀️ 🙇‍♂️ 🙇🏻‍♂️ 🙇🏼‍♂️ 🙇🏽‍♂️ 🙇🏾‍♂️ 🙇🏿‍♂️ 🙇‍♀️ 🙇🏻‍♀️ 🙇🏼‍♀️ 🙇🏽‍♀️ 🙇🏾‍♀️ 🙇🏿‍♀️ 🤦‍♂️ 🤦🏻‍♂️ 🤦🏼‍♂️ 🤦🏽‍♂️ 🤦🏾‍♂️ 🤦🏿‍♂️ 🤦‍♀️ 🤦🏻‍♀️ 🤦🏼‍♀️ 🤦🏽‍♀️ 🤦🏾‍♀️ 🤦🏿‍♀️ 🤷‍♂️ 🤷🏻‍♂️ 🤷🏼‍♂️ 🤷🏽‍♂️ 🤷🏾‍♂️ 🤷🏿‍♂️ 🤷‍♀️ 🤷🏻‍♀️ 🤷🏼‍♀️ 🤷🏽‍♀️ 🤷🏾‍♀️ 🤷🏿‍♀️ 🧑‍⚕️ 🧑🏻‍⚕️ 🧑🏼‍⚕️ 🧑🏽‍⚕️ 🧑🏾‍⚕️ 🧑🏿‍⚕️ 👨‍⚕️ 👨🏻‍⚕️ 👨🏼‍⚕️ 👨🏽‍⚕️ 👨🏾‍⚕️ 👨🏿‍⚕️ 👩‍⚕️ 👩🏻‍⚕️ 👩🏼‍⚕️ 👩🏽‍⚕️ 👩🏾‍⚕️ 👩🏿‍⚕️ 🧑‍🎓 🧑🏻‍🎓 🧑🏼‍🎓 🧑🏽‍🎓 🧑🏾‍🎓 🧑🏿‍🎓 👨‍🎓 👨🏻‍🎓 👨🏼‍🎓 👨🏽‍🎓 👨🏾‍🎓 👨🏿‍🎓 👩‍🎓 👩🏻‍🎓 👩🏼‍🎓 👩🏽‍🎓 👩🏾‍🎓 👩🏿‍🎓 🧑‍🏫 🧑🏻‍🏫 🧑🏼‍🏫 🧑🏽‍🏫 🧑🏾‍🏫 🧑🏿‍🏫 👨‍🏫 👨🏻‍🏫 👨🏼‍🏫 👨🏽‍🏫 👨🏾‍🏫 👨🏿‍🏫 👩‍🏫 👩🏻‍🏫 👩🏼‍🏫 👩🏽‍🏫 👩🏾‍🏫 👩🏿‍🏫 🧑‍⚖️ 🧑🏻‍⚖️ 🧑🏼‍⚖️ 🧑🏽‍⚖️ 🧑🏾‍⚖️ 🧑🏿‍⚖️ 👨‍⚖️ 👨🏻‍⚖️ 👨🏼‍⚖️ 👨🏽‍⚖️ 👨🏾‍⚖️ 👨🏿‍⚖️ 👩‍⚖️ 👩🏻‍⚖️ 👩🏼‍⚖️ 👩🏽‍⚖️ 👩🏾‍⚖️ 👩🏿‍⚖️ 🧑‍🌾 🧑🏻‍🌾 🧑🏼‍🌾 🧑🏽‍🌾 🧑🏾‍🌾 🧑🏿‍🌾 👨‍🌾 👨🏻‍🌾 👨🏼‍🌾 👨🏽‍🌾 👨🏾‍🌾 👨🏿‍🌾 👩‍🌾 👩🏻‍🌾 👩🏼‍🌾 👩🏽‍🌾 👩🏾‍🌾 👩🏿‍🌾 🧑‍🍳 🧑🏻‍🍳 🧑🏼‍🍳 🧑🏽‍🍳 🧑🏾‍🍳 🧑🏿‍🍳 👨‍🍳 👨🏻‍🍳 👨🏼‍🍳 👨🏽‍🍳 👨🏾‍🍳 👨🏿‍🍳 👩‍🍳 👩🏻‍🍳 👩🏼‍🍳 👩🏽‍🍳 👩🏾‍🍳 👩🏿‍🍳 🧑‍🔧 🧑🏻‍🔧 🧑🏼‍🔧 🧑🏽‍🔧 🧑🏾‍🔧 🧑🏿‍🔧 👨‍🔧 👨🏻‍🔧 👨🏼‍🔧 👨🏽‍🔧 👨🏾‍🔧 👨🏿‍🔧 👩‍🔧 👩🏻‍🔧 👩🏼‍🔧 👩🏽‍🔧 👩🏾‍🔧 👩🏿‍🔧 🧑‍🏭 🧑🏻‍🏭 🧑🏼‍🏭 🧑🏽‍🏭 🧑🏾‍🏭 🧑🏿‍🏭 👨‍🏭 👨🏻‍🏭 👨🏼‍🏭 👨🏽‍🏭 👨🏾‍🏭 👨🏿‍🏭 👩‍🏭 👩🏻‍🏭 👩🏼‍🏭 👩🏽‍🏭 👩🏾‍🏭 👩🏿‍🏭 🧑‍💼 🧑🏻‍💼 🧑🏼‍💼 🧑🏽‍💼 🧑🏾‍💼 🧑🏿‍💼 👨‍💼 👨🏻‍💼 👨🏼‍💼 👨🏽‍💼 👨🏾‍💼 👨🏿‍💼 👩‍💼 👩🏻‍💼 👩🏼‍💼 👩🏽‍💼 👩🏾‍💼 👩🏿‍💼 🧑‍🔬 🧑🏻‍🔬 🧑🏼‍🔬 🧑🏽‍🔬 🧑🏾‍🔬 🧑🏿‍🔬 👨‍🔬 👨🏻‍🔬 👨🏼‍🔬 👨🏽‍🔬 👨🏾‍🔬 👨🏿‍🔬 👩‍🔬 👩🏻‍🔬 👩🏼‍🔬 👩🏽‍🔬 👩🏾‍🔬 👩🏿‍🔬 🧑‍💻 🧑🏻‍💻 🧑🏼‍💻 🧑🏽‍💻 🧑🏾‍💻 🧑🏿‍💻 👨‍💻 👨🏻‍💻 👨🏼‍💻 👨🏽‍💻 👨🏾‍💻 👨🏿‍💻 👩‍💻 👩🏻‍💻 👩🏼‍💻 👩🏽‍💻 👩🏾‍💻 👩🏿‍💻 🧑‍🎤 🧑🏻‍🎤 🧑🏼‍🎤 🧑🏽‍🎤 🧑🏾‍🎤 🧑🏿‍🎤 👨‍🎤 👨🏻‍🎤 👨🏼‍🎤 👨🏽‍🎤 👨🏾‍🎤 👨🏿‍🎤 👩‍🎤 👩🏻‍🎤 👩🏼‍🎤 👩🏽‍🎤 👩🏾‍🎤 👩🏿‍🎤 🧑‍🎨 🧑🏻‍🎨 🧑🏼‍🎨 🧑🏽‍🎨 🧑🏾‍🎨 🧑🏿‍🎨 👨‍🎨 👨🏻‍🎨 👨🏼‍🎨 👨🏽‍🎨 👨🏾‍🎨 👨🏿‍🎨 👩‍🎨 👩🏻‍🎨 👩🏼‍🎨 👩🏽‍🎨 👩🏾‍🎨 👩🏿‍🎨 🧑‍✈️ 🧑🏻‍✈️ 🧑🏼‍✈️ 🧑🏽‍✈️ 🧑🏾‍✈️ 🧑🏿‍✈️ 👨‍✈️ 👨🏻‍✈️ 👨🏼‍✈️ 👨🏽‍✈️ 👨🏾‍✈️ 👨🏿‍✈️ 👩‍✈️ 👩🏻‍✈️ 👩🏼‍✈️ 👩🏽‍✈️ 👩🏾‍✈️ 👩🏿‍✈️ 🧑‍🚀 🧑🏻‍🚀 🧑🏼‍🚀 🧑🏽‍🚀 🧑🏾‍🚀 🧑🏿‍🚀 👨‍🚀 👨🏻‍🚀 👨🏼‍🚀 👨🏽‍🚀 👨🏾‍🚀 👨🏿‍🚀 👩‍🚀 👩🏻‍🚀 👩🏼‍🚀 👩🏽‍🚀 👩🏾‍🚀 👩🏿‍🚀 🧑‍🚒 🧑🏻‍🚒 🧑🏼‍🚒 🧑🏽‍🚒 🧑🏾‍🚒 🧑🏿‍🚒 👨‍🚒 👨🏻‍🚒 👨🏼‍🚒 👨🏽‍🚒 👨🏾‍🚒 👨🏿‍🚒 👩‍🚒 👩🏻‍🚒 👩🏼‍🚒 👩🏽‍🚒 👩🏾‍🚒 👩🏿‍🚒 👮‍♂️ 👮🏻‍♂️ 👮🏼‍♂️ 👮🏽‍♂️ 👮🏾‍♂️ 👮🏿‍♂️ 👮‍♀️ 👮🏻‍♀️ 👮🏼‍♀️ 👮🏽‍♀️ 👮🏾‍♀️ 👮🏿‍♀️ 🕵️‍♂️ 🕵🏻‍♂️ 🕵🏼‍♂️ 🕵🏽‍♂️ 🕵🏾‍♂️ 🕵🏿‍♂️ 🕵️‍♀️ 🕵🏻‍♀️ 🕵🏼‍♀️ 🕵🏽‍♀️ 🕵🏾‍♀️ 🕵🏿‍♀️ 💂‍♂️ 💂🏻‍♂️ 💂🏼‍♂️ 💂🏽‍♂️ 💂🏾‍♂️ 💂🏿‍♂️ 💂‍♀️ 💂🏻‍♀️ 💂🏼‍♀️ 💂🏽‍♀️ 💂🏾‍♀️ 💂🏿‍♀️ 👷‍♂️ 👷🏻‍♂️ 👷🏼‍♂️ 👷🏽‍♂️ 👷🏾‍♂️ 👷🏿‍♂️ 👷‍♀️ 👷🏻‍♀️ 👷🏼‍♀️ 👷🏽‍♀️ 👷🏾‍♀️ 👷🏿‍♀️ 👳‍♂️ 👳🏻‍♂️ 👳🏼‍♂️ 👳🏽‍♂️ 👳🏾‍♂️ 👳🏿‍♂️ 👳‍♀️ 👳🏻‍♀️ 👳🏼‍♀️ 👳🏽‍♀️ 👳🏾‍♀️ 👳🏿‍♀️ 🤵‍♂️ 🤵🏻‍♂️ 🤵🏼‍♂️ 🤵🏽‍♂️ 🤵🏾‍♂️ 🤵🏿‍♂️ 🤵‍♀️ 🤵🏻‍♀️ 🤵🏼‍♀️ 🤵🏽‍♀️ 🤵🏾‍♀️ 🤵🏿‍♀️ 👰‍♂️ 👰🏻‍♂️ 👰🏼‍♂️ 👰🏽‍♂️ 👰🏾‍♂️ 👰🏿‍♂️ 👰‍♀️ 👰🏻‍♀️ 👰🏼‍♀️ 👰🏽‍♀️ 👰🏾‍♀️ 👰🏿‍♀️ 👩‍🍼 👩🏻‍🍼 👩🏼‍🍼 👩🏽‍🍼 👩🏾‍🍼 👩🏿‍🍼 👨‍🍼 👨🏻‍🍼 👨🏼‍🍼 👨🏽‍🍼 👨🏾‍🍼 👨🏿‍🍼 🧑‍🍼 🧑🏻‍🍼 🧑🏼‍🍼 🧑🏽‍🍼 🧑🏾‍🍼 🧑🏿‍🍼 🧑‍🎄 🧑🏻‍🎄 🧑🏼‍🎄 🧑🏽‍🎄 🧑🏾‍🎄 🧑🏿‍🎄 🦸‍♂️ 🦸🏻‍♂️ 🦸🏼‍♂️ 🦸🏽‍♂️ 🦸🏾‍♂️ 🦸🏿‍♂️ 🦸‍♀️ 🦸🏻‍♀️ 🦸🏼‍♀️ 🦸🏽‍♀️ 🦸🏾‍♀️ 🦸🏿‍♀️ 🦹‍♂️ 🦹🏻‍♂️ 🦹🏼‍♂️ 🦹🏽‍♂️ 🦹🏾‍♂️ 🦹🏿‍♂️ 🦹‍♀️ 🦹🏻‍♀️ 🦹🏼‍♀️ 🦹🏽‍♀️ 🦹🏾‍♀️ 🦹🏿‍♀️ 🧙‍♂️ 🧙🏻‍♂️ 🧙🏼‍♂️ 🧙🏽‍♂️ 🧙🏾‍♂️ 🧙🏿‍♂️ 🧙‍♀️ 🧙🏻‍♀️ 🧙🏼‍♀️ 🧙🏽‍♀️ 🧙🏾‍♀️ 🧙🏿‍♀️ 🧚‍♂️ 🧚🏻‍♂️ 🧚🏼‍♂️ 🧚🏽‍♂️ 🧚🏾‍♂️ 🧚🏿‍♂️ 🧚‍♀️ 🧚🏻‍♀️ 🧚🏼‍♀️ 🧚🏽‍♀️ 🧚🏾‍♀️ 🧚🏿‍♀️ 🧛‍♂️ 🧛🏻‍♂️ 🧛🏼‍♂️ 🧛🏽‍♂️ 🧛🏾‍♂️ 🧛🏿‍♂️ 🧛‍♀️ 🧛🏻‍♀️ 🧛🏼‍♀️ 🧛🏽‍♀️ 🧛🏾‍♀️ 🧛🏿‍♀️ 🧜‍♂️ 🧜🏻‍♂️ 🧜🏼‍♂️ 🧜🏽‍♂️ 🧜🏾‍♂️ 🧜🏿‍♂️ 🧜‍♀️ 🧜🏻‍♀️ 🧜🏼‍♀️ 🧜🏽‍♀️ 🧜🏾‍♀️ 🧜🏿‍♀️ 🧝‍♂️ 🧝🏻‍♂️ 🧝🏼‍♂️ 🧝🏽‍♂️ 🧝🏾‍♂️ 🧝🏿‍♂️ 🧝‍♀️ 🧝🏻‍♀️ 🧝🏼‍♀️ 🧝🏽‍♀️ 🧝🏾‍♀️ 🧝🏿‍♀️ 🧞‍♂️ 🧞‍♀️ 🧟‍♂️ 🧟‍♀️ 💆‍♂️ 💆🏻‍♂️ 💆🏼‍♂️ 💆🏽‍♂️ 💆🏾‍♂️ 💆🏿‍♂️ 💆‍♀️ 💆🏻‍♀️ 💆🏼‍♀️ 💆🏽‍♀️ 💆🏾‍♀️ 💆🏿‍♀️ 💇‍♂️ 💇🏻‍♂️ 💇🏼‍♂️ 💇🏽‍♂️ 💇🏾‍♂️ 💇🏿‍♂️ 💇‍♀️ 💇🏻‍♀️ 💇🏼‍♀️ 💇🏽‍♀️ 💇🏾‍♀️ 💇🏿‍♀️ 🚶‍♂️ 🚶🏻‍♂️ 🚶🏼‍♂️ 🚶🏽‍♂️ 🚶🏾‍♂️ 🚶🏿‍♂️ 🚶‍♀️ 🚶🏻‍♀️ 🚶🏼‍♀️ 🚶🏽‍♀️ 🚶🏾‍♀️ 🚶🏿‍♀️ 🧍‍♂️ 🧍🏻‍♂️ 🧍🏼‍♂️ 🧍🏽‍♂️ 🧍🏾‍♂️ 🧍🏿‍♂️ 🧍‍♀️ 🧍🏻‍♀️ 🧍🏼‍♀️ 🧍🏽‍♀️ 🧍🏾‍♀️ 🧍🏿‍♀️ 🧎‍♂️ 🧎🏻‍♂️ 🧎🏼‍♂️ 🧎🏽‍♂️ 🧎🏾‍♂️ 🧎🏿‍♂️ 🧎‍♀️ 🧎🏻‍♀️ 🧎🏼‍♀️ 🧎🏽‍♀️ 🧎🏾‍♀️ 🧎🏿‍♀️ 🧑‍🦯 🧑🏻‍🦯 🧑🏼‍🦯 🧑🏽‍🦯 🧑🏾‍🦯 🧑🏿‍🦯 👨‍🦯 👨🏻‍🦯 👨🏼‍🦯 👨🏽‍🦯 👨🏾‍🦯 👨🏿‍🦯 👩‍🦯 👩🏻‍🦯 👩🏼‍🦯 👩🏽‍🦯 👩🏾‍🦯 👩🏿‍🦯 🧑‍🦼 🧑🏻‍🦼 🧑🏼‍🦼 🧑🏽‍🦼 🧑🏾‍🦼 🧑🏿‍🦼 👨‍🦼 👨🏻‍🦼 👨🏼‍🦼 👨🏽‍🦼 👨🏾‍🦼 👨🏿‍🦼 👩‍🦼 👩🏻‍🦼 👩🏼‍🦼 👩🏽‍🦼 👩🏾‍🦼 👩🏿‍🦼 🧑‍🦽 🧑🏻‍🦽 🧑🏼‍🦽 🧑🏽‍🦽 🧑🏾‍🦽 🧑🏿‍🦽 👨‍🦽 👨🏻‍🦽 👨🏼‍🦽 👨🏽‍🦽 👨🏾‍🦽 👨🏿‍🦽 👩‍🦽 👩🏻‍🦽 👩🏼‍🦽 👩🏽‍🦽 👩🏾‍🦽 👩🏿‍🦽 🏃‍♂️ 🏃🏻‍♂️ 🏃🏼‍♂️ 🏃🏽‍♂️ 🏃🏾‍♂️ 🏃🏿‍♂️ 🏃‍♀️ 🏃🏻‍♀️ 🏃🏼‍♀️ 🏃🏽‍♀️ 🏃🏾‍♀️ 🏃🏿‍♀️ 👯‍♂️ 👯‍♀️ 🧖‍♂️ 🧖🏻‍♂️ 🧖🏼‍♂️ 🧖🏽‍♂️ 🧖🏾‍♂️ 🧖🏿‍♂️ 🧖‍♀️ 🧖🏻‍♀️ 🧖🏼‍♀️ 🧖🏽‍♀️ 🧖🏾‍♀️ 🧖🏿‍♀️ 🧗‍♂️ 🧗🏻‍♂️ 🧗🏼‍♂️ 🧗🏽‍♂️ 🧗🏾‍♂️ 🧗🏿‍♂️ 🧗‍♀️ 🧗🏻‍♀️ 🧗🏼‍♀️ 🧗🏽‍♀️ 🧗🏾‍♀️ 🧗🏿‍♀️ 🏌️‍♂️ 🏌🏻‍♂️ 🏌🏼‍♂️ 🏌🏽‍♂️ 🏌🏾‍♂️ 🏌🏿‍♂️ 🏌️‍♀️ 🏌🏻‍♀️ 🏌🏼‍♀️ 🏌🏽‍♀️ 🏌🏾‍♀️ 🏌🏿‍♀️ 🏄‍♂️ 🏄🏻‍♂️ 🏄🏼‍♂️ 🏄🏽‍♂️ 🏄🏾‍♂️ 🏄🏿‍♂️ 🏄‍♀️ 🏄🏻‍♀️ 🏄🏼‍♀️ 🏄🏽‍♀️ 🏄🏾‍♀️ 🏄🏿‍♀️ 🚣‍♂️ 🚣🏻‍♂️ 🚣🏼‍♂️ 🚣🏽‍♂️ 🚣🏾‍♂️ 🚣🏿‍♂️ 🚣‍♀️ 🚣🏻‍♀️ 🚣🏼‍♀️ 🚣🏽‍♀️ 🚣🏾‍♀️ 🚣🏿‍♀️ 🏊‍♂️ 🏊🏻‍♂️ 🏊🏼‍♂️ 🏊🏽‍♂️ 🏊🏾‍♂️ 🏊🏿‍♂️ 🏊‍♀️ 🏊🏻‍♀️ 🏊🏼‍♀️ 🏊🏽‍♀️ 🏊🏾‍♀️ 🏊🏿‍♀️ ⛹️‍♂️ ⛹🏻‍♂️ ⛹🏼‍♂️ ⛹🏽‍♂️ ⛹🏾‍♂️ ⛹🏿‍♂️ ⛹️‍♀️ ⛹🏻‍♀️ ⛹🏼‍♀️ ⛹🏽‍♀️ ⛹🏾‍♀️ ⛹🏿‍♀️ 🏋️‍♂️ 🏋🏻‍♂️ 🏋🏼‍♂️ 🏋🏽‍♂️ 🏋🏾‍♂️ 🏋🏿‍♂️ 🏋️‍♀️ 🏋🏻‍♀️ 🏋🏼‍♀️ 🏋🏽‍♀️ 🏋🏾‍♀️ 🏋🏿‍♀️ 🚴‍♂️ 🚴🏻‍♂️ 🚴🏼‍♂️ 🚴🏽‍♂️ 🚴🏾‍♂️ 🚴🏿‍♂️ 🚴‍♀️ 🚴🏻‍♀️ 🚴🏼‍♀️ 🚴🏽‍♀️ 🚴🏾‍♀️ 🚴🏿‍♀️ 🚵‍♂️ 🚵🏻‍♂️ 🚵🏼‍♂️ 🚵🏽‍♂️ 🚵🏾‍♂️ 🚵🏿‍♂️ 🚵‍♀️ 🚵🏻‍♀️ 🚵🏼‍♀️ 🚵🏽‍♀️ 🚵🏾‍♀️ 🚵🏿‍♀️ 🤸‍♂️ 🤸🏻‍♂️ 🤸🏼‍♂️ 🤸🏽‍♂️ 🤸🏾‍♂️ 🤸🏿‍♂️ 🤸‍♀️ 🤸🏻‍♀️ 🤸🏼‍♀️ 🤸🏽‍♀️ 🤸🏾‍♀️ 🤸🏿‍♀️ 🤼‍♂️ 🤼‍♀️ 🤽‍♂️ 🤽🏻‍♂️ 🤽🏼‍♂️ 🤽🏽‍♂️ 🤽🏾‍♂️ 🤽🏿‍♂️ 🤽‍♀️ 🤽🏻‍♀️ 🤽🏼‍♀️ 🤽🏽‍♀️ 🤽🏾‍♀️ 🤽🏿‍♀️ 🤾‍♂️ 🤾🏻‍♂️ 🤾🏼‍♂️ 🤾🏽‍♂️ 🤾🏾‍♂️ 🤾🏿‍♂️ 🤾‍♀️ 🤾🏻‍♀️ 🤾🏼‍♀️ 🤾🏽‍♀️ 🤾🏾‍♀️ 🤾🏿‍♀️ 🤹‍♂️ 🤹🏻‍♂️ 🤹🏼‍♂️ 🤹🏽‍♂️ 🤹🏾‍♂️ 🤹🏿‍♂️ 🤹‍♀️ 🤹🏻‍♀️ 🤹🏼‍♀️ 🤹🏽‍♀️ 🤹🏾‍♀️ 🤹🏿‍♀️ 🧘‍♂️ 🧘🏻‍♂️ 🧘🏼‍♂️ 🧘🏽‍♂️ 🧘🏾‍♂️ 🧘🏿‍♂️ 🧘‍♀️ 🧘🏻‍♀️ 🧘🏼‍♀️ 🧘🏽‍♀️ 🧘🏾‍♀️ 🧘🏿‍♀️ 🧑‍🤝‍🧑 🧑🏻‍🤝‍🧑🏻 🧑🏻‍🤝‍🧑🏼 🧑🏻‍🤝‍🧑🏽 🧑🏻‍🤝‍🧑🏾 🧑🏻‍🤝‍🧑🏿 🧑🏼‍🤝‍🧑🏻 🧑🏼‍🤝‍🧑🏼 🧑🏼‍🤝‍🧑🏽 🧑🏼‍🤝‍🧑🏾 🧑🏼‍🤝‍🧑🏿 🧑🏽‍🤝‍🧑🏻 🧑🏽‍🤝‍🧑🏼 🧑🏽‍🤝‍🧑🏽 🧑🏽‍🤝‍🧑🏾 🧑🏽‍🤝‍🧑🏿 🧑🏾‍🤝‍🧑🏻 🧑🏾‍🤝‍🧑🏼 🧑🏾‍🤝‍🧑🏽 🧑🏾‍🤝‍🧑🏾 🧑🏾‍🤝‍🧑🏿 🧑🏿‍🤝‍🧑🏻 🧑🏿‍🤝‍🧑🏼 🧑🏿‍🤝‍🧑🏽 🧑🏿‍🤝‍🧑🏾 🧑🏿‍🤝‍🧑🏿 👩🏻‍🤝‍👩🏼 👩🏻‍🤝‍👩🏽 👩🏻‍🤝‍👩🏾 👩🏻‍🤝‍👩🏿 👩🏼‍🤝‍👩🏻 👩🏼‍🤝‍👩🏽 👩🏼‍🤝‍👩🏾 👩🏼‍🤝‍👩🏿 👩🏽‍🤝‍👩🏻 👩🏽‍🤝‍👩🏼 👩🏽‍🤝‍👩🏾 👩🏽‍🤝‍👩🏿 👩🏾‍🤝‍👩🏻 👩🏾‍🤝‍👩🏼 👩🏾‍🤝‍👩🏽 👩🏾‍🤝‍👩🏿 👩🏿‍🤝‍👩🏻 👩🏿‍🤝‍👩🏼 👩🏿‍🤝‍👩🏽 👩🏿‍🤝‍👩🏾 👩🏻‍🤝‍👨🏼 👩🏻‍🤝‍👨🏽 👩🏻‍🤝‍👨🏾 👩🏻‍🤝‍👨🏿 👩🏼‍🤝‍👨🏻 👩🏼‍🤝‍👨🏽 👩🏼‍🤝‍👨🏾 👩🏼‍🤝‍👨🏿 👩🏽‍🤝‍👨🏻 👩🏽‍🤝‍👨🏼 👩🏽‍🤝‍👨🏾 👩🏽‍🤝‍👨🏿 👩🏾‍🤝‍👨🏻 👩🏾‍🤝‍👨🏼 👩🏾‍🤝‍👨🏽 👩🏾‍🤝‍👨🏿 👩🏿‍🤝‍👨🏻 👩🏿‍🤝‍👨🏼 👩🏿‍🤝‍👨🏽 👩🏿‍🤝‍👨🏾 👨🏻‍🤝‍👨🏼 👨🏻‍🤝‍👨🏽 👨🏻‍🤝‍👨🏾 👨🏻‍🤝‍👨🏿 👨🏼‍🤝‍👨🏻 👨🏼‍🤝‍👨🏽 👨🏼‍🤝‍👨🏾 👨🏼‍🤝‍👨🏿 👨🏽‍🤝‍👨🏻 👨🏽‍🤝‍👨🏼 👨🏽‍🤝‍👨🏾 👨🏽‍🤝‍👨🏿 👨🏾‍🤝‍👨🏻 👨🏾‍🤝‍👨🏼 👨🏾‍🤝‍👨🏽 👨🏾‍🤝‍👨🏿 👨🏿‍🤝‍👨🏻 👨🏿‍🤝‍👨🏼 👨🏿‍🤝‍👨🏽 👨🏿‍🤝‍👨🏾 💏 🧑🏻‍❤️‍💋‍🧑🏼 🧑🏻‍❤️‍💋‍🧑🏽 🧑🏻‍❤️‍💋‍🧑🏾 🧑🏻‍❤️‍💋‍🧑🏿 🧑🏼‍❤️‍💋‍🧑🏻 🧑🏼‍❤️‍💋‍🧑🏽 🧑🏼‍❤️‍💋‍🧑🏾 🧑🏼‍❤️‍💋‍🧑🏿 🧑🏽‍❤️‍💋‍🧑🏻 🧑🏽‍❤️‍💋‍🧑🏼 🧑🏽‍❤️‍💋‍🧑🏾 🧑🏽‍❤️‍💋‍🧑🏿 🧑🏾‍❤️‍💋‍🧑🏻 🧑🏾‍❤️‍💋‍🧑🏼 🧑🏾‍❤️‍💋‍🧑🏽 🧑🏾‍❤️‍💋‍🧑🏿 🧑🏿‍❤️‍💋‍🧑🏻 🧑🏿‍❤️‍💋‍🧑🏼 🧑🏿‍❤️‍💋‍🧑🏽 🧑🏿‍❤️‍💋‍🧑🏾 👩‍❤️‍💋‍👨 👩🏻‍❤️‍💋‍👨🏻 👩🏻‍❤️‍💋‍👨🏼 👩🏻‍❤️‍💋‍👨🏽 👩🏻‍❤️‍💋‍👨🏾 👩🏻‍❤️‍💋‍👨🏿 👩🏼‍❤️‍💋‍👨🏻 👩🏼‍❤️‍💋‍👨🏼 👩🏼‍❤️‍💋‍👨🏽 👩🏼‍❤️‍💋‍👨🏾 👩🏼‍❤️‍💋‍👨🏿 👩🏽‍❤️‍💋‍👨🏻 👩🏽‍❤️‍💋‍👨🏼 👩🏽‍❤️‍💋‍👨🏽 👩🏽‍❤️‍💋‍👨🏾 👩🏽‍❤️‍💋‍👨🏿 👩🏾‍❤️‍💋‍👨🏻 👩🏾‍❤️‍💋‍👨🏼 👩🏾‍❤️‍💋‍👨🏽 👩🏾‍❤️‍💋‍👨🏾 👩🏾‍❤️‍💋‍👨🏿 👩🏿‍❤️‍💋‍👨🏻 👩🏿‍❤️‍💋‍👨🏼 👩🏿‍❤️‍💋‍👨🏽 👩🏿‍❤️‍💋‍👨🏾 👩🏿‍❤️‍💋‍👨🏿 👨‍❤️‍💋‍👨 👨🏻‍❤️‍💋‍👨🏻 👨🏻‍❤️‍💋‍👨🏼 👨🏻‍❤️‍💋‍👨🏽 👨🏻‍❤️‍💋‍👨🏾 👨🏻‍❤️‍💋‍👨🏿 👨🏼‍❤️‍💋‍👨🏻 👨🏼‍❤️‍💋‍👨🏼 👨🏼‍❤️‍💋‍👨🏽 👨🏼‍❤️‍💋‍👨🏾 👨🏼‍❤️‍💋‍👨🏿 👨🏽‍❤️‍💋‍👨🏻 👨🏽‍❤️‍💋‍👨🏼 👨🏽‍❤️‍💋‍👨🏽 👨🏽‍❤️‍💋‍👨🏾 👨🏽‍❤️‍💋‍👨🏿 👨🏾‍❤️‍💋‍👨🏻 👨🏾‍❤️‍💋‍👨🏼 👨🏾‍❤️‍💋‍👨🏽 👨🏾‍❤️‍💋‍👨🏾 👨🏾‍❤️‍💋‍👨🏿 👨🏿‍❤️‍💋‍👨🏻 👨🏿‍❤️‍💋‍👨🏼 👨🏿‍❤️‍💋‍👨🏽 👨🏿‍❤️‍💋‍👨🏾 👨🏿‍❤️‍💋‍👨🏿 👩‍❤️‍💋‍👩 👩🏻‍❤️‍💋‍👩🏻 👩🏻‍❤️‍💋‍👩🏼 👩🏻‍❤️‍💋‍👩🏽 👩🏻‍❤️‍💋‍👩🏾 👩🏻‍❤️‍💋‍👩🏿 👩🏼‍❤️‍💋‍👩🏻 👩🏼‍❤️‍💋‍👩🏼 👩🏼‍❤️‍💋‍👩🏽 👩🏼‍❤️‍💋‍👩🏾 👩🏼‍❤️‍💋‍👩🏿 👩🏽‍❤️‍💋‍👩🏻 👩🏽‍❤️‍💋‍👩🏼 👩🏽‍❤️‍💋‍👩🏽 👩🏽‍❤️‍💋‍👩🏾 👩🏽‍❤️‍💋‍👩🏿 👩🏾‍❤️‍💋‍👩🏻 👩🏾‍❤️‍💋‍👩🏼 👩🏾‍❤️‍💋‍👩🏽 👩🏾‍❤️‍💋‍👩🏾 👩🏾‍❤️‍💋‍👩🏿 👩🏿‍❤️‍💋‍👩🏻 👩🏿‍❤️‍💋‍👩🏼 👩🏿‍❤️‍💋‍👩🏽 👩🏿‍❤️‍💋‍👩🏾 👩🏿‍❤️‍💋‍👩🏿 💑 🧑🏻‍❤️‍🧑🏼 🧑🏻‍❤️‍🧑🏽 🧑🏻‍❤️‍🧑🏾 🧑🏻‍❤️‍🧑🏿 🧑🏼‍❤️‍🧑🏻 🧑🏼‍❤️‍🧑🏽 🧑🏼‍❤️‍🧑🏾 🧑🏼‍❤️‍🧑🏿 🧑🏽‍❤️‍🧑🏻 🧑🏽‍❤️‍🧑🏼 🧑🏽‍❤️‍🧑🏾 🧑🏽‍❤️‍🧑🏿 🧑🏾‍❤️‍🧑🏻 🧑🏾‍❤️‍🧑🏼 🧑🏾‍❤️‍🧑🏽 🧑🏾‍❤️‍🧑🏿 🧑🏿‍❤️‍🧑🏻 🧑🏿‍❤️‍🧑🏼 🧑🏿‍❤️‍🧑🏽 🧑🏿‍❤️‍🧑🏾 👩‍❤️‍👨 👩🏻‍❤️‍👨🏻 👩🏻‍❤️‍👨🏼 👩🏻‍❤️‍👨🏽 👩🏻‍❤️‍👨🏾 👩🏻‍❤️‍👨🏿 👩🏼‍❤️‍👨🏻 👩🏼‍❤️‍👨🏼 👩🏼‍❤️‍👨🏽 👩🏼‍❤️‍👨🏾 👩🏼‍❤️‍👨🏿 👩🏽‍❤️‍👨🏻 👩🏽‍❤️‍👨🏼 👩🏽‍❤️‍👨🏽 👩🏽‍❤️‍👨🏾 👩🏽‍❤️‍👨🏿 👩🏾‍❤️‍👨🏻 👩🏾‍❤️‍👨🏼 👩🏾‍❤️‍👨🏽 👩🏾‍❤️‍👨🏾 👩🏾‍❤️‍👨🏿 👩🏿‍❤️‍👨🏻 👩🏿‍❤️‍👨🏼 👩🏿‍❤️‍👨🏽 👩🏿‍❤️‍👨🏾 👩🏿‍❤️‍👨🏿 👨‍❤️‍👨 👨🏻‍❤️‍👨🏻 👨🏻‍❤️‍👨🏼 👨🏻‍❤️‍👨🏽 👨🏻‍❤️‍👨🏾 👨🏻‍❤️‍👨🏿 👨🏼‍❤️‍👨🏻 👨🏼‍❤️‍👨🏼 👨🏼‍❤️‍👨🏽 👨🏼‍❤️‍👨🏾 👨🏼‍❤️‍👨🏿 👨🏽‍❤️‍👨🏻 👨🏽‍❤️‍👨🏼 👨🏽‍❤️‍👨🏽 👨🏽‍❤️‍👨🏾 👨🏽‍❤️‍👨🏿 👨🏾‍❤️‍👨🏻 👨🏾‍❤️‍👨🏼 👨🏾‍❤️‍👨🏽 👨🏾‍❤️‍👨🏾 👨🏾‍❤️‍👨🏿 👨🏿‍❤️‍👨🏻 👨🏿‍❤️‍👨🏼 👨🏿‍❤️‍👨🏽 👨🏿‍❤️‍👨🏾 👨🏿‍❤️‍👨🏿 👩‍❤️‍👩 👩🏻‍❤️‍👩🏻 👩🏻‍❤️‍👩🏼 👩🏻‍❤️‍👩🏽 👩🏻‍❤️‍👩🏾 👩🏻‍❤️‍👩🏿 👩🏼‍❤️‍👩🏻 👩🏼‍❤️‍👩🏼 👩🏼‍❤️‍👩🏽 👩🏼‍❤️‍👩🏾 👩🏼‍❤️‍👩🏿 👩🏽‍❤️‍👩🏻 👩🏽‍❤️‍👩🏼 👩🏽‍❤️‍👩🏽 👩🏽‍❤️‍👩🏾 👩🏽‍❤️‍👩🏿 👩🏾‍❤️‍👩🏻 👩🏾‍❤️‍👩🏼 👩🏾‍❤️‍👩🏽 👩🏾‍❤️‍👩🏾 👩🏾‍❤️‍👩🏿 👩🏿‍❤️‍👩🏻 👩🏿‍❤️‍👩🏼 👩🏿‍❤️‍👩🏽 👩🏿‍❤️‍👩🏾 👩🏿‍❤️‍👩🏿 👪 👨‍👩‍👦 👨‍👩‍👧 👨‍👩‍👧‍👦 👨‍👩‍👦‍👦 👨‍👩‍👧‍👧 👨‍👨‍👦 👨‍👨‍👧 👨‍👨‍👧‍👦 👨‍👨‍👦‍👦 👨‍👨‍👧‍👧 👩‍👩‍👦 👩‍👩‍👧 👩‍👩‍👧‍👦 👩‍👩‍👦‍👦 👩‍👩‍👧‍👧 👨‍👦 👨‍👦‍👦 👨‍👧 👨‍👧‍👦 👨‍👧‍👧 👩‍👦 👩‍👦‍👦 👩‍👧 👩‍👧‍👦 👩‍👧‍👧 🐕‍🦺 🐈‍⬛ 🐻‍❄️ 🐦‍⬛ 🏳️‍🌈 🏳️‍⚧️ 🏴‍☠️ </p>

<!--
Full reference: https://unicode.org/Public/emoji/15.0/
ZJW: zwidje https://unicode.org/emoji/charts/emoji-zwj-sequences.html
-->
`,title:"Emoji Composition",level:2,content:`## Emoji Composition

<p style="font-size: 65%; line-height: 1rem;"> 😶‍🌫️ 😮‍💨 😵‍💫 ❤️‍🔥 ❤️‍🩹 👁️‍🗨️ 🫱🏻‍🫲🏼 🫱🏻‍🫲🏽 🫱🏻‍🫲🏾 🫱🏻‍🫲🏿 🫱🏼‍🫲🏻 🫱🏼‍🫲🏽 🫱🏼‍🫲🏾 🫱🏼‍🫲🏿 🫱🏽‍🫲🏻 🫱🏽‍🫲🏼 🫱🏽‍🫲🏾 🫱🏽‍🫲🏿 🫱🏾‍🫲🏻 🫱🏾‍🫲🏼 🫱🏾‍🫲🏽 🫱🏾‍🫲🏿 🫱🏿‍🫲🏻 🫱🏿‍🫲🏼 🫱🏿‍🫲🏽 🫱🏿‍🫲🏾 🧔‍♂️ 🧔🏻‍♂️ 🧔🏼‍♂️ 🧔🏽‍♂️ 🧔🏾‍♂️ 🧔🏿‍♂️ 🧔‍♀️ 🧔🏻‍♀️ 🧔🏼‍♀️ 🧔🏽‍♀️ 🧔🏾‍♀️ 🧔🏿‍♀️ 👨‍🦰 👨🏻‍🦰 👨🏼‍🦰 👨🏽‍🦰 👨🏾‍🦰 👨🏿‍🦰 👨‍🦱 👨🏻‍🦱 👨🏼‍🦱 👨🏽‍🦱 👨🏾‍🦱 👨🏿‍🦱 👨‍🦳 👨🏻‍🦳 👨🏼‍🦳 👨🏽‍🦳 👨🏾‍🦳 👨🏿‍🦳 👨‍🦲 👨🏻‍🦲 👨🏼‍🦲 👨🏽‍🦲 👨🏾‍🦲 👨🏿‍🦲 👩‍🦰 👩🏻‍🦰 👩🏼‍🦰 👩🏽‍🦰 👩🏾‍🦰 👩🏿‍🦰 🧑‍🦰 🧑🏻‍🦰 🧑🏼‍🦰 🧑🏽‍🦰 🧑🏾‍🦰 🧑🏿‍🦰 👩‍🦱 👩🏻‍🦱 👩🏼‍🦱 👩🏽‍🦱 👩🏾‍🦱 👩🏿‍🦱 🧑‍🦱 🧑🏻‍🦱 🧑🏼‍🦱 🧑🏽‍🦱 🧑🏾‍🦱 🧑🏿‍🦱 👩‍🦳 👩🏻‍🦳 👩🏼‍🦳 👩🏽‍🦳 👩🏾‍🦳 👩🏿‍🦳 🧑‍🦳 🧑🏻‍🦳 🧑🏼‍🦳 🧑🏽‍🦳 🧑🏾‍🦳 🧑🏿‍🦳 👩‍🦲 👩🏻‍🦲 👩🏼‍🦲 👩🏽‍🦲 👩🏾‍🦲 👩🏿‍🦲 🧑‍🦲 🧑🏻‍🦲 🧑🏼‍🦲 🧑🏽‍🦲 🧑🏾‍🦲 🧑🏿‍🦲 👱‍♀️ 👱🏻‍♀️ 👱🏼‍♀️ 👱🏽‍♀️ 👱🏾‍♀️ 👱🏿‍♀️ 👱‍♂️ 👱🏻‍♂️ 👱🏼‍♂️ 👱🏽‍♂️ 👱🏾‍♂️ 👱🏿‍♂️ 🙍‍♂️ 🙍🏻‍♂️ 🙍🏼‍♂️ 🙍🏽‍♂️ 🙍🏾‍♂️ 🙍🏿‍♂️ 🙍‍♀️ 🙍🏻‍♀️ 🙍🏼‍♀️ 🙍🏽‍♀️ 🙍🏾‍♀️ 🙍🏿‍♀️ 🙎‍♂️ 🙎🏻‍♂️ 🙎🏼‍♂️ 🙎🏽‍♂️ 🙎🏾‍♂️ 🙎🏿‍♂️ 🙎‍♀️ 🙎🏻‍♀️ 🙎🏼‍♀️ 🙎🏽‍♀️ 🙎🏾‍♀️ 🙎🏿‍♀️ 🙅‍♂️ 🙅🏻‍♂️ 🙅🏼‍♂️ 🙅🏽‍♂️ 🙅🏾‍♂️ 🙅🏿‍♂️ 🙅‍♀️ 🙅🏻‍♀️ 🙅🏼‍♀️ 🙅🏽‍♀️ 🙅🏾‍♀️ 🙅🏿‍♀️ 🙆‍♂️ 🙆🏻‍♂️ 🙆🏼‍♂️ 🙆🏽‍♂️ 🙆🏾‍♂️ 🙆🏿‍♂️ 🙆‍♀️ 🙆🏻‍♀️ 🙆🏼‍♀️ 🙆🏽‍♀️ 🙆🏾‍♀️ 🙆🏿‍♀️ 💁‍♂️ 💁🏻‍♂️ 💁🏼‍♂️ 💁🏽‍♂️ 💁🏾‍♂️ 💁🏿‍♂️ 💁‍♀️ 💁🏻‍♀️ 💁🏼‍♀️ 💁🏽‍♀️ 💁🏾‍♀️ 💁🏿‍♀️ 🙋‍♂️ 🙋🏻‍♂️ 🙋🏼‍♂️ 🙋🏽‍♂️ 🙋🏾‍♂️ 🙋🏿‍♂️ 🙋‍♀️ 🙋🏻‍♀️ 🙋🏼‍♀️ 🙋🏽‍♀️ 🙋🏾‍♀️ 🙋🏿‍♀️ 🧏‍♂️ 🧏🏻‍♂️ 🧏🏼‍♂️ 🧏🏽‍♂️ 🧏🏾‍♂️ 🧏🏿‍♂️ 🧏‍♀️ 🧏🏻‍♀️ 🧏🏼‍♀️ 🧏🏽‍♀️ 🧏🏾‍♀️ 🧏🏿‍♀️ 🙇‍♂️ 🙇🏻‍♂️ 🙇🏼‍♂️ 🙇🏽‍♂️ 🙇🏾‍♂️ 🙇🏿‍♂️ 🙇‍♀️ 🙇🏻‍♀️ 🙇🏼‍♀️ 🙇🏽‍♀️ 🙇🏾‍♀️ 🙇🏿‍♀️ 🤦‍♂️ 🤦🏻‍♂️ 🤦🏼‍♂️ 🤦🏽‍♂️ 🤦🏾‍♂️ 🤦🏿‍♂️ 🤦‍♀️ 🤦🏻‍♀️ 🤦🏼‍♀️ 🤦🏽‍♀️ 🤦🏾‍♀️ 🤦🏿‍♀️ 🤷‍♂️ 🤷🏻‍♂️ 🤷🏼‍♂️ 🤷🏽‍♂️ 🤷🏾‍♂️ 🤷🏿‍♂️ 🤷‍♀️ 🤷🏻‍♀️ 🤷🏼‍♀️ 🤷🏽‍♀️ 🤷🏾‍♀️ 🤷🏿‍♀️ 🧑‍⚕️ 🧑🏻‍⚕️ 🧑🏼‍⚕️ 🧑🏽‍⚕️ 🧑🏾‍⚕️ 🧑🏿‍⚕️ 👨‍⚕️ 👨🏻‍⚕️ 👨🏼‍⚕️ 👨🏽‍⚕️ 👨🏾‍⚕️ 👨🏿‍⚕️ 👩‍⚕️ 👩🏻‍⚕️ 👩🏼‍⚕️ 👩🏽‍⚕️ 👩🏾‍⚕️ 👩🏿‍⚕️ 🧑‍🎓 🧑🏻‍🎓 🧑🏼‍🎓 🧑🏽‍🎓 🧑🏾‍🎓 🧑🏿‍🎓 👨‍🎓 👨🏻‍🎓 👨🏼‍🎓 👨🏽‍🎓 👨🏾‍🎓 👨🏿‍🎓 👩‍🎓 👩🏻‍🎓 👩🏼‍🎓 👩🏽‍🎓 👩🏾‍🎓 👩🏿‍🎓 🧑‍🏫 🧑🏻‍🏫 🧑🏼‍🏫 🧑🏽‍🏫 🧑🏾‍🏫 🧑🏿‍🏫 👨‍🏫 👨🏻‍🏫 👨🏼‍🏫 👨🏽‍🏫 👨🏾‍🏫 👨🏿‍🏫 👩‍🏫 👩🏻‍🏫 👩🏼‍🏫 👩🏽‍🏫 👩🏾‍🏫 👩🏿‍🏫 🧑‍⚖️ 🧑🏻‍⚖️ 🧑🏼‍⚖️ 🧑🏽‍⚖️ 🧑🏾‍⚖️ 🧑🏿‍⚖️ 👨‍⚖️ 👨🏻‍⚖️ 👨🏼‍⚖️ 👨🏽‍⚖️ 👨🏾‍⚖️ 👨🏿‍⚖️ 👩‍⚖️ 👩🏻‍⚖️ 👩🏼‍⚖️ 👩🏽‍⚖️ 👩🏾‍⚖️ 👩🏿‍⚖️ 🧑‍🌾 🧑🏻‍🌾 🧑🏼‍🌾 🧑🏽‍🌾 🧑🏾‍🌾 🧑🏿‍🌾 👨‍🌾 👨🏻‍🌾 👨🏼‍🌾 👨🏽‍🌾 👨🏾‍🌾 👨🏿‍🌾 👩‍🌾 👩🏻‍🌾 👩🏼‍🌾 👩🏽‍🌾 👩🏾‍🌾 👩🏿‍🌾 🧑‍🍳 🧑🏻‍🍳 🧑🏼‍🍳 🧑🏽‍🍳 🧑🏾‍🍳 🧑🏿‍🍳 👨‍🍳 👨🏻‍🍳 👨🏼‍🍳 👨🏽‍🍳 👨🏾‍🍳 👨🏿‍🍳 👩‍🍳 👩🏻‍🍳 👩🏼‍🍳 👩🏽‍🍳 👩🏾‍🍳 👩🏿‍🍳 🧑‍🔧 🧑🏻‍🔧 🧑🏼‍🔧 🧑🏽‍🔧 🧑🏾‍🔧 🧑🏿‍🔧 👨‍🔧 👨🏻‍🔧 👨🏼‍🔧 👨🏽‍🔧 👨🏾‍🔧 👨🏿‍🔧 👩‍🔧 👩🏻‍🔧 👩🏼‍🔧 👩🏽‍🔧 👩🏾‍🔧 👩🏿‍🔧 🧑‍🏭 🧑🏻‍🏭 🧑🏼‍🏭 🧑🏽‍🏭 🧑🏾‍🏭 🧑🏿‍🏭 👨‍🏭 👨🏻‍🏭 👨🏼‍🏭 👨🏽‍🏭 👨🏾‍🏭 👨🏿‍🏭 👩‍🏭 👩🏻‍🏭 👩🏼‍🏭 👩🏽‍🏭 👩🏾‍🏭 👩🏿‍🏭 🧑‍💼 🧑🏻‍💼 🧑🏼‍💼 🧑🏽‍💼 🧑🏾‍💼 🧑🏿‍💼 👨‍💼 👨🏻‍💼 👨🏼‍💼 👨🏽‍💼 👨🏾‍💼 👨🏿‍💼 👩‍💼 👩🏻‍💼 👩🏼‍💼 👩🏽‍💼 👩🏾‍💼 👩🏿‍💼 🧑‍🔬 🧑🏻‍🔬 🧑🏼‍🔬 🧑🏽‍🔬 🧑🏾‍🔬 🧑🏿‍🔬 👨‍🔬 👨🏻‍🔬 👨🏼‍🔬 👨🏽‍🔬 👨🏾‍🔬 👨🏿‍🔬 👩‍🔬 👩🏻‍🔬 👩🏼‍🔬 👩🏽‍🔬 👩🏾‍🔬 👩🏿‍🔬 🧑‍💻 🧑🏻‍💻 🧑🏼‍💻 🧑🏽‍💻 🧑🏾‍💻 🧑🏿‍💻 👨‍💻 👨🏻‍💻 👨🏼‍💻 👨🏽‍💻 👨🏾‍💻 👨🏿‍💻 👩‍💻 👩🏻‍💻 👩🏼‍💻 👩🏽‍💻 👩🏾‍💻 👩🏿‍💻 🧑‍🎤 🧑🏻‍🎤 🧑🏼‍🎤 🧑🏽‍🎤 🧑🏾‍🎤 🧑🏿‍🎤 👨‍🎤 👨🏻‍🎤 👨🏼‍🎤 👨🏽‍🎤 👨🏾‍🎤 👨🏿‍🎤 👩‍🎤 👩🏻‍🎤 👩🏼‍🎤 👩🏽‍🎤 👩🏾‍🎤 👩🏿‍🎤 🧑‍🎨 🧑🏻‍🎨 🧑🏼‍🎨 🧑🏽‍🎨 🧑🏾‍🎨 🧑🏿‍🎨 👨‍🎨 👨🏻‍🎨 👨🏼‍🎨 👨🏽‍🎨 👨🏾‍🎨 👨🏿‍🎨 👩‍🎨 👩🏻‍🎨 👩🏼‍🎨 👩🏽‍🎨 👩🏾‍🎨 👩🏿‍🎨 🧑‍✈️ 🧑🏻‍✈️ 🧑🏼‍✈️ 🧑🏽‍✈️ 🧑🏾‍✈️ 🧑🏿‍✈️ 👨‍✈️ 👨🏻‍✈️ 👨🏼‍✈️ 👨🏽‍✈️ 👨🏾‍✈️ 👨🏿‍✈️ 👩‍✈️ 👩🏻‍✈️ 👩🏼‍✈️ 👩🏽‍✈️ 👩🏾‍✈️ 👩🏿‍✈️ 🧑‍🚀 🧑🏻‍🚀 🧑🏼‍🚀 🧑🏽‍🚀 🧑🏾‍🚀 🧑🏿‍🚀 👨‍🚀 👨🏻‍🚀 👨🏼‍🚀 👨🏽‍🚀 👨🏾‍🚀 👨🏿‍🚀 👩‍🚀 👩🏻‍🚀 👩🏼‍🚀 👩🏽‍🚀 👩🏾‍🚀 👩🏿‍🚀 🧑‍🚒 🧑🏻‍🚒 🧑🏼‍🚒 🧑🏽‍🚒 🧑🏾‍🚒 🧑🏿‍🚒 👨‍🚒 👨🏻‍🚒 👨🏼‍🚒 👨🏽‍🚒 👨🏾‍🚒 👨🏿‍🚒 👩‍🚒 👩🏻‍🚒 👩🏼‍🚒 👩🏽‍🚒 👩🏾‍🚒 👩🏿‍🚒 👮‍♂️ 👮🏻‍♂️ 👮🏼‍♂️ 👮🏽‍♂️ 👮🏾‍♂️ 👮🏿‍♂️ 👮‍♀️ 👮🏻‍♀️ 👮🏼‍♀️ 👮🏽‍♀️ 👮🏾‍♀️ 👮🏿‍♀️ 🕵️‍♂️ 🕵🏻‍♂️ 🕵🏼‍♂️ 🕵🏽‍♂️ 🕵🏾‍♂️ 🕵🏿‍♂️ 🕵️‍♀️ 🕵🏻‍♀️ 🕵🏼‍♀️ 🕵🏽‍♀️ 🕵🏾‍♀️ 🕵🏿‍♀️ 💂‍♂️ 💂🏻‍♂️ 💂🏼‍♂️ 💂🏽‍♂️ 💂🏾‍♂️ 💂🏿‍♂️ 💂‍♀️ 💂🏻‍♀️ 💂🏼‍♀️ 💂🏽‍♀️ 💂🏾‍♀️ 💂🏿‍♀️ 👷‍♂️ 👷🏻‍♂️ 👷🏼‍♂️ 👷🏽‍♂️ 👷🏾‍♂️ 👷🏿‍♂️ 👷‍♀️ 👷🏻‍♀️ 👷🏼‍♀️ 👷🏽‍♀️ 👷🏾‍♀️ 👷🏿‍♀️ 👳‍♂️ 👳🏻‍♂️ 👳🏼‍♂️ 👳🏽‍♂️ 👳🏾‍♂️ 👳🏿‍♂️ 👳‍♀️ 👳🏻‍♀️ 👳🏼‍♀️ 👳🏽‍♀️ 👳🏾‍♀️ 👳🏿‍♀️ 🤵‍♂️ 🤵🏻‍♂️ 🤵🏼‍♂️ 🤵🏽‍♂️ 🤵🏾‍♂️ 🤵🏿‍♂️ 🤵‍♀️ 🤵🏻‍♀️ 🤵🏼‍♀️ 🤵🏽‍♀️ 🤵🏾‍♀️ 🤵🏿‍♀️ 👰‍♂️ 👰🏻‍♂️ 👰🏼‍♂️ 👰🏽‍♂️ 👰🏾‍♂️ 👰🏿‍♂️ 👰‍♀️ 👰🏻‍♀️ 👰🏼‍♀️ 👰🏽‍♀️ 👰🏾‍♀️ 👰🏿‍♀️ 👩‍🍼 👩🏻‍🍼 👩🏼‍🍼 👩🏽‍🍼 👩🏾‍🍼 👩🏿‍🍼 👨‍🍼 👨🏻‍🍼 👨🏼‍🍼 👨🏽‍🍼 👨🏾‍🍼 👨🏿‍🍼 🧑‍🍼 🧑🏻‍🍼 🧑🏼‍🍼 🧑🏽‍🍼 🧑🏾‍🍼 🧑🏿‍🍼 🧑‍🎄 🧑🏻‍🎄 🧑🏼‍🎄 🧑🏽‍🎄 🧑🏾‍🎄 🧑🏿‍🎄 🦸‍♂️ 🦸🏻‍♂️ 🦸🏼‍♂️ 🦸🏽‍♂️ 🦸🏾‍♂️ 🦸🏿‍♂️ 🦸‍♀️ 🦸🏻‍♀️ 🦸🏼‍♀️ 🦸🏽‍♀️ 🦸🏾‍♀️ 🦸🏿‍♀️ 🦹‍♂️ 🦹🏻‍♂️ 🦹🏼‍♂️ 🦹🏽‍♂️ 🦹🏾‍♂️ 🦹🏿‍♂️ 🦹‍♀️ 🦹🏻‍♀️ 🦹🏼‍♀️ 🦹🏽‍♀️ 🦹🏾‍♀️ 🦹🏿‍♀️ 🧙‍♂️ 🧙🏻‍♂️ 🧙🏼‍♂️ 🧙🏽‍♂️ 🧙🏾‍♂️ 🧙🏿‍♂️ 🧙‍♀️ 🧙🏻‍♀️ 🧙🏼‍♀️ 🧙🏽‍♀️ 🧙🏾‍♀️ 🧙🏿‍♀️ 🧚‍♂️ 🧚🏻‍♂️ 🧚🏼‍♂️ 🧚🏽‍♂️ 🧚🏾‍♂️ 🧚🏿‍♂️ 🧚‍♀️ 🧚🏻‍♀️ 🧚🏼‍♀️ 🧚🏽‍♀️ 🧚🏾‍♀️ 🧚🏿‍♀️ 🧛‍♂️ 🧛🏻‍♂️ 🧛🏼‍♂️ 🧛🏽‍♂️ 🧛🏾‍♂️ 🧛🏿‍♂️ 🧛‍♀️ 🧛🏻‍♀️ 🧛🏼‍♀️ 🧛🏽‍♀️ 🧛🏾‍♀️ 🧛🏿‍♀️ 🧜‍♂️ 🧜🏻‍♂️ 🧜🏼‍♂️ 🧜🏽‍♂️ 🧜🏾‍♂️ 🧜🏿‍♂️ 🧜‍♀️ 🧜🏻‍♀️ 🧜🏼‍♀️ 🧜🏽‍♀️ 🧜🏾‍♀️ 🧜🏿‍♀️ 🧝‍♂️ 🧝🏻‍♂️ 🧝🏼‍♂️ 🧝🏽‍♂️ 🧝🏾‍♂️ 🧝🏿‍♂️ 🧝‍♀️ 🧝🏻‍♀️ 🧝🏼‍♀️ 🧝🏽‍♀️ 🧝🏾‍♀️ 🧝🏿‍♀️ 🧞‍♂️ 🧞‍♀️ 🧟‍♂️ 🧟‍♀️ 💆‍♂️ 💆🏻‍♂️ 💆🏼‍♂️ 💆🏽‍♂️ 💆🏾‍♂️ 💆🏿‍♂️ 💆‍♀️ 💆🏻‍♀️ 💆🏼‍♀️ 💆🏽‍♀️ 💆🏾‍♀️ 💆🏿‍♀️ 💇‍♂️ 💇🏻‍♂️ 💇🏼‍♂️ 💇🏽‍♂️ 💇🏾‍♂️ 💇🏿‍♂️ 💇‍♀️ 💇🏻‍♀️ 💇🏼‍♀️ 💇🏽‍♀️ 💇🏾‍♀️ 💇🏿‍♀️ 🚶‍♂️ 🚶🏻‍♂️ 🚶🏼‍♂️ 🚶🏽‍♂️ 🚶🏾‍♂️ 🚶🏿‍♂️ 🚶‍♀️ 🚶🏻‍♀️ 🚶🏼‍♀️ 🚶🏽‍♀️ 🚶🏾‍♀️ 🚶🏿‍♀️ 🧍‍♂️ 🧍🏻‍♂️ 🧍🏼‍♂️ 🧍🏽‍♂️ 🧍🏾‍♂️ 🧍🏿‍♂️ 🧍‍♀️ 🧍🏻‍♀️ 🧍🏼‍♀️ 🧍🏽‍♀️ 🧍🏾‍♀️ 🧍🏿‍♀️ 🧎‍♂️ 🧎🏻‍♂️ 🧎🏼‍♂️ 🧎🏽‍♂️ 🧎🏾‍♂️ 🧎🏿‍♂️ 🧎‍♀️ 🧎🏻‍♀️ 🧎🏼‍♀️ 🧎🏽‍♀️ 🧎🏾‍♀️ 🧎🏿‍♀️ 🧑‍🦯 🧑🏻‍🦯 🧑🏼‍🦯 🧑🏽‍🦯 🧑🏾‍🦯 🧑🏿‍🦯 👨‍🦯 👨🏻‍🦯 👨🏼‍🦯 👨🏽‍🦯 👨🏾‍🦯 👨🏿‍🦯 👩‍🦯 👩🏻‍🦯 👩🏼‍🦯 👩🏽‍🦯 👩🏾‍🦯 👩🏿‍🦯 🧑‍🦼 🧑🏻‍🦼 🧑🏼‍🦼 🧑🏽‍🦼 🧑🏾‍🦼 🧑🏿‍🦼 👨‍🦼 👨🏻‍🦼 👨🏼‍🦼 👨🏽‍🦼 👨🏾‍🦼 👨🏿‍🦼 👩‍🦼 👩🏻‍🦼 👩🏼‍🦼 👩🏽‍🦼 👩🏾‍🦼 👩🏿‍🦼 🧑‍🦽 🧑🏻‍🦽 🧑🏼‍🦽 🧑🏽‍🦽 🧑🏾‍🦽 🧑🏿‍🦽 👨‍🦽 👨🏻‍🦽 👨🏼‍🦽 👨🏽‍🦽 👨🏾‍🦽 👨🏿‍🦽 👩‍🦽 👩🏻‍🦽 👩🏼‍🦽 👩🏽‍🦽 👩🏾‍🦽 👩🏿‍🦽 🏃‍♂️ 🏃🏻‍♂️ 🏃🏼‍♂️ 🏃🏽‍♂️ 🏃🏾‍♂️ 🏃🏿‍♂️ 🏃‍♀️ 🏃🏻‍♀️ 🏃🏼‍♀️ 🏃🏽‍♀️ 🏃🏾‍♀️ 🏃🏿‍♀️ 👯‍♂️ 👯‍♀️ 🧖‍♂️ 🧖🏻‍♂️ 🧖🏼‍♂️ 🧖🏽‍♂️ 🧖🏾‍♂️ 🧖🏿‍♂️ 🧖‍♀️ 🧖🏻‍♀️ 🧖🏼‍♀️ 🧖🏽‍♀️ 🧖🏾‍♀️ 🧖🏿‍♀️ 🧗‍♂️ 🧗🏻‍♂️ 🧗🏼‍♂️ 🧗🏽‍♂️ 🧗🏾‍♂️ 🧗🏿‍♂️ 🧗‍♀️ 🧗🏻‍♀️ 🧗🏼‍♀️ 🧗🏽‍♀️ 🧗🏾‍♀️ 🧗🏿‍♀️ 🏌️‍♂️ 🏌🏻‍♂️ 🏌🏼‍♂️ 🏌🏽‍♂️ 🏌🏾‍♂️ 🏌🏿‍♂️ 🏌️‍♀️ 🏌🏻‍♀️ 🏌🏼‍♀️ 🏌🏽‍♀️ 🏌🏾‍♀️ 🏌🏿‍♀️ 🏄‍♂️ 🏄🏻‍♂️ 🏄🏼‍♂️ 🏄🏽‍♂️ 🏄🏾‍♂️ 🏄🏿‍♂️ 🏄‍♀️ 🏄🏻‍♀️ 🏄🏼‍♀️ 🏄🏽‍♀️ 🏄🏾‍♀️ 🏄🏿‍♀️ 🚣‍♂️ 🚣🏻‍♂️ 🚣🏼‍♂️ 🚣🏽‍♂️ 🚣🏾‍♂️ 🚣🏿‍♂️ 🚣‍♀️ 🚣🏻‍♀️ 🚣🏼‍♀️ 🚣🏽‍♀️ 🚣🏾‍♀️ 🚣🏿‍♀️ 🏊‍♂️ 🏊🏻‍♂️ 🏊🏼‍♂️ 🏊🏽‍♂️ 🏊🏾‍♂️ 🏊🏿‍♂️ 🏊‍♀️ 🏊🏻‍♀️ 🏊🏼‍♀️ 🏊🏽‍♀️ 🏊🏾‍♀️ 🏊🏿‍♀️ ⛹️‍♂️ ⛹🏻‍♂️ ⛹🏼‍♂️ ⛹🏽‍♂️ ⛹🏾‍♂️ ⛹🏿‍♂️ ⛹️‍♀️ ⛹🏻‍♀️ ⛹🏼‍♀️ ⛹🏽‍♀️ ⛹🏾‍♀️ ⛹🏿‍♀️ 🏋️‍♂️ 🏋🏻‍♂️ 🏋🏼‍♂️ 🏋🏽‍♂️ 🏋🏾‍♂️ 🏋🏿‍♂️ 🏋️‍♀️ 🏋🏻‍♀️ 🏋🏼‍♀️ 🏋🏽‍♀️ 🏋🏾‍♀️ 🏋🏿‍♀️ 🚴‍♂️ 🚴🏻‍♂️ 🚴🏼‍♂️ 🚴🏽‍♂️ 🚴🏾‍♂️ 🚴🏿‍♂️ 🚴‍♀️ 🚴🏻‍♀️ 🚴🏼‍♀️ 🚴🏽‍♀️ 🚴🏾‍♀️ 🚴🏿‍♀️ 🚵‍♂️ 🚵🏻‍♂️ 🚵🏼‍♂️ 🚵🏽‍♂️ 🚵🏾‍♂️ 🚵🏿‍♂️ 🚵‍♀️ 🚵🏻‍♀️ 🚵🏼‍♀️ 🚵🏽‍♀️ 🚵🏾‍♀️ 🚵🏿‍♀️ 🤸‍♂️ 🤸🏻‍♂️ 🤸🏼‍♂️ 🤸🏽‍♂️ 🤸🏾‍♂️ 🤸🏿‍♂️ 🤸‍♀️ 🤸🏻‍♀️ 🤸🏼‍♀️ 🤸🏽‍♀️ 🤸🏾‍♀️ 🤸🏿‍♀️ 🤼‍♂️ 🤼‍♀️ 🤽‍♂️ 🤽🏻‍♂️ 🤽🏼‍♂️ 🤽🏽‍♂️ 🤽🏾‍♂️ 🤽🏿‍♂️ 🤽‍♀️ 🤽🏻‍♀️ 🤽🏼‍♀️ 🤽🏽‍♀️ 🤽🏾‍♀️ 🤽🏿‍♀️ 🤾‍♂️ 🤾🏻‍♂️ 🤾🏼‍♂️ 🤾🏽‍♂️ 🤾🏾‍♂️ 🤾🏿‍♂️ 🤾‍♀️ 🤾🏻‍♀️ 🤾🏼‍♀️ 🤾🏽‍♀️ 🤾🏾‍♀️ 🤾🏿‍♀️ 🤹‍♂️ 🤹🏻‍♂️ 🤹🏼‍♂️ 🤹🏽‍♂️ 🤹🏾‍♂️ 🤹🏿‍♂️ 🤹‍♀️ 🤹🏻‍♀️ 🤹🏼‍♀️ 🤹🏽‍♀️ 🤹🏾‍♀️ 🤹🏿‍♀️ 🧘‍♂️ 🧘🏻‍♂️ 🧘🏼‍♂️ 🧘🏽‍♂️ 🧘🏾‍♂️ 🧘🏿‍♂️ 🧘‍♀️ 🧘🏻‍♀️ 🧘🏼‍♀️ 🧘🏽‍♀️ 🧘🏾‍♀️ 🧘🏿‍♀️ 🧑‍🤝‍🧑 🧑🏻‍🤝‍🧑🏻 🧑🏻‍🤝‍🧑🏼 🧑🏻‍🤝‍🧑🏽 🧑🏻‍🤝‍🧑🏾 🧑🏻‍🤝‍🧑🏿 🧑🏼‍🤝‍🧑🏻 🧑🏼‍🤝‍🧑🏼 🧑🏼‍🤝‍🧑🏽 🧑🏼‍🤝‍🧑🏾 🧑🏼‍🤝‍🧑🏿 🧑🏽‍🤝‍🧑🏻 🧑🏽‍🤝‍🧑🏼 🧑🏽‍🤝‍🧑🏽 🧑🏽‍🤝‍🧑🏾 🧑🏽‍🤝‍🧑🏿 🧑🏾‍🤝‍🧑🏻 🧑🏾‍🤝‍🧑🏼 🧑🏾‍🤝‍🧑🏽 🧑🏾‍🤝‍🧑🏾 🧑🏾‍🤝‍🧑🏿 🧑🏿‍🤝‍🧑🏻 🧑🏿‍🤝‍🧑🏼 🧑🏿‍🤝‍🧑🏽 🧑🏿‍🤝‍🧑🏾 🧑🏿‍🤝‍🧑🏿 👩🏻‍🤝‍👩🏼 👩🏻‍🤝‍👩🏽 👩🏻‍🤝‍👩🏾 👩🏻‍🤝‍👩🏿 👩🏼‍🤝‍👩🏻 👩🏼‍🤝‍👩🏽 👩🏼‍🤝‍👩🏾 👩🏼‍🤝‍👩🏿 👩🏽‍🤝‍👩🏻 👩🏽‍🤝‍👩🏼 👩🏽‍🤝‍👩🏾 👩🏽‍🤝‍👩🏿 👩🏾‍🤝‍👩🏻 👩🏾‍🤝‍👩🏼 👩🏾‍🤝‍👩🏽 👩🏾‍🤝‍👩🏿 👩🏿‍🤝‍👩🏻 👩🏿‍🤝‍👩🏼 👩🏿‍🤝‍👩🏽 👩🏿‍🤝‍👩🏾 👩🏻‍🤝‍👨🏼 👩🏻‍🤝‍👨🏽 👩🏻‍🤝‍👨🏾 👩🏻‍🤝‍👨🏿 👩🏼‍🤝‍👨🏻 👩🏼‍🤝‍👨🏽 👩🏼‍🤝‍👨🏾 👩🏼‍🤝‍👨🏿 👩🏽‍🤝‍👨🏻 👩🏽‍🤝‍👨🏼 👩🏽‍🤝‍👨🏾 👩🏽‍🤝‍👨🏿 👩🏾‍🤝‍👨🏻 👩🏾‍🤝‍👨🏼 👩🏾‍🤝‍👨🏽 👩🏾‍🤝‍👨🏿 👩🏿‍🤝‍👨🏻 👩🏿‍🤝‍👨🏼 👩🏿‍🤝‍👨🏽 👩🏿‍🤝‍👨🏾 👨🏻‍🤝‍👨🏼 👨🏻‍🤝‍👨🏽 👨🏻‍🤝‍👨🏾 👨🏻‍🤝‍👨🏿 👨🏼‍🤝‍👨🏻 👨🏼‍🤝‍👨🏽 👨🏼‍🤝‍👨🏾 👨🏼‍🤝‍👨🏿 👨🏽‍🤝‍👨🏻 👨🏽‍🤝‍👨🏼 👨🏽‍🤝‍👨🏾 👨🏽‍🤝‍👨🏿 👨🏾‍🤝‍👨🏻 👨🏾‍🤝‍👨🏼 👨🏾‍🤝‍👨🏽 👨🏾‍🤝‍👨🏿 👨🏿‍🤝‍👨🏻 👨🏿‍🤝‍👨🏼 👨🏿‍🤝‍👨🏽 👨🏿‍🤝‍👨🏾 💏 🧑🏻‍❤️‍💋‍🧑🏼 🧑🏻‍❤️‍💋‍🧑🏽 🧑🏻‍❤️‍💋‍🧑🏾 🧑🏻‍❤️‍💋‍🧑🏿 🧑🏼‍❤️‍💋‍🧑🏻 🧑🏼‍❤️‍💋‍🧑🏽 🧑🏼‍❤️‍💋‍🧑🏾 🧑🏼‍❤️‍💋‍🧑🏿 🧑🏽‍❤️‍💋‍🧑🏻 🧑🏽‍❤️‍💋‍🧑🏼 🧑🏽‍❤️‍💋‍🧑🏾 🧑🏽‍❤️‍💋‍🧑🏿 🧑🏾‍❤️‍💋‍🧑🏻 🧑🏾‍❤️‍💋‍🧑🏼 🧑🏾‍❤️‍💋‍🧑🏽 🧑🏾‍❤️‍💋‍🧑🏿 🧑🏿‍❤️‍💋‍🧑🏻 🧑🏿‍❤️‍💋‍🧑🏼 🧑🏿‍❤️‍💋‍🧑🏽 🧑🏿‍❤️‍💋‍🧑🏾 👩‍❤️‍💋‍👨 👩🏻‍❤️‍💋‍👨🏻 👩🏻‍❤️‍💋‍👨🏼 👩🏻‍❤️‍💋‍👨🏽 👩🏻‍❤️‍💋‍👨🏾 👩🏻‍❤️‍💋‍👨🏿 👩🏼‍❤️‍💋‍👨🏻 👩🏼‍❤️‍💋‍👨🏼 👩🏼‍❤️‍💋‍👨🏽 👩🏼‍❤️‍💋‍👨🏾 👩🏼‍❤️‍💋‍👨🏿 👩🏽‍❤️‍💋‍👨🏻 👩🏽‍❤️‍💋‍👨🏼 👩🏽‍❤️‍💋‍👨🏽 👩🏽‍❤️‍💋‍👨🏾 👩🏽‍❤️‍💋‍👨🏿 👩🏾‍❤️‍💋‍👨🏻 👩🏾‍❤️‍💋‍👨🏼 👩🏾‍❤️‍💋‍👨🏽 👩🏾‍❤️‍💋‍👨🏾 👩🏾‍❤️‍💋‍👨🏿 👩🏿‍❤️‍💋‍👨🏻 👩🏿‍❤️‍💋‍👨🏼 👩🏿‍❤️‍💋‍👨🏽 👩🏿‍❤️‍💋‍👨🏾 👩🏿‍❤️‍💋‍👨🏿 👨‍❤️‍💋‍👨 👨🏻‍❤️‍💋‍👨🏻 👨🏻‍❤️‍💋‍👨🏼 👨🏻‍❤️‍💋‍👨🏽 👨🏻‍❤️‍💋‍👨🏾 👨🏻‍❤️‍💋‍👨🏿 👨🏼‍❤️‍💋‍👨🏻 👨🏼‍❤️‍💋‍👨🏼 👨🏼‍❤️‍💋‍👨🏽 👨🏼‍❤️‍💋‍👨🏾 👨🏼‍❤️‍💋‍👨🏿 👨🏽‍❤️‍💋‍👨🏻 👨🏽‍❤️‍💋‍👨🏼 👨🏽‍❤️‍💋‍👨🏽 👨🏽‍❤️‍💋‍👨🏾 👨🏽‍❤️‍💋‍👨🏿 👨🏾‍❤️‍💋‍👨🏻 👨🏾‍❤️‍💋‍👨🏼 👨🏾‍❤️‍💋‍👨🏽 👨🏾‍❤️‍💋‍👨🏾 👨🏾‍❤️‍💋‍👨🏿 👨🏿‍❤️‍💋‍👨🏻 👨🏿‍❤️‍💋‍👨🏼 👨🏿‍❤️‍💋‍👨🏽 👨🏿‍❤️‍💋‍👨🏾 👨🏿‍❤️‍💋‍👨🏿 👩‍❤️‍💋‍👩 👩🏻‍❤️‍💋‍👩🏻 👩🏻‍❤️‍💋‍👩🏼 👩🏻‍❤️‍💋‍👩🏽 👩🏻‍❤️‍💋‍👩🏾 👩🏻‍❤️‍💋‍👩🏿 👩🏼‍❤️‍💋‍👩🏻 👩🏼‍❤️‍💋‍👩🏼 👩🏼‍❤️‍💋‍👩🏽 👩🏼‍❤️‍💋‍👩🏾 👩🏼‍❤️‍💋‍👩🏿 👩🏽‍❤️‍💋‍👩🏻 👩🏽‍❤️‍💋‍👩🏼 👩🏽‍❤️‍💋‍👩🏽 👩🏽‍❤️‍💋‍👩🏾 👩🏽‍❤️‍💋‍👩🏿 👩🏾‍❤️‍💋‍👩🏻 👩🏾‍❤️‍💋‍👩🏼 👩🏾‍❤️‍💋‍👩🏽 👩🏾‍❤️‍💋‍👩🏾 👩🏾‍❤️‍💋‍👩🏿 👩🏿‍❤️‍💋‍👩🏻 👩🏿‍❤️‍💋‍👩🏼 👩🏿‍❤️‍💋‍👩🏽 👩🏿‍❤️‍💋‍👩🏾 👩🏿‍❤️‍💋‍👩🏿 💑 🧑🏻‍❤️‍🧑🏼 🧑🏻‍❤️‍🧑🏽 🧑🏻‍❤️‍🧑🏾 🧑🏻‍❤️‍🧑🏿 🧑🏼‍❤️‍🧑🏻 🧑🏼‍❤️‍🧑🏽 🧑🏼‍❤️‍🧑🏾 🧑🏼‍❤️‍🧑🏿 🧑🏽‍❤️‍🧑🏻 🧑🏽‍❤️‍🧑🏼 🧑🏽‍❤️‍🧑🏾 🧑🏽‍❤️‍🧑🏿 🧑🏾‍❤️‍🧑🏻 🧑🏾‍❤️‍🧑🏼 🧑🏾‍❤️‍🧑🏽 🧑🏾‍❤️‍🧑🏿 🧑🏿‍❤️‍🧑🏻 🧑🏿‍❤️‍🧑🏼 🧑🏿‍❤️‍🧑🏽 🧑🏿‍❤️‍🧑🏾 👩‍❤️‍👨 👩🏻‍❤️‍👨🏻 👩🏻‍❤️‍👨🏼 👩🏻‍❤️‍👨🏽 👩🏻‍❤️‍👨🏾 👩🏻‍❤️‍👨🏿 👩🏼‍❤️‍👨🏻 👩🏼‍❤️‍👨🏼 👩🏼‍❤️‍👨🏽 👩🏼‍❤️‍👨🏾 👩🏼‍❤️‍👨🏿 👩🏽‍❤️‍👨🏻 👩🏽‍❤️‍👨🏼 👩🏽‍❤️‍👨🏽 👩🏽‍❤️‍👨🏾 👩🏽‍❤️‍👨🏿 👩🏾‍❤️‍👨🏻 👩🏾‍❤️‍👨🏼 👩🏾‍❤️‍👨🏽 👩🏾‍❤️‍👨🏾 👩🏾‍❤️‍👨🏿 👩🏿‍❤️‍👨🏻 👩🏿‍❤️‍👨🏼 👩🏿‍❤️‍👨🏽 👩🏿‍❤️‍👨🏾 👩🏿‍❤️‍👨🏿 👨‍❤️‍👨 👨🏻‍❤️‍👨🏻 👨🏻‍❤️‍👨🏼 👨🏻‍❤️‍👨🏽 👨🏻‍❤️‍👨🏾 👨🏻‍❤️‍👨🏿 👨🏼‍❤️‍👨🏻 👨🏼‍❤️‍👨🏼 👨🏼‍❤️‍👨🏽 👨🏼‍❤️‍👨🏾 👨🏼‍❤️‍👨🏿 👨🏽‍❤️‍👨🏻 👨🏽‍❤️‍👨🏼 👨🏽‍❤️‍👨🏽 👨🏽‍❤️‍👨🏾 👨🏽‍❤️‍👨🏿 👨🏾‍❤️‍👨🏻 👨🏾‍❤️‍👨🏼 👨🏾‍❤️‍👨🏽 👨🏾‍❤️‍👨🏾 👨🏾‍❤️‍👨🏿 👨🏿‍❤️‍👨🏻 👨🏿‍❤️‍👨🏼 👨🏿‍❤️‍👨🏽 👨🏿‍❤️‍👨🏾 👨🏿‍❤️‍👨🏿 👩‍❤️‍👩 👩🏻‍❤️‍👩🏻 👩🏻‍❤️‍👩🏼 👩🏻‍❤️‍👩🏽 👩🏻‍❤️‍👩🏾 👩🏻‍❤️‍👩🏿 👩🏼‍❤️‍👩🏻 👩🏼‍❤️‍👩🏼 👩🏼‍❤️‍👩🏽 👩🏼‍❤️‍👩🏾 👩🏼‍❤️‍👩🏿 👩🏽‍❤️‍👩🏻 👩🏽‍❤️‍👩🏼 👩🏽‍❤️‍👩🏽 👩🏽‍❤️‍👩🏾 👩🏽‍❤️‍👩🏿 👩🏾‍❤️‍👩🏻 👩🏾‍❤️‍👩🏼 👩🏾‍❤️‍👩🏽 👩🏾‍❤️‍👩🏾 👩🏾‍❤️‍👩🏿 👩🏿‍❤️‍👩🏻 👩🏿‍❤️‍👩🏼 👩🏿‍❤️‍👩🏽 👩🏿‍❤️‍👩🏾 👩🏿‍❤️‍👩🏿 👪 👨‍👩‍👦 👨‍👩‍👧 👨‍👩‍👧‍👦 👨‍👩‍👦‍👦 👨‍👩‍👧‍👧 👨‍👨‍👦 👨‍👨‍👧 👨‍👨‍👧‍👦 👨‍👨‍👦‍👦 👨‍👨‍👧‍👧 👩‍👩‍👦 👩‍👩‍👧 👩‍👩‍👧‍👦 👩‍👩‍👦‍👦 👩‍👩‍👧‍👧 👨‍👦 👨‍👦‍👦 👨‍👧 👨‍👧‍👦 👨‍👧‍👧 👩‍👦 👩‍👦‍👦 👩‍👧 👩‍👧‍👦 👩‍👧‍👧 🐕‍🦺 🐈‍⬛ 🐻‍❄️ 🐦‍⬛ 🏳️‍🌈 🏳️‍⚧️ 🏴‍☠️ </p>`,frontmatter:{},note:`Full reference: https://unicode.org/Public/emoji/15.0/
ZJW: zwidje https://unicode.org/emoji/charts/emoji-zwj-sequences.html`,index:4,start:79,end:89},filepath:"/home/ben/Workspace/demystifying-unicode/pages/04-quirks.md",noteHTML:`<p>Full reference: https://unicode.org/Public/emoji/15.0/
ZJW: zwidje https://unicode.org/emoji/charts/emoji-zwj-sequences.html</p>
`,id:52,no:53},__clicksElements:[],__preloaded:!1}},{path:"54",name:"page-54",component:v4,meta:{hide:!1,srcSequence:"./pages/04-quirks.md",slide:{raw:`
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

TL;DR; you shouldn't expect any ligatures/digraphs to be added to Unicode any time soon.`,frontmatter:{hide:!1,srcSequence:"./pages/04-quirks.md"},note:"http://unicode.org/faq/ligature_digraph.html",index:53,start:90,end:109,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/04-quirks.md",raw:`
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

TL;DR; you shouldn't expect any ligatures/digraphs to be added to Unicode any time soon.`,frontmatter:{},note:"http://unicode.org/faq/ligature_digraph.html",index:5,start:90,end:109},filepath:"/home/ben/Workspace/demystifying-unicode/pages/04-quirks.md",noteHTML:`<p>http://unicode.org/faq/ligature_digraph.html</p>
`,id:53,no:54},__clicksElements:[],__preloaded:!1}},{path:"55",name:"page-55",component:B4,meta:{hide:!1,srcSequence:"./pages/04-quirks.md",slide:{raw:`
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
- local (gbeng, etc)`,frontmatter:{hide:!1,srcSequence:"./pages/04-quirks.md"},index:54,start:110,end:126,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/04-quirks.md",raw:`
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
- local (gbeng, etc)`,frontmatter:{},index:6,start:110,end:126},filepath:"/home/ben/Workspace/demystifying-unicode/pages/04-quirks.md",noteHTML:"",id:54,no:55},__clicksElements:[],__preloaded:!1}},{path:"56",name:"page-56",component:D4,meta:{hide:!1,srcSequence:"./pages/04-quirks.md",slide:{raw:`
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
\\uE0001-\\uE007F`,index:55,start:127,end:164,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/04-quirks.md",raw:`
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
\\uE0001-\\uE007F`,index:7,start:127,end:164},filepath:"/home/ben/Workspace/demystifying-unicode/pages/04-quirks.md",noteHTML:`<p>Unicode tags: https://en.wikipedia.org/wiki/Tags_(Unicode_block)
\\uE0001-\\uE007F</p>
`,id:55,no:56},__clicksElements:[],__preloaded:!1}},{path:"57",name:"page-57",component:O4,meta:{layout:"cover",hideInToc:!0,slide:{raw:`---
layout: cover
hideInToc: true
---

# THE END
`,title:"THE END",level:1,content:"# THE END",frontmatter:{layout:"cover",hideInToc:!0},index:56,start:58,end:65,noteHTML:"",filepath:"/home/ben/Workspace/demystifying-unicode/slides.md",id:56,no:57},__clicksElements:[],__preloaded:!1}}],P4=[],Ye=U4,mo=[{name:"play",path:"/",component:j3,children:[...Ye,...P4]},{name:"print",path:"/print",component:yA},{path:"",redirect:{path:"/1"}},{path:"/:pathMatch(.*)",redirect:{path:"/1"}}];{let e=function(n){if(!yo.remote||yo.remote===n.query.password)return!0;if(yo.remote&&n.query.password===void 0){const s=prompt("Enter password");if(yo.remote===s)return!0}return n.params.no?{path:`/${n.params.no}`}:{path:""}};mo.push({path:"/presenter/print",component:()=>Rn(()=>import("./PresenterPrint-21fd80c5.js"),["assets/PresenterPrint-21fd80c5.js","assets/NoteDisplay-d072103f.js"])}),mo.push({name:"notes",path:"/notes",component:()=>Rn(()=>import("./NotesView-faff7cf3.js"),["assets/NotesView-faff7cf3.js","assets/NoteDisplay-d072103f.js"]),beforeEnter:e}),mo.push({name:"presenter",path:"/presenter/:no",component:()=>Rn(()=>import("./Presenter-e4962585.js"),["assets/Presenter-e4962585.js","assets/NoteDisplay-d072103f.js","assets/DrawingControls-aed2aeec.js","assets/Presenter-aa6741a8.css"]),beforeEnter:e}),mo.push({path:"/presenter",redirect:{path:"/presenter/1"}})}const At=D8({history:Sv("/demystifying-unicode/"),routes:mo});function I4(e,n,{mode:s="replace"}={}){return $({get(){const o=At.currentRoute.value.query[e];return o==null?n??null:Array.isArray(o)?o.filter(Boolean):o},set(o){lt(()=>{At[T(s)]({query:{...At.currentRoute.value.query,[e]:o}})})}})}const ah=Y(0);lt(()=>{At.afterEach(async()=>{await lt(),ah.value+=1})});const ih=Y(0),Nt=$(()=>At.currentRoute.value),xn=$(()=>Nt.value.query.print!==void 0),M4=$(()=>Nt.value.query.print==="clicks"),gn=$(()=>Nt.value.query.embedded!==void 0),bt=$(()=>Nt.value.path.startsWith("/presenter")),L4=$(()=>Nt.value.path.startsWith("/notes")),Co=$(()=>xn.value&&!M4.value),Wa=$(()=>Nt.value.query.password),R4=$(()=>!bt.value&&(!Se.remote||Wa.value===Se.remote)),zu=I4("clicks","0"),N4=$(()=>Ye.length),q4=$(()=>Nt.value.path),He=$(()=>Number.parseInt(q4.value.split(/\//g).slice(-1)[0])||1);$(()=>_l(He.value));const ht=$(()=>Ye.find(e=>e.path===`${He.value}`));$(()=>{var e,n,s;return(s=(n=(e=ht.value)==null?void 0:e.meta)==null?void 0:n.slide)==null?void 0:s.id});$(()=>{var e,n;return((n=(e=ht.value)==null?void 0:e.meta)==null?void 0:n.layout)||(He.value===1?"cover":"default")});const Hl=$(()=>Ye.find(e=>e.path===`${Math.min(Ye.length,He.value+1)}`)),j4=$(()=>Ye.find(e=>e.path===`${Math.max(1,He.value-1)}`)),W4=$(()=>{var e,n;return ah.value,((n=(e=ht.value)==null?void 0:e.meta)==null?void 0:n.__clicksElements)||[]}),Lt=$({get(){if(Co.value)return 99999;let e=+(zu.value||0);return Number.isNaN(e)&&(e=0),e},set(e){zu.value=e.toString()}}),Zr=$(()=>{var e,n;return+(((n=(e=ht.value)==null?void 0:e.meta)==null?void 0:n.clicks)??W4.value.length)}),H4=$(()=>He.value<Ye.length||Lt.value<Zr.value),V4=$(()=>He.value>1||Lt.value>0),z4=$(()=>Ye.filter(e=>{var n,s;return(s=(n=e.meta)==null?void 0:n.slide)==null?void 0:s.title}).reduce((e,n)=>(Li(e,n),e),[])),K4=$(()=>Ri(z4.value,ht.value));$(()=>Ni(K4.value));const G4=$(()=>X4(ih.value,ht.value,j4.value));ge(ht,(e,n)=>{ih.value=Number(e==null?void 0:e.path)-Number(n==null?void 0:n.path)});function qn(){Zr.value<=Lt.value?qo():Lt.value+=1}async function jn(){Lt.value<=0?await jo():Lt.value-=1}function _l(e){return bt.value?`/presenter/${e}`:`/${e}`}function qo(){const e=Math.min(Ye.length,He.value+1);return Vs(e)}async function jo(e=!0){const n=Math.max(1,He.value-1);await Vs(n),e&&Zr.value&&At.replace({query:{...Nt.value.query,clicks:Zr.value}})}function Vs(e,n){return At.push({path:_l(e),query:{...Nt.value.query,clicks:n}})}function Y4(e){const n=Y(0),{direction:s,distanceX:o,distanceY:r}=J_(e,{onSwipeStart(l){l.pointerType==="touch"&&(Lo.value||(n.value=Ca()))},onSwipeEnd(l){if(l.pointerType!=="touch"||!n.value||Lo.value)return;const a=Math.abs(o.value),i=Math.abs(r.value);a/window.innerWidth>.3||a>100?s.value==="left"?qn():jn():(i/window.innerHeight>.4||i>200)&&(s.value==="down"?jo():qo())}})}async function Ha(){const{saveAs:e}=await Rn(()=>import("./FileSaver.min-23a5d44b.js").then(n=>n.F),[]);e(typeof Se.download=="string"?Se.download:Se.exportFilename?`${Se.exportFilename}.pdf`:"/demystifying-unicode/slidev-exported.pdf",`${Se.title}.pdf`)}async function Q4(e){var n,s;if(e==null){const o=(s=(n=ht.value)==null?void 0:n.meta)==null?void 0:s.slide;if(!(o!=null&&o.filepath))return!1;e=`${o.filepath}:${o.start}`}return await fetch(`/__open-in-editor?file=${encodeURIComponent(e)}`),!0}function Li(e,n,s=1){var r,l,a,i,c;const o=(l=(r=n.meta)==null?void 0:r.slide)==null?void 0:l.level;o&&o>s&&e.length>0?Li(e[e.length-1].children,n,s+1):e.push({children:[],level:s,path:n.path,hideInToc:!!((a=n.meta)!=null&&a.hideInToc),title:(c=(i=n.meta)==null?void 0:i.slide)==null?void 0:c.title})}function Ri(e,n,s=!1,o){return e.map(r=>{const l={...r,active:r.path===(n==null?void 0:n.path),hasActiveParent:s};return l.children.length>0&&(l.children=Ri(l.children,n,l.active||l.hasActiveParent,l)),o&&(l.active||l.activeParent)&&(o.activeParent=!0),l})}function Ni(e,n=1){return e.filter(s=>!s.hideInToc).map(s=>({...s,children:Ni(s.children,n+1)}))}const Z4={"slide-left":"slide-left | slide-right","slide-right":"slide-right | slide-left","slide-up":"slide-up | slide-down","slide-down":"slide-down | slide-up"};function J4(e,n=!1){if(!e||(typeof e=="string"&&(e={name:e}),!e.name))return;let s=e.name.includes("|")?e.name:Z4[e.name]||e.name;if(s.includes("|")){const[o,r]=s.split("|").map(l=>l.trim());s=n?r:o}if(s)return{...e,name:s}}function X4(e,n,s){var r,l;let o=e>0?(r=s==null?void 0:s.meta)==null?void 0:r.transition:(l=n==null?void 0:n.meta)==null?void 0:l.transition;return o||(o=Se.transition),J4(o,e<0)}function eE(){const e=Se.titleTemplate.replace("%s",Se.title||"Slidev");Yd({title:e,htmlAttrs:Se.htmlAttrs}),Fg(`${e} - shared`),$g(`${e} - drawings`);const n=`${location.origin}_${wg()}`;function s(){L4.value||!bt.value&&!_g.includes(location.host.split(":")[0])||(bt.value?(no("page",+He.value),no("clicks",Lt.value)):(no("viewerPage",+He.value),no("viewerClicks",Lt.value)),no("lastUpdate",{id:n,type:bt.value?"presenter":"viewer",time:new Date().getTime()}))}At.afterEach(s),ge(Lt,s),Sg(o=>{var l;At.currentRoute.value.path.match(/^\/(\d+|presenter)\/?/)&&((l=o.lastUpdate)==null?void 0:l.type)==="presenter"&&(+o.page!=+He.value||+Lt.value!=+o.clicks)&&At.replace({path:_l(o.page),query:{...At.currentRoute.value.query,clicks:o.clicks||0}})})}const tE=Ae({__name:"App",setup(e){return R(V),eE(),(n,s)=>{const o=js("RouterView"),r=js("StarportCarrier");return _(),F(Fe,null,[M(o),M(r)],64)}}}),nE=z(tE,[["__file","/home/ben/Workspace/demystifying-unicode/node_modules/@slidev/client/App.vue"]]);function Vl(e){return e!==null&&typeof e=="object"}function Va(e,n,s=".",o){if(!Vl(n))return Va(e,{},s,o);const r=Object.assign({},n);for(const l in e){if(l==="__proto__"||l==="constructor")continue;const a=e[l];a!=null&&(o&&o(r,l,a,s)||(Array.isArray(a)&&Array.isArray(r[l])?r[l]=[...a,...r[l]]:Vl(a)&&Vl(r[l])?r[l]=Va(a,r[l],(s?`${s}.`:"")+l.toString(),o):r[l]=a))}return r}function sE(e){return(...n)=>n.reduce((s,o)=>Va(s,o,"",e),{})}const oE=sE(),ch=1/60*1e3,rE=typeof performance<"u"?()=>performance.now():()=>Date.now(),uh=typeof window<"u"?e=>window.requestAnimationFrame(e):e=>setTimeout(()=>e(rE()),ch);function lE(e){let n=[],s=[],o=0,r=!1,l=!1;const a=new WeakSet,i={schedule:(c,u=!1,p=!1)=>{const d=p&&r,h=d?n:s;return u&&a.add(c),h.indexOf(c)===-1&&(h.push(c),d&&r&&(o=n.length)),c},cancel:c=>{const u=s.indexOf(c);u!==-1&&s.splice(u,1),a.delete(c)},process:c=>{if(r){l=!0;return}if(r=!0,[n,s]=[s,n],s.length=0,o=n.length,o)for(let u=0;u<o;u++){const p=n[u];p(c),a.has(p)&&(i.schedule(p),e())}r=!1,l&&(l=!1,i.process(c))}};return i}const aE=40;let za=!0,Wo=!1,Ka=!1;const qs={delta:0,timestamp:0},Jo=["read","update","preRender","render","postRender"],vl=Jo.reduce((e,n)=>(e[n]=lE(()=>Wo=!0),e),{}),Ga=Jo.reduce((e,n)=>{const s=vl[n];return e[n]=(o,r=!1,l=!1)=>(Wo||uE(),s.schedule(o,r,l)),e},{}),iE=Jo.reduce((e,n)=>(e[n]=vl[n].cancel,e),{});Jo.reduce((e,n)=>(e[n]=()=>vl[n].process(qs),e),{});const cE=e=>vl[e].process(qs),ph=e=>{Wo=!1,qs.delta=za?ch:Math.max(Math.min(e-qs.timestamp,aE),1),qs.timestamp=e,Ka=!0,Jo.forEach(cE),Ka=!1,Wo&&(za=!1,uh(ph))},uE=()=>{Wo=!0,za=!0,Ka||uh(ph)},dh=()=>qs;function fh(e,n){var s={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.indexOf(o)<0&&(s[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)n.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(s[o[r]]=e[o[r]]);return s}var qi=function(){},Ho=function(){};qi=function(e,n){!e&&typeof console<"u"&&console.warn(n)},Ho=function(e,n){if(!e)throw new Error(n)};const Ya=(e,n,s)=>Math.min(Math.max(s,e),n),zl=.001,pE=.01,Ku=10,dE=.05,fE=1;function hE({duration:e=800,bounce:n=.25,velocity:s=0,mass:o=1}){let r,l;qi(e<=Ku*1e3,"Spring duration must be 10 seconds or less");let a=1-n;a=Ya(dE,fE,a),e=Ya(pE,Ku,e/1e3),a<1?(r=u=>{const p=u*a,d=p*e,h=p-s,y=Qa(u,a),m=Math.exp(-d);return zl-h/y*m},l=u=>{const d=u*a*e,h=d*s+s,y=Math.pow(a,2)*Math.pow(u,2)*e,m=Math.exp(-d),b=Qa(Math.pow(u,2),a);return(-r(u)+zl>0?-1:1)*((h-y)*m)/b}):(r=u=>{const p=Math.exp(-u*e),d=(u-s)*e+1;return-zl+p*d},l=u=>{const p=Math.exp(-u*e),d=(s-u)*(e*e);return p*d});const i=5/e,c=mE(r,l,i);if(e=e*1e3,isNaN(c))return{stiffness:100,damping:10,duration:e};{const u=Math.pow(c,2)*o;return{stiffness:u,damping:a*2*Math.sqrt(o*u),duration:e}}}const yE=12;function mE(e,n,s){let o=s;for(let r=1;r<yE;r++)o=o-e(o)/n(o);return o}function Qa(e,n){return e*Math.sqrt(1-n*n)}const gE=["duration","bounce"],_E=["stiffness","damping","mass"];function Gu(e,n){return n.some(s=>e[s]!==void 0)}function vE(e){let n=Object.assign({velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1},e);if(!Gu(e,_E)&&Gu(e,gE)){const s=hE(e);n=Object.assign(Object.assign(Object.assign({},n),s),{velocity:0,mass:1}),n.isResolvedFromDuration=!0}return n}function ji(e){var{from:n=0,to:s=1,restSpeed:o=2,restDelta:r}=e,l=fh(e,["from","to","restSpeed","restDelta"]);const a={done:!1,value:n};let{stiffness:i,damping:c,mass:u,velocity:p,duration:d,isResolvedFromDuration:h}=vE(l),y=Yu,m=Yu;function b(){const A=p?-(p/1e3):0,w=s-n,C=c/(2*Math.sqrt(i*u)),x=Math.sqrt(i/u)/1e3;if(r===void 0&&(r=Math.min(Math.abs(s-n)/100,.4)),C<1){const B=Qa(x,C);y=k=>{const S=Math.exp(-C*x*k);return s-S*((A+C*x*w)/B*Math.sin(B*k)+w*Math.cos(B*k))},m=k=>{const S=Math.exp(-C*x*k);return C*x*S*(Math.sin(B*k)*(A+C*x*w)/B+w*Math.cos(B*k))-S*(Math.cos(B*k)*(A+C*x*w)-B*w*Math.sin(B*k))}}else if(C===1)y=B=>s-Math.exp(-x*B)*(w+(A+x*w)*B);else{const B=x*Math.sqrt(C*C-1);y=k=>{const S=Math.exp(-C*x*k),L=Math.min(B*k,300);return s-S*((A+C*x*w)*Math.sinh(L)+B*w*Math.cosh(L))/B}}}return b(),{next:A=>{const w=y(A);if(h)a.done=A>=d;else{const C=m(A)*1e3,x=Math.abs(C)<=o,B=Math.abs(s-w)<=r;a.done=x&&B}return a.value=a.done?s:w,a},flipTarget:()=>{p=-p,[n,s]=[s,n],b()}}}ji.needsInterpolation=(e,n)=>typeof e=="string"||typeof n=="string";const Yu=e=>0,hh=(e,n,s)=>{const o=n-e;return o===0?1:(s-e)/o},Wi=(e,n,s)=>-s*e+s*n+e,yh=(e,n)=>s=>Math.max(Math.min(s,n),e),Bo=e=>e%1?Number(e.toFixed(5)):e,Vo=/(-)?([\d]*\.?[\d])+/g,Za=/(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,bE=/^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function Xo(e){return typeof e=="string"}const er={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},ko=Object.assign(Object.assign({},er),{transform:yh(0,1)}),_r=Object.assign(Object.assign({},er),{default:1}),Hi=e=>({test:n=>Xo(n)&&n.endsWith(e)&&n.split(" ").length===1,parse:parseFloat,transform:n=>`${n}${e}`}),es=Hi("deg"),Eo=Hi("%"),ve=Hi("px"),Qu=Object.assign(Object.assign({},Eo),{parse:e=>Eo.parse(e)/100,transform:e=>Eo.transform(e*100)}),Vi=(e,n)=>s=>!!(Xo(s)&&bE.test(s)&&s.startsWith(e)||n&&Object.prototype.hasOwnProperty.call(s,n)),mh=(e,n,s)=>o=>{if(!Xo(o))return o;const[r,l,a,i]=o.match(Vo);return{[e]:parseFloat(r),[n]:parseFloat(l),[s]:parseFloat(a),alpha:i!==void 0?parseFloat(i):1}},fs={test:Vi("hsl","hue"),parse:mh("hue","saturation","lightness"),transform:({hue:e,saturation:n,lightness:s,alpha:o=1})=>"hsla("+Math.round(e)+", "+Eo.transform(Bo(n))+", "+Eo.transform(Bo(s))+", "+Bo(ko.transform(o))+")"},xE=yh(0,255),Kl=Object.assign(Object.assign({},er),{transform:e=>Math.round(xE(e))}),Un={test:Vi("rgb","red"),parse:mh("red","green","blue"),transform:({red:e,green:n,blue:s,alpha:o=1})=>"rgba("+Kl.transform(e)+", "+Kl.transform(n)+", "+Kl.transform(s)+", "+Bo(ko.transform(o))+")"};function wE(e){let n="",s="",o="",r="";return e.length>5?(n=e.substr(1,2),s=e.substr(3,2),o=e.substr(5,2),r=e.substr(7,2)):(n=e.substr(1,1),s=e.substr(2,1),o=e.substr(3,1),r=e.substr(4,1),n+=n,s+=s,o+=o,r+=r),{red:parseInt(n,16),green:parseInt(s,16),blue:parseInt(o,16),alpha:r?parseInt(r,16)/255:1}}const Ja={test:Vi("#"),parse:wE,transform:Un.transform},vt={test:e=>Un.test(e)||Ja.test(e)||fs.test(e),parse:e=>Un.test(e)?Un.parse(e):fs.test(e)?fs.parse(e):Ja.parse(e),transform:e=>Xo(e)?e:e.hasOwnProperty("red")?Un.transform(e):fs.transform(e)},gh="${c}",_h="${n}";function AE(e){var n,s,o,r;return isNaN(e)&&Xo(e)&&((s=(n=e.match(Vo))===null||n===void 0?void 0:n.length)!==null&&s!==void 0?s:0)+((r=(o=e.match(Za))===null||o===void 0?void 0:o.length)!==null&&r!==void 0?r:0)>0}function vh(e){typeof e=="number"&&(e=`${e}`);const n=[];let s=0;const o=e.match(Za);o&&(s=o.length,e=e.replace(Za,gh),n.push(...o.map(vt.parse)));const r=e.match(Vo);return r&&(e=e.replace(Vo,_h),n.push(...r.map(er.parse))),{values:n,numColors:s,tokenised:e}}function bh(e){return vh(e).values}function xh(e){const{values:n,numColors:s,tokenised:o}=vh(e),r=n.length;return l=>{let a=o;for(let i=0;i<r;i++)a=a.replace(i<s?gh:_h,i<s?vt.transform(l[i]):Bo(l[i]));return a}}const CE=e=>typeof e=="number"?0:e;function BE(e){const n=bh(e);return xh(e)(n.map(CE))}const tr={test:AE,parse:bh,createTransformer:xh,getAnimatableNone:BE},kE=new Set(["brightness","contrast","saturate","opacity"]);function EE(e){let[n,s]=e.slice(0,-1).split("(");if(n==="drop-shadow")return e;const[o]=s.match(Vo)||[];if(!o)return e;const r=s.replace(o,"");let l=kE.has(n)?1:0;return o!==s&&(l*=100),n+"("+l+r+")"}const FE=/([a-z-]*)\(.*?\)/g,Xa=Object.assign(Object.assign({},tr),{getAnimatableNone:e=>{const n=e.match(FE);return n?n.map(EE).join(" "):e}});function Gl(e,n,s){return s<0&&(s+=1),s>1&&(s-=1),s<1/6?e+(n-e)*6*s:s<1/2?n:s<2/3?e+(n-e)*(2/3-s)*6:e}function Zu({hue:e,saturation:n,lightness:s,alpha:o}){e/=360,n/=100,s/=100;let r=0,l=0,a=0;if(!n)r=l=a=s;else{const i=s<.5?s*(1+n):s+n-s*n,c=2*s-i;r=Gl(c,i,e+1/3),l=Gl(c,i,e),a=Gl(c,i,e-1/3)}return{red:Math.round(r*255),green:Math.round(l*255),blue:Math.round(a*255),alpha:o}}const SE=(e,n,s)=>{const o=e*e,r=n*n;return Math.sqrt(Math.max(0,s*(r-o)+o))},DE=[Ja,Un,fs],Ju=e=>DE.find(n=>n.test(e)),Xu=e=>`'${e}' is not an animatable color. Use the equivalent color code instead.`,wh=(e,n)=>{let s=Ju(e),o=Ju(n);Ho(!!s,Xu(e)),Ho(!!o,Xu(n));let r=s.parse(e),l=o.parse(n);s===fs&&(r=Zu(r),s=Un),o===fs&&(l=Zu(l),o=Un);const a=Object.assign({},r);return i=>{for(const c in a)c!=="alpha"&&(a[c]=SE(r[c],l[c],i));return a.alpha=Wi(r.alpha,l.alpha,i),s.transform(a)}},TE=e=>typeof e=="number",$E=(e,n)=>s=>n(e(s)),Ah=(...e)=>e.reduce($E);function Ch(e,n){return TE(e)?s=>Wi(e,n,s):vt.test(e)?wh(e,n):kh(e,n)}const Bh=(e,n)=>{const s=[...e],o=s.length,r=e.map((l,a)=>Ch(l,n[a]));return l=>{for(let a=0;a<o;a++)s[a]=r[a](l);return s}},OE=(e,n)=>{const s=Object.assign(Object.assign({},e),n),o={};for(const r in s)e[r]!==void 0&&n[r]!==void 0&&(o[r]=Ch(e[r],n[r]));return r=>{for(const l in o)s[l]=o[l](r);return s}};function ep(e){const n=tr.parse(e),s=n.length;let o=0,r=0,l=0;for(let a=0;a<s;a++)o||typeof n[a]=="number"?o++:n[a].hue!==void 0?l++:r++;return{parsed:n,numNumbers:o,numRGB:r,numHSL:l}}const kh=(e,n)=>{const s=tr.createTransformer(n),o=ep(e),r=ep(n);return o.numHSL===r.numHSL&&o.numRGB===r.numRGB&&o.numNumbers>=r.numNumbers?Ah(Bh(o.parsed,r.parsed),s):(qi(!0,`Complex values '${e}' and '${n}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`),a=>`${a>0?n:e}`)},UE=(e,n)=>s=>Wi(e,n,s);function PE(e){if(typeof e=="number")return UE;if(typeof e=="string")return vt.test(e)?wh:kh;if(Array.isArray(e))return Bh;if(typeof e=="object")return OE}function IE(e,n,s){const o=[],r=s||PE(e[0]),l=e.length-1;for(let a=0;a<l;a++){let i=r(e[a],e[a+1]);if(n){const c=Array.isArray(n)?n[a]:n;i=Ah(c,i)}o.push(i)}return o}function ME([e,n],[s]){return o=>s(hh(e,n,o))}function LE(e,n){const s=e.length,o=s-1;return r=>{let l=0,a=!1;if(r<=e[0]?a=!0:r>=e[o]&&(l=o-1,a=!0),!a){let c=1;for(;c<s&&!(e[c]>r||c===o);c++);l=c-1}const i=hh(e[l],e[l+1],r);return n[l](i)}}function Eh(e,n,{clamp:s=!0,ease:o,mixer:r}={}){const l=e.length;Ho(l===n.length,"Both input and output ranges must be the same length"),Ho(!o||!Array.isArray(o)||o.length===l-1,"Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values."),e[0]>e[l-1]&&(e=[].concat(e),n=[].concat(n),e.reverse(),n.reverse());const a=IE(n,o,r),i=l===2?ME(e,a):LE(e,a);return s?c=>i(Ya(e[0],e[l-1],c)):i}const bl=e=>n=>1-e(1-n),zi=e=>n=>n<=.5?e(2*n)/2:(2-e(2*(1-n)))/2,RE=e=>n=>Math.pow(n,e),Fh=e=>n=>n*n*((e+1)*n-e),NE=e=>{const n=Fh(e);return s=>(s*=2)<1?.5*n(s):.5*(2-Math.pow(2,-10*(s-1)))},Sh=1.525,qE=4/11,jE=8/11,WE=9/10,Dh=e=>e,Ki=RE(2),HE=bl(Ki),Th=zi(Ki),$h=e=>1-Math.sin(Math.acos(e)),Oh=bl($h),VE=zi(Oh),Gi=Fh(Sh),zE=bl(Gi),KE=zi(Gi),GE=NE(Sh),YE=4356/361,QE=35442/1805,ZE=16061/1805,Jr=e=>{if(e===1||e===0)return e;const n=e*e;return e<qE?7.5625*n:e<jE?9.075*n-9.9*e+3.4:e<WE?YE*n-QE*e+ZE:10.8*e*e-20.52*e+10.72},JE=bl(Jr),XE=e=>e<.5?.5*(1-Jr(1-e*2)):.5*Jr(e*2-1)+.5;function eF(e,n){return e.map(()=>n||Th).splice(0,e.length-1)}function tF(e){const n=e.length;return e.map((s,o)=>o!==0?o/(n-1):0)}function nF(e,n){return e.map(s=>s*n)}function Fr({from:e=0,to:n=1,ease:s,offset:o,duration:r=300}){const l={done:!1,value:e},a=Array.isArray(n)?n:[e,n],i=nF(o&&o.length===a.length?o:tF(a),r);function c(){return Eh(i,a,{ease:Array.isArray(s)?s:eF(a,s)})}let u=c();return{next:p=>(l.value=u(p),l.done=p>=r,l),flipTarget:()=>{a.reverse(),u=c()}}}function sF({velocity:e=0,from:n=0,power:s=.8,timeConstant:o=350,restDelta:r=.5,modifyTarget:l}){const a={done:!1,value:n};let i=s*e;const c=n+i,u=l===void 0?c:l(c);return u!==c&&(i=u-n),{next:p=>{const d=-i*Math.exp(-p/o);return a.done=!(d>r||d<-r),a.value=a.done?u:u+d,a},flipTarget:()=>{}}}const tp={keyframes:Fr,spring:ji,decay:sF};function oF(e){if(Array.isArray(e.to))return Fr;if(tp[e.type])return tp[e.type];const n=new Set(Object.keys(e));return n.has("ease")||n.has("duration")&&!n.has("dampingRatio")?Fr:n.has("dampingRatio")||n.has("stiffness")||n.has("mass")||n.has("damping")||n.has("restSpeed")||n.has("restDelta")?ji:Fr}function Uh(e,n,s=0){return e-n-s}function rF(e,n,s=0,o=!0){return o?Uh(n+-e,n,s):n-(e-n)+s}function lF(e,n,s,o){return o?e>=n+s:e<=-s}const aF=e=>{const n=({delta:s})=>e(s);return{start:()=>Ga.update(n,!0),stop:()=>iE.update(n)}};function Ph(e){var n,s,{from:o,autoplay:r=!0,driver:l=aF,elapsed:a=0,repeat:i=0,repeatType:c="loop",repeatDelay:u=0,onPlay:p,onStop:d,onComplete:h,onRepeat:y,onUpdate:m}=e,b=fh(e,["from","autoplay","driver","elapsed","repeat","repeatType","repeatDelay","onPlay","onStop","onComplete","onRepeat","onUpdate"]);let{to:A}=b,w,C=0,x=b.duration,B,k=!1,S=!0,L;const O=oF(b);!((s=(n=O).needsInterpolation)===null||s===void 0)&&s.call(n,o,A)&&(L=Eh([0,100],[o,A],{clamp:!1}),o=0,A=100);const j=O(Object.assign(Object.assign({},b),{from:o,to:A}));function ne(){C++,c==="reverse"?(S=C%2===0,a=rF(a,x,u,S)):(a=Uh(a,x,u),c==="mirror"&&j.flipTarget()),k=!1,y&&y()}function ue(){w.stop(),h&&h()}function Q(_e){if(S||(_e=-_e),a+=_e,!k){const be=j.next(Math.max(0,a));B=be.value,L&&(B=L(B)),k=S?be.done:a<=0}m==null||m(B),k&&(C===0&&(x??(x=a)),C<i?lF(a,x,u,S)&&ne():ue())}function ye(){p==null||p(),w=l(Q),w.start()}return r&&ye(),{stop:()=>{d==null||d(),w.stop()}}}function Ih(e,n){return n?e*(1e3/n):0}function iF({from:e=0,velocity:n=0,min:s,max:o,power:r=.8,timeConstant:l=750,bounceStiffness:a=500,bounceDamping:i=10,restDelta:c=1,modifyTarget:u,driver:p,onUpdate:d,onComplete:h,onStop:y}){let m;function b(x){return s!==void 0&&x<s||o!==void 0&&x>o}function A(x){return s===void 0?o:o===void 0||Math.abs(s-x)<Math.abs(o-x)?s:o}function w(x){m==null||m.stop(),m=Ph(Object.assign(Object.assign({},x),{driver:p,onUpdate:B=>{var k;d==null||d(B),(k=x.onUpdate)===null||k===void 0||k.call(x,B)},onComplete:h,onStop:y}))}function C(x){w(Object.assign({type:"spring",stiffness:a,damping:i,restDelta:c},x))}if(b(e))C({from:e,velocity:n,to:A(e)});else{let x=r*n+e;typeof u<"u"&&(x=u(x));const B=A(x),k=B===s?-1:1;let S,L;const O=j=>{S=L,L=j,n=Ih(j-S,dh().delta),(k===1&&j>B||k===-1&&j<B)&&C({from:j,to:B,velocity:n})};w({type:"decay",from:e,velocity:n,timeConstant:l,power:r,restDelta:c,modifyTarget:u,onUpdate:b(x)?O:void 0})}return{stop:()=>m==null?void 0:m.stop()}}const Mh=(e,n)=>1-3*n+3*e,Lh=(e,n)=>3*n-6*e,Rh=e=>3*e,Xr=(e,n,s)=>((Mh(n,s)*e+Lh(n,s))*e+Rh(n))*e,Nh=(e,n,s)=>3*Mh(n,s)*e*e+2*Lh(n,s)*e+Rh(n),cF=1e-7,uF=10;function pF(e,n,s,o,r){let l,a,i=0;do a=n+(s-n)/2,l=Xr(a,o,r)-e,l>0?s=a:n=a;while(Math.abs(l)>cF&&++i<uF);return a}const dF=8,fF=.001;function hF(e,n,s,o){for(let r=0;r<dF;++r){const l=Nh(n,s,o);if(l===0)return n;const a=Xr(n,s,o)-e;n-=a/l}return n}const Sr=11,vr=1/(Sr-1);function yF(e,n,s,o){if(e===n&&s===o)return Dh;const r=new Float32Array(Sr);for(let a=0;a<Sr;++a)r[a]=Xr(a*vr,e,s);function l(a){let i=0,c=1;const u=Sr-1;for(;c!==u&&r[c]<=a;++c)i+=vr;--c;const p=(a-r[c])/(r[c+1]-r[c]),d=i+p*vr,h=Nh(d,e,s);return h>=fF?hF(a,d,e,s):h===0?d:pF(a,i,i+vr,e,s)}return a=>a===0||a===1?a:Xr(l(a),n,o)}const Yl={};class mF{constructor(){this.subscriptions=new Set}add(n){return this.subscriptions.add(n),()=>this.subscriptions.delete(n)}notify(n,s,o){if(this.subscriptions.size)for(const r of this.subscriptions)r(n,s,o)}clear(){this.subscriptions.clear()}}function np(e){return!isNaN(parseFloat(e))}class gF{constructor(n){this.timeDelta=0,this.lastUpdated=0,this.updateSubscribers=new mF,this.canTrackVelocity=!1,this.updateAndNotify=s=>{this.prev=this.current,this.current=s;const{delta:o,timestamp:r}=dh();this.lastUpdated!==r&&(this.timeDelta=o,this.lastUpdated=r),Ga.postRender(this.scheduleVelocityCheck),this.updateSubscribers.notify(this.current)},this.scheduleVelocityCheck=()=>Ga.postRender(this.velocityCheck),this.velocityCheck=({timestamp:s})=>{this.canTrackVelocity||(this.canTrackVelocity=np(this.current)),s!==this.lastUpdated&&(this.prev=this.current)},this.prev=this.current=n,this.canTrackVelocity=np(this.current)}onChange(n){return this.updateSubscribers.add(n)}clearListeners(){this.updateSubscribers.clear()}set(n){this.updateAndNotify(n)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?Ih(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(n){return this.stop(),new Promise(s=>{const{stop:o}=n(s);this.stopAnimation=o}).then(()=>this.clearAnimation())}stop(){this.stopAnimation&&this.stopAnimation(),this.clearAnimation()}isAnimating(){return!!this.stopAnimation}clearAnimation(){this.stopAnimation=null}destroy(){this.updateSubscribers.clear(),this.stop()}}function _F(e){return new gF(e)}const{isArray:vF}=Array;function bF(){const e=Y({}),n=o=>{const r=l=>{e.value[l]&&(e.value[l].stop(),e.value[l].destroy(),delete e.value[l])};o?vF(o)?o.forEach(r):r(o):Object.keys(e.value).forEach(r)},s=(o,r,l)=>{if(e.value[o])return e.value[o];const a=_F(r);return a.onChange(i=>l[o]=i),e.value[o]=a,a};return e_(n),{motionValues:e,get:s,stop:n}}function xF(e){return Array.isArray(e)}function ts(){return{type:"spring",stiffness:500,damping:25,restDelta:.5,restSpeed:10}}function Ql(e){return{type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restDelta:.01,restSpeed:10}}function wF(e){return{type:"spring",stiffness:550,damping:e===0?100:30,restDelta:.01,restSpeed:10}}function Zl(){return{type:"keyframes",ease:"linear",duration:300}}function AF(e){return{type:"keyframes",duration:800,values:e}}const sp={default:wF,x:ts,y:ts,z:ts,rotate:ts,rotateX:ts,rotateY:ts,rotateZ:ts,scaleX:Ql,scaleY:Ql,scale:Ql,backgroundColor:Zl,color:Zl,opacity:Zl};function qh(e,n){let s;return xF(n)?s=AF:s=sp[e]||sp.default,{to:n,...s(n)}}const op={...er,transform:Math.round},jh={color:vt,backgroundColor:vt,outlineColor:vt,fill:vt,stroke:vt,borderColor:vt,borderTopColor:vt,borderRightColor:vt,borderBottomColor:vt,borderLeftColor:vt,borderWidth:ve,borderTopWidth:ve,borderRightWidth:ve,borderBottomWidth:ve,borderLeftWidth:ve,borderRadius:ve,radius:ve,borderTopLeftRadius:ve,borderTopRightRadius:ve,borderBottomRightRadius:ve,borderBottomLeftRadius:ve,width:ve,maxWidth:ve,height:ve,maxHeight:ve,size:ve,top:ve,right:ve,bottom:ve,left:ve,padding:ve,paddingTop:ve,paddingRight:ve,paddingBottom:ve,paddingLeft:ve,margin:ve,marginTop:ve,marginRight:ve,marginBottom:ve,marginLeft:ve,rotate:es,rotateX:es,rotateY:es,rotateZ:es,scale:_r,scaleX:_r,scaleY:_r,scaleZ:_r,skew:es,skewX:es,skewY:es,distance:ve,translateX:ve,translateY:ve,translateZ:ve,x:ve,y:ve,z:ve,perspective:ve,transformPerspective:ve,opacity:ko,originX:Qu,originY:Qu,originZ:ve,zIndex:op,filter:Xa,WebkitFilter:Xa,fillOpacity:ko,strokeOpacity:ko,numOctaves:op},Yi=e=>jh[e];function Wh(e,n){return n&&typeof e=="number"&&n.transform?n.transform(e):e}function CF(e,n){let s=Yi(e);return s!==Xa&&(s=tr),s.getAnimatableNone?s.getAnimatableNone(n):void 0}const BF={linear:Dh,easeIn:Ki,easeInOut:Th,easeOut:HE,circIn:$h,circInOut:VE,circOut:Oh,backIn:Gi,backInOut:KE,backOut:zE,anticipate:GE,bounceIn:JE,bounceInOut:XE,bounceOut:Jr};function rp(e){if(Array.isArray(e)){const[n,s,o,r]=e;return yF(n,s,o,r)}else if(typeof e=="string")return BF[e];return e}function kF(e){return Array.isArray(e)&&typeof e[0]!="number"}function lp(e,n){return e==="zIndex"?!1:!!(typeof n=="number"||Array.isArray(n)||typeof n=="string"&&tr.test(n)&&!n.startsWith("url("))}function EF(e){return Array.isArray(e.to)&&e.to[0]===null&&(e.to=[...e.to],e.to[0]=e.from),e}function FF({ease:e,times:n,delay:s,...o}){const r={...o};return n&&(r.offset=n),e&&(r.ease=kF(e)?e.map(rp):rp(e)),s&&(r.elapsed=-s),r}function SF(e,n,s){return Array.isArray(n.to)&&(e.duration||(e.duration=800)),EF(n),DF(e)||(e={...e,...qh(s,n.to)}),{...n,...FF(e)}}function DF({delay:e,repeat:n,repeatType:s,repeatDelay:o,from:r,...l}){return!!Object.keys(l).length}function TF(e,n){return e[n]||e.default||e}function $F(e,n,s,o,r){const l=TF(o,e);let a=l.from===null||l.from===void 0?n.get():l.from;const i=lp(e,s);a==="none"&&i&&typeof s=="string"&&(a=CF(e,s));const c=lp(e,a);function u(d){const h={from:a,to:s,velocity:o.velocity?o.velocity:n.getVelocity(),onUpdate:y=>n.set(y)};return l.type==="inertia"||l.type==="decay"?iF({...h,...l}):Ph({...SF(l,h,e),onUpdate:y=>{h.onUpdate(y),l.onUpdate&&l.onUpdate(y)},onComplete:()=>{o.onComplete&&o.onComplete(),r&&r(),d&&d()}})}function p(d){return n.set(s),o.onComplete&&o.onComplete(),r&&r(),d&&d(),{stop:()=>{}}}return!c||!i||l.type===!1?p:u}function OF(){const{motionValues:e,stop:n,get:s}=bF();return{motionValues:e,stop:n,push:(r,l,a,i={},c)=>{const u=a[r],p=s(r,u,a);if(i&&i.immediate){p.set(l);return}const d=$F(r,p,l,i,c);p.start(d)}}}function UF(e,n={},{motionValues:s,push:o,stop:r}=OF()){const l=T(n),a=Y(!1);ge(s,d=>{a.value=Object.values(d).filter(h=>h.isAnimating()).length>0},{immediate:!0,deep:!0});const i=d=>{if(!l||!l[d])throw new Error(`The variant ${d} does not exist.`);return l[d]},c=d=>(typeof d=="string"&&(d=i(d)),Promise.all(Object.entries(d).map(([h,y])=>{if(h!=="transition")return new Promise(m=>o(h,y,e,d.transition||qh(h,d[h]),m))}).filter(Boolean)));return{isAnimating:a,apply:c,set:d=>{const h=Aa(d)?d:i(d);Object.entries(h).forEach(([y,m])=>{y!=="transition"&&o(y,m,e,{immediate:!0})})},leave:async d=>{let h;if(l&&(l.leave&&(h=l.leave),!l.leave&&l.initial&&(h=l.initial)),!h){d();return}await c(h),d()},stop:r}}const Qi=typeof window<"u",PF=()=>Qi&&window.onpointerdown===null,IF=()=>Qi&&window.ontouchstart===null,MF=()=>Qi&&window.onmousedown===null;function LF({target:e,state:n,variants:s,apply:o}){const r=T(s),l=Y(!1),a=Y(!1),i=Y(!1),c=$(()=>{let p=[];return r&&(r.hovered&&(p=[...p,...Object.keys(r.hovered)]),r.tapped&&(p=[...p,...Object.keys(r.tapped)]),r.focused&&(p=[...p,...Object.keys(r.focused)])),p}),u=$(()=>{const p={};Object.assign(p,n.value),l.value&&r.hovered&&Object.assign(p,r.hovered),a.value&&r.tapped&&Object.assign(p,r.tapped),i.value&&r.focused&&Object.assign(p,r.focused);for(const d in p)c.value.includes(d)||delete p[d];return p});r.hovered&&(xe(e,"mouseenter",()=>l.value=!0),xe(e,"mouseleave",()=>{l.value=!1,a.value=!1}),xe(e,"mouseout",()=>{l.value=!1,a.value=!1})),r.tapped&&(MF()&&(xe(e,"mousedown",()=>a.value=!0),xe(e,"mouseup",()=>a.value=!1)),PF()&&(xe(e,"pointerdown",()=>a.value=!0),xe(e,"pointerup",()=>a.value=!1)),IF()&&(xe(e,"touchstart",()=>a.value=!0),xe(e,"touchend",()=>a.value=!1))),r.focused&&(xe(e,"focus",()=>i.value=!0),xe(e,"blur",()=>i.value=!1)),ge(u,o)}function RF({set:e,target:n,variants:s,variant:o}){const r=T(s);ge(()=>n,()=>{r&&(r.initial&&e("initial"),r.enter&&(o.value="enter"))},{immediate:!0,flush:"pre"})}function NF({state:e,apply:n}){ge(e,s=>{s&&n(s)},{immediate:!0})}function qF({target:e,variants:n,variant:s}){const o=T(n);o&&(o.visible||o.visibleOnce)&&K_(e,([{isIntersecting:r}])=>{o.visible?r?s.value="visible":s.value="initial":o.visibleOnce&&(r&&s.value!=="visibleOnce"?s.value="visibleOnce":s.value||(s.value="initial"))})}function jF(e,n={syncVariants:!0,lifeCycleHooks:!0,visibilityHooks:!0,eventListeners:!0}){n.lifeCycleHooks&&RF(e),n.syncVariants&&NF(e),n.visibilityHooks&&qF(e),n.eventListeners&&LF(e)}function Hh(e={}){const n=We({...e}),s=Y({});return ge(n,()=>{const o={};for(const[r,l]of Object.entries(n)){const a=Yi(r),i=Wh(l,a);o[r]=i}s.value=o},{immediate:!0,deep:!0}),{state:n,style:s}}function Zi(e,n){ge(()=>at(e),s=>{s&&n(s)},{immediate:!0})}const WF={x:"translateX",y:"translateY",z:"translateZ"};function Vh(e={},n=!0){const s=We({...e}),o=Y("");return ge(s,r=>{let l="",a=!1;if(n&&(r.x||r.y||r.z)){const i=[r.x||0,r.y||0,r.z||0].map(ve.transform).join(",");l+=`translate3d(${i}) `,a=!0}for(const[i,c]of Object.entries(r)){if(n&&(i==="x"||i==="y"||i==="z"))continue;const u=Yi(i),p=Wh(c,u);l+=`${WF[i]||i}(${p}) `}n&&!a&&(l+="translateZ(0px) "),o.value=l.trim()},{immediate:!0,deep:!0}),{state:s,transform:o}}const HF=["","X","Y","Z"],VF=["perspective","translate","scale","rotate","skew"],zh=["transformPerspective","x","y","z"];VF.forEach(e=>{HF.forEach(n=>{const s=e+n;zh.push(s)})});const zF=new Set(zh);function Ji(e){return zF.has(e)}const KF=new Set(["originX","originY","originZ"]);function Kh(e){return KF.has(e)}function GF(e){const n={},s={};return Object.entries(e).forEach(([o,r])=>{Ji(o)||Kh(o)?n[o]=r:s[o]=r}),{transform:n,style:s}}function Gh(e){const{transform:n,style:s}=GF(e),{transform:o}=Vh(n),{style:r}=Hh(s);return o.value&&(r.value.transform=o.value),r.value}function YF(e,n){let s,o;const{state:r,style:l}=Hh();return Zi(e,a=>{o=a;for(const i of Object.keys(jh))a.style[i]===null||a.style[i]===""||Ji(i)||Kh(i)||(r[i]=a.style[i]);s&&Object.entries(s).forEach(([i,c])=>a.style[i]=c),n&&n(r)}),ge(l,a=>{if(!o){s=a;return}for(const i in a)o.style[i]=a[i]},{immediate:!0}),{style:r}}function QF(e){const n=e.trim().split(/\) |\)/);if(n.length===1)return{};const s=o=>o.endsWith("px")||o.endsWith("deg")?parseFloat(o):isNaN(Number(o))?Number(o):o;return n.reduce((o,r)=>{if(!r)return o;const[l,a]=r.split("("),c=a.split(",").map(p=>s(p.endsWith(")")?p.replace(")",""):p.trim())),u=c.length===1?c[0]:c;return{...o,[l]:u}},{})}function ZF(e,n){Object.entries(QF(n)).forEach(([s,o])=>{const r=["x","y","z"];if(s==="translate3d"){if(o===0){r.forEach(l=>e[l]=0);return}o.forEach((l,a)=>e[r[a]]=l);return}if(o=parseFloat(o),s==="translateX"){e.x=o;return}if(s==="translateY"){e.y=o;return}if(s==="translateZ"){e.z=o;return}e[s]=o})}function JF(e,n){let s,o;const{state:r,transform:l}=Vh();return Zi(e,a=>{o=a,a.style.transform&&ZF(r,a.style.transform),s&&(a.style.transform=s),n&&n(r)}),ge(l,a=>{if(!o){s=a;return}o.style.transform=a},{immediate:!0}),{transform:r}}function XF(e,n){const s=We({}),o=a=>Object.entries(a).forEach(([i,c])=>s[i]=c),{style:r}=YF(e,o),{transform:l}=JF(e,o);return ge(s,a=>{Object.entries(a).forEach(([i,c])=>{const u=Ji(i)?l:r;u[i]&&u[i]===c||(u[i]=c)})},{immediate:!0,deep:!0}),Zi(e,()=>n&&o(n)),{motionProperties:s,style:r,transform:l}}function eS(e={}){const n=T(e),s=Y();return{state:$(()=>{if(s.value)return n[s.value]}),variant:s}}function Yh(e,n={},s){const{motionProperties:o}=XF(e),{variant:r,state:l}=eS(n),a=UF(o,n),i={target:e,variant:r,variants:n,state:l,motionProperties:o,...a};return jF(i,s),i}const tS=["initial","enter","leave","visible","visible-once","hovered","tapped","focused","delay"];function nS(e,n){const s=e.props?e.props:e.data&&e.data.attrs?e.data.attrs:{};s&&(s.variants&&Aa(s.variants)&&(n.value={...n.value,...s.variants}),tS.forEach(o=>{if(o==="delay"){if(s&&s[o]&&typeof s[o]=="number"){const r=s[o];n&&n.value&&(n.value.enter&&(n.value.enter.transition||(n.value.enter.transition={}),n.value.enter.transition={delay:r,...n.value.enter.transition}),n.value.visible&&(n.value.visible.transition||(n.value.visible.transition={}),n.value.visible.transition={delay:r,...n.value.visible.transition}),n.value.visibleOnce&&(n.value.visibleOnce.transition||(n.value.visibleOnce.transition={}),n.value.visibleOnce.transition={delay:r,...n.value.visibleOnce.transition}))}return}o==="visible-once"&&(o="visibleOnce"),s&&s[o]&&Aa(s[o])&&(n.value[o]=s[o])}))}function Jl(e){return{created:(s,o,r)=>{const l=o.value&&typeof o.value=="string"?o.value:r.key;l&&Yl[l]&&Yl[l].stop();const a=Y(e||{});typeof o.value=="object"&&(a.value=o.value),nS(r,a);const i=Yh(s,a);s.motionInstance=i,l&&(Yl[l]=i)},getSSRProps(s,o){let{initial:r}=s.value||o&&(o==null?void 0:o.props)||{};r=T(r);const l=oE((e==null?void 0:e.initial)||{},r||{});return!l||Object.keys(l).length===0?void 0:{style:Gh(l)}}}}const sS={initial:{opacity:0},enter:{opacity:1}},oS={initial:{opacity:0},visible:{opacity:1}},rS={initial:{opacity:0},visibleOnce:{opacity:1}},lS={initial:{scale:0,opacity:0},enter:{scale:1,opacity:1}},aS={initial:{scale:0,opacity:0},visible:{scale:1,opacity:1}},iS={initial:{scale:0,opacity:0},visibleOnce:{scale:1,opacity:1}},cS={initial:{x:-100,rotate:90,opacity:0},enter:{x:0,rotate:0,opacity:1}},uS={initial:{x:-100,rotate:90,opacity:0},visible:{x:0,rotate:0,opacity:1}},pS={initial:{x:-100,rotate:90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},dS={initial:{x:100,rotate:-90,opacity:0},enter:{x:0,rotate:0,opacity:1}},fS={initial:{x:100,rotate:-90,opacity:0},visible:{x:0,rotate:0,opacity:1}},hS={initial:{x:100,rotate:-90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},yS={initial:{y:-100,rotate:-90,opacity:0},enter:{y:0,rotate:0,opacity:1}},mS={initial:{y:-100,rotate:-90,opacity:0},visible:{y:0,rotate:0,opacity:1}},gS={initial:{y:-100,rotate:-90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},_S={initial:{y:100,rotate:90,opacity:0},enter:{y:0,rotate:0,opacity:1}},vS={initial:{y:100,rotate:90,opacity:0},visible:{y:0,rotate:0,opacity:1}},bS={initial:{y:100,rotate:90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},xS={initial:{x:-100,opacity:0},enter:{x:0,opacity:1}},wS={initial:{x:-100,opacity:0},visible:{x:0,opacity:1}},AS={initial:{x:-100,opacity:0},visibleOnce:{x:0,opacity:1}},CS={initial:{x:100,opacity:0},enter:{x:0,opacity:1}},BS={initial:{x:100,opacity:0},visible:{x:0,opacity:1}},kS={initial:{x:100,opacity:0},visibleOnce:{x:0,opacity:1}},ES={initial:{y:-100,opacity:0},enter:{y:0,opacity:1}},FS={initial:{y:-100,opacity:0},visible:{y:0,opacity:1}},SS={initial:{y:-100,opacity:0},visibleOnce:{y:0,opacity:1}},DS={initial:{y:100,opacity:0},enter:{y:0,opacity:1}},TS={initial:{y:100,opacity:0},visible:{y:0,opacity:1}},$S={initial:{y:100,opacity:0},visibleOnce:{y:0,opacity:1}},ei={__proto__:null,fade:sS,fadeVisible:oS,fadeVisibleOnce:rS,pop:lS,popVisible:aS,popVisibleOnce:iS,rollBottom:_S,rollLeft:cS,rollRight:dS,rollTop:yS,rollVisibleBottom:vS,rollVisibleLeft:uS,rollVisibleOnceBottom:bS,rollVisibleOnceLeft:pS,rollVisibleOnceRight:hS,rollVisibleOnceTop:gS,rollVisibleRight:fS,rollVisibleTop:mS,slideBottom:DS,slideLeft:xS,slideRight:CS,slideTop:ES,slideVisibleBottom:TS,slideVisibleLeft:wS,slideVisibleOnceBottom:$S,slideVisibleOnceLeft:AS,slideVisibleOnceRight:kS,slideVisibleOnceTop:SS,slideVisibleRight:BS,slideVisibleTop:FS},OS=Ae({props:{is:{type:[String,Object],required:!1},preset:{type:String,required:!1},instance:{type:Object,required:!1},variants:{type:Object,required:!1},initial:{type:Object,required:!1},enter:{type:Object,required:!1},leave:{type:Object,required:!1},visible:{type:Object,required:!1},visibleOnce:{type:Object,required:!1},hovered:{type:Object,required:!1},tapped:{type:Object,required:!1},focused:{type:Object,required:!1},delay:{type:[Number,String],required:!1}},setup(e){var i;const n=Gm(),s=We({});if(!e.is&&!n.default)return()=>Xe("div",{});const o=$(()=>{let c;return e.preset&&(c=ei[e.preset]),c}),r=$(()=>({initial:e.initial,enter:e.enter,leave:e.leave,visible:e.visible,visibleOnce:e.visibleOnce,hovered:e.hovered,tapped:e.tapped,focused:e.focused})),l=$(()=>{const c={...r.value,...o.value||{},...e.variants||{}};return e.delay&&(c.enter.transition={...c.enter.transition},c.enter.transition.delay=parseInt(e.delay)),c}),a=$(()=>{if(!e.is)return;let c=e.is;return typeof a.value=="string"&&!Bp(c)&&(c=js(c)),c});if(((i=process==null?void 0:process.env)==null?void 0:i.NODE_ENV)==="development"||process!=null&&process.dev){const c=u=>{var p;(p=u.variants)!=null&&p.initial&&u.set("initial"),setTimeout(()=>{var d,h,y;(d=u.variants)!=null&&d.enter&&u.apply("enter"),(h=u.variants)!=null&&h.visible&&u.apply("visible"),(y=u.variants)!=null&&y.visibleOnce&&u.apply("visibleOnce")},10)};dl(()=>Object.entries(s).forEach(([u,p])=>c(p)))}return{slots:n,component:a,motionConfig:l,instances:s}},render({slots:e,motionConfig:n,instances:s,component:o}){var i;const r=Gh(n.initial||{}),l=(c,u)=>(c.props||(c.props={}),c.props.style=r,c.props.onVnodeMounted=({el:p})=>{const d=Yh(p,n);s[u]=d},c);if(o){const c=Xe(o,void 0,e);return l(c,0),c}return(((i=e.default)==null?void 0:i.call(e))||[]).map((c,u)=>l(c,u))}});function US(e){const n="àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;",s="aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------",o=new RegExp(n.split("").join("|"),"g");return e.toString().replace(/[A-Z]/g,r=>`-${r}`).toLowerCase().replace(/\s+/g,"-").replace(o,r=>s.charAt(n.indexOf(r))).replace(/&/g,"-and-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}const PS={install(e,n){if(e.directive("motion",Jl()),e.component("Motion",OS),!n||n&&!n.excludePresets)for(const s in ei){const o=ei[s];e.directive(`motion-${US(s)}`,Jl(o))}if(n&&n.directives)for(const s in n.directives){const o=n.directives[s];o.initial,e.directive(`motion-${s}`,Jl(o))}}};var ap;const Fo=typeof window<"u",IS=Object.prototype.toString,MS=e=>IS.call(e)==="[object Object]";Fo&&((ap=window==null?void 0:window.navigator)!=null&&ap.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function LS(e){return li()?(Sp(e),!0):!1}function RS(e){var n;const s=T(e);return(n=s==null?void 0:s.$el)!=null?n:s}const NS=Fo?window:void 0,ip=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},cp="__vueuse_ssr_handlers__";ip[cp]=ip[cp]||{};function qS(e,n={}){const{immediate:s=!0,window:o=NS}=n,r=Y(!1);let l=null;function a(){!r.value||!o||(e(),l=o.requestAnimationFrame(a))}function i(){!r.value&&o&&(r.value=!0,a())}function c(){r.value=!1,l!=null&&o&&(o.cancelAnimationFrame(l),l=null)}return s&&i(),LS(c),{isActive:r,pause:c,resume:i}}var up;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(up||(up={}));const xl="vue-starport-injection",Qh="vue-starport-options",jS={duration:800,easing:"cubic-bezier(0.45, 0, 0.55, 1)",keepAlive:!1},Zh={port:{type:String,required:!0},duration:{type:Number,required:!1},easing:{type:String,required:!1},keepAlive:{type:Boolean,required:!1,default:void 0},mountedProps:{type:Object,required:!1},initialProps:{type:Object,required:!1}};var WS=Object.defineProperty,el=Object.getOwnPropertySymbols,Jh=Object.prototype.hasOwnProperty,Xh=Object.prototype.propertyIsEnumerable,pp=(e,n,s)=>n in e?WS(e,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[n]=s,HS=(e,n)=>{for(var s in n||(n={}))Jh.call(n,s)&&pp(e,s,n[s]);if(el)for(var s of el(n))Xh.call(n,s)&&pp(e,s,n[s]);return e},dp=(e,n)=>{var s={};for(var o in e)Jh.call(e,o)&&n.indexOf(o)<0&&(s[o]=e[o]);if(e!=null&&el)for(var o of el(e))n.indexOf(o)<0&&Xh.call(e,o)&&(s[o]=e[o]);return s};const VS=Ae({name:"StarportProxy",props:HS({props:{type:Object,default:()=>({})},component:{type:Object,required:!0}},Zh),setup(e,n){const s=R(xl),o=$(()=>s.getInstance(e.port,e.component)),r=Y(),l=o.value.generateId(),a=Y(!1);return o.value.isVisible||(o.value.land(),a.value=!0),Gn(async()=>{if(o.value.el){console.error(`[Vue Starport] Multiple proxies of "${o.value.componentName}" with port "${e.port}" detected. The later one will be ignored.`);return}if(o.value.el=r.value,await lt(),a.value=!0,o.value.rect.update(),o.value.rect.width===0||o.value.rect.height===0){const i=o.value.rect.width===0?"width":"height";console.warn(`[Vue Starport] The proxy of component "${o.value.componentName}" (port "${e.port}") has no ${i} on initial render, have you set the size for it?`),console.warn("element:",o.value.el),console.warn("rect:",o.value.rect)}}),Yo(async()=>{o.value.rect.update(),o.value.liftOff(),o.value.el=void 0,a.value=!1,!o.value.options.keepAlive&&(await lt(),await lt(),!o.value.el&&s.dispose(o.value.port))}),ge(()=>e,async()=>{o.value.props&&await lt();const i=e,{props:c}=i,u=dp(i,["props"]);o.value.props=c||{},o.value.setLocalOptions(u)},{deep:!0,immediate:!0}),()=>{const i=e,{initialProps:c,mountedProps:u}=i,p=dp(i,["initialProps","mountedProps"]),d=ze(p,(a.value?u:c)||{});return Xe("div",ze(d,{id:l,ref:r,"data-starport-proxy":o.value.componentId,"data-starport-landed":o.value.isLanded?"true":void 0,"data-starport-floating":o.value.isLanded?void 0:"true"}),n.slots.default?Xe(n.slots.default):void 0)}}});var zS=Object.defineProperty,KS=Object.defineProperties,GS=Object.getOwnPropertyDescriptors,fp=Object.getOwnPropertySymbols,YS=Object.prototype.hasOwnProperty,QS=Object.prototype.propertyIsEnumerable,hp=(e,n,s)=>n in e?zS(e,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[n]=s,ZS=(e,n)=>{for(var s in n||(n={}))YS.call(n,s)&&hp(e,s,n[s]);if(fp)for(var s of fp(n))QS.call(n,s)&&hp(e,s,n[s]);return e},JS=(e,n)=>KS(e,GS(n));const XS=Ae({name:"Starport",inheritAttrs:!0,props:Zh,setup(e,n){const s=Y(!1);return Gn(()=>{if(s.value=!0,!R(xl))throw new Error("[Vue Starport] Failed to find the carrier, all Starport components must be wrapped in a <StarportCarrier> component.")}),()=>{var a,i;const o=(i=(a=n.slots).default)==null?void 0:i.call(a);if(!o)throw new Error("[Vue Starport] Slot is required to use <Starport>");if(o.length!==1)throw new Error(`[Vue Starport] <Starport> requires exactly one slot, but got ${o.length}`);const r=o[0];let l=r.type;return(!MS(l)||un(l))&&(l={render(){return o}}),Xe(VS,JS(ZS({},e),{key:e.port,component:ll(l),props:r.props}))}}});function eD(e){const n=We({height:0,width:0,left:0,top:0,update:o,listen:l,pause:a,margin:"0px",padding:"0px"}),s=Fo?document.documentElement||document.body:void 0;function o(){if(!Fo)return;const i=RS(e);if(!i)return;const{height:c,width:u,left:p,top:d}=i.getBoundingClientRect(),h=window.getComputedStyle(i),y=h.margin,m=h.padding;Object.assign(n,{height:c,width:u,left:p,top:s.scrollTop+d,margin:y,padding:m})}const r=qS(o,{immediate:!1});function l(){Fo&&(o(),r.resume())}function a(){r.pause()}return n}let tD=(e,n=21)=>(s=n)=>{let o="",r=s;for(;r--;)o+=e[Math.random()*e.length|0];return o};const yp=tD("abcdefghijklmnopqrstuvwxyz",5);function mp(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase().replace(/[^\w\d_-]/g,"")}function nD(e){var n;return e.name||((n=e.__file)==null?void 0:n.split(/[\/\\.]/).slice(-2)[0])||""}var sD=Object.defineProperty,gp=Object.getOwnPropertySymbols,oD=Object.prototype.hasOwnProperty,rD=Object.prototype.propertyIsEnumerable,_p=(e,n,s)=>n in e?sD(e,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[n]=s,Xl=(e,n)=>{for(var s in n||(n={}))oD.call(n,s)&&_p(e,s,n[s]);if(gp)for(var s of gp(n))rD.call(n,s)&&_p(e,s,n[s]);return e};function lD(e,n,s={}){const o=nD(n),r=mp(o)||yp(),l=Y(),a=Y(null),i=Y(!1),c=Y(!1),u=gy(!0),p=Y({}),d=$(()=>Xl(Xl(Xl({},jS),s),p.value)),h=Y(0);let y;u.run(()=>{y=eD(l),ge(l,async w=>{w&&(c.value=!0),await lt(),l.value||(c.value=!1)})});const m=mp(e);function b(){return`starport-${r}-${m}-${yp()}`}const A=b();return We({el:l,id:A,port:e,props:a,rect:y,scope:u,isLanded:i,isVisible:c,options:d,liftOffTime:h,component:n,componentName:o,componentId:r,generateId:b,setLocalOptions(w={}){p.value=JSON.parse(JSON.stringify(w))},elRef(){return l},liftOff(){i.value&&(i.value=!1,h.value=Date.now(),y.listen())},land(){i.value||(i.value=!0,y.pause())}})}function aD(e){const n=We(new Map);function s(r,l){let a=n.get(r);return a||(a=lD(r,l,e),n.set(r,a)),a.component=l,a}function o(r){var l;(l=n.get(r))==null||l.scope.stop(),n.delete(r)}return{portMap:n,dispose:o,getInstance:s}}var iD=Object.defineProperty,cD=Object.defineProperties,uD=Object.getOwnPropertyDescriptors,vp=Object.getOwnPropertySymbols,pD=Object.prototype.hasOwnProperty,dD=Object.prototype.propertyIsEnumerable,bp=(e,n,s)=>n in e?iD(e,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[n]=s,fD=(e,n)=>{for(var s in n||(n={}))pD.call(n,s)&&bp(e,s,n[s]);if(vp)for(var s of vp(n))dD.call(n,s)&&bp(e,s,n[s]);return e},hD=(e,n)=>cD(e,uD(n));const yD=Ae({name:"StarportCraft",props:{port:{type:String,required:!0},component:{type:Object,required:!0}},setup(e){const n=R(xl);if(!n)throw new Error("[Vue Starport] Failed to find the carrier, all Starport components must be wrapped in a <StarportCarrier> component.");const s=$(()=>n.getInstance(e.port,e.component)),o=$(()=>{var a;return((a=s.value.el)==null?void 0:a.id)||s.value.id}),r=$(()=>{const a=Date.now()-s.value.liftOffTime,i=Math.max(0,s.value.options.duration-a),c=s.value.rect,u={position:"absolute",left:0,top:0,width:`${c.width}px`,height:`${c.height}px`,margin:c.margin,padding:c.padding,transform:`translate3d(${c.left}px,${c.top}px,0px)`};return!s.value.isVisible||!s.value.el?hD(fD({},u),{zIndex:-1,display:"none"}):(s.value.isLanded?u.display="none":Object.assign(u,{transitionProperty:"all",transitionDuration:`${i}ms`,transitionTimingFunction:s.value.options.easing}),u)}),l={onTransitionend(a){s.value.isLanded||console.warn(`[Vue Starport] Transition duration of component "${s.value.componentName}" is too short (${a.elapsedTime}s) that may cause animation glitches. Try to increase the duration of that component, or decrease the duration the Starport (current: ${s.value.options.duration/1e3}s).`)}};return()=>{const a=!!(s.value.isLanded&&s.value.el);return Xe("div",{style:r.value,"data-starport-craft":s.value.componentId,"data-starport-landed":s.value.isLanded?"true":void 0,"data-starport-floating":s.value.isLanded?void 0:"true",onTransitionend:s.value.land},Xe(w0,{to:a?`#${o.value}`:"body",disabled:!a},Xe(s.value.component,ze(l,s.value.props))))}}}),mD=Ae({name:"StarportCarrier",setup(e,{slots:n}){const s=aD(R(Qh,{}));return $t().appContext.app.provide(xl,s),()=>{var r;return[(r=n.default)==null?void 0:r.call(n),Array.from(s.portMap.entries()).map(([l,{component:a}])=>Xe(yD,{key:l,port:l,component:a}))]}}});function gD(e={}){return{install(n){n.provide(Qh,e),n.component("Starport",XS),n.component("StarportCarrier",mD)}}}function _D(e){function n(){document.documentElement.style.setProperty("--vh",`${window.innerHeight*.01}px`)}n(),window.addEventListener("resize",n),e.app.use(PS),e.app.use(gD({keepAlive:!0}))}function Bt(e,n,s){var o;return((o=e.instance)==null?void 0:o.$).provides[n]??s}function vD(){return{install(e){e.directive("click",{name:"v-click",mounted(n,s){var p,d,h,y,m,b;if(Co.value||(p=Bt(s,bo))!=null&&p.value)return;const o=Bt(s,as),r=Bt(s,vo),l=Bt(s,xa),a=s.modifiers.hide!==!1&&s.modifiers.hide!=null,i=s.modifiers.fade!==!1&&s.modifiers.fade!=null,c=((d=o==null?void 0:o.value)==null?void 0:d.length)||0,u=i?gg:Ol;if(o&&!((h=o==null?void 0:o.value)!=null&&h.includes(n))&&o.value.push(n),s.value==null&&(s.value=(y=o==null?void 0:o.value)==null?void 0:y.length),typeof s.value=="string"&&(s.value.startsWith("+")||s.value.startsWith("-"))&&(s.value=(((m=o==null?void 0:o.value)==null?void 0:m.length)||0)+Number(s.value)),!(l!=null&&l.value.has(s.value)))l==null||l.value.set(s.value,[n]);else if(!((b=l==null?void 0:l.value.get(s.value))!=null&&b.includes(n))){const A=(l==null?void 0:l.value.get(s.value))||[];l==null||l.value.set(s.value,[n].concat(A))}n==null||n.classList.toggle(ss,!0),r&&ge(r,()=>{const A=(r==null?void 0:r.value)??0,w=s.value!=null?A>=s.value:A>c;n.classList.contains(Ul)||n.classList.toggle(u,!w),a!==!1&&a!==void 0&&n.classList.toggle(u,w),n.classList.toggle(to,!1);const C=l==null?void 0:l.value.get(A);C==null||C.forEach((x,B)=>{x.classList.toggle(dr,!1),B===C.length-1?x.classList.toggle(to,!0):x.classList.toggle(dr,!0)}),n.classList.contains(to)||n.classList.toggle(dr,w)},{immediate:!0})},unmounted(n,s){n==null||n.classList.toggle(ss,!1);const o=Bt(s,as);o!=null&&o.value&&wa(o.value,n)}}),e.directive("after",{name:"v-after",mounted(n,s){var i,c,u;if(Co.value||(i=Bt(s,bo))!=null&&i.value)return;const o=Bt(s,as),r=Bt(s,vo),l=Bt(s,xa),a=o==null?void 0:o.value.length;s.value==null&&(s.value=o==null?void 0:o.value.length),typeof s.value=="string"&&(s.value.startsWith("+")||s.value.startsWith("-"))&&(s.value=(((c=o==null?void 0:o.value)==null?void 0:c.length)||0)+Number(s.value)),l!=null&&l.value.has(s.value)?(u=l==null?void 0:l.value.get(s.value))==null||u.push(n):l==null||l.value.set(s.value,[n]),n==null||n.classList.toggle(ss,!0),r&&ge(r,()=>{const p=(r.value??0)>=(s.value??a??0);n.classList.contains(Ul)||n.classList.toggle(Ol,!p),n.classList.toggle(to,!1),n.classList.contains(to)||n.classList.toggle(dr,p)},{immediate:!0})},unmounted(n){n==null||n.classList.toggle(ss,!0)}}),e.directive("click-hide",{name:"v-click-hide",mounted(n,s){var a,i,c;if(Co.value||(a=Bt(s,bo))!=null&&a.value)return;const o=Bt(s,as),r=Bt(s,vo),l=((i=o==null?void 0:o.value)==null?void 0:i.length)||0;o&&!((c=o==null?void 0:o.value)!=null&&c.includes(n))&&o.value.push(n),n==null||n.classList.toggle(ss,!0),r&&ge(r,()=>{const u=(r==null?void 0:r.value)??0,p=s.value!=null?u>=s.value:u>l;n.classList.toggle(Ol,p),n.classList.toggle(Ul,p)},{immediate:!0})},unmounted(n,s){n==null||n.classList.toggle(ss,!1);const o=Bt(s,as);o!=null&&o.value&&wa(o.value,n)}})}}}function bD(e,n){const s=sh(e),o=oh(n,s.currentRoute,s.currentPage);return{nav:{...s,...o},configs:Se,themeConfigs:$(()=>Se.themeConfig)}}function xD(){return{install(e){const n=bD(Nt,Lt);e.provide(V,We(n))}}}const Ys=b1(nE);Ys.use(At);Ys.use(hg());Ys.use(vD());Ys.use(xD());_D({app:Ys,router:At});Ys.mount("#app");export{R3 as $,s3 as A,Y as B,BD as C,ht as D,Re as E,Fe as F,Ab as G,Y4 as H,Lt as I,Zr as J,H4 as K,Hl as L,Gn as M,We as N,AD as O,kD as P,ge as Q,P as R,Mf as S,De as T,ft as U,Ib as V,sd as W,od as X,Lo as Y,Nl as Z,z as _,V as a,Oi as a0,Ui as a1,U3 as a2,He as a3,Mx as a4,wD as a5,Ct as a6,io as a7,gr as a8,ds as a9,on as aa,Ua as ab,ub as ac,pb as ad,db as ae,hb as af,wt as ag,Rd as ah,ED as ai,mt as aj,_5 as ak,Qd as al,yb as am,Yo as an,Yd as b,Se as c,Ae as d,nm as e,F as f,t as g,T as h,R as i,Ye as j,N4 as k,f as l,M as m,et as n,_ as o,me as p,Ei as q,Es as r,Yt as s,An as t,CD as u,$ as v,Pl as w,W as x,Sf as y,i3 as z};
