import{c as u,r as c,a as q,n as A,o as d,H as R,I as _,f as j,g as T,d as $,v as N,b as D}from"./vue.esm-bundler-DsKf3Hbt.js";import{_ as O}from"./UsaSidenavItem-DJkFWM6F.js";import"./BaseLink-BYp1-IWJ.js";import"./constants-BA52rpFi.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const V=["aria-label"],a={__name:"UsaSidenav",props:{ariaLabel:{type:String,default:"Secondary navigation"},items:{type:Array,default:()=>[]},customClasses:{type:Object,default:()=>({list:[],item:[],link:[],sublist:[]})}},setup(e){return(m,E)=>{var p;return d(),u("nav",{"aria-label":e.ariaLabel},[c(m.$slots,"before"),q("ul",{class:A(["usa-sidenav",(p=e.customClasses)==null?void 0:p.list])},[c(m.$slots,"default",{items:e.items},()=>[(d(!0),u(R,null,_(e.items,t=>(d(),j(D(O),{key:(t==null?void 0:t.id)||t.text,item:t,"custom-classes":e.customClasses},{default:T(()=>[$(N(t.text),1)]),_:2},1032,["item","custom-classes"]))),128))])],2),c(m.$slots,"after")],8,V)}}};a.__docgenInfo={exportName:"default",displayName:"UsaSidenav",type:1,props:[{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"customClasses",global:!1,description:"",tags:[],required:!1,type:"Record<string, any>",declarations:[],schema:"Record<string, any>",default:`() => {
    return {
        list: [],
        item: [],
        link: [],
        sublist: [],
    };
}`},{name:"ariaLabel",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'"Secondary navigation"'},{name:"items",global:!1,description:"",tags:[],required:!1,type:"unknown[]",declarations:[],schema:{kind:"array",type:"unknown[]"},default:"[]"}],events:[],slots:[{name:"before",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}},{name:"default",type:"{ items: unknown[]; }",description:"",declarations:[],schema:{kind:"object",type:"{ items: unknown[]; }"}},{name:"after",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}}],exposed:[{name:"customClasses",type:"Record<string, any>",description:"",declarations:[],schema:"Record<string, any>"},{name:"ariaLabel",type:"string",description:"",declarations:[],schema:"string"},{name:"items",type:"unknown[]",description:"",declarations:[],schema:{kind:"array",type:"unknown[]"}}],sourceFiles:"/home/runner/work/vue-uswds/vue-uswds/src/components/UsaSidenav/UsaSidenav.vue"};const s={ariaLabel:a.props.ariaLabel.default,items:[{to:"/test-page-1",text:"Test Page 1"},{to:"/test-page-2",text:"Test Page 2",children:[{to:"/test-page-2-1",text:"Test Page 2.1"},{to:"/test-page-2-2",text:"Test Page 2.2"}]},{to:"/test-page-3",text:"Test Page 3"}],customClasses:a.props.customClasses.default()},G={component:a,title:"Components/UsaSidenav",argTypes:{ariaLabel:{control:{type:"text"}},items:{control:{type:"object"}},customClasses:{control:{type:"object"}},before:{control:{type:"text"}},default:{control:{type:"text"}},after:{control:{type:"text"}}},args:{ariaLabel:s.ariaLabel,items:s.items,customClasses:s.customClasses,before:"",default:"",after:""},render:e=>({components:{UsaSidenav:a},props:Object.keys(a.props),setup(){return{args:e}},template:`<UsaSidenav
    :aria-label="args.ariaLabel"
    :items="args.items"
    :custom-classes="args.customClasses">
      <template v-if="!!args.before" #before>${e.before}</template>
      <template v-if="!!args.default" #default="{ items }">${e.default}</template>
      <template v-if="!!args.after" #after>${e.after}</template>
    </UsaSidenav>`})},n={args:{...s},name:"Default",parameters:{docs:{source:{code:'<UsaSidenav :items="items"></UsaSidenav>'}}}},r={args:{...s,before:"Before Sidenav"},name:"Before Slot",parameters:{docs:{source:{code:'<UsaSidenav :items="items"><template #before>Before Sidenav</template></UsaSidenav>'}}}},o={args:{...s,after:"After Sidenav"},name:"After Slot",parameters:{docs:{source:{code:'<UsaSidenav :items="items"><template #after>After Sidenav</template></UsaSidenav>'}}}},i={args:{...s,default:'<li v-for="item in items" :key="item.text">{{ item.to }}</li>'},name:"Scoped Slot",parameters:{docs:{source:{code:'<UsaSidenav :items="items"><template #default="{ items }"><li v-for="item in items" :key="item.text">{{ item.to }}</li></template></UsaSidenav>'}}}},l={args:{...s,customClasses:{list:["test-list-class"],item:["test-item-class"],link:["test-link-class"],sublist:["test-sublist-class"]}},name:"Custom Classes",parameters:{docs:{source:{code:`<UsaSidenav :items="items" :custom-classes="{ list: ['test-list-class'], item: ['test-item-class'], link: ['test-link-class'], sublist: ['test-sublist-class'] }"></UsaSidenav>`}}}};var f,S,y;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    ...defaultProps
  },
  name: 'Default',
  parameters: {
    docs: {
      source: {
        code: \`<UsaSidenav :items="items"></UsaSidenav>\`
      }
    }
  }
}`,...(y=(S=n.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};var g,v,b;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    before: 'Before Sidenav'
  },
  name: 'Before Slot',
  parameters: {
    docs: {
      source: {
        code: \`<UsaSidenav :items="items"><template #before>Before Sidenav</template></UsaSidenav>\`
      }
    }
  }
}`,...(b=(v=r.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var k,U,C;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    after: 'After Sidenav'
  },
  name: 'After Slot',
  parameters: {
    docs: {
      source: {
        code: \`<UsaSidenav :items="items"><template #after>After Sidenav</template></UsaSidenav>\`
      }
    }
  }
}`,...(C=(U=o.parameters)==null?void 0:U.docs)==null?void 0:C.source}}};var h,x,P;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    default: \`<li v-for="item in items" :key="item.text">{{ item.to }}</li>\`
  },
  name: 'Scoped Slot',
  parameters: {
    docs: {
      source: {
        code: \`<UsaSidenav :items="items"><template #default="{ items }"><li v-for="item in items" :key="item.text">{{ item.to }}</li></template></UsaSidenav>\`
      }
    }
  }
}`,...(P=(x=i.parameters)==null?void 0:x.docs)==null?void 0:P.source}}};var w,B,L;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    customClasses: {
      list: ['test-list-class'],
      item: ['test-item-class'],
      link: ['test-link-class'],
      sublist: ['test-sublist-class']
    }
  },
  name: 'Custom Classes',
  parameters: {
    docs: {
      source: {
        code: \`<UsaSidenav :items="items" :custom-classes="{ list: ['test-list-class'], item: ['test-item-class'], link: ['test-link-class'], sublist: ['test-sublist-class'] }"></UsaSidenav>\`
      }
    }
  }
}`,...(L=(B=l.parameters)==null?void 0:B.docs)==null?void 0:L.source}}};const J=["DefaultSidenav","BeforeSlotSidenav","AfterSlotSidenav","ScopedSlotSidenav","CustomClassesSidenav"];export{o as AfterSlotSidenav,r as BeforeSlotSidenav,l as CustomClassesSidenav,n as DefaultSidenav,i as ScopedSlotSidenav,J as __namedExportsOrder,G as default};
