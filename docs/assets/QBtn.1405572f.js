import{c as s,U as ee,G as me,h as g,w as te,g as K,V as he,b as z,x as be,C as ye,A as ne,B as pe,z as ae,r as Q,o as ke,W as xe,d as w,l as qe}from"./index.4737c00e.js";const N={xs:18,sm:24,md:32,lg:38,xl:46},re={size:String};function ie(e,t=N){return s(()=>e.size!==void 0?{fontSize:e.size in t?`${t[e.size]}px`:e.size}:null)}const V=e=>ee(me(e)),$e=e=>ee(e);function Ee(e,t){return e!==void 0&&e()||t}function Ze(e,t){if(e!==void 0){const n=e();if(n!=null)return n.slice()}return t}function A(e,t){return e!==void 0?t.concat(e()):t}function et(e,t){return e===void 0?t:t!==void 0?t.concat(e()):e()}function tt(e,t,n,u,f,o){t.key=u+f;const l=g(e,t,n);return f===!0?te(l,o()):l}const F="0 0 24 24",U=e=>e,O=e=>`ionicons ${e}`,ue={"mdi-":e=>`mdi ${e}`,"icon-":U,"bt-":e=>`bt ${e}`,"eva-":e=>`eva ${e}`,"ion-md":O,"ion-ios":O,"ion-logo":O,"iconfont ":U,"ti-":e=>`themify-icon ${e}`,"bi-":e=>`bootstrap-icons ${e}`},le={o_:"-outlined",r_:"-round",s_:"-sharp"},oe={sym_o_:"-outlined",sym_r_:"-rounded",sym_s_:"-sharp"},Se=new RegExp("^("+Object.keys(ue).join("|")+")"),Re=new RegExp("^("+Object.keys(le).join("|")+")"),D=new RegExp("^("+Object.keys(oe).join("|")+")"),we=/^[Mm]\s?[-+]?\.?\d/,Be=/^img:/,Le=/^svguse:/,_e=/^ion-/,Ce=/^(fa-(solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /;var H=V({name:"QIcon",props:{...re,tag:{type:String,default:"i"},name:String,color:String,left:Boolean,right:Boolean},setup(e,{slots:t}){const{proxy:{$q:n}}=K(),u=ie(e),f=s(()=>"q-icon"+(e.left===!0?" on-left":"")+(e.right===!0?" on-right":"")+(e.color!==void 0?` text-${e.color}`:"")),o=s(()=>{let l,a=e.name;if(a==="none"||!a)return{none:!0};if(n.iconMapFn!==null){const d=n.iconMapFn(a);if(d!==void 0)if(d.icon!==void 0){if(a=d.icon,a==="none"||!a)return{none:!0}}else return{cls:d.cls,content:d.content!==void 0?d.content:" "}}if(we.test(a)===!0){const[d,y=F]=a.split("|");return{svg:!0,viewBox:y,nodes:d.split("&&").map(p=>{const[r,k,b]=p.split("@@");return g("path",{style:k,d:r,transform:b})})}}if(Be.test(a)===!0)return{img:!0,src:a.substring(4)};if(Le.test(a)===!0){const[d,y=F]=a.split("|");return{svguse:!0,src:d.substring(7),viewBox:y}}let h=" ";const $=a.match(Se);if($!==null)l=ue[$[1]](a);else if(Ce.test(a)===!0)l=a;else if(_e.test(a)===!0)l=`ionicons ion-${n.platform.is.ios===!0?"ios":"md"}${a.substring(3)}`;else if(D.test(a)===!0){l="notranslate material-symbols";const d=a.match(D);d!==null&&(a=a.substring(6),l+=oe[d[1]]),h=a}else{l="notranslate material-icons";const d=a.match(Re);d!==null&&(a=a.substring(2),l+=le[d[1]]),h=a}return{cls:l,content:h}});return()=>{const l={class:f.value,style:u.value,"aria-hidden":"true",role:"presentation"};return o.value.none===!0?g(e.tag,l,Ee(t.default)):o.value.img===!0?g("span",l,A(t.default,[g("img",{src:o.value.src})])):o.value.svg===!0?g("span",l,A(t.default,[g("svg",{viewBox:o.value.viewBox||"0 0 24 24"},o.value.nodes)])):o.value.svguse===!0?g("span",l,A(t.default,[g("svg",{viewBox:o.value.viewBox},[g("use",{"xlink:href":o.value.src})])])):(o.value.cls!==void 0&&(l.class+=" "+o.value.cls),g(e.tag,l,A(t.default,[o.value.content])))}}});const Pe={size:{type:[Number,String],default:"1em"},color:String};function Te(e){return{cSize:s(()=>e.size in N?`${N[e.size]}px`:e.size),classes:s(()=>"q-spinner"+(e.color?` text-${e.color}`:""))}}var Ae=V({name:"QSpinner",props:{...Pe,thickness:{type:Number,default:5}},setup(e){const{cSize:t,classes:n}=Te(e);return()=>g("svg",{class:n.value+" q-spinner-mat",width:t.value,height:t.value,viewBox:"25 25 50 50"},[g("circle",{class:"path",cx:"50",cy:"50",r:"20",fill:"none",stroke:"currentColor","stroke-width":e.thickness,"stroke-miterlimit":"10"})])}});function je(e,t){const n=e.style;for(const u in t)n[u]=t[u]}function nt(e){if(e==null)return;if(typeof e=="string")try{return document.querySelector(e)||void 0}catch{return}const t=he(e)===!0?e.value:e;if(t)return t.$el||t}function at(e,t){if(e==null||e.contains(t)===!0)return!0;for(let n=e.nextElementSibling;n!==null;n=n.nextElementSibling)if(n.contains(t))return!0;return!1}function Me(e,t=250){let n=!1,u;return function(){return n===!1&&(n=!0,setTimeout(()=>{n=!1},t),u=e.apply(this,arguments)),u}}function W(e,t,n,u){n.modifiers.stop===!0&&ne(e);const f=n.modifiers.color;let o=n.modifiers.center;o=o===!0||u===!0;const l=document.createElement("span"),a=document.createElement("span"),h=pe(e),{left:$,top:d,width:y,height:p}=t.getBoundingClientRect(),r=Math.sqrt(y*y+p*p),k=r/2,b=`${(y-r)/2}px`,c=o?b:`${h.left-$-k}px`,v=`${(p-r)/2}px`,x=o?v:`${h.top-d-k}px`;a.className="q-ripple__inner",je(a,{height:`${r}px`,width:`${r}px`,transform:`translate3d(${c},${x},0) scale3d(.2,.2,1)`,opacity:0}),l.className=`q-ripple${f?" text-"+f:""}`,l.setAttribute("dir","ltr"),l.appendChild(a),t.appendChild(l);const R=()=>{l.remove(),clearTimeout(E)};n.abort.push(R);let E=setTimeout(()=>{a.classList.add("q-ripple__inner--enter"),a.style.transform=`translate3d(${b},${v},0) scale3d(1,1,1)`,a.style.opacity=.2,E=setTimeout(()=>{a.classList.remove("q-ripple__inner--enter"),a.classList.add("q-ripple__inner--leave"),a.style.opacity=0,E=setTimeout(()=>{l.remove(),n.abort.splice(n.abort.indexOf(R),1)},275)},250)},50)}function X(e,{modifiers:t,value:n,arg:u}){const f=Object.assign({},e.cfg.ripple,t,n);e.modifiers={early:f.early===!0,stop:f.stop===!0,center:f.center===!0,color:f.color||u,keyCodes:[].concat(f.keyCodes||13)}}var Oe=$e({name:"ripple",beforeMount(e,t){const n={cfg:t.instance.$.appContext.config.globalProperties.$q.config,enabled:t.value!==!1,modifiers:{},abort:[],start(u){n.enabled===!0&&u.qSkipRipple!==!0&&u.type===(n.modifiers.early===!0?"pointerdown":"click")&&W(u,e,n,u.qKeyEvent===!0)},keystart:Me(u=>{n.enabled===!0&&u.qSkipRipple!==!0&&z(u,n.modifiers.keyCodes)===!0&&u.type===`key${n.modifiers.early===!0?"down":"up"}`&&W(u,e,n,!0)},300)};X(n,t),e.__qripple=n,be(n,"main",[[e,"pointerdown","start","passive"],[e,"click","start","passive"],[e,"keydown","keystart","passive"],[e,"keyup","keystart","passive"]])},updated(e,t){if(t.oldValue!==t.value){const n=e.__qripple;n.enabled=t.value!==!1,n.enabled===!0&&Object(t.value)===t.value&&X(n,t)}},beforeUnmount(e){const t=e.__qripple;t.abort.forEach(n=>{n()}),ye(t,"main"),delete e._qripple}});const se={left:"start",center:"center",right:"end",between:"between",around:"around",evenly:"evenly",stretch:"stretch"},ze=Object.keys(se),Ne={align:{type:String,validator:e=>ze.includes(e)}};function Ke(e){return s(()=>{const t=e.align===void 0?e.vertical===!0?"stretch":"left":e.align;return`${e.vertical===!0?"items":"justify"}-${se[t]}`})}function rt(e){if(Object(e.$parent)===e.$parent)return e.$parent;for(e=e.$.parent;Object(e)===e;){if(Object(e.proxy)===e.proxy)return e.proxy;e=e.parent}}function ce(e,t){typeof t.type=="symbol"?Array.isArray(t.children)===!0&&t.children.forEach(n=>{ce(e,n)}):e.add(t)}function it(e){const t=new Set;return e.forEach(n=>{ce(t,n)}),Array.from(t)}function Ve(e){return e.appContext.config.globalProperties.$router!==void 0}function G(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}function Y(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Ie(e,t){for(const n in t){const u=t[n],f=e[n];if(typeof u=="string"){if(u!==f)return!1}else if(Array.isArray(f)===!1||f.length!==u.length||u.some((o,l)=>o!==f[l]))return!1}return!0}function J(e,t){return Array.isArray(t)===!0?e.length===t.length&&e.every((n,u)=>n===t[u]):e.length===1&&e[0]===t}function Qe(e,t){return Array.isArray(e)===!0?J(e,t):Array.isArray(t)===!0?J(t,e):e===t}function Fe(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(Qe(e[n],t[n])===!1)return!1;return!0}const Ue={to:[String,Object],replace:Boolean,exact:Boolean,activeClass:{type:String,default:"q-router-link--active"},exactActiveClass:{type:String,default:"q-router-link--exact-active"},href:String,target:String,disable:Boolean};function De(e){const t=K(),{props:n,proxy:u}=t,f=Ve(t),o=s(()=>n.disable!==!0&&n.href!==void 0),l=s(()=>f===!0&&n.disable!==!0&&o.value!==!0&&n.to!==void 0&&n.to!==null&&n.to!==""),a=s(()=>{if(l.value===!0)try{return u.$router.resolve(n.to)}catch{}return null}),h=s(()=>a.value!==null),$=s(()=>o.value===!0||h.value===!0),d=s(()=>n.type==="a"||$.value===!0?"a":n.tag||e||"div"),y=s(()=>o.value===!0?{href:n.href,target:n.target}:h.value===!0?{href:a.value.href,target:n.target}:{}),p=s(()=>{if(h.value===!1)return null;const{matched:v}=a.value,{length:x}=v,R=v[x-1];if(R===void 0)return-1;const E=u.$route.matched;if(E.length===0)return-1;const C=E.findIndex(Y.bind(null,R));if(C>-1)return C;const j=G(v[x-2]);return x>1&&G(R)===j&&E[E.length-1].path!==j?E.findIndex(Y.bind(null,v[x-2])):C}),r=s(()=>h.value===!0&&p.value>-1&&Ie(u.$route.params,a.value.params)),k=s(()=>r.value===!0&&p.value===u.$route.matched.length-1&&Fe(u.$route.params,a.value.params)),b=s(()=>h.value===!0?k.value===!0?` ${n.exactActiveClass} ${n.activeClass}`:n.exact===!0?"":r.value===!0?` ${n.activeClass}`:"":"");function c(v){return n.disable===!0||v.metaKey||v.altKey||v.ctrlKey||v.shiftKey||v.__qNavigate!==!0&&v.defaultPrevented===!0||v.button!==void 0&&v.button!==0||n.target==="_blank"?!1:(ae(v),u.$router[n.replace===!0?"replace":"push"](n.to).catch(x=>x))}return{hasRouterLink:h,hasHrefLink:o,hasLink:$,linkTag:d,linkRoute:a,linkIsActive:r,linkIsExactActive:k,linkClass:b,linkProps:y,navigateToRouterLink:c}}const Z={none:0,xs:4,sm:8,md:16,lg:24,xl:32},He={xs:8,sm:10,md:14,lg:20,xl:24},We=["button","submit","reset"],Xe=/[^\s]\/[^\s]/,Ge={...re,...Ue,type:{type:String,default:"button"},label:[Number,String],icon:String,iconRight:String,round:Boolean,outline:Boolean,flat:Boolean,unelevated:Boolean,rounded:Boolean,push:Boolean,glossy:Boolean,size:String,fab:Boolean,fabMini:Boolean,padding:String,color:String,textColor:String,noCaps:Boolean,noWrap:Boolean,dense:Boolean,tabindex:[Number,String],ripple:{type:[Boolean,Object],default:!0},align:{...Ne.align,default:"center"},stack:Boolean,stretch:Boolean,loading:{type:Boolean,default:null},disable:Boolean};function Ye(e){const t=ie(e,He),n=Ke(e),{hasRouterLink:u,hasLink:f,linkTag:o,linkProps:l,navigateToRouterLink:a}=De("button"),h=s(()=>{const c=e.fab===!1&&e.fabMini===!1?t.value:{};return e.padding!==void 0?Object.assign({},c,{padding:e.padding.split(/\s+/).map(v=>v in Z?Z[v]+"px":v).join(" "),minWidth:"0",minHeight:"0"}):c}),$=s(()=>e.rounded===!0||e.fab===!0||e.fabMini===!0),d=s(()=>e.disable!==!0&&e.loading!==!0),y=s(()=>d.value===!0?e.tabindex||0:-1),p=s(()=>e.flat===!0?"flat":e.outline===!0?"outline":e.push===!0?"push":e.unelevated===!0?"unelevated":"standard"),r=s(()=>{const c={tabindex:y.value};return f.value===!0?Object.assign(c,l.value):We.includes(e.type)===!0&&(c.type=e.type),o.value==="a"?(e.disable===!0?c["aria-disabled"]="true":c.href===void 0&&(c.role="button"),u.value!==!0&&Xe.test(e.type)===!0&&(c.type=e.type)):e.disable===!0&&(c.disabled="",c["aria-disabled"]="true"),e.loading===!0&&e.percentage!==void 0&&Object.assign(c,{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":e.percentage}),c}),k=s(()=>{let c;return e.color!==void 0?e.flat===!0||e.outline===!0?c=`text-${e.textColor||e.color}`:c=`bg-${e.color} text-${e.textColor||"white"}`:e.textColor&&(c=`text-${e.textColor}`),`q-btn--${p.value} q-btn--${e.round===!0?"round":`rectangle${$.value===!0?" q-btn--rounded":""}`}`+(c!==void 0?" "+c:"")+(d.value===!0?" q-btn--actionable q-focusable q-hoverable":e.disable===!0?" disabled":"")+(e.fab===!0?" q-btn--fab":e.fabMini===!0?" q-btn--fab-mini":"")+(e.noCaps===!0?" q-btn--no-uppercase":"")+(e.dense===!0?" q-btn--dense":"")+(e.stretch===!0?" no-border-radius self-stretch":"")+(e.glossy===!0?" glossy":"")}),b=s(()=>n.value+(e.stack===!0?" column":" row")+(e.noWrap===!0?" no-wrap text-no-wrap":"")+(e.loading===!0?" q-btn__content--hidden":""));return{classes:k,style:h,innerClasses:b,attributes:r,hasRouterLink:u,hasLink:f,linkTag:o,navigateToRouterLink:a,isActionable:d}}const{passiveCapture:q}=qe;let B=null,L=null,_=null;var ut=V({name:"QBtn",props:{...Ge,percentage:Number,darkPercentage:Boolean},emits:["click","keydown","touchstart","mousedown","keyup"],setup(e,{slots:t,emit:n}){const{proxy:u}=K(),{classes:f,style:o,innerClasses:l,attributes:a,hasRouterLink:h,hasLink:$,linkTag:d,navigateToRouterLink:y,isActionable:p}=Ye(e),r=Q(null),k=Q(null);let b=null,c,v;const x=s(()=>e.label!==void 0&&e.label!==null&&e.label!==""),R=s(()=>e.disable===!0||e.ripple===!1?!1:{keyCodes:$.value===!0?[13,32]:[13],...e.ripple===!0?{}:e.ripple}),E=s(()=>({center:e.round})),C=s(()=>{const i=Math.max(0,Math.min(100,e.percentage));return i>0?{transition:"transform 0.6s",transform:`translateX(${i-100}%)`}:{}}),j=s(()=>e.loading===!0?{onMousedown:T,onTouchstartPassive:T,onClick:T,onKeydown:T,onKeyup:T}:p.value===!0?{onClick:I,onKeydown:fe,onMousedown:ge,onTouchstart:ve}:{onClick:w}),de=s(()=>({ref:r,class:"q-btn q-btn-item non-selectable no-outline "+f.value,style:o.value,...a.value,...j.value}));function I(i){if(r.value!==null){if(i!==void 0){if(i.defaultPrevented===!0)return;const m=document.activeElement;if(e.type==="submit"&&m!==document.body&&r.value.contains(m)===!1&&m.contains(r.value)===!1){r.value.focus();const M=()=>{document.removeEventListener("keydown",w,!0),document.removeEventListener("keyup",M,q),r.value!==null&&r.value.removeEventListener("blur",M,q)};document.addEventListener("keydown",w,!0),document.addEventListener("keyup",M,q),r.value.addEventListener("blur",M,q)}}if(h.value===!0){const m=()=>{i.__qNavigate=!0,y(i)};n("click",i,m),i.defaultPrevented!==!0&&m()}else n("click",i)}}function fe(i){r.value!==null&&(n("keydown",i),z(i,[13,32])===!0&&L!==r.value&&(L!==null&&P(),i.defaultPrevented!==!0&&(r.value.focus(),L=r.value,r.value.classList.add("q-btn--active"),document.addEventListener("keyup",S,!0),r.value.addEventListener("blur",S,q)),w(i)))}function ve(i){r.value!==null&&(n("touchstart",i),i.defaultPrevented!==!0&&(B!==r.value&&(B!==null&&P(),B=r.value,b=i.target,b.addEventListener("touchcancel",S,q),b.addEventListener("touchend",S,q)),c=!0,clearTimeout(v),v=setTimeout(()=>{c=!1},200)))}function ge(i){r.value!==null&&(i.qSkipRipple=c===!0,n("mousedown",i),i.defaultPrevented!==!0&&_!==r.value&&(_!==null&&P(),_=r.value,r.value.classList.add("q-btn--active"),document.addEventListener("mouseup",S,q)))}function S(i){if(r.value!==null&&!(i!==void 0&&i.type==="blur"&&document.activeElement===r.value)){if(i!==void 0&&i.type==="keyup"){if(L===r.value&&z(i,[13,32])===!0){const m=new MouseEvent("click",i);m.qKeyEvent=!0,i.defaultPrevented===!0&&ae(m),i.cancelBubble===!0&&ne(m),r.value.dispatchEvent(m),w(i),i.qKeyEvent=!0}n("keyup",i)}P()}}function P(i){const m=k.value;i!==!0&&(B===r.value||_===r.value)&&m!==null&&m!==document.activeElement&&(m.setAttribute("tabindex",-1),m.focus()),B===r.value&&(b!==null&&(b.removeEventListener("touchcancel",S,q),b.removeEventListener("touchend",S,q)),B=b=null),_===r.value&&(document.removeEventListener("mouseup",S,q),_=null),L===r.value&&(document.removeEventListener("keyup",S,!0),r.value!==null&&r.value.removeEventListener("blur",S,q),L=null),r.value!==null&&r.value.classList.remove("q-btn--active")}function T(i){w(i),i.qSkipRipple=!0}return ke(()=>{P(!0)}),Object.assign(u,{click:I}),()=>{let i=[];e.icon!==void 0&&i.push(g(H,{name:e.icon,left:e.stack===!1&&x.value===!0,role:"img","aria-hidden":"true"})),x.value===!0&&i.push(g("span",{class:"block"},[e.label])),i=A(t.default,i),e.iconRight!==void 0&&e.round===!1&&i.push(g(H,{name:e.iconRight,right:e.stack===!1&&x.value===!0,role:"img","aria-hidden":"true"}));const m=[g("span",{class:"q-focus-helper",ref:k})];return e.loading===!0&&e.percentage!==void 0&&m.push(g("span",{class:"q-btn__progress absolute-full overflow-hidden"+(e.darkPercentage===!0?" q-btn__progress--dark":"")},[g("span",{class:"q-btn__progress-indicator fit block",style:C.value})])),m.push(g("span",{class:"q-btn__content text-center col items-center q-anchor--skip "+l.value},i)),e.loading!==null&&m.push(g(xe,{name:"q-transition--fade"},()=>e.loading===!0?[g("span",{key:"loading",class:"absolute-full flex flex-center"},t.loading!==void 0?t.loading():[g(Ae)])]:null)),te(g(d.value,de.value,m),[[Oe,R.value,void 0,E.value]])}}});export{H as Q,Oe as R,A as a,De as b,V as c,Ze as d,$e as e,tt as f,ut as g,Ee as h,nt as i,je as j,re as k,ie as l,et as m,Ae as n,it as o,Ne as p,Ke as q,rt as r,at as s,Ue as u,Ve as v};
