import '../node_modules/uswds/dist/css/uswds.min.css'
import { createApp } from 'vue'
import VueUswds from './index.js'
import App from './App.vue'

const app = createApp(App)
app.use(VueUswds, {})
app.mount('#app')
