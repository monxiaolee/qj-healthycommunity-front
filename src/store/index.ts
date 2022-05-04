import { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'
import Cookies from 'js-cookie'

export interface State {
  count: number;
  // sidebar: Sidebar
}

export const key: InjectionKey<Store<State>> = Symbol()

// export interface Sidebar {
//   opened: boolean;
// }

export const store =
  createStore<State>({
    state() {
      return {
        count: 0,
        // sidebar: {
        //   opened: Cookies.get('sidebarStatus') ? Cookies.get('sidebarStatus') : true
        // }
      }
    },
    mutations: {
      increment(state) {
        state.count++
      },
      // TOGGLE_SIDEBAR(state) {
      //   state.sidebar.opened = !state.sidebar.opened
      //   if (state.sidebar.opened) {
      //     Cookies.set('sidebarStatus', '1')
      //   } else {
      //     Cookies.set('sidebarStatus', '0')
      //   }
      // }
    },

    actions: {
      toggleSideBar({commit}) {
        commit('TOGGLE_SIDEBAR')
      }
    }
  })
