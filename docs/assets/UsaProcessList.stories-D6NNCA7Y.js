import{_ as p,a as t}from"./UsaProcessListItem-B5NHaRpZ.js";import"./vue.esm-bundler-DsKf3Hbt.js";import"./BaseHeading-CVYvBzV4.js";const m={headingTag:t.props.headingTag.default},h={component:t,title:"Components/UsaProcessList",argTypes:{headingTag:{options:["h1","h2","h3","h4","h5","h6"],control:{type:"select"}},default:{control:{type:"text"}}},args:{headingTag:m.headingTag,default:'<UsaProcessListItem heading="Test step 1"><p>Test body.</p></UsaProcessListItem>'},render:a=>({components:{UsaProcessList:t,UsaProcessListItem:p},props:Object.keys(t.props),setup(){return{args:a}},template:`<UsaProcessList :heading-tag="args.headingTag">${a.default}</UsaProcessList>`})},s={name:"Default",parameters:{docs:{source:{code:'<UsaProcessList><UsaProcessListItem heading="Test step 1"><p>Test body.</p></UsaProcessListItem></UsaProcessList>'}}}},e={args:{headingTag:"h4"},name:"Custom Heading Tag",parameters:{docs:{source:{code:'<UsaProcessList heading-tag="h4"><UsaProcessListItem heading="Test step 1"><p>Test body.</p></UsaProcessListItem></UsaProcessList>'}}}};var o,r,n;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: 'Default',
  parameters: {
    docs: {
      source: {
        code: \`<UsaProcessList><UsaProcessListItem heading="Test step 1"><p>Test body.</p></UsaProcessListItem></UsaProcessList>\`
      }
    }
  }
}`,...(n=(r=s.parameters)==null?void 0:r.docs)==null?void 0:n.source}}};var c,i,d;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    headingTag: 'h4'
  },
  name: 'Custom Heading Tag',
  parameters: {
    docs: {
      source: {
        code: \`<UsaProcessList heading-tag="h4"><UsaProcessListItem heading="Test step 1"><p>Test body.</p></UsaProcessListItem></UsaProcessList>\`
      }
    }
  }
}`,...(d=(i=e.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};const u=["DefaultProcessList","CustomHeadingTagProcessList"];export{e as CustomHeadingTagProcessList,s as DefaultProcessList,u as __namedExportsOrder,h as default};
