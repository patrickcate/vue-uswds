import{U as r}from"./UsaLabel-60182b62.js";import"./vue.esm-bundler-d9807bdf.js";const e={required:r.props.required.default,error:r.props.error.default},R={component:r,title:"Components/UsaLabel",argTypes:{for:{control:{type:"text"}},required:{control:{type:"boolean"},table:{category:"props"}},error:{control:{type:"boolean"}},"slot:required":{control:{type:"text"},name:"required",table:{category:"slots"}},default:{control:{type:"text"}}},args:{for:"test-id",required:e.required,error:e.error,"slot:required":"",default:"Test Label"},render:a=>({components:{UsaLabel:r},props:Object.keys(r.props),setup(){return{args:a,for:a.for}},template:`<UsaLabel :for="args.for" :required="args.required" :error="args.error"><template v-if="!!args.default" #default>${a.default}</template><template v-if="!!args['slot:required']" #required>${a["slot:required"]}</template></UsaLabel>`})},s={args:{...e},name:"Default",parameters:{docs:{source:{code:"<UsaLabel>Test Label</UsaLabel>"}}}},t={args:{...e,required:!0},name:"Required",parameters:{docs:{source:{code:'<UsaLabel :required="true">Test Label</UsaLabel>'}}}},o={args:{...e,error:!0},name:"Error",parameters:{docs:{source:{code:'<UsaLabel :error="true">Test Label</UsaLabel>'}}}},n={args:{...e,required:!0,"slot:required":"(required)"},name:"Required Slot",parameters:{docs:{source:{code:'<UsaLabel :required="true"><template #required>(required)</template></UsaLabel>'}}}};var u,l,d;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    ...defaultProps
  },
  name: 'Default',
  parameters: {
    docs: {
      source: {
        code: \`<UsaLabel>Test Label</UsaLabel>\`
      }
    }
  }
}`,...(d=(l=s.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var c,p,i;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    required: true
  },
  name: 'Required',
  parameters: {
    docs: {
      source: {
        code: \`<UsaLabel :required="true">Test Label</UsaLabel>\`
      }
    }
  }
}`,...(i=(p=t.parameters)==null?void 0:p.docs)==null?void 0:i.source}}};var m,b,q;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    error: true
  },
  name: 'Error',
  parameters: {
    docs: {
      source: {
        code: \`<UsaLabel :error="true">Test Label</UsaLabel>\`
      }
    }
  }
}`,...(q=(b=o.parameters)==null?void 0:b.docs)==null?void 0:q.source}}};var L,f,U;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    required: true,
    'slot:required': '(required)'
  },
  name: 'Required Slot',
  parameters: {
    docs: {
      source: {
        code: \`<UsaLabel :required="true"><template #required>(required)</template></UsaLabel>\`
      }
    }
  }
}`,...(U=(f=n.parameters)==null?void 0:f.docs)==null?void 0:U.source}}};const S=["DefaultLabel","RequiredLabel","ErrorLabel","RequiredSlotLabel"];export{s as DefaultLabel,o as ErrorLabel,t as RequiredLabel,n as RequiredSlotLabel,S as __namedExportsOrder,R as default};
