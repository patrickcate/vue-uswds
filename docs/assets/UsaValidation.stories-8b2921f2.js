import{s as c,w as C,c as _,I as A,g as B,m as E,b as f,a as M,v as K,G as F,o as V,f as z,n as G,t as Z}from"./vue.esm-bundler-d9807bdf.js";import{o as Q}from"./common-c0b90c12.js";import{n as W}from"./unique-id-dcbd9804.js";import{U as X}from"./UsaAlert-a21ade00.js";import{U as Y}from"./UsaChecklist-47f6fcd4.js";import{r as aa}from"./index-7991d288.js";import"./constants-fce87d39.js";import"./BaseHeading-19544782.js";import"./UsaChecklistItem-0ae8799d.js";const ea=["id"],R={__name:"UsaValidation",props:{validations:{type:Array,default:()=>[]},validationValue:{type:[String,Number],default:""},heading:{type:String,default:""},headingTag:{type:String,default:"h2"},validLabel:{type:String,default:"%s status complete"},invalidLabel:{type:String,default:"%s status incomplete"},id:{type:String,default:""},customClasses:{type:Object,default:()=>({body:[],heading:[],checklist:[]})}},emits:["update:validationId","update:statusMessageId"],setup(n,{emit:D}){const b=D,d=n,l=c(()=>d.id||W("usa-validation")),v=c(()=>`${l.value}-status-message`),y=c(()=>d.validations.reduce((o,a)=>{const e={id:a!=null&&a.id&&`${a.id}`?a.id:a.text,text:a.text};if(Q(a,"checked"))e.checked=a.checked;else if(typeof(a==null?void 0:a.validator)=="string"){const r=new RegExp(a.validator,"g");e.checked=r.test(`${d.validationValue}`)}else typeof(a==null?void 0:a.validator)=="object"&&a.validator instanceof RegExp?e.checked=a.validator.test(`${d.validationValue}`):typeof(a==null?void 0:a.validator)=="function"?e.checked=a.validator(d.validationValue)===!0:e.checked=!1;return e.ariaLabel=e.checked===!0?d.validLabel.replaceAll("%s",e.text):d.invalidLabel.replaceAll("%s",e.text),o.push(e),o},[])),j=aa(c(()=>y.value.map(o=>`${o.ariaLabel}.`).join(" ")),1e3);return C(l,()=>b("update:validationId",l),{immediate:!0}),C(v,()=>b("update:statusMessageId",v),{immediate:!0}),(o,a)=>(V(),_(F,null,[A(f(X),E(o.$attrs,{variant:"validation",heading:n.heading,"heading-tag":n.headingTag,"custom-classes":n.customClasses}),{message:B(()=>{var e,r;return[(e=y.value)!=null&&e.length?(V(),z(f(Y),{key:0,id:l.value,items:y.value,class:G((r=n.customClasses)==null?void 0:r.checklist)},null,8,["id","items","class"])):Z("",!0)]}),_:1},16,["heading","heading-tag","custom-classes"]),M("span",{id:v.value,"data-validation-status":"",class:"usa-sr-only","aria-live":"polite","aria-atomic":"true"},K(f(j)),9,ea)],64))}},t=R;R.__docgenInfo={exportName:"default",displayName:"UsaValidation",type:1,props:[{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"headingTag",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'"h2"'},{name:"id",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'""'},{name:"customClasses",global:!1,description:"",tags:[],required:!1,type:"Record<string, any>",declarations:[],schema:"Record<string, any>",default:`{
    body: [],
    heading: [],
    checklist: [],
}`},{name:"heading",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'""'},{name:"validations",global:!1,description:"",tags:[],required:!1,type:"unknown[]",declarations:[],schema:{kind:"array",type:"unknown[]"},default:"[]"},{name:"validationValue",global:!1,description:"",tags:[],required:!1,type:"string | number",declarations:[],schema:{kind:"enum",type:"string | number",schema:["string","number"]},default:'""'},{name:"validLabel",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'"%s status complete"'},{name:"invalidLabel",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'"%s status incomplete"'}],events:[],slots:[],exposed:[{name:"headingTag",type:"string",description:"",declarations:[],schema:"string"},{name:"id",type:"string",description:"",declarations:[],schema:"string"},{name:"customClasses",type:"Record<string, any>",description:"",declarations:[],schema:"Record<string, any>"},{name:"heading",type:"string",description:"",declarations:[],schema:"string"},{name:"validations",type:"unknown[]",description:"",declarations:[],schema:{kind:"array",type:"unknown[]"}},{name:"validationValue",type:"string | number",description:"",declarations:[],schema:{kind:"enum",type:"string | number",schema:["string","number"]}},{name:"validLabel",type:"string",description:"",declarations:[],schema:"string"},{name:"invalidLabel",type:"string",description:"",declarations:[],schema:"string"}],sourceFiles:"/home/runner/work/vue-uswds/vue-uswds/src/components/UsaValidation/UsaValidation.vue"};const i=[{id:"item1",text:"Use at least one uppercase character",validator:/[A-Z]/},{id:"item2",text:"Use at least one number",validator:"\\d"},{text:"Use at least one symbol",validator:n=>n.length>6}],s={validations:t.props.validations.default(),validationValue:t.props.validationValue.default,heading:t.props.heading.default,headingTag:t.props.headingTag.default,validLabel:t.props.validLabel.default,invalidLabel:t.props.invalidLabel.default,id:t.props.id.default,customClasses:t.props.customClasses.default()},ga={component:t,title:"Components/UsaValidation",argTypes:{validations:{control:{type:"object"}},validationValue:{control:{type:"text"}},heading:{control:{type:"text"}},headingTag:{options:["h1","h2","h3","h4","h5","h6"],control:{type:"select"}},validLabel:{control:{type:"text"}},invalidLabel:{control:{type:"text"}},id:{control:{type:"text"}},customClasses:{control:{type:"object"}}},args:{validations:s.validations,validationValue:s.validationValue,heading:s.heading,headingTag:s.headingTag,validLabel:s.validLabel,invalidLabel:s.invalidLabel,id:s.id,customClasses:s.customClasses},render:n=>({components:{UsaValidation:t},props:Object.keys(t.props),setup(){return{args:n}},template:`<UsaValidation
      :validations="args.validations"
      :validationValue="args.validationValue"
      :heading="args.heading"
      :heading-tag="args.headingTag"
      :validLabel="args.validLabel"
      :invalidLabel="args.invalidLabel"
      :id="args.id"
      :custom-classes="args.customClasses"
    />`})},g={args:{...s,heading:"Code requirements",validations:i},name:"Default",parameters:{docs:{source:{code:`<UsaValidation heading="Code requirements" :validations="${JSON.stringify(i)}"></UsaValidation>`}}}},u={args:{...s,heading:"Custom Heading Tag",headingTag:"h4",validations:i},name:"Custom Heading Tag",parameters:{docs:{source:{code:`<UsaValidation heading="Custom Heading Tag" heading-tag="h4" :validations="${JSON.stringify(i)}"></UsaValidation>`}}}},m={args:{...s,heading:"Custom Heading Tag",id:"test-id",validations:i},name:"Custom ID",parameters:{docs:{source:{code:`<UsaValidation heading="Custom Heading Tag" id="test-id" :validations="${JSON.stringify(i)}"></UsaValidation>`}}}},p={args:{...s,heading:"Custom Heading Tag",validLabel:"is valid",invalidLabel:"is invalid",validations:i},name:"Custom Validity Labels",parameters:{docs:{source:{code:`<UsaValidation heading="Custom Heading Tag" valid-label="is valid" invalid-label="is invalid" :validations="${JSON.stringify(i)}"></UsaValidation>`}}}},h={args:{...s,heading:"Custom CSS classes",validations:i,customClasses:{body:["test-body-class"],heading:["test-heading-class"],checklist:["test-checklist-class"]}},name:"Custom Classes",parameters:{docs:{source:{code:`<UsaValidation heading="Custom CSS classes" :validations="${JSON.stringify(i)}" :custom-classes="{ 
	body: ['test-body-class'], 
	heading: ['test-heading-class'], 
	checklist: ['test-checklist-class'] }"></UsaValidation>`}}}};var k,U,L;g.parameters={...g.parameters,docs:{...(k=g.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    heading: 'Code requirements',
    validations: testItems
  },
  name: 'Default',
  parameters: {
    docs: {
      source: {
        code: \`<UsaValidation heading="Code requirements" :validations="\${JSON.stringify(testItems)}"></UsaValidation>\`
      }
    }
  }
}`,...(L=(U=g.parameters)==null?void 0:U.docs)==null?void 0:L.source}}};var S,T,I;u.parameters={...u.parameters,docs:{...(S=u.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    heading: 'Custom Heading Tag',
    headingTag: 'h4',
    validations: testItems
  },
  name: 'Custom Heading Tag',
  parameters: {
    docs: {
      source: {
        code: \`<UsaValidation heading="Custom Heading Tag" heading-tag="h4" :validations="\${JSON.stringify(testItems)}"></UsaValidation>\`
      }
    }
  }
}`,...(I=(T=u.parameters)==null?void 0:T.docs)==null?void 0:I.source}}};var x,q,N;m.parameters={...m.parameters,docs:{...(x=m.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    heading: 'Custom Heading Tag',
    id: 'test-id',
    validations: testItems
  },
  name: 'Custom ID',
  parameters: {
    docs: {
      source: {
        code: \`<UsaValidation heading="Custom Heading Tag" id="test-id" :validations="\${JSON.stringify(testItems)}"></UsaValidation>\`
      }
    }
  }
}`,...(N=(q=m.parameters)==null?void 0:q.docs)==null?void 0:N.source}}};var H,$,w;p.parameters={...p.parameters,docs:{...(H=p.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    heading: 'Custom Heading Tag',
    validLabel: 'is valid',
    invalidLabel: 'is invalid',
    validations: testItems
  },
  name: 'Custom Validity Labels',
  parameters: {
    docs: {
      source: {
        code: \`<UsaValidation heading="Custom Heading Tag" valid-label="is valid" invalid-label="is invalid" :validations="\${JSON.stringify(testItems)}"></UsaValidation>\`
      }
    }
  }
}`,...(w=($=p.parameters)==null?void 0:$.docs)==null?void 0:w.source}}};var O,P,J;h.parameters={...h.parameters,docs:{...(O=h.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    heading: 'Custom CSS classes',
    validations: testItems,
    customClasses: {
      body: ['test-body-class'],
      heading: ['test-heading-class'],
      checklist: ['test-checklist-class']
    }
  },
  name: 'Custom Classes',
  parameters: {
    docs: {
      source: {
        code: \`<UsaValidation heading="Custom CSS classes" :validations="\${JSON.stringify(testItems)}" :custom-classes="{ \\n\\tbody: ['test-body-class'], \\n\\theading: ['test-heading-class'], \\n\\tchecklist: ['test-checklist-class'] }"></UsaValidation>\`
      }
    }
  }
}`,...(J=(P=h.parameters)==null?void 0:P.docs)==null?void 0:J.source}}};const ua=["DefaultValidation","HeadingTagValidation","CustomIdValidation","CustomValidityLabelsValidation","CustomClassesValidation"];export{h as CustomClassesValidation,m as CustomIdValidation,p as CustomValidityLabelsValidation,g as DefaultValidation,u as HeadingTagValidation,ua as __namedExportsOrder,ga as default};
