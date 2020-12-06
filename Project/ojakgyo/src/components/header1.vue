<!--
nav 개발자: 한지웅

여기는 상단의 NAV를 정의하는 곳입니다.
기능은 x 누르면 nav가 닫히고, 메뉴를 누르면 nav가 열립니다.

현재 연결된 곳은 : HOME.vue
-->

<template>
  <div>
    <div class="blank">
    </div>
    <div class="srcborder">
      <span class="logo">
        <img src="../assets/header.png" alt="logo">
      </span>
    </div>
  </div>
</template>

<script>

export default {
  name: 'header1'
}

</script>

<style scope>

.blank {
  background-color: #f6f8fa;
  height: 80px;
  width: 100%;
}

.srcborder {
/*  border: 1px solid red; */
  width: 100%;
  height: 200px;
}

.logo {
  margin-top: 10px;
  border-radius: 1px solid #000000;
}

.logo img {
  width: 100%;
  height: 100%;
}

</style>
