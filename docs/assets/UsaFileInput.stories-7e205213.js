import{l as v,s as b,V as ls,u as ns,M as B,w as rs,f as ie,g as ue,n as P,b as a,o as i,r as S,d as m,v as k,t as C,c as u,a as g,G as h,A as os,O as is,H as us,m as ds}from"./vue.esm-bundler-d9807bdf.js";import{n as ps}from"./unique-id-dcbd9804.js";import{e as de}from"./common-c0b90c12.js";import{U as cs}from"./UsaFormGroup-c2b9f5da.js";import{U as ms}from"./UsaLabel-60182b62.js";import"./constants-fce87d39.js";function gs(n,se,x,ae,F,E){const I=v(n),$=v(ae),A=v(F),y=v(se),w=v(x),c="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",U=b(()=>I.value||ps("usa-file-input")),te=b(()=>`${U.value}-error-message`),le=b(()=>`${U.value}-hint`),d=b(()=>{const t=w.value.split(",").map(e=>e.trim().toLowerCase()),s={types:[],extensions:[]};return t.forEach(e=>{e.includes("/")&&!s.types.includes(e)?e.endsWith("/*")?s.types.push(e.substring(0,e.length-1)):s.types.push(e):e.includes(".")&&!s.extensions.includes(e)&&s.extensions.push(e)}),s}),ne=t=>{var p;const s=/(?:.+)\.(.+)$/,e=t.match(s);return`.${(p=e==null?void 0:e[1])==null?void 0:p.toLowerCase()}`},D=t=>{switch(t){case".pdf":return"usa-file-input__preview-image--pdf";case".doc":case".docx":case".pages":return"usa-file-input__preview-image--word";case".xls":case".xlsx":case".numbers":return"usa-file-input__preview-image--excel";case".mov":case".mp4":return"usa-file-input__preview-image--video";default:return"usa-file-input__preview-image--generic"}},re=t=>new RegExp(/^image\//gi).test(t),R=b(()=>{var t;return((t=y.value)==null?void 0:t.length)>0}),l=b(()=>{if(!w.value||!R.value)return!1;const t=d.value.types,s=d.value.extensions;return!y.value.every(p=>{const oe=t.some(q=>new RegExp(de(q),"gi").test(p.type)),j=s.some(q=>new RegExp(de(q),"gi").test(p.extension));return oe||j})}),r=b(()=>y.value.map(t=>t.name).join(", ")),L=(t,s)=>{var p;const e=y.value[s];re(e==null?void 0:e.type)&&((p=t==null?void 0:t.target)!=null&&p.result)?(e.iconClasses=null,e.src=t.target.result):e.iconClasses=[D(e.extension)]};async function M(t){if(!(t!=null&&t.length)||A.value){y.value=[];return}let s=[];if($.value)for(let e=0;e<t.length;e++)s.push(t.item(e));else s.push(t.item(0));E("filesLoaded",s),y.value=s.reduce((e,p,oe)=>{const j=ne(p.name),q={name:p.name,type:p.type,extension:j,src:c,iconClasses:[D(j),"is-loading"]},N=new FileReader;return N.addEventListener("loadend",ts=>L(ts,oe),!1),N.readAsDataURL(p),e.push(q),e},[])}return{computedErrorMessageId:te,computedHintId:le,computedId:U,hasFiles:R,hasInvalidFiles:l,isDisabled:A,loadFiles:M,loadedFileNames:r,loadedFiles:ls(y)}}const fs=["id"],bs=["id"],Fs=["aria-disabled"],ys={class:"usa-sr-only","aria-live":"polite"},hs=["hidden"],vs={class:"usa-file-input__drag-text"},Is={class:"usa-file-input__preview-heading"},ws=["src"],Us={key:1,class:"usa-file-input__accepted-files-message"},Ss=["id","required","disabled","accept","multiple","aria-label","aria-describedby"],Cs={inheritAttrs:!1},as=Object.assign(Cs,{__name:"UsaFileInput",props:{accept:{type:String,default:""},multiple:{type:Boolean,default:!1},label:{type:String,default:""},required:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},error:{type:Boolean,default:!1},id:{type:String,default:""},customClasses:{type:Object,default:()=>({formGroup:[],component:[],label:[],input:[]})}},emits:["filesLoaded"],setup(n,{emit:se}){const x=ns(),ae=se,F=n,E=v(null),I=v(!1),{computedErrorMessageId:$,computedHintId:A,computedId:y,hasFiles:w,hasInvalidFiles:c,isDisabled:U,loadFiles:te,loadedFileNames:le,loadedFiles:d}=gs(B(F,"id"),v([]),B(F,"accept"),B(F,"multiple"),B(F,"disabled"),ae);rs(c,l=>{l&&(E.value.value="")});const ne=b(()=>{const l=[];return x.hint&&l.push(A.value),F.error&&x["error-message"]&&l.push($.value),l.length?l.join(" "):null}),D=b(()=>{var l;return[{"usa-file-input--disabled":U.value,"has-invalid-file":c.value},...((l=F.customClasses)==null?void 0:l.component)||[]]}),re=b(()=>[{"usa-file-input--drag":I.value}]),R=b(()=>{const l=F.multiple?"files":"file";return w.value?`Change ${l}`:`Drag ${l} here or choose from folder`});return(l,r)=>{var L;return i(),ie(a(cs),{group:!!l.$slots.hint||n.error&&!!l.$slots["error-message"],error:n.error,class:P((L=F.customClasses)==null?void 0:L.formGroup)},{default:ue(()=>{var M,t;return[n.label||l.$slots.label?(i(),ie(a(ms),{key:0,for:a(y),required:n.required,error:n.error,class:P((M=n.customClasses)==null?void 0:M.label)},{default:ue(()=>[S(l.$slots,"label",{},()=>[m(k(n.label),1)])]),_:3},8,["for","required","error","class"])):C("",!0),l.$slots.hint?(i(),u("span",{key:1,id:a(A),class:"usa-hint"},[S(l.$slots,"hint")],8,fs)):C("",!0),n.error&&l.$slots["error-message"]?(i(),u("span",{key:2,id:a($),class:"usa-error-message"},[S(l.$slots,"error-message")],8,bs)):C("",!0),g("div",{class:P(["usa-file-input",D.value]),"aria-disabled":a(U)||null},[g("div",ys,[S(l.$slots,"status",{multiple:n.multiple,loadedFiles:a(d),hasInvalidFiles:a(c)},()=>[!a(d).length||a(c)?(i(),u(h,{key:0},[n.multiple?(i(),u(h,{key:0},[m("No files selected")],64)):(i(),u(h,{key:1},[m("No file selected")],64))],64)):a(d).length===1&&!a(c)?(i(),u(h,{key:1},[m(" You have selected the file: "+k(a(d)[0].name),1)],64)):a(d).length>1&&!a(c)?(i(),u(h,{key:2},[m(" test You have selected "+k(a(d).length)+" files: "+k(a(le)),1)],64)):C("",!0)])]),g("div",{class:P(["usa-file-input__target",re.value])},[r[10]||(r[10]=g("div",{class:"usa-file-input__box"},null,-1)),os(g("div",{class:"usa-file-input__instructions","aria-hidden":"true",hidden:!a(c)&&a(w)},[S(l.$slots,"instructions",{multiple:n.multiple},()=>[g("span",vs,[r[5]||(r[5]=m("Drag file")),n.multiple?(i(),u(h,{key:0},[m("s")],64)):C("",!0),r[6]||(r[6]=m(" here or "))]),r[7]||(r[7]=g("span",{class:"usa-file-input__choose"},"choose from folder",-1))])],8,hs),[[is,a(c)||!a(w)]]),!a(c)&&a(w)?(i(),u(h,{key:0},[g("div",Is,[S(l.$slots,"preview-heading",{loadedFiles:a(d)},()=>[a(d).length===1?(i(),u(h,{key:0},[m("Selected file")],64)):(i(),u(h,{key:1},[m(k(a(d).length)+" files selected",1)],64)),r[8]||(r[8]=g("span",{class:"usa-file-input__choose"},"Change file",-1))])]),(i(!0),u(h,null,us(a(d),(s,e)=>(i(),u("div",{key:s.name+e,class:"usa-file-input__preview","aria-hidden":"true"},[g("img",{src:s.src,alt:"",class:P(["usa-file-input__preview-image",s==null?void 0:s.iconClasses])},null,10,ws),m(" "+k(s.name),1)]))),128))],64)):C("",!0),a(c)?(i(),u("div",Us,[S(l.$slots,"invalid-files-message",{},()=>[r[9]||(r[9]=m("This is not a valid file type."))])])):C("",!0),g("input",ds(l.$attrs,{id:a(y),ref_key:"fileInputRef",ref:E,type:"file",required:n.required,disabled:a(U),accept:n.accept||null,multiple:n.multiple||null,class:["usa-file-input__input",(t=n.customClasses)==null?void 0:t.input],"aria-label":R.value,"aria-describedby":ne.value,onChange:r[0]||(r[0]=s=>a(te)(s.target.files)),onDragenter:r[1]||(r[1]=s=>I.value=!0),onDragover:r[2]||(r[2]=s=>I.value=!0),onDragleave:r[3]||(r[3]=s=>I.value=!1),onDrop:r[4]||(r[4]=s=>I.value=!1)}),null,16,Ss)],2)],10,Fs)]}),_:3},8,["group","error","class"])}}}),f=as;as.__docgenInfo={exportName:"default",displayName:"UsaFileInput",type:1,props:[{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"error",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]},default:"false"},{name:"required",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]},default:"false"},{name:"id",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'""'},{name:"label",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'""'},{name:"customClasses",global:!1,description:"",tags:[],required:!1,type:"Record<string, any>",declarations:[],schema:"Record<string, any>",default:`() => {
    return {
        formGroup: [],
        component: [],
        label: [],
        input: [],
    };
}`},{name:"disabled",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]},default:"false"},{name:"accept",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'""'},{name:"multiple",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]},default:"false"}],events:[{name:"filesLoaded",description:"",tags:[],type:"any[]",signature:'(event: "filesLoaded", ...args: any[]): void',declarations:[],schema:["any"]}],slots:[{name:"label",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}},{name:"hint",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}},{name:"error-message",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}},{name:"status",type:"{ multiple: boolean; loadedFiles: any; hasInvalidFiles: any; }",description:"",declarations:[],schema:{kind:"object",type:"{ multiple: boolean; loadedFiles: any; hasInvalidFiles: any; }"}},{name:"instructions",type:"{ multiple: boolean; }",description:"",declarations:[],schema:{kind:"object",type:"{ multiple: boolean; }"}},{name:"preview-heading",type:"{ loadedFiles: any; }",description:"",declarations:[],schema:{kind:"object",type:"{ loadedFiles: any; }"}},{name:"invalid-files-message",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}}],exposed:[{name:"error",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"required",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"id",type:"string",description:"",declarations:[],schema:"string"},{name:"label",type:"string",description:"",declarations:[],schema:"string"},{name:"customClasses",type:"Record<string, any>",description:"",declarations:[],schema:"Record<string, any>"},{name:"disabled",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"accept",type:"string",description:"",declarations:[],schema:"string"},{name:"multiple",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}}],sourceFiles:"/home/runner/work/vue-uswds/vue-uswds/src/components/UsaFileInput/UsaFileInput.vue"};const o={accept:f.props.accept.default,multiple:f.props.multiple.default,label:f.props.label.default,required:f.props.required.default,disabled:f.props.disabled.default,error:f.props.error.default,id:f.props.id.default,customClasses:f.props.customClasses.default()},$s={component:f,title:"Components/UsaFileInput",argTypes:{accept:{control:{type:"text"}},multiple:{control:{type:"boolean"}},label:{control:{type:"text"},table:{category:"props"}},required:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}},error:{control:{type:"boolean"}},id:{control:{type:"text"}},"slot:label":{control:{type:"text"},name:"label",table:{category:"slots"}},"slot:status":{control:{type:"text"},name:"status",table:{category:"slots"}},hint:{control:{type:"text"}},"error-message":{control:{type:"text"}},instructions:{control:{type:"text"}},"preview-heading":{control:{type:"text"}},"invalid-files-message":{control:{type:"text"}}},args:{accept:o.accept,multiple:o.multiple,label:o.label,required:o.required,disabled:o.disabled,error:o.error,id:o.id,"slot:label":"","slot:status":"",hint:"","error-message":"",instructions:"","preview-heading":"","invalid-files-message":""},render:n=>({components:{UsaFileInput:f},props:Object.keys(f.props),setup(){return{args:n}},template:`<UsaFileInput
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
  </UsaFileInput>`})},O={args:{...o,label:"File"},name:"Default",parameters:{docs:{source:{code:'<UsaFileInput label="File" />'}}}},T={args:{...o,label:"Multiple Files Allowed",multiple:!0},name:"Multiple Files",parameters:{docs:{source:{code:'<UsaFileInput label="Multiple Files Allowed" :multiple="true" />'}}}},H={args:{...o,label:"Only images and PDF's allowed",accept:"image/*,.pdf"},name:"Accepted Files",parameters:{docs:{source:{code:`<UsaFileInput label="Only images and PDF's allowed" accept="image/*,.pdf" />`}}}},G={args:{...o,label:"File",hint:"Choose wisely"},name:"Hint",parameters:{docs:{source:{code:'<UsaFileInput label="File" hint="Choose wisely" />'}}}},V={args:{...o,label:"File",error:!0},name:"Error",parameters:{docs:{source:{code:'<UsaFileInput label="File" :error="true" />'}}}},Y={args:{...o,label:"File",error:!0,"error-message":"Error message here"},name:"Error Message",parameters:{docs:{source:{code:'<UsaFileInput label="File" :error="true" error-message="Error message here" />'}}}},_={args:{...o,label:"File",required:!0},name:"Required",parameters:{docs:{source:{code:'<UsaFileInput label="File" :required="true" />'}}}},z={args:{...o,label:"File",disabled:!0},name:"Disabled",parameters:{docs:{source:{code:'<UsaFileInput label="File" :disabled="true" />'}}}},K={args:{...o,label:"File",id:"custom-id"},name:"Custom ID",parameters:{docs:{source:{code:'<UsaFileInput label="File" id="custom-id" />'}}}},Q={args:{...o,label:"File",instructions:"You can choose multiple files: <strong>{{ multiple }}</strong>"},name:"Instructions Slot",parameters:{docs:{source:{code:'<UsaFileInput label="File"><template #instructions="{ multiple }">You can choose multiple files: <strong>{{ multiple }}</strong></template></UsaFileInput>'}}}},W={args:{...o,label:"Load file to see preview heading","preview-heading":"Total files: <strong>{{ loadedFiles.length }}</strong>"},name:"Preview Heading Slot",parameters:{docs:{source:{code:'<UsaFileInput label="Load file to see preview heading"><template #preview-heading="{ loadedFiles }">Total files: <strong>{{ loadedFiles.length }}</strong></template></UsaFileInput>'}}}},Z={args:{...o,label:"Load file to see message","invalid-files-message":"Not a valid file.",accept:".json"},name:"Invalid Message Slot",parameters:{docs:{source:{code:'<UsaFileInput label="Load file to see message" accept=".json"><template #invalid-files-message>Not a valid file.</template></UsaFileInput>'}}}},J={args:{...o,label:"File",customClasses:{formGroup:["test-form-group-class"],component:["test-component-class"],label:["test-label-class"],input:["test-input-class"]}},name:"Custom CSS Classes",parameters:{docs:{source:{code:`<UsaFileInput label="File" :custom-classes="{ formGroup: ['test-form-group-class'], component: ['test-component-class'], label: ['test-label-class'], input: ['test-input-class'] }" />`}}}},X={args:{...o,"slot:label":"<em>Label slot content</em>"},name:"Label Slot",parameters:{docs:{source:{code:"<UsaFileInput><template #label><em>Label slot content</em></template></UsaFileInput>"}}}},ee={args:{...o,label:"File","slot:status":"Total files: <strong>{{ loadedFiles.length }}</strong>, multiple: {{ multiple }}, hasInvalidFiles: {{ hasInvalidFiles }}"},name:"Status Slot",parameters:{docs:{source:{code:'<UsaFileInput label="file"><template #status="{ loadedFiles, multiple, hasInvalidFiles }">Total files: <strong>{{ loadedFiles.length }}</strong>, multiple: {{ multiple }}, hasInvalidFiles: {{ hasInvalidFiles }}</template></UsaFileInput>'}}}};var pe,ce,me;O.parameters={...O.parameters,docs:{...(pe=O.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
}`,...(me=(ce=O.parameters)==null?void 0:ce.docs)==null?void 0:me.source}}};var ge,fe,be;T.parameters={...T.parameters,docs:{...(ge=T.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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
}`,...(be=(fe=T.parameters)==null?void 0:fe.docs)==null?void 0:be.source}}};var Fe,ye,he;H.parameters={...H.parameters,docs:{...(Fe=H.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
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
}`,...(he=(ye=H.parameters)==null?void 0:ye.docs)==null?void 0:he.source}}};var ve,Ie,we;G.parameters={...G.parameters,docs:{...(ve=G.parameters)==null?void 0:ve.docs,source:{originalSource:`{
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
}`,...(we=(Ie=G.parameters)==null?void 0:Ie.docs)==null?void 0:we.source}}};var Ue,Se,Ce;V.parameters={...V.parameters,docs:{...(Ue=V.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
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
}`,...(Ce=(Se=V.parameters)==null?void 0:Se.docs)==null?void 0:Ce.source}}};var ke,Ae,qe;Y.parameters={...Y.parameters,docs:{...(ke=Y.parameters)==null?void 0:ke.docs,source:{originalSource:`{
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
}`,...(qe=(Ae=Y.parameters)==null?void 0:Ae.docs)==null?void 0:qe.source}}};var Pe,xe,Ee;_.parameters={..._.parameters,docs:{...(Pe=_.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
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
}`,...(Ee=(xe=_.parameters)==null?void 0:xe.docs)==null?void 0:Ee.source}}};var $e,De,Re;z.parameters={...z.parameters,docs:{...($e=z.parameters)==null?void 0:$e.docs,source:{originalSource:`{
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
}`,...(je=(Me=K.parameters)==null?void 0:Me.docs)==null?void 0:je.source}}};var Ne,Be,Oe;Q.parameters={...Q.parameters,docs:{...(Ne=Q.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
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
}`,...(Oe=(Be=Q.parameters)==null?void 0:Be.docs)==null?void 0:Oe.source}}};var Te,He,Ge;W.parameters={...W.parameters,docs:{...(Te=W.parameters)==null?void 0:Te.docs,source:{originalSource:`{
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
}`,...(Ge=(He=W.parameters)==null?void 0:He.docs)==null?void 0:Ge.source}}};var Ve,Ye,_e;Z.parameters={...Z.parameters,docs:{...(Ve=Z.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
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
}`,...(_e=(Ye=Z.parameters)==null?void 0:Ye.docs)==null?void 0:_e.source}}};var ze,Ke,Qe;J.parameters={...J.parameters,docs:{...(ze=J.parameters)==null?void 0:ze.docs,source:{originalSource:`{
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
}`,...(ss=(es=ee.parameters)==null?void 0:es.docs)==null?void 0:ss.source}}};const Ds=["DefaultFileInput","MultipleFileInput","AcceptedFileInput","HintFileInput","ErrorFileInput","ErrorMessageFileInput","RequiredFileInput","DisabledFileInput","CustomIdFileInput","InstructionsSlotFileInput","PreviewHeadingSlotFileInput","InvalidFilesMessageSlotFileInput","CustomClassesFileInput","LabelSlotFileInput","StatusSlotFileInput"];export{H as AcceptedFileInput,J as CustomClassesFileInput,K as CustomIdFileInput,O as DefaultFileInput,z as DisabledFileInput,V as ErrorFileInput,Y as ErrorMessageFileInput,G as HintFileInput,Q as InstructionsSlotFileInput,Z as InvalidFilesMessageSlotFileInput,X as LabelSlotFileInput,T as MultipleFileInput,W as PreviewHeadingSlotFileInput,_ as RequiredFileInput,ee as StatusSlotFileInput,Ds as __namedExportsOrder,$s as default};
