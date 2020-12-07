<!-- 
nav 개발자: 한지웅
bug 수정: 안아현

여기는 상단의 NAV를 정의하는 곳입니다.
기능은 x 누르면 nav가 닫히고, 메뉴를 누르면 nav가 열립니다.

현재 연결된 곳은 : HOME.vue
-->


<template>
	<div>
		<div class="navigationDropdown">
			<button id="downline" class="dropdown">
				=
			</button>
			<div>
				<router-link to="/">Home </router-link>
				<router-link to="/whatsojacgyo">오작교란?</router-link>
				<router-link to="/team"> 팀소개 </router-link>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'navigation',
	methods: {
		downFunction() {
			var x = document.getElementById("downline");
			if (x.className)
		}
	}
}
</script>

<style scoped>



</style>
