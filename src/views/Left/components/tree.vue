<template>
  <div class="self-tree">
    <div v-for="(item,index) in tree" :key="index">
      <div class="tree-node">
        <div v-if="item.type==='tree'">
          <treenode :nodeMsg="tree[index]" :tonode="tonodey" @click.native="show(index)"></treenode>

          <div v-show="tonode.showChildren[index]">
            <tree :tree="tree[index].tree" @nodeClick="clickNode"></tree>
          </div>
        </div>

        <div v-else class="tree-name" @click="chooseNode(item)">
          <span>{{item.name}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import treenode from "./treenode"

export default {
  name: "tree",
  components: {
    treenode,
  },
  props: ["tree", "nodeClick"],
  data() {
    return {
      
      tonode:{

        showChildren: [false],
      },
      tonodey:true,
      
      newshow: false,
      newNodeName:''
    };
  },
  methods: {
    show(index){
      this.$set(this.tonode.showChildren,index,!this.tonode.showChildren[index])
      // console.log(this.tonode);
    },
    chooseNode(item) {
      this.clickNode(item);
    },
    clickNode(item) {
      this.$emit("nodeClick", item);
    },
  },
};
</script>

<style scoped>
.self-tree {
  padding-left: 1.2em;
  text-align: left;
  color: #eee;
  font-size: 14px;
  overflow: hidden;
}
.tree-node {
  user-select: none;
  position: relative;
  cursor: pointer;
}
.tree-name {
  padding: 5px 3px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  line-height: 20px;
  justify-content: space-between;
}
.tree-name p {
  /* width: 100%; */
  flex-shrink: 1;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.tree-node:hover {
  background-color: rgb(123, 123, 123, 0.3);
  border-radius: 3px;
}
</style>