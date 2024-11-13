import{s as U,c as o,b as e,v as c,t as l,a as r,r as G,m as q,G as x,e as v,o as t,n as i}from"./vue.esm-bundler-2e7cedae.js";import{P as D,G as T}from"./constants-fce87d39.js";const N={key:0,class:"usa-footer__contact-heading"},R={class:"usa-footer__contact-info"},E=["href"],j={class:"usa-footer__contact-info"},B=["href"],I=["href"],H=["href"],K={inheritAttrs:!1},P=Object.assign(K,{__name:"UsaFooterAddress",props:{heading:{type:String,default:""},email:{type:String,default:""},phone:{type:String,default:""},phoneUrl:{type:String,default:""}},setup(s){const p=v("vueUswds.prefixSeparator",D),a=v("vueUswds.gridNamespace",T),_=v("footerVariant","medium"),m=s,u=U(()=>m.email?`mailto:${m.email.trim().toLowerCase()}`:""),g=U(()=>m.phoneUrl?`tel:${m.phoneUrl.trim()}`:"");return(A,z)=>(t(),o(x,null,[s.heading&&e(_)!=="slim"?(t(),o("p",N,c(s.heading),1)):l("",!0),r("address",q(A.$attrs,{class:"usa-footer__address"}),[G(A.$slots,"default",{},()=>[e(_)==="slim"?(t(),o("div",{key:0,class:i(`${e(a)}row ${e(a)}gap`)},[g.value?(t(),o("div",{key:0,class:i(`${e(a)}col-auto mobile-lg${e(p)}${e(a)}col-12 desktop${e(p)}${e(a)}col-auto`)},[r("div",R,[r("a",{href:g.value},c(s.phone),9,E)])],2)):l("",!0),u.value?(t(),o("div",{key:1,class:i(`${e(a)}col-auto mobile-lg${e(p)}${e(a)}col-12 desktop${e(p)}${e(a)}col-auto`)},[r("div",j,[r("a",{href:u.value},c(s.email),9,B)])],2)):l("",!0)],2)):(t(),o("div",{key:1,class:i(`usa-footer__contact-info ${e(a)}row ${e(a)}gap`)},[g.value?(t(),o("div",{key:0,class:i(`${e(a)}col-auto`)},[r("a",{href:g.value},c(s.phone),9,I)],2)):l("",!0),u.value?(t(),o("div",{key:1,class:i(`${e(a)}col-auto`)},[r("a",{href:u.value},c(s.email),9,H)],2)):l("",!0)],2))])],16)],64))}}),n=P;P.__docgenInfo={exportName:"default",displayName:"UsaFooterAddress",type:1,props:[{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"heading",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'""'},{name:"email",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'""'},{name:"phone",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'""'},{name:"phoneUrl",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'""'}],events:[],slots:[{name:"default",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}}],exposed:[{name:"heading",type:"string",description:"",declarations:[],schema:"string"},{name:"email",type:"string",description:"",declarations:[],schema:"string"},{name:"phone",type:"string",description:"",declarations:[],schema:"string"},{name:"phoneUrl",type:"string",description:"",declarations:[],schema:"string"}],sourceFiles:"/home/runner/work/vue-uswds/vue-uswds/src/components/UsaFooterAddress/UsaFooterAddress.vue"};const d={heading:n.props.heading.default,email:n.props.email.default,phone:n.props.phone.default,phoneUrl:n.props.phoneUrl.default},X={component:n,title:"Components/UsaFooterAddress",argTypes:{heading:{control:{type:"text"}},email:{control:{type:"text"}},phone:{control:{type:"text"}},phoneUrl:{control:{type:"text"}},default:{control:{type:"text"}}},args:{heading:d.heading,email:d.email,phone:d.phone,phoneUrl:d.phoneUrl,default:""},render:s=>({components:{UsaFooterAddress:n},props:Object.keys(n.props),setup(){return{args:s}},template:`<UsaFooterAddress
      :heading="args.heading"
      :email="args.email"
      :phone="args.phone"
      :phoneUrl="args.phoneUrl"
    >${s.default}</UsaFooterAddress>`})},f={args:{...d,heading:"Agency Contact Center",email:"info@agency.gov",phone:"(800) 555-GOVT",phoneUrl:"1-800-555-5555"},decorators:[()=>({template:`<div class="usa-footer">
          <div class="usa-footer__secondary-section">
            <div class="grid-container">
              <div class="usa-footer__contact-links"><story /></div>
            </div>
          </div>
        </div>`})],name:"Default",parameters:{docs:{source:{code:'<UsaFooterAddress heading="Agency Contact Center" email="info@agency.gov" phone="(800) 555-GOVT" phoneUrl="1-800-555-5555"></UsaFooterAddress>'}}}},h={args:{...d,heading:"Agency Contact Center",email:"info@agency.gov",phone:"(800) 555-GOVT",phoneUrl:"1-800-555-5555"},decorators:[()=>({template:`<div class="usa-footer">
          <div class="usa-footer__primary-section">
            <div class="usa-footer__primary-container grid-row">
              <div class="usa-footer__contact-links"><story /></div>
            </div>
          </div>
        </div>`,provide:{footerVariant:"slim"}})],name:"Slim Footer",parameters:{docs:{source:{code:'<UsaFooterAddress heading="Agency Contact Center" email="info@agency.gov" phone="(800) 555-GOVT" phoneUrl="1-800-555-5555"></UsaFooterAddress>'}}}},y={args:{...d,heading:"Agency Contact Center",default:"<em>Custom footer address markup here...</em>"},decorators:[()=>({template:`<div class="usa-footer">
          <div class="usa-footer__secondary-section">
            <div class="grid-container">
              <div class="usa-footer__contact-links"><story /></div>
            </div>
          </div>
        </div>`})],name:"Default Slot",parameters:{docs:{source:{code:'<UsaFooterAddress heading="Agency Contact Center"><em>Custom footer address markup here...</em></UsaFooterAddress>'}}}};var C,k,F;f.parameters={...f.parameters,docs:{...(C=f.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    heading: 'Agency Contact Center',
    email: 'info@agency.gov',
    phone: '(800) 555-GOVT',
    phoneUrl: '1-800-555-5555'
  },
  decorators: [() => ({
    template: \`<div class="usa-footer">
          <div class="usa-footer__secondary-section">
            <div class="grid-container">
              <div class="usa-footer__contact-links"><story /></div>
            </div>
          </div>
        </div>\`
  })],
  name: 'Default',
  parameters: {
    docs: {
      source: {
        code: \`<UsaFooterAddress heading="Agency Contact Center" email="info@agency.gov" phone="(800) 555-GOVT" phoneUrl="1-800-555-5555"></UsaFooterAddress>\`
      }
    }
  }
}`,...(F=(k=f.parameters)==null?void 0:k.docs)==null?void 0:F.source}}};var b,S,$;h.parameters={...h.parameters,docs:{...(b=h.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    heading: 'Agency Contact Center',
    email: 'info@agency.gov',
    phone: '(800) 555-GOVT',
    phoneUrl: '1-800-555-5555'
  },
  decorators: [() => ({
    template: \`<div class="usa-footer">
          <div class="usa-footer__primary-section">
            <div class="usa-footer__primary-container grid-row">
              <div class="usa-footer__contact-links"><story /></div>
            </div>
          </div>
        </div>\`,
    provide: {
      footerVariant: 'slim'
    }
  })],
  name: 'Slim Footer',
  parameters: {
    docs: {
      source: {
        code: \`<UsaFooterAddress heading="Agency Contact Center" email="info@agency.gov" phone="(800) 555-GOVT" phoneUrl="1-800-555-5555"></UsaFooterAddress>\`
      }
    }
  }
}`,...($=(S=h.parameters)==null?void 0:S.docs)==null?void 0:$.source}}};var V,w,O;y.parameters={...y.parameters,docs:{...(V=y.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    heading: 'Agency Contact Center',
    default: '<em>Custom footer address markup here...</em>'
  },
  decorators: [() => ({
    template: \`<div class="usa-footer">
          <div class="usa-footer__secondary-section">
            <div class="grid-container">
              <div class="usa-footer__contact-links"><story /></div>
            </div>
          </div>
        </div>\`
  })],
  name: 'Default Slot',
  parameters: {
    docs: {
      source: {
        code: \`<UsaFooterAddress heading="Agency Contact Center"><em>Custom footer address markup here...</em></UsaFooterAddress>\`
      }
    }
  }
}`,...(O=(w=y.parameters)==null?void 0:w.docs)==null?void 0:O.source}}};const J=["DefaultFooterAddress","SlimFooterAddress","DefaultSlotFooterAddress"];export{f as DefaultFooterAddress,y as DefaultSlotFooterAddress,h as SlimFooterAddress,J as __namedExportsOrder,X as default};
