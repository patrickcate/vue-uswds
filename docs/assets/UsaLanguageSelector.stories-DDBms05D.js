import{l as oe,s as V,c as p,f as x,t as T,n as s,a as u,J as ge,g as b,b as t,H as q,I as de,o,r as me,d as z,v as f}from"./vue.esm-bundler-DsKf3Hbt.js";import{o as pe,a as ye}from"./index-BIJogqLd.js";import{u as fe}from"./useToggle-CTfbxpba.js";import{B as he}from"./BaseLink-BYp1-IWJ.js";import{_ as D}from"./UsaButton-D8hRGpbR.js";import"./index-CipSGTa_.js";import"./unique-id-ZGF68Crf.js";import"./common-cfad2wKl.js";import"./constants-BA52rpFi.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const Ce=["id","hidden"],ve=["lang"],be=["lang"],Se=["lang"],r={__name:"UsaLanguageSelector",props:{modelValue:{type:String,required:!0},open:{type:Boolean,default:!1},id:{type:String,default:""},languages:{type:Array,required:!0,validator(e){let a=!0;return e.length===1&&(a=!1,console.warn("A least two languages must be provided")),e.some(i=>!i.langCode)&&(a=!1,console.warn("A `lang` property is required for each language")),e.every(i=>i.text||i.nativeText)||(a=!1,console.warn("A `text` and/or `nativeText` property is required for each language")),a}},variant:{type:String,default:"",validator(e){let a=["","unstyled"].includes(e);return a||console.warn(`'${e}' is not a valid language selector variant`),a}},size:{type:String,default:"",validator(e){let a=["","small"].includes(e);return a||console.warn(`'${e}' is not a valid language selector size`),a}},customClasses:{type:Object,default:()=>({primary:[],primaryItem:[],button:[],submenu:[],submenuItem:[],link:[]})}},emits:["update:modelValue","update:open"],setup(e,{expose:a,emit:i}){const B=i,c=e,O=oe(null),{isOpen:E,toggleId:I,openContent:le,closeContent:h,toggleContent:R}=fe(c.id,"usa-language-selector",c.open,B),U=V(()=>c.languages.length>2),y=V({get(){return c.modelValue},set(l){B("update:modelValue",l),U.value&&h()}}),C=V(()=>c.languages.find(({langCode:l})=>l===y.value)),ue=()=>{const{langCode:l}=c.languages.find(({langCode:g})=>g!==y.value);y.value=l};return pe("Escape",()=>{U.value&&h()}),ye(O,()=>{U.value&&h()}),a({openContent:le,closeContent:h,toggleContent:R}),(l,g)=>{var _,P,N,$,j;return o(),p("div",{ref_key:"languageSelectorRef",ref:O,class:s(["usa-language-container",[{"usa-language--small":e.size==="small"}]])},[e.languages.length>2?(o(),p("ul",{key:0,class:s(["usa-language__primary usa-accordion",(_=e.customClasses)==null?void 0:_.primary])},[u("li",{class:s(["usa-language__primary-item",(P=e.customClasses)==null?void 0:P.primaryItem])},[ge(t(D),{class:s(["usa-language__link",(N=e.customClasses)==null?void 0:N.button]),"aria-expanded":t(E),"aria-controls":t(I),variant:e.variant==="unstyled"?"unstyled":"",onClick:t(R)},{default:b(()=>[me(l.$slots,"default",{},()=>[g[1]||(g[1]=z("Languages"))])]),_:3},8,["aria-expanded","aria-controls","class","variant","onClick"]),u("ul",{id:t(I),hidden:!t(E),class:s(["usa-language__submenu",($=e.customClasses)==null?void 0:$.submenu])},[(o(!0),p(q,null,de(e.languages,({langCode:d,to:A,href:F,nativeText:v,text:m,routerComponentName:ie})=>{var K,H,J;return o(),p("li",{key:d,class:s(["usa-language__submenu-item",(K=e.customClasses)==null?void 0:K.submenuItem])},[A||F?(o(),x(t(he),{key:0,to:A,href:F,class:s((H=e.customClasses)==null?void 0:H.link),"router-component-name":ie,onClick:ce=>y.value=d},{default:b(()=>[u("span",{lang:d},[u("strong",null,f(v||m),1),m&&v?(o(),p(q,{key:0},[z(" ("+f(m)+")",1)],64)):T("",!0)],8,ve)]),_:2},1032,["to","href","class","router-component-name","onClick"])):(o(),x(t(D),{key:1,variant:"unstyled",class:s((J=e.customClasses)==null?void 0:J.link),onClick:ce=>y.value=d},{default:b(()=>[u("span",{lang:d},[u("strong",null,f(v||m),1),m&&v?(o(),p(q,{key:0},[z(" ("+f(m)+")",1)],64)):T("",!0)],8,be)]),_:2},1032,["class","onClick"]))],2)}),128))],10,Ce)],2)],2)):C.value?(o(),x(t(D),{key:1,class:s((j=e.customClasses)==null?void 0:j.button),onClick:g[0]||(g[0]=d=>ue())},{default:b(()=>[u("span",{lang:C.value.langCode},f(C.value.nativeText||C.value.text),9,Se)]),_:1},8,["class"])):T("",!0)],2)}}};r.__docgenInfo={exportName:"default",displayName:"UsaLanguageSelector",type:1,props:[{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"size",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'""'},{name:"id",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'""'},{name:"open",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]},default:"false"},{name:"customClasses",global:!1,description:"",tags:[],required:!1,type:"Record<string, any>",declarations:[],schema:"Record<string, any>",default:`{
    primary: [],
    primaryItem: [],
    button: [],
    submenu: [],
    submenuItem: [],
    link: [],
}`},{name:"variant",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'""'},{name:"modelValue",global:!1,description:"",tags:[],required:!0,type:"string",declarations:[],schema:"string"},{name:"languages",global:!1,description:"",tags:[],required:!0,type:"unknown[]",declarations:[],schema:{kind:"array",type:"unknown[]"}}],events:[],slots:[{name:"default",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}}],exposed:[{name:"openContent",type:"any",description:"",declarations:[],schema:"any"},{name:"closeContent",type:"any",description:"",declarations:[],schema:"any"},{name:"toggleContent",type:"any",description:"",declarations:[],schema:"any"},{name:"size",type:"string",description:"",declarations:[],schema:"string"},{name:"id",type:"string",description:"",declarations:[],schema:"string"},{name:"open",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"customClasses",type:"Record<string, any>",description:"",declarations:[],schema:"Record<string, any>"},{name:"variant",type:"string",description:"",declarations:[],schema:"string"},{name:"modelValue",type:"string",description:"",declarations:[],schema:"string"},{name:"languages",type:"unknown[]",description:"",declarations:[],schema:{kind:"array",type:"unknown[]"}}],sourceFiles:"/home/runner/work/vue-uswds/vue-uswds/src/components/UsaLanguageSelector/UsaLanguageSelector.vue"};const re=[{to:"/ar",langCode:"ar",text:"Arabic",nativeText:"العربية"},{href:"/zh",langCode:"zh",text:"Chinese - Simplified",nativeText:"简体字"},{to:"/en",langCode:"en",text:"English"},{href:"/es",langCode:"es",text:"Spanish",nativeText:"Español"}],n={modelValue:"",open:r.props.open.default,id:r.props.id.default,languages:re,variant:r.props.variant.default,size:r.props.size.default,customClasses:r.props.customClasses.default()},Be={component:r,title:"Components/UsaLanguageSelector",argTypes:{modelValue:{control:{type:"text"}},open:{control:{type:"boolean"},description:"Set dropdown to be open by default on initial load. This prop only has affect when there are more than two languages"},id:{control:{type:"text"}},languages:{control:{type:"object"},description:"Languages with a `to` or `href` prop will be rendered as a link. Otherwise will be rendered as a button, which will probably require additional styling to look correct."},variant:{options:["","unstyled"],control:{type:"select"}},size:{options:["","small"],control:{type:"select"}},customClasses:{control:{type:"object"}},default:{control:{type:"text"}}},args:{modelValue:n.modelValue,open:n.open,id:n.id,languages:re,variant:n.variant,size:n.size,customClasses:n.customClasses,default:""},render:e=>({components:{UsaLanguageSelector:r},props:Object.keys(r.props),setup(){const a=oe(e.modelValue);return{args:e,modelValue:a}},template:`
      <UsaLanguageSelector
        :open="args.open"
        :id="args.id"
        :languages="args.languages"
        :variant="args.variant"
        :size="args.size"
        :customClasses="args.customClasses"
        v-model="args.modelValue"
      >
        <template v-if="!!args.default" #default>${e.default}</template>
      </UsaLanguageSelector>`})},S={args:{...n,modelValue:"en"},name:"Default",parameters:{docs:{source:{code:'<UsaLanguageSelector :languages="languages"></UsaLanguageSelector>'}}}},k={args:{...n,modelValue:"en",open:!0},name:"Open By Default",parameters:{docs:{source:{code:'<UsaLanguageSelector :open="true" :languages="languages"></UsaLanguageSelector>'}}}},L={args:{...n,modelValue:"en",default:"Custom Text"},name:"Custom Dropdown Text",parameters:{docs:{source:{code:'<UsaLanguageSelector :languages="languages">Custom Text</UsaLanguageSelector>'}}}},w={args:{...n,modelValue:"es",languages:[{langCode:"en",text:"English"},{langCode:"es",nativeText:"Español"}]},name:"Two Languages",parameters:{docs:{source:{code:`<UsaLanguageSelector v-model="ref('es')" :languages="languages"></UsaLanguageSelector>`}}}};var G,M,Q;S.parameters={...S.parameters,docs:{...(G=S.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    modelValue: 'en'
  },
  name: 'Default',
  parameters: {
    docs: {
      source: {
        code: \`<UsaLanguageSelector :languages="languages"></UsaLanguageSelector>\`
      }
    }
  }
}`,...(Q=(M=S.parameters)==null?void 0:M.docs)==null?void 0:Q.source}}};var W,X,Y;k.parameters={...k.parameters,docs:{...(W=k.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    modelValue: 'en',
    open: true
  },
  name: 'Open By Default',
  parameters: {
    docs: {
      source: {
        code: \`<UsaLanguageSelector :open="true" :languages="languages"></UsaLanguageSelector>\`
      }
    }
  }
}`,...(Y=(X=k.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,ae;L.parameters={...L.parameters,docs:{...(Z=L.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    modelValue: 'en',
    default: 'Custom Text'
  },
  name: 'Custom Dropdown Text',
  parameters: {
    docs: {
      source: {
        code: \`<UsaLanguageSelector :languages="languages">Custom Text</UsaLanguageSelector>\`
      }
    }
  }
}`,...(ae=(ee=L.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var ne,se,te;w.parameters={...w.parameters,docs:{...(ne=w.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    modelValue: 'es',
    languages: [{
      langCode: 'en',
      text: 'English'
    }, {
      langCode: 'es',
      nativeText: 'Español'
    }]
  },
  name: 'Two Languages',
  parameters: {
    docs: {
      source: {
        code: \`<UsaLanguageSelector v-model="ref('es')" :languages="languages"></UsaLanguageSelector>\`
      }
    }
  }
}`,...(te=(se=w.parameters)==null?void 0:se.docs)==null?void 0:te.source}}};const Oe=["DefaultUsaLanguageSelector","OpenByDefaultUsaLanguageSelector","CustomDropdownTextUsaLanguageSelector","TwoLanguagesUsaLanguageSelector"];export{L as CustomDropdownTextUsaLanguageSelector,S as DefaultUsaLanguageSelector,k as OpenByDefaultUsaLanguageSelector,w as TwoLanguagesUsaLanguageSelector,Oe as __namedExportsOrder,Be as default};
