import{_ as s}from"./UsaFooterMenu-37wYwo_w.js";import"./vue.esm-bundler-DsKf3Hbt.js";import"./constants-BA52rpFi.js";import"./BaseLink-BYp1-IWJ.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const o=[{href:"/test-1",text:"Test Item 1"},{to:"/test-2",text:"Test Item 2"},{id:"test-3",href:"/test-3",text:"Test Item 3"},{id:"test-4",href:"/test-4",text:"Test Item 4"}],r={items:s.props.items.default(),customClasses:s.props.customClasses.default()},F={component:s,title:"Components/UsaFooterMenu",argTypes:{items:{control:{type:"object"}},customClasses:{control:{type:"object"}}},args:{items:r.items,customClasses:r.customClasses},decorators:[()=>({template:'<div class="usa-footer"><div class="usa-footer__nav"><story /></div></div>'})],render:l=>({components:{UsaFooterMenu:s},props:Object.keys(s.props),setup(){return{args:l}},template:`<UsaFooterMenu
    :items="args.items"
    :custom-classes="args.customClasses"
  ></UsaFooterMenu>`})},e={args:{...r,items:o},name:"Default",parameters:{docs:{source:{code:`<UsaFooterMenu :items="${JSON.stringify(o),"	"}"></UsaFooterMenu>`}}}},t={args:{...r,items:o,customClasses:{gridRow:["test-grid-row-class"],gridCol:["test-grid-col-class"]}},name:"Custom Classes",parameters:{docs:{source:{code:`<UsaFooterMenu :custom-classes="{ gridRow: ['test-grid-row-class'], gridCol: ['test-grid-col-class'] }" :items="${JSON.stringify(o),"	"}"></UsaFooterMenu>`}}}};var a,n,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    items: testItems
  },
  name: 'Default',
  parameters: {
    docs: {
      source: {
        code: \`<UsaFooterMenu :items="\${JSON.stringify(testItems), null, '\\t'}"></UsaFooterMenu>\`
      }
    }
  }
}`,...(m=(n=e.parameters)==null?void 0:n.docs)==null?void 0:m.source}}};var c,u,i;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    items: testItems,
    customClasses: {
      gridRow: ['test-grid-row-class'],
      gridCol: ['test-grid-col-class']
    }
  },
  name: 'Custom Classes',
  parameters: {
    docs: {
      source: {
        code: \`<UsaFooterMenu :custom-classes="{ gridRow: ['test-grid-row-class'], gridCol: ['test-grid-col-class'] }" :items="\${JSON.stringify(testItems), null, '\\t'}"></UsaFooterMenu>\`
      }
    }
  }
}`,...(i=(u=t.parameters)==null?void 0:u.docs)==null?void 0:i.source}}};const M=["DefaultFooterMenu","CustomClassesFooterMenu"];export{t as CustomClassesFooterMenu,e as DefaultFooterMenu,M as __namedExportsOrder,F as default};
