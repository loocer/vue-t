import { setEmployee } from '@/api/authority'
import { getToken, setToken, removeToken } from '@/utils/auth'

const authority = {
  state: {
    employees:[]
  },

  mutations: {
    SET_EMPLOYEE: (state, employees) => {
      state.employees = employees
    }
  },

  actions: {
    SetEmployee({ commit }, param) {
      return new Promise((resolve, reject) => {
        setEmployee(param).then(response => {
          commit('SET_EMPLOYEE', response.data)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
}
export default authority
