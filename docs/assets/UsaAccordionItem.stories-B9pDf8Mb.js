import{p as J,M as F,w as Q,L as l,s as v,c as H,r as _,n as q,o as M,e as i,z as W,I as X,a as S,g as Y,m as Z,b as k,G as ee,d as oe,v as ae}from"./vue.esm-bundler-DlC1_45x.js";import{n as ne}from"./unique-id-DrlS73OY.js";import{_ as te}from"./BaseHeading-BkBCpxXB.js";import{u as se}from"./useAccordion-DA_awWaV.js";const ce=["aria-multiselectable"],w={__name:"UsaAccordion",props:{bordered:{type:Boolean,default:!1},multiselectable:{type:Boolean,default:!1},headingTag:{type:String,default:"h2"}},emits:["update:accordionItems"],setup(e,{expose:h,emit:C}){const U=C,s=e,t=J({}),c=F(s,"multiselectable"),{registerAccordionItem:a,unregisterAccordionItem:f,openItem:r,closeItem:b,toggleItem:d}=se(t,c);Q(t,()=>{U("update:accordionItems",t)}),l("accordionHeadingTag",v(()=>s.headingTag)),l("registerAccordionItem",a),l("unregisterAccordionItem",f),l("toggleItem",d),l("accordionItems",t);const A=v(()=>[{"usa-accordion--bordered":s.bordered}]);return h({openItem:r,closeItem:b,toggleItem:d}),(I,G)=>(M(),H("div",{class:q(["usa-accordion",A.value]),"aria-multiselectable":c.value||null},[_(I.$slots,"default")],10,ce))}};w.__docgenInfo={exportName:"default",displayName:"UsaAccordion",type:1,props:[{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"bordered",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]},default:"false"},{name:"multiselectable",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]},default:"false"},{name:"headingTag",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'"h2"'}],events:[{name:"update:accordionItems",description:"",tags:[],type:"any[]",signature:'(event: "update:accordionItems", ...args: any[]): void',declarations:[],schema:["any"]}],slots:[{name:"default",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}}],exposed:[{name:"openItem",type:"any",description:"",declarations:[],schema:"any"},{name:"closeItem",type:"any",description:"",declarations:[],schema:"any"},{name:"toggleItem",type:"any",description:"",declarations:[],schema:"any"},{name:"bordered",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"multiselectable",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"headingTag",type:"string",description:"",declarations:[],schema:"string"}],sourceFiles:"/home/runner/work/vue-uswds/vue-uswds/src/components/UsaAccordion/UsaAccordion.vue"};const re=["aria-expanded","aria-controls"],de=["id","hidden"],n={__name:"UsaAccordionItem",props:{id:{type:String,default:""},label:{type:String,default:""},open:{type:Boolean,default:!1},customClasses:{type:Object,default:()=>({heading:[],button:[],content:[]})}},setup(e){const h=i("accordionHeadingTag"),C=i("registerAccordionItem"),U=i("unregisterAccordionItem"),s=i("toggleItem"),t=i("accordionItems"),c=e,a=v(()=>c.id||ne("usa-accordion-item")),f=F(t,a.value);return C(a.value,c.open),W(()=>{U(a.value)}),(r,b)=>{var d,A;return M(),H(ee,null,[X(k(te),Z(r.$attrs,{class:["usa-accordion__heading",(d=e.customClasses)==null?void 0:d.heading],tag:k(h)}),{default:Y(()=>{var I;return[S("button",{type:"button",class:q(["usa-accordion__button",(I=e.customClasses)==null?void 0:I.button]),"aria-expanded":f.value,"aria-controls":a.value,onClick:b[0]||(b[0]=G=>k(s)(a.value))},[_(r.$slots,"label",{},()=>[oe(ae(e.label),1)])],10,re)]}),_:3},16,["class","tag"]),S("div",{id:a.value,class:q(["usa-accordion__content",(A=e.customClasses)==null?void 0:A.content]),hidden:!f.value},[_(r.$slots,"default")],10,de)],64)}}};n.__docgenInfo={exportName:"default",displayName:"UsaAccordionItem",type:1,props:[{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"id",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'""'},{name:"label",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'""'},{name:"open",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]},default:"false"},{name:"customClasses",global:!1,description:"",tags:[],required:!1,type:"Record<string, any>",declarations:[],schema:"Record<string, any>",default:`() => {
    return {
        heading: [],
        button: [],
        content: [],
    };
}`}],events:[],slots:[{name:"label",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}},{name:"default",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}}],exposed:[{name:"id",type:"string",description:"",declarations:[],schema:"string"},{name:"label",type:"string",description:"",declarations:[],schema:"string"},{name:"open",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"customClasses",type:"Record<string, any>",description:"",declarations:[],schema:"Record<string, any>"}],sourceFiles:"/home/runner/work/vue-uswds/vue-uswds/src/components/UsaAccordionItem/UsaAccordionItem.vue"};const o={id:n.props.id.default,label:n.props.label.default,open:n.props.open.default,customClasses:n.props.customClasses.default()},le={component:n,title:"Components/UsaAccordionItem",argTypes:{id:{control:{type:"text"}},label:{control:{type:"text"},table:{category:"props"}},open:{control:{type:"boolean"}},customClasses:{control:{type:"object"}},"slot:label":{control:{type:"text"},name:"label",table:{category:"slots"}},default:{control:{type:"text"}}},args:{id:o.id,label:o.label,open:o.open,customClasses:o.customClasses,"slot:label":"",default:""},render:e=>({components:{UsaAccordion:w,UsaAccordionItem:n},props:Object.keys(n.props),setup(){return{args:e}},template:`<UsaAccordionItem :id="args.id" :label="args.label" :open="args.open" :custom-classes="args.customClasses">
      <template #label>{{ args['slot:label'] }}</template>
      <template #default>{{ args.default }}</template>
    </UsaAccordionItem>`}),decorators:[e=>({components:{story:e,UsaAccordion:w},template:"<UsaAccordion><story /></UsaAccordion>"})]},m={args:{...o,label:"Accordion 1",default:"Accordion 1 Content"},name:"Default",parameters:{docs:{source:{code:`<UsaAccordion>
	<UsaAccordionItem label="Accordion 1">Accordion 1 Content</UsaAccordionItem>
</UsaAccordion>`}}}},u={args:{...o,"slot:label":"Custom Label",default:"Accordion 1 Content"},name:"Label Slot",parameters:{docs:{source:{code:`<UsaAccordion>
	<UsaAccordionItem>
		<template #label>Custom Label</template>
		<template #default>Accordion 1 Content</template>
	</UsaAccordionItem>
</UsaAccordion>`}}}},p={args:{...o,open:!0,label:"Accordion 1",default:"Accordion 1 Content"},name:"Open by Default",parameters:{docs:{source:{code:`<UsaAccordion>
	<UsaAccordionItem :open="true" label="Accordion 1">Accordion 1 Content</UsaAccordionItem>
</UsaAccordion>`}}}},g={args:{...o,id:"custom-id",label:"Accordion 1",default:"Accordion 1 Content"},name:"Custom ID",parameters:{docs:{source:{code:`<UsaAccordion>
	<UsaAccordionItem id="custom-id" label="Accordion 1">Accordion 1 Content</UsaAccordionItem>
</UsaAccordion>`}}}},y={args:{...o,customClasses:{heading:["custom-heading-class"],button:["custom-button-class"],content:["custom-content-class"]},label:"Accordion 1",default:"Accordion 1 Content"},name:"Custom Classes",parameters:{docs:{source:{code:`<UsaAccordion>
	<UsaAccordionItem :custom-classes="{ heading: ['custom-heading-class'] }" label="Accordion 1">Accordion 1 Content</UsaAccordionItem>
</UsaAccordion>`}}}};var P,x,O;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    label: 'Accordion 1',
    default: 'Accordion 1 Content'
  },
  name: 'Default',
  parameters: {
    docs: {
      source: {
        code: \`<UsaAccordion>\\n\\t<UsaAccordionItem label="Accordion 1">Accordion 1 Content</UsaAccordionItem>\\n</UsaAccordion>\`
      }
    }
  }
}`,...(O=(x=m.parameters)==null?void 0:x.docs)==null?void 0:O.source}}};var R,D,N;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    'slot:label': 'Custom Label',
    default: 'Accordion 1 Content'
  },
  name: 'Label Slot',
  parameters: {
    docs: {
      source: {
        code: \`<UsaAccordion>\\n\\t<UsaAccordionItem>\\n\\t\\t<template #label>Custom Label</template>\\n\\t\\t<template #default>Accordion 1 Content</template>\\n\\t</UsaAccordionItem>\\n</UsaAccordion>\`
      }
    }
  }
}`,...(N=(D=u.parameters)==null?void 0:D.docs)==null?void 0:N.source}}};var T,j,B;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    open: true,
    label: 'Accordion 1',
    default: 'Accordion 1 Content'
  },
  name: 'Open by Default',
  parameters: {
    docs: {
      source: {
        code: \`<UsaAccordion>\\n\\t<UsaAccordionItem :open="true" label="Accordion 1">Accordion 1 Content</UsaAccordionItem>\\n</UsaAccordion>\`
      }
    }
  }
}`,...(B=(j=p.parameters)==null?void 0:j.docs)==null?void 0:B.source}}};var L,$,V;g.parameters={...g.parameters,docs:{...(L=g.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    id: 'custom-id',
    label: 'Accordion 1',
    default: 'Accordion 1 Content'
  },
  name: 'Custom ID',
  parameters: {
    docs: {
      source: {
        code: \`<UsaAccordion>\\n\\t<UsaAccordionItem id="custom-id" label="Accordion 1">Accordion 1 Content</UsaAccordionItem>\\n</UsaAccordion>\`
      }
    }
  }
}`,...(V=($=g.parameters)==null?void 0:$.docs)==null?void 0:V.source}}};var E,K,z;y.parameters={...y.parameters,docs:{...(E=y.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    customClasses: {
      heading: ['custom-heading-class'],
      button: ['custom-button-class'],
      content: ['custom-content-class']
    },
    label: 'Accordion 1',
    default: 'Accordion 1 Content'
  },
  name: 'Custom Classes',
  parameters: {
    docs: {
      source: {
        code: \`<UsaAccordion>\\n\\t<UsaAccordionItem :custom-classes="{ heading: ['custom-heading-class'] }" label="Accordion 1">Accordion 1 Content</UsaAccordionItem>\\n</UsaAccordion>\`
      }
    }
  }
}`,...(z=(K=y.parameters)==null?void 0:K.docs)==null?void 0:z.source}}};const ie=["DefaultAccordionItem","LabelSlotAccordionItem","DefaultOpenAccordionItem","CustomIdAccordionItem","CustomClassesAccordionItem"],ye=Object.freeze(Object.defineProperty({__proto__:null,CustomClassesAccordionItem:y,CustomIdAccordionItem:g,DefaultAccordionItem:m,DefaultOpenAccordionItem:p,LabelSlotAccordionItem:u,__namedExportsOrder:ie,default:le},Symbol.toStringTag,{value:"Module"}));export{m as D,ye as U,n as _,w as a};
