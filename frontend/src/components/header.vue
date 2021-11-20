<template>
	<div id='bar'>
	  <b-navbar toggleable="lg" type="dark" variant="dark">
		<b-navbar-brand to='/' style="margin-left:0.2em;">SMARTY BLACK</b-navbar-brand>

		<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

		<b-collapse id="nav-collapse" is-nav>
		  <b-navbar-nav>
			<b-nav-item to='/introduce'>서비스 소개</b-nav-item>
			<b-nav-item to="login">로그인</b-nav-item>
		  </b-navbar-nav>

		  <!-- Right aligned nav items -->
		  <b-navbar-nav class="ml-auto">

			<b-nav-item-dropdown text="메뉴" class="right" right style="float:right;">
			  <b-dropdown-item href="#">SMARTY 클라우드</b-dropdown-item>
			  <b-dropdown-item href="#">SMARTY 영상 분석</b-dropdown-item>
			</b-nav-item-dropdown>

		  </b-navbar-nav>
		</b-collapse>
	  </b-navbar>
	</div>
</template>
<script>
export default{
	name:'navheader'
}
</script>
<style scoped>
#bar {
  margin:2%;
}
	.right{
		float:right;
	}
</style>