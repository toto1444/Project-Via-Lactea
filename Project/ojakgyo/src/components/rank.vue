<template>

  <div>
  <!-- 이달의 게임 -->
    <div class="ranking">
      <div>
        <p class="ofMonth"> 이달의 인디게임  </p>
      </div>

      <div class="rangkingBorder">
        <img src="../assets/user2.png" class="rankImg">
          <div class="rankName"> Dollar Truck </div><br>
          <div class="rankExplicate"> 자동차 시뮬레이션</div>
        <div class="rankUp">
          <p> 1234 ▲</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: "rank"
}

</script>

<style scope>
@import url('https://fonts.googleapis.com/css2?family=Sunflower:wght@300&display=swap');

* {
  font-family: 'Sunflower', 'sans-serif';
}
.rankingBorder {
  border-top: 1px solid #f0f0f5;
  border-bottom: 1px solid red;
}
.ranking {
  margin-top: 20px;
  border-top: 1px solid #f0f0f5;
}
.rankImg {
  float: left;
  margin-top: 2%;
  width: 20%;
}
.rankName {
  position: relative;
  left: 4%;
  padding-top: 15px;
  float:left;
  width: 30%;
}
.rankExplicate {
  position: relative;
  padding-top: 10px;
  width: 50%;
  left: 4%;
}
.rankUp {
  position: relative;
  color: #d75a5a;
  left: 80%;
  top: -60px;
  width: 20%;
  margin-right: 5%;
  margin-top: 2%;
}
.ofMonth {  
  padding-top: 15px;
  color: #556bf9;
}

</style>
