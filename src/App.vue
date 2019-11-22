<template>
  <div class="app-wrapper" id="app">
    <Main />
  </div>
</template>

<script>
import Main from "./views/Main.vue";

export default {
  name: "app",
  components: {
    Main
  }
};
</script>

<style lang="less">
* {
  @import (css) url("https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700,800,900&display=swap");
  font-family: "Montserrat", sans-serif;
}

// * assistance

.p-0 {
  padding: 0 !important;
}

.m-1 {
  margin: 0.5rem !important;
}
.mb-1 {
  margin-bottom: 0 0 0.5rem 0 !important;
}

.fw-900 {
  font-weight: 900 !important;
}

h2 {
  font-size: 22px;
  line-height: 24px;
}
.app-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: url("./assets/bg.jpg") 100% 100% repeat;
  background-size: contain;
}
.d-flex {
  justify-content: center;
}
.justify-content-center {
  justify-content: center;
}
.align-items-center {
  align-items: center !important;
}
// * buttons
button {
  cursor: pointer;
}
.green-btn {
  background-color: green;
  color: white;
  padding: 0.5rem 0.7rem;
  border-radius: 7px;
  font-weight: 900;
  border: unset;
  border-bottom: 4px darkgreen solid;
}
</style>
