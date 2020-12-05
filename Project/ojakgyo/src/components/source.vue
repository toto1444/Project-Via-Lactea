<!--
nav 개발자: 한지웅

여기는 상단의 NAV를 정의하는 곳입니다.
기능은 x 누르면 nav가 닫히고, 메뉴를 누르면 nav가 열립니다.

현재 연결된 곳은 : HOME.vue
-->

<template>

  <div>
      <div class="game">
        <div class="source1">
          <div class="indImg"> 
            <img src="../assets/chatbot.png" alt="" width="24" height="32"/>
          </div>
            <div> Ragnaros </div>
            <div> 2018년 7월 15일 </div>
        </div>
	<div class="gameEX"> 
		<div class="gameHeader"><a href="/HeartPump"> 하트 펌프(Heart Pump) </a> </div>
		<div class="gameContent"> 캐주얼, 액션, 리듬, 스포츠, 음악 </div>
	</div>
      
      </div>
      <div class="game">
        <div class="source1">
          <div class="indImg">
            <img src="../assets/chatbot.png" alt="" width="24" height="32"/>
          </div>
            <div> SBS Software </div>
            <div> 2017년 1월 15일 </div>
        </div>
        <div class="gameEX">
                <div class="gameHeader"><a href="/DollarTruck"> Dollar Truck </a> </div>
                <div class="gameContent"> 시뮬레이션, 운전, 자동차 시뮬레이션, 오픈월드 </div>
        </div>
      </div>
      <div class="game">
        <div class="source1">
          <div class="indImg">
            <img src="../assets/chatbot.png" alt="" width="24" height="32"/>
          </div>
            <div> LG Twins </div>
            <div> 2020년 2월 22일 </div>
        </div>
        <div class="gameEX">
                <div class="gameHeader"><a href="/zombieCells"> Zombie Cells</a> </div>
                <div class="gameContent"> 2D, 로크라이크, 액셕, 황스크롤(사이드뷰), 어드벤처 </div>
        </div>
      </div>
      <div class="game">
        <div class="source1">
          <div class="indImg">
            <img src="../assets/chatbot.png" alt="" width="24" height="32"/>
          </div>
            <div> Zexon </div>
            <div> 2019년 2월 17일 </div>
        </div>
        <div class="gameEX">
                <div class="gameHeader"><a href="WTFO"> WTFO(What The Fuck Out) </a> </div>
                <div class="gameContent"> 액션, FPS, 4인 협동 플레이, PvE, 호러 </div>
        </div>
      </div>
            <div class="game">
        <div class="source1">
          <div class="indImg">
            <img src="../assets/chatbot.png" alt="" width="24" height="32"/>
          </div>
            <div> PETASS </div>
            <div> 2017년 4월 1일 </div>
        </div>
        <div class="gameEX">
                <div class="gameHeader"><a href="/WBMZ">What a beautiful My Zoo(WBMZ) </a></div>
                <div class="gameContent"> 경영, 시뮬레이션, 건설, 자연, 도시건설, 경제 </div>
        </div>
      </div>
            <div class="game">
        <div class="source1">
          <div class="indImg">
            <img src="../assets/chatbot.png" alt="" width="24" height="32"/>
          </div>
            <div> Sylvanas </div>
            <div> 2015년 7월 15일 </div>
        </div>
        <div class="gameEX">
                <div class="gameHeader"> Climb Guys</div>
                <div class="gameContent"> 멀티플레이어, 유머, 배틀 로얄, 온라인 협동  </div>
        </div>
      </div>
  </div>

</template>

<script>

export default {
  name: "src"
}

</script>

<style scope>

.game {
  border-top: 1px solid #f0f0f5;
  background-color: #f6f8fa;
  padding-bottom: 20px;
}
.gameHeader {
  color: #24292E;
  font-size: 15px;
  margin-top: 10px;
  margin-left: 10px;
}
.gameContent {
  color: #586069;
  margin-top: 5%;
  margin-left: 10px;
  font-size: 12px;
}
.gameEX {
  position: relative;
  border: 1px solid #e1e4e8;
  background-color: #fff;
  border-radius: 6px;
  width: 80%;
  margin-top: 2%;
  left: 15%;
}
.source1 {
  margin-top: 5%;
}
.indImg {
  padding-left: 1%;
  width: 15%;
  float: left;
  border: 50%;
  border-radius: 50%;
  overflow: hidden;
}

.indImg img {
  width: 50px;
}


</style>
