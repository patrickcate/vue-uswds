import{l as B}from"./vue.esm-bundler-2e7cedae.js";import{U as a}from"./UsaTextarea-7155228e.js";import"./unique-id-a1cb1937.js";import"./common-c0b90c12.js";import"./constants-fce87d39.js";import"./UsaFormGroup-0035569d.js";import"./UsaLabel-818695ec.js";const e={width:a.props.width.default,modelValue:a.props.modelValue.default,label:a.props.label.default,required:a.props.required.default,error:a.props.error.default,id:a.props.id.default,customClasses:a.props.customClasses.default()},Y={component:a,title:"Components/UsaTextarea",argTypes:{width:{options:["","2xs","xs","sm","small","md","medium","lg","xl","2xl"],control:{type:"select"}},modelValue:{control:{type:"text"}},label:{control:{type:"text"},table:{category:"props"}},required:{control:{type:"boolean"}},error:{control:{type:"boolean"}},id:{control:{type:"text"}},customClasses:{control:{type:"object"}},"slot:label":{control:{type:"text"},name:"label",table:{category:"slots"}},hint:{control:{type:"text"}},"error-message":{control:{type:"text"}}},args:{width:e.width,modelValue:e.modelValue,label:e.label,required:e.required,error:e.error,id:e.id,customClasses:e.customClasses,"slot:label":"",hint:"","error-message":""},decorators:[()=>({template:'<div class="usa-form usa-form--large"><story /></div>'})],render:r=>({components:{UsaTextarea:a},props:Object.keys(a.props),setup(){const A=B(r.modelValue);return{args:r,modelValue:A}},template:`<UsaTextarea
      v-bind="$attrs"
      :width="args.width"
      :label="args.label"
      :required="args.required"
      :error="args.error"
      :id="args.id"
      :custom-classes="args.customClasses"
      v-model="args.modelValue"
    >
      <template v-if="!!args['slot:label']" #label>${r["slot:label"]}</template>
      <template v-if="!!args.hint" #hint>${r.hint}</template>
      <template v-if="!!args['error-message']" #error-message>${r["error-message"]}</template>
    </UsaTextarea>`})},s={args:{...e,label:"Textarea label"},name:"Default",parameters:{docs:{source:{code:""}}}},t={args:{...e,label:"Textarea label",modelValue:"I'm some default text."},name:"Default Text",parameters:{docs:{source:{code:`<UsaTextarea label="Textarea label" v-model="ref('I'm some default text.')" />`}}}},l={args:{...e,label:"Textarea label",width:"2xl"},name:"Width",parameters:{docs:{source:{code:'<UsaTextarea label="Textarea label" width="2xl" />'}}}},o={args:{...e,label:"Textarea label",hint:"Choose wisely"},name:"Hint",parameters:{docs:{source:{code:'<UsaTextarea label="Textarea label"><template #hint>Choose wisely</template></UsaTextarea>'}}}},n={args:{...e,label:"Textarea label",error:!0},name:"Error",parameters:{docs:{source:{code:'<UsaTextarea label="Textarea label" :error="true" />'}}}},m={args:{...e,label:"Textarea label",error:!0,"error-message":"Error message here"},name:"Error Message",parameters:{docs:{source:{code:'<UsaTextarea label="Textarea label" :error="true"><template #error-message>Error message here</template></UsaTextarea>'}}}},c={args:{...e,label:"Textarea label",required:!0},name:"Required",parameters:{docs:{source:{code:'<UsaTextarea label="Textarea label" :required="true" />'}}}},d={args:{...e,"slot:label":"<em>Label slot content</em>"},name:"Label Slot",parameters:{docs:{source:{code:"<UsaTextarea><template #label><em>Label slot content</em></template></UsaTextarea>"}}}},u={args:{...e,label:"Textarea label",id:"custom-id"},name:"Custom ID",parameters:{docs:{source:{code:'<UsaTextarea label="Textarea label" id="custom-id" />'}}}},p={args:{...e,label:"Textarea label",customClasses:{component:["test-component-class"],label:["test-label-class"]}},name:"Custom CSS Classes",parameters:{docs:{source:{code:`<UsaTextarea label="Textarea label" :custom-classes="{ component: 'test-component-class', label: 'test-label-class' }" />`}}}};var b,x,i;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    label: 'Textarea label'
  },
  name: 'Default',
  parameters: {
    docs: {
      source: {
        code: \`\`
      }
    }
  }
}`,...(i=(x=s.parameters)==null?void 0:x.docs)==null?void 0:i.source}}};var T,g,f;t.parameters={...t.parameters,docs:{...(T=t.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    label: 'Textarea label',
    modelValue: \`I'm some default text.\`
  },
  name: 'Default Text',
  parameters: {
    docs: {
      source: {
        code: \`<UsaTextarea label="Textarea label" v-model="ref('I'm some default text.')" />\`
      }
    }
  }
}`,...(f=(g=t.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var h,U,C;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    label: 'Textarea label',
    width: '2xl'
  },
  name: 'Width',
  parameters: {
    docs: {
      source: {
        code: \`<UsaTextarea label="Textarea label" width="2xl" />\`
      }
    }
  }
}`,...(C=(U=l.parameters)==null?void 0:U.docs)==null?void 0:C.source}}};var y,S,q;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    label: 'Textarea label',
    hint: 'Choose wisely'
  },
  name: 'Hint',
  parameters: {
    docs: {
      source: {
        code: \`<UsaTextarea label="Textarea label"><template #hint>Choose wisely</template></UsaTextarea>\`
      }
    }
  }
}`,...(q=(S=o.parameters)==null?void 0:S.docs)==null?void 0:q.source}}};var w,E,P;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    label: 'Textarea label',
    error: true
  },
  name: 'Error',
  parameters: {
    docs: {
      source: {
        code: \`<UsaTextarea label="Textarea label" :error="true" />\`
      }
    }
  }
}`,...(P=(E=n.parameters)==null?void 0:E.docs)==null?void 0:P.source}}};var D,V,v;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    label: 'Textarea label',
    error: true,
    'error-message': 'Error message here'
  },
  name: 'Error Message',
  parameters: {
    docs: {
      source: {
        code: \`<UsaTextarea label="Textarea label" :error="true"><template #error-message>Error message here</template></UsaTextarea>\`
      }
    }
  }
}`,...(v=(V=m.parameters)==null?void 0:V.docs)==null?void 0:v.source}}};var I,L,H;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    label: 'Textarea label',
    required: true
  },
  name: 'Required',
  parameters: {
    docs: {
      source: {
        code: \`<UsaTextarea label="Textarea label" :required="true" />\`
      }
    }
  }
}`,...(H=(L=c.parameters)==null?void 0:L.docs)==null?void 0:H.source}}};var M,R,W;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    'slot:label': \`<em>Label slot content</em>\`
  },
  name: 'Label Slot',
  parameters: {
    docs: {
      source: {
        code: \`<UsaTextarea><template #label><em>Label slot content</em></template></UsaTextarea>\`
      }
    }
  }
}`,...(W=(R=d.parameters)==null?void 0:R.docs)==null?void 0:W.source}}};var $,_,j;u.parameters={...u.parameters,docs:{...($=u.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    label: 'Textarea label',
    id: 'custom-id'
  },
  name: 'Custom ID',
  parameters: {
    docs: {
      source: {
        code: \`<UsaTextarea label="Textarea label" id="custom-id" />\`
      }
    }
  }
}`,...(j=(_=u.parameters)==null?void 0:_.docs)==null?void 0:j.source}}};var O,k,z;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    label: 'Textarea label',
    customClasses: {
      component: ['test-component-class'],
      label: ['test-label-class']
    }
  },
  name: 'Custom CSS Classes',
  parameters: {
    docs: {
      source: {
        code: \`<UsaTextarea label="Textarea label" :custom-classes="{ component: 'test-component-class', label: 'test-label-class' }" />\`
      }
    }
  }
}`,...(z=(k=p.parameters)==null?void 0:k.docs)==null?void 0:z.source}}};const Z=["DefaultTextarea","DefaultTextTextarea","WidthTextarea","HintTextarea","ErrorTextarea","ErrorMessageTextarea","RequiredTextarea","LabelSlotTextarea","CustomIdTextarea","CustomClassesTextarea"];export{p as CustomClassesTextarea,u as CustomIdTextarea,t as DefaultTextTextarea,s as DefaultTextarea,m as ErrorMessageTextarea,n as ErrorTextarea,o as HintTextarea,d as LabelSlotTextarea,c as RequiredTextarea,l as WidthTextarea,Z as __namedExportsOrder,Y as default};
