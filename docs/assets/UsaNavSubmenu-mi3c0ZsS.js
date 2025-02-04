import{e as r,l as C,s as b,M as w,c as n,b as d,a as i,G as _,H as N,n as t,r as u,o}from"./vue.esm-bundler-DlC1_45x.js";import{G as R}from"./constants-BA52rpFi.js";const q=["id","hidden"],I={class:"usa-nav__submenu-list"},S={class:"usa-nav__submenu-list"},$=["id","hidden"],P={__name:"UsaNavSubmenu",props:{cols:{type:Number,default:1,validator(e){const a=e>=1;return a||console.warn("Column count must be greater than or equal to 1"),a}},customClasses:{type:Object,default:()=>({gridRow:[],gridCol:[]})}},setup(e){const a=r("vueUswds.gridNamespace",R),c=r("isMegamenu",C(!1)),l=r("dropdownId"),v=r("dropdownItems"),h=e,m=b(()=>[{"usa-megamenu":c.value}]),k=b(()=>{var s;return[`${a}row`,`${a}gap-4`,...((s=h.customClasses)==null?void 0:s.gridRow)||[]]}),p=w(v,l.value);return(s,U)=>{var y;return d(c)?(o(),n("div",{key:0,id:d(l),class:t(["usa-nav__submenu",m.value]),hidden:!p.value},[i("div",{class:t(k.value)},[e.cols>1?(o(!0),n(_,{key:0},N(e.cols,g=>{var f;return o(),n("div",{key:g,class:t(["usa-col",(f=e.customClasses)==null?void 0:f.gridCol])},[i("ul",I,[u(s.$slots,`col-${g}`)])],2)}),128)):(o(),n("div",{key:1,class:t(["usa-col",(y=e.customClasses)==null?void 0:y.gridCol])},[i("ul",S,[u(s.$slots,"default")])],2))],2)],10,q)):(o(),n("ul",{key:1,id:d(l),class:t(["usa-nav__submenu",m.value]),hidden:!p.value},[u(s.$slots,"default")],10,$))}}};P.__docgenInfo={exportName:"default",displayName:"UsaNavSubmenu",type:1,props:[{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"customClasses",global:!1,description:"",tags:[],required:!1,type:"Record<string, any>",declarations:[],schema:"Record<string, any>",default:`() => {
    return {
        gridRow: [],
        gridCol: [],
    };
}`},{name:"cols",global:!1,description:"",tags:[],required:!1,type:"number",declarations:[],schema:"number",default:"1"}],events:[],slots:[{name:"default",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}}],exposed:[{name:"customClasses",type:"Record<string, any>",description:"",declarations:[],schema:"Record<string, any>"},{name:"cols",type:"number",description:"",declarations:[],schema:"number"}],sourceFiles:"/home/runner/work/vue-uswds/vue-uswds/src/components/UsaNavSubmenu/UsaNavSubmenu.vue"};export{P as _};
