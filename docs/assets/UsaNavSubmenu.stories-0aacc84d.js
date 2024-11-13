import{U as s}from"./UsaNavSubmenu-dd717917.js";import{l as u,p as m}from"./vue.esm-bundler-2e7cedae.js";import"./constants-fce87d39.js";const e={cols:s.props.cols.default,customClasses:s.props.customClasses.default()},C={component:s,title:"Components/UsaNavSubmenu",argTypes:{cols:{control:{type:"number"}},customClasses:{control:{type:"object"}},default:{control:{type:"text"}}},args:{cols:e.cols,customClasses:e.customClasses,default:""},render:a=>({components:{UsaNavSubmenu:s},props:Object.keys(s.props),setup(){return{args:a}},template:`<UsaNavSubmenu
    :cols="args.cols"
    :custom-classes="args.customClasses"
  >
    <template v-if="args.cols <= 1 && !!args.default" #default>${a.default}</template>
    <template v-if="args.cols > 1 && !!args.col1" #col-1>${a.col1}</template>
    <template v-if="args.cols > 1 && !!args.col2" #col-2>${a.col2}</template>
    <template v-if="args.cols > 1 && !!args.col3" #col-3>${a.col3}</template>
  </UsaNavSubmenu>`}),decorators:[()=>({template:'<ul class="usa-dark-background"><story /></ul>',provide:{dropdownId:u("sb-dropdown-id"),dropdownItems:m({"sb-dropdown-id":!0})}})]},t={args:{...e,default:'<li class="usa-nav__submenu-item"><a href="">Item 1</a></li>'},name:"Default",parameters:{docs:{source:{code:'<UsaNavSubmenu><li class="usa-nav__submenu-item"><a href="">Item 1</a></li></UsaNavSubmenu>'}}}},n={args:{...e,default:'<li class="usa-nav__submenu-item"><a href="">Item 1</a></li>'},decorators:[()=>({template:"<story />",provide:{dropdownId:u("sb-dropdown-id"),dropdownItems:m({"sb-dropdown-id":!0}),isMegamenu:!0}})],name:"Megamenu",parameters:{docs:{source:{code:'<UsaNavSubmenu><li class="usa-nav__submenu-item"><a href="">Item 1</a></li></UsaNavSubmenu>'}}}},o={args:{...e,cols:3,col1:'<li class="usa-nav__submenu-item"><a href="">Item 1</a></li>',col2:'<li class="usa-nav__submenu-item"><a href="">Item 2</a></li>',col3:'<li class="usa-nav__submenu-item"><a href="">Item 3</a></li>'},decorators:[()=>({template:"<story />",provide:{dropdownId:u("sb-dropdown-id"),dropdownItems:m({"sb-dropdown-id":!0}),isMegamenu:!0}})],name:"Multiple Columns Megamenu",parameters:{docs:{source:{code:'<UsaNavSubmenu :cols="3"><template #col1><li class="usa-nav__submenu-item"><a href="">Item 1</a></li></template><template #col2><li class="usa-nav__submenu-item"><a href="">Item 2</a></li></template><template #col3><li class="usa-nav__submenu-item"><a href="">Item 3</a></li></template></UsaNavSubmenu>'}}}},l={args:{...e,cols:3,customClasses:{gridRow:["test-row"],gridCol:["test-col"]},col1:'<li class="usa-nav__submenu-item"><a href="">Item 1</a></li>',col2:'<li class="usa-nav__submenu-item"><a href="">Item 2</a></li>',col3:'<li class="usa-nav__submenu-item"><a href="">Item 3</a></li>'},decorators:[()=>({template:"<story />",provide:{dropdownId:u("sb-dropdown-id"),dropdownItems:m({"sb-dropdown-id":!0}),isMegamenu:!0}})],name:"Custom Classes",parameters:{docs:{source:{code:`<UsaNavSubmenu :cols="3" :custom-classes="{ gridRow: ['test-row'], gridCol: ['test-col'] }"><template #col1><li class="usa-nav__submenu-item"><a href="">Item 1</a></li></template><template #col2><li class="usa-nav__submenu-item"><a href="">Item 2</a></li></template><template #col3><li class="usa-nav__submenu-item"><a href="">Item 3</a></li></template></UsaNavSubmenu>`}}}};var r,c,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    default: '<li class="usa-nav__submenu-item"><a href="">Item 1</a></li>'
  },
  name: 'Default',
  parameters: {
    docs: {
      source: {
        code: \`<UsaNavSubmenu><li class="usa-nav__submenu-item"><a href="">Item 1</a></li></UsaNavSubmenu>\`
      }
    }
  }
}`,...(i=(c=t.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};var d,p,b;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    default: '<li class="usa-nav__submenu-item"><a href="">Item 1</a></li>'
  },
  decorators: [() => ({
    template: '<story />',
    provide: {
      dropdownId: ref('sb-dropdown-id'),
      dropdownItems: reactive({
        'sb-dropdown-id': true
      }),
      isMegamenu: true
    }
  })],
  name: 'Megamenu',
  parameters: {
    docs: {
      source: {
        code: \`<UsaNavSubmenu><li class="usa-nav__submenu-item"><a href="">Item 1</a></li></UsaNavSubmenu>\`
      }
    }
  }
}`,...(b=(p=n.parameters)==null?void 0:p.docs)==null?void 0:b.source}}};var v,_,f;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    cols: 3,
    col1: '<li class="usa-nav__submenu-item"><a href="">Item 1</a></li>',
    col2: '<li class="usa-nav__submenu-item"><a href="">Item 2</a></li>',
    col3: '<li class="usa-nav__submenu-item"><a href="">Item 3</a></li>'
  },
  decorators: [() => ({
    template: '<story />',
    provide: {
      dropdownId: ref('sb-dropdown-id'),
      dropdownItems: reactive({
        'sb-dropdown-id': true
      }),
      isMegamenu: true
    }
  })],
  name: 'Multiple Columns Megamenu',
  parameters: {
    docs: {
      source: {
        code: \`<UsaNavSubmenu :cols="3"><template #col1><li class="usa-nav__submenu-item"><a href="">Item 1</a></li></template><template #col2><li class="usa-nav__submenu-item"><a href="">Item 2</a></li></template><template #col3><li class="usa-nav__submenu-item"><a href="">Item 3</a></li></template></UsaNavSubmenu>\`
      }
    }
  }
}`,...(f=(_=o.parameters)==null?void 0:_.docs)==null?void 0:f.source}}};var I,g,w;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    cols: 3,
    customClasses: {
      gridRow: ['test-row'],
      gridCol: ['test-col']
    },
    col1: '<li class="usa-nav__submenu-item"><a href="">Item 1</a></li>',
    col2: '<li class="usa-nav__submenu-item"><a href="">Item 2</a></li>',
    col3: '<li class="usa-nav__submenu-item"><a href="">Item 3</a></li>'
  },
  decorators: [() => ({
    template: '<story />',
    provide: {
      dropdownId: ref('sb-dropdown-id'),
      dropdownItems: reactive({
        'sb-dropdown-id': true
      }),
      isMegamenu: true
    }
  })],
  name: 'Custom Classes',
  parameters: {
    docs: {
      source: {
        code: \`<UsaNavSubmenu :cols="3" :custom-classes="{ gridRow: ['test-row'], gridCol: ['test-col'] }"><template #col1><li class="usa-nav__submenu-item"><a href="">Item 1</a></li></template><template #col2><li class="usa-nav__submenu-item"><a href="">Item 2</a></li></template><template #col3><li class="usa-nav__submenu-item"><a href="">Item 3</a></li></template></UsaNavSubmenu>\`
      }
    }
  }
}`,...(w=(g=l.parameters)==null?void 0:g.docs)==null?void 0:w.source}}};const U=["DefaultNavSubmenu","MegamenuNavSubmenu","MultipleColsMegamenuNavSubmenu","CustomClassesNavSubmenu"];export{l as CustomClassesNavSubmenu,t as DefaultNavSubmenu,n as MegamenuNavSubmenu,o as MultipleColsMegamenuNavSubmenu,U as __namedExportsOrder,C as default};
