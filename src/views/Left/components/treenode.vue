<template>
  <div>
    <div  class="tree-name">
      <i class="tree-icon" :class="{treeshow:tonode.showChildren}">
        <svg class="global-icon" aria-hidden="true">
          <use xlink:href="#icon-down" />
        </svg>
      </i>
      <p>{{nodeMsg.name}}</p>
      <div class="tree-option">
        <i @click.stop="createNode">+</i>
      </div>
    </div>
    <div v-show="newshow">
      <input
        v-model="newNodeName"
        ref="newInput"
        class="create-node-input"
        type="text"
        @blur="closeNew"
        @keyup.enter="doCreate()"
      />
    </div>
  </div>
</template>


<script>
export default {
  props:["nodeMsg","tonode"],
  data(){
    return {
      newNodeName:'',
      newshow:false
    }
  },
  methods:{
    createNode() {
      this.tonode.showChildren = true
      this.newshow = true;
      this.$nextTick(()=>{
        this.$refs.newInput.focus();
      })
    },
    doCreate(){
      if(!this.nodeMsg.tree||this.nodeMsg.tree.length==0)
      this.nodeMsg.tree = []
      this.nodeMsg.tree.push({
        name:this.newNodeName,
        type: "treenode"
      })
      this.closeNew()
    },
    closeNew(){
      this.newshow = false
      this.newNodeName = ''
    },
    chooseNode(item) {
      this.clickNode(item);
    },
    clickNode(item) {
      this.$emit("nodeClick", item);
    },
  }
}
</script>

<style scoped>
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
.tree-icon {
  position: absolute;
  left: -1.5em;
  width: 20px;
  height: 20px;
  transform: rotate(-90deg);
  font-size: 12px;
  text-align: center;
  /* background-color: #fff; */
}
.treeshow {
  transform: rotate(0deg);
}
.tree-option {
  width: 16px;
  height: 16px;
  background-color: #666;
  flex-shrink: 0;
  line-height: 16px;
  text-align: center;
  border-radius: 3px;
}
.tree-option:hover {
  background-color: #444;
}
.create-node-input{
  background-color: #222;
  border: none;
  outline: none;
  height: 24px;
  padding: 3px;
  margin: 2px 3px;
  color: #bbb;
  border-radius: 3px;
}
</style>