export default {
  data() {
    return {
      dfdfdfd: 5345345,
      listLoading: false,
      pageNo: 1,
      pageSize: 10,
      total:120,
      anctionName:'tertgert',
    }
  },
  created() {
    // store.dispatch('incrementAsync', {
    //   amount: 10
    // })
  },
  methods: {
    handleCurrentChange() {
      this.dfdfdfd = 999999
      console.log(this.swwww);
      this.getData()
    },
    getData() {
      let anctionName = this.anctionName
      console.log(anctionName)
      this.listLoading = true
      this.$store.dispatch(anctionName, {
        amount: 10
      }).then(()=>{
        this.listLoading = false
      })
    },
    // getData() {
    //   store.dispatch('incrementAsync', {
    //     amount: 10
    //   })
    // },
    // fetchData() {
    //   this.listLoading = true
    //   getList(this.listQuery).then(response => {
    //     this.list = response.data.items
    //     this.listLoading = false
    //   })
    // },
    // handleClick(row) {
    //   console.log(row);
    // }
  }
}