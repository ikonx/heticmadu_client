import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { useHistory } from 'react-router-dom';
import * as jwtDecode from 'jwt-decode';
import UserContext from './user.context';
import { UserModel } from 'utils/models/user.model';
import { loginUser as loginUserAPI } from 'utils/http';

interface Props {}

const UserProvider: React.FC<Props> = ({ children }) => {
  const [user, setUser] = useState<UserModel>({
    isLogin: false,
    gotError: false,
  });
  const history = useHistory();

  const loginUser = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    const response = await loginUserAPI({ email, password });
    if (response.status === 201) {
      const token = response.data;
      setUser({ ...user, token, isLogin: true, gotError: false });
      history.push('/');
      localStorage.setItem('token', token);
    } else {
      setUser({ ...user, token: '', isLogin: false, gotError: true });
    }
  };

  const checkToken = () => {
    const token = localStorage.getItem('token');
    if (token) {
      const { exp, iat } = jwtDecode.default(token);
      const expDate = moment.unix(exp);
      const now = moment();

      if (now.isAfter(expDate)) {
        setUser({ ...user, token: '', isLogin: false });
      } else {
        history.push('/');
        setUser({ ...user, token, isLogin: true });
      }
    }
  };

  useEffect(() => {
    checkToken();
  }, []);

  useEffect(() => {
    user.isLogin === false && history.push('/login');
    user.isLogin === false && checkToken();
  }, [user.isLogin]);

  return (
    <UserContext.Provider value={{ user, setUser, loginUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
