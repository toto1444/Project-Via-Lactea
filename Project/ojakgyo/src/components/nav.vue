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
***   @last     2020-12-03 10:38
***
-->

<template>
  <div>
      <div class="dropdown">
        <button onclick="openNavigation"
        class="dropbtn">Dropdown</button>
      </div>
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');

/* 아이콘을 누르면 펼쳐지는 것에 대한 스타일 */
* {
  font-family: 'Roboto', sans-serif;
  margin: 0px;
  padding: 0px;

}

.navbgcolor {
  position: fixed;
  opacity: 0.9;
  z-index: 1000;
  background-color: #4db9bf;
  width: 100%;
  height: 6%;
}
</style>
