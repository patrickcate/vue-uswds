import{s as ge,c as be,a as t,n as r,b as n,r as h,v as x,e as U,o as fe,J as ye}from"./vue.esm-bundler-DsKf3Hbt.js";import{P as Ce,G as Be,I as he}from"./constants-BA52rpFi.js";import{u as xe}from"./useToggle-CTfbxpba.js";import{_ as Ue}from"./UsaBannerContent-oLBgsOev.js";import"./unique-id-ZGF68Crf.js";import"./common-cfad2wKl.js";const Te=["aria-label"],Se=["src"],_e={class:"usa-banner__header-text"},ve={class:"usa-banner__header-action"},ke=["aria-expanded","aria-controls"],Ie={class:"usa-banner__button-text"},Pe=["id","hidden"],s={__name:"UsaBanner",props:{open:{type:Boolean,default:!1},id:{type:String,default:""},ariaLabel:{type:String,default:"Official website of the United States government"},headerText:{type:String,default:"An official website of the United States government"},actionText:{type:String,default:"Here's how you know"},customClasses:{type:Object,default:()=>({accordion:[],bannerHeader:[],bannerInner:[],button:[],bannerContent:[]})}},emits:["update:open"],setup(a,{expose:oe,emit:ce}){const le=U("vueUswds.prefixSeparator",Ce),C=U("vueUswds.gridNamespace",Be),ie=U("vueUswds.imagePath",he),de=ce,B=a,{isOpen:c,toggleId:T,openContent:ue,closeContent:me,toggleContent:S}=xe(B.id,"usa-banner",B.open,de),pe=ge(()=>{var o;return[{"usa-banner__header--expanded":c.value},...((o=B.customClasses)==null?void 0:o.bannerHeader)||[]]});return oe({openContent:ue,closeContent:me,toggleContent:S}),(o,_)=>{var v,k,I,P;return fe(),be("section",{class:"usa-banner","aria-label":a.ariaLabel},[t("div",{class:r(["usa-accordion",(v=a.customClasses)==null?void 0:v.accordion])},[t("header",{class:r(["usa-banner__header",pe.value])},[t("div",{class:r(["usa-banner__inner",(k=a.customClasses)==null?void 0:k.bannerInner])},[t("div",{class:r(`${n(C)}col-auto`)},[h(o.$slots,"flag",{},()=>[t("img",{"aria-hidden":"true",class:"usa-banner__header-flag",src:`${n(ie)}/us_flag_small.png`,alt:""},null,8,Se)])],2),t("div",{"aria-hidden":"true",class:r(`${n(C)}col-fill tablet${n(le)}${n(C)}col-auto`)},[t("p",_e,x(a.headerText),1),t("p",ve,x(a.actionText),1)],2),t("button",{type:"button",class:r(["usa-accordion__button usa-banner__button",(I=a.customClasses)==null?void 0:I.button]),"aria-expanded":n(c),"aria-controls":n(T),onClick:_[0]||(_[0]=we=>n(S)())},[h(o.$slots,"button",{isOpen:n(c),actionText:a.actionText},()=>[t("span",Ie,x(a.actionText),1)])],10,ke)],2)],2),t("div",{id:n(T),hidden:!n(c),class:r(["usa-banner__content usa-accordion__content",(P=a.customClasses)==null?void 0:P.bannerContent])},[h(o.$slots,"default",{},()=>[ye(n(Ue))])],10,Pe)],2)],8,Te)}}};s.__docgenInfo={exportName:"default",displayName:"UsaBanner",type:1,props:[{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"id",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'""'},{name:"open",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]},default:"false"},{name:"customClasses",global:!1,description:"",tags:[],required:!1,type:"Record<string, any>",declarations:[],schema:"Record<string, any>",default:`() => {
    return {
        accordion: [],
        bannerHeader: [],
        bannerInner: [],
        button: [],
        bannerContent: [],
    };
}`},{name:"ariaLabel",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'"Official website of the United States government"'},{name:"headerText",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'"An official website of the United States government"'},{name:"actionText",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:`"Here's how you know"`}],events:[{name:"update:open",description:"",tags:[],type:"any[]",signature:'(event: "update:open", ...args: any[]): void',declarations:[],schema:["any"]}],slots:[{name:"flag",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}},{name:"button",type:"{ isOpen: any; actionText: string; }",description:"",declarations:[],schema:{kind:"object",type:"{ isOpen: any; actionText: string; }"}},{name:"default",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}}],exposed:[{name:"openContent",type:"any",description:"",declarations:[],schema:"any"},{name:"closeContent",type:"any",description:"",declarations:[],schema:"any"},{name:"toggleContent",type:"any",description:"",declarations:[],schema:"any"},{name:"id",type:"string",description:"",declarations:[],schema:"string"},{name:"open",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"customClasses",type:"Record<string, any>",description:"",declarations:[],schema:"Record<string, any>"},{name:"ariaLabel",type:"string",description:"",declarations:[],schema:"string"},{name:"headerText",type:"string",description:"",declarations:[],schema:"string"},{name:"actionText",type:"string",description:"",declarations:[],schema:"string"}],sourceFiles:"/home/runner/work/vue-uswds/vue-uswds/src/components/UsaBanner/UsaBanner.vue"};const e={open:s.props.open.default,id:s.props.id.default,ariaLabel:s.props.ariaLabel.default,headerText:s.props.headerText.default,actionText:s.props.actionText.default,customClasses:s.props.customClasses.default()},qe={component:s,title:"Components/UsaBanner",argTypes:{open:{control:{type:"boolean"},description:"Set banner to be open by default on initial load."},id:{control:{type:"text"}},ariaLabel:{control:{type:"text"}},headerText:{control:{type:"text"}},actionText:{control:{type:"text"}},customClasses:{control:{type:"object"}},flag:{control:{type:"text"}},button:{control:{type:"text"}},default:{control:{type:"text"}}},args:{open:e.open,id:e.id,ariaLabel:e.ariaLabel,headerText:e.headerText,actionText:e.actionText,customClasses:e.customClasses,flag:"",button:"",default:""},render:a=>({components:{UsaBanner:s},props:Object.keys(s.props),setup(){return{args:a}},template:`
    <UsaBanner
      :id="args.id"
      :open="args.open"
      :aria-label="args.ariaLabel"
      :header-text="args.headerText"
      :action-text="args.actionText"
      :custom-classes="args.customClasses"
    >
      <template v-if="args.flag" #flag>${a.flag}</template>
      <template v-if="args.button" #button="{ isOpen, actionText }">${a.button}</template>
      <template v-if="args.default" #default>${a.default}</template>
    </UsaBanner>`})},l={args:{...e},name:"Default",parameters:{docs:{source:{code:"<UsaBanner></UsaBanner>"}}}},i={args:{...e,open:!0},name:"Open by Default",parameters:{docs:{source:{code:'<UsaBanner :open="true"></UsaBanner>'}}}},d={args:{...e,id:"custom-id"},name:"Custom ID",parameters:{docs:{source:{code:'<UsaBanner id="custom-id"></UsaBanner>'}}}},u={args:{...e,flag:"Custom Flag Icon"},name:"Flag Slot",parameters:{docs:{source:{code:`
          <UsaBanner>
	<template #flag>Custom Flag Icon</template>
</UsaBanner>`}}}},m={args:{...e,button:"Custom Button Text"},name:"Button Slot",parameters:{docs:{source:{code:`<UsaBanner>
	<template #button>Custom Button</template>
</UsaBanner>`}}}},p={args:{...e,open:!0,default:"Custom Banner Content"},name:"Default Slot",parameters:{docs:{source:{code:"<UsaBanner>Custom Banner Content</UsaBanner>"}}}},g={args:{...e,customClasses:{accordion:["custom-accordion-class"],bannerHeader:["custom-banner-header-class"],bannerInner:["custom-banner-inner-class"],button:["custom-button-class"],bannerContent:["custom-banner-content-class"]}},name:"Custom Classes",parameters:{docs:{source:{code:`<UsaBanner :custom-classes="{ accordion: ['custom-accordion-class'], bannerHeader: ['custom-banner-header-class'], bannerInner: ['custom-banner-inner-class'], button: ['custom-button-class'], bannerContent: ['custom-banner-content-class'] }">Custom Classes</UsaBanner>`}}}},b={args:{...e,ariaLabel:"Custom aria label"},name:"Custom Aria Label",parameters:{docs:{source:{code:'<UsaBanner aria-label="Custom aria label"></UsaBanner>'}}}},f={args:{...e,headerText:"Custom header text"},name:"Custom Header Text",parameters:{docs:{source:{code:'<UsaBanner header-text="Custom Header Text"></UsaBanner>'}}}},y={args:{...e,actionText:"Custom action text"},name:"Custom Action Text",parameters:{docs:{source:{code:'<UsaBanner action-text="Custom action text"></UsaBanner>'}}}};var w,O,A;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(A=(O=l.parameters)==null?void 0:O.docs)==null?void 0:A.source}}};var D,H,L;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(L=(H=i.parameters)==null?void 0:H.docs)==null?void 0:L.source}}};var $,q,R;d.parameters={...d.parameters,docs:{...($=d.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(R=(q=d.parameters)==null?void 0:q.docs)==null?void 0:R.source}}};var F,N,E;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(E=(N=u.parameters)==null?void 0:N.docs)==null?void 0:E.source}}};var j,V,G;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(G=(V=m.parameters)==null?void 0:V.docs)==null?void 0:G.source}}};var K,M,z;p.parameters={...p.parameters,docs:{...(K=p.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(z=(M=p.parameters)==null?void 0:M.docs)==null?void 0:z.source}}};var J,X,Q;g.parameters={...g.parameters,docs:{...(J=g.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(Q=(X=g.parameters)==null?void 0:X.docs)==null?void 0:Q.source}}};var W,Y,Z;b.parameters={...b.parameters,docs:{...(W=b.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(Z=(Y=b.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,ae,ne;f.parameters={...f.parameters,docs:{...(ee=f.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(ne=(ae=f.parameters)==null?void 0:ae.docs)==null?void 0:ne.source}}};var te,se,re;y.parameters={...y.parameters,docs:{...(te=y.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(re=(se=y.parameters)==null?void 0:se.docs)==null?void 0:re.source}}};const Re=["DefaultBanner","DefaultOpenBanner","CustomIdBanner","FlagSlotBanner","ButtonSlotBanner","DefaultSlotBanner","CustomClassesBanner","AriaLabelBanner","HeaderTextBanner","ActionTextBanner"];export{y as ActionTextBanner,b as AriaLabelBanner,m as ButtonSlotBanner,g as CustomClassesBanner,d as CustomIdBanner,l as DefaultBanner,i as DefaultOpenBanner,p as DefaultSlotBanner,u as FlagSlotBanner,f as HeaderTextBanner,Re as __namedExportsOrder,qe as default};
