import{_ as e}from"./UsaNavDropdown-DbA3e7vA.js";import"./vue.esm-bundler-DlC1_45x.js";import"./unique-id-C_cIYxKg.js";import"./common-cfad2wKl.js";import"./constants-BA52rpFi.js";const o={id:e.props.id.default,open:e.props.open.default},g={component:e,title:"Components/UsaNavDropdown",argTypes:{id:{control:{type:"text"}},open:{control:{type:"boolean"}},default:{control:{type:"text"}}},args:{id:o.id,open:o.open,default:""},decorators:[()=>({template:"<ul><story /></ul>",provide:{registerDropdown:()=>{},unregisterDropdown:()=>{}}})],render:s=>({components:{UsaNavDropdown:e},props:Object.keys(e.props),setup(){return{args:s}},template:`<UsaNavDropdown
    :id="args.id"
    :open="args.open"
  >${s.default}</UsaNavDropdown>`})},r={args:{...o,default:"Dropdown items here"},name:"Default",parameters:{docs:{source:{code:"<UsaNavDropdown>Dropdown items here</UsaNavDropdown>"}}}},a={args:{...o,open:!0,default:"Dropdown items here"},name:"Open by Default",parameters:{docs:{source:{code:'<UsaNavDropdown :open="true">Dropdown items here</UsaNavDropdown>'}}}},n={args:{...o,id:"custom-id",default:"Dropdown items here"},name:"Custom ID",parameters:{docs:{source:{code:'<UsaNavDropdown id="custom-id">Dropdown items here</UsaNavDropdown>'}}}};var t,p,d;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    default: 'Dropdown items here'
  },
  name: 'Default',
  parameters: {
    docs: {
      source: {
        code: \`<UsaNavDropdown>Dropdown items here</UsaNavDropdown>\`
      }
    }
  }
}`,...(d=(p=r.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var m,u,c;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    open: true,
    default: 'Dropdown items here'
  },
  name: 'Open by Default',
  parameters: {
    docs: {
      source: {
        code: \`<UsaNavDropdown :open="true">Dropdown items here</UsaNavDropdown>\`
      }
    }
  }
}`,...(c=(u=a.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};var D,i,w;n.parameters={...n.parameters,docs:{...(D=n.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    id: 'custom-id',
    default: 'Dropdown items here'
  },
  name: 'Custom ID',
  parameters: {
    docs: {
      source: {
        code: \`<UsaNavDropdown id="custom-id">Dropdown items here</UsaNavDropdown>\`
      }
    }
  }
}`,...(w=(i=n.parameters)==null?void 0:i.docs)==null?void 0:w.source}}};const h=["DefaultNavDropdown","OpenByDefaultNavDropdown","CustomIdNavDropdown"];export{n as CustomIdNavDropdown,r as DefaultNavDropdown,a as OpenByDefaultNavDropdown,h as __namedExportsOrder,g as default};
