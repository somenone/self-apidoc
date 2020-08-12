<template>
  <div class="home">
    <Top class="top" />
    <div class="content">
      <Left class="left"/>
      <Main/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Main from '@/views/main/index'
import Left from '@/views/Left/index'
import Top from '@/views/Top/index'


export default {
  name: 'Home',
  components: {
    Main,
    Left,
    Top
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
  z-index: 1;
}
.left{
  height: 100%;
  width: 240px;
  background-color: #333;
}

</style>
