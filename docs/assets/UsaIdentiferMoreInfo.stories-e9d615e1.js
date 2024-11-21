import{c as g,a as s,v as o,d as y,o as k}from"./vue.esm-bundler-d9807bdf.js";const I=["aria-label"],b={class:"usa-identifier__container"},U={class:"usa-identifier__usagov-description"},x=["href"],m={__name:"UsaIdentiferMoreInfo",props:{ariaLabel:{type:String,default:"U.S. government information and services"},description:{type:String,default:"Looking for U.S. government information and services?"},linkText:{type:String,default:"Visit USA.gov"},linkUrl:{type:String,default:"https://www.usa.gov"}},setup(n){return(v,i)=>(k(),g("section",{class:"usa-identifier__section usa-identifier__section--usagov","aria-label":n.ariaLabel},[s("div",b,[s("div",U,o(n.description),1),i[0]||(i[0]=y("  ")),s("a",{href:n.linkUrl,class:"usa-link"},o(n.linkText),9,x)])],8,I))}},e=m;m.__docgenInfo={exportName:"default",displayName:"UsaIdentiferMoreInfo",type:1,props:[{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"description",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'"Looking for U.S. government information and services?"'},{name:"ariaLabel",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'"U.S. government information and services"'},{name:"linkText",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'"Visit USA.gov"'},{name:"linkUrl",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'"https://www.usa.gov"'}],events:[],slots:[],exposed:[{name:"description",type:"string",description:"",declarations:[],schema:"string"},{name:"ariaLabel",type:"string",description:"",declarations:[],schema:"string"},{name:"linkText",type:"string",description:"",declarations:[],schema:"string"},{name:"linkUrl",type:"string",description:"",declarations:[],schema:"string"}],sourceFiles:"/home/runner/work/vue-uswds/vue-uswds/src/components/UsaIdentiferMoreInfo/UsaIdentiferMoreInfo.vue"};const t={ariaLabel:e.props.ariaLabel.default,description:e.props.description.default,linkText:e.props.linkText.default,linkUrl:e.props.linkUrl.default},_={component:e,title:"Components/UsaIdentiferMoreInfo",argTypes:{ariaLabel:{control:{type:"text"}},description:{control:{type:"text"}},linkText:{control:{type:"text"}},linkUrl:{control:{type:"text"}}},args:{ariaLabel:t.ariaLabel,description:t.description,linkText:t.linkText,linkUrl:t.linkUrl},decorators:[()=>({template:'<div class="usa-identifier"><story /></div>'})],render:n=>({components:{UsaIdentiferMoreInfo:e},props:Object.keys(e.props),setup(){return{args:n}},template:`<UsaIdentiferMoreInfo
      :aria-label="args.ariaLabel"
      :description="args.description"
      :link-text="args.linkText"
      :link-url="args.linkUrl"
    />`})},r={args:{...t},name:"Default",parameters:{docs:{source:{code:"<UsaIdentiferMoreInfo></UsaIdentiferMoreInfo>"}}}},a={args:{...t,ariaLabel:"Custom aria-label",description:"Custom description",linkText:"Custom link",linkUrl:"/custom-url"},name:"Custom Text",parameters:{docs:{source:{code:'<UsaIdentiferMoreInfo aria-label="Custom aria-label" description="Custom description" link-text="Custom link" link-url="/custom-url"></UsaIdentiferMoreInfo>'}}}};var l,d,c;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    ...defaultProps
  },
  name: 'Default',
  parameters: {
    docs: {
      source: {
        code: \`<UsaIdentiferMoreInfo></UsaIdentiferMoreInfo>\`
      }
    }
  }
}`,...(c=(d=r.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var p,u,f;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    ariaLabel: 'Custom aria-label',
    description: 'Custom description',
    linkText: 'Custom link',
    linkUrl: '/custom-url'
  },
  name: 'Custom Text',
  parameters: {
    docs: {
      source: {
        code: \`<UsaIdentiferMoreInfo aria-label="Custom aria-label" description="Custom description" link-text="Custom link" link-url="/custom-url"></UsaIdentiferMoreInfo>\`
      }
    }
  }
}`,...(f=(u=a.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};const C=["DefaultIdentiferMoreInfo","CustomTextIdentiferMoreInfo"];export{a as CustomTextIdentiferMoreInfo,r as DefaultIdentiferMoreInfo,C as __namedExportsOrder,_ as default};
