import{s as r,c as o,r as n,m as i,o as l}from"./vue.esm-bundler-DlC1_45x.js";const d=["type","disabled"],c={__name:"UsaButton",props:{variant:{type:String,default:"",validator(e){return["","secondary","accent-cool","accent-warm","base","outline","inverse","unstyled"].includes(e)}},size:{type:String,default:"",validator(e){return["","big"].includes(e)}},type:{type:String,default:"button",validator(e){return["button","submit","reset"].includes(e)}},disabled:{type:Boolean,default:!1}},setup(e){const a=e,s=r(()=>[{"usa-button--secondary":a.variant==="secondary","usa-button--accent-cool":a.variant==="accent-cool","usa-button--accent-warm":a.variant==="accent-warm","usa-button--base":a.variant==="base","usa-button--outline":a.variant==="outline"||a.variant==="inverse","usa-button--inverse":a.variant==="inverse","usa-button--unstyled":a.variant==="unstyled","usa-button--big":a.size==="big"}]);return(t,u)=>(l(),o("button",i(t.$attrs,{class:["usa-button",s.value],type:e.type,disabled:e.disabled}),[n(t.$slots,"before"),n(t.$slots,"default"),n(t.$slots,"after")],16,d))}};c.__docgenInfo={exportName:"default",displayName:"UsaButton",type:1,props:[{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"type",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'"button"'},{name:"size",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'""'},{name:"variant",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'""'},{name:"disabled",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]},default:"false"}],events:[],slots:[{name:"before",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}},{name:"default",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}},{name:"after",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}}],exposed:[{name:"type",type:"string",description:"",declarations:[],schema:"string"},{name:"size",type:"string",description:"",declarations:[],schema:"string"},{name:"variant",type:"string",description:"",declarations:[],schema:"string"},{name:"disabled",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}}],sourceFiles:"/home/runner/work/vue-uswds/vue-uswds/src/components/UsaButton/UsaButton.vue"};export{c as _};
