import{c as Y,I as q,r as l,g as D,n as w,b as R,o as $,d as N,v as j}from"./vue.esm-bundler-DlC1_45x.js";import{_ as O}from"./BaseHeading-BkBCpxXB.js";import{_ as V}from"./UsaTextInput-By66VApY.js";import{_ as E}from"./UsaButton-D4XVvDxD.js";import"./index-DjGpgcRS.js";import"./index-BzV88aIg.js";import"./unique-id-C_cIYxKg.js";import"./common-cfad2wKl.js";import"./constants-BA52rpFi.js";import"./UsaFormGroup-COQiJYtU.js";import"./UsaLabel-DpLC57Qt.js";const K={class:"usa-sign-up"},s={__name:"UsaSignUp",props:{heading:{type:String,default:"Sign up"},headingTag:{type:String,default:"h2"},customClasses:{type:Object,default:()=>({heading:[]})}},setup(a){return(m,z)=>{var d;return $(),Y("div",K,[q(R(O),{tag:a.headingTag,class:w(["usa-sign-up__heading",(d=a.customClasses)==null?void 0:d.heading])},{default:D(()=>[l(m.$slots,"heading",{},()=>[N(j(a.heading),1)])]),_:3},8,["tag","class"]),l(m.$slots,"default")])}}};s.__docgenInfo={exportName:"default",displayName:"UsaSignUp",type:1,props:[{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"headingTag",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'"h2"'},{name:"customClasses",global:!1,description:"",tags:[],required:!1,type:"Record<string, any>",declarations:[],schema:"Record<string, any>",default:`() => {
    return {
        heading: [],
    };
}`},{name:"heading",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'"Sign up"'}],events:[],slots:[{name:"heading",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}},{name:"default",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}}],exposed:[{name:"headingTag",type:"string",description:"",declarations:[],schema:"string"},{name:"customClasses",type:"Record<string, any>",description:"",declarations:[],schema:"Record<string, any>"},{name:"heading",type:"string",description:"",declarations:[],schema:"string"}],sourceFiles:"/home/runner/work/vue-uswds/vue-uswds/src/components/UsaSignUp/UsaSignUp.vue"};const e={heading:s.props.heading.default,headingTag:s.props.headingTag.default,customClasses:s.props.customClasses.default()},ae={component:s,title:"Components/UsaSignUp",argTypes:{heading:{control:{type:"text"},table:{category:"props"}},headingTag:{options:["h1","h2","h3","h4","h5","h6"],control:{type:"select"}},customClasses:{control:{type:"object"}},default:{control:{type:"text"}},"slot:heading":{control:{type:"text"},name:"heading",table:{category:"slots"}}},args:{heading:e.heading,headingTag:e.headingTag,customClasses:e.customClasses,default:"","slot:heading":""},render:a=>({components:{UsaSignUp:s,UsaTextInput:V,UsaButton:E},props:Object.keys(s.props),setup(){return{args:a}},template:`<UsaSignUp
    :heading="args.heading"
    :heading-tag="args.headingTag"
    :custom-classes="args.customClasses"
  >
    <template #heading v-if="!!args['slot:heading']">${a["slot:heading"]}</template>
    <template #default v-if="!!args.default">${a.default}</template>
  </UsaSignUp>`})},t=`<form class="usa-form" @submit.prevent>
<UsaTextInput label="Your email address" type="email"></UsaTextInput>
<UsaButton type="submit">Sign up</UsaButton>
</form>`,n={args:{...e},name:"Default",parameters:{docs:{source:{code:"<UsaSignUp></UsaSignUp>"}}}},o={args:{...e,default:t},name:"Default Slot",parameters:{docs:{source:{code:`<UsaSignUp><form class="usa-form" @submit.prevent>
<UsaTextInput label="Your email address" type="email"></UsaTextInput>
<UsaButton type="submit">Sign up</UsaButton>
</form></UsaSignUp>`}}}},r={args:{...e,heading:"Custom Heading",default:t},name:"Custom Heading",parameters:{docs:{source:{code:`<UsaSignUp heading="Custom Heading"><form class="usa-form" @submit.prevent>
<UsaTextInput label="Your email address" type="email"></UsaTextInput>
<UsaButton type="submit">Sign up</UsaButton>
</form></UsaSignUp>`}}}},i={args:{...e,heading:"Custom Heading Tag",headingTag:"h4",default:t},name:"Custom Heading Tag",parameters:{docs:{source:{code:`<UsaSignUp heading="Custom Heading Tag" heading-tag="h4"><form class="usa-form" @submit.prevent>
<UsaTextInput label="Your email address" type="email"></UsaTextInput>
<UsaButton type="submit">Sign up</UsaButton>
</form></UsaSignUp>`}}}},u={args:{...e,"slot:heading":"<em>Custom Heading Slot</em>",default:t},name:"Heading Slot",parameters:{docs:{source:{code:`<UsaSignUp><template #heading><em>Custom Heading Slot</em></template><template #default><form class="usa-form" @submit.prevent>
<UsaTextInput label="Your email address" type="email"></UsaTextInput>
<UsaButton type="submit">Sign up</UsaButton>
</form></template></UsaSignUp>`}}}},p={args:{...e,default:t,customClasses:{heading:["test-heading-class"]}},name:"Custom Classes",parameters:{docs:{source:{code:`<UsaSignUp :custom-classes="{heading: ['test-heading-class']}"><form class="usa-form" @submit.prevent>
<UsaTextInput label="Your email address" type="email"></UsaTextInput>
<UsaButton type="submit">Sign up</UsaButton>
</form></UsaSignUp>`}}}};var g,c,U;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    ...defaultProps
  },
  name: 'Default',
  parameters: {
    docs: {
      source: {
        code: \`<UsaSignUp></UsaSignUp>\`
      }
    }
  }
}`,...(U=(c=n.parameters)==null?void 0:c.docs)==null?void 0:U.source}}};var f,h,y;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    default: defaultContent
  },
  name: 'Default Slot',
  parameters: {
    docs: {
      source: {
        code: \`<UsaSignUp><form class="usa-form" @submit.prevent>
<UsaTextInput label="Your email address" type="email"></UsaTextInput>
<UsaButton type="submit">Sign up</UsaButton>
</form></UsaSignUp>\`
      }
    }
  }
}`,...(y=(h=o.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var S,b,C;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    heading: 'Custom Heading',
    default: defaultContent
  },
  name: 'Custom Heading',
  parameters: {
    docs: {
      source: {
        code: \`<UsaSignUp heading="Custom Heading"><form class="usa-form" @submit.prevent>
<UsaTextInput label="Your email address" type="email"></UsaTextInput>
<UsaButton type="submit">Sign up</UsaButton>
</form></UsaSignUp>\`
      }
    }
  }
}`,...(C=(b=r.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};var T,x,B;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    heading: 'Custom Heading Tag',
    headingTag: 'h4',
    default: defaultContent
  },
  name: 'Custom Heading Tag',
  parameters: {
    docs: {
      source: {
        code: \`<UsaSignUp heading="Custom Heading Tag" heading-tag="h4"><form class="usa-form" @submit.prevent>
<UsaTextInput label="Your email address" type="email"></UsaTextInput>
<UsaButton type="submit">Sign up</UsaButton>
</form></UsaSignUp>\`
      }
    }
  }
}`,...(B=(x=i.parameters)==null?void 0:x.docs)==null?void 0:B.source}}};var I,H,v;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    'slot:heading': '<em>Custom Heading Slot</em>',
    default: defaultContent
  },
  name: 'Heading Slot',
  parameters: {
    docs: {
      source: {
        code: \`<UsaSignUp><template #heading><em>Custom Heading Slot</em></template><template #default><form class="usa-form" @submit.prevent>
<UsaTextInput label="Your email address" type="email"></UsaTextInput>
<UsaButton type="submit">Sign up</UsaButton>
</form></template></UsaSignUp>\`
      }
    }
  }
}`,...(v=(H=u.parameters)==null?void 0:H.docs)==null?void 0:v.source}}};var _,k,P;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    default: defaultContent,
    customClasses: {
      heading: ['test-heading-class']
    }
  },
  name: 'Custom Classes',
  parameters: {
    docs: {
      source: {
        code: \`<UsaSignUp :custom-classes="{heading: ['test-heading-class']}"><form class="usa-form" @submit.prevent>
<UsaTextInput label="Your email address" type="email"></UsaTextInput>
<UsaButton type="submit">Sign up</UsaButton>
</form></UsaSignUp>\`
      }
    }
  }
}`,...(P=(k=p.parameters)==null?void 0:k.docs)==null?void 0:P.source}}};const se=["DefaultSignUp","DefaultSlotSignUp","CustomHeadingSignUp","CustomHeadingTagSignUp","HeadingSlotSignUp","CustomClassesSignUp"];export{p as CustomClassesSignUp,r as CustomHeadingSignUp,i as CustomHeadingTagSignUp,n as DefaultSignUp,o as DefaultSlotSignUp,u as HeadingSlotSignUp,se as __namedExportsOrder,ae as default};
