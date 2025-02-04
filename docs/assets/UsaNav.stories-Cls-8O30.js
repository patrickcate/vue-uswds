import{l as p,w as S,e as u,s as w,y as ee,z as ae,f as te,I as O,a as P,b as n,g as se,n as $,Z as re,X as E,o as k,c as I,r as v,G as A,P as oe}from"./vue.esm-bundler-DlC1_45x.js";import{I as ne,f as le}from"./constants-BA52rpFi.js";import{b as ce,c as ie,o as me,a as ue}from"./index-DjGpgcRS.js";import{c as pe}from"./focus-trap.esm-DYjLEhSG.js";import{d as de}from"./index-BzV88aIg.js";import{_ as ye}from"./UsaOverlay-YKgU9P-8.js";import{_ as ve}from"./UsaNavbar-DCGsm1VD.js";function be(e,c={}){let a;const{immediate:U,...r}=c,d=p(!1),s=p(!1),m=o=>a&&a.activate(o),b=o=>a&&a.deactivate(o),B=()=>{a&&(a.pause(),s.value=!0)},f=()=>{a&&(a.unpause(),s.value=!1)};return S(()=>ce(e),o=>{o&&(a=pe(o,{...r,onActivate(){d.value=!0,c.onActivate&&c.onActivate()},onDeactivate(){d.value=!1,c.onDeactivate&&c.onDeactivate()}}),U&&m())},{flush:"post"}),de(()=>b()),{hasFocus:d,isPaused:s,activate:m,deactivate:b,pause:B,unpause:f}}const fe=["id","aria-label"],ge=["src","alt"],i={__name:"UsaNav",props:{ariaLabel:{type:String,default:"Primary navigation"},closeButtonLabel:{type:String,default:"Close"},customClasses:{type:Object,default:()=>({button:[]})}},setup(e){const c=u("vueUswds.imagePath",ne),a=u("vueUswds.mobileMenuBreakpoint",le),U=u("isExtendedHeader",p(!1)),r=u("isMobileMenuOpen",p(!1)),d=u("mobileMenuId"),s=u("closeMobileMenu"),m=p(null),{activate:b,deactivate:B}=be(m),f=p(!1),o=ie(`(min-width: ${a})`),M=w(()=>f.value?o.value:!0);S(r,async t=>{t?(await E,b()):(await E,B())}),S(M,t=>{t&&s()}),ee(()=>{f.value=!0}),ae(()=>{r.value&&s()}),me("Escape",()=>{r.value&&s()}),ue(m,()=>{r.value&&s()});const J=w(()=>[{"is-visible":r.value}]),W={name:"UsaNavInner",props:{wrap:{type:Boolean,default:!1}},setup({wrap:t},{slots:y}){return()=>t?oe("div",{class:"usa-nav__inner"},y.default()):y.default()}};return(t,y)=>(k(),te(re,{to:"body",disabled:!n(r)},[O(n(ye),{visible:n(r)},null,8,["visible"]),P("nav",{id:n(d),ref_key:"nav",ref:m,"aria-label":e.ariaLabel,class:$(["usa-nav",J.value])},[O(W,{wrap:n(U)},{default:se(()=>{var _;return[P("button",{type:"button",class:$(["usa-nav__close",(_=e.customClasses)==null?void 0:_.button]),onClick:y[0]||(y[0]=(...Y)=>n(s)&&n(s)(...Y))},[v(t.$slots,"close-button",{closeButtonLabel:e.closeButtonLabel},()=>[P("img",{src:`${n(c)}/usa-icons/close.svg`,role:"img",alt:e.closeButtonLabel},null,8,ge)])],2),M.value?(k(),I(A,{key:0},[v(t.$slots,"primary"),v(t.$slots,"secondary")],64)):(k(),I(A,{key:1},[v(t.$slots,"secondary"),v(t.$slots,"primary")],64))]}),_:3},8,["wrap"])],10,fe)],8,["disabled"]))}};i.__docgenInfo={exportName:"default",displayName:"UsaNav",type:1,props:[{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"customClasses",global:!1,description:"",tags:[],required:!1,type:"Record<string, any>",declarations:[],schema:"Record<string, any>",default:`() => {
    return {
        button: [],
    };
}`},{name:"ariaLabel",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'"Primary navigation"'},{name:"closeButtonLabel",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'"Close"'}],events:[],slots:[{name:"close-button",type:"{ closeButtonLabel: string; }",description:"",declarations:[],schema:{kind:"object",type:"{ closeButtonLabel: string; }"}},{name:"primary",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}},{name:"secondary",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}}],exposed:[{name:"customClasses",type:"Record<string, any>",description:"",declarations:[],schema:"Record<string, any>"},{name:"ariaLabel",type:"string",description:"",declarations:[],schema:"string"},{name:"closeButtonLabel",type:"string",description:"",declarations:[],schema:"string"}],sourceFiles:"/home/runner/work/vue-uswds/vue-uswds/src/components/UsaNav/UsaNav.vue"};const l={ariaLabel:i.props.ariaLabel.default,closeButtonLabel:i.props.closeButtonLabel.default,customClasses:i.props.customClasses.default()},ke={component:i,title:"Components/UsaNav",argTypes:{ariaLabel:{control:{type:"text"}},closeButtonLabel:{control:{type:"text"}},customClasses:{control:{type:"object"}},primary:{control:{type:"text"}},secondary:{control:{type:"text"}},"close-button":{control:{type:"text"}}},args:{ariaLabel:l.ariaLabel,closeButtonLabel:l.closeButtonLabel,customClasses:l.customClasses,primary:"<div>Primary nav here</div>",secondary:"<div>Secondary nav here</div>","close-button":""},decorators:[()=>({components:{UsaNavbar:ve},template:"<UsaNavbar><story /></UsaNavbar>"})],render:e=>({components:{UsaNav:i},props:Object.keys(i.props),setup(){return{args:e}},template:`<UsaNav
    :aria-label="args.ariaLabel"
    :close-button-label="args.closeButtonLabel"
    :custom-classes="args.customClasses"
  >
    <template v-if="!!args.primary" #primary>${e.primary}</template>
    <template v-if="!!args.secondary" #secondary>${e.secondary}</template>
    <template v-if="!!args['close-button']" #close-button="{closeButtonLabel}">${e["close-button"]}</template>
  </UsaNav>`})},g={args:{...l},name:"Default",parameters:{docs:{source:{code:"<UsaNav><template #primary>Primary nav here</template><template #secondary>Secondary nav here</template></UsaNav>"}}}},C={args:{...l,ariaLabel:"Custom aria label"},name:"Custom Aria Label",parameters:{docs:{source:{code:'<UsaNav aria-label="Custom aria label"><template #primary>Primary nav here</template><template #secondary>Secondary nav here</template></UsaNav>'}}}},N={args:{...l,closeButtonLabel:"Custom aria label"},name:"Close Button Label",parameters:{docs:{source:{code:'<UsaNav close-button-label="Custom aria label"><template #primary>Primary nav here</template><template #secondary>Secondary nav here</template></UsaNav>'}}}},h={args:{...l,"close-button":"<em>Close Me</em>"},name:"Close Button Slot",parameters:{docs:{source:{code:'<UsaNav><template #primary>Primary nav here</template><template #secondary>Secondary nav here</template><template #close-button="><em>Close Me</em></template></UsaNav>'}}}},L={args:{...l,customClasses:{button:["custom-button-class"]}},name:"Custom Classes",parameters:{docs:{source:{code:`<UsaNav :custom-classes="{ button: ['custom-button-class'] }"><template #primary>Primary nav here</template><template #secondary>Secondary nav here</template></UsaNav>`}}}};var q,x,R;g.parameters={...g.parameters,docs:{...(q=g.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(R=(x=g.parameters)==null?void 0:x.docs)==null?void 0:R.source}}};var D,T,j;C.parameters={...C.parameters,docs:{...(D=C.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(j=(T=C.parameters)==null?void 0:T.docs)==null?void 0:j.source}}};var F,K,V;N.parameters={...N.parameters,docs:{...(F=N.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(V=(K=N.parameters)==null?void 0:K.docs)==null?void 0:V.source}}};var H,z,G;h.parameters={...h.parameters,docs:{...(H=h.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(G=(z=h.parameters)==null?void 0:z.docs)==null?void 0:G.source}}};var Q,X,Z;L.parameters={...L.parameters,docs:{...(Q=L.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(Z=(X=L.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};const Se=["DefaultNav","AriaLabelNav","CloseButtonLabelNav","CloseButtonSlotNav","CustomClassesNav"];export{C as AriaLabelNav,N as CloseButtonLabelNav,h as CloseButtonSlotNav,L as CustomClassesNav,g as DefaultNav,Se as __namedExportsOrder,ke as default};
