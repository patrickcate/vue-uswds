import{s as D,c as N,a as g,I as j,g as O,n as l,b as V,r as f,o as $,d as K,v as E}from"./vue.esm-bundler-DlC1_45x.js";import{n as z}from"./unique-id-DrlS73OY.js";import{_ as F}from"./BaseHeading-BkBCpxXB.js";import"./common-cfad2wKl.js";import"./constants-BA52rpFi.js";const A=["aria-labelledby"],e={__name:"UsaSummaryBox",props:{id:{type:String,default:""},heading:{type:String,default:"Key information",validator(a){return a!==""}},headingTag:{type:String,default:"h2"},customClasses:{type:Object,default:()=>({body:[],heading:[],text:[]})}},setup(a){const R=a,u=D(()=>R.id||z("usa-summary-box"));return(c,J)=>{var d,y,h;return $(),N("div",{class:"usa-summary-box",role:"region","aria-labelledby":u.value},[g("div",{class:l(["usa-summary-box__body",[(d=a.customClasses)==null?void 0:d.body]])},[j(V(F),{id:u.value,class:l(["usa-summary-box__heading",(y=a.customClasses)==null?void 0:y.heading]),tag:a.headingTag},{default:O(()=>[f(c.$slots,"heading",{},()=>[K(E(a.heading),1)])]),_:3},8,["id","class","tag"]),g("div",{class:l(["usa-summary-box__text",(h=a.customClasses)==null?void 0:h.text])},[f(c.$slots,"default")],2)],2)],8,A)}}};e.__docgenInfo={exportName:"default",displayName:"UsaSummaryBox",type:1,props:[{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"headingTag",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'"h2"'},{name:"id",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'""'},{name:"customClasses",global:!1,description:"",tags:[],required:!1,type:"Record<string, any>",declarations:[],schema:"Record<string, any>",default:`() => {
    return {
        body: [],
        heading: [],
        text: [],
    };
}`},{name:"heading",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'"Key information"'}],events:[],slots:[{name:"heading",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}},{name:"default",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}}],exposed:[{name:"headingTag",type:"string",description:"",declarations:[],schema:"string"},{name:"id",type:"string",description:"",declarations:[],schema:"string"},{name:"customClasses",type:"Record<string, any>",description:"",declarations:[],schema:"Record<string, any>"},{name:"heading",type:"string",description:"",declarations:[],schema:"string"}],sourceFiles:"/home/runner/work/vue-uswds/vue-uswds/src/components/UsaSummaryBox/UsaSummaryBox.vue"};const s={id:e.props.id.default,heading:e.props.heading.default,headingTag:e.props.headingTag.default,customClasses:e.props.customClasses.default()},Z={component:e,title:"Components/UsaSummaryBox",argTypes:{id:{control:{type:"text"}},heading:{control:{type:"text"},table:{category:"props"}},headingTag:{options:["h1","h2","h3","h4","h5","h6"],control:{type:"select"}},customClasses:{control:{type:"object"}},"slot:heading":{control:{type:"text"},name:"heading",table:{category:"slots"}},default:{control:{type:"text"}}},args:{id:s.id,heading:s.heading,headingTag:s.headingTag,customClasses:s.customClasses,"slot:heading":"",default:`<ul class="usa-list">
      <li>If you are under a winter storm warning, <a class="usa-summary-box__link" href="#">find shelter</a> right away.</li>
      <li>Sign up for <a class="usa-summary-box__link" href="#">your community's warning system</a>.</li>
      <li>Learn the signs of, and basic treatments for, <a class="usa-summary-box__link" href="#">frostbite</a> and <a class="usa-summary-box__link" href="#">hypothermia</a>.</li>
      <li>Gather emergency supplies for your <a class="usa-summary-box__link" href="#">home</a> and your <a class="usa-summary-box__link" href="#">car</a>.</li>
    </ul>`},render:a=>({components:{UsaSummaryBox:e},props:Object.keys(e.props),setup(){return{args:a}},template:`
      <UsaSummaryBox :id="args.id" :heading="args.heading" :heading-tag="args.headingTag" :custom-classes="args.customClasses">
        <template v-if="!!args['slot:heading']" #heading>${a["slot:heading"]}</template>
        <template v-if="!!args.default" #default>${a.default}</template>
      </UsaSummaryBox>`})},r={args:{...s},name:"Default",parameters:{docs:{source:{code:`<UsaSummaryBox>
        <ul class="usa-list">
          <li>If you are under a winter storm warning, <a class="usa-summary-box__link" href="#">find shelter</a> right away.</li>
          <li>Sign up for <a class="usa-summary-box__link" href="#">your community's warning system</a>.</li>
          <li>Learn the signs of, and basic treatments for, <a class="usa-summary-box__link" href="#">frostbite</a> and <a class="usa-summary-box__link" href="#">hypothermia</a>.</li>
          <li>Gather emergency supplies for your <a class="usa-summary-box__link" href="#">home</a> and your <a class="usa-summary-box__link" href="#">car</a>.</li>
        </ul>
        </UsaSummaryBox>`}}}},n={args:{...s,heading:"Custom Heading"},name:"Custom Heading",parameters:{docs:{source:{code:`<UsaSummaryBox heading="Custom Heading">
        <ul class="usa-list">
          <li>If you are under a winter storm warning, <a class="usa-summary-box__link" href="#">find shelter</a> right away.</li>
          <li>Sign up for <a class="usa-summary-box__link" href="#">your community's warning system</a>.</li>
          <li>Learn the signs of, and basic treatments for, <a class="usa-summary-box__link" href="#">frostbite</a> and <a class="usa-summary-box__link" href="#">hypothermia</a>.</li>
          <li>Gather emergency supplies for your <a class="usa-summary-box__link" href="#">home</a> and your <a class="usa-summary-box__link" href="#">car</a>.</li>
        </ul>
        </UsaSummaryBox>`}}}},o={args:{...s,"slot:heading":"<em>Custom Heading Slot</em>"},name:"Heading Slot",parameters:{docs:{source:{code:`<UsaSummaryBox><template #heading><em>Custom Heading Slot</em></template><template #default>
        <ul class="usa-list">
          <li>If you are under a winter storm warning, <a class="usa-summary-box__link" href="#">find shelter</a> right away.</li>
          <li>Sign up for <a class="usa-summary-box__link" href="#">your community's warning system</a>.</li>
          <li>Learn the signs of, and basic treatments for, <a class="usa-summary-box__link" href="#">frostbite</a> and <a class="usa-summary-box__link" href="#">hypothermia</a>.</li>
          <li>Gather emergency supplies for your <a class="usa-summary-box__link" href="#">home</a> and your <a class="usa-summary-box__link" href="#">car</a>.</li>
        </ul></template>
      </UsaSummaryBox>`}}}},t={args:{...s,heading:"Custom Heading Tag",headingTag:"h4"},name:"Custom Heading Tag",parameters:{docs:{source:{code:`<UsaSummaryBox heading="Custom Heading" heading-tag="h4">
        <ul class="usa-list">
          <li>If you are under a winter storm warning, <a class="usa-summary-box__link" href="#">find shelter</a> right away.</li>
          <li>Sign up for <a class="usa-summary-box__link" href="#">your community's warning system</a>.</li>
          <li>Learn the signs of, and basic treatments for, <a class="usa-summary-box__link" href="#">frostbite</a> and <a class="usa-summary-box__link" href="#">hypothermia</a>.</li>
          <li>Gather emergency supplies for your <a class="usa-summary-box__link" href="#">home</a> and your <a class="usa-summary-box__link" href="#">car</a>.</li>
        </ul>
      </UsaSummaryBox>`}}}},i={args:{...s,id:"custom-id"},name:"Custom ID",parameters:{docs:{source:{code:`<UsaSummaryBox id="custom-id">
        <ul class="usa-list">
          <li>If you are under a winter storm warning, <a class="usa-summary-box__link" href="#">find shelter</a> right away.</li>
          <li>Sign up for <a class="usa-summary-box__link" href="#">your community's warning system</a>.</li>
          <li>Learn the signs of, and basic treatments for, <a class="usa-summary-box__link" href="#">frostbite</a> and <a class="usa-summary-box__link" href="#">hypothermia</a>.</li>
          <li>Gather emergency supplies for your <a class="usa-summary-box__link" href="#">home</a> and your <a class="usa-summary-box__link" href="#">car</a>.</li>
        </ul>
      </UsaSummaryBox>`}}}},m={args:{...s,customClasses:{body:["test-body-class"],heading:["test-heading-class"],text:["test-text-class"]}},name:"Custom Classes",parameters:{docs:{source:{code:`<UsaSummaryBox :custom-classes="{ body: ['test-body-class'], heading: ['test-heading-class'], text: ['test-text-class'] }">
        <ul class="usa-list">
          <li>If you are under a winter storm warning, <a class="usa-summary-box__link" href="#">find shelter</a> right away.</li>
          <li>Sign up for <a class="usa-summary-box__link" href="#">your community's warning system</a>.</li>
          <li>Learn the signs of, and basic treatments for, <a class="usa-summary-box__link" href="#">frostbite</a> and <a class="usa-summary-box__link" href="#">hypothermia</a>.</li>
          <li>Gather emergency supplies for your <a class="usa-summary-box__link" href="#">home</a> and your <a class="usa-summary-box__link" href="#">car</a>.</li>
        </ul>
      </UsaSummaryBox>`}}}};var p,_,x;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    ...defaultProps
  },
  name: 'Default',
  parameters: {
    docs: {
      source: {
        code: \`<UsaSummaryBox>
        <ul class="usa-list">
          <li>If you are under a winter storm warning, <a class="usa-summary-box__link" href="#">find shelter</a> right away.</li>
          <li>Sign up for <a class="usa-summary-box__link" href="#">your community's warning system</a>.</li>
          <li>Learn the signs of, and basic treatments for, <a class="usa-summary-box__link" href="#">frostbite</a> and <a class="usa-summary-box__link" href="#">hypothermia</a>.</li>
          <li>Gather emergency supplies for your <a class="usa-summary-box__link" href="#">home</a> and your <a class="usa-summary-box__link" href="#">car</a>.</li>
        </ul>
        </UsaSummaryBox>\`
      }
    }
  }
}`,...(x=(_=r.parameters)==null?void 0:_.docs)==null?void 0:x.source}}};var b,k,S;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    heading: 'Custom Heading'
  },
  name: 'Custom Heading',
  parameters: {
    docs: {
      source: {
        code: \`<UsaSummaryBox heading="Custom Heading">
        <ul class="usa-list">
          <li>If you are under a winter storm warning, <a class="usa-summary-box__link" href="#">find shelter</a> right away.</li>
          <li>Sign up for <a class="usa-summary-box__link" href="#">your community's warning system</a>.</li>
          <li>Learn the signs of, and basic treatments for, <a class="usa-summary-box__link" href="#">frostbite</a> and <a class="usa-summary-box__link" href="#">hypothermia</a>.</li>
          <li>Gather emergency supplies for your <a class="usa-summary-box__link" href="#">home</a> and your <a class="usa-summary-box__link" href="#">car</a>.</li>
        </ul>
        </UsaSummaryBox>\`
      }
    }
  }
}`,...(S=(k=n.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};var w,C,B;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    'slot:heading': '<em>Custom Heading Slot</em>'
  },
  name: 'Heading Slot',
  parameters: {
    docs: {
      source: {
        code: \`<UsaSummaryBox><template #heading><em>Custom Heading Slot</em></template><template #default>
        <ul class="usa-list">
          <li>If you are under a winter storm warning, <a class="usa-summary-box__link" href="#">find shelter</a> right away.</li>
          <li>Sign up for <a class="usa-summary-box__link" href="#">your community's warning system</a>.</li>
          <li>Learn the signs of, and basic treatments for, <a class="usa-summary-box__link" href="#">frostbite</a> and <a class="usa-summary-box__link" href="#">hypothermia</a>.</li>
          <li>Gather emergency supplies for your <a class="usa-summary-box__link" href="#">home</a> and your <a class="usa-summary-box__link" href="#">car</a>.</li>
        </ul></template>
      </UsaSummaryBox>\`
      }
    }
  }
}`,...(B=(C=o.parameters)==null?void 0:C.docs)==null?void 0:B.source}}};var U,H,I;t.parameters={...t.parameters,docs:{...(U=t.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    heading: 'Custom Heading Tag',
    headingTag: 'h4'
  },
  name: 'Custom Heading Tag',
  parameters: {
    docs: {
      source: {
        code: \`<UsaSummaryBox heading="Custom Heading" heading-tag="h4">
        <ul class="usa-list">
          <li>If you are under a winter storm warning, <a class="usa-summary-box__link" href="#">find shelter</a> right away.</li>
          <li>Sign up for <a class="usa-summary-box__link" href="#">your community's warning system</a>.</li>
          <li>Learn the signs of, and basic treatments for, <a class="usa-summary-box__link" href="#">frostbite</a> and <a class="usa-summary-box__link" href="#">hypothermia</a>.</li>
          <li>Gather emergency supplies for your <a class="usa-summary-box__link" href="#">home</a> and your <a class="usa-summary-box__link" href="#">car</a>.</li>
        </ul>
      </UsaSummaryBox>\`
      }
    }
  }
}`,...(I=(H=t.parameters)==null?void 0:H.docs)==null?void 0:I.source}}};var T,v,G;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    id: 'custom-id'
  },
  name: 'Custom ID',
  parameters: {
    docs: {
      source: {
        code: \`<UsaSummaryBox id="custom-id">
        <ul class="usa-list">
          <li>If you are under a winter storm warning, <a class="usa-summary-box__link" href="#">find shelter</a> right away.</li>
          <li>Sign up for <a class="usa-summary-box__link" href="#">your community's warning system</a>.</li>
          <li>Learn the signs of, and basic treatments for, <a class="usa-summary-box__link" href="#">frostbite</a> and <a class="usa-summary-box__link" href="#">hypothermia</a>.</li>
          <li>Gather emergency supplies for your <a class="usa-summary-box__link" href="#">home</a> and your <a class="usa-summary-box__link" href="#">car</a>.</li>
        </ul>
      </UsaSummaryBox>\`
      }
    }
  }
}`,...(G=(v=i.parameters)==null?void 0:v.docs)==null?void 0:G.source}}};var L,P,q;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    customClasses: {
      body: ['test-body-class'],
      heading: ['test-heading-class'],
      text: ['test-text-class']
    }
  },
  name: 'Custom Classes',
  parameters: {
    docs: {
      source: {
        code: \`<UsaSummaryBox :custom-classes="{ body: ['test-body-class'], heading: ['test-heading-class'], text: ['test-text-class'] }">
        <ul class="usa-list">
          <li>If you are under a winter storm warning, <a class="usa-summary-box__link" href="#">find shelter</a> right away.</li>
          <li>Sign up for <a class="usa-summary-box__link" href="#">your community's warning system</a>.</li>
          <li>Learn the signs of, and basic treatments for, <a class="usa-summary-box__link" href="#">frostbite</a> and <a class="usa-summary-box__link" href="#">hypothermia</a>.</li>
          <li>Gather emergency supplies for your <a class="usa-summary-box__link" href="#">home</a> and your <a class="usa-summary-box__link" href="#">car</a>.</li>
        </ul>
      </UsaSummaryBox>\`
      }
    }
  }
}`,...(q=(P=m.parameters)==null?void 0:P.docs)==null?void 0:q.source}}};const aa=["DefaultSummaryBox","CustomHeadingSummaryBox","HeadingSlotSummaryBox","CustomHeadingTagSummaryBox","CustomIdSummaryBox","CustomClassesSummaryBox"];export{m as CustomClassesSummaryBox,n as CustomHeadingSummaryBox,t as CustomHeadingTagSummaryBox,i as CustomIdSummaryBox,r as DefaultSummaryBox,o as HeadingSlotSummaryBox,aa as __namedExportsOrder,Z as default};
