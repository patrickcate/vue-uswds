import{_ as s}from"./UsaAlert-Dj2CIQ7g.js";import"./vue.esm-bundler-DlC1_45x.js";import"./BaseHeading-BkBCpxXB.js";const e={variant:s.props.variant.default,slim:s.props.slim.default,noIcon:s.props.noIcon.default,role:s.props.role.default,heading:s.props.heading.default,headingTag:s.props.headingTag.default,customClasses:s.props.customClasses.default()},ee={component:s,title:"Components/UsaAlert",argTypes:{variant:{options:["","info","warning","error","success"],control:{type:"select"}},slim:{control:{type:"boolean"}},noIcon:{control:{type:"boolean"}},role:{control:{type:"text"}},heading:{control:{type:"text"},table:{category:"props"}},headingTag:{options:["h1","h2","h3","h4","h5","h6"],control:{type:"select"}},customClasses:{control:{type:"object"}},default:{control:{type:"text"}},"slot:heading":{control:{type:"text"},name:"heading",table:{category:"slots"}},message:{control:{type:"text"}}},args:{variant:e.variant,slim:e.slim,noIcon:e.noIcon,role:e.role,heading:e.heading,headingTag:e.headingTag,customClasses:e.customClasses,default:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.","slot:heading":"",message:""},render:a=>({components:{UsaAlert:s},props:Object.keys(s.props),setup(){return{args:a}},template:`
    <UsaAlert
      :variant="args.variant"
      :slim="args.slim"
      :no-icon="args.noIcon"
      :role="args.role"
      :heading="args.heading"
      :heading-tag="args.headingTag"
      :custom-classes="args.customClasses"
    >
      <template v-if="!!args['slot:heading']" #heading>${a["slot:heading"]}</template>
      <template v-if="!!args.default" #default>${a.default}</template>
      <template v-if="!!args.message" #message>${a.message}</template>
    </UsaAlert>`})},t={args:{variant:"info",heading:"Informative status"},name:"Info",parameters:{docs:{source:{code:'<UsaAlert variant="info" heading="Informative status">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</UsaAlert>'}}}},r={args:{variant:"warning",heading:"Warning status"},name:"Warning",parameters:{docs:{source:{code:'<UsaAlert variant="warning" heading="Warning status">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</UsaAlert>'}}}},n={args:{...e,variant:"error",heading:"Error status"},name:"Error",parameters:{docs:{source:{code:'<UsaAlert variant="error" heading="Error status">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</UsaAlert>'}}}},o={args:{...e,variant:"success",heading:"Success status"},name:"Success",parameters:{docs:{source:{code:'<UsaAlert variant="success" heading="Success status">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</UsaAlert>'}}}},i={args:{...e,variant:"info",slim:!0,heading:"Informative status"},name:"Slim",parameters:{docs:{source:{code:'<UsaAlert :slim="true" variant="info" heading="Informative status">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</UsaAlert>'}}}},d={args:{...e,variant:"info",noIcon:!0,heading:"Informative status"},name:"No Icon",parameters:{docs:{source:{code:'<UsaAlert :no-icon="true" variant="info" heading="Informative status">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</UsaAlert>'}}}},c={args:{...e,variant:"info",slim:!0,noIcon:!0,heading:"Informative status"},name:"Slim and No Icon",parameters:{docs:{source:{code:'<UsaAlert :no-icon="true" :slim="true" variant="info" heading="Informative status">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</UsaAlert>'}}}},m={args:{...e,variant:"info",heading:"Custom CSS classes",customClasses:{body:["test-body-class"],heading:["test-heading-class"]},default:"Uses custom CSS classes."},name:"Custom Classes",parameters:{docs:{source:{code:`<UsaAlert :custom-classes="{ body: ['test-body-class'], heading: ['test-heading-class'] }" variant="info" heading="Custom CSS classes">Uses custom CSS classes.</UsaAlert>`}}}},l={args:{...e,variant:"info",role:"alertdialog"},name:"Custom Role Attribute",parameters:{docs:{source:{code:'<UsaAlert :role="alertdialog" variant="info" heading="Informative status">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</UsaAlert>'}}}},u={args:{...e,variant:"info",heading:"Custom Heading Tag",headingTag:"h4"},name:"Custom Heading Tag",parameters:{docs:{source:{code:'<UsaAlert heading-tag="h4" variant="info" heading="Custom Heading Tag">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</UsaAlert>'}}}},g={args:{...e,variant:"info","slot:heading":"Custom Heading Slot"},name:"Heading Slot",parameters:{docs:{source:{code:`<UsaAlert variant="info">
	<template #heading>Custom Heading Slot</template>
	<template #default>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</template>
</UsaAlert>`}}}},p={args:{...e,variant:"info",heading:"Informative status",message:"Custom message slot content."},name:"Message Slot",parameters:{docs:{source:{code:`<UsaAlert variant="info" heading="Informative status">
	<template #message>Custom message slot content.</template>
</UsaAlert>`}}}};var f,h,A;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(A=(h=t.parameters)==null?void 0:h.docs)==null?void 0:A.source}}};var v,U,S;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(S=(U=r.parameters)==null?void 0:U.docs)==null?void 0:S.source}}};var C,I,y;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(y=(I=n.parameters)==null?void 0:I.docs)==null?void 0:y.source}}};var L,T,b;o.parameters={...o.parameters,docs:{...(L=o.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(b=(T=o.parameters)==null?void 0:T.docs)==null?void 0:b.source}}};var H,P,E;i.parameters={...i.parameters,docs:{...(H=i.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(E=(P=i.parameters)==null?void 0:P.docs)==null?void 0:E.source}}};var N,W,x;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(x=(W=d.parameters)==null?void 0:W.docs)==null?void 0:x.source}}};var _,w,M;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(M=(w=c.parameters)==null?void 0:w.docs)==null?void 0:M.source}}};var R,$,j;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(j=($=m.parameters)==null?void 0:$.docs)==null?void 0:j.source}}};var O,k,q;l.parameters={...l.parameters,docs:{...(O=l.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(q=(k=l.parameters)==null?void 0:k.docs)==null?void 0:q.source}}};var z,B,D;u.parameters={...u.parameters,docs:{...(z=u.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(D=(B=u.parameters)==null?void 0:B.docs)==null?void 0:D.source}}};var F,G,J;g.parameters={...g.parameters,docs:{...(F=g.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(J=(G=g.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,Q,V;p.parameters={...p.parameters,docs:{...(K=p.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(V=(Q=p.parameters)==null?void 0:Q.docs)==null?void 0:V.source}}};const se=["InfoAlert","WarningAlert","ErrorAlert","SuccessAlert","SlimAlert","NoIconAlert","SlimAndNoIconAlert","CustomClassesAlert","CustomRoleAlert","HeadingTagAlert","HeadingSlotAlert","MessageSlotAlert"];export{m as CustomClassesAlert,l as CustomRoleAlert,n as ErrorAlert,g as HeadingSlotAlert,u as HeadingTagAlert,t as InfoAlert,p as MessageSlotAlert,d as NoIconAlert,i as SlimAlert,c as SlimAndNoIconAlert,o as SuccessAlert,r as WarningAlert,se as __namedExportsOrder,ee as default};
