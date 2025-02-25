import{s as b,f as U,g as v,n as h,h as k,o as z,r as C}from"./vue.esm-bundler-DsKf3Hbt.js";const a={__name:"UsaTag",props:{size:{type:String,default:"",validator(e){const s=e===""||e==="big";return s||console.warn(`'${e}' is not a valid tag size`),s}},tag:{type:String,default:"span"}},setup(e){const s=e,y=b(()=>[{"usa-tag--big":s.size==="big"}]);return(T,_)=>(z(),U(k(e.tag),{class:h(["usa-tag",y.value])},{default:v(()=>[C(T.$slots,"default")]),_:3},8,["class"]))}};a.__docgenInfo={exportName:"default",displayName:"UsaTag",type:1,props:[{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"tag",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'"span"'},{name:"size",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'""'}],events:[],slots:[{name:"default",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}}],exposed:[{name:"tag",type:"string",description:"",declarations:[],schema:"string"},{name:"size",type:"string",description:"",declarations:[],schema:"string"}],sourceFiles:"/home/runner/work/vue-uswds/vue-uswds/src/components/UsaTag/UsaTag.vue"};const o={size:a.props.size.default,tag:a.props.tag.default},q={component:a,title:"Components/UsaTag",argTypes:{size:{options:["","big"],control:{type:"radio"}},tag:{control:{type:"text"}},default:{control:{type:"text"}}},args:{tag:o.tag,default:"Test"},render:e=>({components:{UsaTag:a},props:Object.keys(a.props),setup(){return{args:e}},template:`<UsaTag :tag="args.tag" :size="args.size">${e.default}</UsaTag>`})},t={args:{...o},name:"Default",parameters:{docs:{source:{code:"<UsaTag>Test</UsaTag>"}}}},n={args:{...o,size:"big"},name:"Big",parameters:{docs:{source:{code:'<UsaTag size="big">Test</UsaTag>'}}}},r={args:{...o,tag:"div",default:"Test (div)"},name:"Custom Element",parameters:{docs:{source:{code:'<UsaTag tag="div">Test (div)</UsaTag>'}}}};var i,c,d;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    ...defaultProps
  },
  name: 'Default',
  parameters: {
    docs: {
      source: {
        code: \`<UsaTag>Test</UsaTag>\`
      }
    }
  }
}`,...(d=(c=t.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var g,l,p;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    size: 'big'
  },
  name: 'Big',
  parameters: {
    docs: {
      source: {
        code: \`<UsaTag size="big">Test</UsaTag>\`
      }
    }
  }
}`,...(p=(l=n.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var m,u,f;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    tag: 'div',
    default: 'Test (div)'
  },
  name: 'Custom Element',
  parameters: {
    docs: {
      source: {
        code: \`<UsaTag tag="div">Test (div)</UsaTag>\`
      }
    }
  }
}`,...(f=(u=r.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};const P=["DefaultTag","BigTag","CustomElementTag"];export{n as BigTag,r as CustomElementTag,t as DefaultTag,P as __namedExportsOrder,q as default};
