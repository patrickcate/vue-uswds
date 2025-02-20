import{s as f,c as j,A as de,a as D,$ as ce,m as ue,r as v,t as pe,n as g,o as k,d as V,v as x,l as me}from"./vue.esm-bundler-DlC1_45x.js";import{n as be}from"./unique-id-DrlS73OY.js";import"./common-cfad2wKl.js";import"./constants-BA52rpFi.js";const he=["id"],fe=["htmlFor"],ge={inheritAttrs:!1},t=Object.assign(ge,{__name:"UsaRadio",props:{tile:{type:Boolean,default:!1},modelValue:{type:void 0,default:""},label:{type:String,default:""},description:{type:String,default:""},id:{type:String,default:""},customClasses:{type:Object,default:()=>({component:[],label:[],description:[]})}},emits:["update:modelValue"],setup(a,{emit:b}){const ne=b,h=a,y=f(()=>h.id||be("usa-radio")),R=f({get(){return h.modelValue},set(s){ne("update:modelValue",s)}}),le=f(()=>[{"usa-radio__input--tile":h.tile}]);return(s,S)=>{var T,U,C;return k(),j("div",{class:g(["usa-radio",(T=a.customClasses)==null?void 0:T.component])},[de(D("input",ue(s.$attrs,{id:y.value,"onUpdate:modelValue":S[0]||(S[0]=ie=>R.value=ie),class:["usa-radio__input",le.value],type:"radio"}),null,16,he),[[ce,R.value]]),D("label",{htmlFor:y.value,class:g(["usa-radio__label",(U=a.customClasses)==null?void 0:U.label])},[v(s.$slots,"default",{},()=>[V(x(a.label),1)]),a.description||s.$slots.description?(k(),j("span",{key:0,class:g(["usa-radio__label-description",(C=a.customClasses)==null?void 0:C.description])},[v(s.$slots,"description",{},()=>[V(x(a.description),1)])],2)):pe("",!0)],10,fe)],2)}}});t.__docgenInfo={exportName:"default",displayName:"UsaRadio",type:1,props:[{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"description",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'""'},{name:"id",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'""'},{name:"label",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'""'},{name:"customClasses",global:!1,description:"",tags:[],required:!1,type:"Record<string, any>",declarations:[],schema:"Record<string, any>",default:`() => {
    return {
        component: [],
        label: [],
        description: [],
    };
}`},{name:"modelValue",global:!1,description:"",tags:[],required:!1,type:"any",declarations:[],schema:"any",default:'""'},{name:"tile",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]},default:"false"}],events:[{name:"update:modelValue",description:"",tags:[],type:"any[]",signature:'(event: "update:modelValue", ...args: any[]): void',declarations:[],schema:["any"]}],slots:[{name:"default",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}},{name:"description",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}}],exposed:[{name:"description",type:"string",description:"",declarations:[],schema:"string"},{name:"id",type:"string",description:"",declarations:[],schema:"string"},{name:"label",type:"string",description:"",declarations:[],schema:"string"},{name:"customClasses",type:"Record<string, any>",description:"",declarations:[],schema:"Record<string, any>"},{name:"modelValue",type:"any",description:"",declarations:[],schema:"any"},{name:"tile",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}}],sourceFiles:"/home/runner/work/vue-uswds/vue-uswds/src/components/UsaRadio/UsaRadio.vue"};const e={tile:t.props.tile.default,modelValue:t.props.modelValue.default,label:t.props.label.default,description:t.props.description.default,id:t.props.id.default,customClasses:t.props.customClasses.default()},Ue={component:t,title:"Components/UsaRadio",argTypes:{tile:{control:{type:"boolean"}},modelValue:{control:{type:"text"}},label:{control:{type:"text"}},description:{control:{type:"text"},table:{category:"props"}},id:{control:{type:"text"}},default:{control:{type:"text"}},"slot:description":{control:{type:"text"},name:"description",table:{category:"slots"}}},args:{tile:e.tile,modelValue:e.modelValue,label:e.label,description:e.description,id:e.id,customClasses:e.customClasses,default:"","slot:description":""},decorators:[()=>({template:'<div class="usa-form usa-form--large"><story /></div>'})],render:a=>({components:{UsaRadio:t},props:Object.keys(t.props),setup(){const b=me(a.modelValue);return{args:a,modelValue:b}},template:`<UsaRadio
    v-bind="args.$attrs"
    :tile="args.tile"
    :label="args.label"
    :description="args.description"
    :id="args.id"
    :custom-classes="args.customClasses"
    v-model="args.modelValue"
  >
    <template v-if="!!args.default" #default>${a.default}</template>
    <template v-if="!!args['slot:description']" #description>${a["slot:description"]}</template>
  </UsaRadio>`})},o={args:{...e,label:"Sojourner Truth"},name:"Default",parameters:{docs:{source:{code:'<UsaRadio label="Sojourner Truth"></UsaRadio>'}}}},r={args:{...e,label:"Sojourner Truth",description:"This is optional text that can be used to describe the label in more detail."},name:"Default w/ Description",parameters:{docs:{source:{code:'<UsaRadio label="Sojourner Truth" description="This is optional text that can be used to describe the label in more detail."></UsaRadio>'}}}},n={args:{...e,label:"Sojourner Truth",modelValue:!0},name:"Checked by Default",parameters:{docs:{source:{code:'<UsaRadio label="Sojourner Truth" v-model="ref(true)"></UsaRadio>'}}}},l={args:{...e,label:"Sojourner Truth",tile:!0},name:"Tile",parameters:{docs:{source:{code:'<UsaRadio label="Sojourner Truth" :tile="true"></UsaRadio>'}}}},i={args:{...e,label:"Sojourner Truth",tile:!0,description:"This is optional text that can be used to describe the label in more detail."},name:"Tile w/ Description",parameters:{docs:{source:{code:'<UsaRadio label="Sojourner Truth" :tile="true" description="This is optional text that can be used to describe the label in more detail."></UsaRadio>'}}}},d={args:{...e,label:"Sojourner Truth",tile:!0,modelValue:!0},name:"Tile Checked by Default",parameters:{docs:{source:{code:'<UsaRadio label="Sojourner Truth" :tile="true" v-model="ref(true)"></UsaRadio>'}}}},c={args:{...e,label:"Sojourner Truth",default:"Custom label slot content"},name:"Label Slot",parameters:{docs:{source:{code:"<UsaRadio><template #label>Custom label slot content</template></UsaRadio>"}}}},u={args:{...e,label:"Sojourner Truth","slot:description":"Custom description slot content"},name:"Description Slot",parameters:{docs:{source:{code:'<UsaRadio label="Sojourner Truth"><template #description>Custom description slot content</template></UsaRadio>'}}}},p={args:{...e,label:"Sojourner Truth",id:"custom-id"},name:"Custom ID",parameters:{docs:{source:{code:'<UsaRadio label="Sojourner Truth" id="custom-id"></UsaRadio>'}}}},m={args:{...e,label:"Sojourner Truth",customClasses:{component:["test-component-class"],label:["test-label-class"],description:["test-description-class"]}},name:"Custom CSS Classes",parameters:{docs:{source:{code:`<UsaRadio label="Sojourner Truth" :custom-classes="{'test-component-class': true, 'test-label-class': true, 'test-description-class': true}"></UsaRadio>`}}}};var P,q,w;o.parameters={...o.parameters,docs:{...(P=o.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    label: 'Sojourner Truth'
  },
  name: 'Default',
  parameters: {
    docs: {
      source: {
        code: \`<UsaRadio label="Sojourner Truth"></UsaRadio>\`
      }
    }
  }
}`,...(w=(q=o.parameters)==null?void 0:q.docs)==null?void 0:w.source}}};var _,B,I;r.parameters={...r.parameters,docs:{...(_=r.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    label: 'Sojourner Truth',
    description: 'This is optional text that can be used to describe the label in more detail.'
  },
  name: 'Default w/ Description',
  parameters: {
    docs: {
      source: {
        code: \`<UsaRadio label="Sojourner Truth" description="This is optional text that can be used to describe the label in more detail."></UsaRadio>\`
      }
    }
  }
}`,...(I=(B=r.parameters)==null?void 0:B.docs)==null?void 0:I.source}}};var $,N,O;n.parameters={...n.parameters,docs:{...($=n.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    label: 'Sojourner Truth',
    modelValue: true
  },
  name: 'Checked by Default',
  parameters: {
    docs: {
      source: {
        code: \`<UsaRadio label="Sojourner Truth" v-model="ref(true)"></UsaRadio>\`
      }
    }
  }
}`,...(O=(N=n.parameters)==null?void 0:N.docs)==null?void 0:O.source}}};var L,W,E;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    label: 'Sojourner Truth',
    tile: true
  },
  name: 'Tile',
  parameters: {
    docs: {
      source: {
        code: \`<UsaRadio label="Sojourner Truth" :tile="true"></UsaRadio>\`
      }
    }
  }
}`,...(E=(W=l.parameters)==null?void 0:W.docs)==null?void 0:E.source}}};var F,A,K;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
        code: \`<UsaRadio label="Sojourner Truth" :tile="true" description="This is optional text that can be used to describe the label in more detail."></UsaRadio>\`
      }
    }
  }
}`,...(K=(A=i.parameters)==null?void 0:A.docs)==null?void 0:K.source}}};var z,M,G;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
        code: \`<UsaRadio label="Sojourner Truth" :tile="true" v-model="ref(true)"></UsaRadio>\`
      }
    }
  }
}`,...(G=(M=d.parameters)==null?void 0:M.docs)==null?void 0:G.source}}};var H,J,Q;c.parameters={...c.parameters,docs:{...(H=c.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    label: 'Sojourner Truth',
    default: 'Custom label slot content'
  },
  name: 'Label Slot',
  parameters: {
    docs: {
      source: {
        code: \`<UsaRadio><template #label>Custom label slot content</template></UsaRadio>\`
      }
    }
  }
}`,...(Q=(J=c.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var X,Y,Z;u.parameters={...u.parameters,docs:{...(X=u.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    label: 'Sojourner Truth',
    'slot:description': 'Custom description slot content'
  },
  name: 'Description Slot',
  parameters: {
    docs: {
      source: {
        code: \`<UsaRadio label="Sojourner Truth"><template #description>Custom description slot content</template></UsaRadio>\`
      }
    }
  }
}`,...(Z=(Y=u.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,ae,te;p.parameters={...p.parameters,docs:{...(ee=p.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    label: 'Sojourner Truth',
    id: 'custom-id'
  },
  name: 'Custom ID',
  parameters: {
    docs: {
      source: {
        code: \`<UsaRadio label="Sojourner Truth" id="custom-id"></UsaRadio>\`
      }
    }
  }
}`,...(te=(ae=p.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};var se,oe,re;m.parameters={...m.parameters,docs:{...(se=m.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
        code: \`<UsaRadio label="Sojourner Truth" :custom-classes="{'test-component-class': true, 'test-label-class': true, 'test-description-class': true}"></UsaRadio>\`
      }
    }
  }
}`,...(re=(oe=m.parameters)==null?void 0:oe.docs)==null?void 0:re.source}}};const Ce=["DefaultRadio","WithDescriptionRadio","CheckedByDefaultRadio","TileRadio","TileWithDescriptionRadio","TileCheckedByDefaultRadio","LabelSlotRadio","DescriptionSlotRadio","CustomIdRadio","CustomClassesRadio"];export{n as CheckedByDefaultRadio,m as CustomClassesRadio,p as CustomIdRadio,o as DefaultRadio,u as DescriptionSlotRadio,c as LabelSlotRadio,d as TileCheckedByDefaultRadio,l as TileRadio,i as TileWithDescriptionRadio,r as WithDescriptionRadio,Ce as __namedExportsOrder,Ue as default};
