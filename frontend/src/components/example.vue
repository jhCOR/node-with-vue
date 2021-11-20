<template>
  <div >
    <button @click="showTitle">
        여기를 클릭해보세요. 지역 컴포넌트가 출력됩니다.
    </button>
    <br>
    <span class="local_span">{{ title }}</span>
  </div>
</template>
 
<script>
export default {
  name: 'LocalComponent',
  data () {
    return {
      title: ''
    }
  },
  methods: {
    showTitle () {
      this.title = 'Local Component TEST !!'
    }
  }
}
</script>
 
<style scoped>
.local_span {
  margin-top:20px;
  color:blue;
}
</style>