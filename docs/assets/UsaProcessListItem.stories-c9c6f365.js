import{a as e,U as S}from"./UsaProcessListItem-32515d82.js";import"./vue.esm-bundler-2e7cedae.js";import"./BaseHeading-0ea88faf.js";const s={heading:e.props.heading.default,headingTag:e.props.headingTag.default,customClasses:e.props.customClasses.default()},T={component:e,title:"Components/UsaProcessListItem",argTypes:{heading:{control:{type:"text"},table:{category:"props"}},headingTag:{options:["h1","h2","h3","h4","h5","h6"],control:{type:"select"}},customClasses:{control:{type:"object"}},"slot:heading":{control:{type:"text"},name:"heading",table:{category:"slots"}},default:{control:{type:"text"}}},args:{heading:s.heading,headingTag:s.headingTag,customClasses:s.customClasses,"slot:heading":"",default:"<p>Nullam sit amet enim. Suspendisse id velit vitae ligula volutpat condimentum. Aliquam erat volutpat. Sed quis velit. Nulla facilisi. Nulla libero. Vivamus pharetra posuere sapien.</p>"},render:n=>({components:{UsaProcessList:S,UsaProcessListItem:e},props:Object.keys(e.props),setup(){return{args:n}},template:`
    <UsaProcessList>
      <UsaProcessListItem :heading="args.heading" :heading-tag="args.headingTag" :custom-classes="args.customClasses">
        <template v-if="!!args['slot:heading']" #heading>${n["slot:heading"]}</template>
        <template v-if="!!args.default" #default>${n.default}</template>
      </UsaProcessListItem>
    </UsaProcessList>
  `})},a={args:{...s,heading:"Start a process"},name:"Default",parameters:{docs:{source:{code:'<UsaProcessListItem heading="Start a process"></UsaProcessListItem>'}}}},t={args:{...s,heading:"Start a process",headingTag:"h4"},name:"Custom Heading Tag",parameters:{docs:{source:{code:'<UsaProcessListItem heading="Start a process" heading-tag="h4"></UsaProcessListItem>'}}}},o={args:{...s,heading:"Start a process",customClasses:{heading:["test-heading-class"]}},name:"Custom Classes",parameters:{docs:{source:{code:`<UsaProcessListItem heading="Start a process" :custom-classes="{'heading': ['test-heading-class']}"></UsaProcessListItem>`}}}},r={args:{...s,"slot:heading":"Custom Heading Slot"},name:"Heading Slot",parameters:{docs:{source:{code:`<UsaProcessListItem>
	<template #heading>Custom Heading Slot</template>
</UsaProcessListItem>`}}}};var c,i,d;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    heading: 'Start a process'
  },
  name: 'Default',
  parameters: {
    docs: {
      source: {
        code: \`<UsaProcessListItem heading="Start a process"></UsaProcessListItem>\`
      }
    }
  }
}`,...(d=(i=a.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var m,g,l;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    heading: 'Start a process',
    headingTag: 'h4'
  },
  name: 'Custom Heading Tag',
  parameters: {
    docs: {
      source: {
        code: \`<UsaProcessListItem heading="Start a process" heading-tag="h4"></UsaProcessListItem>\`
      }
    }
  }
}`,...(l=(g=t.parameters)==null?void 0:g.docs)==null?void 0:l.source}}};var p,u,h;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    heading: 'Start a process',
    customClasses: {
      heading: ['test-heading-class']
    }
  },
  name: 'Custom Classes',
  parameters: {
    docs: {
      source: {
        code: \`<UsaProcessListItem heading="Start a process" :custom-classes="{'heading': ['test-heading-class']}"></UsaProcessListItem>\`
      }
    }
  }
}`,...(h=(u=o.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var P,L,I;r.parameters={...r.parameters,docs:{...(P=r.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    'slot:heading': 'Custom Heading Slot'
  },
  name: 'Heading Slot',
  parameters: {
    docs: {
      source: {
        code: \`<UsaProcessListItem>\\n\\t<template #heading>Custom Heading Slot</template>\\n</UsaProcessListItem>\`
      }
    }
  }
}`,...(I=(L=r.parameters)==null?void 0:L.docs)==null?void 0:I.source}}};const H=["DefaultProcessListItem","CustomHeadingTagProcessListItem","CustomClassesProcessListItem","HeadingSlotProcessListItem"];export{o as CustomClassesProcessListItem,t as CustomHeadingTagProcessListItem,a as DefaultProcessListItem,r as HeadingSlotProcessListItem,H as __namedExportsOrder,T as default};
