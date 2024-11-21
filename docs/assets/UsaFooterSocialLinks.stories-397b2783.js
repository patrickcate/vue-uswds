import{s as w,c as l,G as U,H as _,e as v,o as m,n as u,I as N,g as I,r as R,a as O,b as q}from"./vue.esm-bundler-d9807bdf.js";import{G as P}from"./constants-fce87d39.js";import{B}from"./BaseLink-378e51d3.js";import"./_plugin-vue_export-helper-c27b6911.js";const $={class:"usa-footer__social-links"},j=["src","alt"],b={__name:"UsaFooterSocialLinks",props:{items:{type:Array,default:()=>[]},customClasses:{type:Object,default:()=>({gridCol:[],link:[],icon:[]})}},setup(e){const F=v("vueUswds.gridNamespace",P),d=e,L=w(()=>{var a,c;return(c=(a=d.customClasses)==null?void 0:a.gridCol)!=null&&c.length?d.customClasses.gridCol:[`${F}col-auto`]});return(a,c)=>(m(),l("div",$,[(m(!0),l(U,null,_(e.items,s=>{var p;return m(),l("div",{key:(s==null?void 0:s.id)||s.name,class:u(L.value)},[N(q(B),{to:s.to,href:s.href,class:u(["usa-social-link",(p=e.customClasses)==null?void 0:p.link]),"router-component-name":s.routerComponentName},{default:I(()=>[R(a.$slots,(s==null?void 0:s.id)||s.name.toLowerCase(),{item:s},()=>{var g;return[O("img",{class:u(["usa-social-link__icon",(g=e.customClasses)==null?void 0:g.icon]),src:s.icon,alt:s.name},null,10,j)]})]),_:2},1032,["to","href","class","router-component-name"])],2)}),128))]))}},o=b;b.__docgenInfo={exportName:"default",displayName:"UsaFooterSocialLinks",type:1,props:[{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"customClasses",global:!1,description:"",tags:[],required:!1,type:"Record<string, any>",declarations:[],schema:"Record<string, any>",default:`{
    gridCol: [],
    link: [],
    icon: [],
}`},{name:"items",global:!1,description:"",tags:[],required:!1,type:"unknown[]",declarations:[],schema:{kind:"array",type:"unknown[]"},default:"[]"}],events:[],slots:[],exposed:[{name:"customClasses",type:"Record<string, any>",description:"",declarations:[],schema:"Record<string, any>"},{name:"items",type:"unknown[]",description:"",declarations:[],schema:{kind:"array",type:"unknown[]"}}],sourceFiles:"/home/runner/work/vue-uswds/vue-uswds/src/components/UsaFooterSocialLinks/UsaFooterSocialLinks.vue"};const r=[{id:"facebook",name:"Facebook",href:"https://facebook.com",icon:"/assets/img/usa-icons/facebook.svg"},{id:"twitter",name:"Twitter",href:"https://twitter.com",icon:"/assets/img/usa-icons/twitter.svg"},{id:"youtube",name:"YouTube",href:"https://youtube.com",icon:"/assets/img/usa-icons/youtube.svg"},{id:"instagram",name:"Instagram",href:"https://instagram.com",icon:"/assets/img/usa-icons/instagram.svg"},{id:"rss",name:"RSS",href:"#",icon:"/assets/img/usa-icons/rss_feed.svg"}],i={items:o.props.items.default(),customClasses:o.props.customClasses.default()},V={component:o,title:"Components/UsaFooterSocialLinks",argTypes:{items:{control:{type:"object"}},customClasses:{control:{type:"object"}}},items:i.cols,customClasses:i.customClasses,render:e=>({components:{UsaFooterSocialLinks:o},props:Object.keys(o.props),setup(){return{args:e}},template:`<UsaFooterSocialLinks
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
}`,...(S=(h=n.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};const A=["DefaultFooterSocialLinks","CustomClassesFooterSocialLinks"];export{n as CustomClassesFooterSocialLinks,t as DefaultFooterSocialLinks,A as __namedExportsOrder,V as default};
