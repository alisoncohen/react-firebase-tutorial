import React from 'react';

import { PasswordForgetForm } from '../PasswordForget';
import PasswordChangeForm from '../PasswordChange';

const AccountPage = () => (
  <div>
    <h1>Account Page</h1>
    <h2>Forgot Password</h2>
    <PasswordForgetForm />
    <h2>Change Password</h2>
    <PasswordChangeForm />
  </div>
);

export default AccountPage;
