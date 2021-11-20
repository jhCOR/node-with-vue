import {
  changeMessage
} from './mutations-types';
// state
const state = {
    message: 'Hello'
}

// actions
const actions = {
    callMutation ({ state, commit },  newMsg ) {
      commit('changeMessage', newMsg.message)
		console.log(newMsg.message);
    }
}

// getters
const getters = {
    getMsg (state) {
      return `${state.message} => Length : ${state.message.length}`
    }
}

export default {
namespaced: true,

  state,
  actions,
  getters
}