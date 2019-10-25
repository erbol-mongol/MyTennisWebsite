import React, { Component } from 'react';
import { withRouter  , Link} from 'react-router-dom';
import { compose } from 'recompose';

import { withFirebase  } from '../../../../container/Firebase';

import * as ROUTES from '../../../../constants/routes';
import module from '../SignBlock.module.css';


const SignInPage = () => (
  <div>
    <SignInForm />
    <hr/>
    <Link to={ROUTES.SIGN_UP} className = {module.Sign__link}>Don't have an account? Sign Up</Link>
  </div>
);

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

class SignInFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { email, password } = this.state;

    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.LANDING);
      })
      .catch(error => {
        this.setState({ error });
      });

    event.preventDefault();
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };



  render() {
    const { email, password, error } = this.state;
    const isInvalid = password === '' || email === '';
    const btnClassName = `${module.SignIn__button} ${module.SignUp__button}`

    return (
      <form onSubmit={this.onSubmit}>


        <div className = {module.SignIn__block}>
          <span className = {module.SignUp__text}>Ваша электронная почта</span>
          <input
            name="email"
            value={email}
            onChange={this.onChange}
            type="text"
            placeholder="Email Address"
            className = {module.SignIn__input}/>
        </div>


        <div className = {module.SignIn__block}>
        <span className = {module.SignUp__text}>Пароль</span>
          <input
            name="password"
            value={password}
            onChange={this.onChange}
            type="password"
            placeholder="Password"
            className = {module.SignIn__input}/>
            <Link to={ROUTES.PASSWORD_FORGET} className = {module.SignIn__link}>Forgot Password?</Link>
        </div>


        <button disabled={isInvalid} type="submit" className = {btnClassName}>Sign In</button>

        {error && <p className = {module.error}>{error.message}</p>}
      </form>
    );
  }
}



const SignInForm = compose(
  withRouter,
  withFirebase,
)(SignInFormBase);

export default SignInPage;

export { SignInForm };
