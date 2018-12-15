import React, {Component } from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  AppRegistry,
  TextInput
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

class Blink extends Component {
  constructor(props) {
  super(props);
  this.state = { isShowingText: true };
  setInterval(() => {
        this.setState(previousState => (
        { isShowingText: !previousState.isShowingText }
        ))}, 1000);
  }
  
  render () {
    if (!this.state.isShowingText)
      return null; //<Text>U WRONG!</Text>;
    return (
        <Text>{this.props.Text}</Text>
    );
  }
}

export default class BlinkApp extends Component {
  render() {
    return (
      
      <View style={{alignItems: 'center'}}>
        <UserName />
        <Blink Text='I love to blink' />
        <Blink Text='Yes blinking is so great' />
        <Blink Text='Why did they ever take this out of HTML' />
        <Blink Text='Look at me look at me look at me' />
      </View>
    );
  }
}

class UserName extends Component {
  constructor(props) {
    super(props);
    this.state = { knownuser: false, username: "", pass: "" };
  }
  render() {
    if (this.state.knownuser && this.state.username != "" && this.state.pass != "")
      return (
      <View><Text> YOU are connnected: {this.state.username}, with pass: {this.state.pass}</Text></View>
      );
    else
      return (<View>
        <TextInput name="username" style={{ borderColor: 'gray' }} onEndEditing={(myText) => this.setState({ knownuser: true, username: myText, pass: "" })}/>
        <TextInput name="pass" style={{ borderColor: 'gray' }} onEndEditing={(myText) => this.setState({ knownuser: true, username: this.state.username, pass: myText })}/>
      </View>
      );
  }
}
/*export default class HomeScreen extends React.Component {
  Blink;
  static navigationOptions = {
    header: null,
  };
  

  render() {
      /*if (!this.state.isShowingText) {
          return null;
      } else {
        return (
        /*<View style={styles.container}>
          <Text>{this.props.tosay}</Text>
        </View>
          Blink.render()
        );
      //}
  }
}*/
  /*_maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Learn more
        </Text>
      );

      return (
        <Text style={styles.developmentModeText}>
          Development mode is enabled, your app will be slower but you can use useful development
          tools. {learnMoreButton}
        </Text>
      );
    } else {
      return (
        <Text style={styles.developmentModeText}>
          You are not in development mode, your app will run at full speed.
        </Text>
      );
    }
  }

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
    );*/

styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    textAlign: 'center'
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
