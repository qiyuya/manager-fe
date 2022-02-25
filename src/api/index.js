/**
 * api管理
 */
import request from './../utils/request'
export default {
  login(params) {
    return request({
      url: '/users/login',
      method:'post',
      data: params
      // mock:false
    })
  },
  noticeCount(params) {
    return request({
      url: '/leave/count',
      method:'get',
      data: {}
    })
  },
  MenuList() {
    return request({
      url: '/menu/list',
      method:'get',
      data: {}
    })
  }
}