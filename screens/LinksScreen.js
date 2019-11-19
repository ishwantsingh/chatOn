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

// function LinksScreen(props) {
//   return (
//     <ScrollView style={styles.container}>
//       <Text>Log In Please</Text>
//       <Button onPress={props.login} title="Login" />
//     </ScrollView>
//   );
// }

function LinksScreen(props) {
  const [email, handleEmailChange] = React.useState("");
  const [password, handlePasswordChange] = React.useState("");

  // state = { email: "", password: "" };

  // handleEmailChange = text => {
  //   console.log("text is=>", text);
  //   this.setState({ email: text });
  // };

  // handlePasswordChange = text => {
  //   this.setState({ password: text });
  // };

  handleSubmit = e => {
    e.preventDefault();
    // const { dispatch } = this.props;
    //  const { email, password } = this.state;
    console.log("email is=>", email);
    console.log("pass is=>", password);
    props.login(email, password);
  };

  // render() {
  const { loginError, isAuthenticated } = props;
  // if (isAuthenticated) {
  //   return <Redirect to="/" />;
  // } else {
  return (
    // <Container component="main" maxWidth="xs">
    <View>
      <View>
        {/* <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar> */}
        <Text>Sign in</Text>
        <TextInput
          textContentType="emailAddress"
          placeholder="Email Address"
          //   name="email"
          value={email}
          onChangeText={text => handleEmailChange(text)}
        />
        <TextInput
          //   name="password"
          placeholder="Password"
          textContentType="password"
          // id="password"
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
  // }
}
// }

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
  //123
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
