import{l as ie}from"./vue.esm-bundler-d9807bdf.js";import{U as t}from"./UsaTextInput-abcd84b3.js";import"./index-db724f69.js";import"./index-7991d288.js";import"./unique-id-dcbd9804.js";import"./common-c0b90c12.js";import"./constants-fce87d39.js";import"./UsaFormGroup-c2b9f5da.js";import"./UsaLabel-60182b62.js";const e={type:t.props.type.default,width:t.props.width.default,modelValue:t.props.modelValue.default,label:t.props.label.default,group:t.props.group.default,required:t.props.required.default,error:t.props.error.default,id:t.props.id.default,customClasses:t.props.customClasses.default()},Ue={component:t,title:"Components/UsaTextInput",argTypes:{type:{control:{type:"text"}},width:{options:["","2xs","xs","sm","small","md","medium","lg","xl","2xl"],control:{type:"select"}},modelValue:{control:{type:"text"}},label:{control:{type:"text"},table:{category:"props"}},group:{control:{type:"boolean"}},required:{control:{type:"boolean"}},error:{control:{type:"boolean"}},id:{control:{type:"text"}},customClasses:{control:{type:"object"}},"slot:label":{control:{type:"text"},name:"label",table:{category:"slots"}},hint:{control:{type:"text"}},"error-message":{control:{type:"text"}},"input-prefix":{control:{type:"text"}},"input-suffix":{control:{type:"text"}}},args:{type:e.type,width:e.width,modelValue:e.modelValue,label:e.label,group:e.group,required:e.required,error:e.error,id:e.id,customClasses:e.customClasses,"slot:label":"",hint:"","error-message":"","input-prefix":"","input-suffix":""},decorators:[()=>({template:'<div class="usa-form usa-form--large"><story /></div>'})],render:a=>({components:{UsaTextInput:t},props:Object.keys(t.props),setup(){const ue=ie(a.modelValue);return{args:a,modelValue:ue}},template:`<UsaTextInput
      v-bind="args.$attrs"
      :type="args.type"
      :width="args.width"
      :group="args.group"
      :label="args.label"
      :required="args.required"
      :error="args.error"
      :id="args.id"
      :custom-classes="args.customClasses"
      v-model="args.modelValue"
    >
      <template v-if="!!args['slot:label']" #label>${a["slot:label"]}</template>
      <template v-if="!!args.hint" #hint>${a.hint}</template>
      <template v-if="!!args['error-message']" #error-message>${a["error-message"]}</template>
      <template v-if="!!args['input-prefix']" #input-prefix>${a["input-prefix"]}</template>
      <template v-if="!!args['input-suffix']" #input-suffix>${a["input-suffix"]}</template>
    </UsaTextInput>`})},r={args:{...e,label:"Text input label"},name:"Default",parameters:{docs:{source:{code:'<UsaTextInput label="Text input label" />'}}}},s={args:{...e,label:"Text input label",modelValue:"I am some default text"},name:"Default Text",parameters:{docs:{source:{code:`<UsaTextInput label="Text input label" v-model="ref('I am some default text')" />`}}}},n={args:{...e,label:"Text input label",type:"number"},name:"Input Type",parameters:{docs:{source:{code:'<UsaTextInput label="Text input label" type="number" />'}}}},p={args:{...e,label:"Text input label",width:"sm"},name:"Width",parameters:{docs:{source:{code:'<UsaTextInput label="Text input label" width="sm" />'}}}},o={args:{...e,label:"Text input label",hint:"Choose wisely"},name:"Hint",parameters:{docs:{source:{code:'<UsaTextInput label="Text input label"><template #hint>Choose wisely</template></UsaTextInput>'}}}},l={args:{...e,label:"Text input label",error:!0},name:"Error",parameters:{docs:{source:{code:'<UsaTextInput label="Text input label" :error="true" />'}}}},u={args:{...e,label:"Text input label",error:!0,"error-message":"Error message here"},name:"Error Message",parameters:{docs:{source:{code:'<UsaTextInput label="Text input label" :error="true"><template #error-message>Error message here</template></UsaTextInput>'}}}},i={args:{...e,label:"Text input label",required:!0},name:"Required",parameters:{docs:{source:{code:'<UsaTextInput label="Text input label" :required="true" />'}}}},m={args:{...e,label:"Text input label",group:!0},name:"Group Input Elements",parameters:{docs:{source:{code:'<UsaTextInput label="Text input label" :group="true" />'}}}},c={args:{...e,"slot:label":"<em>Label slot content</em>"},name:"Label Slot",parameters:{docs:{source:{code:"<UsaTextInput><template #label><em>Label slot content</em></template></UsaTextInput>"}}}},x={args:{...e,"input-prefix":"@"},name:"Input Prefix",parameters:{docs:{source:{code:"<UsaTextInput><template #input-prefix>@</template></UsaTextInput>"}}}},d={args:{...e,"input-suffix":"%"},name:"Input Suffix",parameters:{docs:{source:{code:"<UsaTextInput><template #input-suffix>%</template></UsaTextInput>"}}}},f={args:{...e,"input-prefix":"@","input-suffix":"%"},name:"Input Prefix & Suffix",parameters:{docs:{source:{code:"<UsaTextInput><template #input-prefix>@</template><template #input-suffix>%</template></UsaTextInput>"}}}},b={args:{...e,label:"Text input label",id:"custom-id"},name:"Custom ID",parameters:{docs:{source:{code:'<UsaTextInput label="Text input label" id="custom-id" />'}}}},T={args:{...e,label:"Text input label",customClasses:{component:["test-component-class"],label:["test-label-class"],inputGroup:["test-input-group-class"],inputPrefix:["test-input-prefix-class"],inputSuffix:["test-input-suffix-class"]},"input-prefix":"@","input-suffix":"%"},name:"Custom CSS Classes",parameters:{docs:{source:{code:`<UsaTextInput label="Text input label" :custom-classes="{ 
	component: ['test-component-class'], 
	label: ['test-label-class'], 
	inputGroup: ['test-input-group-class'], 
	inputPrefix: ['test-input-prefix-class'], 
	inputSuffix: ['test-input-suffix-class'] }
">
	<template #input-prefix>@</template>
	<template #input-suffix>%</template>
</UsaTextInput>`}}}};var I,g,U;r.parameters={...r.parameters,docs:{...(I=r.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    label: 'Text input label'
  },
  name: 'Default',
  parameters: {
    docs: {
      source: {
        code: \`<UsaTextInput label="Text input label" />\`
      }
    }
  }
}`,...(U=(g=r.parameters)==null?void 0:g.docs)==null?void 0:U.source}}};var S,y,h;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    label: 'Text input label',
    modelValue: \`I am some default text\`
  },
  name: 'Default Text',
  parameters: {
    docs: {
      source: {
        code: \`<UsaTextInput label="Text input label" v-model="ref('I am some default text')" />\`
      }
    }
  }
}`,...(h=(y=s.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var P,C,q;n.parameters={...n.parameters,docs:{...(P=n.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    label: 'Text input label',
    type: 'number'
  },
  name: 'Input Type',
  parameters: {
    docs: {
      source: {
        code: \`<UsaTextInput label="Text input label" type="number" />\`
      }
    }
  }
}`,...(q=(C=n.parameters)==null?void 0:C.docs)==null?void 0:q.source}}};var w,E,V;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    label: 'Text input label',
    width: 'sm'
  },
  name: 'Width',
  parameters: {
    docs: {
      source: {
        code: \`<UsaTextInput label="Text input label" width="sm" />\`
      }
    }
  }
}`,...(V=(E=p.parameters)==null?void 0:E.docs)==null?void 0:V.source}}};var v,D,G;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    label: 'Text input label',
    hint: 'Choose wisely'
  },
  name: 'Hint',
  parameters: {
    docs: {
      source: {
        code: \`<UsaTextInput label="Text input label"><template #hint>Choose wisely</template></UsaTextInput>\`
      }
    }
  }
}`,...(G=(D=o.parameters)==null?void 0:D.docs)==null?void 0:G.source}}};var L,$,H;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    label: 'Text input label',
    error: true
  },
  name: 'Error',
  parameters: {
    docs: {
      source: {
        code: \`<UsaTextInput label="Text input label" :error="true" />\`
      }
    }
  }
}`,...(H=($=l.parameters)==null?void 0:$.docs)==null?void 0:H.source}}};var M,R,W;u.parameters={...u.parameters,docs:{...(M=u.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    label: 'Text input label',
    error: true,
    'error-message': 'Error message here'
  },
  name: 'Error Message',
  parameters: {
    docs: {
      source: {
        code: \`<UsaTextInput label="Text input label" :error="true"><template #error-message>Error message here</template></UsaTextInput>\`
      }
    }
  }
}`,...(W=(R=u.parameters)==null?void 0:R.docs)==null?void 0:W.source}}};var _,j,A;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    label: 'Text input label',
    required: true
  },
  name: 'Required',
  parameters: {
    docs: {
      source: {
        code: \`<UsaTextInput label="Text input label" :required="true" />\`
      }
    }
  }
}`,...(A=(j=i.parameters)==null?void 0:j.docs)==null?void 0:A.source}}};var O,k,z;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    label: 'Text input label',
    group: true
  },
  name: 'Group Input Elements',
  parameters: {
    docs: {
      source: {
        code: \`<UsaTextInput label="Text input label" :group="true" />\`
      }
    }
  }
}`,...(z=(k=m.parameters)==null?void 0:k.docs)==null?void 0:z.source}}};var B,F,J;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    'slot:label': \`<em>Label slot content</em>\`
  },
  name: 'Label Slot',
  parameters: {
    docs: {
      source: {
        code: \`<UsaTextInput><template #label><em>Label slot content</em></template></UsaTextInput>\`
      }
    }
  }
}`,...(J=(F=c.parameters)==null?void 0:F.docs)==null?void 0:J.source}}};var K,N,Q;x.parameters={...x.parameters,docs:{...(K=x.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    'input-prefix': '@'
  },
  name: 'Input Prefix',
  parameters: {
    docs: {
      source: {
        code: \`<UsaTextInput><template #input-prefix>@</template></UsaTextInput>\`
      }
    }
  }
}`,...(Q=(N=x.parameters)==null?void 0:N.docs)==null?void 0:Q.source}}};var X,Y,Z;d.parameters={...d.parameters,docs:{...(X=d.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    'input-suffix': '%'
  },
  name: 'Input Suffix',
  parameters: {
    docs: {
      source: {
        code: \`<UsaTextInput><template #input-suffix>%</template></UsaTextInput>\`
      }
    }
  }
}`,...(Z=(Y=d.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,te,ae;f.parameters={...f.parameters,docs:{...(ee=f.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    'input-prefix': '@',
    'input-suffix': '%'
  },
  name: 'Input Prefix & Suffix',
  parameters: {
    docs: {
      source: {
        code: \`<UsaTextInput><template #input-prefix>@</template><template #input-suffix>%</template></UsaTextInput>\`
      }
    }
  }
}`,...(ae=(te=f.parameters)==null?void 0:te.docs)==null?void 0:ae.source}}};var re,se,ne;b.parameters={...b.parameters,docs:{...(re=b.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    label: 'Text input label',
    id: 'custom-id'
  },
  name: 'Custom ID',
  parameters: {
    docs: {
      source: {
        code: \`<UsaTextInput label="Text input label" id="custom-id" />\`
      }
    }
  }
}`,...(ne=(se=b.parameters)==null?void 0:se.docs)==null?void 0:ne.source}}};var pe,oe,le;T.parameters={...T.parameters,docs:{...(pe=T.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    label: 'Text input label',
    customClasses: {
      component: ['test-component-class'],
      label: ['test-label-class'],
      inputGroup: ['test-input-group-class'],
      inputPrefix: ['test-input-prefix-class'],
      inputSuffix: ['test-input-suffix-class']
    },
    'input-prefix': '@',
    'input-suffix': '%'
  },
  name: 'Custom CSS Classes',
  parameters: {
    docs: {
      source: {
        code: \`<UsaTextInput label="Text input label" :custom-classes="{ \\n\\tcomponent: ['test-component-class'], \\n\\tlabel: ['test-label-class'], \\n\\tinputGroup: ['test-input-group-class'], \\n\\tinputPrefix: ['test-input-prefix-class'], \\n\\tinputSuffix: ['test-input-suffix-class'] }\\n">\\n\\t<template #input-prefix>@</template>\\n\\t<template #input-suffix>%</template>\\n</UsaTextInput>\`
      }
    }
  }
}`,...(le=(oe=T.parameters)==null?void 0:oe.docs)==null?void 0:le.source}}};const Se=["DefaultTextInput","DefaultValueTextInput","InputTypeTextInput","WidthTextInput","HintTextInput","ErrorTextInput","ErrorMessageTextInput","RequiredTextInput","GroupedTextInput","LabelSlotTextInput","PrefixSlotTextInput","SuffixSlotTextInput","PrefixAndSuffixSlotTextInput","CustomIdTextInput","CustomClassesTextInput"];export{T as CustomClassesTextInput,b as CustomIdTextInput,r as DefaultTextInput,s as DefaultValueTextInput,u as ErrorMessageTextInput,l as ErrorTextInput,m as GroupedTextInput,o as HintTextInput,n as InputTypeTextInput,c as LabelSlotTextInput,f as PrefixAndSuffixSlotTextInput,x as PrefixSlotTextInput,i as RequiredTextInput,d as SuffixSlotTextInput,p as WidthTextInput,Se as __namedExportsOrder,Ue as default};
