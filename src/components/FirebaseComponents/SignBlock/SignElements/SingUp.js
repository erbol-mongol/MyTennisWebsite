import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import { withFirebase  } from '../../../../container/Firebase';

import * as ROUTES from '../../../../constants/routes';
import module from '../SignBlock.module.css';

const SignUpPage = () => (
  <div>
    <SignUpForm />
    <hr/>
    <Link to = {ROUTES.SIGN_IN } className = {module.Sign__link}> Уже зарегестрированы? </Link>
  </div>
);

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

class SignUpFormBase extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { username, email, passwordOne } = this.state;

    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
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
    const { username,email,passwordOne,passwordTwo,error} = this.state;
    const isInvalid = passwordOne !== passwordTwo || passwordOne === '' || email === '' || username === '';

    return (
      <>
      <form onSubmit={this.onSubmit}>
        <div className = {module.flexContainer}>
        

          <div className = {module.SignUp__block}>
            <span className = {module.SignUp__label}>Ваше Полное имя</span>
            <input
              name="username"
              value={username}
              onChange={this.onChange}
              type="text"
              placeholder="Full Name"
              className = {module.SignUp__input}/>
          </div>


          <div className = {module.SignUp__block}>
            <span className = {module.SignUp__label}>Ваша электронная почта</span>
            <input
              name="email"
              value={email}
              onChange={this.onChange}
              type="text"
              placeholder="Email Address"
              className = {module.SignUp__input}/>
          </div>
          

          <div className = {module.SignUp__block}>
            <span className = {module.SignUp__label}>Пароль</span>
            <input
              name="passwordOne"
              value={passwordOne}
              onChange={this.onChange}
              type="password"
              placeholder="Password"
              className = {module.SignUp__input}/>
          </div>


          <div className = {module.SignUp__block}>
          <span className = {module.SignUp__label}>Подтверждение пароля</span>
            <input
              name="passwordTwo"
              value={passwordTwo}
              onChange={this.onChange}
              type="password"
              placeholder="Confirm Password"
              className = {module.SignUp__input}/>
          </div>

        </div>
        

        <div className = {module.SignUp__text}>Зарегестрировашись вы принимаете наши Условия пользования  и Политику конфидециальности</div>
        <button disabled={isInvalid} type="submit" className = {module.SignUp__button}>Sign Up</button>
        {error && <p className = {module.error}>{error.message}</p>}

      </form>
      </>
    );
  }
}


const SignUpForm = withRouter(withFirebase(SignUpFormBase));

export default SignUpPage;
export { SignUpForm };
