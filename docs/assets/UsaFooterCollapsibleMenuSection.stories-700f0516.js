import{U as e}from"./UsaFooterCollapsibleMenuSection-54ba2e98.js";import"./vue.esm-bundler-d9807bdf.js";import"./unique-id-dcbd9804.js";import"./common-c0b90c12.js";import"./constants-fce87d39.js";import"./BaseLink-378e51d3.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./BaseHeading-19544782.js";const s={text:"Test Item 1",children:[{href:"/test-1/test-1-1",text:"Test Item 1.1"},{href:"/test-1/test-1-2",text:"Test Item 1.2"},{href:"/test-1/test-1-3",text:"Test Item 1.3"}]},a={item:e.props.item.default(),headingTag:e.props.headingTag.default},h={component:e,title:"Components/UsaFooterCollapsibleMenuSection",argTypes:{item:{control:{type:"object"}},headingTag:{control:{type:"text"}}},args:{item:a.item,headingTag:a.headingTag},decorators:[()=>({template:'<div class="usa-footer usa-footer--big"><div class="usa-footer__nav"><story /></div></div>',provide:{footerMenuIsCollapsible:!1,menuSections:{},registerMenuSection:()=>{},unregisterMenuSection:()=>{},toggleMenuSection:()=>{}}})],render:c=>({components:{UsaFooterCollapsibleMenuSection:e},props:Object.keys(e.props),setup(){return{args:c}},template:`<UsaFooterCollapsibleMenuSection
    :item="args.item"
    :heading-tag="args.headingTag"
  ></UsaFooterCollapsibleMenuSection>`})},t={args:{...a,item:s},name:"Default",parameters:{docs:{source:{code:`<UsaFooterCollapsibleMenuSection :item="${JSON.stringify(s,null,"	")}"></UsaFooterCollapsibleMenuSection>`}}}},o={args:{...a,item:s,headingTag:"h3"},name:"Custom Heading Tag",parameters:{docs:{source:{code:`<UsaFooterCollapsibleMenuSection :item="${JSON.stringify(s,null,"	")}" heading-tag="h3"></UsaFooterCollapsibleMenuSection>`}}}};var n,r,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    item: testItem
  },
  name: 'Default',
  parameters: {
    docs: {
      source: {
        code: \`<UsaFooterCollapsibleMenuSection :item="\${JSON.stringify(testItem, null, '\\t')}"></UsaFooterCollapsibleMenuSection>\`
      }
    }
  }
}`,...(i=(r=t.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};var l,m,p;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    item: testItem,
    headingTag: 'h3'
  },
  name: 'Custom Heading Tag',
  parameters: {
    docs: {
      source: {
        code: \`<UsaFooterCollapsibleMenuSection :item="\${JSON.stringify(testItem, null, '\\t')}" heading-tag="h3"></UsaFooterCollapsibleMenuSection>\`
      }
    }
  }
}`,...(p=(m=o.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const F=["DefaultFooterCollapsibleMenuItem","HeadingTagFooterCollapsibleMenuItem"];export{t as DefaultFooterCollapsibleMenuItem,o as HeadingTagFooterCollapsibleMenuItem,F as __namedExportsOrder,h as default};
