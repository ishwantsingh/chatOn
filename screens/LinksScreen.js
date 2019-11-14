import React from "react";
import { ScrollView, StyleSheet, Text, Button } from "react-native";

import { login } from "../state/actions/authAction";
import { connect } from "react-redux";

function LinksScreen(props) {
  return (
    <ScrollView style={styles.container}>
      <Text>Log In Please</Text>
      <Button onPress={props.login} title="Login" />
    </ScrollView>
  );
}

LinksScreen.navigationOptions = {
  title: "Links"
};

const mapDispatchToProps = dispatch => {
  //123
  return {
    login: () => dispatch(login())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(LinksScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  }
});
