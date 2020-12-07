<!-- 
nav 개발자: 한지웅
bug 수정: 안아현

여기는 상단의 NAV를 정의하는 곳입니다.
기능은 x 누르면 nav가 닫히고, 메뉴를 누르면 nav가 열립니다.

현재 연결된 곳은 : HOME.vue
-->


<template>
	<div>
		<div>
			<div class="navbgstyle">
				<router-link to='/'>Home</router-link>
				<button class="downbtn" v-on:click="downupbtn"> Dropdwon </button>
			</div>
			<div id="btnshowing">
				<router-link class="dropa" to="whatsojacgyo">오작교란?</router-link>
				<router-link class="dropa" to="team">팀소개</router-link>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'navigation',
  methods: {
		downupbtn() {
			var showing =  document.getElementById("btnshowing");
			if (showing.style.display === "") {
				showing.style.display = "block";
			}  else {
				showing.style.display = "";
			}
		}
	}
}
</script>

<style scoped>
.navbgstyle {
	background-color: #3498DB;
	height: 35px;
}
#btnshowing {
	display: None;
}

.downbtn {
	background-color: #3498DB;
	color: white;
	border: none;
}

.downbtn:hover .downbtn:focus {
	background-color: #2980B9;
}
</style>
