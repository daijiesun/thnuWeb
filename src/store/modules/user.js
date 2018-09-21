import axios from 'axios'
// import { resolve } from 'dns';
const state = {
  //提示信息
  message: null,
  //当前用户信息
  userInfo: null,
  //所有用户信息
  userList: null,
  //趣事列表
  funList: null,
  //商品列表
  goodsList: null,
  //快递列表
  expList: null,
  //寻物启事列表
  loseList: null,
  //兼职列表
  jobList: null,
  //活动列表
  sportList: null,
  //表白
  loveList: null
}

const getters = {
  //获取提示信息
  getMessage: (state) => {
    return state.message
  },
  //获取当前信息
  getUserInfo: (state) => {
    return state.userInfo
  },
  //获取所有用户列表
  getUserList: (state) => {
    return state.userList
  },
  //寻物
  getLoseList: (state) => {
    return state.loseList
  },
  //获取兼职
  getJobList: (state) => {
    return state.jobList
  },
  //获取活动
  getSportList: (state) => {
    return state.sportList
  },
  //获取表白
  getLoveList: (state) => {
    return state.loveList
  },
  //获取趣事列表
  getFunList: (state) => {
    return state.funList
  },
  //获取商品列表
  getGoodsList: (state) => {
    return state.goodsList
  },
  //获取快递列表
  getExpList: (state) => {
    return state.expList
  },
}

const mutations = {
  //设置提示信息
  setMessage(state, info) {
    state.message = info
  },
  //设置用户信息
  setUserInfo(state, login) {
    state.userInfo = login
  },
  //设置用户列表
  setUserList(state, list) {
    state.userList = list.reverse()
  },
  //设置寻物列表
  setLoseList(state, list) {
    state.loseList = list.reverse()
  },
  //兼职
  setJobList(state, list) {
    state.jobList = list.reverse()
  },
  //活动
  setSportList(state, list) {
    state.sportList = list.reverse()
  },
  //表白
  setLoveList(state, list) {
    state.loveList = list.reverse()
  },
  //设置快递列表
  setExpList(state, list) {
    state.expList = list.reverse()
  },
  //设置趣事列表
  setFunList(state, list) {
    state.funList = list.reverse()
  },
  //移除趣事
  delOneFun(state,
    funObj
  ) {
    let _id = funObj.id
    let items = state.funList.find(item => item._id == _id)
    if (items) {
      state.funList.splice(funObj.index, 1);
    }
  },
  //设置商品列表
  setGoodsList(state, list) {
    state.goodsList = list.reverse()
  }
}

const actions = {
  //获取用户session信息，触发mutations更新用户登录信息
  async getUserSession({
    commit
  }) {
    const data = await axios.get('user/session').then((response) => {
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
    commit('setUserList', list)
  },
  //获取快递并设置
  async getExpList({
    commit
  }) {
    const data = await axios.get('user/getExpList').then(response => {
      localStorage.setItem('expLength', response.data.message.length)
      return response.data.message
    }).catch(err => {
      console.log(err)
    })
    commit('setExpList', data)
  },
  //获取趣事并设置
  async getFunList({
    commit
  }) {
    const data = await axios.get('user/getFunList').then(response => {
      return response.data.message
    }).catch(err => {
      console.log(err)
    })
    commit('setFunList', data)
  },
  //添加趣事
  // addOneFun({state,commit},funObj)
  //移除一个趣事
  async delOneFun({
      state,
      commit
    },
    funObj
  ) {
    return new Promise((resolve, reject) => {
      try {
        axios.get('user/delOneFun' + '?id=' + funObj.id).then(res => {
          if (res.data.status == 'success') {
            commit('delOneFun', funObj),
              resolve(res.data.message)
          } else {
            resolve(res.data.message)
          }
        })
      } catch (error) {
        console.log(error),
          reject(error)
      }
    })
  },

  //获取商品并设置
  async getGoodsList({
    commit
  }) {
    const data = await axios.get('user/getGoodsList').then(response => {
      return response.data.message
    }).catch(err => {
      console.log(err)
    })
    commit('setGoodsList', data)
  },
  //获取寻物并设置
  async getLoseList({
    commit
  }) {
    const data = await axios.get('user/getLoseList').then(response => {
      return response.data.message
    }).catch(err => {
      console.log(err)
    })
    commit('setLoseList', data)
  },
  //兼职
  async getJobList({
    commit
  }) {
    const data = await axios.get('user/getJobList').then(response => {
      return response.data.message
    }).catch(err => {
      console.log(err)
    })
    commit('setJobList', data)
  },
  //活动
  async getSportList({
    commit
  }) {
    const data = await axios.get('user/getSportList').then(response => {
      return response.data.message
    }).catch(err => {
      console.log(err)
    })
    commit('setSportList', data)
  },
  //表白
  async getLoveList({
    commit
  }) {
    const data = await axios.get('user/getLoveList').then(response => {
      return response.data.message
    }).catch(err => {
      console.log(err)
    })
    commit('setLoveList', data)
  },
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}
