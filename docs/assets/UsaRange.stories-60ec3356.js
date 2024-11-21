import{u as be,s as t,f as $,g as P,n as E,b as w,o as i,r as C,d as fe,v as ye,t as v,c as D,A as Re,C as he,a as Ce,m as ve,l as Ue}from"./vue.esm-bundler-d9807bdf.js";import{n as qe}from"./unique-id-dcbd9804.js";import{U as Ve}from"./UsaFormGroup-c2b9f5da.js";import{U as ke}from"./UsaLabel-60182b62.js";import"./common-c0b90c12.js";import"./constants-fce87d39.js";const Se=["id"],xe=["id"],$e=["id","min","max","aria-valuetext","required","aria-describedby"],Pe={inheritAttrs:!1},me=Object.assign(Pe,{__name:"UsaRange",props:{min:{type:Number,default:0},max:{type:Number,default:100},unit:{type:String,default:""},preposition:{type:String,default:"of"},modelValue:{type:[String,Number],default:""},label:{type:String,default:""},required:{type:Boolean,default:!1},error:{type:Boolean,default:!1},id:{type:String,default:""},customClasses:{type:Object,default:()=>({component:[],label:[]})}},emits:["update:modelValue"],setup(a,{emit:h}){const U=be(),ce=h,n=a,l=t(()=>n.id||qe("usa-range")),q=t(()=>`${l.value}-error-message`),V=t(()=>`${l.value}-hint`),o=t({get(){return n.modelValue},set(s){ce("update:modelValue",s)}}),ue=t(()=>[{"usa-input--error":n.error}]),de=t(()=>{const s=[];return U.hint&&s.push(V.value),n.error&&U["error-message"]&&s.push(q.value),s.length?s.join(" "):null}),pe=t(()=>!o.value&&o.value!==0?null:n.unit?`${o.value} ${n.unit} ${n.preposition} ${n.max}`:`${o.value} ${n.preposition} ${n.max}`);return(s,k)=>{var S;return i(),$(w(Ve),{group:!!s.$slots.hint||a.error&&!!s.$slots["error-message"],error:a.error,class:E((S=n.customClasses)==null?void 0:S.component)},{default:P(()=>{var x;return[a.label||s.$slots.label?(i(),$(w(ke),{key:0,for:l.value,required:a.required,error:a.error,class:E((x=a.customClasses)==null?void 0:x.label)},{default:P(()=>[C(s.$slots,"label",{},()=>[fe(ye(a.label),1)])]),_:3},8,["for","required","error","class"])):v("",!0),s.$slots.hint?(i(),D("span",{key:1,id:V.value,class:"usa-hint"},[C(s.$slots,"hint")],8,Se)):v("",!0),a.error&&s.$slots["error-message"]?(i(),D("span",{key:2,id:q.value,class:"usa-error-message"},[C(s.$slots,"error-message")],8,xe)):v("",!0),Re(Ce("input",ve(s.$attrs,{id:l.value,"onUpdate:modelValue":k[0]||(k[0]=ge=>o.value=ge),class:["usa-range",ue.value],type:"range",min:a.min,max:a.max,"aria-valuetext":pe.value,required:a.required,"aria-describedby":de.value}),null,16,$e),[[he,o.value]])]}),_:3},8,["group","error","class"])}}}),r=me;me.__docgenInfo={exportName:"default",displayName:"UsaRange",type:1,props:[{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"error",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]},default:"false"},{name:"required",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]},default:"false"},{name:"id",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'""'},{name:"label",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'""'},{name:"customClasses",global:!1,description:"",tags:[],required:!1,type:"Record<string, any>",declarations:[],schema:"Record<string, any>",default:`() => {
    return {
        component: [],
        label: [],
    };
}`},{name:"modelValue",global:!1,description:"",tags:[],required:!1,type:"string | number",declarations:[],schema:{kind:"enum",type:"string | number",schema:["string","number"]},default:'""'},{name:"max",global:!1,description:"",tags:[],required:!1,type:"number",declarations:[],schema:"number",default:"100"},{name:"min",global:!1,description:"",tags:[],required:!1,type:"number",declarations:[],schema:"number",default:"0"},{name:"unit",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'""'},{name:"preposition",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'"of"'}],events:[{name:"update:modelValue",description:"",tags:[],type:"any[]",signature:'(event: "update:modelValue", ...args: any[]): void',declarations:[],schema:["any"]}],slots:[{name:"label",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}},{name:"hint",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}},{name:"error-message",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}}],exposed:[{name:"error",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"required",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"id",type:"string",description:"",declarations:[],schema:"string"},{name:"label",type:"string",description:"",declarations:[],schema:"string"},{name:"customClasses",type:"Record<string, any>",description:"",declarations:[],schema:"Record<string, any>"},{name:"modelValue",type:"string | number",description:"",declarations:[],schema:{kind:"enum",type:"string | number",schema:["string","number"]}},{name:"max",type:"number",description:"",declarations:[],schema:"number"},{name:"min",type:"number",description:"",declarations:[],schema:"number"},{name:"unit",type:"string",description:"",declarations:[],schema:"string"},{name:"preposition",type:"string",description:"",declarations:[],schema:"string"}],sourceFiles:"/home/runner/work/vue-uswds/vue-uswds/src/components/UsaRange/UsaRange.vue"};const e={min:r.props.min.default,max:r.props.max.default,unit:r.props.unit.default,preposition:r.props.preposition.default,modelValue:r.props.modelValue.default,label:r.props.label.default,required:r.props.required.default,error:r.props.error.default,id:r.props.id.default,customClasses:r.props.customClasses.default()},je={component:r,title:"Components/UsaRange",argTypes:{min:{control:{type:"number"}},max:{control:{type:"number"}},unit:{control:{type:"text"}},preposition:{control:{type:"text"}},modelValue:{control:{type:"text"}},label:{control:{type:"text"},table:{category:"props"}},required:{control:{type:"boolean"}},error:{control:{type:"boolean"}},id:{control:{type:"text"}},customClasses:{control:{type:"object"}},"slot:label":{control:{type:"text"},name:"label",table:{category:"slots"}},hint:{control:{type:"text"}},"error-message":{control:{type:"text"}}},args:{min:e.min,max:e.max,unit:e.unit,preposition:e.preposition,modelValue:e.modelValue,label:e.label,required:e.required,error:e.error,id:e.id,customClasses:e.customClasses,"slot:label":"",hint:"","error-message":""},decorators:[()=>({template:'<div class="usa-form usa-form--large"><story /></div>'})],render:a=>({components:{UsaRange:r},props:Object.keys(r.props),setup(){const h=Ue(a.modelValue);return{args:a,modelValue:h}},template:`<UsaRange
      v-bind="args.$attrs"
      :min="args.min"
      :max="args.max"
      :unit="args.unit"
      :preposition="args.preposition"
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
    </UsaRange>`})},m={args:{...e,label:"Range label"},name:"Default",parameters:{docs:{source:{code:'<UsaRange label="Range label" />'}}}},c={args:{...e,label:"Range label",modelValue:"75"},name:"Default Value",parameters:{docs:{source:{code:`<UsaRange label="Range label" v-model="ref('75')" />`}}}},u={args:{...e,label:"Range label",modelValue:"75",unit:"degrees",preposition:"out of a total"},name:"Custom Unit and Preposition",parameters:{docs:{source:{code:`<UsaRange label="Range label" v-model="ref('75')" unit="degrees" preposition="out of a total" />`}}}},d={args:{...e,label:"Range label",hint:"Choose wisely"},name:"Hint",parameters:{docs:{source:{code:'<UsaRange label="Range label" hint="Choose wisely" />'}}}},p={args:{...e,label:"Range label",error:!0},name:"Error",parameters:{docs:{source:{code:'<UsaRange label="Range label" :error="true" />'}}}},g={args:{...e,label:"Range label",error:!0,"error-message":"Error message here"},name:"Error Message",parameters:{docs:{source:{code:'<UsaRange label="Range label" :error="true"><template #error-message>Error message here</template></UsaRange>'}}}},b={args:{...e,label:"Range label",required:!0},name:"Required",parameters:{docs:{source:{code:'<UsaRange label="Range label" :required="true" />'}}}},f={args:{...e,"slot:label":"<em>Label slot content</em>"},name:"Label Slot",parameters:{docs:{source:{code:'<UsaRange label="Range label"><template #label><em>Label slot content</em></template></UsaRange>'}}}},y={args:{...e,label:"Range label",id:"custom-id"},name:"Custom ID",parameters:{docs:{source:{code:'<UsaRange label="Range label" id="custom-id" />'}}}},R={args:{...e,label:"Range label",customClasses:{component:["test-component-class"],label:["test-label-class"]}},name:"Custom CSS Classes",parameters:{docs:{source:{code:`<UsaRange label="Range label" :custom-classes="{'component': ['test-component-class'], 'label': ['test-label-class']}" />`}}}};var I,N,L;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    label: 'Range label'
  },
  name: 'Default',
  parameters: {
    docs: {
      source: {
        code: \`<UsaRange label="Range label" />\`
      }
    }
  }
}`,...(L=(N=m.parameters)==null?void 0:N.docs)==null?void 0:L.source}}};var j,B,M;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    label: 'Range label',
    modelValue: '75'
  },
  name: 'Default Value',
  parameters: {
    docs: {
      source: {
        code: \`<UsaRange label="Range label" v-model="ref('75')" />\`
      }
    }
  }
}`,...(M=(B=c.parameters)==null?void 0:B.docs)==null?void 0:M.source}}};var O,H,A;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    label: 'Range label',
    modelValue: '75',
    unit: 'degrees',
    preposition: 'out of a total'
  },
  name: 'Custom Unit and Preposition',
  parameters: {
    docs: {
      source: {
        code: \`<UsaRange label="Range label" v-model="ref('75')" unit="degrees" preposition="out of a total" />\`
      }
    }
  }
}`,...(A=(H=u.parameters)==null?void 0:H.docs)==null?void 0:A.source}}};var T,F,K;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    label: 'Range label',
    hint: 'Choose wisely'
  },
  name: 'Hint',
  parameters: {
    docs: {
      source: {
        code: \`<UsaRange label="Range label" hint="Choose wisely" />\`
      }
    }
  }
}`,...(K=(F=d.parameters)==null?void 0:F.docs)==null?void 0:K.source}}};var z,G,J;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    label: 'Range label',
    error: true
  },
  name: 'Error',
  parameters: {
    docs: {
      source: {
        code: \`<UsaRange label="Range label" :error="true" />\`
      }
    }
  }
}`,...(J=(G=p.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var Q,W,X;g.parameters={...g.parameters,docs:{...(Q=g.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    label: 'Range label',
    error: true,
    'error-message': 'Error message here'
  },
  name: 'Error Message',
  parameters: {
    docs: {
      source: {
        code: \`<UsaRange label="Range label" :error="true"><template #error-message>Error message here</template></UsaRange>\`
      }
    }
  }
}`,...(X=(W=g.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};var Y,Z,_;b.parameters={...b.parameters,docs:{...(Y=b.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    label: 'Range label',
    required: true
  },
  name: 'Required',
  parameters: {
    docs: {
      source: {
        code: \`<UsaRange label="Range label" :required="true" />\`
      }
    }
  }
}`,...(_=(Z=b.parameters)==null?void 0:Z.docs)==null?void 0:_.source}}};var ee,ae,se;f.parameters={...f.parameters,docs:{...(ee=f.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    'slot:label': \`<em>Label slot content</em>\`
  },
  name: 'Label Slot',
  parameters: {
    docs: {
      source: {
        code: \`<UsaRange label="Range label"><template #label><em>Label slot content</em></template></UsaRange>\`
      }
    }
  }
}`,...(se=(ae=f.parameters)==null?void 0:ae.docs)==null?void 0:se.source}}};var re,ne,te;y.parameters={...y.parameters,docs:{...(re=y.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    label: 'Range label',
    id: 'custom-id'
  },
  name: 'Custom ID',
  parameters: {
    docs: {
      source: {
        code: \`<UsaRange label="Range label" id="custom-id" />\`
      }
    }
  }
}`,...(te=(ne=y.parameters)==null?void 0:ne.docs)==null?void 0:te.source}}};var oe,le,ie;R.parameters={...R.parameters,docs:{...(oe=R.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    label: 'Range label',
    customClasses: {
      component: ['test-component-class'],
      label: ['test-label-class']
    }
  },
  name: 'Custom CSS Classes',
  parameters: {
    docs: {
      source: {
        code: \`<UsaRange label="Range label" :custom-classes="{'component': ['test-component-class'], 'label': ['test-label-class']}" />\`
      }
    }
  }
}`,...(ie=(le=R.parameters)==null?void 0:le.docs)==null?void 0:ie.source}}};const Be=["DefaultRange","DefaultValueRange","CustomUnitAndPrepositionRange","HintRange","ErrorRange","ErrorMessageRange","RequiredRange","LabelSlotRange","CustomIdRange","CustomClassesRange"];export{R as CustomClassesRange,y as CustomIdRange,u as CustomUnitAndPrepositionRange,m as DefaultRange,c as DefaultValueRange,g as ErrorMessageRange,p as ErrorRange,d as HintRange,f as LabelSlotRange,b as RequiredRange,Be as __namedExportsOrder,je as default};
