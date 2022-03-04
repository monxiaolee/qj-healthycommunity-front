import { createApp } from 'vue'
import App from './App.vue'

// plugins
import plugins from './plugins'

createApp(App)
.use(plugins)
.mount('#app')