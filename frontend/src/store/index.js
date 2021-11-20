import Vue from 'vue';
import Vuex from 'vuex';

import states from './states.js';
import books from './book.js';
import getters from './getters.js';
import mutations from './mutations.js';
import actions from './actions.js';

Vue.use(Vuex);

export default new Vuex.Store({
     modules: {
        book: books,
		 change:mutations
    }
});
