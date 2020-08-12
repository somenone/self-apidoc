<template>
  <div class>
    <el-table :data="data">
      <el-table-column type="selection" width="50"></el-table-column>
      <el-table-column prop="key" label="key">
        <template slot-scope="scope">
          <el-input
            class="table-input-item"
            size="mini"
            placeholder="key"
            v-model="data[scope.$index].key"
          ></el-input>
        </template>
      </el-table-column>
      <el-table-column prop="value" label="value">
        <template slot-scope="scope">
          <el-input
            class="table-input-item"
            size="mini"
            placeholder="value"
            v-model="data[scope.$index].value"
          ></el-input>
        </template>
      </el-table-column>
      <el-table-column prop="description" label="description">
        <template slot-scope="scope">
          <el-input
            class="table-input-item"
            size="mini"
            placeholder="description"
            v-model="data[scope.$index].description"
          ></el-input>
        </template>
      </el-table-column>
    </el-table>
    <el-button class="table-input-addbutton" type="primary" icon="el-icon-plus" @click="testadd" size="mini"></el-button>

  </div>
</template>

<script>
export default {
  props: ["data"],
  data() {
    return {
      // data: [
      //   {
      //     key: "",
      //     value: "",
      //     description: "",
      //   },
      // ],
    };
  },
  methods: {
    addCol() {
      this.data.push({
        key: "",
        value: "",
        description: "",
      });
    },
    testadd() {
      this.data.push({
        key: "",
        value: "",
        description: "",
      });
    },
  },
  mounted() {
    if (this.data.length == 0)
      this.testadd()
  },
};
</script>

<style scoped>
.table-input-item {
  width: 100%;
}
.table-input-addbutton{
  margin: 20px;
}
</style>