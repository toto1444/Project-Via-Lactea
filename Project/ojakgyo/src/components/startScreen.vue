<template>
  <div>
    <div class="ojacgyoLoading">
      <div class="ojacgyoSpelling">
        <span>O</span>
        <span>J</span>
        <span>A</span>
        <span>C</span>
        <span>G</span>
        <span>Y</span>
        <span>O</span>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'startScreenSource'
}

</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Sunflower:wght@300&display=swap');

* {
  font-family: 'Sunflower', sans-serif;
}

.ojacgyoLoading {
   position: fixed;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   animation-duration: 3.5s;
   animation-iteration-count: 1;
   animation-fill-mode: both;
   animation-name: ojacgyoMove;
   background: #555bf9;
   z-index: 1000;
}
@keyFrames ojacgyoMove {
  0% {
      opacity: 1;
      width: 100%;
      height: 100%;
  }

  40% {
      opacity: 1;
  }

  60% {
      opacity: 0.55;
  }

  99% {
      opacity: 0;
      width: 100%;
      height: 100%;
  }

  100% {
      opacity: 0;
      width: 0%;
      height: 0%;
      display: None;
  }

}

.ojacgyoSpelling {
   position: absolute;
   top: 0;
   bottom: 0;
   left: 0;
   right: 0;
   margin: auto;
   text-align: center;
   width: 100%;
   height: 100px;
   line-height: 100px;
}

.ojacgyoSpelling span {
   display: inline-block;
   margin: 0 5px;
   color: #ffffff;
}

.ojacgyoSpelling span:nth-child(1) {
   filter: blur(4px);
   animation: blur-text 1.5s 0s infinite linear alternate;
}

.ojacgyoSpelling span:nth-child(2) {
   filter: blur(4px);
   animation: blur-text 1.5s 0.2s infinite linear alternate;
}

.ojacgyoSpelling span:nth-child(3) {
   filter: blur(4px);
   animation: blur-text 1.5s 0.4s infinite linear alternate;
}

.ojacgyoSpelling span:nth-child(4) {
   filter: blur(4px);
   animation: blur-text 1.5s 0.6s infinite linear alternate;
}

.ojacgyoSpelling span:nth-child(5) {
   filter: blur(4px);
   animation: blur-text 1.5s 0.8s infinite linear alternate;
}

.ojacgyoSpelling span:nth-child(6) {
   filter: blur(4px);
   animation: blur-text 1.5s 1s infinite linear alternate;
}

.ojacgyoSpelling span:nth-child(7) {
   filter: blur(4px);
   animation: blur-text 1.5s 1.2s infinite linear alternate;
}

@keyframes blur-text {
   0% {
     filter: blur(4px);
  }
   100% {
     filter: blur(0px);

  }
}
</style>
