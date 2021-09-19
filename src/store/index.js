import { createStore } from 'vuex';
import tareas from '@/modules/tareas'
import contador from '@/modules/contador'

export default createStore({
  state: {
    titulo: 'Titulo desde State'
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    tareas, contador
  },
});
