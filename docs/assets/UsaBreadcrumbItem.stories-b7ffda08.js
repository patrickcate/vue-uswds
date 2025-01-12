import{a as e,U as g}from"./UsaBreadcrumb-f4492f26.js";import"./vue.esm-bundler-d9807bdf.js";import"./BaseLink-378e51d3.js";import"./constants-fce87d39.js";import"./_plugin-vue_export-helper-c27b6911.js";const r={href:e.props.href.default,to:e.props.to.default,routerComponentName:e.props.routerComponentName.default,current:e.props.current.default,customClasses:e.props.customClasses.default()},h={component:e,title:"Components/UsaBreadcrumbItem",argTypes:{href:{control:{type:"text"}},to:{control:{type:"text"}},routerComponentName:{control:{type:"text"}},current:{control:{type:"boolean"}},customClasses:{control:{type:"object"}},default:{control:{type:"text"}}},args:{href:r.href,to:r.to,routerComponentName:r.routerComponentName,current:r.current,customClasses:r.customClasses,default:"Test breadcrumb"},render:f=>({components:{UsaBreadcrumb:g,UsaBreadcrumbItem:e},props:Object.keys(e.props),setup(){return{args:f}},template:`<UsaBreadcrumb>
    <UsaBreadcrumbItem
      :href="args.href"
      :to="args.to"
      :router-component-name="args.routerComponentName"
      :current="args.current"
      :custom-classes="args.customClasses"
    >{{ args.default }}</UsaBreadcrumbItem>
  </UsaBreadcrumb>`})},s={args:{...r,href:"/test-page"},name:"Default",parameters:{docs:{source:{code:'<UsaBreadcrumbItem href="/test-page">Test breadcrumb</UsaBreadcrumbItem>'}}}},t={args:{...r,href:"/test-page",current:!0},name:"Current",parameters:{docs:{source:{code:'<UsaBreadcrumbItem href="/test-page" :current="true">Test breadcrumb</UsaBreadcrumbItem>'}}}},a={args:{...r,href:"/test-page",customClasses:{link:["test-link-class"],span:["test-span-class"]}},name:"Custom Classes",parameters:{docs:{source:{code:`<UsaBreadcrumbItem href="/test-page" :custom-classes="{ link: ['test-link-class'], span: ['test-span-class'] }">Test breadcrumb</UsaBreadcrumbItem>`}}}};var o,n,m;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    href: '/test-page'
  },
  name: 'Default',
  parameters: {
    docs: {
      source: {
        code: \`<UsaBreadcrumbItem href="/test-page">Test breadcrumb</UsaBreadcrumbItem>\`
      }
    }
  }
}`,...(m=(n=s.parameters)==null?void 0:n.docs)==null?void 0:m.source}}};var c,u,p;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    href: '/test-page',
    current: true
  },
  name: 'Current',
  parameters: {
    docs: {
      source: {
        code: \`<UsaBreadcrumbItem href="/test-page" :current="true">Test breadcrumb</UsaBreadcrumbItem>\`
      }
    }
  }
}`,...(p=(u=t.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var d,l,b;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    href: '/test-page',
    customClasses: {
      link: ['test-link-class'],
      span: ['test-span-class']
    }
  },
  name: 'Custom Classes',
  parameters: {
    docs: {
      source: {
        code: \`<UsaBreadcrumbItem href="/test-page" :custom-classes="{ link: ['test-link-class'], span: ['test-span-class'] }">Test breadcrumb</UsaBreadcrumbItem>\`
      }
    }
  }
}`,...(b=(l=a.parameters)==null?void 0:l.docs)==null?void 0:b.source}}};const k=["DefaultBreadcrumbItem","CurrentBreadcrumbItem","CustomClassesBreadcrumbItem"];export{t as CurrentBreadcrumbItem,a as CustomClassesBreadcrumbItem,s as DefaultBreadcrumbItem,k as __namedExportsOrder,h as default};
