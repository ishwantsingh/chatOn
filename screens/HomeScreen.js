import React from "react";
import { GiftedChat } from "react-native-gifted-chat";
import { StyleSheet, View, Platform } from "react-native";
import KeyboardSpacer from "react-native-keyboard-spacer";
import { connect } from "react-redux";

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
      this.props.sendMessgae(
        messages[0].text,
        user1,
        this.props.userId,
        this.props.userId
      );
      console.log("boo00001");
    } else if (this.props.messagesData.length % 2 !== 0) {
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
  // renderTicks() {
  //   const { currentMessage, renderTicks, user } = this.props;
  //   if (renderTicks && currentMessage) {
  //     return renderTicks(currentMessage);
  //   }
  //   if (currentMessage && user && currentMessage.user._id !== user._id) {
  //     return null;
  //   }
  //   if (
  //     currentMessage &&
  //     (currentMessage.sent || currentMessage.received || currentMessage.pending)
  //   ) {
  //     return (
  //       <View style={styles.content.tickView}>
  //         {!!currentMessage.sent && (
  //           <Text style={[styles.content.tick, this.props.tickStyle]}>✓</Text>
  //         )}
  //         {!!currentMessage.received && (
  //           <Text style={[styles.content.tick, this.props.tickStyle]}>✓</Text>
  //         )}
  //         {!!currentMessage.pending && (
  //           <Text style={[styles.content.tick, this.props.tickStyle]}>🕓</Text>
  //         )}
  //       </View>
  //     );
  //   }
  //   return null;
  // }
  // renderBubble = props => {
  //   return (
  //     <Bubble
  //       {...props,renderTicks}
  //     //  {renderTicks}
  //     />
  //   )
  // }
  render() {
    return (
      <View style={styles.container}>
        <GiftedChat
          messages={this.props.messagesData}
          onSend={messages => this.onSend(messages)}
          user={user1}
          //    renderBubble={this.renderBubble}
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
    userId: state.authInfo.user.uid,
    messagesData: state.data.data.data ? state.data.data.data : []
  };
};

HomeScreen.navigationOptions = {
  title: "Home"
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  contentContainer: {
    paddingTop: 30
  }
});
