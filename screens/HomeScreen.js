import React from "react";
import { GiftedChat } from "react-native-gifted-chat";
import { ScrollView, StyleSheet, Text, View, Platform } from "react-native";
import KeyboardSpacer from "react-native-keyboard-spacer";
import { connect } from "react-redux";

import dummyMessages from "../state/dummyData";
import newMessageAction from "../state/actions/newMessageAction";

class HomeScreen extends React.Component {
  state = {
    messages: [],
    user: {
      _id: 1,
      name: "Developer"
    }
  };

  componentWillMount() {
    this.setState({
      // messages: [
      //   {
      //     _id: 1,
      //     text: "Hello developer",
      //     createdAt: new Date(),
      //     user: {
      //       _id: 2,
      //       name: "React Native",
      //       avatar: "https://placeimg.com/140/140/any"
      //     }
      //   }
      // ]
      messages: dummyMessages
    });
  }

  // onSend(messages = []) {
  //   this.setState(previousState => ({
  //     messages: GiftedChat.append(previousState.messages, messages)
  //   }));
  // }
  onSend(info) {
    console.log("info text is=>", info[0].text);
    this.props.newMessageAction(info[0].text, this.state.user);
  }

  render() {
    return (
      <View style={styles.container}>
        <GiftedChat
          messages={this.state.messages}
          onSend={info => this.onSend(info)}
          user={{
            _id: 1
          }}
        />
        {Platform.OS === "android" ? <KeyboardSpacer topSpacing={30} /> : null}
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    newMessageAction: (text, user) => dispatch(newMessageAction(text, user))
  };
};

HomeScreen.navigationOptions = {
  title: "Home"
};

export default connect(
  null,
  mapDispatchToProps
)(HomeScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  contentContainer: {
    paddingTop: 30
  }
});
