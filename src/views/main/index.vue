<template>
  <div class="main">
    <el-form :model="requestOption" class="main-form">
      <el-input size="small" v-model="requestOption.url">
        <el-select size="small" slot="prepend" class="main-select" v-model="requestOption.method">
          <el-option size="small" label="GET" value="GET"></el-option>
          <el-option size="small" label="POST" value="POST"></el-option>
        </el-select>
        <el-button size="small" slot="append" style="width:100px" @click="request">send</el-button>
      </el-input>
      <el-tabs class="main-tabs" v-model="activeName">
        <el-tab-pane label="data" name="table-input">
          <table-input class="main-table" :data="data"></table-input>
        </el-tab-pane>
        <el-tab-pane label="params" name="params">
          <table-input class="main-table" :data="params"></table-input>
        </el-tab-pane>
        <el-tab-pane label="header" name="header">
          <table-input class="main-table" :data="header"></table-input>
        </el-tab-pane>
      </el-tabs>
    </el-form>

    <res class="main-res"></res>
  </div>
</template>

<script>
import http from "../../utils/request";
import tableInput from "./components/table-input";
import res from "./components/res";

export default {
  components: {
    tableInput,
    res,
  },
  data() {
    return {
      requestOption: {
        method: "GET",
        url: "http://",
        data: {},
        params: {},
        header: {},
      },
      activeName: "table-input",
      params: [],
      data: [],
      header: [],
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
    formToData(form) {
      let data = {};
      form.forEach((item) => {
        data[item.key] = item.value;
      });
      return data;
    },
    request() {
      console.log(this.params, this.formToData(this.params));
      console.log(this.header, this.formToData(this.header));
      console.log(this.data, this.formToData(this.data));

      console.log(this.requestOption);
    },
  },
};
</script>

<style scoped>
.main {
  display: flex;
  flex-grow: 1;
  justify-content: flex-start;
  padding-top: 50px;
  min-width: 600px;
  flex-direction: column;
  align-items: center;
}
.main-select {
  font-weight: 700;
  width: 100px;
  text-align: center;
}
.main-form,
.main-table,
.main-tabs,
.main-res {
  width: 100%;
  max-width: 800px;
}
</style>