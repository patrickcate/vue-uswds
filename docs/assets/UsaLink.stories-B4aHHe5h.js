import{s as h,f as x,g as b,n as L,b as U,o as _,r as v}from"./vue.esm-bundler-DlC1_45x.js";import{B as C}from"./BaseLink-Dtgee05b.js";import"./constants-BA52rpFi.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const e={__name:"UsaLink",props:{alt:{type:Boolean,default:!1},external:{type:Boolean,default:!1}},setup(t){const o=t,y=h(()=>[{"usa-link--alt":o.alt,"usa-link--external":o.external}]);return(g,q)=>(_(),x(U(C),{class:L(["usa-link",y.value])},{default:b(()=>[v(g.$slots,"default")]),_:3},8,["class"]))}};e.__docgenInfo={exportName:"default",displayName:"UsaLink",type:1,props:[{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"alt",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]},default:"false"},{name:"external",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]},default:"false"}],events:[],slots:[{name:"default",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}}],exposed:[{name:"alt",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"external",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}}],sourceFiles:"/home/runner/work/vue-uswds/vue-uswds/src/components/UsaLink/UsaLink.vue"};const a={alt:e.props.alt.default,external:e.props.external.default},N={component:e,title:"Components/UsaLink",argTypes:{alt:{control:{type:"boolean"}},external:{control:{type:"boolean"}},href:{control:{type:"text"}},to:{control:{type:"text"}},routerComponentName:{control:{type:"text"}},default:{control:{type:"text"}}},args:{href:"/test-page",to:"",routerComponentName:"",alt:a.alt,external:a.external,default:"Test"},render:t=>({components:{UsaLink:e},props:Object.keys(e.props),setup(){return{args:t}},template:`<UsaLink
    :alt="args.alt"
    :external="args.external"
    :href="args.href"
    :to="args.to"
    :router-component-name="args.routerComponentName"
   >${t.default}</UsaLink>`})},n={args:{...a},name:"Default",parameters:{docs:{source:{code:'<UsaLink href="/test-page">Test</UsaLink>'}}}},s={args:{...a,alt:!0},decorators:[()=>({template:'<div class="usa-dark-background"><story /></div>'})],name:"Alt",parameters:{docs:{source:{code:'<UsaLink :alt="true" href="/test-page">Test</UsaLink>'}}}},r={args:{...a,external:!0},name:"External",parameters:{docs:{source:{code:'<UsaLink :external="true" href="/test-page">Test</UsaLink>'}}}};var l,c,p;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    ...defaultProps
  },
  name: 'Default',
  parameters: {
    docs: {
      source: {
        code: \`<UsaLink href="/test-page">Test</UsaLink>\`
      }
    }
  }
}`,...(p=(c=n.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var i,d,u;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    alt: true
  },
  decorators: [() => ({
    template: '<div class="usa-dark-background"><story /></div>'
  })],
  name: 'Alt',
  parameters: {
    docs: {
      source: {
        code: \`<UsaLink :alt="true" href="/test-page">Test</UsaLink>\`
      }
    }
  }
}`,...(u=(d=s.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var m,f,k;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    external: true
  },
  name: 'External',
  parameters: {
    docs: {
      source: {
        code: \`<UsaLink :external="true" href="/test-page">Test</UsaLink>\`
      }
    }
  }
}`,...(k=(f=r.parameters)==null?void 0:f.docs)==null?void 0:k.source}}};const E=["DefaultLink","AltLink","ExternalLink"];export{s as AltLink,n as DefaultLink,r as ExternalLink,E as __namedExportsOrder,N as default};
