import{U as a}from"./UsaChecklistItem-1174e514.js";import"./vue.esm-bundler-2e7cedae.js";const r={checked:a.props.checked.default},I={component:a,title:"Components/UsaChecklistItem",argTypes:{checked:{control:{type:"boolean"}},ariaLabel:{control:{type:"text"}}},args:{checked:r.checked,ariaLabel:""},decorators:[()=>({template:'<ul class="usa-checklist" style="margin-left: 40px"><story /></ul>'})],render:c=>({components:{UsaChecklistItem:a},props:Object.keys(a.props),setup(){return{args:c}},template:`<UsaChecklistItem :checked="args.checked" :aria-label="args.ariaLabel">
    <template v-if="!!args.default" #default>${c.default}</template>
  </UsaChecklistItem>`})},e={args:{...r,default:"Test item"},name:"Default",parameters:{docs:{source:{code:"<UsaChecklistItem>Test item</UsaChecklistItem>"}}}},t={args:{...r,default:"Test item",checked:!0},name:"Checked",parameters:{docs:{source:{code:'<UsaChecklistItem :checked="true">Test item</UsaChecklistItem>'}}}},s={args:{...r,default:"Test item",ariaLabel:"is invalid"},name:"Custom Aria Label",parameters:{docs:{source:{code:'<UsaChecklistItem aria-label="is invalid">Test item</UsaChecklistItem>'}}}};var l,o,m;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    default: 'Test item'
  },
  name: 'Default',
  parameters: {
    docs: {
      source: {
        code: \`<UsaChecklistItem>Test item</UsaChecklistItem>\`
      }
    }
  }
}`,...(m=(o=e.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};var n,i,d;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    default: 'Test item',
    checked: true
  },
  name: 'Checked',
  parameters: {
    docs: {
      source: {
        code: \`<UsaChecklistItem :checked="true">Test item</UsaChecklistItem>\`
      }
    }
  }
}`,...(d=(i=t.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var u,p,k;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    default: 'Test item',
    ariaLabel: 'is invalid'
  },
  name: 'Custom Aria Label',
  parameters: {
    docs: {
      source: {
        code: \`<UsaChecklistItem aria-label="is invalid">Test item</UsaChecklistItem>\`
      }
    }
  }
}`,...(k=(p=s.parameters)==null?void 0:p.docs)==null?void 0:k.source}}};const f=["DefaultChecklistItem","CheckedChecklistItem","CustomAriaLabelChecklistItem"];export{t as CheckedChecklistItem,s as CustomAriaLabelChecklistItem,e as DefaultChecklistItem,f as __namedExportsOrder,I as default};
