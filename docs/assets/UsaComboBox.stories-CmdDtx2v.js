import{l as ge}from"./vue.esm-bundler-DlC1_45x.js";import{_ as o}from"./UsaComboBox-CjYTkgVa.js";import"./index-dBkZoKjW.js";import"./index-BzV88aIg.js";import"./unique-id-DrlS73OY.js";import"./common-cfad2wKl.js";import"./constants-BA52rpFi.js";import"./UsaFormGroup-COQiJYtU.js";import"./UsaLabel-DpLC57Qt.js";const e=[{value:"apple",label:"Apple"},{value:"apricot",label:"Apricot"},{value:"avocado",label:"Avocado"},{value:"banana",label:"Banana"},{value:"blackberry",label:"Blackberry"},{value:"blood orange",label:"Blood orange"},{value:"blueberry",label:"Blueberry"},{value:"boysenberry",label:"Boysenberry"},{value:"breadfruit",label:"Breadfruit"},{value:"buddhas hand citron",label:"Buddha's hand citron"},{value:"cantaloupe",label:"Cantaloupe"},{value:"clementine",label:"Clementine"},{value:"crab apple",label:"Crab apple"},{value:"currant",label:"Currant"},{value:"cherry",label:"Cherry"},{value:"custard apple",label:"Custard apple"},{value:"coconut",label:"Coconut"},{value:"cranberry",label:"Cranberry"},{value:"date",label:"Date"},{value:"dragonfruit",label:"Dragonfruit"},{value:"durian",label:"Durian"},{value:"elderberry",label:"Elderberry"},{value:"fig",label:"Fig"},{value:"gooseberry",label:"Gooseberry"},{value:"grape",label:"Grape"},{value:"grapefruit",label:"Grapefruit"},{value:"guava",label:"Guava"},{value:"honeydew melon",label:"Honeydew melon"},{value:"jackfruit",label:"Jackfruit"},{value:"kiwifruit",label:"Kiwifruit"},{value:"kumquat",label:"Kumquat"},{value:"lemon",label:"Lemon"},{value:"lime",label:"Lime"},{value:"lychee",label:"Lychee"},{value:"mandarine",label:"Mandarine"},{value:"mango",label:"Mango"},{value:"mangosteen",label:"Mangosteen"},{value:"marionberry",label:"Marionberry"},{value:"nectarine",label:"Nectarine"},{value:"orange",label:"Orange"},{value:"papaya",label:"Papaya"},{value:"passionfruit",label:"Passionfruit"},{value:"peach",label:"Peach"},{value:"pear",label:"Pear"},{value:"persimmon",label:"Persimmon"},{value:"plantain",label:"Plantain"},{value:"plum",label:"Plum"},{value:"pineapple",label:"Pineapple"},{value:"pluot",label:"Pluot"},{value:"pomegranate",label:"Pomegranate"},{value:"pomelo",label:"Pomelo"},{value:"quince",label:"Quince"},{value:"raspberry",label:"Raspberry"},{value:"rambutan",label:"Rambutan"},{value:"soursop",label:"Soursop"},{value:"starfruit",label:"Starfruit"},{value:"strawberry",label:"Strawberry"},{value:"tamarind",label:"Tamarind"},{value:"tangelo",label:"Tangelo"},{value:"tangerine",label:"Tangerine"},{value:"ugli fruit",label:"Ugli fruit"},{value:"watermelon",label:"Watermelon"},{value:"white currant",label:"White currant"},{value:"yuzu",label:"Yuzu"}],a={options:o.props.options.default(),modelValue:o.props.modelValue.default,label:o.props.label.default,required:o.props.required.default,disabled:o.props.disabled.default,readonly:o.props.readonly.default,error:o.props.error.default,id:o.props.id.default,clearButtonAriaLabel:o.props.clearButtonAriaLabel.default,toggleButtonAriaLabel:o.props.toggleButtonAriaLabel.default,customClasses:o.props.customClasses.default()},Ue={component:o,title:"Components/UsaComboBox",argTypes:{options:{control:{type:"object"}},modelValue:{control:{type:"text"}},label:{control:{type:"text"},table:{category:"props"}},required:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}},readonly:{control:{type:"boolean"}},error:{control:{type:"boolean"}},id:{control:{type:"text"}},clearButtonAriaLabel:{control:{type:"text"}},toggleButtonAriaLabel:{control:{type:"text"}},customClasses:{control:{type:"object"}},"slot:label":{control:{type:"text"},name:"label",table:{category:"slots"}},hint:{control:{type:"text"}},"error-message":{control:{type:"text"}},"no-results":{control:{type:"text"}},status:{control:{type:"text"}},"assistive-hint":{control:{type:"text"}}},args:{options:a.options,modelValue:a.modelValue,label:a.label,required:a.required,disabled:a.disabled,readonly:a.readonly,error:a.error,id:a.id,clearButtonAriaLabel:a.clearButtonAriaLabel,toggleButtonAriaLabel:a.toggleButtonAriaLabel,customClasses:a.customClasses,"slot:label":"",hint:"","error-message":"","no-results":"",status:"","assistive-hint":""},render:t=>({components:{UsaComboBox:o},props:Object.keys(o.props),setup(){const de=ge(t.modelValue);return{args:t,modelValue:de}},template:`<UsaComboBox
    :options="args.options"
    :label="args.label"
    :required="args.required"
    :disabled="args.disabled"
    :readonly="args.readonly"
    :error="args.error"
    :id="args.id"
    :clear-button-aria-label="args.clearButtonAriaLabel"
    :toggle-button-aria-label="args.toggleButtonAriaLabel"
    :custom-classes="args.customClasses"
    v-model="args.modelValue"
  >
    <template v-if="!!args['slot:label']" #label>${t["slot:label"]}</template>
    <template v-if="!!args.hint" #hint>${t.hint}</template>
    <template v-if="!!args['error-message']" #error-message>${t["error-message"]}</template>
    <template v-if="!!args['no-results']" #no-results>${t["no-results"]}</template>
    <template v-if="!!args.status" #status="{ filteredOptions }">${t.status}</template>
    <template v-if="!!args['assistive-hint']" #assistive-hint>${t["assistive-hint"]}</template>
  </UsaComboBox>`})},r={args:{...a,label:"Fruit",options:e},name:"Default",parameters:{docs:{source:{code:`<UsaComboBox label="Fruit" :options="${JSON.stringify(e)}" />`}}}},s={args:{...a,label:"Fruit",options:e,modelValue:"raspberry"},name:"Default Value",parameters:{docs:{source:{code:`<UsaComboBox label="Fruit" :options="${JSON.stringify(e)}" v-model="ref('raspberry')" />`}}}},l={args:{...a,label:"Fruit",options:e,hint:"Choose wisely"},name:"Hint",parameters:{docs:{source:{code:`<UsaComboBox label="Fruit" :options="${JSON.stringify(e)}"><template #hint>Choose wisely</template></UsaComboBox>`}}}},n={args:{...a,label:"Fruit",options:e,error:!0},name:"Error",parameters:{docs:{source:{code:`<UsaComboBox label="Fruit" :options="${JSON.stringify(e)}" :error="true" />`}}}},i={args:{...a,label:"Fruit",options:e,error:!0,"error-message":"Error message here"},name:"Error Message",parameters:{docs:{source:{code:`<UsaComboBox label="Fruit" :options="${JSON.stringify(e)}" :error="true"><template #error-message>Error message here</template></UsaComboBox>`}}}},u={args:{...a,label:"Fruit",options:e,required:!0},name:"Required",parameters:{docs:{source:{code:`<UsaComboBox label="Fruit" :options="${JSON.stringify(e)}" :required="true" />`}}}},m={args:{...a,label:"Fruit",options:e,disabled:!0,modelValue:"raspberry"},name:"Disabled",parameters:{docs:{source:{code:`<UsaComboBox label="Fruit" :options="${JSON.stringify(e)}" :disabled="true" v-model="ref('raspberry')" />`}}}},p={args:{...a,label:"Fruit",options:e,readonly:!0,modelValue:"raspberry"},name:"Readonly",parameters:{docs:{source:{code:`<UsaComboBox label="Fruit" :options="${JSON.stringify(e)}" :readonly="true" v-model="ref('raspberry')" />`}}}},b={args:{...a,label:"Fruit",options:e,id:"custom-id"},name:"Custom ID",parameters:{docs:{source:{code:`<UsaComboBox label="Fruit" :options="${JSON.stringify(e)}" id="custom-id" />`}}}},c={args:{...a,label:"Fruit",options:e,modelValue:"pomegranate",clearButtonAriaLabel:"Custom clear aria label"},name:"Custom Clear Button Aria Label",parameters:{docs:{source:{code:`<UsaComboBox label="Fruit" :options="${JSON.stringify(e)}" clear-button-aria-label="Custom clear aria label" v-model="ref('pomegranate')" />`}}}},d={args:{...a,label:"Fruit",options:e,toggleButtonAriaLabel:"Custom toggle aria label"},name:"Custom Toggle Button Aria Label",parameters:{docs:{source:{code:`<UsaComboBox label="Fruit" :options="${JSON.stringify(e)}" toggle-button-aria-label="Custom toggle aria label" />`}}}},g={args:{...a,label:"Fruit",options:e,"slot:label":"<em>Label slot content</em>"},name:"Label Slot",parameters:{docs:{source:{code:`<UsaComboBox label="Fruit" :options="${JSON.stringify(e)}"><template #label><em>Label slot content</em></template></UsaComboBox>`}}}},C={args:{...a,label:"Fruit",options:e,"no-results":"<em>Sorry, didn't find that.</em>"},name:"No Results Slot",parameters:{docs:{source:{code:`<UsaComboBox label="Fruit" :options="${JSON.stringify(e)}"><template #no-results><em>Sorry, didn't find that.</em></template></UsaComboBox>`}}}},f={args:{...a,label:"Fruit",options:e,status:"Total options available: {{ filteredOptions.length }}"},name:"Status Scoped Slot",parameters:{docs:{source:{code:`<UsaComboBox label="Fruit" :options="${JSON.stringify(e)}"><template #status="{ filteredOptions }">Total options available: {{ filteredOptions.length }}</template></UsaComboBox>`}}}},y={args:{...a,label:"Fruit",options:e,"assistive-hint":"<em>Some custom hint text for screenreaders.</em>"},name:"Assistive Hint Slot",parameters:{docs:{source:{code:`<UsaComboBox label="Fruit" :options="${JSON.stringify(e)}"><template #assistive-hint><em>Some custom hint text for screenreaders.</em></template></UsaComboBox>`}}}},B={args:{...a,label:"Fruit",options:e,hint:"Choose wisely",customClasses:{formGroup:["test-form-group-class"],component:["test-component-class"],label:["test-label-class"],input:["test-input-class"],list:["test-list-class"]}},name:"Custom CSS Classes",parameters:{docs:{source:{code:`<UsaComboBox label="Fruit" :options="${JSON.stringify(e)}" :custom-classes="{ 
	formGroup: ['test-form-group-class'], 
	component: ['test-component-class'], 
	label: ['test-label-class'], 
	input: ['test-input-class'], 
	list: ['test-list-class'] }"
><template #hint>Choose wisely</template></UsaComboBox>`}}}};var v,x,S;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    label: 'Fruit',
    options: testData
  },
  name: 'Default',
  parameters: {
    docs: {
      source: {
        code: \`<UsaComboBox label="Fruit" :options="\${JSON.stringify(testData)}" />\`
      }
    }
  }
}`,...(S=(x=r.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};var F,h,U;s.parameters={...s.parameters,docs:{...(F=s.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    label: 'Fruit',
    options: testData,
    modelValue: 'raspberry'
  },
  name: 'Default Value',
  parameters: {
    docs: {
      source: {
        code: \`<UsaComboBox label="Fruit" :options="\${JSON.stringify(testData)}" v-model="ref('raspberry')" />\`
      }
    }
  }
}`,...(U=(h=s.parameters)==null?void 0:h.docs)==null?void 0:U.source}}};var D,O,$;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    label: 'Fruit',
    options: testData,
    hint: 'Choose wisely'
  },
  name: 'Hint',
  parameters: {
    docs: {
      source: {
        code: \`<UsaComboBox label="Fruit" :options="\${JSON.stringify(testData)}"><template #hint>Choose wisely</template></UsaComboBox>\`
      }
    }
  }
}`,...($=(O=l.parameters)==null?void 0:O.docs)==null?void 0:$.source}}};var N,L,J;n.parameters={...n.parameters,docs:{...(N=n.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    label: 'Fruit',
    options: testData,
    error: true
  },
  name: 'Error',
  parameters: {
    docs: {
      source: {
        code: \`<UsaComboBox label="Fruit" :options="\${JSON.stringify(testData)}" :error="true" />\`
      }
    }
  }
}`,...(J=(L=n.parameters)==null?void 0:L.docs)==null?void 0:J.source}}};var A,P,V;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    label: 'Fruit',
    options: testData,
    error: true,
    'error-message': 'Error message here'
  },
  name: 'Error Message',
  parameters: {
    docs: {
      source: {
        code: \`<UsaComboBox label="Fruit" :options="\${JSON.stringify(testData)}" :error="true"><template #error-message>Error message here</template></UsaComboBox>\`
      }
    }
  }
}`,...(V=(P=i.parameters)==null?void 0:P.docs)==null?void 0:V.source}}};var q,w,E;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    label: 'Fruit',
    options: testData,
    required: true
  },
  name: 'Required',
  parameters: {
    docs: {
      source: {
        code: \`<UsaComboBox label="Fruit" :options="\${JSON.stringify(testData)}" :required="true" />\`
      }
    }
  }
}`,...(E=(w=u.parameters)==null?void 0:w.docs)==null?void 0:E.source}}};var R,T,H;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    label: 'Fruit',
    options: testData,
    disabled: true,
    modelValue: 'raspberry'
  },
  name: 'Disabled',
  parameters: {
    docs: {
      source: {
        code: \`<UsaComboBox label="Fruit" :options="\${JSON.stringify(testData)}" :disabled="true" v-model="ref('raspberry')" />\`
      }
    }
  }
}`,...(H=(T=m.parameters)==null?void 0:T.docs)==null?void 0:H.source}}};var G,M,k;p.parameters={...p.parameters,docs:{...(G=p.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    label: 'Fruit',
    options: testData,
    readonly: true,
    modelValue: 'raspberry'
  },
  name: 'Readonly',
  parameters: {
    docs: {
      source: {
        code: \`<UsaComboBox label="Fruit" :options="\${JSON.stringify(testData)}" :readonly="true" v-model="ref('raspberry')" />\`
      }
    }
  }
}`,...(k=(M=p.parameters)==null?void 0:M.docs)==null?void 0:k.source}}};var _,j,I;b.parameters={...b.parameters,docs:{...(_=b.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    label: 'Fruit',
    options: testData,
    id: 'custom-id'
  },
  name: 'Custom ID',
  parameters: {
    docs: {
      source: {
        code: \`<UsaComboBox label="Fruit" :options="\${JSON.stringify(testData)}" id="custom-id" />\`
      }
    }
  }
}`,...(I=(j=b.parameters)==null?void 0:j.docs)==null?void 0:I.source}}};var z,K,W;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    label: 'Fruit',
    options: testData,
    modelValue: 'pomegranate',
    clearButtonAriaLabel: 'Custom clear aria label'
  },
  name: 'Custom Clear Button Aria Label',
  parameters: {
    docs: {
      source: {
        code: \`<UsaComboBox label="Fruit" :options="\${JSON.stringify(testData)}" clear-button-aria-label="Custom clear aria label" v-model="ref('pomegranate')" />\`
      }
    }
  }
}`,...(W=(K=c.parameters)==null?void 0:K.docs)==null?void 0:W.source}}};var Q,Y,X;d.parameters={...d.parameters,docs:{...(Q=d.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    label: 'Fruit',
    options: testData,
    toggleButtonAriaLabel: 'Custom toggle aria label'
  },
  name: 'Custom Toggle Button Aria Label',
  parameters: {
    docs: {
      source: {
        code: \`<UsaComboBox label="Fruit" :options="\${JSON.stringify(testData)}" toggle-button-aria-label="Custom toggle aria label" />\`
      }
    }
  }
}`,...(X=(Y=d.parameters)==null?void 0:Y.docs)==null?void 0:X.source}}};var Z,ee,ae;g.parameters={...g.parameters,docs:{...(Z=g.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    label: 'Fruit',
    options: testData,
    'slot:label': \`<em>Label slot content</em>\`
  },
  name: 'Label Slot',
  parameters: {
    docs: {
      source: {
        code: \`<UsaComboBox label="Fruit" :options="\${JSON.stringify(testData)}"><template #label><em>Label slot content</em></template></UsaComboBox>\`
      }
    }
  }
}`,...(ae=(ee=g.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var oe,te,re;C.parameters={...C.parameters,docs:{...(oe=C.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    label: 'Fruit',
    options: testData,
    'no-results': \`<em>Sorry, didn't find that.</em>\`
  },
  name: 'No Results Slot',
  parameters: {
    docs: {
      source: {
        code: \`<UsaComboBox label="Fruit" :options="\${JSON.stringify(testData)}"><template #no-results><em>Sorry, didn't find that.</em></template></UsaComboBox>\`
      }
    }
  }
}`,...(re=(te=C.parameters)==null?void 0:te.docs)==null?void 0:re.source}}};var se,le,ne;f.parameters={...f.parameters,docs:{...(se=f.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    label: 'Fruit',
    options: testData,
    status: 'Total options available: {{ filteredOptions.length }}'
  },
  name: 'Status Scoped Slot',
  parameters: {
    docs: {
      source: {
        code: \`<UsaComboBox label="Fruit" :options="\${JSON.stringify(testData)}"><template #status="{ filteredOptions }">Total options available: {{ filteredOptions.length }}</template></UsaComboBox>\`
      }
    }
  }
}`,...(ne=(le=f.parameters)==null?void 0:le.docs)==null?void 0:ne.source}}};var ie,ue,me;y.parameters={...y.parameters,docs:{...(ie=y.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    label: 'Fruit',
    options: testData,
    'assistive-hint': \`<em>Some custom hint text for screenreaders.</em>\`
  },
  name: 'Assistive Hint Slot',
  parameters: {
    docs: {
      source: {
        code: \`<UsaComboBox label="Fruit" :options="\${JSON.stringify(testData)}"><template #assistive-hint><em>Some custom hint text for screenreaders.</em></template></UsaComboBox>\`
      }
    }
  }
}`,...(me=(ue=y.parameters)==null?void 0:ue.docs)==null?void 0:me.source}}};var pe,be,ce;B.parameters={...B.parameters,docs:{...(pe=B.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    label: 'Fruit',
    options: testData,
    hint: 'Choose wisely',
    customClasses: {
      formGroup: ['test-form-group-class'],
      component: ['test-component-class'],
      label: ['test-label-class'],
      input: ['test-input-class'],
      list: ['test-list-class']
    }
  },
  name: 'Custom CSS Classes',
  parameters: {
    docs: {
      source: {
        code: \`<UsaComboBox label="Fruit" :options="\${JSON.stringify(testData)}" :custom-classes="{ \\n\\tformGroup: ['test-form-group-class'], \\n\\tcomponent: ['test-component-class'], \\n\\tlabel: ['test-label-class'], \\n\\tinput: ['test-input-class'], \\n\\tlist: ['test-list-class'] }"\\n><template #hint>Choose wisely</template></UsaComboBox>\`
      }
    }
  }
}`,...(ce=(be=B.parameters)==null?void 0:be.docs)==null?void 0:ce.source}}};const De=["DefaultComboBox","DefaultValueComboBox","HintComboBox","ErrorComboBox","ErrorMessageComboBox","RequiredComboBox","DisabledComboBox","ReadonlyComboBox","CustomIdComboBox","ClearButtonAriaLabelComboBox","ToggleButtonAriaLabelComboBox","LabelSlotComboBox","NoResultsSlotComboBox","StatusScopedSlotComboBox","AssistiveHintSlotComboBox","CustomClassesComboBox"];export{y as AssistiveHintSlotComboBox,c as ClearButtonAriaLabelComboBox,B as CustomClassesComboBox,b as CustomIdComboBox,r as DefaultComboBox,s as DefaultValueComboBox,m as DisabledComboBox,n as ErrorComboBox,i as ErrorMessageComboBox,l as HintComboBox,g as LabelSlotComboBox,C as NoResultsSlotComboBox,p as ReadonlyComboBox,u as RequiredComboBox,f as StatusScopedSlotComboBox,d as ToggleButtonAriaLabelComboBox,De as __namedExportsOrder,Ue as default};
