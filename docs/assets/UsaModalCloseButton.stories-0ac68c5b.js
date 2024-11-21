import{U as e}from"./UsaModalCloseButton-736559c8.js";import"./vue.esm-bundler-d9807bdf.js";import"./constants-fce87d39.js";const t={ariaLabel:"Close Modal"},M={component:e,title:"Components/UsaModalCloseButton",argTypes:{ariaLabel:{control:{type:"text"}},default:{control:{type:"text"}}},args:{ariaLabel:t.ariaLabel,default:""},render:s=>({components:{UsaModalCloseButton:e},props:Object.keys(e.props),setup(){return{args:s}},template:`<UsaModalCloseButton :aria-label="args.ariaLabel"><template v-if="!!args.default" #default="svgSpritePath">${s.default}</template></UsaModalCloseButton>`})},a={args:{...t},name:"Default",parameters:{docs:{source:{code:'<UsaModalCloseButton :aria-label="Close Modal"></UsaModalCloseButton>'}}}},o={args:{...t,default:"x"},name:"Custom Icon",parameters:{docs:{source:{code:'<UsaModalCloseButton :aria-label="Close Modal">x</UsaModalCloseButton>'}}}};var l,r,n;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    ...defaultProps
  },
  name: 'Default',
  parameters: {
    docs: {
      source: {
        code: \`<UsaModalCloseButton :aria-label="Close Modal"></UsaModalCloseButton>\`
      }
    }
  }
}`,...(n=(r=a.parameters)==null?void 0:r.docs)==null?void 0:n.source}}};var d,u,c;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    default: 'x'
  },
  name: 'Custom Icon',
  parameters: {
    docs: {
      source: {
        code: \`<UsaModalCloseButton :aria-label="Close Modal">x</UsaModalCloseButton>\`
      }
    }
  }
}`,...(c=(u=o.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};const i=["DefaultModalCloseButton","CustomIconModalCloseButton"];export{o as CustomIconModalCloseButton,a as DefaultModalCloseButton,i as __namedExportsOrder,M as default};
