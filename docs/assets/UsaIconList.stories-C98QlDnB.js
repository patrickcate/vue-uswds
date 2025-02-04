import{s as p,c as x,r as v,n as R,e as P,o as C}from"./vue.esm-bundler-DlC1_45x.js";import{P as j}from"./constants-BA52rpFi.js";import{_ as w}from"./UsaIconListItem-CcmIifb5.js";import"./BaseHeading-BkBCpxXB.js";import"./UsaIcon-DQVSiqSr.js";const c={__name:"UsaIconList",props:{color:{type:String,default:""},size:{type:[String,Object],default:"",validator(s){let t=!1;const e=["","2xs","xs","sm","md","lg","xl","2xl"];return typeof s=="string"&&(t=e.includes(s)),typeof s=="object"&&(t=Object.values(s).some(m=>e.includes(m))),t||console.warn(`'${s}' is not a valid icon list size`),t}}},setup(s){const t=P("vueUswds.prefixSeparator",j),e=s,m=p(()=>e.size&&typeof e.size=="string"?[`usa-icon-list--size-${e.size}`]:typeof e.size=="object"&&Object.keys(e.size).length?Object.keys(e.size).reduce((o,I)=>(o.push(`${I}${t}usa-icon-list--size-${e.size[I]}`),o),[]):[]),S=p(()=>[{[`usa-icon-list--${e.color}`]:e.color},...m.value]);return(o,I)=>(C(),x("ul",{class:R(["usa-icon-list",S.value])},[v(o.$slots,"default")],2))}};c.__docgenInfo={exportName:"default",displayName:"UsaIconList",type:1,props:[{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"size",global:!1,description:"",tags:[],required:!1,type:"string | Record<string, any>",declarations:[],schema:{kind:"enum",type:"string | Record<string, any>",schema:["string","Record<string, any>"]},default:'""'},{name:"color",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'""'}],events:[],slots:[{name:"default",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}}],exposed:[{name:"size",type:"string | Record<string, any>",description:"",declarations:[],schema:{kind:"enum",type:"string | Record<string, any>",schema:["string","Record<string, any>"]}},{name:"color",type:"string",description:"",declarations:[],schema:"string"}],sourceFiles:"/home/runner/work/vue-uswds/vue-uswds/src/components/UsaIconList/UsaIconList.vue"};const n={color:c.props.color.default,size:c.props.size.default},N={component:c,title:"Components/UsaIconList",argTypes:{color:{control:{type:"text"}},default:{control:{type:"text"}}},args:{color:n.color,size:n.size,default:'<UsaIconListItem icon="check_circle">Icon list item</UsaIconListItem><UsaIconListItem icon="check_circle">Icon list item</UsaIconListItem><UsaIconListItem icon="check_circle">Icon list item</UsaIconListItem>'},render:s=>({components:{UsaIconList:c,UsaIconListItem:w},props:Object.keys(c.props),setup(){return{args:s}},template:`<UsaIconList
    :color="args.color"
    :size="args.size"
  >${s.default}</UsaIconList>`})},i={args:{...n},name:"Default",parameters:{docs:{source:{code:'<UsaIconList><UsaIconListItem icon="check_circle">Icon list item</UsaIconListItem><UsaIconListItem icon="check_circle">Icon list item</UsaIconListItem><UsaIconListItem icon="check_circle">Icon list item</UsaIconListItem></UsaIconList>'}}}},a={args:{...n,color:"success"},name:"Color",parameters:{docs:{source:{code:'<UsaIconList color="success"><UsaIconListItem icon="check_circle">Icon list item</UsaIconListItem><UsaIconListItem icon="check_circle">Icon list item</UsaIconListItem><UsaIconListItem icon="check_circle">Icon list item</UsaIconListItem></UsaIconList>'}}}},r={args:{...n,size:"lg"},name:"Single Size",parameters:{docs:{source:{code:'<UsaIconsList size="lg"><UsaIconListItem icon="check_circle">Icon list item</UsaIconListItem><UsaIconListItem icon="check_circle">Icon list item</UsaIconListItem><UsaIconListItem icon="check_circle">Icon list item</UsaIconListItem></UsaIconsList>'}}}},l={args:{...n,size:{mobile:"lg",tablet:"xl",desktop:"2xl"}},name:"Responsive Sizes",parameters:{docs:{source:{code:`<UsaIconsList :size="{ mobile: 'lg', tablet: 'xl', desktop: '2xl' }"><UsaIconListItem icon="check_circle">Icon list item</UsaIconListItem><UsaIconListItem icon="check_circle">Icon list item</UsaIconListItem><UsaIconListItem icon="check_circle">Icon list item</UsaIconListItem></UsaIconsList>`}}}};var d,u,L;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    ...defaultProps
  },
  name: 'Default',
  parameters: {
    docs: {
      source: {
        code: \`<UsaIconList><UsaIconListItem icon="check_circle">Icon list item</UsaIconListItem><UsaIconListItem icon="check_circle">Icon list item</UsaIconListItem><UsaIconListItem icon="check_circle">Icon list item</UsaIconListItem></UsaIconList>\`
      }
    }
  }
}`,...(L=(u=i.parameters)==null?void 0:u.docs)==null?void 0:L.source}}};var U,g,f;a.parameters={...a.parameters,docs:{...(U=a.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    color: 'success'
  },
  name: 'Color',
  parameters: {
    docs: {
      source: {
        code: \`<UsaIconList color="success"><UsaIconListItem icon="check_circle">Icon list item</UsaIconListItem><UsaIconListItem icon="check_circle">Icon list item</UsaIconListItem><UsaIconListItem icon="check_circle">Icon list item</UsaIconListItem></UsaIconList>\`
      }
    }
  }
}`,...(f=(g=a.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var y,k,h;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    size: 'lg'
  },
  name: 'Single Size',
  parameters: {
    docs: {
      source: {
        code: \`<UsaIconsList size="lg"><UsaIconListItem icon="check_circle">Icon list item</UsaIconListItem><UsaIconListItem icon="check_circle">Icon list item</UsaIconListItem><UsaIconListItem icon="check_circle">Icon list item</UsaIconListItem></UsaIconsList>\`
      }
    }
  }
}`,...(h=(k=r.parameters)==null?void 0:k.docs)==null?void 0:h.source}}};var _,z,b;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    size: {
      mobile: 'lg',
      tablet: 'xl',
      desktop: '2xl'
    }
  },
  name: 'Responsive Sizes',
  parameters: {
    docs: {
      source: {
        code: \`<UsaIconsList :size="{ mobile: 'lg', tablet: 'xl', desktop: '2xl' }"><UsaIconListItem icon="check_circle">Icon list item</UsaIconListItem><UsaIconListItem icon="check_circle">Icon list item</UsaIconListItem><UsaIconListItem icon="check_circle">Icon list item</UsaIconListItem></UsaIconsList>\`
      }
    }
  }
}`,...(b=(z=l.parameters)==null?void 0:z.docs)==null?void 0:b.source}}};const B=["DefaultIconList","ColorIconList","SingleSizeIconList","ResponsiveSizesIconList"];export{a as ColorIconList,i as DefaultIconList,l as ResponsiveSizesIconList,r as SingleSizeIconList,B as __namedExportsOrder,N as default};
