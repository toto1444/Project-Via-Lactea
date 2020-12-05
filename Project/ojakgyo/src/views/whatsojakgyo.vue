<!--
***    
***     스토리 및 내용 구성 담당
***     이 페이지는 팀 오작교를 소개하는 페이지입니다.
***     @author     강성룡  kangsungryong
***     @edit       2020-12-06
***
-->

<template>
  <div class="row">
    <!-- 메인 페이지 -->
    <main class="blogcontainer eight-twelve" role="main">
      <div class="blog-post">
        <!-- 팀 오작교 소개 -->
        <h2 class="entry-title" itemprop="headline">Introduce Team 오작교(Ojakgyo)</h2>
        <br />
        <span class="entry-summary">
          Team 'Ojakgyo'(오작교)는 인디 게임 개발자와 게임 테스터간의 다리를 놓아주는
          "Project Via Lactea" 플랫폼을 제작했습니다. Ojakgyo(오작교)는 설화 '견우와
          직녀'에서 까마귀와 까치가 만든 다리라는 뜻으로, 애인 관계인 사람 혹은 친구와
          친구 애인 사이를 더 돈독하게 만드는 사람(중개자)를 비유할 때 씁니다. 즉, 팀
          오작교는 인디 게임 개발자가 따로 베타테스트를 하기 힘들고 홍보하기 힘들 때, 이
          플랫폼을 사용하면 배타테스터와 홍보를 동시에 잡을 수 있는 기회를 제공하는 다리를
          놓아주는 역할이 됩니다.
        </span>
      </div>
      <br />

      <div class="blog-post">
        <!-- 프로젝트 소개 -->
        <h2 class="entry-title" itemprop="headline">What is "Project Via Lactea"?</h2>
        <br />
        <span class="entry-summary">
          "Project Via Lactea"는 인디 게임 개발자와 게임 테스터를 이어 주는 플랫폼입니다.
          Project Via Lactea는 견우와 직녀 설화의 견우성과 직녀성이 있는 은하수를 뜻하는
          영문인 "Milky Way"에서 착안해 이를 라틴어 "Via Lactea"로 번역한 것입니다.
        </span>
      </div>
      <br />

      <div class="blog-post">
        <!-- 인디 게임 정의 -->
        <h2 class="entry-title" itemprop="headline">What is "Indie Game"?</h2>
        <br />
        <span class="entry-summary">
          인디 게임(Indie Game, Independent Game)이란 소형 개발사에서 대형 기획사나 게임
          회사에서의 지원을 받지 않고, 스스로의 힘으로 제작하거나, 크라우드 펀딩 등의
          방법으로만 자금을 조달하여 제작된 게임을 말합니다. 인디 게임 개발자는 대부분 잘
          알려지지 않은 게임들이 대부분이며, 베타테스터를 모집하기 힘들어서 자잘한 버그가
          간간히 발생하는 경우가 빈번해 인디 게임 개발자들이 힘들어 하는 경우가 많습니다.
          그래서! "Project Via Lactea" 플랫폼이 이를 해결해줄 것입니다.
        </span>
      </div>
      <br />
    </main>
  </div>
</template>

<script>
export default {
  name: "whatsojakgyo",
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Sunflower:Light");
.row {
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 100px;
  margin-bottom: 0;
}
.row::before,
.row::after {
  display: table;
  content: " ";
  clear: both;
}
@media only screen and (min-width: 800px) {
  .four-twelve {
    width: calc(100% / 12 * 3.8);
    float: right;
    background-color: lightgray;
  }
  .eight-twelve {
    width: calc(100% / 12 * 7.8);
    margin-right: calc(100% / 12 * 0.4);
    float: left;
  }
}

@media only screen and (max-width: 799px) {
  .four-twelve {
    width: 100%;
    display: table-footer-group;
  }
  .sidebar-about {
    display: none;
  }
  .eight-twelve {
    display: table-header-group;
  }
}

.sidebar-about,
.blog-post {
  border: 1px solid lightgray;
  padding: 0px 15px 15px 15px;
  border-radius: 3px;
  -webkit-box-shadow: 0 8px 8px -6px #777;
  -moz-box-shadow: 0 8px 8px -6px #777;
  box-shadow: 0 8px 8px -6px #777;
}
.blog-post {
  background-color: rgba(225, 225, 225, 0.1);
}
.sidebar-about {
  padding-top: 10px;
  margin-top: 0px;
}
.blog-row {
  text-decoration: none;
}
.entry-title {
  font-weight: 3000;
  font-family: "sunflower";
}
h2 {
  position: relative;
  text-decoration: none;
  font-family: "Sunflower";
}
.underlined-example {
  position: relative;
  color: #222;
  text-decoration: none;
  font-size: 24px;
  display: inline-block;
}
</style>
