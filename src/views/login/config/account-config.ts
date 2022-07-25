// 编写验证规则
export const rules = {
  name: [
    { required: true, message: '缺少用户名', trigger: 'blur' },
    {
      // 正则表达式
      pattern: /^[a-zA-Z][a-zA-Z0-9_]{4,15}$/,
      message: '用户名不合法',
      trigger: 'blur'
    }
  ],
  password: [
    { required: true, message: '缺少密码', trigger: 'blur' },
    {
      // 正则表达式
      pattern: /^[a-z0-9]{6,}$/,
      message: '密码不符合要求',
      trigger: 'blur'
    }
  ]
}
