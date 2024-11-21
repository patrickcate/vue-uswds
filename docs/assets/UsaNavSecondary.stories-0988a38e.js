import{b as d,c as o,a as S,r as c,e as v,o as l,G as k,H as N,I as _,g as x,d as w,v as U,l as P}from"./vue.esm-bundler-d9807bdf.js";import{B as O}from"./BaseLink-378e51d3.js";import"./constants-fce87d39.js";import"./_plugin-vue_export-helper-c27b6911.js";const q={key:0,class:"usa-nav__secondary"},$={class:"usa-nav__secondary-links"},g={__name:"UsaNavSecondary",props:{items:{type:Array,default:()=>[]}},setup(s){const b=v("isExtendedHeader",!1);return(r,C)=>d(b)?(l(),o("div",q,[S("ul",$,[c(r.$slots,"default",{items:s.items},()=>[(l(!0),o(k,null,N(s.items,e=>(l(),o("li",{key:(e==null?void 0:e.id)||e.text,class:"usa-nav__secondary-item"},[_(d(O),{to:e.to,href:e.href,"router-component-name":e.routerComponentName},{default:x(()=>[w(U(e.text),1)]),_:2},1032,["to","href","router-component-name"])]))),128))])]),c(r.$slots,"search")])):c(r.$slots,"search",{key:1})}},i=g;g.__docgenInfo={exportName:"default",displayName:"UsaNavSecondary",type:1,props:[{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"items",global:!1,description:"",tags:[],required:!1,type:"unknown[]",declarations:[],schema:{kind:"array",type:"unknown[]"},default:"[]"}],events:[],slots:[{name:"default",type:"{ items: unknown[]; }",description:"",declarations:[],schema:{kind:"object",type:"{ items: unknown[]; }"}},{name:"search",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}}],exposed:[{name:"items",type:"unknown[]",description:"",declarations:[],schema:{kind:"array",type:"unknown[]"}}],sourceFiles:"/home/runner/work/vue-uswds/vue-uswds/src/components/UsaNavSecondary/UsaNavSecondary.vue"};const a={items:[{to:"/first-link",text:"First link"},{href:"/second-link",text:"Second link"}]},B=P(!0),H={component:i,title:"Components/UsaNavSecondary",argTypes:{items:{control:{type:"object"}},default:{control:{type:"text"}},search:{control:{type:"text"}}},args:{items:a.testLinks,default:"",search:""},render:s=>({components:{UsaNavSecondary:i},props:Object.keys(i.props),provide:{isExtendedHeader:B},setup(){return{args:s}},template:`<UsaNavSecondary :items="args.items">
    <template v-if="!!args.default" :items="args.items" #default>{{args.default}}</template>
    <template v-if="!!args.search" #search>{{ args.search }}</template>
  </UsaNavSecondary>`})},t={args:{...a},name:"Default",parameters:{docs:{source:{code:`<UsaNavSecondary :items="${JSON.stringify(a.items),"	"}"></UsaNavSecondary>`}}}},n={args:{...a,search:`<form class="usa-search usa-search--small" role="search">
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
        code: \`<UsaNavSecondary :items="\${(JSON.stringify(defaultProps.items), null, '\\t')}"></UsaNavSecondary>\`
      }
    }
  }
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var y,h,f;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
        code: \`<UsaNavSecondary :items="\${(JSON.stringify(defaultProps.items), null, '\\t')}"><template #search><form class="usa-search usa-search--small" role="search">
      <label class="usa-sr-only" for="extended-search-field-en-small">Search</label>
      <input class="usa-input" id="extended-search-field-en-small" type="search" name="search">
      <button class="usa-button" type="submit">
        <img src="/assets/img/usa-icons-bg/search--white.svg" class="usa-search__submit-icon" alt="Search">
      </button>
  </form></UsaNavSecondary>\`
      }
    }
  }
}`,...(f=(h=n.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};const J=["DefaultNavSecondary","SearchSlotNavSecondary"];export{t as DefaultNavSecondary,n as SearchSlotNavSecondary,J as __namedExportsOrder,H as default};
