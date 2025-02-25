import{s as J,c as G,J as Q,_ as W,g as p,n as f,b as X,o as Y,r as y,d as Z,v as _}from"./vue.esm-bundler-DsKf3Hbt.js";import{_ as ee}from"./UsaAlert-Bby61V80.js";import"./BaseHeading-CVYvBzV4.js";const se=["aria-label"],a={__name:"UsaSiteAlert",props:{variant:{type:String,default:"emergency",validator(e){const t=["info","emergency"].includes(e);return t||console.warn(`'${e}' is not a valid site alert variant`),t}},slim:{type:Boolean,default:!1},noIcon:{type:Boolean,default:!1},role:{type:String,default:""},heading:{type:String,default:""},headingTag:{type:String,default:"h2"},customClasses:{type:Object,default:()=>({root:[],body:[],heading:[]})},ariaLabel:{type:String,default:"Site alert"}},setup(e){const t=e,F=J(()=>[{"usa-site-alert--slim":t.slim,"usa-site-alert--no-icon":t.noIcon,"usa-site-alert--info":t.variant==="info","usa-site-alert--emergency":t.variant==="emergency"}]);return(n,ae)=>{var h;return Y(),G("section",{class:f(["usa-site-alert",F.value]),"aria-label":e.ariaLabel},[Q(X(ee),{class:f((h=e.customClasses)==null?void 0:h.root),slim:e.slim,role:e.role,heading:e.heading,"heading-tag":e.headingTag,"custom-classes":e.customClasses},W({_:2},[n.$slots.heading?{name:"heading",fn:p(()=>[y(n.$slots,"heading",{},()=>[Z(_(e.heading),1)])]),key:"0"}:void 0,n.$slots.message?{name:"message",fn:p(()=>[y(n.$slots,"message")]),key:"1"}:{name:"default",fn:p(()=>[y(n.$slots,"default")]),key:"2"}]),1032,["class","slim","role","heading","heading-tag","custom-classes"])],10,se)}}};a.__docgenInfo={exportName:"default",displayName:"UsaSiteAlert",type:1,props:[{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"headingTag",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'"h2"'},{name:"customClasses",global:!1,description:"",tags:[],required:!1,type:"Record<string, any>",declarations:[],schema:"Record<string, any>",default:`() => {
    return {
        root: [],
        body: [],
        heading: [],
    };
}`},{name:"variant",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'"emergency"'},{name:"slim",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]},default:"false"},{name:"noIcon",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]},default:"false"},{name:"role",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'""'},{name:"heading",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'""'},{name:"ariaLabel",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'"Site alert"'}],events:[],slots:[{name:"heading",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}},{name:"message",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}},{name:"default",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}}],exposed:[{name:"headingTag",type:"string",description:"",declarations:[],schema:"string"},{name:"customClasses",type:"Record<string, any>",description:"",declarations:[],schema:"Record<string, any>"},{name:"variant",type:"string",description:"",declarations:[],schema:"string"},{name:"slim",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"noIcon",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"role",type:"string",description:"",declarations:[],schema:"string"},{name:"heading",type:"string",description:"",declarations:[],schema:"string"},{name:"ariaLabel",type:"string",description:"",declarations:[],schema:"string"}],sourceFiles:"/home/runner/work/vue-uswds/vue-uswds/src/components/UsaSiteAlert/UsaSiteAlert.vue"};const s={variant:a.props.variant.default,slim:a.props.slim.default,noIcon:a.props.noIcon.default,role:a.props.role.default,heading:a.props.heading.default,headingTag:a.props.headingTag.default,customClasses:a.props.customClasses.default()},oe={component:a,title:"Components/UsaSiteAlert",argTypes:{variant:{options:["info","emergency"],control:{type:"select"}},slim:{control:{type:"boolean"}},noIcon:{control:{type:"boolean"}},role:{control:{type:"text"}},heading:{control:{type:"text"},table:{category:"props"}},headingTag:{options:["h1","h2","h3","h4","h5","h6"],control:{type:"select"}},customClasses:{control:{type:"object"}},"slot:heading":{control:{type:"text"},name:"heading",table:{category:"slots"}},default:{control:{type:"text"}},message:{control:{type:"text"}}},args:{variant:s.variant,slim:s.slim,noIcon:s.noIcon,role:s.role,heading:s.heading,headingTag:s.headingTag,customClasses:s.customClasses,default:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.","slot:heading":"",message:""},render:e=>({components:{UsaSiteAlert:a},props:Object.keys(a.props),setup(){return{args:e}},template:`
    <UsaSiteAlert
      :variant="args.variant"
      :slim="args.slim"
      :no-icon="args.noIcon"
      :role="args.role"
      :heading="args.heading"
      :heading-tag="args.headingTag"
      :custom-classes="args.customClasses">
        <template v-if="!!args['slot:heading']" #heading>${e["slot:heading"]}</template>
        <template v-if="!!args.default" #default>${e.default}</template>
        <template v-if="!!args.message" #message>${e.message}</template>
    </UsaSiteAlert>`})},r={args:{...s,variant:"info",heading:"Short alert message"},name:"Info",parameters:{docs:{source:{code:'<UsaSiteAlert variant="info" heading="Short alert message">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</UsaSiteAlert>'}}}},o={args:{...s,heading:"Emergency alert message"},name:"Emergency",parameters:{docs:{source:{code:'<UsaSiteAlert heading="Emergency alert message">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</UsaSiteAlert>'}}}},i={args:{...s,slim:!0,heading:"Emergency alert message"},name:"Slim",parameters:{docs:{source:{code:'<UsaSiteAlert :slim="true" heading="Emergency alert message">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</UsaSiteAlert>'}}}},l={args:{...s,noIcon:!0,heading:"Emergency alert message"},name:"No Icon",parameters:{docs:{source:{code:'<UsaSiteAlert :no-icon="true" heading="Emergency alert message">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</UsaSiteAlert>'}}}},c={args:{...s,slim:!0,noIcon:!0,heading:"Emergency alert message"},name:"Slim and No Icon",parameters:{docs:{source:{code:'<UsaSiteAlert :slim="true" :no-icon="true" heading="Emergency alert message">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</UsaSiteAlert>'}}}},d={args:{...s,heading:"Custom CSS classes",customClasses:{root:["test-root-class"],body:["test-body-class"],heading:["test-heading-class"]},default:"Uses custom CSS classes."},name:"Custom Classes",parameters:{docs:{source:{code:`<UsaSiteAlert heading="Custom CSS classes" :custom-classes="{root: ['test-root-class'], body: ['test-body-class'], heading: ['test-heading-class']}">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</UsaSiteAlert>`}}}},m={args:{...s,role:"alertdialog"},name:"Custom Role Attribute",parameters:{docs:{source:{code:'<UsaSiteAlert role="alertdialog">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</UsaSiteAlert>'}}}},g={args:{...s,heading:"Emergency alert message","slot:heading":"Custom Heading Slot"},name:"Heading Slot",parameters:{docs:{source:{code:"<UsaSiteAlert><template #heading>Custom Heading Slot</template><template #default>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</template></UsaSiteAlert>"}}}},u={args:{...s,heading:"Emergency alert message",message:"Custom message slot content."},name:"Message Slot",parameters:{docs:{source:{code:'<UsaSiteAlert heading="Emergency alert message"><template #message>Custom message slot content.</template></UsaSiteAlert>'}}}};var S,A,b;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    variant: 'info',
    heading: 'Short alert message'
  },
  name: 'Info',
  parameters: {
    docs: {
      source: {
        code: \`<UsaSiteAlert variant="info" heading="Short alert message">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</UsaSiteAlert>\`
      }
    }
  }
}`,...(b=(A=r.parameters)==null?void 0:A.docs)==null?void 0:b.source}}};var C,U,v;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    heading: 'Emergency alert message'
  },
  name: 'Emergency',
  parameters: {
    docs: {
      source: {
        code: \`<UsaSiteAlert heading="Emergency alert message">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</UsaSiteAlert>\`
      }
    }
  }
}`,...(v=(U=o.parameters)==null?void 0:U.docs)==null?void 0:v.source}}};var E,I,k;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    slim: true,
    heading: 'Emergency alert message'
  },
  name: 'Slim',
  parameters: {
    docs: {
      source: {
        code: \`<UsaSiteAlert :slim="true" heading="Emergency alert message">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</UsaSiteAlert>\`
      }
    }
  }
}`,...(k=(I=i.parameters)==null?void 0:I.docs)==null?void 0:k.source}}};var L,q,N;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    noIcon: true,
    heading: 'Emergency alert message'
  },
  name: 'No Icon',
  parameters: {
    docs: {
      source: {
        code: \`<UsaSiteAlert :no-icon="true" heading="Emergency alert message">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</UsaSiteAlert>\`
      }
    }
  }
}`,...(N=(q=l.parameters)==null?void 0:q.docs)==null?void 0:N.source}}};var P,R,T;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    slim: true,
    noIcon: true,
    heading: 'Emergency alert message'
  },
  name: 'Slim and No Icon',
  parameters: {
    docs: {
      source: {
        code: \`<UsaSiteAlert :slim="true" :no-icon="true" heading="Emergency alert message">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</UsaSiteAlert>\`
      }
    }
  }
}`,...(T=(R=c.parameters)==null?void 0:R.docs)==null?void 0:T.source}}};var $,w,H;d.parameters={...d.parameters,docs:{...($=d.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    heading: 'Custom CSS classes',
    customClasses: {
      root: ['test-root-class'],
      body: ['test-body-class'],
      heading: ['test-heading-class']
    },
    default: 'Uses custom CSS classes.'
  },
  name: 'Custom Classes',
  parameters: {
    docs: {
      source: {
        code: \`<UsaSiteAlert heading="Custom CSS classes" :custom-classes="{root: ['test-root-class'], body: ['test-body-class'], heading: ['test-heading-class']}">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</UsaSiteAlert>\`
      }
    }
  }
}`,...(H=(w=d.parameters)==null?void 0:w.docs)==null?void 0:H.source}}};var x,j,V;m.parameters={...m.parameters,docs:{...(x=m.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    role: 'alertdialog'
  },
  name: 'Custom Role Attribute',
  parameters: {
    docs: {
      source: {
        code: \`<UsaSiteAlert role="alertdialog">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</UsaSiteAlert>\`
      }
    }
  }
}`,...(V=(j=m.parameters)==null?void 0:j.docs)==null?void 0:V.source}}};var B,O,M;g.parameters={...g.parameters,docs:{...(B=g.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    heading: 'Emergency alert message',
    'slot:heading': 'Custom Heading Slot'
  },
  name: 'Heading Slot',
  parameters: {
    docs: {
      source: {
        code: \`<UsaSiteAlert><template #heading>Custom Heading Slot</template><template #default>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</template></UsaSiteAlert>\`
      }
    }
  }
}`,...(M=(O=g.parameters)==null?void 0:O.docs)==null?void 0:M.source}}};var K,z,D;u.parameters={...u.parameters,docs:{...(K=u.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    heading: 'Emergency alert message',
    message: 'Custom message slot content.'
  },
  name: 'Message Slot',
  parameters: {
    docs: {
      source: {
        code: \`<UsaSiteAlert heading="Emergency alert message"><template #message>Custom message slot content.</template></UsaSiteAlert>\`
      }
    }
  }
}`,...(D=(z=u.parameters)==null?void 0:z.docs)==null?void 0:D.source}}};const ie=["InfoSiteAlert","EmergencySiteAlert","SlimSiteAlert","NoIconSiteAlert","SlimAndNoIconSiteAlert","CustomClassesSiteAlert","CustomRoleAlert","HeadingSlotAlert","MessageSlotAlert"];export{d as CustomClassesSiteAlert,m as CustomRoleAlert,o as EmergencySiteAlert,g as HeadingSlotAlert,r as InfoSiteAlert,u as MessageSlotAlert,l as NoIconSiteAlert,c as SlimAndNoIconSiteAlert,i as SlimSiteAlert,ie as __namedExportsOrder,oe as default};
