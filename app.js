App({
  onLaunch() {
    // 预取一次窗口信息，部分基础库版本下 pixelRatio 只在这里拿得到
    try {
      this.globalData.pixelRatio = wx.getWindowInfo().pixelRatio || 2
    } catch (err) {
      this.globalData.pixelRatio = 2
    }
  },
  globalData: {
    pixelRatio: 2
  }
})
