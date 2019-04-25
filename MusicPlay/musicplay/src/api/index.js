// 配置API接口地址
var root = 'http://localhost:3000/api'
// 引用axios
var axios = require('axios')
// 自定义判断元素类型JS
function toType (obj) {
  return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
}
// 参数过滤函数
function filterNull (o) {
  for (var key in o) {
    if (o[key] === null) {
      delete o[key]
    }
    if (toType(o[key]) === 'string') {
      o[key] = o[key].trim()
    } else if (toType(o[key]) === 'object') {
      o[key] = filterNull(o[key])
    } else if (toType(o[key]) === 'array') {
      o[key] = filterNull(o[key])
    }
  }
  return o
}

function apiAxios (method, url, params, success, failure) {
  if (params) {
    params = filterNull(params)
  }
  axios({
    method: method,
    url: url,
    'headers': {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: method === 'POST' || method === 'PUT' ? params : null,
    params: method === 'GET' || method === 'DELETE' ? params : null,
    baseURL: root,
    withCredentials: false
  })
  .then(function (res) {
    success(res)
  })
  .catch(function (err) {
    failure(res)
  })
}

// 返回在vue模板中的调用接口
export default {
  get: function (url, params, success, failure) {
    apiAxios('GET', url, params, success, failure)
  },
  post: function (url, params, success, failure) {
    apiAxios('POST', url, params, success, failure)
  },
  put: function (url, params, success, failure) {
    apiAxios('PUT', url, params, success, failure)
  },
  delete: function (url, params, success, failure) {
    apiAxios('DELETE', url, params, success, failure)
  }
}