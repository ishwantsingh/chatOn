import React from "react";
import { GiftedChat } from "react-native-gifted-chat";
import { ScrollView, StyleSheet, Text, View, Platform } from "react-native";
import KeyboardSpacer from "react-native-keyboard-spacer";
import { connect } from "react-redux";

import newMessageAction from "../state/actions/newMessageAction";

const user1 = {
  _id: 1,
  name: "Developer"
};

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: this.props.messages,
      newMessage: {},
      user1: {
        _id: 1,
        name: "Developer"
      },
      user2: {
        _id: 2,
        name: "React Native"
      }
    };
  }

  componentDidUpdate() {
    if (this.props.messages.length % 2 == 0) {
      this.props.newMessageAction(this.state.newMessage, this.state.user1);
      console.log("boo00001");
    } else if (this.props.messages.length % 2 !== 0) {
      this.props.newMessageAction(this.state.newMessage, this.state.user2);
      console.log("boo00002");
    }
  }

  updateScreen = (messages = []) => {
    if (this.props.messages.length % 2 == 0) {
      console.log("messages.user", messages[0].user);
      messages[0].user = this.state.user1;
    } else if (this.props.messages.length % 2 !== 0) {
      messages[0].user = this.state.user2;
    }
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages)
    }));
  };

  onSend(messages) {
    this.setState({
      newMessage: messages[0].text
    });
    this.updateScreen(messages);
  }
  render() {
    return (
      <View style={styles.container}>
        <GiftedChat
          messages={this.state.messages}
          onSend={messages => this.onSend(messages)}
          user={user1}
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
  // console.log(state, "state");
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
