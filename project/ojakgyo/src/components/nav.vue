<!-- 
nav 가발자: 한지웅

여기는 상단의 NAV를 정의하는 곳입니다.
기능은 x 누르면 nav가 닫히고, 메뉴를 누르면 nav가 열립니다.

현재 연결된 곳은 : HOME.vue
-->

<template>
  <div>
    <div class="navback">
      <img src="../assets/resLogo.png" class="logoSize" > 
      <span v-on:click="openNavigation()" class="navICON">&#9776;</span>
    </div>
    <div class="navC" id="ON">
      <div class="nav1">
        <a href="" v-on:click="closeNavigation()">&times;</a>
      </div>
      <div class="nav2">
        <a href="">Why Ojakgyo?</a>
        <a href="">Team</a>
        <a href="">Lanking</a>
        <a href=""> 미정 </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'navigation',
  methods: {
    // 아이콘을 누르면 NAV가 펼쳐지는 기능을 구현
    openNavigation() {
      document.getElementById('ON').style.width = "150px";
      document.getElementById('ON').style.opacity = "1";
    },
    // 아이콘을 누르면 NAV가 닫히는 기능을 구현
    closeNavigation() {
      document.getElementById('ON').style.opacity ="0";
      document.getElementById('ON').style.width = "0px";
    }
  }
}
</script>


<style scope>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');
/* 아이콘을 누르면 펼쳐지는 것에 대한 스타일 */
* {
  font-family: 'Roboto', sans-serif;
  margin: 0px;
  padding: 0px;

}
.logoSize {
  position: relative;
  left: 45%;
  width: 8%;
}
.navback {
  position: fixed;
  z-index: 1000;
  background-color: #4db9bf;
  width: 100%;
  height: 6%;
}
.navICON {
  position: relative;
  left: 80%;
  display: inline-block;
  overflow-x: hidden;
  z-index: 1;
  cursor: pointer;
  font-size: 30px;
}

.navC {
  z-index:2000;
  height: 100%;
  width: 0%;
  font-size: 17px;
  position: fixed;
  background-color: #ffffff;
  overflow-y: hidden;
  transition: 0.1s;
  box-shadow: 0px 0px 10px rgba(0,0,0,0.3);
}

.nav1 {
  background-color: #FAFBFC;
}
.nav2 {
  background-color: #FFFFFFB3;
}
.nav1 a{
  color: #24292E;
  padding: 12px 8px 8px 20px;
  text-decoration: None;
  display: block;
  border-bottom: 1px solid gray;
  margin-right: 17px;
  margin-left: 8px;
}
.nav2 a{
  color: #24292E;
  padding: 12px 8px 8px 5px;
  text-decoration: None;
  display: block;
  border-bottom: 1px solid gray;
  margin-right: 17px;
  margin-left: 8px;
}
</style>
