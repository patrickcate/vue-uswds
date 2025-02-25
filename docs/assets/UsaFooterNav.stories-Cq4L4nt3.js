import{c as v,r as E,e as K,o as n,t as y,H as M,f as b,b as o}from"./vue.esm-bundler-DsKf3Hbt.js";import{_ as z}from"./UsaFooterMenu-37wYwo_w.js";import{_ as G}from"./UsaFooterCollapsibleMenu-CUv3lryn.js";import"./constants-BA52rpFi.js";import"./BaseLink-BYp1-IWJ.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./index-BIJogqLd.js";import"./index-CipSGTa_.js";import"./useAccordion-BoT-GOBU.js";import"./UsaFooterCollapsibleMenuSection-cnohMGYQ.js";import"./unique-id-ZGF68Crf.js";import"./common-cfad2wKl.js";import"./BaseHeading-CVYvBzV4.js";const Q=["aria-label"],a={__name:"UsaFooterNav",props:{ariaLabel:{type:String,default:"Footer navigation"},items:{type:Array,default:()=>[]},collapsibleHeadingTag:{type:String,default:"h4"},customClasses:{type:Object,default:()=>({gridRow:[],gridCol:[]})}},setup(t){const f=K("footerVariant","medium");return(A,W)=>(n(),v("nav",{class:"usa-footer__nav","aria-label":t.ariaLabel},[E(A.$slots,"default",{items:t.items},()=>[t.items.length?(n(),v(M,{key:0},[o(f)==="big"?(n(),b(o(G),{key:0,items:t.items,"heading-tag":t.collapsibleHeadingTag,"custom-classes":t.customClasses},null,8,["items","heading-tag","custom-classes"])):o(f)==="medium"||o(f)==="slim"?(n(),b(o(z),{key:1,items:t.items,"custom-classes":t.customClasses},null,8,["items","custom-classes"])):y("",!0)],64)):y("",!0)])],8,Q))}};a.__docgenInfo={exportName:"default",displayName:"UsaFooterNav",type:1,props:[{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"customClasses",global:!1,description:"",tags:[],required:!1,type:"Record<string, any>",declarations:[],schema:"Record<string, any>",default:`{
    gridRow: [],
    gridCol: [],
}`},{name:"ariaLabel",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'"Footer navigation"'},{name:"items",global:!1,description:"",tags:[],required:!1,type:"unknown[]",declarations:[],schema:{kind:"array",type:"unknown[]"},default:"[]"},{name:"collapsibleHeadingTag",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'"h4"'}],events:[],slots:[{name:"default",type:"{ items: unknown[]; }",description:"",declarations:[],schema:{kind:"object",type:"{ items: unknown[]; }"}}],exposed:[{name:"customClasses",type:"Record<string, any>",description:"",declarations:[],schema:"Record<string, any>"},{name:"ariaLabel",type:"string",description:"",declarations:[],schema:"string"},{name:"items",type:"unknown[]",description:"",declarations:[],schema:{kind:"array",type:"unknown[]"}},{name:"collapsibleHeadingTag",type:"string",description:"",declarations:[],schema:"string"}],sourceFiles:"/home/runner/work/vue-uswds/vue-uswds/src/components/UsaFooterNav/UsaFooterNav.vue"};const s=[{href:"/test-1",text:"Test Item 1"},{to:"/test-2",text:"Test Item 2"},{id:"test-3",href:"/test-3",text:"Test Item 3"},{id:"test-4",href:"/test-4",text:"Test Item 4"}],r=[{text:"Test Item 1",children:[{href:"/test-1/test-1-1",text:"Test Item 1.1"},{href:"/test-1/test-1-2",text:"Test Item 1.2"},{href:"/test-1/test-1-3",text:"Test Item 1.3"}]},{text:"Test Item 2",children:[{href:"/test-2/test-2-1",text:"Test Item 2.1"},{href:"/test-2/test-2-2",text:"Test Item 2.2"},{href:"/test-2/test-2-3",text:"Test Item 2.3"}]},{id:"test-3",text:"Test Item 3",children:[{href:"/test-3/test-3-1",text:"Test Item 3.1"},{href:"/test-3/test-3-2",text:"Test Item 3.2"},{href:"/test-3/test-3-3",text:"Test Item 3.3"}]}],e={ariaLabel:a.props.ariaLabel.default,items:a.props.items.default(),collapsibleHeadingTag:a.props.collapsibleHeadingTag.default,customClasses:a.props.customClasses.default()},ce={component:a,title:"Components/UsaFooterNav",argTypes:{ariaLabel:{control:{type:"text"}},items:{control:{type:"object"}},collapsibleHeadingTag:{control:{type:"text"}},customClasses:{control:{type:"object"}},default:{control:{type:"text"}}},args:{ariaLabel:e.ariaLabel,items:e.items,collapsibleHeadingTag:e.collapsibleHeadingTag,customClasses:e.customClasses,default:""},render:t=>({components:{UsaFooterNav:a},props:Object.keys(a.props),setup(){return{args:t}},template:`<UsaFooterNav
    :aria-label="args.ariaLabel"
    :items="args.items"
    :collapsible-heading-tag="args.collapsibleHeadingTag"
    :custom-classes="args.customClasses"
  >
    <template v-if="!!args.default" #default="{ items }">${t.default}</template>
  </UsaFooterNav>`})},i={args:{...e,items:s},name:"Default",parameters:{docs:{source:{code:`<UsaFooterNav :items="${JSON.stringify(s,null,"	")}"></UsaFooterNav>`}}}},l={args:{...e,items:r},decorators:[()=>({template:'<div class="usa-footer usa-footer--big"><story /></div>',provide:{footerVariant:"big"}})],parameters:{docs:{source:{code:`<UsaFooterNav :items="${JSON.stringify(s,null,"	")}"></UsaFooterNav>`}}}},m={args:{...e,items:s},decorators:[()=>({template:'<div class="usa-footer"><story /></div>'})],parameters:{docs:{source:{code:`<UsaFooterNav :items="${JSON.stringify(s,null,"	")}"></UsaFooterNav>`}}}},c={args:{...e,items:s},decorators:[()=>({template:'<div class="usa-footer usa-footer--slim"><story /></div>',provide:{footerVariant:"slim"}})],parameters:{docs:{source:{code:`<UsaFooterNav :items="${JSON.stringify(s,null,"	")}"></UsaFooterNav>`}}}},d={args:{...e,ariaLabel:"Custom aria label",items:s},name:"Custom Aria Label",parameters:{docs:{source:{code:`<UsaFooterNav aria-label="Custom aria label" :items="${JSON.stringify(s,null,"	")}"></UsaFooterNav>`}}}},u={args:{...e,collapsibleHeadingTag:"h2",items:r},decorators:[()=>({template:'<div class="usa-footer usa-footer--big"><story /></div>',provide:{footerVariant:"big"}})],name:"Collapsible Heading Tag",parameters:{docs:{source:{code:`<UsaFooterNav collapsible-heading-tag="h2" :items="${JSON.stringify(r,null,"	")}"></UsaFooterNav>`}}}},p={args:{...e,items:r,default:"<em>{{ items[0].text }}</em>"},decorators:[()=>({template:'<div class="usa-footer"><story /></div>'})],name:"Default Scoped Slot",parameters:{docs:{source:{code:`<UsaFooterNav :items="${JSON.stringify(r,null,"	")}"><template #default="{ items }"><em>{{ items[0].text }}</em></template></UsaFooterNav>`}}}},g={args:{...e,items:s,customClasses:{gridRow:["test-grid-row-class"],gridCol:["test-grid-col-class"]}},decorators:[()=>({template:'<div class="usa-footer"><story /></div>'})],name:"Custom Classes",parameters:{docs:{source:{code:`<UsaFooterNav :items="${JSON.stringify(s,null,"	")}" :custom-classes="{ gridRow: ['test-grid-row-class'], gridCol: ['test-grid-col-class'] }"></UsaFooterNav>`}}}};var N,F,h;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    items: testItems
  },
  name: 'Default',
  parameters: {
    docs: {
      source: {
        code: \`<UsaFooterNav :items="\${JSON.stringify(testItems, null, '\\t')}"></UsaFooterNav>\`
      }
    }
  }
}`,...(h=(F=i.parameters)==null?void 0:F.docs)==null?void 0:h.source}}};var C,U,S;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    items: testCollapsibleItems
  },
  decorators: [() => ({
    template: '<div class="usa-footer usa-footer--big"><story /></div>',
    provide: {
      footerVariant: 'big'
    }
  })],
  parameters: {
    docs: {
      source: {
        code: \`<UsaFooterNav :items="\${JSON.stringify(testItems, null, '\\t')}"></UsaFooterNav>\`
      }
    }
  }
}`,...(S=(U=l.parameters)==null?void 0:U.docs)==null?void 0:S.source}}};var I,T,k;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    items: testItems
  },
  decorators: [() => ({
    template: '<div class="usa-footer"><story /></div>'
  })],
  parameters: {
    docs: {
      source: {
        code: \`<UsaFooterNav :items="\${JSON.stringify(testItems, null, '\\t')}"></UsaFooterNav>\`
      }
    }
  }
}`,...(k=(T=m.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};var x,w,O;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    items: testItems
  },
  decorators: [() => ({
    template: '<div class="usa-footer usa-footer--slim"><story /></div>',
    provide: {
      footerVariant: 'slim'
    }
  })],
  parameters: {
    docs: {
      source: {
        code: \`<UsaFooterNav :items="\${JSON.stringify(testItems, null, '\\t')}"></UsaFooterNav>\`
      }
    }
  }
}`,...(O=(w=c.parameters)==null?void 0:w.docs)==null?void 0:O.source}}};var $,H,J;d.parameters={...d.parameters,docs:{...($=d.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    ariaLabel: 'Custom aria label',
    items: testItems
  },
  name: 'Custom Aria Label',
  parameters: {
    docs: {
      source: {
        code: \`<UsaFooterNav aria-label="Custom aria label" :items="\${JSON.stringify(testItems, null, '\\t')}"></UsaFooterNav>\`
      }
    }
  }
}`,...(J=(H=d.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var L,R,P;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    collapsibleHeadingTag: 'h2',
    items: testCollapsibleItems
  },
  decorators: [() => ({
    template: '<div class="usa-footer usa-footer--big"><story /></div>',
    provide: {
      footerVariant: 'big'
    }
  })],
  name: 'Collapsible Heading Tag',
  parameters: {
    docs: {
      source: {
        code: \`<UsaFooterNav collapsible-heading-tag="h2" :items="\${JSON.stringify(testCollapsibleItems, null, '\\t')}"></UsaFooterNav>\`
      }
    }
  }
}`,...(P=(R=u.parameters)==null?void 0:R.docs)==null?void 0:P.source}}};var V,q,D;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    items: testCollapsibleItems,
    default: \`<em>{{ items[0].text }}</em>\`
  },
  decorators: [() => ({
    template: '<div class="usa-footer"><story /></div>'
  })],
  name: 'Default Scoped Slot',
  parameters: {
    docs: {
      source: {
        code: \`<UsaFooterNav :items="\${JSON.stringify(testCollapsibleItems, null, '\\t')}"><template #default="{ items }"><em>{{ items[0].text }}</em></template></UsaFooterNav>\`
      }
    }
  }
}`,...(D=(q=p.parameters)==null?void 0:q.docs)==null?void 0:D.source}}};var _,j,B;g.parameters={...g.parameters,docs:{...(_=g.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    items: testItems,
    customClasses: {
      gridRow: ['test-grid-row-class'],
      gridCol: ['test-grid-col-class']
    }
  },
  decorators: [() => ({
    template: '<div class="usa-footer"><story /></div>'
  })],
  name: 'Custom Classes',
  parameters: {
    docs: {
      source: {
        code: \`<UsaFooterNav :items="\${JSON.stringify(testItems, null, '\\t')}" :custom-classes="{ gridRow: ['test-grid-row-class'], gridCol: ['test-grid-col-class'] }"></UsaFooterNav>\`
      }
    }
  }
}`,...(B=(j=g.parameters)==null?void 0:j.docs)==null?void 0:B.source}}};const de=["DefaultFooterNav","BigFooterNav","MediumFooterNav","SlimFooterNav","AriaLabelFooterNav","CollapsibleHeadingTagFooterNav","DefaultScopedSlotFooterNav","CustomClassesFooterNav"];export{d as AriaLabelFooterNav,l as BigFooterNav,u as CollapsibleHeadingTagFooterNav,g as CustomClassesFooterNav,i as DefaultFooterNav,p as DefaultScopedSlotFooterNav,m as MediumFooterNav,c as SlimFooterNav,de as __namedExportsOrder,ce as default};
