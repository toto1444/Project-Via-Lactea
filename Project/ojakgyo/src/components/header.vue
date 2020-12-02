<template>
  <div>
    <div class="blank">
    </div>
    <div class="srcborder">
      <span class="logo">
        <img src="../assets/header.png" alt="logo">
      </span>
    </div>
  </div>
</template>

<script>

export default {
  name: 'header'
}

</script>

<style scope>

.blank {
  background-color: #f6f8fa;
  height: 80px;
  width: 100%;
}

.srcborder {
/*  border: 1px solid red; */
  width: 100%;
  height: 200px;
}

.logo {
  margin-top: 10px;
  border-radius: 1px solid #000000;
}

.logo img {
  width: 100%;
  height: 100%;
}

</style>
