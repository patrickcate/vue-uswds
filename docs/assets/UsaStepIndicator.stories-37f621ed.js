import{U as s,a as g}from"./UsaStepIndicator-972b4313.js";import{U as I}from"./UsaStepIndicatorHeader-378d4f36.js";import"./vue.esm-bundler-2e7cedae.js";import"./BaseHeading-0ea88faf.js";const e={steps:s.props.steps.default(),currentStepNumber:s.props.currentStepNumber.default,counters:s.props.counters.default,smallCounters:s.props.smallCounters.default,center:s.props.center.default,noLabels:s.props.noLabels.default,headingTag:s.props.headingTag.default,customClasses:s.props.customClasses.default()},t=["Personal information","Household status","Supporting documents","Signature","Review and submit"],ee={component:s,subcomponents:{UsaStepIndicatorHeader:I,UsaStepIndicatorSegment:g},title:"Components/UsaStepIndicator",argTypes:{steps:{control:{type:"object"}},currentStepNumber:{control:{type:"number",min:1,max:t.length+1}},counters:{control:{type:"boolean"}},smallCounters:{control:{type:"boolean"}},center:{control:{type:"boolean"}},noLabels:{control:{type:"boolean"}},customClasses:{control:{type:"object"}},headingTag:{options:["h1","h2","h3","h4","h5","h6"],control:{type:"select"}},default:{control:{type:"text"}},header:{control:{type:"text"}}},args:{steps:t,currentStepNumber:e.currentStepNumber,counters:e.counters,smallCounters:e.smallCounters,center:e.center,noLabels:e.noLabels,headingTag:e.headingTag,customClasses:e.customClasses,default:"",header:""},render:i=>({components:{UsaStepIndicator:s,UsaStepIndicatorSegment:g,UsaStepIndicatorHeader:I},props:Object.keys(s.props),setup(){return{args:i}},template:`
    <UsaStepIndicator
      :steps="args.steps"
      :current-step-number="args.currentStepNumber"
      :counters="args.counters"
      :small-counters="args.smallCounters"
      :center="args.center"
      :no-labels="args.noLabels"
      :custom-classes="args.customClasses"
      :heading-tag="args.headingTag"
    >
      <template v-if="!!args.default" #default>${i.default}</template>
      <template v-if="!!args.header" #header>${i.header}</template>
      </UsaStepIndicator>`})},r={args:{...e,steps:t},name:"Default",parameters:{docs:{source:{code:'<UsaStepIndicator :steps="testSteps"></UsaStepIndicator>'}}}},a={args:{...e,steps:t,counters:!0},name:"Counters",parameters:{docs:{source:{code:'<UsaStepIndicator :steps="testSteps" :counters="true"></UsaStepIndicator>'}}}},n={args:{...e,steps:t,smallCounters:!0},name:"Small Counters",parameters:{docs:{source:{code:'<UsaStepIndicator :steps="testSteps" :small-counters="true"></UsaStepIndicator>'}}}},o={args:{...e,steps:t,center:!0},name:"Centered",parameters:{docs:{source:{code:'<UsaStepIndicator :steps="testSteps" :center="true"></UsaStepIndicator>'}}}},c={args:{...e,steps:t,counters:!0,center:!0},name:"Centered Counters",parameters:{docs:{source:{code:'<UsaStepIndicator :steps="testSteps" :counters="true" :center="true"></UsaStepIndicator>'}}}},p={args:{...e,steps:t,smallCounters:!0,center:!0},name:"Small Centered Counters",parameters:{docs:{source:{code:'<UsaStepIndicator :steps="testSteps" :small-counters="true" :center="true"></UsaStepIndicator>'}}}},u={args:{...e,steps:t,noLabels:!0},name:"No Labels",parameters:{docs:{source:{code:'<UsaStepIndicator :steps="testSteps" :no-labels="true"></UsaStepIndicator>'}}}},d={args:{...e,steps:t,counters:!0,currentStepNumber:3},name:"In Progress",parameters:{docs:{source:{code:'<UsaStepIndicator :steps="testSteps" :counters="true" :current-step-number="3"></UsaStepIndicator>'}}}},m={args:{...e,steps:t,counters:!0,currentStepNumber:3,headingTag:"h4"},name:"Custom Heading Tag",parameters:{docs:{source:{code:'<UsaStepIndicator :steps="testSteps" :counters="true" :current-step-number="3" heading-tag="h4"></UsaStepIndicator>'}}}},l={args:{...e,steps:t,counters:!0,customClasses:{list:["test-list-class"],segment:["test-segment-class"],header:["test-header-class"]}},name:"Custom Classes",parameters:{docs:{source:{code:`<UsaStepIndicator :steps="testSteps" :counters="true" :custom-classes="{ list: ['test-list-class'], segment: ['test-segment-class'], header: ['test-header-class'] }"></UsaStepIndicator>`}}}},S={args:{...e,steps:[],counters:!0,default:`
      <UsaStepIndicatorSegment
        status="completed"
        label="Step 1"
      ></UsaStepIndicatorSegment>
      <UsaStepIndicatorSegment
        status="current"
        label="Step 2"
      ></UsaStepIndicatorSegment>
      <UsaStepIndicatorSegment
        label="Step 3"
      ></UsaStepIndicatorSegment>
    `,header:`
      <UsaStepIndicatorHeader
        :current-step-number="2"
        current-step-label="Step 2"
        :total-steps="3"
      ></UsaStepIndicatorHeader>
    `},name:"Custom Slots",parameters:{docs:{source:{code:`<UsaStepIndicator>
        <template #default>
          <UsaStepIndicatorSegment
            status="completed"
            label="Step 1"
          ></UsaStepIndicatorSegment>
          <UsaStepIndicatorSegment
            status="current"
            label="Step 2"
          ></UsaStepIndicatorSegment>
          <UsaStepIndicatorSegment
            label="Step 3"
          ></UsaStepIndicatorSegment>
        </template>
        <template #header>
          <UsaStepIndicatorHeader
            :current-step-number="2"
            current-step-label="Step 2"
            :total-steps="3"
          ></UsaStepIndicatorHeader>`}}}};var U,C,b;r.parameters={...r.parameters,docs:{...(U=r.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    steps: testSteps
  },
  name: 'Default',
  parameters: {
    docs: {
      source: {
        code: \`<UsaStepIndicator :steps="testSteps"></UsaStepIndicator>\`
      }
    }
  }
}`,...(b=(C=r.parameters)==null?void 0:C.docs)==null?void 0:b.source}}};var h,f,P;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    steps: testSteps,
    counters: true
  },
  name: 'Counters',
  parameters: {
    docs: {
      source: {
        code: \`<UsaStepIndicator :steps="testSteps" :counters="true"></UsaStepIndicator>\`
      }
    }
  }
}`,...(P=(f=a.parameters)==null?void 0:f.docs)==null?void 0:P.source}}};var H,N,T;n.parameters={...n.parameters,docs:{...(H=n.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    steps: testSteps,
    smallCounters: true
  },
  name: 'Small Counters',
  parameters: {
    docs: {
      source: {
        code: \`<UsaStepIndicator :steps="testSteps" :small-counters="true"></UsaStepIndicator>\`
      }
    }
  }
}`,...(T=(N=n.parameters)==null?void 0:N.docs)==null?void 0:T.source}}};var y,L,x;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    steps: testSteps,
    center: true
  },
  name: 'Centered',
  parameters: {
    docs: {
      source: {
        code: \`<UsaStepIndicator :steps="testSteps" :center="true"></UsaStepIndicator>\`
      }
    }
  }
}`,...(x=(L=o.parameters)==null?void 0:L.docs)==null?void 0:x.source}}};var D,j,v;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    steps: testSteps,
    counters: true,
    center: true
  },
  name: 'Centered Counters',
  parameters: {
    docs: {
      source: {
        code: \`<UsaStepIndicator :steps="testSteps" :counters="true" :center="true"></UsaStepIndicator>\`
      }
    }
  }
}`,...(v=(j=c.parameters)==null?void 0:j.docs)==null?void 0:v.source}}};var _,O,$;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    steps: testSteps,
    smallCounters: true,
    center: true
  },
  name: 'Small Centered Counters',
  parameters: {
    docs: {
      source: {
        code: \`<UsaStepIndicator :steps="testSteps" :small-counters="true" :center="true"></UsaStepIndicator>\`
      }
    }
  }
}`,...($=(O=p.parameters)==null?void 0:O.docs)==null?void 0:$.source}}};var k,w,E;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    steps: testSteps,
    noLabels: true
  },
  name: 'No Labels',
  parameters: {
    docs: {
      source: {
        code: \`<UsaStepIndicator :steps="testSteps" :no-labels="true"></UsaStepIndicator>\`
      }
    }
  }
}`,...(E=(w=u.parameters)==null?void 0:w.docs)==null?void 0:E.source}}};var R,q,z;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    steps: testSteps,
    counters: true,
    currentStepNumber: 3
  },
  name: 'In Progress',
  parameters: {
    docs: {
      source: {
        code: \`<UsaStepIndicator :steps="testSteps" :counters="true" :current-step-number="3"></UsaStepIndicator>\`
      }
    }
  }
}`,...(z=(q=d.parameters)==null?void 0:q.docs)==null?void 0:z.source}}};var A,B,F;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    steps: testSteps,
    counters: true,
    currentStepNumber: 3,
    headingTag: 'h4'
  },
  name: 'Custom Heading Tag',
  parameters: {
    docs: {
      source: {
        code: \`<UsaStepIndicator :steps="testSteps" :counters="true" :current-step-number="3" heading-tag="h4"></UsaStepIndicator>\`
      }
    }
  }
}`,...(F=(B=m.parameters)==null?void 0:B.docs)==null?void 0:F.source}}};var G,J,K;l.parameters={...l.parameters,docs:{...(G=l.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    steps: testSteps,
    counters: true,
    customClasses: {
      list: ['test-list-class'],
      segment: ['test-segment-class'],
      header: ['test-header-class']
    }
  },
  name: 'Custom Classes',
  parameters: {
    docs: {
      source: {
        code: \`<UsaStepIndicator :steps="testSteps" :counters="true" :custom-classes="{ list: ['test-list-class'], segment: ['test-segment-class'], header: ['test-header-class'] }"></UsaStepIndicator>\`
      }
    }
  }
}`,...(K=(J=l.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var M,Q,V;S.parameters={...S.parameters,docs:{...(M=S.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    steps: [],
    counters: true,
    default: \`
      <UsaStepIndicatorSegment
        status="completed"
        label="Step 1"
      ></UsaStepIndicatorSegment>
      <UsaStepIndicatorSegment
        status="current"
        label="Step 2"
      ></UsaStepIndicatorSegment>
      <UsaStepIndicatorSegment
        label="Step 3"
      ></UsaStepIndicatorSegment>
    \`,
    header: \`
      <UsaStepIndicatorHeader
        :current-step-number="2"
        current-step-label="Step 2"
        :total-steps="3"
      ></UsaStepIndicatorHeader>
    \`
  },
  name: 'Custom Slots',
  parameters: {
    docs: {
      source: {
        code: \`<UsaStepIndicator>
        <template #default>
          <UsaStepIndicatorSegment
            status="completed"
            label="Step 1"
          ></UsaStepIndicatorSegment>
          <UsaStepIndicatorSegment
            status="current"
            label="Step 2"
          ></UsaStepIndicatorSegment>
          <UsaStepIndicatorSegment
            label="Step 3"
          ></UsaStepIndicatorSegment>
        </template>
        <template #header>
          <UsaStepIndicatorHeader
            :current-step-number="2"
            current-step-label="Step 2"
            :total-steps="3"
          ></UsaStepIndicatorHeader>\`
      }
    }
  }
}`,...(V=(Q=S.parameters)==null?void 0:Q.docs)==null?void 0:V.source}}};const te=["DefaultStepIndicator","CountersStepIndicator","SmallCountersStepIndicator","CenteredStepIndicator","CountersCenteredStepIndicator","SmallCountersCenteredStepIndicator","NoLabelsStepIndicator","InProgressStepIndicator","CustomHeadingTagStepIndicator","CustomClassesStepIndicator","CustomSlotSegmentsStepIndicator"];export{o as CenteredStepIndicator,c as CountersCenteredStepIndicator,a as CountersStepIndicator,l as CustomClassesStepIndicator,m as CustomHeadingTagStepIndicator,S as CustomSlotSegmentsStepIndicator,r as DefaultStepIndicator,d as InProgressStepIndicator,u as NoLabelsStepIndicator,p as SmallCountersCenteredStepIndicator,n as SmallCountersStepIndicator,te as __namedExportsOrder,ee as default};
