<template>
  <div class="exception">
    <img src="@/assets/images/404.jpg" />
    <el-button @click="goHome" class="btn-home">回首页</el-button>
  </div>
</template>
<script>
export default {
  name: '404',
  methods: {
    goHome() {
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss">
.exception {
  position: relative;
  img {
    position: fixed;
    left: 17%;
    height: 100vh;
  }
  .btn-home {
    position: fixed;
    bottom: 75px;
    left: 50%;
    margin-left: -34px;
    background-color: #5e81ab;
    color: #fff;
    border: 0;
  }
}
</style>