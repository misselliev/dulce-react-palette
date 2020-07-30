import React, { useState } from 'react';
import PropTypes from 'proptypes';
import { useDispatch } from 'react-redux';
import {
  Button, Form, Grid, Header, Segment, Icon,
} from 'semantic-ui-react';
import userActions from '../Redux/userActions';
import '../styles/styles-signup.css';

const SignupPage = props => {
  const dispatch = useDispatch();

  const [signupForm, setSignupForm] = useState({
    email: '',
    password: '',
  });

  const handleChange = e => setSignupForm({ ...signupForm, [e.target.name]: e.target.value });

  const {
    email, password, passwordConfirmation,
  } = signupForm;

  const handleSubmit = e => {
    e.preventDefault();
    const { history } = props;
    dispatch(userActions.newUser({ email, password }));
    history.push('/');
  };

  return (
    <Grid textAlign="center" className="middle aligned wall signup">
      <Grid.Column className="signup-column">
        <Header as="h2" className="signup-header" textAlign="center">
          <Icon name="user" />
          Create your account
        </Header>
        <Form size="large" onSubmit={handleSubmit}>
          <Segment stacked>
            <Form.Input
              id="form-input-control-email"
              fluid
              icon="user"
              iconPosition="left"
              type="text"
              name="email"
              value={email}
              onChange={handleChange}
              placeholder="Email"
              label="Email"
              style={{ marginBottom: '1em' }}
            />
            <Form.Input
              id="form-input-control-password"
              fluid
              icon="lock"
              iconPosition="left"
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              placeholder="Password"
              label="Password"
              style={{ marginBottom: '1em' }}
            />
            <Form.Input
              id="form-input-control-password-confirmation"
              fluid
              icon="lock"
              iconPosition="left"
              type="password"
              name="passwordConfirmation"
              value={passwordConfirmation || ''}
              onChange={handleChange}
              placeholder="Password confirmation"
              label="Password confirmation"
              style={{ marginBottom: '1em' }}
            />
            <Button className="signup-button" fluid size="large" type="submit">
              Signup
            </Button>
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
  );
};

SignupPage.propTypes = {
  history: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default SignupPage;
