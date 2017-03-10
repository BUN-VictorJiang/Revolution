
import React, { Component } from 'react'
import { View, Modal } from 'react-native'
import DebugConfig from '../../App/Config/DebugConfig'
import RoundedButton from '../../App/Components/RoundedButton'
import LaunchLogin from '../../App/LaunchLogin'


//please, create a general button
export default class LoginScreenButton extends Component {

  constructor (props) {
    super(props)
    this.state = {
      showModal: false
    }
  }

  toggleModal = () => {
    this.setState({showModal: !this.state.showModal})
  }

  render () {
    return (
      <View>
        <RoundedButton onPress={this.toggleModal}>
          Open the LaunchScreen to Revolution
        </RoundedButton>
        <Modal visible={this.state.showModal} >
          <LaunchLogin />
        </Modal>
      </View>
    )
  }
}
