export default {
    namespaced: true,
    state: {
        contador: 0,
    },
    mutations: {
        aumentarContador(state, payload=0){
            state.contador += payload;
        }
    },
    actions: {

    },
    getters: {
        
    }
}