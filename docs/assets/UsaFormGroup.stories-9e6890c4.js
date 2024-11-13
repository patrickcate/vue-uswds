import{U as r}from"./UsaFormGroup-0035569d.js";import"./vue.esm-bundler-2e7cedae.js";const e={group:r.props.group.default,error:r.props.error.default},f={component:r,title:"Components/UsaFormGroup",argTypes:{group:{control:{type:"boolean"}},error:{control:{type:"boolean"}},default:{control:{type:"text"}}},args:{group:e.group,error:e.error,default:'<label for="test-id">Test Input</label><input id="test-id" type="text" class="usa-input" />'},render:a=>({components:{UsaFormGroup:r},props:Object.keys(r.props),setup(){return{args:a}},template:`<UsaFormGroup
    :group="args.group"
    :error="args.error"
  >${a.default}</UsaFormGroup>`})},o={args:{...e},name:"Default",parameters:{docs:{source:{code:'<UsaFormGroup><label for="test-id">Test Input</label><input id="test-id" type="text" class="usa-input" /></UsaFormGroup>'}}}},t={args:{...e,group:!0},name:"Grouped",parameters:{docs:{source:{code:'<UsaFormGroup :group="true"><label for="test-id">Test Input</label><input id="test-id" type="text" class="usa-input" /></UsaFormGroup>'}}}},s={args:{...e,group:!0,error:!0},name:"Error",parameters:{docs:{source:{code:'<UsaFormGroup :group="true" :error="true"><label for="test-id">Test Input</label><input id="test-id" type="text" class="usa-input" /></UsaFormGroup>'}}}};var p,u,n;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    ...defaultProps
  },
  name: 'Default',
  parameters: {
    docs: {
      source: {
        code: \`<UsaFormGroup><label for="test-id">Test Input</label><input id="test-id" type="text" class="usa-input" /></UsaFormGroup>\`
      }
    }
  }
}`,...(n=(u=o.parameters)==null?void 0:u.docs)==null?void 0:n.source}}};var d,l,c;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    group: true
  },
  name: 'Grouped',
  parameters: {
    docs: {
      source: {
        code: \`<UsaFormGroup :group="true"><label for="test-id">Test Input</label><input id="test-id" type="text" class="usa-input" /></UsaFormGroup>\`
      }
    }
  }
}`,...(c=(l=t.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var m,i,g;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    group: true,
    error: true
  },
  name: 'Error',
  parameters: {
    docs: {
      source: {
        code: \`<UsaFormGroup :group="true" :error="true"><label for="test-id">Test Input</label><input id="test-id" type="text" class="usa-input" /></UsaFormGroup>\`
      }
    }
  }
}`,...(g=(i=s.parameters)==null?void 0:i.docs)==null?void 0:g.source}}};const U=["DefaultFormGroup","GroupedFormGroup","ErrorFormGroup"];export{o as DefaultFormGroup,s as ErrorFormGroup,t as GroupedFormGroup,U as __namedExportsOrder,f as default};
