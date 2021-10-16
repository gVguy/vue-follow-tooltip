import { createApp } from 'vue'
import Demo from './demo.vue'
import Tooltip from '../src/tooltip.js'

const app = createApp(Demo)

app.use(Tooltip)
app.mount('#app')

document.title = 'vue-follow-tooltip'
