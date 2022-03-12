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
      mock:true
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
      mock:true
    })
  },
  // 获取用户对应的权限菜单
  getPermissionList() {
    return request({
      url: '/users/getPermissionList',
      method:'get',
      data: {},
      mock:true
    })
  },
  // 用户列表
   getUserList(params) {
    return request({
      url: '/users/list',
      method:'get',
      data: params,
      mock:true
    })
  },
   // 所有用户列表
  getAllUserList() {
   return request({
      url: '/users/all/list',
      method:'get',
      data: {},
      mock:true
  })
  },
   // 用户删除
    userDel(params) {
    return request({
      url: '/users/delete',
      method:'post',
      data: params,
      mock:true
    })
  },
    // 角色列表
    getRoleAllList() {
    return request({
      url: '/roles/allList',
      method:'get',
      data: {},
      mock:true
    })
  },
    // 角色列表
    getRoleList(params) {
    return request({
      url: '/roles/list',
      method:'get',
      data: params,
      mock:true
    })
  },
  // 部门列表
  getDeptList(params) {
    return request({
      url: '/dept/list',
      method: 'get',
      data: params,
      mock: true
    })
  },
  // 部门创建/编辑/删除
  deptOperate(params) {
    return request({
      url: '/dept/operate',
      method: 'post',
      data: params,
      mock: true
    })
  },
  // 用户创建/编辑
  userSubmit(params) {
     return request({
      url: '/users/operate',
      method: 'post',
      data: params,
      mock: true
    })
  },
  // 菜单操作
   menuSubmit(params) {
     return request({
      url: '/menu/operate',
      method: 'post',
      data: params,
      mock: true
    })
  },
   // 角色操作
  roleOperate(params) {
     return request({
      url: '/roles/operate',
      method: 'post',
      data: params,
      mock: true
    })
  },
  // 更新权限
  updatePermission(params) {
      return request({
      url: '/roles/update/permission',
      method: 'post',
      data: params,
      mock: true
    })
  },
  // 申请列表
  getApplyList(params) {
      return request({
      url: '/leave/list',
      method: 'get',
      data: params,
      mock: true
    })
  },
  // 申请提交
  leaveOperate(params) {
      return request({
      url: '/leave/operate',
      method: 'post',
      data: params,
      mock: true
    })
  },
  // 审核
  leaveApprove(params) {
      return request({
      url: '/leave/approve',
      method: 'post',
      data: params,
      mock: true
    })
  },

}
