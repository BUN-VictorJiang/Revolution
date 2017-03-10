import React, { Component } from 'react';
import { ScrollView, Text, Image, View } from 'react-native';
import { Images } from '../Themes';
import LoginScreenButton from '../../ignite/DevScreens/LoginScreenButton';
import styles from './Styles/LaunchScreenStyles'

//A button that will launch from ignite into our Application

export default class LaunchLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    }
  }

  toggleModal = () => {
    this.setState({showModal: !this.state.showModal})
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <ScrollView style={styles.container}>
          <View style={styles.centered}>
            <Image source={Images.revLogo} style={styles.logo} />
          </View>
          <View style={styles.section} >
            <Image source={Images.ready} />
            <Text style={styles.sectionText}>
              {"The screen where we launch the Revolution App from"}
            </Text>
          </View>
          <LoginScreenButton/>
        </ScrollView>
      </View>
    );
  }
}
