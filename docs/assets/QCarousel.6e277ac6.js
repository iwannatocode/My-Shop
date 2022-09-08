import{e as H,o as J,h as Q,c as R,f as Z,g as z,a as ee}from"./QBtn.15819347.js";import{u as B,j as te,v as ne,x as V,y as M,B as W,d as L,C as F,r as j,c as d,e as O,g as G,n as oe,h as f,W as ae,a5 as ie,a as re,o as le,a6 as ue}from"./index.205994c0.js";import{u as se,a as ce}from"./ShopStore.ca7b8934.js";import{c as ve,y as de,z as fe,A as me}from"./use-fullscreen.cefbdd9b.js";const U={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},pe=Object.keys(U);U.all=!0;function K(e){const n={};for(const i of pe)e[i]===!0&&(n[i]=!0);return Object.keys(n).length===0?U:(n.horizontal===!0?n.left=n.right=!0:n.left===!0&&n.right===!0&&(n.horizontal=!0),n.vertical===!0?n.up=n.down=!0:n.up===!0&&n.down===!0&&(n.vertical=!0),n.horizontal===!0&&n.vertical===!0&&(n.all=!0),n)}function X(e,n){return n.event===void 0&&e.target!==void 0&&e.target.draggable!==!0&&typeof n.handler=="function"&&e.target.nodeName.toUpperCase()!=="INPUT"&&(e.qClonedBy===void 0||e.qClonedBy.indexOf(n.uid)===-1)}function ge(e){const n=[.06,6,50];return typeof e=="string"&&e.length&&e.split(":").forEach((i,g)=>{const r=parseFloat(i);r&&(n[g]=r)}),n}var he=H({name:"touch-swipe",beforeMount(e,{value:n,arg:i,modifiers:g}){if(g.mouse!==!0&&B.has.touch!==!0)return;const r=g.mouseCapture===!0?"Capture":"",t={handler:n,sensitivity:ge(i),direction:K(g),noop:te,mouseStart(a){X(a,t)&&ne(a)&&(V(t,"temp",[[document,"mousemove","move",`notPassive${r}`],[document,"mouseup","end","notPassiveCapture"]]),t.start(a,!0))},touchStart(a){if(X(a,t)){const v=a.target;V(t,"temp",[[v,"touchmove","move","notPassiveCapture"],[v,"touchcancel","end","notPassiveCapture"],[v,"touchend","end","notPassiveCapture"]]),t.start(a)}},start(a,v){B.is.firefox===!0&&M(e,!0);const h=W(a);t.event={x:h.left,y:h.top,time:Date.now(),mouse:v===!0,dir:!1}},move(a){if(t.event===void 0)return;if(t.event.dir!==!1){L(a);return}const v=Date.now()-t.event.time;if(v===0)return;const h=W(a),y=h.left-t.event.x,u=Math.abs(y),x=h.top-t.event.y,s=Math.abs(x);if(t.event.mouse!==!0){if(u<t.sensitivity[1]&&s<t.sensitivity[1]){t.end(a);return}}else if(u<t.sensitivity[2]&&s<t.sensitivity[2])return;const m=u/v,C=s/v;t.direction.vertical===!0&&u<s&&u<100&&C>t.sensitivity[0]&&(t.event.dir=x<0?"up":"down"),t.direction.horizontal===!0&&u>s&&s<100&&m>t.sensitivity[0]&&(t.event.dir=y<0?"left":"right"),t.direction.up===!0&&u<s&&x<0&&u<100&&C>t.sensitivity[0]&&(t.event.dir="up"),t.direction.down===!0&&u<s&&x>0&&u<100&&C>t.sensitivity[0]&&(t.event.dir="down"),t.direction.left===!0&&u>s&&y<0&&s<100&&m>t.sensitivity[0]&&(t.event.dir="left"),t.direction.right===!0&&u>s&&y>0&&s<100&&m>t.sensitivity[0]&&(t.event.dir="right"),t.event.dir!==!1?(L(a),t.event.mouse===!0&&(document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),ve(),t.styleCleanup=w=>{t.styleCleanup=void 0,document.body.classList.remove("non-selectable");const b=()=>{document.body.classList.remove("no-pointer-events--children")};w===!0?setTimeout(b,50):b()}),t.handler({evt:a,touch:t.event.mouse!==!0,mouse:t.event.mouse,direction:t.event.dir,duration:v,distance:{x:u,y:s}})):t.end(a)},end(a){t.event!==void 0&&(F(t,"temp"),B.is.firefox===!0&&M(e,!1),t.styleCleanup!==void 0&&t.styleCleanup(!0),a!==void 0&&t.event.dir!==!1&&L(a),t.event=void 0)}};e.__qtouchswipe=t,g.mouse===!0&&V(t,"main",[[e,"mousedown","mouseStart",`passive${r}`]]),B.has.touch===!0&&V(t,"main",[[e,"touchstart","touchStart",`passive${g.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,n){const i=e.__qtouchswipe;i!==void 0&&(n.oldValue!==n.value&&(typeof n.value!="function"&&i.end(),i.handler=n.value),i.direction=K(n.modifiers))},beforeUnmount(e){const n=e.__qtouchswipe;n!==void 0&&(F(n,"main"),F(n,"temp"),B.is.firefox===!0&&M(e,!1),n.styleCleanup!==void 0&&n.styleCleanup(),delete e.__qtouchswipe)}});function ye(){const e=new Map;return{getCache:function(n,i){return e[n]===void 0?e[n]=i:e[n]},getCacheWithFn:function(n,i){return e[n]===void 0?e[n]=i():e[n]}}}const xe={name:{required:!0},disable:Boolean},Y={setup(e,{slots:n}){return()=>f("div",{class:"q-panel scroll",role:"tabpanel"},Q(n.default))}},Ce={modelValue:{required:!0},animated:Boolean,infinite:Boolean,swipeable:Boolean,vertical:Boolean,transitionPrev:String,transitionNext:String,transitionDuration:{type:[String,Number],default:300},keepAlive:Boolean,keepAliveInclude:[String,Array,RegExp],keepAliveExclude:[String,Array,RegExp],keepAliveMax:Number},be=["update:modelValue","before-transition","transition"];function Pe(){const{props:e,emit:n,proxy:i}=G(),{getCacheWithFn:g}=ye();let r,t;const a=j(null),v=j(null);function h(o){const l=e.vertical===!0?"up":"left";P((i.$q.lang.rtl===!0?-1:1)*(o.direction===l?1:-1))}const y=d(()=>[[he,h,void 0,{horizontal:e.vertical!==!0,vertical:e.vertical,mouse:!0}]]),u=d(()=>e.transitionPrev||`slide-${e.vertical===!0?"down":"right"}`),x=d(()=>e.transitionNext||`slide-${e.vertical===!0?"up":"left"}`),s=d(()=>`--q-transition-duration: ${e.transitionDuration}ms`),m=d(()=>typeof e.modelValue=="string"||typeof e.modelValue=="number"?e.modelValue:String(e.modelValue)),C=d(()=>({include:e.keepAliveInclude,exclude:e.keepAliveExclude,max:e.keepAliveMax})),w=d(()=>e.keepAliveInclude!==void 0||e.keepAliveExclude!==void 0);O(()=>e.modelValue,(o,l)=>{const p=_(o)===!0?A(o):-1;t!==!0&&k(p===-1?0:p<A(l)?-1:1),a.value!==p&&(a.value=p,n("before-transition",o,l),oe(()=>{n("transition",o,l)}))});function b(){P(1)}function N(){P(-1)}Object.assign(i,{next:b,previous:N,goTo:I});function I(o){n("update:modelValue",o)}function _(o){return o!=null&&o!==""}function A(o){return r.findIndex(l=>l.props.name===o&&l.props.disable!==""&&l.props.disable!==!0)}function D(){return r.filter(o=>o.props.disable!==""&&o.props.disable!==!0)}function k(o){const l=o!==0&&e.animated===!0&&a.value!==-1?"q-transition--"+(o===-1?u.value:x.value):null;v.value!==l&&(v.value=l)}function P(o,l=a.value){let p=l+o;for(;p>-1&&p<r.length;){const S=r[p];if(S!==void 0&&S.props.disable!==""&&S.props.disable!==!0){k(o),t=!0,n("update:modelValue",S.props.name),setTimeout(()=>{t=!1});return}p+=o}e.infinite===!0&&r.length>0&&l!==-1&&l!==r.length&&P(o,o===-1?r.length:-1)}function T(){const o=A(e.modelValue);return a.value!==o&&(a.value=o),!0}function E(){const o=_(e.modelValue)===!0&&T()&&r[a.value];return e.keepAlive===!0?[f(ie,C.value,[f(w.value===!0?g(m.value,()=>({...Y,name:m.value})):Y,{key:m.value,style:s.value},()=>o)])]:[f("div",{class:"q-panel scroll",style:s.value,key:m.value,role:"tabpanel"},[o])]}function c(){if(r.length!==0)return e.animated===!0?[f(ae,{name:v.value},E)]:E()}function q(o){return r=J(Q(o.default,[])).filter(l=>l.props!==null&&l.props.slot===void 0&&_(l.props.name)===!0),r.length}function $(){return r}return{panelIndex:a,panelDirectives:y,updatePanelsList:q,updatePanelIndex:T,getPanelContent:c,getEnabledPanels:D,getPanels:$,isValidPanelName:_,keepAliveProps:C,needsUniqueKeepAliveWrapper:w,goToPanelByOffset:P,goToPanel:I,nextPanel:b,previousPanel:N}}var Ae=R({name:"QCarouselSlide",props:{...xe,imgSrc:String},setup(e,{slots:n}){const i=d(()=>e.imgSrc?{backgroundImage:`url("${e.imgSrc}")`}:{});return()=>f("div",{class:"q-carousel__slide",style:i.value},Q(n.default))}});const _e=["top","right","bottom","left"],qe=["regular","flat","outline","push","unelevated"];var Te=R({name:"QCarousel",props:{...se,...Ce,...de,transitionPrev:{type:String,default:"fade"},transitionNext:{type:String,default:"fade"},height:String,padding:Boolean,controlColor:String,controlTextColor:String,controlType:{type:String,validator:e=>qe.includes(e),default:"flat"},autoplay:[Number,Boolean],arrows:Boolean,prevIcon:String,nextIcon:String,navigation:Boolean,navigationPosition:{type:String,validator:e=>_e.includes(e)},navigationIcon:String,navigationActiveIcon:String,thumbnails:Boolean},emits:[...fe,...be],setup(e,{slots:n}){const{proxy:{$q:i}}=G(),g=ce(e,i);let r,t;const{updatePanelsList:a,getPanelContent:v,panelDirectives:h,goToPanel:y,previousPanel:u,nextPanel:x,getEnabledPanels:s,panelIndex:m}=Pe(),{inFullscreen:C}=me(),w=d(()=>C.value!==!0&&e.height!==void 0?{height:e.height}:{}),b=d(()=>e.vertical===!0?"vertical":"horizontal"),N=d(()=>`q-carousel q-panel-parent q-carousel--with${e.padding===!0?"":"out"}-padding`+(C.value===!0?" fullscreen":"")+(g.value===!0?" q-carousel--dark q-dark":"")+(e.arrows===!0?` q-carousel--arrows-${b.value}`:"")+(e.navigation===!0?` q-carousel--navigation-${D.value}`:"")),I=d(()=>{const c=[e.prevIcon||i.iconSet.carousel[e.vertical===!0?"up":"left"],e.nextIcon||i.iconSet.carousel[e.vertical===!0?"down":"right"]];return e.vertical===!1&&i.lang.rtl===!0?c.reverse():c}),_=d(()=>e.navigationIcon||i.iconSet.carousel.navigationIcon),A=d(()=>e.navigationActiveIcon||_.value),D=d(()=>e.navigationPosition||(e.vertical===!0?"right":"bottom")),k=d(()=>({color:e.controlColor,textColor:e.controlTextColor,round:!0,[e.controlType]:!0,dense:!0}));O(()=>e.modelValue,()=>{e.autoplay&&(clearInterval(r),P())}),O(()=>e.autoplay,c=>{c?P():clearInterval(r)});function P(){const c=ue(e.autoplay)===!0?e.autoplay:5e3;r=setTimeout(c>=0?x:u,Math.abs(c))}re(()=>{e.autoplay&&P()}),le(()=>{clearInterval(r)});function T(c,q){return f("div",{class:`q-carousel__control q-carousel__navigation no-wrap absolute flex q-carousel__navigation--${c} q-carousel__navigation--${D.value}`+(e.controlColor!==void 0?` text-${e.controlColor}`:"")},[f("div",{class:"q-carousel__navigation-inner flex flex-center no-wrap"},s().map(q))])}function E(){const c=[];if(e.navigation===!0){const q=n["navigation-icon"]!==void 0?n["navigation-icon"]:o=>f(z,{key:"nav"+o.name,class:`q-carousel__navigation-icon q-carousel__navigation-icon--${o.active===!0?"":"in"}active`,...o.btnProps,onClick:o.onClick}),$=t-1;c.push(T("buttons",(o,l)=>{const p=o.props.name,S=m.value===l;return q({index:l,maxIndex:$,name:p,active:S,btnProps:{icon:S===!0?A.value:_.value,size:"sm",...k.value},onClick:()=>{y(p)}})}))}else if(e.thumbnails===!0){const q=e.controlColor!==void 0?` text-${e.controlColor}`:"";c.push(T("thumbnails",$=>{const o=$.props;return f("img",{key:"tmb#"+o.name,class:`q-carousel__thumbnail q-carousel__thumbnail--${o.name===e.modelValue?"":"in"}active`+q,src:o.imgSrc||o["img-src"],onClick:()=>{y(o.name)}})}))}return e.arrows===!0&&m.value>=0&&((e.infinite===!0||m.value>0)&&c.push(f("div",{key:"prev",class:`q-carousel__control q-carousel__arrow q-carousel__prev-arrow q-carousel__prev-arrow--${b.value} absolute flex flex-center`},[f(z,{icon:I.value[0],...k.value,onClick:u})])),(e.infinite===!0||m.value<t-1)&&c.push(f("div",{key:"next",class:`q-carousel__control q-carousel__arrow q-carousel__next-arrow q-carousel__next-arrow--${b.value} absolute flex flex-center`},[f(z,{icon:I.value[1],...k.value,onClick:x})]))),ee(n.control,c)}return()=>(t=a(n),f("div",{class:N.value,style:w.value},[Z("div",{class:"q-carousel__slides-container"},v(),"sl-cont",e.swipeable,()=>h.value)].concat(E())))}});export{Ae as Q,Te as a,K as g,X as s};