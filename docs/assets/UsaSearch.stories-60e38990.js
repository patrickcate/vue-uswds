import{s as f,c as A,I,m as de,b as y,g as pe,n as U,e as ge,o as P,v as he,t as be,r as Se,a as fe,l as ye}from"./vue.esm-bundler-d9807bdf.js";import{I as Ue}from"./constants-fce87d39.js";import{n as Ce}from"./unique-id-dcbd9804.js";import{U as ve}from"./UsaButton-62543873.js";import{U as Ve}from"./UsaTextInput-abcd84b3.js";import"./common-c0b90c12.js";import"./index-db724f69.js";import"./index-7991d288.js";import"./UsaFormGroup-c2b9f5da.js";import"./UsaLabel-60182b62.js";const Le={key:0,class:"usa-search__submit-text"},Ae=["src","alt"],ce={__name:"UsaSearch",props:{variant:{type:String,default:"medium",validator(e){const t=["small","medium","big"].includes(e);return t||console.warn(`'${e}' is not a valid search variant`),t}},modelValue:{type:String,default:""},modelModifiers:{type:Object,default:()=>{}},label:{type:String,default:"Search"},buttonLabel:{type:String,default:"Search"},inputAttrs:{type:Object,default:()=>{}},id:{type:String,default:""},name:{type:String,default:"search"},customClasses:{type:Object,default:()=>({label:["usa-sr-only"],input:[],button:[],icon:[]})}},emits:["update:modelValue"],setup(e,{emit:t}){const le=ge("vueUswds.imagePath",Ue),ie=t,r=e,me=f(()=>r.id||Ce("usa-search")),ue=f(()=>[{"usa-search--small":r.variant==="small","usa-search--medium":r.variant==="medium","usa-search--big":r.variant==="big"}]),C=f({get(){return r.modelValue},set(S){ie("update:modelValue",S)}});return(S,v)=>{var V,L;return P(),A("form",{class:U(["usa-search",ue.value]),role:"search"},[I(y(Ve),de(e.inputAttrs,{id:me.value,modelValue:C.value,"onUpdate:modelValue":v[0]||(v[0]=n=>C.value=n),"model-modifiers":e.modelModifiers,type:"search",name:e.name,label:e.label,class:(V=e.customClasses)==null?void 0:V.input,"custom-classes":e.customClasses}),null,16,["id","modelValue","model-modifiers","name","label","class","custom-classes"]),I(y(ve),{type:"submit",class:U((L=e.customClasses)==null?void 0:L.button)},{default:pe(()=>[e.variant==="medium"||e.variant==="big"?(P(),A("span",Le,he(e.buttonLabel),1)):be("",!0),Se(S.$slots,"icon",{},()=>{var n;return[fe("img",{src:`${y(le)}/usa-icons-bg/search--white.svg`,class:U(["usa-search__submit-icon",(n=e.customClasses)==null?void 0:n.icon]),alt:e.buttonLabel},null,10,Ae)]})]),_:3},8,["class"])],2)}}},s=ce;ce.__docgenInfo={exportName:"default",displayName:"UsaSearch",type:1,props:[{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"name",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'"search"'},{name:"id",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'""'},{name:"label",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'"Search"'},{name:"customClasses",global:!1,description:"",tags:[],required:!1,type:"Record<string, any>",declarations:[],schema:"Record<string, any>",default:`() => {
    return {
        label: ["usa-sr-only"],
        input: [],
        button: [],
        icon: [],
    };
}`},{name:"variant",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'"medium"'},{name:"modelValue",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'""'},{name:"modelModifiers",global:!1,description:"",tags:[],required:!1,type:"Record<string, any>",declarations:[],schema:"Record<string, any>",default:"() => { }"},{name:"buttonLabel",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'"Search"'},{name:"inputAttrs",global:!1,description:"",tags:[],required:!1,type:"Record<string, any>",declarations:[],schema:"Record<string, any>",default:"() => { }"}],events:[{name:"update:modelValue",description:"",tags:[],type:"any[]",signature:'(event: "update:modelValue", ...args: any[]): void',declarations:[],schema:["any"]}],slots:[{name:"icon",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}}],exposed:[{name:"name",type:"string",description:"",declarations:[],schema:"string"},{name:"id",type:"string",description:"",declarations:[],schema:"string"},{name:"label",type:"string",description:"",declarations:[],schema:"string"},{name:"customClasses",type:"Record<string, any>",description:"",declarations:[],schema:"Record<string, any>"},{name:"variant",type:"string",description:"",declarations:[],schema:"string"},{name:"modelValue",type:"string",description:"",declarations:[],schema:"string"},{name:"modelModifiers",type:"Record<string, any>",description:"",declarations:[],schema:"Record<string, any>"},{name:"buttonLabel",type:"string",description:"",declarations:[],schema:"string"},{name:"inputAttrs",type:"Record<string, any>",description:"",declarations:[],schema:"Record<string, any>"}],sourceFiles:"/home/runner/work/vue-uswds/vue-uswds/src/components/UsaSearch/UsaSearch.vue"};const a={variant:s.props.variant.default,modelValue:s.props.modelValue.default,label:s.props.label.default,buttonLabel:s.props.buttonLabel.default,inputAttrs:s.props.inputAttrs.default(),id:s.props.id.default,name:s.props.name.default,customClasses:s.props.customClasses.default()},je={component:s,title:"Components/UsaSearch",argTypes:{variant:{options:["small","medium","big"],control:{type:"select"}},modelValue:{control:{type:"text"}},label:{control:{type:"text"}},buttonLabel:{control:{type:"text"}},inputAttrs:{control:{type:"object"}},id:{control:{type:"text"}},name:{control:{type:"text"}},customClasses:{control:{type:"object"}},icon:{control:{type:"text"}}},args:{variant:a.variant,modelValue:a.modelValue,label:a.label,buttonLabel:a.buttonLabel,inputAttrs:a.inputAttrs,id:a.id,name:a.name,customClasses:a.customClasses,icon:""},render:e=>({components:{UsaSearch:s},props:Object.keys(s.props),setup(){const t=ye(e.modelValue);return{args:e,modelValue:t}},template:`<UsaSearch
    v-model="args.modelValue"
    :variant="args.variant"
    :label="args.label"
    :buttonLabel="args.buttonLabel"
    :inputAttrs="args.inputAttrs"
    :id="args.id"
    :name="args.name"
    :customClasses="args.customClasses"
  >
    <template v-if="!!args.icon" #icon>${e.icon}</template>
  </UsaSearch>`})},o={args:{...a},name:"Default",parameters:{docs:{source:{code:"<UsaSearch />"}}}},c={args:{...a,modelValue:"Test search term"},name:"Default Value",parameters:{docs:{source:{code:`<UsaSearch v-model="ref('Test search term')"></UsaSearch>`}}}},l={args:{...a,variant:"small"},name:"Small",parameters:{docs:{source:{code:'<UsaSearch :variant="small"></UsaSearch>'}}}},i={args:{...a,variant:"big"},name:"Big",parameters:{docs:{source:{code:'<UsaSearch :variant="big"></UsaSearch>'}}}},m={args:{...a,label:"Custom form label"},name:"Custom Form Label",parameters:{docs:{source:{code:'<UsaSearch label="Custom form label"></UsaSearch>'}}}},u={args:{...a,buttonLabel:"Submit"},name:"Custom Button Label",parameters:{docs:{source:{code:'<UsaSearch button-label="Submit"></UsaSearch>'}}}},d={args:{...a,name:"custom-name-attribute"},name:"Custom Name Attribute",parameters:{docs:{source:{code:'<UsaSearch name="custom-name-attribute"></UsaSearch>'}}}},p={args:{...a,inputAttrs:{placeholder:"Enter search terms"}},name:"Custom Input Attributes",parameters:{docs:{source:{code:`<UsaSearch :input-attrs="{ placeholder: 'Enter search terms'} "></UsaSearch>`}}}},g={args:{...a,variant:"small",icon:"<strong>-></strong>"},name:"Icon Slot",parameters:{docs:{source:{code:'<UsaSearch :variant="small"><template #icon><strong>-></strong></template></UsaSearch>'}}}},h={args:{...a,id:"custom-id"},name:"Custom ID",parameters:{docs:{source:{code:'<UsaSearch id="custom-id"></UsaSearch>'}}}},b={args:{...a,customClasses:{label:["test-label-class"],input:["test-input-class"],button:["test-button-class"],icon:["test-icon-class"]}},name:"Custom CSS Classes",parameters:{docs:{source:{code:`<UsaSearch :custom-classes="{ label: ['test-label-class'], input: ['test-input-class'], button: ['test-button-class'], icon: ['test-icon-class'] }"></UsaSearch>`}}}};var k,R,q;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    ...defaultProps
  },
  name: 'Default',
  parameters: {
    docs: {
      source: {
        code: \`<UsaSearch />\`
      }
    }
  }
}`,...(q=(R=o.parameters)==null?void 0:R.docs)==null?void 0:q.source}}};var x,B,w;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    modelValue: 'Test search term'
  },
  name: 'Default Value',
  parameters: {
    docs: {
      source: {
        code: \`<UsaSearch v-model="ref('Test search term')"></UsaSearch>\`
      }
    }
  }
}`,...(w=(B=c.parameters)==null?void 0:B.docs)==null?void 0:w.source}}};var D,N,j;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    variant: 'small'
  },
  name: 'Small',
  parameters: {
    docs: {
      source: {
        code: \`<UsaSearch :variant="small"></UsaSearch>\`
      }
    }
  }
}`,...(j=(N=l.parameters)==null?void 0:N.docs)==null?void 0:j.source}}};var E,O,T;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    variant: 'big'
  },
  name: 'Big',
  parameters: {
    docs: {
      source: {
        code: \`<UsaSearch :variant="big"></UsaSearch>\`
      }
    }
  }
}`,...(T=(O=i.parameters)==null?void 0:O.docs)==null?void 0:T.source}}};var M,$,F;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    label: 'Custom form label'
  },
  name: 'Custom Form Label',
  parameters: {
    docs: {
      source: {
        code: \`<UsaSearch label="Custom form label"></UsaSearch>\`
      }
    }
  }
}`,...(F=($=m.parameters)==null?void 0:$.docs)==null?void 0:F.source}}};var z,K,G;u.parameters={...u.parameters,docs:{...(z=u.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    buttonLabel: 'Submit'
  },
  name: 'Custom Button Label',
  parameters: {
    docs: {
      source: {
        code: \`<UsaSearch button-label="Submit"></UsaSearch>\`
      }
    }
  }
}`,...(G=(K=u.parameters)==null?void 0:K.docs)==null?void 0:G.source}}};var H,J,Q;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    name: 'custom-name-attribute'
  },
  name: 'Custom Name Attribute',
  parameters: {
    docs: {
      source: {
        code: \`<UsaSearch name="custom-name-attribute"></UsaSearch>\`
      }
    }
  }
}`,...(Q=(J=d.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var W,X,Y;p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    inputAttrs: {
      placeholder: 'Enter search terms'
    }
  },
  name: 'Custom Input Attributes',
  parameters: {
    docs: {
      source: {
        code: \`<UsaSearch :input-attrs="{ placeholder: 'Enter search terms'} "></UsaSearch>\`
      }
    }
  }
}`,...(Y=(X=p.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,_,ee;g.parameters={...g.parameters,docs:{...(Z=g.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    variant: 'small',
    icon: '<strong>-></strong>'
  },
  name: 'Icon Slot',
  parameters: {
    docs: {
      source: {
        code: \`<UsaSearch :variant="small"><template #icon><strong>-></strong></template></UsaSearch>\`
      }
    }
  }
}`,...(ee=(_=g.parameters)==null?void 0:_.docs)==null?void 0:ee.source}}};var ae,se,te;h.parameters={...h.parameters,docs:{...(ae=h.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    id: 'custom-id'
  },
  name: 'Custom ID',
  parameters: {
    docs: {
      source: {
        code: \`<UsaSearch id="custom-id"></UsaSearch>\`
      }
    }
  }
}`,...(te=(se=h.parameters)==null?void 0:se.docs)==null?void 0:te.source}}};var re,ne,oe;b.parameters={...b.parameters,docs:{...(re=b.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    customClasses: {
      label: ['test-label-class'],
      input: ['test-input-class'],
      button: ['test-button-class'],
      icon: ['test-icon-class']
    }
  },
  name: 'Custom CSS Classes',
  parameters: {
    docs: {
      source: {
        code: \`<UsaSearch :custom-classes="{ label: ['test-label-class'], input: ['test-input-class'], button: ['test-button-class'], icon: ['test-icon-class'] }"></UsaSearch>\`
      }
    }
  }
}`,...(oe=(ne=b.parameters)==null?void 0:ne.docs)==null?void 0:oe.source}}};const Ee=["DefaultSearch","DefaultValueSearch","SmallVariantSearch","BigVariantSearch","CustomLabelSearch","CustomButtonLabelSearch","CustomNameSearch","InputAttrsSearch","IconSlotSearch","CustomIdSearch","CustomClassesSearch"];export{i as BigVariantSearch,u as CustomButtonLabelSearch,b as CustomClassesSearch,h as CustomIdSearch,m as CustomLabelSearch,d as CustomNameSearch,o as DefaultSearch,c as DefaultValueSearch,g as IconSlotSearch,p as InputAttrsSearch,l as SmallVariantSearch,Ee as __namedExportsOrder,je as default};
