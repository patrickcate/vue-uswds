import{l as W,s as C,V as Z,u as je,M as _,c as b,a as w,r as P,b as n,G as A,H as Re,n as G,o as g,A as ee,O as ae,I as te,g as U,t as ne,d as H,v as Q,f as Je}from"./vue.esm-bundler-2e7cedae.js";import{U as se}from"./UsaPaginationArrow-17230b2f.js";import{U as Be}from"./UsaPaginationItem-20b76871.js";import"./constants-fce87d39.js";import"./BaseLink-05a2e488.js";import"./_plugin-vue_export-helper-c27b6911.js";function Ve(a,r,i,f){const t=W(a),h=W(i),u=C(()=>{const e=[];for(let o=1;o<=r.value;o++)e.push(o);return e}),M=C(()=>{if(r.value<=7)return u.value;if(t.value-3<=1){const o=u.value.slice(0,7);return o[o.length-1]=r.value,o}if(t.value+3>=r.value){const o=u.value.slice(r.value-7,r.value);return o[0]=1,o}const e=u.value.slice(t.value-4,t.value+3);return h.value||(e[e.length-1]=r.value),e[0]=1,e}),S=C(()=>t.value===1),T=C(()=>t.value===r.value),E=e=>{if(r.value<=7)return!1;if(e===1&&t.value>4||!h.value&&e===5&&r.value-t.value>3||h.value&&e===6&&t.value!==r.value)return!0},k=e=>{f("update:currentPage",e)},$=()=>{k(1)},I=()=>{k(t.value-1)},K=()=>{k(t.value+1)},z=()=>{k(r.value)};return{currentPage:Z(t),unbounded:Z(h),totalPages:r,isFirstPage:S,isLastPage:T,isOverflowSlot:E,toFirstPage:$,toLastPage:z,toNextPage:K,toPreviousPage:I,updateCurrentPage:k,visiblePageRange:M}}const De=["aria-label"],Me={key:0,class:"usa-icon","aria-hidden":"true",role:"img"},Ee=["xlink:href"],Ke=["aria-label"],ze={key:0,class:"usa-icon","aria-hidden":"true",role:"img"},Ge=["xlink:href"],qe={__name:"UsaPagination",props:{items:{type:Array,default:()=>[]},unbounded:{type:Boolean,default:!1},currentPage:{type:Number,default:1,validator(a){return a>0}},ariaLabel:{type:String,default:"Pagination"},previousLinkText:{type:String,default:"Previous"},nextLinkText:{type:String,default:"Next"},firstPageAriaLabel:{type:String,default:"First page, page %s"},previousPageAriaLabel:{type:String,default:"Previous page"},numberPageAriaLabel:{type:String,default:"Page %s"},nextPageAriaLabel:{type:String,default:"Next page"},lastPageAriaLabel:{type:String,default:"Last page, page %s"},overflowAriaLabel:{type:String,default:"ellipsis indicating non-visible pages"},customClasses:{type:Object,default:()=>({list:[]})}},emits:["update:currentPage"],setup(a,{emit:r}){const i=je();i!=null&&i.previousIcon&&console.warn("The 'previousIcon' slot is deprecated, use 'previous-icon' instead."),i!=null&&i.previousLabel&&console.warn("The 'previousLabel' slot is deprecated, use 'previous-label' instead."),i!=null&&i.nextIcon&&console.warn("The 'nextIcon' slot is deprecated, use 'next-icon' instead."),i!=null&&i.nextLabel&&console.warn("The 'nextLabel' slot is deprecated, use 'next-label' instead.");const f=r,t=a,h=C(()=>t.items.length),{currentPage:u,totalPages:M,isFirstPage:S,isLastPage:T,isOverflowSlot:E,visiblePageRange:k,toPreviousPage:$,toNextPage:I,updateCurrentPage:K}=Ve(_(t,"currentPage"),h,_(t,"unbounded"),f);function z(e){return e===1?t.firstPageAriaLabel.includes("#")?(console.warn("The '#' placeholder is deprecated, use '%s' instead."),t.firstPageAriaLabel.replaceAll("#",e)):t.firstPageAriaLabel.replaceAll("%s",e):e===M.value?t.lastPageAriaLabel.includes("#")?(console.warn("The '#' placeholder is deprecated, use '%s' instead."),t.lastPageAriaLabel.replaceAll("#",e)):t.lastPageAriaLabel.replaceAll("%s",e):t.numberPageAriaLabel.includes("#")?(console.warn("The '#' placeholder is deprecated, use '%s' instead."),t.numberPageAriaLabel.replaceAll("#",e)):t.numberPageAriaLabel.replaceAll("%s",e)}return(e,o)=>{var X;return g(),b("nav",{"aria-label":a.ariaLabel,class:"usa-pagination"},[w("ul",{class:G(["usa-pagination__list",(X=a.customClasses)==null?void 0:X.list])},[P(e.$slots,"previous",{isFirstPage:n(S),toPreviousPage:n($)},()=>{var c,m,v,y,L,x;return[ee(te(n(se),{direction:"previous",class:G({"usa-pagination__item--hidden":n(S)}),"aria-label":a.previousPageAriaLabel,href:((m=(c=a.items)==null?void 0:c[n(u)-2])==null?void 0:m.href)||null,to:((y=(v=a.items)==null?void 0:v[n(u)-2])==null?void 0:y.to)||null,"router-component-name":((x=(L=a.items)==null?void 0:L[n(u)-2])==null?void 0:x.routerComponentName)||null,onClick:o[0]||(o[0]=d=>n($)())},{before:U(({svgSpritePath:d})=>[e.$slots["previous-icon"]?P(e.$slots,"previous-icon",{key:0}):e.$slots.previousIcon?P(e.$slots,"previousIcon",{key:1}):(g(),b(A,{key:2},[d?(g(),b("svg",Me,[w("use",{"xlink:href":`${d}#navigate_before`},null,8,Ee)])):ne("",!0)],64))]),default:U(()=>[e.$slots["previous-label"]?P(e.$slots,"previous-label",{key:0}):e.$slots.previousLabel?P(e.$slots,"previousLabel",{key:1}):(g(),b(A,{key:2},[H(Q(a.previousLinkText),1)],64))]),_:3},8,["class","aria-label","href","to","router-component-name"]),[[ae,!n(S)]])]}),(g(!0),b(A,null,Re(n(k),(c,m)=>{var v,y,L,x,d,Y;return g(),b(A,{key:c},[n(E)(m)?(g(),b("li",{key:0,class:"usa-pagination__item usa-pagination__overflow","aria-label":a.overflowAriaLabel},o[2]||(o[2]=[w("span",null,"…",-1)]),8,Ke)):(g(),Je(n(Be),{key:1,"page-number":c,"is-current-page":c===n(u),"aria-label":z(c),href:((y=(v=a.items)==null?void 0:v[m])==null?void 0:y.href)||null,to:((x=(L=a.items)==null?void 0:L[m])==null?void 0:x.to)||null,"router-component-name":((Y=(d=a.items)==null?void 0:d[m])==null?void 0:Y.routerComponentName)||null,onClick:He=>n(K)(c)},{default:U(()=>[H(Q(c),1)]),_:2},1032,["page-number","is-current-page","aria-label","href","to","router-component-name","onClick"]))],64)}),128)),P(e.$slots,"next",{isLastPage:n(T),toNextPage:n(I)},()=>{var c,m,v,y,L,x;return[ee(te(n(se),{direction:"next",class:G({"usa-pagination__item--hidden":n(T)}),"aria-label":a.nextPageAriaLabel,href:((m=(c=a.items)==null?void 0:c[n(u)])==null?void 0:m.href)||null,to:((y=(v=a.items)==null?void 0:v[n(u)])==null?void 0:y.to)||null,"router-component-name":((x=(L=a.items)==null?void 0:L[n(u)])==null?void 0:x.routerComponentName)||null,onClick:o[1]||(o[1]=d=>n(I)())},{after:U(({svgSpritePath:d})=>[e.$slots["next-icon"]?P(e.$slots,"next-icon",{key:0}):e.$slots.nextIcon?P(e.$slots,"nextIcon",{key:1}):(g(),b(A,{key:2},[d?(g(),b("svg",ze,[w("use",{"xlink:href":`${d}#navigate_next`},null,8,Ge)])):ne("",!0)],64))]),default:U(()=>[e.$slots["next-label"]?P(e.$slots,"next-label",{key:0}):e.$slots.nextLabel?P(e.$slots,"nextLabel",{key:1}):(g(),b(A,{key:2},[H(Q(a.nextLinkText),1)],64))]),_:3},8,["class","aria-label","href","to","router-component-name"]),[[ae,!n(T)]])]})],2)],8,De)}}},l=qe;qe.__docgenInfo={exportName:"default",displayName:"UsaPagination",type:1,props:[{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"customClasses",global:!1,description:"",tags:[],required:!1,type:"Record<string, any>",declarations:[],schema:"Record<string, any>",default:`() => {
    return {
        list: [],
    };
}`},{name:"ariaLabel",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'"Pagination"'},{name:"items",global:!1,description:"",tags:[],required:!1,type:"unknown[]",declarations:[],schema:{kind:"array",type:"unknown[]"},default:"[]"},{name:"unbounded",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]},default:"false"},{name:"currentPage",global:!1,description:"",tags:[],required:!1,type:"number",declarations:[],schema:"number",default:"1"},{name:"previousLinkText",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'"Previous"'},{name:"nextLinkText",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'"Next"'},{name:"firstPageAriaLabel",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'"First page, page %s"'},{name:"previousPageAriaLabel",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'"Previous page"'},{name:"numberPageAriaLabel",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'"Page %s"'},{name:"nextPageAriaLabel",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'"Next page"'},{name:"lastPageAriaLabel",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'"Last page, page %s"'},{name:"overflowAriaLabel",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'"ellipsis indicating non-visible pages"'}],events:[{name:"update:currentPage",description:"",tags:[],type:"any[]",signature:'(event: "update:currentPage", ...args: any[]): void',declarations:[],schema:["any"]}],slots:[{name:"previous",type:"{ isFirstPage: any; toPreviousPage: any; }",description:"",declarations:[],schema:{kind:"object",type:"{ isFirstPage: any; toPreviousPage: any; }"}},{name:"previous-icon",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}},{name:"previousIcon",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}},{name:"previous-label",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}},{name:"previousLabel",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}},{name:"next",type:"{ isLastPage: any; toNextPage: any; }",description:"",declarations:[],schema:{kind:"object",type:"{ isLastPage: any; toNextPage: any; }"}},{name:"next-icon",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}},{name:"nextIcon",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}},{name:"next-label",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}},{name:"nextLabel",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}}],exposed:[{name:"$slots",type:'Readonly<InternalSlots> & { previous?(_: { isFirstPage: any; toPreviousPage: any; }): any; "previous-icon"?(_: {}): any; previousIcon?(_: {}): any; "previous-label"?(_: {}): any; ... 5 more ...; nextLabel?(_: {}): any; }',description:"",declarations:[],schema:{kind:"object",type:'Readonly<InternalSlots> & { previous?(_: { isFirstPage: any; toPreviousPage: any; }): any; "previous-icon"?(_: {}): any; previousIcon?(_: {}): any; "previous-label"?(_: {}): any; ... 5 more ...; nextLabel?(_: {}): any; }'}},{name:"customClasses",type:"Record<string, any>",description:"",declarations:[],schema:"Record<string, any>"},{name:"ariaLabel",type:"string",description:"",declarations:[],schema:"string"},{name:"items",type:"unknown[]",description:"",declarations:[],schema:{kind:"array",type:"unknown[]"}},{name:"unbounded",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"currentPage",type:"number",description:"",declarations:[],schema:"number"},{name:"previousLinkText",type:"string",description:"",declarations:[],schema:"string"},{name:"nextLinkText",type:"string",description:"",declarations:[],schema:"string"},{name:"firstPageAriaLabel",type:"string",description:"",declarations:[],schema:"string"},{name:"previousPageAriaLabel",type:"string",description:"",declarations:[],schema:"string"},{name:"numberPageAriaLabel",type:"string",description:"",declarations:[],schema:"string"},{name:"nextPageAriaLabel",type:"string",description:"",declarations:[],schema:"string"},{name:"lastPageAriaLabel",type:"string",description:"",declarations:[],schema:"string"},{name:"overflowAriaLabel",type:"string",description:"",declarations:[],schema:"string"}],sourceFiles:"/home/runner/work/vue-uswds/vue-uswds/src/components/UsaPagination/UsaPagination.vue"};function p(a,r){const i=[];for(let f=0;f<a;f++){let t={...r};t.to&&(t.to=t.to.replace("#",f+1)),t.href&&(t.href=t.href.replace("#",f+1)),i.push(t)}return i}const s={items:p(8,{}),unbounded:l.props.unbounded.default,currentPage:l.props.currentPage.default,ariaLabel:l.props.ariaLabel.default,previousLinkText:l.props.previousLinkText.default,nextLinkText:l.props.nextLinkText.default,firstPageAriaLabel:l.props.firstPageAriaLabel.default,previousPageAriaLabel:l.props.previousPageAriaLabel.default,numberPageAriaLabel:l.props.numberPageAriaLabel.default,nextPageAriaLabel:l.props.nextPageAriaLabel.default,lastPageAriaLabel:l.props.lastPageAriaLabel.default,overflowAriaLabel:l.props.overflowAriaLabel.default,customClasses:l.props.customClasses.default()},ea={component:l,title:"Components/UsaPagination",argTypes:{items:{control:{type:"object"}},unbounded:{control:{type:"boolean"}},currentPage:{control:{type:"number",disable:!0}},ariaLabel:{control:{type:"text"}},previousLinkText:{control:{type:"text"}},nextLinkText:{control:{type:"text"}},firstPageAriaLabel:{control:{type:"text"}},previousPageAriaLabel:{control:{type:"text"}},numberPageAriaLabel:{control:{type:"text"}},nextPageAriaLabel:{control:{type:"text"}},lastPageAriaLabel:{control:{type:"text"}},overflowAriaLabel:{control:{type:"text"}},customClasses:{control:{type:"object"}},previous:{control:{type:"text"}},"previous-icon":{control:{type:"text"}},previousIcon:{control:{type:"text"},name:"previousIcon (deprecated: use `previous-icon`)"},"previous-label":{control:{type:"text"}},previousLabel:{control:{type:"text"},name:"previousLabel (deprecated: use `previous-label`)"},next:{control:{type:"text"}},"next-icon":{control:{type:"text"}},nextIcon:{control:{type:"text"},name:"nextIcon (deprecated: use `next-icon`)"},"next-label":{control:{type:"text"}},nextLabel:{control:{type:"text"},name:"nextLabel (deprecated: use `next-label`)"}},args:{items:s.items,currentPage:s.currentPage,unbounded:s.unbounded,ariaLabel:s.ariaLabel,previousLinkText:s.previousLinkText,nextLinkText:s.nextLinkText,firstPageAriaLabel:s.firstPageAriaLabel,previousPageAriaLabel:s.previousPageAriaLabel,numberPageAriaLabel:s.numberPageAriaLabel,nextPageAriaLabel:s.nextPageAriaLabel,lastPageAriaLabel:s.lastPageAriaLabel,overflowAriaLabel:s.overflowAriaLabel,customClasses:s.customClasses,previous:"","previous-icon":"","previous-label":"",next:"","next-icon":"","next-label":""},render:a=>({components:{UsaPagination:l},props:Object.keys(l.props),setup(){const r=W(a.currentPage);return{args:a,currentPage:r}},template:`<UsaPagination
    :items="args.items"
    :unbounded="args.unbounded"
    v-model:current-page="args.currentPage"
    :aria-label="args.ariaLabel"
    :previous-link-text="args.previousLinkText"
    :next-link-text="args.nextLinkText"
    :first-page-aria-label="args.firstPageAriaLabel"
    :previous-page-aria-label="args.previousPageAriaLabel"
    :number-page-aria-label="args.numberPageAriaLabel"
    :next-page-aria-label="args.nextPageAriaLabel"
    :last-page-aria-label="args.lastPageAriaLabel"
    :overflow-aria-label="args.overflowAriaLabel"
    :custom-classes="args.customClasses"
  >
    <template v-if="!!args.previous" #previous="{ isFirstPage, toPreviousPage }">${a.previous}</template>
    <template v-if="!!args['previous-icon']" #previous-icon>${a["previous-icon"]}</template>
    <template v-else-if="!!args.previousIcon" #previousIcon>${a.previousIcon}</template>
    <template v-if="!!args['previous-label']" #previous-label>${a["previous-label"]}</template>
    <template v-else-if="!!args.previousLabel" #previousLabel>${a.previousLabel}</template>
    <template v-if="!!args.next" #next="{ isLastPage, toNextPage }">${a.next}</template>
    <template v-if="!!args['next-icon']" #next-icon>${a["next-icon"]}</template>
    <template v-else-if="!!args.nextIcon" #nextIcon>${a.nextIcon}</template>
    <template v-if="!!args['next-label']" #next-label>${a["next-label"]}</template>
    <template v-else-if="!!args.nextLabel" #nextLabel>${a.nextLabel}</template>
  </UsaPagination>`})},N={args:{...s},name:"Default",parameters:{docs:{source:{code:'<UsaPagination :items="items"></UsaPagination>'}}}},F={args:{...s,items:p(12,{}),currentPage:6},name:"Middle Page",parameters:{docs:{source:{code:`<UsaPagination :items="${JSON.stringify(p(12,{}),null,"	")}" :current-page="6"></UsaPagination>`}}}},O={args:{...s,currentPage:8},name:"Last Page",parameters:{docs:{source:{code:`<UsaPagination :items="${JSON.stringify(p(12,{}),null,"	")}" :current-page="8"></UsaPagination>`}}}},q={args:{...s,items:p(7,{})},name:"Less Than 7 Slots",parameters:{docs:{source:{code:`<UsaPagination :items="${JSON.stringify(p(7,{}),null,"	")}"></UsaPagination>`}}}},j={args:{...s,unbounded:!0},name:"Unbounded",parameters:{docs:{source:{code:'<UsaPagination :items="items" :unbounded="true"></UsaPagination>'}}}},R={args:{...s,items:p(12,{}),currentPage:6,previousLinkText:"Back",nextLinkText:"Forward"},name:"Custom Link Text",parameters:{docs:{source:{code:`<UsaPagination :items="${JSON.stringify(p(12,{}),null,"	")}" :current-page="6" previous-link-text="Back" next-link-text="Forward"></UsaPagination>`}}}},J={args:{...s,customClasses:{list:["custom-list-class"]}},name:"Custom Class",parameters:{docs:{source:{code:`<UsaPagination :items="items" :custom-classes="{ list: ['custom-list-class'] }"></UsaPagination>`}}}},B={args:{...s,items:p(12,{}),currentPage:6,previous:"Test Previous Slot",next:"Test Next Slot"},name:"Custom Prev/Next Slot Content",parameters:{docs:{source:{code:`<UsaPagination :items="${JSON.stringify(p(12,{}),null,"	")}" :current-page="6"><template #previous>Test Previous Slot</template><template #next>Test Next Slot</template></UsaPagination>`}}}},V={args:{...s,items:p(12,{}),currentPage:6,"previous-icon":"&lt;","previous-label":"Test Label Slot","next-label":"Test Label Slot","next-icon":"&gt;"},name:"Custom Icon/Label Slot Content",parameters:{docs:{source:{code:`<UsaPagination :items="${JSON.stringify(p(12,{}),null,"	")}" :current-page="6"><template #previous-icon>&lt;</template><template #previous-label>Test Label Slot</template><template #next-label>Test Label Slot</template><template #next-icon>&gt;</template></UsaPagination>`}}}},D={args:{...s,previous:"is first page: {{ isFirstPage }}",next:"is last page: {{ isLastPage }}"},name:"Scoped Slot",parameters:{docs:{source:{code:'<UsaPagination :items="items"><template #previous="{ isFirstPage }">is first page: {{ isFirstPage }}</template><template #next="{ isLastPage }">is last page: {{ isLastPage }}</template></UsaPagination>'}}}};var re,ie,oe;N.parameters={...N.parameters,docs:{...(re=N.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    ...defaultProps
  },
  name: 'Default',
  parameters: {
    docs: {
      source: {
        code: \`<UsaPagination :items="items"></UsaPagination>\`
      }
    }
  }
}`,...(oe=(ie=N.parameters)==null?void 0:ie.docs)==null?void 0:oe.source}}};var le,ue,ce;F.parameters={...F.parameters,docs:{...(le=F.parameters)==null?void 0:le.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    items: generateTestItems(12, {}),
    currentPage: 6
  },
  name: 'Middle Page',
  parameters: {
    docs: {
      source: {
        code: \`<UsaPagination :items="\${JSON.stringify(generateTestItems(12, {}), null, '\\t')}" :current-page="6"></UsaPagination>\`
      }
    }
  }
}`,...(ce=(ue=F.parameters)==null?void 0:ue.docs)==null?void 0:ce.source}}};var pe,ge,me;O.parameters={...O.parameters,docs:{...(pe=O.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    currentPage: 8
  },
  name: 'Last Page',
  parameters: {
    docs: {
      source: {
        code: \`<UsaPagination :items="\${JSON.stringify(generateTestItems(12, {}), null, '\\t')}" :current-page="8"></UsaPagination>\`
      }
    }
  }
}`,...(me=(ge=O.parameters)==null?void 0:ge.docs)==null?void 0:me.source}}};var de,be,Pe;q.parameters={...q.parameters,docs:{...(de=q.parameters)==null?void 0:de.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    items: generateTestItems(7, {})
  },
  name: 'Less Than 7 Slots',
  parameters: {
    docs: {
      source: {
        code: \`<UsaPagination :items="\${JSON.stringify(generateTestItems(7, {}), null, '\\t')}"></UsaPagination>\`
      }
    }
  }
}`,...(Pe=(be=q.parameters)==null?void 0:be.docs)==null?void 0:Pe.source}}};var fe,ve,ye;j.parameters={...j.parameters,docs:{...(fe=j.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    unbounded: true
  },
  name: 'Unbounded',
  parameters: {
    docs: {
      source: {
        code: \`<UsaPagination :items="items" :unbounded="true"></UsaPagination>\`
      }
    }
  }
}`,...(ye=(ve=j.parameters)==null?void 0:ve.docs)==null?void 0:ye.source}}};var Le,xe,ke;R.parameters={...R.parameters,docs:{...(Le=R.parameters)==null?void 0:Le.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    items: generateTestItems(12, {}),
    currentPage: 6,
    previousLinkText: 'Back',
    nextLinkText: 'Forward'
  },
  name: 'Custom Link Text',
  parameters: {
    docs: {
      source: {
        code: \`<UsaPagination :items="\${JSON.stringify(generateTestItems(12, {}), null, '\\t')}" :current-page="6" previous-link-text="Back" next-link-text="Forward"></UsaPagination>\`
      }
    }
  }
}`,...(ke=(xe=R.parameters)==null?void 0:xe.docs)==null?void 0:ke.source}}};var he,Ae,Se;J.parameters={...J.parameters,docs:{...(he=J.parameters)==null?void 0:he.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    customClasses: {
      list: ['custom-list-class']
    }
  },
  name: 'Custom Class',
  parameters: {
    docs: {
      source: {
        code: \`<UsaPagination :items="items" :custom-classes="{ list: ['custom-list-class'] }"></UsaPagination>\`
      }
    }
  }
}`,...(Se=(Ae=J.parameters)==null?void 0:Ae.docs)==null?void 0:Se.source}}};var Te,Ue,Ce;B.parameters={...B.parameters,docs:{...(Te=B.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    items: generateTestItems(12, {}),
    currentPage: 6,
    previous: 'Test Previous Slot',
    next: 'Test Next Slot'
  },
  name: 'Custom Prev/Next Slot Content',
  parameters: {
    docs: {
      source: {
        code: \`<UsaPagination :items="\${JSON.stringify(generateTestItems(12, {}), null, '\\t')}" :current-page="6"><template #previous>Test Previous Slot</template><template #next>Test Next Slot</template></UsaPagination>\`
      }
    }
  }
}`,...(Ce=(Ue=B.parameters)==null?void 0:Ue.docs)==null?void 0:Ce.source}}};var $e,Ie,we;V.parameters={...V.parameters,docs:{...($e=V.parameters)==null?void 0:$e.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    items: generateTestItems(12, {}),
    currentPage: 6,
    'previous-icon': '&lt;',
    'previous-label': 'Test Label Slot',
    'next-label': 'Test Label Slot',
    'next-icon': '&gt;'
  },
  name: 'Custom Icon/Label Slot Content',
  parameters: {
    docs: {
      source: {
        code: \`<UsaPagination :items="\${JSON.stringify(generateTestItems(12, {}), null, '\\t')}" :current-page="6"><template #previous-icon>&lt;</template><template #previous-label>Test Label Slot</template><template #next-label>Test Label Slot</template><template #next-icon>&gt;</template></UsaPagination>\`
      }
    }
  }
}`,...(we=(Ie=V.parameters)==null?void 0:Ie.docs)==null?void 0:we.source}}};var Ne,Fe,Oe;D.parameters={...D.parameters,docs:{...(Ne=D.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    previous: 'is first page: {{ isFirstPage }}',
    next: 'is last page: {{ isLastPage }}'
  },
  name: 'Scoped Slot',
  parameters: {
    docs: {
      source: {
        code: \`<UsaPagination :items="items"><template #previous="{ isFirstPage }">is first page: {{ isFirstPage }}</template><template #next="{ isLastPage }">is last page: {{ isLastPage }}</template></UsaPagination>\`
      }
    }
  }
}`,...(Oe=(Fe=D.parameters)==null?void 0:Fe.docs)==null?void 0:Oe.source}}};const aa=["DefaultPagination","MiddlePagePagination","LastPagePagination","LessThanSevenSlotsPagination","UnboundedPagination","CustomLinkTextPagination","CustomClassPagination","CustomSlotContentPagination","CustomIconLabelSlotContentPagination","ScopedSlotPagination"];export{J as CustomClassPagination,V as CustomIconLabelSlotContentPagination,R as CustomLinkTextPagination,B as CustomSlotContentPagination,N as DefaultPagination,O as LastPagePagination,q as LessThanSevenSlotsPagination,F as MiddlePagePagination,D as ScopedSlotPagination,j as UnboundedPagination,aa as __namedExportsOrder,ea as default};
