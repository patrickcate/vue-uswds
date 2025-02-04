import{_ as s}from"./UsaChecklist-CXfeXO6s.js";import{_ as d}from"./UsaChecklistItem-C0D488mm.js";import"./vue.esm-bundler-DlC1_45x.js";const u=[{id:"item1",text:"Use at least one uppercase character",checked:!1,ariaLabel:"is valid"},{id:"item2",text:"Use at least one number",checked:!0,ariaLabel:"is valid"},{text:"Use at least one symbol",checked:!1,ariaLabel:"is invalid"}],a={items:s.props.items.default()},f={component:s,subcomponents:{UsaChecklistItem:d},title:"Components/UsaChecklist",argTypes:{items:{control:{type:"object"}},default:{control:{type:"text"}}},args:{items:a.items,default:""},decorators:[()=>({template:'<ul class="usa-checklist" style="margin-left: 40px"><story /></ul>'})],render:i=>({components:{UsaChecklist:s},props:Object.keys(s.props),setup(){return{args:i}},template:`<UsaChecklist :items="args.items">
    <template v-if="!!args.default" #default>${i.default}</template>
  </UsaChecklist>`})},e={args:{...a,items:u},name:"Default",parameters:{docs:{source:{code:`<UsaChecklist :items="[
  {
    id: 'item1',
    text: 'Use at least one uppercase character',
    checked: false,
    ariaLabel: 'is valid',
  },
  {
    id: 'item2',
    text: 'Use at least one number',
    checked: true,
    ariaLabel: 'is valid',
  },
  {
    text: 'Use at least one symbol',
    checked: false,
    ariaLabel: 'is invalid',
  },
]"></UsaChecklist>`}}}},t={args:{...a,default:"<li>A custom item</li>"},name:"Custom Slot Content",parameters:{docs:{source:{code:"<UsaChecklist><li>A custom item</li></UsaChecklist>"}}}};var l,n,r;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    items: testItems
  },
  name: 'Default',
  parameters: {
    docs: {
      source: {
        code: \`<UsaChecklist :items="[
  {
    id: 'item1',
    text: 'Use at least one uppercase character',
    checked: false,
    ariaLabel: 'is valid',
  },
  {
    id: 'item2',
    text: 'Use at least one number',
    checked: true,
    ariaLabel: 'is valid',
  },
  {
    text: 'Use at least one symbol',
    checked: false,
    ariaLabel: 'is invalid',
  },
]"></UsaChecklist>\`
      }
    }
  }
}`,...(r=(n=e.parameters)==null?void 0:n.docs)==null?void 0:r.source}}};var c,o,m;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    default: '<li>A custom item</li>'
  },
  name: 'Custom Slot Content',
  parameters: {
    docs: {
      source: {
        code: \`<UsaChecklist><li>A custom item</li></UsaChecklist>\`
      }
    }
  }
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const C=["DefaultChecklist","CustomSlotContentChecklist"];export{t as CustomSlotContentChecklist,e as DefaultChecklist,C as __namedExportsOrder,f as default};
