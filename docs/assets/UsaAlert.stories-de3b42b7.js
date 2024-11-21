import{U as s}from"./UsaAlert-a21ade00.js";import"./vue.esm-bundler-d9807bdf.js";import"./BaseHeading-19544782.js";const e={variant:s.props.variant.default,slim:s.props.slim.default,noIcon:s.props.noIcon.default,role:s.props.role.default,heading:s.props.heading.default,headingTag:s.props.headingTag.default,customClasses:s.props.customClasses.default()},ee={component:s,title:"Components/UsaAlert",argTypes:{variant:{options:["","info","warning","error","success"],control:{type:"select"}},slim:{control:{type:"boolean"}},noIcon:{control:{type:"boolean"}},role:{control:{type:"text"}},heading:{control:{type:"text"},table:{category:"props"}},headingTag:{options:["h1","h2","h3","h4","h5","h6"],control:{type:"select"}},customClasses:{control:{type:"object"}},default:{control:{type:"text"}},"slot:heading":{control:{type:"text"},name:"heading",table:{category:"slots"}},message:{control:{type:"text"}}},args:{variant:e.variant,slim:e.slim,noIcon:e.noIcon,role:e.role,heading:e.heading,headingTag:e.headingTag,customClasses:e.customClasses,default:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.","slot:heading":"",message:""},render:X=>({components:{UsaAlert:s},props:Object.keys(s.props),setup(){return{args:X}},template:`
    <UsaAlert
      :variant="args.variant"
      :slim="args.slim"
      :no-icon="args.noIcon"
      :role="args.role"
      :heading="args.heading"
      :heading-tag="args.headingTag"
      :custom-classes="args.customClasses"
    >
      <template #heading>{{ args['slot:heading'] }}</template>
      <template #default>{{ args.default }}</template>
      <template #message>{{ args.message }}</template>
    </UsaAlert>`})},a={args:{variant:"info",heading:"Informative status"},name:"Info",parameters:{docs:{source:{code:'<UsaAlert variant="info" heading="Informative status">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</UsaAlert>'}}}},t={args:{variant:"warning",heading:"Warning status"},name:"Warning",parameters:{docs:{source:{code:'<UsaAlert variant="warning" heading="Warning status">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</UsaAlert>'}}}},r={args:{...e,variant:"error",heading:"Error status"},name:"Error",parameters:{docs:{source:{code:'<UsaAlert variant="error" heading="Error status">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</UsaAlert>'}}}},n={args:{...e,variant:"success",heading:"Success status"},name:"Success",parameters:{docs:{source:{code:'<UsaAlert variant="success" heading="Success status">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</UsaAlert>'}}}},o={args:{...e,variant:"info",slim:!0,heading:"Informative status"},name:"Slim",parameters:{docs:{source:{code:'<UsaAlert :slim="true" variant="info" heading="Informative status">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</UsaAlert>'}}}},i={args:{...e,variant:"info",noIcon:!0,heading:"Informative status"},name:"No Icon",parameters:{docs:{source:{code:'<UsaAlert :no-icon="true" variant="info" heading="Informative status">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</UsaAlert>'}}}},d={args:{...e,variant:"info",slim:!0,noIcon:!0,heading:"Informative status"},name:"Slim and No Icon",parameters:{docs:{source:{code:'<UsaAlert :no-icon="true" :slim="true" variant="info" heading="Informative status">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</UsaAlert>'}}}},c={args:{...e,variant:"info",heading:"Custom CSS classes",customClasses:{body:["test-body-class"],heading:["test-heading-class"]},default:"Uses custom CSS classes."},name:"Custom Classes",parameters:{docs:{source:{code:`<UsaAlert :custom-classes="{ body: ['test-body-class'], heading: ['test-heading-class'] }" variant="info" heading="Custom CSS classes">Uses custom CSS classes.</UsaAlert>`}}}},m={args:{...e,variant:"info",role:"alertdialog"},name:"Custom Role Attribute",parameters:{docs:{source:{code:'<UsaAlert :role="alertdialog" variant="info" heading="Informative status">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</UsaAlert>'}}}},l={args:{...e,variant:"info",heading:"Custom Heading Tag",headingTag:"h4"},name:"Custom Heading Tag",parameters:{docs:{source:{code:'<UsaAlert heading-tag="h4" variant="info" heading="Custom Heading Tag">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</UsaAlert>'}}}},u={args:{...e,variant:"info","slot:heading":"Custom Heading Slot"},name:"Heading Slot",parameters:{docs:{source:{code:`<UsaAlert variant="info">
	<template #heading>Custom Heading Slot</template>
	<template #default>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</template>
</UsaAlert>`}}}},g={args:{...e,variant:"info",heading:"Informative status",message:"Custom message slot content."},name:"Message Slot",parameters:{docs:{source:{code:`<UsaAlert variant="info" heading="Informative status">
	<template #message>Custom message slot content.</template>
</UsaAlert>`}}}};var p,f,h;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    heading: 'Informative status'
  },
  name: 'Info',
  parameters: {
    docs: {
      source: {
        code: \`<UsaAlert variant="info" heading="Informative status">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</UsaAlert>\`
      }
    }
  }
}`,...(h=(f=a.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var A,v,U;t.parameters={...t.parameters,docs:{...(A=t.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    variant: 'warning',
    heading: 'Warning status'
  },
  name: 'Warning',
  parameters: {
    docs: {
      source: {
        code: \`<UsaAlert variant="warning" heading="Warning status">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</UsaAlert>\`
      }
    }
  }
}`,...(U=(v=t.parameters)==null?void 0:v.docs)==null?void 0:U.source}}};var S,C,I;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    variant: 'error',
    heading: 'Error status'
  },
  name: 'Error',
  parameters: {
    docs: {
      source: {
        code: \`<UsaAlert variant="error" heading="Error status">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</UsaAlert>\`
      }
    }
  }
}`,...(I=(C=r.parameters)==null?void 0:C.docs)==null?void 0:I.source}}};var y,L,T;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    variant: 'success',
    heading: 'Success status'
  },
  name: 'Success',
  parameters: {
    docs: {
      source: {
        code: \`<UsaAlert variant="success" heading="Success status">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</UsaAlert>\`
      }
    }
  }
}`,...(T=(L=n.parameters)==null?void 0:L.docs)==null?void 0:T.source}}};var b,H,P;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    variant: 'info',
    slim: true,
    heading: 'Informative status'
  },
  name: 'Slim',
  parameters: {
    docs: {
      source: {
        code: \`<UsaAlert :slim="true" variant="info" heading="Informative status">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</UsaAlert>\`
      }
    }
  }
}`,...(P=(H=o.parameters)==null?void 0:H.docs)==null?void 0:P.source}}};var E,N,W;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    variant: 'info',
    noIcon: true,
    heading: 'Informative status'
  },
  name: 'No Icon',
  parameters: {
    docs: {
      source: {
        code: \`<UsaAlert :no-icon="true" variant="info" heading="Informative status">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</UsaAlert>\`
      }
    }
  }
}`,...(W=(N=i.parameters)==null?void 0:N.docs)==null?void 0:W.source}}};var x,w,M;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    variant: 'info',
    slim: true,
    noIcon: true,
    heading: 'Informative status'
  },
  name: 'Slim and No Icon',
  parameters: {
    docs: {
      source: {
        code: \`<UsaAlert :no-icon="true" :slim="true" variant="info" heading="Informative status">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</UsaAlert>\`
      }
    }
  }
}`,...(M=(w=d.parameters)==null?void 0:w.docs)==null?void 0:M.source}}};var R,_,j;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    variant: 'info',
    heading: 'Custom CSS classes',
    customClasses: {
      body: ['test-body-class'],
      heading: ['test-heading-class']
    },
    default: 'Uses custom CSS classes.'
  },
  name: 'Custom Classes',
  parameters: {
    docs: {
      source: {
        code: \`<UsaAlert :custom-classes="{ body: ['test-body-class'], heading: ['test-heading-class'] }" variant="info" heading="Custom CSS classes">Uses custom CSS classes.</UsaAlert>\`
      }
    }
  }
}`,...(j=(_=c.parameters)==null?void 0:_.docs)==null?void 0:j.source}}};var O,k,q;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    variant: 'info',
    role: 'alertdialog'
  },
  name: 'Custom Role Attribute',
  parameters: {
    docs: {
      source: {
        code: \`<UsaAlert :role="alertdialog" variant="info" heading="Informative status">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</UsaAlert>\`
      }
    }
  }
}`,...(q=(k=m.parameters)==null?void 0:k.docs)==null?void 0:q.source}}};var z,B,D;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    variant: 'info',
    heading: 'Custom Heading Tag',
    headingTag: 'h4'
  },
  name: 'Custom Heading Tag',
  parameters: {
    docs: {
      source: {
        code: \`<UsaAlert heading-tag="h4" variant="info" heading="Custom Heading Tag">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</UsaAlert>\`
      }
    }
  }
}`,...(D=(B=l.parameters)==null?void 0:B.docs)==null?void 0:D.source}}};var F,G,J;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    variant: 'info',
    'slot:heading': 'Custom Heading Slot'
  },
  name: 'Heading Slot',
  parameters: {
    docs: {
      source: {
        code: \`<UsaAlert variant="info">\\n\\t<template #heading>Custom Heading Slot</template>\\n\\t<template #default>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</template>\\n</UsaAlert>\`
      }
    }
  }
}`,...(J=(G=u.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,Q,V;g.parameters={...g.parameters,docs:{...(K=g.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    variant: 'info',
    heading: 'Informative status',
    message: 'Custom message slot content.'
  },
  name: 'Message Slot',
  parameters: {
    docs: {
      source: {
        code: \`<UsaAlert variant="info" heading="Informative status">\\n\\t<template #message>Custom message slot content.</template>\\n</UsaAlert>\`
      }
    }
  }
}`,...(V=(Q=g.parameters)==null?void 0:Q.docs)==null?void 0:V.source}}};const se=["InfoAlert","WarningAlert","ErrorAlert","SuccessAlert","SlimAlert","NoIconAlert","SlimAndNoIconAlert","CustomClassesAlert","CustomRoleAlert","HeadingTagAlert","HeadingSlotAlert","MessageSlotAlert"];export{c as CustomClassesAlert,m as CustomRoleAlert,r as ErrorAlert,u as HeadingSlotAlert,l as HeadingTagAlert,a as InfoAlert,g as MessageSlotAlert,i as NoIconAlert,o as SlimAlert,d as SlimAndNoIconAlert,n as SuccessAlert,t as WarningAlert,se as __namedExportsOrder,ee as default};
