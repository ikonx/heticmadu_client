import React from 'react';
import Logo from 'components/atoms/Logo/Logo';
import styled from 'styled-components';
import MenuContainer from 'components/organisms/MenuContainer';
import AdminBlock from 'components/molecules/AdminBlock';
interface Props {}

const StyledContainerNav = styled.nav`
  height: 100vh;
  border-right: 1px solid #BDBDBD;
  padding: 80px 24px 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const AppMenu: React.FC<Props> = () => {
  return (
    <StyledContainerNav>
      <Logo />
      <MenuContainer />
      {/*<AdminBlock />*/}
    </StyledContainerNav>
  );
};

export default AppMenu;
