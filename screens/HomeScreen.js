import React from "react";
import { GiftedChat } from "react-native-gifted-chat";
import { ScrollView, StyleSheet, Text, View, Platform } from "react-native";
import KeyboardSpacer from "react-native-keyboard-spacer";
import { connect } from "react-redux";

import newMessageAction from "../state/actions/newMessageAction";

let user = {
  _id: 1,
  name: "Developer"
};

let user1 = {
  _id: 1,
  name: "Developer"
};

let user2 = {
  _id: 2,
  name: "React Native"
};

class HomeScreen extends React.Component {
  // state = {
  //   messages: this.props.messages,
  //   newMessage: {},
  //   user: {},
  //   user1: {
  //     _id: 1,
  //     name: "Developer"
  //   },
  //   user2: {
  //     _id: 2,
  //     name: "React Native"
  //   }
  // };

  constructor(props) {
    super(props);
    this.state = {
      messages: this.props.messages,
      newMessage: {},
      user: {},
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
    // if (this.props.messages.length % 2 == 0) {
    //   console.log("even length", this.props.messages.length);
    //   user = user1;
    // } else if (this.props.messages.length % 2 !== 0) {
    //   console.log("odd length", this.props.messages.length);
    //   user = user2;
    // }

    if (this.props.messages.length % 2 == 0) {
      console.log("evenLength =>", this.props.messages.length);
      user = user1;
      this.props.newMessageAction(this.state.newMessage, this.state.user1);
      console.log("boo00001");
    } else if (this.props.messages.length % 2 !== 0) {
      console.log("oddLength =>", this.props.messages.length);
      user = user2;
      this.props.newMessageAction(this.state.newMessage, this.state.user2);
      console.log("boo00002");
    }
    // this.setState({ messages: this.props.messages });
    //  this.props.newMessageAction(this.state.newMessage, this.state.user);
  }

  componentWillReceiveProps() {
    console.log("KKKKKKKKKKKK");
    this.setState({ messages: this.props.messages });
  }

  updateScreen = (messages = []) => {
    //console.log("3");
    // if (this.state.user === this.state.user1) {
    //   this.setState({
    //     user: this.state.user2
    //   });
    // } else {
    //   this.setState({
    //     user: this.state.user1
    //   });
    // }
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
    //  console.log("messages 1", messages);
    //  console.log("2");
    this.setState({
      newMessage: messages[0].text
    });
    this.updateScreen(messages);
  }
  render() {
    // this.setUser();
    if (this.props.messages == []) {
      user = user1;
    }
    //  console.log("THE USER IS", user);
    console.log("props", this.props.messages);

    console.log("state", this.state.messages);
    return (
      <View style={styles.container}>
        <GiftedChat
          messages={this.state.messages}
          onSend={messages => this.onSend(messages)}
          // user={{
          //  _id: this.state.senderId
          // }}
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
