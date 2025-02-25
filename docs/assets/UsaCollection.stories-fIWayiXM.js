import{s as y,c as C,r as g,n as h,o as U}from"./vue.esm-bundler-DsKf3Hbt.js";import{_ as b}from"./UsaCollectionItem-CshdLegk.js";import{_ as k}from"./UsaCollectionHeading-BrG4FVwe.js";import"./BaseHeading-CVYvBzV4.js";import"./BaseLink-BYp1-IWJ.js";import"./constants-BA52rpFi.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const e={__name:"UsaCollection",props:{condensed:{type:Boolean,default:!1}},setup(n){const m=n,u=y(()=>[{"usa-collection--condensed":m.condensed}]);return(f,_)=>(U(),C("ul",{class:h(["usa-collection",u.value])},[g(f.$slots,"default")],2))}};e.__docgenInfo={exportName:"default",displayName:"UsaCollection",type:1,props:[{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"condensed",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]},default:"false"}],events:[],slots:[{name:"default",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}}],exposed:[{name:"condensed",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}}],sourceFiles:"/home/runner/work/vue-uswds/vue-uswds/src/components/UsaCollection/UsaCollection.vue"};const a={condensed:e.props.condensed.default},t=`
  <UsaCollectionItem
    href="https://www.performance.gov/presidents-winners-press-release/"
    heading="Gears of Government President's Award winners"
  >
    Today, the Administration announces the winners of the Gears of Government President's Award. This program recognizes the contributions of individuals and teams across the federal workforce who make a profound difference in the lives of the American people.
  </UsaCollectionItem>
`,A={component:e,title:"Components/UsaCollection",argTypes:{condensed:{control:{type:"boolean"}},default:{control:{type:"text"}}},args:{condensed:a.condensed,default:t},render:n=>({components:{UsaCollection:e,UsaCollectionItem:b,UsaCollectionHeading:k},props:Object.keys(e.props),setup(){return{args:n}},template:`<UsaCollection :condensed="args.condensed">${n.default}</UsaCollection>`})},o={args:{...a},name:"Default",parameters:{docs:{source:{code:`<UsaCollection>${t}</UsaCollection>`}}}},s={args:{...a,condensed:!0},name:"Condensed",parameters:{docs:{source:{code:`<UsaCollection :condensed="true">${t}</UsaCollection>`}}}};var r,l,c;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    ...defaultProps
  },
  name: 'Default',
  parameters: {
    docs: {
      source: {
        code: \`<UsaCollection>\${testCollectionItem}</UsaCollection>\`
      }
    }
  }
}`,...(c=(l=o.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var d,i,p;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    condensed: true
  },
  name: 'Condensed',
  parameters: {
    docs: {
      source: {
        code: \`<UsaCollection :condensed="true">\${testCollectionItem}</UsaCollection>\`
      }
    }
  }
}`,...(p=(i=s.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};const B=["DefaultCollection","CondensedCollection"];export{s as CondensedCollection,o as DefaultCollection,B as __namedExportsOrder,A as default};
