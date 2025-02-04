import{c as g,a as r,r as c,n as m,o as b}from"./vue.esm-bundler-DlC1_45x.js";const B={class:"usa-media-block"},a={__name:"UsaMediaBlock",props:{customClasses:{type:Object,default:()=>({media:[],body:[]})}},setup(e){return(n,C)=>{var d,l;return b(),g("div",B,[r("div",{class:m(["usa-media-block__img",(d=e.customClasses)==null?void 0:d.media])},[c(n.$slots,"media")],2),r("div",{class:m(["usa-media-block__body",(l=e.customClasses)==null?void 0:l.body])},[c(n.$slots,"default")],2)])}}};a.__docgenInfo={exportName:"default",displayName:"UsaMediaBlock",type:1,props:[{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"customClasses",global:!1,description:"",tags:[],required:!1,type:"Record<string, any>",declarations:[],schema:"Record<string, any>",default:`() => {
    return {
        media: [],
        body: [],
    };
}`}],events:[],slots:[{name:"media",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}},{name:"default",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}}],exposed:[{name:"customClasses",type:"Record<string, any>",description:"",declarations:[],schema:"Record<string, any>"}],sourceFiles:"/home/runner/work/vue-uswds/vue-uswds/src/components/UsaMediaBlock/UsaMediaBlock.vue"};const o={customClasses:a.props.customClasses.default()},U={component:a,title:"Components/UsaMediaBlock",argTypes:{customClasses:{control:{type:"object"}},media:{control:{type:"text"}},default:{control:{type:"text"}}},args:{customClasses:o.customClasses,media:"Media",default:"Body"},render:e=>({components:{UsaMediaBlock:a},props:Object.keys(a.props),setup(){return{args:e}},template:`
  <UsaMediaBlock :custom-classes="args.customClasses">
    <template v-if="!!args.media" #media>${e.media}</template>
    <template v-if="!!args.default" #default>${e.default}</template>
  </UsaMediaBlock>`})},s={args:{...o},name:"Default",parameters:{docs:{source:{code:"<UsaMediaBlock><template #media>Media</template><template #default>Body</template></UsaMediaBlock>"}}}},t={args:{...o,customClasses:{media:["test-media-class"],body:["test-body-class"]}},name:"Custom Classes",parameters:{docs:{source:{code:`<UsaMediaBlock :custom-classes="{media: ['test-media-class'], body: ['test-body-class']}"><template #media>Media</template><template #default>Body</template></UsaMediaBlock>`}}}};var i,p,u;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    ...defaultProps
  },
  name: 'Default',
  parameters: {
    docs: {
      source: {
        code: \`<UsaMediaBlock><template #media>Media</template><template #default>Body</template></UsaMediaBlock>\`
      }
    }
  }
}`,...(u=(p=s.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var y,f,k;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    customClasses: {
      media: ['test-media-class'],
      body: ['test-body-class']
    }
  },
  name: 'Custom Classes',
  parameters: {
    docs: {
      source: {
        code: \`<UsaMediaBlock :custom-classes="{media: ['test-media-class'], body: ['test-body-class']}"><template #media>Media</template><template #default>Body</template></UsaMediaBlock>\`
      }
    }
  }
}`,...(k=(f=t.parameters)==null?void 0:f.docs)==null?void 0:k.source}}};const h=["DefaultMediaBlock","CustomClassesMediaBlock"];export{t as CustomClassesMediaBlock,s as DefaultMediaBlock,h as __namedExportsOrder,U as default};
