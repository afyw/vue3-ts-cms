import { Module } from 'vuex'

import {
  accountLoginRequest,
  requestUserInfoById,
  requestUserMenuByRoleId
} from '@/service/login/login'
import localCache from '@/utils/cache'
import { mapMenusToRoutes } from '@/utils/map-menus'
import router from '@/router'

import { IAccount } from '@/service/login/type'
import { ILoginState, userMenusObj } from './types'
import { IRootState } from '../types'
const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {},
      userMenus: []
    }
  },
  mutations: {
    changeToken(state, token: string) {
      state.token = token
    },
    getUserInfo(state, userInfo: any) {
      state.userInfo = userInfo
    },
    changeUserMenus(state, userMenus: any) {
      state.userMenus = userMenus
      // 对后端返回的icon属性进行处理
      state.userMenus.forEach((obj: userMenusObj) => {
        const temp: string = obj.icon.split('-')[2]
        if (temp) {
          obj.icon = temp[0].toUpperCase() + obj.icon.split('-')[2].slice(1)
        } else {
          obj.icon = obj.icon[0].toUpperCase() + obj.icon.slice(1)
        }
      })
      // userMenus => routes
      const routes = mapMenusToRoutes(userMenus)
      // console.log(routes)
      // 将routes =>router.main.children
      routes.forEach((route) => {
        router.addRoute('main', route)
      })
    }
  },
  getters: {},
  actions: {
    async accountLoginAction({ commit }, payload: IAccount) {
      // 1.实现登录逻辑
      const loginResult = await accountLoginRequest(payload)
      const { id, token } = loginResult.data
      commit('changeToken', token)
      localCache.setCache('token', token)

      //2.请求获取用户信息
      const userInfoResult = await requestUserInfoById(id)
      const userInfo = userInfoResult.data
      console.log(userInfo)
      commit('getUserInfo', userInfo)
      localCache.setCache('userInfo', userInfo)

      // 3.根据用户角色请求菜单
      const UserMenusResult = await requestUserMenuByRoleId(userInfo.role.id)
      const userMenus = UserMenusResult.data
      console.log(userMenus)
      commit('changeUserMenus', userMenus)
      localCache.setCache('userMenus', userMenus)

      // 4.跳到首页
      router.push('/main')
    },
    loadLocalLogin({ commit }) {
      const token = localCache.getCache('token')
      if (token) {
        commit('changeToken', token)
      }

      const userInfo = localCache.getCache('userInfo')
      if (userInfo) {
        commit('getUserInfo', userInfo)
      }

      const userMenus = localCache.getCache('userMenus')
      if (userMenus) {
        commit('changeUserMenus', userMenus)
      }
    },
    phoneLoginAction({ commit }, payload: any) {
      console.log('执行phoneLoginAction')
    }
  }
}

export default loginModule
