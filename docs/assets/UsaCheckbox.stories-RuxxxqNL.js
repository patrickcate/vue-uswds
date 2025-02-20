import{s as C,c as U,A as ie,a as j,V as de,m as ue,r as D,t as pe,n as k,o as v,d as V,v as P,l as me}from"./vue.esm-bundler-DlC1_45x.js";import{n as be}from"./unique-id-DrlS73OY.js";import"./common-cfad2wKl.js";import"./constants-BA52rpFi.js";const he=["id"],Ce=["htmlFor"],ke={inheritAttrs:!1},t=Object.assign(ke,{__name:"UsaCheckbox",props:{tile:{type:Boolean,default:!1},modelValue:{type:Boolean,default:!1},label:{type:String,default:""},description:{type:String,default:""},id:{type:String,default:""},customClasses:{type:Object,default:()=>({component:[],label:[],description:[]})}},emits:["update:modelValue"],setup(s,{emit:b}){const ne=b,h=s,f=C(()=>h.id||be("usa-checkbox")),g=C({get(){return h.modelValue},set(o){ne("update:modelValue",o)}}),le=C(()=>[{"usa-checkbox__input--tile":h.tile}]);return(o,x)=>{var y,S,T;return v(),U("div",{class:k(["usa-checkbox",(y=s.customClasses)==null?void 0:y.component])},[ie(j("input",ue(o.$attrs,{id:f.value,"onUpdate:modelValue":x[0]||(x[0]=ce=>g.value=ce),class:["usa-checkbox__input",le.value],type:"checkbox"}),null,16,he),[[de,g.value]]),j("label",{class:k(["usa-checkbox__label",(S=s.customClasses)==null?void 0:S.label]),htmlFor:f.value},[D(o.$slots,"default",{},()=>[V(P(s.label),1)]),s.description||o.$slots.description?(v(),U("span",{key:0,class:k(["usa-checkbox__label-description",(T=s.customClasses)==null?void 0:T.description])},[D(o.$slots,"description",{},()=>[V(P(s.description),1)])],2)):pe("",!0)],10,Ce)],2)}}});t.__docgenInfo={exportName:"default",displayName:"UsaCheckbox",type:1,props:[{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"description",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'""'},{name:"id",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'""'},{name:"label",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'""'},{name:"customClasses",global:!1,description:"",tags:[],required:!1,type:"Record<string, any>",declarations:[],schema:"Record<string, any>",default:`() => {
    return {
        component: [],
        label: [],
        description: [],
    };
}`},{name:"modelValue",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]},default:"false"},{name:"tile",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]},default:"false"}],events:[{name:"update:modelValue",description:"",tags:[],type:"any[]",signature:'(event: "update:modelValue", ...args: any[]): void',declarations:[],schema:["any"]}],slots:[{name:"default",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}},{name:"description",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}}],exposed:[{name:"description",type:"string",description:"",declarations:[],schema:"string"},{name:"id",type:"string",description:"",declarations:[],schema:"string"},{name:"label",type:"string",description:"",declarations:[],schema:"string"},{name:"customClasses",type:"Record<string, any>",description:"",declarations:[],schema:"Record<string, any>"},{name:"modelValue",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"tile",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}}],sourceFiles:"/home/runner/work/vue-uswds/vue-uswds/src/components/UsaCheckbox/UsaCheckbox.vue"};const e={tile:t.props.tile.default,modelValue:t.props.modelValue.default,label:t.props.label.default,description:t.props.description.default,id:t.props.id.default,customClasses:t.props.customClasses.default()},Se={component:t,title:"Components/UsaCheckbox",argTypes:{tile:{control:{type:"boolean"}},modelValue:{control:{type:"boolean"}},label:{control:{type:"text"}},description:{control:{type:"text"}},id:{control:{type:"text"}},default:{control:{type:"text"}},"slot:description":{control:{type:"text"}}},args:{tile:e.tile,modelValue:e.modelValue,label:e.label,description:e.description,id:e.id,customClasses:e.customClasses,default:"","slot:description":""},decorators:[()=>({template:'<div class="usa-form usa-form--large"><story /></div>'})],render:s=>({components:{UsaCheckbox:t},props:Object.keys(t.props),setup(){const b=me(s.modelValue);return{args:s,modelValue:b}},template:`<UsaCheckbox
    v-bind="args.$attrs"
    :tile="args.tile"
    :label="args.label"
    :description="args.description"
    :id="args.id"
    :custom-classes="args.customClasses"
    v-model="args.modelValue"
  >
    <template v-if="!!args.default" #default>${s.default}</template>
    <template v-if="!!args['slot:description']" #description>${s["slot:description"]}</template>
  </UsaCheckbox>`})},a={args:{...e,label:"Sojourner Truth"},name:"Default",parameters:{docs:{source:{code:'<UsaCheckbox label="Sojourner Truth"></UsaCheckbox>'}}}},r={args:{...e,label:"Sojourner Truth",description:"This is optional text that can be used to describe the label in more detail."},name:"Default w/ Description",parameters:{docs:{source:{code:'<UsaCheckbox label="Sojourner Truth" description="This is optional text that can be used to describe the label in more detail."></UsaCheckbox>'}}}},n={args:{...e,label:"Sojourner Truth",modelValue:!0},name:"Checked by Default",parameters:{docs:{source:{code:'<UsaCheckbox label="Sojourner Truth" v-model="ref(true)"></UsaCheckbox>'}}}},l={args:{...e,label:"Sojourner Truth",tile:!0},name:"Tile",parameters:{docs:{source:{code:'<UsaCheckbox label="Sojourner Truth" :tile="true"></UsaCheckbox>'}}}},c={args:{...e,label:"Sojourner Truth",tile:!0,description:"This is optional text that can be used to describe the label in more detail."},name:"Tile w/ Description",parameters:{docs:{source:{code:'<UsaCheckbox label="Sojourner Truth" :tile="true" description="This is optional text that can be used to describe the label in more detail."></UsaCheckbox>'}}}},i={args:{...e,label:"Sojourner Truth",tile:!0,modelValue:!0},name:"Tile Checked by Default",parameters:{docs:{source:{code:'<UsaCheckbox label="Sojourner Truth" :tile="true" v-model="ref(true)"></UsaCheckbox>'}}}},d={args:{...e,label:"Sojourner Truth",default:"Custom label slot content"},name:"Label Slot",parameters:{docs:{source:{code:"<UsaCheckbox>Custom label slot content</UsaCheckbox>"}}}},u={args:{...e,label:"Sojourner Truth","slot:description":"<em>Custom description slot content</em>"},name:"Description Slot",parameters:{docs:{source:{code:'<UsaCheckbox label="Sojourner Truth"><template #description><em>Custom description slot content</em></template></UsaCheckbox>'}}}},p={args:{...e,label:"Sojourner Truth",id:"custom-id"},name:"Custom ID",parameters:{docs:{source:{code:'<UsaCheckbox label="Sojourner Truth" id="custom-id"></UsaCheckbox>'}}}},m={args:{...e,label:"Sojourner Truth",customClasses:{component:["test-component-class"],label:["test-label-class"],description:["test-description-class"]}},name:"Custom CSS Classes",parameters:{docs:{source:{code:`<UsaCheckbox label="Sojourner Truth" :custom-classes="{ component: ['test-component-class'], label: ['test-label-class'], description:  ['test-description-class'] }"></UsaCheckbox>`}}}};var q,w,_;a.parameters={...a.parameters,docs:{...(q=a.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    label: 'Sojourner Truth'
  },
  name: 'Default',
  parameters: {
    docs: {
      source: {
        code: \`<UsaCheckbox label="Sojourner Truth"></UsaCheckbox>\`
      }
    }
  }
}`,...(_=(w=a.parameters)==null?void 0:w.docs)==null?void 0:_.source}}};var B,I,R;r.parameters={...r.parameters,docs:{...(B=r.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    label: 'Sojourner Truth',
    description: 'This is optional text that can be used to describe the label in more detail.'
  },
  name: 'Default w/ Description',
  parameters: {
    docs: {
      source: {
        code: \`<UsaCheckbox label="Sojourner Truth" description="This is optional text that can be used to describe the label in more detail."></UsaCheckbox>\`
      }
    }
  }
}`,...(R=(I=r.parameters)==null?void 0:I.docs)==null?void 0:R.source}}};var N,$,O;n.parameters={...n.parameters,docs:{...(N=n.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    label: 'Sojourner Truth',
    modelValue: true
  },
  name: 'Checked by Default',
  parameters: {
    docs: {
      source: {
        code: \`<UsaCheckbox label="Sojourner Truth" v-model="ref(true)"></UsaCheckbox>\`
      }
    }
  }
}`,...(O=($=n.parameters)==null?void 0:$.docs)==null?void 0:O.source}}};var L,W,E;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    label: 'Sojourner Truth',
    tile: true
  },
  name: 'Tile',
  parameters: {
    docs: {
      source: {
        code: \`<UsaCheckbox label="Sojourner Truth" :tile="true"></UsaCheckbox>\`
      }
    }
  }
}`,...(E=(W=l.parameters)==null?void 0:W.docs)==null?void 0:E.source}}};var F,A,K;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    label: 'Sojourner Truth',
    tile: true,
    description: 'This is optional text that can be used to describe the label in more detail.'
  },
  name: 'Tile w/ Description',
  parameters: {
    docs: {
      source: {
        code: \`<UsaCheckbox label="Sojourner Truth" :tile="true" description="This is optional text that can be used to describe the label in more detail."></UsaCheckbox>\`
      }
    }
  }
}`,...(K=(A=c.parameters)==null?void 0:A.docs)==null?void 0:K.source}}};var z,M,G;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    label: 'Sojourner Truth',
    tile: true,
    modelValue: true
  },
  name: 'Tile Checked by Default',
  parameters: {
    docs: {
      source: {
        code: \`<UsaCheckbox label="Sojourner Truth" :tile="true" v-model="ref(true)"></UsaCheckbox>\`
      }
    }
  }
}`,...(G=(M=i.parameters)==null?void 0:M.docs)==null?void 0:G.source}}};var H,J,Q;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    label: 'Sojourner Truth',
    default: 'Custom label slot content'
  },
  name: 'Label Slot',
  parameters: {
    docs: {
      source: {
        code: \`<UsaCheckbox>Custom label slot content</UsaCheckbox>\`
      }
    }
  }
}`,...(Q=(J=d.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var X,Y,Z;u.parameters={...u.parameters,docs:{...(X=u.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    label: 'Sojourner Truth',
    'slot:description': '<em>Custom description slot content</em>'
  },
  name: 'Description Slot',
  parameters: {
    docs: {
      source: {
        code: \`<UsaCheckbox label="Sojourner Truth"><template #description><em>Custom description slot content</em></template></UsaCheckbox>\`
      }
    }
  }
}`,...(Z=(Y=u.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,se,te;p.parameters={...p.parameters,docs:{...(ee=p.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    label: 'Sojourner Truth',
    id: 'custom-id'
  },
  name: 'Custom ID',
  parameters: {
    docs: {
      source: {
        code: \`<UsaCheckbox label="Sojourner Truth" id="custom-id"></UsaCheckbox>\`
      }
    }
  }
}`,...(te=(se=p.parameters)==null?void 0:se.docs)==null?void 0:te.source}}};var oe,ae,re;m.parameters={...m.parameters,docs:{...(oe=m.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    label: 'Sojourner Truth',
    customClasses: {
      component: ['test-component-class'],
      label: ['test-label-class'],
      description: ['test-description-class']
    }
  },
  name: 'Custom CSS Classes',
  parameters: {
    docs: {
      source: {
        code: \`<UsaCheckbox label="Sojourner Truth" :custom-classes="{ component: ['test-component-class'], label: ['test-label-class'], description:  ['test-description-class'] }"></UsaCheckbox>\`
      }
    }
  }
}`,...(re=(ae=m.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};const Te=["DefaultCheckbox","WithDescriptionCheckbox","CheckedByDefaultCheckbox","TileCheckbox","TileWithDescriptionCheckbox","TileCheckedByDefaultCheckbox","LabelSlotCheckbox","DescriptionSlotCheckbox","CustomIdCheckbox","CustomClassesCheckbox"];export{n as CheckedByDefaultCheckbox,m as CustomClassesCheckbox,p as CustomIdCheckbox,a as DefaultCheckbox,u as DescriptionSlotCheckbox,d as LabelSlotCheckbox,l as TileCheckbox,i as TileCheckedByDefaultCheckbox,c as TileWithDescriptionCheckbox,r as WithDescriptionCheckbox,Te as __namedExportsOrder,Se as default};
