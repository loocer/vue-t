import request from '@/utils/request'

export function getCityList(param) {
  return new Promise((resolve, reject) => {
    let pss = []
    for(let i=0;i<20;i++){
      let obj = {}
      obj.value = 'rrrr' + i
      obj.label = '城市' + i
      pss.push(obj)
    }
    resolve(pss)
  });
  // request({
  //   url: '/authority/get-employees',
  //   method: 'get',
  //   data: param
  // })
}
export function getContractorList(param) {
  return new Promise((resolve, reject) => {
    let pss = []
    for(let i=0;i<20;i++){
      let obj = {}
      obj.value = 'daniu' + i
      obj.label = '签约人' + i
      pss.push(obj)
    }
    resolve(pss)
  });
  // return request({
  //   url: '/authority/get-employees',
  //   method: 'get',
  //   data: param
  // })
}
export function getBankList(param) {
  return new Promise((resolve, reject) => {
    let pss = []
    for(let i=0;i<20;i++){
      let obj = {}
      obj.value = 'daniu' + i
      obj.label = '银行' + i
      pss.push(obj)
    }
    resolve(pss)
  });
  // return request({
  //   url: '/authority/get-employees',
  //   method: 'get',
  //   data: param
  // })
}