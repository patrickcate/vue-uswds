import{_ as e,a as g}from"./UsaStepIndicator-9kHFwmJF.js";import"./vue.esm-bundler-DsKf3Hbt.js";import"./UsaStepIndicatorHeader-ClJa5eh1.js";import"./BaseHeading-CVYvBzV4.js";const r={status:e.props.status.default,label:e.props.label.default},f={component:e,title:"Components/UsaStepIndicatorSegment",argTypes:{status:{options:["","current","completed"],control:{type:"select"}},label:{control:{type:"text"}}},args:{status:r.status},render:i=>({components:{UsaStepIndicator:g,UsaStepIndicatorSegment:e},props:Object.keys(e.props),setup(){return{args:i}},template:`
    <UsaStepIndicator counters>
        <UsaStepIndicatorSegment :status="args.status" :label="args.label"></UsaStepIndicatorSegment>
        <template #header>&nbsp</template>
    </UsaStepIndicator>`})},t={args:{...r,label:"Test Step 1"},name:"Default",parameters:{docs:{source:{code:'<UsaStepIndicatorSegment label="Test Step 1"></UsaStepIndicatorSegment>'}}}},a={args:{...r,status:"current",label:"Test Current Step 1"},name:"Current",parameters:{docs:{source:{code:'<UsaStepIndicatorSegment status="current" label="Test Current Step 1"></UsaStepIndicatorSegment>'}}}},s={args:{...r,status:"completed",label:"Test Completed Step 1"},name:"Completed",parameters:{docs:{source:{code:'<UsaStepIndicatorSegment status="completed" label="Test Completed Step 1"></UsaStepIndicatorSegment>'}}}};var n,o,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    label: 'Test Step 1'
  },
  name: 'Default',
  parameters: {
    docs: {
      source: {
        code: \`<UsaStepIndicatorSegment label="Test Step 1"></UsaStepIndicatorSegment>\`
      }
    }
  }
}`,...(p=(o=t.parameters)==null?void 0:o.docs)==null?void 0:p.source}}};var c,m,d;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    status: 'current',
    label: 'Test Current Step 1'
  },
  name: 'Current',
  parameters: {
    docs: {
      source: {
        code: \`<UsaStepIndicatorSegment status="current" label="Test Current Step 1"></UsaStepIndicatorSegment>\`
      }
    }
  }
}`,...(d=(m=a.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var l,S,u;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    status: 'completed',
    label: 'Test Completed Step 1'
  },
  name: 'Completed',
  parameters: {
    docs: {
      source: {
        code: \`<UsaStepIndicatorSegment status="completed" label="Test Completed Step 1"></UsaStepIndicatorSegment>\`
      }
    }
  }
}`,...(u=(S=s.parameters)==null?void 0:S.docs)==null?void 0:u.source}}};const T=["DefaultStepIndicatorSegment","CurrentStepIndicatorSegment","CompletedStepIndicatorSegment"];export{s as CompletedStepIndicatorSegment,a as CurrentStepIndicatorSegment,t as DefaultStepIndicatorSegment,T as __namedExportsOrder,f as default};
