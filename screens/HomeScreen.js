import React from "react";
import { GiftedChat } from "react-native-gifted-chat";
import { ScrollView, StyleSheet, Text, View, Platform } from "react-native";
import KeyboardSpacer from "react-native-keyboard-spacer";
import { connect } from "react-redux";

import newMessageAction from "../state/actions/newMessageAction";
import { sendMessgae } from "../state/actions/newMessageAction";

const user1 = {
  _id: 1,
  name: "Developer"
};

const user2 = {
  _id: 2,
  name: "React Native"
};

class HomeScreen extends React.Component {
  onSend(messages) {
    if (this.props.messagesData.length % 2 == 0) {
      //  this.props.newMessageAction(messages[0].text, user1);
      this.props.sendMessgae(
        messages[0].text,
        user1,
        this.props.userId,
        this.props.userId
      );
      console.log("boo00001");
    } else if (this.props.messagesData.length % 2 !== 0) {
      // this.props.newMessageAction(messages[0].text, user2);
      this.props.sendMessgae(
        messages[0].text,
        user2,
        this.props.userId,
        this.props.userId
      );
      console.log("boo00002");
    }
    console.log("yo the messages are:", messages);
  }
  render() {
    return (
      <View style={styles.container}>
        <GiftedChat
          messages={this.props.messagesData}
          onSend={messages => this.onSend(messages)}
          user={user1}
        />
        {Platform.OS === "android" ? <KeyboardSpacer topSpacing={20} /> : null}
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    newMessageAction: (text, user) => dispatch(newMessageAction(text, user)),
    sendMessgae: (text, userDetails, senderId, recieverId) =>
      dispatch(sendMessgae(text, userDetails, senderId, recieverId))
    //senderId and RecieverId sent into the thunk is of same user as using this for self chat.
  };
};

const mapStateToProps = state => {
  return {
    messages: state.newMessageReducer,
    userId: state.authInfo.user.uid,
    messagesData: state.data.data.data ? state.data.data.data : []
    // lastMessageUserId: state.data.data.data
    //   ? state.data.data.data[0].user._id
    //   : ""
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
