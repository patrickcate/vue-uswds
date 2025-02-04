import{l as fe,s as me,w as ye,W as L,c as Ce,a as s,n as c,b as t,r as _,v as I,e as k,o as Be,I as he}from"./vue.esm-bundler-DlC1_45x.js";import{P as xe,G as Ue,I as Te}from"./constants-BA52rpFi.js";import{n as Se}from"./unique-id-C_cIYxKg.js";import{_ as ve}from"./UsaBannerContent-sD3_rPMS.js";import"./common-cfad2wKl.js";function _e(e,T="",S=!1,l){const n=fe(S),v=me(()=>e||Se(T)),u=()=>{n.value=!1,l&&l("update:open",n.value)},i=()=>{n.value=!0,l&&l("update:open",n.value)},o=()=>{n.value?u():i()};return ye(n,m=>{n.value!==m&&o()}),{isOpen:L(n),toggleId:L(v),closeContent:u,openContent:i,toggleContent:o}}const Ie=["aria-label"],ke=["src"],Pe={class:"usa-banner__header-text"},we={class:"usa-banner__header-action"},Oe=["aria-expanded","aria-controls"],Ae={class:"usa-banner__button-text"},De=["id","hidden"],r={__name:"UsaBanner",props:{open:{type:Boolean,default:!1},id:{type:String,default:""},ariaLabel:{type:String,default:"Official website of the United States government"},headerText:{type:String,default:"An official website of the United States government"},actionText:{type:String,default:"Here's how you know"},customClasses:{type:Object,default:()=>({accordion:[],bannerHeader:[],bannerInner:[],button:[],bannerContent:[]})}},emits:["update:open"],setup(e,{expose:T,emit:S}){const l=k("vueUswds.prefixSeparator",xe),n=k("vueUswds.gridNamespace",Ue),v=k("vueUswds.imagePath",Te),u=S,i=e,{isOpen:o,toggleId:m,openContent:pe,closeContent:ge,toggleContent:P}=_e(i.id,"usa-banner",i.open,u),be=me(()=>{var d;return[{"usa-banner__header--expanded":o.value},...((d=i.customClasses)==null?void 0:d.bannerHeader)||[]]});return T({openContent:pe,closeContent:ge,toggleContent:P}),(d,w)=>{var O,A,D,H;return Be(),Ce("section",{class:"usa-banner","aria-label":e.ariaLabel},[s("div",{class:c(["usa-accordion",(O=e.customClasses)==null?void 0:O.accordion])},[s("header",{class:c(["usa-banner__header",be.value])},[s("div",{class:c(["usa-banner__inner",(A=e.customClasses)==null?void 0:A.bannerInner])},[s("div",{class:c(`${t(n)}col-auto`)},[_(d.$slots,"flag",{},()=>[s("img",{"aria-hidden":"true",class:"usa-banner__header-flag",src:`${t(v)}/us_flag_small.png`,alt:""},null,8,ke)])],2),s("div",{"aria-hidden":"true",class:c(`${t(n)}col-fill tablet${t(l)}${t(n)}col-auto`)},[s("p",Pe,I(e.headerText),1),s("p",we,I(e.actionText),1)],2),s("button",{type:"button",class:c(["usa-accordion__button usa-banner__button",(D=e.customClasses)==null?void 0:D.button]),"aria-expanded":t(o),"aria-controls":t(m),onClick:w[0]||(w[0]=He=>t(P)())},[_(d.$slots,"button",{isOpen:t(o),actionText:e.actionText},()=>[s("span",Ae,I(e.actionText),1)])],10,Oe)],2)],2),s("div",{id:t(m),hidden:!t(o),class:c(["usa-banner__content usa-accordion__content",(H=e.customClasses)==null?void 0:H.bannerContent])},[_(d.$slots,"default",{},()=>[he(t(ve))])],10,De)],2)],8,Ie)}}};r.__docgenInfo={exportName:"default",displayName:"UsaBanner",type:1,props:[{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"id",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'""'},{name:"open",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]},default:"false"},{name:"customClasses",global:!1,description:"",tags:[],required:!1,type:"Record<string, any>",declarations:[],schema:"Record<string, any>",default:`() => {
    return {
        accordion: [],
        bannerHeader: [],
        bannerInner: [],
        button: [],
        bannerContent: [],
    };
}`},{name:"ariaLabel",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'"Official website of the United States government"'},{name:"headerText",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'"An official website of the United States government"'},{name:"actionText",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:`"Here's how you know"`}],events:[{name:"update:open",description:"",tags:[],type:"any[]",signature:'(event: "update:open", ...args: any[]): void',declarations:[],schema:["any"]}],slots:[{name:"flag",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}},{name:"button",type:"{ isOpen: any; actionText: string; }",description:"",declarations:[],schema:{kind:"object",type:"{ isOpen: any; actionText: string; }"}},{name:"default",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}}],exposed:[{name:"openContent",type:"any",description:"",declarations:[],schema:"any"},{name:"closeContent",type:"any",description:"",declarations:[],schema:"any"},{name:"toggleContent",type:"any",description:"",declarations:[],schema:"any"},{name:"id",type:"string",description:"",declarations:[],schema:"string"},{name:"open",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"customClasses",type:"Record<string, any>",description:"",declarations:[],schema:"Record<string, any>"},{name:"ariaLabel",type:"string",description:"",declarations:[],schema:"string"},{name:"headerText",type:"string",description:"",declarations:[],schema:"string"},{name:"actionText",type:"string",description:"",declarations:[],schema:"string"}],sourceFiles:"/home/runner/work/vue-uswds/vue-uswds/src/components/UsaBanner/UsaBanner.vue"};const a={open:r.props.open.default,id:r.props.id.default,ariaLabel:r.props.ariaLabel.default,headerText:r.props.headerText.default,actionText:r.props.actionText.default,customClasses:r.props.customClasses.default()},Ne={component:r,title:"Components/UsaBanner",argTypes:{open:{control:{type:"boolean"},description:"Set banner to be open by default on initial load."},id:{control:{type:"text"}},ariaLabel:{control:{type:"text"}},headerText:{control:{type:"text"}},actionText:{control:{type:"text"}},customClasses:{control:{type:"object"}},flag:{control:{type:"text"}},button:{control:{type:"text"}},default:{control:{type:"text"}}},args:{open:a.open,id:a.id,ariaLabel:a.ariaLabel,headerText:a.headerText,actionText:a.actionText,customClasses:a.customClasses,flag:"",button:"",default:""},render:e=>({components:{UsaBanner:r},props:Object.keys(r.props),setup(){return{args:e}},template:`
    <UsaBanner
      :id="args.id"
      :open="args.open"
      :aria-label="args.ariaLabel"
      :header-text="args.headerText"
      :action-text="args.actionText"
      :custom-classes="args.customClasses"
    >
      <template v-if="args.flag" #flag>${e.flag}</template>
      <template v-if="args.button" #button="{ isOpen, actionText }">${e.button}</template>
      <template v-if="args.default" #default>${e.default}</template>
    </UsaBanner>`})},p={args:{...a},name:"Default",parameters:{docs:{source:{code:"<UsaBanner></UsaBanner>"}}}},g={args:{...a,open:!0},name:"Open by Default",parameters:{docs:{source:{code:'<UsaBanner :open="true"></UsaBanner>'}}}},b={args:{...a,id:"custom-id"},name:"Custom ID",parameters:{docs:{source:{code:'<UsaBanner id="custom-id"></UsaBanner>'}}}},f={args:{...a,flag:"Custom Flag Icon"},name:"Flag Slot",parameters:{docs:{source:{code:`
          <UsaBanner>
	<template #flag>Custom Flag Icon</template>
</UsaBanner>`}}}},y={args:{...a,button:"Custom Button Text"},name:"Button Slot",parameters:{docs:{source:{code:`<UsaBanner>
	<template #button>Custom Button</template>
</UsaBanner>`}}}},C={args:{...a,open:!0,default:"Custom Banner Content"},name:"Default Slot",parameters:{docs:{source:{code:"<UsaBanner>Custom Banner Content</UsaBanner>"}}}},B={args:{...a,customClasses:{accordion:["custom-accordion-class"],bannerHeader:["custom-banner-header-class"],bannerInner:["custom-banner-inner-class"],button:["custom-button-class"],bannerContent:["custom-banner-content-class"]}},name:"Custom Classes",parameters:{docs:{source:{code:`<UsaBanner :custom-classes="{ accordion: ['custom-accordion-class'], bannerHeader: ['custom-banner-header-class'], bannerInner: ['custom-banner-inner-class'], button: ['custom-button-class'], bannerContent: ['custom-banner-content-class'] }">Custom Classes</UsaBanner>`}}}},h={args:{...a,ariaLabel:"Custom aria label"},name:"Custom Aria Label",parameters:{docs:{source:{code:'<UsaBanner aria-label="Custom aria label"></UsaBanner>'}}}},x={args:{...a,headerText:"Custom header text"},name:"Custom Header Text",parameters:{docs:{source:{code:'<UsaBanner header-text="Custom Header Text"></UsaBanner>'}}}},U={args:{...a,actionText:"Custom action text"},name:"Custom Action Text",parameters:{docs:{source:{code:'<UsaBanner action-text="Custom action text"></UsaBanner>'}}}};var $,q,R;p.parameters={...p.parameters,docs:{...($=p.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    ...defaultProps
  },
  name: 'Default',
  parameters: {
    docs: {
      source: {
        code: \`<UsaBanner></UsaBanner>\`
      }
    }
  }
}`,...(R=(q=p.parameters)==null?void 0:q.docs)==null?void 0:R.source}}};var F,N,E;g.parameters={...g.parameters,docs:{...(F=g.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    open: true
  },
  name: 'Open by Default',
  parameters: {
    docs: {
      source: {
        code: \`<UsaBanner :open="true"></UsaBanner>\`
      }
    }
  }
}`,...(E=(N=g.parameters)==null?void 0:N.docs)==null?void 0:E.source}}};var j,V,G;b.parameters={...b.parameters,docs:{...(j=b.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    id: 'custom-id'
  },
  name: 'Custom ID',
  parameters: {
    docs: {
      source: {
        code: \`<UsaBanner id="custom-id"></UsaBanner>\`
      }
    }
  }
}`,...(G=(V=b.parameters)==null?void 0:V.docs)==null?void 0:G.source}}};var K,M,z;f.parameters={...f.parameters,docs:{...(K=f.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    flag: 'Custom Flag Icon'
  },
  name: 'Flag Slot',
  parameters: {
    docs: {
      source: {
        code: \`
          <UsaBanner>\\n\\t<template #flag>Custom Flag Icon</template>\\n</UsaBanner>\`
      }
    }
  }
}`,...(z=(M=f.parameters)==null?void 0:M.docs)==null?void 0:z.source}}};var W,X,J;y.parameters={...y.parameters,docs:{...(W=y.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    button: 'Custom Button Text'
  },
  name: 'Button Slot',
  parameters: {
    docs: {
      source: {
        code: \`<UsaBanner>\\n\\t<template #button>Custom Button</template>\\n</UsaBanner>\`
      }
    }
  }
}`,...(J=(X=y.parameters)==null?void 0:X.docs)==null?void 0:J.source}}};var Q,Y,Z;C.parameters={...C.parameters,docs:{...(Q=C.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    open: true,
    default: 'Custom Banner Content'
  },
  name: 'Default Slot',
  parameters: {
    docs: {
      source: {
        code: \`<UsaBanner>Custom Banner Content</UsaBanner>\`
      }
    }
  }
}`,...(Z=(Y=C.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,ae,ne;B.parameters={...B.parameters,docs:{...(ee=B.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    customClasses: {
      accordion: ['custom-accordion-class'],
      bannerHeader: ['custom-banner-header-class'],
      bannerInner: ['custom-banner-inner-class'],
      button: ['custom-button-class'],
      bannerContent: ['custom-banner-content-class']
    }
  },
  name: 'Custom Classes',
  parameters: {
    docs: {
      source: {
        code: \`<UsaBanner :custom-classes="{ accordion: ['custom-accordion-class'], bannerHeader: ['custom-banner-header-class'], bannerInner: ['custom-banner-inner-class'], button: ['custom-button-class'], bannerContent: ['custom-banner-content-class'] }">Custom Classes</UsaBanner>\`
      }
    }
  }
}`,...(ne=(ae=B.parameters)==null?void 0:ae.docs)==null?void 0:ne.source}}};var te,se,re;h.parameters={...h.parameters,docs:{...(te=h.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    ariaLabel: 'Custom aria label'
  },
  name: 'Custom Aria Label',
  parameters: {
    docs: {
      source: {
        code: \`<UsaBanner aria-label="Custom aria label"></UsaBanner>\`
      }
    }
  }
}`,...(re=(se=h.parameters)==null?void 0:se.docs)==null?void 0:re.source}}};var oe,ce,le;x.parameters={...x.parameters,docs:{...(oe=x.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    headerText: 'Custom header text'
  },
  name: 'Custom Header Text',
  parameters: {
    docs: {
      source: {
        code: \`<UsaBanner header-text="Custom Header Text"></UsaBanner>\`
      }
    }
  }
}`,...(le=(ce=x.parameters)==null?void 0:ce.docs)==null?void 0:le.source}}};var ie,de,ue;U.parameters={...U.parameters,docs:{...(ie=U.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    actionText: 'Custom action text'
  },
  name: 'Custom Action Text',
  parameters: {
    docs: {
      source: {
        code: \`<UsaBanner action-text="Custom action text"></UsaBanner>\`
      }
    }
  }
}`,...(ue=(de=U.parameters)==null?void 0:de.docs)==null?void 0:ue.source}}};const Ee=["DefaultBanner","DefaultOpenBanner","CustomIdBanner","FlagSlotBanner","ButtonSlotBanner","DefaultSlotBanner","CustomClassesBanner","AriaLabelBanner","HeaderTextBanner","ActionTextBanner"];export{U as ActionTextBanner,h as AriaLabelBanner,y as ButtonSlotBanner,B as CustomClassesBanner,b as CustomIdBanner,p as DefaultBanner,g as DefaultOpenBanner,C as DefaultSlotBanner,f as FlagSlotBanner,x as HeaderTextBanner,Ee as __namedExportsOrder,Ne as default};
