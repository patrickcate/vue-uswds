import{$ as Me,l as $,w as he,E as ke,R as Ae,u as Ue,s as y,y as Be,z as Se,f as h,b as z,n as u,g as V,t as m,Y as Te,o as r,a as p,r as b,d as $e,v as Le,c as Y,G as ze,m as Ye}from"./vue.esm-bundler-2e7cedae.js";import{b as qe,o as Pe,a as je}from"./index-2ecd98da.js";import{c as He}from"./focus-trap.esm-0fbb6aae.js";import{n as Ie}from"./unique-id-a1cb1937.js";import{B as xe}from"./BaseHeading-0ea88faf.js";import{U as Ee}from"./UsaModalCloseButton-f2486757.js";import"./index-6ef08634.js";import"./common-c0b90c12.js";import"./constants-fce87d39.js";const Fe=Me({name:"UseFocusTrap",props:["as","options"],setup(e,{slots:n}){let l;const g=$(),s=()=>l&&l.activate(),f=()=>l&&l.deactivate();return he(()=>qe(g),c=>{c&&(l=He(c,e.options||{}),s())},{flush:"post"}),ke(()=>f()),()=>{if(n.default)return Ae(e.as||"div",{ref:g},n.default())}}}),Re=["id","aria-labelledby","aria-describedby"],q="usa-js-modal--active",P="usa-js-no-click",v="js-focus-trap-wrapper",ve={__name:"UsaModal",props:{size:{type:String,default:"",validator(e){const n=["","lg"].includes(e);return n||console.warn(`'${e}' is not a valid modal size`),n}},id:{type:String,default:""},visible:{type:Boolean,default:!1},forceAction:{type:Boolean,default:!1},closeButtonLabel:{type:String,default:"Close this window"},heading:{type:String,default:""},headingTag:{type:String,default:"h2"},customClasses:{type:Object,default:()=>({focusTrap:[],modal:[],overlay:[],content:[],main:[],heading:[],description:[],footer:[]})}},emits:["update:visible"],setup(e,{emit:n}){const l=Ue();l!=null&&l.closeButton&&console.warn("The 'closeButton' slot is deprecated, use 'close-button' instead.");const g=n,s=e,f=$(null),c=$(!1),i=y({get:()=>c.value&&s.visible,set:t=>g("update:visible",t)}),Ce=y(()=>[{"is-visible":i.value}]),we=y(()=>{var t;return[{"usa-modal--lg":s.size==="lg"},(t=s.customClasses)==null?void 0:t.modal]}),L=y(()=>s.id||Ie("usa-modal")),j=`${L.value}-heading`,H=`${L.value}-description`;return he(()=>i,t=>{c.value&&(t.value?(document.body.classList.add(q),document.querySelectorAll(`body > :not(.${v})`).forEach(d=>d.setAttribute("aria-hidden",!0)),s.forceAction&&document.body.classList.add(P)):(document.body.classList.remove(q),document.querySelectorAll(`body > :not(${v})`).forEach(d=>d.removeAttribute("aria-hidden",!0)),s.forceAction&&document.body.classList.remove(P)))},{immediate:!0,deep:!0}),Be(()=>{c.value=!0}),Se(()=>{document.body.classList.remove(q),document.querySelectorAll(`body > :not(.${v})`).forEach(t=>t.removeAttribute("aria-hidden",!0)),s.forceAction&&document.body.classList.remove(P)}),Pe("Escape",()=>{i.value&&!s.forceAction&&(i.value=!1)}),je(f,()=>{i.value&&!s.forceAction&&(i.value=!1)}),(t,d)=>{var I;return r(),h(Te,{to:"body",disabled:!i.value},[i.value?(r(),h(z(Fe),{key:0,class:u([`${v}`,(I=e.customClasses)==null?void 0:I.focusTrap])},{default:V(()=>{var x,E,F,R,D,N;return[p("div",Ye(t.$attrs,{id:`${L.value}-modal`,class:["usa-modal-wrapper",Ce.value],role:"dialog","aria-labelledby":t.$slots.heading||e.heading?j:null,"aria-describedby":t.$slots.default?H:null}),[p("div",{class:u(["usa-modal-overlay",(x=e.customClasses)==null?void 0:x.overlay])},[p("div",{ref_key:"modal",ref:f,class:u(["usa-modal",we.value]),tabindex:"-1"},[p("div",{class:u(["usa-modal__content",(E=e.customClasses)==null?void 0:E.content])},[p("div",{class:u(["usa-modal__main",(F=e.customClasses)==null?void 0:F.main])},[t.$slots.heading||e.heading?(r(),h(z(xe),{key:0,id:j,tag:e.headingTag,class:u(["usa-modal__heading",(R=e.customClasses)==null?void 0:R.heading])},{default:V(()=>[b(t.$slots,"heading",{},()=>[$e(Le(e.heading),1)])]),_:3},8,["tag","class"])):m("",!0),t.$slots.default?(r(),Y("div",{key:1,id:H,class:u((D=e.customClasses)==null?void 0:D.description)},[b(t.$slots,"default")],2)):m("",!0),t.$slots.footer?(r(),Y("div",{key:2,class:u(["usa-modal__footer",(N=e.customClasses)==null?void 0:N.footer])},[b(t.$slots,"footer")],2)):m("",!0)],2),t.$slots["close-button"]?b(t.$slots,"close-button",{key:0}):t.$slots.closeButton?b(t.$slots,"closeButton",{key:1}):(r(),Y(ze,{key:2},[e.forceAction?m("",!0):(r(),h(z(Ee),{key:0,"aria-label":e.closeButtonLabel,onClick:d[0]||(d[0]=De=>i.value=!1)},null,8,["aria-label"]))],64))],2)],2)],2)],16,Re)]}),_:3},8,["class"])):m("",!0)],8,["disabled"])}}},o=ve;ve.__docgenInfo={exportName:"default",displayName:"UsaModal",type:1,props:[{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"size",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'""'},{name:"headingTag",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'"h2"'},{name:"id",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'""'},{name:"customClasses",global:!1,description:"",tags:[],required:!1,type:"Record<string, any>",declarations:[],schema:"Record<string, any>",default:`() => {
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
}`},{name:"heading",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'""'},{name:"visible",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]},default:"false"},{name:"forceAction",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]},default:"false"},{name:"closeButtonLabel",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'"Close this window"'}],events:[{name:"update:visible",description:"",tags:[],type:"any[]",signature:'(event: "update:visible", ...args: any[]): void',declarations:[],schema:["any"]}],slots:[{name:"heading",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}},{name:"default",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}},{name:"footer",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}},{name:"close-button",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}},{name:"closeButton",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}}],exposed:[{name:"size",type:"string",description:"",declarations:[],schema:"string"},{name:"headingTag",type:"string",description:"",declarations:[],schema:"string"},{name:"id",type:"string",description:"",declarations:[],schema:"string"},{name:"customClasses",type:"Record<string, any>",description:"",declarations:[],schema:"Record<string, any>"},{name:"heading",type:"string",description:"",declarations:[],schema:"string"},{name:"visible",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"forceAction",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"closeButtonLabel",type:"string",description:"",declarations:[],schema:"string"}],sourceFiles:"/home/runner/work/vue-uswds/vue-uswds/src/components/UsaModal/UsaModal.vue"};const a={size:o.props.size.default,id:o.props.id.default,visible:o.props.visible.default,forceAction:o.props.forceAction.default,heading:o.props.heading.default,headingTag:o.props.headingTag.default,closeButtonLabel:o.props.closeButtonLabel.default,customClasses:o.props.customClasses.default()},Ze={component:o,title:"Components/UsaModal",argTypes:{size:{options:["","lg"],control:{type:"select"}},id:{control:{type:"text"}},visible:{control:{type:"boolean"}},forceAction:{control:{type:"boolean"}},closeButtonLabel:{control:{type:"text"}},heading:{control:{type:"text"},table:{category:"props"}},headingTag:{options:["h1","h2","h3","h4","h5","h6"],control:{type:"select"}},customClasses:{control:{type:"object"}},default:{control:{type:"text"}},"slot:heading":{control:{type:"text"},name:"heading",table:{category:"slots"}},footer:{control:{type:"text"}},"close-button":{control:{type:"text"}},closeButton:{control:{type:"text"},name:"closeButton (deprecated: use `close-button`)"}},args:{size:a.size,id:a.id,visible:a.visible,forceAction:a.forceAction,closeButtonLabel:a.closeButtonLabel,heading:a.heading,headingTag:a.headingTag,customClasses:a.customClasses,default:"<p>You have unsaved changes that will be lost.</p>","slot:heading":"",footer:`<ul class="usa-button-group">
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
    </ul>`,"close-button":""},render:e=>({components:{UsaModal:o},props:Object.keys(o.props),setup(){const n=$(e.visible);return{args:e,visible:n}},template:`<UsaModal
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
  </UsaModal>`})},C={args:{...a,heading:"Are you sure you want to continue?",visible:!0},name:"Default",parameters:{docs:{source:{code:'<UsaModal heading="Are you sure you want to continue?" :visible="true"><template #default><p>You have unsaved changes that will be lost.</p></template><template #footer><button type="button" class="usa-button" @click="visible = false">Continue without saving</button></template></UsaModal>'}}}},w={args:{...a,heading:"Are you sure you want to continue?",visible:!0,size:"lg"},name:"Large Size",parameters:{docs:{source:{code:'<UsaModal heading="Are you sure you want to continue?" :visible="true" size="lg"><template #default><p>You have unsaved changes that will be lost.</p></template><template #footer><button type="button" class="usa-button" @click="visible = false">Continue without saving</button></template></UsaModal>'}}}},M={args:{...a,heading:"Are you sure you want to continue?",visible:!0,forceAction:!0},name:"Force Action",parameters:{docs:{source:{code:'<UsaModal heading="Are you sure you want to continue?" :visible="true" :force-action="true"><template #default><p>You have unsaved changes that will be lost.</p></template><template #footer><button type="button" class="usa-button" @click="visible = false">Continue without saving</button></template></UsaModal>'}}}},k={args:{...a,heading:"Are you sure you want to continue?",id:"custom-id",visible:!0},name:"Custom ID",parameters:{docs:{source:{code:'<UsaModal heading="Are you sure you want to continue?" id="custom-id" :visible="true"><template #default><p>You have unsaved changes that will be lost.</p></template><template #footer><button type="button" class="usa-button" @click="visible = false">Continue without saving</button></template></UsaModal>'}}}},A={args:{...a,heading:"Are you sure you want to continue?",closeButtonLabel:"Custom close modal button label",visible:!0},name:"Custom Close Button AriaLabel",parameters:{docs:{source:{code:'<UsaModal heading="Are you sure you want to continue?" :close-button-label="Custom close modal button label" :visible="true"><template #default><p>You have unsaved changes that will be lost.</p></template><template #footer><button type="button" class="usa-button" @click="visible = false">Continue without saving</button></template></UsaModal>'}}}},U={args:{...a,visible:!0,"slot:heading":"Custom heading slot"},name:"Heading Slot",parameters:{docs:{source:{code:'<UsaModal :visible="true"><template #heading>Custom heading slot</template><template #default><p>You have unsaved changes that will be lost.</p></template><template #footer><button type="button" class="usa-button" @click="visible = false">Continue without saving</button></template></UsaModal>'}}}},B={args:{...a,heading:"Are you sure you want to continue?",headingTag:"h4",visible:!0},name:"Custom Heading Tag",parameters:{docs:{source:{code:'<UsaModal heading="Are you sure you want to continue?" heading-tag="h4" :visible="true"><template #default><p>You have unsaved changes that will be lost.</p></template><template #footer><button type="button" class="usa-button" @click="visible = false">Continue without saving</button></template></UsaModal>'}}}},S={args:{...a,visible:!0,heading:"Are you sure you want to continue?","close-button":'<button type="button" style="align-self: flex-end" @click="visible = false">Custom Close</button>'},name:"Custom Close Button Slot",parameters:{docs:{source:{code:'<UsaModal :visible="true" heading="Are you sure you want to continue?"><template #close-button><button type="button" style="align-self: flex-end" @click="visible = false">Custom Close</button></template><template #default><p>You have unsaved changes that will be lost.</p></template><template #footer><button type="button" class="usa-button" @click="visible = false">Continue without saving</button></template></UsaModal>'}}}},T={args:{...a,heading:"Are you sure you want to continue?",visible:!0,customClasses:{focusTrap:["test-focus-trap-class"],modal:["test-modal-class"],overlay:["test-overlay-class"],content:["test-content-class"],main:["test-main-class"],heading:["test-heading-class"],description:["test-description-class"],footer:["test-footer-class"]}},name:"Custom Classes",parameters:{docs:{source:{code:`<UsaModal heading="Are you sure you want to continue?" :visible="true" :custom-classes=" {
      focusTrap: ['test-focus-trap-class'],
      modal: ['test-modal-class'],
      overlay: ['test-overlay-class'],
      content: ['test-content-class'],
      main: ['test-main-class'],
      heading: ['test-heading-class'],
      description: ['test-description-class'],
      footer: ['test-footer-class'],
    }"><template #default><p>You have unsaved changes that will be lost.</p></template><template #footer><button type="button" class="usa-button" @click="visible = false">Continue without saving</button></template></UsaModal>`}}}};var O,K,G;C.parameters={...C.parameters,docs:{...(O=C.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(G=(K=C.parameters)==null?void 0:K.docs)==null?void 0:G.source}}};var J,Q,W;w.parameters={...w.parameters,docs:{...(J=w.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(W=(Q=w.parameters)==null?void 0:Q.docs)==null?void 0:W.source}}};var X,Z,_;M.parameters={...M.parameters,docs:{...(X=M.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(_=(Z=M.parameters)==null?void 0:Z.docs)==null?void 0:_.source}}};var ee,te,ae;k.parameters={...k.parameters,docs:{...(ee=k.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(ae=(te=k.parameters)==null?void 0:te.docs)==null?void 0:ae.source}}};var se,oe,ne;A.parameters={...A.parameters,docs:{...(se=A.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(ne=(oe=A.parameters)==null?void 0:oe.docs)==null?void 0:ne.source}}};var le,ie,ue;U.parameters={...U.parameters,docs:{...(le=U.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
}`,...(ue=(ie=U.parameters)==null?void 0:ie.docs)==null?void 0:ue.source}}};var re,ce,de;B.parameters={...B.parameters,docs:{...(re=B.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
}`,...(de=(ce=B.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};var me,pe,be;S.parameters={...S.parameters,docs:{...(me=S.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
}`,...(be=(pe=S.parameters)==null?void 0:pe.docs)==null?void 0:be.source}}};var ge,fe,ye;T.parameters={...T.parameters,docs:{...(ge=T.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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
}`,...(ye=(fe=T.parameters)==null?void 0:fe.docs)==null?void 0:ye.source}}};const _e=["DefaultModal","LargeModal","ForceActionModal","CustomIdModal","CustomCloseButtonLabelModal","HeadingSlotHeroModal","CustomHeadingTagModal","CustomCloseButtonSlotModal","CustomClassesModal"];export{T as CustomClassesModal,A as CustomCloseButtonLabelModal,S as CustomCloseButtonSlotModal,B as CustomHeadingTagModal,k as CustomIdModal,C as DefaultModal,M as ForceActionModal,U as HeadingSlotHeroModal,w as LargeModal,_e as __namedExportsOrder,Ze as default};
