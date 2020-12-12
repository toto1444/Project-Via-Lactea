<!--

페이지 개발자: 한지웅
내용 구성: 안아현

해당 페이지는 마크다운으로 작성 후 , typora를  이용해서

개발했습니다.

-->
<template>

	<div>
    <div>
        <p class="pr"> toto1444/Project-Via-Lactea is licensed under the </p>
        <h4> GNU General Public License v3. </h4><br>
        <p class="pr"> Permissions of this strong copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights.</p><br>
    </div>
    <div class="copyDivKing">
        <div class="copyDiv1">
          <h4> Permissions </h4><br>
          <ul class="copyLi">
            <li> <img src="../assets/done-24px.svg"/> Commercial use </li>
            <li> <img src="../assets/done-24px.svg"/> Modification </li>
            <li> <img src="../assets/done-24px.svg"/> Distribution </li>
            <li> <img src="../assets/done-24px.svg"/> Patent use </li>
            <li> <img src="../assets/done-24px.svg"/> Private use </li>
            </ul>
        </div>
        <div class="copyDiv2">
          <h4> Limitations </h4><br>
          <ul class="copyLi">
            <li> <img src="../assets/clear-24px.svg" /> Liablility </li>
            <li> <img src="../assets/clear-24px.svg" /> Warranty </li>
          </ul>
        </div>
        <div class="copyDiv3">
          <h4> Conditions </h4><br>
          <ul class="copyLi">
            <li> <img src="../assets/search-24px.svg" /> License and copyright notice </li>
            <li> <img src="../assets/search-24px.svg" /> State change </li>
            <li> <img src="../assets/search-24px.svg" /> Disclose source </li>
            <li> <img src="../assets/search-24px.svg" /> Same license </li>
          </ul>
        </div>
      </div>
  </div>
</template>

<script>
  export default {
    name: "copyrightSource"
  }
</script>

<style scoped>
.copyLi li {
  font-size: 13px;
  list-style: None;
}
.pr {
  font-size: 12px;
  color: #586069;
}

.copyDivKing {
  width: 100%;
}
.copyDiv1 {
  display: inline;
  float: left;
  width: 33%;
}
.copyDiv2 {
  display:inline;
  float: left;
  width: 33%;
}

.copyDiv3 {
  display: inline;
  float: right;
  width: 34%;
}
</style>
