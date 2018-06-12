Page({
  data: {
    index: 0,
    multiIndex: [0, 0, 0],
    date: '2000-01-01',
    time: '00:01',
    region: ['安徽省', '滁州市', '南谯区'],
    customItem: '全部'
  },
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  bindMultiPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      multiIndex: e.detail.value
    })
  },
  bindMultiPickerColumnChange: function (e) {
    console.log('修改的列为', e.detail.column, '，值为', e.detail.value);
    var data = {
      multiArray: this.data.multiArray,
      multiIndex: this.data.multiIndex
    };
    this.setData(data);
  },
  bindDateChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },
  bindTimeChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      time: e.detail.value
    })
  },
  bindRegionChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region: e.detail.value
    })
  },
  onLoad: function(options) {
    wx.request({
      url: 'https://easy-mock.com/mock/5acb57f9942d29514de2a2e5/demo/list',
      success: function(e) {
        this.setData({
          objectArray: e.data.data.objectArray,
          multiArray: e.data.data.multiArray,
          array: e.data.data.array,
          objectMultiArray: e.data.data.objectMultiArray
        })
      }.bind(this)
    })
  }
})