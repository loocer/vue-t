const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  roles: state => state.user.roles,

  employees:state => state.authority.employees,

  cityList:state => state.commonData.cityList,
  contractors:state => state.commonData.contractors,
  banks:state => state.commonData.banks,
}
export default getters
