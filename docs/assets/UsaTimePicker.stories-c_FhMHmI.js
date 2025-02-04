import{s as d,f as Ke,_ as Fe,g as i,b as ze,o as Je,r as m,l as Qe}from"./vue.esm-bundler-DlC1_45x.js";import{n as We}from"./unique-id-C_cIYxKg.js";import{v as w}from"./dates-qO0ZlDc-.js";import{_ as Xe}from"./UsaComboBox-ISD0rhB-.js";import"./common-cfad2wKl.js";import"./constants-BA52rpFi.js";import"./index-DjGpgcRS.js";import"./index-BzV88aIg.js";import"./UsaFormGroup-COQiJYtU.js";import"./UsaLabel-DpLC57Qt.js";const s={__name:"UsaTimePicker",props:{minTime:{type:String,default:"00:00",validator(t){let r=w(t);return r||console.warn(`'${t}' is not a valid minimum time. It must be a string in the HH:MM 24 hour format.`),r}},maxTime:{type:String,default:"23:59",validator(t){let r=w(t);return r||console.warn(`'${t}' is not a valid maximum time. It must be a string in the HH:MM 24 hour format.`),r}},step:{type:[String,Number],default:30,validator(t){const r=parseInt(t,10)>0;return r||console.warn(`'${t}' is not a valid time step increment.`),r}},modelValue:{type:String,default:""},label:{type:String,default:""},required:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},error:{type:Boolean,default:!1},id:{type:String,default:""},clearButtonAriaLabel:{type:String,default:"Clear the select contents"},toggleButtonAriaLabel:{type:String,default:"Toggle the dropdown list"},customClasses:{type:Object,default:()=>({formGroup:[],component:[],label:[],input:[],list:[]})}},emits:["update:modelValue"],setup(t,{emit:r}){const Me=r,l=t,De=d(()=>l.id||We("usa-time-picker")),R=d({get(){return l.modelValue},set(a){Me("update:modelValue",a)}}),$=a=>{const[n,o]=a.split(":").map(V=>parseInt(V,10));return n*60+o},He=d(()=>{const a=[],n=$(l.minTime),o=$(l.maxTime),V=parseInt(l.step,10);if(n===o)return a;for(let c=n;c<=o;c+=V){const Ie=c%60,x=Math.floor(c/60),je=x%12||12,Ne=x<12?"am":"pm",E=`${Ie}`.padStart(2,"0"),Ge=`${x}`.padStart(2,"0");a.push({value:`${Ge}:${E}`,label:`${je}:${E}${Ne}`})}return a}),Oe=d(()=>{var n;const a=l.customClasses;return(n=a==null?void 0:a.component)!=null&&n.length?a.component.includes("usa-time-picker")||a.component.push("usa-time-picker"):a.component=["usa-time-picker"],a});return(a,n)=>(Je(),Ke(ze(Xe),{id:De.value,modelValue:R.value,"onUpdate:modelValue":n[0]||(n[0]=o=>R.value=o),options:He.value,label:t.label,required:t.required,disabled:t.disabled,readonly:t.readonly,error:t.error,"clear-button-aria-label":t.clearButtonAriaLabel,"toggle-button-aria-label":t.toggleButtonAriaLabel,"custom-classes":Oe.value},Fe({_:2},[a.$slots.label?{name:"label",fn:i(()=>[m(a.$slots,"label")]),key:"0"}:void 0,a.$slots.hint?{name:"hint",fn:i(()=>[m(a.$slots,"hint")]),key:"1"}:void 0,a.$slots["error-message"]?{name:"error-message",fn:i(()=>[m(a.$slots,"error-message")]),key:"2"}:void 0,a.$slots["no-results"]?{name:"no-results",fn:i(()=>[m(a.$slots,"no-results")]),key:"3"}:void 0,a.$slots.status?{name:"status",fn:i(({filteredOptions:o})=>[m(a.$slots,"status",{filteredOptions:o})]),key:"4"}:void 0,a.$slots["assistive-hint"]?{name:"assistive-hint",fn:i(()=>[m(a.$slots,"assistive-hint")]),key:"5"}:void 0]),1032,["id","modelValue","options","label","required","disabled","readonly","error","clear-button-aria-label","toggle-button-aria-label","custom-classes"]))}};s.__docgenInfo={exportName:"default",displayName:"UsaTimePicker",type:1,props:[{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"error",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]},default:"false"},{name:"required",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]},default:"false"},{name:"id",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'""'},{name:"label",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'""'},{name:"customClasses",global:!1,description:"",tags:[],required:!1,type:"Record<string, any>",declarations:[],schema:"Record<string, any>",default:`() => {
    return {
        formGroup: [],
        component: [],
        label: [],
        input: [],
        list: [],
    };
}`},{name:"disabled",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]},default:"false"},{name:"modelValue",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'""'},{name:"readonly",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]},default:"false"},{name:"clearButtonAriaLabel",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'"Clear the select contents"'},{name:"toggleButtonAriaLabel",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'"Toggle the dropdown list"'},{name:"minTime",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'"00:00"'},{name:"maxTime",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'"23:59"'},{name:"step",global:!1,description:"",tags:[],required:!1,type:"string | number",declarations:[],schema:{kind:"enum",type:"string | number",schema:["string","number"]},default:"30"}],events:[{name:"update:modelValue",description:"",tags:[],type:"any[]",signature:'(event: "update:modelValue", ...args: any[]): void',declarations:[],schema:["any"]}],slots:[{name:"label",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}},{name:"hint",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}},{name:"error-message",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}},{name:"no-results",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}},{name:"status",type:"{ filteredOptions: any; }",description:"",declarations:[],schema:{kind:"object",type:"{ filteredOptions: any; }"}},{name:"assistive-hint",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}}],exposed:[{name:"error",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"required",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"id",type:"string",description:"",declarations:[],schema:"string"},{name:"label",type:"string",description:"",declarations:[],schema:"string"},{name:"customClasses",type:"Record<string, any>",description:"",declarations:[],schema:"Record<string, any>"},{name:"disabled",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"modelValue",type:"string",description:"",declarations:[],schema:"string"},{name:"readonly",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"clearButtonAriaLabel",type:"string",description:"",declarations:[],schema:"string"},{name:"toggleButtonAriaLabel",type:"string",description:"",declarations:[],schema:"string"},{name:"minTime",type:"string",description:"",declarations:[],schema:"string"},{name:"maxTime",type:"string",description:"",declarations:[],schema:"string"},{name:"step",type:"string | number",description:"",declarations:[],schema:{kind:"enum",type:"string | number",schema:["string","number"]}}],sourceFiles:"/home/runner/work/vue-uswds/vue-uswds/src/components/UsaTimePicker/UsaTimePicker.vue"};const e={minTime:s.props.minTime.default,maxTime:s.props.maxTime.default,step:s.props.step.default,modelValue:s.props.modelValue.default,label:s.props.label.default,required:s.props.required.default,disabled:s.props.disabled.default,readonly:s.props.readonly.default,error:s.props.error.default,id:s.props.id.default,clearButtonAriaLabel:s.props.clearButtonAriaLabel.default,toggleButtonAriaLabel:s.props.toggleButtonAriaLabel.default,customClasses:s.props.customClasses.default()},la={component:s,title:"Components/UsaTimePicker",argTypes:{minTime:{control:{type:"text"}},maxTime:{control:{type:"text"}},step:{control:{type:"number"}},modelValue:{control:{type:"text"}},label:{control:{type:"text"},table:{category:"props"}},required:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}},readonly:{control:{type:"boolean"}},error:{control:{type:"boolean"}},id:{control:{type:"text"}},clearButtonAriaLabel:{control:{type:"text"}},toggleButtonAriaLabel:{control:{type:"text"}},customClasses:{control:{type:"object"}},"slot:label":{control:{type:"text"},name:"label",table:{category:"slots"}},hint:{control:{type:"text"}},"error-message":{control:{type:"text"}},"no-results":{control:{type:"text"}},status:{control:{type:"text"}},"assistive-hint":{control:{type:"text"}}},args:{minTime:e.minTime,maxTime:e.maxTime,step:e.step,modelValue:e.modelValue,label:e.label,required:e.required,disabled:e.disabled,readonly:e.readonly,error:e.error,id:e.id,clearButtonAriaLabel:e.clearButtonAriaLabel,toggleButtonAriaLabel:e.toggleButtonAriaLabel,customClasses:e.customClasses,"slot:label":"",hint:"","error-message":"","no-results":"",status:"","assistive-hint":""},render:t=>({components:{UsaTimePicker:s},props:Object.keys(s.props),setup(){const r=Qe(t.modelValue);return{args:t,modelValue:r}},template:`<UsaTimePicker
      :min-time="args.minTime"
      :max-time="args.maxTime"
      :step="args.step"
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
      <template v-if="!!args.status" #status>${t.status}</template>
      <template v-if="!!args['assistive-hint']" #assistive-hint>${t["assistive-hint"]}</template>
    </UsaTimePicker>`})},u={args:{...e,label:"Time"},name:"Default",parameters:{docs:{source:{code:'<UsaTimePicker label="Time" />'}}}},p={args:{...e,label:"Time",modelValue:"09:00"},name:"Default Value",parameters:{docs:{source:{code:`<UsaTimePicker label="Time" v-model="ref('09:00')" />`}}}},b={args:{...e,label:"Custom time range",minTime:"09:00",maxTime:"13:00"},name:"Min/Max Time",parameters:{docs:{source:{code:'<UsaTimePicker label="Custom time range" min-time="09:00" max-time="13:00" />'}}}},g={args:{...e,label:"Custom step",step:15},name:"Step",parameters:{docs:{source:{code:'<UsaTimePicker label="Custom step" step="15" />'}}}},f={args:{...e,label:"Hint",hint:"Choose wisely"},name:"Hint",parameters:{docs:{source:{code:'<UsaTimePicker label="Hint"><template #hint>Choose wisely</template></UsaTimePicker>'}}}},T={args:{...e,label:"Error",error:!0},name:"Error",parameters:{docs:{source:{code:'<UsaTimePicker label="Error" :error="true" />'}}}},y={args:{...e,label:"Error",error:!0,"error-message":"Error message here"},name:"Error Message",parameters:{docs:{source:{code:'<UsaTimePicker label="Error" :error="true"><template #error-message>Error message here</template></UsaTimePicker>'}}}},k={args:{...e,label:"Required",required:!0},name:"Required",parameters:{docs:{source:{code:'<UsaTimePicker label="Required" :required="true" />'}}}},h={args:{...e,label:"Disabled",disabled:!0,modelValue:"15:00"},name:"Disabled",parameters:{docs:{source:{code:`<UsaTimePicker label="Disabled" :disabled="true" v-model="ref('15:00')" />`}}}},P={args:{...e,label:"Readonly time",readonly:!0,modelValue:"15:00"},name:"Readonly",parameters:{docs:{source:{code:`<UsaTimePicker label="Readonly time" :readonly="true" v-model="ref('15:00')" />`}}}},S={args:{...e,label:"Time",id:"custom-id"},name:"Custom ID",parameters:{docs:{source:{code:'<UsaTimePicker label="Time" id="custom-id" />'}}}},C={args:{...e,label:"Time",modelValue:"15:00",clearButtonAriaLabel:"Custom clear aria label"},name:"Custom Clear Button Aria Label",parameters:{docs:{source:{code:`<UsaTimePicker label="Time" v-model="ref('15:00')" :clear-button-aria-label="Custom clear aria label" />`}}}},v={args:{...e,label:"Time",toggleButtonAriaLabel:"Custom toggle aria label"},name:"Custom Toggle Button Aria Label",parameters:{docs:{source:{code:'<UsaTimePicker label="Time" :toggle-button-aria-label="Custom toggle aria label" />'}}}},U={args:{...e,label:"Time","slot:label":"<em>Label slot content</em>"},name:"Label Slot",parameters:{docs:{source:{code:"<UsaTimePicker><template #label><em>Label slot content</em></template></UsaTimePicker>"}}}},q={args:{...e,label:"Time","no-results":"<em>Sorry, didn't find that.</em>"},name:"No Results Slot",parameters:{docs:{source:{code:`<UsaTimePicker label="Time"><template #no-results><em>Sorry, didn't find that.</em></template></UsaTimePicker>`}}}},L={args:{...e,label:"Time",status:"Total options available: {{ filteredOptions.length }}"},name:"Status Scoped Slot",parameters:{docs:{source:{code:'<UsaTimePicker label="Time"><template #status="{ filteredOptions }">Total options available: {{ filteredOptions.length }}</template></UsaTimePicker>'}}}},B={args:{...e,label:"Time","assistive-hint":"<em>Some custom hint text for screenreaders.</em>"},name:"Assistive Hint Slot",parameters:{docs:{source:{code:'<UsaTimePicker label="Time"><template #assistive-hint><em>Some custom hint text for screenreaders.</em></template></UsaTimePicker>'}}}},A={args:{...e,label:"Time",hint:"Choose wisely",customClasses:{formGroup:["test-form-group-class"],component:["test-component-class"],label:["test-label-class"],input:["test-input-class"],list:["test-list-class"]}},name:"Custom CSS Classes",parameters:{docs:{source:{code:`<UsaTimePicker label="Time" hint="Choose wisely" :custom-classes="{ 
	formGroup: ['test-form-group-class'], 
	component: ['test-component-class'], 
	label: ['test-label-class'], 
	input: ['test-input-class'], 
	list: ['test-list-class'],
      
}" />`}}}};var M,D,H;u.parameters={...u.parameters,docs:{...(M=u.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    label: 'Time'
  },
  name: 'Default',
  parameters: {
    docs: {
      source: {
        code: \`<UsaTimePicker label="Time" />\`
      }
    }
  }
}`,...(H=(D=u.parameters)==null?void 0:D.docs)==null?void 0:H.source}}};var O,I,j;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    label: 'Time',
    modelValue: '09:00'
  },
  name: 'Default Value',
  parameters: {
    docs: {
      source: {
        code: \`<UsaTimePicker label="Time" v-model="ref('09:00')" />\`
      }
    }
  }
}`,...(j=(I=p.parameters)==null?void 0:I.docs)==null?void 0:j.source}}};var N,G,K;b.parameters={...b.parameters,docs:{...(N=b.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    label: 'Custom time range',
    minTime: '09:00',
    maxTime: '13:00'
  },
  name: 'Min/Max Time',
  parameters: {
    docs: {
      source: {
        code: \`<UsaTimePicker label="Custom time range" min-time="09:00" max-time="13:00" />\`
      }
    }
  }
}`,...(K=(G=b.parameters)==null?void 0:G.docs)==null?void 0:K.source}}};var F,z,J;g.parameters={...g.parameters,docs:{...(F=g.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    label: 'Custom step',
    step: 15
  },
  name: 'Step',
  parameters: {
    docs: {
      source: {
        code: \`<UsaTimePicker label="Custom step" step="15" />\`
      }
    }
  }
}`,...(J=(z=g.parameters)==null?void 0:z.docs)==null?void 0:J.source}}};var Q,W,X;f.parameters={...f.parameters,docs:{...(Q=f.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    label: 'Hint',
    hint: 'Choose wisely'
  },
  name: 'Hint',
  parameters: {
    docs: {
      source: {
        code: \`<UsaTimePicker label="Hint"><template #hint>Choose wisely</template></UsaTimePicker>\`
      }
    }
  }
}`,...(X=(W=f.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};var Y,Z,_;T.parameters={...T.parameters,docs:{...(Y=T.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    label: 'Error',
    error: true
  },
  name: 'Error',
  parameters: {
    docs: {
      source: {
        code: \`<UsaTimePicker label="Error" :error="true" />\`
      }
    }
  }
}`,...(_=(Z=T.parameters)==null?void 0:Z.docs)==null?void 0:_.source}}};var ee,ae,te;y.parameters={...y.parameters,docs:{...(ee=y.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    label: 'Error',
    error: true,
    'error-message': 'Error message here'
  },
  name: 'Error Message',
  parameters: {
    docs: {
      source: {
        code: \`<UsaTimePicker label="Error" :error="true"><template #error-message>Error message here</template></UsaTimePicker>\`
      }
    }
  }
}`,...(te=(ae=y.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};var se,re,ne;k.parameters={...k.parameters,docs:{...(se=k.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    label: 'Required',
    required: true
  },
  name: 'Required',
  parameters: {
    docs: {
      source: {
        code: \`<UsaTimePicker label="Required" :required="true" />\`
      }
    }
  }
}`,...(ne=(re=k.parameters)==null?void 0:re.docs)==null?void 0:ne.source}}};var oe,le,ie;h.parameters={...h.parameters,docs:{...(oe=h.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    label: 'Disabled',
    disabled: true,
    modelValue: '15:00'
  },
  name: 'Disabled',
  parameters: {
    docs: {
      source: {
        code: \`<UsaTimePicker label="Disabled" :disabled="true" v-model="ref('15:00')" />\`
      }
    }
  }
}`,...(ie=(le=h.parameters)==null?void 0:le.docs)==null?void 0:ie.source}}};var me,ce,de;P.parameters={...P.parameters,docs:{...(me=P.parameters)==null?void 0:me.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    label: 'Readonly time',
    readonly: true,
    modelValue: '15:00'
  },
  name: 'Readonly',
  parameters: {
    docs: {
      source: {
        code: \`<UsaTimePicker label="Readonly time" :readonly="true" v-model="ref('15:00')" />\`
      }
    }
  }
}`,...(de=(ce=P.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};var ue,pe,be;S.parameters={...S.parameters,docs:{...(ue=S.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    label: 'Time',
    id: 'custom-id'
  },
  name: 'Custom ID',
  parameters: {
    docs: {
      source: {
        code: \`<UsaTimePicker label="Time" id="custom-id" />\`
      }
    }
  }
}`,...(be=(pe=S.parameters)==null?void 0:pe.docs)==null?void 0:be.source}}};var ge,fe,Te;C.parameters={...C.parameters,docs:{...(ge=C.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    label: 'Time',
    modelValue: '15:00',
    clearButtonAriaLabel: 'Custom clear aria label'
  },
  name: 'Custom Clear Button Aria Label',
  parameters: {
    docs: {
      source: {
        code: \`<UsaTimePicker label="Time" v-model="ref('15:00')" :clear-button-aria-label="Custom clear aria label" />\`
      }
    }
  }
}`,...(Te=(fe=C.parameters)==null?void 0:fe.docs)==null?void 0:Te.source}}};var ye,ke,he;v.parameters={...v.parameters,docs:{...(ye=v.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    label: 'Time',
    toggleButtonAriaLabel: 'Custom toggle aria label'
  },
  name: 'Custom Toggle Button Aria Label',
  parameters: {
    docs: {
      source: {
        code: \`<UsaTimePicker label="Time" :toggle-button-aria-label="Custom toggle aria label" />\`
      }
    }
  }
}`,...(he=(ke=v.parameters)==null?void 0:ke.docs)==null?void 0:he.source}}};var Pe,Se,Ce;U.parameters={...U.parameters,docs:{...(Pe=U.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    label: 'Time',
    'slot:label': \`<em>Label slot content</em>\`
  },
  name: 'Label Slot',
  parameters: {
    docs: {
      source: {
        code: \`<UsaTimePicker><template #label><em>Label slot content</em></template></UsaTimePicker>\`
      }
    }
  }
}`,...(Ce=(Se=U.parameters)==null?void 0:Se.docs)==null?void 0:Ce.source}}};var ve,Ue,qe;q.parameters={...q.parameters,docs:{...(ve=q.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    label: 'Time',
    'no-results': \`<em>Sorry, didn't find that.</em>\`
  },
  name: 'No Results Slot',
  parameters: {
    docs: {
      source: {
        code: \`<UsaTimePicker label="Time"><template #no-results><em>Sorry, didn't find that.</em></template></UsaTimePicker>\`
      }
    }
  }
}`,...(qe=(Ue=q.parameters)==null?void 0:Ue.docs)==null?void 0:qe.source}}};var Le,Be,Ae;L.parameters={...L.parameters,docs:{...(Le=L.parameters)==null?void 0:Le.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    label: 'Time',
    status: 'Total options available: {{ filteredOptions.length }}'
  },
  name: 'Status Scoped Slot',
  parameters: {
    docs: {
      source: {
        code: \`<UsaTimePicker label="Time"><template #status="{ filteredOptions }">Total options available: {{ filteredOptions.length }}</template></UsaTimePicker>\`
      }
    }
  }
}`,...(Ae=(Be=L.parameters)==null?void 0:Be.docs)==null?void 0:Ae.source}}};var Ve,xe,Re;B.parameters={...B.parameters,docs:{...(Ve=B.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    label: 'Time',
    'assistive-hint': \`<em>Some custom hint text for screenreaders.</em>\`
  },
  name: 'Assistive Hint Slot',
  parameters: {
    docs: {
      source: {
        code: \`<UsaTimePicker label="Time"><template #assistive-hint><em>Some custom hint text for screenreaders.</em></template></UsaTimePicker>\`
      }
    }
  }
}`,...(Re=(xe=B.parameters)==null?void 0:xe.docs)==null?void 0:Re.source}}};var $e,Ee,we;A.parameters={...A.parameters,docs:{...($e=A.parameters)==null?void 0:$e.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    label: 'Time',
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
        code: \`<UsaTimePicker label="Time" hint="Choose wisely" :custom-classes="{ \\n\\tformGroup: ['test-form-group-class'], \\n\\tcomponent: ['test-component-class'], \\n\\tlabel: ['test-label-class'], \\n\\tinput: ['test-input-class'], \\n\\tlist: ['test-list-class'],
      \\n}" />\`
      }
    }
  }
}`,...(we=(Ee=A.parameters)==null?void 0:Ee.docs)==null?void 0:we.source}}};const ia=["DefaultTimePicker","DefaultValueTimePicker","MinMaxTimePicker","StepTimePicker","HintTimePicker","ErrorTimePicker","ErrorMessageTimePicker","RequiredTimePicker","DisabledTimePicker","ReadonlyTimePicker","CustomIdTimePicker","ClearButtonAriaLabelTimePicker","ToggleButtonAriaLabelTimePicker","LabelSlotTimePicker","NoResultsSlotTimePicker","StatusScopedSlotTimePicker","AssistiveHintSlotTimePicker","CustomClassesTimePicker"];export{B as AssistiveHintSlotTimePicker,C as ClearButtonAriaLabelTimePicker,A as CustomClassesTimePicker,S as CustomIdTimePicker,u as DefaultTimePicker,p as DefaultValueTimePicker,h as DisabledTimePicker,y as ErrorMessageTimePicker,T as ErrorTimePicker,f as HintTimePicker,U as LabelSlotTimePicker,b as MinMaxTimePicker,q as NoResultsSlotTimePicker,P as ReadonlyTimePicker,k as RequiredTimePicker,L as StatusScopedSlotTimePicker,g as StepTimePicker,v as ToggleButtonAriaLabelTimePicker,ia as __namedExportsOrder,la as default};
