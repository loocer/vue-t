<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  created() {
    this.$store.dispatch('SetCityList')
    this.$store.dispatch('SetContractor')
    this.$store.dispatch('SetBanks')
  },
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
body .el-table th.gutter{
    display: table-cell!important;
}
 
body .el-table colgroup.gutter{
    display: table-cell!important;
}

</style>