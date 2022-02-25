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
    baseApi: '//futurefe.com/api',
    mockApi:''
  }
}
export default {
  env,
  mock: true,
  namespace:'manager',
  ...EnvConfig[env]
}