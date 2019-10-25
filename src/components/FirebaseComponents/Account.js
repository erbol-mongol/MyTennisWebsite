import React from 'react';

import { AuthUserContext, withAuthorization } from './Session';

import SignOutButton from './SingOut';
import { PasswordForgetForm } from './PasswordForget';
import PasswordChangeForm from './PasswordChange';

const Account = props =>{
    return (
    <AuthUserContext.Consumer>
        {authUser => (
            <div>
                <h2>Hello  {authUser.email}</h2>
                <SignOutButton/>
                <PasswordForgetForm />
                <PasswordChangeForm />
            </div>
        )}
    </AuthUserContext.Consumer>
    )
}

const condition = authUser => !!authUser;

export default withAuthorization(condition)(Account);