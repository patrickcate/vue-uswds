import{_ as n,a as e}from"./UsaBreadcrumb-CEJW2YYk.js";import"./vue.esm-bundler-DlC1_45x.js";import"./BaseLink-Dtgee05b.js";import"./constants-BA52rpFi.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const s={items:e.props.items.default(),wrap:e.props.wrap.default,ariaLabel:e.props.ariaLabel.default,customClasses:e.props.customClasses.default()},a=[{to:"/",text:"Home"},{to:"/breadcrumb-1",text:"Breadcrumb 1"},{href:"/breadcrumb-2",text:"Breadcrumb 2",id:"b-2"},{to:"/breadcrumb-3",text:"Current page that is really, really, really, long to test wrapping of breadcrumb items",current:!0}],P={component:e,subcomponents:{UsaBreadcrumbItem:n},title:"Components/UsaBreadcrumb",argTypes:{items:{control:{type:"object"}},wrap:{control:{type:"boolean"}},ariaLabel:{control:{type:"text"}},customClasses:{control:{type:"object"}},default:{control:{type:"text"}}},args:{items:a,wrap:s.wrap,ariaLabel:s.ariaLabel,customClasses:s.customClasses,default:""},render:o=>({components:{UsaBreadcrumb:e,UsaBreadcrumbItem:n},props:Object.keys(e.props),setup(){return{args:o}},template:`
    <UsaBreadcrumb
      :items="args.items"
      :wrap="args.wrap"
      :aria-label="args.ariaLabel"
      :custom-classes="args.customClasses"
    >${o.default}</UsaBreadcrumb>`})},y=`
<UsaBreadcrumb
  :items="[
  {
    to: '/',
    text: 'Home',
  },
  {
    to: '/breadcrumb-1',
    text: 'Breadcrumb 1',
    id: 'b-1'
  },
  {
    href: '/breadcrumb-2',
    text: 'Breadcrumb 2',
  },
  {
    to: '/breadcrumb-3',
    text: 'Current page that is really, really, really, long to test wrapping of breadcrumb items',
  }
]"></UsaBreadcrumb>`,r={args:{...s,items:a},name:"Default",parameters:{docs:{source:{code:y}}}},t={args:{...s,items:a,wrap:!0},name:"Wrapped",parameters:{docs:{source:{code:'<UsaBreadcrumb :items="items" :wrap="true"></UsaBreadcrumb>'}}}},m={args:{...s,items:a,ariaLabel:"Custom aria label"},name:"Custom Aria Label",parameters:{docs:{source:{code:'<UsaBreadcrumb :items="items" aria-label="Custom aria label"></UsaBreadcrumb>'}}}},c={args:{...s,items:a,customClasses:{list:["test-list-class"],item:["test-item-class"],link:["test-link-class"],span:["test-span-class"]}},name:"Custom Classes",parameters:{docs:{source:{code:`<UsaBreadcrumb :items="items" :custom-classes="{ list: ['test-list-class'], item: ['test-item-class'], link: ['test-link-class'], span: ['test-span-class'] }"></UsaBreadcrumb>`}}}};var u,l,d;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    items: testBreadcrumbs
  },
  name: 'Default',
  parameters: {
    docs: {
      source: {
        code: defaultBreadcrumbCodeSnippet
      }
    }
  }
}`,...(d=(l=r.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var i,p,b;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    items: testBreadcrumbs,
    wrap: true
  },
  name: 'Wrapped',
  parameters: {
    docs: {
      source: {
        code: \`<UsaBreadcrumb :items="items" :wrap="true"></UsaBreadcrumb>\`
      }
    }
  }
}`,...(b=(p=t.parameters)==null?void 0:p.docs)==null?void 0:b.source}}};var B,C,f;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    items: testBreadcrumbs,
    ariaLabel: 'Custom aria label'
  },
  name: 'Custom Aria Label',
  parameters: {
    docs: {
      source: {
        code: \`<UsaBreadcrumb :items="items" aria-label="Custom aria label"></UsaBreadcrumb>\`
      }
    }
  }
}`,...(f=(C=m.parameters)==null?void 0:C.docs)==null?void 0:f.source}}};var g,U,w;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    items: testBreadcrumbs,
    customClasses: {
      list: ['test-list-class'],
      item: ['test-item-class'],
      link: ['test-link-class'],
      span: ['test-span-class']
    }
  },
  name: 'Custom Classes',
  parameters: {
    docs: {
      source: {
        code: \`<UsaBreadcrumb :items="items" :custom-classes="{ list: ['test-list-class'], item: ['test-item-class'], link: ['test-link-class'], span: ['test-span-class'] }"></UsaBreadcrumb>\`
      }
    }
  }
}`,...(w=(U=c.parameters)==null?void 0:U.docs)==null?void 0:w.source}}};const h=["DefaultBreadcrumb","WrappedBreadcrumb","CustomAriaLabelBreadcrumb","CustomClassesBreadcrumb"];export{m as CustomAriaLabelBreadcrumb,c as CustomClassesBreadcrumb,r as DefaultBreadcrumb,t as WrappedBreadcrumb,h as __namedExportsOrder,P as default};
