import{U as e}from"./UsaButton-7035961e.js";import"./vue.esm-bundler-2e7cedae.js";const t={variant:e.props.variant.default,size:e.props.size.default,type:e.props.type.default,disabled:e.props.disabled.default},Z={component:e,title:"Components/UsaButton",argTypes:{variant:{options:["","secondary","accent-cool","accent-warm","base","outline","inverse","unstyled"],control:{type:"select"}},size:{options:["","big"],control:{type:"radio"}},type:{options:["button","submit","reset"],control:{type:"radio"}},disabled:{control:{type:"boolean"}},before:{control:{type:"text"}},default:{control:{type:"text"}},after:{control:{type:"text"}}},args:{variant:t.variant,size:t.size,type:t.type,disabled:t.disabled,before:"",default:"Button",after:""},render:a=>({components:{UsaButton:e},props:Object.keys(e.props),setup(){return{args:a}},template:`<UsaButton
    :variant="args.variant"
    :size="args.size"
    :type="args.type"
    :disabled="args.disabled"
  >
    <template v-if="!!args.before" #before>${a.before}</template>
    <template v-if="!!args.default" #default>${a.default}</template>
    <template v-if="!!args.after" #after>${a.after}</template>
  </UsaButton>`})},n={args:{...t},name:"Default",parameters:{docs:{source:{code:"<UsaButton>Button</UsaButton>"}}}},o={args:{...t,variant:"secondary"},name:"Secondary",parameters:{docs:{source:{code:'<UsaButton variant="secondary">Button</UsaButton>'}}}},r={args:{...t,variant:"accent-cool"},name:"Accent Cool",parameters:{docs:{source:{code:'<UsaButton variant="accent-cool">Button</UsaButton>'}}}},s={args:{...t,variant:"accent-warm"},name:"Accent Warm",parameters:{docs:{source:{code:'<UsaButton variant="accent-warm">Button</UsaButton>'}}}},c={args:{...t,variant:"base"},name:"Base",parameters:{docs:{source:{code:'<UsaButton variant="base">Button</UsaButton>'}}}},u={args:{...t,variant:"outline"},name:"Outline",parameters:{docs:{source:{code:'<UsaButton variant="outline">Button</UsaButton>'}}}},d={args:{...t,variant:"inverse"},decorators:[()=>({template:'<div class="usa-dark-background"><story /></div>'})],name:"Inverse",parameters:{docs:{source:{code:'<UsaButton variant="inverse">Button</UsaButton>'}}}},p={args:{...t,variant:"unstyled"},name:"Unstyled",parameters:{docs:{source:{code:'<UsaButton variant="unstyled">Button</UsaButton>'}}}},m={args:{...t,size:"big"},name:"Big",parameters:{docs:{source:{code:'<UsaButton size="big">Button</UsaButton>'}}}},l={args:{...t,disabled:!0},name:"Disabled",parameters:{docs:{source:{code:'<UsaButton :disabled="true">Button</UsaButton>'}}}},i={args:{...t,before:"⨂ "},name:"Before Slot",parameters:{docs:{source:{code:"<UsaButton><template #before>⨂ </template><template #default>Button</template></UsaButton>"}}}},B={args:{...t,after:" ⨁"},name:"After Slot",parameters:{docs:{source:{code:"<UsaButton><template #default>Button</template><template #after> ⨁</template></UsaButton>"}}}};var f,U,g;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    ...defaultProps
  },
  name: 'Default',
  parameters: {
    docs: {
      source: {
        code: \`<UsaButton>Button</UsaButton>\`
      }
    }
  }
}`,...(g=(U=n.parameters)==null?void 0:U.docs)==null?void 0:g.source}}};var v,b,y;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    variant: 'secondary'
  },
  name: 'Secondary',
  parameters: {
    docs: {
      source: {
        code: \`<UsaButton variant="secondary">Button</UsaButton>\`
      }
    }
  }
}`,...(y=(b=o.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var S,A,P;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    variant: 'accent-cool'
  },
  name: 'Accent Cool',
  parameters: {
    docs: {
      source: {
        code: \`<UsaButton variant="accent-cool">Button</UsaButton>\`
      }
    }
  }
}`,...(P=(A=r.parameters)==null?void 0:A.docs)==null?void 0:P.source}}};var z,D,O;s.parameters={...s.parameters,docs:{...(z=s.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    variant: 'accent-warm'
  },
  name: 'Accent Warm',
  parameters: {
    docs: {
      source: {
        code: \`<UsaButton variant="accent-warm">Button</UsaButton>\`
      }
    }
  }
}`,...(O=(D=s.parameters)==null?void 0:D.docs)==null?void 0:O.source}}};var k,w,x;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    variant: 'base'
  },
  name: 'Base',
  parameters: {
    docs: {
      source: {
        code: \`<UsaButton variant="base">Button</UsaButton>\`
      }
    }
  }
}`,...(x=(w=c.parameters)==null?void 0:w.docs)==null?void 0:x.source}}};var C,I,W;u.parameters={...u.parameters,docs:{...(C=u.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    variant: 'outline'
  },
  name: 'Outline',
  parameters: {
    docs: {
      source: {
        code: \`<UsaButton variant="outline">Button</UsaButton>\`
      }
    }
  }
}`,...(W=(I=u.parameters)==null?void 0:I.docs)==null?void 0:W.source}}};var _,$,j;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    variant: 'inverse'
  },
  decorators: [() => ({
    template: '<div class="usa-dark-background"><story /></div>'
  })],
  name: 'Inverse',
  parameters: {
    docs: {
      source: {
        code: \`<UsaButton variant="inverse">Button</UsaButton>\`
      }
    }
  }
}`,...(j=($=d.parameters)==null?void 0:$.docs)==null?void 0:j.source}}};var E,T,h;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    variant: 'unstyled'
  },
  name: 'Unstyled',
  parameters: {
    docs: {
      source: {
        code: \`<UsaButton variant="unstyled">Button</UsaButton>\`
      }
    }
  }
}`,...(h=(T=p.parameters)==null?void 0:T.docs)==null?void 0:h.source}}};var q,F,G;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    size: 'big'
  },
  name: 'Big',
  parameters: {
    docs: {
      source: {
        code: \`<UsaButton size="big">Button</UsaButton>\`
      }
    }
  }
}`,...(G=(F=m.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};var H,J,K;l.parameters={...l.parameters,docs:{...(H=l.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    disabled: true
  },
  name: 'Disabled',
  parameters: {
    docs: {
      source: {
        code: \`<UsaButton :disabled="true">Button</UsaButton>\`
      }
    }
  }
}`,...(K=(J=l.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var L,M,N;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    before: '⨂ '
  },
  name: 'Before Slot',
  parameters: {
    docs: {
      source: {
        code: \`<UsaButton><template #before>⨂ </template><template #default>Button</template></UsaButton>\`
      }
    }
  }
}`,...(N=(M=i.parameters)==null?void 0:M.docs)==null?void 0:N.source}}};var Q,R,V;B.parameters={...B.parameters,docs:{...(Q=B.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    after: ' ⨁'
  },
  name: 'After Slot',
  parameters: {
    docs: {
      source: {
        code: \`<UsaButton><template #default>Button</template><template #after> ⨁</template></UsaButton>\`
      }
    }
  }
}`,...(V=(R=B.parameters)==null?void 0:R.docs)==null?void 0:V.source}}};const tt=["DefaultButton","SecondaryButton","AccentCoolButton","AccentWarmButton","BaseButton","OutlineButton","InverseButton","UnstyledButton","BigButton","DisabledButton","BeforeSlotButton","AfterSlotButton"];export{r as AccentCoolButton,s as AccentWarmButton,B as AfterSlotButton,c as BaseButton,i as BeforeSlotButton,m as BigButton,n as DefaultButton,l as DisabledButton,d as InverseButton,u as OutlineButton,o as SecondaryButton,p as UnstyledButton,tt as __namedExportsOrder,Z as default};
