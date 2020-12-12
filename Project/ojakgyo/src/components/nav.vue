<!-- 
nav 개발자: 한지웅
bug 수정: 안아현

해당 네비게이션은 자바스크립트로 구현되었고, 페이지에 맞게 파랑 색깔을 넣었습니다.

현재 연결된 곳은 : HOME.vue
-->
<!--
*** 
***   Attempt to Fix Some Minor Bugs, Massive merge.
***
***   @author   AhHyeon An <toto1444@gmail.com>
***   @edit     2020-12-03
***   @last     2020-12-07 22:18
***
-->

<template>
<!-- Original Side-nav menu
  <div>
    <div class="navback">
      <img src="../assets/resLogo.png" class="logoSize" > 
      <span @load="dynamicWidth" v-on:click="openNavigation()" class="navICON">&#9776;</span>
    </div>
    <div class="navC" id="ON">
      <div class="nav1">
        <span v-on:click="closeNavigation()" class="navCls">&times;</span>
      </div>
      <div class="nav2">
        <ul class="nav2_nav">
          <li :class='{ "selected": selected === 0 }' @click='changeSelected(0)'><i class="fa fa-globe"></i>What's Ojakgyo?</li>
          <li :class='{ "selected": selected === 1 }' @click='changeSelected(1)'> <i class='fa fa checkbox'></i>About Team</li>
          <li :class='{ "selected": selected === 2 }' @click='changeSelected(2)'> <i class='fa fa checkbox'></i>Ranking</li>
          <div class='select-highlight'/>
        </ul>
      </div>
    </div>
  </div>
-->
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
				<router-link class="dropa1" to="whatsojakgyo">오작교란?</router-link>
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

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Sunflower:Light');
/* 아이콘을 누르면 펼쳐지는 것에 대한 스타일 */
* {
  font-family: 'Sunflower', sans-serif;
  margin: 0px;
  padding: 0px;
}

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

/*
.navC {
  z-index:2000;
  height: 100%;
  width: 0%;
  font-size: 17px;
  position: fixed;
  background-color: #fcfcfc;
  overflow-y: hidden;
  transition: 0.1s;
  box-shadow: 0px 0px 10px rgba(0,0,0,0.3);
}

.nav1 {
  background-color: #fcfcfc;
}

.nav2{
  height: 100vh;
  max-height: 100vh;
  overflow: hidden;
  position: relative;
  width: 300px;
  font-size: 1.2em;
  background-color: #fcfcfc;
  padding: 30px 0 0 30px;
  box-sizing: border-box;
  float: left;
}

ul.nav2_nav{
  width: 100%;
  position: relative;
  li {
    padding: 10px 0;
    font-size: 0.9em;
    color: #d2dae2;
    cursor: pointer;
    margin-bottom: 10px;
    
    &.selected {
      color: #3a2bc4;
    }

    i {
      width: 40px;
      color: inherit;
    }
  }
  li:hover {
      color: #3a2bc4;
     }
}

.select-highlight {
  position: absolute;
  right: 0;
  top: 5px;
  height: 30px;
  width: 4px;
  background-color: #3a2bc4;
  transition: 0.1s top ease-out;
}

.nav1 a{
  color: #24292E;
  padding: 12px 8px 8px 20px;
  text-decoration: None;
  display: block;
  border-bottom: 1px solid #fcfcfc;
  margin-right: 17px;
  margin-left: 8px;
}
.nav2 a{
  color: #24292E;
  padding: 12px 8px 8px 5px;
  text-decoration: None;
  display: block;
  border-bottom: 1px solid #fcfcfc;
  margin-right: 17px;
  margin-left: 8px;
}
*/

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
