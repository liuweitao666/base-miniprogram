import { defineStore } from 'pinia'
const useSystem = defineStore({
  /** 区分不通状态的唯一标识 */
  id: 'system',
  /** 状态 */
  state: () => ({
    options: {},
    info: {},
  }),
  actions: {
    init(options) {
      this.options = options
    },
    setInfo(info) {
      this.info = info
    },
  },
})
export { useSystem }
