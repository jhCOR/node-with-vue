import {
  changeMessage
} from './mutations-types';
// mutations
const mutations = {
     changeMessage (state, newMsg) {
      state.message = newMsg
		 console.log('newMsg.message+++');
		 console.log(newMsg.message);
    }
}
export default {
	namespaced: true,
  mutations
};