import{U as a}from"./UsaIcon-94e89381.js";import"./vue.esm-bundler-2e7cedae.js";import"./constants-fce87d39.js";const e={name:"flag",size:a.props.size.default,ariaHidden:a.props.ariaHidden.default,role:a.props.role.default,focusable:a.props.focusable.default},z={component:a,title:"Components/UsaIcon",argTypes:{name:{control:{type:"text"}},size:{options:["","3","4","5","6","7","8","9"],control:{type:"select"}},ariaHidden:{control:{type:"boolean"}},role:{control:{type:"text"}},focusable:{control:{type:"boolean"}},title:{control:{type:"text"}}},args:{name:e.name,size:e.size,ariaHidden:e.ariaHidden,role:e.role,focusable:e.focusable,title:""},render:t=>({components:{UsaIcon:a},props:Object.keys(a.props),setup(){return{args:t}},template:`<UsaIcon
    :name="args.name"
    :size="args.size"
    :aria-hidden="args.ariaHidden"
    :role="args.role"
    :focusable="args.focusable"
  >
    <template v-if="!!args.title" #title>${t.title}</template>
  </UsaIcon>`})},o={args:{...e},name:"Default",parameters:{docs:{source:{code:'<UsaIcon name="flag"></UsaIcon>'}}}},s={args:{...e,size:"9"},name:"Custom Size",parameters:{docs:{source:{code:'<UsaIcon name="flag" size="9"></UsaIcon>'}}}},n={args:{...e,title:"<em>Flag icon</em>"},name:"Title Slot",parameters:{docs:{source:{code:'<UsaIcon name="flag"><template #title><em>Flag icon</em></template></UsaIcon>'}}}};var r,c,l;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    ...defaultProps
  },
  name: 'Default',
  parameters: {
    docs: {
      source: {
        code: \`<UsaIcon name="flag"></UsaIcon>\`
      }
    }
  }
}`,...(l=(c=o.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var m,i,p;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    size: '9'
  },
  name: 'Custom Size',
  parameters: {
    docs: {
      source: {
        code: \`<UsaIcon name="flag" size="9"></UsaIcon>\`
      }
    }
  }
}`,...(p=(i=s.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var d,u,f;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    title: '<em>Flag icon</em>'
  },
  name: 'Title Slot',
  parameters: {
    docs: {
      source: {
        code: \`<UsaIcon name="flag"><template #title><em>Flag icon</em></template></UsaIcon>\`
      }
    }
  }
}`,...(f=(u=n.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};const S=["DefaultIcon","CustomSizeIcon","TitleSlotIcon"];export{s as CustomSizeIcon,o as DefaultIcon,n as TitleSlotIcon,S as __namedExportsOrder,z as default};
