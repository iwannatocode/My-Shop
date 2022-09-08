import{c as u,r as g,e as L,o as O,h as n,W as V,g as W,G as T,_ as Q,H as y,N as b,K as l,J as f,O as q,T as z,S as $,a7 as G,a8 as J,R as K,I as U}from"./index.4737c00e.js";import{c as p,h as S,n as Y,p as X,q as Z,g as C}from"./QBtn.1405572f.js";import{u as ee,a as te,s as x}from"./ShopStore.4dc30009.js";import{c as ae}from"./CartStore.b5ae8864.js";const re={ratio:[String,Number]};function ie(e,a){return u(()=>{const r=Number(e.ratio||(a!==void 0?a.value:void 0));return isNaN(r)!==!0&&r>0?{paddingBottom:`${100/r}%`}:null})}const ne=16/9;var oe=p({name:"QImg",props:{...re,src:String,srcset:String,sizes:String,alt:String,crossorigin:String,decoding:String,referrerpolicy:String,draggable:Boolean,loading:{type:String,default:"lazy"},fetchpriority:{type:String,default:"auto"},width:String,height:String,initialRatio:{type:[Number,String],default:ne},placeholderSrc:String,fit:{type:String,default:"cover"},position:{type:String,default:"50% 50%"},imgClass:String,imgStyle:Object,noSpinner:Boolean,noNativeMenu:Boolean,noTransition:Boolean,spinnerColor:String,spinnerSize:String},emits:["load","error"],setup(e,{slots:a,emit:r}){const c=g(e.initialRatio),d=ie(e,c);let o;const i=[g(null),g(e.placeholderSrc!==void 0?{src:e.placeholderSrc}:null)],s=g(0),h=g(!1),v=g(!1),I=u(()=>`q-img q-img--${e.noNativeMenu===!0?"no-":""}menu`),R=u(()=>({width:e.width,height:e.height})),A=u(()=>`q-img__image ${e.imgClass!==void 0?e.imgClass+" ":""}q-img__image--with${e.noTransition===!0?"out":""}-transition`),P=u(()=>({...e.imgStyle,objectFit:e.fit,objectPosition:e.position}));L(()=>k(),w);function k(){return e.src||e.srcset||e.sizes?{src:e.src,srcset:e.srcset,sizes:e.sizes}:null}function w(t){if(clearTimeout(o),v.value=!1,t===null){h.value=!1,i[0].value=null,i[1].value=null;return}h.value=!0,i[s.value].value=t}function j({target:t}){o!==null&&(clearTimeout(o),c.value=t.naturalHeight===0?.5:t.naturalWidth/t.naturalHeight,N(t,1))}function N(t,m){o===null||m===1e3||(t.complete===!0?F(t):o=setTimeout(()=>{N(t,m+1)},50))}function F(t){o!==null&&(s.value=s.value===1?0:1,i[s.value].value=null,h.value=!1,v.value=!1,r("load",t.currentSrc||t.src))}function M(t){clearTimeout(o),h.value=!1,v.value=!0,i[0].value=null,i[1].value=null,r("error",t)}function E(t,m){return n("div",{class:"q-img__container absolute-full",key:t},m)}function B(t){const m=i[t].value,_={key:"img_"+t,class:A.value,style:P.value,crossorigin:e.crossorigin,decoding:e.decoding,referrerpolicy:e.referrerpolicy,height:e.height,width:e.width,loading:e.loading,fetchpriority:e.fetchpriority,"aria-hidden":"true",draggable:e.draggable,...m};return s.value===t?(_.class+=" q-img__image--waiting",Object.assign(_,{onLoad:j,onError:M})):_.class+=" q-img__image--loaded",E("img"+t,n("img",_))}function H(){return h.value!==!0?n("div",{key:"content",class:"q-img__content absolute-full q-anchor--skip"},S(a[v.value===!0?"error":"default"])):n("div",{key:"loading",class:"q-img__loading absolute-full flex flex-center"},a.loading!==void 0?a.loading():e.noSpinner===!0?void 0:[n(Y,{color:e.spinnerColor,size:e.spinnerSize})])}return w(k()),O(()=>{clearTimeout(o),o=null}),()=>{const t=[];return d.value!==null&&t.push(n("div",{key:"filler",style:d.value})),v.value!==!0&&(i[0].value!==null&&t.push(B(0)),i[1].value!==null&&t.push(B(1))),t.push(n(V,{name:"q-transition--fade"},H)),n("div",{class:I.value,style:R.value,role:"img","aria-label":e.alt},t)}}}),D=p({name:"QCardSection",props:{tag:{type:String,default:"div"},horizontal:Boolean},setup(e,{slots:a}){const r=u(()=>`q-card__section q-card__section--${e.horizontal===!0?"horiz row no-wrap":"vert"}`);return()=>n(e.tag,{class:r.value},S(a.default))}});const se=n("div",{class:"q-space"});var le=p({name:"QSpace",setup(){return()=>se}}),ce=p({name:"QCardActions",props:{...X,vertical:Boolean},setup(e,{slots:a}){const r=Z(e),c=u(()=>`q-card__actions ${r.value} q-card__actions--${e.vertical===!0?"vert column":"horiz row"}`);return()=>n("div",{class:c.value},S(a.default))}}),ue=p({name:"QCard",props:{...ee,tag:{type:String,default:"div"},square:Boolean,flat:Boolean,bordered:Boolean},setup(e,{slots:a}){const r=W(),c=te(e,r.proxy.$q),d=u(()=>"q-card"+(c.value===!0?" q-card--dark q-dark":"")+(e.bordered===!0?" q-card--bordered":"")+(e.square===!0?" q-card--square no-border-radius":"")+(e.flat===!0?" q-card--flat no-shadow":""));return()=>n(e.tag,{class:d.value},S(a.default))}});const de=T({setup(){const e=x(),a=ae();return{myShopStore:e,myCartStore:a}},props:{id:{type:Number,required:!0},price:{type:Number,required:!0},productName:{type:String,required:!0},imgSrc:{type:String,required:!0}},data(){return{stars:this.rating}},methods:{ShowItemDetails(e){this.$router.push({name:"Details",params:{id:e}})},addToCart(){this.myShopStore.incrementBadge(),this.myCartStore.addProduct(this.id,this.productName,this.price)}}}),me={class:"my-card"},ge={class:"item-price"},fe=$(" Precio: "),he={class:"item-name text-center"},ve=$(" A\xF1adir al carro "),pe=$(" Detalles ");function _e(e,a,r,c,d,o){return y(),b("div",me,[l(ue,{class:"q-my-md q-py-lg"},{default:f(()=>[l(oe,{src:`${e.imgSrc}`},null,8,["src"]),l(D,null,{default:f(()=>[l(C,{onClick:e.addToCart,fab:"",color:"primary",icon:"shopping_cart",class:"absolute",style:{top:"0",right:"12px",transform:"translateY(-50%)"}},null,8,["onClick"]),q("div",ge,[fe,q("span",null,z(e.price)+"$",1)])]),_:1}),l(D,{class:"q-pt-none"},{default:f(()=>[q("div",he,z(e.productName),1)]),_:1}),l(ce,{class:"q-px-md"},{default:f(()=>[l(C,{class:"item-details btn",onClick:e.addToCart,outline:"",color:"primary"},{default:f(()=>[ve]),_:1},8,["onClick"]),l(le),l(C,{class:"item-details btn",onClick:a[0]||(a[0]=i=>e.ShowItemDetails(e.id)),outline:"",color:"primary"},{default:f(()=>[pe]),_:1})]),_:1})]),_:1})])}var ye=Q(de,[["render",_e]]);const Se=T({props:{searchData:{type:Array,default:()=>[]}},setup(){return{myShopStore:x()}},components:{CardItem:ye},data(){return{}},computed:{itemsData(){return this.searchData.length?this.searchData:this.myShopStore.itemsData}}}),qe={class:"my-shop"};function Ce(e,a,r,c,d,o){const i=K("card-item");return y(),b("div",qe,[(y(!0),b(G,null,J(e.itemsData,s=>(y(),U(i,{key:s.id,id:s.id,productName:s.productName,imgSrc:s.imgSrc,price:s.price},null,8,["id","productName","imgSrc","price"]))),128))])}var Ne=Q(Se,[["render",Ce]]);export{Ne as default};
