import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import AdminText from 'components/atoms/Text/Admin/AdminText';
import AdminInputBlock from 'components/molecules/Admin/AdminInputBlock';
import BtnBlue from 'components/atoms/Buttons/BtnBlue';
import UserContext from 'contexts/user/user.context';

interface Props {}

const ContainerAdminBlock = styled.div`
  button {
    width: 100%;
  }
`;

const AdminBlock: React.FC<Props> = () => {
  const [credentials, setCredentials] = useState({
    email: null,
    password: null,
  });

  const { loginUser } = useContext(UserContext);

  const onChange = (key: string, value: string) => {
    const obj: any = { ...credentials };
    obj[key] = value;
    setCredentials(obj);
  };

  const onSubmit = async () => {
    await loginUser(credentials);
  };

  return (
    <ContainerAdminBlock>
      <AdminText />
      <AdminInputBlock onChange={onChange} />
      <BtnBlue text="Se connecter" onClick={onSubmit} />
    </ContainerAdminBlock>
  );
};

export default AdminBlock;
