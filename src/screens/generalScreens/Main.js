import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {
  View,
  StatusBar,
  Text,
  KeyboardAvoidingView,
  ImageBackground,
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as AppActions from '../../actions/AppActions.js';
import getImageForWeather from '../../functions/getImageForWeather';
import getIconForWeather from '../../functions/getIconForWeather';
import {getLocationId, getWeather} from '../../api/metaweather/api-metaweather';

import moment from 'moment';

const styles = require('../../assets/StyleSheets/MainStyle');

export class Main extends Component {
  constructor(props) {
    super(props);
    this.handleDate = this.handleDate.bind(this);
    this.state = {
      loading: false,
      error: false,
      temperature: 0,
      weather: '',
      created: '2000-01-01T00:00:00.000000Z',
    };
  }

  settings() {
    console.log('==> settings');
    this.props.navigation.navigate('Settings');
  }

  static navigationOptions = {
    headerTitleStyle: {alignSelf: 'center'},
    title: 'Weather App',

    headerTransparent: true,
    headerTintColor: 'white',
    headerTitleStyle: {fontWeight: 'bold', fontSize: 26},
  };

  componentDidMount() {
    this.handleUpdateLocation(this.props.AppInformation.WeahterLocation);
  }

  handleDate = date => moment(date).format('hh:mm:ss');

  // Update current location
  handleUpdateLocation = async city => {
    if (!city) return;

    this.setState({loading: true}, async () => {
      try {
        const ID = await getLocationId(city);
        const {weather, temperature, created} = await getWeather(ID);

        this.setState({
          loading: false,
          error: false,
          weather,
          temperature,
          created,
        });
      } catch (e) {
        this.setState({
          loading: false,
          error: true,
        });
      }
    });
  };

  render() {
    const {goBack} = this.props.navigation;
    const {loading, error, weather, temperature, created} = this.state;

    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <StatusBar barStyle="light-content" />

        <ImageBackground
          source={getImageForWeather(weather)}
          style={styles.imageContainer}
          imageStyle={styles.image}>
          <View style={styles.detailsContainer}>
            <ActivityIndicator animating={loading} color="white" size="large" />
            <Icon
              name="settings"
              color="white"
              size={35}
              onPress={() => this.props.navigation.navigate('Settings')}
            />
            {!loading && (
              <View>
                {error && (
                  <Text style={[styles.smallText, styles.textStyle]}>
                    Sorry, could not load your city or weather. Please try again
                    later...
                  </Text>
                )}
                {!error && (
                  <View>
                    <Text style={[styles.largeText, styles.textStyle]}>
                      {getIconForWeather(weather)}{' '}
                      {this.props.AppInformation.WeahterLocation}
                    </Text>
                    <Text style={[styles.smallText, styles.textStyle]}>
                      {weather}
                    </Text>
                    <Text style={[styles.largeText, styles.textStyle]}>
                      {`${Math.round(temperature)}°`}
                    </Text>
                  </View>
                )}
              </View>
            )}
          </View>
        </ImageBackground>
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
)(Main);
