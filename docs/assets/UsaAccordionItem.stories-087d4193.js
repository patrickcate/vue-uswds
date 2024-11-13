import{p as W,M as z,w as X,L as l,s as v,c as F,r as _,n as q,o as M,z as Y,I as Z,g as ee,m as oe,b as k,a as w,G as ae,e as i,d as ne,v as te}from"./vue.esm-bundler-2e7cedae.js";import{n as se}from"./unique-id-a1cb1937.js";import{B as ce}from"./BaseHeading-0ea88faf.js";import{u as re}from"./useAccordion-70dfc258.js";const de=["aria-multiselectable"],G={__name:"UsaAccordion",props:{bordered:{type:Boolean,default:!1},multiselectable:{type:Boolean,default:!1},headingTag:{type:String,default:"h2"}},emits:["update:accordionItems"],setup(e,{expose:h,emit:C}){const U=C,s=e,t=W({}),c=z(s,"multiselectable"),{registerAccordionItem:a,unregisterAccordionItem:f,openItem:r,closeItem:b,toggleItem:d}=re(t,c);X(t,()=>{U("update:accordionItems",t)}),l("accordionHeadingTag",v(()=>s.headingTag)),l("registerAccordionItem",a),l("unregisterAccordionItem",f),l("toggleItem",d),l("accordionItems",t);const A=v(()=>[{"usa-accordion--bordered":s.bordered}]);return h({openItem:r,closeItem:b,toggleItem:d}),(I,Q)=>(M(),F("div",{class:q(["usa-accordion",A.value]),"aria-multiselectable":c.value||null},[_(I.$slots,"default")],10,de))}},S=G;G.__docgenInfo={exportName:"default",displayName:"UsaAccordion",type:1,props:[{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"bordered",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]},default:"false"},{name:"multiselectable",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]},default:"false"},{name:"headingTag",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'"h2"'}],events:[{name:"update:accordionItems",description:"",tags:[],type:"any[]",signature:'(event: "update:accordionItems", ...args: any[]): void',declarations:[],schema:["any"]}],slots:[{name:"default",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}}],exposed:[{name:"openItem",type:"any",description:"",declarations:[],schema:"any"},{name:"closeItem",type:"any",description:"",declarations:[],schema:"any"},{name:"toggleItem",type:"any",description:"",declarations:[],schema:"any"},{name:"bordered",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"multiselectable",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"headingTag",type:"string",description:"",declarations:[],schema:"string"}],sourceFiles:"/home/runner/work/vue-uswds/vue-uswds/src/components/UsaAccordion/UsaAccordion.vue"};const le=["aria-expanded","aria-controls"],ie=["id","hidden"],J={__name:"UsaAccordionItem",props:{id:{type:String,default:""},label:{type:String,default:""},open:{type:Boolean,default:!1},customClasses:{type:Object,default:()=>({heading:[],button:[],content:[]})}},setup(e){const h=i("accordionHeadingTag"),C=i("registerAccordionItem"),U=i("unregisterAccordionItem"),s=i("toggleItem"),t=i("accordionItems"),c=e,a=v(()=>c.id||se("usa-accordion-item")),f=z(t,a.value);return C(a.value,c.open),Y(()=>{U(a.value)}),(r,b)=>{var d,A;return M(),F(ae,null,[Z(k(ce),oe(r.$attrs,{class:["usa-accordion__heading",(d=e.customClasses)==null?void 0:d.heading],tag:k(h)}),{default:ee(()=>{var I;return[w("button",{type:"button",class:q(["usa-accordion__button",(I=e.customClasses)==null?void 0:I.button]),"aria-expanded":f.value,"aria-controls":a.value,onClick:b[0]||(b[0]=Q=>k(s)(a.value))},[_(r.$slots,"label",{},()=>[ne(te(e.label),1)])],10,le)]}),_:3},16,["class","tag"]),w("div",{id:a.value,class:q(["usa-accordion__content",(A=e.customClasses)==null?void 0:A.content]),hidden:!f.value},[_(r.$slots,"default")],10,ie)],64)}}},n=J;J.__docgenInfo={exportName:"default",displayName:"UsaAccordionItem",type:1,props:[{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"id",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'""'},{name:"label",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'""'},{name:"open",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]},default:"false"},{name:"customClasses",global:!1,description:"",tags:[],required:!1,type:"Record<string, any>",declarations:[],schema:"Record<string, any>",default:`() => {
    return {
        heading: [],
        button: [],
        content: [],
    };
}`}],events:[],slots:[{name:"label",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}},{name:"default",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}}],exposed:[{name:"id",type:"string",description:"",declarations:[],schema:"string"},{name:"label",type:"string",description:"",declarations:[],schema:"string"},{name:"open",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"customClasses",type:"Record<string, any>",description:"",declarations:[],schema:"Record<string, any>"}],sourceFiles:"/home/runner/work/vue-uswds/vue-uswds/src/components/UsaAccordionItem/UsaAccordionItem.vue"};const o={id:n.props.id.default,label:n.props.label.default,open:n.props.open.default,customClasses:n.props.customClasses.default()},me={component:n,title:"Components/UsaAccordionItem",argTypes:{id:{control:{type:"text"}},label:{control:{type:"text"},table:{category:"props"}},open:{control:{type:"boolean"}},customClasses:{control:{type:"object"}},"slot:label":{control:{type:"text"},name:"label",table:{category:"slots"}},default:{control:{type:"text"}}},args:{id:o.id,label:o.label,open:o.open,customClasses:o.customClasses,"slot:label":"",default:""},render:e=>({components:{UsaAccordion:S,UsaAccordionItem:n},props:Object.keys(n.props),setup(){return{args:e}},template:`<UsaAccordionItem :id="args.id" :label="args.label" :open="args.open" :custom-classes="args.customClasses">
      <template #label>{{ args['slot:label'] }}</template>
      <template #default>{{ args.default }}</template>
    </UsaAccordionItem>`}),decorators:[e=>({components:{story:e,UsaAccordion:S},template:"<UsaAccordion><story /></UsaAccordion>"})]},m={args:{...o,label:"Accordion 1",default:"Accordion 1 Content"},name:"Default",parameters:{docs:{source:{code:`<UsaAccordion>
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
}`,...(O=(x=m.parameters)==null?void 0:x.docs)==null?void 0:O.source}}};var R,D,B;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(B=(D=u.parameters)==null?void 0:D.docs)==null?void 0:B.source}}};var N,T,j;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(j=(T=p.parameters)==null?void 0:T.docs)==null?void 0:j.source}}};var L,$,V;g.parameters={...g.parameters,docs:{...(L=g.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(V=($=g.parameters)==null?void 0:$.docs)==null?void 0:V.source}}};var E,H,K;y.parameters={...y.parameters,docs:{...(E=y.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(K=(H=y.parameters)==null?void 0:H.docs)==null?void 0:K.source}}};const ue=["DefaultAccordionItem","LabelSlotAccordionItem","DefaultOpenAccordionItem","CustomIdAccordionItem","CustomClassesAccordionItem"],be=Object.freeze(Object.defineProperty({__proto__:null,CustomClassesAccordionItem:y,CustomIdAccordionItem:g,DefaultAccordionItem:m,DefaultOpenAccordionItem:p,LabelSlotAccordionItem:u,__namedExportsOrder:ue,default:me},Symbol.toStringTag,{value:"Module"}));export{m as D,S as U,n as a,be as b};
