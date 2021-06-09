const { windowWidth, windowHeight } = wx.getSystemInfoSync()

Component({
  properties: {
    options: {
      type: Array,
      value: []
    },
    openText: {
      type: String,
      value: ''
    },
    closeText: {
      type: String,
      value: ''
    },
    x: {
      type: Number,
      value: windowWidth - 50 - 15
    },
    y: {
      type: Number,
      value: windowHeight - 50 - 15
    },
    // 50 按钮宽/高 15 边距间隔
    zIndex: {
      type: Number,
      value: 999
    }
  },

  data: {
    active: false
  },

  methods: {
    trigger () {
      this.setData({ active: !this.data.active })
    },
    select (e) {
      const { option } = e.currentTarget.dataset
      this.triggerEvent('select', option.value)
      this.setData({ active: false })
    }
  }
})