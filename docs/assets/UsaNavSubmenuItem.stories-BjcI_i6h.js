import{_ as e}from"./UsaNavSubmenuItem-CKP2yFkQ.js";import{l as m}from"./vue.esm-bundler-DsKf3Hbt.js";import"./BaseLink-BYp1-IWJ.js";import"./constants-BA52rpFi.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const o={href:e.props.href.default,to:e.props.to.default,routerComponentName:e.props.routerComponentName.default},l={component:e,title:"Components/UsaNavSubmenuItem",argTypes:{href:{control:{type:"text"}},to:{control:{type:"text"}},routerComponentName:{control:{type:"text"}},default:{control:{type:"text"}}},args:{href:o.href,to:o.to,routerComponentName:o.routerComponentName,default:"Test"},decorators:[()=>({template:'<ul class="usa-dark-background"><story /></ul>',provide:{dropdownId:m("sb-dropdown-id"),closeDropdown:()=>{},closeMobileMenu:()=>{}}})],render:r=>({components:{UsaNavSubmenuItem:e},props:Object.keys(e.props),setup(){return{args:r}},template:`<UsaNavSubmenuItem
      v-bind="args.$attrs"
      :href="args.href"
      :to="args.to"
      :router-component-name="args.routerComponentName"
    >${r.default}</UsaNavSubmenuItem>`})},t={args:{...o,href:"/test-page"},name:"Default",parameters:{docs:{source:{code:'<UsaNavSubmenuItem href="/test-page">Test</UsaNavSubmenuItem>'}}}};var a,s,n;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    href: '/test-page'
  },
  name: 'Default',
  parameters: {
    docs: {
      source: {
        code: \`<UsaNavSubmenuItem href="/test-page">Test</UsaNavSubmenuItem>\`
      }
    }
  }
}`,...(n=(s=t.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const N=["DefaultNavSubmenuItem"];export{t as DefaultNavSubmenuItem,N as __namedExportsOrder,l as default};
