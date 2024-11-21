import{l as Z}from"./vue.esm-bundler-d9807bdf.js";import{U as o}from"./UsaSelect-240c9415.js";import"./unique-id-dcbd9804.js";import"./common-c0b90c12.js";import"./constants-fce87d39.js";import"./UsaFormGroup-c2b9f5da.js";import"./UsaLabel-60182b62.js";const t=[{value:1,text:"Item 1",disabled:!0},{value:2,text:"Item 2"},{group:"Item 3",options:[{value:3.1,text:"Item 3.1"},{value:3.2,text:"Item 3.2",disabled:!0},{value:3.3,text:"Item 3.3"}]},{value:4,text:"Item 4"},{group:"Item 5",disabled:!0,options:[{value:5.1,text:"Item 5.1"},{value:5.2,text:"Item 5.2"}]}],e={options:o.props.options.default(),emptyLabel:o.props.emptyLabel.default,modelValue:o.props.modelValue.default,label:o.props.label.default,required:o.props.required.default,error:o.props.error.default,id:o.props.id.default,customClasses:o.props.customClasses.default()},ne={component:o,title:"Components/UsaSelect",argTypes:{options:{control:{type:"object"}},emptyLabel:{control:{type:"text"}},modelValue:{control:{type:"text"}},group:{control:{type:"boolean"}},label:{control:{type:"text"},table:{category:"props"}},required:{control:{type:"boolean"}},error:{control:{type:"boolean"}},id:{control:{type:"text"}},customClasses:{control:{type:"object"}},default:{control:{type:"text"}},"slot:label":{control:{type:"text"},name:"label",table:{category:"slots"}},hint:{control:{type:"text"}},"error-message":{control:{type:"text"}}},args:{options:e.options,emptyLabel:e.emptyLabel,modelValue:e.modelValue,group:e.group,label:e.label,required:e.required,error:e.error,id:e.id,customClasses:e.customClasses,default:"","slot:label":"",hint:"","error-message":""},decorators:[()=>({template:'<div class="usa-form usa-form--large"><story /></div>'})],render:s=>({components:{UsaSelect:o},props:Object.keys(o.props),setup(){const Y=Z(s.modelValue);return{args:s,modelValue:Y}},template:`<UsaSelect
    v-bind="args.$attrs"
    :options="args.options"
    :empty-label="args.emptyLabel"
    :group="args.group"
    :label="args.label"
    :required="args.required"
    :error="args.error"
    :id="args.id"
    :custom-classes="args.customClasses"
    v-model="args.modelValue"
  >
    <template v-if="!!args['slot:label']" #label>${s["slot:label"]}</template>
    <template v-if="!!args.default" #default="{ options }">${s.default}</template>
    <template v-if="!!args.hint" #hint>${s.hint}</template>
    <template v-if="!!args['error-message']" #error-message>${s["error-message"]}</template>
  </UsaSelect>`})},l={args:{...e,label:"Select label",options:t},name:"Default",parameters:{docs:{source:{code:'<UsaSelect label="Select label" :options="options"></UsaSelect>'}}}},a={args:{...e,label:"Select label",options:t,modelValue:"2"},name:"Selected by Default",parameters:{docs:{source:{code:'<UsaSelect label="Select label" :options="options" :model-value="2"></UsaSelect>'}}}},r={args:{...e,label:"Select label",options:t,hint:"Choose wisely"},name:"Hint",parameters:{docs:{source:{code:'<UsaSelect label="Select label" :options="options" hint="Choose wisely"></UsaSelect>'}}}},n={args:{...e,label:"Select label",options:t,error:!0},name:"Error",parameters:{docs:{source:{code:'<UsaSelect label="Select label" :options="options" :error="true"></UsaSelect>'}}}},c={args:{...e,label:"Select label",options:t,error:!0,"error-message":"Error message here"},name:"Error Message",parameters:{docs:{source:{code:'<UsaSelect label="Select label" :options="options" :error="true"><template #error-message>Error message here</template></UsaSelect>'}}}},p={args:{...e,label:"Select label",options:t,group:!0},name:"Group Elements",parameters:{docs:{source:{code:'<UsaSelect label="Select label" :options="options" :group="true"></UsaSelect>'}}}},m={args:{...e,label:"Select label",options:t,required:!0},name:"Required",parameters:{docs:{source:{code:'<UsaSelect label="Select label" :options="options" :required="true"></UsaSelect>'}}}},u={args:{...e,label:"Select label",options:t,emptyLabel:"Custom empty label"},name:"Custom Empty Label",parameters:{docs:{source:{code:'<UsaSelect label="Select label" :options="options" emptyLabel="Custom empty label"></UsaSelect>'}}}},i={args:{...e,options:t,"slot:label":"<em>Label slot content</em>"},name:"Label Slot",parameters:{docs:{source:{code:'<UsaSelect :options="options"><template #label><em>Label slot content</em></template></UsaSelect>'}}}},d={args:{...e,label:"Select label",options:t,default:'<option :value="options[0].value">{{ options[0].value }}</option>'},name:"Scoped Slot",parameters:{docs:{source:{code:'<UsaSelect label="Select label" :options="options"><template #default><option :value="options[0].value">{{ options[0].value }}</option></template></UsaSelect>'}}}},b={args:{...e,label:"Select label",options:t,id:"custom-id"},name:"Custom ID",parameters:{docs:{source:{code:'<UsaSelect label="Select label" :options="options" id="custom-id"></UsaSelect>'}}}},S={args:{...e,label:"Select label",options:t,customClasses:{component:["test-component-class"],label:["test-label-class"]}},name:"Custom CSS Classes",parameters:{docs:{source:{code:`<UsaSelect label="Select label" :options="options" :custom-classes="{component: ['test-component-class'], label: ['test-label-class']}"></UsaSelect>`}}}};var g,U,f;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    label: 'Select label',
    options: testOptions
  },
  name: 'Default',
  parameters: {
    docs: {
      source: {
        code: \`<UsaSelect label="Select label" :options="options"></UsaSelect>\`
      }
    }
  }
}`,...(f=(U=l.parameters)==null?void 0:U.docs)==null?void 0:f.source}}};var y,C,v;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    label: 'Select label',
    options: testOptions,
    modelValue: '2'
  },
  name: 'Selected by Default',
  parameters: {
    docs: {
      source: {
        code: \`<UsaSelect label="Select label" :options="options" :model-value="2"></UsaSelect>\`
      }
    }
  }
}`,...(v=(C=a.parameters)==null?void 0:C.docs)==null?void 0:v.source}}};var L,E,x;r.parameters={...r.parameters,docs:{...(L=r.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    label: 'Select label',
    options: testOptions,
    hint: 'Choose wisely'
  },
  name: 'Hint',
  parameters: {
    docs: {
      source: {
        code: \`<UsaSelect label="Select label" :options="options" hint="Choose wisely"></UsaSelect>\`
      }
    }
  }
}`,...(x=(E=r.parameters)==null?void 0:E.docs)==null?void 0:x.source}}};var h,q,O;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    label: 'Select label',
    options: testOptions,
    error: true
  },
  name: 'Error',
  parameters: {
    docs: {
      source: {
        code: \`<UsaSelect label="Select label" :options="options" :error="true"></UsaSelect>\`
      }
    }
  }
}`,...(O=(q=n.parameters)==null?void 0:q.docs)==null?void 0:O.source}}};var I,P,D;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    label: 'Select label',
    options: testOptions,
    error: true,
    'error-message': 'Error message here'
  },
  name: 'Error Message',
  parameters: {
    docs: {
      source: {
        code: \`<UsaSelect label="Select label" :options="options" :error="true"><template #error-message>Error message here</template></UsaSelect>\`
      }
    }
  }
}`,...(D=(P=c.parameters)==null?void 0:P.docs)==null?void 0:D.source}}};var V,$,w;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    label: 'Select label',
    options: testOptions,
    group: true
  },
  name: 'Group Elements',
  parameters: {
    docs: {
      source: {
        code: \`<UsaSelect label="Select label" :options="options" :group="true"></UsaSelect>\`
      }
    }
  }
}`,...(w=($=p.parameters)==null?void 0:$.docs)==null?void 0:w.source}}};var G,H,M;m.parameters={...m.parameters,docs:{...(G=m.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    label: 'Select label',
    options: testOptions,
    required: true
  },
  name: 'Required',
  parameters: {
    docs: {
      source: {
        code: \`<UsaSelect label="Select label" :options="options" :required="true"></UsaSelect>\`
      }
    }
  }
}`,...(M=(H=m.parameters)==null?void 0:H.docs)==null?void 0:M.source}}};var R,j,_;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    label: 'Select label',
    options: testOptions,
    emptyLabel: 'Custom empty label'
  },
  name: 'Custom Empty Label',
  parameters: {
    docs: {
      source: {
        code: \`<UsaSelect label="Select label" :options="options" emptyLabel="Custom empty label"></UsaSelect>\`
      }
    }
  }
}`,...(_=(j=u.parameters)==null?void 0:j.docs)==null?void 0:_.source}}};var B,k,T;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    options: testOptions,
    'slot:label': \`<em>Label slot content</em>\`
  },
  name: 'Label Slot',
  parameters: {
    docs: {
      source: {
        code: \`<UsaSelect :options="options"><template #label><em>Label slot content</em></template></UsaSelect>\`
      }
    }
  }
}`,...(T=(k=i.parameters)==null?void 0:k.docs)==null?void 0:T.source}}};var z,A,F;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    label: 'Select label',
    options: testOptions,
    default: \`<option :value="options[0].value">{{ options[0].value }}</option>\`
  },
  name: 'Scoped Slot',
  parameters: {
    docs: {
      source: {
        code: \`<UsaSelect label="Select label" :options="options"><template #default><option :value="options[0].value">{{ options[0].value }}</option></template></UsaSelect>\`
      }
    }
  }
}`,...(F=(A=d.parameters)==null?void 0:A.docs)==null?void 0:F.source}}};var J,K,N;b.parameters={...b.parameters,docs:{...(J=b.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    label: 'Select label',
    options: testOptions,
    id: 'custom-id'
  },
  name: 'Custom ID',
  parameters: {
    docs: {
      source: {
        code: \`<UsaSelect label="Select label" :options="options" id="custom-id"></UsaSelect>\`
      }
    }
  }
}`,...(N=(K=b.parameters)==null?void 0:K.docs)==null?void 0:N.source}}};var Q,W,X;S.parameters={...S.parameters,docs:{...(Q=S.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    label: 'Select label',
    options: testOptions,
    customClasses: {
      component: ['test-component-class'],
      label: ['test-label-class']
    }
  },
  name: 'Custom CSS Classes',
  parameters: {
    docs: {
      source: {
        code: \`<UsaSelect label="Select label" :options="options" :custom-classes="{component: ['test-component-class'], label: ['test-label-class']}"></UsaSelect>\`
      }
    }
  }
}`,...(X=(W=S.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};const ce=["DefaultSelect","DefaultByDefaultSelect","HintSelect","ErrorSelect","ErrorMessageSelect","GroupedSelect","RequiredSelect","CustomEmptyLabelSelect","LabelSlotSelect","ScopedSlotSelect","CustomIdSelect","CustomClassesSelect"];export{S as CustomClassesSelect,u as CustomEmptyLabelSelect,b as CustomIdSelect,a as DefaultByDefaultSelect,l as DefaultSelect,c as ErrorMessageSelect,n as ErrorSelect,p as GroupedSelect,r as HintSelect,i as LabelSlotSelect,m as RequiredSelect,d as ScopedSlotSelect,ce as __namedExportsOrder,ne as default};
