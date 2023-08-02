(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))o(l);new MutationObserver(l=>{for(const r of l)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function s(l){const r={};return l.integrity&&(r.integrity=l.integrity),l.referrerPolicy&&(r.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?r.credentials="include":l.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(l){if(l.ep)return;l.ep=!0;const r=s(l);fetch(l.href,r)}})();function Kn(t,n){const s=Object.create(null),o=t.split(",");for(let l=0;l<o.length;l++)s[o[l]]=!0;return n?l=>!!s[l.toLowerCase()]:l=>!!s[l]}const Le=Object.freeze({}),Ms=Object.freeze([]),At=()=>{},Bp=()=>!1,ty=/^on[^a-z]/,zo=t=>ty.test(t),Sl=t=>t.startsWith("onUpdate:"),Ne=Object.assign,ti=(t,n)=>{const s=t.indexOf(n);s>-1&&t.splice(s,1)},ny=Object.prototype.hasOwnProperty,Be=(t,n)=>ny.call(t,n),ae=Array.isArray,hs=t=>Ko(t)==="[object Map]",Cp=t=>Ko(t)==="[object Set]",sy=t=>Ko(t)==="[object RegExp]",pe=t=>typeof t=="function",je=t=>typeof t=="string",ni=t=>typeof t=="symbol",$e=t=>t!==null&&typeof t=="object",si=t=>$e(t)&&pe(t.then)&&pe(t.catch),kp=Object.prototype.toString,Ko=t=>kp.call(t),oi=t=>Ko(t).slice(8,-1),Fp=t=>Ko(t)==="[object Object]",li=t=>je(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,bl=Kn(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),oy=Kn("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"),tr=t=>{const n=Object.create(null);return s=>n[s]||(n[s]=t(s))},ly=/-(\w)/g,an=tr(t=>t.replace(ly,(n,s)=>s?s.toUpperCase():"")),ry=/\B([A-Z])/g,wn=tr(t=>t.replace(ry,"-$1").toLowerCase()),As=tr(t=>t.charAt(0).toUpperCase()+t.slice(1)),ns=tr(t=>t?`on${As(t)}`:""),Eo=(t,n)=>!Object.is(t,n),os=(t,n)=>{for(let s=0;s<t.length;s++)t[s](n)},Tl=(t,n,s)=>{Object.defineProperty(t,n,{configurable:!0,enumerable:!1,value:s})},ay=t=>{const n=parseFloat(t);return isNaN(n)?t:n},iy=t=>{const n=je(t)?Number(t):NaN;return isNaN(n)?t:n};let lc;const $l=()=>lc||(lc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function nt(t){if(ae(t)){const n={};for(let s=0;s<t.length;s++){const o=t[s],l=je(o)?dy(o):nt(o);if(l)for(const r in l)n[r]=l[r]}return n}else{if(je(t))return t;if($e(t))return t}}const cy=/;(?![^(]*\))/g,uy=/:([^]+)/,py=/\/\*[^]*?\*\//g;function dy(t){const n={};return t.replace(py,"").split(cy).forEach(s=>{if(s){const o=s.split(uy);o.length>1&&(n[o[0].trim()]=o[1].trim())}}),n}function We(t){let n="";if(je(t))n=t;else if(ae(t))for(let s=0;s<t.length;s++){const o=We(t[s]);o&&(n+=o+" ")}else if($e(t))for(const s in t)t[s]&&(n+=s+" ");return n.trim()}function le(t){if(!t)return null;let{class:n,style:s}=t;return n&&!je(n)&&(t.class=We(n)),s&&(t.style=nt(s)),t}const fy="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",hy="svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view",Dp=Kn(fy),yy=Kn(hy),my="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",gy=Kn(my);function Ep(t){return!!t||t===""}const Bn=t=>je(t)?t:t==null?"":ae(t)||$e(t)&&(t.toString===kp||!pe(t.toString))?JSON.stringify(t,Sp,2):String(t),Sp=(t,n)=>n&&n.__v_isRef?Sp(t,n.value):hs(n)?{[`Map(${n.size})`]:[...n.entries()].reduce((s,[o,l])=>(s[`${o} =>`]=l,s),{})}:Cp(n)?{[`Set(${n.size})`]:[...n.values()]}:$e(n)&&!ae(n)&&!Fp(n)?String(n):n;function Ol(t,...n){console.warn(`[Vue warn] ${t}`,...n)}let Ft;class Tp{constructor(n=!1){this.detached=n,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Ft,!n&&Ft&&(this.index=(Ft.scopes||(Ft.scopes=[])).push(this)-1)}get active(){return this._active}run(n){if(this._active){const s=Ft;try{return Ft=this,n()}finally{Ft=s}}else Ol("cannot run an inactive effect scope.")}on(){Ft=this}off(){Ft=this.parent}stop(n){if(this._active){let s,o;for(s=0,o=this.effects.length;s<o;s++)this.effects[s].stop();for(s=0,o=this.cleanups.length;s<o;s++)this.cleanups[s]();if(this.scopes)for(s=0,o=this.scopes.length;s<o;s++)this.scopes[s].stop(!0);if(!this.detached&&this.parent&&!n){const l=this.parent.scopes.pop();l&&l!==this&&(this.parent.scopes[this.index]=l,l.index=this.index)}this.parent=void 0,this._active=!1}}}function vy(t){return new Tp(t)}function _y(t,n=Ft){n&&n.active&&n.effects.push(t)}function ri(){return Ft}function $p(t){Ft?Ft.cleanups.push(t):Ol("onScopeDispose() is called when there is no active effect scope to be associated with.")}const ai=t=>{const n=new Set(t);return n.w=0,n.n=0,n},Op=t=>(t.w&Hn)>0,Up=t=>(t.n&Hn)>0,by=({deps:t})=>{if(t.length)for(let n=0;n<t.length;n++)t[n].w|=Hn},xy=t=>{const{deps:n}=t;if(n.length){let s=0;for(let o=0;o<n.length;o++){const l=n[o];Op(l)&&!Up(l)?l.delete(t):n[s++]=l,l.w&=~Hn,l.n&=~Hn}n.length=s}},Ul=new WeakMap;let co=0,Hn=1;const ea=30;let gt;const ys=Symbol("iterate"),ta=Symbol("Map key iterate");class ii{constructor(n,s=null,o){this.fn=n,this.scheduler=s,this.active=!0,this.deps=[],this.parent=void 0,_y(this,o)}run(){if(!this.active)return this.fn();let n=gt,s=In;for(;n;){if(n===this)return;n=n.parent}try{return this.parent=gt,gt=this,In=!0,Hn=1<<++co,co<=ea?by(this):rc(this),this.fn()}finally{co<=ea&&xy(this),Hn=1<<--co,gt=this.parent,In=s,this.parent=void 0,this.deferStop&&this.stop()}}stop(){gt===this?this.deferStop=!0:this.active&&(rc(this),this.onStop&&this.onStop(),this.active=!1)}}function rc(t){const{deps:n}=t;if(n.length){for(let s=0;s<n.length;s++)n[s].delete(t);n.length=0}}let In=!0;const Pp=[];function Bs(){Pp.push(In),In=!1}function Cs(){const t=Pp.pop();In=t===void 0?!0:t}function dt(t,n,s){if(In&&gt){let o=Ul.get(t);o||Ul.set(t,o=new Map);let l=o.get(s);l||o.set(s,l=ai()),Ip(l,{effect:gt,target:t,type:n,key:s})}}function Ip(t,n){let s=!1;co<=ea?Up(t)||(t.n|=Hn,s=!Op(t)):s=!t.has(gt),s&&(t.add(gt),gt.deps.push(t),gt.onTrack&&gt.onTrack(Ne({effect:gt},n)))}function cn(t,n,s,o,l,r){const a=Ul.get(t);if(!a)return;let i=[];if(n==="clear")i=[...a.values()];else if(s==="length"&&ae(t)){const u=Number(o);a.forEach((p,f)=>{(f==="length"||f>=u)&&i.push(p)})}else switch(s!==void 0&&i.push(a.get(s)),n){case"add":ae(t)?li(s)&&i.push(a.get("length")):(i.push(a.get(ys)),hs(t)&&i.push(a.get(ta)));break;case"delete":ae(t)||(i.push(a.get(ys)),hs(t)&&i.push(a.get(ta)));break;case"set":hs(t)&&i.push(a.get(ys));break}const c={target:t,type:n,key:s,newValue:o,oldValue:l,oldTarget:r};if(i.length===1)i[0]&&na(i[0],c);else{const u=[];for(const p of i)p&&u.push(...p);na(ai(u),c)}}function na(t,n){const s=ae(t)?t:[...t];for(const o of s)o.computed&&ac(o,n);for(const o of s)o.computed||ac(o,n)}function ac(t,n){(t!==gt||t.allowRecurse)&&(t.onTrigger&&t.onTrigger(Ne({effect:t},n)),t.scheduler?t.scheduler():t.run())}function Ay(t,n){var s;return(s=Ul.get(t))==null?void 0:s.get(n)}const wy=Kn("__proto__,__v_isRef,__isVue"),Mp=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(ni)),By=nr(),Cy=nr(!1,!0),ky=nr(!0),Fy=nr(!0,!0),ic=Dy();function Dy(){const t={};return["includes","indexOf","lastIndexOf"].forEach(n=>{t[n]=function(...s){const o=he(this);for(let r=0,a=this.length;r<a;r++)dt(o,"get",r+"");const l=o[n](...s);return l===-1||l===!1?o[n](...s.map(he)):l}}),["push","pop","shift","unshift","splice"].forEach(n=>{t[n]=function(...s){Bs();const o=he(this)[n].apply(this,s);return Cs(),o}}),t}function Ey(t){const n=he(this);return dt(n,"has",t),n.hasOwnProperty(t)}function nr(t=!1,n=!1){return function(o,l,r){if(l==="__v_isReactive")return!t;if(l==="__v_isReadonly")return t;if(l==="__v_isShallow")return n;if(l==="__v_raw"&&r===(t?n?Vp:Hp:n?qp:Wp).get(o))return o;const a=ae(o);if(!t){if(a&&Be(ic,l))return Reflect.get(ic,l,r);if(l==="hasOwnProperty")return Ey}const i=Reflect.get(o,l,r);return(ni(l)?Mp.has(l):wy(l))||(t||dt(o,"get",l),n)?i:Se(i)?a&&li(l)?i:i.value:$e(i)?t?Yt(i):He(i):i}}const Sy=Lp(),Ty=Lp(!0);function Lp(t=!1){return function(s,o,l,r){let a=s[o];if(Vn(a)&&Se(a)&&!Se(l))return!1;if(!t&&(!Pl(l)&&!Vn(l)&&(a=he(a),l=he(l)),!ae(s)&&Se(a)&&!Se(l)))return a.value=l,!0;const i=ae(s)&&li(o)?Number(o)<s.length:Be(s,o),c=Reflect.set(s,o,l,r);return s===he(r)&&(i?Eo(l,a)&&cn(s,"set",o,l,a):cn(s,"add",o,l)),c}}function $y(t,n){const s=Be(t,n),o=t[n],l=Reflect.deleteProperty(t,n);return l&&s&&cn(t,"delete",n,void 0,o),l}function Oy(t,n){const s=Reflect.has(t,n);return(!ni(n)||!Mp.has(n))&&dt(t,"has",n),s}function Uy(t){return dt(t,"iterate",ae(t)?"length":ys),Reflect.ownKeys(t)}const Rp={get:By,set:Sy,deleteProperty:$y,has:Oy,ownKeys:Uy},Np={get:ky,set(t,n){return Ol(`Set operation on key "${String(n)}" failed: target is readonly.`,t),!0},deleteProperty(t,n){return Ol(`Delete operation on key "${String(n)}" failed: target is readonly.`,t),!0}},Py=Ne({},Rp,{get:Cy,set:Ty}),Iy=Ne({},Np,{get:Fy}),ci=t=>t,sr=t=>Reflect.getPrototypeOf(t);function nl(t,n,s=!1,o=!1){t=t.__v_raw;const l=he(t),r=he(n);s||(n!==r&&dt(l,"get",n),dt(l,"get",r));const{has:a}=sr(l),i=o?ci:s?ui:So;if(a.call(l,n))return i(t.get(n));if(a.call(l,r))return i(t.get(r));t!==l&&t.get(n)}function sl(t,n=!1){const s=this.__v_raw,o=he(s),l=he(t);return n||(t!==l&&dt(o,"has",t),dt(o,"has",l)),t===l?s.has(t):s.has(t)||s.has(l)}function ol(t,n=!1){return t=t.__v_raw,!n&&dt(he(t),"iterate",ys),Reflect.get(t,"size",t)}function cc(t){t=he(t);const n=he(this);return sr(n).has.call(n,t)||(n.add(t),cn(n,"add",t,t)),this}function uc(t,n){n=he(n);const s=he(this),{has:o,get:l}=sr(s);let r=o.call(s,t);r?jp(s,o,t):(t=he(t),r=o.call(s,t));const a=l.call(s,t);return s.set(t,n),r?Eo(n,a)&&cn(s,"set",t,n,a):cn(s,"add",t,n),this}function pc(t){const n=he(this),{has:s,get:o}=sr(n);let l=s.call(n,t);l?jp(n,s,t):(t=he(t),l=s.call(n,t));const r=o?o.call(n,t):void 0,a=n.delete(t);return l&&cn(n,"delete",t,void 0,r),a}function dc(){const t=he(this),n=t.size!==0,s=hs(t)?new Map(t):new Set(t),o=t.clear();return n&&cn(t,"clear",void 0,void 0,s),o}function ll(t,n){return function(o,l){const r=this,a=r.__v_raw,i=he(a),c=n?ci:t?ui:So;return!t&&dt(i,"iterate",ys),a.forEach((u,p)=>o.call(l,c(u),c(p),r))}}function rl(t,n,s){return function(...o){const l=this.__v_raw,r=he(l),a=hs(r),i=t==="entries"||t===Symbol.iterator&&a,c=t==="keys"&&a,u=l[t](...o),p=s?ci:n?ui:So;return!n&&dt(r,"iterate",c?ta:ys),{next(){const{value:f,done:h}=u.next();return h?{value:f,done:h}:{value:i?[p(f[0]),p(f[1])]:p(f),done:h}},[Symbol.iterator](){return this}}}}function Fn(t){return function(...n){{const s=n[0]?`on key "${n[0]}" `:"";console.warn(`${As(t)} operation ${s}failed: target is readonly.`,he(this))}return t==="delete"?!1:this}}function My(){const t={get(r){return nl(this,r)},get size(){return ol(this)},has:sl,add:cc,set:uc,delete:pc,clear:dc,forEach:ll(!1,!1)},n={get(r){return nl(this,r,!1,!0)},get size(){return ol(this)},has:sl,add:cc,set:uc,delete:pc,clear:dc,forEach:ll(!1,!0)},s={get(r){return nl(this,r,!0)},get size(){return ol(this,!0)},has(r){return sl.call(this,r,!0)},add:Fn("add"),set:Fn("set"),delete:Fn("delete"),clear:Fn("clear"),forEach:ll(!0,!1)},o={get(r){return nl(this,r,!0,!0)},get size(){return ol(this,!0)},has(r){return sl.call(this,r,!0)},add:Fn("add"),set:Fn("set"),delete:Fn("delete"),clear:Fn("clear"),forEach:ll(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=rl(r,!1,!1),s[r]=rl(r,!0,!1),n[r]=rl(r,!1,!0),o[r]=rl(r,!0,!0)}),[t,s,n,o]}const[Ly,Ry,Ny,jy]=My();function or(t,n){const s=n?t?jy:Ny:t?Ry:Ly;return(o,l,r)=>l==="__v_isReactive"?!t:l==="__v_isReadonly"?t:l==="__v_raw"?o:Reflect.get(Be(s,l)&&l in o?s:o,l,r)}const Wy={get:or(!1,!1)},qy={get:or(!1,!0)},Hy={get:or(!0,!1)},Vy={get:or(!0,!0)};function jp(t,n,s){const o=he(s);if(o!==s&&n.call(t,o)){const l=oi(t);console.warn(`Reactive ${l} contains both the raw and reactive versions of the same object${l==="Map"?" as keys":""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`)}}const Wp=new WeakMap,qp=new WeakMap,Hp=new WeakMap,Vp=new WeakMap;function zy(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ky(t){return t.__v_skip||!Object.isExtensible(t)?0:zy(oi(t))}function He(t){return Vn(t)?t:lr(t,!1,Rp,Wy,Wp)}function Gy(t){return lr(t,!1,Py,qy,qp)}function Yt(t){return lr(t,!0,Np,Hy,Hp)}function uo(t){return lr(t,!0,Iy,Vy,Vp)}function lr(t,n,s,o,l){if(!$e(t))return console.warn(`value cannot be made reactive: ${String(t)}`),t;if(t.__v_raw&&!(n&&t.__v_isReactive))return t;const r=l.get(t);if(r)return r;const a=Ky(t);if(a===0)return t;const i=new Proxy(t,a===2?o:s);return l.set(t,i),i}function ms(t){return Vn(t)?ms(t.__v_raw):!!(t&&t.__v_isReactive)}function Vn(t){return!!(t&&t.__v_isReadonly)}function Pl(t){return!!(t&&t.__v_isShallow)}function Il(t){return ms(t)||Vn(t)}function he(t){const n=t&&t.__v_raw;return n?he(n):t}function rr(t){return Tl(t,"__v_skip",!0),t}const So=t=>$e(t)?He(t):t,ui=t=>$e(t)?Yt(t):t;function pi(t){In&&gt&&(t=he(t),Ip(t.dep||(t.dep=ai()),{target:t,type:"get",key:"value"}))}function di(t,n){t=he(t);const s=t.dep;s&&na(s,{target:t,type:"set",key:"value",newValue:n})}function Se(t){return!!(t&&t.__v_isRef===!0)}function Y(t){return zp(t,!1)}function un(t){return zp(t,!0)}function zp(t,n){return Se(t)?t:new Yy(t,n)}class Yy{constructor(n,s){this.__v_isShallow=s,this.dep=void 0,this.__v_isRef=!0,this._rawValue=s?n:he(n),this._value=s?n:So(n)}get value(){return pi(this),this._value}set value(n){const s=this.__v_isShallow||Pl(n)||Vn(n);n=s?n:he(n),Eo(n,this._rawValue)&&(this._rawValue=n,this._value=s?n:So(n),di(this,n))}}function T(t){return Se(t)?t.value:t}const Zy={get:(t,n,s)=>T(Reflect.get(t,n,s)),set:(t,n,s,o)=>{const l=t[n];return Se(l)&&!Se(s)?(l.value=s,!0):Reflect.set(t,n,s,o)}};function Kp(t){return ms(t)?t:new Proxy(t,Zy)}class Qy{constructor(n){this.dep=void 0,this.__v_isRef=!0;const{get:s,set:o}=n(()=>pi(this),()=>di(this));this._get=s,this._set=o}get value(){return this._get()}set value(n){this._set(n)}}function fi(t){return new Qy(t)}function Jy(t){Il(t)||console.warn("toRefs() expects a reactive object but received a plain one.");const n=ae(t)?new Array(t.length):{};for(const s in t)n[s]=Gp(t,s);return n}class Xy{constructor(n,s,o){this._object=n,this._key=s,this._defaultValue=o,this.__v_isRef=!0}get value(){const n=this._object[this._key];return n===void 0?this._defaultValue:n}set value(n){this._object[this._key]=n}get dep(){return Ay(he(this._object),this._key)}}class em{constructor(n){this._getter=n,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function tm(t,n,s){return Se(t)?t:pe(t)?new em(t):$e(t)&&arguments.length>1?Gp(t,n,s):Y(t)}function Gp(t,n,s){const o=t[n];return Se(o)?o:new Xy(t,n,s)}class nm{constructor(n,s,o,l){this._setter=s,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new ii(n,()=>{this._dirty||(this._dirty=!0,di(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!l,this.__v_isReadonly=o}get value(){const n=he(this);return pi(n),(n._dirty||!n._cacheable)&&(n._dirty=!1,n._value=n.effect.run()),n._value}set value(n){this._setter(n)}}function sm(t,n,s=!1){let o,l;const r=pe(t);r?(o=t,l=()=>{console.warn("Write operation failed: computed value is readonly")}):(o=t.get,l=t.set);const a=new nm(o,l,r||!l,s);return n&&!s&&(a.effect.onTrack=n.onTrack,a.effect.onTrigger=n.onTrigger),a}const gs=[];function xl(t){gs.push(t)}function Al(){gs.pop()}function N(t,...n){Bs();const s=gs.length?gs[gs.length-1].component:null,o=s&&s.appContext.config.warnHandler,l=om();if(o)xn(o,s,11,[t+n.join(""),s&&s.proxy,l.map(({vnode:r})=>`at <${mr(s,r.type)}>`).join(`
`),l]);else{const r=[`[Vue warn]: ${t}`,...n];l.length&&r.push(`
`,...lm(l)),console.warn(...r)}Cs()}function om(){let t=gs[gs.length-1];if(!t)return[];const n=[];for(;t;){const s=n[0];s&&s.vnode===t?s.recurseCount++:n.push({vnode:t,recurseCount:0});const o=t.component&&t.component.parent;t=o&&o.vnode}return n}function lm(t){const n=[];return t.forEach((s,o)=>{n.push(...o===0?[]:[`
`],...rm(s))}),n}function rm({vnode:t,recurseCount:n}){const s=n>0?`... (${n} recursive calls)`:"",o=t.component?t.component.parent==null:!1,l=` at <${mr(t.component,t.type,o)}`,r=">"+s;return t.props?[l,...am(t.props),r]:[l+r]}function am(t){const n=[],s=Object.keys(t);return s.slice(0,3).forEach(o=>{n.push(...Yp(o,t[o]))}),s.length>3&&n.push(" ..."),n}function Yp(t,n,s){return je(n)?(n=JSON.stringify(n),s?n:[`${t}=${n}`]):typeof n=="number"||typeof n=="boolean"||n==null?s?n:[`${t}=${n}`]:Se(n)?(n=Yp(t,he(n.value),!0),s?n:[`${t}=Ref<`,n,">"]):pe(n)?[`${t}=fn${n.name?`<${n.name}>`:""}`]:(n=he(n),s?n:[`${t}=`,n])}function im(t,n){t!==void 0&&(typeof t!="number"?N(`${n} is not a valid number - got ${JSON.stringify(t)}.`):isNaN(t)&&N(`${n} is NaN - the duration expression might be incorrect.`))}const hi={sp:"serverPrefetch hook",bc:"beforeCreate hook",c:"created hook",bm:"beforeMount hook",m:"mounted hook",bu:"beforeUpdate hook",u:"updated",bum:"beforeUnmount hook",um:"unmounted hook",a:"activated hook",da:"deactivated hook",ec:"errorCaptured hook",rtc:"renderTracked hook",rtg:"renderTriggered hook",[0]:"setup function",[1]:"render function",[2]:"watcher getter",[3]:"watcher callback",[4]:"watcher cleanup function",[5]:"native event handler",[6]:"component event handler",[7]:"vnode hook",[8]:"directive hook",[9]:"transition hook",[10]:"app errorHandler",[11]:"app warnHandler",[12]:"ref function",[13]:"async component loader",[14]:"scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core"};function xn(t,n,s,o){let l;try{l=o?t(...o):t()}catch(r){ar(r,n,s)}return l}function Nt(t,n,s,o){if(pe(t)){const r=xn(t,n,s,o);return r&&si(r)&&r.catch(a=>{ar(a,n,s)}),r}const l=[];for(let r=0;r<t.length;r++)l.push(Nt(t[r],n,s,o));return l}function ar(t,n,s,o=!0){const l=n?n.vnode:null;if(n){let r=n.parent;const a=n.proxy,i=hi[s];for(;r;){const u=r.ec;if(u){for(let p=0;p<u.length;p++)if(u[p](t,a,i)===!1)return}r=r.parent}const c=n.appContext.config.errorHandler;if(c){xn(c,null,10,[t,a,i]);return}}cm(t,s,l,o)}function cm(t,n,s,o=!0){{const l=hi[n];if(s&&xl(s),N(`Unhandled error${l?` during execution of ${l}`:""}`),s&&Al(),o)throw t;console.error(t)}}let To=!1,sa=!1;const at=[];let nn=0;const Ls=[];let tn=null,Tn=0;const Zp=Promise.resolve();let yi=null;const um=100;function it(t){const n=yi||Zp;return t?n.then(this?t.bind(this):t):n}function pm(t){let n=nn+1,s=at.length;for(;n<s;){const o=n+s>>>1;$o(at[o])<t?n=o+1:s=o}return n}function ir(t){(!at.length||!at.includes(t,To&&t.allowRecurse?nn+1:nn))&&(t.id==null?at.push(t):at.splice(pm(t.id),0,t),Qp())}function Qp(){!To&&!sa&&(sa=!0,yi=Zp.then(ed))}function dm(t){const n=at.indexOf(t);n>nn&&at.splice(n,1)}function Jp(t){ae(t)?Ls.push(...t):(!tn||!tn.includes(t,t.allowRecurse?Tn+1:Tn))&&Ls.push(t),Qp()}function fc(t,n=To?nn+1:0){for(t=t||new Map;n<at.length;n++){const s=at[n];if(s&&s.pre){if(mi(t,s))continue;at.splice(n,1),n--,s()}}}function Xp(t){if(Ls.length){const n=[...new Set(Ls)];if(Ls.length=0,tn){tn.push(...n);return}for(tn=n,t=t||new Map,tn.sort((s,o)=>$o(s)-$o(o)),Tn=0;Tn<tn.length;Tn++)mi(t,tn[Tn])||tn[Tn]();tn=null,Tn=0}}const $o=t=>t.id==null?1/0:t.id,fm=(t,n)=>{const s=$o(t)-$o(n);if(s===0){if(t.pre&&!n.pre)return-1;if(n.pre&&!t.pre)return 1}return s};function ed(t){sa=!1,To=!0,t=t||new Map,at.sort(fm);const n=s=>mi(t,s);try{for(nn=0;nn<at.length;nn++){const s=at[nn];if(s&&s.active!==!1){if(n(s))continue;xn(s,null,14)}}}finally{nn=0,at.length=0,Xp(t),To=!1,yi=null,(at.length||Ls.length)&&ed(t)}}function mi(t,n){if(!t.has(n))t.set(n,1);else{const s=t.get(n);if(s>um){const o=n.ownerInstance,l=o&&Po(o.type);return N(`Maximum recursive updates exceeded${l?` in component <${l}>`:""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`),!0}else t.set(n,s+1)}}let Mn=!1;const Ps=new Set;$l().__VUE_HMR_RUNTIME__={createRecord:Ar(td),rerender:Ar(mm),reload:Ar(gm)};const ws=new Map;function hm(t){const n=t.type.__hmrId;let s=ws.get(n);s||(td(n,t.type),s=ws.get(n)),s.instances.add(t)}function ym(t){ws.get(t.type.__hmrId).instances.delete(t)}function td(t,n){return ws.has(t)?!1:(ws.set(t,{initialDef:go(n),instances:new Set}),!0)}function go(t){return Od(t)?t.__vccOpts:t}function mm(t,n){const s=ws.get(t);s&&(s.initialDef.render=n,[...s.instances].forEach(o=>{n&&(o.render=n,go(o.type).render=n),o.renderCache=[],Mn=!0,o.update(),Mn=!1}))}function gm(t,n){const s=ws.get(t);if(!s)return;n=go(n),hc(s.initialDef,n);const o=[...s.instances];for(const l of o){const r=go(l.type);Ps.has(r)||(r!==s.initialDef&&hc(r,n),Ps.add(r)),l.appContext.propsCache.delete(l.type),l.appContext.emitsCache.delete(l.type),l.appContext.optionsCache.delete(l.type),l.ceReload?(Ps.add(r),l.ceReload(n.styles),Ps.delete(r)):l.parent?ir(l.parent.update):l.appContext.reload?l.appContext.reload():typeof window<"u"?window.location.reload():console.warn("[HMR] Root or manually mounted instance modified. Full reload required.")}Jp(()=>{for(const l of o)Ps.delete(go(l.type))})}function hc(t,n){Ne(t,n);for(const s in t)s!=="__file"&&!(s in n)&&delete t[s]}function Ar(t){return(n,s)=>{try{return t(n,s)}catch(o){console.error(o),console.warn("[HMR] Something went wrong during Vue component hot-reload. Full reload required.")}}}let sn,po=[],oa=!1;function Go(t,...n){sn?sn.emit(t,...n):oa||po.push({event:t,args:n})}function nd(t,n){var s,o;sn=t,sn?(sn.enabled=!0,po.forEach(({event:l,args:r})=>sn.emit(l,...r)),po=[]):typeof window<"u"&&window.HTMLElement&&!((o=(s=window.navigator)==null?void 0:s.userAgent)!=null&&o.includes("jsdom"))?((n.__VUE_DEVTOOLS_HOOK_REPLAY__=n.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(r=>{nd(r,n)}),setTimeout(()=>{sn||(n.__VUE_DEVTOOLS_HOOK_REPLAY__=null,oa=!0,po=[])},3e3)):(oa=!0,po=[])}function vm(t,n){Go("app:init",t,n,{Fragment:De,Text:Zo,Comment:ut,Static:wl})}function _m(t){Go("app:unmount",t)}const la=gi("component:added"),sd=gi("component:updated"),bm=gi("component:removed"),xm=t=>{sn&&typeof sn.cleanupBuffer=="function"&&!sn.cleanupBuffer(t)&&bm(t)};function gi(t){return n=>{Go(t,n.appContext.app,n.uid,n.parent?n.parent.uid:void 0,n)}}const Am=od("perf:start"),wm=od("perf:end");function od(t){return(n,s,o)=>{Go(t,n.appContext.app,n.uid,n,s,o)}}function Bm(t,n,s){Go("component:emit",t.appContext.app,t,n,s)}function Cm(t,n,...s){if(t.isUnmounted)return;const o=t.vnode.props||Le;{const{emitsOptions:p,propsOptions:[f]}=t;if(p)if(!(n in p))(!f||!(ns(n)in f))&&N(`Component emitted event "${n}" but it is neither declared in the emits option nor as an "${ns(n)}" prop.`);else{const h=p[n];pe(h)&&(h(...s)||N(`Invalid event arguments: event validation failed for event "${n}".`))}}let l=s;const r=n.startsWith("update:"),a=r&&n.slice(7);if(a&&a in o){const p=`${a==="modelValue"?"model":a}Modifiers`,{number:f,trim:h}=o[p]||Le;h&&(l=s.map(y=>je(y)?y.trim():y)),f&&(l=s.map(ay))}Bm(t,n,l);{const p=n.toLowerCase();p!==n&&o[ns(p)]&&N(`Event "${p}" is emitted in component ${mr(t,t.type)} but the handler is registered for "${n}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${wn(n)}" instead of "${n}".`)}let i,c=o[i=ns(n)]||o[i=ns(an(n))];!c&&r&&(c=o[i=ns(wn(n))]),c&&Nt(c,t,6,l);const u=o[i+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[i])return;t.emitted[i]=!0,Nt(u,t,6,l)}}function ld(t,n,s=!1){const o=n.emitsCache,l=o.get(t);if(l!==void 0)return l;const r=t.emits;let a={},i=!1;if(!pe(t)){const c=u=>{const p=ld(u,n,!0);p&&(i=!0,Ne(a,p))};!s&&n.mixins.length&&n.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!r&&!i?($e(t)&&o.set(t,null),null):(ae(r)?r.forEach(c=>a[c]=null):Ne(a,r),$e(t)&&o.set(t,a),a)}function cr(t,n){return!t||!zo(n)?!1:(n=n.slice(2).replace(/Once$/,""),Be(t,n[0].toLowerCase()+n.slice(1))||Be(t,wn(n))||Be(t,n))}let et=null,ur=null;function Ml(t){const n=et;return et=t,ur=t&&t.type.__scopeId||null,n}function vi(t){ur=t}function _i(){ur=null}function U(t,n=et,s){if(!n||t._n)return t;const o=(...l)=>{o._d&&Dc(-1);const r=Ml(n);let a;try{a=t(...l)}finally{Ml(r),o._d&&Dc(1)}return sd(n),a};return o._n=!0,o._c=!0,o._d=!0,o}let ra=!1;function Ll(){ra=!0}function wr(t){const{type:n,vnode:s,proxy:o,withProxy:l,props:r,propsOptions:[a],slots:i,attrs:c,emit:u,render:p,renderCache:f,data:h,setupState:y,ctx:m,inheritAttrs:b}=t;let w,A;const B=Ml(t);ra=!1;try{if(s.shapeFlag&4){const F=l||o;w=Gt(p.call(F,F,f,r,y,h,m)),A=c}else{const F=n;c===r&&Ll(),w=Gt(F.length>1?F(r,{get attrs(){return Ll(),c},slots:i,emit:u}):F(r,null)),A=n.props?c:Fm(c)}}catch(F){vo.length=0,ar(F,t,1),w=I(ut)}let x=w,C;if(w.patchFlag>0&&w.patchFlag&2048&&([x,C]=km(w)),A&&b!==!1){const F=Object.keys(A),{shapeFlag:E}=x;if(F.length){if(E&7)a&&F.some(Sl)&&(A=Dm(A,a)),x=dn(x,A);else if(!ra&&x.type!==ut){const L=Object.keys(c),O=[],W=[];for(let ne=0,ue=L.length;ne<ue;ne++){const Z=L[ne];zo(Z)?Sl(Z)||O.push(Z[2].toLowerCase()+Z.slice(3)):W.push(Z)}W.length&&N(`Extraneous non-props attributes (${W.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`),O.length&&N(`Extraneous non-emits event listeners (${O.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`)}}}return s.dirs&&(yc(x)||N("Runtime directive used on component with non-element root node. The directives will not function as intended."),x=dn(x),x.dirs=x.dirs?x.dirs.concat(s.dirs):s.dirs),s.transition&&(yc(x)||N("Component inside <Transition> renders non-element root node that cannot be animated."),x.transition=s.transition),C?C(x):w=x,Ml(B),w}const km=t=>{const n=t.children,s=t.dynamicChildren,o=rd(n);if(!o)return[t,void 0];const l=n.indexOf(o),r=s?s.indexOf(o):-1,a=i=>{n[l]=i,s&&(r>-1?s[r]=i:i.patchFlag>0&&(t.dynamicChildren=[...s,i]))};return[Gt(o),a]};function rd(t){let n;for(let s=0;s<t.length;s++){const o=t[s];if(pn(o)){if(o.type!==ut||o.children==="v-if"){if(n)return;n=o}}else return}return n}const Fm=t=>{let n;for(const s in t)(s==="class"||s==="style"||zo(s))&&((n||(n={}))[s]=t[s]);return n},Dm=(t,n)=>{const s={};for(const o in t)(!Sl(o)||!(o.slice(9)in n))&&(s[o]=t[o]);return s},yc=t=>t.shapeFlag&7||t.type===ut;function Em(t,n,s){const{props:o,children:l,component:r}=t,{props:a,children:i,patchFlag:c}=n,u=r.emitsOptions;if((l||i)&&Mn||n.dirs||n.transition)return!0;if(s&&c>=0){if(c&1024)return!0;if(c&16)return o?mc(o,a,u):!!a;if(c&8){const p=n.dynamicProps;for(let f=0;f<p.length;f++){const h=p[f];if(a[h]!==o[h]&&!cr(u,h))return!0}}}else return(l||i)&&(!i||!i.$stable)?!0:o===a?!1:o?a?mc(o,a,u):!0:!!a;return!1}function mc(t,n,s){const o=Object.keys(n);if(o.length!==Object.keys(t).length)return!0;for(let l=0;l<o.length;l++){const r=o[l];if(n[r]!==t[r]&&!cr(s,r))return!0}return!1}function Sm({vnode:t,parent:n},s){for(;n&&n.subTree===t;)(t=n.vnode).el=s,n=n.parent}const ad=t=>t.__isSuspense;function Tm(t,n){n&&n.pendingBranch?ae(t)?n.effects.push(...t):n.effects.push(t):Jp(t)}function ks(t,n){return bi(t,null,n)}const al={};function ge(t,n,s){return pe(n)||N("`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."),bi(t,n,s)}function bi(t,n,{immediate:s,deep:o,flush:l,onTrack:r,onTrigger:a}=Le){var i;n||(s!==void 0&&N('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'),o!==void 0&&N('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'));const c=F=>{N("Invalid watch source: ",F,"A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.")},u=ri()===((i=Xe)==null?void 0:i.scope)?Xe:null;let p,f=!1,h=!1;if(Se(t)?(p=()=>t.value,f=Pl(t)):ms(t)?(p=()=>t,o=!0):ae(t)?(h=!0,f=t.some(F=>ms(F)||Pl(F)),p=()=>t.map(F=>{if(Se(F))return F.value;if(ms(F))return ps(F);if(pe(F))return xn(F,u,2);c(F)})):pe(t)?n?p=()=>xn(t,u,2):p=()=>{if(!(u&&u.isUnmounted))return y&&y(),Nt(t,u,3,[m])}:(p=At,c(t)),n&&o){const F=p;p=()=>ps(F())}let y,m=F=>{y=x.onStop=()=>{xn(F,u,4)}},b;if(Uo)if(m=At,n?s&&Nt(n,u,3,[p(),h?[]:void 0,m]):p(),l==="sync"){const F=R0();b=F.__watcherHandles||(F.__watcherHandles=[])}else return At;let w=h?new Array(t.length).fill(al):al;const A=()=>{if(x.active)if(n){const F=x.run();(o||f||(h?F.some((E,L)=>Eo(E,w[L])):Eo(F,w)))&&(y&&y(),Nt(n,u,3,[F,w===al?void 0:h&&w[0]===al?[]:w,m]),w=F)}else x.run()};A.allowRecurse=!!n;let B;l==="sync"?B=A:l==="post"?B=()=>lt(A,u&&u.suspense):(A.pre=!0,u&&(A.id=u.uid),B=()=>ir(A));const x=new ii(p,B);x.onTrack=r,x.onTrigger=a,n?s?A():w=x.run():l==="post"?lt(x.run.bind(x),u&&u.suspense):x.run();const C=()=>{x.stop(),u&&u.scope&&ti(u.scope.effects,x)};return b&&b.push(C),C}function $m(t,n,s){const o=this.proxy,l=je(t)?t.includes(".")?id(o,t):()=>o[t]:t.bind(o,o);let r;pe(n)?r=n:(r=n.handler,s=n);const a=Xe;qs(this);const i=bi(l,r.bind(o),s);return a?qs(a):_s(),i}function id(t,n){const s=n.split(".");return()=>{let o=t;for(let l=0;l<s.length&&o;l++)o=o[s[l]];return o}}function ps(t,n){if(!$e(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),Se(t))ps(t.value,n);else if(ae(t))for(let s=0;s<t.length;s++)ps(t[s],n);else if(Cp(t)||hs(t))t.forEach(s=>{ps(s,n)});else if(Fp(t))for(const s in t)ps(t[s],n);return t}function cd(t){oy(t)&&N("Do not use built-in directive ids as custom directive id: "+t)}function Ke(t,n){const s=et;if(s===null)return N("withDirectives can only be used inside render functions."),t;const o=yr(s)||s.proxy,l=t.dirs||(t.dirs=[]);for(let r=0;r<n.length;r++){let[a,i,c,u=Le]=n[r];a&&(pe(a)&&(a={mounted:a,updated:a}),a.deep&&ps(i),l.push({dir:a,instance:o,value:i,oldValue:void 0,arg:c,modifiers:u}))}return t}function Qn(t,n,s,o){const l=t.dirs,r=n&&n.dirs;for(let a=0;a<l.length;a++){const i=l[a];r&&(i.oldValue=r[a].value);let c=i.dir[o];c&&(Bs(),Nt(c,s,8,[t.el,i,t,n]),Cs())}}function Om(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Gn(()=>{t.isMounted=!0}),Yo(()=>{t.isUnmounting=!0}),t}const It=[Function,Array],Um={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:It,onEnter:It,onAfterEnter:It,onEnterCancelled:It,onBeforeLeave:It,onLeave:It,onAfterLeave:It,onLeaveCancelled:It,onBeforeAppear:It,onAppear:It,onAfterAppear:It,onAppearCancelled:It};function Pm(t,n){const{leavingVNodes:s}=t;let o=s.get(n.type);return o||(o=Object.create(null),s.set(n.type,o)),o}function aa(t,n,s,o){const{appear:l,mode:r,persisted:a=!1,onBeforeEnter:i,onEnter:c,onAfterEnter:u,onEnterCancelled:p,onBeforeLeave:f,onLeave:h,onAfterLeave:y,onLeaveCancelled:m,onBeforeAppear:b,onAppear:w,onAfterAppear:A,onAppearCancelled:B}=n,x=String(t.key),C=Pm(s,t),F=(O,W)=>{O&&Nt(O,o,9,W)},E=(O,W)=>{const ne=W[1];F(O,W),ae(O)?O.every(ue=>ue.length<=1)&&ne():O.length<=1&&ne()},L={mode:r,persisted:a,beforeEnter(O){let W=i;if(!s.isMounted)if(l)W=b||i;else return;O._leaveCb&&O._leaveCb(!0);const ne=C[x];ne&&ls(t,ne)&&ne.el._leaveCb&&ne.el._leaveCb(),F(W,[O])},enter(O){let W=c,ne=u,ue=p;if(!s.isMounted)if(l)W=w||c,ne=A||u,ue=B||p;else return;let Z=!1;const ye=O._enterCb=ve=>{Z||(Z=!0,ve?F(ue,[O]):F(ne,[O]),L.delayedLeave&&L.delayedLeave(),O._enterCb=void 0)};W?E(W,[O,ye]):ye()},leave(O,W){const ne=String(t.key);if(O._enterCb&&O._enterCb(!0),s.isUnmounting)return W();F(f,[O]);let ue=!1;const Z=O._leaveCb=ye=>{ue||(ue=!0,W(),ye?F(m,[O]):F(y,[O]),O._leaveCb=void 0,C[ne]===t&&delete C[ne])};C[ne]=t,h?E(h,[O,Z]):Z()},clone(O){return aa(O,n,s,o)}};return L}function Rl(t,n){t.shapeFlag&6&&t.component?Rl(t.component.subTree,n):t.shapeFlag&128?(t.ssContent.transition=n.clone(t.ssContent),t.ssFallback.transition=n.clone(t.ssFallback)):t.transition=n}function ud(t,n=!1,s){let o=[],l=0;for(let r=0;r<t.length;r++){let a=t[r];const i=s==null?a.key:String(s)+String(a.key!=null?a.key:r);a.type===De?(a.patchFlag&128&&l++,o=o.concat(ud(a.children,n,i))):(n||a.type!==ut)&&o.push(i!=null?dn(a,{key:i}):a)}if(l>1)for(let r=0;r<o.length;r++)o[r].patchFlag=-2;return o}function Ce(t,n){return pe(t)?(()=>Ne({name:t.name},n,{setup:t}))():t}const Rs=t=>!!t.type.__asyncLoader,xi=t=>t.type.__isKeepAlive,Im={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(t,{slots:n}){const s=$t(),o=s.ctx;if(!o.renderer)return()=>{const B=n.default&&n.default();return B&&B.length===1?B[0]:B};const l=new Map,r=new Set;let a=null;s.__v_cache=l;const i=s.suspense,{renderer:{p:c,m:u,um:p,o:{createElement:f}}}=o,h=f("div");o.activate=(B,x,C,F,E)=>{const L=B.component;u(B,x,C,0,i),c(L.vnode,B,x,C,L,i,F,B.slotScopeIds,E),lt(()=>{L.isDeactivated=!1,L.a&&os(L.a);const O=B.props&&B.props.onVnodeMounted;O&&Mt(O,L.parent,B)},i),la(L)},o.deactivate=B=>{const x=B.component;u(B,h,null,1,i),lt(()=>{x.da&&os(x.da);const C=B.props&&B.props.onVnodeUnmounted;C&&Mt(C,x.parent,B),x.isDeactivated=!0},i),la(x)};function y(B){Br(B),p(B,s,i,!0)}function m(B){l.forEach((x,C)=>{const F=Po(x.type);F&&(!B||!B(F))&&b(C)})}function b(B){const x=l.get(B);!a||!ls(x,a)?y(x):a&&Br(a),l.delete(B),r.delete(B)}ge(()=>[t.include,t.exclude],([B,x])=>{B&&m(C=>fo(B,C)),x&&m(C=>!fo(x,C))},{flush:"post",deep:!0});let w=null;const A=()=>{w!=null&&l.set(w,Cr(s.subTree))};return Gn(A),dr(A),Yo(()=>{l.forEach(B=>{const{subTree:x,suspense:C}=s,F=Cr(x);if(B.type===F.type&&B.key===F.key){Br(F);const E=F.component.da;E&&lt(E,C);return}y(B)})}),()=>{if(w=null,!n.default)return null;const B=n.default(),x=B[0];if(B.length>1)return N("KeepAlive should contain exactly one component child."),a=null,B;if(!pn(x)||!(x.shapeFlag&4)&&!(x.shapeFlag&128))return a=null,x;let C=Cr(x);const F=C.type,E=Po(Rs(C)?C.type.__asyncResolved||{}:F),{include:L,exclude:O,max:W}=t;if(L&&(!E||!fo(L,E))||O&&E&&fo(O,E))return a=C,x;const ne=C.key==null?F:C.key,ue=l.get(ne);return C.el&&(C=dn(C),x.shapeFlag&128&&(x.ssContent=C)),w=ne,ue?(C.el=ue.el,C.component=ue.component,C.transition&&Rl(C,C.transition),C.shapeFlag|=512,r.delete(ne),r.add(ne)):(r.add(ne),W&&r.size>parseInt(W,10)&&b(r.values().next().value)),C.shapeFlag|=256,a=C,ad(x.type)?x:C}}},pd=Im;function fo(t,n){return ae(t)?t.some(s=>fo(s,n)):je(t)?t.split(",").includes(n):sy(t)?t.test(n):!1}function dd(t,n){hd(t,"a",n)}function fd(t,n){hd(t,"da",n)}function hd(t,n,s=Xe){const o=t.__wdc||(t.__wdc=()=>{let l=s;for(;l;){if(l.isDeactivated)return;l=l.parent}return t()});if(pr(n,o,s),s){let l=s.parent;for(;l&&l.parent;)xi(l.parent.vnode)&&Mm(o,n,s,l),l=l.parent}}function Mm(t,n,s,o){const l=pr(n,t,o,!0);fr(()=>{ti(o[n],l)},s)}function Br(t){t.shapeFlag&=-257,t.shapeFlag&=-513}function Cr(t){return t.shapeFlag&128?t.ssContent:t}function pr(t,n,s=Xe,o=!1){if(s){const l=s[t]||(s[t]=[]),r=n.__weh||(n.__weh=(...a)=>{if(s.isUnmounted)return;Bs(),qs(s);const i=Nt(n,s,t,a);return _s(),Cs(),i});return o?l.unshift(r):l.push(r),r}else{const l=ns(hi[t].replace(/ hook$/,""));N(`${l} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`)}}const kn=t=>(n,s=Xe)=>(!Uo||t==="sp")&&pr(t,(...o)=>n(...o),s),Lm=kn("bm"),Gn=kn("m"),Rm=kn("bu"),dr=kn("u"),Yo=kn("bum"),fr=kn("um"),Nm=kn("sp"),jm=kn("rtg"),Wm=kn("rtc");function qm(t,n=Xe){pr("ec",t,n)}const ia="components",Hm="directives";function Ws(t,n){return yd(ia,t,!0,n)||t}const Vm=Symbol.for("v-ndc");function jt(t){return yd(Hm,t)}function yd(t,n,s=!0,o=!1){const l=et||Xe;if(l){const r=l.type;if(t===ia){const i=Po(r,!1);if(i&&(i===n||i===an(n)||i===As(an(n))))return r}const a=gc(l[t]||r[t],n)||gc(l.appContext[t],n);if(!a&&o)return r;if(s&&!a){const i=t===ia?`
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.`:"";N(`Failed to resolve ${t.slice(0,-1)}: ${n}${i}`)}return a}else N(`resolve${As(t.slice(0,-1))} can only be used in render() or setup().`)}function gc(t,n){return t&&(t[n]||t[an(n)]||t[As(an(n))])}function Fs(t,n,s,o){let l;const r=s&&s[o];if(ae(t)||je(t)){l=new Array(t.length);for(let a=0,i=t.length;a<i;a++)l[a]=n(t[a],a,void 0,r&&r[a])}else if(typeof t=="number"){Number.isInteger(t)||N(`The v-for range expect an integer value but got ${t}.`),l=new Array(t);for(let a=0;a<t;a++)l[a]=n(a+1,a,void 0,r&&r[a])}else if($e(t))if(t[Symbol.iterator])l=Array.from(t,(a,i)=>n(a,i,void 0,r&&r[i]));else{const a=Object.keys(t);l=new Array(a.length);for(let i=0,c=a.length;i<c;i++){const u=a[i];l[i]=n(t[u],u,i,r&&r[i])}}else l=[];return s&&(s[o]=l),l}function Wt(t,n,s={},o,l){if(et.isCE||et.parent&&Rs(et.parent)&&et.parent.isCE)return n!=="default"&&(s.name=n),I("slot",s,o&&o());let r=t[n];r&&r.length>1&&(N("SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."),r=()=>[]),r&&r._c&&(r._d=!1),v();const a=r&&md(r(s)),i=q(De,{key:s.key||a&&a.key||`_${n}`},a||(o?o():[]),a&&t._===1?64:-2);return!l&&i.scopeId&&(i.slotScopeIds=[i.scopeId+"-s"]),r&&r._c&&(r._d=!0),i}function md(t){return t.some(n=>pn(n)?!(n.type===ut||n.type===De&&!md(n.children)):!0)?t:null}const ca=t=>t?Sd(t)?yr(t)||t.proxy:ca(t.parent):null,vs=Ne(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>uo(t.props),$attrs:t=>uo(t.attrs),$slots:t=>uo(t.slots),$refs:t=>uo(t.refs),$parent:t=>ca(t.parent),$root:t=>ca(t.root),$emit:t=>t.emit,$options:t=>wi(t),$forceUpdate:t=>t.f||(t.f=()=>ir(t.update)),$nextTick:t=>t.n||(t.n=it.bind(t.proxy)),$watch:t=>$m.bind(t)}),Ai=t=>t==="_"||t==="$",kr=(t,n)=>t!==Le&&!t.__isScriptSetup&&Be(t,n),gd={get({_:t},n){const{ctx:s,setupState:o,data:l,props:r,accessCache:a,type:i,appContext:c}=t;if(n==="__isVue")return!0;let u;if(n[0]!=="$"){const y=a[n];if(y!==void 0)switch(y){case 1:return o[n];case 2:return l[n];case 4:return s[n];case 3:return r[n]}else{if(kr(o,n))return a[n]=1,o[n];if(l!==Le&&Be(l,n))return a[n]=2,l[n];if((u=t.propsOptions[0])&&Be(u,n))return a[n]=3,r[n];if(s!==Le&&Be(s,n))return a[n]=4,s[n];ua&&(a[n]=0)}}const p=vs[n];let f,h;if(p)return n==="$attrs"?(dt(t,"get",n),Ll()):n==="$slots"&&dt(t,"get",n),p(t);if((f=i.__cssModules)&&(f=f[n]))return f;if(s!==Le&&Be(s,n))return a[n]=4,s[n];if(h=c.config.globalProperties,Be(h,n))return h[n];et&&(!je(n)||n.indexOf("__v")!==0)&&(l!==Le&&Ai(n[0])&&Be(l,n)?N(`Property ${JSON.stringify(n)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`):t===et&&N(`Property ${JSON.stringify(n)} was accessed during render but is not defined on instance.`))},set({_:t},n,s){const{data:o,setupState:l,ctx:r}=t;return kr(l,n)?(l[n]=s,!0):l.__isScriptSetup&&Be(l,n)?(N(`Cannot mutate <script setup> binding "${n}" from Options API.`),!1):o!==Le&&Be(o,n)?(o[n]=s,!0):Be(t.props,n)?(N(`Attempting to mutate prop "${n}". Props are readonly.`),!1):n[0]==="$"&&n.slice(1)in t?(N(`Attempting to mutate public property "${n}". Properties starting with $ are reserved and readonly.`),!1):(n in t.appContext.config.globalProperties?Object.defineProperty(r,n,{enumerable:!0,configurable:!0,value:s}):r[n]=s,!0)},has({_:{data:t,setupState:n,accessCache:s,ctx:o,appContext:l,propsOptions:r}},a){let i;return!!s[a]||t!==Le&&Be(t,a)||kr(n,a)||(i=r[0])&&Be(i,a)||Be(o,a)||Be(vs,a)||Be(l.config.globalProperties,a)},defineProperty(t,n,s){return s.get!=null?t._.accessCache[n]=0:Be(s,"value")&&this.set(t,n,s.value,null),Reflect.defineProperty(t,n,s)}};gd.ownKeys=t=>(N("Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."),Reflect.ownKeys(t));function zm(t){const n={};return Object.defineProperty(n,"_",{configurable:!0,enumerable:!1,get:()=>t}),Object.keys(vs).forEach(s=>{Object.defineProperty(n,s,{configurable:!0,enumerable:!1,get:()=>vs[s](t),set:At})}),n}function Km(t){const{ctx:n,propsOptions:[s]}=t;s&&Object.keys(s).forEach(o=>{Object.defineProperty(n,o,{enumerable:!0,configurable:!0,get:()=>t.props[o],set:At})})}function Gm(t){const{ctx:n,setupState:s}=t;Object.keys(he(s)).forEach(o=>{if(!s.__isScriptSetup){if(Ai(o[0])){N(`setup() return property ${JSON.stringify(o)} should not start with "$" or "_" which are reserved prefixes for Vue internals.`);return}Object.defineProperty(n,o,{enumerable:!0,configurable:!0,get:()=>s[o],set:At})}})}function Ym(){return Zm().slots}function Zm(){const t=$t();return t||N("useContext() called without active instance."),t.setupContext||(t.setupContext=$d(t))}function vc(t){return ae(t)?t.reduce((n,s)=>(n[s]=null,n),{}):t}function Qm(){const t=Object.create(null);return(n,s)=>{t[s]?N(`${n} property "${s}" is already defined in ${t[s]}.`):t[s]=n}}let ua=!0;function Jm(t){const n=wi(t),s=t.proxy,o=t.ctx;ua=!1,n.beforeCreate&&_c(n.beforeCreate,t,"bc");const{data:l,computed:r,methods:a,watch:i,provide:c,inject:u,created:p,beforeMount:f,mounted:h,beforeUpdate:y,updated:m,activated:b,deactivated:w,beforeDestroy:A,beforeUnmount:B,destroyed:x,unmounted:C,render:F,renderTracked:E,renderTriggered:L,errorCaptured:O,serverPrefetch:W,expose:ne,inheritAttrs:ue,components:Z,directives:ye,filters:ve}=n,be=Qm();{const[ee]=t.propsOptions;if(ee)for(const ie in ee)be("Props",ie)}if(u&&Xm(u,o,be),a)for(const ee in a){const ie=a[ee];pe(ie)?(Object.defineProperty(o,ee,{value:ie.bind(s),configurable:!0,enumerable:!0,writable:!0}),be("Methods",ee)):N(`Method "${ee}" has type "${typeof ie}" in the component definition. Did you reference the function correctly?`)}if(l){pe(l)||N("The data option must be a function. Plain object usage is no longer supported.");const ee=l.call(s,s);if(si(ee)&&N("data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."),!$e(ee))N("data() should return an object.");else{t.data=He(ee);for(const ie in ee)be("Data",ie),Ai(ie[0])||Object.defineProperty(o,ie,{configurable:!0,enumerable:!0,get:()=>ee[ie],set:At})}}if(ua=!0,r)for(const ee in r){const ie=r[ee],we=pe(ie)?ie.bind(s,s):pe(ie.get)?ie.get.bind(s,s):At;we===At&&N(`Computed property "${ee}" has no getter.`);const Ue=!pe(ie)&&pe(ie.set)?ie.set.bind(s):()=>{N(`Write operation failed: computed property "${ee}" is readonly.`)},Ut=$({get:we,set:Ue});Object.defineProperty(o,ee,{enumerable:!0,configurable:!0,get:()=>Ut.value,set:rt=>Ut.value=rt}),be("Computed",ee)}if(i)for(const ee in i)vd(i[ee],o,s,ee);if(c){const ee=pe(c)?c.call(s):c;Reflect.ownKeys(ee).forEach(ie=>{Dt(ie,ee[ie])})}p&&_c(p,t,"c");function Pe(ee,ie){ae(ie)?ie.forEach(we=>ee(we.bind(s))):ie&&ee(ie.bind(s))}if(Pe(Lm,f),Pe(Gn,h),Pe(Rm,y),Pe(dr,m),Pe(dd,b),Pe(fd,w),Pe(qm,O),Pe(Wm,E),Pe(jm,L),Pe(Yo,B),Pe(fr,C),Pe(Nm,W),ae(ne))if(ne.length){const ee=t.exposed||(t.exposed={});ne.forEach(ie=>{Object.defineProperty(ee,ie,{get:()=>s[ie],set:we=>s[ie]=we})})}else t.exposed||(t.exposed={});F&&t.render===At&&(t.render=F),ue!=null&&(t.inheritAttrs=ue),Z&&(t.components=Z),ye&&(t.directives=ye)}function Xm(t,n,s=At){ae(t)&&(t=pa(t));for(const o in t){const l=t[o];let r;$e(l)?"default"in l?r=R(l.from||o,l.default,!0):r=R(l.from||o):r=R(l),Se(r)?Object.defineProperty(n,o,{enumerable:!0,configurable:!0,get:()=>r.value,set:a=>r.value=a}):n[o]=r,s("Inject",o)}}function _c(t,n,s){Nt(ae(t)?t.map(o=>o.bind(n.proxy)):t.bind(n.proxy),n,s)}function vd(t,n,s,o){const l=o.includes(".")?id(s,o):()=>s[o];if(je(t)){const r=n[t];pe(r)?ge(l,r):N(`Invalid watch handler specified by key "${t}"`,r)}else if(pe(t))ge(l,t.bind(s));else if($e(t))if(ae(t))t.forEach(r=>vd(r,n,s,o));else{const r=pe(t.handler)?t.handler.bind(s):n[t.handler];pe(r)?ge(l,r,t):N(`Invalid watch handler specified by key "${t.handler}"`,r)}else N(`Invalid watch option: "${o}"`,t)}function wi(t){const n=t.type,{mixins:s,extends:o}=n,{mixins:l,optionsCache:r,config:{optionMergeStrategies:a}}=t.appContext,i=r.get(n);let c;return i?c=i:!l.length&&!s&&!o?c=n:(c={},l.length&&l.forEach(u=>Nl(c,u,a,!0)),Nl(c,n,a)),$e(n)&&r.set(n,c),c}function Nl(t,n,s,o=!1){const{mixins:l,extends:r}=n;r&&Nl(t,r,s,!0),l&&l.forEach(a=>Nl(t,a,s,!0));for(const a in n)if(o&&a==="expose")N('"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.');else{const i=e0[a]||s&&s[a];t[a]=i?i(t[a],n[a]):n[a]}return t}const e0={data:bc,props:xc,emits:xc,methods:ho,computed:ho,beforeCreate:ht,created:ht,beforeMount:ht,mounted:ht,beforeUpdate:ht,updated:ht,beforeDestroy:ht,beforeUnmount:ht,destroyed:ht,unmounted:ht,activated:ht,deactivated:ht,errorCaptured:ht,serverPrefetch:ht,components:ho,directives:ho,watch:n0,provide:bc,inject:t0};function bc(t,n){return n?t?function(){return Ne(pe(t)?t.call(this,this):t,pe(n)?n.call(this,this):n)}:n:t}function t0(t,n){return ho(pa(t),pa(n))}function pa(t){if(ae(t)){const n={};for(let s=0;s<t.length;s++)n[t[s]]=t[s];return n}return t}function ht(t,n){return t?[...new Set([].concat(t,n))]:n}function ho(t,n){return t?Ne(Object.create(null),t,n):n}function xc(t,n){return t?ae(t)&&ae(n)?[...new Set([...t,...n])]:Ne(Object.create(null),vc(t),vc(n??{})):n}function n0(t,n){if(!t)return n;if(!n)return t;const s=Ne(Object.create(null),t);for(const o in n)s[o]=ht(t[o],n[o]);return s}function _d(){return{app:null,config:{isNativeTag:Bp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let s0=0;function o0(t,n){return function(o,l=null){pe(o)||(o=Ne({},o)),l!=null&&!$e(l)&&(N("root props passed to app.mount() must be an object."),l=null);const r=_d();Object.defineProperty(r.config,"unwrapInjectedRef",{get(){return!0},set(){N("app.config.unwrapInjectedRef has been deprecated. 3.3 now alawys unwraps injected refs in Options API.")}});const a=new Set;let i=!1;const c=r.app={_uid:s0++,_component:o,_props:l,_container:null,_context:r,_instance:null,version:Hl,get config(){return r.config},set config(u){N("app.config cannot be replaced. Modify individual options instead.")},use(u,...p){return a.has(u)?N("Plugin has already been applied to target app."):u&&pe(u.install)?(a.add(u),u.install(c,...p)):pe(u)?(a.add(u),u(c,...p)):N('A plugin must either be a function or an object with an "install" function.'),c},mixin(u){return r.mixins.includes(u)?N("Mixin has already been applied to target app"+(u.name?`: ${u.name}`:"")):r.mixins.push(u),c},component(u,p){return ma(u,r.config),p?(r.components[u]&&N(`Component "${u}" has already been registered in target app.`),r.components[u]=p,c):r.components[u]},directive(u,p){return cd(u),p?(r.directives[u]&&N(`Directive "${u}" has already been registered in target app.`),r.directives[u]=p,c):r.directives[u]},mount(u,p,f){if(i)N("App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`");else{u.__vue_app__&&N("There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first.");const h=I(o,l);return h.appContext=r,r.reload=()=>{t(dn(h),u,f)},p&&n?n(h,u):t(h,u,f),i=!0,c._container=u,u.__vue_app__=c,c._instance=h.component,vm(c,Hl),yr(h.component)||h.component.proxy}},unmount(){i?(t(null,c._container),c._instance=null,_m(c),delete c._container.__vue_app__):N("Cannot unmount an app that is not mounted.")},provide(u,p){return u in r.provides&&N(`App already provides property with key "${String(u)}". It will be overwritten with the new value.`),r.provides[u]=p,c},runWithContext(u){jl=c;try{return u()}finally{jl=null}}};return c}}let jl=null;function Dt(t,n){if(!Xe)N("provide() can only be used inside setup().");else{let s=Xe.provides;const o=Xe.parent&&Xe.parent.provides;o===s&&(s=Xe.provides=Object.create(o)),s[t]=n}}function R(t,n,s=!1){const o=Xe||et;if(o||jl){const l=o?o.parent==null?o.vnode.appContext&&o.vnode.appContext.provides:o.parent.provides:jl._context.provides;if(l&&t in l)return l[t];if(arguments.length>1)return s&&pe(n)?n.call(o&&o.proxy):n;N(`injection "${String(t)}" not found.`)}else N("inject() can only be used inside setup() or functional components.")}function l0(t,n,s,o=!1){const l={},r={};Tl(r,hr,1),t.propsDefaults=Object.create(null),bd(t,n,l,r);for(const a in t.propsOptions[0])a in l||(l[a]=void 0);Ad(n||{},l,t),s?t.props=o?l:Gy(l):t.type.props?t.props=l:t.props=r,t.attrs=r}function r0(t){for(;t;){if(t.type.__hmrId)return!0;t=t.parent}}function a0(t,n,s,o){const{props:l,attrs:r,vnode:{patchFlag:a}}=t,i=he(l),[c]=t.propsOptions;let u=!1;if(!r0(t)&&(o||a>0)&&!(a&16)){if(a&8){const p=t.vnode.dynamicProps;for(let f=0;f<p.length;f++){let h=p[f];if(cr(t.emitsOptions,h))continue;const y=n[h];if(c)if(Be(r,h))y!==r[h]&&(r[h]=y,u=!0);else{const m=an(h);l[m]=da(c,i,m,y,t,!1)}else y!==r[h]&&(r[h]=y,u=!0)}}}else{bd(t,n,l,r)&&(u=!0);let p;for(const f in i)(!n||!Be(n,f)&&((p=wn(f))===f||!Be(n,p)))&&(c?s&&(s[f]!==void 0||s[p]!==void 0)&&(l[f]=da(c,i,f,void 0,t,!0)):delete l[f]);if(r!==i)for(const f in r)(!n||!Be(n,f))&&(delete r[f],u=!0)}u&&cn(t,"set","$attrs"),Ad(n||{},l,t)}function bd(t,n,s,o){const[l,r]=t.propsOptions;let a=!1,i;if(n)for(let c in n){if(bl(c))continue;const u=n[c];let p;l&&Be(l,p=an(c))?!r||!r.includes(p)?s[p]=u:(i||(i={}))[p]=u:cr(t.emitsOptions,c)||(!(c in o)||u!==o[c])&&(o[c]=u,a=!0)}if(r){const c=he(s),u=i||Le;for(let p=0;p<r.length;p++){const f=r[p];s[f]=da(l,c,f,u[f],t,!Be(u,f))}}return a}function da(t,n,s,o,l,r){const a=t[s];if(a!=null){const i=Be(a,"default");if(i&&o===void 0){const c=a.default;if(a.type!==Function&&!a.skipFactory&&pe(c)){const{propsDefaults:u}=l;s in u?o=u[s]:(qs(l),o=u[s]=c.call(null,n),_s())}else o=c}a[0]&&(r&&!i?o=!1:a[1]&&(o===""||o===wn(s))&&(o=!0))}return o}function xd(t,n,s=!1){const o=n.propsCache,l=o.get(t);if(l)return l;const r=t.props,a={},i=[];let c=!1;if(!pe(t)){const p=f=>{c=!0;const[h,y]=xd(f,n,!0);Ne(a,h),y&&i.push(...y)};!s&&n.mixins.length&&n.mixins.forEach(p),t.extends&&p(t.extends),t.mixins&&t.mixins.forEach(p)}if(!r&&!c)return $e(t)&&o.set(t,Ms),Ms;if(ae(r))for(let p=0;p<r.length;p++){je(r[p])||N("props must be strings when using array syntax.",r[p]);const f=an(r[p]);Ac(f)&&(a[f]=Le)}else if(r){$e(r)||N("invalid props options",r);for(const p in r){const f=an(p);if(Ac(f)){const h=r[p],y=a[f]=ae(h)||pe(h)?{type:h}:Ne({},h);if(y){const m=Bc(Boolean,y.type),b=Bc(String,y.type);y[0]=m>-1,y[1]=b<0||m<b,(m>-1||Be(y,"default"))&&i.push(f)}}}}const u=[a,i];return $e(t)&&o.set(t,u),u}function Ac(t){return t[0]!=="$"?!0:(N(`Invalid prop name: "${t}" is a reserved property.`),!1)}function fa(t){const n=t&&t.toString().match(/^\s*(function|class) (\w+)/);return n?n[2]:t===null?"null":""}function wc(t,n){return fa(t)===fa(n)}function Bc(t,n){return ae(n)?n.findIndex(s=>wc(s,t)):pe(n)&&wc(n,t)?0:-1}function Ad(t,n,s){const o=he(n),l=s.propsOptions[0];for(const r in l){let a=l[r];a!=null&&i0(r,o[r],a,!Be(t,r)&&!Be(t,wn(r)))}}function i0(t,n,s,o){const{type:l,required:r,validator:a,skipCheck:i}=s;if(r&&o){N('Missing required prop: "'+t+'"');return}if(!(n==null&&!r)){if(l!=null&&l!==!0&&!i){let c=!1;const u=ae(l)?l:[l],p=[];for(let f=0;f<u.length&&!c;f++){const{valid:h,expectedType:y}=u0(n,u[f]);p.push(y||""),c=h}if(!c){N(p0(t,n,p));return}}a&&!a(n)&&N('Invalid prop: custom validator check failed for prop "'+t+'".')}}const c0=Kn("String,Number,Boolean,Function,Symbol,BigInt");function u0(t,n){let s;const o=fa(n);if(c0(o)){const l=typeof t;s=l===o.toLowerCase(),!s&&l==="object"&&(s=t instanceof n)}else o==="Object"?s=$e(t):o==="Array"?s=ae(t):o==="null"?s=t===null:s=t instanceof n;return{valid:s,expectedType:o}}function p0(t,n,s){let o=`Invalid prop: type check failed for prop "${t}". Expected ${s.map(As).join(" | ")}`;const l=s[0],r=oi(n),a=Cc(n,l),i=Cc(n,r);return s.length===1&&kc(l)&&!d0(l,r)&&(o+=` with value ${a}`),o+=`, got ${r} `,kc(r)&&(o+=`with value ${i}.`),o}function Cc(t,n){return n==="String"?`"${t}"`:n==="Number"?`${Number(t)}`:`${t}`}function kc(t){return["string","number","boolean"].some(s=>t.toLowerCase()===s)}function d0(...t){return t.some(n=>n.toLowerCase()==="boolean")}const wd=t=>t[0]==="_"||t==="$stable",Bi=t=>ae(t)?t.map(Gt):[Gt(t)],f0=(t,n,s)=>{if(n._n)return n;const o=U((...l)=>(Xe&&N(`Slot "${t}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`),Bi(n(...l))),s);return o._c=!1,o},Bd=(t,n,s)=>{const o=t._ctx;for(const l in t){if(wd(l))continue;const r=t[l];if(pe(r))n[l]=f0(l,r,o);else if(r!=null){N(`Non-function value encountered for slot "${l}". Prefer function slots for better performance.`);const a=Bi(r);n[l]=()=>a}}},Cd=(t,n)=>{xi(t.vnode)||N("Non-function value encountered for default slot. Prefer function slots for better performance.");const s=Bi(n);t.slots.default=()=>s},h0=(t,n)=>{if(t.vnode.shapeFlag&32){const s=n._;s?(t.slots=he(n),Tl(n,"_",s)):Bd(n,t.slots={})}else t.slots={},n&&Cd(t,n);Tl(t.slots,hr,1)},y0=(t,n,s)=>{const{vnode:o,slots:l}=t;let r=!0,a=Le;if(o.shapeFlag&32){const i=n._;i?Mn?(Ne(l,n),cn(t,"set","$slots")):s&&i===1?r=!1:(Ne(l,n),!s&&i===1&&delete l._):(r=!n.$stable,Bd(n,l)),a=n}else n&&(Cd(t,n),a={default:1});if(r)for(const i in l)!wd(i)&&!(i in a)&&delete l[i]};function ha(t,n,s,o,l=!1){if(ae(t)){t.forEach((h,y)=>ha(h,n&&(ae(n)?n[y]:n),s,o,l));return}if(Rs(o)&&!l)return;const r=o.shapeFlag&4?yr(o.component)||o.component.proxy:o.el,a=l?null:r,{i,r:c}=t;if(!i){N("Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function.");return}const u=n&&n.r,p=i.refs===Le?i.refs={}:i.refs,f=i.setupState;if(u!=null&&u!==c&&(je(u)?(p[u]=null,Be(f,u)&&(f[u]=null)):Se(u)&&(u.value=null)),pe(c))xn(c,i,12,[a,p]);else{const h=je(c),y=Se(c);if(h||y){const m=()=>{if(t.f){const b=h?Be(f,c)?f[c]:p[c]:c.value;l?ae(b)&&ti(b,r):ae(b)?b.includes(r)||b.push(r):h?(p[c]=[r],Be(f,c)&&(f[c]=p[c])):(c.value=[r],t.k&&(p[t.k]=c.value))}else h?(p[c]=a,Be(f,c)&&(f[c]=a)):y?(c.value=a,t.k&&(p[t.k]=a)):N("Invalid template ref type:",c,`(${typeof c})`)};a?(m.id=-1,lt(m,s)):m()}else N("Invalid template ref type:",c,`(${typeof c})`)}}let Qs,Un;function yn(t,n){t.appContext.config.performance&&Wl()&&Un.mark(`vue-${n}-${t.uid}`),Am(t,n,Wl()?Un.now():Date.now())}function mn(t,n){if(t.appContext.config.performance&&Wl()){const s=`vue-${n}-${t.uid}`,o=s+":end";Un.mark(o),Un.measure(`<${mr(t,t.type)}> ${n}`,s,o),Un.clearMarks(s),Un.clearMarks(o)}wm(t,n,Wl()?Un.now():Date.now())}function Wl(){return Qs!==void 0||(typeof window<"u"&&window.performance?(Qs=!0,Un=window.performance):Qs=!1),Qs}function m0(){const t=[];if(t.length){const n=t.length>1;console.warn(`Feature flag${n?"s":""} ${t.join(", ")} ${n?"are":"is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`)}}const lt=Tm;function g0(t){return v0(t)}function v0(t,n){m0();const s=$l();s.__VUE__=!0,nd(s.__VUE_DEVTOOLS_GLOBAL_HOOK__,s);const{insert:o,remove:l,patchProp:r,createElement:a,createText:i,createComment:c,setText:u,setElementText:p,parentNode:f,nextSibling:h,setScopeId:y=At,insertStaticContent:m}=t,b=(g,_,D,M=null,P=null,K=null,J=!1,H=null,G=Mn?!1:!!_.dynamicChildren)=>{if(g===_)return;g&&!ls(g,_)&&(M=Q(g),_t(g,P,K,!0),g=null),_.patchFlag===-2&&(G=!1,_.dynamicChildren=null);const{type:j,ref:re,shapeFlag:se}=_;switch(j){case Zo:w(g,_,D,M);break;case ut:A(g,_,D,M);break;case wl:g==null?B(_,D,M,J):x(g,_,D,J);break;case De:ye(g,_,D,M,P,K,J,H,G);break;default:se&1?E(g,_,D,M,P,K,J,H,G):se&6?ve(g,_,D,M,P,K,J,H,G):se&64||se&128?j.process(g,_,D,M,P,K,J,H,G,te):N("Invalid VNode type:",j,`(${typeof j})`)}re!=null&&P&&ha(re,g&&g.ref,K,_||g,!_)},w=(g,_,D,M)=>{if(g==null)o(_.el=i(_.children),D,M);else{const P=_.el=g.el;_.children!==g.children&&u(P,_.children)}},A=(g,_,D,M)=>{g==null?o(_.el=c(_.children||""),D,M):_.el=g.el},B=(g,_,D,M)=>{[g.el,g.anchor]=m(g.children,_,D,M,g.el,g.anchor)},x=(g,_,D,M)=>{if(_.children!==g.children){const P=h(g.anchor);F(g),[_.el,_.anchor]=m(_.children,D,P,M)}else _.el=g.el,_.anchor=g.anchor},C=({el:g,anchor:_},D,M)=>{let P;for(;g&&g!==_;)P=h(g),o(g,D,M),g=P;o(_,D,M)},F=({el:g,anchor:_})=>{let D;for(;g&&g!==_;)D=h(g),l(g),g=D;l(_)},E=(g,_,D,M,P,K,J,H,G)=>{J=J||_.type==="svg",g==null?L(_,D,M,P,K,J,H,G):ne(g,_,P,K,J,H,G)},L=(g,_,D,M,P,K,J,H)=>{let G,j;const{type:re,props:se,shapeFlag:ce,transition:fe,dirs:ke}=g;if(G=g.el=a(g.type,K,se&&se.is,se),ce&8?p(G,g.children):ce&16&&W(g.children,G,null,M,P,K&&re!=="foreignObject",J,H),ke&&Qn(g,null,M,"created"),O(G,g,g.scopeId,J,M),se){for(const Me in se)Me!=="value"&&!bl(Me)&&r(G,Me,null,se[Me],K,g.children,M,P,S);"value"in se&&r(G,"value",null,se.value),(j=se.onVnodeBeforeMount)&&Mt(j,M,g)}Object.defineProperty(G,"__vnode",{value:g,enumerable:!1}),Object.defineProperty(G,"__vueParentComponent",{value:M,enumerable:!1}),ke&&Qn(g,null,M,"beforeMount");const Re=(!P||P&&!P.pendingBranch)&&fe&&!fe.persisted;Re&&fe.beforeEnter(G),o(G,_,D),((j=se&&se.onVnodeMounted)||Re||ke)&&lt(()=>{j&&Mt(j,M,g),Re&&fe.enter(G),ke&&Qn(g,null,M,"mounted")},P)},O=(g,_,D,M,P)=>{if(D&&y(g,D),M)for(let K=0;K<M.length;K++)y(g,M[K]);if(P){let K=P.subTree;if(K.patchFlag>0&&K.patchFlag&2048&&(K=rd(K.children)||K),_===K){const J=P.vnode;O(g,J,J.scopeId,J.slotScopeIds,P.parent)}}},W=(g,_,D,M,P,K,J,H,G=0)=>{for(let j=G;j<g.length;j++){const re=g[j]=H?$n(g[j]):Gt(g[j]);b(null,re,_,D,M,P,K,J,H)}},ne=(g,_,D,M,P,K,J)=>{const H=_.el=g.el;let{patchFlag:G,dynamicChildren:j,dirs:re}=_;G|=g.patchFlag&16;const se=g.props||Le,ce=_.props||Le;let fe;D&&Jn(D,!1),(fe=ce.onVnodeBeforeUpdate)&&Mt(fe,D,_,g),re&&Qn(_,g,D,"beforeUpdate"),D&&Jn(D,!0),Mn&&(G=0,J=!1,j=null);const ke=P&&_.type!=="foreignObject";if(j?(ue(g.dynamicChildren,j,H,D,M,ke,K),ql(g,_)):J||we(g,_,H,null,D,M,ke,K,!1),G>0){if(G&16)Z(H,_,se,ce,D,M,P);else if(G&2&&se.class!==ce.class&&r(H,"class",null,ce.class,P),G&4&&r(H,"style",se.style,ce.style,P),G&8){const Re=_.dynamicProps;for(let Me=0;Me<Re.length;Me++){const Ge=Re[Me],Vt=se[Ge],Ss=ce[Ge];(Ss!==Vt||Ge==="value")&&r(H,Ge,Vt,Ss,P,g.children,D,M,S)}}G&1&&g.children!==_.children&&p(H,_.children)}else!J&&j==null&&Z(H,_,se,ce,D,M,P);((fe=ce.onVnodeUpdated)||re)&&lt(()=>{fe&&Mt(fe,D,_,g),re&&Qn(_,g,D,"updated")},M)},ue=(g,_,D,M,P,K,J)=>{for(let H=0;H<_.length;H++){const G=g[H],j=_[H],re=G.el&&(G.type===De||!ls(G,j)||G.shapeFlag&70)?f(G.el):D;b(G,j,re,null,M,P,K,J,!0)}},Z=(g,_,D,M,P,K,J)=>{if(D!==M){if(D!==Le)for(const H in D)!bl(H)&&!(H in M)&&r(g,H,D[H],null,J,_.children,P,K,S);for(const H in M){if(bl(H))continue;const G=M[H],j=D[H];G!==j&&H!=="value"&&r(g,H,j,G,J,_.children,P,K,S)}"value"in M&&r(g,"value",D.value,M.value)}},ye=(g,_,D,M,P,K,J,H,G)=>{const j=_.el=g?g.el:i(""),re=_.anchor=g?g.anchor:i("");let{patchFlag:se,dynamicChildren:ce,slotScopeIds:fe}=_;(Mn||se&2048)&&(se=0,G=!1,ce=null),fe&&(H=H?H.concat(fe):fe),g==null?(o(j,D,M),o(re,D,M),W(_.children,D,re,P,K,J,H,G)):se>0&&se&64&&ce&&g.dynamicChildren?(ue(g.dynamicChildren,ce,D,P,K,J,H),ql(g,_)):we(g,_,D,re,P,K,J,H,G)},ve=(g,_,D,M,P,K,J,H,G)=>{_.slotScopeIds=H,g==null?_.shapeFlag&512?P.ctx.activate(_,D,M,J,G):be(_,D,M,P,K,J,G):Pe(g,_,G)},be=(g,_,D,M,P,K,J)=>{const H=g.component=E0(g,M,P);if(H.type.__hmrId&&hm(H),xl(g),yn(H,"mount"),xi(g)&&(H.ctx.renderer=te),yn(H,"init"),T0(H),mn(H,"init"),H.asyncDep){if(P&&P.registerDep(H,ee),!g.el){const G=H.subTree=I(ut);A(null,G,_,D)}return}ee(H,g,_,D,P,K,J),Al(),mn(H,"mount")},Pe=(g,_,D)=>{const M=_.component=g.component;if(Em(g,_,D))if(M.asyncDep&&!M.asyncResolved){xl(_),ie(M,_,D),Al();return}else M.next=_,dm(M.update),M.update();else _.el=g.el,M.vnode=_},ee=(g,_,D,M,P,K,J)=>{const H=()=>{if(g.isMounted){let{next:re,bu:se,u:ce,parent:fe,vnode:ke}=g,Re=re,Me;xl(re||g.vnode),Jn(g,!1),re?(re.el=ke.el,ie(g,re,J)):re=ke,se&&os(se),(Me=re.props&&re.props.onVnodeBeforeUpdate)&&Mt(Me,fe,re,ke),Jn(g,!0),yn(g,"render");const Ge=wr(g);mn(g,"render");const Vt=g.subTree;g.subTree=Ge,yn(g,"patch"),b(Vt,Ge,f(Vt.el),Q(Vt),g,P,K),mn(g,"patch"),re.el=Ge.el,Re===null&&Sm(g,Ge.el),ce&&lt(ce,P),(Me=re.props&&re.props.onVnodeUpdated)&&lt(()=>Mt(Me,fe,re,ke),P),sd(g),Al()}else{let re;const{el:se,props:ce}=_,{bm:fe,m:ke,parent:Re}=g,Me=Rs(_);if(Jn(g,!1),fe&&os(fe),!Me&&(re=ce&&ce.onVnodeBeforeMount)&&Mt(re,Re,_),Jn(g,!0),se&&Ie){const Ge=()=>{yn(g,"render"),g.subTree=wr(g),mn(g,"render"),yn(g,"hydrate"),Ie(se,g.subTree,g,P,null),mn(g,"hydrate")};Me?_.type.__asyncLoader().then(()=>!g.isUnmounted&&Ge()):Ge()}else{yn(g,"render");const Ge=g.subTree=wr(g);mn(g,"render"),yn(g,"patch"),b(null,Ge,D,M,g,P,K),mn(g,"patch"),_.el=Ge.el}if(ke&&lt(ke,P),!Me&&(re=ce&&ce.onVnodeMounted)){const Ge=_;lt(()=>Mt(re,Re,Ge),P)}(_.shapeFlag&256||Re&&Rs(Re.vnode)&&Re.vnode.shapeFlag&256)&&g.a&&lt(g.a,P),g.isMounted=!0,la(g),_=D=M=null}},G=g.effect=new ii(H,()=>ir(j),g.scope),j=g.update=()=>G.run();j.id=g.uid,Jn(g,!0),G.onTrack=g.rtc?re=>os(g.rtc,re):void 0,G.onTrigger=g.rtg?re=>os(g.rtg,re):void 0,j.ownerInstance=g,j()},ie=(g,_,D)=>{_.component=g;const M=g.vnode.props;g.vnode=_,g.next=null,a0(g,_.props,M,D),y0(g,_.children,D),Bs(),fc(),Cs()},we=(g,_,D,M,P,K,J,H,G=!1)=>{const j=g&&g.children,re=g?g.shapeFlag:0,se=_.children,{patchFlag:ce,shapeFlag:fe}=_;if(ce>0){if(ce&128){Ut(j,se,D,M,P,K,J,H,G);return}else if(ce&256){Ue(j,se,D,M,P,K,J,H,G);return}}fe&8?(re&16&&S(j,P,K),se!==j&&p(D,se)):re&16?fe&16?Ut(j,se,D,M,P,K,J,H,G):S(j,P,K,!0):(re&8&&p(D,""),fe&16&&W(se,D,M,P,K,J,H,G))},Ue=(g,_,D,M,P,K,J,H,G)=>{g=g||Ms,_=_||Ms;const j=g.length,re=_.length,se=Math.min(j,re);let ce;for(ce=0;ce<se;ce++){const fe=_[ce]=G?$n(_[ce]):Gt(_[ce]);b(g[ce],fe,D,null,P,K,J,H,G)}j>re?S(g,P,K,!0,!1,se):W(_,D,M,P,K,J,H,G,se)},Ut=(g,_,D,M,P,K,J,H,G)=>{let j=0;const re=_.length;let se=g.length-1,ce=re-1;for(;j<=se&&j<=ce;){const fe=g[j],ke=_[j]=G?$n(_[j]):Gt(_[j]);if(ls(fe,ke))b(fe,ke,D,null,P,K,J,H,G);else break;j++}for(;j<=se&&j<=ce;){const fe=g[se],ke=_[ce]=G?$n(_[ce]):Gt(_[ce]);if(ls(fe,ke))b(fe,ke,D,null,P,K,J,H,G);else break;se--,ce--}if(j>se){if(j<=ce){const fe=ce+1,ke=fe<re?_[fe].el:M;for(;j<=ce;)b(null,_[j]=G?$n(_[j]):Gt(_[j]),D,ke,P,K,J,H,G),j++}}else if(j>ce)for(;j<=se;)_t(g[j],P,K,!0),j++;else{const fe=j,ke=j,Re=new Map;for(j=ke;j<=ce;j++){const ft=_[j]=G?$n(_[j]):Gt(_[j]);ft.key!=null&&(Re.has(ft.key)&&N("Duplicate keys found during update:",JSON.stringify(ft.key),"Make sure keys are unique."),Re.set(ft.key,j))}let Me,Ge=0;const Vt=ce-ke+1;let Ss=!1,nc=0;const Zs=new Array(Vt);for(j=0;j<Vt;j++)Zs[j]=0;for(j=fe;j<=se;j++){const ft=g[j];if(Ge>=Vt){_t(ft,P,K,!0);continue}let en;if(ft.key!=null)en=Re.get(ft.key);else for(Me=ke;Me<=ce;Me++)if(Zs[Me-ke]===0&&ls(ft,_[Me])){en=Me;break}en===void 0?_t(ft,P,K,!0):(Zs[en-ke]=j+1,en>=nc?nc=en:Ss=!0,b(ft,_[en],D,null,P,K,J,H,G),Ge++)}const sc=Ss?_0(Zs):Ms;for(Me=sc.length-1,j=Vt-1;j>=0;j--){const ft=ke+j,en=_[ft],oc=ft+1<re?_[ft+1].el:M;Zs[j]===0?b(null,en,D,oc,P,K,J,H,G):Ss&&(Me<0||j!==sc[Me]?rt(en,D,oc,2):Me--)}}},rt=(g,_,D,M,P=null)=>{const{el:K,type:J,transition:H,children:G,shapeFlag:j}=g;if(j&6){rt(g.component.subTree,_,D,M);return}if(j&128){g.suspense.move(_,D,M);return}if(j&64){J.move(g,_,D,te);return}if(J===De){o(K,_,D);for(let se=0;se<G.length;se++)rt(G[se],_,D,M);o(g.anchor,_,D);return}if(J===wl){C(g,_,D);return}if(M!==2&&j&1&&H)if(M===0)H.beforeEnter(K),o(K,_,D),lt(()=>H.enter(K),P);else{const{leave:se,delayLeave:ce,afterLeave:fe}=H,ke=()=>o(K,_,D),Re=()=>{se(K,()=>{ke(),fe&&fe()})};ce?ce(K,ke,Re):Re()}else o(K,_,D)},_t=(g,_,D,M=!1,P=!1)=>{const{type:K,props:J,ref:H,children:G,dynamicChildren:j,shapeFlag:re,patchFlag:se,dirs:ce}=g;if(H!=null&&ha(H,null,D,g,!0),re&256){_.ctx.deactivate(g);return}const fe=re&1&&ce,ke=!Rs(g);let Re;if(ke&&(Re=J&&J.onVnodeBeforeUnmount)&&Mt(Re,_,g),re&6)Pt(g.component,D,M);else{if(re&128){g.suspense.unmount(D,M);return}fe&&Qn(g,null,_,"beforeUnmount"),re&64?g.type.remove(g,_,D,P,te,M):j&&(K!==De||se>0&&se&64)?S(j,_,D,!1,!0):(K===De&&se&384||!P&&re&16)&&S(G,_,D),M&&Xt(g)}(ke&&(Re=J&&J.onVnodeUnmounted)||fe)&&lt(()=>{Re&&Mt(Re,_,g),fe&&Qn(g,null,_,"unmounted")},D)},Xt=g=>{const{type:_,el:D,anchor:M,transition:P}=g;if(_===De){g.patchFlag>0&&g.patchFlag&2048&&P&&!P.persisted?g.children.forEach(J=>{J.type===ut?l(J.el):Xt(J)}):Zn(D,M);return}if(_===wl){F(g);return}const K=()=>{l(D),P&&!P.persisted&&P.afterLeave&&P.afterLeave()};if(g.shapeFlag&1&&P&&!P.persisted){const{leave:J,delayLeave:H}=P,G=()=>J(D,K);H?H(g.el,K,G):G()}else K()},Zn=(g,_)=>{let D;for(;g!==_;)D=h(g),l(g),g=D;l(_)},Pt=(g,_,D)=>{g.type.__hmrId&&ym(g);const{bum:M,scope:P,update:K,subTree:J,um:H}=g;M&&os(M),P.stop(),K&&(K.active=!1,_t(J,g,_,D)),H&&lt(H,_),lt(()=>{g.isUnmounted=!0},_),_&&_.pendingBranch&&!_.isUnmounted&&g.asyncDep&&!g.asyncResolved&&g.suspenseId===_.pendingId&&(_.deps--,_.deps===0&&_.resolve()),xm(g)},S=(g,_,D,M=!1,P=!1,K=0)=>{for(let J=K;J<g.length;J++)_t(g[J],_,D,M,P)},Q=g=>g.shapeFlag&6?Q(g.component.subTree):g.shapeFlag&128?g.suspense.next():h(g.anchor||g.el),X=(g,_,D)=>{g==null?_._vnode&&_t(_._vnode,null,null,!0):b(_._vnode||null,g,_,null,null,null,D),fc(),Xp(),_._vnode=g},te={p:b,um:_t,m:rt,r:Xt,mt:be,mc:W,pc:we,pbc:ue,n:Q,o:t};let Ae,Ie;return n&&([Ae,Ie]=n(te)),{render:X,hydrate:Ae,createApp:o0(X,Ae)}}function Jn({effect:t,update:n},s){t.allowRecurse=n.allowRecurse=s}function ql(t,n,s=!1){const o=t.children,l=n.children;if(ae(o)&&ae(l))for(let r=0;r<o.length;r++){const a=o[r];let i=l[r];i.shapeFlag&1&&!i.dynamicChildren&&((i.patchFlag<=0||i.patchFlag===32)&&(i=l[r]=$n(l[r]),i.el=a.el),s||ql(a,i)),i.type===Zo&&(i.el=a.el),i.type===ut&&!i.el&&(i.el=a.el)}}function _0(t){const n=t.slice(),s=[0];let o,l,r,a,i;const c=t.length;for(o=0;o<c;o++){const u=t[o];if(u!==0){if(l=s[s.length-1],t[l]<u){n[o]=l,s.push(o);continue}for(r=0,a=s.length-1;r<a;)i=r+a>>1,t[s[i]]<u?r=i+1:a=i;u<t[s[r]]&&(r>0&&(n[o]=s[r-1]),s[r]=o)}}for(r=s.length,a=s[r-1];r-- >0;)s[r]=a,a=n[a];return s}const b0=t=>t.__isTeleport,Ns=t=>t&&(t.disabled||t.disabled===""),Fc=t=>typeof SVGElement<"u"&&t instanceof SVGElement,ya=(t,n)=>{const s=t&&t.to;if(je(s))if(n){const o=n(s);return o||N(`Failed to locate Teleport target with selector "${s}". Note the target element must exist before the component is mounted - i.e. the target cannot be rendered by the component itself, and ideally should be outside of the entire Vue component tree.`),o}else return N("Current renderer does not support string target for Teleports. (missing querySelector renderer option)"),null;else return!s&&!Ns(t)&&N(`Invalid Teleport target: ${s}`),s},x0={__isTeleport:!0,process(t,n,s,o,l,r,a,i,c,u){const{mc:p,pc:f,pbc:h,o:{insert:y,querySelector:m,createText:b,createComment:w}}=u,A=Ns(n.props);let{shapeFlag:B,children:x,dynamicChildren:C}=n;if(Mn&&(c=!1,C=null),t==null){const F=n.el=w("teleport start"),E=n.anchor=w("teleport end");y(F,s,o),y(E,s,o);const L=n.target=ya(n.props,m),O=n.targetAnchor=b("");L?(y(O,L),a=a||Fc(L)):A||N("Invalid Teleport target on mount:",L,`(${typeof L})`);const W=(ne,ue)=>{B&16&&p(x,ne,ue,l,r,a,i,c)};A?W(s,E):L&&W(L,O)}else{n.el=t.el;const F=n.anchor=t.anchor,E=n.target=t.target,L=n.targetAnchor=t.targetAnchor,O=Ns(t.props),W=O?s:E,ne=O?F:L;if(a=a||Fc(E),C?(h(t.dynamicChildren,C,W,l,r,a,i),ql(t,n,!0)):c||f(t,n,W,ne,l,r,a,i,!1),A)O||il(n,s,F,u,1);else if((n.props&&n.props.to)!==(t.props&&t.props.to)){const ue=n.target=ya(n.props,m);ue?il(n,ue,null,u,0):N("Invalid Teleport target on update:",E,`(${typeof E})`)}else O&&il(n,E,L,u,1)}kd(n)},remove(t,n,s,o,{um:l,o:{remove:r}},a){const{shapeFlag:i,children:c,anchor:u,targetAnchor:p,target:f,props:h}=t;if(f&&r(p),(a||!Ns(h))&&(r(u),i&16))for(let y=0;y<c.length;y++){const m=c[y];l(m,n,s,!0,!!m.dynamicChildren)}},move:il,hydrate:A0};function il(t,n,s,{o:{insert:o},m:l},r=2){r===0&&o(t.targetAnchor,n,s);const{el:a,anchor:i,shapeFlag:c,children:u,props:p}=t,f=r===2;if(f&&o(a,n,s),(!f||Ns(p))&&c&16)for(let h=0;h<u.length;h++)l(u[h],n,s,2);f&&o(i,n,s)}function A0(t,n,s,o,l,r,{o:{nextSibling:a,parentNode:i,querySelector:c}},u){const p=n.target=ya(n.props,c);if(p){const f=p._lpa||p.firstChild;if(n.shapeFlag&16)if(Ns(n.props))n.anchor=u(a(t),n,i(t),s,o,l,r),n.targetAnchor=f;else{n.anchor=a(t);let h=f;for(;h;)if(h=a(h),h&&h.nodeType===8&&h.data==="teleport anchor"){n.targetAnchor=h,p._lpa=n.targetAnchor&&a(n.targetAnchor);break}u(f,n,p,s,o,l,r)}kd(n)}return n.anchor&&a(n.anchor)}const w0=x0;function kd(t){const n=t.ctx;if(n&&n.ut){let s=t.children[0].el;for(;s!==t.targetAnchor;)s.nodeType===1&&s.setAttribute("data-v-owner",n.uid),s=s.nextSibling;n.ut()}}const De=Symbol.for("v-fgt"),Zo=Symbol.for("v-txt"),ut=Symbol.for("v-cmt"),wl=Symbol.for("v-stc"),vo=[];let Zt=null;function v(t=!1){vo.push(Zt=t?null:[])}function B0(){vo.pop(),Zt=vo[vo.length-1]||null}let Oo=1;function Dc(t){Oo+=t}function Fd(t){return t.dynamicChildren=Oo>0?Zt||Ms:null,B0(),Oo>0&&Zt&&Zt.push(t),t}function k(t,n,s,o,l,r){return Fd(e(t,n,s,o,l,r,!0))}function q(t,n,s,o,l){return Fd(I(t,n,s,o,l,!0))}function pn(t){return t?t.__v_isVNode===!0:!1}function ls(t,n){return n.shapeFlag&6&&Ps.has(n.type)?(t.shapeFlag&=-257,n.shapeFlag&=-513,!1):t.type===n.type&&t.key===n.key}const C0=(...t)=>k0(...t),hr="__vInternal",Dd=({key:t})=>t??null,Bl=({ref:t,ref_key:n,ref_for:s})=>(typeof t=="number"&&(t=""+t),t!=null?je(t)||Se(t)||pe(t)?{i:et,r:t,k:n,f:!!s}:t:null);function e(t,n=null,s=null,o=0,l=null,r=t===De?0:1,a=!1,i=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:n,key:n&&Dd(n),ref:n&&Bl(n),scopeId:ur,slotScopeIds:null,children:s,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:o,dynamicProps:l,dynamicChildren:null,appContext:null,ctx:et};return i?(Ci(c,s),r&128&&t.normalize(c)):s&&(c.shapeFlag|=je(s)?8:16),c.key!==c.key&&N("VNode created with invalid key (NaN). VNode type:",c.type),Oo>0&&!a&&Zt&&(c.patchFlag>0||r&6)&&c.patchFlag!==32&&Zt.push(c),c}const I=C0;function k0(t,n=null,s=null,o=0,l=null,r=!1){if((!t||t===Vm)&&(t||N(`Invalid vnode type when creating vnode: ${t}.`),t=ut),pn(t)){const i=dn(t,n,!0);return s&&Ci(i,s),Oo>0&&!r&&Zt&&(i.shapeFlag&6?Zt[Zt.indexOf(t)]=i:Zt.push(i)),i.patchFlag|=-2,i}if(Od(t)&&(t=t.__vccOpts),n){n=oe(n);let{class:i,style:c}=n;i&&!je(i)&&(n.class=We(i)),$e(c)&&(Il(c)&&!ae(c)&&(c=Ne({},c)),n.style=nt(c))}const a=je(t)?1:ad(t)?128:b0(t)?64:$e(t)?4:pe(t)?2:0;return a&4&&Il(t)&&(t=he(t),N("Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",`
Component that was made reactive: `,t)),e(t,n,s,o,l,a,r,!0)}function oe(t){return t?Il(t)||hr in t?Ne({},t):t:null}function dn(t,n,s=!1){const{props:o,ref:l,patchFlag:r,children:a}=t,i=n?qe(o||{},n):o;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:i,key:i&&Dd(i),ref:n&&n.ref?s&&l?ae(l)?l.concat(Bl(n)):[l,Bl(n)]:Bl(n):l,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:r===-1&&ae(a)?a.map(Ed):a,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:n&&t.type!==De?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&dn(t.ssContent),ssFallback:t.ssFallback&&dn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Ed(t){const n=dn(t);return ae(t.children)&&(n.children=t.children.map(Ed)),n}function d(t=" ",n=0){return I(Zo,null,t,n)}function me(t="",n=!1){return n?(v(),q(ut,null,t)):I(ut,null,t)}function Gt(t){return t==null||typeof t=="boolean"?I(ut):ae(t)?I(De,null,t.slice()):typeof t=="object"?$n(t):I(Zo,null,String(t))}function $n(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:dn(t)}function Ci(t,n){let s=0;const{shapeFlag:o}=t;if(n==null)n=null;else if(ae(n))s=16;else if(typeof n=="object")if(o&65){const l=n.default;l&&(l._c&&(l._d=!1),Ci(t,l()),l._c&&(l._d=!0));return}else{s=32;const l=n._;!l&&!(hr in n)?n._ctx=et:l===3&&et&&(et.slots._===1?n._=1:(n._=2,t.patchFlag|=1024))}else pe(n)?(n={default:n,_ctx:et},s=32):(n=String(n),o&64?(s=16,n=[d(n)]):s=8);t.children=n,t.shapeFlag|=s}function qe(...t){const n={};for(let s=0;s<t.length;s++){const o=t[s];for(const l in o)if(l==="class")n.class!==o.class&&(n.class=We([n.class,o.class]));else if(l==="style")n.style=nt([n.style,o.style]);else if(zo(l)){const r=n[l],a=o[l];a&&r!==a&&!(ae(r)&&r.includes(a))&&(n[l]=r?[].concat(r,a):a)}else l!==""&&(n[l]=o[l])}return n}function Mt(t,n,s,o=null){Nt(t,n,7,[s,o])}const F0=_d();let D0=0;function E0(t,n,s){const o=t.type,l=(n?n.appContext:t.appContext)||F0,r={uid:D0++,vnode:t,type:o,parent:n,appContext:l,root:null,next:null,subTree:null,effect:null,update:null,scope:new Tp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:n?n.provides:Object.create(l.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:xd(o,l),emitsOptions:ld(o,l),emit:null,emitted:null,propsDefaults:Le,inheritAttrs:o.inheritAttrs,ctx:Le,data:Le,props:Le,attrs:Le,slots:Le,refs:Le,setupState:Le,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:s,suspenseId:s?s.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx=zm(r),r.root=n?n.root:r,r.emit=Cm.bind(null,r),t.ce&&t.ce(r),r}let Xe=null;const $t=()=>Xe||et;let ki,Ts,Ec="__VUE_INSTANCE_SETTERS__";(Ts=$l()[Ec])||(Ts=$l()[Ec]=[]),Ts.push(t=>Xe=t),ki=t=>{Ts.length>1?Ts.forEach(n=>n(t)):Ts[0](t)};const qs=t=>{ki(t),t.scope.on()},_s=()=>{Xe&&Xe.scope.off(),ki(null)},S0=Kn("slot,component");function ma(t,n){const s=n.isNativeTag||Bp;(S0(t)||s(t))&&N("Do not use built-in or reserved HTML elements as component id: "+t)}function Sd(t){return t.vnode.shapeFlag&4}let Uo=!1;function T0(t,n=!1){Uo=n;const{props:s,children:o}=t.vnode,l=Sd(t);l0(t,s,l,n),h0(t,o);const r=l?$0(t,n):void 0;return Uo=!1,r}function $0(t,n){var s;const o=t.type;{if(o.name&&ma(o.name,t.appContext.config),o.components){const r=Object.keys(o.components);for(let a=0;a<r.length;a++)ma(r[a],t.appContext.config)}if(o.directives){const r=Object.keys(o.directives);for(let a=0;a<r.length;a++)cd(r[a])}o.compilerOptions&&O0()&&N('"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.')}t.accessCache=Object.create(null),t.proxy=rr(new Proxy(t.ctx,gd)),Km(t);const{setup:l}=o;if(l){const r=t.setupContext=l.length>1?$d(t):null;qs(t),Bs();const a=xn(l,t,0,[uo(t.props),r]);if(Cs(),_s(),si(a)){if(a.then(_s,_s),n)return a.then(i=>{Sc(t,i,n)}).catch(i=>{ar(i,t,0)});if(t.asyncDep=a,!t.suspense){const i=(s=o.name)!=null?s:"Anonymous";N(`Component <${i}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`)}}else Sc(t,a,n)}else Td(t,n)}function Sc(t,n,s){pe(n)?t.type.__ssrInlineRender?t.ssrRender=n:t.render=n:$e(n)?(pn(n)&&N("setup() should not return VNodes directly - return a render function instead."),t.devtoolsRawSetupState=n,t.setupState=Kp(n),Gm(t)):n!==void 0&&N(`setup() should return an object. Received: ${n===null?"null":typeof n}`),Td(t,s)}let ga;const O0=()=>!ga;function Td(t,n,s){const o=t.type;if(!t.render){if(!n&&ga&&!o.render){const l=o.template||wi(t).template;if(l){yn(t,"compile");const{isCustomElement:r,compilerOptions:a}=t.appContext.config,{delimiters:i,compilerOptions:c}=o,u=Ne(Ne({isCustomElement:r,delimiters:i},a),c);o.render=ga(l,u),mn(t,"compile")}}t.render=o.render||At}qs(t),Bs(),Jm(t),Cs(),_s(),!o.render&&t.render===At&&!n&&(o.template?N('Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'):N("Component is missing template or render function."))}function U0(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(n,s){return Ll(),dt(t,"get","$attrs"),n[s]},set(){return N("setupContext.attrs is readonly."),!1},deleteProperty(){return N("setupContext.attrs is readonly."),!1}}))}function P0(t){return t.slotsProxy||(t.slotsProxy=new Proxy(t.slots,{get(n,s){return dt(t,"get","$slots"),n[s]}}))}function $d(t){return Object.freeze({get attrs(){return U0(t)},get slots(){return P0(t)},get emit(){return(s,...o)=>t.emit(s,...o)},expose:s=>{if(t.exposed&&N("expose() should be called only once per setup()."),s!=null){let o=typeof s;o==="object"&&(ae(s)?o="array":Se(s)&&(o="ref")),o!=="object"&&N(`expose() should be passed a plain object, received ${o}.`)}t.exposed=s||{}}})}function yr(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Kp(rr(t.exposed)),{get(n,s){if(s in n)return n[s];if(s in vs)return vs[s](t)},has(n,s){return s in n||s in vs}}))}const I0=/(?:^|[-_])(\w)/g,M0=t=>t.replace(I0,n=>n.toUpperCase()).replace(/[-_]/g,"");function Po(t,n=!0){return pe(t)?t.displayName||t.name:t.name||n&&t.__name}function mr(t,n,s=!1){let o=Po(n);if(!o&&n.__file){const l=n.__file.match(/([^/\\]+)\.\w+$/);l&&(o=l[1])}if(!o&&t&&t.parent){const l=r=>{for(const a in r)if(r[a]===n)return a};o=l(t.components||t.parent.type.components)||l(t.appContext.components)}return o?M0(o):s?"App":"Anonymous"}function Od(t){return pe(t)&&"__vccOpts"in t}const $=(t,n)=>sm(t,n,Uo);function tt(t,n,s){const o=arguments.length;return o===2?$e(n)&&!ae(n)?pn(n)?I(t,null,[n]):I(t,n):I(t,null,n):(o>3?s=Array.prototype.slice.call(arguments,2):o===3&&pn(s)&&(s=[s]),I(t,n,s))}const L0=Symbol.for("v-scx"),R0=()=>{{const t=R(L0);return t||N("Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."),t}};function Fr(t){return!!(t&&t.__v_isShallow)}function N0(){if(typeof window>"u")return;const t={style:"color:#3ba776"},n={style:"color:#0b1bc9"},s={style:"color:#b62e24"},o={style:"color:#9d288c"},l={header(f){return $e(f)?f.__isVue?["div",t,"VueInstance"]:Se(f)?["div",{},["span",t,p(f)],"<",i(f.value),">"]:ms(f)?["div",{},["span",t,Fr(f)?"ShallowReactive":"Reactive"],"<",i(f),`>${Vn(f)?" (readonly)":""}`]:Vn(f)?["div",{},["span",t,Fr(f)?"ShallowReadonly":"Readonly"],"<",i(f),">"]:null:null},hasBody(f){return f&&f.__isVue},body(f){if(f&&f.__isVue)return["div",{},...r(f.$)]}};function r(f){const h=[];f.type.props&&f.props&&h.push(a("props",he(f.props))),f.setupState!==Le&&h.push(a("setup",f.setupState)),f.data!==Le&&h.push(a("data",he(f.data)));const y=c(f,"computed");y&&h.push(a("computed",y));const m=c(f,"inject");return m&&h.push(a("injected",m)),h.push(["div",{},["span",{style:o.style+";opacity:0.66"},"$ (internal): "],["object",{object:f}]]),h}function a(f,h){return h=Ne({},h),Object.keys(h).length?["div",{style:"line-height:1.25em;margin-bottom:0.6em"},["div",{style:"color:#476582"},f],["div",{style:"padding-left:1.25em"},...Object.keys(h).map(y=>["div",{},["span",o,y+": "],i(h[y],!1)])]]:["span",{}]}function i(f,h=!0){return typeof f=="number"?["span",n,f]:typeof f=="string"?["span",s,JSON.stringify(f)]:typeof f=="boolean"?["span",o,f]:$e(f)?["object",{object:h?he(f):f}]:["span",s,String(f)]}function c(f,h){const y=f.type;if(pe(y))return;const m={};for(const b in f.ctx)u(y,b,h)&&(m[b]=f.ctx[b]);return m}function u(f,h,y){const m=f[y];if(ae(m)&&m.includes(h)||$e(m)&&h in m||f.extends&&u(f.extends,h,y)||f.mixins&&f.mixins.some(b=>u(b,h,y)))return!0}function p(f){return Fr(f)?"ShallowRef":f.effect?"ComputedRef":"Ref"}window.devtoolsFormatters?window.devtoolsFormatters.push(l):window.devtoolsFormatters=[l]}const Hl="3.3.4",j0="http://www.w3.org/2000/svg",rs=typeof document<"u"?document:null,Tc=rs&&rs.createElement("template"),W0={insert:(t,n,s)=>{n.insertBefore(t,s||null)},remove:t=>{const n=t.parentNode;n&&n.removeChild(t)},createElement:(t,n,s,o)=>{const l=n?rs.createElementNS(j0,t):rs.createElement(t,s?{is:s}:void 0);return t==="select"&&o&&o.multiple!=null&&l.setAttribute("multiple",o.multiple),l},createText:t=>rs.createTextNode(t),createComment:t=>rs.createComment(t),setText:(t,n)=>{t.nodeValue=n},setElementText:(t,n)=>{t.textContent=n},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>rs.querySelector(t),setScopeId(t,n){t.setAttribute(n,"")},insertStaticContent(t,n,s,o,l,r){const a=s?s.previousSibling:n.lastChild;if(l&&(l===r||l.nextSibling))for(;n.insertBefore(l.cloneNode(!0),s),!(l===r||!(l=l.nextSibling)););else{Tc.innerHTML=o?`<svg>${t}</svg>`:t;const i=Tc.content;if(o){const c=i.firstChild;for(;c.firstChild;)i.appendChild(c.firstChild);i.removeChild(c)}n.insertBefore(i,s)}return[a?a.nextSibling:n.firstChild,s?s.previousSibling:n.lastChild]}};function q0(t,n,s){const o=t._vtc;o&&(n=(n?[n,...o]:[...o]).join(" ")),n==null?t.removeAttribute("class"):s?t.setAttribute("class",n):t.className=n}function H0(t,n,s){const o=t.style,l=je(s);if(s&&!l){if(n&&!je(n))for(const r in n)s[r]==null&&va(o,r,"");for(const r in s)va(o,r,s[r])}else{const r=o.display;l?n!==s&&(o.cssText=s):n&&t.removeAttribute("style"),"_vod"in t&&(o.display=r)}}const V0=/[^\\];\s*$/,$c=/\s*!important$/;function va(t,n,s){if(ae(s))s.forEach(o=>va(t,n,o));else if(s==null&&(s=""),V0.test(s)&&N(`Unexpected semicolon at the end of '${n}' style value: '${s}'`),n.startsWith("--"))t.setProperty(n,s);else{const o=z0(t,n);$c.test(s)?t.setProperty(wn(o),s.replace($c,""),"important"):t[o]=s}}const Oc=["Webkit","Moz","ms"],Dr={};function z0(t,n){const s=Dr[n];if(s)return s;let o=an(n);if(o!=="filter"&&o in t)return Dr[n]=o;o=As(o);for(let l=0;l<Oc.length;l++){const r=Oc[l]+o;if(r in t)return Dr[n]=r}return n}const Uc="http://www.w3.org/1999/xlink";function K0(t,n,s,o,l){if(o&&n.startsWith("xlink:"))s==null?t.removeAttributeNS(Uc,n.slice(6,n.length)):t.setAttributeNS(Uc,n,s);else{const r=gy(n);s==null||r&&!Ep(s)?t.removeAttribute(n):t.setAttribute(n,r?"":s)}}function G0(t,n,s,o,l,r,a){if(n==="innerHTML"||n==="textContent"){o&&a(o,l,r),t[n]=s??"";return}const i=t.tagName;if(n==="value"&&i!=="PROGRESS"&&!i.includes("-")){t._value=s;const u=i==="OPTION"?t.getAttribute("value"):t.value,p=s??"";u!==p&&(t.value=p),s==null&&t.removeAttribute(n);return}let c=!1;if(s===""||s==null){const u=typeof t[n];u==="boolean"?s=Ep(s):s==null&&u==="string"?(s="",c=!0):u==="number"&&(s=0,c=!0)}try{t[n]=s}catch(u){c||N(`Failed setting prop "${n}" on <${i.toLowerCase()}>: value ${s} is invalid.`,u)}c&&t.removeAttribute(n)}function Y0(t,n,s,o){t.addEventListener(n,s,o)}function Z0(t,n,s,o){t.removeEventListener(n,s,o)}function Q0(t,n,s,o,l=null){const r=t._vei||(t._vei={}),a=r[n];if(o&&a)a.value=o;else{const[i,c]=J0(n);if(o){const u=r[n]=t1(o,l);Y0(t,i,u,c)}else a&&(Z0(t,i,a,c),r[n]=void 0)}}const Pc=/(?:Once|Passive|Capture)$/;function J0(t){let n;if(Pc.test(t)){n={};let o;for(;o=t.match(Pc);)t=t.slice(0,t.length-o[0].length),n[o[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):wn(t.slice(2)),n]}let Er=0;const X0=Promise.resolve(),e1=()=>Er||(X0.then(()=>Er=0),Er=Date.now());function t1(t,n){const s=o=>{if(!o._vts)o._vts=Date.now();else if(o._vts<=s.attached)return;Nt(n1(o,s.value),n,5,[o])};return s.value=t,s.attached=e1(),s}function n1(t,n){if(ae(n)){const s=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{s.call(t),t._stopped=!0},n.map(o=>l=>!l._stopped&&o&&o(l))}else return n}const Ic=/^on[a-z]/,s1=(t,n,s,o,l=!1,r,a,i,c)=>{n==="class"?q0(t,o,l):n==="style"?H0(t,s,o):zo(n)?Sl(n)||Q0(t,n,s,o,a):(n[0]==="."?(n=n.slice(1),!0):n[0]==="^"?(n=n.slice(1),!1):o1(t,n,o,l))?G0(t,n,o,r,a,i,c):(n==="true-value"?t._trueValue=o:n==="false-value"&&(t._falseValue=o),K0(t,n,o,l))};function o1(t,n,s,o){return o?!!(n==="innerHTML"||n==="textContent"||n in t&&Ic.test(n)&&pe(s)):n==="spellcheck"||n==="draggable"||n==="translate"||n==="form"||n==="list"&&t.tagName==="INPUT"||n==="type"&&t.tagName==="TEXTAREA"||Ic.test(n)&&je(s)?!1:n in t}const Dn="transition",Js="animation",Ud={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},l1=Ne({},Um,Ud),Xn=(t,n=[])=>{ae(t)?t.forEach(s=>s(...n)):t&&t(...n)},Mc=t=>t?ae(t)?t.some(n=>n.length>1):t.length>1:!1;function r1(t){const n={};for(const Z in t)Z in Ud||(n[Z]=t[Z]);if(t.css===!1)return n;const{name:s="v",type:o,duration:l,enterFromClass:r=`${s}-enter-from`,enterActiveClass:a=`${s}-enter-active`,enterToClass:i=`${s}-enter-to`,appearFromClass:c=r,appearActiveClass:u=a,appearToClass:p=i,leaveFromClass:f=`${s}-leave-from`,leaveActiveClass:h=`${s}-leave-active`,leaveToClass:y=`${s}-leave-to`}=t,m=a1(l),b=m&&m[0],w=m&&m[1],{onBeforeEnter:A,onEnter:B,onEnterCancelled:x,onLeave:C,onLeaveCancelled:F,onBeforeAppear:E=A,onAppear:L=B,onAppearCancelled:O=x}=n,W=(Z,ye,ve)=>{Sn(Z,ye?p:i),Sn(Z,ye?u:a),ve&&ve()},ne=(Z,ye)=>{Z._isLeaving=!1,Sn(Z,f),Sn(Z,y),Sn(Z,h),ye&&ye()},ue=Z=>(ye,ve)=>{const be=Z?L:B,Pe=()=>W(ye,Z,ve);Xn(be,[ye,Pe]),Lc(()=>{Sn(ye,Z?c:r),gn(ye,Z?p:i),Mc(be)||Rc(ye,o,b,Pe)})};return Ne(n,{onBeforeEnter(Z){Xn(A,[Z]),gn(Z,r),gn(Z,a)},onBeforeAppear(Z){Xn(E,[Z]),gn(Z,c),gn(Z,u)},onEnter:ue(!1),onAppear:ue(!0),onLeave(Z,ye){Z._isLeaving=!0;const ve=()=>ne(Z,ye);gn(Z,f),Id(),gn(Z,h),Lc(()=>{Z._isLeaving&&(Sn(Z,f),gn(Z,y),Mc(C)||Rc(Z,o,w,ve))}),Xn(C,[Z,ve])},onEnterCancelled(Z){W(Z,!1),Xn(x,[Z])},onAppearCancelled(Z){W(Z,!0),Xn(O,[Z])},onLeaveCancelled(Z){ne(Z),Xn(F,[Z])}})}function a1(t){if(t==null)return null;if($e(t))return[Sr(t.enter),Sr(t.leave)];{const n=Sr(t);return[n,n]}}function Sr(t){const n=iy(t);return im(n,"<transition> explicit duration"),n}function gn(t,n){n.split(/\s+/).forEach(s=>s&&t.classList.add(s)),(t._vtc||(t._vtc=new Set)).add(n)}function Sn(t,n){n.split(/\s+/).forEach(o=>o&&t.classList.remove(o));const{_vtc:s}=t;s&&(s.delete(n),s.size||(t._vtc=void 0))}function Lc(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let i1=0;function Rc(t,n,s,o){const l=t._endId=++i1,r=()=>{l===t._endId&&o()};if(s)return setTimeout(r,s);const{type:a,timeout:i,propCount:c}=Pd(t,n);if(!a)return o();const u=a+"end";let p=0;const f=()=>{t.removeEventListener(u,h),r()},h=y=>{y.target===t&&++p>=c&&f()};setTimeout(()=>{p<c&&f()},i+1),t.addEventListener(u,h)}function Pd(t,n){const s=window.getComputedStyle(t),o=m=>(s[m]||"").split(", "),l=o(`${Dn}Delay`),r=o(`${Dn}Duration`),a=Nc(l,r),i=o(`${Js}Delay`),c=o(`${Js}Duration`),u=Nc(i,c);let p=null,f=0,h=0;n===Dn?a>0&&(p=Dn,f=a,h=r.length):n===Js?u>0&&(p=Js,f=u,h=c.length):(f=Math.max(a,u),p=f>0?a>u?Dn:Js:null,h=p?p===Dn?r.length:c.length:0);const y=p===Dn&&/\b(transform|all)(,|$)/.test(o(`${Dn}Property`).toString());return{type:p,timeout:f,propCount:h,hasTransform:y}}function Nc(t,n){for(;t.length<n.length;)t=t.concat(t);return Math.max(...n.map((s,o)=>jc(s)+jc(t[o])))}function jc(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function Id(){return document.body.offsetHeight}const Md=new WeakMap,Ld=new WeakMap,Rd={name:"TransitionGroup",props:Ne({},l1,{tag:String,moveClass:String}),setup(t,{slots:n}){const s=$t(),o=Om();let l,r;return dr(()=>{if(!l.length)return;const a=t.moveClass||`${t.name||"v"}-move`;if(!h1(l[0].el,s.vnode.el,a))return;l.forEach(p1),l.forEach(d1);const i=l.filter(f1);Id(),i.forEach(c=>{const u=c.el,p=u.style;gn(u,a),p.transform=p.webkitTransform=p.transitionDuration="";const f=u._moveCb=h=>{h&&h.target!==u||(!h||/transform$/.test(h.propertyName))&&(u.removeEventListener("transitionend",f),u._moveCb=null,Sn(u,a))};u.addEventListener("transitionend",f)})}),()=>{const a=he(t),i=r1(a);let c=a.tag||De;l=r,r=n.default?ud(n.default()):[];for(let u=0;u<r.length;u++){const p=r[u];p.key!=null?Rl(p,aa(p,i,o,s)):N("<TransitionGroup> children must be keyed.")}if(l)for(let u=0;u<l.length;u++){const p=l[u];Rl(p,aa(p,i,o,s)),Md.set(p,p.el.getBoundingClientRect())}return I(c,null,r)}}},c1=t=>delete t.mode;Rd.props;const u1=Rd;function p1(t){const n=t.el;n._moveCb&&n._moveCb(),n._enterCb&&n._enterCb()}function d1(t){Ld.set(t,t.el.getBoundingClientRect())}function f1(t){const n=Md.get(t),s=Ld.get(t),o=n.left-s.left,l=n.top-s.top;if(o||l){const r=t.el.style;return r.transform=r.webkitTransform=`translate(${o}px,${l}px)`,r.transitionDuration="0s",t}}function h1(t,n,s){const o=t.cloneNode();t._vtc&&t._vtc.forEach(a=>{a.split(/\s+/).forEach(i=>i&&o.classList.remove(i))}),s.split(/\s+/).forEach(a=>a&&o.classList.add(a)),o.style.display="none";const l=n.nodeType===1?n:n.parentNode;l.appendChild(o);const{hasTransform:r}=Pd(o);return l.removeChild(o),r}const y1=["ctrl","shift","alt","meta"],m1={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,n)=>y1.some(s=>t[`${s}Key`]&&!n.includes(s))},g1=(t,n)=>(s,...o)=>{for(let l=0;l<n.length;l++){const r=m1[n[l]];if(r&&r(s,n))return}return t(s,...o)},v1={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},cl=(t,n)=>s=>{if(!("key"in s))return;const o=wn(s.key);if(n.some(l=>l===o||v1[l]===o))return t(s)},Nd={beforeMount(t,{value:n},{transition:s}){t._vod=t.style.display==="none"?"":t.style.display,s&&n?s.beforeEnter(t):Xs(t,n)},mounted(t,{value:n},{transition:s}){s&&n&&s.enter(t)},updated(t,{value:n,oldValue:s},{transition:o}){!n!=!s&&(o?n?(o.beforeEnter(t),Xs(t,!0),o.enter(t)):o.leave(t,()=>{Xs(t,!1)}):Xs(t,n))},beforeUnmount(t,{value:n}){Xs(t,n)}};function Xs(t,n){t.style.display=n?t._vod:"none"}const _1=Ne({patchProp:s1},W0);let Wc;function b1(){return Wc||(Wc=g0(_1))}const x1=(...t)=>{const n=b1().createApp(...t);A1(n),w1(n);const{mount:s}=n;return n.mount=o=>{const l=B1(o);if(!l)return;const r=n._component;!pe(r)&&!r.render&&!r.template&&(r.template=l.innerHTML),l.innerHTML="";const a=s(l,!1,l instanceof SVGElement);return l instanceof Element&&(l.removeAttribute("v-cloak"),l.setAttribute("data-v-app","")),a},n};function A1(t){Object.defineProperty(t.config,"isNativeTag",{value:n=>Dp(n)||yy(n),writable:!1})}function w1(t){{const n=t.config.isCustomElement;Object.defineProperty(t.config,"isCustomElement",{get(){return n},set(){N("The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead.")}});const s=t.config.compilerOptions,o='The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';Object.defineProperty(t.config,"compilerOptions",{get(){return N(o),s},set(){N(o)}})}}function B1(t){if(je(t)){const n=document.querySelector(t);return n||N(`Failed to mount app: mount target selector "${t}" returned null.`),n}return window.ShadowRoot&&t instanceof window.ShadowRoot&&t.mode==="closed"&&N('mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'),t}function C1(){N0()}C1();function _a(t,n={},s){for(const o in t){const l=t[o],r=s?`${s}:${o}`:o;typeof l=="object"&&l!==null?_a(l,n,r):typeof l=="function"&&(n[r]=l)}return n}const k1={run:t=>t()},F1=()=>k1,jd=typeof console.createTask<"u"?console.createTask:F1;function D1(t,n){const s=n.shift(),o=jd(s);return t.reduce((l,r)=>l.then(()=>o.run(()=>r(...n))),Promise.resolve())}function E1(t,n){const s=n.shift(),o=jd(s);return Promise.all(t.map(l=>o.run(()=>l(...n))))}function Tr(t,n){for(const s of[...t])s(n)}class S1{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(n,s,o={}){if(!n||typeof s!="function")return()=>{};const l=n;let r;for(;this._deprecatedHooks[n];)r=this._deprecatedHooks[n],n=r.to;if(r&&!o.allowDeprecated){let a=r.message;a||(a=`${l} hook has been deprecated`+(r.to?`, please use ${r.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(a)||(console.warn(a),this._deprecatedMessages.add(a))}if(!s.name)try{Object.defineProperty(s,"name",{get:()=>"_"+n.replace(/\W+/g,"_")+"_hook_cb",configurable:!0})}catch{}return this._hooks[n]=this._hooks[n]||[],this._hooks[n].push(s),()=>{s&&(this.removeHook(n,s),s=void 0)}}hookOnce(n,s){let o,l=(...r)=>(typeof o=="function"&&o(),o=void 0,l=void 0,s(...r));return o=this.hook(n,l),o}removeHook(n,s){if(this._hooks[n]){const o=this._hooks[n].indexOf(s);o!==-1&&this._hooks[n].splice(o,1),this._hooks[n].length===0&&delete this._hooks[n]}}deprecateHook(n,s){this._deprecatedHooks[n]=typeof s=="string"?{to:s}:s;const o=this._hooks[n]||[];delete this._hooks[n];for(const l of o)this.hook(n,l)}deprecateHooks(n){Object.assign(this._deprecatedHooks,n);for(const s in n)this.deprecateHook(s,n[s])}addHooks(n){const s=_a(n),o=Object.keys(s).map(l=>this.hook(l,s[l]));return()=>{for(const l of o.splice(0,o.length))l()}}removeHooks(n){const s=_a(n);for(const o in s)this.removeHook(o,s[o])}removeAllHooks(){for(const n in this._hooks)delete this._hooks[n]}callHook(n,...s){return s.unshift(n),this.callHookWith(D1,n,...s)}callHookParallel(n,...s){return s.unshift(n),this.callHookWith(E1,n,...s)}callHookWith(n,s,...o){const l=this._before||this._after?{name:s,args:o,context:{}}:void 0;this._before&&Tr(this._before,l);const r=n(s in this._hooks?[...this._hooks[s]]:[],o);return r instanceof Promise?r.finally(()=>{this._after&&l&&Tr(this._after,l)}):(this._after&&l&&Tr(this._after,l),r)}beforeEach(n){return this._before=this._before||[],this._before.push(n),()=>{if(this._before!==void 0){const s=this._before.indexOf(n);s!==-1&&this._before.splice(s,1)}}}afterEach(n){return this._after=this._after||[],this._after.push(n),()=>{if(this._after!==void 0){const s=this._after.indexOf(n);s!==-1&&this._after.splice(s,1)}}}}function T1(){return new S1}function $1(t){return Array.isArray(t)?t:[t]}const Wd=["title","script","style","noscript"],qd=["base","meta","link","style","script","noscript"],O1=["title","titleTemplate","templateParams","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"],U1=["base","title","titleTemplate","bodyAttrs","htmlAttrs","templateParams"],P1=["tagPosition","tagPriority","tagDuplicateStrategy","innerHTML","textContent"];function Hd(t){let n=9;for(let s=0;s<t.length;)n=Math.imul(n^t.charCodeAt(s++),9**9);return((n^n>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function ba(t){return Hd(`${t.tag}:${t.textContent||t.innerHTML||""}:${Object.entries(t.props).map(([n,s])=>`${n}:${String(s)}`).join(",")}`)}function I1(t){let n=9;for(const s of t)for(let o=0;o<s.length;)n=Math.imul(n^s.charCodeAt(o++),9**9);return((n^n>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function Vd(t,n){const{props:s,tag:o}=t;if(U1.includes(o))return o;if(o==="link"&&s.rel==="canonical")return"canonical";if(s.charset)return"charset";const l=["id"];o==="meta"&&l.push("name","property","http-equiv");for(const r of l)if(typeof s[r]<"u"){const a=String(s[r]);return n&&!n(a)?!1:`${o}:${r}:${a}`}return!1}function qc(t,n){return t==null?n||null:typeof t=="function"?t(n):t}function ul(t,n=!1,s){const{tag:o,$el:l}=t;l&&(Object.entries(o.props).forEach(([r,a])=>{a=String(a);const i=`attr:${r}`;if(r==="class"){if(!a)return;for(const c of a.split(" ")){const u=`${i}:${c}`;s&&s(t,u,()=>l.classList.remove(c)),l.classList.contains(c)||l.classList.add(c)}return}s&&!r.startsWith("data-h-")&&s(t,i,()=>l.removeAttribute(r)),(n||l.getAttribute(r)!==a)&&l.setAttribute(r,a)}),Wd.includes(o.tag)&&(o.textContent&&o.textContent!==l.textContent?l.textContent=o.textContent:o.innerHTML&&o.innerHTML!==l.innerHTML&&(l.innerHTML=o.innerHTML)))}let eo=!1;async function zd(t,n={}){var h,y;const s={shouldRender:!0};if(await t.hooks.callHook("dom:beforeRender",s),!s.shouldRender)return;const o=n.document||t.resolvedOptions.document||window.document,l=(await t.resolveTags()).map(i);if(t.resolvedOptions.experimentalHashHydration&&(eo=eo||t._hash||!1,eo)){const m=I1(l.map(b=>b.tag._h));if(eo===m)return;eo=m}const r=t._popSideEffectQueue();t.headEntries().map(m=>m._sde).forEach(m=>{Object.entries(m).forEach(([b,w])=>{r[b]=w})});const a=(m,b,w)=>{b=`${m.renderId}:${b}`,m.entry&&(m.entry._sde[b]=w),delete r[b]};function i(m){const b=t.headEntries().find(A=>A._i===m._e),w={renderId:m._d||ba(m),$el:null,shouldRender:!0,tag:m,entry:b,markSideEffect:(A,B)=>a(w,A,B)};return w}const c=[],u={body:[],head:[]},p=m=>{t._elMap[m.renderId]=m.$el,c.push(m),a(m,"el",()=>{var b;(b=m.$el)==null||b.remove(),delete t._elMap[m.renderId]})};for(const m of l){if(await t.hooks.callHook("dom:beforeRenderTag",m),!m.shouldRender)continue;const{tag:b}=m;if(b.tag==="title"){o.title=b.textContent||"",c.push(m);continue}if(b.tag==="htmlAttrs"||b.tag==="bodyAttrs"){m.$el=o[b.tag==="htmlAttrs"?"documentElement":"body"],ul(m,!1,a),c.push(m);continue}if(m.$el=t._elMap[m.renderId],!m.$el&&b.key&&(m.$el=o.querySelector(`${(h=b.tagPosition)!=null&&h.startsWith("body")?"body":"head"} > ${b.tag}[data-h-${b._h}]`)),m.$el){m.tag._d&&ul(m),p(m);continue}u[(y=b.tagPosition)!=null&&y.startsWith("body")?"body":"head"].push(m)}const f={bodyClose:void 0,bodyOpen:void 0,head:void 0};Object.entries(u).forEach(([m,b])=>{var A;if(!b.length)return;const w=(A=o==null?void 0:o[m])==null?void 0:A.children;if(w){for(const B of[...w].reverse()){const x=B.tagName.toLowerCase();if(!qd.includes(x))continue;const C=B.getAttributeNames().reduce((O,W)=>({...O,[W]:B.getAttribute(W)}),{}),F={tag:x,props:C};B.innerHTML&&(F.innerHTML=B.innerHTML);const E=ba(F);let L=b.findIndex(O=>(O==null?void 0:O.renderId)===E);if(L===-1){const O=Vd(F);L=b.findIndex(W=>(W==null?void 0:W.tag._d)&&W.tag._d===O)}if(L!==-1){const O=b[L];O.$el=B,ul(O),p(O),delete b[L]}}b.forEach(B=>{const x=B.tag.tagPosition||"head";f[x]=f[x]||o.createDocumentFragment(),B.$el||(B.$el=o.createElement(B.tag.tag),ul(B,!0)),f[x].appendChild(B.$el),p(B)})}}),f.head&&o.head.appendChild(f.head),f.bodyOpen&&o.body.insertBefore(f.bodyOpen,o.body.firstChild),f.bodyClose&&o.body.appendChild(f.bodyClose);for(const m of c)await t.hooks.callHook("dom:renderTag",m);Object.values(r).forEach(m=>m())}let $r=null;async function Kd(t,n={}){function s(){return $r=null,zd(t,n)}const o=n.delayFn||(l=>setTimeout(l,10));return $r=$r||new Promise(l=>o(()=>l(s())))}function M1(t){return{hooks:{"entries:updated":function(n){if(typeof(t==null?void 0:t.document)>"u"&&typeof window>"u")return;let s=t==null?void 0:t.delayFn;!s&&typeof requestAnimationFrame<"u"&&(s=requestAnimationFrame),Kd(n,{document:(t==null?void 0:t.document)||window.document,delayFn:s})}}}}function L1(t){var n;return((n=t==null?void 0:t.head.querySelector('meta[name="unhead:ssr"]'))==null?void 0:n.getAttribute("content"))||!1}const Hc={critical:2,high:9,low:12,base:-1,title:1,meta:10};function Vc(t){if(typeof t.tagPriority=="number")return t.tagPriority;if(t.tag==="meta"){if(t.props.charset)return-2;if(t.props["http-equiv"]==="content-security-policy")return 0}const n=t.tagPriority||t.tag;return n in Hc?Hc[n]:10}const R1=[{prefix:"before:",offset:-1},{prefix:"after:",offset:1}];function N1(){return{hooks:{"tags:resolve":t=>{const n=s=>{var o;return(o=t.tags.find(l=>l._d===s))==null?void 0:o._p};for(const{prefix:s,offset:o}of R1)for(const l of t.tags.filter(r=>typeof r.tagPriority=="string"&&r.tagPriority.startsWith(s))){const r=n(l.tagPriority.replace(s,""));typeof r<"u"&&(l._p=r+o)}t.tags.sort((s,o)=>s._p-o._p).sort((s,o)=>Vc(s)-Vc(o))}}}}function j1(){return{hooks:{"tags:resolve":t=>{const{tags:n}=t;let s=n.findIndex(l=>l.tag==="titleTemplate");const o=n.findIndex(l=>l.tag==="title");if(o!==-1&&s!==-1){const l=qc(n[s].textContent,n[o].textContent);l!==null?n[o].textContent=l||n[o].textContent:delete n[o]}else if(s!==-1){const l=qc(n[s].textContent);l!==null&&(n[s].textContent=l,n[s].tag="title",s=-1)}s!==-1&&delete n[s],t.tags=n.filter(Boolean)}}}}function W1(){return{hooks:{"tag:normalise":function({tag:t}){typeof t.props.body<"u"&&(t.tagPosition="bodyClose",delete t.props.body)}}}}const q1=["link","style","script","noscript"];function H1(){return{hooks:{"tag:normalise":({tag:t,resolvedOptions:n})=>{n.experimentalHashHydration===!0&&(t._h=ba(t)),t.key&&q1.includes(t.tag)&&(t._h=Hd(t.key),t.props[`data-h-${t._h}`]="")}}}}const zc=["script","link","bodyAttrs"];function V1(){const t=(n,s)=>{const o={},l={};Object.entries(s.props).forEach(([a,i])=>{a.startsWith("on")&&typeof i=="function"?l[a]=i:o[a]=i});let r;return n==="dom"&&s.tag==="script"&&typeof o.src=="string"&&typeof l.onload<"u"&&(r=o.src,delete o.src),{props:o,eventHandlers:l,delayedSrc:r}};return{hooks:{"ssr:render":function(n){n.tags=n.tags.map(s=>(!zc.includes(s.tag)||!Object.entries(s.props).find(([o,l])=>o.startsWith("on")&&typeof l=="function")||(s.props=t("ssr",s).props),s))},"dom:beforeRenderTag":function(n){if(!zc.includes(n.tag.tag)||!Object.entries(n.tag.props).find(([r,a])=>r.startsWith("on")&&typeof a=="function"))return;const{props:s,eventHandlers:o,delayedSrc:l}=t("dom",n.tag);Object.keys(o).length&&(n.tag.props=s,n.tag._eventHandlers=o,n.tag._delayedSrc=l)},"dom:renderTag":function(n){const s=n.$el;if(!n.tag._eventHandlers||!s)return;const o=n.tag.tag==="bodyAttrs"&&typeof window<"u"?window:s;Object.entries(n.tag._eventHandlers).forEach(([l,r])=>{const a=`${n.tag._d||n.tag._p}:${l}`,i=l.slice(2).toLowerCase(),c=`data-h-${i}`;if(n.markSideEffect(a,()=>{}),s.hasAttribute(c))return;const u=r;s.setAttribute(c,""),o.addEventListener(i,u),n.entry&&(n.entry._sde[a]=()=>{o.removeEventListener(i,u),s.removeAttribute(c)})}),n.tag._delayedSrc&&s.setAttribute("src",n.tag._delayedSrc)}}}}const z1=["templateParams","htmlAttrs","bodyAttrs"];function K1(){return{hooks:{"tag:normalise":function({tag:t}){["hid","vmid","key"].forEach(o=>{t.props[o]&&(t.key=t.props[o],delete t.props[o])});const s=Vd(t)||(t.key?`${t.tag}:${t.key}`:!1);s&&(t._d=s)},"tags:resolve":function(t){const n={};t.tags.forEach(o=>{const l=(o.key?`${o.tag}:${o.key}`:o._d)||o._p,r=n[l];if(r){let i=o==null?void 0:o.tagDuplicateStrategy;if(!i&&z1.includes(o.tag)&&(i="merge"),i==="merge"){const c=r.props;["class","style"].forEach(u=>{o.props[u]&&c[u]&&(u==="style"&&!c[u].endsWith(";")&&(c[u]+=";"),o.props[u]=`${c[u]} ${o.props[u]}`)}),n[l].props={...c,...o.props};return}else if(o._e===r._e){r._duped=r._duped||[],o._d=`${r._d}:${r._duped.length+1}`,r._duped.push(o);return}}const a=Object.keys(o.props).length+(o.innerHTML?1:0)+(o.textContent?1:0);if(qd.includes(o.tag)&&a===0){delete n[l];return}n[l]=o});const s=[];Object.values(n).forEach(o=>{const l=o._duped;delete o._duped,s.push(o),l&&s.push(...l)}),t.tags=s}}}}function pl(t,n){function s(r){if(["s","pageTitle"].includes(r))return n.pageTitle;let a;return r.includes(".")?a=r.split(".").reduce((i,c)=>i&&i[c]||void 0,n):a=n[r],typeof a<"u"?a||"":!1}let o=t;try{o=decodeURI(t)}catch{}return(o.match(/%(\w+\.+\w+)|%(\w+)/g)||[]).sort().reverse().forEach(r=>{const a=s(r.slice(1));typeof a=="string"&&(t=t.replace(new RegExp(`\\${r}(\\W|$)`,"g"),`${a}$1`).trim())}),n.separator&&(t.endsWith(n.separator)&&(t=t.slice(0,-n.separator.length).trim()),t.startsWith(n.separator)&&(t=t.slice(n.separator.length).trim()),t=t.replace(new RegExp(`\\${n.separator}\\s*\\${n.separator}`,"g"),n.separator)),t}function G1(){return{hooks:{"tags:resolve":t=>{var r;const{tags:n}=t,s=(r=n.find(a=>a.tag==="title"))==null?void 0:r.textContent,o=n.findIndex(a=>a.tag==="templateParams"),l=o!==-1?n[o].props:{};l.pageTitle=l.pageTitle||s||"";for(const a of n)if(["titleTemplate","title"].includes(a.tag)&&typeof a.textContent=="string")a.textContent=pl(a.textContent,l);else if(a.tag==="meta"&&typeof a.props.content=="string")a.props.content=pl(a.props.content,l);else if(a.tag==="link"&&typeof a.props.href=="string")a.props.href=pl(a.props.href,l);else if(a.tag==="script"&&["application/json","application/ld+json"].includes(a.props.type)&&typeof a.innerHTML=="string")try{a.innerHTML=JSON.stringify(JSON.parse(a.innerHTML),(i,c)=>typeof c=="string"?pl(c,l):c)}catch{}t.tags=n.filter(a=>a.tag!=="templateParams")}}}}const Y1=typeof window<"u";let Gd;function Z1(t){return Gd=t}function Q1(){return Gd}async function J1(t,n){const s={tag:t,props:{}};return t==="templateParams"?(s.props=n,s):["title","titleTemplate"].includes(t)?(s.textContent=n instanceof Promise?await n:n,s):typeof n=="string"?["script","noscript","style"].includes(t)?(t==="script"&&(/^(https?:)?\/\//.test(n)||n.startsWith("/"))?s.props.src=n:s.innerHTML=n,s):!1:(s.props=await eg(t,{...n}),s.props.children&&(s.props.innerHTML=s.props.children),delete s.props.children,Object.keys(s.props).filter(o=>P1.includes(o)).forEach(o=>{(!["innerHTML","textContent"].includes(o)||Wd.includes(s.tag))&&(s[o]=s.props[o]),delete s.props[o]}),["innerHTML","textContent"].forEach(o=>{if(s.tag==="script"&&typeof s[o]=="string"&&["application/ld+json","application/json"].includes(s.props.type))try{s[o]=JSON.parse(s[o])}catch{s[o]=""}typeof s[o]=="object"&&(s[o]=JSON.stringify(s[o]))}),s.props.class&&(s.props.class=X1(s.props.class)),s.props.content&&Array.isArray(s.props.content)?s.props.content.map(o=>({...s,props:{...s.props,content:o}})):s)}function X1(t){return typeof t=="object"&&!Array.isArray(t)&&(t=Object.keys(t).filter(n=>t[n])),(Array.isArray(t)?t.join(" "):t).split(" ").filter(n=>n.trim()).filter(Boolean).join(" ")}async function eg(t,n){for(const s of Object.keys(n)){const o=s.startsWith("data-");n[s]instanceof Promise&&(n[s]=await n[s]),String(n[s])==="true"?n[s]=o?"true":"":String(n[s])==="false"&&(o?n[s]="false":delete n[s])}return n}const tg=10;async function ng(t){const n=[];return Object.entries(t.resolvedInput).filter(([s,o])=>typeof o<"u"&&O1.includes(s)).forEach(([s,o])=>{const l=$1(o);n.push(...l.map(r=>J1(s,r)).flat())}),(await Promise.all(n)).flat().filter(Boolean).map((s,o)=>(s._e=t._i,s._p=(t._i<<tg)+o,s))}function sg(){return[K1(),N1(),G1(),j1(),H1(),V1(),W1()]}function og(t={}){return[M1({document:t==null?void 0:t.document,delayFn:t==null?void 0:t.domDelayFn})]}function lg(t={}){const n=rg({...t,plugins:[...og(t),...(t==null?void 0:t.plugins)||[]]});return t.experimentalHashHydration&&n.resolvedOptions.document&&(n._hash=L1(n.resolvedOptions.document)),Z1(n),n}function rg(t={}){let n=[],s={},o=0;const l=T1();t!=null&&t.hooks&&l.addHooks(t.hooks),t.plugins=[...sg(),...(t==null?void 0:t.plugins)||[]],t.plugins.forEach(i=>i.hooks&&l.addHooks(i.hooks)),t.document=t.document||(Y1?document:void 0);const r=()=>l.callHook("entries:updated",a),a={resolvedOptions:t,headEntries(){return n},get hooks(){return l},use(i){i.hooks&&l.addHooks(i.hooks)},push(i,c){const u={_i:o++,input:i,_sde:{}};return c!=null&&c.mode&&(u._m=c==null?void 0:c.mode),c!=null&&c.transform&&(u._t=c==null?void 0:c.transform),n.push(u),r(),{dispose(){n=n.filter(p=>p._i!==u._i?!0:(s={...s,...p._sde||{}},p._sde={},r(),!1))},patch(p){n=n.map(f=>(f._i===u._i&&(u.input=f.input=p,r()),f))}}},async resolveTags(){const i={tags:[],entries:[...n]};await l.callHook("entries:resolve",i);for(const c of i.entries){const u=c._t||(p=>p);if(c.resolvedInput=u(c.resolvedInput||c.input),c.resolvedInput)for(const p of await ng(c)){const f={tag:p,entry:c,resolvedOptions:a.resolvedOptions};await l.callHook("tag:normalise",f),i.tags.push(f.tag)}}return await l.callHook("tags:resolve",i),i.tags},_popSideEffectQueue(){const i={...s};return s={},i},_elMap:{}};return a.hooks.callHook("init",a),a}function ag(t){return typeof t=="function"?t():T(t)}function Vl(t,n=""){if(t instanceof Promise)return t;const s=ag(t);return!t||!s?s:Array.isArray(s)?s.map(o=>Vl(o,n)):typeof s=="object"?Object.fromEntries(Object.entries(s).map(([o,l])=>o==="titleTemplate"||o.startsWith("on")?[o,T(l)]:[o,Vl(l,o)])):s}const ig=Hl.startsWith("3"),cg=typeof window<"u",Yd="usehead";function Fi(){return $t()&&R(Yd)||Q1()}function ug(t){return{install(s){ig&&(s.config.globalProperties.$unhead=t,s.config.globalProperties.$head=t,s.provide(Yd,t))}}.install}function pg(t={}){const n=lg({...t,domDelayFn:s=>setTimeout(()=>it(()=>s()),10),plugins:[dg(),...(t==null?void 0:t.plugins)||[]]});return n.install=ug(n),n}function dg(){return{hooks:{"entries:resolve":function(t){for(const n of t.entries)n.resolvedInput=Vl(n.input)}}}}function fg(t,n={}){const s=Fi(),o=Y(!1),l=Y({});ks(()=>{l.value=o.value?{}:Vl(t)});const r=s.push(l.value,n);return ge(l,i=>{r.patch(i)}),$t()&&(Yo(()=>{r.dispose()}),fd(()=>{o.value=!0}),dd(()=>{o.value=!1})),r}function hg(t,n={}){return Fi().push(t,n)}function Zd(t,n={}){var o;const s=Fi();if(s){const l=cg||!!((o=s.resolvedOptions)!=null&&o.document);return n.mode==="server"&&l||n.mode==="client"&&!l?void 0:l?fg(t,n):hg(t,n)}}function yg(t,n){const s=pg(n||{}),o={unhead:s,install(l){Hl.startsWith("3")&&(l.config.globalProperties.$head=s,l.provide("usehead",s))},use(l){s.use(l)},resolveTags(){return s.resolveTags()},headEntries(){return s.headEntries()},headTags(){return s.resolveTags()},push(l,r){return s.push(l,r)},addEntry(l,r){return s.push(l,r)},addHeadObjs(l,r){return s.push(l,r)},addReactiveEntry(l,r){const a=Zd(l,r);return typeof a<"u"?a.dispose:()=>{}},removeHeadObjs(){},updateDOM(l,r){r?zd(s,{document:l}):Kd(s,{delayFn:a=>setTimeout(()=>a(),50),document:l})},internalHooks:s.hooks,hooks:{"before:dom":[],"resolved:tags":[],"resolved:entries":[]}};return s.addHeadObjs=o.addHeadObjs,s.updateDOM=o.updateDOM,s.hooks.hook("dom:beforeRender",l=>{for(const r of o.hooks["before:dom"])r()===!1&&(l.shouldRender=!1)}),t&&o.addHeadObjs(t),o}const _o=Symbol("v-click-clicks"),as=Symbol("v-click-clicks-elements"),xa=Symbol("v-click-clicks-order-map"),bo=Symbol("v-click-clicks-disabled"),Qd=Symbol("slidev-slide-scale"),V=Symbol("slidev-slidev-context"),mg=Symbol("slidev-route"),gg=Symbol("slidev-slide-context"),ss="slidev-vclick-target",Or="slidev-vclick-hidden",vg="slidev-vclick-fade",Ur="slidev-vclick-hidden-explicitly",to="slidev-vclick-current",dl="slidev-vclick-prior",_g=["localhost","127.0.0.1"];let bg=t=>crypto.getRandomValues(new Uint8Array(t)),xg=(t,n,s)=>{let o=(2<<Math.log(t.length-1)/Math.LN2)-1,l=-~(1.6*o*n/t.length);return(r=n)=>{let a="";for(;;){let i=s(l),c=l;for(;c--;)if(a+=t[i[c]&o]||"",a.length===r)return a}}},Ag=(t,n=21)=>xg(t,n,bg),wg=(t=21)=>crypto.getRandomValues(new Uint8Array(t)).reduce((n,s)=>(s&=63,s<36?n+=s.toString(36):s<62?n+=(s-26).toString(36).toUpperCase():s>62?n+="-":n+="_",n),"");function Jd(t){return t=t??[],Array.isArray(t)?t:[t]}function Aa(t,n){if(!t)return!1;const s=t.indexOf(n);return s>=0?(t.splice(s,1),!0):!1}function Bg(...t){let n,s,o;t.length===1?(n=0,o=1,[s]=t):[n,s,o=1]=t;const l=[];let r=n;for(;r<s;)l.push(r),r+=o||1;return l}function Cg(t){return t!=null}function kg(t,n){return Object.fromEntries(Object.entries(t).map(([s,o])=>n(s,o)).filter(Cg))}const yo={theme:"seriph",title:"Demystifying Unicode",titleTemplate:"%s - Slidev",addons:[],remoteAssets:!1,monaco:"dev",download:!1,export:{},info:`<h2>Unicode, Rust, quirks, and way too much detail.</h2>
`,highlighter:"shiki",lineNumbers:!0,colorSchema:"auto",routerMode:"history",aspectRatio:1.7777777777777777,canvasWidth:980,exportFilename:"",selectable:!1,themeConfig:{},fonts:{sans:['"PT Serif"',"ui-sans-serif","system-ui","-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial",'"Noto Sans"',"sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"','"Noto Color Emoji"'],serif:['"PT Serif"',"ui-serif","Georgia","Cambria",'"Times New Roman"',"Times","serif"],mono:['"PT Mono"',"ui-monospace","SFMono-Regular","Menlo","Monaco","Consolas",'"Liberation Mono"','"Courier New"',"monospace"],webfonts:["PT Serif","PT Mono"],provider:"google",local:[],italic:!0,weights:["400","700"]},favicon:"https://cdn.jsdelivr.net/gh/slidevjs/slidev/assets/favicon.png",drawings:{enabled:!0,persist:!1,presenterOnly:!1,syncAll:!0},plantUmlServer:"https://www.plantuml.com/plantuml",codeCopy:!0,record:"dev",css:"unocss",presenter:!0,htmlAttrs:{},transition:"slide-left",class:"text-center",hideInToc:!0,background:"/DSC09355.jpg"},Ee=yo,Ln=Ee.aspectRatio??16/9,Rn=Ee.canvasWidth??980,Di=Math.ceil(Rn/Ln),Ei=$(()=>kg(Ee.themeConfig||{},(t,n)=>[`--slidev-theme-${t}`,n]));function Xd(){return Math.random().toString(36).replace(/[^a-z]+/g,"").substr(2,10)}function Ht(t,n,s){Object.defineProperty(t,n,{value:s,writable:!0,enumerable:!1})}const Ds=He({page:0,clicks:0});let Fg=[],Dg=[];Ht(Ds,"$syncUp",!0);Ht(Ds,"$syncDown",!0);Ht(Ds,"$paused",!1);Ht(Ds,"$onSet",t=>Fg.push(t));Ht(Ds,"$onPatch",t=>Dg.push(t));Xd();Ht(Ds,"$patch",async()=>!1);function ef(t,n,s=!1){const o=[];let l=!1,r=!1,a,i;const c=He(n);function u(y){o.push(y)}function p(y,m){c[y]!==m&&(clearTimeout(a),l=!0,c[y]=m,a=setTimeout(()=>l=!1,0))}function f(y){l||(clearTimeout(i),r=!0,Object.entries(y).forEach(([m,b])=>{c[m]=b}),i=setTimeout(()=>r=!1,0))}function h(y){let m;s?s&&window.addEventListener("storage",w=>{w&&w.key===y&&w.newValue&&f(JSON.parse(w.newValue))}):(m=new BroadcastChannel(y),m.addEventListener("message",w=>f(w.data)));function b(){!s&&m&&!r?m.postMessage(he(c)):s&&!r&&window.localStorage.setItem(y,JSON.stringify(c)),l||o.forEach(w=>w(c))}if(ge(c,b,{deep:!0,flush:"sync"}),s){const w=window.localStorage.getItem(y);w&&f(JSON.parse(w))}}return{init:h,onPatch:u,patch:p,state:c}}const{init:Eg,onPatch:Sg,patch:no,state:Pr}=ef(Ds,{page:1,clicks:0,viewerPage:1,viewerClicks:0}),Es=He({});let Tg=[],$g=[];Ht(Es,"$syncUp",!0);Ht(Es,"$syncDown",!0);Ht(Es,"$paused",!1);Ht(Es,"$onSet",t=>Tg.push(t));Ht(Es,"$onPatch",t=>$g.push(t));Xd();Ht(Es,"$patch",async()=>!1);const{init:Og,onPatch:Ug,patch:tf,state:zl}=ef(Es,{},!1),Pg="modulepreload",Ig=function(t){return"/demystifying-unicode/"+t},Kc={},Nn=function(n,s,o){if(!s||s.length===0)return n();const l=document.getElementsByTagName("link");return Promise.all(s.map(r=>{if(r=Ig(r),r in Kc)return;Kc[r]=!0;const a=r.endsWith(".css"),i=a?'[rel="stylesheet"]':"";if(!!o)for(let p=l.length-1;p>=0;p--){const f=l[p];if(f.href===r&&(!a||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${i}`))return;const u=document.createElement("link");if(u.rel=a?"stylesheet":Pg,a||(u.as="script",u.crossOrigin=""),u.href=r,document.head.appendChild(u),a)return new Promise((p,f)=>{u.addEventListener("load",p),u.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>n())};function Mg(t,n){let s,o,l;const r=Y(!0),a=()=>{r.value=!0,l()};ge(t,a,{flush:"sync"});const i=typeof n=="function"?n:n.get,c=typeof n=="function"?void 0:n.set,u=fi((p,f)=>(o=p,l=f,{get(){return r.value&&(s=i(),r.value=!1),o(),s},set(h){c==null||c(h)}}));return Object.isExtensible(u)&&(u.trigger=a),u}function fn(t){return ri()?($p(t),!0):!1}function Ye(t){return typeof t=="function"?t():T(t)}function Lg(t){if(!Se(t))return He(t);const n=new Proxy({},{get(s,o,l){return T(Reflect.get(t.value,o,l))},set(s,o,l){return Se(t.value[o])&&!Se(l)?t.value[o].value=l:t.value[o]=l,!0},deleteProperty(s,o){return Reflect.deleteProperty(t.value,o)},has(s,o){return Reflect.has(t.value,o)},ownKeys(){return Object.keys(t.value)},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}}});return He(n)}const Qt=typeof window<"u",Rg=t=>typeof t<"u",Ng=t=>t!=null,jg=Object.prototype.toString,wa=t=>jg.call(t)==="[object Object]",Ba=()=>+Date.now(),bs=()=>{},Wg=qg();function qg(){var t;return Qt&&((t=window==null?void 0:window.navigator)==null?void 0:t.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent)}function Hg(t,n){function s(...o){return new Promise((l,r)=>{Promise.resolve(t(()=>n.apply(this,o),{fn:n,thisArg:this,args:o})).then(l).catch(r)})}return s}const nf=t=>t();function Vg(t=nf){const n=Y(!0);function s(){n.value=!1}function o(){n.value=!0}const l=(...r)=>{n.value&&t(...r)};return{isActive:Yt(n),pause:s,resume:o,eventFilter:l}}function zg(t,n){var s;if(typeof t=="number")return t+n;const o=((s=t.match(/^-?[0-9]+\.?[0-9]*/))==null?void 0:s[0])||"",l=t.slice(o.length),r=Number.parseFloat(o)+n;return Number.isNaN(r)?t:r+l}function sf(...t){if(t.length!==1)return tm(...t);const n=t[0];return typeof n=="function"?Yt(fi(()=>({get:n,set:bs}))):Y(n)}var Kg=Object.defineProperty,Gg=Object.defineProperties,Yg=Object.getOwnPropertyDescriptors,Gc=Object.getOwnPropertySymbols,Zg=Object.prototype.hasOwnProperty,Qg=Object.prototype.propertyIsEnumerable,Yc=(t,n,s)=>n in t?Kg(t,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[n]=s,Jg=(t,n)=>{for(var s in n||(n={}))Zg.call(n,s)&&Yc(t,s,n[s]);if(Gc)for(var s of Gc(n))Qg.call(n,s)&&Yc(t,s,n[s]);return t},Xg=(t,n)=>Gg(t,Yg(n));function ev(t){if(!Se(t))return Jy(t);const n=Array.isArray(t.value)?new Array(t.value.length):{};for(const s in t.value)n[s]=fi(()=>({get(){return t.value[s]},set(o){if(Array.isArray(t.value)){const l=[...t.value];l[s]=o,t.value=l}else{const l=Xg(Jg({},t.value),{[s]:o});Object.setPrototypeOf(l,t.value),t.value=l}}}));return n}function of(t,n=!0){$t()?Gn(t):n?t():it(t)}function tv(t){$t()&&fr(t)}function nv(t,n=1e3,s={}){const{immediate:o=!0,immediateCallback:l=!1}=s;let r=null;const a=Y(!1);function i(){r&&(clearInterval(r),r=null)}function c(){a.value=!1,i()}function u(){const p=Ye(n);p<=0||(a.value=!0,l&&t(),i(),r=setInterval(t,p))}if(o&&Qt&&u(),Se(n)||typeof n=="function"){const p=ge(n,()=>{a.value&&Qt&&u()});fn(p)}return fn(c),{isActive:a,pause:c,resume:u}}function sv(t,n,s={}){const{immediate:o=!0}=s,l=Y(!1);let r=null;function a(){r&&(clearTimeout(r),r=null)}function i(){l.value=!1,a()}function c(...u){a(),l.value=!0,r=setTimeout(()=>{l.value=!1,r=null,t(...u)},Ye(n))}return o&&(l.value=!0,Qt&&c()),fn(i),{isPending:Yt(l),start:c,stop:i}}function lf(t=!1,n={}){const{truthyValue:s=!0,falsyValue:o=!1}=n,l=Se(t),r=Y(t);function a(i){if(arguments.length)return r.value=i,r.value;{const c=Ye(s);return r.value=r.value===c?Ye(o):c,r.value}}return l?a:[r,a]}var Zc=Object.getOwnPropertySymbols,ov=Object.prototype.hasOwnProperty,lv=Object.prototype.propertyIsEnumerable,rv=(t,n)=>{var s={};for(var o in t)ov.call(t,o)&&n.indexOf(o)<0&&(s[o]=t[o]);if(t!=null&&Zc)for(var o of Zc(t))n.indexOf(o)<0&&lv.call(t,o)&&(s[o]=t[o]);return s};function av(t,n,s={}){const o=s,{eventFilter:l=nf}=o,r=rv(o,["eventFilter"]);return ge(t,Hg(l,n),r)}var iv=Object.defineProperty,cv=Object.defineProperties,uv=Object.getOwnPropertyDescriptors,Kl=Object.getOwnPropertySymbols,rf=Object.prototype.hasOwnProperty,af=Object.prototype.propertyIsEnumerable,Qc=(t,n,s)=>n in t?iv(t,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[n]=s,pv=(t,n)=>{for(var s in n||(n={}))rf.call(n,s)&&Qc(t,s,n[s]);if(Kl)for(var s of Kl(n))af.call(n,s)&&Qc(t,s,n[s]);return t},dv=(t,n)=>cv(t,uv(n)),fv=(t,n)=>{var s={};for(var o in t)rf.call(t,o)&&n.indexOf(o)<0&&(s[o]=t[o]);if(t!=null&&Kl)for(var o of Kl(t))n.indexOf(o)<0&&af.call(t,o)&&(s[o]=t[o]);return s};function hv(t,n,s={}){const o=s,{eventFilter:l}=o,r=fv(o,["eventFilter"]),{eventFilter:a,pause:i,resume:c,isActive:u}=Vg(l);return{stop:av(t,n,dv(pv({},r),{eventFilter:a})),pause:i,resume:c,isActive:u}}function ct(t){var n;const s=Ye(t);return(n=s==null?void 0:s.$el)!=null?n:s}const st=Qt?window:void 0,cf=Qt?window.document:void 0,yv=Qt?window.navigator:void 0;function xe(...t){let n,s,o,l;if(typeof t[0]=="string"||Array.isArray(t[0])?([s,o,l]=t,n=st):[n,s,o,l]=t,!n)return bs;Array.isArray(s)||(s=[s]),Array.isArray(o)||(o=[o]);const r=[],a=()=>{r.forEach(p=>p()),r.length=0},i=(p,f,h,y)=>(p.addEventListener(f,h,y),()=>p.removeEventListener(f,h,y)),c=ge(()=>[ct(n),Ye(l)],([p,f])=>{a(),p&&r.push(...s.flatMap(h=>o.map(y=>i(p,h,y,f))))},{immediate:!0,flush:"post"}),u=()=>{c(),a()};return fn(u),u}let Jc=!1;function mv(t,n,s={}){const{window:o=st,ignore:l=[],capture:r=!0,detectIframe:a=!1}=s;if(!o)return;Wg&&!Jc&&(Jc=!0,Array.from(o.document.body.children).forEach(h=>h.addEventListener("click",bs)));let i=!0;const c=h=>l.some(y=>{if(typeof y=="string")return Array.from(o.document.querySelectorAll(y)).some(m=>m===h.target||h.composedPath().includes(m));{const m=ct(y);return m&&(h.target===m||h.composedPath().includes(m))}}),p=[xe(o,"click",h=>{const y=ct(t);if(!(!y||y===h.target||h.composedPath().includes(y))){if(h.detail===0&&(i=!c(h)),!i){i=!0;return}n(h)}},{passive:!0,capture:r}),xe(o,"pointerdown",h=>{const y=ct(t);y&&(i=!h.composedPath().includes(y)&&!c(h))},{passive:!0}),a&&xe(o,"blur",h=>{setTimeout(()=>{var y;const m=ct(t);((y=o.document.activeElement)==null?void 0:y.tagName)==="IFRAME"&&!(m!=null&&m.contains(o.document.activeElement))&&n(h)},0)})].filter(Boolean);return()=>p.forEach(h=>h())}function gv(t){return typeof t=="function"?t:typeof t=="string"?n=>n.key===t:Array.isArray(t)?n=>t.includes(n.key):()=>!0}function vv(...t){let n,s,o={};t.length===3?(n=t[0],s=t[1],o=t[2]):t.length===2?typeof t[1]=="object"?(n=!0,s=t[0],o=t[1]):(n=t[0],s=t[1]):(n=!0,s=t[0]);const{target:l=st,eventName:r="keydown",passive:a=!1,dedupe:i=!1}=o,c=gv(n);return xe(l,r,p=>{p.repeat&&Ye(i)||c(p)&&s(p)},a)}function _v(t={}){var n;const{window:s=st}=t,o=(n=t.document)!=null?n:s==null?void 0:s.document,l=Mg(()=>null,()=>o==null?void 0:o.activeElement);return s&&(xe(s,"blur",r=>{r.relatedTarget===null&&l.trigger()},!0),xe(s,"focus",l.trigger,!0)),l}function bv(){const t=Y(!1);return $t()&&Gn(()=>{t.value=!0}),t}function Qo(t){const n=bv();return $(()=>(n.value,!!t()))}function xv(t,n={}){const{immediate:s=!0,window:o=st}=n,l=Y(!1);let r=0,a=null;function i(p){if(!l.value||!o)return;const f=p-r;t({delta:f,timestamp:p}),r=p,a=o.requestAnimationFrame(i)}function c(){!l.value&&o&&(l.value=!0,a=o.requestAnimationFrame(i))}function u(){l.value=!1,a!=null&&o&&(o.cancelAnimationFrame(a),a=null)}return s&&c(),fn(u),{isActive:Yt(l),pause:u,resume:c}}function is(t,n={}){const{window:s=st}=n,o=Qo(()=>s&&"matchMedia"in s&&typeof s.matchMedia=="function");let l;const r=Y(!1),a=()=>{l&&("removeEventListener"in l?l.removeEventListener("change",i):l.removeListener(i))},i=()=>{o.value&&(a(),l=s.matchMedia(sf(t).value),r.value=!!(l!=null&&l.matches),l&&("addEventListener"in l?l.addEventListener("change",i):l.addListener(i)))};return ks(i),fn(()=>a()),r}const Av={sm:640,md:768,lg:1024,xl:1280,"2xl":1536};function wv(t,n={}){function s(i,c){let u=t[i];return c!=null&&(u=zg(u,c)),typeof u=="number"&&(u=`${u}px`),u}const{window:o=st}=n;function l(i){return o?o.matchMedia(i).matches:!1}const r=i=>is(`(min-width: ${s(i)})`,n),a=Object.keys(t).reduce((i,c)=>(Object.defineProperty(i,c,{get:()=>r(c),enumerable:!0,configurable:!0}),i),{});return Object.assign(a,{greater(i){return is(`(min-width: ${s(i,.1)})`,n)},greaterOrEqual:r,smaller(i){return is(`(max-width: ${s(i,-.1)})`,n)},smallerOrEqual(i){return is(`(max-width: ${s(i)})`,n)},between(i,c){return is(`(min-width: ${s(i)}) and (max-width: ${s(c,-.1)})`,n)},isGreater(i){return l(`(min-width: ${s(i,.1)})`)},isGreaterOrEqual(i){return l(`(min-width: ${s(i)})`)},isSmaller(i){return l(`(max-width: ${s(i,-.1)})`)},isSmallerOrEqual(i){return l(`(max-width: ${s(i)})`)},isInBetween(i,c){return l(`(min-width: ${s(i)}) and (max-width: ${s(c,-.1)})`)},current(){const i=Object.keys(t).map(c=>[c,r(c)]);return $(()=>i.filter(([,c])=>c.value).map(([c])=>c))}})}function Bv(t={}){const{navigator:n=yv,read:s=!1,source:o,copiedDuring:l=1500,legacy:r=!1}=t,a=["copy","cut"],i=Qo(()=>n&&"clipboard"in n),c=$(()=>i.value||r),u=Y(""),p=Y(!1),f=sv(()=>p.value=!1,l);function h(){i.value?n.clipboard.readText().then(w=>{u.value=w}):u.value=b()}if(c.value&&s)for(const w of a)xe(w,h);async function y(w=Ye(o)){c.value&&w!=null&&(i.value?await n.clipboard.writeText(w):m(w),u.value=w,p.value=!0,f.start())}function m(w){const A=document.createElement("textarea");A.value=w??"",A.style.position="absolute",A.style.opacity="0",document.body.appendChild(A),A.select(),document.execCommand("copy"),A.remove()}function b(){var w,A,B;return(B=(A=(w=document==null?void 0:document.getSelection)==null?void 0:w.call(document))==null?void 0:A.toString())!=null?B:""}return{isSupported:c,text:u,copied:p,copy:y}}function Cv(t){return JSON.parse(JSON.stringify(t))}const fl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},hl="__vueuse_ssr_handlers__",kv=Fv();function Fv(){return hl in fl||(fl[hl]=fl[hl]||{}),fl[hl]}function Dv(t,n){return kv[t]||n}function Ev(t){return t==null?"any":t instanceof Set?"set":t instanceof Map?"map":t instanceof Date?"date":typeof t=="boolean"?"boolean":typeof t=="string"?"string":typeof t=="object"?"object":Number.isNaN(t)?"any":"number"}var Sv=Object.defineProperty,Xc=Object.getOwnPropertySymbols,Tv=Object.prototype.hasOwnProperty,$v=Object.prototype.propertyIsEnumerable,eu=(t,n,s)=>n in t?Sv(t,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[n]=s,tu=(t,n)=>{for(var s in n||(n={}))Tv.call(n,s)&&eu(t,s,n[s]);if(Xc)for(var s of Xc(n))$v.call(n,s)&&eu(t,s,n[s]);return t};const Ov={boolean:{read:t=>t==="true",write:t=>String(t)},object:{read:t=>JSON.parse(t),write:t=>JSON.stringify(t)},number:{read:t=>Number.parseFloat(t),write:t=>String(t)},any:{read:t=>t,write:t=>String(t)},string:{read:t=>t,write:t=>String(t)},map:{read:t=>new Map(JSON.parse(t)),write:t=>JSON.stringify(Array.from(t.entries()))},set:{read:t=>new Set(JSON.parse(t)),write:t=>JSON.stringify(Array.from(t))},date:{read:t=>new Date(t),write:t=>t.toISOString()}},nu="vueuse-storage";function Uv(t,n,s,o={}){var l;const{flush:r="pre",deep:a=!0,listenToStorageChanges:i=!0,writeDefaults:c=!0,mergeDefaults:u=!1,shallow:p,window:f=st,eventFilter:h,onError:y=O=>{console.error(O)}}=o,m=(p?un:Y)(n);if(!s)try{s=Dv("getDefaultStorage",()=>{var O;return(O=st)==null?void 0:O.localStorage})()}catch(O){y(O)}if(!s)return m;const b=Ye(n),w=Ev(b),A=(l=o.serializer)!=null?l:Ov[w],{pause:B,resume:x}=hv(m,()=>C(m.value),{flush:r,deep:a,eventFilter:h});return f&&i&&(xe(f,"storage",L),xe(f,nu,E)),L(),m;function C(O){try{if(O==null)s.removeItem(t);else{const W=A.write(O),ne=s.getItem(t);ne!==W&&(s.setItem(t,W),f&&f.dispatchEvent(new CustomEvent(nu,{detail:{key:t,oldValue:ne,newValue:W,storageArea:s}})))}}catch(W){y(W)}}function F(O){const W=O?O.newValue:s.getItem(t);if(W==null)return c&&b!==null&&s.setItem(t,A.write(b)),b;if(!O&&u){const ne=A.read(W);return typeof u=="function"?u(ne,b):w==="object"&&!Array.isArray(ne)?tu(tu({},b),ne):ne}else return typeof W!="string"?W:A.read(W)}function E(O){L(O.detail)}function L(O){if(!(O&&O.storageArea!==s)){if(O&&O.key==null){m.value=b;return}if(!(O&&O.key!==t)){B();try{m.value=F(O)}catch(W){y(W)}finally{O?it(x):x()}}}}}function Pv(t){return is("(prefers-color-scheme: dark)",t)}var Iv=Object.defineProperty,Mv=Object.defineProperties,Lv=Object.getOwnPropertyDescriptors,su=Object.getOwnPropertySymbols,Rv=Object.prototype.hasOwnProperty,Nv=Object.prototype.propertyIsEnumerable,ou=(t,n,s)=>n in t?Iv(t,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[n]=s,jv=(t,n)=>{for(var s in n||(n={}))Rv.call(n,s)&&ou(t,s,n[s]);if(su)for(var s of su(n))Nv.call(n,s)&&ou(t,s,n[s]);return t},Wv=(t,n)=>Mv(t,Lv(n));function tT(t,n={}){var s,o;const{pointerTypes:l,preventDefault:r,stopPropagation:a,exact:i,onMove:c,onEnd:u,onStart:p,initialValue:f,axis:h="both",draggingElement:y=st,handle:m=t}=n,b=Y((s=Ye(f))!=null?s:{x:0,y:0}),w=Y(),A=E=>l?l.includes(E.pointerType):!0,B=E=>{Ye(r)&&E.preventDefault(),Ye(a)&&E.stopPropagation()},x=E=>{if(!A(E)||Ye(i)&&E.target!==Ye(t))return;const L=Ye(t).getBoundingClientRect(),O={x:E.clientX-L.left,y:E.clientY-L.top};(p==null?void 0:p(O,E))!==!1&&(w.value=O,B(E))},C=E=>{if(!A(E)||!w.value)return;let{x:L,y:O}=b.value;(h==="x"||h==="both")&&(L=E.clientX-w.value.x),(h==="y"||h==="both")&&(O=E.clientY-w.value.y),b.value={x:L,y:O},c==null||c(b.value,E),B(E)},F=E=>{A(E)&&w.value&&(w.value=void 0,u==null||u(b.value,E),B(E))};if(Qt){const E={capture:(o=n.capture)!=null?o:!0};xe(m,"pointerdown",x,E),xe(y,"pointermove",C,E),xe(y,"pointerup",F,E)}return Wv(jv({},ev(b)),{position:b,isDragging:$(()=>!!w.value),style:$(()=>`left:${b.value.x}px;top:${b.value.y}px;`)})}var lu=Object.getOwnPropertySymbols,qv=Object.prototype.hasOwnProperty,Hv=Object.prototype.propertyIsEnumerable,Vv=(t,n)=>{var s={};for(var o in t)qv.call(t,o)&&n.indexOf(o)<0&&(s[o]=t[o]);if(t!=null&&lu)for(var o of lu(t))n.indexOf(o)<0&&Hv.call(t,o)&&(s[o]=t[o]);return s};function zv(t,n,s={}){const o=s,{window:l=st}=o,r=Vv(o,["window"]);let a;const i=Qo(()=>l&&"ResizeObserver"in l),c=()=>{a&&(a.disconnect(),a=void 0)},u=$(()=>Array.isArray(t)?t.map(h=>ct(h)):[ct(t)]),p=ge(u,h=>{if(c(),i.value&&l){a=new ResizeObserver(n);for(const y of h)y&&a.observe(y,r)}},{immediate:!0,flush:"post",deep:!0}),f=()=>{c(),p()};return fn(f),{isSupported:i,stop:f}}function Kv(t,n={width:0,height:0},s={}){const{window:o=st,box:l="content-box"}=s,r=$(()=>{var c,u;return(u=(c=ct(t))==null?void 0:c.namespaceURI)==null?void 0:u.includes("svg")}),a=Y(n.width),i=Y(n.height);return zv(t,([c])=>{const u=l==="border-box"?c.borderBoxSize:l==="content-box"?c.contentBoxSize:c.devicePixelContentBoxSize;if(o&&r.value){const p=ct(t);if(p){const f=o.getComputedStyle(p);a.value=Number.parseFloat(f.width),i.value=Number.parseFloat(f.height)}}else if(u){const p=Array.isArray(u)?u:[u];a.value=p.reduce((f,{inlineSize:h})=>f+h,0),i.value=p.reduce((f,{blockSize:h})=>f+h,0)}else a.value=c.contentRect.width,i.value=c.contentRect.height},s),ge(()=>ct(t),c=>{a.value=c?n.width:0,i.value=c?n.height:0}),{width:a,height:i}}function Gv(t,n,s={}){const{root:o,rootMargin:l="0px",threshold:r=.1,window:a=st,immediate:i=!0}=s,c=Qo(()=>a&&"IntersectionObserver"in a),u=$(()=>{const m=Ye(t);return(Array.isArray(m)?m:[m]).map(ct).filter(Ng)});let p=bs;const f=Y(i),h=c.value?ge(()=>[u.value,ct(o),f.value],([m,b])=>{if(p(),!f.value||!m.length)return;const w=new IntersectionObserver(n,{root:ct(b),rootMargin:l,threshold:r});m.forEach(A=>A&&w.observe(A)),p=()=>{w.disconnect(),p=bs}},{immediate:i,flush:"post"}):bs,y=()=>{p(),h(),f.value=!1};return fn(y),{isSupported:c,isActive:f,pause(){p(),f.value=!1},resume(){f.value=!0},stop:y}}const ru=["fullscreenchange","webkitfullscreenchange","webkitendfullscreen","mozfullscreenchange","MSFullscreenChange"];function Yv(t,n={}){const{document:s=cf,autoExit:o=!1}=n,l=$(()=>{var A;return(A=ct(t))!=null?A:s==null?void 0:s.querySelector("html")}),r=Y(!1),a=$(()=>["requestFullscreen","webkitRequestFullscreen","webkitEnterFullscreen","webkitEnterFullScreen","webkitRequestFullScreen","mozRequestFullScreen","msRequestFullscreen"].find(A=>s&&A in s||l.value&&A in l.value)),i=$(()=>["exitFullscreen","webkitExitFullscreen","webkitExitFullScreen","webkitCancelFullScreen","mozCancelFullScreen","msExitFullscreen"].find(A=>s&&A in s||l.value&&A in l.value)),c=$(()=>["fullScreen","webkitIsFullScreen","webkitDisplayingFullscreen","mozFullScreen","msFullscreenElement"].find(A=>s&&A in s||l.value&&A in l.value)),u=["fullscreenElement","webkitFullscreenElement","mozFullScreenElement","msFullscreenElement"].find(A=>s&&A in s),p=Qo(()=>l.value&&s&&a.value!==void 0&&i.value!==void 0&&c.value!==void 0),f=()=>u?(s==null?void 0:s[u])===l.value:!1,h=()=>{if(c.value){if(s&&s[c.value]!=null)return s[c.value];{const A=l.value;if((A==null?void 0:A[c.value])!=null)return!!A[c.value]}}return!1};async function y(){if(p.value){if(i.value)if((s==null?void 0:s[i.value])!=null)await s[i.value]();else{const A=l.value;(A==null?void 0:A[i.value])!=null&&await A[i.value]()}r.value=!1}}async function m(){if(!p.value)return;h()&&await y();const A=l.value;a.value&&(A==null?void 0:A[a.value])!=null&&(await A[a.value](),r.value=!0)}async function b(){await(r.value?y():m())}const w=()=>{const A=h();(!A||A&&f())&&(r.value=A)};return xe(s,ru,w,!1),xe(()=>ct(l),ru,w,!1),o&&fn(y),{isSupported:p,isFullscreen:r,enter:m,exit:y,toggle:b}}function Jt(t,n,s={}){const{window:o=st}=s;return Uv(t,n,o==null?void 0:o.localStorage,s)}const Zv={ctrl:"control",command:"meta",cmd:"meta",option:"alt",up:"arrowup",down:"arrowdown",left:"arrowleft",right:"arrowright"};function Qv(t={}){const{reactive:n=!1,target:s=st,aliasMap:o=Zv,passive:l=!0,onEventFired:r=bs}=t,a=He(new Set),i={toJSON(){return{}},current:a},c=n?He(i):i,u=new Set,p=new Set;function f(b,w){b in c&&(n?c[b]=w:c[b].value=w)}function h(){a.clear();for(const b of p)f(b,!1)}function y(b,w){var A,B;const x=(A=b.key)==null?void 0:A.toLowerCase(),F=[(B=b.code)==null?void 0:B.toLowerCase(),x].filter(Boolean);x&&(w?a.add(x):a.delete(x));for(const E of F)p.add(E),f(E,w);x==="meta"&&!w?(u.forEach(E=>{a.delete(E),f(E,!1)}),u.clear()):typeof b.getModifierState=="function"&&b.getModifierState("Meta")&&w&&[...a,...F].forEach(E=>u.add(E))}xe(s,"keydown",b=>(y(b,!0),r(b)),{passive:l}),xe(s,"keyup",b=>(y(b,!1),r(b)),{passive:l}),xe("blur",h,{passive:!0}),xe("focus",h,{passive:!0});const m=new Proxy(c,{get(b,w,A){if(typeof w!="string")return Reflect.get(b,w,A);if(w=w.toLowerCase(),w in o&&(w=o[w]),!(w in c))if(/[+_-]/.test(w)){const x=w.split(/[+_-]/g).map(C=>C.trim());c[w]=$(()=>x.every(C=>Ye(m[C])))}else c[w]=Y(!1);const B=Reflect.get(b,w,A);return n?Ye(B):B}});return m}const Jv={page:t=>[t.pageX,t.pageY],client:t=>[t.clientX,t.clientY],screen:t=>[t.screenX,t.screenY],movement:t=>t instanceof Touch?null:[t.movementX,t.movementY]};function nT(t={}){const{type:n="page",touch:s=!0,resetOnTouchEnds:o=!1,initialValue:l={x:0,y:0},window:r=st,target:a=r,eventFilter:i}=t,c=Y(l.x),u=Y(l.y),p=Y(null),f=typeof n=="function"?n:Jv[n],h=A=>{const B=f(A);B&&([c.value,u.value]=B,p.value="mouse")},y=A=>{if(A.touches.length>0){const B=f(A.touches[0]);B&&([c.value,u.value]=B,p.value="touch")}},m=()=>{c.value=l.x,u.value=l.y},b=i?A=>i(()=>h(A),{}):A=>h(A),w=i?A=>i(()=>y(A),{}):A=>y(A);return a&&(xe(a,"mousemove",b,{passive:!0}),xe(a,"dragover",b,{passive:!0}),s&&n!=="movement"&&(xe(a,"touchstart",w,{passive:!0}),xe(a,"touchmove",w,{passive:!0}),o&&xe(a,"touchend",m,{passive:!0}))),{x:c,y:u,sourceType:p}}function Xv(t,n={}){const s=sf(t),{threshold:o=50,onSwipe:l,onSwipeEnd:r,onSwipeStart:a}=n,i=He({x:0,y:0}),c=(E,L)=>{i.x=E,i.y=L},u=He({x:0,y:0}),p=(E,L)=>{u.x=E,u.y=L},f=$(()=>i.x-u.x),h=$(()=>i.y-u.y),{max:y,abs:m}=Math,b=$(()=>y(m(f.value),m(h.value))>=o),w=Y(!1),A=Y(!1),B=$(()=>b.value?m(f.value)>m(h.value)?f.value>0?"left":"right":h.value>0?"up":"down":"none"),x=E=>{var L,O,W;const ne=E.buttons===0,ue=E.buttons===1;return(W=(O=(L=n.pointerTypes)==null?void 0:L.includes(E.pointerType))!=null?O:ne||ue)!=null?W:!0},C=[xe(t,"pointerdown",E=>{var L,O;if(!x(E))return;A.value=!0,(O=(L=s.value)==null?void 0:L.style)==null||O.setProperty("touch-action","none");const W=E.target;W==null||W.setPointerCapture(E.pointerId);const{clientX:ne,clientY:ue}=E;c(ne,ue),p(ne,ue),a==null||a(E)}),xe(t,"pointermove",E=>{if(!x(E)||!A.value)return;const{clientX:L,clientY:O}=E;p(L,O),!w.value&&b.value&&(w.value=!0),w.value&&(l==null||l(E))}),xe(t,"pointerup",E=>{var L,O;x(E)&&(w.value&&(r==null||r(E,B.value)),A.value=!1,w.value=!1,(O=(L=s.value)==null?void 0:L.style)==null||O.setProperty("touch-action","initial"))})],F=()=>C.forEach(E=>E());return{isSwiping:Yt(w),direction:Yt(B),posStart:Yt(i),posEnd:Yt(u),distanceX:f,distanceY:h,stop:F}}let e_=0;function sT(t,n={}){const s=Y(!1),{document:o=cf,immediate:l=!0,manual:r=!1,id:a=`vueuse_styletag_${++e_}`}=n,i=Y(t);let c=()=>{};const u=()=>{if(!o)return;const f=o.getElementById(a)||o.createElement("style");f.isConnected||(f.type="text/css",f.id=a,n.media&&(f.media=n.media),o.head.appendChild(f)),!s.value&&(c=ge(i,h=>{f.textContent=h},{immediate:!0}),s.value=!0)},p=()=>{!o||!s.value||(c(),o.head.removeChild(o.getElementById(a)),s.value=!1)};return l&&!r&&of(u),r||fn(p),{id:a,css:i,unload:p,load:u,isLoaded:Yt(s)}}var t_=Object.defineProperty,au=Object.getOwnPropertySymbols,n_=Object.prototype.hasOwnProperty,s_=Object.prototype.propertyIsEnumerable,iu=(t,n,s)=>n in t?t_(t,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[n]=s,o_=(t,n)=>{for(var s in n||(n={}))n_.call(n,s)&&iu(t,s,n[s]);if(au)for(var s of au(n))s_.call(n,s)&&iu(t,s,n[s]);return t};function oT(t={}){const{controls:n=!1,offset:s=0,immediate:o=!0,interval:l="requestAnimationFrame",callback:r}=t,a=Y(Ba()+s),i=()=>a.value=Ba()+s,c=r?()=>{i(),r(a.value)}:i,u=l==="requestAnimationFrame"?xv(c,{immediate:o}):nv(c,l,{immediate:o});return n?o_({timestamp:a},u):a}function on(t,n,s,o={}){var l,r,a;const{clone:i=!1,passive:c=!1,eventName:u,deep:p=!1,defaultValue:f,shouldEmit:h}=o,y=$t(),m=s||(y==null?void 0:y.emit)||((l=y==null?void 0:y.$emit)==null?void 0:l.bind(y))||((a=(r=y==null?void 0:y.proxy)==null?void 0:r.$emit)==null?void 0:a.bind(y==null?void 0:y.proxy));let b=u;n||(n="modelValue"),b=b||`update:${n.toString()}`;const w=x=>i?typeof i=="function"?i(x):Cv(x):x,A=()=>Rg(t[n])?w(t[n]):f,B=x=>{h?h(x)&&m(b,x):m(b,x)};if(c){const x=A(),C=Y(x);return ge(()=>t[n],F=>C.value=w(F)),ge(C,F=>{(F!==t[n]||p)&&B(F)},{deep:p}),C}else return $({get(){return A()},set(x){B(x)}})}function lT({window:t=st}={}){if(!t)return Y(!1);const n=Y(t.document.hasFocus());return xe(t,"blur",()=>{n.value=!1}),xe(t,"focus",()=>{n.value=!0}),n}function l_(t={}){const{window:n=st,initialWidth:s=1/0,initialHeight:o=1/0,listenOrientation:l=!0,includeScrollbar:r=!0}=t,a=Y(s),i=Y(o),c=()=>{n&&(r?(a.value=n.innerWidth,i.value=n.innerHeight):(a.value=n.document.documentElement.clientWidth,i.value=n.document.documentElement.clientHeight))};if(c(),of(c),xe("resize",c,{passive:!0}),l){const u=is("(orientation: portrait)");ge(u,()=>c())}return{width:a,height:i}}function r_(){return uf().__VUE_DEVTOOLS_GLOBAL_HOOK__}function uf(){return typeof navigator<"u"&&typeof window<"u"?window:typeof global<"u"?global:{}}const a_=typeof Proxy=="function",i_="devtools-plugin:setup",c_="plugin:settings:set";let $s,Ca;function u_(){var t;return $s!==void 0||(typeof window<"u"&&window.performance?($s=!0,Ca=window.performance):typeof global<"u"&&(!((t=global.perf_hooks)===null||t===void 0)&&t.performance)?($s=!0,Ca=global.perf_hooks.performance):$s=!1),$s}function p_(){return u_()?Ca.now():Date.now()}class d_{constructor(n,s){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=n,this.hook=s;const o={};if(n.settings)for(const a in n.settings){const i=n.settings[a];o[a]=i.defaultValue}const l=`__vue-devtools-plugin-settings__${n.id}`;let r=Object.assign({},o);try{const a=localStorage.getItem(l),i=JSON.parse(a);Object.assign(r,i)}catch{}this.fallbacks={getSettings(){return r},setSettings(a){try{localStorage.setItem(l,JSON.stringify(a))}catch{}r=a},now(){return p_()}},s&&s.on(c_,(a,i)=>{a===this.plugin.id&&this.fallbacks.setSettings(i)}),this.proxiedOn=new Proxy({},{get:(a,i)=>this.target?this.target.on[i]:(...c)=>{this.onQueue.push({method:i,args:c})}}),this.proxiedTarget=new Proxy({},{get:(a,i)=>this.target?this.target[i]:i==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(i)?(...c)=>(this.targetQueue.push({method:i,args:c,resolve:()=>{}}),this.fallbacks[i](...c)):(...c)=>new Promise(u=>{this.targetQueue.push({method:i,args:c,resolve:u})})})}async setRealTarget(n){this.target=n;for(const s of this.onQueue)this.target.on[s.method](...s.args);for(const s of this.targetQueue)s.resolve(await this.target[s.method](...s.args))}}function f_(t,n){const s=t,o=uf(),l=r_(),r=a_&&s.enableEarlyProxy;if(l&&(o.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!r))l.emit(i_,t,n);else{const a=r?new d_(s,l):null;(o.__VUE_DEVTOOLS_PLUGINS__=o.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:s,setupFn:n,proxy:a}),a&&n(a.proxiedTarget)}}/*!
  * vue-router v4.2.2
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const _n=typeof window<"u";function h_(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const Oe=Object.assign;function Ir(t,n){const s={};for(const o in n){const l=n[o];s[o]=Tt(l)?l.map(t):t(l)}return s}const xo=()=>{},Tt=Array.isArray;function Fe(t){const n=Array.from(arguments).slice(1);console.warn.apply(console,["[Vue Router warn]: "+t].concat(n))}const y_=/\/$/,m_=t=>t.replace(y_,"");function Mr(t,n,s="/"){let o,l={},r="",a="";const i=n.indexOf("#");let c=n.indexOf("?");return i<c&&i>=0&&(c=-1),c>-1&&(o=n.slice(0,c),r=n.slice(c+1,i>-1?i:n.length),l=t(r)),i>-1&&(o=o||n.slice(0,i),a=n.slice(i,n.length)),o=__(o??n,s),{fullPath:o+(r&&"?")+r+a,path:o,query:l,hash:a}}function g_(t,n){const s=n.query?t(n.query):"";return n.path+(s&&"?")+s+(n.hash||"")}function cu(t,n){return!n||!t.toLowerCase().startsWith(n.toLowerCase())?t:t.slice(n.length)||"/"}function uu(t,n,s){const o=n.matched.length-1,l=s.matched.length-1;return o>-1&&o===l&&zn(n.matched[o],s.matched[l])&&pf(n.params,s.params)&&t(n.query)===t(s.query)&&n.hash===s.hash}function zn(t,n){return(t.aliasOf||t)===(n.aliasOf||n)}function pf(t,n){if(Object.keys(t).length!==Object.keys(n).length)return!1;for(const s in t)if(!v_(t[s],n[s]))return!1;return!0}function v_(t,n){return Tt(t)?pu(t,n):Tt(n)?pu(n,t):t===n}function pu(t,n){return Tt(n)?t.length===n.length&&t.every((s,o)=>s===n[o]):t.length===1&&t[0]===n}function __(t,n){if(t.startsWith("/"))return t;if(!n.startsWith("/"))return Fe(`Cannot resolve a relative location without an absolute path. Trying to resolve "${t}" from "${n}". It should look like "/${n}".`),t;if(!t)return n;const s=n.split("/"),o=t.split("/"),l=o[o.length-1];(l===".."||l===".")&&o.push("");let r=s.length-1,a,i;for(a=0;a<o.length;a++)if(i=o[a],i!==".")if(i==="..")r>1&&r--;else break;return s.slice(0,r).join("/")+"/"+o.slice(a-(a===o.length?1:0)).join("/")}var Io;(function(t){t.pop="pop",t.push="push"})(Io||(Io={}));var Ao;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Ao||(Ao={}));function b_(t){if(!t)if(_n){const n=document.querySelector("base");t=n&&n.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),m_(t)}const x_=/^[^#]+#/;function A_(t,n){return t.replace(x_,"#")+n}function w_(t,n){const s=document.documentElement.getBoundingClientRect(),o=t.getBoundingClientRect();return{behavior:n.behavior,left:o.left-s.left-(n.left||0),top:o.top-s.top-(n.top||0)}}const gr=()=>({left:window.pageXOffset,top:window.pageYOffset});function B_(t){let n;if("el"in t){const s=t.el,o=typeof s=="string"&&s.startsWith("#");if(typeof t.el=="string"&&(!o||!document.getElementById(t.el.slice(1))))try{const r=document.querySelector(t.el);if(o&&r){Fe(`The selector "${t.el}" should be passed as "el: document.querySelector('${t.el}')" because it starts with "#".`);return}}catch{Fe(`The selector "${t.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`);return}const l=typeof s=="string"?o?document.getElementById(s.slice(1)):document.querySelector(s):s;if(!l){Fe(`Couldn't find element using selector "${t.el}" returned by scrollBehavior.`);return}n=w_(l,t)}else n=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(n):window.scrollTo(n.left!=null?n.left:window.pageXOffset,n.top!=null?n.top:window.pageYOffset)}function du(t,n){return(history.state?history.state.position-n:-1)+t}const ka=new Map;function C_(t,n){ka.set(t,n)}function k_(t){const n=ka.get(t);return ka.delete(t),n}let F_=()=>location.protocol+"//"+location.host;function df(t,n){const{pathname:s,search:o,hash:l}=n,r=t.indexOf("#");if(r>-1){let i=l.includes(t.slice(r))?t.slice(r).length:1,c=l.slice(i);return c[0]!=="/"&&(c="/"+c),cu(c,"")}return cu(s,t)+o+l}function D_(t,n,s,o){let l=[],r=[],a=null;const i=({state:h})=>{const y=df(t,location),m=s.value,b=n.value;let w=0;if(h){if(s.value=y,n.value=h,a&&a===m){a=null;return}w=b?h.position-b.position:0}else o(y);l.forEach(A=>{A(s.value,m,{delta:w,type:Io.pop,direction:w?w>0?Ao.forward:Ao.back:Ao.unknown})})};function c(){a=s.value}function u(h){l.push(h);const y=()=>{const m=l.indexOf(h);m>-1&&l.splice(m,1)};return r.push(y),y}function p(){const{history:h}=window;h.state&&h.replaceState(Oe({},h.state,{scroll:gr()}),"")}function f(){for(const h of r)h();r=[],window.removeEventListener("popstate",i),window.removeEventListener("beforeunload",p)}return window.addEventListener("popstate",i),window.addEventListener("beforeunload",p,{passive:!0}),{pauseListeners:c,listen:u,destroy:f}}function fu(t,n,s,o=!1,l=!1){return{back:t,current:n,forward:s,replaced:o,position:window.history.length,scroll:l?gr():null}}function E_(t){const{history:n,location:s}=window,o={value:df(t,s)},l={value:n.state};l.value||r(o.value,{back:null,current:o.value,forward:null,position:n.length-1,replaced:!0,scroll:null},!0);function r(c,u,p){const f=t.indexOf("#"),h=f>-1?(s.host&&document.querySelector("base")?t:t.slice(f))+c:F_()+t+c;try{n[p?"replaceState":"pushState"](u,"",h),l.value=u}catch(y){Fe("Error with push/replace State",y),s[p?"replace":"assign"](h)}}function a(c,u){const p=Oe({},n.state,fu(l.value.back,c,l.value.forward,!0),u,{position:l.value.position});r(c,p,!0),o.value=c}function i(c,u){const p=Oe({},l.value,n.state,{forward:c,scroll:gr()});n.state||Fe(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://next.router.vuejs.org/guide/migration/#usage-of-history-state.`),r(p.current,p,!0);const f=Oe({},fu(o.value,c,null),{position:p.position+1},u);r(c,f,!1),o.value=c}return{location:o,state:l,push:i,replace:a}}function S_(t){t=b_(t);const n=E_(t),s=D_(t,n.state,n.location,n.replace);function o(r,a=!0){a||s.pauseListeners(),history.go(r)}const l=Oe({location:"",base:t,go:o,createHref:A_.bind(null,t)},n,s);return Object.defineProperty(l,"location",{enumerable:!0,get:()=>n.location.value}),Object.defineProperty(l,"state",{enumerable:!0,get:()=>n.state.value}),l}function T_(t){return typeof t=="string"||t&&typeof t=="object"}function ff(t){return typeof t=="string"||typeof t=="symbol"}const En={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},hf=Symbol("navigation failure");var hu;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(hu||(hu={}));const $_={[1]({location:t,currentLocation:n}){return`No match for
 ${JSON.stringify(t)}${n?`
while being at
`+JSON.stringify(n):""}`},[2]({from:t,to:n}){return`Redirected from "${t.fullPath}" to "${U_(n)}" via a navigation guard.`},[4]({from:t,to:n}){return`Navigation aborted from "${t.fullPath}" to "${n.fullPath}" via a navigation guard.`},[8]({from:t,to:n}){return`Navigation cancelled from "${t.fullPath}" to "${n.fullPath}" with a new navigation.`},[16]({from:t,to:n}){return`Avoided redundant navigation to current location: "${t.fullPath}".`}};function Hs(t,n){return Oe(new Error($_[t](n)),{type:t,[hf]:!0},n)}function hn(t,n){return t instanceof Error&&hf in t&&(n==null||!!(t.type&n))}const O_=["params","query","hash"];function U_(t){if(typeof t=="string")return t;if("path"in t)return t.path;const n={};for(const s of O_)s in t&&(n[s]=t[s]);return JSON.stringify(n,null,2)}const yu="[^/]+?",P_={sensitive:!1,strict:!1,start:!0,end:!0},I_=/[.+*?^${}()[\]/\\]/g;function M_(t,n){const s=Oe({},P_,n),o=[];let l=s.start?"^":"";const r=[];for(const u of t){const p=u.length?[]:[90];s.strict&&!u.length&&(l+="/");for(let f=0;f<u.length;f++){const h=u[f];let y=40+(s.sensitive?.25:0);if(h.type===0)f||(l+="/"),l+=h.value.replace(I_,"\\$&"),y+=40;else if(h.type===1){const{value:m,repeatable:b,optional:w,regexp:A}=h;r.push({name:m,repeatable:b,optional:w});const B=A||yu;if(B!==yu){y+=10;try{new RegExp(`(${B})`)}catch(C){throw new Error(`Invalid custom RegExp for param "${m}" (${B}): `+C.message)}}let x=b?`((?:${B})(?:/(?:${B}))*)`:`(${B})`;f||(x=w&&u.length<2?`(?:/${x})`:"/"+x),w&&(x+="?"),l+=x,y+=20,w&&(y+=-8),b&&(y+=-20),B===".*"&&(y+=-50)}p.push(y)}o.push(p)}if(s.strict&&s.end){const u=o.length-1;o[u][o[u].length-1]+=.7000000000000001}s.strict||(l+="/?"),s.end?l+="$":s.strict&&(l+="(?:/|$)");const a=new RegExp(l,s.sensitive?"":"i");function i(u){const p=u.match(a),f={};if(!p)return null;for(let h=1;h<p.length;h++){const y=p[h]||"",m=r[h-1];f[m.name]=y&&m.repeatable?y.split("/"):y}return f}function c(u){let p="",f=!1;for(const h of t){(!f||!p.endsWith("/"))&&(p+="/"),f=!1;for(const y of h)if(y.type===0)p+=y.value;else if(y.type===1){const{value:m,repeatable:b,optional:w}=y,A=m in u?u[m]:"";if(Tt(A)&&!b)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const B=Tt(A)?A.join("/"):A;if(!B)if(w)h.length<2&&(p.endsWith("/")?p=p.slice(0,-1):f=!0);else throw new Error(`Missing required param "${m}"`);p+=B}}return p||"/"}return{re:a,score:o,keys:r,parse:i,stringify:c}}function L_(t,n){let s=0;for(;s<t.length&&s<n.length;){const o=n[s]-t[s];if(o)return o;s++}return t.length<n.length?t.length===1&&t[0]===40+40?-1:1:t.length>n.length?n.length===1&&n[0]===40+40?1:-1:0}function R_(t,n){let s=0;const o=t.score,l=n.score;for(;s<o.length&&s<l.length;){const r=L_(o[s],l[s]);if(r)return r;s++}if(Math.abs(l.length-o.length)===1){if(mu(o))return 1;if(mu(l))return-1}return l.length-o.length}function mu(t){const n=t[t.length-1];return t.length>0&&n[n.length-1]<0}const N_={type:0,value:""},j_=/[a-zA-Z0-9_]/;function W_(t){if(!t)return[[]];if(t==="/")return[[N_]];if(!t.startsWith("/"))throw new Error(`Route paths should start with a "/": "${t}" should be "/${t}".`);function n(y){throw new Error(`ERR (${s})/"${u}": ${y}`)}let s=0,o=s;const l=[];let r;function a(){r&&l.push(r),r=[]}let i=0,c,u="",p="";function f(){u&&(s===0?r.push({type:0,value:u}):s===1||s===2||s===3?(r.length>1&&(c==="*"||c==="+")&&n(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:u,regexp:p,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):n("Invalid state to consume buffer"),u="")}function h(){u+=c}for(;i<t.length;){if(c=t[i++],c==="\\"&&s!==2){o=s,s=4;continue}switch(s){case 0:c==="/"?(u&&f(),a()):c===":"?(f(),s=1):h();break;case 4:h(),s=o;break;case 1:c==="("?s=2:j_.test(c)?h():(f(),s=0,c!=="*"&&c!=="?"&&c!=="+"&&i--);break;case 2:c===")"?p[p.length-1]=="\\"?p=p.slice(0,-1)+c:s=3:p+=c;break;case 3:f(),s=0,c!=="*"&&c!=="?"&&c!=="+"&&i--,p="";break;default:n("Unknown state");break}}return s===2&&n(`Unfinished custom RegExp for param "${u}"`),f(),a(),l}function q_(t,n,s){const o=M_(W_(t.path),s);{const r=new Set;for(const a of o.keys)r.has(a.name)&&Fe(`Found duplicated params with name "${a.name}" for path "${t.path}". Only the last one will be available on "$route.params".`),r.add(a.name)}const l=Oe(o,{record:t,parent:n,children:[],alias:[]});return n&&!l.record.aliasOf==!n.record.aliasOf&&n.children.push(l),l}function H_(t,n){const s=[],o=new Map;n=_u({strict:!1,end:!0,sensitive:!1},n);function l(p){return o.get(p)}function r(p,f,h){const y=!h,m=V_(p);Y_(m,f),m.aliasOf=h&&h.record;const b=_u(n,p),w=[m];if("alias"in p){const x=typeof p.alias=="string"?[p.alias]:p.alias;for(const C of x)w.push(Oe({},m,{components:h?h.record.components:m.components,path:C,aliasOf:h?h.record:m}))}let A,B;for(const x of w){const{path:C}=x;if(f&&C[0]!=="/"){const F=f.record.path,E=F[F.length-1]==="/"?"":"/";x.path=f.record.path+(C&&E+C)}if(x.path==="*")throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.`);if(A=q_(x,f,b),f&&C[0]==="/"&&Z_(A,f),h?(h.alias.push(A),G_(h,A)):(B=B||A,B!==A&&B.alias.push(A),y&&p.name&&!vu(A)&&a(p.name)),m.children){const F=m.children;for(let E=0;E<F.length;E++)r(F[E],A,h&&h.children[E])}h=h||A,(A.record.components&&Object.keys(A.record.components).length||A.record.name||A.record.redirect)&&c(A)}return B?()=>{a(B)}:xo}function a(p){if(ff(p)){const f=o.get(p);f&&(o.delete(p),s.splice(s.indexOf(f),1),f.children.forEach(a),f.alias.forEach(a))}else{const f=s.indexOf(p);f>-1&&(s.splice(f,1),p.record.name&&o.delete(p.record.name),p.children.forEach(a),p.alias.forEach(a))}}function i(){return s}function c(p){let f=0;for(;f<s.length&&R_(p,s[f])>=0&&(p.record.path!==s[f].record.path||!yf(p,s[f]));)f++;s.splice(f,0,p),p.record.name&&!vu(p)&&o.set(p.record.name,p)}function u(p,f){let h,y={},m,b;if("name"in p&&p.name){if(h=o.get(p.name),!h)throw Hs(1,{location:p});{const B=Object.keys(p.params||{}).filter(x=>!h.keys.find(C=>C.name===x));B.length&&Fe(`Discarded invalid param(s) "${B.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`)}b=h.record.name,y=Oe(gu(f.params,h.keys.filter(B=>!B.optional).map(B=>B.name)),p.params&&gu(p.params,h.keys.map(B=>B.name))),m=h.stringify(y)}else if("path"in p)m=p.path,m.startsWith("/")||Fe(`The Matcher cannot resolve relative paths but received "${m}". Unless you directly called \`matcher.resolve("${m}")\`, this is probably a bug in vue-router. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/router.`),h=s.find(B=>B.re.test(m)),h&&(y=h.parse(m),b=h.record.name);else{if(h=f.name?o.get(f.name):s.find(B=>B.re.test(f.path)),!h)throw Hs(1,{location:p,currentLocation:f});b=h.record.name,y=Oe({},f.params,p.params),m=h.stringify(y)}const w=[];let A=h;for(;A;)w.unshift(A.record),A=A.parent;return{name:b,path:m,params:y,matched:w,meta:K_(w)}}return t.forEach(p=>r(p)),{addRoute:r,resolve:u,removeRoute:a,getRoutes:i,getRecordMatcher:l}}function gu(t,n){const s={};for(const o of n)o in t&&(s[o]=t[o]);return s}function V_(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:z_(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function z_(t){const n={},s=t.props||!1;if("component"in t)n.default=s;else for(const o in t.components)n[o]=typeof s=="boolean"?s:s[o];return n}function vu(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function K_(t){return t.reduce((n,s)=>Oe(n,s.meta),{})}function _u(t,n){const s={};for(const o in t)s[o]=o in n?n[o]:t[o];return s}function Fa(t,n){return t.name===n.name&&t.optional===n.optional&&t.repeatable===n.repeatable}function G_(t,n){for(const s of t.keys)if(!s.optional&&!n.keys.find(Fa.bind(null,s)))return Fe(`Alias "${n.record.path}" and the original record: "${t.record.path}" must have the exact same param named "${s.name}"`);for(const s of n.keys)if(!s.optional&&!t.keys.find(Fa.bind(null,s)))return Fe(`Alias "${n.record.path}" and the original record: "${t.record.path}" must have the exact same param named "${s.name}"`)}function Y_(t,n){n&&n.record.name&&!t.name&&!t.path&&Fe(`The route named "${String(n.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`)}function Z_(t,n){for(const s of n.keys)if(!t.keys.find(Fa.bind(null,s)))return Fe(`Absolute path "${t.record.path}" must have the exact same param named "${s.name}" as its parent "${n.record.path}".`)}function yf(t,n){return n.children.some(s=>s===t||yf(t,s))}const mf=/#/g,Q_=/&/g,J_=/\//g,X_=/=/g,e8=/\?/g,gf=/\+/g,t8=/%5B/g,n8=/%5D/g,vf=/%5E/g,s8=/%60/g,_f=/%7B/g,o8=/%7C/g,bf=/%7D/g,l8=/%20/g;function Si(t){return encodeURI(""+t).replace(o8,"|").replace(t8,"[").replace(n8,"]")}function r8(t){return Si(t).replace(_f,"{").replace(bf,"}").replace(vf,"^")}function Da(t){return Si(t).replace(gf,"%2B").replace(l8,"+").replace(mf,"%23").replace(Q_,"%26").replace(s8,"`").replace(_f,"{").replace(bf,"}").replace(vf,"^")}function a8(t){return Da(t).replace(X_,"%3D")}function i8(t){return Si(t).replace(mf,"%23").replace(e8,"%3F")}function c8(t){return t==null?"":i8(t).replace(J_,"%2F")}function Mo(t){try{return decodeURIComponent(""+t)}catch{Fe(`Error decoding "${t}". Using original value`)}return""+t}function u8(t){const n={};if(t===""||t==="?")return n;const o=(t[0]==="?"?t.slice(1):t).split("&");for(let l=0;l<o.length;++l){const r=o[l].replace(gf," "),a=r.indexOf("="),i=Mo(a<0?r:r.slice(0,a)),c=a<0?null:Mo(r.slice(a+1));if(i in n){let u=n[i];Tt(u)||(u=n[i]=[u]),u.push(c)}else n[i]=c}return n}function bu(t){let n="";for(let s in t){const o=t[s];if(s=a8(s),o==null){o!==void 0&&(n+=(n.length?"&":"")+s);continue}(Tt(o)?o.map(r=>r&&Da(r)):[o&&Da(o)]).forEach(r=>{r!==void 0&&(n+=(n.length?"&":"")+s,r!=null&&(n+="="+r))})}return n}function p8(t){const n={};for(const s in t){const o=t[s];o!==void 0&&(n[s]=Tt(o)?o.map(l=>l==null?null:""+l):o==null?o:""+o)}return n}const d8=Symbol("router view location matched"),xu=Symbol("router view depth"),Ti=Symbol("router"),xf=Symbol("route location"),Ea=Symbol("router view location");function so(){let t=[];function n(o){return t.push(o),()=>{const l=t.indexOf(o);l>-1&&t.splice(l,1)}}function s(){t=[]}return{add:n,list:()=>t,reset:s}}function On(t,n,s,o,l){const r=o&&(o.enterCallbacks[l]=o.enterCallbacks[l]||[]);return()=>new Promise((a,i)=>{const c=f=>{f===!1?i(Hs(4,{from:s,to:n})):f instanceof Error?i(f):T_(f)?i(Hs(2,{from:n,to:f})):(r&&o.enterCallbacks[l]===r&&typeof f=="function"&&r.push(f),a())},u=t.call(o&&o.instances[l],n,s,f8(c,n,s));let p=Promise.resolve(u);if(t.length<3&&(p=p.then(c)),t.length>2){const f=`The "next" callback was never called inside of ${t.name?'"'+t.name+'"':""}:
${t.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;if(typeof u=="object"&&"then"in u)p=p.then(h=>c._called?h:(Fe(f),Promise.reject(new Error("Invalid navigation guard"))));else if(u!==void 0&&!c._called){Fe(f),i(new Error("Invalid navigation guard"));return}}p.catch(f=>i(f))})}function f8(t,n,s){let o=0;return function(){o++===1&&Fe(`The "next" callback was called more than once in one navigation guard when going from "${s.fullPath}" to "${n.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`),t._called=!0,o===1&&t.apply(null,arguments)}}function Lr(t,n,s,o){const l=[];for(const r of t){!r.components&&!r.children.length&&Fe(`Record with path "${r.path}" is either missing a "component(s)" or "children" property.`);for(const a in r.components){let i=r.components[a];{if(!i||typeof i!="object"&&typeof i!="function")throw Fe(`Component "${a}" in record with path "${r.path}" is not a valid component. Received "${String(i)}".`),new Error("Invalid route component");if("then"in i){Fe(`Component "${a}" in record with path "${r.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`);const c=i;i=()=>c}else i.__asyncLoader&&!i.__warnedDefineAsync&&(i.__warnedDefineAsync=!0,Fe(`Component "${a}" in record with path "${r.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`))}if(!(n!=="beforeRouteEnter"&&!r.instances[a]))if(h8(i)){const u=(i.__vccOpts||i)[n];u&&l.push(On(u,s,o,r,a))}else{let c=i();"catch"in c||(Fe(`Component "${a}" in record with path "${r.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`),c=Promise.resolve(c)),l.push(()=>c.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${r.path}"`));const p=h_(u)?u.default:u;r.components[a]=p;const h=(p.__vccOpts||p)[n];return h&&On(h,s,o,r,a)()}))}}}return l}function h8(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Au(t){const n=R(Ti),s=R(xf),o=$(()=>n.resolve(T(t.to))),l=$(()=>{const{matched:c}=o.value,{length:u}=c,p=c[u-1],f=s.matched;if(!p||!f.length)return-1;const h=f.findIndex(zn.bind(null,p));if(h>-1)return h;const y=wu(c[u-2]);return u>1&&wu(p)===y&&f[f.length-1].path!==y?f.findIndex(zn.bind(null,c[u-2])):h}),r=$(()=>l.value>-1&&v8(s.params,o.value.params)),a=$(()=>l.value>-1&&l.value===s.matched.length-1&&pf(s.params,o.value.params));function i(c={}){return g8(c)?n[T(t.replace)?"replace":"push"](T(t.to)).catch(xo):Promise.resolve()}if(_n){const c=$t();if(c){const u={route:o.value,isActive:r.value,isExactActive:a.value};c.__vrl_devtools=c.__vrl_devtools||[],c.__vrl_devtools.push(u),ks(()=>{u.route=o.value,u.isActive=r.value,u.isExactActive=a.value},{flush:"post"})}}return{route:o,href:$(()=>o.value.href),isActive:r,isExactActive:a,navigate:i}}const y8=Ce({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Au,setup(t,{slots:n}){const s=He(Au(t)),{options:o}=R(Ti),l=$(()=>({[Bu(t.activeClass,o.linkActiveClass,"router-link-active")]:s.isActive,[Bu(t.exactActiveClass,o.linkExactActiveClass,"router-link-exact-active")]:s.isExactActive}));return()=>{const r=n.default&&n.default(s);return t.custom?r:tt("a",{"aria-current":s.isExactActive?t.ariaCurrentValue:null,href:s.href,onClick:s.navigate,class:l.value},r)}}}),m8=y8;function g8(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const n=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(n))return}return t.preventDefault&&t.preventDefault(),!0}}function v8(t,n){for(const s in n){const o=n[s],l=t[s];if(typeof o=="string"){if(o!==l)return!1}else if(!Tt(l)||l.length!==o.length||o.some((r,a)=>r!==l[a]))return!1}return!0}function wu(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Bu=(t,n,s)=>t??n??s,_8=Ce({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:n,slots:s}){x8();const o=R(Ea),l=$(()=>t.route||o.value),r=R(xu,0),a=$(()=>{let u=T(r);const{matched:p}=l.value;let f;for(;(f=p[u])&&!f.components;)u++;return u}),i=$(()=>l.value.matched[a.value]);Dt(xu,$(()=>a.value+1)),Dt(d8,i),Dt(Ea,l);const c=Y();return ge(()=>[c.value,i.value,t.name],([u,p,f],[h,y,m])=>{p&&(p.instances[f]=u,y&&y!==p&&u&&u===h&&(p.leaveGuards.size||(p.leaveGuards=y.leaveGuards),p.updateGuards.size||(p.updateGuards=y.updateGuards))),u&&p&&(!y||!zn(p,y)||!h)&&(p.enterCallbacks[f]||[]).forEach(b=>b(u))},{flush:"post"}),()=>{const u=l.value,p=t.name,f=i.value,h=f&&f.components[p];if(!h)return Cu(s.default,{Component:h,route:u});const y=f.props[p],m=y?y===!0?u.params:typeof y=="function"?y(u):y:null,w=tt(h,Oe({},m,n,{onVnodeUnmounted:A=>{A.component.isUnmounted&&(f.instances[p]=null)},ref:c}));if(_n&&w.ref){const A={depth:a.value,name:f.name,path:f.path,meta:f.meta};(Tt(w.ref)?w.ref.map(x=>x.i):[w.ref.i]).forEach(x=>{x.__vrv_devtools=A})}return Cu(s.default,{Component:w,route:u})||w}}});function Cu(t,n){if(!t)return null;const s=t(n);return s.length===1?s[0]:s}const b8=_8;function x8(){const t=$t(),n=t.parent&&t.parent.type.name,s=t.parent&&t.parent.subTree&&t.parent.subTree.type;if(n&&(n==="KeepAlive"||n.includes("Transition"))&&typeof s=="object"&&s.name==="RouterView"){const o=n==="KeepAlive"?"keep-alive":"transition";Fe(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.
Use slot props instead:

<router-view v-slot="{ Component }">
  <${o}>
    <component :is="Component" />
  </${o}>
</router-view>`)}}function oo(t,n){const s=Oe({},t,{matched:t.matched.map(o=>S8(o,["instances","children","aliasOf"]))});return{_custom:{type:null,readOnly:!0,display:t.fullPath,tooltip:n,value:s}}}function yl(t){return{_custom:{display:t}}}let A8=0;function w8(t,n,s){if(n.__hasDevtools)return;n.__hasDevtools=!0;const o=A8++;f_({id:"org.vuejs.router"+(o?"."+o:""),label:"Vue Router",packageName:"vue-router",homepage:"https://router.vuejs.org",logo:"https://router.vuejs.org/logo.png",componentStateTypes:["Routing"],app:t},l=>{typeof l.now!="function"&&console.warn("[Vue Router]: You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."),l.on.inspectComponent((p,f)=>{p.instanceData&&p.instanceData.state.push({type:"Routing",key:"$route",editable:!1,value:oo(n.currentRoute.value,"Current Route")})}),l.on.visitComponentTree(({treeNode:p,componentInstance:f})=>{if(f.__vrv_devtools){const h=f.__vrv_devtools;p.tags.push({label:(h.name?`${h.name.toString()}: `:"")+h.path,textColor:0,tooltip:"This component is rendered by &lt;router-view&gt;",backgroundColor:Af})}Tt(f.__vrl_devtools)&&(f.__devtoolsApi=l,f.__vrl_devtools.forEach(h=>{let y=Cf,m="";h.isExactActive?(y=Bf,m="This is exactly active"):h.isActive&&(y=wf,m="This link is active"),p.tags.push({label:h.route.path,textColor:0,tooltip:m,backgroundColor:y})}))}),ge(n.currentRoute,()=>{c(),l.notifyComponentUpdate(),l.sendInspectorTree(i),l.sendInspectorState(i)});const r="router:navigations:"+o;l.addTimelineLayer({id:r,label:`Router${o?" "+o:""} Navigations`,color:4237508}),n.onError((p,f)=>{l.addTimelineEvent({layerId:r,event:{title:"Error during Navigation",subtitle:f.fullPath,logType:"error",time:l.now(),data:{error:p},groupId:f.meta.__navigationId}})});let a=0;n.beforeEach((p,f)=>{const h={guard:yl("beforeEach"),from:oo(f,"Current Location during this navigation"),to:oo(p,"Target location")};Object.defineProperty(p.meta,"__navigationId",{value:a++}),l.addTimelineEvent({layerId:r,event:{time:l.now(),title:"Start of navigation",subtitle:p.fullPath,data:h,groupId:p.meta.__navigationId}})}),n.afterEach((p,f,h)=>{const y={guard:yl("afterEach")};h?(y.failure={_custom:{type:Error,readOnly:!0,display:h?h.message:"",tooltip:"Navigation Failure",value:h}},y.status=yl("❌")):y.status=yl("✅"),y.from=oo(f,"Current Location during this navigation"),y.to=oo(p,"Target location"),l.addTimelineEvent({layerId:r,event:{title:"End of navigation",subtitle:p.fullPath,time:l.now(),data:y,logType:h?"warning":"default",groupId:p.meta.__navigationId}})});const i="router-inspector:"+o;l.addInspector({id:i,label:"Routes"+(o?" "+o:""),icon:"book",treeFilterPlaceholder:"Search routes"});function c(){if(!u)return;const p=u;let f=s.getRoutes().filter(h=>!h.parent);f.forEach(Df),p.filter&&(f=f.filter(h=>Sa(h,p.filter.toLowerCase()))),f.forEach(h=>Ff(h,n.currentRoute.value)),p.rootNodes=f.map(kf)}let u;l.on.getInspectorTree(p=>{u=p,p.app===t&&p.inspectorId===i&&c()}),l.on.getInspectorState(p=>{if(p.app===t&&p.inspectorId===i){const h=s.getRoutes().find(y=>y.record.__vd_id===p.nodeId);h&&(p.state={options:C8(h)})}}),l.sendInspectorTree(i),l.sendInspectorState(i)})}function B8(t){return t.optional?t.repeatable?"*":"?":t.repeatable?"+":""}function C8(t){const{record:n}=t,s=[{editable:!1,key:"path",value:n.path}];return n.name!=null&&s.push({editable:!1,key:"name",value:n.name}),s.push({editable:!1,key:"regexp",value:t.re}),t.keys.length&&s.push({editable:!1,key:"keys",value:{_custom:{type:null,readOnly:!0,display:t.keys.map(o=>`${o.name}${B8(o)}`).join(" "),tooltip:"Param keys",value:t.keys}}}),n.redirect!=null&&s.push({editable:!1,key:"redirect",value:n.redirect}),t.alias.length&&s.push({editable:!1,key:"aliases",value:t.alias.map(o=>o.record.path)}),Object.keys(t.record.meta).length&&s.push({editable:!1,key:"meta",value:t.record.meta}),s.push({key:"score",editable:!1,value:{_custom:{type:null,readOnly:!0,display:t.score.map(o=>o.join(", ")).join(" | "),tooltip:"Score used to sort routes",value:t.score}}}),s}const Af=15485081,wf=2450411,Bf=8702998,k8=2282478,Cf=16486972,F8=6710886;function kf(t){const n=[],{record:s}=t;s.name!=null&&n.push({label:String(s.name),textColor:0,backgroundColor:k8}),s.aliasOf&&n.push({label:"alias",textColor:0,backgroundColor:Cf}),t.__vd_match&&n.push({label:"matches",textColor:0,backgroundColor:Af}),t.__vd_exactActive&&n.push({label:"exact",textColor:0,backgroundColor:Bf}),t.__vd_active&&n.push({label:"active",textColor:0,backgroundColor:wf}),s.redirect&&n.push({label:typeof s.redirect=="string"?`redirect: ${s.redirect}`:"redirects",textColor:16777215,backgroundColor:F8});let o=s.__vd_id;return o==null&&(o=String(D8++),s.__vd_id=o),{id:o,label:s.path,tags:n,children:t.children.map(kf)}}let D8=0;const E8=/^\/(.*)\/([a-z]*)$/;function Ff(t,n){const s=n.matched.length&&zn(n.matched[n.matched.length-1],t.record);t.__vd_exactActive=t.__vd_active=s,s||(t.__vd_active=n.matched.some(o=>zn(o,t.record))),t.children.forEach(o=>Ff(o,n))}function Df(t){t.__vd_match=!1,t.children.forEach(Df)}function Sa(t,n){const s=String(t.re).match(E8);if(t.__vd_match=!1,!s||s.length<3)return!1;if(new RegExp(s[1].replace(/\$$/,""),s[2]).test(n))return t.children.forEach(a=>Sa(a,n)),t.record.path!=="/"||n==="/"?(t.__vd_match=t.re.test(n),!0):!1;const l=t.record.path.toLowerCase(),r=Mo(l);return!n.startsWith("/")&&(r.includes(n)||l.includes(n))||r.startsWith(n)||l.startsWith(n)||t.record.name&&String(t.record.name).includes(n)?!0:t.children.some(a=>Sa(a,n))}function S8(t,n){const s={};for(const o in t)n.includes(o)||(s[o]=t[o]);return s}function T8(t){const n=H_(t.routes,t),s=t.parseQuery||u8,o=t.stringifyQuery||bu,l=t.history;if(!l)throw new Error('Provide the "history" option when calling "createRouter()": https://next.router.vuejs.org/api/#history.');const r=so(),a=so(),i=so(),c=un(En);let u=En;_n&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const p=Ir.bind(null,S=>""+S),f=Ir.bind(null,c8),h=Ir.bind(null,Mo);function y(S,Q){let X,te;return ff(S)?(X=n.getRecordMatcher(S),te=Q):te=S,n.addRoute(te,X)}function m(S){const Q=n.getRecordMatcher(S);Q?n.removeRoute(Q):Fe(`Cannot remove non-existent route "${String(S)}"`)}function b(){return n.getRoutes().map(S=>S.record)}function w(S){return!!n.getRecordMatcher(S)}function A(S,Q){if(Q=Oe({},Q||c.value),typeof S=="string"){const _=Mr(s,S,Q.path),D=n.resolve({path:_.path},Q),M=l.createHref(_.fullPath);return M.startsWith("//")?Fe(`Location "${S}" resolved to "${M}". A resolved location cannot start with multiple slashes.`):D.matched.length||Fe(`No match found for location with path "${S}"`),Oe(_,D,{params:h(D.params),hash:Mo(_.hash),redirectedFrom:void 0,href:M})}let X;if("path"in S)"params"in S&&!("name"in S)&&Object.keys(S.params).length&&Fe(`Path "${S.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`),X=Oe({},S,{path:Mr(s,S.path,Q.path).path});else{const _=Oe({},S.params);for(const D in _)_[D]==null&&delete _[D];X=Oe({},S,{params:f(_)}),Q.params=f(Q.params)}const te=n.resolve(X,Q),Ae=S.hash||"";Ae&&!Ae.startsWith("#")&&Fe(`A \`hash\` should always start with the character "#". Replace "${Ae}" with "#${Ae}".`),te.params=p(h(te.params));const Ie=g_(o,Oe({},S,{hash:r8(Ae),path:te.path})),g=l.createHref(Ie);return g.startsWith("//")?Fe(`Location "${S}" resolved to "${g}". A resolved location cannot start with multiple slashes.`):te.matched.length||Fe(`No match found for location with path "${"path"in S?S.path:S}"`),Oe({fullPath:Ie,hash:Ae,query:o===bu?p8(S.query):S.query||{}},te,{redirectedFrom:void 0,href:g})}function B(S){return typeof S=="string"?Mr(s,S,c.value.path):Oe({},S)}function x(S,Q){if(u!==S)return Hs(8,{from:Q,to:S})}function C(S){return L(S)}function F(S){return C(Oe(B(S),{replace:!0}))}function E(S){const Q=S.matched[S.matched.length-1];if(Q&&Q.redirect){const{redirect:X}=Q;let te=typeof X=="function"?X(S):X;if(typeof te=="string"&&(te=te.includes("?")||te.includes("#")?te=B(te):{path:te},te.params={}),!("path"in te)&&!("name"in te))throw Fe(`Invalid redirect found:
${JSON.stringify(te,null,2)}
 when navigating to "${S.fullPath}". A redirect must contain a name or path. This will break in production.`),new Error("Invalid redirect");return Oe({query:S.query,hash:S.hash,params:"path"in te?{}:S.params},te)}}function L(S,Q){const X=u=A(S),te=c.value,Ae=S.state,Ie=S.force,g=S.replace===!0,_=E(X);if(_)return L(Oe(B(_),{state:typeof _=="object"?Oe({},Ae,_.state):Ae,force:Ie,replace:g}),Q||X);const D=X;D.redirectedFrom=Q;let M;return!Ie&&uu(o,te,X)&&(M=Hs(16,{to:D,from:te}),Ut(te,te,!0,!1)),(M?Promise.resolve(M):ne(D,te)).catch(P=>hn(P)?hn(P,2)?P:Ue(P):ie(P,D,te)).then(P=>{if(P){if(hn(P,2))return uu(o,A(P.to),D)&&Q&&(Q._count=Q._count?Q._count+1:1)>30?(Fe(`Detected a possibly infinite redirection in a navigation guard when going from "${te.fullPath}" to "${D.fullPath}". Aborting to avoid a Stack Overflow.
 Are you always returning a new location within a navigation guard? That would lead to this error. Only return when redirecting or aborting, that should fix this. This might break in production if not fixed.`),Promise.reject(new Error("Infinite redirect in navigation guard"))):L(Oe({replace:g},B(P.to),{state:typeof P.to=="object"?Oe({},Ae,P.to.state):Ae,force:Ie}),Q||D)}else P=Z(D,te,!0,g,Ae);return ue(D,te,P),P})}function O(S,Q){const X=x(S,Q);return X?Promise.reject(X):Promise.resolve()}function W(S){const Q=Xt.values().next().value;return Q&&typeof Q.runWithContext=="function"?Q.runWithContext(S):S()}function ne(S,Q){let X;const[te,Ae,Ie]=$8(S,Q);X=Lr(te.reverse(),"beforeRouteLeave",S,Q);for(const _ of te)_.leaveGuards.forEach(D=>{X.push(On(D,S,Q))});const g=O.bind(null,S,Q);return X.push(g),Pt(X).then(()=>{X=[];for(const _ of r.list())X.push(On(_,S,Q));return X.push(g),Pt(X)}).then(()=>{X=Lr(Ae,"beforeRouteUpdate",S,Q);for(const _ of Ae)_.updateGuards.forEach(D=>{X.push(On(D,S,Q))});return X.push(g),Pt(X)}).then(()=>{X=[];for(const _ of S.matched)if(_.beforeEnter&&!Q.matched.includes(_))if(Tt(_.beforeEnter))for(const D of _.beforeEnter)X.push(On(D,S,Q));else X.push(On(_.beforeEnter,S,Q));return X.push(g),Pt(X)}).then(()=>(S.matched.forEach(_=>_.enterCallbacks={}),X=Lr(Ie,"beforeRouteEnter",S,Q),X.push(g),Pt(X))).then(()=>{X=[];for(const _ of a.list())X.push(On(_,S,Q));return X.push(g),Pt(X)}).catch(_=>hn(_,8)?_:Promise.reject(_))}function ue(S,Q,X){for(const te of i.list())W(()=>te(S,Q,X))}function Z(S,Q,X,te,Ae){const Ie=x(S,Q);if(Ie)return Ie;const g=Q===En,_=_n?history.state:{};X&&(te||g?l.replace(S.fullPath,Oe({scroll:g&&_&&_.scroll},Ae)):l.push(S.fullPath,Ae)),c.value=S,Ut(S,Q,X,g),Ue()}let ye;function ve(){ye||(ye=l.listen((S,Q,X)=>{if(!Zn.listening)return;const te=A(S),Ae=E(te);if(Ae){L(Oe(Ae,{replace:!0}),te).catch(xo);return}u=te;const Ie=c.value;_n&&C_(du(Ie.fullPath,X.delta),gr()),ne(te,Ie).catch(g=>hn(g,12)?g:hn(g,2)?(L(g.to,te).then(_=>{hn(_,20)&&!X.delta&&X.type===Io.pop&&l.go(-1,!1)}).catch(xo),Promise.reject()):(X.delta&&l.go(-X.delta,!1),ie(g,te,Ie))).then(g=>{g=g||Z(te,Ie,!1),g&&(X.delta&&!hn(g,8)?l.go(-X.delta,!1):X.type===Io.pop&&hn(g,20)&&l.go(-1,!1)),ue(te,Ie,g)}).catch(xo)}))}let be=so(),Pe=so(),ee;function ie(S,Q,X){Ue(S);const te=Pe.list();return te.length?te.forEach(Ae=>Ae(S,Q,X)):(Fe("uncaught error during route navigation:"),console.error(S)),Promise.reject(S)}function we(){return ee&&c.value!==En?Promise.resolve():new Promise((S,Q)=>{be.add([S,Q])})}function Ue(S){return ee||(ee=!S,ve(),be.list().forEach(([Q,X])=>S?X(S):Q()),be.reset()),S}function Ut(S,Q,X,te){const{scrollBehavior:Ae}=t;if(!_n||!Ae)return Promise.resolve();const Ie=!X&&k_(du(S.fullPath,0))||(te||!X)&&history.state&&history.state.scroll||null;return it().then(()=>Ae(S,Q,Ie)).then(g=>g&&B_(g)).catch(g=>ie(g,S,Q))}const rt=S=>l.go(S);let _t;const Xt=new Set,Zn={currentRoute:c,listening:!0,addRoute:y,removeRoute:m,hasRoute:w,getRoutes:b,resolve:A,options:t,push:C,replace:F,go:rt,back:()=>rt(-1),forward:()=>rt(1),beforeEach:r.add,beforeResolve:a.add,afterEach:i.add,onError:Pe.add,isReady:we,install(S){const Q=this;S.component("RouterLink",m8),S.component("RouterView",b8),S.config.globalProperties.$router=Q,Object.defineProperty(S.config.globalProperties,"$route",{enumerable:!0,get:()=>T(c)}),_n&&!_t&&c.value===En&&(_t=!0,C(l.location).catch(Ae=>{Fe("Unexpected error when starting the router:",Ae)}));const X={};for(const Ae in En)X[Ae]=$(()=>c.value[Ae]);S.provide(Ti,Q),S.provide(xf,He(X)),S.provide(Ea,c);const te=S.unmount;Xt.add(S),S.unmount=function(){Xt.delete(S),Xt.size<1&&(u=En,ye&&ye(),ye=null,c.value=En,_t=!1,ee=!1),te()},_n&&w8(S,Q,n)}};function Pt(S){return S.reduce((Q,X)=>Q.then(()=>W(X)),Promise.resolve())}return Zn}function $8(t,n){const s=[],o=[],l=[],r=Math.max(n.matched.length,t.matched.length);for(let a=0;a<r;a++){const i=n.matched[a];i&&(t.matched.find(u=>zn(u,i))?o.push(i):s.push(i));const c=t.matched[a];c&&(n.matched.find(u=>zn(u,c))||l.push(c))}return[s,o,l]}const Rr=Y(!1),wo=Y(!1),Is=Y(!1),O8=Y(!0),Ta=wv({xs:460,...Av}),xs=l_(),Ef=Qv(),U8=$(()=>xs.height.value-xs.width.value/Ln>180),Sf=Yv(Qt?document.body:null),jn=_v(),P8=$(()=>{var t,n;return["INPUT","TEXTAREA"].includes(((t=jn.value)==null?void 0:t.tagName)||"")||((n=jn.value)==null?void 0:n.classList.contains("CodeMirror-code"))}),I8=$(()=>{var t;return["BUTTON","A"].includes(((t=jn.value)==null?void 0:t.tagName)||"")});Jt("slidev-camera","default");Jt("slidev-mic","default");const Cl=Jt("slidev-scale",0),yt=Jt("slidev-show-overview",!1),Nr=Jt("slidev-presenter-cursor",!0),ku=Jt("slidev-show-editor",!1);Jt("slidev-editor-width",Qt?window.innerWidth*.4:100);const Tf=lf(yt);function Fu(t,n,s,o=l=>l){return t*o(.5-n*(.5-s))}function M8(t){return[-t[0],-t[1]]}function Kt(t,n){return[t[0]+n[0],t[1]+n[1]]}function Lt(t,n){return[t[0]-n[0],t[1]-n[1]]}function zt(t,n){return[t[0]*n,t[1]*n]}function L8(t,n){return[t[0]/n,t[1]/n]}function lo(t){return[t[1],-t[0]]}function Du(t,n){return t[0]*n[0]+t[1]*n[1]}function R8(t,n){return t[0]===n[0]&&t[1]===n[1]}function N8(t){return Math.hypot(t[0],t[1])}function j8(t){return t[0]*t[0]+t[1]*t[1]}function Eu(t,n){return j8(Lt(t,n))}function $f(t){return L8(t,N8(t))}function W8(t,n){return Math.hypot(t[1]-n[1],t[0]-n[0])}function ro(t,n,s){let o=Math.sin(s),l=Math.cos(s),r=t[0]-n[0],a=t[1]-n[1],i=r*l-a*o,c=r*o+a*l;return[i+n[0],c+n[1]]}function $a(t,n,s){return Kt(t,zt(Lt(n,t),s))}function Su(t,n,s){return Kt(t,zt(n,s))}var{min:Os,PI:q8}=Math,Tu=.275,ao=q8+1e-4;function H8(t,n={}){let{size:s=16,smoothing:o=.5,thinning:l=.5,simulatePressure:r=!0,easing:a=ee=>ee,start:i={},end:c={},last:u=!1}=n,{cap:p=!0,easing:f=ee=>ee*(2-ee)}=i,{cap:h=!0,easing:y=ee=>--ee*ee*ee+1}=c;if(t.length===0||s<=0)return[];let m=t[t.length-1].runningLength,b=i.taper===!1?0:i.taper===!0?Math.max(s,m):i.taper,w=c.taper===!1?0:c.taper===!0?Math.max(s,m):c.taper,A=Math.pow(s*o,2),B=[],x=[],C=t.slice(0,10).reduce((ee,ie)=>{let we=ie.pressure;if(r){let Ue=Os(1,ie.distance/s),Ut=Os(1,1-Ue);we=Os(1,ee+(Ut-ee)*(Ue*Tu))}return(ee+we)/2},t[0].pressure),F=Fu(s,l,t[t.length-1].pressure,a),E,L=t[0].vector,O=t[0].point,W=O,ne=O,ue=W,Z=!1;for(let ee=0;ee<t.length;ee++){let{pressure:ie}=t[ee],{point:we,vector:Ue,distance:Ut,runningLength:rt}=t[ee];if(ee<t.length-1&&m-rt<3)continue;if(l){if(r){let te=Os(1,Ut/s),Ae=Os(1,1-te);ie=Os(1,C+(Ae-C)*(te*Tu))}F=Fu(s,l,ie,a)}else F=s/2;E===void 0&&(E=F);let _t=rt<b?f(rt/b):1,Xt=m-rt<w?y((m-rt)/w):1;F=Math.max(.01,F*Math.min(_t,Xt));let Zn=(ee<t.length-1?t[ee+1]:t[ee]).vector,Pt=ee<t.length-1?Du(Ue,Zn):1,S=Du(Ue,L)<0&&!Z,Q=Pt!==null&&Pt<0;if(S||Q){let te=zt(lo(L),F);for(let Ae=1/13,Ie=0;Ie<=1;Ie+=Ae)ne=ro(Lt(we,te),we,ao*Ie),B.push(ne),ue=ro(Kt(we,te),we,ao*-Ie),x.push(ue);O=ne,W=ue,Q&&(Z=!0);continue}if(Z=!1,ee===t.length-1){let te=zt(lo(Ue),F);B.push(Lt(we,te)),x.push(Kt(we,te));continue}let X=zt(lo($a(Zn,Ue,Pt)),F);ne=Lt(we,X),(ee<=1||Eu(O,ne)>A)&&(B.push(ne),O=ne),ue=Kt(we,X),(ee<=1||Eu(W,ue)>A)&&(x.push(ue),W=ue),C=ie,L=Ue}let ye=t[0].point.slice(0,2),ve=t.length>1?t[t.length-1].point.slice(0,2):Kt(t[0].point,[1,1]),be=[],Pe=[];if(t.length===1){if(!(b||w)||u){let ee=Su(ye,$f(lo(Lt(ye,ve))),-(E||F)),ie=[];for(let we=1/13,Ue=we;Ue<=1;Ue+=we)ie.push(ro(ee,ye,ao*2*Ue));return ie}}else{if(!(b||w&&t.length===1))if(p)for(let ie=1/13,we=ie;we<=1;we+=ie){let Ue=ro(x[0],ye,ao*we);be.push(Ue)}else{let ie=Lt(B[0],x[0]),we=zt(ie,.5),Ue=zt(ie,.51);be.push(Lt(ye,we),Lt(ye,Ue),Kt(ye,Ue),Kt(ye,we))}let ee=lo(M8(t[t.length-1].vector));if(w||b&&t.length===1)Pe.push(ve);else if(h){let ie=Su(ve,ee,F);for(let we=1/29,Ue=we;Ue<1;Ue+=we)Pe.push(ro(ie,ve,ao*3*Ue))}else Pe.push(Kt(ve,zt(ee,F)),Kt(ve,zt(ee,F*.99)),Lt(ve,zt(ee,F*.99)),Lt(ve,zt(ee,F)))}return B.concat(Pe,x.reverse(),be)}function V8(t,n={}){var s;let{streamline:o=.5,size:l=16,last:r=!1}=n;if(t.length===0)return[];let a=.15+(1-o)*.85,i=Array.isArray(t[0])?t:t.map(({x:y,y:m,pressure:b=.5})=>[y,m,b]);if(i.length===2){let y=i[1];i=i.slice(0,-1);for(let m=1;m<5;m++)i.push($a(i[0],y,m/4))}i.length===1&&(i=[...i,[...Kt(i[0],[1,1]),...i[0].slice(2)]]);let c=[{point:[i[0][0],i[0][1]],pressure:i[0][2]>=0?i[0][2]:.25,vector:[1,1],distance:0,runningLength:0}],u=!1,p=0,f=c[0],h=i.length-1;for(let y=1;y<i.length;y++){let m=r&&y===h?i[y].slice(0,2):$a(f.point,i[y],a);if(R8(f.point,m))continue;let b=W8(m,f.point);if(p+=b,y<h&&!u){if(p<l)continue;u=!0}f={point:m,pressure:i[y][2]>=0?i[y][2]:.5,vector:$f(Lt(f.point,m)),distance:b,runningLength:p},c.push(f)}return c[0].vector=((s=c[1])==null?void 0:s.vector)||[0,0],c}function z8(t,n={}){return H8(V8(t,n),n)}var K8=()=>({events:{},emit(t,...n){let s=this.events[t]||[];for(let o=0,l=s.length;o<l;o++)s[o](...n)},on(t,n){var s;return(s=this.events[t])!=null&&s.push(n)||(this.events[t]=[n]),()=>{var o;this.events[t]=(o=this.events[t])==null?void 0:o.filter(l=>n!==l)}}});function Gl(t,n){return t-n}function G8(t){return t<0?-1:1}function Yl(t){return[Math.abs(t),G8(t)]}function Of(){const t=()=>((1+Math.random())*65536|0).toString(16).substring(1);return`${t()+t()}-${t()}-${t()}-${t()}-${t()}${t()}${t()}`}var Y8=2,bn=Y8,zs=class{constructor(t){this.drauu=t,this.event=void 0,this.point=void 0,this.start=void 0,this.el=null}onSelected(t){}onUnselected(){}onStart(t){}onMove(t){return!1}onEnd(t){}get brush(){return this.drauu.brush}get shiftPressed(){return this.drauu.shiftPressed}get altPressed(){return this.drauu.altPressed}get svgElement(){return this.drauu.el}getMousePosition(t){var n;const s=this.drauu.el,o=this.drauu.options.coordinateScale??1;if(this.drauu.options.coordinateTransform===!1){const l=this.drauu.el.getBoundingClientRect();return{x:(t.pageX-l.left)*o,y:(t.pageY-l.top)*o,pressure:t.pressure}}else{const l=this.drauu.svgPoint;l.x=t.clientX,l.y=t.clientY;const r=l.matrixTransform((n=s.getScreenCTM())==null?void 0:n.inverse());return{x:r.x*o,y:r.y*o,pressure:t.pressure}}}createElement(t,n){const s=document.createElementNS("http://www.w3.org/2000/svg",t),o=n?{...this.brush,...n}:this.brush;return s.setAttribute("fill",o.fill??"transparent"),s.setAttribute("stroke",o.color),s.setAttribute("stroke-width",o.size.toString()),s.setAttribute("stroke-linecap","round"),o.dasharray&&s.setAttribute("stroke-dasharray",o.dasharray),s}attr(t,n){this.el.setAttribute(t,typeof n=="string"?n:n.toFixed(bn))}_setEvent(t){this.event=t,this.point=this.getMousePosition(t)}_eventDown(t){return this._setEvent(t),this.start=this.point,this.onStart(this.point)}_eventMove(t){return this._setEvent(t),this.onMove(this.point)}_eventUp(t){return this._setEvent(t),this.onEnd(this.point)}},Z8=class extends zs{constructor(){super(...arguments),this.points=[]}onStart(t){return this.el=document.createElementNS("http://www.w3.org/2000/svg","path"),this.points=[t],this.attr("fill",this.brush.color),this.attr("d",this.getSvgData(this.points)),this.el}onMove(t){return this.el||this.onStart(t),this.points[this.points.length-1]!==t&&this.points.push(t),this.attr("d",this.getSvgData(this.points)),!0}onEnd(){const t=this.el;return this.el=null,!!t}getSvgData(t){const n=z8(t,{size:this.brush.size*2,thinning:.9,simulatePressure:!1,start:{taper:5},end:{taper:5},...this.brush.stylusOptions});if(!n.length)return"";const s=n.reduce((o,[l,r],a,i)=>{const[c,u]=i[(a+1)%i.length];return o.push(l,r,(l+c)/2,(r+u)/2),o},["M",...n[0],"Q"]);return s.push("Z"),s.map(o=>typeof o=="number"?o.toFixed(2):o).join(" ")}},Q8=class extends zs{onStart(t){return this.el=this.createElement("ellipse"),this.attr("cx",t.x),this.attr("cy",t.y),this.el}onMove(t){if(!this.el||!this.start)return!1;let[n,s]=Yl(t.x-this.start.x),[o,l]=Yl(t.y-this.start.y);if(this.shiftPressed){const r=Math.min(n,o);n=r,o=r}if(this.altPressed)this.attr("cx",this.start.x),this.attr("cy",this.start.y),this.attr("rx",n),this.attr("ry",o);else{const[r,a]=[this.start.x,this.start.x+n*s].sort(Gl),[i,c]=[this.start.y,this.start.y+o*l].sort(Gl);this.attr("cx",(r+a)/2),this.attr("cy",(i+c)/2),this.attr("rx",(a-r)/2),this.attr("ry",(c-i)/2)}return!0}onEnd(){const t=this.el;return this.el=null,!(!t||!t.getTotalLength())}};function Uf(t,n){const s=document.createElementNS("http://www.w3.org/2000/svg","defs"),o=document.createElementNS("http://www.w3.org/2000/svg","marker"),l=document.createElementNS("http://www.w3.org/2000/svg","path");return l.setAttribute("fill",n),o.setAttribute("id",t),o.setAttribute("viewBox","0 -5 10 10"),o.setAttribute("refX","5"),o.setAttribute("refY","0"),o.setAttribute("markerWidth","4"),o.setAttribute("markerHeight","4"),o.setAttribute("orient","auto"),l.setAttribute("d","M0,-5L10,0L0,5"),o.appendChild(l),s.appendChild(o),s}var J8=class extends zs{onStart(t){if(this.el=this.createElement("line",{fill:"transparent"}),this.attr("x1",t.x),this.attr("y1",t.y),this.attr("x2",t.x),this.attr("y2",t.y),this.brush.arrowEnd){const n=Of(),s=document.createElementNS("http://www.w3.org/2000/svg","g");return s.append(Uf(n,this.brush.color)),s.append(this.el),this.attr("marker-end",`url(#${n})`),s}return this.el}onMove(t){if(!this.el)return!1;let{x:n,y:s}=t;if(this.shiftPressed){const o=t.x-this.start.x,l=t.y-this.start.y;if(l!==0){let r=o/l;r=Math.round(r),Math.abs(r)<=1?(n=this.start.x+l*r,s=this.start.y+l):(n=this.start.x+o,s=this.start.y)}}return this.altPressed?(this.attr("x1",this.start.x*2-n),this.attr("y1",this.start.y*2-s),this.attr("x2",n),this.attr("y2",s)):(this.attr("x1",this.start.x),this.attr("y1",this.start.y),this.attr("x2",n),this.attr("y2",s)),!0}onEnd(){const t=this.el;return this.el=null,!(!t||t.getTotalLength()<5)}},X8=class extends zs{onStart(t){return this.el=this.createElement("rect"),this.brush.cornerRadius&&(this.attr("rx",this.brush.cornerRadius),this.attr("ry",this.brush.cornerRadius)),this.attr("x",t.x),this.attr("y",t.y),this.el}onMove(t){if(!this.el||!this.start)return!1;let[n,s]=Yl(t.x-this.start.x),[o,l]=Yl(t.y-this.start.y);if(this.shiftPressed){const r=Math.min(n,o);n=r,o=r}if(this.altPressed)this.attr("x",this.start.x-n),this.attr("y",this.start.y-o),this.attr("width",n*2),this.attr("height",o*2);else{const[r,a]=[this.start.x,this.start.x+n*s].sort(Gl),[i,c]=[this.start.y,this.start.y+o*l].sort(Gl);this.attr("x",r),this.attr("y",i),this.attr("width",a-r),this.attr("height",c-i)}return!0}onEnd(){const t=this.el;return this.el=null,!(!t||!t.getTotalLength())}};function eb(t,n){const s=t.x-n.x,o=t.y-n.y;return s*s+o*o}function tb(t,n,s){let o=n.x,l=n.y,r=s.x-o,a=s.y-l;if(r!==0||a!==0){const i=((t.x-o)*r+(t.y-l)*a)/(r*r+a*a);i>1?(o=s.x,l=s.y):i>0&&(o+=r*i,l+=a*i)}return r=t.x-o,a=t.y-l,r*r+a*a}function nb(t,n){let s=t[0];const o=[s];let l;for(let r=1,a=t.length;r<a;r++)l=t[r],eb(l,s)>n&&(o.push(l),s=l);return s!==l&&l&&o.push(l),o}function Oa(t,n,s,o,l){let r=o,a=0;for(let i=n+1;i<s;i++){const c=tb(t[i],t[n],t[s]);c>r&&(a=i,r=c)}r>o&&(a-n>1&&Oa(t,n,a,o,l),l.push(t[a]),s-a>1&&Oa(t,a,s,o,l))}function sb(t,n){const s=t.length-1,o=[t[0]];return Oa(t,0,s,n,o),o.push(t[s]),o}function $u(t,n,s=!1){if(t.length<=2)return t;const o=n!==void 0?n*n:1;return t=s?t:nb(t,o),t=sb(t,o),t}var ob=class extends zs{constructor(){super(...arguments),this.points=[],this.count=0}onStart(t){if(this.el=this.createElement("path",{fill:"transparent"}),this.points=[t],this.brush.arrowEnd){this.arrowId=Of();const n=Uf(this.arrowId,this.brush.color);this.el.appendChild(n)}return this.el}onMove(t){return this.el||this.onStart(t),this.points[this.points.length-1]!==t&&(this.points.push(t),this.count+=1),this.count>5&&(this.points=$u(this.points,1,!0),this.count=0),this.attr("d",Uu(this.points)),!0}onEnd(){const t=this.el;return this.el=null,!(!t||(t.setAttribute("d",Uu($u(this.points,1,!0))),!t.getTotalLength()))}};function lb(t,n){const s=n.x-t.x,o=n.y-t.y;return{length:Math.sqrt(s**2+o**2),angle:Math.atan2(o,s)}}function Ou(t,n,s,o){const l=n||t,r=s||t,a=.2,i=lb(l,r),c=i.angle+(o?Math.PI:0),u=i.length*a,p=t.x+Math.cos(c)*u,f=t.y+Math.sin(c)*u;return{x:p,y:f}}function rb(t,n,s){const o=Ou(s[n-1],s[n-2],t),l=Ou(t,s[n-1],s[n+1],!0);return`C ${o.x.toFixed(bn)},${o.y.toFixed(bn)} ${l.x.toFixed(bn)},${l.y.toFixed(bn)} ${t.x.toFixed(bn)},${t.y.toFixed(bn)}`}function Uu(t){return t.reduce((n,s,o,l)=>o===0?`M ${s.x.toFixed(bn)},${s.y.toFixed(bn)}`:`${n} ${rb(s,o,l)}`,"")}var ab=class extends zs{constructor(){super(...arguments),this.pathSubFactor=20,this.pathFragments=[]}onSelected(t){const n=(s,o)=>{if(s&&s.length)for(let l=0;l<s.length;l++){const r=s[l];if(r.getTotalLength){const a=r.getTotalLength();for(let i=0;i<this.pathSubFactor;i++){const c=r.getPointAtLength(a*i/this.pathSubFactor),u=r.getPointAtLength(a*(i+1)/this.pathSubFactor);this.pathFragments.push({x1:c.x,x2:u.x,y1:c.y,y2:u.y,segment:i,element:o||r})}}else r.children&&n(r.children,r)}};t&&n(t.children)}onUnselected(){this.pathFragments=[]}onStart(t){this.svgPointPrevious=this.svgElement.createSVGPoint(),this.svgPointPrevious.x=t.x,this.svgPointPrevious.y=t.y}onMove(t){this.svgPointCurrent=this.svgElement.createSVGPoint(),this.svgPointCurrent.x=t.x,this.svgPointCurrent.y=t.y;const n=this.checkAndEraseElement();return this.svgPointPrevious=this.svgPointCurrent,n}onEnd(){return this.svgPointPrevious=void 0,this.svgPointCurrent=void 0,!0}checkAndEraseElement(){const t=[];if(this.pathFragments.length)for(let n=0;n<this.pathFragments.length;n++){const s=this.pathFragments[n],o={x1:this.svgPointPrevious.x,x2:this.svgPointCurrent.x,y1:this.svgPointPrevious.y,y2:this.svgPointCurrent.y};this.lineLineIntersect(s,o)&&(s.element.remove(),t.push(n))}return t.length&&(this.pathFragments=this.pathFragments.filter((n,s)=>!t.includes(s))),t.length>0}lineLineIntersect(t,n){const s=t.x1,o=t.x2,l=n.x1,r=n.x2,a=t.y1,i=t.y2,c=n.y1,u=n.y2,p=(s-o)*(c-u)-(a-i)*(l-r),f=(s*i-a*o)*(l-r)-(s-o)*(l*u-c*r),h=(s*i-a*o)*(c-u)-(a-i)*(l*u-c*r),y=(m,b,w)=>m>=b&&m<=w?!0:m>=w&&m<=b;if(p===0)return!1;{const m={x:f/p,y:h/p};return y(m.x,s,o)&&y(m.y,a,i)&&y(m.x,l,r)&&y(m.y,c,u)}}};function ib(t){return{draw:new ob(t),stylus:new Z8(t),line:new J8(t),rectangle:new X8(t),ellipse:new Q8(t),eraseLine:new ab(t)}}var cb=class{constructor(t={}){this.options=t,this.el=null,this.svgPoint=null,this.eventEl=null,this.shiftPressed=!1,this.altPressed=!1,this.drawing=!1,this._emitter=K8(),this._models=ib(this),this._undoStack=[],this._disposables=[],this.options.brush||(this.options.brush={color:"black",size:3,mode:"stylus"}),t.el&&this.mount(t.el,t.eventTarget)}get model(){return this._models[this.mode]}get mounted(){return!!this.el}get mode(){return this.options.brush.mode||"stylus"}set mode(t){this._models[this.mode].onUnselected(),this.options.brush.mode=t,this.model.onSelected(this.el)}get brush(){return this.options.brush}set brush(t){this.options.brush=t}resolveSelector(t){return typeof t=="string"?document.querySelector(t):t||null}mount(t,n){if(this.el)throw new Error("[drauu] already mounted, unmount previous target first");if(this.el=this.resolveSelector(t),!this.el)throw new Error("[drauu] target element not found");if(this.el.tagName.toLocaleLowerCase()!=="svg")throw new Error("[drauu] can only mount to a SVG element");if(!this.el.createSVGPoint)throw new Error("[drauu] SVG element must be create by document.createElementNS('http://www.w3.org/2000/svg', 'svg')");this.svgPoint=this.el.createSVGPoint();const s=this.resolveSelector(n)||this.el,o=this.eventStart.bind(this),l=this.eventMove.bind(this),r=this.eventEnd.bind(this),a=this.eventKeyboard.bind(this);s.addEventListener("pointerdown",o,{passive:!1}),window.addEventListener("pointermove",l,{passive:!1}),window.addEventListener("pointerup",r,{passive:!1}),window.addEventListener("pointercancel",r,{passive:!1}),window.addEventListener("keydown",a,!1),window.addEventListener("keyup",a,!1),this._disposables.push(()=>{s.removeEventListener("pointerdown",o),window.removeEventListener("pointermove",l),window.removeEventListener("pointerup",r),window.removeEventListener("pointercancel",r),window.removeEventListener("keydown",a,!1),window.removeEventListener("keyup",a,!1)}),this._emitter.emit("mounted")}unmount(){this._disposables.forEach(t=>t()),this._disposables.length=0,this.el=null,this._emitter.emit("unmounted")}on(t,n){return this._emitter.on(t,n)}undo(){const t=this.el;return t.lastElementChild?(this._undoStack.push(t.lastElementChild.cloneNode(!0)),t.lastElementChild.remove(),this._emitter.emit("changed"),!0):!1}redo(){return this._undoStack.length?(this.el.appendChild(this._undoStack.pop()),this._emitter.emit("changed"),!0):!1}canRedo(){return!!this._undoStack.length}canUndo(){var t;return!!((t=this.el)!=null&&t.lastElementChild)}eventMove(t){!this.acceptsInput(t)||!this.drawing||this.model._eventMove(t)&&(t.stopPropagation(),t.preventDefault(),this._emitter.emit("changed"))}eventStart(t){this.acceptsInput(t)&&(t.stopPropagation(),t.preventDefault(),this._currentNode&&this.cancel(),this.drawing=!0,this._emitter.emit("start"),this._currentNode=this.model._eventDown(t),this._currentNode&&this.mode!=="eraseLine"&&this.el.appendChild(this._currentNode),this._emitter.emit("changed"))}eventEnd(t){if(!this.acceptsInput(t)||!this.drawing)return;const n=this.model._eventUp(t);n?(n instanceof Element&&n!==this._currentNode&&(this._currentNode=n),this.commit()):this.cancel(),this.drawing=!1,this._emitter.emit("end"),this._emitter.emit("changed")}acceptsInput(t){return!this.options.acceptsInputTypes||this.options.acceptsInputTypes.includes(t.pointerType)}eventKeyboard(t){this.shiftPressed===t.shiftKey&&this.altPressed===t.altKey||(this.shiftPressed=t.shiftKey,this.altPressed=t.altKey,this.model.point&&this.model.onMove(this.model.point)&&this._emitter.emit("changed"))}commit(){this._undoStack.length=0;const t=this._currentNode;this._currentNode=void 0,this._emitter.emit("committed",t)}clear(){this._undoStack.length=0,this.cancel(),this.el.innerHTML="",this._emitter.emit("changed")}cancel(){this._currentNode&&(this.el.removeChild(this._currentNode),this._currentNode=void 0,this._emitter.emit("canceled"))}dump(){return this.el.innerHTML}load(t){this.clear(),this.el.innerHTML=t}};function ub(t){return new cb(t)}const Ua=["#ff595e","#ffca3a","#8ac926","#1982c4","#6a4c93","#ffffff","#000000"],ln=Jt("slidev-drawing-enabled",!1),rT=Jt("slidev-drawing-pinned",!1),pb=Y(!1),db=Y(!1),fb=Y(!1),Lo=Y(!1),ds=Lg(Jt("slidev-drawing-brush",{color:Ua[0],size:4,mode:"stylus"})),Pu=Y("stylus"),Pf=$(()=>Ee.drawings.syncAll||xt.value);let Ro=!1;const io=$({get(){return Pu.value},set(t){Pu.value=t,t==="arrow"?(ds.mode="line",ds.arrowEnd=!0):(ds.mode=t,ds.arrowEnd=!1)}}),hb=He({brush:ds,acceptsInputTypes:$(()=>ln.value&&(!Ee.drawings.presenterOnly||xt.value)?void 0:["pen"]),coordinateTransform:!1}),vt=rr(ub(hb));function yb(){vt.clear(),Pf.value&&tf(Ve.value,"")}function $i(){var t;db.value=vt.canRedo(),pb.value=vt.canUndo(),fb.value=!!((t=vt.el)!=null&&t.children.length)}function mb(t){Ro=!0;const n=zl[t||Ve.value];n!=null?vt.load(n):vt.clear(),$i(),Ro=!1}vt.on("changed",()=>{if($i(),!Ro){const t=vt.dump(),n=Ve.value;(zl[n]||"")!==t&&Pf.value&&tf(n,vt.dump())}});Ug(t=>{Ro=!0,t[Ve.value]!=null&&vt.load(t[Ve.value]||""),Ro=!1,$i()});it(()=>{ge(Ve,()=>{vt.mounted&&mb()},{immediate:!0})});vt.on("start",()=>Lo.value=!0);vt.on("end",()=>Lo.value=!1);window.addEventListener("keydown",t=>{if(!ln.value)return;const n=!t.ctrlKey&&!t.altKey&&!t.shiftKey&&!t.metaKey;let s=!0;t.code==="KeyZ"&&(t.ctrlKey||t.metaKey)?t.shiftKey?vt.redo():vt.undo():t.code==="Escape"?ln.value=!1:t.code==="KeyL"&&n?io.value="line":t.code==="KeyA"&&n?io.value="arrow":t.code==="KeyS"&&n?io.value="stylus":t.code==="KeyR"&&n?io.value="rectangle":t.code==="KeyE"&&n?io.value="ellipse":t.code==="KeyC"&&n?yb():t.code.startsWith("Digit")&&n&&+t.code[5]<=Ua.length?ds.color=Ua[+t.code[5]-1]:s=!1,s&&(t.preventDefault(),t.stopPropagation())},!1);function Je(...t){return $(()=>t.every(n=>Ye(n)))}function kt(t){return $(()=>!Ye(t))}const Iu=Pv(),jr=Jt("slidev-color-schema","auto"),Pa=$(()=>Ee.colorSchema!=="auto"),Oi=$({get(){return Pa.value?Ee.colorSchema==="dark":jr.value==="auto"?Iu.value:jr.value==="dark"},set(t){Pa.value||(jr.value=t===Iu.value?"auto":t?"dark":"light")}}),If=lf(Oi);Qt&&ge(Oi,t=>{const n=document.querySelector("html");n.classList.toggle("dark",t),n.classList.toggle("light",!t)},{immediate:!0});const kl=Y(1),Fl=$(()=>Ze.length),St=Y(0),Ui=Y(0);function gb(){St.value>kl.value&&(St.value-=1)}function vb(){St.value<Fl.value&&(St.value+=1)}function _b(){if(St.value>kl.value){let t=St.value-Ui.value;t<kl.value&&(t=kl.value),St.value=t}}function bb(){if(St.value<Fl.value){let t=St.value+Ui.value;t>Fl.value&&(t=Fl.value),St.value=t}}function xb(){const{escape:t,space:n,shift:s,left:o,right:l,up:r,down:a,enter:i,d:c,g:u,o:p}=Ef;let f=[{name:"next_space",key:Je(n,kt(s)),fn:Wn,autoRepeat:!0},{name:"prev_space",key:Je(n,s),fn:qn,autoRepeat:!0},{name:"next_right",key:Je(l,kt(s),kt(yt)),fn:Wn,autoRepeat:!0},{name:"prev_left",key:Je(o,kt(s),kt(yt)),fn:qn,autoRepeat:!0},{name:"next_page_key",key:"pageDown",fn:Wn,autoRepeat:!0},{name:"prev_page_key",key:"pageUp",fn:qn,autoRepeat:!0},{name:"next_down",key:Je(a,kt(yt)),fn:jo,autoRepeat:!0},{name:"prev_up",key:Je(r,kt(yt)),fn:()=>Wo(!1),autoRepeat:!0},{name:"next_shift",key:Je(l,s),fn:jo,autoRepeat:!0},{name:"prev_shift",key:Je(o,s),fn:()=>Wo(!1),autoRepeat:!0},{name:"toggle_dark",key:Je(c,kt(ln)),fn:If},{name:"toggle_overview",key:Je(p,kt(ln)),fn:Tf},{name:"hide_overview",key:Je(t,kt(ln)),fn:()=>yt.value=!1},{name:"goto",key:Je(u,kt(ln)),fn:()=>Is.value=!Is.value},{name:"next_overview",key:Je(l,yt),fn:vb},{name:"prev_overview",key:Je(o,yt),fn:gb},{name:"up_overview",key:Je(r,yt),fn:_b},{name:"down_overview",key:Je(a,yt),fn:bb},{name:"goto_from_overview",key:Je(i,yt),fn:()=>{Vs(St.value),yt.value=!1}}];const h=new Set(f.map(m=>m.name));if(f.filter(m=>m.name&&h.has(m.name)).length===0){const m=["========== WARNING ==========","defineShortcutsSetup did not return any of the base shortcuts.","See https://sli.dev/custom/config-shortcuts.html for migration.",'If it is intentional, return at least one shortcut with one of the base names (e.g. name:"goto").'].join(`

`);alert(m),console.warn(m)}return f}const Mf=Je(kt(P8),kt(I8),O8);function Ab(t,n,s=!1){typeof t=="string"&&(t=Ef[t]);const o=Je(t,Mf);let l=0,r;const a=()=>{if(clearTimeout(r),!o.value){l=0;return}s&&(r=setTimeout(a,Math.max(1e3-l*250,150)),l++),n()};return ge(o,a,{flush:"sync"})}function wb(t,n){return vv(t,s=>{Mf.value&&(s.repeat||n())})}function Bb(){const t=xb();new Map(t.map(s=>[s.key,s])).forEach(s=>{s.fn&&Ab(s.key,s.fn,s.autoRepeat)}),wb("f",()=>Sf.toggle())}const Cb={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},kb=e("path",{fill:"currentColor",d:"M24 9.4L22.6 8L16 14.6L9.4 8L8 9.4l6.6 6.6L8 22.6L9.4 24l6.6-6.6l6.6 6.6l1.4-1.4l-6.6-6.6L24 9.4z"},null,-1),Fb=[kb];function Db(t,n){return v(),k("svg",Cb,Fb)}const Eb={name:"carbon-close",render:Db};function Pi(t,n=""){var l,r;const s=["slidev-page",n],o=(r=(l=t==null?void 0:t.meta)==null?void 0:l.slide)==null?void 0:r.no;return o!=null&&s.push(`slidev-page-${o}`),s.filter(Boolean).join(" ")}const Sb=Ce({__name:"SlideContainer",props:{width:{type:Number},meta:{default:()=>({})},scale:{type:[Number,String]}},setup(t){const n=t;R(V);const s=Y(),o=Kv(s),l=$(()=>n.width?n.width:o.width.value),r=$(()=>n.width?n.width/Ln:o.height.value);n.width&&ks(()=>{s.value&&(s.value.style.width=`${l.value}px`,s.value.style.height=`${r.value}px`)});const a=$(()=>l.value/r.value),i=$(()=>n.scale&&!An.value?n.scale:a.value<Ln?l.value/Rn:r.value*Ln/Rn),c=$(()=>({height:`${Di}px`,width:`${Rn}px`,transform:`translate(-50%, -50%) scale(${i.value})`})),u=$(()=>({"select-none":!Ee.selectable}));return Dt(Qd,i),(p,f)=>(v(),k("div",{id:"slide-container",ref_key:"root",ref:s,class:We(u.value)},[e("div",{id:"slide-content",style:nt(c.value)},[Wt(p.$slots,"default")],4),Wt(p.$slots,"controls")],2))}});const z=(t,n)=>{const s=t.__vccOpts||t;for(const[o,l]of n)s[o]=l;return s},Lf=z(Sb,[["__file","/home/ben/Workspace/demystifying-unicode/node_modules/@slidev/client/internals/SlideContainer.vue"]]),Ii=Ce({name:"SlideWrapper",props:{clicks:{type:[Number,String],default:0},clicksElements:{type:Array,default:()=>[]},clicksOrderMap:{type:Map,default:()=>new Map},clicksDisabled:{type:Boolean,default:!1},context:{type:String,default:"main"},is:{type:Object,default:void 0},route:{type:Object,default:void 0}},setup(t,{emit:n}){const s=on(t,"clicks",n),o=on(t,"clicksElements",n),l=on(t,"clicksDisabled",n),r=on(t,"clicksOrderMap",n);o.value.length=0,Dt(mg,t.route),Dt(gg,t.context),Dt(_o,s),Dt(bo,l),Dt(as,o),Dt(xa,r)},render(){var t,n;return this.$props.is?tt(this.$props.is):(n=(t=this.$slots)==null?void 0:t.default)==null?void 0:n.call(t)}}),Tb=["innerHTML"],$b=Ce({__name:"DrawingPreview",props:{page:{type:Number,required:!0}},setup(t){return R(V),(n,s)=>T(zl)[n.page]?(v(),k("svg",{key:0,class:"w-full h-full absolute top-0 pointer-events-none",innerHTML:T(zl)[n.page]},null,8,Tb)):me("v-if",!0)}}),Rf=z($b,[["__file","/home/ben/Workspace/demystifying-unicode/node_modules/@slidev/client/internals/DrawingPreview.vue"]]),Ob=Object.freeze(Object.defineProperty({__proto__:null,default:Rf},Symbol.toStringTag,{value:"Module"})),Ub={class:"slides-overview bg-main !bg-opacity-75 p-16 overflow-y-auto"},Pb=["onClick"],Wr=4*16*2,Mu=2*16,Ib=Ce({__name:"SlidesOverview",props:{modelValue:{type:Boolean,required:!0}},emits:[],setup(t,{emit:n}){const s=t;R(V);const o=on(s,"modelValue",n);function l(){o.value=!1}function r(f){Vs(f),l()}function a(f){return f===St.value}const i=Ta.smaller("xs"),c=Ta.smaller("sm"),u=$(()=>i.value?xs.width.value-Wr:c.value?(xs.width.value-Wr-Mu)/2:300),p=$(()=>Math.floor((xs.width.value-Wr)/(u.value+Mu)));return ks(()=>{St.value=Ve.value,Ui.value=p.value}),(f,h)=>{const y=Eb;return v(),k(De,null,[Ke(e("div",Ub,[e("div",{class:"grid gap-y-4 gap-x-8 w-full",style:nt(`grid-template-columns: repeat(auto-fit,minmax(${u.value}px,1fr))`)},[(v(!0),k(De,null,Fs(T(Ze),(m,b)=>(v(),k("div",{key:m.path,class:"relative"},[e("div",{class:We(["inline-block border rounded border-opacity-50 overflow-hidden bg-main hover:border-$slidev-theme-primary",{"border-$slidev-theme-primary":a(b+1),"border-gray-400":!a(b+1)}]),style:nt(T(Ei)),onClick:w=>r(+m.path)},[(v(),q(Lf,{key:m.path,width:u.value,"clicks-disabled":!0,class:"pointer-events-none"},{default:U(()=>[m!=null&&m.component?(v(),q(T(Ii),{key:0,is:m.component,"clicks-disabled":!0,class:We(T(Pi)(m)),route:m,context:"overview"},null,8,["is","class","route"])):me("v-if",!0),I(Rf,{page:+m.path},null,8,["page"])]),_:2},1032,["width"]))],14,Pb),e("div",{class:"absolute top-0 opacity-50",style:nt(`left: ${u.value+5}px`)},Bn(b+1),5)]))),128))],4)],512),[[Nd,T(o)]]),T(o)?(v(),k("button",{key:0,class:"fixed text-2xl top-4 right-4 slidev-icon-btn text-gray-400",onClick:l},[I(y)])):me("v-if",!0)],64)}}});const Mb=z(Ib,[["__file","/home/ben/Workspace/demystifying-unicode/node_modules/@slidev/client/internals/SlidesOverview.vue"]]),Lb="/demystifying-unicode/assets/logo-b72bde5d.png",Rb={key:0,class:"fixed top-0 bottom-0 left-0 right-0 grid z-20"},Nb=Ce({__name:"Modal",props:{modelValue:{default:!1},class:{default:""}},emits:["modelValue"],setup(t,{emit:n}){const s=t;R(V);const o=on(s,"modelValue",n);function l(){o.value=!1}return(r,a)=>(v(),q(pd,null,[T(o)?(v(),k("div",Rb,[e("div",{bg:"black opacity-80",class:"absolute top-0 bottom-0 left-0 right-0 -z-1",onClick:a[0]||(a[0]=i=>l())}),e("div",{class:We(["m-auto rounded-md bg-main shadow",s.class]),"dark:border":"~ main"},[Wt(r.$slots,"default")],2)])):me("v-if",!0)],1024))}}),jb=z(Nb,[["__file","/home/ben/Workspace/demystifying-unicode/node_modules/@slidev/client/internals/Modal.vue"]]),Wb={class:"slidev-info-dialog slidev-layout flex flex-col gap-4 text-base"},qb=["innerHTML"],Hb=e("a",{href:"https://github.com/slidevjs/slidev",target:"_blank",class:"!opacity-100 !border-none !text-current"},[e("div",{class:"flex gap-1 children:my-auto"},[e("div",{class:"opacity-50 text-sm mr-2"},"Powered by"),e("img",{class:"w-5 h-5",src:Lb,alt:"Slidev"}),e("div",{style:{color:"#2082A6"}},[e("b",null,"Sli"),d("dev ")])])],-1),Vb=Ce({__name:"InfoDialog",props:{modelValue:{default:!1}},emits:["modelValue"],setup(t,{emit:n}){const s=t;R(V);const o=on(s,"modelValue",n),l=$(()=>typeof Ee.info=="string");return(r,a)=>(v(),q(jb,{modelValue:T(o),"onUpdate:modelValue":a[0]||(a[0]=i=>Se(o)?o.value=i:null),class:"px-6 py-4"},{default:U(()=>[e("div",Wb,[l.value?(v(),k("div",{key:0,class:"mb-4",innerHTML:T(Ee).info},null,8,qb)):me("v-if",!0),Hb])]),_:1},8,["modelValue"]))}});const zb=z(Vb,[["__file","/home/ben/Workspace/demystifying-unicode/node_modules/@slidev/client/internals/InfoDialog.vue"]]);function Cn(t){return Array.isArray?Array.isArray(t):Wf(t)==="[object Array]"}const Kb=1/0;function Gb(t){if(typeof t=="string")return t;let n=t+"";return n=="0"&&1/t==-Kb?"-0":n}function Yb(t){return t==null?"":Gb(t)}function rn(t){return typeof t=="string"}function Nf(t){return typeof t=="number"}function Zb(t){return t===!0||t===!1||Qb(t)&&Wf(t)=="[object Boolean]"}function jf(t){return typeof t=="object"}function Qb(t){return jf(t)&&t!==null}function Et(t){return t!=null}function qr(t){return!t.trim().length}function Wf(t){return t==null?t===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(t)}const Jb="Incorrect 'index' type",Xb=t=>`Invalid value for key ${t}`,e5=t=>`Pattern length exceeds max of ${t}.`,t5=t=>`Missing ${t} property in key`,n5=t=>`Property 'weight' in key '${t}' must be a positive integer`,Lu=Object.prototype.hasOwnProperty;class s5{constructor(n){this._keys=[],this._keyMap={};let s=0;n.forEach(o=>{let l=qf(o);s+=l.weight,this._keys.push(l),this._keyMap[l.id]=l,s+=l.weight}),this._keys.forEach(o=>{o.weight/=s})}get(n){return this._keyMap[n]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function qf(t){let n=null,s=null,o=null,l=1,r=null;if(rn(t)||Cn(t))o=t,n=Ru(t),s=Ia(t);else{if(!Lu.call(t,"name"))throw new Error(t5("name"));const a=t.name;if(o=a,Lu.call(t,"weight")&&(l=t.weight,l<=0))throw new Error(n5(a));n=Ru(a),s=Ia(a),r=t.getFn}return{path:n,id:s,weight:l,src:o,getFn:r}}function Ru(t){return Cn(t)?t:t.split(".")}function Ia(t){return Cn(t)?t.join("."):t}function o5(t,n){let s=[],o=!1;const l=(r,a,i)=>{if(Et(r))if(!a[i])s.push(r);else{let c=a[i];const u=r[c];if(!Et(u))return;if(i===a.length-1&&(rn(u)||Nf(u)||Zb(u)))s.push(Yb(u));else if(Cn(u)){o=!0;for(let p=0,f=u.length;p<f;p+=1)l(u[p],a,i+1)}else a.length&&l(u,a,i+1)}};return l(t,rn(n)?n.split("."):n,0),o?s:s[0]}const l5={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},r5={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(t,n)=>t.score===n.score?t.idx<n.idx?-1:1:t.score<n.score?-1:1},a5={location:0,threshold:.6,distance:100},i5={useExtendedSearch:!1,getFn:o5,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var de={...r5,...l5,...a5,...i5};const c5=/[^ ]+/g;function u5(t=1,n=3){const s=new Map,o=Math.pow(10,n);return{get(l){const r=l.match(c5).length;if(s.has(r))return s.get(r);const a=1/Math.pow(r,.5*t),i=parseFloat(Math.round(a*o)/o);return s.set(r,i),i},clear(){s.clear()}}}class Mi{constructor({getFn:n=de.getFn,fieldNormWeight:s=de.fieldNormWeight}={}){this.norm=u5(s,3),this.getFn=n,this.isCreated=!1,this.setIndexRecords()}setSources(n=[]){this.docs=n}setIndexRecords(n=[]){this.records=n}setKeys(n=[]){this.keys=n,this._keysMap={},n.forEach((s,o)=>{this._keysMap[s.id]=o})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,rn(this.docs[0])?this.docs.forEach((n,s)=>{this._addString(n,s)}):this.docs.forEach((n,s)=>{this._addObject(n,s)}),this.norm.clear())}add(n){const s=this.size();rn(n)?this._addString(n,s):this._addObject(n,s)}removeAt(n){this.records.splice(n,1);for(let s=n,o=this.size();s<o;s+=1)this.records[s].i-=1}getValueForItemAtKeyId(n,s){return n[this._keysMap[s]]}size(){return this.records.length}_addString(n,s){if(!Et(n)||qr(n))return;let o={v:n,i:s,n:this.norm.get(n)};this.records.push(o)}_addObject(n,s){let o={i:s,$:{}};this.keys.forEach((l,r)=>{let a=l.getFn?l.getFn(n):this.getFn(n,l.path);if(Et(a)){if(Cn(a)){let i=[];const c=[{nestedArrIndex:-1,value:a}];for(;c.length;){const{nestedArrIndex:u,value:p}=c.pop();if(Et(p))if(rn(p)&&!qr(p)){let f={v:p,i:u,n:this.norm.get(p)};i.push(f)}else Cn(p)&&p.forEach((f,h)=>{c.push({nestedArrIndex:h,value:f})})}o.$[r]=i}else if(rn(a)&&!qr(a)){let i={v:a,n:this.norm.get(a)};o.$[r]=i}}}),this.records.push(o)}toJSON(){return{keys:this.keys,records:this.records}}}function Hf(t,n,{getFn:s=de.getFn,fieldNormWeight:o=de.fieldNormWeight}={}){const l=new Mi({getFn:s,fieldNormWeight:o});return l.setKeys(t.map(qf)),l.setSources(n),l.create(),l}function p5(t,{getFn:n=de.getFn,fieldNormWeight:s=de.fieldNormWeight}={}){const{keys:o,records:l}=t,r=new Mi({getFn:n,fieldNormWeight:s});return r.setKeys(o),r.setIndexRecords(l),r}function ml(t,{errors:n=0,currentLocation:s=0,expectedLocation:o=0,distance:l=de.distance,ignoreLocation:r=de.ignoreLocation}={}){const a=n/t.length;if(r)return a;const i=Math.abs(o-s);return l?a+i/l:i?1:a}function d5(t=[],n=de.minMatchCharLength){let s=[],o=-1,l=-1,r=0;for(let a=t.length;r<a;r+=1){let i=t[r];i&&o===-1?o=r:!i&&o!==-1&&(l=r-1,l-o+1>=n&&s.push([o,l]),o=-1)}return t[r-1]&&r-o>=n&&s.push([o,r-1]),s}const cs=32;function f5(t,n,s,{location:o=de.location,distance:l=de.distance,threshold:r=de.threshold,findAllMatches:a=de.findAllMatches,minMatchCharLength:i=de.minMatchCharLength,includeMatches:c=de.includeMatches,ignoreLocation:u=de.ignoreLocation}={}){if(n.length>cs)throw new Error(e5(cs));const p=n.length,f=t.length,h=Math.max(0,Math.min(o,f));let y=r,m=h;const b=i>1||c,w=b?Array(f):[];let A;for(;(A=t.indexOf(n,m))>-1;){let L=ml(n,{currentLocation:A,expectedLocation:h,distance:l,ignoreLocation:u});if(y=Math.min(L,y),m=A+p,b){let O=0;for(;O<p;)w[A+O]=1,O+=1}}m=-1;let B=[],x=1,C=p+f;const F=1<<p-1;for(let L=0;L<p;L+=1){let O=0,W=C;for(;O<W;)ml(n,{errors:L,currentLocation:h+W,expectedLocation:h,distance:l,ignoreLocation:u})<=y?O=W:C=W,W=Math.floor((C-O)/2+O);C=W;let ne=Math.max(1,h-W+1),ue=a?f:Math.min(h+W,f)+p,Z=Array(ue+2);Z[ue+1]=(1<<L)-1;for(let ve=ue;ve>=ne;ve-=1){let be=ve-1,Pe=s[t.charAt(be)];if(b&&(w[be]=+!!Pe),Z[ve]=(Z[ve+1]<<1|1)&Pe,L&&(Z[ve]|=(B[ve+1]|B[ve])<<1|1|B[ve+1]),Z[ve]&F&&(x=ml(n,{errors:L,currentLocation:be,expectedLocation:h,distance:l,ignoreLocation:u}),x<=y)){if(y=x,m=be,m<=h)break;ne=Math.max(1,2*h-m)}}if(ml(n,{errors:L+1,currentLocation:h,expectedLocation:h,distance:l,ignoreLocation:u})>y)break;B=Z}const E={isMatch:m>=0,score:Math.max(.001,x)};if(b){const L=d5(w,i);L.length?c&&(E.indices=L):E.isMatch=!1}return E}function h5(t){let n={};for(let s=0,o=t.length;s<o;s+=1){const l=t.charAt(s);n[l]=(n[l]||0)|1<<o-s-1}return n}class Vf{constructor(n,{location:s=de.location,threshold:o=de.threshold,distance:l=de.distance,includeMatches:r=de.includeMatches,findAllMatches:a=de.findAllMatches,minMatchCharLength:i=de.minMatchCharLength,isCaseSensitive:c=de.isCaseSensitive,ignoreLocation:u=de.ignoreLocation}={}){if(this.options={location:s,threshold:o,distance:l,includeMatches:r,findAllMatches:a,minMatchCharLength:i,isCaseSensitive:c,ignoreLocation:u},this.pattern=c?n:n.toLowerCase(),this.chunks=[],!this.pattern.length)return;const p=(h,y)=>{this.chunks.push({pattern:h,alphabet:h5(h),startIndex:y})},f=this.pattern.length;if(f>cs){let h=0;const y=f%cs,m=f-y;for(;h<m;)p(this.pattern.substr(h,cs),h),h+=cs;if(y){const b=f-cs;p(this.pattern.substr(b),b)}}else p(this.pattern,0)}searchIn(n){const{isCaseSensitive:s,includeMatches:o}=this.options;if(s||(n=n.toLowerCase()),this.pattern===n){let m={isMatch:!0,score:0};return o&&(m.indices=[[0,n.length-1]]),m}const{location:l,distance:r,threshold:a,findAllMatches:i,minMatchCharLength:c,ignoreLocation:u}=this.options;let p=[],f=0,h=!1;this.chunks.forEach(({pattern:m,alphabet:b,startIndex:w})=>{const{isMatch:A,score:B,indices:x}=f5(n,m,b,{location:l+w,distance:r,threshold:a,findAllMatches:i,minMatchCharLength:c,includeMatches:o,ignoreLocation:u});A&&(h=!0),f+=B,A&&x&&(p=[...p,...x])});let y={isMatch:h,score:h?f/this.chunks.length:1};return h&&o&&(y.indices=p),y}}class Yn{constructor(n){this.pattern=n}static isMultiMatch(n){return Nu(n,this.multiRegex)}static isSingleMatch(n){return Nu(n,this.singleRegex)}search(){}}function Nu(t,n){const s=t.match(n);return s?s[1]:null}class y5 extends Yn{constructor(n){super(n)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(n){const s=n===this.pattern;return{isMatch:s,score:s?0:1,indices:[0,this.pattern.length-1]}}}class m5 extends Yn{constructor(n){super(n)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(n){const o=n.indexOf(this.pattern)===-1;return{isMatch:o,score:o?0:1,indices:[0,n.length-1]}}}class g5 extends Yn{constructor(n){super(n)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(n){const s=n.startsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[0,this.pattern.length-1]}}}class v5 extends Yn{constructor(n){super(n)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(n){const s=!n.startsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[0,n.length-1]}}}class _5 extends Yn{constructor(n){super(n)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(n){const s=n.endsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[n.length-this.pattern.length,n.length-1]}}}class b5 extends Yn{constructor(n){super(n)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(n){const s=!n.endsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[0,n.length-1]}}}class zf extends Yn{constructor(n,{location:s=de.location,threshold:o=de.threshold,distance:l=de.distance,includeMatches:r=de.includeMatches,findAllMatches:a=de.findAllMatches,minMatchCharLength:i=de.minMatchCharLength,isCaseSensitive:c=de.isCaseSensitive,ignoreLocation:u=de.ignoreLocation}={}){super(n),this._bitapSearch=new Vf(n,{location:s,threshold:o,distance:l,includeMatches:r,findAllMatches:a,minMatchCharLength:i,isCaseSensitive:c,ignoreLocation:u})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(n){return this._bitapSearch.searchIn(n)}}class Kf extends Yn{constructor(n){super(n)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(n){let s=0,o;const l=[],r=this.pattern.length;for(;(o=n.indexOf(this.pattern,s))>-1;)s=o+r,l.push([o,s-1]);const a=!!l.length;return{isMatch:a,score:a?0:1,indices:l}}}const Ma=[y5,Kf,g5,v5,b5,_5,m5,zf],ju=Ma.length,x5=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,A5="|";function w5(t,n={}){return t.split(A5).map(s=>{let o=s.trim().split(x5).filter(r=>r&&!!r.trim()),l=[];for(let r=0,a=o.length;r<a;r+=1){const i=o[r];let c=!1,u=-1;for(;!c&&++u<ju;){const p=Ma[u];let f=p.isMultiMatch(i);f&&(l.push(new p(f,n)),c=!0)}if(!c)for(u=-1;++u<ju;){const p=Ma[u];let f=p.isSingleMatch(i);if(f){l.push(new p(f,n));break}}}return l})}const B5=new Set([zf.type,Kf.type]);class C5{constructor(n,{isCaseSensitive:s=de.isCaseSensitive,includeMatches:o=de.includeMatches,minMatchCharLength:l=de.minMatchCharLength,ignoreLocation:r=de.ignoreLocation,findAllMatches:a=de.findAllMatches,location:i=de.location,threshold:c=de.threshold,distance:u=de.distance}={}){this.query=null,this.options={isCaseSensitive:s,includeMatches:o,minMatchCharLength:l,findAllMatches:a,ignoreLocation:r,location:i,threshold:c,distance:u},this.pattern=s?n:n.toLowerCase(),this.query=w5(this.pattern,this.options)}static condition(n,s){return s.useExtendedSearch}searchIn(n){const s=this.query;if(!s)return{isMatch:!1,score:1};const{includeMatches:o,isCaseSensitive:l}=this.options;n=l?n:n.toLowerCase();let r=0,a=[],i=0;for(let c=0,u=s.length;c<u;c+=1){const p=s[c];a.length=0,r=0;for(let f=0,h=p.length;f<h;f+=1){const y=p[f],{isMatch:m,indices:b,score:w}=y.search(n);if(m){if(r+=1,i+=w,o){const A=y.constructor.type;B5.has(A)?a=[...a,...b]:a.push(b)}}else{i=0,r=0,a.length=0;break}}if(r){let f={isMatch:!0,score:i/r};return o&&(f.indices=a),f}}return{isMatch:!1,score:1}}}const La=[];function k5(...t){La.push(...t)}function Ra(t,n){for(let s=0,o=La.length;s<o;s+=1){let l=La[s];if(l.condition(t,n))return new l(t,n)}return new Vf(t,n)}const Zl={AND:"$and",OR:"$or"},Na={PATH:"$path",PATTERN:"$val"},ja=t=>!!(t[Zl.AND]||t[Zl.OR]),F5=t=>!!t[Na.PATH],D5=t=>!Cn(t)&&jf(t)&&!ja(t),Wu=t=>({[Zl.AND]:Object.keys(t).map(n=>({[n]:t[n]}))});function Gf(t,n,{auto:s=!0}={}){const o=l=>{let r=Object.keys(l);const a=F5(l);if(!a&&r.length>1&&!ja(l))return o(Wu(l));if(D5(l)){const c=a?l[Na.PATH]:r[0],u=a?l[Na.PATTERN]:l[c];if(!rn(u))throw new Error(Xb(c));const p={keyId:Ia(c),pattern:u};return s&&(p.searcher=Ra(u,n)),p}let i={children:[],operator:r[0]};return r.forEach(c=>{const u=l[c];Cn(u)&&u.forEach(p=>{i.children.push(o(p))})}),i};return ja(t)||(t=Wu(t)),o(t)}function E5(t,{ignoreFieldNorm:n=de.ignoreFieldNorm}){t.forEach(s=>{let o=1;s.matches.forEach(({key:l,norm:r,score:a})=>{const i=l?l.weight:null;o*=Math.pow(a===0&&i?Number.EPSILON:a,(i||1)*(n?1:r))}),s.score=o})}function S5(t,n){const s=t.matches;n.matches=[],Et(s)&&s.forEach(o=>{if(!Et(o.indices)||!o.indices.length)return;const{indices:l,value:r}=o;let a={indices:l,value:r};o.key&&(a.key=o.key.src),o.idx>-1&&(a.refIndex=o.idx),n.matches.push(a)})}function T5(t,n){n.score=t.score}function $5(t,n,{includeMatches:s=de.includeMatches,includeScore:o=de.includeScore}={}){const l=[];return s&&l.push(S5),o&&l.push(T5),t.map(r=>{const{idx:a}=r,i={item:n[a],refIndex:a};return l.length&&l.forEach(c=>{c(r,i)}),i})}class Ks{constructor(n,s={},o){this.options={...de,...s},this.options.useExtendedSearch,this._keyStore=new s5(this.options.keys),this.setCollection(n,o)}setCollection(n,s){if(this._docs=n,s&&!(s instanceof Mi))throw new Error(Jb);this._myIndex=s||Hf(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(n){Et(n)&&(this._docs.push(n),this._myIndex.add(n))}remove(n=()=>!1){const s=[];for(let o=0,l=this._docs.length;o<l;o+=1){const r=this._docs[o];n(r,o)&&(this.removeAt(o),o-=1,l-=1,s.push(r))}return s}removeAt(n){this._docs.splice(n,1),this._myIndex.removeAt(n)}getIndex(){return this._myIndex}search(n,{limit:s=-1}={}){const{includeMatches:o,includeScore:l,shouldSort:r,sortFn:a,ignoreFieldNorm:i}=this.options;let c=rn(n)?rn(this._docs[0])?this._searchStringList(n):this._searchObjectList(n):this._searchLogical(n);return E5(c,{ignoreFieldNorm:i}),r&&c.sort(a),Nf(s)&&s>-1&&(c=c.slice(0,s)),$5(c,this._docs,{includeMatches:o,includeScore:l})}_searchStringList(n){const s=Ra(n,this.options),{records:o}=this._myIndex,l=[];return o.forEach(({v:r,i:a,n:i})=>{if(!Et(r))return;const{isMatch:c,score:u,indices:p}=s.searchIn(r);c&&l.push({item:r,idx:a,matches:[{score:u,value:r,norm:i,indices:p}]})}),l}_searchLogical(n){const s=Gf(n,this.options),o=(i,c,u)=>{if(!i.children){const{keyId:f,searcher:h}=i,y=this._findMatches({key:this._keyStore.get(f),value:this._myIndex.getValueForItemAtKeyId(c,f),searcher:h});return y&&y.length?[{idx:u,item:c,matches:y}]:[]}const p=[];for(let f=0,h=i.children.length;f<h;f+=1){const y=i.children[f],m=o(y,c,u);if(m.length)p.push(...m);else if(i.operator===Zl.AND)return[]}return p},l=this._myIndex.records,r={},a=[];return l.forEach(({$:i,i:c})=>{if(Et(i)){let u=o(s,i,c);u.length&&(r[c]||(r[c]={idx:c,item:i,matches:[]},a.push(r[c])),u.forEach(({matches:p})=>{r[c].matches.push(...p)}))}}),a}_searchObjectList(n){const s=Ra(n,this.options),{keys:o,records:l}=this._myIndex,r=[];return l.forEach(({$:a,i})=>{if(!Et(a))return;let c=[];o.forEach((u,p)=>{c.push(...this._findMatches({key:u,value:a[p],searcher:s}))}),c.length&&r.push({idx:i,item:a,matches:c})}),r}_findMatches({key:n,value:s,searcher:o}){if(!Et(s))return[];let l=[];if(Cn(s))s.forEach(({v:r,i:a,n:i})=>{if(!Et(r))return;const{isMatch:c,score:u,indices:p}=o.searchIn(r);c&&l.push({score:u,key:n,value:r,idx:a,norm:i,indices:p})});else{const{v:r,n:a}=s,{isMatch:i,score:c,indices:u}=o.searchIn(r);i&&l.push({score:c,key:n,value:r,norm:a,indices:u})}return l}}Ks.version="6.6.2";Ks.createIndex=Hf;Ks.parseIndex=p5;Ks.config=de;Ks.parseQuery=Gf;k5(C5);const O5={class:"bg-main transform",shadow:"~",p:"x-4 y-2",border:"~ transparent rounded dark:main"},U5=["value","disabled","onKeydown"],P5=["border","onClick"],I5={"w-4":"","text-right":"",op50:"","text-sm":""},M5=Ce({__name:"Goto",setup(t){R(V);const n=Y(),s=Y(),o=Y(),l=Y(),r=Y(""),a=Y(0);function i(x){return x!=null}const c=$(()=>new Ks(Ze.map(x=>{var C;return(C=x.meta)==null?void 0:C.slide}).filter(i),{keys:["no","title"],threshold:.3,shouldSort:!0,minMatchCharLength:1})),u=$(()=>r.value.startsWith("/")?r.value.substring(1):r.value),p=$(()=>c.value.search(u.value).map(x=>x.item)),f=$(()=>!!p.value.length);function h(){if(f.value){const x=p.value.at(a.value||0);x&&Vs(x.no)}y()}function y(){r.value="",Is.value=!1}function m(x){x.preventDefault(),a.value++,a.value>=p.value.length&&(a.value=0),w()}function b(x){x.preventDefault(),a.value--,a.value<=-2&&(a.value=p.value.length-1),w()}function w(){var C;const x=(C=l.value)==null?void 0:C[a.value];x&&o.value&&(x.offsetTop+x.offsetHeight>o.value.offsetHeight+o.value.scrollTop?o.value.scrollTo({behavior:"smooth",top:x.offsetTop+x.offsetHeight-o.value.offsetHeight+1}):x.offsetTop<o.value.scrollTop&&o.value.scrollTo({behavior:"smooth",top:x.offsetTop}))}function A(x){a.value=0,r.value=x.target.value}function B(x){Vs(x),y()}return ge(Is,async x=>{var C;x?(r.value="",a.value=0,setTimeout(()=>{var F;return(F=s.value)==null?void 0:F.focus()},0)):(C=s.value)==null||C.blur()}),ge(jn,()=>{var x;(x=n.value)!=null&&x.contains(jn.value)||y()}),(x,C)=>(v(),k("div",{id:"slidev-goto-dialog",ref_key:"container",ref:n,class:We(["fixed right-5 transition-all",T(Is)?"top-5":"-top-20"]),"w-90":"","max-w-90":"","min-w-90":""},[e("div",O5,[e("input",{id:"slidev-goto-input",ref_key:"input",ref:s,value:r.value,type:"text",disabled:!T(Is),class:We(["outline-none bg-transparent",{"text-red-400":!f.value&&r.value}]),placeholder:"Goto...",onKeydown:[cl(h,["enter"]),cl(y,["escape"]),cl(m,["down"]),cl(b,["up"])],onInput:A},null,42,U5)]),p.value.length>0?(v(),k("ul",{key:0,ref_key:"list",ref:o,class:"autocomplete-list",shadow:"~",border:"~ transparent rounded dark:main"},[(v(!0),k(De,null,Fs(p.value,(F,E)=>(v(),k("li",{ref_for:!0,ref_key:"items",ref:l,key:F.id,role:"button",tabindex:"0",p:"x-4 y-2","cursor-pointer":"",hover:"op100",flex:"~ gap-2","w-90":"","items-center":"",border:E===0?"":"t main",class:We(a.value===E?"bg-active op100":"op80"),onClick:g1(L=>B(F.no),["stop"])},[e("div",I5,Bn(F.no),1),d(" "+Bn(F.title),1)],10,P5))),128))],512)):me("v-if",!0)],2))}});const L5=z(M5,[["__scopeId","data-v-f5ee02a7"],["__file","/home/ben/Workspace/demystifying-unicode/node_modules/@slidev/client/internals/Goto.vue"]]),R5=Ce({__name:"Controls",setup(t){R(V);const n=un(),s=un();return(o,l)=>(v(),k(De,null,[I(Mb,{modelValue:T(yt),"onUpdate:modelValue":l[0]||(l[0]=r=>Se(yt)?yt.value=r:null)},null,8,["modelValue"]),I(L5),n.value?(v(),q(T(n),{key:0})):me("v-if",!0),s.value?(v(),q(T(s),{key:1,modelValue:T(Rr),"onUpdate:modelValue":l[1]||(l[1]=r=>Se(Rr)?Rr.value=r:null)},null,8,["modelValue"])):me("v-if",!0),T(Ee).info?(v(),q(zb,{key:2,modelValue:T(wo),"onUpdate:modelValue":l[2]||(l[2]=r=>Se(wo)?wo.value=r:null)},null,8,["modelValue"])):me("v-if",!0)],64))}}),N5=z(R5,[["__file","/home/ben/Workspace/demystifying-unicode/node_modules/@slidev/client/internals/Controls.vue"]]),j5={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},W5=e("path",{fill:"currentColor",d:"M30 8h-4.1c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2h14.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30V8zm-9 4c-1.7 0-3-1.3-3-3s1.3-3 3-3s3 1.3 3 3s-1.3 3-3 3zM2 24h4.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30v-2H15.9c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2zm9-4c1.7 0 3 1.3 3 3s-1.3 3-3 3s-3-1.3-3-3s1.3-3 3-3z"},null,-1),q5=[W5];function H5(t,n){return v(),k("svg",j5,q5)}const V5={name:"carbon-settings-adjust",render:H5},z5={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},K5=e("path",{fill:"currentColor",d:"M17 22v-8h-4v2h2v6h-3v2h8v-2h-3zM16 8a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 16 8z"},null,-1),G5=e("path",{fill:"currentColor",d:"M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z"},null,-1),Y5=[K5,G5];function Z5(t,n){return v(),k("svg",z5,Y5)}const Q5={name:"carbon-information",render:Z5},J5={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},X5=e("path",{fill:"currentColor",d:"M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10l10-10z"},null,-1),e3=[X5];function t3(t,n){return v(),k("svg",J5,e3)}const n3={name:"carbon-download",render:t3},s3={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},o3=e("path",{fill:"currentColor",d:"M29.415 19L27.7 17.285A2.97 2.97 0 0 0 28 16a3 3 0 1 0-3 3a2.97 2.97 0 0 0 1.286-.3L28 20.414V28h-6v-3a7.008 7.008 0 0 0-7-7H9a7.008 7.008 0 0 0-7 7v5h28v-9.586A1.988 1.988 0 0 0 29.415 19ZM4 25a5.006 5.006 0 0 1 5-5h6a5.006 5.006 0 0 1 5 5v3H4Z"},null,-1),l3=e("path",{fill:"currentColor",d:"M12 4a5 5 0 1 1-5 5a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7a7 7 0 0 0-7-7Z"},null,-1),r3=[o3,l3];function a3(t,n){return v(),k("svg",s3,r3)}const i3={name:"carbon-user-speaker",render:a3},c3={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},u3=e("path",{fill:"currentColor",d:"M15 10h2v8h-2zm5 4h2v4h-2zm-10-2h2v6h-2z"},null,-1),p3=e("path",{fill:"currentColor",d:"M25 4h-8V2h-2v2H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8v6h-4v2h10v-2h-4v-6h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 16H7V6h18Z"},null,-1),d3=[u3,p3];function f3(t,n){return v(),k("svg",c3,d3)}const h3={name:"carbon-presentation-file",render:f3},y3={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},m3=e("path",{fill:"currentColor",d:"M27.307 6.107L30 3.414L28.586 2l-2.693 2.693L24.8 3.6a1.933 1.933 0 0 0-2.8 0l-18 18V28h6.4l18-18a1.933 1.933 0 0 0 0-2.8ZM9.6 26H6v-3.6L23.4 5L27 8.6ZM9 11.586L16.586 4L18 5.414L10.414 13z"},null,-1),g3=[m3];function v3(t,n){return v(),k("svg",y3,g3)}const _3={name:"carbon-pen",render:v3},b3={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},x3=e("g",{fill:"currentColor"},[e("path",{d:"M213.66 201L201 213.66a8 8 0 0 1-11.31 0L140 164a8 8 0 0 0-13 2.46l-19.46 44.77a8 8 0 0 1-14.85-.71L40.41 50.44a8 8 0 0 1 10-10l160.1 52.24a8 8 0 0 1 .71 14.85L166.45 127a8 8 0 0 0-2.45 13l49.67 49.67a8 8 0 0 1-.01 11.33Z",opacity:".2"}),e("path",{d:"m169.64 134.33l44.77-19.46a16 16 0 0 0-1.41-29.8L52.92 32.8A16 16 0 0 0 32.8 52.92L85.07 213a15.83 15.83 0 0 0 14.41 11h.78a15.83 15.83 0 0 0 14.61-9.59l19.46-44.77L184 219.31a16 16 0 0 0 22.63 0l12.68-12.68a16 16 0 0 0 0-22.63Zm-69.48 73.76l.06-.05Zm95.15-.09l-49.67-49.67a16 16 0 0 0-26 4.94l-19.42 44.65L48 48l159.87 52.21l-44.64 19.41a16 16 0 0 0-4.94 26L208 195.31Z"})],-1),A3=[x3];function w3(t,n){return v(),k("svg",b3,A3)}const B3={name:"ph-cursor-duotone",render:w3},C3={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},k3=e("path",{fill:"currentColor",d:"M219.31 192a16 16 0 0 1 0 22.63l-4.68 4.68a16 16 0 0 1-22.63 0l-55.25-55.24l-21.88 50.34a15.84 15.84 0 0 1-14.61 9.59h-.78a15.82 15.82 0 0 1-14.41-11L32.8 52.92A15.95 15.95 0 0 1 52.92 32.8L213 85.07a16 16 0 0 1 1.41 29.8l-50.34 21.88Z"},null,-1),F3=[k3];function D3(t,n){return v(),k("svg",C3,F3)}const Yf={name:"ph-cursor-fill",render:D3},E3={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},S3=e("path",{fill:"currentColor",d:"M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6ZM5.394 6.813L6.81 5.399l3.505 3.506L8.9 10.319zM2 15.005h5v2H2zm3.394 10.193L8.9 21.692l1.414 1.414l-3.505 3.506zM15 25.005h2v5h-2zm6.687-1.9l1.414-1.414l3.506 3.506l-1.414 1.414zm3.313-8.1h5v2h-5zm-3.313-6.101l3.506-3.506l1.414 1.414l-3.506 3.506zM15 2.005h2v5h-2z"},null,-1),T3=[S3];function $3(t,n){return v(),k("svg",E3,T3)}const O3={name:"carbon-sun",render:$3},U3={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},P3=e("path",{fill:"currentColor",d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3Z"},null,-1),I3=[P3];function M3(t,n){return v(),k("svg",U3,I3)}const L3={name:"carbon-moon",render:M3},R3={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},N3=e("path",{fill:"currentColor",d:"M8 4v4H4V4Zm2-2H2v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8ZM8 14v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8ZM8 24v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Z"},null,-1),j3=[N3];function W3(t,n){return v(),k("svg",R3,j3)}const q3={name:"carbon-apps",render:W3},H3={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},V3=e("path",{fill:"currentColor",d:"m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10L18 6z"},null,-1),z3=[V3];function K3(t,n){return v(),k("svg",H3,z3)}const G3={name:"carbon-arrow-right",render:K3},Y3={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Z3=e("path",{fill:"currentColor",d:"m14 26l1.41-1.41L7.83 17H28v-2H7.83l7.58-7.59L14 6L4 16l10 10z"},null,-1),Q3=[Z3];function J3(t,n){return v(),k("svg",Y3,Q3)}const X3={name:"carbon-arrow-left",render:J3},ex={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},tx=e("path",{fill:"currentColor",d:"M20 2v2h6.586L18 12.582L19.414 14L28 5.414V12h2V2H20zm-6 17.416L12.592 18L4 26.586V20H2v10h10v-2H5.414L14 19.416z"},null,-1),nx=[tx];function sx(t,n){return v(),k("svg",ex,nx)}const ox={name:"carbon-maximize",render:sx},lx={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},rx=e("path",{fill:"currentColor",d:"M4 18v2h6.586L2 28.582L3.414 30L12 21.414V28h2V18H4zM30 3.416L28.592 2L20 10.586V4h-2v10h10v-2h-6.586L30 3.416z"},null,-1),ax=[rx];function ix(t,n){return v(),k("svg",lx,ax)}const cx={name:"carbon-minimize",render:ix},ux={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},px=e("path",{fill:"currentColor",d:"m13 24l-9-9l1.414-1.414L13 21.171L26.586 7.586L28 9L13 24z"},null,-1),dx=[px];function fx(t,n){return v(),k("svg",ux,dx)}const hx={name:"carbon-checkmark",render:fx},yx={class:"select-list"},mx={class:"title"},gx={class:"items"},vx=["onClick"],_x=Ce({__name:"SelectList",props:{modelValue:{type:[Object,String,Number]},title:{type:String},items:{type:Array}},setup(t,{emit:n}){const s=t;R(V);const o=on(s,"modelValue",n,{passive:!0});return(l,r)=>{const a=hx;return v(),k("div",yx,[e("div",mx,Bn(t.title),1),e("div",gx,[(v(!0),k(De,null,Fs(t.items,i=>(v(),k("div",{key:i.value,class:We(["item",{active:T(o)===i.value}]),onClick:()=>{var c;o.value=i.value,(c=i.onClick)==null||c.call(i)}},[I(a,{class:We(["text-green-500",{"opacity-0":T(o)!==i.value}])},null,8,["class"]),d(" "+Bn(i.display||i.value),1)],10,vx))),128))])])}}});const bx=z(_x,[["__scopeId","data-v-3f89fa11"],["__file","/home/ben/Workspace/demystifying-unicode/node_modules/@slidev/client/internals/SelectList.vue"]]),xx={class:"text-sm"},Ax=Ce({__name:"Settings",setup(t){R(V);const n=[{display:"Fit",value:0},{display:"1:1",value:1}];return(s,o)=>(v(),k("div",xx,[I(bx,{modelValue:T(Cl),"onUpdate:modelValue":o[0]||(o[0]=l=>Se(Cl)?Cl.value=l:null),title:"Scale",items:n},null,8,["modelValue"])]))}}),wx=z(Ax,[["__file","/home/ben/Workspace/demystifying-unicode/node_modules/@slidev/client/internals/Settings.vue"]]),Bx={key:0,class:"rounded-md bg-main shadow absolute bottom-10 left-0 z-20","dark:border":"~ main"},Cx=Ce({__name:"MenuButton",props:{modelValue:{default:!1},disabled:{default:!1}},setup(t,{emit:n}){const s=t;R(V);const o=on(s,"modelValue",n,{passive:!0}),l=Y();return mv(l,()=>{o.value=!1}),(r,a)=>(v(),k("div",{ref_key:"el",ref:l,class:"flex relative"},[e("button",{class:We({disabled:t.disabled}),onClick:a[0]||(a[0]=i=>o.value=!T(o))},[Wt(r.$slots,"button",{class:We({disabled:t.disabled})})],2),(v(),q(pd,null,[T(o)?(v(),k("div",Bx,[Wt(r.$slots,"menu")])):me("v-if",!0)],1024))],512))}}),kx=z(Cx,[["__file","/home/ben/Workspace/demystifying-unicode/node_modules/@slidev/client/internals/MenuButton.vue"]]),Fx={class:"w-1px opacity-10 bg-current m-1 lg:m-2"},Dx={__name:"VerticalDivider",setup(t){return R(V),(n,s)=>(v(),k("div",Fx))}},gl=z(Dx,[["__file","/home/ben/Workspace/demystifying-unicode/node_modules/@slidev/client/internals/VerticalDivider.vue"]]),Ex={render(){return[]}},Sx={class:"slidev-icon-btn"},Tx={class:"h-40px flex",p:"l-1 t-0.5 r-2",text:"sm leading-2"},$x={class:"my-auto"},Ox={class:"opacity-50"},Ux=Ce({__name:"NavControls",props:{persist:{default:!1}},setup(t){const n=t;R(V);const s=Ta.smaller("md"),{isFullscreen:o,toggle:l}=Sf,r=$(()=>qa.value?`?password=${qa.value}`:""),a=$(()=>`/presenter/${Ve.value}${r.value}`),i=$(()=>`/${Ve.value}${r.value}`),c=Y();function u(){c.value&&jn.value&&c.value.contains(jn.value)&&jn.value.blur()}const p=$(()=>n.persist?"text-$slidev-controls-foreground bg-transparent":"rounded-md bg-main shadow dark:border dark:border-gray-400 dark:border-opacity-10"),f=un(),h=un();return Nn(()=>import("./DrawingControls-a18f4361.js"),[]).then(y=>h.value=y.default),(y,m)=>{const b=cx,w=ox,A=X3,B=G3,x=q3,C=L3,F=O3,E=Yf,L=B3,O=_3,W=h3,ne=Ws("RouterLink"),ue=i3,Z=n3,ye=Q5,ve=V5;return v(),k("nav",{ref_key:"root",ref:c,class:"flex flex-col"},[e("div",{class:We(["flex flex-wrap-reverse text-xl gap-0.5 p-1 lg:gap-1 lg:p-2",p.value]),onMouseleave:u},[T(vn)?me("v-if",!0):(v(),k("button",{key:0,class:"slidev-icon-btn",onClick:m[0]||(m[0]=(...be)=>T(l)&&T(l)(...be))},[T(o)?(v(),q(b,{key:0})):(v(),q(w,{key:1}))])),e("button",{class:We(["slidev-icon-btn",{disabled:!T(BF)}]),onClick:m[1]||(m[1]=(...be)=>T(qn)&&T(qn)(...be))},[I(A)],2),e("button",{class:We(["slidev-icon-btn",{disabled:!T(wF)}]),title:"Next",onClick:m[2]||(m[2]=(...be)=>T(Wn)&&T(Wn)(...be))},[I(B)],2),T(vn)?me("v-if",!0):(v(),k("button",{key:1,class:"slidev-icon-btn",title:"Slides overview",onClick:m[3]||(m[3]=be=>T(Tf)())},[I(x)])),T(Pa)?me("v-if",!0):(v(),k("button",{key:2,class:"slidev-icon-btn",title:"Toggle dark mode",onClick:m[4]||(m[4]=be=>T(If)())},[T(Oi)?(v(),q(C,{key:0})):(v(),q(F,{key:1}))])),I(gl),T(vn)?me("v-if",!0):(v(),k(De,{key:3},[!T(xt)&&!T(s)&&f.value?(v(),k(De,{key:0},[I(T(f)),I(gl)],64)):me("v-if",!0),T(xt)?(v(),k("button",{key:1,class:"slidev-icon-btn",title:"Show presenter cursor",onClick:m[5]||(m[5]=be=>Nr.value=!T(Nr))},[T(Nr)?(v(),q(E,{key:0})):(v(),q(L,{key:1,class:"opacity-50"}))])):me("v-if",!0)],64)),(!T(Ee).drawings.presenterOnly||T(xt))&&!T(vn)?(v(),k(De,{key:4},[e("button",{class:"slidev-icon-btn relative",title:"Drawing",onClick:m[6]||(m[6]=be=>ln.value=!T(ln))},[I(O),T(ln)?(v(),k("div",{key:0,class:"absolute left-1 right-1 bottom-0 h-0.7 rounded-full",style:nt({background:T(ds).color})},null,4)):me("v-if",!0)]),I(gl)],64)):me("v-if",!0),T(vn)?me("v-if",!0):(v(),k(De,{key:5},[T(xt)?(v(),q(ne,{key:0,to:i.value,class:"slidev-icon-btn",title:"Play Mode"},{default:U(()=>[I(W)]),_:1},8,["to"])):me("v-if",!0),T(vF)?(v(),q(ne,{key:1,to:a.value,class:"slidev-icon-btn",title:"Presenter Mode"},{default:U(()=>[I(ue)]),_:1},8,["to"])):me("v-if",!0),me("v-if",!0)],64)),(v(),k(De,{key:6},[T(Ee).download?(v(),k("button",{key:0,class:"slidev-icon-btn",onClick:m[8]||(m[8]=(...be)=>T(Ha)&&T(Ha)(...be))},[I(Z)])):me("v-if",!0)],64)),!T(xt)&&T(Ee).info&&!T(vn)?(v(),k("button",{key:7,class:"slidev-icon-btn",onClick:m[9]||(m[9]=be=>wo.value=!T(wo))},[I(ye)])):me("v-if",!0),!T(xt)&&!T(vn)?(v(),q(kx,{key:8},{button:U(()=>[e("button",Sx,[I(ve)])]),menu:U(()=>[I(wx)]),_:1})):me("v-if",!0),T(vn)?me("v-if",!0):(v(),q(gl,{key:9})),e("div",Tx,[e("div",$x,[d(Bn(T(Ve))+" ",1),e("span",Ox,"/ "+Bn(T(_F)),1)])]),I(T(Ex))],34)],512)}}}),Px=z(Ux,[["__file","/home/ben/Workspace/demystifying-unicode/node_modules/@slidev/client/internals/NavControls.vue"]]),Zf={render(){return[]}},Qf={render(){return[]}},Ix={key:0,class:"absolute top-0 left-0 right-0 bottom-0 pointer-events-none text-xl"},Mx=Ce({__name:"PresenterMouse",setup(t){return R(V),(n,s)=>{const o=Yf;return T(Pr).cursor?(v(),k("div",Ix,[I(o,{class:"absolute",style:nt({left:`${T(Pr).cursor.x}%`,top:`${T(Pr).cursor.y}%`})},null,8,["style"])])):me("v-if",!0)}}}),Lx=z(Mx,[["__file","/home/ben/Workspace/demystifying-unicode/node_modules/@slidev/client/internals/PresenterMouse.vue"]]),Rx=Ce({__name:"SlidesShow",props:{context:{type:String,required:!0}},setup(t){R(V),ge(mt,()=>{var o,l;(o=mt.value)!=null&&o.meta&&mt.value.meta.preload!==!1&&(mt.value.meta.__preloaded=!0),(l=Hr.value)!=null&&l.meta&&Hr.value.meta.preload!==!1&&(Hr.value.meta.__preloaded=!0)},{immediate:!0});const n=un();Nn(()=>import("./DrawingLayer-8549ecd9.js"),[]).then(o=>n.value=o.default);const s=$(()=>Ze.filter(o=>{var l;return((l=o.meta)==null?void 0:l.__preloaded)||o===mt.value}));return(o,l)=>(v(),k(De,null,[me(" Global Bottom "),I(T(Qf)),me(" Slides "),I(u1,qe(T(FF),{id:"slideshow",tag:"div"}),{default:U(()=>[(v(!0),k(De,null,Fs(s.value,r=>{var a;return Ke((v(),q(T(Ii),{key:r.path,is:r==null?void 0:r.component,clicks:r===T(mt)?T(Rt):0,"clicks-elements":((a=r.meta)==null?void 0:a.__clicksElements)||[],"clicks-disabled":!1,class:We(T(Pi)(r)),route:r,context:o.context},null,8,["is","clicks","clicks-elements","class","route","context"])),[[Nd,r===T(mt)]])}),128))]),_:1},16),me(" Global Top "),I(T(Zf)),n.value?(v(),q(T(n),{key:0})):me("v-if",!0),T(xt)?me("v-if",!0):(v(),q(Lx,{key:1}))],64))}});const Nx=z(Rx,[["__scopeId","data-v-afb4231e"],["__file","/home/ben/Workspace/demystifying-unicode/node_modules/@slidev/client/internals/SlidesShow.vue"]]),jx=Ce({__name:"PrintStyle",setup(t){R(V);function n(s,{slots:o}){if(o.default)return tt("style",o.default())}return(s,o)=>(v(),q(n,null,{default:U(()=>[d(" @page { size: "+Bn(T(Rn))+"px "+Bn(T(Di))+"px; margin: 0px; } ",1)]),_:1}))}}),Jf=z(jx,[["__file","/home/ben/Workspace/demystifying-unicode/node_modules/@slidev/client/internals/PrintStyle.vue"]]),Wx=Ce({__name:"Play",setup(t){R(V),Bb();const n=Y();function s(r){var a;ku.value||((a=r.target)==null?void 0:a.id)==="slide-container"&&(r.screenX/window.innerWidth>.6?Wn():qn())}DF(n);const o=$(()=>U8.value||ku.value);un();const l=un();return Nn(()=>import("./DrawingControls-a18f4361.js"),[]).then(r=>l.value=r.default),(r,a)=>(v(),k(De,null,[T(An)?(v(),q(Jf,{key:0})):me("v-if",!0),e("div",{id:"page-root",ref_key:"root",ref:n,class:"grid grid-cols-[1fr_max-content]",style:nt(T(Ei))},[I(Lf,{class:"w-full h-full",style:nt({background:"var(--slidev-slide-container-background, black)"}),width:T(An)?T(xs).width.value:void 0,scale:T(Cl),onPointerdown:s},{default:U(()=>[I(Nx,{context:"slide"})]),controls:U(()=>[e("div",{class:We(["absolute bottom-0 left-0 transition duration-300 opacity-0 hover:opacity-100",[o.value?"opacity-100 right-0":"opacity-0 p-2",T(Lo)?"pointer-events-none":""]])},[I(Px,{class:"m-auto",persist:o.value},null,8,["persist"])],2),!T(Ee).drawings.presenterOnly&&!T(vn)&&l.value?(v(),q(T(l),{key:0,class:"ml-0"})):me("v-if",!0)]),_:1},8,["style","width","scale"]),me("v-if",!0)],4),I(N5)],64))}}),qx=z(Wx,[["__file","/home/ben/Workspace/demystifying-unicode/node_modules/@slidev/client/internals/Play.vue"]]);/*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT */function Xf(t){return typeof t>"u"||t===null}function Hx(t){return typeof t=="object"&&t!==null}function Vx(t){return Array.isArray(t)?t:Xf(t)?[]:[t]}function zx(t,n){var s,o,l,r;if(n)for(r=Object.keys(n),s=0,o=r.length;s<o;s+=1)l=r[s],t[l]=n[l];return t}function Kx(t,n){var s="",o;for(o=0;o<n;o+=1)s+=t;return s}function Gx(t){return t===0&&Number.NEGATIVE_INFINITY===1/t}var Yx=Xf,Zx=Hx,Qx=Vx,Jx=Kx,Xx=Gx,eA=zx,Li={isNothing:Yx,isObject:Zx,toArray:Qx,repeat:Jx,isNegativeZero:Xx,extend:eA};function eh(t,n){var s="",o=t.reason||"(unknown reason)";return t.mark?(t.mark.name&&(s+='in "'+t.mark.name+'" '),s+="("+(t.mark.line+1)+":"+(t.mark.column+1)+")",!n&&t.mark.snippet&&(s+=`

`+t.mark.snippet),o+" "+s):o}function No(t,n){Error.call(this),this.name="YAMLException",this.reason=t,this.mark=n,this.message=eh(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}No.prototype=Object.create(Error.prototype);No.prototype.constructor=No;No.prototype.toString=function(n){return this.name+": "+eh(this,n)};var us=No,tA=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],nA=["scalar","sequence","mapping"];function sA(t){var n={};return t!==null&&Object.keys(t).forEach(function(s){t[s].forEach(function(o){n[String(o)]=s})}),n}function oA(t,n){if(n=n||{},Object.keys(n).forEach(function(s){if(tA.indexOf(s)===-1)throw new us('Unknown option "'+s+'" is met in definition of "'+t+'" YAML type.')}),this.options=n,this.tag=t,this.kind=n.kind||null,this.resolve=n.resolve||function(){return!0},this.construct=n.construct||function(s){return s},this.instanceOf=n.instanceOf||null,this.predicate=n.predicate||null,this.represent=n.represent||null,this.representName=n.representName||null,this.defaultStyle=n.defaultStyle||null,this.multi=n.multi||!1,this.styleAliases=sA(n.styleAliases||null),nA.indexOf(this.kind)===-1)throw new us('Unknown kind "'+this.kind+'" is specified for "'+t+'" YAML type.')}var pt=oA;function qu(t,n){var s=[];return t[n].forEach(function(o){var l=s.length;s.forEach(function(r,a){r.tag===o.tag&&r.kind===o.kind&&r.multi===o.multi&&(l=a)}),s[l]=o}),s}function lA(){var t={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}},n,s;function o(l){l.multi?(t.multi[l.kind].push(l),t.multi.fallback.push(l)):t[l.kind][l.tag]=t.fallback[l.tag]=l}for(n=0,s=arguments.length;n<s;n+=1)arguments[n].forEach(o);return t}function Wa(t){return this.extend(t)}Wa.prototype.extend=function(n){var s=[],o=[];if(n instanceof pt)o.push(n);else if(Array.isArray(n))o=o.concat(n);else if(n&&(Array.isArray(n.implicit)||Array.isArray(n.explicit)))n.implicit&&(s=s.concat(n.implicit)),n.explicit&&(o=o.concat(n.explicit));else throw new us("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");s.forEach(function(r){if(!(r instanceof pt))throw new us("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(r.loadKind&&r.loadKind!=="scalar")throw new us("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(r.multi)throw new us("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),o.forEach(function(r){if(!(r instanceof pt))throw new us("Specified list of YAML types (or a single Type object) contains a non-Type object.")});var l=Object.create(Wa.prototype);return l.implicit=(this.implicit||[]).concat(s),l.explicit=(this.explicit||[]).concat(o),l.compiledImplicit=qu(l,"implicit"),l.compiledExplicit=qu(l,"explicit"),l.compiledTypeMap=lA(l.compiledImplicit,l.compiledExplicit),l};var rA=Wa,aA=new pt("tag:yaml.org,2002:str",{kind:"scalar",construct:function(t){return t!==null?t:""}}),iA=new pt("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(t){return t!==null?t:[]}}),cA=new pt("tag:yaml.org,2002:map",{kind:"mapping",construct:function(t){return t!==null?t:{}}}),uA=new rA({explicit:[aA,iA,cA]});function pA(t){if(t===null)return!0;var n=t.length;return n===1&&t==="~"||n===4&&(t==="null"||t==="Null"||t==="NULL")}function dA(){return null}function fA(t){return t===null}var hA=new pt("tag:yaml.org,2002:null",{kind:"scalar",resolve:pA,construct:dA,predicate:fA,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"});function yA(t){if(t===null)return!1;var n=t.length;return n===4&&(t==="true"||t==="True"||t==="TRUE")||n===5&&(t==="false"||t==="False"||t==="FALSE")}function mA(t){return t==="true"||t==="True"||t==="TRUE"}function gA(t){return Object.prototype.toString.call(t)==="[object Boolean]"}var vA=new pt("tag:yaml.org,2002:bool",{kind:"scalar",resolve:yA,construct:mA,predicate:gA,represent:{lowercase:function(t){return t?"true":"false"},uppercase:function(t){return t?"TRUE":"FALSE"},camelcase:function(t){return t?"True":"False"}},defaultStyle:"lowercase"});function _A(t){return 48<=t&&t<=57||65<=t&&t<=70||97<=t&&t<=102}function bA(t){return 48<=t&&t<=55}function xA(t){return 48<=t&&t<=57}function AA(t){if(t===null)return!1;var n=t.length,s=0,o=!1,l;if(!n)return!1;if(l=t[s],(l==="-"||l==="+")&&(l=t[++s]),l==="0"){if(s+1===n)return!0;if(l=t[++s],l==="b"){for(s++;s<n;s++)if(l=t[s],l!=="_"){if(l!=="0"&&l!=="1")return!1;o=!0}return o&&l!=="_"}if(l==="x"){for(s++;s<n;s++)if(l=t[s],l!=="_"){if(!_A(t.charCodeAt(s)))return!1;o=!0}return o&&l!=="_"}if(l==="o"){for(s++;s<n;s++)if(l=t[s],l!=="_"){if(!bA(t.charCodeAt(s)))return!1;o=!0}return o&&l!=="_"}}if(l==="_")return!1;for(;s<n;s++)if(l=t[s],l!=="_"){if(!xA(t.charCodeAt(s)))return!1;o=!0}return!(!o||l==="_")}function wA(t){var n=t,s=1,o;if(n.indexOf("_")!==-1&&(n=n.replace(/_/g,"")),o=n[0],(o==="-"||o==="+")&&(o==="-"&&(s=-1),n=n.slice(1),o=n[0]),n==="0")return 0;if(o==="0"){if(n[1]==="b")return s*parseInt(n.slice(2),2);if(n[1]==="x")return s*parseInt(n.slice(2),16);if(n[1]==="o")return s*parseInt(n.slice(2),8)}return s*parseInt(n,10)}function BA(t){return Object.prototype.toString.call(t)==="[object Number]"&&t%1===0&&!Li.isNegativeZero(t)}var CA=new pt("tag:yaml.org,2002:int",{kind:"scalar",resolve:AA,construct:wA,predicate:BA,represent:{binary:function(t){return t>=0?"0b"+t.toString(2):"-0b"+t.toString(2).slice(1)},octal:function(t){return t>=0?"0o"+t.toString(8):"-0o"+t.toString(8).slice(1)},decimal:function(t){return t.toString(10)},hexadecimal:function(t){return t>=0?"0x"+t.toString(16).toUpperCase():"-0x"+t.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),kA=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function FA(t){return!(t===null||!kA.test(t)||t[t.length-1]==="_")}function DA(t){var n,s;return n=t.replace(/_/g,"").toLowerCase(),s=n[0]==="-"?-1:1,"+-".indexOf(n[0])>=0&&(n=n.slice(1)),n===".inf"?s===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:n===".nan"?NaN:s*parseFloat(n,10)}var EA=/^[-+]?[0-9]+e/;function SA(t,n){var s;if(isNaN(t))switch(n){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===t)switch(n){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===t)switch(n){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(Li.isNegativeZero(t))return"-0.0";return s=t.toString(10),EA.test(s)?s.replace("e",".e"):s}function TA(t){return Object.prototype.toString.call(t)==="[object Number]"&&(t%1!==0||Li.isNegativeZero(t))}var $A=new pt("tag:yaml.org,2002:float",{kind:"scalar",resolve:FA,construct:DA,predicate:TA,represent:SA,defaultStyle:"lowercase"}),OA=uA.extend({implicit:[hA,vA,CA,$A]}),UA=OA,th=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),nh=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function PA(t){return t===null?!1:th.exec(t)!==null||nh.exec(t)!==null}function IA(t){var n,s,o,l,r,a,i,c=0,u=null,p,f,h;if(n=th.exec(t),n===null&&(n=nh.exec(t)),n===null)throw new Error("Date resolve error");if(s=+n[1],o=+n[2]-1,l=+n[3],!n[4])return new Date(Date.UTC(s,o,l));if(r=+n[4],a=+n[5],i=+n[6],n[7]){for(c=n[7].slice(0,3);c.length<3;)c+="0";c=+c}return n[9]&&(p=+n[10],f=+(n[11]||0),u=(p*60+f)*6e4,n[9]==="-"&&(u=-u)),h=new Date(Date.UTC(s,o,l,r,a,i,c)),u&&h.setTime(h.getTime()-u),h}function MA(t){return t.toISOString()}var LA=new pt("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:PA,construct:IA,instanceOf:Date,represent:MA});function RA(t){return t==="<<"||t===null}var NA=new pt("tag:yaml.org,2002:merge",{kind:"scalar",resolve:RA}),Ri=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function jA(t){if(t===null)return!1;var n,s,o=0,l=t.length,r=Ri;for(s=0;s<l;s++)if(n=r.indexOf(t.charAt(s)),!(n>64)){if(n<0)return!1;o+=6}return o%8===0}function WA(t){var n,s,o=t.replace(/[\r\n=]/g,""),l=o.length,r=Ri,a=0,i=[];for(n=0;n<l;n++)n%4===0&&n&&(i.push(a>>16&255),i.push(a>>8&255),i.push(a&255)),a=a<<6|r.indexOf(o.charAt(n));return s=l%4*6,s===0?(i.push(a>>16&255),i.push(a>>8&255),i.push(a&255)):s===18?(i.push(a>>10&255),i.push(a>>2&255)):s===12&&i.push(a>>4&255),new Uint8Array(i)}function qA(t){var n="",s=0,o,l,r=t.length,a=Ri;for(o=0;o<r;o++)o%3===0&&o&&(n+=a[s>>18&63],n+=a[s>>12&63],n+=a[s>>6&63],n+=a[s&63]),s=(s<<8)+t[o];return l=r%3,l===0?(n+=a[s>>18&63],n+=a[s>>12&63],n+=a[s>>6&63],n+=a[s&63]):l===2?(n+=a[s>>10&63],n+=a[s>>4&63],n+=a[s<<2&63],n+=a[64]):l===1&&(n+=a[s>>2&63],n+=a[s<<4&63],n+=a[64],n+=a[64]),n}function HA(t){return Object.prototype.toString.call(t)==="[object Uint8Array]"}var VA=new pt("tag:yaml.org,2002:binary",{kind:"scalar",resolve:jA,construct:WA,predicate:HA,represent:qA}),zA=Object.prototype.hasOwnProperty,KA=Object.prototype.toString;function GA(t){if(t===null)return!0;var n=[],s,o,l,r,a,i=t;for(s=0,o=i.length;s<o;s+=1){if(l=i[s],a=!1,KA.call(l)!=="[object Object]")return!1;for(r in l)if(zA.call(l,r))if(!a)a=!0;else return!1;if(!a)return!1;if(n.indexOf(r)===-1)n.push(r);else return!1}return!0}function YA(t){return t!==null?t:[]}var ZA=new pt("tag:yaml.org,2002:omap",{kind:"sequence",resolve:GA,construct:YA}),QA=Object.prototype.toString;function JA(t){if(t===null)return!0;var n,s,o,l,r,a=t;for(r=new Array(a.length),n=0,s=a.length;n<s;n+=1){if(o=a[n],QA.call(o)!=="[object Object]"||(l=Object.keys(o),l.length!==1))return!1;r[n]=[l[0],o[l[0]]]}return!0}function XA(t){if(t===null)return[];var n,s,o,l,r,a=t;for(r=new Array(a.length),n=0,s=a.length;n<s;n+=1)o=a[n],l=Object.keys(o),r[n]=[l[0],o[l[0]]];return r}var ew=new pt("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:JA,construct:XA}),tw=Object.prototype.hasOwnProperty;function nw(t){if(t===null)return!0;var n,s=t;for(n in s)if(tw.call(s,n)&&s[n]!==null)return!1;return!0}function sw(t){return t!==null?t:{}}var ow=new pt("tag:yaml.org,2002:set",{kind:"mapping",resolve:nw,construct:sw});UA.extend({implicit:[LA,NA],explicit:[VA,ZA,ew,ow]});function Hu(t){return t===48?"\0":t===97?"\x07":t===98?"\b":t===116||t===9?"	":t===110?`
`:t===118?"\v":t===102?"\f":t===114?"\r":t===101?"\x1B":t===32?" ":t===34?'"':t===47?"/":t===92?"\\":t===78?"":t===95?" ":t===76?"\u2028":t===80?"\u2029":""}var lw=new Array(256),rw=new Array(256);for(var Us=0;Us<256;Us++)lw[Us]=Hu(Us)?1:0,rw[Us]=Hu(Us);function aw(t){return Array.from(new Set(t))}function Vu(...t){let n,s,o;t.length===1?(n=0,o=1,[s]=t):[n,s,o=1]=t;const l=[];let r=n;for(;r<s;)l.push(r),r+=o||1;return l}function sh(t,n){if(!n||n==="all"||n==="*")return Vu(1,t+1);const s=[];for(const o of n.split(/[,;]/g))if(!o.includes("-"))s.push(+o);else{const[l,r]=o.split("-",2);s.push(...Vu(+l,r?+r+1:t+1))}return aw(s).filter(o=>o<=t).sort((o,l)=>o-l)}function oh(t){const n=$(()=>t.value.path),s=$(()=>Ze.length),o=$(()=>Number.parseInt(n.value.split(/\//g).slice(-1)[0])||1),l=$(()=>vr(o.value)),r=$(()=>Ze.find(h=>h.path===`${o.value}`)),a=$(()=>{var h,y,m;return(m=(y=(h=r.value)==null?void 0:h.meta)==null?void 0:y.slide)==null?void 0:m.id}),i=$(()=>{var h,y;return((y=(h=r.value)==null?void 0:h.meta)==null?void 0:y.layout)||(o.value===1?"cover":"default")}),c=$(()=>Ze.find(h=>h.path===`${Math.min(Ze.length,o.value+1)}`)),u=$(()=>Ze.filter(h=>{var y,m;return(m=(y=h.meta)==null?void 0:y.slide)==null?void 0:m.title}).reduce((h,y)=>(ji(h,y),h),[])),p=$(()=>Wi(u.value,r.value)),f=$(()=>qi(p.value));return{route:t,path:n,total:s,currentPage:o,currentPath:l,currentRoute:r,currentSlideId:a,currentLayout:i,nextRoute:c,rawTree:u,treeWithActiveStatuses:p,tree:f,downloadPDF:Ha,next:Wn,nextSlide:jo,openInEditor:EF,prev:qn,prevSlide:Wo}}function lh(t,n,s){const o=Y(0);it(()=>{wt.afterEach(async()=>{await it(),o.value+=1})});const l=$(()=>{var c,u;return o.value,((u=(c=n.value)==null?void 0:c.meta)==null?void 0:u.__clicksElements)||[]}),r=$(()=>{var c,u;return+(((u=(c=n.value)==null?void 0:c.meta)==null?void 0:u.clicks)??l.value.length)}),a=$(()=>s.value<Ze.length-1||t.value<r.value),i=$(()=>s.value>1||t.value>0);return{clicks:t,clicksElements:l,clicksTotal:r,hasNext:a,hasPrev:i}}const iw=["id"],cw=Ce({__name:"PrintSlideClick",props:{clicks:{type:Number,required:!0},clicksElements:{type:Array,required:!1},nav:{type:null,required:!0},route:{type:null,required:!0}},emits:["update:clicksElements"],setup(t,{emit:n}){const s=t,o=on(s,"clicksElements",n),l=$(()=>({height:`${Di}px`,width:`${Rn}px`})),r=un();Nn(()=>Promise.resolve().then(()=>Ob),void 0).then(u=>r.value=u.default);const a=$(()=>s.clicks),i=lh(a,s.nav.currentRoute,s.nav.currentPage),c=$(()=>`${s.route.path.toString().padStart(3,"0")}-${(a.value+1).toString().padStart(2,"0")}`);return Dt(V,He({nav:{...s.nav,...i},configs:Ee,themeConfigs:$(()=>Ee.themeConfig)})),(u,p)=>{var f;return v(),k("div",{id:c.value,class:"print-slide-container",style:nt(l.value)},[I(T(Qf)),I(T(Ii),{is:(f=u.route)==null?void 0:f.component,"clicks-elements":T(o),"onUpdate:clicksElements":p[0]||(p[0]=h=>Se(o)?o.value=h:null),clicks:a.value,"clicks-disabled":!1,class:We(T(Pi)(u.route)),route:u.route},null,8,["is","clicks-elements","clicks","class","route"]),r.value?(v(),q(T(r),{key:0,page:+u.route.path},null,8,["page"])):me("v-if",!0),I(T(Zf))],12,iw)}}}),zu=z(cw,[["__file","/home/ben/Workspace/demystifying-unicode/node_modules/@slidev/client/internals/PrintSlideClick.vue"]]),uw=Ce({__name:"PrintSlide",props:{route:{type:null,required:!0}},setup(t){var r;const n=t;R(V);const s=Y(((r=n.route.meta)==null?void 0:r.__clicksElements)||[]),o=$(()=>n.route),l=oh(o);return(a,i)=>(v(),k(De,null,[I(zu,{"clicks-elements":s.value,"onUpdate:clicksElements":i[0]||(i[0]=c=>s.value=c),clicks:0,nav:T(l),route:o.value},null,8,["clicks-elements","nav","route"]),T(Bo)?me("v-if",!0):(v(!0),k(De,{key:0},Fs(s.value.length,c=>(v(),q(zu,{key:c,clicks:c,nav:T(l),route:o.value},null,8,["clicks","nav","route"]))),128))],64))}}),pw=z(uw,[["__file","/home/ben/Workspace/demystifying-unicode/node_modules/@slidev/client/internals/PrintSlide.vue"]]),dw={id:"print-content"},fw=Ce({__name:"PrintContainer",props:{width:{type:Number,required:!0}},setup(t){const n=t;R(V);const s=$(()=>n.width),o=$(()=>n.width/Ln),l=$(()=>s.value/o.value),r=$(()=>l.value<Ln?s.value/Rn:o.value*Ln/Rn);let a=Ze;qt.value.query.range&&(a=sh(a.length,qt.value.query.range).map(u=>a[u-1]));const i=$(()=>({"select-none":!Ee.selectable}));return Dt(Qd,r),(c,u)=>(v(),k("div",{id:"print-container",class:We(i.value)},[e("div",dw,[(v(!0),k(De,null,Fs(T(a),p=>(v(),q(pw,{key:p.path,route:p},null,8,["route"]))),128))]),Wt(c.$slots,"controls")],2))}});const hw=z(fw,[["__file","/home/ben/Workspace/demystifying-unicode/node_modules/@slidev/client/internals/PrintContainer.vue"]]),yw=Ce({__name:"Print",setup(t){return R(V),ks(()=>{An?document.body.parentNode.classList.add("print"):document.body.parentNode.classList.remove("print")}),(n,s)=>(v(),k(De,null,[T(An)?(v(),q(Jf,{key:0})):me("v-if",!0),e("div",{id:"page-root",class:"grid grid-cols-[1fr_max-content]",style:nt(T(Ei))},[I(hw,{class:"w-full h-full",style:nt({background:"var(--slidev-slide-container-background, black)"}),width:T(xs).width.value},null,8,["style","width"])],4)],64))}});const mw=z(yw,[["__file","/home/ben/Workspace/demystifying-unicode/node_modules/@slidev/client/internals/Print.vue"]]);function Ku(t){return t.startsWith("/")?"/demystifying-unicode/"+t.slice(1):t}function gw(t,n=!1){const s=t&&["#","rgb","hsl"].some(l=>t.indexOf(l)===0),o={background:s?t:void 0,color:t&&!s?"white":void 0,backgroundImage:s?void 0:t?n?`linear-gradient(#0005, #0008), url(${Ku(t)})`:`url("${Ku(t)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return o.background||delete o.background,o}const vw={class:"my-auto w-full"},_w=Ce({__name:"cover",props:{background:{default:"https://source.unsplash.com/collection/94734566/1920x1080"}},setup(t){const n=t;R(V);const s=$(()=>gw(n.background,!0));return(o,l)=>(v(),k("div",{class:"slidev-layout cover text-center",style:nt(s.value)},[e("div",vw,[Wt(o.$slots,"default")])],4))}}),Gs=z(_w,[["__file","/home/ben/Workspace/demystifying-unicode/node_modules/@slidev/theme-seriph/layouts/cover.vue"]]),bw=e("h1",null,"Demystifying Unicode",-1),xw=e("p",null,"Unicode, Rust, quirks, and way too much detail.",-1),Aw={__name:"1",setup(t){const n={theme:"seriph",class:"text-center",highlighter:"shiki",lineNumbers:!0,info:`## Unicode, Rust, quirks, and way too much detail.
`,drawings:{persist:!1},transition:"slide-left",hideInToc:!0,background:"/DSC09355.jpg"};return R(V),(s,o)=>(v(),q(Gs,le(oe(n)),{default:U(()=>[bw,xw]),_:1},16))}},ww=z(Aw,[["__file","/@slidev/slides/1.md"]]),Bw=["href","innerHTML"],Cw=["href"],kw=Ce({__name:"Link",props:{to:{type:[Number,String],required:!0},title:{type:String,required:!1}},setup(t){return R(V),(n,s)=>{const o=Ws("RouterLink");return!T(An)&&n.title?(v(),q(o,{key:0,to:String(n.to),onClick:s[0]||(s[0]=l=>l.target.blur()),innerHTML:n.title},null,8,["to","innerHTML"])):!T(An)&&!n.title?(v(),q(o,{key:1,to:String(n.to),onClick:s[1]||(s[1]=l=>l.target.blur())},{default:U(()=>[Wt(n.$slots,"default")]),_:3},8,["to"])):T(An)&&n.title?(v(),k("a",{key:2,href:`#${n.to}`,innerHTML:n.title},null,8,Bw)):(v(),k("a",{key:3,href:`#${n.to}`},[Wt(n.$slots,"default")],8,Cw))}}}),Fw=z(kw,[["__file","/home/ben/Workspace/demystifying-unicode/node_modules/@slidev/client/builtin/Link.vue"]]),Dw={key:0},Ew={key:1},Sw={key:2},Tw={key:3},$w={key:4},Ow={key:5},Uw={key:6},Pw={key:7},Iw={key:8},Mw={key:9},Lw={key:10},Rw={key:11},Nw={key:12},jw={key:13},Ww={key:14},qw={key:15},Hw={key:16},Vw={key:17},zw={key:18},Kw={key:19},Gw={key:20},Yw={key:21},Zw={key:22},Qw={key:23},Jw={key:24},Xw={key:25},e6={key:26},t6={key:27},n6={key:28},s6={key:29},o6={key:30},l6={key:31},r6={key:32},a6={key:33},i6=e("code",null,"str",-1),c6=e("code",null,"[u8]",-1),u6=e("strong",null,"which contents are always valid UTF-8",-1),p6={key:34},d6={key:35},f6={key:36},h6={key:37},y6={key:38},m6={key:39},g6={key:40},v6={key:41},_6={key:42},b6={key:43},x6={key:44},A6={key:45},w6={key:46},B6={key:47},C6={key:48},k6={key:49},F6={key:50},D6={key:51},E6={key:52},S6={key:53},T6={key:54},$6={key:55},O6={key:56},U6={key:57},P6={key:58},I6=Ce({__name:"titles",props:{no:{type:[Number,String],required:!0}},setup(t){return(n,s)=>(v(),k("div",null,[+n.no==1?(v(),k("p",Dw,"Demystifying Unicode")):+n.no==2?(v(),k("p",Ew,"Table of contents")):+n.no==3?(v(),k("p",Sw,"History")):+n.no==4?(v(),k("p",Tw,"A bit (🥁鈸) of fundamentals")):+n.no==5?(v(),k("p",$w,"Abstraction")):+n.no==6?(v(),k("p",Ow,"Abstract? ABSTRACT!")):+n.no==7?(v(),k("p",Uw,"undefined")):+n.no==8?(v(),k("p",Pw,"Competing standards")):+n.no==9?(v(),k("p",Iw,"About ol ASCII - QQ")):+n.no==10?(v(),k("p",Mw,"How many characters is enough charcters?")):+n.no==11?(v(),k("p",Lw,"Summary")):+n.no==12?(v(),k("p",Rw,"Unicode")):+n.no==13?(v(),k("p",Nw,"Why Unicode?")):+n.no==14?(v(),k("p",jw,"undefined")):+n.no==15?(v(),k("p",Ww,"Unicode to the resque")):+n.no==16?(v(),k("p",qw,"New Terminology")):+n.no==17?(v(),k("p",Hw,"undefined")):+n.no==18?(v(),k("p",Vw,"undefined")):+n.no==19?(v(),k("p",zw,"Glyphemes")):+n.no==20?(v(),k("p",Kw,"What is the difference between")):+n.no==21?(v(),k("p",Gw,"undefined")):+n.no==22?(v(),k("p",Yw,"Encoding")):+n.no==23?(v(),k("p",Zw,"undefined")):+n.no==24?(v(),k("p",Qw,"Woo options!")):+n.no==25?(v(),k("p",Jw,"UTF-8 is the king of the web")):+n.no==26?(v(),k("p",Xw,"Nuts and bolts of UTF-8")):+n.no==27?(v(),k("p",e6,"Let’s encode!")):+n.no==28?(v(),k("p",t6,"Let’s encode!")):+n.no==29?(v(),k("p",n6,"Summary")):+n.no==30?(v(),k("p",s6,"Unicode in Rust")):+n.no==31?(v(),k("p",o6,"undefined")):+n.no==32?(v(),k("p",l6,"undefined")):+n.no==33?(v(),k("p",r6,"String slices")):+n.no==34?(v(),k("p",a6,[d("A String slice ("),i6,d(") is just a slice of bytes ("),c6,d("), "),u6,d(".")])):+n.no==35?(v(),k("p",p6,"Lets make some strings")):+n.no==36?(v(),k("p",d6,"Creating strings")):+n.no==37?(v(),k("p",f6,"Creating Strings")):+n.no==38?(v(),k("p",h6,"Creating strings")):+n.no==39?(v(),k("p",y6,"See, creating strings is easy!")):+n.no==40?(v(),k("p",m6,"UTF8Error")):+n.no==41?(v(),k("p",g6,"Invalid UTF-8")):+n.no==42?(v(),k("p",v6,"Where Enforced UTF-8 can go wrong")):+n.no==43?(v(),k("p",_6,"Reading and Writing")):+n.no==44?(v(),k("p",b6,"Reading and Writing")):+n.no==45?(v(),k("p",x6,"Read and Writing - JSON")):+n.no==46?(v(),k("p",A6,"Conventially UTF-8 vs. Gauranteed")):+n.no==47?(v(),k("p",w6,"Summary")):+n.no==48?(v(),k("p",B6,"Quirks")):+n.no==49?(v(),k("p",C6,"Can we just know which UTF Encoding by looking at the bytes?")):+n.no==50?(v(),k("p",k6,"undefined")):+n.no==51?(v(),k("p",F6,"Streets!")):+n.no==52?(v(),k("p",D6,"Casemapping!")):+n.no==53?(v(),k("p",E6,"Composition")):+n.no==54?(v(),k("p",S6,"Emoji Composition")):+n.no==55?(v(),k("p",T6,"Emoji Composition")):+n.no==56?(v(),k("p",$6,"Emoji Composition")):+n.no==57?(v(),k("p",O6,"Unicode Tags")):+n.no==58?(v(),k("p",U6,"Summary")):+n.no==59?(v(),k("p",P6,"THE END")):me("v-if",!0)]))}}),M6=z(I6,[["__file","/@slidev/titles.md"]]),L6=Ce({__name:"TocList",props:{level:{type:Number,required:!0,default:1},list:{type:Array,required:!0},listClass:{type:[String,Array],required:!1}},setup(t){const n=t;R(V);const s=$(()=>[...Jd(n.listClass||[]),"slidev-toc-list",`slidev-toc-list-level-${n.level}`]);return(o,l)=>{const r=Fw,a=Ws("TocList",!0);return o.list&&o.list.length>0?(v(),k("ol",{key:0,class:We(s.value)},[(v(!0),k(De,null,Fs(o.list,i=>(v(),k("li",{key:i.path,class:We(["slidev-toc-item",[{"slidev-toc-item-active":i.active},{"slidev-toc-item-parent-active":i.activeParent}]])},[I(r,{to:i.path},{default:U(()=>[I(T(M6),{no:i.path},null,8,["no"])]),_:2},1032,["to"]),i.children.length>0?(v(),q(a,{key:0,level:o.level+1,list:i.children,"list-class":o.listClass},null,8,["level","list","list-class"])):me("v-if",!0)],2))),128))],2)):me("v-if",!0)}}});const R6=z(L6,[["__file","/home/ben/Workspace/demystifying-unicode/node_modules/@slidev/client/builtin/TocList.vue"]]),N6=Ce({__name:"Toc",props:{columns:{type:[String,Number],required:!1,default:1},listClass:{type:[String,Array],required:!1,default:""},maxDepth:{type:[String,Number],required:!1,default:1/0},minDepth:{type:[String,Number],required:!1,default:1},mode:{type:String,required:!1,default:"all"}},setup(t){const n=t,s=R(V);function o(i,c=1){if(c>Number(n.maxDepth))return[];if(c<Number(n.minDepth)){const u=i.find(p=>p.active||p.activeParent);return u?o(u.children,c+1):[]}return i.map(u=>({...u,children:o(u.children,c+1)}))}function l(i){return i.filter(c=>c.active||c.activeParent||c.hasActiveParent).map(c=>({...c,children:l(c.children)}))}function r(i){const c=i.some(u=>u.active||u.activeParent||u.hasActiveParent);return i.filter(()=>c).map(u=>({...u,children:r(u.children)}))}const a=$(()=>{const i=s==null?void 0:s.nav.tree;if(!i)return[];let c=o(i);return n.mode==="onlyCurrentTree"?c=l(c):n.mode==="onlySiblings"&&(c=r(c)),c});return(i,c)=>{const u=R6;return v(),k("div",{class:"slidev-toc",style:nt(`column-count:${i.columns}`)},[I(u,{level:1,list:a.value,"list-class":i.listClass},null,8,["list","list-class"])],4)}}}),j6=z(N6,[["__file","/home/ben/Workspace/demystifying-unicode/node_modules/@slidev/client/builtin/Toc.vue"]]),W6={class:"slidev-layout default"},q6={__name:"default",setup(t){return R(V),(n,s)=>(v(),k("div",W6,[Wt(n.$slots,"default")]))}},Te=z(q6,[["__file","/home/ben/Workspace/demystifying-unicode/node_modules/@slidev/client/layouts/default.vue"]]),H6=e("h1",null,"Table of contents",-1),V6={__name:"2",setup(t){const n={hideInToc:!0};return R(V),(s,o)=>{const l=j6;return v(),q(Te,le(oe(n)),{default:U(()=>[H6,I(l,{maxDepth:"1"})]),_:1},16)}}},z6=z(V6,[["__file","/@slidev/slides/2.md"]]),K6=e("h1",null,"History",-1),G6={__name:"3",setup(t){const n={layout:"cover",background:"/DSC09284.jpg",hide:!1,srcSequence:"./pages/01-history.md"};return R(V),(s,o)=>(v(),q(Gs,le(oe(n)),{default:U(()=>[K6]),_:1},16))}},Y6=z(G6,[["__file","/@slidev/slides/3.md"]]),Gu=["ul","ol"],Bt=Ce({props:{depth:{type:[Number,String],default:1},every:{type:Number,default:1},at:{type:[Number,String],default:null},hide:{type:Boolean,default:!1},fade:{type:Boolean,default:!1}},render(){var i,c;const t=jt("click"),n=jt("after"),s=(u,p,f)=>Ke(u,[[p,f,"",{hide:this.hide,fade:this.fade}]]);let o=(c=(i=this.$slots).default)==null?void 0:c.call(i);if(!o)return;o=Jd(o);const l=(u,p=1)=>{let f=0;return[u.map(y=>{if(!pn(y))return y;if(Gu.includes(y.type)&&Array.isArray(y.children)){const[m,b]=a(y.children,p+1);return f+=b,tt(y,{},[m])}return tt(y)}),f]};let r=0;const a=(u,p=1)=>{let f=0;return[u.map(y=>{if(!pn(y)||y.type===ut)return y;const m=f%this.every===0?t:n;let b,w=0;if(p<+this.depth&&Array.isArray(y.children)){const[B,x]=l(y.children,p);b=tt(y,{},[B]),w=x,f+=x+1}else b=tt(y),f++;const A=this.at!=null?Number(this.at)+Math.floor(r/this.every)+p:(p-1-w).toString();return r++,s(b,m,typeof A=="string"&&!A.startsWith("-")?`+${A}`:A)}),f]};return o.length===1&&Gu.includes(o[0].type)&&Array.isArray(o[0].children)?tt(o[0],{},[a(o[0].children)[0]]):a(o)[0]}}),Z6=e("h2",null,"A bit (🥁鈸) of fundamentals",-1),Q6=e("div",{class:"mt-5"},[e("blockquote",null,[e("p",null,"Computers represent information as 1’s and 0’s"),e("ul",null,[e("li",null,"Literally everyone, since forever")])])],-1),J6=e("p",null,"Multiple bits can be put together to make different structures.",-1),X6=e("p",null,"Those structures are inherently computer orientated - not human orientated:",-1),eB=e("ul",null,[e("li",null,[e("p",null,"8 bits makes a byte")]),e("li",null,[e("p",null,"4/8 bytes makes a word on 32/64 bit architectures respectively"),e("p",null,[e("sup",null,'(last you’ll heard of "words" in this presentation)')])])],-1),tB={__name:"4",setup(t){const n={hide:!1,srcSequence:"./pages/01-history.md"};return R(V),(s,o)=>{const l=Bt;return v(),q(Te,le(oe(n)),{default:U(()=>[Z6,Q6,I(l,null,{default:U(()=>[J6,X6,eB]),_:1})]),_:1},16)}}},nB=z(tB,[["__file","/@slidev/slides/4.md"]]),ot=Ce({props:{at:{type:[Number,String],default:null},hide:{type:Boolean,default:!1},fade:{type:Boolean,default:!1}},render(){return I(Bt,{every:99999,at:this.at,hide:this.hide,fade:this.fade},{default:this.$slots.default})}}),sB=e("h2",null,"Abstraction",-1),oB=e("div",{class:"mt-5"},[e("blockquote",null,[e("p",null,"Let’s make an abstraction so we can understand things better"),e("ul",null,[e("li",null,"Literally every developer, since forever")])])],-1),lB=e("p",null,[e("code",null,"C"),d(" abstracted things a little further:")],-1),rB=e("ul",null,[e("li",null,[e("p",null,[e("code",null,"bool"),d(" is a 1 bit")])]),e("li",null,[e("p",null,[e("code",null,"char"),d(" is a 8 bits")])]),e("li",null,[e("p",null,[e("code",null,"int"),d(" is ambiguous")]),e("p",null,[d('More common "nowadays": '),e("code",null,"uint8_t"),d(", "),e("code",null,"uint32_t"),d(", "),e("code",null,"int8_t"),d(", etc")])]),e("li",null,[e("p",null,[e("code",null,"long"),d(" also ambiguous, but >= "),e("code",null,"int")])])],-1),aB=e("p",null,[d("But - what really "),e("strong",null,"is"),d(" a "),e("code",null,"char"),d("?")],-1),iB=e("p",null,"And what really are characters?",-1),cB={__name:"5",setup(t){const n={hide:!1,srcSequence:"./pages/01-history.md"};return R(V),(s,o)=>{const l=Bt,r=ot;return v(),q(Te,le(oe(n)),{default:U(()=>[sB,oB,lB,I(l,null,{default:U(()=>[rB]),_:1}),I(r,null,{default:U(()=>[aB,iB]),_:1})]),_:1},16)}}},uB=z(cB,[["__file","/@slidev/slides/5.md"]]),pB=e("h2",null,"Abstract? ABSTRACT!",-1),dB=e("p",null,"Quiz time - what does this say:",-1),fB=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#dbd7ca"}},"01001000 01100101 01101100 01101100 01101111 00100000")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#dbd7ca"}},"01010111 01101111 01110010 01101100 01100100 00100001")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#393a34"}},"01001000 01100101 01101100 01101100 01101111 00100000")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393a34"}},"01010111 01101111 01110010 01101100 01100100 00100001")])])])],-1),hB=e("p",null,[e("code",null,"00100000"),d(" = "),e("code",null,"0x20"),d(" = "),e("code",null," "),e("span",{class:"pl-15"},[e("code",null,"00100001"),d(" = "),e("code",null,"0x21"),d(" = "),e("code",null,"!")])],-1),yB=e("hr",null,null,-1),mB=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#dbd7ca"}},"0100 1000  =  0x48  =  'H'")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#dbd7ca"}},"0110 0101  =  0x65  =  'e'")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#dbd7ca"}},"0110 1100  =  0x6c  =  'l'")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#dbd7ca"}},"0110 1100  =  0x6c  =  'l'")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#dbd7ca"}},"0110 1111  =  0x6f  =  'o'")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#dbd7ca"}},"0010 0000  =  0x20  =  ' '")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#dbd7ca"}},"0101 0111  =  0x57  =  'W'")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#dbd7ca"}},"0110 1111  =  0x6f  =  'o'")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#dbd7ca"}},"0111 0010  =  0x72  =  'r'")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#dbd7ca"}},"0110 1100  =  0x6c  =  'l'")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#dbd7ca"}},"0110 0100  =  0x64  =  'd'")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#dbd7ca"}},"0010 0001  =  0x21  =  '!'")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#393a34"}},"0100 1000  =  0x48  =  'H'")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393a34"}},"0110 0101  =  0x65  =  'e'")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393a34"}},"0110 1100  =  0x6c  =  'l'")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393a34"}},"0110 1100  =  0x6c  =  'l'")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393a34"}},"0110 1111  =  0x6f  =  'o'")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393a34"}},"0010 0000  =  0x20  =  ' '")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393a34"}},"0101 0111  =  0x57  =  'W'")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393a34"}},"0110 1111  =  0x6f  =  'o'")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393a34"}},"0111 0010  =  0x72  =  'r'")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393a34"}},"0110 1100  =  0x6c  =  'l'")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393a34"}},"0110 0100  =  0x64  =  'd'")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393a34"}},"0010 0001  =  0x21  =  '!'")])])])],-1),gB={__name:"6",setup(t){const n={hide:!1,srcSequence:"./pages/01-history.md"};return R(V),(s,o)=>{const l=ot;return v(),q(Te,le(oe(n)),{default:U(()=>[pB,dB,fB,I(l,null,{default:U(()=>[hB]),_:1}),I(l,null,{default:U(()=>[yB,mB]),_:1})]),_:1},16)}}},vB=z(gB,[["__file","/@slidev/slides/6.md"]]),rh="/demystifying-unicode/standards.png",_B={class:"slidev-layout center h-full grid place-content-center"},bB={class:"my-auto"},xB={__name:"center",setup(t){return R(V),(n,s)=>(v(),k("div",_B,[e("div",bB,[Wt(n.$slots,"default")])]))}},Qe=z(xB,[["__file","/home/ben/Workspace/demystifying-unicode/node_modules/@slidev/client/layouts/center.vue"]]),AB=e("div",{class:"flex flex-col"},[e("img",{src:rh,class:"center"}),e("p",{class:"text-3"}," Alt: Fortunately, the charging one has been solved now that we've all standardized on mini-USB. Or is it micro-USB? Shit. ")],-1),wB=e("footer",null,[e("p",null,[d("Source: "),e("a",{href:"https://xkcd.com/927/",target:"_blank",rel:"noopener"},"https://xkcd.com/927/")])],-1),BB={__name:"7",setup(t){const n={layout:"center",hide:!1,srcSequence:"./pages/01-history.md"};return R(V),(s,o)=>(v(),q(Qe,le(oe(n)),{default:U(()=>[AB,wB]),_:1},16))}},CB=z(BB,[["__file","/@slidev/slides/7.md"]]),kB=e("h2",null,"Competing standards",-1),FB=e("ul",null,[e("li",null,[e("s",null,"ANSI (American National Standards Institue) Characters"),d(" Windows code pages, Code Page 437")]),e("li",null,"ASCII (American Standard Code for Information Interchange) Characters")],-1),DB={class:"mt-10"},EB=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#dbd7ca"}},'┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫ Cool "App" 3000 ┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓')]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#dbd7ca"}},"┃                                                                                     ┃ ")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#dbd7ca"}},"┃                                                                                     ┃ ")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#dbd7ca"}},"┃                                                                                     ┃ ")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#dbd7ca"}},"┃                                                                                     ┃ ")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#dbd7ca"}},"┃                    ┏━━━━━━━━━━━━━━━━━━┫ Prompt ┣━━━━━━━━━━━━━━━━┓                   ┃")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#dbd7ca"}},"┃                    ┃                                            ┃                   ┃ ")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#dbd7ca"}},"┃                    ┃ DO YOU WANT YOUR LANGAUGE TO BE SUPPORTED? ┃                   ┃")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#dbd7ca"}},"┃                    ┃                                            ┃                   ┃")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#dbd7ca"}},"┃                    ┗━━━━━━━━━━━━━━━━━━┫ No ┣━┫ >Nah not even< ┣━┛                   ┃")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#dbd7ca"}},"┃                                                                                     ┃ ")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#dbd7ca"}},"┃                                                                                     ┃ ")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#dbd7ca"}},"┃                                                                                     ┃ ")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#dbd7ca"}},"┃                                                                                     ┃ ")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#dbd7ca"}},"┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#393a34"}},'┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫ Cool "App" 3000 ┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓')]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393a34"}},"┃                                                                                     ┃ ")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393a34"}},"┃                                                                                     ┃ ")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393a34"}},"┃                                                                                     ┃ ")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393a34"}},"┃                                                                                     ┃ ")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393a34"}},"┃                    ┏━━━━━━━━━━━━━━━━━━┫ Prompt ┣━━━━━━━━━━━━━━━━┓                   ┃")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393a34"}},"┃                    ┃                                            ┃                   ┃ ")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393a34"}},"┃                    ┃ DO YOU WANT YOUR LANGAUGE TO BE SUPPORTED? ┃                   ┃")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393a34"}},"┃                    ┃                                            ┃                   ┃")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393a34"}},"┃                    ┗━━━━━━━━━━━━━━━━━━┫ No ┣━┫ >Nah not even< ┣━┛                   ┃")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393a34"}},"┃                                                                                     ┃ ")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393a34"}},"┃                                                                                     ┃ ")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393a34"}},"┃                                                                                     ┃ ")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393a34"}},"┃                                                                                     ┃ ")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393a34"}},"┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛")])])])],-1),SB=e("p",null,"🙇 IBM - You helped us draw instead of supporting languages.",-1),TB=[EB,SB],$B={__name:"8",setup(t){const n={hide:!1,srcSequence:"./pages/01-history.md"};return R(V),(s,o)=>{const l=jt("click");return v(),q(Te,le(oe(n)),{default:U(()=>[kB,FB,Ke((v(),k("div",DB,TB)),[[l]])]),_:1},16)}}},OB=z($B,[["__file","/@slidev/slides/8.md"]]),UB="/demystifying-unicode/Codepage-437.png",PB="/demystifying-unicode/Codepage-737.png",IB=e("h2",null,"About ol ASCII - QQ",-1),MB=e("div",{class:"flex flex-row flex-items-stretch"},[e("div",{class:"text-center"},[e("p",null,[e("strong",null,"IBM 437")]),e("img",{class:"w-120",src:UB,alt:"An example of the characters on the commonly used IBM437 codepage"})]),e("div",{class:"text-center"},[e("p",null,[e("strong",null,"IBM 737")]),e("img",{class:"w-120 mt-5",src:PB,alt:"An example of the characters on IBM737 which shows greek characters above the 0x7F range"})])],-1),LB=e("div",{class:"absolute border-5 top-35 left-12 right-12 bottom-76 border-red"},null,-1),RB=e("ul",null,[e("li",null,[d("ASCII standardized 0x00…0x7F"),e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#dbd7ca"}},"␀␁␂␃␄␅␆␇␈␉␊␋␌␍␎␏␐␑␒␓␔␕␖␗␘␙␚␛␜␝␞␟")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#dbd7ca"}},`␠!"#$%&'()*+,-./0123456789:;<=>?`)]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#dbd7ca"}},"@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#dbd7ca"}},"`abcdefghijklmnopqrstuvwxyz{|}~␡")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#393a34"}},"␀␁␂␃␄␅␆␇␈␉␊␋␌␍␎␏␐␑␒␓␔␕␖␗␘␙␚␛␜␝␞␟")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393a34"}},`␠!"#$%&'()*+,-./0123456789:;<=>?`)]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393a34"}},"@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393a34"}},"`abcdefghijklmnopqrstuvwxyz{|}~␡")])])])])]),e("li",null,[d("∴ "),e("code",null,"0x00..0x7F"),d(" was common between many code pages")])],-1),NB={__name:"9",setup(t){const n={hide:!1,srcSequence:"./pages/01-history.md"};return R(V),(s,o)=>{const l=ot,r=Bt;return v(),q(Te,le(oe(n)),{default:U(()=>[IB,MB,I(l,null,{default:U(()=>[LB]),_:1}),I(r,null,{default:U(()=>[RB]),_:1})]),_:1},16)}}},jB=z(NB,[["__file","/@slidev/slides/9.md"]]),WB=e("h2",null,"How many characters is enough charcters?",-1),qB=e("p",{class:"pt-5"},[e("p",null,[e("strong",null,"DIN 91379"),d(' - Characters and character sequences for processing names and data exchange in europe"')])],-1),HB=e("table",null,[e("thead",null,[e("tr",null,[e("th"),e("th")])]),e("tbody",null,[e("tr",null,[e("td",null,"Base Latin Letters: 649"),e("td",null,"enl: 42")]),e("tr",null,[e("td",null,"Combinging Diacritics: 19"),e("td",null,"bnlreq: 17")]),e("tr",null,[e("td",null,"Greek Letters: 68"),e("td",null,"bnl: 59")]),e("tr",null,[e("td",null,"Cyrillic Letters: 61"),e("td",null,"bnlopt: 8")]),e("tr",null,[e("td"),e("td",null,"bnlnot: 2")])])],-1),VB=e("p",null,[e("strong",null,"💣 8 bits isn’t going to be enough 💣")],-1),zB=e("footer",null,[e("p",null,[d("DIN 91379: "),e("a",{href:"https://github.com/String-Latin/DIN-91379-Characters-and-Sequences",target:"_blank",rel:"noopener"},"https://github.com/String-Latin/DIN-91379-Characters-and-Sequences")])],-1),KB={__name:"10",setup(t){const n={hide:!1,srcSequence:"./pages/01-history.md"};return R(V),(s,o)=>{const l=Bt;return v(),q(Te,le(oe(n)),{default:U(()=>[WB,qB,HB,I(l,null,{default:U(()=>[VB]),_:1}),zB]),_:1},16)}}},GB=z(KB,[["__file","/@slidev/slides/10.md"]]),YB=e("h2",null,"Summary",-1),ZB=e("p",null,[d("Computers know bits - "),e("code",null,"1"),d("s and "),e("code",null,"0"),d("s")],-1),QB=e("p",null,"Bits are not human structures - so we abstract",-1),JB=e("p",null,[e("code",null,"char"),d(" isn’t a character, it’s just a "),e("code",null,"uint8_t"),d(" with a fancy name")],-1),XB=e("p",null,"We need a whole lot more bits if we more than just names and dates in europe",-1),e2={__name:"11",setup(t){const n={layout:"center",hide:!1,srcSequence:"./pages/01-history.md"};return R(V),(s,o)=>{const l=Bt;return v(),q(Qe,le(oe(n)),{default:U(()=>[YB,I(l,null,{default:U(()=>[ZB,QB,JB,XB]),_:1})]),_:1},16)}}},t2=z(e2,[["__file","/@slidev/slides/11.md"]]),n2=e("h1",null,"Unicode",-1),s2={__name:"12",setup(t){const n={layout:"cover",background:"/DSC09097.jpg",hide:!1,srcSequence:"./pages/02-unicode.md"};return R(V),(s,o)=>(v(),q(Gs,le(oe(n)),{default:U(()=>[n2]),_:1},16))}},o2=z(s2,[["__file","/@slidev/slides/12.md"]]),l2=e("h2",null,"Why Unicode?",-1),r2=e("ol",null,[e("li",null,"Codepages/charmaps? System dependant"),e("li",null,"Unique characters? Duplication everywhere"),e("li",null,"Display more than one codepage/charmap at a time? ␎␏␎␏␎␏␎␏"),e("li",null,"Text from outside of Europe? :ha:")],-1),a2={__name:"13",setup(t){const n={hide:!1,srcSequence:"./pages/02-unicode.md"};return R(V),(s,o)=>{const l=Bt;return v(),q(Te,le(oe(n)),{default:U(()=>[l2,I(l,null,{default:U(()=>[r2]),_:1})]),_:1},16)}}},i2=z(a2,[["__file","/@slidev/slides/13.md"]]);const c2=t=>(vi("data-v-4f830ecd"),t=t(),_i(),t),u2=c2(()=>e("div",{class:"absolute top-0 left-0 the-internet flex justify-center items-center text-30"},[e("p",{class:"text-shadow-xl color-white text-shadow-color-red"},"The Internet")],-1)),p2={__name:"14",setup(t){const n={layout:"center",hide:!1,srcSequence:"./pages/02-unicode.md"};return R(V),(s,o)=>(v(),q(Qe,le(oe(n)),{default:U(()=>[u2]),_:1},16))}},d2=z(p2,[["__scopeId","data-v-4f830ecd"],["__file","/@slidev/slides/14.md"]]),f2=e("h2",null,"Unicode to the resque",-1),h2=e("ul",null,[e("li",null,"Universal"),e("li",null,"Efficient"),e("li",null,"Unambiguous")],-1),y2={__name:"15",setup(t){const n={layout:"center",hide:!1,srcSequence:"./pages/02-unicode.md"};return R(V),(s,o)=>{const l=ot;return v(),q(Qe,le(oe(n)),{default:U(()=>[f2,I(l,null,{default:U(()=>[h2]),_:1})]),_:1},16)}}},m2=z(y2,[["__file","/@slidev/slides/15.md"]]),g2=e("h2",null,"New Terminology",-1),v2=e("table",null,[e("thead",null,[e("tr",null,[e("th"),e("th"),e("th")])]),e("tbody",null,[e("tr",null,[e("td",null,"Glyph"),e("td",null,"‽"),e("td",null,"How it actually looks, defined by the font")]),e("tr",null,[e("td",null,"Codepoint"),e("td",null,"U+203D"),e("td",null,"Unique identifier for this character")]),e("tr",null,[e("td",null,"Character"),e("td",null,"Interrobang"),e("td",null,"Description of the codepoint")]),e("tr",null,[e("td",null,"Block"),e("td",null,"General Punctuation, U+2000 - U+206F"),e("td",null,"The range of codepoints for a specific purpose")]),e("tr",null,[e("td",null,"Plane"),e("td",null,"Basic Multilingual Plane, U+0000 - U+FFFF"),e("td",null,"The wide group of codepoints")])])],-1),_2=e("footer",null,[e("p",null,[d("Ref: Characters and Glyphs "),e("a",{href:"https://www.unicode.org/versions/Unicode15.0.0/ch01.pdf",target:"_blank",rel:"noopener"},"https://www.unicode.org/versions/Unicode15.0.0/ch01.pdf")])],-1),b2={__name:"16",setup(t){const n={hide:!1,srcSequence:"./pages/02-unicode.md"};return R(V),(s,o)=>(v(),q(Te,le(oe(n)),{default:U(()=>[g2,v2,_2]),_:1},16))}},x2=z(b2,[["__file","/@slidev/slides/16.md"]]),A2="/demystifying-unicode/glyph-codepoint-character.jpg",w2=e("img",{src:A2,alt:"Triple spiderman meme, glyph, codepoint, character pointing at each other"},null,-1),B2={__name:"17",setup(t){const n={layout:"center",hide:!1,srcSequence:"./pages/02-unicode.md"};return R(V),(s,o)=>(v(),q(Qe,le(oe(n)),{default:U(()=>[w2]),_:1},16))}},C2=z(B2,[["__file","/@slidev/slides/17.md"]]),k2="/demystifying-unicode/no_chars_yes_glyphs.jpg",F2=e("img",{src:k2,alt:"Drake no: characters. Drake yes: glyphs"},null,-1),D2={__name:"18",setup(t){const n={layout:"center",hide:!1,srcSequence:"./pages/02-unicode.md"};return R(V),(s,o)=>(v(),q(Qe,le(oe(n)),{default:U(()=>[F2]),_:1},16))}},E2=z(D2,[["__file","/@slidev/slides/18.md"]]),S2=e("h2",null,"Glyphemes",-1),T2=e("div",{class:"codepoint absolute top-50 left-50"},[e("div",{class:"glyph"},"é"),e("div",{class:"code"},"U+00e9")],-1),$2=e("div",{class:"codepoint absolute top-50 right-50"},[e("div",{class:"glyph"},"é"),e("div",{class:"code"},"U+0065 + U+0301")],-1),O2={__name:"19",setup(t){const n={hide:!1,srcSequence:"./pages/02-unicode.md"};return R(V),(s,o)=>(v(),q(Te,le(oe(n)),{default:U(()=>[S2,T2,$2]),_:1},16))}},U2=z(O2,[["__file","/@slidev/slides/19.md"]]),P2=e("h2",null,"What is the difference between",-1),I2=e("h2",null,[e("code",null,"Unicode")],-1),M2=e("h2",null,"and",-1),L2=e("h2",null,[e("code",null,"UTF-8")],-1),R2={__name:"20",setup(t){const n={layout:"center",hide:!1,srcSequence:"./pages/02-unicode.md"};return R(V),(s,o)=>(v(),q(Qe,le(oe(n)),{default:U(()=>[P2,I2,M2,L2]),_:1},16))}},N2=z(R2,[["__file","/@slidev/slides/20.md"]]),j2=e("div",{class:"text-7"},[e("p",null,[e("code",null,"Unicode"),d(' - "The Standard"')]),e("p",null,[e("code",null,"UTF-8"),d(" - Encoding")])],-1),W2={__name:"21",setup(t){const n={layout:"center",hide:!1,srcSequence:"./pages/02-unicode.md"};return R(V),(s,o)=>(v(),q(Qe,le(oe(n)),{default:U(()=>[j2]),_:1},16))}},q2=z(W2,[["__file","/@slidev/slides/21.md"]]),H2=e("h2",null,"Encoding",-1),V2=e("p",null,[e("strong",null,"DIN 91379"),d(": 925 characters")],-1),z2=e("p",null,"At least 10 bits - (Names/Data exchange in Europe)",-1),K2=e("p",null,"Unicode:",-1),G2=e("ul",null,[e("li",null,"Supports 1048576 Characters"),e("li",null,"Code space: U+000000 - U+10FFFF"),e("li",null,"Which requires at least 21 bits")],-1),Y2=e("footer",null,[e("p",null,"Fun fact: Unicode <2.0 code space was 16-bit wide.")],-1),Z2={__name:"22",setup(t){const n={hide:!1,srcSequence:"./pages/02-unicode.md"};return R(V),(s,o)=>{const l=Bt;return v(),q(Te,le(oe(n)),{default:U(()=>[H2,I(l,null,{default:U(()=>[V2,z2,K2,G2]),_:1}),Y2]),_:1},16)}}},Q2=z(Z2,[["__file","/@slidev/slides/22.md"]]),J2=e("div",{class:"flex flex-col"},[e("img",{src:rh,class:"center"}),e("p",{class:"text-3"}," Alt: Fortunately, the charging one has been solved now that we've all standardized on mini-USB. Or is it micro-USB? Shit. ")],-1),X2=e("footer",null,[e("p",null,[d("Source: "),e("a",{href:"https://xkcd.com/927/",target:"_blank",rel:"noopener"},"https://xkcd.com/927/")])],-1),e9={__name:"23",setup(t){const n={layout:"center",hide:!1,srcSequence:"./pages/02-unicode.md"};return R(V),(s,o)=>(v(),q(Qe,le(oe(n)),{default:U(()=>[J2,X2]),_:1},16))}},t9=z(e9,[["__file","/@slidev/slides/23.md"]]),n9=e("h2",null,"Woo options!",-1),s9=e("p",null,"😻 = U+1F63B = Smiling cat face with heart-shaped eyes",-1),o9=e("table",null,[e("thead",null,[e("tr",null,[e("th"),e("th")])]),e("tbody",null,[e("tr",null,[e("td",null,"UTF-8"),e("td",null,[e("code",null,"0xF0 0x9F 0x98 0xBB")])]),e("tr",null,[e("td",null,"UTF-16BE*"),e("td",null,[e("code",null,"0xD83D 0xDE3B")])]),e("tr",null,[e("td",null,"UTF-16LE"),e("td",null,[e("code",null,"0x3DD8 0x3BDE")])]),e("tr",null,[e("td",null,"UTF-32BE*"),e("td",null,[e("code",null,"0x0001F63B")])]),e("tr",null,[e("td",null,"UTF-32LE"),e("td",null,[e("code",null,"0x3BF60100")])])])],-1),l9=e("p",null,[d("* BE encodings are the default if no BOM "),e("code",null,"\\xFEFF")],-1),r9=e("footer",null,[e("p",null,[d("UTF-21 exists - but it’s a toy encoding hobby project"),e("br")])],-1),a9={__name:"24",setup(t){const n={hide:!1,srcSequence:"./pages/02-unicode.md"};return R(V),(s,o)=>{const l=ot;return v(),q(Te,le(oe(n)),{default:U(()=>[n9,s9,I(l,null,{default:U(()=>[o9,l9]),_:1}),r9]),_:1},16)}}},i9=z(a9,[["__file","/@slidev/slides/24.md"]]),c9=e("h2",null,"UTF-8 is the king of the web",-1),u9={__name:"25",setup(t){const n={layout:"center",hide:!1,srcSequence:"./pages/02-unicode.md"};return R(V),(s,o)=>(v(),q(Qe,le(oe(n)),{default:U(()=>[c9]),_:1},16))}},p9=z(u9,[["__file","/@slidev/slides/25.md"]]),d9=e("h2",null,"Nuts and bolts of UTF-8",-1),f9=e("p",null,"Key points:",-1),h9=e("ul",null,[e("li",null,"Variable width (1-4 bytes)"),e("li",null,"∴ Variable offset between characters"),e("li",null,"The default in Rust (+many more)")],-1),y9=e("hr",null,null,-1),m9=e("table",null,[e("thead",null,[e("tr",null,[e("th",null,"Code point range"),e("th",null,"Byte 1"),e("th",null,"Byte 2"),e("th",null,"Byte 3"),e("th",null,"Byte 4"),e("th",null,"Bit Capacity"),e("th",null,"Code points")])]),e("tbody",null,[e("tr",null,[e("td",null,[e("code",null,"0x000000..0x00007F")]),e("td",null,[e("code",null,"0xxxxxxx")]),e("td"),e("td"),e("td"),e("td",null,"7"),e("td",null,"128")]),e("tr",null,[e("td",null,[e("code",null,"0x000080..0x0007FF")]),e("td",null,[e("code",null,"110xxxxx")]),e("td",null,[e("code",null,"10xxxxxx")]),e("td"),e("td"),e("td",null,"11"),e("td",null,"1920")]),e("tr",null,[e("td",null,[e("code",null,"0x000800..0x00FFFF")]),e("td",null,[e("code",null,"1110xxxx")]),e("td",null,[e("code",null,"10xxxxxx")]),e("td",null,[e("code",null,"10xxxxxx")]),e("td"),e("td",null,"16"),e("td",null,"63488")]),e("tr",null,[e("td",null,[e("code",null,"0x010000..0x10FFFF")]),e("td",null,[e("code",null,"11110xxx")]),e("td",null,[e("code",null,"10xxxxxx")]),e("td",null,[e("code",null,"10xxxxxx")]),e("td",null,[e("code",null,"10xxxxxx")]),e("td",null,"21"),e("td",null,"1mil+")])])],-1),g9={__name:"26",setup(t){const n={hide:!1,srcSequence:"./pages/02-unicode.md"};return R(V),(s,o)=>{const l=ot;return v(),q(Te,le(oe(n)),{default:U(()=>[d9,f9,h9,I(l,null,{default:U(()=>[y9,m9]),_:1})]),_:1},16)}}},v9=z(g9,[["__file","/@slidev/slides/26.md"]]),_9=["width","height"],b9=["id"],x9=["fill"],A9=["x1","y1","x2","y2","stroke","stroke-width","marker-end"],w9=Ce({__name:"Arrow",props:{x1:{type:[Number,String],required:!0},y1:{type:[Number,String],required:!0},x2:{type:[Number,String],required:!0},y2:{type:[Number,String],required:!0},width:{type:[Number,String],required:!1},color:{type:String,required:!1}},setup(t){R(V);const s=Ag("abcedfghijklmn",10)();return(o,l)=>(v(),k("svg",{class:"absolute left-0 top-0 pointer-events-none",width:Math.max(+o.x1,+o.x2)+50,height:Math.max(+o.y1,+o.y2)+50},[e("defs",null,[e("marker",{id:T(s),markerUnits:"strokeWidth",markerWidth:10,markerHeight:7,refX:"9",refY:"3.5",orient:"auto"},[e("polygon",{points:"0 0, 10 3.5, 0 7",fill:o.color||"currentColor"},null,8,x9)],8,b9)]),e("line",{x1:+o.x1,y1:+o.y1,x2:+o.x2,y2:+o.y2,stroke:o.color||"currentColor","stroke-width":o.width||2,"marker-end":`url(#${T(s)})`},null,8,A9)],8,_9))}}),Ni=z(w9,[["__file","/home/ben/Workspace/demystifying-unicode/node_modules/@slidev/client/builtin/Arrow.vue"]]),B9=e("h2",null,"Let’s encode!",-1),C9=e("p",null,"😻 = U+1F63B = Smiling cat face with heart-shaped eyes",-1),k9=e("p",null,[d("1F63B = "),e("code",null,"0001 1111 0110 0011 1011")],-1),F9=[k9],D9={class:"mt-30"},E9=e("p",null,"We need at least 17 bits of room to encode U+1F63B",-1),S9=e("hr",null,null,-1),T9=e("p",null,[e("code",null,"17 > 7"),d(" ∴ Needs more than 1 byte")],-1),$9=e("p",null,[e("code",null,"17 > 11"),d(" ∴ Needs more than 2 bytes")],-1),O9=e("p",null,[e("code",null,"17 > 16"),d(" ∴ Needs more than 3 bytes")],-1),U9=e("p",null,"∴ We need 4 bytes!",-1),P9=e("p",null,[e("code",null,"1111 0xxx"),d(),e("code",null,"10xx xxxx"),d(),e("code",null,"10xx xxxx"),d(),e("code",null,"10xx xxxx")],-1),I9=[S9,T9,$9,O9,U9,P9],M9={__name:"27",setup(t){const n={hide:!1,srcSequence:"./pages/02-unicode.md"};return R(V),(s,o)=>{const l=Ni,r=jt("click");return v(),q(Te,le(oe(n)),{default:U(()=>[B9,C9,Ke((v(),k("p",null,F9)),[[r]]),Ke((v(),k("div",D9,[I(l,{x1:"250",y1:"250",x2:"170",y2:"160",width:"5"}),E9])),[[r]]),Ke((v(),k("div",null,I9)),[[r]])]),_:1},16)}}},L9=z(M9,[["__file","/@slidev/slides/27.md"]]);const ze=t=>(vi("data-v-0519a901"),t=t(),_i(),t),R9=ze(()=>e("h2",null,"Let’s encode!",-1)),N9=ze(()=>e("p",null,"😻 = U+1F63B = Smiling cat face with heart-shaped eyes",-1)),j9=ze(()=>e("p",null,[d("0x1F63B = "),e("code",null,"0001 1111 0110 0011 1011")],-1)),W9={class:"absolute top-40 left-14"},q9=ze(()=>e("span",null,"0x1F63B = ",-1)),H9=ze(()=>e("span",{class:"binary color-red"}," 00",-1)),V9=ze(()=>e("span",{class:"binary color-blue"},"01 1111",-1)),z9=ze(()=>e("span",{class:"binary color-green"}," 0110 00",-1)),K9=ze(()=>e("span",{class:"binary color-yellow"},"11 1011",-1)),G9=[q9,H9,V9,z9,K9],Y9={class:"absolute parts top-40 left-14"},Z9=ze(()=>e("div",{class:"binary color-red absolute part part-1 anim"},"00",-1)),Q9=ze(()=>e("div",{class:"binary color-blue absolute part part-2 anim"},"01 1111",-1)),J9=ze(()=>e("div",{class:"binary color-green absolute part part-3 no-backtick anim"},"0110 00",-1)),X9=ze(()=>e("div",{class:"binary color-yellow absolute part part-4 no-backtick anim"},"11 1011",-1)),eC=[Z9,Q9,J9,X9],tC={class:"absolute top-49 left-31"},nC=ze(()=>e("span",{class:"binary"},[d("| 1111 0000 = 1111 00"),e("span",{class:"color-red"},"00"),d(" ")],-1)),sC=ze(()=>e("p",null,[e("span",{class:"binary"},[d("| 1000 0000 = 10"),e("span",{class:"color-blue"},"01 1111"),d(" ")])],-1)),oC=ze(()=>e("p",null,[e("span",{class:"binary"},[d("| 1000 0000 = 10"),e("span",{class:"color-green"},"01 1000"),d(" ")])],-1)),lC=ze(()=>e("p",null,[e("span",{class:"binary"},[d("| 1000 0000 = 10"),e("span",{class:"color-yellow"},"11 1011"),d(" ")])],-1)),rC=[nC,sC,oC,lC],aC={class:"absolute top-49 left-86"},iC=ze(()=>e("span",{class:"binary"}," = 0xF0",-1)),cC=ze(()=>e("p",null,[e("span",{class:"binary"}," = 0x9F")],-1)),uC=ze(()=>e("p",null,[e("span",{class:"binary"}," = 0x98")],-1)),pC=ze(()=>e("p",null,[e("span",{class:"binary"}," = 0xBB")],-1)),dC=[iC,cC,uC,pC],fC={class:"absolute top-90 left-15"},hC=ze(()=>e("hr",null,null,-1)),yC=ze(()=>e("p",null,[d("Thus! U+1F63B = "),e("code",null,"\\xF0\\x9F\\x97\\xBB"),d(" in UTF-8")],-1)),mC={__name:"28",setup(t){const n={hide:!1,srcSequence:"./pages/02-unicode.md"};return R(V),(s,o)=>{const l=ot,r=jt("click");return v(),q(Te,le(oe(n)),{default:U(()=>[R9,N9,j9,Ke((v(),k("div",W9,G9)),[[r]]),Ke((v(),k("div",Y9,eC)),[[r]]),Ke((v(),k("div",tC,rC)),[[r]]),Ke((v(),k("div",aC,dC)),[[r]]),e("div",fC,[I(l,null,{default:U(()=>[hC,yC]),_:1})])]),_:1},16)}}},gC=z(mC,[["__scopeId","data-v-0519a901"],["__file","/@slidev/slides/28.md"]]),vC=e("h2",null,"Summary",-1),_C=e("p",null,[d("Unicode is a standard. It defeines a dictionary of "),e("code",null,"codepoints"),d(" to their character descriptions")],-1),bC=e("p",null,"UTF-8 is an Encoding - defined by the Unicode Standard.",-1),xC=e("p",null,"Encodings help humans interpret bytes as painted glyphs",-1),AC=e("p",null,"UTF-8 is by far the most common standard due to it’s memory efficiency (e.g. variable space)",-1),wC={__name:"29",setup(t){const n={layout:"center",hide:!1,srcSequence:"./pages/02-unicode.md"};return R(V),(s,o)=>{const l=Bt;return v(),q(Qe,le(oe(n)),{default:U(()=>[vC,I(l,null,{default:U(()=>[_C,bC,xC,AC]),_:1})]),_:1},16)}}},BC=z(wC,[["__file","/@slidev/slides/29.md"]]),CC=e("h1",null,"Unicode in Rust",-1),kC={__name:"30",setup(t){const n={layout:"cover",background:"/DSC09353.jpg",hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"};return R(V),(s,o)=>(v(),q(Gs,le(oe(n)),{default:U(()=>[CC]),_:1},16))}},FC=z(kC,[["__file","/@slidev/slides/30.md"]]),DC=e("p",null,"Q: What is the primitive string type in rust?",-1),EC={__name:"31",setup(t){const n={layout:"center",hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"};return R(V),(s,o)=>(v(),q(Qe,le(oe(n)),{default:U(()=>[DC]),_:1},16))}},SC=z(EC,[["__file","/@slidev/slides/31.md"]]),TC=e("p",null,[d("Answer: "),e("code",null,"str")],-1),$C=e("p",null,[d("Incorrect: "),e("code",null,"String"),d(", "),e("code",null,"&str")],-1),OC=e("ul",null,[e("li",null,[e("code",null,"&str"),d(" impls "),e("code",null,"AsRef<str>")]),e("li",null,[e("code",null,"String"),d(" impls "),e("code",null,"AsRef<str>")]),e("li",null,[e("code",null,"String"),d(" impls "),e("code",null,"Deref"),d(" to "),e("code",null,"str"),d(" (thus "),e("code",null,"&String"),d(" derefs to "),e("code",null,"&str"),d(")")])],-1),UC={class:"mt-5"},PC=e("blockquote",null,[e("p",null,[d("The "),e("code",null,"str"),d(" type, also called a ‘string slice’, is the most primitive string type. It is usually seen in its borrowed form, "),e("code",null,"&str"),d(". It is also the type of string literals, "),e("code",null,"&'static str"),d(".")]),e("p",null,[d("String slices are "),e("strong",null,"always"),d(" valid UTF-8.")])],-1),IC=[PC],MC={__name:"32",setup(t){const n={layout:"center",hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"};return R(V),(s,o)=>{const l=ot,r=jt("click");return v(),q(Qe,le(oe(n)),{default:U(()=>[TC,I(l,null,{default:U(()=>[$C,OC]),_:1}),Ke((v(),k("div",UC,IC)),[[r]])]),_:1},16)}}},LC=z(MC,[["__file","/@slidev/slides/32.md"]]),RC={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},NC=e("path",{fill:"currentColor",d:"M200 32h-36.26a47.92 47.92 0 0 0-71.48 0H56a16 16 0 0 0-16 16v168a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16Zm-72 0a32 32 0 0 1 32 32H96a32 32 0 0 1 32-32Zm72 184H56V48h26.75A47.93 47.93 0 0 0 80 64v8a8 8 0 0 0 8 8h80a8 8 0 0 0 8-8v-8a47.93 47.93 0 0 0-2.75-16H200Z"},null,-1),jC=[NC];function WC(t,n){return v(),k("svg",RC,jC)}const qC={name:"ph-clipboard",render:WC},HC={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},VC=e("path",{fill:"currentColor",d:"M173.66 98.34a8 8 0 0 1 0 11.32l-56 56a8 8 0 0 1-11.32 0l-24-24a8 8 0 0 1 11.32-11.32L112 148.69l50.34-50.35a8 8 0 0 1 11.32 0ZM232 128A104 104 0 1 1 128 24a104.11 104.11 0 0 1 104 104Zm-16 0a88 88 0 1 0-88 88a88.1 88.1 0 0 0 88-88Z"},null,-1),zC=[VC];function KC(t,n){return v(),k("svg",HC,zC)}const GC={name:"ph-check-circle",render:KC},YC=["title"],ZC=Ce({__name:"CodeBlockWrapper",props:{ranges:{default:()=>[]},startLine:{type:Number,default:1},lines:{type:Boolean,default:Ee.lineNumbers},at:{type:Number,default:void 0},maxHeight:{type:String,default:void 0}},setup(t){const n=t;R(V);const s=R(_o),o=R(as),l=R(bo);function r(f=5){const h=[],y="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",m=y.length;for(let b=0;b<f;b++)h.push(y.charAt(Math.floor(Math.random()*m)));return h.join("")}const a=Y(),i=$t();Gn(()=>{const f=n.at==null?o==null?void 0:o.value.length:n.at,h=$(()=>l!=null&&l.value?n.ranges.length-1:Math.min(Math.max(0,((s==null?void 0:s.value)||0)-(f||0)),n.ranges.length-1)),y=$(()=>n.ranges[h.value]||"");if(n.ranges.length>=2&&!(l!=null&&l.value)){const m=r(),b=Bg(n.ranges.length-1).map(w=>m+w);o!=null&&o.value&&(o.value.push(...b),fr(()=>b.forEach(w=>Aa(o.value,w)),i))}ks(()=>{if(!a.value)return;const b=a.value.querySelector(".shiki-dark")?Array.from(a.value.querySelectorAll(".shiki")):[a.value],w=n.startLine;for(const A of b){const B=Array.from(A.querySelectorAll(".line")),x=sh(B.length+w-1,y.value);if(B.forEach((C,F)=>{const E=x.includes(F+w);C.classList.toggle(ss,!0),C.classList.toggle("highlighted",E),C.classList.toggle("dishonored",!E)}),n.maxHeight){const C=Array.from(A.querySelectorAll(".line.highlighted"));C.reduce((E,L)=>L.offsetHeight+E,0)>a.value.offsetHeight?C[0].scrollIntoView({behavior:"smooth",block:"start"}):C.length>0&&C[Math.round((C.length-1)/2)].scrollIntoView({behavior:"smooth",block:"center"})}}})});const{copied:c,copy:u}=Bv();function p(){var h,y;const f=(y=(h=a.value)==null?void 0:h.querySelector(".slidev-code"))==null?void 0:y.textContent;f&&u(f)}return(f,h)=>{const y=GC,m=qC;return v(),k("div",{ref_key:"el",ref:a,class:We(["slidev-code-wrapper relative group",{"slidev-code-line-numbers":n.lines}]),style:nt({"max-height":n.maxHeight,"overflow-y":n.maxHeight?"scroll":void 0,"--start":n.startLine})},[Wt(f.$slots,"default"),T(Ee).codeCopy?(v(),k("button",{key:0,class:"slidev-code-copy absolute top-0 right-0 transition opacity-0 group-hover:opacity-20 hover:!opacity-100",title:T(c)?"Copied":"Copy",onClick:h[0]||(h[0]=b=>p())},[T(c)?(v(),q(y,{key:0,class:"p-2 w-8 h-8"})):(v(),q(m,{key:1,class:"p-2 w-8 h-8"}))],8,YC)):me("v-if",!0)],6)}}}),Ot=z(ZC,[["__file","/home/ben/Workspace/demystifying-unicode/node_modules/@slidev/client/builtin/CodeBlockWrapper.vue"]]),QC=e("h2",null,"String slices",-1),JC=e("br",null,null,-1),XC=e("blockquote",null,[e("p",null,"Primitive Type slice"),e("p",null,"A dynamically-sized view into a contiguous sequence, [T]. Contiguous here means that elements are laid out so that every element is the same distance from its neighbors.")],-1),e7=e("br",null,null,-1),t7=e("p",null,"What is the output?",-1),n7=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"fn"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"main"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"let"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"s"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"İstanbul"'),e("span",{style:{color:"#858585"}},";")]),d(`
`),e("span",{class:"line"}),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"println!"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"'),e("span",{style:{color:"#858585"}},"{}"),e("span",{style:{color:"#C98A7D"}},'"'),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"s"),e("span",{style:{color:"#CB7676"}},"."),e("span",{style:{color:"#A1B567"}},"len"),e("span",{style:{color:"#858585"}},"());")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"fn"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"main"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"let"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"s"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"İstanbul"'),e("span",{style:{color:"#8E8F8B"}},";")]),d(`
`),e("span",{class:"line"}),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"println!"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},'"'),e("span",{style:{color:"#8E8F8B"}},"{}"),e("span",{style:{color:"#B56959"}},'"'),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"s"),e("span",{style:{color:"#AB5959"}},"."),e("span",{style:{color:"#6C7834"}},"len"),e("span",{style:{color:"#8E8F8B"}},"());")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),s7=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"    //        ^^ 9")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"    //        ^^ 9")])])])],-1),o7=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A1B567"}},"println!"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"'),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#C98A7D"}},":x?"),e("span",{style:{color:"#858585"}},"}"),e("span",{style:{color:"#C98A7D"}},'"'),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"İstanbul"'),e("span",{style:{color:"#CB7676"}},"."),e("span",{style:{color:"#A1B567"}},"as_bytes"),e("span",{style:{color:"#858585"}},"());"),e("span",{style:{color:"#758575"}},"   // [c4, b0, 73, 74, 61, 6e, 62, 75, 6c]")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#6C7834"}},"println!"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},'"'),e("span",{style:{color:"#8E8F8B"}},"{"),e("span",{style:{color:"#B56959"}},":x?"),e("span",{style:{color:"#8E8F8B"}},"}"),e("span",{style:{color:"#B56959"}},'"'),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"İstanbul"'),e("span",{style:{color:"#AB5959"}},"."),e("span",{style:{color:"#6C7834"}},"as_bytes"),e("span",{style:{color:"#8E8F8B"}},"());"),e("span",{style:{color:"#A0ADA0"}},"   // [c4, b0, 73, 74, 61, 6e, 62, 75, 6c]")])])])],-1),l7=e("footer",null,[e("p",null,[d("Ref: "),e("a",{href:"https://doc.rust-lang.org/std/primitive.slice.html",target:"_blank",rel:"noopener"},"https://doc.rust-lang.org/std/primitive.slice.html")])],-1),r7={__name:"33",setup(t){const n={hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"};return R(V),(s,o)=>{const l=Ot,r=ot,a=Bt;return v(),q(Te,le(oe(n)),{default:U(()=>[QC,JC,XC,e7,I(r,null,{default:U(()=>[t7,I(l,qe({},{ranges:[""]}),{default:U(()=>[n7]),_:1},16)]),_:1}),I(a,null,{default:U(()=>[I(l,qe({},{ranges:[""]}),{default:U(()=>[s7]),_:1},16),I(l,qe({},{ranges:[""]}),{default:U(()=>[o7]),_:1},16)]),_:1}),l7]),_:1},16)}}},a7=z(r7,[["__file","/@slidev/slides/33.md"]]),i7=e("h2",null,[d("A String slice ("),e("code",null,"str"),d(") is just a slice of bytes ("),e("code",null,"[u8]"),d("), "),e("strong",null,"which contents are always valid UTF-8"),d(".")],-1),c7={__name:"34",setup(t){const n={layout:"center",hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"};return R(V),(s,o)=>(v(),q(Qe,le(oe(n)),{default:U(()=>[i7]),_:1},16))}},u7=z(c7,[["__file","/@slidev/slides/34.md"]]),p7=e("h2",null,"Lets make some strings",-1),d7={__name:"35",setup(t){const n={layout:"center",hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"};return R(V),(s,o)=>(v(),q(Qe,le(oe(n)),{default:U(()=>[p7]),_:1},16))}},f7=z(d7,[["__file","/@slidev/slides/35.md"]]),h7=e("h2",null,"Creating strings",-1),y7=e("blockquote",null,[e("p",null,[d("String slices are "),e("strong",null,"always"),d(" valid UTF-8.")])],-1),m7=e("p",null,[d("∴ The compiler won’t compile your rust if you try to do non UTF-8 things in "),e("code",null,"&str")],-1),g7=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"fn"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"main"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"    // ASCII chars are always safe!")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"let"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"s"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"Hello World"'),e("span",{style:{color:"#858585"}},";"),e("span",{style:{color:"#758575"}},"     // Good")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"let"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"s"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"Hello'),e("span",{style:{color:"#D4976C"}},"\\x20"),e("span",{style:{color:"#C98A7D"}},'World"'),e("span",{style:{color:"#858585"}},";"),e("span",{style:{color:"#758575"}},"  // Also good")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"let"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"s"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"Hello'),e("span",{style:{color:"#D4976C"}},"\\x7F"),e("span",{style:{color:"#C98A7D"}},'World"'),e("span",{style:{color:"#858585"}},";"),e("span",{style:{color:"#758575"}},"  // Also good (\\x7F is the control character `DEL`)")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"let"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"s"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"Hello'),e("span",{style:{color:"#D4976C"}},"\\x"),e("span",{style:{color:"#C98A7D"}},'80World"'),e("span",{style:{color:"#858585"}},";"),e("span",{style:{color:"#758575"}},"  // Fails")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"    //            ^^^^ must be a character in the range [\\x00-\\x7f]")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"fn"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"main"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"    // ASCII chars are always safe!")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"let"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"s"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"Hello World"'),e("span",{style:{color:"#8E8F8B"}},";"),e("span",{style:{color:"#A0ADA0"}},"     // Good")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"let"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"s"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"Hello'),e("span",{style:{color:"#A65E2B"}},"\\x20"),e("span",{style:{color:"#B56959"}},'World"'),e("span",{style:{color:"#8E8F8B"}},";"),e("span",{style:{color:"#A0ADA0"}},"  // Also good")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"let"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"s"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"Hello'),e("span",{style:{color:"#A65E2B"}},"\\x7F"),e("span",{style:{color:"#B56959"}},'World"'),e("span",{style:{color:"#8E8F8B"}},";"),e("span",{style:{color:"#A0ADA0"}},"  // Also good (\\x7F is the control character `DEL`)")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"let"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"s"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"Hello'),e("span",{style:{color:"#A65E2B"}},"\\x"),e("span",{style:{color:"#B56959"}},'80World"'),e("span",{style:{color:"#8E8F8B"}},";"),e("span",{style:{color:"#A0ADA0"}},"  // Fails")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"    //            ^^^^ must be a character in the range [\\x00-\\x7f]")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),v7=e("p",null,"… and for completeness…",-1),_7=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"fn"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"main"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"let"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"s"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"Hello'),e("span",{style:{color:"#D4976C"}},"\\u{0020}"),e("span",{style:{color:"#C98A7D"}},'World"'),e("span",{style:{color:"#858585"}},";"),e("span",{style:{color:"#758575"}},"   // Good")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"let"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"s"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"Hello'),e("span",{style:{color:"#D4976C"}},"\\u{1F63B}"),e("span",{style:{color:"#C98A7D"}},'World"'),e("span",{style:{color:"#858585"}},";"),e("span",{style:{color:"#758575"}},"   // Good")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"let"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"s"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"Hello'),e("span",{style:{color:"#D4976C"}},"\\u{110000}"),e("span",{style:{color:"#C98A7D"}},'World"'),e("span",{style:{color:"#858585"}},";"),e("span",{style:{color:"#758575"}},"  // Fails")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"    //            ^^^^^^^^^^ invalid escape")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"fn"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"main"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"let"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"s"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"Hello'),e("span",{style:{color:"#A65E2B"}},"\\u{0020}"),e("span",{style:{color:"#B56959"}},'World"'),e("span",{style:{color:"#8E8F8B"}},";"),e("span",{style:{color:"#A0ADA0"}},"   // Good")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"let"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"s"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"Hello'),e("span",{style:{color:"#A65E2B"}},"\\u{1F63B}"),e("span",{style:{color:"#B56959"}},'World"'),e("span",{style:{color:"#8E8F8B"}},";"),e("span",{style:{color:"#A0ADA0"}},"   // Good")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"let"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"s"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"Hello'),e("span",{style:{color:"#A65E2B"}},"\\u{110000}"),e("span",{style:{color:"#B56959"}},'World"'),e("span",{style:{color:"#8E8F8B"}},";"),e("span",{style:{color:"#A0ADA0"}},"  // Fails")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"    //            ^^^^^^^^^^ invalid escape")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),b7={__name:"36",setup(t){const n={hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"};return R(V),(s,o)=>{const l=Ot,r=ot;return v(),q(Te,le(oe(n)),{default:U(()=>[h7,y7,m7,I(l,qe({},{ranges:[""]}),{default:U(()=>[g7]),_:1},16),I(r,null,{default:U(()=>[v7,I(l,qe({},{ranges:[""]}),{default:U(()=>[_7]),_:1},16)]),_:1})]),_:1},16)}}},x7=z(b7,[["__file","/@slidev/slides/36.md"]]),A7=e("h2",null,"Creating Strings",-1),w7=e("ul",null,[e("li",null,"All strings are a sequence of bytes"),e("li",null,"∴ Rust let’s us create strings from slices/vectors of bytes.")],-1),B7=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"fn"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"main"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"let"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"cat"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#A1B567"}},"u8"),e("span",{style:{color:"#858585"}},";"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"4"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#6394BF"}},"0xF0"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"0x9F"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"0x98"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"0xBB"),e("span",{style:{color:"#858585"}},"];")]),d(`
`),e("span",{class:"line"}),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"let"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"s"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"std"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#A1B567"}},"str"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#A1B567"}},"from_utf8"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#CB7676"}},"&"),e("span",{style:{color:"#B8A965"}},"cat"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#CB7676"}},"."),e("span",{style:{color:"#A1B567"}},"unwrap"),e("span",{style:{color:"#858585"}},"();")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"    // let s = String::from_utf8(cat.to_vec()).unwrap();")]),d(`
`),e("span",{class:"line"}),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"println!"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"'),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#C98A7D"}},"s"),e("span",{style:{color:"#858585"}},"}"),e("span",{style:{color:"#C98A7D"}},'"'),e("span",{style:{color:"#858585"}},");")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"    //        ^^^ 😻 ")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"fn"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"main"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"let"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"cat"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#6C7834"}},"u8"),e("span",{style:{color:"#8E8F8B"}},";"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"4"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#296AA3"}},"0xF0"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"0x9F"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"0x98"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"0xBB"),e("span",{style:{color:"#8E8F8B"}},"];")]),d(`
`),e("span",{class:"line"}),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"let"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"s"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"std"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#6C7834"}},"str"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#6C7834"}},"from_utf8"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#AB5959"}},"&"),e("span",{style:{color:"#8C862B"}},"cat"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#AB5959"}},"."),e("span",{style:{color:"#6C7834"}},"unwrap"),e("span",{style:{color:"#8E8F8B"}},"();")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"    // let s = String::from_utf8(cat.to_vec()).unwrap();")]),d(`
`),e("span",{class:"line"}),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"println!"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},'"'),e("span",{style:{color:"#8E8F8B"}},"{"),e("span",{style:{color:"#B56959"}},"s"),e("span",{style:{color:"#8E8F8B"}},"}"),e("span",{style:{color:"#B56959"}},'"'),e("span",{style:{color:"#8E8F8B"}},");")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"    //        ^^^ 😻 ")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),C7=e("p",null,"… and we can create byte sequences from strings even! (thanks compiler!)",-1),k7=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"fn"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"main"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"let"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"s"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'b"Hello World!"'),e("span",{style:{color:"#858585"}},";")]),d(`
`),e("span",{class:"line"}),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"assert_eq!"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"s"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"&"),e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#6394BF"}},"72"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"101"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"108"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"108"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"111"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"32"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"87"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"111"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"114"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"108"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"100"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"33"),e("span",{style:{color:"#858585"}},"]);"),e("span",{style:{color:"#758575"}},"  // passes")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"fn"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"main"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"let"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"s"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'b"Hello World!"'),e("span",{style:{color:"#8E8F8B"}},";")]),d(`
`),e("span",{class:"line"}),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"assert_eq!"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"s"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"&"),e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#296AA3"}},"72"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"101"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"108"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"108"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"111"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"32"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"87"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"111"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"114"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"108"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"100"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"33"),e("span",{style:{color:"#8E8F8B"}},"]);"),e("span",{style:{color:"#A0ADA0"}},"  // passes")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),F7={__name:"37",setup(t){const n={hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"};return R(V),(s,o)=>{const l=Ot,r=ot;return v(),q(Te,le(oe(n)),{default:U(()=>[A7,w7,I(l,qe({},{ranges:[""]}),{default:U(()=>[B7]),_:1},16),I(r,null,{default:U(()=>[C7,I(l,qe({},{ranges:[""]}),{default:U(()=>[k7]),_:1},16)]),_:1})]),_:1},16)}}},D7=z(F7,[["__file","/@slidev/slides/37.md"]]),E7=e("h2",null,"Creating strings",-1),S7=e("p",null,[d("Even "),e("code",null,"char"),d(" primitives!")],-1),T7=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"fn"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"main"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"let"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"s"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#A1B567"}},"char"),e("span",{style:{color:"#858585"}},";"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"4"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"[")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},"'"),e("span",{style:{color:"#C98A7D"}},"H"),e("span",{style:{color:"#858585"}},"'"),e("span",{style:{color:"#858585"}},",")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#A1B567"}},"char"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#A1B567"}},"from_u32"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#6394BF"}},"0x69"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#CB7676"}},"."),e("span",{style:{color:"#A1B567"}},"unwrap"),e("span",{style:{color:"#858585"}},"(),")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"unsafe"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"char"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#A1B567"}},"from_u32_unchecked"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#6394BF"}},"0x20"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"},")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},"'"),e("span",{style:{color:"#D4976C"}},"\\u{1F63B}"),e("span",{style:{color:"#858585"}},"'")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"];")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"println!"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"'),e("span",{style:{color:"#858585"}},"{}"),e("span",{style:{color:"#C98A7D"}},'"'),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"s"),e("span",{style:{color:"#CB7676"}},"."),e("span",{style:{color:"#A1B567"}},"len"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"*"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"std"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#A1B567"}},"mem"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#A1B567"}},"size_of"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#A1B567"}},"char"),e("span",{style:{color:"#858585"}},">());"),e("span",{style:{color:"#758575"}},"  // 16")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    ")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"let"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"t"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"String"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"s"),e("span",{style:{color:"#CB7676"}},"."),e("span",{style:{color:"#A1B567"}},"iter"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#CB7676"}},"."),e("span",{style:{color:"#A1B567"}},"collect"),e("span",{style:{color:"#858585"}},"();")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"println!"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"'),e("span",{style:{color:"#858585"}},"{}"),e("span",{style:{color:"#C98A7D"}},'"'),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"t"),e("span",{style:{color:"#CB7676"}},"."),e("span",{style:{color:"#A1B567"}},"len"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"*"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"std"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#A1B567"}},"mem"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#A1B567"}},"size_of"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#A1B567"}},"u8"),e("span",{style:{color:"#858585"}},">());"),e("span",{style:{color:"#758575"}},"    // 7")]),d(`
`),e("span",{class:"line"}),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"println!"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"'),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#C98A7D"}},"t"),e("span",{style:{color:"#858585"}},"}"),e("span",{style:{color:"#C98A7D"}},'"'),e("span",{style:{color:"#858585"}},");")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},'    //        ^^^ "Hi 😻"')]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"fn"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"main"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"let"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"s"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#6C7834"}},"char"),e("span",{style:{color:"#8E8F8B"}},";"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"4"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"[")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},"'"),e("span",{style:{color:"#B56959"}},"H"),e("span",{style:{color:"#8E8F8B"}},"'"),e("span",{style:{color:"#8E8F8B"}},",")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#6C7834"}},"char"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#6C7834"}},"from_u32"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#296AA3"}},"0x69"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#AB5959"}},"."),e("span",{style:{color:"#6C7834"}},"unwrap"),e("span",{style:{color:"#8E8F8B"}},"(),")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"unsafe"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"char"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#6C7834"}},"from_u32_unchecked"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#296AA3"}},"0x20"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"},")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},"'"),e("span",{style:{color:"#A65E2B"}},"\\u{1F63B}"),e("span",{style:{color:"#8E8F8B"}},"'")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"];")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"println!"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},'"'),e("span",{style:{color:"#8E8F8B"}},"{}"),e("span",{style:{color:"#B56959"}},'"'),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"s"),e("span",{style:{color:"#AB5959"}},"."),e("span",{style:{color:"#6C7834"}},"len"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"*"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"std"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#6C7834"}},"mem"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#6C7834"}},"size_of"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#6C7834"}},"char"),e("span",{style:{color:"#8E8F8B"}},">());"),e("span",{style:{color:"#A0ADA0"}},"  // 16")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    ")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"let"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"t"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"String"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"s"),e("span",{style:{color:"#AB5959"}},"."),e("span",{style:{color:"#6C7834"}},"iter"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#AB5959"}},"."),e("span",{style:{color:"#6C7834"}},"collect"),e("span",{style:{color:"#8E8F8B"}},"();")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"println!"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},'"'),e("span",{style:{color:"#8E8F8B"}},"{}"),e("span",{style:{color:"#B56959"}},'"'),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"t"),e("span",{style:{color:"#AB5959"}},"."),e("span",{style:{color:"#6C7834"}},"len"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"*"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"std"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#6C7834"}},"mem"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#6C7834"}},"size_of"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#6C7834"}},"u8"),e("span",{style:{color:"#8E8F8B"}},">());"),e("span",{style:{color:"#A0ADA0"}},"    // 7")]),d(`
`),e("span",{class:"line"}),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"println!"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},'"'),e("span",{style:{color:"#8E8F8B"}},"{"),e("span",{style:{color:"#B56959"}},"t"),e("span",{style:{color:"#8E8F8B"}},"}"),e("span",{style:{color:"#B56959"}},'"'),e("span",{style:{color:"#8E8F8B"}},");")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},'    //        ^^^ "Hi 😻"')]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),$7=e("p",null,[d("👆 Yes, "),e("code",null,".iter().collect();")],-1),O7={__name:"38",setup(t){const n={hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"};return R(V),(s,o)=>{const l=Ot;return v(),q(Te,le(oe(n)),{default:U(()=>[E7,S7,I(l,qe({},{ranges:["0-7,10,13-16","8,11"]}),{default:U(()=>[T7]),_:1},16),$7]),_:1},16)}}},U7=z(O7,[["__file","/@slidev/slides/38.md"]]),P7=e("h2",null,"See, creating strings is easy!",-1),I7={__name:"39",setup(t){const n={layout:"center",hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"};return R(V),(s,o)=>(v(),q(Qe,le(oe(n)),{default:U(()=>[P7]),_:1},16))}},M7=z(I7,[["__file","/@slidev/slides/39.md"]]),L7=e("h2",null,"UTF8Error",-1),R7=e("p",null,"Until it panics.",-1),N7=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"fn"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"main"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"let"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"cat"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#A1B567"}},"u8"),e("span",{style:{color:"#858585"}},";"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"4"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#6394BF"}},"0xF0"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"0x9F"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"0x98"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"0xBB"),e("span",{style:{color:"#858585"}},"];")]),d(`
`),e("span",{class:"line"}),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"let"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"sliced"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"&"),e("span",{style:{color:"#B8A965"}},"cat"),e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#6394BF"}},"0"),e("span",{style:{color:"#CB7676"}},"..="),e("span",{style:{color:"#6394BF"}},"2"),e("span",{style:{color:"#858585"}},"];")]),d(`
`),e("span",{class:"line"}),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"    // Panics")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"let"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"_s"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"std"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#A1B567"}},"str"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#A1B567"}},"from_utf8"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"sliced"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#CB7676"}},"."),e("span",{style:{color:"#A1B567"}},"unwrap"),e("span",{style:{color:"#858585"}},"();")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"    // thread 'main' panicked at 'called `Result::unwrap()` on an `Err` value:")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"    //   FromUtf8Error { bytes: [128], error: Utf8Error { valid_up_to: 0, error_len: Some(1) } }', src/main.rs:5:35")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"fn"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"main"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"let"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"cat"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#6C7834"}},"u8"),e("span",{style:{color:"#8E8F8B"}},";"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"4"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#296AA3"}},"0xF0"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"0x9F"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"0x98"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"0xBB"),e("span",{style:{color:"#8E8F8B"}},"];")]),d(`
`),e("span",{class:"line"}),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"let"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"sliced"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"&"),e("span",{style:{color:"#8C862B"}},"cat"),e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#296AA3"}},"0"),e("span",{style:{color:"#AB5959"}},"..="),e("span",{style:{color:"#296AA3"}},"2"),e("span",{style:{color:"#8E8F8B"}},"];")]),d(`
`),e("span",{class:"line"}),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"    // Panics")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"let"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"_s"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"std"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#6C7834"}},"str"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#6C7834"}},"from_utf8"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"sliced"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#AB5959"}},"."),e("span",{style:{color:"#6C7834"}},"unwrap"),e("span",{style:{color:"#8E8F8B"}},"();")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"    // thread 'main' panicked at 'called `Result::unwrap()` on an `Err` value:")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"    //   FromUtf8Error { bytes: [128], error: Utf8Error { valid_up_to: 0, error_len: Some(1) } }', src/main.rs:5:35")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),j7={class:"pt-10"},W7=e("blockquote",null,[e("p",null,[d("String slices are "),e("strong",null,"always"),d(" valid UTF-8.")])],-1),q7=e("p",null,'😬 Yeah, not all sequencess of bytes are "Valid UTF-8"',-1),H7=[W7,q7],V7={__name:"40",setup(t){const n={hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"};return R(V),(s,o)=>{const l=Ot,r=jt("click");return v(),q(Te,le(oe(n)),{default:U(()=>[L7,R7,I(l,qe({},{ranges:[""]}),{default:U(()=>[N7]),_:1},16),Ke((v(),k("p",j7,H7)),[[r]])]),_:1},16)}}},z7=z(V7,[["__file","/@slidev/slides/40.md"]]),K7=e("h2",null,"Invalid UTF-8",-1),G7=e("p",null,"…We didn’t talk about Invalid UTF-8 yet",-1),Y7=e("ul",null,[e("li",null,[d("First byte of UTF-8 byte sequences "),e("ul",null,[e("li",null,[d("1 byte seq: "),e("code",null,"0xxxxxxx")]),e("li",null,[d("2 byte seq: "),e("code",null,"110xxxxx"),d(" - "),e("code",null,"0xCx"),d(" or "),e("code",null,"0xDx"),d(" = 2 bytes")]),e("li",null,[d("3 byte seq: "),e("code",null,"1110xxxx"),d(" - "),e("code",null,"0xEx"),d(" = 3 bytes")]),e("li",null,[d("4 byte seq: "),e("code",null,"11110xxx"),d(" - "),e("code",null,"0xFx"),d(" = 4 bytes")])])])],-1),Z7=e("ul",null,[e("li",null,[d('∴ The following are "broken": '),e("ul",null,[e("li",null,[e("code",null,"[0x80]"),d(", "),e("code",null,"[0x90]"),d(", "),e("code",null,"[0xA0]"),d(", "),e("code",null,"[0xB0]"),d(" - invalid UTF-8 sequences")]),e("li",null,[e("code",null,"[0xC0]"),d(", "),e("code",null,"[0xD0]"),d(" - missing second byte")]),e("li",null,[e("code",null,"[0xE0, 0xFF]"),d(" - missing third byte")]),e("li",null,[e("code",null,"[0xF0, 0xFF, 0xFF]"),d(" - missing fourth byte")])])])],-1),Q7={__name:"41",setup(t){const n={hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"};return R(V),(s,o)=>{const l=ot;return v(),q(Te,le(oe(n)),{default:U(()=>[K7,G7,I(l,null,{default:U(()=>[Y7]),_:1}),I(l,null,{default:U(()=>[Z7]),_:1})]),_:1},16)}}},J7=z(Q7,[["__file","/@slidev/slides/41.md"]]),X7=e("h2",null,"Where Enforced UTF-8 can go wrong",-1),ek={__name:"42",setup(t){const n={layout:"center",hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"};return R(V),(s,o)=>(v(),q(Qe,le(oe(n)),{default:U(()=>[X7]),_:1},16))}},tk=z(ek,[["__file","/@slidev/slides/42.md"]]),nk=e("h2",null,"Reading and Writing",-1),sk=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// Needed for `impl Read for &[u8]`")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"std"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#A1B567"}},"io"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#A1B567"}},"prelude"),e("span",{style:{color:"#CB7676"}},"::*"),e("span",{style:{color:"#858585"}},";")]),d(`
`),e("span",{class:"line"}),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"fn"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"main"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},'    //let mut file = std::fs::File::open("ref/plain_text.txt").unwrap();')]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"let"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"mut"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"file"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"&"),e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#A1B567"}},"u8"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'b"Plain'),e("span",{style:{color:"#D4976C"}},"\\x"),e("span",{style:{color:"#C98A7D"}},'80 Text!"'),e("span",{style:{color:"#858585"}},";")]),d(`
`),e("span",{class:"line"}),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"let"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"mut"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"buf"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Vec"),e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#A1B567"}},"u8"),e("span",{style:{color:"#858585"}},">"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"vec!"),e("span",{style:{color:"#858585"}},"[];")]),d(`
`),e("span",{class:"line"}),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"let"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"bytes_read"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"file"),e("span",{style:{color:"#CB7676"}},"."),e("span",{style:{color:"#A1B567"}},"read_to_end"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#CB7676"}},"&mut"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"buf"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#CB7676"}},"."),e("span",{style:{color:"#A1B567"}},"unwrap"),e("span",{style:{color:"#858585"}},"();")]),d(`
`),e("span",{class:"line"}),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"println!"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"'),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#C98A7D"}},"bytes_read"),e("span",{style:{color:"#858585"}},"}"),e("span",{style:{color:"#C98A7D"}},", "),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#C98A7D"}},"buf:02X?"),e("span",{style:{color:"#858585"}},"}"),e("span",{style:{color:"#C98A7D"}},'"'),e("span",{style:{color:"#858585"}},");")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"    //        ^^^^^^^^^^^^^^^^^^^^^^^^ 12, [50, 6C, 61, 69, 6E, 80, 20, 54, 65, 78, 74, 21]")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// Needed for `impl Read for &[u8]`")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"std"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#6C7834"}},"io"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#6C7834"}},"prelude"),e("span",{style:{color:"#AB5959"}},"::*"),e("span",{style:{color:"#8E8F8B"}},";")]),d(`
`),e("span",{class:"line"}),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"fn"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"main"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},'    //let mut file = std::fs::File::open("ref/plain_text.txt").unwrap();')]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"let"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"mut"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"file"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"&"),e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#6C7834"}},"u8"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'b"Plain'),e("span",{style:{color:"#A65E2B"}},"\\x"),e("span",{style:{color:"#B56959"}},'80 Text!"'),e("span",{style:{color:"#8E8F8B"}},";")]),d(`
`),e("span",{class:"line"}),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"let"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"mut"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"buf"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Vec"),e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#6C7834"}},"u8"),e("span",{style:{color:"#8E8F8B"}},">"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"vec!"),e("span",{style:{color:"#8E8F8B"}},"[];")]),d(`
`),e("span",{class:"line"}),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"let"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"bytes_read"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"file"),e("span",{style:{color:"#AB5959"}},"."),e("span",{style:{color:"#6C7834"}},"read_to_end"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#AB5959"}},"&mut"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"buf"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#AB5959"}},"."),e("span",{style:{color:"#6C7834"}},"unwrap"),e("span",{style:{color:"#8E8F8B"}},"();")]),d(`
`),e("span",{class:"line"}),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"println!"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},'"'),e("span",{style:{color:"#8E8F8B"}},"{"),e("span",{style:{color:"#B56959"}},"bytes_read"),e("span",{style:{color:"#8E8F8B"}},"}"),e("span",{style:{color:"#B56959"}},", "),e("span",{style:{color:"#8E8F8B"}},"{"),e("span",{style:{color:"#B56959"}},"buf:02X?"),e("span",{style:{color:"#8E8F8B"}},"}"),e("span",{style:{color:"#B56959"}},'"'),e("span",{style:{color:"#8E8F8B"}},");")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"    //        ^^^^^^^^^^^^^^^^^^^^^^^^ 12, [50, 6C, 61, 69, 6E, 80, 20, 54, 65, 78, 74, 21]")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),ok=e("p",null,"Nothing bad… so far…",-1),lk={__name:"43",setup(t){const n={hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"};return R(V),(s,o)=>{const l=Ot,r=ot;return v(),q(Te,le(oe(n)),{default:U(()=>[nk,I(l,qe({},{ranges:["5","6","0-4,6-12,14","0-4,6-14"]}),{default:U(()=>[sk]),_:1},16),I(r,null,{default:U(()=>[ok]),_:1})]),_:1},16)}}},rk=z(lk,[["__file","/@slidev/slides/43.md"]]),ak=e("h2",null,"Reading and Writing",-1),ik=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// Needed for `impl Read for &[u8]`")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"std"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#A1B567"}},"io"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#A1B567"}},"prelude"),e("span",{style:{color:"#CB7676"}},"::*"),e("span",{style:{color:"#858585"}},";")]),d(`
`),e("span",{class:"line"}),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"fn"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"main"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},'    //let mut file = std::fs::File::open("ref/plain_text.txt").unwrap();')]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"let"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"mut"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"file"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"&"),e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#A1B567"}},"u8"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'b"Plain'),e("span",{style:{color:"#D4976C"}},"\\x"),e("span",{style:{color:"#C98A7D"}},'80 Text!"'),e("span",{style:{color:"#858585"}},";")]),d(`
`),e("span",{class:"line"}),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"let"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"mut"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"buf"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"String"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"String"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#A1B567"}},"new"),e("span",{style:{color:"#858585"}},"();")]),d(`
`),e("span",{class:"line"}),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"    //let bytes_read = file.read_to_end(&mut buf).unwrap();")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"let"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"bytes_read"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"file"),e("span",{style:{color:"#CB7676"}},"."),e("span",{style:{color:"#A1B567"}},"read_to_string"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#CB7676"}},"&mut"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"buf"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#CB7676"}},"."),e("span",{style:{color:"#A1B567"}},"unwrap"),e("span",{style:{color:"#858585"}},"();")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"    // thread 'main' panicked at 'called `Result::unwrap()` on an `Err` value:")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},`    //     Error { kind: InvalidData, message: "stream did not contain valid UTF-8" }', src/main.rs:11:52`)]),d(`
`),e("span",{class:"line"}),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"println!"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"'),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#C98A7D"}},"bytes_read"),e("span",{style:{color:"#858585"}},"}"),e("span",{style:{color:"#C98A7D"}},", "),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#C98A7D"}},"buf:02X?"),e("span",{style:{color:"#858585"}},"}"),e("span",{style:{color:"#C98A7D"}},'"'),e("span",{style:{color:"#858585"}},");")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// Needed for `impl Read for &[u8]`")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"std"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#6C7834"}},"io"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#6C7834"}},"prelude"),e("span",{style:{color:"#AB5959"}},"::*"),e("span",{style:{color:"#8E8F8B"}},";")]),d(`
`),e("span",{class:"line"}),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"fn"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"main"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},'    //let mut file = std::fs::File::open("ref/plain_text.txt").unwrap();')]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"let"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"mut"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"file"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"&"),e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#6C7834"}},"u8"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'b"Plain'),e("span",{style:{color:"#A65E2B"}},"\\x"),e("span",{style:{color:"#B56959"}},'80 Text!"'),e("span",{style:{color:"#8E8F8B"}},";")]),d(`
`),e("span",{class:"line"}),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"let"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"mut"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"buf"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"String"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"String"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#6C7834"}},"new"),e("span",{style:{color:"#8E8F8B"}},"();")]),d(`
`),e("span",{class:"line"}),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"    //let bytes_read = file.read_to_end(&mut buf).unwrap();")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"let"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"bytes_read"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"file"),e("span",{style:{color:"#AB5959"}},"."),e("span",{style:{color:"#6C7834"}},"read_to_string"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#AB5959"}},"&mut"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"buf"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#AB5959"}},"."),e("span",{style:{color:"#6C7834"}},"unwrap"),e("span",{style:{color:"#8E8F8B"}},"();")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"    // thread 'main' panicked at 'called `Result::unwrap()` on an `Err` value:")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},`    //     Error { kind: InvalidData, message: "stream did not contain valid UTF-8" }', src/main.rs:11:52`)]),d(`
`),e("span",{class:"line"}),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"println!"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},'"'),e("span",{style:{color:"#8E8F8B"}},"{"),e("span",{style:{color:"#B56959"}},"bytes_read"),e("span",{style:{color:"#8E8F8B"}},"}"),e("span",{style:{color:"#B56959"}},", "),e("span",{style:{color:"#8E8F8B"}},"{"),e("span",{style:{color:"#B56959"}},"buf:02X?"),e("span",{style:{color:"#8E8F8B"}},"}"),e("span",{style:{color:"#B56959"}},'"'),e("span",{style:{color:"#8E8F8B"}},");")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),ck={__name:"44",setup(t){const n={hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"};return R(V),(s,o)=>{const l=Ot;return v(),q(Te,le(oe(n)),{default:U(()=>[ak,I(l,qe({},{ranges:["6,10-11","6,10-13"]}),{default:U(()=>[ik]),_:1},16)]),_:1},16)}}},uk=z(ck,[["__file","/@slidev/slides/44.md"]]),pk=e("h2",null,"Read and Writing - JSON",-1),dk=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},'"'),e("span",{style:{color:"#E0A569"}},"hello"),e("span",{style:{color:"#858585"}},'"'),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"world'),e("span",{style:{color:"#FDAEB7","font-style":"italic"}},"\\x"),e("span",{style:{color:"#C98A7D"}},'80!"')]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8E8F8B"}},'"'),e("span",{style:{color:"#B58451"}},"hello"),e("span",{style:{color:"#8E8F8B"}},'"'),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"world'),e("span",{style:{color:"#B31D28","font-style":"italic"}},"\\x"),e("span",{style:{color:"#B56959"}},'80!"')]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),fk=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"#["),e("span",{style:{color:"#DBD7CA"}},"derive"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#A1B567"}},"Debug"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," serde"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#A1B567"}},"Deserialize"),e("span",{style:{color:"#858585"}},")]")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"struct"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Greeting"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"pub"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"who"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"String")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")]),d(`
`),e("span",{class:"line"}),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"fn"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"main"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"let"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"raw"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"&"),e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#A1B567"}},"u8"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'b"{'),e("span",{style:{color:"#D4976C"}},'\\"'),e("span",{style:{color:"#C98A7D"}},"who"),e("span",{style:{color:"#D4976C"}},'\\"'),e("span",{style:{color:"#C98A7D"}},": "),e("span",{style:{color:"#D4976C"}},'\\"'),e("span",{style:{color:"#C98A7D"}},"world"),e("span",{style:{color:"#D4976C"}},"\\x"),e("span",{style:{color:"#C98A7D"}},"80"),e("span",{style:{color:"#D4976C"}},'\\"'),e("span",{style:{color:"#C98A7D"}},'}"'),e("span",{style:{color:"#858585"}},";")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"    // for illustrative purposes")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"let"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"s"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"&"),e("span",{style:{color:"#A1B567"}},"str"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"unsafe"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"std"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#A1B567"}},"str"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#A1B567"}},"from_utf8_unchecked"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"raw"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"};")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    ")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"let"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"greeting"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Greeting"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"serde_json"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#A1B567"}},"from_str"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"s"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#CB7676"}},"."),e("span",{style:{color:"#A1B567"}},"unwrap"),e("span",{style:{color:"#858585"}},"();")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    ")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"println!"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"Hello '),e("span",{style:{color:"#858585"}},"{}"),e("span",{style:{color:"#C98A7D"}},'!"'),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"greeting"),e("span",{style:{color:"#CB7676"}},"."),e("span",{style:{color:"#DBD7CA"}},"who"),e("span",{style:{color:"#858585"}},");")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"#["),e("span",{style:{color:"#393A34"}},"derive"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#6C7834"}},"Debug"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," serde"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#6C7834"}},"Deserialize"),e("span",{style:{color:"#8E8F8B"}},")]")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"struct"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Greeting"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"pub"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"who"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"String")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")]),d(`
`),e("span",{class:"line"}),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"fn"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"main"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"let"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"raw"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"&"),e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#6C7834"}},"u8"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'b"{'),e("span",{style:{color:"#A65E2B"}},'\\"'),e("span",{style:{color:"#B56959"}},"who"),e("span",{style:{color:"#A65E2B"}},'\\"'),e("span",{style:{color:"#B56959"}},": "),e("span",{style:{color:"#A65E2B"}},'\\"'),e("span",{style:{color:"#B56959"}},"world"),e("span",{style:{color:"#A65E2B"}},"\\x"),e("span",{style:{color:"#B56959"}},"80"),e("span",{style:{color:"#A65E2B"}},'\\"'),e("span",{style:{color:"#B56959"}},'}"'),e("span",{style:{color:"#8E8F8B"}},";")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"    // for illustrative purposes")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"let"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"s"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"&"),e("span",{style:{color:"#6C7834"}},"str"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"unsafe"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"std"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#6C7834"}},"str"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#6C7834"}},"from_utf8_unchecked"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"raw"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"};")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    ")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"let"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"greeting"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Greeting"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"serde_json"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#6C7834"}},"from_str"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"s"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#AB5959"}},"."),e("span",{style:{color:"#6C7834"}},"unwrap"),e("span",{style:{color:"#8E8F8B"}},"();")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    ")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"println!"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},'"Hello '),e("span",{style:{color:"#8E8F8B"}},"{}"),e("span",{style:{color:"#B56959"}},'!"'),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"greeting"),e("span",{style:{color:"#AB5959"}},"."),e("span",{style:{color:"#393A34"}},"who"),e("span",{style:{color:"#8E8F8B"}},");")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),hk={class:"mt-7"},yk=e("blockquote",null,[e("p",null,"JSON text exchanged between systems that are not part of a closed ecosystem MUST be encoded using UTF-8")],-1),mk=[yk],gk=e("footer",null,[e("p",null,[d("Ref: "),e("a",{href:"https://datatracker.ietf.org/doc/html/rfc8259#section-8.1",target:"_blank",rel:"noopener"},"https://datatracker.ietf.org/doc/html/rfc8259#section-8.1")])],-1),vk={__name:"45",setup(t){const n={hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"};return R(V),(s,o)=>{const l=Ot,r=ot,a=jt("click");return v(),q(Te,le(oe(n)),{default:U(()=>[pk,I(l,qe({},{ranges:[""]}),{default:U(()=>[dk]),_:1},16),I(r,null,{default:U(()=>[I(l,qe({},{ranges:["all","1-4,7-9","1-4,11","1-4,13","all"]}),{default:U(()=>[fk]),_:1},16)]),_:1}),Ke((v(),k("div",hk,mk)),[[a]]),gk]),_:1},16)}}},_k=z(vk,[["__file","/@slidev/slides/45.md"]]),bk=e("h2",null,"Conventially UTF-8 vs. Gauranteed",-1),xk=e("p",null,"Sometimes you just want cats:",-1),Ak=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"bstr"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#A1B567"}},"ByteSlice"),e("span",{style:{color:"#858585"}},";")]),d(`
`),e("span",{class:"line"}),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"fn"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"main"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"let"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"raw"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"&"),e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#A1B567"}},"u8"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#C98A7D"}},'b"'),e("span",{style:{color:"#D4976C"}},"\\x"),e("span",{style:{color:"#C98A7D"}},"80"),e("span",{style:{color:"#D4976C"}},"\\x"),e("span",{style:{color:"#C98A7D"}},"90"),e("span",{style:{color:"#D4976C"}},"\\x"),e("span",{style:{color:"#C98A7D"}},"F0"),e("span",{style:{color:"#D4976C"}},"\\x"),e("span",{style:{color:"#C98A7D"}},"9F"),e("span",{style:{color:"#D4976C"}},"\\x"),e("span",{style:{color:"#C98A7D"}},"99"),e("span",{style:{color:"#D4976C"}},"\\x"),e("span",{style:{color:"#C98A7D"}},"84Pl"),e("span",{style:{color:"#D4976C"}},"\\x"),e("span",{style:{color:"#C98A7D"}},"F0"),e("span",{style:{color:"#D4976C"}},"\\x"),e("span",{style:{color:"#C98A7D"}},"9F"),e("span",{style:{color:"#D4976C"}},"\\x"),e("span",{style:{color:"#C98A7D"}},"98"),e("span",{style:{color:"#D4976C"}},"\\x"),e("span",{style:{color:"#C98A7D"}},"BBain"),e("span",{style:{color:"#D4976C"}},"\\x"),e("span",{style:{color:"#C98A7D"}},"F0"),e("span",{style:{color:"#D4976C"}},"\\x"),e("span",{style:{color:"#C98A7D"}},"9F"),e("span",{style:{color:"#D4976C"}},"\\x"),e("span",{style:{color:"#C98A7D"}},"98"),e("span",{style:{color:"#D4976C"}},"\\x"),e("span",{style:{color:"#C98A7D"}},"BEText!"),e("span",{style:{color:"#D4976C"}},"\\x"),e("span",{style:{color:"#C98A7D"}},"80"),e("span",{style:{color:"#D4976C"}},"\\x"),e("span",{style:{color:"#C98A7D"}},"80"),e("span",{style:{color:"#D4976C"}},"\\x"),e("span",{style:{color:"#C98A7D"}},'80"'),e("span",{style:{color:"#858585"}},";")]),d(`
`),e("span",{class:"line"}),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"let"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"cats"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"String"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"raw")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#CB7676"}},"."),e("span",{style:{color:"#A1B567"}},"chars"),e("span",{style:{color:"#858585"}},"()")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#CB7676"}},"."),e("span",{style:{color:"#A1B567"}},"filter"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#CB7676"}},"|"),e("span",{style:{color:"#B8A965"}},"c"),e("span",{style:{color:"#CB7676"}},"|"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#858585"}},"'"),e("span",{style:{color:"#D4976C"}},"\\u{1F638}"),e("span",{style:{color:"#858585"}},"'"),e("span",{style:{color:"#CB7676"}},".."),e("span",{style:{color:"#858585"}},"'"),e("span",{style:{color:"#D4976C"}},"\\u{1F640}"),e("span",{style:{color:"#858585"}},"'"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#CB7676"}},"."),e("span",{style:{color:"#A1B567"}},"contains"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"c"),e("span",{style:{color:"#858585"}},"))")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#CB7676"}},"."),e("span",{style:{color:"#A1B567"}},"collect"),e("span",{style:{color:"#858585"}},"();")]),d(`
`),e("span",{class:"line"}),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"println!"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"Cats: '),e("span",{style:{color:"#858585"}},"{}"),e("span",{style:{color:"#C98A7D"}},'"'),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"cats"),e("span",{style:{color:"#858585"}},");")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"    // Cats: 😻😾")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"bstr"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#6C7834"}},"ByteSlice"),e("span",{style:{color:"#8E8F8B"}},";")]),d(`
`),e("span",{class:"line"}),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"fn"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"main"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"let"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"raw"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"&"),e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#6C7834"}},"u8"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"=")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#B56959"}},'b"'),e("span",{style:{color:"#A65E2B"}},"\\x"),e("span",{style:{color:"#B56959"}},"80"),e("span",{style:{color:"#A65E2B"}},"\\x"),e("span",{style:{color:"#B56959"}},"90"),e("span",{style:{color:"#A65E2B"}},"\\x"),e("span",{style:{color:"#B56959"}},"F0"),e("span",{style:{color:"#A65E2B"}},"\\x"),e("span",{style:{color:"#B56959"}},"9F"),e("span",{style:{color:"#A65E2B"}},"\\x"),e("span",{style:{color:"#B56959"}},"99"),e("span",{style:{color:"#A65E2B"}},"\\x"),e("span",{style:{color:"#B56959"}},"84Pl"),e("span",{style:{color:"#A65E2B"}},"\\x"),e("span",{style:{color:"#B56959"}},"F0"),e("span",{style:{color:"#A65E2B"}},"\\x"),e("span",{style:{color:"#B56959"}},"9F"),e("span",{style:{color:"#A65E2B"}},"\\x"),e("span",{style:{color:"#B56959"}},"98"),e("span",{style:{color:"#A65E2B"}},"\\x"),e("span",{style:{color:"#B56959"}},"BBain"),e("span",{style:{color:"#A65E2B"}},"\\x"),e("span",{style:{color:"#B56959"}},"F0"),e("span",{style:{color:"#A65E2B"}},"\\x"),e("span",{style:{color:"#B56959"}},"9F"),e("span",{style:{color:"#A65E2B"}},"\\x"),e("span",{style:{color:"#B56959"}},"98"),e("span",{style:{color:"#A65E2B"}},"\\x"),e("span",{style:{color:"#B56959"}},"BEText!"),e("span",{style:{color:"#A65E2B"}},"\\x"),e("span",{style:{color:"#B56959"}},"80"),e("span",{style:{color:"#A65E2B"}},"\\x"),e("span",{style:{color:"#B56959"}},"80"),e("span",{style:{color:"#A65E2B"}},"\\x"),e("span",{style:{color:"#B56959"}},'80"'),e("span",{style:{color:"#8E8F8B"}},";")]),d(`
`),e("span",{class:"line"}),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"let"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"cats"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"String"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"raw")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#AB5959"}},"."),e("span",{style:{color:"#6C7834"}},"chars"),e("span",{style:{color:"#8E8F8B"}},"()")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#AB5959"}},"."),e("span",{style:{color:"#6C7834"}},"filter"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#AB5959"}},"|"),e("span",{style:{color:"#8C862B"}},"c"),e("span",{style:{color:"#AB5959"}},"|"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8E8F8B"}},"'"),e("span",{style:{color:"#A65E2B"}},"\\u{1F638}"),e("span",{style:{color:"#8E8F8B"}},"'"),e("span",{style:{color:"#AB5959"}},".."),e("span",{style:{color:"#8E8F8B"}},"'"),e("span",{style:{color:"#A65E2B"}},"\\u{1F640}"),e("span",{style:{color:"#8E8F8B"}},"'"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#AB5959"}},"."),e("span",{style:{color:"#6C7834"}},"contains"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"c"),e("span",{style:{color:"#8E8F8B"}},"))")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#AB5959"}},"."),e("span",{style:{color:"#6C7834"}},"collect"),e("span",{style:{color:"#8E8F8B"}},"();")]),d(`
`),e("span",{class:"line"}),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"println!"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},'"Cats: '),e("span",{style:{color:"#8E8F8B"}},"{}"),e("span",{style:{color:"#B56959"}},'"'),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"cats"),e("span",{style:{color:"#8E8F8B"}},");")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"    // Cats: 😻😾")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),wk=e("p",null,[e("code",null,"bstr"),d(" crate - #182 on crates.io")],-1),Bk=e("blockquote",null,[e("p",null,"The primary motivation for byte strings is for handling arbitrary bytes that are mostly UTF-8.")],-1),Ck=e("p",null,[d("Ref: "),e("a",{href:"https://crates.io/crates/bstr",target:"_blank",rel:"noopener"},"https://crates.io/crates/bstr")],-1),kk={__name:"46",setup(t){const n={hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"};return R(V),(s,o)=>{const l=Ot,r=Ni,a=ot;return v(),q(Te,le(oe(n)),{default:U(()=>[bk,xk,I(l,qe({},{ranges:[""]}),{default:U(()=>[Ak]),_:1},16),I(a,null,{default:U(()=>[I(r,{x1:"220",y1:"150",x2:"190",y2:"210",class:"color-red"}),I(r,{x1:"250",y1:"150",x2:"220",y2:"210",class:"color-red"}),I(r,{x1:"700",y1:"150",x2:"670",y2:"210",class:"color-red"}),I(r,{x1:"725",y1:"150",x2:"695",y2:"210",class:"color-red"}),I(r,{x1:"750",y1:"150",x2:"720",y2:"210",class:"color-red"})]),_:1}),I(a,null,{default:U(()=>[wk,Bk,Ck]),_:1})]),_:1},16)}}},Fk=z(kk,[["__file","/@slidev/slides/46.md"]]),Dk=e("h2",null,"Summary",-1),Ek=e("p",null,[e("code",null,"str"),d(" is the primitive string - a slice of bytes with gaurantees of UTF-8")],-1),Sk=e("p",null,[e("code",null,"str"),d(" is always "),e("code",null,"UTF-8")],-1),Tk=e("p",null,[e("code",null,"UTF8Error"),d(" is because you should be handling bytes instead of strings")],-1),$k=e("p",null,[e("code",null,"bstr"),d(" if you want Conventially UTF-8 instead")],-1),Ok={__name:"47",setup(t){const n={layout:"center",hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"};return R(V),(s,o)=>{const l=Bt;return v(),q(Qe,le(oe(n)),{default:U(()=>[Dk,I(l,null,{default:U(()=>[Ek,Sk,Tk,$k]),_:1})]),_:1},16)}}},Uk=z(Ok,[["__file","/@slidev/slides/47.md"]]),Pk=e("h1",null,"Quirks",-1),Ik={__name:"48",setup(t){const n={layout:"cover",background:"/DSC09320.jpg",hide:!1,srcSequence:"./pages/04-quirks.md"};return R(V),(s,o)=>(v(),q(Gs,le(oe(n)),{default:U(()=>[Pk]),_:1},16))}},Mk=z(Ik,[["__file","/@slidev/slides/48.md"]]),Lk=e("h2",null,"Can we just know which UTF Encoding by looking at the bytes?",-1),Rk=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"fn"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"main"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"let"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"s"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'b"'),e("span",{style:{color:"#D4976C"}},"\\x00\\x10\\x"),e("span",{style:{color:"#C98A7D"}},"CA"),e("span",{style:{color:"#D4976C"}},"\\x"),e("span",{style:{color:"#C98A7D"}},"9C"),e("span",{style:{color:"#D4976C"}},"\\x00\\x10\\x"),e("span",{style:{color:"#C98A7D"}},"C9"),e("span",{style:{color:"#D4976C"}},"\\x"),e("span",{style:{color:"#C98A7D"}},"98"),e("span",{style:{color:"#D4976C"}},"\\x00\\x10\\x"),e("span",{style:{color:"#C98A7D"}},"C9"),e("span",{style:{color:"#D4976C"}},"\\x"),e("span",{style:{color:"#C98A7D"}},"AD"),e("span",{style:{color:"#D4976C"}},"\\x00\\x10\\x"),e("span",{style:{color:"#C98A7D"}},"C9"),e("span",{style:{color:"#D4976C"}},"\\x"),e("span",{style:{color:"#C98A7D"}},"AD"),e("span",{style:{color:"#D4976C"}},"\\x00\\x10\\x"),e("span",{style:{color:"#C98A7D"}},"CA"),e("span",{style:{color:"#D4976C"}},"\\x"),e("span",{style:{color:"#C98A7D"}},'98"'),e("span",{style:{color:"#858585"}},";")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    ")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"    // UTF-8 decode")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"let"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"utf8_s"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"std"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#A1B567"}},"str"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#A1B567"}},"from_utf8"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"s"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#CB7676"}},"."),e("span",{style:{color:"#A1B567"}},"unwrap"),e("span",{style:{color:"#858585"}},"();")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"println!"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'" UTF-8: '),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#C98A7D"}},"utf8_s"),e("span",{style:{color:"#858585"}},"}"),e("span",{style:{color:"#C98A7D"}},'"'),e("span",{style:{color:"#858585"}},");")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    ")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"    // UTF-16 decode")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"let"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"utf16"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Vec"),e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#A1B567"}},"u16"),e("span",{style:{color:"#858585"}},">"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"s"),e("span",{style:{color:"#CB7676"}},"."),e("span",{style:{color:"#A1B567"}},"chunks"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#6394BF"}},"2"),e("span",{style:{color:"#858585"}},")")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#CB7676"}},"."),e("span",{style:{color:"#A1B567"}},"map"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#CB7676"}},"|"),e("span",{style:{color:"#B8A965"}},"c"),e("span",{style:{color:"#CB7676"}},"|"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"c"),e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#6394BF"}},"0"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"as"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"u16"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"<<"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"8"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"|"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"c"),e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"as"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"u16"),e("span",{style:{color:"#858585"}},"))")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#CB7676"}},"."),e("span",{style:{color:"#A1B567"}},"collect"),e("span",{style:{color:"#858585"}},"();")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"let"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"utf16_s"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"char"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#A1B567"}},"decode_utf16"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"utf16"),e("span",{style:{color:"#858585"}},")")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#CB7676"}},"."),e("span",{style:{color:"#A1B567"}},"map"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#CB7676"}},"|"),e("span",{style:{color:"#B8A965"}},"r"),e("span",{style:{color:"#CB7676"}},"|"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"r"),e("span",{style:{color:"#CB7676"}},"."),e("span",{style:{color:"#A1B567"}},"unwrap_or"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#A1B567"}},"char"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#D4976C"}},"REPLACEMENT_CHARACTER"),e("span",{style:{color:"#858585"}},"))")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#CB7676"}},"."),e("span",{style:{color:"#A1B567"}},"collect"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#A1B567"}},"String"),e("span",{style:{color:"#858585"}},">();")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"println!"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"UTF-16: '),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#C98A7D"}},"utf16_s"),e("span",{style:{color:"#858585"}},"}"),e("span",{style:{color:"#C98A7D"}},'"'),e("span",{style:{color:"#858585"}},");")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    ")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"    // UTF-32 decode")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"let"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"utf32_s"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"String"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"s"),e("span",{style:{color:"#CB7676"}},"."),e("span",{style:{color:"#A1B567"}},"chunks"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#6394BF"}},"4"),e("span",{style:{color:"#858585"}},")")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#CB7676"}},"."),e("span",{style:{color:"#A1B567"}},"map"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#CB7676"}},"|"),e("span",{style:{color:"#B8A965"}},"c"),e("span",{style:{color:"#CB7676"}},"|"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"c"),e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#6394BF"}},"0"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"as"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"u32"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"<<"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"24"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"|"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"c"),e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"as"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"u32"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"<<"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"16"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"|"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"c"),e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#6394BF"}},"2"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"as"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"u32"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"<<"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"8"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"|"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"c"),e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#6394BF"}},"3"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"as"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"u32"),e("span",{style:{color:"#858585"}},"))")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#CB7676"}},"."),e("span",{style:{color:"#A1B567"}},"map"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#CB7676"}},"|"),e("span",{style:{color:"#B8A965"}},"c"),e("span",{style:{color:"#CB7676"}},"|"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"char"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#A1B567"}},"from_u32"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"c"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#CB7676"}},"."),e("span",{style:{color:"#A1B567"}},"unwrap"),e("span",{style:{color:"#858585"}},"())")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#CB7676"}},"."),e("span",{style:{color:"#A1B567"}},"collect"),e("span",{style:{color:"#858585"}},"();")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"println!"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"UTF-32: '),e("span",{style:{color:"#858585"}},"{}"),e("span",{style:{color:"#C98A7D"}},'"'),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"utf32_s"),e("span",{style:{color:"#858585"}},");")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"fn"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"main"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"let"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"s"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'b"'),e("span",{style:{color:"#A65E2B"}},"\\x00\\x10\\x"),e("span",{style:{color:"#B56959"}},"CA"),e("span",{style:{color:"#A65E2B"}},"\\x"),e("span",{style:{color:"#B56959"}},"9C"),e("span",{style:{color:"#A65E2B"}},"\\x00\\x10\\x"),e("span",{style:{color:"#B56959"}},"C9"),e("span",{style:{color:"#A65E2B"}},"\\x"),e("span",{style:{color:"#B56959"}},"98"),e("span",{style:{color:"#A65E2B"}},"\\x00\\x10\\x"),e("span",{style:{color:"#B56959"}},"C9"),e("span",{style:{color:"#A65E2B"}},"\\x"),e("span",{style:{color:"#B56959"}},"AD"),e("span",{style:{color:"#A65E2B"}},"\\x00\\x10\\x"),e("span",{style:{color:"#B56959"}},"C9"),e("span",{style:{color:"#A65E2B"}},"\\x"),e("span",{style:{color:"#B56959"}},"AD"),e("span",{style:{color:"#A65E2B"}},"\\x00\\x10\\x"),e("span",{style:{color:"#B56959"}},"CA"),e("span",{style:{color:"#A65E2B"}},"\\x"),e("span",{style:{color:"#B56959"}},'98"'),e("span",{style:{color:"#8E8F8B"}},";")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    ")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"    // UTF-8 decode")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"let"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"utf8_s"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"std"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#6C7834"}},"str"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#6C7834"}},"from_utf8"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"s"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#AB5959"}},"."),e("span",{style:{color:"#6C7834"}},"unwrap"),e("span",{style:{color:"#8E8F8B"}},"();")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"println!"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},'" UTF-8: '),e("span",{style:{color:"#8E8F8B"}},"{"),e("span",{style:{color:"#B56959"}},"utf8_s"),e("span",{style:{color:"#8E8F8B"}},"}"),e("span",{style:{color:"#B56959"}},'"'),e("span",{style:{color:"#8E8F8B"}},");")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    ")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"    // UTF-16 decode")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"let"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"utf16"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Vec"),e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#6C7834"}},"u16"),e("span",{style:{color:"#8E8F8B"}},">"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"s"),e("span",{style:{color:"#AB5959"}},"."),e("span",{style:{color:"#6C7834"}},"chunks"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#296AA3"}},"2"),e("span",{style:{color:"#8E8F8B"}},")")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#AB5959"}},"."),e("span",{style:{color:"#6C7834"}},"map"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#AB5959"}},"|"),e("span",{style:{color:"#8C862B"}},"c"),e("span",{style:{color:"#AB5959"}},"|"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"c"),e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#296AA3"}},"0"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"as"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"u16"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"<<"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"8"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"|"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"c"),e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#296AA3"}},"1"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"as"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"u16"),e("span",{style:{color:"#8E8F8B"}},"))")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#AB5959"}},"."),e("span",{style:{color:"#6C7834"}},"collect"),e("span",{style:{color:"#8E8F8B"}},"();")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"let"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"utf16_s"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"char"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#6C7834"}},"decode_utf16"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"utf16"),e("span",{style:{color:"#8E8F8B"}},")")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#AB5959"}},"."),e("span",{style:{color:"#6C7834"}},"map"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#AB5959"}},"|"),e("span",{style:{color:"#8C862B"}},"r"),e("span",{style:{color:"#AB5959"}},"|"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"r"),e("span",{style:{color:"#AB5959"}},"."),e("span",{style:{color:"#6C7834"}},"unwrap_or"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#6C7834"}},"char"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#A65E2B"}},"REPLACEMENT_CHARACTER"),e("span",{style:{color:"#8E8F8B"}},"))")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#AB5959"}},"."),e("span",{style:{color:"#6C7834"}},"collect"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#6C7834"}},"String"),e("span",{style:{color:"#8E8F8B"}},">();")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"println!"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},'"UTF-16: '),e("span",{style:{color:"#8E8F8B"}},"{"),e("span",{style:{color:"#B56959"}},"utf16_s"),e("span",{style:{color:"#8E8F8B"}},"}"),e("span",{style:{color:"#B56959"}},'"'),e("span",{style:{color:"#8E8F8B"}},");")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    ")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"    // UTF-32 decode")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"let"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"utf32_s"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"String"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"s"),e("span",{style:{color:"#AB5959"}},"."),e("span",{style:{color:"#6C7834"}},"chunks"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#296AA3"}},"4"),e("span",{style:{color:"#8E8F8B"}},")")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#AB5959"}},"."),e("span",{style:{color:"#6C7834"}},"map"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#AB5959"}},"|"),e("span",{style:{color:"#8C862B"}},"c"),e("span",{style:{color:"#AB5959"}},"|"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"c"),e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#296AA3"}},"0"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"as"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"u32"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"<<"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"24"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"|"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"c"),e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#296AA3"}},"1"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"as"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"u32"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"<<"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"16"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"|"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"c"),e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#296AA3"}},"2"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"as"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"u32"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"<<"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"8"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"|"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"c"),e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#296AA3"}},"3"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"as"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"u32"),e("span",{style:{color:"#8E8F8B"}},"))")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#AB5959"}},"."),e("span",{style:{color:"#6C7834"}},"map"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#AB5959"}},"|"),e("span",{style:{color:"#8C862B"}},"c"),e("span",{style:{color:"#AB5959"}},"|"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"char"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#6C7834"}},"from_u32"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"c"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#AB5959"}},"."),e("span",{style:{color:"#6C7834"}},"unwrap"),e("span",{style:{color:"#8E8F8B"}},"())")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#AB5959"}},"."),e("span",{style:{color:"#6C7834"}},"collect"),e("span",{style:{color:"#8E8F8B"}},"();")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"println!"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},'"UTF-32: '),e("span",{style:{color:"#8E8F8B"}},"{}"),e("span",{style:{color:"#B56959"}},'"'),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"utf32_s"),e("span",{style:{color:"#8E8F8B"}},");")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),Nk={__name:"49",setup(t){const n={hide:!1,srcSequence:"./pages/04-quirks.md"};return R(V),(s,o)=>{const l=Ot;return v(),q(Te,le(oe(n)),{default:U(()=>[Lk,I(l,qe({},{ranges:["all","1-2,23","1-6,23","1-2,8-15,23","1-2,17-23"]}),{default:U(()=>[Rk]),_:1},16)]),_:1},16)}}},jk=z(Nk,[["__file","/@slidev/slides/49.md"]]);const ah=t=>(vi("data-v-8fe23771"),t=t(),_i(),t),Wk=ah(()=>e("div",{class:"output"},[e("p",{class:"text-xl width-100 text-center"},[e("p",null,[e("strong",null,"No")])]),e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#dbd7ca"}}," UTF-8: ʜɘɭɭʘ")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#dbd7ca"}},"UTF-16: 쪖즘즭즭쪘")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#dbd7ca"}},"UTF-32: 􌪜􌦘􌦭􌦭􌪘")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#393a34"}}," UTF-8: ʜɘɭɭʘ")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393a34"}},"UTF-16: 쪖즘즭즭쪘")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393a34"}},"UTF-32: 􌪜􌦘􌦭􌦭􌪘")])])])])],-1)),qk=ah(()=>e("div",{class:"text-3xl absolute top-115 left-150"},'"I gained weight" 🤷',-1)),Hk={__name:"50",setup(t){const n={layout:"center",hide:!1,srcSequence:"./pages/04-quirks.md"};return R(V),(s,o)=>{const l=Ni,r=ot;return v(),q(Qe,le(oe(n)),{default:U(()=>[Wk,I(r,null,{default:U(()=>[I(l,{x1:"700",y1:"450",x2:"600",y2:"320",width:"3"}),qk]),_:1})]),_:1},16)}}},Vk=z(Hk,[["__scopeId","data-v-8fe23771"],["__file","/@slidev/slides/50.md"]]),zk=e("h2",null,"Streets!",-1),Kk=e("p",null,"Straße!",-1),Gk=e("p",null,"or…",-1),Yk=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"let"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"s"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"Straße"'),e("span",{style:{color:"#858585"}},";")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"let"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"upcase"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"String"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"s"),e("span",{style:{color:"#CB7676"}},"."),e("span",{style:{color:"#A1B567"}},"to_uppercase"),e("span",{style:{color:"#858585"}},"();")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"let"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"downcase"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"String"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"s"),e("span",{style:{color:"#CB7676"}},"."),e("span",{style:{color:"#A1B567"}},"to_lowercase"),e("span",{style:{color:"#858585"}},"();")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"let"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"s"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"Straße"'),e("span",{style:{color:"#8E8F8B"}},";")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"let"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"upcase"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"String"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"s"),e("span",{style:{color:"#AB5959"}},"."),e("span",{style:{color:"#6C7834"}},"to_uppercase"),e("span",{style:{color:"#8E8F8B"}},"();")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"let"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"downcase"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"String"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"s"),e("span",{style:{color:"#AB5959"}},"."),e("span",{style:{color:"#6C7834"}},"to_lowercase"),e("span",{style:{color:"#8E8F8B"}},"();")])])])],-1),Zk=e("p",null,"Questions:",-1),Qk=e("ul",null,[e("li",null,[d("What does "),e("code",null,"upcase"),d(" contain?")]),e("li",null,[d("What does "),e("code",null,"downcase"),d(" contain?")]),e("li",null,[d("Why do we get "),e("code",null,"Strings"),d(" back?")])],-1),Jk={class:"absolute top-75 left-90 list-circle"},Xk=e("ul",null,[e("li",null,[e("code",null,"STRASSE")]),e("li",null,[e("code",null,"strasse")])],-1),e4=[Xk],t4={class:"mt-5"},n4=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"pub"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"fn"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"make_ascii_lowercase"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#CB7676"}},"&mut"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"self"),e("span",{style:{color:"#858585"}},");")]),d(`
`),e("span",{class:"line"}),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"pub"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"fn"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"to_lowercase"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#CB7676"}},"&"),e("span",{style:{color:"#D4976C"}},"self"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"String"),e("span",{style:{color:"#858585"}},";")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"pub"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"fn"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"make_ascii_lowercase"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#AB5959"}},"&mut"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"self"),e("span",{style:{color:"#8E8F8B"}},");")]),d(`
`),e("span",{class:"line"}),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"pub"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"fn"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"to_lowercase"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#AB5959"}},"&"),e("span",{style:{color:"#A65E2B"}},"self"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"String"),e("span",{style:{color:"#8E8F8B"}},";")])])])],-1),s4={__name:"51",setup(t){const n={hide:!1,srcSequence:"./pages/04-quirks.md"};return R(V),(s,o)=>{const l=Ot,r=ot,a=jt("click");return v(),q(Te,le(oe(n)),{default:U(()=>[zk,Kk,Gk,I(l,qe({},{ranges:[""]}),{default:U(()=>[Yk]),_:1},16),I(r,null,{default:U(()=>[Zk,Qk]),_:1}),Ke((v(),k("div",Jk,e4)),[[a]]),Ke((v(),k("div",t4,[I(l,qe({},{ranges:[""]}),{default:U(()=>[n4]),_:1},16)])),[[a]])]),_:1},16)}}},o4=z(s4,[["__file","/@slidev/slides/51.md"]]),l4=e("h2",null,"Casemapping!",-1),r4=e("blockquote",null,[e("p",null,"If it works in Turkey, it probably works everywhere")],-1),a4=e("p",null,[e("code",null,"Istanbul"),d(" or "),e("code",null,"İstanbul")],-1),i4={class:"flex flex-items-center flex-justify-center w-a"},c4=e("div",{class:"codepoint"},[e("div",{class:"glyph"},"İ"),e("div",{class:"code"},"U+0130")],-1),u4=e("div",{class:"inline-block mx-10 text-center"},[e("div",{class:"text-10"},"⇛"),e("div",null,[e("p",null,[e("code",null,"to_lowercase()")])])],-1),p4=e("div",{class:"codepoint"},[e("div",{class:"glyph"},"i"),e("div",{class:"code"},"U+0069")],-1),d4=[c4,u4,p4],f4={class:"flex flex-items-center flex-justify-center w-a"},h4=e("div",{class:"codepoint"},[e("div",{class:"glyph"},"i"),e("div",{class:"code"},"U+0069")],-1),y4=e("div",{class:"inline-block mx-10 text-center"},[e("div",{class:"text-10"},"⇛"),e("div",null,[e("p",null,[e("code",null,"to_uppercase()")])])],-1),m4=e("div",{class:"codepoint"},[e("div",{class:"glyph"},"I"),e("div",{class:"code"},"U+0049")],-1),g4=[h4,y4,m4],v4=e("footer",null,[e("p",null,[d("Special Casing: "),e("a",{href:"https://www.unicode.org/Public/UCD/latest/ucd/SpecialCasing.txt",target:"_blank",rel:"noopener"},"https://www.unicode.org/Public/UCD/latest/ucd/SpecialCasing.txt"),e("br"),d(" And an issue: "),e("a",{href:"https://github.com/rust-lang/rust/issues/72966",target:"_blank",rel:"noopener"},"https://github.com/rust-lang/rust/issues/72966")])],-1),_4={__name:"52",setup(t){const n={hide:!1,srcSequence:"./pages/04-quirks.md"};return R(V),(s,o)=>{const l=jt("click");return v(),q(Te,le(oe(n)),{default:U(()=>[l4,r4,a4,Ke((v(),k("div",i4,d4)),[[l]]),Ke((v(),k("div",f4,g4)),[[l]]),v4]),_:1},16)}}},b4=z(_4,[["__file","/@slidev/slides/52.md"]]),x4=e("h2",null,"Composition",-1),A4=e("p",null,"A[cute] E",-1),w4=e("ul",null,[e("li",null,[d("é = "),e("code",null,"\\u00e9")]),e("li",null,[d("é = "),e("code",null,"\\u0065\\u0301"),d(" ("),e("code",null,"e"),d(" + combining "),e("code",null,"´"),d(")")])],-1),B4=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// assert_ne!('é', 'é');")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"   "),e("span",{style:{color:"#A1B567"}},"assert_ne!"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"é"'),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"é"'),e("span",{style:{color:"#858585"}},");")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// assert_ne!('é', 'é');")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"   "),e("span",{style:{color:"#6C7834"}},"assert_ne!"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},'"é"'),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"é"'),e("span",{style:{color:"#8E8F8B"}},");")])])])],-1),C4=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"unicode_normalization"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#A1B567"}},"UnicodeNormalization"),e("span",{style:{color:"#858585"}},";")]),d(`
`),e("span",{class:"line"}),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"fn"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"main"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"let"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"u00e9"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"'),e("span",{style:{color:"#D4976C"}},"\\u{00e9}"),e("span",{style:{color:"#C98A7D"}},'"'),e("span",{style:{color:"#858585"}},";")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"let"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"u0065_u0301"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"'),e("span",{style:{color:"#D4976C"}},"\\u{0065}\\u{0301}"),e("span",{style:{color:"#C98A7D"}},'"'),e("span",{style:{color:"#858585"}},";")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    ")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"assert_ne!"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"u00e9"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"u0065_u0301"),e("span",{style:{color:"#858585"}},");")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"assert_eq!"),e("span",{style:{color:"#858585"}},"(")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#B8A965"}},"u00e9"),e("span",{style:{color:"#CB7676"}},"."),e("span",{style:{color:"#A1B567"}},"nfc"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#CB7676"}},"."),e("span",{style:{color:"#A1B567"}},"collect"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#A1B567"}},"String"),e("span",{style:{color:"#858585"}},">(),")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#B8A965"}},"u0065_u0301"),e("span",{style:{color:"#CB7676"}},"."),e("span",{style:{color:"#A1B567"}},"nfc"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#CB7676"}},"."),e("span",{style:{color:"#A1B567"}},"collect"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#A1B567"}},"String"),e("span",{style:{color:"#858585"}},">()")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},");")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"unicode_normalization"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#6C7834"}},"UnicodeNormalization"),e("span",{style:{color:"#8E8F8B"}},";")]),d(`
`),e("span",{class:"line"}),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"fn"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"main"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"let"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"u00e9"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"'),e("span",{style:{color:"#A65E2B"}},"\\u{00e9}"),e("span",{style:{color:"#B56959"}},'"'),e("span",{style:{color:"#8E8F8B"}},";")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"let"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"u0065_u0301"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"'),e("span",{style:{color:"#A65E2B"}},"\\u{0065}\\u{0301}"),e("span",{style:{color:"#B56959"}},'"'),e("span",{style:{color:"#8E8F8B"}},";")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    ")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"assert_ne!"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"u00e9"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"u0065_u0301"),e("span",{style:{color:"#8E8F8B"}},");")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"assert_eq!"),e("span",{style:{color:"#8E8F8B"}},"(")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8C862B"}},"u00e9"),e("span",{style:{color:"#AB5959"}},"."),e("span",{style:{color:"#6C7834"}},"nfc"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#AB5959"}},"."),e("span",{style:{color:"#6C7834"}},"collect"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#6C7834"}},"String"),e("span",{style:{color:"#8E8F8B"}},">(),")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8C862B"}},"u0065_u0301"),e("span",{style:{color:"#AB5959"}},"."),e("span",{style:{color:"#6C7834"}},"nfc"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#AB5959"}},"."),e("span",{style:{color:"#6C7834"}},"collect"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#6C7834"}},"String"),e("span",{style:{color:"#8E8F8B"}},">()")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},");")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),k4=e("footer",null,[e("ul",null,[e("li",null,[d("Unicode combining classes: "),e("a",{href:"https://www.compart.com/en/unicode/combining",target:"_blank",rel:"noopener"},"https://www.compart.com/en/unicode/combining")]),e("li",null,[d("Unicode Normalization Forms: "),e("a",{href:"http://www.unicode.org/reports/tr15/",target:"_blank",rel:"noopener"},"http://www.unicode.org/reports/tr15/")]),e("li",null,[d("Crate unicode_normalization: "),e("a",{href:"https://docs.rs/unicode-normalization/latest/unicode_normalization/",target:"_blank",rel:"noopener"},"https://docs.rs/unicode-normalization/latest/unicode_normalization/")])])],-1),F4={__name:"53",setup(t){const n={hide:!1,srcSequence:"./pages/04-quirks.md"};return R(V),(s,o)=>{const l=Ot,r=ot,a=jt("click");return v(),q(Te,le(oe(n)),{default:U(()=>[x4,A4,w4,Ke((v(),k("div",null,[I(l,qe({},{ranges:[""]}),{default:U(()=>[B4]),_:1},16)])),[[a]]),I(r,null,{default:U(()=>[I(l,qe({},{ranges:[""]}),{default:U(()=>[C4]),_:1},16)]),_:1}),k4]),_:1},16)}}},D4=z(F4,[["__file","/@slidev/slides/53.md"]]),E4=e("h2",null,"Emoji Composition",-1),S4=e("p",{style:{"font-size":"65%","line-height":"1rem"}}," 😶‍🌫️ 😮‍💨 😵‍💫 ❤️‍🔥 ❤️‍🩹 👁️‍🗨️ 🫱🏻‍🫲🏼 🫱🏻‍🫲🏽 🫱🏻‍🫲🏾 🫱🏻‍🫲🏿 🫱🏼‍🫲🏻 🫱🏼‍🫲🏽 🫱🏼‍🫲🏾 🫱🏼‍🫲🏿 🫱🏽‍🫲🏻 🫱🏽‍🫲🏼 🫱🏽‍🫲🏾 🫱🏽‍🫲🏿 🫱🏾‍🫲🏻 🫱🏾‍🫲🏼 🫱🏾‍🫲🏽 🫱🏾‍🫲🏿 🫱🏿‍🫲🏻 🫱🏿‍🫲🏼 🫱🏿‍🫲🏽 🫱🏿‍🫲🏾 🧔‍♂️ 🧔🏻‍♂️ 🧔🏼‍♂️ 🧔🏽‍♂️ 🧔🏾‍♂️ 🧔🏿‍♂️ 🧔‍♀️ 🧔🏻‍♀️ 🧔🏼‍♀️ 🧔🏽‍♀️ 🧔🏾‍♀️ 🧔🏿‍♀️ 👨‍🦰 👨🏻‍🦰 👨🏼‍🦰 👨🏽‍🦰 👨🏾‍🦰 👨🏿‍🦰 👨‍🦱 👨🏻‍🦱 👨🏼‍🦱 👨🏽‍🦱 👨🏾‍🦱 👨🏿‍🦱 👨‍🦳 👨🏻‍🦳 👨🏼‍🦳 👨🏽‍🦳 👨🏾‍🦳 👨🏿‍🦳 👨‍🦲 👨🏻‍🦲 👨🏼‍🦲 👨🏽‍🦲 👨🏾‍🦲 👨🏿‍🦲 👩‍🦰 👩🏻‍🦰 👩🏼‍🦰 👩🏽‍🦰 👩🏾‍🦰 👩🏿‍🦰 🧑‍🦰 🧑🏻‍🦰 🧑🏼‍🦰 🧑🏽‍🦰 🧑🏾‍🦰 🧑🏿‍🦰 👩‍🦱 👩🏻‍🦱 👩🏼‍🦱 👩🏽‍🦱 👩🏾‍🦱 👩🏿‍🦱 🧑‍🦱 🧑🏻‍🦱 🧑🏼‍🦱 🧑🏽‍🦱 🧑🏾‍🦱 🧑🏿‍🦱 👩‍🦳 👩🏻‍🦳 👩🏼‍🦳 👩🏽‍🦳 👩🏾‍🦳 👩🏿‍🦳 🧑‍🦳 🧑🏻‍🦳 🧑🏼‍🦳 🧑🏽‍🦳 🧑🏾‍🦳 🧑🏿‍🦳 👩‍🦲 👩🏻‍🦲 👩🏼‍🦲 👩🏽‍🦲 👩🏾‍🦲 👩🏿‍🦲 🧑‍🦲 🧑🏻‍🦲 🧑🏼‍🦲 🧑🏽‍🦲 🧑🏾‍🦲 🧑🏿‍🦲 👱‍♀️ 👱🏻‍♀️ 👱🏼‍♀️ 👱🏽‍♀️ 👱🏾‍♀️ 👱🏿‍♀️ 👱‍♂️ 👱🏻‍♂️ 👱🏼‍♂️ 👱🏽‍♂️ 👱🏾‍♂️ 👱🏿‍♂️ 🙍‍♂️ 🙍🏻‍♂️ 🙍🏼‍♂️ 🙍🏽‍♂️ 🙍🏾‍♂️ 🙍🏿‍♂️ 🙍‍♀️ 🙍🏻‍♀️ 🙍🏼‍♀️ 🙍🏽‍♀️ 🙍🏾‍♀️ 🙍🏿‍♀️ 🙎‍♂️ 🙎🏻‍♂️ 🙎🏼‍♂️ 🙎🏽‍♂️ 🙎🏾‍♂️ 🙎🏿‍♂️ 🙎‍♀️ 🙎🏻‍♀️ 🙎🏼‍♀️ 🙎🏽‍♀️ 🙎🏾‍♀️ 🙎🏿‍♀️ 🙅‍♂️ 🙅🏻‍♂️ 🙅🏼‍♂️ 🙅🏽‍♂️ 🙅🏾‍♂️ 🙅🏿‍♂️ 🙅‍♀️ 🙅🏻‍♀️ 🙅🏼‍♀️ 🙅🏽‍♀️ 🙅🏾‍♀️ 🙅🏿‍♀️ 🙆‍♂️ 🙆🏻‍♂️ 🙆🏼‍♂️ 🙆🏽‍♂️ 🙆🏾‍♂️ 🙆🏿‍♂️ 🙆‍♀️ 🙆🏻‍♀️ 🙆🏼‍♀️ 🙆🏽‍♀️ 🙆🏾‍♀️ 🙆🏿‍♀️ 💁‍♂️ 💁🏻‍♂️ 💁🏼‍♂️ 💁🏽‍♂️ 💁🏾‍♂️ 💁🏿‍♂️ 💁‍♀️ 💁🏻‍♀️ 💁🏼‍♀️ 💁🏽‍♀️ 💁🏾‍♀️ 💁🏿‍♀️ 🙋‍♂️ 🙋🏻‍♂️ 🙋🏼‍♂️ 🙋🏽‍♂️ 🙋🏾‍♂️ 🙋🏿‍♂️ 🙋‍♀️ 🙋🏻‍♀️ 🙋🏼‍♀️ 🙋🏽‍♀️ 🙋🏾‍♀️ 🙋🏿‍♀️ 🧏‍♂️ 🧏🏻‍♂️ 🧏🏼‍♂️ 🧏🏽‍♂️ 🧏🏾‍♂️ 🧏🏿‍♂️ 🧏‍♀️ 🧏🏻‍♀️ 🧏🏼‍♀️ 🧏🏽‍♀️ 🧏🏾‍♀️ 🧏🏿‍♀️ 🙇‍♂️ 🙇🏻‍♂️ 🙇🏼‍♂️ 🙇🏽‍♂️ 🙇🏾‍♂️ 🙇🏿‍♂️ 🙇‍♀️ 🙇🏻‍♀️ 🙇🏼‍♀️ 🙇🏽‍♀️ 🙇🏾‍♀️ 🙇🏿‍♀️ 🤦‍♂️ 🤦🏻‍♂️ 🤦🏼‍♂️ 🤦🏽‍♂️ 🤦🏾‍♂️ 🤦🏿‍♂️ 🤦‍♀️ 🤦🏻‍♀️ 🤦🏼‍♀️ 🤦🏽‍♀️ 🤦🏾‍♀️ 🤦🏿‍♀️ 🤷‍♂️ 🤷🏻‍♂️ 🤷🏼‍♂️ 🤷🏽‍♂️ 🤷🏾‍♂️ 🤷🏿‍♂️ 🤷‍♀️ 🤷🏻‍♀️ 🤷🏼‍♀️ 🤷🏽‍♀️ 🤷🏾‍♀️ 🤷🏿‍♀️ 🧑‍⚕️ 🧑🏻‍⚕️ 🧑🏼‍⚕️ 🧑🏽‍⚕️ 🧑🏾‍⚕️ 🧑🏿‍⚕️ 👨‍⚕️ 👨🏻‍⚕️ 👨🏼‍⚕️ 👨🏽‍⚕️ 👨🏾‍⚕️ 👨🏿‍⚕️ 👩‍⚕️ 👩🏻‍⚕️ 👩🏼‍⚕️ 👩🏽‍⚕️ 👩🏾‍⚕️ 👩🏿‍⚕️ 🧑‍🎓 🧑🏻‍🎓 🧑🏼‍🎓 🧑🏽‍🎓 🧑🏾‍🎓 🧑🏿‍🎓 👨‍🎓 👨🏻‍🎓 👨🏼‍🎓 👨🏽‍🎓 👨🏾‍🎓 👨🏿‍🎓 👩‍🎓 👩🏻‍🎓 👩🏼‍🎓 👩🏽‍🎓 👩🏾‍🎓 👩🏿‍🎓 🧑‍🏫 🧑🏻‍🏫 🧑🏼‍🏫 🧑🏽‍🏫 🧑🏾‍🏫 🧑🏿‍🏫 👨‍🏫 👨🏻‍🏫 👨🏼‍🏫 👨🏽‍🏫 👨🏾‍🏫 👨🏿‍🏫 👩‍🏫 👩🏻‍🏫 👩🏼‍🏫 👩🏽‍🏫 👩🏾‍🏫 👩🏿‍🏫 🧑‍⚖️ 🧑🏻‍⚖️ 🧑🏼‍⚖️ 🧑🏽‍⚖️ 🧑🏾‍⚖️ 🧑🏿‍⚖️ 👨‍⚖️ 👨🏻‍⚖️ 👨🏼‍⚖️ 👨🏽‍⚖️ 👨🏾‍⚖️ 👨🏿‍⚖️ 👩‍⚖️ 👩🏻‍⚖️ 👩🏼‍⚖️ 👩🏽‍⚖️ 👩🏾‍⚖️ 👩🏿‍⚖️ 🧑‍🌾 🧑🏻‍🌾 🧑🏼‍🌾 🧑🏽‍🌾 🧑🏾‍🌾 🧑🏿‍🌾 👨‍🌾 👨🏻‍🌾 👨🏼‍🌾 👨🏽‍🌾 👨🏾‍🌾 👨🏿‍🌾 👩‍🌾 👩🏻‍🌾 👩🏼‍🌾 👩🏽‍🌾 👩🏾‍🌾 👩🏿‍🌾 🧑‍🍳 🧑🏻‍🍳 🧑🏼‍🍳 🧑🏽‍🍳 🧑🏾‍🍳 🧑🏿‍🍳 👨‍🍳 👨🏻‍🍳 👨🏼‍🍳 👨🏽‍🍳 👨🏾‍🍳 👨🏿‍🍳 👩‍🍳 👩🏻‍🍳 👩🏼‍🍳 👩🏽‍🍳 👩🏾‍🍳 👩🏿‍🍳 🧑‍🔧 🧑🏻‍🔧 🧑🏼‍🔧 🧑🏽‍🔧 🧑🏾‍🔧 🧑🏿‍🔧 👨‍🔧 👨🏻‍🔧 👨🏼‍🔧 👨🏽‍🔧 👨🏾‍🔧 👨🏿‍🔧 👩‍🔧 👩🏻‍🔧 👩🏼‍🔧 👩🏽‍🔧 👩🏾‍🔧 👩🏿‍🔧 🧑‍🏭 🧑🏻‍🏭 🧑🏼‍🏭 🧑🏽‍🏭 🧑🏾‍🏭 🧑🏿‍🏭 👨‍🏭 👨🏻‍🏭 👨🏼‍🏭 👨🏽‍🏭 👨🏾‍🏭 👨🏿‍🏭 👩‍🏭 👩🏻‍🏭 👩🏼‍🏭 👩🏽‍🏭 👩🏾‍🏭 👩🏿‍🏭 🧑‍💼 🧑🏻‍💼 🧑🏼‍💼 🧑🏽‍💼 🧑🏾‍💼 🧑🏿‍💼 👨‍💼 👨🏻‍💼 👨🏼‍💼 👨🏽‍💼 👨🏾‍💼 👨🏿‍💼 👩‍💼 👩🏻‍💼 👩🏼‍💼 👩🏽‍💼 👩🏾‍💼 👩🏿‍💼 🧑‍🔬 🧑🏻‍🔬 🧑🏼‍🔬 🧑🏽‍🔬 🧑🏾‍🔬 🧑🏿‍🔬 👨‍🔬 👨🏻‍🔬 👨🏼‍🔬 👨🏽‍🔬 👨🏾‍🔬 👨🏿‍🔬 👩‍🔬 👩🏻‍🔬 👩🏼‍🔬 👩🏽‍🔬 👩🏾‍🔬 👩🏿‍🔬 🧑‍💻 🧑🏻‍💻 🧑🏼‍💻 🧑🏽‍💻 🧑🏾‍💻 🧑🏿‍💻 👨‍💻 👨🏻‍💻 👨🏼‍💻 👨🏽‍💻 👨🏾‍💻 👨🏿‍💻 👩‍💻 👩🏻‍💻 👩🏼‍💻 👩🏽‍💻 👩🏾‍💻 👩🏿‍💻 🧑‍🎤 🧑🏻‍🎤 🧑🏼‍🎤 🧑🏽‍🎤 🧑🏾‍🎤 🧑🏿‍🎤 👨‍🎤 👨🏻‍🎤 👨🏼‍🎤 👨🏽‍🎤 👨🏾‍🎤 👨🏿‍🎤 👩‍🎤 👩🏻‍🎤 👩🏼‍🎤 👩🏽‍🎤 👩🏾‍🎤 👩🏿‍🎤 🧑‍🎨 🧑🏻‍🎨 🧑🏼‍🎨 🧑🏽‍🎨 🧑🏾‍🎨 🧑🏿‍🎨 👨‍🎨 👨🏻‍🎨 👨🏼‍🎨 👨🏽‍🎨 👨🏾‍🎨 👨🏿‍🎨 👩‍🎨 👩🏻‍🎨 👩🏼‍🎨 👩🏽‍🎨 👩🏾‍🎨 👩🏿‍🎨 🧑‍✈️ 🧑🏻‍✈️ 🧑🏼‍✈️ 🧑🏽‍✈️ 🧑🏾‍✈️ 🧑🏿‍✈️ 👨‍✈️ 👨🏻‍✈️ 👨🏼‍✈️ 👨🏽‍✈️ 👨🏾‍✈️ 👨🏿‍✈️ 👩‍✈️ 👩🏻‍✈️ 👩🏼‍✈️ 👩🏽‍✈️ 👩🏾‍✈️ 👩🏿‍✈️ 🧑‍🚀 🧑🏻‍🚀 🧑🏼‍🚀 🧑🏽‍🚀 🧑🏾‍🚀 🧑🏿‍🚀 👨‍🚀 👨🏻‍🚀 👨🏼‍🚀 👨🏽‍🚀 👨🏾‍🚀 👨🏿‍🚀 👩‍🚀 👩🏻‍🚀 👩🏼‍🚀 👩🏽‍🚀 👩🏾‍🚀 👩🏿‍🚀 🧑‍🚒 🧑🏻‍🚒 🧑🏼‍🚒 🧑🏽‍🚒 🧑🏾‍🚒 🧑🏿‍🚒 👨‍🚒 👨🏻‍🚒 👨🏼‍🚒 👨🏽‍🚒 👨🏾‍🚒 👨🏿‍🚒 👩‍🚒 👩🏻‍🚒 👩🏼‍🚒 👩🏽‍🚒 👩🏾‍🚒 👩🏿‍🚒 👮‍♂️ 👮🏻‍♂️ 👮🏼‍♂️ 👮🏽‍♂️ 👮🏾‍♂️ 👮🏿‍♂️ 👮‍♀️ 👮🏻‍♀️ 👮🏼‍♀️ 👮🏽‍♀️ 👮🏾‍♀️ 👮🏿‍♀️ 🕵️‍♂️ 🕵🏻‍♂️ 🕵🏼‍♂️ 🕵🏽‍♂️ 🕵🏾‍♂️ 🕵🏿‍♂️ 🕵️‍♀️ 🕵🏻‍♀️ 🕵🏼‍♀️ 🕵🏽‍♀️ 🕵🏾‍♀️ 🕵🏿‍♀️ 💂‍♂️ 💂🏻‍♂️ 💂🏼‍♂️ 💂🏽‍♂️ 💂🏾‍♂️ 💂🏿‍♂️ 💂‍♀️ 💂🏻‍♀️ 💂🏼‍♀️ 💂🏽‍♀️ 💂🏾‍♀️ 💂🏿‍♀️ 👷‍♂️ 👷🏻‍♂️ 👷🏼‍♂️ 👷🏽‍♂️ 👷🏾‍♂️ 👷🏿‍♂️ 👷‍♀️ 👷🏻‍♀️ 👷🏼‍♀️ 👷🏽‍♀️ 👷🏾‍♀️ 👷🏿‍♀️ 👳‍♂️ 👳🏻‍♂️ 👳🏼‍♂️ 👳🏽‍♂️ 👳🏾‍♂️ 👳🏿‍♂️ 👳‍♀️ 👳🏻‍♀️ 👳🏼‍♀️ 👳🏽‍♀️ 👳🏾‍♀️ 👳🏿‍♀️ 🤵‍♂️ 🤵🏻‍♂️ 🤵🏼‍♂️ 🤵🏽‍♂️ 🤵🏾‍♂️ 🤵🏿‍♂️ 🤵‍♀️ 🤵🏻‍♀️ 🤵🏼‍♀️ 🤵🏽‍♀️ 🤵🏾‍♀️ 🤵🏿‍♀️ 👰‍♂️ 👰🏻‍♂️ 👰🏼‍♂️ 👰🏽‍♂️ 👰🏾‍♂️ 👰🏿‍♂️ 👰‍♀️ 👰🏻‍♀️ 👰🏼‍♀️ 👰🏽‍♀️ 👰🏾‍♀️ 👰🏿‍♀️ 👩‍🍼 👩🏻‍🍼 👩🏼‍🍼 👩🏽‍🍼 👩🏾‍🍼 👩🏿‍🍼 👨‍🍼 👨🏻‍🍼 👨🏼‍🍼 👨🏽‍🍼 👨🏾‍🍼 👨🏿‍🍼 🧑‍🍼 🧑🏻‍🍼 🧑🏼‍🍼 🧑🏽‍🍼 🧑🏾‍🍼 🧑🏿‍🍼 🧑‍🎄 🧑🏻‍🎄 🧑🏼‍🎄 🧑🏽‍🎄 🧑🏾‍🎄 🧑🏿‍🎄 🦸‍♂️ 🦸🏻‍♂️ 🦸🏼‍♂️ 🦸🏽‍♂️ 🦸🏾‍♂️ 🦸🏿‍♂️ 🦸‍♀️ 🦸🏻‍♀️ 🦸🏼‍♀️ 🦸🏽‍♀️ 🦸🏾‍♀️ 🦸🏿‍♀️ 🦹‍♂️ 🦹🏻‍♂️ 🦹🏼‍♂️ 🦹🏽‍♂️ 🦹🏾‍♂️ 🦹🏿‍♂️ 🦹‍♀️ 🦹🏻‍♀️ 🦹🏼‍♀️ 🦹🏽‍♀️ 🦹🏾‍♀️ 🦹🏿‍♀️ 🧙‍♂️ 🧙🏻‍♂️ 🧙🏼‍♂️ 🧙🏽‍♂️ 🧙🏾‍♂️ 🧙🏿‍♂️ 🧙‍♀️ 🧙🏻‍♀️ 🧙🏼‍♀️ 🧙🏽‍♀️ 🧙🏾‍♀️ 🧙🏿‍♀️ 🧚‍♂️ 🧚🏻‍♂️ 🧚🏼‍♂️ 🧚🏽‍♂️ 🧚🏾‍♂️ 🧚🏿‍♂️ 🧚‍♀️ 🧚🏻‍♀️ 🧚🏼‍♀️ 🧚🏽‍♀️ 🧚🏾‍♀️ 🧚🏿‍♀️ 🧛‍♂️ 🧛🏻‍♂️ 🧛🏼‍♂️ 🧛🏽‍♂️ 🧛🏾‍♂️ 🧛🏿‍♂️ 🧛‍♀️ 🧛🏻‍♀️ 🧛🏼‍♀️ 🧛🏽‍♀️ 🧛🏾‍♀️ 🧛🏿‍♀️ 🧜‍♂️ 🧜🏻‍♂️ 🧜🏼‍♂️ 🧜🏽‍♂️ 🧜🏾‍♂️ 🧜🏿‍♂️ 🧜‍♀️ 🧜🏻‍♀️ 🧜🏼‍♀️ 🧜🏽‍♀️ 🧜🏾‍♀️ 🧜🏿‍♀️ 🧝‍♂️ 🧝🏻‍♂️ 🧝🏼‍♂️ 🧝🏽‍♂️ 🧝🏾‍♂️ 🧝🏿‍♂️ 🧝‍♀️ 🧝🏻‍♀️ 🧝🏼‍♀️ 🧝🏽‍♀️ 🧝🏾‍♀️ 🧝🏿‍♀️ 🧞‍♂️ 🧞‍♀️ 🧟‍♂️ 🧟‍♀️ 💆‍♂️ 💆🏻‍♂️ 💆🏼‍♂️ 💆🏽‍♂️ 💆🏾‍♂️ 💆🏿‍♂️ 💆‍♀️ 💆🏻‍♀️ 💆🏼‍♀️ 💆🏽‍♀️ 💆🏾‍♀️ 💆🏿‍♀️ 💇‍♂️ 💇🏻‍♂️ 💇🏼‍♂️ 💇🏽‍♂️ 💇🏾‍♂️ 💇🏿‍♂️ 💇‍♀️ 💇🏻‍♀️ 💇🏼‍♀️ 💇🏽‍♀️ 💇🏾‍♀️ 💇🏿‍♀️ 🚶‍♂️ 🚶🏻‍♂️ 🚶🏼‍♂️ 🚶🏽‍♂️ 🚶🏾‍♂️ 🚶🏿‍♂️ 🚶‍♀️ 🚶🏻‍♀️ 🚶🏼‍♀️ 🚶🏽‍♀️ 🚶🏾‍♀️ 🚶🏿‍♀️ 🧍‍♂️ 🧍🏻‍♂️ 🧍🏼‍♂️ 🧍🏽‍♂️ 🧍🏾‍♂️ 🧍🏿‍♂️ 🧍‍♀️ 🧍🏻‍♀️ 🧍🏼‍♀️ 🧍🏽‍♀️ 🧍🏾‍♀️ 🧍🏿‍♀️ 🧎‍♂️ 🧎🏻‍♂️ 🧎🏼‍♂️ 🧎🏽‍♂️ 🧎🏾‍♂️ 🧎🏿‍♂️ 🧎‍♀️ 🧎🏻‍♀️ 🧎🏼‍♀️ 🧎🏽‍♀️ 🧎🏾‍♀️ 🧎🏿‍♀️ 🧑‍🦯 🧑🏻‍🦯 🧑🏼‍🦯 🧑🏽‍🦯 🧑🏾‍🦯 🧑🏿‍🦯 👨‍🦯 👨🏻‍🦯 👨🏼‍🦯 👨🏽‍🦯 👨🏾‍🦯 👨🏿‍🦯 👩‍🦯 👩🏻‍🦯 👩🏼‍🦯 👩🏽‍🦯 👩🏾‍🦯 👩🏿‍🦯 🧑‍🦼 🧑🏻‍🦼 🧑🏼‍🦼 🧑🏽‍🦼 🧑🏾‍🦼 🧑🏿‍🦼 👨‍🦼 👨🏻‍🦼 👨🏼‍🦼 👨🏽‍🦼 👨🏾‍🦼 👨🏿‍🦼 👩‍🦼 👩🏻‍🦼 👩🏼‍🦼 👩🏽‍🦼 👩🏾‍🦼 👩🏿‍🦼 🧑‍🦽 🧑🏻‍🦽 🧑🏼‍🦽 🧑🏽‍🦽 🧑🏾‍🦽 🧑🏿‍🦽 👨‍🦽 👨🏻‍🦽 👨🏼‍🦽 👨🏽‍🦽 👨🏾‍🦽 👨🏿‍🦽 👩‍🦽 👩🏻‍🦽 👩🏼‍🦽 👩🏽‍🦽 👩🏾‍🦽 👩🏿‍🦽 🏃‍♂️ 🏃🏻‍♂️ 🏃🏼‍♂️ 🏃🏽‍♂️ 🏃🏾‍♂️ 🏃🏿‍♂️ 🏃‍♀️ 🏃🏻‍♀️ 🏃🏼‍♀️ 🏃🏽‍♀️ 🏃🏾‍♀️ 🏃🏿‍♀️ 👯‍♂️ 👯‍♀️ 🧖‍♂️ 🧖🏻‍♂️ 🧖🏼‍♂️ 🧖🏽‍♂️ 🧖🏾‍♂️ 🧖🏿‍♂️ 🧖‍♀️ 🧖🏻‍♀️ 🧖🏼‍♀️ 🧖🏽‍♀️ 🧖🏾‍♀️ 🧖🏿‍♀️ 🧗‍♂️ 🧗🏻‍♂️ 🧗🏼‍♂️ 🧗🏽‍♂️ 🧗🏾‍♂️ 🧗🏿‍♂️ 🧗‍♀️ 🧗🏻‍♀️ 🧗🏼‍♀️ 🧗🏽‍♀️ 🧗🏾‍♀️ 🧗🏿‍♀️ 🏌️‍♂️ 🏌🏻‍♂️ 🏌🏼‍♂️ 🏌🏽‍♂️ 🏌🏾‍♂️ 🏌🏿‍♂️ 🏌️‍♀️ 🏌🏻‍♀️ 🏌🏼‍♀️ 🏌🏽‍♀️ 🏌🏾‍♀️ 🏌🏿‍♀️ 🏄‍♂️ 🏄🏻‍♂️ 🏄🏼‍♂️ 🏄🏽‍♂️ 🏄🏾‍♂️ 🏄🏿‍♂️ 🏄‍♀️ 🏄🏻‍♀️ 🏄🏼‍♀️ 🏄🏽‍♀️ 🏄🏾‍♀️ 🏄🏿‍♀️ 🚣‍♂️ 🚣🏻‍♂️ 🚣🏼‍♂️ 🚣🏽‍♂️ 🚣🏾‍♂️ 🚣🏿‍♂️ 🚣‍♀️ 🚣🏻‍♀️ 🚣🏼‍♀️ 🚣🏽‍♀️ 🚣🏾‍♀️ 🚣🏿‍♀️ 🏊‍♂️ 🏊🏻‍♂️ 🏊🏼‍♂️ 🏊🏽‍♂️ 🏊🏾‍♂️ 🏊🏿‍♂️ 🏊‍♀️ 🏊🏻‍♀️ 🏊🏼‍♀️ 🏊🏽‍♀️ 🏊🏾‍♀️ 🏊🏿‍♀️ ⛹️‍♂️ ⛹🏻‍♂️ ⛹🏼‍♂️ ⛹🏽‍♂️ ⛹🏾‍♂️ ⛹🏿‍♂️ ⛹️‍♀️ ⛹🏻‍♀️ ⛹🏼‍♀️ ⛹🏽‍♀️ ⛹🏾‍♀️ ⛹🏿‍♀️ 🏋️‍♂️ 🏋🏻‍♂️ 🏋🏼‍♂️ 🏋🏽‍♂️ 🏋🏾‍♂️ 🏋🏿‍♂️ 🏋️‍♀️ 🏋🏻‍♀️ 🏋🏼‍♀️ 🏋🏽‍♀️ 🏋🏾‍♀️ 🏋🏿‍♀️ 🚴‍♂️ 🚴🏻‍♂️ 🚴🏼‍♂️ 🚴🏽‍♂️ 🚴🏾‍♂️ 🚴🏿‍♂️ 🚴‍♀️ 🚴🏻‍♀️ 🚴🏼‍♀️ 🚴🏽‍♀️ 🚴🏾‍♀️ 🚴🏿‍♀️ 🚵‍♂️ 🚵🏻‍♂️ 🚵🏼‍♂️ 🚵🏽‍♂️ 🚵🏾‍♂️ 🚵🏿‍♂️ 🚵‍♀️ 🚵🏻‍♀️ 🚵🏼‍♀️ 🚵🏽‍♀️ 🚵🏾‍♀️ 🚵🏿‍♀️ 🤸‍♂️ 🤸🏻‍♂️ 🤸🏼‍♂️ 🤸🏽‍♂️ 🤸🏾‍♂️ 🤸🏿‍♂️ 🤸‍♀️ 🤸🏻‍♀️ 🤸🏼‍♀️ 🤸🏽‍♀️ 🤸🏾‍♀️ 🤸🏿‍♀️ 🤼‍♂️ 🤼‍♀️ 🤽‍♂️ 🤽🏻‍♂️ 🤽🏼‍♂️ 🤽🏽‍♂️ 🤽🏾‍♂️ 🤽🏿‍♂️ 🤽‍♀️ 🤽🏻‍♀️ 🤽🏼‍♀️ 🤽🏽‍♀️ 🤽🏾‍♀️ 🤽🏿‍♀️ 🤾‍♂️ 🤾🏻‍♂️ 🤾🏼‍♂️ 🤾🏽‍♂️ 🤾🏾‍♂️ 🤾🏿‍♂️ 🤾‍♀️ 🤾🏻‍♀️ 🤾🏼‍♀️ 🤾🏽‍♀️ 🤾🏾‍♀️ 🤾🏿‍♀️ 🤹‍♂️ 🤹🏻‍♂️ 🤹🏼‍♂️ 🤹🏽‍♂️ 🤹🏾‍♂️ 🤹🏿‍♂️ 🤹‍♀️ 🤹🏻‍♀️ 🤹🏼‍♀️ 🤹🏽‍♀️ 🤹🏾‍♀️ 🤹🏿‍♀️ 🧘‍♂️ 🧘🏻‍♂️ 🧘🏼‍♂️ 🧘🏽‍♂️ 🧘🏾‍♂️ 🧘🏿‍♂️ 🧘‍♀️ 🧘🏻‍♀️ 🧘🏼‍♀️ 🧘🏽‍♀️ 🧘🏾‍♀️ 🧘🏿‍♀️ 🧑‍🤝‍🧑 🧑🏻‍🤝‍🧑🏻 🧑🏻‍🤝‍🧑🏼 🧑🏻‍🤝‍🧑🏽 🧑🏻‍🤝‍🧑🏾 🧑🏻‍🤝‍🧑🏿 🧑🏼‍🤝‍🧑🏻 🧑🏼‍🤝‍🧑🏼 🧑🏼‍🤝‍🧑🏽 🧑🏼‍🤝‍🧑🏾 🧑🏼‍🤝‍🧑🏿 🧑🏽‍🤝‍🧑🏻 🧑🏽‍🤝‍🧑🏼 🧑🏽‍🤝‍🧑🏽 🧑🏽‍🤝‍🧑🏾 🧑🏽‍🤝‍🧑🏿 🧑🏾‍🤝‍🧑🏻 🧑🏾‍🤝‍🧑🏼 🧑🏾‍🤝‍🧑🏽 🧑🏾‍🤝‍🧑🏾 🧑🏾‍🤝‍🧑🏿 🧑🏿‍🤝‍🧑🏻 🧑🏿‍🤝‍🧑🏼 🧑🏿‍🤝‍🧑🏽 🧑🏿‍🤝‍🧑🏾 🧑🏿‍🤝‍🧑🏿 👩🏻‍🤝‍👩🏼 👩🏻‍🤝‍👩🏽 👩🏻‍🤝‍👩🏾 👩🏻‍🤝‍👩🏿 👩🏼‍🤝‍👩🏻 👩🏼‍🤝‍👩🏽 👩🏼‍🤝‍👩🏾 👩🏼‍🤝‍👩🏿 👩🏽‍🤝‍👩🏻 👩🏽‍🤝‍👩🏼 👩🏽‍🤝‍👩🏾 👩🏽‍🤝‍👩🏿 👩🏾‍🤝‍👩🏻 👩🏾‍🤝‍👩🏼 👩🏾‍🤝‍👩🏽 👩🏾‍🤝‍👩🏿 👩🏿‍🤝‍👩🏻 👩🏿‍🤝‍👩🏼 👩🏿‍🤝‍👩🏽 👩🏿‍🤝‍👩🏾 👩🏻‍🤝‍👨🏼 👩🏻‍🤝‍👨🏽 👩🏻‍🤝‍👨🏾 👩🏻‍🤝‍👨🏿 👩🏼‍🤝‍👨🏻 👩🏼‍🤝‍👨🏽 👩🏼‍🤝‍👨🏾 👩🏼‍🤝‍👨🏿 👩🏽‍🤝‍👨🏻 👩🏽‍🤝‍👨🏼 👩🏽‍🤝‍👨🏾 👩🏽‍🤝‍👨🏿 👩🏾‍🤝‍👨🏻 👩🏾‍🤝‍👨🏼 👩🏾‍🤝‍👨🏽 👩🏾‍🤝‍👨🏿 👩🏿‍🤝‍👨🏻 👩🏿‍🤝‍👨🏼 👩🏿‍🤝‍👨🏽 👩🏿‍🤝‍👨🏾 👨🏻‍🤝‍👨🏼 👨🏻‍🤝‍👨🏽 👨🏻‍🤝‍👨🏾 👨🏻‍🤝‍👨🏿 👨🏼‍🤝‍👨🏻 👨🏼‍🤝‍👨🏽 👨🏼‍🤝‍👨🏾 👨🏼‍🤝‍👨🏿 👨🏽‍🤝‍👨🏻 👨🏽‍🤝‍👨🏼 👨🏽‍🤝‍👨🏾 👨🏽‍🤝‍👨🏿 👨🏾‍🤝‍👨🏻 👨🏾‍🤝‍👨🏼 👨🏾‍🤝‍👨🏽 👨🏾‍🤝‍👨🏿 👨🏿‍🤝‍👨🏻 👨🏿‍🤝‍👨🏼 👨🏿‍🤝‍👨🏽 👨🏿‍🤝‍👨🏾 💏 🧑🏻‍❤️‍💋‍🧑🏼 🧑🏻‍❤️‍💋‍🧑🏽 🧑🏻‍❤️‍💋‍🧑🏾 🧑🏻‍❤️‍💋‍🧑🏿 🧑🏼‍❤️‍💋‍🧑🏻 🧑🏼‍❤️‍💋‍🧑🏽 🧑🏼‍❤️‍💋‍🧑🏾 🧑🏼‍❤️‍💋‍🧑🏿 🧑🏽‍❤️‍💋‍🧑🏻 🧑🏽‍❤️‍💋‍🧑🏼 🧑🏽‍❤️‍💋‍🧑🏾 🧑🏽‍❤️‍💋‍🧑🏿 🧑🏾‍❤️‍💋‍🧑🏻 🧑🏾‍❤️‍💋‍🧑🏼 🧑🏾‍❤️‍💋‍🧑🏽 🧑🏾‍❤️‍💋‍🧑🏿 🧑🏿‍❤️‍💋‍🧑🏻 🧑🏿‍❤️‍💋‍🧑🏼 🧑🏿‍❤️‍💋‍🧑🏽 🧑🏿‍❤️‍💋‍🧑🏾 👩‍❤️‍💋‍👨 👩🏻‍❤️‍💋‍👨🏻 👩🏻‍❤️‍💋‍👨🏼 👩🏻‍❤️‍💋‍👨🏽 👩🏻‍❤️‍💋‍👨🏾 👩🏻‍❤️‍💋‍👨🏿 👩🏼‍❤️‍💋‍👨🏻 👩🏼‍❤️‍💋‍👨🏼 👩🏼‍❤️‍💋‍👨🏽 👩🏼‍❤️‍💋‍👨🏾 👩🏼‍❤️‍💋‍👨🏿 👩🏽‍❤️‍💋‍👨🏻 👩🏽‍❤️‍💋‍👨🏼 👩🏽‍❤️‍💋‍👨🏽 👩🏽‍❤️‍💋‍👨🏾 👩🏽‍❤️‍💋‍👨🏿 👩🏾‍❤️‍💋‍👨🏻 👩🏾‍❤️‍💋‍👨🏼 👩🏾‍❤️‍💋‍👨🏽 👩🏾‍❤️‍💋‍👨🏾 👩🏾‍❤️‍💋‍👨🏿 👩🏿‍❤️‍💋‍👨🏻 👩🏿‍❤️‍💋‍👨🏼 👩🏿‍❤️‍💋‍👨🏽 👩🏿‍❤️‍💋‍👨🏾 👩🏿‍❤️‍💋‍👨🏿 👨‍❤️‍💋‍👨 👨🏻‍❤️‍💋‍👨🏻 👨🏻‍❤️‍💋‍👨🏼 👨🏻‍❤️‍💋‍👨🏽 👨🏻‍❤️‍💋‍👨🏾 👨🏻‍❤️‍💋‍👨🏿 👨🏼‍❤️‍💋‍👨🏻 👨🏼‍❤️‍💋‍👨🏼 👨🏼‍❤️‍💋‍👨🏽 👨🏼‍❤️‍💋‍👨🏾 👨🏼‍❤️‍💋‍👨🏿 👨🏽‍❤️‍💋‍👨🏻 👨🏽‍❤️‍💋‍👨🏼 👨🏽‍❤️‍💋‍👨🏽 👨🏽‍❤️‍💋‍👨🏾 👨🏽‍❤️‍💋‍👨🏿 👨🏾‍❤️‍💋‍👨🏻 👨🏾‍❤️‍💋‍👨🏼 👨🏾‍❤️‍💋‍👨🏽 👨🏾‍❤️‍💋‍👨🏾 👨🏾‍❤️‍💋‍👨🏿 👨🏿‍❤️‍💋‍👨🏻 👨🏿‍❤️‍💋‍👨🏼 👨🏿‍❤️‍💋‍👨🏽 👨🏿‍❤️‍💋‍👨🏾 👨🏿‍❤️‍💋‍👨🏿 👩‍❤️‍💋‍👩 👩🏻‍❤️‍💋‍👩🏻 👩🏻‍❤️‍💋‍👩🏼 👩🏻‍❤️‍💋‍👩🏽 👩🏻‍❤️‍💋‍👩🏾 👩🏻‍❤️‍💋‍👩🏿 👩🏼‍❤️‍💋‍👩🏻 👩🏼‍❤️‍💋‍👩🏼 👩🏼‍❤️‍💋‍👩🏽 👩🏼‍❤️‍💋‍👩🏾 👩🏼‍❤️‍💋‍👩🏿 👩🏽‍❤️‍💋‍👩🏻 👩🏽‍❤️‍💋‍👩🏼 👩🏽‍❤️‍💋‍👩🏽 👩🏽‍❤️‍💋‍👩🏾 👩🏽‍❤️‍💋‍👩🏿 👩🏾‍❤️‍💋‍👩🏻 👩🏾‍❤️‍💋‍👩🏼 👩🏾‍❤️‍💋‍👩🏽 👩🏾‍❤️‍💋‍👩🏾 👩🏾‍❤️‍💋‍👩🏿 👩🏿‍❤️‍💋‍👩🏻 👩🏿‍❤️‍💋‍👩🏼 👩🏿‍❤️‍💋‍👩🏽 👩🏿‍❤️‍💋‍👩🏾 👩🏿‍❤️‍💋‍👩🏿 💑 🧑🏻‍❤️‍🧑🏼 🧑🏻‍❤️‍🧑🏽 🧑🏻‍❤️‍🧑🏾 🧑🏻‍❤️‍🧑🏿 🧑🏼‍❤️‍🧑🏻 🧑🏼‍❤️‍🧑🏽 🧑🏼‍❤️‍🧑🏾 🧑🏼‍❤️‍🧑🏿 🧑🏽‍❤️‍🧑🏻 🧑🏽‍❤️‍🧑🏼 🧑🏽‍❤️‍🧑🏾 🧑🏽‍❤️‍🧑🏿 🧑🏾‍❤️‍🧑🏻 🧑🏾‍❤️‍🧑🏼 🧑🏾‍❤️‍🧑🏽 🧑🏾‍❤️‍🧑🏿 🧑🏿‍❤️‍🧑🏻 🧑🏿‍❤️‍🧑🏼 🧑🏿‍❤️‍🧑🏽 🧑🏿‍❤️‍🧑🏾 👩‍❤️‍👨 👩🏻‍❤️‍👨🏻 👩🏻‍❤️‍👨🏼 👩🏻‍❤️‍👨🏽 👩🏻‍❤️‍👨🏾 👩🏻‍❤️‍👨🏿 👩🏼‍❤️‍👨🏻 👩🏼‍❤️‍👨🏼 👩🏼‍❤️‍👨🏽 👩🏼‍❤️‍👨🏾 👩🏼‍❤️‍👨🏿 👩🏽‍❤️‍👨🏻 👩🏽‍❤️‍👨🏼 👩🏽‍❤️‍👨🏽 👩🏽‍❤️‍👨🏾 👩🏽‍❤️‍👨🏿 👩🏾‍❤️‍👨🏻 👩🏾‍❤️‍👨🏼 👩🏾‍❤️‍👨🏽 👩🏾‍❤️‍👨🏾 👩🏾‍❤️‍👨🏿 👩🏿‍❤️‍👨🏻 👩🏿‍❤️‍👨🏼 👩🏿‍❤️‍👨🏽 👩🏿‍❤️‍👨🏾 👩🏿‍❤️‍👨🏿 👨‍❤️‍👨 👨🏻‍❤️‍👨🏻 👨🏻‍❤️‍👨🏼 👨🏻‍❤️‍👨🏽 👨🏻‍❤️‍👨🏾 👨🏻‍❤️‍👨🏿 👨🏼‍❤️‍👨🏻 👨🏼‍❤️‍👨🏼 👨🏼‍❤️‍👨🏽 👨🏼‍❤️‍👨🏾 👨🏼‍❤️‍👨🏿 👨🏽‍❤️‍👨🏻 👨🏽‍❤️‍👨🏼 👨🏽‍❤️‍👨🏽 👨🏽‍❤️‍👨🏾 👨🏽‍❤️‍👨🏿 👨🏾‍❤️‍👨🏻 👨🏾‍❤️‍👨🏼 👨🏾‍❤️‍👨🏽 👨🏾‍❤️‍👨🏾 👨🏾‍❤️‍👨🏿 👨🏿‍❤️‍👨🏻 👨🏿‍❤️‍👨🏼 👨🏿‍❤️‍👨🏽 👨🏿‍❤️‍👨🏾 👨🏿‍❤️‍👨🏿 👩‍❤️‍👩 👩🏻‍❤️‍👩🏻 👩🏻‍❤️‍👩🏼 👩🏻‍❤️‍👩🏽 👩🏻‍❤️‍👩🏾 👩🏻‍❤️‍👩🏿 👩🏼‍❤️‍👩🏻 👩🏼‍❤️‍👩🏼 👩🏼‍❤️‍👩🏽 👩🏼‍❤️‍👩🏾 👩🏼‍❤️‍👩🏿 👩🏽‍❤️‍👩🏻 👩🏽‍❤️‍👩🏼 👩🏽‍❤️‍👩🏽 👩🏽‍❤️‍👩🏾 👩🏽‍❤️‍👩🏿 👩🏾‍❤️‍👩🏻 👩🏾‍❤️‍👩🏼 👩🏾‍❤️‍👩🏽 👩🏾‍❤️‍👩🏾 👩🏾‍❤️‍👩🏿 👩🏿‍❤️‍👩🏻 👩🏿‍❤️‍👩🏼 👩🏿‍❤️‍👩🏽 👩🏿‍❤️‍👩🏾 👩🏿‍❤️‍👩🏿 👪 👨‍👩‍👦 👨‍👩‍👧 👨‍👩‍👧‍👦 👨‍👩‍👦‍👦 👨‍👩‍👧‍👧 👨‍👨‍👦 👨‍👨‍👧 👨‍👨‍👧‍👦 👨‍👨‍👦‍👦 👨‍👨‍👧‍👧 👩‍👩‍👦 👩‍👩‍👧 👩‍👩‍👧‍👦 👩‍👩‍👦‍👦 👩‍👩‍👧‍👧 👨‍👦 👨‍👦‍👦 👨‍👧 👨‍👧‍👦 👨‍👧‍👧 👩‍👦 👩‍👦‍👦 👩‍👧 👩‍👧‍👦 👩‍👧‍👧 🐕‍🦺 🐈‍⬛ 🐻‍❄️ 🐦‍⬛ 🏳️‍🌈 🏳️‍⚧️ 🏴‍☠️ ",-1),T4={__name:"54",setup(t){const n={hide:!1,srcSequence:"./pages/04-quirks.md"};return R(V),(s,o)=>(v(),q(Te,le(oe(n)),{default:U(()=>[E4,S4]),_:1},16))}},$4=z(T4,[["__file","/@slidev/slides/54.md"]]),O4=e("h2",null,"Emoji Composition",-1),U4=e("p",null,"What happens if we combine:",-1),P4=e("ul",null,[e("li",null,[e("code",null,"\\u1F468"),d(" - Man")]),e("li",null,[e("code",null,"\\u1F3FB"),d(" - Fitzpatrick type-2")]),e("li",null,[e("code",null,"\\u200D"),d(" - Zwidge")]),e("li",null,[e("code",null,"\\u2764"),d(" - Heavy black heart")]),e("li",null,[e("code",null,"\\uFE0F"),d(" - Variant selector-16")]),e("li",null,[e("code",null,"\\u200D"),d(" - Zwidge")]),e("li",null,[e("code",null,"\\u1F468"),d(" - Man")]),e("li",null,[e("code",null,"\\u1F3FD"),d(" - Fitzpatrick type-4")])],-1),I4={class:"codepoint absolute top-30 right-30"},M4=e("div",{class:"glyph"},"👨🏻‍❤️‍👨🏽 ",-1),L4=e("div",{class:"code"},[d("U+1F468 + U+1F3Fb +"),e("br"),d("U+200D + U+2764 +"),e("br"),d("U+FE0F + U+200D +"),e("br"),d("U+1F468 + U+1F3FD")],-1),R4=[M4,L4],N4={class:"border border-thin px-10 w-73 mt-5"},j4=e("p",null,"4 + 4 + 3 + 3 + 3 + 3 + 4 + 4 = 28 bytes!",-1),W4=[j4],q4={__name:"55",setup(t){const n={hide:!1,srcSequence:"./pages/04-quirks.md"};return R(V),(s,o)=>{const l=Bt,r=jt("click");return v(),q(Te,le(oe(n)),{default:U(()=>[O4,U4,I(l,null,{default:U(()=>[P4]),_:1}),Ke((v(),k("div",I4,R4)),[[r]]),Ke((v(),k("div",N4,W4)),[[r]])]),_:1},16)}}},H4=z(q4,[["__file","/@slidev/slides/55.md"]]),V4=e("h2",null,"Emoji Composition",-1),z4=e("p",null,'"Fun" combinations:',-1),K4=e("ul",null,[e("li",null,[e("code",null,"\\u1F9D4"),d(" + "),e("code",null,"\\u200D"),d(" + "),e("code",null,"\\u2640"),d(" + "),e("code",null,"\\uFE0F"),d(" = 🧔‍♀️ = Person Beard + ♀")]),e("li",null,[e("code",null,"\\u1F9D1"),d(" + "),e("code",null,"\\u200D"),d(" + "),e("code",null,"\\u1F9b2"),d(" = 🧑‍🦲 = Adult + Bald")]),e("li",null,[e("code",null,"\\u1F9D1"),d(" + "),e("code",null,"\\u200D"),d(" + "),e("code",null,"\\u2695"),d(" = 🧑‍⚕ = Adult + ⚕ (Staff of aesculapius)")]),e("li",null,[e("code",null,"\\u1F9D1"),d(" + "),e("code",null,"\\u200D"),d(" + "),e("code",null,"\\u1F373"),d(" = 🧑‍🍳 = Adult + 🍳 (Cooking)")]),e("li",null,[e("code",null,"\\u1F468"),d(" + "),e("code",null,"\\u1F3FB"),d(" + "),e("code",null,"\\u200D"),d(" + "),e("code",null,"\\u1F9BD"),d(" = 👨🏻‍🦽 = Man + Fitzpatrick 1-2 + Manual wheelchair")]),e("li",null,[e("code",null,"\\u1F469"),d(" + "),e("code",null,"\\u1F3FF"),d(" + "),e("code",null,"\\u200D"),d(" + "),e("code",null,"\\u1F373"),d(" = 👩🏿‍🎤 = Woman + Fitzpatrick Type-6 + Microphone")]),e("li",null,[e("code",null,"\\u1F3F3"),d(" + "),e("code",null,"\\uFE0F"),d(" + "),e("code",null,"\\u200D"),d(" + "),e("code",null,"\\u1F308"),d(" = 🏳️ + 🌈 = 🏳️‍🌈")]),e("li",null,[e("code",null,"\\u1F3F3"),d(" + "),e("code",null,"\\uFE0F"),d(" + "),e("code",null,"\\u200D"),d(" + "),e("code",null,"\\u26A7"),d(" + "),e("code",null,"u\\FE0F"),d(" = 🏳️ + ⚧️ = 🏳️‍⚧️")])],-1),G4={__name:"56",setup(t){const n={hide:!1,srcSequence:"./pages/04-quirks.md"};return R(V),(s,o)=>{const l=Bt;return v(),q(Te,le(oe(n)),{default:U(()=>[V4,z4,I(l,null,{default:U(()=>[K4]),_:1})]),_:1},16)}}},Y4=z(G4,[["__file","/@slidev/slides/56.md"]]),Z4=e("h2",null,"Unicode Tags",-1),Q4=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"fn"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"main"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"let"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"encoded"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"Hello󠀠󠁒󠁵󠁳󠁴 Meetup Amsterdam!"'),e("span",{style:{color:"#858585"}},";")]),d(`
`),e("span",{class:"line"}),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"println!"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"'),e("span",{style:{color:"#858585"}},"{}"),e("span",{style:{color:"#C98A7D"}},'"'),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"encoded"),e("span",{style:{color:"#858585"}},");")]),d(`
`),e("span",{class:"line"}),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"let"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"codepoints"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Vec"),e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#A1B567"}},"u32"),e("span",{style:{color:"#858585"}},">"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"encoded"),e("span",{style:{color:"#CB7676"}},"."),e("span",{style:{color:"#A1B567"}},"chars"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#CB7676"}},"."),e("span",{style:{color:"#A1B567"}},"map"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#CB7676"}},"|"),e("span",{style:{color:"#B8A965"}},"c"),e("span",{style:{color:"#CB7676"}},"|"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"c"),e("span",{style:{color:"#CB7676"}},"."),e("span",{style:{color:"#A1B567"}},"into"),e("span",{style:{color:"#858585"}},"())"),e("span",{style:{color:"#CB7676"}},"."),e("span",{style:{color:"#A1B567"}},"collect"),e("span",{style:{color:"#858585"}},"();")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"println!"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"'),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#C98A7D"}},":X?"),e("span",{style:{color:"#858585"}},"}"),e("span",{style:{color:"#C98A7D"}},'"'),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"codepoints"),e("span",{style:{color:"#858585"}},");")]),d(`
`),e("span",{class:"line"}),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"let"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"decoded"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"String"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"encoded")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#CB7676"}},"."),e("span",{style:{color:"#A1B567"}},"chars"),e("span",{style:{color:"#858585"}},"()")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#CB7676"}},"."),e("span",{style:{color:"#A1B567"}},"map"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#CB7676"}},"|"),e("span",{style:{color:"#B8A965"}},"c"),e("span",{style:{color:"#CB7676"}},"|"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"match"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"c"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"            "),e("span",{style:{color:"#858585"}},"'"),e("span",{style:{color:"#D4976C"}},"\\u{e0000}"),e("span",{style:{color:"#858585"}},"'"),e("span",{style:{color:"#CB7676"}},"..="),e("span",{style:{color:"#858585"}},"'"),e("span",{style:{color:"#D4976C"}},"\\u{e007F}"),e("span",{style:{color:"#858585"}},"'"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"                "),e("span",{style:{color:"#CB7676"}},"let"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"char_u32"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"u32"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"c"),e("span",{style:{color:"#CB7676"}},"."),e("span",{style:{color:"#A1B567"}},"into"),e("span",{style:{color:"#858585"}},"();")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"                "),e("span",{style:{color:"#A1B567"}},"std"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#A1B567"}},"char"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#A1B567"}},"from_u32"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"char_u32"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"-"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"0xE0000"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#CB7676"}},"."),e("span",{style:{color:"#A1B567"}},"unwrap"),e("span",{style:{color:"#858585"}},"()")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"            "),e("span",{style:{color:"#858585"}},"},")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"            "),e("span",{style:{color:"#B8A965"}},"_"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"c"),e("span",{style:{color:"#858585"}},",")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},"})")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#CB7676"}},"."),e("span",{style:{color:"#A1B567"}},"collect"),e("span",{style:{color:"#858585"}},"();")]),d(`
`),e("span",{class:"line"}),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"println!"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"'),e("span",{style:{color:"#858585"}},"{}"),e("span",{style:{color:"#C98A7D"}},'"'),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"decoded"),e("span",{style:{color:"#858585"}},");")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"fn"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"main"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"let"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"encoded"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"Hello󠀠󠁒󠁵󠁳󠁴 Meetup Amsterdam!"'),e("span",{style:{color:"#8E8F8B"}},";")]),d(`
`),e("span",{class:"line"}),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"println!"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},'"'),e("span",{style:{color:"#8E8F8B"}},"{}"),e("span",{style:{color:"#B56959"}},'"'),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"encoded"),e("span",{style:{color:"#8E8F8B"}},");")]),d(`
`),e("span",{class:"line"}),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"let"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"codepoints"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Vec"),e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#6C7834"}},"u32"),e("span",{style:{color:"#8E8F8B"}},">"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"encoded"),e("span",{style:{color:"#AB5959"}},"."),e("span",{style:{color:"#6C7834"}},"chars"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#AB5959"}},"."),e("span",{style:{color:"#6C7834"}},"map"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#AB5959"}},"|"),e("span",{style:{color:"#8C862B"}},"c"),e("span",{style:{color:"#AB5959"}},"|"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"c"),e("span",{style:{color:"#AB5959"}},"."),e("span",{style:{color:"#6C7834"}},"into"),e("span",{style:{color:"#8E8F8B"}},"())"),e("span",{style:{color:"#AB5959"}},"."),e("span",{style:{color:"#6C7834"}},"collect"),e("span",{style:{color:"#8E8F8B"}},"();")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"println!"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},'"'),e("span",{style:{color:"#8E8F8B"}},"{"),e("span",{style:{color:"#B56959"}},":X?"),e("span",{style:{color:"#8E8F8B"}},"}"),e("span",{style:{color:"#B56959"}},'"'),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"codepoints"),e("span",{style:{color:"#8E8F8B"}},");")]),d(`
`),e("span",{class:"line"}),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"let"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"decoded"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"String"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"encoded")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#AB5959"}},"."),e("span",{style:{color:"#6C7834"}},"chars"),e("span",{style:{color:"#8E8F8B"}},"()")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#AB5959"}},"."),e("span",{style:{color:"#6C7834"}},"map"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#AB5959"}},"|"),e("span",{style:{color:"#8C862B"}},"c"),e("span",{style:{color:"#AB5959"}},"|"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"match"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"c"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"            "),e("span",{style:{color:"#8E8F8B"}},"'"),e("span",{style:{color:"#A65E2B"}},"\\u{e0000}"),e("span",{style:{color:"#8E8F8B"}},"'"),e("span",{style:{color:"#AB5959"}},"..="),e("span",{style:{color:"#8E8F8B"}},"'"),e("span",{style:{color:"#A65E2B"}},"\\u{e007F}"),e("span",{style:{color:"#8E8F8B"}},"'"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"=>"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"                "),e("span",{style:{color:"#AB5959"}},"let"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"char_u32"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"u32"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"c"),e("span",{style:{color:"#AB5959"}},"."),e("span",{style:{color:"#6C7834"}},"into"),e("span",{style:{color:"#8E8F8B"}},"();")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"                "),e("span",{style:{color:"#6C7834"}},"std"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#6C7834"}},"char"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#6C7834"}},"from_u32"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"char_u32"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"-"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"0xE0000"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#AB5959"}},"."),e("span",{style:{color:"#6C7834"}},"unwrap"),e("span",{style:{color:"#8E8F8B"}},"()")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"            "),e("span",{style:{color:"#8E8F8B"}},"},")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"            "),e("span",{style:{color:"#8C862B"}},"_"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"=>"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"c"),e("span",{style:{color:"#8E8F8B"}},",")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},"})")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#AB5959"}},"."),e("span",{style:{color:"#6C7834"}},"collect"),e("span",{style:{color:"#8E8F8B"}},"();")]),d(`
`),e("span",{class:"line"}),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"println!"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},'"'),e("span",{style:{color:"#8E8F8B"}},"{}"),e("span",{style:{color:"#B56959"}},'"'),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"decoded"),e("span",{style:{color:"#8E8F8B"}},");")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),J4=e("p",null,[e("a",{href:"https://www.compart.com/en/unicode/block/U+E0000",target:"_blank",rel:"noopener"},"https://www.compart.com/en/unicode/block/U+E0000")],-1),X4=e("p",null,[e("a",{href:"https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&gist=43728a2dea045f7f0c9519231c32555c",target:"_blank",rel:"noopener"},"https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&gist=43728a2dea045f7f0c9519231c32555c")],-1),eF={__name:"57",setup(t){const n={hide:!1,srcSequence:"./pages/04-quirks.md"};return R(V),(s,o)=>{const l=Ot;return v(),q(Te,le(oe(n)),{default:U(()=>[Z4,I(l,qe({},{ranges:[""]}),{default:U(()=>[Q4]),_:1},16),J4,X4]),_:1},16)}}},tF=z(eF,[["__file","/@slidev/slides/57.md"]]),nF=e("h2",null,"Summary",-1),sF=e("p",null,"Encoding is important!",-1),oF=e("p",null,"Casemapping is hard! (Turkish = Web hard mode)",-1),lF=e("p",null,"Composition is pretty dang cool",-1),rF=e("p",null,"Obsfucated code = dangerous‽",-1),aF={__name:"58",setup(t){const n={layout:"center",hide:!1,srcSequence:"./pages/04-quirks.md"};return R(V),(s,o)=>{const l=Bt;return v(),q(Qe,le(oe(n)),{default:U(()=>[nF,I(l,null,{default:U(()=>[sF,oF,lF,rF]),_:1})]),_:1},16)}}},iF=z(aF,[["__file","/@slidev/slides/58.md"]]),cF=e("h1",null,"THE END",-1),uF=e("div",{class:"absolute bottom-0 left-0 p-5 text-left"},[e("p",null,[d("Github: "),e("a",{href:"https://github.com/b-n",target:"_blank",rel:"noopener"},"https://github.com/b-n")]),e("p",null,[d("Mastodon: "),e("a",{href:"https://techhub.social/@b_n",target:"_blank",rel:"noopener"},"https://techhub.social/@b_n")]),e("p",null,[d("Artichoke Ruby: "),e("a",{href:"https://artichokeruby.org/",target:"_blank",rel:"noopener"},"https://artichokeruby.org/")])],-1),pF={__name:"59",setup(t){const n={layout:"cover",hideInToc:!0,background:"/DSC09297.jpg"};return R(V),(s,o)=>(v(),q(Gs,le(oe(n)),{default:U(()=>[cF,uF]),_:1},16))}},dF=z(pF,[["__file","/@slidev/slides/59.md"]]),fF=[{path:"1",name:"page-1",component:ww,meta:{theme:"seriph",class:"text-center",highlighter:"shiki",lineNumbers:!0,info:`## Unicode, Rust, quirks, and way too much detail.
`,drawings:{persist:!1},transition:"slide-left",title:"Demystifying Unicode",hideInToc:!0,background:"/DSC09355.jpg",slide:{raw:`---
theme: seriph
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
background: /DSC09355.jpg
---

# Demystifying Unicode

Unicode, Rust, quirks, and way too much detail.
`,title:"Demystifying Unicode",content:`# Demystifying Unicode

Unicode, Rust, quirks, and way too much detail.`,frontmatter:{theme:"seriph",class:"text-center",highlighter:"shiki",lineNumbers:!0,info:`## Unicode, Rust, quirks, and way too much detail.
`,drawings:{persist:!1},transition:"slide-left",title:"Demystifying Unicode",hideInToc:!0,background:"/DSC09355.jpg"},index:0,start:0,end:19,noteHTML:"",filepath:"/home/ben/Workspace/demystifying-unicode/slides.md",id:0,no:1},__clicksElements:[],__preloaded:!1}},{path:"2",name:"page-2",component:z6,meta:{hideInToc:!0,slide:{raw:`---
hideInToc: true
---

# Table of contents

<Toc maxDepth="1"></Toc>

<!--
- We learn some things about Computers
- Then, some things about unicode
- And, some things about unicode in rust
- Some things you only need to know when you need to know
-->
`,title:"Table of contents",level:1,content:`# Table of contents

<Toc maxDepth="1"></Toc>`,frontmatter:{hideInToc:!0},note:`- We learn some things about Computers
- Then, some things about unicode
- And, some things about unicode in rust
- Some things you only need to know when you need to know`,index:1,start:19,end:34,noteHTML:`<ul>
<li>We learn some things about Computers</li>
<li>Then, some things about unicode</li>
<li>And, some things about unicode in rust</li>
<li>Some things you only need to know when you need to know</li>
</ul>
`,filepath:"/home/ben/Workspace/demystifying-unicode/slides.md",id:1,no:2},__clicksElements:[],__preloaded:!1}},{path:"3",name:"page-3",component:Y6,meta:{layout:"cover",background:"/DSC09284.jpg",title:"History",hide:!1,srcSequence:"./pages/01-history.md",slide:{raw:null,title:"History",level:1,content:"# History",frontmatter:{layout:"cover",background:"/DSC09284.jpg",title:"History",hide:!1,srcSequence:"./pages/01-history.md"},index:2,start:0,end:7,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/01-history.md",raw:`---
layout: cover
background: /DSC09284.jpg
---

# History
`,title:"History",level:1,content:"# History",frontmatter:{layout:"cover",background:"/DSC09284.jpg",title:"History"},index:0,start:0,end:7},inline:{raw:`---
src: ./pages/01-history.md
hide: false
---
`,content:"",frontmatter:{hide:!1},index:2,start:34,end:39},filepath:"/home/ben/Workspace/demystifying-unicode/pages/01-history.md",noteHTML:"",id:2,no:3},__clicksElements:[],__preloaded:!1}},{path:"4",name:"page-4",component:nB,meta:{hide:!1,srcSequence:"./pages/01-history.md",slide:{raw:`
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

</v-clicks>`,frontmatter:{hide:!1,srcSequence:"./pages/01-history.md"},note:"👆 Although unimportant for this talk, these things are the main language of a computer, bits, bytes, words. Compilers compile our code, so we can make more __human__ structures. Often the compilers optimise our code for thigns the computer understands.",index:3,start:8,end:37,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/01-history.md",raw:`
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

</v-clicks>`,frontmatter:{},note:"👆 Although unimportant for this talk, these things are the main language of a computer, bits, bytes, words. Compilers compile our code, so we can make more __human__ structures. Often the compilers optimise our code for thigns the computer understands.",index:1,start:8,end:37},filepath:"/home/ben/Workspace/demystifying-unicode/pages/01-history.md",noteHTML:`<p>👆 Although unimportant for this talk, these things are the main language of a computer, bits, bytes, words. Compilers compile our code, so we can make more <strong>human</strong> structures. Often the compilers optimise our code for thigns the computer understands.</p>
`,id:3,no:4},__clicksElements:[],__preloaded:!1}},{path:"5",name:"page-5",component:uB,meta:{hide:!1,srcSequence:"./pages/01-history.md",slide:{raw:`
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

</v-click>`,frontmatter:{hide:!1,srcSequence:"./pages/01-history.md"},index:4,start:38,end:69,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/01-history.md",raw:`
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

</v-click>`,frontmatter:{},index:2,start:38,end:69},filepath:"/home/ben/Workspace/demystifying-unicode/pages/01-history.md",noteHTML:"",id:4,no:5},__clicksElements:[],__preloaded:!1}},{path:"6",name:"page-6",component:vB,meta:{hide:!1,srcSequence:"./pages/01-history.md",slide:{raw:`
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

</v-click>`,frontmatter:{hide:!1,srcSequence:"./pages/01-history.md"},note:'When I think of a "character" I think of "Something a human can read". This text is made up of characters because we understand what each of the letters mean. We share that knowledge.',index:5,start:70,end:114,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/01-history.md",raw:`
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

</v-click>`,frontmatter:{},note:'When I think of a "character" I think of "Something a human can read". This text is made up of characters because we understand what each of the letters mean. We share that knowledge.',index:3,start:70,end:114},filepath:"/home/ben/Workspace/demystifying-unicode/pages/01-history.md",noteHTML:`<p>When I think of a &quot;character&quot; I think of &quot;Something a human can read&quot;. This text is made up of characters because we understand what each of the letters mean. We share that knowledge.</p>
`,id:5,no:6},__clicksElements:[],__preloaded:!1}},{path:"7",name:"page-7",component:CB,meta:{layout:"center",hide:!1,srcSequence:"./pages/01-history.md",slide:{raw:`---
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

</footer>`,frontmatter:{layout:"center",hide:!1,srcSequence:"./pages/01-history.md"},note:'When we open up to interpretation as with a certain bit sequence meaning "H", then we open ourselves to standards. Mo standards, mo problems.',index:6,start:114,end:140,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/01-history.md",raw:`---
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

</footer>`,frontmatter:{layout:"center"},note:'When we open up to interpretation as with a certain bit sequence meaning "H", then we open ourselves to standards. Mo standards, mo problems.',index:4,start:114,end:140},filepath:"/home/ben/Workspace/demystifying-unicode/pages/01-history.md",noteHTML:`<p>When we open up to interpretation as with a certain bit sequence meaning &quot;H&quot;, then we open ourselves to standards. Mo standards, mo problems.</p>
`,id:6,no:7},__clicksElements:[],__preloaded:!1}},{path:"8",name:"page-8",component:OB,meta:{hide:!1,srcSequence:"./pages/01-history.md",slide:{raw:`
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

IBM437: https://www.compart.com/en/unicode/charsets/IBM437`,index:7,start:141,end:179,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/01-history.md",raw:`
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

IBM437: https://www.compart.com/en/unicode/charsets/IBM437`,index:5,start:141,end:179},filepath:"/home/ben/Workspace/demystifying-unicode/pages/01-history.md",noteHTML:`<p>ANSI Characters aren't actually a thing. When people use this term, they are refering to the windows code pages.</p>
<p>Quiz: How many bits is an ascii character?</p>
<p>IBM437: https://www.compart.com/en/unicode/charsets/IBM437</p>
`,id:7,no:8},__clicksElements:[],__preloaded:!1}},{path:"9",name:"page-9",component:jB,meta:{hide:!1,srcSequence:"./pages/01-history.md",slide:{raw:`
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

</v-clicks>`,frontmatter:{hide:!1,srcSequence:"./pages/01-history.md"},index:8,start:180,end:219,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/01-history.md",raw:`
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

</v-clicks>`,frontmatter:{},index:6,start:180,end:219},filepath:"/home/ben/Workspace/demystifying-unicode/pages/01-history.md",noteHTML:"",id:8,no:9},__clicksElements:[],__preloaded:!1}},{path:"10",name:"page-10",component:GB,meta:{hide:!1,srcSequence:"./pages/01-history.md",slide:{raw:`
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

</footer>`,frontmatter:{hide:!1,srcSequence:"./pages/01-history.md"},index:9,start:220,end:249,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/01-history.md",raw:`
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

</footer>`,frontmatter:{},index:7,start:220,end:249},filepath:"/home/ben/Workspace/demystifying-unicode/pages/01-history.md",noteHTML:"",id:9,no:10},__clicksElements:[],__preloaded:!1}},{path:"11",name:"page-11",component:t2,meta:{layout:"center",hide:!1,srcSequence:"./pages/01-history.md",slide:{raw:`---
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

</v-clicks>`,frontmatter:{layout:"center",hide:!1,srcSequence:"./pages/01-history.md"},index:10,start:249,end:267,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/01-history.md",raw:`---
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

</v-clicks>`,frontmatter:{layout:"center"},index:8,start:249,end:267},filepath:"/home/ben/Workspace/demystifying-unicode/pages/01-history.md",noteHTML:"",id:10,no:11},__clicksElements:[],__preloaded:!1}},{path:"12",name:"page-12",component:o2,meta:{layout:"cover",background:"/DSC09097.jpg",title:"Unicode",hide:!1,srcSequence:"./pages/02-unicode.md",slide:{raw:null,title:"Unicode",level:1,content:"# Unicode",frontmatter:{layout:"cover",background:"/DSC09097.jpg",title:"Unicode",hide:!1,srcSequence:"./pages/02-unicode.md"},index:11,start:0,end:7,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/02-unicode.md",raw:`---
layout: cover
background: /DSC09097.jpg
---

# Unicode
`,title:"Unicode",level:1,content:"# Unicode",frontmatter:{layout:"cover",background:"/DSC09097.jpg",title:"Unicode"},index:0,start:0,end:7},inline:{raw:`---
src: ./pages/02-unicode.md
hide: false
---
`,content:"",frontmatter:{hide:!1},index:3,start:39,end:44},filepath:"/home/ben/Workspace/demystifying-unicode/pages/02-unicode.md",noteHTML:"",id:11,no:12},__clicksElements:[],__preloaded:!1}},{path:"13",name:"page-13",component:i2,meta:{hide:!1,srcSequence:"./pages/02-unicode.md",slide:{raw:`
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
- 👍`,index:12,start:8,end:28,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/02-unicode.md",raw:`
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
- 👍`,index:1,start:8,end:28},filepath:"/home/ben/Workspace/demystifying-unicode/pages/02-unicode.md",noteHTML:`<p>TODO: Illustrate with an example:</p>
<ul>
<li>Write an application on one computer, relying on codepage X</li>
<li>Send data to another computer</li>
<li>Get garbled nonsense</li>
<li>👍</li>
</ul>
`,id:12,no:13},__clicksElements:[],__preloaded:!1}},{path:"14",name:"page-14",component:d2,meta:{layout:"center",hide:!1,srcSequence:"./pages/02-unicode.md",slide:{raw:`---
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
</style>`,frontmatter:{layout:"center",hide:!1,srcSequence:"./pages/02-unicode.md"},index:13,start:28,end:44,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/02-unicode.md",raw:`---
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
</style>`,frontmatter:{layout:"center"},index:2,start:28,end:44},filepath:"/home/ben/Workspace/demystifying-unicode/pages/02-unicode.md",noteHTML:"",id:13,no:14},__clicksElements:[],__preloaded:!1}},{path:"15",name:"page-15",component:m2,meta:{layout:"center",hide:!1,srcSequence:"./pages/02-unicode.md",slide:{raw:`---
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
> - Unambiguous. Any given Unicode code point always represents the same character`,index:14,start:44,end:72,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/02-unicode.md",raw:`---
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
> - Unambiguous. Any given Unicode code point always represents the same character`,index:3,start:44,end:72},filepath:"/home/ben/Workspace/demystifying-unicode/pages/02-unicode.md",noteHTML:`<ul>
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
`,id:14,no:15},__clicksElements:[],__preloaded:!1}},{path:"16",name:"page-16",component:x2,meta:{hide:!1,srcSequence:"./pages/02-unicode.md",slide:{raw:`
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
Character is still ambiguous, but in unicode it's the description of the codepoint`,index:15,start:73,end:95,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/02-unicode.md",raw:`
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
Character is still ambiguous, but in unicode it's the description of the codepoint`,index:4,start:73,end:95},filepath:"/home/ben/Workspace/demystifying-unicode/pages/02-unicode.md",noteHTML:`<p>Glyphs are what are drawn to the screen, generally unicode interpreted by a font for example
Character is still ambiguous, but in unicode it's the description of the codepoint</p>
`,id:15,no:16},__clicksElements:[],__preloaded:!1}},{path:"17",name:"page-17",component:C2,meta:{layout:"center",hide:!1,srcSequence:"./pages/02-unicode.md",slide:{raw:`---
layout: center
---

<img src="/glyph-codepoint-character.jpg" alt="Triple spiderman meme, glyph, codepoint, character pointing at each other" />
`,content:'<img src="/glyph-codepoint-character.jpg" alt="Triple spiderman meme, glyph, codepoint, character pointing at each other" />',frontmatter:{layout:"center",hide:!1,srcSequence:"./pages/02-unicode.md"},index:16,start:95,end:101,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/02-unicode.md",raw:`---
layout: center
---

<img src="/glyph-codepoint-character.jpg" alt="Triple spiderman meme, glyph, codepoint, character pointing at each other" />
`,content:'<img src="/glyph-codepoint-character.jpg" alt="Triple spiderman meme, glyph, codepoint, character pointing at each other" />',frontmatter:{layout:"center"},index:5,start:95,end:101},filepath:"/home/ben/Workspace/demystifying-unicode/pages/02-unicode.md",noteHTML:"",id:16,no:17},__clicksElements:[],__preloaded:!1}},{path:"18",name:"page-18",component:E2,meta:{layout:"center",hide:!1,srcSequence:"./pages/02-unicode.md",slide:{raw:`---
layout: center
---

<img src="/no_chars_yes_glyphs.jpg" alt="Drake no: characters. Drake yes: glyphs" />
`,content:'<img src="/no_chars_yes_glyphs.jpg" alt="Drake no: characters. Drake yes: glyphs" />',frontmatter:{layout:"center",hide:!1,srcSequence:"./pages/02-unicode.md"},index:17,start:101,end:107,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/02-unicode.md",raw:`---
layout: center
---

<img src="/no_chars_yes_glyphs.jpg" alt="Drake no: characters. Drake yes: glyphs" />
`,content:'<img src="/no_chars_yes_glyphs.jpg" alt="Drake no: characters. Drake yes: glyphs" />',frontmatter:{layout:"center"},index:6,start:101,end:107},filepath:"/home/ben/Workspace/demystifying-unicode/pages/02-unicode.md",noteHTML:"",id:17,no:18},__clicksElements:[],__preloaded:!1}},{path:"19",name:"page-19",component:U2,meta:{hide:!1,srcSequence:"./pages/02-unicode.md",slide:{raw:`
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
</div>`,frontmatter:{hide:!1,srcSequence:"./pages/02-unicode.md"},note:"Glyphemes - 1 to many codepoints that are represented to the user as a single character",index:18,start:108,end:125,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/02-unicode.md",raw:`
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
</div>`,frontmatter:{},note:"Glyphemes - 1 to many codepoints that are represented to the user as a single character",index:7,start:108,end:125},filepath:"/home/ben/Workspace/demystifying-unicode/pages/02-unicode.md",noteHTML:`<p>Glyphemes - 1 to many codepoints that are represented to the user as a single character</p>
`,id:18,no:19},__clicksElements:[],__preloaded:!1}},{path:"20",name:"page-20",component:N2,meta:{layout:"center",hide:!1,srcSequence:"./pages/02-unicode.md",slide:{raw:`---
layout: center
---

## What is the difference between
## \`Unicode\`
## and
## \`UTF-8\`
`,title:"What is the difference between",level:2,content:"## What is the difference between\n## `Unicode`\n## and\n## `UTF-8`",frontmatter:{layout:"center",hide:!1,srcSequence:"./pages/02-unicode.md"},index:19,start:125,end:134,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/02-unicode.md",raw:`---
layout: center
---

## What is the difference between
## \`Unicode\`
## and
## \`UTF-8\`
`,title:"What is the difference between",level:2,content:"## What is the difference between\n## `Unicode`\n## and\n## `UTF-8`",frontmatter:{layout:"center"},index:8,start:125,end:134},filepath:"/home/ben/Workspace/demystifying-unicode/pages/02-unicode.md",noteHTML:"",id:19,no:20},__clicksElements:[],__preloaded:!1}},{path:"21",name:"page-21",component:q2,meta:{layout:"center",hide:!1,srcSequence:"./pages/02-unicode.md",slide:{raw:`---
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

</div>`,frontmatter:{layout:"center",hide:!1,srcSequence:"./pages/02-unicode.md"},note:"There is also UTF-16 and UTF-32",index:20,start:134,end:150,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/02-unicode.md",raw:`---
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

</div>`,frontmatter:{layout:"center"},note:"There is also UTF-16 and UTF-32",index:9,start:134,end:150},filepath:"/home/ben/Workspace/demystifying-unicode/pages/02-unicode.md",noteHTML:`<p>There is also UTF-16 and UTF-32</p>
`,id:20,no:21},__clicksElements:[],__preloaded:!1}},{path:"22",name:"page-22",component:Q2,meta:{hide:!1,srcSequence:"./pages/02-unicode.md",slide:{raw:`
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

</footer>`,frontmatter:{hide:!1,srcSequence:"./pages/02-unicode.md"},index:21,start:151,end:173,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/02-unicode.md",raw:`
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

</footer>`,frontmatter:{},index:10,start:151,end:173},filepath:"/home/ben/Workspace/demystifying-unicode/pages/02-unicode.md",noteHTML:"",id:21,no:22},__clicksElements:[],__preloaded:!1}},{path:"23",name:"page-23",component:t9,meta:{layout:"center",hide:!1,srcSequence:"./pages/02-unicode.md",slide:{raw:`---
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

</footer>`,frontmatter:{layout:"center",hide:!1,srcSequence:"./pages/02-unicode.md"},index:22,start:173,end:193,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/02-unicode.md",raw:`---
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

</footer>`,frontmatter:{layout:"center"},index:11,start:173,end:193},filepath:"/home/ben/Workspace/demystifying-unicode/pages/02-unicode.md",noteHTML:"",id:22,no:23},__clicksElements:[],__preloaded:!1}},{path:"24",name:"page-24",component:i9,meta:{hide:!1,srcSequence:"./pages/02-unicode.md",slide:{raw:`
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

UTF-21: https://evanhahn.com/utf-21/`,index:23,start:194,end:229,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/02-unicode.md",raw:`
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

UTF-21: https://evanhahn.com/utf-21/`,index:12,start:194,end:229},filepath:"/home/ben/Workspace/demystifying-unicode/pages/02-unicode.md",noteHTML:`<p>A UTF-8 encoded string on my machine spits out an array of bytes. To your machine, it's just an array of bytes.</p>
<p>UTF-8/16/32 &amp; BOM FAQs: https://unicode.org/faq/utf_bom.html</p>
<p>Content-Encoding header on HTTP requests</p>
<p>UTF-21: https://evanhahn.com/utf-21/</p>
`,id:23,no:24},__clicksElements:[],__preloaded:!1}},{path:"25",name:"page-25",component:p9,meta:{layout:"center",hide:!1,srcSequence:"./pages/02-unicode.md",slide:{raw:`---
layout: center
---

## UTF-8 is the king of the web
`,title:"UTF-8 is the king of the web",level:2,content:"## UTF-8 is the king of the web",frontmatter:{layout:"center",hide:!1,srcSequence:"./pages/02-unicode.md"},index:24,start:229,end:235,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/02-unicode.md",raw:`---
layout: center
---

## UTF-8 is the king of the web
`,title:"UTF-8 is the king of the web",level:2,content:"## UTF-8 is the king of the web",frontmatter:{layout:"center"},index:13,start:229,end:235},filepath:"/home/ben/Workspace/demystifying-unicode/pages/02-unicode.md",noteHTML:"",id:24,no:25},__clicksElements:[],__preloaded:!1}},{path:"26",name:"page-26",component:v9,meta:{hide:!1,srcSequence:"./pages/02-unicode.md",slide:{raw:'\n## Nuts and bolts of UTF-8\n\nKey points:\n\n- Variable width (1-4 bytes)\n- ∴ Variable offset between characters\n- The default in Rust (+many more)\n\n<v-click>\n\n<hr />\n\n| Code point range | Byte 1 | Byte 2 | Byte 3 | Byte 4 | Bit Capacity | Code points |\n| - | - | - | - | - | - | - |\n| `0x000000..0x00007F` | `0xxxxxxx` | | | | 7 | 128 |\n| `0x000080..0x0007FF` | `110xxxxx` | `10xxxxxx` | | | 11 | 1920 |\n| `0x000800..0x00FFFF` | `1110xxxx` | `10xxxxxx` | `10xxxxxx` | | 16 | 63488 |\n| `0x010000..0x10FFFF` | `11110xxx` | `10xxxxxx` | `10xxxxxx` | `10xxxxxx` | 21 | 1mil+ |\n\n</v-click>\n\n<!--\nUTF-8 is generally speaking more efficient when dealing with "Latin" based web - Best case 1 byte, worst case, 2 bytes.\nUTF-16 is gauranteed to be 2 bytes, if not 4\nUTF-32 will always be 4 bytes.\n-->\n',title:"Nuts and bolts of UTF-8",level:2,content:"## Nuts and bolts of UTF-8\n\nKey points:\n\n- Variable width (1-4 bytes)\n- ∴ Variable offset between characters\n- The default in Rust (+many more)\n\n<v-click>\n\n<hr />\n\n| Code point range | Byte 1 | Byte 2 | Byte 3 | Byte 4 | Bit Capacity | Code points |\n| - | - | - | - | - | - | - |\n| `0x000000..0x00007F` | `0xxxxxxx` | | | | 7 | 128 |\n| `0x000080..0x0007FF` | `110xxxxx` | `10xxxxxx` | | | 11 | 1920 |\n| `0x000800..0x00FFFF` | `1110xxxx` | `10xxxxxx` | `10xxxxxx` | | 16 | 63488 |\n| `0x010000..0x10FFFF` | `11110xxx` | `10xxxxxx` | `10xxxxxx` | `10xxxxxx` | 21 | 1mil+ |\n\n</v-click>",frontmatter:{hide:!1,srcSequence:"./pages/02-unicode.md"},note:`UTF-8 is generally speaking more efficient when dealing with "Latin" based web - Best case 1 byte, worst case, 2 bytes.
UTF-16 is gauranteed to be 2 bytes, if not 4
UTF-32 will always be 4 bytes.`,index:25,start:236,end:264,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/02-unicode.md",raw:'\n## Nuts and bolts of UTF-8\n\nKey points:\n\n- Variable width (1-4 bytes)\n- ∴ Variable offset between characters\n- The default in Rust (+many more)\n\n<v-click>\n\n<hr />\n\n| Code point range | Byte 1 | Byte 2 | Byte 3 | Byte 4 | Bit Capacity | Code points |\n| - | - | - | - | - | - | - |\n| `0x000000..0x00007F` | `0xxxxxxx` | | | | 7 | 128 |\n| `0x000080..0x0007FF` | `110xxxxx` | `10xxxxxx` | | | 11 | 1920 |\n| `0x000800..0x00FFFF` | `1110xxxx` | `10xxxxxx` | `10xxxxxx` | | 16 | 63488 |\n| `0x010000..0x10FFFF` | `11110xxx` | `10xxxxxx` | `10xxxxxx` | `10xxxxxx` | 21 | 1mil+ |\n\n</v-click>\n\n<!--\nUTF-8 is generally speaking more efficient when dealing with "Latin" based web - Best case 1 byte, worst case, 2 bytes.\nUTF-16 is gauranteed to be 2 bytes, if not 4\nUTF-32 will always be 4 bytes.\n-->\n',title:"Nuts and bolts of UTF-8",level:2,content:"## Nuts and bolts of UTF-8\n\nKey points:\n\n- Variable width (1-4 bytes)\n- ∴ Variable offset between characters\n- The default in Rust (+many more)\n\n<v-click>\n\n<hr />\n\n| Code point range | Byte 1 | Byte 2 | Byte 3 | Byte 4 | Bit Capacity | Code points |\n| - | - | - | - | - | - | - |\n| `0x000000..0x00007F` | `0xxxxxxx` | | | | 7 | 128 |\n| `0x000080..0x0007FF` | `110xxxxx` | `10xxxxxx` | | | 11 | 1920 |\n| `0x000800..0x00FFFF` | `1110xxxx` | `10xxxxxx` | `10xxxxxx` | | 16 | 63488 |\n| `0x010000..0x10FFFF` | `11110xxx` | `10xxxxxx` | `10xxxxxx` | `10xxxxxx` | 21 | 1mil+ |\n\n</v-click>",frontmatter:{},note:`UTF-8 is generally speaking more efficient when dealing with "Latin" based web - Best case 1 byte, worst case, 2 bytes.
UTF-16 is gauranteed to be 2 bytes, if not 4
UTF-32 will always be 4 bytes.`,index:14,start:236,end:264},filepath:"/home/ben/Workspace/demystifying-unicode/pages/02-unicode.md",noteHTML:`<p>UTF-8 is generally speaking more efficient when dealing with &quot;Latin&quot; based web - Best case 1 byte, worst case, 2 bytes.
UTF-16 is gauranteed to be 2 bytes, if not 4
UTF-32 will always be 4 bytes.</p>
`,id:25,no:26},__clicksElements:[],__preloaded:!1}},{path:"27",name:"page-27",component:L9,meta:{hide:!1,srcSequence:"./pages/02-unicode.md",slide:{raw:`
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

</div>`,frontmatter:{hide:!1,srcSequence:"./pages/02-unicode.md"},note:"Take a codepoint, and split it into UTF-8",index:26,start:265,end:304,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/02-unicode.md",raw:`
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

</div>`,frontmatter:{},note:"Take a codepoint, and split it into UTF-8",index:15,start:265,end:304},filepath:"/home/ben/Workspace/demystifying-unicode/pages/02-unicode.md",noteHTML:`<p>Take a codepoint, and split it into UTF-8</p>
`,id:26,no:27},__clicksElements:[],__preloaded:!1}},{path:"28",name:"page-28",component:gC,meta:{hide:!1,srcSequence:"./pages/02-unicode.md",slide:{raw:`
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
</style>`,frontmatter:{hide:!1,srcSequence:"./pages/02-unicode.md"},index:27,start:305,end:389,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/02-unicode.md",raw:`
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
</style>`,frontmatter:{},index:16,start:305,end:389},filepath:"/home/ben/Workspace/demystifying-unicode/pages/02-unicode.md",noteHTML:"",id:27,no:28},__clicksElements:[],__preloaded:!1}},{path:"29",name:"page-29",component:BC,meta:{layout:"center",hide:!1,srcSequence:"./pages/02-unicode.md",slide:{raw:`---
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

</v-clicks>`,frontmatter:{layout:"center",hide:!1,srcSequence:"./pages/02-unicode.md"},index:28,start:389,end:407,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/02-unicode.md",raw:`---
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

</v-clicks>`,frontmatter:{layout:"center"},index:17,start:389,end:407},filepath:"/home/ben/Workspace/demystifying-unicode/pages/02-unicode.md",noteHTML:"",id:28,no:29},__clicksElements:[],__preloaded:!1}},{path:"30",name:"page-30",component:FC,meta:{layout:"cover",background:"/DSC09353.jpg",title:"Unicode in Rust",hide:!1,srcSequence:"./pages/03-unicode-in-rust.md",slide:{raw:null,title:"Unicode in Rust",level:1,content:"# Unicode in Rust",frontmatter:{layout:"cover",background:"/DSC09353.jpg",title:"Unicode in Rust",hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"},note:"We now know what Unicode and UTF-8 are, how is it used in rust?",index:29,start:0,end:13,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/03-unicode-in-rust.md",raw:`---
layout: cover
background: /DSC09353.jpg
---

# Unicode in Rust

<!--

We now know what Unicode and UTF-8 are, how is it used in rust?

-->
`,title:"Unicode in Rust",level:1,content:"# Unicode in Rust",frontmatter:{layout:"cover",background:"/DSC09353.jpg",title:"Unicode in Rust"},note:"We now know what Unicode and UTF-8 are, how is it used in rust?",index:0,start:0,end:13},inline:{raw:`---
src: ./pages/03-unicode-in-rust.md
hide: false
---
`,content:"",frontmatter:{hide:!1},index:4,start:44,end:49},filepath:"/home/ben/Workspace/demystifying-unicode/pages/03-unicode-in-rust.md",noteHTML:`<p>We now know what Unicode and UTF-8 are, how is it used in rust?</p>
`,id:29,no:30},__clicksElements:[],__preloaded:!1}},{path:"31",name:"page-31",component:SC,meta:{layout:"center",hide:!1,srcSequence:"./pages/03-unicode-in-rust.md",slide:{raw:`---
layout: center
---

Q: What is the primitive string type in rust?
`,content:"Q: What is the primitive string type in rust?",frontmatter:{layout:"center",hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"},index:30,start:13,end:19,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/03-unicode-in-rust.md",raw:`---
layout: center
---

Q: What is the primitive string type in rust?
`,content:"Q: What is the primitive string type in rust?",frontmatter:{layout:"center"},index:1,start:13,end:19},filepath:"/home/ben/Workspace/demystifying-unicode/pages/03-unicode-in-rust.md",noteHTML:"",id:30,no:31},__clicksElements:[],__preloaded:!1}},{path:"32",name:"page-32",component:LC,meta:{layout:"center",hide:!1,srcSequence:"./pages/03-unicode-in-rust.md",slide:{raw:`---
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
- AsRef<str> is one of the common interfaces, however Deref means you can just use &String for &str args.`,index:31,start:19,end:51,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/03-unicode-in-rust.md",raw:`---
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
- AsRef<str> is one of the common interfaces, however Deref means you can just use &String for &str args.`,index:2,start:19,end:51},filepath:"/home/ben/Workspace/demystifying-unicode/pages/03-unicode-in-rust.md",noteHTML:`<p>Notes:</p>
<ul>
<li>str's can never actually be constructed directly</li>
<li>&amp;str could point to many different places, but it'll always implement the str primitives</li>
<li>AsRef<str> is one of the common interfaces, however Deref means you can just use &amp;String for &amp;str args.</li>
</ul>
`,id:31,no:32},__clicksElements:[],__preloaded:!1}},{path:"33",name:"page-33",component:a7,meta:{hide:!1,srcSequence:"./pages/03-unicode-in-rust.md",slide:{raw:`
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
Therefore string slices are slices of bytes`,index:32,start:52,end:102,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/03-unicode-in-rust.md",raw:`
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
Therefore string slices are slices of bytes`,index:3,start:52,end:102},filepath:"/home/ben/Workspace/demystifying-unicode/pages/03-unicode-in-rust.md",noteHTML:`<p>&amp;str is a slice of bytes, not of utf-8 characters. UTF-8 characters are between 1-4 bytes, so:</p>
<ul>
<li>it would be memory inefficient to assume all characters take 4 bytes</li>
<li>it would be impossible to have a fixed distance with a variable length
Therefore string slices are slices of bytes</li>
</ul>
`,id:32,no:33},__clicksElements:[],__preloaded:!1}},{path:"34",name:"page-34",component:u7,meta:{layout:"center",hide:!1,srcSequence:"./pages/03-unicode-in-rust.md",slide:{raw:`---
layout: center
---

## A String slice (\`str\`) is just a slice of bytes (\`[u8]\`), **which contents are always valid UTF-8**.
`,title:"A String slice (`str`) is just a slice of bytes (`[u8]`), **which contents are always valid UTF-8**.",level:2,content:"## A String slice (`str`) is just a slice of bytes (`[u8]`), **which contents are always valid UTF-8**.",frontmatter:{layout:"center",hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"},index:33,start:102,end:108,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/03-unicode-in-rust.md",raw:`---
layout: center
---

## A String slice (\`str\`) is just a slice of bytes (\`[u8]\`), **which contents are always valid UTF-8**.
`,title:"A String slice (`str`) is just a slice of bytes (`[u8]`), **which contents are always valid UTF-8**.",level:2,content:"## A String slice (`str`) is just a slice of bytes (`[u8]`), **which contents are always valid UTF-8**.",frontmatter:{layout:"center"},index:4,start:102,end:108},filepath:"/home/ben/Workspace/demystifying-unicode/pages/03-unicode-in-rust.md",noteHTML:"",id:33,no:34},__clicksElements:[],__preloaded:!1}},{path:"35",name:"page-35",component:f7,meta:{layout:"center",hide:!1,srcSequence:"./pages/03-unicode-in-rust.md",slide:{raw:`---
layout: center
---

## Lets make some strings
`,title:"Lets make some strings",level:2,content:"## Lets make some strings",frontmatter:{layout:"center",hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"},index:34,start:108,end:114,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/03-unicode-in-rust.md",raw:`---
layout: center
---

## Lets make some strings
`,title:"Lets make some strings",level:2,content:"## Lets make some strings",frontmatter:{layout:"center"},index:5,start:108,end:114},filepath:"/home/ben/Workspace/demystifying-unicode/pages/03-unicode-in-rust.md",noteHTML:"",id:34,no:35},__clicksElements:[],__preloaded:!1}},{path:"36",name:"page-36",component:x7,meta:{hide:!1,srcSequence:"./pages/03-unicode-in-rust.md",slide:{raw:`
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

</v-click>`,frontmatter:{hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"},note:"\\x7F is DEL, so it seems as though the character is added then removed :shrug:",index:35,start:115,end:153,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/03-unicode-in-rust.md",raw:`
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

</v-click>`,frontmatter:{},note:"\\x7F is DEL, so it seems as though the character is added then removed :shrug:",index:6,start:115,end:153},filepath:"/home/ben/Workspace/demystifying-unicode/pages/03-unicode-in-rust.md",noteHTML:`<p>\\x7F is DEL, so it seems as though the character is added then removed :shrug:</p>
`,id:35,no:36},__clicksElements:[],__preloaded:!1}},{path:"37",name:"page-37",component:D7,meta:{hide:!1,srcSequence:"./pages/03-unicode-in-rust.md",slide:{raw:`
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

</v-click>`,frontmatter:{hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"},index:36,start:154,end:186,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/03-unicode-in-rust.md",raw:`
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

</v-click>`,frontmatter:{},index:7,start:154,end:186},filepath:"/home/ben/Workspace/demystifying-unicode/pages/03-unicode-in-rust.md",noteHTML:"",id:36,no:37},__clicksElements:[],__preloaded:!1}},{path:"38",name:"page-38",component:U7,meta:{hide:!1,srcSequence:"./pages/03-unicode-in-rust.md",slide:{raw:`
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

👆 Yes, \`.iter().collect();\``,frontmatter:{hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"},index:37,start:187,end:212,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/03-unicode-in-rust.md",raw:`
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

👆 Yes, \`.iter().collect();\``,frontmatter:{},index:8,start:187,end:212},filepath:"/home/ben/Workspace/demystifying-unicode/pages/03-unicode-in-rust.md",noteHTML:"",id:37,no:38},__clicksElements:[],__preloaded:!1}},{path:"39",name:"page-39",component:M7,meta:{layout:"center",hide:!1,srcSequence:"./pages/03-unicode-in-rust.md",slide:{raw:`---
layout: center
---

## See, creating strings is easy!
`,title:"See, creating strings is easy!",level:2,content:"## See, creating strings is easy!",frontmatter:{layout:"center",hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"},index:38,start:212,end:218,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/03-unicode-in-rust.md",raw:`---
layout: center
---

## See, creating strings is easy!
`,title:"See, creating strings is easy!",level:2,content:"## See, creating strings is easy!",frontmatter:{layout:"center"},index:9,start:212,end:218},filepath:"/home/ben/Workspace/demystifying-unicode/pages/03-unicode-in-rust.md",noteHTML:"",id:38,no:39},__clicksElements:[],__preloaded:!1}},{path:"40",name:"page-40",component:z7,meta:{hide:!1,srcSequence:"./pages/03-unicode-in-rust.md",slide:{raw:`
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

</p>`,frontmatter:{hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"},index:39,start:219,end:245,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/03-unicode-in-rust.md",raw:`
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

</p>`,frontmatter:{},index:10,start:219,end:245},filepath:"/home/ben/Workspace/demystifying-unicode/pages/03-unicode-in-rust.md",noteHTML:"",id:39,no:40},__clicksElements:[],__preloaded:!1}},{path:"41",name:"page-41",component:J7,meta:{hide:!1,srcSequence:"./pages/03-unicode-in-rust.md",slide:{raw:'\n## Invalid UTF-8\n\n...We didn\'t talk about Invalid UTF-8 yet\n\n<v-click>\n\n- First byte of UTF-8 byte sequences\n  - 1 byte seq: `0xxxxxxx`\n  - 2 byte seq: `110xxxxx` - `0xCx` or `0xDx` = 2 bytes \n  - 3 byte seq: `1110xxxx` - `0xEx` = 3 bytes\n  - 4 byte seq: `11110xxx` - `0xFx` = 4 bytes\n\n</v-click>\n\n<v-click>\n\n- ∴ The following are "broken":\n  - `[0x80]`, `[0x90]`, `[0xA0]`, `[0xB0]` - invalid UTF-8 sequences\n  - `[0xC0]`, `[0xD0]` - missing second byte\n  - `[0xE0, 0xFF]` - missing third byte\n  - `[0xF0, 0xFF, 0xFF]` - missing fourth byte\n\n</v-click>\n',title:"Invalid UTF-8",level:2,content:'## Invalid UTF-8\n\n...We didn\'t talk about Invalid UTF-8 yet\n\n<v-click>\n\n- First byte of UTF-8 byte sequences\n  - 1 byte seq: `0xxxxxxx`\n  - 2 byte seq: `110xxxxx` - `0xCx` or `0xDx` = 2 bytes \n  - 3 byte seq: `1110xxxx` - `0xEx` = 3 bytes\n  - 4 byte seq: `11110xxx` - `0xFx` = 4 bytes\n\n</v-click>\n\n<v-click>\n\n- ∴ The following are "broken":\n  - `[0x80]`, `[0x90]`, `[0xA0]`, `[0xB0]` - invalid UTF-8 sequences\n  - `[0xC0]`, `[0xD0]` - missing second byte\n  - `[0xE0, 0xFF]` - missing third byte\n  - `[0xF0, 0xFF, 0xFF]` - missing fourth byte\n\n</v-click>',frontmatter:{hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"},index:40,start:246,end:271,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/03-unicode-in-rust.md",raw:'\n## Invalid UTF-8\n\n...We didn\'t talk about Invalid UTF-8 yet\n\n<v-click>\n\n- First byte of UTF-8 byte sequences\n  - 1 byte seq: `0xxxxxxx`\n  - 2 byte seq: `110xxxxx` - `0xCx` or `0xDx` = 2 bytes \n  - 3 byte seq: `1110xxxx` - `0xEx` = 3 bytes\n  - 4 byte seq: `11110xxx` - `0xFx` = 4 bytes\n\n</v-click>\n\n<v-click>\n\n- ∴ The following are "broken":\n  - `[0x80]`, `[0x90]`, `[0xA0]`, `[0xB0]` - invalid UTF-8 sequences\n  - `[0xC0]`, `[0xD0]` - missing second byte\n  - `[0xE0, 0xFF]` - missing third byte\n  - `[0xF0, 0xFF, 0xFF]` - missing fourth byte\n\n</v-click>\n',title:"Invalid UTF-8",level:2,content:'## Invalid UTF-8\n\n...We didn\'t talk about Invalid UTF-8 yet\n\n<v-click>\n\n- First byte of UTF-8 byte sequences\n  - 1 byte seq: `0xxxxxxx`\n  - 2 byte seq: `110xxxxx` - `0xCx` or `0xDx` = 2 bytes \n  - 3 byte seq: `1110xxxx` - `0xEx` = 3 bytes\n  - 4 byte seq: `11110xxx` - `0xFx` = 4 bytes\n\n</v-click>\n\n<v-click>\n\n- ∴ The following are "broken":\n  - `[0x80]`, `[0x90]`, `[0xA0]`, `[0xB0]` - invalid UTF-8 sequences\n  - `[0xC0]`, `[0xD0]` - missing second byte\n  - `[0xE0, 0xFF]` - missing third byte\n  - `[0xF0, 0xFF, 0xFF]` - missing fourth byte\n\n</v-click>',frontmatter:{},index:11,start:246,end:271},filepath:"/home/ben/Workspace/demystifying-unicode/pages/03-unicode-in-rust.md",noteHTML:"",id:40,no:41},__clicksElements:[],__preloaded:!1}},{path:"42",name:"page-42",component:tk,meta:{layout:"center",hide:!1,srcSequence:"./pages/03-unicode-in-rust.md",slide:{raw:`---
layout: center
---

## Where Enforced UTF-8 can go wrong
`,title:"Where Enforced UTF-8 can go wrong",level:2,content:"## Where Enforced UTF-8 can go wrong",frontmatter:{layout:"center",hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"},index:41,start:271,end:277,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/03-unicode-in-rust.md",raw:`---
layout: center
---

## Where Enforced UTF-8 can go wrong
`,title:"Where Enforced UTF-8 can go wrong",level:2,content:"## Where Enforced UTF-8 can go wrong",frontmatter:{layout:"center"},index:12,start:271,end:277},filepath:"/home/ben/Workspace/demystifying-unicode/pages/03-unicode-in-rust.md",noteHTML:"",id:41,no:42},__clicksElements:[],__preloaded:!1}},{path:"43",name:"page-43",component:rk,meta:{hide:!1,srcSequence:"./pages/03-unicode-in-rust.md",slide:{raw:`
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

</v-click>`,frontmatter:{hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"},index:42,start:278,end:304,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/03-unicode-in-rust.md",raw:`
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

</v-click>`,frontmatter:{},index:13,start:278,end:304},filepath:"/home/ben/Workspace/demystifying-unicode/pages/03-unicode-in-rust.md",noteHTML:"",id:42,no:43},__clicksElements:[],__preloaded:!1}},{path:"44",name:"page-44",component:uk,meta:{hide:!1,srcSequence:"./pages/03-unicode-in-rust.md",slide:{raw:`
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
\`\`\``,frontmatter:{hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"},index:43,start:305,end:327,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/03-unicode-in-rust.md",raw:`
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
\`\`\``,frontmatter:{},index:14,start:305,end:327},filepath:"/home/ben/Workspace/demystifying-unicode/pages/03-unicode-in-rust.md",noteHTML:"",id:43,no:44},__clicksElements:[],__preloaded:!1}},{path:"45",name:"page-45",component:_k,meta:{hide:!1,srcSequence:"./pages/03-unicode-in-rust.md",slide:{raw:`
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

unsafe could be burried in dependencies - it shouldn't be, but it could be.`,index:44,start:328,end:376,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/03-unicode-in-rust.md",raw:`
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

unsafe could be burried in dependencies - it shouldn't be, but it could be.`,index:15,start:328,end:376},filepath:"/home/ben/Workspace/demystifying-unicode/pages/03-unicode-in-rust.md",noteHTML:`<p>The execution never completes, and outputs &quot;Hello world&quot;, but not the exclamation mark.</p>
<p>unsafe could be burried in dependencies - it shouldn't be, but it could be.</p>
`,id:44,no:45},__clicksElements:[],__preloaded:!1}},{path:"46",name:"page-46",component:Fk,meta:{hide:!1,srcSequence:"./pages/03-unicode-in-rust.md",slide:{raw:`
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

</v-click>`,frontmatter:{hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"},index:45,start:377,end:419,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/03-unicode-in-rust.md",raw:`
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

</v-click>`,frontmatter:{},index:16,start:377,end:419},filepath:"/home/ben/Workspace/demystifying-unicode/pages/03-unicode-in-rust.md",noteHTML:"",id:45,no:46},__clicksElements:[],__preloaded:!1}},{path:"47",name:"page-47",component:Uk,meta:{layout:"center",hide:!1,srcSequence:"./pages/03-unicode-in-rust.md",slide:{raw:`---
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

</v-clicks>`,frontmatter:{layout:"center",hide:!1,srcSequence:"./pages/03-unicode-in-rust.md"},index:46,start:419,end:437,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/03-unicode-in-rust.md",raw:`---
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

</v-clicks>`,frontmatter:{layout:"center"},index:17,start:419,end:437},filepath:"/home/ben/Workspace/demystifying-unicode/pages/03-unicode-in-rust.md",noteHTML:"",id:46,no:47},__clicksElements:[],__preloaded:!1}},{path:"48",name:"page-48",component:Mk,meta:{layout:"cover",background:"/DSC09320.jpg",title:"Quirks",hide:!1,srcSequence:"./pages/04-quirks.md",slide:{raw:null,title:"Quirks",level:1,content:"# Quirks",frontmatter:{layout:"cover",background:"/DSC09320.jpg",title:"Quirks",hide:!1,srcSequence:"./pages/04-quirks.md"},index:47,start:0,end:7,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/04-quirks.md",raw:`---
layout: cover
background: /DSC09320.jpg
---

# Quirks
`,title:"Quirks",level:1,content:"# Quirks",frontmatter:{layout:"cover",background:"/DSC09320.jpg",title:"Quirks"},index:0,start:0,end:7},inline:{raw:`---
src: ./pages/04-quirks.md
hide: false
---
`,content:"",frontmatter:{hide:!1},index:5,start:49,end:54},filepath:"/home/ben/Workspace/demystifying-unicode/pages/04-quirks.md",noteHTML:"",id:47,no:48},__clicksElements:[],__preloaded:!1}},{path:"49",name:"page-49",component:jk,meta:{hide:!1,srcSequence:"./pages/04-quirks.md",slide:{raw:`
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
\`\`\``,frontmatter:{hide:!1,srcSequence:"./pages/04-quirks.md"},index:48,start:8,end:37,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/04-quirks.md",raw:`
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
\`\`\``,frontmatter:{},index:1,start:8,end:37},filepath:"/home/ben/Workspace/demystifying-unicode/pages/04-quirks.md",noteHTML:"",id:48,no:49},__clicksElements:[],__preloaded:!1}},{path:"50",name:"page-50",component:Vk,meta:{layout:"center",hide:!1,srcSequence:"./pages/04-quirks.md",slide:{raw:`---
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
</style>`,frontmatter:{layout:"center",hide:!1,srcSequence:"./pages/04-quirks.md"},index:49,start:37,end:72,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/04-quirks.md",raw:`---
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
</style>`,frontmatter:{layout:"center"},index:2,start:37,end:72},filepath:"/home/ben/Workspace/demystifying-unicode/pages/04-quirks.md",noteHTML:"",id:49,no:50},__clicksElements:[],__preloaded:!1}},{path:"51",name:"page-51",component:o4,meta:{hide:!1,srcSequence:"./pages/04-quirks.md",slide:{raw:`
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

</div>`,frontmatter:{hide:!1,srcSequence:"./pages/04-quirks.md"},index:50,start:73,end:113,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/04-quirks.md",raw:`
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

</div>`,frontmatter:{},index:3,start:73,end:113},filepath:"/home/ben/Workspace/demystifying-unicode/pages/04-quirks.md",noteHTML:"",id:50,no:51},__clicksElements:[],__preloaded:!1}},{path:"52",name:"page-52",component:b4,meta:{hide:!1,srcSequence:"./pages/04-quirks.md",slide:{raw:`
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

</footer>`,frontmatter:{hide:!1,srcSequence:"./pages/04-quirks.md"},index:51,start:114,end:166,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/04-quirks.md",raw:`
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

</footer>`,frontmatter:{},index:4,start:114,end:166},filepath:"/home/ben/Workspace/demystifying-unicode/pages/04-quirks.md",noteHTML:"",id:51,no:52},__clicksElements:[],__preloaded:!1}},{path:"53",name:"page-53",component:D4,meta:{hide:!1,srcSequence:"./pages/04-quirks.md",slide:{raw:`
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

</footer>`,frontmatter:{hide:!1,srcSequence:"./pages/04-quirks.md"},index:52,start:167,end:211,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/04-quirks.md",raw:`
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

</footer>`,frontmatter:{},index:5,start:167,end:211},filepath:"/home/ben/Workspace/demystifying-unicode/pages/04-quirks.md",noteHTML:"",id:52,no:53},__clicksElements:[],__preloaded:!1}},{path:"54",name:"page-54",component:$4,meta:{hide:!1,srcSequence:"./pages/04-quirks.md",slide:{raw:`
## Emoji Composition

<p style="font-size: 65%; line-height: 1rem;"> 😶‍🌫️ 😮‍💨 😵‍💫 ❤️‍🔥 ❤️‍🩹 👁️‍🗨️ 🫱🏻‍🫲🏼 🫱🏻‍🫲🏽 🫱🏻‍🫲🏾 🫱🏻‍🫲🏿 🫱🏼‍🫲🏻 🫱🏼‍🫲🏽 🫱🏼‍🫲🏾 🫱🏼‍🫲🏿 🫱🏽‍🫲🏻 🫱🏽‍🫲🏼 🫱🏽‍🫲🏾 🫱🏽‍🫲🏿 🫱🏾‍🫲🏻 🫱🏾‍🫲🏼 🫱🏾‍🫲🏽 🫱🏾‍🫲🏿 🫱🏿‍🫲🏻 🫱🏿‍🫲🏼 🫱🏿‍🫲🏽 🫱🏿‍🫲🏾 🧔‍♂️ 🧔🏻‍♂️ 🧔🏼‍♂️ 🧔🏽‍♂️ 🧔🏾‍♂️ 🧔🏿‍♂️ 🧔‍♀️ 🧔🏻‍♀️ 🧔🏼‍♀️ 🧔🏽‍♀️ 🧔🏾‍♀️ 🧔🏿‍♀️ 👨‍🦰 👨🏻‍🦰 👨🏼‍🦰 👨🏽‍🦰 👨🏾‍🦰 👨🏿‍🦰 👨‍🦱 👨🏻‍🦱 👨🏼‍🦱 👨🏽‍🦱 👨🏾‍🦱 👨🏿‍🦱 👨‍🦳 👨🏻‍🦳 👨🏼‍🦳 👨🏽‍🦳 👨🏾‍🦳 👨🏿‍🦳 👨‍🦲 👨🏻‍🦲 👨🏼‍🦲 👨🏽‍🦲 👨🏾‍🦲 👨🏿‍🦲 👩‍🦰 👩🏻‍🦰 👩🏼‍🦰 👩🏽‍🦰 👩🏾‍🦰 👩🏿‍🦰 🧑‍🦰 🧑🏻‍🦰 🧑🏼‍🦰 🧑🏽‍🦰 🧑🏾‍🦰 🧑🏿‍🦰 👩‍🦱 👩🏻‍🦱 👩🏼‍🦱 👩🏽‍🦱 👩🏾‍🦱 👩🏿‍🦱 🧑‍🦱 🧑🏻‍🦱 🧑🏼‍🦱 🧑🏽‍🦱 🧑🏾‍🦱 🧑🏿‍🦱 👩‍🦳 👩🏻‍🦳 👩🏼‍🦳 👩🏽‍🦳 👩🏾‍🦳 👩🏿‍🦳 🧑‍🦳 🧑🏻‍🦳 🧑🏼‍🦳 🧑🏽‍🦳 🧑🏾‍🦳 🧑🏿‍🦳 👩‍🦲 👩🏻‍🦲 👩🏼‍🦲 👩🏽‍🦲 👩🏾‍🦲 👩🏿‍🦲 🧑‍🦲 🧑🏻‍🦲 🧑🏼‍🦲 🧑🏽‍🦲 🧑🏾‍🦲 🧑🏿‍🦲 👱‍♀️ 👱🏻‍♀️ 👱🏼‍♀️ 👱🏽‍♀️ 👱🏾‍♀️ 👱🏿‍♀️ 👱‍♂️ 👱🏻‍♂️ 👱🏼‍♂️ 👱🏽‍♂️ 👱🏾‍♂️ 👱🏿‍♂️ 🙍‍♂️ 🙍🏻‍♂️ 🙍🏼‍♂️ 🙍🏽‍♂️ 🙍🏾‍♂️ 🙍🏿‍♂️ 🙍‍♀️ 🙍🏻‍♀️ 🙍🏼‍♀️ 🙍🏽‍♀️ 🙍🏾‍♀️ 🙍🏿‍♀️ 🙎‍♂️ 🙎🏻‍♂️ 🙎🏼‍♂️ 🙎🏽‍♂️ 🙎🏾‍♂️ 🙎🏿‍♂️ 🙎‍♀️ 🙎🏻‍♀️ 🙎🏼‍♀️ 🙎🏽‍♀️ 🙎🏾‍♀️ 🙎🏿‍♀️ 🙅‍♂️ 🙅🏻‍♂️ 🙅🏼‍♂️ 🙅🏽‍♂️ 🙅🏾‍♂️ 🙅🏿‍♂️ 🙅‍♀️ 🙅🏻‍♀️ 🙅🏼‍♀️ 🙅🏽‍♀️ 🙅🏾‍♀️ 🙅🏿‍♀️ 🙆‍♂️ 🙆🏻‍♂️ 🙆🏼‍♂️ 🙆🏽‍♂️ 🙆🏾‍♂️ 🙆🏿‍♂️ 🙆‍♀️ 🙆🏻‍♀️ 🙆🏼‍♀️ 🙆🏽‍♀️ 🙆🏾‍♀️ 🙆🏿‍♀️ 💁‍♂️ 💁🏻‍♂️ 💁🏼‍♂️ 💁🏽‍♂️ 💁🏾‍♂️ 💁🏿‍♂️ 💁‍♀️ 💁🏻‍♀️ 💁🏼‍♀️ 💁🏽‍♀️ 💁🏾‍♀️ 💁🏿‍♀️ 🙋‍♂️ 🙋🏻‍♂️ 🙋🏼‍♂️ 🙋🏽‍♂️ 🙋🏾‍♂️ 🙋🏿‍♂️ 🙋‍♀️ 🙋🏻‍♀️ 🙋🏼‍♀️ 🙋🏽‍♀️ 🙋🏾‍♀️ 🙋🏿‍♀️ 🧏‍♂️ 🧏🏻‍♂️ 🧏🏼‍♂️ 🧏🏽‍♂️ 🧏🏾‍♂️ 🧏🏿‍♂️ 🧏‍♀️ 🧏🏻‍♀️ 🧏🏼‍♀️ 🧏🏽‍♀️ 🧏🏾‍♀️ 🧏🏿‍♀️ 🙇‍♂️ 🙇🏻‍♂️ 🙇🏼‍♂️ 🙇🏽‍♂️ 🙇🏾‍♂️ 🙇🏿‍♂️ 🙇‍♀️ 🙇🏻‍♀️ 🙇🏼‍♀️ 🙇🏽‍♀️ 🙇🏾‍♀️ 🙇🏿‍♀️ 🤦‍♂️ 🤦🏻‍♂️ 🤦🏼‍♂️ 🤦🏽‍♂️ 🤦🏾‍♂️ 🤦🏿‍♂️ 🤦‍♀️ 🤦🏻‍♀️ 🤦🏼‍♀️ 🤦🏽‍♀️ 🤦🏾‍♀️ 🤦🏿‍♀️ 🤷‍♂️ 🤷🏻‍♂️ 🤷🏼‍♂️ 🤷🏽‍♂️ 🤷🏾‍♂️ 🤷🏿‍♂️ 🤷‍♀️ 🤷🏻‍♀️ 🤷🏼‍♀️ 🤷🏽‍♀️ 🤷🏾‍♀️ 🤷🏿‍♀️ 🧑‍⚕️ 🧑🏻‍⚕️ 🧑🏼‍⚕️ 🧑🏽‍⚕️ 🧑🏾‍⚕️ 🧑🏿‍⚕️ 👨‍⚕️ 👨🏻‍⚕️ 👨🏼‍⚕️ 👨🏽‍⚕️ 👨🏾‍⚕️ 👨🏿‍⚕️ 👩‍⚕️ 👩🏻‍⚕️ 👩🏼‍⚕️ 👩🏽‍⚕️ 👩🏾‍⚕️ 👩🏿‍⚕️ 🧑‍🎓 🧑🏻‍🎓 🧑🏼‍🎓 🧑🏽‍🎓 🧑🏾‍🎓 🧑🏿‍🎓 👨‍🎓 👨🏻‍🎓 👨🏼‍🎓 👨🏽‍🎓 👨🏾‍🎓 👨🏿‍🎓 👩‍🎓 👩🏻‍🎓 👩🏼‍🎓 👩🏽‍🎓 👩🏾‍🎓 👩🏿‍🎓 🧑‍🏫 🧑🏻‍🏫 🧑🏼‍🏫 🧑🏽‍🏫 🧑🏾‍🏫 🧑🏿‍🏫 👨‍🏫 👨🏻‍🏫 👨🏼‍🏫 👨🏽‍🏫 👨🏾‍🏫 👨🏿‍🏫 👩‍🏫 👩🏻‍🏫 👩🏼‍🏫 👩🏽‍🏫 👩🏾‍🏫 👩🏿‍🏫 🧑‍⚖️ 🧑🏻‍⚖️ 🧑🏼‍⚖️ 🧑🏽‍⚖️ 🧑🏾‍⚖️ 🧑🏿‍⚖️ 👨‍⚖️ 👨🏻‍⚖️ 👨🏼‍⚖️ 👨🏽‍⚖️ 👨🏾‍⚖️ 👨🏿‍⚖️ 👩‍⚖️ 👩🏻‍⚖️ 👩🏼‍⚖️ 👩🏽‍⚖️ 👩🏾‍⚖️ 👩🏿‍⚖️ 🧑‍🌾 🧑🏻‍🌾 🧑🏼‍🌾 🧑🏽‍🌾 🧑🏾‍🌾 🧑🏿‍🌾 👨‍🌾 👨🏻‍🌾 👨🏼‍🌾 👨🏽‍🌾 👨🏾‍🌾 👨🏿‍🌾 👩‍🌾 👩🏻‍🌾 👩🏼‍🌾 👩🏽‍🌾 👩🏾‍🌾 👩🏿‍🌾 🧑‍🍳 🧑🏻‍🍳 🧑🏼‍🍳 🧑🏽‍🍳 🧑🏾‍🍳 🧑🏿‍🍳 👨‍🍳 👨🏻‍🍳 👨🏼‍🍳 👨🏽‍🍳 👨🏾‍🍳 👨🏿‍🍳 👩‍🍳 👩🏻‍🍳 👩🏼‍🍳 👩🏽‍🍳 👩🏾‍🍳 👩🏿‍🍳 🧑‍🔧 🧑🏻‍🔧 🧑🏼‍🔧 🧑🏽‍🔧 🧑🏾‍🔧 🧑🏿‍🔧 👨‍🔧 👨🏻‍🔧 👨🏼‍🔧 👨🏽‍🔧 👨🏾‍🔧 👨🏿‍🔧 👩‍🔧 👩🏻‍🔧 👩🏼‍🔧 👩🏽‍🔧 👩🏾‍🔧 👩🏿‍🔧 🧑‍🏭 🧑🏻‍🏭 🧑🏼‍🏭 🧑🏽‍🏭 🧑🏾‍🏭 🧑🏿‍🏭 👨‍🏭 👨🏻‍🏭 👨🏼‍🏭 👨🏽‍🏭 👨🏾‍🏭 👨🏿‍🏭 👩‍🏭 👩🏻‍🏭 👩🏼‍🏭 👩🏽‍🏭 👩🏾‍🏭 👩🏿‍🏭 🧑‍💼 🧑🏻‍💼 🧑🏼‍💼 🧑🏽‍💼 🧑🏾‍💼 🧑🏿‍💼 👨‍💼 👨🏻‍💼 👨🏼‍💼 👨🏽‍💼 👨🏾‍💼 👨🏿‍💼 👩‍💼 👩🏻‍💼 👩🏼‍💼 👩🏽‍💼 👩🏾‍💼 👩🏿‍💼 🧑‍🔬 🧑🏻‍🔬 🧑🏼‍🔬 🧑🏽‍🔬 🧑🏾‍🔬 🧑🏿‍🔬 👨‍🔬 👨🏻‍🔬 👨🏼‍🔬 👨🏽‍🔬 👨🏾‍🔬 👨🏿‍🔬 👩‍🔬 👩🏻‍🔬 👩🏼‍🔬 👩🏽‍🔬 👩🏾‍🔬 👩🏿‍🔬 🧑‍💻 🧑🏻‍💻 🧑🏼‍💻 🧑🏽‍💻 🧑🏾‍💻 🧑🏿‍💻 👨‍💻 👨🏻‍💻 👨🏼‍💻 👨🏽‍💻 👨🏾‍💻 👨🏿‍💻 👩‍💻 👩🏻‍💻 👩🏼‍💻 👩🏽‍💻 👩🏾‍💻 👩🏿‍💻 🧑‍🎤 🧑🏻‍🎤 🧑🏼‍🎤 🧑🏽‍🎤 🧑🏾‍🎤 🧑🏿‍🎤 👨‍🎤 👨🏻‍🎤 👨🏼‍🎤 👨🏽‍🎤 👨🏾‍🎤 👨🏿‍🎤 👩‍🎤 👩🏻‍🎤 👩🏼‍🎤 👩🏽‍🎤 👩🏾‍🎤 👩🏿‍🎤 🧑‍🎨 🧑🏻‍🎨 🧑🏼‍🎨 🧑🏽‍🎨 🧑🏾‍🎨 🧑🏿‍🎨 👨‍🎨 👨🏻‍🎨 👨🏼‍🎨 👨🏽‍🎨 👨🏾‍🎨 👨🏿‍🎨 👩‍🎨 👩🏻‍🎨 👩🏼‍🎨 👩🏽‍🎨 👩🏾‍🎨 👩🏿‍🎨 🧑‍✈️ 🧑🏻‍✈️ 🧑🏼‍✈️ 🧑🏽‍✈️ 🧑🏾‍✈️ 🧑🏿‍✈️ 👨‍✈️ 👨🏻‍✈️ 👨🏼‍✈️ 👨🏽‍✈️ 👨🏾‍✈️ 👨🏿‍✈️ 👩‍✈️ 👩🏻‍✈️ 👩🏼‍✈️ 👩🏽‍✈️ 👩🏾‍✈️ 👩🏿‍✈️ 🧑‍🚀 🧑🏻‍🚀 🧑🏼‍🚀 🧑🏽‍🚀 🧑🏾‍🚀 🧑🏿‍🚀 👨‍🚀 👨🏻‍🚀 👨🏼‍🚀 👨🏽‍🚀 👨🏾‍🚀 👨🏿‍🚀 👩‍🚀 👩🏻‍🚀 👩🏼‍🚀 👩🏽‍🚀 👩🏾‍🚀 👩🏿‍🚀 🧑‍🚒 🧑🏻‍🚒 🧑🏼‍🚒 🧑🏽‍🚒 🧑🏾‍🚒 🧑🏿‍🚒 👨‍🚒 👨🏻‍🚒 👨🏼‍🚒 👨🏽‍🚒 👨🏾‍🚒 👨🏿‍🚒 👩‍🚒 👩🏻‍🚒 👩🏼‍🚒 👩🏽‍🚒 👩🏾‍🚒 👩🏿‍🚒 👮‍♂️ 👮🏻‍♂️ 👮🏼‍♂️ 👮🏽‍♂️ 👮🏾‍♂️ 👮🏿‍♂️ 👮‍♀️ 👮🏻‍♀️ 👮🏼‍♀️ 👮🏽‍♀️ 👮🏾‍♀️ 👮🏿‍♀️ 🕵️‍♂️ 🕵🏻‍♂️ 🕵🏼‍♂️ 🕵🏽‍♂️ 🕵🏾‍♂️ 🕵🏿‍♂️ 🕵️‍♀️ 🕵🏻‍♀️ 🕵🏼‍♀️ 🕵🏽‍♀️ 🕵🏾‍♀️ 🕵🏿‍♀️ 💂‍♂️ 💂🏻‍♂️ 💂🏼‍♂️ 💂🏽‍♂️ 💂🏾‍♂️ 💂🏿‍♂️ 💂‍♀️ 💂🏻‍♀️ 💂🏼‍♀️ 💂🏽‍♀️ 💂🏾‍♀️ 💂🏿‍♀️ 👷‍♂️ 👷🏻‍♂️ 👷🏼‍♂️ 👷🏽‍♂️ 👷🏾‍♂️ 👷🏿‍♂️ 👷‍♀️ 👷🏻‍♀️ 👷🏼‍♀️ 👷🏽‍♀️ 👷🏾‍♀️ 👷🏿‍♀️ 👳‍♂️ 👳🏻‍♂️ 👳🏼‍♂️ 👳🏽‍♂️ 👳🏾‍♂️ 👳🏿‍♂️ 👳‍♀️ 👳🏻‍♀️ 👳🏼‍♀️ 👳🏽‍♀️ 👳🏾‍♀️ 👳🏿‍♀️ 🤵‍♂️ 🤵🏻‍♂️ 🤵🏼‍♂️ 🤵🏽‍♂️ 🤵🏾‍♂️ 🤵🏿‍♂️ 🤵‍♀️ 🤵🏻‍♀️ 🤵🏼‍♀️ 🤵🏽‍♀️ 🤵🏾‍♀️ 🤵🏿‍♀️ 👰‍♂️ 👰🏻‍♂️ 👰🏼‍♂️ 👰🏽‍♂️ 👰🏾‍♂️ 👰🏿‍♂️ 👰‍♀️ 👰🏻‍♀️ 👰🏼‍♀️ 👰🏽‍♀️ 👰🏾‍♀️ 👰🏿‍♀️ 👩‍🍼 👩🏻‍🍼 👩🏼‍🍼 👩🏽‍🍼 👩🏾‍🍼 👩🏿‍🍼 👨‍🍼 👨🏻‍🍼 👨🏼‍🍼 👨🏽‍🍼 👨🏾‍🍼 👨🏿‍🍼 🧑‍🍼 🧑🏻‍🍼 🧑🏼‍🍼 🧑🏽‍🍼 🧑🏾‍🍼 🧑🏿‍🍼 🧑‍🎄 🧑🏻‍🎄 🧑🏼‍🎄 🧑🏽‍🎄 🧑🏾‍🎄 🧑🏿‍🎄 🦸‍♂️ 🦸🏻‍♂️ 🦸🏼‍♂️ 🦸🏽‍♂️ 🦸🏾‍♂️ 🦸🏿‍♂️ 🦸‍♀️ 🦸🏻‍♀️ 🦸🏼‍♀️ 🦸🏽‍♀️ 🦸🏾‍♀️ 🦸🏿‍♀️ 🦹‍♂️ 🦹🏻‍♂️ 🦹🏼‍♂️ 🦹🏽‍♂️ 🦹🏾‍♂️ 🦹🏿‍♂️ 🦹‍♀️ 🦹🏻‍♀️ 🦹🏼‍♀️ 🦹🏽‍♀️ 🦹🏾‍♀️ 🦹🏿‍♀️ 🧙‍♂️ 🧙🏻‍♂️ 🧙🏼‍♂️ 🧙🏽‍♂️ 🧙🏾‍♂️ 🧙🏿‍♂️ 🧙‍♀️ 🧙🏻‍♀️ 🧙🏼‍♀️ 🧙🏽‍♀️ 🧙🏾‍♀️ 🧙🏿‍♀️ 🧚‍♂️ 🧚🏻‍♂️ 🧚🏼‍♂️ 🧚🏽‍♂️ 🧚🏾‍♂️ 🧚🏿‍♂️ 🧚‍♀️ 🧚🏻‍♀️ 🧚🏼‍♀️ 🧚🏽‍♀️ 🧚🏾‍♀️ 🧚🏿‍♀️ 🧛‍♂️ 🧛🏻‍♂️ 🧛🏼‍♂️ 🧛🏽‍♂️ 🧛🏾‍♂️ 🧛🏿‍♂️ 🧛‍♀️ 🧛🏻‍♀️ 🧛🏼‍♀️ 🧛🏽‍♀️ 🧛🏾‍♀️ 🧛🏿‍♀️ 🧜‍♂️ 🧜🏻‍♂️ 🧜🏼‍♂️ 🧜🏽‍♂️ 🧜🏾‍♂️ 🧜🏿‍♂️ 🧜‍♀️ 🧜🏻‍♀️ 🧜🏼‍♀️ 🧜🏽‍♀️ 🧜🏾‍♀️ 🧜🏿‍♀️ 🧝‍♂️ 🧝🏻‍♂️ 🧝🏼‍♂️ 🧝🏽‍♂️ 🧝🏾‍♂️ 🧝🏿‍♂️ 🧝‍♀️ 🧝🏻‍♀️ 🧝🏼‍♀️ 🧝🏽‍♀️ 🧝🏾‍♀️ 🧝🏿‍♀️ 🧞‍♂️ 🧞‍♀️ 🧟‍♂️ 🧟‍♀️ 💆‍♂️ 💆🏻‍♂️ 💆🏼‍♂️ 💆🏽‍♂️ 💆🏾‍♂️ 💆🏿‍♂️ 💆‍♀️ 💆🏻‍♀️ 💆🏼‍♀️ 💆🏽‍♀️ 💆🏾‍♀️ 💆🏿‍♀️ 💇‍♂️ 💇🏻‍♂️ 💇🏼‍♂️ 💇🏽‍♂️ 💇🏾‍♂️ 💇🏿‍♂️ 💇‍♀️ 💇🏻‍♀️ 💇🏼‍♀️ 💇🏽‍♀️ 💇🏾‍♀️ 💇🏿‍♀️ 🚶‍♂️ 🚶🏻‍♂️ 🚶🏼‍♂️ 🚶🏽‍♂️ 🚶🏾‍♂️ 🚶🏿‍♂️ 🚶‍♀️ 🚶🏻‍♀️ 🚶🏼‍♀️ 🚶🏽‍♀️ 🚶🏾‍♀️ 🚶🏿‍♀️ 🧍‍♂️ 🧍🏻‍♂️ 🧍🏼‍♂️ 🧍🏽‍♂️ 🧍🏾‍♂️ 🧍🏿‍♂️ 🧍‍♀️ 🧍🏻‍♀️ 🧍🏼‍♀️ 🧍🏽‍♀️ 🧍🏾‍♀️ 🧍🏿‍♀️ 🧎‍♂️ 🧎🏻‍♂️ 🧎🏼‍♂️ 🧎🏽‍♂️ 🧎🏾‍♂️ 🧎🏿‍♂️ 🧎‍♀️ 🧎🏻‍♀️ 🧎🏼‍♀️ 🧎🏽‍♀️ 🧎🏾‍♀️ 🧎🏿‍♀️ 🧑‍🦯 🧑🏻‍🦯 🧑🏼‍🦯 🧑🏽‍🦯 🧑🏾‍🦯 🧑🏿‍🦯 👨‍🦯 👨🏻‍🦯 👨🏼‍🦯 👨🏽‍🦯 👨🏾‍🦯 👨🏿‍🦯 👩‍🦯 👩🏻‍🦯 👩🏼‍🦯 👩🏽‍🦯 👩🏾‍🦯 👩🏿‍🦯 🧑‍🦼 🧑🏻‍🦼 🧑🏼‍🦼 🧑🏽‍🦼 🧑🏾‍🦼 🧑🏿‍🦼 👨‍🦼 👨🏻‍🦼 👨🏼‍🦼 👨🏽‍🦼 👨🏾‍🦼 👨🏿‍🦼 👩‍🦼 👩🏻‍🦼 👩🏼‍🦼 👩🏽‍🦼 👩🏾‍🦼 👩🏿‍🦼 🧑‍🦽 🧑🏻‍🦽 🧑🏼‍🦽 🧑🏽‍🦽 🧑🏾‍🦽 🧑🏿‍🦽 👨‍🦽 👨🏻‍🦽 👨🏼‍🦽 👨🏽‍🦽 👨🏾‍🦽 👨🏿‍🦽 👩‍🦽 👩🏻‍🦽 👩🏼‍🦽 👩🏽‍🦽 👩🏾‍🦽 👩🏿‍🦽 🏃‍♂️ 🏃🏻‍♂️ 🏃🏼‍♂️ 🏃🏽‍♂️ 🏃🏾‍♂️ 🏃🏿‍♂️ 🏃‍♀️ 🏃🏻‍♀️ 🏃🏼‍♀️ 🏃🏽‍♀️ 🏃🏾‍♀️ 🏃🏿‍♀️ 👯‍♂️ 👯‍♀️ 🧖‍♂️ 🧖🏻‍♂️ 🧖🏼‍♂️ 🧖🏽‍♂️ 🧖🏾‍♂️ 🧖🏿‍♂️ 🧖‍♀️ 🧖🏻‍♀️ 🧖🏼‍♀️ 🧖🏽‍♀️ 🧖🏾‍♀️ 🧖🏿‍♀️ 🧗‍♂️ 🧗🏻‍♂️ 🧗🏼‍♂️ 🧗🏽‍♂️ 🧗🏾‍♂️ 🧗🏿‍♂️ 🧗‍♀️ 🧗🏻‍♀️ 🧗🏼‍♀️ 🧗🏽‍♀️ 🧗🏾‍♀️ 🧗🏿‍♀️ 🏌️‍♂️ 🏌🏻‍♂️ 🏌🏼‍♂️ 🏌🏽‍♂️ 🏌🏾‍♂️ 🏌🏿‍♂️ 🏌️‍♀️ 🏌🏻‍♀️ 🏌🏼‍♀️ 🏌🏽‍♀️ 🏌🏾‍♀️ 🏌🏿‍♀️ 🏄‍♂️ 🏄🏻‍♂️ 🏄🏼‍♂️ 🏄🏽‍♂️ 🏄🏾‍♂️ 🏄🏿‍♂️ 🏄‍♀️ 🏄🏻‍♀️ 🏄🏼‍♀️ 🏄🏽‍♀️ 🏄🏾‍♀️ 🏄🏿‍♀️ 🚣‍♂️ 🚣🏻‍♂️ 🚣🏼‍♂️ 🚣🏽‍♂️ 🚣🏾‍♂️ 🚣🏿‍♂️ 🚣‍♀️ 🚣🏻‍♀️ 🚣🏼‍♀️ 🚣🏽‍♀️ 🚣🏾‍♀️ 🚣🏿‍♀️ 🏊‍♂️ 🏊🏻‍♂️ 🏊🏼‍♂️ 🏊🏽‍♂️ 🏊🏾‍♂️ 🏊🏿‍♂️ 🏊‍♀️ 🏊🏻‍♀️ 🏊🏼‍♀️ 🏊🏽‍♀️ 🏊🏾‍♀️ 🏊🏿‍♀️ ⛹️‍♂️ ⛹🏻‍♂️ ⛹🏼‍♂️ ⛹🏽‍♂️ ⛹🏾‍♂️ ⛹🏿‍♂️ ⛹️‍♀️ ⛹🏻‍♀️ ⛹🏼‍♀️ ⛹🏽‍♀️ ⛹🏾‍♀️ ⛹🏿‍♀️ 🏋️‍♂️ 🏋🏻‍♂️ 🏋🏼‍♂️ 🏋🏽‍♂️ 🏋🏾‍♂️ 🏋🏿‍♂️ 🏋️‍♀️ 🏋🏻‍♀️ 🏋🏼‍♀️ 🏋🏽‍♀️ 🏋🏾‍♀️ 🏋🏿‍♀️ 🚴‍♂️ 🚴🏻‍♂️ 🚴🏼‍♂️ 🚴🏽‍♂️ 🚴🏾‍♂️ 🚴🏿‍♂️ 🚴‍♀️ 🚴🏻‍♀️ 🚴🏼‍♀️ 🚴🏽‍♀️ 🚴🏾‍♀️ 🚴🏿‍♀️ 🚵‍♂️ 🚵🏻‍♂️ 🚵🏼‍♂️ 🚵🏽‍♂️ 🚵🏾‍♂️ 🚵🏿‍♂️ 🚵‍♀️ 🚵🏻‍♀️ 🚵🏼‍♀️ 🚵🏽‍♀️ 🚵🏾‍♀️ 🚵🏿‍♀️ 🤸‍♂️ 🤸🏻‍♂️ 🤸🏼‍♂️ 🤸🏽‍♂️ 🤸🏾‍♂️ 🤸🏿‍♂️ 🤸‍♀️ 🤸🏻‍♀️ 🤸🏼‍♀️ 🤸🏽‍♀️ 🤸🏾‍♀️ 🤸🏿‍♀️ 🤼‍♂️ 🤼‍♀️ 🤽‍♂️ 🤽🏻‍♂️ 🤽🏼‍♂️ 🤽🏽‍♂️ 🤽🏾‍♂️ 🤽🏿‍♂️ 🤽‍♀️ 🤽🏻‍♀️ 🤽🏼‍♀️ 🤽🏽‍♀️ 🤽🏾‍♀️ 🤽🏿‍♀️ 🤾‍♂️ 🤾🏻‍♂️ 🤾🏼‍♂️ 🤾🏽‍♂️ 🤾🏾‍♂️ 🤾🏿‍♂️ 🤾‍♀️ 🤾🏻‍♀️ 🤾🏼‍♀️ 🤾🏽‍♀️ 🤾🏾‍♀️ 🤾🏿‍♀️ 🤹‍♂️ 🤹🏻‍♂️ 🤹🏼‍♂️ 🤹🏽‍♂️ 🤹🏾‍♂️ 🤹🏿‍♂️ 🤹‍♀️ 🤹🏻‍♀️ 🤹🏼‍♀️ 🤹🏽‍♀️ 🤹🏾‍♀️ 🤹🏿‍♀️ 🧘‍♂️ 🧘🏻‍♂️ 🧘🏼‍♂️ 🧘🏽‍♂️ 🧘🏾‍♂️ 🧘🏿‍♂️ 🧘‍♀️ 🧘🏻‍♀️ 🧘🏼‍♀️ 🧘🏽‍♀️ 🧘🏾‍♀️ 🧘🏿‍♀️ 🧑‍🤝‍🧑 🧑🏻‍🤝‍🧑🏻 🧑🏻‍🤝‍🧑🏼 🧑🏻‍🤝‍🧑🏽 🧑🏻‍🤝‍🧑🏾 🧑🏻‍🤝‍🧑🏿 🧑🏼‍🤝‍🧑🏻 🧑🏼‍🤝‍🧑🏼 🧑🏼‍🤝‍🧑🏽 🧑🏼‍🤝‍🧑🏾 🧑🏼‍🤝‍🧑🏿 🧑🏽‍🤝‍🧑🏻 🧑🏽‍🤝‍🧑🏼 🧑🏽‍🤝‍🧑🏽 🧑🏽‍🤝‍🧑🏾 🧑🏽‍🤝‍🧑🏿 🧑🏾‍🤝‍🧑🏻 🧑🏾‍🤝‍🧑🏼 🧑🏾‍🤝‍🧑🏽 🧑🏾‍🤝‍🧑🏾 🧑🏾‍🤝‍🧑🏿 🧑🏿‍🤝‍🧑🏻 🧑🏿‍🤝‍🧑🏼 🧑🏿‍🤝‍🧑🏽 🧑🏿‍🤝‍🧑🏾 🧑🏿‍🤝‍🧑🏿 👩🏻‍🤝‍👩🏼 👩🏻‍🤝‍👩🏽 👩🏻‍🤝‍👩🏾 👩🏻‍🤝‍👩🏿 👩🏼‍🤝‍👩🏻 👩🏼‍🤝‍👩🏽 👩🏼‍🤝‍👩🏾 👩🏼‍🤝‍👩🏿 👩🏽‍🤝‍👩🏻 👩🏽‍🤝‍👩🏼 👩🏽‍🤝‍👩🏾 👩🏽‍🤝‍👩🏿 👩🏾‍🤝‍👩🏻 👩🏾‍🤝‍👩🏼 👩🏾‍🤝‍👩🏽 👩🏾‍🤝‍👩🏿 👩🏿‍🤝‍👩🏻 👩🏿‍🤝‍👩🏼 👩🏿‍🤝‍👩🏽 👩🏿‍🤝‍👩🏾 👩🏻‍🤝‍👨🏼 👩🏻‍🤝‍👨🏽 👩🏻‍🤝‍👨🏾 👩🏻‍🤝‍👨🏿 👩🏼‍🤝‍👨🏻 👩🏼‍🤝‍👨🏽 👩🏼‍🤝‍👨🏾 👩🏼‍🤝‍👨🏿 👩🏽‍🤝‍👨🏻 👩🏽‍🤝‍👨🏼 👩🏽‍🤝‍👨🏾 👩🏽‍🤝‍👨🏿 👩🏾‍🤝‍👨🏻 👩🏾‍🤝‍👨🏼 👩🏾‍🤝‍👨🏽 👩🏾‍🤝‍👨🏿 👩🏿‍🤝‍👨🏻 👩🏿‍🤝‍👨🏼 👩🏿‍🤝‍👨🏽 👩🏿‍🤝‍👨🏾 👨🏻‍🤝‍👨🏼 👨🏻‍🤝‍👨🏽 👨🏻‍🤝‍👨🏾 👨🏻‍🤝‍👨🏿 👨🏼‍🤝‍👨🏻 👨🏼‍🤝‍👨🏽 👨🏼‍🤝‍👨🏾 👨🏼‍🤝‍👨🏿 👨🏽‍🤝‍👨🏻 👨🏽‍🤝‍👨🏼 👨🏽‍🤝‍👨🏾 👨🏽‍🤝‍👨🏿 👨🏾‍🤝‍👨🏻 👨🏾‍🤝‍👨🏼 👨🏾‍🤝‍👨🏽 👨🏾‍🤝‍👨🏿 👨🏿‍🤝‍👨🏻 👨🏿‍🤝‍👨🏼 👨🏿‍🤝‍👨🏽 👨🏿‍🤝‍👨🏾 💏 🧑🏻‍❤️‍💋‍🧑🏼 🧑🏻‍❤️‍💋‍🧑🏽 🧑🏻‍❤️‍💋‍🧑🏾 🧑🏻‍❤️‍💋‍🧑🏿 🧑🏼‍❤️‍💋‍🧑🏻 🧑🏼‍❤️‍💋‍🧑🏽 🧑🏼‍❤️‍💋‍🧑🏾 🧑🏼‍❤️‍💋‍🧑🏿 🧑🏽‍❤️‍💋‍🧑🏻 🧑🏽‍❤️‍💋‍🧑🏼 🧑🏽‍❤️‍💋‍🧑🏾 🧑🏽‍❤️‍💋‍🧑🏿 🧑🏾‍❤️‍💋‍🧑🏻 🧑🏾‍❤️‍💋‍🧑🏼 🧑🏾‍❤️‍💋‍🧑🏽 🧑🏾‍❤️‍💋‍🧑🏿 🧑🏿‍❤️‍💋‍🧑🏻 🧑🏿‍❤️‍💋‍🧑🏼 🧑🏿‍❤️‍💋‍🧑🏽 🧑🏿‍❤️‍💋‍🧑🏾 👩‍❤️‍💋‍👨 👩🏻‍❤️‍💋‍👨🏻 👩🏻‍❤️‍💋‍👨🏼 👩🏻‍❤️‍💋‍👨🏽 👩🏻‍❤️‍💋‍👨🏾 👩🏻‍❤️‍💋‍👨🏿 👩🏼‍❤️‍💋‍👨🏻 👩🏼‍❤️‍💋‍👨🏼 👩🏼‍❤️‍💋‍👨🏽 👩🏼‍❤️‍💋‍👨🏾 👩🏼‍❤️‍💋‍👨🏿 👩🏽‍❤️‍💋‍👨🏻 👩🏽‍❤️‍💋‍👨🏼 👩🏽‍❤️‍💋‍👨🏽 👩🏽‍❤️‍💋‍👨🏾 👩🏽‍❤️‍💋‍👨🏿 👩🏾‍❤️‍💋‍👨🏻 👩🏾‍❤️‍💋‍👨🏼 👩🏾‍❤️‍💋‍👨🏽 👩🏾‍❤️‍💋‍👨🏾 👩🏾‍❤️‍💋‍👨🏿 👩🏿‍❤️‍💋‍👨🏻 👩🏿‍❤️‍💋‍👨🏼 👩🏿‍❤️‍💋‍👨🏽 👩🏿‍❤️‍💋‍👨🏾 👩🏿‍❤️‍💋‍👨🏿 👨‍❤️‍💋‍👨 👨🏻‍❤️‍💋‍👨🏻 👨🏻‍❤️‍💋‍👨🏼 👨🏻‍❤️‍💋‍👨🏽 👨🏻‍❤️‍💋‍👨🏾 👨🏻‍❤️‍💋‍👨🏿 👨🏼‍❤️‍💋‍👨🏻 👨🏼‍❤️‍💋‍👨🏼 👨🏼‍❤️‍💋‍👨🏽 👨🏼‍❤️‍💋‍👨🏾 👨🏼‍❤️‍💋‍👨🏿 👨🏽‍❤️‍💋‍👨🏻 👨🏽‍❤️‍💋‍👨🏼 👨🏽‍❤️‍💋‍👨🏽 👨🏽‍❤️‍💋‍👨🏾 👨🏽‍❤️‍💋‍👨🏿 👨🏾‍❤️‍💋‍👨🏻 👨🏾‍❤️‍💋‍👨🏼 👨🏾‍❤️‍💋‍👨🏽 👨🏾‍❤️‍💋‍👨🏾 👨🏾‍❤️‍💋‍👨🏿 👨🏿‍❤️‍💋‍👨🏻 👨🏿‍❤️‍💋‍👨🏼 👨🏿‍❤️‍💋‍👨🏽 👨🏿‍❤️‍💋‍👨🏾 👨🏿‍❤️‍💋‍👨🏿 👩‍❤️‍💋‍👩 👩🏻‍❤️‍💋‍👩🏻 👩🏻‍❤️‍💋‍👩🏼 👩🏻‍❤️‍💋‍👩🏽 👩🏻‍❤️‍💋‍👩🏾 👩🏻‍❤️‍💋‍👩🏿 👩🏼‍❤️‍💋‍👩🏻 👩🏼‍❤️‍💋‍👩🏼 👩🏼‍❤️‍💋‍👩🏽 👩🏼‍❤️‍💋‍👩🏾 👩🏼‍❤️‍💋‍👩🏿 👩🏽‍❤️‍💋‍👩🏻 👩🏽‍❤️‍💋‍👩🏼 👩🏽‍❤️‍💋‍👩🏽 👩🏽‍❤️‍💋‍👩🏾 👩🏽‍❤️‍💋‍👩🏿 👩🏾‍❤️‍💋‍👩🏻 👩🏾‍❤️‍💋‍👩🏼 👩🏾‍❤️‍💋‍👩🏽 👩🏾‍❤️‍💋‍👩🏾 👩🏾‍❤️‍💋‍👩🏿 👩🏿‍❤️‍💋‍👩🏻 👩🏿‍❤️‍💋‍👩🏼 👩🏿‍❤️‍💋‍👩🏽 👩🏿‍❤️‍💋‍👩🏾 👩🏿‍❤️‍💋‍👩🏿 💑 🧑🏻‍❤️‍🧑🏼 🧑🏻‍❤️‍🧑🏽 🧑🏻‍❤️‍🧑🏾 🧑🏻‍❤️‍🧑🏿 🧑🏼‍❤️‍🧑🏻 🧑🏼‍❤️‍🧑🏽 🧑🏼‍❤️‍🧑🏾 🧑🏼‍❤️‍🧑🏿 🧑🏽‍❤️‍🧑🏻 🧑🏽‍❤️‍🧑🏼 🧑🏽‍❤️‍🧑🏾 🧑🏽‍❤️‍🧑🏿 🧑🏾‍❤️‍🧑🏻 🧑🏾‍❤️‍🧑🏼 🧑🏾‍❤️‍🧑🏽 🧑🏾‍❤️‍🧑🏿 🧑🏿‍❤️‍🧑🏻 🧑🏿‍❤️‍🧑🏼 🧑🏿‍❤️‍🧑🏽 🧑🏿‍❤️‍🧑🏾 👩‍❤️‍👨 👩🏻‍❤️‍👨🏻 👩🏻‍❤️‍👨🏼 👩🏻‍❤️‍👨🏽 👩🏻‍❤️‍👨🏾 👩🏻‍❤️‍👨🏿 👩🏼‍❤️‍👨🏻 👩🏼‍❤️‍👨🏼 👩🏼‍❤️‍👨🏽 👩🏼‍❤️‍👨🏾 👩🏼‍❤️‍👨🏿 👩🏽‍❤️‍👨🏻 👩🏽‍❤️‍👨🏼 👩🏽‍❤️‍👨🏽 👩🏽‍❤️‍👨🏾 👩🏽‍❤️‍👨🏿 👩🏾‍❤️‍👨🏻 👩🏾‍❤️‍👨🏼 👩🏾‍❤️‍👨🏽 👩🏾‍❤️‍👨🏾 👩🏾‍❤️‍👨🏿 👩🏿‍❤️‍👨🏻 👩🏿‍❤️‍👨🏼 👩🏿‍❤️‍👨🏽 👩🏿‍❤️‍👨🏾 👩🏿‍❤️‍👨🏿 👨‍❤️‍👨 👨🏻‍❤️‍👨🏻 👨🏻‍❤️‍👨🏼 👨🏻‍❤️‍👨🏽 👨🏻‍❤️‍👨🏾 👨🏻‍❤️‍👨🏿 👨🏼‍❤️‍👨🏻 👨🏼‍❤️‍👨🏼 👨🏼‍❤️‍👨🏽 👨🏼‍❤️‍👨🏾 👨🏼‍❤️‍👨🏿 👨🏽‍❤️‍👨🏻 👨🏽‍❤️‍👨🏼 👨🏽‍❤️‍👨🏽 👨🏽‍❤️‍👨🏾 👨🏽‍❤️‍👨🏿 👨🏾‍❤️‍👨🏻 👨🏾‍❤️‍👨🏼 👨🏾‍❤️‍👨🏽 👨🏾‍❤️‍👨🏾 👨🏾‍❤️‍👨🏿 👨🏿‍❤️‍👨🏻 👨🏿‍❤️‍👨🏼 👨🏿‍❤️‍👨🏽 👨🏿‍❤️‍👨🏾 👨🏿‍❤️‍👨🏿 👩‍❤️‍👩 👩🏻‍❤️‍👩🏻 👩🏻‍❤️‍👩🏼 👩🏻‍❤️‍👩🏽 👩🏻‍❤️‍👩🏾 👩🏻‍❤️‍👩🏿 👩🏼‍❤️‍👩🏻 👩🏼‍❤️‍👩🏼 👩🏼‍❤️‍👩🏽 👩🏼‍❤️‍👩🏾 👩🏼‍❤️‍👩🏿 👩🏽‍❤️‍👩🏻 👩🏽‍❤️‍👩🏼 👩🏽‍❤️‍👩🏽 👩🏽‍❤️‍👩🏾 👩🏽‍❤️‍👩🏿 👩🏾‍❤️‍👩🏻 👩🏾‍❤️‍👩🏼 👩🏾‍❤️‍👩🏽 👩🏾‍❤️‍👩🏾 👩🏾‍❤️‍👩🏿 👩🏿‍❤️‍👩🏻 👩🏿‍❤️‍👩🏼 👩🏿‍❤️‍👩🏽 👩🏿‍❤️‍👩🏾 👩🏿‍❤️‍👩🏿 👪 👨‍👩‍👦 👨‍👩‍👧 👨‍👩‍👧‍👦 👨‍👩‍👦‍👦 👨‍👩‍👧‍👧 👨‍👨‍👦 👨‍👨‍👧 👨‍👨‍👧‍👦 👨‍👨‍👦‍👦 👨‍👨‍👧‍👧 👩‍👩‍👦 👩‍👩‍👧 👩‍👩‍👧‍👦 👩‍👩‍👦‍👦 👩‍👩‍👧‍👧 👨‍👦 👨‍👦‍👦 👨‍👧 👨‍👧‍👦 👨‍👧‍👧 👩‍👦 👩‍👦‍👦 👩‍👧 👩‍👧‍👦 👩‍👧‍👧 🐕‍🦺 🐈‍⬛ 🐻‍❄️ 🐦‍⬛ 🏳️‍🌈 🏳️‍⚧️ 🏴‍☠️ </p>

<!--
Full reference: https://unicode.org/Public/emoji/15.0/
ZJW: zwidge https://unicode.org/emoji/charts/emoji-zwj-sequences.html
-->
`,title:"Emoji Composition",level:2,content:`## Emoji Composition

<p style="font-size: 65%; line-height: 1rem;"> 😶‍🌫️ 😮‍💨 😵‍💫 ❤️‍🔥 ❤️‍🩹 👁️‍🗨️ 🫱🏻‍🫲🏼 🫱🏻‍🫲🏽 🫱🏻‍🫲🏾 🫱🏻‍🫲🏿 🫱🏼‍🫲🏻 🫱🏼‍🫲🏽 🫱🏼‍🫲🏾 🫱🏼‍🫲🏿 🫱🏽‍🫲🏻 🫱🏽‍🫲🏼 🫱🏽‍🫲🏾 🫱🏽‍🫲🏿 🫱🏾‍🫲🏻 🫱🏾‍🫲🏼 🫱🏾‍🫲🏽 🫱🏾‍🫲🏿 🫱🏿‍🫲🏻 🫱🏿‍🫲🏼 🫱🏿‍🫲🏽 🫱🏿‍🫲🏾 🧔‍♂️ 🧔🏻‍♂️ 🧔🏼‍♂️ 🧔🏽‍♂️ 🧔🏾‍♂️ 🧔🏿‍♂️ 🧔‍♀️ 🧔🏻‍♀️ 🧔🏼‍♀️ 🧔🏽‍♀️ 🧔🏾‍♀️ 🧔🏿‍♀️ 👨‍🦰 👨🏻‍🦰 👨🏼‍🦰 👨🏽‍🦰 👨🏾‍🦰 👨🏿‍🦰 👨‍🦱 👨🏻‍🦱 👨🏼‍🦱 👨🏽‍🦱 👨🏾‍🦱 👨🏿‍🦱 👨‍🦳 👨🏻‍🦳 👨🏼‍🦳 👨🏽‍🦳 👨🏾‍🦳 👨🏿‍🦳 👨‍🦲 👨🏻‍🦲 👨🏼‍🦲 👨🏽‍🦲 👨🏾‍🦲 👨🏿‍🦲 👩‍🦰 👩🏻‍🦰 👩🏼‍🦰 👩🏽‍🦰 👩🏾‍🦰 👩🏿‍🦰 🧑‍🦰 🧑🏻‍🦰 🧑🏼‍🦰 🧑🏽‍🦰 🧑🏾‍🦰 🧑🏿‍🦰 👩‍🦱 👩🏻‍🦱 👩🏼‍🦱 👩🏽‍🦱 👩🏾‍🦱 👩🏿‍🦱 🧑‍🦱 🧑🏻‍🦱 🧑🏼‍🦱 🧑🏽‍🦱 🧑🏾‍🦱 🧑🏿‍🦱 👩‍🦳 👩🏻‍🦳 👩🏼‍🦳 👩🏽‍🦳 👩🏾‍🦳 👩🏿‍🦳 🧑‍🦳 🧑🏻‍🦳 🧑🏼‍🦳 🧑🏽‍🦳 🧑🏾‍🦳 🧑🏿‍🦳 👩‍🦲 👩🏻‍🦲 👩🏼‍🦲 👩🏽‍🦲 👩🏾‍🦲 👩🏿‍🦲 🧑‍🦲 🧑🏻‍🦲 🧑🏼‍🦲 🧑🏽‍🦲 🧑🏾‍🦲 🧑🏿‍🦲 👱‍♀️ 👱🏻‍♀️ 👱🏼‍♀️ 👱🏽‍♀️ 👱🏾‍♀️ 👱🏿‍♀️ 👱‍♂️ 👱🏻‍♂️ 👱🏼‍♂️ 👱🏽‍♂️ 👱🏾‍♂️ 👱🏿‍♂️ 🙍‍♂️ 🙍🏻‍♂️ 🙍🏼‍♂️ 🙍🏽‍♂️ 🙍🏾‍♂️ 🙍🏿‍♂️ 🙍‍♀️ 🙍🏻‍♀️ 🙍🏼‍♀️ 🙍🏽‍♀️ 🙍🏾‍♀️ 🙍🏿‍♀️ 🙎‍♂️ 🙎🏻‍♂️ 🙎🏼‍♂️ 🙎🏽‍♂️ 🙎🏾‍♂️ 🙎🏿‍♂️ 🙎‍♀️ 🙎🏻‍♀️ 🙎🏼‍♀️ 🙎🏽‍♀️ 🙎🏾‍♀️ 🙎🏿‍♀️ 🙅‍♂️ 🙅🏻‍♂️ 🙅🏼‍♂️ 🙅🏽‍♂️ 🙅🏾‍♂️ 🙅🏿‍♂️ 🙅‍♀️ 🙅🏻‍♀️ 🙅🏼‍♀️ 🙅🏽‍♀️ 🙅🏾‍♀️ 🙅🏿‍♀️ 🙆‍♂️ 🙆🏻‍♂️ 🙆🏼‍♂️ 🙆🏽‍♂️ 🙆🏾‍♂️ 🙆🏿‍♂️ 🙆‍♀️ 🙆🏻‍♀️ 🙆🏼‍♀️ 🙆🏽‍♀️ 🙆🏾‍♀️ 🙆🏿‍♀️ 💁‍♂️ 💁🏻‍♂️ 💁🏼‍♂️ 💁🏽‍♂️ 💁🏾‍♂️ 💁🏿‍♂️ 💁‍♀️ 💁🏻‍♀️ 💁🏼‍♀️ 💁🏽‍♀️ 💁🏾‍♀️ 💁🏿‍♀️ 🙋‍♂️ 🙋🏻‍♂️ 🙋🏼‍♂️ 🙋🏽‍♂️ 🙋🏾‍♂️ 🙋🏿‍♂️ 🙋‍♀️ 🙋🏻‍♀️ 🙋🏼‍♀️ 🙋🏽‍♀️ 🙋🏾‍♀️ 🙋🏿‍♀️ 🧏‍♂️ 🧏🏻‍♂️ 🧏🏼‍♂️ 🧏🏽‍♂️ 🧏🏾‍♂️ 🧏🏿‍♂️ 🧏‍♀️ 🧏🏻‍♀️ 🧏🏼‍♀️ 🧏🏽‍♀️ 🧏🏾‍♀️ 🧏🏿‍♀️ 🙇‍♂️ 🙇🏻‍♂️ 🙇🏼‍♂️ 🙇🏽‍♂️ 🙇🏾‍♂️ 🙇🏿‍♂️ 🙇‍♀️ 🙇🏻‍♀️ 🙇🏼‍♀️ 🙇🏽‍♀️ 🙇🏾‍♀️ 🙇🏿‍♀️ 🤦‍♂️ 🤦🏻‍♂️ 🤦🏼‍♂️ 🤦🏽‍♂️ 🤦🏾‍♂️ 🤦🏿‍♂️ 🤦‍♀️ 🤦🏻‍♀️ 🤦🏼‍♀️ 🤦🏽‍♀️ 🤦🏾‍♀️ 🤦🏿‍♀️ 🤷‍♂️ 🤷🏻‍♂️ 🤷🏼‍♂️ 🤷🏽‍♂️ 🤷🏾‍♂️ 🤷🏿‍♂️ 🤷‍♀️ 🤷🏻‍♀️ 🤷🏼‍♀️ 🤷🏽‍♀️ 🤷🏾‍♀️ 🤷🏿‍♀️ 🧑‍⚕️ 🧑🏻‍⚕️ 🧑🏼‍⚕️ 🧑🏽‍⚕️ 🧑🏾‍⚕️ 🧑🏿‍⚕️ 👨‍⚕️ 👨🏻‍⚕️ 👨🏼‍⚕️ 👨🏽‍⚕️ 👨🏾‍⚕️ 👨🏿‍⚕️ 👩‍⚕️ 👩🏻‍⚕️ 👩🏼‍⚕️ 👩🏽‍⚕️ 👩🏾‍⚕️ 👩🏿‍⚕️ 🧑‍🎓 🧑🏻‍🎓 🧑🏼‍🎓 🧑🏽‍🎓 🧑🏾‍🎓 🧑🏿‍🎓 👨‍🎓 👨🏻‍🎓 👨🏼‍🎓 👨🏽‍🎓 👨🏾‍🎓 👨🏿‍🎓 👩‍🎓 👩🏻‍🎓 👩🏼‍🎓 👩🏽‍🎓 👩🏾‍🎓 👩🏿‍🎓 🧑‍🏫 🧑🏻‍🏫 🧑🏼‍🏫 🧑🏽‍🏫 🧑🏾‍🏫 🧑🏿‍🏫 👨‍🏫 👨🏻‍🏫 👨🏼‍🏫 👨🏽‍🏫 👨🏾‍🏫 👨🏿‍🏫 👩‍🏫 👩🏻‍🏫 👩🏼‍🏫 👩🏽‍🏫 👩🏾‍🏫 👩🏿‍🏫 🧑‍⚖️ 🧑🏻‍⚖️ 🧑🏼‍⚖️ 🧑🏽‍⚖️ 🧑🏾‍⚖️ 🧑🏿‍⚖️ 👨‍⚖️ 👨🏻‍⚖️ 👨🏼‍⚖️ 👨🏽‍⚖️ 👨🏾‍⚖️ 👨🏿‍⚖️ 👩‍⚖️ 👩🏻‍⚖️ 👩🏼‍⚖️ 👩🏽‍⚖️ 👩🏾‍⚖️ 👩🏿‍⚖️ 🧑‍🌾 🧑🏻‍🌾 🧑🏼‍🌾 🧑🏽‍🌾 🧑🏾‍🌾 🧑🏿‍🌾 👨‍🌾 👨🏻‍🌾 👨🏼‍🌾 👨🏽‍🌾 👨🏾‍🌾 👨🏿‍🌾 👩‍🌾 👩🏻‍🌾 👩🏼‍🌾 👩🏽‍🌾 👩🏾‍🌾 👩🏿‍🌾 🧑‍🍳 🧑🏻‍🍳 🧑🏼‍🍳 🧑🏽‍🍳 🧑🏾‍🍳 🧑🏿‍🍳 👨‍🍳 👨🏻‍🍳 👨🏼‍🍳 👨🏽‍🍳 👨🏾‍🍳 👨🏿‍🍳 👩‍🍳 👩🏻‍🍳 👩🏼‍🍳 👩🏽‍🍳 👩🏾‍🍳 👩🏿‍🍳 🧑‍🔧 🧑🏻‍🔧 🧑🏼‍🔧 🧑🏽‍🔧 🧑🏾‍🔧 🧑🏿‍🔧 👨‍🔧 👨🏻‍🔧 👨🏼‍🔧 👨🏽‍🔧 👨🏾‍🔧 👨🏿‍🔧 👩‍🔧 👩🏻‍🔧 👩🏼‍🔧 👩🏽‍🔧 👩🏾‍🔧 👩🏿‍🔧 🧑‍🏭 🧑🏻‍🏭 🧑🏼‍🏭 🧑🏽‍🏭 🧑🏾‍🏭 🧑🏿‍🏭 👨‍🏭 👨🏻‍🏭 👨🏼‍🏭 👨🏽‍🏭 👨🏾‍🏭 👨🏿‍🏭 👩‍🏭 👩🏻‍🏭 👩🏼‍🏭 👩🏽‍🏭 👩🏾‍🏭 👩🏿‍🏭 🧑‍💼 🧑🏻‍💼 🧑🏼‍💼 🧑🏽‍💼 🧑🏾‍💼 🧑🏿‍💼 👨‍💼 👨🏻‍💼 👨🏼‍💼 👨🏽‍💼 👨🏾‍💼 👨🏿‍💼 👩‍💼 👩🏻‍💼 👩🏼‍💼 👩🏽‍💼 👩🏾‍💼 👩🏿‍💼 🧑‍🔬 🧑🏻‍🔬 🧑🏼‍🔬 🧑🏽‍🔬 🧑🏾‍🔬 🧑🏿‍🔬 👨‍🔬 👨🏻‍🔬 👨🏼‍🔬 👨🏽‍🔬 👨🏾‍🔬 👨🏿‍🔬 👩‍🔬 👩🏻‍🔬 👩🏼‍🔬 👩🏽‍🔬 👩🏾‍🔬 👩🏿‍🔬 🧑‍💻 🧑🏻‍💻 🧑🏼‍💻 🧑🏽‍💻 🧑🏾‍💻 🧑🏿‍💻 👨‍💻 👨🏻‍💻 👨🏼‍💻 👨🏽‍💻 👨🏾‍💻 👨🏿‍💻 👩‍💻 👩🏻‍💻 👩🏼‍💻 👩🏽‍💻 👩🏾‍💻 👩🏿‍💻 🧑‍🎤 🧑🏻‍🎤 🧑🏼‍🎤 🧑🏽‍🎤 🧑🏾‍🎤 🧑🏿‍🎤 👨‍🎤 👨🏻‍🎤 👨🏼‍🎤 👨🏽‍🎤 👨🏾‍🎤 👨🏿‍🎤 👩‍🎤 👩🏻‍🎤 👩🏼‍🎤 👩🏽‍🎤 👩🏾‍🎤 👩🏿‍🎤 🧑‍🎨 🧑🏻‍🎨 🧑🏼‍🎨 🧑🏽‍🎨 🧑🏾‍🎨 🧑🏿‍🎨 👨‍🎨 👨🏻‍🎨 👨🏼‍🎨 👨🏽‍🎨 👨🏾‍🎨 👨🏿‍🎨 👩‍🎨 👩🏻‍🎨 👩🏼‍🎨 👩🏽‍🎨 👩🏾‍🎨 👩🏿‍🎨 🧑‍✈️ 🧑🏻‍✈️ 🧑🏼‍✈️ 🧑🏽‍✈️ 🧑🏾‍✈️ 🧑🏿‍✈️ 👨‍✈️ 👨🏻‍✈️ 👨🏼‍✈️ 👨🏽‍✈️ 👨🏾‍✈️ 👨🏿‍✈️ 👩‍✈️ 👩🏻‍✈️ 👩🏼‍✈️ 👩🏽‍✈️ 👩🏾‍✈️ 👩🏿‍✈️ 🧑‍🚀 🧑🏻‍🚀 🧑🏼‍🚀 🧑🏽‍🚀 🧑🏾‍🚀 🧑🏿‍🚀 👨‍🚀 👨🏻‍🚀 👨🏼‍🚀 👨🏽‍🚀 👨🏾‍🚀 👨🏿‍🚀 👩‍🚀 👩🏻‍🚀 👩🏼‍🚀 👩🏽‍🚀 👩🏾‍🚀 👩🏿‍🚀 🧑‍🚒 🧑🏻‍🚒 🧑🏼‍🚒 🧑🏽‍🚒 🧑🏾‍🚒 🧑🏿‍🚒 👨‍🚒 👨🏻‍🚒 👨🏼‍🚒 👨🏽‍🚒 👨🏾‍🚒 👨🏿‍🚒 👩‍🚒 👩🏻‍🚒 👩🏼‍🚒 👩🏽‍🚒 👩🏾‍🚒 👩🏿‍🚒 👮‍♂️ 👮🏻‍♂️ 👮🏼‍♂️ 👮🏽‍♂️ 👮🏾‍♂️ 👮🏿‍♂️ 👮‍♀️ 👮🏻‍♀️ 👮🏼‍♀️ 👮🏽‍♀️ 👮🏾‍♀️ 👮🏿‍♀️ 🕵️‍♂️ 🕵🏻‍♂️ 🕵🏼‍♂️ 🕵🏽‍♂️ 🕵🏾‍♂️ 🕵🏿‍♂️ 🕵️‍♀️ 🕵🏻‍♀️ 🕵🏼‍♀️ 🕵🏽‍♀️ 🕵🏾‍♀️ 🕵🏿‍♀️ 💂‍♂️ 💂🏻‍♂️ 💂🏼‍♂️ 💂🏽‍♂️ 💂🏾‍♂️ 💂🏿‍♂️ 💂‍♀️ 💂🏻‍♀️ 💂🏼‍♀️ 💂🏽‍♀️ 💂🏾‍♀️ 💂🏿‍♀️ 👷‍♂️ 👷🏻‍♂️ 👷🏼‍♂️ 👷🏽‍♂️ 👷🏾‍♂️ 👷🏿‍♂️ 👷‍♀️ 👷🏻‍♀️ 👷🏼‍♀️ 👷🏽‍♀️ 👷🏾‍♀️ 👷🏿‍♀️ 👳‍♂️ 👳🏻‍♂️ 👳🏼‍♂️ 👳🏽‍♂️ 👳🏾‍♂️ 👳🏿‍♂️ 👳‍♀️ 👳🏻‍♀️ 👳🏼‍♀️ 👳🏽‍♀️ 👳🏾‍♀️ 👳🏿‍♀️ 🤵‍♂️ 🤵🏻‍♂️ 🤵🏼‍♂️ 🤵🏽‍♂️ 🤵🏾‍♂️ 🤵🏿‍♂️ 🤵‍♀️ 🤵🏻‍♀️ 🤵🏼‍♀️ 🤵🏽‍♀️ 🤵🏾‍♀️ 🤵🏿‍♀️ 👰‍♂️ 👰🏻‍♂️ 👰🏼‍♂️ 👰🏽‍♂️ 👰🏾‍♂️ 👰🏿‍♂️ 👰‍♀️ 👰🏻‍♀️ 👰🏼‍♀️ 👰🏽‍♀️ 👰🏾‍♀️ 👰🏿‍♀️ 👩‍🍼 👩🏻‍🍼 👩🏼‍🍼 👩🏽‍🍼 👩🏾‍🍼 👩🏿‍🍼 👨‍🍼 👨🏻‍🍼 👨🏼‍🍼 👨🏽‍🍼 👨🏾‍🍼 👨🏿‍🍼 🧑‍🍼 🧑🏻‍🍼 🧑🏼‍🍼 🧑🏽‍🍼 🧑🏾‍🍼 🧑🏿‍🍼 🧑‍🎄 🧑🏻‍🎄 🧑🏼‍🎄 🧑🏽‍🎄 🧑🏾‍🎄 🧑🏿‍🎄 🦸‍♂️ 🦸🏻‍♂️ 🦸🏼‍♂️ 🦸🏽‍♂️ 🦸🏾‍♂️ 🦸🏿‍♂️ 🦸‍♀️ 🦸🏻‍♀️ 🦸🏼‍♀️ 🦸🏽‍♀️ 🦸🏾‍♀️ 🦸🏿‍♀️ 🦹‍♂️ 🦹🏻‍♂️ 🦹🏼‍♂️ 🦹🏽‍♂️ 🦹🏾‍♂️ 🦹🏿‍♂️ 🦹‍♀️ 🦹🏻‍♀️ 🦹🏼‍♀️ 🦹🏽‍♀️ 🦹🏾‍♀️ 🦹🏿‍♀️ 🧙‍♂️ 🧙🏻‍♂️ 🧙🏼‍♂️ 🧙🏽‍♂️ 🧙🏾‍♂️ 🧙🏿‍♂️ 🧙‍♀️ 🧙🏻‍♀️ 🧙🏼‍♀️ 🧙🏽‍♀️ 🧙🏾‍♀️ 🧙🏿‍♀️ 🧚‍♂️ 🧚🏻‍♂️ 🧚🏼‍♂️ 🧚🏽‍♂️ 🧚🏾‍♂️ 🧚🏿‍♂️ 🧚‍♀️ 🧚🏻‍♀️ 🧚🏼‍♀️ 🧚🏽‍♀️ 🧚🏾‍♀️ 🧚🏿‍♀️ 🧛‍♂️ 🧛🏻‍♂️ 🧛🏼‍♂️ 🧛🏽‍♂️ 🧛🏾‍♂️ 🧛🏿‍♂️ 🧛‍♀️ 🧛🏻‍♀️ 🧛🏼‍♀️ 🧛🏽‍♀️ 🧛🏾‍♀️ 🧛🏿‍♀️ 🧜‍♂️ 🧜🏻‍♂️ 🧜🏼‍♂️ 🧜🏽‍♂️ 🧜🏾‍♂️ 🧜🏿‍♂️ 🧜‍♀️ 🧜🏻‍♀️ 🧜🏼‍♀️ 🧜🏽‍♀️ 🧜🏾‍♀️ 🧜🏿‍♀️ 🧝‍♂️ 🧝🏻‍♂️ 🧝🏼‍♂️ 🧝🏽‍♂️ 🧝🏾‍♂️ 🧝🏿‍♂️ 🧝‍♀️ 🧝🏻‍♀️ 🧝🏼‍♀️ 🧝🏽‍♀️ 🧝🏾‍♀️ 🧝🏿‍♀️ 🧞‍♂️ 🧞‍♀️ 🧟‍♂️ 🧟‍♀️ 💆‍♂️ 💆🏻‍♂️ 💆🏼‍♂️ 💆🏽‍♂️ 💆🏾‍♂️ 💆🏿‍♂️ 💆‍♀️ 💆🏻‍♀️ 💆🏼‍♀️ 💆🏽‍♀️ 💆🏾‍♀️ 💆🏿‍♀️ 💇‍♂️ 💇🏻‍♂️ 💇🏼‍♂️ 💇🏽‍♂️ 💇🏾‍♂️ 💇🏿‍♂️ 💇‍♀️ 💇🏻‍♀️ 💇🏼‍♀️ 💇🏽‍♀️ 💇🏾‍♀️ 💇🏿‍♀️ 🚶‍♂️ 🚶🏻‍♂️ 🚶🏼‍♂️ 🚶🏽‍♂️ 🚶🏾‍♂️ 🚶🏿‍♂️ 🚶‍♀️ 🚶🏻‍♀️ 🚶🏼‍♀️ 🚶🏽‍♀️ 🚶🏾‍♀️ 🚶🏿‍♀️ 🧍‍♂️ 🧍🏻‍♂️ 🧍🏼‍♂️ 🧍🏽‍♂️ 🧍🏾‍♂️ 🧍🏿‍♂️ 🧍‍♀️ 🧍🏻‍♀️ 🧍🏼‍♀️ 🧍🏽‍♀️ 🧍🏾‍♀️ 🧍🏿‍♀️ 🧎‍♂️ 🧎🏻‍♂️ 🧎🏼‍♂️ 🧎🏽‍♂️ 🧎🏾‍♂️ 🧎🏿‍♂️ 🧎‍♀️ 🧎🏻‍♀️ 🧎🏼‍♀️ 🧎🏽‍♀️ 🧎🏾‍♀️ 🧎🏿‍♀️ 🧑‍🦯 🧑🏻‍🦯 🧑🏼‍🦯 🧑🏽‍🦯 🧑🏾‍🦯 🧑🏿‍🦯 👨‍🦯 👨🏻‍🦯 👨🏼‍🦯 👨🏽‍🦯 👨🏾‍🦯 👨🏿‍🦯 👩‍🦯 👩🏻‍🦯 👩🏼‍🦯 👩🏽‍🦯 👩🏾‍🦯 👩🏿‍🦯 🧑‍🦼 🧑🏻‍🦼 🧑🏼‍🦼 🧑🏽‍🦼 🧑🏾‍🦼 🧑🏿‍🦼 👨‍🦼 👨🏻‍🦼 👨🏼‍🦼 👨🏽‍🦼 👨🏾‍🦼 👨🏿‍🦼 👩‍🦼 👩🏻‍🦼 👩🏼‍🦼 👩🏽‍🦼 👩🏾‍🦼 👩🏿‍🦼 🧑‍🦽 🧑🏻‍🦽 🧑🏼‍🦽 🧑🏽‍🦽 🧑🏾‍🦽 🧑🏿‍🦽 👨‍🦽 👨🏻‍🦽 👨🏼‍🦽 👨🏽‍🦽 👨🏾‍🦽 👨🏿‍🦽 👩‍🦽 👩🏻‍🦽 👩🏼‍🦽 👩🏽‍🦽 👩🏾‍🦽 👩🏿‍🦽 🏃‍♂️ 🏃🏻‍♂️ 🏃🏼‍♂️ 🏃🏽‍♂️ 🏃🏾‍♂️ 🏃🏿‍♂️ 🏃‍♀️ 🏃🏻‍♀️ 🏃🏼‍♀️ 🏃🏽‍♀️ 🏃🏾‍♀️ 🏃🏿‍♀️ 👯‍♂️ 👯‍♀️ 🧖‍♂️ 🧖🏻‍♂️ 🧖🏼‍♂️ 🧖🏽‍♂️ 🧖🏾‍♂️ 🧖🏿‍♂️ 🧖‍♀️ 🧖🏻‍♀️ 🧖🏼‍♀️ 🧖🏽‍♀️ 🧖🏾‍♀️ 🧖🏿‍♀️ 🧗‍♂️ 🧗🏻‍♂️ 🧗🏼‍♂️ 🧗🏽‍♂️ 🧗🏾‍♂️ 🧗🏿‍♂️ 🧗‍♀️ 🧗🏻‍♀️ 🧗🏼‍♀️ 🧗🏽‍♀️ 🧗🏾‍♀️ 🧗🏿‍♀️ 🏌️‍♂️ 🏌🏻‍♂️ 🏌🏼‍♂️ 🏌🏽‍♂️ 🏌🏾‍♂️ 🏌🏿‍♂️ 🏌️‍♀️ 🏌🏻‍♀️ 🏌🏼‍♀️ 🏌🏽‍♀️ 🏌🏾‍♀️ 🏌🏿‍♀️ 🏄‍♂️ 🏄🏻‍♂️ 🏄🏼‍♂️ 🏄🏽‍♂️ 🏄🏾‍♂️ 🏄🏿‍♂️ 🏄‍♀️ 🏄🏻‍♀️ 🏄🏼‍♀️ 🏄🏽‍♀️ 🏄🏾‍♀️ 🏄🏿‍♀️ 🚣‍♂️ 🚣🏻‍♂️ 🚣🏼‍♂️ 🚣🏽‍♂️ 🚣🏾‍♂️ 🚣🏿‍♂️ 🚣‍♀️ 🚣🏻‍♀️ 🚣🏼‍♀️ 🚣🏽‍♀️ 🚣🏾‍♀️ 🚣🏿‍♀️ 🏊‍♂️ 🏊🏻‍♂️ 🏊🏼‍♂️ 🏊🏽‍♂️ 🏊🏾‍♂️ 🏊🏿‍♂️ 🏊‍♀️ 🏊🏻‍♀️ 🏊🏼‍♀️ 🏊🏽‍♀️ 🏊🏾‍♀️ 🏊🏿‍♀️ ⛹️‍♂️ ⛹🏻‍♂️ ⛹🏼‍♂️ ⛹🏽‍♂️ ⛹🏾‍♂️ ⛹🏿‍♂️ ⛹️‍♀️ ⛹🏻‍♀️ ⛹🏼‍♀️ ⛹🏽‍♀️ ⛹🏾‍♀️ ⛹🏿‍♀️ 🏋️‍♂️ 🏋🏻‍♂️ 🏋🏼‍♂️ 🏋🏽‍♂️ 🏋🏾‍♂️ 🏋🏿‍♂️ 🏋️‍♀️ 🏋🏻‍♀️ 🏋🏼‍♀️ 🏋🏽‍♀️ 🏋🏾‍♀️ 🏋🏿‍♀️ 🚴‍♂️ 🚴🏻‍♂️ 🚴🏼‍♂️ 🚴🏽‍♂️ 🚴🏾‍♂️ 🚴🏿‍♂️ 🚴‍♀️ 🚴🏻‍♀️ 🚴🏼‍♀️ 🚴🏽‍♀️ 🚴🏾‍♀️ 🚴🏿‍♀️ 🚵‍♂️ 🚵🏻‍♂️ 🚵🏼‍♂️ 🚵🏽‍♂️ 🚵🏾‍♂️ 🚵🏿‍♂️ 🚵‍♀️ 🚵🏻‍♀️ 🚵🏼‍♀️ 🚵🏽‍♀️ 🚵🏾‍♀️ 🚵🏿‍♀️ 🤸‍♂️ 🤸🏻‍♂️ 🤸🏼‍♂️ 🤸🏽‍♂️ 🤸🏾‍♂️ 🤸🏿‍♂️ 🤸‍♀️ 🤸🏻‍♀️ 🤸🏼‍♀️ 🤸🏽‍♀️ 🤸🏾‍♀️ 🤸🏿‍♀️ 🤼‍♂️ 🤼‍♀️ 🤽‍♂️ 🤽🏻‍♂️ 🤽🏼‍♂️ 🤽🏽‍♂️ 🤽🏾‍♂️ 🤽🏿‍♂️ 🤽‍♀️ 🤽🏻‍♀️ 🤽🏼‍♀️ 🤽🏽‍♀️ 🤽🏾‍♀️ 🤽🏿‍♀️ 🤾‍♂️ 🤾🏻‍♂️ 🤾🏼‍♂️ 🤾🏽‍♂️ 🤾🏾‍♂️ 🤾🏿‍♂️ 🤾‍♀️ 🤾🏻‍♀️ 🤾🏼‍♀️ 🤾🏽‍♀️ 🤾🏾‍♀️ 🤾🏿‍♀️ 🤹‍♂️ 🤹🏻‍♂️ 🤹🏼‍♂️ 🤹🏽‍♂️ 🤹🏾‍♂️ 🤹🏿‍♂️ 🤹‍♀️ 🤹🏻‍♀️ 🤹🏼‍♀️ 🤹🏽‍♀️ 🤹🏾‍♀️ 🤹🏿‍♀️ 🧘‍♂️ 🧘🏻‍♂️ 🧘🏼‍♂️ 🧘🏽‍♂️ 🧘🏾‍♂️ 🧘🏿‍♂️ 🧘‍♀️ 🧘🏻‍♀️ 🧘🏼‍♀️ 🧘🏽‍♀️ 🧘🏾‍♀️ 🧘🏿‍♀️ 🧑‍🤝‍🧑 🧑🏻‍🤝‍🧑🏻 🧑🏻‍🤝‍🧑🏼 🧑🏻‍🤝‍🧑🏽 🧑🏻‍🤝‍🧑🏾 🧑🏻‍🤝‍🧑🏿 🧑🏼‍🤝‍🧑🏻 🧑🏼‍🤝‍🧑🏼 🧑🏼‍🤝‍🧑🏽 🧑🏼‍🤝‍🧑🏾 🧑🏼‍🤝‍🧑🏿 🧑🏽‍🤝‍🧑🏻 🧑🏽‍🤝‍🧑🏼 🧑🏽‍🤝‍🧑🏽 🧑🏽‍🤝‍🧑🏾 🧑🏽‍🤝‍🧑🏿 🧑🏾‍🤝‍🧑🏻 🧑🏾‍🤝‍🧑🏼 🧑🏾‍🤝‍🧑🏽 🧑🏾‍🤝‍🧑🏾 🧑🏾‍🤝‍🧑🏿 🧑🏿‍🤝‍🧑🏻 🧑🏿‍🤝‍🧑🏼 🧑🏿‍🤝‍🧑🏽 🧑🏿‍🤝‍🧑🏾 🧑🏿‍🤝‍🧑🏿 👩🏻‍🤝‍👩🏼 👩🏻‍🤝‍👩🏽 👩🏻‍🤝‍👩🏾 👩🏻‍🤝‍👩🏿 👩🏼‍🤝‍👩🏻 👩🏼‍🤝‍👩🏽 👩🏼‍🤝‍👩🏾 👩🏼‍🤝‍👩🏿 👩🏽‍🤝‍👩🏻 👩🏽‍🤝‍👩🏼 👩🏽‍🤝‍👩🏾 👩🏽‍🤝‍👩🏿 👩🏾‍🤝‍👩🏻 👩🏾‍🤝‍👩🏼 👩🏾‍🤝‍👩🏽 👩🏾‍🤝‍👩🏿 👩🏿‍🤝‍👩🏻 👩🏿‍🤝‍👩🏼 👩🏿‍🤝‍👩🏽 👩🏿‍🤝‍👩🏾 👩🏻‍🤝‍👨🏼 👩🏻‍🤝‍👨🏽 👩🏻‍🤝‍👨🏾 👩🏻‍🤝‍👨🏿 👩🏼‍🤝‍👨🏻 👩🏼‍🤝‍👨🏽 👩🏼‍🤝‍👨🏾 👩🏼‍🤝‍👨🏿 👩🏽‍🤝‍👨🏻 👩🏽‍🤝‍👨🏼 👩🏽‍🤝‍👨🏾 👩🏽‍🤝‍👨🏿 👩🏾‍🤝‍👨🏻 👩🏾‍🤝‍👨🏼 👩🏾‍🤝‍👨🏽 👩🏾‍🤝‍👨🏿 👩🏿‍🤝‍👨🏻 👩🏿‍🤝‍👨🏼 👩🏿‍🤝‍👨🏽 👩🏿‍🤝‍👨🏾 👨🏻‍🤝‍👨🏼 👨🏻‍🤝‍👨🏽 👨🏻‍🤝‍👨🏾 👨🏻‍🤝‍👨🏿 👨🏼‍🤝‍👨🏻 👨🏼‍🤝‍👨🏽 👨🏼‍🤝‍👨🏾 👨🏼‍🤝‍👨🏿 👨🏽‍🤝‍👨🏻 👨🏽‍🤝‍👨🏼 👨🏽‍🤝‍👨🏾 👨🏽‍🤝‍👨🏿 👨🏾‍🤝‍👨🏻 👨🏾‍🤝‍👨🏼 👨🏾‍🤝‍👨🏽 👨🏾‍🤝‍👨🏿 👨🏿‍🤝‍👨🏻 👨🏿‍🤝‍👨🏼 👨🏿‍🤝‍👨🏽 👨🏿‍🤝‍👨🏾 💏 🧑🏻‍❤️‍💋‍🧑🏼 🧑🏻‍❤️‍💋‍🧑🏽 🧑🏻‍❤️‍💋‍🧑🏾 🧑🏻‍❤️‍💋‍🧑🏿 🧑🏼‍❤️‍💋‍🧑🏻 🧑🏼‍❤️‍💋‍🧑🏽 🧑🏼‍❤️‍💋‍🧑🏾 🧑🏼‍❤️‍💋‍🧑🏿 🧑🏽‍❤️‍💋‍🧑🏻 🧑🏽‍❤️‍💋‍🧑🏼 🧑🏽‍❤️‍💋‍🧑🏾 🧑🏽‍❤️‍💋‍🧑🏿 🧑🏾‍❤️‍💋‍🧑🏻 🧑🏾‍❤️‍💋‍🧑🏼 🧑🏾‍❤️‍💋‍🧑🏽 🧑🏾‍❤️‍💋‍🧑🏿 🧑🏿‍❤️‍💋‍🧑🏻 🧑🏿‍❤️‍💋‍🧑🏼 🧑🏿‍❤️‍💋‍🧑🏽 🧑🏿‍❤️‍💋‍🧑🏾 👩‍❤️‍💋‍👨 👩🏻‍❤️‍💋‍👨🏻 👩🏻‍❤️‍💋‍👨🏼 👩🏻‍❤️‍💋‍👨🏽 👩🏻‍❤️‍💋‍👨🏾 👩🏻‍❤️‍💋‍👨🏿 👩🏼‍❤️‍💋‍👨🏻 👩🏼‍❤️‍💋‍👨🏼 👩🏼‍❤️‍💋‍👨🏽 👩🏼‍❤️‍💋‍👨🏾 👩🏼‍❤️‍💋‍👨🏿 👩🏽‍❤️‍💋‍👨🏻 👩🏽‍❤️‍💋‍👨🏼 👩🏽‍❤️‍💋‍👨🏽 👩🏽‍❤️‍💋‍👨🏾 👩🏽‍❤️‍💋‍👨🏿 👩🏾‍❤️‍💋‍👨🏻 👩🏾‍❤️‍💋‍👨🏼 👩🏾‍❤️‍💋‍👨🏽 👩🏾‍❤️‍💋‍👨🏾 👩🏾‍❤️‍💋‍👨🏿 👩🏿‍❤️‍💋‍👨🏻 👩🏿‍❤️‍💋‍👨🏼 👩🏿‍❤️‍💋‍👨🏽 👩🏿‍❤️‍💋‍👨🏾 👩🏿‍❤️‍💋‍👨🏿 👨‍❤️‍💋‍👨 👨🏻‍❤️‍💋‍👨🏻 👨🏻‍❤️‍💋‍👨🏼 👨🏻‍❤️‍💋‍👨🏽 👨🏻‍❤️‍💋‍👨🏾 👨🏻‍❤️‍💋‍👨🏿 👨🏼‍❤️‍💋‍👨🏻 👨🏼‍❤️‍💋‍👨🏼 👨🏼‍❤️‍💋‍👨🏽 👨🏼‍❤️‍💋‍👨🏾 👨🏼‍❤️‍💋‍👨🏿 👨🏽‍❤️‍💋‍👨🏻 👨🏽‍❤️‍💋‍👨🏼 👨🏽‍❤️‍💋‍👨🏽 👨🏽‍❤️‍💋‍👨🏾 👨🏽‍❤️‍💋‍👨🏿 👨🏾‍❤️‍💋‍👨🏻 👨🏾‍❤️‍💋‍👨🏼 👨🏾‍❤️‍💋‍👨🏽 👨🏾‍❤️‍💋‍👨🏾 👨🏾‍❤️‍💋‍👨🏿 👨🏿‍❤️‍💋‍👨🏻 👨🏿‍❤️‍💋‍👨🏼 👨🏿‍❤️‍💋‍👨🏽 👨🏿‍❤️‍💋‍👨🏾 👨🏿‍❤️‍💋‍👨🏿 👩‍❤️‍💋‍👩 👩🏻‍❤️‍💋‍👩🏻 👩🏻‍❤️‍💋‍👩🏼 👩🏻‍❤️‍💋‍👩🏽 👩🏻‍❤️‍💋‍👩🏾 👩🏻‍❤️‍💋‍👩🏿 👩🏼‍❤️‍💋‍👩🏻 👩🏼‍❤️‍💋‍👩🏼 👩🏼‍❤️‍💋‍👩🏽 👩🏼‍❤️‍💋‍👩🏾 👩🏼‍❤️‍💋‍👩🏿 👩🏽‍❤️‍💋‍👩🏻 👩🏽‍❤️‍💋‍👩🏼 👩🏽‍❤️‍💋‍👩🏽 👩🏽‍❤️‍💋‍👩🏾 👩🏽‍❤️‍💋‍👩🏿 👩🏾‍❤️‍💋‍👩🏻 👩🏾‍❤️‍💋‍👩🏼 👩🏾‍❤️‍💋‍👩🏽 👩🏾‍❤️‍💋‍👩🏾 👩🏾‍❤️‍💋‍👩🏿 👩🏿‍❤️‍💋‍👩🏻 👩🏿‍❤️‍💋‍👩🏼 👩🏿‍❤️‍💋‍👩🏽 👩🏿‍❤️‍💋‍👩🏾 👩🏿‍❤️‍💋‍👩🏿 💑 🧑🏻‍❤️‍🧑🏼 🧑🏻‍❤️‍🧑🏽 🧑🏻‍❤️‍🧑🏾 🧑🏻‍❤️‍🧑🏿 🧑🏼‍❤️‍🧑🏻 🧑🏼‍❤️‍🧑🏽 🧑🏼‍❤️‍🧑🏾 🧑🏼‍❤️‍🧑🏿 🧑🏽‍❤️‍🧑🏻 🧑🏽‍❤️‍🧑🏼 🧑🏽‍❤️‍🧑🏾 🧑🏽‍❤️‍🧑🏿 🧑🏾‍❤️‍🧑🏻 🧑🏾‍❤️‍🧑🏼 🧑🏾‍❤️‍🧑🏽 🧑🏾‍❤️‍🧑🏿 🧑🏿‍❤️‍🧑🏻 🧑🏿‍❤️‍🧑🏼 🧑🏿‍❤️‍🧑🏽 🧑🏿‍❤️‍🧑🏾 👩‍❤️‍👨 👩🏻‍❤️‍👨🏻 👩🏻‍❤️‍👨🏼 👩🏻‍❤️‍👨🏽 👩🏻‍❤️‍👨🏾 👩🏻‍❤️‍👨🏿 👩🏼‍❤️‍👨🏻 👩🏼‍❤️‍👨🏼 👩🏼‍❤️‍👨🏽 👩🏼‍❤️‍👨🏾 👩🏼‍❤️‍👨🏿 👩🏽‍❤️‍👨🏻 👩🏽‍❤️‍👨🏼 👩🏽‍❤️‍👨🏽 👩🏽‍❤️‍👨🏾 👩🏽‍❤️‍👨🏿 👩🏾‍❤️‍👨🏻 👩🏾‍❤️‍👨🏼 👩🏾‍❤️‍👨🏽 👩🏾‍❤️‍👨🏾 👩🏾‍❤️‍👨🏿 👩🏿‍❤️‍👨🏻 👩🏿‍❤️‍👨🏼 👩🏿‍❤️‍👨🏽 👩🏿‍❤️‍👨🏾 👩🏿‍❤️‍👨🏿 👨‍❤️‍👨 👨🏻‍❤️‍👨🏻 👨🏻‍❤️‍👨🏼 👨🏻‍❤️‍👨🏽 👨🏻‍❤️‍👨🏾 👨🏻‍❤️‍👨🏿 👨🏼‍❤️‍👨🏻 👨🏼‍❤️‍👨🏼 👨🏼‍❤️‍👨🏽 👨🏼‍❤️‍👨🏾 👨🏼‍❤️‍👨🏿 👨🏽‍❤️‍👨🏻 👨🏽‍❤️‍👨🏼 👨🏽‍❤️‍👨🏽 👨🏽‍❤️‍👨🏾 👨🏽‍❤️‍👨🏿 👨🏾‍❤️‍👨🏻 👨🏾‍❤️‍👨🏼 👨🏾‍❤️‍👨🏽 👨🏾‍❤️‍👨🏾 👨🏾‍❤️‍👨🏿 👨🏿‍❤️‍👨🏻 👨🏿‍❤️‍👨🏼 👨🏿‍❤️‍👨🏽 👨🏿‍❤️‍👨🏾 👨🏿‍❤️‍👨🏿 👩‍❤️‍👩 👩🏻‍❤️‍👩🏻 👩🏻‍❤️‍👩🏼 👩🏻‍❤️‍👩🏽 👩🏻‍❤️‍👩🏾 👩🏻‍❤️‍👩🏿 👩🏼‍❤️‍👩🏻 👩🏼‍❤️‍👩🏼 👩🏼‍❤️‍👩🏽 👩🏼‍❤️‍👩🏾 👩🏼‍❤️‍👩🏿 👩🏽‍❤️‍👩🏻 👩🏽‍❤️‍👩🏼 👩🏽‍❤️‍👩🏽 👩🏽‍❤️‍👩🏾 👩🏽‍❤️‍👩🏿 👩🏾‍❤️‍👩🏻 👩🏾‍❤️‍👩🏼 👩🏾‍❤️‍👩🏽 👩🏾‍❤️‍👩🏾 👩🏾‍❤️‍👩🏿 👩🏿‍❤️‍👩🏻 👩🏿‍❤️‍👩🏼 👩🏿‍❤️‍👩🏽 👩🏿‍❤️‍👩🏾 👩🏿‍❤️‍👩🏿 👪 👨‍👩‍👦 👨‍👩‍👧 👨‍👩‍👧‍👦 👨‍👩‍👦‍👦 👨‍👩‍👧‍👧 👨‍👨‍👦 👨‍👨‍👧 👨‍👨‍👧‍👦 👨‍👨‍👦‍👦 👨‍👨‍👧‍👧 👩‍👩‍👦 👩‍👩‍👧 👩‍👩‍👧‍👦 👩‍👩‍👦‍👦 👩‍👩‍👧‍👧 👨‍👦 👨‍👦‍👦 👨‍👧 👨‍👧‍👦 👨‍👧‍👧 👩‍👦 👩‍👦‍👦 👩‍👧 👩‍👧‍👦 👩‍👧‍👧 🐕‍🦺 🐈‍⬛ 🐻‍❄️ 🐦‍⬛ 🏳️‍🌈 🏳️‍⚧️ 🏴‍☠️ </p>`,frontmatter:{hide:!1,srcSequence:"./pages/04-quirks.md"},note:`Full reference: https://unicode.org/Public/emoji/15.0/
ZJW: zwidge https://unicode.org/emoji/charts/emoji-zwj-sequences.html`,index:53,start:212,end:222,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/04-quirks.md",raw:`
## Emoji Composition

<p style="font-size: 65%; line-height: 1rem;"> 😶‍🌫️ 😮‍💨 😵‍💫 ❤️‍🔥 ❤️‍🩹 👁️‍🗨️ 🫱🏻‍🫲🏼 🫱🏻‍🫲🏽 🫱🏻‍🫲🏾 🫱🏻‍🫲🏿 🫱🏼‍🫲🏻 🫱🏼‍🫲🏽 🫱🏼‍🫲🏾 🫱🏼‍🫲🏿 🫱🏽‍🫲🏻 🫱🏽‍🫲🏼 🫱🏽‍🫲🏾 🫱🏽‍🫲🏿 🫱🏾‍🫲🏻 🫱🏾‍🫲🏼 🫱🏾‍🫲🏽 🫱🏾‍🫲🏿 🫱🏿‍🫲🏻 🫱🏿‍🫲🏼 🫱🏿‍🫲🏽 🫱🏿‍🫲🏾 🧔‍♂️ 🧔🏻‍♂️ 🧔🏼‍♂️ 🧔🏽‍♂️ 🧔🏾‍♂️ 🧔🏿‍♂️ 🧔‍♀️ 🧔🏻‍♀️ 🧔🏼‍♀️ 🧔🏽‍♀️ 🧔🏾‍♀️ 🧔🏿‍♀️ 👨‍🦰 👨🏻‍🦰 👨🏼‍🦰 👨🏽‍🦰 👨🏾‍🦰 👨🏿‍🦰 👨‍🦱 👨🏻‍🦱 👨🏼‍🦱 👨🏽‍🦱 👨🏾‍🦱 👨🏿‍🦱 👨‍🦳 👨🏻‍🦳 👨🏼‍🦳 👨🏽‍🦳 👨🏾‍🦳 👨🏿‍🦳 👨‍🦲 👨🏻‍🦲 👨🏼‍🦲 👨🏽‍🦲 👨🏾‍🦲 👨🏿‍🦲 👩‍🦰 👩🏻‍🦰 👩🏼‍🦰 👩🏽‍🦰 👩🏾‍🦰 👩🏿‍🦰 🧑‍🦰 🧑🏻‍🦰 🧑🏼‍🦰 🧑🏽‍🦰 🧑🏾‍🦰 🧑🏿‍🦰 👩‍🦱 👩🏻‍🦱 👩🏼‍🦱 👩🏽‍🦱 👩🏾‍🦱 👩🏿‍🦱 🧑‍🦱 🧑🏻‍🦱 🧑🏼‍🦱 🧑🏽‍🦱 🧑🏾‍🦱 🧑🏿‍🦱 👩‍🦳 👩🏻‍🦳 👩🏼‍🦳 👩🏽‍🦳 👩🏾‍🦳 👩🏿‍🦳 🧑‍🦳 🧑🏻‍🦳 🧑🏼‍🦳 🧑🏽‍🦳 🧑🏾‍🦳 🧑🏿‍🦳 👩‍🦲 👩🏻‍🦲 👩🏼‍🦲 👩🏽‍🦲 👩🏾‍🦲 👩🏿‍🦲 🧑‍🦲 🧑🏻‍🦲 🧑🏼‍🦲 🧑🏽‍🦲 🧑🏾‍🦲 🧑🏿‍🦲 👱‍♀️ 👱🏻‍♀️ 👱🏼‍♀️ 👱🏽‍♀️ 👱🏾‍♀️ 👱🏿‍♀️ 👱‍♂️ 👱🏻‍♂️ 👱🏼‍♂️ 👱🏽‍♂️ 👱🏾‍♂️ 👱🏿‍♂️ 🙍‍♂️ 🙍🏻‍♂️ 🙍🏼‍♂️ 🙍🏽‍♂️ 🙍🏾‍♂️ 🙍🏿‍♂️ 🙍‍♀️ 🙍🏻‍♀️ 🙍🏼‍♀️ 🙍🏽‍♀️ 🙍🏾‍♀️ 🙍🏿‍♀️ 🙎‍♂️ 🙎🏻‍♂️ 🙎🏼‍♂️ 🙎🏽‍♂️ 🙎🏾‍♂️ 🙎🏿‍♂️ 🙎‍♀️ 🙎🏻‍♀️ 🙎🏼‍♀️ 🙎🏽‍♀️ 🙎🏾‍♀️ 🙎🏿‍♀️ 🙅‍♂️ 🙅🏻‍♂️ 🙅🏼‍♂️ 🙅🏽‍♂️ 🙅🏾‍♂️ 🙅🏿‍♂️ 🙅‍♀️ 🙅🏻‍♀️ 🙅🏼‍♀️ 🙅🏽‍♀️ 🙅🏾‍♀️ 🙅🏿‍♀️ 🙆‍♂️ 🙆🏻‍♂️ 🙆🏼‍♂️ 🙆🏽‍♂️ 🙆🏾‍♂️ 🙆🏿‍♂️ 🙆‍♀️ 🙆🏻‍♀️ 🙆🏼‍♀️ 🙆🏽‍♀️ 🙆🏾‍♀️ 🙆🏿‍♀️ 💁‍♂️ 💁🏻‍♂️ 💁🏼‍♂️ 💁🏽‍♂️ 💁🏾‍♂️ 💁🏿‍♂️ 💁‍♀️ 💁🏻‍♀️ 💁🏼‍♀️ 💁🏽‍♀️ 💁🏾‍♀️ 💁🏿‍♀️ 🙋‍♂️ 🙋🏻‍♂️ 🙋🏼‍♂️ 🙋🏽‍♂️ 🙋🏾‍♂️ 🙋🏿‍♂️ 🙋‍♀️ 🙋🏻‍♀️ 🙋🏼‍♀️ 🙋🏽‍♀️ 🙋🏾‍♀️ 🙋🏿‍♀️ 🧏‍♂️ 🧏🏻‍♂️ 🧏🏼‍♂️ 🧏🏽‍♂️ 🧏🏾‍♂️ 🧏🏿‍♂️ 🧏‍♀️ 🧏🏻‍♀️ 🧏🏼‍♀️ 🧏🏽‍♀️ 🧏🏾‍♀️ 🧏🏿‍♀️ 🙇‍♂️ 🙇🏻‍♂️ 🙇🏼‍♂️ 🙇🏽‍♂️ 🙇🏾‍♂️ 🙇🏿‍♂️ 🙇‍♀️ 🙇🏻‍♀️ 🙇🏼‍♀️ 🙇🏽‍♀️ 🙇🏾‍♀️ 🙇🏿‍♀️ 🤦‍♂️ 🤦🏻‍♂️ 🤦🏼‍♂️ 🤦🏽‍♂️ 🤦🏾‍♂️ 🤦🏿‍♂️ 🤦‍♀️ 🤦🏻‍♀️ 🤦🏼‍♀️ 🤦🏽‍♀️ 🤦🏾‍♀️ 🤦🏿‍♀️ 🤷‍♂️ 🤷🏻‍♂️ 🤷🏼‍♂️ 🤷🏽‍♂️ 🤷🏾‍♂️ 🤷🏿‍♂️ 🤷‍♀️ 🤷🏻‍♀️ 🤷🏼‍♀️ 🤷🏽‍♀️ 🤷🏾‍♀️ 🤷🏿‍♀️ 🧑‍⚕️ 🧑🏻‍⚕️ 🧑🏼‍⚕️ 🧑🏽‍⚕️ 🧑🏾‍⚕️ 🧑🏿‍⚕️ 👨‍⚕️ 👨🏻‍⚕️ 👨🏼‍⚕️ 👨🏽‍⚕️ 👨🏾‍⚕️ 👨🏿‍⚕️ 👩‍⚕️ 👩🏻‍⚕️ 👩🏼‍⚕️ 👩🏽‍⚕️ 👩🏾‍⚕️ 👩🏿‍⚕️ 🧑‍🎓 🧑🏻‍🎓 🧑🏼‍🎓 🧑🏽‍🎓 🧑🏾‍🎓 🧑🏿‍🎓 👨‍🎓 👨🏻‍🎓 👨🏼‍🎓 👨🏽‍🎓 👨🏾‍🎓 👨🏿‍🎓 👩‍🎓 👩🏻‍🎓 👩🏼‍🎓 👩🏽‍🎓 👩🏾‍🎓 👩🏿‍🎓 🧑‍🏫 🧑🏻‍🏫 🧑🏼‍🏫 🧑🏽‍🏫 🧑🏾‍🏫 🧑🏿‍🏫 👨‍🏫 👨🏻‍🏫 👨🏼‍🏫 👨🏽‍🏫 👨🏾‍🏫 👨🏿‍🏫 👩‍🏫 👩🏻‍🏫 👩🏼‍🏫 👩🏽‍🏫 👩🏾‍🏫 👩🏿‍🏫 🧑‍⚖️ 🧑🏻‍⚖️ 🧑🏼‍⚖️ 🧑🏽‍⚖️ 🧑🏾‍⚖️ 🧑🏿‍⚖️ 👨‍⚖️ 👨🏻‍⚖️ 👨🏼‍⚖️ 👨🏽‍⚖️ 👨🏾‍⚖️ 👨🏿‍⚖️ 👩‍⚖️ 👩🏻‍⚖️ 👩🏼‍⚖️ 👩🏽‍⚖️ 👩🏾‍⚖️ 👩🏿‍⚖️ 🧑‍🌾 🧑🏻‍🌾 🧑🏼‍🌾 🧑🏽‍🌾 🧑🏾‍🌾 🧑🏿‍🌾 👨‍🌾 👨🏻‍🌾 👨🏼‍🌾 👨🏽‍🌾 👨🏾‍🌾 👨🏿‍🌾 👩‍🌾 👩🏻‍🌾 👩🏼‍🌾 👩🏽‍🌾 👩🏾‍🌾 👩🏿‍🌾 🧑‍🍳 🧑🏻‍🍳 🧑🏼‍🍳 🧑🏽‍🍳 🧑🏾‍🍳 🧑🏿‍🍳 👨‍🍳 👨🏻‍🍳 👨🏼‍🍳 👨🏽‍🍳 👨🏾‍🍳 👨🏿‍🍳 👩‍🍳 👩🏻‍🍳 👩🏼‍🍳 👩🏽‍🍳 👩🏾‍🍳 👩🏿‍🍳 🧑‍🔧 🧑🏻‍🔧 🧑🏼‍🔧 🧑🏽‍🔧 🧑🏾‍🔧 🧑🏿‍🔧 👨‍🔧 👨🏻‍🔧 👨🏼‍🔧 👨🏽‍🔧 👨🏾‍🔧 👨🏿‍🔧 👩‍🔧 👩🏻‍🔧 👩🏼‍🔧 👩🏽‍🔧 👩🏾‍🔧 👩🏿‍🔧 🧑‍🏭 🧑🏻‍🏭 🧑🏼‍🏭 🧑🏽‍🏭 🧑🏾‍🏭 🧑🏿‍🏭 👨‍🏭 👨🏻‍🏭 👨🏼‍🏭 👨🏽‍🏭 👨🏾‍🏭 👨🏿‍🏭 👩‍🏭 👩🏻‍🏭 👩🏼‍🏭 👩🏽‍🏭 👩🏾‍🏭 👩🏿‍🏭 🧑‍💼 🧑🏻‍💼 🧑🏼‍💼 🧑🏽‍💼 🧑🏾‍💼 🧑🏿‍💼 👨‍💼 👨🏻‍💼 👨🏼‍💼 👨🏽‍💼 👨🏾‍💼 👨🏿‍💼 👩‍💼 👩🏻‍💼 👩🏼‍💼 👩🏽‍💼 👩🏾‍💼 👩🏿‍💼 🧑‍🔬 🧑🏻‍🔬 🧑🏼‍🔬 🧑🏽‍🔬 🧑🏾‍🔬 🧑🏿‍🔬 👨‍🔬 👨🏻‍🔬 👨🏼‍🔬 👨🏽‍🔬 👨🏾‍🔬 👨🏿‍🔬 👩‍🔬 👩🏻‍🔬 👩🏼‍🔬 👩🏽‍🔬 👩🏾‍🔬 👩🏿‍🔬 🧑‍💻 🧑🏻‍💻 🧑🏼‍💻 🧑🏽‍💻 🧑🏾‍💻 🧑🏿‍💻 👨‍💻 👨🏻‍💻 👨🏼‍💻 👨🏽‍💻 👨🏾‍💻 👨🏿‍💻 👩‍💻 👩🏻‍💻 👩🏼‍💻 👩🏽‍💻 👩🏾‍💻 👩🏿‍💻 🧑‍🎤 🧑🏻‍🎤 🧑🏼‍🎤 🧑🏽‍🎤 🧑🏾‍🎤 🧑🏿‍🎤 👨‍🎤 👨🏻‍🎤 👨🏼‍🎤 👨🏽‍🎤 👨🏾‍🎤 👨🏿‍🎤 👩‍🎤 👩🏻‍🎤 👩🏼‍🎤 👩🏽‍🎤 👩🏾‍🎤 👩🏿‍🎤 🧑‍🎨 🧑🏻‍🎨 🧑🏼‍🎨 🧑🏽‍🎨 🧑🏾‍🎨 🧑🏿‍🎨 👨‍🎨 👨🏻‍🎨 👨🏼‍🎨 👨🏽‍🎨 👨🏾‍🎨 👨🏿‍🎨 👩‍🎨 👩🏻‍🎨 👩🏼‍🎨 👩🏽‍🎨 👩🏾‍🎨 👩🏿‍🎨 🧑‍✈️ 🧑🏻‍✈️ 🧑🏼‍✈️ 🧑🏽‍✈️ 🧑🏾‍✈️ 🧑🏿‍✈️ 👨‍✈️ 👨🏻‍✈️ 👨🏼‍✈️ 👨🏽‍✈️ 👨🏾‍✈️ 👨🏿‍✈️ 👩‍✈️ 👩🏻‍✈️ 👩🏼‍✈️ 👩🏽‍✈️ 👩🏾‍✈️ 👩🏿‍✈️ 🧑‍🚀 🧑🏻‍🚀 🧑🏼‍🚀 🧑🏽‍🚀 🧑🏾‍🚀 🧑🏿‍🚀 👨‍🚀 👨🏻‍🚀 👨🏼‍🚀 👨🏽‍🚀 👨🏾‍🚀 👨🏿‍🚀 👩‍🚀 👩🏻‍🚀 👩🏼‍🚀 👩🏽‍🚀 👩🏾‍🚀 👩🏿‍🚀 🧑‍🚒 🧑🏻‍🚒 🧑🏼‍🚒 🧑🏽‍🚒 🧑🏾‍🚒 🧑🏿‍🚒 👨‍🚒 👨🏻‍🚒 👨🏼‍🚒 👨🏽‍🚒 👨🏾‍🚒 👨🏿‍🚒 👩‍🚒 👩🏻‍🚒 👩🏼‍🚒 👩🏽‍🚒 👩🏾‍🚒 👩🏿‍🚒 👮‍♂️ 👮🏻‍♂️ 👮🏼‍♂️ 👮🏽‍♂️ 👮🏾‍♂️ 👮🏿‍♂️ 👮‍♀️ 👮🏻‍♀️ 👮🏼‍♀️ 👮🏽‍♀️ 👮🏾‍♀️ 👮🏿‍♀️ 🕵️‍♂️ 🕵🏻‍♂️ 🕵🏼‍♂️ 🕵🏽‍♂️ 🕵🏾‍♂️ 🕵🏿‍♂️ 🕵️‍♀️ 🕵🏻‍♀️ 🕵🏼‍♀️ 🕵🏽‍♀️ 🕵🏾‍♀️ 🕵🏿‍♀️ 💂‍♂️ 💂🏻‍♂️ 💂🏼‍♂️ 💂🏽‍♂️ 💂🏾‍♂️ 💂🏿‍♂️ 💂‍♀️ 💂🏻‍♀️ 💂🏼‍♀️ 💂🏽‍♀️ 💂🏾‍♀️ 💂🏿‍♀️ 👷‍♂️ 👷🏻‍♂️ 👷🏼‍♂️ 👷🏽‍♂️ 👷🏾‍♂️ 👷🏿‍♂️ 👷‍♀️ 👷🏻‍♀️ 👷🏼‍♀️ 👷🏽‍♀️ 👷🏾‍♀️ 👷🏿‍♀️ 👳‍♂️ 👳🏻‍♂️ 👳🏼‍♂️ 👳🏽‍♂️ 👳🏾‍♂️ 👳🏿‍♂️ 👳‍♀️ 👳🏻‍♀️ 👳🏼‍♀️ 👳🏽‍♀️ 👳🏾‍♀️ 👳🏿‍♀️ 🤵‍♂️ 🤵🏻‍♂️ 🤵🏼‍♂️ 🤵🏽‍♂️ 🤵🏾‍♂️ 🤵🏿‍♂️ 🤵‍♀️ 🤵🏻‍♀️ 🤵🏼‍♀️ 🤵🏽‍♀️ 🤵🏾‍♀️ 🤵🏿‍♀️ 👰‍♂️ 👰🏻‍♂️ 👰🏼‍♂️ 👰🏽‍♂️ 👰🏾‍♂️ 👰🏿‍♂️ 👰‍♀️ 👰🏻‍♀️ 👰🏼‍♀️ 👰🏽‍♀️ 👰🏾‍♀️ 👰🏿‍♀️ 👩‍🍼 👩🏻‍🍼 👩🏼‍🍼 👩🏽‍🍼 👩🏾‍🍼 👩🏿‍🍼 👨‍🍼 👨🏻‍🍼 👨🏼‍🍼 👨🏽‍🍼 👨🏾‍🍼 👨🏿‍🍼 🧑‍🍼 🧑🏻‍🍼 🧑🏼‍🍼 🧑🏽‍🍼 🧑🏾‍🍼 🧑🏿‍🍼 🧑‍🎄 🧑🏻‍🎄 🧑🏼‍🎄 🧑🏽‍🎄 🧑🏾‍🎄 🧑🏿‍🎄 🦸‍♂️ 🦸🏻‍♂️ 🦸🏼‍♂️ 🦸🏽‍♂️ 🦸🏾‍♂️ 🦸🏿‍♂️ 🦸‍♀️ 🦸🏻‍♀️ 🦸🏼‍♀️ 🦸🏽‍♀️ 🦸🏾‍♀️ 🦸🏿‍♀️ 🦹‍♂️ 🦹🏻‍♂️ 🦹🏼‍♂️ 🦹🏽‍♂️ 🦹🏾‍♂️ 🦹🏿‍♂️ 🦹‍♀️ 🦹🏻‍♀️ 🦹🏼‍♀️ 🦹🏽‍♀️ 🦹🏾‍♀️ 🦹🏿‍♀️ 🧙‍♂️ 🧙🏻‍♂️ 🧙🏼‍♂️ 🧙🏽‍♂️ 🧙🏾‍♂️ 🧙🏿‍♂️ 🧙‍♀️ 🧙🏻‍♀️ 🧙🏼‍♀️ 🧙🏽‍♀️ 🧙🏾‍♀️ 🧙🏿‍♀️ 🧚‍♂️ 🧚🏻‍♂️ 🧚🏼‍♂️ 🧚🏽‍♂️ 🧚🏾‍♂️ 🧚🏿‍♂️ 🧚‍♀️ 🧚🏻‍♀️ 🧚🏼‍♀️ 🧚🏽‍♀️ 🧚🏾‍♀️ 🧚🏿‍♀️ 🧛‍♂️ 🧛🏻‍♂️ 🧛🏼‍♂️ 🧛🏽‍♂️ 🧛🏾‍♂️ 🧛🏿‍♂️ 🧛‍♀️ 🧛🏻‍♀️ 🧛🏼‍♀️ 🧛🏽‍♀️ 🧛🏾‍♀️ 🧛🏿‍♀️ 🧜‍♂️ 🧜🏻‍♂️ 🧜🏼‍♂️ 🧜🏽‍♂️ 🧜🏾‍♂️ 🧜🏿‍♂️ 🧜‍♀️ 🧜🏻‍♀️ 🧜🏼‍♀️ 🧜🏽‍♀️ 🧜🏾‍♀️ 🧜🏿‍♀️ 🧝‍♂️ 🧝🏻‍♂️ 🧝🏼‍♂️ 🧝🏽‍♂️ 🧝🏾‍♂️ 🧝🏿‍♂️ 🧝‍♀️ 🧝🏻‍♀️ 🧝🏼‍♀️ 🧝🏽‍♀️ 🧝🏾‍♀️ 🧝🏿‍♀️ 🧞‍♂️ 🧞‍♀️ 🧟‍♂️ 🧟‍♀️ 💆‍♂️ 💆🏻‍♂️ 💆🏼‍♂️ 💆🏽‍♂️ 💆🏾‍♂️ 💆🏿‍♂️ 💆‍♀️ 💆🏻‍♀️ 💆🏼‍♀️ 💆🏽‍♀️ 💆🏾‍♀️ 💆🏿‍♀️ 💇‍♂️ 💇🏻‍♂️ 💇🏼‍♂️ 💇🏽‍♂️ 💇🏾‍♂️ 💇🏿‍♂️ 💇‍♀️ 💇🏻‍♀️ 💇🏼‍♀️ 💇🏽‍♀️ 💇🏾‍♀️ 💇🏿‍♀️ 🚶‍♂️ 🚶🏻‍♂️ 🚶🏼‍♂️ 🚶🏽‍♂️ 🚶🏾‍♂️ 🚶🏿‍♂️ 🚶‍♀️ 🚶🏻‍♀️ 🚶🏼‍♀️ 🚶🏽‍♀️ 🚶🏾‍♀️ 🚶🏿‍♀️ 🧍‍♂️ 🧍🏻‍♂️ 🧍🏼‍♂️ 🧍🏽‍♂️ 🧍🏾‍♂️ 🧍🏿‍♂️ 🧍‍♀️ 🧍🏻‍♀️ 🧍🏼‍♀️ 🧍🏽‍♀️ 🧍🏾‍♀️ 🧍🏿‍♀️ 🧎‍♂️ 🧎🏻‍♂️ 🧎🏼‍♂️ 🧎🏽‍♂️ 🧎🏾‍♂️ 🧎🏿‍♂️ 🧎‍♀️ 🧎🏻‍♀️ 🧎🏼‍♀️ 🧎🏽‍♀️ 🧎🏾‍♀️ 🧎🏿‍♀️ 🧑‍🦯 🧑🏻‍🦯 🧑🏼‍🦯 🧑🏽‍🦯 🧑🏾‍🦯 🧑🏿‍🦯 👨‍🦯 👨🏻‍🦯 👨🏼‍🦯 👨🏽‍🦯 👨🏾‍🦯 👨🏿‍🦯 👩‍🦯 👩🏻‍🦯 👩🏼‍🦯 👩🏽‍🦯 👩🏾‍🦯 👩🏿‍🦯 🧑‍🦼 🧑🏻‍🦼 🧑🏼‍🦼 🧑🏽‍🦼 🧑🏾‍🦼 🧑🏿‍🦼 👨‍🦼 👨🏻‍🦼 👨🏼‍🦼 👨🏽‍🦼 👨🏾‍🦼 👨🏿‍🦼 👩‍🦼 👩🏻‍🦼 👩🏼‍🦼 👩🏽‍🦼 👩🏾‍🦼 👩🏿‍🦼 🧑‍🦽 🧑🏻‍🦽 🧑🏼‍🦽 🧑🏽‍🦽 🧑🏾‍🦽 🧑🏿‍🦽 👨‍🦽 👨🏻‍🦽 👨🏼‍🦽 👨🏽‍🦽 👨🏾‍🦽 👨🏿‍🦽 👩‍🦽 👩🏻‍🦽 👩🏼‍🦽 👩🏽‍🦽 👩🏾‍🦽 👩🏿‍🦽 🏃‍♂️ 🏃🏻‍♂️ 🏃🏼‍♂️ 🏃🏽‍♂️ 🏃🏾‍♂️ 🏃🏿‍♂️ 🏃‍♀️ 🏃🏻‍♀️ 🏃🏼‍♀️ 🏃🏽‍♀️ 🏃🏾‍♀️ 🏃🏿‍♀️ 👯‍♂️ 👯‍♀️ 🧖‍♂️ 🧖🏻‍♂️ 🧖🏼‍♂️ 🧖🏽‍♂️ 🧖🏾‍♂️ 🧖🏿‍♂️ 🧖‍♀️ 🧖🏻‍♀️ 🧖🏼‍♀️ 🧖🏽‍♀️ 🧖🏾‍♀️ 🧖🏿‍♀️ 🧗‍♂️ 🧗🏻‍♂️ 🧗🏼‍♂️ 🧗🏽‍♂️ 🧗🏾‍♂️ 🧗🏿‍♂️ 🧗‍♀️ 🧗🏻‍♀️ 🧗🏼‍♀️ 🧗🏽‍♀️ 🧗🏾‍♀️ 🧗🏿‍♀️ 🏌️‍♂️ 🏌🏻‍♂️ 🏌🏼‍♂️ 🏌🏽‍♂️ 🏌🏾‍♂️ 🏌🏿‍♂️ 🏌️‍♀️ 🏌🏻‍♀️ 🏌🏼‍♀️ 🏌🏽‍♀️ 🏌🏾‍♀️ 🏌🏿‍♀️ 🏄‍♂️ 🏄🏻‍♂️ 🏄🏼‍♂️ 🏄🏽‍♂️ 🏄🏾‍♂️ 🏄🏿‍♂️ 🏄‍♀️ 🏄🏻‍♀️ 🏄🏼‍♀️ 🏄🏽‍♀️ 🏄🏾‍♀️ 🏄🏿‍♀️ 🚣‍♂️ 🚣🏻‍♂️ 🚣🏼‍♂️ 🚣🏽‍♂️ 🚣🏾‍♂️ 🚣🏿‍♂️ 🚣‍♀️ 🚣🏻‍♀️ 🚣🏼‍♀️ 🚣🏽‍♀️ 🚣🏾‍♀️ 🚣🏿‍♀️ 🏊‍♂️ 🏊🏻‍♂️ 🏊🏼‍♂️ 🏊🏽‍♂️ 🏊🏾‍♂️ 🏊🏿‍♂️ 🏊‍♀️ 🏊🏻‍♀️ 🏊🏼‍♀️ 🏊🏽‍♀️ 🏊🏾‍♀️ 🏊🏿‍♀️ ⛹️‍♂️ ⛹🏻‍♂️ ⛹🏼‍♂️ ⛹🏽‍♂️ ⛹🏾‍♂️ ⛹🏿‍♂️ ⛹️‍♀️ ⛹🏻‍♀️ ⛹🏼‍♀️ ⛹🏽‍♀️ ⛹🏾‍♀️ ⛹🏿‍♀️ 🏋️‍♂️ 🏋🏻‍♂️ 🏋🏼‍♂️ 🏋🏽‍♂️ 🏋🏾‍♂️ 🏋🏿‍♂️ 🏋️‍♀️ 🏋🏻‍♀️ 🏋🏼‍♀️ 🏋🏽‍♀️ 🏋🏾‍♀️ 🏋🏿‍♀️ 🚴‍♂️ 🚴🏻‍♂️ 🚴🏼‍♂️ 🚴🏽‍♂️ 🚴🏾‍♂️ 🚴🏿‍♂️ 🚴‍♀️ 🚴🏻‍♀️ 🚴🏼‍♀️ 🚴🏽‍♀️ 🚴🏾‍♀️ 🚴🏿‍♀️ 🚵‍♂️ 🚵🏻‍♂️ 🚵🏼‍♂️ 🚵🏽‍♂️ 🚵🏾‍♂️ 🚵🏿‍♂️ 🚵‍♀️ 🚵🏻‍♀️ 🚵🏼‍♀️ 🚵🏽‍♀️ 🚵🏾‍♀️ 🚵🏿‍♀️ 🤸‍♂️ 🤸🏻‍♂️ 🤸🏼‍♂️ 🤸🏽‍♂️ 🤸🏾‍♂️ 🤸🏿‍♂️ 🤸‍♀️ 🤸🏻‍♀️ 🤸🏼‍♀️ 🤸🏽‍♀️ 🤸🏾‍♀️ 🤸🏿‍♀️ 🤼‍♂️ 🤼‍♀️ 🤽‍♂️ 🤽🏻‍♂️ 🤽🏼‍♂️ 🤽🏽‍♂️ 🤽🏾‍♂️ 🤽🏿‍♂️ 🤽‍♀️ 🤽🏻‍♀️ 🤽🏼‍♀️ 🤽🏽‍♀️ 🤽🏾‍♀️ 🤽🏿‍♀️ 🤾‍♂️ 🤾🏻‍♂️ 🤾🏼‍♂️ 🤾🏽‍♂️ 🤾🏾‍♂️ 🤾🏿‍♂️ 🤾‍♀️ 🤾🏻‍♀️ 🤾🏼‍♀️ 🤾🏽‍♀️ 🤾🏾‍♀️ 🤾🏿‍♀️ 🤹‍♂️ 🤹🏻‍♂️ 🤹🏼‍♂️ 🤹🏽‍♂️ 🤹🏾‍♂️ 🤹🏿‍♂️ 🤹‍♀️ 🤹🏻‍♀️ 🤹🏼‍♀️ 🤹🏽‍♀️ 🤹🏾‍♀️ 🤹🏿‍♀️ 🧘‍♂️ 🧘🏻‍♂️ 🧘🏼‍♂️ 🧘🏽‍♂️ 🧘🏾‍♂️ 🧘🏿‍♂️ 🧘‍♀️ 🧘🏻‍♀️ 🧘🏼‍♀️ 🧘🏽‍♀️ 🧘🏾‍♀️ 🧘🏿‍♀️ 🧑‍🤝‍🧑 🧑🏻‍🤝‍🧑🏻 🧑🏻‍🤝‍🧑🏼 🧑🏻‍🤝‍🧑🏽 🧑🏻‍🤝‍🧑🏾 🧑🏻‍🤝‍🧑🏿 🧑🏼‍🤝‍🧑🏻 🧑🏼‍🤝‍🧑🏼 🧑🏼‍🤝‍🧑🏽 🧑🏼‍🤝‍🧑🏾 🧑🏼‍🤝‍🧑🏿 🧑🏽‍🤝‍🧑🏻 🧑🏽‍🤝‍🧑🏼 🧑🏽‍🤝‍🧑🏽 🧑🏽‍🤝‍🧑🏾 🧑🏽‍🤝‍🧑🏿 🧑🏾‍🤝‍🧑🏻 🧑🏾‍🤝‍🧑🏼 🧑🏾‍🤝‍🧑🏽 🧑🏾‍🤝‍🧑🏾 🧑🏾‍🤝‍🧑🏿 🧑🏿‍🤝‍🧑🏻 🧑🏿‍🤝‍🧑🏼 🧑🏿‍🤝‍🧑🏽 🧑🏿‍🤝‍🧑🏾 🧑🏿‍🤝‍🧑🏿 👩🏻‍🤝‍👩🏼 👩🏻‍🤝‍👩🏽 👩🏻‍🤝‍👩🏾 👩🏻‍🤝‍👩🏿 👩🏼‍🤝‍👩🏻 👩🏼‍🤝‍👩🏽 👩🏼‍🤝‍👩🏾 👩🏼‍🤝‍👩🏿 👩🏽‍🤝‍👩🏻 👩🏽‍🤝‍👩🏼 👩🏽‍🤝‍👩🏾 👩🏽‍🤝‍👩🏿 👩🏾‍🤝‍👩🏻 👩🏾‍🤝‍👩🏼 👩🏾‍🤝‍👩🏽 👩🏾‍🤝‍👩🏿 👩🏿‍🤝‍👩🏻 👩🏿‍🤝‍👩🏼 👩🏿‍🤝‍👩🏽 👩🏿‍🤝‍👩🏾 👩🏻‍🤝‍👨🏼 👩🏻‍🤝‍👨🏽 👩🏻‍🤝‍👨🏾 👩🏻‍🤝‍👨🏿 👩🏼‍🤝‍👨🏻 👩🏼‍🤝‍👨🏽 👩🏼‍🤝‍👨🏾 👩🏼‍🤝‍👨🏿 👩🏽‍🤝‍👨🏻 👩🏽‍🤝‍👨🏼 👩🏽‍🤝‍👨🏾 👩🏽‍🤝‍👨🏿 👩🏾‍🤝‍👨🏻 👩🏾‍🤝‍👨🏼 👩🏾‍🤝‍👨🏽 👩🏾‍🤝‍👨🏿 👩🏿‍🤝‍👨🏻 👩🏿‍🤝‍👨🏼 👩🏿‍🤝‍👨🏽 👩🏿‍🤝‍👨🏾 👨🏻‍🤝‍👨🏼 👨🏻‍🤝‍👨🏽 👨🏻‍🤝‍👨🏾 👨🏻‍🤝‍👨🏿 👨🏼‍🤝‍👨🏻 👨🏼‍🤝‍👨🏽 👨🏼‍🤝‍👨🏾 👨🏼‍🤝‍👨🏿 👨🏽‍🤝‍👨🏻 👨🏽‍🤝‍👨🏼 👨🏽‍🤝‍👨🏾 👨🏽‍🤝‍👨🏿 👨🏾‍🤝‍👨🏻 👨🏾‍🤝‍👨🏼 👨🏾‍🤝‍👨🏽 👨🏾‍🤝‍👨🏿 👨🏿‍🤝‍👨🏻 👨🏿‍🤝‍👨🏼 👨🏿‍🤝‍👨🏽 👨🏿‍🤝‍👨🏾 💏 🧑🏻‍❤️‍💋‍🧑🏼 🧑🏻‍❤️‍💋‍🧑🏽 🧑🏻‍❤️‍💋‍🧑🏾 🧑🏻‍❤️‍💋‍🧑🏿 🧑🏼‍❤️‍💋‍🧑🏻 🧑🏼‍❤️‍💋‍🧑🏽 🧑🏼‍❤️‍💋‍🧑🏾 🧑🏼‍❤️‍💋‍🧑🏿 🧑🏽‍❤️‍💋‍🧑🏻 🧑🏽‍❤️‍💋‍🧑🏼 🧑🏽‍❤️‍💋‍🧑🏾 🧑🏽‍❤️‍💋‍🧑🏿 🧑🏾‍❤️‍💋‍🧑🏻 🧑🏾‍❤️‍💋‍🧑🏼 🧑🏾‍❤️‍💋‍🧑🏽 🧑🏾‍❤️‍💋‍🧑🏿 🧑🏿‍❤️‍💋‍🧑🏻 🧑🏿‍❤️‍💋‍🧑🏼 🧑🏿‍❤️‍💋‍🧑🏽 🧑🏿‍❤️‍💋‍🧑🏾 👩‍❤️‍💋‍👨 👩🏻‍❤️‍💋‍👨🏻 👩🏻‍❤️‍💋‍👨🏼 👩🏻‍❤️‍💋‍👨🏽 👩🏻‍❤️‍💋‍👨🏾 👩🏻‍❤️‍💋‍👨🏿 👩🏼‍❤️‍💋‍👨🏻 👩🏼‍❤️‍💋‍👨🏼 👩🏼‍❤️‍💋‍👨🏽 👩🏼‍❤️‍💋‍👨🏾 👩🏼‍❤️‍💋‍👨🏿 👩🏽‍❤️‍💋‍👨🏻 👩🏽‍❤️‍💋‍👨🏼 👩🏽‍❤️‍💋‍👨🏽 👩🏽‍❤️‍💋‍👨🏾 👩🏽‍❤️‍💋‍👨🏿 👩🏾‍❤️‍💋‍👨🏻 👩🏾‍❤️‍💋‍👨🏼 👩🏾‍❤️‍💋‍👨🏽 👩🏾‍❤️‍💋‍👨🏾 👩🏾‍❤️‍💋‍👨🏿 👩🏿‍❤️‍💋‍👨🏻 👩🏿‍❤️‍💋‍👨🏼 👩🏿‍❤️‍💋‍👨🏽 👩🏿‍❤️‍💋‍👨🏾 👩🏿‍❤️‍💋‍👨🏿 👨‍❤️‍💋‍👨 👨🏻‍❤️‍💋‍👨🏻 👨🏻‍❤️‍💋‍👨🏼 👨🏻‍❤️‍💋‍👨🏽 👨🏻‍❤️‍💋‍👨🏾 👨🏻‍❤️‍💋‍👨🏿 👨🏼‍❤️‍💋‍👨🏻 👨🏼‍❤️‍💋‍👨🏼 👨🏼‍❤️‍💋‍👨🏽 👨🏼‍❤️‍💋‍👨🏾 👨🏼‍❤️‍💋‍👨🏿 👨🏽‍❤️‍💋‍👨🏻 👨🏽‍❤️‍💋‍👨🏼 👨🏽‍❤️‍💋‍👨🏽 👨🏽‍❤️‍💋‍👨🏾 👨🏽‍❤️‍💋‍👨🏿 👨🏾‍❤️‍💋‍👨🏻 👨🏾‍❤️‍💋‍👨🏼 👨🏾‍❤️‍💋‍👨🏽 👨🏾‍❤️‍💋‍👨🏾 👨🏾‍❤️‍💋‍👨🏿 👨🏿‍❤️‍💋‍👨🏻 👨🏿‍❤️‍💋‍👨🏼 👨🏿‍❤️‍💋‍👨🏽 👨🏿‍❤️‍💋‍👨🏾 👨🏿‍❤️‍💋‍👨🏿 👩‍❤️‍💋‍👩 👩🏻‍❤️‍💋‍👩🏻 👩🏻‍❤️‍💋‍👩🏼 👩🏻‍❤️‍💋‍👩🏽 👩🏻‍❤️‍💋‍👩🏾 👩🏻‍❤️‍💋‍👩🏿 👩🏼‍❤️‍💋‍👩🏻 👩🏼‍❤️‍💋‍👩🏼 👩🏼‍❤️‍💋‍👩🏽 👩🏼‍❤️‍💋‍👩🏾 👩🏼‍❤️‍💋‍👩🏿 👩🏽‍❤️‍💋‍👩🏻 👩🏽‍❤️‍💋‍👩🏼 👩🏽‍❤️‍💋‍👩🏽 👩🏽‍❤️‍💋‍👩🏾 👩🏽‍❤️‍💋‍👩🏿 👩🏾‍❤️‍💋‍👩🏻 👩🏾‍❤️‍💋‍👩🏼 👩🏾‍❤️‍💋‍👩🏽 👩🏾‍❤️‍💋‍👩🏾 👩🏾‍❤️‍💋‍👩🏿 👩🏿‍❤️‍💋‍👩🏻 👩🏿‍❤️‍💋‍👩🏼 👩🏿‍❤️‍💋‍👩🏽 👩🏿‍❤️‍💋‍👩🏾 👩🏿‍❤️‍💋‍👩🏿 💑 🧑🏻‍❤️‍🧑🏼 🧑🏻‍❤️‍🧑🏽 🧑🏻‍❤️‍🧑🏾 🧑🏻‍❤️‍🧑🏿 🧑🏼‍❤️‍🧑🏻 🧑🏼‍❤️‍🧑🏽 🧑🏼‍❤️‍🧑🏾 🧑🏼‍❤️‍🧑🏿 🧑🏽‍❤️‍🧑🏻 🧑🏽‍❤️‍🧑🏼 🧑🏽‍❤️‍🧑🏾 🧑🏽‍❤️‍🧑🏿 🧑🏾‍❤️‍🧑🏻 🧑🏾‍❤️‍🧑🏼 🧑🏾‍❤️‍🧑🏽 🧑🏾‍❤️‍🧑🏿 🧑🏿‍❤️‍🧑🏻 🧑🏿‍❤️‍🧑🏼 🧑🏿‍❤️‍🧑🏽 🧑🏿‍❤️‍🧑🏾 👩‍❤️‍👨 👩🏻‍❤️‍👨🏻 👩🏻‍❤️‍👨🏼 👩🏻‍❤️‍👨🏽 👩🏻‍❤️‍👨🏾 👩🏻‍❤️‍👨🏿 👩🏼‍❤️‍👨🏻 👩🏼‍❤️‍👨🏼 👩🏼‍❤️‍👨🏽 👩🏼‍❤️‍👨🏾 👩🏼‍❤️‍👨🏿 👩🏽‍❤️‍👨🏻 👩🏽‍❤️‍👨🏼 👩🏽‍❤️‍👨🏽 👩🏽‍❤️‍👨🏾 👩🏽‍❤️‍👨🏿 👩🏾‍❤️‍👨🏻 👩🏾‍❤️‍👨🏼 👩🏾‍❤️‍👨🏽 👩🏾‍❤️‍👨🏾 👩🏾‍❤️‍👨🏿 👩🏿‍❤️‍👨🏻 👩🏿‍❤️‍👨🏼 👩🏿‍❤️‍👨🏽 👩🏿‍❤️‍👨🏾 👩🏿‍❤️‍👨🏿 👨‍❤️‍👨 👨🏻‍❤️‍👨🏻 👨🏻‍❤️‍👨🏼 👨🏻‍❤️‍👨🏽 👨🏻‍❤️‍👨🏾 👨🏻‍❤️‍👨🏿 👨🏼‍❤️‍👨🏻 👨🏼‍❤️‍👨🏼 👨🏼‍❤️‍👨🏽 👨🏼‍❤️‍👨🏾 👨🏼‍❤️‍👨🏿 👨🏽‍❤️‍👨🏻 👨🏽‍❤️‍👨🏼 👨🏽‍❤️‍👨🏽 👨🏽‍❤️‍👨🏾 👨🏽‍❤️‍👨🏿 👨🏾‍❤️‍👨🏻 👨🏾‍❤️‍👨🏼 👨🏾‍❤️‍👨🏽 👨🏾‍❤️‍👨🏾 👨🏾‍❤️‍👨🏿 👨🏿‍❤️‍👨🏻 👨🏿‍❤️‍👨🏼 👨🏿‍❤️‍👨🏽 👨🏿‍❤️‍👨🏾 👨🏿‍❤️‍👨🏿 👩‍❤️‍👩 👩🏻‍❤️‍👩🏻 👩🏻‍❤️‍👩🏼 👩🏻‍❤️‍👩🏽 👩🏻‍❤️‍👩🏾 👩🏻‍❤️‍👩🏿 👩🏼‍❤️‍👩🏻 👩🏼‍❤️‍👩🏼 👩🏼‍❤️‍👩🏽 👩🏼‍❤️‍👩🏾 👩🏼‍❤️‍👩🏿 👩🏽‍❤️‍👩🏻 👩🏽‍❤️‍👩🏼 👩🏽‍❤️‍👩🏽 👩🏽‍❤️‍👩🏾 👩🏽‍❤️‍👩🏿 👩🏾‍❤️‍👩🏻 👩🏾‍❤️‍👩🏼 👩🏾‍❤️‍👩🏽 👩🏾‍❤️‍👩🏾 👩🏾‍❤️‍👩🏿 👩🏿‍❤️‍👩🏻 👩🏿‍❤️‍👩🏼 👩🏿‍❤️‍👩🏽 👩🏿‍❤️‍👩🏾 👩🏿‍❤️‍👩🏿 👪 👨‍👩‍👦 👨‍👩‍👧 👨‍👩‍👧‍👦 👨‍👩‍👦‍👦 👨‍👩‍👧‍👧 👨‍👨‍👦 👨‍👨‍👧 👨‍👨‍👧‍👦 👨‍👨‍👦‍👦 👨‍👨‍👧‍👧 👩‍👩‍👦 👩‍👩‍👧 👩‍👩‍👧‍👦 👩‍👩‍👦‍👦 👩‍👩‍👧‍👧 👨‍👦 👨‍👦‍👦 👨‍👧 👨‍👧‍👦 👨‍👧‍👧 👩‍👦 👩‍👦‍👦 👩‍👧 👩‍👧‍👦 👩‍👧‍👧 🐕‍🦺 🐈‍⬛ 🐻‍❄️ 🐦‍⬛ 🏳️‍🌈 🏳️‍⚧️ 🏴‍☠️ </p>

<!--
Full reference: https://unicode.org/Public/emoji/15.0/
ZJW: zwidge https://unicode.org/emoji/charts/emoji-zwj-sequences.html
-->
`,title:"Emoji Composition",level:2,content:`## Emoji Composition

<p style="font-size: 65%; line-height: 1rem;"> 😶‍🌫️ 😮‍💨 😵‍💫 ❤️‍🔥 ❤️‍🩹 👁️‍🗨️ 🫱🏻‍🫲🏼 🫱🏻‍🫲🏽 🫱🏻‍🫲🏾 🫱🏻‍🫲🏿 🫱🏼‍🫲🏻 🫱🏼‍🫲🏽 🫱🏼‍🫲🏾 🫱🏼‍🫲🏿 🫱🏽‍🫲🏻 🫱🏽‍🫲🏼 🫱🏽‍🫲🏾 🫱🏽‍🫲🏿 🫱🏾‍🫲🏻 🫱🏾‍🫲🏼 🫱🏾‍🫲🏽 🫱🏾‍🫲🏿 🫱🏿‍🫲🏻 🫱🏿‍🫲🏼 🫱🏿‍🫲🏽 🫱🏿‍🫲🏾 🧔‍♂️ 🧔🏻‍♂️ 🧔🏼‍♂️ 🧔🏽‍♂️ 🧔🏾‍♂️ 🧔🏿‍♂️ 🧔‍♀️ 🧔🏻‍♀️ 🧔🏼‍♀️ 🧔🏽‍♀️ 🧔🏾‍♀️ 🧔🏿‍♀️ 👨‍🦰 👨🏻‍🦰 👨🏼‍🦰 👨🏽‍🦰 👨🏾‍🦰 👨🏿‍🦰 👨‍🦱 👨🏻‍🦱 👨🏼‍🦱 👨🏽‍🦱 👨🏾‍🦱 👨🏿‍🦱 👨‍🦳 👨🏻‍🦳 👨🏼‍🦳 👨🏽‍🦳 👨🏾‍🦳 👨🏿‍🦳 👨‍🦲 👨🏻‍🦲 👨🏼‍🦲 👨🏽‍🦲 👨🏾‍🦲 👨🏿‍🦲 👩‍🦰 👩🏻‍🦰 👩🏼‍🦰 👩🏽‍🦰 👩🏾‍🦰 👩🏿‍🦰 🧑‍🦰 🧑🏻‍🦰 🧑🏼‍🦰 🧑🏽‍🦰 🧑🏾‍🦰 🧑🏿‍🦰 👩‍🦱 👩🏻‍🦱 👩🏼‍🦱 👩🏽‍🦱 👩🏾‍🦱 👩🏿‍🦱 🧑‍🦱 🧑🏻‍🦱 🧑🏼‍🦱 🧑🏽‍🦱 🧑🏾‍🦱 🧑🏿‍🦱 👩‍🦳 👩🏻‍🦳 👩🏼‍🦳 👩🏽‍🦳 👩🏾‍🦳 👩🏿‍🦳 🧑‍🦳 🧑🏻‍🦳 🧑🏼‍🦳 🧑🏽‍🦳 🧑🏾‍🦳 🧑🏿‍🦳 👩‍🦲 👩🏻‍🦲 👩🏼‍🦲 👩🏽‍🦲 👩🏾‍🦲 👩🏿‍🦲 🧑‍🦲 🧑🏻‍🦲 🧑🏼‍🦲 🧑🏽‍🦲 🧑🏾‍🦲 🧑🏿‍🦲 👱‍♀️ 👱🏻‍♀️ 👱🏼‍♀️ 👱🏽‍♀️ 👱🏾‍♀️ 👱🏿‍♀️ 👱‍♂️ 👱🏻‍♂️ 👱🏼‍♂️ 👱🏽‍♂️ 👱🏾‍♂️ 👱🏿‍♂️ 🙍‍♂️ 🙍🏻‍♂️ 🙍🏼‍♂️ 🙍🏽‍♂️ 🙍🏾‍♂️ 🙍🏿‍♂️ 🙍‍♀️ 🙍🏻‍♀️ 🙍🏼‍♀️ 🙍🏽‍♀️ 🙍🏾‍♀️ 🙍🏿‍♀️ 🙎‍♂️ 🙎🏻‍♂️ 🙎🏼‍♂️ 🙎🏽‍♂️ 🙎🏾‍♂️ 🙎🏿‍♂️ 🙎‍♀️ 🙎🏻‍♀️ 🙎🏼‍♀️ 🙎🏽‍♀️ 🙎🏾‍♀️ 🙎🏿‍♀️ 🙅‍♂️ 🙅🏻‍♂️ 🙅🏼‍♂️ 🙅🏽‍♂️ 🙅🏾‍♂️ 🙅🏿‍♂️ 🙅‍♀️ 🙅🏻‍♀️ 🙅🏼‍♀️ 🙅🏽‍♀️ 🙅🏾‍♀️ 🙅🏿‍♀️ 🙆‍♂️ 🙆🏻‍♂️ 🙆🏼‍♂️ 🙆🏽‍♂️ 🙆🏾‍♂️ 🙆🏿‍♂️ 🙆‍♀️ 🙆🏻‍♀️ 🙆🏼‍♀️ 🙆🏽‍♀️ 🙆🏾‍♀️ 🙆🏿‍♀️ 💁‍♂️ 💁🏻‍♂️ 💁🏼‍♂️ 💁🏽‍♂️ 💁🏾‍♂️ 💁🏿‍♂️ 💁‍♀️ 💁🏻‍♀️ 💁🏼‍♀️ 💁🏽‍♀️ 💁🏾‍♀️ 💁🏿‍♀️ 🙋‍♂️ 🙋🏻‍♂️ 🙋🏼‍♂️ 🙋🏽‍♂️ 🙋🏾‍♂️ 🙋🏿‍♂️ 🙋‍♀️ 🙋🏻‍♀️ 🙋🏼‍♀️ 🙋🏽‍♀️ 🙋🏾‍♀️ 🙋🏿‍♀️ 🧏‍♂️ 🧏🏻‍♂️ 🧏🏼‍♂️ 🧏🏽‍♂️ 🧏🏾‍♂️ 🧏🏿‍♂️ 🧏‍♀️ 🧏🏻‍♀️ 🧏🏼‍♀️ 🧏🏽‍♀️ 🧏🏾‍♀️ 🧏🏿‍♀️ 🙇‍♂️ 🙇🏻‍♂️ 🙇🏼‍♂️ 🙇🏽‍♂️ 🙇🏾‍♂️ 🙇🏿‍♂️ 🙇‍♀️ 🙇🏻‍♀️ 🙇🏼‍♀️ 🙇🏽‍♀️ 🙇🏾‍♀️ 🙇🏿‍♀️ 🤦‍♂️ 🤦🏻‍♂️ 🤦🏼‍♂️ 🤦🏽‍♂️ 🤦🏾‍♂️ 🤦🏿‍♂️ 🤦‍♀️ 🤦🏻‍♀️ 🤦🏼‍♀️ 🤦🏽‍♀️ 🤦🏾‍♀️ 🤦🏿‍♀️ 🤷‍♂️ 🤷🏻‍♂️ 🤷🏼‍♂️ 🤷🏽‍♂️ 🤷🏾‍♂️ 🤷🏿‍♂️ 🤷‍♀️ 🤷🏻‍♀️ 🤷🏼‍♀️ 🤷🏽‍♀️ 🤷🏾‍♀️ 🤷🏿‍♀️ 🧑‍⚕️ 🧑🏻‍⚕️ 🧑🏼‍⚕️ 🧑🏽‍⚕️ 🧑🏾‍⚕️ 🧑🏿‍⚕️ 👨‍⚕️ 👨🏻‍⚕️ 👨🏼‍⚕️ 👨🏽‍⚕️ 👨🏾‍⚕️ 👨🏿‍⚕️ 👩‍⚕️ 👩🏻‍⚕️ 👩🏼‍⚕️ 👩🏽‍⚕️ 👩🏾‍⚕️ 👩🏿‍⚕️ 🧑‍🎓 🧑🏻‍🎓 🧑🏼‍🎓 🧑🏽‍🎓 🧑🏾‍🎓 🧑🏿‍🎓 👨‍🎓 👨🏻‍🎓 👨🏼‍🎓 👨🏽‍🎓 👨🏾‍🎓 👨🏿‍🎓 👩‍🎓 👩🏻‍🎓 👩🏼‍🎓 👩🏽‍🎓 👩🏾‍🎓 👩🏿‍🎓 🧑‍🏫 🧑🏻‍🏫 🧑🏼‍🏫 🧑🏽‍🏫 🧑🏾‍🏫 🧑🏿‍🏫 👨‍🏫 👨🏻‍🏫 👨🏼‍🏫 👨🏽‍🏫 👨🏾‍🏫 👨🏿‍🏫 👩‍🏫 👩🏻‍🏫 👩🏼‍🏫 👩🏽‍🏫 👩🏾‍🏫 👩🏿‍🏫 🧑‍⚖️ 🧑🏻‍⚖️ 🧑🏼‍⚖️ 🧑🏽‍⚖️ 🧑🏾‍⚖️ 🧑🏿‍⚖️ 👨‍⚖️ 👨🏻‍⚖️ 👨🏼‍⚖️ 👨🏽‍⚖️ 👨🏾‍⚖️ 👨🏿‍⚖️ 👩‍⚖️ 👩🏻‍⚖️ 👩🏼‍⚖️ 👩🏽‍⚖️ 👩🏾‍⚖️ 👩🏿‍⚖️ 🧑‍🌾 🧑🏻‍🌾 🧑🏼‍🌾 🧑🏽‍🌾 🧑🏾‍🌾 🧑🏿‍🌾 👨‍🌾 👨🏻‍🌾 👨🏼‍🌾 👨🏽‍🌾 👨🏾‍🌾 👨🏿‍🌾 👩‍🌾 👩🏻‍🌾 👩🏼‍🌾 👩🏽‍🌾 👩🏾‍🌾 👩🏿‍🌾 🧑‍🍳 🧑🏻‍🍳 🧑🏼‍🍳 🧑🏽‍🍳 🧑🏾‍🍳 🧑🏿‍🍳 👨‍🍳 👨🏻‍🍳 👨🏼‍🍳 👨🏽‍🍳 👨🏾‍🍳 👨🏿‍🍳 👩‍🍳 👩🏻‍🍳 👩🏼‍🍳 👩🏽‍🍳 👩🏾‍🍳 👩🏿‍🍳 🧑‍🔧 🧑🏻‍🔧 🧑🏼‍🔧 🧑🏽‍🔧 🧑🏾‍🔧 🧑🏿‍🔧 👨‍🔧 👨🏻‍🔧 👨🏼‍🔧 👨🏽‍🔧 👨🏾‍🔧 👨🏿‍🔧 👩‍🔧 👩🏻‍🔧 👩🏼‍🔧 👩🏽‍🔧 👩🏾‍🔧 👩🏿‍🔧 🧑‍🏭 🧑🏻‍🏭 🧑🏼‍🏭 🧑🏽‍🏭 🧑🏾‍🏭 🧑🏿‍🏭 👨‍🏭 👨🏻‍🏭 👨🏼‍🏭 👨🏽‍🏭 👨🏾‍🏭 👨🏿‍🏭 👩‍🏭 👩🏻‍🏭 👩🏼‍🏭 👩🏽‍🏭 👩🏾‍🏭 👩🏿‍🏭 🧑‍💼 🧑🏻‍💼 🧑🏼‍💼 🧑🏽‍💼 🧑🏾‍💼 🧑🏿‍💼 👨‍💼 👨🏻‍💼 👨🏼‍💼 👨🏽‍💼 👨🏾‍💼 👨🏿‍💼 👩‍💼 👩🏻‍💼 👩🏼‍💼 👩🏽‍💼 👩🏾‍💼 👩🏿‍💼 🧑‍🔬 🧑🏻‍🔬 🧑🏼‍🔬 🧑🏽‍🔬 🧑🏾‍🔬 🧑🏿‍🔬 👨‍🔬 👨🏻‍🔬 👨🏼‍🔬 👨🏽‍🔬 👨🏾‍🔬 👨🏿‍🔬 👩‍🔬 👩🏻‍🔬 👩🏼‍🔬 👩🏽‍🔬 👩🏾‍🔬 👩🏿‍🔬 🧑‍💻 🧑🏻‍💻 🧑🏼‍💻 🧑🏽‍💻 🧑🏾‍💻 🧑🏿‍💻 👨‍💻 👨🏻‍💻 👨🏼‍💻 👨🏽‍💻 👨🏾‍💻 👨🏿‍💻 👩‍💻 👩🏻‍💻 👩🏼‍💻 👩🏽‍💻 👩🏾‍💻 👩🏿‍💻 🧑‍🎤 🧑🏻‍🎤 🧑🏼‍🎤 🧑🏽‍🎤 🧑🏾‍🎤 🧑🏿‍🎤 👨‍🎤 👨🏻‍🎤 👨🏼‍🎤 👨🏽‍🎤 👨🏾‍🎤 👨🏿‍🎤 👩‍🎤 👩🏻‍🎤 👩🏼‍🎤 👩🏽‍🎤 👩🏾‍🎤 👩🏿‍🎤 🧑‍🎨 🧑🏻‍🎨 🧑🏼‍🎨 🧑🏽‍🎨 🧑🏾‍🎨 🧑🏿‍🎨 👨‍🎨 👨🏻‍🎨 👨🏼‍🎨 👨🏽‍🎨 👨🏾‍🎨 👨🏿‍🎨 👩‍🎨 👩🏻‍🎨 👩🏼‍🎨 👩🏽‍🎨 👩🏾‍🎨 👩🏿‍🎨 🧑‍✈️ 🧑🏻‍✈️ 🧑🏼‍✈️ 🧑🏽‍✈️ 🧑🏾‍✈️ 🧑🏿‍✈️ 👨‍✈️ 👨🏻‍✈️ 👨🏼‍✈️ 👨🏽‍✈️ 👨🏾‍✈️ 👨🏿‍✈️ 👩‍✈️ 👩🏻‍✈️ 👩🏼‍✈️ 👩🏽‍✈️ 👩🏾‍✈️ 👩🏿‍✈️ 🧑‍🚀 🧑🏻‍🚀 🧑🏼‍🚀 🧑🏽‍🚀 🧑🏾‍🚀 🧑🏿‍🚀 👨‍🚀 👨🏻‍🚀 👨🏼‍🚀 👨🏽‍🚀 👨🏾‍🚀 👨🏿‍🚀 👩‍🚀 👩🏻‍🚀 👩🏼‍🚀 👩🏽‍🚀 👩🏾‍🚀 👩🏿‍🚀 🧑‍🚒 🧑🏻‍🚒 🧑🏼‍🚒 🧑🏽‍🚒 🧑🏾‍🚒 🧑🏿‍🚒 👨‍🚒 👨🏻‍🚒 👨🏼‍🚒 👨🏽‍🚒 👨🏾‍🚒 👨🏿‍🚒 👩‍🚒 👩🏻‍🚒 👩🏼‍🚒 👩🏽‍🚒 👩🏾‍🚒 👩🏿‍🚒 👮‍♂️ 👮🏻‍♂️ 👮🏼‍♂️ 👮🏽‍♂️ 👮🏾‍♂️ 👮🏿‍♂️ 👮‍♀️ 👮🏻‍♀️ 👮🏼‍♀️ 👮🏽‍♀️ 👮🏾‍♀️ 👮🏿‍♀️ 🕵️‍♂️ 🕵🏻‍♂️ 🕵🏼‍♂️ 🕵🏽‍♂️ 🕵🏾‍♂️ 🕵🏿‍♂️ 🕵️‍♀️ 🕵🏻‍♀️ 🕵🏼‍♀️ 🕵🏽‍♀️ 🕵🏾‍♀️ 🕵🏿‍♀️ 💂‍♂️ 💂🏻‍♂️ 💂🏼‍♂️ 💂🏽‍♂️ 💂🏾‍♂️ 💂🏿‍♂️ 💂‍♀️ 💂🏻‍♀️ 💂🏼‍♀️ 💂🏽‍♀️ 💂🏾‍♀️ 💂🏿‍♀️ 👷‍♂️ 👷🏻‍♂️ 👷🏼‍♂️ 👷🏽‍♂️ 👷🏾‍♂️ 👷🏿‍♂️ 👷‍♀️ 👷🏻‍♀️ 👷🏼‍♀️ 👷🏽‍♀️ 👷🏾‍♀️ 👷🏿‍♀️ 👳‍♂️ 👳🏻‍♂️ 👳🏼‍♂️ 👳🏽‍♂️ 👳🏾‍♂️ 👳🏿‍♂️ 👳‍♀️ 👳🏻‍♀️ 👳🏼‍♀️ 👳🏽‍♀️ 👳🏾‍♀️ 👳🏿‍♀️ 🤵‍♂️ 🤵🏻‍♂️ 🤵🏼‍♂️ 🤵🏽‍♂️ 🤵🏾‍♂️ 🤵🏿‍♂️ 🤵‍♀️ 🤵🏻‍♀️ 🤵🏼‍♀️ 🤵🏽‍♀️ 🤵🏾‍♀️ 🤵🏿‍♀️ 👰‍♂️ 👰🏻‍♂️ 👰🏼‍♂️ 👰🏽‍♂️ 👰🏾‍♂️ 👰🏿‍♂️ 👰‍♀️ 👰🏻‍♀️ 👰🏼‍♀️ 👰🏽‍♀️ 👰🏾‍♀️ 👰🏿‍♀️ 👩‍🍼 👩🏻‍🍼 👩🏼‍🍼 👩🏽‍🍼 👩🏾‍🍼 👩🏿‍🍼 👨‍🍼 👨🏻‍🍼 👨🏼‍🍼 👨🏽‍🍼 👨🏾‍🍼 👨🏿‍🍼 🧑‍🍼 🧑🏻‍🍼 🧑🏼‍🍼 🧑🏽‍🍼 🧑🏾‍🍼 🧑🏿‍🍼 🧑‍🎄 🧑🏻‍🎄 🧑🏼‍🎄 🧑🏽‍🎄 🧑🏾‍🎄 🧑🏿‍🎄 🦸‍♂️ 🦸🏻‍♂️ 🦸🏼‍♂️ 🦸🏽‍♂️ 🦸🏾‍♂️ 🦸🏿‍♂️ 🦸‍♀️ 🦸🏻‍♀️ 🦸🏼‍♀️ 🦸🏽‍♀️ 🦸🏾‍♀️ 🦸🏿‍♀️ 🦹‍♂️ 🦹🏻‍♂️ 🦹🏼‍♂️ 🦹🏽‍♂️ 🦹🏾‍♂️ 🦹🏿‍♂️ 🦹‍♀️ 🦹🏻‍♀️ 🦹🏼‍♀️ 🦹🏽‍♀️ 🦹🏾‍♀️ 🦹🏿‍♀️ 🧙‍♂️ 🧙🏻‍♂️ 🧙🏼‍♂️ 🧙🏽‍♂️ 🧙🏾‍♂️ 🧙🏿‍♂️ 🧙‍♀️ 🧙🏻‍♀️ 🧙🏼‍♀️ 🧙🏽‍♀️ 🧙🏾‍♀️ 🧙🏿‍♀️ 🧚‍♂️ 🧚🏻‍♂️ 🧚🏼‍♂️ 🧚🏽‍♂️ 🧚🏾‍♂️ 🧚🏿‍♂️ 🧚‍♀️ 🧚🏻‍♀️ 🧚🏼‍♀️ 🧚🏽‍♀️ 🧚🏾‍♀️ 🧚🏿‍♀️ 🧛‍♂️ 🧛🏻‍♂️ 🧛🏼‍♂️ 🧛🏽‍♂️ 🧛🏾‍♂️ 🧛🏿‍♂️ 🧛‍♀️ 🧛🏻‍♀️ 🧛🏼‍♀️ 🧛🏽‍♀️ 🧛🏾‍♀️ 🧛🏿‍♀️ 🧜‍♂️ 🧜🏻‍♂️ 🧜🏼‍♂️ 🧜🏽‍♂️ 🧜🏾‍♂️ 🧜🏿‍♂️ 🧜‍♀️ 🧜🏻‍♀️ 🧜🏼‍♀️ 🧜🏽‍♀️ 🧜🏾‍♀️ 🧜🏿‍♀️ 🧝‍♂️ 🧝🏻‍♂️ 🧝🏼‍♂️ 🧝🏽‍♂️ 🧝🏾‍♂️ 🧝🏿‍♂️ 🧝‍♀️ 🧝🏻‍♀️ 🧝🏼‍♀️ 🧝🏽‍♀️ 🧝🏾‍♀️ 🧝🏿‍♀️ 🧞‍♂️ 🧞‍♀️ 🧟‍♂️ 🧟‍♀️ 💆‍♂️ 💆🏻‍♂️ 💆🏼‍♂️ 💆🏽‍♂️ 💆🏾‍♂️ 💆🏿‍♂️ 💆‍♀️ 💆🏻‍♀️ 💆🏼‍♀️ 💆🏽‍♀️ 💆🏾‍♀️ 💆🏿‍♀️ 💇‍♂️ 💇🏻‍♂️ 💇🏼‍♂️ 💇🏽‍♂️ 💇🏾‍♂️ 💇🏿‍♂️ 💇‍♀️ 💇🏻‍♀️ 💇🏼‍♀️ 💇🏽‍♀️ 💇🏾‍♀️ 💇🏿‍♀️ 🚶‍♂️ 🚶🏻‍♂️ 🚶🏼‍♂️ 🚶🏽‍♂️ 🚶🏾‍♂️ 🚶🏿‍♂️ 🚶‍♀️ 🚶🏻‍♀️ 🚶🏼‍♀️ 🚶🏽‍♀️ 🚶🏾‍♀️ 🚶🏿‍♀️ 🧍‍♂️ 🧍🏻‍♂️ 🧍🏼‍♂️ 🧍🏽‍♂️ 🧍🏾‍♂️ 🧍🏿‍♂️ 🧍‍♀️ 🧍🏻‍♀️ 🧍🏼‍♀️ 🧍🏽‍♀️ 🧍🏾‍♀️ 🧍🏿‍♀️ 🧎‍♂️ 🧎🏻‍♂️ 🧎🏼‍♂️ 🧎🏽‍♂️ 🧎🏾‍♂️ 🧎🏿‍♂️ 🧎‍♀️ 🧎🏻‍♀️ 🧎🏼‍♀️ 🧎🏽‍♀️ 🧎🏾‍♀️ 🧎🏿‍♀️ 🧑‍🦯 🧑🏻‍🦯 🧑🏼‍🦯 🧑🏽‍🦯 🧑🏾‍🦯 🧑🏿‍🦯 👨‍🦯 👨🏻‍🦯 👨🏼‍🦯 👨🏽‍🦯 👨🏾‍🦯 👨🏿‍🦯 👩‍🦯 👩🏻‍🦯 👩🏼‍🦯 👩🏽‍🦯 👩🏾‍🦯 👩🏿‍🦯 🧑‍🦼 🧑🏻‍🦼 🧑🏼‍🦼 🧑🏽‍🦼 🧑🏾‍🦼 🧑🏿‍🦼 👨‍🦼 👨🏻‍🦼 👨🏼‍🦼 👨🏽‍🦼 👨🏾‍🦼 👨🏿‍🦼 👩‍🦼 👩🏻‍🦼 👩🏼‍🦼 👩🏽‍🦼 👩🏾‍🦼 👩🏿‍🦼 🧑‍🦽 🧑🏻‍🦽 🧑🏼‍🦽 🧑🏽‍🦽 🧑🏾‍🦽 🧑🏿‍🦽 👨‍🦽 👨🏻‍🦽 👨🏼‍🦽 👨🏽‍🦽 👨🏾‍🦽 👨🏿‍🦽 👩‍🦽 👩🏻‍🦽 👩🏼‍🦽 👩🏽‍🦽 👩🏾‍🦽 👩🏿‍🦽 🏃‍♂️ 🏃🏻‍♂️ 🏃🏼‍♂️ 🏃🏽‍♂️ 🏃🏾‍♂️ 🏃🏿‍♂️ 🏃‍♀️ 🏃🏻‍♀️ 🏃🏼‍♀️ 🏃🏽‍♀️ 🏃🏾‍♀️ 🏃🏿‍♀️ 👯‍♂️ 👯‍♀️ 🧖‍♂️ 🧖🏻‍♂️ 🧖🏼‍♂️ 🧖🏽‍♂️ 🧖🏾‍♂️ 🧖🏿‍♂️ 🧖‍♀️ 🧖🏻‍♀️ 🧖🏼‍♀️ 🧖🏽‍♀️ 🧖🏾‍♀️ 🧖🏿‍♀️ 🧗‍♂️ 🧗🏻‍♂️ 🧗🏼‍♂️ 🧗🏽‍♂️ 🧗🏾‍♂️ 🧗🏿‍♂️ 🧗‍♀️ 🧗🏻‍♀️ 🧗🏼‍♀️ 🧗🏽‍♀️ 🧗🏾‍♀️ 🧗🏿‍♀️ 🏌️‍♂️ 🏌🏻‍♂️ 🏌🏼‍♂️ 🏌🏽‍♂️ 🏌🏾‍♂️ 🏌🏿‍♂️ 🏌️‍♀️ 🏌🏻‍♀️ 🏌🏼‍♀️ 🏌🏽‍♀️ 🏌🏾‍♀️ 🏌🏿‍♀️ 🏄‍♂️ 🏄🏻‍♂️ 🏄🏼‍♂️ 🏄🏽‍♂️ 🏄🏾‍♂️ 🏄🏿‍♂️ 🏄‍♀️ 🏄🏻‍♀️ 🏄🏼‍♀️ 🏄🏽‍♀️ 🏄🏾‍♀️ 🏄🏿‍♀️ 🚣‍♂️ 🚣🏻‍♂️ 🚣🏼‍♂️ 🚣🏽‍♂️ 🚣🏾‍♂️ 🚣🏿‍♂️ 🚣‍♀️ 🚣🏻‍♀️ 🚣🏼‍♀️ 🚣🏽‍♀️ 🚣🏾‍♀️ 🚣🏿‍♀️ 🏊‍♂️ 🏊🏻‍♂️ 🏊🏼‍♂️ 🏊🏽‍♂️ 🏊🏾‍♂️ 🏊🏿‍♂️ 🏊‍♀️ 🏊🏻‍♀️ 🏊🏼‍♀️ 🏊🏽‍♀️ 🏊🏾‍♀️ 🏊🏿‍♀️ ⛹️‍♂️ ⛹🏻‍♂️ ⛹🏼‍♂️ ⛹🏽‍♂️ ⛹🏾‍♂️ ⛹🏿‍♂️ ⛹️‍♀️ ⛹🏻‍♀️ ⛹🏼‍♀️ ⛹🏽‍♀️ ⛹🏾‍♀️ ⛹🏿‍♀️ 🏋️‍♂️ 🏋🏻‍♂️ 🏋🏼‍♂️ 🏋🏽‍♂️ 🏋🏾‍♂️ 🏋🏿‍♂️ 🏋️‍♀️ 🏋🏻‍♀️ 🏋🏼‍♀️ 🏋🏽‍♀️ 🏋🏾‍♀️ 🏋🏿‍♀️ 🚴‍♂️ 🚴🏻‍♂️ 🚴🏼‍♂️ 🚴🏽‍♂️ 🚴🏾‍♂️ 🚴🏿‍♂️ 🚴‍♀️ 🚴🏻‍♀️ 🚴🏼‍♀️ 🚴🏽‍♀️ 🚴🏾‍♀️ 🚴🏿‍♀️ 🚵‍♂️ 🚵🏻‍♂️ 🚵🏼‍♂️ 🚵🏽‍♂️ 🚵🏾‍♂️ 🚵🏿‍♂️ 🚵‍♀️ 🚵🏻‍♀️ 🚵🏼‍♀️ 🚵🏽‍♀️ 🚵🏾‍♀️ 🚵🏿‍♀️ 🤸‍♂️ 🤸🏻‍♂️ 🤸🏼‍♂️ 🤸🏽‍♂️ 🤸🏾‍♂️ 🤸🏿‍♂️ 🤸‍♀️ 🤸🏻‍♀️ 🤸🏼‍♀️ 🤸🏽‍♀️ 🤸🏾‍♀️ 🤸🏿‍♀️ 🤼‍♂️ 🤼‍♀️ 🤽‍♂️ 🤽🏻‍♂️ 🤽🏼‍♂️ 🤽🏽‍♂️ 🤽🏾‍♂️ 🤽🏿‍♂️ 🤽‍♀️ 🤽🏻‍♀️ 🤽🏼‍♀️ 🤽🏽‍♀️ 🤽🏾‍♀️ 🤽🏿‍♀️ 🤾‍♂️ 🤾🏻‍♂️ 🤾🏼‍♂️ 🤾🏽‍♂️ 🤾🏾‍♂️ 🤾🏿‍♂️ 🤾‍♀️ 🤾🏻‍♀️ 🤾🏼‍♀️ 🤾🏽‍♀️ 🤾🏾‍♀️ 🤾🏿‍♀️ 🤹‍♂️ 🤹🏻‍♂️ 🤹🏼‍♂️ 🤹🏽‍♂️ 🤹🏾‍♂️ 🤹🏿‍♂️ 🤹‍♀️ 🤹🏻‍♀️ 🤹🏼‍♀️ 🤹🏽‍♀️ 🤹🏾‍♀️ 🤹🏿‍♀️ 🧘‍♂️ 🧘🏻‍♂️ 🧘🏼‍♂️ 🧘🏽‍♂️ 🧘🏾‍♂️ 🧘🏿‍♂️ 🧘‍♀️ 🧘🏻‍♀️ 🧘🏼‍♀️ 🧘🏽‍♀️ 🧘🏾‍♀️ 🧘🏿‍♀️ 🧑‍🤝‍🧑 🧑🏻‍🤝‍🧑🏻 🧑🏻‍🤝‍🧑🏼 🧑🏻‍🤝‍🧑🏽 🧑🏻‍🤝‍🧑🏾 🧑🏻‍🤝‍🧑🏿 🧑🏼‍🤝‍🧑🏻 🧑🏼‍🤝‍🧑🏼 🧑🏼‍🤝‍🧑🏽 🧑🏼‍🤝‍🧑🏾 🧑🏼‍🤝‍🧑🏿 🧑🏽‍🤝‍🧑🏻 🧑🏽‍🤝‍🧑🏼 🧑🏽‍🤝‍🧑🏽 🧑🏽‍🤝‍🧑🏾 🧑🏽‍🤝‍🧑🏿 🧑🏾‍🤝‍🧑🏻 🧑🏾‍🤝‍🧑🏼 🧑🏾‍🤝‍🧑🏽 🧑🏾‍🤝‍🧑🏾 🧑🏾‍🤝‍🧑🏿 🧑🏿‍🤝‍🧑🏻 🧑🏿‍🤝‍🧑🏼 🧑🏿‍🤝‍🧑🏽 🧑🏿‍🤝‍🧑🏾 🧑🏿‍🤝‍🧑🏿 👩🏻‍🤝‍👩🏼 👩🏻‍🤝‍👩🏽 👩🏻‍🤝‍👩🏾 👩🏻‍🤝‍👩🏿 👩🏼‍🤝‍👩🏻 👩🏼‍🤝‍👩🏽 👩🏼‍🤝‍👩🏾 👩🏼‍🤝‍👩🏿 👩🏽‍🤝‍👩🏻 👩🏽‍🤝‍👩🏼 👩🏽‍🤝‍👩🏾 👩🏽‍🤝‍👩🏿 👩🏾‍🤝‍👩🏻 👩🏾‍🤝‍👩🏼 👩🏾‍🤝‍👩🏽 👩🏾‍🤝‍👩🏿 👩🏿‍🤝‍👩🏻 👩🏿‍🤝‍👩🏼 👩🏿‍🤝‍👩🏽 👩🏿‍🤝‍👩🏾 👩🏻‍🤝‍👨🏼 👩🏻‍🤝‍👨🏽 👩🏻‍🤝‍👨🏾 👩🏻‍🤝‍👨🏿 👩🏼‍🤝‍👨🏻 👩🏼‍🤝‍👨🏽 👩🏼‍🤝‍👨🏾 👩🏼‍🤝‍👨🏿 👩🏽‍🤝‍👨🏻 👩🏽‍🤝‍👨🏼 👩🏽‍🤝‍👨🏾 👩🏽‍🤝‍👨🏿 👩🏾‍🤝‍👨🏻 👩🏾‍🤝‍👨🏼 👩🏾‍🤝‍👨🏽 👩🏾‍🤝‍👨🏿 👩🏿‍🤝‍👨🏻 👩🏿‍🤝‍👨🏼 👩🏿‍🤝‍👨🏽 👩🏿‍🤝‍👨🏾 👨🏻‍🤝‍👨🏼 👨🏻‍🤝‍👨🏽 👨🏻‍🤝‍👨🏾 👨🏻‍🤝‍👨🏿 👨🏼‍🤝‍👨🏻 👨🏼‍🤝‍👨🏽 👨🏼‍🤝‍👨🏾 👨🏼‍🤝‍👨🏿 👨🏽‍🤝‍👨🏻 👨🏽‍🤝‍👨🏼 👨🏽‍🤝‍👨🏾 👨🏽‍🤝‍👨🏿 👨🏾‍🤝‍👨🏻 👨🏾‍🤝‍👨🏼 👨🏾‍🤝‍👨🏽 👨🏾‍🤝‍👨🏿 👨🏿‍🤝‍👨🏻 👨🏿‍🤝‍👨🏼 👨🏿‍🤝‍👨🏽 👨🏿‍🤝‍👨🏾 💏 🧑🏻‍❤️‍💋‍🧑🏼 🧑🏻‍❤️‍💋‍🧑🏽 🧑🏻‍❤️‍💋‍🧑🏾 🧑🏻‍❤️‍💋‍🧑🏿 🧑🏼‍❤️‍💋‍🧑🏻 🧑🏼‍❤️‍💋‍🧑🏽 🧑🏼‍❤️‍💋‍🧑🏾 🧑🏼‍❤️‍💋‍🧑🏿 🧑🏽‍❤️‍💋‍🧑🏻 🧑🏽‍❤️‍💋‍🧑🏼 🧑🏽‍❤️‍💋‍🧑🏾 🧑🏽‍❤️‍💋‍🧑🏿 🧑🏾‍❤️‍💋‍🧑🏻 🧑🏾‍❤️‍💋‍🧑🏼 🧑🏾‍❤️‍💋‍🧑🏽 🧑🏾‍❤️‍💋‍🧑🏿 🧑🏿‍❤️‍💋‍🧑🏻 🧑🏿‍❤️‍💋‍🧑🏼 🧑🏿‍❤️‍💋‍🧑🏽 🧑🏿‍❤️‍💋‍🧑🏾 👩‍❤️‍💋‍👨 👩🏻‍❤️‍💋‍👨🏻 👩🏻‍❤️‍💋‍👨🏼 👩🏻‍❤️‍💋‍👨🏽 👩🏻‍❤️‍💋‍👨🏾 👩🏻‍❤️‍💋‍👨🏿 👩🏼‍❤️‍💋‍👨🏻 👩🏼‍❤️‍💋‍👨🏼 👩🏼‍❤️‍💋‍👨🏽 👩🏼‍❤️‍💋‍👨🏾 👩🏼‍❤️‍💋‍👨🏿 👩🏽‍❤️‍💋‍👨🏻 👩🏽‍❤️‍💋‍👨🏼 👩🏽‍❤️‍💋‍👨🏽 👩🏽‍❤️‍💋‍👨🏾 👩🏽‍❤️‍💋‍👨🏿 👩🏾‍❤️‍💋‍👨🏻 👩🏾‍❤️‍💋‍👨🏼 👩🏾‍❤️‍💋‍👨🏽 👩🏾‍❤️‍💋‍👨🏾 👩🏾‍❤️‍💋‍👨🏿 👩🏿‍❤️‍💋‍👨🏻 👩🏿‍❤️‍💋‍👨🏼 👩🏿‍❤️‍💋‍👨🏽 👩🏿‍❤️‍💋‍👨🏾 👩🏿‍❤️‍💋‍👨🏿 👨‍❤️‍💋‍👨 👨🏻‍❤️‍💋‍👨🏻 👨🏻‍❤️‍💋‍👨🏼 👨🏻‍❤️‍💋‍👨🏽 👨🏻‍❤️‍💋‍👨🏾 👨🏻‍❤️‍💋‍👨🏿 👨🏼‍❤️‍💋‍👨🏻 👨🏼‍❤️‍💋‍👨🏼 👨🏼‍❤️‍💋‍👨🏽 👨🏼‍❤️‍💋‍👨🏾 👨🏼‍❤️‍💋‍👨🏿 👨🏽‍❤️‍💋‍👨🏻 👨🏽‍❤️‍💋‍👨🏼 👨🏽‍❤️‍💋‍👨🏽 👨🏽‍❤️‍💋‍👨🏾 👨🏽‍❤️‍💋‍👨🏿 👨🏾‍❤️‍💋‍👨🏻 👨🏾‍❤️‍💋‍👨🏼 👨🏾‍❤️‍💋‍👨🏽 👨🏾‍❤️‍💋‍👨🏾 👨🏾‍❤️‍💋‍👨🏿 👨🏿‍❤️‍💋‍👨🏻 👨🏿‍❤️‍💋‍👨🏼 👨🏿‍❤️‍💋‍👨🏽 👨🏿‍❤️‍💋‍👨🏾 👨🏿‍❤️‍💋‍👨🏿 👩‍❤️‍💋‍👩 👩🏻‍❤️‍💋‍👩🏻 👩🏻‍❤️‍💋‍👩🏼 👩🏻‍❤️‍💋‍👩🏽 👩🏻‍❤️‍💋‍👩🏾 👩🏻‍❤️‍💋‍👩🏿 👩🏼‍❤️‍💋‍👩🏻 👩🏼‍❤️‍💋‍👩🏼 👩🏼‍❤️‍💋‍👩🏽 👩🏼‍❤️‍💋‍👩🏾 👩🏼‍❤️‍💋‍👩🏿 👩🏽‍❤️‍💋‍👩🏻 👩🏽‍❤️‍💋‍👩🏼 👩🏽‍❤️‍💋‍👩🏽 👩🏽‍❤️‍💋‍👩🏾 👩🏽‍❤️‍💋‍👩🏿 👩🏾‍❤️‍💋‍👩🏻 👩🏾‍❤️‍💋‍👩🏼 👩🏾‍❤️‍💋‍👩🏽 👩🏾‍❤️‍💋‍👩🏾 👩🏾‍❤️‍💋‍👩🏿 👩🏿‍❤️‍💋‍👩🏻 👩🏿‍❤️‍💋‍👩🏼 👩🏿‍❤️‍💋‍👩🏽 👩🏿‍❤️‍💋‍👩🏾 👩🏿‍❤️‍💋‍👩🏿 💑 🧑🏻‍❤️‍🧑🏼 🧑🏻‍❤️‍🧑🏽 🧑🏻‍❤️‍🧑🏾 🧑🏻‍❤️‍🧑🏿 🧑🏼‍❤️‍🧑🏻 🧑🏼‍❤️‍🧑🏽 🧑🏼‍❤️‍🧑🏾 🧑🏼‍❤️‍🧑🏿 🧑🏽‍❤️‍🧑🏻 🧑🏽‍❤️‍🧑🏼 🧑🏽‍❤️‍🧑🏾 🧑🏽‍❤️‍🧑🏿 🧑🏾‍❤️‍🧑🏻 🧑🏾‍❤️‍🧑🏼 🧑🏾‍❤️‍🧑🏽 🧑🏾‍❤️‍🧑🏿 🧑🏿‍❤️‍🧑🏻 🧑🏿‍❤️‍🧑🏼 🧑🏿‍❤️‍🧑🏽 🧑🏿‍❤️‍🧑🏾 👩‍❤️‍👨 👩🏻‍❤️‍👨🏻 👩🏻‍❤️‍👨🏼 👩🏻‍❤️‍👨🏽 👩🏻‍❤️‍👨🏾 👩🏻‍❤️‍👨🏿 👩🏼‍❤️‍👨🏻 👩🏼‍❤️‍👨🏼 👩🏼‍❤️‍👨🏽 👩🏼‍❤️‍👨🏾 👩🏼‍❤️‍👨🏿 👩🏽‍❤️‍👨🏻 👩🏽‍❤️‍👨🏼 👩🏽‍❤️‍👨🏽 👩🏽‍❤️‍👨🏾 👩🏽‍❤️‍👨🏿 👩🏾‍❤️‍👨🏻 👩🏾‍❤️‍👨🏼 👩🏾‍❤️‍👨🏽 👩🏾‍❤️‍👨🏾 👩🏾‍❤️‍👨🏿 👩🏿‍❤️‍👨🏻 👩🏿‍❤️‍👨🏼 👩🏿‍❤️‍👨🏽 👩🏿‍❤️‍👨🏾 👩🏿‍❤️‍👨🏿 👨‍❤️‍👨 👨🏻‍❤️‍👨🏻 👨🏻‍❤️‍👨🏼 👨🏻‍❤️‍👨🏽 👨🏻‍❤️‍👨🏾 👨🏻‍❤️‍👨🏿 👨🏼‍❤️‍👨🏻 👨🏼‍❤️‍👨🏼 👨🏼‍❤️‍👨🏽 👨🏼‍❤️‍👨🏾 👨🏼‍❤️‍👨🏿 👨🏽‍❤️‍👨🏻 👨🏽‍❤️‍👨🏼 👨🏽‍❤️‍👨🏽 👨🏽‍❤️‍👨🏾 👨🏽‍❤️‍👨🏿 👨🏾‍❤️‍👨🏻 👨🏾‍❤️‍👨🏼 👨🏾‍❤️‍👨🏽 👨🏾‍❤️‍👨🏾 👨🏾‍❤️‍👨🏿 👨🏿‍❤️‍👨🏻 👨🏿‍❤️‍👨🏼 👨🏿‍❤️‍👨🏽 👨🏿‍❤️‍👨🏾 👨🏿‍❤️‍👨🏿 👩‍❤️‍👩 👩🏻‍❤️‍👩🏻 👩🏻‍❤️‍👩🏼 👩🏻‍❤️‍👩🏽 👩🏻‍❤️‍👩🏾 👩🏻‍❤️‍👩🏿 👩🏼‍❤️‍👩🏻 👩🏼‍❤️‍👩🏼 👩🏼‍❤️‍👩🏽 👩🏼‍❤️‍👩🏾 👩🏼‍❤️‍👩🏿 👩🏽‍❤️‍👩🏻 👩🏽‍❤️‍👩🏼 👩🏽‍❤️‍👩🏽 👩🏽‍❤️‍👩🏾 👩🏽‍❤️‍👩🏿 👩🏾‍❤️‍👩🏻 👩🏾‍❤️‍👩🏼 👩🏾‍❤️‍👩🏽 👩🏾‍❤️‍👩🏾 👩🏾‍❤️‍👩🏿 👩🏿‍❤️‍👩🏻 👩🏿‍❤️‍👩🏼 👩🏿‍❤️‍👩🏽 👩🏿‍❤️‍👩🏾 👩🏿‍❤️‍👩🏿 👪 👨‍👩‍👦 👨‍👩‍👧 👨‍👩‍👧‍👦 👨‍👩‍👦‍👦 👨‍👩‍👧‍👧 👨‍👨‍👦 👨‍👨‍👧 👨‍👨‍👧‍👦 👨‍👨‍👦‍👦 👨‍👨‍👧‍👧 👩‍👩‍👦 👩‍👩‍👧 👩‍👩‍👧‍👦 👩‍👩‍👦‍👦 👩‍👩‍👧‍👧 👨‍👦 👨‍👦‍👦 👨‍👧 👨‍👧‍👦 👨‍👧‍👧 👩‍👦 👩‍👦‍👦 👩‍👧 👩‍👧‍👦 👩‍👧‍👧 🐕‍🦺 🐈‍⬛ 🐻‍❄️ 🐦‍⬛ 🏳️‍🌈 🏳️‍⚧️ 🏴‍☠️ </p>`,frontmatter:{},note:`Full reference: https://unicode.org/Public/emoji/15.0/
ZJW: zwidge https://unicode.org/emoji/charts/emoji-zwj-sequences.html`,index:6,start:212,end:222},filepath:"/home/ben/Workspace/demystifying-unicode/pages/04-quirks.md",noteHTML:`<p>Full reference: https://unicode.org/Public/emoji/15.0/
ZJW: zwidge https://unicode.org/emoji/charts/emoji-zwj-sequences.html</p>
`,id:53,no:54},__clicksElements:[],__preloaded:!1}},{path:"55",name:"page-55",component:H4,meta:{hide:!1,srcSequence:"./pages/04-quirks.md",slide:{raw:`
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

</div>`,frontmatter:{hide:!1,srcSequence:"./pages/04-quirks.md"},index:54,start:223,end:252,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/04-quirks.md",raw:`
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

</div>`,frontmatter:{},index:7,start:223,end:252},filepath:"/home/ben/Workspace/demystifying-unicode/pages/04-quirks.md",noteHTML:"",id:54,no:55},__clicksElements:[],__preloaded:!1}},{path:"56",name:"page-56",component:Y4,meta:{hide:!1,srcSequence:"./pages/04-quirks.md",slide:{raw:'\n## Emoji Composition\n\n"Fun" combinations:\n\n<v-clicks>\n\n- `\\u1F9D4` + `\\u200D` + `\\u2640` + `\\uFE0F` = 🧔‍♀️ = Person Beard + ♀\n- `\\u1F9D1` + `\\u200D` + `\\u1F9b2` = 🧑‍🦲 = Adult + Bald\n- `\\u1F9D1` + `\\u200D` + `\\u2695` = 🧑‍⚕ = Adult + ⚕ (Staff of aesculapius)\n- `\\u1F9D1` + `\\u200D` + `\\u1F373` = 🧑‍🍳 = Adult + 🍳 (Cooking)\n- `\\u1F468` + `\\u1F3FB` + `\\u200D` + `\\u1F9BD` = 👨🏻‍🦽 = Man + Fitzpatrick 1-2 + Manual wheelchair \n- `\\u1F469` + `\\u1F3FF` + `\\u200D` + `\\u1F373` = 👩🏿‍🎤 = Woman + Fitzpatrick Type-6 + Microphone \n- `\\u1F3F3` + `\\uFE0F` + `\\u200D` + `\\u1F308` = 🏳️ + 🌈 = 🏳️‍🌈 \n- `\\u1F3F3` + `\\uFE0F` + `\\u200D` + `\\u26A7` + `u\\FE0F` = 🏳️ + ⚧️ = 🏳️‍⚧️  \n\n</v-clicks>\n',title:"Emoji Composition",level:2,content:'## Emoji Composition\n\n"Fun" combinations:\n\n<v-clicks>\n\n- `\\u1F9D4` + `\\u200D` + `\\u2640` + `\\uFE0F` = 🧔‍♀️ = Person Beard + ♀\n- `\\u1F9D1` + `\\u200D` + `\\u1F9b2` = 🧑‍🦲 = Adult + Bald\n- `\\u1F9D1` + `\\u200D` + `\\u2695` = 🧑‍⚕ = Adult + ⚕ (Staff of aesculapius)\n- `\\u1F9D1` + `\\u200D` + `\\u1F373` = 🧑‍🍳 = Adult + 🍳 (Cooking)\n- `\\u1F468` + `\\u1F3FB` + `\\u200D` + `\\u1F9BD` = 👨🏻‍🦽 = Man + Fitzpatrick 1-2 + Manual wheelchair \n- `\\u1F469` + `\\u1F3FF` + `\\u200D` + `\\u1F373` = 👩🏿‍🎤 = Woman + Fitzpatrick Type-6 + Microphone \n- `\\u1F3F3` + `\\uFE0F` + `\\u200D` + `\\u1F308` = 🏳️ + 🌈 = 🏳️‍🌈 \n- `\\u1F3F3` + `\\uFE0F` + `\\u200D` + `\\u26A7` + `u\\FE0F` = 🏳️ + ⚧️ = 🏳️‍⚧️  \n\n</v-clicks>',frontmatter:{hide:!1,srcSequence:"./pages/04-quirks.md"},index:55,start:253,end:271,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/04-quirks.md",raw:'\n## Emoji Composition\n\n"Fun" combinations:\n\n<v-clicks>\n\n- `\\u1F9D4` + `\\u200D` + `\\u2640` + `\\uFE0F` = 🧔‍♀️ = Person Beard + ♀\n- `\\u1F9D1` + `\\u200D` + `\\u1F9b2` = 🧑‍🦲 = Adult + Bald\n- `\\u1F9D1` + `\\u200D` + `\\u2695` = 🧑‍⚕ = Adult + ⚕ (Staff of aesculapius)\n- `\\u1F9D1` + `\\u200D` + `\\u1F373` = 🧑‍🍳 = Adult + 🍳 (Cooking)\n- `\\u1F468` + `\\u1F3FB` + `\\u200D` + `\\u1F9BD` = 👨🏻‍🦽 = Man + Fitzpatrick 1-2 + Manual wheelchair \n- `\\u1F469` + `\\u1F3FF` + `\\u200D` + `\\u1F373` = 👩🏿‍🎤 = Woman + Fitzpatrick Type-6 + Microphone \n- `\\u1F3F3` + `\\uFE0F` + `\\u200D` + `\\u1F308` = 🏳️ + 🌈 = 🏳️‍🌈 \n- `\\u1F3F3` + `\\uFE0F` + `\\u200D` + `\\u26A7` + `u\\FE0F` = 🏳️ + ⚧️ = 🏳️‍⚧️  \n\n</v-clicks>\n',title:"Emoji Composition",level:2,content:'## Emoji Composition\n\n"Fun" combinations:\n\n<v-clicks>\n\n- `\\u1F9D4` + `\\u200D` + `\\u2640` + `\\uFE0F` = 🧔‍♀️ = Person Beard + ♀\n- `\\u1F9D1` + `\\u200D` + `\\u1F9b2` = 🧑‍🦲 = Adult + Bald\n- `\\u1F9D1` + `\\u200D` + `\\u2695` = 🧑‍⚕ = Adult + ⚕ (Staff of aesculapius)\n- `\\u1F9D1` + `\\u200D` + `\\u1F373` = 🧑‍🍳 = Adult + 🍳 (Cooking)\n- `\\u1F468` + `\\u1F3FB` + `\\u200D` + `\\u1F9BD` = 👨🏻‍🦽 = Man + Fitzpatrick 1-2 + Manual wheelchair \n- `\\u1F469` + `\\u1F3FF` + `\\u200D` + `\\u1F373` = 👩🏿‍🎤 = Woman + Fitzpatrick Type-6 + Microphone \n- `\\u1F3F3` + `\\uFE0F` + `\\u200D` + `\\u1F308` = 🏳️ + 🌈 = 🏳️‍🌈 \n- `\\u1F3F3` + `\\uFE0F` + `\\u200D` + `\\u26A7` + `u\\FE0F` = 🏳️ + ⚧️ = 🏳️‍⚧️  \n\n</v-clicks>',frontmatter:{},index:8,start:253,end:271},filepath:"/home/ben/Workspace/demystifying-unicode/pages/04-quirks.md",noteHTML:"",id:55,no:56},__clicksElements:[],__preloaded:!1}},{path:"57",name:"page-57",component:tF,meta:{hide:!1,srcSequence:"./pages/04-quirks.md",slide:{raw:`
## Unicode Tags

\`\`\`rust
fn main() {
    let encoded = "Hello󠀠󠁒󠁵󠁳󠁴 Meetup Amsterdam!";

    println!("{}", encoded);

    let codepoints: Vec<u32> = encoded.chars().map(|c| c.into()).collect();
    println!("{:X?}", codepoints);

    let decoded: String = encoded
        .chars()
        .map(|c| match c {
            '\\u{e0000}'..='\\u{e007F}' => {
                let char_u32: u32 = c.into();
                std::char::from_u32(char_u32 - 0xE0000).unwrap()
            },
            _ => c,
        })
        .collect();

    println!("{}", decoded);
}
\`\`\`

https://www.compart.com/en/unicode/block/U+E0000

https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&gist=43728a2dea045f7f0c9519231c32555c

<!--
Unicode tags: https://en.wikipedia.org/wiki/Tags_(Unicode_block)
\\uE0001-\\uE007F
-->
`,title:"Unicode Tags",level:2,content:`## Unicode Tags

\`\`\`rust
fn main() {
    let encoded = "Hello󠀠󠁒󠁵󠁳󠁴 Meetup Amsterdam!";

    println!("{}", encoded);

    let codepoints: Vec<u32> = encoded.chars().map(|c| c.into()).collect();
    println!("{:X?}", codepoints);

    let decoded: String = encoded
        .chars()
        .map(|c| match c {
            '\\u{e0000}'..='\\u{e007F}' => {
                let char_u32: u32 = c.into();
                std::char::from_u32(char_u32 - 0xE0000).unwrap()
            },
            _ => c,
        })
        .collect();

    println!("{}", decoded);
}
\`\`\`

https://www.compart.com/en/unicode/block/U+E0000

https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&gist=43728a2dea045f7f0c9519231c32555c`,frontmatter:{hide:!1,srcSequence:"./pages/04-quirks.md"},note:`Unicode tags: https://en.wikipedia.org/wiki/Tags_(Unicode_block)
\\uE0001-\\uE007F`,index:56,start:272,end:308,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/04-quirks.md",raw:`
## Unicode Tags

\`\`\`rust
fn main() {
    let encoded = "Hello󠀠󠁒󠁵󠁳󠁴 Meetup Amsterdam!";

    println!("{}", encoded);

    let codepoints: Vec<u32> = encoded.chars().map(|c| c.into()).collect();
    println!("{:X?}", codepoints);

    let decoded: String = encoded
        .chars()
        .map(|c| match c {
            '\\u{e0000}'..='\\u{e007F}' => {
                let char_u32: u32 = c.into();
                std::char::from_u32(char_u32 - 0xE0000).unwrap()
            },
            _ => c,
        })
        .collect();

    println!("{}", decoded);
}
\`\`\`

https://www.compart.com/en/unicode/block/U+E0000

https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&gist=43728a2dea045f7f0c9519231c32555c

<!--
Unicode tags: https://en.wikipedia.org/wiki/Tags_(Unicode_block)
\\uE0001-\\uE007F
-->
`,title:"Unicode Tags",level:2,content:`## Unicode Tags

\`\`\`rust
fn main() {
    let encoded = "Hello󠀠󠁒󠁵󠁳󠁴 Meetup Amsterdam!";

    println!("{}", encoded);

    let codepoints: Vec<u32> = encoded.chars().map(|c| c.into()).collect();
    println!("{:X?}", codepoints);

    let decoded: String = encoded
        .chars()
        .map(|c| match c {
            '\\u{e0000}'..='\\u{e007F}' => {
                let char_u32: u32 = c.into();
                std::char::from_u32(char_u32 - 0xE0000).unwrap()
            },
            _ => c,
        })
        .collect();

    println!("{}", decoded);
}
\`\`\`

https://www.compart.com/en/unicode/block/U+E0000

https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&gist=43728a2dea045f7f0c9519231c32555c`,frontmatter:{},note:`Unicode tags: https://en.wikipedia.org/wiki/Tags_(Unicode_block)
\\uE0001-\\uE007F`,index:9,start:272,end:308},filepath:"/home/ben/Workspace/demystifying-unicode/pages/04-quirks.md",noteHTML:`<p>Unicode tags: https://en.wikipedia.org/wiki/Tags_(Unicode_block)
\\uE0001-\\uE007F</p>
`,id:56,no:57},__clicksElements:[],__preloaded:!1}},{path:"58",name:"page-58",component:iF,meta:{layout:"center",hide:!1,srcSequence:"./pages/04-quirks.md",slide:{raw:`---
layout: center
---

## Summary

<v-clicks>

Encoding is important! 

Casemapping is hard! (Turkish = Web hard mode)

Composition is pretty dang cool

Obsfucated code = dangerous‽

</v-clicks>

`,title:"Summary",level:2,content:`## Summary

<v-clicks>

Encoding is important! 

Casemapping is hard! (Turkish = Web hard mode)

Composition is pretty dang cool

Obsfucated code = dangerous‽

</v-clicks>`,frontmatter:{layout:"center",hide:!1,srcSequence:"./pages/04-quirks.md"},index:57,start:308,end:327,source:{filepath:"/home/ben/Workspace/demystifying-unicode/pages/04-quirks.md",raw:`---
layout: center
---

## Summary

<v-clicks>

Encoding is important! 

Casemapping is hard! (Turkish = Web hard mode)

Composition is pretty dang cool

Obsfucated code = dangerous‽

</v-clicks>

`,title:"Summary",level:2,content:`## Summary

<v-clicks>

Encoding is important! 

Casemapping is hard! (Turkish = Web hard mode)

Composition is pretty dang cool

Obsfucated code = dangerous‽

</v-clicks>`,frontmatter:{layout:"center"},index:10,start:308,end:327},filepath:"/home/ben/Workspace/demystifying-unicode/pages/04-quirks.md",noteHTML:"",id:57,no:58},__clicksElements:[],__preloaded:!1}},{path:"59",name:"page-59",component:dF,meta:{layout:"cover",hideInToc:!0,background:"/DSC09297.jpg",slide:{raw:`---
layout: cover
hideInToc: true
background: /DSC09297.jpg
---

# THE END

<div class="absolute bottom-0 left-0 p-5 text-left">

Github: https://github.com/b-n

Mastodon: https://techhub.social/@b_n

Artichoke Ruby: https://artichokeruby.org/

</div>
`,title:"THE END",level:1,content:`# THE END

<div class="absolute bottom-0 left-0 p-5 text-left">

Github: https://github.com/b-n

Mastodon: https://techhub.social/@b_n

Artichoke Ruby: https://artichokeruby.org/

</div>`,frontmatter:{layout:"cover",hideInToc:!0,background:"/DSC09297.jpg"},index:58,start:54,end:72,noteHTML:"",filepath:"/home/ben/Workspace/demystifying-unicode/slides.md",id:58,no:59},__clicksElements:[],__preloaded:!1}}],hF=[],Ze=fF,mo=[{name:"play",path:"/",component:qx,children:[...Ze,...hF]},{name:"print",path:"/print",component:mw},{path:"",redirect:{path:"/1"}},{path:"/:pathMatch(.*)",redirect:{path:"/1"}}];{let t=function(n){if(!yo.remote||yo.remote===n.query.password)return!0;if(yo.remote&&n.query.password===void 0){const s=prompt("Enter password");if(yo.remote===s)return!0}return n.params.no?{path:`/${n.params.no}`}:{path:""}};mo.push({path:"/presenter/print",component:()=>Nn(()=>import("./PresenterPrint-a1117113.js"),["assets/PresenterPrint-a1117113.js","assets/NoteDisplay-3f931cc5.js"])}),mo.push({name:"notes",path:"/notes",component:()=>Nn(()=>import("./NotesView-3f2d81e5.js"),["assets/NotesView-3f2d81e5.js","assets/NoteDisplay-3f931cc5.js"]),beforeEnter:t}),mo.push({name:"presenter",path:"/presenter/:no",component:()=>Nn(()=>import("./Presenter-f5c90fd0.js"),["assets/Presenter-f5c90fd0.js","assets/NoteDisplay-3f931cc5.js","assets/DrawingControls-a18f4361.js","assets/Presenter-aa6741a8.css"]),beforeEnter:t}),mo.push({path:"/presenter",redirect:{path:"/presenter/1"}})}const wt=T8({history:S_("/demystifying-unicode/"),routes:mo});function yF(t,n,{mode:s="replace"}={}){return $({get(){const o=wt.currentRoute.value.query[t];return o==null?n??null:Array.isArray(o)?o.filter(Boolean):o},set(o){it(()=>{wt[T(s)]({query:{...wt.currentRoute.value.query,[t]:o}})})}})}const ih=Y(0);it(()=>{wt.afterEach(async()=>{await it(),ih.value+=1})});const ch=Y(0),qt=$(()=>wt.currentRoute.value),An=$(()=>qt.value.query.print!==void 0),mF=$(()=>qt.value.query.print==="clicks"),vn=$(()=>qt.value.query.embedded!==void 0),xt=$(()=>qt.value.path.startsWith("/presenter")),gF=$(()=>qt.value.path.startsWith("/notes")),Bo=$(()=>An.value&&!mF.value),qa=$(()=>qt.value.query.password),vF=$(()=>!xt.value&&(!Ee.remote||qa.value===Ee.remote)),Yu=yF("clicks","0"),_F=$(()=>Ze.length),bF=$(()=>qt.value.path),Ve=$(()=>Number.parseInt(bF.value.split(/\//g).slice(-1)[0])||1);$(()=>vr(Ve.value));const mt=$(()=>Ze.find(t=>t.path===`${Ve.value}`));$(()=>{var t,n,s;return(s=(n=(t=mt.value)==null?void 0:t.meta)==null?void 0:n.slide)==null?void 0:s.id});$(()=>{var t,n;return((n=(t=mt.value)==null?void 0:t.meta)==null?void 0:n.layout)||(Ve.value===1?"cover":"default")});const Hr=$(()=>Ze.find(t=>t.path===`${Math.min(Ze.length,Ve.value+1)}`)),xF=$(()=>Ze.find(t=>t.path===`${Math.max(1,Ve.value-1)}`)),AF=$(()=>{var t,n;return ih.value,((n=(t=mt.value)==null?void 0:t.meta)==null?void 0:n.__clicksElements)||[]}),Rt=$({get(){if(Bo.value)return 99999;let t=+(Yu.value||0);return Number.isNaN(t)&&(t=0),t},set(t){Yu.value=t.toString()}}),Ql=$(()=>{var t,n;return+(((n=(t=mt.value)==null?void 0:t.meta)==null?void 0:n.clicks)??AF.value.length)}),wF=$(()=>Ve.value<Ze.length||Rt.value<Ql.value),BF=$(()=>Ve.value>1||Rt.value>0),CF=$(()=>Ze.filter(t=>{var n,s;return(s=(n=t.meta)==null?void 0:n.slide)==null?void 0:s.title}).reduce((t,n)=>(ji(t,n),t),[])),kF=$(()=>Wi(CF.value,mt.value));$(()=>qi(kF.value));const FF=$(()=>$F(ch.value,mt.value,xF.value));ge(mt,(t,n)=>{ch.value=Number(t==null?void 0:t.path)-Number(n==null?void 0:n.path)});function Wn(){Ql.value<=Rt.value?jo():Rt.value+=1}async function qn(){Rt.value<=0?await Wo():Rt.value-=1}function vr(t){return xt.value?`/presenter/${t}`:`/${t}`}function jo(){const t=Math.min(Ze.length,Ve.value+1);return Vs(t)}async function Wo(t=!0){const n=Math.max(1,Ve.value-1);await Vs(n),t&&Ql.value&&wt.replace({query:{...qt.value.query,clicks:Ql.value}})}function Vs(t,n){return wt.push({path:vr(t),query:{...qt.value.query,clicks:n}})}function DF(t){const n=Y(0),{direction:s,distanceX:o,distanceY:l}=Xv(t,{onSwipeStart(r){r.pointerType==="touch"&&(Lo.value||(n.value=Ba()))},onSwipeEnd(r){if(r.pointerType!=="touch"||!n.value||Lo.value)return;const a=Math.abs(o.value),i=Math.abs(l.value);a/window.innerWidth>.3||a>100?s.value==="left"?Wn():qn():(i/window.innerHeight>.4||i>200)&&(s.value==="down"?Wo():jo())}})}async function Ha(){const{saveAs:t}=await Nn(()=>import("./FileSaver.min-23a5d44b.js").then(n=>n.F),[]);t(typeof Ee.download=="string"?Ee.download:Ee.exportFilename?`${Ee.exportFilename}.pdf`:"/demystifying-unicode/slidev-exported.pdf",`${Ee.title}.pdf`)}async function EF(t){var n,s;if(t==null){const o=(s=(n=mt.value)==null?void 0:n.meta)==null?void 0:s.slide;if(!(o!=null&&o.filepath))return!1;t=`${o.filepath}:${o.start}`}return await fetch(`/__open-in-editor?file=${encodeURIComponent(t)}`),!0}function ji(t,n,s=1){var l,r,a,i,c;const o=(r=(l=n.meta)==null?void 0:l.slide)==null?void 0:r.level;o&&o>s&&t.length>0?ji(t[t.length-1].children,n,s+1):t.push({children:[],level:s,path:n.path,hideInToc:!!((a=n.meta)!=null&&a.hideInToc),title:(c=(i=n.meta)==null?void 0:i.slide)==null?void 0:c.title})}function Wi(t,n,s=!1,o){return t.map(l=>{const r={...l,active:l.path===(n==null?void 0:n.path),hasActiveParent:s};return r.children.length>0&&(r.children=Wi(r.children,n,r.active||r.hasActiveParent,r)),o&&(r.active||r.activeParent)&&(o.activeParent=!0),r})}function qi(t,n=1){return t.filter(s=>!s.hideInToc).map(s=>({...s,children:qi(s.children,n+1)}))}const SF={"slide-left":"slide-left | slide-right","slide-right":"slide-right | slide-left","slide-up":"slide-up | slide-down","slide-down":"slide-down | slide-up"};function TF(t,n=!1){if(!t||(typeof t=="string"&&(t={name:t}),!t.name))return;let s=t.name.includes("|")?t.name:SF[t.name]||t.name;if(s.includes("|")){const[o,l]=s.split("|").map(r=>r.trim());s=n?l:o}if(s)return{...t,name:s}}function $F(t,n,s){var l,r;let o=t>0?(l=s==null?void 0:s.meta)==null?void 0:l.transition:(r=n==null?void 0:n.meta)==null?void 0:r.transition;return o||(o=Ee.transition),TF(o,t<0)}function OF(){const t=Ee.titleTemplate.replace("%s",Ee.title||"Slidev");Zd({title:t,htmlAttrs:Ee.htmlAttrs}),Eg(`${t} - shared`),Og(`${t} - drawings`);const n=`${location.origin}_${wg()}`;function s(){gF.value||!xt.value&&!_g.includes(location.host.split(":")[0])||(xt.value?(no("page",+Ve.value),no("clicks",Rt.value)):(no("viewerPage",+Ve.value),no("viewerClicks",Rt.value)),no("lastUpdate",{id:n,type:xt.value?"presenter":"viewer",time:new Date().getTime()}))}wt.afterEach(s),ge(Rt,s),Sg(o=>{var r;wt.currentRoute.value.path.match(/^\/(\d+|presenter)\/?/)&&((r=o.lastUpdate)==null?void 0:r.type)==="presenter"&&(+o.page!=+Ve.value||+Rt.value!=+o.clicks)&&wt.replace({path:vr(o.page),query:{...wt.currentRoute.value.query,clicks:o.clicks||0}})})}const UF=Ce({__name:"App",setup(t){return R(V),OF(),(n,s)=>{const o=Ws("RouterView"),l=Ws("StarportCarrier");return v(),k(De,null,[I(o),I(l)],64)}}}),PF=z(UF,[["__file","/home/ben/Workspace/demystifying-unicode/node_modules/@slidev/client/App.vue"]]);function Vr(t){return t!==null&&typeof t=="object"}function Va(t,n,s=".",o){if(!Vr(n))return Va(t,{},s,o);const l=Object.assign({},n);for(const r in t){if(r==="__proto__"||r==="constructor")continue;const a=t[r];a!=null&&(o&&o(l,r,a,s)||(Array.isArray(a)&&Array.isArray(l[r])?l[r]=[...a,...l[r]]:Vr(a)&&Vr(l[r])?l[r]=Va(a,l[r],(s?`${s}.`:"")+r.toString(),o):l[r]=a))}return l}function IF(t){return(...n)=>n.reduce((s,o)=>Va(s,o,"",t),{})}const MF=IF(),uh=1/60*1e3,LF=typeof performance<"u"?()=>performance.now():()=>Date.now(),ph=typeof window<"u"?t=>window.requestAnimationFrame(t):t=>setTimeout(()=>t(LF()),uh);function RF(t){let n=[],s=[],o=0,l=!1,r=!1;const a=new WeakSet,i={schedule:(c,u=!1,p=!1)=>{const f=p&&l,h=f?n:s;return u&&a.add(c),h.indexOf(c)===-1&&(h.push(c),f&&l&&(o=n.length)),c},cancel:c=>{const u=s.indexOf(c);u!==-1&&s.splice(u,1),a.delete(c)},process:c=>{if(l){r=!0;return}if(l=!0,[n,s]=[s,n],s.length=0,o=n.length,o)for(let u=0;u<o;u++){const p=n[u];p(c),a.has(p)&&(i.schedule(p),t())}l=!1,r&&(r=!1,i.process(c))}};return i}const NF=40;let za=!0,qo=!1,Ka=!1;const js={delta:0,timestamp:0},Jo=["read","update","preRender","render","postRender"],_r=Jo.reduce((t,n)=>(t[n]=RF(()=>qo=!0),t),{}),Ga=Jo.reduce((t,n)=>{const s=_r[n];return t[n]=(o,l=!1,r=!1)=>(qo||qF(),s.schedule(o,l,r)),t},{}),jF=Jo.reduce((t,n)=>(t[n]=_r[n].cancel,t),{});Jo.reduce((t,n)=>(t[n]=()=>_r[n].process(js),t),{});const WF=t=>_r[t].process(js),dh=t=>{qo=!1,js.delta=za?uh:Math.max(Math.min(t-js.timestamp,NF),1),js.timestamp=t,Ka=!0,Jo.forEach(WF),Ka=!1,qo&&(za=!1,ph(dh))},qF=()=>{qo=!0,za=!0,Ka||ph(dh)},fh=()=>js;function hh(t,n){var s={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&n.indexOf(o)<0&&(s[o]=t[o]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,o=Object.getOwnPropertySymbols(t);l<o.length;l++)n.indexOf(o[l])<0&&Object.prototype.propertyIsEnumerable.call(t,o[l])&&(s[o[l]]=t[o[l]]);return s}var Hi=function(){},Ho=function(){};Hi=function(t,n){!t&&typeof console<"u"&&console.warn(n)},Ho=function(t,n){if(!t)throw new Error(n)};const Ya=(t,n,s)=>Math.min(Math.max(s,t),n),zr=.001,HF=.01,Zu=10,VF=.05,zF=1;function KF({duration:t=800,bounce:n=.25,velocity:s=0,mass:o=1}){let l,r;Hi(t<=Zu*1e3,"Spring duration must be 10 seconds or less");let a=1-n;a=Ya(VF,zF,a),t=Ya(HF,Zu,t/1e3),a<1?(l=u=>{const p=u*a,f=p*t,h=p-s,y=Za(u,a),m=Math.exp(-f);return zr-h/y*m},r=u=>{const f=u*a*t,h=f*s+s,y=Math.pow(a,2)*Math.pow(u,2)*t,m=Math.exp(-f),b=Za(Math.pow(u,2),a);return(-l(u)+zr>0?-1:1)*((h-y)*m)/b}):(l=u=>{const p=Math.exp(-u*t),f=(u-s)*t+1;return-zr+p*f},r=u=>{const p=Math.exp(-u*t),f=(s-u)*(t*t);return p*f});const i=5/t,c=YF(l,r,i);if(t=t*1e3,isNaN(c))return{stiffness:100,damping:10,duration:t};{const u=Math.pow(c,2)*o;return{stiffness:u,damping:a*2*Math.sqrt(o*u),duration:t}}}const GF=12;function YF(t,n,s){let o=s;for(let l=1;l<GF;l++)o=o-t(o)/n(o);return o}function Za(t,n){return t*Math.sqrt(1-n*n)}const ZF=["duration","bounce"],QF=["stiffness","damping","mass"];function Qu(t,n){return n.some(s=>t[s]!==void 0)}function JF(t){let n=Object.assign({velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1},t);if(!Qu(t,QF)&&Qu(t,ZF)){const s=KF(t);n=Object.assign(Object.assign(Object.assign({},n),s),{velocity:0,mass:1}),n.isResolvedFromDuration=!0}return n}function Vi(t){var{from:n=0,to:s=1,restSpeed:o=2,restDelta:l}=t,r=hh(t,["from","to","restSpeed","restDelta"]);const a={done:!1,value:n};let{stiffness:i,damping:c,mass:u,velocity:p,duration:f,isResolvedFromDuration:h}=JF(r),y=Ju,m=Ju;function b(){const w=p?-(p/1e3):0,A=s-n,B=c/(2*Math.sqrt(i*u)),x=Math.sqrt(i/u)/1e3;if(l===void 0&&(l=Math.min(Math.abs(s-n)/100,.4)),B<1){const C=Za(x,B);y=F=>{const E=Math.exp(-B*x*F);return s-E*((w+B*x*A)/C*Math.sin(C*F)+A*Math.cos(C*F))},m=F=>{const E=Math.exp(-B*x*F);return B*x*E*(Math.sin(C*F)*(w+B*x*A)/C+A*Math.cos(C*F))-E*(Math.cos(C*F)*(w+B*x*A)-C*A*Math.sin(C*F))}}else if(B===1)y=C=>s-Math.exp(-x*C)*(A+(w+x*A)*C);else{const C=x*Math.sqrt(B*B-1);y=F=>{const E=Math.exp(-B*x*F),L=Math.min(C*F,300);return s-E*((w+B*x*A)*Math.sinh(L)+C*A*Math.cosh(L))/C}}}return b(),{next:w=>{const A=y(w);if(h)a.done=w>=f;else{const B=m(w)*1e3,x=Math.abs(B)<=o,C=Math.abs(s-A)<=l;a.done=x&&C}return a.value=a.done?s:A,a},flipTarget:()=>{p=-p,[n,s]=[s,n],b()}}}Vi.needsInterpolation=(t,n)=>typeof t=="string"||typeof n=="string";const Ju=t=>0,yh=(t,n,s)=>{const o=n-t;return o===0?1:(s-t)/o},zi=(t,n,s)=>-s*t+s*n+t,mh=(t,n)=>s=>Math.max(Math.min(s,n),t),Co=t=>t%1?Number(t.toFixed(5)):t,Vo=/(-)?([\d]*\.?[\d])+/g,Qa=/(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,XF=/^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function Xo(t){return typeof t=="string"}const el={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},ko=Object.assign(Object.assign({},el),{transform:mh(0,1)}),vl=Object.assign(Object.assign({},el),{default:1}),Ki=t=>({test:n=>Xo(n)&&n.endsWith(t)&&n.split(" ").length===1,parse:parseFloat,transform:n=>`${n}${t}`}),es=Ki("deg"),Fo=Ki("%"),_e=Ki("px"),Xu=Object.assign(Object.assign({},Fo),{parse:t=>Fo.parse(t)/100,transform:t=>Fo.transform(t*100)}),Gi=(t,n)=>s=>!!(Xo(s)&&XF.test(s)&&s.startsWith(t)||n&&Object.prototype.hasOwnProperty.call(s,n)),gh=(t,n,s)=>o=>{if(!Xo(o))return o;const[l,r,a,i]=o.match(Vo);return{[t]:parseFloat(l),[n]:parseFloat(r),[s]:parseFloat(a),alpha:i!==void 0?parseFloat(i):1}},fs={test:Gi("hsl","hue"),parse:gh("hue","saturation","lightness"),transform:({hue:t,saturation:n,lightness:s,alpha:o=1})=>"hsla("+Math.round(t)+", "+Fo.transform(Co(n))+", "+Fo.transform(Co(s))+", "+Co(ko.transform(o))+")"},eD=mh(0,255),Kr=Object.assign(Object.assign({},el),{transform:t=>Math.round(eD(t))}),Pn={test:Gi("rgb","red"),parse:gh("red","green","blue"),transform:({red:t,green:n,blue:s,alpha:o=1})=>"rgba("+Kr.transform(t)+", "+Kr.transform(n)+", "+Kr.transform(s)+", "+Co(ko.transform(o))+")"};function tD(t){let n="",s="",o="",l="";return t.length>5?(n=t.substr(1,2),s=t.substr(3,2),o=t.substr(5,2),l=t.substr(7,2)):(n=t.substr(1,1),s=t.substr(2,1),o=t.substr(3,1),l=t.substr(4,1),n+=n,s+=s,o+=o,l+=l),{red:parseInt(n,16),green:parseInt(s,16),blue:parseInt(o,16),alpha:l?parseInt(l,16)/255:1}}const Ja={test:Gi("#"),parse:tD,transform:Pn.transform},bt={test:t=>Pn.test(t)||Ja.test(t)||fs.test(t),parse:t=>Pn.test(t)?Pn.parse(t):fs.test(t)?fs.parse(t):Ja.parse(t),transform:t=>Xo(t)?t:t.hasOwnProperty("red")?Pn.transform(t):fs.transform(t)},vh="${c}",_h="${n}";function nD(t){var n,s,o,l;return isNaN(t)&&Xo(t)&&((s=(n=t.match(Vo))===null||n===void 0?void 0:n.length)!==null&&s!==void 0?s:0)+((l=(o=t.match(Qa))===null||o===void 0?void 0:o.length)!==null&&l!==void 0?l:0)>0}function bh(t){typeof t=="number"&&(t=`${t}`);const n=[];let s=0;const o=t.match(Qa);o&&(s=o.length,t=t.replace(Qa,vh),n.push(...o.map(bt.parse)));const l=t.match(Vo);return l&&(t=t.replace(Vo,_h),n.push(...l.map(el.parse))),{values:n,numColors:s,tokenised:t}}function xh(t){return bh(t).values}function Ah(t){const{values:n,numColors:s,tokenised:o}=bh(t),l=n.length;return r=>{let a=o;for(let i=0;i<l;i++)a=a.replace(i<s?vh:_h,i<s?bt.transform(r[i]):Co(r[i]));return a}}const sD=t=>typeof t=="number"?0:t;function oD(t){const n=xh(t);return Ah(t)(n.map(sD))}const tl={test:nD,parse:xh,createTransformer:Ah,getAnimatableNone:oD},lD=new Set(["brightness","contrast","saturate","opacity"]);function rD(t){let[n,s]=t.slice(0,-1).split("(");if(n==="drop-shadow")return t;const[o]=s.match(Vo)||[];if(!o)return t;const l=s.replace(o,"");let r=lD.has(n)?1:0;return o!==s&&(r*=100),n+"("+r+l+")"}const aD=/([a-z-]*)\(.*?\)/g,Xa=Object.assign(Object.assign({},tl),{getAnimatableNone:t=>{const n=t.match(aD);return n?n.map(rD).join(" "):t}});function Gr(t,n,s){return s<0&&(s+=1),s>1&&(s-=1),s<1/6?t+(n-t)*6*s:s<1/2?n:s<2/3?t+(n-t)*(2/3-s)*6:t}function ep({hue:t,saturation:n,lightness:s,alpha:o}){t/=360,n/=100,s/=100;let l=0,r=0,a=0;if(!n)l=r=a=s;else{const i=s<.5?s*(1+n):s+n-s*n,c=2*s-i;l=Gr(c,i,t+1/3),r=Gr(c,i,t),a=Gr(c,i,t-1/3)}return{red:Math.round(l*255),green:Math.round(r*255),blue:Math.round(a*255),alpha:o}}const iD=(t,n,s)=>{const o=t*t,l=n*n;return Math.sqrt(Math.max(0,s*(l-o)+o))},cD=[Ja,Pn,fs],tp=t=>cD.find(n=>n.test(t)),np=t=>`'${t}' is not an animatable color. Use the equivalent color code instead.`,wh=(t,n)=>{let s=tp(t),o=tp(n);Ho(!!s,np(t)),Ho(!!o,np(n));let l=s.parse(t),r=o.parse(n);s===fs&&(l=ep(l),s=Pn),o===fs&&(r=ep(r),o=Pn);const a=Object.assign({},l);return i=>{for(const c in a)c!=="alpha"&&(a[c]=iD(l[c],r[c],i));return a.alpha=zi(l.alpha,r.alpha,i),s.transform(a)}},uD=t=>typeof t=="number",pD=(t,n)=>s=>n(t(s)),Bh=(...t)=>t.reduce(pD);function Ch(t,n){return uD(t)?s=>zi(t,n,s):bt.test(t)?wh(t,n):Fh(t,n)}const kh=(t,n)=>{const s=[...t],o=s.length,l=t.map((r,a)=>Ch(r,n[a]));return r=>{for(let a=0;a<o;a++)s[a]=l[a](r);return s}},dD=(t,n)=>{const s=Object.assign(Object.assign({},t),n),o={};for(const l in s)t[l]!==void 0&&n[l]!==void 0&&(o[l]=Ch(t[l],n[l]));return l=>{for(const r in o)s[r]=o[r](l);return s}};function sp(t){const n=tl.parse(t),s=n.length;let o=0,l=0,r=0;for(let a=0;a<s;a++)o||typeof n[a]=="number"?o++:n[a].hue!==void 0?r++:l++;return{parsed:n,numNumbers:o,numRGB:l,numHSL:r}}const Fh=(t,n)=>{const s=tl.createTransformer(n),o=sp(t),l=sp(n);return o.numHSL===l.numHSL&&o.numRGB===l.numRGB&&o.numNumbers>=l.numNumbers?Bh(kh(o.parsed,l.parsed),s):(Hi(!0,`Complex values '${t}' and '${n}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`),a=>`${a>0?n:t}`)},fD=(t,n)=>s=>zi(t,n,s);function hD(t){if(typeof t=="number")return fD;if(typeof t=="string")return bt.test(t)?wh:Fh;if(Array.isArray(t))return kh;if(typeof t=="object")return dD}function yD(t,n,s){const o=[],l=s||hD(t[0]),r=t.length-1;for(let a=0;a<r;a++){let i=l(t[a],t[a+1]);if(n){const c=Array.isArray(n)?n[a]:n;i=Bh(c,i)}o.push(i)}return o}function mD([t,n],[s]){return o=>s(yh(t,n,o))}function gD(t,n){const s=t.length,o=s-1;return l=>{let r=0,a=!1;if(l<=t[0]?a=!0:l>=t[o]&&(r=o-1,a=!0),!a){let c=1;for(;c<s&&!(t[c]>l||c===o);c++);r=c-1}const i=yh(t[r],t[r+1],l);return n[r](i)}}function Dh(t,n,{clamp:s=!0,ease:o,mixer:l}={}){const r=t.length;Ho(r===n.length,"Both input and output ranges must be the same length"),Ho(!o||!Array.isArray(o)||o.length===r-1,"Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values."),t[0]>t[r-1]&&(t=[].concat(t),n=[].concat(n),t.reverse(),n.reverse());const a=yD(n,o,l),i=r===2?mD(t,a):gD(t,a);return s?c=>i(Ya(t[0],t[r-1],c)):i}const br=t=>n=>1-t(1-n),Yi=t=>n=>n<=.5?t(2*n)/2:(2-t(2*(1-n)))/2,vD=t=>n=>Math.pow(n,t),Eh=t=>n=>n*n*((t+1)*n-t),_D=t=>{const n=Eh(t);return s=>(s*=2)<1?.5*n(s):.5*(2-Math.pow(2,-10*(s-1)))},Sh=1.525,bD=4/11,xD=8/11,AD=9/10,Th=t=>t,Zi=vD(2),wD=br(Zi),$h=Yi(Zi),Oh=t=>1-Math.sin(Math.acos(t)),Uh=br(Oh),BD=Yi(Uh),Qi=Eh(Sh),CD=br(Qi),kD=Yi(Qi),FD=_D(Sh),DD=4356/361,ED=35442/1805,SD=16061/1805,Jl=t=>{if(t===1||t===0)return t;const n=t*t;return t<bD?7.5625*n:t<xD?9.075*n-9.9*t+3.4:t<AD?DD*n-ED*t+SD:10.8*t*t-20.52*t+10.72},TD=br(Jl),$D=t=>t<.5?.5*(1-Jl(1-t*2)):.5*Jl(t*2-1)+.5;function OD(t,n){return t.map(()=>n||$h).splice(0,t.length-1)}function UD(t){const n=t.length;return t.map((s,o)=>o!==0?o/(n-1):0)}function PD(t,n){return t.map(s=>s*n)}function Dl({from:t=0,to:n=1,ease:s,offset:o,duration:l=300}){const r={done:!1,value:t},a=Array.isArray(n)?n:[t,n],i=PD(o&&o.length===a.length?o:UD(a),l);function c(){return Dh(i,a,{ease:Array.isArray(s)?s:OD(a,s)})}let u=c();return{next:p=>(r.value=u(p),r.done=p>=l,r),flipTarget:()=>{a.reverse(),u=c()}}}function ID({velocity:t=0,from:n=0,power:s=.8,timeConstant:o=350,restDelta:l=.5,modifyTarget:r}){const a={done:!1,value:n};let i=s*t;const c=n+i,u=r===void 0?c:r(c);return u!==c&&(i=u-n),{next:p=>{const f=-i*Math.exp(-p/o);return a.done=!(f>l||f<-l),a.value=a.done?u:u+f,a},flipTarget:()=>{}}}const op={keyframes:Dl,spring:Vi,decay:ID};function MD(t){if(Array.isArray(t.to))return Dl;if(op[t.type])return op[t.type];const n=new Set(Object.keys(t));return n.has("ease")||n.has("duration")&&!n.has("dampingRatio")?Dl:n.has("dampingRatio")||n.has("stiffness")||n.has("mass")||n.has("damping")||n.has("restSpeed")||n.has("restDelta")?Vi:Dl}function Ph(t,n,s=0){return t-n-s}function LD(t,n,s=0,o=!0){return o?Ph(n+-t,n,s):n-(t-n)+s}function RD(t,n,s,o){return o?t>=n+s:t<=-s}const ND=t=>{const n=({delta:s})=>t(s);return{start:()=>Ga.update(n,!0),stop:()=>jF.update(n)}};function Ih(t){var n,s,{from:o,autoplay:l=!0,driver:r=ND,elapsed:a=0,repeat:i=0,repeatType:c="loop",repeatDelay:u=0,onPlay:p,onStop:f,onComplete:h,onRepeat:y,onUpdate:m}=t,b=hh(t,["from","autoplay","driver","elapsed","repeat","repeatType","repeatDelay","onPlay","onStop","onComplete","onRepeat","onUpdate"]);let{to:w}=b,A,B=0,x=b.duration,C,F=!1,E=!0,L;const O=MD(b);!((s=(n=O).needsInterpolation)===null||s===void 0)&&s.call(n,o,w)&&(L=Dh([0,100],[o,w],{clamp:!1}),o=0,w=100);const W=O(Object.assign(Object.assign({},b),{from:o,to:w}));function ne(){B++,c==="reverse"?(E=B%2===0,a=LD(a,x,u,E)):(a=Ph(a,x,u),c==="mirror"&&W.flipTarget()),F=!1,y&&y()}function ue(){A.stop(),h&&h()}function Z(ve){if(E||(ve=-ve),a+=ve,!F){const be=W.next(Math.max(0,a));C=be.value,L&&(C=L(C)),F=E?be.done:a<=0}m==null||m(C),F&&(B===0&&(x??(x=a)),B<i?RD(a,x,u,E)&&ne():ue())}function ye(){p==null||p(),A=r(Z),A.start()}return l&&ye(),{stop:()=>{f==null||f(),A.stop()}}}function Mh(t,n){return n?t*(1e3/n):0}function jD({from:t=0,velocity:n=0,min:s,max:o,power:l=.8,timeConstant:r=750,bounceStiffness:a=500,bounceDamping:i=10,restDelta:c=1,modifyTarget:u,driver:p,onUpdate:f,onComplete:h,onStop:y}){let m;function b(x){return s!==void 0&&x<s||o!==void 0&&x>o}function w(x){return s===void 0?o:o===void 0||Math.abs(s-x)<Math.abs(o-x)?s:o}function A(x){m==null||m.stop(),m=Ih(Object.assign(Object.assign({},x),{driver:p,onUpdate:C=>{var F;f==null||f(C),(F=x.onUpdate)===null||F===void 0||F.call(x,C)},onComplete:h,onStop:y}))}function B(x){A(Object.assign({type:"spring",stiffness:a,damping:i,restDelta:c},x))}if(b(t))B({from:t,velocity:n,to:w(t)});else{let x=l*n+t;typeof u<"u"&&(x=u(x));const C=w(x),F=C===s?-1:1;let E,L;const O=W=>{E=L,L=W,n=Mh(W-E,fh().delta),(F===1&&W>C||F===-1&&W<C)&&B({from:W,to:C,velocity:n})};A({type:"decay",from:t,velocity:n,timeConstant:r,power:l,restDelta:c,modifyTarget:u,onUpdate:b(x)?O:void 0})}return{stop:()=>m==null?void 0:m.stop()}}const Lh=(t,n)=>1-3*n+3*t,Rh=(t,n)=>3*n-6*t,Nh=t=>3*t,Xl=(t,n,s)=>((Lh(n,s)*t+Rh(n,s))*t+Nh(n))*t,jh=(t,n,s)=>3*Lh(n,s)*t*t+2*Rh(n,s)*t+Nh(n),WD=1e-7,qD=10;function HD(t,n,s,o,l){let r,a,i=0;do a=n+(s-n)/2,r=Xl(a,o,l)-t,r>0?s=a:n=a;while(Math.abs(r)>WD&&++i<qD);return a}const VD=8,zD=.001;function KD(t,n,s,o){for(let l=0;l<VD;++l){const r=jh(n,s,o);if(r===0)return n;const a=Xl(n,s,o)-t;n-=a/r}return n}const El=11,_l=1/(El-1);function GD(t,n,s,o){if(t===n&&s===o)return Th;const l=new Float32Array(El);for(let a=0;a<El;++a)l[a]=Xl(a*_l,t,s);function r(a){let i=0,c=1;const u=El-1;for(;c!==u&&l[c]<=a;++c)i+=_l;--c;const p=(a-l[c])/(l[c+1]-l[c]),f=i+p*_l,h=jh(f,t,s);return h>=zD?KD(a,f,t,s):h===0?f:HD(a,i,i+_l,t,s)}return a=>a===0||a===1?a:Xl(r(a),n,o)}const Yr={};class YD{constructor(){this.subscriptions=new Set}add(n){return this.subscriptions.add(n),()=>this.subscriptions.delete(n)}notify(n,s,o){if(this.subscriptions.size)for(const l of this.subscriptions)l(n,s,o)}clear(){this.subscriptions.clear()}}function lp(t){return!isNaN(parseFloat(t))}class ZD{constructor(n){this.timeDelta=0,this.lastUpdated=0,this.updateSubscribers=new YD,this.canTrackVelocity=!1,this.updateAndNotify=s=>{this.prev=this.current,this.current=s;const{delta:o,timestamp:l}=fh();this.lastUpdated!==l&&(this.timeDelta=o,this.lastUpdated=l),Ga.postRender(this.scheduleVelocityCheck),this.updateSubscribers.notify(this.current)},this.scheduleVelocityCheck=()=>Ga.postRender(this.velocityCheck),this.velocityCheck=({timestamp:s})=>{this.canTrackVelocity||(this.canTrackVelocity=lp(this.current)),s!==this.lastUpdated&&(this.prev=this.current)},this.prev=this.current=n,this.canTrackVelocity=lp(this.current)}onChange(n){return this.updateSubscribers.add(n)}clearListeners(){this.updateSubscribers.clear()}set(n){this.updateAndNotify(n)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?Mh(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(n){return this.stop(),new Promise(s=>{const{stop:o}=n(s);this.stopAnimation=o}).then(()=>this.clearAnimation())}stop(){this.stopAnimation&&this.stopAnimation(),this.clearAnimation()}isAnimating(){return!!this.stopAnimation}clearAnimation(){this.stopAnimation=null}destroy(){this.updateSubscribers.clear(),this.stop()}}function QD(t){return new ZD(t)}const{isArray:JD}=Array;function XD(){const t=Y({}),n=o=>{const l=r=>{t.value[r]&&(t.value[r].stop(),t.value[r].destroy(),delete t.value[r])};o?JD(o)?o.forEach(l):l(o):Object.keys(t.value).forEach(l)},s=(o,l,r)=>{if(t.value[o])return t.value[o];const a=QD(l);return a.onChange(i=>r[o]=i),t.value[o]=a,a};return tv(n),{motionValues:t,get:s,stop:n}}function eE(t){return Array.isArray(t)}function ts(){return{type:"spring",stiffness:500,damping:25,restDelta:.5,restSpeed:10}}function Zr(t){return{type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restDelta:.01,restSpeed:10}}function tE(t){return{type:"spring",stiffness:550,damping:t===0?100:30,restDelta:.01,restSpeed:10}}function Qr(){return{type:"keyframes",ease:"linear",duration:300}}function nE(t){return{type:"keyframes",duration:800,values:t}}const rp={default:tE,x:ts,y:ts,z:ts,rotate:ts,rotateX:ts,rotateY:ts,rotateZ:ts,scaleX:Zr,scaleY:Zr,scale:Zr,backgroundColor:Qr,color:Qr,opacity:Qr};function Wh(t,n){let s;return eE(n)?s=nE:s=rp[t]||rp.default,{to:n,...s(n)}}const ap={...el,transform:Math.round},qh={color:bt,backgroundColor:bt,outlineColor:bt,fill:bt,stroke:bt,borderColor:bt,borderTopColor:bt,borderRightColor:bt,borderBottomColor:bt,borderLeftColor:bt,borderWidth:_e,borderTopWidth:_e,borderRightWidth:_e,borderBottomWidth:_e,borderLeftWidth:_e,borderRadius:_e,radius:_e,borderTopLeftRadius:_e,borderTopRightRadius:_e,borderBottomRightRadius:_e,borderBottomLeftRadius:_e,width:_e,maxWidth:_e,height:_e,maxHeight:_e,size:_e,top:_e,right:_e,bottom:_e,left:_e,padding:_e,paddingTop:_e,paddingRight:_e,paddingBottom:_e,paddingLeft:_e,margin:_e,marginTop:_e,marginRight:_e,marginBottom:_e,marginLeft:_e,rotate:es,rotateX:es,rotateY:es,rotateZ:es,scale:vl,scaleX:vl,scaleY:vl,scaleZ:vl,skew:es,skewX:es,skewY:es,distance:_e,translateX:_e,translateY:_e,translateZ:_e,x:_e,y:_e,z:_e,perspective:_e,transformPerspective:_e,opacity:ko,originX:Xu,originY:Xu,originZ:_e,zIndex:ap,filter:Xa,WebkitFilter:Xa,fillOpacity:ko,strokeOpacity:ko,numOctaves:ap},Ji=t=>qh[t];function Hh(t,n){return n&&typeof t=="number"&&n.transform?n.transform(t):t}function sE(t,n){let s=Ji(t);return s!==Xa&&(s=tl),s.getAnimatableNone?s.getAnimatableNone(n):void 0}const oE={linear:Th,easeIn:Zi,easeInOut:$h,easeOut:wD,circIn:Oh,circInOut:BD,circOut:Uh,backIn:Qi,backInOut:kD,backOut:CD,anticipate:FD,bounceIn:TD,bounceInOut:$D,bounceOut:Jl};function ip(t){if(Array.isArray(t)){const[n,s,o,l]=t;return GD(n,s,o,l)}else if(typeof t=="string")return oE[t];return t}function lE(t){return Array.isArray(t)&&typeof t[0]!="number"}function cp(t,n){return t==="zIndex"?!1:!!(typeof n=="number"||Array.isArray(n)||typeof n=="string"&&tl.test(n)&&!n.startsWith("url("))}function rE(t){return Array.isArray(t.to)&&t.to[0]===null&&(t.to=[...t.to],t.to[0]=t.from),t}function aE({ease:t,times:n,delay:s,...o}){const l={...o};return n&&(l.offset=n),t&&(l.ease=lE(t)?t.map(ip):ip(t)),s&&(l.elapsed=-s),l}function iE(t,n,s){return Array.isArray(n.to)&&(t.duration||(t.duration=800)),rE(n),cE(t)||(t={...t,...Wh(s,n.to)}),{...n,...aE(t)}}function cE({delay:t,repeat:n,repeatType:s,repeatDelay:o,from:l,...r}){return!!Object.keys(r).length}function uE(t,n){return t[n]||t.default||t}function pE(t,n,s,o,l){const r=uE(o,t);let a=r.from===null||r.from===void 0?n.get():r.from;const i=cp(t,s);a==="none"&&i&&typeof s=="string"&&(a=sE(t,s));const c=cp(t,a);function u(f){const h={from:a,to:s,velocity:o.velocity?o.velocity:n.getVelocity(),onUpdate:y=>n.set(y)};return r.type==="inertia"||r.type==="decay"?jD({...h,...r}):Ih({...iE(r,h,t),onUpdate:y=>{h.onUpdate(y),r.onUpdate&&r.onUpdate(y)},onComplete:()=>{o.onComplete&&o.onComplete(),l&&l(),f&&f()}})}function p(f){return n.set(s),o.onComplete&&o.onComplete(),l&&l(),f&&f(),{stop:()=>{}}}return!c||!i||r.type===!1?p:u}function dE(){const{motionValues:t,stop:n,get:s}=XD();return{motionValues:t,stop:n,push:(l,r,a,i={},c)=>{const u=a[l],p=s(l,u,a);if(i&&i.immediate){p.set(r);return}const f=pE(l,p,r,i,c);p.start(f)}}}function fE(t,n={},{motionValues:s,push:o,stop:l}=dE()){const r=T(n),a=Y(!1);ge(s,f=>{a.value=Object.values(f).filter(h=>h.isAnimating()).length>0},{immediate:!0,deep:!0});const i=f=>{if(!r||!r[f])throw new Error(`The variant ${f} does not exist.`);return r[f]},c=f=>(typeof f=="string"&&(f=i(f)),Promise.all(Object.entries(f).map(([h,y])=>{if(h!=="transition")return new Promise(m=>o(h,y,t,f.transition||Wh(h,f[h]),m))}).filter(Boolean)));return{isAnimating:a,apply:c,set:f=>{const h=wa(f)?f:i(f);Object.entries(h).forEach(([y,m])=>{y!=="transition"&&o(y,m,t,{immediate:!0})})},leave:async f=>{let h;if(r&&(r.leave&&(h=r.leave),!r.leave&&r.initial&&(h=r.initial)),!h){f();return}await c(h),f()},stop:l}}const Xi=typeof window<"u",hE=()=>Xi&&window.onpointerdown===null,yE=()=>Xi&&window.ontouchstart===null,mE=()=>Xi&&window.onmousedown===null;function gE({target:t,state:n,variants:s,apply:o}){const l=T(s),r=Y(!1),a=Y(!1),i=Y(!1),c=$(()=>{let p=[];return l&&(l.hovered&&(p=[...p,...Object.keys(l.hovered)]),l.tapped&&(p=[...p,...Object.keys(l.tapped)]),l.focused&&(p=[...p,...Object.keys(l.focused)])),p}),u=$(()=>{const p={};Object.assign(p,n.value),r.value&&l.hovered&&Object.assign(p,l.hovered),a.value&&l.tapped&&Object.assign(p,l.tapped),i.value&&l.focused&&Object.assign(p,l.focused);for(const f in p)c.value.includes(f)||delete p[f];return p});l.hovered&&(xe(t,"mouseenter",()=>r.value=!0),xe(t,"mouseleave",()=>{r.value=!1,a.value=!1}),xe(t,"mouseout",()=>{r.value=!1,a.value=!1})),l.tapped&&(mE()&&(xe(t,"mousedown",()=>a.value=!0),xe(t,"mouseup",()=>a.value=!1)),hE()&&(xe(t,"pointerdown",()=>a.value=!0),xe(t,"pointerup",()=>a.value=!1)),yE()&&(xe(t,"touchstart",()=>a.value=!0),xe(t,"touchend",()=>a.value=!1))),l.focused&&(xe(t,"focus",()=>i.value=!0),xe(t,"blur",()=>i.value=!1)),ge(u,o)}function vE({set:t,target:n,variants:s,variant:o}){const l=T(s);ge(()=>n,()=>{l&&(l.initial&&t("initial"),l.enter&&(o.value="enter"))},{immediate:!0,flush:"pre"})}function _E({state:t,apply:n}){ge(t,s=>{s&&n(s)},{immediate:!0})}function bE({target:t,variants:n,variant:s}){const o=T(n);o&&(o.visible||o.visibleOnce)&&Gv(t,([{isIntersecting:l}])=>{o.visible?l?s.value="visible":s.value="initial":o.visibleOnce&&(l&&s.value!=="visibleOnce"?s.value="visibleOnce":s.value||(s.value="initial"))})}function xE(t,n={syncVariants:!0,lifeCycleHooks:!0,visibilityHooks:!0,eventListeners:!0}){n.lifeCycleHooks&&vE(t),n.syncVariants&&_E(t),n.visibilityHooks&&bE(t),n.eventListeners&&gE(t)}function Vh(t={}){const n=He({...t}),s=Y({});return ge(n,()=>{const o={};for(const[l,r]of Object.entries(n)){const a=Ji(l),i=Hh(r,a);o[l]=i}s.value=o},{immediate:!0,deep:!0}),{state:n,style:s}}function ec(t,n){ge(()=>ct(t),s=>{s&&n(s)},{immediate:!0})}const AE={x:"translateX",y:"translateY",z:"translateZ"};function zh(t={},n=!0){const s=He({...t}),o=Y("");return ge(s,l=>{let r="",a=!1;if(n&&(l.x||l.y||l.z)){const i=[l.x||0,l.y||0,l.z||0].map(_e.transform).join(",");r+=`translate3d(${i}) `,a=!0}for(const[i,c]of Object.entries(l)){if(n&&(i==="x"||i==="y"||i==="z"))continue;const u=Ji(i),p=Hh(c,u);r+=`${AE[i]||i}(${p}) `}n&&!a&&(r+="translateZ(0px) "),o.value=r.trim()},{immediate:!0,deep:!0}),{state:s,transform:o}}const wE=["","X","Y","Z"],BE=["perspective","translate","scale","rotate","skew"],Kh=["transformPerspective","x","y","z"];BE.forEach(t=>{wE.forEach(n=>{const s=t+n;Kh.push(s)})});const CE=new Set(Kh);function tc(t){return CE.has(t)}const kE=new Set(["originX","originY","originZ"]);function Gh(t){return kE.has(t)}function FE(t){const n={},s={};return Object.entries(t).forEach(([o,l])=>{tc(o)||Gh(o)?n[o]=l:s[o]=l}),{transform:n,style:s}}function Yh(t){const{transform:n,style:s}=FE(t),{transform:o}=zh(n),{style:l}=Vh(s);return o.value&&(l.value.transform=o.value),l.value}function DE(t,n){let s,o;const{state:l,style:r}=Vh();return ec(t,a=>{o=a;for(const i of Object.keys(qh))a.style[i]===null||a.style[i]===""||tc(i)||Gh(i)||(l[i]=a.style[i]);s&&Object.entries(s).forEach(([i,c])=>a.style[i]=c),n&&n(l)}),ge(r,a=>{if(!o){s=a;return}for(const i in a)o.style[i]=a[i]},{immediate:!0}),{style:l}}function EE(t){const n=t.trim().split(/\) |\)/);if(n.length===1)return{};const s=o=>o.endsWith("px")||o.endsWith("deg")?parseFloat(o):isNaN(Number(o))?Number(o):o;return n.reduce((o,l)=>{if(!l)return o;const[r,a]=l.split("("),c=a.split(",").map(p=>s(p.endsWith(")")?p.replace(")",""):p.trim())),u=c.length===1?c[0]:c;return{...o,[r]:u}},{})}function SE(t,n){Object.entries(EE(n)).forEach(([s,o])=>{const l=["x","y","z"];if(s==="translate3d"){if(o===0){l.forEach(r=>t[r]=0);return}o.forEach((r,a)=>t[l[a]]=r);return}if(o=parseFloat(o),s==="translateX"){t.x=o;return}if(s==="translateY"){t.y=o;return}if(s==="translateZ"){t.z=o;return}t[s]=o})}function TE(t,n){let s,o;const{state:l,transform:r}=zh();return ec(t,a=>{o=a,a.style.transform&&SE(l,a.style.transform),s&&(a.style.transform=s),n&&n(l)}),ge(r,a=>{if(!o){s=a;return}o.style.transform=a},{immediate:!0}),{transform:l}}function $E(t,n){const s=He({}),o=a=>Object.entries(a).forEach(([i,c])=>s[i]=c),{style:l}=DE(t,o),{transform:r}=TE(t,o);return ge(s,a=>{Object.entries(a).forEach(([i,c])=>{const u=tc(i)?r:l;u[i]&&u[i]===c||(u[i]=c)})},{immediate:!0,deep:!0}),ec(t,()=>n&&o(n)),{motionProperties:s,style:l,transform:r}}function OE(t={}){const n=T(t),s=Y();return{state:$(()=>{if(s.value)return n[s.value]}),variant:s}}function Zh(t,n={},s){const{motionProperties:o}=$E(t),{variant:l,state:r}=OE(n),a=fE(o,n),i={target:t,variant:l,variants:n,state:r,motionProperties:o,...a};return xE(i,s),i}const UE=["initial","enter","leave","visible","visible-once","hovered","tapped","focused","delay"];function PE(t,n){const s=t.props?t.props:t.data&&t.data.attrs?t.data.attrs:{};s&&(s.variants&&wa(s.variants)&&(n.value={...n.value,...s.variants}),UE.forEach(o=>{if(o==="delay"){if(s&&s[o]&&typeof s[o]=="number"){const l=s[o];n&&n.value&&(n.value.enter&&(n.value.enter.transition||(n.value.enter.transition={}),n.value.enter.transition={delay:l,...n.value.enter.transition}),n.value.visible&&(n.value.visible.transition||(n.value.visible.transition={}),n.value.visible.transition={delay:l,...n.value.visible.transition}),n.value.visibleOnce&&(n.value.visibleOnce.transition||(n.value.visibleOnce.transition={}),n.value.visibleOnce.transition={delay:l,...n.value.visibleOnce.transition}))}return}o==="visible-once"&&(o="visibleOnce"),s&&s[o]&&wa(s[o])&&(n.value[o]=s[o])}))}function Jr(t){return{created:(s,o,l)=>{const r=o.value&&typeof o.value=="string"?o.value:l.key;r&&Yr[r]&&Yr[r].stop();const a=Y(t||{});typeof o.value=="object"&&(a.value=o.value),PE(l,a);const i=Zh(s,a);s.motionInstance=i,r&&(Yr[r]=i)},getSSRProps(s,o){let{initial:l}=s.value||o&&(o==null?void 0:o.props)||{};l=T(l);const r=MF((t==null?void 0:t.initial)||{},l||{});return!r||Object.keys(r).length===0?void 0:{style:Yh(r)}}}}const IE={initial:{opacity:0},enter:{opacity:1}},ME={initial:{opacity:0},visible:{opacity:1}},LE={initial:{opacity:0},visibleOnce:{opacity:1}},RE={initial:{scale:0,opacity:0},enter:{scale:1,opacity:1}},NE={initial:{scale:0,opacity:0},visible:{scale:1,opacity:1}},jE={initial:{scale:0,opacity:0},visibleOnce:{scale:1,opacity:1}},WE={initial:{x:-100,rotate:90,opacity:0},enter:{x:0,rotate:0,opacity:1}},qE={initial:{x:-100,rotate:90,opacity:0},visible:{x:0,rotate:0,opacity:1}},HE={initial:{x:-100,rotate:90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},VE={initial:{x:100,rotate:-90,opacity:0},enter:{x:0,rotate:0,opacity:1}},zE={initial:{x:100,rotate:-90,opacity:0},visible:{x:0,rotate:0,opacity:1}},KE={initial:{x:100,rotate:-90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},GE={initial:{y:-100,rotate:-90,opacity:0},enter:{y:0,rotate:0,opacity:1}},YE={initial:{y:-100,rotate:-90,opacity:0},visible:{y:0,rotate:0,opacity:1}},ZE={initial:{y:-100,rotate:-90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},QE={initial:{y:100,rotate:90,opacity:0},enter:{y:0,rotate:0,opacity:1}},JE={initial:{y:100,rotate:90,opacity:0},visible:{y:0,rotate:0,opacity:1}},XE={initial:{y:100,rotate:90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},eS={initial:{x:-100,opacity:0},enter:{x:0,opacity:1}},tS={initial:{x:-100,opacity:0},visible:{x:0,opacity:1}},nS={initial:{x:-100,opacity:0},visibleOnce:{x:0,opacity:1}},sS={initial:{x:100,opacity:0},enter:{x:0,opacity:1}},oS={initial:{x:100,opacity:0},visible:{x:0,opacity:1}},lS={initial:{x:100,opacity:0},visibleOnce:{x:0,opacity:1}},rS={initial:{y:-100,opacity:0},enter:{y:0,opacity:1}},aS={initial:{y:-100,opacity:0},visible:{y:0,opacity:1}},iS={initial:{y:-100,opacity:0},visibleOnce:{y:0,opacity:1}},cS={initial:{y:100,opacity:0},enter:{y:0,opacity:1}},uS={initial:{y:100,opacity:0},visible:{y:0,opacity:1}},pS={initial:{y:100,opacity:0},visibleOnce:{y:0,opacity:1}},ei={__proto__:null,fade:IE,fadeVisible:ME,fadeVisibleOnce:LE,pop:RE,popVisible:NE,popVisibleOnce:jE,rollBottom:QE,rollLeft:WE,rollRight:VE,rollTop:GE,rollVisibleBottom:JE,rollVisibleLeft:qE,rollVisibleOnceBottom:XE,rollVisibleOnceLeft:HE,rollVisibleOnceRight:KE,rollVisibleOnceTop:ZE,rollVisibleRight:zE,rollVisibleTop:YE,slideBottom:cS,slideLeft:eS,slideRight:sS,slideTop:rS,slideVisibleBottom:uS,slideVisibleLeft:tS,slideVisibleOnceBottom:pS,slideVisibleOnceLeft:nS,slideVisibleOnceRight:lS,slideVisibleOnceTop:iS,slideVisibleRight:oS,slideVisibleTop:aS},dS=Ce({props:{is:{type:[String,Object],required:!1},preset:{type:String,required:!1},instance:{type:Object,required:!1},variants:{type:Object,required:!1},initial:{type:Object,required:!1},enter:{type:Object,required:!1},leave:{type:Object,required:!1},visible:{type:Object,required:!1},visibleOnce:{type:Object,required:!1},hovered:{type:Object,required:!1},tapped:{type:Object,required:!1},focused:{type:Object,required:!1},delay:{type:[Number,String],required:!1}},setup(t){var i;const n=Ym(),s=He({});if(!t.is&&!n.default)return()=>tt("div",{});const o=$(()=>{let c;return t.preset&&(c=ei[t.preset]),c}),l=$(()=>({initial:t.initial,enter:t.enter,leave:t.leave,visible:t.visible,visibleOnce:t.visibleOnce,hovered:t.hovered,tapped:t.tapped,focused:t.focused})),r=$(()=>{const c={...l.value,...o.value||{},...t.variants||{}};return t.delay&&(c.enter.transition={...c.enter.transition},c.enter.transition.delay=parseInt(t.delay)),c}),a=$(()=>{if(!t.is)return;let c=t.is;return typeof a.value=="string"&&!Dp(c)&&(c=Ws(c)),c});if(((i=process==null?void 0:process.env)==null?void 0:i.NODE_ENV)==="development"||process!=null&&process.dev){const c=u=>{var p;(p=u.variants)!=null&&p.initial&&u.set("initial"),setTimeout(()=>{var f,h,y;(f=u.variants)!=null&&f.enter&&u.apply("enter"),(h=u.variants)!=null&&h.visible&&u.apply("visible"),(y=u.variants)!=null&&y.visibleOnce&&u.apply("visibleOnce")},10)};dr(()=>Object.entries(s).forEach(([u,p])=>c(p)))}return{slots:n,component:a,motionConfig:r,instances:s}},render({slots:t,motionConfig:n,instances:s,component:o}){var i;const l=Yh(n.initial||{}),r=(c,u)=>(c.props||(c.props={}),c.props.style=l,c.props.onVnodeMounted=({el:p})=>{const f=Zh(p,n);s[u]=f},c);if(o){const c=tt(o,void 0,t);return r(c,0),c}return(((i=t.default)==null?void 0:i.call(t))||[]).map((c,u)=>r(c,u))}});function fS(t){const n="àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;",s="aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------",o=new RegExp(n.split("").join("|"),"g");return t.toString().replace(/[A-Z]/g,l=>`-${l}`).toLowerCase().replace(/\s+/g,"-").replace(o,l=>s.charAt(n.indexOf(l))).replace(/&/g,"-and-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}const hS={install(t,n){if(t.directive("motion",Jr()),t.component("Motion",dS),!n||n&&!n.excludePresets)for(const s in ei){const o=ei[s];t.directive(`motion-${fS(s)}`,Jr(o))}if(n&&n.directives)for(const s in n.directives){const o=n.directives[s];o.initial,t.directive(`motion-${s}`,Jr(o))}}};var up;const Do=typeof window<"u",yS=Object.prototype.toString,mS=t=>yS.call(t)==="[object Object]";Do&&((up=window==null?void 0:window.navigator)!=null&&up.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function gS(t){return ri()?($p(t),!0):!1}function vS(t){var n;const s=T(t);return(n=s==null?void 0:s.$el)!=null?n:s}const _S=Do?window:void 0,pp=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},dp="__vueuse_ssr_handlers__";pp[dp]=pp[dp]||{};function bS(t,n={}){const{immediate:s=!0,window:o=_S}=n,l=Y(!1);let r=null;function a(){!l.value||!o||(t(),r=o.requestAnimationFrame(a))}function i(){!l.value&&o&&(l.value=!0,a())}function c(){l.value=!1,r!=null&&o&&(o.cancelAnimationFrame(r),r=null)}return s&&i(),gS(c),{isActive:l,pause:c,resume:i}}var fp;(function(t){t.UP="UP",t.RIGHT="RIGHT",t.DOWN="DOWN",t.LEFT="LEFT",t.NONE="NONE"})(fp||(fp={}));const xr="vue-starport-injection",Qh="vue-starport-options",xS={duration:800,easing:"cubic-bezier(0.45, 0, 0.55, 1)",keepAlive:!1},Jh={port:{type:String,required:!0},duration:{type:Number,required:!1},easing:{type:String,required:!1},keepAlive:{type:Boolean,required:!1,default:void 0},mountedProps:{type:Object,required:!1},initialProps:{type:Object,required:!1}};var AS=Object.defineProperty,er=Object.getOwnPropertySymbols,Xh=Object.prototype.hasOwnProperty,ey=Object.prototype.propertyIsEnumerable,hp=(t,n,s)=>n in t?AS(t,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[n]=s,wS=(t,n)=>{for(var s in n||(n={}))Xh.call(n,s)&&hp(t,s,n[s]);if(er)for(var s of er(n))ey.call(n,s)&&hp(t,s,n[s]);return t},yp=(t,n)=>{var s={};for(var o in t)Xh.call(t,o)&&n.indexOf(o)<0&&(s[o]=t[o]);if(t!=null&&er)for(var o of er(t))n.indexOf(o)<0&&ey.call(t,o)&&(s[o]=t[o]);return s};const BS=Ce({name:"StarportProxy",props:wS({props:{type:Object,default:()=>({})},component:{type:Object,required:!0}},Jh),setup(t,n){const s=R(xr),o=$(()=>s.getInstance(t.port,t.component)),l=Y(),r=o.value.generateId(),a=Y(!1);return o.value.isVisible||(o.value.land(),a.value=!0),Gn(async()=>{if(o.value.el){console.error(`[Vue Starport] Multiple proxies of "${o.value.componentName}" with port "${t.port}" detected. The later one will be ignored.`);return}if(o.value.el=l.value,await it(),a.value=!0,o.value.rect.update(),o.value.rect.width===0||o.value.rect.height===0){const i=o.value.rect.width===0?"width":"height";console.warn(`[Vue Starport] The proxy of component "${o.value.componentName}" (port "${t.port}") has no ${i} on initial render, have you set the size for it?`),console.warn("element:",o.value.el),console.warn("rect:",o.value.rect)}}),Yo(async()=>{o.value.rect.update(),o.value.liftOff(),o.value.el=void 0,a.value=!1,!o.value.options.keepAlive&&(await it(),await it(),!o.value.el&&s.dispose(o.value.port))}),ge(()=>t,async()=>{o.value.props&&await it();const i=t,{props:c}=i,u=yp(i,["props"]);o.value.props=c||{},o.value.setLocalOptions(u)},{deep:!0,immediate:!0}),()=>{const i=t,{initialProps:c,mountedProps:u}=i,p=yp(i,["initialProps","mountedProps"]),f=qe(p,(a.value?u:c)||{});return tt("div",qe(f,{id:r,ref:l,"data-starport-proxy":o.value.componentId,"data-starport-landed":o.value.isLanded?"true":void 0,"data-starport-floating":o.value.isLanded?void 0:"true"}),n.slots.default?tt(n.slots.default):void 0)}}});var CS=Object.defineProperty,kS=Object.defineProperties,FS=Object.getOwnPropertyDescriptors,mp=Object.getOwnPropertySymbols,DS=Object.prototype.hasOwnProperty,ES=Object.prototype.propertyIsEnumerable,gp=(t,n,s)=>n in t?CS(t,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[n]=s,SS=(t,n)=>{for(var s in n||(n={}))DS.call(n,s)&&gp(t,s,n[s]);if(mp)for(var s of mp(n))ES.call(n,s)&&gp(t,s,n[s]);return t},TS=(t,n)=>kS(t,FS(n));const $S=Ce({name:"Starport",inheritAttrs:!0,props:Jh,setup(t,n){const s=Y(!1);return Gn(()=>{if(s.value=!0,!R(xr))throw new Error("[Vue Starport] Failed to find the carrier, all Starport components must be wrapped in a <StarportCarrier> component.")}),()=>{var a,i;const o=(i=(a=n.slots).default)==null?void 0:i.call(a);if(!o)throw new Error("[Vue Starport] Slot is required to use <Starport>");if(o.length!==1)throw new Error(`[Vue Starport] <Starport> requires exactly one slot, but got ${o.length}`);const l=o[0];let r=l.type;return(!mS(r)||pn(r))&&(r={render(){return o}}),tt(BS,TS(SS({},t),{key:t.port,component:rr(r),props:l.props}))}}});function OS(t){const n=He({height:0,width:0,left:0,top:0,update:o,listen:r,pause:a,margin:"0px",padding:"0px"}),s=Do?document.documentElement||document.body:void 0;function o(){if(!Do)return;const i=vS(t);if(!i)return;const{height:c,width:u,left:p,top:f}=i.getBoundingClientRect(),h=window.getComputedStyle(i),y=h.margin,m=h.padding;Object.assign(n,{height:c,width:u,left:p,top:s.scrollTop+f,margin:y,padding:m})}const l=bS(o,{immediate:!1});function r(){Do&&(o(),l.resume())}function a(){l.pause()}return n}let US=(t,n=21)=>(s=n)=>{let o="",l=s;for(;l--;)o+=t[Math.random()*t.length|0];return o};const vp=US("abcdefghijklmnopqrstuvwxyz",5);function _p(t){return t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase().replace(/[^\w\d_-]/g,"")}function PS(t){var n;return t.name||((n=t.__file)==null?void 0:n.split(/[\/\\.]/).slice(-2)[0])||""}var IS=Object.defineProperty,bp=Object.getOwnPropertySymbols,MS=Object.prototype.hasOwnProperty,LS=Object.prototype.propertyIsEnumerable,xp=(t,n,s)=>n in t?IS(t,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[n]=s,Xr=(t,n)=>{for(var s in n||(n={}))MS.call(n,s)&&xp(t,s,n[s]);if(bp)for(var s of bp(n))LS.call(n,s)&&xp(t,s,n[s]);return t};function RS(t,n,s={}){const o=PS(n),l=_p(o)||vp(),r=Y(),a=Y(null),i=Y(!1),c=Y(!1),u=vy(!0),p=Y({}),f=$(()=>Xr(Xr(Xr({},xS),s),p.value)),h=Y(0);let y;u.run(()=>{y=OS(r),ge(r,async A=>{A&&(c.value=!0),await it(),r.value||(c.value=!1)})});const m=_p(t);function b(){return`starport-${l}-${m}-${vp()}`}const w=b();return He({el:r,id:w,port:t,props:a,rect:y,scope:u,isLanded:i,isVisible:c,options:f,liftOffTime:h,component:n,componentName:o,componentId:l,generateId:b,setLocalOptions(A={}){p.value=JSON.parse(JSON.stringify(A))},elRef(){return r},liftOff(){i.value&&(i.value=!1,h.value=Date.now(),y.listen())},land(){i.value||(i.value=!0,y.pause())}})}function NS(t){const n=He(new Map);function s(l,r){let a=n.get(l);return a||(a=RS(l,r,t),n.set(l,a)),a.component=r,a}function o(l){var r;(r=n.get(l))==null||r.scope.stop(),n.delete(l)}return{portMap:n,dispose:o,getInstance:s}}var jS=Object.defineProperty,WS=Object.defineProperties,qS=Object.getOwnPropertyDescriptors,Ap=Object.getOwnPropertySymbols,HS=Object.prototype.hasOwnProperty,VS=Object.prototype.propertyIsEnumerable,wp=(t,n,s)=>n in t?jS(t,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[n]=s,zS=(t,n)=>{for(var s in n||(n={}))HS.call(n,s)&&wp(t,s,n[s]);if(Ap)for(var s of Ap(n))VS.call(n,s)&&wp(t,s,n[s]);return t},KS=(t,n)=>WS(t,qS(n));const GS=Ce({name:"StarportCraft",props:{port:{type:String,required:!0},component:{type:Object,required:!0}},setup(t){const n=R(xr);if(!n)throw new Error("[Vue Starport] Failed to find the carrier, all Starport components must be wrapped in a <StarportCarrier> component.");const s=$(()=>n.getInstance(t.port,t.component)),o=$(()=>{var a;return((a=s.value.el)==null?void 0:a.id)||s.value.id}),l=$(()=>{const a=Date.now()-s.value.liftOffTime,i=Math.max(0,s.value.options.duration-a),c=s.value.rect,u={position:"absolute",left:0,top:0,width:`${c.width}px`,height:`${c.height}px`,margin:c.margin,padding:c.padding,transform:`translate3d(${c.left}px,${c.top}px,0px)`};return!s.value.isVisible||!s.value.el?KS(zS({},u),{zIndex:-1,display:"none"}):(s.value.isLanded?u.display="none":Object.assign(u,{transitionProperty:"all",transitionDuration:`${i}ms`,transitionTimingFunction:s.value.options.easing}),u)}),r={onTransitionend(a){s.value.isLanded||console.warn(`[Vue Starport] Transition duration of component "${s.value.componentName}" is too short (${a.elapsedTime}s) that may cause animation glitches. Try to increase the duration of that component, or decrease the duration the Starport (current: ${s.value.options.duration/1e3}s).`)}};return()=>{const a=!!(s.value.isLanded&&s.value.el);return tt("div",{style:l.value,"data-starport-craft":s.value.componentId,"data-starport-landed":s.value.isLanded?"true":void 0,"data-starport-floating":s.value.isLanded?void 0:"true",onTransitionend:s.value.land},tt(w0,{to:a?`#${o.value}`:"body",disabled:!a},tt(s.value.component,qe(r,s.value.props))))}}}),YS=Ce({name:"StarportCarrier",setup(t,{slots:n}){const s=NS(R(Qh,{}));return $t().appContext.app.provide(xr,s),()=>{var l;return[(l=n.default)==null?void 0:l.call(n),Array.from(s.portMap.entries()).map(([r,{component:a}])=>tt(GS,{key:r,port:r,component:a}))]}}});function ZS(t={}){return{install(n){n.provide(Qh,t),n.component("Starport",$S),n.component("StarportCarrier",YS)}}}function QS(t){function n(){document.documentElement.style.setProperty("--vh",`${window.innerHeight*.01}px`)}n(),window.addEventListener("resize",n),t.app.use(hS),t.app.use(ZS({keepAlive:!0}))}function Ct(t,n,s){var o;return((o=t.instance)==null?void 0:o.$).provides[n]??s}function JS(){return{install(t){t.directive("click",{name:"v-click",mounted(n,s){var p,f,h,y,m,b;if(Bo.value||(p=Ct(s,bo))!=null&&p.value)return;const o=Ct(s,as),l=Ct(s,_o),r=Ct(s,xa),a=s.modifiers.hide!==!1&&s.modifiers.hide!=null,i=s.modifiers.fade!==!1&&s.modifiers.fade!=null,c=((f=o==null?void 0:o.value)==null?void 0:f.length)||0,u=i?vg:Or;if(o&&!((h=o==null?void 0:o.value)!=null&&h.includes(n))&&o.value.push(n),s.value==null&&(s.value=(y=o==null?void 0:o.value)==null?void 0:y.length),typeof s.value=="string"&&(s.value.startsWith("+")||s.value.startsWith("-"))&&(s.value=(((m=o==null?void 0:o.value)==null?void 0:m.length)||0)+Number(s.value)),!(r!=null&&r.value.has(s.value)))r==null||r.value.set(s.value,[n]);else if(!((b=r==null?void 0:r.value.get(s.value))!=null&&b.includes(n))){const w=(r==null?void 0:r.value.get(s.value))||[];r==null||r.value.set(s.value,[n].concat(w))}n==null||n.classList.toggle(ss,!0),l&&ge(l,()=>{const w=(l==null?void 0:l.value)??0,A=s.value!=null?w>=s.value:w>c;n.classList.contains(Ur)||n.classList.toggle(u,!A),a!==!1&&a!==void 0&&n.classList.toggle(u,A),n.classList.toggle(to,!1);const B=r==null?void 0:r.value.get(w);B==null||B.forEach((x,C)=>{x.classList.toggle(dl,!1),C===B.length-1?x.classList.toggle(to,!0):x.classList.toggle(dl,!0)}),n.classList.contains(to)||n.classList.toggle(dl,A)},{immediate:!0})},unmounted(n,s){n==null||n.classList.toggle(ss,!1);const o=Ct(s,as);o!=null&&o.value&&Aa(o.value,n)}}),t.directive("after",{name:"v-after",mounted(n,s){var i,c,u;if(Bo.value||(i=Ct(s,bo))!=null&&i.value)return;const o=Ct(s,as),l=Ct(s,_o),r=Ct(s,xa),a=o==null?void 0:o.value.length;s.value==null&&(s.value=o==null?void 0:o.value.length),typeof s.value=="string"&&(s.value.startsWith("+")||s.value.startsWith("-"))&&(s.value=(((c=o==null?void 0:o.value)==null?void 0:c.length)||0)+Number(s.value)),r!=null&&r.value.has(s.value)?(u=r==null?void 0:r.value.get(s.value))==null||u.push(n):r==null||r.value.set(s.value,[n]),n==null||n.classList.toggle(ss,!0),l&&ge(l,()=>{const p=(l.value??0)>=(s.value??a??0);n.classList.contains(Ur)||n.classList.toggle(Or,!p),n.classList.toggle(to,!1),n.classList.contains(to)||n.classList.toggle(dl,p)},{immediate:!0})},unmounted(n){n==null||n.classList.toggle(ss,!0)}}),t.directive("click-hide",{name:"v-click-hide",mounted(n,s){var a,i,c;if(Bo.value||(a=Ct(s,bo))!=null&&a.value)return;const o=Ct(s,as),l=Ct(s,_o),r=((i=o==null?void 0:o.value)==null?void 0:i.length)||0;o&&!((c=o==null?void 0:o.value)!=null&&c.includes(n))&&o.value.push(n),n==null||n.classList.toggle(ss,!0),l&&ge(l,()=>{const u=(l==null?void 0:l.value)??0,p=s.value!=null?u>=s.value:u>r;n.classList.toggle(Or,p),n.classList.toggle(Ur,p)},{immediate:!0})},unmounted(n,s){n==null||n.classList.toggle(ss,!1);const o=Ct(s,as);o!=null&&o.value&&Aa(o.value,n)}})}}}function XS(t,n){const s=oh(t),o=lh(n,s.currentRoute,s.currentPage);return{nav:{...s,...o},configs:Ee,themeConfigs:$(()=>Ee.themeConfig)}}function eT(){return{install(t){const n=XS(qt,Rt);t.provide(V,He(n))}}}const Ys=x1(PF);Ys.use(wt);Ys.use(yg());Ys.use(JS());Ys.use(eT());QS({app:Ys,router:wt});Ys.mount("#app");export{Nx as $,ox as A,Y as B,oT as C,mt as D,We as E,De as F,Bb as G,DF as H,Rt as I,Ql as J,wF as K,Hr as L,Gn as M,He as N,nT as O,lT as P,ge as Q,U as R,Lf as S,Se as T,yt as U,Mb as V,vi as W,_i as X,Lo as Y,Nr as Z,z as _,V as a,Pi as a0,Ii as a1,Px as a2,Ve as a3,L5 as a4,tT as a5,Wt as a6,io as a7,gl as a8,ds as a9,ln as aa,Ua as ab,pb as ac,db as ad,fb as ae,yb as af,Ke as ag,Nd as ah,rT as ai,vt as aj,_3 as ak,Qd as al,mb as am,Yo as an,Zd as b,Ee as c,Ce as d,sm as e,k as f,e as g,T as h,R as i,Ze as j,_F as k,d as l,I as m,nt as n,v as o,me as p,Ei as q,Fs as r,Jt as s,Bn as t,sT as u,$ as v,Pr as w,q as x,Sf as y,cx as z};
