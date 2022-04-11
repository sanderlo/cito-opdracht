import { createStore } from 'vuex'

class Domein {
    name: string;
    subdomeinen: Subdomein[];
}

class Subdomein {
  name: string
}

class Modal {
  show: boolean;
  title: string;
  content: string;
}

export interface State {
  domeinen: Domein[],
  modal: Modal
}

export default createStore<State>({
  state: {
    domeinen: [],
    modal: {
      show: false,
      content: '',
      title: ''
    }
  },
  mutations: {
    setData(state, data){
      state.domeinen = data;
    },
    setModalShow(state, show){
      state.modal.show = show;
    },
    setModalTitle(state, title){
      state.modal.title = title;
    },
    setModalContent(state, content){
      state.modal.content = content;
    },
  },
  actions: {
    showModal({ commit }, info){
      commit('setModalShow', true);
      commit('setModalTitle', info.title);
      commit('setModalContent', info.content);
    },
    hideModal({ commit }){
      commit('setModalShow', false);
    }
  }
})
