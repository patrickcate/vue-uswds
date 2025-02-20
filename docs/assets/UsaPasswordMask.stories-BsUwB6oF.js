import{l as p,s as l,c as v,r as b,a as I,v as M,m as _,G as S,o as V,L as i}from"./vue.esm-bundler-DlC1_45x.js";import{_ as C}from"./UsaTextInput-cbzKuK60.js";import"./index-dBkZoKjW.js";import"./index-BzV88aIg.js";import"./unique-id-DrlS73OY.js";import"./common-cfad2wKl.js";import"./constants-BA52rpFi.js";import"./UsaFormGroup-COQiJYtU.js";import"./UsaLabel-DpLC57Qt.js";const q=["aria-controls","aria-pressed"],H={inheritAttrs:!1},t=Object.assign(H,{__name:"UsaPasswordMask",props:{showText:{type:String,default:"Show password"},hideText:{type:String,default:"Hide password"}},setup(a){const r=a,o=p(!1),s=p({}),h=l(()=>o.value?"text":"password"),T=l(()=>o.value?r.hideText:r.showText),k=l(()=>Object.keys(s.value).length?Object.keys(s.value).join(" "):""),P=e=>{s.value[e]||(s.value[e]=!0)},U=e=>{s.value[e]&&delete s.value[e]};return i("registerInput",P),i("unregisterInput",U),(e,u)=>(V(),v(S,null,[b(e.$slots,"default",{type:h.value}),I("button",_(e.$attrs,{type:"button",class:"usa-show-password usa-button usa-button--unstyled","aria-controls":k.value,"aria-pressed":o.value,onClick:u[0]||(u[0]=O=>o.value=!o.value)}),M(T.value),17,q)],64))}});t.__docgenInfo={exportName:"default",displayName:"UsaPasswordMask",type:1,props:[{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"showText",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'"Show password"'},{name:"hideText",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'"Hide password"'}],events:[],slots:[{name:"default",type:"{ type: string; }",description:"",declarations:[],schema:{kind:"object",type:"{ type: string; }"}}],exposed:[{name:"showText",type:"string",description:"",declarations:[],schema:"string"},{name:"hideText",type:"string",description:"",declarations:[],schema:"string"}],sourceFiles:"/home/runner/work/vue-uswds/vue-uswds/src/components/UsaPasswordMask/UsaPasswordMask.vue"};const g={showText:t.props.showText.default,hideText:t.props.hideText.default},L={component:t,title:"Components/UsaPasswordMask",argTypes:{showText:{control:{type:"text"}},hideText:{control:{type:"text"}},default:{control:{type:"text"}}},args:{default:""},decorators:[()=>({template:'<form class="usa-form usa-form--large"><story /></form>'})],render:a=>({components:{UsaPasswordMask:t,UsaTextInput:C},props:Object.keys(t.props),setup(){const r=p(a.modelValue);return{args:a,modelValue:r}},template:`<UsaPasswordMask
      :show-text="args.showText"
      :hide-text="args.hideText"
      v-slot="{ type }"
    >${a.default}</UsaPasswordMask>`})},n={args:{...g,default:'<UsaTextInput v-model="modelValue" label="Password" :type="type"></UsaTextInput>'},name:"Default",parameters:{docs:{source:{code:'<UsaPasswordMask><UsaTextInput v-model="modelValue" label="Password" :type="type"></UsaTextInput></UsaPasswordMask>'}}}},d={args:{...g,showText:"Show typing",hideText:"Hide typing",default:'<UsaTextInput v-model="modelValue" label="Password" :type="type"></UsaTextInput>'},name:"Custom Show/Hide Text",parameters:{docs:{source:{code:'<UsaPasswordMask :show-text="showText" :hide-text="hideText"><UsaTextInput v-model="modelValue" label="Password" :type="type"></UsaTextInput></UsaPasswordMask>'}}}};var c,m,y;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(x=(f=d.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};const A=["DefaultPasswordMask","CustomShowHideTextPasswordMask"];export{d as CustomShowHideTextPasswordMask,n as DefaultPasswordMask,A as __namedExportsOrder,L as default};
