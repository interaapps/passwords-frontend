import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    fetched: false,
    user: {
    },
    encryptionKey: null,
    currentPassword: null,
    masterPassword: null, // The encrypted encryption-key. Null if not exists
    currentFolder: null,
    notes: [
        {
          id: 1,
          title: "Loading",
          content: "Loading",
          updated_at: "11.9.2001"
        }
    ],
    passwords: {
      root: true,
      folders: {
        1: {
          id: 1,
          folder: {
            name: "LOADING",
            color: "#EA5555",
          },
          parent: 0
        }
      },
      passwords: {
        34: {
          id: 34,
          name: "LOADING",
          username: "LOADING",
          password: "LOADING",
          website: "LOADING",
          description: `LOADING`
        }
      },
      parent: null
    },
    folderModal: null
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})