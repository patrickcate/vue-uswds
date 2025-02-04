import{_ as e}from"./UsaCollectionCalendar-BxGw1i5c.js";import"./vue.esm-bundler-DlC1_45x.js";const a={datetime:e.props.datetime.default,month:e.props.month.default,day:e.props.day.default,customClasses:e.props.customClasses.default()},p={component:e,title:"Components/UsaCollectionCalendar",argTypes:{datetime:{control:{type:"text"}},month:{control:{type:"text"}},day:{control:{type:"number",min:1,max:31}},customClasses:{control:{type:"object"}}},args:{datetime:a.datetime,month:a.month,day:a.day,customClasses:a.customClasses},render:c=>({components:{UsaCollectionCalendar:e},props:Object.keys(e.props),setup(){return{args:c}},template:`<UsaCollectionCalendar
    :datetime="args.datetime"
    :month="args.month"
    :day="args.day"
    :custom-classes="args.customClasses"
  />`})},t={args:{...a,datetime:"2021-01-01",month:"Jan",day:1},name:"Default",parameters:{docs:{source:{code:'<UsaCollectionCalendar datetime="2021-01-01" month="Jan" :day="1"></UsaCollectionCalendar>'}}}},s={args:{...a,datetime:"2021-01-01",month:"Jan",day:1,customClasses:{datetime:["test-datetime-class"],month:["test-month-class"],day:["test-day-class"]}},name:"Custom Classes",parameters:{docs:{source:{code:`<UsaCollectionCalendar datetime="2021-01-01" month="Jan" :day="1" :custom-classes="{
      datetime: ['test-datetime-class'],
      month: ['test-month-class'],
      day: ['test-day-class'],
    }"></UsaCollectionCalendar>`}}}};var o,n,l;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    datetime: '2021-01-01',
    month: 'Jan',
    day: 1
  },
  name: 'Default',
  parameters: {
    docs: {
      source: {
        code: \`<UsaCollectionCalendar datetime="2021-01-01" month="Jan" :day="1"></UsaCollectionCalendar>\`
      }
    }
  }
}`,...(l=(n=t.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};var m,r,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    datetime: '2021-01-01',
    month: 'Jan',
    day: 1,
    customClasses: {
      datetime: ['test-datetime-class'],
      month: ['test-month-class'],
      day: ['test-day-class']
    }
  },
  name: 'Custom Classes',
  parameters: {
    docs: {
      source: {
        code: \`<UsaCollectionCalendar datetime="2021-01-01" month="Jan" :day="1" :custom-classes="{
      datetime: ['test-datetime-class'],
      month: ['test-month-class'],
      day: ['test-day-class'],
    }"></UsaCollectionCalendar>\`
      }
    }
  }
}`,...(d=(r=s.parameters)==null?void 0:r.docs)==null?void 0:d.source}}};const u=["DefaultCollectionCalendar","CustomClassesCollectionCalendar"];export{s as CustomClassesCollectionCalendar,t as DefaultCollectionCalendar,u as __namedExportsOrder,p as default};
