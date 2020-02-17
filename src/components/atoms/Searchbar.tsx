import React from 'react';
import { InputBase } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import styled from 'styled-components';

interface Props {}

const StyledSearchbar = styled.div<any>`
  transition: all 0.3s ease;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 2vw;
  background: #f2f2f2;
  border-radius: 36px;
  padding: 8px 16px;
`;

const StyledIconSearch = styled(SearchIcon)<any>`
  margin-right: 8px;
`;

const Searchbar: React.FC<Props> = () => {
  return (
    <StyledSearchbar>
      <StyledIconSearch fontSize="large" />
      <InputBase placeholder="Recherche" />
    </StyledSearchbar>
  );
};

export default Searchbar;
