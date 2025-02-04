import{_ as o}from"./UsaNavDropdownButton-C1MN7sBg.js";import{p as d,l as u}from"./vue.esm-bundler-DlC1_45x.js";import"./constants-BA52rpFi.js";const r={href:o.props.href.default,to:o.props.to.default,routerComponentName:o.props.routerComponentName.default},m=u("test-dropdown-id"),a=d({"test-dropdown-id":!1}),w={component:o,title:"Components/UsaNavDropdownButton",argTypes:{href:{control:{type:"text"}},to:{control:{type:"text"}},routerComponentName:{control:{type:"text"}},default:{control:{type:"text"}}},args:{href:r.href,to:r.to,routerComponentName:r.routerComponentName,default:"Test dropdown button"},decorators:[()=>({template:"<story />",provide:{dropdownId:m,toggleDropdown:t=>{a[t]=!a[t]},dropdownItems:a}})],render:t=>({components:{UsaNavDropdownButton:o},props:Object.keys(o.props),setup(){return{args:t}},template:`<div class="usa-header usa-header--basic">
    <ul class="usa-nav__primary usa-accordion">
      <li class="usa-nav__primary-item">
        <UsaNavDropdownButton
          :href="args.href"
          :to="args.to"
          :router-component-name="args.routerComponentName">${t.default}</UsaNavDropdownButton>
      </li>
    </ul>
  </div>`})},e={args:{},name:"Default",parameters:{docs:{source:{code:"<UsaNavDropdownButton>Test dropdown button</UsaNavDropdownButton>"}}}};var n,s,p;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {},
  name: 'Default',
  parameters: {
    docs: {
      source: {
        code: \`<UsaNavDropdownButton>Test dropdown button</UsaNavDropdownButton>\`
      }
    }
  }
}`,...(p=(s=e.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};const i=["DefaultNavDropdownButton"];export{e as DefaultNavDropdownButton,i as __namedExportsOrder,w as default};
