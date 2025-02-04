import{B as e}from"./BaseLink-Dtgee05b.js";import"./constants-BA52rpFi.js";import"./vue.esm-bundler-DlC1_45x.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const r={href:e.props.href.default,to:e.props.to.default,routerComponentName:e.props.routerComponentName.default},k={component:e,title:"Components/BaseLink",argTypes:{href:{control:{type:"text"}},to:{control:{type:"text"}},routerComponentName:{control:{type:"text"}},default:{control:{type:"text"}}},args:{href:r.href,to:r.to,routerComponentName:r.routerComponentName,default:""},render:f=>({components:{BaseLink:e},props:Object.keys(e.props),setup(){return{args:f}},template:`<BaseLink
      :href="args.href"
      :to="args.to"
      :router-component-name="args.routerComponentName"
      >{{ args.default }}</BaseLink>`})},t={args:{...r,to:"/user",default:"A link"},name:"Default",parameters:{docs:{source:{code:'<BaseLink to="/user">A link</BaseLink>'}}}},o={args:{...r,href:"/user",default:"A href link"},name:"Default",parameters:{docs:{source:{code:'<BaseLink href="/user">A href link</BaseLink>'}}}};var n,a,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    to: '/user',
    default: 'A link'
  },
  name: 'Default',
  parameters: {
    docs: {
      source: {
        code: \`<BaseLink to="/user">A link</BaseLink>\`
      }
    }
  }
}`,...(s=(a=t.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};var p,u,m;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    href: '/user',
    default: 'A href link'
  },
  name: 'Default',
  parameters: {
    docs: {
      source: {
        code: \`<BaseLink href="/user">A href link</BaseLink>\`
      }
    }
  }
}`,...(m=(u=o.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};const B=["DefaultBaseLink","HrefBaseLink"];export{t as DefaultBaseLink,o as HrefBaseLink,B as __namedExportsOrder,k as default};
