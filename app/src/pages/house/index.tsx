import React, { Component } from 'react'
import { View, Button, Text } from '@tarojs/components'

class Index extends Component {

    config = {
    navigationBarTitleText: '房子'
  }

  // 对应 onShow
  componentDidShow (e:any) {
      console.log(e)
  }

  // 对应 onHide
  componentDidHide () {}

  // 对应 onPullDownRefresh，除了 componentDidShow/componentDidHide 之外，
  // 所有页面生命周期函数名都与小程序相对应
  onPullDownRefresh () {}

  // 对应 onPullDownRefresh
  onReachBottom () {}

  componentWillUnmount () { }


  render () {
    return (
      <View className='index'>
      </View>
    )
  }
}

export default Index