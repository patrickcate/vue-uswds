import{s as L,c as l,G as w,H as U,e as _,o as m,n as u,I as v,g as N,r as I,a as R,b as O}from"./vue.esm-bundler-DlC1_45x.js";import{G as q}from"./constants-BA52rpFi.js";import{B as P}from"./BaseLink-Dtgee05b.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const B={class:"usa-footer__social-links"},$=["src","alt"],o={__name:"UsaFooterSocialLinks",props:{items:{type:Array,default:()=>[]},customClasses:{type:Object,default:()=>({gridCol:[],link:[],icon:[]})}},setup(e){const b=_("vueUswds.gridNamespace",q),d=e,F=L(()=>{var a,c;return(c=(a=d.customClasses)==null?void 0:a.gridCol)!=null&&c.length?d.customClasses.gridCol:[`${b}col-auto`]});return(a,c)=>(m(),l("div",B,[(m(!0),l(w,null,U(e.items,s=>{var p;return m(),l("div",{key:(s==null?void 0:s.id)||s.name,class:u(F.value)},[v(O(P),{to:s.to,href:s.href,class:u(["usa-social-link",(p=e.customClasses)==null?void 0:p.link]),"router-component-name":s.routerComponentName},{default:N(()=>[I(a.$slots,(s==null?void 0:s.id)||s.name.toLowerCase(),{item:s},()=>{var g;return[R("img",{class:u(["usa-social-link__icon",(g=e.customClasses)==null?void 0:g.icon]),src:s.icon,alt:s.name},null,10,$)]})]),_:2},1032,["to","href","class","router-component-name"])],2)}),128))]))}};o.__docgenInfo={exportName:"default",displayName:"UsaFooterSocialLinks",type:1,props:[{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"customClasses",global:!1,description:"",tags:[],required:!1,type:"Record<string, any>",declarations:[],schema:"Record<string, any>",default:`{
    gridCol: [],
    link: [],
    icon: [],
}`},{name:"items",global:!1,description:"",tags:[],required:!1,type:"unknown[]",declarations:[],schema:{kind:"array",type:"unknown[]"},default:"[]"}],events:[],slots:[],exposed:[{name:"customClasses",type:"Record<string, any>",description:"",declarations:[],schema:"Record<string, any>"},{name:"items",type:"unknown[]",description:"",declarations:[],schema:{kind:"array",type:"unknown[]"}}],sourceFiles:"/home/runner/work/vue-uswds/vue-uswds/src/components/UsaFooterSocialLinks/UsaFooterSocialLinks.vue"};const r=[{id:"facebook",name:"Facebook",href:"https://facebook.com",icon:"/assets/img/usa-icons/facebook.svg"},{id:"twitter",name:"Twitter",href:"https://twitter.com",icon:"/assets/img/usa-icons/twitter.svg"},{id:"youtube",name:"YouTube",href:"https://youtube.com",icon:"/assets/img/usa-icons/youtube.svg"},{id:"instagram",name:"Instagram",href:"https://instagram.com",icon:"/assets/img/usa-icons/instagram.svg"},{id:"rss",name:"RSS",href:"#",icon:"/assets/img/usa-icons/rss_feed.svg"}],i={items:o.props.items.default(),customClasses:o.props.customClasses.default()},J={component:o,title:"Components/UsaFooterSocialLinks",argTypes:{items:{control:{type:"object"}},customClasses:{control:{type:"object"}}},items:i.cols,customClasses:i.customClasses,render:e=>({components:{UsaFooterSocialLinks:o},props:Object.keys(o.props),setup(){return{args:e}},template:`<UsaFooterSocialLinks
    class="grid-row grid-gap-1"
    :items="args.items"
    :custom-classes="args.customClasses"
  ></UsaFooterSocialLinks>`})},t={args:{...i,items:r},name:"Default",parameters:{docs:{source:{code:`<UsaFooterSocialLinks :items="${JSON.stringify(r,null,"	")}"></UsaFooterSocialLinks>`}}}},n={args:{...i,items:r,customClasses:{gridCol:["grid-col-auto","test-grid-col-class"],link:["test-link-class"],icon:["test-icon-class"]}},name:"Custom Classes",parameters:{docs:{source:{code:`<UsaFooterSocialLinks :items="${JSON.stringify(r,null,"	")}" :custom-classes="{ gridCol: ['grid-col-auto', 'test-grid-col-class'], link: ['test-link-class'], icon: ['test-icon-class'] }"></UsaFooterSocialLinks>`}}}};var k,f,y;t.parameters={...t.parameters,docs:{...(k=t.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    items: testItems
  },
  name: 'Default',
  parameters: {
    docs: {
      source: {
        code: \`<UsaFooterSocialLinks :items="\${JSON.stringify(testItems, null, '\\t')}"></UsaFooterSocialLinks>\`
      }
    }
  }
}`,...(y=(f=t.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var C,h,S;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    items: testItems,
    customClasses: {
      gridCol: ['grid-col-auto', 'test-grid-col-class'],
      link: ['test-link-class'],
      icon: ['test-icon-class']
    }
  },
  name: 'Custom Classes',
  parameters: {
    docs: {
      source: {
        code: \`<UsaFooterSocialLinks :items="\${JSON.stringify(testItems, null, '\\t')}" :custom-classes="{ gridCol: ['grid-col-auto', 'test-grid-col-class'], link: ['test-link-class'], icon: ['test-icon-class'] }"></UsaFooterSocialLinks>\`
      }
    }
  }
}`,...(S=(h=n.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};const V=["DefaultFooterSocialLinks","CustomClassesFooterSocialLinks"];export{n as CustomClassesFooterSocialLinks,t as DefaultFooterSocialLinks,V as __namedExportsOrder,J as default};
