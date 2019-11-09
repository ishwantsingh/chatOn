import React from "react";
import { GiftedChat } from "react-native-gifted-chat";
import { ScrollView, StyleSheet, Text, View, Platform } from "react-native";
import KeyboardSpacer from "react-native-keyboard-spacer";
import { connect } from "react-redux";

//import dummyMessages from "../state/dummyData";
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

  // componentWillMount() {
  //   this.setState({
  //     messages: this.props.messages
  //   });
  // }

  componentDidUpdate() {
    // this.setState(previousState => ({
    //   info: GiftedChat.append(previousState.messages, info)
    // }));
    // this.setState({
    //   messages: this.props.messages
    // });
    // this.setState((previousState, props) => ({
    //   messages: GiftedChat.append(previousState.messages, props.messages)
    // }));
    console.log(this.state);
    this.props.newMessageAction(this.state.newMessage[0].text, this.state.user);
  }

  // shouldComponentUpdate() {
  //   // this.setState(previousState => ({
  //   //   info: GiftedChat.append(previousState.messages, info)
  //   // }));
  //   this.setState({
  //     messages: this.props.messages
  //   });
  // }

  updateScreen = (messages = []) => {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages)
    }));
  };

  // updateScreen = (messages = []) => {
  //   this.setState((prevState, props) => ({
  //     messages: GiftedChat.append(prevState.messages, messages)
  //   }));
  //   console.log("ok", GiftedChat);
  // };

  // updateReducer = messages => {
  //   console.log(messages);
  //   this.props.newMessageAction(messages[0].text, this.state.user);
  // };

  onSend(messages) {
    console.log("gifted => ", GiftedChat);
    // this.setState(previousState => ({
    //   messages: GiftedChat.append(previousState.messages, messages)
    // }));
    // this.updateReducer(messages);
    this.setState({
      newMessage: messages
    });
    this.updateScreen(messages);

    // this.props.newMessageAction(messages[0].text, this.state.user);
  }
  // onSend(info) {
  //   console.log("info text is=>", info[0].text);
  //   this.props.newMessageAction(info[0].text, this.state.user);
  // }

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
  // console.log("state=>", state.newMessageReducer);
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
