import React from 'react';
import {
  Button, Form, Grid, Header, Segment, Icon,
} from 'semantic-ui-react';
import '../styles/styles-login.css';

const LoginPage = () => (
  <Grid textAlign="center" className="middle aligned wall login">
    <Grid.Column className="login-column">
      <Header as="h2" className="login-header" textAlign="center">
        <Icon name="home" />
        Log-in to your account
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
            className="login-input"
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
            className="login-input"
          />
          <Button className="login-button" fluid size="large" type="submit">
            Login
          </Button>
        </Segment>
      </Form>
    </Grid.Column>
  </Grid>
);

export default LoginPage;
