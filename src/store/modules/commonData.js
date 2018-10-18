import { getBankList, getContractorList, getCityList } from '@/api/commonData'
import { getToken, setToken, removeToken } from '@/utils/auth'

const commonData = {
  state: {
    cityList: [],
    contractors: [],
    banks:[]
  },

  mutations: {
    SET_CITY_LIST: (state, cityList) => {
      state.cityList = cityList
    },
    SET_CONTRACTOR_LIST: (state, contractors) => {
      state.contractors = contractors
    },
    SET_BANK_LIST: (state, banks) => {
      state.banks = banks
    },
  },

  actions: {
    SetCityList({ commit }) {
      return new Promise((resolve, reject) => {
        getCityList().then(response => {
          console.log(response);
          const data = response
          commit('SET_CITY_LIST', data)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    SetContractor({ commit }, userInfo) {
      return new Promise((resolve, reject) => {
        getContractorList().then(response => {
          const data = response
          commit('SET_CONTRACTOR_LIST', data)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    SetBanks({ commit }, userInfo) {
      return new Promise((resolve, reject) => {
        getBankList().then(response => {
          const data = response
          commit('SET_BANK_LIST', data)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
  }
}

export default commonData
