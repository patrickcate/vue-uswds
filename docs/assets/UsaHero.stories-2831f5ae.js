import{U as e,a as i}from"./UsaHeroCallout-42134002.js";import"./vue.esm-bundler-2e7cedae.js";import"./constants-fce87d39.js";import"./BaseHeading-0ea88faf.js";const a={backgroundImage:e.props.backgroundImage.default,ariaLabel:e.props.ariaLabel.default,customClasses:e.props.customClasses.default()},h={component:e,subcomponents:{UsaHeroCallout:i},title:"Components/UsaHero",argTypes:{backgroundImage:{control:{type:"text"}},ariaLabel:{control:{type:"text"}},customClasses:{control:{type:"object"}},default:{control:{type:"text"}}},args:{backgroundImage:a.backgroundImage,ariaLabel:a.ariaLabel,customClasses:a.customClasses,default:""},render:t=>({components:{UsaHero:e},props:Object.keys(e.props),setup(){return{args:t}},template:`<UsaHero :background-image="args.backgroundImage" :aria-label="args.ariaLabel" :custom-classes="args.customClasses">${t.default}</UsaHero>`})},o={args:{...a,backgroundImage:"https://federalist-3b6ba08e-0df4-44c9-ac73-6fc193b0e19c.sites.pages.cloud.gov/preview/uswds/uswds/develop/hero.jpg",ariaLabel:"Introduction"},name:"Default",parameters:{docs:{source:{code:`<UsaHero :background-image="backgroundImage" :aria-label="ariaLabel"><UsaHeroCallout heading="Bring attention to a project priority" heading-alt="Hero callout:"><p>Support the callout with some short explanatory text. You don't need more than a couple of sentences.</p></UsaHeroCallout></UsaHero>`}}}},s={args:{...a,backgroundImage:"https://federalist-3b6ba08e-0df4-44c9-ac73-6fc193b0e19c.sites.pages.cloud.gov/preview/uswds/uswds/develop/hero.jpg",ariaLabel:"Introduction",customClasses:{gridContainer:["test-grid-container-class"]}},name:"Custom Classes",parameters:{docs:{source:{code:`<UsaHero :background-image="backgroundImage" :aria-label="ariaLabel" :custom-classes="{gridContainer: ['test-grid-container-class']}"><UsaHeroCallout heading="Bring attention to a project priority" heading-alt="Hero callout:"><p>Support the callout with some short explanatory text. You don't need more than a couple of sentences.</p></UsaHeroCallout></UsaHero>`}}}};var r,n,c;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    backgroundImage: 'https://federalist-3b6ba08e-0df4-44c9-ac73-6fc193b0e19c.sites.pages.cloud.gov/preview/uswds/uswds/develop/hero.jpg',
    ariaLabel: 'Introduction'
  },
  name: 'Default',
  parameters: {
    docs: {
      source: {
        code: \`<UsaHero :background-image="backgroundImage" :aria-label="ariaLabel"><UsaHeroCallout heading="Bring attention to a project priority" heading-alt="Hero callout:"><p>Support the callout with some short explanatory text. You don't need more than a couple of sentences.</p></UsaHeroCallout></UsaHero>\`
      }
    }
  }
}`,...(c=(n=o.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};var l,u,d;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    backgroundImage: 'https://federalist-3b6ba08e-0df4-44c9-ac73-6fc193b0e19c.sites.pages.cloud.gov/preview/uswds/uswds/develop/hero.jpg',
    ariaLabel: 'Introduction',
    customClasses: {
      gridContainer: ['test-grid-container-class']
    }
  },
  name: 'Custom Classes',
  parameters: {
    docs: {
      source: {
        code: \`<UsaHero :background-image="backgroundImage" :aria-label="ariaLabel" :custom-classes="{gridContainer: ['test-grid-container-class']}"><UsaHeroCallout heading="Bring attention to a project priority" heading-alt="Hero callout:"><p>Support the callout with some short explanatory text. You don't need more than a couple of sentences.</p></UsaHeroCallout></UsaHero>\`
      }
    }
  }
}`,...(d=(u=s.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};const f=["DefaultHero","CustomClassesHero"];export{s as CustomClassesHero,o as DefaultHero,f as __namedExportsOrder,h as default};
