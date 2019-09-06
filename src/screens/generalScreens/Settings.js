import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {
  View,
  StatusBar,
  Text,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';

import * as AppActions from '../../actions/AppActions.js';

const styles = require('../../assets/StyleSheets/MainStyle');

export class Settings extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    headerTitleStyle: {alignSelf: 'center'},
    title: 'Settings',
    headerTransparent: true,
    headerTintColor: 'white',
    headerTitleStyle: {fontWeight: 'bold', fontSize: 26},
  };

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <StatusBar barStyle="light-content" />
        <View style={styles.detailsContainer}>
          <Text style={[styles.smallText, styles.textStyle]}>Location: </Text>
          <TextInput
            style={{
              fontSize: 30,
              borderWidth: 1,
              marginLeft: 14,
              width: 320,
              backgroundColor: '#D1DDEA',
            }}
            editable
            defaultValue={'Brussels'}
            placeholder={'Location'}
            autoCapitalize="words"
            clearButtonMode="always"
            underlineColorAndroid="transparent"
          />
          <Text></Text>
          <Text style={[styles.smallText, styles.textStyle]}>
            Weather API:{' '}
          </Text>
          <TextInput
            style={{
              fontSize: 30,
              borderWidth: 1,
              marginLeft: 14,
              width: 320,
              backgroundColor: '#D1DDEA',
            }}
            editable
            defaultValue={'metaweather'}
            placeholder={'API'}
            autoCapitalize="words"
            clearButtonMode="always"
            underlineColorAndroid="transparent"
          />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const mapStateToProps = state => ({
  AppInformation: state.AppReducer,
});

function mapDispatchToProps(dispatch) {
  return {
    AppActions: bindActionCreators(AppActions, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Settings);
