import{l as t,L as a,c as g,r as D,o as k}from"./vue.esm-bundler-2e7cedae.js";import{U as y}from"./UsaDatePicker-e6ecc6aa.js";import"./index-2ecd98da.js";import"./index-6ef08634.js";import"./unique-id-a1cb1937.js";import"./common-c0b90c12.js";import"./constants-fce87d39.js";import"./dates-8ec2f460.js";import"./UsaFormGroup-0035569d.js";import"./UsaLabel-818695ec.js";import"./UsaDatePickerCalendar-48f153a5.js";import"./UsaDatePickerCalendarDay-9d1efc87.js";import"./useFocusTrap-1f496824.js";import"./focus-trap.esm-0fbb6aae.js";import"./UsaDatePickerCalendarMonth-2f6f21a2.js";import"./UsaDatePickerCalendarYear-60771776.js";const f={class:"usa-date-range-picker"},l={__name:"UsaDateRangePicker",setup(o){const n=t(""),r=t(""),m=e=>{n.value=e},u=e=>{r.value=e};return a("isDateRange",t(!0)),a("dateRangeStart",n),a("dateRangeEnd",r),a("updateDateRangeStart",m),a("updateDateRangeEnd",u),(e,U)=>(k(),g("div",f,[D(e.$slots,"default")]))}},i=l;l.__docgenInfo={exportName:"default",displayName:"UsaDateRangePicker",type:1,props:[{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[],slots:[{name:"default",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}}],exposed:[],sourceFiles:"/home/runner/work/vue-uswds/vue-uswds/src/components/UsaDateRangePicker/UsaDateRangePicker.vue"};const P={},V={component:i,title:"Components/UsaDateRangePicker",argTypes:{default:{control:{type:"text"}}},args:{default:`<UsaDatePicker
      label="Start Date"
      v-model="startDate"
      range-type="start">
    </UsaDatePicker>
    <UsaDatePicker
      label="End Date"
      v-model="endDate"
      range-type="end">
    </UsaDatePicker>`},render:o=>({components:{UsaDateRangePicker:i,UsaDatePicker:y},props:[],setup(){const n=t(""),r=t("");return{args:o,startDate:n,endDate:r}},template:`<UsaDateRangePicker>
    <template v-if="!!args.default" #default>${o.default}</template>
  </UsaDateRangePicker>`})},s={args:{...P},name:"Default",parameters:{docs:{source:{code:`<UsaDateRangePicker>
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
}`,...(p=(d=s.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const $=["DefaultDateRangePicker"];export{s as DefaultDateRangePicker,$ as __namedExportsOrder,V as default};
