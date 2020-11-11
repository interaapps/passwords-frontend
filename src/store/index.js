import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    fetched: false,
    user: {
      picture: 'https://cdn.interaapps.de/service/accounts/profilepics/53_12432e8f906dbc82fd8368a7ccf5aa2e0ceca6fc2ab0bb53c7f3efeb865ff44941c08bd7365b4d7f7f63a7a9642d1ba07f439fe08ecfecebb6caebd0e5071902676418d7464c3967c770375326d90a1b.png.png',
    },
    encryptionKey: null,
    currentPassword: null,
    masterPassword: null, // The encrypted encryption-key. Null if not exists
    currentFolder: null,
    passwords: {
      root: true,
      folders: {
        1: {
          id: 1,
          folder: {
            name: "New Folder",
            color: "#EA5555",
          },
          folders: {
            3: {
              id: 3,
              folder: {
                name: "Test",
                color: "#586622"
              }
            },
          },
          passwords: {
            44: {
              id: 44,
              name: "YEA, Geschafft!",
              username: "Test@interaapps.de",
              password: "test",
              website: "https://accounts.google.com",
              description: `Test`,
            }
          },
          parent: 0
        },
        2: {
          id: 2,
          folder: {
            name: "Test",
            color: "#58EA55",
          },
          parent: 0
        }
      },
      passwords: {
        34: {
          id: 34,
          name: "Twitter login",
          username: "Test@interaapps.de",
          password: "test",
          website: "https://twitter.com/login",
          description: `Test`
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