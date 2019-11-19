import React from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  Button
} from "react-native";

import { signup } from "../state/actions/authAction";
import { connect } from "react-redux";

function SettingsScreen(props) {
  const [email, handleEmailChange] = React.useState("");
  const [password, handlePasswordChange] = React.useState("");
  const [firstName, handleFirstNameChange] = React.useState("");
  const [lastName, handleLastNameChange] = React.useState("");

  handleSubmit = e => {
    e.preventDefault();
    props.signup(email, password, firstName, lastName);
  };

  const { loginError, isAuthenticated } = props;

  return (
    <View>
      <View>
        <Text>Sign up</Text>
        <TextInput
          textContentType="name"
          placeholder="First Name"
          value={firstName}
          onChangeText={text => handleFirstNameChange(text)}
        />
        <TextInput
          textContentType="familyName"
          placeholder="Last Name"
          value={lastName}
          onChangeText={text => handleLastNameChange(text)}
        />
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
          <Text style={styles.errorText}>Incorrect email or password.</Text>
        )}
        <Button onPress={this.handleSubmit} title="Sign Up" />
      </View>
    </View>
  );
}

SettingsScreen.navigationOptions = {
  title: "Settings"
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
    signup: (email, password, firstName, lastName) =>
      dispatch(signup(email, password, firstName, lastName))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SettingsScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  },
  errorText: {
    color: "#f50057",
    marginBottom: 5,
    textAlign: "center"
  }
});
