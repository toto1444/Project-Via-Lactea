<!--
source  개발자: 한지웅

내용 구성: 강성룡

해당 페이지는 게시글이 등록된 것을 보여주는 사이트이며, 간략한 설명과 함께 표현했습니다.

현재 연결된 곳은 : HOME.vue
-->

<template>

  <div>
      <div class="game">
        <div class="source1">
          <div class="indImg"> 
            <img src="../assets/user1.png" alt="" width="24" height="32" />
          </div>
            <div> Ragnaros </div>
            <div> 2018년 7월 15일 </div>
        </div>
        <div class="gameEX"> 
          <div class="gameHeader">
            <router-link style="text-decoration: None; color: black" to="/HeartPump">
              하트 펌프(Heart Pump) 
            </router-link> 
          </div>
          <div class="gameContent">
              캐주얼, 액션, 리듬, 스포츠, 음악 
          </div>
        </div>
      
      </div>
      <div class="game">
        <div class="source1">
          <div class="indImg">
            <img src="../assets/user2.png" alt="" width="24" height="32" />
          </div>
            <div> SBS Software </div>
            <div> 2017년 1월 15일 </div>
        </div>
        <div class="gameEX">
                <div class="gameHeader">
                  <router-link style="text-decoration: None; color: black" to="/DollarTruck">
                    Dollar Truck 
                  </router-link> 
                </div>
                <div class="gameContent">
                  시뮬레이션, 운전, 자동차 시뮬레이션, 오픈월드 
                </div>
        </div>
      </div>
      <div class="game">
        <div class="source1">
          <div class="indImg">
            <img src="../assets/user3.png" alt="" width="24" height="32" />
          </div>
            <div> LG Twins </div>
            <div> 2020년 2월 22일 </div>
        </div>
        <div class="gameEX">
                <div class="gameHeader">
                  <router-link style="text-decoration: None; color: black" to="/zombieCells">
                    Zombie Cells
                  </router-link>
                </div>
                <div class="gameContent">
                  2D, 로크라이크, 액션, 황스크롤(사이드뷰), 어드벤처
                </div>
        </div>
      </div>
      <div class="game">
        <div class="source1">
          <div class="indImg">
            <img src="../assets/user4.png" alt="" width="24" height="32" />
          </div>
            <div> Zexon </div>
            <div> 2019년 2월 17일 </div>
        </div>
        <div class="gameEX">
                <div class="gameHeader">
                  <router-link style="text-decoration: None; color: black" to="/WTFO">
                  WTFO(What The Fuck Out) 
                  </router-link>
                </div>
                <div class="gameContent">
                  액션, FPS, 4인 협동 플레이, PvE, 호러
                </div>
        </div>
      </div>
            <div class="game">
        <div class="source1">
          <div class="indImg">
            <img src="../assets/user5.png" alt="" width="24" height="32" />
          </div>
            <div> PETASS </div>
            <div> 2017년 4월 1일 </div>
        </div>
        <div class="gameEX">
                <div class="gameHeader">
                  <router-link style="text-decoration: None; color: black" to="/WBMZ">
                    What a beautiful My Zoo(WBMZ)
                  </router-link>
                </div>
                <div class="gameContent">
                  경영, 시뮬레이션, 건설, 자연, 도시건설, 경제
                </div>
        </div>
      </div>
      <div class="gameFinal">
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


a {
  text-decoration: None;
}
.game {
  border-top: 1px solid #f0f0f5;
  background-color: #f6f8fa;
  padding-bottom: 20px;
}
.gameFinal {
  border-top: 1px solid #f0f0f5;
  box-shadow: 0 4px 2px -2px #bfbfbf;

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
