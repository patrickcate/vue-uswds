import{U as a}from"./UsaCollectionHeading-9c43a4b9.js";import"./vue.esm-bundler-d9807bdf.js";import"./BaseHeading-19544782.js";import"./BaseLink-378e51d3.js";import"./constants-fce87d39.js";import"./_plugin-vue_export-helper-c27b6911.js";const e={heading:a.props.heading.default,headingTag:a.props.headingTag.default,href:a.props.href.default,to:a.props.to.default,routerComponentName:a.props.routerComponentName.default,customClasses:a.props.customClasses.default()},x={component:a,title:"Components/UsaCollectionHeading",argTypes:{heading:{control:{type:"text"},table:{category:"props"}},headingTag:{options:["h1","h2","h3","h4","h5","h6"],control:{type:"select"}},href:{control:{type:"text"}},to:{control:{type:"text"}},routerComponentName:{control:{type:"text"}},customClasses:{control:{type:"object"}},default:{control:{type:"text"}}},args:{heading:e.heading,headingTag:e.headingTag,href:e.href,to:e.to,routerComponentName:e.routerComponentName,customClasses:e.customClasses,default:""},render:r=>({components:{UsaCollectionHeading:a},props:Object.keys(a.props),setup(){return{args:r}},template:`<UsaCollectionHeading
    :heading="args.heading"
    :heading-tag="args.headingTag"
    :href="args.href"
    :to="args.to"
    :router-component-name="args.routerComponentName"
    :custom-classes="args.customClasses"
  >${r.default}</UsaCollectionHeading>`})},o={args:{...e,heading:"Collection Item Heading"},name:"Default",parameters:{docs:{source:{code:'<UsaCollectionHeading heading="Collection Item Heading" />'}}}},n={args:{...e,headingTag:"h4",heading:"Custom heading tag"},name:"Custom Heading Tag",parameters:{docs:{source:{code:'<UsaCollectionHeading heading-tag="h4" heading="Collection Item Heading" />'}}}},t={args:{...e,heading:"Collection Item Heading",default:"Custom header slot"},name:"Header Slot",parameters:{docs:{source:{code:'<UsaCollectionHeading heading-tag="h4">Custom header slot</UsaCollectionHeading>'}}}},s={args:{...e,heading:"Collection Item Heading",customClasses:{link:["test-link-class"]}},name:"Custom Classes",parameters:{docs:{source:{code:`<UsaCollectionHeading heading="Collection Item Heading" :custom-classes="{ link: ['test-link-class'] }" />`}}}};var l,i,d;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    heading: 'Collection Item Heading'
  },
  name: 'Default',
  parameters: {
    docs: {
      source: {
        code: \`<UsaCollectionHeading heading="Collection Item Heading" />\`
      }
    }
  }
}`,...(d=(i=o.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var c,g,m;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    headingTag: 'h4',
    heading: 'Custom heading tag'
  },
  name: 'Custom Heading Tag',
  parameters: {
    docs: {
      source: {
        code: \`<UsaCollectionHeading heading-tag="h4" heading="Collection Item Heading" />\`
      }
    }
  }
}`,...(m=(g=n.parameters)==null?void 0:g.docs)==null?void 0:m.source}}};var p,u,C;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    heading: 'Collection Item Heading',
    default: 'Custom header slot'
  },
  name: 'Header Slot',
  parameters: {
    docs: {
      source: {
        code: \`<UsaCollectionHeading heading-tag="h4">Custom header slot</UsaCollectionHeading>\`
      }
    }
  }
}`,...(C=(u=t.parameters)==null?void 0:u.docs)==null?void 0:C.source}}};var h,H,f;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    heading: 'Collection Item Heading',
    customClasses: {
      link: ['test-link-class']
    }
  },
  name: 'Custom Classes',
  parameters: {
    docs: {
      source: {
        code: \`<UsaCollectionHeading heading="Collection Item Heading" :custom-classes="{ link: ['test-link-class'] }" />\`
      }
    }
  }
}`,...(f=(H=s.parameters)==null?void 0:H.docs)==null?void 0:f.source}}};const N=["DefaultCollectionItemHeading","CustomHeadingCollectionItemHeading","HeadingSlotCollectionItemHeading","CustomClassesCollectionItemHeading"];export{s as CustomClassesCollectionItemHeading,n as CustomHeadingCollectionItemHeading,o as DefaultCollectionItemHeading,t as HeadingSlotCollectionItemHeading,N as __namedExportsOrder,x as default};
