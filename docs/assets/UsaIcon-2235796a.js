import{s as n,c as l,r as c,a as d,n as u,e as m,o as p}from"./vue.esm-bundler-d9807bdf.js";import{S as f}from"./constants-fce87d39.js";const y=["aria-hidden","role","focusable"],g=["href"],t={__name:"UsaIcon",props:{name:{type:String,required:!0},size:{type:[String,Number],default:"",validator(a){const s=["","3","4","5","6","7","8","9"].includes(`${a}`);return s||console.warn(`'${a}' is not a valid icon size`),s}},ariaHidden:{type:Boolean,default:!0},role:{type:String,default:"img"},focusable:{type:Boolean,default:!1}},setup(a){const s=m("vueUswds.svgSpritePath",f),e=a,i=n(()=>[{"usa-icon--size-3":`${e.size}`=="3","usa-icon--size-4":`${e.size}`=="4","usa-icon--size-5":`${e.size}`=="5","usa-icon--size-6":`${e.size}`=="6","usa-icon--size-7":`${e.size}`=="7","usa-icon--size-8":`${e.size}`=="8","usa-icon--size-9":`${e.size}`=="9"}]),r=n(()=>`${s}#${e.name}`);return(o,b)=>(p(),l("svg",{class:u(["usa-icon",i.value]),"aria-hidden":a.ariaHidden,role:a.role,focusable:a.focusable},[c(o.$slots,"title"),d("use",{href:r.value},null,8,g)],10,y))}},z=t;t.__docgenInfo={exportName:"default",displayName:"UsaIcon",type:1,props:[{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"name",global:!1,description:"",tags:[],required:!0,type:"string",declarations:[],schema:"string"},{name:"size",global:!1,description:"",tags:[],required:!1,type:"string | number",declarations:[],schema:{kind:"enum",type:"string | number",schema:["string","number"]},default:'""'},{name:"role",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'"img"'},{name:"ariaHidden",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]},default:"true"},{name:"focusable",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]},default:"false"}],events:[],slots:[{name:"title",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}}],exposed:[{name:"name",type:"string",description:"",declarations:[],schema:"string"},{name:"size",type:"string | number",description:"",declarations:[],schema:{kind:"enum",type:"string | number",schema:["string","number"]}},{name:"role",type:"string",description:"",declarations:[],schema:"string"},{name:"ariaHidden",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"focusable",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}}],sourceFiles:"/home/runner/work/vue-uswds/vue-uswds/src/components/UsaIcon/UsaIcon.vue"};export{z as U};
