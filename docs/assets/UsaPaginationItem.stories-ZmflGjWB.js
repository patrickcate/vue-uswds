import{_ as r}from"./UsaPaginationItem-CCKH_1PS.js";import"./vue.esm-bundler-DsKf3Hbt.js";import"./BaseLink-BYp1-IWJ.js";import"./constants-BA52rpFi.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const e={pageNumber:1,isCurrentPage:r.props.isCurrentPage.default,ariaLabel:"Page 1"},f={component:r,title:"Components/UsaPaginationItem",argTypes:{pageNumber:{control:{type:"number"}},isCurrentPage:{control:{type:"boolean"}},ariaLabel:{control:{type:"text"}},href:{control:{type:"text"}},to:{control:{type:"text"}},routerComponentName:{control:{type:"text"}},default:{control:{type:"text"}}},args:{pageNumber:e.pageNumber,isCurrentPage:e.isCurrentPage,ariaLabel:e.ariaLabel,href:"/test-page",to:"",routerComponentName:"",default:""},decorators:[()=>({template:'<nav class="usa-pagination"><ul class="usa-pagination__list"><story /></ul></nav>'})],render:n=>({components:{UsaPaginationItem:r},props:Object.keys(r.props),setup(){return{args:n}},template:`<UsaPaginationItem
    :page-number="args.pageNumber"
    :is-current-page="args.isCurrentPage"
    :aria-label="args.ariaLabel"
    :href="args.href"
    :to="args.to"
    :router-component-name="args.routerComponentName"
  >${n.default}</UsaPaginationItem>`})},a={args:{...e},name:"Default",parameters:{docs:{source:{code:'<UsaPaginationItem href="/test-page"></UsaPaginationItem>'}}}},t={args:{...e,isCurrentPage:!0},name:"Current Page",parameters:{docs:{source:{code:'<UsaPaginationItem href="/test-page" :is-current-page="true"></UsaPaginationItem>'}}}};var o,s,i;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    ...defaultProps
  },
  name: 'Default',
  parameters: {
    docs: {
      source: {
        code: \`<UsaPaginationItem href="/test-page"></UsaPaginationItem>\`
      }
    }
  }
}`,...(i=(s=a.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};var p,m,g;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    isCurrentPage: true
  },
  name: 'Current Page',
  parameters: {
    docs: {
      source: {
        code: \`<UsaPaginationItem href="/test-page" :is-current-page="true"></UsaPaginationItem>\`
      }
    }
  }
}`,...(g=(m=t.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};const I=["DefaultPaginationItem","CurrentPagePaginationItem"];export{t as CurrentPagePaginationItem,a as DefaultPaginationItem,I as __namedExportsOrder,f as default};
