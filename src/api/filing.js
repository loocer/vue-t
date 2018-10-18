import request from '@/utils/request'

export function setEmployee(param) {
  return request({
    url: '/authority/get-employees',
    method: 'get',
    data: param
  })
}
