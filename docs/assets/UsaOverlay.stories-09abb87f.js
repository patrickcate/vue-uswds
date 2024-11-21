import{U as r}from"./UsaOverlay-7374939f.js";import"./vue.esm-bundler-d9807bdf.js";const a={visible:r.props.visible.default},v={component:r,title:"Components/UsaOverlay",argTypes:{visible:{control:{type:"boolean"}}},args:{visible:a.visible},render:p=>({components:{UsaOverlay:r},props:Object.keys(r.props),setup(){return{args:p}},template:'<UsaOverlay :visible="args.visible"></UsaOverlay>'})},e={args:{...a},name:"Default",parameters:{docs:{source:{code:"<UsaOverlay />"}}}},s={args:{...a,visible:!0},name:"Visible",parameters:{docs:{source:{code:'<UsaOverlay :visible="true" />'}}}};var o,n,t;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    ...defaultProps
  },
  name: 'Default',
  parameters: {
    docs: {
      source: {
        code: \`<UsaOverlay />\`
      }
    }
  }
}`,...(t=(n=e.parameters)==null?void 0:n.docs)==null?void 0:t.source}}};var l,i,c;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    visible: true
  },
  name: 'Visible',
  parameters: {
    docs: {
      source: {
        code: \`<UsaOverlay :visible="true" />\`
      }
    }
  }
}`,...(c=(i=s.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};const d=["DefaultOverlay","VisibleOverlay"];export{e as DefaultOverlay,s as VisibleOverlay,d as __namedExportsOrder,v as default};
