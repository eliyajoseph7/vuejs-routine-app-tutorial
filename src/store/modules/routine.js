import axios from 'axios'

const state = {
    routines: []
}

const getters = {
    allRoutines: state => state.routines
}

const actions = {
    async fetchRoutines({ commit }) {
        const response = await axios.get('https://5e98afff5eabe7001681c474.mockapi.io/api/v1/routines')

        commit('setRoutines', response.data)
    },

    async deleteRoutine({ commit }, id) {
        await axios.delete(`https://5e98afff5eabe7001681c474.mockapi.io/api/v1/routines/${id}`)

        commit('removeRoutine', id)
    },

    async addRoutine({ commit }, data) {
        const response = await axios.post('https://5e98afff5eabe7001681c474.mockapi.io/api/v1/routines', data)

        commit('newRoutine', response.data)
    },

    async filterRoutine({ commit }, event) {
        const limit = parseInt(event.target.options[event.target.options.selectedIndex].innerText)

        const response = await axios.get(`https://5e98afff5eabe7001681c474.mockapi.io/api/v1/routines?_limit=${limit}`)

        commit('setRoutines', response.data)
    }
}

const mutations = {
    setRoutines: (state, routines) => (state.routines = routines),
    removeRoutine: (state, id) => state.routines = state.routines.filter(routin => routin !== id),
    newRoutine: (state, routine) => state.routines.push(routine),
}


export default {
    state,
    getters,
    actions,
    mutations
}