// 方法一：手动导入（不推荐）

// 根据process.env.NODE_ENV判断环境
// 开发环境：development  生产环境：production 测试环境：test
// const BASE_URL = 'http://afy.org/dev'
let BASE_URL = ''
const TIME_OUT = 10000

if (process.env.NODE_ENV === 'development') {
  BASE_URL = 'http://123.207.32.32:8000'
} else if (process.env.NODE_ENV === 'production') {
  BASE_URL = 'http://afy.org/prod'
} else {
  BASE_URL = 'http://afy.org/test'
}

export { BASE_URL, TIME_OUT }
// 方法3 通过vue-cli配置.env来实现变量的静态注入
