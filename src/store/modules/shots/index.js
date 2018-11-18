import actions from './actions'
import mutations from './mutations'
import getters from './getters'

const state = {
  data: {
    unpublished: [
      'https://public-media.interaction-design.org/images/ux-daily/5628f8c6cdb9d.jpg',
      'https://www.latsonprint.com/wp-content/uploads/2014/07/design-header.jpg',
      'https://www.pearlwhitemedia.com/wp-content/uploads/2017/10/presentation.design.jpg'
    ]
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}
