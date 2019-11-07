import React from "react";
import { GiftedChat } from "react-native-gifted-chat";
import { ScrollView, StyleSheet, Text, View, Platform } from "react-native";
import KeyboardSpacer from "react-native-keyboard-spacer";

import dummyMessages from "../state/dummyData";

export default class HomeScreen extends React.Component {
  state = {
    messages: []
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

  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages)
    }));
  }

  render() {
    return (
      <View style={styles.container}>
        <GiftedChat
          messages={this.state.messages}
          onSend={messages => this.onSend(messages)}
          user={{
            _id: 2
          }}
        />
        {Platform.OS === "android" ? <KeyboardSpacer topSpacing={30} /> : null}
      </View>
    );
  }
}

HomeScreen.navigationOptions = {
  title: "Home"
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  contentContainer: {
    paddingTop: 30
  }
});
