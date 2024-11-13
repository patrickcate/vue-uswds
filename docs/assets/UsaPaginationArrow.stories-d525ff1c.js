import{U as a}from"./UsaPaginationArrow-17230b2f.js";import"./vue.esm-bundler-2e7cedae.js";import"./constants-fce87d39.js";import"./BaseLink-05a2e488.js";import"./_plugin-vue_export-helper-c27b6911.js";const e={direction:a.props.direction.default,label:a.props.label.default,ariaLabel:"Previous page",customClasses:a.props.customClasses.default()},k={component:a,title:"Components/UsaPaginationArrow",argTypes:{direction:{options:["previous","next"],control:{type:"radio"}},label:{control:{type:"text"}},ariaLabel:{control:{type:"text"}},href:{control:{type:"text"}},to:{control:{type:"text"}},routerComponentName:{control:{type:"text"}},customClasses:{control:{type:"object"}},default:{control:{type:"text"}},before:{control:{type:"text"}},after:{control:{type:"text"}}},args:{direction:e.direction,label:e.label,ariaLabel:e.ariaLabel,customClasses:e.customClasses,href:"/test-page",to:"",routerComponentName:"",default:e.label,before:"",after:""},decorators:[()=>({template:'<ul class="usa-pagination__list"><story /></ul>'})],render:t=>({components:{UsaPaginationArrow:a},props:Object.keys(a.props),setup(){return{args:t}},template:`<UsaPaginationArrow
    :direction="args.direction"
    :label="args.label"
    :aria-label="args.ariaLabel"
    :href="args.href"
    :to="args.to"
    :router-component-name="args.routerComponentName"
    :custom-classes="args.customClasses"
  >
    <template v-if="!!args.before" #before>${t.before}</template>
    <template v-if="!!args.default" #default>${t.default}</template>
    <template v-if="!!args.after" #after>${t.after}</template>
  </UsaPaginationArrow>`})},r={args:{...e,label:"Previous"},name:"Previous",parameters:{docs:{source:{code:'<UsaPaginationArrow label="Previous"></UsaPaginationArrow>'}}}},o={args:{...e,direction:"next",label:"Next",ariaLabel:"Next page",default:"Next"},name:"Next",parameters:{docs:{source:{code:'<UsaPaginationArrow direction="next" aria-label="Next page" label="Next">Next</UsaPaginationArrow>'}}}},s={args:{...e,direction:"previous",label:"Previous",ariaLabel:"Previous page",default:"Previous",before:"&lt;&nbsp;"},name:"Before Slot",parameters:{docs:{source:{code:'<UsaPaginationArrow direction="previous" aria-label="Previous page" label="Previous"><template #before>&lt;&nbsp;</template><template #default>Previous</template></UsaPaginationArrow>'}}}},n={args:{...e,direction:"next",label:"Next",ariaLabel:"Next page",default:"Next",after:"&nbsp;&gt;"},name:"After Slot",parameters:{docs:{source:{code:'<UsaPaginationArrow direction="next" aria-label="Next page" label="Next"><template #default>Next</template><template #after>&nbsp;&gt;</template></UsaPaginationArrow>'}}}},i={args:{...e,customClasses:{link:["test-link-class"],text:["test-text-class"]}},name:"Custom Classes",parameters:{docs:{source:{code:`<UsaPaginationArrow :custom-classes="{ link: ['test-link-class'], text: ['test-text-class'] }"></UsaPaginationArrow>`}}}};var l,c,p;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    label: 'Previous'
  },
  name: 'Previous',
  parameters: {
    docs: {
      source: {
        code: \`<UsaPaginationArrow label="Previous"></UsaPaginationArrow>\`
      }
    }
  }
}`,...(p=(c=r.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var u,m,d;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    direction: 'next',
    label: 'Next',
    ariaLabel: 'Next page',
    default: 'Next'
  },
  name: 'Next',
  parameters: {
    docs: {
      source: {
        code: \`<UsaPaginationArrow direction="next" aria-label="Next page" label="Next">Next</UsaPaginationArrow>\`
      }
    }
  }
}`,...(d=(m=o.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var g,P,b;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    direction: 'previous',
    label: 'Previous',
    ariaLabel: 'Previous page',
    default: 'Previous',
    before: '&lt;&nbsp;'
  },
  name: 'Before Slot',
  parameters: {
    docs: {
      source: {
        code: \`<UsaPaginationArrow direction="previous" aria-label="Previous page" label="Previous"><template #before>&lt;&nbsp;</template><template #default>Previous</template></UsaPaginationArrow>\`
      }
    }
  }
}`,...(b=(P=s.parameters)==null?void 0:P.docs)==null?void 0:b.source}}};var f,x,A;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    direction: 'next',
    label: 'Next',
    ariaLabel: 'Next page',
    default: 'Next',
    after: '&nbsp;&gt;'
  },
  name: 'After Slot',
  parameters: {
    docs: {
      source: {
        code: \`<UsaPaginationArrow direction="next" aria-label="Next page" label="Next"><template #default>Next</template><template #after>&nbsp;&gt;</template></UsaPaginationArrow>\`
      }
    }
  }
}`,...(A=(x=n.parameters)==null?void 0:x.docs)==null?void 0:A.source}}};var w,N,v;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    customClasses: {
      link: ['test-link-class'],
      text: ['test-text-class']
    }
  },
  name: 'Custom Classes',
  parameters: {
    docs: {
      source: {
        code: \`<UsaPaginationArrow :custom-classes="{ link: ['test-link-class'], text: ['test-text-class'] }"></UsaPaginationArrow>\`
      }
    }
  }
}`,...(v=(N=i.parameters)==null?void 0:N.docs)==null?void 0:v.source}}};const _=["PreviousPaginationArrow","NextPaginationArrow","BeforeSlotPaginationArrow","AfterSlotPaginationArrow","CustomClassesPaginationArrow"];export{n as AfterSlotPaginationArrow,s as BeforeSlotPaginationArrow,i as CustomClassesPaginationArrow,o as NextPaginationArrow,r as PreviousPaginationArrow,_ as __namedExportsOrder,k as default};
