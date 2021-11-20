<template>
  <b-card class="mx-auto"  id="loginbox" >
    <b-form @submit="request" @reset="onReset" v-if="show">
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
        description="아이디/이메일을 입력해주세요"
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          placeholder="Enter email"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="비밀번호" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.pw"
          placeholder="Enter password"
          required
		type="password"
        ></b-form-input>
		<b-form-input
          id="input-c"
          v-model="form.pwcheck"
          placeholder="비밀번호 확인"
          required
		type="password"
        ></b-form-input>
		  <div v-if="form.pw">{{ doublecheck }}</div>

      </b-form-group>

      <!-- <b-form-group id="input-group-3" label="Food:" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="form.food"
          :options="foods"
          required
        ></b-form-select>
      </b-form-group>

      <b-form-group id="input-group-4" v-slot="{ ariaDescribedby }">
        <b-form-checkbox-group
          v-model="form.checked"
          id="checkboxes-4"
          :aria-describedby="ariaDescribedby"
        >
          <b-form-checkbox value="me">Check me out</b-form-checkbox>
          <b-form-checkbox value="that">Check that out</b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group> -->
		<br>
		<button v-on:click="request()">
			버튼
	</button>
      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
    <b-card class="mt-3" header="Form Data Result">
      <!-- <pre class="m-0">//{//{ form }}</pre> -->
    </b-card>
  </b-card>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          email: '',
          pw: '',
          food: null,
          checked: [],
		pwcheck:''
        },
        foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
        show: true
      }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()
        alert(JSON.stringify(this.form))
		  this.request();
      },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.pw = ''
		this.form.checked = ''
        this.form.food = null
        this.form.checked = []
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      },
		request(){
			console.log("로그인..");
				this.$axios.get('https://confusion-map-bpflw.run.goorm.io/api/process/editor')
					 .then(function(response) {
						console.log(response);
					 })
					.catch(function(error) {

					 });
				alert('요청 완료');
			},
    },
	computed: {
		doublecheck: function () {
		  return (this.form.pwcheck == this.form.pw)?'비밀번호가 일치합니다 ':'비밀먼호가 일치하지 않습니다.';
		}
    }
  }
</script>
<style scoped>
#loginbox {
  margin:2%;
	width:80%;
	
}

</style>