import{c as n,a as d,H as g,I as y,o,J as b,g as k,d as L,v as h,b as q}from"./vue.esm-bundler-DsKf3Hbt.js";import{B as w}from"./BaseLink-BYp1-IWJ.js";import"./constants-BA52rpFi.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const _=["aria-label"],I={class:"usa-identifier__container"},R={class:"usa-identifier__required-links-list"},r={__name:"UsaIdentifierRequiredLinks",props:{ariaLabel:{type:String,default:"Important links"},items:{type:Array,default:()=>[]}},setup(s){return(v,x)=>(o(),n("nav",{class:"usa-identifier__section usa-identifier__section--required-links","aria-label":s.ariaLabel},[d("div",I,[d("ul",R,[(o(!0),n(g,null,y(s.items,e=>(o(),n("li",{key:(e==null?void 0:e.id)||e.text,class:"usa-identifier__required-links-item"},[b(q(w),{to:e.to,href:e.href,"router-component-name":e.routerComponentName,class:"usa-identifier__required-link usa-link"},{default:k(()=>[L(h(e.text),1)]),_:2},1032,["to","href","router-component-name"])]))),128))])])],8,_))}};r.__docgenInfo={exportName:"default",displayName:"UsaIdentifierRequiredLinks",type:1,props:[{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"ariaLabel",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'"Important links"'},{name:"items",global:!1,description:"",tags:[],required:!1,type:"unknown[]",declarations:[],schema:{kind:"array",type:"unknown[]"},default:"[]"}],events:[],slots:[],exposed:[{name:"ariaLabel",type:"string",description:"",declarations:[],schema:"string"},{name:"items",type:"unknown[]",description:"",declarations:[],schema:{kind:"array",type:"unknown[]"}}],sourceFiles:"/home/runner/work/vue-uswds/vue-uswds/src/components/UsaIdentifierRequiredLinks/UsaIdentifierRequiredLinks.vue"};const a={ariaLabel:r.props.ariaLabel.default,items:[{to:"/about-us",text:"About Us"},{href:"https://www.gsa.gov/website-information/accessibility-aids",text:"Accessibility support"},{href:"https://www.gsa.gov/reference/freedom-of-information-act-foia",text:"FOIA requests"},{href:"https://www.gsa.gov/reference/civil-rights-programs/notification-and-federal-employee-antidiscrimination-and-retaliation-act-of-2002",text:"No FEAR Act data"},{href:"https://www.gsaig.gov/",text:"Office of the Inspector General"},{href:"https://www.gsa.gov/reference/reports/budget-performance",text:"Performance reports"},{href:"https://www.gsa.gov/website-information/website-policies",text:"Privacy policy"}]},A={component:r,title:"Components/UsaIdentifierRequiredLinks",argTypes:{ariaLabel:{control:{type:"text"}},items:{control:{type:"object"}}},args:{ariaLabel:a.ariaLabel,items:a.items},decorators:[()=>({template:'<div class="usa-identifier"><story /></div>'})],render:s=>({components:{UsaIdentifierRequiredLinks:r},props:Object.keys(r.props),setup(){return{args:s}},template:`<UsaIdentifierRequiredLinks
      :aria-label="args.ariaLabel"
      :items="args.items"
    />`})},t={args:{...a},name:"Default",parameters:{docs:{source:{code:`<UsaIdentifierRequiredLinks items="${JSON.stringify(a.items),"	"}"></UsaIdentifierRequiredLinks>`}}}},i={args:{...a,ariaLabel:"Custom aria label"},name:"Custom Aria Label",parameters:{docs:{source:{code:`<UsaIdentifierRequiredLinks aria-label="Custom aria label" items="${JSON.stringify(a.items),"	"}"></UsaIdentifierRequiredLinks>`}}}};var l,c,u;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    ...defaultProps
  },
  name: 'Default',
  parameters: {
    docs: {
      source: {
        code: \`<UsaIdentifierRequiredLinks items="\${JSON.stringify(defaultProps.items), null, '\\t'}"></UsaIdentifierRequiredLinks>\`
      }
    }
  }
}`,...(u=(c=t.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var m,p,f;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    ariaLabel: 'Custom aria label'
  },
  name: 'Custom Aria Label',
  parameters: {
    docs: {
      source: {
        code: \`<UsaIdentifierRequiredLinks aria-label="Custom aria label" items="\${JSON.stringify(defaultProps.items), null, '\\t'}"></UsaIdentifierRequiredLinks>\`
      }
    }
  }
}`,...(f=(p=i.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};const O=["DefaultIdentifierRequiredLinks","CustomAriaLabelIdentifierRequiredLinks"];export{i as CustomAriaLabelIdentifierRequiredLinks,t as DefaultIdentifierRequiredLinks,O as __namedExportsOrder,A as default};
