import{s as d,M as D,c as V,a as f,r as g,n as F,e as $,o as E,v as O}from"./vue.esm-bundler-DsKf3Hbt.js";import{G as M}from"./constants-BA52rpFi.js";const I={href:"#"},o={__name:"UsaFooter",props:{variant:{type:String,default:"medium",validator(e){const n=["big","medium","slim"].includes(e);return n||console.warn(`'${e}' is not a valid footer variant`),n}},jumpLinkText:{type:String,default:"Return to top"},customClasses:{type:Object,default:()=>({container:[]})}},setup(e){const n=$("vueUswds.gridNamespace",M),a=e,B=d(()=>[{"usa-footer--big":a.variant==="big","usa-footer--medium":a.variant==="medium","usa-footer--slim":a.variant==="slim"}]),N=d(()=>{var s,p;return(p=(s=a.customClasses)==null?void 0:s.container)!=null&&p.length?a.customClasses.container:[`${n}container`]});return D("footerVariant",d(()=>a.variant)),(s,p)=>(E(),V("footer",{class:F(["usa-footer",B.value])},[f("div",{class:F(["usa-footer__return-to-top",N.value])},[g(s.$slots,"jump-link",{},()=>[f("a",I,O(e.jumpLinkText),1)])],2),g(s.$slots,"default")],2))}};o.__docgenInfo={exportName:"default",displayName:"UsaFooter",type:1,props:[{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"customClasses",global:!1,description:"",tags:[],required:!1,type:"Record<string, any>",declarations:[],schema:"Record<string, any>",default:`() => {
    return {
        container: [],
    };
}`},{name:"variant",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'"medium"'},{name:"jumpLinkText",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'"Return to top"'}],events:[],slots:[{name:"jump-link",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}},{name:"default",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}}],exposed:[{name:"customClasses",type:"Record<string, any>",description:"",declarations:[],schema:"Record<string, any>"},{name:"variant",type:"string",description:"",declarations:[],schema:"string"},{name:"jumpLinkText",type:"string",description:"",declarations:[],schema:"string"}],sourceFiles:"/home/runner/work/vue-uswds/vue-uswds/src/components/UsaFooter/UsaFooter.vue"};const t={variant:o.props.variant.default,jumpLinkText:o.props.jumpLinkText.default,customClasses:o.props.customClasses.default()},K={component:o,title:"Components/UsaFooter",argTypes:{variant:{options:["big","medium","slim"],control:{type:"select"}},jumpLinkText:{control:{type:"text"}},customClasses:{control:{type:"object"}},default:{control:{type:"text"}},"jump-link":{control:{type:"text"}}},args:{variant:t.variant,jumpLinkText:t.jumpLinkText,customClasses:t.customClasses,default:"","jump-link":""},render:e=>({components:{UsaFooter:o},props:Object.keys(o.props),setup(){return{args:e}},template:`<UsaFooter
    :variant="args.variant"
    :jump-link-text="args.jumpLinkText"
    :custom-classes="args.customClasses"
  >
    <template v-if="!!args['jump-link']" #jump-link>${e["jump-link"]}</template>
    <template v-if="!!args.default" #default>${e.default}</template>
  </UsaFooter>`})},r={args:{...t,default:"Footer content here"},name:"Default (Medium)",parameters:{docs:{source:{code:"<UsaFooter>Footer content here</UsaFooter>"}}}},c={args:{...t,variant:"big",default:"Footer content here"},name:"Big",parameters:{docs:{source:{code:'<UsaFooter variant="big">Footer content here</UsaFooter>'}}}},i={args:{...t,variant:"slim",default:"Footer content here"},name:"Slim",parameters:{docs:{source:{code:'<UsaFooter variant="slim">Footer content here</UsaFooter>'}}}},m={args:{...t,jumpLinkText:"Custom jump link text",default:"Footer content here"},name:"Jump Link Text",parameters:{docs:{source:{code:'<UsaFooter jump-link-text="Custom jump link text">Footer content here</UsaFooter>'}}}},l={args:{...t,default:"Footer content here","jump-link":"<em>Jump link slot</em>"},name:"Jump Link Slot",parameters:{docs:{source:{code:"<UsaFooter><template #jump-link><em>Jump link slot</em></template><template #default>Footer content here</template></UsaFooter>"}}}},u={args:{...t,default:"Footer content here",customClasses:{container:["custom-container-class"]}},name:"Custom Classes",parameters:{docs:{source:{code:`<UsaFooter :custom-classes="{ container: ['custom-container-class'] }">Footer content here</UsaFooter>`}}}};var k,y,h;r.parameters={...r.parameters,docs:{...(k=r.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    default: 'Footer content here'
  },
  name: 'Default (Medium)',
  parameters: {
    docs: {
      source: {
        code: \`<UsaFooter>Footer content here</UsaFooter>\`
      }
    }
  }
}`,...(h=(y=r.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var v,j,U;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    variant: 'big',
    default: 'Footer content here'
  },
  name: 'Big',
  parameters: {
    docs: {
      source: {
        code: \`<UsaFooter variant="big">Footer content here</UsaFooter>\`
      }
    }
  }
}`,...(U=(j=c.parameters)==null?void 0:j.docs)==null?void 0:U.source}}};var C,x,b;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    variant: 'slim',
    default: 'Footer content here'
  },
  name: 'Slim',
  parameters: {
    docs: {
      source: {
        code: \`<UsaFooter variant="slim">Footer content here</UsaFooter>\`
      }
    }
  }
}`,...(b=(x=i.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var L,S,T;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    jumpLinkText: 'Custom jump link text',
    default: 'Footer content here'
  },
  name: 'Jump Link Text',
  parameters: {
    docs: {
      source: {
        code: \`<UsaFooter jump-link-text="Custom jump link text">Footer content here</UsaFooter>\`
      }
    }
  }
}`,...(T=(S=m.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};var _,J,P;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    default: 'Footer content here',
    'jump-link': '<em>Jump link slot</em>'
  },
  name: 'Jump Link Slot',
  parameters: {
    docs: {
      source: {
        code: \`<UsaFooter><template #jump-link><em>Jump link slot</em></template><template #default>Footer content here</template></UsaFooter>\`
      }
    }
  }
}`,...(P=(J=l.parameters)==null?void 0:J.docs)==null?void 0:P.source}}};var R,q,w;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    default: 'Footer content here',
    customClasses: {
      container: ['custom-container-class']
    }
  },
  name: 'Custom Classes',
  parameters: {
    docs: {
      source: {
        code: \`<UsaFooter :custom-classes="{ container: ['custom-container-class'] }">Footer content here</UsaFooter>\`
      }
    }
  }
}`,...(w=(q=u.parameters)==null?void 0:q.docs)==null?void 0:w.source}}};const z=["DefaultFooter","BigFooter","SlimFooter","JumpLinkTextFooter","JumpLinkFooterSlot","CustomClassesFooter"];export{c as BigFooter,u as CustomClassesFooter,r as DefaultFooter,l as JumpLinkFooterSlot,m as JumpLinkTextFooter,i as SlimFooter,z as __namedExportsOrder,K as default};
