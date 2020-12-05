<template>
  <div>
    <img src="../assets/cat.jpg" id="startScreen" />
  </div>
</template>

<script>

export default {
  name: 'startScreenSource'
}

</script>

<style scoped>

#startScreen {
            position: fixed;
            top:0px;
            left:0px;
            background-color: None;
            animation-duration: 4s;
            animation-iteration-count: 1;
            animation-fill-mode :both;
            z-index: 9999;
            animation-name: StartScreen;
        }   


@keyframes StartScreen {
0% {
    opacity: 1;
    width: 100%;
    height: 100%;
    }
40%{
    opacity: 1;
    }
90% {
    opacity: 0;
    width: 100%;
    height: 100%;
    }

100%{
    opacity: 0;
    width:0%;
    height:0%;
    }
}
</style>
