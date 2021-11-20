<template>
  <div >
	  
    <h1>왜 꼭 블랙박스는 차에서 봐야할까요?<b-icon icon="building"></b-icon></h1>
    <h5>이제 회사에 도착한 후 여유로울 때 영상을 확인하세요!</h5>
	<br>
	<h1>영상을 보내지도 못하고 실시간 알림만 보내서 불편하셨나요? <b-icon icon="camera-fill"></b-icon></h1>
    <h5>‘스마티 블랙’은 쉴 때, 근무 중일 때 직장인의 신경을 빼앗지 않습니다. 나중에 한꺼번에 확인해도 편라히니까요!</h5>
	<br>
	<h1>가족간에 공유하는 블랙박스 영상<b-icon icon="cloud-arrow-up"></b-icon></h1>
    <h5>가족 간 영상 공유에 영상에 메모 추가까지 가능합니다!</h5>
	<br>
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
