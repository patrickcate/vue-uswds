import{ae as n,af as s}from"./index-bd97c289.js";import{u as t}from"./index-ba81212d.js";import"./iframe-46e960f9.js";import"../sb-preview/runtime.js";import"./index-760c6342.js";import"./index-1b441bc2.js";import"./index-356e4a49.js";function p(o){const e={code:"code",em:"em",h1:"h1",h2:"h2",p:"p",pre:"pre",...t(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{title:"Guide/Usage"}),`
`,n.jsx(e.h1,{id:"usage",children:"Usage"}),`
`,n.jsxs(e.p,{children:["When importing the library via NPM you can import all components or use the ",n.jsx(e.em,{children:"À La Carte"})," method to import only specific components. The ",n.jsx(e.em,{children:"À La Carte"})," method makes it easier to reduce the final bundle size of your application by only including components you are using."]}),`
`,n.jsx(e.h2,{id:"all-components",children:"All Components"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// main.js
import { createApp } from 'vue'
import VueUswds from 'vue-uswds'
import App from './App.vue'

const app = createApp(App)

app.use(VueUswds, {
  // ...options
})

app.mount('#app')
`})}),`
`,n.jsx(e.h2,{id:"à-la-carte",children:"À La Carte"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// main.js
import { createApp } from 'vue'
import VueUswds from 'vue-uswds/core' // Import only the core library.
import App from './App.vue'

const app = createApp(App)

app.use(VueUswds, {
  // ...options
})

app.mount('#app')
`})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// MyComponent.vue
<script>
import { UsaTag } from 'vue-uswds/components'

export default {
  components: { UsaTag },
}
<\/script>

<template>
  <UsaTag>My Custom Tag</UsaTag>
</template>
`})}),`
`,n.jsx(e.p,{children:"If there are components you wish to use anywhere in your app without first importing them, you can register them globally."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// main.js
import { createApp } from 'vue'
import VueUswds from 'vue-uswds/core' // Import only the core library.
import { UsaTag } from 'vue-uswds/components' // Import only the \`UsaTag\` component.
import App from './App.vue'

const app = createApp(App)

app.use(VueUswds, {
  // ...options
})

// Register any global components...
app.component('UsaTag', UsaTag)

app.mount('#app')
`})})]})}function d(o={}){const{wrapper:e}={...t(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(p,{...o})}):p(o)}export{d as default};
