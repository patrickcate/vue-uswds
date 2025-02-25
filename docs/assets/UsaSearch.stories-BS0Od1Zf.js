import{s as f,c as A,J as P,m as ue,b as y,g as de,n as C,e as pe,o as I,t as ge,r as he,v as be,a as Se,l as fe}from"./vue.esm-bundler-DsKf3Hbt.js";import{I as ye}from"./constants-BA52rpFi.js";import{n as Ce}from"./unique-id-ZGF68Crf.js";import{_ as Ue}from"./UsaButton-D8hRGpbR.js";import{_ as ve}from"./UsaTextInput-DK2OUgGI.js";import"./common-cfad2wKl.js";import"./index-BIJogqLd.js";import"./index-CipSGTa_.js";import"./UsaFormGroup-Byzm6HH0.js";import"./UsaLabel-qQK9qPDl.js";const Ve={key:0,class:"usa-search__submit-text"},Le=["src","alt"],s={__name:"UsaSearch",props:{variant:{type:String,default:"medium",validator(e){const t=["small","medium","big"].includes(e);return t||console.warn(`'${e}' is not a valid search variant`),t}},modelValue:{type:String,default:""},modelModifiers:{type:Object,default:()=>{}},label:{type:String,default:"Search"},buttonLabel:{type:String,default:"Search"},inputAttrs:{type:Object,default:()=>{}},id:{type:String,default:""},name:{type:String,default:"search"},customClasses:{type:Object,default:()=>({label:["usa-sr-only"],input:[],button:[],icon:[]})}},emits:["update:modelValue"],setup(e,{emit:t}){const ce=pe("vueUswds.imagePath",ye),le=t,r=e,ie=f(()=>r.id||Ce("usa-search")),me=f(()=>[{"usa-search--small":r.variant==="small","usa-search--medium":r.variant==="medium","usa-search--big":r.variant==="big"}]),U=f({get(){return r.modelValue},set(S){le("update:modelValue",S)}});return(S,v)=>{var V,L;return I(),A("form",{class:C(["usa-search",me.value]),role:"search"},[P(y(ve),ue(e.inputAttrs,{id:ie.value,modelValue:U.value,"onUpdate:modelValue":v[0]||(v[0]=n=>U.value=n),"model-modifiers":e.modelModifiers,type:"search",name:e.name,label:e.label,class:(V=e.customClasses)==null?void 0:V.input,"custom-classes":e.customClasses}),null,16,["id","modelValue","model-modifiers","name","label","class","custom-classes"]),P(y(Ue),{type:"submit",class:C((L=e.customClasses)==null?void 0:L.button)},{default:de(()=>[e.variant==="medium"||e.variant==="big"?(I(),A("span",Ve,be(e.buttonLabel),1)):ge("",!0),he(S.$slots,"icon",{},()=>{var n;return[Se("img",{src:`${y(ce)}/usa-icons-bg/search--white.svg`,class:C(["usa-search__submit-icon",(n=e.customClasses)==null?void 0:n.icon]),alt:e.buttonLabel},null,10,Le)]})]),_:3},8,["class"])],2)}}};s.__docgenInfo={exportName:"default",displayName:"UsaSearch",type:1,props:[{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"name",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'"search"'},{name:"id",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'""'},{name:"label",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'"Search"'},{name:"customClasses",global:!1,description:"",tags:[],required:!1,type:"Record<string, any>",declarations:[],schema:"Record<string, any>",default:`() => {
    return {
        label: ["usa-sr-only"],
        input: [],
        button: [],
        icon: [],
    };
}`},{name:"variant",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'"medium"'},{name:"modelValue",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'""'},{name:"modelModifiers",global:!1,description:"",tags:[],required:!1,type:"Record<string, any>",declarations:[],schema:"Record<string, any>",default:"() => { }"},{name:"buttonLabel",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'"Search"'},{name:"inputAttrs",global:!1,description:"",tags:[],required:!1,type:"Record<string, any>",declarations:[],schema:"Record<string, any>",default:"() => { }"}],events:[{name:"update:modelValue",description:"",tags:[],type:"any[]",signature:'(event: "update:modelValue", ...args: any[]): void',declarations:[],schema:["any"]}],slots:[{name:"icon",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}}],exposed:[{name:"name",type:"string",description:"",declarations:[],schema:"string"},{name:"id",type:"string",description:"",declarations:[],schema:"string"},{name:"label",type:"string",description:"",declarations:[],schema:"string"},{name:"customClasses",type:"Record<string, any>",description:"",declarations:[],schema:"Record<string, any>"},{name:"variant",type:"string",description:"",declarations:[],schema:"string"},{name:"modelValue",type:"string",description:"",declarations:[],schema:"string"},{name:"modelModifiers",type:"Record<string, any>",description:"",declarations:[],schema:"Record<string, any>"},{name:"buttonLabel",type:"string",description:"",declarations:[],schema:"string"},{name:"inputAttrs",type:"Record<string, any>",description:"",declarations:[],schema:"Record<string, any>"}],sourceFiles:"/home/runner/work/vue-uswds/vue-uswds/src/components/UsaSearch/UsaSearch.vue"};const a={variant:s.props.variant.default,modelValue:s.props.modelValue.default,label:s.props.label.default,buttonLabel:s.props.buttonLabel.default,inputAttrs:s.props.inputAttrs.default(),id:s.props.id.default,name:s.props.name.default,customClasses:s.props.customClasses.default()},Ne={component:s,title:"Components/UsaSearch",argTypes:{variant:{options:["small","medium","big"],control:{type:"select"}},modelValue:{control:{type:"text"}},label:{control:{type:"text"}},buttonLabel:{control:{type:"text"}},inputAttrs:{control:{type:"object"}},id:{control:{type:"text"}},name:{control:{type:"text"}},customClasses:{control:{type:"object"}},icon:{control:{type:"text"}}},args:{variant:a.variant,modelValue:a.modelValue,label:a.label,buttonLabel:a.buttonLabel,inputAttrs:a.inputAttrs,id:a.id,name:a.name,customClasses:a.customClasses,icon:""},render:e=>({components:{UsaSearch:s},props:Object.keys(s.props),setup(){const t=fe(e.modelValue);return{args:e,modelValue:t}},template:`<UsaSearch
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
}`,...(T=(O=i.parameters)==null?void 0:O.docs)==null?void 0:T.source}}};var $,M,F;m.parameters={...m.parameters,docs:{...($=m.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(F=(M=m.parameters)==null?void 0:M.docs)==null?void 0:F.source}}};var z,K,_;u.parameters={...u.parameters,docs:{...(z=u.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(_=(K=u.parameters)==null?void 0:K.docs)==null?void 0:_.source}}};var G,H,J;d.parameters={...d.parameters,docs:{...(G=d.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(J=(H=d.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var Q,W,X;p.parameters={...p.parameters,docs:{...(Q=p.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(X=(W=p.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};var Y,Z,ee;g.parameters={...g.parameters,docs:{...(Y=g.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(ee=(Z=g.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ae,se,te;h.parameters={...h.parameters,docs:{...(ae=h.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
}`,...(oe=(ne=b.parameters)==null?void 0:ne.docs)==null?void 0:oe.source}}};const je=["DefaultSearch","DefaultValueSearch","SmallVariantSearch","BigVariantSearch","CustomLabelSearch","CustomButtonLabelSearch","CustomNameSearch","InputAttrsSearch","IconSlotSearch","CustomIdSearch","CustomClassesSearch"];export{i as BigVariantSearch,u as CustomButtonLabelSearch,b as CustomClassesSearch,h as CustomIdSearch,m as CustomLabelSearch,d as CustomNameSearch,o as DefaultSearch,c as DefaultValueSearch,g as IconSlotSearch,p as InputAttrsSearch,l as SmallVariantSearch,je as __namedExportsOrder,Ne as default};
