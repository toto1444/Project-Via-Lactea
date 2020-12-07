<!-- 
nav 개발자: 한지웅
bug 수정: 안아현

해당 네비게이션은 자바스크립트로 구현되었고, 페이지에 맞게 파랑 색깔을 넣었습니다.

현재 연결된 곳은 : HOME.vue
-->


<template>
	<div>
		<div class="navtotalstyle">
			<div class="navbgstyle">
				<router-link class="homestyle" to='/'>Home</router-link>
				<button class="downbtn" v-on:click="downupbtn"> Dropdwon </button>
			</div>
			<div class="logolocation">
				<img src="../assets/final_logo.png" class="logostyle">
			</div>
			<div id="btnshowing" class="dropstyle">
				<router-link class="dropa1" to="whatsojacgyo">오작교란?</router-link>
				<router-link class="dropa2" to="team">팀소개</router-link>
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
.navtotalstyle {
	position: fixed;
	width: 100%;
	z-index: 8888;
}
.dropa1 {
	border-right: 1px solid #f6f8fa;
}
.homestyle {
	color: #ffffff;
	padding-right: 10px;
	padding-left: 10px;
}
.navbgstyle {
	background-color: #3498DB;
	height: 38px;
}
#btnshowing {
	display: None;
}

.downbtn {
	padding-top: 8px;
	background-color: #3498DB;
	color: white;
	border: none;
	font-size: 14px;
}
.dropstyle a {
	color: white;
	padding: 10px;
	display: inline-block;
	position: relative;
  left: 58px;
	background-color: #51a6fc;
}
.downbtn:hover .downbtn:focus {
	background-color: #2980B9;
}
.logostyle {
	width: 50%;
}
.logolocation {
	position: fixed;
	z-index: 9999;
	left: 80%;
	top: 0%;
}
</style>
