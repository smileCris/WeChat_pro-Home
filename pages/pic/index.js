// pages/pic/index.js
Page({
  data: {
    imgList:[{
      img:'https://ss3.baidu.com/-rVXeDTa2gU2pMbgoY3K/it/u=1032211614,455999046&fm=202&mola=new&crop=v1',
      txt: '小区A 150平 9楼'
    },{
        img: 'https://ss3.baidu.com/-rVXeDTa2gU2pMbgoY3K/it/u=868162192,806834246&fm=202&mola=new&crop=v1',
      txt: '小区B 150平 8楼'
      }, {
        img: 'https://ss3.baidu.com/-rVXeDTa2gU2pMbgoY3K/it/u=298311004,2186722574&fm=202&src=2000&mola=new&crop=v1',
        txt: '小区A 160平 12楼'
    }, {
        img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2606675457,1860817737&fm=27&gp=0.jpg',
      txt: '小区A 160平 12楼'
      }, {
        img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2608031364,2600082300&fm=27&gp=0.jpg',
        txt: '小区A 160平 12楼'
    }, {
        img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2288384208,1916417750&fm=27&gp=0.jpg',
      txt: '小区A 160平 12楼'
    }],
  },
  previewImage: function (e) {
    var current = e.target.dataset.src;
    var li = new Array();
    for (var i = 0; i < this.data.imgList.length; i++){
      li[i] = this.data.imgList[i].img;
    }
    wx.previewImage({
      current: current,
      urls: li
    })
  }
})