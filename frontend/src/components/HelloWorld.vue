<template>
  <div class="hello">
	  
    <h1>{{ msg }}</h1>
    <h2>당신의 여유로운 출근을 위한 블랙박스</h2>
   	<div>
		  <img src='../assets/blackbox.jpg'>
	</div>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex';
import { RESET_EDITING_ID, SET_EDITING_ID } from '../store/mutations-types';
import { createNamespacedHelpers } from 'vuex'
const bookHelper = createNamespacedHelpers('book')

export default {
  name: 'HelloWorld',

  data () {
    return {
      msg: 'SMARTY BLACK'
    }
  },
	computed: {
    ...bookHelper.mapState([
      'memos',
      'editingId'
    ])
  },
  methods: {
    ...mapMutations('change', [
        'changeMessage'     // -> this.changeMessage()
    ]),
     ...mapActions('book', [
        'callMutation'      // -> this.callMutation()
    ]),

	  makeEvent () {
		 this.callMutation({message:"123"});
    },
	   change () {
		 this.changeMessage({message:"123"});
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
