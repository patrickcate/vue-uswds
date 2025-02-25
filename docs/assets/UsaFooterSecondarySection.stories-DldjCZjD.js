import{s as f,c as g,a as C,r as F,n as h,e as U,o as _}from"./vue.esm-bundler-DsKf3Hbt.js";import{G as b}from"./constants-BA52rpFi.js";const k={class:"usa-footer__secondary-section"},e={__name:"UsaFooterSecondarySection",props:{customClasses:{type:Object,default:()=>({container:[]})}},setup(o){const y=U("vueUswds.gridNamespace",b),c=o,S=f(()=>{var s,a;return(a=(s=c.customClasses)==null?void 0:s.container)!=null&&a.length?c.customClasses.container:[`${y}container`]});return(s,a)=>(_(),g("div",k,[C("div",{class:h(S.value)},[F(s.$slots,"default")],2)]))}};e.__docgenInfo={exportName:"default",displayName:"UsaFooterSecondarySection",type:1,props:[{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"customClasses",global:!1,description:"",tags:[],required:!1,type:"Record<string, any>",declarations:[],schema:"Record<string, any>",default:`{
    container: [],
}`}],events:[],slots:[{name:"default",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}}],exposed:[{name:"customClasses",type:"Record<string, any>",description:"",declarations:[],schema:"Record<string, any>"}],sourceFiles:"/home/runner/work/vue-uswds/vue-uswds/src/components/UsaFooterSecondarySection/UsaFooterSecondarySection.vue"};const r={customClasses:e.props.customClasses.default()},w={component:e,title:"Components/UsaFooterSecondarySection",argTypes:{customClasses:{control:{type:"object"}},default:{control:{type:"text"}}},args:{customClasses:r.customClasses,default:""},render:o=>({components:{UsaFooterSecondarySection:e},props:Object.keys(e.props),setup(){return{args:o}},template:`<UsaFooterSecondarySection :custom-classes="args.customClasses">${o.default}</UsaFooterSecondarySection>`})},t={args:{...r,default:"Footer secondary content here"},name:"Default",parameters:{docs:{source:{code:"<UsaFooterSecondarySection>Footer secondary content here</UsaFooterSecondarySection>"}}}},n={args:{...r,default:"Footer secondary content here",customClasses:{container:["test-container-class"]}},name:"Custom CSS Classes",parameters:{docs:{source:{code:`<UsaFooterSecondarySection :custom-classes="{ container: ['test-container-class'] }">Footer secondary content here</UsaFooterSecondarySection>`}}}};var d,i,l;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(l=(i=t.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var u,m,p;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(p=(m=n.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const N=["DefaultFooterSecondarySection","CustomClassesFooterSecondarySection"];export{n as CustomClassesFooterSecondarySection,t as DefaultFooterSecondarySection,N as __namedExportsOrder,w as default};
