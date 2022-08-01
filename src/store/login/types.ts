export interface ILoginState {
  token: string
  userInfo: any
  userMenus: any
}

export interface userMenusObj {
  children?: any
  icon: string
  id: number
  name: string
  sort: number
  type: number
  url: string
}
