import{a as t,U as S}from"./UsaHeroCallout-42134002.js";import"./vue.esm-bundler-2e7cedae.js";import"./constants-fce87d39.js";import"./BaseHeading-0ea88faf.js";const e={headingAlt:t.props.headingAlt.default,heading:t.props.heading.default,headingTag:t.props.headingTag.default,customClasses:t.props.customClasses.default()},b={component:t,title:"Components/UsaHeroCallout",argTypes:{headingTag:{options:["h1","h2","h3","h4","h5","h6"],control:{type:"select"}},headingAlt:{control:{type:"text"},table:{category:"props"}},heading:{control:{type:"text"},table:{category:"props"}},customClasses:{control:{type:"object"}},"heading-alt":{control:{type:"text"},table:{category:"slots"}},"slot:headingAlt":{control:{type:"text"},name:"headingAlt (deprecated: use `heading-alt`)",table:{category:"slots"}},"slot:heading":{control:{type:"text"},name:"heading",table:{category:"slots"}},default:{control:{type:"text"}}},args:{headingTag:e.headingTag,headingAlt:e.headingAlt,heading:e.heading,customClasses:e.customClasses,"heading-alt":"","slot:heading":"",default:"<p>Support the callout with some short explanatory text. You don't need more than a couple of sentences.</p>"},render:a=>({components:{UsaHeroCallout:t,UsaHero:S},props:Object.keys(t.props),setup(){return{args:a}},template:`<UsaHero background-image="https://federalist-3b6ba08e-0df4-44c9-ac73-6fc193b0e19c.sites.pages.cloud.gov/preview/uswds/uswds/develop/hero.jpg" aria-label="Introduction">
    <UsaHeroCallout
      :heading="args.heading"
      :heading-alt="args.headingAlt"
      :heading-tag="args.headingTag"
      :custom-classes="args.customClasses"
    >
      <template v-if="!!args['heading-alt']" #heading-alt>${a["heading-alt"]}</template>
      <template v-else-if="!!args['slot:heading-alt']" #headingAlt>${a["slot:heading-alt"]}</template>
      <template v-if="!!args['slot:heading']" #heading>${a["slot:heading"]}</template>
      <template v-if="!!args.default" #default>${a.default}</template>
    </UsaHeroCallout>
  </UsaHero>`})},o={args:{...e,headingAlt:"Hero callout:",heading:"Bring attention to a project priority"},name:"Default",parameters:{docs:{source:{code:`<UsaHeroCallout heading="Bring attention to a project priority" heading-alt="Hero callout:"><p>Support the callout with some short explanatory text. You don't need more than a couple of sentences.</p></UsaHeroCallout>`}}}},n={args:{...e,"slot:heading":"Custom heading slot",headingAlt:"Hero callout:"},name:"Heading Slot",parameters:{docs:{source:{code:`<UsaHeroCallout heading-alt="Hero callout:"><template #heading>Custom heading slot</template><p>Support the callout with some short explanatory text. You don't need more than a couple of sentences.</p></UsaHeroCallout>`}}}},s={args:{...e,heading:"Bring attention to a project priority","heading-alt":"Custom heading alt slot"},name:"Heading Alt Slot",parameters:{docs:{source:{code:`<UsaHeroCallout heading="Bring attention to a project priority"><template #heading-alt>Custom heading alt slot</template><template #default><p>Support the callout with some short explanatory text. You don't need more than a couple of sentences.</p></template></UsaHeroCallout>`}}}},l={args:{...e,heading:"Bring attention to a project priority",headingAlt:"Custom heading alt slot",headingTag:"h4"},name:"Custom Heading Tag",parameters:{docs:{source:{code:`<UsaHeroCallout heading="Bring attention to a project priority" heading-alt="Custom heading alt slot" heading-tag="h4"><p>Support the callout with some short explanatory text. You don't need more than a couple of sentences.</p></UsaHeroCallout>`}}}},r={args:{...e,heading:"Bring attention to a project priority",headingAlt:"Custom heading alt slot",customClasses:{heading:["test-heading-class"],headingAlt:["test-heading-alt-class"]}},name:"Custom Classes",parameters:{docs:{source:{code:`<UsaHeroCallout heading="Bring attention to a project priority" heading-alt="Custom heading alt slot" :custom-classes="{heading: ['test-heading-class'], headingAlt: ['test-heading-alt-class']}"><p>Support the callout with some short explanatory text. You don't need more than a couple of sentences.</p></UsaHeroCallout>`}}}};var i,d,p;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    headingAlt: 'Hero callout:',
    heading: 'Bring attention to a project priority'
  },
  name: 'Default',
  parameters: {
    docs: {
      source: {
        code: \`<UsaHeroCallout heading="Bring attention to a project priority" heading-alt="Hero callout:"><p>Support the callout with some short explanatory text. You don't need more than a couple of sentences.</p></UsaHeroCallout>\`
      }
    }
  }
}`,...(p=(d=o.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var g,u,c;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    'slot:heading': 'Custom heading slot',
    headingAlt: 'Hero callout:'
  },
  name: 'Heading Slot',
  parameters: {
    docs: {
      source: {
        code: \`<UsaHeroCallout heading-alt="Hero callout:"><template #heading>Custom heading slot</template><p>Support the callout with some short explanatory text. You don't need more than a couple of sentences.</p></UsaHeroCallout>\`
      }
    }
  }
}`,...(c=(u=n.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};var h,m,C;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    heading: 'Bring attention to a project priority',
    'heading-alt': 'Custom heading alt slot'
  },
  name: 'Heading Alt Slot',
  parameters: {
    docs: {
      source: {
        code: \`<UsaHeroCallout heading="Bring attention to a project priority"><template #heading-alt>Custom heading alt slot</template><template #default><p>Support the callout with some short explanatory text. You don't need more than a couple of sentences.</p></template></UsaHeroCallout>\`
      }
    }
  }
}`,...(C=(m=s.parameters)==null?void 0:m.docs)==null?void 0:C.source}}};var H,y,f;l.parameters={...l.parameters,docs:{...(H=l.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    heading: 'Bring attention to a project priority',
    headingAlt: 'Custom heading alt slot',
    headingTag: 'h4'
  },
  name: 'Custom Heading Tag',
  parameters: {
    docs: {
      source: {
        code: \`<UsaHeroCallout heading="Bring attention to a project priority" heading-alt="Custom heading alt slot" heading-tag="h4"><p>Support the callout with some short explanatory text. You don't need more than a couple of sentences.</p></UsaHeroCallout>\`
      }
    }
  }
}`,...(f=(y=l.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var x,U,A;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    heading: 'Bring attention to a project priority',
    headingAlt: 'Custom heading alt slot',
    customClasses: {
      heading: ['test-heading-class'],
      headingAlt: ['test-heading-alt-class']
    }
  },
  name: 'Custom Classes',
  parameters: {
    docs: {
      source: {
        code: \`<UsaHeroCallout heading="Bring attention to a project priority" heading-alt="Custom heading alt slot" :custom-classes="{heading: ['test-heading-class'], headingAlt: ['test-heading-alt-class']}"><p>Support the callout with some short explanatory text. You don't need more than a couple of sentences.</p></UsaHeroCallout>\`
      }
    }
  }
}`,...(A=(U=r.parameters)==null?void 0:U.docs)==null?void 0:A.source}}};const Y=["DefaultHeroCallout","HeadingSlotHeroCallout","HeadingAltSlotHeroCallout","CustomHeadingTagHeroCallout","CustomClassesHeroCallout"];export{r as CustomClassesHeroCallout,l as CustomHeadingTagHeroCallout,o as DefaultHeroCallout,s as HeadingAltSlotHeroCallout,n as HeadingSlotHeroCallout,Y as __namedExportsOrder,b as default};
