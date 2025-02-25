import{s as p,c as _,a as C,r as U,n as u,e as R,o as $}from"./vue.esm-bundler-DsKf3Hbt.js";import{G as N}from"./constants-BA52rpFi.js";import{U as P}from"./UsaGraphicListRow-D8e9pzRG.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const a={__name:"UsaGraphicList",props:{variant:{type:String,default:"dark",validator(s){const t=["light","dark"].includes(s);return t||console.warn(`'${s}' is not a valid graphic list variant`),t}},customClasses:{type:Object,default:()=>({container:[]})}},setup(s){const t=R("vueUswds.gridNamespace",N),r=s,k=p(()=>[{"usa-section--dark":r.variant==="dark","usa-section--light":r.variant==="light"}]),G=p(()=>{var i,d;return(d=(i=r.customClasses)==null?void 0:i.container)!=null&&d.length?r.customClasses.container:[`${t}container`]});return(i,d)=>($(),_("section",{class:u(["usa-graphic-list usa-section",k.value])},[C("div",{class:u(G.value)},[U(i.$slots,"default",{variant:s.variant})],2)],2))}};a.__docgenInfo={exportName:"default",displayName:"UsaGraphicList",type:1,props:[{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"customClasses",global:!1,description:"",tags:[],required:!1,type:"Record<string, any>",declarations:[],schema:"Record<string, any>",default:`() => {
    return {
        container: [],
    };
}`},{name:"variant",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'"dark"'}],events:[],slots:[{name:"default",type:"{ variant: string; }",description:"",declarations:[],schema:{kind:"object",type:"{ variant: string; }"}}],exposed:[{name:"customClasses",type:"Record<string, any>",description:"",declarations:[],schema:"Record<string, any>"},{name:"variant",type:"string",description:"",declarations:[],schema:"string"}],sourceFiles:"/home/runner/work/vue-uswds/vue-uswds/src/components/UsaGraphicList/UsaGraphicList.vue"};const e={variant:a.props.variant.default,customClasses:a.props.customClasses.default()},l=`
  <UsaGraphicListRow class="grid-row grid-gap">
    <div class="usa-media-block tablet:grid-col">
      <img class="usa-media-block__img" src="/assets/img/circle-124.png" alt="">
      <div class="usa-media-block__body">
        <h2 class="usa-graphic-list__heading">Graphic headings can vary.</h2>
        <p>Graphic headings can be used a few different ways, depending on what your landing page is for. Highlight your values, specific program areas, or results.</p>
      </div>
    </div>
    <div class="usa-media-block tablet:grid-col">
      <img class="usa-media-block__img" src="/assets/img/circle-124.png" alt="">
      <div class="usa-media-block__body">
        <h2 class="usa-graphic-list__heading">Stick to 6 or fewer words.</h2>
        <p>Keep body text to about 30 words. They can be shorter, but try to be somewhat balanced across all four. It creates a clean appearance with good spacing.</p>
      </div>
    </div>
  </UsaGraphicListRow>

  <UsaGraphicListRow class="grid-row grid-gap">
    <div class="usa-media-block tablet:grid-col">
      <img class="usa-media-block__img" src="/assets/img/circle-124.png" alt="">
      <div class="usa-media-block__body">
        <h2 class="usa-graphic-list__heading">Never highlight anything without a goal.</h2>
        <p>For anything you want to highlight here, understand what your users know now, and what activity or impression you want from them after they see it.</p>
      </div>
    </div>
    <div class="usa-media-block tablet:grid-col">
      <img class="usa-media-block__img" src="/assets/img/circle-124.png" alt="">
      <div class="usa-media-block__body">
        <h2 class="usa-graphic-list__heading">Could also have 2 or 6.</h2>
        <p>In addition to your goal, find out your users' goals. What do they want to know or do that supports your mission? Use these headings to show those.</p>
      </div>
    </div>
  </UsaGraphicListRow>
`,D={component:a,title:"Components/UsaGraphicList",argTypes:{variant:{options:["light","dark"],control:{type:"radio"}},customClasses:{control:{type:"object"}},default:{control:{type:"text"}}},args:{variant:e.variant,customClasses:e.customClasses,default:l},render:s=>({components:{UsaGraphicList:a,UsaGraphicListRow:P},props:Object.keys(a.props),setup(){return{args:s}},template:`<UsaGraphicList :variant="args.variant" :custom-classes="args.customClasses">${s.default}</UsaGraphicList>`})},n={args:{...e},name:"Default",parameters:{docs:{source:{code:`<UsaGraphicList>${l}</UsaGraphicList>`}}}},o={args:{...e,variant:"light"},name:"Light",parameters:{docs:{source:{code:`<UsaGraphicList variant="light">${l}</UsaGraphicList>`}}}},c={args:{...e,customClasses:{container:["custom-container-class"]}},name:"Custom Classes",parameters:{docs:{source:{code:`<UsaGraphicList :custom-classes="{ container: ['custom-container-class'] }">${l}</UsaGraphicList>`}}}};var m,g,h;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    ...defaultProps
  },
  name: 'Default',
  parameters: {
    docs: {
      source: {
        code: \`<UsaGraphicList>\${graphicListRows}</UsaGraphicList>\`
      }
    }
  }
}`,...(h=(g=n.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var y,f,v;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    variant: 'light'
  },
  name: 'Light',
  parameters: {
    docs: {
      source: {
        code: \`<UsaGraphicList variant="light">\${graphicListRows}</UsaGraphicList>\`
      }
    }
  }
}`,...(v=(f=o.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var b,L,w;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    customClasses: {
      container: ['custom-container-class']
    }
  },
  name: 'Custom Classes',
  parameters: {
    docs: {
      source: {
        code: \`<UsaGraphicList :custom-classes="{ container: ['custom-container-class'] }">\${graphicListRows}</UsaGraphicList>\`
      }
    }
  }
}`,...(w=(L=c.parameters)==null?void 0:L.docs)==null?void 0:w.source}}};const E=["DefaultGraphicList","LightGraphicList","CustomClassesGraphicList"];export{c as CustomClassesGraphicList,n as DefaultGraphicList,o as LightGraphicList,E as __namedExportsOrder,D as default};
