import{l as t,M as a,c as u,r as g,o as D}from"./vue.esm-bundler-DsKf3Hbt.js";import{_ as k}from"./UsaDatePicker-BYwUGWRv.js";import"./index-BIJogqLd.js";import"./index-CipSGTa_.js";import"./unique-id-ZGF68Crf.js";import"./common-cfad2wKl.js";import"./constants-BA52rpFi.js";import"./dates-qO0ZlDc-.js";import"./UsaFormGroup-Byzm6HH0.js";import"./UsaLabel-qQK9qPDl.js";import"./UsaDatePickerCalendar-CcBjL_7Z.js";import"./UsaDatePickerCalendarDay-BA4UdgIu.js";import"./component-DyZ-12hH.js";import"./focus-trap.esm-DYjLEhSG.js";import"./UsaDatePickerCalendarMonth-DJKVFY81.js";import"./UsaDatePickerCalendarYear-YRgY5-x2.js";const y={class:"usa-date-range-picker"},i={__name:"UsaDateRangePicker",setup(o){const n=t(""),r=t(""),l=e=>{n.value=e},m=e=>{r.value=e};return a("isDateRange",t(!0)),a("dateRangeStart",n),a("dateRangeEnd",r),a("updateDateRangeStart",l),a("updateDateRangeEnd",m),(e,P)=>(D(),u("div",y,[g(e.$slots,"default")]))}};i.__docgenInfo={exportName:"default",displayName:"UsaDateRangePicker",type:1,props:[{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[],slots:[{name:"default",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}}],exposed:[],sourceFiles:"/home/runner/work/vue-uswds/vue-uswds/src/components/UsaDateRangePicker/UsaDateRangePicker.vue"};const f={},I={component:i,title:"Components/UsaDateRangePicker",argTypes:{default:{control:{type:"text"}}},args:{default:`<UsaDatePicker
      label="Start Date"
      v-model="startDate"
      range-type="start">
    </UsaDatePicker>
    <UsaDatePicker
      label="End Date"
      v-model="endDate"
      range-type="end">
    </UsaDatePicker>`},render:o=>({components:{UsaDateRangePicker:i,UsaDatePicker:k},props:[],setup(){const n=t(""),r=t("");return{args:o,startDate:n,endDate:r}},template:`<UsaDateRangePicker>
    <template v-if="!!args.default" #default>${o.default}</template>
  </UsaDateRangePicker>`})},s={args:{...f},name:"Default",parameters:{docs:{source:{code:`<UsaDateRangePicker>
        <UsaDatePicker
          label="Start Date"
          v-model="startDate"
          range-type="start">
        </UsaDatePicker>
        <UsaDatePicker
          label="End Date"
          v-model="endDate"
          range-type="end">
        </UsaDatePicker>
      </UsaDateRangePicker>`}}}};var c,d,p;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    ...defaultProps
  },
  name: 'Default',
  parameters: {
    docs: {
      source: {
        code: \`<UsaDateRangePicker>
        <UsaDatePicker
          label="Start Date"
          v-model="startDate"
          range-type="start">
        </UsaDatePicker>
        <UsaDatePicker
          label="End Date"
          v-model="endDate"
          range-type="end">
        </UsaDatePicker>
      </UsaDateRangePicker>\`
      }
    }
  }
}`,...(p=(d=s.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const K=["DefaultDateRangePicker"];export{s as DefaultDateRangePicker,K as __namedExportsOrder,I as default};
