import{l as N,x as M,s as y,M as s,c as h,r as H,n as x,o as C}from"./vue.esm-bundler-DsKf3Hbt.js";import{a as L}from"./constants-BA52rpFi.js";const o=N(!1);function z(e){const t=N(`${L}global-mobile-header-menu`),c="usa-js-mobile-nav--active",a=()=>{o.value=!1,e&&e("mobileMenuOpen",o.value),document.body.classList.remove(c),document.querySelectorAll("body > :not(.usa-nav)").forEach(d=>d.removeAttribute("aria-hidden",!0))},u=()=>{o.value=!0,e&&e("mobileMenuOpen",o.value),document.body.classList.add(c),document.querySelectorAll("body > :not(.usa-nav)").forEach(d=>d.setAttribute("aria-hidden",!0))},f=()=>{o.value?a():u()};return{isMobileMenuOpen:M(o),mobileMenuId:M(t),closeMobileMenu:a,openMobileMenu:u,toggleMobileMenu:f}}const r={__name:"UsaHeader",props:{variant:{type:String,default:"basic",validator(e){const t=["basic","extended"].includes(e);return t||console.warn(`'${e}' is not a valid header variant`),t}},megamenu:{type:Boolean,default:!1},customClasses:{type:Object,default:()=>({navContainer:[]})}},emits:["mobileMenuOpen"],setup(e,{emit:t}){const c=t,a=e,{isMobileMenuOpen:u,mobileMenuId:f,closeMobileMenu:d,openMobileMenu:V,toggleMobileMenu:F}=z(c),K=y(()=>[{"usa-header--basic":a.variant==="basic","usa-header--extended":a.variant==="extended","usa-header--megamenu":a.megamenu}]);return s("isExtendedHeader",y(()=>a.variant==="extended")),s("isMegamenu",y(()=>a.megamenu)),s("isMobileMenuOpen",u),s("mobileMenuId",f),s("closeMobileMenu",d),s("openMobileMenu",V),s("toggleMobileMenu",F),(b,D)=>{var v;return C(),h("header",{class:x(["usa-header",K.value])},[e.variant==="basic"?(C(),h("div",{key:0,class:x(["usa-nav-container",(v=e.customClasses)==null?void 0:v.navContainer])},[H(b.$slots,"default")],2)):H(b.$slots,"default",{key:1})],2)}}};r.__docgenInfo={exportName:"default",displayName:"UsaHeader",type:1,props:[{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"customClasses",global:!1,description:"",tags:[],required:!1,type:"Record<string, any>",declarations:[],schema:"Record<string, any>",default:`() => {
    return {
        navContainer: [],
    };
}`},{name:"variant",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'"basic"'},{name:"megamenu",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]},default:"false"}],events:[{name:"mobileMenuOpen",description:"",tags:[],type:"any[]",signature:'(event: "mobileMenuOpen", ...args: any[]): void',declarations:[],schema:["any"]}],slots:[{name:"default",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}}],exposed:[{name:"customClasses",type:"Record<string, any>",description:"",declarations:[],schema:"Record<string, any>"},{name:"variant",type:"string",description:"",declarations:[],schema:"string"},{name:"megamenu",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}}],sourceFiles:"/home/runner/work/vue-uswds/vue-uswds/src/components/UsaHeader/UsaHeader.vue"};const n={variant:r.props.variant.default,megamenu:r.props.megamenu.default,customClasses:r.props.customClasses.default()},G={component:r,title:"Components/UsaHeader",argTypes:{variant:{options:["basic","extended"],control:{type:"select"}},megamenu:{control:{type:"boolean"}},customClasses:{control:{type:"object"}},default:{control:{type:"text"}}},args:{variant:n.variant,megamenu:n.megamenu,customClasses:n.customClasses,default:"Header content"},render:e=>({components:{UsaHeader:r},props:Object.keys(r.props),setup(){return{args:e}},template:`<UsaHeader
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
}`,...(_=(I=p.parameters)==null?void 0:I.docs)==null?void 0:_.source}}};var j,$,A;g.parameters={...g.parameters,docs:{...(j=g.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(A=($=g.parameters)==null?void 0:$.docs)==null?void 0:A.source}}};const J=["BasicHeader","BasicMegamenuHeader","ExtendedHeader","ExtendedMegamenuHeader","CustomClassesHeader"];export{i as BasicHeader,l as BasicMegamenuHeader,g as CustomClassesHeader,m as ExtendedHeader,p as ExtendedMegamenuHeader,J as __namedExportsOrder,G as default};
