<template>
  <div class="top">
    <div class="top-logo">
      <span>logo</span>
    </div>
    <div class="top-project">
      <el-popover placement="top" width="160" v-model="visible">
        <div class="project-list">
          <p v-for="(item,index) in projectFrom" :key="index" @click="changeProject(index)" class="project-list-item">
            {{item.name}}
          </p>
        </div>
        <div class="projects-show" slot="reference">{{$route.params.projectname}}</div>
      </el-popover>
    </div>
    <div class="top-menu">menu</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
      projectFrom: [{
        name:"project1",
        baseurl:""
      },{
        name:"project2",
        baseurl:""
      },{
        name:"project3",
        baseurl:""
      },{
        name:"project4",
        baseurl:""
      }]
    }
  },
  methods:{
    changeProject(index){
      this.$router.push({name:"project",params:{
        projectname: this.projectFrom[index].name
      }})
      this.visible = false
    }
  }
};
</script>

<style scoped>
.top {
  color: #eee;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 5%;
}
.projects-show{
  cursor: pointer;
}
.project-list-item{
  cursor: pointer;
  padding: 3px 5px;
  border-radius: 3px;
}
.project-list-item:hover{
  background-color: rgba(200, 200, 200, .4)
}
</style>