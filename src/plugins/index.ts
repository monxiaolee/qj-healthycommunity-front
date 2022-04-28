import { router } from './router'
import { store, key } from './store'
// import ElementUI from './element-ui'
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'
// import VueSocketIO from 'vue-socket.io'
// import SocketIO from 'socket.io-client'
import { App } from 'vue'
// import lang from 'element-plus/lib/locale/lang/zh-cn'
import 'dayjs/locale/zh-cn'
// import locale from 'element-plus/lib/locale'

export default {
  install(vue: App) {
    vue.use(router)
    vue.use(store, key)
    // vue.use(SocketIO, {
    //   debug: true ,   // debug调试，生产建议关闭
    //   connection: SocketIO("127.0.0.1:1024", {
    //     autoConnect: false,       // 自动连接     这里为我项目需求  需要在指定情况下才连接socket
    //   }),
    // })
    // vue.use(ElementPlus)
    // locale.use(lang) // 设置 element-plus 中文，暂时没法起作用，原因待研究
  }
}