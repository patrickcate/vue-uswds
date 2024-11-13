import{l as m}from"./vue.esm-bundler-2e7cedae.js";import{U as a}from"./UsaNavbar-4fa18cb3.js";const e={menuButtonLabel:a.props.menuButtonLabel.default,customClasses:a.props.customClasses.default()},D={component:a,title:"Components/UsaNavbar",argTypes:{menuButtonLabel:{control:{type:"text"}},customClasses:{control:{type:"object"}},default:{control:{type:"text"}},"menu-button":{control:{type:"text"}}},args:{menuButtonLabel:e.menuButtonLabel,customClasses:e.customClasses,default:"","menu-button":""},render:u=>({components:{UsaNavbar:a},props:Object.keys(a.props),setup(){return{args:u}},template:`<UsaNavbar
    :menu-button-label="args.menuButtonLabel"
    :custom-classes="args.customClasses"
  >
    <template v-if="!!args.default" #default>${u.default}</template>
    <template v-if="!!args['menu-button']" #menu-button="{ menuButtonLabel }">${u["menu-button"]}</template>
  </UsaNavbar>`}),decorators:[()=>({template:"<story />",provide:{mobileMenuId:m(""),isMobileMenuOpen:m(!1),toggleMobileMenu:()=>{}}})]},t={args:{...e},name:"Default",parameters:{docs:{source:{code:"<UsaNavbar></UsaNavbar>"}}}},s={args:{...e,menuButtonLabel:"Open Menu"},name:"Menu Button Label",parameters:{docs:{source:{code:'<UsaNavbar menu-button-label="Open Menu"></UsaNavbar>'}}}},o={args:{...e,default:"Your Logo Here"},name:"Default Slot",parameters:{docs:{source:{code:"<UsaNavbar>Your Logo Here</UsaNavbar>"}}}},n={args:{...e,"menu-button":"<em>My {{ menuButtonLabel }}</em>"},name:"Menu Button Scoped Slot",parameters:{docs:{source:{code:'<UsaNavbar><template #menu-button="{ menuButtonLabel }"><em>My {{ menuButtonLabel }}</em></template></UsaNavbar>'}}}},r={args:{...e,customClasses:{button:["test-button-class"]}},name:"Custom Classes",parameters:{docs:{source:{code:`<UsaNavbar :custom-classes="{ button: ['test-button-class'] }"></UsaNavbar>`}}}};var l,c,b;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    ...defaultProps
  },
  name: 'Default',
  parameters: {
    docs: {
      source: {
        code: \`<UsaNavbar></UsaNavbar>\`
      }
    }
  }
}`,...(b=(c=t.parameters)==null?void 0:c.docs)==null?void 0:b.source}}};var p,d,v;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    menuButtonLabel: 'Open Menu'
  },
  name: 'Menu Button Label',
  parameters: {
    docs: {
      source: {
        code: \`<UsaNavbar menu-button-label="Open Menu"></UsaNavbar>\`
      }
    }
  }
}`,...(v=(d=s.parameters)==null?void 0:d.docs)==null?void 0:v.source}}};var N,f,U;o.parameters={...o.parameters,docs:{...(N=o.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    default: 'Your Logo Here'
  },
  name: 'Default Slot',
  parameters: {
    docs: {
      source: {
        code: \`<UsaNavbar>Your Logo Here</UsaNavbar>\`
      }
    }
  }
}`,...(U=(f=o.parameters)==null?void 0:f.docs)==null?void 0:U.source}}};var g,B,L;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    'menu-button': '<em>My {{ menuButtonLabel }}</em>'
  },
  name: 'Menu Button Scoped Slot',
  parameters: {
    docs: {
      source: {
        code: \`<UsaNavbar><template #menu-button="{ menuButtonLabel }"><em>My {{ menuButtonLabel }}</em></template></UsaNavbar>\`
      }
    }
  }
}`,...(L=(B=n.parameters)==null?void 0:B.docs)==null?void 0:L.source}}};var i,M,C;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    customClasses: {
      button: ['test-button-class']
    }
  },
  name: 'Custom Classes',
  parameters: {
    docs: {
      source: {
        code: \`<UsaNavbar :custom-classes="{ button: ['test-button-class'] }"></UsaNavbar>\`
      }
    }
  }
}`,...(C=(M=r.parameters)==null?void 0:M.docs)==null?void 0:C.source}}};const O=["DefaultNavbar","MenuButtonLabelNavbar","DefaultSlotNavbar","MenuButtonScopedSlotNavbar","CustomClassesNavbar"];export{r as CustomClassesNavbar,t as DefaultNavbar,o as DefaultSlotNavbar,s as MenuButtonLabelNavbar,n as MenuButtonScopedSlotNavbar,O as __namedExportsOrder,D as default};
