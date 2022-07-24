// 编写验证规则
export const rules = {
  name: [
    { required: true, message: '缺少手机号', trigger: 'blur' },
    {
      // 正则表达式
      pattern: /^[a-z0-9]{3,10}$/,
      message: '用户名必须为5-10个字母或数字'
    }
  ],
  password: [
    { required: true, message: '缺少密码', trigger: 'blur' },
    {
      // 正则表达式
      pattern: /^[a-z0-9]{6,}$/,
      message: '密码必须为6位以上字母或数字'
    }
  ]
}
