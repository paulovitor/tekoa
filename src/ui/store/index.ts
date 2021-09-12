import { GetterTree, ActionTree, MutationTree } from 'vuex'

export const state = () => ({
  track: '',
  tracks: [
    {
      title: 'Gerente de Produto',
      to: { name: 'track' }
    },
    {
      title: 'Designer de Produto',
      to: { name: 'track' }
    },
    {
      title: 'Tech Lead',
      to: { name: 'track' }
    },
    {
      title: 'Desenvolvedor(a)',
      to: { name: 'track' }
    },
    {
      title: 'DevOps',
      to: { name: 'track' }
    },
    {
      title: 'Quality Assurance',
      to: { name: 'track' }
    }
  ]
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  track: state => state.track,
  tracks: state => state.tracks
}

export const mutations: MutationTree<RootState> = {
  CHANGE_TRACK: (state, newTrack: string) => (state.track = newTrack)
}

export const actions: ActionTree<RootState, RootState> = {
  changeTrack ({ commit }, track) {
    commit('CHANGE_TRACK', track)
  },
  async getTracks ({ commit }) {
    const data = this.$axios.$get('/api/tracks')
    console.log(data)
  }
}
