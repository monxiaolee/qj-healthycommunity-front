import { createApp } from 'vue'
import App from './App.vue'

// import '@/styles/element-variables.less'
import '@/styles/index.less'

// plugins
import plugins from './plugins'

createApp(App)
    .use(plugins)
    .mount('#app')