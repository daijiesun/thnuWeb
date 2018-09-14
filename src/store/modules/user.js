import axios from 'axios'

const state = {
  //当前用户信息
  userInfo: null,
  //所有用户信息
  userList: null
}

const getters = {

  //获取当前信息
  getUserInfo: (state) => {
    return state.userInfo
  },
  //获取所有用户列表
  getUserList: (state) => {
    return state.userList
  }
}

const mutations = {
  //设置用户信息
  setUserInfo(state, login) {
    state.userInfo = login
  },
  //设置用户列表
  setUserList(state, list) {
    state.userList = list.reverse()
  }
}

const actions = {
  //获取用户session信息，触发mutations更新用户登录信息
  async getUserSession({
    commit
  }) {
    const data = await axios.get('user/session').then(function (response) {
      return response.data.userInfo
    }).catch(err => {
      console.log(err)
    })
    commit('setUserInfo', data)
  },

  //获取所有用户信息
  async getList({
    commit
  }) {
    const list = await axios.get('admin/userList').then(response => {
      return response.data.message
    }).catch(err => {
      console.log(err)
    })
    commit('setUserList',list)
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}
