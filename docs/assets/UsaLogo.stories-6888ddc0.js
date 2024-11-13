import{c as L,a as b,I as x,g as U,n as c,b as R,o as T,r as N,d as P,v as j}from"./vue.esm-bundler-2e7cedae.js";import{B as S}from"./BaseLink-05a2e488.js";import"./constants-fce87d39.js";import"./_plugin-vue_export-helper-c27b6911.js";const q={class:"usa-logo"},C={__name:"UsaLogo",props:{title:{type:String,default:""},href:{type:String,default:""},to:{type:[String,Object],default:"/"},routerComponentName:{type:[String,Object],default:""},customClasses:{type:Object,default:()=>({text:[],link:[]})}},setup(e){return(k,v)=>{var n,l;return T(),L("div",q,[b("em",{class:c(["usa-logo__text",(n=e.customClasses)==null?void 0:n.text])},[x(R(S),{href:e.href,to:e.to,"router-component-name":e.routerComponentName,title:e.title,class:c((l=e.customClasses)==null?void 0:l.link)},{default:U(()=>[N(k.$slots,"default",{},()=>[P(j(e.title),1)])]),_:3},8,["href","to","router-component-name","title","class"])],2)])}}},t=C;C.__docgenInfo={exportName:"default",displayName:"UsaLogo",type:1,props:[{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"href",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'""'},{name:"to",global:!1,description:"",tags:[],required:!1,type:"string | Record<string, any>",declarations:[],schema:{kind:"enum",type:"string | Record<string, any>",schema:["string","Record<string, any>"]},default:'"/"'},{name:"routerComponentName",global:!1,description:"",tags:[],required:!1,type:"string | Record<string, any>",declarations:[],schema:{kind:"enum",type:"string | Record<string, any>",schema:["string","Record<string, any>"]},default:'""'},{name:"customClasses",global:!1,description:"",tags:[],required:!1,type:"Record<string, any>",declarations:[],schema:"Record<string, any>",default:`() => {
    return {
        text: [],
        link: [],
    };
}`},{name:"title",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'""'}],events:[],slots:[{name:"default",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}}],exposed:[{name:"href",type:"string",description:"",declarations:[],schema:"string"},{name:"to",type:"string | Record<string, any>",description:"",declarations:[],schema:{kind:"enum",type:"string | Record<string, any>",schema:["string","Record<string, any>"]}},{name:"routerComponentName",type:"string | Record<string, any>",description:"",declarations:[],schema:{kind:"enum",type:"string | Record<string, any>",schema:["string","Record<string, any>"]}},{name:"customClasses",type:"Record<string, any>",description:"",declarations:[],schema:"Record<string, any>"},{name:"title",type:"string",description:"",declarations:[],schema:"string"}],sourceFiles:"/home/runner/work/vue-uswds/vue-uswds/src/components/UsaLogo/UsaLogo.vue"};const s={title:t.props.title.default,href:t.props.href.default,to:t.props.to.default,routerComponentName:t.props.routerComponentName.default,customClasses:t.props.customClasses.default()},V={component:t,title:"Components/UsaLogo",argTypes:{title:{control:{type:"text"}},href:{control:{type:"text"}},to:{control:{type:"text"}},routerComponentName:{control:{type:"text"}},customClasses:{control:{type:"object"}},default:{control:{type:"text"}}},args:{title:s.title,href:s.href,to:s.to,routerComponentName:s.routerComponentName,customClasses:s.customClasses,default:""},render:e=>({components:{UsaLogo:t},props:Object.keys(t.props),setup(){return{args:e}},template:`<UsaLogo
    :title="args.title"
    :href="args.href"
    :to="args.to"
    :router-component-name="args.routerComponentName"
    :custom-classes="args.customClasses"
  >${e.default}</UsaLogo>`})},a={args:{...s,title:"Project Title",href:"/test-page"},name:"Default",parameters:{docs:{source:{code:'<UsaLogo title="Project Title" href="/test-page"></UsaLogo>'}}}},o={args:{...s,title:"Project Title",href:"/test-page",customClasses:{text:["test-text-class"],link:["test-link-class"]}},name:"Custom Classes",parameters:{docs:{source:{code:`<UsaLogo title="Project Title" href="/test-page" :custom-classes="{ text: ['test-text-class'], link: ['test-link-class'] }"></UsaLogo>`}}}},r={args:{...s,href:"/test-page",default:"Test Title"},name:"Default Slot",parameters:{docs:{source:{code:'<UsaLogo href="/test-page">Test Title</UsaLogo>'}}}};var i,m,d;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    title: 'Project Title',
    href: '/test-page'
  },
  name: 'Default',
  parameters: {
    docs: {
      source: {
        code: \`<UsaLogo title="Project Title" href="/test-page"></UsaLogo>\`
      }
    }
  }
}`,...(d=(m=a.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var p,u,g;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    title: 'Project Title',
    href: '/test-page',
    customClasses: {
      text: ['test-text-class'],
      link: ['test-link-class']
    }
  },
  name: 'Custom Classes',
  parameters: {
    docs: {
      source: {
        code: \`<UsaLogo title="Project Title" href="/test-page" :custom-classes="{ text: ['test-text-class'], link: ['test-link-class'] }"></UsaLogo>\`
      }
    }
  }
}`,...(g=(u=o.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var f,y,h;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    href: '/test-page',
    default: 'Test Title'
  },
  name: 'Default Slot',
  parameters: {
    docs: {
      source: {
        code: \`<UsaLogo href="/test-page">Test Title</UsaLogo>\`
      }
    }
  }
}`,...(h=(y=r.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};const _=["DefaultLogo","CustomClassesLogo","DefaultSlotLogo"];export{o as CustomClassesLogo,a as DefaultLogo,r as DefaultSlotLogo,_ as __namedExportsOrder,V as default};
