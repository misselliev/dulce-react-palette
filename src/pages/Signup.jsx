import React from 'react';
import {
  Button, Form, Grid, Header, Segment, Icon,
} from 'semantic-ui-react';
import '../styles/styles-signup.css';

const SignupPage = () => (
  <Grid textAlign="center" className="middle aligned wall signup">
    <Grid.Column className="signup-column">
      <Header as="h2" className="signup-header" textAlign="center">
        <Icon name="user" />
        Create your account
      </Header>
      <Form size="large">
        <Segment stacked>
          <Form.Input
            id="form-input-control-email"
            fluid
            icon="user"
            iconPosition="left"
            type="text"
            name="email"
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
            name="password_confirmation"
            placeholder="Password confirmation"
            label="Password confirmation"
            style={{ marginBottom: '1em' }}
          />
          <Button style={{ backgroundColor: '#5cba57', color: 'white' }} fluid size="large" type="submit">
            Signup
          </Button>
        </Segment>
      </Form>
    </Grid.Column>
  </Grid>
);

export default SignupPage;
