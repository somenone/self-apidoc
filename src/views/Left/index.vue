<template>
  <div class="left">
    <div class="left-search">
      <el-input size="mini" v-model="search" class="left-search-input" placeholder="搜索"></el-input>
    </div>

    <tree :tree="showtree" @nodeClick="clickNode" />
  </div>
</template>

<script>
import tree from "./components/tree";
import debounce from 'lodash/debounce'

export default {
  components: {
    tree,
  },
  data() {
    return {
      search: "",
      tree: [
        {
          name: "name",
          type: "tree",
          tree: [
            {
              name: "child1asdha lksdkjhak jhdfgkhjkas hfkajhsjk dhakjshdkajsdjhakjsd",
              type: "tree",
            },
            {
              name: "testarr",
              type: "tree",
            },
            {
              name: "testarr2",
              type: "tree",
            },
            {
              name: "child2",
              type: "treenode",
            },
          ],
        },
        {
          name: "中文",
          type: "treenode",
        },
      ],
      showtree:[]
    };
  },
  methods: {
    clickNode(item) {
      if (this.$route.params.apiname !== item.name)
        this.$router.push({name:"api",params:{apiname:item.name}});
    },
    searchName(arr,val){
      let resarr = []
      arr.forEach(item => {
        if(item.name.indexOf(val) != -1){
          resarr.push(item)
          return
        }
        if(item.type==="tree"&&item.tree&&item.tree.length>0){
          let res = this.searchName(item.tree,val)
          if(res.length>0){
            item.tree = res
            resarr.push(item)
          }
        }
      });
      return resarr
    }
  },
  mounted(){
    this.showtree = this.tree
    console.log(this.showtree);
  },
  watch: {
    search: debounce(function(){
      this.showtree = this.searchName(JSON.parse(JSON.stringify(this.tree)),this.search)
    }, 300)
  }
};
</script>

<style scoped>
.left-search {
  padding: 20px 10px;
}
.left-search-input {
  width: 100%;
}
</style>