import{f as C,g as I,b as L,o as i,r as b,c as k,t as U,n as R}from"./vue.esm-bundler-DsKf3Hbt.js";import{B as v}from"./BaseLink-BYp1-IWJ.js";import"./constants-BA52rpFi.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const P=["src","alt"],s={__name:"UsaIdentifierLogo",props:{href:{type:String,default:""},to:{type:[String,Object],default:""},routerComponentName:{type:[String,Object],default:""},src:{type:String,default:""},alt:{type:String,default:""},customClasses:{type:Object,default:()=>({image:[]})}},setup(e){return(h,N)=>(i(),C(L(v),{href:e.href,to:e.to,"router-component-name":e.routerComponentName,class:"usa-identifier__logo"},{default:I(()=>[b(h.$slots,"default",{},()=>{var n;return[e.src?(i(),k("img",{key:0,class:R(["usa-identifier__logo-img",(n=e.customClasses)==null?void 0:n.image]),src:e.src,alt:e.alt,role:"img"},null,10,P)):U("",!0)]})]),_:3},8,["href","to","router-component-name"]))}};s.__docgenInfo={exportName:"default",displayName:"UsaIdentifierLogo",type:1,props:[{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"href",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'""'},{name:"to",global:!1,description:"",tags:[],required:!1,type:"string | Record<string, any>",declarations:[],schema:{kind:"enum",type:"string | Record<string, any>",schema:["string","Record<string, any>"]},default:'""'},{name:"routerComponentName",global:!1,description:"",tags:[],required:!1,type:"string | Record<string, any>",declarations:[],schema:{kind:"enum",type:"string | Record<string, any>",schema:["string","Record<string, any>"]},default:'""'},{name:"customClasses",global:!1,description:"",tags:[],required:!1,type:"Record<string, any>",declarations:[],schema:"Record<string, any>",default:`{
    image: [],
}`},{name:"src",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'""'},{name:"alt",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'""'}],events:[],slots:[{name:"default",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}}],exposed:[{name:"href",type:"string",description:"",declarations:[],schema:"string"},{name:"to",type:"string | Record<string, any>",description:"",declarations:[],schema:{kind:"enum",type:"string | Record<string, any>",schema:["string","Record<string, any>"]}},{name:"routerComponentName",type:"string | Record<string, any>",description:"",declarations:[],schema:{kind:"enum",type:"string | Record<string, any>",schema:["string","Record<string, any>"]}},{name:"customClasses",type:"Record<string, any>",description:"",declarations:[],schema:"Record<string, any>"},{name:"src",type:"string",description:"",declarations:[],schema:"string"},{name:"alt",type:"string",description:"",declarations:[],schema:"string"}],sourceFiles:"/home/runner/work/vue-uswds/vue-uswds/src/components/UsaIdentifierLogo/UsaIdentifierLogo.vue"};const t={href:s.props.href.default,to:s.props.to.default,routerComponentName:s.props.routerComponentName.default,src:s.props.src.default,alt:s.props.alt.default,customClasses:s.props.customClasses.default()},D={component:s,title:"Components/UsaIdentifierLogo",argTypes:{href:{control:{type:"text"}},to:{control:{type:"text"}},routerComponentName:{control:{type:"text"}},src:{control:{type:"text"}},alt:{control:{type:"text"}},customClasses:{control:{type:"object"}},default:{control:{type:"text"}}},args:{href:t.href,to:t.to,routerComponentName:t.routerComponentName,src:t.src,alt:t.alt,default:""},decorators:[()=>({template:'<div class="usa-identifier"><story /></div>'})],render:e=>({components:{UsaIdentifierLogo:s},props:Object.keys(s.props),setup(){return{args:e}},template:`<UsaIdentifierLogo
    :href="args.href"
    :to="args.to"
    :router-component-name="args.routerComponentName"
    :src="args.src"
    :alt="args.alt"
    :custom-classes="args.customClasses"
  >${e.default}</UsaIdentifierLogo>`})},a={args:{...t,src:"/assets/img/circle-gray-20.svg",alt:"Parent agency logo",href:"#"},name:"Default",parameters:{docs:{source:{code:'<UsaIdentifierLogo src="/assets/img/circle-gray-20.svg" alt="Parent agency logo" href="#"></UsaIdentifierLogo>'}}}},r={args:{...t,default:"Your logo here"},name:"Default Slot",parameters:{docs:{source:{code:"<UsaIdentifierLogo>Your logo here</UsaIdentifierLogo>"}}}},o={args:{...t,src:"/assets/img/circle-gray-20.svg",alt:"Parent agency logo",to:"#",customClasses:{image:["custom-image-class"]}},name:"Custom Classes",parameters:{docs:{source:{code:`<UsaIdentifierLogo :custom-classes="{ image: ['custom-image-class'] }" src="/assets/img/circle-gray-20.svg" alt="Parent agency logo" to="#"></UsaIdentifierLogo>`}}}};var c,l,g;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    src: '/assets/img/circle-gray-20.svg',
    alt: 'Parent agency logo',
    href: '#'
  },
  name: 'Default',
  parameters: {
    docs: {
      source: {
        code: \`<UsaIdentifierLogo src="/assets/img/circle-gray-20.svg" alt="Parent agency logo" href="#"></UsaIdentifierLogo>\`
      }
    }
  }
}`,...(g=(l=a.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var d,m,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    default: \`Your logo here\`
  },
  name: 'Default Slot',
  parameters: {
    docs: {
      source: {
        code: \`<UsaIdentifierLogo>Your logo here</UsaIdentifierLogo>\`
      }
    }
  }
}`,...(u=(m=r.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var p,f,y;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    src: '/assets/img/circle-gray-20.svg',
    alt: 'Parent agency logo',
    to: '#',
    customClasses: {
      image: ['custom-image-class']
    }
  },
  name: 'Custom Classes',
  parameters: {
    docs: {
      source: {
        code: \`<UsaIdentifierLogo :custom-classes="{ image: ['custom-image-class'] }" src="/assets/img/circle-gray-20.svg" alt="Parent agency logo" to="#"></UsaIdentifierLogo>\`
      }
    }
  }
}`,...(y=(f=o.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const O=["DefaultIdentifierLogo","DefaultSlotIdentifierLogo","CustomClassesIdentifierLogo"];export{o as CustomClassesIdentifierLogo,a as DefaultIdentifierLogo,r as DefaultSlotIdentifierLogo,O as __namedExportsOrder,D as default};
