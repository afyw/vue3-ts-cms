import hyRequest from '../index'

import { IAccount, ILoginResult } from './type'
import { IDataType } from '@/service/types'

enum LoginAPI {
  AccountLogin = './login',
  LoginUserInfo = '/users/', // 用法：/user/id
  UserMenus = '/role/' //用法：role/id/menu
}
export function accountLoginRequest(account: IAccount) {
  return hyRequest.post<IDataType<ILoginResult>>({
    url: LoginAPI.AccountLogin,
    data: account
  })
}

export function requestUserInfoById(id: number) {
  return hyRequest.get<IDataType>({
    url: LoginAPI.LoginUserInfo + id,
    showLoading: false
  })
}

export function requestUserMenuByRoleId(id: number) {
  return hyRequest.get<IDataType>({
    url: LoginAPI.UserMenus + id + '/menu',
    showLoading: false
  })
}
