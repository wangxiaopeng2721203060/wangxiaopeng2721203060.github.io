const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
      {
        name: "不将就",
        artist: '李荣浩',
        url: 'https://webfs.yun.kugou.com/201910091932/0e5c08de53e540eb59753d1986c4a8b0/G145/M07/0C/09/MYcBAFvzfaiACJdVAExmrKAXGks258.mp3',
        cover: 'https://p3fx.kgimg.com/stdmusic/20160123/20160123175223508267.jpg',
      },
      {
        name: '期待你的爱',
        artist: '林俊杰，金莎，',
        url: 'https://webfs.yun.kugou.com/201910091934/cf1e87b5ac04c882b030484f03d50077/G003/M02/13/10/o4YBAFUDt6aANy1TADlV2_aMIDM186.mp3',
        cover: 'https://p3fx.kgimg.com/stdmusic/20160908/20160908120223979408.jpg',
      },
      {
        name: '年少有为',
        artist: '李荣浩',
        url: 'https://webfs.yun.kugou.com/201910091959/1a2fa0983e493e9d2b128f24597ef606/G150/M04/10/09/1g0DAFvNylSAc7_PAEQrmS8Pjy4978.mp3',
        cover: 'https://p3fx.kgimg.com/stdmusic/20181016/20181016175052135501.jpg',
      }
    ]
});