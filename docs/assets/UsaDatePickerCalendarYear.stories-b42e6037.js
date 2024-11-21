import{U as c}from"./UsaDatePickerCalendarYear-1d7dcad5.js";import{M as y,b as M}from"./constants-fce87d39.js";import{a as T}from"./dates-8ec2f460.js";import"./vue.esm-bundler-d9807bdf.js";import"./useFocusTrap-6eaffc8c.js";import"./index-db724f69.js";import"./index-7991d288.js";import"./focus-trap.esm-97d19bd4.js";import"./common-c0b90c12.js";const e={selectedYear:new Date().getFullYear(),activeDate:T(new Date),minDate:y,maxDate:M,previousYearsButtonLabel:"Navigate back 12 years",nextYearsButtonLabel:"Navigate forward 12 years"},F={component:c,title:"Components/UsaDatePickerCalendarYear",argTypes:{selectedYear:{control:{type:"number"}},activeDate:{control:{type:"text"}},minDate:{control:{type:"text"}},maxDate:{control:{type:"text"}},previousYearsButtonLabel:{control:{type:"text"}},nextYearsButtonLabel:{control:{type:"text"}}},args:{selectedYear:e.selectedYear,activeDate:e.activeDate,minDate:e.minDate,maxDate:e.maxDate,previousYearsButtonLabel:e.previousYearsButtonLabel,nextYearsButtonLabel:e.nextYearsButtonLabel},render:f=>({components:{UsaDatePickerCalendarYear:c},props:Object.keys(c.props),setup(){return{args:f}},template:`<UsaDatePickerCalendarYear
    :selected-year="args.selectedYear"
    :active-date="args.activeDate"
    :min-date="args.minDate"
    :max-date="args.maxDate"
    :previous-years-button-label="args.previousYearsButtonLabel"
    :next-years-button-label="args.nextYearsButtonLabel"
    ></UsaDatePickerCalendarYear>`})},a={args:{...e},name:"Default",parameters:{docs:{source:{code:"<UsaDatePickerCalendarYear />"}}}},r={args:{...e,selectedYear:2020},name:"Selected Year",parameters:{docs:{source:{code:'<UsaDatePickerCalendarYear :selected-year="2020" />'}}}},t={args:{...e,minDate:"2020-01-01"},name:"Min Date",parameters:{docs:{source:{code:'<UsaDatePickerCalendarYear min-date="2020-01-01" />'}}}},n={args:{...e,maxDate:"2023-12-31"},name:"Max Date",parameters:{docs:{source:{code:'<UsaDatePickerCalendarYear max-date="2023-12-31" />'}}}},s={args:{...e,previousButtonLabel:"Test previous button"},name:"Previous Years Button Label",parameters:{docs:{source:{code:'<UsaDatePickerCalendarYear previous-button-label="Test previous button" />'}}}},o={args:{...e,nextButtonLabel:"Test next button"},name:"Next Years Button Label",parameters:{docs:{source:{code:'<UsaDatePickerCalendarYear next-button-label="Test next button" />'}}}};var l,d,u;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    ...defaultProps
  },
  name: 'Default',
  parameters: {
    docs: {
      source: {
        code: \`<UsaDatePickerCalendarYear />\`
      }
    }
  }
}`,...(u=(d=a.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var i,m,p;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    selectedYear: 2020
  },
  name: 'Selected Year',
  parameters: {
    docs: {
      source: {
        code: \`<UsaDatePickerCalendarYear :selected-year="2020" />\`
      }
    }
  }
}`,...(p=(m=r.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var D,Y,b;t.parameters={...t.parameters,docs:{...(D=t.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    minDate: '2020-01-01'
  },
  name: 'Min Date',
  parameters: {
    docs: {
      source: {
        code: \`<UsaDatePickerCalendarYear min-date="2020-01-01" />\`
      }
    }
  }
}`,...(b=(Y=t.parameters)==null?void 0:Y.docs)==null?void 0:b.source}}};var P,x,k;n.parameters={...n.parameters,docs:{...(P=n.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    maxDate: '2023-12-31'
  },
  name: 'Max Date',
  parameters: {
    docs: {
      source: {
        code: \`<UsaDatePickerCalendarYear max-date="2023-12-31" />\`
      }
    }
  }
}`,...(k=(x=n.parameters)==null?void 0:x.docs)==null?void 0:k.source}}};var C,g,v;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    previousButtonLabel: 'Test previous button'
  },
  name: 'Previous Years Button Label',
  parameters: {
    docs: {
      source: {
        code: \`<UsaDatePickerCalendarYear previous-button-label="Test previous button" />\`
      }
    }
  }
}`,...(v=(g=s.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var B,L,U;o.parameters={...o.parameters,docs:{...(B=o.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    nextButtonLabel: 'Test next button'
  },
  name: 'Next Years Button Label',
  parameters: {
    docs: {
      source: {
        code: \`<UsaDatePickerCalendarYear next-button-label="Test next button" />\`
      }
    }
  }
}`,...(U=(L=o.parameters)==null?void 0:L.docs)==null?void 0:U.source}}};const X=["DefaultDatePickerCalendarYear","SelectedYearDatePickerCalendarYear","MinYearDatePickerCalendarYear","MaxYearDatePickerCalendarYear","PreviousButtonLabelDatePickerCalendarYear","NextButtonLabelDatePickerCalendarYear"];export{a as DefaultDatePickerCalendarYear,n as MaxYearDatePickerCalendarYear,t as MinYearDatePickerCalendarYear,o as NextButtonLabelDatePickerCalendarYear,s as PreviousButtonLabelDatePickerCalendarYear,r as SelectedYearDatePickerCalendarYear,X as __namedExportsOrder,F as default};
