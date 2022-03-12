// 环境配置封装

const env = import.meta.env.MODE || 'prod'
const EnvConfig = {
  dev: {
    baseApi: '/api',
    mockApi:'https://fastmock.site/mock/17f6d4eef63739ffe7bad03b6ecfcd6b/api'
  },
  test: {
    baseApi: '//test.futurefe.com/api',
    mockApi:'https://fastmock.site/mock/17f6d4eef63739ffe7bad03b6ecfcd6b/api'
  },
  prod: {
    baseApi: 'https://service-rjx64o84-1310117805.gz.apigw.tencentcs.com/release/',
    mockApi:''
  }
}
export default {
  env,
  mock: false,
  namespace:'manager',
  ...EnvConfig[env]
}