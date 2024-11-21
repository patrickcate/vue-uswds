import{U as e}from"./UsaStepIndicatorHeader-1be696ee.js";import"./vue.esm-bundler-d9807bdf.js";import"./BaseHeading-19544782.js";const t={headingTag:e.props.headingTag.default,customClasses:e.props.customClasses.default()},s=["Test step 1","Test step 2","Test step 3"],I={component:e,title:"Components/UsaStepIndicatorHeader",argTypes:{currentStepNumber:{control:{type:"number",min:1,max:s.length+1}},currentStepLabel:{control:{type:"text"}},totalSteps:{control:{type:"number",min:1,max:s.length+1}},headingTag:{options:["h1","h2","h3","h4","h5","h6"],control:{type:"select"}},customClasses:{control:{type:"object"}}},args:{currentStepNumber:1,currentStepLabel:s[0],totalSteps:s.length,headingTag:t.headingTag,customClasses:t.customClasses},render:S=>({components:{UsaStepIndicatorHeader:e},props:Object.keys(e.props),setup(){return{args:S}},template:`<UsaStepIndicatorHeader
      :current-step-number="args.currentStepNumber"
      :current-step-label="args.currentStepLabel"
      :total-steps="args.totalSteps"
      :headingTag="args.headingTag"
      :custom-classes="args.customClasses"
    ></UsaStepIndicatorHeader>`})},a={args:{...t},name:"Default",parameters:{docs:{source:{code:'<UsaStepIndicatorHeader :current-step-number="1" current-step-label="Test step 1" :total-steps="3"></UsaStepIndicatorHeader>'}}}},r={args:{...t,customClasses:{heading:["test-heading-class"],counter:["test-counter-class"],label:["test-label-class"]}},name:"Custom Classes",parameters:{docs:{source:{code:`<UsaStepIndicatorHeader :current-step-number="1" current-step-label="Test step 1" :total-steps="3" :custom-classes="{ heading: ['test-heading-class'], counter: ['test-counter-class'], label: ['test-label-class'] }"></UsaStepIndicatorHeader>`}}}},n={args:{...t,headingTag:"h4"},name:"Custom Heading Tag",parameters:{docs:{source:{code:'<UsaStepIndicatorHeader :current-step-number="1" current-step-label="Test step 1" :total-steps="3" heading-tag="h4"></UsaStepIndicatorHeader>'}}}};var o,c,p;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    ...defaultProps
  },
  name: 'Default',
  parameters: {
    docs: {
      source: {
        code: \`<UsaStepIndicatorHeader :current-step-number="1" current-step-label="Test step 1" :total-steps="3"></UsaStepIndicatorHeader>\`
      }
    }
  }
}`,...(p=(c=a.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    customClasses: {
      heading: ['test-heading-class'],
      counter: ['test-counter-class'],
      label: ['test-label-class']
    }
  },
  name: 'Custom Classes',
  parameters: {
    docs: {
      source: {
        code: \`<UsaStepIndicatorHeader :current-step-number="1" current-step-label="Test step 1" :total-steps="3" :custom-classes="{ heading: ['test-heading-class'], counter: ['test-counter-class'], label: ['test-label-class'] }"></UsaStepIndicatorHeader>\`
      }
    }
  }
}`,...(u=(l=r.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var m,i,g;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    headingTag: 'h4'
  },
  name: 'Custom Heading Tag',
  parameters: {
    docs: {
      source: {
        code: \`<UsaStepIndicatorHeader :current-step-number="1" current-step-label="Test step 1" :total-steps="3" heading-tag="h4"></UsaStepIndicatorHeader>\`
      }
    }
  }
}`,...(g=(i=n.parameters)==null?void 0:i.docs)==null?void 0:g.source}}};const T=["DefaultStepIndicatorHeader","CustomClassesStepIndicatorHeader","CustomHeadingTagStepIndicatorHeader"];export{r as CustomClassesStepIndicatorHeader,n as CustomHeadingTagStepIndicatorHeader,a as DefaultStepIndicatorHeader,T as __namedExportsOrder,I as default};
