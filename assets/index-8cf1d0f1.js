(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))o(l);new MutationObserver(l=>{for(const r of l)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function s(l){const r={};return l.integrity&&(r.integrity=l.integrity),l.referrerPolicy&&(r.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?r.credentials="include":l.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(l){if(l.ep)return;l.ep=!0;const r=s(l);fetch(l.href,r)}})();function Kn(e,n){const s=Object.create(null),o=e.split(",");for(let l=0;l<o.length;l++)s[o[l]]=!0;return n?l=>!!s[l.toLowerCase()]:l=>!!s[l]}const Le=Object.freeze({}),Ms=Object.freeze([]),At=()=>{},Bp=()=>!1,ty=/^on[^a-z]/,zo=e=>ty.test(e),Sl=e=>e.startsWith("onUpdate:"),Ne=Object.assign,ti=(e,n)=>{const s=e.indexOf(n);s>-1&&e.splice(s,1)},ny=Object.prototype.hasOwnProperty,Be=(e,n)=>ny.call(e,n),ae=Array.isArray,hs=e=>Ko(e)==="[object Map]",kp=e=>Ko(e)==="[object Set]",sy=e=>Ko(e)==="[object RegExp]",pe=e=>typeof e=="function",qe=e=>typeof e=="string",ni=e=>typeof e=="symbol",$e=e=>e!==null&&typeof e=="object",si=e=>$e(e)&&pe(e.then)&&pe(e.catch),Cp=Object.prototype.toString,Ko=e=>Cp.call(e),oi=e=>Ko(e).slice(8,-1),Fp=e=>Ko(e)==="[object Object]",li=e=>qe(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,bl=Kn(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),oy=Kn("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"),tr=e=>{const n=Object.create(null);return s=>n[s]||(n[s]=e(s))},ly=/-(\w)/g,an=tr(e=>e.replace(ly,(n,s)=>s?s.toUpperCase():"")),ry=/\B([A-Z])/g,wn=tr(e=>e.replace(ry,"-$1").toLowerCase()),As=tr(e=>e.charAt(0).toUpperCase()+e.slice(1)),ns=tr(e=>e?`on${As(e)}`:""),Do=(e,n)=>!Object.is(e,n),os=(e,n)=>{for(let s=0;s<e.length;s++)e[s](n)},Tl=(e,n,s)=>{Object.defineProperty(e,n,{configurable:!0,enumerable:!1,value:s})},ay=e=>{const n=parseFloat(e);return isNaN(n)?e:n},iy=e=>{const n=qe(e)?Number(e):NaN;return isNaN(n)?e:n};let lc;const $l=()=>lc||(lc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function nt(e){if(ae(e)){const n={};for(let s=0;s<e.length;s++){const o=e[s],l=qe(o)?dy(o):nt(o);if(l)for(const r in l)n[r]=l[r]}return n}else{if(qe(e))return e;if($e(e))return e}}const cy=/;(?![^(]*\))/g,uy=/:([^]+)/,py=/\/\*[^]*?\*\//g;function dy(e){const n={};return e.replace(py,"").split(cy).forEach(s=>{if(s){const o=s.split(uy);o.length>1&&(n[o[0].trim()]=o[1].trim())}}),n}function We(e){let n="";if(qe(e))n=e;else if(ae(e))for(let s=0;s<e.length;s++){const o=We(e[s]);o&&(n+=o+" ")}else if($e(e))for(const s in e)e[s]&&(n+=s+" ");return n.trim()}function le(e){if(!e)return null;let{class:n,style:s}=e;return n&&!qe(n)&&(e.class=We(n)),s&&(e.style=nt(s)),e}const fy="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",hy="svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view",Ep=Kn(fy),yy=Kn(hy),my="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",gy=Kn(my);function Dp(e){return!!e||e===""}const Bn=e=>qe(e)?e:e==null?"":ae(e)||$e(e)&&(e.toString===Cp||!pe(e.toString))?JSON.stringify(e,Sp,2):String(e),Sp=(e,n)=>n&&n.__v_isRef?Sp(e,n.value):hs(n)?{[`Map(${n.size})`]:[...n.entries()].reduce((s,[o,l])=>(s[`${o} =>`]=l,s),{})}:kp(n)?{[`Set(${n.size})`]:[...n.values()]}:$e(n)&&!ae(n)&&!Fp(n)?String(n):n;function Ul(e,...n){console.warn(`[Vue warn] ${e}`,...n)}let Ct;class Tp{constructor(n=!1){this.detached=n,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Ct,!n&&Ct&&(this.index=(Ct.scopes||(Ct.scopes=[])).push(this)-1)}get active(){return this._active}run(n){if(this._active){const s=Ct;try{return Ct=this,n()}finally{Ct=s}}else Ul("cannot run an inactive effect scope.")}on(){Ct=this}off(){Ct=this.parent}stop(n){if(this._active){let s,o;for(s=0,o=this.effects.length;s<o;s++)this.effects[s].stop();for(s=0,o=this.cleanups.length;s<o;s++)this.cleanups[s]();if(this.scopes)for(s=0,o=this.scopes.length;s<o;s++)this.scopes[s].stop(!0);if(!this.detached&&this.parent&&!n){const l=this.parent.scopes.pop();l&&l!==this&&(this.parent.scopes[this.index]=l,l.index=this.index)}this.parent=void 0,this._active=!1}}}function vy(e){return new Tp(e)}function _y(e,n=Ct){n&&n.active&&n.effects.push(e)}function ri(){return Ct}function $p(e){Ct?Ct.cleanups.push(e):Ul("onScopeDispose() is called when there is no active effect scope to be associated with.")}const ai=e=>{const n=new Set(e);return n.w=0,n.n=0,n},Up=e=>(e.w&Hn)>0,Op=e=>(e.n&Hn)>0,by=({deps:e})=>{if(e.length)for(let n=0;n<e.length;n++)e[n].w|=Hn},xy=e=>{const{deps:n}=e;if(n.length){let s=0;for(let o=0;o<n.length;o++){const l=n[o];Up(l)&&!Op(l)?l.delete(e):n[s++]=l,l.w&=~Hn,l.n&=~Hn}n.length=s}},Ol=new WeakMap;let co=0,Hn=1;const ea=30;let gt;const ys=Symbol("iterate"),ta=Symbol("Map key iterate");class ii{constructor(n,s=null,o){this.fn=n,this.scheduler=s,this.active=!0,this.deps=[],this.parent=void 0,_y(this,o)}run(){if(!this.active)return this.fn();let n=gt,s=In;for(;n;){if(n===this)return;n=n.parent}try{return this.parent=gt,gt=this,In=!0,Hn=1<<++co,co<=ea?by(this):rc(this),this.fn()}finally{co<=ea&&xy(this),Hn=1<<--co,gt=this.parent,In=s,this.parent=void 0,this.deferStop&&this.stop()}}stop(){gt===this?this.deferStop=!0:this.active&&(rc(this),this.onStop&&this.onStop(),this.active=!1)}}function rc(e){const{deps:n}=e;if(n.length){for(let s=0;s<n.length;s++)n[s].delete(e);n.length=0}}let In=!0;const Pp=[];function Bs(){Pp.push(In),In=!1}function ks(){const e=Pp.pop();In=e===void 0?!0:e}function dt(e,n,s){if(In&&gt){let o=Ol.get(e);o||Ol.set(e,o=new Map);let l=o.get(s);l||o.set(s,l=ai()),Ip(l,{effect:gt,target:e,type:n,key:s})}}function Ip(e,n){let s=!1;co<=ea?Op(e)||(e.n|=Hn,s=!Up(e)):s=!e.has(gt),s&&(e.add(gt),gt.deps.push(e),gt.onTrack&&gt.onTrack(Ne({effect:gt},n)))}function cn(e,n,s,o,l,r){const a=Ol.get(e);if(!a)return;let i=[];if(n==="clear")i=[...a.values()];else if(s==="length"&&ae(e)){const u=Number(o);a.forEach((p,f)=>{(f==="length"||f>=u)&&i.push(p)})}else switch(s!==void 0&&i.push(a.get(s)),n){case"add":ae(e)?li(s)&&i.push(a.get("length")):(i.push(a.get(ys)),hs(e)&&i.push(a.get(ta)));break;case"delete":ae(e)||(i.push(a.get(ys)),hs(e)&&i.push(a.get(ta)));break;case"set":hs(e)&&i.push(a.get(ys));break}const c={target:e,type:n,key:s,newValue:o,oldValue:l,oldTarget:r};if(i.length===1)i[0]&&na(i[0],c);else{const u=[];for(const p of i)p&&u.push(...p);na(ai(u),c)}}function na(e,n){const s=ae(e)?e:[...e];for(const o of s)o.computed&&ac(o,n);for(const o of s)o.computed||ac(o,n)}function ac(e,n){(e!==gt||e.allowRecurse)&&(e.onTrigger&&e.onTrigger(Ne({effect:e},n)),e.scheduler?e.scheduler():e.run())}function Ay(e,n){var s;return(s=Ol.get(e))==null?void 0:s.get(n)}const wy=Kn("__proto__,__v_isRef,__isVue"),Mp=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(ni)),By=nr(),ky=nr(!1,!0),Cy=nr(!0),Fy=nr(!0,!0),ic=Ey();function Ey(){const e={};return["includes","indexOf","lastIndexOf"].forEach(n=>{e[n]=function(...s){const o=he(this);for(let r=0,a=this.length;r<a;r++)dt(o,"get",r+"");const l=o[n](...s);return l===-1||l===!1?o[n](...s.map(he)):l}}),["push","pop","shift","unshift","splice"].forEach(n=>{e[n]=function(...s){Bs();const o=he(this)[n].apply(this,s);return ks(),o}}),e}function Dy(e){const n=he(this);return dt(n,"has",e),n.hasOwnProperty(e)}function nr(e=!1,n=!1){return function(o,l,r){if(l==="__v_isReactive")return!e;if(l==="__v_isReadonly")return e;if(l==="__v_isShallow")return n;if(l==="__v_raw"&&r===(e?n?Vp:Hp:n?jp:Wp).get(o))return o;const a=ae(o);if(!e){if(a&&Be(ic,l))return Reflect.get(ic,l,r);if(l==="hasOwnProperty")return Dy}const i=Reflect.get(o,l,r);return(ni(l)?Mp.has(l):wy(l))||(e||dt(o,"get",l),n)?i:Te(i)?a&&li(l)?i:i.value:$e(i)?e?Yt(i):He(i):i}}const Sy=Lp(),Ty=Lp(!0);function Lp(e=!1){return function(s,o,l,r){let a=s[o];if(Vn(a)&&Te(a)&&!Te(l))return!1;if(!e&&(!Pl(l)&&!Vn(l)&&(a=he(a),l=he(l)),!ae(s)&&Te(a)&&!Te(l)))return a.value=l,!0;const i=ae(s)&&li(o)?Number(o)<s.length:Be(s,o),c=Reflect.set(s,o,l,r);return s===he(r)&&(i?Do(l,a)&&cn(s,"set",o,l,a):cn(s,"add",o,l)),c}}function $y(e,n){const s=Be(e,n),o=e[n],l=Reflect.deleteProperty(e,n);return l&&s&&cn(e,"delete",n,void 0,o),l}function Uy(e,n){const s=Reflect.has(e,n);return(!ni(n)||!Mp.has(n))&&dt(e,"has",n),s}function Oy(e){return dt(e,"iterate",ae(e)?"length":ys),Reflect.ownKeys(e)}const Rp={get:By,set:Sy,deleteProperty:$y,has:Uy,ownKeys:Oy},Np={get:Cy,set(e,n){return Ul(`Set operation on key "${String(n)}" failed: target is readonly.`,e),!0},deleteProperty(e,n){return Ul(`Delete operation on key "${String(n)}" failed: target is readonly.`,e),!0}},Py=Ne({},Rp,{get:ky,set:Ty}),Iy=Ne({},Np,{get:Fy}),ci=e=>e,sr=e=>Reflect.getPrototypeOf(e);function nl(e,n,s=!1,o=!1){e=e.__v_raw;const l=he(e),r=he(n);s||(n!==r&&dt(l,"get",n),dt(l,"get",r));const{has:a}=sr(l),i=o?ci:s?ui:So;if(a.call(l,n))return i(e.get(n));if(a.call(l,r))return i(e.get(r));e!==l&&e.get(n)}function sl(e,n=!1){const s=this.__v_raw,o=he(s),l=he(e);return n||(e!==l&&dt(o,"has",e),dt(o,"has",l)),e===l?s.has(e):s.has(e)||s.has(l)}function ol(e,n=!1){return e=e.__v_raw,!n&&dt(he(e),"iterate",ys),Reflect.get(e,"size",e)}function cc(e){e=he(e);const n=he(this);return sr(n).has.call(n,e)||(n.add(e),cn(n,"add",e,e)),this}function uc(e,n){n=he(n);const s=he(this),{has:o,get:l}=sr(s);let r=o.call(s,e);r?qp(s,o,e):(e=he(e),r=o.call(s,e));const a=l.call(s,e);return s.set(e,n),r?Do(n,a)&&cn(s,"set",e,n,a):cn(s,"add",e,n),this}function pc(e){const n=he(this),{has:s,get:o}=sr(n);let l=s.call(n,e);l?qp(n,s,e):(e=he(e),l=s.call(n,e));const r=o?o.call(n,e):void 0,a=n.delete(e);return l&&cn(n,"delete",e,void 0,r),a}function dc(){const e=he(this),n=e.size!==0,s=hs(e)?new Map(e):new Set(e),o=e.clear();return n&&cn(e,"clear",void 0,void 0,s),o}function ll(e,n){return function(o,l){const r=this,a=r.__v_raw,i=he(a),c=n?ci:e?ui:So;return!e&&dt(i,"iterate",ys),a.forEach((u,p)=>o.call(l,c(u),c(p),r))}}function rl(e,n,s){return function(...o){const l=this.__v_raw,r=he(l),a=hs(r),i=e==="entries"||e===Symbol.iterator&&a,c=e==="keys"&&a,u=l[e](...o),p=s?ci:n?ui:So;return!n&&dt(r,"iterate",c?ta:ys),{next(){const{value:f,done:h}=u.next();return h?{value:f,done:h}:{value:i?[p(f[0]),p(f[1])]:p(f),done:h}},[Symbol.iterator](){return this}}}}function Fn(e){return function(...n){{const s=n[0]?`on key "${n[0]}" `:"";console.warn(`${As(e)} operation ${s}failed: target is readonly.`,he(this))}return e==="delete"?!1:this}}function My(){const e={get(r){return nl(this,r)},get size(){return ol(this)},has:sl,add:cc,set:uc,delete:pc,clear:dc,forEach:ll(!1,!1)},n={get(r){return nl(this,r,!1,!0)},get size(){return ol(this)},has:sl,add:cc,set:uc,delete:pc,clear:dc,forEach:ll(!1,!0)},s={get(r){return nl(this,r,!0)},get size(){return ol(this,!0)},has(r){return sl.call(this,r,!0)},add:Fn("add"),set:Fn("set"),delete:Fn("delete"),clear:Fn("clear"),forEach:ll(!0,!1)},o={get(r){return nl(this,r,!0,!0)},get size(){return ol(this,!0)},has(r){return sl.call(this,r,!0)},add:Fn("add"),set:Fn("set"),delete:Fn("delete"),clear:Fn("clear"),forEach:ll(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{e[r]=rl(r,!1,!1),s[r]=rl(r,!0,!1),n[r]=rl(r,!1,!0),o[r]=rl(r,!0,!0)}),[e,s,n,o]}const[Ly,Ry,Ny,qy]=My();function or(e,n){const s=n?e?qy:Ny:e?Ry:Ly;return(o,l,r)=>l==="__v_isReactive"?!e:l==="__v_isReadonly"?e:l==="__v_raw"?o:Reflect.get(Be(s,l)&&l in o?s:o,l,r)}const Wy={get:or(!1,!1)},jy={get:or(!1,!0)},Hy={get:or(!0,!1)},Vy={get:or(!0,!0)};function qp(e,n,s){const o=he(s);if(o!==s&&n.call(e,o)){const l=oi(e);console.warn(`Reactive ${l} contains both the raw and reactive versions of the same object${l==="Map"?" as keys":""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`)}}const Wp=new WeakMap,jp=new WeakMap,Hp=new WeakMap,Vp=new WeakMap;function zy(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ky(e){return e.__v_skip||!Object.isExtensible(e)?0:zy(oi(e))}function He(e){return Vn(e)?e:lr(e,!1,Rp,Wy,Wp)}function Gy(e){return lr(e,!1,Py,jy,jp)}function Yt(e){return lr(e,!0,Np,Hy,Hp)}function uo(e){return lr(e,!0,Iy,Vy,Vp)}function lr(e,n,s,o,l){if(!$e(e))return console.warn(`value cannot be made reactive: ${String(e)}`),e;if(e.__v_raw&&!(n&&e.__v_isReactive))return e;const r=l.get(e);if(r)return r;const a=Ky(e);if(a===0)return e;const i=new Proxy(e,a===2?o:s);return l.set(e,i),i}function ms(e){return Vn(e)?ms(e.__v_raw):!!(e&&e.__v_isReactive)}function Vn(e){return!!(e&&e.__v_isReadonly)}function Pl(e){return!!(e&&e.__v_isShallow)}function Il(e){return ms(e)||Vn(e)}function he(e){const n=e&&e.__v_raw;return n?he(n):e}function rr(e){return Tl(e,"__v_skip",!0),e}const So=e=>$e(e)?He(e):e,ui=e=>$e(e)?Yt(e):e;function pi(e){In&&gt&&(e=he(e),Ip(e.dep||(e.dep=ai()),{target:e,type:"get",key:"value"}))}function di(e,n){e=he(e);const s=e.dep;s&&na(s,{target:e,type:"set",key:"value",newValue:n})}function Te(e){return!!(e&&e.__v_isRef===!0)}function Y(e){return zp(e,!1)}function un(e){return zp(e,!0)}function zp(e,n){return Te(e)?e:new Yy(e,n)}class Yy{constructor(n,s){this.__v_isShallow=s,this.dep=void 0,this.__v_isRef=!0,this._rawValue=s?n:he(n),this._value=s?n:So(n)}get value(){return pi(this),this._value}set value(n){const s=this.__v_isShallow||Pl(n)||Vn(n);n=s?n:he(n),Do(n,this._rawValue)&&(this._rawValue=n,this._value=s?n:So(n),di(this,n))}}function T(e){return Te(e)?e.value:e}const Qy={get:(e,n,s)=>T(Reflect.get(e,n,s)),set:(e,n,s,o)=>{const l=e[n];return Te(l)&&!Te(s)?(l.value=s,!0):Reflect.set(e,n,s,o)}};function Kp(e){return ms(e)?e:new Proxy(e,Qy)}class Zy{constructor(n){this.dep=void 0,this.__v_isRef=!0;const{get:s,set:o}=n(()=>pi(this),()=>di(this));this._get=s,this._set=o}get value(){return this._get()}set value(n){this._set(n)}}function fi(e){return new Zy(e)}function Jy(e){Il(e)||console.warn("toRefs() expects a reactive object but received a plain one.");const n=ae(e)?new Array(e.length):{};for(const s in e)n[s]=Gp(e,s);return n}class Xy{constructor(n,s,o){this._object=n,this._key=s,this._defaultValue=o,this.__v_isRef=!0}get value(){const n=this._object[this._key];return n===void 0?this._defaultValue:n}set value(n){this._object[this._key]=n}get dep(){return Ay(he(this._object),this._key)}}class em{constructor(n){this._getter=n,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function tm(e,n,s){return Te(e)?e:pe(e)?new em(e):$e(e)&&arguments.length>1?Gp(e,n,s):Y(e)}function Gp(e,n,s){const o=e[n];return Te(o)?o:new Xy(e,n,s)}class nm{constructor(n,s,o,l){this._setter=s,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new ii(n,()=>{this._dirty||(this._dirty=!0,di(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!l,this.__v_isReadonly=o}get value(){const n=he(this);return pi(n),(n._dirty||!n._cacheable)&&(n._dirty=!1,n._value=n.effect.run()),n._value}set value(n){this._setter(n)}}function sm(e,n,s=!1){let o,l;const r=pe(e);r?(o=e,l=()=>{console.warn("Write operation failed: computed value is readonly")}):(o=e.get,l=e.set);const a=new nm(o,l,r||!l,s);return n&&!s&&(a.effect.onTrack=n.onTrack,a.effect.onTrigger=n.onTrigger),a}const gs=[];function xl(e){gs.push(e)}function Al(){gs.pop()}function N(e,...n){Bs();const s=gs.length?gs[gs.length-1].component:null,o=s&&s.appContext.config.warnHandler,l=om();if(o)xn(o,s,11,[e+n.join(""),s&&s.proxy,l.map(({vnode:r})=>`at <${mr(s,r.type)}>`).join(`
`),l]);else{const r=[`[Vue warn]: ${e}`,...n];l.length&&r.push(`
`,...lm(l)),console.warn(...r)}ks()}function om(){let e=gs[gs.length-1];if(!e)return[];const n=[];for(;e;){const s=n[0];s&&s.vnode===e?s.recurseCount++:n.push({vnode:e,recurseCount:0});const o=e.component&&e.component.parent;e=o&&o.vnode}return n}function lm(e){const n=[];return e.forEach((s,o)=>{n.push(...o===0?[]:[`
`],...rm(s))}),n}function rm({vnode:e,recurseCount:n}){const s=n>0?`... (${n} recursive calls)`:"",o=e.component?e.component.parent==null:!1,l=` at <${mr(e.component,e.type,o)}`,r=">"+s;return e.props?[l,...am(e.props),r]:[l+r]}function am(e){const n=[],s=Object.keys(e);return s.slice(0,3).forEach(o=>{n.push(...Yp(o,e[o]))}),s.length>3&&n.push(" ..."),n}function Yp(e,n,s){return qe(n)?(n=JSON.stringify(n),s?n:[`${e}=${n}`]):typeof n=="number"||typeof n=="boolean"||n==null?s?n:[`${e}=${n}`]:Te(n)?(n=Yp(e,he(n.value),!0),s?n:[`${e}=Ref<`,n,">"]):pe(n)?[`${e}=fn${n.name?`<${n.name}>`:""}`]:(n=he(n),s?n:[`${e}=`,n])}function im(e,n){e!==void 0&&(typeof e!="number"?N(`${n} is not a valid number - got ${JSON.stringify(e)}.`):isNaN(e)&&N(`${n} is NaN - the duration expression might be incorrect.`))}const hi={sp:"serverPrefetch hook",bc:"beforeCreate hook",c:"created hook",bm:"beforeMount hook",m:"mounted hook",bu:"beforeUpdate hook",u:"updated",bum:"beforeUnmount hook",um:"unmounted hook",a:"activated hook",da:"deactivated hook",ec:"errorCaptured hook",rtc:"renderTracked hook",rtg:"renderTriggered hook",[0]:"setup function",[1]:"render function",[2]:"watcher getter",[3]:"watcher callback",[4]:"watcher cleanup function",[5]:"native event handler",[6]:"component event handler",[7]:"vnode hook",[8]:"directive hook",[9]:"transition hook",[10]:"app errorHandler",[11]:"app warnHandler",[12]:"ref function",[13]:"async component loader",[14]:"scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core"};function xn(e,n,s,o){let l;try{l=o?e(...o):e()}catch(r){ar(r,n,s)}return l}function Nt(e,n,s,o){if(pe(e)){const r=xn(e,n,s,o);return r&&si(r)&&r.catch(a=>{ar(a,n,s)}),r}const l=[];for(let r=0;r<e.length;r++)l.push(Nt(e[r],n,s,o));return l}function ar(e,n,s,o=!0){const l=n?n.vnode:null;if(n){let r=n.parent;const a=n.proxy,i=hi[s];for(;r;){const u=r.ec;if(u){for(let p=0;p<u.length;p++)if(u[p](e,a,i)===!1)return}r=r.parent}const c=n.appContext.config.errorHandler;if(c){xn(c,null,10,[e,a,i]);return}}cm(e,s,l,o)}function cm(e,n,s,o=!0){{const l=hi[n];if(s&&xl(s),N(`Unhandled error${l?` during execution of ${l}`:""}`),s&&Al(),o)throw e;console.error(e)}}let To=!1,sa=!1;const at=[];let nn=0;const Ls=[];let tn=null,Tn=0;const Qp=Promise.resolve();let yi=null;const um=100;function it(e){const n=yi||Qp;return e?n.then(this?e.bind(this):e):n}function pm(e){let n=nn+1,s=at.length;for(;n<s;){const o=n+s>>>1;$o(at[o])<e?n=o+1:s=o}return n}function ir(e){(!at.length||!at.includes(e,To&&e.allowRecurse?nn+1:nn))&&(e.id==null?at.push(e):at.splice(pm(e.id),0,e),Zp())}function Zp(){!To&&!sa&&(sa=!0,yi=Qp.then(ed))}function dm(e){const n=at.indexOf(e);n>nn&&at.splice(n,1)}function Jp(e){ae(e)?Ls.push(...e):(!tn||!tn.includes(e,e.allowRecurse?Tn+1:Tn))&&Ls.push(e),Zp()}function fc(e,n=To?nn+1:0){for(e=e||new Map;n<at.length;n++){const s=at[n];if(s&&s.pre){if(mi(e,s))continue;at.splice(n,1),n--,s()}}}function Xp(e){if(Ls.length){const n=[...new Set(Ls)];if(Ls.length=0,tn){tn.push(...n);return}for(tn=n,e=e||new Map,tn.sort((s,o)=>$o(s)-$o(o)),Tn=0;Tn<tn.length;Tn++)mi(e,tn[Tn])||tn[Tn]();tn=null,Tn=0}}const $o=e=>e.id==null?1/0:e.id,fm=(e,n)=>{const s=$o(e)-$o(n);if(s===0){if(e.pre&&!n.pre)return-1;if(n.pre&&!e.pre)return 1}return s};function ed(e){sa=!1,To=!0,e=e||new Map,at.sort(fm);const n=s=>mi(e,s);try{for(nn=0;nn<at.length;nn++){const s=at[nn];if(s&&s.active!==!1){if(n(s))continue;xn(s,null,14)}}}finally{nn=0,at.length=0,Xp(e),To=!1,yi=null,(at.length||Ls.length)&&ed(e)}}function mi(e,n){if(!e.has(n))e.set(n,1);else{const s=e.get(n);if(s>um){const o=n.ownerInstance,l=o&&Po(o.type);return N(`Maximum recursive updates exceeded${l?` in component <${l}>`:""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`),!0}else e.set(n,s+1)}}let Mn=!1;const Ps=new Set;$l().__VUE_HMR_RUNTIME__={createRecord:Ar(td),rerender:Ar(mm),reload:Ar(gm)};const ws=new Map;function hm(e){const n=e.type.__hmrId;let s=ws.get(n);s||(td(n,e.type),s=ws.get(n)),s.instances.add(e)}function ym(e){ws.get(e.type.__hmrId).instances.delete(e)}function td(e,n){return ws.has(e)?!1:(ws.set(e,{initialDef:go(n),instances:new Set}),!0)}function go(e){return Ud(e)?e.__vccOpts:e}function mm(e,n){const s=ws.get(e);s&&(s.initialDef.render=n,[...s.instances].forEach(o=>{n&&(o.render=n,go(o.type).render=n),o.renderCache=[],Mn=!0,o.update(),Mn=!1}))}function gm(e,n){const s=ws.get(e);if(!s)return;n=go(n),hc(s.initialDef,n);const o=[...s.instances];for(const l of o){const r=go(l.type);Ps.has(r)||(r!==s.initialDef&&hc(r,n),Ps.add(r)),l.appContext.propsCache.delete(l.type),l.appContext.emitsCache.delete(l.type),l.appContext.optionsCache.delete(l.type),l.ceReload?(Ps.add(r),l.ceReload(n.styles),Ps.delete(r)):l.parent?ir(l.parent.update):l.appContext.reload?l.appContext.reload():typeof window<"u"?window.location.reload():console.warn("[HMR] Root or manually mounted instance modified. Full reload required.")}Jp(()=>{for(const l of o)Ps.delete(go(l.type))})}function hc(e,n){Ne(e,n);for(const s in e)s!=="__file"&&!(s in n)&&delete e[s]}function Ar(e){return(n,s)=>{try{return e(n,s)}catch(o){console.error(o),console.warn("[HMR] Something went wrong during Vue component hot-reload. Full reload required.")}}}let sn,po=[],oa=!1;function Go(e,...n){sn?sn.emit(e,...n):oa||po.push({event:e,args:n})}function nd(e,n){var s,o;sn=e,sn?(sn.enabled=!0,po.forEach(({event:l,args:r})=>sn.emit(l,...r)),po=[]):typeof window<"u"&&window.HTMLElement&&!((o=(s=window.navigator)==null?void 0:s.userAgent)!=null&&o.includes("jsdom"))?((n.__VUE_DEVTOOLS_HOOK_REPLAY__=n.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(r=>{nd(r,n)}),setTimeout(()=>{sn||(n.__VUE_DEVTOOLS_HOOK_REPLAY__=null,oa=!0,po=[])},3e3)):(oa=!0,po=[])}function vm(e,n){Go("app:init",e,n,{Fragment:De,Text:Qo,Comment:ut,Static:wl})}function _m(e){Go("app:unmount",e)}const la=gi("component:added"),sd=gi("component:updated"),bm=gi("component:removed"),xm=e=>{sn&&typeof sn.cleanupBuffer=="function"&&!sn.cleanupBuffer(e)&&bm(e)};function gi(e){return n=>{Go(e,n.appContext.app,n.uid,n.parent?n.parent.uid:void 0,n)}}const Am=od("perf:start"),wm=od("perf:end");function od(e){return(n,s,o)=>{Go(e,n.appContext.app,n.uid,n,s,o)}}function Bm(e,n,s){Go("component:emit",e.appContext.app,e,n,s)}function km(e,n,...s){if(e.isUnmounted)return;const o=e.vnode.props||Le;{const{emitsOptions:p,propsOptions:[f]}=e;if(p)if(!(n in p))(!f||!(ns(n)in f))&&N(`Component emitted event "${n}" but it is neither declared in the emits option nor as an "${ns(n)}" prop.`);else{const h=p[n];pe(h)&&(h(...s)||N(`Invalid event arguments: event validation failed for event "${n}".`))}}let l=s;const r=n.startsWith("update:"),a=r&&n.slice(7);if(a&&a in o){const p=`${a==="modelValue"?"model":a}Modifiers`,{number:f,trim:h}=o[p]||Le;h&&(l=s.map(y=>qe(y)?y.trim():y)),f&&(l=s.map(ay))}Bm(e,n,l);{const p=n.toLowerCase();p!==n&&o[ns(p)]&&N(`Event "${p}" is emitted in component ${mr(e,e.type)} but the handler is registered for "${n}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${wn(n)}" instead of "${n}".`)}let i,c=o[i=ns(n)]||o[i=ns(an(n))];!c&&r&&(c=o[i=ns(wn(n))]),c&&Nt(c,e,6,l);const u=o[i+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[i])return;e.emitted[i]=!0,Nt(u,e,6,l)}}function ld(e,n,s=!1){const o=n.emitsCache,l=o.get(e);if(l!==void 0)return l;const r=e.emits;let a={},i=!1;if(!pe(e)){const c=u=>{const p=ld(u,n,!0);p&&(i=!0,Ne(a,p))};!s&&n.mixins.length&&n.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!r&&!i?($e(e)&&o.set(e,null),null):(ae(r)?r.forEach(c=>a[c]=null):Ne(a,r),$e(e)&&o.set(e,a),a)}function cr(e,n){return!e||!zo(n)?!1:(n=n.slice(2).replace(/Once$/,""),Be(e,n[0].toLowerCase()+n.slice(1))||Be(e,wn(n))||Be(e,n))}let Xe=null,ur=null;function Ml(e){const n=Xe;return Xe=e,ur=e&&e.type.__scopeId||null,n}function vi(e){ur=e}function _i(){ur=null}function O(e,n=Xe,s){if(!n||e._n)return e;const o=(...l)=>{o._d&&Ec(-1);const r=Ml(n);let a;try{a=e(...l)}finally{Ml(r),o._d&&Ec(1)}return sd(n),a};return o._n=!0,o._c=!0,o._d=!0,o}let ra=!1;function Ll(){ra=!0}function wr(e){const{type:n,vnode:s,proxy:o,withProxy:l,props:r,propsOptions:[a],slots:i,attrs:c,emit:u,render:p,renderCache:f,data:h,setupState:y,ctx:m,inheritAttrs:b}=e;let w,A;const B=Ml(e);ra=!1;try{if(s.shapeFlag&4){const F=l||o;w=Gt(p.call(F,F,f,r,y,h,m)),A=c}else{const F=n;c===r&&Ll(),w=Gt(F.length>1?F(r,{get attrs(){return Ll(),c},slots:i,emit:u}):F(r,null)),A=n.props?c:Fm(c)}}catch(F){vo.length=0,ar(F,e,1),w=I(ut)}let x=w,C;if(w.patchFlag>0&&w.patchFlag&2048&&([x,C]=Cm(w)),A&&b!==!1){const F=Object.keys(A),{shapeFlag:D}=x;if(F.length){if(D&7)a&&F.some(Sl)&&(A=Em(A,a)),x=dn(x,A);else if(!ra&&x.type!==ut){const R=Object.keys(c),U=[],j=[];for(let ne=0,ue=R.length;ne<ue;ne++){const Q=R[ne];zo(Q)?Sl(Q)||U.push(Q[2].toLowerCase()+Q.slice(3)):j.push(Q)}j.length&&N(`Extraneous non-props attributes (${j.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`),U.length&&N(`Extraneous non-emits event listeners (${U.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`)}}}return s.dirs&&(yc(x)||N("Runtime directive used on component with non-element root node. The directives will not function as intended."),x=dn(x),x.dirs=x.dirs?x.dirs.concat(s.dirs):s.dirs),s.transition&&(yc(x)||N("Component inside <Transition> renders non-element root node that cannot be animated."),x.transition=s.transition),C?C(x):w=x,Ml(B),w}const Cm=e=>{const n=e.children,s=e.dynamicChildren,o=rd(n);if(!o)return[e,void 0];const l=n.indexOf(o),r=s?s.indexOf(o):-1,a=i=>{n[l]=i,s&&(r>-1?s[r]=i:i.patchFlag>0&&(e.dynamicChildren=[...s,i]))};return[Gt(o),a]};function rd(e){let n;for(let s=0;s<e.length;s++){const o=e[s];if(pn(o)){if(o.type!==ut||o.children==="v-if"){if(n)return;n=o}}else return}return n}const Fm=e=>{let n;for(const s in e)(s==="class"||s==="style"||zo(s))&&((n||(n={}))[s]=e[s]);return n},Em=(e,n)=>{const s={};for(const o in e)(!Sl(o)||!(o.slice(9)in n))&&(s[o]=e[o]);return s},yc=e=>e.shapeFlag&7||e.type===ut;function Dm(e,n,s){const{props:o,children:l,component:r}=e,{props:a,children:i,patchFlag:c}=n,u=r.emitsOptions;if((l||i)&&Mn||n.dirs||n.transition)return!0;if(s&&c>=0){if(c&1024)return!0;if(c&16)return o?mc(o,a,u):!!a;if(c&8){const p=n.dynamicProps;for(let f=0;f<p.length;f++){const h=p[f];if(a[h]!==o[h]&&!cr(u,h))return!0}}}else return(l||i)&&(!i||!i.$stable)?!0:o===a?!1:o?a?mc(o,a,u):!0:!!a;return!1}function mc(e,n,s){const o=Object.keys(n);if(o.length!==Object.keys(e).length)return!0;for(let l=0;l<o.length;l++){const r=o[l];if(n[r]!==e[r]&&!cr(s,r))return!0}return!1}function Sm({vnode:e,parent:n},s){for(;n&&n.subTree===e;)(e=n.vnode).el=s,n=n.parent}const ad=e=>e.__isSuspense;function Tm(e,n){n&&n.pendingBranch?ae(e)?n.effects.push(...e):n.effects.push(e):Jp(e)}function Cs(e,n){return bi(e,null,n)}const al={};function ge(e,n,s){return pe(n)||N("`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."),bi(e,n,s)}function bi(e,n,{immediate:s,deep:o,flush:l,onTrack:r,onTrigger:a}=Le){var i;n||(s!==void 0&&N('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'),o!==void 0&&N('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'));const c=F=>{N("Invalid watch source: ",F,"A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.")},u=ri()===((i=Je)==null?void 0:i.scope)?Je:null;let p,f=!1,h=!1;if(Te(e)?(p=()=>e.value,f=Pl(e)):ms(e)?(p=()=>e,o=!0):ae(e)?(h=!0,f=e.some(F=>ms(F)||Pl(F)),p=()=>e.map(F=>{if(Te(F))return F.value;if(ms(F))return ps(F);if(pe(F))return xn(F,u,2);c(F)})):pe(e)?n?p=()=>xn(e,u,2):p=()=>{if(!(u&&u.isUnmounted))return y&&y(),Nt(e,u,3,[m])}:(p=At,c(e)),n&&o){const F=p;p=()=>ps(F())}let y,m=F=>{y=x.onStop=()=>{xn(F,u,4)}},b;if(Oo)if(m=At,n?s&&Nt(n,u,3,[p(),h?[]:void 0,m]):p(),l==="sync"){const F=R0();b=F.__watcherHandles||(F.__watcherHandles=[])}else return At;let w=h?new Array(e.length).fill(al):al;const A=()=>{if(x.active)if(n){const F=x.run();(o||f||(h?F.some((D,R)=>Do(D,w[R])):Do(F,w)))&&(y&&y(),Nt(n,u,3,[F,w===al?void 0:h&&w[0]===al?[]:w,m]),w=F)}else x.run()};A.allowRecurse=!!n;let B;l==="sync"?B=A:l==="post"?B=()=>lt(A,u&&u.suspense):(A.pre=!0,u&&(A.id=u.uid),B=()=>ir(A));const x=new ii(p,B);x.onTrack=r,x.onTrigger=a,n?s?A():w=x.run():l==="post"?lt(x.run.bind(x),u&&u.suspense):x.run();const C=()=>{x.stop(),u&&u.scope&&ti(u.scope.effects,x)};return b&&b.push(C),C}function $m(e,n,s){const o=this.proxy,l=qe(e)?e.includes(".")?id(o,e):()=>o[e]:e.bind(o,o);let r;pe(n)?r=n:(r=n.handler,s=n);const a=Je;js(this);const i=bi(l,r.bind(o),s);return a?js(a):_s(),i}function id(e,n){const s=n.split(".");return()=>{let o=e;for(let l=0;l<s.length&&o;l++)o=o[s[l]];return o}}function ps(e,n){if(!$e(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),Te(e))ps(e.value,n);else if(ae(e))for(let s=0;s<e.length;s++)ps(e[s],n);else if(kp(e)||hs(e))e.forEach(s=>{ps(s,n)});else if(Fp(e))for(const s in e)ps(e[s],n);return e}function cd(e){oy(e)&&N("Do not use built-in directive ids as custom directive id: "+e)}function Ke(e,n){const s=Xe;if(s===null)return N("withDirectives can only be used inside render functions."),e;const o=yr(s)||s.proxy,l=e.dirs||(e.dirs=[]);for(let r=0;r<n.length;r++){let[a,i,c,u=Le]=n[r];a&&(pe(a)&&(a={mounted:a,updated:a}),a.deep&&ps(i),l.push({dir:a,instance:o,value:i,oldValue:void 0,arg:c,modifiers:u}))}return e}function Zn(e,n,s,o){const l=e.dirs,r=n&&n.dirs;for(let a=0;a<l.length;a++){const i=l[a];r&&(i.oldValue=r[a].value);let c=i.dir[o];c&&(Bs(),Nt(c,s,8,[e.el,i,e,n]),ks())}}function Um(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Gn(()=>{e.isMounted=!0}),Yo(()=>{e.isUnmounting=!0}),e}const It=[Function,Array],Om={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:It,onEnter:It,onAfterEnter:It,onEnterCancelled:It,onBeforeLeave:It,onLeave:It,onAfterLeave:It,onLeaveCancelled:It,onBeforeAppear:It,onAppear:It,onAfterAppear:It,onAppearCancelled:It};function Pm(e,n){const{leavingVNodes:s}=e;let o=s.get(n.type);return o||(o=Object.create(null),s.set(n.type,o)),o}function aa(e,n,s,o){const{appear:l,mode:r,persisted:a=!1,onBeforeEnter:i,onEnter:c,onAfterEnter:u,onEnterCancelled:p,onBeforeLeave:f,onLeave:h,onAfterLeave:y,onLeaveCancelled:m,onBeforeAppear:b,onAppear:w,onAfterAppear:A,onAppearCancelled:B}=n,x=String(e.key),C=Pm(s,e),F=(U,j)=>{U&&Nt(U,o,9,j)},D=(U,j)=>{const ne=j[1];F(U,j),ae(U)?U.every(ue=>ue.length<=1)&&ne():U.length<=1&&ne()},R={mode:r,persisted:a,beforeEnter(U){let j=i;if(!s.isMounted)if(l)j=b||i;else return;U._leaveCb&&U._leaveCb(!0);const ne=C[x];ne&&ls(e,ne)&&ne.el._leaveCb&&ne.el._leaveCb(),F(j,[U])},enter(U){let j=c,ne=u,ue=p;if(!s.isMounted)if(l)j=w||c,ne=A||u,ue=B||p;else return;let Q=!1;const ye=U._enterCb=ve=>{Q||(Q=!0,ve?F(ue,[U]):F(ne,[U]),R.delayedLeave&&R.delayedLeave(),U._enterCb=void 0)};j?D(j,[U,ye]):ye()},leave(U,j){const ne=String(e.key);if(U._enterCb&&U._enterCb(!0),s.isUnmounting)return j();F(f,[U]);let ue=!1;const Q=U._leaveCb=ye=>{ue||(ue=!0,j(),ye?F(m,[U]):F(y,[U]),U._leaveCb=void 0,C[ne]===e&&delete C[ne])};C[ne]=e,h?D(h,[U,Q]):Q()},clone(U){return aa(U,n,s,o)}};return R}function Rl(e,n){e.shapeFlag&6&&e.component?Rl(e.component.subTree,n):e.shapeFlag&128?(e.ssContent.transition=n.clone(e.ssContent),e.ssFallback.transition=n.clone(e.ssFallback)):e.transition=n}function ud(e,n=!1,s){let o=[],l=0;for(let r=0;r<e.length;r++){let a=e[r];const i=s==null?a.key:String(s)+String(a.key!=null?a.key:r);a.type===De?(a.patchFlag&128&&l++,o=o.concat(ud(a.children,n,i))):(n||a.type!==ut)&&o.push(i!=null?dn(a,{key:i}):a)}if(l>1)for(let r=0;r<o.length;r++)o[r].patchFlag=-2;return o}function ke(e,n){return pe(e)?(()=>Ne({name:e.name},n,{setup:e}))():e}const Rs=e=>!!e.type.__asyncLoader,xi=e=>e.type.__isKeepAlive,Im={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(e,{slots:n}){const s=Tt(),o=s.ctx;if(!o.renderer)return()=>{const B=n.default&&n.default();return B&&B.length===1?B[0]:B};const l=new Map,r=new Set;let a=null;s.__v_cache=l;const i=s.suspense,{renderer:{p:c,m:u,um:p,o:{createElement:f}}}=o,h=f("div");o.activate=(B,x,C,F,D)=>{const R=B.component;u(B,x,C,0,i),c(R.vnode,B,x,C,R,i,F,B.slotScopeIds,D),lt(()=>{R.isDeactivated=!1,R.a&&os(R.a);const U=B.props&&B.props.onVnodeMounted;U&&Mt(U,R.parent,B)},i),la(R)},o.deactivate=B=>{const x=B.component;u(B,h,null,1,i),lt(()=>{x.da&&os(x.da);const C=B.props&&B.props.onVnodeUnmounted;C&&Mt(C,x.parent,B),x.isDeactivated=!0},i),la(x)};function y(B){Br(B),p(B,s,i,!0)}function m(B){l.forEach((x,C)=>{const F=Po(x.type);F&&(!B||!B(F))&&b(C)})}function b(B){const x=l.get(B);!a||!ls(x,a)?y(x):a&&Br(a),l.delete(B),r.delete(B)}ge(()=>[e.include,e.exclude],([B,x])=>{B&&m(C=>fo(B,C)),x&&m(C=>!fo(x,C))},{flush:"post",deep:!0});let w=null;const A=()=>{w!=null&&l.set(w,kr(s.subTree))};return Gn(A),dr(A),Yo(()=>{l.forEach(B=>{const{subTree:x,suspense:C}=s,F=kr(x);if(B.type===F.type&&B.key===F.key){Br(F);const D=F.component.da;D&&lt(D,C);return}y(B)})}),()=>{if(w=null,!n.default)return null;const B=n.default(),x=B[0];if(B.length>1)return N("KeepAlive should contain exactly one component child."),a=null,B;if(!pn(x)||!(x.shapeFlag&4)&&!(x.shapeFlag&128))return a=null,x;let C=kr(x);const F=C.type,D=Po(Rs(C)?C.type.__asyncResolved||{}:F),{include:R,exclude:U,max:j}=e;if(R&&(!D||!fo(R,D))||U&&D&&fo(U,D))return a=C,x;const ne=C.key==null?F:C.key,ue=l.get(ne);return C.el&&(C=dn(C),x.shapeFlag&128&&(x.ssContent=C)),w=ne,ue?(C.el=ue.el,C.component=ue.component,C.transition&&Rl(C,C.transition),C.shapeFlag|=512,r.delete(ne),r.add(ne)):(r.add(ne),j&&r.size>parseInt(j,10)&&b(r.values().next().value)),C.shapeFlag|=256,a=C,ad(x.type)?x:C}}},pd=Im;function fo(e,n){return ae(e)?e.some(s=>fo(s,n)):qe(e)?e.split(",").includes(n):sy(e)?e.test(n):!1}function dd(e,n){hd(e,"a",n)}function fd(e,n){hd(e,"da",n)}function hd(e,n,s=Je){const o=e.__wdc||(e.__wdc=()=>{let l=s;for(;l;){if(l.isDeactivated)return;l=l.parent}return e()});if(pr(n,o,s),s){let l=s.parent;for(;l&&l.parent;)xi(l.parent.vnode)&&Mm(o,n,s,l),l=l.parent}}function Mm(e,n,s,o){const l=pr(n,e,o,!0);fr(()=>{ti(o[n],l)},s)}function Br(e){e.shapeFlag&=-257,e.shapeFlag&=-513}function kr(e){return e.shapeFlag&128?e.ssContent:e}function pr(e,n,s=Je,o=!1){if(s){const l=s[e]||(s[e]=[]),r=n.__weh||(n.__weh=(...a)=>{if(s.isUnmounted)return;Bs(),js(s);const i=Nt(n,s,e,a);return _s(),ks(),i});return o?l.unshift(r):l.push(r),r}else{const l=ns(hi[e].replace(/ hook$/,""));N(`${l} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`)}}const Cn=e=>(n,s=Je)=>(!Oo||e==="sp")&&pr(e,(...o)=>n(...o),s),Lm=Cn("bm"),Gn=Cn("m"),Rm=Cn("bu"),dr=Cn("u"),Yo=Cn("bum"),fr=Cn("um"),Nm=Cn("sp"),qm=Cn("rtg"),Wm=Cn("rtc");function jm(e,n=Je){pr("ec",e,n)}const ia="components",Hm="directives";function Ws(e,n){return yd(ia,e,!0,n)||e}const Vm=Symbol.for("v-ndc");function qt(e){return yd(Hm,e)}function yd(e,n,s=!0,o=!1){const l=Xe||Je;if(l){const r=l.type;if(e===ia){const i=Po(r,!1);if(i&&(i===n||i===an(n)||i===As(an(n))))return r}const a=gc(l[e]||r[e],n)||gc(l.appContext[e],n);if(!a&&o)return r;if(s&&!a){const i=e===ia?`
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.`:"";N(`Failed to resolve ${e.slice(0,-1)}: ${n}${i}`)}return a}else N(`resolve${As(e.slice(0,-1))} can only be used in render() or setup().`)}function gc(e,n){return e&&(e[n]||e[an(n)]||e[As(an(n))])}function Fs(e,n,s,o){let l;const r=s&&s[o];if(ae(e)||qe(e)){l=new Array(e.length);for(let a=0,i=e.length;a<i;a++)l[a]=n(e[a],a,void 0,r&&r[a])}else if(typeof e=="number"){Number.isInteger(e)||N(`The v-for range expect an integer value but got ${e}.`),l=new Array(e);for(let a=0;a<e;a++)l[a]=n(a+1,a,void 0,r&&r[a])}else if($e(e))if(e[Symbol.iterator])l=Array.from(e,(a,i)=>n(a,i,void 0,r&&r[i]));else{const a=Object.keys(e);l=new Array(a.length);for(let i=0,c=a.length;i<c;i++){const u=a[i];l[i]=n(e[u],u,i,r&&r[i])}}else l=[];return s&&(s[o]=l),l}function Wt(e,n,s={},o,l){if(Xe.isCE||Xe.parent&&Rs(Xe.parent)&&Xe.parent.isCE)return n!=="default"&&(s.name=n),I("slot",s,o&&o());let r=e[n];r&&r.length>1&&(N("SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."),r=()=>[]),r&&r._c&&(r._d=!1),v();const a=r&&md(r(s)),i=W(De,{key:s.key||a&&a.key||`_${n}`},a||(o?o():[]),a&&e._===1?64:-2);return!l&&i.scopeId&&(i.slotScopeIds=[i.scopeId+"-s"]),r&&r._c&&(r._d=!0),i}function md(e){return e.some(n=>pn(n)?!(n.type===ut||n.type===De&&!md(n.children)):!0)?e:null}const ca=e=>e?Sd(e)?yr(e)||e.proxy:ca(e.parent):null,vs=Ne(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>uo(e.props),$attrs:e=>uo(e.attrs),$slots:e=>uo(e.slots),$refs:e=>uo(e.refs),$parent:e=>ca(e.parent),$root:e=>ca(e.root),$emit:e=>e.emit,$options:e=>wi(e),$forceUpdate:e=>e.f||(e.f=()=>ir(e.update)),$nextTick:e=>e.n||(e.n=it.bind(e.proxy)),$watch:e=>$m.bind(e)}),Ai=e=>e==="_"||e==="$",Cr=(e,n)=>e!==Le&&!e.__isScriptSetup&&Be(e,n),gd={get({_:e},n){const{ctx:s,setupState:o,data:l,props:r,accessCache:a,type:i,appContext:c}=e;if(n==="__isVue")return!0;let u;if(n[0]!=="$"){const y=a[n];if(y!==void 0)switch(y){case 1:return o[n];case 2:return l[n];case 4:return s[n];case 3:return r[n]}else{if(Cr(o,n))return a[n]=1,o[n];if(l!==Le&&Be(l,n))return a[n]=2,l[n];if((u=e.propsOptions[0])&&Be(u,n))return a[n]=3,r[n];if(s!==Le&&Be(s,n))return a[n]=4,s[n];ua&&(a[n]=0)}}const p=vs[n];let f,h;if(p)return n==="$attrs"?(dt(e,"get",n),Ll()):n==="$slots"&&dt(e,"get",n),p(e);if((f=i.__cssModules)&&(f=f[n]))return f;if(s!==Le&&Be(s,n))return a[n]=4,s[n];if(h=c.config.globalProperties,Be(h,n))return h[n];Xe&&(!qe(n)||n.indexOf("__v")!==0)&&(l!==Le&&Ai(n[0])&&Be(l,n)?N(`Property ${JSON.stringify(n)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`):e===Xe&&N(`Property ${JSON.stringify(n)} was accessed during render but is not defined on instance.`))},set({_:e},n,s){const{data:o,setupState:l,ctx:r}=e;return Cr(l,n)?(l[n]=s,!0):l.__isScriptSetup&&Be(l,n)?(N(`Cannot mutate <script setup> binding "${n}" from Options API.`),!1):o!==Le&&Be(o,n)?(o[n]=s,!0):Be(e.props,n)?(N(`Attempting to mutate prop "${n}". Props are readonly.`),!1):n[0]==="$"&&n.slice(1)in e?(N(`Attempting to mutate public property "${n}". Properties starting with $ are reserved and readonly.`),!1):(n in e.appContext.config.globalProperties?Object.defineProperty(r,n,{enumerable:!0,configurable:!0,value:s}):r[n]=s,!0)},has({_:{data:e,setupState:n,accessCache:s,ctx:o,appContext:l,propsOptions:r}},a){let i;return!!s[a]||e!==Le&&Be(e,a)||Cr(n,a)||(i=r[0])&&Be(i,a)||Be(o,a)||Be(vs,a)||Be(l.config.globalProperties,a)},defineProperty(e,n,s){return s.get!=null?e._.accessCache[n]=0:Be(s,"value")&&this.set(e,n,s.value,null),Reflect.defineProperty(e,n,s)}};gd.ownKeys=e=>(N("Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."),Reflect.ownKeys(e));function zm(e){const n={};return Object.defineProperty(n,"_",{configurable:!0,enumerable:!1,get:()=>e}),Object.keys(vs).forEach(s=>{Object.defineProperty(n,s,{configurable:!0,enumerable:!1,get:()=>vs[s](e),set:At})}),n}function Km(e){const{ctx:n,propsOptions:[s]}=e;s&&Object.keys(s).forEach(o=>{Object.defineProperty(n,o,{enumerable:!0,configurable:!0,get:()=>e.props[o],set:At})})}function Gm(e){const{ctx:n,setupState:s}=e;Object.keys(he(s)).forEach(o=>{if(!s.__isScriptSetup){if(Ai(o[0])){N(`setup() return property ${JSON.stringify(o)} should not start with "$" or "_" which are reserved prefixes for Vue internals.`);return}Object.defineProperty(n,o,{enumerable:!0,configurable:!0,get:()=>s[o],set:At})}})}function Ym(){return Qm().slots}function Qm(){const e=Tt();return e||N("useContext() called without active instance."),e.setupContext||(e.setupContext=$d(e))}function vc(e){return ae(e)?e.reduce((n,s)=>(n[s]=null,n),{}):e}function Zm(){const e=Object.create(null);return(n,s)=>{e[s]?N(`${n} property "${s}" is already defined in ${e[s]}.`):e[s]=n}}let ua=!0;function Jm(e){const n=wi(e),s=e.proxy,o=e.ctx;ua=!1,n.beforeCreate&&_c(n.beforeCreate,e,"bc");const{data:l,computed:r,methods:a,watch:i,provide:c,inject:u,created:p,beforeMount:f,mounted:h,beforeUpdate:y,updated:m,activated:b,deactivated:w,beforeDestroy:A,beforeUnmount:B,destroyed:x,unmounted:C,render:F,renderTracked:D,renderTriggered:R,errorCaptured:U,serverPrefetch:j,expose:ne,inheritAttrs:ue,components:Q,directives:ye,filters:ve}=n,be=Zm();{const[ee]=e.propsOptions;if(ee)for(const ie in ee)be("Props",ie)}if(u&&Xm(u,o,be),a)for(const ee in a){const ie=a[ee];pe(ie)?(Object.defineProperty(o,ee,{value:ie.bind(s),configurable:!0,enumerable:!0,writable:!0}),be("Methods",ee)):N(`Method "${ee}" has type "${typeof ie}" in the component definition. Did you reference the function correctly?`)}if(l){pe(l)||N("The data option must be a function. Plain object usage is no longer supported.");const ee=l.call(s,s);if(si(ee)&&N("data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."),!$e(ee))N("data() should return an object.");else{e.data=He(ee);for(const ie in ee)be("Data",ie),Ai(ie[0])||Object.defineProperty(o,ie,{configurable:!0,enumerable:!0,get:()=>ee[ie],set:At})}}if(ua=!0,r)for(const ee in r){const ie=r[ee],we=pe(ie)?ie.bind(s,s):pe(ie.get)?ie.get.bind(s,s):At;we===At&&N(`Computed property "${ee}" has no getter.`);const Oe=!pe(ie)&&pe(ie.set)?ie.set.bind(s):()=>{N(`Write operation failed: computed property "${ee}" is readonly.`)},Ot=$({get:we,set:Oe});Object.defineProperty(o,ee,{enumerable:!0,configurable:!0,get:()=>Ot.value,set:rt=>Ot.value=rt}),be("Computed",ee)}if(i)for(const ee in i)vd(i[ee],o,s,ee);if(c){const ee=pe(c)?c.call(s):c;Reflect.ownKeys(ee).forEach(ie=>{Ft(ie,ee[ie])})}p&&_c(p,e,"c");function Pe(ee,ie){ae(ie)?ie.forEach(we=>ee(we.bind(s))):ie&&ee(ie.bind(s))}if(Pe(Lm,f),Pe(Gn,h),Pe(Rm,y),Pe(dr,m),Pe(dd,b),Pe(fd,w),Pe(jm,U),Pe(Wm,D),Pe(qm,R),Pe(Yo,B),Pe(fr,C),Pe(Nm,j),ae(ne))if(ne.length){const ee=e.exposed||(e.exposed={});ne.forEach(ie=>{Object.defineProperty(ee,ie,{get:()=>s[ie],set:we=>s[ie]=we})})}else e.exposed||(e.exposed={});F&&e.render===At&&(e.render=F),ue!=null&&(e.inheritAttrs=ue),Q&&(e.components=Q),ye&&(e.directives=ye)}function Xm(e,n,s=At){ae(e)&&(e=pa(e));for(const o in e){const l=e[o];let r;$e(l)?"default"in l?r=L(l.from||o,l.default,!0):r=L(l.from||o):r=L(l),Te(r)?Object.defineProperty(n,o,{enumerable:!0,configurable:!0,get:()=>r.value,set:a=>r.value=a}):n[o]=r,s("Inject",o)}}function _c(e,n,s){Nt(ae(e)?e.map(o=>o.bind(n.proxy)):e.bind(n.proxy),n,s)}function vd(e,n,s,o){const l=o.includes(".")?id(s,o):()=>s[o];if(qe(e)){const r=n[e];pe(r)?ge(l,r):N(`Invalid watch handler specified by key "${e}"`,r)}else if(pe(e))ge(l,e.bind(s));else if($e(e))if(ae(e))e.forEach(r=>vd(r,n,s,o));else{const r=pe(e.handler)?e.handler.bind(s):n[e.handler];pe(r)?ge(l,r,e):N(`Invalid watch handler specified by key "${e.handler}"`,r)}else N(`Invalid watch option: "${o}"`,e)}function wi(e){const n=e.type,{mixins:s,extends:o}=n,{mixins:l,optionsCache:r,config:{optionMergeStrategies:a}}=e.appContext,i=r.get(n);let c;return i?c=i:!l.length&&!s&&!o?c=n:(c={},l.length&&l.forEach(u=>Nl(c,u,a,!0)),Nl(c,n,a)),$e(n)&&r.set(n,c),c}function Nl(e,n,s,o=!1){const{mixins:l,extends:r}=n;r&&Nl(e,r,s,!0),l&&l.forEach(a=>Nl(e,a,s,!0));for(const a in n)if(o&&a==="expose")N('"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.');else{const i=e0[a]||s&&s[a];e[a]=i?i(e[a],n[a]):n[a]}return e}const e0={data:bc,props:xc,emits:xc,methods:ho,computed:ho,beforeCreate:ht,created:ht,beforeMount:ht,mounted:ht,beforeUpdate:ht,updated:ht,beforeDestroy:ht,beforeUnmount:ht,destroyed:ht,unmounted:ht,activated:ht,deactivated:ht,errorCaptured:ht,serverPrefetch:ht,components:ho,directives:ho,watch:n0,provide:bc,inject:t0};function bc(e,n){return n?e?function(){return Ne(pe(e)?e.call(this,this):e,pe(n)?n.call(this,this):n)}:n:e}function t0(e,n){return ho(pa(e),pa(n))}function pa(e){if(ae(e)){const n={};for(let s=0;s<e.length;s++)n[e[s]]=e[s];return n}return e}function ht(e,n){return e?[...new Set([].concat(e,n))]:n}function ho(e,n){return e?Ne(Object.create(null),e,n):n}function xc(e,n){return e?ae(e)&&ae(n)?[...new Set([...e,...n])]:Ne(Object.create(null),vc(e),vc(n??{})):n}function n0(e,n){if(!e)return n;if(!n)return e;const s=Ne(Object.create(null),e);for(const o in n)s[o]=ht(e[o],n[o]);return s}function _d(){return{app:null,config:{isNativeTag:Bp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let s0=0;function o0(e,n){return function(o,l=null){pe(o)||(o=Ne({},o)),l!=null&&!$e(l)&&(N("root props passed to app.mount() must be an object."),l=null);const r=_d();Object.defineProperty(r.config,"unwrapInjectedRef",{get(){return!0},set(){N("app.config.unwrapInjectedRef has been deprecated. 3.3 now alawys unwraps injected refs in Options API.")}});const a=new Set;let i=!1;const c=r.app={_uid:s0++,_component:o,_props:l,_container:null,_context:r,_instance:null,version:Hl,get config(){return r.config},set config(u){N("app.config cannot be replaced. Modify individual options instead.")},use(u,...p){return a.has(u)?N("Plugin has already been applied to target app."):u&&pe(u.install)?(a.add(u),u.install(c,...p)):pe(u)?(a.add(u),u(c,...p)):N('A plugin must either be a function or an object with an "install" function.'),c},mixin(u){return r.mixins.includes(u)?N("Mixin has already been applied to target app"+(u.name?`: ${u.name}`:"")):r.mixins.push(u),c},component(u,p){return ma(u,r.config),p?(r.components[u]&&N(`Component "${u}" has already been registered in target app.`),r.components[u]=p,c):r.components[u]},directive(u,p){return cd(u),p?(r.directives[u]&&N(`Directive "${u}" has already been registered in target app.`),r.directives[u]=p,c):r.directives[u]},mount(u,p,f){if(i)N("App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`");else{u.__vue_app__&&N("There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first.");const h=I(o,l);return h.appContext=r,r.reload=()=>{e(dn(h),u,f)},p&&n?n(h,u):e(h,u,f),i=!0,c._container=u,u.__vue_app__=c,c._instance=h.component,vm(c,Hl),yr(h.component)||h.component.proxy}},unmount(){i?(e(null,c._container),c._instance=null,_m(c),delete c._container.__vue_app__):N("Cannot unmount an app that is not mounted.")},provide(u,p){return u in r.provides&&N(`App already provides property with key "${String(u)}". It will be overwritten with the new value.`),r.provides[u]=p,c},runWithContext(u){ql=c;try{return u()}finally{ql=null}}};return c}}let ql=null;function Ft(e,n){if(!Je)N("provide() can only be used inside setup().");else{let s=Je.provides;const o=Je.parent&&Je.parent.provides;o===s&&(s=Je.provides=Object.create(o)),s[e]=n}}function L(e,n,s=!1){const o=Je||Xe;if(o||ql){const l=o?o.parent==null?o.vnode.appContext&&o.vnode.appContext.provides:o.parent.provides:ql._context.provides;if(l&&e in l)return l[e];if(arguments.length>1)return s&&pe(n)?n.call(o&&o.proxy):n;N(`injection "${String(e)}" not found.`)}else N("inject() can only be used inside setup() or functional components.")}function l0(e,n,s,o=!1){const l={},r={};Tl(r,hr,1),e.propsDefaults=Object.create(null),bd(e,n,l,r);for(const a in e.propsOptions[0])a in l||(l[a]=void 0);Ad(n||{},l,e),s?e.props=o?l:Gy(l):e.type.props?e.props=l:e.props=r,e.attrs=r}function r0(e){for(;e;){if(e.type.__hmrId)return!0;e=e.parent}}function a0(e,n,s,o){const{props:l,attrs:r,vnode:{patchFlag:a}}=e,i=he(l),[c]=e.propsOptions;let u=!1;if(!r0(e)&&(o||a>0)&&!(a&16)){if(a&8){const p=e.vnode.dynamicProps;for(let f=0;f<p.length;f++){let h=p[f];if(cr(e.emitsOptions,h))continue;const y=n[h];if(c)if(Be(r,h))y!==r[h]&&(r[h]=y,u=!0);else{const m=an(h);l[m]=da(c,i,m,y,e,!1)}else y!==r[h]&&(r[h]=y,u=!0)}}}else{bd(e,n,l,r)&&(u=!0);let p;for(const f in i)(!n||!Be(n,f)&&((p=wn(f))===f||!Be(n,p)))&&(c?s&&(s[f]!==void 0||s[p]!==void 0)&&(l[f]=da(c,i,f,void 0,e,!0)):delete l[f]);if(r!==i)for(const f in r)(!n||!Be(n,f))&&(delete r[f],u=!0)}u&&cn(e,"set","$attrs"),Ad(n||{},l,e)}function bd(e,n,s,o){const[l,r]=e.propsOptions;let a=!1,i;if(n)for(let c in n){if(bl(c))continue;const u=n[c];let p;l&&Be(l,p=an(c))?!r||!r.includes(p)?s[p]=u:(i||(i={}))[p]=u:cr(e.emitsOptions,c)||(!(c in o)||u!==o[c])&&(o[c]=u,a=!0)}if(r){const c=he(s),u=i||Le;for(let p=0;p<r.length;p++){const f=r[p];s[f]=da(l,c,f,u[f],e,!Be(u,f))}}return a}function da(e,n,s,o,l,r){const a=e[s];if(a!=null){const i=Be(a,"default");if(i&&o===void 0){const c=a.default;if(a.type!==Function&&!a.skipFactory&&pe(c)){const{propsDefaults:u}=l;s in u?o=u[s]:(js(l),o=u[s]=c.call(null,n),_s())}else o=c}a[0]&&(r&&!i?o=!1:a[1]&&(o===""||o===wn(s))&&(o=!0))}return o}function xd(e,n,s=!1){const o=n.propsCache,l=o.get(e);if(l)return l;const r=e.props,a={},i=[];let c=!1;if(!pe(e)){const p=f=>{c=!0;const[h,y]=xd(f,n,!0);Ne(a,h),y&&i.push(...y)};!s&&n.mixins.length&&n.mixins.forEach(p),e.extends&&p(e.extends),e.mixins&&e.mixins.forEach(p)}if(!r&&!c)return $e(e)&&o.set(e,Ms),Ms;if(ae(r))for(let p=0;p<r.length;p++){qe(r[p])||N("props must be strings when using array syntax.",r[p]);const f=an(r[p]);Ac(f)&&(a[f]=Le)}else if(r){$e(r)||N("invalid props options",r);for(const p in r){const f=an(p);if(Ac(f)){const h=r[p],y=a[f]=ae(h)||pe(h)?{type:h}:Ne({},h);if(y){const m=Bc(Boolean,y.type),b=Bc(String,y.type);y[0]=m>-1,y[1]=b<0||m<b,(m>-1||Be(y,"default"))&&i.push(f)}}}}const u=[a,i];return $e(e)&&o.set(e,u),u}function Ac(e){return e[0]!=="$"?!0:(N(`Invalid prop name: "${e}" is a reserved property.`),!1)}function fa(e){const n=e&&e.toString().match(/^\s*(function|class) (\w+)/);return n?n[2]:e===null?"null":""}function wc(e,n){return fa(e)===fa(n)}function Bc(e,n){return ae(n)?n.findIndex(s=>wc(s,e)):pe(n)&&wc(n,e)?0:-1}function Ad(e,n,s){const o=he(n),l=s.propsOptions[0];for(const r in l){let a=l[r];a!=null&&i0(r,o[r],a,!Be(e,r)&&!Be(e,wn(r)))}}function i0(e,n,s,o){const{type:l,required:r,validator:a,skipCheck:i}=s;if(r&&o){N('Missing required prop: "'+e+'"');return}if(!(n==null&&!r)){if(l!=null&&l!==!0&&!i){let c=!1;const u=ae(l)?l:[l],p=[];for(let f=0;f<u.length&&!c;f++){const{valid:h,expectedType:y}=u0(n,u[f]);p.push(y||""),c=h}if(!c){N(p0(e,n,p));return}}a&&!a(n)&&N('Invalid prop: custom validator check failed for prop "'+e+'".')}}const c0=Kn("String,Number,Boolean,Function,Symbol,BigInt");function u0(e,n){let s;const o=fa(n);if(c0(o)){const l=typeof e;s=l===o.toLowerCase(),!s&&l==="object"&&(s=e instanceof n)}else o==="Object"?s=$e(e):o==="Array"?s=ae(e):o==="null"?s=e===null:s=e instanceof n;return{valid:s,expectedType:o}}function p0(e,n,s){let o=`Invalid prop: type check failed for prop "${e}". Expected ${s.map(As).join(" | ")}`;const l=s[0],r=oi(n),a=kc(n,l),i=kc(n,r);return s.length===1&&Cc(l)&&!d0(l,r)&&(o+=` with value ${a}`),o+=`, got ${r} `,Cc(r)&&(o+=`with value ${i}.`),o}function kc(e,n){return n==="String"?`"${e}"`:n==="Number"?`${Number(e)}`:`${e}`}function Cc(e){return["string","number","boolean"].some(s=>e.toLowerCase()===s)}function d0(...e){return e.some(n=>n.toLowerCase()==="boolean")}const wd=e=>e[0]==="_"||e==="$stable",Bi=e=>ae(e)?e.map(Gt):[Gt(e)],f0=(e,n,s)=>{if(n._n)return n;const o=O((...l)=>(Je&&N(`Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`),Bi(n(...l))),s);return o._c=!1,o},Bd=(e,n,s)=>{const o=e._ctx;for(const l in e){if(wd(l))continue;const r=e[l];if(pe(r))n[l]=f0(l,r,o);else if(r!=null){N(`Non-function value encountered for slot "${l}". Prefer function slots for better performance.`);const a=Bi(r);n[l]=()=>a}}},kd=(e,n)=>{xi(e.vnode)||N("Non-function value encountered for default slot. Prefer function slots for better performance.");const s=Bi(n);e.slots.default=()=>s},h0=(e,n)=>{if(e.vnode.shapeFlag&32){const s=n._;s?(e.slots=he(n),Tl(n,"_",s)):Bd(n,e.slots={})}else e.slots={},n&&kd(e,n);Tl(e.slots,hr,1)},y0=(e,n,s)=>{const{vnode:o,slots:l}=e;let r=!0,a=Le;if(o.shapeFlag&32){const i=n._;i?Mn?(Ne(l,n),cn(e,"set","$slots")):s&&i===1?r=!1:(Ne(l,n),!s&&i===1&&delete l._):(r=!n.$stable,Bd(n,l)),a=n}else n&&(kd(e,n),a={default:1});if(r)for(const i in l)!wd(i)&&!(i in a)&&delete l[i]};function ha(e,n,s,o,l=!1){if(ae(e)){e.forEach((h,y)=>ha(h,n&&(ae(n)?n[y]:n),s,o,l));return}if(Rs(o)&&!l)return;const r=o.shapeFlag&4?yr(o.component)||o.component.proxy:o.el,a=l?null:r,{i,r:c}=e;if(!i){N("Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function.");return}const u=n&&n.r,p=i.refs===Le?i.refs={}:i.refs,f=i.setupState;if(u!=null&&u!==c&&(qe(u)?(p[u]=null,Be(f,u)&&(f[u]=null)):Te(u)&&(u.value=null)),pe(c))xn(c,i,12,[a,p]);else{const h=qe(c),y=Te(c);if(h||y){const m=()=>{if(e.f){const b=h?Be(f,c)?f[c]:p[c]:c.value;l?ae(b)&&ti(b,r):ae(b)?b.includes(r)||b.push(r):h?(p[c]=[r],Be(f,c)&&(f[c]=p[c])):(c.value=[r],e.k&&(p[e.k]=c.value))}else h?(p[c]=a,Be(f,c)&&(f[c]=a)):y?(c.value=a,e.k&&(p[e.k]=a)):N("Invalid template ref type:",c,`(${typeof c})`)};a?(m.id=-1,lt(m,s)):m()}else N("Invalid template ref type:",c,`(${typeof c})`)}}let Zs,On;function yn(e,n){e.appContext.config.performance&&Wl()&&On.mark(`vue-${n}-${e.uid}`),Am(e,n,Wl()?On.now():Date.now())}function mn(e,n){if(e.appContext.config.performance&&Wl()){const s=`vue-${n}-${e.uid}`,o=s+":end";On.mark(o),On.measure(`<${mr(e,e.type)}> ${n}`,s,o),On.clearMarks(s),On.clearMarks(o)}wm(e,n,Wl()?On.now():Date.now())}function Wl(){return Zs!==void 0||(typeof window<"u"&&window.performance?(Zs=!0,On=window.performance):Zs=!1),Zs}function m0(){const e=[];if(e.length){const n=e.length>1;console.warn(`Feature flag${n?"s":""} ${e.join(", ")} ${n?"are":"is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`)}}const lt=Tm;function g0(e){return v0(e)}function v0(e,n){m0();const s=$l();s.__VUE__=!0,nd(s.__VUE_DEVTOOLS_GLOBAL_HOOK__,s);const{insert:o,remove:l,patchProp:r,createElement:a,createText:i,createComment:c,setText:u,setElementText:p,parentNode:f,nextSibling:h,setScopeId:y=At,insertStaticContent:m}=e,b=(g,_,E,M=null,P=null,K=null,J=!1,z=null,G=Mn?!1:!!_.dynamicChildren)=>{if(g===_)return;g&&!ls(g,_)&&(M=Z(g),_t(g,P,K,!0),g=null),_.patchFlag===-2&&(G=!1,_.dynamicChildren=null);const{type:q,ref:re,shapeFlag:se}=_;switch(q){case Qo:w(g,_,E,M);break;case ut:A(g,_,E,M);break;case wl:g==null?B(_,E,M,J):x(g,_,E,J);break;case De:ye(g,_,E,M,P,K,J,z,G);break;default:se&1?D(g,_,E,M,P,K,J,z,G):se&6?ve(g,_,E,M,P,K,J,z,G):se&64||se&128?q.process(g,_,E,M,P,K,J,z,G,te):N("Invalid VNode type:",q,`(${typeof q})`)}re!=null&&P&&ha(re,g&&g.ref,K,_||g,!_)},w=(g,_,E,M)=>{if(g==null)o(_.el=i(_.children),E,M);else{const P=_.el=g.el;_.children!==g.children&&u(P,_.children)}},A=(g,_,E,M)=>{g==null?o(_.el=c(_.children||""),E,M):_.el=g.el},B=(g,_,E,M)=>{[g.el,g.anchor]=m(g.children,_,E,M,g.el,g.anchor)},x=(g,_,E,M)=>{if(_.children!==g.children){const P=h(g.anchor);F(g),[_.el,_.anchor]=m(_.children,E,P,M)}else _.el=g.el,_.anchor=g.anchor},C=({el:g,anchor:_},E,M)=>{let P;for(;g&&g!==_;)P=h(g),o(g,E,M),g=P;o(_,E,M)},F=({el:g,anchor:_})=>{let E;for(;g&&g!==_;)E=h(g),l(g),g=E;l(_)},D=(g,_,E,M,P,K,J,z,G)=>{J=J||_.type==="svg",g==null?R(_,E,M,P,K,J,z,G):ne(g,_,P,K,J,z,G)},R=(g,_,E,M,P,K,J,z)=>{let G,q;const{type:re,props:se,shapeFlag:ce,transition:fe,dirs:Ce}=g;if(G=g.el=a(g.type,K,se&&se.is,se),ce&8?p(G,g.children):ce&16&&j(g.children,G,null,M,P,K&&re!=="foreignObject",J,z),Ce&&Zn(g,null,M,"created"),U(G,g,g.scopeId,J,M),se){for(const Me in se)Me!=="value"&&!bl(Me)&&r(G,Me,null,se[Me],K,g.children,M,P,S);"value"in se&&r(G,"value",null,se.value),(q=se.onVnodeBeforeMount)&&Mt(q,M,g)}Object.defineProperty(G,"__vnode",{value:g,enumerable:!1}),Object.defineProperty(G,"__vueParentComponent",{value:M,enumerable:!1}),Ce&&Zn(g,null,M,"beforeMount");const Re=(!P||P&&!P.pendingBranch)&&fe&&!fe.persisted;Re&&fe.beforeEnter(G),o(G,_,E),((q=se&&se.onVnodeMounted)||Re||Ce)&&lt(()=>{q&&Mt(q,M,g),Re&&fe.enter(G),Ce&&Zn(g,null,M,"mounted")},P)},U=(g,_,E,M,P)=>{if(E&&y(g,E),M)for(let K=0;K<M.length;K++)y(g,M[K]);if(P){let K=P.subTree;if(K.patchFlag>0&&K.patchFlag&2048&&(K=rd(K.children)||K),_===K){const J=P.vnode;U(g,J,J.scopeId,J.slotScopeIds,P.parent)}}},j=(g,_,E,M,P,K,J,z,G=0)=>{for(let q=G;q<g.length;q++){const re=g[q]=z?$n(g[q]):Gt(g[q]);b(null,re,_,E,M,P,K,J,z)}},ne=(g,_,E,M,P,K,J)=>{const z=_.el=g.el;let{patchFlag:G,dynamicChildren:q,dirs:re}=_;G|=g.patchFlag&16;const se=g.props||Le,ce=_.props||Le;let fe;E&&Jn(E,!1),(fe=ce.onVnodeBeforeUpdate)&&Mt(fe,E,_,g),re&&Zn(_,g,E,"beforeUpdate"),E&&Jn(E,!0),Mn&&(G=0,J=!1,q=null);const Ce=P&&_.type!=="foreignObject";if(q?(ue(g.dynamicChildren,q,z,E,M,Ce,K),jl(g,_)):J||we(g,_,z,null,E,M,Ce,K,!1),G>0){if(G&16)Q(z,_,se,ce,E,M,P);else if(G&2&&se.class!==ce.class&&r(z,"class",null,ce.class,P),G&4&&r(z,"style",se.style,ce.style,P),G&8){const Re=_.dynamicProps;for(let Me=0;Me<Re.length;Me++){const Ge=Re[Me],Vt=se[Ge],Ss=ce[Ge];(Ss!==Vt||Ge==="value")&&r(z,Ge,Vt,Ss,P,g.children,E,M,S)}}G&1&&g.children!==_.children&&p(z,_.children)}else!J&&q==null&&Q(z,_,se,ce,E,M,P);((fe=ce.onVnodeUpdated)||re)&&lt(()=>{fe&&Mt(fe,E,_,g),re&&Zn(_,g,E,"updated")},M)},ue=(g,_,E,M,P,K,J)=>{for(let z=0;z<_.length;z++){const G=g[z],q=_[z],re=G.el&&(G.type===De||!ls(G,q)||G.shapeFlag&70)?f(G.el):E;b(G,q,re,null,M,P,K,J,!0)}},Q=(g,_,E,M,P,K,J)=>{if(E!==M){if(E!==Le)for(const z in E)!bl(z)&&!(z in M)&&r(g,z,E[z],null,J,_.children,P,K,S);for(const z in M){if(bl(z))continue;const G=M[z],q=E[z];G!==q&&z!=="value"&&r(g,z,q,G,J,_.children,P,K,S)}"value"in M&&r(g,"value",E.value,M.value)}},ye=(g,_,E,M,P,K,J,z,G)=>{const q=_.el=g?g.el:i(""),re=_.anchor=g?g.anchor:i("");let{patchFlag:se,dynamicChildren:ce,slotScopeIds:fe}=_;(Mn||se&2048)&&(se=0,G=!1,ce=null),fe&&(z=z?z.concat(fe):fe),g==null?(o(q,E,M),o(re,E,M),j(_.children,E,re,P,K,J,z,G)):se>0&&se&64&&ce&&g.dynamicChildren?(ue(g.dynamicChildren,ce,E,P,K,J,z),jl(g,_)):we(g,_,E,re,P,K,J,z,G)},ve=(g,_,E,M,P,K,J,z,G)=>{_.slotScopeIds=z,g==null?_.shapeFlag&512?P.ctx.activate(_,E,M,J,G):be(_,E,M,P,K,J,G):Pe(g,_,G)},be=(g,_,E,M,P,K,J)=>{const z=g.component=D0(g,M,P);if(z.type.__hmrId&&hm(z),xl(g),yn(z,"mount"),xi(g)&&(z.ctx.renderer=te),yn(z,"init"),T0(z),mn(z,"init"),z.asyncDep){if(P&&P.registerDep(z,ee),!g.el){const G=z.subTree=I(ut);A(null,G,_,E)}return}ee(z,g,_,E,P,K,J),Al(),mn(z,"mount")},Pe=(g,_,E)=>{const M=_.component=g.component;if(Dm(g,_,E))if(M.asyncDep&&!M.asyncResolved){xl(_),ie(M,_,E),Al();return}else M.next=_,dm(M.update),M.update();else _.el=g.el,M.vnode=_},ee=(g,_,E,M,P,K,J)=>{const z=()=>{if(g.isMounted){let{next:re,bu:se,u:ce,parent:fe,vnode:Ce}=g,Re=re,Me;xl(re||g.vnode),Jn(g,!1),re?(re.el=Ce.el,ie(g,re,J)):re=Ce,se&&os(se),(Me=re.props&&re.props.onVnodeBeforeUpdate)&&Mt(Me,fe,re,Ce),Jn(g,!0),yn(g,"render");const Ge=wr(g);mn(g,"render");const Vt=g.subTree;g.subTree=Ge,yn(g,"patch"),b(Vt,Ge,f(Vt.el),Z(Vt),g,P,K),mn(g,"patch"),re.el=Ge.el,Re===null&&Sm(g,Ge.el),ce&&lt(ce,P),(Me=re.props&&re.props.onVnodeUpdated)&&lt(()=>Mt(Me,fe,re,Ce),P),sd(g),Al()}else{let re;const{el:se,props:ce}=_,{bm:fe,m:Ce,parent:Re}=g,Me=Rs(_);if(Jn(g,!1),fe&&os(fe),!Me&&(re=ce&&ce.onVnodeBeforeMount)&&Mt(re,Re,_),Jn(g,!0),se&&Ie){const Ge=()=>{yn(g,"render"),g.subTree=wr(g),mn(g,"render"),yn(g,"hydrate"),Ie(se,g.subTree,g,P,null),mn(g,"hydrate")};Me?_.type.__asyncLoader().then(()=>!g.isUnmounted&&Ge()):Ge()}else{yn(g,"render");const Ge=g.subTree=wr(g);mn(g,"render"),yn(g,"patch"),b(null,Ge,E,M,g,P,K),mn(g,"patch"),_.el=Ge.el}if(Ce&&lt(Ce,P),!Me&&(re=ce&&ce.onVnodeMounted)){const Ge=_;lt(()=>Mt(re,Re,Ge),P)}(_.shapeFlag&256||Re&&Rs(Re.vnode)&&Re.vnode.shapeFlag&256)&&g.a&&lt(g.a,P),g.isMounted=!0,la(g),_=E=M=null}},G=g.effect=new ii(z,()=>ir(q),g.scope),q=g.update=()=>G.run();q.id=g.uid,Jn(g,!0),G.onTrack=g.rtc?re=>os(g.rtc,re):void 0,G.onTrigger=g.rtg?re=>os(g.rtg,re):void 0,q.ownerInstance=g,q()},ie=(g,_,E)=>{_.component=g;const M=g.vnode.props;g.vnode=_,g.next=null,a0(g,_.props,M,E),y0(g,_.children,E),Bs(),fc(),ks()},we=(g,_,E,M,P,K,J,z,G=!1)=>{const q=g&&g.children,re=g?g.shapeFlag:0,se=_.children,{patchFlag:ce,shapeFlag:fe}=_;if(ce>0){if(ce&128){Ot(q,se,E,M,P,K,J,z,G);return}else if(ce&256){Oe(q,se,E,M,P,K,J,z,G);return}}fe&8?(re&16&&S(q,P,K),se!==q&&p(E,se)):re&16?fe&16?Ot(q,se,E,M,P,K,J,z,G):S(q,P,K,!0):(re&8&&p(E,""),fe&16&&j(se,E,M,P,K,J,z,G))},Oe=(g,_,E,M,P,K,J,z,G)=>{g=g||Ms,_=_||Ms;const q=g.length,re=_.length,se=Math.min(q,re);let ce;for(ce=0;ce<se;ce++){const fe=_[ce]=G?$n(_[ce]):Gt(_[ce]);b(g[ce],fe,E,null,P,K,J,z,G)}q>re?S(g,P,K,!0,!1,se):j(_,E,M,P,K,J,z,G,se)},Ot=(g,_,E,M,P,K,J,z,G)=>{let q=0;const re=_.length;let se=g.length-1,ce=re-1;for(;q<=se&&q<=ce;){const fe=g[q],Ce=_[q]=G?$n(_[q]):Gt(_[q]);if(ls(fe,Ce))b(fe,Ce,E,null,P,K,J,z,G);else break;q++}for(;q<=se&&q<=ce;){const fe=g[se],Ce=_[ce]=G?$n(_[ce]):Gt(_[ce]);if(ls(fe,Ce))b(fe,Ce,E,null,P,K,J,z,G);else break;se--,ce--}if(q>se){if(q<=ce){const fe=ce+1,Ce=fe<re?_[fe].el:M;for(;q<=ce;)b(null,_[q]=G?$n(_[q]):Gt(_[q]),E,Ce,P,K,J,z,G),q++}}else if(q>ce)for(;q<=se;)_t(g[q],P,K,!0),q++;else{const fe=q,Ce=q,Re=new Map;for(q=Ce;q<=ce;q++){const ft=_[q]=G?$n(_[q]):Gt(_[q]);ft.key!=null&&(Re.has(ft.key)&&N("Duplicate keys found during update:",JSON.stringify(ft.key),"Make sure keys are unique."),Re.set(ft.key,q))}let Me,Ge=0;const Vt=ce-Ce+1;let Ss=!1,nc=0;const Qs=new Array(Vt);for(q=0;q<Vt;q++)Qs[q]=0;for(q=fe;q<=se;q++){const ft=g[q];if(Ge>=Vt){_t(ft,P,K,!0);continue}let en;if(ft.key!=null)en=Re.get(ft.key);else for(Me=Ce;Me<=ce;Me++)if(Qs[Me-Ce]===0&&ls(ft,_[Me])){en=Me;break}en===void 0?_t(ft,P,K,!0):(Qs[en-Ce]=q+1,en>=nc?nc=en:Ss=!0,b(ft,_[en],E,null,P,K,J,z,G),Ge++)}const sc=Ss?_0(Qs):Ms;for(Me=sc.length-1,q=Vt-1;q>=0;q--){const ft=Ce+q,en=_[ft],oc=ft+1<re?_[ft+1].el:M;Qs[q]===0?b(null,en,E,oc,P,K,J,z,G):Ss&&(Me<0||q!==sc[Me]?rt(en,E,oc,2):Me--)}}},rt=(g,_,E,M,P=null)=>{const{el:K,type:J,transition:z,children:G,shapeFlag:q}=g;if(q&6){rt(g.component.subTree,_,E,M);return}if(q&128){g.suspense.move(_,E,M);return}if(q&64){J.move(g,_,E,te);return}if(J===De){o(K,_,E);for(let se=0;se<G.length;se++)rt(G[se],_,E,M);o(g.anchor,_,E);return}if(J===wl){C(g,_,E);return}if(M!==2&&q&1&&z)if(M===0)z.beforeEnter(K),o(K,_,E),lt(()=>z.enter(K),P);else{const{leave:se,delayLeave:ce,afterLeave:fe}=z,Ce=()=>o(K,_,E),Re=()=>{se(K,()=>{Ce(),fe&&fe()})};ce?ce(K,Ce,Re):Re()}else o(K,_,E)},_t=(g,_,E,M=!1,P=!1)=>{const{type:K,props:J,ref:z,children:G,dynamicChildren:q,shapeFlag:re,patchFlag:se,dirs:ce}=g;if(z!=null&&ha(z,null,E,g,!0),re&256){_.ctx.deactivate(g);return}const fe=re&1&&ce,Ce=!Rs(g);let Re;if(Ce&&(Re=J&&J.onVnodeBeforeUnmount)&&Mt(Re,_,g),re&6)Pt(g.component,E,M);else{if(re&128){g.suspense.unmount(E,M);return}fe&&Zn(g,null,_,"beforeUnmount"),re&64?g.type.remove(g,_,E,P,te,M):q&&(K!==De||se>0&&se&64)?S(q,_,E,!1,!0):(K===De&&se&384||!P&&re&16)&&S(G,_,E),M&&Xt(g)}(Ce&&(Re=J&&J.onVnodeUnmounted)||fe)&&lt(()=>{Re&&Mt(Re,_,g),fe&&Zn(g,null,_,"unmounted")},E)},Xt=g=>{const{type:_,el:E,anchor:M,transition:P}=g;if(_===De){g.patchFlag>0&&g.patchFlag&2048&&P&&!P.persisted?g.children.forEach(J=>{J.type===ut?l(J.el):Xt(J)}):Qn(E,M);return}if(_===wl){F(g);return}const K=()=>{l(E),P&&!P.persisted&&P.afterLeave&&P.afterLeave()};if(g.shapeFlag&1&&P&&!P.persisted){const{leave:J,delayLeave:z}=P,G=()=>J(E,K);z?z(g.el,K,G):G()}else K()},Qn=(g,_)=>{let E;for(;g!==_;)E=h(g),l(g),g=E;l(_)},Pt=(g,_,E)=>{g.type.__hmrId&&ym(g);const{bum:M,scope:P,update:K,subTree:J,um:z}=g;M&&os(M),P.stop(),K&&(K.active=!1,_t(J,g,_,E)),z&&lt(z,_),lt(()=>{g.isUnmounted=!0},_),_&&_.pendingBranch&&!_.isUnmounted&&g.asyncDep&&!g.asyncResolved&&g.suspenseId===_.pendingId&&(_.deps--,_.deps===0&&_.resolve()),xm(g)},S=(g,_,E,M=!1,P=!1,K=0)=>{for(let J=K;J<g.length;J++)_t(g[J],_,E,M,P)},Z=g=>g.shapeFlag&6?Z(g.component.subTree):g.shapeFlag&128?g.suspense.next():h(g.anchor||g.el),X=(g,_,E)=>{g==null?_._vnode&&_t(_._vnode,null,null,!0):b(_._vnode||null,g,_,null,null,null,E),fc(),Xp(),_._vnode=g},te={p:b,um:_t,m:rt,r:Xt,mt:be,mc:j,pc:we,pbc:ue,n:Z,o:e};let Ae,Ie;return n&&([Ae,Ie]=n(te)),{render:X,hydrate:Ae,createApp:o0(X,Ae)}}function Jn({effect:e,update:n},s){e.allowRecurse=n.allowRecurse=s}function jl(e,n,s=!1){const o=e.children,l=n.children;if(ae(o)&&ae(l))for(let r=0;r<o.length;r++){const a=o[r];let i=l[r];i.shapeFlag&1&&!i.dynamicChildren&&((i.patchFlag<=0||i.patchFlag===32)&&(i=l[r]=$n(l[r]),i.el=a.el),s||jl(a,i)),i.type===Qo&&(i.el=a.el),i.type===ut&&!i.el&&(i.el=a.el)}}function _0(e){const n=e.slice(),s=[0];let o,l,r,a,i;const c=e.length;for(o=0;o<c;o++){const u=e[o];if(u!==0){if(l=s[s.length-1],e[l]<u){n[o]=l,s.push(o);continue}for(r=0,a=s.length-1;r<a;)i=r+a>>1,e[s[i]]<u?r=i+1:a=i;u<e[s[r]]&&(r>0&&(n[o]=s[r-1]),s[r]=o)}}for(r=s.length,a=s[r-1];r-- >0;)s[r]=a,a=n[a];return s}const b0=e=>e.__isTeleport,Ns=e=>e&&(e.disabled||e.disabled===""),Fc=e=>typeof SVGElement<"u"&&e instanceof SVGElement,ya=(e,n)=>{const s=e&&e.to;if(qe(s))if(n){const o=n(s);return o||N(`Failed to locate Teleport target with selector "${s}". Note the target element must exist before the component is mounted - i.e. the target cannot be rendered by the component itself, and ideally should be outside of the entire Vue component tree.`),o}else return N("Current renderer does not support string target for Teleports. (missing querySelector renderer option)"),null;else return!s&&!Ns(e)&&N(`Invalid Teleport target: ${s}`),s},x0={__isTeleport:!0,process(e,n,s,o,l,r,a,i,c,u){const{mc:p,pc:f,pbc:h,o:{insert:y,querySelector:m,createText:b,createComment:w}}=u,A=Ns(n.props);let{shapeFlag:B,children:x,dynamicChildren:C}=n;if(Mn&&(c=!1,C=null),e==null){const F=n.el=w("teleport start"),D=n.anchor=w("teleport end");y(F,s,o),y(D,s,o);const R=n.target=ya(n.props,m),U=n.targetAnchor=b("");R?(y(U,R),a=a||Fc(R)):A||N("Invalid Teleport target on mount:",R,`(${typeof R})`);const j=(ne,ue)=>{B&16&&p(x,ne,ue,l,r,a,i,c)};A?j(s,D):R&&j(R,U)}else{n.el=e.el;const F=n.anchor=e.anchor,D=n.target=e.target,R=n.targetAnchor=e.targetAnchor,U=Ns(e.props),j=U?s:D,ne=U?F:R;if(a=a||Fc(D),C?(h(e.dynamicChildren,C,j,l,r,a,i),jl(e,n,!0)):c||f(e,n,j,ne,l,r,a,i,!1),A)U||il(n,s,F,u,1);else if((n.props&&n.props.to)!==(e.props&&e.props.to)){const ue=n.target=ya(n.props,m);ue?il(n,ue,null,u,0):N("Invalid Teleport target on update:",D,`(${typeof D})`)}else U&&il(n,D,R,u,1)}Cd(n)},remove(e,n,s,o,{um:l,o:{remove:r}},a){const{shapeFlag:i,children:c,anchor:u,targetAnchor:p,target:f,props:h}=e;if(f&&r(p),(a||!Ns(h))&&(r(u),i&16))for(let y=0;y<c.length;y++){const m=c[y];l(m,n,s,!0,!!m.dynamicChildren)}},move:il,hydrate:A0};function il(e,n,s,{o:{insert:o},m:l},r=2){r===0&&o(e.targetAnchor,n,s);const{el:a,anchor:i,shapeFlag:c,children:u,props:p}=e,f=r===2;if(f&&o(a,n,s),(!f||Ns(p))&&c&16)for(let h=0;h<u.length;h++)l(u[h],n,s,2);f&&o(i,n,s)}function A0(e,n,s,o,l,r,{o:{nextSibling:a,parentNode:i,querySelector:c}},u){const p=n.target=ya(n.props,c);if(p){const f=p._lpa||p.firstChild;if(n.shapeFlag&16)if(Ns(n.props))n.anchor=u(a(e),n,i(e),s,o,l,r),n.targetAnchor=f;else{n.anchor=a(e);let h=f;for(;h;)if(h=a(h),h&&h.nodeType===8&&h.data==="teleport anchor"){n.targetAnchor=h,p._lpa=n.targetAnchor&&a(n.targetAnchor);break}u(f,n,p,s,o,l,r)}Cd(n)}return n.anchor&&a(n.anchor)}const w0=x0;function Cd(e){const n=e.ctx;if(n&&n.ut){let s=e.children[0].el;for(;s!==e.targetAnchor;)s.nodeType===1&&s.setAttribute("data-v-owner",n.uid),s=s.nextSibling;n.ut()}}const De=Symbol.for("v-fgt"),Qo=Symbol.for("v-txt"),ut=Symbol.for("v-cmt"),wl=Symbol.for("v-stc"),vo=[];let Qt=null;function v(e=!1){vo.push(Qt=e?null:[])}function B0(){vo.pop(),Qt=vo[vo.length-1]||null}let Uo=1;function Ec(e){Uo+=e}function Fd(e){return e.dynamicChildren=Uo>0?Qt||Ms:null,B0(),Uo>0&&Qt&&Qt.push(e),e}function k(e,n,s,o,l,r){return Fd(t(e,n,s,o,l,r,!0))}function W(e,n,s,o,l){return Fd(I(e,n,s,o,l,!0))}function pn(e){return e?e.__v_isVNode===!0:!1}function ls(e,n){return n.shapeFlag&6&&Ps.has(n.type)?(e.shapeFlag&=-257,n.shapeFlag&=-513,!1):e.type===n.type&&e.key===n.key}const k0=(...e)=>C0(...e),hr="__vInternal",Ed=({key:e})=>e??null,Bl=({ref:e,ref_key:n,ref_for:s})=>(typeof e=="number"&&(e=""+e),e!=null?qe(e)||Te(e)||pe(e)?{i:Xe,r:e,k:n,f:!!s}:e:null);function t(e,n=null,s=null,o=0,l=null,r=e===De?0:1,a=!1,i=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:n,key:n&&Ed(n),ref:n&&Bl(n),scopeId:ur,slotScopeIds:null,children:s,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:o,dynamicProps:l,dynamicChildren:null,appContext:null,ctx:Xe};return i?(ki(c,s),r&128&&e.normalize(c)):s&&(c.shapeFlag|=qe(s)?8:16),c.key!==c.key&&N("VNode created with invalid key (NaN). VNode type:",c.type),Uo>0&&!a&&Qt&&(c.patchFlag>0||r&6)&&c.patchFlag!==32&&Qt.push(c),c}const I=k0;function C0(e,n=null,s=null,o=0,l=null,r=!1){if((!e||e===Vm)&&(e||N(`Invalid vnode type when creating vnode: ${e}.`),e=ut),pn(e)){const i=dn(e,n,!0);return s&&ki(i,s),Uo>0&&!r&&Qt&&(i.shapeFlag&6?Qt[Qt.indexOf(e)]=i:Qt.push(i)),i.patchFlag|=-2,i}if(Ud(e)&&(e=e.__vccOpts),n){n=oe(n);let{class:i,style:c}=n;i&&!qe(i)&&(n.class=We(i)),$e(c)&&(Il(c)&&!ae(c)&&(c=Ne({},c)),n.style=nt(c))}const a=qe(e)?1:ad(e)?128:b0(e)?64:$e(e)?4:pe(e)?2:0;return a&4&&Il(e)&&(e=he(e),N("Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",`
Component that was made reactive: `,e)),t(e,n,s,o,l,a,r,!0)}function oe(e){return e?Il(e)||hr in e?Ne({},e):e:null}function dn(e,n,s=!1){const{props:o,ref:l,patchFlag:r,children:a}=e,i=n?je(o||{},n):o;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:i,key:i&&Ed(i),ref:n&&n.ref?s&&l?ae(l)?l.concat(Bl(n)):[l,Bl(n)]:Bl(n):l,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:r===-1&&ae(a)?a.map(Dd):a,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:n&&e.type!==De?r===-1?16:r|16:r,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&dn(e.ssContent),ssFallback:e.ssFallback&&dn(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function Dd(e){const n=dn(e);return ae(e.children)&&(n.children=e.children.map(Dd)),n}function d(e=" ",n=0){return I(Qo,null,e,n)}function me(e="",n=!1){return n?(v(),W(ut,null,e)):I(ut,null,e)}function Gt(e){return e==null||typeof e=="boolean"?I(ut):ae(e)?I(De,null,e.slice()):typeof e=="object"?$n(e):I(Qo,null,String(e))}function $n(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:dn(e)}function ki(e,n){let s=0;const{shapeFlag:o}=e;if(n==null)n=null;else if(ae(n))s=16;else if(typeof n=="object")if(o&65){const l=n.default;l&&(l._c&&(l._d=!1),ki(e,l()),l._c&&(l._d=!0));return}else{s=32;const l=n._;!l&&!(hr in n)?n._ctx=Xe:l===3&&Xe&&(Xe.slots._===1?n._=1:(n._=2,e.patchFlag|=1024))}else pe(n)?(n={default:n,_ctx:Xe},s=32):(n=String(n),o&64?(s=16,n=[d(n)]):s=8);e.children=n,e.shapeFlag|=s}function je(...e){const n={};for(let s=0;s<e.length;s++){const o=e[s];for(const l in o)if(l==="class")n.class!==o.class&&(n.class=We([n.class,o.class]));else if(l==="style")n.style=nt([n.style,o.style]);else if(zo(l)){const r=n[l],a=o[l];a&&r!==a&&!(ae(r)&&r.includes(a))&&(n[l]=r?[].concat(r,a):a)}else l!==""&&(n[l]=o[l])}return n}function Mt(e,n,s,o=null){Nt(e,n,7,[s,o])}const F0=_d();let E0=0;function D0(e,n,s){const o=e.type,l=(n?n.appContext:e.appContext)||F0,r={uid:E0++,vnode:e,type:o,parent:n,appContext:l,root:null,next:null,subTree:null,effect:null,update:null,scope:new Tp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:n?n.provides:Object.create(l.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:xd(o,l),emitsOptions:ld(o,l),emit:null,emitted:null,propsDefaults:Le,inheritAttrs:o.inheritAttrs,ctx:Le,data:Le,props:Le,attrs:Le,slots:Le,refs:Le,setupState:Le,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:s,suspenseId:s?s.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx=zm(r),r.root=n?n.root:r,r.emit=km.bind(null,r),e.ce&&e.ce(r),r}let Je=null;const Tt=()=>Je||Xe;let Ci,Ts,Dc="__VUE_INSTANCE_SETTERS__";(Ts=$l()[Dc])||(Ts=$l()[Dc]=[]),Ts.push(e=>Je=e),Ci=e=>{Ts.length>1?Ts.forEach(n=>n(e)):Ts[0](e)};const js=e=>{Ci(e),e.scope.on()},_s=()=>{Je&&Je.scope.off(),Ci(null)},S0=Kn("slot,component");function ma(e,n){const s=n.isNativeTag||Bp;(S0(e)||s(e))&&N("Do not use built-in or reserved HTML elements as component id: "+e)}function Sd(e){return e.vnode.shapeFlag&4}let Oo=!1;function T0(e,n=!1){Oo=n;const{props:s,children:o}=e.vnode,l=Sd(e);l0(e,s,l,n),h0(e,o);const r=l?$0(e,n):void 0;return Oo=!1,r}function $0(e,n){var s;const o=e.type;{if(o.name&&ma(o.name,e.appContext.config),o.components){const r=Object.keys(o.components);for(let a=0;a<r.length;a++)ma(r[a],e.appContext.config)}if(o.directives){const r=Object.keys(o.directives);for(let a=0;a<r.length;a++)cd(r[a])}o.compilerOptions&&U0()&&N('"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.')}e.accessCache=Object.create(null),e.proxy=rr(new Proxy(e.ctx,gd)),Km(e);const{setup:l}=o;if(l){const r=e.setupContext=l.length>1?$d(e):null;js(e),Bs();const a=xn(l,e,0,[uo(e.props),r]);if(ks(),_s(),si(a)){if(a.then(_s,_s),n)return a.then(i=>{Sc(e,i,n)}).catch(i=>{ar(i,e,0)});if(e.asyncDep=a,!e.suspense){const i=(s=o.name)!=null?s:"Anonymous";N(`Component <${i}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`)}}else Sc(e,a,n)}else Td(e,n)}function Sc(e,n,s){pe(n)?e.type.__ssrInlineRender?e.ssrRender=n:e.render=n:$e(n)?(pn(n)&&N("setup() should not return VNodes directly - return a render function instead."),e.devtoolsRawSetupState=n,e.setupState=Kp(n),Gm(e)):n!==void 0&&N(`setup() should return an object. Received: ${n===null?"null":typeof n}`),Td(e,s)}let ga;const U0=()=>!ga;function Td(e,n,s){const o=e.type;if(!e.render){if(!n&&ga&&!o.render){const l=o.template||wi(e).template;if(l){yn(e,"compile");const{isCustomElement:r,compilerOptions:a}=e.appContext.config,{delimiters:i,compilerOptions:c}=o,u=Ne(Ne({isCustomElement:r,delimiters:i},a),c);o.render=ga(l,u),mn(e,"compile")}}e.render=o.render||At}js(e),Bs(),Jm(e),ks(),_s(),!o.render&&e.render===At&&!n&&(o.template?N('Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'):N("Component is missing template or render function."))}function O0(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(n,s){return Ll(),dt(e,"get","$attrs"),n[s]},set(){return N("setupContext.attrs is readonly."),!1},deleteProperty(){return N("setupContext.attrs is readonly."),!1}}))}function P0(e){return e.slotsProxy||(e.slotsProxy=new Proxy(e.slots,{get(n,s){return dt(e,"get","$slots"),n[s]}}))}function $d(e){return Object.freeze({get attrs(){return O0(e)},get slots(){return P0(e)},get emit(){return(s,...o)=>e.emit(s,...o)},expose:s=>{if(e.exposed&&N("expose() should be called only once per setup()."),s!=null){let o=typeof s;o==="object"&&(ae(s)?o="array":Te(s)&&(o="ref")),o!=="object"&&N(`expose() should be passed a plain object, received ${o}.`)}e.exposed=s||{}}})}function yr(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Kp(rr(e.exposed)),{get(n,s){if(s in n)return n[s];if(s in vs)return vs[s](e)},has(n,s){return s in n||s in vs}}))}const I0=/(?:^|[-_])(\w)/g,M0=e=>e.replace(I0,n=>n.toUpperCase()).replace(/[-_]/g,"");function Po(e,n=!0){return pe(e)?e.displayName||e.name:e.name||n&&e.__name}function mr(e,n,s=!1){let o=Po(n);if(!o&&n.__file){const l=n.__file.match(/([^/\\]+)\.\w+$/);l&&(o=l[1])}if(!o&&e&&e.parent){const l=r=>{for(const a in r)if(r[a]===n)return a};o=l(e.components||e.parent.type.components)||l(e.appContext.components)}return o?M0(o):s?"App":"Anonymous"}function Ud(e){return pe(e)&&"__vccOpts"in e}const $=(e,n)=>sm(e,n,Oo);function tt(e,n,s){const o=arguments.length;return o===2?$e(n)&&!ae(n)?pn(n)?I(e,null,[n]):I(e,n):I(e,null,n):(o>3?s=Array.prototype.slice.call(arguments,2):o===3&&pn(s)&&(s=[s]),I(e,n,s))}const L0=Symbol.for("v-scx"),R0=()=>{{const e=L(L0);return e||N("Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."),e}};function Fr(e){return!!(e&&e.__v_isShallow)}function N0(){if(typeof window>"u")return;const e={style:"color:#3ba776"},n={style:"color:#0b1bc9"},s={style:"color:#b62e24"},o={style:"color:#9d288c"},l={header(f){return $e(f)?f.__isVue?["div",e,"VueInstance"]:Te(f)?["div",{},["span",e,p(f)],"<",i(f.value),">"]:ms(f)?["div",{},["span",e,Fr(f)?"ShallowReactive":"Reactive"],"<",i(f),`>${Vn(f)?" (readonly)":""}`]:Vn(f)?["div",{},["span",e,Fr(f)?"ShallowReadonly":"Readonly"],"<",i(f),">"]:null:null},hasBody(f){return f&&f.__isVue},body(f){if(f&&f.__isVue)return["div",{},...r(f.$)]}};function r(f){const h=[];f.type.props&&f.props&&h.push(a("props",he(f.props))),f.setupState!==Le&&h.push(a("setup",f.setupState)),f.data!==Le&&h.push(a("data",he(f.data)));const y=c(f,"computed");y&&h.push(a("computed",y));const m=c(f,"inject");return m&&h.push(a("injected",m)),h.push(["div",{},["span",{style:o.style+";opacity:0.66"},"$ (internal): "],["object",{object:f}]]),h}function a(f,h){return h=Ne({},h),Object.keys(h).length?["div",{style:"line-height:1.25em;margin-bottom:0.6em"},["div",{style:"color:#476582"},f],["div",{style:"padding-left:1.25em"},...Object.keys(h).map(y=>["div",{},["span",o,y+": "],i(h[y],!1)])]]:["span",{}]}function i(f,h=!0){return typeof f=="number"?["span",n,f]:typeof f=="string"?["span",s,JSON.stringify(f)]:typeof f=="boolean"?["span",o,f]:$e(f)?["object",{object:h?he(f):f}]:["span",s,String(f)]}function c(f,h){const y=f.type;if(pe(y))return;const m={};for(const b in f.ctx)u(y,b,h)&&(m[b]=f.ctx[b]);return m}function u(f,h,y){const m=f[y];if(ae(m)&&m.includes(h)||$e(m)&&h in m||f.extends&&u(f.extends,h,y)||f.mixins&&f.mixins.some(b=>u(b,h,y)))return!0}function p(f){return Fr(f)?"ShallowRef":f.effect?"ComputedRef":"Ref"}window.devtoolsFormatters?window.devtoolsFormatters.push(l):window.devtoolsFormatters=[l]}const Hl="3.3.4",q0="http://www.w3.org/2000/svg",rs=typeof document<"u"?document:null,Tc=rs&&rs.createElement("template"),W0={insert:(e,n,s)=>{n.insertBefore(e,s||null)},remove:e=>{const n=e.parentNode;n&&n.removeChild(e)},createElement:(e,n,s,o)=>{const l=n?rs.createElementNS(q0,e):rs.createElement(e,s?{is:s}:void 0);return e==="select"&&o&&o.multiple!=null&&l.setAttribute("multiple",o.multiple),l},createText:e=>rs.createTextNode(e),createComment:e=>rs.createComment(e),setText:(e,n)=>{e.nodeValue=n},setElementText:(e,n)=>{e.textContent=n},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>rs.querySelector(e),setScopeId(e,n){e.setAttribute(n,"")},insertStaticContent(e,n,s,o,l,r){const a=s?s.previousSibling:n.lastChild;if(l&&(l===r||l.nextSibling))for(;n.insertBefore(l.cloneNode(!0),s),!(l===r||!(l=l.nextSibling)););else{Tc.innerHTML=o?`<svg>${e}</svg>`:e;const i=Tc.content;if(o){const c=i.firstChild;for(;c.firstChild;)i.appendChild(c.firstChild);i.removeChild(c)}n.insertBefore(i,s)}return[a?a.nextSibling:n.firstChild,s?s.previousSibling:n.lastChild]}};function j0(e,n,s){const o=e._vtc;o&&(n=(n?[n,...o]:[...o]).join(" ")),n==null?e.removeAttribute("class"):s?e.setAttribute("class",n):e.className=n}function H0(e,n,s){const o=e.style,l=qe(s);if(s&&!l){if(n&&!qe(n))for(const r in n)s[r]==null&&va(o,r,"");for(const r in s)va(o,r,s[r])}else{const r=o.display;l?n!==s&&(o.cssText=s):n&&e.removeAttribute("style"),"_vod"in e&&(o.display=r)}}const V0=/[^\\];\s*$/,$c=/\s*!important$/;function va(e,n,s){if(ae(s))s.forEach(o=>va(e,n,o));else if(s==null&&(s=""),V0.test(s)&&N(`Unexpected semicolon at the end of '${n}' style value: '${s}'`),n.startsWith("--"))e.setProperty(n,s);else{const o=z0(e,n);$c.test(s)?e.setProperty(wn(o),s.replace($c,""),"important"):e[o]=s}}const Uc=["Webkit","Moz","ms"],Er={};function z0(e,n){const s=Er[n];if(s)return s;let o=an(n);if(o!=="filter"&&o in e)return Er[n]=o;o=As(o);for(let l=0;l<Uc.length;l++){const r=Uc[l]+o;if(r in e)return Er[n]=r}return n}const Oc="http://www.w3.org/1999/xlink";function K0(e,n,s,o,l){if(o&&n.startsWith("xlink:"))s==null?e.removeAttributeNS(Oc,n.slice(6,n.length)):e.setAttributeNS(Oc,n,s);else{const r=gy(n);s==null||r&&!Dp(s)?e.removeAttribute(n):e.setAttribute(n,r?"":s)}}function G0(e,n,s,o,l,r,a){if(n==="innerHTML"||n==="textContent"){o&&a(o,l,r),e[n]=s??"";return}const i=e.tagName;if(n==="value"&&i!=="PROGRESS"&&!i.includes("-")){e._value=s;const u=i==="OPTION"?e.getAttribute("value"):e.value,p=s??"";u!==p&&(e.value=p),s==null&&e.removeAttribute(n);return}let c=!1;if(s===""||s==null){const u=typeof e[n];u==="boolean"?s=Dp(s):s==null&&u==="string"?(s="",c=!0):u==="number"&&(s=0,c=!0)}try{e[n]=s}catch(u){c||N(`Failed setting prop "${n}" on <${i.toLowerCase()}>: value ${s} is invalid.`,u)}c&&e.removeAttribute(n)}function Y0(e,n,s,o){e.addEventListener(n,s,o)}function Q0(e,n,s,o){e.removeEventListener(n,s,o)}function Z0(e,n,s,o,l=null){const r=e._vei||(e._vei={}),a=r[n];if(o&&a)a.value=o;else{const[i,c]=J0(n);if(o){const u=r[n]=t1(o,l);Y0(e,i,u,c)}else a&&(Q0(e,i,a,c),r[n]=void 0)}}const Pc=/(?:Once|Passive|Capture)$/;function J0(e){let n;if(Pc.test(e)){n={};let o;for(;o=e.match(Pc);)e=e.slice(0,e.length-o[0].length),n[o[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):wn(e.slice(2)),n]}let Dr=0;const X0=Promise.resolve(),e1=()=>Dr||(X0.then(()=>Dr=0),Dr=Date.now());function t1(e,n){const s=o=>{if(!o._vts)o._vts=Date.now();else if(o._vts<=s.attached)return;Nt(n1(o,s.value),n,5,[o])};return s.value=e,s.attached=e1(),s}function n1(e,n){if(ae(n)){const s=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{s.call(e),e._stopped=!0},n.map(o=>l=>!l._stopped&&o&&o(l))}else return n}const Ic=/^on[a-z]/,s1=(e,n,s,o,l=!1,r,a,i,c)=>{n==="class"?j0(e,o,l):n==="style"?H0(e,s,o):zo(n)?Sl(n)||Z0(e,n,s,o,a):(n[0]==="."?(n=n.slice(1),!0):n[0]==="^"?(n=n.slice(1),!1):o1(e,n,o,l))?G0(e,n,o,r,a,i,c):(n==="true-value"?e._trueValue=o:n==="false-value"&&(e._falseValue=o),K0(e,n,o,l))};function o1(e,n,s,o){return o?!!(n==="innerHTML"||n==="textContent"||n in e&&Ic.test(n)&&pe(s)):n==="spellcheck"||n==="draggable"||n==="translate"||n==="form"||n==="list"&&e.tagName==="INPUT"||n==="type"&&e.tagName==="TEXTAREA"||Ic.test(n)&&qe(s)?!1:n in e}const En="transition",Js="animation",Od={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},l1=Ne({},Om,Od),Xn=(e,n=[])=>{ae(e)?e.forEach(s=>s(...n)):e&&e(...n)},Mc=e=>e?ae(e)?e.some(n=>n.length>1):e.length>1:!1;function r1(e){const n={};for(const Q in e)Q in Od||(n[Q]=e[Q]);if(e.css===!1)return n;const{name:s="v",type:o,duration:l,enterFromClass:r=`${s}-enter-from`,enterActiveClass:a=`${s}-enter-active`,enterToClass:i=`${s}-enter-to`,appearFromClass:c=r,appearActiveClass:u=a,appearToClass:p=i,leaveFromClass:f=`${s}-leave-from`,leaveActiveClass:h=`${s}-leave-active`,leaveToClass:y=`${s}-leave-to`}=e,m=a1(l),b=m&&m[0],w=m&&m[1],{onBeforeEnter:A,onEnter:B,onEnterCancelled:x,onLeave:C,onLeaveCancelled:F,onBeforeAppear:D=A,onAppear:R=B,onAppearCancelled:U=x}=n,j=(Q,ye,ve)=>{Sn(Q,ye?p:i),Sn(Q,ye?u:a),ve&&ve()},ne=(Q,ye)=>{Q._isLeaving=!1,Sn(Q,f),Sn(Q,y),Sn(Q,h),ye&&ye()},ue=Q=>(ye,ve)=>{const be=Q?R:B,Pe=()=>j(ye,Q,ve);Xn(be,[ye,Pe]),Lc(()=>{Sn(ye,Q?c:r),gn(ye,Q?p:i),Mc(be)||Rc(ye,o,b,Pe)})};return Ne(n,{onBeforeEnter(Q){Xn(A,[Q]),gn(Q,r),gn(Q,a)},onBeforeAppear(Q){Xn(D,[Q]),gn(Q,c),gn(Q,u)},onEnter:ue(!1),onAppear:ue(!0),onLeave(Q,ye){Q._isLeaving=!0;const ve=()=>ne(Q,ye);gn(Q,f),Id(),gn(Q,h),Lc(()=>{Q._isLeaving&&(Sn(Q,f),gn(Q,y),Mc(C)||Rc(Q,o,w,ve))}),Xn(C,[Q,ve])},onEnterCancelled(Q){j(Q,!1),Xn(x,[Q])},onAppearCancelled(Q){j(Q,!0),Xn(U,[Q])},onLeaveCancelled(Q){ne(Q),Xn(F,[Q])}})}function a1(e){if(e==null)return null;if($e(e))return[Sr(e.enter),Sr(e.leave)];{const n=Sr(e);return[n,n]}}function Sr(e){const n=iy(e);return im(n,"<transition> explicit duration"),n}function gn(e,n){n.split(/\s+/).forEach(s=>s&&e.classList.add(s)),(e._vtc||(e._vtc=new Set)).add(n)}function Sn(e,n){n.split(/\s+/).forEach(o=>o&&e.classList.remove(o));const{_vtc:s}=e;s&&(s.delete(n),s.size||(e._vtc=void 0))}function Lc(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let i1=0;function Rc(e,n,s,o){const l=e._endId=++i1,r=()=>{l===e._endId&&o()};if(s)return setTimeout(r,s);const{type:a,timeout:i,propCount:c}=Pd(e,n);if(!a)return o();const u=a+"end";let p=0;const f=()=>{e.removeEventListener(u,h),r()},h=y=>{y.target===e&&++p>=c&&f()};setTimeout(()=>{p<c&&f()},i+1),e.addEventListener(u,h)}function Pd(e,n){const s=window.getComputedStyle(e),o=m=>(s[m]||"").split(", "),l=o(`${En}Delay`),r=o(`${En}Duration`),a=Nc(l,r),i=o(`${Js}Delay`),c=o(`${Js}Duration`),u=Nc(i,c);let p=null,f=0,h=0;n===En?a>0&&(p=En,f=a,h=r.length):n===Js?u>0&&(p=Js,f=u,h=c.length):(f=Math.max(a,u),p=f>0?a>u?En:Js:null,h=p?p===En?r.length:c.length:0);const y=p===En&&/\b(transform|all)(,|$)/.test(o(`${En}Property`).toString());return{type:p,timeout:f,propCount:h,hasTransform:y}}function Nc(e,n){for(;e.length<n.length;)e=e.concat(e);return Math.max(...n.map((s,o)=>qc(s)+qc(e[o])))}function qc(e){return Number(e.slice(0,-1).replace(",","."))*1e3}function Id(){return document.body.offsetHeight}const Md=new WeakMap,Ld=new WeakMap,Rd={name:"TransitionGroup",props:Ne({},l1,{tag:String,moveClass:String}),setup(e,{slots:n}){const s=Tt(),o=Um();let l,r;return dr(()=>{if(!l.length)return;const a=e.moveClass||`${e.name||"v"}-move`;if(!h1(l[0].el,s.vnode.el,a))return;l.forEach(p1),l.forEach(d1);const i=l.filter(f1);Id(),i.forEach(c=>{const u=c.el,p=u.style;gn(u,a),p.transform=p.webkitTransform=p.transitionDuration="";const f=u._moveCb=h=>{h&&h.target!==u||(!h||/transform$/.test(h.propertyName))&&(u.removeEventListener("transitionend",f),u._moveCb=null,Sn(u,a))};u.addEventListener("transitionend",f)})}),()=>{const a=he(e),i=r1(a);let c=a.tag||De;l=r,r=n.default?ud(n.default()):[];for(let u=0;u<r.length;u++){const p=r[u];p.key!=null?Rl(p,aa(p,i,o,s)):N("<TransitionGroup> children must be keyed.")}if(l)for(let u=0;u<l.length;u++){const p=l[u];Rl(p,aa(p,i,o,s)),Md.set(p,p.el.getBoundingClientRect())}return I(c,null,r)}}},c1=e=>delete e.mode;Rd.props;const u1=Rd;function p1(e){const n=e.el;n._moveCb&&n._moveCb(),n._enterCb&&n._enterCb()}function d1(e){Ld.set(e,e.el.getBoundingClientRect())}function f1(e){const n=Md.get(e),s=Ld.get(e),o=n.left-s.left,l=n.top-s.top;if(o||l){const r=e.el.style;return r.transform=r.webkitTransform=`translate(${o}px,${l}px)`,r.transitionDuration="0s",e}}function h1(e,n,s){const o=e.cloneNode();e._vtc&&e._vtc.forEach(a=>{a.split(/\s+/).forEach(i=>i&&o.classList.remove(i))}),s.split(/\s+/).forEach(a=>a&&o.classList.add(a)),o.style.display="none";const l=n.nodeType===1?n:n.parentNode;l.appendChild(o);const{hasTransform:r}=Pd(o);return l.removeChild(o),r}const y1=["ctrl","shift","alt","meta"],m1={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,n)=>y1.some(s=>e[`${s}Key`]&&!n.includes(s))},g1=(e,n)=>(s,...o)=>{for(let l=0;l<n.length;l++){const r=m1[n[l]];if(r&&r(s,n))return}return e(s,...o)},v1={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},cl=(e,n)=>s=>{if(!("key"in s))return;const o=wn(s.key);if(n.some(l=>l===o||v1[l]===o))return e(s)},Nd={beforeMount(e,{value:n},{transition:s}){e._vod=e.style.display==="none"?"":e.style.display,s&&n?s.beforeEnter(e):Xs(e,n)},mounted(e,{value:n},{transition:s}){s&&n&&s.enter(e)},updated(e,{value:n,oldValue:s},{transition:o}){!n!=!s&&(o?n?(o.beforeEnter(e),Xs(e,!0),o.enter(e)):o.leave(e,()=>{Xs(e,!1)}):Xs(e,n))},beforeUnmount(e,{value:n}){Xs(e,n)}};function Xs(e,n){e.style.display=n?e._vod:"none"}const _1=Ne({patchProp:s1},W0);let Wc;function b1(){return Wc||(Wc=g0(_1))}const x1=(...e)=>{const n=b1().createApp(...e);A1(n),w1(n);const{mount:s}=n;return n.mount=o=>{const l=B1(o);if(!l)return;const r=n._component;!pe(r)&&!r.render&&!r.template&&(r.template=l.innerHTML),l.innerHTML="";const a=s(l,!1,l instanceof SVGElement);return l instanceof Element&&(l.removeAttribute("v-cloak"),l.setAttribute("data-v-app","")),a},n};function A1(e){Object.defineProperty(e.config,"isNativeTag",{value:n=>Ep(n)||yy(n),writable:!1})}function w1(e){{const n=e.config.isCustomElement;Object.defineProperty(e.config,"isCustomElement",{get(){return n},set(){N("The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead.")}});const s=e.config.compilerOptions,o='The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';Object.defineProperty(e.config,"compilerOptions",{get(){return N(o),s},set(){N(o)}})}}function B1(e){if(qe(e)){const n=document.querySelector(e);return n||N(`Failed to mount app: mount target selector "${e}" returned null.`),n}return window.ShadowRoot&&e instanceof window.ShadowRoot&&e.mode==="closed"&&N('mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'),e}function k1(){N0()}k1();function _a(e,n={},s){for(const o in e){const l=e[o],r=s?`${s}:${o}`:o;typeof l=="object"&&l!==null?_a(l,n,r):typeof l=="function"&&(n[r]=l)}return n}const C1={run:e=>e()},F1=()=>C1,qd=typeof console.createTask<"u"?console.createTask:F1;function E1(e,n){const s=n.shift(),o=qd(s);return e.reduce((l,r)=>l.then(()=>o.run(()=>r(...n))),Promise.resolve())}function D1(e,n){const s=n.shift(),o=qd(s);return Promise.all(e.map(l=>o.run(()=>l(...n))))}function Tr(e,n){for(const s of[...e])s(n)}class S1{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(n,s,o={}){if(!n||typeof s!="function")return()=>{};const l=n;let r;for(;this._deprecatedHooks[n];)r=this._deprecatedHooks[n],n=r.to;if(r&&!o.allowDeprecated){let a=r.message;a||(a=`${l} hook has been deprecated`+(r.to?`, please use ${r.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(a)||(console.warn(a),this._deprecatedMessages.add(a))}if(!s.name)try{Object.defineProperty(s,"name",{get:()=>"_"+n.replace(/\W+/g,"_")+"_hook_cb",configurable:!0})}catch{}return this._hooks[n]=this._hooks[n]||[],this._hooks[n].push(s),()=>{s&&(this.removeHook(n,s),s=void 0)}}hookOnce(n,s){let o,l=(...r)=>(typeof o=="function"&&o(),o=void 0,l=void 0,s(...r));return o=this.hook(n,l),o}removeHook(n,s){if(this._hooks[n]){const o=this._hooks[n].indexOf(s);o!==-1&&this._hooks[n].splice(o,1),this._hooks[n].length===0&&delete this._hooks[n]}}deprecateHook(n,s){this._deprecatedHooks[n]=typeof s=="string"?{to:s}:s;const o=this._hooks[n]||[];delete this._hooks[n];for(const l of o)this.hook(n,l)}deprecateHooks(n){Object.assign(this._deprecatedHooks,n);for(const s in n)this.deprecateHook(s,n[s])}addHooks(n){const s=_a(n),o=Object.keys(s).map(l=>this.hook(l,s[l]));return()=>{for(const l of o.splice(0,o.length))l()}}removeHooks(n){const s=_a(n);for(const o in s)this.removeHook(o,s[o])}removeAllHooks(){for(const n in this._hooks)delete this._hooks[n]}callHook(n,...s){return s.unshift(n),this.callHookWith(E1,n,...s)}callHookParallel(n,...s){return s.unshift(n),this.callHookWith(D1,n,...s)}callHookWith(n,s,...o){const l=this._before||this._after?{name:s,args:o,context:{}}:void 0;this._before&&Tr(this._before,l);const r=n(s in this._hooks?[...this._hooks[s]]:[],o);return r instanceof Promise?r.finally(()=>{this._after&&l&&Tr(this._after,l)}):(this._after&&l&&Tr(this._after,l),r)}beforeEach(n){return this._before=this._before||[],this._before.push(n),()=>{if(this._before!==void 0){const s=this._before.indexOf(n);s!==-1&&this._before.splice(s,1)}}}afterEach(n){return this._after=this._after||[],this._after.push(n),()=>{if(this._after!==void 0){const s=this._after.indexOf(n);s!==-1&&this._after.splice(s,1)}}}}function T1(){return new S1}function $1(e){return Array.isArray(e)?e:[e]}const Wd=["title","script","style","noscript"],jd=["base","meta","link","style","script","noscript"],U1=["title","titleTemplate","templateParams","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"],O1=["base","title","titleTemplate","bodyAttrs","htmlAttrs","templateParams"],P1=["tagPosition","tagPriority","tagDuplicateStrategy","innerHTML","textContent"];function Hd(e){let n=9;for(let s=0;s<e.length;)n=Math.imul(n^e.charCodeAt(s++),9**9);return((n^n>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function ba(e){return Hd(`${e.tag}:${e.textContent||e.innerHTML||""}:${Object.entries(e.props).map(([n,s])=>`${n}:${String(s)}`).join(",")}`)}function I1(e){let n=9;for(const s of e)for(let o=0;o<s.length;)n=Math.imul(n^s.charCodeAt(o++),9**9);return((n^n>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function Vd(e,n){const{props:s,tag:o}=e;if(O1.includes(o))return o;if(o==="link"&&s.rel==="canonical")return"canonical";if(s.charset)return"charset";const l=["id"];o==="meta"&&l.push("name","property","http-equiv");for(const r of l)if(typeof s[r]<"u"){const a=String(s[r]);return n&&!n(a)?!1:`${o}:${r}:${a}`}return!1}function jc(e,n){return e==null?n||null:typeof e=="function"?e(n):e}function ul(e,n=!1,s){const{tag:o,$el:l}=e;l&&(Object.entries(o.props).forEach(([r,a])=>{a=String(a);const i=`attr:${r}`;if(r==="class"){if(!a)return;for(const c of a.split(" ")){const u=`${i}:${c}`;s&&s(e,u,()=>l.classList.remove(c)),l.classList.contains(c)||l.classList.add(c)}return}s&&!r.startsWith("data-h-")&&s(e,i,()=>l.removeAttribute(r)),(n||l.getAttribute(r)!==a)&&l.setAttribute(r,a)}),Wd.includes(o.tag)&&(o.textContent&&o.textContent!==l.textContent?l.textContent=o.textContent:o.innerHTML&&o.innerHTML!==l.innerHTML&&(l.innerHTML=o.innerHTML)))}let eo=!1;async function zd(e,n={}){var h,y;const s={shouldRender:!0};if(await e.hooks.callHook("dom:beforeRender",s),!s.shouldRender)return;const o=n.document||e.resolvedOptions.document||window.document,l=(await e.resolveTags()).map(i);if(e.resolvedOptions.experimentalHashHydration&&(eo=eo||e._hash||!1,eo)){const m=I1(l.map(b=>b.tag._h));if(eo===m)return;eo=m}const r=e._popSideEffectQueue();e.headEntries().map(m=>m._sde).forEach(m=>{Object.entries(m).forEach(([b,w])=>{r[b]=w})});const a=(m,b,w)=>{b=`${m.renderId}:${b}`,m.entry&&(m.entry._sde[b]=w),delete r[b]};function i(m){const b=e.headEntries().find(A=>A._i===m._e),w={renderId:m._d||ba(m),$el:null,shouldRender:!0,tag:m,entry:b,markSideEffect:(A,B)=>a(w,A,B)};return w}const c=[],u={body:[],head:[]},p=m=>{e._elMap[m.renderId]=m.$el,c.push(m),a(m,"el",()=>{var b;(b=m.$el)==null||b.remove(),delete e._elMap[m.renderId]})};for(const m of l){if(await e.hooks.callHook("dom:beforeRenderTag",m),!m.shouldRender)continue;const{tag:b}=m;if(b.tag==="title"){o.title=b.textContent||"",c.push(m);continue}if(b.tag==="htmlAttrs"||b.tag==="bodyAttrs"){m.$el=o[b.tag==="htmlAttrs"?"documentElement":"body"],ul(m,!1,a),c.push(m);continue}if(m.$el=e._elMap[m.renderId],!m.$el&&b.key&&(m.$el=o.querySelector(`${(h=b.tagPosition)!=null&&h.startsWith("body")?"body":"head"} > ${b.tag}[data-h-${b._h}]`)),m.$el){m.tag._d&&ul(m),p(m);continue}u[(y=b.tagPosition)!=null&&y.startsWith("body")?"body":"head"].push(m)}const f={bodyClose:void 0,bodyOpen:void 0,head:void 0};Object.entries(u).forEach(([m,b])=>{var A;if(!b.length)return;const w=(A=o==null?void 0:o[m])==null?void 0:A.children;if(w){for(const B of[...w].reverse()){const x=B.tagName.toLowerCase();if(!jd.includes(x))continue;const C=B.getAttributeNames().reduce((U,j)=>({...U,[j]:B.getAttribute(j)}),{}),F={tag:x,props:C};B.innerHTML&&(F.innerHTML=B.innerHTML);const D=ba(F);let R=b.findIndex(U=>(U==null?void 0:U.renderId)===D);if(R===-1){const U=Vd(F);R=b.findIndex(j=>(j==null?void 0:j.tag._d)&&j.tag._d===U)}if(R!==-1){const U=b[R];U.$el=B,ul(U),p(U),delete b[R]}}b.forEach(B=>{const x=B.tag.tagPosition||"head";f[x]=f[x]||o.createDocumentFragment(),B.$el||(B.$el=o.createElement(B.tag.tag),ul(B,!0)),f[x].appendChild(B.$el),p(B)})}}),f.head&&o.head.appendChild(f.head),f.bodyOpen&&o.body.insertBefore(f.bodyOpen,o.body.firstChild),f.bodyClose&&o.body.appendChild(f.bodyClose);for(const m of c)await e.hooks.callHook("dom:renderTag",m);Object.values(r).forEach(m=>m())}let $r=null;async function Kd(e,n={}){function s(){return $r=null,zd(e,n)}const o=n.delayFn||(l=>setTimeout(l,10));return $r=$r||new Promise(l=>o(()=>l(s())))}function M1(e){return{hooks:{"entries:updated":function(n){if(typeof(e==null?void 0:e.document)>"u"&&typeof window>"u")return;let s=e==null?void 0:e.delayFn;!s&&typeof requestAnimationFrame<"u"&&(s=requestAnimationFrame),Kd(n,{document:(e==null?void 0:e.document)||window.document,delayFn:s})}}}}function L1(e){var n;return((n=e==null?void 0:e.head.querySelector('meta[name="unhead:ssr"]'))==null?void 0:n.getAttribute("content"))||!1}const Hc={critical:2,high:9,low:12,base:-1,title:1,meta:10};function Vc(e){if(typeof e.tagPriority=="number")return e.tagPriority;if(e.tag==="meta"){if(e.props.charset)return-2;if(e.props["http-equiv"]==="content-security-policy")return 0}const n=e.tagPriority||e.tag;return n in Hc?Hc[n]:10}const R1=[{prefix:"before:",offset:-1},{prefix:"after:",offset:1}];function N1(){return{hooks:{"tags:resolve":e=>{const n=s=>{var o;return(o=e.tags.find(l=>l._d===s))==null?void 0:o._p};for(const{prefix:s,offset:o}of R1)for(const l of e.tags.filter(r=>typeof r.tagPriority=="string"&&r.tagPriority.startsWith(s))){const r=n(l.tagPriority.replace(s,""));typeof r<"u"&&(l._p=r+o)}e.tags.sort((s,o)=>s._p-o._p).sort((s,o)=>Vc(s)-Vc(o))}}}}function q1(){return{hooks:{"tags:resolve":e=>{const{tags:n}=e;let s=n.findIndex(l=>l.tag==="titleTemplate");const o=n.findIndex(l=>l.tag==="title");if(o!==-1&&s!==-1){const l=jc(n[s].textContent,n[o].textContent);l!==null?n[o].textContent=l||n[o].textContent:delete n[o]}else if(s!==-1){const l=jc(n[s].textContent);l!==null&&(n[s].textContent=l,n[s].tag="title",s=-1)}s!==-1&&delete n[s],e.tags=n.filter(Boolean)}}}}function W1(){return{hooks:{"tag:normalise":function({tag:e}){typeof e.props.body<"u"&&(e.tagPosition="bodyClose",delete e.props.body)}}}}const j1=["link","style","script","noscript"];function H1(){return{hooks:{"tag:normalise":({tag:e,resolvedOptions:n})=>{n.experimentalHashHydration===!0&&(e._h=ba(e)),e.key&&j1.includes(e.tag)&&(e._h=Hd(e.key),e.props[`data-h-${e._h}`]="")}}}}const zc=["script","link","bodyAttrs"];function V1(){const e=(n,s)=>{const o={},l={};Object.entries(s.props).forEach(([a,i])=>{a.startsWith("on")&&typeof i=="function"?l[a]=i:o[a]=i});let r;return n==="dom"&&s.tag==="script"&&typeof o.src=="string"&&typeof l.onload<"u"&&(r=o.src,delete o.src),{props:o,eventHandlers:l,delayedSrc:r}};return{hooks:{"ssr:render":function(n){n.tags=n.tags.map(s=>(!zc.includes(s.tag)||!Object.entries(s.props).find(([o,l])=>o.startsWith("on")&&typeof l=="function")||(s.props=e("ssr",s).props),s))},"dom:beforeRenderTag":function(n){if(!zc.includes(n.tag.tag)||!Object.entries(n.tag.props).find(([r,a])=>r.startsWith("on")&&typeof a=="function"))return;const{props:s,eventHandlers:o,delayedSrc:l}=e("dom",n.tag);Object.keys(o).length&&(n.tag.props=s,n.tag._eventHandlers=o,n.tag._delayedSrc=l)},"dom:renderTag":function(n){const s=n.$el;if(!n.tag._eventHandlers||!s)return;const o=n.tag.tag==="bodyAttrs"&&typeof window<"u"?window:s;Object.entries(n.tag._eventHandlers).forEach(([l,r])=>{const a=`${n.tag._d||n.tag._p}:${l}`,i=l.slice(2).toLowerCase(),c=`data-h-${i}`;if(n.markSideEffect(a,()=>{}),s.hasAttribute(c))return;const u=r;s.setAttribute(c,""),o.addEventListener(i,u),n.entry&&(n.entry._sde[a]=()=>{o.removeEventListener(i,u),s.removeAttribute(c)})}),n.tag._delayedSrc&&s.setAttribute("src",n.tag._delayedSrc)}}}}const z1=["templateParams","htmlAttrs","bodyAttrs"];function K1(){return{hooks:{"tag:normalise":function({tag:e}){["hid","vmid","key"].forEach(o=>{e.props[o]&&(e.key=e.props[o],delete e.props[o])});const s=Vd(e)||(e.key?`${e.tag}:${e.key}`:!1);s&&(e._d=s)},"tags:resolve":function(e){const n={};e.tags.forEach(o=>{const l=(o.key?`${o.tag}:${o.key}`:o._d)||o._p,r=n[l];if(r){let i=o==null?void 0:o.tagDuplicateStrategy;if(!i&&z1.includes(o.tag)&&(i="merge"),i==="merge"){const c=r.props;["class","style"].forEach(u=>{o.props[u]&&c[u]&&(u==="style"&&!c[u].endsWith(";")&&(c[u]+=";"),o.props[u]=`${c[u]} ${o.props[u]}`)}),n[l].props={...c,...o.props};return}else if(o._e===r._e){r._duped=r._duped||[],o._d=`${r._d}:${r._duped.length+1}`,r._duped.push(o);return}}const a=Object.keys(o.props).length+(o.innerHTML?1:0)+(o.textContent?1:0);if(jd.includes(o.tag)&&a===0){delete n[l];return}n[l]=o});const s=[];Object.values(n).forEach(o=>{const l=o._duped;delete o._duped,s.push(o),l&&s.push(...l)}),e.tags=s}}}}function pl(e,n){function s(r){if(["s","pageTitle"].includes(r))return n.pageTitle;let a;return r.includes(".")?a=r.split(".").reduce((i,c)=>i&&i[c]||void 0,n):a=n[r],typeof a<"u"?a||"":!1}let o=e;try{o=decodeURI(e)}catch{}return(o.match(/%(\w+\.+\w+)|%(\w+)/g)||[]).sort().reverse().forEach(r=>{const a=s(r.slice(1));typeof a=="string"&&(e=e.replace(new RegExp(`\\${r}(\\W|$)`,"g"),`${a}$1`).trim())}),n.separator&&(e.endsWith(n.separator)&&(e=e.slice(0,-n.separator.length).trim()),e.startsWith(n.separator)&&(e=e.slice(n.separator.length).trim()),e=e.replace(new RegExp(`\\${n.separator}\\s*\\${n.separator}`,"g"),n.separator)),e}function G1(){return{hooks:{"tags:resolve":e=>{var r;const{tags:n}=e,s=(r=n.find(a=>a.tag==="title"))==null?void 0:r.textContent,o=n.findIndex(a=>a.tag==="templateParams"),l=o!==-1?n[o].props:{};l.pageTitle=l.pageTitle||s||"";for(const a of n)if(["titleTemplate","title"].includes(a.tag)&&typeof a.textContent=="string")a.textContent=pl(a.textContent,l);else if(a.tag==="meta"&&typeof a.props.content=="string")a.props.content=pl(a.props.content,l);else if(a.tag==="link"&&typeof a.props.href=="string")a.props.href=pl(a.props.href,l);else if(a.tag==="script"&&["application/json","application/ld+json"].includes(a.props.type)&&typeof a.innerHTML=="string")try{a.innerHTML=JSON.stringify(JSON.parse(a.innerHTML),(i,c)=>typeof c=="string"?pl(c,l):c)}catch{}e.tags=n.filter(a=>a.tag!=="templateParams")}}}}const Y1=typeof window<"u";let Gd;function Q1(e){return Gd=e}function Z1(){return Gd}async function J1(e,n){const s={tag:e,props:{}};return e==="templateParams"?(s.props=n,s):["title","titleTemplate"].includes(e)?(s.textContent=n instanceof Promise?await n:n,s):typeof n=="string"?["script","noscript","style"].includes(e)?(e==="script"&&(/^(https?:)?\/\//.test(n)||n.startsWith("/"))?s.props.src=n:s.innerHTML=n,s):!1:(s.props=await eg(e,{...n}),s.props.children&&(s.props.innerHTML=s.props.children),delete s.props.children,Object.keys(s.props).filter(o=>P1.includes(o)).forEach(o=>{(!["innerHTML","textContent"].includes(o)||Wd.includes(s.tag))&&(s[o]=s.props[o]),delete s.props[o]}),["innerHTML","textContent"].forEach(o=>{if(s.tag==="script"&&typeof s[o]=="string"&&["application/ld+json","application/json"].includes(s.props.type))try{s[o]=JSON.parse(s[o])}catch{s[o]=""}typeof s[o]=="object"&&(s[o]=JSON.stringify(s[o]))}),s.props.class&&(s.props.class=X1(s.props.class)),s.props.content&&Array.isArray(s.props.content)?s.props.content.map(o=>({...s,props:{...s.props,content:o}})):s)}function X1(e){return typeof e=="object"&&!Array.isArray(e)&&(e=Object.keys(e).filter(n=>e[n])),(Array.isArray(e)?e.join(" "):e).split(" ").filter(n=>n.trim()).filter(Boolean).join(" ")}async function eg(e,n){for(const s of Object.keys(n)){const o=s.startsWith("data-");n[s]instanceof Promise&&(n[s]=await n[s]),String(n[s])==="true"?n[s]=o?"true":"":String(n[s])==="false"&&(o?n[s]="false":delete n[s])}return n}const tg=10;async function ng(e){const n=[];return Object.entries(e.resolvedInput).filter(([s,o])=>typeof o<"u"&&U1.includes(s)).forEach(([s,o])=>{const l=$1(o);n.push(...l.map(r=>J1(s,r)).flat())}),(await Promise.all(n)).flat().filter(Boolean).map((s,o)=>(s._e=e._i,s._p=(e._i<<tg)+o,s))}function sg(){return[K1(),N1(),G1(),q1(),H1(),V1(),W1()]}function og(e={}){return[M1({document:e==null?void 0:e.document,delayFn:e==null?void 0:e.domDelayFn})]}function lg(e={}){const n=rg({...e,plugins:[...og(e),...(e==null?void 0:e.plugins)||[]]});return e.experimentalHashHydration&&n.resolvedOptions.document&&(n._hash=L1(n.resolvedOptions.document)),Q1(n),n}function rg(e={}){let n=[],s={},o=0;const l=T1();e!=null&&e.hooks&&l.addHooks(e.hooks),e.plugins=[...sg(),...(e==null?void 0:e.plugins)||[]],e.plugins.forEach(i=>i.hooks&&l.addHooks(i.hooks)),e.document=e.document||(Y1?document:void 0);const r=()=>l.callHook("entries:updated",a),a={resolvedOptions:e,headEntries(){return n},get hooks(){return l},use(i){i.hooks&&l.addHooks(i.hooks)},push(i,c){const u={_i:o++,input:i,_sde:{}};return c!=null&&c.mode&&(u._m=c==null?void 0:c.mode),c!=null&&c.transform&&(u._t=c==null?void 0:c.transform),n.push(u),r(),{dispose(){n=n.filter(p=>p._i!==u._i?!0:(s={...s,...p._sde||{}},p._sde={},r(),!1))},patch(p){n=n.map(f=>(f._i===u._i&&(u.input=f.input=p,r()),f))}}},async resolveTags(){const i={tags:[],entries:[...n]};await l.callHook("entries:resolve",i);for(const c of i.entries){const u=c._t||(p=>p);if(c.resolvedInput=u(c.resolvedInput||c.input),c.resolvedInput)for(const p of await ng(c)){const f={tag:p,entry:c,resolvedOptions:a.resolvedOptions};await l.callHook("tag:normalise",f),i.tags.push(f.tag)}}return await l.callHook("tags:resolve",i),i.tags},_popSideEffectQueue(){const i={...s};return s={},i},_elMap:{}};return a.hooks.callHook("init",a),a}function ag(e){return typeof e=="function"?e():T(e)}function Vl(e,n=""){if(e instanceof Promise)return e;const s=ag(e);return!e||!s?s:Array.isArray(s)?s.map(o=>Vl(o,n)):typeof s=="object"?Object.fromEntries(Object.entries(s).map(([o,l])=>o==="titleTemplate"||o.startsWith("on")?[o,T(l)]:[o,Vl(l,o)])):s}const ig=Hl.startsWith("3"),cg=typeof window<"u",Yd="usehead";function Fi(){return Tt()&&L(Yd)||Z1()}function ug(e){return{install(s){ig&&(s.config.globalProperties.$unhead=e,s.config.globalProperties.$head=e,s.provide(Yd,e))}}.install}function pg(e={}){const n=lg({...e,domDelayFn:s=>setTimeout(()=>it(()=>s()),10),plugins:[dg(),...(e==null?void 0:e.plugins)||[]]});return n.install=ug(n),n}function dg(){return{hooks:{"entries:resolve":function(e){for(const n of e.entries)n.resolvedInput=Vl(n.input)}}}}function fg(e,n={}){const s=Fi(),o=Y(!1),l=Y({});Cs(()=>{l.value=o.value?{}:Vl(e)});const r=s.push(l.value,n);return ge(l,i=>{r.patch(i)}),Tt()&&(Yo(()=>{r.dispose()}),fd(()=>{o.value=!0}),dd(()=>{o.value=!1})),r}function hg(e,n={}){return Fi().push(e,n)}function Qd(e,n={}){var o;const s=Fi();if(s){const l=cg||!!((o=s.resolvedOptions)!=null&&o.document);return n.mode==="server"&&l||n.mode==="client"&&!l?void 0:l?fg(e,n):hg(e,n)}}function yg(e,n){const s=pg(n||{}),o={unhead:s,install(l){Hl.startsWith("3")&&(l.config.globalProperties.$head=s,l.provide("usehead",s))},use(l){s.use(l)},resolveTags(){return s.resolveTags()},headEntries(){return s.headEntries()},headTags(){return s.resolveTags()},push(l,r){return s.push(l,r)},addEntry(l,r){return s.push(l,r)},addHeadObjs(l,r){return s.push(l,r)},addReactiveEntry(l,r){const a=Qd(l,r);return typeof a<"u"?a.dispose:()=>{}},removeHeadObjs(){},updateDOM(l,r){r?zd(s,{document:l}):Kd(s,{delayFn:a=>setTimeout(()=>a(),50),document:l})},internalHooks:s.hooks,hooks:{"before:dom":[],"resolved:tags":[],"resolved:entries":[]}};return s.addHeadObjs=o.addHeadObjs,s.updateDOM=o.updateDOM,s.hooks.hook("dom:beforeRender",l=>{for(const r of o.hooks["before:dom"])r()===!1&&(l.shouldRender=!1)}),e&&o.addHeadObjs(e),o}const _o=Symbol("v-click-clicks"),as=Symbol("v-click-clicks-elements"),xa=Symbol("v-click-clicks-order-map"),bo=Symbol("v-click-clicks-disabled"),Zd=Symbol("slidev-slide-scale"),H=Symbol("slidev-slidev-context"),mg=Symbol("slidev-route"),gg=Symbol("slidev-slide-context"),ss="slidev-vclick-target",Ur="slidev-vclick-hidden",vg="slidev-vclick-fade",Or="slidev-vclick-hidden-explicitly",to="slidev-vclick-current",dl="slidev-vclick-prior",_g=["localhost","127.0.0.1"];let bg=e=>crypto.getRandomValues(new Uint8Array(e)),xg=(e,n,s)=>{let o=(2<<Math.log(e.length-1)/Math.LN2)-1,l=-~(1.6*o*n/e.length);return(r=n)=>{let a="";for(;;){let i=s(l),c=l;for(;c--;)if(a+=e[i[c]&o]||"",a.length===r)return a}}},Ag=(e,n=21)=>xg(e,n,bg),wg=(e=21)=>crypto.getRandomValues(new Uint8Array(e)).reduce((n,s)=>(s&=63,s<36?n+=s.toString(36):s<62?n+=(s-26).toString(36).toUpperCase():s>62?n+="-":n+="_",n),"");function Jd(e){return e=e??[],Array.isArray(e)?e:[e]}function Aa(e,n){if(!e)return!1;const s=e.indexOf(n);return s>=0?(e.splice(s,1),!0):!1}function Bg(...e){let n,s,o;e.length===1?(n=0,o=1,[s]=e):[n,s,o=1]=e;const l=[];let r=n;for(;r<s;)l.push(r),r+=o||1;return l}function kg(e){return e!=null}function Cg(e,n){return Object.fromEntries(Object.entries(e).map(([s,o])=>n(s,o)).filter(kg))}const yo={theme:"seriph",title:"Demystifying Unicode",titleTemplate:"%s - Slidev",addons:[],remoteAssets:!1,monaco:"dev",download:!1,export:{},info:`<h2>Unicode, Rust, quirks, and way too much detail.</h2>
`,highlighter:"shiki",lineNumbers:!0,colorSchema:"auto",routerMode:"history",aspectRatio:1.7777777777777777,canvasWidth:980,exportFilename:"",selectable:!1,themeConfig:{},fonts:{sans:['"PT Serif"',"ui-sans-serif","system-ui","-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial",'"Noto Sans"',"sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"','"Noto Color Emoji"'],serif:['"PT Serif"',"ui-serif","Georgia","Cambria",'"Times New Roman"',"Times","serif"],mono:['"PT Mono"',"ui-monospace","SFMono-Regular","Menlo","Monaco","Consolas",'"Liberation Mono"','"Courier New"',"monospace"],webfonts:["PT Serif","PT Mono"],provider:"google",local:[],italic:!0,weights:["400","700"]},favicon:"https://cdn.jsdelivr.net/gh/slidevjs/slidev/assets/favicon.png",drawings:{enabled:!0,persist:!1,presenterOnly:!1,syncAll:!0},plantUmlServer:"https://www.plantuml.com/plantuml",codeCopy:!0,record:"dev",css:"unocss",presenter:!0,htmlAttrs:{},transition:"slide-left",background:"https://source.unsplash.com/collection/94734566/1920x1080",class:"text-center",hideInToc:!0},Se=yo,Ln=Se.aspectRatio??16/9,Rn=Se.canvasWidth??980,Ei=Math.ceil(Rn/Ln),Di=$(()=>Cg(Se.themeConfig||{},(e,n)=>[`--slidev-theme-${e}`,n]));function Xd(){return Math.random().toString(36).replace(/[^a-z]+/g,"").substr(2,10)}function Ht(e,n,s){Object.defineProperty(e,n,{value:s,writable:!0,enumerable:!1})}const Es=He({page:0,clicks:0});let Fg=[],Eg=[];Ht(Es,"$syncUp",!0);Ht(Es,"$syncDown",!0);Ht(Es,"$paused",!1);Ht(Es,"$onSet",e=>Fg.push(e));Ht(Es,"$onPatch",e=>Eg.push(e));Xd();Ht(Es,"$patch",async()=>!1);function ef(e,n,s=!1){const o=[];let l=!1,r=!1,a,i;const c=He(n);function u(y){o.push(y)}function p(y,m){c[y]!==m&&(clearTimeout(a),l=!0,c[y]=m,a=setTimeout(()=>l=!1,0))}function f(y){l||(clearTimeout(i),r=!0,Object.entries(y).forEach(([m,b])=>{c[m]=b}),i=setTimeout(()=>r=!1,0))}function h(y){let m;s?s&&window.addEventListener("storage",w=>{w&&w.key===y&&w.newValue&&f(JSON.parse(w.newValue))}):(m=new BroadcastChannel(y),m.addEventListener("message",w=>f(w.data)));function b(){!s&&m&&!r?m.postMessage(he(c)):s&&!r&&window.localStorage.setItem(y,JSON.stringify(c)),l||o.forEach(w=>w(c))}if(ge(c,b,{deep:!0,flush:"sync"}),s){const w=window.localStorage.getItem(y);w&&f(JSON.parse(w))}}return{init:h,onPatch:u,patch:p,state:c}}const{init:Dg,onPatch:Sg,patch:no,state:Pr}=ef(Es,{page:1,clicks:0,viewerPage:1,viewerClicks:0}),Ds=He({});let Tg=[],$g=[];Ht(Ds,"$syncUp",!0);Ht(Ds,"$syncDown",!0);Ht(Ds,"$paused",!1);Ht(Ds,"$onSet",e=>Tg.push(e));Ht(Ds,"$onPatch",e=>$g.push(e));Xd();Ht(Ds,"$patch",async()=>!1);const{init:Ug,onPatch:Og,patch:tf,state:zl}=ef(Ds,{},!1),Pg="modulepreload",Ig=function(e){return"/demystifying-unicode/"+e},Kc={},Nn=function(n,s,o){if(!s||s.length===0)return n();const l=document.getElementsByTagName("link");return Promise.all(s.map(r=>{if(r=Ig(r),r in Kc)return;Kc[r]=!0;const a=r.endsWith(".css"),i=a?'[rel="stylesheet"]':"";if(!!o)for(let p=l.length-1;p>=0;p--){const f=l[p];if(f.href===r&&(!a||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${i}`))return;const u=document.createElement("link");if(u.rel=a?"stylesheet":Pg,a||(u.as="script",u.crossOrigin=""),u.href=r,document.head.appendChild(u),a)return new Promise((p,f)=>{u.addEventListener("load",p),u.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>n())};function Mg(e,n){let s,o,l;const r=Y(!0),a=()=>{r.value=!0,l()};ge(e,a,{flush:"sync"});const i=typeof n=="function"?n:n.get,c=typeof n=="function"?void 0:n.set,u=fi((p,f)=>(o=p,l=f,{get(){return r.value&&(s=i(),r.value=!1),o(),s},set(h){c==null||c(h)}}));return Object.isExtensible(u)&&(u.trigger=a),u}function fn(e){return ri()?($p(e),!0):!1}function Ye(e){return typeof e=="function"?e():T(e)}function Lg(e){if(!Te(e))return He(e);const n=new Proxy({},{get(s,o,l){return T(Reflect.get(e.value,o,l))},set(s,o,l){return Te(e.value[o])&&!Te(l)?e.value[o].value=l:e.value[o]=l,!0},deleteProperty(s,o){return Reflect.deleteProperty(e.value,o)},has(s,o){return Reflect.has(e.value,o)},ownKeys(){return Object.keys(e.value)},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}}});return He(n)}const Zt=typeof window<"u",Rg=e=>typeof e<"u",Ng=e=>e!=null,qg=Object.prototype.toString,wa=e=>qg.call(e)==="[object Object]",Ba=()=>+Date.now(),bs=()=>{},Wg=jg();function jg(){var e;return Zt&&((e=window==null?void 0:window.navigator)==null?void 0:e.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent)}function Hg(e,n){function s(...o){return new Promise((l,r)=>{Promise.resolve(e(()=>n.apply(this,o),{fn:n,thisArg:this,args:o})).then(l).catch(r)})}return s}const nf=e=>e();function Vg(e=nf){const n=Y(!0);function s(){n.value=!1}function o(){n.value=!0}const l=(...r)=>{n.value&&e(...r)};return{isActive:Yt(n),pause:s,resume:o,eventFilter:l}}function zg(e,n){var s;if(typeof e=="number")return e+n;const o=((s=e.match(/^-?[0-9]+\.?[0-9]*/))==null?void 0:s[0])||"",l=e.slice(o.length),r=Number.parseFloat(o)+n;return Number.isNaN(r)?e:r+l}function sf(...e){if(e.length!==1)return tm(...e);const n=e[0];return typeof n=="function"?Yt(fi(()=>({get:n,set:bs}))):Y(n)}var Kg=Object.defineProperty,Gg=Object.defineProperties,Yg=Object.getOwnPropertyDescriptors,Gc=Object.getOwnPropertySymbols,Qg=Object.prototype.hasOwnProperty,Zg=Object.prototype.propertyIsEnumerable,Yc=(e,n,s)=>n in e?Kg(e,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[n]=s,Jg=(e,n)=>{for(var s in n||(n={}))Qg.call(n,s)&&Yc(e,s,n[s]);if(Gc)for(var s of Gc(n))Zg.call(n,s)&&Yc(e,s,n[s]);return e},Xg=(e,n)=>Gg(e,Yg(n));function ev(e){if(!Te(e))return Jy(e);const n=Array.isArray(e.value)?new Array(e.value.length):{};for(const s in e.value)n[s]=fi(()=>({get(){return e.value[s]},set(o){if(Array.isArray(e.value)){const l=[...e.value];l[s]=o,e.value=l}else{const l=Xg(Jg({},e.value),{[s]:o});Object.setPrototypeOf(l,e.value),e.value=l}}}));return n}function of(e,n=!0){Tt()?Gn(e):n?e():it(e)}function tv(e){Tt()&&fr(e)}function nv(e,n=1e3,s={}){const{immediate:o=!0,immediateCallback:l=!1}=s;let r=null;const a=Y(!1);function i(){r&&(clearInterval(r),r=null)}function c(){a.value=!1,i()}function u(){const p=Ye(n);p<=0||(a.value=!0,l&&e(),i(),r=setInterval(e,p))}if(o&&Zt&&u(),Te(n)||typeof n=="function"){const p=ge(n,()=>{a.value&&Zt&&u()});fn(p)}return fn(c),{isActive:a,pause:c,resume:u}}function sv(e,n,s={}){const{immediate:o=!0}=s,l=Y(!1);let r=null;function a(){r&&(clearTimeout(r),r=null)}function i(){l.value=!1,a()}function c(...u){a(),l.value=!0,r=setTimeout(()=>{l.value=!1,r=null,e(...u)},Ye(n))}return o&&(l.value=!0,Zt&&c()),fn(i),{isPending:Yt(l),start:c,stop:i}}function lf(e=!1,n={}){const{truthyValue:s=!0,falsyValue:o=!1}=n,l=Te(e),r=Y(e);function a(i){if(arguments.length)return r.value=i,r.value;{const c=Ye(s);return r.value=r.value===c?Ye(o):c,r.value}}return l?a:[r,a]}var Qc=Object.getOwnPropertySymbols,ov=Object.prototype.hasOwnProperty,lv=Object.prototype.propertyIsEnumerable,rv=(e,n)=>{var s={};for(var o in e)ov.call(e,o)&&n.indexOf(o)<0&&(s[o]=e[o]);if(e!=null&&Qc)for(var o of Qc(e))n.indexOf(o)<0&&lv.call(e,o)&&(s[o]=e[o]);return s};function av(e,n,s={}){const o=s,{eventFilter:l=nf}=o,r=rv(o,["eventFilter"]);return ge(e,Hg(l,n),r)}var iv=Object.defineProperty,cv=Object.defineProperties,uv=Object.getOwnPropertyDescriptors,Kl=Object.getOwnPropertySymbols,rf=Object.prototype.hasOwnProperty,af=Object.prototype.propertyIsEnumerable,Zc=(e,n,s)=>n in e?iv(e,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[n]=s,pv=(e,n)=>{for(var s in n||(n={}))rf.call(n,s)&&Zc(e,s,n[s]);if(Kl)for(var s of Kl(n))af.call(n,s)&&Zc(e,s,n[s]);return e},dv=(e,n)=>cv(e,uv(n)),fv=(e,n)=>{var s={};for(var o in e)rf.call(e,o)&&n.indexOf(o)<0&&(s[o]=e[o]);if(e!=null&&Kl)for(var o of Kl(e))n.indexOf(o)<0&&af.call(e,o)&&(s[o]=e[o]);return s};function hv(e,n,s={}){const o=s,{eventFilter:l}=o,r=fv(o,["eventFilter"]),{eventFilter:a,pause:i,resume:c,isActive:u}=Vg(l);return{stop:av(e,n,dv(pv({},r),{eventFilter:a})),pause:i,resume:c,isActive:u}}function ct(e){var n;const s=Ye(e);return(n=s==null?void 0:s.$el)!=null?n:s}const st=Zt?window:void 0,cf=Zt?window.document:void 0,yv=Zt?window.navigator:void 0;function xe(...e){let n,s,o,l;if(typeof e[0]=="string"||Array.isArray(e[0])?([s,o,l]=e,n=st):[n,s,o,l]=e,!n)return bs;Array.isArray(s)||(s=[s]),Array.isArray(o)||(o=[o]);const r=[],a=()=>{r.forEach(p=>p()),r.length=0},i=(p,f,h,y)=>(p.addEventListener(f,h,y),()=>p.removeEventListener(f,h,y)),c=ge(()=>[ct(n),Ye(l)],([p,f])=>{a(),p&&r.push(...s.flatMap(h=>o.map(y=>i(p,h,y,f))))},{immediate:!0,flush:"post"}),u=()=>{c(),a()};return fn(u),u}let Jc=!1;function mv(e,n,s={}){const{window:o=st,ignore:l=[],capture:r=!0,detectIframe:a=!1}=s;if(!o)return;Wg&&!Jc&&(Jc=!0,Array.from(o.document.body.children).forEach(h=>h.addEventListener("click",bs)));let i=!0;const c=h=>l.some(y=>{if(typeof y=="string")return Array.from(o.document.querySelectorAll(y)).some(m=>m===h.target||h.composedPath().includes(m));{const m=ct(y);return m&&(h.target===m||h.composedPath().includes(m))}}),p=[xe(o,"click",h=>{const y=ct(e);if(!(!y||y===h.target||h.composedPath().includes(y))){if(h.detail===0&&(i=!c(h)),!i){i=!0;return}n(h)}},{passive:!0,capture:r}),xe(o,"pointerdown",h=>{const y=ct(e);y&&(i=!h.composedPath().includes(y)&&!c(h))},{passive:!0}),a&&xe(o,"blur",h=>{setTimeout(()=>{var y;const m=ct(e);((y=o.document.activeElement)==null?void 0:y.tagName)==="IFRAME"&&!(m!=null&&m.contains(o.document.activeElement))&&n(h)},0)})].filter(Boolean);return()=>p.forEach(h=>h())}function gv(e){return typeof e=="function"?e:typeof e=="string"?n=>n.key===e:Array.isArray(e)?n=>e.includes(n.key):()=>!0}function vv(...e){let n,s,o={};e.length===3?(n=e[0],s=e[1],o=e[2]):e.length===2?typeof e[1]=="object"?(n=!0,s=e[0],o=e[1]):(n=e[0],s=e[1]):(n=!0,s=e[0]);const{target:l=st,eventName:r="keydown",passive:a=!1,dedupe:i=!1}=o,c=gv(n);return xe(l,r,p=>{p.repeat&&Ye(i)||c(p)&&s(p)},a)}function _v(e={}){var n;const{window:s=st}=e,o=(n=e.document)!=null?n:s==null?void 0:s.document,l=Mg(()=>null,()=>o==null?void 0:o.activeElement);return s&&(xe(s,"blur",r=>{r.relatedTarget===null&&l.trigger()},!0),xe(s,"focus",l.trigger,!0)),l}function bv(){const e=Y(!1);return Tt()&&Gn(()=>{e.value=!0}),e}function Zo(e){const n=bv();return $(()=>(n.value,!!e()))}function xv(e,n={}){const{immediate:s=!0,window:o=st}=n,l=Y(!1);let r=0,a=null;function i(p){if(!l.value||!o)return;const f=p-r;e({delta:f,timestamp:p}),r=p,a=o.requestAnimationFrame(i)}function c(){!l.value&&o&&(l.value=!0,a=o.requestAnimationFrame(i))}function u(){l.value=!1,a!=null&&o&&(o.cancelAnimationFrame(a),a=null)}return s&&c(),fn(u),{isActive:Yt(l),pause:u,resume:c}}function is(e,n={}){const{window:s=st}=n,o=Zo(()=>s&&"matchMedia"in s&&typeof s.matchMedia=="function");let l;const r=Y(!1),a=()=>{l&&("removeEventListener"in l?l.removeEventListener("change",i):l.removeListener(i))},i=()=>{o.value&&(a(),l=s.matchMedia(sf(e).value),r.value=!!(l!=null&&l.matches),l&&("addEventListener"in l?l.addEventListener("change",i):l.addListener(i)))};return Cs(i),fn(()=>a()),r}const Av={sm:640,md:768,lg:1024,xl:1280,"2xl":1536};function wv(e,n={}){function s(i,c){let u=e[i];return c!=null&&(u=zg(u,c)),typeof u=="number"&&(u=`${u}px`),u}const{window:o=st}=n;function l(i){return o?o.matchMedia(i).matches:!1}const r=i=>is(`(min-width: ${s(i)})`,n),a=Object.keys(e).reduce((i,c)=>(Object.defineProperty(i,c,{get:()=>r(c),enumerable:!0,configurable:!0}),i),{});return Object.assign(a,{greater(i){return is(`(min-width: ${s(i,.1)})`,n)},greaterOrEqual:r,smaller(i){return is(`(max-width: ${s(i,-.1)})`,n)},smallerOrEqual(i){return is(`(max-width: ${s(i)})`,n)},between(i,c){return is(`(min-width: ${s(i)}) and (max-width: ${s(c,-.1)})`,n)},isGreater(i){return l(`(min-width: ${s(i,.1)})`)},isGreaterOrEqual(i){return l(`(min-width: ${s(i)})`)},isSmaller(i){return l(`(max-width: ${s(i,-.1)})`)},isSmallerOrEqual(i){return l(`(max-width: ${s(i)})`)},isInBetween(i,c){return l(`(min-width: ${s(i)}) and (max-width: ${s(c,-.1)})`)},current(){const i=Object.keys(e).map(c=>[c,r(c)]);return $(()=>i.filter(([,c])=>c.value).map(([c])=>c))}})}function Bv(e={}){const{navigator:n=yv,read:s=!1,source:o,copiedDuring:l=1500,legacy:r=!1}=e,a=["copy","cut"],i=Zo(()=>n&&"clipboard"in n),c=$(()=>i.value||r),u=Y(""),p=Y(!1),f=sv(()=>p.value=!1,l);function h(){i.value?n.clipboard.readText().then(w=>{u.value=w}):u.value=b()}if(c.value&&s)for(const w of a)xe(w,h);async function y(w=Ye(o)){c.value&&w!=null&&(i.value?await n.clipboard.writeText(w):m(w),u.value=w,p.value=!0,f.start())}function m(w){const A=document.createElement("textarea");A.value=w??"",A.style.position="absolute",A.style.opacity="0",document.body.appendChild(A),A.select(),document.execCommand("copy"),A.remove()}function b(){var w,A,B;return(B=(A=(w=document==null?void 0:document.getSelection)==null?void 0:w.call(document))==null?void 0:A.toString())!=null?B:""}return{isSupported:c,text:u,copied:p,copy:y}}function kv(e){return JSON.parse(JSON.stringify(e))}const fl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},hl="__vueuse_ssr_handlers__",Cv=Fv();function Fv(){return hl in fl||(fl[hl]=fl[hl]||{}),fl[hl]}function Ev(e,n){return Cv[e]||n}function Dv(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}var Sv=Object.defineProperty,Xc=Object.getOwnPropertySymbols,Tv=Object.prototype.hasOwnProperty,$v=Object.prototype.propertyIsEnumerable,eu=(e,n,s)=>n in e?Sv(e,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[n]=s,tu=(e,n)=>{for(var s in n||(n={}))Tv.call(n,s)&&eu(e,s,n[s]);if(Xc)for(var s of Xc(n))$v.call(n,s)&&eu(e,s,n[s]);return e};const Uv={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}},nu="vueuse-storage";function Ov(e,n,s,o={}){var l;const{flush:r="pre",deep:a=!0,listenToStorageChanges:i=!0,writeDefaults:c=!0,mergeDefaults:u=!1,shallow:p,window:f=st,eventFilter:h,onError:y=U=>{console.error(U)}}=o,m=(p?un:Y)(n);if(!s)try{s=Ev("getDefaultStorage",()=>{var U;return(U=st)==null?void 0:U.localStorage})()}catch(U){y(U)}if(!s)return m;const b=Ye(n),w=Dv(b),A=(l=o.serializer)!=null?l:Uv[w],{pause:B,resume:x}=hv(m,()=>C(m.value),{flush:r,deep:a,eventFilter:h});return f&&i&&(xe(f,"storage",R),xe(f,nu,D)),R(),m;function C(U){try{if(U==null)s.removeItem(e);else{const j=A.write(U),ne=s.getItem(e);ne!==j&&(s.setItem(e,j),f&&f.dispatchEvent(new CustomEvent(nu,{detail:{key:e,oldValue:ne,newValue:j,storageArea:s}})))}}catch(j){y(j)}}function F(U){const j=U?U.newValue:s.getItem(e);if(j==null)return c&&b!==null&&s.setItem(e,A.write(b)),b;if(!U&&u){const ne=A.read(j);return typeof u=="function"?u(ne,b):w==="object"&&!Array.isArray(ne)?tu(tu({},b),ne):ne}else return typeof j!="string"?j:A.read(j)}function D(U){R(U.detail)}function R(U){if(!(U&&U.storageArea!==s)){if(U&&U.key==null){m.value=b;return}if(!(U&&U.key!==e)){B();try{m.value=F(U)}catch(j){y(j)}finally{U?it(x):x()}}}}}function Pv(e){return is("(prefers-color-scheme: dark)",e)}var Iv=Object.defineProperty,Mv=Object.defineProperties,Lv=Object.getOwnPropertyDescriptors,su=Object.getOwnPropertySymbols,Rv=Object.prototype.hasOwnProperty,Nv=Object.prototype.propertyIsEnumerable,ou=(e,n,s)=>n in e?Iv(e,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[n]=s,qv=(e,n)=>{for(var s in n||(n={}))Rv.call(n,s)&&ou(e,s,n[s]);if(su)for(var s of su(n))Nv.call(n,s)&&ou(e,s,n[s]);return e},Wv=(e,n)=>Mv(e,Lv(n));function dT(e,n={}){var s,o;const{pointerTypes:l,preventDefault:r,stopPropagation:a,exact:i,onMove:c,onEnd:u,onStart:p,initialValue:f,axis:h="both",draggingElement:y=st,handle:m=e}=n,b=Y((s=Ye(f))!=null?s:{x:0,y:0}),w=Y(),A=D=>l?l.includes(D.pointerType):!0,B=D=>{Ye(r)&&D.preventDefault(),Ye(a)&&D.stopPropagation()},x=D=>{if(!A(D)||Ye(i)&&D.target!==Ye(e))return;const R=Ye(e).getBoundingClientRect(),U={x:D.clientX-R.left,y:D.clientY-R.top};(p==null?void 0:p(U,D))!==!1&&(w.value=U,B(D))},C=D=>{if(!A(D)||!w.value)return;let{x:R,y:U}=b.value;(h==="x"||h==="both")&&(R=D.clientX-w.value.x),(h==="y"||h==="both")&&(U=D.clientY-w.value.y),b.value={x:R,y:U},c==null||c(b.value,D),B(D)},F=D=>{A(D)&&w.value&&(w.value=void 0,u==null||u(b.value,D),B(D))};if(Zt){const D={capture:(o=n.capture)!=null?o:!0};xe(m,"pointerdown",x,D),xe(y,"pointermove",C,D),xe(y,"pointerup",F,D)}return Wv(qv({},ev(b)),{position:b,isDragging:$(()=>!!w.value),style:$(()=>`left:${b.value.x}px;top:${b.value.y}px;`)})}var lu=Object.getOwnPropertySymbols,jv=Object.prototype.hasOwnProperty,Hv=Object.prototype.propertyIsEnumerable,Vv=(e,n)=>{var s={};for(var o in e)jv.call(e,o)&&n.indexOf(o)<0&&(s[o]=e[o]);if(e!=null&&lu)for(var o of lu(e))n.indexOf(o)<0&&Hv.call(e,o)&&(s[o]=e[o]);return s};function zv(e,n,s={}){const o=s,{window:l=st}=o,r=Vv(o,["window"]);let a;const i=Zo(()=>l&&"ResizeObserver"in l),c=()=>{a&&(a.disconnect(),a=void 0)},u=$(()=>Array.isArray(e)?e.map(h=>ct(h)):[ct(e)]),p=ge(u,h=>{if(c(),i.value&&l){a=new ResizeObserver(n);for(const y of h)y&&a.observe(y,r)}},{immediate:!0,flush:"post",deep:!0}),f=()=>{c(),p()};return fn(f),{isSupported:i,stop:f}}function Kv(e,n={width:0,height:0},s={}){const{window:o=st,box:l="content-box"}=s,r=$(()=>{var c,u;return(u=(c=ct(e))==null?void 0:c.namespaceURI)==null?void 0:u.includes("svg")}),a=Y(n.width),i=Y(n.height);return zv(e,([c])=>{const u=l==="border-box"?c.borderBoxSize:l==="content-box"?c.contentBoxSize:c.devicePixelContentBoxSize;if(o&&r.value){const p=ct(e);if(p){const f=o.getComputedStyle(p);a.value=Number.parseFloat(f.width),i.value=Number.parseFloat(f.height)}}else if(u){const p=Array.isArray(u)?u:[u];a.value=p.reduce((f,{inlineSize:h})=>f+h,0),i.value=p.reduce((f,{blockSize:h})=>f+h,0)}else a.value=c.contentRect.width,i.value=c.contentRect.height},s),ge(()=>ct(e),c=>{a.value=c?n.width:0,i.value=c?n.height:0}),{width:a,height:i}}function Gv(e,n,s={}){const{root:o,rootMargin:l="0px",threshold:r=.1,window:a=st,immediate:i=!0}=s,c=Zo(()=>a&&"IntersectionObserver"in a),u=$(()=>{const m=Ye(e);return(Array.isArray(m)?m:[m]).map(ct).filter(Ng)});let p=bs;const f=Y(i),h=c.value?ge(()=>[u.value,ct(o),f.value],([m,b])=>{if(p(),!f.value||!m.length)return;const w=new IntersectionObserver(n,{root:ct(b),rootMargin:l,threshold:r});m.forEach(A=>A&&w.observe(A)),p=()=>{w.disconnect(),p=bs}},{immediate:i,flush:"post"}):bs,y=()=>{p(),h(),f.value=!1};return fn(y),{isSupported:c,isActive:f,pause(){p(),f.value=!1},resume(){f.value=!0},stop:y}}const ru=["fullscreenchange","webkitfullscreenchange","webkitendfullscreen","mozfullscreenchange","MSFullscreenChange"];function Yv(e,n={}){const{document:s=cf,autoExit:o=!1}=n,l=$(()=>{var A;return(A=ct(e))!=null?A:s==null?void 0:s.querySelector("html")}),r=Y(!1),a=$(()=>["requestFullscreen","webkitRequestFullscreen","webkitEnterFullscreen","webkitEnterFullScreen","webkitRequestFullScreen","mozRequestFullScreen","msRequestFullscreen"].find(A=>s&&A in s||l.value&&A in l.value)),i=$(()=>["exitFullscreen","webkitExitFullscreen","webkitExitFullScreen","webkitCancelFullScreen","mozCancelFullScreen","msExitFullscreen"].find(A=>s&&A in s||l.value&&A in l.value)),c=$(()=>["fullScreen","webkitIsFullScreen","webkitDisplayingFullscreen","mozFullScreen","msFullscreenElement"].find(A=>s&&A in s||l.value&&A in l.value)),u=["fullscreenElement","webkitFullscreenElement","mozFullScreenElement","msFullscreenElement"].find(A=>s&&A in s),p=Zo(()=>l.value&&s&&a.value!==void 0&&i.value!==void 0&&c.value!==void 0),f=()=>u?(s==null?void 0:s[u])===l.value:!1,h=()=>{if(c.value){if(s&&s[c.value]!=null)return s[c.value];{const A=l.value;if((A==null?void 0:A[c.value])!=null)return!!A[c.value]}}return!1};async function y(){if(p.value){if(i.value)if((s==null?void 0:s[i.value])!=null)await s[i.value]();else{const A=l.value;(A==null?void 0:A[i.value])!=null&&await A[i.value]()}r.value=!1}}async function m(){if(!p.value)return;h()&&await y();const A=l.value;a.value&&(A==null?void 0:A[a.value])!=null&&(await A[a.value](),r.value=!0)}async function b(){await(r.value?y():m())}const w=()=>{const A=h();(!A||A&&f())&&(r.value=A)};return xe(s,ru,w,!1),xe(()=>ct(l),ru,w,!1),o&&fn(y),{isSupported:p,isFullscreen:r,enter:m,exit:y,toggle:b}}function Jt(e,n,s={}){const{window:o=st}=s;return Ov(e,n,o==null?void 0:o.localStorage,s)}const Qv={ctrl:"control",command:"meta",cmd:"meta",option:"alt",up:"arrowup",down:"arrowdown",left:"arrowleft",right:"arrowright"};function Zv(e={}){const{reactive:n=!1,target:s=st,aliasMap:o=Qv,passive:l=!0,onEventFired:r=bs}=e,a=He(new Set),i={toJSON(){return{}},current:a},c=n?He(i):i,u=new Set,p=new Set;function f(b,w){b in c&&(n?c[b]=w:c[b].value=w)}function h(){a.clear();for(const b of p)f(b,!1)}function y(b,w){var A,B;const x=(A=b.key)==null?void 0:A.toLowerCase(),F=[(B=b.code)==null?void 0:B.toLowerCase(),x].filter(Boolean);x&&(w?a.add(x):a.delete(x));for(const D of F)p.add(D),f(D,w);x==="meta"&&!w?(u.forEach(D=>{a.delete(D),f(D,!1)}),u.clear()):typeof b.getModifierState=="function"&&b.getModifierState("Meta")&&w&&[...a,...F].forEach(D=>u.add(D))}xe(s,"keydown",b=>(y(b,!0),r(b)),{passive:l}),xe(s,"keyup",b=>(y(b,!1),r(b)),{passive:l}),xe("blur",h,{passive:!0}),xe("focus",h,{passive:!0});const m=new Proxy(c,{get(b,w,A){if(typeof w!="string")return Reflect.get(b,w,A);if(w=w.toLowerCase(),w in o&&(w=o[w]),!(w in c))if(/[+_-]/.test(w)){const x=w.split(/[+_-]/g).map(C=>C.trim());c[w]=$(()=>x.every(C=>Ye(m[C])))}else c[w]=Y(!1);const B=Reflect.get(b,w,A);return n?Ye(B):B}});return m}const Jv={page:e=>[e.pageX,e.pageY],client:e=>[e.clientX,e.clientY],screen:e=>[e.screenX,e.screenY],movement:e=>e instanceof Touch?null:[e.movementX,e.movementY]};function fT(e={}){const{type:n="page",touch:s=!0,resetOnTouchEnds:o=!1,initialValue:l={x:0,y:0},window:r=st,target:a=r,eventFilter:i}=e,c=Y(l.x),u=Y(l.y),p=Y(null),f=typeof n=="function"?n:Jv[n],h=A=>{const B=f(A);B&&([c.value,u.value]=B,p.value="mouse")},y=A=>{if(A.touches.length>0){const B=f(A.touches[0]);B&&([c.value,u.value]=B,p.value="touch")}},m=()=>{c.value=l.x,u.value=l.y},b=i?A=>i(()=>h(A),{}):A=>h(A),w=i?A=>i(()=>y(A),{}):A=>y(A);return a&&(xe(a,"mousemove",b,{passive:!0}),xe(a,"dragover",b,{passive:!0}),s&&n!=="movement"&&(xe(a,"touchstart",w,{passive:!0}),xe(a,"touchmove",w,{passive:!0}),o&&xe(a,"touchend",m,{passive:!0}))),{x:c,y:u,sourceType:p}}function Xv(e,n={}){const s=sf(e),{threshold:o=50,onSwipe:l,onSwipeEnd:r,onSwipeStart:a}=n,i=He({x:0,y:0}),c=(D,R)=>{i.x=D,i.y=R},u=He({x:0,y:0}),p=(D,R)=>{u.x=D,u.y=R},f=$(()=>i.x-u.x),h=$(()=>i.y-u.y),{max:y,abs:m}=Math,b=$(()=>y(m(f.value),m(h.value))>=o),w=Y(!1),A=Y(!1),B=$(()=>b.value?m(f.value)>m(h.value)?f.value>0?"left":"right":h.value>0?"up":"down":"none"),x=D=>{var R,U,j;const ne=D.buttons===0,ue=D.buttons===1;return(j=(U=(R=n.pointerTypes)==null?void 0:R.includes(D.pointerType))!=null?U:ne||ue)!=null?j:!0},C=[xe(e,"pointerdown",D=>{var R,U;if(!x(D))return;A.value=!0,(U=(R=s.value)==null?void 0:R.style)==null||U.setProperty("touch-action","none");const j=D.target;j==null||j.setPointerCapture(D.pointerId);const{clientX:ne,clientY:ue}=D;c(ne,ue),p(ne,ue),a==null||a(D)}),xe(e,"pointermove",D=>{if(!x(D)||!A.value)return;const{clientX:R,clientY:U}=D;p(R,U),!w.value&&b.value&&(w.value=!0),w.value&&(l==null||l(D))}),xe(e,"pointerup",D=>{var R,U;x(D)&&(w.value&&(r==null||r(D,B.value)),A.value=!1,w.value=!1,(U=(R=s.value)==null?void 0:R.style)==null||U.setProperty("touch-action","initial"))})],F=()=>C.forEach(D=>D());return{isSwiping:Yt(w),direction:Yt(B),posStart:Yt(i),posEnd:Yt(u),distanceX:f,distanceY:h,stop:F}}let e_=0;function hT(e,n={}){const s=Y(!1),{document:o=cf,immediate:l=!0,manual:r=!1,id:a=`vueuse_styletag_${++e_}`}=n,i=Y(e);let c=()=>{};const u=()=>{if(!o)return;const f=o.getElementById(a)||o.createElement("style");f.isConnected||(f.type="text/css",f.id=a,n.media&&(f.media=n.media),o.head.appendChild(f)),!s.value&&(c=ge(i,h=>{f.textContent=h},{immediate:!0}),s.value=!0)},p=()=>{!o||!s.value||(c(),o.head.removeChild(o.getElementById(a)),s.value=!1)};return l&&!r&&of(u),r||fn(p),{id:a,css:i,unload:p,load:u,isLoaded:Yt(s)}}var t_=Object.defineProperty,au=Object.getOwnPropertySymbols,n_=Object.prototype.hasOwnProperty,s_=Object.prototype.propertyIsEnumerable,iu=(e,n,s)=>n in e?t_(e,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[n]=s,o_=(e,n)=>{for(var s in n||(n={}))n_.call(n,s)&&iu(e,s,n[s]);if(au)for(var s of au(n))s_.call(n,s)&&iu(e,s,n[s]);return e};function yT(e={}){const{controls:n=!1,offset:s=0,immediate:o=!0,interval:l="requestAnimationFrame",callback:r}=e,a=Y(Ba()+s),i=()=>a.value=Ba()+s,c=r?()=>{i(),r(a.value)}:i,u=l==="requestAnimationFrame"?xv(c,{immediate:o}):nv(c,l,{immediate:o});return n?o_({timestamp:a},u):a}function on(e,n,s,o={}){var l,r,a;const{clone:i=!1,passive:c=!1,eventName:u,deep:p=!1,defaultValue:f,shouldEmit:h}=o,y=Tt(),m=s||(y==null?void 0:y.emit)||((l=y==null?void 0:y.$emit)==null?void 0:l.bind(y))||((a=(r=y==null?void 0:y.proxy)==null?void 0:r.$emit)==null?void 0:a.bind(y==null?void 0:y.proxy));let b=u;n||(n="modelValue"),b=b||`update:${n.toString()}`;const w=x=>i?typeof i=="function"?i(x):kv(x):x,A=()=>Rg(e[n])?w(e[n]):f,B=x=>{h?h(x)&&m(b,x):m(b,x)};if(c){const x=A(),C=Y(x);return ge(()=>e[n],F=>C.value=w(F)),ge(C,F=>{(F!==e[n]||p)&&B(F)},{deep:p}),C}else return $({get(){return A()},set(x){B(x)}})}function mT({window:e=st}={}){if(!e)return Y(!1);const n=Y(e.document.hasFocus());return xe(e,"blur",()=>{n.value=!1}),xe(e,"focus",()=>{n.value=!0}),n}function l_(e={}){const{window:n=st,initialWidth:s=1/0,initialHeight:o=1/0,listenOrientation:l=!0,includeScrollbar:r=!0}=e,a=Y(s),i=Y(o),c=()=>{n&&(r?(a.value=n.innerWidth,i.value=n.innerHeight):(a.value=n.document.documentElement.clientWidth,i.value=n.document.documentElement.clientHeight))};if(c(),of(c),xe("resize",c,{passive:!0}),l){const u=is("(orientation: portrait)");ge(u,()=>c())}return{width:a,height:i}}function r_(){return uf().__VUE_DEVTOOLS_GLOBAL_HOOK__}function uf(){return typeof navigator<"u"&&typeof window<"u"?window:typeof global<"u"?global:{}}const a_=typeof Proxy=="function",i_="devtools-plugin:setup",c_="plugin:settings:set";let $s,ka;function u_(){var e;return $s!==void 0||(typeof window<"u"&&window.performance?($s=!0,ka=window.performance):typeof global<"u"&&(!((e=global.perf_hooks)===null||e===void 0)&&e.performance)?($s=!0,ka=global.perf_hooks.performance):$s=!1),$s}function p_(){return u_()?ka.now():Date.now()}class d_{constructor(n,s){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=n,this.hook=s;const o={};if(n.settings)for(const a in n.settings){const i=n.settings[a];o[a]=i.defaultValue}const l=`__vue-devtools-plugin-settings__${n.id}`;let r=Object.assign({},o);try{const a=localStorage.getItem(l),i=JSON.parse(a);Object.assign(r,i)}catch{}this.fallbacks={getSettings(){return r},setSettings(a){try{localStorage.setItem(l,JSON.stringify(a))}catch{}r=a},now(){return p_()}},s&&s.on(c_,(a,i)=>{a===this.plugin.id&&this.fallbacks.setSettings(i)}),this.proxiedOn=new Proxy({},{get:(a,i)=>this.target?this.target.on[i]:(...c)=>{this.onQueue.push({method:i,args:c})}}),this.proxiedTarget=new Proxy({},{get:(a,i)=>this.target?this.target[i]:i==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(i)?(...c)=>(this.targetQueue.push({method:i,args:c,resolve:()=>{}}),this.fallbacks[i](...c)):(...c)=>new Promise(u=>{this.targetQueue.push({method:i,args:c,resolve:u})})})}async setRealTarget(n){this.target=n;for(const s of this.onQueue)this.target.on[s.method](...s.args);for(const s of this.targetQueue)s.resolve(await this.target[s.method](...s.args))}}function f_(e,n){const s=e,o=uf(),l=r_(),r=a_&&s.enableEarlyProxy;if(l&&(o.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!r))l.emit(i_,e,n);else{const a=r?new d_(s,l):null;(o.__VUE_DEVTOOLS_PLUGINS__=o.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:s,setupFn:n,proxy:a}),a&&n(a.proxiedTarget)}}/*!
  * vue-router v4.2.2
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const _n=typeof window<"u";function h_(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const Ue=Object.assign;function Ir(e,n){const s={};for(const o in n){const l=n[o];s[o]=St(l)?l.map(e):e(l)}return s}const xo=()=>{},St=Array.isArray;function Ee(e){const n=Array.from(arguments).slice(1);console.warn.apply(console,["[Vue Router warn]: "+e].concat(n))}const y_=/\/$/,m_=e=>e.replace(y_,"");function Mr(e,n,s="/"){let o,l={},r="",a="";const i=n.indexOf("#");let c=n.indexOf("?");return i<c&&i>=0&&(c=-1),c>-1&&(o=n.slice(0,c),r=n.slice(c+1,i>-1?i:n.length),l=e(r)),i>-1&&(o=o||n.slice(0,i),a=n.slice(i,n.length)),o=__(o??n,s),{fullPath:o+(r&&"?")+r+a,path:o,query:l,hash:a}}function g_(e,n){const s=n.query?e(n.query):"";return n.path+(s&&"?")+s+(n.hash||"")}function cu(e,n){return!n||!e.toLowerCase().startsWith(n.toLowerCase())?e:e.slice(n.length)||"/"}function uu(e,n,s){const o=n.matched.length-1,l=s.matched.length-1;return o>-1&&o===l&&zn(n.matched[o],s.matched[l])&&pf(n.params,s.params)&&e(n.query)===e(s.query)&&n.hash===s.hash}function zn(e,n){return(e.aliasOf||e)===(n.aliasOf||n)}function pf(e,n){if(Object.keys(e).length!==Object.keys(n).length)return!1;for(const s in e)if(!v_(e[s],n[s]))return!1;return!0}function v_(e,n){return St(e)?pu(e,n):St(n)?pu(n,e):e===n}function pu(e,n){return St(n)?e.length===n.length&&e.every((s,o)=>s===n[o]):e.length===1&&e[0]===n}function __(e,n){if(e.startsWith("/"))return e;if(!n.startsWith("/"))return Ee(`Cannot resolve a relative location without an absolute path. Trying to resolve "${e}" from "${n}". It should look like "/${n}".`),e;if(!e)return n;const s=n.split("/"),o=e.split("/"),l=o[o.length-1];(l===".."||l===".")&&o.push("");let r=s.length-1,a,i;for(a=0;a<o.length;a++)if(i=o[a],i!==".")if(i==="..")r>1&&r--;else break;return s.slice(0,r).join("/")+"/"+o.slice(a-(a===o.length?1:0)).join("/")}var Io;(function(e){e.pop="pop",e.push="push"})(Io||(Io={}));var Ao;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Ao||(Ao={}));function b_(e){if(!e)if(_n){const n=document.querySelector("base");e=n&&n.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),m_(e)}const x_=/^[^#]+#/;function A_(e,n){return e.replace(x_,"#")+n}function w_(e,n){const s=document.documentElement.getBoundingClientRect(),o=e.getBoundingClientRect();return{behavior:n.behavior,left:o.left-s.left-(n.left||0),top:o.top-s.top-(n.top||0)}}const gr=()=>({left:window.pageXOffset,top:window.pageYOffset});function B_(e){let n;if("el"in e){const s=e.el,o=typeof s=="string"&&s.startsWith("#");if(typeof e.el=="string"&&(!o||!document.getElementById(e.el.slice(1))))try{const r=document.querySelector(e.el);if(o&&r){Ee(`The selector "${e.el}" should be passed as "el: document.querySelector('${e.el}')" because it starts with "#".`);return}}catch{Ee(`The selector "${e.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`);return}const l=typeof s=="string"?o?document.getElementById(s.slice(1)):document.querySelector(s):s;if(!l){Ee(`Couldn't find element using selector "${e.el}" returned by scrollBehavior.`);return}n=w_(l,e)}else n=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(n):window.scrollTo(n.left!=null?n.left:window.pageXOffset,n.top!=null?n.top:window.pageYOffset)}function du(e,n){return(history.state?history.state.position-n:-1)+e}const Ca=new Map;function k_(e,n){Ca.set(e,n)}function C_(e){const n=Ca.get(e);return Ca.delete(e),n}let F_=()=>location.protocol+"//"+location.host;function df(e,n){const{pathname:s,search:o,hash:l}=n,r=e.indexOf("#");if(r>-1){let i=l.includes(e.slice(r))?e.slice(r).length:1,c=l.slice(i);return c[0]!=="/"&&(c="/"+c),cu(c,"")}return cu(s,e)+o+l}function E_(e,n,s,o){let l=[],r=[],a=null;const i=({state:h})=>{const y=df(e,location),m=s.value,b=n.value;let w=0;if(h){if(s.value=y,n.value=h,a&&a===m){a=null;return}w=b?h.position-b.position:0}else o(y);l.forEach(A=>{A(s.value,m,{delta:w,type:Io.pop,direction:w?w>0?Ao.forward:Ao.back:Ao.unknown})})};function c(){a=s.value}function u(h){l.push(h);const y=()=>{const m=l.indexOf(h);m>-1&&l.splice(m,1)};return r.push(y),y}function p(){const{history:h}=window;h.state&&h.replaceState(Ue({},h.state,{scroll:gr()}),"")}function f(){for(const h of r)h();r=[],window.removeEventListener("popstate",i),window.removeEventListener("beforeunload",p)}return window.addEventListener("popstate",i),window.addEventListener("beforeunload",p,{passive:!0}),{pauseListeners:c,listen:u,destroy:f}}function fu(e,n,s,o=!1,l=!1){return{back:e,current:n,forward:s,replaced:o,position:window.history.length,scroll:l?gr():null}}function D_(e){const{history:n,location:s}=window,o={value:df(e,s)},l={value:n.state};l.value||r(o.value,{back:null,current:o.value,forward:null,position:n.length-1,replaced:!0,scroll:null},!0);function r(c,u,p){const f=e.indexOf("#"),h=f>-1?(s.host&&document.querySelector("base")?e:e.slice(f))+c:F_()+e+c;try{n[p?"replaceState":"pushState"](u,"",h),l.value=u}catch(y){Ee("Error with push/replace State",y),s[p?"replace":"assign"](h)}}function a(c,u){const p=Ue({},n.state,fu(l.value.back,c,l.value.forward,!0),u,{position:l.value.position});r(c,p,!0),o.value=c}function i(c,u){const p=Ue({},l.value,n.state,{forward:c,scroll:gr()});n.state||Ee(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://next.router.vuejs.org/guide/migration/#usage-of-history-state.`),r(p.current,p,!0);const f=Ue({},fu(o.value,c,null),{position:p.position+1},u);r(c,f,!1),o.value=c}return{location:o,state:l,push:i,replace:a}}function S_(e){e=b_(e);const n=D_(e),s=E_(e,n.state,n.location,n.replace);function o(r,a=!0){a||s.pauseListeners(),history.go(r)}const l=Ue({location:"",base:e,go:o,createHref:A_.bind(null,e)},n,s);return Object.defineProperty(l,"location",{enumerable:!0,get:()=>n.location.value}),Object.defineProperty(l,"state",{enumerable:!0,get:()=>n.state.value}),l}function T_(e){return typeof e=="string"||e&&typeof e=="object"}function ff(e){return typeof e=="string"||typeof e=="symbol"}const Dn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},hf=Symbol("navigation failure");var hu;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(hu||(hu={}));const $_={[1]({location:e,currentLocation:n}){return`No match for
 ${JSON.stringify(e)}${n?`
while being at
`+JSON.stringify(n):""}`},[2]({from:e,to:n}){return`Redirected from "${e.fullPath}" to "${O_(n)}" via a navigation guard.`},[4]({from:e,to:n}){return`Navigation aborted from "${e.fullPath}" to "${n.fullPath}" via a navigation guard.`},[8]({from:e,to:n}){return`Navigation cancelled from "${e.fullPath}" to "${n.fullPath}" with a new navigation.`},[16]({from:e,to:n}){return`Avoided redundant navigation to current location: "${e.fullPath}".`}};function Hs(e,n){return Ue(new Error($_[e](n)),{type:e,[hf]:!0},n)}function hn(e,n){return e instanceof Error&&hf in e&&(n==null||!!(e.type&n))}const U_=["params","query","hash"];function O_(e){if(typeof e=="string")return e;if("path"in e)return e.path;const n={};for(const s of U_)s in e&&(n[s]=e[s]);return JSON.stringify(n,null,2)}const yu="[^/]+?",P_={sensitive:!1,strict:!1,start:!0,end:!0},I_=/[.+*?^${}()[\]/\\]/g;function M_(e,n){const s=Ue({},P_,n),o=[];let l=s.start?"^":"";const r=[];for(const u of e){const p=u.length?[]:[90];s.strict&&!u.length&&(l+="/");for(let f=0;f<u.length;f++){const h=u[f];let y=40+(s.sensitive?.25:0);if(h.type===0)f||(l+="/"),l+=h.value.replace(I_,"\\$&"),y+=40;else if(h.type===1){const{value:m,repeatable:b,optional:w,regexp:A}=h;r.push({name:m,repeatable:b,optional:w});const B=A||yu;if(B!==yu){y+=10;try{new RegExp(`(${B})`)}catch(C){throw new Error(`Invalid custom RegExp for param "${m}" (${B}): `+C.message)}}let x=b?`((?:${B})(?:/(?:${B}))*)`:`(${B})`;f||(x=w&&u.length<2?`(?:/${x})`:"/"+x),w&&(x+="?"),l+=x,y+=20,w&&(y+=-8),b&&(y+=-20),B===".*"&&(y+=-50)}p.push(y)}o.push(p)}if(s.strict&&s.end){const u=o.length-1;o[u][o[u].length-1]+=.7000000000000001}s.strict||(l+="/?"),s.end?l+="$":s.strict&&(l+="(?:/|$)");const a=new RegExp(l,s.sensitive?"":"i");function i(u){const p=u.match(a),f={};if(!p)return null;for(let h=1;h<p.length;h++){const y=p[h]||"",m=r[h-1];f[m.name]=y&&m.repeatable?y.split("/"):y}return f}function c(u){let p="",f=!1;for(const h of e){(!f||!p.endsWith("/"))&&(p+="/"),f=!1;for(const y of h)if(y.type===0)p+=y.value;else if(y.type===1){const{value:m,repeatable:b,optional:w}=y,A=m in u?u[m]:"";if(St(A)&&!b)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const B=St(A)?A.join("/"):A;if(!B)if(w)h.length<2&&(p.endsWith("/")?p=p.slice(0,-1):f=!0);else throw new Error(`Missing required param "${m}"`);p+=B}}return p||"/"}return{re:a,score:o,keys:r,parse:i,stringify:c}}function L_(e,n){let s=0;for(;s<e.length&&s<n.length;){const o=n[s]-e[s];if(o)return o;s++}return e.length<n.length?e.length===1&&e[0]===40+40?-1:1:e.length>n.length?n.length===1&&n[0]===40+40?1:-1:0}function R_(e,n){let s=0;const o=e.score,l=n.score;for(;s<o.length&&s<l.length;){const r=L_(o[s],l[s]);if(r)return r;s++}if(Math.abs(l.length-o.length)===1){if(mu(o))return 1;if(mu(l))return-1}return l.length-o.length}function mu(e){const n=e[e.length-1];return e.length>0&&n[n.length-1]<0}const N_={type:0,value:""},q_=/[a-zA-Z0-9_]/;function W_(e){if(!e)return[[]];if(e==="/")return[[N_]];if(!e.startsWith("/"))throw new Error(`Route paths should start with a "/": "${e}" should be "/${e}".`);function n(y){throw new Error(`ERR (${s})/"${u}": ${y}`)}let s=0,o=s;const l=[];let r;function a(){r&&l.push(r),r=[]}let i=0,c,u="",p="";function f(){u&&(s===0?r.push({type:0,value:u}):s===1||s===2||s===3?(r.length>1&&(c==="*"||c==="+")&&n(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:u,regexp:p,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):n("Invalid state to consume buffer"),u="")}function h(){u+=c}for(;i<e.length;){if(c=e[i++],c==="\\"&&s!==2){o=s,s=4;continue}switch(s){case 0:c==="/"?(u&&f(),a()):c===":"?(f(),s=1):h();break;case 4:h(),s=o;break;case 1:c==="("?s=2:q_.test(c)?h():(f(),s=0,c!=="*"&&c!=="?"&&c!=="+"&&i--);break;case 2:c===")"?p[p.length-1]=="\\"?p=p.slice(0,-1)+c:s=3:p+=c;break;case 3:f(),s=0,c!=="*"&&c!=="?"&&c!=="+"&&i--,p="";break;default:n("Unknown state");break}}return s===2&&n(`Unfinished custom RegExp for param "${u}"`),f(),a(),l}function j_(e,n,s){const o=M_(W_(e.path),s);{const r=new Set;for(const a of o.keys)r.has(a.name)&&Ee(`Found duplicated params with name "${a.name}" for path "${e.path}". Only the last one will be available on "$route.params".`),r.add(a.name)}const l=Ue(o,{record:e,parent:n,children:[],alias:[]});return n&&!l.record.aliasOf==!n.record.aliasOf&&n.children.push(l),l}function H_(e,n){const s=[],o=new Map;n=_u({strict:!1,end:!0,sensitive:!1},n);function l(p){return o.get(p)}function r(p,f,h){const y=!h,m=V_(p);Y_(m,f),m.aliasOf=h&&h.record;const b=_u(n,p),w=[m];if("alias"in p){const x=typeof p.alias=="string"?[p.alias]:p.alias;for(const C of x)w.push(Ue({},m,{components:h?h.record.components:m.components,path:C,aliasOf:h?h.record:m}))}let A,B;for(const x of w){const{path:C}=x;if(f&&C[0]!=="/"){const F=f.record.path,D=F[F.length-1]==="/"?"":"/";x.path=f.record.path+(C&&D+C)}if(x.path==="*")throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.`);if(A=j_(x,f,b),f&&C[0]==="/"&&Q_(A,f),h?(h.alias.push(A),G_(h,A)):(B=B||A,B!==A&&B.alias.push(A),y&&p.name&&!vu(A)&&a(p.name)),m.children){const F=m.children;for(let D=0;D<F.length;D++)r(F[D],A,h&&h.children[D])}h=h||A,(A.record.components&&Object.keys(A.record.components).length||A.record.name||A.record.redirect)&&c(A)}return B?()=>{a(B)}:xo}function a(p){if(ff(p)){const f=o.get(p);f&&(o.delete(p),s.splice(s.indexOf(f),1),f.children.forEach(a),f.alias.forEach(a))}else{const f=s.indexOf(p);f>-1&&(s.splice(f,1),p.record.name&&o.delete(p.record.name),p.children.forEach(a),p.alias.forEach(a))}}function i(){return s}function c(p){let f=0;for(;f<s.length&&R_(p,s[f])>=0&&(p.record.path!==s[f].record.path||!yf(p,s[f]));)f++;s.splice(f,0,p),p.record.name&&!vu(p)&&o.set(p.record.name,p)}function u(p,f){let h,y={},m,b;if("name"in p&&p.name){if(h=o.get(p.name),!h)throw Hs(1,{location:p});{const B=Object.keys(p.params||{}).filter(x=>!h.keys.find(C=>C.name===x));B.length&&Ee(`Discarded invalid param(s) "${B.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`)}b=h.record.name,y=Ue(gu(f.params,h.keys.filter(B=>!B.optional).map(B=>B.name)),p.params&&gu(p.params,h.keys.map(B=>B.name))),m=h.stringify(y)}else if("path"in p)m=p.path,m.startsWith("/")||Ee(`The Matcher cannot resolve relative paths but received "${m}". Unless you directly called \`matcher.resolve("${m}")\`, this is probably a bug in vue-router. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/router.`),h=s.find(B=>B.re.test(m)),h&&(y=h.parse(m),b=h.record.name);else{if(h=f.name?o.get(f.name):s.find(B=>B.re.test(f.path)),!h)throw Hs(1,{location:p,currentLocation:f});b=h.record.name,y=Ue({},f.params,p.params),m=h.stringify(y)}const w=[];let A=h;for(;A;)w.unshift(A.record),A=A.parent;return{name:b,path:m,params:y,matched:w,meta:K_(w)}}return e.forEach(p=>r(p)),{addRoute:r,resolve:u,removeRoute:a,getRoutes:i,getRecordMatcher:l}}function gu(e,n){const s={};for(const o of n)o in e&&(s[o]=e[o]);return s}function V_(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:z_(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function z_(e){const n={},s=e.props||!1;if("component"in e)n.default=s;else for(const o in e.components)n[o]=typeof s=="boolean"?s:s[o];return n}function vu(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function K_(e){return e.reduce((n,s)=>Ue(n,s.meta),{})}function _u(e,n){const s={};for(const o in e)s[o]=o in n?n[o]:e[o];return s}function Fa(e,n){return e.name===n.name&&e.optional===n.optional&&e.repeatable===n.repeatable}function G_(e,n){for(const s of e.keys)if(!s.optional&&!n.keys.find(Fa.bind(null,s)))return Ee(`Alias "${n.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${s.name}"`);for(const s of n.keys)if(!s.optional&&!e.keys.find(Fa.bind(null,s)))return Ee(`Alias "${n.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${s.name}"`)}function Y_(e,n){n&&n.record.name&&!e.name&&!e.path&&Ee(`The route named "${String(n.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`)}function Q_(e,n){for(const s of n.keys)if(!e.keys.find(Fa.bind(null,s)))return Ee(`Absolute path "${e.record.path}" must have the exact same param named "${s.name}" as its parent "${n.record.path}".`)}function yf(e,n){return n.children.some(s=>s===e||yf(e,s))}const mf=/#/g,Z_=/&/g,J_=/\//g,X_=/=/g,e8=/\?/g,gf=/\+/g,t8=/%5B/g,n8=/%5D/g,vf=/%5E/g,s8=/%60/g,_f=/%7B/g,o8=/%7C/g,bf=/%7D/g,l8=/%20/g;function Si(e){return encodeURI(""+e).replace(o8,"|").replace(t8,"[").replace(n8,"]")}function r8(e){return Si(e).replace(_f,"{").replace(bf,"}").replace(vf,"^")}function Ea(e){return Si(e).replace(gf,"%2B").replace(l8,"+").replace(mf,"%23").replace(Z_,"%26").replace(s8,"`").replace(_f,"{").replace(bf,"}").replace(vf,"^")}function a8(e){return Ea(e).replace(X_,"%3D")}function i8(e){return Si(e).replace(mf,"%23").replace(e8,"%3F")}function c8(e){return e==null?"":i8(e).replace(J_,"%2F")}function Mo(e){try{return decodeURIComponent(""+e)}catch{Ee(`Error decoding "${e}". Using original value`)}return""+e}function u8(e){const n={};if(e===""||e==="?")return n;const o=(e[0]==="?"?e.slice(1):e).split("&");for(let l=0;l<o.length;++l){const r=o[l].replace(gf," "),a=r.indexOf("="),i=Mo(a<0?r:r.slice(0,a)),c=a<0?null:Mo(r.slice(a+1));if(i in n){let u=n[i];St(u)||(u=n[i]=[u]),u.push(c)}else n[i]=c}return n}function bu(e){let n="";for(let s in e){const o=e[s];if(s=a8(s),o==null){o!==void 0&&(n+=(n.length?"&":"")+s);continue}(St(o)?o.map(r=>r&&Ea(r)):[o&&Ea(o)]).forEach(r=>{r!==void 0&&(n+=(n.length?"&":"")+s,r!=null&&(n+="="+r))})}return n}function p8(e){const n={};for(const s in e){const o=e[s];o!==void 0&&(n[s]=St(o)?o.map(l=>l==null?null:""+l):o==null?o:""+o)}return n}const d8=Symbol("router view location matched"),xu=Symbol("router view depth"),Ti=Symbol("router"),xf=Symbol("route location"),Da=Symbol("router view location");function so(){let e=[];function n(o){return e.push(o),()=>{const l=e.indexOf(o);l>-1&&e.splice(l,1)}}function s(){e=[]}return{add:n,list:()=>e,reset:s}}function Un(e,n,s,o,l){const r=o&&(o.enterCallbacks[l]=o.enterCallbacks[l]||[]);return()=>new Promise((a,i)=>{const c=f=>{f===!1?i(Hs(4,{from:s,to:n})):f instanceof Error?i(f):T_(f)?i(Hs(2,{from:n,to:f})):(r&&o.enterCallbacks[l]===r&&typeof f=="function"&&r.push(f),a())},u=e.call(o&&o.instances[l],n,s,f8(c,n,s));let p=Promise.resolve(u);if(e.length<3&&(p=p.then(c)),e.length>2){const f=`The "next" callback was never called inside of ${e.name?'"'+e.name+'"':""}:
${e.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;if(typeof u=="object"&&"then"in u)p=p.then(h=>c._called?h:(Ee(f),Promise.reject(new Error("Invalid navigation guard"))));else if(u!==void 0&&!c._called){Ee(f),i(new Error("Invalid navigation guard"));return}}p.catch(f=>i(f))})}function f8(e,n,s){let o=0;return function(){o++===1&&Ee(`The "next" callback was called more than once in one navigation guard when going from "${s.fullPath}" to "${n.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`),e._called=!0,o===1&&e.apply(null,arguments)}}function Lr(e,n,s,o){const l=[];for(const r of e){!r.components&&!r.children.length&&Ee(`Record with path "${r.path}" is either missing a "component(s)" or "children" property.`);for(const a in r.components){let i=r.components[a];{if(!i||typeof i!="object"&&typeof i!="function")throw Ee(`Component "${a}" in record with path "${r.path}" is not a valid component. Received "${String(i)}".`),new Error("Invalid route component");if("then"in i){Ee(`Component "${a}" in record with path "${r.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`);const c=i;i=()=>c}else i.__asyncLoader&&!i.__warnedDefineAsync&&(i.__warnedDefineAsync=!0,Ee(`Component "${a}" in record with path "${r.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`))}if(!(n!=="beforeRouteEnter"&&!r.instances[a]))if(h8(i)){const u=(i.__vccOpts||i)[n];u&&l.push(Un(u,s,o,r,a))}else{let c=i();"catch"in c||(Ee(`Component "${a}" in record with path "${r.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`),c=Promise.resolve(c)),l.push(()=>c.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${r.path}"`));const p=h_(u)?u.default:u;r.components[a]=p;const h=(p.__vccOpts||p)[n];return h&&Un(h,s,o,r,a)()}))}}}return l}function h8(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Au(e){const n=L(Ti),s=L(xf),o=$(()=>n.resolve(T(e.to))),l=$(()=>{const{matched:c}=o.value,{length:u}=c,p=c[u-1],f=s.matched;if(!p||!f.length)return-1;const h=f.findIndex(zn.bind(null,p));if(h>-1)return h;const y=wu(c[u-2]);return u>1&&wu(p)===y&&f[f.length-1].path!==y?f.findIndex(zn.bind(null,c[u-2])):h}),r=$(()=>l.value>-1&&v8(s.params,o.value.params)),a=$(()=>l.value>-1&&l.value===s.matched.length-1&&pf(s.params,o.value.params));function i(c={}){return g8(c)?n[T(e.replace)?"replace":"push"](T(e.to)).catch(xo):Promise.resolve()}if(_n){const c=Tt();if(c){const u={route:o.value,isActive:r.value,isExactActive:a.value};c.__vrl_devtools=c.__vrl_devtools||[],c.__vrl_devtools.push(u),Cs(()=>{u.route=o.value,u.isActive=r.value,u.isExactActive=a.value},{flush:"post"})}}return{route:o,href:$(()=>o.value.href),isActive:r,isExactActive:a,navigate:i}}const y8=ke({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Au,setup(e,{slots:n}){const s=He(Au(e)),{options:o}=L(Ti),l=$(()=>({[Bu(e.activeClass,o.linkActiveClass,"router-link-active")]:s.isActive,[Bu(e.exactActiveClass,o.linkExactActiveClass,"router-link-exact-active")]:s.isExactActive}));return()=>{const r=n.default&&n.default(s);return e.custom?r:tt("a",{"aria-current":s.isExactActive?e.ariaCurrentValue:null,href:s.href,onClick:s.navigate,class:l.value},r)}}}),m8=y8;function g8(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const n=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(n))return}return e.preventDefault&&e.preventDefault(),!0}}function v8(e,n){for(const s in n){const o=n[s],l=e[s];if(typeof o=="string"){if(o!==l)return!1}else if(!St(l)||l.length!==o.length||o.some((r,a)=>r!==l[a]))return!1}return!0}function wu(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Bu=(e,n,s)=>e??n??s,_8=ke({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:n,slots:s}){x8();const o=L(Da),l=$(()=>e.route||o.value),r=L(xu,0),a=$(()=>{let u=T(r);const{matched:p}=l.value;let f;for(;(f=p[u])&&!f.components;)u++;return u}),i=$(()=>l.value.matched[a.value]);Ft(xu,$(()=>a.value+1)),Ft(d8,i),Ft(Da,l);const c=Y();return ge(()=>[c.value,i.value,e.name],([u,p,f],[h,y,m])=>{p&&(p.instances[f]=u,y&&y!==p&&u&&u===h&&(p.leaveGuards.size||(p.leaveGuards=y.leaveGuards),p.updateGuards.size||(p.updateGuards=y.updateGuards))),u&&p&&(!y||!zn(p,y)||!h)&&(p.enterCallbacks[f]||[]).forEach(b=>b(u))},{flush:"post"}),()=>{const u=l.value,p=e.name,f=i.value,h=f&&f.components[p];if(!h)return ku(s.default,{Component:h,route:u});const y=f.props[p],m=y?y===!0?u.params:typeof y=="function"?y(u):y:null,w=tt(h,Ue({},m,n,{onVnodeUnmounted:A=>{A.component.isUnmounted&&(f.instances[p]=null)},ref:c}));if(_n&&w.ref){const A={depth:a.value,name:f.name,path:f.path,meta:f.meta};(St(w.ref)?w.ref.map(x=>x.i):[w.ref.i]).forEach(x=>{x.__vrv_devtools=A})}return ku(s.default,{Component:w,route:u})||w}}});function ku(e,n){if(!e)return null;const s=e(n);return s.length===1?s[0]:s}const b8=_8;function x8(){const e=Tt(),n=e.parent&&e.parent.type.name,s=e.parent&&e.parent.subTree&&e.parent.subTree.type;if(n&&(n==="KeepAlive"||n.includes("Transition"))&&typeof s=="object"&&s.name==="RouterView"){const o=n==="KeepAlive"?"keep-alive":"transition";Ee(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.
Use slot props instead:

<router-view v-slot="{ Component }">
  <${o}>
    <component :is="Component" />
  </${o}>
</router-view>`)}}function oo(e,n){const s=Ue({},e,{matched:e.matched.map(o=>S8(o,["instances","children","aliasOf"]))});return{_custom:{type:null,readOnly:!0,display:e.fullPath,tooltip:n,value:s}}}function yl(e){return{_custom:{display:e}}}let A8=0;function w8(e,n,s){if(n.__hasDevtools)return;n.__hasDevtools=!0;const o=A8++;f_({id:"org.vuejs.router"+(o?"."+o:""),label:"Vue Router",packageName:"vue-router",homepage:"https://router.vuejs.org",logo:"https://router.vuejs.org/logo.png",componentStateTypes:["Routing"],app:e},l=>{typeof l.now!="function"&&console.warn("[Vue Router]: You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."),l.on.inspectComponent((p,f)=>{p.instanceData&&p.instanceData.state.push({type:"Routing",key:"$route",editable:!1,value:oo(n.currentRoute.value,"Current Route")})}),l.on.visitComponentTree(({treeNode:p,componentInstance:f})=>{if(f.__vrv_devtools){const h=f.__vrv_devtools;p.tags.push({label:(h.name?`${h.name.toString()}: `:"")+h.path,textColor:0,tooltip:"This component is rendered by &lt;router-view&gt;",backgroundColor:Af})}St(f.__vrl_devtools)&&(f.__devtoolsApi=l,f.__vrl_devtools.forEach(h=>{let y=kf,m="";h.isExactActive?(y=Bf,m="This is exactly active"):h.isActive&&(y=wf,m="This link is active"),p.tags.push({label:h.route.path,textColor:0,tooltip:m,backgroundColor:y})}))}),ge(n.currentRoute,()=>{c(),l.notifyComponentUpdate(),l.sendInspectorTree(i),l.sendInspectorState(i)});const r="router:navigations:"+o;l.addTimelineLayer({id:r,label:`Router${o?" "+o:""} Navigations`,color:4237508}),n.onError((p,f)=>{l.addTimelineEvent({layerId:r,event:{title:"Error during Navigation",subtitle:f.fullPath,logType:"error",time:l.now(),data:{error:p},groupId:f.meta.__navigationId}})});let a=0;n.beforeEach((p,f)=>{const h={guard:yl("beforeEach"),from:oo(f,"Current Location during this navigation"),to:oo(p,"Target location")};Object.defineProperty(p.meta,"__navigationId",{value:a++}),l.addTimelineEvent({layerId:r,event:{time:l.now(),title:"Start of navigation",subtitle:p.fullPath,data:h,groupId:p.meta.__navigationId}})}),n.afterEach((p,f,h)=>{const y={guard:yl("afterEach")};h?(y.failure={_custom:{type:Error,readOnly:!0,display:h?h.message:"",tooltip:"Navigation Failure",value:h}},y.status=yl("❌")):y.status=yl("✅"),y.from=oo(f,"Current Location during this navigation"),y.to=oo(p,"Target location"),l.addTimelineEvent({layerId:r,event:{title:"End of navigation",subtitle:p.fullPath,time:l.now(),data:y,logType:h?"warning":"default",groupId:p.meta.__navigationId}})});const i="router-inspector:"+o;l.addInspector({id:i,label:"Routes"+(o?" "+o:""),icon:"book",treeFilterPlaceholder:"Search routes"});function c(){if(!u)return;const p=u;let f=s.getRoutes().filter(h=>!h.parent);f.forEach(Ef),p.filter&&(f=f.filter(h=>Sa(h,p.filter.toLowerCase()))),f.forEach(h=>Ff(h,n.currentRoute.value)),p.rootNodes=f.map(Cf)}let u;l.on.getInspectorTree(p=>{u=p,p.app===e&&p.inspectorId===i&&c()}),l.on.getInspectorState(p=>{if(p.app===e&&p.inspectorId===i){const h=s.getRoutes().find(y=>y.record.__vd_id===p.nodeId);h&&(p.state={options:k8(h)})}}),l.sendInspectorTree(i),l.sendInspectorState(i)})}function B8(e){return e.optional?e.repeatable?"*":"?":e.repeatable?"+":""}function k8(e){const{record:n}=e,s=[{editable:!1,key:"path",value:n.path}];return n.name!=null&&s.push({editable:!1,key:"name",value:n.name}),s.push({editable:!1,key:"regexp",value:e.re}),e.keys.length&&s.push({editable:!1,key:"keys",value:{_custom:{type:null,readOnly:!0,display:e.keys.map(o=>`${o.name}${B8(o)}`).join(" "),tooltip:"Param keys",value:e.keys}}}),n.redirect!=null&&s.push({editable:!1,key:"redirect",value:n.redirect}),e.alias.length&&s.push({editable:!1,key:"aliases",value:e.alias.map(o=>o.record.path)}),Object.keys(e.record.meta).length&&s.push({editable:!1,key:"meta",value:e.record.meta}),s.push({key:"score",editable:!1,value:{_custom:{type:null,readOnly:!0,display:e.score.map(o=>o.join(", ")).join(" | "),tooltip:"Score used to sort routes",value:e.score}}}),s}const Af=15485081,wf=2450411,Bf=8702998,C8=2282478,kf=16486972,F8=6710886;function Cf(e){const n=[],{record:s}=e;s.name!=null&&n.push({label:String(s.name),textColor:0,backgroundColor:C8}),s.aliasOf&&n.push({label:"alias",textColor:0,backgroundColor:kf}),e.__vd_match&&n.push({label:"matches",textColor:0,backgroundColor:Af}),e.__vd_exactActive&&n.push({label:"exact",textColor:0,backgroundColor:Bf}),e.__vd_active&&n.push({label:"active",textColor:0,backgroundColor:wf}),s.redirect&&n.push({label:typeof s.redirect=="string"?`redirect: ${s.redirect}`:"redirects",textColor:16777215,backgroundColor:F8});let o=s.__vd_id;return o==null&&(o=String(E8++),s.__vd_id=o),{id:o,label:s.path,tags:n,children:e.children.map(Cf)}}let E8=0;const D8=/^\/(.*)\/([a-z]*)$/;function Ff(e,n){const s=n.matched.length&&zn(n.matched[n.matched.length-1],e.record);e.__vd_exactActive=e.__vd_active=s,s||(e.__vd_active=n.matched.some(o=>zn(o,e.record))),e.children.forEach(o=>Ff(o,n))}function Ef(e){e.__vd_match=!1,e.children.forEach(Ef)}function Sa(e,n){const s=String(e.re).match(D8);if(e.__vd_match=!1,!s||s.length<3)return!1;if(new RegExp(s[1].replace(/\$$/,""),s[2]).test(n))return e.children.forEach(a=>Sa(a,n)),e.record.path!=="/"||n==="/"?(e.__vd_match=e.re.test(n),!0):!1;const l=e.record.path.toLowerCase(),r=Mo(l);return!n.startsWith("/")&&(r.includes(n)||l.includes(n))||r.startsWith(n)||l.startsWith(n)||e.record.name&&String(e.record.name).includes(n)?!0:e.children.some(a=>Sa(a,n))}function S8(e,n){const s={};for(const o in e)n.includes(o)||(s[o]=e[o]);return s}function T8(e){const n=H_(e.routes,e),s=e.parseQuery||u8,o=e.stringifyQuery||bu,l=e.history;if(!l)throw new Error('Provide the "history" option when calling "createRouter()": https://next.router.vuejs.org/api/#history.');const r=so(),a=so(),i=so(),c=un(Dn);let u=Dn;_n&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const p=Ir.bind(null,S=>""+S),f=Ir.bind(null,c8),h=Ir.bind(null,Mo);function y(S,Z){let X,te;return ff(S)?(X=n.getRecordMatcher(S),te=Z):te=S,n.addRoute(te,X)}function m(S){const Z=n.getRecordMatcher(S);Z?n.removeRoute(Z):Ee(`Cannot remove non-existent route "${String(S)}"`)}function b(){return n.getRoutes().map(S=>S.record)}function w(S){return!!n.getRecordMatcher(S)}function A(S,Z){if(Z=Ue({},Z||c.value),typeof S=="string"){const _=Mr(s,S,Z.path),E=n.resolve({path:_.path},Z),M=l.createHref(_.fullPath);return M.startsWith("//")?Ee(`Location "${S}" resolved to "${M}". A resolved location cannot start with multiple slashes.`):E.matched.length||Ee(`No match found for location with path "${S}"`),Ue(_,E,{params:h(E.params),hash:Mo(_.hash),redirectedFrom:void 0,href:M})}let X;if("path"in S)"params"in S&&!("name"in S)&&Object.keys(S.params).length&&Ee(`Path "${S.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`),X=Ue({},S,{path:Mr(s,S.path,Z.path).path});else{const _=Ue({},S.params);for(const E in _)_[E]==null&&delete _[E];X=Ue({},S,{params:f(_)}),Z.params=f(Z.params)}const te=n.resolve(X,Z),Ae=S.hash||"";Ae&&!Ae.startsWith("#")&&Ee(`A \`hash\` should always start with the character "#". Replace "${Ae}" with "#${Ae}".`),te.params=p(h(te.params));const Ie=g_(o,Ue({},S,{hash:r8(Ae),path:te.path})),g=l.createHref(Ie);return g.startsWith("//")?Ee(`Location "${S}" resolved to "${g}". A resolved location cannot start with multiple slashes.`):te.matched.length||Ee(`No match found for location with path "${"path"in S?S.path:S}"`),Ue({fullPath:Ie,hash:Ae,query:o===bu?p8(S.query):S.query||{}},te,{redirectedFrom:void 0,href:g})}function B(S){return typeof S=="string"?Mr(s,S,c.value.path):Ue({},S)}function x(S,Z){if(u!==S)return Hs(8,{from:Z,to:S})}function C(S){return R(S)}function F(S){return C(Ue(B(S),{replace:!0}))}function D(S){const Z=S.matched[S.matched.length-1];if(Z&&Z.redirect){const{redirect:X}=Z;let te=typeof X=="function"?X(S):X;if(typeof te=="string"&&(te=te.includes("?")||te.includes("#")?te=B(te):{path:te},te.params={}),!("path"in te)&&!("name"in te))throw Ee(`Invalid redirect found:
${JSON.stringify(te,null,2)}
 when navigating to "${S.fullPath}". A redirect must contain a name or path. This will break in production.`),new Error("Invalid redirect");return Ue({query:S.query,hash:S.hash,params:"path"in te?{}:S.params},te)}}function R(S,Z){const X=u=A(S),te=c.value,Ae=S.state,Ie=S.force,g=S.replace===!0,_=D(X);if(_)return R(Ue(B(_),{state:typeof _=="object"?Ue({},Ae,_.state):Ae,force:Ie,replace:g}),Z||X);const E=X;E.redirectedFrom=Z;let M;return!Ie&&uu(o,te,X)&&(M=Hs(16,{to:E,from:te}),Ot(te,te,!0,!1)),(M?Promise.resolve(M):ne(E,te)).catch(P=>hn(P)?hn(P,2)?P:Oe(P):ie(P,E,te)).then(P=>{if(P){if(hn(P,2))return uu(o,A(P.to),E)&&Z&&(Z._count=Z._count?Z._count+1:1)>30?(Ee(`Detected a possibly infinite redirection in a navigation guard when going from "${te.fullPath}" to "${E.fullPath}". Aborting to avoid a Stack Overflow.
 Are you always returning a new location within a navigation guard? That would lead to this error. Only return when redirecting or aborting, that should fix this. This might break in production if not fixed.`),Promise.reject(new Error("Infinite redirect in navigation guard"))):R(Ue({replace:g},B(P.to),{state:typeof P.to=="object"?Ue({},Ae,P.to.state):Ae,force:Ie}),Z||E)}else P=Q(E,te,!0,g,Ae);return ue(E,te,P),P})}function U(S,Z){const X=x(S,Z);return X?Promise.reject(X):Promise.resolve()}function j(S){const Z=Xt.values().next().value;return Z&&typeof Z.runWithContext=="function"?Z.runWithContext(S):S()}function ne(S,Z){let X;const[te,Ae,Ie]=$8(S,Z);X=Lr(te.reverse(),"beforeRouteLeave",S,Z);for(const _ of te)_.leaveGuards.forEach(E=>{X.push(Un(E,S,Z))});const g=U.bind(null,S,Z);return X.push(g),Pt(X).then(()=>{X=[];for(const _ of r.list())X.push(Un(_,S,Z));return X.push(g),Pt(X)}).then(()=>{X=Lr(Ae,"beforeRouteUpdate",S,Z);for(const _ of Ae)_.updateGuards.forEach(E=>{X.push(Un(E,S,Z))});return X.push(g),Pt(X)}).then(()=>{X=[];for(const _ of S.matched)if(_.beforeEnter&&!Z.matched.includes(_))if(St(_.beforeEnter))for(const E of _.beforeEnter)X.push(Un(E,S,Z));else X.push(Un(_.beforeEnter,S,Z));return X.push(g),Pt(X)}).then(()=>(S.matched.forEach(_=>_.enterCallbacks={}),X=Lr(Ie,"beforeRouteEnter",S,Z),X.push(g),Pt(X))).then(()=>{X=[];for(const _ of a.list())X.push(Un(_,S,Z));return X.push(g),Pt(X)}).catch(_=>hn(_,8)?_:Promise.reject(_))}function ue(S,Z,X){for(const te of i.list())j(()=>te(S,Z,X))}function Q(S,Z,X,te,Ae){const Ie=x(S,Z);if(Ie)return Ie;const g=Z===Dn,_=_n?history.state:{};X&&(te||g?l.replace(S.fullPath,Ue({scroll:g&&_&&_.scroll},Ae)):l.push(S.fullPath,Ae)),c.value=S,Ot(S,Z,X,g),Oe()}let ye;function ve(){ye||(ye=l.listen((S,Z,X)=>{if(!Qn.listening)return;const te=A(S),Ae=D(te);if(Ae){R(Ue(Ae,{replace:!0}),te).catch(xo);return}u=te;const Ie=c.value;_n&&k_(du(Ie.fullPath,X.delta),gr()),ne(te,Ie).catch(g=>hn(g,12)?g:hn(g,2)?(R(g.to,te).then(_=>{hn(_,20)&&!X.delta&&X.type===Io.pop&&l.go(-1,!1)}).catch(xo),Promise.reject()):(X.delta&&l.go(-X.delta,!1),ie(g,te,Ie))).then(g=>{g=g||Q(te,Ie,!1),g&&(X.delta&&!hn(g,8)?l.go(-X.delta,!1):X.type===Io.pop&&hn(g,20)&&l.go(-1,!1)),ue(te,Ie,g)}).catch(xo)}))}let be=so(),Pe=so(),ee;function ie(S,Z,X){Oe(S);const te=Pe.list();return te.length?te.forEach(Ae=>Ae(S,Z,X)):(Ee("uncaught error during route navigation:"),console.error(S)),Promise.reject(S)}function we(){return ee&&c.value!==Dn?Promise.resolve():new Promise((S,Z)=>{be.add([S,Z])})}function Oe(S){return ee||(ee=!S,ve(),be.list().forEach(([Z,X])=>S?X(S):Z()),be.reset()),S}function Ot(S,Z,X,te){const{scrollBehavior:Ae}=e;if(!_n||!Ae)return Promise.resolve();const Ie=!X&&C_(du(S.fullPath,0))||(te||!X)&&history.state&&history.state.scroll||null;return it().then(()=>Ae(S,Z,Ie)).then(g=>g&&B_(g)).catch(g=>ie(g,S,Z))}const rt=S=>l.go(S);let _t;const Xt=new Set,Qn={currentRoute:c,listening:!0,addRoute:y,removeRoute:m,hasRoute:w,getRoutes:b,resolve:A,options:e,push:C,replace:F,go:rt,back:()=>rt(-1),forward:()=>rt(1),beforeEach:r.add,beforeResolve:a.add,afterEach:i.add,onError:Pe.add,isReady:we,install(S){const Z=this;S.component("RouterLink",m8),S.component("RouterView",b8),S.config.globalProperties.$router=Z,Object.defineProperty(S.config.globalProperties,"$route",{enumerable:!0,get:()=>T(c)}),_n&&!_t&&c.value===Dn&&(_t=!0,C(l.location).catch(Ae=>{Ee("Unexpected error when starting the router:",Ae)}));const X={};for(const Ae in Dn)X[Ae]=$(()=>c.value[Ae]);S.provide(Ti,Z),S.provide(xf,He(X)),S.provide(Da,c);const te=S.unmount;Xt.add(S),S.unmount=function(){Xt.delete(S),Xt.size<1&&(u=Dn,ye&&ye(),ye=null,c.value=Dn,_t=!1,ee=!1),te()},_n&&w8(S,Z,n)}};function Pt(S){return S.reduce((Z,X)=>Z.then(()=>j(X)),Promise.resolve())}return Qn}function $8(e,n){const s=[],o=[],l=[],r=Math.max(n.matched.length,e.matched.length);for(let a=0;a<r;a++){const i=n.matched[a];i&&(e.matched.find(u=>zn(u,i))?o.push(i):s.push(i));const c=e.matched[a];c&&(n.matched.find(u=>zn(u,c))||l.push(c))}return[s,o,l]}const Rr=Y(!1),wo=Y(!1),Is=Y(!1),U8=Y(!0),Ta=wv({xs:460,...Av}),xs=l_(),Df=Zv(),O8=$(()=>xs.height.value-xs.width.value/Ln>180),Sf=Yv(Zt?document.body:null),qn=_v(),P8=$(()=>{var e,n;return["INPUT","TEXTAREA"].includes(((e=qn.value)==null?void 0:e.tagName)||"")||((n=qn.value)==null?void 0:n.classList.contains("CodeMirror-code"))}),I8=$(()=>{var e;return["BUTTON","A"].includes(((e=qn.value)==null?void 0:e.tagName)||"")});Jt("slidev-camera","default");Jt("slidev-mic","default");const kl=Jt("slidev-scale",0),yt=Jt("slidev-show-overview",!1),Nr=Jt("slidev-presenter-cursor",!0),Cu=Jt("slidev-show-editor",!1);Jt("slidev-editor-width",Zt?window.innerWidth*.4:100);const Tf=lf(yt);function Fu(e,n,s,o=l=>l){return e*o(.5-n*(.5-s))}function M8(e){return[-e[0],-e[1]]}function Kt(e,n){return[e[0]+n[0],e[1]+n[1]]}function Lt(e,n){return[e[0]-n[0],e[1]-n[1]]}function zt(e,n){return[e[0]*n,e[1]*n]}function L8(e,n){return[e[0]/n,e[1]/n]}function lo(e){return[e[1],-e[0]]}function Eu(e,n){return e[0]*n[0]+e[1]*n[1]}function R8(e,n){return e[0]===n[0]&&e[1]===n[1]}function N8(e){return Math.hypot(e[0],e[1])}function q8(e){return e[0]*e[0]+e[1]*e[1]}function Du(e,n){return q8(Lt(e,n))}function $f(e){return L8(e,N8(e))}function W8(e,n){return Math.hypot(e[1]-n[1],e[0]-n[0])}function ro(e,n,s){let o=Math.sin(s),l=Math.cos(s),r=e[0]-n[0],a=e[1]-n[1],i=r*l-a*o,c=r*o+a*l;return[i+n[0],c+n[1]]}function $a(e,n,s){return Kt(e,zt(Lt(n,e),s))}function Su(e,n,s){return Kt(e,zt(n,s))}var{min:Us,PI:j8}=Math,Tu=.275,ao=j8+1e-4;function H8(e,n={}){let{size:s=16,smoothing:o=.5,thinning:l=.5,simulatePressure:r=!0,easing:a=ee=>ee,start:i={},end:c={},last:u=!1}=n,{cap:p=!0,easing:f=ee=>ee*(2-ee)}=i,{cap:h=!0,easing:y=ee=>--ee*ee*ee+1}=c;if(e.length===0||s<=0)return[];let m=e[e.length-1].runningLength,b=i.taper===!1?0:i.taper===!0?Math.max(s,m):i.taper,w=c.taper===!1?0:c.taper===!0?Math.max(s,m):c.taper,A=Math.pow(s*o,2),B=[],x=[],C=e.slice(0,10).reduce((ee,ie)=>{let we=ie.pressure;if(r){let Oe=Us(1,ie.distance/s),Ot=Us(1,1-Oe);we=Us(1,ee+(Ot-ee)*(Oe*Tu))}return(ee+we)/2},e[0].pressure),F=Fu(s,l,e[e.length-1].pressure,a),D,R=e[0].vector,U=e[0].point,j=U,ne=U,ue=j,Q=!1;for(let ee=0;ee<e.length;ee++){let{pressure:ie}=e[ee],{point:we,vector:Oe,distance:Ot,runningLength:rt}=e[ee];if(ee<e.length-1&&m-rt<3)continue;if(l){if(r){let te=Us(1,Ot/s),Ae=Us(1,1-te);ie=Us(1,C+(Ae-C)*(te*Tu))}F=Fu(s,l,ie,a)}else F=s/2;D===void 0&&(D=F);let _t=rt<b?f(rt/b):1,Xt=m-rt<w?y((m-rt)/w):1;F=Math.max(.01,F*Math.min(_t,Xt));let Qn=(ee<e.length-1?e[ee+1]:e[ee]).vector,Pt=ee<e.length-1?Eu(Oe,Qn):1,S=Eu(Oe,R)<0&&!Q,Z=Pt!==null&&Pt<0;if(S||Z){let te=zt(lo(R),F);for(let Ae=1/13,Ie=0;Ie<=1;Ie+=Ae)ne=ro(Lt(we,te),we,ao*Ie),B.push(ne),ue=ro(Kt(we,te),we,ao*-Ie),x.push(ue);U=ne,j=ue,Z&&(Q=!0);continue}if(Q=!1,ee===e.length-1){let te=zt(lo(Oe),F);B.push(Lt(we,te)),x.push(Kt(we,te));continue}let X=zt(lo($a(Qn,Oe,Pt)),F);ne=Lt(we,X),(ee<=1||Du(U,ne)>A)&&(B.push(ne),U=ne),ue=Kt(we,X),(ee<=1||Du(j,ue)>A)&&(x.push(ue),j=ue),C=ie,R=Oe}let ye=e[0].point.slice(0,2),ve=e.length>1?e[e.length-1].point.slice(0,2):Kt(e[0].point,[1,1]),be=[],Pe=[];if(e.length===1){if(!(b||w)||u){let ee=Su(ye,$f(lo(Lt(ye,ve))),-(D||F)),ie=[];for(let we=1/13,Oe=we;Oe<=1;Oe+=we)ie.push(ro(ee,ye,ao*2*Oe));return ie}}else{if(!(b||w&&e.length===1))if(p)for(let ie=1/13,we=ie;we<=1;we+=ie){let Oe=ro(x[0],ye,ao*we);be.push(Oe)}else{let ie=Lt(B[0],x[0]),we=zt(ie,.5),Oe=zt(ie,.51);be.push(Lt(ye,we),Lt(ye,Oe),Kt(ye,Oe),Kt(ye,we))}let ee=lo(M8(e[e.length-1].vector));if(w||b&&e.length===1)Pe.push(ve);else if(h){let ie=Su(ve,ee,F);for(let we=1/29,Oe=we;Oe<1;Oe+=we)Pe.push(ro(ie,ve,ao*3*Oe))}else Pe.push(Kt(ve,zt(ee,F)),Kt(ve,zt(ee,F*.99)),Lt(ve,zt(ee,F*.99)),Lt(ve,zt(ee,F)))}return B.concat(Pe,x.reverse(),be)}function V8(e,n={}){var s;let{streamline:o=.5,size:l=16,last:r=!1}=n;if(e.length===0)return[];let a=.15+(1-o)*.85,i=Array.isArray(e[0])?e:e.map(({x:y,y:m,pressure:b=.5})=>[y,m,b]);if(i.length===2){let y=i[1];i=i.slice(0,-1);for(let m=1;m<5;m++)i.push($a(i[0],y,m/4))}i.length===1&&(i=[...i,[...Kt(i[0],[1,1]),...i[0].slice(2)]]);let c=[{point:[i[0][0],i[0][1]],pressure:i[0][2]>=0?i[0][2]:.25,vector:[1,1],distance:0,runningLength:0}],u=!1,p=0,f=c[0],h=i.length-1;for(let y=1;y<i.length;y++){let m=r&&y===h?i[y].slice(0,2):$a(f.point,i[y],a);if(R8(f.point,m))continue;let b=W8(m,f.point);if(p+=b,y<h&&!u){if(p<l)continue;u=!0}f={point:m,pressure:i[y][2]>=0?i[y][2]:.5,vector:$f(Lt(f.point,m)),distance:b,runningLength:p},c.push(f)}return c[0].vector=((s=c[1])==null?void 0:s.vector)||[0,0],c}function z8(e,n={}){return H8(V8(e,n),n)}var K8=()=>({events:{},emit(e,...n){let s=this.events[e]||[];for(let o=0,l=s.length;o<l;o++)s[o](...n)},on(e,n){var s;return(s=this.events[e])!=null&&s.push(n)||(this.events[e]=[n]),()=>{var o;this.events[e]=(o=this.events[e])==null?void 0:o.filter(l=>n!==l)}}});function Gl(e,n){return e-n}function G8(e){return e<0?-1:1}function Yl(e){return[Math.abs(e),G8(e)]}function Uf(){const e=()=>((1+Math.random())*65536|0).toString(16).substring(1);return`${e()+e()}-${e()}-${e()}-${e()}-${e()}${e()}${e()}`}var Y8=2,bn=Y8,zs=class{constructor(e){this.drauu=e,this.event=void 0,this.point=void 0,this.start=void 0,this.el=null}onSelected(e){}onUnselected(){}onStart(e){}onMove(e){return!1}onEnd(e){}get brush(){return this.drauu.brush}get shiftPressed(){return this.drauu.shiftPressed}get altPressed(){return this.drauu.altPressed}get svgElement(){return this.drauu.el}getMousePosition(e){var n;const s=this.drauu.el,o=this.drauu.options.coordinateScale??1;if(this.drauu.options.coordinateTransform===!1){const l=this.drauu.el.getBoundingClientRect();return{x:(e.pageX-l.left)*o,y:(e.pageY-l.top)*o,pressure:e.pressure}}else{const l=this.drauu.svgPoint;l.x=e.clientX,l.y=e.clientY;const r=l.matrixTransform((n=s.getScreenCTM())==null?void 0:n.inverse());return{x:r.x*o,y:r.y*o,pressure:e.pressure}}}createElement(e,n){const s=document.createElementNS("http://www.w3.org/2000/svg",e),o=n?{...this.brush,...n}:this.brush;return s.setAttribute("fill",o.fill??"transparent"),s.setAttribute("stroke",o.color),s.setAttribute("stroke-width",o.size.toString()),s.setAttribute("stroke-linecap","round"),o.dasharray&&s.setAttribute("stroke-dasharray",o.dasharray),s}attr(e,n){this.el.setAttribute(e,typeof n=="string"?n:n.toFixed(bn))}_setEvent(e){this.event=e,this.point=this.getMousePosition(e)}_eventDown(e){return this._setEvent(e),this.start=this.point,this.onStart(this.point)}_eventMove(e){return this._setEvent(e),this.onMove(this.point)}_eventUp(e){return this._setEvent(e),this.onEnd(this.point)}},Q8=class extends zs{constructor(){super(...arguments),this.points=[]}onStart(e){return this.el=document.createElementNS("http://www.w3.org/2000/svg","path"),this.points=[e],this.attr("fill",this.brush.color),this.attr("d",this.getSvgData(this.points)),this.el}onMove(e){return this.el||this.onStart(e),this.points[this.points.length-1]!==e&&this.points.push(e),this.attr("d",this.getSvgData(this.points)),!0}onEnd(){const e=this.el;return this.el=null,!!e}getSvgData(e){const n=z8(e,{size:this.brush.size*2,thinning:.9,simulatePressure:!1,start:{taper:5},end:{taper:5},...this.brush.stylusOptions});if(!n.length)return"";const s=n.reduce((o,[l,r],a,i)=>{const[c,u]=i[(a+1)%i.length];return o.push(l,r,(l+c)/2,(r+u)/2),o},["M",...n[0],"Q"]);return s.push("Z"),s.map(o=>typeof o=="number"?o.toFixed(2):o).join(" ")}},Z8=class extends zs{onStart(e){return this.el=this.createElement("ellipse"),this.attr("cx",e.x),this.attr("cy",e.y),this.el}onMove(e){if(!this.el||!this.start)return!1;let[n,s]=Yl(e.x-this.start.x),[o,l]=Yl(e.y-this.start.y);if(this.shiftPressed){const r=Math.min(n,o);n=r,o=r}if(this.altPressed)this.attr("cx",this.start.x),this.attr("cy",this.start.y),this.attr("rx",n),this.attr("ry",o);else{const[r,a]=[this.start.x,this.start.x+n*s].sort(Gl),[i,c]=[this.start.y,this.start.y+o*l].sort(Gl);this.attr("cx",(r+a)/2),this.attr("cy",(i+c)/2),this.attr("rx",(a-r)/2),this.attr("ry",(c-i)/2)}return!0}onEnd(){const e=this.el;return this.el=null,!(!e||!e.getTotalLength())}};function Of(e,n){const s=document.createElementNS("http://www.w3.org/2000/svg","defs"),o=document.createElementNS("http://www.w3.org/2000/svg","marker"),l=document.createElementNS("http://www.w3.org/2000/svg","path");return l.setAttribute("fill",n),o.setAttribute("id",e),o.setAttribute("viewBox","0 -5 10 10"),o.setAttribute("refX","5"),o.setAttribute("refY","0"),o.setAttribute("markerWidth","4"),o.setAttribute("markerHeight","4"),o.setAttribute("orient","auto"),l.setAttribute("d","M0,-5L10,0L0,5"),o.appendChild(l),s.appendChild(o),s}var J8=class extends zs{onStart(e){if(this.el=this.createElement("line",{fill:"transparent"}),this.attr("x1",e.x),this.attr("y1",e.y),this.attr("x2",e.x),this.attr("y2",e.y),this.brush.arrowEnd){const n=Uf(),s=document.createElementNS("http://www.w3.org/2000/svg","g");return s.append(Of(n,this.brush.color)),s.append(this.el),this.attr("marker-end",`url(#${n})`),s}return this.el}onMove(e){if(!this.el)return!1;let{x:n,y:s}=e;if(this.shiftPressed){const o=e.x-this.start.x,l=e.y-this.start.y;if(l!==0){let r=o/l;r=Math.round(r),Math.abs(r)<=1?(n=this.start.x+l*r,s=this.start.y+l):(n=this.start.x+o,s=this.start.y)}}return this.altPressed?(this.attr("x1",this.start.x*2-n),this.attr("y1",this.start.y*2-s),this.attr("x2",n),this.attr("y2",s)):(this.attr("x1",this.start.x),this.attr("y1",this.start.y),this.attr("x2",n),this.attr("y2",s)),!0}onEnd(){const e=this.el;return this.el=null,!(!e||e.getTotalLength()<5)}},X8=class extends zs{onStart(e){return this.el=this.createElement("rect"),this.brush.cornerRadius&&(this.attr("rx",this.brush.cornerRadius),this.attr("ry",this.brush.cornerRadius)),this.attr("x",e.x),this.attr("y",e.y),this.el}onMove(e){if(!this.el||!this.start)return!1;let[n,s]=Yl(e.x-this.start.x),[o,l]=Yl(e.y-this.start.y);if(this.shiftPressed){const r=Math.min(n,o);n=r,o=r}if(this.altPressed)this.attr("x",this.start.x-n),this.attr("y",this.start.y-o),this.attr("width",n*2),this.attr("height",o*2);else{const[r,a]=[this.start.x,this.start.x+n*s].sort(Gl),[i,c]=[this.start.y,this.start.y+o*l].sort(Gl);this.attr("x",r),this.attr("y",i),this.attr("width",a-r),this.attr("height",c-i)}return!0}onEnd(){const e=this.el;return this.el=null,!(!e||!e.getTotalLength())}};function eb(e,n){const s=e.x-n.x,o=e.y-n.y;return s*s+o*o}function tb(e,n,s){let o=n.x,l=n.y,r=s.x-o,a=s.y-l;if(r!==0||a!==0){const i=((e.x-o)*r+(e.y-l)*a)/(r*r+a*a);i>1?(o=s.x,l=s.y):i>0&&(o+=r*i,l+=a*i)}return r=e.x-o,a=e.y-l,r*r+a*a}function nb(e,n){let s=e[0];const o=[s];let l;for(let r=1,a=e.length;r<a;r++)l=e[r],eb(l,s)>n&&(o.push(l),s=l);return s!==l&&l&&o.push(l),o}function Ua(e,n,s,o,l){let r=o,a=0;for(let i=n+1;i<s;i++){const c=tb(e[i],e[n],e[s]);c>r&&(a=i,r=c)}r>o&&(a-n>1&&Ua(e,n,a,o,l),l.push(e[a]),s-a>1&&Ua(e,a,s,o,l))}function sb(e,n){const s=e.length-1,o=[e[0]];return Ua(e,0,s,n,o),o.push(e[s]),o}function $u(e,n,s=!1){if(e.length<=2)return e;const o=n!==void 0?n*n:1;return e=s?e:nb(e,o),e=sb(e,o),e}var ob=class extends zs{constructor(){super(...arguments),this.points=[],this.count=0}onStart(e){if(this.el=this.createElement("path",{fill:"transparent"}),this.points=[e],this.brush.arrowEnd){this.arrowId=Uf();const n=Of(this.arrowId,this.brush.color);this.el.appendChild(n)}return this.el}onMove(e){return this.el||this.onStart(e),this.points[this.points.length-1]!==e&&(this.points.push(e),this.count+=1),this.count>5&&(this.points=$u(this.points,1,!0),this.count=0),this.attr("d",Ou(this.points)),!0}onEnd(){const e=this.el;return this.el=null,!(!e||(e.setAttribute("d",Ou($u(this.points,1,!0))),!e.getTotalLength()))}};function lb(e,n){const s=n.x-e.x,o=n.y-e.y;return{length:Math.sqrt(s**2+o**2),angle:Math.atan2(o,s)}}function Uu(e,n,s,o){const l=n||e,r=s||e,a=.2,i=lb(l,r),c=i.angle+(o?Math.PI:0),u=i.length*a,p=e.x+Math.cos(c)*u,f=e.y+Math.sin(c)*u;return{x:p,y:f}}function rb(e,n,s){const o=Uu(s[n-1],s[n-2],e),l=Uu(e,s[n-1],s[n+1],!0);return`C ${o.x.toFixed(bn)},${o.y.toFixed(bn)} ${l.x.toFixed(bn)},${l.y.toFixed(bn)} ${e.x.toFixed(bn)},${e.y.toFixed(bn)}`}function Ou(e){return e.reduce((n,s,o,l)=>o===0?`M ${s.x.toFixed(bn)},${s.y.toFixed(bn)}`:`${n} ${rb(s,o,l)}`,"")}var ab=class extends zs{constructor(){super(...arguments),this.pathSubFactor=20,this.pathFragments=[]}onSelected(e){const n=(s,o)=>{if(s&&s.length)for(let l=0;l<s.length;l++){const r=s[l];if(r.getTotalLength){const a=r.getTotalLength();for(let i=0;i<this.pathSubFactor;i++){const c=r.getPointAtLength(a*i/this.pathSubFactor),u=r.getPointAtLength(a*(i+1)/this.pathSubFactor);this.pathFragments.push({x1:c.x,x2:u.x,y1:c.y,y2:u.y,segment:i,element:o||r})}}else r.children&&n(r.children,r)}};e&&n(e.children)}onUnselected(){this.pathFragments=[]}onStart(e){this.svgPointPrevious=this.svgElement.createSVGPoint(),this.svgPointPrevious.x=e.x,this.svgPointPrevious.y=e.y}onMove(e){this.svgPointCurrent=this.svgElement.createSVGPoint(),this.svgPointCurrent.x=e.x,this.svgPointCurrent.y=e.y;const n=this.checkAndEraseElement();return this.svgPointPrevious=this.svgPointCurrent,n}onEnd(){return this.svgPointPrevious=void 0,this.svgPointCurrent=void 0,!0}checkAndEraseElement(){const e=[];if(this.pathFragments.length)for(let n=0;n<this.pathFragments.length;n++){const s=this.pathFragments[n],o={x1:this.svgPointPrevious.x,x2:this.svgPointCurrent.x,y1:this.svgPointPrevious.y,y2:this.svgPointCurrent.y};this.lineLineIntersect(s,o)&&(s.element.remove(),e.push(n))}return e.length&&(this.pathFragments=this.pathFragments.filter((n,s)=>!e.includes(s))),e.length>0}lineLineIntersect(e,n){const s=e.x1,o=e.x2,l=n.x1,r=n.x2,a=e.y1,i=e.y2,c=n.y1,u=n.y2,p=(s-o)*(c-u)-(a-i)*(l-r),f=(s*i-a*o)*(l-r)-(s-o)*(l*u-c*r),h=(s*i-a*o)*(c-u)-(a-i)*(l*u-c*r),y=(m,b,w)=>m>=b&&m<=w?!0:m>=w&&m<=b;if(p===0)return!1;{const m={x:f/p,y:h/p};return y(m.x,s,o)&&y(m.y,a,i)&&y(m.x,l,r)&&y(m.y,c,u)}}};function ib(e){return{draw:new ob(e),stylus:new Q8(e),line:new J8(e),rectangle:new X8(e),ellipse:new Z8(e),eraseLine:new ab(e)}}var cb=class{constructor(e={}){this.options=e,this.el=null,this.svgPoint=null,this.eventEl=null,this.shiftPressed=!1,this.altPressed=!1,this.drawing=!1,this._emitter=K8(),this._models=ib(this),this._undoStack=[],this._disposables=[],this.options.brush||(this.options.brush={color:"black",size:3,mode:"stylus"}),e.el&&this.mount(e.el,e.eventTarget)}get model(){return this._models[this.mode]}get mounted(){return!!this.el}get mode(){return this.options.brush.mode||"stylus"}set mode(e){this._models[this.mode].onUnselected(),this.options.brush.mode=e,this.model.onSelected(this.el)}get brush(){return this.options.brush}set brush(e){this.options.brush=e}resolveSelector(e){return typeof e=="string"?document.querySelector(e):e||null}mount(e,n){if(this.el)throw new Error("[drauu] already mounted, unmount previous target first");if(this.el=this.resolveSelector(e),!this.el)throw new Error("[drauu] target element not found");if(this.el.tagName.toLocaleLowerCase()!=="svg")throw new Error("[drauu] can only mount to a SVG element");if(!this.el.createSVGPoint)throw new Error("[drauu] SVG element must be create by document.createElementNS('http://www.w3.org/2000/svg', 'svg')");this.svgPoint=this.el.createSVGPoint();const s=this.resolveSelector(n)||this.el,o=this.eventStart.bind(this),l=this.eventMove.bind(this),r=this.eventEnd.bind(this),a=this.eventKeyboard.bind(this);s.addEventListener("pointerdown",o,{passive:!1}),window.addEventListener("pointermove",l,{passive:!1}),window.addEventListener("pointerup",r,{passive:!1}),window.addEventListener("pointercancel",r,{passive:!1}),window.addEventListener("keydown",a,!1),window.addEventListener("keyup",a,!1),this._disposables.push(()=>{s.removeEventListener("pointerdown",o),window.removeEventListener("pointermove",l),window.removeEventListener("pointerup",r),window.removeEventListener("pointercancel",r),window.removeEventListener("keydown",a,!1),window.removeEventListener("keyup",a,!1)}),this._emitter.emit("mounted")}unmount(){this._disposables.forEach(e=>e()),this._disposables.length=0,this.el=null,this._emitter.emit("unmounted")}on(e,n){return this._emitter.on(e,n)}undo(){const e=this.el;return e.lastElementChild?(this._undoStack.push(e.lastElementChild.cloneNode(!0)),e.lastElementChild.remove(),this._emitter.emit("changed"),!0):!1}redo(){return this._undoStack.length?(this.el.appendChild(this._undoStack.pop()),this._emitter.emit("changed"),!0):!1}canRedo(){return!!this._undoStack.length}canUndo(){var e;return!!((e=this.el)!=null&&e.lastElementChild)}eventMove(e){!this.acceptsInput(e)||!this.drawing||this.model._eventMove(e)&&(e.stopPropagation(),e.preventDefault(),this._emitter.emit("changed"))}eventStart(e){this.acceptsInput(e)&&(e.stopPropagation(),e.preventDefault(),this._currentNode&&this.cancel(),this.drawing=!0,this._emitter.emit("start"),this._currentNode=this.model._eventDown(e),this._currentNode&&this.mode!=="eraseLine"&&this.el.appendChild(this._currentNode),this._emitter.emit("changed"))}eventEnd(e){if(!this.acceptsInput(e)||!this.drawing)return;const n=this.model._eventUp(e);n?(n instanceof Element&&n!==this._currentNode&&(this._currentNode=n),this.commit()):this.cancel(),this.drawing=!1,this._emitter.emit("end"),this._emitter.emit("changed")}acceptsInput(e){return!this.options.acceptsInputTypes||this.options.acceptsInputTypes.includes(e.pointerType)}eventKeyboard(e){this.shiftPressed===e.shiftKey&&this.altPressed===e.altKey||(this.shiftPressed=e.shiftKey,this.altPressed=e.altKey,this.model.point&&this.model.onMove(this.model.point)&&this._emitter.emit("changed"))}commit(){this._undoStack.length=0;const e=this._currentNode;this._currentNode=void 0,this._emitter.emit("committed",e)}clear(){this._undoStack.length=0,this.cancel(),this.el.innerHTML="",this._emitter.emit("changed")}cancel(){this._currentNode&&(this.el.removeChild(this._currentNode),this._currentNode=void 0,this._emitter.emit("canceled"))}dump(){return this.el.innerHTML}load(e){this.clear(),this.el.innerHTML=e}};function ub(e){return new cb(e)}const Oa=["#ff595e","#ffca3a","#8ac926","#1982c4","#6a4c93","#ffffff","#000000"],ln=Jt("slidev-drawing-enabled",!1),gT=Jt("slidev-drawing-pinned",!1),pb=Y(!1),db=Y(!1),fb=Y(!1),Lo=Y(!1),ds=Lg(Jt("slidev-drawing-brush",{color:Oa[0],size:4,mode:"stylus"})),Pu=Y("stylus"),Pf=$(()=>Se.drawings.syncAll||xt.value);let Ro=!1;const io=$({get(){return Pu.value},set(e){Pu.value=e,e==="arrow"?(ds.mode="line",ds.arrowEnd=!0):(ds.mode=e,ds.arrowEnd=!1)}}),hb=He({brush:ds,acceptsInputTypes:$(()=>ln.value&&(!Se.drawings.presenterOnly||xt.value)?void 0:["pen"]),coordinateTransform:!1}),vt=rr(ub(hb));function yb(){vt.clear(),Pf.value&&tf(Ve.value,"")}function $i(){var e;db.value=vt.canRedo(),pb.value=vt.canUndo(),fb.value=!!((e=vt.el)!=null&&e.children.length)}function mb(e){Ro=!0;const n=zl[e||Ve.value];n!=null?vt.load(n):vt.clear(),$i(),Ro=!1}vt.on("changed",()=>{if($i(),!Ro){const e=vt.dump(),n=Ve.value;(zl[n]||"")!==e&&Pf.value&&tf(n,vt.dump())}});Og(e=>{Ro=!0,e[Ve.value]!=null&&vt.load(e[Ve.value]||""),Ro=!1,$i()});it(()=>{ge(Ve,()=>{vt.mounted&&mb()},{immediate:!0})});vt.on("start",()=>Lo.value=!0);vt.on("end",()=>Lo.value=!1);window.addEventListener("keydown",e=>{if(!ln.value)return;const n=!e.ctrlKey&&!e.altKey&&!e.shiftKey&&!e.metaKey;let s=!0;e.code==="KeyZ"&&(e.ctrlKey||e.metaKey)?e.shiftKey?vt.redo():vt.undo():e.code==="Escape"?ln.value=!1:e.code==="KeyL"&&n?io.value="line":e.code==="KeyA"&&n?io.value="arrow":e.code==="KeyS"&&n?io.value="stylus":e.code==="KeyR"&&n?io.value="rectangle":e.code==="KeyE"&&n?io.value="ellipse":e.code==="KeyC"&&n?yb():e.code.startsWith("Digit")&&n&&+e.code[5]<=Oa.length?ds.color=Oa[+e.code[5]-1]:s=!1,s&&(e.preventDefault(),e.stopPropagation())},!1);function Ze(...e){return $(()=>e.every(n=>Ye(n)))}function kt(e){return $(()=>!Ye(e))}const Iu=Pv(),qr=Jt("slidev-color-schema","auto"),Pa=$(()=>Se.colorSchema!=="auto"),Ui=$({get(){return Pa.value?Se.colorSchema==="dark":qr.value==="auto"?Iu.value:qr.value==="dark"},set(e){Pa.value||(qr.value=e===Iu.value?"auto":e?"dark":"light")}}),If=lf(Ui);Zt&&ge(Ui,e=>{const n=document.querySelector("html");n.classList.toggle("dark",e),n.classList.toggle("light",!e)},{immediate:!0});const Cl=Y(1),Fl=$(()=>Qe.length),Dt=Y(0),Oi=Y(0);function gb(){Dt.value>Cl.value&&(Dt.value-=1)}function vb(){Dt.value<Fl.value&&(Dt.value+=1)}function _b(){if(Dt.value>Cl.value){let e=Dt.value-Oi.value;e<Cl.value&&(e=Cl.value),Dt.value=e}}function bb(){if(Dt.value<Fl.value){let e=Dt.value+Oi.value;e>Fl.value&&(e=Fl.value),Dt.value=e}}function xb(){const{escape:e,space:n,shift:s,left:o,right:l,up:r,down:a,enter:i,d:c,g:u,o:p}=Df;let f=[{name:"next_space",key:Ze(n,kt(s)),fn:Wn,autoRepeat:!0},{name:"prev_space",key:Ze(n,s),fn:jn,autoRepeat:!0},{name:"next_right",key:Ze(l,kt(s),kt(yt)),fn:Wn,autoRepeat:!0},{name:"prev_left",key:Ze(o,kt(s),kt(yt)),fn:jn,autoRepeat:!0},{name:"next_page_key",key:"pageDown",fn:Wn,autoRepeat:!0},{name:"prev_page_key",key:"pageUp",fn:jn,autoRepeat:!0},{name:"next_down",key:Ze(a,kt(yt)),fn:qo,autoRepeat:!0},{name:"prev_up",key:Ze(r,kt(yt)),fn:()=>Wo(!1),autoRepeat:!0},{name:"next_shift",key:Ze(l,s),fn:qo,autoRepeat:!0},{name:"prev_shift",key:Ze(o,s),fn:()=>Wo(!1),autoRepeat:!0},{name:"toggle_dark",key:Ze(c,kt(ln)),fn:If},{name:"toggle_overview",key:Ze(p,kt(ln)),fn:Tf},{name:"hide_overview",key:Ze(e,kt(ln)),fn:()=>yt.value=!1},{name:"goto",key:Ze(u,kt(ln)),fn:()=>Is.value=!Is.value},{name:"next_overview",key:Ze(l,yt),fn:vb},{name:"prev_overview",key:Ze(o,yt),fn:gb},{name:"up_overview",key:Ze(r,yt),fn:_b},{name:"down_overview",key:Ze(a,yt),fn:bb},{name:"goto_from_overview",key:Ze(i,yt),fn:()=>{Vs(Dt.value),yt.value=!1}}];const h=new Set(f.map(m=>m.name));if(f.filter(m=>m.name&&h.has(m.name)).length===0){const m=["========== WARNING ==========","defineShortcutsSetup did not return any of the base shortcuts.","See https://sli.dev/custom/config-shortcuts.html for migration.",'If it is intentional, return at least one shortcut with one of the base names (e.g. name:"goto").'].join(`

`);alert(m),console.warn(m)}return f}const Mf=Ze(kt(P8),kt(I8),U8);function Ab(e,n,s=!1){typeof e=="string"&&(e=Df[e]);const o=Ze(e,Mf);let l=0,r;const a=()=>{if(clearTimeout(r),!o.value){l=0;return}s&&(r=setTimeout(a,Math.max(1e3-l*250,150)),l++),n()};return ge(o,a,{flush:"sync"})}function wb(e,n){return vv(e,s=>{Mf.value&&(s.repeat||n())})}function Bb(){const e=xb();new Map(e.map(s=>[s.key,s])).forEach(s=>{s.fn&&Ab(s.key,s.fn,s.autoRepeat)}),wb("f",()=>Sf.toggle())}const kb={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Cb=t("path",{fill:"currentColor",d:"M24 9.4L22.6 8L16 14.6L9.4 8L8 9.4l6.6 6.6L8 22.6L9.4 24l6.6-6.6l6.6 6.6l1.4-1.4l-6.6-6.6L24 9.4z"},null,-1),Fb=[Cb];function Eb(e,n){return v(),k("svg",kb,Fb)}const Db={name:"carbon-close",render:Eb};function Pi(e,n=""){var l,r;const s=["slidev-page",n],o=(r=(l=e==null?void 0:e.meta)==null?void 0:l.slide)==null?void 0:r.no;return o!=null&&s.push(`slidev-page-${o}`),s.filter(Boolean).join(" ")}const Sb=ke({__name:"SlideContainer",props:{width:{type:Number},meta:{default:()=>({})},scale:{type:[Number,String]}},setup(e){const n=e;L(H);const s=Y(),o=Kv(s),l=$(()=>n.width?n.width:o.width.value),r=$(()=>n.width?n.width/Ln:o.height.value);n.width&&Cs(()=>{s.value&&(s.value.style.width=`${l.value}px`,s.value.style.height=`${r.value}px`)});const a=$(()=>l.value/r.value),i=$(()=>n.scale&&!An.value?n.scale:a.value<Ln?l.value/Rn:r.value*Ln/Rn),c=$(()=>({height:`${Ei}px`,width:`${Rn}px`,transform:`translate(-50%, -50%) scale(${i.value})`})),u=$(()=>({"select-none":!Se.selectable}));return Ft(Zd,i),(p,f)=>(v(),k("div",{id:"slide-container",ref_key:"root",ref:s,class:We(u.value)},[t("div",{id:"slide-content",style:nt(c.value)},[Wt(p.$slots,"default")],4),Wt(p.$slots,"controls")],2))}});const V=(e,n)=>{const s=e.__vccOpts||e;for(const[o,l]of n)s[o]=l;return s},Lf=V(Sb,[["__file","/home/ben/Workspace/demystifying-unicode/node_modules/@slidev/client/internals/SlideContainer.vue"]]),Ii=ke({name:"SlideWrapper",props:{clicks:{type:[Number,String],default:0},clicksElements:{type:Array,default:()=>[]},clicksOrderMap:{type:Map,default:()=>new Map},clicksDisabled:{type:Boolean,default:!1},context:{type:String,default:"main"},is:{type:Object,default:void 0},route:{type:Object,default:void 0}},setup(e,{emit:n}){const s=on(e,"clicks",n),o=on(e,"clicksElements",n),l=on(e,"clicksDisabled",n),r=on(e,"clicksOrderMap",n);o.value.length=0,Ft(mg,e.route),Ft(gg,e.context),Ft(_o,s),Ft(bo,l),Ft(as,o),Ft(xa,r)},render(){var e,n;return this.$props.is?tt(this.$props.is):(n=(e=this.$slots)==null?void 0:e.default)==null?void 0:n.call(e)}}),Tb=["innerHTML"],$b=ke({__name:"DrawingPreview",props:{page:{type:Number,required:!0}},setup(e){return L(H),(n,s)=>T(zl)[n.page]?(v(),k("svg",{key:0,class:"w-full h-full absolute top-0 pointer-events-none",innerHTML:T(zl)[n.page]},null,8,Tb)):me("v-if",!0)}}),Rf=V($b,[["__file","/home/ben/Workspace/demystifying-unicode/node_modules/@slidev/client/internals/DrawingPreview.vue"]]),Ub=Object.freeze(Object.defineProperty({__proto__:null,default:Rf},Symbol.toStringTag,{value:"Module"})),Ob={class:"slides-overview bg-main !bg-opacity-75 p-16 overflow-y-auto"},Pb=["onClick"],Wr=4*16*2,Mu=2*16,Ib=ke({__name:"SlidesOverview",props:{modelValue:{type:Boolean,required:!0}},emits:[],setup(e,{emit:n}){const s=e;L(H);const o=on(s,"modelValue",n);function l(){o.value=!1}function r(f){Vs(f),l()}function a(f){return f===Dt.value}const i=Ta.smaller("xs"),c=Ta.smaller("sm"),u=$(()=>i.value?xs.width.value-Wr:c.value?(xs.width.value-Wr-Mu)/2:300),p=$(()=>Math.floor((xs.width.value-Wr)/(u.value+Mu)));return Cs(()=>{Dt.value=Ve.value,Oi.value=p.value}),(f,h)=>{const y=Db;return v(),k(De,null,[Ke(t("div",Ob,[t("div",{class:"grid gap-y-4 gap-x-8 w-full",style:nt(`grid-template-columns: repeat(auto-fit,minmax(${u.value}px,1fr))`)},[(v(!0),k(De,null,Fs(T(Qe),(m,b)=>(v(),k("div",{key:m.path,class:"relative"},[t("div",{class:We(["inline-block border rounded border-opacity-50 overflow-hidden bg-main hover:border-$slidev-theme-primary",{"border-$slidev-theme-primary":a(b+1),"border-gray-400":!a(b+1)}]),style:nt(T(Di)),onClick:w=>r(+m.path)},[(v(),W(Lf,{key:m.path,width:u.value,"clicks-disabled":!0,class:"pointer-events-none"},{default:O(()=>[m!=null&&m.component?(v(),W(T(Ii),{key:0,is:m.component,"clicks-disabled":!0,class:We(T(Pi)(m)),route:m,context:"overview"},null,8,["is","class","route"])):me("v-if",!0),I(Rf,{page:+m.path},null,8,["page"])]),_:2},1032,["width"]))],14,Pb),t("div",{class:"absolute top-0 opacity-50",style:nt(`left: ${u.value+5}px`)},Bn(b+1),5)]))),128))],4)],512),[[Nd,T(o)]]),T(o)?(v(),k("button",{key:0,class:"fixed text-2xl top-4 right-4 slidev-icon-btn text-gray-400",onClick:l},[I(y)])):me("v-if",!0)],64)}}});const Mb=V(Ib,[["__file","/home/ben/Workspace/demystifying-unicode/node_modules/@slidev/client/internals/SlidesOverview.vue"]]),Lb="/demystifying-unicode/assets/logo-b72bde5d.png",Rb={key:0,class:"fixed top-0 bottom-0 left-0 right-0 grid z-20"},Nb=ke({__name:"Modal",props:{modelValue:{default:!1},class:{default:""}},emits:["modelValue"],setup(e,{emit:n}){const s=e;L(H);const o=on(s,"modelValue",n);function l(){o.value=!1}return(r,a)=>(v(),W(pd,null,[T(o)?(v(),k("div",Rb,[t("div",{bg:"black opacity-80",class:"absolute top-0 bottom-0 left-0 right-0 -z-1",onClick:a[0]||(a[0]=i=>l())}),t("div",{class:We(["m-auto rounded-md bg-main shadow",s.class]),"dark:border":"~ main"},[Wt(r.$slots,"default")],2)])):me("v-if",!0)],1024))}}),qb=V(Nb,[["__file","/home/ben/Workspace/demystifying-unicode/node_modules/@slidev/client/internals/Modal.vue"]]),Wb={class:"slidev-info-dialog slidev-layout flex flex-col gap-4 text-base"},jb=["innerHTML"],Hb=t("a",{href:"https://github.com/slidevjs/slidev",target:"_blank",class:"!opacity-100 !border-none !text-current"},[t("div",{class:"flex gap-1 children:my-auto"},[t("div",{class:"opacity-50 text-sm mr-2"},"Powered by"),t("img",{class:"w-5 h-5",src:Lb,alt:"Slidev"}),t("div",{style:{color:"#2082A6"}},[t("b",null,"Sli"),d("dev ")])])],-1),Vb=ke({__name:"InfoDialog",props:{modelValue:{default:!1}},emits:["modelValue"],setup(e,{emit:n}){const s=e;L(H);const o=on(s,"modelValue",n),l=$(()=>typeof Se.info=="string");return(r,a)=>(v(),W(qb,{modelValue:T(o),"onUpdate:modelValue":a[0]||(a[0]=i=>Te(o)?o.value=i:null),class:"px-6 py-4"},{default:O(()=>[t("div",Wb,[l.value?(v(),k("div",{key:0,class:"mb-4",innerHTML:T(Se).info},null,8,jb)):me("v-if",!0),Hb])]),_:1},8,["modelValue"]))}});const zb=V(Vb,[["__file","/home/ben/Workspace/demystifying-unicode/node_modules/@slidev/client/internals/InfoDialog.vue"]]);function kn(e){return Array.isArray?Array.isArray(e):Wf(e)==="[object Array]"}const Kb=1/0;function Gb(e){if(typeof e=="string")return e;let n=e+"";return n=="0"&&1/e==-Kb?"-0":n}function Yb(e){return e==null?"":Gb(e)}function rn(e){return typeof e=="string"}function Nf(e){return typeof e=="number"}function Qb(e){return e===!0||e===!1||Zb(e)&&Wf(e)=="[object Boolean]"}function qf(e){return typeof e=="object"}function Zb(e){return qf(e)&&e!==null}function Et(e){return e!=null}function jr(e){return!e.trim().length}function Wf(e){return e==null?e===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}const Jb="Incorrect 'index' type",Xb=e=>`Invalid value for key ${e}`,e5=e=>`Pattern length exceeds max of ${e}.`,t5=e=>`Missing ${e} property in key`,n5=e=>`Property 'weight' in key '${e}' must be a positive integer`,Lu=Object.prototype.hasOwnProperty;class s5{constructor(n){this._keys=[],this._keyMap={};let s=0;n.forEach(o=>{let l=jf(o);s+=l.weight,this._keys.push(l),this._keyMap[l.id]=l,s+=l.weight}),this._keys.forEach(o=>{o.weight/=s})}get(n){return this._keyMap[n]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function jf(e){let n=null,s=null,o=null,l=1,r=null;if(rn(e)||kn(e))o=e,n=Ru(e),s=Ia(e);else{if(!Lu.call(e,"name"))throw new Error(t5("name"));const a=e.name;if(o=a,Lu.call(e,"weight")&&(l=e.weight,l<=0))throw new Error(n5(a));n=Ru(a),s=Ia(a),r=e.getFn}return{path:n,id:s,weight:l,src:o,getFn:r}}function Ru(e){return kn(e)?e:e.split(".")}function Ia(e){return kn(e)?e.join("."):e}function o5(e,n){let s=[],o=!1;const l=(r,a,i)=>{if(Et(r))if(!a[i])s.push(r);else{let c=a[i];const u=r[c];if(!Et(u))return;if(i===a.length-1&&(rn(u)||Nf(u)||Qb(u)))s.push(Yb(u));else if(kn(u)){o=!0;for(let p=0,f=u.length;p<f;p+=1)l(u[p],a,i+1)}else a.length&&l(u,a,i+1)}};return l(e,rn(n)?n.split("."):n,0),o?s:s[0]}const l5={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},r5={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(e,n)=>e.score===n.score?e.idx<n.idx?-1:1:e.score<n.score?-1:1},a5={location:0,threshold:.6,distance:100},i5={useExtendedSearch:!1,getFn:o5,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var de={...r5,...l5,...a5,...i5};const c5=/[^ ]+/g;function u5(e=1,n=3){const s=new Map,o=Math.pow(10,n);return{get(l){const r=l.match(c5).length;if(s.has(r))return s.get(r);const a=1/Math.pow(r,.5*e),i=parseFloat(Math.round(a*o)/o);return s.set(r,i),i},clear(){s.clear()}}}class Mi{constructor({getFn:n=de.getFn,fieldNormWeight:s=de.fieldNormWeight}={}){this.norm=u5(s,3),this.getFn=n,this.isCreated=!1,this.setIndexRecords()}setSources(n=[]){this.docs=n}setIndexRecords(n=[]){this.records=n}setKeys(n=[]){this.keys=n,this._keysMap={},n.forEach((s,o)=>{this._keysMap[s.id]=o})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,rn(this.docs[0])?this.docs.forEach((n,s)=>{this._addString(n,s)}):this.docs.forEach((n,s)=>{this._addObject(n,s)}),this.norm.clear())}add(n){const s=this.size();rn(n)?this._addString(n,s):this._addObject(n,s)}removeAt(n){this.records.splice(n,1);for(let s=n,o=this.size();s<o;s+=1)this.records[s].i-=1}getValueForItemAtKeyId(n,s){return n[this._keysMap[s]]}size(){return this.records.length}_addString(n,s){if(!Et(n)||jr(n))return;let o={v:n,i:s,n:this.norm.get(n)};this.records.push(o)}_addObject(n,s){let o={i:s,$:{}};this.keys.forEach((l,r)=>{let a=l.getFn?l.getFn(n):this.getFn(n,l.path);if(Et(a)){if(kn(a)){let i=[];const c=[{nestedArrIndex:-1,value:a}];for(;c.length;){const{nestedArrIndex:u,value:p}=c.pop();if(Et(p))if(rn(p)&&!jr(p)){let f={v:p,i:u,n:this.norm.get(p)};i.push(f)}else kn(p)&&p.forEach((f,h)=>{c.push({nestedArrIndex:h,value:f})})}o.$[r]=i}else if(rn(a)&&!jr(a)){let i={v:a,n:this.norm.get(a)};o.$[r]=i}}}),this.records.push(o)}toJSON(){return{keys:this.keys,records:this.records}}}function Hf(e,n,{getFn:s=de.getFn,fieldNormWeight:o=de.fieldNormWeight}={}){const l=new Mi({getFn:s,fieldNormWeight:o});return l.setKeys(e.map(jf)),l.setSources(n),l.create(),l}function p5(e,{getFn:n=de.getFn,fieldNormWeight:s=de.fieldNormWeight}={}){const{keys:o,records:l}=e,r=new Mi({getFn:n,fieldNormWeight:s});return r.setKeys(o),r.setIndexRecords(l),r}function ml(e,{errors:n=0,currentLocation:s=0,expectedLocation:o=0,distance:l=de.distance,ignoreLocation:r=de.ignoreLocation}={}){const a=n/e.length;if(r)return a;const i=Math.abs(o-s);return l?a+i/l:i?1:a}function d5(e=[],n=de.minMatchCharLength){let s=[],o=-1,l=-1,r=0;for(let a=e.length;r<a;r+=1){let i=e[r];i&&o===-1?o=r:!i&&o!==-1&&(l=r-1,l-o+1>=n&&s.push([o,l]),o=-1)}return e[r-1]&&r-o>=n&&s.push([o,r-1]),s}const cs=32;function f5(e,n,s,{location:o=de.location,distance:l=de.distance,threshold:r=de.threshold,findAllMatches:a=de.findAllMatches,minMatchCharLength:i=de.minMatchCharLength,includeMatches:c=de.includeMatches,ignoreLocation:u=de.ignoreLocation}={}){if(n.length>cs)throw new Error(e5(cs));const p=n.length,f=e.length,h=Math.max(0,Math.min(o,f));let y=r,m=h;const b=i>1||c,w=b?Array(f):[];let A;for(;(A=e.indexOf(n,m))>-1;){let R=ml(n,{currentLocation:A,expectedLocation:h,distance:l,ignoreLocation:u});if(y=Math.min(R,y),m=A+p,b){let U=0;for(;U<p;)w[A+U]=1,U+=1}}m=-1;let B=[],x=1,C=p+f;const F=1<<p-1;for(let R=0;R<p;R+=1){let U=0,j=C;for(;U<j;)ml(n,{errors:R,currentLocation:h+j,expectedLocation:h,distance:l,ignoreLocation:u})<=y?U=j:C=j,j=Math.floor((C-U)/2+U);C=j;let ne=Math.max(1,h-j+1),ue=a?f:Math.min(h+j,f)+p,Q=Array(ue+2);Q[ue+1]=(1<<R)-1;for(let ve=ue;ve>=ne;ve-=1){let be=ve-1,Pe=s[e.charAt(be)];if(b&&(w[be]=+!!Pe),Q[ve]=(Q[ve+1]<<1|1)&Pe,R&&(Q[ve]|=(B[ve+1]|B[ve])<<1|1|B[ve+1]),Q[ve]&F&&(x=ml(n,{errors:R,currentLocation:be,expectedLocation:h,distance:l,ignoreLocation:u}),x<=y)){if(y=x,m=be,m<=h)break;ne=Math.max(1,2*h-m)}}if(ml(n,{errors:R+1,currentLocation:h,expectedLocation:h,distance:l,ignoreLocation:u})>y)break;B=Q}const D={isMatch:m>=0,score:Math.max(.001,x)};if(b){const R=d5(w,i);R.length?c&&(D.indices=R):D.isMatch=!1}return D}function h5(e){let n={};for(let s=0,o=e.length;s<o;s+=1){const l=e.charAt(s);n[l]=(n[l]||0)|1<<o-s-1}return n}class Vf{constructor(n,{location:s=de.location,threshold:o=de.threshold,distance:l=de.distance,includeMatches:r=de.includeMatches,findAllMatches:a=de.findAllMatches,minMatchCharLength:i=de.minMatchCharLength,isCaseSensitive:c=de.isCaseSensitive,ignoreLocation:u=de.ignoreLocation}={}){if(this.options={location:s,threshold:o,distance:l,includeMatches:r,findAllMatches:a,minMatchCharLength:i,isCaseSensitive:c,ignoreLocation:u},this.pattern=c?n:n.toLowerCase(),this.chunks=[],!this.pattern.length)return;const p=(h,y)=>{this.chunks.push({pattern:h,alphabet:h5(h),startIndex:y})},f=this.pattern.length;if(f>cs){let h=0;const y=f%cs,m=f-y;for(;h<m;)p(this.pattern.substr(h,cs),h),h+=cs;if(y){const b=f-cs;p(this.pattern.substr(b),b)}}else p(this.pattern,0)}searchIn(n){const{isCaseSensitive:s,includeMatches:o}=this.options;if(s||(n=n.toLowerCase()),this.pattern===n){let m={isMatch:!0,score:0};return o&&(m.indices=[[0,n.length-1]]),m}const{location:l,distance:r,threshold:a,findAllMatches:i,minMatchCharLength:c,ignoreLocation:u}=this.options;let p=[],f=0,h=!1;this.chunks.forEach(({pattern:m,alphabet:b,startIndex:w})=>{const{isMatch:A,score:B,indices:x}=f5(n,m,b,{location:l+w,distance:r,threshold:a,findAllMatches:i,minMatchCharLength:c,includeMatches:o,ignoreLocation:u});A&&(h=!0),f+=B,A&&x&&(p=[...p,...x])});let y={isMatch:h,score:h?f/this.chunks.length:1};return h&&o&&(y.indices=p),y}}class Yn{constructor(n){this.pattern=n}static isMultiMatch(n){return Nu(n,this.multiRegex)}static isSingleMatch(n){return Nu(n,this.singleRegex)}search(){}}function Nu(e,n){const s=e.match(n);return s?s[1]:null}class y5 extends Yn{constructor(n){super(n)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(n){const s=n===this.pattern;return{isMatch:s,score:s?0:1,indices:[0,this.pattern.length-1]}}}class m5 extends Yn{constructor(n){super(n)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(n){const o=n.indexOf(this.pattern)===-1;return{isMatch:o,score:o?0:1,indices:[0,n.length-1]}}}class g5 extends Yn{constructor(n){super(n)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(n){const s=n.startsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[0,this.pattern.length-1]}}}class v5 extends Yn{constructor(n){super(n)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(n){const s=!n.startsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[0,n.length-1]}}}class _5 extends Yn{constructor(n){super(n)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(n){const s=n.endsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[n.length-this.pattern.length,n.length-1]}}}class b5 extends Yn{constructor(n){super(n)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(n){const s=!n.endsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[0,n.length-1]}}}class zf extends Yn{constructor(n,{location:s=de.location,threshold:o=de.threshold,distance:l=de.distance,includeMatches:r=de.includeMatches,findAllMatches:a=de.findAllMatches,minMatchCharLength:i=de.minMatchCharLength,isCaseSensitive:c=de.isCaseSensitive,ignoreLocation:u=de.ignoreLocation}={}){super(n),this._bitapSearch=new Vf(n,{location:s,threshold:o,distance:l,includeMatches:r,findAllMatches:a,minMatchCharLength:i,isCaseSensitive:c,ignoreLocation:u})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(n){return this._bitapSearch.searchIn(n)}}class Kf extends Yn{constructor(n){super(n)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(n){let s=0,o;const l=[],r=this.pattern.length;for(;(o=n.indexOf(this.pattern,s))>-1;)s=o+r,l.push([o,s-1]);const a=!!l.length;return{isMatch:a,score:a?0:1,indices:l}}}const Ma=[y5,Kf,g5,v5,b5,_5,m5,zf],qu=Ma.length,x5=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,A5="|";function w5(e,n={}){return e.split(A5).map(s=>{let o=s.trim().split(x5).filter(r=>r&&!!r.trim()),l=[];for(let r=0,a=o.length;r<a;r+=1){const i=o[r];let c=!1,u=-1;for(;!c&&++u<qu;){const p=Ma[u];let f=p.isMultiMatch(i);f&&(l.push(new p(f,n)),c=!0)}if(!c)for(u=-1;++u<qu;){const p=Ma[u];let f=p.isSingleMatch(i);if(f){l.push(new p(f,n));break}}}return l})}const B5=new Set([zf.type,Kf.type]);class k5{constructor(n,{isCaseSensitive:s=de.isCaseSensitive,includeMatches:o=de.includeMatches,minMatchCharLength:l=de.minMatchCharLength,ignoreLocation:r=de.ignoreLocation,findAllMatches:a=de.findAllMatches,location:i=de.location,threshold:c=de.threshold,distance:u=de.distance}={}){this.query=null,this.options={isCaseSensitive:s,includeMatches:o,minMatchCharLength:l,findAllMatches:a,ignoreLocation:r,location:i,threshold:c,distance:u},this.pattern=s?n:n.toLowerCase(),this.query=w5(this.pattern,this.options)}static condition(n,s){return s.useExtendedSearch}searchIn(n){const s=this.query;if(!s)return{isMatch:!1,score:1};const{includeMatches:o,isCaseSensitive:l}=this.options;n=l?n:n.toLowerCase();let r=0,a=[],i=0;for(let c=0,u=s.length;c<u;c+=1){const p=s[c];a.length=0,r=0;for(let f=0,h=p.length;f<h;f+=1){const y=p[f],{isMatch:m,indices:b,score:w}=y.search(n);if(m){if(r+=1,i+=w,o){const A=y.constructor.type;B5.has(A)?a=[...a,...b]:a.push(b)}}else{i=0,r=0,a.length=0;break}}if(r){let f={isMatch:!0,score:i/r};return o&&(f.indices=a),f}}return{isMatch:!1,score:1}}}const La=[];function C5(...e){La.push(...e)}function Ra(e,n){for(let s=0,o=La.length;s<o;s+=1){let l=La[s];if(l.condition(e,n))return new l(e,n)}return new Vf(e,n)}const Ql={AND:"$and",OR:"$or"},Na={PATH:"$path",PATTERN:"$val"},qa=e=>!!(e[Ql.AND]||e[Ql.OR]),F5=e=>!!e[Na.PATH],E5=e=>!kn(e)&&qf(e)&&!qa(e),Wu=e=>({[Ql.AND]:Object.keys(e).map(n=>({[n]:e[n]}))});function Gf(e,n,{auto:s=!0}={}){const o=l=>{let r=Object.keys(l);const a=F5(l);if(!a&&r.length>1&&!qa(l))return o(Wu(l));if(E5(l)){const c=a?l[Na.PATH]:r[0],u=a?l[Na.PATTERN]:l[c];if(!rn(u))throw new Error(Xb(c));const p={keyId:Ia(c),pattern:u};return s&&(p.searcher=Ra(u,n)),p}let i={children:[],operator:r[0]};return r.forEach(c=>{const u=l[c];kn(u)&&u.forEach(p=>{i.children.push(o(p))})}),i};return qa(e)||(e=Wu(e)),o(e)}function D5(e,{ignoreFieldNorm:n=de.ignoreFieldNorm}){e.forEach(s=>{let o=1;s.matches.forEach(({key:l,norm:r,score:a})=>{const i=l?l.weight:null;o*=Math.pow(a===0&&i?Number.EPSILON:a,(i||1)*(n?1:r))}),s.score=o})}function S5(e,n){const s=e.matches;n.matches=[],Et(s)&&s.forEach(o=>{if(!Et(o.indices)||!o.indices.length)return;const{indices:l,value:r}=o;let a={indices:l,value:r};o.key&&(a.key=o.key.src),o.idx>-1&&(a.refIndex=o.idx),n.matches.push(a)})}function T5(e,n){n.score=e.score}function $5(e,n,{includeMatches:s=de.includeMatches,includeScore:o=de.includeScore}={}){const l=[];return s&&l.push(S5),o&&l.push(T5),e.map(r=>{const{idx:a}=r,i={item:n[a],refIndex:a};return l.length&&l.forEach(c=>{c(r,i)}),i})}class Ks{constructor(n,s={},o){this.options={...de,...s},this.options.useExtendedSearch,this._keyStore=new s5(this.options.keys),this.setCollection(n,o)}setCollection(n,s){if(this._docs=n,s&&!(s instanceof Mi))throw new Error(Jb);this._myIndex=s||Hf(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(n){Et(n)&&(this._docs.push(n),this._myIndex.add(n))}remove(n=()=>!1){const s=[];for(let o=0,l=this._docs.length;o<l;o+=1){const r=this._docs[o];n(r,o)&&(this.removeAt(o),o-=1,l-=1,s.push(r))}return s}removeAt(n){this._docs.splice(n,1),this._myIndex.removeAt(n)}getIndex(){return this._myIndex}search(n,{limit:s=-1}={}){const{includeMatches:o,includeScore:l,shouldSort:r,sortFn:a,ignoreFieldNorm:i}=this.options;let c=rn(n)?rn(this._docs[0])?this._searchStringList(n):this._searchObjectList(n):this._searchLogical(n);return D5(c,{ignoreFieldNorm:i}),r&&c.sort(a),Nf(s)&&s>-1&&(c=c.slice(0,s)),$5(c,this._docs,{includeMatches:o,includeScore:l})}_searchStringList(n){const s=Ra(n,this.options),{records:o}=this._myIndex,l=[];return o.forEach(({v:r,i:a,n:i})=>{if(!Et(r))return;const{isMatch:c,score:u,indices:p}=s.searchIn(r);c&&l.push({item:r,idx:a,matches:[{score:u,value:r,norm:i,indices:p}]})}),l}_searchLogical(n){const s=Gf(n,this.options),o=(i,c,u)=>{if(!i.children){const{keyId:f,searcher:h}=i,y=this._findMatches({key:this._keyStore.get(f),value:this._myIndex.getValueForItemAtKeyId(c,f),searcher:h});return y&&y.length?[{idx:u,item:c,matches:y}]:[]}const p=[];for(let f=0,h=i.children.length;f<h;f+=1){const y=i.children[f],m=o(y,c,u);if(m.length)p.push(...m);else if(i.operator===Ql.AND)return[]}return p},l=this._myIndex.records,r={},a=[];return l.forEach(({$:i,i:c})=>{if(Et(i)){let u=o(s,i,c);u.length&&(r[c]||(r[c]={idx:c,item:i,matches:[]},a.push(r[c])),u.forEach(({matches:p})=>{r[c].matches.push(...p)}))}}),a}_searchObjectList(n){const s=Ra(n,this.options),{keys:o,records:l}=this._myIndex,r=[];return l.forEach(({$:a,i})=>{if(!Et(a))return;let c=[];o.forEach((u,p)=>{c.push(...this._findMatches({key:u,value:a[p],searcher:s}))}),c.length&&r.push({idx:i,item:a,matches:c})}),r}_findMatches({key:n,value:s,searcher:o}){if(!Et(s))return[];let l=[];if(kn(s))s.forEach(({v:r,i:a,n:i})=>{if(!Et(r))return;const{isMatch:c,score:u,indices:p}=o.searchIn(r);c&&l.push({score:u,key:n,value:r,idx:a,norm:i,indices:p})});else{const{v:r,n:a}=s,{isMatch:i,score:c,indices:u}=o.searchIn(r);i&&l.push({score:c,key:n,value:r,norm:a,indices:u})}return l}}Ks.version="6.6.2";Ks.createIndex=Hf;Ks.parseIndex=p5;Ks.config=de;Ks.parseQuery=Gf;C5(k5);const U5={class:"bg-main transform",shadow:"~",p:"x-4 y-2",border:"~ transparent rounded dark:main"},O5=["value","disabled","onKeydown"],P5=["border","onClick"],I5={"w-4":"","text-right":"",op50:"","text-sm":""},M5=ke({__name:"Goto",setup(e){L(H);const n=Y(),s=Y(),o=Y(),l=Y(),r=Y(""),a=Y(0);function i(x){return x!=null}const c=$(()=>new Ks(Qe.map(x=>{var C;return(C=x.meta)==null?void 0:C.slide}).filter(i),{keys:["no","title"],threshold:.3,shouldSort:!0,minMatchCharLength:1})),u=$(()=>r.value.startsWith("/")?r.value.substring(1):r.value),p=$(()=>c.value.search(u.value).map(x=>x.item)),f=$(()=>!!p.value.length);function h(){if(f.value){const x=p.value.at(a.value||0);x&&Vs(x.no)}y()}function y(){r.value="",Is.value=!1}function m(x){x.preventDefault(),a.value++,a.value>=p.value.length&&(a.value=0),w()}function b(x){x.preventDefault(),a.value--,a.value<=-2&&(a.value=p.value.length-1),w()}function w(){var C;const x=(C=l.value)==null?void 0:C[a.value];x&&o.value&&(x.offsetTop+x.offsetHeight>o.value.offsetHeight+o.value.scrollTop?o.value.scrollTo({behavior:"smooth",top:x.offsetTop+x.offsetHeight-o.value.offsetHeight+1}):x.offsetTop<o.value.scrollTop&&o.value.scrollTo({behavior:"smooth",top:x.offsetTop}))}function A(x){a.value=0,r.value=x.target.value}function B(x){Vs(x),y()}return ge(Is,async x=>{var C;x?(r.value="",a.value=0,setTimeout(()=>{var F;return(F=s.value)==null?void 0:F.focus()},0)):(C=s.value)==null||C.blur()}),ge(qn,()=>{var x;(x=n.value)!=null&&x.contains(qn.value)||y()}),(x,C)=>(v(),k("div",{id:"slidev-goto-dialog",ref_key:"container",ref:n,class:We(["fixed right-5 transition-all",T(Is)?"top-5":"-top-20"]),"w-90":"","max-w-90":"","min-w-90":""},[t("div",U5,[t("input",{id:"slidev-goto-input",ref_key:"input",ref:s,value:r.value,type:"text",disabled:!T(Is),class:We(["outline-none bg-transparent",{"text-red-400":!f.value&&r.value}]),placeholder:"Goto...",onKeydown:[cl(h,["enter"]),cl(y,["escape"]),cl(m,["down"]),cl(b,["up"])],onInput:A},null,42,O5)]),p.value.length>0?(v(),k("ul",{key:0,ref_key:"list",ref:o,class:"autocomplete-list",shadow:"~",border:"~ transparent rounded dark:main"},[(v(!0),k(De,null,Fs(p.value,(F,D)=>(v(),k("li",{ref_for:!0,ref_key:"items",ref:l,key:F.id,role:"button",tabindex:"0",p:"x-4 y-2","cursor-pointer":"",hover:"op100",flex:"~ gap-2","w-90":"","items-center":"",border:D===0?"":"t main",class:We(a.value===D?"bg-active op100":"op80"),onClick:g1(R=>B(F.no),["stop"])},[t("div",I5,Bn(F.no),1),d(" "+Bn(F.title),1)],10,P5))),128))],512)):me("v-if",!0)],2))}});const L5=V(M5,[["__scopeId","data-v-f5ee02a7"],["__file","/home/ben/Workspace/demystifying-unicode/node_modules/@slidev/client/internals/Goto.vue"]]),R5=ke({__name:"Controls",setup(e){L(H);const n=un(),s=un();return(o,l)=>(v(),k(De,null,[I(Mb,{modelValue:T(yt),"onUpdate:modelValue":l[0]||(l[0]=r=>Te(yt)?yt.value=r:null)},null,8,["modelValue"]),I(L5),n.value?(v(),W(T(n),{key:0})):me("v-if",!0),s.value?(v(),W(T(s),{key:1,modelValue:T(Rr),"onUpdate:modelValue":l[1]||(l[1]=r=>Te(Rr)?Rr.value=r:null)},null,8,["modelValue"])):me("v-if",!0),T(Se).info?(v(),W(zb,{key:2,modelValue:T(wo),"onUpdate:modelValue":l[2]||(l[2]=r=>Te(wo)?wo.value=r:null)},null,8,["modelValue"])):me("v-if",!0)],64))}}),N5=V(R5,[["__file","/home/ben/Workspace/demystifying-unicode/node_modules/@slidev/client/internals/Controls.vue"]]),q5={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},W5=t("path",{fill:"currentColor",d:"M30 8h-4.1c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2h14.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30V8zm-9 4c-1.7 0-3-1.3-3-3s1.3-3 3-3s3 1.3 3 3s-1.3 3-3 3zM2 24h4.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30v-2H15.9c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2zm9-4c1.7 0 3 1.3 3 3s-1.3 3-3 3s-3-1.3-3-3s1.3-3 3-3z"},null,-1),j5=[W5];function H5(e,n){return v(),k("svg",q5,j5)}const V5={name:"carbon-settings-adjust",render:H5},z5={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},K5=t("path",{fill:"currentColor",d:"M17 22v-8h-4v2h2v6h-3v2h8v-2h-3zM16 8a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 16 8z"},null,-1),G5=t("path",{fill:"currentColor",d:"M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z"},null,-1),Y5=[K5,G5];function Q5(e,n){return v(),k("svg",z5,Y5)}const Z5={name:"carbon-information",render:Q5},J5={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},X5=t("path",{fill:"currentColor",d:"M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10l10-10z"},null,-1),ex=[X5];function tx(e,n){return v(),k("svg",J5,ex)}const nx={name:"carbon-download",render:tx},sx={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},ox=t("path",{fill:"currentColor",d:"M29.415 19L27.7 17.285A2.97 2.97 0 0 0 28 16a3 3 0 1 0-3 3a2.97 2.97 0 0 0 1.286-.3L28 20.414V28h-6v-3a7.008 7.008 0 0 0-7-7H9a7.008 7.008 0 0 0-7 7v5h28v-9.586A1.988 1.988 0 0 0 29.415 19ZM4 25a5.006 5.006 0 0 1 5-5h6a5.006 5.006 0 0 1 5 5v3H4Z"},null,-1),lx=t("path",{fill:"currentColor",d:"M12 4a5 5 0 1 1-5 5a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7a7 7 0 0 0-7-7Z"},null,-1),rx=[ox,lx];function ax(e,n){return v(),k("svg",sx,rx)}const ix={name:"carbon-user-speaker",render:ax},cx={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},ux=t("path",{fill:"currentColor",d:"M15 10h2v8h-2zm5 4h2v4h-2zm-10-2h2v6h-2z"},null,-1),px=t("path",{fill:"currentColor",d:"M25 4h-8V2h-2v2H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8v6h-4v2h10v-2h-4v-6h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 16H7V6h18Z"},null,-1),dx=[ux,px];function fx(e,n){return v(),k("svg",cx,dx)}const hx={name:"carbon-presentation-file",render:fx},yx={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},mx=t("path",{fill:"currentColor",d:"M27.307 6.107L30 3.414L28.586 2l-2.693 2.693L24.8 3.6a1.933 1.933 0 0 0-2.8 0l-18 18V28h6.4l18-18a1.933 1.933 0 0 0 0-2.8ZM9.6 26H6v-3.6L23.4 5L27 8.6ZM9 11.586L16.586 4L18 5.414L10.414 13z"},null,-1),gx=[mx];function vx(e,n){return v(),k("svg",yx,gx)}const _x={name:"carbon-pen",render:vx},bx={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},xx=t("g",{fill:"currentColor"},[t("path",{d:"M213.66 201L201 213.66a8 8 0 0 1-11.31 0L140 164a8 8 0 0 0-13 2.46l-19.46 44.77a8 8 0 0 1-14.85-.71L40.41 50.44a8 8 0 0 1 10-10l160.1 52.24a8 8 0 0 1 .71 14.85L166.45 127a8 8 0 0 0-2.45 13l49.67 49.67a8 8 0 0 1-.01 11.33Z",opacity:".2"}),t("path",{d:"m169.64 134.33l44.77-19.46a16 16 0 0 0-1.41-29.8L52.92 32.8A16 16 0 0 0 32.8 52.92L85.07 213a15.83 15.83 0 0 0 14.41 11h.78a15.83 15.83 0 0 0 14.61-9.59l19.46-44.77L184 219.31a16 16 0 0 0 22.63 0l12.68-12.68a16 16 0 0 0 0-22.63Zm-69.48 73.76l.06-.05Zm95.15-.09l-49.67-49.67a16 16 0 0 0-26 4.94l-19.42 44.65L48 48l159.87 52.21l-44.64 19.41a16 16 0 0 0-4.94 26L208 195.31Z"})],-1),Ax=[xx];function wx(e,n){return v(),k("svg",bx,Ax)}const Bx={name:"ph-cursor-duotone",render:wx},kx={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},Cx=t("path",{fill:"currentColor",d:"M219.31 192a16 16 0 0 1 0 22.63l-4.68 4.68a16 16 0 0 1-22.63 0l-55.25-55.24l-21.88 50.34a15.84 15.84 0 0 1-14.61 9.59h-.78a15.82 15.82 0 0 1-14.41-11L32.8 52.92A15.95 15.95 0 0 1 52.92 32.8L213 85.07a16 16 0 0 1 1.41 29.8l-50.34 21.88Z"},null,-1),Fx=[Cx];function Ex(e,n){return v(),k("svg",kx,Fx)}const Yf={name:"ph-cursor-fill",render:Ex},Dx={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Sx=t("path",{fill:"currentColor",d:"M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6ZM5.394 6.813L6.81 5.399l3.505 3.506L8.9 10.319zM2 15.005h5v2H2zm3.394 10.193L8.9 21.692l1.414 1.414l-3.505 3.506zM15 25.005h2v5h-2zm6.687-1.9l1.414-1.414l3.506 3.506l-1.414 1.414zm3.313-8.1h5v2h-5zm-3.313-6.101l3.506-3.506l1.414 1.414l-3.506 3.506zM15 2.005h2v5h-2z"},null,-1),Tx=[Sx];function $x(e,n){return v(),k("svg",Dx,Tx)}const Ux={name:"carbon-sun",render:$x},Ox={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Px=t("path",{fill:"currentColor",d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3Z"},null,-1),Ix=[Px];function Mx(e,n){return v(),k("svg",Ox,Ix)}const Lx={name:"carbon-moon",render:Mx},Rx={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Nx=t("path",{fill:"currentColor",d:"M8 4v4H4V4Zm2-2H2v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8ZM8 14v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8ZM8 24v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Z"},null,-1),qx=[Nx];function Wx(e,n){return v(),k("svg",Rx,qx)}const jx={name:"carbon-apps",render:Wx},Hx={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Vx=t("path",{fill:"currentColor",d:"m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10L18 6z"},null,-1),zx=[Vx];function Kx(e,n){return v(),k("svg",Hx,zx)}const Gx={name:"carbon-arrow-right",render:Kx},Yx={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Qx=t("path",{fill:"currentColor",d:"m14 26l1.41-1.41L7.83 17H28v-2H7.83l7.58-7.59L14 6L4 16l10 10z"},null,-1),Zx=[Qx];function Jx(e,n){return v(),k("svg",Yx,Zx)}const Xx={name:"carbon-arrow-left",render:Jx},e3={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},t3=t("path",{fill:"currentColor",d:"M20 2v2h6.586L18 12.582L19.414 14L28 5.414V12h2V2H20zm-6 17.416L12.592 18L4 26.586V20H2v10h10v-2H5.414L14 19.416z"},null,-1),n3=[t3];function s3(e,n){return v(),k("svg",e3,n3)}const o3={name:"carbon-maximize",render:s3},l3={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},r3=t("path",{fill:"currentColor",d:"M4 18v2h6.586L2 28.582L3.414 30L12 21.414V28h2V18H4zM30 3.416L28.592 2L20 10.586V4h-2v10h10v-2h-6.586L30 3.416z"},null,-1),a3=[r3];function i3(e,n){return v(),k("svg",l3,a3)}const c3={name:"carbon-minimize",render:i3},u3={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},p3=t("path",{fill:"currentColor",d:"m13 24l-9-9l1.414-1.414L13 21.171L26.586 7.586L28 9L13 24z"},null,-1),d3=[p3];function f3(e,n){return v(),k("svg",u3,d3)}const h3={name:"carbon-checkmark",render:f3},y3={class:"select-list"},m3={class:"title"},g3={class:"items"},v3=["onClick"],_3=ke({__name:"SelectList",props:{modelValue:{type:[Object,String,Number]},title:{type:String},items:{type:Array}},setup(e,{emit:n}){const s=e;L(H);const o=on(s,"modelValue",n,{passive:!0});return(l,r)=>{const a=h3;return v(),k("div",y3,[t("div",m3,Bn(e.title),1),t("div",g3,[(v(!0),k(De,null,Fs(e.items,i=>(v(),k("div",{key:i.value,class:We(["item",{active:T(o)===i.value}]),onClick:()=>{var c;o.value=i.value,(c=i.onClick)==null||c.call(i)}},[I(a,{class:We(["text-green-500",{"opacity-0":T(o)!==i.value}])},null,8,["class"]),d(" "+Bn(i.display||i.value),1)],10,v3))),128))])])}}});const b3=V(_3,[["__scopeId","data-v-3f89fa11"],["__file","/home/ben/Workspace/demystifying-unicode/node_modules/@slidev/client/internals/SelectList.vue"]]),x3={class:"text-sm"},A3=ke({__name:"Settings",setup(e){L(H);const n=[{display:"Fit",value:0},{display:"1:1",value:1}];return(s,o)=>(v(),k("div",x3,[I(b3,{modelValue:T(kl),"onUpdate:modelValue":o[0]||(o[0]=l=>Te(kl)?kl.value=l:null),title:"Scale",items:n},null,8,["modelValue"])]))}}),w3=V(A3,[["__file","/home/ben/Workspace/demystifying-unicode/node_modules/@slidev/client/internals/Settings.vue"]]),B3={key:0,class:"rounded-md bg-main shadow absolute bottom-10 left-0 z-20","dark:border":"~ main"},k3=ke({__name:"MenuButton",props:{modelValue:{default:!1},disabled:{default:!1}},setup(e,{emit:n}){const s=e;L(H);const o=on(s,"modelValue",n,{passive:!0}),l=Y();return mv(l,()=>{o.value=!1}),(r,a)=>(v(),k("div",{ref_key:"el",ref:l,class:"flex relative"},[t("button",{class:We({disabled:e.disabled}),onClick:a[0]||(a[0]=i=>o.value=!T(o))},[Wt(r.$slots,"button",{class:We({disabled:e.disabled})})],2),(v(),W(pd,null,[T(o)?(v(),k("div",B3,[Wt(r.$slots,"menu")])):me("v-if",!0)],1024))],512))}}),C3=V(k3,[["__file","/home/ben/Workspace/demystifying-unicode/node_modules/@slidev/client/internals/MenuButton.vue"]]),F3={class:"w-1px opacity-10 bg-current m-1 lg:m-2"},E3={__name:"VerticalDivider",setup(e){return L(H),(n,s)=>(v(),k("div",F3))}},gl=V(E3,[["__file","/home/ben/Workspace/demystifying-unicode/node_modules/@slidev/client/internals/VerticalDivider.vue"]]),D3={render(){return[]}},S3={class:"slidev-icon-btn"},T3={class:"h-40px flex",p:"l-1 t-0.5 r-2",text:"sm leading-2"},$3={class:"my-auto"},U3={class:"opacity-50"},O3=ke({__name:"NavControls",props:{persist:{default:!1}},setup(e){const n=e;L(H);const s=Ta.smaller("md"),{isFullscreen:o,toggle:l}=Sf,r=$(()=>ja.value?`?password=${ja.value}`:""),a=$(()=>`/presenter/${Ve.value}${r.value}`),i=$(()=>`/${Ve.value}${r.value}`),c=Y();function u(){c.value&&qn.value&&c.value.contains(qn.value)&&qn.value.blur()}const p=$(()=>n.persist?"text-$slidev-controls-foreground bg-transparent":"rounded-md bg-main shadow dark:border dark:border-gray-400 dark:border-opacity-10"),f=un(),h=un();return Nn(()=>import("./DrawingControls-2bac91e6.js"),[]).then(y=>h.value=y.default),(y,m)=>{const b=c3,w=o3,A=Xx,B=Gx,x=jx,C=Lx,F=Ux,D=Yf,R=Bx,U=_x,j=hx,ne=Ws("RouterLink"),ue=ix,Q=nx,ye=Z5,ve=V5;return v(),k("nav",{ref_key:"root",ref:c,class:"flex flex-col"},[t("div",{class:We(["flex flex-wrap-reverse text-xl gap-0.5 p-1 lg:gap-1 lg:p-2",p.value]),onMouseleave:u},[T(vn)?me("v-if",!0):(v(),k("button",{key:0,class:"slidev-icon-btn",onClick:m[0]||(m[0]=(...be)=>T(l)&&T(l)(...be))},[T(o)?(v(),W(b,{key:0})):(v(),W(w,{key:1}))])),t("button",{class:We(["slidev-icon-btn",{disabled:!T(PF)}]),onClick:m[1]||(m[1]=(...be)=>T(jn)&&T(jn)(...be))},[I(A)],2),t("button",{class:We(["slidev-icon-btn",{disabled:!T(OF)}]),title:"Next",onClick:m[2]||(m[2]=(...be)=>T(Wn)&&T(Wn)(...be))},[I(B)],2),T(vn)?me("v-if",!0):(v(),k("button",{key:1,class:"slidev-icon-btn",title:"Slides overview",onClick:m[3]||(m[3]=be=>T(Tf)())},[I(x)])),T(Pa)?me("v-if",!0):(v(),k("button",{key:2,class:"slidev-icon-btn",title:"Toggle dark mode",onClick:m[4]||(m[4]=be=>T(If)())},[T(Ui)?(v(),W(C,{key:0})):(v(),W(F,{key:1}))])),I(gl),T(vn)?me("v-if",!0):(v(),k(De,{key:3},[!T(xt)&&!T(s)&&f.value?(v(),k(De,{key:0},[I(T(f)),I(gl)],64)):me("v-if",!0),T(xt)?(v(),k("button",{key:1,class:"slidev-icon-btn",title:"Show presenter cursor",onClick:m[5]||(m[5]=be=>Nr.value=!T(Nr))},[T(Nr)?(v(),W(D,{key:0})):(v(),W(R,{key:1,class:"opacity-50"}))])):me("v-if",!0)],64)),(!T(Se).drawings.presenterOnly||T(xt))&&!T(vn)?(v(),k(De,{key:4},[t("button",{class:"slidev-icon-btn relative",title:"Drawing",onClick:m[6]||(m[6]=be=>ln.value=!T(ln))},[I(U),T(ln)?(v(),k("div",{key:0,class:"absolute left-1 right-1 bottom-0 h-0.7 rounded-full",style:nt({background:T(ds).color})},null,4)):me("v-if",!0)]),I(gl)],64)):me("v-if",!0),T(vn)?me("v-if",!0):(v(),k(De,{key:5},[T(xt)?(v(),W(ne,{key:0,to:i.value,class:"slidev-icon-btn",title:"Play Mode"},{default:O(()=>[I(j)]),_:1},8,["to"])):me("v-if",!0),T(DF)?(v(),W(ne,{key:1,to:a.value,class:"slidev-icon-btn",title:"Presenter Mode"},{default:O(()=>[I(ue)]),_:1},8,["to"])):me("v-if",!0),me("v-if",!0)],64)),(v(),k(De,{key:6},[T(Se).download?(v(),k("button",{key:0,class:"slidev-icon-btn",onClick:m[8]||(m[8]=(...be)=>T(Ha)&&T(Ha)(...be))},[I(Q)])):me("v-if",!0)],64)),!T(xt)&&T(Se).info&&!T(vn)?(v(),k("button",{key:7,class:"slidev-icon-btn",onClick:m[9]||(m[9]=be=>wo.value=!T(wo))},[I(ye)])):me("v-if",!0),!T(xt)&&!T(vn)?(v(),W(C3,{key:8},{button:O(()=>[t("button",S3,[I(ve)])]),menu:O(()=>[I(w3)]),_:1})):me("v-if",!0),T(vn)?me("v-if",!0):(v(),W(gl,{key:9})),t("div",T3,[t("div",$3,[d(Bn(T(Ve))+" ",1),t("span",U3,"/ "+Bn(T(SF)),1)])]),I(T(D3))],34)],512)}}}),P3=V(O3,[["__file","/home/ben/Workspace/demystifying-unicode/node_modules/@slidev/client/internals/NavControls.vue"]]),Qf={render(){return[]}},Zf={render(){return[]}},I3={key:0,class:"absolute top-0 left-0 right-0 bottom-0 pointer-events-none text-xl"},M3=ke({__name:"PresenterMouse",setup(e){return L(H),(n,s)=>{const o=Yf;return T(Pr).cursor?(v(),k("div",I3,[I(o,{class:"absolute",style:nt({left:`${T(Pr).cursor.x}%`,top:`${T(Pr).cursor.y}%`})},null,8,["style"])])):me("v-if",!0)}}}),L3=V(M3,[["__file","/home/ben/Workspace/demystifying-unicode/node_modules/@slidev/client/internals/PresenterMouse.vue"]]),R3=ke({__name:"SlidesShow",props:{context:{type:String,required:!0}},setup(e){L(H),ge(mt,()=>{var o,l;(o=mt.value)!=null&&o.meta&&mt.value.meta.preload!==!1&&(mt.value.meta.__preloaded=!0),(l=Hr.value)!=null&&l.meta&&Hr.value.meta.preload!==!1&&(Hr.value.meta.__preloaded=!0)},{immediate:!0});const n=un();Nn(()=>import("./DrawingLayer-7701b1d4.js"),[]).then(o=>n.value=o.default);const s=$(()=>Qe.filter(o=>{var l;return((l=o.meta)==null?void 0:l.__preloaded)||o===mt.value}));return(o,l)=>(v(),k(De,null,[me(" Global Bottom "),I(T(Zf)),me(" Slides "),I(u1,je(T(LF),{id:"slideshow",tag:"div"}),{default:O(()=>[(v(!0),k(De,null,Fs(s.value,r=>{var a;return Ke((v(),W(T(Ii),{key:r.path,is:r==null?void 0:r.component,clicks:r===T(mt)?T(Rt):0,"clicks-elements":((a=r.meta)==null?void 0:a.__clicksElements)||[],"clicks-disabled":!1,class:We(T(Pi)(r)),route:r,context:o.context},null,8,["is","clicks","clicks-elements","class","route","context"])),[[Nd,r===T(mt)]])}),128))]),_:1},16),me(" Global Top "),I(T(Qf)),n.value?(v(),W(T(n),{key:0})):me("v-if",!0),T(xt)?me("v-if",!0):(v(),W(L3,{key:1}))],64))}});const N3=V(R3,[["__scopeId","data-v-afb4231e"],["__file","/home/ben/Workspace/demystifying-unicode/node_modules/@slidev/client/internals/SlidesShow.vue"]]),q3=ke({__name:"PrintStyle",setup(e){L(H);function n(s,{slots:o}){if(o.default)return tt("style",o.default())}return(s,o)=>(v(),W(n,null,{default:O(()=>[d(" @page { size: "+Bn(T(Rn))+"px "+Bn(T(Ei))+"px; margin: 0px; } ",1)]),_:1}))}}),Jf=V(q3,[["__file","/home/ben/Workspace/demystifying-unicode/node_modules/@slidev/client/internals/PrintStyle.vue"]]),W3=ke({__name:"Play",setup(e){L(H),Bb();const n=Y();function s(r){var a;Cu.value||((a=r.target)==null?void 0:a.id)==="slide-container"&&(r.screenX/window.innerWidth>.6?Wn():jn())}RF(n);const o=$(()=>O8.value||Cu.value);un();const l=un();return Nn(()=>import("./DrawingControls-2bac91e6.js"),[]).then(r=>l.value=r.default),(r,a)=>(v(),k(De,null,[T(An)?(v(),W(Jf,{key:0})):me("v-if",!0),t("div",{id:"page-root",ref_key:"root",ref:n,class:"grid grid-cols-[1fr_max-content]",style:nt(T(Di))},[I(Lf,{class:"w-full h-full",style:nt({background:"var(--slidev-slide-container-background, black)"}),width:T(An)?T(xs).width.value:void 0,scale:T(kl),onPointerdown:s},{default:O(()=>[I(N3,{context:"slide"})]),controls:O(()=>[t("div",{class:We(["absolute bottom-0 left-0 transition duration-300 opacity-0 hover:opacity-100",[o.value?"opacity-100 right-0":"opacity-0 p-2",T(Lo)?"pointer-events-none":""]])},[I(P3,{class:"m-auto",persist:o.value},null,8,["persist"])],2),!T(Se).drawings.presenterOnly&&!T(vn)&&l.value?(v(),W(T(l),{key:0,class:"ml-0"})):me("v-if",!0)]),_:1},8,["style","width","scale"]),me("v-if",!0)],4),I(N5)],64))}}),j3=V(W3,[["__file","/home/ben/Workspace/demystifying-unicode/node_modules/@slidev/client/internals/Play.vue"]]);/*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT */function Xf(e){return typeof e>"u"||e===null}function H3(e){return typeof e=="object"&&e!==null}function V3(e){return Array.isArray(e)?e:Xf(e)?[]:[e]}function z3(e,n){var s,o,l,r;if(n)for(r=Object.keys(n),s=0,o=r.length;s<o;s+=1)l=r[s],e[l]=n[l];return e}function K3(e,n){var s="",o;for(o=0;o<n;o+=1)s+=e;return s}function G3(e){return e===0&&Number.NEGATIVE_INFINITY===1/e}var Y3=Xf,Q3=H3,Z3=V3,J3=K3,X3=G3,eA=z3,Li={isNothing:Y3,isObject:Q3,toArray:Z3,repeat:J3,isNegativeZero:X3,extend:eA};function eh(e,n){var s="",o=e.reason||"(unknown reason)";return e.mark?(e.mark.name&&(s+='in "'+e.mark.name+'" '),s+="("+(e.mark.line+1)+":"+(e.mark.column+1)+")",!n&&e.mark.snippet&&(s+=`

`+e.mark.snippet),o+" "+s):o}function No(e,n){Error.call(this),this.name="YAMLException",this.reason=e,this.mark=n,this.message=eh(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}No.prototype=Object.create(Error.prototype);No.prototype.constructor=No;No.prototype.toString=function(n){return this.name+": "+eh(this,n)};var us=No,tA=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],nA=["scalar","sequence","mapping"];function sA(e){var n={};return e!==null&&Object.keys(e).forEach(function(s){e[s].forEach(function(o){n[String(o)]=s})}),n}function oA(e,n){if(n=n||{},Object.keys(n).forEach(function(s){if(tA.indexOf(s)===-1)throw new us('Unknown option "'+s+'" is met in definition of "'+e+'" YAML type.')}),this.options=n,this.tag=e,this.kind=n.kind||null,this.resolve=n.resolve||function(){return!0},this.construct=n.construct||function(s){return s},this.instanceOf=n.instanceOf||null,this.predicate=n.predicate||null,this.represent=n.represent||null,this.representName=n.representName||null,this.defaultStyle=n.defaultStyle||null,this.multi=n.multi||!1,this.styleAliases=sA(n.styleAliases||null),nA.indexOf(this.kind)===-1)throw new us('Unknown kind "'+this.kind+'" is specified for "'+e+'" YAML type.')}var pt=oA;function ju(e,n){var s=[];return e[n].forEach(function(o){var l=s.length;s.forEach(function(r,a){r.tag===o.tag&&r.kind===o.kind&&r.multi===o.multi&&(l=a)}),s[l]=o}),s}function lA(){var e={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}},n,s;function o(l){l.multi?(e.multi[l.kind].push(l),e.multi.fallback.push(l)):e[l.kind][l.tag]=e.fallback[l.tag]=l}for(n=0,s=arguments.length;n<s;n+=1)arguments[n].forEach(o);return e}function Wa(e){return this.extend(e)}Wa.prototype.extend=function(n){var s=[],o=[];if(n instanceof pt)o.push(n);else if(Array.isArray(n))o=o.concat(n);else if(n&&(Array.isArray(n.implicit)||Array.isArray(n.explicit)))n.implicit&&(s=s.concat(n.implicit)),n.explicit&&(o=o.concat(n.explicit));else throw new us("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");s.forEach(function(r){if(!(r instanceof pt))throw new us("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(r.loadKind&&r.loadKind!=="scalar")throw new us("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(r.multi)throw new us("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),o.forEach(function(r){if(!(r instanceof pt))throw new us("Specified list of YAML types (or a single Type object) contains a non-Type object.")});var l=Object.create(Wa.prototype);return l.implicit=(this.implicit||[]).concat(s),l.explicit=(this.explicit||[]).concat(o),l.compiledImplicit=ju(l,"implicit"),l.compiledExplicit=ju(l,"explicit"),l.compiledTypeMap=lA(l.compiledImplicit,l.compiledExplicit),l};var rA=Wa,aA=new pt("tag:yaml.org,2002:str",{kind:"scalar",construct:function(e){return e!==null?e:""}}),iA=new pt("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(e){return e!==null?e:[]}}),cA=new pt("tag:yaml.org,2002:map",{kind:"mapping",construct:function(e){return e!==null?e:{}}}),uA=new rA({explicit:[aA,iA,cA]});function pA(e){if(e===null)return!0;var n=e.length;return n===1&&e==="~"||n===4&&(e==="null"||e==="Null"||e==="NULL")}function dA(){return null}function fA(e){return e===null}var hA=new pt("tag:yaml.org,2002:null",{kind:"scalar",resolve:pA,construct:dA,predicate:fA,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"});function yA(e){if(e===null)return!1;var n=e.length;return n===4&&(e==="true"||e==="True"||e==="TRUE")||n===5&&(e==="false"||e==="False"||e==="FALSE")}function mA(e){return e==="true"||e==="True"||e==="TRUE"}function gA(e){return Object.prototype.toString.call(e)==="[object Boolean]"}var vA=new pt("tag:yaml.org,2002:bool",{kind:"scalar",resolve:yA,construct:mA,predicate:gA,represent:{lowercase:function(e){return e?"true":"false"},uppercase:function(e){return e?"TRUE":"FALSE"},camelcase:function(e){return e?"True":"False"}},defaultStyle:"lowercase"});function _A(e){return 48<=e&&e<=57||65<=e&&e<=70||97<=e&&e<=102}function bA(e){return 48<=e&&e<=55}function xA(e){return 48<=e&&e<=57}function AA(e){if(e===null)return!1;var n=e.length,s=0,o=!1,l;if(!n)return!1;if(l=e[s],(l==="-"||l==="+")&&(l=e[++s]),l==="0"){if(s+1===n)return!0;if(l=e[++s],l==="b"){for(s++;s<n;s++)if(l=e[s],l!=="_"){if(l!=="0"&&l!=="1")return!1;o=!0}return o&&l!=="_"}if(l==="x"){for(s++;s<n;s++)if(l=e[s],l!=="_"){if(!_A(e.charCodeAt(s)))return!1;o=!0}return o&&l!=="_"}if(l==="o"){for(s++;s<n;s++)if(l=e[s],l!=="_"){if(!bA(e.charCodeAt(s)))return!1;o=!0}return o&&l!=="_"}}if(l==="_")return!1;for(;s<n;s++)if(l=e[s],l!=="_"){if(!xA(e.charCodeAt(s)))return!1;o=!0}return!(!o||l==="_")}function wA(e){var n=e,s=1,o;if(n.indexOf("_")!==-1&&(n=n.replace(/_/g,"")),o=n[0],(o==="-"||o==="+")&&(o==="-"&&(s=-1),n=n.slice(1),o=n[0]),n==="0")return 0;if(o==="0"){if(n[1]==="b")return s*parseInt(n.slice(2),2);if(n[1]==="x")return s*parseInt(n.slice(2),16);if(n[1]==="o")return s*parseInt(n.slice(2),8)}return s*parseInt(n,10)}function BA(e){return Object.prototype.toString.call(e)==="[object Number]"&&e%1===0&&!Li.isNegativeZero(e)}var kA=new pt("tag:yaml.org,2002:int",{kind:"scalar",resolve:AA,construct:wA,predicate:BA,represent:{binary:function(e){return e>=0?"0b"+e.toString(2):"-0b"+e.toString(2).slice(1)},octal:function(e){return e>=0?"0o"+e.toString(8):"-0o"+e.toString(8).slice(1)},decimal:function(e){return e.toString(10)},hexadecimal:function(e){return e>=0?"0x"+e.toString(16).toUpperCase():"-0x"+e.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),CA=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function FA(e){return!(e===null||!CA.test(e)||e[e.length-1]==="_")}function EA(e){var n,s;return n=e.replace(/_/g,"").toLowerCase(),s=n[0]==="-"?-1:1,"+-".indexOf(n[0])>=0&&(n=n.slice(1)),n===".inf"?s===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:n===".nan"?NaN:s*parseFloat(n,10)}var DA=/^[-+]?[0-9]+e/;function SA(e,n){var s;if(isNaN(e))switch(n){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===e)switch(n){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===e)switch(n){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(Li.isNegativeZero(e))return"-0.0";return s=e.toString(10),DA.test(s)?s.replace("e",".e"):s}function TA(e){return Object.prototype.toString.call(e)==="[object Number]"&&(e%1!==0||Li.isNegativeZero(e))}var $A=new pt("tag:yaml.org,2002:float",{kind:"scalar",resolve:FA,construct:EA,predicate:TA,represent:SA,defaultStyle:"lowercase"}),UA=uA.extend({implicit:[hA,vA,kA,$A]}),OA=UA,th=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),nh=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function PA(e){return e===null?!1:th.exec(e)!==null||nh.exec(e)!==null}function IA(e){var n,s,o,l,r,a,i,c=0,u=null,p,f,h;if(n=th.exec(e),n===null&&(n=nh.exec(e)),n===null)throw new Error("Date resolve error");if(s=+n[1],o=+n[2]-1,l=+n[3],!n[4])return new Date(Date.UTC(s,o,l));if(r=+n[4],a=+n[5],i=+n[6],n[7]){for(c=n[7].slice(0,3);c.length<3;)c+="0";c=+c}return n[9]&&(p=+n[10],f=+(n[11]||0),u=(p*60+f)*6e4,n[9]==="-"&&(u=-u)),h=new Date(Date.UTC(s,o,l,r,a,i,c)),u&&h.setTime(h.getTime()-u),h}function MA(e){return e.toISOString()}var LA=new pt("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:PA,construct:IA,instanceOf:Date,represent:MA});function RA(e){return e==="<<"||e===null}var NA=new pt("tag:yaml.org,2002:merge",{kind:"scalar",resolve:RA}),Ri=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function qA(e){if(e===null)return!1;var n,s,o=0,l=e.length,r=Ri;for(s=0;s<l;s++)if(n=r.indexOf(e.charAt(s)),!(n>64)){if(n<0)return!1;o+=6}return o%8===0}function WA(e){var n,s,o=e.replace(/[\r\n=]/g,""),l=o.length,r=Ri,a=0,i=[];for(n=0;n<l;n++)n%4===0&&n&&(i.push(a>>16&255),i.push(a>>8&255),i.push(a&255)),a=a<<6|r.indexOf(o.charAt(n));return s=l%4*6,s===0?(i.push(a>>16&255),i.push(a>>8&255),i.push(a&255)):s===18?(i.push(a>>10&255),i.push(a>>2&255)):s===12&&i.push(a>>4&255),new Uint8Array(i)}function jA(e){var n="",s=0,o,l,r=e.length,a=Ri;for(o=0;o<r;o++)o%3===0&&o&&(n+=a[s>>18&63],n+=a[s>>12&63],n+=a[s>>6&63],n+=a[s&63]),s=(s<<8)+e[o];return l=r%3,l===0?(n+=a[s>>18&63],n+=a[s>>12&63],n+=a[s>>6&63],n+=a[s&63]):l===2?(n+=a[s>>10&63],n+=a[s>>4&63],n+=a[s<<2&63],n+=a[64]):l===1&&(n+=a[s>>2&63],n+=a[s<<4&63],n+=a[64],n+=a[64]),n}function HA(e){return Object.prototype.toString.call(e)==="[object Uint8Array]"}var VA=new pt("tag:yaml.org,2002:binary",{kind:"scalar",resolve:qA,construct:WA,predicate:HA,represent:jA}),zA=Object.prototype.hasOwnProperty,KA=Object.prototype.toString;function GA(e){if(e===null)return!0;var n=[],s,o,l,r,a,i=e;for(s=0,o=i.length;s<o;s+=1){if(l=i[s],a=!1,KA.call(l)!=="[object Object]")return!1;for(r in l)if(zA.call(l,r))if(!a)a=!0;else return!1;if(!a)return!1;if(n.indexOf(r)===-1)n.push(r);else return!1}return!0}function YA(e){return e!==null?e:[]}var QA=new pt("tag:yaml.org,2002:omap",{kind:"sequence",resolve:GA,construct:YA}),ZA=Object.prototype.toString;function JA(e){if(e===null)return!0;var n,s,o,l,r,a=e;for(r=new Array(a.length),n=0,s=a.length;n<s;n+=1){if(o=a[n],ZA.call(o)!=="[object Object]"||(l=Object.keys(o),l.length!==1))return!1;r[n]=[l[0],o[l[0]]]}return!0}function XA(e){if(e===null)return[];var n,s,o,l,r,a=e;for(r=new Array(a.length),n=0,s=a.length;n<s;n+=1)o=a[n],l=Object.keys(o),r[n]=[l[0],o[l[0]]];return r}var ew=new pt("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:JA,construct:XA}),tw=Object.prototype.hasOwnProperty;function nw(e){if(e===null)return!0;var n,s=e;for(n in s)if(tw.call(s,n)&&s[n]!==null)return!1;return!0}function sw(e){return e!==null?e:{}}var ow=new pt("tag:yaml.org,2002:set",{kind:"mapping",resolve:nw,construct:sw});OA.extend({implicit:[LA,NA],explicit:[VA,QA,ew,ow]});function Hu(e){return e===48?"\0":e===97?"\x07":e===98?"\b":e===116||e===9?"	":e===110?`
`:e===118?"\v":e===102?"\f":e===114?"\r":e===101?"\x1B":e===32?" ":e===34?'"':e===47?"/":e===92?"\\":e===78?"":e===95?" ":e===76?"\u2028":e===80?"\u2029":""}var lw=new Array(256),rw=new Array(256);for(var Os=0;Os<256;Os++)lw[Os]=Hu(Os)?1:0,rw[Os]=Hu(Os);function aw(e){return Array.from(new Set(e))}function Vu(...e){let n,s,o;e.length===1?(n=0,o=1,[s]=e):[n,s,o=1]=e;const l=[];let r=n;for(;r<s;)l.push(r),r+=o||1;return l}function sh(e,n){if(!n||n==="all"||n==="*")return Vu(1,e+1);const s=[];for(const o of n.split(/[,;]/g))if(!o.includes("-"))s.push(+o);else{const[l,r]=o.split("-",2);s.push(...Vu(+l,r?+r+1:e+1))}return aw(s).filter(o=>o<=e).sort((o,l)=>o-l)}function oh(e){const n=$(()=>e.value.path),s=$(()=>Qe.length),o=$(()=>Number.parseInt(n.value.split(/\//g).slice(-1)[0])||1),l=$(()=>vr(o.value)),r=$(()=>Qe.find(h=>h.path===`${o.value}`)),a=$(()=>{var h,y,m;return(m=(y=(h=r.value)==null?void 0:h.meta)==null?void 0:y.slide)==null?void 0:m.id}),i=$(()=>{var h,y;return((y=(h=r.value)==null?void 0:h.meta)==null?void 0:y.layout)||(o.value===1?"cover":"default")}),c=$(()=>Qe.find(h=>h.path===`${Math.min(Qe.length,o.value+1)}`)),u=$(()=>Qe.filter(h=>{var y,m;return(m=(y=h.meta)==null?void 0:y.slide)==null?void 0:m.title}).reduce((h,y)=>(qi(h,y),h),[])),p=$(()=>Wi(u.value,r.value)),f=$(()=>ji(p.value));return{route:e,path:n,total:s,currentPage:o,currentPath:l,currentRoute:r,currentSlideId:a,currentLayout:i,nextRoute:c,rawTree:u,treeWithActiveStatuses:p,tree:f,downloadPDF:Ha,next:Wn,nextSlide:qo,openInEditor:NF,prev:jn,prevSlide:Wo}}function lh(e,n,s){const o=Y(0);it(()=>{wt.afterEach(async()=>{await it(),o.value+=1})});const l=$(()=>{var c,u;return o.value,((u=(c=n.value)==null?void 0:c.meta)==null?void 0:u.__clicksElements)||[]}),r=$(()=>{var c,u;return+(((u=(c=n.value)==null?void 0:c.meta)==null?void 0:u.clicks)??l.value.length)}),a=$(()=>s.value<Qe.length-1||e.value<r.value),i=$(()=>s.value>1||e.value>0);return{clicks:e,clicksElements:l,clicksTotal:r,hasNext:a,hasPrev:i}}const iw=["id"],cw=ke({__name:"PrintSlideClick",props:{clicks:{type:Number,required:!0},clicksElements:{type:Array,required:!1},nav:{type:null,required:!0},route:{type:null,required:!0}},emits:["update:clicksElements"],setup(e,{emit:n}){const s=e,o=on(s,"clicksElements",n),l=$(()=>({height:`${Ei}px`,width:`${Rn}px`})),r=un();Nn(()=>Promise.resolve().then(()=>Ub),void 0).then(u=>r.value=u.default);const a=$(()=>s.clicks),i=lh(a,s.nav.currentRoute,s.nav.currentPage),c=$(()=>`${s.route.path.toString().padStart(3,"0")}-${(a.value+1).toString().padStart(2,"0")}`);return Ft(H,He({nav:{...s.nav,...i},configs:Se,themeConfigs:$(()=>Se.themeConfig)})),(u,p)=>{var f;return v(),k("div",{id:c.value,class:"print-slide-container",style:nt(l.value)},[I(T(Zf)),I(T(Ii),{is:(f=u.route)==null?void 0:f.component,"clicks-elements":T(o),"onUpdate:clicksElements":p[0]||(p[0]=h=>Te(o)?o.value=h:null),clicks:a.value,"clicks-disabled":!1,class:We(T(Pi)(u.route)),route:u.route},null,8,["is","clicks-elements","clicks","class","route"]),r.value?(v(),W(T(r),{key:0,page:+u.route.path},null,8,["page"])):me("v-if",!0),I(T(Qf))],12,iw)}}}),zu=V(cw,[["__file","/home/ben/Workspace/demystifying-unicode/node_modules/@slidev/client/internals/PrintSlideClick.vue"]]),uw=ke({__name:"PrintSlide",props:{route:{type:null,required:!0}},setup(e){var r;const n=e;L(H);const s=Y(((r=n.route.meta)==null?void 0:r.__clicksElements)||[]),o=$(()=>n.route),l=oh(o);return(a,i)=>(v(),k(De,null,[I(zu,{"clicks-elements":s.value,"onUpdate:clicksElements":i[0]||(i[0]=c=>s.value=c),clicks:0,nav:T(l),route:o.value},null,8,["clicks-elements","nav","route"]),T(Bo)?me("v-if",!0):(v(!0),k(De,{key:0},Fs(s.value.length,c=>(v(),W(zu,{key:c,clicks:c,nav:T(l),route:o.value},null,8,["clicks","nav","route"]))),128))],64))}}),pw=V(uw,[["__file","/home/ben/Workspace/demystifying-unicode/node_modules/@slidev/client/internals/PrintSlide.vue"]]),dw={id:"print-content"},fw=ke({__name:"PrintContainer",props:{width:{type:Number,required:!0}},setup(e){const n=e;L(H);const s=$(()=>n.width),o=$(()=>n.width/Ln),l=$(()=>s.value/o.value),r=$(()=>l.value<Ln?s.value/Rn:o.value*Ln/Rn);let a=Qe;jt.value.query.range&&(a=sh(a.length,jt.value.query.range).map(u=>a[u-1]));const i=$(()=>({"select-none":!Se.selectable}));return Ft(Zd,r),(c,u)=>(v(),k("div",{id:"print-container",class:We(i.value)},[t("div",dw,[(v(!0),k(De,null,Fs(T(a),p=>(v(),W(pw,{key:p.path,route:p},null,8,["route"]))),128))]),Wt(c.$slots,"controls")],2))}});const hw=V(fw,[["__file","/home/ben/Workspace/demystifying-unicode/node_modules/@slidev/client/internals/PrintContainer.vue"]]),yw=ke({__name:"Print",setup(e){return L(H),Cs(()=>{An?document.body.parentNode.classList.add("print"):document.body.parentNode.classList.remove("print")}),(n,s)=>(v(),k(De,null,[T(An)?(v(),W(Jf,{key:0})):me("v-if",!0),t("div",{id:"page-root",class:"grid grid-cols-[1fr_max-content]",style:nt(T(Di))},[I(hw,{class:"w-full h-full",style:nt({background:"var(--slidev-slide-container-background, black)"}),width:T(xs).width.value},null,8,["style","width"])],4)],64))}});const mw=V(yw,[["__file","/home/ben/Workspace/demystifying-unicode/node_modules/@slidev/client/internals/Print.vue"]]);function Ku(e){return e.startsWith("/")?"/demystifying-unicode/"+e.slice(1):e}function gw(e,n=!1){const s=e&&["#","rgb","hsl"].some(l=>e.indexOf(l)===0),o={background:s?e:void 0,color:e&&!s?"white":void 0,backgroundImage:s?void 0:e?n?`linear-gradient(#0005, #0008), url(${Ku(e)})`:`url("${Ku(e)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return o.background||delete o.background,o}const vw={class:"my-auto w-full"},_w=ke({__name:"cover",props:{background:{default:"https://source.unsplash.com/collection/94734566/1920x1080"}},setup(e){const n=e;L(H);const s=$(()=>gw(n.background,!0));return(o,l)=>(v(),k("div",{class:"slidev-layout cover text-center",style:nt(s.value)},[t("div",vw,[Wt(o.$slots,"default")])],4))}}),Gs=V(_w,[["__file","/home/ben/Workspace/demystifying-unicode/node_modules/@slidev/theme-seriph/layouts/cover.vue"]]),bw=t("h1",null,"Demystifying Unicode",-1),xw=t("p",null,"Unicode, Rust, quirks, and way too much detail.",-1),Aw={__name:"1",setup(e){const n={theme:"seriph",background:"https://source.unsplash.com/collection/94734566/1920x1080",class:"text-center",highlighter:"shiki",lineNumbers:!0,info:`## Unicode, Rust, quirks, and way too much detail.
`,drawings:{persist:!1},transition:"slide-left",hideInToc:!0};return L(H),(s,o)=>(v(),W(Gs,le(oe(n)),{default:O(()=>[bw,xw]),_:1},16))}},ww=V(Aw,[["__file","/@slidev/slides/1.md"]]),Bw={class:"slidev-layout default"},kw={__name:"default",setup(e){return L(H),(n,s)=>(v(),k("div",Bw,[Wt(n.$slots,"default")]))}},Fe=V(kw,[["__file","/home/ben/Workspace/demystifying-unicode/node_modules/@slidev/client/layouts/default.vue"]]),Cw=t("h1",null,"Some sorta outline",-1),Fw=t("ul",null,[t("li",null,"We learn some things about Computers"),t("li",null,"Then, some things about unicode"),t("li",null,"And, some things about unicode in rust"),t("li",null,"Some things you only need to know when you need to know")],-1),Ew={__name:"2",setup(e){const n={hideInToc:!0};return L(H),(s,o)=>(v(),W(Fe,le(oe(n)),{default:O(()=>[Cw,Fw]),_:1},16))}},Dw=V(Ew,[["__file","/@slidev/slides/2.md"]]),Sw=["href","innerHTML"],Tw=["href"],$w=ke({__name:"Link",props:{to:{type:[Number,String],required:!0},title:{type:String,required:!1}},setup(e){return L(H),(n,s)=>{const o=Ws("RouterLink");return!T(An)&&n.title?(v(),W(o,{key:0,to:String(n.to),onClick:s[0]||(s[0]=l=>l.target.blur()),innerHTML:n.title},null,8,["to","innerHTML"])):!T(An)&&!n.title?(v(),W(o,{key:1,to:String(n.to),onClick:s[1]||(s[1]=l=>l.target.blur())},{default:O(()=>[Wt(n.$slots,"default")]),_:3},8,["to"])):T(An)&&n.title?(v(),k("a",{key:2,href:`#${n.to}`,innerHTML:n.title},null,8,Sw)):(v(),k("a",{key:3,href:`#${n.to}`},[Wt(n.$slots,"default")],8,Tw))}}}),Uw=V($w,[["__file","/home/ben/Workspace/demystifying-unicode/node_modules/@slidev/client/builtin/Link.vue"]]),Ow={key:0},Pw={key:1},Iw={key:2},Mw={key:3},Lw={key:4},Rw={key:5},Nw={key:6},qw={key:7},Ww={key:8},jw={key:9},Hw={key:10},Vw={key:11},zw={key:12},Kw={key:13},Gw={key:14},Yw={key:15},Qw={key:16},Zw={key:17},Jw={key:18},Xw={key:19},e6={key:20},t6={key:21},n6={key:22},s6={key:23},o6={key:24},l6={key:25},r6={key:26},a6={key:27},i6={key:28},c6={key:29},u6={key:30},p6={key:31},d6={key:32},f6={key:33},h6={key:34},y6=t("code",null,"str",-1),m6=t("code",null,"[u8]",-1),g6=t("strong",null,"which contents are always valid UTF-8",-1),v6={key:35},_6={key:36},b6={key:37},x6={key:38},A6={key:39},w6={key:40},B6={key:41},k6={key:42},C6={key:43},F6={key:44},E6={key:45},D6={key:46},S6={key:47},T6={key:48},$6={key:49},U6={key:50},O6={key:51},P6={key:52},I6={key:53},M6={key:54},L6={key:55},R6={key:56},N6={key:57},q6={key:58},W6={key:59},j6={key:60},H6=ke({__name:"titles",props:{no:{type:[Number,String],required:!0}},setup(e){return(n,s)=>(v(),k("div",null,[+n.no==1?(v(),k("p",Ow,"Demystifying Unicode")):+n.no==2?(v(),k("p",Pw,"Some sorta outline")):+n.no==3?(v(),k("p",Iw,"Table of contents")):+n.no==4?(v(),k("p",Mw,"History")):+n.no==5?(v(),k("p",Lw,"A bit (🥁鈸) of fundamentals")):+n.no==6?(v(),k("p",Rw,"Abstraction")):+n.no==7?(v(),k("p",Nw,"Abstract? ABSTRACT!")):+n.no==8?(v(),k("p",qw,"undefined")):+n.no==9?(v(),k("p",Ww,"Competing standards")):+n.no==10?(v(),k("p",jw,"About ol ASCII - QQ")):+n.no==11?(v(),k("p",Hw,"How many characters is enough charcters?")):+n.no==12?(v(),k("p",Vw,"Summary")):+n.no==13?(v(),k("p",zw,"Unicode")):+n.no==14?(v(),k("p",Kw,"Why Unicode?")):+n.no==15?(v(),k("p",Gw,"undefined")):+n.no==16?(v(),k("p",Yw,"Unicode to the resque")):+n.no==17?(v(),k("p",Qw,"New Terminology")):+n.no==18?(v(),k("p",Zw,"undefined")):+n.no==19?(v(),k("p",Jw,"undefined")):+n.no==20?(v(),k("p",Xw,"Glyphemes")):+n.no==21?(v(),k("p",e6,"What is the difference between")):+n.no==22?(v(),k("p",t6,"undefined")):+n.no==23?(v(),k("p",n6,"Encoding")):+n.no==24?(v(),k("p",s6,"undefined")):+n.no==25?(v(),k("p",o6,"Woo options!")):+n.no==26?(v(),k("p",l6,"UTF-8 is the king of the web")):+n.no==27?(v(),k("p",r6,"Nuts and bolts of UTF-8")):+n.no==28?(v(),k("p",a6,"Let’s encode!")):+n.no==29?(v(),k("p",i6,"Let’s encode!")):+n.no==30?(v(),k("p",c6,"Summary")):+n.no==31?(v(),k("p",u6,"Unicode in Rust")):+n.no==32?(v(),k("p",p6,"undefined")):+n.no==33?(v(),k("p",d6,"undefined")):+n.no==34?(v(),k("p",f6,"String slices")):+n.no==35?(v(),k("p",h6,[d("A String slice ("),y6,d(") is just a slice of bytes ("),m6,d("), "),g6,d(".")])):+n.no==36?(v(),k("p",v6,"Lets make some strings")):+n.no==37?(v(),k("p",_6,"Creating strings")):+n.no==38?(v(),k("p",b6,"Creating Strings")):+n.no==39?(v(),k("p",x6,"Creating strings")):+n.no==40?(v(),k("p",A6,"See, creating strings is easy!")):+n.no==41?(v(),k("p",w6,"UTF8Error")):+n.no==42?(v(),k("p",B6,"Invalid UTF-8")):+n.no==43?(v(),k("p",k6,"Where Enforced UTF-8 can go wrong")):+n.no==44?(v(),k("p",C6,"Reading and Writing")):+n.no==45?(v(),k("p",F6,"Reading and Writing")):+n.no==46?(v(),k("p",E6,"Read and Writing - JSON")):+n.no==47?(v(),k("p",D6,"Conventially UTF-8 vs. Gauranteed")):+n.no==48?(v(),k("p",S6,"Summary")):+n.no==49?(v(),k("p",T6,"Quirks")):+n.no==50?(v(),k("p",$6,"Can we just know which UTF Encoding by looking at the bytes?")):+n.no==51?(v(),k("p",U6,"undefined")):+n.no==52?(v(),k("p",O6,"Streets!")):+n.no==53?(v(),k("p",P6,"Casemapping!")):+n.no==54?(v(),k("p",I6,"Composition")):+n.no==55?(v(),k("p",M6,"Emoji Composition")):+n.no==56?(v(),k("p",L6,"Emoji Composition")):+n.no==57?(v(),k("p",R6,"Emoji Composition")):+n.no==58?(v(),k("p",N6,"Digraphs/ligatures")):+n.no==59?(v(),k("p",q6,"Flags")):+n.no==60?(v(),k("p",W6,"Unicode Tags")):+n.no==61?(v(),k("p",j6,"THE END")):me("v-if",!0)]))}}),V6=V(H6,[["__file","/@slidev/titles.md"]]),z6=ke({__name:"TocList",props:{level:{type:Number,required:!0,default:1},list:{type:Array,required:!0},listClass:{type:[String,Array],required:!1}},setup(e){const n=e;L(H);const s=$(()=>[...Jd(n.listClass||[]),"slidev-toc-list",`slidev-toc-list-level-${n.level}`]);return(o,l)=>{const r=Uw,a=Ws("TocList",!0);return o.list&&o.list.length>0?(v(),k("ol",{key:0,class:We(s.value)},[(v(!0),k(De,null,Fs(o.list,i=>(v(),k("li",{key:i.path,class:We(["slidev-toc-item",[{"slidev-toc-item-active":i.active},{"slidev-toc-item-parent-active":i.activeParent}]])},[I(r,{to:i.path},{default:O(()=>[I(T(V6),{no:i.path},null,8,["no"])]),_:2},1032,["to"]),i.children.length>0?(v(),W(a,{key:0,level:o.level+1,list:i.children,"list-class":o.listClass},null,8,["level","list","list-class"])):me("v-if",!0)],2))),128))],2)):me("v-if",!0)}}});const K6=V(z6,[["__file","/home/ben/Workspace/demystifying-unicode/node_modules/@slidev/client/builtin/TocList.vue"]]),G6=ke({__name:"Toc",props:{columns:{type:[String,Number],required:!1,default:1},listClass:{type:[String,Array],required:!1,default:""},maxDepth:{type:[String,Number],required:!1,default:1/0},minDepth:{type:[String,Number],required:!1,default:1},mode:{type:String,required:!1,default:"all"}},setup(e){const n=e,s=L(H);function o(i,c=1){if(c>Number(n.maxDepth))return[];if(c<Number(n.minDepth)){const u=i.find(p=>p.active||p.activeParent);return u?o(u.children,c+1):[]}return i.map(u=>({...u,children:o(u.children,c+1)}))}function l(i){return i.filter(c=>c.active||c.activeParent||c.hasActiveParent).map(c=>({...c,children:l(c.children)}))}function r(i){const c=i.some(u=>u.active||u.activeParent||u.hasActiveParent);return i.filter(()=>c).map(u=>({...u,children:r(u.children)}))}const a=$(()=>{const i=s==null?void 0:s.nav.tree;if(!i)return[];let c=o(i);return n.mode==="onlyCurrentTree"?c=l(c):n.mode==="onlySiblings"&&(c=r(c)),c});return(i,c)=>{const u=K6;return v(),k("div",{class:"slidev-toc",style:nt(`column-count:${i.columns}`)},[I(u,{level:1,list:a.value,"list-class":i.listClass},null,8,["list","list-class"])],4)}}}),Y6=V(G6,[["__file","/home/ben/Workspace/demystifying-unicode/node_modules/@slidev/client/builtin/Toc.vue"]]),Q6=t("h1",null,"Table of contents",-1),Z6={__name:"3",setup(e){const n={hideInToc:!0};return L(H),(s,o)=>{const l=Y6;return v(),W(Fe,le(oe(n)),{default:O(()=>[Q6,I(l,{maxDepth:"1"})]),_:1},16)}}},J6=V(Z6,[["__file","/@slidev/slides/3.md"]]),X6=t("h1",null,"History",-1),e2={__name:"4",setup(e){const n={layout:"cover",hide:!1,srcSequence:"./pages/01-history.md"};return L(H),(s,o)=>(v(),W(Gs,le(oe(n)),{default:O(()=>[X6]),_:1},16))}},t2=V(e2,[["__file","/@slidev/slides/4.md"]]),Gu=["ul","ol"],$t=ke({props:{depth:{type:[Number,String],default:1},every:{type:Number,default:1},at:{type:[Number,String],default:null},hide:{type:Boolean,default:!1},fade:{type:Boolean,default:!1}},render(){var i,c;const e=qt("click"),n=qt("after"),s=(u,p,f)=>Ke(u,[[p,f,"",{hide:this.hide,fade:this.fade}]]);let o=(c=(i=this.$slots).default)==null?void 0:c.call(i);if(!o)return;o=Jd(o);const l=(u,p=1)=>{let f=0;return[u.map(y=>{if(!pn(y))return y;if(Gu.includes(y.type)&&Array.isArray(y.children)){const[m,b]=a(y.children,p+1);return f+=b,tt(y,{},[m])}return tt(y)}),f]};let r=0;const a=(u,p=1)=>{let f=0;return[u.map(y=>{if(!pn(y)||y.type===ut)return y;const m=f%this.every===0?e:n;let b,w=0;if(p<+this.depth&&Array.isArray(y.children)){const[B,x]=l(y.children,p);b=tt(y,{},[B]),w=x,f+=x+1}else b=tt(y),f++;const A=this.at!=null?Number(this.at)+Math.floor(r/this.every)+p:(p-1-w).toString();return r++,s(b,m,typeof A=="string"&&!A.startsWith("-")?`+${A}`:A)}),f]};return o.length===1&&Gu.includes(o[0].type)&&Array.isArray(o[0].children)?tt(o[0],{},[a(o[0].children)[0]]):a(o)[0]}}),n2=t("h2",null,"A bit (🥁鈸) of fundamentals",-1),s2=t("div",{class:"mt-5"},[t("blockquote",null,[t("p",null,"Computers represent information as 1’s and 0’s"),t("ul",null,[t("li",null,"Literally everyone, since forever")])])],-1),o2=t("p",null,"Multiple bits can be put together to make different structures.",-1),l2=t("p",null,"Those structures are inherently computer orientated - not human orientated:",-1),r2=t("ul",null,[t("li",null,[t("p",null,"8 bits makes a byte")]),t("li",null,[t("p",null,"4/8 bytes makes a word on 32/64 bit architectures respectively"),t("p",null,[t("sup",null,'(last you’ll heard of "words" in this presentation)')])])],-1),a2={__name:"5",setup(e){const n={hide:!1,srcSequence:"./pages/01-history.md"};return L(H),(s,o)=>{const l=$t;return v(),W(Fe,le(oe(n)),{default:O(()=>[n2,s2,I(l,null,{default:O(()=>[o2,l2,r2]),_:1})]),_:1},16)}}},i2=V(a2,[["__file","/@slidev/slides/5.md"]]),ot=ke({props:{at:{type:[Number,String],default:null},hide:{type:Boolean,default:!1},fade:{type:Boolean,default:!1}},render(){return I($t,{every:99999,at:this.at,hide:this.hide,fade:this.fade},{default:this.$slots.default})}}),c2=t("h2",null,"Abstraction",-1),u2=t("div",{class:"mt-5"},[t("blockquote",null,[t("p",null,"Let’s make an abstraction so we can understand things better"),t("ul",null,[t("li",null,"Literally every developer, since forever")])])],-1),p2=t("p",null,[t("code",null,"C"),d(" abstracted things a little further:")],-1),d2=t("ul",null,[t("li",null,[t("p",null,[t("code",null,"bool"),d(" is a 1 bit")])]),t("li",null,[t("p",null,[t("code",null,"char"),d(" is a 8 bits")])]),t("li",null,[t("p",null,[t("code",null,"int"),d(" is ambiguous")]),t("p",null,[d('More common "nowadays": '),t("code",null,"uint8_t"),d(", "),t("code",null,"uint32_t"),d(", "),t("code",null,"int8_t"),d(", etc")])]),t("li",null,[t("p",null,[t("code",null,"long"),d(" also ambiguous, but >= "),t("code",null,"int")])])],-1),f2=t("p",null,[d("But - what really "),t("strong",null,"is"),d(" a "),t("code",null,"char"),d("?")],-1),h2=t("p",null,"And what really are characters?",-1),y2={__name:"6",setup(e){const n={hide:!1,srcSequence:"./pages/01-history.md"};return L(H),(s,o)=>{const l=$t,r=ot;return v(),W(Fe,le(oe(n)),{default:O(()=>[c2,u2,p2,I(l,null,{default:O(()=>[d2]),_:1}),I(r,null,{default:O(()=>[f2,h2]),_:1})]),_:1},16)}}},m2=V(y2,[["__file","/@slidev/slides/6.md"]]),g2=t("h2",null,"Abstract? ABSTRACT!",-1),v2=t("p",null,"Quiz time - what does this say:",-1),_2=t("pre",{class:"shiki-container"},[t("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#dbd7ca"}},"01001000 01100101 01101100 01101100 01101111 00100000")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#dbd7ca"}},"01010111 01101111 01110010 01101100 01100100 00100001")])])]),t("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#393a34"}},"01001000 01100101 01101100 01101100 01101111 00100000")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393a34"}},"01010111 01101111 01110010 01101100 01100100 00100001")])])])],-1),b2=t("p",null,[t("code",null,"00100000"),d(" = "),t("code",null,"0x20"),d(" = "),t("code",null," "),t("span",{class:"pl-15"},[t("code",null,"00100001"),d(" = "),t("code",null,"0x21"),d(" = "),t("code",null,"!")])],-1),x2=t("hr",null,null,-1),A2=t("pre",{class:"shiki-container"},[t("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#dbd7ca"}},"0100 1000  =  0x48  =  'H'")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#dbd7ca"}},"0110 0101  =  0x65  =  'e'")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#dbd7ca"}},"0110 1100  =  0x6c  =  'l'")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#dbd7ca"}},"0110 1100  =  0x6c  =  'l'")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#dbd7ca"}},"0110 1111  =  0x6f  =  'o'")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#dbd7ca"}},"0010 0000  =  0x20  =  ' '")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#dbd7ca"}},"0101 0111  =  0x57  =  'W'")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#dbd7ca"}},"0110 1111  =  0x6f  =  'o'")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#dbd7ca"}},"0111 0010  =  0x72  =  'r'")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#dbd7ca"}},"0110 1100  =  0x6c  =  'l'")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#dbd7ca"}},"0110 0100  =  0x64  =  'd'")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#dbd7ca"}},"0010 0001  =  0x21  =  '!'")])])]),t("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#393a34"}},"0100 1000  =  0x48  =  'H'")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393a34"}},"0110 0101  =  0x65  =  'e'")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393a34"}},"0110 1100  =  0x6c  =  'l'")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393a34"}},"0110 1100  =  0x6c  =  'l'")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393a34"}},"0110 1111  =  0x6f  =  'o'")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393a34"}},"0010 0000  =  0x20  =  ' '")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393a34"}},"0101 0111  =  0x57  =  'W'")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393a34"}},"0110 1111  =  0x6f  =  'o'")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393a34"}},"0111 0010  =  0x72  =  'r'")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393a34"}},"0110 1100  =  0x6c  =  'l'")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393a34"}},"0110 0100  =  0x64  =  'd'")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393a34"}},"0010 0001  =  0x21  =  '!'")])])])],-1),w2={__name:"7",setup(e){const n={hide:!1,srcSequence:"./pages/01-history.md"};return L(H),(s,o)=>{const l=ot;return v(),W(Fe,le(oe(n)),{default:O(()=>[g2,v2,_2,I(l,null,{default:O(()=>[b2]),_:1}),I(l,null,{default:O(()=>[x2,A2]),_:1})]),_:1},16)}}},B2=V(w2,[["__file","/@slidev/slides/7.md"]]),rh="/demystifying-unicode/standards.png",k2={class:"slidev-layout center h-full grid place-content-center"},C2={class:"my-auto"},F2={__name:"center",setup(e){return L(H),(n,s)=>(v(),k("div",k2,[t("div",C2,[Wt(n.$slots,"default")])]))}},et=V(F2,[["__file","/home/ben/Workspace/demystifying-unicode/node_modules/@slidev/client/layouts/center.vue"]]),E2=t("div",{class:"flex flex-col"},[t("img",{src:rh,class:"center"}),t("p",{class:"text-3"}," Alt: Fortunately, the charging one has been solved now that we've all standardized on mini-USB. Or is it micro-USB? Shit. ")],-1),D2=t("footer",null,[t("p",null,[d("Source: "),t("a",{href:"https://xkcd.com/927/",target:"_blank",rel:"noopener"},"https://xkcd.com/927/")])],-1),S2={__name:"8",setup(e){const n={layout:"center",hide:!1,srcSequence:"./pages/01-history.md"};return L(H),(s,o)=>(v(),W(et,le(oe(n)),{default:O(()=>[E2,D2]),_:1},16))}},T2=V(S2,[["__file","/@slidev/slides/8.md"]]),$2=t("h2",null,"Competing standards",-1),U2=t("ul",null,[t("li",null,[t("s",null,"ANSI (American National Standards Institue) Characters"),d(" Windows code pages, Code Page 437")]),t("li",null,"ASCII (American Standard Code for Information Interchange) Characters")],-1),O2={class:"mt-10"},P2=t("pre",{class:"shiki-container"},[t("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#dbd7ca"}},'┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫ Cool "App" 3000 ┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓')]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#dbd7ca"}},"┃                                                                                     ┃ ")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#dbd7ca"}},"┃                                                                                     ┃ ")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#dbd7ca"}},"┃                                                                                     ┃ ")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#dbd7ca"}},"┃                                                                                     ┃ ")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#dbd7ca"}},"┃                    ┏━━━━━━━━━━━━━━━━━━┫ Prompt ┣━━━━━━━━━━━━━━━━┓                   ┃")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#dbd7ca"}},"┃                    ┃                                            ┃                   ┃ ")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#dbd7ca"}},"┃                    ┃ DO YOU WANT YOUR LANGAUGE TO BE SUPPORTED? ┃                   ┃")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#dbd7ca"}},"┃                    ┃                                            ┃                   ┃")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#dbd7ca"}},"┃                    ┗━━━━━━━━━━━━━━━━━━┫ No ┣━┫ >Nah not even< ┣━┛                   ┃")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#dbd7ca"}},"┃                                                                                     ┃ ")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#dbd7ca"}},"┃                                                                                     ┃ ")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#dbd7ca"}},"┃                                                                                     ┃ ")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#dbd7ca"}},"┃                                                                                     ┃ ")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#dbd7ca"}},"┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛")])])]),t("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#393a34"}},'┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫ Cool "App" 3000 ┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓')]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393a34"}},"┃                                                                                     ┃ ")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393a34"}},"┃                                                                                     ┃ ")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393a34"}},"┃                                                                                     ┃ ")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393a34"}},"┃                                                                                     ┃ ")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393a34"}},"┃                    ┏━━━━━━━━━━━━━━━━━━┫ Prompt ┣━━━━━━━━━━━━━━━━┓                   ┃")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393a34"}},"┃                    ┃                                            ┃                   ┃ ")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393a34"}},"┃                    ┃ DO YOU WANT YOUR LANGAUGE TO BE SUPPORTED? ┃                   ┃")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393a34"}},"┃                    ┃                                            ┃                   ┃")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393a34"}},"┃                    ┗━━━━━━━━━━━━━━━━━━┫ No ┣━┫ >Nah not even< ┣━┛                   ┃")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393a34"}},"┃                                                                                     ┃ ")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393a34"}},"┃                                                                                     ┃ ")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393a34"}},"┃                                                                                     ┃ ")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393a34"}},"┃                                                                                     ┃ ")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393a34"}},"┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛")])])])],-1),I2=t("p",null,"🙇 IBM - You helped us draw instead of supporting languages.",-1),M2=[P2,I2],L2={__name:"9",setup(e){const n={hide:!1,srcSequence:"./pages/01-history.md"};return L(H),(s,o)=>{const l=qt("click");return v(),W(Fe,le(oe(n)),{default:O(()=>[$2,U2,Ke((v(),k("div",O2,M2)),[[l]])]),_:1},16)}}},R2=V(L2,[["__file","/@slidev/slides/9.md"]]),N2="/demystifying-unicode/Codepage-437.png",q2="/demystifying-unicode/Codepage-737.png",W2=t("h2",null,"About ol ASCII - QQ",-1),j2=t("div",{class:"flex flex-row flex-items-stretch"},[t("div",{class:"text-center"},[t("p",null,[t("strong",null,"IBM 437")]),t("img",{class:"w-120",src:N2,alt:"An example of the characters on the commonly used IBM437 codepage"})]),t("div",{class:"text-center"},[t("p",null,[t("strong",null,"IBM 737")]),t("img",{class:"w-120 mt-5",src:q2,alt:"An example of the characters on IBM737 which shows greek characters above the 0x7F range"})])],-1),H2=t("div",{class:"absolute border-5 top-35 left-12 right-12 bottom-76 border-red"},null,-1),V2=t("ul",null,[t("li",null,[d("ASCII standardized 0x00…0x7F"),t("pre",{class:"shiki-container"},[t("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#dbd7ca"}},"␀␁␂␃␄␅␆␇␈␉␊␋␌␍␎␏␐␑␒␓␔␕␖␗␘␙␚␛␜␝␞␟")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#dbd7ca"}},`␠!"#$%&'()*+,-./0123456789:;<=>?`)]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#dbd7ca"}},"@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#dbd7ca"}},"`abcdefghijklmnopqrstuvwxyz{|}~␡")])])]),t("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#393a34"}},"␀␁␂␃␄␅␆␇␈␉␊␋␌␍␎␏␐␑␒␓␔␕␖␗␘␙␚␛␜␝␞␟")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393a34"}},`␠!"#$%&'()*+,-./0123456789:;<=>?`)]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393a34"}},"@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393a34"}},"`abcdefghijklmnopqrstuvwxyz{|}~␡")])])])])]),t("li",null,[d("∴ "),t("code",null,"0x00..0x7F"),d(" was common between many code pages")])],-1),z2={__name:"10",setup(e){const n={hide:!1,srcSequence:"./pages/01-history.md"};return L(H),(s,o)=>{const l=ot,r=$t;return v(),W(Fe,le(oe(n)),{default:O(()=>[W2,j2,I(l,null,{default:O(()=>[H2]),_:1}),I(r,null,{default:O(()=>[V2]),_:1})]),_:1},16)}}},K2=V(z2,[["__file","/@slidev/slides/10.md"]]),G2=t("h2",null,"How many characters is enough charcters?",-1),Y2=t("p",{class:"pt-5"},[t("p",null,[t("strong",null,"DIN 91379"),d(' - Characters and character sequences for processing names and data exchange in europe"')])],-1),Q2=t("table",null,[t("thead",null,[t("tr",null,[t("th"),t("th")])]),t("tbody",null,[t("tr",null,[t("td",null,"Base Latin Letters: 649"),t("td",null,"enl: 42")]),t("tr",null,[t("td",null,"Combinging Diacritics: 19"),t("td",null,"bnlreq: 17")]),t("tr",null,[t("td",null,"Greek Letters: 68"),t("td",null,"bnl: 59")]),t("tr",null,[t("td",null,"Cyrillic Letters: 61"),t("td",null,"bnlopt: 8")]),t("tr",null,[t("td"),t("td",null,"bnlnot: 2")])])],-1),Z2=t("p",null,[t("strong",null,"💣 8 bits isn’t going to be enough 💣")],-1),J2=t("footer",null,[t("p",null,[d("DIN 91379: "),t("a",{href:"https://github.com/String-Latin/DIN-91379-Characters-and-Sequences",target:"_blank",rel:"noopener"},"https://github.com/String-Latin/DIN-91379-Characters-and-Sequences")])],-1),X2={__name:"11",setup(e){const n={hide:!1,srcSequence:"./pages/01-history.md"};return L(H),(s,o)=>{const l=$t;return v(),W(Fe,le(oe(n)),{default:O(()=>[G2,Y2,Q2,I(l,null,{default:O(()=>[Z2]),_:1}),J2]),_:1},16)}}},eB=V(X2,[["__file","/@slidev/slides/11.md"]]),tB=t("h2",null,"Summary",-1),nB=t("p",null,[d("Computers know bits - "),t("code",null,"1"),d("s and "),t("code",null,"0"),d("s")],-1),sB=t("p",null,"Bits are not human structures - so we abstract",-1),oB=t("p",null,[t("code",null,"char"),d(" isn’t a character, it’s just a "),t("code",null,"uint8_t"),d(" with a fancy name")],-1),lB=t("p",null,"We need a whole lot more bits if we more than just names and dates in europe",-1),rB={__name:"12",setup(e){const n={layout:"center",hide:!1,srcSequence:"./pages/01-history.md"};return L(H),(s,o)=>{const l=$t;return v(),W(et,le(oe(n)),{default:O(()=>[tB,I(l,null,{default:O(()=>[nB,sB,oB,lB]),_:1})]),_:1},16)}}},aB=V(rB,[["__file","/@slidev/slides/12.md"]]),iB=t("h1",null,"Unicode",-1),cB={__name:"13",setup(e){const n={layout:"cover",hide:!1,srcSequence:"./pages/02-unicode.md"};return L(H),(s,o)=>(v(),W(Gs,le(oe(n)),{default:O(()=>[iB]),_:1},16))}},uB=V(cB,[["__file","/@slidev/slides/13.md"]]),pB=t("h2",null,"Why Unicode?",-1),dB=t("ol",null,[t("li",null,"Codepages/charmaps? System dependant"),t("li",null,"Unique characters? Duplication everywhere"),t("li",null,"Display more than one codepage/charmap at a time? ␎␏␎␏␎␏␎␏"),t("li",null,"Text from outside of Europe? :ha:")],-1),fB={__name:"14",setup(e){const n={hide:!1,srcSequence:"./pages/02-unicode.md"};return L(H),(s,o)=>{const l=$t;return v(),W(Fe,le(oe(n)),{default:O(()=>[pB,I(l,null,{default:O(()=>[dB]),_:1})]),_:1},16)}}},hB=V(fB,[["__file","/@slidev/slides/14.md"]]);const yB=e=>(vi("data-v-d13ddf34"),e=e(),_i(),e),mB=yB(()=>t("div",{class:"absolute top-0 left-0 the-internet flex justify-center items-center text-30"},[t("p",{class:"text-shadow-xl color-white text-shadow-color-red"},"The Internet")],-1)),gB={__name:"15",setup(e){const n={layout:"center",hide:!1,srcSequence:"./pages/02-unicode.md"};return L(H),(s,o)=>(v(),W(et,le(oe(n)),{default:O(()=>[mB]),_:1},16))}},vB=V(gB,[["__scopeId","data-v-d13ddf34"],["__file","/@slidev/slides/15.md"]]),_B=t("h2",null,"Unicode to the resque",-1),bB=t("ul",null,[t("li",null,"Universal"),t("li",null,"Efficient"),t("li",null,"Unambiguous")],-1),xB={__name:"16",setup(e){const n={layout:"center",hide:!1,srcSequence:"./pages/02-unicode.md"};return L(H),(s,o)=>{const l=ot;return v(),W(et,le(oe(n)),{default:O(()=>[_B,I(l,null,{default:O(()=>[bB]),_:1})]),_:1},16)}}},AB=V(xB,[["__file","/@slidev/slides/16.md"]]),wB=t("h2",null,"New Terminology",-1),BB=t("table",null,[t("thead",null,[t("tr",null,[t("th"),t("th"),t("th")])]),t("tbody",null,[t("tr",null,[t("td",null,"Glyph"),t("td",null,"‽"),t("td",null,"How it actually looks, defined by the font")]),t("tr",null,[t("td",null,"Codepoint"),t("td",null,"U+203D"),t("td",null,"Unique identifier for this character")]),t("tr",null,[t("td",null,"Character"),t("td",null,"Interrobang"),t("td",null,"Description of the codepoint")]),t("tr",null,[t("td",null,"Block"),t("td",null,"General Punctuation, U+2000 - U+206F"),t("td",null,"The range of codepoints for a specific purpose")]),t("tr",null,[t("td",null,"Plane"),t("td",null,"Basic Multilingual Plane, U+0000 - U+FFFF"),t("td",null,"The wide group of codepoints")])])],-1),kB=t("footer",null,[t("p",null,[d("Ref: Characters and Glyphs "),t("a",{href:"https://www.unicode.org/versions/Unicode15.0.0/ch01.pdf",target:"_blank",rel:"noopener"},"https://www.unicode.org/versions/Unicode15.0.0/ch01.pdf")])],-1),CB={__name:"17",setup(e){const n={hide:!1,srcSequence:"./pages/02-unicode.md"};return L(H),(s,o)=>(v(),W(Fe,le(oe(n)),{default:O(()=>[wB,BB,kB]),_:1},16))}},FB=V(CB,[["__file","/@slidev/slides/17.md"]]),EB="/demystifying-unicode/glyph-codepoint-character.jpg",DB=t("img",{src:EB,alt:"Triple spiderman meme, glyph, codepoint, character pointing at each other"},null,-1),SB={__name:"18",setup(e){const n={layout:"center",hide:!1,srcSequence:"./pages/02-unicode.md"};return L(H),(s,o)=>(v(),W(et,le(oe(n)),{default:O(()=>[DB]),_:1},16))}},TB=V(SB,[["__file","/@slidev/slides/18.md"]]),$B="/demystifying-unicode/no_chars_yes_glyphs.jpg",UB=t("img",{src:$B,alt:"Drake no: characters. Drake yes: glyphs"},null,-1),OB={__name:"19",setup(e){const n={layout:"center",hide:!1,srcSequence:"./pages/02-unicode.md"};return L(H),(s,o)=>(v(),W(et,le(oe(n)),{default:O(()=>[UB]),_:1},16))}},PB=V(OB,[["__file","/@slidev/slides/19.md"]]),IB=t("h2",null,"Glyphemes",-1),MB=t("div",{class:"codepoint absolute top-50 left-50"},[t("div",{class:"glyph"},"é"),t("div",{class:"code"},"U+00e9")],-1),LB=t("div",{class:"codepoint absolute top-50 right-50"},[t("div",{class:"glyph"},"é"),t("div",{class:"code"},"U+0065 + U+0301")],-1),RB={__name:"20",setup(e){const n={hide:!1,srcSequence:"./pages/02-unicode.md"};return L(H),(s,o)=>(v(),W(Fe,le(oe(n)),{default:O(()=>[IB,MB,LB]),_:1},16))}},NB=V(RB,[["__file","/@slidev/slides/20.md"]]),qB=t("h2",null,"What is the difference between",-1),WB=t("h2",null,[t("code",null,"Unicode")],-1),jB=t("h2",null,"and",-1),HB=t("h2",null,[t("code",null,"UTF-8")],-1),VB={__name:"21",setup(e){const n={layout:"center",hide:!1,srcSequence:"./pages/02-unicode.md"};return L(H),(s,o)=>(v(),W(et,le(oe(n)),{default:O(()=>[qB,WB,jB,HB]),_:1},16))}},zB=V(VB,[["__file","/@slidev/slides/21.md"]]),KB=t("div",{class:"text-7"},[t("p",null,[t("code",null,"Unicode"),d(' - "The Standard"')]),t("p",null,[t("code",null,"UTF-8"),d(" - Encoding")])],-1),GB={__name:"22",setup(e){const n={layout:"center",hide:!1,srcSequence:"./pages/02-unicode.md"};return L(H),(s,o)=>(v(),W(et,le(oe(n)),{default:O(()=>[KB]),_:1},16))}},YB=V(GB,[["__file","/@slidev/slides/22.md"]]),QB=t("h2",null,"Encoding",-1),ZB=t("p",null,[t("strong",null,"DIN 91379"),d(": 925 characters")],-1),JB=t("p",null,"At least 10 bits - (Names/Data exchange in Europe)",-1),XB=t("p",null,"Unicode:",-1),ek=t("ul",null,[t("li",null,"Supports 1048576 Characters"),t("li",null,"Code space: U+000000 - U+10FFFF"),t("li",null,"Which requires at least 21 bits")],-1),tk=t("footer",null,[t("p",null,"Fun fact: Unicode <2.0 code space was 16-bit wide.")],-1),nk={__name:"23",setup(e){const n={hide:!1,srcSequence:"./pages/02-unicode.md"};return L(H),(s,o)=>{const l=$t;return v(),W(Fe,le(oe(n)),{default:O(()=>[QB,I(l,null,{default:O(()=>[ZB,JB,XB,ek]),_:1}),tk]),_:1},16)}}},sk=V(nk,[["__file","/@slidev/slides/23.md"]]),ok=t("div",{class:"flex flex-col"},[t("img",{src:rh,class:"center"}),t("p",{class:"text-3"}," Alt: Fortunately, the charging one has been solved now that we've all standardized on mini-USB. Or is it micro-USB? Shit. ")],-1),lk=t("footer",null,[t("p",null,[d("Source: "),t("a",{href:"https://xkcd.com/927/",target:"_blank",rel:"noopener"},"https://xkcd.com/927/")])],-1),rk={__name:"24",setup(e){const n={layout:"center",hide:!1,srcSequence:"./pages/02-unicode.md"};return L(H),(s,o)=>(v(),W(et,le(oe(n)),{default:O(()=>[ok,lk]),_:1},16))}},ak=V(rk,[["__file","/@slidev/slides/24.md"]]),ik=t("h2",null,"Woo options!",-1),ck=t("p",null,"😻 = U+1F63B = Smiling cat face with heart-shaped eyes",-1),uk=t("table",null,[t("thead",null,[t("tr",null,[t("th"),t("th")])]),t("tbody",null,[t("tr",null,[t("td",null,"UTF-8"),t("td",null,[t("code",null,"0xF0 0x9F 0x98 0xBB")])]),t("tr",null,[t("td",null,"UTF-16BE*"),t("td",null,[t("code",null,"0xD83D 0xDE3B")])]),t("tr",null,[t("td",null,"UTF-16LE"),t("td",null,[t("code",null,"0x3DD8 0x3BDE")])]),t("tr",null,[t("td",null,"UTF-32BE*"),t("td",null,[t("code",null,"0x0001F63B")])]),t("tr",null,[t("td",null,"UTF-32LE"),t("td",null,[t("code",null,"0x3BF60100")])])])],-1),pk=t("p",null,[d("* BE encodings are the default if no BOM "),t("code",null,"\\xFEFF")],-1),dk=t("footer",null,[t("p",null,[d("UTF-21 exists - but it’s a toy encoding hobby project"),t("br")])],-1),fk={__name:"25",setup(e){const n={hide:!1,srcSequence:"./pages/02-unicode.md"};return L(H),(s,o)=>{const l=ot;return v(),W(Fe,le(oe(n)),{default:O(()=>[ik,ck,I(l,null,{default:O(()=>[uk,pk]),_:1}),dk]),_:1},16)}}},hk=V(fk,[["__file","/@slidev/slides/25.md"]]),yk=t("h2",null,"UTF-8 is the king of the web",-1),mk={__name:"26",setup(e){const n={layout:"center",hide:!1,srcSequence:"./pages/02-unicode.md"};return L(H),(s,o)=>(v(),W(et,le(oe(n)),{default:O(()=>[yk]),_:1},16))}},gk=V(mk,[["__file","/@slidev/slides/26.md"]]),vk=t("h2",null,"Nuts and bolts of UTF-8",-1),_k=t("p",null,"Key points:",-1),bk=t("ul",null,[t("li",null,"Variable width (1-4 bytes)"),t("li",null,"∴ Variable offset between characters"),t("li",null,"The default in Rust (+many more)")],-1),xk=t("hr",null,null,-1),Ak=t("table",null,[t("thead",null,[t("tr",null,[t("th",null,"Code point range"),t("th",null,"Byte 1"),t("th",null,"Byte 2"),t("th",null,"Byte 3"),t("th",null,"Byte 4"),t("th",null,"Bit Capacity"),t("th",null,"Code points")])]),t("tbody",null,[t("tr",null,[t("td",null,[t("code",null,"0x000000..0x00007F")]),t("td",null,[t("code",null,"0xxxxxxx")]),t("td"),t("td"),t("td"),t("td",null,"7"),t("td",null,"128")]),t("tr",null,[t("td",null,[t("code",null,"0x000080..0x0007FF")]),t("td",null,[t("code",null,"110xxxxx")]),t("td",null,[t("code",null,"10xxxxxx")]),t("td"),t("td"),t("td",null,"11"),t("td",null,"1920")]),t("tr",null,[t("td",null,[t("code",null,"0x000800..0x00FFFF")]),t("td",null,[t("code",null,"1110xxxx")]),t("td",null,[t("code",null,"10xxxxxx")]),t("td",null,[t("code",null,"10xxxxxx")]),t("td"),t("td",null,"16"),t("td",null,"63488")]),t("tr",null,[t("td",null,[t("code",null,"0x010000..0x10FFFF")]),t("td",null,[t("code",null,"11110xxx")]),t("td",null,[t("code",null,"10xxxxxx")]),t("td",null,[t("code",null,"10xxxxxx")]),t("td",null,[t("code",null,"10xxxxxx")]),t("td",null,"21"),t("td",null,"1mil+")])])],-1),wk={__name:"27",setup(e){const n={hide:!1,srcSequence:"./pages/02-unicode.md"};return L(H),(s,o)=>{const l=ot;return v(),W(Fe,le(oe(n)),{default:O(()=>[vk,_k,bk,I(l,null,{default:O(()=>[xk,Ak]),_:1})]),_:1},16)}}},Bk=V(wk,[["__file","/@slidev/slides/27.md"]]),kk=["width","height"],Ck=["id"],Fk=["fill"],Ek=["x1","y1","x2","y2","stroke","stroke-width","marker-end"],Dk=ke({__name:"Arrow",props:{x1:{type:[Number,String],required:!0},y1:{type:[Number,String],required:!0},x2:{type:[Number,String],required:!0},y2:{type:[Number,String],required:!0},width:{type:[Number,String],required:!1},color:{type:String,required:!1}},setup(e){L(H);const s=Ag("abcedfghijklmn",10)();return(o,l)=>(v(),k("svg",{class:"absolute left-0 top-0 pointer-events-none",width:Math.max(+o.x1,+o.x2)+50,height:Math.max(+o.y1,+o.y2)+50},[t("defs",null,[t("marker",{id:T(s),markerUnits:"strokeWidth",markerWidth:10,markerHeight:7,refX:"9",refY:"3.5",orient:"auto"},[t("polygon",{points:"0 0, 10 3.5, 0 7",fill:o.color||"currentColor"},null,8,Fk)],8,Ck)]),t("line",{x1:+o.x1,y1:+o.y1,x2:+o.x2,y2:+o.y2,stroke:o.color||"currentColor","stroke-width":o.width||2,"marker-end":`url(#${T(s)})`},null,8,Ek)],8,kk))}}),Ni=V(Dk,[["__file","/home/ben/Workspace/demystifying-unicode/node_modules/@slidev/client/builtin/Arrow.vue"]]),Sk=t("h2",null,"Let’s encode!",-1),Tk=t("p",null,"😻 = U+1F63B = Smiling cat face with heart-shaped eyes",-1),$k=t("p",null,[d("1F63B = "),t("code",null,"0001 1111 0110 0011 1011")],-1),Uk=[$k],Ok={class:"mt-30"},Pk=t("p",null,"We need at least 17 bits of room to encode U+1F63B",-1),Ik=t("hr",null,null,-1),Mk=t("p",null,[t("code",null,"17 > 7"),d(" ∴ Needs more than 1 byte")],-1),Lk=t("p",null,[t("code",null,"17 > 11"),d(" ∴ Needs more than 2 bytes")],-1),Rk=t("p",null,[t("code",null,"17 > 16"),d(" ∴ Needs more than 3 bytes")],-1),Nk=t("p",null,"∴ We need 4 bytes!",-1),qk=t("p",null,[t("code",null,"1111 0xxx"),d(),t("code",null,"10xx xxxx"),d(),t("code",null,"10xx xxxx"),d(),t("code",null,"10xx xxxx")],-1),Wk=[Ik,Mk,Lk,Rk,Nk,qk],jk={__name:"28",setup(e){const n={hide:!1,srcSequence:"./pages/02-unicode.md"};return L(H),(s,o)=>{const l=Ni,r=qt("click");return v(),W(Fe,le(oe(n)),{default:O(()=>[Sk,Tk,Ke((v(),k("p",null,Uk)),[[r]]),Ke((v(),k("div",Ok,[I(l,{x1:"250",y1:"250",x2:"170",y2:"160",width:"5"}),Pk])),[[r]]),Ke((v(),k("div",null,Wk)),[[r]])]),_:1},16)}}},Hk=V(jk,[["__file","/@slidev/slides/28.md"]]);const ze=e=>(vi("data-v-224221b4"),e=e(),_i(),e),Vk=ze(()=>t("h2",null,"Let’s encode!",-1)),zk=ze(()=>t("p",null,"😻 = U+1F63B = Smiling cat face with heart-shaped eyes",-1)),Kk=ze(()=>t("p",null,[d("0x1F63B = "),t("code",null,"0001 1111 0110 0011 1011")],-1)),Gk={class:"absolute top-40 left-14"},Yk=ze(()=>t("span",null,"0x1F63B = ",-1)),Qk=ze(()=>t("span",{class:"binary color-red"}," 00",-1)),Zk=ze(()=>t("span",{class:"binary color-blue"},"01 1111",-1)),Jk=ze(()=>t("span",{class:"binary color-green"}," 0110 00",-1)),Xk=ze(()=>t("span",{class:"binary color-yellow"},"11 1011",-1)),eC=[Yk,Qk,Zk,Jk,Xk],tC={class:"absolute parts top-40 left-14"},nC=ze(()=>t("div",{class:"binary color-red absolute part part-1 anim"},"00",-1)),sC=ze(()=>t("div",{class:"binary color-blue absolute part part-2 anim"},"01 1111",-1)),oC=ze(()=>t("div",{class:"binary color-green absolute part part-3 no-backtick anim"},"0110 00",-1)),lC=ze(()=>t("div",{class:"binary color-yellow absolute part part-4 no-backtick anim"},"11 1011",-1)),rC=[nC,sC,oC,lC],aC={class:"absolute top-49 left-31"},iC=ze(()=>t("span",{class:"binary"},[d("| 1111 0000 = 1111 00"),t("span",{class:"color-red"},"00"),d(" ")],-1)),cC=ze(()=>t("p",null,[t("span",{class:"binary"},[d("| 1000 0000 = 10"),t("span",{class:"color-blue"},"01 1111"),d(" ")])],-1)),uC=ze(()=>t("p",null,[t("span",{class:"binary"},[d("| 1000 0000 = 10"),t("span",{class:"color-green"},"01 1000"),d(" ")])],-1)),pC=ze(()=>t("p",null,[t("span",{class:"binary"},[d("| 1000 0000 = 10"),t("span",{class:"color-yellow"},"11 1011"),d(" ")])],-1)),dC=[iC,cC,uC,pC],fC={class:"absolute top-49 left-86"},hC=ze(()=>t("span",{class:"binary"}," = 0xF0",-1)),yC=ze(()=>t("p",null,[t("span",{class:"binary"}," = 0x9F")],-1)),mC=ze(()=>t("p",null,[t("span",{class:"binary"}," = 0x98")],-1)),gC=ze(()=>t("p",null,[t("span",{class:"binary"}," = 0xBB")],-1)),vC=[hC,yC,mC,gC],_C={class:"absolute top-90 left-15"},bC=ze(()=>t("hr",null,null,-1)),xC=ze(()=>t("p",null,[d("Thus! U+1F63B = "),t("code",null,"\\xF0\\x9F\\x97\\xBB"),d(" in UTF-8")],-1)),AC={__name:"29",setup(e){const n={hide:!1,srcSequence:"./pages/02-unicode.md"};return L(H),(s,o)=>{const l=ot,r=qt("click");return v(),W(Fe,le(oe(n)),{default:O(()=>[Vk,zk,Kk,Ke((v(),k("div",Gk,eC)),[[r]]),Ke((v(),k("div",tC,rC)),[[r]]),Ke((v(),k("div",aC,dC)),[[r]]),Ke((v(),k("div",fC,vC)),[[r]]),t("div",_C,[I(l,null,{default:O(()=>[bC,xC]),_:1})])]),_:1},16)}}},wC=V(AC,[["__scopeId","data-v-224221b4"],["__file","/@slidev/slides/29.md"]]),BC=t("h2",null,"Summary",-1),kC=t("p",null,[d("Unicode is a standard. It defeines a dictionary of "),t("code",null,"codepoints"),d(" to their character descriptions")],-1),CC=t("p",null,"UTF-8 is an Encoding - defined by the Unicode Standard.",-1),FC=t("p",null,"Encodings help humans interpret bytes as painted glyphs",-1),EC=t("p",null,"UTF-8 is by far the most common standard due to it’s memory efficiency (e.g. variable space)",-1),DC={__name:"30",setup(e){const n={layout:"center",hide:!1,srcSequence:"./pages/02-unicode.md"};return L(H),(s,o)=>{const l=$t;return v(),W(et,le(oe(n)),{default:O(()=>[BC,I(l,null,{default:O(()=>[kC,CC,FC,EC]),_:1})]),_:1},16)}}},SC=V(DC,[["__file","/@slidev/slides/30.md"]]),TC=t("h1",null,"Unicode in Rust",-1),$C={__name:"31",setup(e){const n={layout:"cover",hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"};return L(H),(s,o)=>(v(),W(Gs,le(oe(n)),{default:O(()=>[TC]),_:1},16))}},UC=V($C,[["__file","/@slidev/slides/31.md"]]),OC=t("p",null,"Q: What is the primitive string type in rust?",-1),PC={__name:"32",setup(e){const n={layout:"center",hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"};return L(H),(s,o)=>(v(),W(et,le(oe(n)),{default:O(()=>[OC]),_:1},16))}},IC=V(PC,[["__file","/@slidev/slides/32.md"]]),MC=t("p",null,[d("Answer: "),t("code",null,"str")],-1),LC=t("p",null,[d("Incorrect: "),t("code",null,"String"),d(", "),t("code",null,"&str")],-1),RC=t("ul",null,[t("li",null,[t("code",null,"&str"),d(" impls "),t("code",null,"AsRef<str>")]),t("li",null,[t("code",null,"String"),d(" impls "),t("code",null,"AsRef<str>")]),t("li",null,[t("code",null,"String"),d(" impls "),t("code",null,"Deref"),d(" to "),t("code",null,"str"),d(" (thus "),t("code",null,"&String"),d(" derefs to "),t("code",null,"&str"),d(")")])],-1),NC={class:"mt-5"},qC=t("blockquote",null,[t("p",null,[d("The "),t("code",null,"str"),d(" type, also called a ‘string slice’, is the most primitive string type. It is usually seen in its borrowed form, "),t("code",null,"&str"),d(". It is also the type of string literals, "),t("code",null,"&'static str"),d(".")]),t("p",null,[d("String slices are "),t("strong",null,"always"),d(" valid UTF-8.")])],-1),WC=[qC],jC={__name:"33",setup(e){const n={layout:"center",hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"};return L(H),(s,o)=>{const l=ot,r=qt("click");return v(),W(et,le(oe(n)),{default:O(()=>[MC,I(l,null,{default:O(()=>[LC,RC]),_:1}),Ke((v(),k("div",NC,WC)),[[r]])]),_:1},16)}}},HC=V(jC,[["__file","/@slidev/slides/33.md"]]),VC={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},zC=t("path",{fill:"currentColor",d:"M200 32h-36.26a47.92 47.92 0 0 0-71.48 0H56a16 16 0 0 0-16 16v168a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16Zm-72 0a32 32 0 0 1 32 32H96a32 32 0 0 1 32-32Zm72 184H56V48h26.75A47.93 47.93 0 0 0 80 64v8a8 8 0 0 0 8 8h80a8 8 0 0 0 8-8v-8a47.93 47.93 0 0 0-2.75-16H200Z"},null,-1),KC=[zC];function GC(e,n){return v(),k("svg",VC,KC)}const YC={name:"ph-clipboard",render:GC},QC={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},ZC=t("path",{fill:"currentColor",d:"M173.66 98.34a8 8 0 0 1 0 11.32l-56 56a8 8 0 0 1-11.32 0l-24-24a8 8 0 0 1 11.32-11.32L112 148.69l50.34-50.35a8 8 0 0 1 11.32 0ZM232 128A104 104 0 1 1 128 24a104.11 104.11 0 0 1 104 104Zm-16 0a88 88 0 1 0-88 88a88.1 88.1 0 0 0 88-88Z"},null,-1),JC=[ZC];function XC(e,n){return v(),k("svg",QC,JC)}const e9={name:"ph-check-circle",render:XC},t9=["title"],n9=ke({__name:"CodeBlockWrapper",props:{ranges:{default:()=>[]},startLine:{type:Number,default:1},lines:{type:Boolean,default:Se.lineNumbers},at:{type:Number,default:void 0},maxHeight:{type:String,default:void 0}},setup(e){const n=e;L(H);const s=L(_o),o=L(as),l=L(bo);function r(f=5){const h=[],y="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",m=y.length;for(let b=0;b<f;b++)h.push(y.charAt(Math.floor(Math.random()*m)));return h.join("")}const a=Y(),i=Tt();Gn(()=>{const f=n.at==null?o==null?void 0:o.value.length:n.at,h=$(()=>l!=null&&l.value?n.ranges.length-1:Math.min(Math.max(0,((s==null?void 0:s.value)||0)-(f||0)),n.ranges.length-1)),y=$(()=>n.ranges[h.value]||"");if(n.ranges.length>=2&&!(l!=null&&l.value)){const m=r(),b=Bg(n.ranges.length-1).map(w=>m+w);o!=null&&o.value&&(o.value.push(...b),fr(()=>b.forEach(w=>Aa(o.value,w)),i))}Cs(()=>{if(!a.value)return;const b=a.value.querySelector(".shiki-dark")?Array.from(a.value.querySelectorAll(".shiki")):[a.value],w=n.startLine;for(const A of b){const B=Array.from(A.querySelectorAll(".line")),x=sh(B.length+w-1,y.value);if(B.forEach((C,F)=>{const D=x.includes(F+w);C.classList.toggle(ss,!0),C.classList.toggle("highlighted",D),C.classList.toggle("dishonored",!D)}),n.maxHeight){const C=Array.from(A.querySelectorAll(".line.highlighted"));C.reduce((D,R)=>R.offsetHeight+D,0)>a.value.offsetHeight?C[0].scrollIntoView({behavior:"smooth",block:"start"}):C.length>0&&C[Math.round((C.length-1)/2)].scrollIntoView({behavior:"smooth",block:"center"})}}})});const{copied:c,copy:u}=Bv();function p(){var h,y;const f=(y=(h=a.value)==null?void 0:h.querySelector(".slidev-code"))==null?void 0:y.textContent;f&&u(f)}return(f,h)=>{const y=e9,m=YC;return v(),k("div",{ref_key:"el",ref:a,class:We(["slidev-code-wrapper relative group",{"slidev-code-line-numbers":n.lines}]),style:nt({"max-height":n.maxHeight,"overflow-y":n.maxHeight?"scroll":void 0,"--start":n.startLine})},[Wt(f.$slots,"default"),T(Se).codeCopy?(v(),k("button",{key:0,class:"slidev-code-copy absolute top-0 right-0 transition opacity-0 group-hover:opacity-20 hover:!opacity-100",title:T(c)?"Copied":"Copy",onClick:h[0]||(h[0]=b=>p())},[T(c)?(v(),W(y,{key:0,class:"p-2 w-8 h-8"})):(v(),W(m,{key:1,class:"p-2 w-8 h-8"}))],8,t9)):me("v-if",!0)],6)}}}),Ut=V(n9,[["__file","/home/ben/Workspace/demystifying-unicode/node_modules/@slidev/client/builtin/CodeBlockWrapper.vue"]]),s9=t("h2",null,"String slices",-1),o9=t("br",null,null,-1),l9=t("blockquote",null,[t("p",null,"Primitive Type slice"),t("p",null,"A dynamically-sized view into a contiguous sequence, [T]. Contiguous here means that elements are laid out so that every element is the same distance from its neighbors.")],-1),r9=t("br",null,null,-1),a9=t("p",null,"What is the output?",-1),i9=t("pre",{class:"shiki-container"},[t("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#4D9375"}},"fn"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#A1B567"}},"main"),t("span",{style:{color:"#858585"}},"()"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#858585"}},"{")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#CB7676"}},"let"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#B8A965"}},"s"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#CB7676"}},"="),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#C98A7D"}},'"İstanbul"'),t("span",{style:{color:"#858585"}},";")]),d(`
`),t("span",{class:"line"}),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#A1B567"}},"println!"),t("span",{style:{color:"#858585"}},"("),t("span",{style:{color:"#C98A7D"}},'"'),t("span",{style:{color:"#858585"}},"{}"),t("span",{style:{color:"#C98A7D"}},'"'),t("span",{style:{color:"#858585"}},","),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#B8A965"}},"s"),t("span",{style:{color:"#CB7676"}},"."),t("span",{style:{color:"#A1B567"}},"len"),t("span",{style:{color:"#858585"}},"());")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#858585"}},"}")])])]),t("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#1C6B48"}},"fn"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#6C7834"}},"main"),t("span",{style:{color:"#8E8F8B"}},"()"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8E8F8B"}},"{")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#AB5959"}},"let"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8C862B"}},"s"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#AB5959"}},"="),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#B56959"}},'"İstanbul"'),t("span",{style:{color:"#8E8F8B"}},";")]),d(`
`),t("span",{class:"line"}),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#6C7834"}},"println!"),t("span",{style:{color:"#8E8F8B"}},"("),t("span",{style:{color:"#B56959"}},'"'),t("span",{style:{color:"#8E8F8B"}},"{}"),t("span",{style:{color:"#B56959"}},'"'),t("span",{style:{color:"#8E8F8B"}},","),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8C862B"}},"s"),t("span",{style:{color:"#AB5959"}},"."),t("span",{style:{color:"#6C7834"}},"len"),t("span",{style:{color:"#8E8F8B"}},"());")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),c9=t("pre",{class:"shiki-container"},[t("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#758575"}},"    //        ^^ 9")])])]),t("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#A0ADA0"}},"    //        ^^ 9")])])])],-1),u9=t("pre",{class:"shiki-container"},[t("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#A1B567"}},"println!"),t("span",{style:{color:"#858585"}},"("),t("span",{style:{color:"#C98A7D"}},'"'),t("span",{style:{color:"#858585"}},"{"),t("span",{style:{color:"#C98A7D"}},":x?"),t("span",{style:{color:"#858585"}},"}"),t("span",{style:{color:"#C98A7D"}},'"'),t("span",{style:{color:"#858585"}},","),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#C98A7D"}},'"İstanbul"'),t("span",{style:{color:"#CB7676"}},"."),t("span",{style:{color:"#A1B567"}},"as_bytes"),t("span",{style:{color:"#858585"}},"());"),t("span",{style:{color:"#758575"}},"   // [c4, b0, 73, 74, 61, 6e, 62, 75, 6c]")])])]),t("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#6C7834"}},"println!"),t("span",{style:{color:"#8E8F8B"}},"("),t("span",{style:{color:"#B56959"}},'"'),t("span",{style:{color:"#8E8F8B"}},"{"),t("span",{style:{color:"#B56959"}},":x?"),t("span",{style:{color:"#8E8F8B"}},"}"),t("span",{style:{color:"#B56959"}},'"'),t("span",{style:{color:"#8E8F8B"}},","),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#B56959"}},'"İstanbul"'),t("span",{style:{color:"#AB5959"}},"."),t("span",{style:{color:"#6C7834"}},"as_bytes"),t("span",{style:{color:"#8E8F8B"}},"());"),t("span",{style:{color:"#A0ADA0"}},"   // [c4, b0, 73, 74, 61, 6e, 62, 75, 6c]")])])])],-1),p9=t("footer",null,[t("p",null,[d("Ref: "),t("a",{href:"https://doc.rust-lang.org/std/primitive.slice.html",target:"_blank",rel:"noopener"},"https://doc.rust-lang.org/std/primitive.slice.html")])],-1),d9={__name:"34",setup(e){const n={hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"};return L(H),(s,o)=>{const l=Ut,r=ot,a=$t;return v(),W(Fe,le(oe(n)),{default:O(()=>[s9,o9,l9,r9,I(r,null,{default:O(()=>[a9,I(l,je({},{ranges:[""]}),{default:O(()=>[i9]),_:1},16)]),_:1}),I(a,null,{default:O(()=>[I(l,je({},{ranges:[""]}),{default:O(()=>[c9]),_:1},16),I(l,je({},{ranges:[""]}),{default:O(()=>[u9]),_:1},16)]),_:1}),p9]),_:1},16)}}},f9=V(d9,[["__file","/@slidev/slides/34.md"]]),h9=t("h2",null,[d("A String slice ("),t("code",null,"str"),d(") is just a slice of bytes ("),t("code",null,"[u8]"),d("), "),t("strong",null,"which contents are always valid UTF-8"),d(".")],-1),y9={__name:"35",setup(e){const n={layout:"center",hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"};return L(H),(s,o)=>(v(),W(et,le(oe(n)),{default:O(()=>[h9]),_:1},16))}},m9=V(y9,[["__file","/@slidev/slides/35.md"]]),g9=t("h2",null,"Lets make some strings",-1),v9={__name:"36",setup(e){const n={layout:"center",hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"};return L(H),(s,o)=>(v(),W(et,le(oe(n)),{default:O(()=>[g9]),_:1},16))}},_9=V(v9,[["__file","/@slidev/slides/36.md"]]),b9=t("h2",null,"Creating strings",-1),x9=t("blockquote",null,[t("p",null,[d("String slices are "),t("strong",null,"always"),d(" valid UTF-8.")])],-1),A9=t("p",null,[d("∴ The compiler won’t compile your rust if you try to do non UTF-8 things in "),t("code",null,"&str")],-1),w9=t("pre",{class:"shiki-container"},[t("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#4D9375"}},"fn"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#A1B567"}},"main"),t("span",{style:{color:"#858585"}},"()"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#858585"}},"{")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#758575"}},"    // ASCII chars are always safe!")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#CB7676"}},"let"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#B8A965"}},"s"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#CB7676"}},"="),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#C98A7D"}},'"Hello World"'),t("span",{style:{color:"#858585"}},";"),t("span",{style:{color:"#758575"}},"     // Good")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#CB7676"}},"let"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#B8A965"}},"s"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#CB7676"}},"="),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#C98A7D"}},'"Hello'),t("span",{style:{color:"#D4976C"}},"\\x20"),t("span",{style:{color:"#C98A7D"}},'World"'),t("span",{style:{color:"#858585"}},";"),t("span",{style:{color:"#758575"}},"  // Also good")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#CB7676"}},"let"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#B8A965"}},"s"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#CB7676"}},"="),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#C98A7D"}},'"Hello'),t("span",{style:{color:"#D4976C"}},"\\x7F"),t("span",{style:{color:"#C98A7D"}},'World"'),t("span",{style:{color:"#858585"}},";"),t("span",{style:{color:"#758575"}},"  // Also good (\\x7F is the control character `DEL`)")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#CB7676"}},"let"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#B8A965"}},"s"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#CB7676"}},"="),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#C98A7D"}},'"Hello'),t("span",{style:{color:"#D4976C"}},"\\x"),t("span",{style:{color:"#C98A7D"}},'80World"'),t("span",{style:{color:"#858585"}},";"),t("span",{style:{color:"#758575"}},"  // Fails")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#758575"}},"    //            ^^^^ must be a character in the range [\\x00-\\x7f]")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#858585"}},"}")])])]),t("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#1C6B48"}},"fn"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#6C7834"}},"main"),t("span",{style:{color:"#8E8F8B"}},"()"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8E8F8B"}},"{")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#A0ADA0"}},"    // ASCII chars are always safe!")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#AB5959"}},"let"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8C862B"}},"s"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#AB5959"}},"="),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#B56959"}},'"Hello World"'),t("span",{style:{color:"#8E8F8B"}},";"),t("span",{style:{color:"#A0ADA0"}},"     // Good")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#AB5959"}},"let"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8C862B"}},"s"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#AB5959"}},"="),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#B56959"}},'"Hello'),t("span",{style:{color:"#A65E2B"}},"\\x20"),t("span",{style:{color:"#B56959"}},'World"'),t("span",{style:{color:"#8E8F8B"}},";"),t("span",{style:{color:"#A0ADA0"}},"  // Also good")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#AB5959"}},"let"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8C862B"}},"s"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#AB5959"}},"="),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#B56959"}},'"Hello'),t("span",{style:{color:"#A65E2B"}},"\\x7F"),t("span",{style:{color:"#B56959"}},'World"'),t("span",{style:{color:"#8E8F8B"}},";"),t("span",{style:{color:"#A0ADA0"}},"  // Also good (\\x7F is the control character `DEL`)")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#AB5959"}},"let"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8C862B"}},"s"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#AB5959"}},"="),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#B56959"}},'"Hello'),t("span",{style:{color:"#A65E2B"}},"\\x"),t("span",{style:{color:"#B56959"}},'80World"'),t("span",{style:{color:"#8E8F8B"}},";"),t("span",{style:{color:"#A0ADA0"}},"  // Fails")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#A0ADA0"}},"    //            ^^^^ must be a character in the range [\\x00-\\x7f]")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),B9=t("p",null,"… and for completeness…",-1),k9=t("pre",{class:"shiki-container"},[t("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#4D9375"}},"fn"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#A1B567"}},"main"),t("span",{style:{color:"#858585"}},"()"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#858585"}},"{")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#CB7676"}},"let"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#B8A965"}},"s"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#CB7676"}},"="),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#C98A7D"}},'"Hello'),t("span",{style:{color:"#D4976C"}},"\\u{0020}"),t("span",{style:{color:"#C98A7D"}},'World"'),t("span",{style:{color:"#858585"}},";"),t("span",{style:{color:"#758575"}},"   // Good")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#CB7676"}},"let"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#B8A965"}},"s"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#CB7676"}},"="),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#C98A7D"}},'"Hello'),t("span",{style:{color:"#D4976C"}},"\\u{1F63B}"),t("span",{style:{color:"#C98A7D"}},'World"'),t("span",{style:{color:"#858585"}},";"),t("span",{style:{color:"#758575"}},"   // Good")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#CB7676"}},"let"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#B8A965"}},"s"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#CB7676"}},"="),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#C98A7D"}},'"Hello'),t("span",{style:{color:"#D4976C"}},"\\u{110000}"),t("span",{style:{color:"#C98A7D"}},'World"'),t("span",{style:{color:"#858585"}},";"),t("span",{style:{color:"#758575"}},"  // Fails")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#758575"}},"    //            ^^^^^^^^^^ invalid escape")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#858585"}},"}")])])]),t("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#1C6B48"}},"fn"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#6C7834"}},"main"),t("span",{style:{color:"#8E8F8B"}},"()"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8E8F8B"}},"{")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#AB5959"}},"let"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8C862B"}},"s"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#AB5959"}},"="),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#B56959"}},'"Hello'),t("span",{style:{color:"#A65E2B"}},"\\u{0020}"),t("span",{style:{color:"#B56959"}},'World"'),t("span",{style:{color:"#8E8F8B"}},";"),t("span",{style:{color:"#A0ADA0"}},"   // Good")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#AB5959"}},"let"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8C862B"}},"s"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#AB5959"}},"="),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#B56959"}},'"Hello'),t("span",{style:{color:"#A65E2B"}},"\\u{1F63B}"),t("span",{style:{color:"#B56959"}},'World"'),t("span",{style:{color:"#8E8F8B"}},";"),t("span",{style:{color:"#A0ADA0"}},"   // Good")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#AB5959"}},"let"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8C862B"}},"s"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#AB5959"}},"="),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#B56959"}},'"Hello'),t("span",{style:{color:"#A65E2B"}},"\\u{110000}"),t("span",{style:{color:"#B56959"}},'World"'),t("span",{style:{color:"#8E8F8B"}},";"),t("span",{style:{color:"#A0ADA0"}},"  // Fails")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#A0ADA0"}},"    //            ^^^^^^^^^^ invalid escape")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),C9={__name:"37",setup(e){const n={hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"};return L(H),(s,o)=>{const l=Ut,r=ot;return v(),W(Fe,le(oe(n)),{default:O(()=>[b9,x9,A9,I(l,je({},{ranges:[""]}),{default:O(()=>[w9]),_:1},16),I(r,null,{default:O(()=>[B9,I(l,je({},{ranges:[""]}),{default:O(()=>[k9]),_:1},16)]),_:1})]),_:1},16)}}},F9=V(C9,[["__file","/@slidev/slides/37.md"]]),E9=t("h2",null,"Creating Strings",-1),D9=t("ul",null,[t("li",null,"All strings are a sequence of bytes"),t("li",null,"∴ Rust let’s us create strings from slices/vectors of bytes.")],-1),S9=t("pre",{class:"shiki-container"},[t("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#4D9375"}},"fn"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#A1B567"}},"main"),t("span",{style:{color:"#858585"}},"()"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#858585"}},"{")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#CB7676"}},"let"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#B8A965"}},"cat"),t("span",{style:{color:"#CB7676"}},":"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#858585"}},"["),t("span",{style:{color:"#A1B567"}},"u8"),t("span",{style:{color:"#858585"}},";"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#6394BF"}},"4"),t("span",{style:{color:"#858585"}},"]"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#CB7676"}},"="),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#858585"}},"["),t("span",{style:{color:"#6394BF"}},"0xF0"),t("span",{style:{color:"#858585"}},","),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#6394BF"}},"0x9F"),t("span",{style:{color:"#858585"}},","),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#6394BF"}},"0x98"),t("span",{style:{color:"#858585"}},","),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#6394BF"}},"0xBB"),t("span",{style:{color:"#858585"}},"];")]),d(`
`),t("span",{class:"line"}),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#CB7676"}},"let"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#B8A965"}},"s"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#CB7676"}},"="),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#A1B567"}},"std"),t("span",{style:{color:"#CB7676"}},"::"),t("span",{style:{color:"#A1B567"}},"str"),t("span",{style:{color:"#CB7676"}},"::"),t("span",{style:{color:"#A1B567"}},"from_utf8"),t("span",{style:{color:"#858585"}},"("),t("span",{style:{color:"#CB7676"}},"&"),t("span",{style:{color:"#B8A965"}},"cat"),t("span",{style:{color:"#858585"}},")"),t("span",{style:{color:"#CB7676"}},"."),t("span",{style:{color:"#A1B567"}},"unwrap"),t("span",{style:{color:"#858585"}},"();")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#758575"}},"    // let s = String::from_utf8(cat.to_vec()).unwrap();")]),d(`
`),t("span",{class:"line"}),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#A1B567"}},"println!"),t("span",{style:{color:"#858585"}},"("),t("span",{style:{color:"#C98A7D"}},'"'),t("span",{style:{color:"#858585"}},"{"),t("span",{style:{color:"#C98A7D"}},"s"),t("span",{style:{color:"#858585"}},"}"),t("span",{style:{color:"#C98A7D"}},'"'),t("span",{style:{color:"#858585"}},");")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#758575"}},"    //        ^^^ 😻 ")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#858585"}},"}")])])]),t("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#1C6B48"}},"fn"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#6C7834"}},"main"),t("span",{style:{color:"#8E8F8B"}},"()"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8E8F8B"}},"{")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#AB5959"}},"let"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8C862B"}},"cat"),t("span",{style:{color:"#AB5959"}},":"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8E8F8B"}},"["),t("span",{style:{color:"#6C7834"}},"u8"),t("span",{style:{color:"#8E8F8B"}},";"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#296AA3"}},"4"),t("span",{style:{color:"#8E8F8B"}},"]"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#AB5959"}},"="),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8E8F8B"}},"["),t("span",{style:{color:"#296AA3"}},"0xF0"),t("span",{style:{color:"#8E8F8B"}},","),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#296AA3"}},"0x9F"),t("span",{style:{color:"#8E8F8B"}},","),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#296AA3"}},"0x98"),t("span",{style:{color:"#8E8F8B"}},","),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#296AA3"}},"0xBB"),t("span",{style:{color:"#8E8F8B"}},"];")]),d(`
`),t("span",{class:"line"}),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#AB5959"}},"let"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8C862B"}},"s"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#AB5959"}},"="),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#6C7834"}},"std"),t("span",{style:{color:"#AB5959"}},"::"),t("span",{style:{color:"#6C7834"}},"str"),t("span",{style:{color:"#AB5959"}},"::"),t("span",{style:{color:"#6C7834"}},"from_utf8"),t("span",{style:{color:"#8E8F8B"}},"("),t("span",{style:{color:"#AB5959"}},"&"),t("span",{style:{color:"#8C862B"}},"cat"),t("span",{style:{color:"#8E8F8B"}},")"),t("span",{style:{color:"#AB5959"}},"."),t("span",{style:{color:"#6C7834"}},"unwrap"),t("span",{style:{color:"#8E8F8B"}},"();")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#A0ADA0"}},"    // let s = String::from_utf8(cat.to_vec()).unwrap();")]),d(`
`),t("span",{class:"line"}),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#6C7834"}},"println!"),t("span",{style:{color:"#8E8F8B"}},"("),t("span",{style:{color:"#B56959"}},'"'),t("span",{style:{color:"#8E8F8B"}},"{"),t("span",{style:{color:"#B56959"}},"s"),t("span",{style:{color:"#8E8F8B"}},"}"),t("span",{style:{color:"#B56959"}},'"'),t("span",{style:{color:"#8E8F8B"}},");")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#A0ADA0"}},"    //        ^^^ 😻 ")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),T9=t("p",null,"… and we can create byte sequences from strings even! (thanks compiler!)",-1),$9=t("pre",{class:"shiki-container"},[t("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#4D9375"}},"fn"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#A1B567"}},"main"),t("span",{style:{color:"#858585"}},"()"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#858585"}},"{")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#CB7676"}},"let"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#B8A965"}},"s"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#CB7676"}},"="),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#C98A7D"}},'b"Hello World!"'),t("span",{style:{color:"#858585"}},";")]),d(`
`),t("span",{class:"line"}),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#A1B567"}},"assert_eq!"),t("span",{style:{color:"#858585"}},"("),t("span",{style:{color:"#B8A965"}},"s"),t("span",{style:{color:"#858585"}},","),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#CB7676"}},"&"),t("span",{style:{color:"#858585"}},"["),t("span",{style:{color:"#6394BF"}},"72"),t("span",{style:{color:"#858585"}},","),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#6394BF"}},"101"),t("span",{style:{color:"#858585"}},","),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#6394BF"}},"108"),t("span",{style:{color:"#858585"}},","),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#6394BF"}},"108"),t("span",{style:{color:"#858585"}},","),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#6394BF"}},"111"),t("span",{style:{color:"#858585"}},","),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#6394BF"}},"32"),t("span",{style:{color:"#858585"}},","),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#6394BF"}},"87"),t("span",{style:{color:"#858585"}},","),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#6394BF"}},"111"),t("span",{style:{color:"#858585"}},","),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#6394BF"}},"114"),t("span",{style:{color:"#858585"}},","),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#6394BF"}},"108"),t("span",{style:{color:"#858585"}},","),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#6394BF"}},"100"),t("span",{style:{color:"#858585"}},","),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#6394BF"}},"33"),t("span",{style:{color:"#858585"}},"]);"),t("span",{style:{color:"#758575"}},"  // passes")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#858585"}},"}")])])]),t("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#1C6B48"}},"fn"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#6C7834"}},"main"),t("span",{style:{color:"#8E8F8B"}},"()"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8E8F8B"}},"{")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#AB5959"}},"let"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8C862B"}},"s"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#AB5959"}},"="),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#B56959"}},'b"Hello World!"'),t("span",{style:{color:"#8E8F8B"}},";")]),d(`
`),t("span",{class:"line"}),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#6C7834"}},"assert_eq!"),t("span",{style:{color:"#8E8F8B"}},"("),t("span",{style:{color:"#8C862B"}},"s"),t("span",{style:{color:"#8E8F8B"}},","),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#AB5959"}},"&"),t("span",{style:{color:"#8E8F8B"}},"["),t("span",{style:{color:"#296AA3"}},"72"),t("span",{style:{color:"#8E8F8B"}},","),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#296AA3"}},"101"),t("span",{style:{color:"#8E8F8B"}},","),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#296AA3"}},"108"),t("span",{style:{color:"#8E8F8B"}},","),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#296AA3"}},"108"),t("span",{style:{color:"#8E8F8B"}},","),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#296AA3"}},"111"),t("span",{style:{color:"#8E8F8B"}},","),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#296AA3"}},"32"),t("span",{style:{color:"#8E8F8B"}},","),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#296AA3"}},"87"),t("span",{style:{color:"#8E8F8B"}},","),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#296AA3"}},"111"),t("span",{style:{color:"#8E8F8B"}},","),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#296AA3"}},"114"),t("span",{style:{color:"#8E8F8B"}},","),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#296AA3"}},"108"),t("span",{style:{color:"#8E8F8B"}},","),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#296AA3"}},"100"),t("span",{style:{color:"#8E8F8B"}},","),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#296AA3"}},"33"),t("span",{style:{color:"#8E8F8B"}},"]);"),t("span",{style:{color:"#A0ADA0"}},"  // passes")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),U9={__name:"38",setup(e){const n={hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"};return L(H),(s,o)=>{const l=Ut,r=ot;return v(),W(Fe,le(oe(n)),{default:O(()=>[E9,D9,I(l,je({},{ranges:[""]}),{default:O(()=>[S9]),_:1},16),I(r,null,{default:O(()=>[T9,I(l,je({},{ranges:[""]}),{default:O(()=>[$9]),_:1},16)]),_:1})]),_:1},16)}}},O9=V(U9,[["__file","/@slidev/slides/38.md"]]),P9=t("h2",null,"Creating strings",-1),I9=t("p",null,[d("Even "),t("code",null,"char"),d(" primitives!")],-1),M9=t("pre",{class:"shiki-container"},[t("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#4D9375"}},"fn"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#A1B567"}},"main"),t("span",{style:{color:"#858585"}},"()"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#858585"}},"{")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#CB7676"}},"let"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#B8A965"}},"s"),t("span",{style:{color:"#CB7676"}},":"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#858585"}},"["),t("span",{style:{color:"#A1B567"}},"char"),t("span",{style:{color:"#858585"}},";"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#6394BF"}},"4"),t("span",{style:{color:"#858585"}},"]"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#CB7676"}},"="),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#858585"}},"[")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"        "),t("span",{style:{color:"#858585"}},"'"),t("span",{style:{color:"#C98A7D"}},"H"),t("span",{style:{color:"#858585"}},"'"),t("span",{style:{color:"#858585"}},",")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"        "),t("span",{style:{color:"#A1B567"}},"char"),t("span",{style:{color:"#CB7676"}},"::"),t("span",{style:{color:"#A1B567"}},"from_u32"),t("span",{style:{color:"#858585"}},"("),t("span",{style:{color:"#6394BF"}},"0x69"),t("span",{style:{color:"#858585"}},")"),t("span",{style:{color:"#CB7676"}},"."),t("span",{style:{color:"#A1B567"}},"unwrap"),t("span",{style:{color:"#858585"}},"(),")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"        "),t("span",{style:{color:"#4D9375"}},"unsafe"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#858585"}},"{"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#A1B567"}},"char"),t("span",{style:{color:"#CB7676"}},"::"),t("span",{style:{color:"#A1B567"}},"from_u32_unchecked"),t("span",{style:{color:"#858585"}},"("),t("span",{style:{color:"#6394BF"}},"0x20"),t("span",{style:{color:"#858585"}},")"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#858585"}},"},")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"        "),t("span",{style:{color:"#858585"}},"'"),t("span",{style:{color:"#D4976C"}},"\\u{1F63B}"),t("span",{style:{color:"#858585"}},"'")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#858585"}},"];")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#A1B567"}},"println!"),t("span",{style:{color:"#858585"}},"("),t("span",{style:{color:"#C98A7D"}},'"'),t("span",{style:{color:"#858585"}},"{}"),t("span",{style:{color:"#C98A7D"}},'"'),t("span",{style:{color:"#858585"}},","),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#B8A965"}},"s"),t("span",{style:{color:"#CB7676"}},"."),t("span",{style:{color:"#A1B567"}},"len"),t("span",{style:{color:"#858585"}},"()"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#CB7676"}},"*"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#A1B567"}},"std"),t("span",{style:{color:"#CB7676"}},"::"),t("span",{style:{color:"#A1B567"}},"mem"),t("span",{style:{color:"#CB7676"}},"::"),t("span",{style:{color:"#A1B567"}},"size_of"),t("span",{style:{color:"#CB7676"}},"::"),t("span",{style:{color:"#858585"}},"<"),t("span",{style:{color:"#A1B567"}},"char"),t("span",{style:{color:"#858585"}},">());"),t("span",{style:{color:"#758575"}},"  // 16")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    ")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#CB7676"}},"let"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#B8A965"}},"t"),t("span",{style:{color:"#CB7676"}},":"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#A1B567"}},"String"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#CB7676"}},"="),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#B8A965"}},"s"),t("span",{style:{color:"#CB7676"}},"."),t("span",{style:{color:"#A1B567"}},"iter"),t("span",{style:{color:"#858585"}},"()"),t("span",{style:{color:"#CB7676"}},"."),t("span",{style:{color:"#A1B567"}},"collect"),t("span",{style:{color:"#858585"}},"();")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#A1B567"}},"println!"),t("span",{style:{color:"#858585"}},"("),t("span",{style:{color:"#C98A7D"}},'"'),t("span",{style:{color:"#858585"}},"{}"),t("span",{style:{color:"#C98A7D"}},'"'),t("span",{style:{color:"#858585"}},","),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#B8A965"}},"t"),t("span",{style:{color:"#CB7676"}},"."),t("span",{style:{color:"#A1B567"}},"len"),t("span",{style:{color:"#858585"}},"()"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#CB7676"}},"*"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#A1B567"}},"std"),t("span",{style:{color:"#CB7676"}},"::"),t("span",{style:{color:"#A1B567"}},"mem"),t("span",{style:{color:"#CB7676"}},"::"),t("span",{style:{color:"#A1B567"}},"size_of"),t("span",{style:{color:"#CB7676"}},"::"),t("span",{style:{color:"#858585"}},"<"),t("span",{style:{color:"#A1B567"}},"u8"),t("span",{style:{color:"#858585"}},">());"),t("span",{style:{color:"#758575"}},"    // 7")]),d(`
`),t("span",{class:"line"}),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#A1B567"}},"println!"),t("span",{style:{color:"#858585"}},"("),t("span",{style:{color:"#C98A7D"}},'"'),t("span",{style:{color:"#858585"}},"{"),t("span",{style:{color:"#C98A7D"}},"t"),t("span",{style:{color:"#858585"}},"}"),t("span",{style:{color:"#C98A7D"}},'"'),t("span",{style:{color:"#858585"}},");")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#758575"}},'    //        ^^^ "Hi 😻"')]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#858585"}},"}")])])]),t("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#1C6B48"}},"fn"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#6C7834"}},"main"),t("span",{style:{color:"#8E8F8B"}},"()"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8E8F8B"}},"{")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#AB5959"}},"let"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8C862B"}},"s"),t("span",{style:{color:"#AB5959"}},":"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8E8F8B"}},"["),t("span",{style:{color:"#6C7834"}},"char"),t("span",{style:{color:"#8E8F8B"}},";"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#296AA3"}},"4"),t("span",{style:{color:"#8E8F8B"}},"]"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#AB5959"}},"="),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8E8F8B"}},"[")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"        "),t("span",{style:{color:"#8E8F8B"}},"'"),t("span",{style:{color:"#B56959"}},"H"),t("span",{style:{color:"#8E8F8B"}},"'"),t("span",{style:{color:"#8E8F8B"}},",")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"        "),t("span",{style:{color:"#6C7834"}},"char"),t("span",{style:{color:"#AB5959"}},"::"),t("span",{style:{color:"#6C7834"}},"from_u32"),t("span",{style:{color:"#8E8F8B"}},"("),t("span",{style:{color:"#296AA3"}},"0x69"),t("span",{style:{color:"#8E8F8B"}},")"),t("span",{style:{color:"#AB5959"}},"."),t("span",{style:{color:"#6C7834"}},"unwrap"),t("span",{style:{color:"#8E8F8B"}},"(),")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"        "),t("span",{style:{color:"#1C6B48"}},"unsafe"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8E8F8B"}},"{"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#6C7834"}},"char"),t("span",{style:{color:"#AB5959"}},"::"),t("span",{style:{color:"#6C7834"}},"from_u32_unchecked"),t("span",{style:{color:"#8E8F8B"}},"("),t("span",{style:{color:"#296AA3"}},"0x20"),t("span",{style:{color:"#8E8F8B"}},")"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8E8F8B"}},"},")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"        "),t("span",{style:{color:"#8E8F8B"}},"'"),t("span",{style:{color:"#A65E2B"}},"\\u{1F63B}"),t("span",{style:{color:"#8E8F8B"}},"'")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#8E8F8B"}},"];")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#6C7834"}},"println!"),t("span",{style:{color:"#8E8F8B"}},"("),t("span",{style:{color:"#B56959"}},'"'),t("span",{style:{color:"#8E8F8B"}},"{}"),t("span",{style:{color:"#B56959"}},'"'),t("span",{style:{color:"#8E8F8B"}},","),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8C862B"}},"s"),t("span",{style:{color:"#AB5959"}},"."),t("span",{style:{color:"#6C7834"}},"len"),t("span",{style:{color:"#8E8F8B"}},"()"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#AB5959"}},"*"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#6C7834"}},"std"),t("span",{style:{color:"#AB5959"}},"::"),t("span",{style:{color:"#6C7834"}},"mem"),t("span",{style:{color:"#AB5959"}},"::"),t("span",{style:{color:"#6C7834"}},"size_of"),t("span",{style:{color:"#AB5959"}},"::"),t("span",{style:{color:"#8E8F8B"}},"<"),t("span",{style:{color:"#6C7834"}},"char"),t("span",{style:{color:"#8E8F8B"}},">());"),t("span",{style:{color:"#A0ADA0"}},"  // 16")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    ")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#AB5959"}},"let"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8C862B"}},"t"),t("span",{style:{color:"#AB5959"}},":"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#6C7834"}},"String"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#AB5959"}},"="),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8C862B"}},"s"),t("span",{style:{color:"#AB5959"}},"."),t("span",{style:{color:"#6C7834"}},"iter"),t("span",{style:{color:"#8E8F8B"}},"()"),t("span",{style:{color:"#AB5959"}},"."),t("span",{style:{color:"#6C7834"}},"collect"),t("span",{style:{color:"#8E8F8B"}},"();")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#6C7834"}},"println!"),t("span",{style:{color:"#8E8F8B"}},"("),t("span",{style:{color:"#B56959"}},'"'),t("span",{style:{color:"#8E8F8B"}},"{}"),t("span",{style:{color:"#B56959"}},'"'),t("span",{style:{color:"#8E8F8B"}},","),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8C862B"}},"t"),t("span",{style:{color:"#AB5959"}},"."),t("span",{style:{color:"#6C7834"}},"len"),t("span",{style:{color:"#8E8F8B"}},"()"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#AB5959"}},"*"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#6C7834"}},"std"),t("span",{style:{color:"#AB5959"}},"::"),t("span",{style:{color:"#6C7834"}},"mem"),t("span",{style:{color:"#AB5959"}},"::"),t("span",{style:{color:"#6C7834"}},"size_of"),t("span",{style:{color:"#AB5959"}},"::"),t("span",{style:{color:"#8E8F8B"}},"<"),t("span",{style:{color:"#6C7834"}},"u8"),t("span",{style:{color:"#8E8F8B"}},">());"),t("span",{style:{color:"#A0ADA0"}},"    // 7")]),d(`
`),t("span",{class:"line"}),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#6C7834"}},"println!"),t("span",{style:{color:"#8E8F8B"}},"("),t("span",{style:{color:"#B56959"}},'"'),t("span",{style:{color:"#8E8F8B"}},"{"),t("span",{style:{color:"#B56959"}},"t"),t("span",{style:{color:"#8E8F8B"}},"}"),t("span",{style:{color:"#B56959"}},'"'),t("span",{style:{color:"#8E8F8B"}},");")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#A0ADA0"}},'    //        ^^^ "Hi 😻"')]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),L9=t("p",null,[d("👆 Yes, "),t("code",null,".iter().collect();")],-1),R9={__name:"39",setup(e){const n={hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"};return L(H),(s,o)=>{const l=Ut;return v(),W(Fe,le(oe(n)),{default:O(()=>[P9,I9,I(l,je({},{ranges:["0-7,10,13-16","8,11"]}),{default:O(()=>[M9]),_:1},16),L9]),_:1},16)}}},N9=V(R9,[["__file","/@slidev/slides/39.md"]]),q9=t("h2",null,"See, creating strings is easy!",-1),W9={__name:"40",setup(e){const n={layout:"center",hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"};return L(H),(s,o)=>(v(),W(et,le(oe(n)),{default:O(()=>[q9]),_:1},16))}},j9=V(W9,[["__file","/@slidev/slides/40.md"]]),H9=t("h2",null,"UTF8Error",-1),V9=t("p",null,"Until it panics.",-1),z9=t("pre",{class:"shiki-container"},[t("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#4D9375"}},"fn"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#A1B567"}},"main"),t("span",{style:{color:"#858585"}},"()"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#858585"}},"{")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#CB7676"}},"let"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#B8A965"}},"cat"),t("span",{style:{color:"#CB7676"}},":"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#858585"}},"["),t("span",{style:{color:"#A1B567"}},"u8"),t("span",{style:{color:"#858585"}},";"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#6394BF"}},"4"),t("span",{style:{color:"#858585"}},"]"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#CB7676"}},"="),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#858585"}},"["),t("span",{style:{color:"#6394BF"}},"0xF0"),t("span",{style:{color:"#858585"}},","),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#6394BF"}},"0x9F"),t("span",{style:{color:"#858585"}},","),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#6394BF"}},"0x98"),t("span",{style:{color:"#858585"}},","),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#6394BF"}},"0xBB"),t("span",{style:{color:"#858585"}},"];")]),d(`
`),t("span",{class:"line"}),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#CB7676"}},"let"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#B8A965"}},"sliced"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#CB7676"}},"="),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#CB7676"}},"&"),t("span",{style:{color:"#B8A965"}},"cat"),t("span",{style:{color:"#858585"}},"["),t("span",{style:{color:"#6394BF"}},"0"),t("span",{style:{color:"#CB7676"}},"..="),t("span",{style:{color:"#6394BF"}},"2"),t("span",{style:{color:"#858585"}},"];")]),d(`
`),t("span",{class:"line"}),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#758575"}},"    // Panics")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#CB7676"}},"let"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#B8A965"}},"_s"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#CB7676"}},"="),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#A1B567"}},"std"),t("span",{style:{color:"#CB7676"}},"::"),t("span",{style:{color:"#A1B567"}},"str"),t("span",{style:{color:"#CB7676"}},"::"),t("span",{style:{color:"#A1B567"}},"from_utf8"),t("span",{style:{color:"#858585"}},"("),t("span",{style:{color:"#B8A965"}},"sliced"),t("span",{style:{color:"#858585"}},")"),t("span",{style:{color:"#CB7676"}},"."),t("span",{style:{color:"#A1B567"}},"unwrap"),t("span",{style:{color:"#858585"}},"();")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#758575"}},"    // thread 'main' panicked at 'called `Result::unwrap()` on an `Err` value:")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#758575"}},"    //   FromUtf8Error { bytes: [128], error: Utf8Error { valid_up_to: 0, error_len: Some(1) } }', src/main.rs:5:35")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#858585"}},"}")])])]),t("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#1C6B48"}},"fn"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#6C7834"}},"main"),t("span",{style:{color:"#8E8F8B"}},"()"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8E8F8B"}},"{")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#AB5959"}},"let"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8C862B"}},"cat"),t("span",{style:{color:"#AB5959"}},":"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8E8F8B"}},"["),t("span",{style:{color:"#6C7834"}},"u8"),t("span",{style:{color:"#8E8F8B"}},";"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#296AA3"}},"4"),t("span",{style:{color:"#8E8F8B"}},"]"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#AB5959"}},"="),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8E8F8B"}},"["),t("span",{style:{color:"#296AA3"}},"0xF0"),t("span",{style:{color:"#8E8F8B"}},","),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#296AA3"}},"0x9F"),t("span",{style:{color:"#8E8F8B"}},","),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#296AA3"}},"0x98"),t("span",{style:{color:"#8E8F8B"}},","),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#296AA3"}},"0xBB"),t("span",{style:{color:"#8E8F8B"}},"];")]),d(`
`),t("span",{class:"line"}),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#AB5959"}},"let"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8C862B"}},"sliced"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#AB5959"}},"="),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#AB5959"}},"&"),t("span",{style:{color:"#8C862B"}},"cat"),t("span",{style:{color:"#8E8F8B"}},"["),t("span",{style:{color:"#296AA3"}},"0"),t("span",{style:{color:"#AB5959"}},"..="),t("span",{style:{color:"#296AA3"}},"2"),t("span",{style:{color:"#8E8F8B"}},"];")]),d(`
`),t("span",{class:"line"}),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#A0ADA0"}},"    // Panics")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#AB5959"}},"let"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8C862B"}},"_s"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#AB5959"}},"="),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#6C7834"}},"std"),t("span",{style:{color:"#AB5959"}},"::"),t("span",{style:{color:"#6C7834"}},"str"),t("span",{style:{color:"#AB5959"}},"::"),t("span",{style:{color:"#6C7834"}},"from_utf8"),t("span",{style:{color:"#8E8F8B"}},"("),t("span",{style:{color:"#8C862B"}},"sliced"),t("span",{style:{color:"#8E8F8B"}},")"),t("span",{style:{color:"#AB5959"}},"."),t("span",{style:{color:"#6C7834"}},"unwrap"),t("span",{style:{color:"#8E8F8B"}},"();")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#A0ADA0"}},"    // thread 'main' panicked at 'called `Result::unwrap()` on an `Err` value:")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#A0ADA0"}},"    //   FromUtf8Error { bytes: [128], error: Utf8Error { valid_up_to: 0, error_len: Some(1) } }', src/main.rs:5:35")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),K9={class:"pt-10"},G9=t("blockquote",null,[t("p",null,[d("String slices are "),t("strong",null,"always"),d(" valid UTF-8.")])],-1),Y9=t("p",null,'😬 Yeah, not all sequencess of bytes are "Valid UTF-8"',-1),Q9=[G9,Y9],Z9={__name:"41",setup(e){const n={hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"};return L(H),(s,o)=>{const l=Ut,r=qt("click");return v(),W(Fe,le(oe(n)),{default:O(()=>[H9,V9,I(l,je({},{ranges:[""]}),{default:O(()=>[z9]),_:1},16),Ke((v(),k("p",K9,Q9)),[[r]])]),_:1},16)}}},J9=V(Z9,[["__file","/@slidev/slides/41.md"]]),X9=t("h2",null,"Invalid UTF-8",-1),e7=t("p",null,"…We didn’t talk about Invalid UTF-8 yet",-1),t7=t("ul",null,[t("li",null,[d("First byte of UTF-8 byte sequences "),t("ul",null,[t("li",null,[d("1 byte seq: "),t("code",null,"0xxxxxxx")]),t("li",null,[d("2 byte seq: "),t("code",null,"110xxxxx"),d(" - "),t("code",null,"0xCx"),d(" or "),t("code",null,"0xDx"),d(" = 2 bytes")]),t("li",null,[d("3 byte seq: "),t("code",null,"1110xxxx"),d(" - "),t("code",null,"0xEx"),d(" = 3 bytes")]),t("li",null,[d("4 byte seq: "),t("code",null,"11110xxx"),d(" - "),t("code",null,"0xFx"),d(" = 4 bytes")])])])],-1),n7=t("ul",null,[t("li",null,[d('∴ The following are "broken": '),t("ul",null,[t("li",null,[t("code",null,"[0x80]"),d(", "),t("code",null,"[0x90]"),d(", "),t("code",null,"[0xA0]"),d(", "),t("code",null,"[0xB0]"),d(" - invalid UTF-8 sequences")]),t("li",null,[t("code",null,"[0xC0]"),d(", "),t("code",null,"[0xD0]"),d(" - missing second byte")]),t("li",null,[t("code",null,"[0xE0, 0xFF]"),d(" - missing third byte")]),t("li",null,[t("code",null,"[0xF0, 0xFF, 0xFF]"),d(" - missing fourth byte")])])])],-1),s7={__name:"42",setup(e){const n={hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"};return L(H),(s,o)=>{const l=ot;return v(),W(Fe,le(oe(n)),{default:O(()=>[X9,e7,I(l,null,{default:O(()=>[t7]),_:1}),I(l,null,{default:O(()=>[n7]),_:1})]),_:1},16)}}},o7=V(s7,[["__file","/@slidev/slides/42.md"]]),l7=t("h2",null,"Where Enforced UTF-8 can go wrong",-1),r7={__name:"43",setup(e){const n={layout:"center",hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"};return L(H),(s,o)=>(v(),W(et,le(oe(n)),{default:O(()=>[l7]),_:1},16))}},a7=V(r7,[["__file","/@slidev/slides/43.md"]]),i7=t("h2",null,"Reading and Writing",-1),c7=t("pre",{class:"shiki-container"},[t("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#758575"}},"// Needed for `impl Read for &[u8]`")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#4D9375"}},"use"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#A1B567"}},"std"),t("span",{style:{color:"#CB7676"}},"::"),t("span",{style:{color:"#A1B567"}},"io"),t("span",{style:{color:"#CB7676"}},"::"),t("span",{style:{color:"#A1B567"}},"prelude"),t("span",{style:{color:"#CB7676"}},"::*"),t("span",{style:{color:"#858585"}},";")]),d(`
`),t("span",{class:"line"}),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#4D9375"}},"fn"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#A1B567"}},"main"),t("span",{style:{color:"#858585"}},"()"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#858585"}},"{")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#758575"}},'    //let mut file = std::fs::File::open("ref/plain_text.txt").unwrap();')]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#CB7676"}},"let"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#CB7676"}},"mut"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#B8A965"}},"file"),t("span",{style:{color:"#CB7676"}},":"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#CB7676"}},"&"),t("span",{style:{color:"#858585"}},"["),t("span",{style:{color:"#A1B567"}},"u8"),t("span",{style:{color:"#858585"}},"]"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#CB7676"}},"="),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#C98A7D"}},'b"Plain'),t("span",{style:{color:"#D4976C"}},"\\x"),t("span",{style:{color:"#C98A7D"}},'80 Text!"'),t("span",{style:{color:"#858585"}},";")]),d(`
`),t("span",{class:"line"}),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#CB7676"}},"let"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#CB7676"}},"mut"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#B8A965"}},"buf"),t("span",{style:{color:"#CB7676"}},":"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#A1B567"}},"Vec"),t("span",{style:{color:"#858585"}},"<"),t("span",{style:{color:"#A1B567"}},"u8"),t("span",{style:{color:"#858585"}},">"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#CB7676"}},"="),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#A1B567"}},"vec!"),t("span",{style:{color:"#858585"}},"[];")]),d(`
`),t("span",{class:"line"}),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#CB7676"}},"let"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#B8A965"}},"bytes_read"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#CB7676"}},"="),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#B8A965"}},"file"),t("span",{style:{color:"#CB7676"}},"."),t("span",{style:{color:"#A1B567"}},"read_to_end"),t("span",{style:{color:"#858585"}},"("),t("span",{style:{color:"#CB7676"}},"&mut"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#B8A965"}},"buf"),t("span",{style:{color:"#858585"}},")"),t("span",{style:{color:"#CB7676"}},"."),t("span",{style:{color:"#A1B567"}},"unwrap"),t("span",{style:{color:"#858585"}},"();")]),d(`
`),t("span",{class:"line"}),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#A1B567"}},"println!"),t("span",{style:{color:"#858585"}},"("),t("span",{style:{color:"#C98A7D"}},'"'),t("span",{style:{color:"#858585"}},"{"),t("span",{style:{color:"#C98A7D"}},"bytes_read"),t("span",{style:{color:"#858585"}},"}"),t("span",{style:{color:"#C98A7D"}},", "),t("span",{style:{color:"#858585"}},"{"),t("span",{style:{color:"#C98A7D"}},"buf:02X?"),t("span",{style:{color:"#858585"}},"}"),t("span",{style:{color:"#C98A7D"}},'"'),t("span",{style:{color:"#858585"}},");")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#758575"}},"    //        ^^^^^^^^^^^^^^^^^^^^^^^^ 12, [50, 6C, 61, 69, 6E, 80, 20, 54, 65, 78, 74, 21]")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#858585"}},"}")])])]),t("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#A0ADA0"}},"// Needed for `impl Read for &[u8]`")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#1C6B48"}},"use"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#6C7834"}},"std"),t("span",{style:{color:"#AB5959"}},"::"),t("span",{style:{color:"#6C7834"}},"io"),t("span",{style:{color:"#AB5959"}},"::"),t("span",{style:{color:"#6C7834"}},"prelude"),t("span",{style:{color:"#AB5959"}},"::*"),t("span",{style:{color:"#8E8F8B"}},";")]),d(`
`),t("span",{class:"line"}),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#1C6B48"}},"fn"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#6C7834"}},"main"),t("span",{style:{color:"#8E8F8B"}},"()"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8E8F8B"}},"{")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#A0ADA0"}},'    //let mut file = std::fs::File::open("ref/plain_text.txt").unwrap();')]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#AB5959"}},"let"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#AB5959"}},"mut"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8C862B"}},"file"),t("span",{style:{color:"#AB5959"}},":"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#AB5959"}},"&"),t("span",{style:{color:"#8E8F8B"}},"["),t("span",{style:{color:"#6C7834"}},"u8"),t("span",{style:{color:"#8E8F8B"}},"]"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#AB5959"}},"="),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#B56959"}},'b"Plain'),t("span",{style:{color:"#A65E2B"}},"\\x"),t("span",{style:{color:"#B56959"}},'80 Text!"'),t("span",{style:{color:"#8E8F8B"}},";")]),d(`
`),t("span",{class:"line"}),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#AB5959"}},"let"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#AB5959"}},"mut"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8C862B"}},"buf"),t("span",{style:{color:"#AB5959"}},":"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#6C7834"}},"Vec"),t("span",{style:{color:"#8E8F8B"}},"<"),t("span",{style:{color:"#6C7834"}},"u8"),t("span",{style:{color:"#8E8F8B"}},">"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#AB5959"}},"="),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#6C7834"}},"vec!"),t("span",{style:{color:"#8E8F8B"}},"[];")]),d(`
`),t("span",{class:"line"}),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#AB5959"}},"let"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8C862B"}},"bytes_read"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#AB5959"}},"="),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8C862B"}},"file"),t("span",{style:{color:"#AB5959"}},"."),t("span",{style:{color:"#6C7834"}},"read_to_end"),t("span",{style:{color:"#8E8F8B"}},"("),t("span",{style:{color:"#AB5959"}},"&mut"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8C862B"}},"buf"),t("span",{style:{color:"#8E8F8B"}},")"),t("span",{style:{color:"#AB5959"}},"."),t("span",{style:{color:"#6C7834"}},"unwrap"),t("span",{style:{color:"#8E8F8B"}},"();")]),d(`
`),t("span",{class:"line"}),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#6C7834"}},"println!"),t("span",{style:{color:"#8E8F8B"}},"("),t("span",{style:{color:"#B56959"}},'"'),t("span",{style:{color:"#8E8F8B"}},"{"),t("span",{style:{color:"#B56959"}},"bytes_read"),t("span",{style:{color:"#8E8F8B"}},"}"),t("span",{style:{color:"#B56959"}},", "),t("span",{style:{color:"#8E8F8B"}},"{"),t("span",{style:{color:"#B56959"}},"buf:02X?"),t("span",{style:{color:"#8E8F8B"}},"}"),t("span",{style:{color:"#B56959"}},'"'),t("span",{style:{color:"#8E8F8B"}},");")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#A0ADA0"}},"    //        ^^^^^^^^^^^^^^^^^^^^^^^^ 12, [50, 6C, 61, 69, 6E, 80, 20, 54, 65, 78, 74, 21]")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),u7=t("p",null,"Nothing bad… so far…",-1),p7={__name:"44",setup(e){const n={hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"};return L(H),(s,o)=>{const l=Ut,r=ot;return v(),W(Fe,le(oe(n)),{default:O(()=>[i7,I(l,je({},{ranges:["5","6","0-4,6-12,14","0-4,6-14"]}),{default:O(()=>[c7]),_:1},16),I(r,null,{default:O(()=>[u7]),_:1})]),_:1},16)}}},d7=V(p7,[["__file","/@slidev/slides/44.md"]]),f7=t("h2",null,"Reading and Writing",-1),h7=t("pre",{class:"shiki-container"},[t("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#758575"}},"// Needed for `impl Read for &[u8]`")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#4D9375"}},"use"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#A1B567"}},"std"),t("span",{style:{color:"#CB7676"}},"::"),t("span",{style:{color:"#A1B567"}},"io"),t("span",{style:{color:"#CB7676"}},"::"),t("span",{style:{color:"#A1B567"}},"prelude"),t("span",{style:{color:"#CB7676"}},"::*"),t("span",{style:{color:"#858585"}},";")]),d(`
`),t("span",{class:"line"}),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#4D9375"}},"fn"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#A1B567"}},"main"),t("span",{style:{color:"#858585"}},"()"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#858585"}},"{")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#758575"}},'    //let mut file = std::fs::File::open("ref/plain_text.txt").unwrap();')]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#CB7676"}},"let"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#CB7676"}},"mut"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#B8A965"}},"file"),t("span",{style:{color:"#CB7676"}},":"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#CB7676"}},"&"),t("span",{style:{color:"#858585"}},"["),t("span",{style:{color:"#A1B567"}},"u8"),t("span",{style:{color:"#858585"}},"]"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#CB7676"}},"="),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#C98A7D"}},'b"Plain'),t("span",{style:{color:"#D4976C"}},"\\x"),t("span",{style:{color:"#C98A7D"}},'80 Text!"'),t("span",{style:{color:"#858585"}},";")]),d(`
`),t("span",{class:"line"}),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#CB7676"}},"let"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#CB7676"}},"mut"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#B8A965"}},"buf"),t("span",{style:{color:"#CB7676"}},":"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#A1B567"}},"String"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#CB7676"}},"="),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#A1B567"}},"String"),t("span",{style:{color:"#CB7676"}},"::"),t("span",{style:{color:"#A1B567"}},"new"),t("span",{style:{color:"#858585"}},"();")]),d(`
`),t("span",{class:"line"}),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#758575"}},"    //let bytes_read = file.read_to_end(&mut buf).unwrap();")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#CB7676"}},"let"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#B8A965"}},"bytes_read"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#CB7676"}},"="),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#B8A965"}},"file"),t("span",{style:{color:"#CB7676"}},"."),t("span",{style:{color:"#A1B567"}},"read_to_string"),t("span",{style:{color:"#858585"}},"("),t("span",{style:{color:"#CB7676"}},"&mut"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#B8A965"}},"buf"),t("span",{style:{color:"#858585"}},")"),t("span",{style:{color:"#CB7676"}},"."),t("span",{style:{color:"#A1B567"}},"unwrap"),t("span",{style:{color:"#858585"}},"();")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#758575"}},"    // thread 'main' panicked at 'called `Result::unwrap()` on an `Err` value:")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#758575"}},`    //     Error { kind: InvalidData, message: "stream did not contain valid UTF-8" }', src/main.rs:11:52`)]),d(`
`),t("span",{class:"line"}),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#A1B567"}},"println!"),t("span",{style:{color:"#858585"}},"("),t("span",{style:{color:"#C98A7D"}},'"'),t("span",{style:{color:"#858585"}},"{"),t("span",{style:{color:"#C98A7D"}},"bytes_read"),t("span",{style:{color:"#858585"}},"}"),t("span",{style:{color:"#C98A7D"}},", "),t("span",{style:{color:"#858585"}},"{"),t("span",{style:{color:"#C98A7D"}},"buf:02X?"),t("span",{style:{color:"#858585"}},"}"),t("span",{style:{color:"#C98A7D"}},'"'),t("span",{style:{color:"#858585"}},");")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#858585"}},"}")])])]),t("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#A0ADA0"}},"// Needed for `impl Read for &[u8]`")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#1C6B48"}},"use"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#6C7834"}},"std"),t("span",{style:{color:"#AB5959"}},"::"),t("span",{style:{color:"#6C7834"}},"io"),t("span",{style:{color:"#AB5959"}},"::"),t("span",{style:{color:"#6C7834"}},"prelude"),t("span",{style:{color:"#AB5959"}},"::*"),t("span",{style:{color:"#8E8F8B"}},";")]),d(`
`),t("span",{class:"line"}),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#1C6B48"}},"fn"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#6C7834"}},"main"),t("span",{style:{color:"#8E8F8B"}},"()"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8E8F8B"}},"{")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#A0ADA0"}},'    //let mut file = std::fs::File::open("ref/plain_text.txt").unwrap();')]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#AB5959"}},"let"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#AB5959"}},"mut"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8C862B"}},"file"),t("span",{style:{color:"#AB5959"}},":"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#AB5959"}},"&"),t("span",{style:{color:"#8E8F8B"}},"["),t("span",{style:{color:"#6C7834"}},"u8"),t("span",{style:{color:"#8E8F8B"}},"]"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#AB5959"}},"="),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#B56959"}},'b"Plain'),t("span",{style:{color:"#A65E2B"}},"\\x"),t("span",{style:{color:"#B56959"}},'80 Text!"'),t("span",{style:{color:"#8E8F8B"}},";")]),d(`
`),t("span",{class:"line"}),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#AB5959"}},"let"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#AB5959"}},"mut"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8C862B"}},"buf"),t("span",{style:{color:"#AB5959"}},":"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#6C7834"}},"String"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#AB5959"}},"="),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#6C7834"}},"String"),t("span",{style:{color:"#AB5959"}},"::"),t("span",{style:{color:"#6C7834"}},"new"),t("span",{style:{color:"#8E8F8B"}},"();")]),d(`
`),t("span",{class:"line"}),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#A0ADA0"}},"    //let bytes_read = file.read_to_end(&mut buf).unwrap();")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#AB5959"}},"let"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8C862B"}},"bytes_read"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#AB5959"}},"="),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8C862B"}},"file"),t("span",{style:{color:"#AB5959"}},"."),t("span",{style:{color:"#6C7834"}},"read_to_string"),t("span",{style:{color:"#8E8F8B"}},"("),t("span",{style:{color:"#AB5959"}},"&mut"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8C862B"}},"buf"),t("span",{style:{color:"#8E8F8B"}},")"),t("span",{style:{color:"#AB5959"}},"."),t("span",{style:{color:"#6C7834"}},"unwrap"),t("span",{style:{color:"#8E8F8B"}},"();")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#A0ADA0"}},"    // thread 'main' panicked at 'called `Result::unwrap()` on an `Err` value:")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#A0ADA0"}},`    //     Error { kind: InvalidData, message: "stream did not contain valid UTF-8" }', src/main.rs:11:52`)]),d(`
`),t("span",{class:"line"}),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#6C7834"}},"println!"),t("span",{style:{color:"#8E8F8B"}},"("),t("span",{style:{color:"#B56959"}},'"'),t("span",{style:{color:"#8E8F8B"}},"{"),t("span",{style:{color:"#B56959"}},"bytes_read"),t("span",{style:{color:"#8E8F8B"}},"}"),t("span",{style:{color:"#B56959"}},", "),t("span",{style:{color:"#8E8F8B"}},"{"),t("span",{style:{color:"#B56959"}},"buf:02X?"),t("span",{style:{color:"#8E8F8B"}},"}"),t("span",{style:{color:"#B56959"}},'"'),t("span",{style:{color:"#8E8F8B"}},");")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),y7={__name:"45",setup(e){const n={hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"};return L(H),(s,o)=>{const l=Ut;return v(),W(Fe,le(oe(n)),{default:O(()=>[f7,I(l,je({},{ranges:["6,10-11","6,10-13"]}),{default:O(()=>[h7]),_:1},16)]),_:1},16)}}},m7=V(y7,[["__file","/@slidev/slides/45.md"]]),g7=t("h2",null,"Read and Writing - JSON",-1),v7=t("pre",{class:"shiki-container"},[t("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#858585"}},"{")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"  "),t("span",{style:{color:"#858585"}},'"'),t("span",{style:{color:"#E0A569"}},"hello"),t("span",{style:{color:"#858585"}},'"'),t("span",{style:{color:"#858585"}},":"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#C98A7D"}},'"world'),t("span",{style:{color:"#FDAEB7","font-style":"italic"}},"\\x"),t("span",{style:{color:"#C98A7D"}},'80!"')]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#858585"}},"}")])])]),t("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#8E8F8B"}},"{")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"  "),t("span",{style:{color:"#8E8F8B"}},'"'),t("span",{style:{color:"#B58451"}},"hello"),t("span",{style:{color:"#8E8F8B"}},'"'),t("span",{style:{color:"#8E8F8B"}},":"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#B56959"}},'"world'),t("span",{style:{color:"#B31D28","font-style":"italic"}},"\\x"),t("span",{style:{color:"#B56959"}},'80!"')]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),_7=t("pre",{class:"shiki-container"},[t("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#858585"}},"#["),t("span",{style:{color:"#DBD7CA"}},"derive"),t("span",{style:{color:"#858585"}},"("),t("span",{style:{color:"#A1B567"}},"Debug"),t("span",{style:{color:"#858585"}},","),t("span",{style:{color:"#DBD7CA"}}," serde"),t("span",{style:{color:"#CB7676"}},"::"),t("span",{style:{color:"#A1B567"}},"Deserialize"),t("span",{style:{color:"#858585"}},")]")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#CB7676"}},"struct"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#A1B567"}},"Greeting"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#858585"}},"{")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#4D9375"}},"pub"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#B8A965"}},"who"),t("span",{style:{color:"#CB7676"}},":"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#A1B567"}},"String")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#858585"}},"}")]),d(`
`),t("span",{class:"line"}),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#4D9375"}},"fn"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#A1B567"}},"main"),t("span",{style:{color:"#858585"}},"()"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#858585"}},"{")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#CB7676"}},"let"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#B8A965"}},"raw"),t("span",{style:{color:"#CB7676"}},":"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#CB7676"}},"&"),t("span",{style:{color:"#858585"}},"["),t("span",{style:{color:"#A1B567"}},"u8"),t("span",{style:{color:"#858585"}},"]"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#CB7676"}},"="),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#C98A7D"}},'b"{'),t("span",{style:{color:"#D4976C"}},'\\"'),t("span",{style:{color:"#C98A7D"}},"who"),t("span",{style:{color:"#D4976C"}},'\\"'),t("span",{style:{color:"#C98A7D"}},": "),t("span",{style:{color:"#D4976C"}},'\\"'),t("span",{style:{color:"#C98A7D"}},"world"),t("span",{style:{color:"#D4976C"}},"\\x"),t("span",{style:{color:"#C98A7D"}},"80"),t("span",{style:{color:"#D4976C"}},'\\"'),t("span",{style:{color:"#C98A7D"}},'}"'),t("span",{style:{color:"#858585"}},";")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#758575"}},"    // for illustrative purposes")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#CB7676"}},"let"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#B8A965"}},"s"),t("span",{style:{color:"#CB7676"}},":"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#CB7676"}},"&"),t("span",{style:{color:"#A1B567"}},"str"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#CB7676"}},"="),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#4D9375"}},"unsafe"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#858585"}},"{"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#A1B567"}},"std"),t("span",{style:{color:"#CB7676"}},"::"),t("span",{style:{color:"#A1B567"}},"str"),t("span",{style:{color:"#CB7676"}},"::"),t("span",{style:{color:"#A1B567"}},"from_utf8_unchecked"),t("span",{style:{color:"#858585"}},"("),t("span",{style:{color:"#B8A965"}},"raw"),t("span",{style:{color:"#858585"}},")"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#858585"}},"};")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    ")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#CB7676"}},"let"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#B8A965"}},"greeting"),t("span",{style:{color:"#CB7676"}},":"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#A1B567"}},"Greeting"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#CB7676"}},"="),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#A1B567"}},"serde_json"),t("span",{style:{color:"#CB7676"}},"::"),t("span",{style:{color:"#A1B567"}},"from_str"),t("span",{style:{color:"#858585"}},"("),t("span",{style:{color:"#B8A965"}},"s"),t("span",{style:{color:"#858585"}},")"),t("span",{style:{color:"#CB7676"}},"."),t("span",{style:{color:"#A1B567"}},"unwrap"),t("span",{style:{color:"#858585"}},"();")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    ")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#A1B567"}},"println!"),t("span",{style:{color:"#858585"}},"("),t("span",{style:{color:"#C98A7D"}},'"Hello '),t("span",{style:{color:"#858585"}},"{}"),t("span",{style:{color:"#C98A7D"}},'!"'),t("span",{style:{color:"#858585"}},","),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#B8A965"}},"greeting"),t("span",{style:{color:"#CB7676"}},"."),t("span",{style:{color:"#DBD7CA"}},"who"),t("span",{style:{color:"#858585"}},");")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#858585"}},"}")])])]),t("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#8E8F8B"}},"#["),t("span",{style:{color:"#393A34"}},"derive"),t("span",{style:{color:"#8E8F8B"}},"("),t("span",{style:{color:"#6C7834"}},"Debug"),t("span",{style:{color:"#8E8F8B"}},","),t("span",{style:{color:"#393A34"}}," serde"),t("span",{style:{color:"#AB5959"}},"::"),t("span",{style:{color:"#6C7834"}},"Deserialize"),t("span",{style:{color:"#8E8F8B"}},")]")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#AB5959"}},"struct"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#6C7834"}},"Greeting"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8E8F8B"}},"{")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#1C6B48"}},"pub"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8C862B"}},"who"),t("span",{style:{color:"#AB5959"}},":"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#6C7834"}},"String")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#8E8F8B"}},"}")]),d(`
`),t("span",{class:"line"}),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#1C6B48"}},"fn"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#6C7834"}},"main"),t("span",{style:{color:"#8E8F8B"}},"()"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8E8F8B"}},"{")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#AB5959"}},"let"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8C862B"}},"raw"),t("span",{style:{color:"#AB5959"}},":"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#AB5959"}},"&"),t("span",{style:{color:"#8E8F8B"}},"["),t("span",{style:{color:"#6C7834"}},"u8"),t("span",{style:{color:"#8E8F8B"}},"]"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#AB5959"}},"="),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#B56959"}},'b"{'),t("span",{style:{color:"#A65E2B"}},'\\"'),t("span",{style:{color:"#B56959"}},"who"),t("span",{style:{color:"#A65E2B"}},'\\"'),t("span",{style:{color:"#B56959"}},": "),t("span",{style:{color:"#A65E2B"}},'\\"'),t("span",{style:{color:"#B56959"}},"world"),t("span",{style:{color:"#A65E2B"}},"\\x"),t("span",{style:{color:"#B56959"}},"80"),t("span",{style:{color:"#A65E2B"}},'\\"'),t("span",{style:{color:"#B56959"}},'}"'),t("span",{style:{color:"#8E8F8B"}},";")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#A0ADA0"}},"    // for illustrative purposes")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#AB5959"}},"let"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8C862B"}},"s"),t("span",{style:{color:"#AB5959"}},":"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#AB5959"}},"&"),t("span",{style:{color:"#6C7834"}},"str"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#AB5959"}},"="),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#1C6B48"}},"unsafe"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8E8F8B"}},"{"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#6C7834"}},"std"),t("span",{style:{color:"#AB5959"}},"::"),t("span",{style:{color:"#6C7834"}},"str"),t("span",{style:{color:"#AB5959"}},"::"),t("span",{style:{color:"#6C7834"}},"from_utf8_unchecked"),t("span",{style:{color:"#8E8F8B"}},"("),t("span",{style:{color:"#8C862B"}},"raw"),t("span",{style:{color:"#8E8F8B"}},")"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8E8F8B"}},"};")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    ")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#AB5959"}},"let"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8C862B"}},"greeting"),t("span",{style:{color:"#AB5959"}},":"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#6C7834"}},"Greeting"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#AB5959"}},"="),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#6C7834"}},"serde_json"),t("span",{style:{color:"#AB5959"}},"::"),t("span",{style:{color:"#6C7834"}},"from_str"),t("span",{style:{color:"#8E8F8B"}},"("),t("span",{style:{color:"#8C862B"}},"s"),t("span",{style:{color:"#8E8F8B"}},")"),t("span",{style:{color:"#AB5959"}},"."),t("span",{style:{color:"#6C7834"}},"unwrap"),t("span",{style:{color:"#8E8F8B"}},"();")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    ")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#6C7834"}},"println!"),t("span",{style:{color:"#8E8F8B"}},"("),t("span",{style:{color:"#B56959"}},'"Hello '),t("span",{style:{color:"#8E8F8B"}},"{}"),t("span",{style:{color:"#B56959"}},'!"'),t("span",{style:{color:"#8E8F8B"}},","),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8C862B"}},"greeting"),t("span",{style:{color:"#AB5959"}},"."),t("span",{style:{color:"#393A34"}},"who"),t("span",{style:{color:"#8E8F8B"}},");")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),b7={class:"mt-7"},x7=t("blockquote",null,[t("p",null,"JSON text exchanged between systems that are not part of a closed ecosystem MUST be encoded using UTF-8")],-1),A7=[x7],w7=t("footer",null,[t("p",null,[d("Ref: "),t("a",{href:"https://datatracker.ietf.org/doc/html/rfc8259#section-8.1",target:"_blank",rel:"noopener"},"https://datatracker.ietf.org/doc/html/rfc8259#section-8.1")])],-1),B7={__name:"46",setup(e){const n={hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"};return L(H),(s,o)=>{const l=Ut,r=ot,a=qt("click");return v(),W(Fe,le(oe(n)),{default:O(()=>[g7,I(l,je({},{ranges:[""]}),{default:O(()=>[v7]),_:1},16),I(r,null,{default:O(()=>[I(l,je({},{ranges:["all","1-4,7-9","1-4,11","1-4,13","all"]}),{default:O(()=>[_7]),_:1},16)]),_:1}),Ke((v(),k("div",b7,A7)),[[a]]),w7]),_:1},16)}}},k7=V(B7,[["__file","/@slidev/slides/46.md"]]),C7=t("h2",null,"Conventially UTF-8 vs. Gauranteed",-1),F7=t("p",null,"Sometimes you just want cats:",-1),E7=t("pre",{class:"shiki-container"},[t("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#4D9375"}},"use"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#A1B567"}},"bstr"),t("span",{style:{color:"#CB7676"}},"::"),t("span",{style:{color:"#A1B567"}},"ByteSlice"),t("span",{style:{color:"#858585"}},";")]),d(`
`),t("span",{class:"line"}),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#4D9375"}},"fn"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#A1B567"}},"main"),t("span",{style:{color:"#858585"}},"()"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#858585"}},"{")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#CB7676"}},"let"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#B8A965"}},"raw"),t("span",{style:{color:"#CB7676"}},":"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#CB7676"}},"&"),t("span",{style:{color:"#858585"}},"["),t("span",{style:{color:"#A1B567"}},"u8"),t("span",{style:{color:"#858585"}},"]"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#CB7676"}},"=")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"        "),t("span",{style:{color:"#C98A7D"}},'b"'),t("span",{style:{color:"#D4976C"}},"\\x"),t("span",{style:{color:"#C98A7D"}},"80"),t("span",{style:{color:"#D4976C"}},"\\x"),t("span",{style:{color:"#C98A7D"}},"90"),t("span",{style:{color:"#D4976C"}},"\\x"),t("span",{style:{color:"#C98A7D"}},"F0"),t("span",{style:{color:"#D4976C"}},"\\x"),t("span",{style:{color:"#C98A7D"}},"9F"),t("span",{style:{color:"#D4976C"}},"\\x"),t("span",{style:{color:"#C98A7D"}},"99"),t("span",{style:{color:"#D4976C"}},"\\x"),t("span",{style:{color:"#C98A7D"}},"84Pl"),t("span",{style:{color:"#D4976C"}},"\\x"),t("span",{style:{color:"#C98A7D"}},"F0"),t("span",{style:{color:"#D4976C"}},"\\x"),t("span",{style:{color:"#C98A7D"}},"9F"),t("span",{style:{color:"#D4976C"}},"\\x"),t("span",{style:{color:"#C98A7D"}},"98"),t("span",{style:{color:"#D4976C"}},"\\x"),t("span",{style:{color:"#C98A7D"}},"BBain"),t("span",{style:{color:"#D4976C"}},"\\x"),t("span",{style:{color:"#C98A7D"}},"F0"),t("span",{style:{color:"#D4976C"}},"\\x"),t("span",{style:{color:"#C98A7D"}},"9F"),t("span",{style:{color:"#D4976C"}},"\\x"),t("span",{style:{color:"#C98A7D"}},"98"),t("span",{style:{color:"#D4976C"}},"\\x"),t("span",{style:{color:"#C98A7D"}},"BEText!"),t("span",{style:{color:"#D4976C"}},"\\x"),t("span",{style:{color:"#C98A7D"}},"80"),t("span",{style:{color:"#D4976C"}},"\\x"),t("span",{style:{color:"#C98A7D"}},"80"),t("span",{style:{color:"#D4976C"}},"\\x"),t("span",{style:{color:"#C98A7D"}},'80"'),t("span",{style:{color:"#858585"}},";")]),d(`
`),t("span",{class:"line"}),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#CB7676"}},"let"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#B8A965"}},"cats"),t("span",{style:{color:"#CB7676"}},":"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#A1B567"}},"String"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#CB7676"}},"="),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#B8A965"}},"raw")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"        "),t("span",{style:{color:"#CB7676"}},"."),t("span",{style:{color:"#A1B567"}},"chars"),t("span",{style:{color:"#858585"}},"()")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"        "),t("span",{style:{color:"#CB7676"}},"."),t("span",{style:{color:"#A1B567"}},"filter"),t("span",{style:{color:"#858585"}},"("),t("span",{style:{color:"#CB7676"}},"|"),t("span",{style:{color:"#B8A965"}},"c"),t("span",{style:{color:"#CB7676"}},"|"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#858585"}},"("),t("span",{style:{color:"#858585"}},"'"),t("span",{style:{color:"#D4976C"}},"\\u{1F638}"),t("span",{style:{color:"#858585"}},"'"),t("span",{style:{color:"#CB7676"}},".."),t("span",{style:{color:"#858585"}},"'"),t("span",{style:{color:"#D4976C"}},"\\u{1F640}"),t("span",{style:{color:"#858585"}},"'"),t("span",{style:{color:"#858585"}},")"),t("span",{style:{color:"#CB7676"}},"."),t("span",{style:{color:"#A1B567"}},"contains"),t("span",{style:{color:"#858585"}},"("),t("span",{style:{color:"#B8A965"}},"c"),t("span",{style:{color:"#858585"}},"))")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"        "),t("span",{style:{color:"#CB7676"}},"."),t("span",{style:{color:"#A1B567"}},"collect"),t("span",{style:{color:"#858585"}},"();")]),d(`
`),t("span",{class:"line"}),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#A1B567"}},"println!"),t("span",{style:{color:"#858585"}},"("),t("span",{style:{color:"#C98A7D"}},'"Cats: '),t("span",{style:{color:"#858585"}},"{}"),t("span",{style:{color:"#C98A7D"}},'"'),t("span",{style:{color:"#858585"}},","),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#B8A965"}},"cats"),t("span",{style:{color:"#858585"}},");")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#758575"}},"    // Cats: 😻😾")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#858585"}},"}")])])]),t("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#1C6B48"}},"use"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#6C7834"}},"bstr"),t("span",{style:{color:"#AB5959"}},"::"),t("span",{style:{color:"#6C7834"}},"ByteSlice"),t("span",{style:{color:"#8E8F8B"}},";")]),d(`
`),t("span",{class:"line"}),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#1C6B48"}},"fn"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#6C7834"}},"main"),t("span",{style:{color:"#8E8F8B"}},"()"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8E8F8B"}},"{")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#AB5959"}},"let"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8C862B"}},"raw"),t("span",{style:{color:"#AB5959"}},":"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#AB5959"}},"&"),t("span",{style:{color:"#8E8F8B"}},"["),t("span",{style:{color:"#6C7834"}},"u8"),t("span",{style:{color:"#8E8F8B"}},"]"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#AB5959"}},"=")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"        "),t("span",{style:{color:"#B56959"}},'b"'),t("span",{style:{color:"#A65E2B"}},"\\x"),t("span",{style:{color:"#B56959"}},"80"),t("span",{style:{color:"#A65E2B"}},"\\x"),t("span",{style:{color:"#B56959"}},"90"),t("span",{style:{color:"#A65E2B"}},"\\x"),t("span",{style:{color:"#B56959"}},"F0"),t("span",{style:{color:"#A65E2B"}},"\\x"),t("span",{style:{color:"#B56959"}},"9F"),t("span",{style:{color:"#A65E2B"}},"\\x"),t("span",{style:{color:"#B56959"}},"99"),t("span",{style:{color:"#A65E2B"}},"\\x"),t("span",{style:{color:"#B56959"}},"84Pl"),t("span",{style:{color:"#A65E2B"}},"\\x"),t("span",{style:{color:"#B56959"}},"F0"),t("span",{style:{color:"#A65E2B"}},"\\x"),t("span",{style:{color:"#B56959"}},"9F"),t("span",{style:{color:"#A65E2B"}},"\\x"),t("span",{style:{color:"#B56959"}},"98"),t("span",{style:{color:"#A65E2B"}},"\\x"),t("span",{style:{color:"#B56959"}},"BBain"),t("span",{style:{color:"#A65E2B"}},"\\x"),t("span",{style:{color:"#B56959"}},"F0"),t("span",{style:{color:"#A65E2B"}},"\\x"),t("span",{style:{color:"#B56959"}},"9F"),t("span",{style:{color:"#A65E2B"}},"\\x"),t("span",{style:{color:"#B56959"}},"98"),t("span",{style:{color:"#A65E2B"}},"\\x"),t("span",{style:{color:"#B56959"}},"BEText!"),t("span",{style:{color:"#A65E2B"}},"\\x"),t("span",{style:{color:"#B56959"}},"80"),t("span",{style:{color:"#A65E2B"}},"\\x"),t("span",{style:{color:"#B56959"}},"80"),t("span",{style:{color:"#A65E2B"}},"\\x"),t("span",{style:{color:"#B56959"}},'80"'),t("span",{style:{color:"#8E8F8B"}},";")]),d(`
`),t("span",{class:"line"}),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#AB5959"}},"let"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8C862B"}},"cats"),t("span",{style:{color:"#AB5959"}},":"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#6C7834"}},"String"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#AB5959"}},"="),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8C862B"}},"raw")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"        "),t("span",{style:{color:"#AB5959"}},"."),t("span",{style:{color:"#6C7834"}},"chars"),t("span",{style:{color:"#8E8F8B"}},"()")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"        "),t("span",{style:{color:"#AB5959"}},"."),t("span",{style:{color:"#6C7834"}},"filter"),t("span",{style:{color:"#8E8F8B"}},"("),t("span",{style:{color:"#AB5959"}},"|"),t("span",{style:{color:"#8C862B"}},"c"),t("span",{style:{color:"#AB5959"}},"|"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8E8F8B"}},"("),t("span",{style:{color:"#8E8F8B"}},"'"),t("span",{style:{color:"#A65E2B"}},"\\u{1F638}"),t("span",{style:{color:"#8E8F8B"}},"'"),t("span",{style:{color:"#AB5959"}},".."),t("span",{style:{color:"#8E8F8B"}},"'"),t("span",{style:{color:"#A65E2B"}},"\\u{1F640}"),t("span",{style:{color:"#8E8F8B"}},"'"),t("span",{style:{color:"#8E8F8B"}},")"),t("span",{style:{color:"#AB5959"}},"."),t("span",{style:{color:"#6C7834"}},"contains"),t("span",{style:{color:"#8E8F8B"}},"("),t("span",{style:{color:"#8C862B"}},"c"),t("span",{style:{color:"#8E8F8B"}},"))")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"        "),t("span",{style:{color:"#AB5959"}},"."),t("span",{style:{color:"#6C7834"}},"collect"),t("span",{style:{color:"#8E8F8B"}},"();")]),d(`
`),t("span",{class:"line"}),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#6C7834"}},"println!"),t("span",{style:{color:"#8E8F8B"}},"("),t("span",{style:{color:"#B56959"}},'"Cats: '),t("span",{style:{color:"#8E8F8B"}},"{}"),t("span",{style:{color:"#B56959"}},'"'),t("span",{style:{color:"#8E8F8B"}},","),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8C862B"}},"cats"),t("span",{style:{color:"#8E8F8B"}},");")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#A0ADA0"}},"    // Cats: 😻😾")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),D7=t("p",null,[t("code",null,"bstr"),d(" crate - #182 on crates.io")],-1),S7=t("blockquote",null,[t("p",null,"The primary motivation for byte strings is for handling arbitrary bytes that are mostly UTF-8.")],-1),T7=t("p",null,[d("Ref: "),t("a",{href:"https://crates.io/crates/bstr",target:"_blank",rel:"noopener"},"https://crates.io/crates/bstr")],-1),$7={__name:"47",setup(e){const n={hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"};return L(H),(s,o)=>{const l=Ut,r=Ni,a=ot;return v(),W(Fe,le(oe(n)),{default:O(()=>[C7,F7,I(l,je({},{ranges:[""]}),{default:O(()=>[E7]),_:1},16),I(a,null,{default:O(()=>[I(r,{x1:"220",y1:"150",x2:"190",y2:"210",class:"color-red"}),I(r,{x1:"250",y1:"150",x2:"220",y2:"210",class:"color-red"}),I(r,{x1:"700",y1:"150",x2:"670",y2:"210",class:"color-red"}),I(r,{x1:"725",y1:"150",x2:"695",y2:"210",class:"color-red"}),I(r,{x1:"750",y1:"150",x2:"720",y2:"210",class:"color-red"})]),_:1}),I(a,null,{default:O(()=>[D7,S7,T7]),_:1})]),_:1},16)}}},U7=V($7,[["__file","/@slidev/slides/47.md"]]),O7=t("h2",null,"Summary",-1),P7=t("p",null,[t("code",null,"str"),d(" is the primitive string - a slice of bytes with gaurantees of UTF-8")],-1),I7=t("p",null,[t("code",null,"str"),d(" is always "),t("code",null,"UTF-8")],-1),M7=t("p",null,[t("code",null,"UTF8Error"),d(" is because you should be handling bytes instead of strings")],-1),L7=t("p",null,[t("code",null,"bstr"),d(" if you want Conventially UTF-8 instead")],-1),R7={__name:"48",setup(e){const n={layout:"center",hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"};return L(H),(s,o)=>{const l=$t;return v(),W(et,le(oe(n)),{default:O(()=>[O7,I(l,null,{default:O(()=>[P7,I7,M7,L7]),_:1})]),_:1},16)}}},N7=V(R7,[["__file","/@slidev/slides/48.md"]]),q7=t("h1",null,"Quirks",-1),W7={__name:"49",setup(e){const n={layout:"cover",hide:!1,srcSequence:"./pages/04-quirks.md"};return L(H),(s,o)=>(v(),W(Gs,le(oe(n)),{default:O(()=>[q7]),_:1},16))}},j7=V(W7,[["__file","/@slidev/slides/49.md"]]),H7=t("h2",null,"Can we just know which UTF Encoding by looking at the bytes?",-1),V7=t("pre",{class:"shiki-container"},[t("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#4D9375"}},"fn"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#A1B567"}},"main"),t("span",{style:{color:"#858585"}},"()"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#858585"}},"{")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#CB7676"}},"let"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#B8A965"}},"s"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#CB7676"}},"="),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#C98A7D"}},'b"'),t("span",{style:{color:"#D4976C"}},"\\x00\\x10\\x"),t("span",{style:{color:"#C98A7D"}},"CA"),t("span",{style:{color:"#D4976C"}},"\\x"),t("span",{style:{color:"#C98A7D"}},"9C"),t("span",{style:{color:"#D4976C"}},"\\x00\\x10\\x"),t("span",{style:{color:"#C98A7D"}},"C9"),t("span",{style:{color:"#D4976C"}},"\\x"),t("span",{style:{color:"#C98A7D"}},"98"),t("span",{style:{color:"#D4976C"}},"\\x00\\x10\\x"),t("span",{style:{color:"#C98A7D"}},"C9"),t("span",{style:{color:"#D4976C"}},"\\x"),t("span",{style:{color:"#C98A7D"}},"AD"),t("span",{style:{color:"#D4976C"}},"\\x00\\x10\\x"),t("span",{style:{color:"#C98A7D"}},"C9"),t("span",{style:{color:"#D4976C"}},"\\x"),t("span",{style:{color:"#C98A7D"}},"AD"),t("span",{style:{color:"#D4976C"}},"\\x00\\x10\\x"),t("span",{style:{color:"#C98A7D"}},"CA"),t("span",{style:{color:"#D4976C"}},"\\x"),t("span",{style:{color:"#C98A7D"}},'98"'),t("span",{style:{color:"#858585"}},";")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    ")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#758575"}},"    // UTF-8 decode")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#CB7676"}},"let"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#B8A965"}},"utf8_s"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#CB7676"}},"="),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#A1B567"}},"std"),t("span",{style:{color:"#CB7676"}},"::"),t("span",{style:{color:"#A1B567"}},"str"),t("span",{style:{color:"#CB7676"}},"::"),t("span",{style:{color:"#A1B567"}},"from_utf8"),t("span",{style:{color:"#858585"}},"("),t("span",{style:{color:"#B8A965"}},"s"),t("span",{style:{color:"#858585"}},")"),t("span",{style:{color:"#CB7676"}},"."),t("span",{style:{color:"#A1B567"}},"unwrap"),t("span",{style:{color:"#858585"}},"();")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#A1B567"}},"println!"),t("span",{style:{color:"#858585"}},"("),t("span",{style:{color:"#C98A7D"}},'" UTF-8: '),t("span",{style:{color:"#858585"}},"{"),t("span",{style:{color:"#C98A7D"}},"utf8_s"),t("span",{style:{color:"#858585"}},"}"),t("span",{style:{color:"#C98A7D"}},'"'),t("span",{style:{color:"#858585"}},");")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    ")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#758575"}},"    // UTF-16 decode")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#CB7676"}},"let"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#B8A965"}},"utf16"),t("span",{style:{color:"#CB7676"}},":"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#A1B567"}},"Vec"),t("span",{style:{color:"#858585"}},"<"),t("span",{style:{color:"#A1B567"}},"u16"),t("span",{style:{color:"#858585"}},">"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#CB7676"}},"="),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#B8A965"}},"s"),t("span",{style:{color:"#CB7676"}},"."),t("span",{style:{color:"#A1B567"}},"chunks"),t("span",{style:{color:"#858585"}},"("),t("span",{style:{color:"#6394BF"}},"2"),t("span",{style:{color:"#858585"}},")")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"        "),t("span",{style:{color:"#CB7676"}},"."),t("span",{style:{color:"#A1B567"}},"map"),t("span",{style:{color:"#858585"}},"("),t("span",{style:{color:"#CB7676"}},"|"),t("span",{style:{color:"#B8A965"}},"c"),t("span",{style:{color:"#CB7676"}},"|"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#858585"}},"("),t("span",{style:{color:"#B8A965"}},"c"),t("span",{style:{color:"#858585"}},"["),t("span",{style:{color:"#6394BF"}},"0"),t("span",{style:{color:"#858585"}},"]"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#4D9375"}},"as"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#A1B567"}},"u16"),t("span",{style:{color:"#858585"}},")"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#CB7676"}},"<<"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#6394BF"}},"8"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#CB7676"}},"|"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#858585"}},"("),t("span",{style:{color:"#B8A965"}},"c"),t("span",{style:{color:"#858585"}},"["),t("span",{style:{color:"#6394BF"}},"1"),t("span",{style:{color:"#858585"}},"]"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#4D9375"}},"as"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#A1B567"}},"u16"),t("span",{style:{color:"#858585"}},"))")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"        "),t("span",{style:{color:"#CB7676"}},"."),t("span",{style:{color:"#A1B567"}},"collect"),t("span",{style:{color:"#858585"}},"();")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#CB7676"}},"let"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#B8A965"}},"utf16_s"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#CB7676"}},"="),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#A1B567"}},"char"),t("span",{style:{color:"#CB7676"}},"::"),t("span",{style:{color:"#A1B567"}},"decode_utf16"),t("span",{style:{color:"#858585"}},"("),t("span",{style:{color:"#B8A965"}},"utf16"),t("span",{style:{color:"#858585"}},")")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"        "),t("span",{style:{color:"#CB7676"}},"."),t("span",{style:{color:"#A1B567"}},"map"),t("span",{style:{color:"#858585"}},"("),t("span",{style:{color:"#CB7676"}},"|"),t("span",{style:{color:"#B8A965"}},"r"),t("span",{style:{color:"#CB7676"}},"|"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#B8A965"}},"r"),t("span",{style:{color:"#CB7676"}},"."),t("span",{style:{color:"#A1B567"}},"unwrap_or"),t("span",{style:{color:"#858585"}},"("),t("span",{style:{color:"#A1B567"}},"char"),t("span",{style:{color:"#CB7676"}},"::"),t("span",{style:{color:"#D4976C"}},"REPLACEMENT_CHARACTER"),t("span",{style:{color:"#858585"}},"))")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"        "),t("span",{style:{color:"#CB7676"}},"."),t("span",{style:{color:"#A1B567"}},"collect"),t("span",{style:{color:"#CB7676"}},"::"),t("span",{style:{color:"#858585"}},"<"),t("span",{style:{color:"#A1B567"}},"String"),t("span",{style:{color:"#858585"}},">();")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#A1B567"}},"println!"),t("span",{style:{color:"#858585"}},"("),t("span",{style:{color:"#C98A7D"}},'"UTF-16: '),t("span",{style:{color:"#858585"}},"{"),t("span",{style:{color:"#C98A7D"}},"utf16_s"),t("span",{style:{color:"#858585"}},"}"),t("span",{style:{color:"#C98A7D"}},'"'),t("span",{style:{color:"#858585"}},");")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    ")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#758575"}},"    // UTF-32 decode")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#CB7676"}},"let"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#B8A965"}},"utf32_s"),t("span",{style:{color:"#CB7676"}},":"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#A1B567"}},"String"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#CB7676"}},"="),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#B8A965"}},"s"),t("span",{style:{color:"#CB7676"}},"."),t("span",{style:{color:"#A1B567"}},"chunks"),t("span",{style:{color:"#858585"}},"("),t("span",{style:{color:"#6394BF"}},"4"),t("span",{style:{color:"#858585"}},")")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"        "),t("span",{style:{color:"#CB7676"}},"."),t("span",{style:{color:"#A1B567"}},"map"),t("span",{style:{color:"#858585"}},"("),t("span",{style:{color:"#CB7676"}},"|"),t("span",{style:{color:"#B8A965"}},"c"),t("span",{style:{color:"#CB7676"}},"|"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#858585"}},"("),t("span",{style:{color:"#B8A965"}},"c"),t("span",{style:{color:"#858585"}},"["),t("span",{style:{color:"#6394BF"}},"0"),t("span",{style:{color:"#858585"}},"]"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#4D9375"}},"as"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#A1B567"}},"u32"),t("span",{style:{color:"#858585"}},")"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#CB7676"}},"<<"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#6394BF"}},"24"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#CB7676"}},"|"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#858585"}},"("),t("span",{style:{color:"#B8A965"}},"c"),t("span",{style:{color:"#858585"}},"["),t("span",{style:{color:"#6394BF"}},"1"),t("span",{style:{color:"#858585"}},"]"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#4D9375"}},"as"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#A1B567"}},"u32"),t("span",{style:{color:"#858585"}},")"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#CB7676"}},"<<"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#6394BF"}},"16"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#CB7676"}},"|"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#858585"}},"("),t("span",{style:{color:"#B8A965"}},"c"),t("span",{style:{color:"#858585"}},"["),t("span",{style:{color:"#6394BF"}},"2"),t("span",{style:{color:"#858585"}},"]"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#4D9375"}},"as"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#A1B567"}},"u32"),t("span",{style:{color:"#858585"}},")"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#CB7676"}},"<<"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#6394BF"}},"8"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#CB7676"}},"|"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#858585"}},"("),t("span",{style:{color:"#B8A965"}},"c"),t("span",{style:{color:"#858585"}},"["),t("span",{style:{color:"#6394BF"}},"3"),t("span",{style:{color:"#858585"}},"]"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#4D9375"}},"as"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#A1B567"}},"u32"),t("span",{style:{color:"#858585"}},"))")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"        "),t("span",{style:{color:"#CB7676"}},"."),t("span",{style:{color:"#A1B567"}},"map"),t("span",{style:{color:"#858585"}},"("),t("span",{style:{color:"#CB7676"}},"|"),t("span",{style:{color:"#B8A965"}},"c"),t("span",{style:{color:"#CB7676"}},"|"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#A1B567"}},"char"),t("span",{style:{color:"#CB7676"}},"::"),t("span",{style:{color:"#A1B567"}},"from_u32"),t("span",{style:{color:"#858585"}},"("),t("span",{style:{color:"#B8A965"}},"c"),t("span",{style:{color:"#858585"}},")"),t("span",{style:{color:"#CB7676"}},"."),t("span",{style:{color:"#A1B567"}},"unwrap"),t("span",{style:{color:"#858585"}},"())")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"        "),t("span",{style:{color:"#CB7676"}},"."),t("span",{style:{color:"#A1B567"}},"collect"),t("span",{style:{color:"#858585"}},"();")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#A1B567"}},"println!"),t("span",{style:{color:"#858585"}},"("),t("span",{style:{color:"#C98A7D"}},'"UTF-32: '),t("span",{style:{color:"#858585"}},"{}"),t("span",{style:{color:"#C98A7D"}},'"'),t("span",{style:{color:"#858585"}},","),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#B8A965"}},"utf32_s"),t("span",{style:{color:"#858585"}},");")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#858585"}},"}")])])]),t("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#1C6B48"}},"fn"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#6C7834"}},"main"),t("span",{style:{color:"#8E8F8B"}},"()"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8E8F8B"}},"{")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#AB5959"}},"let"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8C862B"}},"s"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#AB5959"}},"="),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#B56959"}},'b"'),t("span",{style:{color:"#A65E2B"}},"\\x00\\x10\\x"),t("span",{style:{color:"#B56959"}},"CA"),t("span",{style:{color:"#A65E2B"}},"\\x"),t("span",{style:{color:"#B56959"}},"9C"),t("span",{style:{color:"#A65E2B"}},"\\x00\\x10\\x"),t("span",{style:{color:"#B56959"}},"C9"),t("span",{style:{color:"#A65E2B"}},"\\x"),t("span",{style:{color:"#B56959"}},"98"),t("span",{style:{color:"#A65E2B"}},"\\x00\\x10\\x"),t("span",{style:{color:"#B56959"}},"C9"),t("span",{style:{color:"#A65E2B"}},"\\x"),t("span",{style:{color:"#B56959"}},"AD"),t("span",{style:{color:"#A65E2B"}},"\\x00\\x10\\x"),t("span",{style:{color:"#B56959"}},"C9"),t("span",{style:{color:"#A65E2B"}},"\\x"),t("span",{style:{color:"#B56959"}},"AD"),t("span",{style:{color:"#A65E2B"}},"\\x00\\x10\\x"),t("span",{style:{color:"#B56959"}},"CA"),t("span",{style:{color:"#A65E2B"}},"\\x"),t("span",{style:{color:"#B56959"}},'98"'),t("span",{style:{color:"#8E8F8B"}},";")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    ")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#A0ADA0"}},"    // UTF-8 decode")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#AB5959"}},"let"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8C862B"}},"utf8_s"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#AB5959"}},"="),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#6C7834"}},"std"),t("span",{style:{color:"#AB5959"}},"::"),t("span",{style:{color:"#6C7834"}},"str"),t("span",{style:{color:"#AB5959"}},"::"),t("span",{style:{color:"#6C7834"}},"from_utf8"),t("span",{style:{color:"#8E8F8B"}},"("),t("span",{style:{color:"#8C862B"}},"s"),t("span",{style:{color:"#8E8F8B"}},")"),t("span",{style:{color:"#AB5959"}},"."),t("span",{style:{color:"#6C7834"}},"unwrap"),t("span",{style:{color:"#8E8F8B"}},"();")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#6C7834"}},"println!"),t("span",{style:{color:"#8E8F8B"}},"("),t("span",{style:{color:"#B56959"}},'" UTF-8: '),t("span",{style:{color:"#8E8F8B"}},"{"),t("span",{style:{color:"#B56959"}},"utf8_s"),t("span",{style:{color:"#8E8F8B"}},"}"),t("span",{style:{color:"#B56959"}},'"'),t("span",{style:{color:"#8E8F8B"}},");")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    ")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#A0ADA0"}},"    // UTF-16 decode")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#AB5959"}},"let"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8C862B"}},"utf16"),t("span",{style:{color:"#AB5959"}},":"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#6C7834"}},"Vec"),t("span",{style:{color:"#8E8F8B"}},"<"),t("span",{style:{color:"#6C7834"}},"u16"),t("span",{style:{color:"#8E8F8B"}},">"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#AB5959"}},"="),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8C862B"}},"s"),t("span",{style:{color:"#AB5959"}},"."),t("span",{style:{color:"#6C7834"}},"chunks"),t("span",{style:{color:"#8E8F8B"}},"("),t("span",{style:{color:"#296AA3"}},"2"),t("span",{style:{color:"#8E8F8B"}},")")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"        "),t("span",{style:{color:"#AB5959"}},"."),t("span",{style:{color:"#6C7834"}},"map"),t("span",{style:{color:"#8E8F8B"}},"("),t("span",{style:{color:"#AB5959"}},"|"),t("span",{style:{color:"#8C862B"}},"c"),t("span",{style:{color:"#AB5959"}},"|"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8E8F8B"}},"("),t("span",{style:{color:"#8C862B"}},"c"),t("span",{style:{color:"#8E8F8B"}},"["),t("span",{style:{color:"#296AA3"}},"0"),t("span",{style:{color:"#8E8F8B"}},"]"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#1C6B48"}},"as"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#6C7834"}},"u16"),t("span",{style:{color:"#8E8F8B"}},")"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#AB5959"}},"<<"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#296AA3"}},"8"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#AB5959"}},"|"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8E8F8B"}},"("),t("span",{style:{color:"#8C862B"}},"c"),t("span",{style:{color:"#8E8F8B"}},"["),t("span",{style:{color:"#296AA3"}},"1"),t("span",{style:{color:"#8E8F8B"}},"]"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#1C6B48"}},"as"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#6C7834"}},"u16"),t("span",{style:{color:"#8E8F8B"}},"))")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"        "),t("span",{style:{color:"#AB5959"}},"."),t("span",{style:{color:"#6C7834"}},"collect"),t("span",{style:{color:"#8E8F8B"}},"();")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#AB5959"}},"let"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8C862B"}},"utf16_s"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#AB5959"}},"="),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#6C7834"}},"char"),t("span",{style:{color:"#AB5959"}},"::"),t("span",{style:{color:"#6C7834"}},"decode_utf16"),t("span",{style:{color:"#8E8F8B"}},"("),t("span",{style:{color:"#8C862B"}},"utf16"),t("span",{style:{color:"#8E8F8B"}},")")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"        "),t("span",{style:{color:"#AB5959"}},"."),t("span",{style:{color:"#6C7834"}},"map"),t("span",{style:{color:"#8E8F8B"}},"("),t("span",{style:{color:"#AB5959"}},"|"),t("span",{style:{color:"#8C862B"}},"r"),t("span",{style:{color:"#AB5959"}},"|"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8C862B"}},"r"),t("span",{style:{color:"#AB5959"}},"."),t("span",{style:{color:"#6C7834"}},"unwrap_or"),t("span",{style:{color:"#8E8F8B"}},"("),t("span",{style:{color:"#6C7834"}},"char"),t("span",{style:{color:"#AB5959"}},"::"),t("span",{style:{color:"#A65E2B"}},"REPLACEMENT_CHARACTER"),t("span",{style:{color:"#8E8F8B"}},"))")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"        "),t("span",{style:{color:"#AB5959"}},"."),t("span",{style:{color:"#6C7834"}},"collect"),t("span",{style:{color:"#AB5959"}},"::"),t("span",{style:{color:"#8E8F8B"}},"<"),t("span",{style:{color:"#6C7834"}},"String"),t("span",{style:{color:"#8E8F8B"}},">();")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#6C7834"}},"println!"),t("span",{style:{color:"#8E8F8B"}},"("),t("span",{style:{color:"#B56959"}},'"UTF-16: '),t("span",{style:{color:"#8E8F8B"}},"{"),t("span",{style:{color:"#B56959"}},"utf16_s"),t("span",{style:{color:"#8E8F8B"}},"}"),t("span",{style:{color:"#B56959"}},'"'),t("span",{style:{color:"#8E8F8B"}},");")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    ")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#A0ADA0"}},"    // UTF-32 decode")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#AB5959"}},"let"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8C862B"}},"utf32_s"),t("span",{style:{color:"#AB5959"}},":"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#6C7834"}},"String"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#AB5959"}},"="),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8C862B"}},"s"),t("span",{style:{color:"#AB5959"}},"."),t("span",{style:{color:"#6C7834"}},"chunks"),t("span",{style:{color:"#8E8F8B"}},"("),t("span",{style:{color:"#296AA3"}},"4"),t("span",{style:{color:"#8E8F8B"}},")")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"        "),t("span",{style:{color:"#AB5959"}},"."),t("span",{style:{color:"#6C7834"}},"map"),t("span",{style:{color:"#8E8F8B"}},"("),t("span",{style:{color:"#AB5959"}},"|"),t("span",{style:{color:"#8C862B"}},"c"),t("span",{style:{color:"#AB5959"}},"|"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8E8F8B"}},"("),t("span",{style:{color:"#8C862B"}},"c"),t("span",{style:{color:"#8E8F8B"}},"["),t("span",{style:{color:"#296AA3"}},"0"),t("span",{style:{color:"#8E8F8B"}},"]"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#1C6B48"}},"as"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#6C7834"}},"u32"),t("span",{style:{color:"#8E8F8B"}},")"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#AB5959"}},"<<"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#296AA3"}},"24"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#AB5959"}},"|"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8E8F8B"}},"("),t("span",{style:{color:"#8C862B"}},"c"),t("span",{style:{color:"#8E8F8B"}},"["),t("span",{style:{color:"#296AA3"}},"1"),t("span",{style:{color:"#8E8F8B"}},"]"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#1C6B48"}},"as"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#6C7834"}},"u32"),t("span",{style:{color:"#8E8F8B"}},")"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#AB5959"}},"<<"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#296AA3"}},"16"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#AB5959"}},"|"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8E8F8B"}},"("),t("span",{style:{color:"#8C862B"}},"c"),t("span",{style:{color:"#8E8F8B"}},"["),t("span",{style:{color:"#296AA3"}},"2"),t("span",{style:{color:"#8E8F8B"}},"]"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#1C6B48"}},"as"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#6C7834"}},"u32"),t("span",{style:{color:"#8E8F8B"}},")"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#AB5959"}},"<<"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#296AA3"}},"8"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#AB5959"}},"|"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8E8F8B"}},"("),t("span",{style:{color:"#8C862B"}},"c"),t("span",{style:{color:"#8E8F8B"}},"["),t("span",{style:{color:"#296AA3"}},"3"),t("span",{style:{color:"#8E8F8B"}},"]"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#1C6B48"}},"as"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#6C7834"}},"u32"),t("span",{style:{color:"#8E8F8B"}},"))")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"        "),t("span",{style:{color:"#AB5959"}},"."),t("span",{style:{color:"#6C7834"}},"map"),t("span",{style:{color:"#8E8F8B"}},"("),t("span",{style:{color:"#AB5959"}},"|"),t("span",{style:{color:"#8C862B"}},"c"),t("span",{style:{color:"#AB5959"}},"|"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#6C7834"}},"char"),t("span",{style:{color:"#AB5959"}},"::"),t("span",{style:{color:"#6C7834"}},"from_u32"),t("span",{style:{color:"#8E8F8B"}},"("),t("span",{style:{color:"#8C862B"}},"c"),t("span",{style:{color:"#8E8F8B"}},")"),t("span",{style:{color:"#AB5959"}},"."),t("span",{style:{color:"#6C7834"}},"unwrap"),t("span",{style:{color:"#8E8F8B"}},"())")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"        "),t("span",{style:{color:"#AB5959"}},"."),t("span",{style:{color:"#6C7834"}},"collect"),t("span",{style:{color:"#8E8F8B"}},"();")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#6C7834"}},"println!"),t("span",{style:{color:"#8E8F8B"}},"("),t("span",{style:{color:"#B56959"}},'"UTF-32: '),t("span",{style:{color:"#8E8F8B"}},"{}"),t("span",{style:{color:"#B56959"}},'"'),t("span",{style:{color:"#8E8F8B"}},","),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8C862B"}},"utf32_s"),t("span",{style:{color:"#8E8F8B"}},");")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),z7={__name:"50",setup(e){const n={hide:!1,srcSequence:"./pages/04-quirks.md"};return L(H),(s,o)=>{const l=Ut;return v(),W(Fe,le(oe(n)),{default:O(()=>[H7,I(l,je({},{ranges:["all","1-2,23","1-6,23","1-2,8-15,23","1-2,17-23"]}),{default:O(()=>[V7]),_:1},16)]),_:1},16)}}},K7=V(z7,[["__file","/@slidev/slides/50.md"]]);const ah=e=>(vi("data-v-3fa8b34e"),e=e(),_i(),e),G7=ah(()=>t("div",{class:"output"},[t("p",{class:"text-xl width-100 text-center"},[t("p",null,[t("strong",null,"No")])]),t("pre",{class:"shiki-container"},[t("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#dbd7ca"}}," UTF-8: ʜɘɭɭʘ")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#dbd7ca"}},"UTF-16: 쪖즘즭즭쪘")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#dbd7ca"}},"UTF-32: 􌪜􌦘􌦭􌦭􌪘")])])]),t("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#393a34"}}," UTF-8: ʜɘɭɭʘ")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393a34"}},"UTF-16: 쪖즘즭즭쪘")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393a34"}},"UTF-32: 􌪜􌦘􌦭􌦭􌪘")])])])])],-1)),Y7=ah(()=>t("div",{class:"text-3xl absolute top-115 left-150"},'"I gained weight" 🤷',-1)),Q7={__name:"51",setup(e){const n={layout:"center",hide:!1,srcSequence:"./pages/04-quirks.md"};return L(H),(s,o)=>{const l=Ni,r=ot;return v(),W(et,le(oe(n)),{default:O(()=>[G7,I(r,null,{default:O(()=>[I(l,{x1:"700",y1:"450",x2:"600",y2:"320",width:"3"}),Y7]),_:1})]),_:1},16)}}},Z7=V(Q7,[["__scopeId","data-v-3fa8b34e"],["__file","/@slidev/slides/51.md"]]),J7=t("h2",null,"Streets!",-1),X7=t("p",null,"Straße!",-1),e4=t("p",null,"or…",-1),t4=t("pre",{class:"shiki-container"},[t("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#CB7676"}},"let"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#B8A965"}},"s"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#CB7676"}},"="),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#C98A7D"}},'"Straße"'),t("span",{style:{color:"#858585"}},";")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#CB7676"}},"let"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#B8A965"}},"upcase"),t("span",{style:{color:"#CB7676"}},":"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#A1B567"}},"String"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#CB7676"}},"="),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#B8A965"}},"s"),t("span",{style:{color:"#CB7676"}},"."),t("span",{style:{color:"#A1B567"}},"to_uppercase"),t("span",{style:{color:"#858585"}},"();")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#CB7676"}},"let"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#B8A965"}},"downcase"),t("span",{style:{color:"#CB7676"}},":"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#A1B567"}},"String"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#CB7676"}},"="),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#B8A965"}},"s"),t("span",{style:{color:"#CB7676"}},"."),t("span",{style:{color:"#A1B567"}},"to_lowercase"),t("span",{style:{color:"#858585"}},"();")])])]),t("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#AB5959"}},"let"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8C862B"}},"s"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#AB5959"}},"="),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#B56959"}},'"Straße"'),t("span",{style:{color:"#8E8F8B"}},";")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#AB5959"}},"let"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8C862B"}},"upcase"),t("span",{style:{color:"#AB5959"}},":"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#6C7834"}},"String"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#AB5959"}},"="),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8C862B"}},"s"),t("span",{style:{color:"#AB5959"}},"."),t("span",{style:{color:"#6C7834"}},"to_uppercase"),t("span",{style:{color:"#8E8F8B"}},"();")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#AB5959"}},"let"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8C862B"}},"downcase"),t("span",{style:{color:"#AB5959"}},":"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#6C7834"}},"String"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#AB5959"}},"="),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8C862B"}},"s"),t("span",{style:{color:"#AB5959"}},"."),t("span",{style:{color:"#6C7834"}},"to_lowercase"),t("span",{style:{color:"#8E8F8B"}},"();")])])])],-1),n4=t("p",null,"Questions:",-1),s4=t("ul",null,[t("li",null,[d("What does "),t("code",null,"upcase"),d(" contain?")]),t("li",null,[d("What does "),t("code",null,"downcase"),d(" contain?")]),t("li",null,[d("Why do we get "),t("code",null,"Strings"),d(" back?")])],-1),o4={class:"absolute top-75 left-90 list-circle"},l4=t("ul",null,[t("li",null,[t("code",null,"STRASSE")]),t("li",null,[t("code",null,"strasse")])],-1),r4=[l4],a4={class:"mt-5"},i4=t("pre",{class:"shiki-container"},[t("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#4D9375"}},"pub"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#4D9375"}},"fn"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#A1B567"}},"make_ascii_lowercase"),t("span",{style:{color:"#858585"}},"("),t("span",{style:{color:"#CB7676"}},"&mut"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#D4976C"}},"self"),t("span",{style:{color:"#858585"}},");")]),d(`
`),t("span",{class:"line"}),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#4D9375"}},"pub"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#4D9375"}},"fn"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#A1B567"}},"to_lowercase"),t("span",{style:{color:"#858585"}},"("),t("span",{style:{color:"#CB7676"}},"&"),t("span",{style:{color:"#D4976C"}},"self"),t("span",{style:{color:"#858585"}},")"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#CB7676"}},"->"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#A1B567"}},"String"),t("span",{style:{color:"#858585"}},";")])])]),t("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#1C6B48"}},"pub"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#1C6B48"}},"fn"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#6C7834"}},"make_ascii_lowercase"),t("span",{style:{color:"#8E8F8B"}},"("),t("span",{style:{color:"#AB5959"}},"&mut"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#A65E2B"}},"self"),t("span",{style:{color:"#8E8F8B"}},");")]),d(`
`),t("span",{class:"line"}),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#1C6B48"}},"pub"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#1C6B48"}},"fn"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#6C7834"}},"to_lowercase"),t("span",{style:{color:"#8E8F8B"}},"("),t("span",{style:{color:"#AB5959"}},"&"),t("span",{style:{color:"#A65E2B"}},"self"),t("span",{style:{color:"#8E8F8B"}},")"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#AB5959"}},"->"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#6C7834"}},"String"),t("span",{style:{color:"#8E8F8B"}},";")])])])],-1),c4={__name:"52",setup(e){const n={hide:!1,srcSequence:"./pages/04-quirks.md"};return L(H),(s,o)=>{const l=Ut,r=ot,a=qt("click");return v(),W(Fe,le(oe(n)),{default:O(()=>[J7,X7,e4,I(l,je({},{ranges:[""]}),{default:O(()=>[t4]),_:1},16),I(r,null,{default:O(()=>[n4,s4]),_:1}),Ke((v(),k("div",o4,r4)),[[a]]),Ke((v(),k("div",a4,[I(l,je({},{ranges:[""]}),{default:O(()=>[i4]),_:1},16)])),[[a]])]),_:1},16)}}},u4=V(c4,[["__file","/@slidev/slides/52.md"]]),p4=t("h2",null,"Casemapping!",-1),d4=t("blockquote",null,[t("p",null,"If it works in Turkey, it probably works everywhere")],-1),f4=t("p",null,[t("code",null,"Istanbul"),d(" or "),t("code",null,"İstanbul")],-1),h4={class:"flex flex-items-center flex-justify-center w-a"},y4=t("div",{class:"codepoint"},[t("div",{class:"glyph"},"İ"),t("div",{class:"code"},"U+0130")],-1),m4=t("div",{class:"inline-block mx-10 text-center"},[t("div",{class:"text-10"},"⇛"),t("div",null,[t("p",null,[t("code",null,"to_lowercase()")])])],-1),g4=t("div",{class:"codepoint"},[t("div",{class:"glyph"},"i"),t("div",{class:"code"},"U+0069")],-1),v4=[y4,m4,g4],_4={class:"flex flex-items-center flex-justify-center w-a"},b4=t("div",{class:"codepoint"},[t("div",{class:"glyph"},"i"),t("div",{class:"code"},"U+0069")],-1),x4=t("div",{class:"inline-block mx-10 text-center"},[t("div",{class:"text-10"},"⇛"),t("div",null,[t("p",null,[t("code",null,"to_uppercase()")])])],-1),A4=t("div",{class:"codepoint"},[t("div",{class:"glyph"},"I"),t("div",{class:"code"},"U+0049")],-1),w4=[b4,x4,A4],B4=t("footer",null,[t("p",null,[d("Special Casing: "),t("a",{href:"https://www.unicode.org/Public/UCD/latest/ucd/SpecialCasing.txt",target:"_blank",rel:"noopener"},"https://www.unicode.org/Public/UCD/latest/ucd/SpecialCasing.txt"),t("br"),d(" And an issue: "),t("a",{href:"https://github.com/rust-lang/rust/issues/72966",target:"_blank",rel:"noopener"},"https://github.com/rust-lang/rust/issues/72966")])],-1),k4={__name:"53",setup(e){const n={hide:!1,srcSequence:"./pages/04-quirks.md"};return L(H),(s,o)=>{const l=qt("click");return v(),W(Fe,le(oe(n)),{default:O(()=>[p4,d4,f4,Ke((v(),k("div",h4,v4)),[[l]]),Ke((v(),k("div",_4,w4)),[[l]]),B4]),_:1},16)}}},C4=V(k4,[["__file","/@slidev/slides/53.md"]]),F4=t("h2",null,"Composition",-1),E4=t("p",null,"A[cute] E",-1),D4=t("ul",null,[t("li",null,[d("é = "),t("code",null,"\\u00e9")]),t("li",null,[d("é = "),t("code",null,"\\u0065\\u0301"),d(" ("),t("code",null,"e"),d(" + combining "),t("code",null,"´"),d(")")])],-1),S4=t("pre",{class:"shiki-container"},[t("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#758575"}},"// assert_ne!('é', 'é');")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"   "),t("span",{style:{color:"#A1B567"}},"assert_ne!"),t("span",{style:{color:"#858585"}},"("),t("span",{style:{color:"#C98A7D"}},'"é"'),t("span",{style:{color:"#858585"}},","),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#C98A7D"}},'"é"'),t("span",{style:{color:"#858585"}},");")])])]),t("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#A0ADA0"}},"// assert_ne!('é', 'é');")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"   "),t("span",{style:{color:"#6C7834"}},"assert_ne!"),t("span",{style:{color:"#8E8F8B"}},"("),t("span",{style:{color:"#B56959"}},'"é"'),t("span",{style:{color:"#8E8F8B"}},","),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#B56959"}},'"é"'),t("span",{style:{color:"#8E8F8B"}},");")])])])],-1),T4=t("pre",{class:"shiki-container"},[t("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#4D9375"}},"use"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#A1B567"}},"unicode_normalization"),t("span",{style:{color:"#CB7676"}},"::"),t("span",{style:{color:"#A1B567"}},"UnicodeNormalization"),t("span",{style:{color:"#858585"}},";")]),d(`
`),t("span",{class:"line"}),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#4D9375"}},"fn"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#A1B567"}},"main"),t("span",{style:{color:"#858585"}},"()"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#858585"}},"{")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#CB7676"}},"let"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#B8A965"}},"u00e9"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#CB7676"}},"="),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#C98A7D"}},'"'),t("span",{style:{color:"#D4976C"}},"\\u{00e9}"),t("span",{style:{color:"#C98A7D"}},'"'),t("span",{style:{color:"#858585"}},";")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#CB7676"}},"let"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#B8A965"}},"u0065_u0301"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#CB7676"}},"="),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#C98A7D"}},'"'),t("span",{style:{color:"#D4976C"}},"\\u{0065}\\u{0301}"),t("span",{style:{color:"#C98A7D"}},'"'),t("span",{style:{color:"#858585"}},";")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    ")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#A1B567"}},"assert_ne!"),t("span",{style:{color:"#858585"}},"("),t("span",{style:{color:"#B8A965"}},"u00e9"),t("span",{style:{color:"#858585"}},","),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#B8A965"}},"u0065_u0301"),t("span",{style:{color:"#858585"}},");")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#A1B567"}},"assert_eq!"),t("span",{style:{color:"#858585"}},"(")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"        "),t("span",{style:{color:"#B8A965"}},"u00e9"),t("span",{style:{color:"#CB7676"}},"."),t("span",{style:{color:"#A1B567"}},"nfc"),t("span",{style:{color:"#858585"}},"()"),t("span",{style:{color:"#CB7676"}},"."),t("span",{style:{color:"#A1B567"}},"collect"),t("span",{style:{color:"#CB7676"}},"::"),t("span",{style:{color:"#858585"}},"<"),t("span",{style:{color:"#A1B567"}},"String"),t("span",{style:{color:"#858585"}},">(),")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"        "),t("span",{style:{color:"#B8A965"}},"u0065_u0301"),t("span",{style:{color:"#CB7676"}},"."),t("span",{style:{color:"#A1B567"}},"nfc"),t("span",{style:{color:"#858585"}},"()"),t("span",{style:{color:"#CB7676"}},"."),t("span",{style:{color:"#A1B567"}},"collect"),t("span",{style:{color:"#CB7676"}},"::"),t("span",{style:{color:"#858585"}},"<"),t("span",{style:{color:"#A1B567"}},"String"),t("span",{style:{color:"#858585"}},">()")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#858585"}},");")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#858585"}},"}")])])]),t("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#1C6B48"}},"use"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#6C7834"}},"unicode_normalization"),t("span",{style:{color:"#AB5959"}},"::"),t("span",{style:{color:"#6C7834"}},"UnicodeNormalization"),t("span",{style:{color:"#8E8F8B"}},";")]),d(`
`),t("span",{class:"line"}),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#1C6B48"}},"fn"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#6C7834"}},"main"),t("span",{style:{color:"#8E8F8B"}},"()"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8E8F8B"}},"{")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#AB5959"}},"let"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8C862B"}},"u00e9"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#AB5959"}},"="),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#B56959"}},'"'),t("span",{style:{color:"#A65E2B"}},"\\u{00e9}"),t("span",{style:{color:"#B56959"}},'"'),t("span",{style:{color:"#8E8F8B"}},";")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#AB5959"}},"let"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8C862B"}},"u0065_u0301"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#AB5959"}},"="),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#B56959"}},'"'),t("span",{style:{color:"#A65E2B"}},"\\u{0065}\\u{0301}"),t("span",{style:{color:"#B56959"}},'"'),t("span",{style:{color:"#8E8F8B"}},";")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    ")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#6C7834"}},"assert_ne!"),t("span",{style:{color:"#8E8F8B"}},"("),t("span",{style:{color:"#8C862B"}},"u00e9"),t("span",{style:{color:"#8E8F8B"}},","),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8C862B"}},"u0065_u0301"),t("span",{style:{color:"#8E8F8B"}},");")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#6C7834"}},"assert_eq!"),t("span",{style:{color:"#8E8F8B"}},"(")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"        "),t("span",{style:{color:"#8C862B"}},"u00e9"),t("span",{style:{color:"#AB5959"}},"."),t("span",{style:{color:"#6C7834"}},"nfc"),t("span",{style:{color:"#8E8F8B"}},"()"),t("span",{style:{color:"#AB5959"}},"."),t("span",{style:{color:"#6C7834"}},"collect"),t("span",{style:{color:"#AB5959"}},"::"),t("span",{style:{color:"#8E8F8B"}},"<"),t("span",{style:{color:"#6C7834"}},"String"),t("span",{style:{color:"#8E8F8B"}},">(),")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"        "),t("span",{style:{color:"#8C862B"}},"u0065_u0301"),t("span",{style:{color:"#AB5959"}},"."),t("span",{style:{color:"#6C7834"}},"nfc"),t("span",{style:{color:"#8E8F8B"}},"()"),t("span",{style:{color:"#AB5959"}},"."),t("span",{style:{color:"#6C7834"}},"collect"),t("span",{style:{color:"#AB5959"}},"::"),t("span",{style:{color:"#8E8F8B"}},"<"),t("span",{style:{color:"#6C7834"}},"String"),t("span",{style:{color:"#8E8F8B"}},">()")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#8E8F8B"}},");")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),$4=t("footer",null,[t("ul",null,[t("li",null,[d("Unicode combining classes: "),t("a",{href:"https://www.compart.com/en/unicode/combining",target:"_blank",rel:"noopener"},"https://www.compart.com/en/unicode/combining")]),t("li",null,[d("Unicode Normalization Forms: "),t("a",{href:"http://www.unicode.org/reports/tr15/",target:"_blank",rel:"noopener"},"http://www.unicode.org/reports/tr15/")]),t("li",null,[d("Crate unicode_normalization: "),t("a",{href:"https://docs.rs/unicode-normalization/latest/unicode_normalization/",target:"_blank",rel:"noopener"},"https://docs.rs/unicode-normalization/latest/unicode_normalization/")])])],-1),U4={__name:"54",setup(e){const n={hide:!1,srcSequence:"./pages/04-quirks.md"};return L(H),(s,o)=>{const l=Ut,r=ot,a=qt("click");return v(),W(Fe,le(oe(n)),{default:O(()=>[F4,E4,D4,Ke((v(),k("div",null,[I(l,je({},{ranges:[""]}),{default:O(()=>[S4]),_:1},16)])),[[a]]),I(r,null,{default:O(()=>[I(l,je({},{ranges:[""]}),{default:O(()=>[T4]),_:1},16)]),_:1}),$4]),_:1},16)}}},O4=V(U4,[["__file","/@slidev/slides/54.md"]]),P4=t("h2",null,"Emoji Composition",-1),I4=t("p",{style:{"font-size":"65%","line-height":"1rem"}}," 😶‍🌫️ 😮‍💨 😵‍💫 ❤️‍🔥 ❤️‍🩹 👁️‍🗨️ 🫱🏻‍🫲🏼 🫱🏻‍🫲🏽 🫱🏻‍🫲🏾 🫱🏻‍🫲🏿 🫱🏼‍🫲🏻 🫱🏼‍🫲🏽 🫱🏼‍🫲🏾 🫱🏼‍🫲🏿 🫱🏽‍🫲🏻 🫱🏽‍🫲🏼 🫱🏽‍🫲🏾 🫱🏽‍🫲🏿 🫱🏾‍🫲🏻 🫱🏾‍🫲🏼 🫱🏾‍🫲🏽 🫱🏾‍🫲🏿 🫱🏿‍🫲🏻 🫱🏿‍🫲🏼 🫱🏿‍🫲🏽 🫱🏿‍🫲🏾 🧔‍♂️ 🧔🏻‍♂️ 🧔🏼‍♂️ 🧔🏽‍♂️ 🧔🏾‍♂️ 🧔🏿‍♂️ 🧔‍♀️ 🧔🏻‍♀️ 🧔🏼‍♀️ 🧔🏽‍♀️ 🧔🏾‍♀️ 🧔🏿‍♀️ 👨‍🦰 👨🏻‍🦰 👨🏼‍🦰 👨🏽‍🦰 👨🏾‍🦰 👨🏿‍🦰 👨‍🦱 👨🏻‍🦱 👨🏼‍🦱 👨🏽‍🦱 👨🏾‍🦱 👨🏿‍🦱 👨‍🦳 👨🏻‍🦳 👨🏼‍🦳 👨🏽‍🦳 👨🏾‍🦳 👨🏿‍🦳 👨‍🦲 👨🏻‍🦲 👨🏼‍🦲 👨🏽‍🦲 👨🏾‍🦲 👨🏿‍🦲 👩‍🦰 👩🏻‍🦰 👩🏼‍🦰 👩🏽‍🦰 👩🏾‍🦰 👩🏿‍🦰 🧑‍🦰 🧑🏻‍🦰 🧑🏼‍🦰 🧑🏽‍🦰 🧑🏾‍🦰 🧑🏿‍🦰 👩‍🦱 👩🏻‍🦱 👩🏼‍🦱 👩🏽‍🦱 👩🏾‍🦱 👩🏿‍🦱 🧑‍🦱 🧑🏻‍🦱 🧑🏼‍🦱 🧑🏽‍🦱 🧑🏾‍🦱 🧑🏿‍🦱 👩‍🦳 👩🏻‍🦳 👩🏼‍🦳 👩🏽‍🦳 👩🏾‍🦳 👩🏿‍🦳 🧑‍🦳 🧑🏻‍🦳 🧑🏼‍🦳 🧑🏽‍🦳 🧑🏾‍🦳 🧑🏿‍🦳 👩‍🦲 👩🏻‍🦲 👩🏼‍🦲 👩🏽‍🦲 👩🏾‍🦲 👩🏿‍🦲 🧑‍🦲 🧑🏻‍🦲 🧑🏼‍🦲 🧑🏽‍🦲 🧑🏾‍🦲 🧑🏿‍🦲 👱‍♀️ 👱🏻‍♀️ 👱🏼‍♀️ 👱🏽‍♀️ 👱🏾‍♀️ 👱🏿‍♀️ 👱‍♂️ 👱🏻‍♂️ 👱🏼‍♂️ 👱🏽‍♂️ 👱🏾‍♂️ 👱🏿‍♂️ 🙍‍♂️ 🙍🏻‍♂️ 🙍🏼‍♂️ 🙍🏽‍♂️ 🙍🏾‍♂️ 🙍🏿‍♂️ 🙍‍♀️ 🙍🏻‍♀️ 🙍🏼‍♀️ 🙍🏽‍♀️ 🙍🏾‍♀️ 🙍🏿‍♀️ 🙎‍♂️ 🙎🏻‍♂️ 🙎🏼‍♂️ 🙎🏽‍♂️ 🙎🏾‍♂️ 🙎🏿‍♂️ 🙎‍♀️ 🙎🏻‍♀️ 🙎🏼‍♀️ 🙎🏽‍♀️ 🙎🏾‍♀️ 🙎🏿‍♀️ 🙅‍♂️ 🙅🏻‍♂️ 🙅🏼‍♂️ 🙅🏽‍♂️ 🙅🏾‍♂️ 🙅🏿‍♂️ 🙅‍♀️ 🙅🏻‍♀️ 🙅🏼‍♀️ 🙅🏽‍♀️ 🙅🏾‍♀️ 🙅🏿‍♀️ 🙆‍♂️ 🙆🏻‍♂️ 🙆🏼‍♂️ 🙆🏽‍♂️ 🙆🏾‍♂️ 🙆🏿‍♂️ 🙆‍♀️ 🙆🏻‍♀️ 🙆🏼‍♀️ 🙆🏽‍♀️ 🙆🏾‍♀️ 🙆🏿‍♀️ 💁‍♂️ 💁🏻‍♂️ 💁🏼‍♂️ 💁🏽‍♂️ 💁🏾‍♂️ 💁🏿‍♂️ 💁‍♀️ 💁🏻‍♀️ 💁🏼‍♀️ 💁🏽‍♀️ 💁🏾‍♀️ 💁🏿‍♀️ 🙋‍♂️ 🙋🏻‍♂️ 🙋🏼‍♂️ 🙋🏽‍♂️ 🙋🏾‍♂️ 🙋🏿‍♂️ 🙋‍♀️ 🙋🏻‍♀️ 🙋🏼‍♀️ 🙋🏽‍♀️ 🙋🏾‍♀️ 🙋🏿‍♀️ 🧏‍♂️ 🧏🏻‍♂️ 🧏🏼‍♂️ 🧏🏽‍♂️ 🧏🏾‍♂️ 🧏🏿‍♂️ 🧏‍♀️ 🧏🏻‍♀️ 🧏🏼‍♀️ 🧏🏽‍♀️ 🧏🏾‍♀️ 🧏🏿‍♀️ 🙇‍♂️ 🙇🏻‍♂️ 🙇🏼‍♂️ 🙇🏽‍♂️ 🙇🏾‍♂️ 🙇🏿‍♂️ 🙇‍♀️ 🙇🏻‍♀️ 🙇🏼‍♀️ 🙇🏽‍♀️ 🙇🏾‍♀️ 🙇🏿‍♀️ 🤦‍♂️ 🤦🏻‍♂️ 🤦🏼‍♂️ 🤦🏽‍♂️ 🤦🏾‍♂️ 🤦🏿‍♂️ 🤦‍♀️ 🤦🏻‍♀️ 🤦🏼‍♀️ 🤦🏽‍♀️ 🤦🏾‍♀️ 🤦🏿‍♀️ 🤷‍♂️ 🤷🏻‍♂️ 🤷🏼‍♂️ 🤷🏽‍♂️ 🤷🏾‍♂️ 🤷🏿‍♂️ 🤷‍♀️ 🤷🏻‍♀️ 🤷🏼‍♀️ 🤷🏽‍♀️ 🤷🏾‍♀️ 🤷🏿‍♀️ 🧑‍⚕️ 🧑🏻‍⚕️ 🧑🏼‍⚕️ 🧑🏽‍⚕️ 🧑🏾‍⚕️ 🧑🏿‍⚕️ 👨‍⚕️ 👨🏻‍⚕️ 👨🏼‍⚕️ 👨🏽‍⚕️ 👨🏾‍⚕️ 👨🏿‍⚕️ 👩‍⚕️ 👩🏻‍⚕️ 👩🏼‍⚕️ 👩🏽‍⚕️ 👩🏾‍⚕️ 👩🏿‍⚕️ 🧑‍🎓 🧑🏻‍🎓 🧑🏼‍🎓 🧑🏽‍🎓 🧑🏾‍🎓 🧑🏿‍🎓 👨‍🎓 👨🏻‍🎓 👨🏼‍🎓 👨🏽‍🎓 👨🏾‍🎓 👨🏿‍🎓 👩‍🎓 👩🏻‍🎓 👩🏼‍🎓 👩🏽‍🎓 👩🏾‍🎓 👩🏿‍🎓 🧑‍🏫 🧑🏻‍🏫 🧑🏼‍🏫 🧑🏽‍🏫 🧑🏾‍🏫 🧑🏿‍🏫 👨‍🏫 👨🏻‍🏫 👨🏼‍🏫 👨🏽‍🏫 👨🏾‍🏫 👨🏿‍🏫 👩‍🏫 👩🏻‍🏫 👩🏼‍🏫 👩🏽‍🏫 👩🏾‍🏫 👩🏿‍🏫 🧑‍⚖️ 🧑🏻‍⚖️ 🧑🏼‍⚖️ 🧑🏽‍⚖️ 🧑🏾‍⚖️ 🧑🏿‍⚖️ 👨‍⚖️ 👨🏻‍⚖️ 👨🏼‍⚖️ 👨🏽‍⚖️ 👨🏾‍⚖️ 👨🏿‍⚖️ 👩‍⚖️ 👩🏻‍⚖️ 👩🏼‍⚖️ 👩🏽‍⚖️ 👩🏾‍⚖️ 👩🏿‍⚖️ 🧑‍🌾 🧑🏻‍🌾 🧑🏼‍🌾 🧑🏽‍🌾 🧑🏾‍🌾 🧑🏿‍🌾 👨‍🌾 👨🏻‍🌾 👨🏼‍🌾 👨🏽‍🌾 👨🏾‍🌾 👨🏿‍🌾 👩‍🌾 👩🏻‍🌾 👩🏼‍🌾 👩🏽‍🌾 👩🏾‍🌾 👩🏿‍🌾 🧑‍🍳 🧑🏻‍🍳 🧑🏼‍🍳 🧑🏽‍🍳 🧑🏾‍🍳 🧑🏿‍🍳 👨‍🍳 👨🏻‍🍳 👨🏼‍🍳 👨🏽‍🍳 👨🏾‍🍳 👨🏿‍🍳 👩‍🍳 👩🏻‍🍳 👩🏼‍🍳 👩🏽‍🍳 👩🏾‍🍳 👩🏿‍🍳 🧑‍🔧 🧑🏻‍🔧 🧑🏼‍🔧 🧑🏽‍🔧 🧑🏾‍🔧 🧑🏿‍🔧 👨‍🔧 👨🏻‍🔧 👨🏼‍🔧 👨🏽‍🔧 👨🏾‍🔧 👨🏿‍🔧 👩‍🔧 👩🏻‍🔧 👩🏼‍🔧 👩🏽‍🔧 👩🏾‍🔧 👩🏿‍🔧 🧑‍🏭 🧑🏻‍🏭 🧑🏼‍🏭 🧑🏽‍🏭 🧑🏾‍🏭 🧑🏿‍🏭 👨‍🏭 👨🏻‍🏭 👨🏼‍🏭 👨🏽‍🏭 👨🏾‍🏭 👨🏿‍🏭 👩‍🏭 👩🏻‍🏭 👩🏼‍🏭 👩🏽‍🏭 👩🏾‍🏭 👩🏿‍🏭 🧑‍💼 🧑🏻‍💼 🧑🏼‍💼 🧑🏽‍💼 🧑🏾‍💼 🧑🏿‍💼 👨‍💼 👨🏻‍💼 👨🏼‍💼 👨🏽‍💼 👨🏾‍💼 👨🏿‍💼 👩‍💼 👩🏻‍💼 👩🏼‍💼 👩🏽‍💼 👩🏾‍💼 👩🏿‍💼 🧑‍🔬 🧑🏻‍🔬 🧑🏼‍🔬 🧑🏽‍🔬 🧑🏾‍🔬 🧑🏿‍🔬 👨‍🔬 👨🏻‍🔬 👨🏼‍🔬 👨🏽‍🔬 👨🏾‍🔬 👨🏿‍🔬 👩‍🔬 👩🏻‍🔬 👩🏼‍🔬 👩🏽‍🔬 👩🏾‍🔬 👩🏿‍🔬 🧑‍💻 🧑🏻‍💻 🧑🏼‍💻 🧑🏽‍💻 🧑🏾‍💻 🧑🏿‍💻 👨‍💻 👨🏻‍💻 👨🏼‍💻 👨🏽‍💻 👨🏾‍💻 👨🏿‍💻 👩‍💻 👩🏻‍💻 👩🏼‍💻 👩🏽‍💻 👩🏾‍💻 👩🏿‍💻 🧑‍🎤 🧑🏻‍🎤 🧑🏼‍🎤 🧑🏽‍🎤 🧑🏾‍🎤 🧑🏿‍🎤 👨‍🎤 👨🏻‍🎤 👨🏼‍🎤 👨🏽‍🎤 👨🏾‍🎤 👨🏿‍🎤 👩‍🎤 👩🏻‍🎤 👩🏼‍🎤 👩🏽‍🎤 👩🏾‍🎤 👩🏿‍🎤 🧑‍🎨 🧑🏻‍🎨 🧑🏼‍🎨 🧑🏽‍🎨 🧑🏾‍🎨 🧑🏿‍🎨 👨‍🎨 👨🏻‍🎨 👨🏼‍🎨 👨🏽‍🎨 👨🏾‍🎨 👨🏿‍🎨 👩‍🎨 👩🏻‍🎨 👩🏼‍🎨 👩🏽‍🎨 👩🏾‍🎨 👩🏿‍🎨 🧑‍✈️ 🧑🏻‍✈️ 🧑🏼‍✈️ 🧑🏽‍✈️ 🧑🏾‍✈️ 🧑🏿‍✈️ 👨‍✈️ 👨🏻‍✈️ 👨🏼‍✈️ 👨🏽‍✈️ 👨🏾‍✈️ 👨🏿‍✈️ 👩‍✈️ 👩🏻‍✈️ 👩🏼‍✈️ 👩🏽‍✈️ 👩🏾‍✈️ 👩🏿‍✈️ 🧑‍🚀 🧑🏻‍🚀 🧑🏼‍🚀 🧑🏽‍🚀 🧑🏾‍🚀 🧑🏿‍🚀 👨‍🚀 👨🏻‍🚀 👨🏼‍🚀 👨🏽‍🚀 👨🏾‍🚀 👨🏿‍🚀 👩‍🚀 👩🏻‍🚀 👩🏼‍🚀 👩🏽‍🚀 👩🏾‍🚀 👩🏿‍🚀 🧑‍🚒 🧑🏻‍🚒 🧑🏼‍🚒 🧑🏽‍🚒 🧑🏾‍🚒 🧑🏿‍🚒 👨‍🚒 👨🏻‍🚒 👨🏼‍🚒 👨🏽‍🚒 👨🏾‍🚒 👨🏿‍🚒 👩‍🚒 👩🏻‍🚒 👩🏼‍🚒 👩🏽‍🚒 👩🏾‍🚒 👩🏿‍🚒 👮‍♂️ 👮🏻‍♂️ 👮🏼‍♂️ 👮🏽‍♂️ 👮🏾‍♂️ 👮🏿‍♂️ 👮‍♀️ 👮🏻‍♀️ 👮🏼‍♀️ 👮🏽‍♀️ 👮🏾‍♀️ 👮🏿‍♀️ 🕵️‍♂️ 🕵🏻‍♂️ 🕵🏼‍♂️ 🕵🏽‍♂️ 🕵🏾‍♂️ 🕵🏿‍♂️ 🕵️‍♀️ 🕵🏻‍♀️ 🕵🏼‍♀️ 🕵🏽‍♀️ 🕵🏾‍♀️ 🕵🏿‍♀️ 💂‍♂️ 💂🏻‍♂️ 💂🏼‍♂️ 💂🏽‍♂️ 💂🏾‍♂️ 💂🏿‍♂️ 💂‍♀️ 💂🏻‍♀️ 💂🏼‍♀️ 💂🏽‍♀️ 💂🏾‍♀️ 💂🏿‍♀️ 👷‍♂️ 👷🏻‍♂️ 👷🏼‍♂️ 👷🏽‍♂️ 👷🏾‍♂️ 👷🏿‍♂️ 👷‍♀️ 👷🏻‍♀️ 👷🏼‍♀️ 👷🏽‍♀️ 👷🏾‍♀️ 👷🏿‍♀️ 👳‍♂️ 👳🏻‍♂️ 👳🏼‍♂️ 👳🏽‍♂️ 👳🏾‍♂️ 👳🏿‍♂️ 👳‍♀️ 👳🏻‍♀️ 👳🏼‍♀️ 👳🏽‍♀️ 👳🏾‍♀️ 👳🏿‍♀️ 🤵‍♂️ 🤵🏻‍♂️ 🤵🏼‍♂️ 🤵🏽‍♂️ 🤵🏾‍♂️ 🤵🏿‍♂️ 🤵‍♀️ 🤵🏻‍♀️ 🤵🏼‍♀️ 🤵🏽‍♀️ 🤵🏾‍♀️ 🤵🏿‍♀️ 👰‍♂️ 👰🏻‍♂️ 👰🏼‍♂️ 👰🏽‍♂️ 👰🏾‍♂️ 👰🏿‍♂️ 👰‍♀️ 👰🏻‍♀️ 👰🏼‍♀️ 👰🏽‍♀️ 👰🏾‍♀️ 👰🏿‍♀️ 👩‍🍼 👩🏻‍🍼 👩🏼‍🍼 👩🏽‍🍼 👩🏾‍🍼 👩🏿‍🍼 👨‍🍼 👨🏻‍🍼 👨🏼‍🍼 👨🏽‍🍼 👨🏾‍🍼 👨🏿‍🍼 🧑‍🍼 🧑🏻‍🍼 🧑🏼‍🍼 🧑🏽‍🍼 🧑🏾‍🍼 🧑🏿‍🍼 🧑‍🎄 🧑🏻‍🎄 🧑🏼‍🎄 🧑🏽‍🎄 🧑🏾‍🎄 🧑🏿‍🎄 🦸‍♂️ 🦸🏻‍♂️ 🦸🏼‍♂️ 🦸🏽‍♂️ 🦸🏾‍♂️ 🦸🏿‍♂️ 🦸‍♀️ 🦸🏻‍♀️ 🦸🏼‍♀️ 🦸🏽‍♀️ 🦸🏾‍♀️ 🦸🏿‍♀️ 🦹‍♂️ 🦹🏻‍♂️ 🦹🏼‍♂️ 🦹🏽‍♂️ 🦹🏾‍♂️ 🦹🏿‍♂️ 🦹‍♀️ 🦹🏻‍♀️ 🦹🏼‍♀️ 🦹🏽‍♀️ 🦹🏾‍♀️ 🦹🏿‍♀️ 🧙‍♂️ 🧙🏻‍♂️ 🧙🏼‍♂️ 🧙🏽‍♂️ 🧙🏾‍♂️ 🧙🏿‍♂️ 🧙‍♀️ 🧙🏻‍♀️ 🧙🏼‍♀️ 🧙🏽‍♀️ 🧙🏾‍♀️ 🧙🏿‍♀️ 🧚‍♂️ 🧚🏻‍♂️ 🧚🏼‍♂️ 🧚🏽‍♂️ 🧚🏾‍♂️ 🧚🏿‍♂️ 🧚‍♀️ 🧚🏻‍♀️ 🧚🏼‍♀️ 🧚🏽‍♀️ 🧚🏾‍♀️ 🧚🏿‍♀️ 🧛‍♂️ 🧛🏻‍♂️ 🧛🏼‍♂️ 🧛🏽‍♂️ 🧛🏾‍♂️ 🧛🏿‍♂️ 🧛‍♀️ 🧛🏻‍♀️ 🧛🏼‍♀️ 🧛🏽‍♀️ 🧛🏾‍♀️ 🧛🏿‍♀️ 🧜‍♂️ 🧜🏻‍♂️ 🧜🏼‍♂️ 🧜🏽‍♂️ 🧜🏾‍♂️ 🧜🏿‍♂️ 🧜‍♀️ 🧜🏻‍♀️ 🧜🏼‍♀️ 🧜🏽‍♀️ 🧜🏾‍♀️ 🧜🏿‍♀️ 🧝‍♂️ 🧝🏻‍♂️ 🧝🏼‍♂️ 🧝🏽‍♂️ 🧝🏾‍♂️ 🧝🏿‍♂️ 🧝‍♀️ 🧝🏻‍♀️ 🧝🏼‍♀️ 🧝🏽‍♀️ 🧝🏾‍♀️ 🧝🏿‍♀️ 🧞‍♂️ 🧞‍♀️ 🧟‍♂️ 🧟‍♀️ 💆‍♂️ 💆🏻‍♂️ 💆🏼‍♂️ 💆🏽‍♂️ 💆🏾‍♂️ 💆🏿‍♂️ 💆‍♀️ 💆🏻‍♀️ 💆🏼‍♀️ 💆🏽‍♀️ 💆🏾‍♀️ 💆🏿‍♀️ 💇‍♂️ 💇🏻‍♂️ 💇🏼‍♂️ 💇🏽‍♂️ 💇🏾‍♂️ 💇🏿‍♂️ 💇‍♀️ 💇🏻‍♀️ 💇🏼‍♀️ 💇🏽‍♀️ 💇🏾‍♀️ 💇🏿‍♀️ 🚶‍♂️ 🚶🏻‍♂️ 🚶🏼‍♂️ 🚶🏽‍♂️ 🚶🏾‍♂️ 🚶🏿‍♂️ 🚶‍♀️ 🚶🏻‍♀️ 🚶🏼‍♀️ 🚶🏽‍♀️ 🚶🏾‍♀️ 🚶🏿‍♀️ 🧍‍♂️ 🧍🏻‍♂️ 🧍🏼‍♂️ 🧍🏽‍♂️ 🧍🏾‍♂️ 🧍🏿‍♂️ 🧍‍♀️ 🧍🏻‍♀️ 🧍🏼‍♀️ 🧍🏽‍♀️ 🧍🏾‍♀️ 🧍🏿‍♀️ 🧎‍♂️ 🧎🏻‍♂️ 🧎🏼‍♂️ 🧎🏽‍♂️ 🧎🏾‍♂️ 🧎🏿‍♂️ 🧎‍♀️ 🧎🏻‍♀️ 🧎🏼‍♀️ 🧎🏽‍♀️ 🧎🏾‍♀️ 🧎🏿‍♀️ 🧑‍🦯 🧑🏻‍🦯 🧑🏼‍🦯 🧑🏽‍🦯 🧑🏾‍🦯 🧑🏿‍🦯 👨‍🦯 👨🏻‍🦯 👨🏼‍🦯 👨🏽‍🦯 👨🏾‍🦯 👨🏿‍🦯 👩‍🦯 👩🏻‍🦯 👩🏼‍🦯 👩🏽‍🦯 👩🏾‍🦯 👩🏿‍🦯 🧑‍🦼 🧑🏻‍🦼 🧑🏼‍🦼 🧑🏽‍🦼 🧑🏾‍🦼 🧑🏿‍🦼 👨‍🦼 👨🏻‍🦼 👨🏼‍🦼 👨🏽‍🦼 👨🏾‍🦼 👨🏿‍🦼 👩‍🦼 👩🏻‍🦼 👩🏼‍🦼 👩🏽‍🦼 👩🏾‍🦼 👩🏿‍🦼 🧑‍🦽 🧑🏻‍🦽 🧑🏼‍🦽 🧑🏽‍🦽 🧑🏾‍🦽 🧑🏿‍🦽 👨‍🦽 👨🏻‍🦽 👨🏼‍🦽 👨🏽‍🦽 👨🏾‍🦽 👨🏿‍🦽 👩‍🦽 👩🏻‍🦽 👩🏼‍🦽 👩🏽‍🦽 👩🏾‍🦽 👩🏿‍🦽 🏃‍♂️ 🏃🏻‍♂️ 🏃🏼‍♂️ 🏃🏽‍♂️ 🏃🏾‍♂️ 🏃🏿‍♂️ 🏃‍♀️ 🏃🏻‍♀️ 🏃🏼‍♀️ 🏃🏽‍♀️ 🏃🏾‍♀️ 🏃🏿‍♀️ 👯‍♂️ 👯‍♀️ 🧖‍♂️ 🧖🏻‍♂️ 🧖🏼‍♂️ 🧖🏽‍♂️ 🧖🏾‍♂️ 🧖🏿‍♂️ 🧖‍♀️ 🧖🏻‍♀️ 🧖🏼‍♀️ 🧖🏽‍♀️ 🧖🏾‍♀️ 🧖🏿‍♀️ 🧗‍♂️ 🧗🏻‍♂️ 🧗🏼‍♂️ 🧗🏽‍♂️ 🧗🏾‍♂️ 🧗🏿‍♂️ 🧗‍♀️ 🧗🏻‍♀️ 🧗🏼‍♀️ 🧗🏽‍♀️ 🧗🏾‍♀️ 🧗🏿‍♀️ 🏌️‍♂️ 🏌🏻‍♂️ 🏌🏼‍♂️ 🏌🏽‍♂️ 🏌🏾‍♂️ 🏌🏿‍♂️ 🏌️‍♀️ 🏌🏻‍♀️ 🏌🏼‍♀️ 🏌🏽‍♀️ 🏌🏾‍♀️ 🏌🏿‍♀️ 🏄‍♂️ 🏄🏻‍♂️ 🏄🏼‍♂️ 🏄🏽‍♂️ 🏄🏾‍♂️ 🏄🏿‍♂️ 🏄‍♀️ 🏄🏻‍♀️ 🏄🏼‍♀️ 🏄🏽‍♀️ 🏄🏾‍♀️ 🏄🏿‍♀️ 🚣‍♂️ 🚣🏻‍♂️ 🚣🏼‍♂️ 🚣🏽‍♂️ 🚣🏾‍♂️ 🚣🏿‍♂️ 🚣‍♀️ 🚣🏻‍♀️ 🚣🏼‍♀️ 🚣🏽‍♀️ 🚣🏾‍♀️ 🚣🏿‍♀️ 🏊‍♂️ 🏊🏻‍♂️ 🏊🏼‍♂️ 🏊🏽‍♂️ 🏊🏾‍♂️ 🏊🏿‍♂️ 🏊‍♀️ 🏊🏻‍♀️ 🏊🏼‍♀️ 🏊🏽‍♀️ 🏊🏾‍♀️ 🏊🏿‍♀️ ⛹️‍♂️ ⛹🏻‍♂️ ⛹🏼‍♂️ ⛹🏽‍♂️ ⛹🏾‍♂️ ⛹🏿‍♂️ ⛹️‍♀️ ⛹🏻‍♀️ ⛹🏼‍♀️ ⛹🏽‍♀️ ⛹🏾‍♀️ ⛹🏿‍♀️ 🏋️‍♂️ 🏋🏻‍♂️ 🏋🏼‍♂️ 🏋🏽‍♂️ 🏋🏾‍♂️ 🏋🏿‍♂️ 🏋️‍♀️ 🏋🏻‍♀️ 🏋🏼‍♀️ 🏋🏽‍♀️ 🏋🏾‍♀️ 🏋🏿‍♀️ 🚴‍♂️ 🚴🏻‍♂️ 🚴🏼‍♂️ 🚴🏽‍♂️ 🚴🏾‍♂️ 🚴🏿‍♂️ 🚴‍♀️ 🚴🏻‍♀️ 🚴🏼‍♀️ 🚴🏽‍♀️ 🚴🏾‍♀️ 🚴🏿‍♀️ 🚵‍♂️ 🚵🏻‍♂️ 🚵🏼‍♂️ 🚵🏽‍♂️ 🚵🏾‍♂️ 🚵🏿‍♂️ 🚵‍♀️ 🚵🏻‍♀️ 🚵🏼‍♀️ 🚵🏽‍♀️ 🚵🏾‍♀️ 🚵🏿‍♀️ 🤸‍♂️ 🤸🏻‍♂️ 🤸🏼‍♂️ 🤸🏽‍♂️ 🤸🏾‍♂️ 🤸🏿‍♂️ 🤸‍♀️ 🤸🏻‍♀️ 🤸🏼‍♀️ 🤸🏽‍♀️ 🤸🏾‍♀️ 🤸🏿‍♀️ 🤼‍♂️ 🤼‍♀️ 🤽‍♂️ 🤽🏻‍♂️ 🤽🏼‍♂️ 🤽🏽‍♂️ 🤽🏾‍♂️ 🤽🏿‍♂️ 🤽‍♀️ 🤽🏻‍♀️ 🤽🏼‍♀️ 🤽🏽‍♀️ 🤽🏾‍♀️ 🤽🏿‍♀️ 🤾‍♂️ 🤾🏻‍♂️ 🤾🏼‍♂️ 🤾🏽‍♂️ 🤾🏾‍♂️ 🤾🏿‍♂️ 🤾‍♀️ 🤾🏻‍♀️ 🤾🏼‍♀️ 🤾🏽‍♀️ 🤾🏾‍♀️ 🤾🏿‍♀️ 🤹‍♂️ 🤹🏻‍♂️ 🤹🏼‍♂️ 🤹🏽‍♂️ 🤹🏾‍♂️ 🤹🏿‍♂️ 🤹‍♀️ 🤹🏻‍♀️ 🤹🏼‍♀️ 🤹🏽‍♀️ 🤹🏾‍♀️ 🤹🏿‍♀️ 🧘‍♂️ 🧘🏻‍♂️ 🧘🏼‍♂️ 🧘🏽‍♂️ 🧘🏾‍♂️ 🧘🏿‍♂️ 🧘‍♀️ 🧘🏻‍♀️ 🧘🏼‍♀️ 🧘🏽‍♀️ 🧘🏾‍♀️ 🧘🏿‍♀️ 🧑‍🤝‍🧑 🧑🏻‍🤝‍🧑🏻 🧑🏻‍🤝‍🧑🏼 🧑🏻‍🤝‍🧑🏽 🧑🏻‍🤝‍🧑🏾 🧑🏻‍🤝‍🧑🏿 🧑🏼‍🤝‍🧑🏻 🧑🏼‍🤝‍🧑🏼 🧑🏼‍🤝‍🧑🏽 🧑🏼‍🤝‍🧑🏾 🧑🏼‍🤝‍🧑🏿 🧑🏽‍🤝‍🧑🏻 🧑🏽‍🤝‍🧑🏼 🧑🏽‍🤝‍🧑🏽 🧑🏽‍🤝‍🧑🏾 🧑🏽‍🤝‍🧑🏿 🧑🏾‍🤝‍🧑🏻 🧑🏾‍🤝‍🧑🏼 🧑🏾‍🤝‍🧑🏽 🧑🏾‍🤝‍🧑🏾 🧑🏾‍🤝‍🧑🏿 🧑🏿‍🤝‍🧑🏻 🧑🏿‍🤝‍🧑🏼 🧑🏿‍🤝‍🧑🏽 🧑🏿‍🤝‍🧑🏾 🧑🏿‍🤝‍🧑🏿 👩🏻‍🤝‍👩🏼 👩🏻‍🤝‍👩🏽 👩🏻‍🤝‍👩🏾 👩🏻‍🤝‍👩🏿 👩🏼‍🤝‍👩🏻 👩🏼‍🤝‍👩🏽 👩🏼‍🤝‍👩🏾 👩🏼‍🤝‍👩🏿 👩🏽‍🤝‍👩🏻 👩🏽‍🤝‍👩🏼 👩🏽‍🤝‍👩🏾 👩🏽‍🤝‍👩🏿 👩🏾‍🤝‍👩🏻 👩🏾‍🤝‍👩🏼 👩🏾‍🤝‍👩🏽 👩🏾‍🤝‍👩🏿 👩🏿‍🤝‍👩🏻 👩🏿‍🤝‍👩🏼 👩🏿‍🤝‍👩🏽 👩🏿‍🤝‍👩🏾 👩🏻‍🤝‍👨🏼 👩🏻‍🤝‍👨🏽 👩🏻‍🤝‍👨🏾 👩🏻‍🤝‍👨🏿 👩🏼‍🤝‍👨🏻 👩🏼‍🤝‍👨🏽 👩🏼‍🤝‍👨🏾 👩🏼‍🤝‍👨🏿 👩🏽‍🤝‍👨🏻 👩🏽‍🤝‍👨🏼 👩🏽‍🤝‍👨🏾 👩🏽‍🤝‍👨🏿 👩🏾‍🤝‍👨🏻 👩🏾‍🤝‍👨🏼 👩🏾‍🤝‍👨🏽 👩🏾‍🤝‍👨🏿 👩🏿‍🤝‍👨🏻 👩🏿‍🤝‍👨🏼 👩🏿‍🤝‍👨🏽 👩🏿‍🤝‍👨🏾 👨🏻‍🤝‍👨🏼 👨🏻‍🤝‍👨🏽 👨🏻‍🤝‍👨🏾 👨🏻‍🤝‍👨🏿 👨🏼‍🤝‍👨🏻 👨🏼‍🤝‍👨🏽 👨🏼‍🤝‍👨🏾 👨🏼‍🤝‍👨🏿 👨🏽‍🤝‍👨🏻 👨🏽‍🤝‍👨🏼 👨🏽‍🤝‍👨🏾 👨🏽‍🤝‍👨🏿 👨🏾‍🤝‍👨🏻 👨🏾‍🤝‍👨🏼 👨🏾‍🤝‍👨🏽 👨🏾‍🤝‍👨🏿 👨🏿‍🤝‍👨🏻 👨🏿‍🤝‍👨🏼 👨🏿‍🤝‍👨🏽 👨🏿‍🤝‍👨🏾 💏 🧑🏻‍❤️‍💋‍🧑🏼 🧑🏻‍❤️‍💋‍🧑🏽 🧑🏻‍❤️‍💋‍🧑🏾 🧑🏻‍❤️‍💋‍🧑🏿 🧑🏼‍❤️‍💋‍🧑🏻 🧑🏼‍❤️‍💋‍🧑🏽 🧑🏼‍❤️‍💋‍🧑🏾 🧑🏼‍❤️‍💋‍🧑🏿 🧑🏽‍❤️‍💋‍🧑🏻 🧑🏽‍❤️‍💋‍🧑🏼 🧑🏽‍❤️‍💋‍🧑🏾 🧑🏽‍❤️‍💋‍🧑🏿 🧑🏾‍❤️‍💋‍🧑🏻 🧑🏾‍❤️‍💋‍🧑🏼 🧑🏾‍❤️‍💋‍🧑🏽 🧑🏾‍❤️‍💋‍🧑🏿 🧑🏿‍❤️‍💋‍🧑🏻 🧑🏿‍❤️‍💋‍🧑🏼 🧑🏿‍❤️‍💋‍🧑🏽 🧑🏿‍❤️‍💋‍🧑🏾 👩‍❤️‍💋‍👨 👩🏻‍❤️‍💋‍👨🏻 👩🏻‍❤️‍💋‍👨🏼 👩🏻‍❤️‍💋‍👨🏽 👩🏻‍❤️‍💋‍👨🏾 👩🏻‍❤️‍💋‍👨🏿 👩🏼‍❤️‍💋‍👨🏻 👩🏼‍❤️‍💋‍👨🏼 👩🏼‍❤️‍💋‍👨🏽 👩🏼‍❤️‍💋‍👨🏾 👩🏼‍❤️‍💋‍👨🏿 👩🏽‍❤️‍💋‍👨🏻 👩🏽‍❤️‍💋‍👨🏼 👩🏽‍❤️‍💋‍👨🏽 👩🏽‍❤️‍💋‍👨🏾 👩🏽‍❤️‍💋‍👨🏿 👩🏾‍❤️‍💋‍👨🏻 👩🏾‍❤️‍💋‍👨🏼 👩🏾‍❤️‍💋‍👨🏽 👩🏾‍❤️‍💋‍👨🏾 👩🏾‍❤️‍💋‍👨🏿 👩🏿‍❤️‍💋‍👨🏻 👩🏿‍❤️‍💋‍👨🏼 👩🏿‍❤️‍💋‍👨🏽 👩🏿‍❤️‍💋‍👨🏾 👩🏿‍❤️‍💋‍👨🏿 👨‍❤️‍💋‍👨 👨🏻‍❤️‍💋‍👨🏻 👨🏻‍❤️‍💋‍👨🏼 👨🏻‍❤️‍💋‍👨🏽 👨🏻‍❤️‍💋‍👨🏾 👨🏻‍❤️‍💋‍👨🏿 👨🏼‍❤️‍💋‍👨🏻 👨🏼‍❤️‍💋‍👨🏼 👨🏼‍❤️‍💋‍👨🏽 👨🏼‍❤️‍💋‍👨🏾 👨🏼‍❤️‍💋‍👨🏿 👨🏽‍❤️‍💋‍👨🏻 👨🏽‍❤️‍💋‍👨🏼 👨🏽‍❤️‍💋‍👨🏽 👨🏽‍❤️‍💋‍👨🏾 👨🏽‍❤️‍💋‍👨🏿 👨🏾‍❤️‍💋‍👨🏻 👨🏾‍❤️‍💋‍👨🏼 👨🏾‍❤️‍💋‍👨🏽 👨🏾‍❤️‍💋‍👨🏾 👨🏾‍❤️‍💋‍👨🏿 👨🏿‍❤️‍💋‍👨🏻 👨🏿‍❤️‍💋‍👨🏼 👨🏿‍❤️‍💋‍👨🏽 👨🏿‍❤️‍💋‍👨🏾 👨🏿‍❤️‍💋‍👨🏿 👩‍❤️‍💋‍👩 👩🏻‍❤️‍💋‍👩🏻 👩🏻‍❤️‍💋‍👩🏼 👩🏻‍❤️‍💋‍👩🏽 👩🏻‍❤️‍💋‍👩🏾 👩🏻‍❤️‍💋‍👩🏿 👩🏼‍❤️‍💋‍👩🏻 👩🏼‍❤️‍💋‍👩🏼 👩🏼‍❤️‍💋‍👩🏽 👩🏼‍❤️‍💋‍👩🏾 👩🏼‍❤️‍💋‍👩🏿 👩🏽‍❤️‍💋‍👩🏻 👩🏽‍❤️‍💋‍👩🏼 👩🏽‍❤️‍💋‍👩🏽 👩🏽‍❤️‍💋‍👩🏾 👩🏽‍❤️‍💋‍👩🏿 👩🏾‍❤️‍💋‍👩🏻 👩🏾‍❤️‍💋‍👩🏼 👩🏾‍❤️‍💋‍👩🏽 👩🏾‍❤️‍💋‍👩🏾 👩🏾‍❤️‍💋‍👩🏿 👩🏿‍❤️‍💋‍👩🏻 👩🏿‍❤️‍💋‍👩🏼 👩🏿‍❤️‍💋‍👩🏽 👩🏿‍❤️‍💋‍👩🏾 👩🏿‍❤️‍💋‍👩🏿 💑 🧑🏻‍❤️‍🧑🏼 🧑🏻‍❤️‍🧑🏽 🧑🏻‍❤️‍🧑🏾 🧑🏻‍❤️‍🧑🏿 🧑🏼‍❤️‍🧑🏻 🧑🏼‍❤️‍🧑🏽 🧑🏼‍❤️‍🧑🏾 🧑🏼‍❤️‍🧑🏿 🧑🏽‍❤️‍🧑🏻 🧑🏽‍❤️‍🧑🏼 🧑🏽‍❤️‍🧑🏾 🧑🏽‍❤️‍🧑🏿 🧑🏾‍❤️‍🧑🏻 🧑🏾‍❤️‍🧑🏼 🧑🏾‍❤️‍🧑🏽 🧑🏾‍❤️‍🧑🏿 🧑🏿‍❤️‍🧑🏻 🧑🏿‍❤️‍🧑🏼 🧑🏿‍❤️‍🧑🏽 🧑🏿‍❤️‍🧑🏾 👩‍❤️‍👨 👩🏻‍❤️‍👨🏻 👩🏻‍❤️‍👨🏼 👩🏻‍❤️‍👨🏽 👩🏻‍❤️‍👨🏾 👩🏻‍❤️‍👨🏿 👩🏼‍❤️‍👨🏻 👩🏼‍❤️‍👨🏼 👩🏼‍❤️‍👨🏽 👩🏼‍❤️‍👨🏾 👩🏼‍❤️‍👨🏿 👩🏽‍❤️‍👨🏻 👩🏽‍❤️‍👨🏼 👩🏽‍❤️‍👨🏽 👩🏽‍❤️‍👨🏾 👩🏽‍❤️‍👨🏿 👩🏾‍❤️‍👨🏻 👩🏾‍❤️‍👨🏼 👩🏾‍❤️‍👨🏽 👩🏾‍❤️‍👨🏾 👩🏾‍❤️‍👨🏿 👩🏿‍❤️‍👨🏻 👩🏿‍❤️‍👨🏼 👩🏿‍❤️‍👨🏽 👩🏿‍❤️‍👨🏾 👩🏿‍❤️‍👨🏿 👨‍❤️‍👨 👨🏻‍❤️‍👨🏻 👨🏻‍❤️‍👨🏼 👨🏻‍❤️‍👨🏽 👨🏻‍❤️‍👨🏾 👨🏻‍❤️‍👨🏿 👨🏼‍❤️‍👨🏻 👨🏼‍❤️‍👨🏼 👨🏼‍❤️‍👨🏽 👨🏼‍❤️‍👨🏾 👨🏼‍❤️‍👨🏿 👨🏽‍❤️‍👨🏻 👨🏽‍❤️‍👨🏼 👨🏽‍❤️‍👨🏽 👨🏽‍❤️‍👨🏾 👨🏽‍❤️‍👨🏿 👨🏾‍❤️‍👨🏻 👨🏾‍❤️‍👨🏼 👨🏾‍❤️‍👨🏽 👨🏾‍❤️‍👨🏾 👨🏾‍❤️‍👨🏿 👨🏿‍❤️‍👨🏻 👨🏿‍❤️‍👨🏼 👨🏿‍❤️‍👨🏽 👨🏿‍❤️‍👨🏾 👨🏿‍❤️‍👨🏿 👩‍❤️‍👩 👩🏻‍❤️‍👩🏻 👩🏻‍❤️‍👩🏼 👩🏻‍❤️‍👩🏽 👩🏻‍❤️‍👩🏾 👩🏻‍❤️‍👩🏿 👩🏼‍❤️‍👩🏻 👩🏼‍❤️‍👩🏼 👩🏼‍❤️‍👩🏽 👩🏼‍❤️‍👩🏾 👩🏼‍❤️‍👩🏿 👩🏽‍❤️‍👩🏻 👩🏽‍❤️‍👩🏼 👩🏽‍❤️‍👩🏽 👩🏽‍❤️‍👩🏾 👩🏽‍❤️‍👩🏿 👩🏾‍❤️‍👩🏻 👩🏾‍❤️‍👩🏼 👩🏾‍❤️‍👩🏽 👩🏾‍❤️‍👩🏾 👩🏾‍❤️‍👩🏿 👩🏿‍❤️‍👩🏻 👩🏿‍❤️‍👩🏼 👩🏿‍❤️‍👩🏽 👩🏿‍❤️‍👩🏾 👩🏿‍❤️‍👩🏿 👪 👨‍👩‍👦 👨‍👩‍👧 👨‍👩‍👧‍👦 👨‍👩‍👦‍👦 👨‍👩‍👧‍👧 👨‍👨‍👦 👨‍👨‍👧 👨‍👨‍👧‍👦 👨‍👨‍👦‍👦 👨‍👨‍👧‍👧 👩‍👩‍👦 👩‍👩‍👧 👩‍👩‍👧‍👦 👩‍👩‍👦‍👦 👩‍👩‍👧‍👧 👨‍👦 👨‍👦‍👦 👨‍👧 👨‍👧‍👦 👨‍👧‍👧 👩‍👦 👩‍👦‍👦 👩‍👧 👩‍👧‍👦 👩‍👧‍👧 🐕‍🦺 🐈‍⬛ 🐻‍❄️ 🐦‍⬛ 🏳️‍🌈 🏳️‍⚧️ 🏴‍☠️ ",-1),M4={__name:"55",setup(e){const n={hide:!1,srcSequence:"./pages/04-quirks.md"};return L(H),(s,o)=>(v(),W(Fe,le(oe(n)),{default:O(()=>[P4,I4]),_:1},16))}},L4=V(M4,[["__file","/@slidev/slides/55.md"]]),R4=t("h2",null,"Emoji Composition",-1),N4=t("p",null,"What happens if we combine:",-1),q4=t("ul",null,[t("li",null,[t("code",null,"\\u1F468"),d(" - Man")]),t("li",null,[t("code",null,"\\u1F3FB"),d(" - Fitzpatrick type-2")]),t("li",null,[t("code",null,"\\u200D"),d(" - Zwidge")]),t("li",null,[t("code",null,"\\u2764"),d(" - Heavy black heart")]),t("li",null,[t("code",null,"\\uFE0F"),d(" - Variant selector-16")]),t("li",null,[t("code",null,"\\u200D"),d(" - Zwidge")]),t("li",null,[t("code",null,"\\u1F468"),d(" - Man")]),t("li",null,[t("code",null,"\\u1F3FD"),d(" - Fitzpatrick type-4")])],-1),W4={class:"codepoint absolute top-30 right-30"},j4=t("div",{class:"glyph"},"👨🏻‍❤️‍👨🏽 ",-1),H4=t("div",{class:"code"},[d("U+1F468 + U+1F3Fb +"),t("br"),d("U+200D + U+2764 +"),t("br"),d("U+FE0F + U+200D +"),t("br"),d("U+1F468 + U+1F3FD")],-1),V4=[j4,H4],z4={class:"border border-thin px-10 w-73 mt-5"},K4=t("p",null,"4 + 4 + 3 + 3 + 3 + 3 + 4 + 4 = 28 bytes!",-1),G4=[K4],Y4={__name:"56",setup(e){const n={hide:!1,srcSequence:"./pages/04-quirks.md"};return L(H),(s,o)=>{const l=$t,r=qt("click");return v(),W(Fe,le(oe(n)),{default:O(()=>[R4,N4,I(l,null,{default:O(()=>[q4]),_:1}),Ke((v(),k("div",W4,V4)),[[r]]),Ke((v(),k("div",z4,G4)),[[r]])]),_:1},16)}}},Q4=V(Y4,[["__file","/@slidev/slides/56.md"]]),Z4=t("h2",null,"Emoji Composition",-1),J4=t("p",null,'"Fun" combinations:',-1),X4=t("ul",null,[t("li",null,[t("code",null,"\\u1F9D4"),d(" + "),t("code",null,"\\u200D"),d(" + "),t("code",null,"\\u2640"),d(" + "),t("code",null,"\\uFE0F"),d(" = 🧔‍♀️ = Person Beard + ♀")]),t("li",null,[t("code",null,"\\u1F9D1"),d(" + "),t("code",null,"\\u200D"),d(" + "),t("code",null,"\\u1F9b2"),d(" = 🧑‍🦲 = Adult + Bald")]),t("li",null,[t("code",null,"\\u1F9D1"),d(" + "),t("code",null,"\\u200D"),d(" + "),t("code",null,"\\u2695"),d(" = 🧑‍⚕ = Adult + ⚕ (Staff of aesculapius)")]),t("li",null,[t("code",null,"\\u1F9D1"),d(" + "),t("code",null,"\\u200D"),d(" + "),t("code",null,"\\u1F373"),d(" = 🧑‍🍳 = Adult + 🍳 (Cooking)")]),t("li",null,[t("code",null,"\\u1F468"),d(" + "),t("code",null,"\\u1F3FB"),d(" + "),t("code",null,"\\u200D"),d(" + "),t("code",null,"\\u1F9BD"),d(" = 👨🏻‍🦽 = Man + Fitzpatrick 1-2 + Manual wheelchair")]),t("li",null,[t("code",null,"\\u1F469"),d(" + "),t("code",null,"\\u1F3FF"),d(" + "),t("code",null,"\\u200D"),d(" + "),t("code",null,"\\u1F373"),d(" = 👩🏿‍🎤 = Woman + Fitzpatrick Type-6 + Microphone")]),t("li",null,[t("code",null,"\\u1F3F3"),d(" + "),t("code",null,"\\uFE0F"),d(" + "),t("code",null,"\\u200D"),d(" + "),t("code",null,"\\u1F308"),d(" = 🏳️ + 🌈 = 🏳️‍🌈")]),t("li",null,[t("code",null,"\\u1F3F3"),d(" + "),t("code",null,"\\uFE0F"),d(" + "),t("code",null,"\\u200D"),d(" + "),t("code",null,"\\u26A7"),d(" + "),t("code",null,"u\\FE0F"),d(" = 🏳️ + ⚧️ = 🏳️‍⚧️")])],-1),eF={__name:"57",setup(e){const n={hide:!1,srcSequence:"./pages/04-quirks.md"};return L(H),(s,o)=>{const l=$t;return v(),W(Fe,le(oe(n)),{default:O(()=>[Z4,J4,I(l,null,{default:O(()=>[X4]),_:1})]),_:1},16)}}},tF=V(eF,[["__file","/@slidev/slides/57.md"]]),nF=t("h2",null,"Digraphs/ligatures",-1),sF=t("p",null,"Digraphs and ligatures are both made by combining two glyphs:",-1),oF=t("ul",null,[t("li",null,"In a digraph, the glyphs remain separate but are placed close together."),t("li",null,"In a ligature, the glyphs are fused into a single glyph.")],-1),lF=t("p",null,"Generally speaking, Unicode doesn’t like dealing with this problem.",-1),rF=t("blockquote",null,[t("p",null,[d("The Unicode Standard is a character encoding standard, and is "),t("strong",null,"not intended to standardize ligatures or other presentation forms"),d(", or any other aspects of the details of font and glyph design. The ligatures which you can find in the Unicode Standard are "),t("strong",null,"compatibility encodings"),d(" only—and are not meant to set a precedent requiring the encoding of all ligatures as characters.")])],-1),aF=t("p",null,"TL;DR; you shouldn’t expect any ligatures/digraphs to be added to Unicode any time soon.",-1),iF={__name:"58",setup(e){const n={hide:!1,srcSequence:"./pages/04-quirks.md"};return L(H),(s,o)=>(v(),W(Fe,le(oe(n)),{default:O(()=>[nF,sF,oF,lF,rF,aF]),_:1},16))}},cF=V(iF,[["__file","/@slidev/slides/58.md"]]),uF=t("h2",null,"Flags",-1),pF=t("ul",null,[t("li",null,[t("p",null,"Who adds a new flag?")]),t("li",null,[t("p",null,"Flag sequences"),t("ul",null,[t("li",null,":RGI_Emoji_Flag_Sequence"),t("li",null,[t("a",{href:"https://unicode.org/reports/tr51/#Flags",target:"_blank",rel:"noopener"},"https://unicode.org/reports/tr51/#Flags")]),t("li",null,"Qatar flag = wideboi")])]),t("li",null,[t("p",null,'"🇭🇪🇱🇱🇴🇼🇴🇷🇱🇩" ??')])],-1),dF=t("p",null,"Flag types:",-1),fF=t("ul",null,[t("li",null,"country/region"),t("li",null,"local (gbeng, etc)")],-1),hF={__name:"59",setup(e){const n={hide:!1,srcSequence:"./pages/04-quirks.md"};return L(H),(s,o)=>(v(),W(Fe,le(oe(n)),{default:O(()=>[uF,pF,dF,fF]),_:1},16))}},yF=V(hF,[["__file","/@slidev/slides/59.md"]]),mF=t("h2",null,"Unicode Tags",-1),gF=t("pre",{class:"shiki-container"},[t("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#4D9375"}},"fn"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#A1B567"}},"main"),t("span",{style:{color:"#858585"}},"()"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#858585"}},"{")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#CB7676"}},"let"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#B8A965"}},"encoded"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#CB7676"}},"="),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#C98A7D"}},'"Hello󠀠󠁒󠁵󠁳󠁴 Meetup Amsterdam!"'),t("span",{style:{color:"#858585"}},";")]),d(`
`),t("span",{class:"line"}),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#A1B567"}},"println!"),t("span",{style:{color:"#858585"}},"("),t("span",{style:{color:"#C98A7D"}},'"'),t("span",{style:{color:"#858585"}},"{}"),t("span",{style:{color:"#C98A7D"}},'"'),t("span",{style:{color:"#858585"}},","),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#B8A965"}},"encoded"),t("span",{style:{color:"#858585"}},");")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#758575"}},'    //println!("{:?}", encoded);')]),d(`
`),t("span",{class:"line"}),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#758575"}},"    //let codepoints: Vec<u32> = encoded.chars().map(|c| c.into()).collect();")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#758575"}},'    //println!("{:X?}", codepoints);')]),d(`
`),t("span",{class:"line"}),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#758575"}},"    //let offset: u32 = 0xE0000;")]),d(`
`),t("span",{class:"line"}),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#758575"}},"    //let decoded: String = encoded")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#758575"}},"    //    .chars()")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#758575"}},"    //    .map(|c| match c {")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#758575"}},"    //        '\\u{e0000}'..='\\u{e007F}' => {")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#758575"}},"    //            let char_u32: u32 = c.into();")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#758575"}},"    //            std::char::from_u32(char_u32 - offset).unwrap()")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#758575"}},"    //        },")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#758575"}},"    //        _ => c,")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#758575"}},"    //    })")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#758575"}},"    //    .collect();")]),d(`
`),t("span",{class:"line"}),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#758575"}},'    //println!("{:?}", decoded);')]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#858585"}},"}")])])]),t("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#1C6B48"}},"fn"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#6C7834"}},"main"),t("span",{style:{color:"#8E8F8B"}},"()"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8E8F8B"}},"{")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#AB5959"}},"let"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8C862B"}},"encoded"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#AB5959"}},"="),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#B56959"}},'"Hello󠀠󠁒󠁵󠁳󠁴 Meetup Amsterdam!"'),t("span",{style:{color:"#8E8F8B"}},";")]),d(`
`),t("span",{class:"line"}),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#6C7834"}},"println!"),t("span",{style:{color:"#8E8F8B"}},"("),t("span",{style:{color:"#B56959"}},'"'),t("span",{style:{color:"#8E8F8B"}},"{}"),t("span",{style:{color:"#B56959"}},'"'),t("span",{style:{color:"#8E8F8B"}},","),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8C862B"}},"encoded"),t("span",{style:{color:"#8E8F8B"}},");")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#A0ADA0"}},'    //println!("{:?}", encoded);')]),d(`
`),t("span",{class:"line"}),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#A0ADA0"}},"    //let codepoints: Vec<u32> = encoded.chars().map(|c| c.into()).collect();")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#A0ADA0"}},'    //println!("{:X?}", codepoints);')]),d(`
`),t("span",{class:"line"}),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#A0ADA0"}},"    //let offset: u32 = 0xE0000;")]),d(`
`),t("span",{class:"line"}),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#A0ADA0"}},"    //let decoded: String = encoded")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#A0ADA0"}},"    //    .chars()")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#A0ADA0"}},"    //    .map(|c| match c {")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#A0ADA0"}},"    //        '\\u{e0000}'..='\\u{e007F}' => {")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#A0ADA0"}},"    //            let char_u32: u32 = c.into();")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#A0ADA0"}},"    //            std::char::from_u32(char_u32 - offset).unwrap()")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#A0ADA0"}},"    //        },")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#A0ADA0"}},"    //        _ => c,")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#A0ADA0"}},"    //    })")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#A0ADA0"}},"    //    .collect();")]),d(`
`),t("span",{class:"line"}),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#A0ADA0"}},'    //println!("{:?}", decoded);')]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),vF=t("p",null,[t("a",{href:"https://www.compart.com/en/unicode/block/U+E0000",target:"_blank",rel:"noopener"},"https://www.compart.com/en/unicode/block/U+E0000")],-1),_F={__name:"60",setup(e){const n={hide:!1,srcSequence:"./pages/04-quirks.md"};return L(H),(s,o)=>{const l=Ut;return v(),W(Fe,le(oe(n)),{default:O(()=>[mF,I(l,je({},{ranges:[""]}),{default:O(()=>[gF]),_:1},16),vF]),_:1},16)}}},bF=V(_F,[["__file","/@slidev/slides/60.md"]]),xF=t("h1",null,"THE END",-1),AF={__name:"61",setup(e){const n={layout:"cover",hideInToc:!0};return L(H),(s,o)=>(v(),W(Gs,le(oe(n)),{default:O(()=>[xF]),_:1},16))}},wF=V(AF,[["__file","/@slidev/slides/61.md"]]),BF=[{path:"1",name:"page-1",component:ww,meta:{theme:"seriph",background:"https://source.unsplash.com/collection/94734566/1920x1080",class:"text-center",highlighter:"shiki",lineNumbers:!0,info:`## Unicode, Rust, quirks, and way too much detail.
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
`,drawings:{persist:!1},transition:"slide-left",title:"Demystifying Unicode",hideInToc:!0},index:0,start:0,end:19,noteHTML:"",filepath:"/home/ben/Workspace/demystifying-unicode/slides.md",id:0,no:1},__clicksElements:[],__preloaded:!1}},{path:"2",name:"page-2",component:Dw,meta:{hideInToc:!0,slide:{raw:`---
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
- Some things you only need to know when you need to know`,frontmatter:{hideInToc:!0},index:1,start:19,end:30,noteHTML:"",filepath:"/home/ben/Workspace/demystifying-unicode/slides.md",id:1,no:2},__clicksElements:[],__preloaded:!1}},{path:"3",name:"page-3",component:J6,meta:{hideInToc:!0,slide:{raw:`---
hideInToc: true
---

# Table of contents

<Toc maxDepth="1"></Toc>
`,title:"Table of contents",level:1,content:`# Table of contents

<Toc maxDepth="1"></Toc>`,frontmatter:{hideInToc:!0},index:2,start:30,end:38,noteHTML:"",filepath:"/home/ben/Workspace/demystifying-unicode/slides.md",id:2,no:3},__clicksElements:[],__preloaded:!1}},{path:"4",name:"page-4",component:t2,meta:{layout:"cover",title:"History",hide:!1,srcSequence:"./pages/01-history.md",slide:{raw:null,title:"History",level:1,content:"# History",frontmatter:{layout:"cover",title:"History",hide:!1,srcSequence:"./pages/01-history.md"},index:3,start:0,end:6,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/01-history.md",raw:`---
layout: cover
---

# History
`,title:"History",level:1,content:"# History",frontmatter:{layout:"cover",title:"History"},index:0,start:0,end:6},inline:{raw:`---
src: ./pages/01-history.md
hide: false
---
`,content:"",frontmatter:{hide:!1},index:3,start:38,end:43},filepath:"/home/ben/Workspace/demystifying-unicode/pages/01-history.md",noteHTML:"",id:3,no:4},__clicksElements:[],__preloaded:!1}},{path:"5",name:"page-5",component:i2,meta:{hide:!1,srcSequence:"./pages/01-history.md",slide:{raw:`
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
`,id:4,no:5},__clicksElements:[],__preloaded:!1}},{path:"6",name:"page-6",component:m2,meta:{hide:!1,srcSequence:"./pages/01-history.md",slide:{raw:`
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

</v-click>`,frontmatter:{},index:2,start:37,end:68},filepath:"/home/ben/Workspace/demystifying-unicode/pages/01-history.md",noteHTML:"",id:5,no:6},__clicksElements:[],__preloaded:!1}},{path:"7",name:"page-7",component:B2,meta:{hide:!1,srcSequence:"./pages/01-history.md",slide:{raw:`
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
`,id:6,no:7},__clicksElements:[],__preloaded:!1}},{path:"8",name:"page-8",component:T2,meta:{layout:"center",hide:!1,srcSequence:"./pages/01-history.md",slide:{raw:`---
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
`,id:7,no:8},__clicksElements:[],__preloaded:!1}},{path:"9",name:"page-9",component:R2,meta:{hide:!1,srcSequence:"./pages/01-history.md",slide:{raw:`
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
`,id:8,no:9},__clicksElements:[],__preloaded:!1}},{path:"10",name:"page-10",component:K2,meta:{hide:!1,srcSequence:"./pages/01-history.md",slide:{raw:`
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

</v-clicks>`,frontmatter:{},index:6,start:179,end:218},filepath:"/home/ben/Workspace/demystifying-unicode/pages/01-history.md",noteHTML:"",id:9,no:10},__clicksElements:[],__preloaded:!1}},{path:"11",name:"page-11",component:eB,meta:{hide:!1,srcSequence:"./pages/01-history.md",slide:{raw:`
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

</footer>`,frontmatter:{},index:7,start:219,end:248},filepath:"/home/ben/Workspace/demystifying-unicode/pages/01-history.md",noteHTML:"",id:10,no:11},__clicksElements:[],__preloaded:!1}},{path:"12",name:"page-12",component:aB,meta:{layout:"center",hide:!1,srcSequence:"./pages/01-history.md",slide:{raw:`---
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

</v-clicks>`,frontmatter:{layout:"center"},index:8,start:248,end:266},filepath:"/home/ben/Workspace/demystifying-unicode/pages/01-history.md",noteHTML:"",id:11,no:12},__clicksElements:[],__preloaded:!1}},{path:"13",name:"page-13",component:uB,meta:{layout:"cover",title:"Unicode",hide:!1,srcSequence:"./pages/02-unicode.md",slide:{raw:null,title:"Unicode",level:1,content:"# Unicode",frontmatter:{layout:"cover",title:"Unicode",hide:!1,srcSequence:"./pages/02-unicode.md"},index:12,start:0,end:6,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/02-unicode.md",raw:`---
layout: cover
---

# Unicode
`,title:"Unicode",level:1,content:"# Unicode",frontmatter:{layout:"cover",title:"Unicode"},index:0,start:0,end:6},inline:{raw:`---
src: ./pages/02-unicode.md
hide: false
---
`,content:"",frontmatter:{hide:!1},index:4,start:43,end:48},filepath:"/home/ben/Workspace/demystifying-unicode/pages/02-unicode.md",noteHTML:"",id:12,no:13},__clicksElements:[],__preloaded:!1}},{path:"14",name:"page-14",component:hB,meta:{hide:!1,srcSequence:"./pages/02-unicode.md",slide:{raw:`
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
`,id:13,no:14},__clicksElements:[],__preloaded:!1}},{path:"15",name:"page-15",component:vB,meta:{layout:"center",hide:!1,srcSequence:"./pages/02-unicode.md",slide:{raw:`---
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
</style>`,frontmatter:{layout:"center"},index:2,start:27,end:43},filepath:"/home/ben/Workspace/demystifying-unicode/pages/02-unicode.md",noteHTML:"",id:14,no:15},__clicksElements:[],__preloaded:!1}},{path:"16",name:"page-16",component:AB,meta:{layout:"center",hide:!1,srcSequence:"./pages/02-unicode.md",slide:{raw:`---
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
`,id:15,no:16},__clicksElements:[],__preloaded:!1}},{path:"17",name:"page-17",component:FB,meta:{hide:!1,srcSequence:"./pages/02-unicode.md",slide:{raw:`
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
`,id:16,no:17},__clicksElements:[],__preloaded:!1}},{path:"18",name:"page-18",component:TB,meta:{layout:"center",hide:!1,srcSequence:"./pages/02-unicode.md",slide:{raw:`---
layout: center
---

<img src="/glyph-codepoint-character.jpg" alt="Triple spiderman meme, glyph, codepoint, character pointing at each other" />
`,content:'<img src="/glyph-codepoint-character.jpg" alt="Triple spiderman meme, glyph, codepoint, character pointing at each other" />',frontmatter:{layout:"center",hide:!1,srcSequence:"./pages/02-unicode.md"},index:17,start:94,end:100,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/02-unicode.md",raw:`---
layout: center
---

<img src="/glyph-codepoint-character.jpg" alt="Triple spiderman meme, glyph, codepoint, character pointing at each other" />
`,content:'<img src="/glyph-codepoint-character.jpg" alt="Triple spiderman meme, glyph, codepoint, character pointing at each other" />',frontmatter:{layout:"center"},index:5,start:94,end:100},filepath:"/home/ben/Workspace/demystifying-unicode/pages/02-unicode.md",noteHTML:"",id:17,no:18},__clicksElements:[],__preloaded:!1}},{path:"19",name:"page-19",component:PB,meta:{layout:"center",hide:!1,srcSequence:"./pages/02-unicode.md",slide:{raw:`---
layout: center
---

<img src="/no_chars_yes_glyphs.jpg" alt="Drake no: characters. Drake yes: glyphs" />
`,content:'<img src="/no_chars_yes_glyphs.jpg" alt="Drake no: characters. Drake yes: glyphs" />',frontmatter:{layout:"center",hide:!1,srcSequence:"./pages/02-unicode.md"},index:18,start:100,end:106,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/02-unicode.md",raw:`---
layout: center
---

<img src="/no_chars_yes_glyphs.jpg" alt="Drake no: characters. Drake yes: glyphs" />
`,content:'<img src="/no_chars_yes_glyphs.jpg" alt="Drake no: characters. Drake yes: glyphs" />',frontmatter:{layout:"center"},index:6,start:100,end:106},filepath:"/home/ben/Workspace/demystifying-unicode/pages/02-unicode.md",noteHTML:"",id:18,no:19},__clicksElements:[],__preloaded:!1}},{path:"20",name:"page-20",component:NB,meta:{hide:!1,srcSequence:"./pages/02-unicode.md",slide:{raw:`
## Glyphemes

<div class="codepoint absolute top-50 left-50">
  <div class="glyph">é</div>
  <div class="code">U+00e9</div>
</div>

<div class="codepoint absolute top-50 right-50">
  <div class="glyph">é</div>
  <div class="code">U+0065 + U+0301</div>
</div>

<!--
Glyphemes - 1 to many codepoints that are represented to the user as a single character
--> 
`,title:"Glyphemes",level:2,content:`## Glyphemes

<div class="codepoint absolute top-50 left-50">
  <div class="glyph">é</div>
  <div class="code">U+00e9</div>
</div>

<div class="codepoint absolute top-50 right-50">
  <div class="glyph">é</div>
  <div class="code">U+0065 + U+0301</div>
</div>`,frontmatter:{hide:!1,srcSequence:"./pages/02-unicode.md"},note:"Glyphemes - 1 to many codepoints that are represented to the user as a single character",index:19,start:107,end:124,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/02-unicode.md",raw:`
## Glyphemes

<div class="codepoint absolute top-50 left-50">
  <div class="glyph">é</div>
  <div class="code">U+00e9</div>
</div>

<div class="codepoint absolute top-50 right-50">
  <div class="glyph">é</div>
  <div class="code">U+0065 + U+0301</div>
</div>

<!--
Glyphemes - 1 to many codepoints that are represented to the user as a single character
--> 
`,title:"Glyphemes",level:2,content:`## Glyphemes

<div class="codepoint absolute top-50 left-50">
  <div class="glyph">é</div>
  <div class="code">U+00e9</div>
</div>

<div class="codepoint absolute top-50 right-50">
  <div class="glyph">é</div>
  <div class="code">U+0065 + U+0301</div>
</div>`,frontmatter:{},note:"Glyphemes - 1 to many codepoints that are represented to the user as a single character",index:7,start:107,end:124},filepath:"/home/ben/Workspace/demystifying-unicode/pages/02-unicode.md",noteHTML:`<p>Glyphemes - 1 to many codepoints that are represented to the user as a single character</p>
`,id:19,no:20},__clicksElements:[],__preloaded:!1}},{path:"21",name:"page-21",component:zB,meta:{layout:"center",hide:!1,srcSequence:"./pages/02-unicode.md",slide:{raw:`---
layout: center
---

## What is the difference between
## \`Unicode\`
## and
## \`UTF-8\`
`,title:"What is the difference between",level:2,content:"## What is the difference between\n## `Unicode`\n## and\n## `UTF-8`",frontmatter:{layout:"center",hide:!1,srcSequence:"./pages/02-unicode.md"},index:20,start:124,end:133,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/02-unicode.md",raw:`---
layout: center
---

## What is the difference between
## \`Unicode\`
## and
## \`UTF-8\`
`,title:"What is the difference between",level:2,content:"## What is the difference between\n## `Unicode`\n## and\n## `UTF-8`",frontmatter:{layout:"center"},index:8,start:124,end:133},filepath:"/home/ben/Workspace/demystifying-unicode/pages/02-unicode.md",noteHTML:"",id:20,no:21},__clicksElements:[],__preloaded:!1}},{path:"22",name:"page-22",component:YB,meta:{layout:"center",hide:!1,srcSequence:"./pages/02-unicode.md",slide:{raw:`---
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

</div>`,frontmatter:{layout:"center",hide:!1,srcSequence:"./pages/02-unicode.md"},note:"There is also UTF-16 and UTF-32",index:21,start:133,end:149,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/02-unicode.md",raw:`---
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

</div>`,frontmatter:{layout:"center"},note:"There is also UTF-16 and UTF-32",index:9,start:133,end:149},filepath:"/home/ben/Workspace/demystifying-unicode/pages/02-unicode.md",noteHTML:`<p>There is also UTF-16 and UTF-32</p>
`,id:21,no:22},__clicksElements:[],__preloaded:!1}},{path:"23",name:"page-23",component:sk,meta:{hide:!1,srcSequence:"./pages/02-unicode.md",slide:{raw:`
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

</footer>`,frontmatter:{hide:!1,srcSequence:"./pages/02-unicode.md"},index:22,start:150,end:172,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/02-unicode.md",raw:`
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

</footer>`,frontmatter:{},index:10,start:150,end:172},filepath:"/home/ben/Workspace/demystifying-unicode/pages/02-unicode.md",noteHTML:"",id:22,no:23},__clicksElements:[],__preloaded:!1}},{path:"24",name:"page-24",component:ak,meta:{layout:"center",hide:!1,srcSequence:"./pages/02-unicode.md",slide:{raw:`---
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

</footer>`,frontmatter:{layout:"center",hide:!1,srcSequence:"./pages/02-unicode.md"},index:23,start:172,end:192,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/02-unicode.md",raw:`---
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

</footer>`,frontmatter:{layout:"center"},index:11,start:172,end:192},filepath:"/home/ben/Workspace/demystifying-unicode/pages/02-unicode.md",noteHTML:"",id:23,no:24},__clicksElements:[],__preloaded:!1}},{path:"25",name:"page-25",component:hk,meta:{hide:!1,srcSequence:"./pages/02-unicode.md",slide:{raw:`
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

UTF-21: https://evanhahn.com/utf-21/`,index:24,start:193,end:228,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/02-unicode.md",raw:`
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

UTF-21: https://evanhahn.com/utf-21/`,index:12,start:193,end:228},filepath:"/home/ben/Workspace/demystifying-unicode/pages/02-unicode.md",noteHTML:`<p>A UTF-8 encoded string on my machine spits out an array of bytes. To your machine, it's just an array of bytes.</p>
<p>UTF-8/16/32 &amp; BOM FAQs: https://unicode.org/faq/utf_bom.html</p>
<p>Content-Encoding header on HTTP requests</p>
<p>UTF-21: https://evanhahn.com/utf-21/</p>
`,id:24,no:25},__clicksElements:[],__preloaded:!1}},{path:"26",name:"page-26",component:gk,meta:{layout:"center",hide:!1,srcSequence:"./pages/02-unicode.md",slide:{raw:`---
layout: center
---

## UTF-8 is the king of the web
`,title:"UTF-8 is the king of the web",level:2,content:"## UTF-8 is the king of the web",frontmatter:{layout:"center",hide:!1,srcSequence:"./pages/02-unicode.md"},index:25,start:228,end:234,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/02-unicode.md",raw:`---
layout: center
---

## UTF-8 is the king of the web
`,title:"UTF-8 is the king of the web",level:2,content:"## UTF-8 is the king of the web",frontmatter:{layout:"center"},index:13,start:228,end:234},filepath:"/home/ben/Workspace/demystifying-unicode/pages/02-unicode.md",noteHTML:"",id:25,no:26},__clicksElements:[],__preloaded:!1}},{path:"27",name:"page-27",component:Bk,meta:{hide:!1,srcSequence:"./pages/02-unicode.md",slide:{raw:'\n## Nuts and bolts of UTF-8\n\nKey points:\n\n- Variable width (1-4 bytes)\n- ∴ Variable offset between characters\n- The default in Rust (+many more)\n\n<v-click>\n\n<hr />\n\n| Code point range | Byte 1 | Byte 2 | Byte 3 | Byte 4 | Bit Capacity | Code points |\n| - | - | - | - | - | - | - |\n| `0x000000..0x00007F` | `0xxxxxxx` | | | | 7 | 128 |\n| `0x000080..0x0007FF` | `110xxxxx` | `10xxxxxx` | | | 11 | 1920 |\n| `0x000800..0x00FFFF` | `1110xxxx` | `10xxxxxx` | `10xxxxxx` | | 16 | 63488 |\n| `0x010000..0x10FFFF` | `11110xxx` | `10xxxxxx` | `10xxxxxx` | `10xxxxxx` | 21 | 1mil+ |\n\n</v-click>\n\n<!--\nUTF-8 is generally speaking more efficient when dealing with "Latin" based web - Best case 1 byte, worst case, 2 bytes.\nUTF-16 is gauranteed to be 2 bytes, if not 4\nUTF-32 will always be 4 bytes.\n-->\n',title:"Nuts and bolts of UTF-8",level:2,content:"## Nuts and bolts of UTF-8\n\nKey points:\n\n- Variable width (1-4 bytes)\n- ∴ Variable offset between characters\n- The default in Rust (+many more)\n\n<v-click>\n\n<hr />\n\n| Code point range | Byte 1 | Byte 2 | Byte 3 | Byte 4 | Bit Capacity | Code points |\n| - | - | - | - | - | - | - |\n| `0x000000..0x00007F` | `0xxxxxxx` | | | | 7 | 128 |\n| `0x000080..0x0007FF` | `110xxxxx` | `10xxxxxx` | | | 11 | 1920 |\n| `0x000800..0x00FFFF` | `1110xxxx` | `10xxxxxx` | `10xxxxxx` | | 16 | 63488 |\n| `0x010000..0x10FFFF` | `11110xxx` | `10xxxxxx` | `10xxxxxx` | `10xxxxxx` | 21 | 1mil+ |\n\n</v-click>",frontmatter:{hide:!1,srcSequence:"./pages/02-unicode.md"},note:`UTF-8 is generally speaking more efficient when dealing with "Latin" based web - Best case 1 byte, worst case, 2 bytes.
UTF-16 is gauranteed to be 2 bytes, if not 4
UTF-32 will always be 4 bytes.`,index:26,start:235,end:263,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/02-unicode.md",raw:'\n## Nuts and bolts of UTF-8\n\nKey points:\n\n- Variable width (1-4 bytes)\n- ∴ Variable offset between characters\n- The default in Rust (+many more)\n\n<v-click>\n\n<hr />\n\n| Code point range | Byte 1 | Byte 2 | Byte 3 | Byte 4 | Bit Capacity | Code points |\n| - | - | - | - | - | - | - |\n| `0x000000..0x00007F` | `0xxxxxxx` | | | | 7 | 128 |\n| `0x000080..0x0007FF` | `110xxxxx` | `10xxxxxx` | | | 11 | 1920 |\n| `0x000800..0x00FFFF` | `1110xxxx` | `10xxxxxx` | `10xxxxxx` | | 16 | 63488 |\n| `0x010000..0x10FFFF` | `11110xxx` | `10xxxxxx` | `10xxxxxx` | `10xxxxxx` | 21 | 1mil+ |\n\n</v-click>\n\n<!--\nUTF-8 is generally speaking more efficient when dealing with "Latin" based web - Best case 1 byte, worst case, 2 bytes.\nUTF-16 is gauranteed to be 2 bytes, if not 4\nUTF-32 will always be 4 bytes.\n-->\n',title:"Nuts and bolts of UTF-8",level:2,content:"## Nuts and bolts of UTF-8\n\nKey points:\n\n- Variable width (1-4 bytes)\n- ∴ Variable offset between characters\n- The default in Rust (+many more)\n\n<v-click>\n\n<hr />\n\n| Code point range | Byte 1 | Byte 2 | Byte 3 | Byte 4 | Bit Capacity | Code points |\n| - | - | - | - | - | - | - |\n| `0x000000..0x00007F` | `0xxxxxxx` | | | | 7 | 128 |\n| `0x000080..0x0007FF` | `110xxxxx` | `10xxxxxx` | | | 11 | 1920 |\n| `0x000800..0x00FFFF` | `1110xxxx` | `10xxxxxx` | `10xxxxxx` | | 16 | 63488 |\n| `0x010000..0x10FFFF` | `11110xxx` | `10xxxxxx` | `10xxxxxx` | `10xxxxxx` | 21 | 1mil+ |\n\n</v-click>",frontmatter:{},note:`UTF-8 is generally speaking more efficient when dealing with "Latin" based web - Best case 1 byte, worst case, 2 bytes.
UTF-16 is gauranteed to be 2 bytes, if not 4
UTF-32 will always be 4 bytes.`,index:14,start:235,end:263},filepath:"/home/ben/Workspace/demystifying-unicode/pages/02-unicode.md",noteHTML:`<p>UTF-8 is generally speaking more efficient when dealing with &quot;Latin&quot; based web - Best case 1 byte, worst case, 2 bytes.
UTF-16 is gauranteed to be 2 bytes, if not 4
UTF-32 will always be 4 bytes.</p>
`,id:26,no:27},__clicksElements:[],__preloaded:!1}},{path:"28",name:"page-28",component:Hk,meta:{hide:!1,srcSequence:"./pages/02-unicode.md",slide:{raw:`
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

</div>`,frontmatter:{hide:!1,srcSequence:"./pages/02-unicode.md"},note:"Take a codepoint, and split it into UTF-8",index:27,start:264,end:303,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/02-unicode.md",raw:`
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

</div>`,frontmatter:{},note:"Take a codepoint, and split it into UTF-8",index:15,start:264,end:303},filepath:"/home/ben/Workspace/demystifying-unicode/pages/02-unicode.md",noteHTML:`<p>Take a codepoint, and split it into UTF-8</p>
`,id:27,no:28},__clicksElements:[],__preloaded:!1}},{path:"29",name:"page-29",component:wC,meta:{hide:!1,srcSequence:"./pages/02-unicode.md",slide:{raw:`
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
</style>`,frontmatter:{hide:!1,srcSequence:"./pages/02-unicode.md"},index:28,start:304,end:388,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/02-unicode.md",raw:`
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
</style>`,frontmatter:{},index:16,start:304,end:388},filepath:"/home/ben/Workspace/demystifying-unicode/pages/02-unicode.md",noteHTML:"",id:28,no:29},__clicksElements:[],__preloaded:!1}},{path:"30",name:"page-30",component:SC,meta:{layout:"center",hide:!1,srcSequence:"./pages/02-unicode.md",slide:{raw:`---
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

</v-clicks>`,frontmatter:{layout:"center",hide:!1,srcSequence:"./pages/02-unicode.md"},index:29,start:388,end:406,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/02-unicode.md",raw:`---
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

</v-clicks>`,frontmatter:{layout:"center"},index:17,start:388,end:406},filepath:"/home/ben/Workspace/demystifying-unicode/pages/02-unicode.md",noteHTML:"",id:29,no:30},__clicksElements:[],__preloaded:!1}},{path:"31",name:"page-31",component:UC,meta:{layout:"cover",title:"Unicode in Rust",hide:!1,srcSequence:"./pages/03-unicode-in-rust.md",slide:{raw:null,title:"Unicode in Rust",level:1,content:"# Unicode in Rust",frontmatter:{layout:"cover",title:"Unicode in Rust",hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"},note:"We now know what Unicode and UTF-8 are, how is it used in rust?",index:30,start:0,end:12,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/03-unicode-in-rust.md",raw:`---
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
`,id:30,no:31},__clicksElements:[],__preloaded:!1}},{path:"32",name:"page-32",component:IC,meta:{layout:"center",hide:!1,srcSequence:"./pages/03-unicode-in-rust.md",slide:{raw:`---
layout: center
---

Q: What is the primitive string type in rust?
`,content:"Q: What is the primitive string type in rust?",frontmatter:{layout:"center",hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"},index:31,start:12,end:18,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/03-unicode-in-rust.md",raw:`---
layout: center
---

Q: What is the primitive string type in rust?
`,content:"Q: What is the primitive string type in rust?",frontmatter:{layout:"center"},index:1,start:12,end:18},filepath:"/home/ben/Workspace/demystifying-unicode/pages/03-unicode-in-rust.md",noteHTML:"",id:31,no:32},__clicksElements:[],__preloaded:!1}},{path:"33",name:"page-33",component:HC,meta:{layout:"center",hide:!1,srcSequence:"./pages/03-unicode-in-rust.md",slide:{raw:`---
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
`,id:32,no:33},__clicksElements:[],__preloaded:!1}},{path:"34",name:"page-34",component:f9,meta:{hide:!1,srcSequence:"./pages/03-unicode-in-rust.md",slide:{raw:`
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
`,id:33,no:34},__clicksElements:[],__preloaded:!1}},{path:"35",name:"page-35",component:m9,meta:{layout:"center",hide:!1,srcSequence:"./pages/03-unicode-in-rust.md",slide:{raw:`---
layout: center
---

## A String slice (\`str\`) is just a slice of bytes (\`[u8]\`), **which contents are always valid UTF-8**.
`,title:"A String slice (`str`) is just a slice of bytes (`[u8]`), **which contents are always valid UTF-8**.",level:2,content:"## A String slice (`str`) is just a slice of bytes (`[u8]`), **which contents are always valid UTF-8**.",frontmatter:{layout:"center",hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"},index:34,start:101,end:107,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/03-unicode-in-rust.md",raw:`---
layout: center
---

## A String slice (\`str\`) is just a slice of bytes (\`[u8]\`), **which contents are always valid UTF-8**.
`,title:"A String slice (`str`) is just a slice of bytes (`[u8]`), **which contents are always valid UTF-8**.",level:2,content:"## A String slice (`str`) is just a slice of bytes (`[u8]`), **which contents are always valid UTF-8**.",frontmatter:{layout:"center"},index:4,start:101,end:107},filepath:"/home/ben/Workspace/demystifying-unicode/pages/03-unicode-in-rust.md",noteHTML:"",id:34,no:35},__clicksElements:[],__preloaded:!1}},{path:"36",name:"page-36",component:_9,meta:{layout:"center",hide:!1,srcSequence:"./pages/03-unicode-in-rust.md",slide:{raw:`---
layout: center
---

## Lets make some strings
`,title:"Lets make some strings",level:2,content:"## Lets make some strings",frontmatter:{layout:"center",hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"},index:35,start:107,end:113,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/03-unicode-in-rust.md",raw:`---
layout: center
---

## Lets make some strings
`,title:"Lets make some strings",level:2,content:"## Lets make some strings",frontmatter:{layout:"center"},index:5,start:107,end:113},filepath:"/home/ben/Workspace/demystifying-unicode/pages/03-unicode-in-rust.md",noteHTML:"",id:35,no:36},__clicksElements:[],__preloaded:!1}},{path:"37",name:"page-37",component:F9,meta:{hide:!1,srcSequence:"./pages/03-unicode-in-rust.md",slide:{raw:`
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
`,id:36,no:37},__clicksElements:[],__preloaded:!1}},{path:"38",name:"page-38",component:O9,meta:{hide:!1,srcSequence:"./pages/03-unicode-in-rust.md",slide:{raw:`
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

</v-click>`,frontmatter:{},index:7,start:153,end:185},filepath:"/home/ben/Workspace/demystifying-unicode/pages/03-unicode-in-rust.md",noteHTML:"",id:37,no:38},__clicksElements:[],__preloaded:!1}},{path:"39",name:"page-39",component:N9,meta:{hide:!1,srcSequence:"./pages/03-unicode-in-rust.md",slide:{raw:`
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

👆 Yes, \`.iter().collect();\``,frontmatter:{},index:8,start:186,end:211},filepath:"/home/ben/Workspace/demystifying-unicode/pages/03-unicode-in-rust.md",noteHTML:"",id:38,no:39},__clicksElements:[],__preloaded:!1}},{path:"40",name:"page-40",component:j9,meta:{layout:"center",hide:!1,srcSequence:"./pages/03-unicode-in-rust.md",slide:{raw:`---
layout: center
---

## See, creating strings is easy!
`,title:"See, creating strings is easy!",level:2,content:"## See, creating strings is easy!",frontmatter:{layout:"center",hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"},index:39,start:211,end:217,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/03-unicode-in-rust.md",raw:`---
layout: center
---

## See, creating strings is easy!
`,title:"See, creating strings is easy!",level:2,content:"## See, creating strings is easy!",frontmatter:{layout:"center"},index:9,start:211,end:217},filepath:"/home/ben/Workspace/demystifying-unicode/pages/03-unicode-in-rust.md",noteHTML:"",id:39,no:40},__clicksElements:[],__preloaded:!1}},{path:"41",name:"page-41",component:J9,meta:{hide:!1,srcSequence:"./pages/03-unicode-in-rust.md",slide:{raw:`
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

</p>`,frontmatter:{},index:10,start:218,end:244},filepath:"/home/ben/Workspace/demystifying-unicode/pages/03-unicode-in-rust.md",noteHTML:"",id:40,no:41},__clicksElements:[],__preloaded:!1}},{path:"42",name:"page-42",component:o7,meta:{hide:!1,srcSequence:"./pages/03-unicode-in-rust.md",slide:{raw:'\n## Invalid UTF-8\n\n...We didn\'t talk about Invalid UTF-8 yet\n\n<v-click>\n\n- First byte of UTF-8 byte sequences\n  - 1 byte seq: `0xxxxxxx`\n  - 2 byte seq: `110xxxxx` - `0xCx` or `0xDx` = 2 bytes \n  - 3 byte seq: `1110xxxx` - `0xEx` = 3 bytes\n  - 4 byte seq: `11110xxx` - `0xFx` = 4 bytes\n\n</v-click>\n\n<v-click>\n\n- ∴ The following are "broken":\n  - `[0x80]`, `[0x90]`, `[0xA0]`, `[0xB0]` - invalid UTF-8 sequences\n  - `[0xC0]`, `[0xD0]` - missing second byte\n  - `[0xE0, 0xFF]` - missing third byte\n  - `[0xF0, 0xFF, 0xFF]` - missing fourth byte\n\n</v-click>\n',title:"Invalid UTF-8",level:2,content:'## Invalid UTF-8\n\n...We didn\'t talk about Invalid UTF-8 yet\n\n<v-click>\n\n- First byte of UTF-8 byte sequences\n  - 1 byte seq: `0xxxxxxx`\n  - 2 byte seq: `110xxxxx` - `0xCx` or `0xDx` = 2 bytes \n  - 3 byte seq: `1110xxxx` - `0xEx` = 3 bytes\n  - 4 byte seq: `11110xxx` - `0xFx` = 4 bytes\n\n</v-click>\n\n<v-click>\n\n- ∴ The following are "broken":\n  - `[0x80]`, `[0x90]`, `[0xA0]`, `[0xB0]` - invalid UTF-8 sequences\n  - `[0xC0]`, `[0xD0]` - missing second byte\n  - `[0xE0, 0xFF]` - missing third byte\n  - `[0xF0, 0xFF, 0xFF]` - missing fourth byte\n\n</v-click>',frontmatter:{hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"},index:41,start:245,end:270,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/03-unicode-in-rust.md",raw:'\n## Invalid UTF-8\n\n...We didn\'t talk about Invalid UTF-8 yet\n\n<v-click>\n\n- First byte of UTF-8 byte sequences\n  - 1 byte seq: `0xxxxxxx`\n  - 2 byte seq: `110xxxxx` - `0xCx` or `0xDx` = 2 bytes \n  - 3 byte seq: `1110xxxx` - `0xEx` = 3 bytes\n  - 4 byte seq: `11110xxx` - `0xFx` = 4 bytes\n\n</v-click>\n\n<v-click>\n\n- ∴ The following are "broken":\n  - `[0x80]`, `[0x90]`, `[0xA0]`, `[0xB0]` - invalid UTF-8 sequences\n  - `[0xC0]`, `[0xD0]` - missing second byte\n  - `[0xE0, 0xFF]` - missing third byte\n  - `[0xF0, 0xFF, 0xFF]` - missing fourth byte\n\n</v-click>\n',title:"Invalid UTF-8",level:2,content:'## Invalid UTF-8\n\n...We didn\'t talk about Invalid UTF-8 yet\n\n<v-click>\n\n- First byte of UTF-8 byte sequences\n  - 1 byte seq: `0xxxxxxx`\n  - 2 byte seq: `110xxxxx` - `0xCx` or `0xDx` = 2 bytes \n  - 3 byte seq: `1110xxxx` - `0xEx` = 3 bytes\n  - 4 byte seq: `11110xxx` - `0xFx` = 4 bytes\n\n</v-click>\n\n<v-click>\n\n- ∴ The following are "broken":\n  - `[0x80]`, `[0x90]`, `[0xA0]`, `[0xB0]` - invalid UTF-8 sequences\n  - `[0xC0]`, `[0xD0]` - missing second byte\n  - `[0xE0, 0xFF]` - missing third byte\n  - `[0xF0, 0xFF, 0xFF]` - missing fourth byte\n\n</v-click>',frontmatter:{},index:11,start:245,end:270},filepath:"/home/ben/Workspace/demystifying-unicode/pages/03-unicode-in-rust.md",noteHTML:"",id:41,no:42},__clicksElements:[],__preloaded:!1}},{path:"43",name:"page-43",component:a7,meta:{layout:"center",hide:!1,srcSequence:"./pages/03-unicode-in-rust.md",slide:{raw:`---
layout: center
---

## Where Enforced UTF-8 can go wrong
`,title:"Where Enforced UTF-8 can go wrong",level:2,content:"## Where Enforced UTF-8 can go wrong",frontmatter:{layout:"center",hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"},index:42,start:270,end:276,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/03-unicode-in-rust.md",raw:`---
layout: center
---

## Where Enforced UTF-8 can go wrong
`,title:"Where Enforced UTF-8 can go wrong",level:2,content:"## Where Enforced UTF-8 can go wrong",frontmatter:{layout:"center"},index:12,start:270,end:276},filepath:"/home/ben/Workspace/demystifying-unicode/pages/03-unicode-in-rust.md",noteHTML:"",id:42,no:43},__clicksElements:[],__preloaded:!1}},{path:"44",name:"page-44",component:d7,meta:{hide:!1,srcSequence:"./pages/03-unicode-in-rust.md",slide:{raw:`
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

</v-click>`,frontmatter:{},index:13,start:277,end:303},filepath:"/home/ben/Workspace/demystifying-unicode/pages/03-unicode-in-rust.md",noteHTML:"",id:43,no:44},__clicksElements:[],__preloaded:!1}},{path:"45",name:"page-45",component:m7,meta:{hide:!1,srcSequence:"./pages/03-unicode-in-rust.md",slide:{raw:`
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
\`\`\``,frontmatter:{},index:14,start:304,end:326},filepath:"/home/ben/Workspace/demystifying-unicode/pages/03-unicode-in-rust.md",noteHTML:"",id:44,no:45},__clicksElements:[],__preloaded:!1}},{path:"46",name:"page-46",component:k7,meta:{hide:!1,srcSequence:"./pages/03-unicode-in-rust.md",slide:{raw:`
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
`,id:45,no:46},__clicksElements:[],__preloaded:!1}},{path:"47",name:"page-47",component:U7,meta:{hide:!1,srcSequence:"./pages/03-unicode-in-rust.md",slide:{raw:`
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

</v-click>`,frontmatter:{},index:16,start:376,end:418},filepath:"/home/ben/Workspace/demystifying-unicode/pages/03-unicode-in-rust.md",noteHTML:"",id:46,no:47},__clicksElements:[],__preloaded:!1}},{path:"48",name:"page-48",component:N7,meta:{layout:"center",hide:!1,srcSequence:"./pages/03-unicode-in-rust.md",slide:{raw:`---
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

</v-clicks>`,frontmatter:{layout:"center"},index:17,start:418,end:436},filepath:"/home/ben/Workspace/demystifying-unicode/pages/03-unicode-in-rust.md",noteHTML:"",id:47,no:48},__clicksElements:[],__preloaded:!1}},{path:"49",name:"page-49",component:j7,meta:{layout:"cover",title:"Quirks",hide:!1,srcSequence:"./pages/04-quirks.md",slide:{raw:null,title:"Quirks",level:1,content:"# Quirks",frontmatter:{layout:"cover",title:"Quirks",hide:!1,srcSequence:"./pages/04-quirks.md"},index:48,start:0,end:6,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/04-quirks.md",raw:`---
layout: cover
---

# Quirks
`,title:"Quirks",level:1,content:"# Quirks",frontmatter:{layout:"cover",title:"Quirks"},index:0,start:0,end:6},inline:{raw:`---
src: ./pages/04-quirks.md
hide: false
---
`,content:"",frontmatter:{hide:!1},index:6,start:53,end:58},filepath:"/home/ben/Workspace/demystifying-unicode/pages/04-quirks.md",noteHTML:"",id:48,no:49},__clicksElements:[],__preloaded:!1}},{path:"50",name:"page-50",component:K7,meta:{hide:!1,srcSequence:"./pages/04-quirks.md",slide:{raw:`
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
\`\`\``,frontmatter:{},index:1,start:7,end:36},filepath:"/home/ben/Workspace/demystifying-unicode/pages/04-quirks.md",noteHTML:"",id:49,no:50},__clicksElements:[],__preloaded:!1}},{path:"51",name:"page-51",component:Z7,meta:{layout:"center",hide:!1,srcSequence:"./pages/04-quirks.md",slide:{raw:`---
layout: center
---

<div class="output">

<p class="text-xl width-100 text-center">

**No**

</p>

\`\`\`
 UTF-8: ʜɘɭɭʘ
UTF-16: 쪖즘즭즭쪘
UTF-32: 􌪜􌦘􌦭􌦭􌪘
\`\`\`

</div>

<v-click>

<Arrow x1="700" y1="450" x2="600" y2="320" width="3"/>

<div class="text-3xl absolute top-115 left-150">"I gained weight" 🤷</div>

</v-click>

<style>
.output code {
  font-size: 1.5rem;
  line-height: 2rem;
}
</style>
`,content:`<div class="output">

<p class="text-xl width-100 text-center">

**No**

</p>

\`\`\`
 UTF-8: ʜɘɭɭʘ
UTF-16: 쪖즘즭즭쪘
UTF-32: 􌪜􌦘􌦭􌦭􌪘
\`\`\`

</div>

<v-click>

<Arrow x1="700" y1="450" x2="600" y2="320" width="3"/>

<div class="text-3xl absolute top-115 left-150">"I gained weight" 🤷</div>

</v-click>

<style>
.output code {
  font-size: 1.5rem;
  line-height: 2rem;
}
</style>`,frontmatter:{layout:"center",hide:!1,srcSequence:"./pages/04-quirks.md"},index:50,start:36,end:71,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/04-quirks.md",raw:`---
layout: center
---

<div class="output">

<p class="text-xl width-100 text-center">

**No**

</p>

\`\`\`
 UTF-8: ʜɘɭɭʘ
UTF-16: 쪖즘즭즭쪘
UTF-32: 􌪜􌦘􌦭􌦭􌪘
\`\`\`

</div>

<v-click>

<Arrow x1="700" y1="450" x2="600" y2="320" width="3"/>

<div class="text-3xl absolute top-115 left-150">"I gained weight" 🤷</div>

</v-click>

<style>
.output code {
  font-size: 1.5rem;
  line-height: 2rem;
}
</style>
`,content:`<div class="output">

<p class="text-xl width-100 text-center">

**No**

</p>

\`\`\`
 UTF-8: ʜɘɭɭʘ
UTF-16: 쪖즘즭즭쪘
UTF-32: 􌪜􌦘􌦭􌦭􌪘
\`\`\`

</div>

<v-click>

<Arrow x1="700" y1="450" x2="600" y2="320" width="3"/>

<div class="text-3xl absolute top-115 left-150">"I gained weight" 🤷</div>

</v-click>

<style>
.output code {
  font-size: 1.5rem;
  line-height: 2rem;
}
</style>`,frontmatter:{layout:"center"},index:2,start:36,end:71},filepath:"/home/ben/Workspace/demystifying-unicode/pages/04-quirks.md",noteHTML:"",id:50,no:51},__clicksElements:[],__preloaded:!1}},{path:"52",name:"page-52",component:u4,meta:{hide:!1,srcSequence:"./pages/04-quirks.md",slide:{raw:`
## Streets!

Straße!

or...

\`\`\`rust
let s = "Straße";
let upcase: String = s.to_uppercase();
let downcase: String = s.to_lowercase();
\`\`\`

<v-click>

Questions:

- What does \`upcase\` contain?
- What does \`downcase\` contain?
- Why do we get \`Strings\` back?

</v-click>

<div v-click class="absolute top-75 left-90 list-circle">

- \`STRASSE\`
- \`strasse\`

</div>

<div v-click class="mt-5">

\`\`\`rust
pub fn make_ascii_lowercase(&mut self);

pub fn to_lowercase(&self) -> String;
\`\`\`

</div>
`,title:"Streets!",level:2,content:`## Streets!

Straße!

or...

\`\`\`rust
let s = "Straße";
let upcase: String = s.to_uppercase();
let downcase: String = s.to_lowercase();
\`\`\`

<v-click>

Questions:

- What does \`upcase\` contain?
- What does \`downcase\` contain?
- Why do we get \`Strings\` back?

</v-click>

<div v-click class="absolute top-75 left-90 list-circle">

- \`STRASSE\`
- \`strasse\`

</div>

<div v-click class="mt-5">

\`\`\`rust
pub fn make_ascii_lowercase(&mut self);

pub fn to_lowercase(&self) -> String;
\`\`\`

</div>`,frontmatter:{hide:!1,srcSequence:"./pages/04-quirks.md"},index:51,start:72,end:112,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/04-quirks.md",raw:`
## Streets!

Straße!

or...

\`\`\`rust
let s = "Straße";
let upcase: String = s.to_uppercase();
let downcase: String = s.to_lowercase();
\`\`\`

<v-click>

Questions:

- What does \`upcase\` contain?
- What does \`downcase\` contain?
- Why do we get \`Strings\` back?

</v-click>

<div v-click class="absolute top-75 left-90 list-circle">

- \`STRASSE\`
- \`strasse\`

</div>

<div v-click class="mt-5">

\`\`\`rust
pub fn make_ascii_lowercase(&mut self);

pub fn to_lowercase(&self) -> String;
\`\`\`

</div>
`,title:"Streets!",level:2,content:`## Streets!

Straße!

or...

\`\`\`rust
let s = "Straße";
let upcase: String = s.to_uppercase();
let downcase: String = s.to_lowercase();
\`\`\`

<v-click>

Questions:

- What does \`upcase\` contain?
- What does \`downcase\` contain?
- Why do we get \`Strings\` back?

</v-click>

<div v-click class="absolute top-75 left-90 list-circle">

- \`STRASSE\`
- \`strasse\`

</div>

<div v-click class="mt-5">

\`\`\`rust
pub fn make_ascii_lowercase(&mut self);

pub fn to_lowercase(&self) -> String;
\`\`\`

</div>`,frontmatter:{},index:3,start:72,end:112},filepath:"/home/ben/Workspace/demystifying-unicode/pages/04-quirks.md",noteHTML:"",id:51,no:52},__clicksElements:[],__preloaded:!1}},{path:"53",name:"page-53",component:C4,meta:{hide:!1,srcSequence:"./pages/04-quirks.md",slide:{raw:`
## Casemapping!

> If it works in Turkey, it probably works everywhere

\`Istanbul\` or \`İstanbul\`

<div v-click class="flex flex-items-center flex-justify-center w-a">
  <div class="codepoint">
    <div class="glyph">İ</div>
    <div class="code">U+0130</div>
  </div>
  <div class="inline-block mx-10 text-center">
  <div class="text-10">⇛</div>
  <div>

  \`to_lowercase()\`

  </div>
  </div>
  <div class="codepoint">
    <div class="glyph">i</div>
    <div class="code">U+0069</div>
  </div>
</div>

<div v-click class="flex flex-items-center flex-justify-center w-a">
  <div class="codepoint">
    <div class="glyph">i</div>
    <div class="code">U+0069</div>
  </div>
  <div class="inline-block mx-10 text-center">
  <div class="text-10">⇛</div>
  <div>

  \`to_uppercase()\`

  </div>
  </div>
  <div class="codepoint">
    <div class="glyph">I</div>
    <div class="code">U+0049</div>
  </div>
</div>

<footer>

Special Casing: https://www.unicode.org/Public/UCD/latest/ucd/SpecialCasing.txt<br />
And an issue: https://github.com/rust-lang/rust/issues/72966

</footer>
`,title:"Casemapping!",level:2,content:`## Casemapping!

> If it works in Turkey, it probably works everywhere

\`Istanbul\` or \`İstanbul\`

<div v-click class="flex flex-items-center flex-justify-center w-a">
  <div class="codepoint">
    <div class="glyph">İ</div>
    <div class="code">U+0130</div>
  </div>
  <div class="inline-block mx-10 text-center">
  <div class="text-10">⇛</div>
  <div>

  \`to_lowercase()\`

  </div>
  </div>
  <div class="codepoint">
    <div class="glyph">i</div>
    <div class="code">U+0069</div>
  </div>
</div>

<div v-click class="flex flex-items-center flex-justify-center w-a">
  <div class="codepoint">
    <div class="glyph">i</div>
    <div class="code">U+0069</div>
  </div>
  <div class="inline-block mx-10 text-center">
  <div class="text-10">⇛</div>
  <div>

  \`to_uppercase()\`

  </div>
  </div>
  <div class="codepoint">
    <div class="glyph">I</div>
    <div class="code">U+0049</div>
  </div>
</div>

<footer>

Special Casing: https://www.unicode.org/Public/UCD/latest/ucd/SpecialCasing.txt<br />
And an issue: https://github.com/rust-lang/rust/issues/72966

</footer>`,frontmatter:{hide:!1,srcSequence:"./pages/04-quirks.md"},index:52,start:113,end:165,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/04-quirks.md",raw:`
## Casemapping!

> If it works in Turkey, it probably works everywhere

\`Istanbul\` or \`İstanbul\`

<div v-click class="flex flex-items-center flex-justify-center w-a">
  <div class="codepoint">
    <div class="glyph">İ</div>
    <div class="code">U+0130</div>
  </div>
  <div class="inline-block mx-10 text-center">
  <div class="text-10">⇛</div>
  <div>

  \`to_lowercase()\`

  </div>
  </div>
  <div class="codepoint">
    <div class="glyph">i</div>
    <div class="code">U+0069</div>
  </div>
</div>

<div v-click class="flex flex-items-center flex-justify-center w-a">
  <div class="codepoint">
    <div class="glyph">i</div>
    <div class="code">U+0069</div>
  </div>
  <div class="inline-block mx-10 text-center">
  <div class="text-10">⇛</div>
  <div>

  \`to_uppercase()\`

  </div>
  </div>
  <div class="codepoint">
    <div class="glyph">I</div>
    <div class="code">U+0049</div>
  </div>
</div>

<footer>

Special Casing: https://www.unicode.org/Public/UCD/latest/ucd/SpecialCasing.txt<br />
And an issue: https://github.com/rust-lang/rust/issues/72966

</footer>
`,title:"Casemapping!",level:2,content:`## Casemapping!

> If it works in Turkey, it probably works everywhere

\`Istanbul\` or \`İstanbul\`

<div v-click class="flex flex-items-center flex-justify-center w-a">
  <div class="codepoint">
    <div class="glyph">İ</div>
    <div class="code">U+0130</div>
  </div>
  <div class="inline-block mx-10 text-center">
  <div class="text-10">⇛</div>
  <div>

  \`to_lowercase()\`

  </div>
  </div>
  <div class="codepoint">
    <div class="glyph">i</div>
    <div class="code">U+0069</div>
  </div>
</div>

<div v-click class="flex flex-items-center flex-justify-center w-a">
  <div class="codepoint">
    <div class="glyph">i</div>
    <div class="code">U+0069</div>
  </div>
  <div class="inline-block mx-10 text-center">
  <div class="text-10">⇛</div>
  <div>

  \`to_uppercase()\`

  </div>
  </div>
  <div class="codepoint">
    <div class="glyph">I</div>
    <div class="code">U+0049</div>
  </div>
</div>

<footer>

Special Casing: https://www.unicode.org/Public/UCD/latest/ucd/SpecialCasing.txt<br />
And an issue: https://github.com/rust-lang/rust/issues/72966

</footer>`,frontmatter:{},index:4,start:113,end:165},filepath:"/home/ben/Workspace/demystifying-unicode/pages/04-quirks.md",noteHTML:"",id:52,no:53},__clicksElements:[],__preloaded:!1}},{path:"54",name:"page-54",component:O4,meta:{hide:!1,srcSequence:"./pages/04-quirks.md",slide:{raw:`
## Composition

A[cute] E

- é = \`\\u00e9\`
- é = \`\\u0065\\u0301\` (\`e\` + combining \`´\`)

<div v-click>

\`\`\`rust
// assert_ne!('é', 'é');
   assert_ne!("é", "é");
\`\`\`

</div>

<v-click>

\`\`\`rust
use unicode_normalization::UnicodeNormalization;

fn main() {
    let u00e9 = "\\u{00e9}";
    let u0065_u0301 = "\\u{0065}\\u{0301}";
    
    assert_ne!(u00e9, u0065_u0301);
    assert_eq!(
        u00e9.nfc().collect::<String>(),
        u0065_u0301.nfc().collect::<String>()
    );
}
\`\`\`

</v-click>

<footer>

- Unicode combining classes: https://www.compart.com/en/unicode/combining
- Unicode Normalization Forms: http://www.unicode.org/reports/tr15/
- Crate unicode\\_normalization: https://docs.rs/unicode-normalization/latest/unicode_normalization/

</footer>
`,title:"Composition",level:2,content:`## Composition

A[cute] E

- é = \`\\u00e9\`
- é = \`\\u0065\\u0301\` (\`e\` + combining \`´\`)

<div v-click>

\`\`\`rust
// assert_ne!('é', 'é');
   assert_ne!("é", "é");
\`\`\`

</div>

<v-click>

\`\`\`rust
use unicode_normalization::UnicodeNormalization;

fn main() {
    let u00e9 = "\\u{00e9}";
    let u0065_u0301 = "\\u{0065}\\u{0301}";
    
    assert_ne!(u00e9, u0065_u0301);
    assert_eq!(
        u00e9.nfc().collect::<String>(),
        u0065_u0301.nfc().collect::<String>()
    );
}
\`\`\`

</v-click>

<footer>

- Unicode combining classes: https://www.compart.com/en/unicode/combining
- Unicode Normalization Forms: http://www.unicode.org/reports/tr15/
- Crate unicode\\_normalization: https://docs.rs/unicode-normalization/latest/unicode_normalization/

</footer>`,frontmatter:{hide:!1,srcSequence:"./pages/04-quirks.md"},index:53,start:166,end:210,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/04-quirks.md",raw:`
## Composition

A[cute] E

- é = \`\\u00e9\`
- é = \`\\u0065\\u0301\` (\`e\` + combining \`´\`)

<div v-click>

\`\`\`rust
// assert_ne!('é', 'é');
   assert_ne!("é", "é");
\`\`\`

</div>

<v-click>

\`\`\`rust
use unicode_normalization::UnicodeNormalization;

fn main() {
    let u00e9 = "\\u{00e9}";
    let u0065_u0301 = "\\u{0065}\\u{0301}";
    
    assert_ne!(u00e9, u0065_u0301);
    assert_eq!(
        u00e9.nfc().collect::<String>(),
        u0065_u0301.nfc().collect::<String>()
    );
}
\`\`\`

</v-click>

<footer>

- Unicode combining classes: https://www.compart.com/en/unicode/combining
- Unicode Normalization Forms: http://www.unicode.org/reports/tr15/
- Crate unicode\\_normalization: https://docs.rs/unicode-normalization/latest/unicode_normalization/

</footer>
`,title:"Composition",level:2,content:`## Composition

A[cute] E

- é = \`\\u00e9\`
- é = \`\\u0065\\u0301\` (\`e\` + combining \`´\`)

<div v-click>

\`\`\`rust
// assert_ne!('é', 'é');
   assert_ne!("é", "é");
\`\`\`

</div>

<v-click>

\`\`\`rust
use unicode_normalization::UnicodeNormalization;

fn main() {
    let u00e9 = "\\u{00e9}";
    let u0065_u0301 = "\\u{0065}\\u{0301}";
    
    assert_ne!(u00e9, u0065_u0301);
    assert_eq!(
        u00e9.nfc().collect::<String>(),
        u0065_u0301.nfc().collect::<String>()
    );
}
\`\`\`

</v-click>

<footer>

- Unicode combining classes: https://www.compart.com/en/unicode/combining
- Unicode Normalization Forms: http://www.unicode.org/reports/tr15/
- Crate unicode\\_normalization: https://docs.rs/unicode-normalization/latest/unicode_normalization/

</footer>`,frontmatter:{},index:5,start:166,end:210},filepath:"/home/ben/Workspace/demystifying-unicode/pages/04-quirks.md",noteHTML:"",id:53,no:54},__clicksElements:[],__preloaded:!1}},{path:"55",name:"page-55",component:L4,meta:{hide:!1,srcSequence:"./pages/04-quirks.md",slide:{raw:`
## Emoji Composition

<p style="font-size: 65%; line-height: 1rem;"> 😶‍🌫️ 😮‍💨 😵‍💫 ❤️‍🔥 ❤️‍🩹 👁️‍🗨️ 🫱🏻‍🫲🏼 🫱🏻‍🫲🏽 🫱🏻‍🫲🏾 🫱🏻‍🫲🏿 🫱🏼‍🫲🏻 🫱🏼‍🫲🏽 🫱🏼‍🫲🏾 🫱🏼‍🫲🏿 🫱🏽‍🫲🏻 🫱🏽‍🫲🏼 🫱🏽‍🫲🏾 🫱🏽‍🫲🏿 🫱🏾‍🫲🏻 🫱🏾‍🫲🏼 🫱🏾‍🫲🏽 🫱🏾‍🫲🏿 🫱🏿‍🫲🏻 🫱🏿‍🫲🏼 🫱🏿‍🫲🏽 🫱🏿‍🫲🏾 🧔‍♂️ 🧔🏻‍♂️ 🧔🏼‍♂️ 🧔🏽‍♂️ 🧔🏾‍♂️ 🧔🏿‍♂️ 🧔‍♀️ 🧔🏻‍♀️ 🧔🏼‍♀️ 🧔🏽‍♀️ 🧔🏾‍♀️ 🧔🏿‍♀️ 👨‍🦰 👨🏻‍🦰 👨🏼‍🦰 👨🏽‍🦰 👨🏾‍🦰 👨🏿‍🦰 👨‍🦱 👨🏻‍🦱 👨🏼‍🦱 👨🏽‍🦱 👨🏾‍🦱 👨🏿‍🦱 👨‍🦳 👨🏻‍🦳 👨🏼‍🦳 👨🏽‍🦳 👨🏾‍🦳 👨🏿‍🦳 👨‍🦲 👨🏻‍🦲 👨🏼‍🦲 👨🏽‍🦲 👨🏾‍🦲 👨🏿‍🦲 👩‍🦰 👩🏻‍🦰 👩🏼‍🦰 👩🏽‍🦰 👩🏾‍🦰 👩🏿‍🦰 🧑‍🦰 🧑🏻‍🦰 🧑🏼‍🦰 🧑🏽‍🦰 🧑🏾‍🦰 🧑🏿‍🦰 👩‍🦱 👩🏻‍🦱 👩🏼‍🦱 👩🏽‍🦱 👩🏾‍🦱 👩🏿‍🦱 🧑‍🦱 🧑🏻‍🦱 🧑🏼‍🦱 🧑🏽‍🦱 🧑🏾‍🦱 🧑🏿‍🦱 👩‍🦳 👩🏻‍🦳 👩🏼‍🦳 👩🏽‍🦳 👩🏾‍🦳 👩🏿‍🦳 🧑‍🦳 🧑🏻‍🦳 🧑🏼‍🦳 🧑🏽‍🦳 🧑🏾‍🦳 🧑🏿‍🦳 👩‍🦲 👩🏻‍🦲 👩🏼‍🦲 👩🏽‍🦲 👩🏾‍🦲 👩🏿‍🦲 🧑‍🦲 🧑🏻‍🦲 🧑🏼‍🦲 🧑🏽‍🦲 🧑🏾‍🦲 🧑🏿‍🦲 👱‍♀️ 👱🏻‍♀️ 👱🏼‍♀️ 👱🏽‍♀️ 👱🏾‍♀️ 👱🏿‍♀️ 👱‍♂️ 👱🏻‍♂️ 👱🏼‍♂️ 👱🏽‍♂️ 👱🏾‍♂️ 👱🏿‍♂️ 🙍‍♂️ 🙍🏻‍♂️ 🙍🏼‍♂️ 🙍🏽‍♂️ 🙍🏾‍♂️ 🙍🏿‍♂️ 🙍‍♀️ 🙍🏻‍♀️ 🙍🏼‍♀️ 🙍🏽‍♀️ 🙍🏾‍♀️ 🙍🏿‍♀️ 🙎‍♂️ 🙎🏻‍♂️ 🙎🏼‍♂️ 🙎🏽‍♂️ 🙎🏾‍♂️ 🙎🏿‍♂️ 🙎‍♀️ 🙎🏻‍♀️ 🙎🏼‍♀️ 🙎🏽‍♀️ 🙎🏾‍♀️ 🙎🏿‍♀️ 🙅‍♂️ 🙅🏻‍♂️ 🙅🏼‍♂️ 🙅🏽‍♂️ 🙅🏾‍♂️ 🙅🏿‍♂️ 🙅‍♀️ 🙅🏻‍♀️ 🙅🏼‍♀️ 🙅🏽‍♀️ 🙅🏾‍♀️ 🙅🏿‍♀️ 🙆‍♂️ 🙆🏻‍♂️ 🙆🏼‍♂️ 🙆🏽‍♂️ 🙆🏾‍♂️ 🙆🏿‍♂️ 🙆‍♀️ 🙆🏻‍♀️ 🙆🏼‍♀️ 🙆🏽‍♀️ 🙆🏾‍♀️ 🙆🏿‍♀️ 💁‍♂️ 💁🏻‍♂️ 💁🏼‍♂️ 💁🏽‍♂️ 💁🏾‍♂️ 💁🏿‍♂️ 💁‍♀️ 💁🏻‍♀️ 💁🏼‍♀️ 💁🏽‍♀️ 💁🏾‍♀️ 💁🏿‍♀️ 🙋‍♂️ 🙋🏻‍♂️ 🙋🏼‍♂️ 🙋🏽‍♂️ 🙋🏾‍♂️ 🙋🏿‍♂️ 🙋‍♀️ 🙋🏻‍♀️ 🙋🏼‍♀️ 🙋🏽‍♀️ 🙋🏾‍♀️ 🙋🏿‍♀️ 🧏‍♂️ 🧏🏻‍♂️ 🧏🏼‍♂️ 🧏🏽‍♂️ 🧏🏾‍♂️ 🧏🏿‍♂️ 🧏‍♀️ 🧏🏻‍♀️ 🧏🏼‍♀️ 🧏🏽‍♀️ 🧏🏾‍♀️ 🧏🏿‍♀️ 🙇‍♂️ 🙇🏻‍♂️ 🙇🏼‍♂️ 🙇🏽‍♂️ 🙇🏾‍♂️ 🙇🏿‍♂️ 🙇‍♀️ 🙇🏻‍♀️ 🙇🏼‍♀️ 🙇🏽‍♀️ 🙇🏾‍♀️ 🙇🏿‍♀️ 🤦‍♂️ 🤦🏻‍♂️ 🤦🏼‍♂️ 🤦🏽‍♂️ 🤦🏾‍♂️ 🤦🏿‍♂️ 🤦‍♀️ 🤦🏻‍♀️ 🤦🏼‍♀️ 🤦🏽‍♀️ 🤦🏾‍♀️ 🤦🏿‍♀️ 🤷‍♂️ 🤷🏻‍♂️ 🤷🏼‍♂️ 🤷🏽‍♂️ 🤷🏾‍♂️ 🤷🏿‍♂️ 🤷‍♀️ 🤷🏻‍♀️ 🤷🏼‍♀️ 🤷🏽‍♀️ 🤷🏾‍♀️ 🤷🏿‍♀️ 🧑‍⚕️ 🧑🏻‍⚕️ 🧑🏼‍⚕️ 🧑🏽‍⚕️ 🧑🏾‍⚕️ 🧑🏿‍⚕️ 👨‍⚕️ 👨🏻‍⚕️ 👨🏼‍⚕️ 👨🏽‍⚕️ 👨🏾‍⚕️ 👨🏿‍⚕️ 👩‍⚕️ 👩🏻‍⚕️ 👩🏼‍⚕️ 👩🏽‍⚕️ 👩🏾‍⚕️ 👩🏿‍⚕️ 🧑‍🎓 🧑🏻‍🎓 🧑🏼‍🎓 🧑🏽‍🎓 🧑🏾‍🎓 🧑🏿‍🎓 👨‍🎓 👨🏻‍🎓 👨🏼‍🎓 👨🏽‍🎓 👨🏾‍🎓 👨🏿‍🎓 👩‍🎓 👩🏻‍🎓 👩🏼‍🎓 👩🏽‍🎓 👩🏾‍🎓 👩🏿‍🎓 🧑‍🏫 🧑🏻‍🏫 🧑🏼‍🏫 🧑🏽‍🏫 🧑🏾‍🏫 🧑🏿‍🏫 👨‍🏫 👨🏻‍🏫 👨🏼‍🏫 👨🏽‍🏫 👨🏾‍🏫 👨🏿‍🏫 👩‍🏫 👩🏻‍🏫 👩🏼‍🏫 👩🏽‍🏫 👩🏾‍🏫 👩🏿‍🏫 🧑‍⚖️ 🧑🏻‍⚖️ 🧑🏼‍⚖️ 🧑🏽‍⚖️ 🧑🏾‍⚖️ 🧑🏿‍⚖️ 👨‍⚖️ 👨🏻‍⚖️ 👨🏼‍⚖️ 👨🏽‍⚖️ 👨🏾‍⚖️ 👨🏿‍⚖️ 👩‍⚖️ 👩🏻‍⚖️ 👩🏼‍⚖️ 👩🏽‍⚖️ 👩🏾‍⚖️ 👩🏿‍⚖️ 🧑‍🌾 🧑🏻‍🌾 🧑🏼‍🌾 🧑🏽‍🌾 🧑🏾‍🌾 🧑🏿‍🌾 👨‍🌾 👨🏻‍🌾 👨🏼‍🌾 👨🏽‍🌾 👨🏾‍🌾 👨🏿‍🌾 👩‍🌾 👩🏻‍🌾 👩🏼‍🌾 👩🏽‍🌾 👩🏾‍🌾 👩🏿‍🌾 🧑‍🍳 🧑🏻‍🍳 🧑🏼‍🍳 🧑🏽‍🍳 🧑🏾‍🍳 🧑🏿‍🍳 👨‍🍳 👨🏻‍🍳 👨🏼‍🍳 👨🏽‍🍳 👨🏾‍🍳 👨🏿‍🍳 👩‍🍳 👩🏻‍🍳 👩🏼‍🍳 👩🏽‍🍳 👩🏾‍🍳 👩🏿‍🍳 🧑‍🔧 🧑🏻‍🔧 🧑🏼‍🔧 🧑🏽‍🔧 🧑🏾‍🔧 🧑🏿‍🔧 👨‍🔧 👨🏻‍🔧 👨🏼‍🔧 👨🏽‍🔧 👨🏾‍🔧 👨🏿‍🔧 👩‍🔧 👩🏻‍🔧 👩🏼‍🔧 👩🏽‍🔧 👩🏾‍🔧 👩🏿‍🔧 🧑‍🏭 🧑🏻‍🏭 🧑🏼‍🏭 🧑🏽‍🏭 🧑🏾‍🏭 🧑🏿‍🏭 👨‍🏭 👨🏻‍🏭 👨🏼‍🏭 👨🏽‍🏭 👨🏾‍🏭 👨🏿‍🏭 👩‍🏭 👩🏻‍🏭 👩🏼‍🏭 👩🏽‍🏭 👩🏾‍🏭 👩🏿‍🏭 🧑‍💼 🧑🏻‍💼 🧑🏼‍💼 🧑🏽‍💼 🧑🏾‍💼 🧑🏿‍💼 👨‍💼 👨🏻‍💼 👨🏼‍💼 👨🏽‍💼 👨🏾‍💼 👨🏿‍💼 👩‍💼 👩🏻‍💼 👩🏼‍💼 👩🏽‍💼 👩🏾‍💼 👩🏿‍💼 🧑‍🔬 🧑🏻‍🔬 🧑🏼‍🔬 🧑🏽‍🔬 🧑🏾‍🔬 🧑🏿‍🔬 👨‍🔬 👨🏻‍🔬 👨🏼‍🔬 👨🏽‍🔬 👨🏾‍🔬 👨🏿‍🔬 👩‍🔬 👩🏻‍🔬 👩🏼‍🔬 👩🏽‍🔬 👩🏾‍🔬 👩🏿‍🔬 🧑‍💻 🧑🏻‍💻 🧑🏼‍💻 🧑🏽‍💻 🧑🏾‍💻 🧑🏿‍💻 👨‍💻 👨🏻‍💻 👨🏼‍💻 👨🏽‍💻 👨🏾‍💻 👨🏿‍💻 👩‍💻 👩🏻‍💻 👩🏼‍💻 👩🏽‍💻 👩🏾‍💻 👩🏿‍💻 🧑‍🎤 🧑🏻‍🎤 🧑🏼‍🎤 🧑🏽‍🎤 🧑🏾‍🎤 🧑🏿‍🎤 👨‍🎤 👨🏻‍🎤 👨🏼‍🎤 👨🏽‍🎤 👨🏾‍🎤 👨🏿‍🎤 👩‍🎤 👩🏻‍🎤 👩🏼‍🎤 👩🏽‍🎤 👩🏾‍🎤 👩🏿‍🎤 🧑‍🎨 🧑🏻‍🎨 🧑🏼‍🎨 🧑🏽‍🎨 🧑🏾‍🎨 🧑🏿‍🎨 👨‍🎨 👨🏻‍🎨 👨🏼‍🎨 👨🏽‍🎨 👨🏾‍🎨 👨🏿‍🎨 👩‍🎨 👩🏻‍🎨 👩🏼‍🎨 👩🏽‍🎨 👩🏾‍🎨 👩🏿‍🎨 🧑‍✈️ 🧑🏻‍✈️ 🧑🏼‍✈️ 🧑🏽‍✈️ 🧑🏾‍✈️ 🧑🏿‍✈️ 👨‍✈️ 👨🏻‍✈️ 👨🏼‍✈️ 👨🏽‍✈️ 👨🏾‍✈️ 👨🏿‍✈️ 👩‍✈️ 👩🏻‍✈️ 👩🏼‍✈️ 👩🏽‍✈️ 👩🏾‍✈️ 👩🏿‍✈️ 🧑‍🚀 🧑🏻‍🚀 🧑🏼‍🚀 🧑🏽‍🚀 🧑🏾‍🚀 🧑🏿‍🚀 👨‍🚀 👨🏻‍🚀 👨🏼‍🚀 👨🏽‍🚀 👨🏾‍🚀 👨🏿‍🚀 👩‍🚀 👩🏻‍🚀 👩🏼‍🚀 👩🏽‍🚀 👩🏾‍🚀 👩🏿‍🚀 🧑‍🚒 🧑🏻‍🚒 🧑🏼‍🚒 🧑🏽‍🚒 🧑🏾‍🚒 🧑🏿‍🚒 👨‍🚒 👨🏻‍🚒 👨🏼‍🚒 👨🏽‍🚒 👨🏾‍🚒 👨🏿‍🚒 👩‍🚒 👩🏻‍🚒 👩🏼‍🚒 👩🏽‍🚒 👩🏾‍🚒 👩🏿‍🚒 👮‍♂️ 👮🏻‍♂️ 👮🏼‍♂️ 👮🏽‍♂️ 👮🏾‍♂️ 👮🏿‍♂️ 👮‍♀️ 👮🏻‍♀️ 👮🏼‍♀️ 👮🏽‍♀️ 👮🏾‍♀️ 👮🏿‍♀️ 🕵️‍♂️ 🕵🏻‍♂️ 🕵🏼‍♂️ 🕵🏽‍♂️ 🕵🏾‍♂️ 🕵🏿‍♂️ 🕵️‍♀️ 🕵🏻‍♀️ 🕵🏼‍♀️ 🕵🏽‍♀️ 🕵🏾‍♀️ 🕵🏿‍♀️ 💂‍♂️ 💂🏻‍♂️ 💂🏼‍♂️ 💂🏽‍♂️ 💂🏾‍♂️ 💂🏿‍♂️ 💂‍♀️ 💂🏻‍♀️ 💂🏼‍♀️ 💂🏽‍♀️ 💂🏾‍♀️ 💂🏿‍♀️ 👷‍♂️ 👷🏻‍♂️ 👷🏼‍♂️ 👷🏽‍♂️ 👷🏾‍♂️ 👷🏿‍♂️ 👷‍♀️ 👷🏻‍♀️ 👷🏼‍♀️ 👷🏽‍♀️ 👷🏾‍♀️ 👷🏿‍♀️ 👳‍♂️ 👳🏻‍♂️ 👳🏼‍♂️ 👳🏽‍♂️ 👳🏾‍♂️ 👳🏿‍♂️ 👳‍♀️ 👳🏻‍♀️ 👳🏼‍♀️ 👳🏽‍♀️ 👳🏾‍♀️ 👳🏿‍♀️ 🤵‍♂️ 🤵🏻‍♂️ 🤵🏼‍♂️ 🤵🏽‍♂️ 🤵🏾‍♂️ 🤵🏿‍♂️ 🤵‍♀️ 🤵🏻‍♀️ 🤵🏼‍♀️ 🤵🏽‍♀️ 🤵🏾‍♀️ 🤵🏿‍♀️ 👰‍♂️ 👰🏻‍♂️ 👰🏼‍♂️ 👰🏽‍♂️ 👰🏾‍♂️ 👰🏿‍♂️ 👰‍♀️ 👰🏻‍♀️ 👰🏼‍♀️ 👰🏽‍♀️ 👰🏾‍♀️ 👰🏿‍♀️ 👩‍🍼 👩🏻‍🍼 👩🏼‍🍼 👩🏽‍🍼 👩🏾‍🍼 👩🏿‍🍼 👨‍🍼 👨🏻‍🍼 👨🏼‍🍼 👨🏽‍🍼 👨🏾‍🍼 👨🏿‍🍼 🧑‍🍼 🧑🏻‍🍼 🧑🏼‍🍼 🧑🏽‍🍼 🧑🏾‍🍼 🧑🏿‍🍼 🧑‍🎄 🧑🏻‍🎄 🧑🏼‍🎄 🧑🏽‍🎄 🧑🏾‍🎄 🧑🏿‍🎄 🦸‍♂️ 🦸🏻‍♂️ 🦸🏼‍♂️ 🦸🏽‍♂️ 🦸🏾‍♂️ 🦸🏿‍♂️ 🦸‍♀️ 🦸🏻‍♀️ 🦸🏼‍♀️ 🦸🏽‍♀️ 🦸🏾‍♀️ 🦸🏿‍♀️ 🦹‍♂️ 🦹🏻‍♂️ 🦹🏼‍♂️ 🦹🏽‍♂️ 🦹🏾‍♂️ 🦹🏿‍♂️ 🦹‍♀️ 🦹🏻‍♀️ 🦹🏼‍♀️ 🦹🏽‍♀️ 🦹🏾‍♀️ 🦹🏿‍♀️ 🧙‍♂️ 🧙🏻‍♂️ 🧙🏼‍♂️ 🧙🏽‍♂️ 🧙🏾‍♂️ 🧙🏿‍♂️ 🧙‍♀️ 🧙🏻‍♀️ 🧙🏼‍♀️ 🧙🏽‍♀️ 🧙🏾‍♀️ 🧙🏿‍♀️ 🧚‍♂️ 🧚🏻‍♂️ 🧚🏼‍♂️ 🧚🏽‍♂️ 🧚🏾‍♂️ 🧚🏿‍♂️ 🧚‍♀️ 🧚🏻‍♀️ 🧚🏼‍♀️ 🧚🏽‍♀️ 🧚🏾‍♀️ 🧚🏿‍♀️ 🧛‍♂️ 🧛🏻‍♂️ 🧛🏼‍♂️ 🧛🏽‍♂️ 🧛🏾‍♂️ 🧛🏿‍♂️ 🧛‍♀️ 🧛🏻‍♀️ 🧛🏼‍♀️ 🧛🏽‍♀️ 🧛🏾‍♀️ 🧛🏿‍♀️ 🧜‍♂️ 🧜🏻‍♂️ 🧜🏼‍♂️ 🧜🏽‍♂️ 🧜🏾‍♂️ 🧜🏿‍♂️ 🧜‍♀️ 🧜🏻‍♀️ 🧜🏼‍♀️ 🧜🏽‍♀️ 🧜🏾‍♀️ 🧜🏿‍♀️ 🧝‍♂️ 🧝🏻‍♂️ 🧝🏼‍♂️ 🧝🏽‍♂️ 🧝🏾‍♂️ 🧝🏿‍♂️ 🧝‍♀️ 🧝🏻‍♀️ 🧝🏼‍♀️ 🧝🏽‍♀️ 🧝🏾‍♀️ 🧝🏿‍♀️ 🧞‍♂️ 🧞‍♀️ 🧟‍♂️ 🧟‍♀️ 💆‍♂️ 💆🏻‍♂️ 💆🏼‍♂️ 💆🏽‍♂️ 💆🏾‍♂️ 💆🏿‍♂️ 💆‍♀️ 💆🏻‍♀️ 💆🏼‍♀️ 💆🏽‍♀️ 💆🏾‍♀️ 💆🏿‍♀️ 💇‍♂️ 💇🏻‍♂️ 💇🏼‍♂️ 💇🏽‍♂️ 💇🏾‍♂️ 💇🏿‍♂️ 💇‍♀️ 💇🏻‍♀️ 💇🏼‍♀️ 💇🏽‍♀️ 💇🏾‍♀️ 💇🏿‍♀️ 🚶‍♂️ 🚶🏻‍♂️ 🚶🏼‍♂️ 🚶🏽‍♂️ 🚶🏾‍♂️ 🚶🏿‍♂️ 🚶‍♀️ 🚶🏻‍♀️ 🚶🏼‍♀️ 🚶🏽‍♀️ 🚶🏾‍♀️ 🚶🏿‍♀️ 🧍‍♂️ 🧍🏻‍♂️ 🧍🏼‍♂️ 🧍🏽‍♂️ 🧍🏾‍♂️ 🧍🏿‍♂️ 🧍‍♀️ 🧍🏻‍♀️ 🧍🏼‍♀️ 🧍🏽‍♀️ 🧍🏾‍♀️ 🧍🏿‍♀️ 🧎‍♂️ 🧎🏻‍♂️ 🧎🏼‍♂️ 🧎🏽‍♂️ 🧎🏾‍♂️ 🧎🏿‍♂️ 🧎‍♀️ 🧎🏻‍♀️ 🧎🏼‍♀️ 🧎🏽‍♀️ 🧎🏾‍♀️ 🧎🏿‍♀️ 🧑‍🦯 🧑🏻‍🦯 🧑🏼‍🦯 🧑🏽‍🦯 🧑🏾‍🦯 🧑🏿‍🦯 👨‍🦯 👨🏻‍🦯 👨🏼‍🦯 👨🏽‍🦯 👨🏾‍🦯 👨🏿‍🦯 👩‍🦯 👩🏻‍🦯 👩🏼‍🦯 👩🏽‍🦯 👩🏾‍🦯 👩🏿‍🦯 🧑‍🦼 🧑🏻‍🦼 🧑🏼‍🦼 🧑🏽‍🦼 🧑🏾‍🦼 🧑🏿‍🦼 👨‍🦼 👨🏻‍🦼 👨🏼‍🦼 👨🏽‍🦼 👨🏾‍🦼 👨🏿‍🦼 👩‍🦼 👩🏻‍🦼 👩🏼‍🦼 👩🏽‍🦼 👩🏾‍🦼 👩🏿‍🦼 🧑‍🦽 🧑🏻‍🦽 🧑🏼‍🦽 🧑🏽‍🦽 🧑🏾‍🦽 🧑🏿‍🦽 👨‍🦽 👨🏻‍🦽 👨🏼‍🦽 👨🏽‍🦽 👨🏾‍🦽 👨🏿‍🦽 👩‍🦽 👩🏻‍🦽 👩🏼‍🦽 👩🏽‍🦽 👩🏾‍🦽 👩🏿‍🦽 🏃‍♂️ 🏃🏻‍♂️ 🏃🏼‍♂️ 🏃🏽‍♂️ 🏃🏾‍♂️ 🏃🏿‍♂️ 🏃‍♀️ 🏃🏻‍♀️ 🏃🏼‍♀️ 🏃🏽‍♀️ 🏃🏾‍♀️ 🏃🏿‍♀️ 👯‍♂️ 👯‍♀️ 🧖‍♂️ 🧖🏻‍♂️ 🧖🏼‍♂️ 🧖🏽‍♂️ 🧖🏾‍♂️ 🧖🏿‍♂️ 🧖‍♀️ 🧖🏻‍♀️ 🧖🏼‍♀️ 🧖🏽‍♀️ 🧖🏾‍♀️ 🧖🏿‍♀️ 🧗‍♂️ 🧗🏻‍♂️ 🧗🏼‍♂️ 🧗🏽‍♂️ 🧗🏾‍♂️ 🧗🏿‍♂️ 🧗‍♀️ 🧗🏻‍♀️ 🧗🏼‍♀️ 🧗🏽‍♀️ 🧗🏾‍♀️ 🧗🏿‍♀️ 🏌️‍♂️ 🏌🏻‍♂️ 🏌🏼‍♂️ 🏌🏽‍♂️ 🏌🏾‍♂️ 🏌🏿‍♂️ 🏌️‍♀️ 🏌🏻‍♀️ 🏌🏼‍♀️ 🏌🏽‍♀️ 🏌🏾‍♀️ 🏌🏿‍♀️ 🏄‍♂️ 🏄🏻‍♂️ 🏄🏼‍♂️ 🏄🏽‍♂️ 🏄🏾‍♂️ 🏄🏿‍♂️ 🏄‍♀️ 🏄🏻‍♀️ 🏄🏼‍♀️ 🏄🏽‍♀️ 🏄🏾‍♀️ 🏄🏿‍♀️ 🚣‍♂️ 🚣🏻‍♂️ 🚣🏼‍♂️ 🚣🏽‍♂️ 🚣🏾‍♂️ 🚣🏿‍♂️ 🚣‍♀️ 🚣🏻‍♀️ 🚣🏼‍♀️ 🚣🏽‍♀️ 🚣🏾‍♀️ 🚣🏿‍♀️ 🏊‍♂️ 🏊🏻‍♂️ 🏊🏼‍♂️ 🏊🏽‍♂️ 🏊🏾‍♂️ 🏊🏿‍♂️ 🏊‍♀️ 🏊🏻‍♀️ 🏊🏼‍♀️ 🏊🏽‍♀️ 🏊🏾‍♀️ 🏊🏿‍♀️ ⛹️‍♂️ ⛹🏻‍♂️ ⛹🏼‍♂️ ⛹🏽‍♂️ ⛹🏾‍♂️ ⛹🏿‍♂️ ⛹️‍♀️ ⛹🏻‍♀️ ⛹🏼‍♀️ ⛹🏽‍♀️ ⛹🏾‍♀️ ⛹🏿‍♀️ 🏋️‍♂️ 🏋🏻‍♂️ 🏋🏼‍♂️ 🏋🏽‍♂️ 🏋🏾‍♂️ 🏋🏿‍♂️ 🏋️‍♀️ 🏋🏻‍♀️ 🏋🏼‍♀️ 🏋🏽‍♀️ 🏋🏾‍♀️ 🏋🏿‍♀️ 🚴‍♂️ 🚴🏻‍♂️ 🚴🏼‍♂️ 🚴🏽‍♂️ 🚴🏾‍♂️ 🚴🏿‍♂️ 🚴‍♀️ 🚴🏻‍♀️ 🚴🏼‍♀️ 🚴🏽‍♀️ 🚴🏾‍♀️ 🚴🏿‍♀️ 🚵‍♂️ 🚵🏻‍♂️ 🚵🏼‍♂️ 🚵🏽‍♂️ 🚵🏾‍♂️ 🚵🏿‍♂️ 🚵‍♀️ 🚵🏻‍♀️ 🚵🏼‍♀️ 🚵🏽‍♀️ 🚵🏾‍♀️ 🚵🏿‍♀️ 🤸‍♂️ 🤸🏻‍♂️ 🤸🏼‍♂️ 🤸🏽‍♂️ 🤸🏾‍♂️ 🤸🏿‍♂️ 🤸‍♀️ 🤸🏻‍♀️ 🤸🏼‍♀️ 🤸🏽‍♀️ 🤸🏾‍♀️ 🤸🏿‍♀️ 🤼‍♂️ 🤼‍♀️ 🤽‍♂️ 🤽🏻‍♂️ 🤽🏼‍♂️ 🤽🏽‍♂️ 🤽🏾‍♂️ 🤽🏿‍♂️ 🤽‍♀️ 🤽🏻‍♀️ 🤽🏼‍♀️ 🤽🏽‍♀️ 🤽🏾‍♀️ 🤽🏿‍♀️ 🤾‍♂️ 🤾🏻‍♂️ 🤾🏼‍♂️ 🤾🏽‍♂️ 🤾🏾‍♂️ 🤾🏿‍♂️ 🤾‍♀️ 🤾🏻‍♀️ 🤾🏼‍♀️ 🤾🏽‍♀️ 🤾🏾‍♀️ 🤾🏿‍♀️ 🤹‍♂️ 🤹🏻‍♂️ 🤹🏼‍♂️ 🤹🏽‍♂️ 🤹🏾‍♂️ 🤹🏿‍♂️ 🤹‍♀️ 🤹🏻‍♀️ 🤹🏼‍♀️ 🤹🏽‍♀️ 🤹🏾‍♀️ 🤹🏿‍♀️ 🧘‍♂️ 🧘🏻‍♂️ 🧘🏼‍♂️ 🧘🏽‍♂️ 🧘🏾‍♂️ 🧘🏿‍♂️ 🧘‍♀️ 🧘🏻‍♀️ 🧘🏼‍♀️ 🧘🏽‍♀️ 🧘🏾‍♀️ 🧘🏿‍♀️ 🧑‍🤝‍🧑 🧑🏻‍🤝‍🧑🏻 🧑🏻‍🤝‍🧑🏼 🧑🏻‍🤝‍🧑🏽 🧑🏻‍🤝‍🧑🏾 🧑🏻‍🤝‍🧑🏿 🧑🏼‍🤝‍🧑🏻 🧑🏼‍🤝‍🧑🏼 🧑🏼‍🤝‍🧑🏽 🧑🏼‍🤝‍🧑🏾 🧑🏼‍🤝‍🧑🏿 🧑🏽‍🤝‍🧑🏻 🧑🏽‍🤝‍🧑🏼 🧑🏽‍🤝‍🧑🏽 🧑🏽‍🤝‍🧑🏾 🧑🏽‍🤝‍🧑🏿 🧑🏾‍🤝‍🧑🏻 🧑🏾‍🤝‍🧑🏼 🧑🏾‍🤝‍🧑🏽 🧑🏾‍🤝‍🧑🏾 🧑🏾‍🤝‍🧑🏿 🧑🏿‍🤝‍🧑🏻 🧑🏿‍🤝‍🧑🏼 🧑🏿‍🤝‍🧑🏽 🧑🏿‍🤝‍🧑🏾 🧑🏿‍🤝‍🧑🏿 👩🏻‍🤝‍👩🏼 👩🏻‍🤝‍👩🏽 👩🏻‍🤝‍👩🏾 👩🏻‍🤝‍👩🏿 👩🏼‍🤝‍👩🏻 👩🏼‍🤝‍👩🏽 👩🏼‍🤝‍👩🏾 👩🏼‍🤝‍👩🏿 👩🏽‍🤝‍👩🏻 👩🏽‍🤝‍👩🏼 👩🏽‍🤝‍👩🏾 👩🏽‍🤝‍👩🏿 👩🏾‍🤝‍👩🏻 👩🏾‍🤝‍👩🏼 👩🏾‍🤝‍👩🏽 👩🏾‍🤝‍👩🏿 👩🏿‍🤝‍👩🏻 👩🏿‍🤝‍👩🏼 👩🏿‍🤝‍👩🏽 👩🏿‍🤝‍👩🏾 👩🏻‍🤝‍👨🏼 👩🏻‍🤝‍👨🏽 👩🏻‍🤝‍👨🏾 👩🏻‍🤝‍👨🏿 👩🏼‍🤝‍👨🏻 👩🏼‍🤝‍👨🏽 👩🏼‍🤝‍👨🏾 👩🏼‍🤝‍👨🏿 👩🏽‍🤝‍👨🏻 👩🏽‍🤝‍👨🏼 👩🏽‍🤝‍👨🏾 👩🏽‍🤝‍👨🏿 👩🏾‍🤝‍👨🏻 👩🏾‍🤝‍👨🏼 👩🏾‍🤝‍👨🏽 👩🏾‍🤝‍👨🏿 👩🏿‍🤝‍👨🏻 👩🏿‍🤝‍👨🏼 👩🏿‍🤝‍👨🏽 👩🏿‍🤝‍👨🏾 👨🏻‍🤝‍👨🏼 👨🏻‍🤝‍👨🏽 👨🏻‍🤝‍👨🏾 👨🏻‍🤝‍👨🏿 👨🏼‍🤝‍👨🏻 👨🏼‍🤝‍👨🏽 👨🏼‍🤝‍👨🏾 👨🏼‍🤝‍👨🏿 👨🏽‍🤝‍👨🏻 👨🏽‍🤝‍👨🏼 👨🏽‍🤝‍👨🏾 👨🏽‍🤝‍👨🏿 👨🏾‍🤝‍👨🏻 👨🏾‍🤝‍👨🏼 👨🏾‍🤝‍👨🏽 👨🏾‍🤝‍👨🏿 👨🏿‍🤝‍👨🏻 👨🏿‍🤝‍👨🏼 👨🏿‍🤝‍👨🏽 👨🏿‍🤝‍👨🏾 💏 🧑🏻‍❤️‍💋‍🧑🏼 🧑🏻‍❤️‍💋‍🧑🏽 🧑🏻‍❤️‍💋‍🧑🏾 🧑🏻‍❤️‍💋‍🧑🏿 🧑🏼‍❤️‍💋‍🧑🏻 🧑🏼‍❤️‍💋‍🧑🏽 🧑🏼‍❤️‍💋‍🧑🏾 🧑🏼‍❤️‍💋‍🧑🏿 🧑🏽‍❤️‍💋‍🧑🏻 🧑🏽‍❤️‍💋‍🧑🏼 🧑🏽‍❤️‍💋‍🧑🏾 🧑🏽‍❤️‍💋‍🧑🏿 🧑🏾‍❤️‍💋‍🧑🏻 🧑🏾‍❤️‍💋‍🧑🏼 🧑🏾‍❤️‍💋‍🧑🏽 🧑🏾‍❤️‍💋‍🧑🏿 🧑🏿‍❤️‍💋‍🧑🏻 🧑🏿‍❤️‍💋‍🧑🏼 🧑🏿‍❤️‍💋‍🧑🏽 🧑🏿‍❤️‍💋‍🧑🏾 👩‍❤️‍💋‍👨 👩🏻‍❤️‍💋‍👨🏻 👩🏻‍❤️‍💋‍👨🏼 👩🏻‍❤️‍💋‍👨🏽 👩🏻‍❤️‍💋‍👨🏾 👩🏻‍❤️‍💋‍👨🏿 👩🏼‍❤️‍💋‍👨🏻 👩🏼‍❤️‍💋‍👨🏼 👩🏼‍❤️‍💋‍👨🏽 👩🏼‍❤️‍💋‍👨🏾 👩🏼‍❤️‍💋‍👨🏿 👩🏽‍❤️‍💋‍👨🏻 👩🏽‍❤️‍💋‍👨🏼 👩🏽‍❤️‍💋‍👨🏽 👩🏽‍❤️‍💋‍👨🏾 👩🏽‍❤️‍💋‍👨🏿 👩🏾‍❤️‍💋‍👨🏻 👩🏾‍❤️‍💋‍👨🏼 👩🏾‍❤️‍💋‍👨🏽 👩🏾‍❤️‍💋‍👨🏾 👩🏾‍❤️‍💋‍👨🏿 👩🏿‍❤️‍💋‍👨🏻 👩🏿‍❤️‍💋‍👨🏼 👩🏿‍❤️‍💋‍👨🏽 👩🏿‍❤️‍💋‍👨🏾 👩🏿‍❤️‍💋‍👨🏿 👨‍❤️‍💋‍👨 👨🏻‍❤️‍💋‍👨🏻 👨🏻‍❤️‍💋‍👨🏼 👨🏻‍❤️‍💋‍👨🏽 👨🏻‍❤️‍💋‍👨🏾 👨🏻‍❤️‍💋‍👨🏿 👨🏼‍❤️‍💋‍👨🏻 👨🏼‍❤️‍💋‍👨🏼 👨🏼‍❤️‍💋‍👨🏽 👨🏼‍❤️‍💋‍👨🏾 👨🏼‍❤️‍💋‍👨🏿 👨🏽‍❤️‍💋‍👨🏻 👨🏽‍❤️‍💋‍👨🏼 👨🏽‍❤️‍💋‍👨🏽 👨🏽‍❤️‍💋‍👨🏾 👨🏽‍❤️‍💋‍👨🏿 👨🏾‍❤️‍💋‍👨🏻 👨🏾‍❤️‍💋‍👨🏼 👨🏾‍❤️‍💋‍👨🏽 👨🏾‍❤️‍💋‍👨🏾 👨🏾‍❤️‍💋‍👨🏿 👨🏿‍❤️‍💋‍👨🏻 👨🏿‍❤️‍💋‍👨🏼 👨🏿‍❤️‍💋‍👨🏽 👨🏿‍❤️‍💋‍👨🏾 👨🏿‍❤️‍💋‍👨🏿 👩‍❤️‍💋‍👩 👩🏻‍❤️‍💋‍👩🏻 👩🏻‍❤️‍💋‍👩🏼 👩🏻‍❤️‍💋‍👩🏽 👩🏻‍❤️‍💋‍👩🏾 👩🏻‍❤️‍💋‍👩🏿 👩🏼‍❤️‍💋‍👩🏻 👩🏼‍❤️‍💋‍👩🏼 👩🏼‍❤️‍💋‍👩🏽 👩🏼‍❤️‍💋‍👩🏾 👩🏼‍❤️‍💋‍👩🏿 👩🏽‍❤️‍💋‍👩🏻 👩🏽‍❤️‍💋‍👩🏼 👩🏽‍❤️‍💋‍👩🏽 👩🏽‍❤️‍💋‍👩🏾 👩🏽‍❤️‍💋‍👩🏿 👩🏾‍❤️‍💋‍👩🏻 👩🏾‍❤️‍💋‍👩🏼 👩🏾‍❤️‍💋‍👩🏽 👩🏾‍❤️‍💋‍👩🏾 👩🏾‍❤️‍💋‍👩🏿 👩🏿‍❤️‍💋‍👩🏻 👩🏿‍❤️‍💋‍👩🏼 👩🏿‍❤️‍💋‍👩🏽 👩🏿‍❤️‍💋‍👩🏾 👩🏿‍❤️‍💋‍👩🏿 💑 🧑🏻‍❤️‍🧑🏼 🧑🏻‍❤️‍🧑🏽 🧑🏻‍❤️‍🧑🏾 🧑🏻‍❤️‍🧑🏿 🧑🏼‍❤️‍🧑🏻 🧑🏼‍❤️‍🧑🏽 🧑🏼‍❤️‍🧑🏾 🧑🏼‍❤️‍🧑🏿 🧑🏽‍❤️‍🧑🏻 🧑🏽‍❤️‍🧑🏼 🧑🏽‍❤️‍🧑🏾 🧑🏽‍❤️‍🧑🏿 🧑🏾‍❤️‍🧑🏻 🧑🏾‍❤️‍🧑🏼 🧑🏾‍❤️‍🧑🏽 🧑🏾‍❤️‍🧑🏿 🧑🏿‍❤️‍🧑🏻 🧑🏿‍❤️‍🧑🏼 🧑🏿‍❤️‍🧑🏽 🧑🏿‍❤️‍🧑🏾 👩‍❤️‍👨 👩🏻‍❤️‍👨🏻 👩🏻‍❤️‍👨🏼 👩🏻‍❤️‍👨🏽 👩🏻‍❤️‍👨🏾 👩🏻‍❤️‍👨🏿 👩🏼‍❤️‍👨🏻 👩🏼‍❤️‍👨🏼 👩🏼‍❤️‍👨🏽 👩🏼‍❤️‍👨🏾 👩🏼‍❤️‍👨🏿 👩🏽‍❤️‍👨🏻 👩🏽‍❤️‍👨🏼 👩🏽‍❤️‍👨🏽 👩🏽‍❤️‍👨🏾 👩🏽‍❤️‍👨🏿 👩🏾‍❤️‍👨🏻 👩🏾‍❤️‍👨🏼 👩🏾‍❤️‍👨🏽 👩🏾‍❤️‍👨🏾 👩🏾‍❤️‍👨🏿 👩🏿‍❤️‍👨🏻 👩🏿‍❤️‍👨🏼 👩🏿‍❤️‍👨🏽 👩🏿‍❤️‍👨🏾 👩🏿‍❤️‍👨🏿 👨‍❤️‍👨 👨🏻‍❤️‍👨🏻 👨🏻‍❤️‍👨🏼 👨🏻‍❤️‍👨🏽 👨🏻‍❤️‍👨🏾 👨🏻‍❤️‍👨🏿 👨🏼‍❤️‍👨🏻 👨🏼‍❤️‍👨🏼 👨🏼‍❤️‍👨🏽 👨🏼‍❤️‍👨🏾 👨🏼‍❤️‍👨🏿 👨🏽‍❤️‍👨🏻 👨🏽‍❤️‍👨🏼 👨🏽‍❤️‍👨🏽 👨🏽‍❤️‍👨🏾 👨🏽‍❤️‍👨🏿 👨🏾‍❤️‍👨🏻 👨🏾‍❤️‍👨🏼 👨🏾‍❤️‍👨🏽 👨🏾‍❤️‍👨🏾 👨🏾‍❤️‍👨🏿 👨🏿‍❤️‍👨🏻 👨🏿‍❤️‍👨🏼 👨🏿‍❤️‍👨🏽 👨🏿‍❤️‍👨🏾 👨🏿‍❤️‍👨🏿 👩‍❤️‍👩 👩🏻‍❤️‍👩🏻 👩🏻‍❤️‍👩🏼 👩🏻‍❤️‍👩🏽 👩🏻‍❤️‍👩🏾 👩🏻‍❤️‍👩🏿 👩🏼‍❤️‍👩🏻 👩🏼‍❤️‍👩🏼 👩🏼‍❤️‍👩🏽 👩🏼‍❤️‍👩🏾 👩🏼‍❤️‍👩🏿 👩🏽‍❤️‍👩🏻 👩🏽‍❤️‍👩🏼 👩🏽‍❤️‍👩🏽 👩🏽‍❤️‍👩🏾 👩🏽‍❤️‍👩🏿 👩🏾‍❤️‍👩🏻 👩🏾‍❤️‍👩🏼 👩🏾‍❤️‍👩🏽 👩🏾‍❤️‍👩🏾 👩🏾‍❤️‍👩🏿 👩🏿‍❤️‍👩🏻 👩🏿‍❤️‍👩🏼 👩🏿‍❤️‍👩🏽 👩🏿‍❤️‍👩🏾 👩🏿‍❤️‍👩🏿 👪 👨‍👩‍👦 👨‍👩‍👧 👨‍👩‍👧‍👦 👨‍👩‍👦‍👦 👨‍👩‍👧‍👧 👨‍👨‍👦 👨‍👨‍👧 👨‍👨‍👧‍👦 👨‍👨‍👦‍👦 👨‍👨‍👧‍👧 👩‍👩‍👦 👩‍👩‍👧 👩‍👩‍👧‍👦 👩‍👩‍👦‍👦 👩‍👩‍👧‍👧 👨‍👦 👨‍👦‍👦 👨‍👧 👨‍👧‍👦 👨‍👧‍👧 👩‍👦 👩‍👦‍👦 👩‍👧 👩‍👧‍👦 👩‍👧‍👧 🐕‍🦺 🐈‍⬛ 🐻‍❄️ 🐦‍⬛ 🏳️‍🌈 🏳️‍⚧️ 🏴‍☠️ </p>

<!--
Full reference: https://unicode.org/Public/emoji/15.0/
ZJW: zwidge https://unicode.org/emoji/charts/emoji-zwj-sequences.html
-->
`,title:"Emoji Composition",level:2,content:`## Emoji Composition

<p style="font-size: 65%; line-height: 1rem;"> 😶‍🌫️ 😮‍💨 😵‍💫 ❤️‍🔥 ❤️‍🩹 👁️‍🗨️ 🫱🏻‍🫲🏼 🫱🏻‍🫲🏽 🫱🏻‍🫲🏾 🫱🏻‍🫲🏿 🫱🏼‍🫲🏻 🫱🏼‍🫲🏽 🫱🏼‍🫲🏾 🫱🏼‍🫲🏿 🫱🏽‍🫲🏻 🫱🏽‍🫲🏼 🫱🏽‍🫲🏾 🫱🏽‍🫲🏿 🫱🏾‍🫲🏻 🫱🏾‍🫲🏼 🫱🏾‍🫲🏽 🫱🏾‍🫲🏿 🫱🏿‍🫲🏻 🫱🏿‍🫲🏼 🫱🏿‍🫲🏽 🫱🏿‍🫲🏾 🧔‍♂️ 🧔🏻‍♂️ 🧔🏼‍♂️ 🧔🏽‍♂️ 🧔🏾‍♂️ 🧔🏿‍♂️ 🧔‍♀️ 🧔🏻‍♀️ 🧔🏼‍♀️ 🧔🏽‍♀️ 🧔🏾‍♀️ 🧔🏿‍♀️ 👨‍🦰 👨🏻‍🦰 👨🏼‍🦰 👨🏽‍🦰 👨🏾‍🦰 👨🏿‍🦰 👨‍🦱 👨🏻‍🦱 👨🏼‍🦱 👨🏽‍🦱 👨🏾‍🦱 👨🏿‍🦱 👨‍🦳 👨🏻‍🦳 👨🏼‍🦳 👨🏽‍🦳 👨🏾‍🦳 👨🏿‍🦳 👨‍🦲 👨🏻‍🦲 👨🏼‍🦲 👨🏽‍🦲 👨🏾‍🦲 👨🏿‍🦲 👩‍🦰 👩🏻‍🦰 👩🏼‍🦰 👩🏽‍🦰 👩🏾‍🦰 👩🏿‍🦰 🧑‍🦰 🧑🏻‍🦰 🧑🏼‍🦰 🧑🏽‍🦰 🧑🏾‍🦰 🧑🏿‍🦰 👩‍🦱 👩🏻‍🦱 👩🏼‍🦱 👩🏽‍🦱 👩🏾‍🦱 👩🏿‍🦱 🧑‍🦱 🧑🏻‍🦱 🧑🏼‍🦱 🧑🏽‍🦱 🧑🏾‍🦱 🧑🏿‍🦱 👩‍🦳 👩🏻‍🦳 👩🏼‍🦳 👩🏽‍🦳 👩🏾‍🦳 👩🏿‍🦳 🧑‍🦳 🧑🏻‍🦳 🧑🏼‍🦳 🧑🏽‍🦳 🧑🏾‍🦳 🧑🏿‍🦳 👩‍🦲 👩🏻‍🦲 👩🏼‍🦲 👩🏽‍🦲 👩🏾‍🦲 👩🏿‍🦲 🧑‍🦲 🧑🏻‍🦲 🧑🏼‍🦲 🧑🏽‍🦲 🧑🏾‍🦲 🧑🏿‍🦲 👱‍♀️ 👱🏻‍♀️ 👱🏼‍♀️ 👱🏽‍♀️ 👱🏾‍♀️ 👱🏿‍♀️ 👱‍♂️ 👱🏻‍♂️ 👱🏼‍♂️ 👱🏽‍♂️ 👱🏾‍♂️ 👱🏿‍♂️ 🙍‍♂️ 🙍🏻‍♂️ 🙍🏼‍♂️ 🙍🏽‍♂️ 🙍🏾‍♂️ 🙍🏿‍♂️ 🙍‍♀️ 🙍🏻‍♀️ 🙍🏼‍♀️ 🙍🏽‍♀️ 🙍🏾‍♀️ 🙍🏿‍♀️ 🙎‍♂️ 🙎🏻‍♂️ 🙎🏼‍♂️ 🙎🏽‍♂️ 🙎🏾‍♂️ 🙎🏿‍♂️ 🙎‍♀️ 🙎🏻‍♀️ 🙎🏼‍♀️ 🙎🏽‍♀️ 🙎🏾‍♀️ 🙎🏿‍♀️ 🙅‍♂️ 🙅🏻‍♂️ 🙅🏼‍♂️ 🙅🏽‍♂️ 🙅🏾‍♂️ 🙅🏿‍♂️ 🙅‍♀️ 🙅🏻‍♀️ 🙅🏼‍♀️ 🙅🏽‍♀️ 🙅🏾‍♀️ 🙅🏿‍♀️ 🙆‍♂️ 🙆🏻‍♂️ 🙆🏼‍♂️ 🙆🏽‍♂️ 🙆🏾‍♂️ 🙆🏿‍♂️ 🙆‍♀️ 🙆🏻‍♀️ 🙆🏼‍♀️ 🙆🏽‍♀️ 🙆🏾‍♀️ 🙆🏿‍♀️ 💁‍♂️ 💁🏻‍♂️ 💁🏼‍♂️ 💁🏽‍♂️ 💁🏾‍♂️ 💁🏿‍♂️ 💁‍♀️ 💁🏻‍♀️ 💁🏼‍♀️ 💁🏽‍♀️ 💁🏾‍♀️ 💁🏿‍♀️ 🙋‍♂️ 🙋🏻‍♂️ 🙋🏼‍♂️ 🙋🏽‍♂️ 🙋🏾‍♂️ 🙋🏿‍♂️ 🙋‍♀️ 🙋🏻‍♀️ 🙋🏼‍♀️ 🙋🏽‍♀️ 🙋🏾‍♀️ 🙋🏿‍♀️ 🧏‍♂️ 🧏🏻‍♂️ 🧏🏼‍♂️ 🧏🏽‍♂️ 🧏🏾‍♂️ 🧏🏿‍♂️ 🧏‍♀️ 🧏🏻‍♀️ 🧏🏼‍♀️ 🧏🏽‍♀️ 🧏🏾‍♀️ 🧏🏿‍♀️ 🙇‍♂️ 🙇🏻‍♂️ 🙇🏼‍♂️ 🙇🏽‍♂️ 🙇🏾‍♂️ 🙇🏿‍♂️ 🙇‍♀️ 🙇🏻‍♀️ 🙇🏼‍♀️ 🙇🏽‍♀️ 🙇🏾‍♀️ 🙇🏿‍♀️ 🤦‍♂️ 🤦🏻‍♂️ 🤦🏼‍♂️ 🤦🏽‍♂️ 🤦🏾‍♂️ 🤦🏿‍♂️ 🤦‍♀️ 🤦🏻‍♀️ 🤦🏼‍♀️ 🤦🏽‍♀️ 🤦🏾‍♀️ 🤦🏿‍♀️ 🤷‍♂️ 🤷🏻‍♂️ 🤷🏼‍♂️ 🤷🏽‍♂️ 🤷🏾‍♂️ 🤷🏿‍♂️ 🤷‍♀️ 🤷🏻‍♀️ 🤷🏼‍♀️ 🤷🏽‍♀️ 🤷🏾‍♀️ 🤷🏿‍♀️ 🧑‍⚕️ 🧑🏻‍⚕️ 🧑🏼‍⚕️ 🧑🏽‍⚕️ 🧑🏾‍⚕️ 🧑🏿‍⚕️ 👨‍⚕️ 👨🏻‍⚕️ 👨🏼‍⚕️ 👨🏽‍⚕️ 👨🏾‍⚕️ 👨🏿‍⚕️ 👩‍⚕️ 👩🏻‍⚕️ 👩🏼‍⚕️ 👩🏽‍⚕️ 👩🏾‍⚕️ 👩🏿‍⚕️ 🧑‍🎓 🧑🏻‍🎓 🧑🏼‍🎓 🧑🏽‍🎓 🧑🏾‍🎓 🧑🏿‍🎓 👨‍🎓 👨🏻‍🎓 👨🏼‍🎓 👨🏽‍🎓 👨🏾‍🎓 👨🏿‍🎓 👩‍🎓 👩🏻‍🎓 👩🏼‍🎓 👩🏽‍🎓 👩🏾‍🎓 👩🏿‍🎓 🧑‍🏫 🧑🏻‍🏫 🧑🏼‍🏫 🧑🏽‍🏫 🧑🏾‍🏫 🧑🏿‍🏫 👨‍🏫 👨🏻‍🏫 👨🏼‍🏫 👨🏽‍🏫 👨🏾‍🏫 👨🏿‍🏫 👩‍🏫 👩🏻‍🏫 👩🏼‍🏫 👩🏽‍🏫 👩🏾‍🏫 👩🏿‍🏫 🧑‍⚖️ 🧑🏻‍⚖️ 🧑🏼‍⚖️ 🧑🏽‍⚖️ 🧑🏾‍⚖️ 🧑🏿‍⚖️ 👨‍⚖️ 👨🏻‍⚖️ 👨🏼‍⚖️ 👨🏽‍⚖️ 👨🏾‍⚖️ 👨🏿‍⚖️ 👩‍⚖️ 👩🏻‍⚖️ 👩🏼‍⚖️ 👩🏽‍⚖️ 👩🏾‍⚖️ 👩🏿‍⚖️ 🧑‍🌾 🧑🏻‍🌾 🧑🏼‍🌾 🧑🏽‍🌾 🧑🏾‍🌾 🧑🏿‍🌾 👨‍🌾 👨🏻‍🌾 👨🏼‍🌾 👨🏽‍🌾 👨🏾‍🌾 👨🏿‍🌾 👩‍🌾 👩🏻‍🌾 👩🏼‍🌾 👩🏽‍🌾 👩🏾‍🌾 👩🏿‍🌾 🧑‍🍳 🧑🏻‍🍳 🧑🏼‍🍳 🧑🏽‍🍳 🧑🏾‍🍳 🧑🏿‍🍳 👨‍🍳 👨🏻‍🍳 👨🏼‍🍳 👨🏽‍🍳 👨🏾‍🍳 👨🏿‍🍳 👩‍🍳 👩🏻‍🍳 👩🏼‍🍳 👩🏽‍🍳 👩🏾‍🍳 👩🏿‍🍳 🧑‍🔧 🧑🏻‍🔧 🧑🏼‍🔧 🧑🏽‍🔧 🧑🏾‍🔧 🧑🏿‍🔧 👨‍🔧 👨🏻‍🔧 👨🏼‍🔧 👨🏽‍🔧 👨🏾‍🔧 👨🏿‍🔧 👩‍🔧 👩🏻‍🔧 👩🏼‍🔧 👩🏽‍🔧 👩🏾‍🔧 👩🏿‍🔧 🧑‍🏭 🧑🏻‍🏭 🧑🏼‍🏭 🧑🏽‍🏭 🧑🏾‍🏭 🧑🏿‍🏭 👨‍🏭 👨🏻‍🏭 👨🏼‍🏭 👨🏽‍🏭 👨🏾‍🏭 👨🏿‍🏭 👩‍🏭 👩🏻‍🏭 👩🏼‍🏭 👩🏽‍🏭 👩🏾‍🏭 👩🏿‍🏭 🧑‍💼 🧑🏻‍💼 🧑🏼‍💼 🧑🏽‍💼 🧑🏾‍💼 🧑🏿‍💼 👨‍💼 👨🏻‍💼 👨🏼‍💼 👨🏽‍💼 👨🏾‍💼 👨🏿‍💼 👩‍💼 👩🏻‍💼 👩🏼‍💼 👩🏽‍💼 👩🏾‍💼 👩🏿‍💼 🧑‍🔬 🧑🏻‍🔬 🧑🏼‍🔬 🧑🏽‍🔬 🧑🏾‍🔬 🧑🏿‍🔬 👨‍🔬 👨🏻‍🔬 👨🏼‍🔬 👨🏽‍🔬 👨🏾‍🔬 👨🏿‍🔬 👩‍🔬 👩🏻‍🔬 👩🏼‍🔬 👩🏽‍🔬 👩🏾‍🔬 👩🏿‍🔬 🧑‍💻 🧑🏻‍💻 🧑🏼‍💻 🧑🏽‍💻 🧑🏾‍💻 🧑🏿‍💻 👨‍💻 👨🏻‍💻 👨🏼‍💻 👨🏽‍💻 👨🏾‍💻 👨🏿‍💻 👩‍💻 👩🏻‍💻 👩🏼‍💻 👩🏽‍💻 👩🏾‍💻 👩🏿‍💻 🧑‍🎤 🧑🏻‍🎤 🧑🏼‍🎤 🧑🏽‍🎤 🧑🏾‍🎤 🧑🏿‍🎤 👨‍🎤 👨🏻‍🎤 👨🏼‍🎤 👨🏽‍🎤 👨🏾‍🎤 👨🏿‍🎤 👩‍🎤 👩🏻‍🎤 👩🏼‍🎤 👩🏽‍🎤 👩🏾‍🎤 👩🏿‍🎤 🧑‍🎨 🧑🏻‍🎨 🧑🏼‍🎨 🧑🏽‍🎨 🧑🏾‍🎨 🧑🏿‍🎨 👨‍🎨 👨🏻‍🎨 👨🏼‍🎨 👨🏽‍🎨 👨🏾‍🎨 👨🏿‍🎨 👩‍🎨 👩🏻‍🎨 👩🏼‍🎨 👩🏽‍🎨 👩🏾‍🎨 👩🏿‍🎨 🧑‍✈️ 🧑🏻‍✈️ 🧑🏼‍✈️ 🧑🏽‍✈️ 🧑🏾‍✈️ 🧑🏿‍✈️ 👨‍✈️ 👨🏻‍✈️ 👨🏼‍✈️ 👨🏽‍✈️ 👨🏾‍✈️ 👨🏿‍✈️ 👩‍✈️ 👩🏻‍✈️ 👩🏼‍✈️ 👩🏽‍✈️ 👩🏾‍✈️ 👩🏿‍✈️ 🧑‍🚀 🧑🏻‍🚀 🧑🏼‍🚀 🧑🏽‍🚀 🧑🏾‍🚀 🧑🏿‍🚀 👨‍🚀 👨🏻‍🚀 👨🏼‍🚀 👨🏽‍🚀 👨🏾‍🚀 👨🏿‍🚀 👩‍🚀 👩🏻‍🚀 👩🏼‍🚀 👩🏽‍🚀 👩🏾‍🚀 👩🏿‍🚀 🧑‍🚒 🧑🏻‍🚒 🧑🏼‍🚒 🧑🏽‍🚒 🧑🏾‍🚒 🧑🏿‍🚒 👨‍🚒 👨🏻‍🚒 👨🏼‍🚒 👨🏽‍🚒 👨🏾‍🚒 👨🏿‍🚒 👩‍🚒 👩🏻‍🚒 👩🏼‍🚒 👩🏽‍🚒 👩🏾‍🚒 👩🏿‍🚒 👮‍♂️ 👮🏻‍♂️ 👮🏼‍♂️ 👮🏽‍♂️ 👮🏾‍♂️ 👮🏿‍♂️ 👮‍♀️ 👮🏻‍♀️ 👮🏼‍♀️ 👮🏽‍♀️ 👮🏾‍♀️ 👮🏿‍♀️ 🕵️‍♂️ 🕵🏻‍♂️ 🕵🏼‍♂️ 🕵🏽‍♂️ 🕵🏾‍♂️ 🕵🏿‍♂️ 🕵️‍♀️ 🕵🏻‍♀️ 🕵🏼‍♀️ 🕵🏽‍♀️ 🕵🏾‍♀️ 🕵🏿‍♀️ 💂‍♂️ 💂🏻‍♂️ 💂🏼‍♂️ 💂🏽‍♂️ 💂🏾‍♂️ 💂🏿‍♂️ 💂‍♀️ 💂🏻‍♀️ 💂🏼‍♀️ 💂🏽‍♀️ 💂🏾‍♀️ 💂🏿‍♀️ 👷‍♂️ 👷🏻‍♂️ 👷🏼‍♂️ 👷🏽‍♂️ 👷🏾‍♂️ 👷🏿‍♂️ 👷‍♀️ 👷🏻‍♀️ 👷🏼‍♀️ 👷🏽‍♀️ 👷🏾‍♀️ 👷🏿‍♀️ 👳‍♂️ 👳🏻‍♂️ 👳🏼‍♂️ 👳🏽‍♂️ 👳🏾‍♂️ 👳🏿‍♂️ 👳‍♀️ 👳🏻‍♀️ 👳🏼‍♀️ 👳🏽‍♀️ 👳🏾‍♀️ 👳🏿‍♀️ 🤵‍♂️ 🤵🏻‍♂️ 🤵🏼‍♂️ 🤵🏽‍♂️ 🤵🏾‍♂️ 🤵🏿‍♂️ 🤵‍♀️ 🤵🏻‍♀️ 🤵🏼‍♀️ 🤵🏽‍♀️ 🤵🏾‍♀️ 🤵🏿‍♀️ 👰‍♂️ 👰🏻‍♂️ 👰🏼‍♂️ 👰🏽‍♂️ 👰🏾‍♂️ 👰🏿‍♂️ 👰‍♀️ 👰🏻‍♀️ 👰🏼‍♀️ 👰🏽‍♀️ 👰🏾‍♀️ 👰🏿‍♀️ 👩‍🍼 👩🏻‍🍼 👩🏼‍🍼 👩🏽‍🍼 👩🏾‍🍼 👩🏿‍🍼 👨‍🍼 👨🏻‍🍼 👨🏼‍🍼 👨🏽‍🍼 👨🏾‍🍼 👨🏿‍🍼 🧑‍🍼 🧑🏻‍🍼 🧑🏼‍🍼 🧑🏽‍🍼 🧑🏾‍🍼 🧑🏿‍🍼 🧑‍🎄 🧑🏻‍🎄 🧑🏼‍🎄 🧑🏽‍🎄 🧑🏾‍🎄 🧑🏿‍🎄 🦸‍♂️ 🦸🏻‍♂️ 🦸🏼‍♂️ 🦸🏽‍♂️ 🦸🏾‍♂️ 🦸🏿‍♂️ 🦸‍♀️ 🦸🏻‍♀️ 🦸🏼‍♀️ 🦸🏽‍♀️ 🦸🏾‍♀️ 🦸🏿‍♀️ 🦹‍♂️ 🦹🏻‍♂️ 🦹🏼‍♂️ 🦹🏽‍♂️ 🦹🏾‍♂️ 🦹🏿‍♂️ 🦹‍♀️ 🦹🏻‍♀️ 🦹🏼‍♀️ 🦹🏽‍♀️ 🦹🏾‍♀️ 🦹🏿‍♀️ 🧙‍♂️ 🧙🏻‍♂️ 🧙🏼‍♂️ 🧙🏽‍♂️ 🧙🏾‍♂️ 🧙🏿‍♂️ 🧙‍♀️ 🧙🏻‍♀️ 🧙🏼‍♀️ 🧙🏽‍♀️ 🧙🏾‍♀️ 🧙🏿‍♀️ 🧚‍♂️ 🧚🏻‍♂️ 🧚🏼‍♂️ 🧚🏽‍♂️ 🧚🏾‍♂️ 🧚🏿‍♂️ 🧚‍♀️ 🧚🏻‍♀️ 🧚🏼‍♀️ 🧚🏽‍♀️ 🧚🏾‍♀️ 🧚🏿‍♀️ 🧛‍♂️ 🧛🏻‍♂️ 🧛🏼‍♂️ 🧛🏽‍♂️ 🧛🏾‍♂️ 🧛🏿‍♂️ 🧛‍♀️ 🧛🏻‍♀️ 🧛🏼‍♀️ 🧛🏽‍♀️ 🧛🏾‍♀️ 🧛🏿‍♀️ 🧜‍♂️ 🧜🏻‍♂️ 🧜🏼‍♂️ 🧜🏽‍♂️ 🧜🏾‍♂️ 🧜🏿‍♂️ 🧜‍♀️ 🧜🏻‍♀️ 🧜🏼‍♀️ 🧜🏽‍♀️ 🧜🏾‍♀️ 🧜🏿‍♀️ 🧝‍♂️ 🧝🏻‍♂️ 🧝🏼‍♂️ 🧝🏽‍♂️ 🧝🏾‍♂️ 🧝🏿‍♂️ 🧝‍♀️ 🧝🏻‍♀️ 🧝🏼‍♀️ 🧝🏽‍♀️ 🧝🏾‍♀️ 🧝🏿‍♀️ 🧞‍♂️ 🧞‍♀️ 🧟‍♂️ 🧟‍♀️ 💆‍♂️ 💆🏻‍♂️ 💆🏼‍♂️ 💆🏽‍♂️ 💆🏾‍♂️ 💆🏿‍♂️ 💆‍♀️ 💆🏻‍♀️ 💆🏼‍♀️ 💆🏽‍♀️ 💆🏾‍♀️ 💆🏿‍♀️ 💇‍♂️ 💇🏻‍♂️ 💇🏼‍♂️ 💇🏽‍♂️ 💇🏾‍♂️ 💇🏿‍♂️ 💇‍♀️ 💇🏻‍♀️ 💇🏼‍♀️ 💇🏽‍♀️ 💇🏾‍♀️ 💇🏿‍♀️ 🚶‍♂️ 🚶🏻‍♂️ 🚶🏼‍♂️ 🚶🏽‍♂️ 🚶🏾‍♂️ 🚶🏿‍♂️ 🚶‍♀️ 🚶🏻‍♀️ 🚶🏼‍♀️ 🚶🏽‍♀️ 🚶🏾‍♀️ 🚶🏿‍♀️ 🧍‍♂️ 🧍🏻‍♂️ 🧍🏼‍♂️ 🧍🏽‍♂️ 🧍🏾‍♂️ 🧍🏿‍♂️ 🧍‍♀️ 🧍🏻‍♀️ 🧍🏼‍♀️ 🧍🏽‍♀️ 🧍🏾‍♀️ 🧍🏿‍♀️ 🧎‍♂️ 🧎🏻‍♂️ 🧎🏼‍♂️ 🧎🏽‍♂️ 🧎🏾‍♂️ 🧎🏿‍♂️ 🧎‍♀️ 🧎🏻‍♀️ 🧎🏼‍♀️ 🧎🏽‍♀️ 🧎🏾‍♀️ 🧎🏿‍♀️ 🧑‍🦯 🧑🏻‍🦯 🧑🏼‍🦯 🧑🏽‍🦯 🧑🏾‍🦯 🧑🏿‍🦯 👨‍🦯 👨🏻‍🦯 👨🏼‍🦯 👨🏽‍🦯 👨🏾‍🦯 👨🏿‍🦯 👩‍🦯 👩🏻‍🦯 👩🏼‍🦯 👩🏽‍🦯 👩🏾‍🦯 👩🏿‍🦯 🧑‍🦼 🧑🏻‍🦼 🧑🏼‍🦼 🧑🏽‍🦼 🧑🏾‍🦼 🧑🏿‍🦼 👨‍🦼 👨🏻‍🦼 👨🏼‍🦼 👨🏽‍🦼 👨🏾‍🦼 👨🏿‍🦼 👩‍🦼 👩🏻‍🦼 👩🏼‍🦼 👩🏽‍🦼 👩🏾‍🦼 👩🏿‍🦼 🧑‍🦽 🧑🏻‍🦽 🧑🏼‍🦽 🧑🏽‍🦽 🧑🏾‍🦽 🧑🏿‍🦽 👨‍🦽 👨🏻‍🦽 👨🏼‍🦽 👨🏽‍🦽 👨🏾‍🦽 👨🏿‍🦽 👩‍🦽 👩🏻‍🦽 👩🏼‍🦽 👩🏽‍🦽 👩🏾‍🦽 👩🏿‍🦽 🏃‍♂️ 🏃🏻‍♂️ 🏃🏼‍♂️ 🏃🏽‍♂️ 🏃🏾‍♂️ 🏃🏿‍♂️ 🏃‍♀️ 🏃🏻‍♀️ 🏃🏼‍♀️ 🏃🏽‍♀️ 🏃🏾‍♀️ 🏃🏿‍♀️ 👯‍♂️ 👯‍♀️ 🧖‍♂️ 🧖🏻‍♂️ 🧖🏼‍♂️ 🧖🏽‍♂️ 🧖🏾‍♂️ 🧖🏿‍♂️ 🧖‍♀️ 🧖🏻‍♀️ 🧖🏼‍♀️ 🧖🏽‍♀️ 🧖🏾‍♀️ 🧖🏿‍♀️ 🧗‍♂️ 🧗🏻‍♂️ 🧗🏼‍♂️ 🧗🏽‍♂️ 🧗🏾‍♂️ 🧗🏿‍♂️ 🧗‍♀️ 🧗🏻‍♀️ 🧗🏼‍♀️ 🧗🏽‍♀️ 🧗🏾‍♀️ 🧗🏿‍♀️ 🏌️‍♂️ 🏌🏻‍♂️ 🏌🏼‍♂️ 🏌🏽‍♂️ 🏌🏾‍♂️ 🏌🏿‍♂️ 🏌️‍♀️ 🏌🏻‍♀️ 🏌🏼‍♀️ 🏌🏽‍♀️ 🏌🏾‍♀️ 🏌🏿‍♀️ 🏄‍♂️ 🏄🏻‍♂️ 🏄🏼‍♂️ 🏄🏽‍♂️ 🏄🏾‍♂️ 🏄🏿‍♂️ 🏄‍♀️ 🏄🏻‍♀️ 🏄🏼‍♀️ 🏄🏽‍♀️ 🏄🏾‍♀️ 🏄🏿‍♀️ 🚣‍♂️ 🚣🏻‍♂️ 🚣🏼‍♂️ 🚣🏽‍♂️ 🚣🏾‍♂️ 🚣🏿‍♂️ 🚣‍♀️ 🚣🏻‍♀️ 🚣🏼‍♀️ 🚣🏽‍♀️ 🚣🏾‍♀️ 🚣🏿‍♀️ 🏊‍♂️ 🏊🏻‍♂️ 🏊🏼‍♂️ 🏊🏽‍♂️ 🏊🏾‍♂️ 🏊🏿‍♂️ 🏊‍♀️ 🏊🏻‍♀️ 🏊🏼‍♀️ 🏊🏽‍♀️ 🏊🏾‍♀️ 🏊🏿‍♀️ ⛹️‍♂️ ⛹🏻‍♂️ ⛹🏼‍♂️ ⛹🏽‍♂️ ⛹🏾‍♂️ ⛹🏿‍♂️ ⛹️‍♀️ ⛹🏻‍♀️ ⛹🏼‍♀️ ⛹🏽‍♀️ ⛹🏾‍♀️ ⛹🏿‍♀️ 🏋️‍♂️ 🏋🏻‍♂️ 🏋🏼‍♂️ 🏋🏽‍♂️ 🏋🏾‍♂️ 🏋🏿‍♂️ 🏋️‍♀️ 🏋🏻‍♀️ 🏋🏼‍♀️ 🏋🏽‍♀️ 🏋🏾‍♀️ 🏋🏿‍♀️ 🚴‍♂️ 🚴🏻‍♂️ 🚴🏼‍♂️ 🚴🏽‍♂️ 🚴🏾‍♂️ 🚴🏿‍♂️ 🚴‍♀️ 🚴🏻‍♀️ 🚴🏼‍♀️ 🚴🏽‍♀️ 🚴🏾‍♀️ 🚴🏿‍♀️ 🚵‍♂️ 🚵🏻‍♂️ 🚵🏼‍♂️ 🚵🏽‍♂️ 🚵🏾‍♂️ 🚵🏿‍♂️ 🚵‍♀️ 🚵🏻‍♀️ 🚵🏼‍♀️ 🚵🏽‍♀️ 🚵🏾‍♀️ 🚵🏿‍♀️ 🤸‍♂️ 🤸🏻‍♂️ 🤸🏼‍♂️ 🤸🏽‍♂️ 🤸🏾‍♂️ 🤸🏿‍♂️ 🤸‍♀️ 🤸🏻‍♀️ 🤸🏼‍♀️ 🤸🏽‍♀️ 🤸🏾‍♀️ 🤸🏿‍♀️ 🤼‍♂️ 🤼‍♀️ 🤽‍♂️ 🤽🏻‍♂️ 🤽🏼‍♂️ 🤽🏽‍♂️ 🤽🏾‍♂️ 🤽🏿‍♂️ 🤽‍♀️ 🤽🏻‍♀️ 🤽🏼‍♀️ 🤽🏽‍♀️ 🤽🏾‍♀️ 🤽🏿‍♀️ 🤾‍♂️ 🤾🏻‍♂️ 🤾🏼‍♂️ 🤾🏽‍♂️ 🤾🏾‍♂️ 🤾🏿‍♂️ 🤾‍♀️ 🤾🏻‍♀️ 🤾🏼‍♀️ 🤾🏽‍♀️ 🤾🏾‍♀️ 🤾🏿‍♀️ 🤹‍♂️ 🤹🏻‍♂️ 🤹🏼‍♂️ 🤹🏽‍♂️ 🤹🏾‍♂️ 🤹🏿‍♂️ 🤹‍♀️ 🤹🏻‍♀️ 🤹🏼‍♀️ 🤹🏽‍♀️ 🤹🏾‍♀️ 🤹🏿‍♀️ 🧘‍♂️ 🧘🏻‍♂️ 🧘🏼‍♂️ 🧘🏽‍♂️ 🧘🏾‍♂️ 🧘🏿‍♂️ 🧘‍♀️ 🧘🏻‍♀️ 🧘🏼‍♀️ 🧘🏽‍♀️ 🧘🏾‍♀️ 🧘🏿‍♀️ 🧑‍🤝‍🧑 🧑🏻‍🤝‍🧑🏻 🧑🏻‍🤝‍🧑🏼 🧑🏻‍🤝‍🧑🏽 🧑🏻‍🤝‍🧑🏾 🧑🏻‍🤝‍🧑🏿 🧑🏼‍🤝‍🧑🏻 🧑🏼‍🤝‍🧑🏼 🧑🏼‍🤝‍🧑🏽 🧑🏼‍🤝‍🧑🏾 🧑🏼‍🤝‍🧑🏿 🧑🏽‍🤝‍🧑🏻 🧑🏽‍🤝‍🧑🏼 🧑🏽‍🤝‍🧑🏽 🧑🏽‍🤝‍🧑🏾 🧑🏽‍🤝‍🧑🏿 🧑🏾‍🤝‍🧑🏻 🧑🏾‍🤝‍🧑🏼 🧑🏾‍🤝‍🧑🏽 🧑🏾‍🤝‍🧑🏾 🧑🏾‍🤝‍🧑🏿 🧑🏿‍🤝‍🧑🏻 🧑🏿‍🤝‍🧑🏼 🧑🏿‍🤝‍🧑🏽 🧑🏿‍🤝‍🧑🏾 🧑🏿‍🤝‍🧑🏿 👩🏻‍🤝‍👩🏼 👩🏻‍🤝‍👩🏽 👩🏻‍🤝‍👩🏾 👩🏻‍🤝‍👩🏿 👩🏼‍🤝‍👩🏻 👩🏼‍🤝‍👩🏽 👩🏼‍🤝‍👩🏾 👩🏼‍🤝‍👩🏿 👩🏽‍🤝‍👩🏻 👩🏽‍🤝‍👩🏼 👩🏽‍🤝‍👩🏾 👩🏽‍🤝‍👩🏿 👩🏾‍🤝‍👩🏻 👩🏾‍🤝‍👩🏼 👩🏾‍🤝‍👩🏽 👩🏾‍🤝‍👩🏿 👩🏿‍🤝‍👩🏻 👩🏿‍🤝‍👩🏼 👩🏿‍🤝‍👩🏽 👩🏿‍🤝‍👩🏾 👩🏻‍🤝‍👨🏼 👩🏻‍🤝‍👨🏽 👩🏻‍🤝‍👨🏾 👩🏻‍🤝‍👨🏿 👩🏼‍🤝‍👨🏻 👩🏼‍🤝‍👨🏽 👩🏼‍🤝‍👨🏾 👩🏼‍🤝‍👨🏿 👩🏽‍🤝‍👨🏻 👩🏽‍🤝‍👨🏼 👩🏽‍🤝‍👨🏾 👩🏽‍🤝‍👨🏿 👩🏾‍🤝‍👨🏻 👩🏾‍🤝‍👨🏼 👩🏾‍🤝‍👨🏽 👩🏾‍🤝‍👨🏿 👩🏿‍🤝‍👨🏻 👩🏿‍🤝‍👨🏼 👩🏿‍🤝‍👨🏽 👩🏿‍🤝‍👨🏾 👨🏻‍🤝‍👨🏼 👨🏻‍🤝‍👨🏽 👨🏻‍🤝‍👨🏾 👨🏻‍🤝‍👨🏿 👨🏼‍🤝‍👨🏻 👨🏼‍🤝‍👨🏽 👨🏼‍🤝‍👨🏾 👨🏼‍🤝‍👨🏿 👨🏽‍🤝‍👨🏻 👨🏽‍🤝‍👨🏼 👨🏽‍🤝‍👨🏾 👨🏽‍🤝‍👨🏿 👨🏾‍🤝‍👨🏻 👨🏾‍🤝‍👨🏼 👨🏾‍🤝‍👨🏽 👨🏾‍🤝‍👨🏿 👨🏿‍🤝‍👨🏻 👨🏿‍🤝‍👨🏼 👨🏿‍🤝‍👨🏽 👨🏿‍🤝‍👨🏾 💏 🧑🏻‍❤️‍💋‍🧑🏼 🧑🏻‍❤️‍💋‍🧑🏽 🧑🏻‍❤️‍💋‍🧑🏾 🧑🏻‍❤️‍💋‍🧑🏿 🧑🏼‍❤️‍💋‍🧑🏻 🧑🏼‍❤️‍💋‍🧑🏽 🧑🏼‍❤️‍💋‍🧑🏾 🧑🏼‍❤️‍💋‍🧑🏿 🧑🏽‍❤️‍💋‍🧑🏻 🧑🏽‍❤️‍💋‍🧑🏼 🧑🏽‍❤️‍💋‍🧑🏾 🧑🏽‍❤️‍💋‍🧑🏿 🧑🏾‍❤️‍💋‍🧑🏻 🧑🏾‍❤️‍💋‍🧑🏼 🧑🏾‍❤️‍💋‍🧑🏽 🧑🏾‍❤️‍💋‍🧑🏿 🧑🏿‍❤️‍💋‍🧑🏻 🧑🏿‍❤️‍💋‍🧑🏼 🧑🏿‍❤️‍💋‍🧑🏽 🧑🏿‍❤️‍💋‍🧑🏾 👩‍❤️‍💋‍👨 👩🏻‍❤️‍💋‍👨🏻 👩🏻‍❤️‍💋‍👨🏼 👩🏻‍❤️‍💋‍👨🏽 👩🏻‍❤️‍💋‍👨🏾 👩🏻‍❤️‍💋‍👨🏿 👩🏼‍❤️‍💋‍👨🏻 👩🏼‍❤️‍💋‍👨🏼 👩🏼‍❤️‍💋‍👨🏽 👩🏼‍❤️‍💋‍👨🏾 👩🏼‍❤️‍💋‍👨🏿 👩🏽‍❤️‍💋‍👨🏻 👩🏽‍❤️‍💋‍👨🏼 👩🏽‍❤️‍💋‍👨🏽 👩🏽‍❤️‍💋‍👨🏾 👩🏽‍❤️‍💋‍👨🏿 👩🏾‍❤️‍💋‍👨🏻 👩🏾‍❤️‍💋‍👨🏼 👩🏾‍❤️‍💋‍👨🏽 👩🏾‍❤️‍💋‍👨🏾 👩🏾‍❤️‍💋‍👨🏿 👩🏿‍❤️‍💋‍👨🏻 👩🏿‍❤️‍💋‍👨🏼 👩🏿‍❤️‍💋‍👨🏽 👩🏿‍❤️‍💋‍👨🏾 👩🏿‍❤️‍💋‍👨🏿 👨‍❤️‍💋‍👨 👨🏻‍❤️‍💋‍👨🏻 👨🏻‍❤️‍💋‍👨🏼 👨🏻‍❤️‍💋‍👨🏽 👨🏻‍❤️‍💋‍👨🏾 👨🏻‍❤️‍💋‍👨🏿 👨🏼‍❤️‍💋‍👨🏻 👨🏼‍❤️‍💋‍👨🏼 👨🏼‍❤️‍💋‍👨🏽 👨🏼‍❤️‍💋‍👨🏾 👨🏼‍❤️‍💋‍👨🏿 👨🏽‍❤️‍💋‍👨🏻 👨🏽‍❤️‍💋‍👨🏼 👨🏽‍❤️‍💋‍👨🏽 👨🏽‍❤️‍💋‍👨🏾 👨🏽‍❤️‍💋‍👨🏿 👨🏾‍❤️‍💋‍👨🏻 👨🏾‍❤️‍💋‍👨🏼 👨🏾‍❤️‍💋‍👨🏽 👨🏾‍❤️‍💋‍👨🏾 👨🏾‍❤️‍💋‍👨🏿 👨🏿‍❤️‍💋‍👨🏻 👨🏿‍❤️‍💋‍👨🏼 👨🏿‍❤️‍💋‍👨🏽 👨🏿‍❤️‍💋‍👨🏾 👨🏿‍❤️‍💋‍👨🏿 👩‍❤️‍💋‍👩 👩🏻‍❤️‍💋‍👩🏻 👩🏻‍❤️‍💋‍👩🏼 👩🏻‍❤️‍💋‍👩🏽 👩🏻‍❤️‍💋‍👩🏾 👩🏻‍❤️‍💋‍👩🏿 👩🏼‍❤️‍💋‍👩🏻 👩🏼‍❤️‍💋‍👩🏼 👩🏼‍❤️‍💋‍👩🏽 👩🏼‍❤️‍💋‍👩🏾 👩🏼‍❤️‍💋‍👩🏿 👩🏽‍❤️‍💋‍👩🏻 👩🏽‍❤️‍💋‍👩🏼 👩🏽‍❤️‍💋‍👩🏽 👩🏽‍❤️‍💋‍👩🏾 👩🏽‍❤️‍💋‍👩🏿 👩🏾‍❤️‍💋‍👩🏻 👩🏾‍❤️‍💋‍👩🏼 👩🏾‍❤️‍💋‍👩🏽 👩🏾‍❤️‍💋‍👩🏾 👩🏾‍❤️‍💋‍👩🏿 👩🏿‍❤️‍💋‍👩🏻 👩🏿‍❤️‍💋‍👩🏼 👩🏿‍❤️‍💋‍👩🏽 👩🏿‍❤️‍💋‍👩🏾 👩🏿‍❤️‍💋‍👩🏿 💑 🧑🏻‍❤️‍🧑🏼 🧑🏻‍❤️‍🧑🏽 🧑🏻‍❤️‍🧑🏾 🧑🏻‍❤️‍🧑🏿 🧑🏼‍❤️‍🧑🏻 🧑🏼‍❤️‍🧑🏽 🧑🏼‍❤️‍🧑🏾 🧑🏼‍❤️‍🧑🏿 🧑🏽‍❤️‍🧑🏻 🧑🏽‍❤️‍🧑🏼 🧑🏽‍❤️‍🧑🏾 🧑🏽‍❤️‍🧑🏿 🧑🏾‍❤️‍🧑🏻 🧑🏾‍❤️‍🧑🏼 🧑🏾‍❤️‍🧑🏽 🧑🏾‍❤️‍🧑🏿 🧑🏿‍❤️‍🧑🏻 🧑🏿‍❤️‍🧑🏼 🧑🏿‍❤️‍🧑🏽 🧑🏿‍❤️‍🧑🏾 👩‍❤️‍👨 👩🏻‍❤️‍👨🏻 👩🏻‍❤️‍👨🏼 👩🏻‍❤️‍👨🏽 👩🏻‍❤️‍👨🏾 👩🏻‍❤️‍👨🏿 👩🏼‍❤️‍👨🏻 👩🏼‍❤️‍👨🏼 👩🏼‍❤️‍👨🏽 👩🏼‍❤️‍👨🏾 👩🏼‍❤️‍👨🏿 👩🏽‍❤️‍👨🏻 👩🏽‍❤️‍👨🏼 👩🏽‍❤️‍👨🏽 👩🏽‍❤️‍👨🏾 👩🏽‍❤️‍👨🏿 👩🏾‍❤️‍👨🏻 👩🏾‍❤️‍👨🏼 👩🏾‍❤️‍👨🏽 👩🏾‍❤️‍👨🏾 👩🏾‍❤️‍👨🏿 👩🏿‍❤️‍👨🏻 👩🏿‍❤️‍👨🏼 👩🏿‍❤️‍👨🏽 👩🏿‍❤️‍👨🏾 👩🏿‍❤️‍👨🏿 👨‍❤️‍👨 👨🏻‍❤️‍👨🏻 👨🏻‍❤️‍👨🏼 👨🏻‍❤️‍👨🏽 👨🏻‍❤️‍👨🏾 👨🏻‍❤️‍👨🏿 👨🏼‍❤️‍👨🏻 👨🏼‍❤️‍👨🏼 👨🏼‍❤️‍👨🏽 👨🏼‍❤️‍👨🏾 👨🏼‍❤️‍👨🏿 👨🏽‍❤️‍👨🏻 👨🏽‍❤️‍👨🏼 👨🏽‍❤️‍👨🏽 👨🏽‍❤️‍👨🏾 👨🏽‍❤️‍👨🏿 👨🏾‍❤️‍👨🏻 👨🏾‍❤️‍👨🏼 👨🏾‍❤️‍👨🏽 👨🏾‍❤️‍👨🏾 👨🏾‍❤️‍👨🏿 👨🏿‍❤️‍👨🏻 👨🏿‍❤️‍👨🏼 👨🏿‍❤️‍👨🏽 👨🏿‍❤️‍👨🏾 👨🏿‍❤️‍👨🏿 👩‍❤️‍👩 👩🏻‍❤️‍👩🏻 👩🏻‍❤️‍👩🏼 👩🏻‍❤️‍👩🏽 👩🏻‍❤️‍👩🏾 👩🏻‍❤️‍👩🏿 👩🏼‍❤️‍👩🏻 👩🏼‍❤️‍👩🏼 👩🏼‍❤️‍👩🏽 👩🏼‍❤️‍👩🏾 👩🏼‍❤️‍👩🏿 👩🏽‍❤️‍👩🏻 👩🏽‍❤️‍👩🏼 👩🏽‍❤️‍👩🏽 👩🏽‍❤️‍👩🏾 👩🏽‍❤️‍👩🏿 👩🏾‍❤️‍👩🏻 👩🏾‍❤️‍👩🏼 👩🏾‍❤️‍👩🏽 👩🏾‍❤️‍👩🏾 👩🏾‍❤️‍👩🏿 👩🏿‍❤️‍👩🏻 👩🏿‍❤️‍👩🏼 👩🏿‍❤️‍👩🏽 👩🏿‍❤️‍👩🏾 👩🏿‍❤️‍👩🏿 👪 👨‍👩‍👦 👨‍👩‍👧 👨‍👩‍👧‍👦 👨‍👩‍👦‍👦 👨‍👩‍👧‍👧 👨‍👨‍👦 👨‍👨‍👧 👨‍👨‍👧‍👦 👨‍👨‍👦‍👦 👨‍👨‍👧‍👧 👩‍👩‍👦 👩‍👩‍👧 👩‍👩‍👧‍👦 👩‍👩‍👦‍👦 👩‍👩‍👧‍👧 👨‍👦 👨‍👦‍👦 👨‍👧 👨‍👧‍👦 👨‍👧‍👧 👩‍👦 👩‍👦‍👦 👩‍👧 👩‍👧‍👦 👩‍👧‍👧 🐕‍🦺 🐈‍⬛ 🐻‍❄️ 🐦‍⬛ 🏳️‍🌈 🏳️‍⚧️ 🏴‍☠️ </p>`,frontmatter:{hide:!1,srcSequence:"./pages/04-quirks.md"},note:`Full reference: https://unicode.org/Public/emoji/15.0/
ZJW: zwidge https://unicode.org/emoji/charts/emoji-zwj-sequences.html`,index:54,start:211,end:221,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/04-quirks.md",raw:`
## Emoji Composition

<p style="font-size: 65%; line-height: 1rem;"> 😶‍🌫️ 😮‍💨 😵‍💫 ❤️‍🔥 ❤️‍🩹 👁️‍🗨️ 🫱🏻‍🫲🏼 🫱🏻‍🫲🏽 🫱🏻‍🫲🏾 🫱🏻‍🫲🏿 🫱🏼‍🫲🏻 🫱🏼‍🫲🏽 🫱🏼‍🫲🏾 🫱🏼‍🫲🏿 🫱🏽‍🫲🏻 🫱🏽‍🫲🏼 🫱🏽‍🫲🏾 🫱🏽‍🫲🏿 🫱🏾‍🫲🏻 🫱🏾‍🫲🏼 🫱🏾‍🫲🏽 🫱🏾‍🫲🏿 🫱🏿‍🫲🏻 🫱🏿‍🫲🏼 🫱🏿‍🫲🏽 🫱🏿‍🫲🏾 🧔‍♂️ 🧔🏻‍♂️ 🧔🏼‍♂️ 🧔🏽‍♂️ 🧔🏾‍♂️ 🧔🏿‍♂️ 🧔‍♀️ 🧔🏻‍♀️ 🧔🏼‍♀️ 🧔🏽‍♀️ 🧔🏾‍♀️ 🧔🏿‍♀️ 👨‍🦰 👨🏻‍🦰 👨🏼‍🦰 👨🏽‍🦰 👨🏾‍🦰 👨🏿‍🦰 👨‍🦱 👨🏻‍🦱 👨🏼‍🦱 👨🏽‍🦱 👨🏾‍🦱 👨🏿‍🦱 👨‍🦳 👨🏻‍🦳 👨🏼‍🦳 👨🏽‍🦳 👨🏾‍🦳 👨🏿‍🦳 👨‍🦲 👨🏻‍🦲 👨🏼‍🦲 👨🏽‍🦲 👨🏾‍🦲 👨🏿‍🦲 👩‍🦰 👩🏻‍🦰 👩🏼‍🦰 👩🏽‍🦰 👩🏾‍🦰 👩🏿‍🦰 🧑‍🦰 🧑🏻‍🦰 🧑🏼‍🦰 🧑🏽‍🦰 🧑🏾‍🦰 🧑🏿‍🦰 👩‍🦱 👩🏻‍🦱 👩🏼‍🦱 👩🏽‍🦱 👩🏾‍🦱 👩🏿‍🦱 🧑‍🦱 🧑🏻‍🦱 🧑🏼‍🦱 🧑🏽‍🦱 🧑🏾‍🦱 🧑🏿‍🦱 👩‍🦳 👩🏻‍🦳 👩🏼‍🦳 👩🏽‍🦳 👩🏾‍🦳 👩🏿‍🦳 🧑‍🦳 🧑🏻‍🦳 🧑🏼‍🦳 🧑🏽‍🦳 🧑🏾‍🦳 🧑🏿‍🦳 👩‍🦲 👩🏻‍🦲 👩🏼‍🦲 👩🏽‍🦲 👩🏾‍🦲 👩🏿‍🦲 🧑‍🦲 🧑🏻‍🦲 🧑🏼‍🦲 🧑🏽‍🦲 🧑🏾‍🦲 🧑🏿‍🦲 👱‍♀️ 👱🏻‍♀️ 👱🏼‍♀️ 👱🏽‍♀️ 👱🏾‍♀️ 👱🏿‍♀️ 👱‍♂️ 👱🏻‍♂️ 👱🏼‍♂️ 👱🏽‍♂️ 👱🏾‍♂️ 👱🏿‍♂️ 🙍‍♂️ 🙍🏻‍♂️ 🙍🏼‍♂️ 🙍🏽‍♂️ 🙍🏾‍♂️ 🙍🏿‍♂️ 🙍‍♀️ 🙍🏻‍♀️ 🙍🏼‍♀️ 🙍🏽‍♀️ 🙍🏾‍♀️ 🙍🏿‍♀️ 🙎‍♂️ 🙎🏻‍♂️ 🙎🏼‍♂️ 🙎🏽‍♂️ 🙎🏾‍♂️ 🙎🏿‍♂️ 🙎‍♀️ 🙎🏻‍♀️ 🙎🏼‍♀️ 🙎🏽‍♀️ 🙎🏾‍♀️ 🙎🏿‍♀️ 🙅‍♂️ 🙅🏻‍♂️ 🙅🏼‍♂️ 🙅🏽‍♂️ 🙅🏾‍♂️ 🙅🏿‍♂️ 🙅‍♀️ 🙅🏻‍♀️ 🙅🏼‍♀️ 🙅🏽‍♀️ 🙅🏾‍♀️ 🙅🏿‍♀️ 🙆‍♂️ 🙆🏻‍♂️ 🙆🏼‍♂️ 🙆🏽‍♂️ 🙆🏾‍♂️ 🙆🏿‍♂️ 🙆‍♀️ 🙆🏻‍♀️ 🙆🏼‍♀️ 🙆🏽‍♀️ 🙆🏾‍♀️ 🙆🏿‍♀️ 💁‍♂️ 💁🏻‍♂️ 💁🏼‍♂️ 💁🏽‍♂️ 💁🏾‍♂️ 💁🏿‍♂️ 💁‍♀️ 💁🏻‍♀️ 💁🏼‍♀️ 💁🏽‍♀️ 💁🏾‍♀️ 💁🏿‍♀️ 🙋‍♂️ 🙋🏻‍♂️ 🙋🏼‍♂️ 🙋🏽‍♂️ 🙋🏾‍♂️ 🙋🏿‍♂️ 🙋‍♀️ 🙋🏻‍♀️ 🙋🏼‍♀️ 🙋🏽‍♀️ 🙋🏾‍♀️ 🙋🏿‍♀️ 🧏‍♂️ 🧏🏻‍♂️ 🧏🏼‍♂️ 🧏🏽‍♂️ 🧏🏾‍♂️ 🧏🏿‍♂️ 🧏‍♀️ 🧏🏻‍♀️ 🧏🏼‍♀️ 🧏🏽‍♀️ 🧏🏾‍♀️ 🧏🏿‍♀️ 🙇‍♂️ 🙇🏻‍♂️ 🙇🏼‍♂️ 🙇🏽‍♂️ 🙇🏾‍♂️ 🙇🏿‍♂️ 🙇‍♀️ 🙇🏻‍♀️ 🙇🏼‍♀️ 🙇🏽‍♀️ 🙇🏾‍♀️ 🙇🏿‍♀️ 🤦‍♂️ 🤦🏻‍♂️ 🤦🏼‍♂️ 🤦🏽‍♂️ 🤦🏾‍♂️ 🤦🏿‍♂️ 🤦‍♀️ 🤦🏻‍♀️ 🤦🏼‍♀️ 🤦🏽‍♀️ 🤦🏾‍♀️ 🤦🏿‍♀️ 🤷‍♂️ 🤷🏻‍♂️ 🤷🏼‍♂️ 🤷🏽‍♂️ 🤷🏾‍♂️ 🤷🏿‍♂️ 🤷‍♀️ 🤷🏻‍♀️ 🤷🏼‍♀️ 🤷🏽‍♀️ 🤷🏾‍♀️ 🤷🏿‍♀️ 🧑‍⚕️ 🧑🏻‍⚕️ 🧑🏼‍⚕️ 🧑🏽‍⚕️ 🧑🏾‍⚕️ 🧑🏿‍⚕️ 👨‍⚕️ 👨🏻‍⚕️ 👨🏼‍⚕️ 👨🏽‍⚕️ 👨🏾‍⚕️ 👨🏿‍⚕️ 👩‍⚕️ 👩🏻‍⚕️ 👩🏼‍⚕️ 👩🏽‍⚕️ 👩🏾‍⚕️ 👩🏿‍⚕️ 🧑‍🎓 🧑🏻‍🎓 🧑🏼‍🎓 🧑🏽‍🎓 🧑🏾‍🎓 🧑🏿‍🎓 👨‍🎓 👨🏻‍🎓 👨🏼‍🎓 👨🏽‍🎓 👨🏾‍🎓 👨🏿‍🎓 👩‍🎓 👩🏻‍🎓 👩🏼‍🎓 👩🏽‍🎓 👩🏾‍🎓 👩🏿‍🎓 🧑‍🏫 🧑🏻‍🏫 🧑🏼‍🏫 🧑🏽‍🏫 🧑🏾‍🏫 🧑🏿‍🏫 👨‍🏫 👨🏻‍🏫 👨🏼‍🏫 👨🏽‍🏫 👨🏾‍🏫 👨🏿‍🏫 👩‍🏫 👩🏻‍🏫 👩🏼‍🏫 👩🏽‍🏫 👩🏾‍🏫 👩🏿‍🏫 🧑‍⚖️ 🧑🏻‍⚖️ 🧑🏼‍⚖️ 🧑🏽‍⚖️ 🧑🏾‍⚖️ 🧑🏿‍⚖️ 👨‍⚖️ 👨🏻‍⚖️ 👨🏼‍⚖️ 👨🏽‍⚖️ 👨🏾‍⚖️ 👨🏿‍⚖️ 👩‍⚖️ 👩🏻‍⚖️ 👩🏼‍⚖️ 👩🏽‍⚖️ 👩🏾‍⚖️ 👩🏿‍⚖️ 🧑‍🌾 🧑🏻‍🌾 🧑🏼‍🌾 🧑🏽‍🌾 🧑🏾‍🌾 🧑🏿‍🌾 👨‍🌾 👨🏻‍🌾 👨🏼‍🌾 👨🏽‍🌾 👨🏾‍🌾 👨🏿‍🌾 👩‍🌾 👩🏻‍🌾 👩🏼‍🌾 👩🏽‍🌾 👩🏾‍🌾 👩🏿‍🌾 🧑‍🍳 🧑🏻‍🍳 🧑🏼‍🍳 🧑🏽‍🍳 🧑🏾‍🍳 🧑🏿‍🍳 👨‍🍳 👨🏻‍🍳 👨🏼‍🍳 👨🏽‍🍳 👨🏾‍🍳 👨🏿‍🍳 👩‍🍳 👩🏻‍🍳 👩🏼‍🍳 👩🏽‍🍳 👩🏾‍🍳 👩🏿‍🍳 🧑‍🔧 🧑🏻‍🔧 🧑🏼‍🔧 🧑🏽‍🔧 🧑🏾‍🔧 🧑🏿‍🔧 👨‍🔧 👨🏻‍🔧 👨🏼‍🔧 👨🏽‍🔧 👨🏾‍🔧 👨🏿‍🔧 👩‍🔧 👩🏻‍🔧 👩🏼‍🔧 👩🏽‍🔧 👩🏾‍🔧 👩🏿‍🔧 🧑‍🏭 🧑🏻‍🏭 🧑🏼‍🏭 🧑🏽‍🏭 🧑🏾‍🏭 🧑🏿‍🏭 👨‍🏭 👨🏻‍🏭 👨🏼‍🏭 👨🏽‍🏭 👨🏾‍🏭 👨🏿‍🏭 👩‍🏭 👩🏻‍🏭 👩🏼‍🏭 👩🏽‍🏭 👩🏾‍🏭 👩🏿‍🏭 🧑‍💼 🧑🏻‍💼 🧑🏼‍💼 🧑🏽‍💼 🧑🏾‍💼 🧑🏿‍💼 👨‍💼 👨🏻‍💼 👨🏼‍💼 👨🏽‍💼 👨🏾‍💼 👨🏿‍💼 👩‍💼 👩🏻‍💼 👩🏼‍💼 👩🏽‍💼 👩🏾‍💼 👩🏿‍💼 🧑‍🔬 🧑🏻‍🔬 🧑🏼‍🔬 🧑🏽‍🔬 🧑🏾‍🔬 🧑🏿‍🔬 👨‍🔬 👨🏻‍🔬 👨🏼‍🔬 👨🏽‍🔬 👨🏾‍🔬 👨🏿‍🔬 👩‍🔬 👩🏻‍🔬 👩🏼‍🔬 👩🏽‍🔬 👩🏾‍🔬 👩🏿‍🔬 🧑‍💻 🧑🏻‍💻 🧑🏼‍💻 🧑🏽‍💻 🧑🏾‍💻 🧑🏿‍💻 👨‍💻 👨🏻‍💻 👨🏼‍💻 👨🏽‍💻 👨🏾‍💻 👨🏿‍💻 👩‍💻 👩🏻‍💻 👩🏼‍💻 👩🏽‍💻 👩🏾‍💻 👩🏿‍💻 🧑‍🎤 🧑🏻‍🎤 🧑🏼‍🎤 🧑🏽‍🎤 🧑🏾‍🎤 🧑🏿‍🎤 👨‍🎤 👨🏻‍🎤 👨🏼‍🎤 👨🏽‍🎤 👨🏾‍🎤 👨🏿‍🎤 👩‍🎤 👩🏻‍🎤 👩🏼‍🎤 👩🏽‍🎤 👩🏾‍🎤 👩🏿‍🎤 🧑‍🎨 🧑🏻‍🎨 🧑🏼‍🎨 🧑🏽‍🎨 🧑🏾‍🎨 🧑🏿‍🎨 👨‍🎨 👨🏻‍🎨 👨🏼‍🎨 👨🏽‍🎨 👨🏾‍🎨 👨🏿‍🎨 👩‍🎨 👩🏻‍🎨 👩🏼‍🎨 👩🏽‍🎨 👩🏾‍🎨 👩🏿‍🎨 🧑‍✈️ 🧑🏻‍✈️ 🧑🏼‍✈️ 🧑🏽‍✈️ 🧑🏾‍✈️ 🧑🏿‍✈️ 👨‍✈️ 👨🏻‍✈️ 👨🏼‍✈️ 👨🏽‍✈️ 👨🏾‍✈️ 👨🏿‍✈️ 👩‍✈️ 👩🏻‍✈️ 👩🏼‍✈️ 👩🏽‍✈️ 👩🏾‍✈️ 👩🏿‍✈️ 🧑‍🚀 🧑🏻‍🚀 🧑🏼‍🚀 🧑🏽‍🚀 🧑🏾‍🚀 🧑🏿‍🚀 👨‍🚀 👨🏻‍🚀 👨🏼‍🚀 👨🏽‍🚀 👨🏾‍🚀 👨🏿‍🚀 👩‍🚀 👩🏻‍🚀 👩🏼‍🚀 👩🏽‍🚀 👩🏾‍🚀 👩🏿‍🚀 🧑‍🚒 🧑🏻‍🚒 🧑🏼‍🚒 🧑🏽‍🚒 🧑🏾‍🚒 🧑🏿‍🚒 👨‍🚒 👨🏻‍🚒 👨🏼‍🚒 👨🏽‍🚒 👨🏾‍🚒 👨🏿‍🚒 👩‍🚒 👩🏻‍🚒 👩🏼‍🚒 👩🏽‍🚒 👩🏾‍🚒 👩🏿‍🚒 👮‍♂️ 👮🏻‍♂️ 👮🏼‍♂️ 👮🏽‍♂️ 👮🏾‍♂️ 👮🏿‍♂️ 👮‍♀️ 👮🏻‍♀️ 👮🏼‍♀️ 👮🏽‍♀️ 👮🏾‍♀️ 👮🏿‍♀️ 🕵️‍♂️ 🕵🏻‍♂️ 🕵🏼‍♂️ 🕵🏽‍♂️ 🕵🏾‍♂️ 🕵🏿‍♂️ 🕵️‍♀️ 🕵🏻‍♀️ 🕵🏼‍♀️ 🕵🏽‍♀️ 🕵🏾‍♀️ 🕵🏿‍♀️ 💂‍♂️ 💂🏻‍♂️ 💂🏼‍♂️ 💂🏽‍♂️ 💂🏾‍♂️ 💂🏿‍♂️ 💂‍♀️ 💂🏻‍♀️ 💂🏼‍♀️ 💂🏽‍♀️ 💂🏾‍♀️ 💂🏿‍♀️ 👷‍♂️ 👷🏻‍♂️ 👷🏼‍♂️ 👷🏽‍♂️ 👷🏾‍♂️ 👷🏿‍♂️ 👷‍♀️ 👷🏻‍♀️ 👷🏼‍♀️ 👷🏽‍♀️ 👷🏾‍♀️ 👷🏿‍♀️ 👳‍♂️ 👳🏻‍♂️ 👳🏼‍♂️ 👳🏽‍♂️ 👳🏾‍♂️ 👳🏿‍♂️ 👳‍♀️ 👳🏻‍♀️ 👳🏼‍♀️ 👳🏽‍♀️ 👳🏾‍♀️ 👳🏿‍♀️ 🤵‍♂️ 🤵🏻‍♂️ 🤵🏼‍♂️ 🤵🏽‍♂️ 🤵🏾‍♂️ 🤵🏿‍♂️ 🤵‍♀️ 🤵🏻‍♀️ 🤵🏼‍♀️ 🤵🏽‍♀️ 🤵🏾‍♀️ 🤵🏿‍♀️ 👰‍♂️ 👰🏻‍♂️ 👰🏼‍♂️ 👰🏽‍♂️ 👰🏾‍♂️ 👰🏿‍♂️ 👰‍♀️ 👰🏻‍♀️ 👰🏼‍♀️ 👰🏽‍♀️ 👰🏾‍♀️ 👰🏿‍♀️ 👩‍🍼 👩🏻‍🍼 👩🏼‍🍼 👩🏽‍🍼 👩🏾‍🍼 👩🏿‍🍼 👨‍🍼 👨🏻‍🍼 👨🏼‍🍼 👨🏽‍🍼 👨🏾‍🍼 👨🏿‍🍼 🧑‍🍼 🧑🏻‍🍼 🧑🏼‍🍼 🧑🏽‍🍼 🧑🏾‍🍼 🧑🏿‍🍼 🧑‍🎄 🧑🏻‍🎄 🧑🏼‍🎄 🧑🏽‍🎄 🧑🏾‍🎄 🧑🏿‍🎄 🦸‍♂️ 🦸🏻‍♂️ 🦸🏼‍♂️ 🦸🏽‍♂️ 🦸🏾‍♂️ 🦸🏿‍♂️ 🦸‍♀️ 🦸🏻‍♀️ 🦸🏼‍♀️ 🦸🏽‍♀️ 🦸🏾‍♀️ 🦸🏿‍♀️ 🦹‍♂️ 🦹🏻‍♂️ 🦹🏼‍♂️ 🦹🏽‍♂️ 🦹🏾‍♂️ 🦹🏿‍♂️ 🦹‍♀️ 🦹🏻‍♀️ 🦹🏼‍♀️ 🦹🏽‍♀️ 🦹🏾‍♀️ 🦹🏿‍♀️ 🧙‍♂️ 🧙🏻‍♂️ 🧙🏼‍♂️ 🧙🏽‍♂️ 🧙🏾‍♂️ 🧙🏿‍♂️ 🧙‍♀️ 🧙🏻‍♀️ 🧙🏼‍♀️ 🧙🏽‍♀️ 🧙🏾‍♀️ 🧙🏿‍♀️ 🧚‍♂️ 🧚🏻‍♂️ 🧚🏼‍♂️ 🧚🏽‍♂️ 🧚🏾‍♂️ 🧚🏿‍♂️ 🧚‍♀️ 🧚🏻‍♀️ 🧚🏼‍♀️ 🧚🏽‍♀️ 🧚🏾‍♀️ 🧚🏿‍♀️ 🧛‍♂️ 🧛🏻‍♂️ 🧛🏼‍♂️ 🧛🏽‍♂️ 🧛🏾‍♂️ 🧛🏿‍♂️ 🧛‍♀️ 🧛🏻‍♀️ 🧛🏼‍♀️ 🧛🏽‍♀️ 🧛🏾‍♀️ 🧛🏿‍♀️ 🧜‍♂️ 🧜🏻‍♂️ 🧜🏼‍♂️ 🧜🏽‍♂️ 🧜🏾‍♂️ 🧜🏿‍♂️ 🧜‍♀️ 🧜🏻‍♀️ 🧜🏼‍♀️ 🧜🏽‍♀️ 🧜🏾‍♀️ 🧜🏿‍♀️ 🧝‍♂️ 🧝🏻‍♂️ 🧝🏼‍♂️ 🧝🏽‍♂️ 🧝🏾‍♂️ 🧝🏿‍♂️ 🧝‍♀️ 🧝🏻‍♀️ 🧝🏼‍♀️ 🧝🏽‍♀️ 🧝🏾‍♀️ 🧝🏿‍♀️ 🧞‍♂️ 🧞‍♀️ 🧟‍♂️ 🧟‍♀️ 💆‍♂️ 💆🏻‍♂️ 💆🏼‍♂️ 💆🏽‍♂️ 💆🏾‍♂️ 💆🏿‍♂️ 💆‍♀️ 💆🏻‍♀️ 💆🏼‍♀️ 💆🏽‍♀️ 💆🏾‍♀️ 💆🏿‍♀️ 💇‍♂️ 💇🏻‍♂️ 💇🏼‍♂️ 💇🏽‍♂️ 💇🏾‍♂️ 💇🏿‍♂️ 💇‍♀️ 💇🏻‍♀️ 💇🏼‍♀️ 💇🏽‍♀️ 💇🏾‍♀️ 💇🏿‍♀️ 🚶‍♂️ 🚶🏻‍♂️ 🚶🏼‍♂️ 🚶🏽‍♂️ 🚶🏾‍♂️ 🚶🏿‍♂️ 🚶‍♀️ 🚶🏻‍♀️ 🚶🏼‍♀️ 🚶🏽‍♀️ 🚶🏾‍♀️ 🚶🏿‍♀️ 🧍‍♂️ 🧍🏻‍♂️ 🧍🏼‍♂️ 🧍🏽‍♂️ 🧍🏾‍♂️ 🧍🏿‍♂️ 🧍‍♀️ 🧍🏻‍♀️ 🧍🏼‍♀️ 🧍🏽‍♀️ 🧍🏾‍♀️ 🧍🏿‍♀️ 🧎‍♂️ 🧎🏻‍♂️ 🧎🏼‍♂️ 🧎🏽‍♂️ 🧎🏾‍♂️ 🧎🏿‍♂️ 🧎‍♀️ 🧎🏻‍♀️ 🧎🏼‍♀️ 🧎🏽‍♀️ 🧎🏾‍♀️ 🧎🏿‍♀️ 🧑‍🦯 🧑🏻‍🦯 🧑🏼‍🦯 🧑🏽‍🦯 🧑🏾‍🦯 🧑🏿‍🦯 👨‍🦯 👨🏻‍🦯 👨🏼‍🦯 👨🏽‍🦯 👨🏾‍🦯 👨🏿‍🦯 👩‍🦯 👩🏻‍🦯 👩🏼‍🦯 👩🏽‍🦯 👩🏾‍🦯 👩🏿‍🦯 🧑‍🦼 🧑🏻‍🦼 🧑🏼‍🦼 🧑🏽‍🦼 🧑🏾‍🦼 🧑🏿‍🦼 👨‍🦼 👨🏻‍🦼 👨🏼‍🦼 👨🏽‍🦼 👨🏾‍🦼 👨🏿‍🦼 👩‍🦼 👩🏻‍🦼 👩🏼‍🦼 👩🏽‍🦼 👩🏾‍🦼 👩🏿‍🦼 🧑‍🦽 🧑🏻‍🦽 🧑🏼‍🦽 🧑🏽‍🦽 🧑🏾‍🦽 🧑🏿‍🦽 👨‍🦽 👨🏻‍🦽 👨🏼‍🦽 👨🏽‍🦽 👨🏾‍🦽 👨🏿‍🦽 👩‍🦽 👩🏻‍🦽 👩🏼‍🦽 👩🏽‍🦽 👩🏾‍🦽 👩🏿‍🦽 🏃‍♂️ 🏃🏻‍♂️ 🏃🏼‍♂️ 🏃🏽‍♂️ 🏃🏾‍♂️ 🏃🏿‍♂️ 🏃‍♀️ 🏃🏻‍♀️ 🏃🏼‍♀️ 🏃🏽‍♀️ 🏃🏾‍♀️ 🏃🏿‍♀️ 👯‍♂️ 👯‍♀️ 🧖‍♂️ 🧖🏻‍♂️ 🧖🏼‍♂️ 🧖🏽‍♂️ 🧖🏾‍♂️ 🧖🏿‍♂️ 🧖‍♀️ 🧖🏻‍♀️ 🧖🏼‍♀️ 🧖🏽‍♀️ 🧖🏾‍♀️ 🧖🏿‍♀️ 🧗‍♂️ 🧗🏻‍♂️ 🧗🏼‍♂️ 🧗🏽‍♂️ 🧗🏾‍♂️ 🧗🏿‍♂️ 🧗‍♀️ 🧗🏻‍♀️ 🧗🏼‍♀️ 🧗🏽‍♀️ 🧗🏾‍♀️ 🧗🏿‍♀️ 🏌️‍♂️ 🏌🏻‍♂️ 🏌🏼‍♂️ 🏌🏽‍♂️ 🏌🏾‍♂️ 🏌🏿‍♂️ 🏌️‍♀️ 🏌🏻‍♀️ 🏌🏼‍♀️ 🏌🏽‍♀️ 🏌🏾‍♀️ 🏌🏿‍♀️ 🏄‍♂️ 🏄🏻‍♂️ 🏄🏼‍♂️ 🏄🏽‍♂️ 🏄🏾‍♂️ 🏄🏿‍♂️ 🏄‍♀️ 🏄🏻‍♀️ 🏄🏼‍♀️ 🏄🏽‍♀️ 🏄🏾‍♀️ 🏄🏿‍♀️ 🚣‍♂️ 🚣🏻‍♂️ 🚣🏼‍♂️ 🚣🏽‍♂️ 🚣🏾‍♂️ 🚣🏿‍♂️ 🚣‍♀️ 🚣🏻‍♀️ 🚣🏼‍♀️ 🚣🏽‍♀️ 🚣🏾‍♀️ 🚣🏿‍♀️ 🏊‍♂️ 🏊🏻‍♂️ 🏊🏼‍♂️ 🏊🏽‍♂️ 🏊🏾‍♂️ 🏊🏿‍♂️ 🏊‍♀️ 🏊🏻‍♀️ 🏊🏼‍♀️ 🏊🏽‍♀️ 🏊🏾‍♀️ 🏊🏿‍♀️ ⛹️‍♂️ ⛹🏻‍♂️ ⛹🏼‍♂️ ⛹🏽‍♂️ ⛹🏾‍♂️ ⛹🏿‍♂️ ⛹️‍♀️ ⛹🏻‍♀️ ⛹🏼‍♀️ ⛹🏽‍♀️ ⛹🏾‍♀️ ⛹🏿‍♀️ 🏋️‍♂️ 🏋🏻‍♂️ 🏋🏼‍♂️ 🏋🏽‍♂️ 🏋🏾‍♂️ 🏋🏿‍♂️ 🏋️‍♀️ 🏋🏻‍♀️ 🏋🏼‍♀️ 🏋🏽‍♀️ 🏋🏾‍♀️ 🏋🏿‍♀️ 🚴‍♂️ 🚴🏻‍♂️ 🚴🏼‍♂️ 🚴🏽‍♂️ 🚴🏾‍♂️ 🚴🏿‍♂️ 🚴‍♀️ 🚴🏻‍♀️ 🚴🏼‍♀️ 🚴🏽‍♀️ 🚴🏾‍♀️ 🚴🏿‍♀️ 🚵‍♂️ 🚵🏻‍♂️ 🚵🏼‍♂️ 🚵🏽‍♂️ 🚵🏾‍♂️ 🚵🏿‍♂️ 🚵‍♀️ 🚵🏻‍♀️ 🚵🏼‍♀️ 🚵🏽‍♀️ 🚵🏾‍♀️ 🚵🏿‍♀️ 🤸‍♂️ 🤸🏻‍♂️ 🤸🏼‍♂️ 🤸🏽‍♂️ 🤸🏾‍♂️ 🤸🏿‍♂️ 🤸‍♀️ 🤸🏻‍♀️ 🤸🏼‍♀️ 🤸🏽‍♀️ 🤸🏾‍♀️ 🤸🏿‍♀️ 🤼‍♂️ 🤼‍♀️ 🤽‍♂️ 🤽🏻‍♂️ 🤽🏼‍♂️ 🤽🏽‍♂️ 🤽🏾‍♂️ 🤽🏿‍♂️ 🤽‍♀️ 🤽🏻‍♀️ 🤽🏼‍♀️ 🤽🏽‍♀️ 🤽🏾‍♀️ 🤽🏿‍♀️ 🤾‍♂️ 🤾🏻‍♂️ 🤾🏼‍♂️ 🤾🏽‍♂️ 🤾🏾‍♂️ 🤾🏿‍♂️ 🤾‍♀️ 🤾🏻‍♀️ 🤾🏼‍♀️ 🤾🏽‍♀️ 🤾🏾‍♀️ 🤾🏿‍♀️ 🤹‍♂️ 🤹🏻‍♂️ 🤹🏼‍♂️ 🤹🏽‍♂️ 🤹🏾‍♂️ 🤹🏿‍♂️ 🤹‍♀️ 🤹🏻‍♀️ 🤹🏼‍♀️ 🤹🏽‍♀️ 🤹🏾‍♀️ 🤹🏿‍♀️ 🧘‍♂️ 🧘🏻‍♂️ 🧘🏼‍♂️ 🧘🏽‍♂️ 🧘🏾‍♂️ 🧘🏿‍♂️ 🧘‍♀️ 🧘🏻‍♀️ 🧘🏼‍♀️ 🧘🏽‍♀️ 🧘🏾‍♀️ 🧘🏿‍♀️ 🧑‍🤝‍🧑 🧑🏻‍🤝‍🧑🏻 🧑🏻‍🤝‍🧑🏼 🧑🏻‍🤝‍🧑🏽 🧑🏻‍🤝‍🧑🏾 🧑🏻‍🤝‍🧑🏿 🧑🏼‍🤝‍🧑🏻 🧑🏼‍🤝‍🧑🏼 🧑🏼‍🤝‍🧑🏽 🧑🏼‍🤝‍🧑🏾 🧑🏼‍🤝‍🧑🏿 🧑🏽‍🤝‍🧑🏻 🧑🏽‍🤝‍🧑🏼 🧑🏽‍🤝‍🧑🏽 🧑🏽‍🤝‍🧑🏾 🧑🏽‍🤝‍🧑🏿 🧑🏾‍🤝‍🧑🏻 🧑🏾‍🤝‍🧑🏼 🧑🏾‍🤝‍🧑🏽 🧑🏾‍🤝‍🧑🏾 🧑🏾‍🤝‍🧑🏿 🧑🏿‍🤝‍🧑🏻 🧑🏿‍🤝‍🧑🏼 🧑🏿‍🤝‍🧑🏽 🧑🏿‍🤝‍🧑🏾 🧑🏿‍🤝‍🧑🏿 👩🏻‍🤝‍👩🏼 👩🏻‍🤝‍👩🏽 👩🏻‍🤝‍👩🏾 👩🏻‍🤝‍👩🏿 👩🏼‍🤝‍👩🏻 👩🏼‍🤝‍👩🏽 👩🏼‍🤝‍👩🏾 👩🏼‍🤝‍👩🏿 👩🏽‍🤝‍👩🏻 👩🏽‍🤝‍👩🏼 👩🏽‍🤝‍👩🏾 👩🏽‍🤝‍👩🏿 👩🏾‍🤝‍👩🏻 👩🏾‍🤝‍👩🏼 👩🏾‍🤝‍👩🏽 👩🏾‍🤝‍👩🏿 👩🏿‍🤝‍👩🏻 👩🏿‍🤝‍👩🏼 👩🏿‍🤝‍👩🏽 👩🏿‍🤝‍👩🏾 👩🏻‍🤝‍👨🏼 👩🏻‍🤝‍👨🏽 👩🏻‍🤝‍👨🏾 👩🏻‍🤝‍👨🏿 👩🏼‍🤝‍👨🏻 👩🏼‍🤝‍👨🏽 👩🏼‍🤝‍👨🏾 👩🏼‍🤝‍👨🏿 👩🏽‍🤝‍👨🏻 👩🏽‍🤝‍👨🏼 👩🏽‍🤝‍👨🏾 👩🏽‍🤝‍👨🏿 👩🏾‍🤝‍👨🏻 👩🏾‍🤝‍👨🏼 👩🏾‍🤝‍👨🏽 👩🏾‍🤝‍👨🏿 👩🏿‍🤝‍👨🏻 👩🏿‍🤝‍👨🏼 👩🏿‍🤝‍👨🏽 👩🏿‍🤝‍👨🏾 👨🏻‍🤝‍👨🏼 👨🏻‍🤝‍👨🏽 👨🏻‍🤝‍👨🏾 👨🏻‍🤝‍👨🏿 👨🏼‍🤝‍👨🏻 👨🏼‍🤝‍👨🏽 👨🏼‍🤝‍👨🏾 👨🏼‍🤝‍👨🏿 👨🏽‍🤝‍👨🏻 👨🏽‍🤝‍👨🏼 👨🏽‍🤝‍👨🏾 👨🏽‍🤝‍👨🏿 👨🏾‍🤝‍👨🏻 👨🏾‍🤝‍👨🏼 👨🏾‍🤝‍👨🏽 👨🏾‍🤝‍👨🏿 👨🏿‍🤝‍👨🏻 👨🏿‍🤝‍👨🏼 👨🏿‍🤝‍👨🏽 👨🏿‍🤝‍👨🏾 💏 🧑🏻‍❤️‍💋‍🧑🏼 🧑🏻‍❤️‍💋‍🧑🏽 🧑🏻‍❤️‍💋‍🧑🏾 🧑🏻‍❤️‍💋‍🧑🏿 🧑🏼‍❤️‍💋‍🧑🏻 🧑🏼‍❤️‍💋‍🧑🏽 🧑🏼‍❤️‍💋‍🧑🏾 🧑🏼‍❤️‍💋‍🧑🏿 🧑🏽‍❤️‍💋‍🧑🏻 🧑🏽‍❤️‍💋‍🧑🏼 🧑🏽‍❤️‍💋‍🧑🏾 🧑🏽‍❤️‍💋‍🧑🏿 🧑🏾‍❤️‍💋‍🧑🏻 🧑🏾‍❤️‍💋‍🧑🏼 🧑🏾‍❤️‍💋‍🧑🏽 🧑🏾‍❤️‍💋‍🧑🏿 🧑🏿‍❤️‍💋‍🧑🏻 🧑🏿‍❤️‍💋‍🧑🏼 🧑🏿‍❤️‍💋‍🧑🏽 🧑🏿‍❤️‍💋‍🧑🏾 👩‍❤️‍💋‍👨 👩🏻‍❤️‍💋‍👨🏻 👩🏻‍❤️‍💋‍👨🏼 👩🏻‍❤️‍💋‍👨🏽 👩🏻‍❤️‍💋‍👨🏾 👩🏻‍❤️‍💋‍👨🏿 👩🏼‍❤️‍💋‍👨🏻 👩🏼‍❤️‍💋‍👨🏼 👩🏼‍❤️‍💋‍👨🏽 👩🏼‍❤️‍💋‍👨🏾 👩🏼‍❤️‍💋‍👨🏿 👩🏽‍❤️‍💋‍👨🏻 👩🏽‍❤️‍💋‍👨🏼 👩🏽‍❤️‍💋‍👨🏽 👩🏽‍❤️‍💋‍👨🏾 👩🏽‍❤️‍💋‍👨🏿 👩🏾‍❤️‍💋‍👨🏻 👩🏾‍❤️‍💋‍👨🏼 👩🏾‍❤️‍💋‍👨🏽 👩🏾‍❤️‍💋‍👨🏾 👩🏾‍❤️‍💋‍👨🏿 👩🏿‍❤️‍💋‍👨🏻 👩🏿‍❤️‍💋‍👨🏼 👩🏿‍❤️‍💋‍👨🏽 👩🏿‍❤️‍💋‍👨🏾 👩🏿‍❤️‍💋‍👨🏿 👨‍❤️‍💋‍👨 👨🏻‍❤️‍💋‍👨🏻 👨🏻‍❤️‍💋‍👨🏼 👨🏻‍❤️‍💋‍👨🏽 👨🏻‍❤️‍💋‍👨🏾 👨🏻‍❤️‍💋‍👨🏿 👨🏼‍❤️‍💋‍👨🏻 👨🏼‍❤️‍💋‍👨🏼 👨🏼‍❤️‍💋‍👨🏽 👨🏼‍❤️‍💋‍👨🏾 👨🏼‍❤️‍💋‍👨🏿 👨🏽‍❤️‍💋‍👨🏻 👨🏽‍❤️‍💋‍👨🏼 👨🏽‍❤️‍💋‍👨🏽 👨🏽‍❤️‍💋‍👨🏾 👨🏽‍❤️‍💋‍👨🏿 👨🏾‍❤️‍💋‍👨🏻 👨🏾‍❤️‍💋‍👨🏼 👨🏾‍❤️‍💋‍👨🏽 👨🏾‍❤️‍💋‍👨🏾 👨🏾‍❤️‍💋‍👨🏿 👨🏿‍❤️‍💋‍👨🏻 👨🏿‍❤️‍💋‍👨🏼 👨🏿‍❤️‍💋‍👨🏽 👨🏿‍❤️‍💋‍👨🏾 👨🏿‍❤️‍💋‍👨🏿 👩‍❤️‍💋‍👩 👩🏻‍❤️‍💋‍👩🏻 👩🏻‍❤️‍💋‍👩🏼 👩🏻‍❤️‍💋‍👩🏽 👩🏻‍❤️‍💋‍👩🏾 👩🏻‍❤️‍💋‍👩🏿 👩🏼‍❤️‍💋‍👩🏻 👩🏼‍❤️‍💋‍👩🏼 👩🏼‍❤️‍💋‍👩🏽 👩🏼‍❤️‍💋‍👩🏾 👩🏼‍❤️‍💋‍👩🏿 👩🏽‍❤️‍💋‍👩🏻 👩🏽‍❤️‍💋‍👩🏼 👩🏽‍❤️‍💋‍👩🏽 👩🏽‍❤️‍💋‍👩🏾 👩🏽‍❤️‍💋‍👩🏿 👩🏾‍❤️‍💋‍👩🏻 👩🏾‍❤️‍💋‍👩🏼 👩🏾‍❤️‍💋‍👩🏽 👩🏾‍❤️‍💋‍👩🏾 👩🏾‍❤️‍💋‍👩🏿 👩🏿‍❤️‍💋‍👩🏻 👩🏿‍❤️‍💋‍👩🏼 👩🏿‍❤️‍💋‍👩🏽 👩🏿‍❤️‍💋‍👩🏾 👩🏿‍❤️‍💋‍👩🏿 💑 🧑🏻‍❤️‍🧑🏼 🧑🏻‍❤️‍🧑🏽 🧑🏻‍❤️‍🧑🏾 🧑🏻‍❤️‍🧑🏿 🧑🏼‍❤️‍🧑🏻 🧑🏼‍❤️‍🧑🏽 🧑🏼‍❤️‍🧑🏾 🧑🏼‍❤️‍🧑🏿 🧑🏽‍❤️‍🧑🏻 🧑🏽‍❤️‍🧑🏼 🧑🏽‍❤️‍🧑🏾 🧑🏽‍❤️‍🧑🏿 🧑🏾‍❤️‍🧑🏻 🧑🏾‍❤️‍🧑🏼 🧑🏾‍❤️‍🧑🏽 🧑🏾‍❤️‍🧑🏿 🧑🏿‍❤️‍🧑🏻 🧑🏿‍❤️‍🧑🏼 🧑🏿‍❤️‍🧑🏽 🧑🏿‍❤️‍🧑🏾 👩‍❤️‍👨 👩🏻‍❤️‍👨🏻 👩🏻‍❤️‍👨🏼 👩🏻‍❤️‍👨🏽 👩🏻‍❤️‍👨🏾 👩🏻‍❤️‍👨🏿 👩🏼‍❤️‍👨🏻 👩🏼‍❤️‍👨🏼 👩🏼‍❤️‍👨🏽 👩🏼‍❤️‍👨🏾 👩🏼‍❤️‍👨🏿 👩🏽‍❤️‍👨🏻 👩🏽‍❤️‍👨🏼 👩🏽‍❤️‍👨🏽 👩🏽‍❤️‍👨🏾 👩🏽‍❤️‍👨🏿 👩🏾‍❤️‍👨🏻 👩🏾‍❤️‍👨🏼 👩🏾‍❤️‍👨🏽 👩🏾‍❤️‍👨🏾 👩🏾‍❤️‍👨🏿 👩🏿‍❤️‍👨🏻 👩🏿‍❤️‍👨🏼 👩🏿‍❤️‍👨🏽 👩🏿‍❤️‍👨🏾 👩🏿‍❤️‍👨🏿 👨‍❤️‍👨 👨🏻‍❤️‍👨🏻 👨🏻‍❤️‍👨🏼 👨🏻‍❤️‍👨🏽 👨🏻‍❤️‍👨🏾 👨🏻‍❤️‍👨🏿 👨🏼‍❤️‍👨🏻 👨🏼‍❤️‍👨🏼 👨🏼‍❤️‍👨🏽 👨🏼‍❤️‍👨🏾 👨🏼‍❤️‍👨🏿 👨🏽‍❤️‍👨🏻 👨🏽‍❤️‍👨🏼 👨🏽‍❤️‍👨🏽 👨🏽‍❤️‍👨🏾 👨🏽‍❤️‍👨🏿 👨🏾‍❤️‍👨🏻 👨🏾‍❤️‍👨🏼 👨🏾‍❤️‍👨🏽 👨🏾‍❤️‍👨🏾 👨🏾‍❤️‍👨🏿 👨🏿‍❤️‍👨🏻 👨🏿‍❤️‍👨🏼 👨🏿‍❤️‍👨🏽 👨🏿‍❤️‍👨🏾 👨🏿‍❤️‍👨🏿 👩‍❤️‍👩 👩🏻‍❤️‍👩🏻 👩🏻‍❤️‍👩🏼 👩🏻‍❤️‍👩🏽 👩🏻‍❤️‍👩🏾 👩🏻‍❤️‍👩🏿 👩🏼‍❤️‍👩🏻 👩🏼‍❤️‍👩🏼 👩🏼‍❤️‍👩🏽 👩🏼‍❤️‍👩🏾 👩🏼‍❤️‍👩🏿 👩🏽‍❤️‍👩🏻 👩🏽‍❤️‍👩🏼 👩🏽‍❤️‍👩🏽 👩🏽‍❤️‍👩🏾 👩🏽‍❤️‍👩🏿 👩🏾‍❤️‍👩🏻 👩🏾‍❤️‍👩🏼 👩🏾‍❤️‍👩🏽 👩🏾‍❤️‍👩🏾 👩🏾‍❤️‍👩🏿 👩🏿‍❤️‍👩🏻 👩🏿‍❤️‍👩🏼 👩🏿‍❤️‍👩🏽 👩🏿‍❤️‍👩🏾 👩🏿‍❤️‍👩🏿 👪 👨‍👩‍👦 👨‍👩‍👧 👨‍👩‍👧‍👦 👨‍👩‍👦‍👦 👨‍👩‍👧‍👧 👨‍👨‍👦 👨‍👨‍👧 👨‍👨‍👧‍👦 👨‍👨‍👦‍👦 👨‍👨‍👧‍👧 👩‍👩‍👦 👩‍👩‍👧 👩‍👩‍👧‍👦 👩‍👩‍👦‍👦 👩‍👩‍👧‍👧 👨‍👦 👨‍👦‍👦 👨‍👧 👨‍👧‍👦 👨‍👧‍👧 👩‍👦 👩‍👦‍👦 👩‍👧 👩‍👧‍👦 👩‍👧‍👧 🐕‍🦺 🐈‍⬛ 🐻‍❄️ 🐦‍⬛ 🏳️‍🌈 🏳️‍⚧️ 🏴‍☠️ </p>

<!--
Full reference: https://unicode.org/Public/emoji/15.0/
ZJW: zwidge https://unicode.org/emoji/charts/emoji-zwj-sequences.html
-->
`,title:"Emoji Composition",level:2,content:`## Emoji Composition

<p style="font-size: 65%; line-height: 1rem;"> 😶‍🌫️ 😮‍💨 😵‍💫 ❤️‍🔥 ❤️‍🩹 👁️‍🗨️ 🫱🏻‍🫲🏼 🫱🏻‍🫲🏽 🫱🏻‍🫲🏾 🫱🏻‍🫲🏿 🫱🏼‍🫲🏻 🫱🏼‍🫲🏽 🫱🏼‍🫲🏾 🫱🏼‍🫲🏿 🫱🏽‍🫲🏻 🫱🏽‍🫲🏼 🫱🏽‍🫲🏾 🫱🏽‍🫲🏿 🫱🏾‍🫲🏻 🫱🏾‍🫲🏼 🫱🏾‍🫲🏽 🫱🏾‍🫲🏿 🫱🏿‍🫲🏻 🫱🏿‍🫲🏼 🫱🏿‍🫲🏽 🫱🏿‍🫲🏾 🧔‍♂️ 🧔🏻‍♂️ 🧔🏼‍♂️ 🧔🏽‍♂️ 🧔🏾‍♂️ 🧔🏿‍♂️ 🧔‍♀️ 🧔🏻‍♀️ 🧔🏼‍♀️ 🧔🏽‍♀️ 🧔🏾‍♀️ 🧔🏿‍♀️ 👨‍🦰 👨🏻‍🦰 👨🏼‍🦰 👨🏽‍🦰 👨🏾‍🦰 👨🏿‍🦰 👨‍🦱 👨🏻‍🦱 👨🏼‍🦱 👨🏽‍🦱 👨🏾‍🦱 👨🏿‍🦱 👨‍🦳 👨🏻‍🦳 👨🏼‍🦳 👨🏽‍🦳 👨🏾‍🦳 👨🏿‍🦳 👨‍🦲 👨🏻‍🦲 👨🏼‍🦲 👨🏽‍🦲 👨🏾‍🦲 👨🏿‍🦲 👩‍🦰 👩🏻‍🦰 👩🏼‍🦰 👩🏽‍🦰 👩🏾‍🦰 👩🏿‍🦰 🧑‍🦰 🧑🏻‍🦰 🧑🏼‍🦰 🧑🏽‍🦰 🧑🏾‍🦰 🧑🏿‍🦰 👩‍🦱 👩🏻‍🦱 👩🏼‍🦱 👩🏽‍🦱 👩🏾‍🦱 👩🏿‍🦱 🧑‍🦱 🧑🏻‍🦱 🧑🏼‍🦱 🧑🏽‍🦱 🧑🏾‍🦱 🧑🏿‍🦱 👩‍🦳 👩🏻‍🦳 👩🏼‍🦳 👩🏽‍🦳 👩🏾‍🦳 👩🏿‍🦳 🧑‍🦳 🧑🏻‍🦳 🧑🏼‍🦳 🧑🏽‍🦳 🧑🏾‍🦳 🧑🏿‍🦳 👩‍🦲 👩🏻‍🦲 👩🏼‍🦲 👩🏽‍🦲 👩🏾‍🦲 👩🏿‍🦲 🧑‍🦲 🧑🏻‍🦲 🧑🏼‍🦲 🧑🏽‍🦲 🧑🏾‍🦲 🧑🏿‍🦲 👱‍♀️ 👱🏻‍♀️ 👱🏼‍♀️ 👱🏽‍♀️ 👱🏾‍♀️ 👱🏿‍♀️ 👱‍♂️ 👱🏻‍♂️ 👱🏼‍♂️ 👱🏽‍♂️ 👱🏾‍♂️ 👱🏿‍♂️ 🙍‍♂️ 🙍🏻‍♂️ 🙍🏼‍♂️ 🙍🏽‍♂️ 🙍🏾‍♂️ 🙍🏿‍♂️ 🙍‍♀️ 🙍🏻‍♀️ 🙍🏼‍♀️ 🙍🏽‍♀️ 🙍🏾‍♀️ 🙍🏿‍♀️ 🙎‍♂️ 🙎🏻‍♂️ 🙎🏼‍♂️ 🙎🏽‍♂️ 🙎🏾‍♂️ 🙎🏿‍♂️ 🙎‍♀️ 🙎🏻‍♀️ 🙎🏼‍♀️ 🙎🏽‍♀️ 🙎🏾‍♀️ 🙎🏿‍♀️ 🙅‍♂️ 🙅🏻‍♂️ 🙅🏼‍♂️ 🙅🏽‍♂️ 🙅🏾‍♂️ 🙅🏿‍♂️ 🙅‍♀️ 🙅🏻‍♀️ 🙅🏼‍♀️ 🙅🏽‍♀️ 🙅🏾‍♀️ 🙅🏿‍♀️ 🙆‍♂️ 🙆🏻‍♂️ 🙆🏼‍♂️ 🙆🏽‍♂️ 🙆🏾‍♂️ 🙆🏿‍♂️ 🙆‍♀️ 🙆🏻‍♀️ 🙆🏼‍♀️ 🙆🏽‍♀️ 🙆🏾‍♀️ 🙆🏿‍♀️ 💁‍♂️ 💁🏻‍♂️ 💁🏼‍♂️ 💁🏽‍♂️ 💁🏾‍♂️ 💁🏿‍♂️ 💁‍♀️ 💁🏻‍♀️ 💁🏼‍♀️ 💁🏽‍♀️ 💁🏾‍♀️ 💁🏿‍♀️ 🙋‍♂️ 🙋🏻‍♂️ 🙋🏼‍♂️ 🙋🏽‍♂️ 🙋🏾‍♂️ 🙋🏿‍♂️ 🙋‍♀️ 🙋🏻‍♀️ 🙋🏼‍♀️ 🙋🏽‍♀️ 🙋🏾‍♀️ 🙋🏿‍♀️ 🧏‍♂️ 🧏🏻‍♂️ 🧏🏼‍♂️ 🧏🏽‍♂️ 🧏🏾‍♂️ 🧏🏿‍♂️ 🧏‍♀️ 🧏🏻‍♀️ 🧏🏼‍♀️ 🧏🏽‍♀️ 🧏🏾‍♀️ 🧏🏿‍♀️ 🙇‍♂️ 🙇🏻‍♂️ 🙇🏼‍♂️ 🙇🏽‍♂️ 🙇🏾‍♂️ 🙇🏿‍♂️ 🙇‍♀️ 🙇🏻‍♀️ 🙇🏼‍♀️ 🙇🏽‍♀️ 🙇🏾‍♀️ 🙇🏿‍♀️ 🤦‍♂️ 🤦🏻‍♂️ 🤦🏼‍♂️ 🤦🏽‍♂️ 🤦🏾‍♂️ 🤦🏿‍♂️ 🤦‍♀️ 🤦🏻‍♀️ 🤦🏼‍♀️ 🤦🏽‍♀️ 🤦🏾‍♀️ 🤦🏿‍♀️ 🤷‍♂️ 🤷🏻‍♂️ 🤷🏼‍♂️ 🤷🏽‍♂️ 🤷🏾‍♂️ 🤷🏿‍♂️ 🤷‍♀️ 🤷🏻‍♀️ 🤷🏼‍♀️ 🤷🏽‍♀️ 🤷🏾‍♀️ 🤷🏿‍♀️ 🧑‍⚕️ 🧑🏻‍⚕️ 🧑🏼‍⚕️ 🧑🏽‍⚕️ 🧑🏾‍⚕️ 🧑🏿‍⚕️ 👨‍⚕️ 👨🏻‍⚕️ 👨🏼‍⚕️ 👨🏽‍⚕️ 👨🏾‍⚕️ 👨🏿‍⚕️ 👩‍⚕️ 👩🏻‍⚕️ 👩🏼‍⚕️ 👩🏽‍⚕️ 👩🏾‍⚕️ 👩🏿‍⚕️ 🧑‍🎓 🧑🏻‍🎓 🧑🏼‍🎓 🧑🏽‍🎓 🧑🏾‍🎓 🧑🏿‍🎓 👨‍🎓 👨🏻‍🎓 👨🏼‍🎓 👨🏽‍🎓 👨🏾‍🎓 👨🏿‍🎓 👩‍🎓 👩🏻‍🎓 👩🏼‍🎓 👩🏽‍🎓 👩🏾‍🎓 👩🏿‍🎓 🧑‍🏫 🧑🏻‍🏫 🧑🏼‍🏫 🧑🏽‍🏫 🧑🏾‍🏫 🧑🏿‍🏫 👨‍🏫 👨🏻‍🏫 👨🏼‍🏫 👨🏽‍🏫 👨🏾‍🏫 👨🏿‍🏫 👩‍🏫 👩🏻‍🏫 👩🏼‍🏫 👩🏽‍🏫 👩🏾‍🏫 👩🏿‍🏫 🧑‍⚖️ 🧑🏻‍⚖️ 🧑🏼‍⚖️ 🧑🏽‍⚖️ 🧑🏾‍⚖️ 🧑🏿‍⚖️ 👨‍⚖️ 👨🏻‍⚖️ 👨🏼‍⚖️ 👨🏽‍⚖️ 👨🏾‍⚖️ 👨🏿‍⚖️ 👩‍⚖️ 👩🏻‍⚖️ 👩🏼‍⚖️ 👩🏽‍⚖️ 👩🏾‍⚖️ 👩🏿‍⚖️ 🧑‍🌾 🧑🏻‍🌾 🧑🏼‍🌾 🧑🏽‍🌾 🧑🏾‍🌾 🧑🏿‍🌾 👨‍🌾 👨🏻‍🌾 👨🏼‍🌾 👨🏽‍🌾 👨🏾‍🌾 👨🏿‍🌾 👩‍🌾 👩🏻‍🌾 👩🏼‍🌾 👩🏽‍🌾 👩🏾‍🌾 👩🏿‍🌾 🧑‍🍳 🧑🏻‍🍳 🧑🏼‍🍳 🧑🏽‍🍳 🧑🏾‍🍳 🧑🏿‍🍳 👨‍🍳 👨🏻‍🍳 👨🏼‍🍳 👨🏽‍🍳 👨🏾‍🍳 👨🏿‍🍳 👩‍🍳 👩🏻‍🍳 👩🏼‍🍳 👩🏽‍🍳 👩🏾‍🍳 👩🏿‍🍳 🧑‍🔧 🧑🏻‍🔧 🧑🏼‍🔧 🧑🏽‍🔧 🧑🏾‍🔧 🧑🏿‍🔧 👨‍🔧 👨🏻‍🔧 👨🏼‍🔧 👨🏽‍🔧 👨🏾‍🔧 👨🏿‍🔧 👩‍🔧 👩🏻‍🔧 👩🏼‍🔧 👩🏽‍🔧 👩🏾‍🔧 👩🏿‍🔧 🧑‍🏭 🧑🏻‍🏭 🧑🏼‍🏭 🧑🏽‍🏭 🧑🏾‍🏭 🧑🏿‍🏭 👨‍🏭 👨🏻‍🏭 👨🏼‍🏭 👨🏽‍🏭 👨🏾‍🏭 👨🏿‍🏭 👩‍🏭 👩🏻‍🏭 👩🏼‍🏭 👩🏽‍🏭 👩🏾‍🏭 👩🏿‍🏭 🧑‍💼 🧑🏻‍💼 🧑🏼‍💼 🧑🏽‍💼 🧑🏾‍💼 🧑🏿‍💼 👨‍💼 👨🏻‍💼 👨🏼‍💼 👨🏽‍💼 👨🏾‍💼 👨🏿‍💼 👩‍💼 👩🏻‍💼 👩🏼‍💼 👩🏽‍💼 👩🏾‍💼 👩🏿‍💼 🧑‍🔬 🧑🏻‍🔬 🧑🏼‍🔬 🧑🏽‍🔬 🧑🏾‍🔬 🧑🏿‍🔬 👨‍🔬 👨🏻‍🔬 👨🏼‍🔬 👨🏽‍🔬 👨🏾‍🔬 👨🏿‍🔬 👩‍🔬 👩🏻‍🔬 👩🏼‍🔬 👩🏽‍🔬 👩🏾‍🔬 👩🏿‍🔬 🧑‍💻 🧑🏻‍💻 🧑🏼‍💻 🧑🏽‍💻 🧑🏾‍💻 🧑🏿‍💻 👨‍💻 👨🏻‍💻 👨🏼‍💻 👨🏽‍💻 👨🏾‍💻 👨🏿‍💻 👩‍💻 👩🏻‍💻 👩🏼‍💻 👩🏽‍💻 👩🏾‍💻 👩🏿‍💻 🧑‍🎤 🧑🏻‍🎤 🧑🏼‍🎤 🧑🏽‍🎤 🧑🏾‍🎤 🧑🏿‍🎤 👨‍🎤 👨🏻‍🎤 👨🏼‍🎤 👨🏽‍🎤 👨🏾‍🎤 👨🏿‍🎤 👩‍🎤 👩🏻‍🎤 👩🏼‍🎤 👩🏽‍🎤 👩🏾‍🎤 👩🏿‍🎤 🧑‍🎨 🧑🏻‍🎨 🧑🏼‍🎨 🧑🏽‍🎨 🧑🏾‍🎨 🧑🏿‍🎨 👨‍🎨 👨🏻‍🎨 👨🏼‍🎨 👨🏽‍🎨 👨🏾‍🎨 👨🏿‍🎨 👩‍🎨 👩🏻‍🎨 👩🏼‍🎨 👩🏽‍🎨 👩🏾‍🎨 👩🏿‍🎨 🧑‍✈️ 🧑🏻‍✈️ 🧑🏼‍✈️ 🧑🏽‍✈️ 🧑🏾‍✈️ 🧑🏿‍✈️ 👨‍✈️ 👨🏻‍✈️ 👨🏼‍✈️ 👨🏽‍✈️ 👨🏾‍✈️ 👨🏿‍✈️ 👩‍✈️ 👩🏻‍✈️ 👩🏼‍✈️ 👩🏽‍✈️ 👩🏾‍✈️ 👩🏿‍✈️ 🧑‍🚀 🧑🏻‍🚀 🧑🏼‍🚀 🧑🏽‍🚀 🧑🏾‍🚀 🧑🏿‍🚀 👨‍🚀 👨🏻‍🚀 👨🏼‍🚀 👨🏽‍🚀 👨🏾‍🚀 👨🏿‍🚀 👩‍🚀 👩🏻‍🚀 👩🏼‍🚀 👩🏽‍🚀 👩🏾‍🚀 👩🏿‍🚀 🧑‍🚒 🧑🏻‍🚒 🧑🏼‍🚒 🧑🏽‍🚒 🧑🏾‍🚒 🧑🏿‍🚒 👨‍🚒 👨🏻‍🚒 👨🏼‍🚒 👨🏽‍🚒 👨🏾‍🚒 👨🏿‍🚒 👩‍🚒 👩🏻‍🚒 👩🏼‍🚒 👩🏽‍🚒 👩🏾‍🚒 👩🏿‍🚒 👮‍♂️ 👮🏻‍♂️ 👮🏼‍♂️ 👮🏽‍♂️ 👮🏾‍♂️ 👮🏿‍♂️ 👮‍♀️ 👮🏻‍♀️ 👮🏼‍♀️ 👮🏽‍♀️ 👮🏾‍♀️ 👮🏿‍♀️ 🕵️‍♂️ 🕵🏻‍♂️ 🕵🏼‍♂️ 🕵🏽‍♂️ 🕵🏾‍♂️ 🕵🏿‍♂️ 🕵️‍♀️ 🕵🏻‍♀️ 🕵🏼‍♀️ 🕵🏽‍♀️ 🕵🏾‍♀️ 🕵🏿‍♀️ 💂‍♂️ 💂🏻‍♂️ 💂🏼‍♂️ 💂🏽‍♂️ 💂🏾‍♂️ 💂🏿‍♂️ 💂‍♀️ 💂🏻‍♀️ 💂🏼‍♀️ 💂🏽‍♀️ 💂🏾‍♀️ 💂🏿‍♀️ 👷‍♂️ 👷🏻‍♂️ 👷🏼‍♂️ 👷🏽‍♂️ 👷🏾‍♂️ 👷🏿‍♂️ 👷‍♀️ 👷🏻‍♀️ 👷🏼‍♀️ 👷🏽‍♀️ 👷🏾‍♀️ 👷🏿‍♀️ 👳‍♂️ 👳🏻‍♂️ 👳🏼‍♂️ 👳🏽‍♂️ 👳🏾‍♂️ 👳🏿‍♂️ 👳‍♀️ 👳🏻‍♀️ 👳🏼‍♀️ 👳🏽‍♀️ 👳🏾‍♀️ 👳🏿‍♀️ 🤵‍♂️ 🤵🏻‍♂️ 🤵🏼‍♂️ 🤵🏽‍♂️ 🤵🏾‍♂️ 🤵🏿‍♂️ 🤵‍♀️ 🤵🏻‍♀️ 🤵🏼‍♀️ 🤵🏽‍♀️ 🤵🏾‍♀️ 🤵🏿‍♀️ 👰‍♂️ 👰🏻‍♂️ 👰🏼‍♂️ 👰🏽‍♂️ 👰🏾‍♂️ 👰🏿‍♂️ 👰‍♀️ 👰🏻‍♀️ 👰🏼‍♀️ 👰🏽‍♀️ 👰🏾‍♀️ 👰🏿‍♀️ 👩‍🍼 👩🏻‍🍼 👩🏼‍🍼 👩🏽‍🍼 👩🏾‍🍼 👩🏿‍🍼 👨‍🍼 👨🏻‍🍼 👨🏼‍🍼 👨🏽‍🍼 👨🏾‍🍼 👨🏿‍🍼 🧑‍🍼 🧑🏻‍🍼 🧑🏼‍🍼 🧑🏽‍🍼 🧑🏾‍🍼 🧑🏿‍🍼 🧑‍🎄 🧑🏻‍🎄 🧑🏼‍🎄 🧑🏽‍🎄 🧑🏾‍🎄 🧑🏿‍🎄 🦸‍♂️ 🦸🏻‍♂️ 🦸🏼‍♂️ 🦸🏽‍♂️ 🦸🏾‍♂️ 🦸🏿‍♂️ 🦸‍♀️ 🦸🏻‍♀️ 🦸🏼‍♀️ 🦸🏽‍♀️ 🦸🏾‍♀️ 🦸🏿‍♀️ 🦹‍♂️ 🦹🏻‍♂️ 🦹🏼‍♂️ 🦹🏽‍♂️ 🦹🏾‍♂️ 🦹🏿‍♂️ 🦹‍♀️ 🦹🏻‍♀️ 🦹🏼‍♀️ 🦹🏽‍♀️ 🦹🏾‍♀️ 🦹🏿‍♀️ 🧙‍♂️ 🧙🏻‍♂️ 🧙🏼‍♂️ 🧙🏽‍♂️ 🧙🏾‍♂️ 🧙🏿‍♂️ 🧙‍♀️ 🧙🏻‍♀️ 🧙🏼‍♀️ 🧙🏽‍♀️ 🧙🏾‍♀️ 🧙🏿‍♀️ 🧚‍♂️ 🧚🏻‍♂️ 🧚🏼‍♂️ 🧚🏽‍♂️ 🧚🏾‍♂️ 🧚🏿‍♂️ 🧚‍♀️ 🧚🏻‍♀️ 🧚🏼‍♀️ 🧚🏽‍♀️ 🧚🏾‍♀️ 🧚🏿‍♀️ 🧛‍♂️ 🧛🏻‍♂️ 🧛🏼‍♂️ 🧛🏽‍♂️ 🧛🏾‍♂️ 🧛🏿‍♂️ 🧛‍♀️ 🧛🏻‍♀️ 🧛🏼‍♀️ 🧛🏽‍♀️ 🧛🏾‍♀️ 🧛🏿‍♀️ 🧜‍♂️ 🧜🏻‍♂️ 🧜🏼‍♂️ 🧜🏽‍♂️ 🧜🏾‍♂️ 🧜🏿‍♂️ 🧜‍♀️ 🧜🏻‍♀️ 🧜🏼‍♀️ 🧜🏽‍♀️ 🧜🏾‍♀️ 🧜🏿‍♀️ 🧝‍♂️ 🧝🏻‍♂️ 🧝🏼‍♂️ 🧝🏽‍♂️ 🧝🏾‍♂️ 🧝🏿‍♂️ 🧝‍♀️ 🧝🏻‍♀️ 🧝🏼‍♀️ 🧝🏽‍♀️ 🧝🏾‍♀️ 🧝🏿‍♀️ 🧞‍♂️ 🧞‍♀️ 🧟‍♂️ 🧟‍♀️ 💆‍♂️ 💆🏻‍♂️ 💆🏼‍♂️ 💆🏽‍♂️ 💆🏾‍♂️ 💆🏿‍♂️ 💆‍♀️ 💆🏻‍♀️ 💆🏼‍♀️ 💆🏽‍♀️ 💆🏾‍♀️ 💆🏿‍♀️ 💇‍♂️ 💇🏻‍♂️ 💇🏼‍♂️ 💇🏽‍♂️ 💇🏾‍♂️ 💇🏿‍♂️ 💇‍♀️ 💇🏻‍♀️ 💇🏼‍♀️ 💇🏽‍♀️ 💇🏾‍♀️ 💇🏿‍♀️ 🚶‍♂️ 🚶🏻‍♂️ 🚶🏼‍♂️ 🚶🏽‍♂️ 🚶🏾‍♂️ 🚶🏿‍♂️ 🚶‍♀️ 🚶🏻‍♀️ 🚶🏼‍♀️ 🚶🏽‍♀️ 🚶🏾‍♀️ 🚶🏿‍♀️ 🧍‍♂️ 🧍🏻‍♂️ 🧍🏼‍♂️ 🧍🏽‍♂️ 🧍🏾‍♂️ 🧍🏿‍♂️ 🧍‍♀️ 🧍🏻‍♀️ 🧍🏼‍♀️ 🧍🏽‍♀️ 🧍🏾‍♀️ 🧍🏿‍♀️ 🧎‍♂️ 🧎🏻‍♂️ 🧎🏼‍♂️ 🧎🏽‍♂️ 🧎🏾‍♂️ 🧎🏿‍♂️ 🧎‍♀️ 🧎🏻‍♀️ 🧎🏼‍♀️ 🧎🏽‍♀️ 🧎🏾‍♀️ 🧎🏿‍♀️ 🧑‍🦯 🧑🏻‍🦯 🧑🏼‍🦯 🧑🏽‍🦯 🧑🏾‍🦯 🧑🏿‍🦯 👨‍🦯 👨🏻‍🦯 👨🏼‍🦯 👨🏽‍🦯 👨🏾‍🦯 👨🏿‍🦯 👩‍🦯 👩🏻‍🦯 👩🏼‍🦯 👩🏽‍🦯 👩🏾‍🦯 👩🏿‍🦯 🧑‍🦼 🧑🏻‍🦼 🧑🏼‍🦼 🧑🏽‍🦼 🧑🏾‍🦼 🧑🏿‍🦼 👨‍🦼 👨🏻‍🦼 👨🏼‍🦼 👨🏽‍🦼 👨🏾‍🦼 👨🏿‍🦼 👩‍🦼 👩🏻‍🦼 👩🏼‍🦼 👩🏽‍🦼 👩🏾‍🦼 👩🏿‍🦼 🧑‍🦽 🧑🏻‍🦽 🧑🏼‍🦽 🧑🏽‍🦽 🧑🏾‍🦽 🧑🏿‍🦽 👨‍🦽 👨🏻‍🦽 👨🏼‍🦽 👨🏽‍🦽 👨🏾‍🦽 👨🏿‍🦽 👩‍🦽 👩🏻‍🦽 👩🏼‍🦽 👩🏽‍🦽 👩🏾‍🦽 👩🏿‍🦽 🏃‍♂️ 🏃🏻‍♂️ 🏃🏼‍♂️ 🏃🏽‍♂️ 🏃🏾‍♂️ 🏃🏿‍♂️ 🏃‍♀️ 🏃🏻‍♀️ 🏃🏼‍♀️ 🏃🏽‍♀️ 🏃🏾‍♀️ 🏃🏿‍♀️ 👯‍♂️ 👯‍♀️ 🧖‍♂️ 🧖🏻‍♂️ 🧖🏼‍♂️ 🧖🏽‍♂️ 🧖🏾‍♂️ 🧖🏿‍♂️ 🧖‍♀️ 🧖🏻‍♀️ 🧖🏼‍♀️ 🧖🏽‍♀️ 🧖🏾‍♀️ 🧖🏿‍♀️ 🧗‍♂️ 🧗🏻‍♂️ 🧗🏼‍♂️ 🧗🏽‍♂️ 🧗🏾‍♂️ 🧗🏿‍♂️ 🧗‍♀️ 🧗🏻‍♀️ 🧗🏼‍♀️ 🧗🏽‍♀️ 🧗🏾‍♀️ 🧗🏿‍♀️ 🏌️‍♂️ 🏌🏻‍♂️ 🏌🏼‍♂️ 🏌🏽‍♂️ 🏌🏾‍♂️ 🏌🏿‍♂️ 🏌️‍♀️ 🏌🏻‍♀️ 🏌🏼‍♀️ 🏌🏽‍♀️ 🏌🏾‍♀️ 🏌🏿‍♀️ 🏄‍♂️ 🏄🏻‍♂️ 🏄🏼‍♂️ 🏄🏽‍♂️ 🏄🏾‍♂️ 🏄🏿‍♂️ 🏄‍♀️ 🏄🏻‍♀️ 🏄🏼‍♀️ 🏄🏽‍♀️ 🏄🏾‍♀️ 🏄🏿‍♀️ 🚣‍♂️ 🚣🏻‍♂️ 🚣🏼‍♂️ 🚣🏽‍♂️ 🚣🏾‍♂️ 🚣🏿‍♂️ 🚣‍♀️ 🚣🏻‍♀️ 🚣🏼‍♀️ 🚣🏽‍♀️ 🚣🏾‍♀️ 🚣🏿‍♀️ 🏊‍♂️ 🏊🏻‍♂️ 🏊🏼‍♂️ 🏊🏽‍♂️ 🏊🏾‍♂️ 🏊🏿‍♂️ 🏊‍♀️ 🏊🏻‍♀️ 🏊🏼‍♀️ 🏊🏽‍♀️ 🏊🏾‍♀️ 🏊🏿‍♀️ ⛹️‍♂️ ⛹🏻‍♂️ ⛹🏼‍♂️ ⛹🏽‍♂️ ⛹🏾‍♂️ ⛹🏿‍♂️ ⛹️‍♀️ ⛹🏻‍♀️ ⛹🏼‍♀️ ⛹🏽‍♀️ ⛹🏾‍♀️ ⛹🏿‍♀️ 🏋️‍♂️ 🏋🏻‍♂️ 🏋🏼‍♂️ 🏋🏽‍♂️ 🏋🏾‍♂️ 🏋🏿‍♂️ 🏋️‍♀️ 🏋🏻‍♀️ 🏋🏼‍♀️ 🏋🏽‍♀️ 🏋🏾‍♀️ 🏋🏿‍♀️ 🚴‍♂️ 🚴🏻‍♂️ 🚴🏼‍♂️ 🚴🏽‍♂️ 🚴🏾‍♂️ 🚴🏿‍♂️ 🚴‍♀️ 🚴🏻‍♀️ 🚴🏼‍♀️ 🚴🏽‍♀️ 🚴🏾‍♀️ 🚴🏿‍♀️ 🚵‍♂️ 🚵🏻‍♂️ 🚵🏼‍♂️ 🚵🏽‍♂️ 🚵🏾‍♂️ 🚵🏿‍♂️ 🚵‍♀️ 🚵🏻‍♀️ 🚵🏼‍♀️ 🚵🏽‍♀️ 🚵🏾‍♀️ 🚵🏿‍♀️ 🤸‍♂️ 🤸🏻‍♂️ 🤸🏼‍♂️ 🤸🏽‍♂️ 🤸🏾‍♂️ 🤸🏿‍♂️ 🤸‍♀️ 🤸🏻‍♀️ 🤸🏼‍♀️ 🤸🏽‍♀️ 🤸🏾‍♀️ 🤸🏿‍♀️ 🤼‍♂️ 🤼‍♀️ 🤽‍♂️ 🤽🏻‍♂️ 🤽🏼‍♂️ 🤽🏽‍♂️ 🤽🏾‍♂️ 🤽🏿‍♂️ 🤽‍♀️ 🤽🏻‍♀️ 🤽🏼‍♀️ 🤽🏽‍♀️ 🤽🏾‍♀️ 🤽🏿‍♀️ 🤾‍♂️ 🤾🏻‍♂️ 🤾🏼‍♂️ 🤾🏽‍♂️ 🤾🏾‍♂️ 🤾🏿‍♂️ 🤾‍♀️ 🤾🏻‍♀️ 🤾🏼‍♀️ 🤾🏽‍♀️ 🤾🏾‍♀️ 🤾🏿‍♀️ 🤹‍♂️ 🤹🏻‍♂️ 🤹🏼‍♂️ 🤹🏽‍♂️ 🤹🏾‍♂️ 🤹🏿‍♂️ 🤹‍♀️ 🤹🏻‍♀️ 🤹🏼‍♀️ 🤹🏽‍♀️ 🤹🏾‍♀️ 🤹🏿‍♀️ 🧘‍♂️ 🧘🏻‍♂️ 🧘🏼‍♂️ 🧘🏽‍♂️ 🧘🏾‍♂️ 🧘🏿‍♂️ 🧘‍♀️ 🧘🏻‍♀️ 🧘🏼‍♀️ 🧘🏽‍♀️ 🧘🏾‍♀️ 🧘🏿‍♀️ 🧑‍🤝‍🧑 🧑🏻‍🤝‍🧑🏻 🧑🏻‍🤝‍🧑🏼 🧑🏻‍🤝‍🧑🏽 🧑🏻‍🤝‍🧑🏾 🧑🏻‍🤝‍🧑🏿 🧑🏼‍🤝‍🧑🏻 🧑🏼‍🤝‍🧑🏼 🧑🏼‍🤝‍🧑🏽 🧑🏼‍🤝‍🧑🏾 🧑🏼‍🤝‍🧑🏿 🧑🏽‍🤝‍🧑🏻 🧑🏽‍🤝‍🧑🏼 🧑🏽‍🤝‍🧑🏽 🧑🏽‍🤝‍🧑🏾 🧑🏽‍🤝‍🧑🏿 🧑🏾‍🤝‍🧑🏻 🧑🏾‍🤝‍🧑🏼 🧑🏾‍🤝‍🧑🏽 🧑🏾‍🤝‍🧑🏾 🧑🏾‍🤝‍🧑🏿 🧑🏿‍🤝‍🧑🏻 🧑🏿‍🤝‍🧑🏼 🧑🏿‍🤝‍🧑🏽 🧑🏿‍🤝‍🧑🏾 🧑🏿‍🤝‍🧑🏿 👩🏻‍🤝‍👩🏼 👩🏻‍🤝‍👩🏽 👩🏻‍🤝‍👩🏾 👩🏻‍🤝‍👩🏿 👩🏼‍🤝‍👩🏻 👩🏼‍🤝‍👩🏽 👩🏼‍🤝‍👩🏾 👩🏼‍🤝‍👩🏿 👩🏽‍🤝‍👩🏻 👩🏽‍🤝‍👩🏼 👩🏽‍🤝‍👩🏾 👩🏽‍🤝‍👩🏿 👩🏾‍🤝‍👩🏻 👩🏾‍🤝‍👩🏼 👩🏾‍🤝‍👩🏽 👩🏾‍🤝‍👩🏿 👩🏿‍🤝‍👩🏻 👩🏿‍🤝‍👩🏼 👩🏿‍🤝‍👩🏽 👩🏿‍🤝‍👩🏾 👩🏻‍🤝‍👨🏼 👩🏻‍🤝‍👨🏽 👩🏻‍🤝‍👨🏾 👩🏻‍🤝‍👨🏿 👩🏼‍🤝‍👨🏻 👩🏼‍🤝‍👨🏽 👩🏼‍🤝‍👨🏾 👩🏼‍🤝‍👨🏿 👩🏽‍🤝‍👨🏻 👩🏽‍🤝‍👨🏼 👩🏽‍🤝‍👨🏾 👩🏽‍🤝‍👨🏿 👩🏾‍🤝‍👨🏻 👩🏾‍🤝‍👨🏼 👩🏾‍🤝‍👨🏽 👩🏾‍🤝‍👨🏿 👩🏿‍🤝‍👨🏻 👩🏿‍🤝‍👨🏼 👩🏿‍🤝‍👨🏽 👩🏿‍🤝‍👨🏾 👨🏻‍🤝‍👨🏼 👨🏻‍🤝‍👨🏽 👨🏻‍🤝‍👨🏾 👨🏻‍🤝‍👨🏿 👨🏼‍🤝‍👨🏻 👨🏼‍🤝‍👨🏽 👨🏼‍🤝‍👨🏾 👨🏼‍🤝‍👨🏿 👨🏽‍🤝‍👨🏻 👨🏽‍🤝‍👨🏼 👨🏽‍🤝‍👨🏾 👨🏽‍🤝‍👨🏿 👨🏾‍🤝‍👨🏻 👨🏾‍🤝‍👨🏼 👨🏾‍🤝‍👨🏽 👨🏾‍🤝‍👨🏿 👨🏿‍🤝‍👨🏻 👨🏿‍🤝‍👨🏼 👨🏿‍🤝‍👨🏽 👨🏿‍🤝‍👨🏾 💏 🧑🏻‍❤️‍💋‍🧑🏼 🧑🏻‍❤️‍💋‍🧑🏽 🧑🏻‍❤️‍💋‍🧑🏾 🧑🏻‍❤️‍💋‍🧑🏿 🧑🏼‍❤️‍💋‍🧑🏻 🧑🏼‍❤️‍💋‍🧑🏽 🧑🏼‍❤️‍💋‍🧑🏾 🧑🏼‍❤️‍💋‍🧑🏿 🧑🏽‍❤️‍💋‍🧑🏻 🧑🏽‍❤️‍💋‍🧑🏼 🧑🏽‍❤️‍💋‍🧑🏾 🧑🏽‍❤️‍💋‍🧑🏿 🧑🏾‍❤️‍💋‍🧑🏻 🧑🏾‍❤️‍💋‍🧑🏼 🧑🏾‍❤️‍💋‍🧑🏽 🧑🏾‍❤️‍💋‍🧑🏿 🧑🏿‍❤️‍💋‍🧑🏻 🧑🏿‍❤️‍💋‍🧑🏼 🧑🏿‍❤️‍💋‍🧑🏽 🧑🏿‍❤️‍💋‍🧑🏾 👩‍❤️‍💋‍👨 👩🏻‍❤️‍💋‍👨🏻 👩🏻‍❤️‍💋‍👨🏼 👩🏻‍❤️‍💋‍👨🏽 👩🏻‍❤️‍💋‍👨🏾 👩🏻‍❤️‍💋‍👨🏿 👩🏼‍❤️‍💋‍👨🏻 👩🏼‍❤️‍💋‍👨🏼 👩🏼‍❤️‍💋‍👨🏽 👩🏼‍❤️‍💋‍👨🏾 👩🏼‍❤️‍💋‍👨🏿 👩🏽‍❤️‍💋‍👨🏻 👩🏽‍❤️‍💋‍👨🏼 👩🏽‍❤️‍💋‍👨🏽 👩🏽‍❤️‍💋‍👨🏾 👩🏽‍❤️‍💋‍👨🏿 👩🏾‍❤️‍💋‍👨🏻 👩🏾‍❤️‍💋‍👨🏼 👩🏾‍❤️‍💋‍👨🏽 👩🏾‍❤️‍💋‍👨🏾 👩🏾‍❤️‍💋‍👨🏿 👩🏿‍❤️‍💋‍👨🏻 👩🏿‍❤️‍💋‍👨🏼 👩🏿‍❤️‍💋‍👨🏽 👩🏿‍❤️‍💋‍👨🏾 👩🏿‍❤️‍💋‍👨🏿 👨‍❤️‍💋‍👨 👨🏻‍❤️‍💋‍👨🏻 👨🏻‍❤️‍💋‍👨🏼 👨🏻‍❤️‍💋‍👨🏽 👨🏻‍❤️‍💋‍👨🏾 👨🏻‍❤️‍💋‍👨🏿 👨🏼‍❤️‍💋‍👨🏻 👨🏼‍❤️‍💋‍👨🏼 👨🏼‍❤️‍💋‍👨🏽 👨🏼‍❤️‍💋‍👨🏾 👨🏼‍❤️‍💋‍👨🏿 👨🏽‍❤️‍💋‍👨🏻 👨🏽‍❤️‍💋‍👨🏼 👨🏽‍❤️‍💋‍👨🏽 👨🏽‍❤️‍💋‍👨🏾 👨🏽‍❤️‍💋‍👨🏿 👨🏾‍❤️‍💋‍👨🏻 👨🏾‍❤️‍💋‍👨🏼 👨🏾‍❤️‍💋‍👨🏽 👨🏾‍❤️‍💋‍👨🏾 👨🏾‍❤️‍💋‍👨🏿 👨🏿‍❤️‍💋‍👨🏻 👨🏿‍❤️‍💋‍👨🏼 👨🏿‍❤️‍💋‍👨🏽 👨🏿‍❤️‍💋‍👨🏾 👨🏿‍❤️‍💋‍👨🏿 👩‍❤️‍💋‍👩 👩🏻‍❤️‍💋‍👩🏻 👩🏻‍❤️‍💋‍👩🏼 👩🏻‍❤️‍💋‍👩🏽 👩🏻‍❤️‍💋‍👩🏾 👩🏻‍❤️‍💋‍👩🏿 👩🏼‍❤️‍💋‍👩🏻 👩🏼‍❤️‍💋‍👩🏼 👩🏼‍❤️‍💋‍👩🏽 👩🏼‍❤️‍💋‍👩🏾 👩🏼‍❤️‍💋‍👩🏿 👩🏽‍❤️‍💋‍👩🏻 👩🏽‍❤️‍💋‍👩🏼 👩🏽‍❤️‍💋‍👩🏽 👩🏽‍❤️‍💋‍👩🏾 👩🏽‍❤️‍💋‍👩🏿 👩🏾‍❤️‍💋‍👩🏻 👩🏾‍❤️‍💋‍👩🏼 👩🏾‍❤️‍💋‍👩🏽 👩🏾‍❤️‍💋‍👩🏾 👩🏾‍❤️‍💋‍👩🏿 👩🏿‍❤️‍💋‍👩🏻 👩🏿‍❤️‍💋‍👩🏼 👩🏿‍❤️‍💋‍👩🏽 👩🏿‍❤️‍💋‍👩🏾 👩🏿‍❤️‍💋‍👩🏿 💑 🧑🏻‍❤️‍🧑🏼 🧑🏻‍❤️‍🧑🏽 🧑🏻‍❤️‍🧑🏾 🧑🏻‍❤️‍🧑🏿 🧑🏼‍❤️‍🧑🏻 🧑🏼‍❤️‍🧑🏽 🧑🏼‍❤️‍🧑🏾 🧑🏼‍❤️‍🧑🏿 🧑🏽‍❤️‍🧑🏻 🧑🏽‍❤️‍🧑🏼 🧑🏽‍❤️‍🧑🏾 🧑🏽‍❤️‍🧑🏿 🧑🏾‍❤️‍🧑🏻 🧑🏾‍❤️‍🧑🏼 🧑🏾‍❤️‍🧑🏽 🧑🏾‍❤️‍🧑🏿 🧑🏿‍❤️‍🧑🏻 🧑🏿‍❤️‍🧑🏼 🧑🏿‍❤️‍🧑🏽 🧑🏿‍❤️‍🧑🏾 👩‍❤️‍👨 👩🏻‍❤️‍👨🏻 👩🏻‍❤️‍👨🏼 👩🏻‍❤️‍👨🏽 👩🏻‍❤️‍👨🏾 👩🏻‍❤️‍👨🏿 👩🏼‍❤️‍👨🏻 👩🏼‍❤️‍👨🏼 👩🏼‍❤️‍👨🏽 👩🏼‍❤️‍👨🏾 👩🏼‍❤️‍👨🏿 👩🏽‍❤️‍👨🏻 👩🏽‍❤️‍👨🏼 👩🏽‍❤️‍👨🏽 👩🏽‍❤️‍👨🏾 👩🏽‍❤️‍👨🏿 👩🏾‍❤️‍👨🏻 👩🏾‍❤️‍👨🏼 👩🏾‍❤️‍👨🏽 👩🏾‍❤️‍👨🏾 👩🏾‍❤️‍👨🏿 👩🏿‍❤️‍👨🏻 👩🏿‍❤️‍👨🏼 👩🏿‍❤️‍👨🏽 👩🏿‍❤️‍👨🏾 👩🏿‍❤️‍👨🏿 👨‍❤️‍👨 👨🏻‍❤️‍👨🏻 👨🏻‍❤️‍👨🏼 👨🏻‍❤️‍👨🏽 👨🏻‍❤️‍👨🏾 👨🏻‍❤️‍👨🏿 👨🏼‍❤️‍👨🏻 👨🏼‍❤️‍👨🏼 👨🏼‍❤️‍👨🏽 👨🏼‍❤️‍👨🏾 👨🏼‍❤️‍👨🏿 👨🏽‍❤️‍👨🏻 👨🏽‍❤️‍👨🏼 👨🏽‍❤️‍👨🏽 👨🏽‍❤️‍👨🏾 👨🏽‍❤️‍👨🏿 👨🏾‍❤️‍👨🏻 👨🏾‍❤️‍👨🏼 👨🏾‍❤️‍👨🏽 👨🏾‍❤️‍👨🏾 👨🏾‍❤️‍👨🏿 👨🏿‍❤️‍👨🏻 👨🏿‍❤️‍👨🏼 👨🏿‍❤️‍👨🏽 👨🏿‍❤️‍👨🏾 👨🏿‍❤️‍👨🏿 👩‍❤️‍👩 👩🏻‍❤️‍👩🏻 👩🏻‍❤️‍👩🏼 👩🏻‍❤️‍👩🏽 👩🏻‍❤️‍👩🏾 👩🏻‍❤️‍👩🏿 👩🏼‍❤️‍👩🏻 👩🏼‍❤️‍👩🏼 👩🏼‍❤️‍👩🏽 👩🏼‍❤️‍👩🏾 👩🏼‍❤️‍👩🏿 👩🏽‍❤️‍👩🏻 👩🏽‍❤️‍👩🏼 👩🏽‍❤️‍👩🏽 👩🏽‍❤️‍👩🏾 👩🏽‍❤️‍👩🏿 👩🏾‍❤️‍👩🏻 👩🏾‍❤️‍👩🏼 👩🏾‍❤️‍👩🏽 👩🏾‍❤️‍👩🏾 👩🏾‍❤️‍👩🏿 👩🏿‍❤️‍👩🏻 👩🏿‍❤️‍👩🏼 👩🏿‍❤️‍👩🏽 👩🏿‍❤️‍👩🏾 👩🏿‍❤️‍👩🏿 👪 👨‍👩‍👦 👨‍👩‍👧 👨‍👩‍👧‍👦 👨‍👩‍👦‍👦 👨‍👩‍👧‍👧 👨‍👨‍👦 👨‍👨‍👧 👨‍👨‍👧‍👦 👨‍👨‍👦‍👦 👨‍👨‍👧‍👧 👩‍👩‍👦 👩‍👩‍👧 👩‍👩‍👧‍👦 👩‍👩‍👦‍👦 👩‍👩‍👧‍👧 👨‍👦 👨‍👦‍👦 👨‍👧 👨‍👧‍👦 👨‍👧‍👧 👩‍👦 👩‍👦‍👦 👩‍👧 👩‍👧‍👦 👩‍👧‍👧 🐕‍🦺 🐈‍⬛ 🐻‍❄️ 🐦‍⬛ 🏳️‍🌈 🏳️‍⚧️ 🏴‍☠️ </p>`,frontmatter:{},note:`Full reference: https://unicode.org/Public/emoji/15.0/
ZJW: zwidge https://unicode.org/emoji/charts/emoji-zwj-sequences.html`,index:6,start:211,end:221},filepath:"/home/ben/Workspace/demystifying-unicode/pages/04-quirks.md",noteHTML:`<p>Full reference: https://unicode.org/Public/emoji/15.0/
ZJW: zwidge https://unicode.org/emoji/charts/emoji-zwj-sequences.html</p>
`,id:54,no:55},__clicksElements:[],__preloaded:!1}},{path:"56",name:"page-56",component:Q4,meta:{hide:!1,srcSequence:"./pages/04-quirks.md",slide:{raw:`
## Emoji Composition

What happens if we combine:

<v-clicks>

- \`\\u1F468\` - Man
- \`\\u1F3FB\` - Fitzpatrick type-2
- \`\\u200D\` - Zwidge
- \`\\u2764\` - Heavy black heart
- \`\\uFE0F\` - Variant selector-16
- \`\\u200D\` - Zwidge
- \`\\u1F468\` - Man
- \`\\u1F3FD\` - Fitzpatrick type-4

</v-clicks>

<div v-click class="codepoint absolute top-30 right-30">
  <div class="glyph">👨🏻‍❤️‍👨🏽 </div>
  <div class="code">U+1F468 + U+1F3Fb +<br />U+200D + U+2764 +<br />U+FE0F + U+200D +<br/>U+1F468 + U+1F3FD</div>
</div>

<div v-click class="border border-thin px-10 w-73 mt-5">

4 + 4 + 3 + 3 + 3 + 3 + 4 + 4 = 28 bytes!

</div>
`,title:"Emoji Composition",level:2,content:`## Emoji Composition

What happens if we combine:

<v-clicks>

- \`\\u1F468\` - Man
- \`\\u1F3FB\` - Fitzpatrick type-2
- \`\\u200D\` - Zwidge
- \`\\u2764\` - Heavy black heart
- \`\\uFE0F\` - Variant selector-16
- \`\\u200D\` - Zwidge
- \`\\u1F468\` - Man
- \`\\u1F3FD\` - Fitzpatrick type-4

</v-clicks>

<div v-click class="codepoint absolute top-30 right-30">
  <div class="glyph">👨🏻‍❤️‍👨🏽 </div>
  <div class="code">U+1F468 + U+1F3Fb +<br />U+200D + U+2764 +<br />U+FE0F + U+200D +<br/>U+1F468 + U+1F3FD</div>
</div>

<div v-click class="border border-thin px-10 w-73 mt-5">

4 + 4 + 3 + 3 + 3 + 3 + 4 + 4 = 28 bytes!

</div>`,frontmatter:{hide:!1,srcSequence:"./pages/04-quirks.md"},index:55,start:222,end:251,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/04-quirks.md",raw:`
## Emoji Composition

What happens if we combine:

<v-clicks>

- \`\\u1F468\` - Man
- \`\\u1F3FB\` - Fitzpatrick type-2
- \`\\u200D\` - Zwidge
- \`\\u2764\` - Heavy black heart
- \`\\uFE0F\` - Variant selector-16
- \`\\u200D\` - Zwidge
- \`\\u1F468\` - Man
- \`\\u1F3FD\` - Fitzpatrick type-4

</v-clicks>

<div v-click class="codepoint absolute top-30 right-30">
  <div class="glyph">👨🏻‍❤️‍👨🏽 </div>
  <div class="code">U+1F468 + U+1F3Fb +<br />U+200D + U+2764 +<br />U+FE0F + U+200D +<br/>U+1F468 + U+1F3FD</div>
</div>

<div v-click class="border border-thin px-10 w-73 mt-5">

4 + 4 + 3 + 3 + 3 + 3 + 4 + 4 = 28 bytes!

</div>
`,title:"Emoji Composition",level:2,content:`## Emoji Composition

What happens if we combine:

<v-clicks>

- \`\\u1F468\` - Man
- \`\\u1F3FB\` - Fitzpatrick type-2
- \`\\u200D\` - Zwidge
- \`\\u2764\` - Heavy black heart
- \`\\uFE0F\` - Variant selector-16
- \`\\u200D\` - Zwidge
- \`\\u1F468\` - Man
- \`\\u1F3FD\` - Fitzpatrick type-4

</v-clicks>

<div v-click class="codepoint absolute top-30 right-30">
  <div class="glyph">👨🏻‍❤️‍👨🏽 </div>
  <div class="code">U+1F468 + U+1F3Fb +<br />U+200D + U+2764 +<br />U+FE0F + U+200D +<br/>U+1F468 + U+1F3FD</div>
</div>

<div v-click class="border border-thin px-10 w-73 mt-5">

4 + 4 + 3 + 3 + 3 + 3 + 4 + 4 = 28 bytes!

</div>`,frontmatter:{},index:7,start:222,end:251},filepath:"/home/ben/Workspace/demystifying-unicode/pages/04-quirks.md",noteHTML:"",id:55,no:56},__clicksElements:[],__preloaded:!1}},{path:"57",name:"page-57",component:tF,meta:{hide:!1,srcSequence:"./pages/04-quirks.md",slide:{raw:'\n## Emoji Composition\n\n"Fun" combinations:\n\n<v-clicks>\n\n- `\\u1F9D4` + `\\u200D` + `\\u2640` + `\\uFE0F` = 🧔‍♀️ = Person Beard + ♀\n- `\\u1F9D1` + `\\u200D` + `\\u1F9b2` = 🧑‍🦲 = Adult + Bald\n- `\\u1F9D1` + `\\u200D` + `\\u2695` = 🧑‍⚕ = Adult + ⚕ (Staff of aesculapius)\n- `\\u1F9D1` + `\\u200D` + `\\u1F373` = 🧑‍🍳 = Adult + 🍳 (Cooking)\n- `\\u1F468` + `\\u1F3FB` + `\\u200D` + `\\u1F9BD` = 👨🏻‍🦽 = Man + Fitzpatrick 1-2 + Manual wheelchair \n- `\\u1F469` + `\\u1F3FF` + `\\u200D` + `\\u1F373` = 👩🏿‍🎤 = Woman + Fitzpatrick Type-6 + Microphone \n- `\\u1F3F3` + `\\uFE0F` + `\\u200D` + `\\u1F308` = 🏳️ + 🌈 = 🏳️‍🌈 \n- `\\u1F3F3` + `\\uFE0F` + `\\u200D` + `\\u26A7` + `u\\FE0F` = 🏳️ + ⚧️ = 🏳️‍⚧️  \n\n</v-clicks>\n',title:"Emoji Composition",level:2,content:'## Emoji Composition\n\n"Fun" combinations:\n\n<v-clicks>\n\n- `\\u1F9D4` + `\\u200D` + `\\u2640` + `\\uFE0F` = 🧔‍♀️ = Person Beard + ♀\n- `\\u1F9D1` + `\\u200D` + `\\u1F9b2` = 🧑‍🦲 = Adult + Bald\n- `\\u1F9D1` + `\\u200D` + `\\u2695` = 🧑‍⚕ = Adult + ⚕ (Staff of aesculapius)\n- `\\u1F9D1` + `\\u200D` + `\\u1F373` = 🧑‍🍳 = Adult + 🍳 (Cooking)\n- `\\u1F468` + `\\u1F3FB` + `\\u200D` + `\\u1F9BD` = 👨🏻‍🦽 = Man + Fitzpatrick 1-2 + Manual wheelchair \n- `\\u1F469` + `\\u1F3FF` + `\\u200D` + `\\u1F373` = 👩🏿‍🎤 = Woman + Fitzpatrick Type-6 + Microphone \n- `\\u1F3F3` + `\\uFE0F` + `\\u200D` + `\\u1F308` = 🏳️ + 🌈 = 🏳️‍🌈 \n- `\\u1F3F3` + `\\uFE0F` + `\\u200D` + `\\u26A7` + `u\\FE0F` = 🏳️ + ⚧️ = 🏳️‍⚧️  \n\n</v-clicks>',frontmatter:{hide:!1,srcSequence:"./pages/04-quirks.md"},index:56,start:252,end:270,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/04-quirks.md",raw:'\n## Emoji Composition\n\n"Fun" combinations:\n\n<v-clicks>\n\n- `\\u1F9D4` + `\\u200D` + `\\u2640` + `\\uFE0F` = 🧔‍♀️ = Person Beard + ♀\n- `\\u1F9D1` + `\\u200D` + `\\u1F9b2` = 🧑‍🦲 = Adult + Bald\n- `\\u1F9D1` + `\\u200D` + `\\u2695` = 🧑‍⚕ = Adult + ⚕ (Staff of aesculapius)\n- `\\u1F9D1` + `\\u200D` + `\\u1F373` = 🧑‍🍳 = Adult + 🍳 (Cooking)\n- `\\u1F468` + `\\u1F3FB` + `\\u200D` + `\\u1F9BD` = 👨🏻‍🦽 = Man + Fitzpatrick 1-2 + Manual wheelchair \n- `\\u1F469` + `\\u1F3FF` + `\\u200D` + `\\u1F373` = 👩🏿‍🎤 = Woman + Fitzpatrick Type-6 + Microphone \n- `\\u1F3F3` + `\\uFE0F` + `\\u200D` + `\\u1F308` = 🏳️ + 🌈 = 🏳️‍🌈 \n- `\\u1F3F3` + `\\uFE0F` + `\\u200D` + `\\u26A7` + `u\\FE0F` = 🏳️ + ⚧️ = 🏳️‍⚧️  \n\n</v-clicks>\n',title:"Emoji Composition",level:2,content:'## Emoji Composition\n\n"Fun" combinations:\n\n<v-clicks>\n\n- `\\u1F9D4` + `\\u200D` + `\\u2640` + `\\uFE0F` = 🧔‍♀️ = Person Beard + ♀\n- `\\u1F9D1` + `\\u200D` + `\\u1F9b2` = 🧑‍🦲 = Adult + Bald\n- `\\u1F9D1` + `\\u200D` + `\\u2695` = 🧑‍⚕ = Adult + ⚕ (Staff of aesculapius)\n- `\\u1F9D1` + `\\u200D` + `\\u1F373` = 🧑‍🍳 = Adult + 🍳 (Cooking)\n- `\\u1F468` + `\\u1F3FB` + `\\u200D` + `\\u1F9BD` = 👨🏻‍🦽 = Man + Fitzpatrick 1-2 + Manual wheelchair \n- `\\u1F469` + `\\u1F3FF` + `\\u200D` + `\\u1F373` = 👩🏿‍🎤 = Woman + Fitzpatrick Type-6 + Microphone \n- `\\u1F3F3` + `\\uFE0F` + `\\u200D` + `\\u1F308` = 🏳️ + 🌈 = 🏳️‍🌈 \n- `\\u1F3F3` + `\\uFE0F` + `\\u200D` + `\\u26A7` + `u\\FE0F` = 🏳️ + ⚧️ = 🏳️‍⚧️  \n\n</v-clicks>',frontmatter:{},index:8,start:252,end:270},filepath:"/home/ben/Workspace/demystifying-unicode/pages/04-quirks.md",noteHTML:"",id:56,no:57},__clicksElements:[],__preloaded:!1}},{path:"58",name:"page-58",component:cF,meta:{hide:!1,srcSequence:"./pages/04-quirks.md",slide:{raw:`
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

TL;DR; you shouldn't expect any ligatures/digraphs to be added to Unicode any time soon.`,frontmatter:{hide:!1,srcSequence:"./pages/04-quirks.md"},note:"http://unicode.org/faq/ligature_digraph.html",index:57,start:271,end:289,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/04-quirks.md",raw:`
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

TL;DR; you shouldn't expect any ligatures/digraphs to be added to Unicode any time soon.`,frontmatter:{},note:"http://unicode.org/faq/ligature_digraph.html",index:9,start:271,end:289},filepath:"/home/ben/Workspace/demystifying-unicode/pages/04-quirks.md",noteHTML:`<p>http://unicode.org/faq/ligature_digraph.html</p>
`,id:57,no:58},__clicksElements:[],__preloaded:!1}},{path:"59",name:"page-59",component:yF,meta:{hide:!1,srcSequence:"./pages/04-quirks.md",slide:{raw:`
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
- local (gbeng, etc)`,frontmatter:{hide:!1,srcSequence:"./pages/04-quirks.md"},index:58,start:290,end:305,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/04-quirks.md",raw:`
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
- local (gbeng, etc)`,frontmatter:{},index:10,start:290,end:305},filepath:"/home/ben/Workspace/demystifying-unicode/pages/04-quirks.md",noteHTML:"",id:58,no:59},__clicksElements:[],__preloaded:!1}},{path:"60",name:"page-60",component:bF,meta:{hide:!1,srcSequence:"./pages/04-quirks.md",slide:{raw:`
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
\\uE0001-\\uE007F`,index:59,start:306,end:343,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/04-quirks.md",raw:`
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
\\uE0001-\\uE007F`,index:11,start:306,end:343},filepath:"/home/ben/Workspace/demystifying-unicode/pages/04-quirks.md",noteHTML:`<p>Unicode tags: https://en.wikipedia.org/wiki/Tags_(Unicode_block)
\\uE0001-\\uE007F</p>
`,id:59,no:60},__clicksElements:[],__preloaded:!1}},{path:"61",name:"page-61",component:wF,meta:{layout:"cover",hideInToc:!0,slide:{raw:`---
layout: cover
hideInToc: true
---

# THE END
`,title:"THE END",level:1,content:"# THE END",frontmatter:{layout:"cover",hideInToc:!0},index:60,start:58,end:65,noteHTML:"",filepath:"/home/ben/Workspace/demystifying-unicode/slides.md",id:60,no:61},__clicksElements:[],__preloaded:!1}}],kF=[],Qe=BF,mo=[{name:"play",path:"/",component:j3,children:[...Qe,...kF]},{name:"print",path:"/print",component:mw},{path:"",redirect:{path:"/1"}},{path:"/:pathMatch(.*)",redirect:{path:"/1"}}];{let e=function(n){if(!yo.remote||yo.remote===n.query.password)return!0;if(yo.remote&&n.query.password===void 0){const s=prompt("Enter password");if(yo.remote===s)return!0}return n.params.no?{path:`/${n.params.no}`}:{path:""}};mo.push({path:"/presenter/print",component:()=>Nn(()=>import("./PresenterPrint-adaad19b.js"),["assets/PresenterPrint-adaad19b.js","assets/NoteDisplay-c22e2388.js"])}),mo.push({name:"notes",path:"/notes",component:()=>Nn(()=>import("./NotesView-9f7bb764.js"),["assets/NotesView-9f7bb764.js","assets/NoteDisplay-c22e2388.js"]),beforeEnter:e}),mo.push({name:"presenter",path:"/presenter/:no",component:()=>Nn(()=>import("./Presenter-b7aac48e.js"),["assets/Presenter-b7aac48e.js","assets/NoteDisplay-c22e2388.js","assets/DrawingControls-2bac91e6.js","assets/Presenter-aa6741a8.css"]),beforeEnter:e}),mo.push({path:"/presenter",redirect:{path:"/presenter/1"}})}const wt=T8({history:S_("/demystifying-unicode/"),routes:mo});function CF(e,n,{mode:s="replace"}={}){return $({get(){const o=wt.currentRoute.value.query[e];return o==null?n??null:Array.isArray(o)?o.filter(Boolean):o},set(o){it(()=>{wt[T(s)]({query:{...wt.currentRoute.value.query,[e]:o}})})}})}const ih=Y(0);it(()=>{wt.afterEach(async()=>{await it(),ih.value+=1})});const ch=Y(0),jt=$(()=>wt.currentRoute.value),An=$(()=>jt.value.query.print!==void 0),FF=$(()=>jt.value.query.print==="clicks"),vn=$(()=>jt.value.query.embedded!==void 0),xt=$(()=>jt.value.path.startsWith("/presenter")),EF=$(()=>jt.value.path.startsWith("/notes")),Bo=$(()=>An.value&&!FF.value),ja=$(()=>jt.value.query.password),DF=$(()=>!xt.value&&(!Se.remote||ja.value===Se.remote)),Yu=CF("clicks","0"),SF=$(()=>Qe.length),TF=$(()=>jt.value.path),Ve=$(()=>Number.parseInt(TF.value.split(/\//g).slice(-1)[0])||1);$(()=>vr(Ve.value));const mt=$(()=>Qe.find(e=>e.path===`${Ve.value}`));$(()=>{var e,n,s;return(s=(n=(e=mt.value)==null?void 0:e.meta)==null?void 0:n.slide)==null?void 0:s.id});$(()=>{var e,n;return((n=(e=mt.value)==null?void 0:e.meta)==null?void 0:n.layout)||(Ve.value===1?"cover":"default")});const Hr=$(()=>Qe.find(e=>e.path===`${Math.min(Qe.length,Ve.value+1)}`)),$F=$(()=>Qe.find(e=>e.path===`${Math.max(1,Ve.value-1)}`)),UF=$(()=>{var e,n;return ih.value,((n=(e=mt.value)==null?void 0:e.meta)==null?void 0:n.__clicksElements)||[]}),Rt=$({get(){if(Bo.value)return 99999;let e=+(Yu.value||0);return Number.isNaN(e)&&(e=0),e},set(e){Yu.value=e.toString()}}),Zl=$(()=>{var e,n;return+(((n=(e=mt.value)==null?void 0:e.meta)==null?void 0:n.clicks)??UF.value.length)}),OF=$(()=>Ve.value<Qe.length||Rt.value<Zl.value),PF=$(()=>Ve.value>1||Rt.value>0),IF=$(()=>Qe.filter(e=>{var n,s;return(s=(n=e.meta)==null?void 0:n.slide)==null?void 0:s.title}).reduce((e,n)=>(qi(e,n),e),[])),MF=$(()=>Wi(IF.value,mt.value));$(()=>ji(MF.value));const LF=$(()=>jF(ch.value,mt.value,$F.value));ge(mt,(e,n)=>{ch.value=Number(e==null?void 0:e.path)-Number(n==null?void 0:n.path)});function Wn(){Zl.value<=Rt.value?qo():Rt.value+=1}async function jn(){Rt.value<=0?await Wo():Rt.value-=1}function vr(e){return xt.value?`/presenter/${e}`:`/${e}`}function qo(){const e=Math.min(Qe.length,Ve.value+1);return Vs(e)}async function Wo(e=!0){const n=Math.max(1,Ve.value-1);await Vs(n),e&&Zl.value&&wt.replace({query:{...jt.value.query,clicks:Zl.value}})}function Vs(e,n){return wt.push({path:vr(e),query:{...jt.value.query,clicks:n}})}function RF(e){const n=Y(0),{direction:s,distanceX:o,distanceY:l}=Xv(e,{onSwipeStart(r){r.pointerType==="touch"&&(Lo.value||(n.value=Ba()))},onSwipeEnd(r){if(r.pointerType!=="touch"||!n.value||Lo.value)return;const a=Math.abs(o.value),i=Math.abs(l.value);a/window.innerWidth>.3||a>100?s.value==="left"?Wn():jn():(i/window.innerHeight>.4||i>200)&&(s.value==="down"?Wo():qo())}})}async function Ha(){const{saveAs:e}=await Nn(()=>import("./FileSaver.min-23a5d44b.js").then(n=>n.F),[]);e(typeof Se.download=="string"?Se.download:Se.exportFilename?`${Se.exportFilename}.pdf`:"/demystifying-unicode/slidev-exported.pdf",`${Se.title}.pdf`)}async function NF(e){var n,s;if(e==null){const o=(s=(n=mt.value)==null?void 0:n.meta)==null?void 0:s.slide;if(!(o!=null&&o.filepath))return!1;e=`${o.filepath}:${o.start}`}return await fetch(`/__open-in-editor?file=${encodeURIComponent(e)}`),!0}function qi(e,n,s=1){var l,r,a,i,c;const o=(r=(l=n.meta)==null?void 0:l.slide)==null?void 0:r.level;o&&o>s&&e.length>0?qi(e[e.length-1].children,n,s+1):e.push({children:[],level:s,path:n.path,hideInToc:!!((a=n.meta)!=null&&a.hideInToc),title:(c=(i=n.meta)==null?void 0:i.slide)==null?void 0:c.title})}function Wi(e,n,s=!1,o){return e.map(l=>{const r={...l,active:l.path===(n==null?void 0:n.path),hasActiveParent:s};return r.children.length>0&&(r.children=Wi(r.children,n,r.active||r.hasActiveParent,r)),o&&(r.active||r.activeParent)&&(o.activeParent=!0),r})}function ji(e,n=1){return e.filter(s=>!s.hideInToc).map(s=>({...s,children:ji(s.children,n+1)}))}const qF={"slide-left":"slide-left | slide-right","slide-right":"slide-right | slide-left","slide-up":"slide-up | slide-down","slide-down":"slide-down | slide-up"};function WF(e,n=!1){if(!e||(typeof e=="string"&&(e={name:e}),!e.name))return;let s=e.name.includes("|")?e.name:qF[e.name]||e.name;if(s.includes("|")){const[o,l]=s.split("|").map(r=>r.trim());s=n?l:o}if(s)return{...e,name:s}}function jF(e,n,s){var l,r;let o=e>0?(l=s==null?void 0:s.meta)==null?void 0:l.transition:(r=n==null?void 0:n.meta)==null?void 0:r.transition;return o||(o=Se.transition),WF(o,e<0)}function HF(){const e=Se.titleTemplate.replace("%s",Se.title||"Slidev");Qd({title:e,htmlAttrs:Se.htmlAttrs}),Dg(`${e} - shared`),Ug(`${e} - drawings`);const n=`${location.origin}_${wg()}`;function s(){EF.value||!xt.value&&!_g.includes(location.host.split(":")[0])||(xt.value?(no("page",+Ve.value),no("clicks",Rt.value)):(no("viewerPage",+Ve.value),no("viewerClicks",Rt.value)),no("lastUpdate",{id:n,type:xt.value?"presenter":"viewer",time:new Date().getTime()}))}wt.afterEach(s),ge(Rt,s),Sg(o=>{var r;wt.currentRoute.value.path.match(/^\/(\d+|presenter)\/?/)&&((r=o.lastUpdate)==null?void 0:r.type)==="presenter"&&(+o.page!=+Ve.value||+Rt.value!=+o.clicks)&&wt.replace({path:vr(o.page),query:{...wt.currentRoute.value.query,clicks:o.clicks||0}})})}const VF=ke({__name:"App",setup(e){return L(H),HF(),(n,s)=>{const o=Ws("RouterView"),l=Ws("StarportCarrier");return v(),k(De,null,[I(o),I(l)],64)}}}),zF=V(VF,[["__file","/home/ben/Workspace/demystifying-unicode/node_modules/@slidev/client/App.vue"]]);function Vr(e){return e!==null&&typeof e=="object"}function Va(e,n,s=".",o){if(!Vr(n))return Va(e,{},s,o);const l=Object.assign({},n);for(const r in e){if(r==="__proto__"||r==="constructor")continue;const a=e[r];a!=null&&(o&&o(l,r,a,s)||(Array.isArray(a)&&Array.isArray(l[r])?l[r]=[...a,...l[r]]:Vr(a)&&Vr(l[r])?l[r]=Va(a,l[r],(s?`${s}.`:"")+r.toString(),o):l[r]=a))}return l}function KF(e){return(...n)=>n.reduce((s,o)=>Va(s,o,"",e),{})}const GF=KF(),uh=1/60*1e3,YF=typeof performance<"u"?()=>performance.now():()=>Date.now(),ph=typeof window<"u"?e=>window.requestAnimationFrame(e):e=>setTimeout(()=>e(YF()),uh);function QF(e){let n=[],s=[],o=0,l=!1,r=!1;const a=new WeakSet,i={schedule:(c,u=!1,p=!1)=>{const f=p&&l,h=f?n:s;return u&&a.add(c),h.indexOf(c)===-1&&(h.push(c),f&&l&&(o=n.length)),c},cancel:c=>{const u=s.indexOf(c);u!==-1&&s.splice(u,1),a.delete(c)},process:c=>{if(l){r=!0;return}if(l=!0,[n,s]=[s,n],s.length=0,o=n.length,o)for(let u=0;u<o;u++){const p=n[u];p(c),a.has(p)&&(i.schedule(p),e())}l=!1,r&&(r=!1,i.process(c))}};return i}const ZF=40;let za=!0,jo=!1,Ka=!1;const qs={delta:0,timestamp:0},Jo=["read","update","preRender","render","postRender"],_r=Jo.reduce((e,n)=>(e[n]=QF(()=>jo=!0),e),{}),Ga=Jo.reduce((e,n)=>{const s=_r[n];return e[n]=(o,l=!1,r=!1)=>(jo||eE(),s.schedule(o,l,r)),e},{}),JF=Jo.reduce((e,n)=>(e[n]=_r[n].cancel,e),{});Jo.reduce((e,n)=>(e[n]=()=>_r[n].process(qs),e),{});const XF=e=>_r[e].process(qs),dh=e=>{jo=!1,qs.delta=za?uh:Math.max(Math.min(e-qs.timestamp,ZF),1),qs.timestamp=e,Ka=!0,Jo.forEach(XF),Ka=!1,jo&&(za=!1,ph(dh))},eE=()=>{jo=!0,za=!0,Ka||ph(dh)},fh=()=>qs;function hh(e,n){var s={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.indexOf(o)<0&&(s[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,o=Object.getOwnPropertySymbols(e);l<o.length;l++)n.indexOf(o[l])<0&&Object.prototype.propertyIsEnumerable.call(e,o[l])&&(s[o[l]]=e[o[l]]);return s}var Hi=function(){},Ho=function(){};Hi=function(e,n){!e&&typeof console<"u"&&console.warn(n)},Ho=function(e,n){if(!e)throw new Error(n)};const Ya=(e,n,s)=>Math.min(Math.max(s,e),n),zr=.001,tE=.01,Qu=10,nE=.05,sE=1;function oE({duration:e=800,bounce:n=.25,velocity:s=0,mass:o=1}){let l,r;Hi(e<=Qu*1e3,"Spring duration must be 10 seconds or less");let a=1-n;a=Ya(nE,sE,a),e=Ya(tE,Qu,e/1e3),a<1?(l=u=>{const p=u*a,f=p*e,h=p-s,y=Qa(u,a),m=Math.exp(-f);return zr-h/y*m},r=u=>{const f=u*a*e,h=f*s+s,y=Math.pow(a,2)*Math.pow(u,2)*e,m=Math.exp(-f),b=Qa(Math.pow(u,2),a);return(-l(u)+zr>0?-1:1)*((h-y)*m)/b}):(l=u=>{const p=Math.exp(-u*e),f=(u-s)*e+1;return-zr+p*f},r=u=>{const p=Math.exp(-u*e),f=(s-u)*(e*e);return p*f});const i=5/e,c=rE(l,r,i);if(e=e*1e3,isNaN(c))return{stiffness:100,damping:10,duration:e};{const u=Math.pow(c,2)*o;return{stiffness:u,damping:a*2*Math.sqrt(o*u),duration:e}}}const lE=12;function rE(e,n,s){let o=s;for(let l=1;l<lE;l++)o=o-e(o)/n(o);return o}function Qa(e,n){return e*Math.sqrt(1-n*n)}const aE=["duration","bounce"],iE=["stiffness","damping","mass"];function Zu(e,n){return n.some(s=>e[s]!==void 0)}function cE(e){let n=Object.assign({velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1},e);if(!Zu(e,iE)&&Zu(e,aE)){const s=oE(e);n=Object.assign(Object.assign(Object.assign({},n),s),{velocity:0,mass:1}),n.isResolvedFromDuration=!0}return n}function Vi(e){var{from:n=0,to:s=1,restSpeed:o=2,restDelta:l}=e,r=hh(e,["from","to","restSpeed","restDelta"]);const a={done:!1,value:n};let{stiffness:i,damping:c,mass:u,velocity:p,duration:f,isResolvedFromDuration:h}=cE(r),y=Ju,m=Ju;function b(){const w=p?-(p/1e3):0,A=s-n,B=c/(2*Math.sqrt(i*u)),x=Math.sqrt(i/u)/1e3;if(l===void 0&&(l=Math.min(Math.abs(s-n)/100,.4)),B<1){const C=Qa(x,B);y=F=>{const D=Math.exp(-B*x*F);return s-D*((w+B*x*A)/C*Math.sin(C*F)+A*Math.cos(C*F))},m=F=>{const D=Math.exp(-B*x*F);return B*x*D*(Math.sin(C*F)*(w+B*x*A)/C+A*Math.cos(C*F))-D*(Math.cos(C*F)*(w+B*x*A)-C*A*Math.sin(C*F))}}else if(B===1)y=C=>s-Math.exp(-x*C)*(A+(w+x*A)*C);else{const C=x*Math.sqrt(B*B-1);y=F=>{const D=Math.exp(-B*x*F),R=Math.min(C*F,300);return s-D*((w+B*x*A)*Math.sinh(R)+C*A*Math.cosh(R))/C}}}return b(),{next:w=>{const A=y(w);if(h)a.done=w>=f;else{const B=m(w)*1e3,x=Math.abs(B)<=o,C=Math.abs(s-A)<=l;a.done=x&&C}return a.value=a.done?s:A,a},flipTarget:()=>{p=-p,[n,s]=[s,n],b()}}}Vi.needsInterpolation=(e,n)=>typeof e=="string"||typeof n=="string";const Ju=e=>0,yh=(e,n,s)=>{const o=n-e;return o===0?1:(s-e)/o},zi=(e,n,s)=>-s*e+s*n+e,mh=(e,n)=>s=>Math.max(Math.min(s,n),e),ko=e=>e%1?Number(e.toFixed(5)):e,Vo=/(-)?([\d]*\.?[\d])+/g,Za=/(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,uE=/^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function Xo(e){return typeof e=="string"}const el={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},Co=Object.assign(Object.assign({},el),{transform:mh(0,1)}),vl=Object.assign(Object.assign({},el),{default:1}),Ki=e=>({test:n=>Xo(n)&&n.endsWith(e)&&n.split(" ").length===1,parse:parseFloat,transform:n=>`${n}${e}`}),es=Ki("deg"),Fo=Ki("%"),_e=Ki("px"),Xu=Object.assign(Object.assign({},Fo),{parse:e=>Fo.parse(e)/100,transform:e=>Fo.transform(e*100)}),Gi=(e,n)=>s=>!!(Xo(s)&&uE.test(s)&&s.startsWith(e)||n&&Object.prototype.hasOwnProperty.call(s,n)),gh=(e,n,s)=>o=>{if(!Xo(o))return o;const[l,r,a,i]=o.match(Vo);return{[e]:parseFloat(l),[n]:parseFloat(r),[s]:parseFloat(a),alpha:i!==void 0?parseFloat(i):1}},fs={test:Gi("hsl","hue"),parse:gh("hue","saturation","lightness"),transform:({hue:e,saturation:n,lightness:s,alpha:o=1})=>"hsla("+Math.round(e)+", "+Fo.transform(ko(n))+", "+Fo.transform(ko(s))+", "+ko(Co.transform(o))+")"},pE=mh(0,255),Kr=Object.assign(Object.assign({},el),{transform:e=>Math.round(pE(e))}),Pn={test:Gi("rgb","red"),parse:gh("red","green","blue"),transform:({red:e,green:n,blue:s,alpha:o=1})=>"rgba("+Kr.transform(e)+", "+Kr.transform(n)+", "+Kr.transform(s)+", "+ko(Co.transform(o))+")"};function dE(e){let n="",s="",o="",l="";return e.length>5?(n=e.substr(1,2),s=e.substr(3,2),o=e.substr(5,2),l=e.substr(7,2)):(n=e.substr(1,1),s=e.substr(2,1),o=e.substr(3,1),l=e.substr(4,1),n+=n,s+=s,o+=o,l+=l),{red:parseInt(n,16),green:parseInt(s,16),blue:parseInt(o,16),alpha:l?parseInt(l,16)/255:1}}const Ja={test:Gi("#"),parse:dE,transform:Pn.transform},bt={test:e=>Pn.test(e)||Ja.test(e)||fs.test(e),parse:e=>Pn.test(e)?Pn.parse(e):fs.test(e)?fs.parse(e):Ja.parse(e),transform:e=>Xo(e)?e:e.hasOwnProperty("red")?Pn.transform(e):fs.transform(e)},vh="${c}",_h="${n}";function fE(e){var n,s,o,l;return isNaN(e)&&Xo(e)&&((s=(n=e.match(Vo))===null||n===void 0?void 0:n.length)!==null&&s!==void 0?s:0)+((l=(o=e.match(Za))===null||o===void 0?void 0:o.length)!==null&&l!==void 0?l:0)>0}function bh(e){typeof e=="number"&&(e=`${e}`);const n=[];let s=0;const o=e.match(Za);o&&(s=o.length,e=e.replace(Za,vh),n.push(...o.map(bt.parse)));const l=e.match(Vo);return l&&(e=e.replace(Vo,_h),n.push(...l.map(el.parse))),{values:n,numColors:s,tokenised:e}}function xh(e){return bh(e).values}function Ah(e){const{values:n,numColors:s,tokenised:o}=bh(e),l=n.length;return r=>{let a=o;for(let i=0;i<l;i++)a=a.replace(i<s?vh:_h,i<s?bt.transform(r[i]):ko(r[i]));return a}}const hE=e=>typeof e=="number"?0:e;function yE(e){const n=xh(e);return Ah(e)(n.map(hE))}const tl={test:fE,parse:xh,createTransformer:Ah,getAnimatableNone:yE},mE=new Set(["brightness","contrast","saturate","opacity"]);function gE(e){let[n,s]=e.slice(0,-1).split("(");if(n==="drop-shadow")return e;const[o]=s.match(Vo)||[];if(!o)return e;const l=s.replace(o,"");let r=mE.has(n)?1:0;return o!==s&&(r*=100),n+"("+r+l+")"}const vE=/([a-z-]*)\(.*?\)/g,Xa=Object.assign(Object.assign({},tl),{getAnimatableNone:e=>{const n=e.match(vE);return n?n.map(gE).join(" "):e}});function Gr(e,n,s){return s<0&&(s+=1),s>1&&(s-=1),s<1/6?e+(n-e)*6*s:s<1/2?n:s<2/3?e+(n-e)*(2/3-s)*6:e}function ep({hue:e,saturation:n,lightness:s,alpha:o}){e/=360,n/=100,s/=100;let l=0,r=0,a=0;if(!n)l=r=a=s;else{const i=s<.5?s*(1+n):s+n-s*n,c=2*s-i;l=Gr(c,i,e+1/3),r=Gr(c,i,e),a=Gr(c,i,e-1/3)}return{red:Math.round(l*255),green:Math.round(r*255),blue:Math.round(a*255),alpha:o}}const _E=(e,n,s)=>{const o=e*e,l=n*n;return Math.sqrt(Math.max(0,s*(l-o)+o))},bE=[Ja,Pn,fs],tp=e=>bE.find(n=>n.test(e)),np=e=>`'${e}' is not an animatable color. Use the equivalent color code instead.`,wh=(e,n)=>{let s=tp(e),o=tp(n);Ho(!!s,np(e)),Ho(!!o,np(n));let l=s.parse(e),r=o.parse(n);s===fs&&(l=ep(l),s=Pn),o===fs&&(r=ep(r),o=Pn);const a=Object.assign({},l);return i=>{for(const c in a)c!=="alpha"&&(a[c]=_E(l[c],r[c],i));return a.alpha=zi(l.alpha,r.alpha,i),s.transform(a)}},xE=e=>typeof e=="number",AE=(e,n)=>s=>n(e(s)),Bh=(...e)=>e.reduce(AE);function kh(e,n){return xE(e)?s=>zi(e,n,s):bt.test(e)?wh(e,n):Fh(e,n)}const Ch=(e,n)=>{const s=[...e],o=s.length,l=e.map((r,a)=>kh(r,n[a]));return r=>{for(let a=0;a<o;a++)s[a]=l[a](r);return s}},wE=(e,n)=>{const s=Object.assign(Object.assign({},e),n),o={};for(const l in s)e[l]!==void 0&&n[l]!==void 0&&(o[l]=kh(e[l],n[l]));return l=>{for(const r in o)s[r]=o[r](l);return s}};function sp(e){const n=tl.parse(e),s=n.length;let o=0,l=0,r=0;for(let a=0;a<s;a++)o||typeof n[a]=="number"?o++:n[a].hue!==void 0?r++:l++;return{parsed:n,numNumbers:o,numRGB:l,numHSL:r}}const Fh=(e,n)=>{const s=tl.createTransformer(n),o=sp(e),l=sp(n);return o.numHSL===l.numHSL&&o.numRGB===l.numRGB&&o.numNumbers>=l.numNumbers?Bh(Ch(o.parsed,l.parsed),s):(Hi(!0,`Complex values '${e}' and '${n}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`),a=>`${a>0?n:e}`)},BE=(e,n)=>s=>zi(e,n,s);function kE(e){if(typeof e=="number")return BE;if(typeof e=="string")return bt.test(e)?wh:Fh;if(Array.isArray(e))return Ch;if(typeof e=="object")return wE}function CE(e,n,s){const o=[],l=s||kE(e[0]),r=e.length-1;for(let a=0;a<r;a++){let i=l(e[a],e[a+1]);if(n){const c=Array.isArray(n)?n[a]:n;i=Bh(c,i)}o.push(i)}return o}function FE([e,n],[s]){return o=>s(yh(e,n,o))}function EE(e,n){const s=e.length,o=s-1;return l=>{let r=0,a=!1;if(l<=e[0]?a=!0:l>=e[o]&&(r=o-1,a=!0),!a){let c=1;for(;c<s&&!(e[c]>l||c===o);c++);r=c-1}const i=yh(e[r],e[r+1],l);return n[r](i)}}function Eh(e,n,{clamp:s=!0,ease:o,mixer:l}={}){const r=e.length;Ho(r===n.length,"Both input and output ranges must be the same length"),Ho(!o||!Array.isArray(o)||o.length===r-1,"Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values."),e[0]>e[r-1]&&(e=[].concat(e),n=[].concat(n),e.reverse(),n.reverse());const a=CE(n,o,l),i=r===2?FE(e,a):EE(e,a);return s?c=>i(Ya(e[0],e[r-1],c)):i}const br=e=>n=>1-e(1-n),Yi=e=>n=>n<=.5?e(2*n)/2:(2-e(2*(1-n)))/2,DE=e=>n=>Math.pow(n,e),Dh=e=>n=>n*n*((e+1)*n-e),SE=e=>{const n=Dh(e);return s=>(s*=2)<1?.5*n(s):.5*(2-Math.pow(2,-10*(s-1)))},Sh=1.525,TE=4/11,$E=8/11,UE=9/10,Th=e=>e,Qi=DE(2),OE=br(Qi),$h=Yi(Qi),Uh=e=>1-Math.sin(Math.acos(e)),Oh=br(Uh),PE=Yi(Oh),Zi=Dh(Sh),IE=br(Zi),ME=Yi(Zi),LE=SE(Sh),RE=4356/361,NE=35442/1805,qE=16061/1805,Jl=e=>{if(e===1||e===0)return e;const n=e*e;return e<TE?7.5625*n:e<$E?9.075*n-9.9*e+3.4:e<UE?RE*n-NE*e+qE:10.8*e*e-20.52*e+10.72},WE=br(Jl),jE=e=>e<.5?.5*(1-Jl(1-e*2)):.5*Jl(e*2-1)+.5;function HE(e,n){return e.map(()=>n||$h).splice(0,e.length-1)}function VE(e){const n=e.length;return e.map((s,o)=>o!==0?o/(n-1):0)}function zE(e,n){return e.map(s=>s*n)}function El({from:e=0,to:n=1,ease:s,offset:o,duration:l=300}){const r={done:!1,value:e},a=Array.isArray(n)?n:[e,n],i=zE(o&&o.length===a.length?o:VE(a),l);function c(){return Eh(i,a,{ease:Array.isArray(s)?s:HE(a,s)})}let u=c();return{next:p=>(r.value=u(p),r.done=p>=l,r),flipTarget:()=>{a.reverse(),u=c()}}}function KE({velocity:e=0,from:n=0,power:s=.8,timeConstant:o=350,restDelta:l=.5,modifyTarget:r}){const a={done:!1,value:n};let i=s*e;const c=n+i,u=r===void 0?c:r(c);return u!==c&&(i=u-n),{next:p=>{const f=-i*Math.exp(-p/o);return a.done=!(f>l||f<-l),a.value=a.done?u:u+f,a},flipTarget:()=>{}}}const op={keyframes:El,spring:Vi,decay:KE};function GE(e){if(Array.isArray(e.to))return El;if(op[e.type])return op[e.type];const n=new Set(Object.keys(e));return n.has("ease")||n.has("duration")&&!n.has("dampingRatio")?El:n.has("dampingRatio")||n.has("stiffness")||n.has("mass")||n.has("damping")||n.has("restSpeed")||n.has("restDelta")?Vi:El}function Ph(e,n,s=0){return e-n-s}function YE(e,n,s=0,o=!0){return o?Ph(n+-e,n,s):n-(e-n)+s}function QE(e,n,s,o){return o?e>=n+s:e<=-s}const ZE=e=>{const n=({delta:s})=>e(s);return{start:()=>Ga.update(n,!0),stop:()=>JF.update(n)}};function Ih(e){var n,s,{from:o,autoplay:l=!0,driver:r=ZE,elapsed:a=0,repeat:i=0,repeatType:c="loop",repeatDelay:u=0,onPlay:p,onStop:f,onComplete:h,onRepeat:y,onUpdate:m}=e,b=hh(e,["from","autoplay","driver","elapsed","repeat","repeatType","repeatDelay","onPlay","onStop","onComplete","onRepeat","onUpdate"]);let{to:w}=b,A,B=0,x=b.duration,C,F=!1,D=!0,R;const U=GE(b);!((s=(n=U).needsInterpolation)===null||s===void 0)&&s.call(n,o,w)&&(R=Eh([0,100],[o,w],{clamp:!1}),o=0,w=100);const j=U(Object.assign(Object.assign({},b),{from:o,to:w}));function ne(){B++,c==="reverse"?(D=B%2===0,a=YE(a,x,u,D)):(a=Ph(a,x,u),c==="mirror"&&j.flipTarget()),F=!1,y&&y()}function ue(){A.stop(),h&&h()}function Q(ve){if(D||(ve=-ve),a+=ve,!F){const be=j.next(Math.max(0,a));C=be.value,R&&(C=R(C)),F=D?be.done:a<=0}m==null||m(C),F&&(B===0&&(x??(x=a)),B<i?QE(a,x,u,D)&&ne():ue())}function ye(){p==null||p(),A=r(Q),A.start()}return l&&ye(),{stop:()=>{f==null||f(),A.stop()}}}function Mh(e,n){return n?e*(1e3/n):0}function JE({from:e=0,velocity:n=0,min:s,max:o,power:l=.8,timeConstant:r=750,bounceStiffness:a=500,bounceDamping:i=10,restDelta:c=1,modifyTarget:u,driver:p,onUpdate:f,onComplete:h,onStop:y}){let m;function b(x){return s!==void 0&&x<s||o!==void 0&&x>o}function w(x){return s===void 0?o:o===void 0||Math.abs(s-x)<Math.abs(o-x)?s:o}function A(x){m==null||m.stop(),m=Ih(Object.assign(Object.assign({},x),{driver:p,onUpdate:C=>{var F;f==null||f(C),(F=x.onUpdate)===null||F===void 0||F.call(x,C)},onComplete:h,onStop:y}))}function B(x){A(Object.assign({type:"spring",stiffness:a,damping:i,restDelta:c},x))}if(b(e))B({from:e,velocity:n,to:w(e)});else{let x=l*n+e;typeof u<"u"&&(x=u(x));const C=w(x),F=C===s?-1:1;let D,R;const U=j=>{D=R,R=j,n=Mh(j-D,fh().delta),(F===1&&j>C||F===-1&&j<C)&&B({from:j,to:C,velocity:n})};A({type:"decay",from:e,velocity:n,timeConstant:r,power:l,restDelta:c,modifyTarget:u,onUpdate:b(x)?U:void 0})}return{stop:()=>m==null?void 0:m.stop()}}const Lh=(e,n)=>1-3*n+3*e,Rh=(e,n)=>3*n-6*e,Nh=e=>3*e,Xl=(e,n,s)=>((Lh(n,s)*e+Rh(n,s))*e+Nh(n))*e,qh=(e,n,s)=>3*Lh(n,s)*e*e+2*Rh(n,s)*e+Nh(n),XE=1e-7,eD=10;function tD(e,n,s,o,l){let r,a,i=0;do a=n+(s-n)/2,r=Xl(a,o,l)-e,r>0?s=a:n=a;while(Math.abs(r)>XE&&++i<eD);return a}const nD=8,sD=.001;function oD(e,n,s,o){for(let l=0;l<nD;++l){const r=qh(n,s,o);if(r===0)return n;const a=Xl(n,s,o)-e;n-=a/r}return n}const Dl=11,_l=1/(Dl-1);function lD(e,n,s,o){if(e===n&&s===o)return Th;const l=new Float32Array(Dl);for(let a=0;a<Dl;++a)l[a]=Xl(a*_l,e,s);function r(a){let i=0,c=1;const u=Dl-1;for(;c!==u&&l[c]<=a;++c)i+=_l;--c;const p=(a-l[c])/(l[c+1]-l[c]),f=i+p*_l,h=qh(f,e,s);return h>=sD?oD(a,f,e,s):h===0?f:tD(a,i,i+_l,e,s)}return a=>a===0||a===1?a:Xl(r(a),n,o)}const Yr={};class rD{constructor(){this.subscriptions=new Set}add(n){return this.subscriptions.add(n),()=>this.subscriptions.delete(n)}notify(n,s,o){if(this.subscriptions.size)for(const l of this.subscriptions)l(n,s,o)}clear(){this.subscriptions.clear()}}function lp(e){return!isNaN(parseFloat(e))}class aD{constructor(n){this.timeDelta=0,this.lastUpdated=0,this.updateSubscribers=new rD,this.canTrackVelocity=!1,this.updateAndNotify=s=>{this.prev=this.current,this.current=s;const{delta:o,timestamp:l}=fh();this.lastUpdated!==l&&(this.timeDelta=o,this.lastUpdated=l),Ga.postRender(this.scheduleVelocityCheck),this.updateSubscribers.notify(this.current)},this.scheduleVelocityCheck=()=>Ga.postRender(this.velocityCheck),this.velocityCheck=({timestamp:s})=>{this.canTrackVelocity||(this.canTrackVelocity=lp(this.current)),s!==this.lastUpdated&&(this.prev=this.current)},this.prev=this.current=n,this.canTrackVelocity=lp(this.current)}onChange(n){return this.updateSubscribers.add(n)}clearListeners(){this.updateSubscribers.clear()}set(n){this.updateAndNotify(n)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?Mh(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(n){return this.stop(),new Promise(s=>{const{stop:o}=n(s);this.stopAnimation=o}).then(()=>this.clearAnimation())}stop(){this.stopAnimation&&this.stopAnimation(),this.clearAnimation()}isAnimating(){return!!this.stopAnimation}clearAnimation(){this.stopAnimation=null}destroy(){this.updateSubscribers.clear(),this.stop()}}function iD(e){return new aD(e)}const{isArray:cD}=Array;function uD(){const e=Y({}),n=o=>{const l=r=>{e.value[r]&&(e.value[r].stop(),e.value[r].destroy(),delete e.value[r])};o?cD(o)?o.forEach(l):l(o):Object.keys(e.value).forEach(l)},s=(o,l,r)=>{if(e.value[o])return e.value[o];const a=iD(l);return a.onChange(i=>r[o]=i),e.value[o]=a,a};return tv(n),{motionValues:e,get:s,stop:n}}function pD(e){return Array.isArray(e)}function ts(){return{type:"spring",stiffness:500,damping:25,restDelta:.5,restSpeed:10}}function Qr(e){return{type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restDelta:.01,restSpeed:10}}function dD(e){return{type:"spring",stiffness:550,damping:e===0?100:30,restDelta:.01,restSpeed:10}}function Zr(){return{type:"keyframes",ease:"linear",duration:300}}function fD(e){return{type:"keyframes",duration:800,values:e}}const rp={default:dD,x:ts,y:ts,z:ts,rotate:ts,rotateX:ts,rotateY:ts,rotateZ:ts,scaleX:Qr,scaleY:Qr,scale:Qr,backgroundColor:Zr,color:Zr,opacity:Zr};function Wh(e,n){let s;return pD(n)?s=fD:s=rp[e]||rp.default,{to:n,...s(n)}}const ap={...el,transform:Math.round},jh={color:bt,backgroundColor:bt,outlineColor:bt,fill:bt,stroke:bt,borderColor:bt,borderTopColor:bt,borderRightColor:bt,borderBottomColor:bt,borderLeftColor:bt,borderWidth:_e,borderTopWidth:_e,borderRightWidth:_e,borderBottomWidth:_e,borderLeftWidth:_e,borderRadius:_e,radius:_e,borderTopLeftRadius:_e,borderTopRightRadius:_e,borderBottomRightRadius:_e,borderBottomLeftRadius:_e,width:_e,maxWidth:_e,height:_e,maxHeight:_e,size:_e,top:_e,right:_e,bottom:_e,left:_e,padding:_e,paddingTop:_e,paddingRight:_e,paddingBottom:_e,paddingLeft:_e,margin:_e,marginTop:_e,marginRight:_e,marginBottom:_e,marginLeft:_e,rotate:es,rotateX:es,rotateY:es,rotateZ:es,scale:vl,scaleX:vl,scaleY:vl,scaleZ:vl,skew:es,skewX:es,skewY:es,distance:_e,translateX:_e,translateY:_e,translateZ:_e,x:_e,y:_e,z:_e,perspective:_e,transformPerspective:_e,opacity:Co,originX:Xu,originY:Xu,originZ:_e,zIndex:ap,filter:Xa,WebkitFilter:Xa,fillOpacity:Co,strokeOpacity:Co,numOctaves:ap},Ji=e=>jh[e];function Hh(e,n){return n&&typeof e=="number"&&n.transform?n.transform(e):e}function hD(e,n){let s=Ji(e);return s!==Xa&&(s=tl),s.getAnimatableNone?s.getAnimatableNone(n):void 0}const yD={linear:Th,easeIn:Qi,easeInOut:$h,easeOut:OE,circIn:Uh,circInOut:PE,circOut:Oh,backIn:Zi,backInOut:ME,backOut:IE,anticipate:LE,bounceIn:WE,bounceInOut:jE,bounceOut:Jl};function ip(e){if(Array.isArray(e)){const[n,s,o,l]=e;return lD(n,s,o,l)}else if(typeof e=="string")return yD[e];return e}function mD(e){return Array.isArray(e)&&typeof e[0]!="number"}function cp(e,n){return e==="zIndex"?!1:!!(typeof n=="number"||Array.isArray(n)||typeof n=="string"&&tl.test(n)&&!n.startsWith("url("))}function gD(e){return Array.isArray(e.to)&&e.to[0]===null&&(e.to=[...e.to],e.to[0]=e.from),e}function vD({ease:e,times:n,delay:s,...o}){const l={...o};return n&&(l.offset=n),e&&(l.ease=mD(e)?e.map(ip):ip(e)),s&&(l.elapsed=-s),l}function _D(e,n,s){return Array.isArray(n.to)&&(e.duration||(e.duration=800)),gD(n),bD(e)||(e={...e,...Wh(s,n.to)}),{...n,...vD(e)}}function bD({delay:e,repeat:n,repeatType:s,repeatDelay:o,from:l,...r}){return!!Object.keys(r).length}function xD(e,n){return e[n]||e.default||e}function AD(e,n,s,o,l){const r=xD(o,e);let a=r.from===null||r.from===void 0?n.get():r.from;const i=cp(e,s);a==="none"&&i&&typeof s=="string"&&(a=hD(e,s));const c=cp(e,a);function u(f){const h={from:a,to:s,velocity:o.velocity?o.velocity:n.getVelocity(),onUpdate:y=>n.set(y)};return r.type==="inertia"||r.type==="decay"?JE({...h,...r}):Ih({..._D(r,h,e),onUpdate:y=>{h.onUpdate(y),r.onUpdate&&r.onUpdate(y)},onComplete:()=>{o.onComplete&&o.onComplete(),l&&l(),f&&f()}})}function p(f){return n.set(s),o.onComplete&&o.onComplete(),l&&l(),f&&f(),{stop:()=>{}}}return!c||!i||r.type===!1?p:u}function wD(){const{motionValues:e,stop:n,get:s}=uD();return{motionValues:e,stop:n,push:(l,r,a,i={},c)=>{const u=a[l],p=s(l,u,a);if(i&&i.immediate){p.set(r);return}const f=AD(l,p,r,i,c);p.start(f)}}}function BD(e,n={},{motionValues:s,push:o,stop:l}=wD()){const r=T(n),a=Y(!1);ge(s,f=>{a.value=Object.values(f).filter(h=>h.isAnimating()).length>0},{immediate:!0,deep:!0});const i=f=>{if(!r||!r[f])throw new Error(`The variant ${f} does not exist.`);return r[f]},c=f=>(typeof f=="string"&&(f=i(f)),Promise.all(Object.entries(f).map(([h,y])=>{if(h!=="transition")return new Promise(m=>o(h,y,e,f.transition||Wh(h,f[h]),m))}).filter(Boolean)));return{isAnimating:a,apply:c,set:f=>{const h=wa(f)?f:i(f);Object.entries(h).forEach(([y,m])=>{y!=="transition"&&o(y,m,e,{immediate:!0})})},leave:async f=>{let h;if(r&&(r.leave&&(h=r.leave),!r.leave&&r.initial&&(h=r.initial)),!h){f();return}await c(h),f()},stop:l}}const Xi=typeof window<"u",kD=()=>Xi&&window.onpointerdown===null,CD=()=>Xi&&window.ontouchstart===null,FD=()=>Xi&&window.onmousedown===null;function ED({target:e,state:n,variants:s,apply:o}){const l=T(s),r=Y(!1),a=Y(!1),i=Y(!1),c=$(()=>{let p=[];return l&&(l.hovered&&(p=[...p,...Object.keys(l.hovered)]),l.tapped&&(p=[...p,...Object.keys(l.tapped)]),l.focused&&(p=[...p,...Object.keys(l.focused)])),p}),u=$(()=>{const p={};Object.assign(p,n.value),r.value&&l.hovered&&Object.assign(p,l.hovered),a.value&&l.tapped&&Object.assign(p,l.tapped),i.value&&l.focused&&Object.assign(p,l.focused);for(const f in p)c.value.includes(f)||delete p[f];return p});l.hovered&&(xe(e,"mouseenter",()=>r.value=!0),xe(e,"mouseleave",()=>{r.value=!1,a.value=!1}),xe(e,"mouseout",()=>{r.value=!1,a.value=!1})),l.tapped&&(FD()&&(xe(e,"mousedown",()=>a.value=!0),xe(e,"mouseup",()=>a.value=!1)),kD()&&(xe(e,"pointerdown",()=>a.value=!0),xe(e,"pointerup",()=>a.value=!1)),CD()&&(xe(e,"touchstart",()=>a.value=!0),xe(e,"touchend",()=>a.value=!1))),l.focused&&(xe(e,"focus",()=>i.value=!0),xe(e,"blur",()=>i.value=!1)),ge(u,o)}function DD({set:e,target:n,variants:s,variant:o}){const l=T(s);ge(()=>n,()=>{l&&(l.initial&&e("initial"),l.enter&&(o.value="enter"))},{immediate:!0,flush:"pre"})}function SD({state:e,apply:n}){ge(e,s=>{s&&n(s)},{immediate:!0})}function TD({target:e,variants:n,variant:s}){const o=T(n);o&&(o.visible||o.visibleOnce)&&Gv(e,([{isIntersecting:l}])=>{o.visible?l?s.value="visible":s.value="initial":o.visibleOnce&&(l&&s.value!=="visibleOnce"?s.value="visibleOnce":s.value||(s.value="initial"))})}function $D(e,n={syncVariants:!0,lifeCycleHooks:!0,visibilityHooks:!0,eventListeners:!0}){n.lifeCycleHooks&&DD(e),n.syncVariants&&SD(e),n.visibilityHooks&&TD(e),n.eventListeners&&ED(e)}function Vh(e={}){const n=He({...e}),s=Y({});return ge(n,()=>{const o={};for(const[l,r]of Object.entries(n)){const a=Ji(l),i=Hh(r,a);o[l]=i}s.value=o},{immediate:!0,deep:!0}),{state:n,style:s}}function ec(e,n){ge(()=>ct(e),s=>{s&&n(s)},{immediate:!0})}const UD={x:"translateX",y:"translateY",z:"translateZ"};function zh(e={},n=!0){const s=He({...e}),o=Y("");return ge(s,l=>{let r="",a=!1;if(n&&(l.x||l.y||l.z)){const i=[l.x||0,l.y||0,l.z||0].map(_e.transform).join(",");r+=`translate3d(${i}) `,a=!0}for(const[i,c]of Object.entries(l)){if(n&&(i==="x"||i==="y"||i==="z"))continue;const u=Ji(i),p=Hh(c,u);r+=`${UD[i]||i}(${p}) `}n&&!a&&(r+="translateZ(0px) "),o.value=r.trim()},{immediate:!0,deep:!0}),{state:s,transform:o}}const OD=["","X","Y","Z"],PD=["perspective","translate","scale","rotate","skew"],Kh=["transformPerspective","x","y","z"];PD.forEach(e=>{OD.forEach(n=>{const s=e+n;Kh.push(s)})});const ID=new Set(Kh);function tc(e){return ID.has(e)}const MD=new Set(["originX","originY","originZ"]);function Gh(e){return MD.has(e)}function LD(e){const n={},s={};return Object.entries(e).forEach(([o,l])=>{tc(o)||Gh(o)?n[o]=l:s[o]=l}),{transform:n,style:s}}function Yh(e){const{transform:n,style:s}=LD(e),{transform:o}=zh(n),{style:l}=Vh(s);return o.value&&(l.value.transform=o.value),l.value}function RD(e,n){let s,o;const{state:l,style:r}=Vh();return ec(e,a=>{o=a;for(const i of Object.keys(jh))a.style[i]===null||a.style[i]===""||tc(i)||Gh(i)||(l[i]=a.style[i]);s&&Object.entries(s).forEach(([i,c])=>a.style[i]=c),n&&n(l)}),ge(r,a=>{if(!o){s=a;return}for(const i in a)o.style[i]=a[i]},{immediate:!0}),{style:l}}function ND(e){const n=e.trim().split(/\) |\)/);if(n.length===1)return{};const s=o=>o.endsWith("px")||o.endsWith("deg")?parseFloat(o):isNaN(Number(o))?Number(o):o;return n.reduce((o,l)=>{if(!l)return o;const[r,a]=l.split("("),c=a.split(",").map(p=>s(p.endsWith(")")?p.replace(")",""):p.trim())),u=c.length===1?c[0]:c;return{...o,[r]:u}},{})}function qD(e,n){Object.entries(ND(n)).forEach(([s,o])=>{const l=["x","y","z"];if(s==="translate3d"){if(o===0){l.forEach(r=>e[r]=0);return}o.forEach((r,a)=>e[l[a]]=r);return}if(o=parseFloat(o),s==="translateX"){e.x=o;return}if(s==="translateY"){e.y=o;return}if(s==="translateZ"){e.z=o;return}e[s]=o})}function WD(e,n){let s,o;const{state:l,transform:r}=zh();return ec(e,a=>{o=a,a.style.transform&&qD(l,a.style.transform),s&&(a.style.transform=s),n&&n(l)}),ge(r,a=>{if(!o){s=a;return}o.style.transform=a},{immediate:!0}),{transform:l}}function jD(e,n){const s=He({}),o=a=>Object.entries(a).forEach(([i,c])=>s[i]=c),{style:l}=RD(e,o),{transform:r}=WD(e,o);return ge(s,a=>{Object.entries(a).forEach(([i,c])=>{const u=tc(i)?r:l;u[i]&&u[i]===c||(u[i]=c)})},{immediate:!0,deep:!0}),ec(e,()=>n&&o(n)),{motionProperties:s,style:l,transform:r}}function HD(e={}){const n=T(e),s=Y();return{state:$(()=>{if(s.value)return n[s.value]}),variant:s}}function Qh(e,n={},s){const{motionProperties:o}=jD(e),{variant:l,state:r}=HD(n),a=BD(o,n),i={target:e,variant:l,variants:n,state:r,motionProperties:o,...a};return $D(i,s),i}const VD=["initial","enter","leave","visible","visible-once","hovered","tapped","focused","delay"];function zD(e,n){const s=e.props?e.props:e.data&&e.data.attrs?e.data.attrs:{};s&&(s.variants&&wa(s.variants)&&(n.value={...n.value,...s.variants}),VD.forEach(o=>{if(o==="delay"){if(s&&s[o]&&typeof s[o]=="number"){const l=s[o];n&&n.value&&(n.value.enter&&(n.value.enter.transition||(n.value.enter.transition={}),n.value.enter.transition={delay:l,...n.value.enter.transition}),n.value.visible&&(n.value.visible.transition||(n.value.visible.transition={}),n.value.visible.transition={delay:l,...n.value.visible.transition}),n.value.visibleOnce&&(n.value.visibleOnce.transition||(n.value.visibleOnce.transition={}),n.value.visibleOnce.transition={delay:l,...n.value.visibleOnce.transition}))}return}o==="visible-once"&&(o="visibleOnce"),s&&s[o]&&wa(s[o])&&(n.value[o]=s[o])}))}function Jr(e){return{created:(s,o,l)=>{const r=o.value&&typeof o.value=="string"?o.value:l.key;r&&Yr[r]&&Yr[r].stop();const a=Y(e||{});typeof o.value=="object"&&(a.value=o.value),zD(l,a);const i=Qh(s,a);s.motionInstance=i,r&&(Yr[r]=i)},getSSRProps(s,o){let{initial:l}=s.value||o&&(o==null?void 0:o.props)||{};l=T(l);const r=GF((e==null?void 0:e.initial)||{},l||{});return!r||Object.keys(r).length===0?void 0:{style:Yh(r)}}}}const KD={initial:{opacity:0},enter:{opacity:1}},GD={initial:{opacity:0},visible:{opacity:1}},YD={initial:{opacity:0},visibleOnce:{opacity:1}},QD={initial:{scale:0,opacity:0},enter:{scale:1,opacity:1}},ZD={initial:{scale:0,opacity:0},visible:{scale:1,opacity:1}},JD={initial:{scale:0,opacity:0},visibleOnce:{scale:1,opacity:1}},XD={initial:{x:-100,rotate:90,opacity:0},enter:{x:0,rotate:0,opacity:1}},eS={initial:{x:-100,rotate:90,opacity:0},visible:{x:0,rotate:0,opacity:1}},tS={initial:{x:-100,rotate:90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},nS={initial:{x:100,rotate:-90,opacity:0},enter:{x:0,rotate:0,opacity:1}},sS={initial:{x:100,rotate:-90,opacity:0},visible:{x:0,rotate:0,opacity:1}},oS={initial:{x:100,rotate:-90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},lS={initial:{y:-100,rotate:-90,opacity:0},enter:{y:0,rotate:0,opacity:1}},rS={initial:{y:-100,rotate:-90,opacity:0},visible:{y:0,rotate:0,opacity:1}},aS={initial:{y:-100,rotate:-90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},iS={initial:{y:100,rotate:90,opacity:0},enter:{y:0,rotate:0,opacity:1}},cS={initial:{y:100,rotate:90,opacity:0},visible:{y:0,rotate:0,opacity:1}},uS={initial:{y:100,rotate:90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},pS={initial:{x:-100,opacity:0},enter:{x:0,opacity:1}},dS={initial:{x:-100,opacity:0},visible:{x:0,opacity:1}},fS={initial:{x:-100,opacity:0},visibleOnce:{x:0,opacity:1}},hS={initial:{x:100,opacity:0},enter:{x:0,opacity:1}},yS={initial:{x:100,opacity:0},visible:{x:0,opacity:1}},mS={initial:{x:100,opacity:0},visibleOnce:{x:0,opacity:1}},gS={initial:{y:-100,opacity:0},enter:{y:0,opacity:1}},vS={initial:{y:-100,opacity:0},visible:{y:0,opacity:1}},_S={initial:{y:-100,opacity:0},visibleOnce:{y:0,opacity:1}},bS={initial:{y:100,opacity:0},enter:{y:0,opacity:1}},xS={initial:{y:100,opacity:0},visible:{y:0,opacity:1}},AS={initial:{y:100,opacity:0},visibleOnce:{y:0,opacity:1}},ei={__proto__:null,fade:KD,fadeVisible:GD,fadeVisibleOnce:YD,pop:QD,popVisible:ZD,popVisibleOnce:JD,rollBottom:iS,rollLeft:XD,rollRight:nS,rollTop:lS,rollVisibleBottom:cS,rollVisibleLeft:eS,rollVisibleOnceBottom:uS,rollVisibleOnceLeft:tS,rollVisibleOnceRight:oS,rollVisibleOnceTop:aS,rollVisibleRight:sS,rollVisibleTop:rS,slideBottom:bS,slideLeft:pS,slideRight:hS,slideTop:gS,slideVisibleBottom:xS,slideVisibleLeft:dS,slideVisibleOnceBottom:AS,slideVisibleOnceLeft:fS,slideVisibleOnceRight:mS,slideVisibleOnceTop:_S,slideVisibleRight:yS,slideVisibleTop:vS},wS=ke({props:{is:{type:[String,Object],required:!1},preset:{type:String,required:!1},instance:{type:Object,required:!1},variants:{type:Object,required:!1},initial:{type:Object,required:!1},enter:{type:Object,required:!1},leave:{type:Object,required:!1},visible:{type:Object,required:!1},visibleOnce:{type:Object,required:!1},hovered:{type:Object,required:!1},tapped:{type:Object,required:!1},focused:{type:Object,required:!1},delay:{type:[Number,String],required:!1}},setup(e){var i;const n=Ym(),s=He({});if(!e.is&&!n.default)return()=>tt("div",{});const o=$(()=>{let c;return e.preset&&(c=ei[e.preset]),c}),l=$(()=>({initial:e.initial,enter:e.enter,leave:e.leave,visible:e.visible,visibleOnce:e.visibleOnce,hovered:e.hovered,tapped:e.tapped,focused:e.focused})),r=$(()=>{const c={...l.value,...o.value||{},...e.variants||{}};return e.delay&&(c.enter.transition={...c.enter.transition},c.enter.transition.delay=parseInt(e.delay)),c}),a=$(()=>{if(!e.is)return;let c=e.is;return typeof a.value=="string"&&!Ep(c)&&(c=Ws(c)),c});if(((i=process==null?void 0:process.env)==null?void 0:i.NODE_ENV)==="development"||process!=null&&process.dev){const c=u=>{var p;(p=u.variants)!=null&&p.initial&&u.set("initial"),setTimeout(()=>{var f,h,y;(f=u.variants)!=null&&f.enter&&u.apply("enter"),(h=u.variants)!=null&&h.visible&&u.apply("visible"),(y=u.variants)!=null&&y.visibleOnce&&u.apply("visibleOnce")},10)};dr(()=>Object.entries(s).forEach(([u,p])=>c(p)))}return{slots:n,component:a,motionConfig:r,instances:s}},render({slots:e,motionConfig:n,instances:s,component:o}){var i;const l=Yh(n.initial||{}),r=(c,u)=>(c.props||(c.props={}),c.props.style=l,c.props.onVnodeMounted=({el:p})=>{const f=Qh(p,n);s[u]=f},c);if(o){const c=tt(o,void 0,e);return r(c,0),c}return(((i=e.default)==null?void 0:i.call(e))||[]).map((c,u)=>r(c,u))}});function BS(e){const n="àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;",s="aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------",o=new RegExp(n.split("").join("|"),"g");return e.toString().replace(/[A-Z]/g,l=>`-${l}`).toLowerCase().replace(/\s+/g,"-").replace(o,l=>s.charAt(n.indexOf(l))).replace(/&/g,"-and-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}const kS={install(e,n){if(e.directive("motion",Jr()),e.component("Motion",wS),!n||n&&!n.excludePresets)for(const s in ei){const o=ei[s];e.directive(`motion-${BS(s)}`,Jr(o))}if(n&&n.directives)for(const s in n.directives){const o=n.directives[s];o.initial,e.directive(`motion-${s}`,Jr(o))}}};var up;const Eo=typeof window<"u",CS=Object.prototype.toString,FS=e=>CS.call(e)==="[object Object]";Eo&&((up=window==null?void 0:window.navigator)!=null&&up.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function ES(e){return ri()?($p(e),!0):!1}function DS(e){var n;const s=T(e);return(n=s==null?void 0:s.$el)!=null?n:s}const SS=Eo?window:void 0,pp=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},dp="__vueuse_ssr_handlers__";pp[dp]=pp[dp]||{};function TS(e,n={}){const{immediate:s=!0,window:o=SS}=n,l=Y(!1);let r=null;function a(){!l.value||!o||(e(),r=o.requestAnimationFrame(a))}function i(){!l.value&&o&&(l.value=!0,a())}function c(){l.value=!1,r!=null&&o&&(o.cancelAnimationFrame(r),r=null)}return s&&i(),ES(c),{isActive:l,pause:c,resume:i}}var fp;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(fp||(fp={}));const xr="vue-starport-injection",Zh="vue-starport-options",$S={duration:800,easing:"cubic-bezier(0.45, 0, 0.55, 1)",keepAlive:!1},Jh={port:{type:String,required:!0},duration:{type:Number,required:!1},easing:{type:String,required:!1},keepAlive:{type:Boolean,required:!1,default:void 0},mountedProps:{type:Object,required:!1},initialProps:{type:Object,required:!1}};var US=Object.defineProperty,er=Object.getOwnPropertySymbols,Xh=Object.prototype.hasOwnProperty,ey=Object.prototype.propertyIsEnumerable,hp=(e,n,s)=>n in e?US(e,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[n]=s,OS=(e,n)=>{for(var s in n||(n={}))Xh.call(n,s)&&hp(e,s,n[s]);if(er)for(var s of er(n))ey.call(n,s)&&hp(e,s,n[s]);return e},yp=(e,n)=>{var s={};for(var o in e)Xh.call(e,o)&&n.indexOf(o)<0&&(s[o]=e[o]);if(e!=null&&er)for(var o of er(e))n.indexOf(o)<0&&ey.call(e,o)&&(s[o]=e[o]);return s};const PS=ke({name:"StarportProxy",props:OS({props:{type:Object,default:()=>({})},component:{type:Object,required:!0}},Jh),setup(e,n){const s=L(xr),o=$(()=>s.getInstance(e.port,e.component)),l=Y(),r=o.value.generateId(),a=Y(!1);return o.value.isVisible||(o.value.land(),a.value=!0),Gn(async()=>{if(o.value.el){console.error(`[Vue Starport] Multiple proxies of "${o.value.componentName}" with port "${e.port}" detected. The later one will be ignored.`);return}if(o.value.el=l.value,await it(),a.value=!0,o.value.rect.update(),o.value.rect.width===0||o.value.rect.height===0){const i=o.value.rect.width===0?"width":"height";console.warn(`[Vue Starport] The proxy of component "${o.value.componentName}" (port "${e.port}") has no ${i} on initial render, have you set the size for it?`),console.warn("element:",o.value.el),console.warn("rect:",o.value.rect)}}),Yo(async()=>{o.value.rect.update(),o.value.liftOff(),o.value.el=void 0,a.value=!1,!o.value.options.keepAlive&&(await it(),await it(),!o.value.el&&s.dispose(o.value.port))}),ge(()=>e,async()=>{o.value.props&&await it();const i=e,{props:c}=i,u=yp(i,["props"]);o.value.props=c||{},o.value.setLocalOptions(u)},{deep:!0,immediate:!0}),()=>{const i=e,{initialProps:c,mountedProps:u}=i,p=yp(i,["initialProps","mountedProps"]),f=je(p,(a.value?u:c)||{});return tt("div",je(f,{id:r,ref:l,"data-starport-proxy":o.value.componentId,"data-starport-landed":o.value.isLanded?"true":void 0,"data-starport-floating":o.value.isLanded?void 0:"true"}),n.slots.default?tt(n.slots.default):void 0)}}});var IS=Object.defineProperty,MS=Object.defineProperties,LS=Object.getOwnPropertyDescriptors,mp=Object.getOwnPropertySymbols,RS=Object.prototype.hasOwnProperty,NS=Object.prototype.propertyIsEnumerable,gp=(e,n,s)=>n in e?IS(e,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[n]=s,qS=(e,n)=>{for(var s in n||(n={}))RS.call(n,s)&&gp(e,s,n[s]);if(mp)for(var s of mp(n))NS.call(n,s)&&gp(e,s,n[s]);return e},WS=(e,n)=>MS(e,LS(n));const jS=ke({name:"Starport",inheritAttrs:!0,props:Jh,setup(e,n){const s=Y(!1);return Gn(()=>{if(s.value=!0,!L(xr))throw new Error("[Vue Starport] Failed to find the carrier, all Starport components must be wrapped in a <StarportCarrier> component.")}),()=>{var a,i;const o=(i=(a=n.slots).default)==null?void 0:i.call(a);if(!o)throw new Error("[Vue Starport] Slot is required to use <Starport>");if(o.length!==1)throw new Error(`[Vue Starport] <Starport> requires exactly one slot, but got ${o.length}`);const l=o[0];let r=l.type;return(!FS(r)||pn(r))&&(r={render(){return o}}),tt(PS,WS(qS({},e),{key:e.port,component:rr(r),props:l.props}))}}});function HS(e){const n=He({height:0,width:0,left:0,top:0,update:o,listen:r,pause:a,margin:"0px",padding:"0px"}),s=Eo?document.documentElement||document.body:void 0;function o(){if(!Eo)return;const i=DS(e);if(!i)return;const{height:c,width:u,left:p,top:f}=i.getBoundingClientRect(),h=window.getComputedStyle(i),y=h.margin,m=h.padding;Object.assign(n,{height:c,width:u,left:p,top:s.scrollTop+f,margin:y,padding:m})}const l=TS(o,{immediate:!1});function r(){Eo&&(o(),l.resume())}function a(){l.pause()}return n}let VS=(e,n=21)=>(s=n)=>{let o="",l=s;for(;l--;)o+=e[Math.random()*e.length|0];return o};const vp=VS("abcdefghijklmnopqrstuvwxyz",5);function _p(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase().replace(/[^\w\d_-]/g,"")}function zS(e){var n;return e.name||((n=e.__file)==null?void 0:n.split(/[\/\\.]/).slice(-2)[0])||""}var KS=Object.defineProperty,bp=Object.getOwnPropertySymbols,GS=Object.prototype.hasOwnProperty,YS=Object.prototype.propertyIsEnumerable,xp=(e,n,s)=>n in e?KS(e,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[n]=s,Xr=(e,n)=>{for(var s in n||(n={}))GS.call(n,s)&&xp(e,s,n[s]);if(bp)for(var s of bp(n))YS.call(n,s)&&xp(e,s,n[s]);return e};function QS(e,n,s={}){const o=zS(n),l=_p(o)||vp(),r=Y(),a=Y(null),i=Y(!1),c=Y(!1),u=vy(!0),p=Y({}),f=$(()=>Xr(Xr(Xr({},$S),s),p.value)),h=Y(0);let y;u.run(()=>{y=HS(r),ge(r,async A=>{A&&(c.value=!0),await it(),r.value||(c.value=!1)})});const m=_p(e);function b(){return`starport-${l}-${m}-${vp()}`}const w=b();return He({el:r,id:w,port:e,props:a,rect:y,scope:u,isLanded:i,isVisible:c,options:f,liftOffTime:h,component:n,componentName:o,componentId:l,generateId:b,setLocalOptions(A={}){p.value=JSON.parse(JSON.stringify(A))},elRef(){return r},liftOff(){i.value&&(i.value=!1,h.value=Date.now(),y.listen())},land(){i.value||(i.value=!0,y.pause())}})}function ZS(e){const n=He(new Map);function s(l,r){let a=n.get(l);return a||(a=QS(l,r,e),n.set(l,a)),a.component=r,a}function o(l){var r;(r=n.get(l))==null||r.scope.stop(),n.delete(l)}return{portMap:n,dispose:o,getInstance:s}}var JS=Object.defineProperty,XS=Object.defineProperties,eT=Object.getOwnPropertyDescriptors,Ap=Object.getOwnPropertySymbols,tT=Object.prototype.hasOwnProperty,nT=Object.prototype.propertyIsEnumerable,wp=(e,n,s)=>n in e?JS(e,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[n]=s,sT=(e,n)=>{for(var s in n||(n={}))tT.call(n,s)&&wp(e,s,n[s]);if(Ap)for(var s of Ap(n))nT.call(n,s)&&wp(e,s,n[s]);return e},oT=(e,n)=>XS(e,eT(n));const lT=ke({name:"StarportCraft",props:{port:{type:String,required:!0},component:{type:Object,required:!0}},setup(e){const n=L(xr);if(!n)throw new Error("[Vue Starport] Failed to find the carrier, all Starport components must be wrapped in a <StarportCarrier> component.");const s=$(()=>n.getInstance(e.port,e.component)),o=$(()=>{var a;return((a=s.value.el)==null?void 0:a.id)||s.value.id}),l=$(()=>{const a=Date.now()-s.value.liftOffTime,i=Math.max(0,s.value.options.duration-a),c=s.value.rect,u={position:"absolute",left:0,top:0,width:`${c.width}px`,height:`${c.height}px`,margin:c.margin,padding:c.padding,transform:`translate3d(${c.left}px,${c.top}px,0px)`};return!s.value.isVisible||!s.value.el?oT(sT({},u),{zIndex:-1,display:"none"}):(s.value.isLanded?u.display="none":Object.assign(u,{transitionProperty:"all",transitionDuration:`${i}ms`,transitionTimingFunction:s.value.options.easing}),u)}),r={onTransitionend(a){s.value.isLanded||console.warn(`[Vue Starport] Transition duration of component "${s.value.componentName}" is too short (${a.elapsedTime}s) that may cause animation glitches. Try to increase the duration of that component, or decrease the duration the Starport (current: ${s.value.options.duration/1e3}s).`)}};return()=>{const a=!!(s.value.isLanded&&s.value.el);return tt("div",{style:l.value,"data-starport-craft":s.value.componentId,"data-starport-landed":s.value.isLanded?"true":void 0,"data-starport-floating":s.value.isLanded?void 0:"true",onTransitionend:s.value.land},tt(w0,{to:a?`#${o.value}`:"body",disabled:!a},tt(s.value.component,je(r,s.value.props))))}}}),rT=ke({name:"StarportCarrier",setup(e,{slots:n}){const s=ZS(L(Zh,{}));return Tt().appContext.app.provide(xr,s),()=>{var l;return[(l=n.default)==null?void 0:l.call(n),Array.from(s.portMap.entries()).map(([r,{component:a}])=>tt(lT,{key:r,port:r,component:a}))]}}});function aT(e={}){return{install(n){n.provide(Zh,e),n.component("Starport",jS),n.component("StarportCarrier",rT)}}}function iT(e){function n(){document.documentElement.style.setProperty("--vh",`${window.innerHeight*.01}px`)}n(),window.addEventListener("resize",n),e.app.use(kS),e.app.use(aT({keepAlive:!0}))}function Bt(e,n,s){var o;return((o=e.instance)==null?void 0:o.$).provides[n]??s}function cT(){return{install(e){e.directive("click",{name:"v-click",mounted(n,s){var p,f,h,y,m,b;if(Bo.value||(p=Bt(s,bo))!=null&&p.value)return;const o=Bt(s,as),l=Bt(s,_o),r=Bt(s,xa),a=s.modifiers.hide!==!1&&s.modifiers.hide!=null,i=s.modifiers.fade!==!1&&s.modifiers.fade!=null,c=((f=o==null?void 0:o.value)==null?void 0:f.length)||0,u=i?vg:Ur;if(o&&!((h=o==null?void 0:o.value)!=null&&h.includes(n))&&o.value.push(n),s.value==null&&(s.value=(y=o==null?void 0:o.value)==null?void 0:y.length),typeof s.value=="string"&&(s.value.startsWith("+")||s.value.startsWith("-"))&&(s.value=(((m=o==null?void 0:o.value)==null?void 0:m.length)||0)+Number(s.value)),!(r!=null&&r.value.has(s.value)))r==null||r.value.set(s.value,[n]);else if(!((b=r==null?void 0:r.value.get(s.value))!=null&&b.includes(n))){const w=(r==null?void 0:r.value.get(s.value))||[];r==null||r.value.set(s.value,[n].concat(w))}n==null||n.classList.toggle(ss,!0),l&&ge(l,()=>{const w=(l==null?void 0:l.value)??0,A=s.value!=null?w>=s.value:w>c;n.classList.contains(Or)||n.classList.toggle(u,!A),a!==!1&&a!==void 0&&n.classList.toggle(u,A),n.classList.toggle(to,!1);const B=r==null?void 0:r.value.get(w);B==null||B.forEach((x,C)=>{x.classList.toggle(dl,!1),C===B.length-1?x.classList.toggle(to,!0):x.classList.toggle(dl,!0)}),n.classList.contains(to)||n.classList.toggle(dl,A)},{immediate:!0})},unmounted(n,s){n==null||n.classList.toggle(ss,!1);const o=Bt(s,as);o!=null&&o.value&&Aa(o.value,n)}}),e.directive("after",{name:"v-after",mounted(n,s){var i,c,u;if(Bo.value||(i=Bt(s,bo))!=null&&i.value)return;const o=Bt(s,as),l=Bt(s,_o),r=Bt(s,xa),a=o==null?void 0:o.value.length;s.value==null&&(s.value=o==null?void 0:o.value.length),typeof s.value=="string"&&(s.value.startsWith("+")||s.value.startsWith("-"))&&(s.value=(((c=o==null?void 0:o.value)==null?void 0:c.length)||0)+Number(s.value)),r!=null&&r.value.has(s.value)?(u=r==null?void 0:r.value.get(s.value))==null||u.push(n):r==null||r.value.set(s.value,[n]),n==null||n.classList.toggle(ss,!0),l&&ge(l,()=>{const p=(l.value??0)>=(s.value??a??0);n.classList.contains(Or)||n.classList.toggle(Ur,!p),n.classList.toggle(to,!1),n.classList.contains(to)||n.classList.toggle(dl,p)},{immediate:!0})},unmounted(n){n==null||n.classList.toggle(ss,!0)}}),e.directive("click-hide",{name:"v-click-hide",mounted(n,s){var a,i,c;if(Bo.value||(a=Bt(s,bo))!=null&&a.value)return;const o=Bt(s,as),l=Bt(s,_o),r=((i=o==null?void 0:o.value)==null?void 0:i.length)||0;o&&!((c=o==null?void 0:o.value)!=null&&c.includes(n))&&o.value.push(n),n==null||n.classList.toggle(ss,!0),l&&ge(l,()=>{const u=(l==null?void 0:l.value)??0,p=s.value!=null?u>=s.value:u>r;n.classList.toggle(Ur,p),n.classList.toggle(Or,p)},{immediate:!0})},unmounted(n,s){n==null||n.classList.toggle(ss,!1);const o=Bt(s,as);o!=null&&o.value&&Aa(o.value,n)}})}}}function uT(e,n){const s=oh(e),o=lh(n,s.currentRoute,s.currentPage);return{nav:{...s,...o},configs:Se,themeConfigs:$(()=>Se.themeConfig)}}function pT(){return{install(e){const n=uT(jt,Rt);e.provide(H,He(n))}}}const Ys=x1(zF);Ys.use(wt);Ys.use(yg());Ys.use(cT());Ys.use(pT());iT({app:Ys,router:wt});Ys.mount("#app");export{N3 as $,o3 as A,Y as B,yT as C,mt as D,We as E,De as F,Bb as G,RF as H,Rt as I,Zl as J,OF as K,Hr as L,Gn as M,He as N,fT as O,mT as P,ge as Q,O as R,Lf as S,Te as T,yt as U,Mb as V,vi as W,_i as X,Lo as Y,Nr as Z,V as _,H as a,Pi as a0,Ii as a1,P3 as a2,Ve as a3,L5 as a4,dT as a5,Wt as a6,io as a7,gl as a8,ds as a9,ln as aa,Oa as ab,pb as ac,db as ad,fb as ae,yb as af,Ke as ag,Nd as ah,gT as ai,vt as aj,_x as ak,Zd as al,mb as am,Yo as an,Qd as b,Se as c,ke as d,sm as e,k as f,t as g,T as h,L as i,Qe as j,SF as k,d as l,I as m,nt as n,v as o,me as p,Di as q,Fs as r,Jt as s,Bn as t,hT as u,$ as v,Pr as w,W as x,Sf as y,c3 as z};
