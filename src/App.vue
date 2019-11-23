<template>
  <div class="app-wrapper" id="app">
    <router-view />
  </div>
</template>

<script>
// import Main from "./views/Main.vue";

export default {
  name: "app",
  components: {
    // Main
  }
};
</script>

<style lang="less">
* {
  @import (css)
    url("https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700,800,900&display=swap");
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
.my-1 {
  margin: 0.5rem 0 !important;
}

.py-1 {
  padding: 0.5rem 0 !important;
}

.fw-900 {
  font-weight: 900 !important;
}

.w-100 {
  width: 100% !important;
}

.img-fluid {
  max-width: 100%;
  height: auto;
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
  display: flex;
}
.justify-content-center {
  justify-content: center;
}
.justify-content-between {
  justify-content: space-between !important;
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
.home-btn {
  background-color: grey;
  color: white;
  padding: 0.2rem 1.2rem;
  border-radius: 3px;
  font-weight: 900;
  border: unset;
  border-bottom: 2px darkgreen solid;
}

.edit-btn {
  background-color: white;
  border-radius: 50%;
  height: 25px;
  width: 25px;
  font-weight: 900;
  border: unset;
  border-bottom: 2px darkgreen solid;
}

@media screen and (max-width: 450px) {
  .green-btn {
    padding: 0.25rem 0.35rem;
  }
}
</style>
