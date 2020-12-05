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
    <div class="container">
      <div class="sidebar four-twelve">
        <div class="container">
          <!-- 사이드 about -->
          <ul class="side-about">
            <div class="text-right"></div>
          </ul>

          <!-- 사이드바 네비게이션 -->
          <ul class="sidebar-nav">
            <!-- 사이드바 헤딩 -->
            <div class="sidebar-heading">
              <h4>Noticeboard</h4>
            </div>
            <li class="sidebar-nav-item"><a id="fake" href="#"></a></li>
            <li class="sidebar-nav-item"><a id="fake" href="#"></a></li>
            <li class="sidebar-nav-item"><a id="fake" href="#"></a></li>
          </ul>
        </div>
      </div>

      <!-- 메인 페이지 -->
      <main class="blogcontainer eight-tweleve" role="main">
        <div class="blog-post">
          <!-- 팀 오작교 소개 -->
          <h2 class="entry-title" itemprop="headline">
            <a id="fake" href="#">팀 오작교(Ojakgyo) 소개</a>
          </h2>
          <br />
          <span class="entry-summary">
            Team 'Ojakgyo'(오작교)는 인디 게임 개발자와 게임 테스터간의 다리를 놓아주는
            "Project Via Lactea" 플랫폼을 제작했습니다. Ojakgyo(오작교)는 설화 '견우와
            직녀'에서 까마귀와 까치가 만든 다리라는 뜻으로, 애인 관계인 사람 혹은 친구와
            친구 애인 사이를 더 돈독하게 만드는 사람(중개자)를 비유할 때 씁니다. 즉, 팀
            오작교는 인디 게임 개발자가 따로 베타테스트를 하기 힘들고 홍보하기 힘들 때, 이
            플랫폼을 사용하면 배타테스터와 홍보를 동시에 잡을 수 있는 기회를 제공하는
            다리를 놓아주는 역할이 됩니다.
          </span>
        </div>
        <br />

        <!--  -->
        <div class="blog-post">
          <h2 class="entry-title" itemprop="headline">
            <a id="fake" href="#"></a>
          </h2>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  name: "whatsojakgyo",
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Sunflower:Light");
</style>
