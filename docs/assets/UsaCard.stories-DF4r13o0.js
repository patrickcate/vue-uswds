import{s as r,f as fe,g as E,n as o,h as he,o as d,a as k,c as n,t as l,I as ye,b as be,r as m,d as Ce,v as ve}from"./vue.esm-bundler-DlC1_45x.js";import{_ as qe}from"./BaseHeading-BkBCpxXB.js";const s={__name:"UsaCard",props:{cardTag:{type:String,default:"div"},heading:{type:String,default:""},headingTag:{type:String,default:"h2"},flag:{type:Boolean,default:!1},headerFirst:{type:Boolean,default:!1},insetMedia:{type:Boolean,default:!1},mediaPosition:{type:String,default:"left",validator(a){return["left","right"].includes(a)}},headerExdent:{type:Boolean,default:!1},mediaExdent:{type:Boolean,default:!1},bodyExdent:{type:Boolean,default:!1},footerExdent:{type:Boolean,default:!1},customClasses:{type:Object,default:()=>({container:[],header:[],heading:[],media:[],img:[],body:[],footer:[]})}},setup(a){const i=a,me=r(()=>[{"usa-card--header-first":i.headerFirst,"usa-card--flag":i.flag,"usa-card--media-right":i.mediaPosition==="right"}]),ce=r(()=>{var t;return[{"usa-card__header--exdent":i.headerExdent},...((t=i.customClasses)==null?void 0:t.header)||[]]}),ue=r(()=>{var t;return[{"usa-card__media--inset":i.insetMedia,"usa-card__media--exdent":i.mediaExdent},...((t=i.customClasses)==null?void 0:t.media)||[]]}),pe=r(()=>{var t;return[{"usa-card__body--exdent":i.bodyExdent},...((t=i.customClasses)==null?void 0:t.body)||[]]}),ge=r(()=>{var t;return[{"usa-card__footer--exdent":i.footerExdent},...((t=i.customClasses)==null?void 0:t.footer)||[]]});return(t,we)=>(d(),fe(he(a.cardTag),{class:o(["usa-card",me.value])},{default:E(()=>{var F,x,U;return[k("div",{class:o(["usa-card__container",(F=a.customClasses)==null?void 0:F.container])},[a.heading||t.$slots.heading?(d(),n("header",{key:0,class:o(["usa-card__header",ce.value])},[ye(be(qe),{tag:a.headingTag,class:o(["usa-card__heading",(x=a.customClasses)==null?void 0:x.heading])},{default:E(()=>[m(t.$slots,"heading",{},()=>[Ce(ve(a.heading),1)])]),_:3},8,["tag","class"])],2)):l("",!0),t.$slots.media?(d(),n("div",{key:1,class:o(["usa-card__media",ue.value])},[k("div",{class:o(["usa-card__img",(U=a.customClasses)==null?void 0:U.img])},[m(t.$slots,"media")],2)],2)):l("",!0),t.$slots.default?(d(),n("div",{key:2,class:o(["usa-card__body",pe.value])},[m(t.$slots,"default")],2)):l("",!0),t.$slots.footer?(d(),n("div",{key:3,class:o(["usa-card__footer",ge.value])},[m(t.$slots,"footer")],2)):l("",!0)],2)]}),_:3},8,["class"]))}};s.__docgenInfo={exportName:"default",displayName:"UsaCard",type:1,props:[{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"headingTag",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'"h2"'},{name:"customClasses",global:!1,description:"",tags:[],required:!1,type:"Record<string, any>",declarations:[],schema:"Record<string, any>",default:`() => {
    return {
        container: [],
        header: [],
        heading: [],
        media: [],
        img: [],
        body: [],
        footer: [],
    };
}`},{name:"heading",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'""'},{name:"cardTag",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'"div"'},{name:"flag",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]},default:"false"},{name:"headerFirst",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]},default:"false"},{name:"insetMedia",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]},default:"false"},{name:"mediaPosition",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'"left"'},{name:"headerExdent",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]},default:"false"},{name:"mediaExdent",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]},default:"false"},{name:"bodyExdent",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]},default:"false"},{name:"footerExdent",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]},default:"false"}],events:[],slots:[{name:"heading",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}},{name:"media",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}},{name:"default",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}},{name:"footer",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}}],exposed:[{name:"headingTag",type:"string",description:"",declarations:[],schema:"string"},{name:"customClasses",type:"Record<string, any>",description:"",declarations:[],schema:"Record<string, any>"},{name:"heading",type:"string",description:"",declarations:[],schema:"string"},{name:"cardTag",type:"string",description:"",declarations:[],schema:"string"},{name:"flag",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"headerFirst",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"insetMedia",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"mediaPosition",type:"string",description:"",declarations:[],schema:"string"},{name:"headerExdent",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"mediaExdent",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"bodyExdent",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"footerExdent",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}}],sourceFiles:"/home/runner/work/vue-uswds/vue-uswds/src/components/UsaCard/UsaCard.vue"};const e={cardTag:s.props.cardTag.default,heading:s.props.heading.default,headingTag:s.props.headingTag.default,flag:s.props.flag.default,headerFirst:s.props.headerFirst.default,insetMedia:s.props.insetMedia.default,mediaPosition:s.props.mediaPosition.default,headerExdent:s.props.headerExdent.default,mediaExdent:s.props.mediaExdent.default,bodyExdent:s.props.bodyExdent.default,footerExdent:s.props.footerExdent.default,customClasses:s.props.customClasses.default()},Ue={component:s,title:"Components/UsaCard",argTypes:{cardTag:{control:{type:"text"}},heading:{control:{type:"text"},table:{category:"props"}},headingTag:{options:["h1","h2","h3","h4","h5","h6"],control:{type:"select"}},flag:{control:{type:"boolean"}},insetMedia:{control:{type:"boolean"}},mediaPosition:{options:["left","right"],control:{type:"select"}},headerExdent:{control:{type:"boolean"}},mediaExdent:{control:{type:"boolean"}},bodyExdent:{control:{type:"boolean"}},footerExdent:{control:{type:"boolean"}},customClasses:{control:{type:"object"}},"slot:heading":{control:{type:"text"},name:"heading",table:{category:"slots"}},media:{control:{type:"text"}},default:{control:{type:"text"}},footer:{control:{type:"text"}}},args:{cardTag:e.cardTag,heading:e.heading,headingTag:e.headingTag,flag:e.flag,headerFirst:e.headerFirst,mediaPosition:e.mediaPosition,headerExdent:e.headerExdent,insetMedia:e.insetMedia,mediaExdent:e.mediaExdent,bodyExdent:e.bodyExdent,footerExdent:e.footerExdent,customClasses:e.customClasses,"slot:heading":"",media:'<img src="https://designsystem.digital.gov/img/introducing-uswds-2-0/built-to-grow--alt.jpg" alt="A placeholder image">',default:"<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum tenetur quo cupiditate, eaque qui officia recusandae.</p>",footer:'<div><button type="button" class="usa-button">Visit Florida Keys</button></div>'},render:a=>({components:{UsaCard:s},props:Object.keys(s.props),setup(){return{args:a}},template:`<UsaCard
    :card-tag="args.cardTag"
    :heading="args.heading"
    :heading-tag="args.headingTag"
    :flag="args.flag"
    :header-first="args.headerFirst"
    :inset-media="args.insetMedia"
    :media-position="args.mediaPosition"
    :header-exdent="args.headerExdent"
    :media-exdent="args.mediaExdent"
    :body-exdent="args.bodyExdent"
    :footer-exdent="args.footerExdent"
    :custom-classes="args.customClasses"
  >
    <template #heading v-if="!!args['slot:heading']">${a["slot:heading"]}</template>
    <template #media v-if="!!args.media">${a.media}</template>
    <template #default v-if="!!args.default">${a.default}</template>
    <template #footer v-if="!!args.footer">${a.footer}</template>
  </UsaCard>`})},c={args:{...e,heading:"Card"},decorators:[()=>({template:'<div style="max-width: 50%;"><story /></div>'})],name:"Default",parameters:{docs:{source:{code:`<UsaCard heading="Card">
	<template #media><img src="https://designsystem.digital.gov/img/introducing-uswds-2-0/built-to-grow--alt.jpg" alt="A placeholder image"></template>
	<template #default><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum tenetur quo cupiditate, eaque qui officia recusandae.</p></template>
	<template #footer><div><button type="button" class="usa-button">Visit Florida Keys</button></div></template>
</UsaCard>`}}}},u={args:{...e,headerFirst:!0,heading:"Card"},decorators:[()=>({template:'<div style="max-width: 50%;"><story /></div>'})],name:"Header First",parameters:{docs:{source:{code:`<UsaCard :header-first="true" heading="Card">
	<template #media><img src="https://designsystem.digital.gov/img/introducing-uswds-2-0/built-to-grow--alt.jpg" alt="A placeholder image"></template>
	<template #default><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum tenetur quo cupiditate, eaque qui officia recusandae.</p></template>
	<template #footer><div><button type="button" class="usa-button">Visit Florida Keys</button></div></template>
</UsaCard>`}}}},p={args:{...e,media:"",heading:"Card"},decorators:[()=>({template:'<div style="max-width: 50%;"><story /></div>'})],name:"No Media",parameters:{docs:{source:{code:`<UsaCard heading="Card">
	<template #default><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum tenetur quo cupiditate, eaque qui officia recusandae.</p></template>
	<template #footer><div><button type="button" class="usa-button">Visit Florida Keys</button></div></template>
</UsaCard>`}}}},g={args:{...e,heading:"","slot:heading":""},decorators:[()=>({template:'<div style="max-width: 50%;"><story /></div>'})],name:"No Header",parameters:{docs:{source:{code:`<UsaCard>
	<template #media><img src="https://designsystem.digital.gov/img/introducing-uswds-2-0/built-to-grow--alt.jpg" alt="A placeholder image"></template>
	<template #default><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum tenetur quo cupiditate, eaque qui officia recusandae.</p></template>
	<template #footer><div><button type="button" class="usa-button">Visit Florida Keys</button></div></template>
</UsaCard>`}}}},f={args:{...e,footer:"",heading:"Card"},decorators:[()=>({template:'<div style="max-width: 50%;"><story /></div>'})],name:"No Footer",parameters:{docs:{source:{code:`<UsaCard heading="Card">
	<template #media><img src="https://designsystem.digital.gov/img/introducing-uswds-2-0/built-to-grow--alt.jpg" alt="A placeholder image"></template>
	<template #default><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum tenetur quo cupiditate, eaque qui officia recusandae.</p></template>
</UsaCard>`}}}},h={args:{...e,cardTag:"section",heading:"Card"},decorators:[()=>({template:'<div style="max-width: 50%;"><story /></div>'})],name:"Custom Card Tag",parameters:{docs:{source:{code:`<UsaCard heading="Card" card-tag="section">
	<template #media><img src="https://designsystem.digital.gov/img/introducing-uswds-2-0/built-to-grow--alt.jpg" alt="A placeholder image"></template>
	<template #default><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum tenetur quo cupiditate, eaque qui officia recusandae.</p></template>
	<template #footer><div><button type="button" class="usa-button">Visit Florida Keys</button></div></template>
</UsaCard>`}}}},y={args:{...e,insetMedia:!0,heading:"Card"},decorators:[()=>({template:'<div style="max-width: 50%;"><story /></div>'})],name:"Inset Media",parameters:{docs:{source:{code:`<UsaCard heading="Card" :inset-media="true">
	<template #media><img src="https://designsystem.digital.gov/img/introducing-uswds-2-0/built-to-grow--alt.jpg" alt="A placeholder image"></template>
	<template #default><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum tenetur quo cupiditate, eaque qui officia recusandae.</p></template>
	<template #footer><div><button type="button" class="usa-button">Visit Florida Keys</button></div></template>
</UsaCard>`}}}},b={args:{...e,headingTag:"h4",heading:"Card"},decorators:[()=>({template:'<div style="max-width: 50%;"><story /></div>'})],name:"Custom Heading Tag",parameters:{docs:{source:{code:`<UsaCard heading="Card" heading-tag="h4">
	<template #media><img src="https://designsystem.digital.gov/img/introducing-uswds-2-0/built-to-grow--alt.jpg" alt="A placeholder image"></template>
	<template #default><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum tenetur quo cupiditate, eaque qui officia recusandae.</p></template>
	<template #footer><div><button type="button" class="usa-button">Visit Florida Keys</button></div></template>
</UsaCard>`}}}},C={args:{...e,"slot:heading":"Custom header slot"},decorators:[()=>({template:'<div style="max-width: 50%;"><story /></div>'})],name:"Header Slot",parameters:{docs:{source:{code:`<UsaCard>
	<template #heading>Custom header slot</template>
	<template #media><img src="https://designsystem.digital.gov/img/introducing-uswds-2-0/built-to-grow--alt.jpg" alt="A placeholder image"></template>
	<template #default><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum tenetur quo cupiditate, eaque qui officia recusandae.</p></template>
	<template #footer><div><button type="button" class="usa-button">Visit Florida Keys</button></div></template>
</UsaCard>`}}}},v={args:{...e,heading:"Card",customClasses:{container:["test-container-class"],header:["test-header-class"],heading:["test-heading-class"],media:["test-media-class"],img:["test-img-class"],body:["test-body-class"],footer:["test-footer-class"]}},decorators:[()=>({template:'<div style="max-width: 50%;"><story /></div>'})],name:"Custom Classes",parameters:{docs:{source:{code:`<UsaCard heading="Card" :custom-classes="{ container: ['test-container-class'], header: ['test-header-class'], heading: ['test-heading-class'], media: ['test-media-class'], img: ['test-img-class'], body: ['test-body-class'], footer: ['test-footer-class'] }">
	<template #media><img src="https://designsystem.digital.gov/img/introducing-uswds-2-0/built-to-grow--alt.jpg" alt="A placeholder image"></template>
	<template #default><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum tenetur quo cupiditate, eaque qui officia recusandae.</p></template>
	<template #footer><div><button type="button" class="usa-button">Visit Florida Keys</button></div></template>
</UsaCard>`}}}},q={args:{...e,flag:!0,heading:"Card"},name:"Flag Layout",parameters:{docs:{source:{code:`<UsaCard heading="Card" :flag="true">
	<template #media><img src="https://designsystem.digital.gov/img/introducing-uswds-2-0/built-to-grow--alt.jpg" alt="A placeholder image"></template>
	<template #default><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum tenetur quo cupiditate, eaque qui officia recusandae.</p></template>
	<template #footer><div><button type="button" class="usa-button">Visit Florida Keys</button></div></template>
</UsaCard>`}}}},w={args:{...e,flag:!0,mediaPosition:"right",heading:"Card"},name:"Flag Layout w/ Media Right",parameters:{docs:{source:{code:`<UsaCard heading="Card" :flag="true" media-position="right">
	<template #media><img src="https://designsystem.digital.gov/img/introducing-uswds-2-0/built-to-grow--alt.jpg" alt="A placeholder image"></template>
	<template #default><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum tenetur quo cupiditate, eaque qui officia recusandae.</p></template>
	<template #footer><div><button type="button" class="usa-button">Visit Florida Keys</button></div></template>
</UsaCard>`}}}};var T,L,j;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    heading: 'Card'
  },
  decorators: [() => ({
    template: '<div style="max-width: 50%;"><story /></div>'
  })],
  name: 'Default',
  parameters: {
    docs: {
      source: {
        code: \`<UsaCard heading="Card">\\n\\t<template #media><img src="https://designsystem.digital.gov/img/introducing-uswds-2-0/built-to-grow--alt.jpg" alt="A placeholder image"></template>\\n\\t<template #default><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum tenetur quo cupiditate, eaque qui officia recusandae.</p></template>\\n\\t<template #footer><div><button type="button" class="usa-button">Visit Florida Keys</button></div></template>\\n</UsaCard>\`
      }
    }
  }
}`,...(j=(L=c.parameters)==null?void 0:L.docs)==null?void 0:j.source}}};var P,V,K;u.parameters={...u.parameters,docs:{...(P=u.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    headerFirst: true,
    heading: 'Card'
  },
  decorators: [() => ({
    template: '<div style="max-width: 50%;"><story /></div>'
  })],
  name: 'Header First',
  parameters: {
    docs: {
      source: {
        code: \`<UsaCard :header-first="true" heading="Card">\\n\\t<template #media><img src="https://designsystem.digital.gov/img/introducing-uswds-2-0/built-to-grow--alt.jpg" alt="A placeholder image"></template>\\n\\t<template #default><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum tenetur quo cupiditate, eaque qui officia recusandae.</p></template>\\n\\t<template #footer><div><button type="button" class="usa-button">Visit Florida Keys</button></div></template>\\n</UsaCard>\`
      }
    }
  }
}`,...(K=(V=u.parameters)==null?void 0:V.docs)==null?void 0:K.source}}};var M,A,S;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    media: '',
    heading: 'Card'
  },
  decorators: [() => ({
    template: '<div style="max-width: 50%;"><story /></div>'
  })],
  name: 'No Media',
  parameters: {
    docs: {
      source: {
        code: \`<UsaCard heading="Card">\\n\\t<template #default><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum tenetur quo cupiditate, eaque qui officia recusandae.</p></template>\\n\\t<template #footer><div><button type="button" class="usa-button">Visit Florida Keys</button></div></template>\\n</UsaCard>\`
      }
    }
  }
}`,...(S=(A=p.parameters)==null?void 0:A.docs)==null?void 0:S.source}}};var N,_,H;g.parameters={...g.parameters,docs:{...(N=g.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    heading: '',
    'slot:heading': ''
  },
  decorators: [() => ({
    template: '<div style="max-width: 50%;"><story /></div>'
  })],
  name: 'No Header',
  parameters: {
    docs: {
      source: {
        code: \`<UsaCard>\\n\\t<template #media><img src="https://designsystem.digital.gov/img/introducing-uswds-2-0/built-to-grow--alt.jpg" alt="A placeholder image"></template>\\n\\t<template #default><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum tenetur quo cupiditate, eaque qui officia recusandae.</p></template>\\n\\t<template #footer><div><button type="button" class="usa-button">Visit Florida Keys</button></div></template>\\n</UsaCard>\`
      }
    }
  }
}`,...(H=(_=g.parameters)==null?void 0:_.docs)==null?void 0:H.source}}};var $,B,R;f.parameters={...f.parameters,docs:{...($=f.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    footer: '',
    heading: 'Card'
  },
  decorators: [() => ({
    template: '<div style="max-width: 50%;"><story /></div>'
  })],
  name: 'No Footer',
  parameters: {
    docs: {
      source: {
        code: \`<UsaCard heading="Card">\\n\\t<template #media><img src="https://designsystem.digital.gov/img/introducing-uswds-2-0/built-to-grow--alt.jpg" alt="A placeholder image"></template>\\n\\t<template #default><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum tenetur quo cupiditate, eaque qui officia recusandae.</p></template>\\n</UsaCard>\`
      }
    }
  }
}`,...(R=(B=f.parameters)==null?void 0:B.docs)==null?void 0:R.source}}};var I,D,O;h.parameters={...h.parameters,docs:{...(I=h.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    cardTag: 'section',
    heading: 'Card'
  },
  decorators: [() => ({
    template: '<div style="max-width: 50%;"><story /></div>'
  })],
  name: 'Custom Card Tag',
  parameters: {
    docs: {
      source: {
        code: \`<UsaCard heading="Card" card-tag="section">\\n\\t<template #media><img src="https://designsystem.digital.gov/img/introducing-uswds-2-0/built-to-grow--alt.jpg" alt="A placeholder image"></template>\\n\\t<template #default><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum tenetur quo cupiditate, eaque qui officia recusandae.</p></template>\\n\\t<template #footer><div><button type="button" class="usa-button">Visit Florida Keys</button></div></template>\\n</UsaCard>\`
      }
    }
  }
}`,...(O=(D=h.parameters)==null?void 0:D.docs)==null?void 0:O.source}}};var z,G,J;y.parameters={...y.parameters,docs:{...(z=y.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    insetMedia: true,
    heading: 'Card'
  },
  decorators: [() => ({
    template: '<div style="max-width: 50%;"><story /></div>'
  })],
  name: 'Inset Media',
  parameters: {
    docs: {
      source: {
        code: \`<UsaCard heading="Card" :inset-media="true">\\n\\t<template #media><img src="https://designsystem.digital.gov/img/introducing-uswds-2-0/built-to-grow--alt.jpg" alt="A placeholder image"></template>\\n\\t<template #default><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum tenetur quo cupiditate, eaque qui officia recusandae.</p></template>\\n\\t<template #footer><div><button type="button" class="usa-button">Visit Florida Keys</button></div></template>\\n</UsaCard>\`
      }
    }
  }
}`,...(J=(G=y.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var Q,W,X;b.parameters={...b.parameters,docs:{...(Q=b.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    headingTag: 'h4',
    heading: 'Card'
  },
  decorators: [() => ({
    template: '<div style="max-width: 50%;"><story /></div>'
  })],
  name: 'Custom Heading Tag',
  parameters: {
    docs: {
      source: {
        code: \`<UsaCard heading="Card" heading-tag="h4">\\n\\t<template #media><img src="https://designsystem.digital.gov/img/introducing-uswds-2-0/built-to-grow--alt.jpg" alt="A placeholder image"></template>\\n\\t<template #default><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum tenetur quo cupiditate, eaque qui officia recusandae.</p></template>\\n\\t<template #footer><div><button type="button" class="usa-button">Visit Florida Keys</button></div></template>\\n</UsaCard>\`
      }
    }
  }
}`,...(X=(W=b.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};var Y,Z,ee;C.parameters={...C.parameters,docs:{...(Y=C.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    'slot:heading': 'Custom header slot'
  },
  decorators: [() => ({
    template: '<div style="max-width: 50%;"><story /></div>'
  })],
  name: 'Header Slot',
  parameters: {
    docs: {
      source: {
        code: \`<UsaCard>\\n\\t<template #heading>Custom header slot</template>\\n\\t<template #media><img src="https://designsystem.digital.gov/img/introducing-uswds-2-0/built-to-grow--alt.jpg" alt="A placeholder image"></template>\\n\\t<template #default><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum tenetur quo cupiditate, eaque qui officia recusandae.</p></template>\\n\\t<template #footer><div><button type="button" class="usa-button">Visit Florida Keys</button></div></template>\\n</UsaCard>\`
      }
    }
  }
}`,...(ee=(Z=C.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,ae,se;v.parameters={...v.parameters,docs:{...(te=v.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    heading: 'Card',
    customClasses: {
      container: ['test-container-class'],
      header: ['test-header-class'],
      heading: ['test-heading-class'],
      media: ['test-media-class'],
      img: ['test-img-class'],
      body: ['test-body-class'],
      footer: ['test-footer-class']
    }
  },
  decorators: [() => ({
    template: '<div style="max-width: 50%;"><story /></div>'
  })],
  name: 'Custom Classes',
  parameters: {
    docs: {
      source: {
        code: \`<UsaCard heading="Card" :custom-classes="{ container: ['test-container-class'], header: ['test-header-class'], heading: ['test-heading-class'], media: ['test-media-class'], img: ['test-img-class'], body: ['test-body-class'], footer: ['test-footer-class'] }">\\n\\t<template #media><img src="https://designsystem.digital.gov/img/introducing-uswds-2-0/built-to-grow--alt.jpg" alt="A placeholder image"></template>\\n\\t<template #default><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum tenetur quo cupiditate, eaque qui officia recusandae.</p></template>\\n\\t<template #footer><div><button type="button" class="usa-button">Visit Florida Keys</button></div></template>\\n</UsaCard>\`
      }
    }
  }
}`,...(se=(ae=v.parameters)==null?void 0:ae.docs)==null?void 0:se.source}}};var ie,oe,re;q.parameters={...q.parameters,docs:{...(ie=q.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    flag: true,
    heading: 'Card'
  },
  name: 'Flag Layout',
  parameters: {
    docs: {
      source: {
        code: \`<UsaCard heading="Card" :flag="true">\\n\\t<template #media><img src="https://designsystem.digital.gov/img/introducing-uswds-2-0/built-to-grow--alt.jpg" alt="A placeholder image"></template>\\n\\t<template #default><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum tenetur quo cupiditate, eaque qui officia recusandae.</p></template>\\n\\t<template #footer><div><button type="button" class="usa-button">Visit Florida Keys</button></div></template>\\n</UsaCard>\`
      }
    }
  }
}`,...(re=(oe=q.parameters)==null?void 0:oe.docs)==null?void 0:re.source}}};var de,ne,le;w.parameters={...w.parameters,docs:{...(de=w.parameters)==null?void 0:de.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    flag: true,
    mediaPosition: 'right',
    heading: 'Card'
  },
  name: 'Flag Layout w/ Media Right',
  parameters: {
    docs: {
      source: {
        code: \`<UsaCard heading="Card" :flag="true" media-position="right">\\n\\t<template #media><img src="https://designsystem.digital.gov/img/introducing-uswds-2-0/built-to-grow--alt.jpg" alt="A placeholder image"></template>\\n\\t<template #default><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum tenetur quo cupiditate, eaque qui officia recusandae.</p></template>\\n\\t<template #footer><div><button type="button" class="usa-button">Visit Florida Keys</button></div></template>\\n</UsaCard>\`
      }
    }
  }
}`,...(le=(ne=w.parameters)==null?void 0:ne.docs)==null?void 0:le.source}}};const Ee=["DefaultCard","HeaderFirstTagCard","NoMediaCard","NoHeaderCard","NoFooterCard","CustomCardTagCard","InsetMediaCard","CustomHeadingTagCard","HeadingSlotCard","CustomClassesCard","FlagLayoutCard","FlagLayoutMediaRightCard"];export{h as CustomCardTagCard,v as CustomClassesCard,b as CustomHeadingTagCard,c as DefaultCard,q as FlagLayoutCard,w as FlagLayoutMediaRightCard,u as HeaderFirstTagCard,C as HeadingSlotCard,y as InsetMediaCard,f as NoFooterCard,g as NoHeaderCard,p as NoMediaCard,Ee as __namedExportsOrder,Ue as default};
