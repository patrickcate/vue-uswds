import{U as o}from"./UsaSidenavItem-ca3ae7c9.js";import"./vue.esm-bundler-2e7cedae.js";import"./BaseLink-05a2e488.js";import"./constants-fce87d39.js";import"./_plugin-vue_export-helper-c27b6911.js";const e={item:{to:"/test-page-1",text:"Test Page 1"},customClasses:o.props.customClasses.default()},y={component:o,title:"Components/UsaSidenavItem",argTypes:{item:{control:{type:"object"}},customClasses:{control:{type:"object"}},default:{control:{type:"text"}},sublist:{control:{type:"text"}}},args:{item:e.item,customClasses:e.customClasses,default:"",sublist:""},decorators:[()=>({template:'<ul class="usa-sidenav"><story /></ul>'})],render:i=>({components:{UsaSidenavItem:o},props:Object.keys(o.props),setup(){return{args:i}},template:`<UsaSidenavItem :item="args.item" :custom-classes="args.customClasses"><template v-if="!!args.default" #default="{ item }">${i.default}</template><template v-if="!!args.sublist" #sublist="{ sublist }">${i.sublist}</template></UsaSidenavItem>`})},t={args:{...e},name:"Default",parameters:{docs:{source:{code:'<UsaSidenavItem :item="item"></UsaSidenavItem>'}}}},s={args:{...e,item:{to:"/test-page-1",text:"Test Page 1",children:[{to:"/test-page-1-1",text:"Test Page 1.1"},{to:"/test-page-1-2",text:"Test Page 1.2"},{to:"/test-page-1-3",text:"Test Page 1.3"}]},customClasses:{item:["test-item-class"],link:["test-link-class"],sublist:["test-sublist-class"]}},name:"Custom Classes",parameters:{docs:{source:{code:`<UsaSidenavItem :item="item" :custom-classes="{ item: 'test-item-class', link: 'test-link-class', sublist: 'test-sublist-class' }"></UsaSidenavItem>`}}}},a={args:{...e,item:{to:"/parent-page",text:"Parent page",children:[{to:"/parent-page/sublist",text:"Sublist"}]}},name:"With Sublist",parameters:{docs:{source:{code:`<UsaSidenavItem :item="{
            to: '/parent-page',
            text: 'Parent page',
            children: [
                {
                to: '/parent-page/sublist',
                text: 'Sublist',
                },
            ],
        }"></UsaSidenavItem>`}}}},n={args:{...e,item:{to:"/parent-page",text:"Parent page"},default:"<strong>{{ item.to }} &rarr;</strong>"},name:"Scoped Default Slot",parameters:{docs:{source:{code:`<UsaSidenavItem :item="{ to: '/parent-page', text: 'Parent page' }"><template #default="{ item }"><strong>{{ item.to }} &rarr;</strong></template></UsaSidenavItem>`}}}},r={args:{...e,item:{to:"/parent-page",text:"Parent page",children:[{to:"/parent-page/sublist",text:"Sublist"}]},sublist:"<li>{{ sublist[0].text }} &rarr;</li>"},name:"Scoped Sublist Slot",parameters:{docs:{source:{code:`<UsaSidenavItem :item="{ to: '/parent-page', text: 'Parent page', children: [{ to: '/parent-page/sublist', text: 'Sublist' }]}"><template #sublist="{ sublist }"><li>{{ sublist[0].text }} &rarr;</li></template></UsaSidenavItem>`}}}};var l,m,p;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    ...defaultProps
  },
  name: 'Default',
  parameters: {
    docs: {
      source: {
        code: \`<UsaSidenavItem :item="item"></UsaSidenavItem>\`
      }
    }
  }
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var c,u,d;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    item: {
      to: '/test-page-1',
      text: 'Test Page 1',
      children: [{
        to: '/test-page-1-1',
        text: 'Test Page 1.1'
      }, {
        to: '/test-page-1-2',
        text: 'Test Page 1.2'
      }, {
        to: '/test-page-1-3',
        text: 'Test Page 1.3'
      }]
    },
    customClasses: {
      item: ['test-item-class'],
      link: ['test-link-class'],
      sublist: ['test-sublist-class']
    }
  },
  name: 'Custom Classes',
  parameters: {
    docs: {
      source: {
        code: \`<UsaSidenavItem :item="item" :custom-classes="{ item: 'test-item-class', link: 'test-link-class', sublist: 'test-sublist-class' }"></UsaSidenavItem>\`
      }
    }
  }
}`,...(d=(u=s.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var g,S,b;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    item: {
      to: '/parent-page',
      text: 'Parent page',
      children: [{
        to: '/parent-page/sublist',
        text: 'Sublist'
      }]
    }
  },
  name: 'With Sublist',
  parameters: {
    docs: {
      source: {
        code: \`<UsaSidenavItem :item="{
            to: '/parent-page',
            text: 'Parent page',
            children: [
                {
                to: '/parent-page/sublist',
                text: 'Sublist',
                },
            ],
        }"></UsaSidenavItem>\`
      }
    }
  }
}`,...(b=(S=a.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};var v,x,I;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    item: {
      to: '/parent-page',
      text: 'Parent page'
    },
    default: \`<strong>{{ item.to }} &rarr;</strong>\`
  },
  name: 'Scoped Default Slot',
  parameters: {
    docs: {
      source: {
        code: \`<UsaSidenavItem :item="{ to: '/parent-page', text: 'Parent page' }"><template #default="{ item }"><strong>{{ item.to }} &rarr;</strong></template></UsaSidenavItem>\`
      }
    }
  }
}`,...(I=(x=n.parameters)==null?void 0:x.docs)==null?void 0:I.source}}};var f,P,U;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    item: {
      to: '/parent-page',
      text: 'Parent page',
      children: [{
        to: '/parent-page/sublist',
        text: 'Sublist'
      }]
    },
    sublist: \`<li>{{ sublist[0].text }} &rarr;</li>\`
  },
  name: 'Scoped Sublist Slot',
  parameters: {
    docs: {
      source: {
        code: \`<UsaSidenavItem :item="{ to: '/parent-page', text: 'Parent page', children: [{ to: '/parent-page/sublist', text: 'Sublist' }]}"><template #sublist="{ sublist }"><li>{{ sublist[0].text }} &rarr;</li></template></UsaSidenavItem>\`
      }
    }
  }
}`,...(U=(P=r.parameters)==null?void 0:P.docs)==null?void 0:U.source}}};const j=["DefaultSidenavItem","CustomClassesSidenavItem","SublistSidenavItem","ScopedDefaultSlotSidenavItem","ScopedSublistSlotSidenavItem"];export{s as CustomClassesSidenavItem,t as DefaultSidenavItem,n as ScopedDefaultSlotSidenavItem,r as ScopedSublistSlotSidenavItem,a as SublistSidenavItem,j as __namedExportsOrder,y as default};
