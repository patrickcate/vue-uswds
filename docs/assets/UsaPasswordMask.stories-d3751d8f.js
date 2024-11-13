import{l as p,s as l,c as b,r as I,a as M,v as _,m as S,G as V,L as i,o as C}from"./vue.esm-bundler-2e7cedae.js";import{U as q}from"./UsaTextInput-fe9ecdbf.js";import"./index-2ecd98da.js";import"./index-6ef08634.js";import"./unique-id-a1cb1937.js";import"./common-c0b90c12.js";import"./constants-fce87d39.js";import"./UsaFormGroup-0035569d.js";import"./UsaLabel-818695ec.js";const H=["aria-controls","aria-pressed"],O={inheritAttrs:!1},g=Object.assign(O,{__name:"UsaPasswordMask",props:{showText:{type:String,default:"Show password"},hideText:{type:String,default:"Hide password"}},setup(t){const r=t,a=p(!1),s=p({}),T=l(()=>a.value?"text":"password"),k=l(()=>a.value?r.hideText:r.showText),P=l(()=>Object.keys(s.value).length?Object.keys(s.value).join(" "):""),U=e=>{s.value[e]||(s.value[e]=!0)},v=e=>{s.value[e]&&delete s.value[e]};return i("registerInput",U),i("unregisterInput",v),(e,u)=>(C(),b(V,null,[I(e.$slots,"default",{type:T.value}),M("button",S(e.$attrs,{type:"button",class:"usa-show-password usa-button usa-button--unstyled","aria-controls":P.value,"aria-pressed":a.value,onClick:u[0]||(u[0]=j=>a.value=!a.value)}),_(k.value),17,H)],64))}}),o=g;g.__docgenInfo={exportName:"default",displayName:"UsaPasswordMask",type:1,props:[{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"showText",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'"Show password"'},{name:"hideText",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'"Hide password"'}],events:[],slots:[{name:"default",type:"{ type: string; }",description:"",declarations:[],schema:{kind:"object",type:"{ type: string; }"}}],exposed:[{name:"showText",type:"string",description:"",declarations:[],schema:"string"},{name:"hideText",type:"string",description:"",declarations:[],schema:"string"}],sourceFiles:"/home/runner/work/vue-uswds/vue-uswds/src/components/UsaPasswordMask/UsaPasswordMask.vue"};const h={showText:o.props.showText.default,hideText:o.props.hideText.default},A={component:o,title:"Components/UsaPasswordMask",argTypes:{showText:{control:{type:"text"}},hideText:{control:{type:"text"}},default:{control:{type:"text"}}},args:{default:""},decorators:[()=>({template:'<form class="usa-form usa-form--large"><story /></form>'})],render:t=>({components:{UsaPasswordMask:o,UsaTextInput:q},props:Object.keys(o.props),setup(){const r=p(t.modelValue);return{args:t,modelValue:r}},template:`<UsaPasswordMask
      :show-text="args.showText"
      :hide-text="args.hideText"
      v-slot="{ type }"
    >${t.default}</UsaPasswordMask>`})},n={args:{...h,default:'<UsaTextInput v-model="modelValue" label="Password" :type="type"></UsaTextInput>'},name:"Default",parameters:{docs:{source:{code:'<UsaPasswordMask><UsaTextInput v-model="modelValue" label="Password" :type="type"></UsaTextInput></UsaPasswordMask>'}}}},d={args:{...h,showText:"Show typing",hideText:"Hide typing",default:'<UsaTextInput v-model="modelValue" label="Password" :type="type"></UsaTextInput>'},name:"Custom Show/Hide Text",parameters:{docs:{source:{code:'<UsaPasswordMask :show-text="showText" :hide-text="hideText"><UsaTextInput v-model="modelValue" label="Password" :type="type"></UsaTextInput></UsaPasswordMask>'}}}};var c,m,y;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    default: '<UsaTextInput v-model="modelValue" label="Password" :type="type"></UsaTextInput>'
  },
  name: 'Default',
  parameters: {
    docs: {
      source: {
        code: \`<UsaPasswordMask><UsaTextInput v-model="modelValue" label="Password" :type="type"></UsaTextInput></UsaPasswordMask>\`
      }
    }
  }
}`,...(y=(m=n.parameters)==null?void 0:m.docs)==null?void 0:y.source}}};var w,f,x;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    showText: 'Show typing',
    hideText: 'Hide typing',
    default: '<UsaTextInput v-model="modelValue" label="Password" :type="type"></UsaTextInput>'
  },
  name: 'Custom Show/Hide Text',
  parameters: {
    docs: {
      source: {
        code: \`<UsaPasswordMask :show-text="showText" :hide-text="hideText"><UsaTextInput v-model="modelValue" label="Password" :type="type"></UsaTextInput></UsaPasswordMask>\`
      }
    }
  }
}`,...(x=(f=d.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};const G=["DefaultPasswordMask","CustomShowHideTextPasswordMask"];export{d as CustomShowHideTextPasswordMask,n as DefaultPasswordMask,G as __namedExportsOrder,A as default};
