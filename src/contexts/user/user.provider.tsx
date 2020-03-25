import React, { useState, useEffect } from 'react';
import UserContext from './user.context';
import { UserModel } from 'utils/models/user.model';
import { loginUser as loginUserAPI } from 'utils/http';
import { useHistory } from 'react-router-dom';

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
    } else {
      setUser({ ...user, token: '', isLogin: false, gotError: true });
    }
  };

  useEffect(() => {
    !user.isLogin && history.push('/login');
  }, [user.isLogin]);

  return (
    <UserContext.Provider value={{ user, setUser, loginUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
