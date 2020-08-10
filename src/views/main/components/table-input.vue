<template>
  <div class="">
    <el-table :data="data">
        <el-table-column
          prop="key"
          label="key"
          width="180">
          <template #key='body'>
            <el-input v-model="data[body.$index].key">
            </el-input>
          </template>
        </el-table-column>
        <el-table-column
          prop="value"
          label="value"
          width="180">
          <template #value='body'>
            <el-input v-model="data[body.$index].value">
            </el-input>
          </template>
        </el-table-column>
        <el-table-column
          prop="description"
          label="description"
          width="180">
          <template #description='body'>
            <el-input v-model="data[body.$index].description">
            </el-input>
          </template>
        </el-table-column>
      </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data:[{
        key: ' ',
        value: ' ',
        description: ' '
      }]
    }
  },
}
</script>

<style scoped>

</style>