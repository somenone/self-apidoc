<template>
  <div class="home">
    <div class="top"></div>
    <div class="content">
      <div class="left"></div>
      <Main/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Main from '@/views/main/index'

export default {
  name: 'Home',
  components: {
    Main
  }
}
</script>

<style scoped>
/* .home{
  display: flex;
  
} */
.content{
  position: absolute;
  display: flex;
  height: 100%;
  padding-top: 40px;
  width: 100%;
}
.top{
  height: 40px;
  background-color: #333;
  width: 100%;
  position: fixed;
}
.left{
  height: 100%;
  width: 200px;
  background-color: #333;
}

</style>
