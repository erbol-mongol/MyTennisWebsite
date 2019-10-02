import React from 'react';
import {withRouter, Link} from 'react-router-dom';

import * as ROUTES from '../../../constants/routes';
import { AuthUserContext, withAuthorization } from '../Session';



import module from './SignBlock.module.css';
import '../../../font-awesome/css/all.min.css';

import SignInPage from './SignElements/SingIn';
import SignUpPage from './SignElements/SingUp';

        
 

const SignBlock = props =>{
    return(
        <AuthUserContext.Consumer>
            {authUser => (
                <div className = {props.location.pathname === ROUTES.SIGN_UP ? module.Signblock__SignUp : module.Signblock__SignIn}>
                    <h1 className = {module.SignBlock__title}>{props.location.pathname === ROUTES.SIGN_UP ? 'Зарегестрироваться' : 'Войти'}</h1>
                    {props.location.pathname === ROUTES.SIGN_UP ? <h1><SignUpPage/></h1> : <h1><SignInPage/></h1>}

                    <Link  to = {ROUTES.LANDING} className = {module.closeBtn} ><i className ="fas fa-times-circle"></i></Link>
                </div>
            )}
        </AuthUserContext.Consumer>
    )   
}

const condition = authUser => authUser == null;

const SignBlockFinished = withRouter(SignBlock);

export default withAuthorization(condition)(SignBlock);