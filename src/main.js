import '../node_modules/uswds/dist/css/uswds.min.css'
import { createApp } from 'vue'
import vueUswds from '@/index.js'
import App from '@/App.vue'

const app = createApp(App)
app.use(vueUswds, {})
app.mount('#app')
