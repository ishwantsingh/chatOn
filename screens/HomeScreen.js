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
    },
    // user1: {
    //   _id: 1,
    //   name: "Developer"
    // },
    user2: {
      _id: 2,
      name: "React Native"
    }
    //    senderId: 1
  };

  componentDidUpdate() {
    // console.log(this.state.user2);
    // console.log(this.state.user);
    // if (this.state.user == this.state.user1) {
    //   this.setState({
    //     user: this.state.user2
    //   });
    // } else {
    //   // this.props.newMessageAction(
    //   //   this.state.newMessage[0].text,
    //   //   this.state.user
    //   // );
    //   this.setState({
    //     user: this.state.user1
    //   });
    // }
    // console.log("4");
    // JSON.stringify(obj1) === JSON.stringify(obj2)
    if (
      JSON.stringify(this.props.messages[0].user) ===
      JSON.stringify(this.state.user)
    ) {
      console.log("works1");
      this.props.newMessageAction(this.state.newMessage, this.state.user2);
    } else if (
      JSON.stringify(this.props.messages[0].user) ===
      JSON.stringify(this.state.user2)
    ) {
      console.log("works2");

      this.props.newMessageAction(this.state.newMessage, this.state.user);
    }
    //  this.props.newMessageAction(this.state.newMessage, this.state.user);
  }

  // componentWillUpdate() {
  //   if (this.state.user == this.state.user1) {
  //     this.setState({
  //       user: this.state.user2
  //     });
  //   } else {
  //     this.setState({
  //       user: this.state.user1
  //     });
  //   }
  // }

  updateScreen = (messages = []) => {
    console.log("3");
    // if (this.state.user === this.state.user1) {
    //   this.setState({
    //     user: this.state.user2
    //   });
    // } else {
    //   this.setState({
    //     user: this.state.user1
    //   });
    // }
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages)
    }));
  };

  onSend(messages) {
    // if (this.state.user === this.state.user1) {
    //   this.setState({
    //     user: this.state.user2
    //   });
    // } else {
    //   this.setState({
    //     user: this.state.user1
    //   });
    // }
    console.log("2");
    this.setState({
      newMessage: messages[0].text
    });
    this.updateScreen(messages);
  }

  render() {
    // if (this.state.user === this.state.user1) {
    //   this.setState({
    //     user: this.state.user2
    //   });
    // } else {
    //   this.setState({
    //     user: this.state.user1
    //   });
    // }
    console.log("user1", this.props.messages[0].user);
    return (
      <View style={styles.container}>
        <GiftedChat
          messages={this.state.messages}
          onSend={messages => this.onSend(messages)}
          // user={{
          //  _id: this.state.senderId
          // }}
          user={this.props.messages[1].user}
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
