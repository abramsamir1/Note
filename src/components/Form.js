import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { Input, Card, CardSection, Button, Spinner } from './common';
import { emailChanged, passwordChanged, signUp, logIn } from '../actions';

class SignInForm extends Component {

onEmailChange(text) {
  this.props.emailChanged(text);
    }
onPasswordChange(text) {
  this.props.passwordChanged(text);
    }
onButtonOnePress() {
  const { email, password } = this.props;
  this.props.signUp({ email, password });
}

onButtonTwoPress() {
  const { email, password } = this.props;
  this.props.logIn({ email, password });
  console.log('go login');
}

renderButtonOne() {
  if (this.props.loadingOne) {
    return <Spinner size="small" />;
  }
  return (
    <Button onPress={this.onButtonOnePress.bind(this)}>
      Sign Up
    </Button>
  );
}

renderButtonTwo() {
  if (this.props.loadingTwo) {
    return <Spinner size="small" />;
  }
  return (
    <Button onPress={this.onButtonTwoPress.bind(this)}>
      Sign In
    </Button>
  );
}


render() {
return (
    <Card>
      <CardSection>

      <Input
      label="Email"
      placeholder="email@gmail.com"
      onChangeText={this.onEmailChange.bind(this)}
      value={this.props.email}
      />
      </CardSection>

      <CardSection>
        <Input
        label="Password"
        placeholder="password"
        onChangeText={this.onPasswordChange.bind(this)}
        value={this.props.password}
        />
      </CardSection>

      <CardSection>
          {this.renderButtonTwo()}
      </CardSection>

      <CardSection>
        {this.renderButtonOne()}
      </CardSection>

      <Text style={styles.errorTextStyle}>
          {this.props.error}
       </Text>
    </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

const mapStateToProps = ({ auth }) => {
const { email, password, error, loadingOne, loadingTwo } = auth;
return { email, password, error, loadingOne, loadingTwo };
};

export default connect(mapStateToProps,
  { emailChanged, passwordChanged, signUp, logIn })(SignInForm);
