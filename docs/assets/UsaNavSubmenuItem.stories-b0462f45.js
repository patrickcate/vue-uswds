import{U as e}from"./UsaNavSubmenuItem-06a99b5a.js";import{l as m}from"./vue.esm-bundler-2e7cedae.js";import"./BaseLink-05a2e488.js";import"./constants-fce87d39.js";import"./_plugin-vue_export-helper-c27b6911.js";const o={href:e.props.href.default,to:e.props.to.default,routerComponentName:e.props.routerComponentName.default},f={component:e,title:"Components/UsaNavSubmenuItem",argTypes:{href:{control:{type:"text"}},to:{control:{type:"text"}},routerComponentName:{control:{type:"text"}},default:{control:{type:"text"}}},args:{href:o.href,to:o.to,routerComponentName:o.routerComponentName,default:"Test"},decorators:[()=>({template:'<ul class="usa-dark-background"><story /></ul>',provide:{dropdownId:m("sb-dropdown-id"),closeDropdown:()=>{},closeMobileMenu:()=>{}}})],render:r=>({components:{UsaNavSubmenuItem:e},props:Object.keys(e.props),setup(){return{args:r}},template:`<UsaNavSubmenuItem
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
}`,...(n=(s=t.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const N=["DefaultNavSubmenuItem"];export{t as DefaultNavSubmenuItem,N as __namedExportsOrder,f as default};
