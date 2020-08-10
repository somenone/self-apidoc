<template>
  <div class="main">
    <el-form :model="requestOption" class="main-form">
      <el-row class="main-form-row">
        <el-col :span="3">
          <el-select size="small" class="main-select" v-model="requestOption.method">
            <el-option size="mini" label="GET" value="GET"></el-option>
            <el-option size="mini" label="POST" value="POST"></el-option>
          </el-select>
        </el-col>
        <el-col :span="18">
          <el-input size='small' v-model="requestOption.url"></el-input>
        </el-col>
        <el-col :span="3">
          <el-button size='small' style="width:100%" @click="request">send</el-button>
        </el-col>
      </el-row>
    </el-form>

    <table-input :data="requestOption.data"></table-input>

  </div>
</template>

<script>
import http from "../../utils/request";
import tableInput from "./components/table-input" 

export default {
  components:{
    tableInput
  },
  data() {
    return {
      requestOption: {
        method: "GET",
        url: "",
        data: {},
        params: {},
        header: [],
      },
    };
  },
  methods: {
    test() {
      http({
        methods: "post",
        url: "http://localhost:3001/test/get",
        params: {
          kw: "asd",
        },
        data: {
          kw: "asd",
        },
        header: {
          Cookie: "BAIDUID=5FFC44599283D1EA192C58928BFB9344:FG=1",
        },
      });
    },
    request(){

    }
  },
};
</script>

<style scoped>
.main{
  display: flex;
  flex-grow: 1;
  justify-content: flex-start;
  padding-top: 50px;
  min-width: 800px;
  flex-direction: column;
  align-items: center;
}
.main-select{
  font-weight: 700;
}
.main-form{
  width: 100%;
  max-width: 800px;
}
</style>