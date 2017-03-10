
import React, { Component } from 'react'
import { View, Modal } from 'react-native'
import DebugConfig from '../../App/Config/DebugConfig'
import RoundedButton from '../../App/Components/RoundedButton'
import LoginScreen from '../../App/Containers/LoginScreen';


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
          Open Revolution
        </RoundedButton>
        <Modal visible={this.state.showModal} >
          <LoginScreen toggleScreen={{toggle: this.toggleModal}} />
        </Modal>
      </View>
    )
  }
}
