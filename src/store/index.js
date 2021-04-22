import { createStore } from 'vuex'

export default createStore({
    state: {
        games: [],
        user: 'login',
    },
    mutations: {
        SetGames(state, games) {
            state.games = games;
        },

        SetUser(state, user) {
            state.user = user;
        }
    },
    actions: {
        // async setGames({ commit }) {
        //     try {
        //         await fetch('https://script.google.com/macros/s/AKfycbzZ2N-8TdxAtDtOrWp9VyPdVJuOdCtMO9APLyOj1GnjTJzz_Er9TpVi6Cf6MF49elHn/exec?action=games.search')
        //             .then(data => data.json())
        //             .then(data => commit("SetGames", data.results));
        //         console.log('entra');
        //     } catch (error) {
        //         console.log(error);
        //     }
        // }
    },
    modules: {}
})