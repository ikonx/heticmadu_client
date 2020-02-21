import React from 'react';
import styled from 'styled-components';
import Admin from 'components/atoms/Admin/Admin';
import Arrow from 'components/atoms/Arrow';
import { Colors, Fonts } from "../../utils/styles";
import { Link } from "react-router-dom";

interface Props {
  status: boolean;
  clickListener: () => void;
}

const StyledContainer = styled.div`
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    position: relative;
`;

const LogoutBlock = styled.div<{ status: string }>`
   background: ${Colors.white};
   width: 100%;
   height: 100%;
   position: absolute;
   bottom: -60px;
   left: 0;
   border: 1px solid ${Colors.lightGrey};
   border-top: 0;
   opacity: ${props => props.status === 'true' ? 1 : 0};
   pointer-events: ${props => props.status === 'true' ? 'unset' : 'none'};
   transition: opacity .3s;
`;

const StyledLink = styled(Link)`
  color: ${Colors.lightRed};
  font-size: 15px;
  font-family: ${Fonts.medium};
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  transition: .5s;
  &:hover {
    color: ${Colors.lightHoverRed};
  }
`;

const AdminBlock: React.FC<Props> = ({ status, clickListener }) => {
    console.log(status);
    return (
        <StyledContainer onClick={clickListener}>
            <Admin />
            <Arrow isClicked={status}/>
            <LogoutBlock status={status.toString()}>
              <StyledLink to="/">Se déconnecter</StyledLink>
            </LogoutBlock>
        </StyledContainer>
    )
}

export default AdminBlock
