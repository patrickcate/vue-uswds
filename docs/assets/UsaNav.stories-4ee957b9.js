import{e as n,l as i,s as U,w as L,y as ae,z as se,f as te,I as B,b as s,a as f,g as re,n as k,Y as oe,R as ne,o as g,r as m,c as P,G as S,W as M}from"./vue.esm-bundler-2e7cedae.js";import{I as le,f as ce}from"./constants-fce87d39.js";import{c as me,o as ie,a as ue}from"./index-2ecd98da.js";import{u as pe}from"./useFocusTrap-1f496824.js";import{U as de}from"./UsaOverlay-9ce5b4b7.js";import{U as ye}from"./UsaNavbar-4fa18cb3.js";import"./index-6ef08634.js";import"./focus-trap.esm-0fbb6aae.js";const be=["id","aria-label"],ve=["src","alt"],F={__name:"UsaNav",props:{ariaLabel:{type:String,default:"Primary navigation"},closeButtonLabel:{type:String,default:"Close"},customClasses:{type:Object,default:()=>({button:[]})}},setup(a){const H=n("vueUswds.imagePath",le),z=n("vueUswds.mobileMenuBreakpoint",ce),G=n("isExtendedHeader",i(!1)),r=n("isMobileMenuOpen",i(!1)),Q=n("mobileMenuId"),o=n("closeMobileMenu"),v=i(null),{activate:W,deactivate:Y}=pe(v),C=i(!1),J=me(`(min-width: ${z})`),N=U(()=>C.value?J.value:!0);L(r,async e=>{e?(await M,W()):(await M,Y())}),L(N,e=>{e&&o()}),ae(()=>{C.value=!0}),se(()=>{r.value&&o()}),ie("Escape",()=>{r.value&&o()}),ue(v,()=>{r.value&&o()});const X=U(()=>[{"is-visible":r.value}]),Z={name:"UsaNavInner",props:{wrap:{type:Boolean,default:!1}},setup({wrap:e},{slots:c}){return()=>e?ne("div",{class:"usa-nav__inner"},c.default()):c.default()}};return(e,c)=>(g(),te(oe,{to:"body",disabled:!s(r)},[B(s(de),{visible:s(r)},null,8,["visible"]),f("nav",{id:s(Q),ref_key:"nav",ref:v,"aria-label":a.ariaLabel,class:k(["usa-nav",X.value])},[B(Z,{wrap:s(G)},{default:re(()=>{var h;return[f("button",{type:"button",class:k(["usa-nav__close",(h=a.customClasses)==null?void 0:h.button]),onClick:c[0]||(c[0]=(...ee)=>s(o)&&s(o)(...ee))},[m(e.$slots,"close-button",{closeButtonLabel:a.closeButtonLabel},()=>[f("img",{src:`${s(H)}/usa-icons/close.svg`,role:"img",alt:a.closeButtonLabel},null,8,ve)])],2),N.value?(g(),P(S,{key:0},[m(e.$slots,"primary"),m(e.$slots,"secondary")],64)):(g(),P(S,{key:1},[m(e.$slots,"secondary"),m(e.$slots,"primary")],64))]}),_:3},8,["wrap"])],10,be)],8,["disabled"]))}},l=F;F.__docgenInfo={exportName:"default",displayName:"UsaNav",type:1,props:[{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"customClasses",global:!1,description:"",tags:[],required:!1,type:"Record<string, any>",declarations:[],schema:"Record<string, any>",default:`() => {
    return {
        button: [],
    };
}`},{name:"ariaLabel",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'"Primary navigation"'},{name:"closeButtonLabel",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'"Close"'}],events:[],slots:[{name:"close-button",type:"{ closeButtonLabel: string; }",description:"",declarations:[],schema:{kind:"object",type:"{ closeButtonLabel: string; }"}},{name:"primary",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}},{name:"secondary",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}}],exposed:[{name:"customClasses",type:"Record<string, any>",description:"",declarations:[],schema:"Record<string, any>"},{name:"ariaLabel",type:"string",description:"",declarations:[],schema:"string"},{name:"closeButtonLabel",type:"string",description:"",declarations:[],schema:"string"}],sourceFiles:"/home/runner/work/vue-uswds/vue-uswds/src/components/UsaNav/UsaNav.vue"};const t={ariaLabel:l.props.ariaLabel.default,closeButtonLabel:l.props.closeButtonLabel.default,customClasses:l.props.customClasses.default()},ke={component:l,title:"Components/UsaNav",argTypes:{ariaLabel:{control:{type:"text"}},closeButtonLabel:{control:{type:"text"}},customClasses:{control:{type:"object"}},primary:{control:{type:"text"}},secondary:{control:{type:"text"}},"close-button":{control:{type:"text"}}},args:{ariaLabel:t.ariaLabel,closeButtonLabel:t.closeButtonLabel,customClasses:t.customClasses,primary:"<div>Primary nav here</div>",secondary:"<div>Secondary nav here</div>","close-button":""},decorators:[()=>({components:{UsaNavbar:ye},template:"<UsaNavbar><story /></UsaNavbar>"})],render:a=>({components:{UsaNav:l},props:Object.keys(l.props),setup(){return{args:a}},template:`<UsaNav
    :aria-label="args.ariaLabel"
    :close-button-label="args.closeButtonLabel"
    :custom-classes="args.customClasses"
  >
    <template v-if="!!args.primary" #primary>${a.primary}</template>
    <template v-if="!!args.secondary" #secondary>${a.secondary}</template>
    <template v-if="!!args['close-button']" #close-button="{closeButtonLabel}">${a["close-button"]}</template>
  </UsaNav>`})},u={args:{...t},name:"Default",parameters:{docs:{source:{code:"<UsaNav><template #primary>Primary nav here</template><template #secondary>Secondary nav here</template></UsaNav>"}}}},p={args:{...t,ariaLabel:"Custom aria label"},name:"Custom Aria Label",parameters:{docs:{source:{code:'<UsaNav aria-label="Custom aria label"><template #primary>Primary nav here</template><template #secondary>Secondary nav here</template></UsaNav>'}}}},d={args:{...t,closeButtonLabel:"Custom aria label"},name:"Close Button Label",parameters:{docs:{source:{code:'<UsaNav close-button-label="Custom aria label"><template #primary>Primary nav here</template><template #secondary>Secondary nav here</template></UsaNav>'}}}},y={args:{...t,"close-button":"<em>Close Me</em>"},name:"Close Button Slot",parameters:{docs:{source:{code:'<UsaNav><template #primary>Primary nav here</template><template #secondary>Secondary nav here</template><template #close-button="><em>Close Me</em></template></UsaNav>'}}}},b={args:{...t,customClasses:{button:["custom-button-class"]}},name:"Custom Classes",parameters:{docs:{source:{code:`<UsaNav :custom-classes="{ button: ['custom-button-class'] }"><template #primary>Primary nav here</template><template #secondary>Secondary nav here</template></UsaNav>`}}}};var w,_,I;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    ...defaultProps
  },
  name: 'Default',
  parameters: {
    docs: {
      source: {
        code: \`<UsaNav><template #primary>Primary nav here</template><template #secondary>Secondary nav here</template></UsaNav>\`
      }
    }
  }
}`,...(I=(_=u.parameters)==null?void 0:_.docs)==null?void 0:I.source}}};var O,E,R;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    ariaLabel: 'Custom aria label'
  },
  name: 'Custom Aria Label',
  parameters: {
    docs: {
      source: {
        code: \`<UsaNav aria-label="Custom aria label"><template #primary>Primary nav here</template><template #secondary>Secondary nav here</template></UsaNav>\`
      }
    }
  }
}`,...(R=(E=p.parameters)==null?void 0:E.docs)==null?void 0:R.source}}};var $,q,x;d.parameters={...d.parameters,docs:{...($=d.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    closeButtonLabel: 'Custom aria label'
  },
  name: 'Close Button Label',
  parameters: {
    docs: {
      source: {
        code: \`<UsaNav close-button-label="Custom aria label"><template #primary>Primary nav here</template><template #secondary>Secondary nav here</template></UsaNav>\`
      }
    }
  }
}`,...(x=(q=d.parameters)==null?void 0:q.docs)==null?void 0:x.source}}};var j,A,T;y.parameters={...y.parameters,docs:{...(j=y.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    'close-button': '<em>Close Me</em>'
  },
  name: 'Close Button Slot',
  parameters: {
    docs: {
      source: {
        code: \`<UsaNav><template #primary>Primary nav here</template><template #secondary>Secondary nav here</template><template #close-button="><em>Close Me</em></template></UsaNav>\`
      }
    }
  }
}`,...(T=(A=y.parameters)==null?void 0:A.docs)==null?void 0:T.source}}};var D,K,V;b.parameters={...b.parameters,docs:{...(D=b.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    customClasses: {
      button: ['custom-button-class']
    }
  },
  name: 'Custom Classes',
  parameters: {
    docs: {
      source: {
        code: \`<UsaNav :custom-classes="{ button: ['custom-button-class'] }"><template #primary>Primary nav here</template><template #secondary>Secondary nav here</template></UsaNav>\`
      }
    }
  }
}`,...(V=(K=b.parameters)==null?void 0:K.docs)==null?void 0:V.source}}};const Pe=["DefaultNav","AriaLabelNav","CloseButtonLabelNav","CloseButtonSlotNav","CustomClassesNav"];export{p as AriaLabelNav,d as CloseButtonLabelNav,y as CloseButtonSlotNav,b as CustomClassesNav,u as DefaultNav,Pe as __namedExportsOrder,ke as default};
