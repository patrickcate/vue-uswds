import{_ as e}from"./UsaCollectionMeta-afeGOQ6Y.js";import"./vue.esm-bundler-DsKf3Hbt.js";const r={ariaLabel:e.props.ariaLabel.default},c={component:e,title:"Components/UsaCollectionMeta",argTypes:{ariaLabel:{control:{type:"text"}},default:{control:{type:"text"}}},args:{ariaLabel:r.ariaLabel,default:'<li class="usa-collection__meta-item">Test meta item</li>'},render:t=>({components:{UsaCollectionMeta:e},props:Object.keys(e.props),setup(){return{args:t}},template:`<UsaCollectionMeta :aria-label="args.ariaLabel">${t.default}</UsaCollectionMeta>`})},a={args:{...r,ariaLabel:"Test aria label"},name:"Default",parameters:{docs:{source:{code:'<UsaCollectionMeta aria-label="Test aria label"><li class="usa-collection__meta-item">Test meta item</li></UsaCollectionMeta>'}}}};var l,o,s;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    ariaLabel: 'Test aria label'
  },
  name: 'Default',
  parameters: {
    docs: {
      source: {
        code: \`<UsaCollectionMeta aria-label="Test aria label"><li class="usa-collection__meta-item">Test meta item</li></UsaCollectionMeta>\`
      }
    }
  }
}`,...(s=(o=a.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};const m=["DefaultCollectionMeta"];export{a as DefaultCollectionMeta,m as __namedExportsOrder,c as default};
