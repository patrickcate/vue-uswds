import{U as o,a as h,D as T}from"./UsaAccordionItem.stories-d664ed52.js";import"./vue.esm-bundler-d9807bdf.js";import"./unique-id-dcbd9804.js";import"./common-c0b90c12.js";import"./constants-fce87d39.js";import"./BaseHeading-19544782.js";import"./useAccordion-97167de0.js";const e={bordered:o.props.bordered.default,multiselectable:o.props.multiselectable.default,headingTag:o.props.headingTag.default},t=`
	<UsaAccordionItem label="Accordion 1" open>Accordion 1 Content</UsaAccordionItem>
	<UsaAccordionItem label="Accordion 2">Accordion 2 Content</UsaAccordionItem>
	<UsaAccordionItem label="Accordion 3">Accordion 3 Content</UsaAccordionItem>`,H={component:o,title:"Components/UsaAccordion",argTypes:{bordered:{control:{type:"boolean"}},multiselectable:{control:{type:"boolean"}},headingTag:{control:{type:"text"}},default:{control:{type:"text"}}},args:{bordered:e.bordered,multiselectable:e.multiselectable,headingTag:e.headingTag},render:I=>({components:{UsaAccordion:o,UsaAccordionItem:h},props:Object.keys(o.props),setup(){return{args:I}},template:`
    <UsaAccordion
      :bordered="args.bordered"
      :multiselectable="args.multiselectable"
      :headingTag="args.headingTag"
    >
      	<UsaAccordionItem label="Accordion 1" open>Accordion 1 Content</UsaAccordionItem>
      	<UsaAccordionItem label="Accordion 2">Accordion 2 Content</UsaAccordionItem>
      	<UsaAccordionItem label="Accordion 3">Accordion 3 Content</UsaAccordionItem></UsaAccordion>`})},r={args:{...e,default:T},name:"Default",parameters:{docs:{source:{code:`<UsaAccordion>${t}
</UsaAccordion>`}}}},a={args:{...e,bordered:!0},name:"Bordered",parameters:{docs:{source:{code:`<UsaAccordion :bordered="true">${t}
</UsaAccordion>`}}}},c={args:{...e,multiselectable:!0},name:"Multiselectable",parameters:{docs:{source:{code:`<UsaAccordion :multiselectable="true">${t}
</UsaAccordion>`}}}},n={args:{...e,headingTag:"h4"},name:"Custom Heading Tag",parameters:{docs:{source:{code:`<UsaAccordion heading-tag="h4">${t}
</UsaAccordion>`}}}};var s,d,i;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    default: DefaultAccordionItem
  },
  name: 'Default',
  parameters: {
    docs: {
      source: {
        code: \`<UsaAccordion>\${defaultItems}\\n</UsaAccordion>\`
      }
    }
  }
}`,...(i=(d=r.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};var l,m,u;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    bordered: true
  },
  name: 'Bordered',
  parameters: {
    docs: {
      source: {
        code: \`<UsaAccordion :bordered="true">\${defaultItems}\\n</UsaAccordion>\`
      }
    }
  }
}`,...(u=(m=a.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var p,A,g;c.parameters={...c.parameters,docs:{...(p=c.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    multiselectable: true
  },
  name: 'Multiselectable',
  parameters: {
    docs: {
      source: {
        code: \`<UsaAccordion :multiselectable="true">\${defaultItems}\\n</UsaAccordion>\`
      }
    }
  }
}`,...(g=(A=c.parameters)==null?void 0:A.docs)==null?void 0:g.source}}};var b,U,f;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    headingTag: 'h4'
  },
  name: 'Custom Heading Tag',
  parameters: {
    docs: {
      source: {
        code: \`<UsaAccordion heading-tag="h4">\${defaultItems}\\n</UsaAccordion>\`
      }
    }
  }
}`,...(f=(U=n.parameters)==null?void 0:U.docs)==null?void 0:f.source}}};const M=["DefaultAccordion","BorderedAccordion","MultiselectableAccordion","CustomHeadingTagAccordion"];export{a as BorderedAccordion,n as CustomHeadingTagAccordion,r as DefaultAccordion,c as MultiselectableAccordion,M as __namedExportsOrder,H as default};
