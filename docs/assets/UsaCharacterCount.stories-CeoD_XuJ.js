import{l as b,s as l,M as I,c as d,r as m,a as S,t as g,n as Z,v as c,o as h,d as t,H as k}from"./vue.esm-bundler-DsKf3Hbt.js";import{n as ee}from"./unique-id-ZGF68Crf.js";import{w as ae}from"./index-CipSGTa_.js";import{_ as te}from"./UsaTextInput-DK2OUgGI.js";import{_ as ne}from"./UsaTextarea-e4gyqEYD.js";import"./common-cfad2wKl.js";import"./constants-BA52rpFi.js";import"./index-BIJogqLd.js";import"./UsaFormGroup-Byzm6HH0.js";import"./UsaLabel-qQK9qPDl.js";const re={class:"usa-character-count"},se=["id"],oe={class:"usa-character-count__sr-status usa-sr-only","aria-live":"polite"},u={__name:"UsaCharacterCount",props:{maxlength:{type:Number,required:!0,validator(e){const r=e>0;return r||console.warn(`${e} is not a valid maxlength`),r}},id:{type:String,default:""}},setup(e){const r=e,q=b(""),R=b(""),s=b(r.maxlength),i=l(()=>s.value<0?s.value*-1:0),p=l(()=>s.value===r.maxlength?"equal":i.value>0?"over":"under"),O=l(()=>r.id||ee("usa-character-count")),W=l(()=>[{"usa-character-count__message--invalid":p.value==="over"}]),X=a=>s.value=r.maxlength-`${a}`.length;return ae(s,()=>{var a;R.value=(a=q.value)==null?void 0:a.textContent},{debounce:1e3,immediate:!0}),I("updateCharacterCount",X),I("characterCountMaxlength",l(()=>r.maxlength)),I("characterCountMessageId",l(()=>O.value)),(a,o)=>(h(),d("div",re,[m(a.$slots,"default"),S("span",{id:O.value,class:"usa-character-count__message usa-sr-only"},[m(a.$slots,"default-message",{},()=>[t("You can enter up to "+c(e.maxlength)+" characters",1)])],8,se),S("div",{ref_key:"statusMessageRef",ref:q,class:Z(["usa-character-count__status usa-hint",W.value]),"aria-hidden":"true"},[p.value==="equal"?m(a.$slots,"equal-message",{key:0,maxlength:e.maxlength},()=>[t(c(e.maxlength)+" character",1),e.maxlength!==1?(h(),d(k,{key:0},[t("s")],64)):g("",!0),o[0]||(o[0]=t(" allowed"))]):p.value==="under"?m(a.$slots,"remaining-message",{key:1,charactersRemaining:s.value,maxlength:e.maxlength},()=>[t(c(s.value)+" character",1),s.value!==1?(h(),d(k,{key:0},[t("s")],64)):g("",!0),o[1]||(o[1]=t(" left"))]):p.value==="over"?m(a.$slots,"over-message",{key:2,charactersOver:i.value,maxlength:e.maxlength},()=>[t(c(i.value)+" character",1),i.value!==1?(h(),d(k,{key:0},[t("s")],64)):g("",!0),o[2]||(o[2]=t(" over limit"))]):g("",!0)],2),S("div",oe,c(R.value),1)]))}};u.__docgenInfo={exportName:"default",displayName:"UsaCharacterCount",type:1,props:[{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"id",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'""'},{name:"maxlength",global:!1,description:"",tags:[],required:!0,type:"number",declarations:[],schema:"number"}],events:[],slots:[{name:"default",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}},{name:"default-message",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}},{name:"equal-message",type:"{ maxlength: number; }",description:"",declarations:[],schema:{kind:"object",type:"{ maxlength: number; }"}},{name:"remaining-message",type:"{ charactersRemaining: number; maxlength: number; }",description:"",declarations:[],schema:{kind:"object",type:"{ charactersRemaining: number; maxlength: number; }"}},{name:"over-message",type:"{ charactersOver: number; maxlength: number; }",description:"",declarations:[],schema:{kind:"object",type:"{ charactersOver: number; maxlength: number; }"}}],exposed:[{name:"id",type:"string",description:"",declarations:[],schema:"string"},{name:"maxlength",type:"number",description:"",declarations:[],schema:"number"}],sourceFiles:"/home/runner/work/vue-uswds/vue-uswds/src/components/UsaCharacterCount/UsaCharacterCount.vue"};const n={maxlength:u.props.maxlength.default,id:u.props.id.default},Ce={component:u,title:"Components/UsaCharacterCount",argTypes:{maxlength:{control:{type:"number"}},id:{control:{type:"text"}},default:{control:{type:"text"}},"equal-message":{control:{type:"text"}},"remaining-message":{control:{type:"text"}},"over-message":{control:{type:"text"}}},args:{maxlength:n.maxlength,id:n.id,default:"","equal-message":"","remaining-message":"","over-message":""},render:e=>({components:{UsaCharacterCount:u,UsaTextInput:te,UsaTextarea:ne},props:Object.keys(u.props),setup(){return{args:e}},template:`<UsaCharacterCount :id="args.id" :maxlength="args.maxlength">
    <template v-if="!!args.default" #default>${e.default}</template>
    <template v-if="!!args['equal-message']" #equal-message="{ maxlength }">${e["equal-message"]}</template>
    <template v-if="!!args['remaining-message']" #remaining-message="{ maxlength, charactersRemaining }">${e["remaining-message"]}</template>
    <template v-if="!!args['over-message']" #over-message="{ maxlength, charactersOver }">${e["over-message"]}</template>
  </UsaCharacterCount>`})},x={args:{...n,maxlength:25,default:"<div><em>UsaTextarea or UsaTextInput goes here</em></div>"},name:"Default",parameters:{docs:{source:{code:'<UsaCharacterCount :maxlength="25"><div><em>UsaTextarea or UsaTextInput goes here</em></div></UsaCharacterCount>'}}}},C={args:{...n,maxlength:25,default:'<UsaTextInput label="Text input"></UsaTextInput>'},name:"Text Input",parameters:{docs:{source:{code:'<UsaCharacterCount :maxlength="25"><UsaTextInput label="Text input"></UsaTextInput></UsaCharacterCount>'}}}},f={args:{...n,maxlength:50,default:'<UsaTextarea label="Textarea"></UsaTextarea>'},name:"Textarea",parameters:{docs:{source:{code:'<UsaCharacterCount :maxlength="50"><UsaTextarea label="Textarea"></UsaTextarea></UsaCharacterCount>'}}}},U={args:{...n,maxlength:25,default:'<UsaTextInput label="Text input"></UsaTextInput>',"equal-message":"You can enter up to {{ maxlength }} characters"},name:"Custom Count Message Slot",parameters:{docs:{source:{code:`<UsaCharacterCount :maxlength="25">
	<template #default><UsaTextInput label="Text input"></UsaTextInput></template>
	<template #equal-message="{maxlength}">You can enter up to {{ maxlength }} characters</template>
</UsaCharacterCount>`}}}},T={args:{...n,maxlength:25,default:`<UsaTextInput :model-value="'some test text'" label="Text input"></UsaTextInput>`,"remaining-message":"{{ charactersRemaining }} out of {{ maxlength }} characters remaining"},name:"Custom Remaining Message Slot",parameters:{docs:{source:{code:`<UsaCharacterCount :maxlength="25">
	<template #default><UsaTextInput :model-value="'some test text'" label="Text input"></UsaTextInput></template>
	<template #remaining-message="{charactersRemaining, maxlength}">{{ charactersRemaining }} out of {{ maxlength }} characters remaining</template>
</UsaCharacterCount>`}}}},v={args:{...n,maxlength:20,default:`<UsaTextInput :model-value="'some really long test text'" label="Text input"></UsaTextInput>`,"over-message":"{{ charactersOver }} over the {{ maxlength }} character max"},name:"Custom Over Message Slot",parameters:{docs:{source:{code:`<UsaCharacterCount :maxlength="20">
	<template #default><UsaTextInput :model-value="'some really long test text'" label="Text input"></UsaTextInput></template>
	<template #over-message="{charactersOver, maxlength}">{{ charactersOver }} over the {{ maxlength }} character max</template>
</UsaCharacterCount>`}}}},y={args:{...n,maxlength:25,id:"custom-id",default:'<UsaTextInput label="Text input"></UsaTextInput>'},name:"Custom ID",parameters:{docs:{source:{code:'<UsaCharacterCount :maxlength="25" id="custom-id"><UsaTextInput label="Text input"></UsaTextInput></UsaCharacterCount>'}}}};var M,$,D;x.parameters={...x.parameters,docs:{...(M=x.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    maxlength: 25,
    default: '<div><em>UsaTextarea or UsaTextInput goes here</em></div>'
  },
  name: 'Default',
  parameters: {
    docs: {
      source: {
        code: \`<UsaCharacterCount :maxlength="25"><div><em>UsaTextarea or UsaTextInput goes here</em></div></UsaCharacterCount>\`
      }
    }
  }
}`,...(D=($=x.parameters)==null?void 0:$.docs)==null?void 0:D.source}}};var P,w,_;C.parameters={...C.parameters,docs:{...(P=C.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    maxlength: 25,
    default: '<UsaTextInput label="Text input"></UsaTextInput>'
  },
  name: 'Text Input',
  parameters: {
    docs: {
      source: {
        code: \`<UsaCharacterCount :maxlength="25"><UsaTextInput label="Text input"></UsaTextInput></UsaCharacterCount>\`
      }
    }
  }
}`,...(_=(w=C.parameters)==null?void 0:w.docs)==null?void 0:_.source}}};var N,j,V;f.parameters={...f.parameters,docs:{...(N=f.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    maxlength: 50,
    default: '<UsaTextarea label="Textarea"></UsaTextarea>'
  },
  name: 'Textarea',
  parameters: {
    docs: {
      source: {
        code: \`<UsaCharacterCount :maxlength="50"><UsaTextarea label="Textarea"></UsaTextarea></UsaCharacterCount>\`
      }
    }
  }
}`,...(V=(j=f.parameters)==null?void 0:j.docs)==null?void 0:V.source}}};var E,Y,B;U.parameters={...U.parameters,docs:{...(E=U.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    maxlength: 25,
    default: '<UsaTextInput label="Text input"></UsaTextInput>',
    'equal-message': 'You can enter up to {{ maxlength }} characters'
  },
  name: 'Custom Count Message Slot',
  parameters: {
    docs: {
      source: {
        code: \`<UsaCharacterCount :maxlength="25">\\n\\t<template #default><UsaTextInput label="Text input"></UsaTextInput></template>\\n\\t<template #equal-message="{maxlength}">You can enter up to {{ maxlength }} characters</template>\\n</UsaCharacterCount>\`
      }
    }
  }
}`,...(B=(Y=U.parameters)==null?void 0:Y.docs)==null?void 0:B.source}}};var F,K,z;T.parameters={...T.parameters,docs:{...(F=T.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    maxlength: 25,
    default: \`<UsaTextInput :model-value="'some test text'" label="Text input"></UsaTextInput>\`,
    'remaining-message': '{{ charactersRemaining }} out of {{ maxlength }} characters remaining'
  },
  name: 'Custom Remaining Message Slot',
  parameters: {
    docs: {
      source: {
        code: \`<UsaCharacterCount :maxlength="25">\\n\\t<template #default><UsaTextInput :model-value="'some test text'" label="Text input"></UsaTextInput></template>\\n\\t<template #remaining-message="{charactersRemaining, maxlength}">{{ charactersRemaining }} out of {{ maxlength }} characters remaining</template>\\n</UsaCharacterCount>\`
      }
    }
  }
}`,...(z=(K=T.parameters)==null?void 0:K.docs)==null?void 0:z.source}}};var H,A,G;v.parameters={...v.parameters,docs:{...(H=v.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    maxlength: 20,
    default: \`<UsaTextInput :model-value="'some really long test text'" label="Text input"></UsaTextInput>\`,
    'over-message': '{{ charactersOver }} over the {{ maxlength }} character max'
  },
  name: 'Custom Over Message Slot',
  parameters: {
    docs: {
      source: {
        code: \`<UsaCharacterCount :maxlength="20">\\n\\t<template #default><UsaTextInput :model-value="'some really long test text'" label="Text input"></UsaTextInput></template>\\n\\t<template #over-message="{charactersOver, maxlength}">{{ charactersOver }} over the {{ maxlength }} character max</template>\\n</UsaCharacterCount>\`
      }
    }
  }
}`,...(G=(A=v.parameters)==null?void 0:A.docs)==null?void 0:G.source}}};var J,L,Q;y.parameters={...y.parameters,docs:{...(J=y.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    maxlength: 25,
    id: 'custom-id',
    default: '<UsaTextInput label="Text input"></UsaTextInput>'
  },
  name: 'Custom ID',
  parameters: {
    docs: {
      source: {
        code: \`<UsaCharacterCount :maxlength="25" id="custom-id"><UsaTextInput label="Text input"></UsaTextInput></UsaCharacterCount>\`
      }
    }
  }
}`,...(Q=(L=y.parameters)==null?void 0:L.docs)==null?void 0:Q.source}}};const fe=["DefaultCharacterCount","DefaultTextInputCharacterCount","DefaultTextareaCharacterCount","EqualMessageScopedSlotCharacterCount","RemainingMessageScopedSlotCharacterCount","OverMessageScopedSlotCharacterCount","CustomIdCharacterCount"];export{y as CustomIdCharacterCount,x as DefaultCharacterCount,C as DefaultTextInputCharacterCount,f as DefaultTextareaCharacterCount,U as EqualMessageScopedSlotCharacterCount,v as OverMessageScopedSlotCharacterCount,T as RemainingMessageScopedSlotCharacterCount,fe as __namedExportsOrder,Ce as default};
