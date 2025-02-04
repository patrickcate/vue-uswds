import{c,r as l,b as d,a as b,e as S,o as i,G as v,H as k,I as N,g as _,d as x,v as w,l as U}from"./vue.esm-bundler-DlC1_45x.js";import{B as P}from"./BaseLink-Dtgee05b.js";import"./constants-BA52rpFi.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const O={key:0,class:"usa-nav__secondary"},q={class:"usa-nav__secondary-links"},n={__name:"UsaNavSecondary",props:{items:{type:Array,default:()=>[]}},setup(s){const g=S("isExtendedHeader",!1);return(o,B)=>d(g)?(i(),c("div",O,[b("ul",q,[l(o.$slots,"default",{items:s.items},()=>[(i(!0),c(v,null,k(s.items,e=>(i(),c("li",{key:(e==null?void 0:e.id)||e.text,class:"usa-nav__secondary-item"},[N(d(P),{to:e.to,href:e.href,"router-component-name":e.routerComponentName},{default:_(()=>[x(w(e.text),1)]),_:2},1032,["to","href","router-component-name"])]))),128))])]),l(o.$slots,"search")])):l(o.$slots,"search",{key:1})}};n.__docgenInfo={exportName:"default",displayName:"UsaNavSecondary",type:1,props:[{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"items",global:!1,description:"",tags:[],required:!1,type:"unknown[]",declarations:[],schema:{kind:"array",type:"unknown[]"},default:"[]"}],events:[],slots:[{name:"default",type:"{ items: unknown[]; }",description:"",declarations:[],schema:{kind:"object",type:"{ items: unknown[]; }"}},{name:"search",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}}],exposed:[{name:"items",type:"unknown[]",description:"",declarations:[],schema:{kind:"array",type:"unknown[]"}}],sourceFiles:"/home/runner/work/vue-uswds/vue-uswds/src/components/UsaNavSecondary/UsaNavSecondary.vue"};const a={items:[{to:"/first-link",text:"First link"},{href:"/second-link",text:"Second link"}]},$=U(!0),V={component:n,title:"Components/UsaNavSecondary",argTypes:{items:{control:{type:"object"}},default:{control:{type:"text"}},search:{control:{type:"text"}}},args:{items:a.testLinks,default:"",search:""},render:s=>({components:{UsaNavSecondary:n},props:Object.keys(n.props),provide:{isExtendedHeader:$},setup(){return{args:s}},template:`<UsaNavSecondary :items="args.items">
    <template v-if="!!args.default" :items="args.items" #default>{{args.default}}</template>
    <template v-if="!!args.search" #search>{{ args.search }}</template>
  </UsaNavSecondary>`})},t={args:{...a},name:"Default",parameters:{docs:{source:{code:`<UsaNavSecondary :items="${JSON.stringify(a.items),"	"}"></UsaNavSecondary>`}}}},r={args:{...a,search:`<form class="usa-search usa-search--small" role="search">
      <label class="usa-sr-only" for="extended-search-field-en-small">Search</label>
      <input class="usa-input" id="extended-search-field-en-small" type="search" name="search">
      <button class="usa-button" type="submit">
        <img src="/assets/img/usa-icons-bg/search--white.svg" class="usa-search__submit-icon" alt="Search">
      </button>
  </form>`},name:"Search Slot",parameters:{docs:{source:{code:`<UsaNavSecondary :items="${JSON.stringify(a.items),"	"}"><template #search><form class="usa-search usa-search--small" role="search">
      <label class="usa-sr-only" for="extended-search-field-en-small">Search</label>
      <input class="usa-input" id="extended-search-field-en-small" type="search" name="search">
      <button class="usa-button" type="submit">
        <img src="/assets/img/usa-icons-bg/search--white.svg" class="usa-search__submit-icon" alt="Search">
      </button>
  </form></UsaNavSecondary>`}}}};var u,m,p;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    ...defaultProps
  },
  name: 'Default',
  parameters: {
    docs: {
      source: {
        code: \`<UsaNavSecondary :items="\${JSON.stringify(defaultProps.items), null, '\\t'}"></UsaNavSecondary>\`
      }
    }
  }
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var y,h,f;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    search: \`<form class="usa-search usa-search--small" role="search">
      <label class="usa-sr-only" for="extended-search-field-en-small">Search</label>
      <input class="usa-input" id="extended-search-field-en-small" type="search" name="search">
      <button class="usa-button" type="submit">
        <img src="/assets/img/usa-icons-bg/search--white.svg" class="usa-search__submit-icon" alt="Search">
      </button>
  </form>\`
  },
  name: 'Search Slot',
  parameters: {
    docs: {
      source: {
        code: \`<UsaNavSecondary :items="\${JSON.stringify(defaultProps.items), null, '\\t'}"><template #search><form class="usa-search usa-search--small" role="search">
      <label class="usa-sr-only" for="extended-search-field-en-small">Search</label>
      <input class="usa-input" id="extended-search-field-en-small" type="search" name="search">
      <button class="usa-button" type="submit">
        <img src="/assets/img/usa-icons-bg/search--white.svg" class="usa-search__submit-icon" alt="Search">
      </button>
  </form></UsaNavSecondary>\`
      }
    }
  }
}`,...(f=(h=r.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};const H=["DefaultNavSecondary","SearchSlotNavSecondary"];export{t as DefaultNavSecondary,r as SearchSlotNavSecondary,H as __namedExportsOrder,V as default};
