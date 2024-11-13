import{j as n}from"./jsx-runtime-414c8829.js";import{u as r}from"./index-876fed6d.js";import{ae as i}from"./index-b3005215.js";import"./_commonjsHelpers-725317a4.js";import"./iframe-c284a20d.js";import"../sb-preview/runtime.js";import"./index-1b441bc2.js";import"./index-9226d4a5.js";import"./index-356e4a49.js";function t(s){const e={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...r(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{title:"Guide/Installation"}),`
`,n.jsx(e.h1,{id:"installation",children:"Installation"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Note:"})," You will need to load the ",n.jsx(e.a,{href:"https://designsystem.digital.gov",rel:"nofollow",children:"USWDS"})," CSS separately."]}),`
`,n.jsxs(e.p,{children:["Vue USWDS can be installed either by including it with a simple ",n.jsx(e.code,{children:"script"})," tag or using NPM and a build system."]}),`
`,n.jsx(e.h2,{id:"script-tag",children:"Script Tag"}),`
`,n.jsxs(e.p,{children:["The easiest way to include the library with a script tag is to use a CDN such as ",n.jsx(e.a,{href:"https://www.jsdelivr.com",rel:"nofollow",children:"jsDelivr"})," or ",n.jsx(e.a,{href:"https://unpkg.com",rel:"nofollow",children:"unpkg"}),". You can also load the library locally on your server."]}),`
`,n.jsx(e.p,{children:"When using with a script tag all components will be imported."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<script src="https://unpkg.com/vue@3"><\/script>
<script src="https://unpkg.com/vue-uswds/dist/vue-uswds.umd.js"><\/script>

<script>
  const app = Vue.createApp({})

  app.use(VueUswds, {
    // ...options
  })

  app.mount('#app')
<\/script>
`})}),`
`,n.jsx(e.h2,{id:"npmyarn",children:"NPM/Yarn"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-shell",children:`npm install vue-uswds
`})}),`
`,n.jsx(e.p,{children:"or"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-shell",children:`yarn install vue-uswds
`})})]})}function j(s={}){const{wrapper:e}={...r(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(t,{...s})}):t(s)}export{j as default};
