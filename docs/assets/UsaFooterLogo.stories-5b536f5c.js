import{s as p,c as u,a as i,r as h,n as f,e as y,o as C,t as P,d as R,v as x}from"./vue.esm-bundler-d9807bdf.js";import{P as q,G as I}from"./constants-fce87d39.js";const N={class:"usa-footer__logo"},E=["src","alt"],j={class:"usa-footer__logo-heading"},S={__name:"UsaFooterLogo",props:{src:{type:String,default:""},alt:{type:String,default:""},heading:{type:String,default:""},customClasses:{type:Object,default:()=>({logoGridCol:[],headingGridCol:[]})}},setup(e){const d=y("vueUswds.prefixSeparator",q),m=y("vueUswds.gridNamespace",I),n=e,$=p(()=>{var o,a;return(a=(o=n.customClasses)==null?void 0:o.logoGridCol)!=null&&a.length?n.customClasses.logoGridCol:[`mobile-lg${d}${m}col-auto`]}),w=p(()=>{var o,a;return(a=(o=n.customClasses)==null?void 0:o.headingGridCol)!=null&&a.length?n.customClasses.headingGridCol:[`mobile-lg${d}${m}col-auto`]});return(o,a)=>(C(),u("div",N,[i("div",{class:f($.value)},[h(o.$slots,"logo",{},()=>[e.src?(C(),u("img",{key:0,class:"usa-footer__logo-img",src:e.src,alt:e.alt},null,8,E)):P("",!0)])],2),i("div",{class:f(w.value)},[i("p",j,[h(o.$slots,"heading",{},()=>[R(x(e.heading),1)])])],2)]))}},s=S;S.__docgenInfo={exportName:"default",displayName:"UsaFooterLogo",type:1,props:[{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"customClasses",global:!1,description:"",tags:[],required:!1,type:"Record<string, any>",declarations:[],schema:"Record<string, any>",default:`() => {
    return {
        logoGridCol: [],
        headingGridCol: [],
    };
}`},{name:"heading",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'""'},{name:"src",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'""'},{name:"alt",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'""'}],events:[],slots:[{name:"logo",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}},{name:"heading",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}}],exposed:[{name:"customClasses",type:"Record<string, any>",description:"",declarations:[],schema:"Record<string, any>"},{name:"heading",type:"string",description:"",declarations:[],schema:"string"},{name:"src",type:"string",description:"",declarations:[],schema:"string"},{name:"alt",type:"string",description:"",declarations:[],schema:"string"}],sourceFiles:"/home/runner/work/vue-uswds/vue-uswds/src/components/UsaFooterLogo/UsaFooterLogo.vue"};const t={src:s.props.src.default,alt:s.props.alt.default,heading:s.props.heading.default,customClasses:s.props.customClasses.default()},r="https://federalist-3b6ba08e-0df4-44c9-ac73-6fc193b0e19c.sites.pages.cloud.gov/preview/uswds/uswds/develop/img/circle-gray-20.svg",V={component:s,title:"Components/UsaFooterLogo",argTypes:{src:{control:{type:"text"}},alt:{control:{type:"text"}},heading:{control:{type:"text"},table:{category:"props"}},customClasses:{control:{type:"object"}},logo:{control:{type:"text"}},"slot:heading":{control:{type:"text"},name:"heading",table:{category:"slots"}}},args:{src:t.src,alt:t.alt,heading:t.heading,customClasses:t.customClasses,logo:"","slot:heading":""},render:e=>({components:{UsaFooterLogo:s},props:Object.keys(s.props),setup(){return{args:e}},template:`<UsaFooterLogo
    :src="args.src"
    :alt="args.alt"
    :heading="args.heading"
    :custom-classes="args.customClasses"
    class="grid-row mobile-lg:grid-col-6 mobile-lg:grid-gap-2"
  >
    <template v-if="!!args.logo" #logo>${e.logo}</template>
    <template v-if="!!args['slot:heading']" #heading>${e["slot:heading"]}</template>
  </UsaFooterLogo>`})},l={args:{...t,src:r,alt:"Test footer logo",heading:"Test footer heading"},name:"Default",parameters:{docs:{source:{code:`<UsaFooterLogo :src="${r}" alt="Test footer logo" heading="Test footer heading"></UsaFooterLogo>`}}}},g={args:{...t,logo:"Logo slot content here...","slot:heading":"Heading slot content here..."},name:"Slots",parameters:{docs:{source:{code:`<UsaFooterLogo :src="${r}" alt="Test footer logo" heading="Test footer heading">
	<template #logo>Logo slot content here...</template>
	<template #heading>Heading slot content here...</template>
</UsaFooterLogo>`}}}},c={args:{...t,src:r,alt:"Test footer logo",heading:"Test footer heading",customClasses:{logoGridCol:["test-logo-grid-col-class"],headingGridCol:["test-heading-grid-col-class"]}},name:"Custom Classes",parameters:{docs:{source:{code:`<UsaFooterLogo :src="${r}" alt="Test footer logo" heading="Test footer heading" :custom-classes="{ 
	logoGridCol: ['test-logo-grid-col-class'], 
	headingGridCol: ['test-heading-grid-col-class'] 
}"></UsaFooterLogo>`}}}};var L,b,F;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    src: testLogoImageUrl,
    alt: 'Test footer logo',
    heading: 'Test footer heading'
  },
  name: 'Default',
  parameters: {
    docs: {
      source: {
        code: \`<UsaFooterLogo :src="\${testLogoImageUrl}" alt="Test footer logo" heading="Test footer heading"></UsaFooterLogo>\`
      }
    }
  }
}`,...(F=(b=l.parameters)==null?void 0:b.docs)==null?void 0:F.source}}};var U,T,v;g.parameters={...g.parameters,docs:{...(U=g.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    logo: 'Logo slot content here...',
    'slot:heading': 'Heading slot content here...'
  },
  name: 'Slots',
  parameters: {
    docs: {
      source: {
        code: \`<UsaFooterLogo :src="\${testLogoImageUrl}" alt="Test footer logo" heading="Test footer heading">\\n\\t<template #logo>Logo slot content here...</template>\\n\\t<template #heading>Heading slot content here...</template>\\n</UsaFooterLogo>\`
      }
    }
  }
}`,...(v=(T=g.parameters)==null?void 0:T.docs)==null?void 0:v.source}}};var G,k,_;c.parameters={...c.parameters,docs:{...(G=c.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    src: testLogoImageUrl,
    alt: 'Test footer logo',
    heading: 'Test footer heading',
    customClasses: {
      logoGridCol: ['test-logo-grid-col-class'],
      headingGridCol: ['test-heading-grid-col-class']
    }
  },
  name: 'Custom Classes',
  parameters: {
    docs: {
      source: {
        code: \`<UsaFooterLogo :src="\${testLogoImageUrl}" alt="Test footer logo" heading="Test footer heading" :custom-classes="{ \\n\\tlogoGridCol: ['test-logo-grid-col-class'], \\n\\theadingGridCol: ['test-heading-grid-col-class'] \\n}"></UsaFooterLogo>\`
      }
    }
  }
}`,...(_=(k=c.parameters)==null?void 0:k.docs)==null?void 0:_.source}}};const A=["DefaultFooterLogo","SlotsFooterLogo","CustomClassesFooterLogo"];export{c as CustomClassesFooterLogo,l as DefaultFooterLogo,g as SlotsFooterLogo,A as __namedExportsOrder,V as default};
