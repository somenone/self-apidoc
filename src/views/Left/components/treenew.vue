<template>
  <div class="tree">
    <div class="tree-name">
      <span>
      {{tree.name}}
      </span>
    </div>

    <tree-node class="tree-node" v-for="(item,index)in tree.tree" :key="index">
    </tree-node>
  </div>
</template>

<script>
export default {
  name:"treeNode"
  props:["tree"],
  data(){
    return {

    }
  }
}
</script>

<style scoped>

</style>