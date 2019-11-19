import React from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  Button
} from "react-native";

import { login } from "../state/actions/authAction";
import { connect } from "react-redux";

function LinksScreen(props) {
  const [email, handleEmailChange] = React.useState("");
  const [password, handlePasswordChange] = React.useState("");

  handleSubmit = e => {
    e.preventDefault();
    console.log("email is=>", email);
    console.log("pass is=>", password);
    props.login(email, password);
  };

  const { loginError, isAuthenticated } = props;

  return (
    <View>
      <View>
        <Text>Sign in</Text>
        <TextInput
          textContentType="emailAddress"
          placeholder="Email Address"
          value={email}
          onChangeText={text => handleEmailChange(text)}
        />
        <TextInput
          placeholder="Password"
          textContentType="password"
          value={password}
          onChangeText={text => handlePasswordChange(text)}
        />
        {loginError && (
          <Text className={styles.errorText}>Incorrect email or password.</Text>
        )}
        <Button onPress={this.handleSubmit} title="Sign In" />
      </View>
    </View>
  );
}

LinksScreen.navigationOptions = {
  title: "Links"
};

function mapStateToProps(state) {
  return {
    isLoggingIn: state.authInfo.isLoggingIn,
    loginError: state.authInfo.loginError,
    isAuthenticated: state.authInfo.isAuthenticated
  };
}

const mapDispatchToProps = dispatch => {
  return {
    login: (email, password) => dispatch(login(email, password))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LinksScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  },
  form: {
    marginTop: 1
  },
  errorText: {
    color: "#f50057",
    marginBottom: 5,
    textAlign: "center"
  }
});
