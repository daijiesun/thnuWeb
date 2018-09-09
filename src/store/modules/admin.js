import axios from 'axios'

const state = {
  adminInfo: null
}

const getters = {

    //获取管理员信息
  getAdminInfo: (state) => {
    return state.adminInfo
  }
}

const mutations = {
    //设置管理员信息
  setAdminInfo(state, login) {
    state.adminInfo = login
  }
}

const actions = {
    //获取管理员session信息，触发mutations更新管理员登录信息
  async getAdminSession({
    commit
  }) {
    const data = await axios.get('admin/session').then(function (response) {
      return response.data.adminInfo
    }).catch(err => {
      console.log(err)
    })
    commit('setAdminInfo', data)
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}
