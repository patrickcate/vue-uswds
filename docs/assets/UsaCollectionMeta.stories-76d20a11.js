import{U as a}from"./UsaCollectionMeta-09af4ca8.js";import"./vue.esm-bundler-d9807bdf.js";const r={ariaLabel:a.props.ariaLabel.default},c={component:a,title:"Components/UsaCollectionMeta",argTypes:{ariaLabel:{control:{type:"text"}},default:{control:{type:"text"}}},args:{ariaLabel:r.ariaLabel,default:'<li class="usa-collection__meta-item">Test meta item</li>'},render:t=>({components:{UsaCollectionMeta:a},props:Object.keys(a.props),setup(){return{args:t}},template:`<UsaCollectionMeta :aria-label="args.ariaLabel">${t.default}</UsaCollectionMeta>`})},e={args:{...r,ariaLabel:"Test aria label"},name:"Default",parameters:{docs:{source:{code:'<UsaCollectionMeta aria-label="Test aria label"><li class="usa-collection__meta-item">Test meta item</li></UsaCollectionMeta>'}}}};var l,o,s;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(s=(o=e.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};const m=["DefaultCollectionMeta"];export{e as DefaultCollectionMeta,m as __namedExportsOrder,c as default};
