import{c as i,a as S,r as o,o as t,t as n}from"./vue.esm-bundler-d9807bdf.js";const C=["aria-label"],w={class:"usa-identifier__container"},$={key:0,class:"usa-identifier__logos"},D=["aria-label"],q={key:0,class:"usa-identifier__identity-domain"},N={key:1,class:"usa-identifier__identity-disclaimer"},j={__name:"UsaIdentifierMasthead",props:{ariaLabel:{type:String,default:"Agency identifier"},descriptionAriaLabel:{type:String,default:"Agency description"}},setup(a){return(e,B)=>(t(),i("section",{class:"usa-identifier__section usa-identifier__section--masthead","aria-label":a.ariaLabel},[S("div",w,[o(e.$slots,"default",{},()=>[e.$slots.logos?(t(),i("div",$,[o(e.$slots,"logos")])):n("",!0),e.$slots.domain||e.$slots.disclaimer?(t(),i("div",{key:1,class:"usa-identifier__identity","aria-label":a.descriptionAriaLabel},[e.$slots.domain?(t(),i("p",q,[o(e.$slots,"domain")])):n("",!0),e.$slots.disclaimer?(t(),i("p",N,[o(e.$slots,"disclaimer")])):n("",!0)],8,D)):n("",!0)])])],8,C))}},r=j;j.__docgenInfo={exportName:"default",displayName:"UsaIdentifierMasthead",type:1,props:[{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"ariaLabel",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'"Agency identifier"'},{name:"descriptionAriaLabel",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'"Agency description"'}],events:[],slots:[{name:"default",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}},{name:"logos",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}},{name:"domain",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}},{name:"disclaimer",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}}],exposed:[{name:"ariaLabel",type:"string",description:"",declarations:[],schema:"string"},{name:"descriptionAriaLabel",type:"string",description:"",declarations:[],schema:"string"}],sourceFiles:"/home/runner/work/vue-uswds/vue-uswds/src/components/UsaIdentifierMasthead/UsaIdentifierMasthead.vue"};const s={ariaLabel:r.props.ariaLabel.default,descriptionAriaLabel:r.props.descriptionAriaLabel.default},R={component:r,title:"Components/UsaIdentifierMasthead",argTypes:{ariaLabel:{control:{type:"text"}},descriptionAriaLabel:{control:{type:"text"}},default:{control:{type:"text"}},logos:{control:{type:"text"}},domain:{control:{type:"text"}},disclaimer:{control:{type:"text"}}},args:{ariaLabel:s.ariaLabel,descriptionAriaLabel:s.descriptionAriaLabel,default:"",logos:"",domain:"",disclaimer:""},decorators:[()=>({template:'<div class="usa-identifier"><story /></div>'})],render:a=>({components:{UsaIdentifierMasthead:r},props:Object.keys(r.props),setup(){return{args:a}},template:`<UsaIdentifierMasthead
    :aria-label="args.ariaLabel" :description-aria-label="args.descriptionAriaLabel"
  >
    <template v-if="!!args.default" #default>${a.default}</template>
    <template v-if="!!args.logos" #logos>${a.logos}</template>
    <template v-if="!!args.domain" #domain>${a.domain}</template>
    <template v-if="!!args.disclaimer" #disclaimer>${a.disclaimer}</template>
  </UsaIdentifierMasthead>`})},l={args:{...s,default:"Your identifer content here"},name:"Default",parameters:{docs:{source:{code:"<UsaIdentifierMasthead>Your identifer content here</UsaIdentifierMasthead>"}}}},d={args:{...s,logos:`<a href="javascript:void(0);" class="usa-identifier__logo">
    <img class="usa-identifier__logo-img" src="/assets/img/circle-gray-20.svg" alt="Parent agency logo" role="img">
  </a>`},name:"Logos Slot",parameters:{docs:{source:{code:`<UsaIdentifierMasthead><template #logos><a href="javascript:void(0);" class="usa-identifier__logo">
    <img class="usa-identifier__logo-img" src="/assets/img/circle-gray-20.svg" alt="Parent agency logo" role="img">
  </a></template></UsaIdentifierMasthead>
       `}}}},c={args:{...s,domain:"domain.gov"},name:"Domain Slot",parameters:{docs:{source:{code:"<UsaIdentifierMasthead><template #domain>domain.gov</template></UsaIdentifierMasthead>"}}}},m={args:{...s,disclaimer:`An official website of the
    <a href="javascript:void(0);">Parent agency</a>`},name:"Disclaimer Slot",parameters:{docs:{source:{code:'<UsaIdentifierMasthead><template #disclaimer>An official website of the <a href="javascript:void(0);">Parent agency</a></template></UsaIdentifierMasthead>'}}}},p={args:{...s,ariaLabel:"Custom aria label",descriptionAriaLabel:"Custom description aria label",logos:`<a href="javascript:void(0);" class="usa-identifier__logo">
    <img class="usa-identifier__logo-img" src="/assets/img/circle-gray-20.svg" alt="Parent agency logo" role="img">
    </a>`,domain:"domain.gov",disclaimer:`An official website of the
    <a href="javascript:void(0);">Parent agency</a>`},name:"Custom Aria Labels",parameters:{docs:{source:{code:`<UsaIdentifierMasthead aria-label="Custom aria label" description-aria-label="Custom description aria label"><template #logos><a href="javascript:void(0);" class="usa-identifier__logo">
    <img class="usa-identifier__logo-img" src="/assets/img/circle-gray-20.svg" alt="Parent agency logo" role="img">
    </a></template><template #domain>domain.gov</template><template #disclaimer>An official website of the <a href="javascript:void(0);">Parent agency</a></template></UsaIdentifierMasthead>`}}}};var g,f,u;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    default: \`Your identifer content here\`
  },
  name: 'Default',
  parameters: {
    docs: {
      source: {
        code: \`<UsaIdentifierMasthead>Your identifer content here</UsaIdentifierMasthead>\`
      }
    }
  }
}`,...(u=(f=l.parameters)==null?void 0:f.docs)==null?void 0:u.source}}};var h,y,b;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    logos: \`<a href="javascript:void(0);" class="usa-identifier__logo">
    <img class="usa-identifier__logo-img" src="/assets/img/circle-gray-20.svg" alt="Parent agency logo" role="img">
  </a>\`
  },
  name: 'Logos Slot',
  parameters: {
    docs: {
      source: {
        code: \`<UsaIdentifierMasthead><template #logos><a href="javascript:void(0);" class="usa-identifier__logo">
    <img class="usa-identifier__logo-img" src="/assets/img/circle-gray-20.svg" alt="Parent agency logo" role="img">
  </a></template></UsaIdentifierMasthead>
       \`
      }
    }
  }
}`,...(b=(y=d.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var v,_,I;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    domain: \`domain.gov\`
  },
  name: 'Domain Slot',
  parameters: {
    docs: {
      source: {
        code: \`<UsaIdentifierMasthead><template #domain>domain.gov</template></UsaIdentifierMasthead>\`
      }
    }
  }
}`,...(I=(_=c.parameters)==null?void 0:_.docs)==null?void 0:I.source}}};var M,L,U;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    disclaimer: \`An official website of the
    <a href="javascript:void(0);">Parent agency</a>\`
  },
  name: 'Disclaimer Slot',
  parameters: {
    docs: {
      source: {
        code: \`<UsaIdentifierMasthead><template #disclaimer>An official website of the <a href="javascript:void(0);">Parent agency</a></template></UsaIdentifierMasthead>\`
      }
    }
  }
}`,...(U=(L=m.parameters)==null?void 0:L.docs)==null?void 0:U.source}}};var A,P,k;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    ariaLabel: 'Custom aria label',
    descriptionAriaLabel: 'Custom description aria label',
    logos: \`<a href="javascript:void(0);" class="usa-identifier__logo">
    <img class="usa-identifier__logo-img" src="/assets/img/circle-gray-20.svg" alt="Parent agency logo" role="img">
    </a>\`,
    domain: \`domain.gov\`,
    disclaimer: \`An official website of the
    <a href="javascript:void(0);">Parent agency</a>\`
  },
  name: 'Custom Aria Labels',
  parameters: {
    docs: {
      source: {
        code: \`<UsaIdentifierMasthead aria-label="Custom aria label" description-aria-label="Custom description aria label"><template #logos><a href="javascript:void(0);" class="usa-identifier__logo">
    <img class="usa-identifier__logo-img" src="/assets/img/circle-gray-20.svg" alt="Parent agency logo" role="img">
    </a></template><template #domain>domain.gov</template><template #disclaimer>An official website of the <a href="javascript:void(0);">Parent agency</a></template></UsaIdentifierMasthead>\`
      }
    }
  }
}`,...(k=(P=p.parameters)==null?void 0:P.docs)==null?void 0:k.source}}};const V=["DefaultIdentifierMasthead","LogosSlotIdentifierMasthead","DomainSlotIdentifierMasthead","DisclaimerSlotIdentifierMasthead","CustomAriaLabelsIdentifierMasthead"];export{p as CustomAriaLabelsIdentifierMasthead,l as DefaultIdentifierMasthead,m as DisclaimerSlotIdentifierMasthead,c as DomainSlotIdentifierMasthead,d as LogosSlotIdentifierMasthead,V as __namedExportsOrder,R as default};
