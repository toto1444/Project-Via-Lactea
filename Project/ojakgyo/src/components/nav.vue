<!-- 
nav 개발자: 한지웅

여기는 상단의 NAV를 정의하는 곳입니다.
기능은 x 누르면 nav가 닫히고, 메뉴를 누르면 nav가 열립니다.

현재 연결된 곳은 : HOME.vue
-->
<!--
*** 
***   Attempt to Fix Some Minnor Bugs
***
***   @author   AhHyeon An <toto1444@gmail.com>
***   @edit     2020-12-03
***   @last     2020-12-05 10:38
***
-->

<template>
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
          <li :class='{ "selected": selected === 1 }' @click='changeSelected(1)'> <i href="../views/team.vue"></i>About Team</li>
          <li :class='{ "selected": selected === 2 }' @click='changeSelected(2)'> <i href=""></i>Ranking</li>
          <div class='select-highlight'/>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api'
export default {
  name: 'navigation',
  methods: {
    //Dynamically highlight nav elements
    navSelect () {
      const selected = ref(0)
      const changeSelected = (i) => { 
        selected.value = i
        document.getElementsByClassName('select-highlight')[0].style.top = i * 50 + 5 + 'px'
      }
      return {
        changeSelected,
        selected
      }
    },
    // 아이콘을 누르면 NAV가 펼쳐지는 기능을 구현
    openNavigation() {
      document.getElementById('ON').style.width = '300px';
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


<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Sunflower:Light');
/* 아이콘을 누르면 펼쳐지는 것에 대한 스타일 */
* {
  font-family: 'Sunflower', sans-serif;
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
.navCls {
  text-align: center;
  position: relative;
}

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
  background-color: #FAFBFC;
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
