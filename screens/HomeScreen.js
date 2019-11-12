import React from "react";
import { GiftedChat } from "react-native-gifted-chat";
import { ScrollView, StyleSheet, Text, View, Platform } from "react-native";
import KeyboardSpacer from "react-native-keyboard-spacer";
import { connect } from "react-redux";

import newMessageAction from "../state/actions/newMessageAction";

class HomeScreen extends React.Component {
  state = {
    messages: this.props.messages,
    newMessage: {},
    user: {
      _id: 1,
      name: "Developer"
    }
  };

  componentDidUpdate() {
    console.log(this.state);
    this.props.newMessageAction(this.state.newMessage[0].text, this.state.user);
  }

  updateScreen = (messages = []) => {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages)
    }));
  };

  onSend(messages) {
    this.setState({
      newMessage: messages
    });
    this.updateScreen(messages);
  }

  render() {
    return (
      <View style={styles.container}>
        <GiftedChat
          messages={this.state.messages}
          onSend={messages => this.onSend(messages)}
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

const mapStateToProps = state => {
  console.log(state, "state");
  return {
    messages: state.newMessageReducer
  };
};

HomeScreen.navigationOptions = {
  title: "Home"
};

export default connect(
  mapStateToProps,
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
