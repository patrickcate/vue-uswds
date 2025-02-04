import{l as v,s as b,W as ts,u as ls,M as B,w as ns,f as ie,g as ue,n as P,b as a,o as i,t as U,c as u,a as f,r as C,d as m,v as k,G as h,A as rs,Q as os,H as is,m as us}from"./vue.esm-bundler-DlC1_45x.js";import{n as ds}from"./unique-id-C_cIYxKg.js";import{e as de}from"./common-cfad2wKl.js";import{_ as ps}from"./UsaFormGroup-COQiJYtU.js";import{_ as cs}from"./UsaLabel-DpLC57Qt.js";import"./constants-BA52rpFi.js";function ms(n,se,$,ae,F,x){const I=v(n),E=v(ae),A=v(F),y=v(se),w=v($),c="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",S=b(()=>I.value||ds("usa-file-input")),te=b(()=>`${S.value}-error-message`),le=b(()=>`${S.value}-hint`),d=b(()=>{const t=w.value.split(",").map(e=>e.trim().toLowerCase()),s={types:[],extensions:[]};return t.forEach(e=>{e.includes("/")&&!s.types.includes(e)?e.endsWith("/*")?s.types.push(e.substring(0,e.length-1)):s.types.push(e):e.includes(".")&&!s.extensions.includes(e)&&s.extensions.push(e)}),s}),ne=t=>{var p;const s=/(?:.+)\.(.+)$/,e=t.match(s);return`.${(p=e==null?void 0:e[1])==null?void 0:p.toLowerCase()}`},D=t=>{switch(t){case".pdf":return"usa-file-input__preview-image--pdf";case".doc":case".docx":case".pages":return"usa-file-input__preview-image--word";case".xls":case".xlsx":case".numbers":return"usa-file-input__preview-image--excel";case".mov":case".mp4":return"usa-file-input__preview-image--video";default:return"usa-file-input__preview-image--generic"}},re=t=>new RegExp(/^image\//gi).test(t),R=b(()=>{var t;return((t=y.value)==null?void 0:t.length)>0}),l=b(()=>{if(!w.value||!R.value)return!1;const t=d.value.types,s=d.value.extensions;return!y.value.every(p=>{const oe=t.some(q=>new RegExp(de(q),"gi").test(p.type)),j=s.some(q=>new RegExp(de(q),"gi").test(p.extension));return oe||j})}),r=b(()=>y.value.map(t=>t.name).join(", ")),L=(t,s)=>{var p;const e=y.value[s];re(e==null?void 0:e.type)&&((p=t==null?void 0:t.target)!=null&&p.result)?(e.iconClasses=null,e.src=t.target.result):e.iconClasses=[D(e.extension)]};async function M(t){if(!(t!=null&&t.length)||A.value){y.value=[];return}let s=[];if(E.value)for(let e=0;e<t.length;e++)s.push(t.item(e));else s.push(t.item(0));x("filesLoaded",s),y.value=s.reduce((e,p,oe)=>{const j=ne(p.name),q={name:p.name,type:p.type,extension:j,src:c,iconClasses:[D(j),"is-loading"]},N=new FileReader;return N.addEventListener("loadend",as=>L(as,oe),!1),N.readAsDataURL(p),e.push(q),e},[])}return{computedErrorMessageId:te,computedHintId:le,computedId:S,hasFiles:R,hasInvalidFiles:l,isDisabled:A,loadFiles:M,loadedFileNames:r,loadedFiles:ts(y)}}const gs=["id"],fs=["id"],bs=["aria-disabled"],Fs={class:"usa-sr-only","aria-live":"polite"},ys=["hidden"],hs={class:"usa-file-input__drag-text"},vs={class:"usa-file-input__preview-heading"},Is=["src"],ws={key:1,class:"usa-file-input__accepted-files-message"},Ss=["id","required","disabled","accept","multiple","aria-label","aria-describedby"],Us={inheritAttrs:!1},g=Object.assign(Us,{__name:"UsaFileInput",props:{accept:{type:String,default:""},multiple:{type:Boolean,default:!1},label:{type:String,default:""},required:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},error:{type:Boolean,default:!1},id:{type:String,default:""},customClasses:{type:Object,default:()=>({formGroup:[],component:[],label:[],input:[]})}},emits:["filesLoaded"],setup(n,{emit:se}){const $=ls(),ae=se,F=n,x=v(null),I=v(!1),{computedErrorMessageId:E,computedHintId:A,computedId:y,hasFiles:w,hasInvalidFiles:c,isDisabled:S,loadFiles:te,loadedFileNames:le,loadedFiles:d}=ms(B(F,"id"),v([]),B(F,"accept"),B(F,"multiple"),B(F,"disabled"),ae);ns(c,l=>{l&&(x.value.value="")});const ne=b(()=>{const l=[];return $.hint&&l.push(A.value),F.error&&$["error-message"]&&l.push(E.value),l.length?l.join(" "):null}),D=b(()=>{var l;return[{"usa-file-input--disabled":S.value,"has-invalid-file":c.value},...((l=F.customClasses)==null?void 0:l.component)||[]]}),re=b(()=>[{"usa-file-input--drag":I.value}]),R=b(()=>{const l=F.multiple?"files":"file";return w.value?`Change ${l}`:`Drag ${l} here or choose from folder`});return(l,r)=>{var L;return i(),ie(a(ps),{group:!!l.$slots.hint||n.error&&!!l.$slots["error-message"],error:n.error,class:P((L=F.customClasses)==null?void 0:L.formGroup)},{default:ue(()=>{var M,t;return[n.label||l.$slots.label?(i(),ie(a(cs),{key:0,for:a(y),required:n.required,error:n.error,class:P((M=n.customClasses)==null?void 0:M.label)},{default:ue(()=>[C(l.$slots,"label",{},()=>[m(k(n.label),1)])]),_:3},8,["for","required","error","class"])):U("",!0),l.$slots.hint?(i(),u("span",{key:1,id:a(A),class:"usa-hint"},[C(l.$slots,"hint")],8,gs)):U("",!0),n.error&&l.$slots["error-message"]?(i(),u("span",{key:2,id:a(E),class:"usa-error-message"},[C(l.$slots,"error-message")],8,fs)):U("",!0),f("div",{class:P(["usa-file-input",D.value]),"aria-disabled":a(S)||null},[f("div",Fs,[C(l.$slots,"status",{multiple:n.multiple,loadedFiles:a(d),hasInvalidFiles:a(c)},()=>[!a(d).length||a(c)?(i(),u(h,{key:0},[n.multiple?(i(),u(h,{key:0},[m("No files selected")],64)):(i(),u(h,{key:1},[m("No file selected")],64))],64)):a(d).length===1&&!a(c)?(i(),u(h,{key:1},[m(" You have selected the file: "+k(a(d)[0].name),1)],64)):a(d).length>1&&!a(c)?(i(),u(h,{key:2},[m(" test You have selected "+k(a(d).length)+" files: "+k(a(le)),1)],64)):U("",!0)])]),f("div",{class:P(["usa-file-input__target",re.value])},[r[10]||(r[10]=f("div",{class:"usa-file-input__box"},null,-1)),rs(f("div",{class:"usa-file-input__instructions","aria-hidden":"true",hidden:!a(c)&&a(w)},[C(l.$slots,"instructions",{multiple:n.multiple},()=>[f("span",hs,[r[5]||(r[5]=m("Drag file")),n.multiple?(i(),u(h,{key:0},[m("s")],64)):U("",!0),r[6]||(r[6]=m(" here or "))]),r[7]||(r[7]=f("span",{class:"usa-file-input__choose"},"choose from folder",-1))])],8,ys),[[os,a(c)||!a(w)]]),!a(c)&&a(w)?(i(),u(h,{key:0},[f("div",vs,[C(l.$slots,"preview-heading",{loadedFiles:a(d)},()=>[a(d).length===1?(i(),u(h,{key:0},[m("Selected file")],64)):(i(),u(h,{key:1},[m(k(a(d).length)+" files selected",1)],64)),r[8]||(r[8]=f("span",{class:"usa-file-input__choose"},"Change file",-1))])]),(i(!0),u(h,null,is(a(d),(s,e)=>(i(),u("div",{key:s.name+e,class:"usa-file-input__preview","aria-hidden":"true"},[f("img",{src:s.src,alt:"",class:P(["usa-file-input__preview-image",s==null?void 0:s.iconClasses])},null,10,Is),m(" "+k(s.name),1)]))),128))],64)):U("",!0),a(c)?(i(),u("div",ws,[C(l.$slots,"invalid-files-message",{},()=>[r[9]||(r[9]=m("This is not a valid file type."))])])):U("",!0),f("input",us(l.$attrs,{id:a(y),ref_key:"fileInputRef",ref:x,type:"file",required:n.required,disabled:a(S),accept:n.accept||null,multiple:n.multiple||null,class:["usa-file-input__input",(t=n.customClasses)==null?void 0:t.input],"aria-label":R.value,"aria-describedby":ne.value,onChange:r[0]||(r[0]=s=>a(te)(s.target.files)),onDragenter:r[1]||(r[1]=s=>I.value=!0),onDragover:r[2]||(r[2]=s=>I.value=!0),onDragleave:r[3]||(r[3]=s=>I.value=!1),onDrop:r[4]||(r[4]=s=>I.value=!1)}),null,16,Ss)],2)],10,bs)]}),_:3},8,["group","error","class"])}}});g.__docgenInfo={exportName:"default",displayName:"UsaFileInput",type:1,props:[{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"error",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]},default:"false"},{name:"required",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]},default:"false"},{name:"id",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'""'},{name:"label",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'""'},{name:"customClasses",global:!1,description:"",tags:[],required:!1,type:"Record<string, any>",declarations:[],schema:"Record<string, any>",default:`() => {
    return {
        formGroup: [],
        component: [],
        label: [],
        input: [],
    };
}`},{name:"disabled",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]},default:"false"},{name:"accept",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'""'},{name:"multiple",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]},default:"false"}],events:[{name:"filesLoaded",description:"",tags:[],type:"any[]",signature:'(event: "filesLoaded", ...args: any[]): void',declarations:[],schema:["any"]}],slots:[{name:"label",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}},{name:"hint",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}},{name:"error-message",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}},{name:"status",type:"{ multiple: boolean; loadedFiles: any; hasInvalidFiles: any; }",description:"",declarations:[],schema:{kind:"object",type:"{ multiple: boolean; loadedFiles: any; hasInvalidFiles: any; }"}},{name:"instructions",type:"{ multiple: boolean; }",description:"",declarations:[],schema:{kind:"object",type:"{ multiple: boolean; }"}},{name:"preview-heading",type:"{ loadedFiles: any; }",description:"",declarations:[],schema:{kind:"object",type:"{ loadedFiles: any; }"}},{name:"invalid-files-message",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}}],exposed:[{name:"error",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"required",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"id",type:"string",description:"",declarations:[],schema:"string"},{name:"label",type:"string",description:"",declarations:[],schema:"string"},{name:"customClasses",type:"Record<string, any>",description:"",declarations:[],schema:"Record<string, any>"},{name:"disabled",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"accept",type:"string",description:"",declarations:[],schema:"string"},{name:"multiple",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}}],sourceFiles:"/home/runner/work/vue-uswds/vue-uswds/src/components/UsaFileInput/UsaFileInput.vue"};const o={accept:g.props.accept.default,multiple:g.props.multiple.default,label:g.props.label.default,required:g.props.required.default,disabled:g.props.disabled.default,error:g.props.error.default,id:g.props.id.default,customClasses:g.props.customClasses.default()},xs={component:g,title:"Components/UsaFileInput",argTypes:{accept:{control:{type:"text"}},multiple:{control:{type:"boolean"}},label:{control:{type:"text"},table:{category:"props"}},required:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}},error:{control:{type:"boolean"}},id:{control:{type:"text"}},"slot:label":{control:{type:"text"},name:"label",table:{category:"slots"}},"slot:status":{control:{type:"text"},name:"status",table:{category:"slots"}},hint:{control:{type:"text"}},"error-message":{control:{type:"text"}},instructions:{control:{type:"text"}},"preview-heading":{control:{type:"text"}},"invalid-files-message":{control:{type:"text"}}},args:{accept:o.accept,multiple:o.multiple,label:o.label,required:o.required,disabled:o.disabled,error:o.error,id:o.id,"slot:label":"","slot:status":"",hint:"","error-message":"",instructions:"","preview-heading":"","invalid-files-message":""},render:n=>({components:{UsaFileInput:g},props:Object.keys(g.props),setup(){return{args:n}},template:`<UsaFileInput
    :id="args.id"
    :accept="args.accept"
    :multiple="args.multiple"
    :label="args.label"
    :required="args.required"
    :disabled="args.disabled"
    :error="args.error"
  >
    <template v-if="!!args['slot:label']" #label>${n["slot:label"]}</template>
    <template v-if="!!args.hint" #hint>${n.hint}</template>
    <template v-if="!!args['error-message']" #error-message>${n["error-message"]}</template>
    <template v-if="!!args['slot:status']" #status="{ multiple, loadedFiles, hasInvalidFiles }">${n["slot:status"]}</template>
    <template v-if="!!args.instructions" #instructions="{ multiple }">{{
      args.instructions
    }}</template>
    <template v-if="!!args['preview-heading']" #preview-heading="{ loadedFiles }">${n["preview-heading"]}</template>
    <template v-if="!!args['invalid-files-message']" #invalid-files-message>${n["invalid-files-message"]}</template>
  </UsaFileInput>`})},T={args:{...o,label:"File"},name:"Default",parameters:{docs:{source:{code:'<UsaFileInput label="File" />'}}}},H={args:{...o,label:"Multiple Files Allowed",multiple:!0},name:"Multiple Files",parameters:{docs:{source:{code:'<UsaFileInput label="Multiple Files Allowed" :multiple="true" />'}}}},O={args:{...o,label:"Only images and PDF's allowed",accept:"image/*,.pdf"},name:"Accepted Files",parameters:{docs:{source:{code:`<UsaFileInput label="Only images and PDF's allowed" accept="image/*,.pdf" />`}}}},_={args:{...o,label:"File",hint:"Choose wisely"},name:"Hint",parameters:{docs:{source:{code:'<UsaFileInput label="File" hint="Choose wisely" />'}}}},G={args:{...o,label:"File",error:!0},name:"Error",parameters:{docs:{source:{code:'<UsaFileInput label="File" :error="true" />'}}}},V={args:{...o,label:"File",error:!0,"error-message":"Error message here"},name:"Error Message",parameters:{docs:{source:{code:'<UsaFileInput label="File" :error="true" error-message="Error message here" />'}}}},Y={args:{...o,label:"File",required:!0},name:"Required",parameters:{docs:{source:{code:'<UsaFileInput label="File" :required="true" />'}}}},z={args:{...o,label:"File",disabled:!0},name:"Disabled",parameters:{docs:{source:{code:'<UsaFileInput label="File" :disabled="true" />'}}}},K={args:{...o,label:"File",id:"custom-id"},name:"Custom ID",parameters:{docs:{source:{code:'<UsaFileInput label="File" id="custom-id" />'}}}},Q={args:{...o,label:"File",instructions:"You can choose multiple files: <strong>{{ multiple }}</strong>"},name:"Instructions Slot",parameters:{docs:{source:{code:'<UsaFileInput label="File"><template #instructions="{ multiple }">You can choose multiple files: <strong>{{ multiple }}</strong></template></UsaFileInput>'}}}},W={args:{...o,label:"Load file to see preview heading","preview-heading":"Total files: <strong>{{ loadedFiles.length }}</strong>"},name:"Preview Heading Slot",parameters:{docs:{source:{code:'<UsaFileInput label="Load file to see preview heading"><template #preview-heading="{ loadedFiles }">Total files: <strong>{{ loadedFiles.length }}</strong></template></UsaFileInput>'}}}},Z={args:{...o,label:"Load file to see message","invalid-files-message":"Not a valid file.",accept:".json"},name:"Invalid Message Slot",parameters:{docs:{source:{code:'<UsaFileInput label="Load file to see message" accept=".json"><template #invalid-files-message>Not a valid file.</template></UsaFileInput>'}}}},J={args:{...o,label:"File",customClasses:{formGroup:["test-form-group-class"],component:["test-component-class"],label:["test-label-class"],input:["test-input-class"]}},name:"Custom CSS Classes",parameters:{docs:{source:{code:`<UsaFileInput label="File" :custom-classes="{ formGroup: ['test-form-group-class'], component: ['test-component-class'], label: ['test-label-class'], input: ['test-input-class'] }" />`}}}},X={args:{...o,"slot:label":"<em>Label slot content</em>"},name:"Label Slot",parameters:{docs:{source:{code:"<UsaFileInput><template #label><em>Label slot content</em></template></UsaFileInput>"}}}},ee={args:{...o,label:"File","slot:status":"Total files: <strong>{{ loadedFiles.length }}</strong>, multiple: {{ multiple }}, hasInvalidFiles: {{ hasInvalidFiles }}"},name:"Status Slot",parameters:{docs:{source:{code:'<UsaFileInput label="file"><template #status="{ loadedFiles, multiple, hasInvalidFiles }">Total files: <strong>{{ loadedFiles.length }}</strong>, multiple: {{ multiple }}, hasInvalidFiles: {{ hasInvalidFiles }}</template></UsaFileInput>'}}}};var pe,ce,me;T.parameters={...T.parameters,docs:{...(pe=T.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    label: 'File'
  },
  name: 'Default',
  parameters: {
    docs: {
      source: {
        code: \`<UsaFileInput label="File" />\`
      }
    }
  }
}`,...(me=(ce=T.parameters)==null?void 0:ce.docs)==null?void 0:me.source}}};var ge,fe,be;H.parameters={...H.parameters,docs:{...(ge=H.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    label: 'Multiple Files Allowed',
    multiple: true
  },
  name: 'Multiple Files',
  parameters: {
    docs: {
      source: {
        code: \`<UsaFileInput label="Multiple Files Allowed" :multiple="true" />\`
      }
    }
  }
}`,...(be=(fe=H.parameters)==null?void 0:fe.docs)==null?void 0:be.source}}};var Fe,ye,he;O.parameters={...O.parameters,docs:{...(Fe=O.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    label: \`Only images and PDF's allowed\`,
    accept: 'image/*,.pdf'
  },
  name: 'Accepted Files',
  parameters: {
    docs: {
      source: {
        code: \`<UsaFileInput label="Only images and PDF's allowed" accept="image/*,.pdf" />\`
      }
    }
  }
}`,...(he=(ye=O.parameters)==null?void 0:ye.docs)==null?void 0:he.source}}};var ve,Ie,we;_.parameters={..._.parameters,docs:{...(ve=_.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    label: 'File',
    hint: 'Choose wisely'
  },
  name: 'Hint',
  parameters: {
    docs: {
      source: {
        code: \`<UsaFileInput label="File" hint="Choose wisely" />\`
      }
    }
  }
}`,...(we=(Ie=_.parameters)==null?void 0:Ie.docs)==null?void 0:we.source}}};var Se,Ue,Ce;G.parameters={...G.parameters,docs:{...(Se=G.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    label: 'File',
    error: true
  },
  name: 'Error',
  parameters: {
    docs: {
      source: {
        code: \`<UsaFileInput label="File" :error="true" />\`
      }
    }
  }
}`,...(Ce=(Ue=G.parameters)==null?void 0:Ue.docs)==null?void 0:Ce.source}}};var ke,Ae,qe;V.parameters={...V.parameters,docs:{...(ke=V.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    label: 'File',
    error: true,
    'error-message': 'Error message here'
  },
  name: 'Error Message',
  parameters: {
    docs: {
      source: {
        code: \`<UsaFileInput label="File" :error="true" error-message="Error message here" />\`
      }
    }
  }
}`,...(qe=(Ae=V.parameters)==null?void 0:Ae.docs)==null?void 0:qe.source}}};var Pe,$e,xe;Y.parameters={...Y.parameters,docs:{...(Pe=Y.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    label: 'File',
    required: true
  },
  name: 'Required',
  parameters: {
    docs: {
      source: {
        code: \`<UsaFileInput label="File" :required="true" />\`
      }
    }
  }
}`,...(xe=($e=Y.parameters)==null?void 0:$e.docs)==null?void 0:xe.source}}};var Ee,De,Re;z.parameters={...z.parameters,docs:{...(Ee=z.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    label: 'File',
    disabled: true
  },
  name: 'Disabled',
  parameters: {
    docs: {
      source: {
        code: \`<UsaFileInput label="File" :disabled="true" />\`
      }
    }
  }
}`,...(Re=(De=z.parameters)==null?void 0:De.docs)==null?void 0:Re.source}}};var Le,Me,je;K.parameters={...K.parameters,docs:{...(Le=K.parameters)==null?void 0:Le.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    label: 'File',
    id: 'custom-id'
  },
  name: 'Custom ID',
  parameters: {
    docs: {
      source: {
        code: \`<UsaFileInput label="File" id="custom-id" />\`
      }
    }
  }
}`,...(je=(Me=K.parameters)==null?void 0:Me.docs)==null?void 0:je.source}}};var Ne,Be,Te;Q.parameters={...Q.parameters,docs:{...(Ne=Q.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    label: 'File',
    instructions: 'You can choose multiple files: <strong>{{ multiple }}</strong>'
  },
  name: 'Instructions Slot',
  parameters: {
    docs: {
      source: {
        code: \`<UsaFileInput label="File"><template #instructions="{ multiple }">You can choose multiple files: <strong>{{ multiple }}</strong></template></UsaFileInput>\`
      }
    }
  }
}`,...(Te=(Be=Q.parameters)==null?void 0:Be.docs)==null?void 0:Te.source}}};var He,Oe,_e;W.parameters={...W.parameters,docs:{...(He=W.parameters)==null?void 0:He.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    label: 'Load file to see preview heading',
    'preview-heading': 'Total files: <strong>{{ loadedFiles.length }}</strong>'
  },
  name: 'Preview Heading Slot',
  parameters: {
    docs: {
      source: {
        code: \`<UsaFileInput label="Load file to see preview heading"><template #preview-heading="{ loadedFiles }">Total files: <strong>{{ loadedFiles.length }}</strong></template></UsaFileInput>\`
      }
    }
  }
}`,...(_e=(Oe=W.parameters)==null?void 0:Oe.docs)==null?void 0:_e.source}}};var Ge,Ve,Ye;Z.parameters={...Z.parameters,docs:{...(Ge=Z.parameters)==null?void 0:Ge.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    label: 'Load file to see message',
    'invalid-files-message': 'Not a valid file.',
    accept: '.json'
  },
  name: 'Invalid Message Slot',
  parameters: {
    docs: {
      source: {
        code: \`<UsaFileInput label="Load file to see message" accept=".json"><template #invalid-files-message>Not a valid file.</template></UsaFileInput>\`
      }
    }
  }
}`,...(Ye=(Ve=Z.parameters)==null?void 0:Ve.docs)==null?void 0:Ye.source}}};var ze,Ke,Qe;J.parameters={...J.parameters,docs:{...(ze=J.parameters)==null?void 0:ze.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    label: 'File',
    customClasses: {
      formGroup: ['test-form-group-class'],
      component: ['test-component-class'],
      label: ['test-label-class'],
      input: ['test-input-class']
    }
  },
  name: 'Custom CSS Classes',
  parameters: {
    docs: {
      source: {
        code: \`<UsaFileInput label="File" :custom-classes="{ formGroup: ['test-form-group-class'], component: ['test-component-class'], label: ['test-label-class'], input: ['test-input-class'] }" />\`
      }
    }
  }
}`,...(Qe=(Ke=J.parameters)==null?void 0:Ke.docs)==null?void 0:Qe.source}}};var We,Ze,Je;X.parameters={...X.parameters,docs:{...(We=X.parameters)==null?void 0:We.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    'slot:label': \`<em>Label slot content</em>\`
  },
  name: 'Label Slot',
  parameters: {
    docs: {
      source: {
        code: \`<UsaFileInput><template #label><em>Label slot content</em></template></UsaFileInput>\`
      }
    }
  }
}`,...(Je=(Ze=X.parameters)==null?void 0:Ze.docs)==null?void 0:Je.source}}};var Xe,es,ss;ee.parameters={...ee.parameters,docs:{...(Xe=ee.parameters)==null?void 0:Xe.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    label: 'File',
    'slot:status': 'Total files: <strong>{{ loadedFiles.length }}</strong>, multiple: {{ multiple }}, hasInvalidFiles: {{ hasInvalidFiles }}'
  },
  name: 'Status Slot',
  parameters: {
    docs: {
      source: {
        code: \`<UsaFileInput label="file"><template #status="{ loadedFiles, multiple, hasInvalidFiles }">Total files: <strong>{{ loadedFiles.length }}</strong>, multiple: {{ multiple }}, hasInvalidFiles: {{ hasInvalidFiles }}</template></UsaFileInput>\`
      }
    }
  }
}`,...(ss=(es=ee.parameters)==null?void 0:es.docs)==null?void 0:ss.source}}};const Es=["DefaultFileInput","MultipleFileInput","AcceptedFileInput","HintFileInput","ErrorFileInput","ErrorMessageFileInput","RequiredFileInput","DisabledFileInput","CustomIdFileInput","InstructionsSlotFileInput","PreviewHeadingSlotFileInput","InvalidFilesMessageSlotFileInput","CustomClassesFileInput","LabelSlotFileInput","StatusSlotFileInput"];export{O as AcceptedFileInput,J as CustomClassesFileInput,K as CustomIdFileInput,T as DefaultFileInput,z as DisabledFileInput,G as ErrorFileInput,V as ErrorMessageFileInput,_ as HintFileInput,Q as InstructionsSlotFileInput,Z as InvalidFilesMessageSlotFileInput,X as LabelSlotFileInput,H as MultipleFileInput,W as PreviewHeadingSlotFileInput,Y as RequiredFileInput,ee as StatusSlotFileInput,Es as __namedExportsOrder,xs as default};
