import{l as A,V as h,s as y,L as s,c as M,n as H,r as C,o as x}from"./vue.esm-bundler-d9807bdf.js";import{a as z}from"./constants-fce87d39.js";const t=A(!1);function D(e){const r=A(`${z}global-mobile-header-menu`),c="usa-js-mobile-nav--active",a=()=>{t.value=!1,e&&e("mobileMenuOpen",t.value),document.body.classList.remove(c),document.querySelectorAll("body > :not(.usa-nav)").forEach(d=>d.removeAttribute("aria-hidden",!0))},u=()=>{t.value=!0,e&&e("mobileMenuOpen",t.value),document.body.classList.add(c),document.querySelectorAll("body > :not(.usa-nav)").forEach(d=>d.setAttribute("aria-hidden",!0))},f=()=>{t.value?a():u()};return{isMobileMenuOpen:h(t),mobileMenuId:h(r),closeMobileMenu:a,openMobileMenu:u,toggleMobileMenu:f}}const N={__name:"UsaHeader",props:{variant:{type:String,default:"basic",validator(e){const r=["basic","extended"].includes(e);return r||console.warn(`'${e}' is not a valid header variant`),r}},megamenu:{type:Boolean,default:!1},customClasses:{type:Object,default:()=>({navContainer:[]})}},emits:["mobileMenuOpen"],setup(e,{emit:r}){const c=r,a=e,{isMobileMenuOpen:u,mobileMenuId:f,closeMobileMenu:d,openMobileMenu:L,toggleMobileMenu:F}=D(c),K=y(()=>[{"usa-header--basic":a.variant==="basic","usa-header--extended":a.variant==="extended","usa-header--megamenu":a.megamenu}]);return s("isExtendedHeader",y(()=>a.variant==="extended")),s("isMegamenu",y(()=>a.megamenu)),s("isMobileMenuOpen",u),s("mobileMenuId",f),s("closeMobileMenu",d),s("openMobileMenu",L),s("toggleMobileMenu",F),(b,T)=>{var v;return x(),M("header",{class:H(["usa-header",K.value])},[e.variant==="basic"?(x(),M("div",{key:0,class:H(["usa-nav-container",(v=e.customClasses)==null?void 0:v.navContainer])},[C(b.$slots,"default")],2)):C(b.$slots,"default",{key:1})],2)}}},o=N;N.__docgenInfo={exportName:"default",displayName:"UsaHeader",type:1,props:[{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"customClasses",global:!1,description:"",tags:[],required:!1,type:"Record<string, any>",declarations:[],schema:"Record<string, any>",default:`() => {
    return {
        navContainer: [],
    };
}`},{name:"variant",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'"basic"'},{name:"megamenu",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]},default:"false"}],events:[{name:"mobileMenuOpen",description:"",tags:[],type:"any[]",signature:'(event: "mobileMenuOpen", ...args: any[]): void',declarations:[],schema:["any"]}],slots:[{name:"default",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}}],exposed:[{name:"customClasses",type:"Record<string, any>",description:"",declarations:[],schema:"Record<string, any>"},{name:"variant",type:"string",description:"",declarations:[],schema:"string"},{name:"megamenu",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}}],sourceFiles:"/home/runner/work/vue-uswds/vue-uswds/src/components/UsaHeader/UsaHeader.vue"};const n={variant:o.props.variant.default,megamenu:o.props.megamenu.default,customClasses:o.props.customClasses.default()},J={component:o,title:"Components/UsaHeader",argTypes:{variant:{options:["basic","extended"],control:{type:"select"}},megamenu:{control:{type:"boolean"}},customClasses:{control:{type:"object"}},default:{control:{type:"text"}}},args:{variant:n.variant,megamenu:n.megamenu,customClasses:n.customClasses,default:"Header content"},render:e=>({components:{UsaHeader:o},props:Object.keys(o.props),setup(){return{args:e}},template:`<UsaHeader
      :variant="args.variant"
      :megamenu="args.megamenu"
      :custom-classes="args.customClasses"
    >${e.default}</UsaHeader>`})},i={args:{...n,default:"Basic header"},name:"Basic",parameters:{docs:{source:{code:"<UsaHeader>Basic header</UsaHeader>"}}}},l={args:{...n,megamenu:!0,default:"Basic header with megamenu"},name:"Basic w/ Megamenu",parameters:{docs:{source:{code:'<UsaHeader :megamenu="true">Basic header with megamenu</UsaHeader>'}}}},m={args:{...n,variant:"extended",default:"Extended header"},name:"Extended",parameters:{docs:{source:{code:'<UsaHeader variant="extended">Extended header</UsaHeader>'}}}},p={args:{...n,variant:"extended",megamenu:!0,default:"Extended header with Megamenu"},name:"Extended w/ Megamenu",parameters:{docs:{source:{code:'<UsaHeader variant="extended" :megamenu="true">Extended header with Megamenu</UsaHeader>'}}}},g={args:{...n,customClasses:{navContainer:["test-nav-container-class"]}},name:"Custom Classes",parameters:{docs:{source:{code:`<UsaHeader :custom-classes="{ navContainer: ['test-nav-container-class'] }">Custom classes</UsaHeader>`}}}};var U,E,w;i.parameters={...i.parameters,docs:{...(U=i.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    default: 'Basic header'
  },
  name: 'Basic',
  parameters: {
    docs: {
      source: {
        code: \`<UsaHeader>Basic header</UsaHeader>\`
      }
    }
  }
}`,...(w=(E=i.parameters)==null?void 0:E.docs)==null?void 0:w.source}}};var B,k,O;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    megamenu: true,
    default: 'Basic header with megamenu'
  },
  name: 'Basic w/ Megamenu',
  parameters: {
    docs: {
      source: {
        code: \`<UsaHeader :megamenu="true">Basic header with megamenu</UsaHeader>\`
      }
    }
  }
}`,...(O=(k=l.parameters)==null?void 0:k.docs)==null?void 0:O.source}}};var q,P,R;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    variant: 'extended',
    default: 'Extended header'
  },
  name: 'Extended',
  parameters: {
    docs: {
      source: {
        code: \`<UsaHeader variant="extended">Extended header</UsaHeader>\`
      }
    }
  }
}`,...(R=(P=m.parameters)==null?void 0:P.docs)==null?void 0:R.source}}};var S,I,_;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    variant: 'extended',
    megamenu: true,
    default: 'Extended header with Megamenu'
  },
  name: 'Extended w/ Megamenu',
  parameters: {
    docs: {
      source: {
        code: \`<UsaHeader variant="extended" :megamenu="true">Extended header with Megamenu</UsaHeader>\`
      }
    }
  }
}`,...(_=(I=p.parameters)==null?void 0:I.docs)==null?void 0:_.source}}};var j,V,$;g.parameters={...g.parameters,docs:{...(j=g.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    customClasses: {
      navContainer: ['test-nav-container-class']
    }
  },
  name: 'Custom Classes',
  parameters: {
    docs: {
      source: {
        code: \`<UsaHeader :custom-classes="{ navContainer: ['test-nav-container-class'] }">Custom classes</UsaHeader>\`
      }
    }
  }
}`,...($=(V=g.parameters)==null?void 0:V.docs)==null?void 0:$.source}}};const Q=["BasicHeader","BasicMegamenuHeader","ExtendedHeader","ExtendedMegamenuHeader","CustomClassesHeader"];export{i as BasicHeader,l as BasicMegamenuHeader,g as CustomClassesHeader,m as ExtendedHeader,p as ExtendedMegamenuHeader,Q as __namedExportsOrder,J as default};
