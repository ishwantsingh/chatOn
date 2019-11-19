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

// class Login extends Component {
//   state = { email: "", password: "" };

//   handleEmailChange = ({ target }) => {
//     this.setState({ email: target.value });
//   };

//   handlePasswordChange = ({ target }) => {
//     this.setState({ password: target.value });
//   };

//   handleSubmit = () => {
//     const { dispatch } = this.props;
//     const { email, password } = this.state;

//     dispatch(loginUser(email, password));
//   };

//   render() {
//     const { classes, loginError, isAuthenticated } = this.props;
//     if (isAuthenticated) {
//       return <Redirect to="/" />;
//     } else {
//       return (
//         <Container component="main" maxWidth="xs">
//           <Paper className={classes.paper}>
//             <Avatar className={classes.avatar}>
//               <LockOutlinedIcon />
//             </Avatar>
//             <Typography component="h1" variant="h5">
//               Sign in
//             </Typography>
//             <TextField
//               variant="outlined"
//               margin="normal"
//               fullWidth
//               id="email"
//               label="Email Address"
//               name="email"
//               onChange={this.handleEmailChange}
//             />
//             <TextField
//               variant="outlined"
//               margin="normal"
//               fullWidth
//               name="password"
//               label="Password"
//               type="password"
//               id="password"
//               onChange={this.handlePasswordChange}
//             />
//             {loginError && (
//               <Typography component="p" className={classes.errorText}>
//                 Incorrect email or password.
//               </Typography>
//             )}
//             <Button
//               type="button"
//               fullWidth
//               variant="contained"
//               color="primary"
//               className={classes.submit}
//               onClick={this.handleSubmit}
//             >
//               Sign In
//             </Button>
//           </Paper>
//         </Container>
//       );
//     }
//   }
// }

// function mapStateToProps(state) {
//   return {
//     isLoggingIn: state.auth.isLoggingIn,
//     loginError: state.auth.loginError,
//     isAuthenticated: state.auth.isAuthenticated
//   };
// }

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
