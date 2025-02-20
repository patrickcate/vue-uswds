import{l as N,K as ee,s as O,w as ie,y as ae,z as te,M as L,c as w,t as oe,r as se,b as H,n as q,a as U,I as le,g as re,G as ue,H as ne,o as P,d as me,v as T,j as pe,k as j}from"./vue.esm-bundler-DlC1_45x.js";import{_ as de}from"./BaseHeading-BkBCpxXB.js";import{e as ce,f as ve}from"./index-dBkZoKjW.js";import{k as ge}from"./common-cfad2wKl.js";import"./index-BzV88aIg.js";const he=(a,n,f,m,b,M)=>{const p=N(a),d=N(n.value.map(e=>e.toLowerCase()).toSorted()),c=N(f),g=N(m),h=N(b),r=ee(null),t=N(new Map),A=O(()=>{let e;const i=Array.from(t.value.values());for(const o of i)if(o.isActive){e=o.id;break}return e});ie(A,e=>{e&&M("activeHeading",e)},{immediate:!0});const V=O(()=>d.value[0]),I=O(()=>`.usa-in-page-nav-container ${p.value} :is(${d.value.join(",")})`),F=e=>{const i=document.getElementById(e);return i&&(!i.classList.contains("usa-anchor")||t.value.has(e))},G=e=>{let i=CSS.escape(ge(e.textContent)),o,s=0;do o=i,s+=1,s>1&&(o+=`-${s}`);while(F(o));return o},J=(e,i)=>{if(!e.querySelector("* > a.usa-anchor")){const s=document.createElement("a");s.setAttribute("id",i),s.classList.add("usa-anchor"),e.insertAdjacentElement("afterbegin",s)}},Q=e=>{var i;(i=document.getElementById(e))==null||i.remove()},W=e=>{if(!e.textContent.trim())return!1;const i=window.getComputedStyle(e);return i.getPropertyValue("display")!=="none"&&i.getPropertyValue("visibility")!=="hidden"},X=()=>Array.from(document.querySelectorAll(I.value)).filter(W),_=()=>{const e=X();t.value.size&&(t.value.forEach(i=>i==null?void 0:i.stop()),t.value.clear()),!(e.length<h.value)&&e.forEach(i=>{const o=G(i),s=i.tagName.toLowerCase();J(i,o);const{stop:C}=ve(i,Y,{rootMargin:c.value,threshold:g.value});t.value.set(o,{id:o,text:i.textContent,isPrimary:s===V.value,isActive:!1,stop:C})})};function Y(e){e.forEach(({isIntersecting:i,target:o,intersectionRatio:s})=>{if(i&&s===1){const k=o.querySelector("a.usa-anchor").id;t.value.has(k)&&t.value.forEach(S=>{const x=S.id===k;t.value.set(S.id,{...S,isActive:x})})}})}const{stop:Z}=ce(r,e=>{e.reduce((o,s)=>{var $,R;const C=Array.from(s.addedNodes).filter(v=>{var y;return d.value.includes((y=v==null?void 0:v.tagName)==null?void 0:y.toLowerCase())}),k=Array.from(s.removedNodes).filter(v=>{var y;return d.value.includes((y=v==null?void 0:v.tagName)==null?void 0:y.toLowerCase())}),S=d.value.includes((R=($=s.target)==null?void 0:$.tagName)==null?void 0:R.toLowerCase())?[s.target]:[],x=C.length+k.length+S.length;return o+=x,o},0)&&_()},{subtree:!0,childList:!0,characterData:!0});return ae(()=>{r.value=document.querySelector(p.value),_()}),te(()=>{Z(),t.value.forEach(e=>{e.stop(),Q(e.id)})}),{headings:t}},Ne={class:"usa-in-page-nav-container"},qe=["aria-label"],fe=["href","onClick","onKeydown"],l={__name:"UsaInPageNav",props:{title:{type:String,default:"On this page"},mainContentSelector:{type:String,default:"main"},headingLevel:{type:String,default:"h4",validator(a){const n=["h1","h2","h3","h4","h5","h6"].includes(a);return n||console.warn(`'${a}' is not a valid HTML heading element`),n}},headingElements:{type:Array,default:()=>["h2","h3"],validator(a){const n=a.every(f=>["h1","h2","h3","h4","h5","h6"].includes(f));return n||console.warn("'headingElements' contains an invalid HTML heading element"),n}},minimumHeadingCount:{type:Number,default:2},scrollOffset:{type:Number,default:0},rootMargin:{type:String,default:"0px 0px 0px 0px"},threshold:{type:[Number,Array],default:1},customClasses:{type:Object,default:()=>({aside:[],nav:[],heading:[],list:[],item:[],link:[]})}},emits:["activeHeading"],setup(a,{emit:n}){const f=n,m=a,{headings:b}=he(L(m,"mainContentSelector"),L(m,"headingElements"),L(m,"rootMargin"),L(m,"threshold"),L(m,"minimumHeadingCount"),f),M=p=>{const d=document.getElementById(p),c=r=>r.offsetParent?r.offsetTop+c(r.offsetParent):r.offsetTop,g=c(d),{matches:h}=window.matchMedia("(prefers-reduced-motion: reduce)");window.scroll({behavior:h?"auto":"smooth",top:g-m.scrollOffset}),window.location.hash.slice(1)!==p&&window.history.pushState(null,"",`#${p}`)};return(p,d)=>{var c,g,h,r;return P(),w("div",Ne,[H(b)&&H(b).size>=a.minimumHeadingCount?(P(),w("aside",{key:0,class:q(["usa-in-page-nav",(c=a.customClasses)==null?void 0:c.aside])},[U("nav",{"aria-label":a.title,class:q(["usa-in-page-nav__nav",(g=a.customClasses)==null?void 0:g.nav])},[le(H(de),{tag:a.headingLevel,class:q(["usa-in-page-nav__heading",(h=a.customClasses)==null?void 0:h.heading])},{default:re(()=>[me(T(a.title),1)]),_:1},8,["tag","class"]),U("ul",{class:q(["usa-in-page-nav__list",(r=a.customClasses)==null?void 0:r.list])},[(P(!0),w(ue,null,ne(H(b).values(),t=>{var A,V;return P(),w("li",{key:t.id,class:q(["usa-in-page-nav__item",[(A=a.customClasses)==null?void 0:A.item,{"usa-in-page-nav__item--primary":t.isPrimary}]])},[U("a",{href:`#${t.id}`,class:q(["usa-in-page-nav__link",[(V=a.customClasses)==null?void 0:V.link,{"usa-current":t.isActive}]]),onClick:j(I=>M(t.id),["prevent"]),onKeydown:pe(j(I=>M(t.id),["prevent"]),["enter"])},T(t.text),43,fe)],2)}),128))],2)],10,qe)],2)):oe("",!0),se(p.$slots,"default")])}}};l.__docgenInfo={exportName:"default",displayName:"UsaInPageNav",type:1,props:[{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"customClasses",global:!1,description:"",tags:[],required:!1,type:"Record<string, any>",declarations:[],schema:"Record<string, any>",default:`() => {
    return {
        aside: [],
        nav: [],
        heading: [],
        list: [],
        item: [],
        link: [],
    };
}`},{name:"title",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'"On this page"'},{name:"mainContentSelector",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'"main"'},{name:"headingLevel",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'"h4"'},{name:"headingElements",global:!1,description:"",tags:[],required:!1,type:"unknown[]",declarations:[],schema:{kind:"array",type:"unknown[]"},default:'["h2", "h3"]'},{name:"minimumHeadingCount",global:!1,description:"",tags:[],required:!1,type:"number",declarations:[],schema:"number",default:"2"},{name:"scrollOffset",global:!1,description:"",tags:[],required:!1,type:"number",declarations:[],schema:"number",default:"0"},{name:"rootMargin",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'"0px 0px 0px 0px"'},{name:"threshold",global:!1,description:"",tags:[],required:!1,type:"number | unknown[]",declarations:[],schema:{kind:"enum",type:"number | unknown[]",schema:["number",{kind:"array",type:"unknown[]"}]},default:"1"}],events:[{name:"activeHeading",description:"",tags:[],type:"any[]",signature:'(event: "activeHeading", ...args: any[]): void',declarations:[],schema:["any"]}],slots:[{name:"default",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}}],exposed:[{name:"customClasses",type:"Record<string, any>",description:"",declarations:[],schema:"Record<string, any>"},{name:"title",type:"string",description:"",declarations:[],schema:"string"},{name:"mainContentSelector",type:"string",description:"",declarations:[],schema:"string"},{name:"headingLevel",type:"string",description:"",declarations:[],schema:"string"},{name:"headingElements",type:"unknown[]",description:"",declarations:[],schema:{kind:"array",type:"unknown[]"}},{name:"minimumHeadingCount",type:"number",description:"",declarations:[],schema:"number"},{name:"scrollOffset",type:"number",description:"",declarations:[],schema:"number"},{name:"rootMargin",type:"string",description:"",declarations:[],schema:"string"},{name:"threshold",type:"number | unknown[]",description:"",declarations:[],schema:{kind:"enum",type:"number | unknown[]",schema:["number",{kind:"array",type:"unknown[]"}]}}],sourceFiles:"/home/runner/work/vue-uswds/vue-uswds/src/components/UsaInPageNav/UsaInPageNav.vue"};const B=`
  <main>
    <h1>Sample in-page navigation page</h1>

    <h2>Lorem ipsum dolor</h2>
    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi
      commodo, ipsum sed pharetra gravida, orci magna rhoncus neque, id
      pulvinar odio lorem non turpis. Nullam sit amet enim. Suspendisse id
      velit vitae ligula volutpat condimentum. Aliquam erat volutpat. Sed
      quis velit. Nulla facilisi. Nulla libero. Vivamus pharetra posuere
      sapien. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
      Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque,
      id pulvinar odio lorem non turpis. Nullam sit amet enim. Suspendisse
      id velit vitae ligula volutpat condimentum. Aliquam erat volutpat. Sed
      quis velit. Nulla facilisi. Nulla libero. Vivamus pharetra posuere
      sapien. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
      Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque,
      id pulvinar odio lorem non turpis. Nullam sit amet enim. Suspendisse
      id velit vitae ligula volutpat condimentum. Aliquam erat volutpat. Sed
      quis velit. Nulla facilisi. Nulla libero. Vivamus pharetra posuere
      sapien. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
      Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque,
      id pulvinar odio lorem non turpis. Nullam sit amet enim. Suspendisse
      id velit vitae ligula volutpat condimentum. Aliquam erat volutpat. Sed
      quis velit. Nulla facilisi. Nulla libero. Vivamus pharetra posuere
      sapien. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
      Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque,
      id pulvinar odio lorem non turpis. Nullam sit amet enim. Suspendisse
      id velit vitae ligula volutpat condimentum. Aliquam erat volutpat. Sed
      quis velit. Nulla facilisi. Nulla libero. Vivamus pharetra posuere
      sapien. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
      Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque,
      id pulvinar odio lorem non turpis. Nullam sit amet enim. Suspendisse
      id velit vitae ligula volutpat condimentum. Aliquam erat volutpat. Sed
      quis velit. Nulla facilisi. Nulla libero. Vivamus pharetra posuere
      sapien.</p>
    <h2></h2>
    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi
      commodo, ipsum sed pharetra gravida, orci magna rhoncus neque, id
      pulvinar odio lorem non turpis. Nullam sit amet enim. Suspendisse id
      velit vitae ligula volutpat condimentum. Aliquam erat volutpat. Sed
      quis velit. Nulla facilisi. Nulla libero. Vivamus pharetra posuere
      sapien. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
      Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque,
      id pulvinar odio lorem non turpis. Nullam sit amet enim. Suspendisse
      id velit vitae ligula volutpat condimentum. Aliquam erat volutpat. Sed
      quis velit. Nulla facilisi. Nulla libero. Vivamus pharetra posuere
      sapien. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
      Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque,
      id pulvinar odio lorem non turpis. Nullam sit amet enim. Suspendisse
      id velit vitae ligula volutpat condimentum. Aliquam erat volutpat. Sed
      quis velit. Nulla facilisi. Nulla libero. Vivamus pharetra posuere
      sapien. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
      Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque,
      id pulvinar odio lorem non turpis. Nullam sit amet enim. Suspendisse
      id velit vitae ligula volutpat condimentum. Aliquam erat volutpat. Sed
      quis velit. Nulla facilisi. Nulla libero. Vivamus pharetra posuere
      sapien. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
      Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque,
      id pulvinar odio lorem non turpis. Nullam sit amet enim. Suspendisse
      id velit vitae ligula volutpat condimentum. Aliquam erat volutpat. Sed
      quis velit. Nulla facilisi. Nulla libero. Vivamus pharetra posuere
      sapien. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
      Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque,
      id pulvinar odio lorem non turpis. Nullam sit amet enim. Suspendisse
      id velit vitae ligula volutpat condimentum. Aliquam erat volutpat. Sed
      quis velit. Nulla facilisi. Nulla libero. Vivamus pharetra posuere
      sapien.</p>

    <h2>Consectetuer adipiscing elit</h2>
    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi
      commodo, ipsum sed pharetra gravida, orci magna rhoncus neque, id
      pulvinar odio lorem non turpis. Nullam sit amet enim. Suspendisse id
      velit vitae ligula volutpat condimentum. Aliquam erat volutpat. Sed
      quis velit. Nulla facilisi. Nulla libero. Vivamus pharetra posuere
      sapien. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
      Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque,
      id pulvinar odio lorem non turpis. Nullam sit amet enim. Suspendisse
      id velit vitae ligula volutpat condimentum. Aliquam erat volutpat. Sed
      quis velit. Nulla facilisi. Nulla libero. Vivamus pharetra posuere
      sapien. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
      Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque,
      id pulvinar odio lorem non turpis. Nullam sit amet enim. Suspendisse
      id velit vitae ligula volutpat condimentum. Aliquam erat volutpat. Sed
      quis velit. Nulla facilisi. Nulla libero. Vivamus pharetra posuere
      sapien. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
      Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque,
      id pulvinar odio lorem non turpis. Nullam sit amet enim. Suspendisse
      id velit vitae ligula volutpat condimentum. Aliquam erat volutpat. Sed
      quis velit. Nulla facilisi. Nulla libero. Vivamus pharetra posuere
      sapien. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
      Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque,
      id pulvinar odio lorem non turpis. Nullam sit amet enim. Suspendisse
      id velit vitae ligula volutpat condimentum. Aliquam erat volutpat. Sed
      quis velit. Nulla facilisi. Nulla libero. Vivamus pharetra posuere
      sapien. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
      Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque,
      id pulvinar odio lorem non turpis. Nullam sit amet enim. Suspendisse
      id velit vitae ligula volutpat condimentum. Aliquam erat volutpat. Sed
      quis velit. Nulla facilisi. Nulla libero. Vivamus pharetra posuere
      sapien.</p>
    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi
      commodo, ipsum sed pharetra gravida, orci magna rhoncus neque, id
      pulvinar odio lorem non turpis. Nullam sit amet enim. Suspendisse id
      velit vitae ligula volutpat condimentum. Aliquam erat volutpat. Sed
      quis velit. Nulla facilisi. Nulla libero. Vivamus pharetra posuere
      sapien. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
      Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque,
      id pulvinar odio lorem non turpis. Nullam sit amet enim. Suspendisse
      id velit vitae ligula volutpat condimentum. Aliquam erat volutpat. Sed
      quis velit. Nulla facilisi. Nulla libero. Vivamus pharetra posuere
      sapien. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
      Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque,
      id pulvinar odio lorem non turpis. Nullam sit amet enim. Suspendisse
      id velit vitae ligula volutpat condimentum. Aliquam erat volutpat. Sed
      quis velit. Nulla facilisi. Nulla libero. Vivamus pharetra posuere
      sapien. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
      Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque,
      id pulvinar odio lorem non turpis. Nullam sit amet enim. Suspendisse
      id velit vitae ligula volutpat condimentum. Aliquam erat volutpat. Sed
      quis velit. Nulla facilisi. Nulla libero. Vivamus pharetra posuere
      sapien. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
      Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque,
      id pulvinar odio lorem non turpis. Nullam sit amet enim. Suspendisse
      id velit vitae ligula volutpat condimentum. Aliquam erat volutpat. Sed
      quis velit. Nulla facilisi. Nulla libero. Vivamus pharetra posuere
      sapien. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
      Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque,
      id pulvinar odio lorem non turpis. Nullam sit amet enim. Suspendisse
      id velit vitae ligula volutpat condimentum. Aliquam erat volutpat. Sed
      quis velit. Nulla facilisi. Nulla libero. Vivamus pharetra posuere
      sapien.</p>

    <h3>Nullam sit amet enim</h3>
    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi
      commodo, ipsum sed pharetra gravida, orci magna rhoncus neque, id
      pulvinar odio lorem non turpis. Nullam sit amet enim. Suspendisse id
      velit vitae ligula volutpat condimentum. Aliquam erat volutpat. Sed
      quis velit. Nulla facilisi. Nulla libero. Vivamus pharetra posuere
      sapien. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
      Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque,
      id pulvinar odio lorem non turpis. Nullam sit amet enim. Suspendisse
      id velit vitae ligula volutpat condimentum. Aliquam erat volutpat. Sed
      quis velit. Nulla facilisi. Nulla libero. Vivamus pharetra posuere
      sapien. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
      Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque,
      id pulvinar odio lorem non turpis. Nullam sit amet enim. Suspendisse
      id velit vitae ligula volutpat condimentum. Aliquam erat volutpat. Sed
      quis velit. Nulla facilisi. Nulla libero. Vivamus pharetra posuere
      sapien. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
      Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque,
      id pulvinar odio lorem non turpis. Nullam sit amet enim. Suspendisse
      id velit vitae ligula volutpat condimentum. Aliquam erat volutpat. Sed
      quis velit. Nulla facilisi. Nulla libero. Vivamus pharetra posuere
      sapien. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
      Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque,
      id pulvinar odio lorem non turpis. Nullam sit amet enim. Suspendisse
      id velit vitae ligula volutpat condimentum. Aliquam erat volutpat. Sed
      quis velit. Nulla facilisi. Nulla libero. Vivamus pharetra posuere
      sapien. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
      Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque,
      id pulvinar odio lorem non turpis. Nullam sit amet enim. Suspendisse
      id velit vitae ligula volutpat condimentum. Aliquam erat volutpat. Sed
      quis velit. Nulla facilisi. Nulla libero. Vivamus pharetra posuere
      sapien.</p>
    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi
      commodo, ipsum sed pharetra gravida, orci magna rhoncus neque, id
      pulvinar odio lorem non turpis. Nullam sit amet enim. Suspendisse id
      velit vitae ligula volutpat condimentum. Aliquam erat volutpat. Sed
      quis velit. Nulla facilisi. Nulla libero. Vivamus pharetra posuere
      sapien. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
      Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque,
      id pulvinar odio lorem non turpis. Nullam sit amet enim. Suspendisse
      id velit vitae ligula volutpat condimentum. Aliquam erat volutpat. Sed
      quis velit. Nulla facilisi. Nulla libero. Vivamus pharetra posuere
      sapien. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
      Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque,
      id pulvinar odio lorem non turpis. Nullam sit amet enim. Suspendisse
      id velit vitae ligula volutpat condimentum. Aliquam erat volutpat. Sed
      quis velit. Nulla facilisi. Nulla libero. Vivamus pharetra posuere
      sapien. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
      Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque,
      id pulvinar odio lorem non turpis. Nullam sit amet enim. Suspendisse
      id velit vitae ligula volutpat condimentum. Aliquam erat volutpat. Sed
      quis velit. Nulla facilisi. Nulla libero. Vivamus pharetra posuere
      sapien. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
      Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque,
      id pulvinar odio lorem non turpis. Nullam sit amet enim. Suspendisse
      id velit vitae ligula volutpat condimentum. Aliquam erat volutpat. Sed
      quis velit. Nulla facilisi. Nulla libero. Vivamus pharetra posuere
      sapien. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
      Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque,
      id pulvinar odio lorem non turpis. Nullam sit amet enim. Suspendisse
      id velit vitae ligula volutpat condimentum. Aliquam erat volutpat. Sed
      quis velit. Nulla facilisi. Nulla libero. Vivamus pharetra posuere
      sapien.</p>

    <h3>#Vivamus pharetra posuere sapien</h3>
    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi
      commodo, ipsum sed pharetra gravida, orci magna rhoncus neque, id
      pulvinar odio lorem non turpis. Nullam sit amet enim. Suspendisse id
      velit vitae ligula volutpat condimentum. Aliquam erat volutpat. Sed
      quis velit. Nulla facilisi. Nulla libero. Vivamus pharetra posuere
      sapien. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
      Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque,
      id pulvinar odio lorem non turpis. Nullam sit amet enim. Suspendisse
      id velit vitae ligula volutpat condimentum. Aliquam erat volutpat. Sed
      quis velit. Nulla facilisi. Nulla libero. Vivamus pharetra posuere
      sapien. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
      Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque,
      id pulvinar odio lorem non turpis. Nullam sit amet enim. Suspendisse
      id velit vitae ligula volutpat condimentum. Aliquam erat volutpat. Sed
      quis velit. Nulla facilisi. Nulla libero. Vivamus pharetra posuere
      sapien. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
      Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque,
      id pulvinar odio lorem non turpis. Nullam sit amet enim. Suspendisse
      id velit vitae ligula volutpat condimentum. Aliquam erat volutpat. Sed
      quis velit. Nulla facilisi. Nulla libero. Vivamus pharetra posuere
      sapien. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
      Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque,
      id pulvinar odio lorem non turpis. Nullam sit amet enim. Suspendisse
      id velit vitae ligula volutpat condimentum. Aliquam erat volutpat. Sed
      quis velit. Nulla facilisi. Nulla libero. Vivamus pharetra posuere
      sapien. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
      Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque,
      id pulvinar odio lorem non turpis. Nullam sit amet enim. Suspendisse
      id velit vitae ligula volutpat condimentum. Aliquam erat volutpat. Sed
      quis velit. Nulla facilisi. Nulla libero. Vivamus pharetra posuere
      sapien.</p>
    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi
      commodo, ipsum sed pharetra gravida, orci magna rhoncus neque, id
      pulvinar odio lorem non turpis. Nullam sit amet enim. Suspendisse id
      velit vitae ligula volutpat condimentum. Aliquam erat volutpat. Sed
      quis velit. Nulla facilisi. Nulla libero. Vivamus pharetra posuere
      sapien. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
      Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque,
      id pulvinar odio lorem non turpis. Nullam sit amet enim. Suspendisse
      id velit vitae ligula volutpat condimentum. Aliquam erat volutpat. Sed
      quis velit. Nulla facilisi. Nulla libero. Vivamus pharetra posuere
      sapien. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
      Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque,
      id pulvinar odio lorem non turpis. Nullam sit amet enim. Suspendisse
      id velit vitae ligula volutpat condimentum. Aliquam erat volutpat. Sed
      quis velit. Nulla facilisi. Nulla libero. Vivamus pharetra posuere
      sapien. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
      Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque,
      id pulvinar odio lorem non turpis. Nullam sit amet enim. Suspendisse
      id velit vitae ligula volutpat condimentum. Aliquam erat volutpat. Sed
      quis velit. Nulla facilisi. Nulla libero. Vivamus pharetra posuere
      sapien. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
      Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque,
      id pulvinar odio lorem non turpis. Nullam sit amet enim. Suspendisse
      id velit vitae ligula volutpat condimentum. Aliquam erat volutpat. Sed
      quis velit. Nulla facilisi. Nulla libero. Vivamus pharetra posuere
      sapien. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
      Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque,
      id pulvinar odio lorem non turpis. Nullam sit amet enim. Suspendisse
      id velit vitae ligula volutpat condimentum. Aliquam erat volutpat. Sed
      quis velit. Nulla facilisi. Nulla libero. Vivamus pharetra posuere
      sapien.</p>

    <h2>Suspendisse id velit</h2>
    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi
      commodo, ipsum sed pharetra gravida, orci magna rhoncus neque, id
      pulvinar odio lorem non turpis. Nullam sit amet enim. Suspendisse id
      velit vitae ligula volutpat condimentum. Aliquam erat volutpat. Sed
      quis velit. Nulla facilisi. Nulla libero. Vivamus pharetra posuere
      sapien. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
      Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque,
      id pulvinar odio lorem non turpis. Nullam sit amet enim. Suspendisse
      id velit vitae ligula volutpat condimentum. Aliquam erat volutpat. Sed
      quis velit. Nulla facilisi. Nulla libero. Vivamus pharetra posuere
      sapien. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
      Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque,
      id pulvinar odio lorem non turpis. Nullam sit amet enim. Suspendisse
      id velit vitae ligula volutpat condimentum. Aliquam erat volutpat. Sed
      quis velit. Nulla facilisi. Nulla libero. Vivamus pharetra posuere
      sapien. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
      Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque,
      id pulvinar odio lorem non turpis. Nullam sit amet enim. Suspendisse
      id velit vitae ligula volutpat condimentum. Aliquam erat volutpat. Sed
      quis velit. Nulla facilisi. Nulla libero. Vivamus pharetra posuere
      sapien. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
      Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque,
      id pulvinar odio lorem non turpis. Nullam sit amet enim. Suspendisse
      id velit vitae ligula volutpat condimentum. Aliquam erat volutpat. Sed
      quis velit. Nulla facilisi. Nulla libero. Vivamus pharetra posuere
      sapien. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
      Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque,
      id pulvinar odio lorem non turpis. Nullam sit amet enim. Suspendisse
      id velit vitae ligula volutpat condimentum. Aliquam erat volutpat. Sed
      quis velit. Nulla facilisi. Nulla libero. Vivamus pharetra posuere
      sapien.</p>

    <h3>Suspendisse id velit</h3>
    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi
      commodo, ipsum sed pharetra gravida, orci magna rhoncus neque, id
      pulvinar odio lorem non turpis. Nullam sit amet enim. Suspendisse id
      velit vitae ligula volutpat condimentum. Aliquam erat volutpat. Sed
      quis velit. Nulla facilisi. Nulla libero. Vivamus pharetra posuere
      sapien. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
      Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque,
      id pulvinar odio lorem non turpis. Nullam sit amet enim. Suspendisse
      id velit vitae ligula volutpat condimentum. Aliquam erat volutpat. Sed
      quis velit. Nulla facilisi. Nulla libero. Vivamus pharetra posuere
      sapien. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>

    <h3>Orci magna rhoncus neque</h3>
    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi
      commodo, ipsum sed pharetra gravida, orci magna rhoncus neque, id
      pulvinar odio lorem non turpis. Nullam sit amet enim. Suspendisse id
      velit vitae ligula volutpat condimentum. Aliquam erat volutpat. Sed
      quis velit. Nulla facilisi. Nulla libero. Vivamus pharetra posuere
      sapien. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
      Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque,
      id pulvinar odio lorem non turpis. Nullam sit amet enim. Suspendisse
      id velit vitae ligula volutpat condimentum. Aliquam erat volutpat. Sed
      quis velit. Nulla facilisi. Nulla libero. Vivamus pharetra posuere
      sapien. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
      Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque,
      id pulvinar odio lorem non turpis. Nullam sit amet enim. Suspendisse
      id velit vitae ligula volutpat condimentum. Aliquam erat volutpat. Sed
      quis velit. Nulla facilisi. Nulla libero. Vivamus pharetra posuere
      sapien. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
      Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque,
      id pulvinar odio lorem non turpis. Nullam sit amet enim. Suspendisse
      id velit vitae ligula volutpat condimentum. Aliquam erat volutpat. Sed
      quis velit. Nulla facilisi. Nulla libero. Vivamus pharetra posuere
      sapien. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
      Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque,
      id pulvinar odio lorem non turpis. Nullam sit amet enim. Suspendisse
      id velit vitae ligula volutpat condimentum. Aliquam erat volutpat. Sed
      quis velit. Nulla facilisi. Nulla libero. Vivamus pharetra posuere
      sapien. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
      Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque,
      id pulvinar odio lorem non turpis. Nullam sit amet enim. Suspendisse
      id velit vitae ligula volutpat condimentum. Aliquam erat volutpat. Sed
      quis velit. Nulla facilisi. Nulla libero. Vivamus pharetra posuere
      sapien.</p>

    <h4>Sed quis velit</h4>
    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi
      commodo, ipsum sed pharetra gravida, orci magna rhoncus neque, id
      pulvinar odio lorem non turpis. Nullam sit amet enim. Suspendisse id
      velit vitae ligula volutpat condimentum. Aliquam erat volutpat. Sed
      quis velit. Nulla facilisi. Nulla libero. Vivamus pharetra posuere
      sapien. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
      Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque,
      id pulvinar odio lorem non turpis. Nullam sit amet enim. Suspendisse
      id velit vitae ligula volutpat condimentum. Aliquam erat volutpat. Sed
      quis velit. Nulla facilisi. Nulla libero. Vivamus pharetra posuere
      sapien. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
      Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque,
      id pulvinar odio lorem non turpis. Nullam sit amet enim. Suspendisse
      id velit vitae ligula volutpat condimentum. Aliquam erat volutpat. Sed
      quis velit. Nulla facilisi. Nulla libero. Vivamus pharetra posuere
      sapien. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
      Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque,
      id pulvinar odio lorem non turpis. Nullam sit amet enim. Suspendisse
      id velit vitae ligula volutpat condimentum. Aliquam erat volutpat. Sed
      quis velit. Nulla facilisi. Nulla libero. Vivamus pharetra posuere
      sapien. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
      Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque,
      id pulvinar odio lorem non turpis. Nullam sit amet enim. Suspendisse
      id velit vitae ligula volutpat condimentum. Aliquam erat volutpat. Sed
      quis velit. Nulla facilisi. Nulla libero. Vivamus pharetra posuere
      sapien. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
      Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque,
      id pulvinar odio lorem non turpis. Nullam sit amet enim. Suspendisse
      id velit vitae ligula volutpat condimentum. Aliquam erat volutpat. Sed
      quis velit. Nulla facilisi. Nulla libero. Vivamus pharetra posuere
      sapien.</p>

    <h2 style="display: none">Aliquam erat volutpat: velit vitae ligula volutpat</h2>
    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi
      commodo, ipsum sed pharetra gravida, orci magna rhoncus neque, id
      pulvinar odio lorem non turpis. Nullam sit amet enim. Suspendisse id
      velit vitae ligula volutpat condimentum. Aliquam erat volutpat. Sed
      quis velit. Nulla facilisi. Nulla libero. Vivamus pharetra posuere
      sapien. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
      Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque,
      id pulvinar odio lorem non turpis. Nullam sit amet enim. Suspendisse
      id velit vitae ligula volutpat condimentum. Aliquam erat volutpat. Sed
      quis velit. Nulla facilisi. Nulla libero. Vivamus pharetra posuere
      sapien. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
      Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque,
      id pulvinar odio lorem non turpis. Nullam sit amet enim. Suspendisse
      id velit vitae ligula volutpat condimentum. Aliquam erat volutpat. Sed
      quis velit. Nulla facilisi. Nulla libero. Vivamus pharetra posuere
      sapien. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
      Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque,
      id pulvinar odio lorem non turpis. Nullam sit amet enim. Suspendisse
      id velit vitae ligula volutpat condimentum. Aliquam erat volutpat. Sed
      quis velit. Nulla facilisi. Nulla libero. Vivamus pharetra posuere
      sapien. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
      Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque,
      id pulvinar odio lorem non turpis. Nullam sit amet enim. Suspendisse
      id velit vitae ligula volutpat condimentum. Aliquam erat volutpat. Sed
      quis velit. Nulla facilisi. Nulla libero. Vivamus pharetra posuere
      sapien. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
      Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque,
      id pulvinar odio lorem non turpis. Nullam sit amet enim. Suspendisse
      id velit vitae ligula volutpat condimentum. Aliquam erat volutpat. Sed
      quis velit. Nulla facilisi. Nulla libero. Vivamus pharetra posuere
      sapien.</p>
    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi
      commodo, ipsum sed pharetra gravida, orci magna rhoncus neque, id
      pulvinar odio lorem non turpis. Nullam sit amet enim. Suspendisse id
      velit vitae ligula volutpat condimentum. Aliquam erat volutpat. Sed
      quis velit. Nulla facilisi. Nulla libero. Vivamus pharetra posuere
      sapien. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
      Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque,
      id pulvinar odio lorem non turpis. Nullam sit amet enim. Suspendisse
      id velit vitae ligula volutpat condimentum. Aliquam erat volutpat. Sed
      quis velit. Nulla facilisi. Nulla libero. Vivamus pharetra posuere
      sapien. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
      Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque,
      id pulvinar odio lorem non turpis. Nullam sit amet enim. Suspendisse
      id velit vitae ligula volutpat condimentum. Aliquam erat volutpat. Sed
      quis velit. Nulla facilisi. Nulla libero. Vivamus pharetra posuere
      sapien. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
      Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque,
      id pulvinar odio lorem non turpis. Nullam sit amet enim. Suspendisse
      id velit vitae ligula volutpat condimentum. Aliquam erat volutpat. Sed
      quis velit. Nulla facilisi. Nulla libero. Vivamus pharetra posuere
      sapien. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
      Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque,
      id pulvinar odio lorem non turpis. Nullam sit amet enim. Suspendisse
      id velit vitae ligula volutpat condimentum. Aliquam erat volutpat. Sed
      quis velit. Nulla facilisi. Nulla libero. Vivamus pharetra posuere
      sapien. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
      Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque,
      id pulvinar odio lorem non turpis. Nullam sit amet enim. Suspendisse
      id velit vitae ligula volutpat condimentum. Aliquam erat volutpat. Sed
      quis velit. Nulla facilisi. Nulla libero. Vivamus pharetra posuere
      sapien.</p>

    <h3>Vitae ligula</h3>
    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi
      commodo, ipsum sed pharetra gravida, orci magna rhoncus neque, id
      pulvinar odio lorem non turpis. Nullam sit amet enim. Suspendisse id
      velit vitae ligula volutpat condimentum. Aliquam erat volutpat. Sed
      quis velit. Nulla facilisi. Nulla libero. Vivamus pharetra posuere
      sapien. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
      Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque,
      id pulvinar odio lorem non turpis. Nullam sit amet enim. Suspendisse
      id velit vitae ligula volutpat condimentum. Aliquam erat volutpat. Sed
      quis velit. Nulla facilisi. Nulla libero. Vivamus pharetra posuere
      sapien. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
      Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque,
      id pulvinar odio lorem non turpis. Nullam sit amet enim. Suspendisse
      id velit vitae ligula volutpat condimentum. Aliquam erat volutpat. Sed
      quis velit. Nulla facilisi. Nulla libero. Vivamus pharetra posuere
      sapien. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
      Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque,
      id pulvinar odio lorem non turpis. Nullam sit amet enim. Suspendisse
      id velit vitae ligula volutpat condimentum. Aliquam erat volutpat. Sed
      quis velit. Nulla facilisi. Nulla libero. Vivamus pharetra posuere
      sapien. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
      Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque,
      id pulvinar odio lorem non turpis. Nullam sit amet enim. Suspendisse
      id velit vitae ligula volutpat condimentum. Aliquam erat volutpat. Sed
      quis velit. Nulla facilisi. Nulla libero. Vivamus pharetra posuere
      sapien. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
      Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque,
      id pulvinar odio lorem non turpis. Nullam sit amet enim. Suspendisse
      id velit vitae ligula volutpat condimentum. Aliquam erat volutpat. Sed
      quis velit. Nulla facilisi. Nulla libero. Vivamus pharetra posuere
      sapien.</p>
    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi
      commodo, ipsum sed pharetra gravida, orci magna rhoncus neque, id
      pulvinar odio lorem non turpis. Nullam sit amet enim. Suspendisse id
      velit vitae ligula volutpat condimentum. Aliquam erat volutpat. Sed
      quis velit. Nulla facilisi. Nulla libero. Vivamus pharetra posuere
      sapien. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
      Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque,
      id pulvinar odio lorem non turpis. Nullam sit amet enim. Suspendisse
      id velit vitae ligula volutpat condimentum. Aliquam erat volutpat. Sed
      quis velit. Nulla facilisi. Nulla libero. Vivamus pharetra posuere
      sapien. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
      Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque,
      id pulvinar odio lorem non turpis. Nullam sit amet enim. Suspendisse
      id velit vitae ligula volutpat condimentum. Aliquam erat volutpat. Sed
      quis velit. Nulla facilisi. Nulla libero. Vivamus pharetra posuere
      sapien. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
      Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque,
      id pulvinar odio lorem non turpis. Nullam sit amet enim. Suspendisse
      id velit vitae ligula volutpat condimentum. Aliquam erat volutpat. Sed
      quis velit. Nulla facilisi. Nulla libero. Vivamus pharetra posuere
      sapien. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
      Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque,
      id pulvinar odio lorem non turpis. Nullam sit amet enim. Suspendisse
      id velit vitae ligula volutpat condimentum. Aliquam erat volutpat. Sed
      quis velit. Nulla facilisi. Nulla libero. Vivamus pharetra posuere
      sapien. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
      Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque,
      id pulvinar odio lorem non turpis. Nullam sit amet enim. Suspendisse
      id velit vitae ligula volutpat condimentum. Aliquam erat volutpat. Sed
      quis velit. Nulla facilisi. Nulla libero. Vivamus pharetra posuere
      sapien.</p>
    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi
      commodo, ipsum sed pharetra gravida, orci magna rhoncus neque, id
      pulvinar odio lorem non turpis. Nullam sit amet enim. Suspendisse id
      velit vitae ligula volutpat condimentum. Aliquam erat volutpat. Sed
      quis velit. Nulla facilisi. Nulla libero. Vivamus pharetra posuere
      sapien. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
      Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque,
      id pulvinar odio lorem non turpis. Nullam sit amet enim. Suspendisse
      id velit vitae ligula volutpat condimentum. Aliquam erat volutpat. Sed
      quis velit. Nulla facilisi. Nulla libero. Vivamus pharetra posuere
      sapien. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
      Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque,
      id pulvinar odio lorem non turpis. Nullam sit amet enim. Suspendisse
      id velit vitae ligula volutpat condimentum. Aliquam erat volutpat. Sed
      quis velit. Nulla facilisi. Nulla libero. Vivamus pharetra posuere
      sapien. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
      Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque,
      id pulvinar odio lorem non turpis. Nullam sit amet enim. Suspendisse
      id velit vitae ligula volutpat condimentum. Aliquam erat volutpat. Sed
      quis velit. Nulla facilisi. Nulla libero. Vivamus pharetra posuere
      sapien. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
      Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque,
      id pulvinar odio lorem non turpis. Nullam sit amet enim. Suspendisse
      id velit vitae ligula volutpat condimentum. Aliquam erat volutpat. Sed
      quis velit. Nulla facilisi. Nulla libero. Vivamus pharetra posuere
      sapien. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
      Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque,
      id pulvinar odio lorem non turpis. Nullam sit amet enim. Suspendisse
      id velit vitae ligula volutpat condimentum. Aliquam erat volutpat. Sed
      quis velit. Nulla facilisi. Nulla libero. Vivamus pharetra posuere
      sapien.</p>
  </main>`,u={title:l.props.title.default,mainContentSelector:l.props.mainContentSelector.default,headingLevel:l.props.headingLevel.default,headingElements:l.props.headingElements.default(),minimumHeadingCount:l.props.minimumHeadingCount.default,scrollOffset:l.props.scrollOffset.default,rootMargin:l.props.rootMargin.default,threshold:l.props.threshold.default,customClasses:l.props.customClasses.default()},Ae={component:l,title:"Components/UsaInPageNav",argTypes:{title:{control:{type:"text"}},mainContentSelector:{control:{type:"text"}},headingLevel:{control:{type:"text"}},headingElements:{control:{type:"object"}},minimumHeadingCount:{control:{type:"number"}},scrollOffset:{control:{type:"number"}},rootMargin:{control:{type:"text"}},threshold:{control:{type:"number"}},customClasses:{control:{type:"object"}},default:{control:{type:"text"}}},args:{title:u.title,mainContentSelector:u.mainContentSelector,headingLevel:u.headingLevel,headingElements:u.headingElements,minimumHeadingCount:u.minimumHeadingCount,scrollOffset:u.scrollOffset,rootMargin:u.rootMargin,threshold:u.threshold,customClasses:u.customClasses,default:""},render:a=>({components:{UsaInPageNav:l},props:Object.keys(l.props),setup(){return{args:a}},template:`<UsaInPageNav
      :title="args.title"
      :main-content-selector="args.mainContentSelector"
      :heading-level="args.headingLevel"
      :heading-elements="args.headingElements"
      :minimum-heading-count="args.minimumHeadingCount"
      :scroll-offset="args.scrollOffset"
      :root-margin="args.rootMargin"
      :threshold="args.threshold"
      :custom-classes="args.customClasses"
    >
      <template v-if="!!args.default" #default>${a.default}</template>
    </UsaInPageNav>`})},E={args:{...u,default:B},name:"Default",parameters:{docs:{source:{code:`<UsaInPageNav>${B}</UsaInPageNav>`}}}};var D,K,z;E.parameters={...E.parameters,docs:{...(D=E.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    default: testSlotContent1
  },
  name: 'Default',
  parameters: {
    docs: {
      source: {
        code: \`<UsaInPageNav>\${testSlotContent1}</UsaInPageNav>\`
      }
    }
  }
}`,...(z=(K=E.parameters)==null?void 0:K.docs)==null?void 0:z.source}}};const Ve=["DefaultUsaInPageNav"];export{E as DefaultUsaInPageNav,Ve as __namedExportsOrder,Ae as default};
