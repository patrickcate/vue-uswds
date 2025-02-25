import{e as S,l as w,s as Q,p as z,w as U,c as s,r as W,o as t,H as p,I as g,f as c,g as n,J as X,b as o,m as h,d as v,v as k,_ as Y,t as Z,M as l}from"./vue.esm-bundler-DsKf3Hbt.js";import{f as b}from"./constants-BA52rpFi.js";import{c as I,o as ee,a as ae}from"./index-BIJogqLd.js";import{u as re}from"./useAccordion-BoT-GOBU.js";import{_ as te}from"./UsaNavPrimaryItem-Bd4B-oYa.js";import{_ as oe}from"./UsaNavDropdown-DKXJFv2o.js";import{_ as ne}from"./UsaNavDropdownButton-dwHKA4nw.js";import{_ as T}from"./UsaNavSubmenu-DWMgTDRe.js";import{_ as C}from"./UsaNavSubmenuItem-CKP2yFkQ.js";import"./index-CipSGTa_.js";import"./BaseLink-BYp1-IWJ.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./unique-id-ZGF68Crf.js";import"./common-cfad2wKl.js";const d={__name:"UsaNavPrimary",props:{items:{type:Array,default:()=>[]}},emits:["update:items"],setup(i,{emit:E}){const j=S("vueUswds.mobileMenuBreakpoint",b),J=S("isMegamenu",w(!1)),R=E,P=w(null),m=I(`(min-width: ${j})`),V=Q(()=>!m.value),f=z({}),{registerAccordionItem:K,unregisterAccordionItem:F,closeItem:L,toggleItem:G,closeAllItems:y}=re(f,V);return U(f,()=>{R("update:items",f)}),U(m,y),l("registerDropdown",K),l("unregisterDropdown",F),l("toggleDropdown",G),l("closeDropdown",L),l("closeAllDropdowns",y),l("dropdownItems",f),ee("Escape",y),ae(P,y),(H,se)=>(t(),s("ul",{ref_key:"nav",ref:P,class:"usa-nav__primary usa-accordion"},[W(H.$slots,"default",{items:i.items},()=>[(t(!0),s(p,null,g(i.items,e=>{var u;return t(),s(p,null,[(u=e==null?void 0:e.children)!=null&&u.length?(t(),c(o(oe),{id:e==null?void 0:e.id,key:(e==null?void 0:e.id)||e.text},{default:n(()=>[X(o(ne),h({ref_for:!0},e==null?void 0:e.attrs,{href:e==null?void 0:e.href,to:e==null?void 0:e.to,"router-component-name":e==null?void 0:e.routerComponentName}),{default:n(()=>[v(k(e.text),1)]),_:2},1040,["href","to","router-component-name"]),(e==null?void 0:e.cols)>1&&o(J)?(t(),c(o(T),{key:e.children.map(a=>(a==null?void 0:a.id)||a.text).join("-"),cols:e.cols},Y({_:2},[g(e.cols,a=>({name:`col-${a}`,fn:n(()=>[(t(!0),s(p,null,g(e.children,r=>(t(),s(p,null,[(r==null?void 0:r.col)===a?(t(),c(o(C),h({key:0,ref_for:!0},r==null?void 0:r.attrs,{key:(r==null?void 0:r.id)||r.text,href:r==null?void 0:r.href,to:r==null?void 0:r.to,"router-component-name":r==null?void 0:r.routerComponentName}),{default:n(()=>[v(k(r.text),1)]),_:2},1040,["href","to","router-component-name"])):Z("",!0)],64))),256))])}))]),1032,["cols"])):(t(),c(o(T),{key:e.children.map(a=>(a==null?void 0:a.id)||a.text).join("-")},{default:n(()=>[(t(!0),s(p,null,g(e.children,a=>(t(),c(o(C),h({ref_for:!0},a==null?void 0:a.attrs,{key:(a==null?void 0:a.id)||a.text,href:a==null?void 0:a.href,to:a==null?void 0:a.to,"router-component-name":a==null?void 0:a.routerComponentName}),{default:n(()=>[v(k(a.text),1)]),_:2},1040,["href","to","router-component-name"]))),128))]),_:2},1024))]),_:2},1032,["id"])):(t(),c(o(te),h({key:(e==null?void 0:e.id)||e.text,ref_for:!0},e==null?void 0:e.attrs,{href:e==null?void 0:e.href,to:e==null?void 0:e.to,"router-component-name":e==null?void 0:e.routerComponentName}),{default:n(()=>[v(k(e.text),1)]),_:2},1040,["href","to","router-component-name"]))],64)}),256))])],512))}};d.__docgenInfo={exportName:"default",displayName:"UsaNavPrimary",type:1,props:[{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"items",global:!1,description:"",tags:[],required:!1,type:"unknown[]",declarations:[],schema:{kind:"array",type:"unknown[]"},default:"[]"}],events:[{name:"update:items",description:"",tags:[],type:"any[]",signature:'(event: "update:items", ...args: any[]): void',declarations:[],schema:["any"]}],slots:[{name:"default",type:"{ items: unknown[]; }",description:"",declarations:[],schema:{kind:"object",type:"{ items: unknown[]; }"}}],exposed:[{name:"items",type:"unknown[]",description:"",declarations:[],schema:{kind:"array",type:"unknown[]"}}],sourceFiles:"/home/runner/work/vue-uswds/vue-uswds/src/components/UsaNavPrimary/UsaNavPrimary.vue"};const $=[{href:"/section-1",text:"Section 1"},{href:"https://google.com",text:"Google",attrs:{target:"_blank"}},{to:{path:"/section-2"},text:"Section 2",cols:2,attrs:{"data-test":"test"},children:[{to:"/section-2/page-1",text:"Section 2 - Page 1",col:1,routerComponentName:"router-link"},{id:"section-2-page-2",to:"/section-2/page-2",text:"Section 2 - Page 2",col:1,routerComponentName:"nuxt-link"},{to:"/section-2/page-3",text:"Section 2 - Page 3",routerComponentName:"g-link",attrs:{target:"_blank"},col:1,children:[]},{to:"/section-2/page-4",text:"Section 2 - Page 4",col:2,children:[{href:"/section-2/page-4/sub-section-1",text:"Section 2 - Page 4 - Sub Section 1",col:1}]},{href:"/section-2/page-5",text:"Section 2 - Page 5",col:2}]},{to:{path:"/section-3"},text:"Section 3",children:[{href:"/section-3/page-1",text:"Section 3 - Page 1"}]}],N={items:d.props.items.default()},Pe={component:d,title:"Components/UsaNavPrimary",argTypes:{items:{control:{type:"object"}},default:{control:{type:"text"}}},args:{items:N.items,default:""},decorators:[()=>({template:"<story />",provide:{closeMobileMenu:()=>{}}})],render:i=>({components:{UsaNavPrimary:d},props:Object.keys(d.props),setup(){return{args:i}},template:`<UsaNavPrimary
    :items="args.items">
      <template #default="{ items }">${i.default}</template>
    </UsaNavPrimary>`})},_={args:{...N,items:$},name:"Default",parameters:{docs:{source:{code:`<UsaNavPrimary :items="${JSON.stringify($),"	"}"></UsaNavPrimary>`}}}},x={args:{...N,items:[{href:"#",text:"Test nav link 1"},{href:"#",text:"Test nav link 2"},{href:"#",text:"Test nav link 3"}],default:'<a v-for="item in items" :href="item.href" :key="item.text" class="usa-nav__primary-item">{{ item.text }}</a>'},name:"Scoped Slot",parameters:{docs:{source:{code:`<UsaNavPrimary :items="${JSON.stringify([{href:"#",text:"Test nav link 1"},{href:"#",text:"Test nav link 2"},{href:"#",text:"Test nav link 3"}]),"	"}"><template #default="{ items }"><a v-for="item in items" :href="item.href" :key="item.text" class="usa-nav__primary-item">{{ item.text }}</a></template></UsaNavPrimary>`}}}};var D,M,O;_.parameters={..._.parameters,docs:{...(D=_.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    items: testItems
  },
  name: 'Default',
  parameters: {
    docs: {
      source: {
        code: \`<UsaNavPrimary :items="\${JSON.stringify(testItems), null, '\\t'}"></UsaNavPrimary>\`
      }
    }
  }
}`,...(O=(M=_.parameters)==null?void 0:M.docs)==null?void 0:O.source}}};var B,q,A;x.parameters={...x.parameters,docs:{...(B=x.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
        code: \`<UsaNavPrimary :items="\${JSON.stringify([{
          href: '#',
          text: 'Test nav link 1'
        }, {
          href: '#',
          text: 'Test nav link 2'
        }, {
          href: '#',
          text: 'Test nav link 3'
        }]), null, '\\t'}"><template #default="{ items }"><a v-for="item in items" :href="item.href" :key="item.text" class="usa-nav__primary-item">{{ item.text }}</a></template></UsaNavPrimary>\`
      }
    }
  }
}`,...(A=(q=x.parameters)==null?void 0:q.docs)==null?void 0:A.source}}};const me=["DefaultNavPrimary","ScopedDefaultSlotNavPrimary"];export{_ as DefaultNavPrimary,x as ScopedDefaultSlotNavPrimary,me as __namedExportsOrder,Pe as default};
