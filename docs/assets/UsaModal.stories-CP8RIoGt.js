import{u as Ce,l as Y,s as p,w as we,y as Me,z as ke,f as b,t as c,b as T,n as l,g as N,Z as Ae,o as i,a as d,m as Ue,r as m,c as $,d as Be,v as Se,G as Te}from"./vue.esm-bundler-DlC1_45x.js";import{o as $e,a as Le}from"./index-DjGpgcRS.js";import{U as ze}from"./component-DDq1zfMl.js";import{n as Ye}from"./unique-id-C_cIYxKg.js";import{_ as qe}from"./BaseHeading-BkBCpxXB.js";import{_ as Pe}from"./UsaModalCloseButton-BCGZIAzc.js";import"./index-BzV88aIg.js";import"./focus-trap.esm-DYjLEhSG.js";import"./common-cfad2wKl.js";import"./constants-BA52rpFi.js";const je=["id","aria-labelledby","aria-describedby"],L="usa-js-modal--active",z="usa-js-no-click",g="js-focus-trap-wrapper",s={__name:"UsaModal",props:{size:{type:String,default:"",validator(e){const u=["","lg"].includes(e);return u||console.warn(`'${e}' is not a valid modal size`),u}},id:{type:String,default:""},visible:{type:Boolean,default:!1},forceAction:{type:Boolean,default:!1},closeButtonLabel:{type:String,default:"Close this window"},heading:{type:String,default:""},headingTag:{type:String,default:"h2"},customClasses:{type:Object,default:()=>({focusTrap:[],modal:[],overlay:[],content:[],main:[],heading:[],description:[],footer:[]})}},emits:["update:visible"],setup(e,{emit:u}){const U=Ce();U!=null&&U.closeButton&&console.warn("The 'closeButton' slot is deprecated, use 'close-button' instead.");const ye=u,o=e,q=Y(null),B=Y(!1),n=p({get:()=>B.value&&o.visible,set:t=>ye("update:visible",t)}),he=p(()=>[{"is-visible":n.value}]),ve=p(()=>{var t;return[{"usa-modal--lg":o.size==="lg"},(t=o.customClasses)==null?void 0:t.modal]}),S=p(()=>o.id||Ye("usa-modal")),P=`${S.value}-heading`,j=`${S.value}-description`;return we(()=>n,t=>{B.value&&(t.value?(document.body.classList.add(L),document.querySelectorAll(`body > :not(.${g})`).forEach(r=>r.setAttribute("aria-hidden",!0)),o.forceAction&&document.body.classList.add(z)):(document.body.classList.remove(L),document.querySelectorAll(`body > :not(${g})`).forEach(r=>r.removeAttribute("aria-hidden",!0)),o.forceAction&&document.body.classList.remove(z)))},{immediate:!0,deep:!0}),Me(()=>{B.value=!0}),ke(()=>{document.body.classList.remove(L),document.querySelectorAll(`body > :not(.${g})`).forEach(t=>t.removeAttribute("aria-hidden",!0)),o.forceAction&&document.body.classList.remove(z)}),$e("Escape",()=>{n.value&&!o.forceAction&&(n.value=!1)}),Le(q,()=>{n.value&&!o.forceAction&&(n.value=!1)}),(t,r)=>{var H;return i(),b(Ae,{to:"body",disabled:!n.value},[n.value?(i(),b(T(ze),{key:0,class:l([`${g}`,(H=e.customClasses)==null?void 0:H.focusTrap])},{default:N(()=>{var I,x,R,D,E,F;return[d("div",Ue(t.$attrs,{id:`${S.value}-modal`,class:["usa-modal-wrapper",he.value],role:"dialog","aria-labelledby":t.$slots.heading||e.heading?P:null,"aria-describedby":t.$slots.default?j:null}),[d("div",{class:l(["usa-modal-overlay",(I=e.customClasses)==null?void 0:I.overlay])},[d("div",{ref_key:"modal",ref:q,class:l(["usa-modal",ve.value]),tabindex:"-1"},[d("div",{class:l(["usa-modal__content",(x=e.customClasses)==null?void 0:x.content])},[d("div",{class:l(["usa-modal__main",(R=e.customClasses)==null?void 0:R.main])},[t.$slots.heading||e.heading?(i(),b(T(qe),{key:0,id:P,tag:e.headingTag,class:l(["usa-modal__heading",(D=e.customClasses)==null?void 0:D.heading])},{default:N(()=>[m(t.$slots,"heading",{},()=>[Be(Se(e.heading),1)])]),_:3},8,["tag","class"])):c("",!0),t.$slots.default?(i(),$("div",{key:1,id:j,class:l((E=e.customClasses)==null?void 0:E.description)},[m(t.$slots,"default")],2)):c("",!0),t.$slots.footer?(i(),$("div",{key:2,class:l(["usa-modal__footer",(F=e.customClasses)==null?void 0:F.footer])},[m(t.$slots,"footer")],2)):c("",!0)],2),t.$slots["close-button"]?m(t.$slots,"close-button",{key:0}):t.$slots.closeButton?m(t.$slots,"closeButton",{key:1}):(i(),$(Te,{key:2},[e.forceAction?c("",!0):(i(),b(T(Pe),{key:0,"aria-label":e.closeButtonLabel,onClick:r[0]||(r[0]=He=>n.value=!1)},null,8,["aria-label"]))],64))],2)],2)],2)],16,je)]}),_:3},8,["class"])):c("",!0)],8,["disabled"])}}};s.__docgenInfo={exportName:"default",displayName:"UsaModal",type:1,props:[{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"size",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'""'},{name:"headingTag",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'"h2"'},{name:"id",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'""'},{name:"customClasses",global:!1,description:"",tags:[],required:!1,type:"Record<string, any>",declarations:[],schema:"Record<string, any>",default:`() => {
    return {
        focusTrap: [],
        modal: [],
        overlay: [],
        content: [],
        main: [],
        heading: [],
        description: [],
        footer: [],
    };
}`},{name:"heading",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'""'},{name:"visible",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]},default:"false"},{name:"forceAction",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]},default:"false"},{name:"closeButtonLabel",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'"Close this window"'}],events:[{name:"update:visible",description:"",tags:[],type:"any[]",signature:'(event: "update:visible", ...args: any[]): void',declarations:[],schema:["any"]}],slots:[{name:"heading",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}},{name:"default",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}},{name:"footer",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}},{name:"close-button",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}},{name:"closeButton",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}}],exposed:[{name:"size",type:"string",description:"",declarations:[],schema:"string"},{name:"headingTag",type:"string",description:"",declarations:[],schema:"string"},{name:"id",type:"string",description:"",declarations:[],schema:"string"},{name:"customClasses",type:"Record<string, any>",description:"",declarations:[],schema:"Record<string, any>"},{name:"heading",type:"string",description:"",declarations:[],schema:"string"},{name:"visible",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"forceAction",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"closeButtonLabel",type:"string",description:"",declarations:[],schema:"string"}],sourceFiles:"/home/runner/work/vue-uswds/vue-uswds/src/components/UsaModal/UsaModal.vue"};const a={size:s.props.size.default,id:s.props.id.default,visible:s.props.visible.default,forceAction:s.props.forceAction.default,heading:s.props.heading.default,headingTag:s.props.headingTag.default,closeButtonLabel:s.props.closeButtonLabel.default,customClasses:s.props.customClasses.default()},Ge={component:s,title:"Components/UsaModal",argTypes:{size:{options:["","lg"],control:{type:"select"}},id:{control:{type:"text"}},visible:{control:{type:"boolean"}},forceAction:{control:{type:"boolean"}},closeButtonLabel:{control:{type:"text"}},heading:{control:{type:"text"},table:{category:"props"}},headingTag:{options:["h1","h2","h3","h4","h5","h6"],control:{type:"select"}},customClasses:{control:{type:"object"}},default:{control:{type:"text"}},"slot:heading":{control:{type:"text"},name:"heading",table:{category:"slots"}},footer:{control:{type:"text"}},"close-button":{control:{type:"text"}},closeButton:{control:{type:"text"},name:"closeButton (deprecated: use `close-button`)"}},args:{size:a.size,id:a.id,visible:a.visible,forceAction:a.forceAction,closeButtonLabel:a.closeButtonLabel,heading:a.heading,headingTag:a.headingTag,customClasses:a.customClasses,default:"<p>You have unsaved changes that will be lost.</p>","slot:heading":"",footer:`<ul class="usa-button-group">
      <li class="usa-button-group__item">
        <button type="button" class="usa-button" @click="visible = false">
          Continue without saving
        </button>
      </li>
      <li class="usa-button-group__item">
        <button
          type="button"
          class="usa-button usa-button--unstyled padding-105 text-center" @click="visible = false"
        >
          Go back
        </button>
      </li>
    </ul>`,"close-button":""},render:e=>({components:{UsaModal:s},props:Object.keys(s.props),setup(){const u=Y(e.visible);return{args:e,visible:u}},template:`<UsaModal
    :size="args.size"
    :id="args.id"
    v-model:visible="args.visible"
    :force-action="args.forceAction"
    :close-button-label="args.closeButtonLabel"
    :heading="args.heading"
    :heading-tag="args.headingTag"
    :custom-classes="args.customClasses"
  >
    <template v-if="!!args['slot:heading']" #heading>${e["slot:heading"]}</template>
    <template v-if="!!args.default" #default>${e.default}</template>
    <template v-if="!!args.footer" #footer>${e.footer}</template>
    <template v-if="!!args['close-button']" #close-button>${e["close-button"]}</template>
    <template v-else-if="!!args.closeButton" #close-button>${e.closeButton}</template>
  </UsaModal>`})},f={args:{...a,heading:"Are you sure you want to continue?",visible:!0},name:"Default",parameters:{docs:{source:{code:'<UsaModal heading="Are you sure you want to continue?" :visible="true"><template #default><p>You have unsaved changes that will be lost.</p></template><template #footer><button type="button" class="usa-button" @click="visible = false">Continue without saving</button></template></UsaModal>'}}}},y={args:{...a,heading:"Are you sure you want to continue?",visible:!0,size:"lg"},name:"Large Size",parameters:{docs:{source:{code:'<UsaModal heading="Are you sure you want to continue?" :visible="true" size="lg"><template #default><p>You have unsaved changes that will be lost.</p></template><template #footer><button type="button" class="usa-button" @click="visible = false">Continue without saving</button></template></UsaModal>'}}}},h={args:{...a,heading:"Are you sure you want to continue?",visible:!0,forceAction:!0},name:"Force Action",parameters:{docs:{source:{code:'<UsaModal heading="Are you sure you want to continue?" :visible="true" :force-action="true"><template #default><p>You have unsaved changes that will be lost.</p></template><template #footer><button type="button" class="usa-button" @click="visible = false">Continue without saving</button></template></UsaModal>'}}}},v={args:{...a,heading:"Are you sure you want to continue?",id:"custom-id",visible:!0},name:"Custom ID",parameters:{docs:{source:{code:'<UsaModal heading="Are you sure you want to continue?" id="custom-id" :visible="true"><template #default><p>You have unsaved changes that will be lost.</p></template><template #footer><button type="button" class="usa-button" @click="visible = false">Continue without saving</button></template></UsaModal>'}}}},C={args:{...a,heading:"Are you sure you want to continue?",closeButtonLabel:"Custom close modal button label",visible:!0},name:"Custom Close Button AriaLabel",parameters:{docs:{source:{code:'<UsaModal heading="Are you sure you want to continue?" :close-button-label="Custom close modal button label" :visible="true"><template #default><p>You have unsaved changes that will be lost.</p></template><template #footer><button type="button" class="usa-button" @click="visible = false">Continue without saving</button></template></UsaModal>'}}}},w={args:{...a,visible:!0,"slot:heading":"Custom heading slot"},name:"Heading Slot",parameters:{docs:{source:{code:'<UsaModal :visible="true"><template #heading>Custom heading slot</template><template #default><p>You have unsaved changes that will be lost.</p></template><template #footer><button type="button" class="usa-button" @click="visible = false">Continue without saving</button></template></UsaModal>'}}}},M={args:{...a,heading:"Are you sure you want to continue?",headingTag:"h4",visible:!0},name:"Custom Heading Tag",parameters:{docs:{source:{code:'<UsaModal heading="Are you sure you want to continue?" heading-tag="h4" :visible="true"><template #default><p>You have unsaved changes that will be lost.</p></template><template #footer><button type="button" class="usa-button" @click="visible = false">Continue without saving</button></template></UsaModal>'}}}},k={args:{...a,visible:!0,heading:"Are you sure you want to continue?","close-button":'<button type="button" style="align-self: flex-end" @click="visible = false">Custom Close</button>'},name:"Custom Close Button Slot",parameters:{docs:{source:{code:'<UsaModal :visible="true" heading="Are you sure you want to continue?"><template #close-button><button type="button" style="align-self: flex-end" @click="visible = false">Custom Close</button></template><template #default><p>You have unsaved changes that will be lost.</p></template><template #footer><button type="button" class="usa-button" @click="visible = false">Continue without saving</button></template></UsaModal>'}}}},A={args:{...a,heading:"Are you sure you want to continue?",visible:!0,customClasses:{focusTrap:["test-focus-trap-class"],modal:["test-modal-class"],overlay:["test-overlay-class"],content:["test-content-class"],main:["test-main-class"],heading:["test-heading-class"],description:["test-description-class"],footer:["test-footer-class"]}},name:"Custom Classes",parameters:{docs:{source:{code:`<UsaModal heading="Are you sure you want to continue?" :visible="true" :custom-classes=" {
      focusTrap: ['test-focus-trap-class'],
      modal: ['test-modal-class'],
      overlay: ['test-overlay-class'],
      content: ['test-content-class'],
      main: ['test-main-class'],
      heading: ['test-heading-class'],
      description: ['test-description-class'],
      footer: ['test-footer-class'],
    }"><template #default><p>You have unsaved changes that will be lost.</p></template><template #footer><button type="button" class="usa-button" @click="visible = false">Continue without saving</button></template></UsaModal>`}}}};var V,O,K;f.parameters={...f.parameters,docs:{...(V=f.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    heading: 'Are you sure you want to continue?',
    visible: true
  },
  name: 'Default',
  parameters: {
    docs: {
      source: {
        code: \`<UsaModal heading="Are you sure you want to continue?" :visible="true"><template #default><p>You have unsaved changes that will be lost.</p></template><template #footer><button type="button" class="usa-button" @click="visible = false">Continue without saving</button></template></UsaModal>\`
      }
    }
  }
}`,...(K=(O=f.parameters)==null?void 0:O.docs)==null?void 0:K.source}}};var G,Z,J;y.parameters={...y.parameters,docs:{...(G=y.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    heading: 'Are you sure you want to continue?',
    visible: true,
    size: 'lg'
  },
  name: 'Large Size',
  parameters: {
    docs: {
      source: {
        code: \`<UsaModal heading="Are you sure you want to continue?" :visible="true" size="lg"><template #default><p>You have unsaved changes that will be lost.</p></template><template #footer><button type="button" class="usa-button" @click="visible = false">Continue without saving</button></template></UsaModal>\`
      }
    }
  }
}`,...(J=(Z=y.parameters)==null?void 0:Z.docs)==null?void 0:J.source}}};var Q,W,X;h.parameters={...h.parameters,docs:{...(Q=h.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    heading: 'Are you sure you want to continue?',
    visible: true,
    forceAction: true
  },
  name: 'Force Action',
  parameters: {
    docs: {
      source: {
        code: \`<UsaModal heading="Are you sure you want to continue?" :visible="true" :force-action="true"><template #default><p>You have unsaved changes that will be lost.</p></template><template #footer><button type="button" class="usa-button" @click="visible = false">Continue without saving</button></template></UsaModal>\`
      }
    }
  }
}`,...(X=(W=h.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};var _,ee,te;v.parameters={...v.parameters,docs:{...(_=v.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    heading: 'Are you sure you want to continue?',
    id: 'custom-id',
    visible: true
  },
  name: 'Custom ID',
  parameters: {
    docs: {
      source: {
        code: \`<UsaModal heading="Are you sure you want to continue?" id="custom-id" :visible="true"><template #default><p>You have unsaved changes that will be lost.</p></template><template #footer><button type="button" class="usa-button" @click="visible = false">Continue without saving</button></template></UsaModal>\`
      }
    }
  }
}`,...(te=(ee=v.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ae,se,oe;C.parameters={...C.parameters,docs:{...(ae=C.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    heading: 'Are you sure you want to continue?',
    closeButtonLabel: 'Custom close modal button label',
    visible: true
  },
  name: 'Custom Close Button AriaLabel',
  parameters: {
    docs: {
      source: {
        code: \`<UsaModal heading="Are you sure you want to continue?" :close-button-label="Custom close modal button label" :visible="true"><template #default><p>You have unsaved changes that will be lost.</p></template><template #footer><button type="button" class="usa-button" @click="visible = false">Continue without saving</button></template></UsaModal>\`
      }
    }
  }
}`,...(oe=(se=C.parameters)==null?void 0:se.docs)==null?void 0:oe.source}}};var ne,le,ie;w.parameters={...w.parameters,docs:{...(ne=w.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    visible: true,
    'slot:heading': 'Custom heading slot'
  },
  name: 'Heading Slot',
  parameters: {
    docs: {
      source: {
        code: \`<UsaModal :visible="true"><template #heading>Custom heading slot</template><template #default><p>You have unsaved changes that will be lost.</p></template><template #footer><button type="button" class="usa-button" @click="visible = false">Continue without saving</button></template></UsaModal>\`
      }
    }
  }
}`,...(ie=(le=w.parameters)==null?void 0:le.docs)==null?void 0:ie.source}}};var ue,re,ce;M.parameters={...M.parameters,docs:{...(ue=M.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    heading: 'Are you sure you want to continue?',
    headingTag: 'h4',
    visible: true
  },
  name: 'Custom Heading Tag',
  parameters: {
    docs: {
      source: {
        code: \`<UsaModal heading="Are you sure you want to continue?" heading-tag="h4" :visible="true"><template #default><p>You have unsaved changes that will be lost.</p></template><template #footer><button type="button" class="usa-button" @click="visible = false">Continue without saving</button></template></UsaModal>\`
      }
    }
  }
}`,...(ce=(re=M.parameters)==null?void 0:re.docs)==null?void 0:ce.source}}};var de,me,pe;k.parameters={...k.parameters,docs:{...(de=k.parameters)==null?void 0:de.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    visible: true,
    heading: 'Are you sure you want to continue?',
    'close-button': '<button type="button" style="align-self: flex-end" @click="visible = false">Custom Close</button>'
  },
  name: 'Custom Close Button Slot',
  parameters: {
    docs: {
      source: {
        code: \`<UsaModal :visible="true" heading="Are you sure you want to continue?"><template #close-button><button type="button" style="align-self: flex-end" @click="visible = false">Custom Close</button></template><template #default><p>You have unsaved changes that will be lost.</p></template><template #footer><button type="button" class="usa-button" @click="visible = false">Continue without saving</button></template></UsaModal>\`
      }
    }
  }
}`,...(pe=(me=k.parameters)==null?void 0:me.docs)==null?void 0:pe.source}}};var be,ge,fe;A.parameters={...A.parameters,docs:{...(be=A.parameters)==null?void 0:be.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    heading: 'Are you sure you want to continue?',
    visible: true,
    customClasses: {
      focusTrap: ['test-focus-trap-class'],
      modal: ['test-modal-class'],
      overlay: ['test-overlay-class'],
      content: ['test-content-class'],
      main: ['test-main-class'],
      heading: ['test-heading-class'],
      description: ['test-description-class'],
      footer: ['test-footer-class']
    }
  },
  name: 'Custom Classes',
  parameters: {
    docs: {
      source: {
        code: \`<UsaModal heading="Are you sure you want to continue?" :visible="true" :custom-classes=" {
      focusTrap: ['test-focus-trap-class'],
      modal: ['test-modal-class'],
      overlay: ['test-overlay-class'],
      content: ['test-content-class'],
      main: ['test-main-class'],
      heading: ['test-heading-class'],
      description: ['test-description-class'],
      footer: ['test-footer-class'],
    }"><template #default><p>You have unsaved changes that will be lost.</p></template><template #footer><button type="button" class="usa-button" @click="visible = false">Continue without saving</button></template></UsaModal>\`
      }
    }
  }
}`,...(fe=(ge=A.parameters)==null?void 0:ge.docs)==null?void 0:fe.source}}};const Ze=["DefaultModal","LargeModal","ForceActionModal","CustomIdModal","CustomCloseButtonLabelModal","HeadingSlotHeroModal","CustomHeadingTagModal","CustomCloseButtonSlotModal","CustomClassesModal"];export{A as CustomClassesModal,C as CustomCloseButtonLabelModal,k as CustomCloseButtonSlotModal,M as CustomHeadingTagModal,v as CustomIdModal,f as DefaultModal,h as ForceActionModal,w as HeadingSlotHeroModal,y as LargeModal,Ze as __namedExportsOrder,Ge as default};
