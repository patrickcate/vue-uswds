import{u as Le,s as u,c as m,r as Y,t as b,a as Ce,G as E,H as Ye,o as r,d as Ee,v as Je,f as y,b as h}from"./vue.esm-bundler-2e7cedae.js";import{n as Ne}from"./unique-id-a1cb1937.js";import{U as J}from"./UsaTextInput-fe9ecdbf.js";import{U as Ve}from"./UsaSelect-9fdd8b9c.js";import"./common-c0b90c12.js";import"./constants-fce87d39.js";import"./index-2ecd98da.js";import"./index-6ef08634.js";import"./UsaFormGroup-0035569d.js";import"./UsaLabel-818695ec.js";const $e={class:"usa-fieldset"},we={key:0,class:"usa-legend"},Pe=["id"],Fe=["id"],Re={class:"usa-memorable-date"},Ae={__name:"UsaDateInput",props:{label:{type:String,default:""},day:{type:[String,Number],default:""},month:{type:[String,Number],default:""},year:{type:[String,Number],default:""},dateOrder:{type:Array,default:()=>["month","day","year"]},dateLabels:{type:Object,default:()=>({month:"Month",day:"Day",year:"Year"})},monthAsSelect:{type:Boolean,default:!1},monthEmptyLabel:{type:String,default:void 0},monthOptions:{type:Array,default:()=>[{value:1,text:"01 - January"},{value:2,text:"02 - February"},{value:3,text:"03 - March"},{value:4,text:"04 - April"},{value:5,text:"05 - May"},{value:6,text:"06 - June"},{value:7,text:"07 - July"},{value:8,text:"08 - August"},{value:9,text:"09 - September"},{value:10,text:"10 - October"},{value:11,text:"11 - November"},{value:12,text:"12 - December"}]},name:{type:String,default:"date"},required:{type:Boolean,default:!1},error:{type:Boolean,default:!1},id:{type:String,default:""}},emits:["update:month","update:day","update:year"],setup(e,{emit:Ue}){const N=Le(),C=Ue,d=e;d.monthAsSelect||console.warn("The 'monthAsSelect' prop is deprecated. Starting with vue-uswds 2.0 the month will always use a select form element. You can set the 'monthAsSelect' prop value to true to minimize changes.");const p=u(()=>d.id||Ne("usa-date-input")),V=u(()=>`${p.value}-error-message`),$=u(()=>`${p.value}-hint`),c=u({get:()=>d.month,set:t=>C("update:month",t)}),w=u({get:()=>d.day,set:t=>C("update:day",t)}),P=u({get:()=>d.year,set:t=>C("update:year",t)}),i=u(()=>{const t=[];return N.hint&&t.push($.value),d.error&&N["error-message"]&&t.push(V.value),t.length?t.join(" "):null});return(t,s)=>(r(),m("fieldset",$e,[e.label||t.$slots.label?(r(),m("legend",we,[Y(t.$slots,"label",{},()=>[Ee(Je(e.label),1)])])):b("",!0),t.$slots.hint?(r(),m("span",{key:1,id:$.value,class:"usa-hint"},[Y(t.$slots,"hint")],8,Pe)):b("",!0),e.error&&t.$slots["error-message"]?(r(),m("span",{key:2,id:V.value,class:"usa-error-message"},[Y(t.$slots,"error-message")],8,Fe)):b("",!0),Ce("div",Re,[(r(!0),m(E,null,Ye(e.dateOrder,o=>(r(),m(E,{key:o},[o==="month"?(r(),m(E,{key:0},[e.monthAsSelect?(r(),y(h(Ve),{key:0,id:`${p.value}-${e.name}-month`,modelValue:c.value,"onUpdate:modelValue":s[0]||(s[0]=l=>c.value=l),options:e.monthOptions,"empty-label":e.monthEmptyLabel,label:e.dateLabels[o],group:!0,name:`${e.name}_month`,required:e.required,"aria-describedby":i.value,"custom-classes":{component:["usa-form-group--month"]}},null,8,["id","modelValue","options","empty-label","label","name","required","aria-describedby"])):(r(),y(h(J),{key:1,id:`${p.value}-${e.name}-month`,modelValue:c.value,"onUpdate:modelValue":s[1]||(s[1]=l=>c.value=l),label:e.dateLabels[o],group:!0,name:`${e.name}_month`,maxlength:2,required:e.required,pattern:"[0-9]*",inputmode:"numeric","aria-describedby":i.value,"custom-classes":{component:["usa-form-group--month"]}},null,8,["id","modelValue","label","name","required","aria-describedby"]))],64)):o==="day"?(r(),y(h(J),{key:1,id:`${p.value}-${e.name}-day`,modelValue:w.value,"onUpdate:modelValue":s[2]||(s[2]=l=>w.value=l),label:e.dateLabels[o],group:!0,name:`${e.name}_day`,maxlength:2,required:e.required,pattern:"[0-9]*",inputmode:"numeric","aria-describedby":i.value,"custom-classes":{component:["usa-form-group--day"]}},null,8,["id","modelValue","label","name","required","aria-describedby"])):o==="year"?(r(),y(h(J),{key:2,id:`${p.value}-${e.name}-year`,modelValue:P.value,"onUpdate:modelValue":s[3]||(s[3]=l=>P.value=l),label:e.dateLabels[o],group:!0,name:`${e.name}_year`,minlength:4,maxlength:4,required:e.required,pattern:"[0-9]*",inputmode:"numeric","aria-describedby":i.value,"custom-classes":{component:["usa-form-group--year"]}},null,8,["id","modelValue","label","name","required","aria-describedby"])):b("",!0)],64))),128))])]))}},n=Ae;Ae.__docgenInfo={exportName:"default",displayName:"UsaDateInput",type:1,props:[{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"error",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]},default:"false"},{name:"name",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'"date"'},{name:"required",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]},default:"false"},{name:"id",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'""'},{name:"label",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'""'},{name:"month",global:!1,description:"",tags:[],required:!1,type:"string | number",declarations:[],schema:{kind:"enum",type:"string | number",schema:["string","number"]},default:'""'},{name:"day",global:!1,description:"",tags:[],required:!1,type:"string | number",declarations:[],schema:{kind:"enum",type:"string | number",schema:["string","number"]},default:'""'},{name:"year",global:!1,description:"",tags:[],required:!1,type:"string | number",declarations:[],schema:{kind:"enum",type:"string | number",schema:["string","number"]},default:'""'},{name:"dateOrder",global:!1,description:"",tags:[],required:!1,type:"unknown[]",declarations:[],schema:{kind:"array",type:"unknown[]"},default:'["month", "day", "year"]'},{name:"dateLabels",global:!1,description:"",tags:[],required:!1,type:"Record<string, any>",declarations:[],schema:"Record<string, any>",default:'{ month: "Month", day: "Day", year: "Year" }'},{name:"monthAsSelect",global:!1,description:"",tags:[{name:"deprecated"}],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]},default:"false"},{name:"monthOptions",global:!1,description:"",tags:[],required:!1,type:"unknown[]",declarations:[],schema:{kind:"array",type:"unknown[]"},default:`[
    {
        value: 1,
        text: "01 - January",
    },
    {
        value: 2,
        text: "02 - February",
    },
    {
        value: 3,
        text: "03 - March",
    },
    {
        value: 4,
        text: "04 - April",
    },
    {
        value: 5,
        text: "05 - May",
    },
    {
        value: 6,
        text: "06 - June",
    },
    {
        value: 7,
        text: "07 - July",
    },
    {
        value: 8,
        text: "08 - August",
    },
    {
        value: 9,
        text: "09 - September",
    },
    {
        value: 10,
        text: "10 - October",
    },
    {
        value: 11,
        text: "11 - November",
    },
    {
        value: 12,
        text: "12 - December",
    },
]`},{name:"monthEmptyLabel",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:"undefined"}],events:[],slots:[{name:"label",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}},{name:"hint",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}},{name:"error-message",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}}],exposed:[{name:"error",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"name",type:"string",description:"",declarations:[],schema:"string"},{name:"required",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"id",type:"string",description:"",declarations:[],schema:"string"},{name:"label",type:"string",description:"",declarations:[],schema:"string"},{name:"month",type:"string | number",description:"",declarations:[],schema:{kind:"enum",type:"string | number",schema:["string","number"]}},{name:"day",type:"string | number",description:"",declarations:[],schema:{kind:"enum",type:"string | number",schema:["string","number"]}},{name:"year",type:"string | number",description:"",declarations:[],schema:{kind:"enum",type:"string | number",schema:["string","number"]}},{name:"dateOrder",type:"unknown[]",description:"",declarations:[],schema:{kind:"array",type:"unknown[]"}},{name:"dateLabels",type:"Record<string, any>",description:"",declarations:[],schema:"Record<string, any>"},{name:"monthAsSelect",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"monthOptions",type:"unknown[]",description:"",declarations:[],schema:{kind:"array",type:"unknown[]"}},{name:"monthEmptyLabel",type:"string",description:"",declarations:[],schema:"string"}],sourceFiles:"/home/runner/work/vue-uswds/vue-uswds/src/components/UsaDateInput/UsaDateInput.vue"};const a={label:n.props.label.default,day:n.props.day.default,month:n.props.month.default,year:n.props.year.default,dateOrder:n.props.dateOrder.default(),dateLabels:n.props.dateLabels.default(),monthAsSelect:n.props.monthAsSelect.default,monthEmptyLabel:n.props.monthEmptyLabel.default,monthOptions:n.props.monthOptions.default(),name:n.props.name.default,required:n.props.required.default,error:n.props.error.default,id:n.props.id.default},Ze={component:n,title:"Components/UsaDateInput",argTypes:{label:{control:{type:"text"},table:{category:"props"}},day:{control:{type:"text"}},month:{control:{type:"text"}},year:{control:{type:"text"}},dateOrder:{control:{type:"object"}},dateLabels:{control:{type:"object"}},monthAsSelect:{control:{type:"boolean"}},monthEmptyLabel:{control:{type:"text"}},monthOptions:{control:{type:"object"}},name:{control:{type:"text"}},required:{control:{type:"boolean"}},error:{control:{type:"boolean"}},id:{control:{type:"text"}},"slot:label":{control:{type:"text"},name:"label",table:{category:"slots"}},hint:{control:{type:"text"}},"error-message":{control:{type:"text"}}},args:{label:a.label,day:a.day,month:a.month,year:a.year,dateOrder:a.dateOrder,dateLabels:a.dateLabels,monthAsSelect:a.monthAsSelect,monthEmptyLabel:a.monthEmptyLabel,monthOptions:a.monthOptions,name:a.name,required:a.required,error:a.error,id:a.id,"slot:label":"",hint:"","error-message":""},decorators:[()=>({template:'<div class="usa-form usa-form--large"><story /></div>'})],render:e=>({components:{UsaDateInput:n},props:Object.keys(n.props),setup(){return{args:e}},template:`<UsaDateInput
    :label="args.label"
    :day="args.day"
    :month="args.month"
    :year="args.year"
    :dateOrder="args.dateOrder"
    :dateLabels="args.dateLabels"
    :monthAsSelect="args.monthAsSelect"
    :monthEmptyLabel="args.monthEmptyLabel"
    :monthOptions="args.monthOptions"
    :name="args.name"
    :required="args.required"
    :error="args.error"
    :id="args.id"
  >
    <template v-if="!!args['slot:label']" #label>${e["slot:label"]}</template>
    <template v-if="!!args.hint" #hint>${e.hint}</template>
    <template v-if="!!args['error-message']" #error-message>${e["error-message"]}</template>
  </UsaDateInput>`})},g={args:{...a,label:"Date input label"},name:"Default",parameters:{docs:{source:{code:'<UsaDateInput label="Date input label" />'}}}},f={args:{...a,label:"Date input label",day:"01",month:"12",year:"2021"},name:"Default Date Values",parameters:{docs:{source:{code:'<UsaDateInput label="Date input label" day="01" month="12" year="2021" />'}}}},D={args:{...a,label:"Date input label",hint:"DD-MM-YYYY"},name:"Hint",parameters:{docs:{source:{code:'<UsaDateInput label="Date input label" hint="DD-MM-YYYY" />'}}}},v={args:{...a,label:"Date input label",error:!0,"error-message":"Error message here"},name:"Error w/ Message",parameters:{docs:{source:{code:'<UsaDateInput label="Date input label" :error="true" error-message="Error message here" />'}}}},x={args:{...a,label:"Date input label",required:!0},name:"Required",parameters:{docs:{source:{code:'<UsaDateInput label="Date input label" :required="true" />'}}}},I={args:{...a,label:"Date input label",name:"expiration"},name:"Custom Name Attribute",parameters:{docs:{source:{code:'<UsaDateInput label="Date input label" name="expiration" />'}}}},S={args:{...a,label:"Date input label",dateOrder:["year","month","day"]},name:"Custom Input Order",parameters:{docs:{source:{code:`<UsaDateInput label="Date input label" :date-order="['year', 'month', 'day']" />`}}}},M={args:{...a,label:"Date input label",dateOrder:["year","month"]},name:"Exclude Inputs",parameters:{docs:{source:{code:`<UsaDateInput label="Date input label" :date-order="['year', 'month']" />`}}}},k={args:{...a,label:"Date input label",dateLabels:{month:"MM",day:"DD",year:"YYYY"}},name:"Custom Input Labels",parameters:{docs:{source:{code:`<UsaDateInput label="Date input label" :date-labels="{ month: 'MM', day: 'DD', year: 'YYYY' }" />`}}}},O={args:{...a,label:"Month as select form element",monthAsSelect:!0},name:"Month as Select form element",parameters:{docs:{source:{code:'<UsaDateInput label="Month as select form element" :month-as-select="true" />'}}}},q={args:{...a,label:"Custom month empty label",monthAsSelect:!0,monthEmptyLabel:"Choose a month"},name:"Custom Month Empty Label",parameters:{docs:{source:{code:'<UsaDateInput label="Custom month empty label" :month-as-select="true" month-empty-label="Choose a month" />'}}}},A={args:{...a,label:"Custom month options",monthAsSelect:!0,monthOptions:[{value:"January",text:"Jan - 1"},{value:"February",text:"Feb - 2"},{value:"March",text:"Mar - 3"},{value:"April",text:"Apr - 4"},{value:"May",text:"May - 5"},{value:"June",text:"Jun - 6"},{value:"July",text:"Jul - 7"},{value:"August",text:"Aug - 8"},{value:"September",text:"Sep - 9"},{value:"October",text:"Oct - 10"},{value:"November",text:"Nov - 11"},{value:"December",text:"Dec - 12"}]},name:"Custom Month Options",parameters:{docs:{source:{code:`<UsaDateInput label="Custom month options" :month-as-select="true" :month-options="[
          { value: 'January', text: 'Jan - 1' },
          { value: 'February', text: 'Feb - 2' },
          { value: 'March', text: 'Mar - 3' },
          { value: 'April', text: 'Apr - 4' },
          { value: 'May', text: 'May - 5' },
          { value: 'June', text: 'Jun - 6' },
          { value: 'July', text: 'Jul - 7' },
          { value: 'August', text: 'Aug - 8' },
          { value: 'September', text: 'Sep - 9' },
          { value: 'October', text: 'Oct - 10' },
          { value: 'November', text: 'Nov - 11' },
          { value: 'December', text: 'Dec - 12' },
        ]" />`}}}},U={args:{...a,"slot:label":"<em>Label slot content</em>"},name:"Label Slot",parameters:{docs:{source:{code:"<UsaDateInput><template #label><em>Label slot content</em></template></UsaDateInput>"}}}},L={args:{...a,label:"Date input label",id:"custom-id"},name:"Custom ID",parameters:{docs:{source:{code:'<UsaDateInput label="Date input label" id="custom-id" />'}}}};var F,R,j;g.parameters={...g.parameters,docs:{...(F=g.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    label: 'Date input label'
  },
  name: 'Default',
  parameters: {
    docs: {
      source: {
        code: \`<UsaDateInput label="Date input label" />\`
      }
    }
  }
}`,...(j=(R=g.parameters)==null?void 0:R.docs)==null?void 0:j.source}}};var B,H,T;f.parameters={...f.parameters,docs:{...(B=f.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    label: 'Date input label',
    day: '01',
    month: '12',
    year: '2021'
  },
  name: 'Default Date Values',
  parameters: {
    docs: {
      source: {
        code: \`<UsaDateInput label="Date input label" day="01" month="12" year="2021" />\`
      }
    }
  }
}`,...(T=(H=f.parameters)==null?void 0:H.docs)==null?void 0:T.source}}};var K,z,G;D.parameters={...D.parameters,docs:{...(K=D.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    label: 'Date input label',
    hint: 'DD-MM-YYYY'
  },
  name: 'Hint',
  parameters: {
    docs: {
      source: {
        code: \`<UsaDateInput label="Date input label" hint="DD-MM-YYYY" />\`
      }
    }
  }
}`,...(G=(z=D.parameters)==null?void 0:z.docs)==null?void 0:G.source}}};var Q,W,X;v.parameters={...v.parameters,docs:{...(Q=v.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    label: 'Date input label',
    error: true,
    'error-message': 'Error message here'
  },
  name: 'Error w/ Message',
  parameters: {
    docs: {
      source: {
        code: \`<UsaDateInput label="Date input label" :error="true" error-message="Error message here" />\`
      }
    }
  }
}`,...(X=(W=v.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};var Z,_,ee;x.parameters={...x.parameters,docs:{...(Z=x.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    label: 'Date input label',
    required: true
  },
  name: 'Required',
  parameters: {
    docs: {
      source: {
        code: \`<UsaDateInput label="Date input label" :required="true" />\`
      }
    }
  }
}`,...(ee=(_=x.parameters)==null?void 0:_.docs)==null?void 0:ee.source}}};var ae,te,ne;I.parameters={...I.parameters,docs:{...(ae=I.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    label: 'Date input label',
    name: 'expiration'
  },
  name: 'Custom Name Attribute',
  parameters: {
    docs: {
      source: {
        code: \`<UsaDateInput label="Date input label" name="expiration" />\`
      }
    }
  }
}`,...(ne=(te=I.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var re,se,oe;S.parameters={...S.parameters,docs:{...(re=S.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    label: 'Date input label',
    dateOrder: ['year', 'month', 'day']
  },
  name: 'Custom Input Order',
  parameters: {
    docs: {
      source: {
        code: \`<UsaDateInput label="Date input label" :date-order="['year', 'month', 'day']" />\`
      }
    }
  }
}`,...(oe=(se=S.parameters)==null?void 0:se.docs)==null?void 0:oe.source}}};var le,ue,me;M.parameters={...M.parameters,docs:{...(le=M.parameters)==null?void 0:le.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    label: 'Date input label',
    dateOrder: ['year', 'month']
  },
  name: 'Exclude Inputs',
  parameters: {
    docs: {
      source: {
        code: \`<UsaDateInput label="Date input label" :date-order="['year', 'month']" />\`
      }
    }
  }
}`,...(me=(ue=M.parameters)==null?void 0:ue.docs)==null?void 0:me.source}}};var de,pe,ce;k.parameters={...k.parameters,docs:{...(de=k.parameters)==null?void 0:de.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    label: 'Date input label',
    dateLabels: {
      month: 'MM',
      day: 'DD',
      year: 'YYYY'
    }
  },
  name: 'Custom Input Labels',
  parameters: {
    docs: {
      source: {
        code: \`<UsaDateInput label="Date input label" :date-labels="{ month: 'MM', day: 'DD', year: 'YYYY' }" />\`
      }
    }
  }
}`,...(ce=(pe=k.parameters)==null?void 0:pe.docs)==null?void 0:ce.source}}};var ie,be,ye;O.parameters={...O.parameters,docs:{...(ie=O.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    label: 'Month as select form element',
    monthAsSelect: true
  },
  name: 'Month as Select form element',
  parameters: {
    docs: {
      source: {
        code: \`<UsaDateInput label="Month as select form element" :month-as-select="true" />\`
      }
    }
  }
}`,...(ye=(be=O.parameters)==null?void 0:be.docs)==null?void 0:ye.source}}};var he,ge,fe;q.parameters={...q.parameters,docs:{...(he=q.parameters)==null?void 0:he.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    label: 'Custom month empty label',
    monthAsSelect: true,
    monthEmptyLabel: 'Choose a month'
  },
  name: 'Custom Month Empty Label',
  parameters: {
    docs: {
      source: {
        code: \`<UsaDateInput label="Custom month empty label" :month-as-select="true" month-empty-label="Choose a month" />\`
      }
    }
  }
}`,...(fe=(ge=q.parameters)==null?void 0:ge.docs)==null?void 0:fe.source}}};var De,ve,xe;A.parameters={...A.parameters,docs:{...(De=A.parameters)==null?void 0:De.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    label: 'Custom month options',
    monthAsSelect: true,
    monthOptions: [{
      value: 'January',
      text: 'Jan - 1'
    }, {
      value: 'February',
      text: 'Feb - 2'
    }, {
      value: 'March',
      text: 'Mar - 3'
    }, {
      value: 'April',
      text: 'Apr - 4'
    }, {
      value: 'May',
      text: 'May - 5'
    }, {
      value: 'June',
      text: 'Jun - 6'
    }, {
      value: 'July',
      text: 'Jul - 7'
    }, {
      value: 'August',
      text: 'Aug - 8'
    }, {
      value: 'September',
      text: 'Sep - 9'
    }, {
      value: 'October',
      text: 'Oct - 10'
    }, {
      value: 'November',
      text: 'Nov - 11'
    }, {
      value: 'December',
      text: 'Dec - 12'
    }]
  },
  name: 'Custom Month Options',
  parameters: {
    docs: {
      source: {
        code: \`<UsaDateInput label="Custom month options" :month-as-select="true" :month-options="[
          { value: 'January', text: 'Jan - 1' },
          { value: 'February', text: 'Feb - 2' },
          { value: 'March', text: 'Mar - 3' },
          { value: 'April', text: 'Apr - 4' },
          { value: 'May', text: 'May - 5' },
          { value: 'June', text: 'Jun - 6' },
          { value: 'July', text: 'Jul - 7' },
          { value: 'August', text: 'Aug - 8' },
          { value: 'September', text: 'Sep - 9' },
          { value: 'October', text: 'Oct - 10' },
          { value: 'November', text: 'Nov - 11' },
          { value: 'December', text: 'Dec - 12' },
        ]" />\`
      }
    }
  }
}`,...(xe=(ve=A.parameters)==null?void 0:ve.docs)==null?void 0:xe.source}}};var Ie,Se,Me;U.parameters={...U.parameters,docs:{...(Ie=U.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    'slot:label': \`<em>Label slot content</em>\`
  },
  name: 'Label Slot',
  parameters: {
    docs: {
      source: {
        code: \`<UsaDateInput><template #label><em>Label slot content</em></template></UsaDateInput>\`
      }
    }
  }
}`,...(Me=(Se=U.parameters)==null?void 0:Se.docs)==null?void 0:Me.source}}};var ke,Oe,qe;L.parameters={...L.parameters,docs:{...(ke=L.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    label: 'Date input label',
    id: 'custom-id'
  },
  name: 'Custom ID',
  parameters: {
    docs: {
      source: {
        code: \`<UsaDateInput label="Date input label" id="custom-id" />\`
      }
    }
  }
}`,...(qe=(Oe=L.parameters)==null?void 0:Oe.docs)==null?void 0:qe.source}}};const _e=["DefaultDateInput","DefaultValueDateInput","HintDateInput","ErrorMessageDateInput","RequiredDateInput","NameAttrDateInput","CustomOrderDateInput","ExcludeInputsDateInput","CustomInputLabelsDateInput","MonthAsSelectDateInput","CustomMonthSelectEmptyLabelDateInput","CustomMonthOptionsDateInput","LabelSlotDateInput","CustomIdDateInput"];export{L as CustomIdDateInput,k as CustomInputLabelsDateInput,A as CustomMonthOptionsDateInput,q as CustomMonthSelectEmptyLabelDateInput,S as CustomOrderDateInput,g as DefaultDateInput,f as DefaultValueDateInput,v as ErrorMessageDateInput,M as ExcludeInputsDateInput,D as HintDateInput,U as LabelSlotDateInput,O as MonthAsSelectDateInput,I as NameAttrDateInput,x as RequiredDateInput,_e as __namedExportsOrder,Ze as default};
