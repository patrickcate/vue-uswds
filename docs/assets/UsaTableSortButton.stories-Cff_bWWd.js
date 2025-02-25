import{_ as t}from"./UsaTableSortButton-8oeF4ytP.js";import"./vue.esm-bundler-DsKf3Hbt.js";const e={headerId:t.props.headerId.default,headerLabel:t.props.headerLabel.default,currentSortDirection:t.props.currentSortDirection.default},U={component:t,title:"Components/UsaTableSortButton",argTypes:{headerId:{control:{type:"text"}},headerLabel:{control:{type:"text"}},currentSortDirection:{control:{type:"text"}},default:{control:{type:"text"}}},args:{headerId:e.headerId,headerLabel:e.headerLabel,currentSortDirection:e.currentSortDirection,default:""},render:n=>({components:{UsaTableSortButton:t},props:Object.keys(t.props),setup(){return{args:n}},template:`<UsaTableSortButton
      :header-id="args.headerId"
      :header-label="args.headerLabel"
      :current-sort-direction="args.currentSortDirection"
    >
      <template v-if="!!args.default" #default>${n.default}</template>
    </UsaTableSortButton>`}),decorators:[()=>({template:'<table class="usa-table"><thead><tr><story /></tr></thead></table>'})]},r={args:{...e,headerId:"test-header-id",headerLabel:"Test header"},name:"Default",parameters:{docs:{source:{code:'<UsaTableSortButton header-id="test-header-id" header-label="Test header"></UsaTableSortButton>'}}}},a={args:{...e,headerId:"test-header-id",headerLabel:"Test header",currentSortDirection:"ascending"},name:"Ascending",parameters:{docs:{source:{code:'<UsaTableSortButton header-id="test-header-id" header-label="Test header" current-sort-direction="ascending"></UsaTableSortButton>'}}}},o={args:{...e,headerId:"test-header-id",headerLabel:"Test header",currentSortDirection:"descending"},name:"Descending",parameters:{docs:{source:{code:'<UsaTableSortButton header-id="test-header-id" header-label="Test header" current-sort-direction="descending"></UsaTableSortButton>'}}}},d={args:{...e,headerId:"test-header-id",headerLabel:"Test header",default:"<em>Custom icon here...</em>"},name:"Custom Slot",parameters:{docs:{source:{code:'<UsaTableSortButton header-id="test-header-id" header-label="Test header"><em>Custom icon here...</em></UsaTableSortButton>'}}}};var s,c,l;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    headerId: 'test-header-id',
    headerLabel: 'Test header'
  },
  name: 'Default',
  parameters: {
    docs: {
      source: {
        code: \`<UsaTableSortButton header-id="test-header-id" header-label="Test header"></UsaTableSortButton>\`
      }
    }
  }
}`,...(l=(c=r.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var u,i,h;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    headerId: 'test-header-id',
    headerLabel: 'Test header',
    currentSortDirection: 'ascending'
  },
  name: 'Ascending',
  parameters: {
    docs: {
      source: {
        code: \`<UsaTableSortButton header-id="test-header-id" header-label="Test header" current-sort-direction="ascending"></UsaTableSortButton>\`
      }
    }
  }
}`,...(h=(i=a.parameters)==null?void 0:i.docs)==null?void 0:h.source}}};var m,b,p;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    headerId: 'test-header-id',
    headerLabel: 'Test header',
    currentSortDirection: 'descending'
  },
  name: 'Descending',
  parameters: {
    docs: {
      source: {
        code: \`<UsaTableSortButton header-id="test-header-id" header-label="Test header" current-sort-direction="descending"></UsaTableSortButton>\`
      }
    }
  }
}`,...(p=(b=o.parameters)==null?void 0:b.docs)==null?void 0:p.source}}};var S,T,g;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    headerId: 'test-header-id',
    headerLabel: 'Test header',
    default: '<em>Custom icon here...</em>'
  },
  name: 'Custom Slot',
  parameters: {
    docs: {
      source: {
        code: \`<UsaTableSortButton header-id="test-header-id" header-label="Test header"><em>Custom icon here...</em></UsaTableSortButton>\`
      }
    }
  }
}`,...(g=(T=d.parameters)==null?void 0:T.docs)==null?void 0:g.source}}};const D=["DefaultTableSortButton","AscendingTableSortButton","DescendingTableSortButton","CustomSlotTableSortButton"];export{a as AscendingTableSortButton,d as CustomSlotTableSortButton,r as DefaultTableSortButton,o as DescendingTableSortButton,D as __namedExportsOrder,U as default};
