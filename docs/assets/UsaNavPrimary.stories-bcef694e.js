import{e as S,l as U,s as Z,p as z,w,c as s,r as W,L as c,o as t,G as p,H as y,f as l,g as n,I as X,d as g,v as h,m as v,b as o,Z as Y,t as b}from"./vue.esm-bundler-d9807bdf.js";import{f as I}from"./constants-fce87d39.js";import{c as ee,o as ae,a as re}from"./index-db724f69.js";import{u as te}from"./useAccordion-97167de0.js";import{U as oe}from"./UsaNavPrimaryItem-f18d7ec4.js";import{U as ne}from"./UsaNavDropdown-1595319f.js";import{U as se}from"./UsaNavDropdownButton-a5cec38d.js";import{U as T}from"./UsaNavSubmenu-1faa287f.js";import{U as C}from"./UsaNavSubmenuItem-d734d7ee.js";import"./index-7991d288.js";import"./BaseLink-378e51d3.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./unique-id-dcbd9804.js";import"./common-c0b90c12.js";const E={__name:"UsaNavPrimary",props:{items:{type:Array,default:()=>[]}},emits:["update:items"],setup(i,{emit:j}){const R=S("vueUswds.mobileMenuBreakpoint",I),V=S("isMegamenu",U(!1)),J=j,P=U(null),m=ee(`(min-width: ${R})`),K=Z(()=>!m.value),d=z({}),{registerAccordionItem:L,unregisterAccordionItem:F,closeItem:G,toggleItem:H,closeAllItems:f}=te(d,K);return w(d,()=>{J("update:items",d)}),w(m,f),c("registerDropdown",L),c("unregisterDropdown",F),c("toggleDropdown",H),c("closeDropdown",G),c("closeAllDropdowns",f),c("dropdownItems",d),ae("Escape",f),re(P,f),(Q,ce)=>(t(),s("ul",{ref_key:"nav",ref:P,class:"usa-nav__primary usa-accordion"},[W(Q.$slots,"default",{items:i.items},()=>[(t(!0),s(p,null,y(i.items,e=>{var _;return t(),s(p,null,[(_=e==null?void 0:e.children)!=null&&_.length?(t(),l(o(ne),{id:e==null?void 0:e.id,key:(e==null?void 0:e.id)||e.text},{default:n(()=>[X(o(se),v({ref_for:!0},e==null?void 0:e.attrs,{href:e==null?void 0:e.href,to:e==null?void 0:e.to,"router-component-name":e==null?void 0:e.routerComponentName}),{default:n(()=>[g(h(e.text),1)]),_:2},1040,["href","to","router-component-name"]),(e==null?void 0:e.cols)>1&&o(V)?(t(),l(o(T),{key:e.children.map(a=>(a==null?void 0:a.id)||a.text).join("-"),cols:e.cols},Y({_:2},[y(e.cols,a=>({name:`col-${a}`,fn:n(()=>[(t(!0),s(p,null,y(e.children,r=>(t(),s(p,null,[(r==null?void 0:r.col)===a?(t(),l(o(C),v({key:0,ref_for:!0},r==null?void 0:r.attrs,{key:(r==null?void 0:r.id)||r.text,href:r==null?void 0:r.href,to:r==null?void 0:r.to,"router-component-name":r==null?void 0:r.routerComponentName}),{default:n(()=>[g(h(r.text),1)]),_:2},1040,["href","to","router-component-name"])):b("",!0)],64))),256))])}))]),1032,["cols"])):(t(),l(o(T),{key:e.children.map(a=>(a==null?void 0:a.id)||a.text).join("-")},{default:n(()=>[(t(!0),s(p,null,y(e.children,a=>(t(),l(o(C),v({ref_for:!0},a==null?void 0:a.attrs,{key:(a==null?void 0:a.id)||a.text,href:a==null?void 0:a.href,to:a==null?void 0:a.to,"router-component-name":a==null?void 0:a.routerComponentName}),{default:n(()=>[g(h(a.text),1)]),_:2},1040,["href","to","router-component-name"]))),128))]),_:2},1024))]),_:2},1032,["id"])):(t(),l(o(oe),v({key:(e==null?void 0:e.id)||e.text,ref_for:!0},e==null?void 0:e.attrs,{href:e==null?void 0:e.href,to:e==null?void 0:e.to,"router-component-name":e==null?void 0:e.routerComponentName}),{default:n(()=>[g(h(e.text),1)]),_:2},1040,["href","to","router-component-name"]))],64)}),256))])],512))}},N=E;E.__docgenInfo={exportName:"default",displayName:"UsaNavPrimary",type:1,props:[{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"items",global:!1,description:"",tags:[],required:!1,type:"unknown[]",declarations:[],schema:{kind:"array",type:"unknown[]"},default:"[]"}],events:[{name:"update:items",description:"",tags:[],type:"any[]",signature:'(event: "update:items", ...args: any[]): void',declarations:[],schema:["any"]}],slots:[{name:"default",type:"{ items: unknown[]; }",description:"",declarations:[],schema:{kind:"object",type:"{ items: unknown[]; }"}}],exposed:[{name:"items",type:"unknown[]",description:"",declarations:[],schema:{kind:"array",type:"unknown[]"}}],sourceFiles:"/home/runner/work/vue-uswds/vue-uswds/src/components/UsaNavPrimary/UsaNavPrimary.vue"};const D=[{href:"/section-1",text:"Section 1"},{href:"https://google.com",text:"Google",attrs:{target:"_blank"}},{to:{path:"/section-2"},text:"Section 2",cols:2,attrs:{"data-test":"test"},children:[{to:"/section-2/page-1",text:"Section 2 - Page 1",col:1,routerComponentName:"router-link"},{id:"section-2-page-2",to:"/section-2/page-2",text:"Section 2 - Page 2",col:1,routerComponentName:"nuxt-link"},{to:"/section-2/page-3",text:"Section 2 - Page 3",routerComponentName:"g-link",attrs:{target:"_blank"},col:1,children:[]},{to:"/section-2/page-4",text:"Section 2 - Page 4",col:2,children:[{href:"/section-2/page-4/sub-section-1",text:"Section 2 - Page 4 - Sub Section 1",col:1}]},{href:"/section-2/page-5",text:"Section 2 - Page 5",col:2}]},{to:{path:"/section-3"},text:"Section 3",children:[{href:"/section-3/page-1",text:"Section 3 - Page 1"}]}],u={items:N.props.items.default()},me={component:N,title:"Components/UsaNavPrimary",argTypes:{items:{control:{type:"object"}},default:{control:{type:"text"}}},args:{items:u.items,default:""},decorators:[()=>({template:"<story />",provide:{closeMobileMenu:()=>{}}})],render:i=>({components:{UsaNavPrimary:N},props:Object.keys(N.props),setup(){return{args:i}},template:`<UsaNavPrimary
    :items="args.items">
      <template #default="{ items }">${i.default}</template>
    </UsaNavPrimary>`})},k={args:{...u,items:D},name:"Default",parameters:{docs:{source:{code:`<UsaNavPrimary :items="${JSON.stringify(D),"	"}"></UsaNavPrimary>`}}}},x={args:{...u,items:[{href:"#",text:"Test nav link 1"},{href:"#",text:"Test nav link 2"},{href:"#",text:"Test nav link 3"}],default:'<a v-for="item in items" :href="item.href" :key="item.text" class="usa-nav__primary-item">{{ item.text }}</a>'},name:"Scoped Slot",parameters:{docs:{source:{code:`<UsaNavPrimary :items="${JSON.stringify([{href:"#",text:"Test nav link 1"},{href:"#",text:"Test nav link 2"},{href:"#",text:"Test nav link 3"}]),"	"}"><template #default="{ items }"><a v-for="item in items" :href="item.href" :key="item.text" class="usa-nav__primary-item">{{ item.text }}</a></template></UsaNavPrimary>`}}}};var O,M,B;k.parameters={...k.parameters,docs:{...(O=k.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    items: testItems
  },
  name: 'Default',
  parameters: {
    docs: {
      source: {
        code: \`<UsaNavPrimary :items="\${(JSON.stringify(testItems), null, '\\t')}"></UsaNavPrimary>\`
      }
    }
  }
}`,...(B=(M=k.parameters)==null?void 0:M.docs)==null?void 0:B.source}}};var $,q,A;x.parameters={...x.parameters,docs:{...($=x.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    items: [{
      href: '#',
      text: 'Test nav link 1'
    }, {
      href: '#',
      text: 'Test nav link 2'
    }, {
      href: '#',
      text: 'Test nav link 3'
    }],
    default: '<a v-for="item in items" :href="item.href" :key="item.text" class="usa-nav__primary-item">{{ item.text }}</a>'
  },
  name: 'Scoped Slot',
  parameters: {
    docs: {
      source: {
        code: \`<UsaNavPrimary :items="\${(JSON.stringify([{
          href: '#',
          text: 'Test nav link 1'
        }, {
          href: '#',
          text: 'Test nav link 2'
        }, {
          href: '#',
          text: 'Test nav link 3'
        }]), null, '\\t')}"><template #default="{ items }"><a v-for="item in items" :href="item.href" :key="item.text" class="usa-nav__primary-item">{{ item.text }}</a></template></UsaNavPrimary>\`
      }
    }
  }
}`,...(A=(q=x.parameters)==null?void 0:q.docs)==null?void 0:A.source}}};const _e=["DefaultNavPrimary","ScopedDefaultSlotNavPrimary"];export{k as DefaultNavPrimary,x as ScopedDefaultSlotNavPrimary,_e as __namedExportsOrder,me as default};
