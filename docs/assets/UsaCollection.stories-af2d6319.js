import{s as C,c as g,r as h,n as U,o as b}from"./vue.esm-bundler-2e7cedae.js";import{U as k}from"./UsaCollectionItem-4828e34b.js";import{U as w}from"./UsaCollectionHeading-811bc229.js";import"./BaseHeading-0ea88faf.js";import"./BaseLink-05a2e488.js";import"./constants-fce87d39.js";import"./_plugin-vue_export-helper-c27b6911.js";const m={__name:"UsaCollection",props:{condensed:{type:Boolean,default:!1}},setup(e){const u=e,f=C(()=>[{"usa-collection--condensed":u.condensed}]);return(y,v)=>(b(),g("ul",{class:U(["usa-collection",f.value])},[h(y.$slots,"default")],2))}},s=m;m.__docgenInfo={exportName:"default",displayName:"UsaCollection",type:1,props:[{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"condensed",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]},default:"false"}],events:[],slots:[{name:"default",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}}],exposed:[{name:"condensed",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}}],sourceFiles:"/home/runner/work/vue-uswds/vue-uswds/src/components/UsaCollection/UsaCollection.vue"};const t={condensed:s.props.condensed.default},a=`
  <UsaCollectionItem
    href="https://www.performance.gov/presidents-winners-press-release/"
    heading="Gears of Government President's Award winners"
  >
    Today, the Administration announces the winners of the Gears of Government President's Award. This program recognizes the contributions of individuals and teams across the federal workforce who make a profound difference in the lives of the American people.
  </UsaCollectionItem>
`,B={component:s,title:"Components/UsaCollection",argTypes:{condensed:{control:{type:"boolean"}},default:{control:{type:"text"}}},args:{condensed:t.condensed,default:a},render:e=>({components:{UsaCollection:s,UsaCollectionItem:k,UsaCollectionHeading:w},props:Object.keys(s.props),setup(){return{args:e}},template:`<UsaCollection :condensed="args.condensed">${e.default}</UsaCollection>`})},n={args:{...t},name:"Default",parameters:{docs:{source:{code:`<UsaCollection>${a}</UsaCollection>`}}}},o={args:{...t,condensed:!0},name:"Condensed",parameters:{docs:{source:{code:`<UsaCollection :condensed="true">${a}</UsaCollection>`}}}};var r,l,c;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(c=(l=n.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var d,i,p;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(p=(i=o.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};const D=["DefaultCollection","CondensedCollection"];export{o as CondensedCollection,n as DefaultCollection,D as __namedExportsOrder,B as default};
