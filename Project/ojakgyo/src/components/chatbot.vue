<!--
  chatbot 개발자: 한지웅

  간단한 정보를 얻을 수 있는 쳇봇을 구현했습니다.
-->
<template>
  <div>
    <button type="button" class="buttonU" id="buttonUP" v-on:click="buttonUP()"><img src="../assets/chatbot.png" class="chatbotIMG"/></button>
    <div class="chatPopup" id="chatCircle">
      <div class="chatTop"> 
        <span class="ManagerName"> chatBot Manager</span>
        <a class="Xright" id="chatClose" v-on:click="buttonDOWN()"> &times; </a> 
      </div>
      <div id="messageBOX">
        <div class="conversationBox2" id="conversationBox3" >
          <ul id="conversationBox">
            <li>
              <div class="chatbotMessage">
                <span> 무엇을 도와드릴까요?</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div id="inputForm" class="massageBottom">
        <form id="form" v-on:submit.prevent="onSubmit">
          <input id="inputMessage" placeholder="메세지를 입력하세요.">
          <button v-on:submit.prevent="onSubmit"><img class="onSubmitImg" src="../assets/give2.png"></button>
        </form>
      </div>
    </div>
  </div>
</template>



<script>

export default {
  name: 'chatbot',
  methods: {
    buttonUP() {
      var chatCircleVar = document.getElementById("chatCircle");
      chatCircleVar.style.opacity = "1";
      chatCircleVar.style.bottom = "20px";
      document.getElementById("buttonUP").style.display = "None";
    },
    buttonDOWN() {
      var chatCloseVar = document.getElementById("chatCircle");
      chatCloseVar.style.bottom = "-990px";
      chatCloseVar.style.opacity = "0";
      document.getElementById("buttonUP").style.display="block";
    },
    onSubmit() {
      // 페이지 제로드 방지 및 
      var inputM = document.getElementById('inputMessage');
      console.log(inputM.value)
      var giveM = document.createElement('li');
      var giveB = document.createElement('li');
      var addMessage = document.getElementById('conversationBox');
      var addMessage2 = document.getElementById('conversationBox3')
      if (inputM.value === "개발자"){
        
        giveM.innerHTML = '<div class="anonymousM"> <span>' + inputM.value + '</span> </div>';
        addMessage.appendChild(giveM);
        inputM.value = '';
        giveB.innerHTML = '<div class="chatbotMessage"> <span>' + "한지웅, 안아현, 강성룡" + '</span> </div>';
        setTimeout(function(){ addMessage.appendChild(giveB);}, 400);
      
        setTimeout(function(){addMessage2.scrollTo({top: addMessage2.scrollHeight, behavior: 'smooth'})} ,700);
      }else if(inputM.value === "오죽교?"){
        
        giveM.innerHTML = '<div class="anonymousM"> <span>' + inputM.value + '</span> </div>';
        addMessage.appendChild(giveM);
        inputM.value = '';       
        giveB.innerHTML = '<div class="chatbotMessage"> <span>' + "오죽교는 개발자를 위한 징검다리입니다." + '</span> </div>';
        setTimeout(function(){ addMessage.appendChild(giveB);}, 1000);
        setTimeout(function(){addMessage2.scrollTo({top: addMessage2.scrollHeight, behavior: 'smooth'})} ,700);

      }else{
        giveM.innerHTML = '<div class="anonymousM"> <span>' + inputM.value + '</span> </div>';
        addMessage.appendChild(giveM);
        inputM.value = '';
        setTimeout(function(){addMessage2.scrollTo({top: addMessage2.scrollHeight, behavior: 'smooth'})} ,700);
      }   
  }
  }}
</script>

<style scope>
html {
  scroll-behavior:  smooth;
}
.conversationBox2 {
  height: 230px;
  width: 100%;
  overflow-y: scroll;
}
.conversationBox2 li {
  list-style: None;
}
#messageBOX {
  overflow: hidden;
  overflow-y:scroll;

}
#inputMessage {
  width: 85%;
  height: 20px;
}
.massageBottom {
  position: absolute;
  bottom: 0;
  background-color:  #d1d5da;
  width: 100%;
  height: 25px;
}
.onSubmitImg {
  width: 24px;
  height: 13px;
}
.anonymousM {
  float: right;
  background-color: #ffffff;
  margin-top: 10px;
  min-height: 30px;
  min-width: 160px;
  border-radius: 25px;
  border-bottom-right-radius: 5px;
  text-align: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

}
.anonymousM span{
  display: inline-block;
}
.chatbotIMG {
  border-radius: 15px;
  width: 50px;
  height: 50px;
}
.chatTop {
  background-color: #959da5;
  height: 35px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

.ManagerName {
  display:block;
	color: #ffffff;
	margin-left: 10px;
}
.Xright {
	position: absolute;
	left: 90%;
	top: 0%;
  cursor: pointer;
  margin-right: 15px;
}
.chatPopup {
  width: 230px;
  height: 300px;
  right: 20px;
  bottom: -990px;
  position: fixed;
  background-color: #d1d5da;
  border-radius: 10px;
  transition: 0.5s;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.buttonU {
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  position: fixed;
  display: block;
  right: 5%;
  top: 90%;
}

.chatbotMessage {
  background-color: #dbedff;
  width: 170px;
  font-size: 15px;
  margin-top: 5px;
  margin-left: 5px;
  padding: 5px;
  border-radius: 10px;
  border-bottom-left-radius: 5px;
  float: left;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>
