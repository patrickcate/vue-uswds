import{U as r,_ as o}from"./UsaButtonGroupItem-D1PVo6E2.js";import"./vue.esm-bundler-DlC1_45x.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const n={segmented:o.props.segmented.default},u=`
	<UsaButtonGroupItem>
		<button type="button" class="usa-button">Test button 1</button>
	</UsaButtonGroupItem>
	<UsaButtonGroupItem>
		<button type="button" class="usa-button usa-button--outline">Test button 2</button>
	</UsaButtonGroupItem>
	<UsaButtonGroupItem>
		<button type="button" class="usa-button usa-button--outline">Test button 3</button>
	</UsaButtonGroupItem>
`,U={component:o,subcomponents:{UsaButtonGroupItem:r},title:"Components/UsaButtonGroup",argTypes:{segmented:{control:{type:"boolean"}},default:{control:{type:"text"}}},args:{segmented:n.segmented,default:u},render:s=>({components:{UsaButtonGroup:o,UsaButtonGroupItem:r},props:Object.keys(o.props),setup(){return{args:s}},template:`<UsaButtonGroup :segmented="args.segmented">${s.default}</UsaButtonGroup>`})},t={args:{...n},name:"Default",parameters:{docs:{source:{code:`<UsaButtonGroup>${u}</UsaButtonGroup>`}}}},e={args:{...n,segmented:!0},name:"Segmented",parameters:{docs:{source:{code:`<UsaButtonGroup :segmented="true">${u}</UsaButtonGroup>`}}}};var a,p,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    ...defaultProps
  },
  name: 'Default',
  parameters: {
    docs: {
      source: {
        code: \`<UsaButtonGroup>\${defaultButtonGroupCodeSnippet}</UsaButtonGroup>\`
      }
    }
  }
}`,...(m=(p=t.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var d,c,l;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    segmented: true
  },
  name: 'Segmented',
  parameters: {
    docs: {
      source: {
        code: \`<UsaButtonGroup :segmented="true">\${defaultButtonGroupCodeSnippet}</UsaButtonGroup>\`
      }
    }
  }
}`,...(l=(c=e.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const b=["DefaultButtonGroup","SegmentedButtonGroup"];export{t as DefaultButtonGroup,e as SegmentedButtonGroup,b as __namedExportsOrder,U as default};
