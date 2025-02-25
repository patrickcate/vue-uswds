import{_ as r}from"./UsaTableHeaderCell-CcucBQX1.js";import"./vue.esm-bundler-DsKf3Hbt.js";import"./UsaTableSortButton-8oeF4ytP.js";const e={id:r.props.id.default,label:r.props.label.default,sortable:r.props.sortable.default,currentSortedHeader:r.props.currentSortedHeader.default,currentSortDirection:r.props.currentSortDirection.default},P={component:r,title:"Components/UsaTableHeaderCell",argTypes:{id:{control:{type:"text"}},label:{control:{type:"text"}},sortable:{control:{type:"boolean"}},currentSortedHeader:{control:{type:"text"}},currentSortDirection:{control:{type:"text"}},default:{control:{type:"text"}}},args:{id:e.id,label:e.label,sortable:e.sortable,currentSortedHeader:e.currentSortedHeader,currentSortDirection:e.currentSortDirection,default:""},decorators:[()=>({template:'<table class="usa-table"><thead><tr><story /></tr></thead></table>',provide:{updateCurrentSortedHeader:()=>{},toggleSortDirection:()=>{}}})],render:o=>({components:{UsaTableHeaderCell:r},props:Object.keys(r.props),setup(){return{args:o}},template:`<UsaTableHeaderCell
      :id="args.id"
      :label="args.label"
      :sortable="args.sortable"
      :current-sorted-header="args.currentSortedHeader"
      :current-sort-direction="args.currentSortDirection"
    >
      <template v-if="!!args.default" #default>${o.default}</template>
    </UsaTableHeaderCell>`})},t={args:{...e,id:"test-header-id",label:"Test header"},name:"Default",parameters:{docs:{source:{code:'<UsaTableHeaderCell id="test-header-id" label="Test header" />'}}}},a={args:{...e,id:"test-header-id",label:"Test header",sortable:!0},name:"Sortable",parameters:{docs:{source:{code:'<UsaTableHeaderCell id="test-header-id" label="Test header" :sortable="true" />'}}}},d={args:{...e,id:"test-header-id",label:"Test header",sortable:!0,currentSortedHeader:"test-header-id",currentSortDirection:"ascending"},name:"Ascending",parameters:{docs:{source:{code:'<UsaTableHeaderCell id="test-header-id" label="Test header" :sortable="true" current-sorted-header="test-header-id" current-sort-direction="ascending" />'}}}},s={args:{...e,id:"test-header-id",label:"Test header",sortable:!0,currentSortedHeader:"test-header-id",currentSortDirection:"descending"},name:"Descending",parameters:{docs:{source:{code:'<UsaTableHeaderCell id="test-header-id" label="Test header" :sortable="true" current-sorted-header="test-header-id" current-sort-direction="descending" />'}}}},l={args:{...e,id:"test-header-id",label:"Test header",sortable:!0,default:"<em>Custom header label text here...</em>"},name:"Custom Slot",parameters:{docs:{source:{code:'<UsaTableHeaderCell id="test-header-id" label="Test header" :sortable="true"><em>Custom header label text here...</em></UsaTableHeaderCell>'}}}};var n,c,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    id: 'test-header-id',
    label: 'Test header'
  },
  name: 'Default',
  parameters: {
    docs: {
      source: {
        code: \`<UsaTableHeaderCell id="test-header-id" label="Test header" />\`
      }
    }
  }
}`,...(i=(c=t.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};var u,b,p;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    id: 'test-header-id',
    label: 'Test header',
    sortable: true
  },
  name: 'Sortable',
  parameters: {
    docs: {
      source: {
        code: \`<UsaTableHeaderCell id="test-header-id" label="Test header" :sortable="true" />\`
      }
    }
  }
}`,...(p=(b=a.parameters)==null?void 0:b.docs)==null?void 0:p.source}}};var m,h,T;d.parameters={...d.parameters,docs:{...(m=d.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    id: 'test-header-id',
    label: 'Test header',
    sortable: true,
    currentSortedHeader: 'test-header-id',
    currentSortDirection: 'ascending'
  },
  name: 'Ascending',
  parameters: {
    docs: {
      source: {
        code: \`<UsaTableHeaderCell id="test-header-id" label="Test header" :sortable="true" current-sorted-header="test-header-id" current-sort-direction="ascending" />\`
      }
    }
  }
}`,...(T=(h=d.parameters)==null?void 0:h.docs)==null?void 0:T.source}}};var g,S,H;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    id: 'test-header-id',
    label: 'Test header',
    sortable: true,
    currentSortedHeader: 'test-header-id',
    currentSortDirection: 'descending'
  },
  name: 'Descending',
  parameters: {
    docs: {
      source: {
        code: \`<UsaTableHeaderCell id="test-header-id" label="Test header" :sortable="true" current-sorted-header="test-header-id" current-sort-direction="descending" />\`
      }
    }
  }
}`,...(H=(S=s.parameters)==null?void 0:S.docs)==null?void 0:H.source}}};var C,f,D;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    id: 'test-header-id',
    label: 'Test header',
    sortable: true,
    default: '<em>Custom header label text here...</em>'
  },
  name: 'Custom Slot',
  parameters: {
    docs: {
      source: {
        code: \`<UsaTableHeaderCell id="test-header-id" label="Test header" :sortable="true"><em>Custom header label text here...</em></UsaTableHeaderCell>\`
      }
    }
  }
}`,...(D=(f=l.parameters)==null?void 0:f.docs)==null?void 0:D.source}}};const _=["DefaultTableHeaderCell","SortableTableHeaderCell","AscendingSortTableHeaderCell","DescendingSortTableHeaderCell","CustomSlotTableHeaderCell"];export{d as AscendingSortTableHeaderCell,l as CustomSlotTableHeaderCell,t as DefaultTableHeaderCell,s as DescendingSortTableHeaderCell,a as SortableTableHeaderCell,_ as __namedExportsOrder,P as default};
