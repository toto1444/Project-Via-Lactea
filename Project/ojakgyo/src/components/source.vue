<template>

  <div>
      <div class="game">
        <div class="source1">
          <div class="indImg"> 
            <img src="../assets/chatbot.png" alt="" width="24" height="32"/>
          </div>
            <div> 이름, 게임 이름 </div>
            <div> 생성날짜 </div>
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
}
.source1 {
  margin-top: 5%;
}
.indImg {
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
