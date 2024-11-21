import{s as g,c as C,a as F,r as h,n as U,e as _,o as b}from"./vue.esm-bundler-d9807bdf.js";import{G as k}from"./constants-fce87d39.js";const v={class:"usa-footer__secondary-section"},y={__name:"UsaFooterSecondarySection",props:{customClasses:{type:Object,default:()=>({container:[]})}},setup(e){const S=_("vueUswds.gridNamespace",k),c=e,f=g(()=>{var o,a;return(a=(o=c.customClasses)==null?void 0:o.container)!=null&&a.length?c.customClasses.container:[`${S}container`]});return(o,a)=>(b(),C("div",v,[F("div",{class:U(f.value)},[h(o.$slots,"default")],2)]))}},n=y;y.__docgenInfo={exportName:"default",displayName:"UsaFooterSecondarySection",type:1,props:[{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"customClasses",global:!1,description:"",tags:[],required:!1,type:"Record<string, any>",declarations:[],schema:"Record<string, any>",default:`{
    container: [],
}`}],events:[],slots:[{name:"default",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}}],exposed:[{name:"customClasses",type:"Record<string, any>",description:"",declarations:[],schema:"Record<string, any>"}],sourceFiles:"/home/runner/work/vue-uswds/vue-uswds/src/components/UsaFooterSecondarySection/UsaFooterSecondarySection.vue"};const r={customClasses:n.props.customClasses.default()},N={component:n,title:"Components/UsaFooterSecondarySection",argTypes:{customClasses:{control:{type:"object"}},default:{control:{type:"text"}}},args:{customClasses:r.customClasses,default:""},render:e=>({components:{UsaFooterSecondarySection:n},props:Object.keys(n.props),setup(){return{args:e}},template:`<UsaFooterSecondarySection :custom-classes="args.customClasses">${e.default}</UsaFooterSecondarySection>`})},s={args:{...r,default:"Footer secondary content here"},name:"Default",parameters:{docs:{source:{code:"<UsaFooterSecondarySection>Footer secondary content here</UsaFooterSecondarySection>"}}}},t={args:{...r,default:"Footer secondary content here",customClasses:{container:["test-container-class"]}},name:"Custom CSS Classes",parameters:{docs:{source:{code:`<UsaFooterSecondarySection :custom-classes="{ container: ['test-container-class'] }">Footer secondary content here</UsaFooterSecondarySection>`}}}};var d,i,l;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    default: 'Footer secondary content here'
  },
  name: 'Default',
  parameters: {
    docs: {
      source: {
        code: \`<UsaFooterSecondarySection>Footer secondary content here</UsaFooterSecondarySection>\`
      }
    }
  }
}`,...(l=(i=s.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var u,m,p;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    default: 'Footer secondary content here',
    customClasses: {
      container: ['test-container-class']
    }
  },
  name: 'Custom CSS Classes',
  parameters: {
    docs: {
      source: {
        code: \`<UsaFooterSecondarySection :custom-classes="{ container: ['test-container-class'] }">Footer secondary content here</UsaFooterSecondarySection>\`
      }
    }
  }
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const P=["DefaultFooterSecondarySection","CustomClassesFooterSecondarySection"];export{t as CustomClassesFooterSecondarySection,s as DefaultFooterSecondarySection,P as __namedExportsOrder,N as default};
