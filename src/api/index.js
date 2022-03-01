/**
 * api管理
 */
import request from './../utils/request'
export default {
  // 用户登录
  login(params) {
    return request({
      url: '/users/login',
      method:'post',
      data: params,
      mock:false
    })
  },
  // 通知数量
  noticeCount(params) {
    return request({
      url: '/leave/count',
      method:'get',
      data: {},
      mock:true
    })
  },
  // 菜单列表
  MenuList(params) {
    return request({
      url: '/menu/list',
      method:'get',
      data: params,
      mock:false
    })
  },
  // 用户列表
   getUserList(params) {
    return request({
      url: '/users/list',
      method:'get',
      data: params,
      mock:false
    })
  },
   // 用户删除
    userDel(params) {
    return request({
      url: '/users/delete',
      method:'post',
      data: params,
      mock:false
    })
  },
    // 角色列表
    getRoleList() {
    return request({
      url: '/roles/allList',
      method:'get',
      data: {},
      mock:true
    })
  },
  // 部门列表
  getDeptList() {
    return request({
      url: '/dept/list',
      method: 'get',
      data: {},
      mock: true
    })
  },
  // 用户创建/编辑
  userSubmit(params) {
     return request({
      url: '/users/operate',
      method: 'post',
      data: params,
      mock: false
    })
  },
  // 菜单操作
   menuSubmit(params) {
     return request({
      url: '/menu/operate',
      method: 'post',
      data: params,
      mock: false
    })
  },
}
