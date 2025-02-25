import{_ as t}from"./UsaNavPrimaryItem-Bd4B-oYa.js";import"./vue.esm-bundler-DsKf3Hbt.js";import"./BaseLink-BYp1-IWJ.js";import"./constants-BA52rpFi.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const a={href:t.props.href.default,to:t.props.to.default,routerComponentName:t.props.routerComponentName.default},f={component:t,title:"Components/UsaNavPrimaryItem",argTypes:{href:{control:{type:"text"}},to:{control:{type:"text"}},routerComponentName:{control:{type:"text"}},default:{control:{type:"text"}}},args:{href:a.href,to:a.to,routerComponentName:a.routerComponentName,default:"Test nav link"},decorators:[()=>({template:"<story />",provide:{closeAllDropdowns:e=>{e.preventDefault()},closeMobileMenu:e=>{e.preventDefault()}}})],render:e=>({components:{UsaNavPrimaryItem:t},props:Object.keys(t.props),setup(){return{args:e}},template:`<UsaNavPrimaryItem
    v-bind="args.$attrs"
    :href="args.href"
    :to="args.to"
    :router-component-name="args.routerComponentName"
  >${e.default}</UsaNavPrimaryItem>`})},r={args:{...a,href:"/test-page"},name:"Default",parameters:{docs:{source:{code:'<UsaNavPrimaryItem href="/test-page">Test nav link</UsaNavPrimaryItem>'}}}};var o,s,n;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    href: '/test-page'
  },
  name: 'Default',
  parameters: {
    docs: {
      source: {
        code: \`<UsaNavPrimaryItem href="/test-page">Test nav link</UsaNavPrimaryItem>\`
      }
    }
  }
}`,...(n=(s=r.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const i=["DefaultNavPrimaryItem"];export{r as DefaultNavPrimaryItem,i as __namedExportsOrder,f as default};
