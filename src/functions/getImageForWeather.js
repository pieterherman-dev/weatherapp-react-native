const images = {
      Clear: require('../assets/Background/clear.png'),
      Hail: require('../assets/Background/hail.png'),
      'Heavy Cloud': require('../assets/Background/heavy-cloud.png'),
      'Light Cloud': require('../assets/Background/light-cloud.png'),
      'Heavy Rain': require('../assets/Background/heavy-rain.png'),
      'Light Rain': require('../assets/Background/light-rain.png'),
      Showers: require('../assets/Background/showers.png'),
      Sleet: require('../assets/Background/sleet.png'),
      Snow: require('../assets/Background/snow.png'),
      Thunder: require('../assets/Background/thunder.png')
    };
    
    export default weather => images[weather];