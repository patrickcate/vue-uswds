import{U as s}from"./UsaFooterCollapsibleMenu-4f329cfc.js";import"./vue.esm-bundler-2e7cedae.js";import"./index-2ecd98da.js";import"./index-6ef08634.js";import"./constants-fce87d39.js";import"./useAccordion-70dfc258.js";import"./UsaFooterCollapsibleMenuSection-0989b525.js";import"./unique-id-a1cb1937.js";import"./common-c0b90c12.js";import"./BaseLink-05a2e488.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./BaseHeading-0ea88faf.js";var w={iphone5:{name:"iPhone 5",styles:{height:"568px",width:"320px"},type:"mobile"},iphone6:{name:"iPhone 6",styles:{height:"667px",width:"375px"},type:"mobile"},iphone6p:{name:"iPhone 6 Plus",styles:{height:"736px",width:"414px"},type:"mobile"},iphone8p:{name:"iPhone 8 Plus",styles:{height:"736px",width:"414px"},type:"mobile"},iphonex:{name:"iPhone X",styles:{height:"812px",width:"375px"},type:"mobile"},iphonexr:{name:"iPhone XR",styles:{height:"896px",width:"414px"},type:"mobile"},iphonexsmax:{name:"iPhone XS Max",styles:{height:"896px",width:"414px"},type:"mobile"},iphonese2:{name:"iPhone SE (2nd generation)",styles:{height:"667px",width:"375px"},type:"mobile"},iphone12mini:{name:"iPhone 12 mini",styles:{height:"812px",width:"375px"},type:"mobile"},iphone12:{name:"iPhone 12",styles:{height:"844px",width:"390px"},type:"mobile"},iphone12promax:{name:"iPhone 12 Pro Max",styles:{height:"926px",width:"428px"},type:"mobile"},iphoneSE3:{name:"iPhone SE 3rd generation",styles:{height:"667px",width:"375px"},type:"mobile"},iphone13:{name:"iPhone 13",styles:{height:"844px",width:"390px"},type:"mobile"},iphone13pro:{name:"iPhone 13 Pro",styles:{height:"844px",width:"390px"},type:"mobile"},iphone13promax:{name:"iPhone 13 Pro Max",styles:{height:"926px",width:"428px"},type:"mobile"},iphone14:{name:"iPhone 14",styles:{height:"844px",width:"390px"},type:"mobile"},iphone14pro:{name:"iPhone 14 Pro",styles:{height:"852px",width:"393px"},type:"mobile"},iphone14promax:{name:"iPhone 14 Pro Max",styles:{height:"932px",width:"430px"},type:"mobile"},ipad:{name:"iPad",styles:{height:"1024px",width:"768px"},type:"tablet"},ipad10p:{name:"iPad Pro 10.5-in",styles:{height:"1112px",width:"834px"},type:"tablet"},ipad11p:{name:"iPad Pro 11-in",styles:{height:"1194px",width:"834px"},type:"tablet"},ipad12p:{name:"iPad Pro 12.9-in",styles:{height:"1366px",width:"1024px"},type:"tablet"},galaxys5:{name:"Galaxy S5",styles:{height:"640px",width:"360px"},type:"mobile"},galaxys9:{name:"Galaxy S9",styles:{height:"740px",width:"360px"},type:"mobile"},nexus5x:{name:"Nexus 5X",styles:{height:"660px",width:"412px"},type:"mobile"},nexus6p:{name:"Nexus 6P",styles:{height:"732px",width:"412px"},type:"mobile"},pixel:{name:"Pixel",styles:{height:"960px",width:"540px"},type:"mobile"},pixelxl:{name:"Pixel XL",styles:{height:"1280px",width:"720px"},type:"mobile"}},P=w;const e=[{text:"Test Item 1",children:[{href:"/test-1/test-1-1",text:"Test Item 1.1"},{href:"/test-1/test-1-2",text:"Test Item 1.2"},{href:"/test-1/test-1-3",text:"Test Item 1.3"}]},{text:"Test Item 2",children:[{to:"/test-2/test-2-1",text:"Test Item 2.1"},{to:"/test-2/test-2-2",routerComponentName:"nuxt-link",text:"Test Item 2.2"},{href:"/test-2/test-2-3",text:"Test Item 2.3"}]},{id:"test-3",text:"Test Item 3",children:[{href:"/test-3/test-3-1",text:"Test Item 3.1"},{href:"/test-3/test-3-2",text:"Test Item 3.2"},{href:"/test-3/test-3-3",text:"Test Item 3.3"}]}],t={items:s.props.items.default(),headingTag:s.props.headingTag.default,customClasses:s.props.customClasses.default()},$={component:s,title:"Components/UsaFooterCollapsibleMenu",argTypes:{items:{control:{type:"object"}},headingTag:{control:{type:"text"}},customClasses:{control:{type:"object"}}},args:{items:t.items,headingTag:t.headingTag,customClasses:t.customClasses},parameters:{viewport:{viewports:P}},decorators:[()=>({template:'<div class="usa-footer"><div class="usa-footer__nav"><story /></div></div>'})],render:C=>({components:{UsaFooterCollapsibleMenu:s},props:Object.keys(s.props),setup(){return{args:C}},template:`<UsaFooterCollapsibleMenu
      :items="args.items"
      :heading-tag="args.headingTag"
      :custom-classes="args.customClasses"
    ></UsaFooterCollapsibleMenu>`})},o={args:{...t,items:e},name:"Default",parameters:{docs:{source:{code:`<UsaFooterCollapsibleMenu :items="${JSON.stringify(e,null,"	")}"></UsaFooterCollapsibleMenu>`}}}},i={args:{...t,items:e,headingTag:"h3"},name:"Custom Heading Tag",parameters:{docs:{source:{code:`<UsaFooterCollapsibleMenu :items="${JSON.stringify(e,null,"	")}" heading-tag="h3"></UsaFooterCollapsibleMenu>`}}}},a={args:{...t,items:e},name:"Mobile Collapsible",parameters:{viewport:{defaultViewport:"iphone6"},docs:{source:{code:`<UsaFooterCollapsibleMenu :items="${JSON.stringify(e,null,"	")}"></UsaFooterCollapsibleMenu>`}}}},l={args:{...t,items:e,customClasses:{gridRow:["test-grid-row-class"],gridCol:["test-grid-col-class"]}},name:"Custom CSS Classes",parameters:{docs:{source:{code:`<UsaFooterCollapsibleMenu :items="${JSON.stringify(e,null,"	")}" :custom-classes="{ gridRow: ['test-grid-row-class'], gridCol: ['test-grid-col-class'] }"></UsaFooterCollapsibleMenu>`}}}};var n,p,r;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    items: testItems
  },
  name: 'Default',
  parameters: {
    docs: {
      source: {
        code: \`<UsaFooterCollapsibleMenu :items="\${JSON.stringify(testItems, null, '\\t')}"></UsaFooterCollapsibleMenu>\`
      }
    }
  }
}`,...(r=(p=o.parameters)==null?void 0:p.docs)==null?void 0:r.source}}};var m,h,d;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    items: testItems,
    headingTag: 'h3'
  },
  name: 'Custom Heading Tag',
  parameters: {
    docs: {
      source: {
        code: \`<UsaFooterCollapsibleMenu :items="\${JSON.stringify(testItems, null, '\\t')}" heading-tag="h3"></UsaFooterCollapsibleMenu>\`
      }
    }
  }
}`,...(d=(h=i.parameters)==null?void 0:h.docs)==null?void 0:d.source}}};var g,u,x;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    items: testItems
  },
  name: 'Mobile Collapsible',
  parameters: {
    viewport: {
      defaultViewport: 'iphone6'
    },
    docs: {
      source: {
        code: \`<UsaFooterCollapsibleMenu :items="\${JSON.stringify(testItems, null, '\\t')}"></UsaFooterCollapsibleMenu>\`
      }
    }
  }
}`,...(x=(u=a.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};var c,y,b;l.parameters={...l.parameters,docs:{...(c=l.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    items: testItems,
    customClasses: {
      gridRow: ['test-grid-row-class'],
      gridCol: ['test-grid-col-class']
    }
  },
  name: 'Custom CSS Classes',
  parameters: {
    docs: {
      source: {
        code: \`<UsaFooterCollapsibleMenu :items="\${JSON.stringify(testItems, null, '\\t')}" :custom-classes="{ gridRow: ['test-grid-row-class'], gridCol: ['test-grid-col-class'] }"></UsaFooterCollapsibleMenu>\`
      }
    }
  }
}`,...(b=(y=l.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};const R=["DefaultFooterCollapsibleMenu","HeadingTagFooterCollapsibleMenu","MobileCollapsibleMenu","CustomClassesFooterCollapsibleMenu"];export{l as CustomClassesFooterCollapsibleMenu,o as DefaultFooterCollapsibleMenu,i as HeadingTagFooterCollapsibleMenu,a as MobileCollapsibleMenu,R as __namedExportsOrder,$ as default};
